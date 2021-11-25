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
                ].content.find(x => x.field === 'title')['value_' + getLocale()]
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
        <section id="form_servicio" class="bottom_section">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-6">
                        <div
                            class="img_contacto"
                            v-if="
                                page.data.content[
                                    page.data.content.findIndex(
                                        x => x.name === 'Información'
                                    )
                                ].content_formatted.includes('image')
                            "
                        >
                            <img
                                class="lazyload"
                                :data-src="
                                    storageUrl +
                                        '/img/content/' +
                                        page.data.content[
                                            page.data.content.findIndex(
                                                x => x.name === 'Información'
                                            )
                                        ].content.find(x => x.field === 'image')
                                            .value
                                "
                                alt=""
                            />
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div v-if="!success">
                            <h3
                                v-if="
                                    page.data.content[
                                        page.data.content.findIndex(
                                            x => x.name === 'Información'
                                        )
                                    ].content_formatted.includes('title') &&
                                        page.data.content[
                                            page.data.content.findIndex(
                                                el => el.name === 'Información'
                                            )
                                        ].content.find(
                                            x => x.field === 'title'
                                        )['value_' + getLocale()]
                                "
                            >
                                {{
                                    page.data.content[
                                        page.data.content.findIndex(
                                            el => el.name === "Información"
                                        )
                                    ].content.find(x => x.field === "title")[
                                        "value_" + getLocale()
                                    ]
                                }}
                            </h3>
                            <div
                                v-if="
                                    page.data.content[
                                        page.data.content.findIndex(
                                            x => x.name === 'Información'
                                        )
                                    ].content_formatted.includes(
                                        'description'
                                    ) &&
                                        page.data.content[
                                            page.data.content.findIndex(
                                                el => el.name === 'Información'
                                            )
                                        ].content.find(
                                            x => x.field === 'description'
                                        )['value_' + getLocale()]
                                "
                                v-html="
                                    page.data.content[
                                        page.data.content.findIndex(
                                            el => el.name === 'Información'
                                        )
                                    ].content.find(
                                        x => x.field === 'description'
                                    )['value_' + getLocale()]
                                "
                            ></div>
                        </div>
                        <Form
                            :success-prop.sync="success"
                            :quantity="page.data.quantity"
                            :showServices="true"
                            :services="menu.services"
                        />
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>
<script>
import Banner from "./../components/Banner";
import Form from "./../components/Form";
export default {
    name: "Quotation",
    components: {
        Banner,
        Form
    },
    props: {
        storageUrl: { type: String }
    },
    computed: {
        menu() {
            return this.$store.getters.getMenu;
        }
    },
    data() {
        return {
            page: {
                data: {
                    page: {}
                }
            },
            success: false,
            loading: true
            // storageUrl: process.env.STORAGE_URL,
        };
    },
    methods: {
        async getData() {
            const { data } = await axios.get("/api/page/quotes", {
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
