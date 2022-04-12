@extends('web.layouts.app')

@section('content')

@php
$page = $data["page"];
$categories = $data["categories"];
$news = $data["news"];
$new = $data["new"];
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
    <section class="lazyload position-relative bottom_section section_bannerNosotros" data-bg="{{ $image_banner }}" id="seccion_banner_global">
        <div class="mb-4 rounded ">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-12 px-0">
                        <div class="content_banner">
                            <h1 class="titulo text-center titulo_banner">{{ $new['title_'.$locale] }}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>

    <section id="section_single_blog" class="bottom_section">
        <div class="container">
            <div class="row">
                <div class="col-lg-8">
                    <div class="content_noticia content-single-noticia">
                        <img src="{{ $storageUrl . '/img/posts/' . $new['image'] }}" class="lazyload" alt="">
                        <p class="fecha">{{ $new['date_format'] }}</p>
                        <a href=""><b>{{ $new['title_'.$locale] }}</b></a>
                        <div class="texto-single">
                            {!! $new['content_'.$locale] !!}
                        </div>
                        <div class="compartir">
                            <b>Compartir:</b>
                            <ul>
                                <li>
                                    <share-network
                                        network="facebook"
                                        url="{{ Request::url() }}"
                                        title="{{ $new['title_'.$locale] }}"
                                        description="{{ $new['excerpt_'.$locale] }}"
                                        >
                                        <img height="35" src="/storage/web/img/icon_facebook.png" alt="">
                                    </share-network>
                                </li>
                                <li>
                                <share-network
                                        network="linkedin"
                                        url="{{ Request::url() }}"
                                        title="{{ $new['title_'.$locale] }}"
                                        description="{{ $new['excerpt_'.$locale] }}"
                                        >
                                        <img height="35" src="/storage/web/img/icon_linkedin.png" alt="">
                                    </share-network>
                            </li>
                                <li>
                                <share-network
                                        network="whatsapp"
                                        url="{{ Request::url() }}"
                                        title="{{ $new['title_'.$locale] }}"
                                        description="{{ $new['excerpt_'.$locale] }}"
                                        >
                                    <img  height="35" src="/storage/web/img/icon_whatssap.png" alt="">
                                    </share-network>

                                </li>
                            </ul>
                        </div>
                        <div class="comentarios">
                            <b>Comentarios:</b>
                            <div
                                class="fb-comments"
                                data-href="{{ Request::url() }}"
                                data-width="100%"
                                data-numposts="10"
                                data-lazy="true"
                            ></div>
                            <div id="fb-root"></div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="search position-relative">
                        <form action="{!! Helper::getCustomRoute('web.news', $routeLocale) !!}" method="GET">
                            <input type="text" name="q" class="form-control" placeholder="Que estas buscando">
                            <i class="flaticon-lupa-1 position-absolute"></i>
                            <button type="submit" style="display:none;">Search</button>
                        </form>
                    </div>
                    <div class="list-tabs">
                        <p>Categorias: </p>
                        <ul class="nav nav-tabs nav-tabs_single" id="myTab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <a class="nav-link" href="{!! Helper::getCustomRoute('web.news', $routeLocale) !!}">Todos</a>
                            </li>
                            @foreach($categories as $value)
                            <li class="nav-item" role="presentation">
                                <a class="nav-link" href="{!! Helper::getCustomRoute('web.newcategory', $routeLocale, ['slug' => $value['slug_' . $locale] ? $value['slug_' . $locale] : $value['slug_es']]) !!}">{{ $value["name_" . $locale] }}</a>
                            </li>
                            @endforeach
                        </ul>
                    </div>
                    <div class="tab-content">
                        <div class="tab-pane fade show active">
                            @if(count($news) > 0)
                            <div class="row">
                                @foreach($news as $key => $value)
                                <div class="col-lg-12">
                                    <div class="content_noticia">
                                        <a href="{!! Helper::getCustomRoute('web.singlenews', $routeLocale, ['slug' => $value['category']['slug_' . $locale] ? $value['category']['slug_' . $locale] : $value['category']['slug_es'],
                                            'post' => $value['slug_' . $locale] ? $value['slug_' . $locale] : $value['slug_es'] ]) !!}">
                                            <img class="lazyload" src="{{ $storageUrl . '/img/posts/' . $value['thumbnail'] }}" alt="">
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
                            </div>
                            @endif

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

</main>
@endsection

@push('scripts')
<script async defer crossorigin="anonymous" src="https://connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v13.0&appId=308191064775859&autoLogAppEvents=1" nonce="0pfAmf5K"></script>
@endpush