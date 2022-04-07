<?php

namespace App\Http\Controllers\CMS\Encuesta;

use Illuminate\Http\Request;
use App\Http\Traits\CmsTrait;
use App\Http\Controllers\Controller;

class EncuestasController extends Controller
{
    use CmsTrait;

    public function index()
    {
        return view("admin.pages.encuesta.encuestas");
    }
}
