@extends('layouts.dashboard')
@section('content')
  <traditional  
  route="{{ route('cms.leads.index') }}" 
  route-get-all="{{ route('cms.leads.get-all') }}"
  route-update="{{ route('cms.leads.update') }}" 
  get-email-destination="{{ route('cms.leads.get-email-destination')}}" 

  all-export="{{ route('cms.leads.all-export')}}" 
  filter-export="{{ route('cms.leads.filter-export')}}" 
  ></traditional>
@endsection
