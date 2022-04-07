<template>
    <transition name="slide-fade">
        <div v-if="success" key="true" class="form__text-success-2">
            <h3>
                <b>¡{{ t("Excelente") }}!</b>
            </h3>
            <p>
                {{
                    t(
                        "Hemos registrado tus datos con éxito. Pronto nos pondremos contacto contigo."
                    )
                }}.
            </p>
            <b>¡{{ t("Gracias por solicitar información") }}!</b>
        </div>
        <form @submit.prevent="submit" v-else>
            <div class="row">
                <div class="col-lg-6">
                    <div class="grupo-form">
                        <label for="name">{{ t("Nombre y Apellidos") }}*</label>
                        <input type="text" id="name" v-model="form.name" />
                        <span
                            class="error error-red"
                            v-if="errors && errors.name"
                            for="name"
                        >
                            {{ t(errors.name[0]) }}
                        </span>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="grupo-form">
                        <label for="email">{{ t("Correo electrónico") }}*</label>
                        <input type="text" id="email" v-model="form.email" />
                        <span
                            class="error error-red"
                            v-if="errors && errors.email"
                            for="email"
                        >
                            {{ t(errors.email[0]) }}
                        </span>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-6">
                    <div class="grupo-form">
                        <label for="celular">{{ t("Celular") }}*</label>
                        <input
                            type="number"
                            id="celular"
                            v-model="form.mobile"
                        />
                        <span
                            class="error error-red"
                            v-if="errors && errors.mobile"
                            for="mobile"
                        >
                            {{ t(errors.mobile[0]) }}
                        </span>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="grupo-form">
                        <label for="business">{{ t("Empresa") }}*</label>
                        <input
                            type="text"
                            id="business"
                            v-model="form.business"
                        />
                        <span
                            class="error error-red"
                            v-if="errors && errors.business"
                            for="business"
                        >
                            {{ t(errors.business[0]) }}
                        </span>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="grupo-form">
                        <label for="quantity_packages">
                            {{ t("Cantidad estimada de paquetes mensuales") }}:
                        </label>
                        <select
                            v-model="form.quantity_packages"
                            id="quantity_packages"
                            class="form-select"
                        >
                            <option value="" selected>{{ t("Selecciona") }}</option>
                            <option
                                :value="el.name_es"
                                v-for="el in quantity"
                                :key="el.id"
                            >
                                {{ el["name_" + locale] }}
                            </option>
                        </select>
                        <span
                            class="error error-red"
                            v-if="errors && errors.quantity_packages"
                            for="quantity_packages"
                        >
                            {{ t(errors.quantity_packages[0]) }}
                        </span>
                    </div>
                </div>
            </div>
            <div class="row" v-if="showServices">
                <div class="col-lg-12">
                    <div class="grupo-form">
                        <label for="service">{{ t("Tipo de Servicio") }}:</label>
                        <select
                            v-model="form.service_id"
                            id="service"
                            class="form-select"
                        >
                            <option value="" selected>{{ t("Selecciona") }}</option>
                            <option
                                :value="el.id"
                                v-for="el in services"
                                :key="el.id"
                            >
                                {{ el["title_" + locale] }}
                            </option>
                        </select>
                        <span
                            class="error error-red"
                            v-if="errors && errors.service_id"
                            for="service_id"
                        >
                            {{ t(errors.service_id[0]) }}
                        </span>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="grupo-form">
                        <input
                            class="form-check-input"
                            type="checkbox"
                            v-model="form.accepted"
                            id="accepted"
                            checked
                        />
                        <label class="form-check-label" for="accepted">
                            {{ t("Acepto las") }}
                            <a :href="localePath('politicas-privacidad', locale)">
                                {{ t("políticas de privacidad web") }}
                            </a> </label
                        ><span
                            class="error error-red"
                            v-if="errors && errors.accepted"
                            for="accepted"
                        >
                            {{ t(errors.accepted[0]) }}
                        </span>
                    </div>
                </div>
            </div>
            <div>
                <vue-recaptcha 
                    ref="recaptcha" 
                    @verify="onVerify"
                    :sitekey="sitekey" 
                />
                
                <div class="message-error" v-if="errorCaptcha">
                    {{ errorCaptcha }}
                </div>
                <div class="message-error" v-if="messageCaptcha">
                    {{ messageCaptcha }}
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <button
                        type="submit"
                        :class="request ? 'btn--opacity' : ''"
                        :disabled="request"
                    >
                        {{ request ? t("Cargando") + "..." : t("Enviar") }}
                    </button>
                </div>
            </div>
        </form>
    </transition>
</template>
<script>
import { VueRecaptcha } from 'vue-recaptcha';
export default {
    components: {
        VueRecaptcha,
    },
    props: {
        quantity: Array,
        services: Array,
        service: Object,
        locale: String,
        showServices: {
            default: false,
            type: Boolean
        }
    },
    data() {
        return {
            request: false,
            success: false,
            form: {
                name: "",
                quantity_packages: "",
                service_id: "",
                accepted: true
            },
            leadform: {
                name:"",
                email:"",
                mobile: "",
                business: "",
                quantity_packages: "",
                service_id: "",
            },
            errors: {},
            sitekey: process.env.MIX_SITE_KEY,
            messageCaptcha: "",
            captchaPass: false,
            errorCaptcha: "",
        };
    },
    methods: {
        t(name) {
            return this.$t(name, this.locale);
        },
        submit() {
            if (!this.captchaPass) {
                this.errorCaptcha = "Debes completar el captcha.";
                return false;
            }
            this.request = true;
            this.form.isPage = this.showServices;
            if (!this.showServices) {
                this.form.service_id = this.service.id;
            }

            axios
                .post("/api/post/lead", this.form)
                .then(response => {
                    this.request = false;
                    this.success = true;
                })
                .catch(error => {
                    this.request = false;
                    if (error.response.status === 422) {
                        this.errors = error.response.data.errors || {};
                        return;
                    }
                });
        },

        onVerify(response) {
            if(response.length == 0){
                this.messageCaptcha = "Por favor, completa el captcha.";
                this.$refs.recaptcha.reset();
            }
            else{
                this.messageCaptcha = "";
                this.captchaPass = true;
            }
        },

    },
    watch: {
        success: function(newValue, oldValue) {
            this.$emit("update:successProp", Boolean(newValue));
        }
    },  
    /*mounted () {
        this.sitekey = process.env.MIX_SITE_KEY;
    }*/
};
</script>
