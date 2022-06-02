@php
$services = $menu["services"];
$information = $menu["information"];
@endphp
<header class="" id="content_header">
    <nav class="navbar navbar-expand-lg position-relative" aria-label="Tenth navbar example">
        <div class="container-fluid" id="header_container">
            <h1>Header</h1>
            <!--div class="logo_dinet" id="header_logo_wrapper">
                <a href="{{ LaravelLocalization::localizeUrl('/') }}">
                    <img id="header_logo" class="" src="/storage/web/img/logo_dinet.png" alt="" />
                </a>
            </div>

            <div class="codigo_mobil">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <form-header locale="{{ Config::get('app.locale') }}" :desktop="false" link="{{ $information['api_url_tracking'] ? $information['api_url_tracking'] : '' }}" />
                    </li>
                </ul>
            </div>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMain" aria-controls="navbarMain" aria-expanded="false" aria-label="Toggle navigation">
                <i class="flaticon flaticon-boton-de-menu-de-tres-lineas-horizontales"></i>
            </button-->

            <!--div class="collapse navbar-collapse justify-content-end" id="navbarMain">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="{{ LaravelLocalization::getURLFromRouteNameTranslated( Config::get('app.locale') , 'routes.about') }}">
                            {{ __("Sobre Dinet") }}
                        </a>
                    </li>
                    <li class="nav-item dropdown">
                        <div class="list-servicios-mobil">
                            <a class="nav-link dropdown-toggle" href="{{ LaravelLocalization::getURLFromRouteNameTranslated( Config::get('app.locale') , 'routes.services') }}" id="navbarDropdown">
                                {{ __("Servicios") }}
                            </a>
                            <span class="icon-drop"><i class="flaticon-descargar"></i></span>
                        </div>
                        <div id="menu-mobil" class="dropdown-menu menu-hover dis-none">
                            @if(count($services))
                            <ul class="content-dropdown" aria-labelledby="navbarDropdown">
                                @foreach ($services as $service)
                                <li class="position-relative list-ser">
                                    <a class="dropdown-item" href="{{ LaravelLocalization::getURLFromRouteNameTranslated( Config::get('app.locale') , 'routes.service', [ 'slug' => $service['slug_'.Config::get('app.locale')] ] ) }}">
                                        @if($service["icon_colour"])
                                        <img height="34" src="{{ $storageUrl . '/img/services/' . $service['icon_colour'] }}" class="lazyload" alt="{{ $service['title_' . Config::get('app.locale')] }}" />
                                        @endif
                                        {{ $service["title_" . Config::get('app.locale')] }}
                                    </a>
                                </li>
                                @endforeach
                            </ul>
                            @endif
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="{{ LaravelLocalization::getURLFromRouteNameTranslated( Config::get('app.locale') , 'routes.branch-offices') }}">
                            {{ __("Sucursales") }}
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="{{ LaravelLocalization::getURLFromRouteNameTranslated( Config::get('app.locale') , 'routes.news') }}">
                            {{ __("Noticias") }}
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="{{ LaravelLocalization::getURLFromRouteNameTranslated( Config::get('app.locale') , 'routes.quotations') }}">
                            {{ __("Cotizaciones") }}
                        </a>
                    </li>
                    <li class="nav-item code-send hiden" id="header_code_send">
                        <form-header locale="{{ Config::get('app.locale') }}" :desktop="true" link="{{ $information['api_url_tracking'] ? $information['api_url_tracking'] : '' }}" />
                    </li>
                    @if(isset($information['customers_link']))
                    <li class="nav-item boton">
                        <a class="nav-link text-white text-center" href="{{ $information['customers_link'] }}" target="_blank">
                            {{ __("Acceso Clientes") }}
                        </a>
                    </li>
                    @endif

                    @if(Route::currentRouteName() == 'service' || Route::currentRouteName() == 'news-categories' || Route::currentRouteName() == 'new')
                    @else
                    <li class="nav-item">
                        <div class="dropdown drop-idioma">
                            <button id="dropdown-idioma" class="btn dropdown-toggle drop-idioma-select" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                <div class="drop-idioma-view">
                                    @php
                                    if(LaravelLocalization::getCurrentLocale() == 'en'){
                                    echo strtoupper(LaravelLocalization::getCurrentLocale());
                                    }
                                    else{
                                    echo 'ES';
                                    }
                                    @endphp
                                    @if(LaravelLocalization::getCurrentLocale() == 'en')
                                    <img src="{{ $storageUrl . '/web/img/bandera-'.LaravelLocalization::getCurrentLocale().'.png' }}" />
                                    @else
                                    <img src="{{ $storageUrl . '/web/img/bandera-es.png' }}" />
                                    @endif
                                </div>
                            </button>
                            <ul id="drop-idioma-options" class="dropdown-menu drop-idioma-option" aria-labelledby="dropdownMenuButton">
                                @foreach(LaravelLocalization::getSupportedLocales() as $localeCode => $properties)
                                    @if(LaravelLocalization::getCurrentLocale() != $localeCode )
                                    <li>
                                            @if(LaravelLocalization::getCurrentLocale() == 'en')
                                                <a class="dropdown-item" rel="alternate" hreflang="{{ $localeCode }}" 
                                                href="{{ LaravelLocalization::getLocalizedURL($localeCode, null, [], true) }}">
                                                    ES <img src="{{ $storageUrl . '/web/img/bandera-es.png'}}" /></a>
                                            @else
                                                <a class="dropdown-item" rel="alternate" hreflang="{{ $localeCode }}" 
                                                href="{{ LaravelLocalization::getLocalizedURL($localeCode, null, [], true) }}">
                                                    EN <img src="{{ $storageUrl . '/web/img/bandera-en.png'}}" /></a>
                                            @endif
                                    </li>
                                    @endif
                                @endforeach
                            </ul>
                        </div>
                    </li>
                    @endif
                </ul>
            </div-->


        </div>
    </nav>

</header>
@push('scripts')
<script type="text/javascript">
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
</script>
@endpush