@extends('web.layouts.app')

@section('content')

@php
    $page = $data["page"];
@endphp

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
                        <h1 class="titulo text-center titulo_banner">Noticias</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <div class="container search_news">
        <div class="row justify-content-center">
            <div class="col-lg-6">
                <div class="search position-relative">
                    <input type="text" class="form-control" placeholder="Que estas buscando">
                    <i class="flaticon-lupa-1 position-absolute"></i>
                </div>
            </div>
        </div>
    </div>

</section>

<section id="seccion_tabs" class="bottom_section">
    <div class="container">
        <div class="row">
            <div class="list-tabs">
                <p>Categorias: </p>
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active btn_tab" data-bs-toggle="tab" data-bs-target="#todos"
                            type="button">Todos</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" data-bs-toggle="tab" data-bs-target="#life"
                            type="button">Life
                            style</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" data-bs-toggle="tab" data-bs-target="#inversion"
                            type="button">Inversión</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" data-bs-toggle="tab" data-bs-target="#tips"
                            type="button">Tips</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" data-bs-toggle="tab" data-bs-target="#eventos"
                            type="button">Eventos</button>
                    </li>
                </ul>
            </div>
            <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active" id="todos">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="content_noticia">
                                <img src="/storage/posts/post.png" alt="">
                                <p class="fecha">Agosto 12, 2021</p>
                                <a href="#!"><b>Dinet incorpora a seis mujeres para conducir volquetes en socavón de
                                        empresa minera. - 2019</b></a>
                                <a href="single-blog.html"><span>+</span></a>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="content_noticia">
                                <img src="/storage/posts/post.png" alt="">
                                <p class="fecha">Agosto 12, 2021</p>
                                <a href="#!"><b>Dinet incorpora a seis mujeres para conducir volquetes en socavón de
                                        empresa minera. - 2019</b></a>
                                <a href="single-blog.html"><span>+</span></a>
                            </div>
                        </div>

                        <div class="col-lg-4">
                            <div class="content_noticia">
                                <img src="/storage/posts/post.png" alt="">
                                <p class="fecha">Junio 16, 2021</p>
                                <a href="#!"><b>Primera tienda oscura de Dinet en San Borja ha logrado reducir los tiempos de
                                        entrega de productos hasta en un día y medio.</b></a>
                                <p>Al cierre del 2021, las tiendas oscuras representarán el 10% de las ventas del negocio de
                                    e-commerce de la empresa de logística Dinet.</p>
                                <a href="#!"><span>+</span></a>
                            </div>
                        </div>
        
                        <div class="col-lg-4">
                            <div class="content_noticia">
                                <img src="/storage/posts/post.png" alt="">
                                <p class="fecha">Junio 16, 2021</p>
                                <a href="#!"><b>Primera tienda oscura de Dinet en San Borja ha logrado reducir los tiempos de
                                        entrega de productos hasta en un día y medio.</b></a>
                                <p>Al cierre del 2021, las tiendas oscuras representarán el 10% de las ventas del negocio de
                                    e-commerce de la empresa de logística Dinet.</p>
                                <a href="#!"><span>+</span></a>
                            </div>
                        </div>
        
                        <div class="col-lg-4">
                            <div class="content_noticia">
                                <img src="/storage/posts/post.png" alt="">
                                <p class="fecha">Junio 16, 2021</p>
                                <a href="#!"><b>Primera tienda oscura de Dinet en San Borja ha logrado reducir los tiempos de
                                        entrega de productos hasta en un día y medio.</b></a>
                                <p>Al cierre del 2021, las tiendas oscuras representarán el 10% de las ventas del negocio de
                                    e-commerce de la empresa de logística Dinet.</p>
                                <a href="#!"><span>+</span></a>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="content_noticia">
                                <img src="/storage/posts/post.png" alt="">
                                <p class="fecha">Junio 16, 2021</p>
                                <a href="#!"><b>Primera tienda oscura de Dinet en San Borja ha logrado reducir los tiempos de
                                        entrega de productos hasta en un día y medio.</b></a>
                                <p>Al cierre del 2021, las tiendas oscuras representarán el 10% de las ventas del negocio de
                                    e-commerce de la empresa de logística Dinet.</p>
                                <a href="#!"><span>+</span></a>
                            </div>
                        </div>
        
                        <div class="col-lg-4">
                            <div class="content_noticia">
                                <img src="/storage/posts/post.png" alt="">
                                <p class="fecha">Junio 16, 2021</p>
                                <a href="#!"><b>Primera tienda oscura de Dinet en San Borja ha logrado reducir los tiempos de
                                        entrega de productos hasta en un día y medio.</b></a>
                                <p>Al cierre del 2021, las tiendas oscuras representarán el 10% de las ventas del negocio de
                                    e-commerce de la empresa de logística Dinet.</p>
                                <a href="#!"><span>+</span></a>
                            </div>
                        </div>
        
                        <div class="col-lg-4">
                            <div class="content_noticia">
                                <img src="/storage/posts/post.png" alt="">
                                <p class="fecha">Junio 16, 2021</p>
                                <a href="#!"><b>Primera tienda oscura de Dinet en San Borja ha logrado reducir los tiempos de
                                        entrega de productos hasta en un día y medio.</b></a>
                                <p>Al cierre del 2021, las tiendas oscuras representarán el 10% de las ventas del negocio de
                                    e-commerce de la empresa de logística Dinet.</p>
                                <a href="#!"><span>+</span></a>
                            </div>
                        </div>

                    </div>

                    
                    <nav aria-label="Page navigation example">
                        <ul class="pagination justify-content-center">
                            <li class="page-item">
                                <a class="page-link prev" href="#" aria-label="Previous">
                                    <span aria-hidden="true"><i class="flaticon-atras"></i></span>
                                </a>
                            </li>
                            <li class="page-item active"><a class="page-link" href="#">1</a></li>
                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                            <li class="page-item">
                                <a class="page-link next" href="#" aria-label="Next">
                                    <span aria-hidden="true"><i class="flaticon-proximo"></i></span>
                                </a>
                            </li>
                        </ul>
                    </nav>

                </div>
                
                
                
            </div>
        </div>
    </div>
</section>

@endsection