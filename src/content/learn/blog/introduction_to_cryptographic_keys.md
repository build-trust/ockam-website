---
title: "Introduction to Cryptographic Keys"
date: 2020-07-15
description: "As so much of our information is transported via the internet, it’s important to safeguard it. Cryptographic keys make this possible."
metaTitle: "Symmetric and asymmetric keys both play an important role in cryptography, the foundation of Internet security."
author: "Matthew Gregory"
authorAvatar: ./assets/matthew_gregory-1.png
---
# A beginners guide to key pairs in cryptography

As so much of our information is transported via the internet, it’s important to safeguard it just as we safeguard information in real life.

Imagine you need to hand off an important document; you could transport it via a physical lockbox. This way, the message can’t be viewed by anyone without the key. Perhaps you take additional security measures, such as signing and sealing the document so the recipient knows it isn't fake or tampered with. These methods are done to protect information security in real life.

But what happens when the document being transported is computer data? When data is digitally transported, you must take digital security measures. Cryptography and cryptographic keys can provide this security, though cryptographic keys have many more uses than the physical keys in your pocket.

In this article, we’ll take an introductory look at the different types of keys available, and when and how they’re useful.

## Symmetric Keys: Fast & Simple, Yet Potentially Vulnerable

Let’s say your confidential document isn’t secured via a physical lockbox, but via encryption. What does this look like? The answer lies in child's play.

Children often write messages in code so that other people only see gibberish if they find them. A simple way to do this is by using Caesar’s cipher. In this cipher, you substitute letters with the letters some fixed number away. For example, if you use Caesar’s cipher with a right shift of 1, the text “Hello World” becomes “Ifmmp Xpsme”. Just like that, the message has no meaning without knowing the correct cipher. At least, in theory. In reality, the uneven distribution of letters in English words makes this cipher easy to crack. However, today's encryption methods are much more complex.

There’s a catch to this type of encryption, though. How do you tell the recipient what the shared key to the cipher is? Whether it’s a physical key to a lockbox or a key to decrypt a cipher, you need to share a copy of the key with them. It can’t be protected in the same manner, because then you’d need another key to decrypt that cipher, and then the problem reemerges. In the real world, you'd deliver the key's copy via some other method you trust. Perhaps you two would exchange the key to the cipher in a dark alley at twilight?...

The encryption of messages nowadays extends well past physical notes. With online communication, symmetric encryption does provide some security. But the same flaws exist. These flaws stem from the fact that you need both parties to have the same (symmetric) key, and you need both parties to have that same copy of the key without it being compromised. Ideally, this should be done without needing to hang out in dark alleys!

In order to get around these problems, we have additional security methods. Introducing: **asymmetric key pairs**.

## Asymmetric Key Pairs: A Slower, More Secure Method

Asymmetric key pairs are a creative way to transmit messages without exposing compromising information, like symmetric keys. Let’s go back to our lockbox example for this:

You want to send an important document to Bob, but there's a problem. If you secure the document in a lockbox, how does Bob get a key to open it? There really isn’t a way to do this. Instead, Bob comes up with an idea. He sends you his own unlocked lockbox while keeping the key. When you get the lockbox, you put the document inside, close it, and lock the padlock. Now you can send his lockbox back to him and he can open it with his private, secret, one-off key. You've managed to send a secure message without copying the secret key.

Asymmetric key pairs work similarly. Instead of a lockbox and key pair, you have a public and private key pair. The public key is just that: public. Anyone can see your public key. Your private key is something you keep under wraps; you never need to reveal it. Your public key can unlock things that were locked with your private key, and vice versa.

In our example, Bob gives you a lockbox to secure the message, and he has the only private key to open it. When encrypting online communication, you would secure the messages with Bob’s public key, and that information can only be unlocked via his private/secret key.

There are many advantages to using asymmetric key pairs. By encrypting your message with your private key, you are essentially validating it has originated from you, as you are the only one with that key. Anyone can confirm that you signed it with your private key when they can use your widely-available public key to do so. By securing the message with your private key and their public key, you get the benefits of both authenticating your identity and keeping the message safe from prying eyes.

## The Importance of Cryptographic Keys

Both symmetric keys and asymmetric key pairs are used in our online communication. Symmetric keys are incredibly fast to implement, and thus are used for encrypting large amounts of data. Asymmetric keys are slower but are much more secure. This results in technologies making use of a combination of asymmetric key pairs and symmetric keys.

Remember, the biggest flaw of symmetric cryptography is the inability to securely send the key to the recipient. Its biggest strength, however, is its speed in encrypting large amounts of data. For these reasons, it’s common to establish an asymmetric key pair to transmit a symmetric key securely. Then, with the symmetric key in the hands of both the sender and the recipient, the data itself can be encrypted and unencrypted using the faster symmetric cryptography.

This combination of cryptographic keys forms the basis for many types of encryption you’ve heard about. For example, perhaps you’re aware that companies like Apple, WhatsApp, and Signal provide end-to-end encryption for their messaging services. When you’re using end-to-end encrypted messaging, only you and the recipient can read the actual messages. And how is this encryption set up? Well, by initially using an asymmetric key pair to securely provide a symmetric key to both end-users.

End-to-end encryption is most often thought of in association with messaging platforms, but that’s not the case. At Ockam we provide end-to-end encryption SDKs for IoT devices. Just like how your message is encrypted with iMessage or WhatsApp, we’re creating technology to ensure the data your IoT devices are sending are encrypted as well. 
