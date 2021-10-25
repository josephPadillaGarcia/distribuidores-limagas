@extends('layouts.dashboard')
@section('content')

    <content-general-information
    route-update="{{ route('cms.content.general-information.store') }}" 
    :departments="{{ json_encode($departments) }}"
    route-get="{{ route('cms.content.general-information.get') }}"></content-general-information>
    
@endsection