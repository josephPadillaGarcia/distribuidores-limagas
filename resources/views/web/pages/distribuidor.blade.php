@extends('web.layouts.app')

@section('content')
@php
    $storageUrl = config('services.storage_url');
@endphp
    <!--h1>DATOS DE DISTRIBUIDOR</h1>
    <p><b>name:</b>{{ $id->name }}</p>
    <p><b>Contacto:</b></p>
    <ul>
        @if ($id->phone_numbers)
            @foreach ($id->phone_numbers as $pn)
                <li>    
                    Telefóno: {{ $pn['number'] }}
                </li>            
            @endforeach
        @endif
    </ul>
    <p><b>Email:</b></p>
    <ul>
        @if ($id->emails)
            @foreach ($id->emails as $e)
                <li>
                    Correos: {{ $e['name'] }}
                </li>
            @endforeach
        @endif
    </ul>
    <p><b>Dirección:</b></p>
    <p>{{ $id->direction }}</p>
    <p><b>Mapa:</b></p>
    <div class="">
        @if($id->iframe)
            {!! $id->iframe !!}
        @endif
    </div-->

    <section class="container-short">
        <h1>{{ $id->name }}</h1>
        <p><strong>🕐 Horarios de atención:</strong></p>
        <p>
            @if($id->horario)
                {{ $id->horario }}
            @else
                <p>No hay horario registrado</p>
            @endif
        </p>
        <p><strong>🚚 Zona de cobertura:</strong></p>
        <p>
            @if($id->zona)
                {{ $id->zona }}
            @else
                <p>No hay zonas registradas</p>
            @endif
        </p>
    
        <p><strong>Pedidos y atención al cliente</strong></p>
    
        <div class="telefono">
            <b>Teléfono:</b>
            <ul>
                @if ($id->phone_numbers)
            @foreach ($id->phone_numbers as $pn)
                <li><a href="" class="btn btn2"><i class=""> </i>{{ $pn['number'] }}</a></li>          
            @endforeach
        @endif
            
            </ul>
        </div>
    
        <div class="correo">
            <b>Correo:</b>
            <ul>
                @if ($id->emails)
                    @foreach ($id->emails as $e)
                        <li><a href="" class="btn btn2"><i class=""> </i>{{ $e['name'] }}</a></li>
                    @endforeach
                @endif
                
            </ul>
        </div>
    
        <div class="ubicacion">
            <b>Dirección:</b>
            <p>{{ $id->direction }}</p>
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
    });
</script>
@endpush