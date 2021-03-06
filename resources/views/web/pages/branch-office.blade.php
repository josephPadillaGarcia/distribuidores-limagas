@extends('web.layouts.app')

@section('content')
@php
    $locale = Config::get('app.locale');
    //$content = $data["content"];
    $offices = $data["offices"];
    $departments = $data["departments"];
    $storageUrl = config('services.storage_url');
    $information = $data["information"];
@endphp

<main>


    <section id="index" style="background-image: url({{ $storageUrl.'/img/fondo1.jpg' }});">
        <div class="busqueda_index color_white">
            <div class="logo">
                <img src="{{ $storageUrl.'/img/logo1.png' }} " alt="">
            </div>
            <div class="texto">
                <h1>Encuentra el distribuidor más cercano a ti:</h1>
            </div>

            <div class="formulario">
                <ubigeo-filter locale="{{ $locale }}"
                    department-parent="{{ $department }}"
                    province-parent="{{ $province }}"
                    district-parent="{{ $district }}"
                    route-search="{{ LaravelLocalization::getURLFromRouteNameTranslated( Config::get('app.locale') , 'routes.branch-offices') }}" :departments="{{ $departments }}" route-get-prov="{{ route('web.provinces')}}"
                    route-get-dis="{{ route('web.districts')}}"
                    route-lista-distribuidores="{{ route('web.listadistribuidores') }}"
                    />
            </div>

            <div class="redes">
                <span>Síguenos en:</span>
                @if ($information->facebook_link)
                    <a href="{{ $information->facebook_link }}" class="btn-circle"><i class="flaticon-facebook"></i></a>
                @endif

                @if ($information->instagram_link)
                    <a href="{{ $information->instagram_link }}" class="btn-circle"><i class="flaticon-instagram"></i></a>
                @endif

                @if ($information->youtube_link)
                    <a href="{{ $information->youtube_link }}" class="btn-circle"><i class="flaticon-youtube"></i></a>
                @endif
                
                @if ($information->linkedin_link)
                    <a href="{{ $information->linkedin_link }}" class="btn-circle"><i class="flaticon-linkedin-1"></i></a>
                @endif
            </div>
        </div>
    
        <div class="img-footer">
            <div class="left"><img src=" {{ $storageUrl.'/img/img-left.png' }} " alt=""></div>
            <div class="right"><img src="{{ $storageUrl.'/img/img-right.png' }}" alt=""></div>
        </div>
    </section>

    <div class="pie"></div>

</main>

@endsection

@push('scripts')
<script type="text/javascript">
    function getPr(e){
        let value = document.getElementById("department").value;
        console.log(value);
        fetch('{{ route("web.provinces", array("department" => ":value") ) }}')
        .then(response => response.json())
        .then(data => console.log(data));
    }
</script>
@endpush