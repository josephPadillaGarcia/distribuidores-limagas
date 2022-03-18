@extends('web.layouts.app')

@section('content')
@php
    $page = $data["page"];
    $faqs = $data["faqs"];
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

<!--section id="mensaje" class="mensajetext">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-6">
                <div class="content_mensaje">
                  <p>Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras.</p>
                </div>
            </div>
        </div>
    </div>
</section-->

<section class="section__acordion">
    <div class="container">

        <div class="accordion">

            @foreach ($faqs as $faq)
                <div class="accordion__item">
                    <h3 class="accordion__title js-title"><span class="text-acordeon">{{ $faq["question"] }}</span><span class="icono-acordeon flaticon-descargar"> </span></h3>
                    <div class="accordion__copy js-copy ">
                        <div class="editar">
                            
                            <p>{!! $faq["description"] !!}</p>
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
            @endforeach

        </div>
    </div>
</section>

    
@endsection