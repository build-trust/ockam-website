```yaml=
order: 7
title: Enrollment Guide
status: Draft
```


## Description

The enrollment protocol is designed to facilitate secure onboarding a device to a service where the device
doesn't know about the service and visa versa. This happens with the help of an enroller intermediary like a phone, terminal, or another device.

The three parties are the Ockam Enrollment Service (*service*) that a device wants to connect to, the *enroller* that helps onboard the device, and the device to be onboarded or enrolled called the *enrollee*.

## Background and the Problem

Enrolling IoT devices (and non IoT devices) currently happens using non-secure and/or manual processes:

1- Hardcoded credentials (username, password, api tokens)
2- Hardcoded service endpoints to obtain credentials with little to no vetting process
3- No credentials at all, device connects to another system that authenticates the connection to the service
1- Credential revocation or rotation is not implemented or easily performed

This results in the following problems

1- No security when connecting externally e.g. all data (including credentials) are sent and received in plaintext vs with encryption.
1- Usernames, passwords, api tokens are often stored without any protection on the device––an attacker can extract these values with minimal effort with remote or physical access or downloading and reverse engineering the firmware.

### Enroller

The enroller is usually controlled by the same party as the enrollee. For example, a new robot (enrollee)
is installed in a factory and the enroller is a connected computer terminal (enroller).

When a new enrollee comes online, it establishes a secure channel with an enroller.
The enroller indicates to the enrollee to use the service by sending enrollment material.

### Enrollee 

The enrollee sends identification information to the enroller who forwards
this information to the service to indicate this enrollee is allowed to enroll, who the enrollee is and is authorized by this enroller.

At this point the enroller ceases to be a part of the communication. The enrollee sends an enrollment message to the service.

### Service

The service receives the message and performs a series of checks to validate the enrollment

If all checks pass, the service adds the enrollee to its authorized connection list and can continue communicating. Otherwise the connection is dropped.
