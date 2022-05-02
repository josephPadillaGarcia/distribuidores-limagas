@extends('admin.layouts.dashboard')
@section('content')
<services-read
    files-url="{{ config('services.files_url') }}" 
    app-url="{{ config('services.app_url') }}" 
    images-url="{{ config('services.images_url') }}"
    route-return="{{ route('cms.services.index') }}"
    :element-parent="{{ $element }}" 
></services-read>
@endsection