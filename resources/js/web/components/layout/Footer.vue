<template>
    <footer
        class="grid align-center lazyload"
        :data-bg="'/storage/web/img/footer.png'"
        v-if="footerLoaded"
    >
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-md-12">
                    <div class="logo_blanco">
                        <img
                            class="lazyload"
                            :src="'/storage/web/img/dinet_blanco.png'"
                            alt=""
                        />
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-12">
                    <div class="info_footer">
                        <div
                            v-if="
                                footer.information &&
                                    footer.information.direction
                            "
                            v-html="footer.information.direction"
                        ></div>
                        <p>
                            <b>Chatbot Whatssapp:</b>
                            <template
                                v-if="
                                    footer.information &&
                                        footer.information.whatsapp_number
                                "
                            >
                                <a
                                    href="#"
                                    @click.prevent="
                                        sendWhatsApp(
                                            footer.information.whatsapp_number
                                        )
                                    "
                                    >+51
                                    {{
                                        footer.information
                                            .whatsapp_number_formatted
                                    }}</a
                                ></template
                            >
                        </p>
                        <div class="redes">
                            <ul
                                class="grid align-center"
                                v-if="footer.social_networks.length"
                            >
                                <li
                                    v-for="el in footer.social_networks"
                                    :key="'sn' + el.id"
                                >
                                    <a
                                        :href="el.url"
                                        target="_blank"
                                        rel="noopener"
                                    >
                                        <i
                                            :class="
                                                'flaticon-' +
                                                    el.master_social_networks
                                                        .icon
                                            "
                                            v-if="
                                                el.master_social_networks.icon
                                            "
                                        ></i
                                    ></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div class="menu_footer">
                        <ul>
                            <li>
                                <a :href="localePath({ name: 'about-us' })"
                                    ><img
                                        class="lazyload"
                                        :src="'/storage/web/img/icon_list.png'"
                                        alt="Sobre Dinet"
                                    />Sobre Dinet</a
                                >
                            </li>
                            <li>
                                <a :href="localePath({ name: 'services' })"
                                    ><img
                                        class="lazyload"
                                        :src="'/storage/web/img/icon_list.png'"
                                        alt="Servicios"
                                    />Servicios</a
                                >
                            </li>
                            <li>
                                <a :href="localePath({ name: 'quotations' })"
                                    ><img
                                        class="lazyload"
                                        :src="'/storage/web/img/icon_list.png'"
                                        alt="Cotizaciones"
                                    />Cotizaciones</a
                                >
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div class="opciones_footer">
                        <ul>
                            <li>
                                <a
                                    :href="footer.information.book_link"
                                    v-if="
                                        footer.information &&
                                            footer.information.book_link
                                    "
                                    ><img
                                        class="lazyload"
                                        :src="'/storage/web/img/icon_libro.png'"
                                        alt="Libro de reclamaciones"
                                    />
                                    <!-- {{ $t("Libro de reclamaciones") }} -->
                                    Libro de reclamaciones
                                </a>
                            </li>
                            <li>
                                <a
                                    v-if="
                                        footer.information &&
                                            footer.information.api_link
                                    "
                                    :href="footer.information.api_link"
                                    ><span
                                        ><i class="flaticon-settings"></i></span
                                    ><template
                                        v-if="footer.information.name_api"
                                        >{{
                                            footer.information.name_api
                                        }}</template
                                    ></a
                                >
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="pie">
                <div class="row justify-content-between">
                    <div class="col-lg-3 col-md-5 col-sm-12">
                        <div class="copyright">
                            {{ new Date().getFullYear() }} Dinet © All rights
                            reserved.
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-5 col-sm-12">
                        <div class="developer">
                            Desarrollado por
                            <!-- {{ $t("Desarrollado por") }} -->
                            <a href="https://playgroup.pe" target="_blank">
                                <div class="img-dev">
                                    <img
                                        :src="'/storage/web/img/logo-play.svg'"
                                        class="lazyload"
                                    /><img
                                        class="lazyload litt"
                                        :src="'/storage/web/img/lid.png'"
                                    />
                                </div>
                                PLAY Group
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div
            class="chat-bot"
            v-if="footer.information && footer.information.whatsapp_number"
        >
            <ul>
                <li class="bot">
                    <a
                        :href="
                            `https://wa.me/+51${
                                footer.information.whatsapp_number
                            }?text=${encodeURIComponent(
                                'Hola quisiera información del servicio'
                            )}`
                        "
                        target="_blank"
                        ><img
                            :data-src="'/storage/web/img/bot.png'"
                            class="lazyload"
                            alt=""
                    /></a>
                </li>
            </ul>
        </div>
    </footer>
</template>
<script>
export default {
    name: "WebFooter",
    computed: {
        footer() {
            return this.$store.getters.getFooter;
        },
        footerLoaded() {
            return this.$store.getters.getFooterLoaded;
        }
    },
    methods: {
        sendWhatsApp(number) {
            let link = `https://wa.me/+51${number}?text=${encodeURIComponent(
                "Hola quisiera información del servicio"
            )}`;
            window.open(link, "_blank");
        }
    },
    data() {
        return {};
    }
};
</script>
