# Welcome

## Overview

Welcome to the Ockam Team. We are *so excited* for you to join us. In this guide we will walk you through how to add yourself to [our Team Page](https://www.ockam.io/mission#full-time) on Ockam.io. Ockam’s website, as you’d probably expect, [is open source code](https://github.com/build-trust/ockam-website). This exercise is also intended to familiarize you with our process for getting permissions, and the tools you need to land code in one of our GitHub repositories. Let’s get started!

To add yourself to the team page, first you would need to add yourself to the contributor list. The contributor list provides a method to recognize all contributors, including those who are not pushing code. It also presents a contributor license agreement which requires an agreement to allow for any changes to be accepted.

Be sure to familiarize yourself with Ockam’s [guidelines for contribution](https://github.com/build-trust/.github/blob/main/CONTRIBUTING.md) prior to submitting Pull Requests required for this process.


## Instructions

### Add yourself as contributor

1. You will need to sign your commit with a GPG key.
    1. Please follow this
      [guide](https://docs.github.com/en/authentication/managing-commit-signature-verification/generating-a-new-gpg-key)
      to create a new GPG key & add it's public key block to your github account.
        - Note: On Linux the `gpg` command is probably already on your computer, so you
          might not need to install the GPG command line tools. Also on Linux the files
          are saved to the `~/.gnupg/` folder.
        - Note: when following the instructions above make sure to use the correct email
          address that matches one in your github account (you will use this email to sign
          the commits).
    2. Once you have created your GPG key, Ockam requires that all commits be signed w/
      GPG keys. So you have to let your `git` command know that you would like to use your
      new GPG key (that you created above). Here's a
      [guide](https://docs.github.com/en/authentication/managing-commit-signature-verification/telling-git-about-your-signing-key#telling-git-about-your-gpg-key)
      on how to do this; the instructions below are a summary of this guide.
        - You will first have to get your GPG key using:
          `gpg --list-secret-keys --keyid-format=long`.
        - Configure settings for `git` to to use GPG to sign commits w/ the right key:
           - globally: `git config --global user.signingkey <MY_KEY>`
           - or locally for just one repo: `git config user.signingkey <MY_KEY>`
        - Optionally you can tell `git` to sign your commits using this key by default
          using:
            - globally: `git config --global commit.gpgsign true`
            - or locally for just one repo: `git config commit.gpgsign true`.
        - Make sure that the email that you're using to make commits to the repo
          is matching the one in your GPG key and your github account. You can change that
          using this command if you have many different emails in github:
            - globally: `git config --global user.email "<YOUR_EMAIL>"`
            - or locally for just one repo: `git config user.email "<YOUR_EMAIL>"`.
        - Finally, when making commits, be sure to use this command so that your commits
          are signed with your GPG key: `git commit -S -m "<COMMIT_MSG>"`
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

1. Go to the [repository website](https://github.com/build-trust/ockam-website)
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

> Note: If you have more than one email address with your github.com account, then make
> sure that the primary for this commit is the one that you added to “CONTRIBUTORS.csv”
> file above. Otherwise, the verified commit will fail because the email address
> associated with it won’t match the one you provided to the “CONTRIBUTORS.csv” file.

1. Commit change directly to your branch
2. Navigate to "[Pull Requests](https://github.com/build-trust/ockam-website/pulls)" and you should see a prompt saying that your created branch had recent pushes, click on "Compare & pull request", enter the title and the description (if needed), click on "Create pull request" and wait for the approval
3. The develop branch is protected and will require a team member with permissions to merge it
4. The deployment from Development to Production is handled by the developers within an external team

Once your PR has been merged to develop, check to see how it looks in the `develop` version of the website through this link: https://ockam-website.vercel.app/mission#full-time

## But wait, there’s more…

Did you get stuck in this process, or could this document be improved? Since you now know how to commit changes to the website repo, please update this readme with a PR so that the next person to join The Team can do this exercise with ease.
