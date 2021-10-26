@extends('layouts.dashboard')
@section('content')
<services-edit
files-url="{{ config('services.files_url') }}" 
app-url="{{ config('services.web_url') }}" 
 images-url="{{ config('services.images_url') }}" :element-parent="{{ $element }}" route-update="{{ route('cms.services.store') }}" route-return="{{ route('cms.services.index') }}"></services-edit>
@endsection