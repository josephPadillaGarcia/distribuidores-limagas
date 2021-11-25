@extends('web.layouts.app')
@section('content')
@php
    $webUrl = config('services.web_url');
    $storageUrl = config('services.storage_url');
    $content = $data["content"];
    $services = $data["services"];
    $appTracking = $data["appTracking"];
    $page = $data["page"];
    $locale = "es";
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
        if(in_array("title", $banner["content_formatted"])) {
          $index = array_search("title", array_column($banner["content"], 'field'));
          $title_banner = $banner["content"][$index]["value_" . $locale];
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

      @if(count($services))
        <section id="section-servicios" class="bottom_section">
            <div class="container">
                <div class="row">
                  @foreach($services as $service)
                    <div class="col-lg-4">
                        <!-- ItemService -->
                        <div class="item">
                                    <a href="{{ route('web.service', $service['slug_' . $locale]) }}">
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
                                        <a href="{{ route('web.service', $service['slug_' . $locale]) }}" class="btn_global btn_border text-center btn_color_text">
                                            <!-- $t("Conoce más") -->
                                            Conoce más
                                        </a>
                                    </div>
                                </div>
                                <!-- EndItemService -->
                    </div>
                  @endforeach
                </div>
            </div>
        </section>
      @endif
      
      @if($appTracking)
        <section id="section_rastreo" class="paddingb_section lazyload position-relative rastreo">
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
    </main>
@endsection