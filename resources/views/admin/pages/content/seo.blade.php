@extends('admin.layouts.dashboard')
@section('content')
<content-seo 
    app-url="{{ config('services.app_url') }}/admin" 
    asset-url="{{ config('app.files_url') }}"
></content-seo>
@endsection
