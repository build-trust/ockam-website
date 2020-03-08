# Ockam.io Website

This repository contains all of the content, code and build tools for [Ockam.io](https://www.ockam.io/).

Ockam website is built with a static site generator that is based on [gatsby-gitbook-starter](https://github.com/hasura/gatsby-gitbook-starter). Gatsby builds websites powered by the [JAMStack] (https://www.gatsbyjs.org/docs/glossary/jamstack/), a modern architecture that uses JavaScript, APIs and Markdown without requiring the use of a database or server-side programming language.

[Ockam.io](https://www.ockam.io/) utilizes GitHub actions, Azure Pipelines and runs on Azure CDN.

## 🚀 Quick start

1.  **Start developing.**

    Navigate into the site’s directory and start it up.

    `npm run start`

2.  **Open the source code and start editing!**

    The site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

## Generating and managing MD files

### Folder structure and urls
Under `src/content` folder are stored all files related to generating html from md files. There is staticly one folder define in repository - `blog`, which stores files related to blog posts.

However, the CI pipeline process mount under this directory, others repository defined in `dependencies_repos.csv`.
So according to this  file specification ( please check  [Depended repositories](#depended-repositories) ) for entry like:
`https://github.com/masterborn;ockam-sample-documentation;4f3789304ad3a4421fc772cd59d95b71af98d4d9;/;documentation` 'documentation' folder would be deployed under `src/content/`.

Folder structure reflects to generated url in project, so i.e:
- `src/content/documentation/general/index.md` -> `example.com/documentation/general`
- `src/content/documentation/general/subpage.md` -> `example.com/documentation/general/subpage`

### Documentation pages order in sidebar menu

To order your documentation page in sidebar menu, just add `order` metadata field in metadata .md file. ie:
```markdown
title: "Subpage 1"
metaTitle: "This is the title tag of this page"
metaDescription: "This is the meta description"
order: 2
```

### Generals markdown managing approach

* All assets should be stored inside under `assets` folder, ie. `src/content/documentation/assets`.

## Using MDX

Thanks to MDX you can use any react component inside md files. Do do that you have to:
- import component or data right after metadata
```markdown
...
metaTitle: "This is the title tag of this page"
metaDescription: "This is the meta description"
---
import SampleComponent from '../sample/SampleComponent.js'
import json from '../sample/json.js'
```
Component path should be relative to current file.

Next, just use component like normal react element inside your md files:
```markdown
...
### Some markdown header
<SampleComponent json={json} title="custom string" />
```

##### WARNING
There could be some issue while creating new/removing components/data which are imported to `.md` files. If in development mode throw some error just stop server, clean gatsby cache and run it again:
```bash
npm run clean
npm run start
```


## Depended repositories
All depended repositories are placed in in `dependencies_repos.csv` file. Each
line represent one repository.
One line include following parts:
```
ORGANIZATION;REPO_NAME;COMMIT;SRC_DIR;URL_PATH
```

Where
* `ORGANIZATION` is github organization name
* `REPO_NAME` is the repository name inside organization
* `COMMIT` is specific commit id in repository
* `SRC_DIR` is path in repository where MD files are stored. Use `/` to use root repository folder
* `URL_PATH` is where you want to have final URL (`/` is for front site; `/example` will end up with `<website>/example`)


Example repo definition:
```
masterborn;ockam-sample-documentation;4f3789304ad3a4421fc772cd59d95b71af98d4d9;/;documentation
```



## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in the project.

    .
    ├── azure-pipelines.yml
    ├── cli/
    ├── config.js
    ├── dependencies_repos.csv
    ├── Dockerfile
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── package.json
    ├── package-lock.json
    ├── README.md
    ├── scripts/
    ├── src/
    └── terraform/

1. **`azure-pipelines.yml`**: Definition of pipeline, used by Azure DevOps. Check 'depended repositories' for [details](#depended-repositories).
1. **`cli/`**: Internall CLI, more information [here](cli/README.md).
1. **`dependencies_repos.csv`**: List of depended repositories, more can be read [here](#depended-repositories).
1. **`Dockerfile`**: Docker for local development.
1. **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).
1. **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.
1. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**
1. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.
1. **`README.md`**: A text file containing useful reference information about your project.
1. **`scripts/`**: All additional scripts. At the moment there is only `get-depended-repos.sh` responsible for pulling depended repos needed by gatsby during build process.
1. **`src/`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.
1. **`terraform`**: Whole website infrastructure related stuff are served by [Terraform](https://www.terraform.io/).

## 💫 Deploy

1. **Build the site for production.**

    Navigate into the site’s directory and run the build command.

    ```npm run build```
1. **Serve the production build locally.**

    You can test the production build locally. Just run the following command to start a local HTML server.

    ```npm run serve```
