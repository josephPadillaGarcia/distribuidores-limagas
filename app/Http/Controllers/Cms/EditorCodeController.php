<?php

namespace App\Http\Controllers\Cms;

use App\Http\Controllers\Controller;
use App\EditorScript;
use App\EditorStyles;
use App\Http\Requests\CMS\EditorRequest;
use App\Http\Traits\CmsTrait;

use Illuminate\Http\Request;

class EditorCodeController extends Controller
{

    use CmsTrait;

    public function index(){
        return view("admin.pages.editor");
    }

    public function storeScript(EditorRequest $request){
        $editorscript = request(["codescript"]);        
        try {
            $editorscript  = EditorScript::UpdateOrCreate($editorscript);
            return response()->json(['title' => trans('custom.title.success'), 'message' => trans('custom.message.create.success', ['name' => trans('custom.attribute.faqs')])], 200);
        } catch (\Exception $e) {
            return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.message.create.error', ['name' => trans('custom.attribute.faqs')])], 500);
        }
    }

    /* OBTENER LOS DATOS REGISTRADOS DE LA TABLA FAQ */
    public function getAll(Request $request)
    {
        $codes = EditorScript::get();
        return response()->json($codes);
    }
    /*----------------------------------------------------*/

}
