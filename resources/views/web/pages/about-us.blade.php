@extends('web.layouts.app')
@section('content')
@php
    $webUrl = config('services.web_url');
    $storageUrl = config('services.storage_url');
    $content = $data["content"];
    $testimonials = $data["testimonials"];
    $appTracking = $data["appTracking"];
    $customers = $data["customers"];
    $page = $data["page"];
    $locale = Config::get('app.locale');
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
                                <h1 class="titulo text-center titulo_banner">
                                    {{ $title_banner }}
                                </h1>
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
                      @php
                        $index_somos = array_search("Somos el operador logístico del Grupo Sandoval", array_column($content, 'name'));
                        $somos = $content[$index_somos];

                        $title_somos = "";
                        if(in_array("title", $somos["content_formatted"])) {
                          $index = array_search("title", array_column($somos["content"], 'field'));
                          $title_somos = $somos["content"][$index]["value_" . $locale];
                        
                        }
                        $description_somos = "";
                        if(in_array("description", $somos["content_formatted"])) {
                          $index = array_search("description", array_column($somos["content"], 'field'));
                          $description_somos = $somos["content"][$index]["value_" . $locale];
                        }
                      @endphp
                        <div class="content_info_video">
                          @if($title_somos)
                            <div>
                              {!! $title_somos !!}
                            </div>
                          @endif
                          @if($description_somos)
                            <div>
                              {!! $description_somos !!}
                            </div>
                          @endif
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                      @php                        
                        $image_somos = "";
                        if(in_array("image", $somos["content_formatted"])) {
                          $index = array_search("image", array_column($somos["content"], 'field'));
                          $image_somos = $storageUrl . '/img/content/' . $somos["content"][$index]["value"];
                        }

                        $video_somos = "";
                        if(in_array("url_video", $somos["content_formatted"])) {
                          $index = array_search("url_video", array_column($somos["content"], 'field'));
                          $video_somos = $storageUrl . '/img/content/' . $somos["content"][$index]["value_" . $locale];
                        }
                      @endphp
                        <div class="video_nosotros position-relative">
                          @if($image_somos)
                            <img class="lazyload" data-src="{{ $image_somos }}" alt="" />
                          @endif
                          @if($video_somos)
                            <div class="icon_play position-absolute">
                                <a class="fancybox" data-caption="video" data-fancybox="Sobre Dinet" href="{{ $video_somos }}">
                                  <img class="lazyload" src="/storage/web/img/icon_play.png" alt="Icon Play" />
                                </a>
                            </div>
                          @endif
                        </div>
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

        <section id="mensaje" class="bottom_section">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-6">
                      @php
                        $index_clientes = array_search("Nuestros Clientes", array_column($content, 'name'));
                        $clientes = $content[$index_clientes];

                        $description_clientes = "";
                        if(in_array("description", $clientes["content_formatted"])) {
                          $index = array_search("description", array_column($clientes["content"], 'field'));
                          $description_clientes = $clientes["content"][$index]["value_" . $locale];
                        
                        }
                      @endphp
                        <div class="content_mensaje">
                          @if($description_clientes)
                            <div>
                              {!! $description_clientes !!}
                            </div>
                          @endif
                        </div>
                    </div>
                </div>
            </div>
        </section>

        @if(count($testimonials))
        <section id="seccion_slider_soluciones" class="bottom_section section_slider_testimonios">
            <div class="container">
                <div class="row">
                    <div class="titulo_global">
                      @php
                        $index_testimonios = array_search("Testimonios", array_column($content, 'name'));
                        $testimonios = $content[$index_testimonios];

                        $title_testimonios = "";
                        if(in_array("title", $testimonios["content_formatted"])) {
                          $index = array_search("title", array_column($testimonios["content"], 'field'));
                          $title_testimonios = $testimonios["content"][$index]["value_" . $locale];
                        
                        }
                      @endphp
                      @if($title_testimonios)
                        <h2>
                            {{ $title_testimonios }}
                        </h2>
                      @endif
                    </div>

                    <div class="col-lg-12">
                        <div class="owl-carousel owl-theme carousel_saluciones carosusel_testimonios position-relative">
                          @foreach($testimonials as $testimonio)
                            <div class="item">
                                <img 
                                    data-src="{{ $storageUrl . '/img/testimonials/' . $testimonio['image']}}" 
                                    class="lazyload" 
                                    alt="{{ $testimonio['title_' . $locale] }}"
                                />
                                <div class="content_solucion position-relative">
                                    <b class="text-center">
                                        {{ $testimonio["title_" . $locale] }}
                                    </b>
                                    <div class="text-center">
                                        {!! $testimonio["description_" . $locale] !!}
                                    </div>
                                </div>
                            </div>
                          @endforeach
                        </div>
                    </div>
                </div>
            </div>
        </section>
        @endif
    </main>
@endsection

@push('scripts')
<script type="text/javascript">
  $(document).ready(function () {
      $(".fancybox").fancybox();
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
    });
</script>
@endpush