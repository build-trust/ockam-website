---
title: 'Network Security for Developers'
date: 2020-12-04
description: 'Developers need to be cognizant of the importance of network security.'
metaTitle: 'Developer Network Security'
author: 'Luke Russell'
authorAvatar: ./assets/luke_russell.png
---

Think about all the data contained within your network: it’s imperative you keep it secure. Because of that, you want to avoid your network being compromised. But these days, there seem to be countless numbers of network breaches and data theft that put people's important data at risk. Malicious people know that important data is there to be taken. For that reason, it's more important than ever to be cognizant of the importance of network security.

In this article, we'll be looking at some common tools that can aid you in securing your network.

## Authentication is Key

Let's start by looking at a major potential point of weakness for networks: the security of user credentials. Imagine it's the early years of the internet. Someone needs access to a website, so they type in a username and password. That data is sent across the internet in plain text. This presents a few problems;

1. Those credentials can be intercepted
2. Those credentials can be used until the user manually changes them

You can easily picture a scenario in which a third-party gets their hands on a user's password and obtains unfettered access to their networks. Luckily, nowadays there are methods to strengthen the security of a user's credentials.

### Token-Based Authentication

First is the implementation of token-based authentication. What gives tokens a leg-up on passwords? Well, passwords often have the unfortunate combination of being short and reused for other accounts. These each present a problem:

- If they're short, passwords can be brute-forced
- If they’re reused elsewhere, passwords can be stolen from another company's insecure database

With tokens, especially short-lived tokens, there's much less of a risk if intercepted. Some tokens may only last a few minutes before expiring. That's much less dangerous if it happens to fall into a hacker's hands (or their computer clipboard).

While token-based authentication methods are more rigorous in authenticating users, they still suffer from the weakness of passwords if passwords are the only thing needed to get a token. That's why multi-factor authentication can be incredibly useful.

### Multi-Factor Authentication

Multi-factor authentication is a pretty apt name for what this type does: it authenticates a user only if they provide multiple pieces of identification. There are three types of information that can be used

- Things you _know_. Passwords are the obvious example
- Things you _have_. These require you prove you have a certain device, such as your smartphone
- Things you _are_. Many sci-fi films love this type. Fingerprint scanners, iris scanners, and voice recognition all use traits inherent to you the person

The most common form of multi-factor authentication is probably two-factor authentication, specifically with a username and password (something you know) and a code generator on a device like your smartphone (something you have). This gives the benefit of preventing access via a user's credentials without the theft of that same user's smartphone.

These steps alone won't guarantee strong network security, however. It's still dangerous, not to mention unnecessary, to let users have access to all the data on the network. Let's look at how to mitigate the damage if a user’s credentials are used maliciously, whether by a third-party or the user themself.

## Everyone Has a Role or Scope

You can delineate what individual users can access with their accounts. By defining exactly what **roles** a user has, you can limit what their account can do, minimizing the risk if they, or their account, are compromised. This can be especially important when giving out admin privileges. Most employees shouldn't have the ability to reset others' passwords; with roles, they won't have that ability.

The same concept can be applied when thinking about the user data that applications access. What does an application need from a user’s account? Very rarely is the answer “complete access to manipulate all data”.

Another powerful limitation tool is **granular scopes**. Scopes can be used to give out specific permissions related to the data an application can access. Think about an application that doesn’t need to write data, only read it. By implementing granular scopes methods, the accounts they access can be limited to have a view-only permission set. And if their account is stolen? Well, while data may be stolen, at least whoever took control of the account can't manipulate anything.

Of course, it might be a wise idea to not leave that data in plain-text, even if it's in a private database. After all, databases can be breached. To address that, let's discuss the power of encryption.

## Encrypt Your Data

So far, the focus of this article has been on securing access to a network. While incredibly important, you can never be 100% confident your network's data can't be accessed. It's because of this that encrypting your network's data can be incredibly beneficial.

Even if your accounts depend on robust authentication and authorization protocols, data can still be exposed in other ways. What if an employee leaves their work laptop on a train? Or what if a bug in a database's code leaves its data vulnerable? And then there's also the countless new attack methods being developed. If your data is encrypted, it won't do the thieves any good having it without the ability to decrypt it. And with modern encryption methods, you can rest assured that they aren't breaking that encryption in any reasonable timeframe.

Encryption also makes it harder to intercept data flowing through the network. This is a reason companies may use VPNs, or virtual private networks. By directing network traffic through an encrypted channel, it makes it all the less likely any usable data will be stolen.

Encryption also helps ensure the validity of the data. Some of the most dangerous attacks are the ones that manage to clandestinely tamper with a network's data. Encryption provides a way to authenticate the data hasn't been tampered with, if, for example, asymmetric key encryption is used.

You may have thought that encryption isn't the only way to prevent tampering. In fact, you may have come to the conclusion that some other topics mentioned, such as granular scopes can help in that manner as well. And that's definitely right! All the tools mentioned here work synergistically. Just like how a carpenter can't get by with just a single tool, neither should a network security developer get by with just one security method.

And of course, this isn't a complete guide on securing your network. Companies have nuanced tech stacks that require individual analysis for knowing how best to secure their network. Luckily, there are technologies being developed to fit all sorts of needs. It’s obviously a topic that Ockam cares a lot about, which is why it aims to help [secure information across connected systems](https://www.ockam.io/).
