<template>
    <main class="main_page" v-if="!loading">
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
        >
        </Banner>

        <section id="section-politica" class="bottom_section">
            <div class="container">
                <div class="row">
                    <div
                        class="content-politica"
                        v-if="
                            page.data.content[
                                page.data.content.findIndex(
                                    x => x.name === 'Información'
                                )
                            ].content_formatted.includes('description') &&
                                page.data.content[
                                    page.data.content.findIndex(
                                        el => el.name === 'Información'
                                    )
                                ].content.find(x => x.field === 'description')[
                                    'value_' + getLocale()
                                ]
                        "
                        v-html="
                            page.data.content[
                                page.data.content.findIndex(
                                    el => el.name === 'Información'
                                )
                            ].content.find(x => x.field === 'description')[
                                'value_' + getLocale()
                            ]
                        "
                    ></div>
                </div>
            </div>
        </section>
    </main>
</template>
<script>
import Banner from "./../components/Banner";
export default {
    name: "PrivacyPolicies",
    components: {
        Banner
    },
    props: {
        storageUrl: { type: String }
    },
    // nuxtI18n: {
    //   paths: {
    //     en: "/privacy-policies",
    //     es: "/politicas-privacidad",
    //   },
    // },
    // head() {
    //   return {
    //     htmlAttrs: {
    //       lang: this.getLocale() == 'en' ? this.getLocale()+'_US' : this.getLocale()+'_PE'
    //     },
    //     title: this.page.data.page["title_"+this.getLocale()] ? this.page.data.page["title_"+this.getLocale()] : "",
    //     meta: [
    //       {
    //         hid: "description",
    //         name: "description",
    //         content: this.page.data.page['seo_description_'+this.getLocale()]
    //           ? this.page.data.page['seo_description_'+this.getLocale()]
    //           : ""
    //       },
    //       {
    //         itemprop: "name",
    //         content: this.page.data.page['title_'+this.getLocale()] ? this.page.data.page['title_'+this.getLocale()] : ""
    //       },
    //       {
    //         itemprop: "description",
    //         content: this.page.data.page['seo_description_'+this.getLocale()]
    //           ? this.page.data.page['seo_description_'+this.getLocale()]
    //           : ""
    //       },
    //       {
    //         itemprop: "image",
    //         content: this.page.data.page['seo_image']
    //           ? process.env.STORAGE_URL +
    //             "/img/pages/" +
    //             this.page.data.page['seo_image']
    //           : ""
    //       },
    //       {
    //         name: "keywords",
    //         content: this.page.data.page['seo_keywords_'+this.getLocale()]
    //           ? this.page.data.page['seo_keywords_'+this.getLocale()]
    //           : ""
    //       },
    //       { name: "og:url", content: process.env.BASE_URL+this.$route.path  },
    //       { name: "og:type", content: "website" },
    //       {
    //         name: "og:title",
    //         content: this.page.data.page['title_'+this.getLocale()] ? this.page.data.page['title_'+this.getLocale()] : ""
    //       },
    //       {
    //         name: "og:description",
    //         content: this.page.data.page['seo_description_'+this.getLocale()]
    //           ? this.page.data.page['seo_description_'+this.getLocale()]
    //           : ""
    //       },
    //       {
    //         name: "og:image",
    //         content: this.page.data.page['seo_image']
    //           ? process.env.STORAGE_URL +
    //             "/img/pages/" +
    //             this.page.data.page['seo_image']
    //           : ""
    //       },
    //       { name: "twitter:card", content: "summary_large_image" },
    //       {
    //         name: "twitter:title",
    //         content: this.page.data.page['title_'+this.getLocale()] ? this.page.data.page['title_'+this.getLocale()] : ""
    //       },
    //       {
    //         name: "twitter:description",
    //         content: this.page.data.page['seo_description_'+this.getLocale()]
    //           ? this.page.data.page['seo_description_'+this.getLocale()]
    //           : ""
    //       },
    //       {
    //         name: "twitter:image",
    //         content: this.page.data.page['seo_image']
    //           ? process.env.STORAGE_URL +
    //             "/img/pages/" +
    //             this.page.data.page['seo_image']
    //           : ""
    //       }
    //     ]
    //   };
    // },
    data() {
        return {
            page: {},
            loading: true
        };
    },
    methods: {
        async getData() {
            const { data } = await axios.get("/api/page/privacy-policies", {
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
