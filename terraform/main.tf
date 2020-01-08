provider "azurerm" {
  # Whilst version is optional, we /strongly recommend/ using it to pin the version of the Provider being used
  version = "=1.38.0"
}

terraform {
  backend "azurerm" {
    storage_account_name  = "terraform24506"
    container_name        = "tfstate"
    key                   = "terraform.tfstate"
  }
}

resource "azurerm_resource_group" "main" {
  name     = "ockam2${var.environment}"
  location = var.location

  tags = {
    environment = var.environment
    client = var.client_name
    project = var.project
  }
}
