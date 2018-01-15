## Angular library starter Changelog

<a name="Jan 15, 2018"></a>
### Jan 15, 2018
* Add instructions for inlining of templates and stylesheets

<a name="Nov 2, 2017"></a>
### Nov 2, 2017
* Upgrade to Angular v5 building process
* Upgrade to rollup ^0.48.0 and UglifyJS 3
* Add license banner to the bundles

In Angular v5, the building process creates the _es2015_ bundles in _esm2015_ folder,
and the _es5_ bundles in _esm5_ folder. If you want to upgrade to the new building process you have to:
- use new _build.js_ (changing the _PACKAGE_ name), 
- use new _rollup.config.js_ (updating _globals_ and _name_), _rollup.es.config.js_ and _tsconfig-build.js_ files
- add the _license-banner.txt_ file (and customize it)
- update in _package.json_:
    - _module_ and _es2015_ properties
    - packages: compare all the _devDependencies_
    - add _tslib_ (TypeScript helpers) to dependencies
- remove _scripts/map-sources.js_ file

For a full comparison, see the following commit:
- https://github.com/robisim74/angular-library-starter/commit/2acd8a632716cfd188259488710aef015336c927

If you are still using _index.ts_, see also the following commit to rename it:
- https://github.com/robisim74/angular-library-starter/commit/583f79b1885d04cdeee897b2a7a2bc16a7564ea9

<a name="Oct 14, 2017"></a>
### Oct 14, 2017
* Add Istanbul to report coverage

<a name="Sep 12, 2017"></a>
### Sep 12, 2017
* Rename _index.ts_ to package name

<a name="Jun 21, 2017"></a>
### Jun 21, 2017
* Update _rollup.config_ and _tsconfig_ files
* Update building process:
    - TSLint
    - Stop building for errors on Rollup conversion
    - Use local import for ShellJS
* Add sourcemap files for testing to _karma.conf_ & use ES2015 syntax in _spec.bundle_
* Update Codelyzer rules
* Update packages

<a name="May 2, 2017"></a>
### May 2, 2017
* Upgrade versions & enable _strict_ TypeScript compiler option

<a name="Mar 25, 2017"></a>
### Mar 25, 2017
* Upgrade to Angular 4 configuration

<a name="Mar 6, 2017"></a>
### Mar 6, 2017
* Add _compodoc_ for generating documentation 

<a name="Feb 5, 2017"></a>
### Feb 5, 2017
* Create library