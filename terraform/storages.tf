# resources for ockam static site
resource "azurerm_storage_account" "ockamio" {
  name                     = "${var.storage_account_name}2${var.environment}"
  resource_group_name      = azurerm_resource_group.main.name
  location                 = azurerm_resource_group.main.location
  account_tier             = "Standard"
  account_replication_type = "LRS"
  account_kind             = "StorageV2"

  tags = {
    environment = var.environment
    client = var.client_name
    project = var.project
  }
}

module "staticweb" {
  source               = "StefanSchoof/static-website/azurerm"
  storage_account_name = azurerm_storage_account.ockamio.name
}

data "azurerm_storage_account" "ockamio" {
  name                = azurerm_storage_account.ockamio.name
  resource_group_name = azurerm_resource_group.main.name

  depends_on = [module.staticweb]
}

output "static-web-url" {
  value = data.azurerm_storage_account.ockamio.primary_web_endpoint
}

# END resources for static /documentation
