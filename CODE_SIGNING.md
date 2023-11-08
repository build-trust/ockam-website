# YubiKey and SSH

1. Install the [YubiKey](https://www.yubico.com/) Manager:

    `https://www.yubico.com/support/download/yubikey-manager/`

1. Set pin for FIDO2
    1. plug the YubiKey in
    1. in the YubiKey manager, navigate to 'Applications ~ FIDO2'
    1. click on 'Set PIN'
    1. fill the new and confirm fields
        > this is a pin, not a password (never sent off device), but with little character restriction:
        > "YubiKey devices do not constrain the PIN to a small number of digits; the FIDO2 PIN on a YubiKey can be any sequence of characters up to 256 bytes long."
1. Install libfido2 (taken from [this post](https://github.com/Yubico/libfido2/issues/464#issuecomment-1781855050))

    ```
    brew tap theseal/ssh-askpass
    brew install michaelroosz/ssh/libsk-libfido2-install
    ```

1. Create ssh key for signing
    ```
    SSH_SK_PROVIDER=/usr/local/lib/libsk-libfido2.dylib ssh-keygen -t ed25519-sk -O resident -C \<YOUR_EMAIL>
    ```

1. Setup local git to use signing key ([steps taken from github](https://docs.github.com/en/authentication/managing-commit-signature-verification/telling-git-about-your-signing-key#telling-git-about-your-ssh-key))
    1. open terminal
    1. set signing format to ssh
        ```
        git config --global gpg.format ssh
        ```
    1. set signing key to local file created by ssh-keygen
        ```
        git config --global user.signingkey /PATH/TO/.SSH/KEY.PUB
        ```
    1. sign by default
        ```
        git config --global commit.gpgsign true
        git config --global tag.gpgsign true
        ```
1. Add signing key to Github
    1. sign in to [Github](https://github.com)
    1. navigate to 'Settings ~ SSH and GPG keys'
    1. click on 'New SSH key'
    1. fill out form
        - title is just for you to identify the entry
        - dropdown should be set to signing key
        - key field is the local pub file generated after creating a key on the YubiKey

&nbsp;

# YubiKey and GPG

1. Please follow this
    [guide](https://docs.github.com/en/authentication/managing-commit-signature-verification/generating-a-new-gpg-key)
    to create a new GPG key & add it's public key block to your github account.
    - Note: On Linux the `gpg` command is probably already on your computer, so you
        might not need to install the GPG command line tools. Also on Linux the files
        are saved to the `~/.gnupg/` folder.
    - Note: when following the instructions above make sure to use the correct email
        address that matches one in your github account (you will use this email to sign
        the commits).
1. Once you have created your GPG key, Ockam requires that all commits be signed w/
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