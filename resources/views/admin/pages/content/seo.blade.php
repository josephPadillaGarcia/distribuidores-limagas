@extends('admin.layouts.dashboard')
@section('content')
<content-seo 
    app-url="{{ config('services.app_url') }}/admin" 
    web-url="{{ config('services.web_url') }}"
    asset-url="{{ config('app.files_url') }}"
></content-seo>
@endsection
