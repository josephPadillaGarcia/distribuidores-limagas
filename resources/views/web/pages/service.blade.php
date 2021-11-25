@extends('web.layouts.app')
@section('content')
@php
    $webUrl = config('services.web_url');
    $storageUrl = config('services.storage_url');
    $content = $data["content"];
    $privacy = $data["privacy"];
    $services = $data["services"];
    $service = $data["service"];
    $contentQuotes = $data["contentQuotes"];
    $quantity = $data["quantity"];
    $appTracking = $data["appTracking"];
    $page = $data["page"];
    $locale = $data["locale"];
    $routeLocale = $data["routeLocale"];
@endphp
    <main>
      @php
        $index_banner = array_search("Banner", array_column($content, 'name'));
        $banner = $content[$index_banner];

        $image_banner = "";
        if(in_array("image", $banner["content_formatted"])) {
          $index = array_search("image", array_column($banner["content"], 'field'));
          $image_banner = $storageUrl . '/img/content/' . $banner["content"][$index]["value"];
        }

        $title_banner = "";
        if($service["title_" . $locale]) {
          $title_banner = $service["title_" . $locale];
        }
      @endphp
        <!-- Banner-->
        <section
            class="lazyload position-relative bottom_section section_bannerNosotros"
            data-bg="{{ $image_banner }}"
            id="seccion_banner_global"
        >
            <div class="mb-4 rounded ">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-md-12 px-0">
                            <div class="content_banner">
                                <h1 class="titulo text-center titulo_banner">{{ $title_banner }}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- End Banner -->

        <section id="section_video_nosotros" class="bottom_section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-md-12">
                        <div class="video_nosotros position-relative">
                            <img class="lazyload" data-src="{{ $storageUrl . '/img/services/' . $service['image'] }}" alt="" />
                          @if($service["url_video"])
                            <div class="icon_play position-absolute">
                                <a class="fancybox" href="{{ $service['url_video'] }}" data-fancybox="Servicio">
                                    <img class="lazyload" src="/storage/web/img/icon_play.png" alt="" />
                                </a>
                            </div>
                          @endif
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="content_info_video">
                            {!! $service['description_' . $locale] !!}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="form_servicio" class="bottom_section">
            <div class="container">
                <div class="row justify-content-center">
                  @php
                    $index_informacion = array_search("Información", array_column($contentQuotes, 'name'));
                    $informacion = $contentQuotes[$index_informacion];

                    $title_informacion = "";
                    if(in_array("title", $informacion["content_formatted"])) {
                      $index = array_search("title", array_column($informacion["content"], 'field'));
                      $title_informacion = $informacion["content"][$index]["value_" . $locale];
                    }
                  @endphp
                  <form-quote
                    title="{{ $title_informacion }}"
                    locale="{{ $locale }}"
                    :with-description="false"
                    :show-services="false"
                    :quantity="{{ $quantity }}"
                    :services="{{ $services }}"
                  />
                </div>
            </div>
        </section>

      @if($appTracking)
        <section id="section_rastreov2" class="bottom_section">
            <div class="container position-relative rastreo">
                <div class="row lazyload">
                    <div class="col-lg-4">
                        <div class="img-rastreov2">
                          @if($appTracking['image'])
                            <img class="lazyload" alt="Dinet App" data-src="{{ $storageUrl . '/img/app-tracking/' . $appTracking['image'] }}" />
                          @endif
                        </div>
                    </div>
                    <div class="col-lg-4 grid align-center">
                        <div class="content_text_rastreo">
                          @if($appTracking['title_' . $locale])
                            <div>
                              {!! $appTracking['title_' . $locale] !!}
                            </div>
                          @endif
                        </div>
                    </div>
                    <div class="col-lg-4 grid align-center">
                        <div class="img_apps grid justify-center">
                          @if($appTracking['link_ios'])
                            <a href="{{ $appTracking['link_ios'] }}" target="_blank">
                                <img src="/storage/web/img/app_apple.png" class="lazyload" alt="" />
                            </a>
                          @endif
                          @if($appTracking['link_android'])
                            <a href="{{ $appTracking['link_android'] }}" target="_blank">
                                <img src="/storage/web/img/app_google.png" class="lazyload" alt="" />
                            </a>
                          @endif
                        </div>
                    </div>
                </div>
            </div>
        </section>
      @endif

      @if(count($services))
        <section id="seccion_slider_soluciones" class="bottom_section">
            <div class="container">
                <div class="row">
                    <div class="titulo_global">
                        <!-- <b> $t("Servicios") </b> -->
                        <b>Servicios</b>
                        <!-- <h2 class=""> $t("Otras soluciones") </h2> -->
                        <h2 class="">Otras soluciones</h2>
                    </div>

                    <div class="col-lg-12">
                        <div class="owl-carousel owl-theme carousel_saluciones position-relative">
                          @foreach($services as $serv)
                            <!-- ItemService -->
                            <div class="item">
                                    <a href="{!! Helper::getCustomRoute('web.service', $routeLocale, ['slug' => $service['slug_' . $locale] ? $service['slug_' . $locale] : $service['slug_es']]) !!}">
                                      @if($serv["image"])
                                        <img class="lazyload" src="{{ $storageUrl . '/img/services/' . $serv['image'] }}" alt="{{ 'Imagen ' . $serv['title_' . $locale ]}}" />
                                      @endif
                                  </a>
                                    <div class="content_solucion position-relative">
                                        <span class="position-absolute icons-solucion">
                                          @if($serv["icon_white"])
                                            <img class="lazyload" src="{{ $storageUrl . '/img/services/' . $serv['icon_white'] }}" alt="{{ 'Icono ' . $serv['title_' . $locale ]}}" />
                                          @endif
                                        </span>
                                        <b class="text-center">{{ $serv["title_" . $locale] }}</b>
                                        <p class="text-center">{{ $serv["excerpt_" . $locale] }}</p>
                                        <a href="{!! Helper::getCustomRoute('web.service', $routeLocale, ['slug' => $service['slug_' . $locale] ? $service['slug_' . $locale] : $service['slug_es']]) !!}" class="btn_global btn_border text-center btn_color_text">
                                            <!-- $t("Conoce más") -->
                                            Conoce más
                                        </a>
                                    </div>
                                </div>
                                <!-- EndItemService -->
                          @endforeach
                        </div>
                    </div>
                </div>
            </div>
        </section>
      @endif
    </main>
@endsection