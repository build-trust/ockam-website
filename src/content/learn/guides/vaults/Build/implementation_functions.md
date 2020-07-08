---
order: 10
title: Implementation Functions and Secrets
---

# Implementation Functions and Secrets

## Overview

A vault implementation must implement every function defined in the `ockam_vault_dispatch_table_t` which is found in `impl.h` at the top-level of vault. If a vault implementation does not have the ability to implement a specific function or set of functions, it can defer to the default vault for those implementations, however it is the responsibility of the vault implementation to initialize the default vault for whatever subset of functionality is needed.

## Implementation Cryptographic Functions

```c
  ockam_error_t (*deinit)(ockam_vault_t* vault);

  ockam_error_t (*random)(ockam_vault_t* vault, uint8_t* buffer, size_t buffer_size);

  ockam_error_t (*ecdh)(ockam_vault_t*        vault,
                        ockam_vault_secret_t* privatekey,
                        const uint8_t*        peer_publickey,
                        size_t                peer_publickey_length,
                        ockam_vault_secret_t* shared_secret);

  ockam_error_t (*hkdf_sha256)(ockam_vault_t*        vault,
                               ockam_vault_secret_t* salt,
                               ockam_vault_secret_t* input_key_material,
                               uint8_t               derived_outputs_count,
                               ockam_vault_secret_t* derived_outputs);

  ockam_error_t (*aead_aes_gcm_encrypt)(ockam_vault_t*        vault,
                                        ockam_vault_secret_t* key,
                                        uint16_t              nonce,
                                        const uint8_t*        additional_data,
                                        size_t                additional_data_length,
                                        const uint8_t*        plaintext,
                                        size_t                plaintext_length,
                                        uint8_t*              ciphertext_and_tag,
                                        size_t                ciphertext_and_tag_size,
                                        size_t*               ciphertext_and_tag_length);

  ockam_error_t (*aead_aes_gcm_decrypt)(ockam_vault_t*        vault,
                                        ockam_vault_secret_t* key,
                                        uint16_t              nonce,
                                        const uint8_t*        additional_data,
                                        size_t                additional_data_length,
                                        const uint8_t*        ciphertext_and_tag,
                                        size_t                ciphertext_and_tag_length,
                                        uint8_t*              plaintext,
                                        size_t                plaintext_size,
                                        size_t*               plaintext_length);
```

The functions above are part of the `ockam_vault_dispatch_table_t` and are the cryptographic building block functions. The function signatures match the definitions found in the `ockam_vault_xxx()` functions located in `vault.h`. The implementor of a vault must write code to implement the functionality required by each function.

## Implementation Secret Functions

```c
  ockam_error_t (*secret_generate)(ockam_vault_t*                         vault,
                                   ockam_vault_secret_t*                  secret,
                                   const ockam_vault_secret_attributes_t* attributes);

  ockam_error_t (*secret_import)(ockam_vault_t*                         vault,
                                 ockam_vault_secret_t*                  secret,
                                 const ockam_vault_secret_attributes_t* attributes,
                                 const uint8_t*                         input,
                                 size_t                                 input_length);

  ockam_error_t (*secret_export)(ockam_vault_t*        vault,
                                 ockam_vault_secret_t* secret,
                                 uint8_t*              output_buffer,
                                 size_t                output_buffer_size,
                                 size_t*               output_buffer_length);

  ockam_error_t (*secret_publickey_get)(ockam_vault_t*        vault,
                                        ockam_vault_secret_t* secret,
                                        uint8_t*              output_buffer,
                                        size_t                output_buffer_size,
                                        size_t*               output_buffer_length);

  ockam_error_t (*secret_attributes_get)(ockam_vault_t*                   vault,
                                         ockam_vault_secret_t*            secret,
                                         ockam_vault_secret_attributes_t* attributes);

  ockam_error_t (*secret_type_set)(ockam_vault_t*            vault,
                                   ockam_vault_secret_t*     secret,
                                   ockam_vault_secret_type_t type);

  ockam_error_t (*secret_destroy)(ockam_vault_t*        vault,
                                  ockam_vault_secret_t* secret);
```

The functions above are also part of the `ockam_vault_dispatch_table_t` structure but these functions focus on holding secrets for vault. Vault secrets can be private keys, shared secrets generated from ECDH, or AES keys. The interface for the secrets remains the same for the Ockam protocols, but the underlying implementations of these functions may differ.
