@extends('admin.layouts.dashboard')
@section('content')
    <sucursales
    message-order="@lang('custom.message.order')"
    route="{{ route('cms.distribuidores.index') }}" 
    route-order="{{ route('cms.distribuidores.order') }}"
    images-url="{{ config('services.images_url') }}"
    route-get-all="{{ route('cms.distribuidores.get-all') }}"
    route-departments-get="{{ route('cms.json.get-departments')}}"
    route-provinces-get="{{ route('cms.json.get-provinces')}}"
    route-districts-get="{{ route('cms.json.get-districts')}}"

    route-products-get-all = "{{ route('cms.distribuidores.product-get-all') }}"
    ></sucursales>
@endsection
