<template>
    <main v-if="!loading">
        <Banner
            :storageUrl="storageUrl"
            :banner="
                page.data.content[
                    page.data.content.findIndex(x => x.name === 'Banner')
                ].content_formatted.includes('image')
                    ? page.data.content[
                          page.data.content.findIndex(x => x.name === 'Banner')
                      ].content.find(x => x.field === 'image').value
                    : ''
            "
            :title="page.data.service['title_' + getLocale()]"
        />
        <section id="section_video_nosotros" class="bottom_section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-md-12">
                        <div class="video_nosotros position-relative">
                            <img
                                class="lazyload"
                                :data-src="
                                    storageUrl +
                                        '/img/services/' +
                                        page.data.service['image']
                                "
                                alt=""
                            />
                            <div
                                class="icon_play position-absolute"
                                v-if="page.data.service.url_video"
                            >
                                <a
                                    class="fancybox"
                                    :href="page.data.service.url_video"
                                    data-fancybox="Servicio"
                                    ><img
                                        class="lazyload"
                                        :src="
                                            '/storage/web/img/icon_play.png'
                                        "
                                        alt=""
                                /></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div
                            class="content_info_video"
                            v-html="
                                page.data.service['description_' + getLocale()]
                            "
                        ></div>
                    </div>
                </div>
            </div>
        </section>
        <section id="form_servicio" class="bottom_section">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-6">
                        <div v-if="!success">
                            <h3
                                v-if="
                                    page.data.contentQuotes[
                                        page.data.contentQuotes.findIndex(
                                            x => x.name === 'Información'
                                        )
                                    ].content_formatted.includes('title') &&
                                        page.data.contentQuotes[
                                            page.data.contentQuotes.findIndex(
                                                el => el.name === 'Información'
                                            )
                                        ].content.find(
                                            x => x.field === 'title'
                                        )['value_' + getLocale()]
                                "
                            >
                                {{
                                    page.data.contentQuotes[
                                        page.data.contentQuotes.findIndex(
                                            el => el.name === "Información"
                                        )
                                    ].content.find(x => x.field === "title")[
                                        "value_" + getLocale()
                                    ]
                                }}
                            </h3>
                        </div>
                        <Form
                            :success-prop.sync="success"
                            :quantity="page.data.quantity"
                            :service="page.data.service"
                        />
                    </div>
                </div>
            </div>
        </section>
        <section
            id="section_rastreov2"
            class="bottom_section"
            v-if="page.data.appTracking"
        >
            <div class="container position-relative rastreo">
                <div
                    class="row lazyload"
                    :data-bg="'/storage/web/img/cinta.png'"
                >
                    <div class="col-lg-4">
                        <div class="img-rastreov2">
                            <img
                                class="lazyload"
                                v-if="page.data.appTracking.image"
                                alt="Dinet App"
                                :data-src="
                                    storageUrl +
                                        '/img/app-tracking/' +
                                        page.data.appTracking.image
                                "
                            />
                        </div>
                    </div>
                    <div class="col-lg-4 grid align-center">
                        <div class="content_text_rastreo">
                            <div
                                v-html="
                                    page.data.appTracking[
                                        'title_' + getLocale()
                                    ]
                                "
                                v-if="
                                    page.data.appTracking[
                                        'title_' + getLocale()
                                    ]
                                "
                            ></div>
                        </div>
                    </div>
                    <div class="col-lg-4 grid align-center">
                        <div class="img_apps grid justify-center">
                            <a
                                :href="page.data.appTracking.link_ios"
                                target="_blank"
                                v-if="page.data.appTracking.link_ios"
                                ><img
                                    :src="'/storage/web/img/app_apple.png'"
                                    class="lazyload"
                                    alt=""
                            /></a>
                            <a
                                :href="page.data.appTracking.link_android"
                                target="_blank"
                                v-if="page.data.appTracking.link_android"
                                ><img
                                    :src="
                                        '/storage/web/img/app_google.png'
                                    "
                                    class="lazyload"
                                    alt=""
                            /></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section
            id="seccion_slider_soluciones"
            class="bottom_section"
            v-if="page.data.services.length"
        >
            <div class="container">
                <div class="row">
                    <div class="titulo_global">
                        <b>{{ $t("Servicios") }}</b>
                        <h2 class="">{{ $t("Otras soluciones") }}</h2>
                    </div>

                    <div class="col-lg-12">
                        <carousel
                            :autoplay="true"
                            :loop="true"
                            :margin="10"
                            :nav="true"
                            :autoplayTimeout="3000"
                            :responsive="{0:{items: 1},600: {items: 2},1000: {items: 3}}"
                            responsiveBaseElement="body"
                            class="carousel_saluciones position-relative"
                        >
                            <ItemService
                                v-for="i in page.data.services"
                                :storageUrl="storageUrl"
                                :data="i"
                                :key="i.id + 's'"
                            />
                        </carousel>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>
<script>
import carousel from 'vue-owl-carousel2';
import Banner from "./../components/Banner";
import Form from "./../components/Form";
import ItemService from "./../components/items/ItemService";
export default {
    name: "Service",
    components: {
        Banner,
        ItemService,
        Form,
        carousel
    },
    props: {
        storageUrl: { type: String }
    },
    data() {
        return {
            page: {},
            errors: {},
            // storageUrl: process.env.STORAGE_URL,
            success: false,
            loading: true,
        };
    },
    // nuxtI18n: {
    //   paths: {
    //     en: "/services/:slug",
    //     es: "/servicios/:slug",
    //   },
    // },
    mounted() {
        $(document).ready(function() {
            $(".fancybox").fancybox();
        });
    },
    methods: {
        async getData() {
            const pathArray = window.location.pathname.split('/');
            const slug = pathArray.at(-1);
            const { data } = await axios.get("/api/page/services/" + slug, {
                // params: { locale: app.i18n.locale },
                params: { locale: "es" }
            });
            this.page = data;
            this.loading = false;
        }
    },
    created() {
        this.getData();
    }
};
</script>
