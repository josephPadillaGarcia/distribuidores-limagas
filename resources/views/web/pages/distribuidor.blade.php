@extends('web.layouts.app')

@section('content')
@php
    $storageUrl = config('services.storage_url');
@endphp

<header class="header-distribuidor img-bg" style="background-image: url({{ $storageUrl.'/img/fondo1.jpg' }});">
    <div class="container-short grid-single color_white">
        <div class="logo">
            <a href="/"><img src="{{ $storageUrl.'/img/logo1.png' }}" alt=""></a>
        </div>
        <div class="nav">
            <ul>
                <li><a href="#contacto"><i class="flaticon-mesa-de-ayuda"> </i>Contacto</a></li>
                <li><a href="#ubicacion"><i class="flaticon-ubicacion"> </i>Ubicación</a></li>
                <li><a href="#producto"><i class="flaticon-gas"> </i>Productos</a></li>
            </ul>
        </div>
    </div>
</header>

<section class="slider">
    <div class="fondo-img-bg" style="background-image: url({{ $storageUrl.'/img/fondo1.jpg' }});"></div>
    <div class="owl-slider owl-carousel owl-theme owl-general owl-general--centrar-navegadores">
        
            @if ($id->img_slider_1)
                <div class="item">
                    <img class="card__image" src="{{ $storageUrl . '/img/sliders/' . $id->img_slider_1 }}" alt="{{ $id->name  }}" />
                </div>
            @endif    
            
            @if ($id->img_slider_2)
                <div class="item">
                    <img class="card__image" src="{{ $storageUrl . '/img/sliders/' . $id->img_slider_2 }}" alt="{{ $id->name  }}" />
                </div>
            @endif  
            
            @if ($id->img_slider_3)
                <div class="item">
                    <img class="card__image" src="{{ $storageUrl . '/img/sliders/' . $id->img_slider_3 }}" alt="{{ $id->name  }}" />
                </div>
            @endif  

            @if ($id->img_slider_4)
                <div class="item">
                    <img class="card__image" src="{{ $storageUrl . '/img/sliders/' . $id->img_slider_4 }}" alt="{{ $id->name  }}" />
                </div>
            @endif  

            @if ($id->img_slider_5)
                <div class="item">
                    <img class="card__image" src="{{ $storageUrl . '/img/sliders/' . $id->img_slider_5 }}" alt="{{ $id->name  }}" />
                </div>
            @endif  
    
    </div>
</section>

<div class="main" style="background-image:url({{ $storageUrl.'/img/fondo-productos.jpg'}}) ;">
    
    <section class="container-short content">
        <h1>{{ $id->name }}</h1>
        <div class="editor">
            @if($id->description)
                {!! $id->description !!}
            @else
                <b>No hay una descripción</b>
            @endif
        </div>
        <div>
            <h3><strong>Métodos de pago</strong></h3>
            <ul class="list">
                @if ($id->payment_methods)
                    @foreach ($id->payment_methods as $pm)
                        <li><img src="{{ $storageUrl.'/img/'.$pm['img_method']}}" alt=""></li>
                    @endforeach
                @endif                
            </ul>
        </div>
        <div id="contacto">
            <h3 style="margin: 0;"><strong>Pedidos y atención al cliente</strong></h3>
        </div>
        <div class="telefono">
            <p><strong>Teléfono:</strong></p>
            <ul>
                @if ($id->phone_numbers)
                    @foreach ($id->phone_numbers as $pn)
                        <li><a href="tel:{{ $pn['number'] }}" class="btn btn2 btn-icon"><i class="flaticon flaticon-telefono"> </i>{{ $pn['number'] }}</a></li>      
                    @endforeach
                @endif
            
            </ul>
        </div>

        <div class="telefono">
            <p><strong>Whatsapp:</strong></p>
            <ul>
                @if ($id->num_what)
                    @foreach ($id->num_what as $pnw)
                        <li><a href="https://api.whatsapp.com/send/?phone=51{{ $pnw['numwhat'] }}&amp;text=Hola%2C+squisiera+por+favor+un+galon+de+gas&amp;app_absent=0" class="btn btn2 btn-icon"><i class="flaticon flaticon-whatsapp"> </i>{{ $pnw['numwhat'] }}</a></li>      
                    @endforeach
                @endif
            
            </ul>
        </div>
    
        <div class="correo">
            <b>Correo:</b>

            <ul>
                @if ($id->emails)
                    @foreach ($id->emails as $e)
                        <li><a href="" class="btn btn2 btn-icon"><i class="flaticon-email"> </i>{{ $e['name'] }}</a></li>
                    @endforeach
                @endif
                
            </ul>   
        </div>

        <div class="telefono">
            <p><strong>Síguenos en:</strong></p>
            @if ($id->link_face || $id->link_insta)
                <ul>
                    <li><a href="{{ $id->link_face }}" class="btn btn-circle"><i class="flaticon-facebook"></i></a></li>
                    <li><a href="{{ $id->link_insta }}" class="btn btn-circle"><i class="flaticon-instagram"></i></a></li> 
                </ul>               
            @else
                <strong>No hay redes sociales registrados</strong>
            @endif
        </div>
    
        <div class="ubicacion" id="ubicacion">
            <b>Ubicación:</b>
            <p><i class="flaticon flaticon-send"> </i>{{ $id->direction }}</p>
            <div class="mapa">
                @if($id->iframe)
                        {!! $id->iframe !!}
                    @endif
            </div>
        </div>
    
    </section>

    <section class="section-productos" id="producto">
        <div class="text-center">
            <div class="container-short">
                
                <img src="{{ $storageUrl.'/img/icon.png'}}" alt="">
                <h2><strong>Nuestros Productos para tu Hogar</strong></h2>
                <br><br>
                <div id="slider-historia">
                    @if ($id->products)
                        <div class="content-limagas">
    
                            @foreach ($id->products as $e)
                                @if ($e['tipogas'] == "limagas")
                                        <div class="card card-balon">
                                            <img class="lazyload" src="{{ $storageUrl . '/img/productos/' . $e['image'] }}" alt="{{ $e['name'] }}" />
                                            <div class="content-balon">
                                                <h4>{{ $e['name'] }}</h4>
                                                <span>{{ $e['precio'] }} kg</span>
                                            </div>
                                        </div>
                                @endif
                            @endforeach
    
                        </div>  
                    @endif
    
                    @if ($id->products)
                        <div class="content-otrogas">
                            
                                @foreach ($id->products as $e)
                                    @if ($e['tipogas'] == "otrotipogas")
                                        <div class="item">
                                            <div class="card card-balon">
                                                <img class="lazyload" src="{{ $storageUrl . '/img/productos/' . $e['image'] }}" alt="{{ $e['name'] }}" />
                                                <div class="content-balon">
                                                    <h4>{{ $e['name'] }}</h4>
                                                    <span>{{ $e['precio'] }} kg</span>
                                                </div>
                                            </div>
                                        </div>
                                    @endif
                                @endforeach
                            
                        </div>  
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
        $('.owl-balones-limagas.owl-carousel').owlCarousel({
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

        $('.owl-balones-otrotipo.owl-carousel').owlCarousel({
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