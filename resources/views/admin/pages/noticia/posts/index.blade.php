@extends('admin.layouts.dashboard')
@section('content')
<posts 
    route-create="{{ route('cms.noticia.posts.create') }}" 
    route="{{ route('cms.noticia.posts.index') }}" 
    route-get-all="{{ route('cms.noticia.posts.get-all') }}"
    images-url="{{ config('services.images_url') }}"
    app-url="{{ config('services.app_url') }}/admin"
></posts>
@endsection
