<?php

namespace App\Http\Controllers\Cms;

use App\Tutorial;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\Cms\TutorialRequest;
use App\Http\Traits\CmsTrait;
use Illuminate\Support\Facades\Storage;

class TutorialsController extends Controller
{
    use CmsTrait;

    public function index()
    {
        return view("admin.pages.tutorials");
    }

    public function store(TutorialRequest $request)
    {
        $el = request(["title_es", "title_en", "link"]);
        $image_name = $this->setFileName('t-', $request->file('image'));
        $store_image = Storage::disk('public')->putFileAs('img/tutorials/', $request->file('image'), $image_name);
        if (!$store_image) {
            return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.errors.image')], 500);
        }
        $el = array_merge($el, ["image" => $image_name]);
        $elIndex = $this->getMaxIndex(Tutorial::selectRaw('MAX(id),MAX(`index`) as "index"')->get());

        $el = array_merge($el, ["index" => $elIndex]);
        try {
            $el = Tutorial::UpdateOrCreate($el);
            return response()->json(['title' => trans('custom.title.success'), 'message' => trans('custom.message.create.success', ['name' => trans('custom.attribute.tutorial')])], 200);
        } catch (\Exception $e) {
            return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.message.create.error', ['name' => trans('custom.attribute.tutorial')])], 500);
        }
    }

    public function get(Tutorial $element)
    {
        return response()->json($element);
    }

    public function getAll(Request $request)
    {
        $els = Tutorial::orderBy('index')->get();
        return response()->json($els);
    }

    public function destroy(Tutorial $element)
    {
        $image = $element->image;
        try {
            $delete_element = $element->delete();
            if ($delete_element) {
                if ($image) {
                    Storage::disk('public')->delete('img/tutorials/' . $image);
                }
            }
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
                $cliente = Tutorial::UpdateOrCreate(["id" => $elements[$i]["id"]], ["index" => $i + 1]);
            }
            return response()->json(['title' => trans('custom.title.success'), 'message' => trans('custom.message.update.success', ['name' => trans('custom.attribute.tutorial')])], 200);
        } catch (\Exception $e) {
            return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.message.update.error', ['name' => trans('custom.attribute.tutorial')])], 500);
        }
    }

    public function update(TutorialRequest $request, Customer $element)
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
            $element = Tutorial::UpdateOrCreate(["id" => $element->id], $request_testimonial);
            return response()->json(['title' => trans('custom.title.success'), 'message' => trans('custom.message.update.success', ['name' => trans('custom.attribute.tutorial')])], 200);
        } catch (\Exception $e) {
            return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.message.update.error', ['name' => trans('custom.attribute.tutorial')])], 500);
        }
    }
}
