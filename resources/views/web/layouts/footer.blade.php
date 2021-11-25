@php
$information = $footer["information"];
$social_networks = $footer["social_networks"];
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
                            <a href="{{ route('web.aboutUs') }}">
                                <img class="lazyload" src="/storage/web/img/icon_list.png" alt="Sobre Dinet" />
                                <!-- $t("Sobre Dinet") -->
                                Sobre Dinet
                            </a>
                        </li>
                        <li>
                            <a href="{{ route('web.services') }}">
                                <img class="lazyload" src="/storage/web/img/icon_list.png" alt="Servicios" />
                                <!-- $t("Servicios") -->
                                Servicios
                            </a>
                        </li>
                        <li>
                            <a href="{{ route('web.quotations') }}">
                                <img class="lazyload" src="/storage/web/img/icon_list.png" alt="Cotizaciones" />
                                <!-- $t("Cotizaciones") -->
                                Cotizaciones
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
                                <!-- $t("Libro de reclamaciones") -->
                                Libro de reclamaciones
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
                    <div class="developer">
                        Desarrollado por
                        <!-- $t("Desarrollado por") -->
                        <a href="https://playgroup.pe" target="_blank">
                            <div class="img-dev">
                                <img src="/storage/web/img/logo-play.svg" class="lazyload" />
                                <img class="lazyload litt" src="/storage/web/img/lid.png" />
                            </div>
                            PLAY Group
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    @if($information['whatsapp_number'])
    <div class="chat-bot">
        <ul>
            <li class="bot">
                <a class="chatbot-wsp" target="_blank">
                    <img data-src="/storage/web/img/bot.png" class="lazyload" alt="" />
                </a>
            </li>
        </ul>
    </div>
    @endif
</footer>

@push('scripts')
<script type="text/javascript">
    $(document).ready(function () {
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
        })
    });
</script>
@endpush