@extends('admin.layouts.dashboard')
@section('head')
@endsection

@section('content')
<editor
    route="{{ route('cms.editor.store-script') }}"
    route-get-all = "{{ route('cms.editor.get-all') }}"
>
</editor>
@endsection