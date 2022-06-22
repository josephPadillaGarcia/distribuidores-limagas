const mix = require("laravel-mix");

//mix.js("resources/js/admin/admin.js", "public/js/admin").extract(["vue"]);
//mix.js("resources/js/web/web.js", "public/js/web").extract(["vue"]);

//mix.sass('resources/sass/admin/admin.scss', 'public/css');
mix.sass('resources/sass/web/web.scss', 'public/css');

/*if (mix.inProduction()) {
    mix.version();
}*/