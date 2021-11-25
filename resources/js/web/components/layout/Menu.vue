<template>
    <header class="fixed-top" id="content_header" v-if="menuLoaded">
        <nav
            class="navbar navbar-expand-lg position-relative"
            aria-label="Tenth navbar example"
        >
            <div class="container-fluid" id="header_container">
                <div class="logo_dinet" id="header_logo_wrapper">
                    <a :href="localePath({ name: '' })">
                        <img
                            id="header_logo"
                            class=""
                            :src="'/storage/web/img/logo_dinet.png'"
                            alt=""
                        />
                    </a>
                </div>

                <div class="codigo_mobil" id="navbarMain">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <!-- <form @submit.prevent="goTo">
                                <div class="codigo_envio position-relative">
                                    <input
                                        type="text"
                                        placeholder="Código de envío"
                                        v-model="code"
                                    />
                                    <button class="position-absolute">
                                        <img
                                            class=""
                                            :src="
                                                '/storage/web/img/codigo_blanco.png'
                                            "
                                            alt=""
                                        />
                                    </button>
                                </div>
                            </form> -->
                        </li>
                    </ul>
                </div>

                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarMain"
                    aria-controls="navbarMain"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <i
                        class="flaticon flaticon-boton-de-menu-de-tres-lineas-horizontales"
                    ></i>
                </button>

                <div
                    class="collapse navbar-collapse justify-content-end"
                    id="navbarMain"
                >
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a
                                class="nav-link"
                                :href="localePath({ name: 'about-us' })"
                                >Sobre Dinet</a
                            >
                        </li>
                        <li class="nav-item dropdown">
                            <div class="list-servicios-mobil">
                                <a
                                    class="nav-link dropdown-toggle"
                                    :href="localePath({ name: 'services' })"
                                    id="navbarDropdown"
                                >
                                    Servicios
                                </a>
                                <span class="icon-drop"
                                    ><i class="flaticon-descargar"></i
                                ></span>
                            </div>
                            <div
                                id="menu-mobil"
                                class="dropdown-menu menu-hover dis-none"
                            >
                                <ul
                                    class="content-dropdown"
                                    aria-labelledby="navbarDropdown"
                                    v-if="menu.services.length"
                                >
                                    <li
                                        class="position-relative list-ser"
                                        v-for="el in menu.services"
                                        :key="el.i + 'ss'"
                                    >
                                        <a
                                            class="dropdown-item"
                                            :href="
                                                localePath({
                                                    name: 'services',
                                                    params: {
                                                        slug:
                                                            el[
                                                                'slug_' +
                                                                    getLocale()
                                                            ]
                                                    }
                                                })
                                            "
                                            ><img
                                                v-if="el.icon_colour"
                                                height="34"
                                                :src="
                                                    storageUrl +
                                                        '/img/services/' +
                                                        el.icon_colour
                                                "
                                                class="lazyload"
                                                :alt="
                                                    el['title_' + getLocale()]
                                                "
                                            />
                                            {{ el["title_" + getLocale()] }}</a
                                        >
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="nav-item">
                            <a
                                class="nav-link"
                                :href="localePath({ name: 'quotations' })"
                            >
                                <!-- {{ $t('Cotizaciones')}} -->
                                Cotizaciones
                            </a>
                        </li>
                        <li
                            class="nav-item code-send hiden"
                            id="header_code_send"
                        >
                            <form @submit.prevent="goTo">
                                <div
                                    class="codigo_envio position-relative no-mobil"
                                >
                                    <input
                                        v-model="code"
                                        type="text"
                                        placeholder="Código de envío"
                                        id="input_code_tracking"
                                    />
                                    <button
                                        class="position-absolute"
                                        id="span_code_tracking"
                                    >
                                        <img
                                            class=""
                                            :src="
                                                '/storage/web/img/codigo_blanco.png'
                                            "
                                            alt=""
                                        />
                                    </button>
                                </div>
                            </form>
                        </li>
                        <li
                            class="nav-item boton b_boton"
                            v-if="
                                menu.information &&
                                    menu.information.customers_link
                            "
                        >
                            <a
                                class="nav-link text-white text-center"
                                :href="menu.information.customers_link"
                                target="_blank"
                            >
                                <!-- {{ $t("Acceso Clientes") }} -->
                                Acceso Clientes
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    name: "WebMenu",
    props: {
        storageUrl: { type: String }
    },
    computed: {
        availableLocales() {
            // return this.getLocale().filter((i) => i.code !== this.getLocale());
            return this.getLocales().filter(i => i.code !== this.getLocale());
        },
        menu() {
            return this.$store.getters.getMenu;
        },
        menuLoaded() {
            return this.$store.getters.getMenuLoaded;
        }
    },
    data() {
        return {
            code: ""
        };
    },
    methods: {
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
    },
    mounted() {
        $(document).ready(function() {
            $("ul.navbar-nav li.dropdown").hover(
                function() {
                    $(this)
                        .find(".dropdown-menu")
                        .stop(true, true)
                        .delay(200)
                        .fadeIn(500);
                },
                function() {
                    $(this)
                        .find(".dropdown-menu")
                        .stop(true, true)
                        .delay(200)
                        .fadeOut(500);
                }
            );
        });
    }
};
</script>
