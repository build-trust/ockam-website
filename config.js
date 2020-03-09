const config = {
	"gatsby": {
		"pathPrefix": "/",
		"gaTrackingId": 'UA-142504862-1',
    "siteUrl": process.env.GATSBY_ROOT_URL || "http://localhost:3000",
	},
  "env": {
	  "STAGE": process.env.GATSBY_STAGE || 'LOCAL',
    "RECAPTCHA_SITEKEY": process.env.GATSBY_GOOGLE_RECAPTCHA_SITEKEY || "6LfIDtwUAAAAAIt2vgTj7LTIJ9tqwlNKV4fZecbK",
    "ROOT_URL": process.env.GATSBY_ROOT_URL || "http://localhost:3000",
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
		"description": "Ockam is a Tool Company. Ockam's open source developer tools make it simple to send trustful end-to-end encrypted messages between connected devices and cloud services.",
	},
};

module.exports = config;
