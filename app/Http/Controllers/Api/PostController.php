<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Api\BaseController;
use App\Http\Requests\Api\Post\LeadRequest;
use App\Lead;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class PostController extends BaseController
{
    public function lead(LeadRequest $request){
        $el = request(['name','email','mobile','business','service_id','quantity_packages']);
		try {
            $el = Lead::UpdateOrCreate($el);
            return $this->sendResponse([], trans('custom.title.success'), 200);;
        } catch (\Exception $e) {
            return $this->sendError(trans('custom.title.error'), [], 500);
        }
    }

}
