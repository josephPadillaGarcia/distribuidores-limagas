<?php

namespace App\Http\Controllers\Cms;

use App\Http\Controllers\Controller;
use App\Http\Requests\Cms\FaqRequest;
use App\Http\Traits\CmsTrait;
use App\Faq;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class FaqController extends Controller
{
    use CmsTrait;

    public function index(){
        return view("admin.pages.faqs");
    }

    /* OBTENER LOS DATOS REGISTRADOS DE LA TABLA FAQ */
    public function getAll(Request $request)
    {
        $faqs = Faq::orderBy('index')->get();
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
        $faq = request(["question", "description", "question_en", "description_en", "like", "dislike"]);
        
        $faqIndex = $this->getMaxIndex(Faq::selectRaw('MAX(id),MAX(`index`) as "index"')->get());

        $faq = array_merge($faq, ["index" => $faqIndex]);
        try {
            $faq = Faq::UpdateOrCreate($faq);
            return response()->json(['title' => trans('custom.title.success'), 'message' => trans('custom.message.create.success', ['name' => trans('custom.attribute.faqs')])], 200);
        } catch (\Exception $e) {
            return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.message.create.error', ['name' => trans('custom.attribute.faqs')])], 500);
        }
    }

    public function update(FaqRequest $request, Faq $element)
    {
        $faq = request(["question", "description", "question_en", "description_en"]);
        try {
            $element = Faq::UpdateOrCreate(["id" => $element->id], $faq);
            return response()->json(['title' => trans('custom.title.success'), 'message' => trans('custom.message.update.success', ['name' => trans('custom.attribute.faqs')])], 200);
        } catch (\Exception $e) {
            return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.message.update.error', ['name' => trans('custom.attribute.faqs')])], 500);
        }
    }    

    public function destroy(Faq $element)
    {
        try {
            $delete_element = $element->delete();
            return response()->json(['title' => trans('custom.title.success'), 'message' => trans('custom.message.delete.success', ['name' => trans('custom.attribute.faqs')])], 200);
        } catch (\Exception $e) {
            return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.message.delete.error', ['name' => trans('custom.attribute.faqs')])], 500);
        }
    }

    public function storeImage(Request $request)
    {
        $file_name = $this->setFileName('fi-', $request->file('image'));
        try {
            $store_image = Storage::disk('public')->putFileAs('img/faqs/', $request->file('image'), $file_name);
            return response()->json(['image'=>Storage::disk('public')->url('img/faqs/'.$file_name)]);
        } catch (\Exception $e) {
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.errors.image') ], 500);
        }
    }

}
