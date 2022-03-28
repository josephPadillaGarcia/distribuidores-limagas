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
        <form action="" method="POST" enctype="multipart/form-data">

            @csrf

            <div class="form-ww-us__group">
                <label for="">Nombre:*</label>
                <input type="text" name="nombre" id="wwu-name">
                <p class="message_error message_error--text-name"></p>
            </div>
            <div class="form-ww-us__group">
                <label for="">Apellido:*</label>
                <input type="text" name="apellido" id="wwu-last-name">
                <p class="message_error message_error--text-last-name"></p>
            </div>
            <div class="form-ww-us__group">
                <label for="">Correo electrónico:*</label>
                <input type="email" name="email" id="wwu-email">
            </div>
            <div class="form-ww-us__group">
                <label for="">Celular:*</label>
                <input type="text" name="phone" id="wwu-phone">
                <p class="message_error message_error--num"></p>
            </div>
            <div class="form-ww-us__group">
                <label for="">CV:*</label>
                <div class="content-input">
                    <div class="btn-file">
                        <span class="mask-file">
                            Adjuntar un archivo
                        </span>
                        <input class="file" type="file" name="archivo" id="file">
                    </div>
                    <span class="name_file" id="name_file_selected"></span>
                </div>
            </div>
            <div class="form-ww-us__group">
                <label for="">Puesto:*</label>
                <select name="puesto" id="puesto">
                    @foreach ($workwus as $item)                    
                        <option value="{{ $item["name_job"] }}">{{ $item["name_job"] }}</option>
                    @endforeach
                </select>
            </div>
            <div class="form-ww-us__group--checkbox">
                <label>
                    <input type="checkbox" class="default__check" id="btn-checkbox" name="check_acept">
                    <span class="custom__check"></span>
                    Acepto las <a href="{{ route('web.privacyPolicies') }}">politicas de privacidad web</a>
                </label>
                <p class="message_error message_error--checkbox">Debes aceptar las politicas de privacidad</p>
            </div> 
            <!--button class="form-ww-us--btn-submit">Enviar</button-->           
        </form>
        <button class="form-ww-us--btn-submit" id="btn-submit-wwus">Enviar</button>
        <p class="message_error message_error--page">Por favor llenar todos los campos requeridos</p>
    </div>
</section>

</main>

@endsection

@push('scripts')
    
<script type="text/javascript">
    $('.message_error--text-name').css("display", "none");
    $('.message_error--text-last-name').css("display", "none");
    $('.message_error--num').css("display", "none");

    $('#wwu-name').keyup(function() {
        if(onlytext(this.value) == false){
            $('.message_error--text-name').css("display", "block");
            $('.message_error--text-name').html('Solo letras ');
            $('#wwu-name').val("");
        }else{
            $('.message_error--text-name').css("display", "none");
        }        
    });

    $('#wwu-last-name').keyup(function() {
        if(onlytext(this.value) == false){
            $('.message_error--text-last-name').css("display", "block");
            $('.message_error--text-last-name').html('Solo letras ');
            $('#wwu-last-name').val("");
        }else{
            $('.message_error--text-last-name').css("display", "none");
        }        
    });

    $('#wwu-phone').keyup(function() {
        console.log(onlynum(this.value));
        if(onlynum(this.value) == true){
            $('.message_error--num').css("display", "block");
            $('.message_error--num').html('Solo números ');
            $('#wwu-phone').val("");
        }else{
            $('.message_error--num').css("display", "none");
        }  
        //$(this).val($(this).val().replace(/[^0-9]/g, ''));
    });

    function onlytext(texto) {
        var regex = /^[a-zA-Z ]+$/;
        return regex.test(texto);
    }

    function onlynum(num) {
        var regex = /[^0-9]/g;
        return regex.test(num);
    }

    $('#file').change(function(){
        var filename = $('#file').val().replace(/.*(\/|\\)/, '');
        $('#name_file_selected').html(filename);
    });

    $('#btn-submit-wwus').click(function(){

        $.ajaxSetup({headers:{'X-CSRF-TOKEN': jQuery('meta[name="csrf-token"]').attr('content')}  });

        $('.message_error--page').css("display", "none");
        var name_wwu = $('#wwu-name').val();
        var apellido_wwu = $('#wwu-last-name').val();
        var email_wwu = $('#wwu-email').val();
        var phone_wwu = $('#wwu-phone').val();
        var archivo_wwu = $('#file').val();
        var puesto_wwu = $("#puesto option:selected").val();
        var checkbox = $("#btn-checkbox").prop('checked');        

        if((!name_wwu || !apellido_wwu || !email_wwu || !phone_wwu) && checkbox == false){
            $('.message_error--checkbox').css("display", "block");
            $('.message_error--page').css("display", "block");
            console.log(checkbox);
        }else{
            
            if((!name_wwu || !apellido_wwu || !email_wwu || !phone_wwu) && checkbox == true){            
                $('.message_error--checkbox').css("display", "none");
                $('.message_error--page').css("display", "block");
                console.log(checkbox);
            }else{

                if(checkbox == false){
                    $('.message_error--checkbox').css("display", "block");
                }else{
                    $('.message_error--checkbox').css("display", "none");
                    var formData = {
                        name: name_wwu,
                        apellido: apellido_wwu,
                        email: email_wwu,
                        phone: phone_wwu,
                        archivo: archivo_wwu,
                        puesto: puesto_wwu,
                    }

                    var url = "{{ route('web.send') }}"
                    var type = "POST";

                    //console.log(JSON.stringify(formData));
                    if($("#btn-checkbox").prop('checked')){
                        $.ajax({
                            type: type,
                            url: url,
                            data: formData,
                            dataType: 'json',
                            success: function (data){
                                $(location).attr('href',"{{ route('web.index') }}");
                            },
                            error: function (data){
                                console.log("No enviaste: " + data);
                            }
                        });
                    }else{
                        $('.message_error--page').css("display", "block");
                    }
                }
                
                
            }

        }

        
        /*if($("#btn-checkbox").prop('checked')){
                    $.ajax({
                        type: type,
                        url: url,
                        data: formData,
                        dataType: 'json',
                        success: function (data){
                            $(location).attr('href',"{{ route('web.index') }}");
                        },
                        error: function (data){
                            console.log("No enviaste: " + data);
                        }
                    });
                }else{
                    $('.message_error--page').css("display", "block");
                }*/

    });

</script>

@endpush