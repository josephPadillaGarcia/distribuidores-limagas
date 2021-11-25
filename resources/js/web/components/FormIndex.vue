<template>
    <form @submit.prevent="goTo">
        <div class="content_input_search position-relative">
            <input
                class="input_search"
                type="text"
                v-model="code_banner"
                :placeholder="t('Escribe el código de envío')"
            />
            <span class="position-absolute"><img src="/storage/web/img/rastreo.png" alt=""/></span>
            <button class="b_boton text-white position-absolute btn_global">
                <b>{{ t('Buscar') }}</b>
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
</template>

<script>
export default {
    name: "FormIndex",
    props: {
        storageUrl: { type: String },
        locale: { type: String }
    },
    data() {
        return {
            code_banner: "",
            message_error: ""
        };
    },
    methods: {
        t(name){
            return this.$t(name, this.locale);
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
    }
};
</script>

<style lang="scss" scoped></style>
