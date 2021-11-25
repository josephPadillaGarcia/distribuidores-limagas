@php
$services = $menu["services"];
$information = $menu["information"];
$locale = $menu["locale"];
$routeLocale = $menu["routeLocale"];
@endphp
<header class="fixed-top" id="content_header">
    <nav class="navbar navbar-expand-lg position-relative" aria-label="Tenth navbar example">
        <div class="container-fluid" id="header_container">
            <div class="logo_dinet" id="header_logo_wrapper">
                <a href="{!! Helper::getCustomRoute('web.index', $routeLocale) !!}">
                    <img id="header_logo" class="" src="/storage/web/img/logo_dinet.png" alt="" />
                </a>
            </div>

            <div class="codigo_mobil">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <form-header :desktop="false" link="{{ $information['api_url_tracking'] ? $information['api_url_tracking'] : '' }}" />
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
                <i class="flaticon flaticon-boton-de-menu-de-tres-lineas-horizontales"></i>
            </button>

            <div class="collapse navbar-collapse justify-content-end" id="navbarMain">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="{!! Helper::getCustomRoute('web.aboutUs', $routeLocale) !!}">Sobre Dinet</a>
                    </li>
                    <li class="nav-item dropdown">
                        <div class="list-servicios-mobil">
                            <a class="nav-link dropdown-toggle" href="{!! Helper::getCustomRoute('web.services', $routeLocale) !!}" id="navbarDropdown">
                                Servicios
                            </a>
                            <span class="icon-drop"><i class="flaticon-descargar"></i></span>
                        </div>
                        <div id="menu-mobil" class="dropdown-menu menu-hover dis-none">
                            @if(count($services))
                            <ul class="content-dropdown" aria-labelledby="navbarDropdown">
                                @foreach ($services as $service)
                                <li class="position-relative list-ser">
                                    <a class="dropdown-item" href="{!! Helper::getCustomRoute('web.service', $routeLocale, ['slug' => $service['slug_' . $locale] ? $service['slug_' . $locale] : $service['slug_es']]) !!}">
                                        @if($service["icon_colour"])
                                        <img
                                            height="34"
                                            src="{{ $storageUrl . '/img/services/' . $service['icon_colour'] }}"
                                            class="lazyload"
                                            alt="{{ $service['title_' . $locale] }}"
                                        />
                                        @endif
                                        {{ $service["title_" . $locale] }}
                                    </a>
                                </li>
                                @endforeach
                            </ul>
                            @endif
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="{!! Helper::getCustomRoute('web.quotations', $routeLocale) !!}">
                            <!-- $t('Cotizaciones') -->
                            Cotizaciones
                        </a>
                    </li>
                    <li class="nav-item code-send hiden" id="header_code_send">
                        <form-header :desktop="true" link="{{ $information['api_url_tracking'] ? $information['api_url_tracking'] : '' }}" />
                    </li>
                    @if(isset($information['customers_link']))
                    <li class="nav-item boton">
                        <a class="nav-link text-white text-center" href="{{ $information['customers_link'] }}" target="_blank">
                            <!-- $t("Acceso Clientes") -->
                            Acceso Clientes
                        </a>
                    </li>
                    @endif
                </ul>
            </div>
        </div>
    </nav>
</header>
@push('scripts')
<script type="text/javascript">
    $(document).ready(function () {
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
</script>
@endpush