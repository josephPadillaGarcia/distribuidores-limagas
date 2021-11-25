@extends('admin.layouts.dashboard')
@section('content')
    <services-index route-create="{{ route('cms.services.create') }}"
    route-order="{{ route('cms.services.order') }}"
    route="{{ route('cms.services.index') }}" 
    images-url="{{ config('services.images_url') }}"
    files-url="{{ config('services.files_url') }}"
    route-get-all="{{ route('cms.services.get-all') }}"
    message-order="@lang('custom.message.order')"
    ></services-index>
@endsection