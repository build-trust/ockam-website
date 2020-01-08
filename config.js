const config = {
	"gatsby": {
		"pathPrefix": "/",
		"siteUrl": "https://ockam.io/documentation",
		"gaTrackingId": null,
	},
	"header": {
    "title": "Ockam documentation",
    "menu": [
      {
        "label": "Product",
        "type": "text",
        "to": "/product",
      },
      {
        "label": "Blog",
        "type": "text",
        "to": "/blog",
      },
      {
        "label": "Documentation",
        "type": "text",
        "to": "/samples",
      },
      {
        "label": "Team",
        "type": "text",
        "to": "/team",
      },
      {
        "label": "Contact us",
        "type": "button",
        "to": "/contact",
      },
    ],
    "helpUrl": "",
		"tweetText": "",
		"search": {
			"enabled": false,
			"indexName": "",
			"algoliaAppId": process.env.GATSBY_ALGOLIA_APP_ID,
			"algoliaSearchKey": process.env.GATSBY_ALGOLIA_SEARCH_KEY,
			"algoliaAdminKey": process.env.ALGOLIA_ADMIN_KEY,
		},
	},
	"sidebar": {
		"isDefaultExpand": true,
	},
	"siteMetadata": {
		"title": "Ockam | Documentation",
		"description": "Ockam is a collection of tools to help you establish secure connections and trustful exchange of information within connected systems. This documentation page describes the core concepts and the underlying technology behind Ockam.",
		"ogImage": null,
		"docsLocation": "https://github.com/masterborn/ockam-doc-generator/tree/master/src/content",
		"favicon": "https://assets.website-files.com/5d020abd4e78f3888a3da9cd/5d0aaef2c48189e215bbf5c6_Icon_32x32_FullColor.png",
	},
};

module.exports = config;
