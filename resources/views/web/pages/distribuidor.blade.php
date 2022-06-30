@extends('web.layouts.app')

@section('content')
@php
    $storageUrl = config('services.storage_url');
@endphp

<header class="header-distribuidor img-bg" style="background-image: url({{ $storageUrl.'/img/fondo1.jpg' }});">
    <div class="container-short grid-single color_white">
        <div class="logo">
            <img src="{{ $storageUrl.'/img/logo1.png' }}" alt="">
        </div>
        <div class="nav">
            <ul>
                <li><a href=""><i class="flaticon flaticon-star"> </i>Contacto</a></li>
                <li><a href=""><i class="flaticon flaticon-star"> </i>Ubicación</a></li>
                <li><a href=""><i class="flaticon flaticon-star"> </i>Productos</a></li>
            </ul>
        </div>
    </div>
</header>

<section class="slider">
    <div class="owl-slider owl-carousel owl-theme owl-general owl-general--centrar-navegadores">
        <div class="item">
            <img class="card__image" src="{{ $storageUrl.'/img/banner1.jpg'}}" alt="" >
        </div>
        <div class="item">
            <img class="card__image" src="{{ $storageUrl.'/img/banner2.jpg'}}" alt="" >
        </div>
        <div class="item">
            <img class="card__image" src="{{ $storageUrl.'/img/banner3.jpg'}}" alt="" >
        </div>
        <div class="item">
            <img class="card__image" src="{{ $storageUrl.'/img/banner4.jpg'}}" alt="" >
        </div>
    </div>
</section>

<div class="main" style="background-image:url({{ $storageUrl.'/img/fondo-productos.jpg'}}) ;">
    
    <section class="container-short content">
        <h1>{{ $id->name }}</h1>
        <div>
            @if($id->description)
                {!! $id->description !!}
            @else
                <b>No hay horario registrado</b>
            @endif
        </div>
        <div class="telefono">
            <b>Teléfono:</b>


            <ul>
                @if ($id->phone_numbers)
                    @foreach ($id->phone_numbers as $pn)
                        <li><a href="" class="btn-dis btn2 btn-icon"><i class="flaticon flaticon-telefono"> </i>{{ $pn['number'] }}</a></li>          
                    @endforeach
                @endif
            
            </ul>
        </div>
    
        <div class="correo">
            <b>Correo:</b>

            <ul>
                @if ($id->emails)
                    @foreach ($id->emails as $e)
                        <li><a href="" class="btn-dis btn2 btn-icon"><i class="flaticon flaticon-correo-electronico"> </i>{{ $e['name'] }}</a></li>
                    @endforeach
                @endif
                
            </ul>   
        </div>
    
        <div class="ubicacion">
            <b>Dirección:</b>
            <p><i class="flaticon flaticon-send"> </i>{{ $id->direction }}</p>
            <div class="mapa">
                @if($id->iframe)
                        {!! $id->iframe !!}
                    @endif
            </div>
        </div>
    
    </section>


    <section class="section-productos">
        <div class="text-center">
            <h2>Nuestros Productos para tu Hogar</h2>
            <div id="slider-historia">
                <div class="owl-balones owl-carousel owl-theme owl-general owl-general--centrar-navegadores">

                    @if ($id->products)
                        @foreach ($id->products as $e)
                            <div class="item">
                                <div class="card card-balon">
                                    <img class="lazyload" src="{{ $storageUrl . '/img/productos/' . $e['image'] }}" alt="{{ $e['name'] }}" />
                                    <h4>{{ $e['name'] }}</h4>
                                    <span>{{ $e['precio'] }}</span>
                                </div>
                            </div>
                        @endforeach
                    @endif

                </div>
            </div>
        </div>
    </section>

</div>

<div class="pie"></div>


@endsection

@push('scripts')
<script type="text/javascript">
    $(document).ready(function () {
        $('.owl-balones.owl-carousel').owlCarousel({
            loop: false,
            margin: 10,
            nav: true,
            center: true,
            dots: true,
            autoplay: true,
            autoplayTimeout: 4000,
            autoplayHoverPause: true,
            navText: ["<span class='flaticon-atras'></span>","<span class='flaticon-proximo'></span>"],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                1049: {
                    items: 5
                }
            }
        });


        $('.owl-slider.owl-carousel').owlCarousel({
            loop: false,
            margin: 30,
            nav: true,
            center: true,
            dots: true,
            autoplay: true,
            autoplayTimeout: 4000,
            autoplayHoverPause: true,
            navText: ["<span class='flaticon-atras'></span>","<span class='flaticon-proximo'></span>"],
            responsive: {
                0: {
                    items: 1.2,
                    margin: 20
                },
                600: {
                    items: 1.3
                },
                1049: {
                    items: 1.9
                }
            }
        });
    });
</script>
@endpush