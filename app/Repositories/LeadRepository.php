<?php
namespace App\Repositories;

use App\Lead;
use App\LeadVideocall;
use App\LeadSaleLand;
use Carbon\Carbon;

class LeadRepository
{
    public function datatable($items_per_page, $q = false)
    {
        if ($q) {
            $leads = Lead::select("*")
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
            $leads = Lead::select("*")
            ->with('serviceRel')
            ->orderBy('created_at', 'desc')
            ->paginate($items_per_page);
        }
        foreach ($leads as $lead) {
            $data[] = array(
                "id" => $lead["id"],
                "name" => $lead['name'],
                "email" => $lead["email"],
                "mobile" => $lead["mobile_format"],
                "business" => $lead["business"],
                "service" => $lead['serviceRel']['title_es'],
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
