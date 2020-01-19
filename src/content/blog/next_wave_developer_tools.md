---
title: "The Next Wave In Developer Tools Will Be The Catalyst That Enables The Internet Of Things."
date: "2019-15-04"
description: "The Next Wave In Developer Tools Will Be The Catalyst That Enables The Internet Of Things."
metaTitle: "The Next Wave In Developer Tools Will Be The Catalyst That Enables The Internet Of Things."
metaDescription: "The Next Wave In Developer Tools Will Be The Catalyst That Enables The Internet Of Things."
author: "Matthew Gregory"
authorAvatar: ./assets/matt-gregory.jpg
---
At Ockam, we are breaking new ground for developers in IoT, but when juxtaposed against the broader cloud-developer-tool landscape our playbook is straightforward. Ockam has a developer experience (DX) layer that abstracts away the complexities of cloud infrastructure, cryptographic handshake protocol best practices, end-to-end encrypted messaging, embedded hardware configurations and secure key storage. The lazy way to describe Ockam is as ‘a developer platform for IoT’. Which begs the question: is Ockam similar, or does it compete with other IoT ‘platforms’, like say, the AWS IoT Platform?

*Definitely not.*

This is because ‘Platform’ is a loaded word, if not a confusing one, when talking about developer tools. What makes “Platform + IoT” even more confusing is that it implies that an existing IoT ‘platform’ could solve all of problems with IoT all on it’s own. You only need to look into the growth pains of IoT to realize that the IoT developer tools are extremely immature and that a consolidated ‘do it all’ platform doesn’t exist yet. If a platform already existed, would many IoT system still be waiting in limbo to break out of the pre-production pilot phase? Or would millions of devices still be plagued with insecure firmware and networks? I could go on and on...

I want to set context for how industries mature to really understand what the IoT Developers’ future looks like, what tools are needed, what a ‘platform’ is, and how Ockam's tools fit into this landscape. Then, I’ll map the industry maturation cycle to what I’ve experienced in the software development industry, and finally set the stage for where IoT is going and discuss how Ockam fits into the upcoming IoT developer tool stack.

### An Introduction Into How Industries Mature Through Vision, Specialization, Consolidation Phases.

When a industry or product cycle is brand new, the company that is first-to-market must be vertically integrated. This means that the firm must design, test, build, market and sell their product; They do it all. Because they are the only company that has a vision for a new industry or product they must be fully self-sufficient to bring the product to market. If they are successful and find product market fit, then the product takes flight and a new industry is born.

Eventually, the original vision for the product is limited by the expertise of that one firm. At some point specialty component entrants emerge to accelerate the development of the product or industry. Even though these new entrants disrupt full control of the product category from the vertically oriented incumbent, they greatly increase product benefits for the customer, and thus increase the total value of the market. Or to put it another way, during the speciality phase in an industry maturity cycle, specialty entrants organize horizontally and collaborate to build the category. The net result is that through this collaboration, the industry becomes so large that most slices of the market can become large sub-industries. In fact, these sub-industries are much larger than the original firm could have been if they tried to maintain tight vertical control of their entire product. This is partially due to the increase in customer utility that is derived through a steep innovation curve.

For example, imagine trying to build the first cars in the early 1900s. A auto startup needed to design every aspect from the car from the tires to the engine, and from the seats to the structure. Tire, windshield, seat, and electronics speciality OEMs would eventually innovate components that go into the automobile. The Ford Motor Company inevitably integrated suppliers into their design and manufacturing as the automotive industry organized into horizontal layers. This specialization flourished by the time the Model-T was released and Ford was able to innovate with the modern assembly line. The sum of these parts, in a horizontally organized industry with specialist parts, helped to create better customer products and drove innovation forward at a rapid pace.

There is a third phase, consolidation, that occurs when an industry matures and innovation flattens. In order to continue to drive value the major players in the industry adopt a vertical integration strategy, focus on operational efficiencies, and consume the horizontally organized suppliers through direct competition or acquisition. We can pass over this phase for the purpose of this blog post since developer tooling is still in the early, high growth, horizontal organizing phase.

### Application Innovation Breakthroughs Happen When Developer Tool Stacks Emerge.

The cloud software industry is in the horizontally organized, specialty phase. However we typically refer to the horizontal layers as components in a ‘stack’. In the 2000’s the cloud software development industry was accelerated by the LAMP stack. This stack of Operating system (Linux), Web Server (Apache), Database (MySQL, etc), and Programing Language (PHP, etc) became the basis that unlocked innovation for most born-in-the-cloud applications that thrive today. Instead of needing to create an entire platform to build a modern app, a product engineer could use the tools in the LAMP stack as a baseline to build upon.

Another reference stack emerged as speciality technologies emerged to solve problems in Big Data. The SMACK stack includes the essential tools needed to build applications around big data: Analytics (Spark), Datacenter resource management (Mesos), Concurrency in messaging (Akka), Database (Cassandra), Data ingestion (Kafka).

Finally if we look at DevOps we have code versioning and repositories (Git), code delivery (Jenkins), and infrastructure as code (Terraform, Chef, etc), containerization (Docker), container orchestration (Mesos and Kubernetes) and many, many more who can be put together to form DevOps toolchains.

Open Source developer tools were the core focus of mine while I was on the Microsoft Azure team. I worked with dozens of companies that built enterprises around developer tools so that Azure’s Open Source Software (OSS) developers would be enabled to innovate at the app layer — fast. The dev tool companies that were most successful not only produced a beautifully simple developer experience, but they also understood how their products would integrate into the broader developer tool ecosystems. This further drove developer productivity when developers built their applications around stacks.

*Everyone won.*

Azure pivoted from a tightly coupled, vertically integrated, Windows app platform into a horizontally organized, open infrastructure provider. Azure exploded into a market leading business that now generates billions in revenue each year, young OSS tool companies matured into unicorns, and app developers got to narrow their focus to their line of business applications.

Cloud Infrastructure-as-a-Service, LAMP, SMACK, DevOps, et al, stacks have enabled a cloud-native app ecosystem by allowing application developers to focus on their line of business apps. Those app companies have created billions upon billions of dollars of market value in an exceptionally short period of time as a result.

What’s equally as interesting is that each of the layers in these stacks contain example after example of wildly successful enterprises that have found a niche horizontal problem and excelled at it. We’ve seen exits from the LAMP, SMACK and DevOps stacks already. RedHat was recently purchased for $34B, MongoDB IPO’d and now has a $4B market cap, Cloudera and HortonWorks are in the unicorn club with valuations over a billion dollars, and GitHub was nabbed by Microsoft for $7.5B. There are dozens of other privately held unicorn scale companies that are thriving as specialists that build developer tools. Finally it should be explicitly pointed out that each of these commercial successes is based on an open source code base.

Not only do the IoT stacks need to be created and defined, but so do the companies that make up the specialized developer tools in those stacks. I am certain that over the next several years, dozens of newly formed companies, OSS code bases, and industry standards will emerge as developer toolchains are built for IoT. There is certainly an abundance of untapped demand, given the problems that all developers have working with IoT.

Where Is IoT In The Maturation Cycle?
It’s just getting started…

Existing products that are classified as “IoT + Platform” are the first entrants in the market. At best, they are akin to the very first automobiles. These IoT ‘platforms’ solve incomplete and highly generalized problems. No single solution solves the full-stack IoT developer problem. We need specialty new market entrants to build the horizontally organized tools that will eventually be grouped into reference stacks.

It’s probably important to specifically call out the Azure, Google Cloud, and AWS IoT ‘platforms’ for why they were built by the infrastructure giants. These products exist because they solve a customer retention problem for the cloud providers. The Clouds are in the business of turning on VMs. IoT devices generate a lot of data. Data gravity is a strategic sticking point that helps to keep the lights turned on and dials spinning in data centers. That being said, I don’t fault the cloud providers for their strategy. I see them as part of the IoT and application stack. Ockam plans to integrate in a horizontal layer below each one.

Today’s IoT developer tools are just the tip of the iceberg for what’s to come. Specialized OSS tools will be built and they will organize horizontally as IoT matures. Dozens of companies will be built and billions of dollars of value will be created over the next decade. IoT is undoubtedly as compelling as cloud native applications and big data ecosystem stacks — so we should expect similar outcomes, and massive value to be created in both depth and scope as we did with LAMP, SMACK and DevOps tooling companies.

Ockam will be a key part of the soon-to-emerge reference IoT stack. We are focused on a Identity, Trust and Interoperability layer. We plan to make this specialized layer as simple and elegant as we can for developers. We will also integrate into other specialized layers around us. We already rely on public cloud infrastructure and plan to integrate with a big data analytics layer, so a stack will emerge. Ockam is building a new specialized layer in a new developer tool space that is tuned for IoT developers.
