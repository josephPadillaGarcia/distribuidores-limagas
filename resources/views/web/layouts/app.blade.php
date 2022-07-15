@php
/*$webUrl = config('services.web_url');
$storageUrl = config('services.storage_url');
$locale = App::getLocale();
/*if(Route::currentRouteName() == 'service') {
    $page["title_" . $locale] = $service["seo_title_" . $locale];
    $page["seo_description_" . $locale] = $service["seo_description_" . $locale];
    $page["seo_keywords_" . $locale] = $service["seo_keywords_" . $locale];
    $page["seo_image"] = $service["seo_image"];
}
if(Route::currentRouteName() == 'new') {
    $page["title_" . $locale] = $data["new"]["title_" . $locale];
    $page["seo_description_" . $locale] = $data["new"]["excerpt_" . $locale];
    $page["seo_keywords_" . $locale] = $data["new"]["seo_keywords_" . $locale];
    $page["seo_image"] = $data["new"]["thumbnail"];
}*/
@endphp
<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">  
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Distribuidores</title>
    <link rel="icon" type="image/png" sizes="192x192" href="{{ asset('storage/img/favicon/android-icon-192x192.png') }}">
    <link rel="icon" type="image/png" sizes="32x32" href="{{ asset('storage/img/favicon/favicon-32x32.png') }}">
    <link rel="icon" type="image/png" sizes="96x96" href="{{ asset('storage/img/favicon/favicon-96x96.png') }}">
    <link rel="icon" type="image/png" sizes="16x16" href="{{ asset('storage/img/favicon/favicon-16x16.png') }}">
    <link rel="manifest" href="{{ asset('storage/img/favicon/manifest.json') }}">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="{{ asset('storage/img/ms-icon-144x144.png') }}">
    <meta name="theme-color" content="#ffffff">
    <link href="{{ asset('css/web/remixicon.min.css') }}" rel="stylesheet">
    <link href="{{ asset('css/web/fonts.css') }}" rel="stylesheet">
    <link href="{{ asset('css/web/new-style.css') }}" rel="stylesheet">
    <!--link href="{{ asset('css/web/bootstrap.min.css') }}" rel="stylesheet"-->
    <link href="{{ asset('css/web/flaticon.css') }}" rel="stylesheet">
    <link href="{{ asset('css/web/owl.carousel.css') }}" rel="stylesheet">
    <link href="{{ asset('css/web/jq.fancybox.min.css') }}" rel="stylesheet">
    <!--link href="{{ asset('css/web.css') }}" rel="stylesheet"-->
    <meta name="csrf-token" content="{{ csrf_token() }}">

</head>

<body>
    <div id="app">
        @include('web.layouts.menu') 
        @yield('content')
        @include('web.layouts.footer') 
    </div>
    <script src="{{ asset('js/web/manifest.js') }}"></script>
    <script src="{{ asset('js/web/vendor.js') }}"></script>
    <script src="{{ asset('js/web/web.js') }}"></script>
    @stack('scripts')
    
</body>

</html>