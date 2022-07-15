<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{{ config('app.name') }} - Admin</title>
    <meta name="robots" content="noindex,nofollow">
    <link rel="icon" type="image/png" sizes="192x192" href="{{ asset('storage/img/favicon/android-icon-192x192.png') }}">
    <link rel="icon" type="image/png" sizes="32x32" href="{{ asset('storage/img/favicon/favicon-32x32.png') }}">
    <link rel="icon" type="image/png" sizes="96x96" href="{{ asset('storage/img/favicon/favicon-96x96.png') }}">
    <link rel="icon" type="image/png" sizes="16x16" href="{{ asset('storage/img/favicon/favicon-16x16.png') }}">
    <link rel="manifest" href="{{ asset('storage/img/favicon/manifest.json') }}">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="{{ asset('storage/img/ms-icon-144x144.png') }}">
    <meta name="theme-color" content="#ffffff">
    <link href="{{ asset('css/admin/remixicon.min.css') }}" rel="stylesheet">
    <link href="{{ asset('css/admin/jq.fancybox.min.css') }}" rel="stylesheet">
    <link href="{{ asset('css/admin.css') }}" rel="stylesheet">
    <link href="{{ asset('css/admin/style-admin.css') }}" rel="stylesheet">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    @yield('head')
    <style>
        .parent-iframe iframe{
            height: 300px;
            width: 100%;
        }
        .content-editor-value p {
            line-height: 1.15;
            margin-bottom: 10px;
        }

        .content-editor-value img{
            max-width: 100%;
            height: auto;
        }

        .content-pre {
            width: 100%;
            font-family: inherit;
            overflow: initial;
            font-size: .9rem;
            font-weight: 400;
            white-space: pre-wrap;
        }

        label {
            margin-bottom: .1rem !important;
        }

        ul.nav-pills {
            border-bottom: 2px solid #e9ecef;
        }

        .tab__custom {
            background: #f9f9fa !important;
        }

        .tab__custom.active {
            font-weight: bold !important;
            background: #f9f9fa !important;
            border-bottom: 2px solid #2D7AF1 !important;
        }

        .btn-inner--icon i:not(.fa) {
            position: relative;
            top: 4px;
        }

        .btn-icon .btn-inner--text:not(:first-child) {
            margin-left: .25em;
        }

        .custom-switch.b-custom-control-lg .custom-control-input:checked~.custom-control-label:after,
        .input-group-lg .custom-switch .custom-control-input:checked~.custom-control-label:after {
            -webkit-transform: translateX(.9375rem);
            transform: translateX(.9375rem);
        }

        .custom-switch.b-custom-control-lg .custom-control-label,
        .input-group-lg .custom-switch .custom-control-label {
            font-size: 1rem;
            line-height: 1.75;
        }

        .custom-switch.b-custom-control-lg .custom-control-label:before,
        .input-group-lg .custom-switch .custom-control-label:before {
            top: .3125rem;
            height: 1.25rem;
            left: -2.8125rem;
            width: 2.1875rem;
            border-radius: .625rem;
        }

        .custom-switch.b-custom-control-lg .custom-control-label:after,
        .input-group-lg .custom-switch .custom-control-label:after {
            top: calc(.3125rem + 2px);
            left: calc(-2.8125rem + 2px);
            width: calc(1.25rem - 4px);
            height: calc(1.25rem - 4px);
            border-radius: .625rem;
            background-size: 50% 50%;
        }
    </style>
</head>

<body @isset($class) class="{{ $class }}" @endisset @empty($class) class="sidebar-icon-only pr-0" @endempty id="body">
    <div id="app">
        @yield('page')
    </div>
    <script src="{{ asset('js/admin/manifest.js') }}"></script>
    <script src="{{ asset('js/admin/vendor.js') }}"></script>
    <script src="{{ asset('js/admin/admin.js') }}"></script>
    @stack('scripts')
</body>

</html>