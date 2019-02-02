let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */

mix.options({ processCssUrls: false });

mix.setPublicPath('assets');

mix.sass('assets/resources/scss/theme.scss', 'public/css');

mix.js('assets/resources/js/theme.js', 'public/js')
    .extract(['jquery', 'uikit']);

mix.copyDirectory('assets/resources/images', 'assets/public/images');

mix.version();
