<template>
    <section
        class="lazyload position-relative bottom_section section_bannerNosotros"
        :data-bg="banner ? storageUrl + '/img/content/' + banner : ''"
        :class="classes"
        id="seccion_banner_global"
    >
        <div class="mb-4 rounded ">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-5 px-0">
                        <div class="content_banner">
                            <h1 class="titulo text-center titulo_banner">
                                {{ title }}
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: "Banner",
    props: {
        classes: String,
        title: String,
        banner: String,
        storageUrl: String,
    },
    data() {
        return {
            // storageUrl: process.env.STORAGE_URL
        };
    }
};
</script>
