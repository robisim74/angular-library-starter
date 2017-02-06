# angular-library-starter
[![Build Status](https://travis-ci.org/robisim74/angular-library-starter.svg?branch=master)](https://travis-ci.org/robisim74/angular-library-starter)
>Build a library compatible with Angular, AoT compilation &amp; Tree shaking.

This starter allows you to create a library for **Angular 2+** apps written in TypeScript, ES6 or ES5. 
The project is based on the official _Angular_ modules.

Get the [Changelog](https://github.com/robisim74/angular-library-starter/blob/master/CHANGELOG.md).

## Contents
* [1 Customizing](#1)
* [2 Unit testing](#2)
* [3 Building](#3)
* [4 Publishing](#4)
* [5 Using the library](#5)
* [6 What it is important to know](#6)

## <a name="1"/>1 Customizing
1. Update [Node & npm](https://docs.npmjs.com/getting-started/installing-node).

2. Rename `angular-library-starter` everywhere to `my-library`.

3. Update in `package.json` file:
    - version: [Semantic Versioning](http://semver.org/)
    - description
    - urls
    - packages

    and run `npm install`.

4. Create your classes in `src` folder, and export public classes in `my-library.ts`.

5. You can create only one _module_ for the whole library: 
I suggest you create different _modules_ for different functions, 
so that the user can import only those he needs and optimize _Tree shaking_ of his app.

6. Update in `rollup.config.js` file `external` & `globals` libraries with those that actually you use.

7. Create unit tests in `tests` folder. 
_Karma_ is configured to use _webpack_ only for `*.ts` files: if you need to test different formats, you have to update it.

## <a name="2"/>2 Unit testing
```Shell
npm test 
```

## <a name="3"/>3 Building
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

## <a name="4"/>4 Publishing
Before publishing the first time:
- you can register your library on [Travis CI](https://travis-ci.org/): you have already configured `.travis.yml` file
- you must have a user on the npm registry: [Publishing npm packages](https://docs.npmjs.com/getting-started/publishing-npm-packages)

```Shell
npm run publish-lib
```

## <a name="5"/>5 Using the library
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

## <a name="6"/>6 What it is important to know
1. `package.json`

    * `"module": "index.js"` to use `import` & `export` with ES2015 module bundlers
    * `"peerDependencies"` the packages and their versions required by the library when it will be installed

2. `tsconfig-build.json` file used by _ngc_ compiler

    Compiler options:
    * `"declaration": true` to emit TypeScript declaration files
    * `"module": "es2015"` for compatibility with _AoT compilation_ & _Tree shaking_
    * `"target": "es5"` for browsers compatibility

    Angular Compiler Options:
    * `"genDir": "aot"` generates folder for compiled files
    * `"annotateForClosureCompiler": true` for compatibility with _Google Closure compiler_
    * `"strictMetadataEmit": true` without emitting metadata files, the library will not compatible with _AoT compilation_

3. `rollup.config.js` file used to build the bundle

    * `format: 'umd'` the _Universal Module Definition_ pattern is used by Angular for its bundles
    * `moduleName: 'ng.angular-library-starter'` defines the global namespace used by JavaScript apps
    * `external` & `globals` declare the external packages


##License
MIT
