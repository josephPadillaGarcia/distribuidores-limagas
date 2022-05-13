<?php

namespace App\Http\Controllers\Cms;

use App\Http\Controllers\Controller;
use App\EditorScript;
use App\EditorStyles;
use App\Http\Requests\CMS\EditorRequest;
use App\Http\Requests\CMS\EditorStylesRequest;
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

    public function storeStyle(EditorStylesRequest $request){
        $editorstyle = request(["codestyle"]);        
        try {
            $editorstyle  = EditorStyles::UpdateOrCreate($editorstyle);
            return response()->json(['title' => trans('custom.title.success'), 'message' => trans('custom.message.create.success', ['name' => trans('custom.attribute.faqs')])], 200);
        } catch (\Exception $e) {
            return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.message.create.error', ['name' => trans('custom.attribute.faqs')])], 500);
        }
    }

    /* OBTENER LOS DATOS REGISTRADOS DE LA TABLA EDITORCODESCRIPT */
    public function getAll(Request $request)
    {
        $codes = EditorScript::get();
        return response()->json($codes);
    }
    /*----------------------------------------------------*/


    /* OBTENER LOS DATOS REGISTRADOS DE LA TABLA EDITORCODESTYLE */
    public function getAllStyle(Request $request)
    {
        $codestyle = EditorStyles::get();
        return response()->json($codestyle);
    }
    /*----------------------------------------------------*/


    /* OBTIENE LOS DATOS DE UN SOLO REGISTRO MEDIANTE EL ID SCRIPT */
    public function getScript(EditorScript $element){
        return response()->json($element);
    }
    /*----------------------------------------------------*/

    /* OBTIENE LOS DATOS DE UN SOLO REGISTRO MEDIANTE EL ID STYLE */
    public function getStyle(EditorStyles $element){
        return response()->json($element);
    }
    /*----------------------------------------------------*/

    
    public function updateScript(EditorRequest $request, EditorScript $element)
    {
        $editorscript = request(["codescript"]);
        try {
            $element = EditorScript::UpdateOrCreate(["id" => $element->id], $editorscript);
            return response()->json(['title' => trans('custom.title.success'), 'message' => trans('custom.message.update.success', ['name' => trans('custom.attribute.faqs')])], 200);
        } catch (\Exception $e) {
            return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.message.update.error', ['name' => trans('custom.attribute.faqs')])], 500);
        }
    } 
    
    
    public function updateStyle(EditorStylesRequest $request, EditorStyles $element)
    {
        $editorstyle = request(["codestyle"]); 
        try {
            $element = EditorStyles::UpdateOrCreate(["id" => $element->id], $editorstyle);
            return response()->json(['title' => trans('custom.title.success'), 'message' => trans('custom.message.update.success', ['name' => trans('custom.attribute.faqs')])], 200);
        } catch (\Exception $e) {
            return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.message.update.error', ['name' => trans('custom.attribute.faqs')])], 500);
        }
    } 

}
