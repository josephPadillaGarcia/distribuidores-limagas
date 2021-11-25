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

class WebController extends Controller
{
    public function getSeoPage($slug, $lang){
        $page = MasterPage::select('id','title_'.$lang,'seo_description_'.$lang,'seo_keywords_'.$lang,'seo_image','slug_'.$lang)->where('slug_en',$slug)->first()->toArray();
        return $page;
    }

    public function getContentPage($slug){
        $content = MasterPage::where('slug_en',$slug)->first()->load('sections:id,name,master_page_id','sections.content:id,master_section_id,field,value,value_en,value_es')->sections->toArray();
        return $content;
    }

    public function index()
    {
        // $page = $this->getSeoPage(NULL, $request->locale);
        $page = $this->getSeoPage(NULL, "es");
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
        );

        return view("web.pages.index", compact('data'));
    }

    public function aboutUs() 
    {
        // $page = $this->getSeoPage('about-dinet', $request->locale);
        $page = $this->getSeoPage('about-dinet', "es");
        $testimonials = Testimonial::where('active', 1)->orderBy('index')->get();
        $content = $this->getContentPage('about-dinet');
        $customers = Customer::where('active', 1)->orderBy('index')->get();
        $appTracking = AppTracking::first();

        $data = array(
            "page" => $page,
            "content" => $content,
            "customers" => $customers,
            "testimonials" => $testimonials,
            "appTracking" => $appTracking
        );

        return view("web.pages.about-us", compact('data'));
    }

    public function privacyPolicies() 
    {
        // $page = $this->getSeoPage('privacy-policies', $request->locale);
        $page = $this->getSeoPage('privacy-policies', 'es');
        $content = $this->getContentPage('privacy-policies');
        $data = array(
            "page" => $page,
            "content" => $content
        );

        return view("web.pages.privacy-policies", compact('data'));
    }

    public function quotations() 
    {
        // $page = $this->getSeoPage('quotes', $request->locale);
        $page = $this->getSeoPage('quotes', "es");
        $content = $this->getContentPage('quotes');
        $services = Service::where('active', 1)->orderBy('index')->get()->toJson();
        $quantityPackages = ConfigQuantityPackage::where('active', 1)->orderBy('index')->get()->toJson();
        $data = array(
            "page" => $page,
            "content" => $content,
            "services" => $services,
            "quantity" => $quantityPackages
        );

        return view("web.pages.quotations", compact('data'));
    }

    public function services() 
    {
        // $page = $this->getSeoPage('services', $request->locale);
        $page = $this->getSeoPage('services', "es");
        $services = Service::where('active', 1)->orderBy('index')->get();
        $content = $this->getContentPage('services');
        $appTracking = AppTracking::first();
        $data = array(
            "page" => $page,
            "services" => $services,
            "content" => $content,
            "appTracking" => $appTracking
        );

        return view("web.pages.services", compact('data'));
    }

    public function service(Request $request, $slug) 
    {
        // $service = Service::where('slug_' . $request->locale, $request->slug)->where('active',true)->first();
        $service = Service::where('slug_' . "es", $slug)->where('active', true)->first();

        if (!$service) {
            return $this->sendError("");
        }
        // $page = $this->getSeoPage('services', $request->locale);
        $page = $this->getSeoPage('services', "es");
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
            "contentQuotes" => $contentQuotes
        );

        return view("web.pages.service", compact('data'));
    }
}