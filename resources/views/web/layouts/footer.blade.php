@php
$information = $footer["information"];
$social_networks = $footer["social_networks"];
$locale = $footer["locale"];
$routeLocale = $footer["routeLocale"];
@endphp
<footer class="grid align-center lazyload" data-bg="/storage/web/img/footer.png">
    <div class="container">
        <h1>Footer</h1>
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
        
        @if($information['whatsapp_number'])
        $(".chatbot-wsp").click(function(e) {
            e.preventDefault();

            let number =  @php echo($information['whatsapp_number']) @endphp

            let link = `https://wa.me/+51${number}?text=${encodeURIComponent(
                "Hola quisiera información del servicio"
            )}`;
            
            window.open(link, "_blank");
        });
        @endif

        
    });
</script>
@endpush