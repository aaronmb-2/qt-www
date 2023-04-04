# 🌐 qt-www

QuantTrade is coming to the web!

## Table of contents

- [Requirements](#requirements)
- [Project overview](#project-overview)
- [Contributing](#contributing)
  - [License](#license)
  - [Other issues](#other-issues)
  - [Branch naming](#branch-naming)
- [Getting started](#getting-started)
  - [Clone the repository](#clone-the-repository)
  - [Install the dependencies](#install-the-dependencies)
  - [Configure the .env file](#configure-the-env-file)
  - [Start the development server](#start-the-development-server)
  - [Build for production](#build-for-production)
- [Project deepdive](#project-deepdive)
  - [Components](#components)
  - [Models](#models)
  - [Types](#types)
  - [Services](#services)
  - [SEO](#seo)

## Requirements

Running qt-www requires the installation of Node (we currently run 18.12.1 LTS).

- [node](https://nodejs.org/en/)

## Project overview

The project is a [Nuxt3](https://nuxt.com/) application.
Which is heavily based on [Vue3](https://vuejs.org/).

In order to make the development a smooth experience, we would like to keep styling conventions a life.
Therefore we've introduced the usage of a couple of rules from the [style-guide](https://vuejs.org/style-guide/).

It's dependent on multiple different backends which can be found in the other repos (which yet have to made. lol).

## Contributing

There are many different ways to contribute to the website development, just find the one that best fits with your skills and open an issue/pull request in the repository.

Examples of contributions we love include:

- **Code patches**
- **Bug reports**
- **Patch reviews**
- **Translations**
- **UI enhancements**

But, as always, feel free to make any type of contribution that suits your needs.

#### License

Every contribution accepted is licensed under [GPL 3.0](https://www.gnu.org/licenses/gpl-3.0.html) or any later version.
You must be careful to not include any code that can not be licensed under this license.

The idea behind this license, is that all the repositories created and maintained by QuantTrade are free for personal usage.
You can simply clone the repo, download the code, edit, read or learn as much as you want. But you are never allowed to simply copy
and paste the code and distribute it yourself.

#### Other issues

We're available almost 24/7 in the QuantTrade discord channel. [Join us!](https://discord.com/invite/ScBc9ee3mx)

#### Branch naming

Help us keep the repository history consistent 🙏!

If you're creating a new branch, and trying to implement something, we would love to use a convenient way of naming our branches.

- ft/name_of_the_new_feature
- bug/name_of_the_issue_or_bug
- hf/name_of_the_hot_fix

## Getting started

### Clone the repository

### Install the dependencies

```bash
$ npm install
```

### Configure the .env file

The .sample.env should be sufficient enough for running the development environment.

```bash
$ copy .sample.env .env
```

### Start the development server

```bash
$ npm run dev
```

### Build for production

```bash
$ npx nuxi generate
```

For detailed explanation on how things work, checkout the [Nuxt3 doc's](https://nuxt.com/).

## Project deepdive

As usual, each project has some conventions it would like to stick to, which also the case with QuantTrade (and qt-www).
Some conventions are more commonly known and used than others, and some involve styling or typing conventions, others are a way of living.

#### Components

The component folder structure is a great example of 'a way of living', it's a lifestyle.
During the creation of this project, we've decided that there are two main types of components:

- Components that should be used throughout the project
- Components that are bound to a single page

Thats where we've descided that each page in Nuxt, should also contain a 'components' folder. This is the exact folder where we
would like to introduce components that are solely used within that page.
Now, in addition to that, there are always smaller parts within components, a so-called component inside a component thing.
These components are often solely used within another component. To make an even further distinction between those types of components,
we've introduced a 'local' folder, next to the main component. This should be the place, where you can create smaller parts for bigger component, which are bound to, and only to that component.
Now this whole concept might sound strange, but once the project grows, this should give the development experience a great boost.

An example of this implementation can be found inside of the [TheHeader component](https://github.com/QuantTrade-io/qt-www/tree/dev/components/header).

#### Models

Something else we've introduced which could be seen as a way of living, are Models.
Models are introduced in order to represent objects that are used throughout the codebase, these are objects that also contain some sort data and/or logic.

For more information and some examples with explanation, [Models README.md](https://github.com/QuantTrade-io/qt-www/tree/dev/models).

#### Types

A more known way of defininig objects in Nuxt is via the Types folder. As stubborn as we are, we've also introduced this folder, but with a slightly different approach. Inside of the Types folder, we would like to create Interfaces that simply represent data (and not methods that are used in Models). The interfaces inside the Types folder are therefore mostly used for passing Props around or type hinting data types for constructors.

For more information and some examples with explanation, [Types README.md](https://github.com/QuantTrade-io/qt-www/tree/dev/types).

#### Services

Most Vue3 or Nuxt3 projects will use something called 'Stores', which most often implement Pinia.
The problem we had at QuantTrade, was the fact that these stores where function based instead of class based.
Which was a little bit against our convinience of using models.

That's where we've introduces [Mobx](https://mobx.js.org/README.html) for our 'state management'.
In additin to Mobx, we've also introduced [Mobx Persist Store](https://github.com/quarrant/mobx-persist-store) for data persistance in the browser.

For more information and some examples with explanation, [Services README.md](https://github.com/QuantTrade-io/qt-www/tree/dev/services).

#### SEO

In order to perform better on search results, there are plenty of 'methods' that can be implemented. In [the SEO optimization for Nuxt guide](https://www.qarbon.it/blog/seo-optimization-for-nuxt-js-the-complete-guide) there are a lot of suggestions made, some of them are implemented and explained down below.

##### Meta tags

On each webpage it is possible to add so called Meta-tags. This metadata is not shown on the page itself, but it used by browsers, search engines and other webservices. In the [official Nuxt documentation](https://nuxt.com/docs/migration/meta) are some ways mentioned to manage these Meta-tags, where we would like to use two of the options provided.

The first method is by providing the Meta-tags inside of the [nuxt.config.ts](https://github.com/QuantTrade-io/qt-www/blob/dev/), this makes sure that each page at least has these minimum Meta-tags added.

The second method is by using the [useHead composable function]([https://nuxt.com/docs/migration/meta](https://nuxt.com/docs/getting-started/seo-meta#composable-usehead). The way we've implemented this, is via a [global middleware](https://github.com/QuantTrade-io/qt-www/blob/dev/middleware/seo.global.ts). Via this middleware, we try to override some of the Meta-tags in order to make them page specific. If there are some really specific usecases for some pages, we could descide to override the useHead completely within the script setup.

##### Sitemap.xml

An XML sitemap is a file that lists a website’s essential pages, making sure Google can find and crawl them all. It also helps search engines understand your website structure. You want Google to crawl every important page of your website. But sometimes, pages end up without internal links pointing to them, making them hard to find. A sitemap can help speed up content discovery.

In order to create a certain sitemap, we've used [Nuxt 3 sitemap module](https://github.com/funkenstudio/sitemap-module-nuxt-3). By running the [build command](https://github.com/QuantTrade-io/qt-www#build-for-production), the `sitemap.xml` file is automatically added to the output, which in his turn will be added during the deployment.

##### Robots.txt

A robots.txt file tells search engine crawlers which URLs the crawler can access on your site. This is used mainly to avoid overloading your site with requests.

In order to create a certain robots.txt file, we've used [Nuxt 3 robots module](https://github.com/nuxt-community/robots-module). By running the [build command](https://github.com/QuantTrade-io/qt-www#build-for-production), the `robots.txt` file is automatically added to the output, which in his turn will be added during the deployment.

##### Json-ld

JSON-LD annotates elements on a page, structuring the data, which can then be used by search engines to disambiguate elements and establish facts surrounding entities, which is then associated with creating a more organized, better web overall. The JSON-LD elements are part of the Header tags in the HTML code, by inspecting the webpage you should be able to find a `<script type="application/ld+json">` tag.

In order to implement this on a Nuxt project, we've used [Nuxt jsonld](https://github.com/ymmooot/nuxt-jsonld). Since there is too much to tell about, how it works and what is does. It is probably much easier to link to [an implementation](https://github.com/QuantTrade-io/qt-www/blob/dev/app.vue) of it and some extra external links that explain how it works.
