---
order: 4
title: Key Generation/ECDH
---

# Key Generation/ECDH

The ECDH operation requires the use of `ockam_vault_secret_t` to contain a private key. Additionally the output
of the ECDH operation will be another `ockam_vault_secret_t`. This guide will walk through creating 2 private key
secrets, retrieving the public keys for each secret, performing ECDH on each private key with the other's public
key and retrieving the matching shared secrets from the two ECDH operations.


## Secret Generate

To generate a private key on Curve25519, `ockam_vault_secret_t` and `ockam_vault_secret_attributes_t` structs must be declared.
The attributes field must be populated as shown below. The length field can be set to zero as the size of a Curve25519 is fixed
as part of Ockam Vault. 

```c
  ockam_vault_secret_t            secret     = { 0 };
  ockam_vault_secret_attributes_t attributes = { 0 };

  attributes.length      = 0;
  attributes.type        = OCKAM_VAULT_SECRET_TYPE_CURVE25519_PRIVATEKEY;
  attributes.purpose     = OCKAM_VAULT_SECRET_PURPOSE_KEY_AGREEMENT;
  attributes.persistence = OCKAM_VAULT_SECRET_EPHEMERAL;

  error = ockam_vault_secret_generate(&vault, &secret, &attributes);
  if (error != OCKAM_ERROR_NONE) { goto exit; }
```

The result of the `ockam_vault_secret_generate` function is a newly generated private key stored in Vault.


## Public Key Retrieval 

Once a private key has been generated, the public key can be retrieved from the private key and stored into
a buffer passed into the function `ockam_vault_secret_publickey_get`. The size of the Curve25519 public key
is provided in vault.h as a define. The public key buffer must be at least the size of the define, but it is
valid to be larger than the defined length. The amount of data actually placed in the buffer is set in the length field.

```c
size_t  public_key_length                                   = 0;
uint8_t public_key[OCKAM_VAULT_CURVE25519_PUBLICKEY_LENGTH] = { 0 };

error = ockam_vault_secret_publickey_get(&vault,
                                         &secret,
                                         &public_key[0],
                                         OCKAM_VAULT_CURVE25519_PUBLICKEY_LENGTH,
                                         &public_key_length);
  if (error != OCKAM_ERROR_NONE) { goto exit; }
  if (public_key_length != OCKAM_VAULT_CURVE25519_PUBLICKEY_LENGTH) { goto exit; }
```

## ECDH

To calculate the shared secret using ECDH, a private key in a vault secret and a public key is needed. The
sample below assumes the device executing the ECDH operation has received a public key from a device its attempting
to communicate with. The the private key secret is passed in along with the public key and the result is a new
vault secret containing the calculated shared secret. The secret type will be set to `OCKAM_VAULT_SECRET_TYPE_BUFFER`. 

```c
ockam_vault_secret_t shared_secret = { 0 };

error = ockam_vault_ecdh(&vault,
                         &secret,
                         &external_public_key[0],
                         OCKAM_VAULT_CURVE25519_PUBLICKEY_LENGTH,
                         &shared_secret);
if (error != OCKAM_ERROR_NONE) { goto exit; }
```

## Complete Example

The sample below shows the following:
* Generate two private keys.
* Retrive the two public keys.
* Calculate the shared secrets.
* Retrieve the shared secrets and print out to show they match.

```c

#include "ockam/error.h"

#include "ockam/memory.h"
#include "ockam/memory/stdlib.h"

#include "ockam/random.h"
#include "ockam/random/urandom.h"

#include "ockam/vault.h"
#include "ockam/vault/default.h"

#include <stdio.h>

int main(void)
{
  int exit_code = 0;

  ockam_error_t error   = OCKAM_ERROR_NONE;
  ockam_error_t t_error = OCKAM_ERROR_NONE;

  /* Initialize the default vault using urandom for random and stdlib for memory */

  ockam_memory_t                   memory           = { 0 };
  ockam_random_t                   random           = { 0 };
  ockam_vault_t                    vault            = { 0 };
  ockam_vault_default_attributes_t vault_attributes = { .memory = &memory, .random = &random };

  error = ockam_memory_stdlib_init(&memory);
  if (error != OCKAM_ERROR_NONE) { goto exit; }

  error = ockam_random_urandom_init(&random);
  if (error != OCKAM_ERROR_NONE) { goto exit; }

  error = ockam_vault_default_init(&vault, &vault_attributes);
  if (error != OCKAM_ERROR_NONE) { goto exit; }

  /* Generate private key secrets for the initiator and responder */

  ockam_vault_secret_t            initiator_secret = { 0 };
  ockam_vault_secret_t            responder_secret = { 0 };
  ockam_vault_secret_attributes_t attributes       = { 0 };

  attributes.length      = 0;
  attributes.type        = OCKAM_VAULT_SECRET_TYPE_CURVE25519_PRIVATEKEY;
  attributes.purpose     = OCKAM_VAULT_SECRET_PURPOSE_KEY_AGREEMENT;
  attributes.persistence = OCKAM_VAULT_SECRET_EPHEMERAL;

  error = ockam_vault_secret_generate(&vault, &initiator_secret, &attributes);
  if (error != OCKAM_ERROR_NONE) { goto exit; }

  error = ockam_vault_secret_generate(&vault, &responder_secret, &attributes);
  if (error != OCKAM_ERROR_NONE) { goto exit; }

  /* Retrieve the public keys for both initiator and responder */

  size_t public_key_length = 0;

  uint8_t initiator_public_key[OCKAM_VAULT_CURVE25519_PUBLICKEY_LENGTH] = { 0 };
  uint8_t responder_public_key[OCKAM_VAULT_CURVE25519_PUBLICKEY_LENGTH] = { 0 };

  error = ockam_vault_secret_publickey_get(&vault,
                                           &initiator_secret,
                                           &initiator_public_key[0],
                                           OCKAM_VAULT_CURVE25519_PUBLICKEY_LENGTH,
                                           &public_key_length);
  if (error != OCKAM_ERROR_NONE) { goto exit; }
  if (public_key_length != OCKAM_VAULT_CURVE25519_PUBLICKEY_LENGTH) { goto exit; }

  error = ockam_vault_secret_publickey_get(&vault,
                                           &responder_secret,
                                           &responder_public_key[0],
                                           OCKAM_VAULT_CURVE25519_PUBLICKEY_LENGTH,
                                           &public_key_length);
  if (error != OCKAM_ERROR_NONE) { goto exit; }
  if (public_key_length != OCKAM_VAULT_CURVE25519_PUBLICKEY_LENGTH) { goto exit; }

  /* 
   * Calculate two shared secrets: initiator private/responder public and responder 
   * private/initiator public.
   */

  ockam_vault_secret_t shared_secret_0 = { 0 };
  ockam_vault_secret_t shared_secret_1 = { 0 };

  error = ockam_vault_ecdh(&vault,
                           &initiator_secret,
                           &responder_public_key[0],
                           OCKAM_VAULT_CURVE25519_PUBLICKEY_LENGTH,
                           &shared_secret_0);
  if (error != OCKAM_ERROR_NONE) { goto exit; }

  error = ockam_vault_ecdh(&vault,
                           &responder_secret,
                           &initiator_public_key[0],
                           OCKAM_VAULT_CURVE25519_PUBLICKEY_LENGTH,
                           &shared_secret_1);
  if (error != OCKAM_ERROR_NONE) { goto exit; }

  /* Retrieve the two calculated shared secrets and print them out */

  size_t shared_secret_length = 0;

  uint8_t shared_secret_0_data[OCKAM_VAULT_SHARED_SECRET_LENGTH] = { 0 };
  uint8_t shared_secret_1_data[OCKAM_VAULT_SHARED_SECRET_LENGTH] = { 0 };

  error = ockam_vault_secret_export(&vault,
                                    &shared_secret_0,
                                    &shared_secret_0_data[0],
                                    OCKAM_VAULT_SHARED_SECRET_LENGTH,
                                    &shared_secret_length);
  if (error != OCKAM_ERROR_NONE) { goto exit; }
  if (shared_secret_length != OCKAM_VAULT_CURVE25519_PUBLICKEY_LENGTH) { goto exit; }

  error = ockam_vault_secret_export(&vault,
                                    &shared_secret_1,
                                    &shared_secret_1_data[0],
                                    OCKAM_VAULT_SHARED_SECRET_LENGTH,
                                    &shared_secret_length);
  if (error != OCKAM_ERROR_NONE) { goto exit; }
  if (shared_secret_length != OCKAM_VAULT_CURVE25519_PUBLICKEY_LENGTH) { goto exit; }

  int i;
  printf("Shared Secret 0: ");
  for (i = 0; i < OCKAM_VAULT_CURVE25519_PUBLICKEY_LENGTH; i++) { printf("%02x", shared_secret_0_data[i]); }
  printf("\n");

  printf("Shared Secret 1: ");
  for (i = 0; i < OCKAM_VAULT_CURVE25519_PUBLICKEY_LENGTH; i++) { printf("%02x", shared_secret_1_data[i]); }
  printf("\n");

exit:

  /* Destroy the secrets to free the associated resources */

  ockam_vault_secret_destroy(&vault, &initiator_secret);
  ockam_vault_secret_destroy(&vault, &responder_secret);
  ockam_vault_secret_destroy(&vault, &shared_secret_0);
  ockam_vault_secret_destroy(&vault, &shared_secret_1);

  /* Deinitialize to free resources associated with this handle. */

  t_error = ockam_vault_deinit(&vault);
  ockam_random_deinit(&random);
  ockam_memory_deinit(&memory);

  if (error == OCKAM_ERROR_NONE) { error = t_error; }
  if (error != OCKAM_ERROR_NONE) { exit_code = -1; }
  return exit_code;
}
```
