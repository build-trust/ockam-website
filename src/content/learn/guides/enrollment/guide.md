```yaml=
order: 7
title: Enrollment Guide
status: Draft
```


## Description

There are 3 entities in this protocol: an enrollment service, an enroller,
and enrollee. The service provides any enrolled entity with some functionality
that will be consumed. The enroller is a system or device under control of
an onboarder that is used to authorize other devices to the service.
The enrollee is any system or device that wants to consume the benefits provided
by the service.

### Protocol

The enroller is usually controlled by the same party as the enrollee. For example, a new robot (enrollee)
is installed in a factory and the enroller is a computer terminal (enroller).

When a new enrollee comes online, it establishes a secure channel with an enroller.
The enroller indicates to the enrollee to use the service by sending enrollment material.

### Enrollee 

The enrollee sends identification information to the enroller who can forward
this information to the service to indicate this enrollee is allowed to enroll, who the enrollee is and it is authorized by this enroller.

At this point the enroller ceases to be a part of the communication. The enrollee sends an enrollment message to the service.

### Service

The service receives the message and performs a series of checks to validate the enrollment

If all checks pass, the service adds the enrollee to its authorized connection list and can continue communicating. Otherwise the connection is dropped.

# Flow Example

We describe enrollment using a three parties example with a cloud service, a cellphone, and a truck. The cloud service designated as Gimel, provides emergency assistence to car owners if a car has broken down, flat tire, or the driver is involved in an accident. Beth is a car driver that wants to enroll her truck with  Gimel. She connects her phone with Gimel and requests to be able to enroll her truck with the service. 

Gimel provides Beth's phone with the necessary information to enroll her truck at which point her phone app says "Ready to enroll vehicle, Please connect your phone to the vehicle". Beth connects her phone to her truck and begins the enrollment process with it. 

Under the hood, Beth's phone has received cryptographic material to ensure the truck  can connect securely to Gimel. This payload enables the truck to know how to talk to Gimel and what cryptographic keys to use encrypt and decrypt data.

The truck receives this information from Beth's phone and sends identification information for her phone to pass on to Gimel. This allows Gimel to know whether Beth actually authorized the truck to connect and provides Gimel with and identification of the truck. Beth's phone acknowledges to the truck that the service is waiting for it to connect. 

The truck connects to Gimel directly without Beths phone via another network connection (bluetooth, satellite, etc) using the special payload received from her phone. Gimel is able to verify the truck is a valid authorized party and accepts the connection. If the payload were modified by an attacker, the truck would use the wrong cryptographic material to talk with Gimel which would either drop the connection because it couldn't read it or reject it because it wasn't authorized to enroll.
