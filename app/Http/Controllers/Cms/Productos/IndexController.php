<?php

namespace App\Http\Controllers\Cms\Productos;

use App\Customer;
use App\Productos;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\Cms\CustomerRequest;
use App\Http\Requests\Cms\ProductosRequest;
use App\Http\Traits\CmsTrait;
use Illuminate\Support\Facades\Storage;

class IndexController extends Controller
{
    use CmsTrait;

    public function index()
    {
        return view("admin.pages.productos.index");
    }

    public function store(ProductosRequest $request)
    {
        $el = request(["name", "precio", "active"]);
        $image_name = $this->setFileName('t-', $request->file('image'));
        $store_image = Storage::disk('public')->putFileAs('img/productos/', $request->file('image'), $image_name);
        if (!$store_image) {
            return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.errors.image')], 500);
        }
        $el = array_merge($el, ["image" => $image_name]);
        $elIndex = $this->getMaxIndex(Productos::selectRaw('MAX(id),MAX(`index`) as "index"')->get());

        $el = array_merge($el, ["index" => $elIndex]);
        try {
            $el = Productos::UpdateOrCreate($el);
            return response()->json(['title' => trans('custom.title.success'), 'message' => trans('custom.message.create.success', ['name' => trans('custom.attribute.customer')])], 200);
        } catch (\Exception $e) {
            return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.message.create.error', ['name' => trans('custom.attribute.customer')])], 500);
        }
    }

    public function get(Productos $element)
    {
        return response()->json($element);
    }

    public function getAll(Request $request)
    {
        $els = Productos::orderBy('index')->get();
        return response()->json($els);
    }

    public function destroy(Productos $element)
    {
        $image = $element->image;
        try {
            $delete_element = $element->delete();
            if ($delete_element) {
                if ($image) {
                    Storage::disk('public')->delete('img/productos/' . $image);
                }
            }
            return response()->json(['title' => trans('custom.title.success'), 'message' => trans('custom.message.delete.success', ['name' => trans('custom.attribute.customer')])], 200);
        } catch (\Exception $e) {
            return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.message.delete.error', ['name' => trans('custom.attribute.customer')])], 500);
        }
    }

    public function order(Request $request)
    {
        $elements = $request->all();
        try {
            for ($i = 0; $i < count($elements); $i++) {
                $cliente = Productos::UpdateOrCreate(["id" => $elements[$i]["id"]], ["index" => $i + 1]);
            }
            return response()->json(['title' => trans('custom.title.success'), 'message' => trans('custom.message.update.success', ['name' => trans('custom.attribute.customer')])], 200);
        } catch (\Exception $e) {
            return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.message.update.error', ['name' => trans('custom.attribute.customer')])], 500);
        }
    }

    public function update(ProductosRequest $request, Productos $element)
    {
        $request_testimonial = request(["name", "precio", "active"]);
        if ($request->hasFile('image')) {
            $image_name = $this->setFileName('t-', $request->file('image'));
            $store_image = Storage::disk('public')->putFileAs('img/productos/', $request->file('image'), $image_name);
            if (!$store_image) {
                return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.errors.image')], 500);
            }
            $request_testimonial = array_merge($request_testimonial, ["image" => $image_name]);
        } else {
            $request_testimonial = array_merge($request_testimonial, ["image" => $element->image]);
        }
        if ($request->hasFile('image') && $element->image) {
            Storage::disk('public')->delete('img/productos/' . $element->image);
        }
        try {
            $element = Productos::UpdateOrCreate(["id" => $element->id], $request_testimonial);
            return response()->json(['title' => trans('custom.title.success'), 'message' => trans('custom.message.update.success', ['name' => trans('custom.attribute.customer')])], 200);
        } catch (\Exception $e) {
            return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.message.update.error', ['name' => trans('custom.attribute.customer')])], 500);
        }
    }
}
