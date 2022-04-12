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
                        <h1 class="titulo text-center titulo_banner">Dinet incorpora a seis mujeres para conducir volquetes en socavón de empresa minera. - 2019</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>

</section>

<section id="section_single_blog" class="bottom_section">
    <div class="container">
        <div class="row">
            <div class="col-lg-8">
                <div class="content_noticia content-single-noticia">
                    <img src="/storage/posts/post.png" class="" alt="">
                    <p class="fecha">Agosto 12, 2021</p>
                    <a href="#!"><b>Dinet incorpora a seis mujeres para conducir volquetes en socavón de empresa minera. - 2019</b></a>
                    <div class="texto-single">
                        <b>El próximo año ampliará operaciones en el norte, empezando por Piura. La idea en dos años es tener hasta 20,000 metros cuadrados de almacenes en el interior del país.</b>
                        <p>
                            Entre el 2019 y 2020, el operador logístico Dinet ejecuta inversiones por S/ 16 millones para crecer en varios frentes. Entre ellos, el negocio en provincias, comenzando por un hub logístico de almacenes que abrirá en diciembre en Arequipa.
                        </p>
                        <p>
                            Su gerente general, Luis Miguel Maldonado, señaló que esa infraestructura empezará atendiendo a la construcción y luego apuntará al retail, consumo, bienes y minería
                        </p>
                        <p>
                            “Y en el 2020 seguiremos expandiendo nuestras operaciones en Piura, Trujillo y Chiclayo; creemos que la prioridad será Piura, estamos viendo el tiempo preciso y el tamaño para lanzar cada operación”, comentó a Gestión.
                        </p>
                        <p>
                            Así, en dos años, la empresa del Grupo Sandoval prevé incorporar hasta 20,000 metros cuadrados de almacenes en el interior del país. En el referido presupuesto también consideran la ampliación de actuales centros logísticos en el Callao, Huachipa y Villa El Salvador, la implementación de herramientas de visibilidad y trazabilidad, una solución tecnológica para la minería subterránea y para el comercio electrónico.
                        </p>
                        <b>Puntos de redistribución</b>
                        <p>
                            Consultado por los planes de Dinet en la logística del ecommerce, Maldonado detalló que vienen definiendo el portafolio de productos y servicios, la red de distribución física y de movimiento de mercadería para llegar al consumidor final.
                        </p>
                        <p>
                            “Estamos viendo el transporte en camión, camioncito, moto, bicicleta, scooter y a pie, es una combinación con verticales de negocio donde podemos estar directamente o integrar a operadores especialistas”, anotó.
                        </p>
                        <p>
                            Respecto a los almacenes, el ejecutivo reconoció que el comercio electrónico demanda despachos unitarios y frecuentes durante todo el día, lo cual cambia la configuración de la actual infraestructura y crea la necesidad de tener puntos de redistribución.
                        </p>
                        <p>
                            “Puedo usar algunos que ya vienen operando, pero sí vamos a tener que crear puntos en la ciudad, más pequeños. Necesitamos definir dos o tres que creemos que Lima va a necesitar y luego diseñar la red de recojo, algunas personas quieren el envío a casa, pero otros buscan recoger sus pedidos en la tienda o puntos intermedios”, puntualizó.
                        </p>                            
                        <b>OTRO SÍ DIGO</b>
                        <p>
                            Proyección. Al cierre del 2019, Dinet proyecta crecer entre 6% y 8% versus el2018, considerando los negocios en los sectores retail, consumo y bienes, que vienen registrando un avance de 3% a 5%. En tanto, sus servicios en la minería subterránea también crecen, dijo Luis Maldonado, tras anotar que el sector logístico muestra un desempeño positivo aún con el clima político, que no estaría afectando el consumo.
                        </p>
                        <b>CIFRAS Y DATOS</b>
                        <b>200 mil metros cuadrados de almacenes tiene Dinet en Lima.</b>
                        <b>Rubros. El 75% de sus ingresos se origina en el retail, consumo y bienes.</b>
                        <b>Género. Aumentará su fuerza laboral femenina, que es ya el 20%.</b>
                        <b>Grupo. Talma y Aeropuertos del Perú también pertenecen a Grupo Sandoval.</b>
                    </div>
                    <div class="compartir">
                        <b>Compartir:</b>
                        <ul>
                            <li><a href="#!"><img src="public/img/icon-facebook.png" alt=""></a></li>
                            <li><a href="#!"><img src="public/img/icon-in.png" alt=""></a></li>
                            <li><a href="#!"><img src="public/img/icon-whatssap.png" alt=""></a></li>
                        </ul>
                    </div>
                    <div class="comentarios">
                        <b>Comentarios</b>
                        <img src="public/img/comentarios.png" alt="">
                    </div>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="search position-relative">
                    <input type="text" class="form-control" placeholder="Que estas buscando">
                    <i class="flaticon-lupa-1 position-absolute"></i>
                </div>
                <div class="list-tabs">
                    <p>Categorias: </p>
                    <ul class="nav nav-tabs nav-tabs_single" id="myTab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#todos"
                                type="button">Todos</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#life"
                                type="button">Life
                                style</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#inversion"
                                type="button">Inversión</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#tips"
                                type="button">Tips</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#eventos"
                                type="button">Eventos</button>
                        </li>
                    </ul>
                </div>
                <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="todos">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="content_noticia">
                                    <img src="/storage/posts/post.png" alt="">
                                    <p class="fecha">Agosto 12, 2021</p>
                                    <a href="#!"><b>Dinet incorpora a seis mujeres para conducir volquetes en socavón de
                                            empresa minera. - 2019</b></a>
                                    <a href="#!"><span>+</span></a>
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="content_noticia">
                                    <img src="/storage/posts/post.png" alt="">
                                    <p class="fecha">Agosto 12, 2021</p>
                                    <a href="#!"><b>Dinet incorpora a seis mujeres para conducir volquetes en socavón de
                                            empresa minera. - 2019</b></a>
                                    <a href="#!"><span>+</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

@endsection