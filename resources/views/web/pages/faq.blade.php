@extends('web.layouts.app')

@section('content')
@php
    $page = $data["page"];
    $faqs = $data["faqs"];
    $storageUrl = config('services.storage_url');
    $content = $data["content"];
    $locale = Config::get('app.locale');
@endphp

<main>

    @php
        $index_banner = array_search("Banner", array_column($content, 'name'));
        $banner = $content[$index_banner];

        $image_banner = "";
        if(in_array("image", $banner["content_formatted"])) {
            $index = array_search("image", array_column($banner["content"], 'field'));
            $image_banner = $storageUrl . '/img/content/' . $banner["content"][$index]["value"];
        }

        $title_banner = "";
        if(in_array("title", $banner["content_formatted"])) {
            $index = array_search("title", array_column($banner["content"], 'field'));
            $title_banner = $banner["content"][$index]["value_" . $locale];
        }
    @endphp

    <!-- Banner-->
<section
class="lazyload position-relative bottom_section section_bannerNosotros"
data-bg="{{ $image_banner }}"
id="seccion_banner_global"
>
<div class="mb-4 rounded ">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12 px-0">
                <div class="content_banner">
                    <h1 class="titulo text-center titulo_banner">{{ $title_banner }}</h1>
                </div>
            </div>
        </div>
    </div>
</div>
</section>
<!-- End Banner -->

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
                                <a href="#!" id="like{{ $faq["id"] }}" onclick="updatelikefaq('{{ $faq['id'] }}')">
                                    <img data-src="/storage/web/img/like.png" class="lazyload" alt="">
                                    <button class="" name="like" value="{{ $faq["like"] }}" id="button_like{{ $faq["id"] }}">
                                        {{ $faq["like"] }}
                                    </button>
                                </a>
                                <a href="#!" id="dislike{{ $faq["id"] }}" onclick="updatedislikefaq('{{ $faq['id'] }}')">
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

</main>

@endsection

@push('scripts')
    
<script type="text/javascript">

function updatelikefaq(id){
    $.ajaxSetup({headers:{'X-CSRF-TOKEN': jQuery('meta[name="csrf-token"]').attr('content')}  });

    const type = "POST";
    var formDatalike = {
        _method: 'put',
        id: id,
        question: $('#question'+id).html(),
        description: $('#description'+id).html(),
        like: $('#button_like'+id).val(),
        dislike: $('#button_dislike'+id).val(),
    };

    var url = "{{route('api.post.update-like', '')}}"+"/"+id;

    $.ajax({
        type: type,
        url: url,
        data: formDatalike,
        dataType: 'json',
        success: function (data){
            if(data){
                $('#button_like'+id).html(data.like);
            }
            else{
            }
        },
        error: function (data){
        }
    });

};

function updatedislikefaq(id){
    $.ajaxSetup({headers:{'X-CSRF-TOKEN': jQuery('meta[name="csrf-token"]').attr('content')}  });

    const type = "POST";
    var formDatalike = {
        _method: 'put',
        id: id,
        question: $('#question'+id).html(),
        description: $('#description'+id).html(),
        like: $('#button_like'+id).val(),
        dislike: $('#button_dislike'+id).val(),
    };

    var url = "{{route('api.post.update-dislike', '')}}"+"/"+id;

    $.ajax({
        type: type,
        url: url,
        data: formDatalike,
        dataType: 'json',
        success: function (data){
            if(data){
                $('#button_dislike'+id).html(data.dislike);
            }
            else{
            }
        },
        error: function (data){
            console.log(JSON.stringify(data));
        }
    });
};

</script>

@endpush