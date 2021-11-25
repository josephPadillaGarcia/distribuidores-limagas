<template>
    <section
        id="section_rastreo"
        class="lazyload"
        :data-bg="'/storage/web/img/cinta.png'"
    >
        <div class="container">
            <div class="row">
                <div class="col-lg-6 img_cinta">
                    <img
                        :src="
                            storageUrl + '/img/app-tracking/' + data.image
                        "
                        class="lazyload"
                        v-if="data.image"
                        alt="Dinet App"
                    />
                </div>
                <div class="col-lg-6 info_rastreo">
                    <div class="content_text_rastreo">
                        <div
                            v-html="data['title_' + getLocale()]"
                            v-if="data['title_' + getLocale()]"
                        ></div>
                        <div
                            v-html="data['description_' + getLocale()]"
                            v-if="data['description_' + getLocale()]"
                        ></div>
                    </div>
                    <div class="img_apps">
                        <a
                            :href="data.link_ios"
                            target="_blank"
                            v-if="data.link_ios"
                            ><img
                                :src="'/storage/web/img/app_apple.png'"
                                class="lazyload"
                                alt=""
                        /></a>
                        <a
                            :href="data.link_android"
                            target="_blank"
                            v-if="data.link_android"
                            ><img
                                :src="'/storage/web/img/app_google.png'"
                                class="lazyload"
                                alt=""
                        /></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: "AppTracking",
    props: {
        data: Object,
        storageUrl: String
    },
    data() {
        return {
            // storageUrl: process.env.STORAGE_URL
        };
    }
};
</script>
