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
        $el = request(["name", "description", "direction", "schedule","iframe", "products", "link_face","link_insta", "payment_methods"]);
        if($request->emails){
            $el = array_merge($el, ["emails" => $request->emails]);
        }
        if($request->phone_numbers){
            $el = array_merge($el, ["phone_numbers" => $request->phone_numbers]);
        }
        if($request->num_what){
            $el = array_merge($el, ["num_what" => $request->num_what]);
        }
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
