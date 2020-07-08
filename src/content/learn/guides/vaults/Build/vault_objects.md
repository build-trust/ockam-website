---
order: 8
title: Vault Objects
---

# Vault Objects

## Ockam Vault Object

```c
struct ockam_vault {
  ockam_vault_dispatch_table_t* dispatch;
  void*                         default_context;
  void*                         impl_context;
};
```

The vault object `ockam_vault_t` contains the dispatch table, the context structure for the default vault and the implementation specific context structure. The reason for the two context structures is some implementation specific platforms may not offer all functionality needed for a full vault implementation. By mixing the default vault with other platforms it allows for a wider range of platform support.

### Dispatch Table

The dispatch table is a function table that gets loaded with the implementation specific functions. The signatures of the functions are located in `impl.h`. Every function must be mapped to an implementation of the function. If, for example, a hardware platform does not have the full capabilities of the vault interface, it is possible for that implementation to map some functions to the default vault.

```c
ockam_vault_dispatch_table_t vault_atecc608a_dispatch_table = {
  &vault_atecc608a_deinit,
  &vault_atecc608a_random,
  &vault_atecc608a_sha256,
  &vault_atecc608a_secret_generate,
  &vault_atecc608a_secret_import,
  &vault_atecc608a_secret_export,
  &vault_atecc608a_secret_publickey_get,
  &vault_atecc608a_secret_attributes_get,
  &vault_atecc608a_secret_type_set,
  &vault_atecc608a_secret_destroy,
  &vault_atecc608a_ecdh,
  &vault_atecc608a_hkdf_sha256,
  &vault_atecc608a_aead_aes_gcm_encrypt,
  &vault_atecc608a_aead_aes_gcm_decrypt,
};
```

The table above is an example from the ATECC608A dispatch table. The ATECC608A has the ability to implement all vault functions so the default vault is not needed.

### Default Context Structure

```c
typedef struct {
  ockam_memory_t* memory;
  ockam_random_t* random;
  uint32_t        features;
  uint32_t        default_features;
  void*           random_ctx;
  void*           sha256_ctx;
  void*           hkdf_sha256_ctx;
  void*           aead_aes_gcm_ctx;
} ockam_vault_default_context_t;
```

The default context structure is used by the default vault. The contents of the default context structure should only ever be modified by the default vault.

### Implementation Specific Context Structure

```c
typedef struct {
  ockam_memory_t*                       memory;
  ockam_mutex_t*                        mutex;
  ockam_mutex_lock_t                    lock;
  ockam_vault_atecc608a_io_protection_t io_protection;
  vault_atecc608a_cfg_t                 config;
  vault_atecc608a_slot_cfg_t            slot_config[VAULT_ATECC608A_NUM_SLOTS];
} vault_atecc608a_context_t;
```

The implementation context structure is completely dependant on the hardware or software platform a vault implementator is using. Above is an example of the Microchip ATECC608A context structure. Most vaults will need a reference to a ockam memory object to be able to allocate and free memory. Since the ATECC608A is hardware that uses an I2C bus, a mutex can be passed in to allow for multiple instances of vault to use the ATECC608A but not interfere with one another. Other data in the context structure is specific to the ATECC608A such as the IO protection key or the slot configuration. The use of the implementation context structure is completely up to whoever writes a vault implementation.

## Ockam Vault Secret Object

### Secret Object

```c
/**
 * @struct  ockam_vault_secret_t
 * @brief   Secret key data for use by Vault
 */
typedef struct {
  ockam_vault_secret_attributes_t attributes;
  void*                           context;
} ockam_vault_secret_t;
```

The vault secret object is a similar structure to the vault object, however instead of holding a dispatch table it holds an attributes structure. The attributes data is common across all implementations of a vault secret object and the context structure holds implementation specific data. If a vault implementation has the ability to store secrets securely, the context structure may just contain an id to wherever the data is stored. In other implementations where it does not have the ability to store data, the context structure may be a little more complex and contain buffers of secret data.

### Secret Attributes

```c
typedef enum {
  OCKAM_VAULT_SECRET_TYPE_BUFFER = 0,
  OCKAM_VAULT_SECRET_TYPE_AES128_KEY,
  OCKAM_VAULT_SECRET_TYPE_AES256_KEY,
  OCKAM_VAULT_SECRET_TYPE_CURVE25519_PRIVATEKEY,
  OCKAM_VAULT_SECRET_TYPE_P256_PRIVATEKEY,
} ockam_vault_secret_type_t;

/**
 * @enum    ockam_vault_secret_persistence_t
 * @brief   Types of secrets vault can handle.
 */
typedef enum {
  OCKAM_VAULT_SECRET_EPHEMERAL = 0,
  OCKAM_VAULT_SECRET_PERSISTENT,
} ockam_vault_secret_persistence_t;

/**
 * @enum    ockam_vault_secret_purpose_t
 * @brief   Types of uses for a secret
 */
typedef enum {
  OCKAM_VAULT_SECRET_PURPOSE_KEY_AGREEMENT = 0,
} ockam_vault_secret_purpose_t;

/**
 * @struct  ockam_vault_secret_attributes_t
 * @brief   Attributes for a specific ockam vault secret.
 */
typedef struct {
  uint16_t                         length;
  ockam_vault_secret_type_t        type;
  ockam_vault_secret_purpose_t     purpose;
  ockam_vault_secret_persistence_t persistence;
} ockam_vault_secret_attributes_t;
```

A secret's attributes structure holds four pieces of information: type of secret, persistance of secret, purpose of the secret and the length of the secret. The specific uses of the secret attributes changes based on the type of secret being stored. For example, a private key length is already known so a vault implementation can choose to ignore the private key length field because it does not change.

### Context Structure

```c
/**
 * @brief Context data for the ATECC608A secrets
 */
typedef struct {
  uint16_t slot;
  uint8_t *buffer;
  size_t buffer_size;
} vault_atecc608a_secret_context_t;
```

The context structure changes depending on the specific vault implementation. The context structure shown above is use in the ATECC608A implementation. It has the ability to store some secrets in slots on the device, while other secrets get pulled out of the ATECC608A and stored in buffers inside vault. The implementation of a secret for a new vault implementation will completely depend on the new implementations ability to store secrets.
