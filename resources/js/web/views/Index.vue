<template>
    <main v-if="!loading">
        <section
            class="
        position-relative
        marginb_section
        section_bannerHome section_bannerHome_02
      "
            id="seccion_banner_global"
        >
            <template>
                <video
                    ref="ref_video"
                    class="lazyload"
                    :data-poster="
                        page.data.content[
                            page.data.content.findIndex(
                                x => x.name === 'Banner'
                            )
                        ].content_formatted.includes('image')
                            ? storageUrl +
                              '/img/content/' +
                              page.data.content[
                                  page.data.content.findIndex(
                                      el => el.name === 'Banner'
                                  )
                              ].content.find(x => x.field === 'image').value
                            : ''
                    "
                    loop
                    autoplay
                    muted
                    playsinline
                    preload="none"
                >
                    <source
                        type="video/mp4"
                        v-if="
                            page.data.content[
                                page.data.content.findIndex(
                                    x => x.name === 'Banner'
                                )
                            ].content_formatted.includes('video')
                        "
                        :src="
                            storageUrl +
                                '/videos/pages/' +
                                page.data.content[
                                    page.data.content.findIndex(
                                        el => el.name === 'Banner'
                                    )
                                ].content.find(x => x.field === 'video').value
                        "
                    />
                </video>
            </template>
            <div class="container">
                <div class="row">
                    <div class="col-md-7 px-0">
                        <div class="content_banner">
                            <div
                                v-if="
                                    page.data.content[
                                        page.data.content.findIndex(
                                            x => x.name === 'Banner'
                                        )
                                    ].content_formatted.includes(
                                        'description'
                                    ) &&
                                        page.data.content[
                                            page.data.content.findIndex(
                                                el => el.name === 'Banner'
                                            )
                                        ].content.find(
                                            x => x.field === 'description'
                                        )['value_' + getLocale()]
                                "
                                v-html="
                                    page.data.content[
                                        page.data.content.findIndex(
                                            el => el.name === 'Banner'
                                        )
                                    ].content.find(
                                        x => x.field === 'description'
                                    )['value_' + getLocale()]
                                "
                            ></div>
                            <form @submit.prevent="goTo">
                                <div
                                    class="content_input_search position-relative"
                                >
                                    <input
                                        class="input_search"
                                        type="text"
                                        v-model="code_banner"
                                        placeholder="Escribe el código de envío"
                                    />
                                    <span class="position-absolute"
                                        ><img
                                            :src="
                                                '/storage/web/img/rastreo.png'
                                            "
                                            alt=""
                                    /></span>
                                    <button
                                        class="b_boton text-white position-absolute btn_global"
                                    >
                                        <b>Buscar</b>
                                        <i class="flaticon-lupa-1"></i>
                                    </button>
                                </div>
                                <span
                                    class="error error-red"
                                    style="margin-top: 6px;"
                                    v-if="message_error"
                                    >{{ message_error }}</span
                                >
                            </form>
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
                        <!-- <b>{{ $t("Servicios") }}</b> -->
                        <b>Servicios</b>
                        <h2
                            v-if="
                                page.data.content[
                                    page.data.content.findIndex(
                                        x => x.name === 'Servicios'
                                    )
                                ].content_formatted.includes('title') &&
                                    page.data.content[
                                        page.data.content.findIndex(
                                            el => el.name === 'Servicios'
                                        )
                                    ].content.find(x => x.field === 'title')[
                                        'value_' + getLocale()
                                    ]
                            "
                        >
                            {{
                                page.data.content[
                                    page.data.content.findIndex(
                                        el => el.name === "Servicios"
                                    )
                                ].content.find(x => x.field === "title")[
                                    "value_" + getLocale()
                                ]
                            }}
                        </h2>
                    </div>

                    <div class="col-lg-12" v-if="page.data.services.length">
                        <carousel
                            :autoplay="true"
                            :loop="true"
                            :margin="10"
                            :nav="true"
                            :autoplayTimeout="3000"
                            :responsive="{0:{items: 1},600: {items: 2},1000: {items: 3}}"
                            class="carousel_saluciones position-relative"
                            responsiveBaseElement="body"
                        >
                            <template slot="prev"><span class="prev">‹</span></template>

                            <div
                                v-for="i in page.data.services"
                                :key="i.id + 's'"
                            >
                                <ItemService :data="i" :storageUrl="storageUrl" />
                            </div>

                            <template slot="next"><span class="next">›</span></template>
                        </carousel>
                    </div>
                </div>
            </div>
        </section>

        <AppTracking
            class="bottom_section"
            v-if="page.data.appTracking"
            :data="page.data.appTracking"
            :storageUrl="storageUrl"
        />

        <section
            id="section_tutoriales"
            class="bottom_section"
            v-if="page.data.tutos.length"
        >
            <div class="container">
                <div class="row">
                    <div class="titulo_global">
                        <b
                            v-if="
                                page.data.content[
                                    page.data.content.findIndex(
                                        x => x.name === 'Tutoriales'
                                    )
                                ].content_formatted.includes('subtitle') &&
                                    page.data.content[
                                        page.data.content.findIndex(
                                            el => el.name === 'Tutoriales'
                                        )
                                    ].content.find(x => x.field === 'subtitle')[
                                        'value_' + getLocale()
                                    ]
                            "
                        >
                            {{
                                page.data.content[
                                    page.data.content.findIndex(
                                        el => el.name === "Tutoriales"
                                    )
                                ].content.find(x => x.field === "subtitle")[
                                    "value_" + getLocale()
                                ]
                            }}
                        </b>
                        <h2
                            v-if="
                                page.data.content[
                                    page.data.content.findIndex(
                                        x => x.name === 'Tutoriales'
                                    )
                                ].content_formatted.includes('title') &&
                                    page.data.content[
                                        page.data.content.findIndex(
                                            el => el.name === 'Tutoriales'
                                        )
                                    ].content.find(x => x.field === 'title')[
                                        'value_' + getLocale()
                                    ]
                            "
                        >
                            {{
                                page.data.content[
                                    page.data.content.findIndex(
                                        el => el.name === "Tutoriales"
                                    )
                                ].content.find(x => x.field === "title")[
                                    "value_" + getLocale()
                                ]
                            }}
                        </h2>
                    </div>
                    <div
                        class="col-lg-6"
                        v-for="el in page.data.tutos"
                        :key="'t' + el.id"
                    >
                        <div class="content_tutorial">
                            <img
                                class="img_tutorial lazyload"
                                :src="
                                    storageUrl + '/img/tutorials/' + el.image
                                "
                                alt=""
                            />
                            <div class="caja_pregunta">
                                <p>{{ el["title_" + getLocale()] }}</p>
                                <!-- <a
                  class="position-relative fancybox"
                  data-fancybox="Tutoriales"
                  :href="el.link"
                  >{{ $t("Ver video") }} -->
                                <a
                                    class="position-relative fancybox"
                                    data-fancybox="Tutoriales"
                                    :href="el.link"
                                    >Ver video
                                    <span class="position-absolute"
                                        ><img
                                            :src="
                                                '/storage/web/img/flecha_iz.png'
                                            "
                                            class="lazyload"
                                            alt=""/></span
                                ></a>
                            </div>
                        </div>
                    </div>

                    <div
                        class="content_boton"
                        v-if="
                            page.data.content[
                                page.data.content.findIndex(
                                    x => x.name === 'Tutoriales'
                                )
                            ].content_formatted.includes('url_tutos')
                        "
                    >
                        <a
                            target="_blank"
                            :href="
                                page.data.content[
                                    page.data.content.findIndex(
                                        x => x.name === 'Tutoriales'
                                    )
                                ].content.find(x => x.field === 'url_tutos')
                                    .value_es
                            "
                            class="b_boton text-white text-center btn_global"
                        >
                            <!-- {{ $t("Ver más tutoriales") }} -->
                            Ver más tutoriales
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <section
            id="section_datos"
            class="lazyload"
            :data-bg="'/storage/web/img/fondo_mapa.png'"
        >
            <div class="container">
                <div class="row justify-content-between">
                    <div class="col-lg-6 col-md-12 grid align-center">
                        <div class="content_text_rastreo">
                            <div
                                v-if="
                                    page.data.content[
                                        page.data.content.findIndex(
                                            x =>
                                                x.name ===
                                                'Sumando experiencia en cada servicio'
                                        )
                                    ].content_formatted.includes('title') &&
                                        page.data.content[
                                            page.data.content.findIndex(
                                                el =>
                                                    el.name ===
                                                    'Sumando experiencia en cada servicio'
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
                                                'Sumando experiencia en cada servicio'
                                        )
                                    ].content.find(x => x.field === 'title')[
                                        'value_' + getLocale()
                                    ]
                                "
                            ></div>

                            <div class="row">
                                <div
                                    class="col-lg-4 col-md-4 col-sm-4 col-xs-12 datos"
                                >
                                    <img
                                        class="lazyload"
                                        :src="
                                            storageUrl +
                                                '/img/content/' +
                                                page.data.content[
                                                    page.data.content.findIndex(
                                                        x =>
                                                            x.name ===
                                                            'Sumando experiencia en cada servicio'
                                                    )
                                                ].content.find(
                                                    x => x.field === 'icon_1'
                                                ).value
                                        "
                                        alt=""
                                        v-if="
                                            page.data.content[
                                                page.data.content.findIndex(
                                                    x =>
                                                        x.name ===
                                                        'Sumando experiencia en cada servicio'
                                                )
                                            ].content_formatted.includes(
                                                'icon_1'
                                            )
                                        "
                                    />

                                    <b
                                        class="counter"
                                        v-show="
                                            page.data.content[
                                                page.data.content.findIndex(
                                                    x =>
                                                        x.name ===
                                                        'Sumando experiencia en cada servicio'
                                                )
                                            ].content_formatted.includes(
                                                'count_1'
                                            ) &&
                                                page.data.content[
                                                    page.data.content.findIndex(
                                                        el =>
                                                            el.name ===
                                                            'Sumando experiencia en cada servicio'
                                                    )
                                                ].content.find(
                                                    x => x.field === 'count_1'
                                                )['value_' + getLocale()]
                                        "
                                    >
                                        <ICountUp
                                            :delay="10"
                                            :duration="6000"
                                            :endVal='Number(page.data.content[page.data.content.findIndex(
                                                        el =>
                                                            el.name ===
                                                            "Sumando experiencia en cada servicio"
                                                    )
                                                ].content.find(
                                                    x => x.field === "count_1"
                                                )["value_" + getLocale()])'
                                        />
                                        <!-- {{
                                            page.data.content[
                                                page.data.content.findIndex(
                                                    el =>
                                                        el.name ===
                                                        "Sumando experiencia en cada servicio"
                                                )
                                            ].content.find(
                                                x => x.field === "count_1"
                                            )["value_" + getLocale()]
                                        }} -->
                                    </b>

                                    <p
                                        v-if="
                                            page.data.content[
                                                page.data.content.findIndex(
                                                    x =>
                                                        x.name ===
                                                        'Sumando experiencia en cada servicio'
                                                )
                                            ].content_formatted.includes(
                                                'feature_1'
                                            ) &&
                                                page.data.content[
                                                    page.data.content.findIndex(
                                                        el =>
                                                            el.name ===
                                                            'Sumando experiencia en cada servicio'
                                                    )
                                                ].content.find(
                                                    x => x.field === 'feature_1'
                                                )['value_' + getLocale()]
                                        "
                                    >
                                        {{
                                            page.data.content[
                                                page.data.content.findIndex(
                                                    el =>
                                                        el.name ===
                                                        "Sumando experiencia en cada servicio"
                                                )
                                            ].content.find(
                                                x => x.field === "feature_1"
                                            )["value_" + getLocale()]
                                        }}
                                    </p>
                                </div>
                                <div
                                    class="col-lg-4 col-md-4 col-sm-4 col-xs-12 datos"
                                >
                                    <img
                                        class="lazyload"
                                        :src="
                                            storageUrl +
                                                '/img/content/' +
                                                page.data.content[
                                                    page.data.content.findIndex(
                                                        x =>
                                                            x.name ===
                                                            'Sumando experiencia en cada servicio'
                                                    )
                                                ].content.find(
                                                    x => x.field === 'icon_2'
                                                ).value
                                        "
                                        alt=""
                                        v-if="
                                            page.data.content[
                                                page.data.content.findIndex(
                                                    x =>
                                                        x.name ===
                                                        'Sumando experiencia en cada servicio'
                                                )
                                            ].content_formatted.includes(
                                                'icon_2'
                                            )
                                        "
                                    />

                                    <b
                                        class="counter"
                                        v-show="
                                            page.data.content[
                                                page.data.content.findIndex(
                                                    x =>
                                                        x.name ===
                                                        'Sumando experiencia en cada servicio'
                                                )
                                            ].content_formatted.includes(
                                                'count_2'
                                            ) &&
                                                page.data.content[
                                                    page.data.content.findIndex(
                                                        el =>
                                                            el.name ===
                                                            'Sumando experiencia en cada servicio'
                                                    )
                                                ].content.find(
                                                    x => x.field === 'count_2'
                                                )['value_' + getLocale()]
                                        "
                                    >
                                        <ICountUp
                                            :delay="10"
                                            :duration="6000"
                                            :endVal='Number(page.data.content[
                                                page.data.content.findIndex(
                                                    el =>
                                                        el.name ===
                                                        "Sumando experiencia en cada servicio"
                                                )
                                            ].content.find(
                                                x => x.field === "count_2"
                                            )["value_" + getLocale()])'
                                        />
                                        <!-- {{
                                            page.data.content[
                                                page.data.content.findIndex(
                                                    el =>
                                                        el.name ===
                                                        "Sumando experiencia en cada servicio"
                                                )
                                            ].content.find(
                                                x => x.field === "count_2"
                                            )["value_" + getLocale()]
                                        }} -->
                                    </b>

                                    <p
                                        v-if="
                                            page.data.content[
                                                page.data.content.findIndex(
                                                    x =>
                                                        x.name ===
                                                        'Sumando experiencia en cada servicio'
                                                )
                                            ].content_formatted.includes(
                                                'feature_2'
                                            ) &&
                                                page.data.content[
                                                    page.data.content.findIndex(
                                                        el =>
                                                            el.name ===
                                                            'Sumando experiencia en cada servicio'
                                                    )
                                                ].content.find(
                                                    x => x.field === 'feature_2'
                                                )['value_' + getLocale()]
                                        "
                                    >
                                        {{
                                            page.data.content[
                                                page.data.content.findIndex(
                                                    el =>
                                                        el.name ===
                                                        "Sumando experiencia en cada servicio"
                                                )
                                            ].content.find(
                                                x => x.field === "feature_2"
                                            )["value_" + getLocale()]
                                        }}
                                    </p>
                                </div>
                                <div
                                    class="col-lg-4 col-md-4 col-sm-4 col-xs-12 datos"
                                >
                                    <img
                                        class="lazyload"
                                        :src="
                                            storageUrl +
                                                '/img/content/' +
                                                page.data.content[
                                                    page.data.content.findIndex(
                                                        x =>
                                                            x.name ===
                                                            'Sumando experiencia en cada servicio'
                                                    )
                                                ].content.find(
                                                    x => x.field === 'icon_3'
                                                ).value
                                        "
                                        alt=""
                                        v-if="
                                            page.data.content[
                                                page.data.content.findIndex(
                                                    x =>
                                                        x.name ===
                                                        'Sumando experiencia en cada servicio'
                                                )
                                            ].content_formatted.includes(
                                                'icon_3'
                                            )
                                        "
                                    />

                                    <b
                                        class="counter"
                                        v-show="
                                            page.data.content[
                                                page.data.content.findIndex(
                                                    x =>
                                                        x.name ===
                                                        'Sumando experiencia en cada servicio'
                                                )
                                            ].content_formatted.includes(
                                                'count_3'
                                            ) &&
                                                page.data.content[
                                                    page.data.content.findIndex(
                                                        el =>
                                                            el.name ===
                                                            'Sumando experiencia en cada servicio'
                                                    )
                                                ].content.find(
                                                    x => x.field === 'count_3'
                                                )['value_' + getLocale()]
                                        "
                                    >
                                        <ICountUp
                                            :delay="10"
                                            :duration="6000"
                                            :endVal='Number(page.data.content[
                                                page.data.content.findIndex(
                                                    el =>
                                                        el.name ===
                                                        "Sumando experiencia en cada servicio"
                                                )
                                            ].content.find(
                                                x => x.field === "count_3"
                                            )["value_" + getLocale()])'
                                        />
                                        <!-- {{
                                            page.data.content[
                                                page.data.content.findIndex(
                                                    el =>
                                                        el.name ===
                                                        "Sumando experiencia en cada servicio"
                                                )
                                            ].content.find(
                                                x => x.field === "count_3"
                                            )["value_" + getLocale()]
                                        }} -->
                                    </b>

                                    <p
                                        v-if="
                                            page.data.content[
                                                page.data.content.findIndex(
                                                    x =>
                                                        x.name ===
                                                        'Sumando experiencia en cada servicio'
                                                )
                                            ].content_formatted.includes(
                                                'feature_3'
                                            ) &&
                                                page.data.content[
                                                    page.data.content.findIndex(
                                                        el =>
                                                            el.name ===
                                                            'Sumando experiencia en cada servicio'
                                                    )
                                                ].content.find(
                                                    x => x.field === 'feature_3'
                                                )['value_' + getLocale()]
                                        "
                                    >
                                        {{
                                            page.data.content[
                                                page.data.content.findIndex(
                                                    el =>
                                                        el.name ===
                                                        "Sumando experiencia en cada servicio"
                                                )
                                            ].content.find(
                                                x => x.field === "feature_3"
                                            )["value_" + getLocale()]
                                        }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-5 col-md-5 grid align-end">
                        <div
                            class="img_dato"
                            v-if="
                                page.data.content[
                                    page.data.content.findIndex(
                                        x =>
                                            x.name ===
                                            'Sumando experiencia en cada servicio'
                                    )
                                ].content_formatted.includes('image')
                            "
                        >
                            <img
                                class="lazyload"
                                :src="
                                    storageUrl +
                                        '/img/content/' +
                                        page.data.content[
                                            page.data.content.findIndex(
                                                x =>
                                                    x.name ===
                                                    'Sumando experiencia en cada servicio'
                                            )
                                        ].content.find(x => x.field === 'image')
                                            .value
                                "
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <Customers
            class="bottom_section"
            :content="page.data.content"
            :customers="page.data.customers"
            :storageUrl="storageUrl"
            v-if="page.data.customers.length"
        />

        <section id="section_darkstore" class="bottom_section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-5 grid align-center">
                        <div class="man-dinet">
                            <img
                                class="lazyload"
                                v-if="
                                    page.data.content[
                                        page.data.content.findIndex(
                                            x =>
                                                x.name ===
                                                'Contamos con cuatro DARK STORE en lima para atender el e-commerce'
                                        )
                                    ].content_formatted.includes('image')
                                "
                                :src="
                                    storageUrl +
                                        '/img/content/' +
                                        page.data.content[
                                            page.data.content.findIndex(
                                                x =>
                                                    x.name ===
                                                    'Contamos con cuatro DARK STORE en lima para atender el e-commerce'
                                            )
                                        ].content.find(x => x.field === 'image')
                                            .value
                                "
                                alt=""
                            />
                        </div>
                    </div>
                    <div class="col-lg-7 grid align-center">
                        <div class="content_store">
                            <div
                                v-if="
                                    page.data.content[
                                        page.data.content.findIndex(
                                            x =>
                                                x.name ===
                                                'Contamos con cuatro DARK STORE en lima para atender el e-commerce'
                                        )
                                    ].content_formatted.includes('text') &&
                                        page.data.content[
                                            page.data.content.findIndex(
                                                el =>
                                                    el.name ===
                                                    'Contamos con cuatro DARK STORE en lima para atender el e-commerce'
                                            )
                                        ].content.find(x => x.field === 'text')[
                                            'value_' + getLocale()
                                        ]
                                "
                                v-html="
                                    page.data.content[
                                        page.data.content.findIndex(
                                            el =>
                                                el.name ===
                                                'Contamos con cuatro DARK STORE en lima para atender el e-commerce'
                                        )
                                    ].content.find(x => x.field === 'text')[
                                        'value_' + getLocale()
                                    ]
                                "
                            ></div>
                            <div class="caja_botones">
                                <a
                                    v-if="
                                        footer.information &&
                                            footer.information.contact_number
                                    "
                                    :href="
                                        'tel:+51' +
                                            footer.information.contact_number
                                    "
                                    class="btn_global btn_border text-center btn_color_text"
                                    >+51
                                    {{
                                        footer.information.contact_number_format
                                    }}</a
                                >
                                <a
                                    :href="
                                        webUrl +
                                            (page.slug_es
                                                ? '/' + page.slug_es
                                                : '')
                                    "
                                    class="b_boton text-white text-center btn_global"
                                >
                                    <!-- {{ $t("Quiero cotizar") }} -->
                                    Quiero cotizar
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
import ICountUp from 'vue-countup-v2';
import carousel from 'vue-owl-carousel2';
import AppTracking from "./../components/AppTracking";
import ItemService from "./../components/items/ItemService";
import Customers from "./../components/Customers";
export default {
    name: "WebIndex",
    props: {
        webUrl: { type: String },
        storageUrl: { type: String }
    },
    components: {
      AppTracking,
      Customers,
      ItemService,
      ICountUp,
      carousel
    },
    data() {
        return {
            page: {
                data: {
                    page: {},
                    content: [],
                    services: [],
                    appTracking: []
                }
            },
            // storageUrl: process.env.STORAGE_URL,
            code_banner: "",
            message_error: "",
            loading: true
        };
    },
    computed: {
        footer() {
            return this.$store.getters.getFooter;
        },
        menu() {
            return this.$store.getters.getMenu;
        }
    },
    methods: {
        async getData() {
            const { data } = await axios.get("/api/page/home", {
                // params: { locale: app.i18n.locale },
                params: { locale: "es" }
            });
            this.page = data;
            this.loading = false;
        },
        goTo() {
            if (this.code_banner.length != 20) {
                this.message_error =
                    "Por favor ingrese un código de 20 caracteres.";
                setTimeout(() => {
                    this.message_error = "";
                }, 5000);
                return false;
            }
            if (
                this.menu.information &&
                this.menu.information.api_url_tracking
            ) {
                let link =
                    this.menu.information.api_url_tracking + this.code_banner;
                window.open(link, "_blank");
            }
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