@extends('admin.layouts.dashboard')
@section('content')

<encuestas
route="{{ route('cms.encuestas.index') }}" 
route-get-all="{{ route('cms.encuestas.get-all') }}"
>
</encuestas>


@endsection