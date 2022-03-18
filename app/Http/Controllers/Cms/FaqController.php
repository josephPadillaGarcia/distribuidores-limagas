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
                        'name' => trans('custom.attribute.testimonial')
                    ])
                ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'title' => trans('custom.title.error'), 
                'message' => trans('custom.message.update.error', 
                    [
                        'name' => trans('custom.attribute.testimonial')
                    ])
                ], 500);
        }
    }


    public function store(FaqRequest $request)
    {
        $faq = request(["question", "description"]);
        
        /*$testimonialIndex = $this->getMaxIndex(Testimonial::selectRaw('MAX(id),MAX(`index`) as "index"')->get());

        $testimonial = array_merge($testimonial, ["index" => $testimonialIndex]);*/
        try {
            $faq = Faq::UpdateOrCreate($faq);
            return response()->json(['title' => trans('custom.title.success'), 'message' => trans('custom.message.create.success', ['name' => trans('custom.attribute.testimonial')])], 200);
        } catch (\Exception $e) {
            return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.message.create.error', ['name' => trans('custom.attribute.testimonial')])], 500);
        }
    }
}
