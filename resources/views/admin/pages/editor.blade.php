@extends('admin.layouts.dashboard')
@section('head')
@endsection

@section('content')
<editor
    route="{{ route('cms.editor.index') }}"
    route-script="{{ route('cms.editor.store-script') }}"
    route-style="{{ route('cms.editor.store-style') }}"
    route-get-all = "{{ route('cms.editor.get-all') }}"    
    route-get-all-style = "{{ route('cms.editor.get-all-style') }}"
>
</editor>
@endsection