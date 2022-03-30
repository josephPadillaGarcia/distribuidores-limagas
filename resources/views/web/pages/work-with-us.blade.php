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
        <form action="" method="POST" enctype="multipart/form-data" id="form-wwu">

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
                <p class="message_error message_error--file"></p>
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
            <!--button class="form-ww-us--btn-submit" id="btn-submit-wwus">Enviar</button-->
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
        if(onlynum(this.value) == true){
            $('.message_error--num').css("display", "block");
            $('.message_error--num').html('Solo números ');
            $('#wwu-phone').val("");
        }else{
            $('.message_error--num').css("display", "none");
        } 
    });

    function onlytext(texto) {
        var regex = /^[a-zA-Z ]+$/;
        return regex.test(texto);
    }

    function onlynum(num) {
        var regex = /[^0-9]/g;
        return regex.test(num);
    }

    $('#file').change(function(e){
        $('.message_error--file').css("display", "none");
        var ext = $( this ).val().split('.').pop();
        if(ext == "pdf"){
            console.log("La extensión es: " + ext);
            if($(this)[0].files[0].size > 2097152){
                $('.message_error--file').css("display", "block");
                $('.message_error--file').html("El peso maximo es de 2MB");
                $('#name_file_selected').html("");
            }else{
                var filename = $('#file').val().replace(/.*(\/|\\)/, '');            
                $('#name_file_selected').val(filename);
                $('#name_file_selected').html(filename);
            }    
        }else{
            $('#name_file_selected').html("");
            $('.message_error--file').css("display", "block");
            $('.message_error--file').html("Extensión " + ext + " no permitida, subir un formato PDF");
            console.log("Extensión no permitida: " + ext);
        }
    });

/*--------------------------------------------------------*/
    /* ENCIO DE INDORMACION */

    const formwwu =  $('#form-wwu');

    $('#btn-submit-wwus').click(function(){
        $.ajaxSetup({headers:{'X-CSRF-TOKEN': jQuery('meta[name="csrf-token"]').attr('content')}  });

        $('.message_error--page').css("display", "none");

        var name_wwu = $('#wwu-name').val();
        var apellido_wwu = $('#wwu-last-name').val();
        var email_wwu = $('#wwu-email').val();
        var phone_wwu = $('#wwu-phone').val();
        var file_name = $("#name_file_selected").val();
        var puesto_wwu = $("#puesto option:selected").val();
        var checkbox = $("#btn-checkbox").prop('checked');

        if((!name_wwu || !apellido_wwu || !email_wwu || !phone_wwu || !file_name) && checkbox == false){
            $('.message_error--checkbox').css("display", "block");
            $('.message_error--page').css("display", "block");
        }else{
            
            if((!name_wwu || !apellido_wwu || !email_wwu || !phone_wwu || !file_name) && checkbox == true){            
                $('.message_error--checkbox').css("display", "none");
                $('.message_error--page').css("display", "block");
            }else{

                if(checkbox == false){
                    $('.message_error--checkbox').css("display", "block");
                }else{
                    $('.message_error--checkbox').css("display", "none");

                    const formData = new FormData(formwwu[0]);
                    var url = "{{ route('web.send') }}";
                    var type = "POST";
                    $.ajax({
                        type: type,
                        url: url,
                        data: formData,
                        dataType: 'json',
                        processData: false,
                        contentType: false,
                        success: function (data){
                            $(location).attr('href',"{{ route('web.index') }}");
                        },
                        error: function (xhr){
                            console.log(xhr.responseText);
                        }
                    });                    
                }                
            }
        }
    });
    /*=======================================================*/

</script>

@endpush