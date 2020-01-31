---
title: "Introduction to building Trust Architectures"
date: 2019-02-15
description: "Introduction to building Trust Architectures"
metaTitle: "Introduction to building Trust Architectures with DID:Ockam"
metaDescription: "Introduction to building Trust Architectures"
author: "Matthew Gregory"
authorAvatar: ./assets/matthew_gregory-1.png
isHomepageFeatured: true
homepageFeaturedOrder: 3
---
In this week’s post we introduce Trust Architectures for connected devices. A reoccurring theme in the Ockam Blog is our position that there is a lot to learn about the future for connected devices by looking back through the history of cloud-native development.

### Why service-oriented systems rule cloud development
Over the past decade, cloud-native developers have embraced service-oriented design for their applications as ‘the rule’. APIs and micro-services are the most talked about implementations of these principles.

As a quick review of service-oriented design, most narratives focus on highly flexible code functionality that is broken down into small components. Those components make their functionalities discoverable and interoperable to other parts of the system as-a-service. Such an architecture allows these micro-services to be reused in the future via simple program interfaces (APIs). Without such decomposition, scaling applications and adding new functionality to hard-coded applications with a monolithic architectures becomes difficult, or even impossible. For example; an analytics micro-service could be scaled-up with on-demand cloud hardware independently of the user sign-in service. Or, a new feature could access that analytics service without any changes to the existing service. This is how modern cloud-native apps are able to adapt so quickly.

Open source tools, cloud infrastructure, and a community of knowledge sharing have moved best practices forward for building modern application systems with service architectures.

### Applications have moved into hardware at the edge, creating new challenges.

Modern connected devices utilize standard APIs to communicate with supporting infrastructure, and the ones that don’t, should. However, the nature of connected devices at the edge leaves much to be desired in connected device architectures; IoT devices tend to be designed from the inside out, have a monolithic code base, and are optimized for communicating with their manufacturer’s back-end web app.

Most connected devices are in physically insecure locations, scattered around the real world, outside of the cloud. As such, they are susceptible to attacks by hostile actors. At the very least, it’s practically impossible for a system architect to understand the attack surface of devices with the same fidelity that they do with applications built on infrastructure that is secured by cloud providers.

There is also an n-squared complexity with connected device integration as larger fleets of devices are installed in the field. For vast networks of interoperable systems to work together, they need more horsepower than service-oriented designs provide on their own.

### Connecting devices requires a Trust Architecture.

Service-oriented systems are built for availability, interconnection, and scalability. Application micro-services, cloud infrastructure, and security tools enable service-oriented systems to be adopted as a best practice for all developers and for all modern applications.

A Trust Architecture provides a framework that enables trusted data to flow through a service-oriented system. When a connected device is providing data to another system participant as-a-service, it must go further than simply providing an endpoint to supply data: It must cryptographically prove its identity and it must cryptographically sign all data that it sends into the rest of the distributed system. In other words, a device should serve its identity and data in a way that any other device or application can trust, anywhere in the application stack. Recipients of this data should have a common and openly available way to verify the origin and cryptographic signatures of all data received.

The only way for secure interoperability to exist among vast networks of connected devices is for devices to serve trusted data to their entire ecosystem as-a-service in a verifiable way. It’s the responsibility of devices to serve metadata that allows other services to reason about their trustworthiness — that is a Trust Architecture.

*Ockam enables a Trust Architecture.*

The Ockam SDKs allow a developer to build a Trust Architecture into cloud applications, edge gateway servers, and for embedded software. When a developer adds an Ockam SDK to the firmware in connected devices, those devices become clients to the Ockam Network, receive a unique Decentralized Identity (did:ockam), can share data as a signed verifiable claim with other devices, and can verify data that is received from other devices and entities registered with the Network. DID:Ockam is the underpinning of a Trust Architecture implementation in connected devices because it makes the identity and attestation of a device universally resolvable by any other device. With DID:Ockam in place, all services in an application can determine the trustworthiness of data from other connected devices.

Just as application developers assume service-oriented design in their web apps, they now need to adopt Trust Architecture principles when building application stacks with connected devices. Only then can billions of connected devices safely scale to serve the applications that rely upon their data. This is how autonomous systems in the future will be able to arrive at well-reasoned determinations of data trustworthiness in their ecosystems.
