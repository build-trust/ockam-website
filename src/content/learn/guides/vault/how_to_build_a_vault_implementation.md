---
title: How to build a vault implementation
order: 2
---

# How to build a vault implementation

## Overview

The Ockam protocols require the use of a number of cryptographic building blocks in order to establish secure channels. Since these protocols can be run on many different types of platforms, they must be able to support a variety of different cryptographic functions; whether its in a software library, an external secure element or a combination of both. Ockam Vault provides the necessary common interface to cryptographic hardware and software to provide a set of building blocks needed for the Ockam protocols to establish secure channels.

This guide will look at how an Ockam Vault was built for the Microchip ATECC608A and look at how to implement a new Ockam Vault on an external secure element or a host-based software library. The guide has been broken up small groups of related cryptographic building blocks. An Ockam Vault has the flexibility to pick and choose which building blocks to implement, but once it has been decided that a Vault will implement a building block, all functions in that building block must be implemented. In cases where a Vault does not implement the full set of building blocks, another Vault must be used in conjunction to supplement the missing building blocks.

Below, each set of building blocks will have the following sections:
* **Overview** - Gives a general overview of what Vault is accomplishing in the specific building block.
* **Function(s)** - The function(s) associated with the building block.
* **ATECC608A** - Looks at how the Ockam Vault code has been written for Microchip's ATECC608A.
* **New Implementation** - Tips on how to implement a new Vault for the specific building block.

**Note** - All functions listed below will contain **xxx** in their definition. In a Vault implementation this will be replaced with host or tpm/secure element.

---

## Configuration

### Overview
Ockam Vault uses a configuration header file to signal to Vault whether a building block is located in a host-based software library or an external secure element. In some cases cryptographic hardware may not support all of the necessary building blocks required by Vault so the use of a software library is needed along with the external secure element. The configuration file allows the developer to specify where each set of functions can be found and since this is done at compile time, any issues with missing functions are detected immediately.

### Sample Config File - ATECC608A
```c
#define OCKAM_VAULT_CFG_INIT               OCKAM_VAULT_TPM_MICROCHIP_ATECC608A
#define OCKAM_VAULT_CFG_RAND               OCKAM_VAULT_TPM_MICROCHIP_ATECC608A
#define OCKAM_VAULT_CFG_KEY_ECDH           OCKAM_VAULT_TPM_MICROCHIP_ATECC608A
#define OCKAM_VAULT_CFG_SHA256             OCKAM_VAULT_TPM_MICROCHIP_ATECC608A
#define OCKAM_VAULT_CFG_HKDF               OCKAM_VAULT_TPM_MICROCHIP_ATECC608A
#define OCKAM_VAULT_CFG_AES_GCM            OCKAM_VAULT_TPM_MICROCHIP_ATECC608A
```

### ATECC608A
The sample of the configuration file for the Microchip ATECC608A as shown above can also be found [here](https://github.com/ockam-network/ockam/blob/develop/implementations/c/test/ockam/vault/atecc608a/config/vault_config.h). The Microchip ATECC608A has all the functionality required to implement a full Ockam Vault so no other software library is needed. In comparison, the Microchip ATECC508A does not have AES support so it must be used with a software library. A sample of the Microchip ATECC508A config file where it uses the secure element and a software library (Mbed Crypto) can be found [here](https://github.com/ockam-network/ockam/blob/develop/implementations/c/test/ockam/vault/atecc508a/config/vault_config.h).

**Note**: This guide assumes the Microchip ATECC608A has already been configured and locked by an external utility. One slot must be configured to be the IO Protection Key and allow for it to be written on boot-up. There must be at least 2 slots available that support NIST P-256 key generation, public key retrieval and ECDH. Additionally there must be one 72 byte slot available for HMAC/SHA256, one 72 byte slot configured for AES operations and SHA-256 must be enabled.

### New Implementation
A blank template config file can be found [here](https://github.com/ockam-network/ockam/blob/develop/implementations/c/config/vault_config.h). When adding a new platform to Vault, a define must be added to the `vault/define.h` file. There are two different types of Vaults that can be defined: host and tpm/secure element. A host Vault is code that runs on the same platform the Ockam protocols are run on. A TPM or Secure Element Vault is an external piece of hardware that requires the use of a communication protocol such as I2C, SPI, USB, or UART.

After the new platform is added to the define file, a config header file can be built up from the template provided above. The config header file then must be included as a compiler definition in the following format `-DVAULT_CONFIG_FILE=vault_config.h`.

---

## Initialization

### Overview
The first Vault function called at runtime must always be the initialization function. This call is responsible for initializing any secure element/TPM and/or host-based software library. Void pointers are passed in rather than specific structures because the initialization for each Vault is slightly different. The first step any Vault should take is to cast the void pointer into the expected initialization structure. Once Vault has the data in the correct format it can begin the initialization process.

### Function
```c
OCKAM_ERR ockam_vault_xxx_init(void *p_arg);
```

### ATECC608A
To initialize the Microchip ATECC608A, a number of steps must be taken to ensure the hardware is initialized correctly before Vault can use it. The Vault code uses Microchip’s CryptoAuthLib to handle the I2C communication with the ATECC608A for sending and receiving data. Using CryptoAuthLib the following steps are taken:
1. From the void pointer the ATECC608A Vault gets the initialization data and passes in the interface configuration to CryptoAuthLib.
2. Memory is allocated to read and store the ATECC608A's configuration zone data.
3. The configuration zone data is read and Vault checks that the I2C device it is communicating with is the expected part and that the configuration zone is locked. If the configuration zone is not locked, the ATECC608A will not run any cryptographic functions so Vault must return a failure.
4. If everything has checked out this far, the IO protection key is written. This key is used to protect sensitive data when it is sent via I2C to and from the ATECC608A. For this implementation of Vault, the key is written every time Vault is initialized. In a production system, Vault should be modified to know the IO protection key but never write it to the ATECC608A. Rather the key should be burned into the ATECC608A when it is manufactured or configured.

### New Implementation
In a new Vault implementation, the most important task accomplished by the init function is that after it completes without error, all Vault functions are available for use (excluding functions that may require keys or other data to be loaded before execution). Each secure element or software library will have different requirements as to what constitutes when it has been successfully initialized.

---

## Random Number Generation

### Overview
The Ockam Vault random function provides arguments that allow the caller to specify a buffer for the random number and the size of the buffer. On some platforms there may be a fixed size random number that is returned and others may have the flexibility to return any size random number.

### Function
```c
OCKAM_ERR ockam_vault_xxx_random(uint8_t *p_rand_num, uint32_t rand_num_size);
```

### ATECC608A
The ATECC608A always returns a 32-byte array of data. Due to this, the ATECC608A Vault requires a 32-byte buffer to be passed into the random command.

### New Implementation
The random function in an Ockam Vault implementation must be able to return a random number of the specified size or return an error if its not able to support the requested size.

---

## Public/Private Keys and ECDH

### Overview
The following group of functions are all tied together due to their need to support the same elliptic curve. These functions must always be implemented on the same on the same Vault platform:
* Key Generation
* Public Key Retrieval
* Private Key Writes
* Elliptic Curve Diffie Hellman (ECDH)

The public key retrieval and ECDH functions are always required for this building block, but it is possible to implement the building block with only private key generation or private key writes. It is **highly** recommended to always have private key generation as that is always preferable to passing around private key values via the write command.

### Functions
```c
OCKAM_ERR ockam_vault_xxx_key_gen(OCKAM_VAULT_KEY_e key_type);

OCKAM_ERR ockam_vault_xxx_key_get_pub(OCKAM_VAULT_KEY_e key_type,
                                      uint8_t *p_key_pub, uint32_t key_pub_size);

OCKAM_ERR ockam_vault_xxx_key_write(OCKAM_VAULT_KEY_e key_type,
                                    uint8_t *p_key_priv, uint32_t key_priv_size);

OCKAM_ERR ockam_vault_xxx_ecdh(OCKAM_VAULT_KEY_e key_type,
                               uint8_t *p_key_pub, uint32_t key_pub_size,
                               uint8_t *p_ss, uint32_t ss_size);
```

### ATECC608A
The Microchip ATECC608A supports all four of the operations for this building block, but with one caveat. The ATECC608A only supports the NIST P-256 curve. This means all other devices running the same Ockam protocols that wish to talk to this device must support the NIST P-256 curve. The protocols will be able to handle negotiations between devices to ensure communication is done via the right curve, but in order to establish a connection with another device they must both support the same elliptic curve.

One of the most important features of the ATECC608A secure element, and most external secure elements, is the ability to securely generate private keys that can never be retrieved from the device. In order to generate a key on the ATECC608A, a random number must first be generated and fed back into the ATECC608A via the nonce load command to ensure randomness of the generated key. After the nonce is loaded into the ATECC608A, the key can be generated in the desired slot. Currently Vault supports a static and ephemeral key slot. After the key has been generated the public key can be retrieved via the get public key function.

In addition to generating a private key, Vault offers a function called key write to write a private key into the device. The ATECC608A does support this functionality but it is not currently implemented. The use of this command should be limited for test purposes as there is a security risk of exposing the private key when writing it to the device. Once the key is written to the ATECC608A, the public key retrieval function works the same as if the key was generated. It is important to remember that if a private key is written to the ATECC608A, it must be a NIST P-256 curve key as that is the only curve supported by the ATECC608A.

Finally, the ATECC608A supports the ECHD operation using a private key in the device and a public key passed in. The private key is specified by the slot the key is located in on the device.


### New Implementation
As mentioned in the overview section, a Vault implementation for this building block is required to implement public key retrieval, ECDH and either private key generation or private key writes. It is not recommended to select a platform that does not support private key generation.

---

## SHA-256

### Overview
Some Ockam protocols uses SHA-256 hashing to ensure both parties are communicating securely and in the expected order. Vault provides a simple SHA-256 hashing function for the protocols to use.

### Function
```c
OCKAM_ERR ockam_vault_xxx_sha256(uint8_t *p_msg, uint16_t msg_size,
                                 uint8_t *p_digest, uint8_t digest_size);
```

### ATECC608A
The ATECC608A provides a SHA-256 hashing function that Ockam Vault uses for hashing.

On the ATECC608A the SHA commands use the SHA Context Buffer to store on-going hashes. This buffer is used by the SHA-256 command and the HMAC/SHA-256 command. Since the HMAC/SHA-256 command is used by Vault’s HKDF operation this means Vault can not offer to persist the SHA context unless it stores it locally on the host.

### New Implementation
A new Ockam Vault implementation must offer a SHA-256 hashing function that can take in a message and generate a digest. Since some hardware platforms may share its SHA buffer with other functions, it is not necessary to provide a way to persist the message over multiple function calls, that responsibility is put on the caller.

---

## HKDF

### Overview
After a shared secret from the ECDH operation has been generated, the shared secret is run through the HMAC-based Extract-and-Expand Key Derivation Function (HKDF). Vault must implement a HKDF function following the standard set in [RFC 5869](https://tools.ietf.org/html/rfc5869).

### Function
```c
OCKAM_ERR ockam_vault_xxx_hkdf(uint8_t *p_salt, uint32_t salt_size,
                               uint8_t *p_ikm, uint32_t ikm_size,
                               uint8_t *p_info, uint32_t info_size,
                               uint8_t *p_out, uint32_t out_size);
```

### ATECC608A
The ATECC608A offers a HKDF operation via the KDF command, but only supports a single iteration of HMAC/SHA-256. Rather than use the HKDF command and reload data into slots for each iteration, Vault implements the extract and expand stages.

Before the extract stage, the salt is written into the HKDF-specific key slot on the ATECC608A. Then using the SHA HMAC command the shared secret is fed into the HMAC/SHA-256 hash and the output is the pseudo-random key. The pseudo-random key is then written to the same HKDF-specific key slot, overwriting the salt value. Then the expand stage is run in as many iterations as needed to expand the key out to the desired length.


### New Implementation
Depending on the platform chosen for a new implementation of Vault, the level of support for HKDF may vary. The minimum requirement is that the chosen platform has the ability to perform a HMAC/SHA-256 hash. In the case of only supporting a HMAC/SHA-256 hash the developer of the Vault needs to implement the extract and expand stages as defined in [RFC 5869](https://tools/ietf.org/html/rfc5869). Other platforms may offer a HKDF operation that can be implemented directly.

---

## AES GCM

### Overview
From the output of the HKDF operation, a secure key has now been established. The secure key is used for AES-GCM-128 to encrypt and decrypt data shared between the two parties who have established their secure channel. At this time only AES-GCM-128 is supported in the protocols due to the limited support of AES-GCM in hardware.

### Functions
```c
OCKAM_ERR ockam_vault_xxx_aes_gcm_encrypt(uint8_t *p_key, uint32_t key_size,
                                          uint8_t *p_iv, uint32_t iv_size,
                                          uint8_t *p_aad, uint32_t aad_size,
                                          uint8_t *p_tag, uint32_t tag_size,
                                          uint8_t *p_input, uint32_t input_size,
                                          uint8_t *p_output, uint32_t output_size);

OCKAM_ERR ockam_vault_xxx_aes_gcm_decrypt(uint8_t *p_key, uint32_t key_size,
                                          uint8_t *p_iv, uint32_t iv_size,
                                          uint8_t *p_aad, uint32_t aad_size,
                                          uint8_t *p_tag, uint32_t tag_size,
                                          uint8_t *p_input, uint32_t input_size,
                                          uint8_t *p_output, uint32_t output_size);
```

### ATECC608A
The ATECC608A provides the ability to encrypt and decrypt data using AES-GCM-128. The following steps cover the process required for both encryption and decryption:
1. Validate all parameters. The key and input vector are always required for encryption and decryption. Also, a tag buffer is needed for encryption and decryption. During encryption the tag buffer will be filled with the tag data and during decryption the tag data must be passed in for a valid decryption operation.
2. Write the AES key to the AES slot on the ATECC608A. When the ATECC608A is configured, at least one slot must be configured for AES operations.
3. Initialize the AES GCM context data by specifying the AES key and the initialization vector.
4. Add the AAD data to the AES GCM context.
5. If the operation is encrypt, pass in the input buffer, tag buffer and specify encrypt. If the operation is decrypt, pass in the input buffer, tag buffer and specify decrypt.
6. Check the is_verified flag if the operation was decrypt.

After these steps, either the encrypted data or the decrypted data is located in the p_output buffer.

### New Implementation

If the selected platform supports AES-GCM-128, the parameters being passed in should line up with the chosen platform's AES GCM functions. Before passing data into the AES-GCM-128 function the validity of the paramters should be checked, however it is worth nothing that it is valid to pass in a 0 size for the input and output buffers, but it is never valid to pass in a 0 size for the tag buffer. Also, the key size should be checked before proceeding with the AES GCM operation to ensure it is a 128-bit key.
