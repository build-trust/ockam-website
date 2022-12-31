# Welcome

## Overview

Welcome to the Ockam Team. We are *so excited* for you to join us. In this guide we will walk you through how to add yourself to [our Team Page](https://www.ockam.io/mission#full-time) on Ockam.io. Ockam’s website, as you’d probably expect, [is open source code](https://github.com/build-trust/ockam-website). This exercise is also intended to familiarize you with our process for getting permissions, and the tools you need to land code in one of our GitHub repositories. Let’s get started!

To add yourself to the team page, first you would need to add yourself to the contributor list. The contributor list provides a method to recognize all contributors, including those who are not pushing code. It also presents a contributor license agreement which requires an agreement to allow for any changes to be accepted.

Be sure to familiarize yourself with Ockam’s [guidelines for contribution](https://github.com/build-trust/.github/blob/main/CONTRIBUTING.md) prior to submitting Pull Requests required for this process.


## Instructions

### Add yourself as contributor

1. You will need to sign your commit with a GPG key. Here is the guide how to add GPG key to your github account  (https://docs.github.com/en/authentication/managing-commit-signature-verification/generating-a-new-gpg-key)
2. Fork the contributors repository from https://github.com/build-trust/ockam-contributors
3. Create a new feature branch under your forked repo and add your Name, Github Username, Email, and “Yes” for CLA under “CONTRIBUTORS.csv” at the end of the list
4. Create a Pull Request across your feature branch from the fork and origin Ockam contributors repository and wait for approval
    1. As noted above, when making a commit be sure to follow the [guidelines here](https://github.com/build-trust/.github/blob/main/CONTRIBUTING.md#commit-messages)
    2. If you signed in your commit correctly you should see “Verified” badge near your commit in pull request -> http://d.miedziak.io/i/iLI4ku
5. Wait until your Pull request is merged

### Get privileges to Ockam’s GitHub repos

1. Provide your github username to an Ockam Github Administrator
2. Accept the [github organization invitation](https://github.com/settings/organizations). 

### Add yourself to the team page

1. Go to the[ repository website](https://github.com/build-trust/ockam-website)
2. Navigate to “[branches](https://github.com/build-trust/ockam-website/branches)”
3. Click on "New branch", enter a name, choose "develop" as branch source
4. On the repository website click on main branch name (“develop”) and switch to your newly created branch
5. Navigate to the “/public/team” folder, click on the “Add file” dropdown button in the upper right corner, choose “Upload files” and upload your avatar:
    1. Image file should be in PNG format with transparent background
    2. File resolution should be 328px width and 458px height
    3. You can find guidelines for taking your photo at [https://www.ockam.io/style-guide](https://www.ockam.io/style-guide)
    4. If using a cellphone, portrait mode provides the easiest default resolution to work with.
6. Commit change directly to your branch
7. Navigate to the “/src/consts/team.ts” file and add a new object at the end of MEMBERS array. The object with your personal details needs to contain the following parameters:
```javascript
    {
        name: 'Your Name',
        surname: 'Your Surname',
        position: 'Your Position',
        categories: [],
        country: '2-letter Country Code',
        photo: 'your photo filename',
        description: 'Few words about you',
    },
    /*
    Most of the fields are just regular strings, but there are a few special ones:

        * Categories should be one of the values listed at the top of the “/src/consts/team.ts” file
            * If you are joining the team as a new employee you should choose FULL_TIME_MEMBERS
        * Photo file name should be the same as the one you uploaded in the step 5
        * Country two-letter country code has to be in ISO_3166-1_alpha-2 standard
            * https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2

    */
```

1. Commit change directly to your branch
2. Navigate to "[Pull Requests](https://github.com/build-trust/ockam-website/pulls)" and you should see a prompt saying that your created branch had recent pushes, click on "Compare & pull request", enter the title and the description (if needed), click on "Create pull request" and wait for the approval
3. The develop branch is protected and will require a team member with permissions to merge it
4. The deployment from Development to Production is handled by the developers within an external team

Once your PR has been merged to develop, check to see how it looks in the `develop` version of the website through this link: https://ockam-website.vercel.app/mission#full-time

## But wait, there’s more…

Did you get stuck in this process, or could this document be improved? Since you now know how to commit changes to the website repo, please update this readme with a PR so that the next person to join The Team can do this exercise with ease.
