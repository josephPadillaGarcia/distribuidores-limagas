<?php

namespace App\Http\Controllers\Cms;

use App\BranchOffice;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\Cms\BranchOfficeRequest;
use App\Http\Traits\CmsTrait;
use App\Productos;
use App\PaymendMethod;
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
        /*$aemails = json_decode($request->emails, true);
        dd($aemails);*/
        $el = request(["name", "description", "direction", "schedule","iframe", "link_face","link_insta", "payment_methods"]);
        if($request->emails){
            $aemails = json_decode($request->emails, true);
            $el = array_merge($el, ["emails" => $aemails]);
        }
        if($request->phone_numbers){
            $aphone = json_decode($request->phone_numbers, true);
            $el = array_merge($el, ["phone_numbers" => $aphone]);
        }
        if($request->num_what){
            $awhat = json_decode($request->num_what, true);
            $el = array_merge($el, ["num_what" => $awhat]);
        }
        
        if($request->products){
            $aproducts = json_decode($request->products, true);
            $el = array_merge($el, ["products" => $aproducts]);
        }

        if($request->payment_methods){
            $apaymentmethod = json_decode($request->payment_methods, true);
            $el = array_merge($el, ["payment_methods" => $apaymentmethod]);
        }

        // Imagen 01
        $image_name_01 = $this->setFileName('t-', $request->file('img_slider_1'));
        $store_image_01 = Storage::disk('public')->putFileAs('img/sliders/', $request->file('img_slider_1'), $image_name_01);
        if (!$store_image_01) {
            return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.errors.image')], 500);
        }        
        $el = array_merge($el, ["img_slider_1" => $image_name_01]);

        // Imagen 02
        $image_name_02 = $this->setFileName('t-', $request->file('img_slider_2'));
        $store_image_02 = Storage::disk('public')->putFileAs('img/sliders/', $request->file('img_slider_2'), $image_name_02);
        if (!$store_image_02) {
            return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.errors.image')], 500);
        }        
        $el = array_merge($el, ["img_slider_2" => $image_name_02]);

        // Imagen 03
        $image_name_03 = $this->setFileName('t-', $request->file('img_slider_3'));
        $store_image_03 = Storage::disk('public')->putFileAs('img/sliders/', $request->file('img_slider_3'), $image_name_03);
        if (!$store_image_03) {
            return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.errors.image')], 500);
        }        
        $el = array_merge($el, ["img_slider_3" => $image_name_03]);

        // Imagen 04
        $image_name_04 = $this->setFileName('t-', $request->file('img_slider_4'));
        $store_image_04 = Storage::disk('public')->putFileAs('img/sliders/', $request->file('img_slider_4'), $image_name_04);
        if (!$store_image_04) {
            return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.errors.image')], 500);
        }        
        $el = array_merge($el, ["img_slider_4" => $image_name_04]);

        // Imagen 05
        $image_name_05 = $this->setFileName('t-', $request->file('img_slider_5'));
        $store_image_05 = Storage::disk('public')->putFileAs('img/sliders/', $request->file('img_slider_5'), $image_name_05);
        if (!$store_image_05) {
            return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.errors.image')], 500);
        }        
        $el = array_merge($el, ["img_slider_5" => $image_name_05]);

        $el = array_merge($el, [ "code_ubigeo" => $request->department . $request->province . $request->district]);
        $elIndex = $this->getMaxIndex(BranchOffice::selectRaw('MAX(id),MAX(`index`) as "index"')->get());

        $el = array_merge($el, ["index" => $elIndex]);
        try {
            $el = BranchOffice::UpdateOrCreate($el);
            return response()->json(['title' => trans('custom.title.success'), 'message' => trans('custom.message.create.success', ['name' => trans('custom.attribute.sucursal')])], 200);
        } catch (\Exception $e) {
            return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.message.create.error', ['name' => trans('custom.attribute.sucursal')])], 500);
        }
    }

    public function get(BranchOffice $element)
    {
        return response()->json($element->load('ubigeoRel'));
    }

    public function getAll(Request $request)
    {
        $els = BranchOffice::with('ubigeoRel')->orderBy('index')->get();
        return response()->json($els);
    }

    public function destroy(BranchOffice $element)
    {
        try {
            $delete_element = $element->delete();
            return response()->json(['title' => trans('custom.title.success'), 'message' => trans('custom.message.delete.success', ['name' => trans('custom.attribute.sucursal')])], 200);
        } catch (\Exception $e) {
            return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.message.delete.error', ['name' => trans('custom.attribute.sucursal')])], 500);
        }
    }

    public function order(Request $request)
    {
        $elements = $request->all();
        try {
            for ($i = 0; $i < count($elements); $i++) {
                $cliente = BranchOffice::UpdateOrCreate(["id" => $elements[$i]["id"]], ["index" => $i + 1]);
            }
            return response()->json(['title' => trans('custom.title.success'), 'message' => trans('custom.message.update.success', ['name' => trans('custom.attribute.sucursal')])], 200);
        } catch (\Exception $e) {
            return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.message.update.error', ['name' => trans('custom.attribute.sucursal')])], 500);
        }
    }

    public function update(BranchOfficeRequest $request, BranchOffice $element)
    {
        $request_element = request(["name", "description", "direction", "schedule","iframe", "products", "link_face","link_insta"]);
        if($request->phone_numbers){
            $request_element = array_merge($request_element, ["phone_numbers" => $request->phone_numbers]);
        }
        else{
            $request_element = array_merge($request_element, ["phone_numbers" => NULL]);
        }
        if($request->emails){
            $request_element = array_merge($request_element, ["emails" => $request->emails]);
        }
        else{
            $request_element = array_merge($request_element, ["emails" => NULL]);
        }
        $request_element = array_merge($request_element, [ "code_ubigeo" => $request->department . $request->province . $request->district]);
        try {
            $element = BranchOffice::UpdateOrCreate(["id" => $element->id], $request_element);
            return response()->json(['title' => trans('custom.title.success'), 'message' => trans('custom.message.update.success', ['name' => trans('custom.attribute.sucursal')])], 200);
        } catch (\Exception $e) {
            return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.message.update.error', ['name' => trans('custom.attribute.sucursal')])], 500);
        }
    }

    // MUESTRA TODOS LOS PRODUCTOS
    public function getAllProduct(){
        $els = Productos::orderBy('index')->get();
        return response()->json($els);
    }
    //--------------------------------------

    // MUESTRA UN PRODUCTO 
    public function getProduct(Productos $element){
        return response()->json($element);
    }

    // MUESTRA TODOS LOS PRODUCTOS
    public function getAllPaymentMethod(){
        $els = PaymendMethod::get();
        return response()->json($els);
    }
    //--------------------------------------

}
