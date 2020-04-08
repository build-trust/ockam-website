---
title: "The Nine-Factors Of A Well Tuned Network Of Connected Devices"
date: 2019-04-15
description: "The Nine-Factors Of A Well Tuned Network Of Connected Devices"
metaTitle: "IoT and distributed systems are all unique. They are complicated. Let's look at what makes them the same."
author: "Matthew Gregory"
authorAvatar: ./assets/matthew_gregory-1.png
---
***“Ockam is tuned for connected devices”***

So what exactly goes into tuning a network for IoT? Let me tell you about the the nine-factors that influence IoT network design:

### Factor I: IoT Is Naturally Multi-Party.

One brand’s device needs to talk to another brand’s device and it needs to be controlled by an app that runs on another machine: that’s multi-party. Connecting devices is a n-squared problem. To connect nodes of a network, you need as many connections as the number of devices and apps in the system — squared. This is typically done with APIs and each device, or back-end server, needs to work with as many APIs as it is connected to. Changes to APIs require changes to firmware. This is impossible to scale across all the permutations of APIs that any one device could connect to.

Multiple parties need a simple and common way to trustfully interact. The open source Ockam is shared by the entire ecosystem — as opposed to some of the emerging IoT Platforms that are centrally controlled and operated by a potentially competitive stakeholder. The Ockam Network is designed around community building in multi-party IoT systems.

### Factor II. Cloud Technologies Are Organized Horizontally, So IoT Tools Need To Connect To Other Standards And Systems.

In a previous blog I discussed why developers hate the idea of universal, siloed, do-it-all, top-to-bottom IoT ‘platforms’. The cloud’s developer tools and services are organized into horizontal specialized layers that make up stacks. Ockam must be interoperable with other layers in an IoT stack.

Ockam Network uses a common identity standard called DIDs (Decentralized Identifiers). This makes it easy to create cryptographically secure identities for an array of entities. This feature extends not just to devices, but also possible for DIDs that represent people, organizations, or any type of entity that you could think of compatible with an did:ockam registered device. In this way, developers are able to easily codify complex graph relationships between people, organizations, devices, and assets from a multitude of cloud services.

### Factor III. IoT Relies On Knowing ‘Who Sent What Data’ With Certainty

IoT systems should rely on an immutable and unique cryptographic identity that has been claimed by each device in the network. Every time a device sends data to another device, or to a datastore, it should establish a trusted connection, encrypt the data for the recipient, and sign that data with its cryptographic key.

Ockam Network solves this by utilizing the universal did:ockam identity scheme that enables best practices around key management. Regardless of the signature cryptography capability of the device on the network, a device can generate a did:ockam that can be reconciled by any other device with a simple verification to the Ockam Registry. Every message in the Ockam Network must be cryptographically signed. This guarantees that every bit of data that moves through the Ockam Network can be trusted and any device can be certain of ‘who sent what data’.

### Factor IV. IoT Interacts With The Real World - There’s No Going Back.

IoT systems require fast finality in a state machine and require consistent data everywhere in the network. By comparison, many general purpose or financially tuned blockchain networks, are OK with temporary forks (aka data partitions) because the digital world can be corrected upon group consensus as time passes. Unfortunately in the case of IoT, finality affects real world outcomes. Consider the case of a remote controlled floodgate. If an actuator on a floodgate gets a command to open the gate, water will rush down the hill. However, after a couple of minutes if the actuator learns that it was connected to a partition of the network that had bad data, it can’t go back and put the water back where it’s supposed to be.

In distributed systems, what I just described is referred to as the CAP Theorem. The CAP Theorem states that a distributed system can not have consistency, availability, and partition tolerance all at the same time. You must pick two at the expense of the third. Because IoT affects the real world, the Ockam Network is consistency + partition tolerant (CP) orientated system.

### Factor V. The Network Should Be Close To The Device.

The closer a device is to the network the faster, and more reliable the connection is between device and network.

An Ockam Network can be distributed globally thanks to the global footprint of public cloud infrastructure that the Ockam Network is built upon. This means that an Ockam Network can be located as close as possible to any device anywhere in the world. This proximity maximizes performance between the IoT device and the Network.

### Factor VI. IoT Devices Are Already Deployed At Massive Scale, And Growth Is Only Accelerating

Future scalability is a hot topic in IoT. Today’s IoT networks need to process high volumes of data. Tomorrow’s will need to produce tremendous amounts!

The hub and zone structure of an Ockam Network solves this problem. As IoT demands increase, Ockam Network can scale horizontally by adding as many zones as are needed for throughput demand.

### Factor VII. IoT Systems Produce A Ton Of Data

A network tuned for IoT needs sufficient efficiency to accommodate the huge volume of data that IoT devices generate. In isolation, this data is of relatively low value. However the true value of IoT is unlocked when huge amounts of data feed higher order processes such as AI/ML. To put it simply: moving data in an IoT network can’t cost more than the data packet is worth!

### Factor VIII. Flexibility For Public + Private Consortiums
A device owner may only want to share data among trusted business partners. However they may also want to deliver a zero knowledge proof on the state of their data to an external regulator, partner, or customer.

The Ockam architecture allows private zones to interact with the public root zone. A private zone will commit the merkle root of its state to the main hub. This will keep the data in the zone private to the zone, but still allow permissions and proofs to be represented externally. This feature is further enabled by how did:ockam identifiers are specified.

### Factor IX. Lots Of IoT Devices Are Hardware And Connectivity Challenged, But Still Need To Validate State.

Most IoT devices are built to extremely tight tolerances and don’t have resources to spare. Low power wireless devices with simple hardware need a low bandwidth way to stay in sync with the current state of the network.

The Ockam SDK allows small devices to offload complex or always-on requirements to external servers or gateways.

…And that’s it.

Those are the Nine-Factors that go into make “Ockam tuned for IoT”.

‍
