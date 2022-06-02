<?php

namespace App\Http\Controllers\Cms;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Traits\CmsTrait;

class CmsController extends Controller
{
    use CmsTrait;
    
    public function getDepartmentsParent(){
        $elements = $this->getDepartments();
        return response()->json($elements); 
    }

    public function getProvincesParent(Request $request){
        $elements = $this->getProvinces($request->department);
        return response()->json($elements); 
    }

    public function getDistrictsParent(Request $request){
        $elements = $this->getDistricts($request->department,$request->province);
        return response()->json($elements); 
    }
    
}