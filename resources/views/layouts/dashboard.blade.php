@extends('layouts.app')
@section('head')
@endsection
@section('page')

<nav class="navbar navbar-vertical fixed-left navbar-expand-md navbar-light bg-white py-2" id="sidenav-main">
    <div class="container-fluid">
        <button-menu></button-menu>
        <!-- Brand -->
        <a class="navbar-brand" href="{{ route('cms.dashboard') }}">
            <img src="/storage/img/logo-mini.png" class="align-middle d-block d-md-none logo-mini mx-auto" height="50" width="auto" />
            <img src="/storage/img/logo.png" class="align-middle d-none d-md-block logo mx-auto" height="40" width="auto" />
        </a>
        <!-- User -->
        <ul class="nav align-items-center d-md-none">
            <li class="nav-item dropdown">
                <b-dropdown id="id_dropdown_navbar" class="nav-link border-0 pr-0" :lazy="true" variant="link" v-cloak>
                    <template slot="button-content">
                        <div class="media align-items-center">
                            <span class="avatar avatar-sm rounded-circle bg-default">
                                @if(Auth::user()->avatar)
                                <img src="{{ route('cms.get-file',[ 'folder' => 'img', 'subfolder' => 'users', 'file' => Auth::user()->avatar ]) }}" alt="User">
                                @else
                                {{ Auth::user()->avatar_initials }}
                                @endif
                            </span>
                        </div>
                    </template>
                    <b-dropdown-item href="{{ route('cms.profile') }}">
                        <span class="ri-passport-line ri-lg current-color mr-2"></span> <span class="v-align-middle">Mi perfil</span>
                    </b-dropdown-item>
                    <b-dropdown-divider></b-dropdown-divider>
                    <b-dropdown-item href="{{ route('logout') }}" onclick="event.preventDefault(); document.getElementById('logout-form').submit();">
                    <span class="ri-shut-down-line ri-lg current-color text-danger mr-2"></span> <span class="v-align-middle">Cerrar Sesión</span>
                    </b-dropdown-item>
                </b-dropdown>

            </li>
        </ul>
        <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
            {{ csrf_field() }}
        </form>
        <!-- Collapse -->
        <div class="collapse navbar-collapse" id="sidenav-collapse-main">
            <!-- Collapse header -->
            <div class="navbar-collapse-header d-md-none">
                <div class="row">
                    <div class="col-6 collapse-brand">
                        <a href="{{ route('cms.dashboard') }}">
                            <img src="/storage/img/logo.png" class="align-middle" height="70px" width="auto" />
                        </a>
                    </div>
                    <div class="col-6 collapse-close">
                        <button-close></button-close>
                    </div>
                </div>
            </div>
            <ul class="navbar-nav">
                @foreach($menu as $module)
                <li class="nav-item  ">
                    @isset($module["menu_secondary"])
                    <a class="nav-link position-relative d-inline-block w-100 py-3 {{ Request::segment(1) ==  $module["variable"] ? 'active' : ''   }}" v-b-toggle.{{$module["variable"]}}>
                    <span class="current-color mr-3 ri-lg ri-{{$module["icon"]}}-line"></span>
                        <span class="nav-link__text">{{ $module["name"] }}</span>
                        <span class="arrow"><i class="menu-arrow">
                        <span class="current-color ri-arrow-right-line" data-with="16" data-height="16"></span>
                            </i></span>
                    </a>
                    <b-collapse id="{{$module["variable"]}}" v-cloak>
                        <ul class="nav flex-column sub-menu">
                            @foreach($module["menu_secondary"] as $submodule)
                            <li class="nav-item">
                                <a class="nav-link  {{ Request::path() ==  $submodule["slug"] ? 'active' : ''   }}" href="/{{ $submodule["slug"] }}">{{ $submodule["name"] }}</a>
                            </li>
                            @endforeach
                        </ul>
                    </b-collapse>

                    <a class="nav-link position-relative text-center d-inline-block w-100 py-3 nav-link--hover {{ Request::segment(1) ==  $module["variable"] ? 'active' : ''   }}" :id="'popover-{{$module["variable"]}}'">

                    <span class="current-color mr-3 ri-lg ri-{{$module["icon"]}}-line"></span>
                    </a>
                    <b-popover :target="'popover-{{$module["variable"]}}'" custom-class="ml-0 shadow-none pl-0 pt-1 pb-2" triggers="hover" placement="right" v-cloak>
                        <template v-slot:title>
                            <div class="ml-2 text-primary">{{ $module["name"] }}</div>
                        </template>
                        <ul class="nav flex-column sub-menu">
                            @foreach($module["menu_secondary"] as $submodule)
                            <li class="nav-item">
                                <a class="nav-link py-1 px-0" href="/{{ $submodule["slug"] }}">{{ $submodule["name"] }}</a>
                            </li>
                            @endforeach
                        </ul>
                    </b-popover>
                    @else
                    <a class="nav-link position-relative d-inline-block w-100 py-3 {{  Request::segment(1) ==  $module["variable"] ? 'active' : '' }}" href="/{{ $module["slug"] }}">
                        <span class="current-color mr-3  ri-lg ri-{{$module["icon"]}}-line"></span>
                        <span class="nav-link__text">{{ $module["name"] }}</span>
                    </a>
                    <a class="nav-link position-relative text-center d-inline-block w-100 py-3 nav-link--hover {{  Request::segment(1) ==  $module["variable"] ? 'active' : '' }}" :id="'popover-{{$module["slug"]}}'">
                        <span class="current-color mr-3  ri-lg ri-{{$module["icon"]}}-line"></span>
                    </a>
                    <b-popover :target="'popover-{{$module["slug"]}}'" custom-class="ml-0 shadow-none pl-0 pr-5" triggers="hover" placement="right" v-cloak>
                        <a class="nav-link pt-1 px-0" href="/{{ $module["slug"] }}">
                            <span class="link__text">{{ $module["name"] }}</span>
                        </a>
                    </b-popover>
                    @endisset
                </li>
                @endforeach
            </ul>
        </div>
    </div>
</nav>


<div class="main-content" id="main-content">
    <nav class="navbar navbar-top navbar-expand navbar-light position-relative bg-white py-2 d-md-flex align-items-center d-none" id="navbar-main">
        <div class="container-fluid">
            <button-icons></button-icons>
            <div class="d-inline-block ml-4">
                <a href="{{ config('services.web_url')}}" target="_blank" class="btn btn-icon btn-inverse-primary mr-2">
                    <span class="btn-inner--icon"></span>
                    <span class="btn-inner--text">
                        Ir a la Web</span> </a>
            </div>
            <ul class="navbar-nav align-items-center d-none d-md-flex ml-auto">
                <li class="nav-item">
                    <b-dropdown id="id_dropdown_navbar" class="border-0 pr-0" :lazy="true" variant="link" v-cloak>
                        <template slot="button-content">
                            <div class="media align-items-center">
                                <span class="avatar avatar-sm rounded-circle bg-default">
                                    @if(Auth::user()->avatar)
                                    <img src="{{ route('cms.get-file',[ 'folder' => 'img', 'subfolder' => 'users', 'file' => Auth::user()->avatar ]) }}" alt="Usuario" />
                                    @else
                                    {{ Auth::user()->avatar_initials }}
                                    @endif
                                </span>
                                <div class="media-body ml-2">
                                    <span class="mb-0 font-weight-semibold">{{ Auth::user()->name }}</span>
                                </div>
                            </div>
                        </template>
                        <b-dropdown-item class="my-1" href="{{ route('cms.profile') }}">
                        <span class="ri-passport-line ri-lg current-color mr-2"></span> <span class="v-align-middle"> <span class="v-align-middle">Mi perfil</span>
                        </b-dropdown-item>
                        <b-dropdown-divider></b-dropdown-divider>
                        <b-dropdown-item class="my-1" href="{{ route('logout') }}" onclick="event.preventDefault(); document.getElementById('logout-form').submit();">
                        <span class="ri-shut-down-line ri-lg current-color text-danger mr-2"></span><span class="v-align-middle">Cerrar Sesión</span>
                        </b-dropdown-item>
                    </b-dropdown>
                </li>
            </ul>
        </div>
    </nav>
    <div class="content-wrapper">
        @yield('content')
    </div>
    <footer class="pb-2 footer pt-2 mt-5">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 text-center text-sm-right">
                    <small class=" d-block d-sm-inline-block">Copyright © @php echo date('Y') @endphp <a href="https://playgroup.pe" target="_blank" class="text-primary">PLAY Group</a>. All rights reserved.</small>
                </div>
            </div>
        </div>
    </footer>
</div>
<div id="alert"></div>
@endsection
@push('scripts')
<script type="text/javascript">
    const app = new Vue({
        el: '#alert',
        created() {
            @if(Session::has('success'))
            Swal.fire({
                title: "{{ trans('custom.title.success') }}",
                text: "{{ Session::get('success') }}",
                type: "success",
                confirmButtonText: "OK",
                buttonsStyling: false,
                customClass: {
                    confirmButton: "btn btn-inverse-primary"
                }
            });
            @endif
            @if(Session::has('error'))
            Swal.fire({
                title: "{{ trans('custom.title.error') }}",
                text: "{{ Session::get('error') }}",
                type: "error",
                confirmButtonText: "OK",
                buttonsStyling: false,
                customClass: {
                    confirmButton: "btn btn-inverse-primary"
                }
            });
            @endif
        }
    });
</script>
@endpush