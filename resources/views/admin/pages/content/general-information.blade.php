@extends('admin.layouts.dashboard')
@section('content')

    <content-general-information
    route-update="{{ route('cms.content.general-information.store') }}" 
    route-get="{{ route('cms.content.general-information.get') }}"></content-general-information>
    
@endsection