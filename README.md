# 🌐 qt-www

QuantTrade is coming to the web!

## Table of contents

- [Requirements](#requirements)
- [Project overview](#project-overview)
- [Contributing](#contributing)
    + [License](#license)
    + [Other issues](#other-issues)
    + [Branch naming](#branch-naming)
- [Getting started](#getting-started)
    + [Clone the repository](#clone-the-repository)
    + [Install the dependencies](#install-the-dependencies)
    + [Configure the .env file](#configure-the-env-file)
- [Project deepdive](#project-deepdive)
    + [Components](#components)
    + [Models](#models)
    + [Types](#types)
    + [Services](#services)

## Requirements
Running qt-www requires the installation of Node (we currently run 18.12.1 LTS).

* [node](https://nodejs.org/en/)

## Project overview

The project is a [Nuxt3](https://nuxt.com/) application.
Which is heavily based on [Vue3](https://vuejs.org/).

In order to make the development a smooth experience, we would like to keep styling conventions a life.
Therefore we've introduced the usage of a couple of rules from the [style-guide] (https://vuejs.org/style-guide/).
 
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

Every contribution accepted is licensed under [MIT](https://opensource.org/licenses/MIT) or any later version.
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

``` bash
$ npm install
```

### Configure the .env file
The .sample.env should be sufficient enough for running the development environment.

``` bash
$ copy .sample.env .env
```

### Start the development server


``` bash
$ npm run dev
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

