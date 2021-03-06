@extends('admin.layouts.app',["class" => "login"])
@section('head')
@endsection
@section('page')
    <div class="login-container">
        <div class="container-fluid h-100">
            <div class="row h-100">
                <div class="col-lg-6 d-none h-100 login-bg d-lg-flex justify-content-center align-items-center" style="background-image: url({{ asset('storage/img/lima-gas-fondo.jpg') }})">
                   
                </div>
                <div class="col-12 col-lg h-100 bg-white">
                    <login 
                    ruta-login="{{ route('login.post',[],false) }}" 
                    ruta-restablecer-contrasena="{{ route('password.email') }}"                     
                    images-url="{{ config('services.images_url') }}"
                    ></login>
                </div>
            </div>
        </div>
    </div>
@endsection