@extends('web.layouts.app')
@section('content')
@php
    $webUrl = config('services.web_url');
    $storageUrl = config('services.storage_url');
    $content = $data["content"];
    $page = $data["page"];
    $locale = $data["locale"];
    $routeLocale = $data["routeLocale"];
@endphp
    <main class="main_page">
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
            <div class="mb-4 rounded">
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

        <section id="section-politica" class="bottom_section">
            <div class="container">
                <div class="row">
                  @php
                    $index_informacion = array_search("Información", array_column($content, 'name'));
                    $informacion = $content[$index_informacion];

                    $description_informacion = "";
                    if(in_array("description", $informacion["content_formatted"])) {
                      $index = array_search("description", array_column($informacion["content"], 'field'));
                      $description_informacion = $informacion["content"][$index]["value_" . $locale];
                    }
                  @endphp
                  @if($description_informacion)
                    <div class="content-politica">
                      {!! $description_informacion !!}
                    </div>
                  @endif
                </div>
            </div>
        </section>
    </main>
@endsection