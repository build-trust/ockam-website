const config = {
	"gatsby": {
		"pathPrefix": "/",
		"siteUrl": "https://www.ockam.io",
		"gaTrackingId": 'UA-142504862-1',
	},
  "env": {
	  "STAGE": process.env.GATSBY_STAGE || 'LOCAL',
    "GOOGLE_RECAPTCHA_SITEKEY": process.env.GATSBY_GOOGLE_RECAPTCHA_SITEKEY || "6LfIDtwUAAAAAIt2vgTj7LTIJ9tqwlNKV4fZecbK",
  },
  "general": {
	  "email": "hello@ockam.io",
	  "ockamLibraryRepo": "https://github.com/ockam-network/ockam",
    "ockamWebsiteRepo": "https://github.com/ockam-network/website",
    "markdownPath": "src/content",
    "githubProductionPath": "tree/master",
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
        "context": "showContactModal",
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
