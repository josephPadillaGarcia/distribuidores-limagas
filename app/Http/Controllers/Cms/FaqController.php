<?php

namespace App\Http\Controllers\Cms;

use App\Http\Controllers\Controller;
use App\Http\Requests\Cms\FaqRequest;
use App\Http\Traits\CmsTrait;
use App\Faq;

use Illuminate\Http\Request;

class FaqController extends Controller
{
    use CmsTrait;

    public function index(){
        return view("admin.pages.faqs");
    }

    /* OBTENER LOS DATOS REGISTRADOS DE LA TABLA FAQ */
    public function getAll(Request $request)
    {
        $faqs = Faq::get();
        return response()->json($faqs);
    }
    /*----------------------------------------------------*/

    public function get(Faq $element)
    {
        return response()->json($element);
    }

    public function order(Request $request)
    {
        $elements = $request->all();
        try {
            for ($i = 0; $i < count($elements); $i++) {
                $cliente = Faq::UpdateOrCreate(["id" => $elements[$i]["id"]], ["index" => $i + 1]);
            }
            return response()->json([
                'title' => trans('custom.title.success'), 
                'message' => trans('custom.message.update.success', 
                    [
                        'name' => trans('custom.attribute.faqs')
                    ])
                ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'title' => trans('custom.title.error'), 
                'message' => trans('custom.message.update.error', 
                    [
                        'name' => trans('custom.attribute.faqs')
                    ])
                ], 500);
        }
    }


    public function store(FaqRequest $request)
    {
        $faq = request(["question", "description", "like", "dislike"]);
        
        /*$testimonialIndex = $this->getMaxIndex(Testimonial::selectRaw('MAX(id),MAX(`index`) as "index"')->get());

        $testimonial = array_merge($testimonial, ["index" => $testimonialIndex]);*/
        try {
            $faq = Faq::UpdateOrCreate($faq);
            return response()->json(['title' => trans('custom.title.success'), 'message' => trans('custom.message.create.success', ['name' => trans('custom.attribute.faqs')])], 200);
        } catch (\Exception $e) {
            return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.message.create.error', ['name' => trans('custom.attribute.faqs')])], 500);
        }
    }

    public function update(FaqRequest $request, Faq $element)
    {
        $faq = request(["question", "description"]);
        /*if ($request->hasFile('image')) {
            $image_name = $this->setFileName('t-', $request->file('image'));
            $store_image = Storage::disk('public')->putFileAs('img/testimonials/', $request->file('image'), $image_name);
            if (!$store_image) {
                return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.errors.image')], 500);
            }
            $request_testimonial = array_merge($request_testimonial, ["image" => $image_name]);
        } else {
            $request_testimonial = array_merge($request_testimonial, ["image" => $element->image]);
        }
        if ($request->hasFile('image') && $element->image) {
            Storage::disk('public')->delete('img/testimonials/' . $element->image);
        }*/
        try {
            $element = Faq::UpdateOrCreate(["id" => $element->id], $faq);
            return response()->json(['title' => trans('custom.title.success'), 'message' => trans('custom.message.update.success', ['name' => trans('custom.attribute.faqs')])], 200);
        } catch (\Exception $e) {
            return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.message.update.error', ['name' => trans('custom.attribute.faqs')])], 500);
        }
    }

    public function updateLike(FaqRequest $request, Faq $like)
    {
        $faq = request(["like"]);
        try {
            $like = Faq::UpdateOrCreate(["id" => $like->id], $faq);
            return response()->json(['title' => trans('custom.title.success'), 'message' => trans('custom.message.update.success', ['name' => trans('custom.attribute.faqs')])], 200);
        } catch (\Exception $e) {
            return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.message.update.error', ['name' => trans('custom.attribute.faqs')])], 500);
        }
    }

    public function destroy(Faq $element)
    {
        try {
            $delete_element = $element->delete();
            /*if ($delete_element) {
                if ($image) {
                    Storage::disk('public')->delete('img/testimonials/' . $image);
                }
            }*/
            return response()->json(['title' => trans('custom.title.success'), 'message' => trans('custom.message.delete.success', ['name' => trans('custom.attribute.faqs')])], 200);
        } catch (\Exception $e) {
            return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.message.delete.error', ['name' => trans('custom.attribute.faqs')])], 500);
        }
    }


}
