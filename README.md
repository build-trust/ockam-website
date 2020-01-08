# Ockam documentation generator

Gatsby based generator for MD documents. Based on [gatsby-gitbook-starter](https://github.com/hasura/gatsby-gitbook-starter)

## 🚀 Quick start

1.  **Start developing.**

    Navigate into the site’s directory and start it up.

    `npm run start`

2.  **Open the source code and start editing!**

    The site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

## Generating and managing MD files

### Folder structure and urls
Under `/content` folder are stored all files related to generated documentation. Folder structure reflects to generated url in project, so i.e:
- `src/content/samples/first-category/index.md` -> `locahost:3000/samples/first-category`
- `src/content/samples/first-category/subpage-1.md` -> `locahost:3000/samples/first-category/subpage-1.md`

### Adding submodules as md files source
All submodules should go under `/submodules` folder. After you add new one,  you should create `symlink` under content folder, i.e:
```bash
symlink-dir submodules/ockam/document/concept src/content/documentation
```

You should create 'npm script' creating this symlink and add it under npm `init` script.
Since we don't want to make any modifications on submodules, and it's only used to generate documentation, please add also this linked folder to `.gitignore`  


## Depended repositories
All depended repositories are placed in in `dependencies_repos.csv` file. Each
line represent one repository.
```
ORGANIZATION;REPO_NAME;COMMIT;SRC_DIR;URL_PATH
```
Where
* `ORGANIZATION` is github organization URL
* `REPO_NAME` is the repository name inside organization
* `COMMIT` is specific commit in repository
* `SRC_DIR` is path in repository to source MD files
* `URL_PATH` is where you want to have final URL (`/` is for front site; `/example` will end up with `<website>/example`)

Example repo definition:
```
https://github.com/masterborn;ockam-sample-documentation;4f3789304ad3a4421fc772cd59d95b71af98d4d9;/;documentation
```

## Using MDX

Thanks to MDX you can use any react component inside md files. Do do that you have to:
- import component or data right after metadata
```markdown
...
metaTitle: "This is the title tag of this page"
metaDescription: "This is the meta description"
---
import SampleComponent from '../tmp/SampleComponent.js'
import json from '../tmp/json.js'
```

- use component like normal react element inside your md files

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


## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in the project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

5.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

6.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

7.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

9. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

10. **`README.md`**: A text file containing useful reference information about your project.

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/). Here are some places to start:

- **For most developers, it's recommended to start with the [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to the documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

## 💫 Deploy

1.  **Build the site for production.**

    Navigate into the site’s directory and run the build command.

    ```npm run build```

2.  **Serve the production build locally.**

    You can test the production build locally. Just run the following command to start a local HTML server.

    ```npm run serve```
