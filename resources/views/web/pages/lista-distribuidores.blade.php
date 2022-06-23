@extends('web.layouts.app')

@section('content')
@php
    $locale = Config::get('app.locale');
    $offices = $data["offices"];
    $departments = $data["departments"];
@endphp

<main>

<h2>Lista de distribuidores limagas</h2>

</main>

@endsection
