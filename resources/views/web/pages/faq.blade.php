@extends('web.layouts.app')

@section('content')
@php
    $page = $data["page"];
@endphp

<!-- Banner-->
<section
class="lazyload position-relative bottom_section section_bannerNosotros"
data-bg=""
id="seccion_banner_global"
>
<div class="mb-4 rounded ">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12 px-0">
                <div class="content_banner">
                    <h1 class="titulo text-center titulo_banner">Preguntas Frecuentes</h1>
                </div>
            </div>
        </div>
    </div>
</div>
</section>
<!-- End Banner -->

<section id="mensaje" class="mensajetext">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-6">
                <div class="content_mensaje">
                  <p>Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras.</p>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="section__acordion">
    <div class="container">

        <div class="accordion">
            <div class="accordion__item">
                <h3 class="accordion__title js-title"><span class="text-acordeon">¿Cuándo voy a recibir mi envío?</span><span class="icono-acordeon flaticon-descargar active "> </span></h3>
                <div class="accordion__copy accordion__copy--open js-copy ">
                    <div class="editar">
                        
                    <p class="">El plazo de entrega de un envío estándar es de 2 a 3 días hábiles. Seguramente el remitente te enviará un e-mail con las condiciones de entrega.

                    Tené en cuenta que los tiempos pueden variar, según el producto o servicio elegido y dependiendo de la distancia entre la ubicación de origen y la de destino.
                    
                    Desde Andreani, te contaremos las novedades a través de e-mails o SMS.
                    
                    »Si no los estás recibiendo, ingresá a tu envío y sucribite al servicio de notificaciones.</p>
                    </div>
                    
                    <div class="accordion__likes">
                        <p>¿Te ayudó esta información?</p>
                        <div class="accordion__likes__item">
                            <a href="#!"><img data-src="/storage/web/img/like.png" class="lazyload" alt=""><span>0</span></a>
                            <a href="#!"><img data-src="/storage/web/img/dislike.png" class="lazyload" alt=""><span>0</span></a>
                        </div>
                    </div>  
                </div>                
            </div>
            
            <div class="accordion__item">
                <h3 class="accordion__title js-title"><span class="text-acordeon">¿Cuáles son los horarios de entrega en domicilio?</span><span class="icono-acordeon flaticon-descargar"> </span></h3>
                <div class="accordion__copy  js-copy">
                    <p class="">By not having the imagination to imagine what the content "might" be, a design consideration is lost. Meaning becomes obfuscated because "it's just text", understandability gets compromised because nobody realized that this</p>
                </div>                  
            </div>

            <div class="accordion__item">
                <h3 class="accordion__title js-title"><span class="text-acordeon">¿Por qué podría estar demorado mi envío?</span><span class="icono-acordeon flaticon-descargar"> </span></h3>
                <div class="accordion__copy  js-copy">
                    <p class="">By not having the imagination to imagine what the content "might" be, a design consideration is lost. Meaning becomes obfuscated because "it's just text", understandability gets compromised because nobody realized that this</p>
                </div>                  
            </div>

            <div class="accordion__item">
                <h3 class="accordion__title js-title"><span class="text-acordeon">¿Cuándo voy a recibir mi envío?</span><span class="icono-acordeon flaticon-descargar"> </span></h3>
                <div class="accordion__copy  js-copy">
                    <p class="">By not having the imagination to imagine what the content "might" be, a design consideration is lost. Meaning becomes obfuscated because "it's just text", understandability gets compromised because nobody realized that this</p>
                </div>                  
            </div>

            <div class="accordion__item">
                <h3 class="accordion__title js-title"><span class="text-acordeon">¿Cuáles son los horarios de entrega en domicilio?</span><span class="icono-acordeon flaticon-descargar"> </span></h3>
                <div class="accordion__copy  js-copy">
                    <p class="">By not having the imagination to imagine what the content "might" be, a design consideration is lost. Meaning becomes obfuscated because "it's just text", understandability gets compromised because nobody realized that this</p>
                </div>                  
            </div>

            <div class="accordion__item">
                <h3 class="accordion__title js-title"><span class="text-acordeon">¿Por qué podría estar demorado mi envío?</span><span class="icono-acordeon flaticon-descargar"> </span></h3>
                <div class="accordion__copy js-copy">
                    <p class="">By not having the imagination to imagine what the content "might" be, a design consideration is lost. Meaning becomes obfuscated because "it's just text", understandability gets compromised because nobody realized that this</p>
                </div>                  
            </div>

        </div>
    </div>
</section>

    
@endsection