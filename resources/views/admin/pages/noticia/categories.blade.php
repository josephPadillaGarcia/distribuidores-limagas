@extends('admin.layouts.dashboard')
@section('content')
<posts-category 
  message-cant-delete="@lang('custom.message.cant_delete_post')"
  route="{{ route('cms.noticia.categorias.index') }}" 
  route-get-all="{{ route('cms.noticia.categorias.get-all') }}"></posts-category>
@endsection
