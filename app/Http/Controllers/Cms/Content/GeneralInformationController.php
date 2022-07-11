<?php

namespace App\Http\Controllers\Cms\Content;

use App\Certification;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Information;
use App\Http\Requests\Cms\Content\CertificationRequest;
use App\Http\Requests\Cms\Content\GeneralInformationRequest;
use App\Http\Requests\Cms\Content\MemberRequest;
use Illuminate\Support\Facades\Storage;
use App\Http\Traits\CmsTrait;
use App\Member;

class GeneralInformationController extends Controller
{
    use CmsTrait;

    public function index()
    {
        return view("admin.pages.content.general-information");
    }

    public function store(GeneralInformationRequest $request)
    {
        $request_information = request(["facebook_link", "instagram_link", "youtube_link", "linkedin_link"]);
      
        $information_registered = Information::first();

        if($request->facebook_link){
            $request_information = array_merge($request_information, ["facebook_link" => $request->facebook_link]);
        }
        else{
            $request_information = array_merge($request_information, ["facebook_link" => NULL]);
        }

        if($request->instagram_link){
            $request_information = array_merge($request_information, ["instagram_link" => $request->instagram_link]);
        }
        else{
            $request_information = array_merge($request_information, ["instagram_link" => NULL]);
        }

        if($request->youtube_link){
            $request_information = array_merge($request_information, ["youtube_link" => $request->youtube_link]);
        }
        else{
            $request_information = array_merge($request_information, ["youtube_link" => NULL]);
        }

        if($request->linkedin_link){
            $request_information = array_merge($request_information, ["linkedin_link" => $request->linkedin_link]);
        }
        else{
            $request_information = array_merge($request_information, ["linkedin_link" => NULL]);
        }
        
        try {
            $information = Information::UpdateOrCreate(["id" => $information_registered->id], $request_information);
            return response()->json(['title' => trans('custom.title.success'), 'message' => trans('custom.message.update.success', ['name' => trans('custom.attribute.information')])], 200);
        } catch (\Exception $e) {
            return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.message.update.error', ['name' => trans('custom.attribute.information')])], 500);
        }

    }

    public function get()
    {
        $informacion = Information::orderBy('created_at', 'desc')->first();
        return response()->json($informacion);
    }
}
