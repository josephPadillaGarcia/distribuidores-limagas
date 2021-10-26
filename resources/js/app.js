window.Vue = require('vue');
require('./bootstrap-vue');
require('./axios');

import { Timeline } from 'ant-design-vue';
Vue.use(Timeline);

import Sweetalert2 from 'sweetalert2/src/sweetalert2.js';
window.Swal = Sweetalert2;
window.Slug = require('slug');
Slug.defaults.mode = "rfc3986";

import VueFlags from "@growthbunker/vueflags";
Vue.use(VueFlags, {
    // Specify the path of the folder where the flags are stored.
    iconPath: '/files/img/flags/',
});

const app = new Vue({
    el: '#app',
    components: {
        login: () => import('./views/auth/Login.vue' /* webpackChunkName: "js/pages/login" */),
        'button-menu': () => import('./components/layout/ButtonMenu.vue' /* webpackChunkName: "js/components/button-menu" */),
        'button-close': () => import('./components/layout/ButtonClose.vue' /* webpackChunkName: "js/components/button-close" */),
        'button-icons': () => import('./components/layout/ButtonIcons.vue' /* webpackChunkName: "js/components/button-icons" */),
        'users': () => import('./views/configuration/Users.vue' /* webpackChunkName: "js/pages/users" */),
        'content-general-information': () => import('./views/content/GeneralInformation.vue' /* webpackChunkName: "js/pages/content/general-information" */),
        'content-social-networks': () => import('./views/content/SocialNetworks.vue' /* webpackChunkName: "js/pages/content/social-networks" */),
        'content-seo': () => import('./views/content/Seo.vue' /* webpackChunkName: "js/pages/content/seo" */),
        //'category': () => import('./views/blog/Category.vue' /* webpackChunkName: "js/pages/blog/category" */),
        //'posts': () => import('./views/blog/post/Index.vue' /* webpackChunkName: "js/pages/blog/post" */),
        //'posts-create': () => import('./views/blog/post/Create.vue' /* webpackChunkName: "js/pages/blog/post/create" */),
        //'posts-edit': () => import('./views/blog/post/Edit.vue' /* webpackChunkName: "js/pages/blog/post/create" */),
        'profile': () => import('./views/Profile.vue' /* webpackChunkName: "js/pages/profile" */),
        'dashboard': () => import('./views/dashboard/Index.vue' /* webpackChunkName: "js/pages/dashboard" */),
        'traditional': () => import('./views/lead/traditional.vue' /* webpackChunkName: "js/pages/lead/traditional" */),
        'testimonials': () => import('./views/Testimonials.vue' /* webpackChunkName: "js/pages/testimonials" */),
        'customers': () => import('./views/Customers.vue' /* webpackChunkName: "js/pages/customers" */),
        'reset': () => import('./views/auth/Reset.vue' /* webpackChunkName: "js/pages/reset" */),
        'configuration-general': () => import('./views/configuration/General/Index.vue' /* webpackChunkName: "js/pages/configuration/general" */),
        "content-general-content": () =>
            import(
                "./views/content/GeneralContent.vue" /* webpackChunkName: "js/pages/content/general-content" */
            ),
        'services-index': () => import('./views/services/Index.vue' /* webpackChunkName: "js/pages/services/index" */),
        'services-create': () => import('./views/services/Create.vue' /* webpackChunkName: "js/pages/services/create" */),
        'services-edit': () => import('./views/services/Edit.vue' /* webpackChunkName: "js/pages/services/edit" */),
        'services-read': () => import('./views/services/Read.vue' /* webpackChunkName: "js/pages/services/read" */),
        //'slider-index': () => import('./views/slider/Index.vue' /* webpackChunkName: "js/pages/slider/index" */),
        //'slider-create': () => import('./views/slider/Create.vue' /* webpackChunkName: "js/pages/slider/create" */),
        //'slider-edit': () => import('./views/slider/Edit.vue' /* webpackChunkName: "js/pages/slider/edit" */),
    }
});
import Validation from './functions/validation.js'
Vue.use(Validation, { app });
