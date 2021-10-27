@extends('layouts.dashboard')
@section('content')

    <app-tracking
    images-url="{{ config('services.images_url') }}"
    route-update="{{ route('cms.app-tracking.store') }}" 
    route-get="{{ route('cms.app-tracking.get') }}"></app-tracking>
    
@endsection