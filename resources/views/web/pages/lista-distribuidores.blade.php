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
    //$storageUrl = config('services.storage_url');
@endphp
<main>

<header class="header-filter">
    <div class="logo">
        <img src="public/img/logo2.png" alt="">
    </div>
    <div class="nav_busqueda">
        <i></i>
        <div class="grid_filter">
            <div>Departamento:<b>{{ $departamento }}</b></div>
            <div>Provincia:<b>{{ $provincia }}</b></div>
            <div>Distrito:<b>{{ $distrito }}</b></div>
        </div>
    </div>
    <div>
        <a href="{{ route("index") }}" class="btn btn1"> <i></i> Otra ubicación</a>
    </div>
</header>

<div class="sucursales__list">
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
                    @if($office->iframe)
                    <!--div class="sucursales__footer">
                        {!! $office->iframe !!}
                    </div-->
                    @endif
                </div>
            </div>
            @endforeach
        </div>
    </div>
</div>

</main>

@endsection
