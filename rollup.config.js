import resolve from 'rollup-plugin-node-resolve';

const globals = {
    '@angular/core': 'ng.core',
    '@angular/common': 'ng.common',
    '@angular/forms': 'ng.forms',
    '@angular/http': 'ng.http',
    'rxjs/Observable': 'Rx',
    'rxjs/Observer': 'Rx'
};

export default {
    entry: './dist/modules/angular-library-starter.es5.js',
    dest: './dist/bundles/angular-library-starter.umd.js',
    format: 'umd',
    exports: 'named',
    moduleName: 'ng.angularLibraryStarter',
    plugins: [resolve()],
    external: Object.keys(globals),
    globals: globals,
    onwarn: () => { return }
}