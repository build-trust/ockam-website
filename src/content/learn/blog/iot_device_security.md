---
title: "IOT Device Security is Not One-and-Done"
date: 2020-03-03
description: "When it comes to device security think of technology stacks, not platforms."
metaTitle: "Every layer of your application needs to be secure. At Ockam we suggest that developers think in stacks. Here's how..."
author: "Matthew Gregory"
authorAvatar: ./assets/matthew_gregory-1.png
---

A device may be in your pocket, in your home, or in the field. While it’s tempting to talk about “device security” as a singular thing, that disguises the complexity. Worse, it could keep you from recognizing how devices could be vulnerable. Much like the [STRIDE framework](https://www.ockam.io/learn/blog/introduction_to_STRIDE_security_model/) is used to anticipate potential threats, it can be useful to consider a broad view of what device security means.

In this post, we’ll cover five common areas of device and network security you should consider:

- Authentication and identity
- Database and data ingest
- Cloud hosting
- Hardware
- Messaging

Within each, we’ll show how open source projects and services can help you maintain security best practices.

## Authentication and Identity Security
Authentication and authorization are at the heart of secure systems. Any requests that retrieve private data or initiate operations that might change a system must be secured. You want to know who is making the request and ensure they have permissions to do so.

Our partners at [Okta](https://www.okta.com/), for example, provide workforce and customer identity solutions. They specialize in giving developers the tools to make the right authentication security decisions. Yet, Okta integrates with hundreds of other tools, because security is not singular. It’s connected to everything.

“Never trust, always verify” is the motto recommended by Okta and other authentication experts. A secure system for authentication and identity gives you a place to check that a request is valid.

## Database and Data Ingest
Most applications will need to store, access, and transform data. You’ll want to ensure anything read from your data store is obtained with permission. Similarly, be careful which processes can write data—you’ll want to know you can trust its authenticity. Finally, consider other ways someone might gain access to the data, such as direct access or during transit.

If possible, encrypt the data at rest, especially sensitive data like access tokens or personally identifiable information. Always use encryption for data-in-transit, even within your own networks. For example, the distributed streaming platform [Kafka](https://kafka.apache.org/) recommends encryption whenever reading and writing data across security domains.

You may want to make your database available for public Internet access. In these cases, you’ll want to pay extra attention to how you secure your datastore. InfluxDB, for example, makes [several recommendations](https://docs.influxdata.com/influxdb/v1.7/administration/security/) for securing the open source time series database, including use of encryption, user permissions, and limited ports.

## Cloud Hosting Security
It's likely that much of your data is stored in cloud hosting where you also have servers to transmit it to devices. The early cloud may have drawn skeptics, but modern wisdom is that it’s much more secure to use the cloud than attempt to build your own physical network. However, you still have security responsibilities with cloud hosting.

The major cloud vendors provide secure defaults and tools to customize your security. For example, though any cloud is by definition a shared resource, memory and network traffic are isolated. Other customers cannot access your resources. You can use firewalls, network groups, and other tools to meet your needs while maintaining security.

Microsoft Azure, for example, [identifies several areas](https://docs.microsoft.com/en-us/azure/security/fundamentals/overview) of cloud hosting security and how to make the best use of them.

## Hardware Security
Most software, especially when running in the cloud, does not need to be concerned with hardware security. However, IOT device security obviously must factor hardware into its plan. From where the hardware is located to how you interact with it, you must seek to eliminate vulnerabilities.

If you have control of the device’s network, you can restrict access by routing public traffic through another service. However, you must often assume that a device may attach to unknown networks. In some cases, such as with phones and tablets, you can bet a device will move between networks frequently. You must depend on secure authentication, databases, and encryption, among other areas of security.

In some cases, you want security embedded on the device itself. There must be a method that allows you to trust messages received by the device and similarly know anything it sends is authentic.

## Messaging Security
IOT devices rely on messages to communicate their state and receive updates from a server. You could have secure authentication, database, cloud hosting, and hardware and still be vulnerable if you aren’t able to send secure messages between them.

Much like with databases, you want to encrypt data-in-transit. However, you can go even further with end-to-end encryption. Every point that decrypts a message expands the surface area of a potential attack. A more secure messaging system allows devices to exchange messages through a server without the intermediary knowing the decrypted contents of the message.

Ockam is building open source tools for developers to send end-to-end encrypted messages through your connected systems. We want to make it easier to build distributed systems of interconnected devices. [See how we do it](https://www.ockam.io/).
