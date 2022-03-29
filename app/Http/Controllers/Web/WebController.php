<?php

namespace App\Http\Controllers\Web;

use App\AppTracking;
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
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Puesto;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Storage;
use App\Http\Requests\Cms\WorkWithUsRequest;
use App\Http\Traits\CmsTrait;


class WebController extends Controller
{
    use CmsTrait;
    private $locale;

    public function __construct() {
        $this->locale = App::getLocale();
    }

    public function validateLocale($locale){
        if(!in_array($locale, ['en'])){
            App::setLocale('es');
            $this->locale = App::getLocale();
        } else {
            App::setLocale($locale);
            $this->locale = App::getLocale();
        }
    }

    public function getSeoPage($slug, $lang){
        $page = MasterPage::select('id','title_'.$lang,'seo_description_'.$lang,'seo_keywords_'.$lang,'seo_image','slug_'.$lang)->where('slug_en',$slug)->first()->toArray();
        return $page;
    }

    public function getContentPage($slug){
        $content = MasterPage::where('slug_en',$slug)->first()->load('sections:id,name,master_page_id','sections.content:id,master_section_id,field,value,value_en,value_es')->sections->toArray();
        return $content;
    }

    public function index($locale = null)
    {
        $this->validateLocale($locale);
        $page = $this->getSeoPage(NULL, $this->locale);
        $services = Service::where('active', 1)->orderBy('index')->get();
        $tutos = Tutorial::orderBy('index')->get();
        $content = $this->getContentPage(NULL);
        $customers = Customer::where('active', 1)->orderBy('index')->get();
        $appTracking = AppTracking::first();

        $social_networks = SocialNetwork::select('id','url','master_social_network_id')->with('master_social_networks:id,icon,name')->orderBy('index','asc')->get();  
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
            "locale" => $this->locale,
            "routeLocale" => $this->locale === "es" ? "" : $this->locale
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
        $this->validateLocale($locale);
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
            "locale" => $this->locale,
            "routeLocale" => $this->locale === "es" ? "" : $this->locale
        );

        return view("web.pages.about-us", compact('data'));
    }

    public function privacyPolicies($locale = null) 
    {
        $this->validateLocale($locale);
        $page = $this->getSeoPage('privacy-policies', $this->locale);
        // $page = $this->getSeoPage('privacy-policies', 'es');
        $content = $this->getContentPage('privacy-policies');
        $data = array(
            "page" => $page,
            "content" => $content,
            "locale" => $this->locale,
            "routeLocale" => $this->locale === "es" ? "" : $this->locale
        );

        return view("web.pages.privacy-policies", compact('data'));
    }

    public function quotations($locale = null) 
    {
        $this->validateLocale($locale);
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
            "locale" => $this->locale,
            "routeLocale" => $this->locale === "es" ? "" : $this->locale
        );

        return view("web.pages.quotations", compact('data'));
    }

    public function services($locale = null) 
    {
        $this->validateLocale($locale);
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
            "locale" => $this->locale,
            "routeLocale" => $this->locale === "es" ? "" : $this->locale
        );

        return view("web.pages.services", compact('data'));
    }

    public function service(Request $request, $slug, $locale = null) 
    {
        $this->validateLocale($locale);
        $service = Service::where('slug_' . $this->locale, $slug)->where('active',true)->first();
        // $service = Service::where('slug_' . "es", $slug)->where('active', true)->first();

        if (!$service) {
            return $this->sendError("");
        }
        $page = $this->getSeoPage('services', $this->locale);
        // $page = $this->getSeoPage('services', "es");
        $privacy = $this->getContentPage('privacy-policies');
        $appTracking = AppTracking::first();
        $services = Service::where('active',true)->where('id', '!=', $service->id)->inRandomOrder()->take(3)->get();
        $quantityPackages = ConfigQuantityPackage::where('active', 1)->orderBy('index')->get();
        $content = $this->getContentPage('services');
        $contentQuotes = $this->getContentPage('quotes');
        $data = array(
            "page" => $page,            
            'privacy' => $privacy,
            "appTracking" => $appTracking,
            "services" => $services,
            "quantity" => $quantityPackages,
            "service" => $service,
            "content" => $content,
            "contentQuotes" => $contentQuotes,
            "locale" => $this->locale,
            "routeLocale" => $this->locale === "es" ? "" : $this->locale
        );

        return view("web.pages.service", compact('data'));
    }

    public function faq($locale = null){
        $page = $this->getSeoPage('faq', $this->locale);
        $faqs = Faq::get();
        $content = $this->getContentPage('services');
        $data = array(
            "page" => $page,
            "faqs" => $faqs,
            "locale" => $this->locale,
            "content" => $content,
        );

        return view("web.pages.faq", compact('data'));
    }

    public function encuesta(Request $request){
        try {
            $encuesta= new Encuesta();
            $encuesta->num_face = $request->num_face;
            $encuesta->respuesta = $request->respuesta;

            $encuesta->save();
            return  response()->json($encuesta, 200);
        } catch (\Exception $e) {
            return  response()->json('malo', 500);
        }   
    }

    public function workwithUs($locale = null){
        $page = $this->getSeoPage('work-with-us', $this->locale);
        $workwus = Puesto::get();
        $data = array(
            "page" => $page,
            "workwus" => $workwus,
        );
        return view("web.pages.work-with-us", compact('data'));
    }

    public function sendMessage(Request $request, WorkWithUsModal $workwithus){
        //$file_name = $this->setFileName('f-', $request->file('archivo'));
        //$store_file = Storage::disk('public')->putFileAs('files/', $request->file('archivo'), $file_name);

        try {
            //$file_name = $this->setFileName('f-', $request->file('archivo'));
            //$store_file = Storage::disk('public')->putFileAs('files/', $request->file('archivo'), $file_name);

            //return $request->file('archivo')." + ".$file_name;

            /*$workwithus->name = $request->name;
            $workwithus->apellido = $request->apellido;
            $workwithus->email = $request->email;
            $workwithus->phone = $request->phone;
            $workwithus->name_file = $request->archivo;
            $workwithus->puesto = $request->puesto;

            $workwithus->save();*/
            echo $request->apellido;
        } catch (\Exception $e) {
            return  response()->json('malo', 500);
        }
    }


}