@extends('admin.layouts.dashboard')
@section('head')
<style>
.form-check{
    padding-left: 0px !important;
    background: transparent !important;
    border: 0 !important;
}
</style>
@endsection

@section('content')
    
<faqs
    message-order="@lang('custom.message.order')"
    route="{{ route('cms.faqs.index') }}" 
    route-order="{{ route('cms.faqs.order') }}"
    route-get-all="{{ route('cms.faqs.get-all') }}"
>
</faqs>
@endsection