const config = {
	"gatsby": {
		"pathPrefix": "/",
		"siteUrl": "https://ockam.io",
		"gaTrackingId": 'UA-142504862-1',
	},
  "general": {
	  "email": "hello@ockam.io",
	  "ockamLibraryRepo": "https://github.com/ockam-network/ockam",
    "slackChannel": "https://join.slack.com/t/ockam-community/shared_invite/enQtNDk5Nzk2NDA2NDcxLWQ0MjcyZWZjOWVlNGE5M2M3YjBkMjFkODZmODIwZWJmOTY3MThjNmU0ODc0ZDk4MjBjOGZmZDIzY2FhYTY4YTg",
    "twitter": "https://twitter.com/Ockam_io",
  },
  "api": {
	  "leverUrl": "https://api.lever.co/v0",
  },
	"header": {
    "title": "Ockam",
    "menu": [
      {
        "label": "Product",
        "type": "text",
        "to": "/product",
      },
      {
        "label": "Learn",
        "type": "text",
        "to": "/learn",
      },
      {
        "label": "Team",
        "type": "text",
        "to": "/team",
      },
      {
        "label": "Contact us",
        "type": "button",
        "to": "mailto:hello@ockam.io",
      },
    ],
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
		"title": "Ockam",
		"description": "Ockam is a collection of tools to help you establish secure connections and trustful exchange of information within connected systems. This documentation page describes the core concepts and the underlying technology behind Ockam.",
	},
};

module.exports = config;
