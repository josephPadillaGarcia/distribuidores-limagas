<script>
import en from './en.json';
import es from './es.json';
export default {
    data() {
        return {
            windowSize: {
                x: 0,
                y: 0
            },
            $i18n: {
                locale: "es"
            },
            es: es,
            en: en
        };
    },
    mounted() {
        // this.onResize();
    },

    methods: {
        $t(name, locale) {
            return this[locale] && this[locale].hasOwnProperty(name) ? this[locale][name] : name;
        },
        onResize() {
            this.windowSize = { x: window.innerWidth, y: window.innerHeight };
        },
        localePath(name, localeString) {
            const locale = localeString === 'es' ? '' : localeString;
            const path = `${locale}/${this.$t(name, localeString)}`;

            return path;
        },
        handleScroll(e) {
            e.preventDefault();
            var headerLogo = document.getElementById("header_logo");
            if(headerLogo) {
                if (window.scrollY > 120) {
                    headerLogo.classList.add("img-fixed");
                } else {
                    headerLogo.classList.remove("img-fixed");
                }
            }

            var logoWrapper = document.getElementById("header_logo_wrapper");
            if(logoWrapper) {
                if (window.scrollY > 120) {
                    logoWrapper.classList.add("logo_dinet_fixed");
                } else {
                    logoWrapper.classList.remove("logo_dinet_fixed");
                }
            }

            var headerContainer = document.getElementById("header_container");
            if(headerContainer) {
                if (window.scrollY > 120) {
                    headerContainer.classList.add("container-fluid-fixed");
                } else {
                    headerContainer.classList.remove("container-fluid-fixed");
                }
            }

            var inputCodeTracking = document.getElementById("input_code_tracking");
            if(inputCodeTracking) {
                if (window.scrollY > 120) {
                    inputCodeTracking.classList.add("imput-fixed");
                } else {
                    inputCodeTracking.classList.remove("imput-fixed");
                }
            }

            var spanCodeTracking = document.getElementById("span_code_tracking");
            if(spanCodeTracking) {
                if (window.scrollY > 120) {
                    spanCodeTracking.classList.add("span-fixed");
                } else {
                    spanCodeTracking.classList.remove("span-fixed");
                }
            }

            var headerCodeSend = document.getElementById("header_code_send");
            if(headerCodeSend) {
                if (window.scrollY > 120) {
                    headerCodeSend.classList.remove("hiden");
                } else {
                    headerCodeSend.classList.add("hiden");
                }
            }
        }
    },
    beforeMount() {
        window.addEventListener("scroll", this.handleScroll);
        // if (!this.$store.getters.getFooterLoaded) {
        //     this.$store.dispatch("getLayout");
        // }
    },
    beforeDestroy() {
        window.removeEventListener("scroll", this.handleScroll);
    }
};
</script>
