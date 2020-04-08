---
title: "Even Ockam.io is open source!"
date: 2019-02-15
description: "All of the source code for Ockam.io is OSS. This is how we built it..."
metaTitle: "To build ockam.io as open source we used Azure Pipelines, a CDN, JAMstack, GitHub and a bunch of other awesome tools. This is how we did it."
author: "Matthew Gregory"
authorAvatar: ./assets/matthew_gregory-1.png
isHomepageFeatured: true
homepageFeaturedOrder: 3
---

Modern web development involves building on the excellent work of others. Between open source frameworks and cloud tools, you can get a big boost in your projects. Indeed, that’s one of the reasons [why we love open source](https://www.ockam.io/learn/blog/why_we_love_open_source) and why we are building Ockam as an open source centric company.

When set out to build a new version of our company website, we naturally gravitated to open source tools to get it done. This site is rendered with React and GraphQL. All the content is stored as Markdown in GitHub and static files generated with Gatsby. Azure Pipelines deploy a new version every time there’s an update to our site’s code. And that repo is public—open source, even—so you can learn from, and build upon our experience for your own projects.

We’ll walk through how we built our new site in this post:

## The Ockam.io Open Source Stack
Ockam doesn't need to reinvent the wheel. The oldest websites on the internet were static HTML files without the fancy functionality that has been added to the modern browsing experience. Now with serverless pulic cloud technologies, these old ideas are the newest iteration of distributing content. Simple, modern tools - used in creative ways - allow developers to design and build with elegant simplicity.

Simplicity is one of our founding values, reflected in our own namesake, Ockam. Similarly to the principle of Occam’s Razor, we believe that more complexity doesn’t always mean better products. This is reflected in how we built our website using the JAMStack - classic tools reinvented for a modern product.

### What is the JAMStack?
The JAMStack is a new way of building websites using established web development tools combined with modern architectural practices. JAM stands for the three main concepts used in this process: **J**avaScript, **A**PIs, and **M**arkup. With the JAMStack, developers design component templates, generate content and website actions, and then build and bundle the website into HTML pages with a static site generator. We use [Gatsby](https://www.gatsbyjs.org) with Ockam.io.

With the JAMStack, dynamic content and functionality runs in the client's browser for a performant user experience. APIs are used to abstract out server-side functionality. Traditional websites rely on a back-end server which can be functionally replaced with serverless API calls from within the client browser. Gatsby even provides a [GraphQL endpoint](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql) to query your data. But the 'back-end' of our static website could be anything we want it to be with different API calls.

Finally, the website is served as an inherently static HTML (Markup) file. With a static site generator, this can be created from a source written in a format such as Markdown, which is what we used. Markdown is a straightforward markup language as it uses plain-text-formatted syntax for easier internet writing.

### Why We Chose JAMStack
There are two primary advantages for the ockam.io site to use JAMStack:

1. No need for a database or complex backends
2. Building and hosting are decoupled

These provide additional benefits, including page speed, automatic change tracking, and focus for our team. When a user requests a webpage, the file has already been built and is served from a Content Delivery Network (CDN) for a fast and streamlined user experience. Because we only serve static views to users, there is no software layer or database to attack.

As we update our site, the changes are tracked with Git and hosted on GitHub. [The git repository](https://github.com/ockam-network/website) contains every line of code for our entire website (did we mention it's open-source?). It is continuously rebuilt and deployed to the cloud with each change.

Finally, there’s not a huge codebase for our team to maintain. Ockam engineers can stay focused on [our other open source projects](https://github.com/ockam-network) rather than reinventing the wheel with our website.

## Deployed in Azure
I spent over five years working in cloud hosting services, most recently as an 'Intrapreneur' at Microsoft. I helped guide Azure's shift to open source software and Container Services. Azure's dedication to open source software and Ockam's mission to enable a robust and seamless system design made the choice to host our website with Azure an easy one. We use Azure Pipelines and Azure CDN to build, test, deploy, and distribute our website across the world.

I suppose that the apple doesn't fall so far from the tree?

### Azure Pipelines
In order to build our website automatically, we need continuous integration and delivery (CI/CD). Azure Pipelines offers container support and the workflows we needed to orchestrate the build.

The integration with GitHub ensures anything we put in our website repo is available to the cloud. Whenever changes to the master branch are detected, Gatsby is invoked to generate the HTML files of our website. Docker instances running Node allocate the necessary resources and build tools to Gatsby in multiple containers to quickly regenerate the website and send it down the pipeline.

Pipelines not only builds our website, but also quickly deploys the new site where it needs to be. In our case, that’s Azure CDN.

### Azure CDN
A static site is already likely to load quickly. When that’s paired with a CDN, we can decrease the latency across a worldwide network. By distributing and caching our website files at locations across the globe, there is always a server nearby to quickly deliver any page to any person as quickly as possible. Azure's CDN has over 130 point-of-presence (POPs) locations across 80 metro regions worldwide. Geo-filters direct traffic to local servers for the fastest experience.

## Layer on External Services, Like Algolia and Lever
By keeping our website stack relatively simple, we’re able to easily integrate new services. For example, after we launched the first version in February, we realized it would be useful for visitors to search our [expanding Learn section](https://www.ockam.io/learn). If our site relied on a heavy CMS or custom software, that could turn into a big project. Instead, we integrated a Gatsby plugin and an external service.

We turned to [Algolia](https://www.algolia.com/)’s search-as-a-service to easily augment our static site. We call its search API via JavaScript and the [Gatsby search plugin](https://www.gatsbyjs.org/docs/adding-search-with-algolia/) ensures the content stays synced.

Because we chose a popular open source project like Gatsby, it simplified the effort. Someone had already built the Algolia plugin, which made it easy for us to implement. As we’ve said previously, [open source is the Internet’s most important integrator](https://www.ockam.io/learn/blog/open_source_as_an_integrator/). Naturally, we also chose to make our own site open source, as well.

Another API that we call is Lever. Lever is a tool that we use to manage applications to our team, and to publish job descriptions on Ockam.io/team.

## Ockam is Open Source, Of Course!
Ockam is built on open source and we are also building open source. Our website is a key way we get our message to the world, as well as communicate with our community. A public repository and an open source license for our website was essential. But we thought that wasn’t far enough.

Every page of our site includes a prominent 'edit' link, encouraging the community to contribute back. We think it’s part of supporting the [virtuous cycle of open source](https://www.ockam.io/learn/blog/why_we_love_open_source/). One mistake that developers make in their early career is to assume that open source contributions need to be feature releases or a brilliant piece of code. Most open source code becomes great because of little changes. If you know markdown, and the git/GitHub workflow, you could fix a typa on our site. You'd be an open source contributor and you'd be our hero. I'll mail you an Ockam hat!

We built our website with the same ethos that we’re building our Ockam — secure, performant, and dependable technology that is transparent. New modern architectures like JAMStack are open source solutions that allow us to build the best website for our developer team and for everyone else who wishes to use it.

Feel free to [fork our repo](https://github.com/ockam-network/website) and follow the instructions to build out your own static site. If you build something cool, be sure to let us know about it!

We have a ockam.io/learn section of our website. Feel free to submit a pull request to have your blog, code example, or content published!
