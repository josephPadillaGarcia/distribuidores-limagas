<template>
    <div class="item">
        <a
            :href="
                localePath({
                    name: 'services',
                    params: { slug: data['slug_' + getLocale()] }
                })
            "
            ><img
                v-if="data.image"
                class="lazyload"
                :src="storageUrl + '/img/services/' + data.image"
                :alt="'Imagen ' + data['title_' + getLocale()]"
        /></a>
        <div class="content_solucion position-relative">
            <span class="position-absolute icons-solucion">
                <img
                    v-if="data.icon_white"
                    class="lazyload"
                    :src="storageUrl + '/img/services/' + data.icon_white"
                    :alt="'Icono ' + data['title_' + getLocale()]"
                />
            </span>
            <b class="text-center">{{ data["title_" + getLocale()] }}</b>
            <p class="text-center">{{ data["excerpt_" + getLocale()] }}</p>
            <a
                :href="
                    localePath({
                        name: 'services',
                        params: { slug: data['slug_' + getLocale()] }
                    })
                "
                class="btn_global btn_border text-center btn_color_text"
                >
                <!-- {{ $t("Conoce más") }} -->
                Conoce más
                </a
            >
        </div>
    </div>
</template>
<script>
export default {
    name: "ItemService",
    props: {
        data: Object,
        storageUrl: String
    },
    data() {
        return {
        };
    }
};
</script>
