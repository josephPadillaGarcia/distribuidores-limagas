@extends('layouts.dashboard')
@section('content')
<services-read
files-url="{{ config('services.files_url') }}" 
app-url="{{ config('services.web_url') }}" 
 images-url="{{ config('services.images_url') }}" :element-parent="{{ $element }}" route-return="{{ route('cms.services.index') }}"></services-read>
@endsection