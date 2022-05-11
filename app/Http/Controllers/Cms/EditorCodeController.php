<?php

namespace App\Http\Controllers\Cms;

use App\Http\Controllers\Controller;

use Illuminate\Http\Request;

class EditorCodeController extends Controller
{
    public function index(){
        return view("admin.pages.editor");
    }

    public function script(){
    }
}
