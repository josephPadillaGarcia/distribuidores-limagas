@extends('web.layouts.app')
@section('content')
@php
    $webUrl = config('services.web_url');
    $storageUrl = config('services.storage_url');
    $content = $data["content"];
    $services = $data["services"];
    $quantity = $data["quantity"];
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

    <section id="form_servicio" class="bottom_section">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-6">
          @php
          $index_informacion = array_search("Información", array_column($content, 'name'));
          $informacion = $content[$index_informacion];

          $image_informacion = "";
          if(in_array("image", $informacion["content_formatted"])) {
            $index = array_search("image", array_column($informacion["content"], 'field'));
            $image_informacion = $storageUrl . '/img/content/' . $informacion["content"][$index]["value"];
          }

          $title_informacion = "";
          if(in_array("title", $informacion["content_formatted"])) {
            $index = array_search("title", array_column($informacion["content"], 'field'));
            $title_informacion = $informacion["content"][$index]["value_" . $locale];
          }

          $description_informacion = "";
          if(in_array("description", $informacion["content_formatted"])) {
            $index = array_search("description", array_column($informacion["content"], 'field'));
            $description_informacion = $informacion["content"][$index]["value_" . $locale];
          }
          @endphp
          @if($image_informacion)
            <div class="img_contacto">
              <img class="lazyload" data-src="{{ $image_informacion }}" alt="" />
            </div>
          @endif
          </div>

          <form-quote
            title="{{ $title_informacion }}"
            description="{{ $description_informacion }}"
            locale="{{ $locale }}"
            :with-description="true"
            :show-services="true"
            :quantity="{{ $quantity }}"
            :services="{{ $services }}"
          />
        </div>
      </div>
    </section>
  </main>
@endsection