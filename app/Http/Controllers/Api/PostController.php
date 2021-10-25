<?php

namespace App\Http\Controllers\Api;

use App\Applicant;
use App\Http\Requests\Api\Post\SuscribeRequest;
use App\Suscriber;
use Illuminate\Http\Request;
use App\Http\Controllers\Api\BaseController;
use App\Http\Requests\Api\Post\ApplicantRequest;
use App\Http\Requests\Api\Post\Lead\OnlineAppointmentRequest;
use App\Http\Requests\Api\Post\Lead\SellLandRequest;
use App\Http\Requests\Api\Post\Lead\TraditionalRequest;
use App\Http\Requests\Api\Post\QuotationRequest;
use App\Lead;
use App\LeadSaleLand;
use App\LeadVideocall;
use App\Project;
use App\ProjectQuotation;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class PostController extends BaseController
{
    public function traditional(TraditionalRequest $request){
        $el = request(['name','email','mobile','document_number','message','department']);
		try {
            $el = Lead::UpdateOrCreate(array_merge($el,["lead_source_id" => 1]));
            return $this->sendResponse([], trans('custom.title.success'), 200);;
        } catch (\Exception $e) {
            return $this->sendError(trans('custom.title.error'), [], 500);
        }
    }

}
