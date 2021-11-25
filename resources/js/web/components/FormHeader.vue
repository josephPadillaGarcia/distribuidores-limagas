<template>
    <form @submit.prevent="goTo">
        <div
            class="codigo_envio position-relative"
            :class="{ 'no-mobil': desktop }"
        >
            <input
                type="text"
                :placeholder="t('Código de envío')"
                v-model="code"
                :id="
                    desktop
                        ? 'input_code_tracking'
                        : 'input_code_tracking_mobile'
                "
            />
            <button
                class="position-absolute"
                :id="
                    desktop ? 'span_code_tracking' : 'span_code_tracking_mobile'
                "
            >
                <img
                    class=""
                    src="/storage/web/img/codigo_blanco.png"
                    alt=""
                />
            </button>
        </div>
    </form>
</template>

<script>
export default {
    props: {
        desktop: { type: Boolean, default: false },
        link: { type: String },
        locale: { type: String },
    },
    data() {
        return {
            code: ""
        };
    },
    methods: {
        t(name){
            return this.$t(name, this.locale);
        },
        goTo() {
            if (this.code.length != 20) {
                return false;
            }
            if (
                this.menu.information &&
                this.menu.information.api_url_tracking
            ) {
                let link = this.menu.information.api_url_tracking + this.code;
                window.open(link, "_blank");
            }
        }
    }
};
</script>
