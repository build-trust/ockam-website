resource "azurerm_cdn_profile" "ockamio" {
  count               = var.cdn_count
  name                = "ockamio"
  location            = var.location
  resource_group_name = azurerm_resource_group.main.name
  sku                 = "Standard_Microsoft"

  tags = {
    environment = var.environment
    client = var.client_name
    project = var.project
  }

  depends_on = [data.azurerm_storage_account.ockamio]
}

resource "azurerm_cdn_endpoint" "static" {
  count               = length(azurerm_cdn_profile.ockamio)
  name                = var.cdn_endpoint_name
  profile_name        = azurerm_cdn_profile.ockamio[count.index].name
  location            = azurerm_resource_group.main.location
  resource_group_name = azurerm_resource_group.main.name
  origin_host_header = data.azurerm_storage_account.ockamio.primary_web_host

  origin {
    name      = "ockamio-website-origin"
    host_name = data.azurerm_storage_account.ockamio.primary_web_host
  }

  depends_on = [azurerm_cdn_profile.ockamio]
}

# Add custom domain via module?
# az cdn custom-domain create \
#   --resource-group ockam2production \
#   --profile-name ockamio \
#   --endpoint-name ockamio-website \
#   --hostname azure.allunel.pl \
#   --name azure-allunel

# enable ssl certificate on custom domain
# ..via module?
# az cdn custom-domain enable-https \
#   --resource-group ockam2production \
#   --profile-name ockamio \
#   --endpoint-name ockamio-website \
#   --name azure-allunel
