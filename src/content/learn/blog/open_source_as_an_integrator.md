---
title: "Open Source is the Internet’s Most Important Integrator"
date: 2020-03-19
description: "Ockam is open-source-as-an-integrator. Ockam tools create interfaces between hardware at the edge and cloud services to enable a trust across a distributed application."
metaTitle: "We love open source software tools. If you have to integrate software systems, look to the open source community to solve your IoT worries."
author: "Matthew Gregory"
authorAvatar: ./assets/matthew_gregory-1.png
---

It’s easier than ever before to create software. This results in an expanding number of tools developers can use. From various programming languages to frameworks and adaptors, someone has likely solved a technical problem similar to yours before.

The modern software developer owes their simplified experience to open source giants. Open source software is built by the community, for the community. Its wide-scale availability has led  to immense popularity, especially around connected technology like the Internet. As a result, open source has become the de facto standard for things ranging from web servers to databases.

Proprietary software also sees benefits of open source. In addition to using open source, it can build upon open source interfaces to allow it to work with other tools. Not only that, but open source software’s transparency ensures security and reliability. Certainly [we love open source](https://www.ockam.io/learn/blog/why_we_love_open_source/) at Ockam. As you’ll see in this post, its status as the most important integrator is a big reason why.

## How Open Source Became the De Facto Standard
In theory, open source software is widely used by the community because it is built with the community’s needs in mind. But how does that work out in practice? The theory holds, as open source software has become the de facto standard for many fields.

A clear example of this phenomenon can be seen with web servers. As open source software has a clear majority of the market share for in-use web servers, it would not be far-fetched to say the internet itself depends on open source. The [most popular web server](https://w3techs.com/technologies/overview/web_server) is the Apache HTTP Server, more commonly referred to as Apache, which serves around 40% of all websites. Apache is an open source web server software that was released over 25 years ago. That’s 25 years of development and maintenance by the community itself, ensuring it has the reliability people desire in the number one web server.

While open-source software is built by the internet community, that does not mean the entire community has the same preferences. It’s for this reason that not only is the number one web server open source, but the number two web server is as well. NGINX is reported as the second most popular web server, serving around 32% of websites. With it being open source as well, it’s clear that open source web servers are the standard.

Another example of open source being widely used can be seen in database management engines. MySQL and Postgres, both open source,  are the [second and fourth most popular engines](https://db-engines.com/en/ranking), respectively. MySQL, whose co-founder forked it to make MariaDB, is a good example of how having open source software as the standard is good for the community, regardless of how it changes over time. If a company ever decides to make future versions proprietary, it won’t be catastrophic to the community. They can follow this method and fork the open source version to continue building off of that. Being the de facto standard causes open source software to be built with reliability in mind, but also results in continued reliability as the community maintains it.

Open source software also makes it easy to build connecting tools. An example of a company doing this is Heroku, who has add-ons that build off of these open source projects, such as [Apache Kafka](https://www.heroku.com/kafka), a streaming data service, and [Heroku Postgres](https://www.heroku.com/postgres), a managed SQL database-as-a-service. Tools like these are more likely to be built if open source projects are de facto standards, and their creation makes it even more advantageous to be familiar with open source software.

## Open Source as a Translation Layer
The [virtuous cycle of open source](https://www.ockam.io/learn/blog/why_we_love_open_source/) encourages its use as a translation layer. Its widespread use leads to a community focus on reliability, which causes even more usage. A popular project then becomes like a Rosetta Stone for future projects.

Let’s say you’re a developer trying to connect two tools. You make the translation layer you built open source, letting others use it for their tools. As a result, those developers get the benefit of having the work for this integration already done for them, and you get the benefit of harnessing the power of the community to ensure its continued reliability. And, because it's open source, and thus owned by the community, there’s no risk of these tools becoming disconnected at any one contributor’s whim. Plus, in accordance with [Kerckhoff’s principle](https://en.wikipedia.org/wiki/Kerckhoffs%27s_principle), there is added security when systems are designed without obscurity in mind.

With the proliferation of devices, apps, and web APIs, there are an incredible amount of tools that are integrated with each other. Without open source interfaces widely available to encourage their integration, they would be much less connected than they are now.

## You Can Connect Systems Without Building Every Integration
With so many tools available, no developer can possibly build every possible integration. Translation layers solve this problem. That’s why we chose to build Ockam to support this need. Specifically, the open source projects of Ockam address many of the needs for translation layers between devices and cloud services.

Ockam provides software development kits and hosted cloud services to securely connect your devices to popular cloud servers like Amazon Web Services, Microsoft Azure, and Google Cloud. Our tools are open source, encouraging both community introspection and contribution. Building upon open source’s natural role as an integrator, we’ve focused on a thin—but important—layer of the stack.

![Ockam Ecosystem Map](./assets/ockam_ecosystem_map.png)

The [Ockam Cloud SDK](https://www.ockam.io/product/cloud-sdk) allows you to direct encrypted data from your edge devices to cloud services. With the Cloud SDK, there’s a trustworthy way for cloud applications to get messages from applications on these devices.

The same trustworthiness can be present if you’re connecting your edge devices to Ockam-enabled cloud applications. Great for Linux-based devices (another example of the widespread use of open source software), the [Ockam Edge SDK](https://www.ockam.io/product/edge-sdk) makes sure you can trust the data coming from them.

We believe that open source can make it easier to integrate devices and cloud services. That’s why we’re working on a number of open source tools to help the developer community. Be sure to check out the [full product list](https://www.ockam.io/product) to see how we help you navigate connected systems.
