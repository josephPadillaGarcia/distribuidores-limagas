@extends('admin.layouts.dashboard')
@section('content')
<category 
  message-cant-delete="@lang('custom.message.cant_delete_post')"
  route="{{ route('cms.noticia.categorias.index') }}" 
  route-get-all="{{ route('cms.noticia.categorias.get-all') }}"></category>
@endsection
