# Landing Page (Static) Boilerplate
Ready-to-use environment for a simple one-page site.

## Stack
Build based on PUG, SCSS, JS with implemented Eslint, Stylelint, Puglint and Prettier.

## Installation
```npm ci```

## Usage

### Write HTML
In file index.pug that later will be compiled to the plain html. 

Firstly you can define variables on the top of the file and then write all other markup.

### Write CSS
- In file _variables.scss you can define basic variables for the whole site, like primary color, text size and etc.
- In file styles.scss you can write all other styles for your site. Sections marked by [anchors](https://marketplace.visualstudio.com/items?itemName=ExodiusStudios.comment-anchors)

### Run commands

All commands are in Makefile: you can use linter, build or start your project with a short commands

## Branch Naming Convention

- **main** for the current version of site
- **develop** is for developing new features, test and refactor them

## Commit Naming Convention

A commit message should start with a category of change. You can pretty much use the following 4 categories for everything: feat, fix, refactor, and chore.

- **feat** is for adding a new feature
- **fix** is for fixing a bug
- **refactor** is for changing code for peformance or convenience purpose (e.g. readibility)
- **chore** is for everything else (writing documentation, formatting, adding tests, cleaning useless code etc.)
- e.g. ```git commit -m 'feat: add new button component; add new button components to templates'```
