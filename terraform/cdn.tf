resource "azurerm_cdn_profile" "ockam_verizon_premium" {
  count               = var.cdn_count
  name                = "ockam-verizon-premium"
  location            = var.location
  resource_group_name = azurerm_resource_group.main.name
  sku                 = "Premium_Verizon"

  tags = {
    environment = terraform.workspace
    client = var.client_name
    project = var.project
  }

  depends_on = [data.azurerm_storage_account.ockamio]
}

resource "azurerm_cdn_endpoint" "ockamio_website" {
  count               = length(azurerm_cdn_profile.ockam_verizon_premium)
  name                = var.cdn_cache_endpoint
  profile_name        = azurerm_cdn_profile.ockam_verizon_premium[count.index].name
  location            = azurerm_resource_group.main.location
  resource_group_name = azurerm_resource_group.main.name
  origin_host_header =  azurerm_storage_account.ockamio.primary_web_host
  querystring_caching_behaviour = "NotSet"

  origin {
    name      = "ockamio-website-origin"
    host_name = azurerm_storage_account.ockamio.primary_web_host
  }

  depends_on = [azurerm_cdn_profile.ockam_verizon_premium]
}
