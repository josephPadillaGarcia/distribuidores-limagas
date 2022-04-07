<?php

namespace App\Http\Controllers\CMS\Encuesta;

use Illuminate\Http\Request;
use App\Http\Traits\CmsTrait;
use App\Http\Controllers\Controller;
use App\Repositories\EncuestasRepository;

class EncuestasController extends Controller
{
    use CmsTrait;

    public function index()
    {
        return view("admin.pages.encuesta.encuestas");
    }

    public function getAll(Request $request, EncuestasRepository $repo)
    {
        //$q = $request->q;
        $headers = ["id", "num_face", "respuesta", "Registrado El"];
        /*if ($q) {
            $elements = $repo->datatable($request->itemsPerPage, $q);
        } else {
            $elements = $repo->datatable($request->itemsPerPage);
        }*/
        $elements = $repo->datatable($request->itemsPerPage);
        $elements["headers"] = $headers;
        return response()->json($elements);

        return response()->json([]);
    }

}
