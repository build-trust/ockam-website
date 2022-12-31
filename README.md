# OckamWebsite

## Table of Contents
- [Welcome](./WELCOME.md)
- [About The Project](#about-the-project)
    * [Built With](#built-with)
    * [Requirements to run projects](#requirements-to-run-projects)
    * [Installation](#installation)
    * [Install git hooks](#install-git-hooks)
    * [Running the project](#running-the-project)
- [Project folder structure and purpose](#project-folder-structure-and-purpose)
- [Generating and managing MD files](#generating-and-managing-md-files)
    * [Folder structure and urls for BLOG](#folder-structure-and-urls-for-blog)
    * [Article order in sidebar menu](#article-order-in-sidebar-menu)
    * [Assets for markdown files](#assets-for-markdown-files)
    * [Markdown files metadata fields](#markdown-files-metadata-fields)
    * [Adding blog posts](#adding-blog-posts)
- [Redirects](#redirects)

## About The Project

This repository contains all the content and code for [Ockam.io](https://www.ockam.io/).

### Built With

- [React](https://reactjs.org/)
- [Next.js](https://nextjs.org)
- [TypeScript](https://www.typescriptlang.org/)
- [ChakraUI](https://chakra-ui.com/)


### Requirements to run projects

- [Node.js 12.22.0](https://nodejs.org) or later

### Installation
Install all the dependencies - `npm install`

### Install git hooks
Run `npm run prepare:hooks` command.

### Running the project
Run `npm run start:dev` command.



## Project folder structure and purpose

This repo is based on Nextjs framework, so many of folder are reflecting framework requirements. Here is the quick look of the main folders:
- `public` - Next.js uses this directory to statically serve files like the robots.txt or the favicon.ico and other assets. Since this page is using markdown, it's also use to store all blog post assets
- `src/api` - API related clients and helper functions
- `src/assets` - assets (like icons, images) for regular pages
- `src/components` - sharable components across the website.
- `src/components/mdx` - components used while converting markdowns elements to HTML. You can find mapping in `index.tsx`
- `src/consts` - constants variables shared across the app
- `src/content` - this is where markdown files lives
- `src/contextProviders` - React contexts and it's providers
- `src/hooks` - sharable React hooks
- `src/layouts` - React components responsible for page layouting
- `src/pages` - Nextjs pages that reflects public pages url
- `src/theme` - theme and styles related stuff. Also extension for ChakraUi which is the default user interface library
- `src/typings` - Typescript typings
- `src/utils` - Sharable pure function used across the app
- `src/views` - React components which are used as "blocks" for the pages.



## Generating and managing MD files

### Folder structure and urls for BLOG

All files related to generating html from md files are stored under `src/content/blog` folder.

Inside the md file, there is `category' meta field, that reflect to sidebar category menu.

### Article order in sidebar menu

Article in sidebar menu are ordered by `date` metadata field inside markdown file (descending)

### Assets for markdown files

- All assets file (like photos) should be stored inside `public/blog`

### Markdown files metadata fields

Below are listed described available metadata fields under a certain path of `src/content/blog` folder:

- **title** Title of post [REQUIRED]
- **category** Reflect option menu in which article exist
- **date** Post date, used for sorting. Format: YYYY-MM-DD [REQUIRED]
- **description** Description of post show in post list and homepage [REQUIRED]
- **metaTitle** Author avatar, relative path to md file
- **author** Author of post [REQUIRED]
- **authorAvatar** Author avatar of post
- **isFeatured** If should be visible under feature category
- **featuredOrder** order in feature page list

### Adding blog posts

To add a blog post:
- fork our repo [https://github.com/build-trust/ockam-website](https://github.com/build-trust/ockam-website) and clone you fork locally
- all you have to do is just add markdown file (*.md) inside `src/content/blog`, with proper metadata fields
- submit a PR from your local fork to origin `develop` branch

## Redirects

For SEO purpose it's highly recommended to add redirect for pages that no longer exist but was indexed by google.
Go to `next.config.js` file and add proper redirect there. For more info check out the documentation [https://nextjs.org/docs/api-reference/next.config.js/redirects](https://nextjs.org/docs/api-reference/next.config.js/redirects)

## Styleguide

Styleguide page is divided into two general parts:
1. The top sections contains all the static style guide elements ( they are not supposed to be edited frequently ). It's more of the official part of this page.
2. Miscellaneous section, where you can put all the other images and guidelines using markdown.

### Top static section
This one is build using regular React components and nextJS approach. Content of the section was isolated to separate file for easier modifications. 
You can find content definitions here: `src/consts/styleGuide/*`.
All assets for this section (images, fonts, graphics, etc), should live under `public` folder. One exception for that are icons, that are dynamically generated from `/src/assets/icons` folder.

### Miscellaneous section
Miscellaneous section lives here: `src/content/style-guide/miscellaneous.md`. This one is edited using markdown file, extended to use JSX in markdown content (MDX). While playing with this section, all your assets linked inside this file, have to live under `/public` folder.
You can use one special component prepared for this section purpose, which is `StyleGuideResourceItem`. Using it under image, will display captions under with nice visual manner. Here is a quick example:
```jsx
<StyleGuideResourceItem
        marginBottom={10}
        title="Sample title"
        description="Sample description"
/>
```



