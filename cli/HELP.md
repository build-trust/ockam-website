```
Ockam helper commands
  ockam.example.delete-blob
    Example how to batch delete storage account blob

  ockam.example.upload-blob
    Example how to batch upload to storage account blob

  ockam.help
    Prints this help page

  ockam.generate-help-markdown
    Run this each time you want to commit new version of help. This boils down
    to 2 cases:
    1. when you add new command with new description
    2. when you update or add description to existing command
    usage: run `ockam.generate-help-markdown` then commit changes

  ockam.pipeline-var
    Set pipeline variable
    usage: ockam.pipeline-var <pipieline-name> <variable-command>

  ockam.pipeline-run
    Run pipeline
    usage: ockam.pipeline-run <pipieline-name> <git-branch>

  ockam.set.storage-key
    Set prefered website account storage access key
    usage: ockam.set.storage-key <account-name>

  ockam.unset.envs
    If accidentally we left some of those setting then during creation of storage
    by terraform static-web module (using command az storage blob
    service-properties update) we will fail

  ockam.check-toolbelt
    Check do we have all necessary CLI tools

  ockam.init-project
    Initialize project, usually you want to do it when you cloned the repo for
    the first time.

  ockam.show.terraform-account-name
    Prints terraform account-name

  ockam.set.state-key
    Set local ARM_ACCESS_KEY env variable so remote state can be accessed by
    Terraform

  ockam.terraform
    Wrapper for `terraform` command

  ockam.terraform.with-vars
    Wrapper for `terraform` command to run with appropriate environment
    (.tfvars) based on desirable workspace

    Example command:
    $ ockam.terraform.with-vars staging apply -auto-approve

    Executed command:
    $ cd to/terraform/dir
    $ terraform workspace select staging
    $ terraform staging apply -var-file=tfvars/staging.tfvars -auto-approve

```
