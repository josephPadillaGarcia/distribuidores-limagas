<?php

namespace App\Http\Controllers\Web;

use App\BranchOffice;
use App\ConfigQuantityPackage;
use App\Customer;
use App\Faq;
use App\MasterLeadMedium;
use App\Puestos;
use App\Post;
use App\Project;
use App\Service;
use App\Testimonial;
use App\Tutorial;
use App\MasterPage;
use App\SocialNetwork;
use App\Information;
use Carbon\Carbon;
use App\Encuesta;
use App\WorkWithUsModal;
use App\NewsModal;
use App\EditorScript;
use App\EditorStyles;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\Api\Post\LeadRequest;
use App\Puesto;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Storage;
use App\Http\Requests\Cms\WorkWithUsRequest;
use App\Http\Traits\CmsTrait;
use App\Ubigeo;
use App\listaDistribuidores;

class WebController extends Controller
{
    use CmsTrait;
    private $locale;

    public function __construct()
    {
        $this->locale = App::getLocale();
    }

    /*public function validateLocale($locale){
        if(!in_array($locale, ['en'])){
            App::setLocale('es');
            $this->locale = App::getLocale();
        } else {
            App::setLocale($locale);
            $this->locale = App::getLocale();
        }
    }*/

    public function getSeoPage($slug, $lang)
    {
        $page = MasterPage::select('id', 'title_' . $lang, 'seo_description_' . $lang, 'seo_keywords_' . $lang, 'seo_image', 'slug_' . $lang)->where('slug_en', $slug)->first()->toArray();
        return $page;
    }

    public function getContentPage($slug)
    {
        $content = MasterPage::where('slug_en', $slug)->first()->load('sections:id,name,master_page_id', 'sections.content:id,master_section_id,field,value,value_en,value_es')->sections->toArray();
        return $content;
    }

    public function index(Request $request , $locale = null)
    {

        //$page = $this->getSeoPage('branch-offices', $this->locale);
        $content = $this->getContentPage('branch-offices');
        $offices = BranchOffice::with('ubigeoRel');
        $department = $province = $district = NULL;
        if($request->department){
            $department = Ubigeo::where('department', $request->department)->first();
        }
        if($request->province){
            $province = Ubigeo::where('province', $request->province)->where('department', $request->department)->first();
        }
        if($request->district){
            $district = Ubigeo::where('district', $request->district)->where('department', $request->department)->where('province', $request->province)->first();
        }
        if($department && !$province && !$district){
            $offices = $offices->whereHas('ubigeoRel', function ($q) use ($department) {
                $q->where('code_department',$department->code_department);
            });
        }
        if($department && $province && !$district){
            $offices = $offices->whereHas('ubigeoRel', function ($q) use ($department, $province) {
                $q->where('code_department',$department->code_department)->where('code_province',$province->code_province);
            });
        }
        if($department && $province && $district){
            $offices = $offices->whereHas('ubigeoRel', function ($q) use ($department, $province, $district) {
                $q->where('code_department',$department->code_department)->where('code_province',$province->code_province)->where('code_district',$district->code_district);
            });
        }
        $offices = $offices->orderBy('index')->get();
        $departments = Ubigeo::whereHas('branchOfficeRel')->orderBy('code_ubigeo', 'DESC')->groupBy('code_department')->get();
        $data = array(
            "content" => $content,
            "offices" => $offices,
            "departments" => $departments
        );
        return view("web.pages.branch-office", compact('data'))->with(
            ['province' => $request->province, 'department' => $request->department,'district' => $request->district]
        );

    }

    public function distribuidor(BranchOffice $id){
       return view("web.pages.distribuidor", compact('id'));
    }

    public function getProvinces(Request $request)
    {
        $department = Ubigeo::where('department', $request->department)->first();
        $provinces =  Ubigeo::select( 'code_province', 'province')->distinct()->where('code_department', $department->code_department)
            ->whereHas('branchOfficeRel', function ($query) {
                //$query->where('active', 1);
                return true;
            })
            ->where('code_province', '!=', '00')->orderBy('province')->get();
        return response()->json($provinces, 200);
    }

    public function getDistricts(Request $request)
    {
        $department = Ubigeo::where('department', $request->department)->first();
        $province = Ubigeo::where('province', $request->province)->first();
        $districts =  Ubigeo::distinct()->where('code_department', $department->code_department)
            ->where('code_province', $province->code_province)
            ->whereHas('branchOfficeRel', function ($query) {
                //$query->where('active', 1);
                return true;
            })
            ->where('code_district', '!=', '00')->orderBy('district')->get();
        return response()->json($districts, 200);
    }

    public function listadistribuidores(Request $request){

        return view("web.pages.lista-distribuidores");
    }
}
