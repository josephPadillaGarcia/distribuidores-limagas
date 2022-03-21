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
                    <h3 class="accordion__title js-title"><span class="text-acordeon" id="question{{ $faq["id"] }}">{{ $faq["question"] }}</span><span class="icono-acordeon flaticon-descargar"> </span></h3>
                    <div class="accordion__copy js-copy ">
                        <div class="editar" id="description{{ $faq["id"] }}">                            
                            {!! $faq["description"] !!}
                        </div>
                        
                        <div class="accordion__likes">
                            <p>¿Te ayudó esta información?</p>
                            <div class="accordion__likes__item">
                                <!--a href="#!" id="like"><img data-src="/storage/web/img/like.png" class="lazyload" alt=""><span id="">{{ $faq["like"] }}</span></a-->
                                <a href="#!" id="like{{ $faq["id"] }}" onclick="updatelikefaq('{{ $faq }}')">
                                    <img data-src="/storage/web/img/like.png" class="lazyload" alt="">
                                    <button class="" name="like" value="{{ $faq["like"] }}" id="button_like{{ $faq["id"] }}">
                                        {{ $faq["like"] }}
                                    </button>
                                </a>
                                <a href="#!" id="dislike{{ $faq["id"] }}">
                                    <img data-src="/storage/web/img/dislike.png" class="lazyload" alt="">
                                    <button class="" name="like" value="{{ $faq["dislike"] }}" id="button_dislike{{ $faq["id"] }}">
                                        {{ $faq["dislike"] }}
                                    </button>
                                </a>
                            </div>
                        </div>  
                    </div>                
                </div>
            @endforeach

        </div>
    </div>
</section>

@endsection

@push('scripts')
    
<script type="text/javascript">

function updatelikefaq(faq){
    /*e.preventDefault();*/
    $.ajaxSetup({headers:{'X-CSRF-TOKEN': jQuery('meta[name="csrf-token"]').attr('content')}  });

    /*const b_like = $('#button_like'+id).val(parseInt($('#button_like'+id).val()) + 1);
    var b_like_s = b_like.toString();*/

    const type = "POST";
    var formDatalike = {
        _method: 'put',
        id: faq.id,
        question: $('#question'+faq.id).html(),
        description: $('#description'+faq.id).html(),
        dislike: $('#button_dislike'+faq.id).val(),
    };

    var url = "{{route('cms.faqs.get','/3' )}}";

    console.log(faq[question])

    /*
    
    url= {{ route('cms.faqs.updatelike', $faq) }}

    console.log(url);
    console.log(formDatalike._method);
    console.log(formDatalike.id);
    console.log(formDatalike.question);
    console.log(formDatalike.description);
    console.log(formDatalike.like);
    console.log(isNaN(formDatalike.dislike));*/

    /*$.ajax({
        type: type,
        url: url,
        data: formDatalike,
        dataType: 'json',
        success: function (data){
            if(data){
                console.log("like actualizado");
            }
            else{
                console.log("LA CAGASTE");
            }
        },
        error: function (data){
            console.log(data);
        }
    });*/

};

$(document).ready(function(){

});

</script>

@endpush