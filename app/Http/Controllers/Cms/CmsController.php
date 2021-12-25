<?php

namespace App\Http\Controllers\Cms;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

use Auth;
use App\Category;
use App\Http\Traits\CmsTrait;

class CmsController extends Controller
{
    use CmsTrait;

    public function getFile($folder,$subfolder,$file){
        $ruta = '/'.$folder."/".$subfolder."/".$file;
        if(Storage::disk('private')->exists($ruta)){
            return response()->download(storage_path('app/private'.$ruta), null, [], null);
        }
        else{
            return abort(404);
        }
    }

    public function getCategories(){
        $categories = Category::all();
        return response()->json($categories);
    }
    
}