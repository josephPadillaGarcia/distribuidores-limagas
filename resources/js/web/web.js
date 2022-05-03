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
import Vue from 'vue';

Vue.mixin(Mixins);

import VueSocialSharing from 'vue-social-sharing'
Vue.use(VueSocialSharing);
//Vue.component('SocialSharing', VueSocialSharing)

const app = new Vue({
    el: '#app',
    components: {
        /** Para web */
        FormIndex: () => import('./components/FormIndex.vue' /* webpackChunkName: "js/components/form-index" */),
        FormHeader: () => import('./components/FormHeader.vue' /* webpackChunkName: "js/components/form-header" */),
        FormQuote: () => import('./components/FormQuote.vue' /* webpackChunkName: "js/components/form-quote" */),
        UbigeoFilter: () => import('./components/UbigeoFilter.vue' /* webpackChunkName: "js/components/ubigeo-filter" */),
    },
    store,
    i18n: {
        locale: 'es'
    }
});