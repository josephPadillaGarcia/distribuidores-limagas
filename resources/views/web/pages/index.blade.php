@extends('web.layouts.app')
@section('content')
@php
    $webUrl = config('services.web_url');
    $storageUrl = config('services.storage_url');
    $content = $data["content"];
    $services = $data["services"];
    $appTracking = $data["appTracking"];
    $tutos = $data["tutos"];
    $customers = $data["customers"];
    $footer = $data["footer"];
    $locale = $data["locale"];
    $routeLocale = $data["routeLocale"];
    $page = $data["page"];
@endphp
  <main>
        <section class="position-relative marginb_section section_bannerHome section_bannerHome_02" id="seccion_banner_global">
            @php
            $index_banner = array_search("Banner", array_column($content, 'name'));
            $banner = $content[$index_banner];

            $image_banner = "";
            if(in_array("image", $banner["content_formatted"])) {
              $index = array_search("image", array_column($banner["content"], 'field'));
              $image_banner = $storageUrl . '/img/content/' . $banner["content"][$index]["value"];
            }

            $video_banner = "";
            if(in_array("video", $banner["content_formatted"])) {
              $index = array_search("video", array_column($banner["content"], 'field'));
              $video_banner = $storageUrl . '/videos/pages/' . $banner["content"][$index]["value"];
            }
            @endphp
            <template>
                <video
                    ref="ref_video"
                    class="lazyload"
                    data-poster="{{ $image_banner }}"
                    loop
                    autoplay
                    muted
                    playsinline
                    preload="none"
                >
                  @if($video_banner)
                    <source
                        type="video/mp4"
                        src="{{ $video_banner }}"
                    />
                  @endif
                </video>
            </template>
            @php
            $description_banner = "";
            if(in_array('description', $banner["content_formatted"])) {
              $index = array_search("description", array_column($banner["content"], 'field'));
              $description_banner = $banner["content"][$index]["value_" . $locale];
            }
            @endphp
            <div class="container">
                <div class="row">
                    <div class="col-md-7 px-0">
                        <div class="content_banner">
                          @if($description_banner)
                            <div>
                              {!! $description_banner !!}
                            </div>
                            <form-index locale="{{ $locale }}" storage-url="{{ $storageUrl }}" link="{{ $footer['information']['api_url_tracking'] ? $footer['information']['api_url_tracking'] : '' }}"></form-index>
                          @endif
                        </div>
                    </div>
                </div>
            </div>
        </section>

        @if(count($services))
        <section
            id="seccion_slider_soluciones"
            class="bottom_section"
        >
            <div class="container">
                <div class="row">
                  @php
                    $index_servicios = array_search("Servicios", array_column($content, 'name'));
                    $servicios = $content[$index_servicios];

                    $title_servicios = "";
                    if(in_array('title',$servicios["content_formatted"])) {
                      $index = array_search("title", array_column($servicios["content"], 'field'));
                      $title_servicios = $servicios["content"][$index]["value_" . $locale];
                    }
                  @endphp
                    <div class="titulo_global">
                        <b>{{ __("Servicios") }}</b>
                        @if($title_servicios)
                        <h2>{{ $title_servicios }}</h2>
                        @endif
                    </div>

                    @if(count($services))
                    <div class="col-lg-12">
                        <div class="owl-carousel owl-theme carousel_saluciones position-relative">
                          @foreach ($services as $service)
                            <div>
                                <!-- ItemService -->
                                <div class="item">
                                    <a href="{!! Helper::getCustomRoute('web.service', $routeLocale, ['slug' => $service['slug_' . $locale] ? $service['slug_' . $locale] : $service['slug_es']]) !!}">
                                      @if($service["image"])
                                        <img class="lazyload" src="{{ $storageUrl . '/img/services/' . $service['image'] }}" alt="{{ 'Imagen ' . $service['title_' . $locale ]}}" />
                                      @endif
                                  </a>
                                    <div class="content_solucion position-relative">
                                        <span class="position-absolute icons-solucion">
                                          @if($service["icon_white"])
                                            <img class="lazyload" src="{{ $storageUrl . '/img/services/' . $service['icon_white'] }}" alt="{{ 'Icono ' . $service['title_' . $locale ]}}" />
                                          @endif
                                        </span>
                                        <b class="text-center">{{ $service["title_" . $locale] }}</b>
                                        <p class="text-center">{{ $service["excerpt_" . $locale] }}</p>
                                        <a href="{!! Helper::getCustomRoute('web.service', $routeLocale, ['slug' => $service['slug_' . $locale] ? $service['slug_' . $locale] : $service['slug_es']]) !!}" class="btn_global btn_border text-center btn_color_text">
                                            {{ __("Conoce más") }}
                                        </a>
                                    </div>
                                </div>
                                <!-- EndItemService -->
                            </div>
                          @endforeach
                        </div>
                    </div>
                    @endif
                </div>
            </div>
        </section>
        @endif

        @if($appTracking)
        <section id="section_rastreo" class="bottom_section lazyload position-relative rastreo">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 img_cinta">
                      @if($appTracking['image'])
                        <img src="{{ $storageUrl . '/img/app-tracking/' . $appTracking['image']}}" class="lazyload" alt="Dinet App"
                        />
                      @endif
                    </div>
                    <div class="col-lg-6 info_rastreo">
                        <div class="content_text_rastreo">
                          @if($appTracking['title_' . $locale])
                            <div>
                                {!! $appTracking['title_' . $locale] !!}
                            </div>
                          @endif
                          @if($appTracking['description_' . $locale])
                            <div>
                                {!! $appTracking['description_' . $locale] !!}
                            </div>
                          @endif
                        </div>
                        <div class="img_apps">
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

        @if(count($tutos))
        <section id="section_tutoriales" class="bottom_section">
            <div class="container">
                <div class="row">
                  @php
                    $index_tutoriales = array_search("Tutoriales", array_column($content, 'name'));
                    $tutoriales = $content[$index_tutoriales];

                    $subtitle_tutoriales = "";
                    if(in_array('subtitle', $tutoriales["content_formatted"])) {
                      $index = array_search("subtitle", array_column($tutoriales["content"], 'field'));
                      $subtitle_tutoriales = $tutoriales["content"][$index]["value_" . $locale];
                    }

                    $title_tutoriales = "";
                    if(in_array('title', $tutoriales["content_formatted"])) {
                      $index = array_search("title", array_column($tutoriales["content"], 'field'));
                      $title_tutoriales = $tutoriales["content"][$index]["value_" . $locale];
                    }
                  @endphp
                    <div class="titulo_global">
                      @if($subtitle_tutoriales)
                        <b>
                            {{ $subtitle_tutoriales }}
                        </b>
                      @endif
                      @if($title_tutoriales)
                        <h2>
                            {{ $title_tutoriales }}
                        </h2>
                      @endif
                    </div>
                  @foreach ($tutos as $tuto)
                    <div class="col-lg-6">
                        <div class="content_tutorial">
                            <img
                                class="img_tutorial lazyload"
                                src="{{ $storageUrl . '/img/tutorials/' . $tuto['image'] }}"
                                alt=""
                            />
                            <div class="caja_pregunta">
                                <p>{{ $tuto["title_" . $locale] }}</p>
                                <!-- <a class="position-relative fancybox" data-fancybox="Tutoriales" :href="el.link">$t("Ver video") -->
                                <a class="position-relative fancybox" data-fancybox="Tutoriales" href="{{ $tuto['link'] }}">
                                    {{ __("Ver video") }}
                                    <span class="position-absolute">
                                        <img src="/storage/web/img/flecha_iz.png" class="lazyload" alt=""/>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                  @endforeach

                  @php
                    $url_tutoriales = "";
                    if(in_array('url_tutos', $tutoriales["content_formatted"])) {
                      $index = array_search("url_tutos", array_column($tutoriales["content"], 'field'));
                      $url_tutoriales = $tutoriales["content"][$index]["value_es"];
                    }
                  @endphp
                  @if($url_tutoriales)
                    <div class="content_boton">
                        <a target="_blank" href="{{ $url_tutoriales }}" class="b_boton text-white text-center btn_global">
                            {{ __("Ver más tutoriales") }}
                        </a>
                    </div>
                  @endif
                </div>
            </div>
        </section>
        @endif

        @php
          $index_experience = array_search("Sumando experiencia en cada servicio", array_column($content, 'name'));
          $experience = $content[$index_experience];

          $title_experience = "";
          if(in_array('title', $experience["content_formatted"])) {
            $index = array_search("title", array_column($experience["content"], 'field'));
            $title_experience = $experience["content"][$index]["value_" . $locale];
          }

          $icon_a_experience = "";
          if(in_array('icon_1', $experience["content_formatted"])) {
            $index = array_search("icon_1", array_column($experience["content"], 'field'));
            $icon_a_experience = $storageUrl . '/img/content/' . $experience["content"][$index]["value"];
          }

          $count_a_experience = "";
          if(in_array('count_1', $experience["content_formatted"])) {
            $index = array_search("count_1", array_column($experience["content"], 'field'));
            $count_a_experience = $experience["content"][$index]["value_" . $locale];
          }

          $feature_a_experience = "";
          if(in_array('feature_1', $experience["content_formatted"])) {
            $index = array_search("feature_1", array_column($experience["content"], 'field'));
            $feature_a_experience = $experience["content"][$index]["value_" . $locale];
          }

          $icon_b_experience = "";
          if(in_array('icon_2', $experience["content_formatted"])) {
            $index = array_search("icon_2", array_column($experience["content"], 'field'));
            $icon_b_experience = $storageUrl . '/img/content/' . $experience["content"][$index]["value"];
          }

          $count_b_experience = "";
          if(in_array('count_2', $experience["content_formatted"])) {
            $index = array_search("count_2", array_column($experience["content"], 'field'));
            $count_b_experience = $experience["content"][$index]["value_" . $locale];
          }

          $feature_b_experience = "";
          if(in_array('feature_2', $experience["content_formatted"])) {
            $index = array_search("feature_2", array_column($experience["content"], 'field'));
            $feature_b_experience = $experience["content"][$index]["value_" . $locale];
          }

          $icon_c_experience = "";
          if(in_array('icon_3', $experience["content_formatted"])) {
            $index = array_search("icon_3", array_column($experience["content"], 'field'));
            $icon_c_experience = $storageUrl . '/img/content/' . $experience["content"][$index]["value"];
          }

          $count_c_experience = "";
          if(in_array('count_3', $experience["content_formatted"])) {
            $index = array_search("count_3", array_column($experience["content"], 'field'));
            $count_c_experience = $experience["content"][$index]["value_" . $locale];
          }

          $feature_c_experience = "";
          if(in_array('feature_3', $experience["content_formatted"])) {
            $index = array_search("feature_3", array_column($experience["content"], 'field'));
            $feature_c_experience = $experience["content"][$index]["value_" . $locale];
          }
        @endphp
        <section id="section_datos" class="lazyload" data-bg="/storage/web/img/fondo_mapa.png">
            <div class="container">
                <div class="row justify-content-between">
                    <div class="col-lg-6 col-md-12 grid align-center">
                        <div class="content_text_rastreo">
                          @if($title_experience)
                            <div>
                              {!! $title_experience !!}
                            </div>
                          @endif

                            <div class="row">
                                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 datos">
                                  @if($icon_a_experience)
                                    <img class="lazyload" src="{{ $icon_a_experience }}" alt="" />
                                  @endif

                                    <b style="{{ $count_a_experience ? 'display:block;' : 'display:none;' }}" class="counter">
                                        {{ $count_a_experience }}
                                    </b>

                                  @if($feature_a_experience)
                                    <p>
                                        {{ $feature_a_experience }}
                                    </p>
                                  @endif
                                </div>
                                
                                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 datos">
                                  @if($icon_b_experience)
                                    <img class="lazyload" src="{{ $icon_b_experience }}" alt="" />
                                  @endif

                                    <b style="{{ $count_b_experience ? 'display:block;' : 'display:none;' }}" class="counter">
                                        {{ $count_b_experience }}
                                    </b>

                                  @if($feature_b_experience)
                                    <p>
                                        {{ $feature_b_experience }}
                                    </p>
                                  @endif
                                </div>

                                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 datos">
                                  @if($icon_c_experience)
                                    <img class="lazyload" src="{{ $icon_c_experience }}" alt="" />
                                  @endif

                                    <b style="{{ $count_c_experience ? 'display:block;' : 'display:none;' }}" class="counter">
                                        {{ $count_c_experience }}
                                    </b>

                                  @if($feature_c_experience)
                                    <p>
                                        {{ $feature_c_experience }}
                                    </p>
                                  @endif
                                </div>
                            </div>
                        </div>
                    </div>
                  @php
                  $image_experience = "";
                  if(in_array('image', $experience["content_formatted"])) {
                    $index = array_search("image", array_column($experience["content"], 'field'));
                    $image_experience = $storageUrl . '/img/content/' . $experience["content"][$index]["value"];
                  }
                  @endphp
                    <div class="col-lg-5 col-md-5 grid align-end">
                      @if($image_experience)
                        <div class="img_dato">
                            <img class="lazyload" src="{{ $image_experience }}" alt="" />
                        </div>
                      @endif
                    </div>
                </div>
            </div>
        </section>

        @if(count($customers))
        <section id="section_clientes" class="bottom_section">
            <div class="container">
              @php
              $index_clientes = array_search("Nuestros Clientes", array_column($content, 'name'));
              $clientes = $content[$index_clientes];

              $title_clientes = "";
              if(in_array('title', $clientes["content_formatted"])) {
                $index = array_search("title", array_column($clientes["content"], 'field'));
                $title_clientes = $clientes["content"][$index]["value_" . $locale];
              }
              @endphp
                <div class="row">
                    <div class="titulo_global">
                      @if($title_clientes)
                        <h2>
                            {{ $title_clientes }}
                        </h2>
                      @endif
                    </div>
                    <div class="col-lg-12">
                        <div class="owl-carousel owl-theme carousel_clientes position-relative">
                            @foreach($customers as $customer)
                                <div class="item">
                                    <img class="lazyload" src="{{ $storageUrl . '/img/customers/' . $customer['image'] }}" alt="{{ $customer['name'] }}" />
                                </div>
                            @endforeach
                        </div>
                    </div>
                </div>
            </div>
        </section>
        @endif

        @php 
        $index_stores = array_search("Contamos con cuatro DARK STORE en lima para atender el e-commerce", array_column($content, 'name'));
        $stores = $content[$index_stores];

        $image_stores = "";
        if(in_array('image', $stores["content_formatted"])) {
          $index = array_search("image", array_column($stores["content"], 'field'));
          $image_stores = $storageUrl . '/img/content/' . $stores["content"][$index]["value"];
        }
        
        $text_stores = "";
        if(in_array('text', $stores["content_formatted"])) {
          $index = array_search("text", array_column($stores["content"], 'field'));
          $text_stores = $stores["content"][$index]["value_" . $locale];
        }
        @endphp
        <section id="section_darkstore" class="bottom_section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-5 grid align-center">
                        <div class="man-dinet">
                          @if($image_stores)
                            <img class="lazyload" src="{{ $image_stores }}" alt="" />
                          @endif
                        </div>
                    </div>
                    <div class="col-lg-7 grid align-center">
                        <div class="content_store">
                          @if($text_stores)
                            <div>
                              {!! $text_stores !!}
                            </div>
                          @endif

                          @php
                          $footer_information = $footer["information"] ? $footer["information"] : "";

                          $footer_contact_number = "";
                          if($footer_information) {
                            $footer_contact_number = $footer_information["contact_number"] ? $footer_information["contact_number"] : "";
                          }
                          @endphp
                            <div class="caja_botones">
                              @if($footer_contact_number)
                                <a href="{{ 'tel:+51' . $footer_contact_number }}" class="btn_global btn_border text-center btn_color_text">
                                  +51 {{ $footer_information["contact_number_format"] }}
                                </a>
                              @endif
                                <a
                                    href="{!! Helper::getCustomRoute('web.quotations', $routeLocale) !!}"
                                    class="b_boton text-white text-center btn_global"
                                >
                                    {{ __("Quiero cotizar") }}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
@endsection

@push('scripts')
<script type="text/javascript">
  $(document).ready(function () {
      $(".fancybox").fancybox();
      $(".counter").counterUp({
        delay: 10,
        time: 5000,
      });
      $(".carousel_clientes").owlCarousel({
        loop: true,
        lazyLoad: true,
        margin: 10,
        nav: true,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive: {
          0: {
            items: 2,
          },
          600: {
            items: 3,
          },
          1000: {
            items: 6,
          },
        },
      });
      $(".carousel_saluciones").owlCarousel({
        loop: true,
        lazyLoad: true,
        margin: 10,
        nav: true,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 2,
          },
          1000: {
            items: 3,
          },
        },
      });
    });
</script>
@endpush