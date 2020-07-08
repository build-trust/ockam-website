---
order: 2
title: Generate Random Bytes
---

## Generate random bytes

Once we have an [initialized vault handle](../setup) of type `ockam_vault_t`, we can
call any of the functions from `ockam/vault.h` using this handle.

One such function is `ockam_vault_random_bytes_generate` which fills a buffer with
random bytes. It accepts a handle to an initialized vault, a pointer to the start of
a buffer and the size of the buffer.

```c
const size_t random_bytes_length               = 64;
uint8_t      random_bytes[random_bytes_length] = { 0 };

error = ockam_vault_random_bytes_generate(&vault,
                                          &random_bytes[0],
                                          random_bytes_length);
if (error) goto exit;
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

  /* Fill the random bytes buffer with 64 bytes of random data */

  const size_t random_bytes_length               = 64;
  uint8_t      random_bytes[random_bytes_length] = { 0 };

  error = ockam_vault_random_bytes_generate(&vault,
                                            &random_bytes[0],
                                            random_bytes_length);
  if (error != OCKAM_ERROR_NONE) { goto exit; }

  int i;
  for (i = 0; i < random_bytes_length; i++) { printf("%02x", random_bytes[i]); }
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
