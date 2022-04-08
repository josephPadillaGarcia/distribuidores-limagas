<?php

namespace App\Http\Controllers\CMS\Encuesta;

use Illuminate\Http\Request;
use App\Http\Traits\CmsTrait;
use App\Http\Controllers\Controller;
use App\Repositories\EncuestasRepository;
use App\Http\Requests\Cms\Export\EncuestasExportExcel;
use App\Exports\EncuestasExport;
use App\Encuesta;

class EncuestasController extends Controller
{
    use CmsTrait;

    public function index()
    {
        return view("admin.pages.encuesta.encuestas");
    }

    public function getAll(Request $request, EncuestasRepository $repo)
    {
        $q = $request->q;
        $headers = ["id", "Num_face", "Respuesta", "Registrado El"];
        if ($q) {
            $elements = $repo->datatable($request->itemsPerPage, $q);
        } else {
            $elements = $repo->datatable($request->itemsPerPage);
        }
        $elements["headers"] = $headers;
        return response()->json($elements);

        return response()->json([]);
    }

    public function get(Encuesta $element)
    {
        return response()->json($element);
    }
    
    public function destroy(Encuesta $element)
    {
        try {
            $element->delete();
            return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.delete.success', ['name' => trans('custom.attribute.lead')]) ], 200);
        } catch (\Exception $e) {
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.delete.error', ['name' => trans('custom.attribute.lead')]) ], 500);
        }
    }

    public function allExport()
    {
        $encuestas = Encuesta::orderBy('created_at', 'asc')->get();
        return new EncuestasExport(null, null, $encuestas);
    }

    public function filterExport(EncuestasExportExcel $request)
    {
        $from = date("Y-m-d H:i:s", strtotime($request->from));
        $to = date("Y-m-d H:i:s", strtotime($request->to));
        $encuestas = Encuesta::whereBetween('created_at', [$from,$to])->orderBy('created_at', 'asc')->get();
        return (new EncuestasExport($from,$to,$encuestas));
    }

}
