@extends('web.layouts.app')

@section('content')
@php
    $page = $data["page"];
@endphp

<main>

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
                            <h1 class="titulo text-center titulo_banner">Sucursales</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="sucursales bottom_section">
        <div class="sucursales__form">
            <div class="container">
                <div class="row">
                    <form action="" class="col-lg-12">
                        <div class="row">
                            <div class="col-lg-3">
                                <div class="grupo-form">
                                    <label for="">
                                        Departamento
                                    </label>
                                    <select class="form-select">
                                        <option value="">lima</option>
                                        <option value="">Callao</option>
                                        <option value="">Ica</option>
                                    </select>
                                </div>
                            </div>
        
                            <div class="col-lg-3">
                                <div class="grupo-form">
                                    <label for="">
                                        Provincia
                                    </label>
                                    <select class="form-select">
                                        <option value="">lima</option>
                                        <option value="">Callao</option>
                                        <option value="">Ica</option>
                                    </select>
                                </div>
                            </div>
        
                            <div class="col-lg-3">
                                <div class="grupo-form">
                                    <label for="">
                                        Distrito
                                    </label>
                                    <select class="form-select">
                                        <option value="">lima</option>
                                        <option value="">Callao</option>
                                        <option value="">Ica</option>
                                    </select>
                                </div>
                            </div>
        
                            <div class="col-lg-3">
                                <div class="btn-form">
                                    <button type="submit">
                                        Filtrar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <div class="sucursales__list">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-6">
                        <div class="sucursales__card">
                            <div class="sucursales__head">
                                <div class="sucursales__header">
                                    <b>Lima</b>
                                </div>
                                <div class="sucursales__body">
                                    <ul>
                                        <li>
                                            <span class="ri-lg ri-map-pin-2-fill"></span>
                                            <p>
                                                San Borja - Jr. Domenico Morelli 110 Torre 1 Piso 6 San Borja.
                                            </p>
                                        </li>
                                        
                                        <li>
                                            <span class="ri-lg ri-mail-fill"></span>
                                            <p>
                                                dinet@gmail.com
                                            </p>
                                        </li>
    
                                        <li>
                                            <span class="ri-lg ri-phone-fill"></span>
                                            <p>
                                                963258741
                                            </p>
                                        </li>
    
                                        <li>
                                            <span class="ri-lg ri-time-fill"></span>
                                            <p>
                                                L- V: 9:00 am - 6:00 pm
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="sucursales__footer">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62421.440974056524!2d-77.03938102089843!3d-12.088856299999984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c7d3f3ae31c3%3A0x1636c7478bc8b1e6!2sDinet%20S.A!5e0!3m2!1ses-419!2spe!4v1650562579009!5m2!1ses-419!2spe" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="sucursales__card">
                            <div class="sucursales__head">
                                <div class="sucursales__header">
                                    <b>Lima</b>
                                </div>
                                <div class="sucursales__body">
                                    <ul>
                                        <li>
                                            <span class="ri-lg ri-map-pin-2-fill"></span>
                                            <p>
                                                San Borja - Jr. Domenico Morelli 110 Torre 1 Piso 6 San Borja.
                                            </p>
                                        </li>
                                        
                                        <li>
                                            <span class="ri-lg ri-mail-fill"></span>
                                            <p>
                                                dinet@gmail.com
                                            </p>
                                        </li>
    
                                        <li>
                                            <span class="ri-lg ri-phone-fill"></span>
                                            <p>
                                                963258741
                                            </p>
                                        </li>
    
                                        <li>
                                            <span class="ri-lg ri-time-fill"></span>
                                            <p>
                                                L- V: 9:00 am - 6:00 pm
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="sucursales__footer">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62421.440974056524!2d-77.03938102089843!3d-12.088856299999984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c7d3f3ae31c3%3A0x1636c7478bc8b1e6!2sDinet%20S.A!5e0!3m2!1ses-419!2spe!4v1650562579009!5m2!1ses-419!2spe" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="sucursales__card">
                            <div class="sucursales__head">
                                <div class="sucursales__header">
                                    <b>Lima</b>
                                </div>
                                <div class="sucursales__body">
                                    <ul>
                                        <li>
                                            <span class="ri-lg ri-map-pin-2-fill"></span>
                                            <p>
                                                San Borja - Jr. Domenico Morelli 110 Torre 1 Piso 6 San Borja.
                                            </p>
                                        </li>
                                        
                                        <li>
                                            <span class="ri-lg ri-mail-fill"></span>
                                            <p>
                                                dinet@gmail.com
                                            </p>
                                        </li>
    
                                        <li>
                                            <span class="ri-lg ri-phone-fill"></span>
                                            <p>
                                                963258741
                                            </p>
                                        </li>
    
                                        <li>
                                            <span class="ri-lg ri-time-fill"></span>
                                            <p>
                                                L- V: 9:00 am - 6:00 pm
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="sucursales__footer">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62421.440974056524!2d-77.03938102089843!3d-12.088856299999984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c7d3f3ae31c3%3A0x1636c7478bc8b1e6!2sDinet%20S.A!5e0!3m2!1ses-419!2spe!4v1650562579009!5m2!1ses-419!2spe" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="sucursales__card">
                            <div class="sucursales__head">
                                <div class="sucursales__header">
                                    <b>Lima</b>
                                </div>
                                <div class="sucursales__body">
                                    <ul>
                                        <li>
                                            <span class="ri-lg ri-map-pin-2-fill"></span>
                                            <p>
                                                San Borja - Jr. Domenico Morelli 110 Torre 1 Piso 6 San Borja.
                                            </p>
                                        </li>
                                        
                                        <li>
                                            <span class="ri-lg ri-mail-fill"></span>
                                            <p>
                                                dinet@gmail.com
                                            </p>
                                        </li>
    
                                        <li>
                                            <span class="ri-lg ri-phone-fill"></span>
                                            <p>
                                                963258741
                                            </p>
                                        </li>
    
                                        <li>
                                            <span class="ri-lg ri-time-fill"></span>
                                            <p>
                                                L- V: 9:00 am - 6:00 pm
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="sucursales__footer">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62421.440974056524!2d-77.03938102089843!3d-12.088856299999984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c7d3f3ae31c3%3A0x1636c7478bc8b1e6!2sDinet%20S.A!5e0!3m2!1ses-419!2spe!4v1650562579009!5m2!1ses-419!2spe" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

</main>

@endsection