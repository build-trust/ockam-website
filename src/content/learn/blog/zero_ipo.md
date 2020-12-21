---
title: 'Zero-to-IPO: Charting Ockam’s Route'
date: 2020-11-21
description: 'We live our values at Ockam, and as an open source company, we want to share our roadmap'
metaTitle: "Ockam's Zero-to-IPO framework is a product and GTM roadmap for open source companies"
author: 'Matthew Gregory'
authorAvatar: ./assets/matthew_gregory-1.png
isHomepageFeatured: true
homepageFeaturedOrder: 3
---

My presentation at the [2020 Open Core Summit:](https://2020.opencoresummit.com/)

<div id="presentation">
    <div class="rwd-container">
        <iframe class="rwd-iframe" src="https://www.youtube.com/embed/19PeGYB2P54" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
</div>

The following is a transcript of this recording:

# Introduction

Ockam’s Zero-to-IPO map is a key strategy input to our tactical short, medium and long-term business planning. It focuses on the one-thing that _really_ matters, at specific points in time. We live our values at Ockam, and as an open source company, we want to share our roadmap.

As outlined in the progression below, we’ve plotted a course from stoking awareness to operating an enterprise sales machine.

![Zero to IPO map](./assets/zero_ipo/zero_1.svg)

The time scale for our route to IPO is, as you’d expect, years long. Given that startups plan around funding cycles, let’s plot funding cycles as waypoints on our course. It can generally be assumed that there is 18-24 months between these waypoints.

![Funding time scale](./assets/zero_ipo/zero_2.svg)

The cloud, edge, and open source landscape continues to evolve - which means that we need to chart our own course into the future. However, Ockam’s route to IPO also considers the various ways that other companies have run the gauntlet from Zero-to-IPO. I’ve been fortunate to have been ‘in the rooms where it happened’. Over the past 10 years I’ve directly worked with well over 100 companies that were underpinned by open source software projects. I’ve seen spectacular successes, breathtaking failures, modest acquisitions, and some companies that simply fade into the darkness. I'll save those stories for another time, maybe over a beer.

In the image below are experiences that I’ve drawn from the previous decade in the open source, cloud, and developer tool space.

![Rooms where it happened](./assets/zero_ipo/zero_3.svg)

Let’s dive into each stage, in turn, to unpack what we are doing, when we are doing it, and how we are going to measure it.

# Developer Awareness

## Motion

In order to recruit our team, or for a developer to consider using Ockam, first they have to know we exist. We create and distribute a tremendous amount of content at Ockam with one goal - driving developer awareness.

For example, The first product Ockam shipped was [a blog on our Values](https://www.ockam.io/learn/how-to-guides/high-performance-team/values_and_virtues_on_the_Ockam_Team/). The second was a white paper that shared our vision. Even this post is an example!  We have a learning library that outlines our thesis on the open source ecosystem, teaches computer science fundamentals, gives insights into our team culture, and demonstrates our technology. We’ve sat down for dozens of podcasts and interviews over the past two years. Ockam’s content is based around teaching. Being an effective listener and a great teacher are core underpinnings when building an open source community.

## Metrics

To gauge awareness we track activity including page views on ockam.io, 'contact us' webform inquiries, GitHub stars, social media mentions, followers and, most importantly, applications to join our team.

# OSS Community

## Motion

This is a critically important step in our progression to IPO. Building Ockam's community is a never-ending endeavor. It takes years of focus and unrelenting attention to get this step right. For example, Kafka spent it's first 5 years in this phase as an Apache project before Confluent was started.

We have three code interfaces to Ockam, which means that there are three different personas in our community:

**Application layer developers**

Ockam’s users build systems and applications with our simple APIs, OckamD binary downloads, and hosted cloud services.

To simplify what’s going on at this stage, we create packages that any developer can grab in the middle of the night, on the other side of the world, and get a quick win for their demo day at work. You’ve got a job to be done, and we’ve got a simple solution for you. You can get it right now and we will measure your time to a technical-win in the scale of minutes.

**Partners**

Community partners build add-ons, connectors, and plug-ins to connect Ockam to other codebases, cloud services and hardware components. Examples include InfluxData, Confluent - Kafka, Microchip, NXP, MacOS, and Microsoft Azure.

**Open source developers**

Ockam’s open source builders are engaged in development of Ockam's core codebase. They attend our monthly community meetings, and are hands-on with our OSS codebase on GitHub. Their participation ranges from updating a typo in documentation, to building complex features.

## Metrics

We track Monthly Active Users across all three personas in our community:

Binary downloads, account signups, or SaaS service IOPS are all indicators of usage. As hinted above, time to ‘technical win’, for an individual developer is also paramount. We’ve defined time to ‘technical win’ as the time it takes to go from an individual developer’s initial discovery to a working prototype that includes Ockam features.

The easiest user growth to track is the number of partner integrations. Since partners engage with us 1:1 on an integration, we are highly selective and deliberate about the partnerships that we support. Eventually the development of our technical partnerships will become programmatic. Programmatic examples from my past include the partner program for Heroku Add-ons and the Azure Marketplace partner portal.

We also track the intersection of partnerships and usage. For example, the number of Ockam Daemons that run alongside Influx Telegraf, or the number of IOPS in Ockam Routers that securely move packets to a Kafka Connector.

Finally open source activity and engagement is transparent through the tools in GitHub. Check out [how we are doing](https://github.com/ockam-network) with stars, forks and commits.

# Self-serve SaaS

## Motion

This is a really fun stage for a product-and-pricing-nut like me. By this point in our journey we have users, but not customers. To satisfy investor expectations and to further fund product development, we start to feed our product development machine with revenue.

This stage is far simpler than it’s often made out to be. Here’s my basic formula;

- If you are an individual developer, then Ockam is free.
- If you are a commercial enterprise, but have not yet had a ‘technical win’ with Ockam, then Ockam is free.
- If you are a commercial enterprise, and have had a ‘technical win’ with Ockam, then you pay.

From here things get a bit more complicated. Services need to be packaged and priced. This, in my opinion, is the most challenging, but also the most fun part of product development. The classic product marketing mix (aka the 4P’s) framework is durable and applies for Ockam’s planned product offerings. In this phase we are packaging **P**roducts (say S, M, L sizes), establishing a **P**rice for each product, **P**romoting the product through rigorous segmentation and targeting, and **P**lacing it into various channels and partner marketplaces for distribution.

Ockam’s SaaS products will have a freemium pricing and packaging structure. It’s worth calling out that freemium is not a pricing strategy. It’s a customer acquisition tactic that aligns with the formula above.

## Metrics

Monthly Recurring Revenue (MRR) is the top line / key metric during this phase.

The free-to-paid funnel is another key metric since it is a leading indicator and helps to forecast MRR. We will track both conversion and velocity of our freemium SaaS users.

The metrics we track in the Self-Serve SaaS phase allow us to A/B test in our demand generation funnel. A/B testing allows us to optimize month-over-month revenue growth. The target is 10-15% MoM growth.

# Inside Sales

## Motion

Inside Sales is a channel strategy for specific types of large customers we already have. This is mainly a cultivate-and-grow tactic. Our bottoms-up, Self Serve SaaS product model feeds leads to our Inside Sales Team. This team is technical, includes sales engineers and provides world-class support.

There are two separate objectives during this phase.

- Increase MRR through an increase in our customer base, and in the average ticket size.
- Learn about Customer Acquisition Costs (CAC) for specific segments, prior to launching the Enterprise Sales phase.

Monthly recurring revenue is still our top priority during the Inside Sales phase.

What’s less obvious is the second objective. Understanding CAC prepares us for an all-in Enterprise Sales motion. Moving from here onto the Enterprise Sales waypoint is probably the most challenging. It’s fraught with peril. Many, many smart companies, with great products, and ‘developer love’ die right here.

How can that be? It’s because Inside Sales is bottoms-up and Enterprise Sales is tops-down. This means entirely new buyers, new product-marketing mix, and new internal talent. We must hold onto our developer roots, while we also learn to sell to the suits. While we are executing on Inside Sales we are doing the primary research that will help spawn a new company from our company.

This is fantastically difficult - mostly from a cultural standpoint. Fortunately there are a lot of people with a lot of scar tissue from the past 10 years - including myself - and we will push through. The key is patience. We need to use our inside sales motion to find specific beachheads to land our Enterprise Sales motion.

## Metrics

MRR carries over as our key metric from the Self Serve SaaS phase.

CAC analysis for multiple customer segments.

## Anti-Metrics

There will be noise in our Inside Sales data!

The noise is any sale that looks like it could be Enterprise Sales. Up to this point, non-recurring engineering (NRE) and enterprise-like sales don’t count as Enterprise Sales, as we define the term in the next section. Typically they are one-off deals because the motion to win these deals isn’t scalable. We will do large custom deals to gain access to smart teams that deploy interesting technology. I prefer to categorize this class of revenue as ‘business development’ or even R&D.

Why is this an anti-metric? Because other Open Source startups typically stand up a couple one-off enterprises like sales as a way to puff themselves up and to convince themselves that they are ready to move to the next phase. I strongly caution my future self to parse the noise from the signal prior to launching Enterprise Sales.

Furthermore, there are other Open Source companies that entirely bypass the Self Serve SaaS phase in favor of the chunky revenue that comes with Enterprise Sales. Those companies tend not to be product companies. They become consulting and services shops that dress up to look like primary product companies. That’s not our vision. We are a tool company. We build products.

# Enterprise Sales

## Motion

Enterprise Sales is…

really, really expensive.

When we move into Enterprise Sales we will be pushing the entire company, and all of our work up to this point, in as the ante. Hyperbolic? Nope.

An Enterprise Sales motion has extremely high CAC and long sales cycles. Both are perfectly acceptable, if there is high customer lifetime value (CLVs) in these new customers. Failed Enterprise Sales experiments result in sales person turnover, halt product development, and ultimately kill great companies.

This is why we will put forth a focused effort on our segmentation analysis while we are in the low CAC environment of Self Serve SaaS and Inside Sales.

Do I sound doom-and-gloom about Enterprise Sales?

Far from it!

The upside for running a well tuned Enterprise Sales motion is staggering. The volume, the scale, and aggregate velocity of sales that I saw, first hand, at Salesforce and at Microsoft was astounding.

Remember what our Vision is:

> To enable trust between every connected device, every cloud service, everywhere.

We can not achieve our vision without visionary leadership from innovative organizations that want to solve complex global-scale problems. We need to deploy Ockam to fleets of devices, on the scale of millions, to achieve our ultimate goal and to realize our vision.

## Metrics

Annual Contract Value (ACV) is the typical metric to follow in Enterprise sales motions. Ockam is no exception.

What’s more interesting, at the scale of Enterprise sales, is the number of nodes (machines running Ockam software) that an enterprise deploys. At the scale of Enterprise Sales, Ockam achieves compounding network effects. This is because the odds that two machines will interact with each other becomes exponentially greater at scale. This means that machines will be able to autonomously reason about trust between each other as they have unforeseeable interactions with each other. When there is trust between every device and every cloud service, everywhere, everything changes!

# Summary

![Summary](./assets/zero_ipo/zero_4.svg)

# But wait! There’s more...

I love maps. In a previous life I was a navigator. [True story]

All maps have the same problem. They are two dimensional, and we live in a multidimensional world. This is why cartographers have invented hundreds of ‘projections’ of our world.

Navigators use a projection called ‘mercator.’ This projection has the benefit of making straight lines between two points. This comes at the expense of distorting scale on the north-south axis. The map I created above is a mercator projection where our journey from Zero-to-IPO is a straight line. But there are plenty of other dimensions we still need to consider to get a complete picture.

## The ‘building’ projection

We are builders at Ockam. We are building software, partnerships, community, and a business.

I think of everything we do in layers. We need to balance moving up the stack with fortifying the foundation. We build up and out at the same time. A pyramid is a good mental model for this projection.

Below are a couple examples for snapshots of our building in different states of construction.

![Building Projection](./assets/zero_ipo/zero_5.svg)

## The ‘feedback’ projection

We scout the waters ahead by running pilots, talking to customers and making opportunistic hires. For example, even though we are currently at the ‘OSS Community stage’ we still talk to potential enterprise scale companies about their problems. We mock up product bundles and think about distribution channels that could feed Inside Sales.

Our Zero-to-IPO implies forward motion. However we continuously back fill steps previously taken with new knowledge for continuous improvement to solidify the base in our ‘building’ projection.

We continuously look to the horizon, and keep building on what we’ve already accomplished.

![Feedback Projection](./assets/zero_ipo/zero_6.svg)

## The ‘virtuous cycle' projection

I love virtuous cycles. But, who doesn't?!

To get Ockam's business model you need to understand the virtuous cycle open source ecosystems.

"Open source? But how do you make money?!" I get this question a lot. The simple answer is that we create a virtuous cycle partnership with Ockam Inc, Ockam Open Source, and all sorts of Ockam Add-ons.

For Ockam's virtuous-cycle take on open source, I recommend you [watch my presentation from Oktane 2020](https://www.ockam.io/learn/blog/oktane_2020_the_future_of_identity/).

![The Ockam ecosystem](./assets/zero_ipo/zero_10.svg)

## The ‘technology’ projection

We appreciate the complexity of our underlying technology.

Ockam is a deep tech company. It takes exceptional people to write the code that makes up Ockam's core. It takes time to build a high performance team with exceptional people. It takes a team to build deep tech. Ockam takes time.

Here’s an example for how this has played out over the past 10 months; We are a 6 person team. We’ve received 1800 resumes, and we’ve conducted about 250 interviews over that time. ‘High performance team’ is one of our values, and we live it as a virtue. It’s something we can not compromise.

Fortunately we’ve [built a team of investors](https://www.ockam.io/learn/blog/ockam_raises_seed_round/) that know how to build for a grand vision of the future by solving exceptionally complex problems with world class teams.

## The ‘product roadmap' projection

Ockam is a product company.

At a high level, I think of our product roadmap in the following phases:

![Ockam's product roadmap](./assets/zero_ipo/zero_7.svg)

Content is a product. I think of the pixels on this website and in GitHub as part of our product suite. All of it is focused on educating and informing our community of builders on topics related to Ockam's vision to add trust to every device, every cloud service, everywhere.

We love tools, and we know that you do too. All builders do! Ockam's tools empower developers to do complex things, simply. We think of our SDKs, binaries, application interfaces, and partner integrations as part of our tool set.

Ockam's services simplify deployment for your production environments. You have products to build, and you don't want to worry about deploying infrastructure. That's our job!

At enterprise scale, Ockam becomes an interoperable architecture for universal trust between any device or cloud service anywhere. This is what we call the Ockam Platform.

# How other frameworks map to ours

## Peter Levine - Partner at a16z

Here’s how Peter’s ‘3 pillars of Open Source’ align with Ockam’s Zero-to-IPO map. He does such a fantastic job of laying out his structure, I’ll direct you to consume his frameworks from [first principles](https://a16z.com/2019/10/04/commercializing-open-source/):

![a16z Model for Open Source](./assets/zero_ipo/zero_8.svg)

## Nnamdi Iregbulem - Partner at Lightspeed

[Nnamdi](https://lsvp.com/team/nnamdi-iregbulem/) wrote a perspective on go-to-market strategy that's backed by quantitative analysis and empirical data. I encourage you to read his entire blog post: [Enterprise Software Monetization is Fat-Tailed](https://whoisnnamdi.com/software-fat-tailed/). It's spot on - and perfectly aligns with our sequential staging of Self-serve SaaS => Inside Sales => Enterprise Sales in Ockam's Zero-to-IPO strategy.

His advice?

> Focus on the Tails!

> If the distribution of revenue is fat-tailed, vendors should be trying to insert their software into as many customers as possible, as cheaply as possible.

Exactly right. Moreover, Nnamdi's blog contains the detail to why CACs-by-segment are key metrics during our Inside Sales phase. Simply, we are gathering data then analyzing on our Tails.

## Battery Ventures

The way that Dharmesh Thakker and Chiraag Deora articulate 'time to value' and 'structuring self-service vs. enterprise sales playbooks' highly aligns with the GTM aspects of Ockam's Zero-to-IPO framework.

Moreover this quote,

> With bottoms-up offerings, it is critical that your end users can create immediate value with your (great) product without needing to speak with a salesperson or pre-sales engineer,

highly aligns with Ockam's Values around [simplicity and the love that builders have for their tools](https://www.ockam.io/learn/how-to-guides/high-performance-team/values_and_virtues_on_the_Ockam_Team/#builders-love-their-tools).

[Click here to read more on the Battery GTM framework](https://www.battery.com/powered/market-uncertainty-cloud-native/)

## Adam Gross - CEO at Heroku

Adam has a self-serve product model that he call’s ‘1,2,3’. He outlines it in this presentation and I suggest that you consume it, [here](https://www.heavybit.com/library/video/self-serve-go-to-market/). What I specifically love about his presentation is the detail that he paints in the self-serve SaaS phases from his own experiences. Ockam’s Zero-to-IPO differs in some ways, but directionally we are aligned.

![123 Model for SaaS](./assets/zero_ipo/zero_9.svg)

## Bessemer Venture Partners

Amit Karp, Mike Droesh, Ariel Sterman, Jenny Gao, and Ethan Kurzweil recently collaborated on a 'Roadmap for Open Source' companies. They share:

> After years of investing in open source software, we’re releasing our thinking on what positions these companies as emerging technology giants.

> It’s no secret that open source is taking over the software development world. In just the past two years, there has been over \$80 billion in liquidity value generated from the acquisition, merger, and IPOs of open source software-based businesses, so it should come as no surprise that the pace of venture investments into this space is growing faster than ever.

> One major development is worth emphasizing: once considered the cheaper version of closed source software, open-source software is now viewed as the superior alternative offering higher quality, better support, and more flexibility.

We couldn't say it any better ourselves, so I encourage you to read their entire post!
[Bessemer Roadmap: Open Source](https://www.bvp.com/atlas/roadmap-open-source)

They describe `The Open Source Six: Good, Better, Best Framework` in their blog. I'd argue that Ockam's Vision, Zero-to-IPO framework, metrics, and our community/project/company structure aligns with Bessemer's 'Best'. What do you think? Am I right, or wrong? Either way, I'd love for you to reach out and let me know!

You can find me in [this thread](https://github.com/ockam-network/ockam/discussions/448) in GitHub Discussions, where we openly collaborate, learn, and share all-things-open-source related to Ockam.
