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
        <section
            id="section-servicios"
            class="bottom_section"
            v-if="page.data.services.length"
        >
            <div class="container">
                <div class="row">
                    <div
                        class="col-lg-4"
                        v-for="i in page.data.services"
                        :key="i.id + 's'"
                    >
                        <ItemService :storageUrl="storageUrl" :data="i" />
                    </div>
                </div>
            </div>
        </section>
        <AppTracking
            class="paddingb_section"
            v-if="page.data.appTracking"
            :data="page.data.appTracking"
            :storageUrl="storageUrl"
        />
    </main>
</template>
<script>
import Banner from "./../components/Banner";
import AppTracking from "./../components/AppTracking";
import ItemService from "./../components/items/ItemService";
export default {
    name: "Services",
    props: {
        storageUrl: { type: String }
    },
    components: {
        AppTracking,
        Banner,
        ItemService
    },
    data() {
        return {
            page: {
                data: {
                    page: {}
                }
            },
            loading: true,
            // storageUrl: process.env.STORAGE_URL
        };
    },
    methods: {
        async getData() {
            const { data } = await axios.get("/api/page/services", {
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
