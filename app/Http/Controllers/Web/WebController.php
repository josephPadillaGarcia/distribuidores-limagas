<?php

namespace App\Http\Controllers\Web;

use App\AppTracking;
use App\BranchOffice;
use App\Category;
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
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\Api\Post\LeadRequest;
use App\Puesto;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Storage;
use App\Http\Requests\Cms\WorkWithUsRequest;
use App\Http\Traits\CmsTrait;
use App\Ubigeo;

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

    public function index($locale = null)
    {
        //$this->validateLocale($locale);
        $page = $this->getSeoPage(NULL, $this->locale);
        $services = Service::where('active', 1)->orderBy('index')->get();
        $tutos = Tutorial::orderBy('index')->get();
        $content = $this->getContentPage(NULL);
        $customers = Customer::where('active', 1)->orderBy('index')->get();
        $appTracking = AppTracking::first();

        $social_networks = SocialNetwork::select('id', 'url', 'master_social_network_id')->with('master_social_networks:id,icon,name')->orderBy('index', 'asc')->get();
        $information = Information::first();

        $footer = array(
            "social_networks" => $social_networks,
            "information" => $information,
        );

        $data = array(
            "page" => $page,
            "services" => $services,
            "content" => $content,
            "tutos" => $tutos,
            "customers" => $customers,
            "appTracking" => $appTracking,
            "footer" => $footer,
        );

        //dd($request->all());

        /* $encuesta= new Encuesta();
        $encuesta->num_face = $request->num_face;
        $encuesta->respuesta = $request->respuesta;

        $encuesta->save();*/

        return view("web.pages.index", compact('data'));
    }

    public function aboutUs($locale = null)
    {
        //$this->validateLocale($locale);
        $page = $this->getSeoPage('about-dinet', $this->locale);
        // $page = $this->getSeoPage('about-dinet', "es");
        $testimonials = Testimonial::where('active', 1)->orderBy('index')->get();
        $content = $this->getContentPage('about-dinet');
        $customers = Customer::where('active', 1)->orderBy('index')->get();
        $appTracking = AppTracking::first();

        $data = array(
            "page" => $page,
            "content" => $content,
            "customers" => $customers,
            "testimonials" => $testimonials,
            "appTracking" => $appTracking,
        );

        return view("web.pages.about-us", compact('data'));
    }

    public function privacyPolicies($locale = null)
    {
        //$this->validateLocale($locale);
        $page = $this->getSeoPage('privacy-policies', $this->locale);
        // $page = $this->getSeoPage('privacy-policies', 'es');
        $content = $this->getContentPage('privacy-policies');
        $data = array(
            "page" => $page,
            "content" => $content,
        );

        return view("web.pages.privacy-policies", compact('data'));
    }

    public function quotations($locale = null)
    {
        //$this->validateLocale($locale);
        $page = $this->getSeoPage('quotes', $this->locale);
        // $page = $this->getSeoPage('quotes', "es");
        $content = $this->getContentPage('quotes');
        $services = Service::where('active', 1)->orderBy('index')->get()->toJson();
        $quantityPackages = ConfigQuantityPackage::where('active', 1)->orderBy('index')->get()->toJson();
        $data = array(
            "page" => $page,
            "content" => $content,
            "services" => $services,
            "quantity" => $quantityPackages,
        );

        return view("web.pages.quotations", compact('data'));
    }

    public function services($locale = null)
    {
        //$this->validateLocale($locale);
        $page = $this->getSeoPage('services', $this->locale);
        // $page = $this->getSeoPage('services', "es");
        $services = Service::where('active', 1)->orderBy('index')->get();
        $content = $this->getContentPage('services');
        $appTracking = AppTracking::first();
        $data = array(
            "page" => $page,
            "services" => $services,
            "content" => $content,
            "appTracking" => $appTracking,
        );

        return view("web.pages.services", compact('data'));
    }

    public function service(Request $request, Service $slug)
    {
        //$service = Service::where('slug_' . $this->locale, $slug)->where('active',true)->first();

        /*if (!$service) {
            return Abort(404);
        }*/
        $page = $this->getSeoPage('services', $this->locale);
        // $page = $this->getSeoPage('services', "es");
        $privacy = $this->getContentPage('privacy-policies');
        $appTracking = AppTracking::first();
        $services = Service::where('active', true)->where('id', '!=', $slug->id)->inRandomOrder()->take(3)->get();
        $quantityPackages = ConfigQuantityPackage::where('active', 1)->orderBy('index')->get();
        $content = $this->getContentPage('services');
        $contentQuotes = $this->getContentPage('quotes');
        $data = array(
            "page" => $page,
            'privacy' => $privacy,
            "appTracking" => $appTracking,
            "services" => $services,
            "quantity" => $quantityPackages,
            "service" => $slug,
            "content" => $content,
            "contentQuotes" => $contentQuotes,
        );
        //dd($data);

        return view("web.pages.service", compact('data'));
    }

    public function faq($locale = null)
    {
        $page = $this->getSeoPage('faq', $this->locale);
        $faqs = Faq::orderBy('index')->get();
        $content = $this->getContentPage('faq');
        $data = array(
            "page" => $page,
            "faqs" => $faqs,
            "content" => $content,
        );

        return view("web.pages.faq", compact('data'));
    }

    public function encuesta(Request $request)
    {
        try {
            $encuesta = new Encuesta();
            $encuesta->num_face = $request->num_face;
            $encuesta->respuesta = $request->respuesta;

            $encuesta->save();
            return  response()->json($encuesta, 200);
        } catch (\Exception $e) {
            return  response()->json('malo', 500);
        }
    }

    public function workwithUs($locale = null)
    {
        $page = $this->getSeoPage('work-with-us', $this->locale);
        $workwus = Puesto::get();
        $data = array(
            "page" => $page,
            "workwus" => $workwus,
        );
        return view("web.pages.work-with-us", compact('data'));
    }

    public function sendMessage(Request $request, WorkWithUsModal $workwithus)
    {
        //$el = request(['name', 'apellido','email','phone','name_file','puesto']);
        try {
            $file_name = $this->setFileName('f-', $request->file('archivo'));
            $store_file = Storage::disk('private')->putFileAs('files/', $request->file('archivo'), $file_name);

            //$el = WorkWithUsModal::UpdateOrCreate($el);

            $workwithus->name = $request->nombre;
            $workwithus->apellido = $request->apellido;
            $workwithus->email = $request->email;
            $workwithus->phone = $request->phone;
            $workwithus->name_file = $file_name;
            $workwithus->puesto = $request->puesto;

            $workwithus->save();

            return  response()->json($workwithus, 200);
        } catch (\Exception $e) {
            return  response()->json('malo', 500);
        }
    }

    public function news(Request $request, $locale = null)
    {
        $page = $this->getSeoPage('news', $this->locale);
        $news = Post::with('category')->where('published', 1);
        if ($request->q) {
            $news = $news->where('title_' . $this->locale, 'like', '%' . $request->q . '%');
        }
        $news = $news->orderBy('created_at', 'desc')->paginate(8);
        $content = $this->getContentPage('news');
        $categories = Category::has('post')->orderBy('name_es')->get();
        $data = array(
            "page" => $page,
            "news" => $news,
            "categories" => $categories,
            "content" => $content,
        );

        return view("web.pages.noticias.index", compact('data'));
    }

    public function newsCategory(Request $request, $locale = null)
    {
        $category = Category::where('slug_' . $this->locale, $request->slug)->first();
        if (!$category) {
            return Abort(404);
        }
        $page = $this->getSeoPage('news', $this->locale);
        $news = Post::with('category')->where('published', 1)
            ->where('category_id', $category->id)
            ->orderBy('created_at', 'desc')->paginate(3);
        $content = $this->getContentPage('news');
        $categories = Category::has('post')->orderBy('name_es')->get();
        $data = array(
            "page" => $page,
            "category" => $category,
            "news" => $news,
            "categories" => $categories,
            "content" => $content,
        );

        return view("web.pages.noticias.index", compact('data', 'category'));
    }

    public function singleNews(Request $request, $locale = null)
    {
        $category = Category::select('id', 'name_' . $this->locale, 'slug_es', 'slug_en')->where('slug_' . $this->locale, $request->slug)->first();
        if (!$category) {
            return Abort(404);
        }
        $post = Post::where('slug_' . $this->locale, $request->post)->where('category_id', $category->id)->where('published', 1)->first();
        if (!$post) {
            return Abort(404);
        }
        $page = $this->getSeoPage('news', $this->locale);
        $categories = Category::has('post')->orderBy('name_es')->get();
        $news = Post::where('published', 1)->where('id', '!=', $post->id)->with('category:id,name_' . $this->locale . ',slug_' . $this->locale)->inRandomOrder()->take(3)->get();
        $content = $this->getContentPage('news');
        $data = array(
            "page" => $page,
            "new" => $post,
            "news" => $news,
            "categories" => $categories,
            "content" => $content,
        );

        return view("web.pages.noticias.singlenews", compact('data'));
    }

    public function branchoffice(Request $request)
    {
        $page = $this->getSeoPage('branch-offices', $this->locale);
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
            "page" => $page,
            "content" => $content,
            "offices" => $offices,
            "departments" => $departments
        );
        return view("web.pages.branch-office", compact('data'))->with(
            ['province' => $request->province, 'department' => $request->department,'district' => $request->district]
        );
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
}
