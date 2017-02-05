# angular-library-starter
[![Build Status](https://travis-ci.org/robisim74/angular-library-starter.svg?branch=master)](https://travis-ci.org/robisim74/angular-library-starter)
>Build a library compatible with Angular, AoT compilation &amp; Tree shaking.

This starter allows you to create a library for **Angular 2+** apps written in TypeScript, ES6 or ES5. 
The project is based on the official _Angular_ modules.

Get the [Changelog](https://github.com/robisim74/angular-library-starter/blob/master/CHANGELOG.md).

## Customizing

0. Update [Node & npm](https://docs.npmjs.com/getting-started/installing-node).

1. Rename `angular-library-starter` everywhere to `my-library`.

2. Update in `package.json` file:
    - version: [Semantic Versioning](http://semver.org/)
    - description
    - urls
    - packages

    and run `npm install`.

3. Create your classes in `src` folder, and export public classes in `my-library.ts`.

4. You can create only one _module_ for the whole library: 
I suggest you create different _modules_ for different functions, so that the user can import only those he needs and optimize his _Tree shaking_.

5. Update in `rollup.config.js` file `external` & `global` libraries with those that actually you use.

6. Create unit tests in `tests` folder. 
_Karma_ is configured to use _webpack_ only for `*.ts` files: if you need to test different formats, you have to update it.

## Unit testing
```Shell
npm test 
```

## Building
The following command:
```Shell
npm run build
```
- starts _TSLint_ with _Codelyzer_
- starts _AoT compilation_ using _ngc_ compiler
- creates `umd` bundle using _Rollup_
- minimizes `umd` bundle using _UglifyJS_
- creates `dist` folder with all the files of distribution

To test locally the npm package:
```Shell
npm run pack-lib
```
Then you can install it in an app to test it:
```Shell
npm install [path]my-library-[version].tgz
```

## Publishing
Before publishing the first time:
- you can register your library on [Travis CI](https://travis-ci.org/): you have already configured `.travis.yml` file
- you must have a user on the npm registry: [Publishing npm packages](https://docs.npmjs.com/getting-started/publishing-npm-packages)

```Shell
npm run publish-lib
```

## Using the library
### Installing
```Shell
npm install my-library --save 
```
### Loading
#### Using SystemJS configuration
```JavaScript
System.config({
    map: {
        'my-library': 'node_modules/my-library/bundles/my-library.umd.js'
    }
});
```
#### Angular-CLI
No need to set up anything, just import it in your code.
#### Rollup or webpack
No need to set up anything, just import it in your code.
#### AoT compilation
The library is compatible with AoT compilation, just import it in your code.
#### Plain JavaScript
Include the `umd` bundle in your `index.html`:
```Html
<script src="node_modules/my-library/bundles/my-library.umd.js"></script>
```
and use global `ng.my-library` namespace.

##License
MIT
