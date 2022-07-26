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
use Auth;
use App\Repositories\DistribuidorRepository;

class SucursalesController extends Controller
{
    use CmsTrait;

    public function index()
    {
        return view("admin.pages.sucursales");
    }

    public function store(BranchOfficeRequest $request)
    {

        $productos = json_decode($request->products, true);
        /*$aemails = json_decode($request->emails, true);*/
        //dd(json_decode($request->file('img_slider_1')));
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
        if ($request->hasFile('img_slider_1')) {
            $image_name_01 = $this->setFileName('t-', $request->file('img_slider_1'));
            $store_image_01 = Storage::disk('public')->putFileAs('img/sliders/', $request->file('img_slider_1'), $image_name_01);
            $el = array_merge($el, ["img_slider_1" => $image_name_01]);
            if (!$store_image_01) {
                return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.errors.image') ], 500);
            }
        } else {
            $el = array_merge($el, ["img_slider_1" => ""]);
        }

        // Imagen 02
        if ($request->hasFile('img_slider_2')) {
            $image_name_02 = $this->setFileName('t-', $request->file('img_slider_2'));
            $store_image_02 = Storage::disk('public')->putFileAs('img/sliders/', $request->file('img_slider_2'), $image_name_02);
            $el = array_merge($el, ["img_slider_2" => $image_name_02]);
            if (!$store_image_02) {
                return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.errors.image') ], 500);
            }
        } else {
            $el = array_merge($el, ["img_slider_2" => ""]);
        }

        // Imagen 03
        if ($request->hasFile('img_slider_3')) {
            $image_name_03 = $this->setFileName('t-', $request->file('img_slider_3'));
            $store_image_03 = Storage::disk('public')->putFileAs('img/sliders/', $request->file('img_slider_3'), $image_name_03);
            $el = array_merge($el, ["img_slider_3" => $image_name_03]);
            if (!$store_image_03) {
                return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.errors.image') ], 500);
            }
        } else {
            $el = array_merge($el, ["img_slider_3" => ""]);
        }

        // Imagen 04
        if ($request->hasFile('img_slider_4')) {
            $image_name_04 = $this->setFileName('t-', $request->file('img_slider_4'));
            $store_image_04 = Storage::disk('public')->putFileAs('img/sliders/', $request->file('img_slider_4'), $image_name_04);
            $el = array_merge($el, ["img_slider_4" => $image_name_04]);
            if (!$store_image_04) {
                return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.errors.image') ], 500);
            }
        } else {
            $el = array_merge($el, ["img_slider_4" => ""]);
        }

        // Imagen 05
        if ($request->hasFile('img_slider_5')) {
            $image_name_05 = $this->setFileName('t-', $request->file('img_slider_5'));
            $store_image_05 = Storage::disk('public')->putFileAs('img/sliders/', $request->file('img_slider_5'), $image_name_05);
            $el = array_merge($el, ["img_slider_5" => $image_name_05]);
            if (!$store_image_05) {
                return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.errors.image') ], 500);
            }
        } else {
            $el = array_merge($el, ["img_slider_5" => ""]);
        }


        $el = array_merge($el, [ "code_ubigeo" => $request->department . $request->province . $request->district]);
        $elIndex = $this->getMaxIndex(BranchOffice::selectRaw('MAX(id),MAX(`index`) as "index"')->get());

        $el = array_merge($el, ["index" => $elIndex]);
        try {
            $el = BranchOffice::UpdateOrCreate($el);
            //return response()->json(['title' => trans('custom.title.success'), 'message' => trans('custom.message.create.success', ['name' => trans('custom.attribute.sucursal')])], 200);
        } catch (\Exception $e) {
            return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.message.create.error', ['name' => trans('custom.attribute.sucursal')])], 500);
        }

        try{
            for ($i=0; $i < count($productos); $i++) { 
                $el->productos()->attach($productos[$i]);
            }
            return response()->json(['title' => trans('custom.title.success'), 'message' => trans('custom.message.create.success', ['name' => trans('custom.attribute.sucursal')])], 200);
        }catch (\Exception $e){
            $el->delete();
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
            $el=BranchOffice::find($element['id'])->productos()->where('branchoffice_id', $element['id'])->detach();
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
        if($request->emails){
            $aemails = json_decode($request->emails, true);
            $request_element = array_merge($request_element, ["emails" => $aemails]);
        }
        else{
            $request_element = array_merge($request_element, ["emails" => NULL]);
        }

        if($request->phone_numbers){
            $aphone = json_decode($request->phone_numbers, true);
            $request_element = array_merge($request_element, ["phone_numbers" => $aphone]);
        }
        else{
            $request_element = array_merge($request_element, ["phone_numbers" => NULL]);
        }

        if($request->num_what){
            $awhat = json_decode($request->num_what, true);
            $request_element = array_merge($request_element, ["num_what" => $awhat]);
        }
        else{
            $request_element = array_merge($request_element, ["num_what" => NULL]);
        }

        if($request->link_face){
            $request_element = array_merge($request_element, ["link_face" => $request->link_face]);
        }
        else{
            $request_element = array_merge($request_element, ["link_face" => NULL]);
        }

        if($request->link_insta){
            $request_element = array_merge($request_element, ["link_insta" => $request->link_insta]);
        }
        else{
            $request_element = array_merge($request_element, ["link_insta" => NULL]);
        }

        if($request->products){
            $aproducts = json_decode($request->products, true);
            $request_element = array_merge($request_element, ["products" => $aproducts]);
        }

        if($request->payment_methods){
            $apaymentmethod = json_decode($request->payment_methods, true);
            $request_element = array_merge($request_element, ["payment_methods" => $apaymentmethod]);
        }


        // Imagen 01
        if ($request->hasFile('img_slider_1')) {
            $image_name_01 = $this->setFileName('t-', $request->file('img_slider_1'));
            $store_image_01 = Storage::disk('public')->putFileAs('img/sliders/', $request->file('img_slider_1'), $image_name_01);
            $request_element = array_merge($request_element, ["img_slider_1" => $image_name_01]);
            if (!$store_image_01) {
                return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.errors.image') ], 500);
            }
        } else {
            $request_element = array_merge($request_element, ["img_slider_1" => $element->img_slider_1]);
        }
        if ($request->hasFile('img_slider_1') && $element->img_slider_1) {
            Storage::disk('private')->delete('img/sliders/'.$element->img_slider_1);
        }

        // Imagen 02
        if ($request->hasFile('img_slider_2')) {
            $image_name_02 = $this->setFileName('t-', $request->file('img_slider_2'));
            $store_image_02 = Storage::disk('public')->putFileAs('img/sliders/', $request->file('img_slider_2'), $image_name_02);
            $request_element = array_merge($request_element, ["img_slider_2" => $image_name_02]);
            if (!$store_image_02) {
                return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.errors.image') ], 500);
            }
        } else {
            $request_element = array_merge($request_element, ["img_slider_2" => $element->img_slider_2]);
        }
        if ($request->hasFile('img_slider_2') && $element->img_slider_2) {
            Storage::disk('private')->delete('img/sliders/'.$element->img_slider_2);
        }

        // Imagen 03
        if ($request->hasFile('img_slider_3')) {
            $image_name_03 = $this->setFileName('t-', $request->file('img_slider_3'));
            $store_image_03 = Storage::disk('public')->putFileAs('img/sliders/', $request->file('img_slider_3'), $image_name_03);
            $request_element = array_merge($request_element, ["img_slider_3" => $image_name_03]);
            if (!$store_image_03) {
                return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.errors.image') ], 500);
            }
        } else {
            $request_element = array_merge($request_element, ["img_slider_3" => $element->img_slider_3]);
        }
        if ($request->hasFile('img_slider_3') && $element->img_slider_3) {
            Storage::disk('private')->delete('img/sliders/'.$element->img_slider_3);
        }

        // Imagen 04
        if ($request->hasFile('img_slider_4')) {
            $image_name_04 = $this->setFileName('t-', $request->file('img_slider_4'));
            $store_image_04 = Storage::disk('public')->putFileAs('img/sliders/', $request->file('img_slider_4'), $image_name_04);
            $request_element = array_merge($request_element, ["img_slider_4" => $image_name_04]);
            if (!$store_image_04) {
                return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.errors.image') ], 500);
            }
        } else {
            $request_element = array_merge($request_element, ["img_slider_4" => $element->img_slider_4]);
        }
        if ($request->hasFile('img_slider_4') && $element->img_slider_4) {
            Storage::disk('private')->delete('img/sliders/'.$element->img_slider_4);
        }

        // Imagen 05
        if ($request->hasFile('img_slider_5')) {
            $image_name_05 = $this->setFileName('t-', $request->file('img_slider_5'));
            $store_image_05 = Storage::disk('public')->putFileAs('img/sliders/', $request->file('img_slider_5'), $image_name_05);
            $request_element = array_merge($request_element, ["img_slider_5" => $image_name_05]);
            if (!$store_image_05) {
                return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.errors.image') ], 500);
            }
        } else {
            $request_element = array_merge($request_element, ["img_slider_5" => $element->img_slider_5]);
        }
        if ($request->hasFile('img_slider_5') && $element->img_slider_5) {
            Storage::disk('private')->delete('img/sliders/'.$element->img_slider_5);
        }

        $request_element = array_merge($request_element, [ "code_ubigeo" => $request->department . $request->province . $request->district]);
        try {
            $element = BranchOffice::UpdateOrCreate(["id" => $element->id], $request_element);
            //return response()->json(['title' => trans('custom.title.success'), 'message' => trans('custom.message.update.success', ['name' => trans('custom.attribute.sucursal')])], 200);
        } catch (\Exception $e) {
            return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.message.update.error', ['name' => trans('custom.attribute.sucursal')])], 500);
        }

        try{
            
            $productos = json_decode($request->products, true);
            $eliminar_productos = $element->productos()->detach();
            for ($i=0; $i < count($productos); $i++) { 
                $element->productos()->attach($productos[$i]);
            }

            return response()->json(['title' => trans('custom.title.success'), 'message' => trans('custom.message.create.success', ['name' => trans('custom.attribute.sucursal')])], 200);
        }catch (\Exception $e){
            $element->delete();
            return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.message.create.error', ['name' => trans('custom.attribute.sucursal')])], 500);
        }
    }

    public function getItemsAll(Request $request, DistribuidorRepository $repo)
    {
        $q = $request->q;
        $headers = ["Id", "Distribuidor", "Dirección"];
        if ($q) {
            $elements = $repo->search(Auth::user()->id, $q, $request->itemsPerPage);
        } else {
            $elements = $repo->datatable(Auth::user()->id, $request->itemsPerPage);
        }
        $elements["headers"] = $headers;
        return response()->json($elements);
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

    //MUESTRA LOS PRODUCTOS RELACIONADO CON EL DISTRIBUIDOR
    public function getItemsBranchOfficeProductos(BranchOffice $element){
        $elproductos = BranchOffice::find($element['id'])->productos()->where('branchoffice_id', $element['id'])->get();
        //dd(json_decode($elproductos));
        return response()->json($elproductos);
    }
    //---------------------------------------------

}
