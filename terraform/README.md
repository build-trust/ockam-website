## Instructions

#### What does it do?
It will create (recreate/correct) Ockam website infrastructure; This includes
storage account with static website, CDN with custom endpoint and attached
domain. After setting up your environment (check below) run `terraform plan`
then `terraform apply` if you are happy with `plan` output.

#### Run for the first time
* Make sure you have [`az` cli tool](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli?view=azure-cli-latest)  and [`terraform`](https://learn.hashicorp.com/terraform/getting-started/install.html).
* Make sure storage for terraform state exists. Check storage starting with a
name `terraform` followed by 5 digits, and container name `tstate`.
* From within the same storage grab Access key (`key1`) and set your key as
follow: `export ARM_ACCESS_KEY=<key1>`.
* Login with `az login`
* Run `terraform init` from within `/terraform` directory.
* Now everything should be ready to use.
