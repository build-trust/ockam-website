---
title: "A Beginners Guide to the STRIDE Security Threat Model"
date: 2020-01-02
description: "A Beginners Guide to the STRIDE Security Threat Model"
metaTitle: "A Beginners Guide to the STRIDE Security Threat Model"
metaDescription: "A Beginners Guide to the STRIDE Security Threat Model"
author: "Mrinal Wadhwa"
authorAvatar: ./assets/default_avatar.png
---

Everyone wants to build secure software, but it’s not simply a checkbox you select. There are a number of factors, from how you validate input to the libraries you choose that could cause vulnerabilities. Threat modeling provides a little preparation that can help you identify blind spots in your application’s security.

One common threat modeling approach is the STRIDE framework, which has six areas of focus:

- Spoofing
- Tampering
- Repudiation
- Information Disclosure
- Denial of Service
- Elevation of Privilege

Authored in 1999 by two Microsoft security researchers, STRIDE remains a useful approach to surface potential issues. In this post, we’ll cover each of the six areas of STRIDE you can use to proactively limit threats as you build your systems.

### Spoofing:
When you provide access to your systems or data, you need to authenticate every request. The security of your systems depends upon trust in the other party’s identity. A threat to this trust is spoofing — when someone claims to be a person or system they are not.

There are many types of spoofing, from the teenager’s fake ID to more serious infiltration of technology systems. A major area of concern is network security, as much of our connected devices are dependent upon trusting the identity of other devices. In these systems, passwords, keys, tokens, and signatures are among the methods used to authenticate requests. The level of vulnerability varies based on the method.

For example, here are some common authentication methods for systems and what would be required to spoof a request:

- **Single key**: many APIs use a single API Key to authenticate requests to their service. The value is static, though it can typically be deleted and regenerated in a user interface. Anyone who obtains the key would have access to the systems that trust it indefinitely.
- **Access token**: similar to the single key, an access token is one value that authenticates a request. However, the access is usually limited in some way, often only usable for a short period. Anyone with an access token would only have minimal usage before needing additional credentials to generate another token.
- **Signatures**: in contrast to the other two methods, signature-based authentication uses encryption, which requires private keys. Each request is signed using a shared secret that you can verify. To spoof a signature, the attacker would need access to the sender's private key.

These are just a few common examples of spoofing. The important thing to consider is what mechanism you’re using to communicate identity and how you know the identity can be trusted. Look to common methods and conventions, such as open source libraries, to ensure your systems are secure and not vulnerable to spoofing attacks.

### Tampering:

Even if you feel confident in your authentication security, trust must extend to all systems you touch. When you retrieve data from a system, for example, you should feel confident that it’s reliable. Data is especially susceptible to threats of tampering, but physical machines or hardware may also be vulnerable.

Most packaged food available in the supermarket contains a seal or other method to determine whether it has been altered. Similarly, there are methods to both prevent and discover tampering with networked systems. Firewalls and partitioned storage are among the techniques you might employ to ensure your data cannot be overwritten. Log files and notifications are common methods to detect tampered data.

Often, data tampering coincides with other potential threats. For example, data may be altered to spoof access, or data tampering could be caused by artificially-elevated privileges. Further, data tampering may cover the tracks of other vulnerabilities, such as overwriting log files that would show how the system was accessed.

## Repudiation:

You can’t prevent attempted security threats, but you can implement auditing to catch and trace these activities. Done correctly, you can be certain that these nefarious efforts can be connected to the source of the vulnerability. Repudiation threats take aim at your auditing and tracing, ensuring that bad behavior cannot be proven.

Have you ever been locked out of a system when you’ve repeatedly input your password incorrectly? Without logging to connect these errors to your account, it would be much harder to stop actual attackers from brute force attempts. For this reason, all events with security importance should be logged.

Secure systems should build in non-repudiation mechanisms, such that the data source and the data itself can be trusted. For this reason, repudiation is intertwined with other elements of the STRIDE framework. For example, tampered logs or a spoofed account both could lead to the user denying wrongdoing.

## Information Disclosure:

Underlying the security threats mentioned so far is data exposure. Any system that stores or accesses private information may accidentally disclose it. There are any number of methods that can be used to access private data. These disclosures can impact a single user, multiple people, or be specific to a business itself.

Significant data breaches have made headlines in recent years. Passwords, payment details, and other personal data can be expensive disclosures. At a minimum, customers have to be notified and high profile incidents have extended consequences.

Along with threats like spoofing, disclosures can be caused by backups and other files left in accessible locations, which might include servers, laptops, or external drives. In other circumstances, private data can be inadvertently exposed due to buggy code or attacks such as buffer overflows.

## Denial of Service:

Another security threat from the technical news, a denial of service makes a system unreachable by exploiting resources so they can’t be used for legitimate purposes. In networking, this can mean overloading a system with incoming requests, making it impossible for users to connect.

You should consider all areas of your system that might be subject to a denial of service threat. For example, storage and processing may be areas of concern. A denial of service’s impact may increase when combined with other security threats, which might give the attacker access to additional resources.

## Elevation of Privilege:

The final area of the STRIDE framework could be the most threatening. Where spoofing is focused on authentication, elevation of privilege is related to authorization. In other words, the attacker not only claimed to be a valid user, but one with an expanded role.

A sophisticated elevation of privilege attack may use all of the other areas of STRIDE for an especially outsized impact. With admin access, the attacker may be able to tamper with systems outside of the typical interfaces. The lack of audit trail could cause both repudiation and information disclosure without any trace. Of course, as mentioned in the previous section, more privileges likely translate to greater resources for a denial of service.

## Use STRIDE in Your Work

Now that you know the six areas to evaluate, put it into practice. When you begin new projects, proactively consider how STRIDE applies. Either by yourself or with your team, evaluate how each area could be exploited, then plan the steps to limit each threat.

Better yet, check out Ockam's products or reach out to The Team at Ockam. We are glad to help you on your journey!
