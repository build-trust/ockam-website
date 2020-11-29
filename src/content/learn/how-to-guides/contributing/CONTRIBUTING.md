---
title: Ockam on GitHub
order: 1
---
# Contributing to Ockam on GitHub

We'd love for you to contribute to our source code and to make Ockam even better than it is today! Here are the guidelines we'd like you to follow:

## Code of Conduct

Help us keep Ockam open and inclusive. Please read and follow our [Code of Conduct][coc].

## Support

Do not open issues for general support questions. We want to keep GitHub issues for bug reports and feature requests. You've got much better chances of getting your question answered on dedicated support platforms, the best being the [Ockam Community Discussion][discuss].

As general hygiene, we will close all issues that are requests for general support and redirect people to the section you are reading right now.

## Issues and Bugs

If you find a bug in the source code, you can help us by submitting an issue to our [GitHub Repository][github]. Even better, you can submit a Pull Request with a fix.

Before you submit your issue search the archive, maybe your question was already answered.

If your issue appears to be a bug, and hasn't been reported, open a new issue. Help us to maximize the effort we can spend fixing issues and adding new features, by not reporting duplicate issues.

In general, providing the following information will increase the chances of your issue being dealt with quickly:

**Expected Behavior** - Is there documentation or an example that represents the discrepancy?

**Actual Behavior** - Be sure to explain why this is a bug for you.

**Steps to Reproduce the Problem** - Code snippets and screen shots are always helpful.

**Environment** - What hardware, OS, and versions are you using?

**Suggest a Fix** - if you can't fix the bug yourself, perhaps you can point to what might cause the problem (line of code or commit)

Here is a great example of a well defined issue: [add link here when we have a good example]

## Fix a doc

If you have a suggestion for the documentation, you can open an issue and outline the problem or improvement you have - however, creating the doc fix yourself is much better!

If you want to help improve the docs, it's a good idea to let others know what you're working on to minimize duplication of effort. Create a new issue (or comment on a related existing one) to let others know what you're working on.

If you're making a small change (typo, phrasing) don't worry about filing an issue first.

For large fixes, please build and test the documentation before submitting the PR to be sure you haven't accidentally introduced any layout or formatting issues on [Ockam.io/learn][learn]. You should also make sure that your commit message follows the *Commit Message Guidelines* below.

## Build a Feature

You can request a new feature by submitting an issue to our [GitHub Repository][github-issues].

If you would like to implement a new feature then consider what kind of change it is:

* **Major Changes** that you wish to contribute to the project should be discussed first in an [GitHub issue][github-issues] that clearly outlines the changes and benefits of the feature. Be sure to read our *Issue Submission Guidelines* above.

* **Small Changes** can directly be crafted and submitted to the [GitHub Repository][github] as a Pull Request.

Be sure to follow Ockam's language specific format.

## Commit Messages

Each commit message consists of a header, a body, and a footer.

The header includes a type, a scope and a subject:

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

`<subject>` is _required_, must not be longer that 100 characters

`<type>` is _required_, must be in lower case, and have one of the below values.

   * `build:` changes that affect our build system or external dependencies
   * `chore:` some minor change that doesn't fall in any of the other types
   * `ci:` changes to our continuous integration configuration files
   * `docs:` a documentation only change
   * `feat:` a new feature
   * `content:` updates or additions to Ockam.io/learn

`<scope>` is optional, when used it must be in lower case and have one of the below values: 'c', 'elixir', 'go', 'javascript', 'rust', 'swift'.

`<subject>` is _required_, must be lower case and not end in period. Also be sure to describe your changes in the imperative-mood.

`<body>` is optional, must be max 100 chars wide, must have a blank line before it. Be sure to describe your changes in the imperative-mood.

`<footer>` is optional, must not be longer that 100 characters.

**Ockam requires that all commits are signed by your PGP key.**

If signing git commits is new to you, we recommend that you use Krypton.
Instructions for signing git commits with Krypton can be found [here][sign]

## Pull Requests

Before you submit your pull request consider the following guidelines:

* Search [GitHub][github-pulls] for an open or closed Pull Request that relates to your submission. You don't want to duplicate effort.
* Make your changes in a new git branch and use the branch naming convention `username/feature`
* This is the fun part! Build your feature.
* If the changes affect public APIs, change or add relevant documentation.
* If you have formatting errors your PR will be rejected by our build tools.
* Ockam requires that all commits are signed by your PGP key. If signing git commits is new to you, we recommend that you use Krypton. Instructions for signing git commits with Krypton can be found [here][sign].
* Commit your changes using a descriptive commit message that follows our commit message conventions.
* Be sure to squash your commits in your feature branch.
* Push your local feature branch to GitHub
* In GitHub, send a pull request to `ockam:develop`.
* The Ockam Contributor License Agreement tool will check to see if you've signed our CLA. If you have not yet done so, the PR will be blocked. The fix is easy. Simply click the link in the PR 'Conversation' user experience on github.com and follow the signing steps. Be sure to read the CLA during the process.
* Look at the 'Checks' user experience on github.com. We trigger a process to check that your code follows the guidelines set out in this contributor guide.
* If you find that our CI has failed, look into the logs on Azure Pipelines to find out if your changes caused test failures, the commit message was malformed, etc. If you find that the tests failed or times out for unrelated reasons, you should reach out to an Ockam team member in the [Ockam Community][discuss] so that the build can be restarted.
* If we suggest changes, then:

  ** Make the required updates.
  ** Re-run the Ockam test suite to ensure tests are still passing.
  ** Commit your changes to your feature branch (e.g. `username/feature`).
  ** Squash your commit history and rebase your feature branch to the current version of `ockam:develop`.
  ** Push the changes to your feature branch. This will update your Pull Request.  

That's it! Thank you for your contribution!


## Contributor License Agreement (CLA)

When you submit a Pull Request, a bot will ask you to sign our CLA if you haven't done so before. This is necessary for documentation changes, too. Be sure to read the CLA!

 It's a quick process, we promise!

 [You can find Ockam's CLA here.][cla]

* If you work for a Corporation and your commits are part of a corporate backed project, please [reach out to the Ockam Team via email][corporate-cla] so we can send your legal department our corporate CLA via Docusign.

## References
Thank you to the AngularJS community, this contributor guide was inspired by your format and content.

[coc]: https://www.ockam.io/learn/how-to-guides/high-performance-team/conduct
[learn]: https://ockam.io/learn
[corporate-cla]: mailto:dev@ockam.io
[cla]: https://www.ockam.io/learn/how-to-guides/contributing/cla/
[github-issues]: https://github.com/ockam-network/ockam/issues
[github-new-issue]: https://github.com/ockam-network/ockam/issues/new
[github-pulls]: https://github.com/ockam-network/ockam/pulls
[github]: https://github.com/ockam-network
[sign]:https://krypt.co/docs/start/code-signing.html
[discuss]: https://github.com/ockam-network/ockam/discussions
