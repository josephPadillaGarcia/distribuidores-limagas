@extends('web.layouts.app')

@section('content')
@php
    $page = $data["page"];
    $workwus = $data["workwus"];
@endphp

<main>

    @php
       
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
                    <h1 class="titulo text-center titulo_banner">Trabaja con nosotros</h1>
                </div>
            </div>
        </div>
    </div>
</div>
</section>

<section class="form-ww-us">
    <div class="container_form">
        <form action="" method="">

            <div class="form-ww-us__group">
                <label for="">Nombre:*</label>
                <input type="text" name="nombre" id="wwu-name">
            </div>
            <div class="form-ww-us__group">
                <label for="">Apellido:*</label>
                <input type="text" name="apellido" id="wwu-last-name">
            </div>
            <div class="form-ww-us__group">
                <label for="">Correo electrónico:*</label>
                <input type="email" name="email" id="wwu-email">
            </div>
            <div class="form-ww-us__group">
                <label for="">Celular:*</label>
                <input type="text" name="phone" id="wwu-phone">
            </div>
            <div class="form-ww-us__group">
                <label for="">CV:*</label>
                <div class="content-input">
                    <div class="btn-file">
                        <span class="mask-file">
                            Adjuntar un archivo
                        </span>
                        <input class="file" type="file" name="archivo">
                    </div>
                </div>
            </div>
            <div class="form-ww-us__group">
                <label for="">Puesto:*</label>
                <select name="puesto" id="">
                    @foreach ($workwus as $item)                    
                        <option value="{{ $item['id'] }}">{{ $item["name_job"] }}</option>
                    @endforeach
                </select>
            </div>
            <div class="form-ww-us__group--checkbox">
                <label>
                    <input type="checkbox" class="default__check" id="btn-checkbox">
                    <span class="custom__check"></span>
                    Acepto las <a href="#!">politicas de privacidad web</a>
                </label>
                <p class="message_error message_error--page">Debes aceptar las politicas de privacidad</p>
            </div>            
        </form>
        <button class="form-ww-us--btn-submit" id="btn-submit-wwus">Enviar</button>
    </div>
</section>

</main>

@endsection

@push('scripts')
    
<script type="text/javascript">

    $('#btn-submit-wwus').click(function(){
        $.ajaxSetup({headers:{'X-CSRF-TOKEN': jQuery('meta[name="csrf-token"]').attr('content')}  });

        $('.message_error--page').css("display", "none");

        var formData = {
            name: $('#wwu-name').val(),
            apellido: $('#wwu-last-name').val(),
            email: $('#wwu-email').val(),
            phone: $('#wwu-phone').val(),
        }

        var url = "{{ route('web.send') }}"
        var type = "POST";

        if($("#btn-checkbox").prop('checked')){
            $.ajax({
                type: type,
                url: url,
                data: formData,
                dataType: 'json',
                success: function (data){
                    if(data){
                        console.log("ENVIADO: " + JSON.stringify(data));
                    }
                    else{
                        console.log("LA CAGASTE");
                    }
                },
                error: function (data){
                    console.log("No enviaste: " + data);
                }
            });
        }else{
            $('.message_error--page').css("display", "block");
        }

    });

</script>

@endpush