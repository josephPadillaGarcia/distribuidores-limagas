@extends('admin.layouts.dashboard')
@section('content')
<services-create 
    route-store="{{ route('cms.services.store') }}" 
    app-url="{{ config('services.app_url') }}/admin" 
    route-return="{{ route('cms.services.index') }}"
></services-create>
@endsection