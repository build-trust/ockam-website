---
order: 7
title: Build a Vault Implementation
---

# Built a Vault Implementation

## Overview

The vault interface defines a common set of functions for cryptographic building blocks to be used by the Ockam protocols. The underlying implementation of these functions can vary depending on the platform or external cryptographic hardware being used. This guide will look at how a new implementation of vault can be written to work seamlessly with Ockam.

## Sections

- Vault Objects - Looks at the `ockam_vault_t` and `ockam_vault_secret_t` objects that are used by Ockam protocols to interact with a vault implementation.
- Vault Interface - Covers what happens between a call to a Vault interface function and a specific vault implementation function.
- Implementation Functions and Secrets - The code required for a sucessful vault implementation.
