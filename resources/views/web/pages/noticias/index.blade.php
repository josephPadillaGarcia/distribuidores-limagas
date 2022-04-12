@extends('web.layouts.app')

@section('content')

@php
    $page = $data["page"];
    $categories = $data["categories"];
    $news = $data["news"];
    $storageUrl = config('services.storage_url');
    $content = $data["content"];
    $locale = "es";
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
    
    <div class="container search_news">
        <div class="row justify-content-center">
            <div class="col-lg-6">
                <div class="search position-relative">
                    <form action="{!! Helper::getCustomRoute('web.news', $routeLocale) !!}" method="GET">
                        <input type="text" value="{{ request('q') }}" name="q" class="form-control" placeholder="Que estas buscando">
                        <i class="flaticon-lupa-1 position-absolute"></i>
                        <button type="submit" style="display:none;">Search</button>
                    </form>
                </div>
            </div>
        </div>
    </div>

</section>

<section id="seccion_tabs" class="bottom_section">
    <div class="container">
        <div class="row">
            <div class="list-tabs">
                <p>Categorías: </p>
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <a class="nav-link @if(Request::is('noticias')) active @endif btn_tab"
                            href="{!! Helper::getCustomRoute('web.news', $routeLocale) !!}">Todos</a>
                    </li>
                    @foreach($categories as $value)
                    <li class="nav-item" role="presentation">
                        <a class="nav-link btn_tab
                        @if($value['slug_' . $locale] == Request::route('slug') ) active @endif
                        "
                            href="{!! Helper::getCustomRoute('web.newcategory', $routeLocale, ['slug' => $value['slug_' . $locale] ? $value['slug_' . $locale] : $value['slug_es']]) !!}">{{ $value["name_" . $locale] }}</a>
                    </li>
                    @endforeach
                </ul>
            </div>
            <div class="tab-content">
                <div class="tab-pane fade show active" id="tabs">
                    <div class="row">
                        @if(count($news) > 0)
                            @foreach($news as $key => $value)
                            <div class="@if($key == 0 || $key == 1) col-lg-6 @else col-lg-4 @endif" >
                                <div class="content_noticia">
                                    <a href="{!! Helper::getCustomRoute('web.singlenews', $routeLocale, ['slug' => $value['category']['slug_' . $locale] ? $value['category']['slug_' . $locale] : $value['category']['slug_es'],
                                            'post' => $value['slug_' . $locale] ? $value['slug_' . $locale] : $value['slug_es'] ]) !!}">
                                        <img class="lazyload" 
                                        src="{{ $storageUrl . '/img/posts/' . $value['thumbnail'] }}" alt="">
                                    </a>
                                    <p class="fecha">{{ $value['date_format'] }}</p>
                                    <a href="{!! Helper::getCustomRoute('web.singlenews', $routeLocale, ['slug' => $value['category']['slug_' . $locale] ? $value['category']['slug_' . $locale] : $value['category']['slug_es'],
                                        'post' => $value['slug_' . $locale] ? $value['slug_' . $locale] : $value['slug_es'] ]) !!}"><b>{{ $value["title_" . $locale] }}</b></a>
                                    <p>{{ $value["excerpt_" . $locale] }}</p>
                                    <a href="{!! Helper::getCustomRoute('web.singlenews', $routeLocale, ['slug' => $value['category']['slug_' . $locale] ? $value['category']['slug_' . $locale] : $value['category']['slug_es'],
                                        'post' => $value['slug_' . $locale] ? $value['slug_' . $locale] : $value['slug_es'] ]) !!}"><span>+</span></a>
                                </div>
                            </div>
                            @endforeach
                        @else
                        <div class="text-center my-5">No se encontraron resultados.</div>
                        @endif
                    </div>

                    {{ $news->appends(request()->query())->links() }}
                </div>
                
            </div>
        </div>
    </div>
</section>

</main>

@endsection