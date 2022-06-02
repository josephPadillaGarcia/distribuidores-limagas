<?php

namespace App\Http\Controllers\Cms\Productos;

use App\Customer;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\Cms\CustomerRequest;
use App\Http\Traits\CmsTrait;
use Illuminate\Support\Facades\Storage;

class IndexController extends Controller
{
    use CmsTrait;

    public function index()
    {
        return view("admin.pages.productos.index");
    }

    public function store(CustomerRequest $request)
    {
        $el = request(["name", "active"]);
        $image_name = $this->setFileName('t-', $request->file('image'));
        $store_image = Storage::disk('public')->putFileAs('img/customers/', $request->file('image'), $image_name);
        if (!$store_image) {
            return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.errors.image')], 500);
        }
        $el = array_merge($el, ["image" => $image_name]);
        $elIndex = $this->getMaxIndex(Customer::selectRaw('MAX(id),MAX(`index`) as "index"')->get());

        $el = array_merge($el, ["index" => $elIndex]);
        try {
            $el = Customer::UpdateOrCreate($el);
            return response()->json(['title' => trans('custom.title.success'), 'message' => trans('custom.message.create.success', ['name' => trans('custom.attribute.customer')])], 200);
        } catch (\Exception $e) {
            return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.message.create.error', ['name' => trans('custom.attribute.customer')])], 500);
        }
    }

    public function get(Customer $element)
    {
        return response()->json($element);
    }

    public function getAll(Request $request)
    {
        $els = Customer::orderBy('index')->get();
        return response()->json($els);
    }

    public function destroy(Customer $element)
    {
        $image = $element->image;
        try {
            $delete_element = $element->delete();
            if ($delete_element) {
                if ($image) {
                    Storage::disk('public')->delete('img/customers/' . $image);
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
                $cliente = Customer::UpdateOrCreate(["id" => $elements[$i]["id"]], ["index" => $i + 1]);
            }
            return response()->json(['title' => trans('custom.title.success'), 'message' => trans('custom.message.update.success', ['name' => trans('custom.attribute.customer')])], 200);
        } catch (\Exception $e) {
            return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.message.update.error', ['name' => trans('custom.attribute.customer')])], 500);
        }
    }

    public function update(CustomerRequest $request, Customer $element)
    {
        $request_testimonial = request(["name", "active"]);
        if ($request->hasFile('image')) {
            $image_name = $this->setFileName('t-', $request->file('image'));
            $store_image = Storage::disk('public')->putFileAs('img/customers/', $request->file('image'), $image_name);
            if (!$store_image) {
                return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.errors.image')], 500);
            }
            $request_testimonial = array_merge($request_testimonial, ["image" => $image_name]);
        } else {
            $request_testimonial = array_merge($request_testimonial, ["image" => $element->image]);
        }
        if ($request->hasFile('image') && $element->image) {
            Storage::disk('public')->delete('img/customers/' . $element->image);
        }
        try {
            $element = Customer::UpdateOrCreate(["id" => $element->id], $request_testimonial);
            return response()->json(['title' => trans('custom.title.success'), 'message' => trans('custom.message.update.success', ['name' => trans('custom.attribute.customer')])], 200);
        } catch (\Exception $e) {
            return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.message.update.error', ['name' => trans('custom.attribute.customer')])], 500);
        }
    }
}
