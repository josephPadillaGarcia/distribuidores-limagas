<?php

namespace App\Http\Controllers\Cms;

use App\Certification;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\AppTracking;
use App\Http\Requests\Cms\AppTrackingRequest;
use Illuminate\Support\Facades\Storage;
use App\Http\Traits\CmsTrait;

class AppTrackingController extends Controller
{
    use CmsTrait;

    public function index()
    {
        return view("admin.pages.app-tracking");
    }

    public function store(AppTrackingRequest $request)
    {
        $request_information = request(["title_es", "title_en", "link_android", "link_ios",'description_en','description_es']);
        $information_registered = AppTracking::first();
        if ($request->hasFile('image')) {
            $image_name = $this->setFileName('app-', $request->file('image'));
            $store_image = Storage::disk('public')->putFileAs('img/app-tracking/', $request->file('image'), $image_name);
            if (!$store_image) {
                return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.errors.image')], 500);
            }
            $request_information = array_merge($request_information, ["image" => $image_name]);
        } else {
            if($information_registered){
                $request_information = array_merge($request_information, ["image" => $information_registered->image]);
            }
        }
        if ($request->hasFile('image') && $information_registered && $information_registered->image) {
            Storage::disk('public')->delete('img/app-tracking/' . $information_registered->image);
        }
        try {
            if ($information_registered) {
                $information = AppTracking::UpdateOrCreate(["id" => $information_registered->id], $request_information);
            } else {
                $information = AppTracking::UpdateOrCreate($request_information);
            }
            return response()->json(['title' => trans('custom.title.success'), 'message' => trans('custom.message.update.success', ['name' => trans('custom.attribute.app_tracking')])], 200);
        } catch (\Exception $e) {
            return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.message.update.error', ['name' => trans('custom.attribute.app_tracking')])], 500);
        }
    }

    public function get()
    {
        $informacion = AppTracking::orderBy('created_at', 'desc')->first();
        return response()->json($informacion);
    }
}
