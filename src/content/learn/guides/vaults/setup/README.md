---
order: 1
title: Setup a Vault
---

# Setup a vault

Ockam protocols depend on a variety of standard cryptographic primitives
or building blocks. Depending on the environment, these building blocks may
be provided by a software implementation or a cryptographically capable
hardware component.

In order to support a variety of cryptographically capable hardware, we
maintain loose coupling between a protocol and how a specific building block
is invoked in a specific hardware. This is achieved using the abstract vault
interface (defined in `ockam/vault.h`).

The default vault is a software-only implementation of the vault interface,
which may be used when a particular cryptographic building block is not
available in hardware.

This guide will show how to initial a handle to the default software vault
and use it call vault interface functions.


## Handle Errors

All ockam functions return a value of type `ockam_error_t` define in
`ockam/error.h`. If a function was successful this value is zero, defined as
`OCKAM_ERROR_NONE`.  If there was error this value is a non-zero error code.

```c
ockam_error_t error = OCKAM_ERROR_NONE;
```

## Setup Memory

Before we can initialize a handle to the default vault, we must first
initialize a handle to an implementation of the memory interface, which
is defined in `ockam/memory.h`.

The default vault requires a memory implementation handle at
initialization. This approach allows us to plugin the strategy for where
and how a vault should allocate memory.

We may provide a memory implementation that allocates using
stdlib (malloc, free ...) or we may instead provide a an implementation
that allocates from a fixed sized buffer.

Here is the code that would initialize a handle to the stdlib implementation
of the memory interface.

```c
ockam_memory_t memory = { 0 };

error = ockam_memory_stdlib_init(&memory);
if (error) goto exit;
```

## Setup Random

Another component needed by the default vault is a random generator
to generate a seed to initialize the default vault's psuedorandom
generator. The random generator needs to be initialized before the
default vault is initialized because the random generator must be passed
in as one of the initialization attributes.

Here is the code that would initialize a handle to the urandom implementation
of the random interface.

```c
ockam_random_t random = { 0 };

error = ockam_random_urandom_init(&random);
if (error) goto exit;
```

## Setup Vault

To initialize a handle to the default vault, we define a variable of the
generic type `ockam_vault_t` that will hold a handle to our vault.

We also set the initialization attributes in a struct of
type `ockam_vault_default_attributes_t`, this includes setting the memory
attribute.

We then pass the address of both these variable to the default
implementation specific initialization function.

```c
ockam_vault_t                    vault            = { 0 };
ockam_vault_default_attributes_t vault_attributes = { .memory = &memory, .random = &random };

error = ockam_vault_default_init(&vault, &vault_attributes);
if (error) goto exit;
```

## Generate Random Bytes

We now have an initialized vault handle of type ockam_vault_t, we can
call any of the functions from `ockam/vault.h` using this handle.

For example we can use it to generate an array of 64 random bytes.

```c
const size_t random_bytes_length               = 64;
uint8_t      random_bytes[random_bytes_length] = { 0 };

error = ockam_vault_random_bytes_generate(&vault,
                                          &random_bytes[0],
                                          random_bytes_length);
if (error) goto exit;
```

## Cleanup

Once we're done using the vault, we must cleanup any resource held by `vault`, `random` and
`memory` handles. Its important to not use goto exit after every deinit call as an application
should make a best effort to free everything. 

In this example, vault is the only handle that allocated memory internally so its ok to skip checking
the error codes from random and memory. The random and memory deinits should still be called so they 
handles are cleared out appropriately.

The deinits are placed below the exit label to ensure everything is cleaned up, even if an error
occurs. The variable `deinit_error` is used to capture the result of the vault deinit. If an error occurs
that triggers a goto exit, we do not want to overwrite error with the the deinit error status. Instead
we use deinit_error to store the deinit status and only returned if no errors occurred before the exit label.

```c
exit:

  deinit_error = ockam_vault_deinit(&vault);
  ockam_random_deinit(&random);
  ockam_memory_deinit(&memory);

  if (error == OCKAM_ERROR_NONE) { error = deinit_error; }
  if (error != OCKAM_ERROR_NONE) { exit_code = -1; }
  return exit_code;
```

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

int main(void)
{
  int exit_code = 0;
  ockam_error_t error        = OCKAM_ERROR_NONE;
  ockam_error_t deinit_error = OCKAM_ERROR_NONE;


  /* initialize a handle to stdlib implementation of the memory interface */

  ockam_memory_t memory = { 0 };

  error = ockam_memory_stdlib_init(&memory);
  if (error != OCKAM_ERROR_NONE) goto exit;

  /* initialize a handle to urandom implementation of the random interface */

  ockam_random_t random = { 0 };

  error = ockam_random_urandom_init(&random);
  if (error != OCKAM_ERROR_NONE) goto exit;


  /* initialize a handle to the default software implementation of the vault interface */

  ockam_vault_t                    vault            = { 0 };
  ockam_vault_default_attributes_t vault_attributes = { .memory = &memory, .random = &random };

  error = ockam_vault_default_init(&vault, &vault_attributes);
  if (error != OCKAM_ERROR_NONE) goto exit;


  /* use the vault to generate random bytes */

  const size_t random_bytes_length               = 64;
  uint8_t      random_bytes[random_bytes_length] = { 0 };

  error = ockam_vault_random_bytes_generate(&vault,
                                            &random_bytes[0],
                                            random_bytes_length);
  if (error != OCKAM_ERROR_NONE) goto exit;


  /* print the random bytes in hexadecimal form. */

  int i;
  for (i = 0; i < random_bytes_length; i++) printf("%02x", random_bytes[i]);
  printf("\n");

exit:

  /* Deinitialize to free resources associated with this handle. Save the vault deinit error status.*/
  deinit_error = ockam_vault_deinit(&vault);
  ockam_random_deinit(&random);
  ockam_memory_deinit(&memory);

  if (error == OCKAM_ERROR_NONE) { error = deinit_error; }
  if (error != OCKAM_ERROR_NONE) { exit_code = -1; }
  return exit_code;
}
```
