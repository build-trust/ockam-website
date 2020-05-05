---
order: 4
title: Generating random bytes
---

# Generating random bytes

Once we have an [initialized vault handle](../setup) of type `ockam_vault_t`, we can
call any of the functions from `ockam/vault.h` using this handle.

One such function is `ockam_vault_random_bytes_generate` which fills a buffer with
random bytes. It accepts a handle to an initialized vault, a pointer to the start of
a buffer and the size of the buffer.

```c
const size_t random_bytes_length               = 64;
uint8_t      random_bytes[random_bytes_length] = { 0 };

error = ockam_vault_random_bytes_generate(&vault, &random_bytes[0], random_bytes_length);
if (error) goto exit;
```

If the function succeeds the return value is non-zero.


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
