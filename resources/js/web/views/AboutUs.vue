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
            :title="
                page.data.content[
                    page.data.content.findIndex(x => x.name === 'Banner')
                ].content_formatted.includes('title') &&
                page.data.content[
                    page.data.content.findIndex(el => el.name === 'Banner')
                ].content.find(x => x.field === 'title')[
                    'value_' + getLocale()
                ]
                    ? page.data.content[
                          page.data.content.findIndex(
                              el => el.name === 'Banner'
                          )
                      ].content.find(x => x.field === 'title')[
                          'value_' + getLocale()
                      ]
                    : ''
            "
        />
        <section id="section_video_nosotros" class="bottom_section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-md-12">
                        <div class="content_info_video">
                            <div
                                v-if="
                                    page.data.content[
                                        page.data.content.findIndex(
                                            x =>
                                                x.name ===
                                                'Somos el operador logístico del Grupo Sandoval'
                                        )
                                    ].content_formatted.includes('title') &&
                                        page.data.content[
                                            page.data.content.findIndex(
                                                el =>
                                                    el.name ===
                                                    'Somos el operador logístico del Grupo Sandoval'
                                            )
                                        ].content.find(
                                            x => x.field === 'title'
                                        )['value_' + getLocale()]
                                "
                                v-html="
                                    page.data.content[
                                        page.data.content.findIndex(
                                            el =>
                                                el.name ===
                                                'Somos el operador logístico del Grupo Sandoval'
                                        )
                                    ].content.find(x => x.field === 'title')[
                                        'value_' + getLocale()
                                    ]
                                "
                            ></div>
                            <div
                                v-if="
                                    page.data.content[
                                        page.data.content.findIndex(
                                            x =>
                                                x.name ===
                                                'Somos el operador logístico del Grupo Sandoval'
                                        )
                                    ].content_formatted.includes(
                                        'description'
                                    ) &&
                                        page.data.content[
                                            page.data.content.findIndex(
                                                el =>
                                                    el.name ===
                                                    'Somos el operador logístico del Grupo Sandoval'
                                            )
                                        ].content.find(
                                            x => x.field === 'description'
                                        )['value_' + getLocale()]
                                "
                                v-html="
                                    page.data.content[
                                        page.data.content.findIndex(
                                            el =>
                                                el.name ===
                                                'Somos el operador logístico del Grupo Sandoval'
                                        )
                                    ].content.find(
                                        x => x.field === 'description'
                                    )['value_' + getLocale()]
                                "
                            ></div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="video_nosotros position-relative">
                            <img
                                class="lazyload"
                                v-if="
                                    page.data.content[
                                        page.data.content.findIndex(
                                            x =>
                                                x.name ===
                                                'Somos el operador logístico del Grupo Sandoval'
                                        )
                                    ].content_formatted.includes('image')
                                "
                                :data-src="
                                    storageUrl +
                                        '/img/content/' +
                                        page.data.content[
                                            page.data.content.findIndex(
                                                x =>
                                                    x.name ===
                                                    'Somos el operador logístico del Grupo Sandoval'
                                            )
                                        ].content.find(x => x.field === 'image')
                                            .value
                                "
                                alt=""
                            />
                            <div
                                class="icon_play position-absolute"
                                v-if="
                                    page.data.content[
                                        page.data.content.findIndex(
                                            x =>
                                                x.name ===
                                                'Somos el operador logístico del Grupo Sandoval'
                                        )
                                    ].content.find(x => x.field === 'url_video') && page.data.content[
                                        page.data.content.findIndex(
                                            x =>
                                                x.name ===
                                                'Somos el operador logístico del Grupo Sandoval'
                                        )
                                    ].content.find(x => x.field === 'url_video').value_es
                                "
                            >
                                <a
                                    class="fancybox"
                                    data-caption="video"
                                    data-fancybox="Sobre Dinet"
                                    :href="
                                        page.data.content[
                                            page.data.content.findIndex(
                                                x =>
                                                    x.name ===
                                                    'Somos el operador logístico del Grupo Sandoval'
                                            )
                                        ].content.find(
                                            x => x.field === 'url_video'
                                        ).value_es
                                    "
                                    ><img
                                        class="lazyload"
                                        :src="
                                            '/storage/web/img/icon_play.png'
                                        "
                                        alt="Icon Play"
                                /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Customers
            class="bottom_section"
            :customers="page.data.customers"
            :content="page.data.content"
            :storageUrl="storageUrl"
            v-if="page.data.customers.length"
        />

        <section id="mensaje" class="bottom_section">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-6">
                        <div class="content_mensaje">
                            <div
                                v-if="
                                    page.data.content[
                                        page.data.content.findIndex(
                                            x => x.name === 'Nuestros Clientes'
                                        )
                                    ].content_formatted.includes(
                                        'description'
                                    ) &&
                                        page.data.content[
                                            page.data.content.findIndex(
                                                el =>
                                                    el.name ===
                                                    'Nuestros Clientes'
                                            )
                                        ].content.find(
                                            x => x.field === 'description'
                                        )['value_' + getLocale()]
                                "
                                v-html="
                                    page.data.content[
                                        page.data.content.findIndex(
                                            el =>
                                                el.name === 'Nuestros Clientes'
                                        )
                                    ].content.find(
                                        x => x.field === 'description'
                                    )['value_' + getLocale()]
                                "
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section
            id="seccion_slider_soluciones"
            v-if="page.data.testimonials.length"
            class="bottom_section section_slider_testimonios"
        >
            <div class="container">
                <div class="row">
                    <div class="titulo_global">
                        <h2
                            class=""
                            v-if="
                                page.data.content[
                                    page.data.content.findIndex(
                                        x => x.name === 'Testimonios'
                                    )
                                ].content_formatted.includes('title') &&
                                    page.data.content[
                                        page.data.content.findIndex(
                                            el => el.name === 'Testimonios'
                                        )
                                    ].content.find(x => x.field === 'title')[
                                        'value_' + getLocale()
                                    ]
                            "
                        >
                            {{
                                page.data.content[
                                    page.data.content.findIndex(
                                        el => el.name === "Testimonios"
                                    )
                                ].content.find(x => x.field === "title")[
                                    "value_" + getLocale()
                                ]
                            }}
                        </h2>
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
                            class="carousel_saluciones carosusel_testimonios position-relative"
                        >
                            <div
                                class="item"
                                v-for="i in page.data.testimonials"
                                :key="i.id + 'te'"
                            >
                                <img
                                    :data-src="
                                        storageUrl +
                                            '/img/testimonials/' +
                                            i.image
                                    "
                                    class="lazyload"
                                    :alt="i['title_' + getLocale()]"
                                />
                                <div class="content_solucion position-relative">
                                    <b class="text-center">{{
                                        i["title_" + getLocale()]
                                    }}</b>
                                    <div
                                        class="text-center"
                                        v-html="
                                            i['description_' + getLocale()]
                                        "
                                    ></div>
                                </div>
                            </div>
                        </carousel>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>
<script>
import Banner from "./../components/Banner";
import Customers from "./../components/Customers";
import carousel from 'vue-owl-carousel2';
export default {
    name: "AboutUs",
    props: {
        storageUrl: { type: String }
    },
    components: {
      Banner,
      Customers,
      carousel
    },
    data() {
        return {
            page: {
                data: {
                    page: {}
                }
            },
            // storageUrl: process.env.STORAGE_URL,
            loading: true
        };
    },
    methods: {
        async getData() {
            const { data } = await axios.get("/api/page/about", {
                // params: { locale: app.i18n.locale },
                params: { locale: "es" }
            });
            this.page = data;
            this.loading = false;
        }
    },
    mounted() {
        $(document).ready(function() {
            $(".fancybox").fancybox();
        });
    },
    created() {
        this.getData();
    }
};
</script>
