---
order: 9
title: Vault Interface
---

# Vault Interface

## Overview

The vault interface is used by the Ockam protocols for cryptographic building blocks to be used in the protocols. The interface sits between the modules calling Vault and the implemenation functions. The interface is responsible for common error checking and calling the correct implementation function as specified in the dispatch table.

## Vault Interface Header

The header file `vault.h` defines the vault interface functions. These functions are the ones called by the Ockam protocols.

```c
  error = ockam_vault_sha256(xx->vault, string, SHA256_SIZE + b_length, hash, SHA256_SIZE, &hash_length);
  if (error) goto exit;
```

The code snippet above is from the XX key agreement module. Here the key agreement module knows nothing about the underlying implementation of Vault. It passes data to the SHA-256 functions and just expects the digest in return. The digest could have been calculated in a software library or an external hardware module, either way the key agreement code does not know.

## Vault Interface

```c
ockam_error_t ockam_vault_sha256(ockam_vault_t* vault,
                                 const uint8_t* input,
                                 size_t         input_length,
                                 uint8_t*       digest,
                                 size_t         digest_size,
                                 size_t*        digest_length)
{
  ockam_error_t error = OCKAM_ERROR_NONE;

  if ((vault == 0) || (digest == 0)) {
    error = OCKAM_VAULT_ERROR_INVALID_PARAM;
    goto exit;
  }

  error = vault->dispatch->sha256(vault, input, input_length, digest, digest_size, digest_length);

exit:
  return error;
}
```

The code above is a snippet from `vault.c`. All `ockam_vault_xxx()` functions follow a similar format. When the key agreement code calls one of the interface functions, the code first enters the functions defined in `vault.c`, such as the SHA-256 example above. The interface then does interface level error checking that is enforced no matter what the underlying implementation is. After the error checking, the function for SHA-256 in the dispatch table is called with the same parameters to execute the implementation specific function.
