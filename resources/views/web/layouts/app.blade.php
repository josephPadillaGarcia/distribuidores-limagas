@php
$webUrl = config('services.web_url');
$storageUrl = config('services.storage_url');
$locale = "es";
@endphp
<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{{ $page["title_" . $locale] ? $page["title_" . $locale] : config('app.name') }}</title>
    <link rel="apple-touch-icon" sizes="57x57" href="{{ asset('storage/img/favicon/apple-icon-57x57.png') }}">
    <link rel="apple-touch-icon" sizes="60x60" href="{{ asset('storage/img/favicon/apple-icon-60x60.png') }}">
    <link rel="apple-touch-icon" sizes="72x72" href="{{ asset('storage/img/favicon/apple-icon-72x72.png') }}">
    <link rel="apple-touch-icon" sizes="76x76" href="{{ asset('storage/img/favicon/apple-icon-76x76.png') }}">
    <link rel="apple-touch-icon" sizes="114x114" href="{{ asset('storage/img/favicon/apple-icon-114x114.png') }}">
    <link rel="apple-touch-icon" sizes="120x120" href="{{ asset('storage/img/favicon/apple-icon-120x120.png') }}">
    <link rel="apple-touch-icon" sizes="144x144" href="{{ asset('storage/img/favicon/apple-icon-144x144.png') }}">
    <link rel="apple-touch-icon" sizes="152x152" href="{{ asset('storage/img/favicon/apple-icon-152x152.png') }}">
    <link rel="apple-touch-icon" sizes="180x180" href="{{ asset('storage/img/favicon/apple-icon-180x180.png') }}">
    <link rel="icon" type="image/png" sizes="192x192" href="{{ asset('storage/img/favicon/android-icon-192x192.png') }}">
    <link rel="icon" type="image/png" sizes="32x32" href="{{ asset('storage/img/favicon/favicon-32x32.png') }}">
    <link rel="icon" type="image/png" sizes="96x96" href="{{ asset('storage/img/favicon/favicon-96x96.png') }}">
    <link rel="icon" type="image/png" sizes="16x16" href="{{ asset('storage/img/favicon/favicon-16x16.png') }}">
    <link rel="manifest" href="{{ asset('storage/img/favicon/manifest.json') }}">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="{{ asset('storage/img/ms-icon-144x144.png') }}">
    <meta name="theme-color" content="#ffffff">
    <link href="{{ asset('css/web/fonts.css') }}" rel="stylesheet">
    <link href="{{ asset('css/web/style.css') }}" rel="stylesheet">
    <link href="{{ asset('css/web/bootstrap.min.css') }}" rel="stylesheet">
    <link href="{{ asset('css/web/flaticon.css') }}" rel="stylesheet">
    <link href="{{ asset('css/web/owl.carousel.css') }}" rel="stylesheet">
    <link href="{{ asset('css/web/jq.fancybox.min.css') }}" rel="stylesheet">
    <link href="{{ asset('css/web.css') }}" rel="stylesheet">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="description" content="{{ $page['seo_description_' . $locale] ? $page['seo_description_' . $locale] : '' }}">
    <meta name="name" content="{{ $page['title_' . $locale] ? $page['title_' . $locale] : '' }}">
    <meta name="image" content="{{ $page['seo_image'] ? $storageUrl . '/img/pages/' . $page['seo_image'] : '' }}">
    <meta name="keywords" content="{{ $page['seo_keywords_' . $locale] ? $page['seo_keywords_' . $locale] : '' }}">
    <meta name="og:url" content="{{ config('app.url') }}">
    <meta name="og:type" content="website">
    <meta name="og:title" content="{{ $page['title_' . $locale] ? $page['title_' . $locale] : '' }}">
    <meta name="og:description" content="{{ $page['seo_description_' . $locale] ? $page['seo_description_' . $locale] : '' }}">
    <meta name="og:image" content="{{ $page['seo_image'] ? $storageUrl . '/img/pages/' . $page['seo_image'] : '' }}">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="{{ $page['title_' . $locale] ? $page['title_' . $locale] : '' }}">
    <meta name="twitter:description" content="{{ $page['seo_description_' . $locale] ? $page['seo_description_' . $locale] : '' }}">
    <meta name="twitter:image" content="{{ $page['seo_image'] ? $storageUrl . '/img/pages/' . $page['seo_image'] : '' }}">
    <meta name="robots" content="index,nofollow">
</head>

<body>
    <div id="app">
        @include('web.layouts.menu') 
        @yield('content')
        <!-- <web-footer></web-footer> -->
        @include('web.layouts.footer') 
    </div>
    <script src="{{ mix('js/manifest.js') }}"></script>
    <script src="{{ mix('js/vendor.js') }}"></script>
    <script src="{{ mix('js/web.js') }}"></script>
    @stack('scripts')
</body>

</html>