<?php

namespace App\Http\Controllers\Web;

use App\AppTracking;
use App\Category;
use App\ConfigQuantityPackage;
use App\Customer;
use App\MasterLeadMedium;
use App\Post;
use App\Project;
use App\Service;
use App\Testimonial;
use App\Tutorial;
use App\MasterPage;
use App\SocialNetwork;
use App\Information;
use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\App;

class WebController extends Controller
{
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
}