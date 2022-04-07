<?php
namespace App\Repositories;

use App\Lead;
use App\Encuesta;

class EncuestasRepository
{
    public function datatable($items_per_page)
    {
        /*if ($q) {
            $leads = Encuesta::select("*")
            ->where(function($query) use ($q){
                return $query->where('name', 'like', '%' . $q . '%')
                ->orWhere('mobile', 'like', '%' . $q . '%')
                ->orWhere('business', 'like', '%' . $q . '%')
                ->orWhereHas('serviceRel', function ($q2) use ($q){
                    $q2->where('title_es', 'like', '%' . $q . '%');
                });
            })
            ->with('serviceRel')
            ->orderBy('created_at', 'desc')
            ->paginate($items_per_page);
        } else {
            $leads = Encuesta::select("*")
            ->with('serviceRel')
            ->orderBy('created_at', 'desc')
            ->paginate($items_per_page);
        }*/

        $leads = Encuesta::select("*")
            ->orderBy('created_at', 'desc')
            ->paginate($items_per_page);
        foreach ($leads as $lead) {
            $data[] = array(
                "id" => $lead["id"],
                "num_face" => $lead['num_face'],
                "respuesta" => $lead["respuesta"],
                "created_at" => $lead["created_at_format"],
            );
        }
        $leads = $leads->toArray();
        if (isset($data)) {
            $leads["data"] = '';
            $leads["data"] = $data;
        }
        return $leads;
    }
}
