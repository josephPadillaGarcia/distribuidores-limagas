@extends('admin.layouts.dashboard')
@section('content')

<encuestas
route="{{ route('cms.encuestas.index') }}" 
route-get-all="{{ route('cms.encuestas.get-all') }}"
images-url="{{ config('encuestas.images_url') }}"

all-export="{{ route('cms.encuestas.all-export')}}" 
  filter-export="{{ route('cms.encuestas.filter-export')}}" 
>
</encuestas>


@endsection