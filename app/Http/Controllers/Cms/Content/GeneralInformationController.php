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
        $request_information = request(["direction", "whatsapp_number", "name_api", "api_link",'customers_link','book_link','contact_number','api_url_tracking', 'customer_service_link']);
      
        $information_registered = Information::first();

        if ($request->hasFile('customer_service_img_update')) {
            $fileName2 = $this->setFileName('cs-', $request->file('customer_service_img_update'));
            $storeFile2 = Storage::disk('public')->putFileAs('img/', $request->file('customer_service_img_update'), $fileName2);
            $request_information = array_merge($request_information, ["customer_service_img" => $fileName2]);
        } 
        /*else {
            $request_information = array_merge($request_information, ["customer_service_img" => null]);
        }*/
        if($request->contact_number){
            $request_information = array_merge($request_information, ["contact_number" => $request->contact_number]);
        }
        else{
            $request_information = array_merge($request_information, ["contact_number" => NULL]);
        }

        if($request->customer_service_link){
            $request_information = array_merge($request_information, ["customer_service_link" => $request->customer_service_link]);
        }
        else{
            $request_information = array_merge($request_information, ["customer_service_link" => NULL]);
        }

        if($request->whatsapp_number){
            $request_information = array_merge($request_information, ["whatsapp_number" => $request->whatsapp_number]);
        }
        else{
            $request_information = array_merge($request_information, ["whatsapp_number" => NULL]);
        }

        if($request->api_link){
            $request_information = array_merge($request_information, ["api_link" => $request->api_link]);
        }
        else{
            $request_information = array_merge($request_information, ["api_link" => NULL]);
        }

        if($request->name_api){
            $request_information = array_merge($request_information, ["name_api" => $request->name_api]);
        }
        else{
            $request_information = array_merge($request_information, ["name_api" => NULL]);
        }

        if($request->book_link){
            $request_information = array_merge($request_information, ["book_link" => $request->book_link]);
        }
        else{
            $request_information = array_merge($request_information, ["book_link" => NULL]);
        }

        if($request->customers_link){
            $request_information = array_merge($request_information, ["customers_link" => $request->customers_link]);
        }
        else{
            $request_information = array_merge($request_information, ["customers_link" => NULL]);
        }
        
        try {
            if ($information_registered) {
                $information = Information::UpdateOrCreate(["id" => $information_registered->id], $request_information);
            } else {
                $information = Information::UpdateOrCreate($request_information);
            }
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
