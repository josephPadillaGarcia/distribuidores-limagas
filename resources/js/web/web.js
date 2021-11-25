window.Vue = require('vue');
require('../axios');

try {
    window.$ = window.jQuery = require('jquery');
    require("/public/js/vendors/bootstrap.min.js");
    require("/public/js/vendors/jquery.waypoints.min.js");
    require("/public/js/vendors/jq.fancybox.min.js");
    require("/public/js/vendors/jquery.counterup.min.js");
    require("/public/js/vendors/owl.carousel.min.js");
    require("/public/js/vendors/lazysizes.js");
} catch (e) {}

import store from './store'

import Mixins from './mixins'
Vue.mixin(Mixins);

const app = new Vue({
    el: '#app',
    components: {
        /** Para web */
        AppTracking: () => import('./components/AppTracking.vue' /* webpackChunkName: "js/components/app-tracking" */),
        Banner: () => import('./components/Banner.vue' /* webpackChunkName: "js/components/banner" */),
        Customers: () => import('./components/Customers.vue' /* webpackChunkName: "js/components/customers" */),
        Dropdown: () => import('./components/Dropdown.vue' /* webpackChunkName: "js/components/dropdown" */),
        IconClose: () => import('./components/icons/Close.vue' /* webpackChunkName: "js/components/icon-close" */),
        ItemService: () => import('./components/items/ItemService.vue' /* webpackChunkName: "js/components/item-service" */),
        FormIndex: () => import('./components/FormIndex.vue' /* webpackChunkName: "js/components/form-index" */),
        FormHeader: () => import('./components/FormHeader.vue' /* webpackChunkName: "js/components/form-header" */),
        FormQuote: () => import('./components/FormQuote.vue' /* webpackChunkName: "js/components/form-quote" */),
        WebFooter: () => import('./components/layout/Footer.vue' /* webpackChunkName: "js/components/web-footer" */),
        WebMenu: () => import('./components/layout/Menu.vue' /* webpackChunkName: "js/components/web-menu" */),
        WebIndex: () => import('./views/Index.vue' /* webpackChunkName: "js/pages/web/index" */),
        WebAboutUs: () => import('./views/AboutUs.vue' /* webpackChunkName: "js/pages/web/about-us" */),
        WebPrivacyPolicies: () => import('./views/PrivacyPolicies.vue' /* webpackChunkName: "js/pages/web/privacy-policies" */),
        WebQuotations: () => import('./views/Quotations.vue' /* webpackChunkName: "js/pages/web/quotations" */),
        WebServices: () => import('./views/Services.vue' /* webpackChunkName: "js/pages/web/services" */),
        WebService: () => import('./views/Service.vue' /* webpackChunkName: "js/pages/web/service" */),
    },
    store,
    i18n: {
        locale: 'es'
    }
});