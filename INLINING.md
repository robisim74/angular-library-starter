## Inlining of templates and stylesheets

To use external templates & stylesheets, you can:
- process your `scss` files (if you have them)
- use an external library (or a custom function) to inline the `html/css` files

Following are the steps to adapt the library to the use of external templates and stylesheets (thanks to Paul Ryan @paullryan for his suggestion):

- Install the following packages:

    ```
    npm i node-sass --save-dev
    ```
    ```
    npm i angular2-inline-template-style --save-dev
    ```
    > Note that you could use different packages.

- `build.js` file:

    Add the `BUILD_DIR` constant:
    ```
    const BUILD_DIR = `build`;
    ```
    Add to the start:
    ```
    shell.rm(`-Rf`, `${BUILD_DIR}/**`);
    shell.mkdir(`-p`, `./${BUILD_DIR}`);
    ```
    Add before the _Aot Compilation_:
    ```
    /* Process scss files  */
    shell.echo(`Process scss files`);
    shell.cp(`-Rf`, [`src`, `*.ts`, `*.json`], `${BUILD_DIR}`);
    shell.exec(`node-sass -r ${BUILD_DIR} -o ${BUILD_DIR}`);
    shell.rm(`-Rf`, `${BUILD_DIR}/**/*.scss`);
    shell.ls(`${BUILD_DIR}/**/*.css`).forEach(function (file) {
        shell.mv(file, file.replace('.css', '.scss'));
    });

    /* Inline templates & stylesheets */
    shell.echo(`Inline templates & stylesheets`);
    shell.exec(`ng2-inline -b ${BUILD_DIR} --silent --relative --compress -o . \"${BUILD_DIR}/**/*.ts\"`);
    ```
    > Note that you could skip the processing of `scss` files if you don't have them.

    Then change all `ngc -p tsconfig-build.json` with `ngc -p ${BUILD_DIR}/tsconfig-build.json` and finally remove the `build` folder:
    ```
    shell.rm(`-Rf`, `${BUILD_DIR}`);
    ```

- `tsconfig-build.js` file:

    Change:

    - `"node_modules/@angular/*"` => `"../node_modules/@angular/*"`
    - `"dist"` => `"../dist"`
    - `"node_modules/zone.js/dist/zone.js.d.ts"` => `"../node_modules/zone.js/dist/zone.js.d.ts"`

> After bundling, make sure that your bundles & `metadata.json` contain the inline templates & styles.

> If you want test your components that use external templates & stylesheets, you must also update the _webpack_ configuration in _karma.conf.js_ file.
