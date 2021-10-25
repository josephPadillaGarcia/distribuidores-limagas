@extends('layouts.dashboard')
@section('head')
<style>
    .mx-panel-time .mx-time-list:nth-child(3){
        display: none;
    }
    .mx-panel-time .mx-time-list:nth-child(1), .mx-panel-time .mx-time-list:nth-child(2) {
        width: 50% !important;
    }
</style>
@endsection
@section('content')
    <customers
    message-order="@lang('custom.message.order')"
    route="{{ route('cms.customers.index') }}" 
    route-order="{{ route('cms.customers.order') }}"
    images-url="{{ config('services.images_url') }}"
    route-get-all="{{ route('cms.customers.get-all') }}"
    ></customers>
@endsection

