@extends('admin.layouts.dashboard')
@section('content')
    <sucursales
    message-order="@lang('custom.message.order')"
    route="{{ route('cms.sucursales.index') }}" 
    route-order="{{ route('cms.sucursales.order') }}"
    images-url="{{ config('services.images_url') }}"
    route-get-all="{{ route('cms.sucursales.get-all') }}"
    route-departments-get="{{ route('cms.json.get-departments')}}"
    route-provinces-get="{{ route('cms.json.get-provinces')}}"
    route-districts-get="{{ route('cms.json.get-districts')}}"
    ></sucursales>
@endsection
