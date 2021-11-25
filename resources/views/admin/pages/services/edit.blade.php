@extends('admin.layouts.dashboard')
@section('content')
<services-edit
    files-url="{{ config('services.files_url') }}" 
    app-url="{{ config('services.app_url') }}/admin" 
    images-url="{{ config('services.images_url') }}" 
    route-update="{{ route('cms.services.store') }}" 
    route-return="{{ route('cms.services.index') }}"
    :element-parent="{{ $element }}" 
></services-edit>
@endsection