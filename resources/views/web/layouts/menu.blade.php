@php
@endphp
<header class="" id="content_header">
    <nav class="navbar navbar-expand-lg position-relative" aria-label="Tenth navbar example">
        <div class="container-fluid" id="header_container">
            <h1>Header</h1>

        </div>
    </nav>

</header>
@push('scripts')
<script type="text/javascript">
    $(document).ready(function() {
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
    });
</script>
@endpush