@extends('layouts.dashboard')
@section('content')
    <tutorials
    message-order="@lang('custom.message.order')"
    route="{{ route('cms.tutorials.index') }}" 
    route-order="{{ route('cms.tutorials.order') }}"
    images-url="{{ config('services.images_url') }}"
    route-get-all="{{ route('cms.tutorials.get-all') }}"
    ></tutorials>
@endsection
