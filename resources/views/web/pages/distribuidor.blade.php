@extends('web.layouts.app')

@section('content')
    <h1>DATOS DE DISTRIBUIDOR</h1>
    <p><b>name:</b>{{ $id->name }}</p>
    <p><b>Contacto:</b></p>
    <ul>
        @if ($id->phone_numbers)
            @foreach ($id->phone_numbers as $pn)
                <li>    
                    Telefóno: {{ $pn['number'] }}
                </li>            
            @endforeach
        @endif
    </ul>
    <p><b>Email:</b></p>
    <ul>
        @if ($id->emails)
            @foreach ($id->emails as $e)
                <li>
                    Correos: {{ $e['name'] }}
                </li>
            @endforeach
        @endif
    </ul>
    <p><b>Dirección:</b></p>
    <p>{{ $id->direction }}</p>
    <p><b>Mapa:</b></p>
    <div class="">
        @if($id->iframe)
            {!! $id->iframe !!}
        @endif
    </div>
@endsection