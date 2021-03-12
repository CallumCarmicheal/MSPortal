const mix = require('laravel-mix');
const path = require('path');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

 mix.alias({
    '@':    path.join(__dirname, 'resources/js'),
    'ext':  path.resolve('node_modules'),
})


function typescriptSettings() {
    mix
        .ts('resources/js/app.ts', 'public/js').vue()
        .postCss('resources/css/app.css', 'public/css', [
            require('postcss-import'),
            require('tailwindcss'),
            require('autoprefixer'),
        ])
        .webpackConfig(require('./webpack.config'));

    if (mix.inProduction()) {
        mix.version();
    }

    return;

    const config = require('./webpack.config');

    mix
        .vue('resources/js/app.ts', 'public/js', {typescript: true})
        .postCss('resources/css/app.css', 'public/css', [
            require('postcss-import'),
            require('tailwindcss'),
            require('autoprefixer'),
        ])
        .sourceMaps()
        .webpackConfig(config);

    if (process.env.NODE_ENV === 'production') {
        mix.purgeCss();
    }

    if (process.env.npm_lifecycle_event !== 'hot') {
        mix.version();
    }
}

typescriptSettings();