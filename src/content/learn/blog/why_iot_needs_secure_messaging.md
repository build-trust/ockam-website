---
title: "Why IoT needs Secure Messaging - San Francisco IoT Meetup"
date: 2020-02-10
description: "Mrinal Wadhwa presented at the San Francisco IoT Meetup on why IoT needs Secure Messaging"
metaTitle: "Secure end-to-end encryption among distributed systems is critical for a Trust Architecture."
author: "Mrinal Wadhwa"
---

Security and privacy are key concerns in the design of how data flows within IoT. Many popular IoT communication
protocols provide mechanisms to handle identification, authentication, data integrity, confidentiality and other
functionality related to secure communication.

These mechanisms, however, are usually tightly coupled with the transport protocol. IoT systems, on the other hand,
tend to have data flows that span multiple transport layer connections and often multiple transport protocols.

Below is a slide deck that I presented at the San Francisco IoT Meetup on how decoupling secure communication
from the transport layer removes complexity, minimizes the attack surface, and can enable us to build better
end-to-end secure and private systems.

<div id="presentation">
    <div class="rwd-container">
        <iframe class="rwd-iframe" src="https://speakerdeck.com/player/813b28006e734a43b65a88d56bd37b7c" allowfullscreen scrolling="no" allow="encrypted-media"></iframe>
    </div>
</div>

Recently, I also had a great discussion with [Jon Reed](https://diginomica.com/author/jreed) of Diginomica about
this topic on his Podcast:

<iframe
  title="Solving the vexing problem of IoT security - Mrinal Wadhwa of Ockam's open source community challenge"
  src="https://www.podbean.com/media/player/xtdqu-d302ff&?from=usersite&skin=1&fonts=Helvetica&auto=0&download=1&share=1&version=1&btn-skin=104"
  height="122" width="100%" style="border: none;" scrolling="no" data-name="pb-iframe-player">
</iframe>

If you're interested in learning more about Ockam's approach to Secure Messaging, we're discussing our protocols
and architecture openly on the [Ockam Proposals](https://github.com/ockam-network/) repository and on Ockam
[Discussions](https://github.com/ockam-network/ockam/discussions), come join us.
