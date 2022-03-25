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
                <input type="text" name="nombre">
            </div>
            <div class="form-ww-us__group">
                <label for="">Apellido:*</label>
                <input type="text" name="nombre">
            </div>
            <div class="form-ww-us__group">
                <label for="">Correo electrónico:*</label>
                <input type="text" name="nombre">
            </div>
            <div class="form-ww-us__group">
                <label for="">Celular:*</label>
                <input type="text" name="nombre">
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
                <input type="checkbox" id="accept" name="accept" value="">
                <label for="accept"> Acepto las <a href="#!">politicas de privacidad web</a></label>
                <label>
                    <input type="checkbox" class="default__check">
                    <span class="custom__check"></span>
                    Checkbox
                </label>
            </div>
            <button class="form-ww-us--btn-submit" type="submit">Enviar</button>
        </form>
    </div>
</section>

</main>

@endsection

@push('scripts')
    
<script type="text/javascript">



</script>

@endpush