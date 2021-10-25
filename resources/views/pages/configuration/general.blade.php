@extends('layouts.dashboard')
@section('content')
  <configuration-general
    route-order-schedules="{{ route('cms.configuration.general.config-quantity-package.order') }}"
    route-get-schedules="{{ route('cms.configuration.general.config-quantity-package.getAll') }}"
    message-order="@lang('custom.message.order')"
  ></configuration-general>
@endsection
