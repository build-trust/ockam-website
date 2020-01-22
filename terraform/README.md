## Instructions

#### What does it do?
It will create (recreate/correct) Ockam website infrastructure; This
includes storage account with static website, CDN with custom
endpoint. After setting up your environment (check below) run
`terraform plan` then `terraform apply` if you are happy with `plan`
output.

#### Setup terraform
* Make sure you have [`az` cli tool](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli?view=azure-cli-latest)  and [`terraform`](https://learn.hashicorp.com/terraform/getting-started/install.html).
* Make sure storage for terraform state exists. Check storage starting
with a name `terraform2website` followed by 5 digits, and container name
 `tfstate`. If it is for the first time and storage does not exists
 then run `init-tfstate.sh`.
* Copy `main.tf.example` to `main.tf` and paste correct values from
the output of `init-tfstate.sh`.
* From within the same storage [grab Access key](https://docs.microsoft.com/en-us/azure/storage/common/storage-account-keys-manage#view-access-keys-and-connection-string)
 (`key1`) and set your key as follow: `export ARM_ACCESS_KEY=<key1>`.
* Login with `az login`
* Run `terraform init` from within `/terraform` directory.
* Everything should be ready to use.
