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
        $departments = $this->getDepartments();
        return view("pages.content.general-information", compact('departments'));
    }

    public function store(GeneralInformationRequest $request)
    {
        $request_information = request(["direction", "whatsapp_number", "name_api", "api_link",'customers_link']);
        $information_registered = Information::first();
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
