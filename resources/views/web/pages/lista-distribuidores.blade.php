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
@endphp
<main>


<header class="img-bg" style="background-image: url( {{ $storageUrl.'/img/fondo1.jpg' }} );">
    <div class="container header-filter">
        <div class="logo">
            <img src="{{ $storageUrl.'/img/logo1.png' }}" alt="">
        </div>
        <div class="nav_busqueda color_white">
            <i class="flaticon flaticon-star"></i>
            <div>Departamento: <b>{{ $departamento }}</b></div>
            <div class="line"></div>
            <div>Provincia: <b>{{ $provincia }}</b></div>
            <div class="line"></div>
            <div>Distrito: <b>{{ $distrito }}</b></div>
        </div>
        <div class="align-center">
            <a href="{{ route("index") }}" class="btn btn1 btn-icon"> <i class="flaticon flaticon-atras"></i> Otra ubicación</a>
        </div>
    </div>
</header>

<section class="section">
    <div class="container">
        <div class="text-center padding">22 Distribuidores encontrados:</div>

        <div class="row">

            @foreach ($offices as $office)
                <div class="col-lg-4 col-md-6">
                    <div class="card card-distribuidor">
                        <div class="content">
                            <h3>{{ $office->name }}</h3>
                            <ul>
                                <li><i class="flaticon flaticon-star"> </i>{!! $office->direction !!}</li>
                                
                                @if($office->phone_numbers)
                                    <li>
                                        <i class="flaticon flaticon-telefono"> </i>
                                        @foreach($office->phone_numbers as $ph)
                                            <a href="tel:{{ $ph['number'] }}" target="_blank"> {{ $ph['number'] }}</a> <br>
                                        @endforeach
                                    </li>
                                @endif

                            </ul>
                        </div>

                        <div class="img">
                            <img src="public/img/banner1.jpg" alt="">
                            <a href="{{ route('distribuidor',$office->id ) }}" class=""><i class="flaticon flaticon-proximo"></i></a>
                        </div>
                    </div>
                </div>
            @endforeach
            
        </div>

    </div>
</section>

<!--div class="sucursales__list">
    <div class="container">
        <div class="row">   
            @foreach($offices as $office)
            <div class="col-lg-4 col-md-6">
                <div class="sucursales__card">
                    <div class="sucursales__head">
                        <div class="sucursales__header">
                            <b>{{ $office->name }}</b>
                        </div>
                        <div class="sucursales__body">
                            <ul>
                                <li>
                                    <span class="ri-lg ri-map-pin-2-fill"></span>
                                    <p>
                                        {!! $office->direction !!}
                                    </p>
                                </li>
                                @if($office->emails)
                                <li>
                                    <span class="ri-lg ri-mail-fill"></span>
                                    <p>
                                        @foreach($office->emails as $em)
                                        <a href="to:{{ $em['name'] }}" target="_blank">  {{ $em['name'] }}</a> <br>
                                        @endforeach
                                    </p>
                                </li>
                                @endif

                                @if($office->phone_numbers)
                                <li>
                                    <span class="ri-lg ri-phone-fill"></span>
                                    <p>
                                        @foreach($office->phone_numbers as $ph)
                                            <a href="tel:{{ $ph['number'] }}" target="_blank"> {{ $ph['number'] }}</a> <br>
                                        @endforeach
                                    </p>
                                </li>
                                @endif
                                
                                @if($office->schedule)
                                <li>
                                    <span class="ri-lg ri-time-fill"></span>
                                        <pre>{!! $office->schedule !!}</pre>
                                </li>
                                @endif
                            </ul>
                        </div>
                        <div class="sucursales__action">
                            <a href="{{ route('distribuidor',$office->id ) }}">Ver</a>
                        </div>
                    </div>
                </div>
            </div>
            @endforeach
        </div>
    </div>
</div-->

</main>

@endsection
