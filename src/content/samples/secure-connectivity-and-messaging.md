---
title: "Secure Connectivity & Messaging"
metaTitle: "Syntax Highlighting is the meta title tag for this page"
metaDescription: "This is the meta description for this page"
---

IoT systems are, at their core, messaging systems. Connected devices, around us, exchange billions of messages everyday. Applications send commands to remote devices as messages. Sensors collect data about the physical world and share them with servers as messages. Devices, in proximity of each other, use messages to communicate wirelessly. Firmware and configuration updates are also delivered as a series of messages.

![my image](assets/images/secure-connnectivity/secure-connectivity-image.png)

The transport protocols used to carry these messages vary across systems – TCP, TLS, HTTP, MQTT, CoAP, Bluetooth, NFC, LoRaWAN, NB-IoT, and many more. The schema, structure, and serialization format of messages also differ heavily across applications – Custom Binary, JSON, XML, Protocol Buffers, and many more.

This high degree of variation, in communication protocols, is why reasoning about security, trustworthiness and privacy has proven to be daunting for the larger IoT community. However, by focusing our efforts on the message layer and how trust is established in each type of message flowing within a system, Ockam enables us to build a robust, transport agnostic, end-to-end architecture for trust within our IoT solutions.
