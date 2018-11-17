# angular-library-starter
[![Build Status](https://travis-ci.org/robisim74/angular-library-starter.svg?branch=master)](https://travis-ci.org/robisim74/angular-library-starter)
>Build an Angular library compatible with AoT compilation &amp; Tree shaking like an official package.

This starter allows you to create a library for **Angular v7** apps. 
The project is based on the official _Angular_ packages.

Get the [Changelog](https://github.com/robisim74/angular-library-starter/blob/master/CHANGELOG.md).

## Contents
* [1 Project structure](#1)
* [2 Customizing](#2)
* [3 Testing](#3)
* [4 Building](#4)
* [5 Publishing](#5)
* [6 Documentation](#6)
* [7 Using the library](#7)
* [8 What it is important to know](#8)
* [9 Inlining of templates and stylesheets](#9)
* [Built with this starter](#built-with-this-starter)
* [Previous versions](#previous-versions)

## <a name="1"></a>1 Project structure
- Library:
    - **src** folder for the classes
    - **public_api.ts** entry point for all public APIs of the package
    - **package.json** _npm_ options
    - **rollup.config.js** _Rollup_ configuration for building the _umd_ bundles
    - **rollup.es.config.js** _Rollup_ configuration for building the _es2015_ bundles
    - **tsconfig-build.json** _ngc_ compiler options for _AoT compilation_
    - **build.js** building process using _ShellJS_
- Testing:
    - **tests** folder for unit & integration tests
    - **karma.conf.js** _Karma_ configuration that uses _webpack_ to build the tests
    - **spec.bundle.js** defines the files used by _webpack_
- Extra:
    - **tslint.json**  _Angular TSLint Preset_ (_TypeScript_ linter rules with _Codelyzer_)
    - **travis.yml** _Travis CI_ configuration

## <a name="2"></a>2 Customizing
1. Update [Node & npm](https://docs.npmjs.com/getting-started/installing-node).

2. Rename `angular-library-starter` and `angularLibraryStarter` everywhere to `my-library` and `myLibrary`.

3. Customize the `license-banner.txt` file with your library license.

3. Update in `package.json` file:
    - version: [Semantic Versioning](http://semver.org/)
    - description
    - urls
    - packages (optional): make sure you use a version of _TypeScript_ compatible with _Angular Compiler_

    and run `npm install`.

4. Create your classes in `src` folder, and export public classes in `my-library.ts`.

5. You can create only one _module_ for the whole library: 
I suggest you create different _modules_ for different functions, 
so that the host app can only import the modules it uses, and optimize its _Tree shaking_.

6. Update in `rollup.config.js` file `globals` external dependencies with those that actually you use to build the _umd_ bundle.

7. Create unit & integration tests in `tests` folder, or unit tests next to the things they test in `src` folder, always using `.spec.ts` extension.

## <a name="3"></a>3 Testing
The following command runs unit & integration tests that are in the `tests` folder (you can change the folder in `spec.bundle.js` file): 
```Shell
npm test 
```
or in watch mode:
```Shell
npm run test:watch
```
It also reports coverage using _Istanbul_.

## <a name="4"></a>4 Building
The following command:
```Shell
npm run build
```
- starts _TSLint_ with _Codelyzer_ using _Angular TSLint Preset_
- starts _AoT compilation_ using _ngc_ compiler
- creates `dist` folder with all the files of distribution, following _Angular Package Format (APF)_:
```
└── dist
    ├── bundles
    |   ├── my-library.umd.js
    |   ├── my-library.umd.js.map
    |   ├── my-library.umd.min.js
    |   └── my-library.umd.min.js.map
    ├── esm5
    |   ├── **/*.js
    |   └── **/*.js.map
    ├── esm2015
    |   ├── **/*.js
    |   └── **/*.js.map
    ├── fesm5
    |   ├── my-library.js
    |   └── my-library.js.map
    ├── fesm2015
    |   ├── my-library.js
    |   └── my-library.js.map
    ├── src
    |   └── **/*.d.ts
    ├── my-library.d.ts
    ├── my-library.metadata.json
    ├── LICENSE
    ├── package.json
    ├── public_api.d.ts
    └── README
```
To test locally the npm package before publishing:
```Shell
npm run pack:lib
```
Then you can install it in an app to test it:
```Shell
npm install [path]my-library-{version}.tgz
```

## <a name="5"></a>5 Publishing
Before publishing the first time:
- you can register your library on [Travis CI](https://travis-ci.org/): you have already configured `.travis.yml` file
- you must have a user on the _npm_ registry: [Publishing npm packages](https://docs.npmjs.com/getting-started/publishing-npm-packages)

```Shell
npm run publish:lib
```

## <a name="6"></a>6 Documentation
To generate the documentation, this starter uses [compodoc](https://github.com/compodoc/compodoc):
```Shell
npm run compodoc
npm run compodoc:serve 
```

## <a name="7"></a>7 Using the library
### Installing
```Shell
npm install my-library --save 
```
### Loading
#### Angular-CLI
No need to set up anything, just import it in your code.
#### Rollup or webpack
No need to set up anything, just import it in your code.
#### Using SystemJS configuration
```JavaScript
System.config({
    map: {
        'my-library': 'node_modules/my-library/bundles/my-library.umd.js'
    }
});
```
#### Plain JavaScript
Include the `umd` bundle in your `index.html`:
```Html
<script src="node_modules/my-library/bundles/my-library.umd.js"></script>
```
and use global `ng.myLibrary` namespace.

### AoT compilation
The library is compatible with _AoT compilation_.

## <a name="8"></a>8 What it is important to know
1. `package.json`

    * `"main": "./bundles/angular-library-starter.umd.js"` legacy module format 
    * `"module": "./esm5/angular-library-starter.js"` flat _ES_ module, for using module bundlers such as _Rollup_ or _webpack_
    * `"es2015": "./esm2015/angular-library-starter.js"` _ES2015_ flat _ESM_ format
    * `"typings"` declaration files for _TypeScript_ compiler
    * `"peerDependencies"` the packages and their versions required by the library when it will be installed

2. `tsconfig.json` file used by _TypeScript_ compiler

    * Compiler options:
        * `"strict": true` enables _TypeScript_ `strict` master option

3. `tsconfig-build.json` file used by _ngc_ compiler

    * Compiler options:
        * `"declaration": true` to emit _TypeScript_ declaration files
        * `"module": "es2015"` & `"target": "es2015"` are used by _Rollup_ to create the _ES2015_ bundle

    * Angular Compiler Options:
        * `"enableResourceInlining": true` inlining of templates & styles
        * `"skipTemplateCodegen": true` skips generating _AoT_ files
        * `"annotateForClosureCompiler": true` for compatibility with _Google Closure compiler_
        * `"strictMetadataEmit": true` without emitting metadata files, the library will not be compatible with _AoT compilation_: it is intended to report syntax errors immediately rather than produce a _.metadata.json_ file with errors
        * `"flatModuleId": "@scope/package"` full package name has to include scope as well, otherwise AOT compilation will fail in the consumed application

4. `rollup.config.js` file used by _Rollup_

    * `format: 'umd'` the _Universal Module Definition_ pattern is used by _Angular_ for its bundles
    * `moduleName: 'ng.angularLibraryStarter'` defines the global namespace used by _JavaScript_ apps
    * `external` & `globals` declare the external packages

5. Server Side Rendering

    If you want the library will be compatible with Server Side Rendering:
    * `window`, `document`, `navigator` and other browser types do not exist on the server
    * don't manipulate the _nativeElement_ directly

## <a name="9"></a>9 Inlining of templates and stylesheets
Now _ngc_ compiler supports inlining of templates & styles. Moreover, this starter allows you to use `.scss` _sass_ files. If you need, you can use different pre-processors.

## <a name="built-with-this-starter"></a>Built with this starter
- [angular-l10n](https://github.com/robisim74/angular-l10n) *An Angular library to translate messages, dates and numbers*
- [angular-auth-oidc-client](https://github.com/damienbod/angular-auth-oidc-client) *An OpenID Connect Implicit Flow client for Angular*
- [ngx-infinite-scroll](https://github.com/orizens/ngx-infinite-scroll) *An infinite scroll directive for Angular compatible with AoT compilation and Tree shaking*
- [ngx-typeahead](https://github.com/orizens/ngx-typeahead) *A simple but yet powerful typeahead component for Angular*
- [ng2-youtube-player](https://github.com/orizens/ng2-youtube-player) *A Powerful Youtube Player Component for Angular*
- [ng2-completer](https://github.com/oferh/ng2-completer) *Angular autocomplete component*
- [ngx-store](https://github.com/zoomsphere/ngx-store) *Angular Storage library for managing `localStorage`, `sessionStorage` and cookies, allowing to watch storage changes. Includes easy-to-use decorators, services and API based on builder pattern.*
- [ngx-table-editor](https://github.com/maurei/ngx-table-editor) *A library for Angular that transforms HTML tables into dynamic editable components.*
- [ngx-ui-scroll](https://github.com/dhilt/ngx-ui-scroll) *An Angular `*ngFor`-like directive for infinite/virtual scrolling*

## <a name="previous-versions"></a>Previous versions
- **Angular v6**
    - [Branch](https://github.com/robisim74/angular-library-starter/tree/angular_v6)

- **Angular v5**
    - [Branch](https://github.com/robisim74/angular-library-starter/tree/angular_v5)

- **Angular v4**
    - [Branch](https://github.com/robisim74/angular-library-starter/tree/angular_v4)

- **Angular v2**
    - [Branch](https://github.com/robisim74/angular-library-starter/tree/angular_v2)

## License
MIT
