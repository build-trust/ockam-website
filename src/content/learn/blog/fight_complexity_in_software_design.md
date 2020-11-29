---
title: 'Ockam: A Philosophy on Open Source Software Design'
date: 2020-10-15
description: 'Our approach with software is to create simple designs that enable us to build up our systems without them ever becoming overwhelming.'
metaTitle: 'The Ockam approach to software design is to keep it simple by fighting complexity in our open source code'
author: 'Mrinal Wadhwa'
authorAvatar: ./assets/mrinal-wadhwa-1.jpg
---

# How to Fight Against Code Complexity in Open Source Projects

Complex code can be hard to manage and build upon. That's especially true for open source projects, where strong open source communication is crucial for success. Since we’re building an open source company, we made [simplicity a core value](https://www.ockam.io/learn/how-to-guides/high-performance-team/values_and_virtues_on_the_Ockam_Team)—and even referenced it in the name of our company: Ockam. Our approach with software is to create simple designs that enable us to build up our systems without them ever becoming overwhelming.

In this post, we'll be walking you through our open source software design philosophy, inspired heavily by _A Philosophy of Software Design_ by John Ousterhout.

## Complexity and the Flaws of Tactical Programming

Let's start by defining what we mean when we talk about _complexity_. Ousterhout's book contains a wealth of knowledge useful to any developer, including his conceptualization of complex code. In his words, complexity is "anything related to the structure of a codebase that makes it hard to understand or improve that codebase." This is an important clarification to make. We aren't using “complex” as a euphemism for technically challenging or impressively large systems. We're using it to describe code structure that is inherently _more_ complex than it has to be.

This concept of undue complexity emerges as a result of tactical programming, or the idea of coding to completion in the fastest way possible. While it may seem like a good idea, speed comes at the cost of future efficiency. Eventually, the shortcuts you took will make improving your code challenging, and in some cases, even impossible. This is caused by a combination of unnecessary dependencies and obscurity. When modules rely too heavily on one another, you quickly get situations like the following:

![Complex Code](./assets/complex_code.png)

What causes the eventual slowdown experienced by tactical programmers? It's a result of three problems:

- _Change amplification._ Simple changes are not simple at all. Making a change requires modifying many different sections of code.

- _Cognitive load._ Developers need to know a lot of superfluous information to make changes. That supposedly simple change that ends up needing you to modify a lot of other code sections? Well, you're wasting mental resources keeping track of how that change would affect those sections. And that leads us to the third problem.

- _Unknown unknowns._ When a simple change affects so much, how are you supposed to know what will be affected? Sure, maybe you've worked on the project before and are mentally wasting energy keeping track of that, but what if you haven't made that change before? You don't even know what all will be affected and will have to be modified. Heck, you might not even know what to change in the first place. You simply don’t know what you don’t know.

So what's the alternative? We mentioned that the hare would probably prefer the short-term focused goals of tactical programming, but what would the tortoise prefer? Let's look at the alternative to tactical programming: strategic programming.

## Strategic Programming Works Long-Term

So far we've discussed what _not_ to do. Let's move on to what we prefer: strategic programming. To quote Ousterhout once again, strategic programming is the idea that the "primary goal must be to produce a great design, which also happens to work."

What makes up design-first programming? Well, a lot of things, but let's look at a common example many developers think about: what to name variables. If you're in a rush, you may resort to the developer sin of naming something "x," and then the next variable "xx," and then perhaps "xxx" and so on. That creates problems the next time someone is looking at the code and has no idea what "x" is supposed to represent.

We're big fans of long, descriptive variable names. Yeah, it may be annoying to write out a 10, or even 20 character long name. However, that energy will be worth it the hundreds of times someone looking over the code immediately understands what's going on.

Comments are another concept your future self will thank you for. Technically challenging code can be hard to parse at a glance, no matter how well-designed. Comments describing a function, or even just delineating it from other things, greatly improve the time it takes the reader to understand what's going on.

Now, none of this matters if you're not consistent in the implementation. In that case, you're just another version of the hare.

### Code With a Modular Design

In some ways, however, naming and comments are just nice, albeit useful, decorations. True strategic programming systematically affects how the code itself is written and organized. A key part of this is writing with a modular design in mind.

Modular design embraces the breakdown of programs into collections or modules that can be independently changed. Remember how a flaw of tactical programming is the recurring problem of changing one thing that then affects multiple parts of the program? That wouldn't be the case with a modular design.

Another benefit of modular design is that when you want to change one thing of the program, you don't have to worry about how other modules work, just like how the other modules aren't affected by how your changed module works. By encapsulating complexity, you greatly decrease the cognitive load changes take. And remember, this is a design philosophy, so while it does work on a module level, you can also apply it on lower levels, such as for individual functions. All the better, in fact!

We've been introducing you to strategic programming in a broad sense. It's also good to show you specific examples of strategic programming at work. Good thing we’ve been practicing strategic programming!

## How Ockam Benefits From Strategic Programming

How do we at Ockam incorporate strategic programming? Well, it's a key pillar to being able to support and connect the vast array of IoT systems.

With so many protocols to interact with, we make use of deep modules to reduce complexity. While a few parameters need to be specified no matter what, such as user-specific values like their key pairs, deep modules are made to do a lot with a little information.

We also make use of "loose coupling." This is the idea that components can be replaced or changed internally without breaking what they connect to. With so many protocols to work with, we do this with polymorphism: the ability to present the same interface for differing underlying forms.

A key component of what Ockam does is enable the sending of messages to other processes. Strategic programming allows us to do that without worrying about what's going on within those processes. Our loose coupling design ensures that how we tweak our internals won't affect how those processes interact with our messages.

If you like the idea of getting first-hand experience with strategic programming, be sure to [check out our GitHub](https://github.com/ockam-network/) for ways you can get involved with Ockam. And if you want to go more in-depth into the philosophy of strategic programming, John Ousterhout is your guide. After all, he did write the [book](https://www.amazon.com/Philosophy-Software-Design-John-Ousterhout/dp/1732102201) on it.

You can also watch my presentation on this topic here:

<div id="presentation">
    <div class="rwd-container">
        <iframe class="rwd-iframe" src="https://www.youtube.com/embed/W2CdtvIlQCQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
</div>

[You can grab the slides from this presentation here:](https://github.com/ockam-network/website/tree/production/src/content/learn/blog/assets/Fighting_Complexity_in_Elixir_Codebases.pdf)
