# TaskRunner
Use the task runner to perform concatenation and minification on css files. This can be extended to perform other tasks such as process SCSS, optimize images, copy vendor files, concat & minify JS and much more.

***

## Requirements
Before running this project there are a few requirements. First you need NodeJS in order to run javascript on the console, you can go to the [NodeJS](http://nodejs.org) site and follow the installation process. After you get the `node` command on the console you will have the node package manager `npm` as well. 

Next, you need to install Gulp globally with the following command.

```
npm install -g gulp
```
Gulp will run all the compilations, watchers and other tasks. Learn more about Gulp [here.](https://gulpjs.com/)

***

## Install
To begin you need to install all the dependancies required for gulp to perform the different tasks. Start by running the following command:

```
npm install
```

***

## How to use
The taskrunner can now be used during active development or prior to pushing to production. It's as simple as running `gulp` in the terminal, which will compile the files immediately. For active development running `gulp watch` will actively watch for changes and compile the css after each save. Alternatively, the following commands are available:

* `gulp default` : Compile and watch for changes
* `gulp watch` : Watch for any changes on the each section
* `gulp scss` : Compile the SCSS files found in `./assets/scss/` **(not used)**
* `gulp styles` : Compile the CSS files found in `./assets/css/`
* `gulp scripts` : Compile the JS files found in `./assets/js/`
* `gulp vendors` : Copy the vendor JS files found in `./assets/js/vendors/`
* `gulp vendors-process` : Compile the vendor JS files found in `./assets/js/vendors/` **(not used)**
* ~~`gulp images` : Copy and Optimize images~~
