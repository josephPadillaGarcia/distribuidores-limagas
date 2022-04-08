<?php
namespace App\Repositories;

use App\Lead;
use App\Encuesta;

class EncuestasRepository
{
    public function datatable($items_per_page, $q = false)
    {
        if ($q) {
            $encuestas = Encuesta::select("*")
            ->where(function($query) use ($q){
                return $query->where('num_face', 'like', '%' . $q . '%')
                ->orWhere('respuesta', 'like', '%' . $q . '%');
            })
            ->orderBy('created_at', 'desc')
            ->paginate($items_per_page);
        } else {
            $encuestas = Encuesta::select("*")
            ->orderBy('created_at', 'desc')
            ->paginate($items_per_page);
        }

        foreach ($encuestas as $encuesta) {
            $data[] = array(
                "id" => $encuesta["id"],
                "num_face" => $encuesta['num_face'],
                "respuesta" => $encuesta["respuesta"],
                "created_at" => $encuesta["created_at_format"],
            );
        }
        $encuestas = $encuestas->toArray();
        if (isset($data)) {
            $encuestas["data"] = '';
            $encuestas["data"] = $data;
        }
        return $encuestas;
    }
}
