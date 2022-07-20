@extends('web.layouts.app')

@section('content')
@php
    $locale = Config::get('app.locale');
    //$content = $data["content"];
    $offices = $data["offices"];
    $departments = $data["departments"];
    $departamento = $data["departamento"];
    $provincia = $data["provincia"];
    $distrito = $data["distrito"];
    $storageUrl = config('services.storage_url');

    $numoffices = count($offices);
@endphp
<main>


<header class="img-bg" style="background-image: url( {{ $storageUrl.'/img/fondo1.jpg' }} );">
    <div class="container header-filter">
        <div class="logo">
            <a href="/"><img src="{{ $storageUrl.'/img/logo1.png' }}" alt=""></a>
        </div>
        <div class="nav_busqueda color_white">
            <div>Departamento: <b>{{ $departamento }}</b></div>
            <div class="line"></div>
            <div>Provincia: <b>{{ $provincia }}</b></div>
            <div class="line"></div>
            <div>Distrito: <b>{{ $distrito }}</b></div>
        </div>
        <div class="align-center">
            <a href="{{ route("index") }}" class="btn btn1 btn-icon"> Otra ubicación</a>
        </div>
    </div>
</header>


<section class="section">
    <div class="container">
        <div class="text-center padding">{{ $numoffices }} Distribuidores encontrados:</div>

        <div class="grid-col">

            @foreach ($offices as $office)
                <div class="grid-s-12 grid-m-6">
                    <div class="card card-distribuidor">
                        <div class="content">
                            <h3>{{ $office->name }}</h3>
                            <ul>
                                <li><i class="flaticon flaticon-star"> </i>{!! $office->direction !!}</li>
                                
                                @if($office->phone_numbers)
                                    <li>    
                                        @foreach($office->phone_numbers as $ph)
                                            <i class="flaticon flaticon-telefono"> </i>
                                            <a href="tel:{{ $ph['number'] }}" target="_blank"> {{ $ph['number'] }}</a> <br>
                                        @endforeach
                                    </li>
                                @endif

                            </ul>
                        </div>

                        <div class="img">
                            <!--img src="public/img/banner1.jpg" alt=""-->
                            <img class="lazyload" src="{{ $storageUrl . '/img/sliders/' . $office->img_slider_1 }}" alt="{{ $office->name  }}" />
                            <a href="{{ route('distribuidor',$office->id ) }}" class=""><i class="flaticon flaticon-proximo"></i></a>
                        </div>
                    </div>
                </div>
            @endforeach
            
        </div>

    </div>
    
</section>

<div class="pie"></div>

</main>

@endsection
