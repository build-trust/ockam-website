#!/bin/bash

# Use *only for the first time* when you need to create storage for terraform state
# Based on https://docs.microsoft.com/en-us/azure/terraform/terraform-backend
RESOURCE_GROUP_NAME=ockam2website0terraform
STORAGE_ACCOUNT_NAME=terraform$RANDOM
CONTAINER_NAME=tfstate
KEY=terraform.tfstate
LOCATION=westeurope


### START
read -p "Are you sure you want to create _Storage account_ '$STORAGE_ACCOUNT_NAME'? [y/N]: " -n 1 -r
echo    # (optional) move to a new line
if [[ $REPLY =~ ^[Yy]$ ]]
then
  echo "Creating $STORAGE_ACCOUNT_NAME storage account.."
else
  echo 'Canceling..'
  exit 123
fi

# Show what you are doing and exit if any error
set -ex

# Create resource group
az group create --name $RESOURCE_GROUP_NAME --location $LOCATION

# Create storage account
az storage account create \
  --resource-group $RESOURCE_GROUP_NAME \
  --name $STORAGE_ACCOUNT_NAME \
  --sku Standard_LRS \
  --encryption-services blob \
  --kind StorageV2 \
  --tags client=ockam project=website type=terraform-state;


# Get storage account key
ACCOUNT_KEY=$(az storage account keys list --resource-group $RESOURCE_GROUP_NAME --account-name $STORAGE_ACCOUNT_NAME --query [0].value -o tsv)

# Create blob container
az storage container create --name $CONTAINER_NAME --account-name $STORAGE_ACCOUNT_NAME --account-key $ACCOUNT_KEY

set +x

echo; echo " > Terraform storage account successfully created: *$STORAGE_ACCOUNT_NAME*"; echo;

echo " === COPY&PASTE TO main.tf ==="
echo "storage_account_name  = \"$STORAGE_ACCOUNT_NAME\""
echo "container_name        = \"$CONTAINER_NAME\""
echo "key                   = \"$KEY\""
echo " ============================="
echo "export this in your terminal as
> export ARM_ACCESS_KEY=$ACCOUNT_KEY"
