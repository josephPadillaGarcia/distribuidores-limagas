<template>
    <section id="section_clientes">
        <div class="container">
            <div class="row">
                <div class="titulo_global">
                    <h2
                        class=""
                        v-if="
                            content[
                                content.findIndex(
                                    x => x.name === 'Nuestros Clientes'
                                )
                            ].content_formatted.includes('title') &&
                                content[
                                    content.findIndex(
                                        el => el.name === 'Nuestros Clientes'
                                    )
                                ].content.find(x => x.field === 'title')[
                                    'value_' + getLocale()
                                ]
                        "
                    >
                        {{
                            content[
                                content.findIndex(
                                    el => el.name === "Nuestros Clientes"
                                )
                            ].content.find(x => x.field === "title")[
                                "value_" + getLocale()
                            ]
                        }}
                    </h2>
                </div>
                <div class="col-lg-12">
                        <carousel
                            :loop="true"
                            :margin="10"
                            :nav="true"
                            :autoplay="true"
                            :autoplayTimeout="3000"
                            :responsive="{0:{items: 2},600:{items: 3},1000:{items: 6}}"
                            class="carousel_clientes position-relative"
                            responsiveBaseElement="body"
                        >
                            <template slot="prev"><span class="prev">‹</span></template>

                            <div
                                class="item"
                                v-for="i in customers"
                                :key="'cus' + i.id"
                            >
                                <img
                                    class="lazyload"
                                    :src="
                                        storageUrl + '/img/customers/' + i.image
                                    "
                                    :alt="i.name"
                                />
                            </div>
                            
                            <template slot="next"><span class="next">›</span></template>
                        </carousel>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import carousel from 'vue-owl-carousel2'
export default {
    props: {
        customers: Array,
        content: Array,
        storageUrl: String
    },
    components: {
        carousel
    },
    data() {
        return {
            // storageUrl: process.env.STORAGE_URL
        };
    }
};
</script>
