---
order: 3
title: SHA-256
---

## SHA-256

Once we have an [initialized vault handle](../setup) of type `ockam_vault_t`, we can
call any of the functions from `ockam/vault.h` using this handle.

The vault function `ockam_vault_sha256` calculates a SHA-256 hash on input data. It
takes an input buffer and the length of the input buffer and returns a 32-byte SHA-256 digest.

```c
char*  input        = "hello world";
size_t input_length = strlen(input);

const size_t digest_size         = OCKAM_VAULT_SHA256_DIGEST_LENGTH;
uint8_t      digest[digest_size] = { 0 };
size_t       digest_length;

error = ockam_vault_sha256(&vault,
                           &input[0],
                           input_length,
                           &digest[0],
                           digest_size,
                           &digest_length);
if (error != OCKAM_ERROR_NONE) { goto exit; }
```

If the function succeeds the return value is `OCKAM_ERROR_NONE`.


## Complete Example

```c
#include "ockam/error.h"

#include "ockam/memory.h"
#include "ockam/memory/stdlib.h"

#include "ockam/random.h"
#include "ockam/random/urandom.h"

#include "ockam/vault.h"
#include "ockam/vault/default.h"

#include <stdio.h>
#include <string.h>

int main(void)
{
  int exit_code = 0;

  ockam_error_t error        = OCKAM_ERROR_NONE;
  ockam_error_t deinit_error = OCKAM_ERROR_NONE;

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

  /* Compute the SHA-256 hash of the input string */

  char*  input        = "hello world";
  size_t input_length = strlen(input);

  const size_t digest_size         = OCKAM_VAULT_SHA256_DIGEST_LENGTH;
  uint8_t      digest[digest_size] = { 0 };
  size_t       digest_length;

  error = ockam_vault_sha256(&vault,
                             &input[0],
                             input_length,
                             &digest[0],
                             digest_size,
                             &digest_length);
  if (error != OCKAM_ERROR_NONE) { goto exit; }

  int i;
  for (i = 0; i < digest_size; i++) { printf("%02x", digest[i]); }
  printf("\n");

exit:

  /* Deinitialize to free resources associated with this handle. */

  deinit_error = ockam_vault_deinit(&vault);
  ockam_random_deinit(&random);
  ockam_memory_deinit(&memory);

  if (error == OCKAM_ERROR_NONE) { error = deinit_error; }
  if (error != OCKAM_ERROR_NONE) { exit_code = -1; }
  return exit_code;
}

```
