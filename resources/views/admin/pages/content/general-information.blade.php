@extends('admin.layouts.dashboard')
@section('content')

    <content-general-information
    route-update="{{ route('cms.content.general-information.store') }}" 
    route-get="{{ route('cms.content.general-information.get') }}"
    images-url="{{ config('services.images_url') }}"
    >
    
</content-general-information>
    
@endsection