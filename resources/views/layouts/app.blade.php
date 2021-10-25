<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{{ config('app.name') }} - Admin</title>
    <meta name="robots" content="noindex,nofollow">
    <link rel="apple-touch-icon" sizes="57x57" href="{{ asset('storage/img/favicon/apple-icon-57x57.png') }}">
    <link rel="apple-touch-icon" sizes="60x60" href="{{ asset('storage/img/favicon/apple-icon-60x60.png') }}">
    <link rel="apple-touch-icon" sizes="72x72" href="{{ asset('storage/img/favicon/apple-icon-72x72.png') }}">
    <link rel="apple-touch-icon" sizes="76x76" href="{{ asset('storage/img/favicon/apple-icon-76x76.png') }}">
    <link rel="apple-touch-icon" sizes="114x114" href="{{ asset('storage/img/favicon/apple-icon-114x114.png') }}">
    <link rel="apple-touch-icon" sizes="120x120" href="{{ asset('storage/img/favicon/apple-icon-120x120.png') }}">
    <link rel="apple-touch-icon" sizes="144x144" href="{{ asset('storage/img/favicon/apple-icon-144x144.png') }}">
    <link rel="apple-touch-icon" sizes="152x152" href="{{ asset('storage/img/favicon/apple-icon-152x152.png') }}">
    <link rel="apple-touch-icon" sizes="180x180" href="{{ asset('storage/img/favicon/apple-icon-180x180.png') }}">
    <link rel="icon" type="image/png" sizes="192x192"  href="{{ asset('storage/img/favicon/android-icon-192x192.png') }}">
    <link rel="icon" type="image/png" sizes="32x32" href="{{ asset('storage/img/favicon/favicon-32x32.png') }}">
    <link rel="icon" type="image/png" sizes="96x96" href="{{ asset('storage/img/favicon/favicon-96x96.png') }}">
    <link rel="icon" type="image/png" sizes="16x16" href="{{ asset('storage/img/favicon/favicon-16x16.png') }}">
    <link rel="manifest" href="{{ asset('storage/img/favicon/manifest.json') }}">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="{{ asset('storage/img/ms-icon-144x144.png') }}">
    <meta name="theme-color" content="#ffffff">
    <link href="{{ asset('css/app.css') }}" rel="stylesheet" >
    <link href="{{ asset('css/remixicon.min.css') }}" rel="stylesheet">
    <link href="{{ asset('css/fonts.css') }}" rel="stylesheet">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    @yield('head')
    <style>
        .content-editor-value p{
            line-height: 1.15;
            margin-bottom: 10px;
        }
        .content-pre{
            width: 100%;
            font-family: inherit;
            overflow: initial;
            font-size: .9rem;
            font-weight: 400;
            white-space: pre-wrap; 
        }
        label{
            margin-bottom: .1rem !important;
        }
        ul.nav-pills{
            border-bottom: 2px solid #e9ecef;
        }
        .tab__custom{
            background: #f9f9fa !important;
        }
        .tab__custom.active{
            font-weight: bold !important;
           background: #f9f9fa !important;
           border-bottom: 2px solid #2D7AF1 !important;
        }
    </style>
</head>
<body @isset($class) class="{{ $class }}" @endisset @empty($class) class="sidebar-icon-only pr-0" @endempty id="body">
    <div id="app">
        @yield('page')
    </div>
    <script src="{{ mix('js/manifest.js') }}"></script>
    <script src="{{ mix('js/vendor.js') }}"></script>
    <script src="{{ mix('js/app.js') }}"></script>
    @stack('scripts')
</body>
</html>