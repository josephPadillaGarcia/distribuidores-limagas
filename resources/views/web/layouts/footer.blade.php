@php
$information = $footer["information"];
$social_networks = $footer["social_networks"];
$locale = $footer["locale"];
$routeLocale = $footer["routeLocale"];
@endphp
<footer class="grid align-center lazyload" data-bg="/storage/web/img/footer.png">
    <div class="container">
        <div class="row">
            <div class="col-lg-3 col-md-12">
                <div class="logo_blanco">
                    <img class="lazyload" src="/storage/web/img/dinet_blanco.png" alt="" />
                </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-12">
                <div class="info_footer">
                    @if(isset($information['direction']))
                    <div>
                        {!! $information['direction'] !!}
                    </div>
                    @endif
                    <p>
                        <b>Chatbot Whatssapp:</b>
                        @if($information['whatsapp_number'])
                        <a class="chatbot-wsp">+51
                            {{ $information['whatsapp_number'] }}
                        </a>
                        @endif
                    </p>
                    <div class="redes">
                        @if(count($social_networks))
                        <ul class="grid align-center">
                            @foreach($social_networks as $sn)
                            <li>
                                <a href="{{ $sn['url'] }}" target="_blank" rel="noopener">
                                    @if(isset($sn['master_social_networks']['icon']))
                                    <i class="{{ 'flaticon-' . $sn['master_social_networks']['icon'] }}"></i>
                                    @endif
                                </a>
                            </li>
                            @endforeach
                        </ul>
                        @endif
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 col-6">
                <div class="menu_footer">
                    <ul>
                        <li>
                            <a href="{!! Helper::getCustomRoute('web.aboutUs', $routeLocale) !!}">
                                <img class="lazyload" src="/storage/web/img/icon_list.png" alt="Sobre Dinet" />
                                {{ __("Sobre Dinet") }}
                            </a>
                        </li>
                        <li>
                            <a href="{!! Helper::getCustomRoute('web.services', $routeLocale) !!}">
                                <img class="lazyload" src="/storage/web/img/icon_list.png" alt="Servicios" />
                                {{ __("Servicios") }}
                            </a>
                        </li>
                        <li>
                            <a href="{!! Helper::getCustomRoute('web.quotations', $routeLocale) !!}">
                                <img class="lazyload" src="/storage/web/img/icon_list.png" alt="Cotizaciones" />
                                {{ __("Cotizaciones") }}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 col-6">
                <div class="opciones_footer">
                    <ul>
                        <li>
                            @if($information['book_link'])
                            <a href="{{ $information['book_link'] }}">
                                <img class="lazyload" src="/storage/web/img/icon_libro.png" alt="Libro de reclamaciones" />
                                {{ __("Libro de reclamaciones") }}
                            </a>
                            @endif
                        </li>
                        <li>
                            @if($information['api_link'])
                            <a href="{{ $information['api_link'] }}">
                                <span>
                                    <i class="flaticon-settings"></i>
                                </span>
                                @if($information['name_api'])
                                {{ $information['name_api'] }}
                                @endif
                            </a>
                            @endif
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="pie">
            <div class="row justify-content-between">
                <div class="col-lg-3 col-md-5 col-sm-12">
                    <div class="copyright">
                        {{ date("Y") }} Dinet © All rights reserved.
                    </div>
                </div>
                <div class="col-lg-3 col-md-5 col-sm-12">
                </div>
            </div>
        </div>
    </div>

    @if($information['whatsapp_number'])
    <div class="chat-bot chat-bot--mobil">
        <ul>
            <li class="bot">
                <a class="chatbot-wsp" target="_blank">
                    <img data-src="/storage/web/img/bot.png" class="lazyload" alt="" />
                </a>
            </li>
        </ul>
    </div>
    @endif

<form class="encuesta" action="" method="post">
    <div class="encuesta--show" id="options">

        <div class="encuesta__container">
            <div class="encuesta__head">
                <p>¿Cuán probable es que recomiendes Dinet a un conocido?</p>
                <button class="btn_close">
                    <span>
                        <i class="flaticon-cancelar"></i>
                    </span>
                </button>
            </div>
            <div class="encuesta__body">
                <div class="encuesta__option" id="option">
                    <button class="" value="1">
                        <img data-src="/storage/web/img/face_1.png" class="lazyload" alt="" />
                    </button>
                    <button class="" value="2">
                        <img data-src="/storage/web/img/face_2.png" class="lazyload" alt="" />
                    </button>
                    <button class="" value="3">
                        <img data-src="/storage/web/img/face_3.png" class="lazyload" alt="" />
                    </button>
                    <button class="" value="4">
                        <img data-src="/storage/web/img/face_4.png" class="lazyload" alt="" />
                    </button>
                    <button class="" value="5">
                        <img data-src="/storage/web/img/face_5.png" class="lazyload" alt="" />
                    </button>
                </div>
            </div>
            <div class="encuesta__action">
                <a href="#!" class="b_boton text-white text-center btn_global" id="btn_encuesta">
                    Siguiente
                </a>
            </div>
        </div>
    </div>
    
    <div class="encuesta--hide" id="respuesta">
        <div class="encuesta__container">
            <div class="encuesta__head">
                <p>Cuentanos los motivos de tu respuesta</p>
                <button class="btn_close">
                    <span>
                        <i class="flaticon-cancelar"></i>
                    </span>
                </button>
            </div>
            <div class="encuesta__body">
                <div class="encuesta__campo">
                    <textarea name="textarea" placeholder="Por favor, escribe aquí..."></textarea>
                </div>
            </div>
            <div class="encuesta__action">
                <a
                    href="!#"
                    class="b_boton text-white text-center btn_global"
                    id="enviar"
                >
                    Enviar
                </a>
            </div>
        </div>
    </div>
    
    <div class="encuesta--hide" id="gracias">
        <div class="encuesta__container">
            <div class="encuesta__head">
                <button class="btn_close">
                    <span>
                        <i class="flaticon-cancelar"></i>
                    </span>
                </button>
            </div>
            <div class="encuesta__body">
                <p><strong>Gracias por tu opinión</strong></p>
            </div>
            <div class="encuesta__action">
            </div>
        </div>
    </div>
    
</form>

</footer>

@push('scripts')
<script type="text/javascript">
    $(document).ready(function () {
        $('#btn_encuesta').prop('disabled', true); 
        $("ul.navbar-nav li.dropdown").hover(
                function() {
                    $(this)
                        .find(".dropdown-menu")
                        .stop(true, true)
                        .delay(200)
                        .fadeIn(500);
                },
                function() {
                    $(this)
                        .find(".dropdown-menu")
                        .stop(true, true)
                        .delay(200)
                        .fadeOut(500);
                }
            );

        $(".chatbot-wsp").click(function(e) {
            e.preventDefault();

            let number = @php echo($information['whatsapp_number']) @endphp

            let link = `https://wa.me/+51${number}?text=${encodeURIComponent(
                "Hola quisiera información del servicio"
            )}`;
            
            window.open(link, "_blank");
        });

        /*--------------------------*/
        /*ENCUESTA*/

        $(".encuesta__option a").click(function(e){
            e.preventDefault();
            if($(this).hasClass("active_face")){
                $(this).removeClass("active_face");
            }else{
                $(".encuesta__option a").removeClass("active_face");
                $(this).addClass("active_face");
            }
            
        });

        $(".encuesta__option button").click(function(e){
            e.preventDefault();
            if($(this).hasClass("active_face")){
                $(this).removeClass("active_face");
            }else{
                $(".encuesta__option button").removeClass("active_face");
                $(this).addClass("active_face");
            }
            
        });

        $("#btn_encuesta").click(function(event){
            $("#options").hide();
            $("#respuesta").show();
        });

        $("#enviar").click(function(e){
            e.preventDefault();
            $("#respuesta").hide();
            $("#gracias").show();
        });

        $(".btn_close").click(function(){
            $(".encuesta").hide();
            $(".chat-bot").removeClass("chat-bot--mobil");
        });

    });
</script>
@endpush