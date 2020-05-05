---
order: 2
title: Setup a vault
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

Here the code that would initialize a handle to the stdlib implementation
of the memory interface. The stdlib implementation is

```c
ockam_memory_t memory;

error = ockam_memory_stdlib_init(&memory);
if (error) goto exit;
```

## Handle Errors

All ockam functions return a value of type `ockam_error_t` define in
`ockam/error.h`. If a function was successful this value is zero, if there
was an error this value is a non-zero error code.

## Setup Vault

To initialize a handle to the default vault, we define a variable of the
generic type `ockam_vault_t` that will hold a handle to our vault.

We also set the initialization attributes in a struct of
type `ockam_vault_default_attributes_t`, this includes setting the memory
attribute.

We then pass the address of both these variable to the default
implementation specific initialization function.

```c
ockam_vault_t                    vault;
ockam_vault_default_attributes_t vault_attributes = { .memory = &memory };

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

error = ockam_vault_random_bytes_generate(&vault, &random_bytes[0], random_bytes_length);
if (error) goto exit;
```

## Cleanup

Once we're done using the vault, we must cleanup any resource held by
the `vault` and `memory` handles.

```c
error = ockam_vault_deinit(&vault);
if (error) goto exit;

error = ockam_memory_deinit(&memory);
if (error) goto exit;
```

## Complete Example

```c

#include "ockam/error.h"

#include "ockam/memory.h"
#include "ockam/memory/stdlib.h"

#include "ockam/vault.h"
#include "ockam/vault/default.h"

#include <stdio.h>

int main(void)
{
  int exit_code = 0;
  ockam_error_t error;


  /* initialize a handle to stdlib implementation of the memory interface */

  ockam_memory_t memory;

  error = ockam_memory_stdlib_init(&memory);
  if (error) goto exit;


  /* initialize a handle to the default software implementation of the vault interface */

  ockam_vault_t                    vault;
  ockam_vault_default_attributes_t vault_attributes = { .memory = &memory };

  error = ockam_vault_default_init(&vault, &vault_attributes);
  if (error) goto exit;


  /* use the vault to generate random bytes */

  const size_t random_bytes_length               = 64;
  uint8_t      random_bytes[random_bytes_length] = { 0 };

  error = ockam_vault_random_bytes_generate(&vault, &random_bytes[0], random_bytes_length);
  if (error) goto exit;


  /* print the random bytes in hexadecimal form. */

  int i;
  for (i = 0; i < random_bytes_length; i++) printf("%02x", random_bytes[i]);
  printf("\n");


  /* cleanup */

  error = ockam_vault_deinit(&vault);
  if (error) goto exit;

  error = ockam_memory_deinit(&memory);

exit:
  if (error) exit_code = -1;
  return exit_code;
}
```
