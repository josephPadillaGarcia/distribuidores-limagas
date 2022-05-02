<?php

namespace App\Http\Controllers\Cms;

use App\BranchOffice;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\Cms\BranchOfficeRequest;
use App\Http\Traits\CmsTrait;
use Illuminate\Support\Facades\Storage;

class SucursalesController extends Controller
{
    use CmsTrait;

    public function index()
    {
        return view("admin.pages.sucursales");
    }

    public function store(BranchOfficeRequest $request)
    {
        $el = request(["name", "direction", "schedule","iframe"]);
        if($request->emails){
            $el = array_merge($el, ["emails" => $request->emails]);
        }
        if($request->phones){
            $el = array_merge($el, ["phone_numbers" => $request->phone_numbers]);
        }
        $el = array_merge($el, [ "code_ubigeo" => $request->department . $request->province . $request->district]);
        $elIndex = $this->getMaxIndex(BranchOffice::selectRaw('MAX(id),MAX(`index`) as "index"')->get());

        $el = array_merge($el, ["index" => $elIndex]);
        try {
            $el = BranchOffice::UpdateOrCreate($el);
            return response()->json(['title' => trans('custom.title.success'), 'message' => trans('custom.message.create.success', ['name' => trans('custom.attribute.tutorial')])], 200);
        } catch (\Exception $e) {
            return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.message.create.error', ['name' => trans('custom.attribute.tutorial')])], 500);
        }
    }

    public function get(BranchOffice $element)
    {
        return response()->json($element);
    }

    public function getAll(Request $request)
    {
        $els = BranchOffice::orderBy('index')->get();
        return response()->json($els);
    }

    public function destroy(BranchOffice $element)
    {
        try {
            $delete_element = $element->delete();
            return response()->json(['title' => trans('custom.title.success'), 'message' => trans('custom.message.delete.success', ['name' => trans('custom.attribute.tutorial')])], 200);
        } catch (\Exception $e) {
            return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.message.delete.error', ['name' => trans('custom.attribute.tutorial')])], 500);
        }
    }

    public function order(Request $request)
    {
        $elements = $request->all();
        try {
            for ($i = 0; $i < count($elements); $i++) {
                $cliente = BranchOffice::UpdateOrCreate(["id" => $elements[$i]["id"]], ["index" => $i + 1]);
            }
            return response()->json(['title' => trans('custom.title.success'), 'message' => trans('custom.message.update.success', ['name' => trans('custom.attribute.tutorial')])], 200);
        } catch (\Exception $e) {
            return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.message.update.error', ['name' => trans('custom.attribute.tutorial')])], 500);
        }
    }

    public function update(BranchOfficeRequest $request, BranchOffice $element)
    {
        $request_testimonial = request(["title_es", "title_en", "link"]);
        if ($request->hasFile('image')) {
            $image_name = $this->setFileName('t-', $request->file('image'));
            $store_image = Storage::disk('public')->putFileAs('img/tutorials/', $request->file('image'), $image_name);
            if (!$store_image) {
                return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.errors.image')], 500);
            }
            $request_testimonial = array_merge($request_testimonial, ["image" => $image_name]);
        } else {
            $request_testimonial = array_merge($request_testimonial, ["image" => $element->image]);
        }
        if ($request->hasFile('image') && $element->image) {
            Storage::disk('public')->delete('img/tutorials/' . $element->image);
        }
        try {
            $element = BranchOffice::UpdateOrCreate(["id" => $element->id], $request_testimonial);
            return response()->json(['title' => trans('custom.title.success'), 'message' => trans('custom.message.update.success', ['name' => trans('custom.attribute.tutorial')])], 200);
        } catch (\Exception $e) {
            return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.message.update.error', ['name' => trans('custom.attribute.tutorial')])], 500);
        }
    }
}
