<?php

namespace App\Http\Controllers\Api;

use App\AppTracking;
use App\Category;
use App\ConfigQuantityPackage;
use App\Customer;
use App\Http\Controllers\Api\BaseController;
use App\MasterLeadMedium;
use App\Post;
use App\Project;
use App\Service;
use App\Testimonial;
use App\Tutorial;
use Carbon\Carbon;
use Illuminate\Http\Request;

class PageController extends BaseController
{

    public function home(Request $request)
    {
        $page = $this->getSeoPage(NULL, $request->locale);
        $services = Service::where('active', 1)->orderBy('index')->get();
        $tutos = Tutorial::orderBy('index')->get();
        $content = $this->getContentPage(NULL);
        $customers = Customer::where('active', 1)->orderBy('index')->get();
        $appTracking = AppTracking::first();
        $data = array(
            "page" => $page,
            "services" => $services,
            "content" => $content,
            "tutos" => $tutos,
            "customers" => $customers,
            "appTracking" => $appTracking
        );
        return $this->sendResponse($data, '');
    }

    public function about(Request $request)
    {
        $appTracking = AppTracking::first();
        $page = $this->getSeoPage('about-dinet', $request->locale);
        $content = $this->getContentPage('about-dinet');
        $customers = Customer::where('active', 1)->orderBy('index')->get();
        $testimonials = Testimonial::where('active', 1)->orderBy('index')->get();
        $data = array(
            "page" => $page,
            "content" => $content,
            "customers" => $customers,
            "testimonials" => $testimonials,
            "appTracking" => $appTracking
        );
        return $this->sendResponse($data, '');
    }

    public function services(Request $request)
    {
        $page = $this->getSeoPage('services', $request->locale);
        $services = Service::where('active', 1)->orderBy('index')->get();
        $content = $this->getContentPage('services');
        $appTracking = AppTracking::first();
        $data = array(
            "page" => $page,
            "services" => $services,
            "content" => $content,
            "appTracking" => $appTracking
        );
        return $this->sendResponse($data, '');
    }

    public function servicesRead(Request $request)
    {
        $service = Service::where('slug_' . $request->locale, $request->slug)->where('active',true)->first();
        if (!$service) {
            return $this->sendError("");
        }
        $page = $this->getSeoPage('services', $request->locale);
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
        return $this->sendResponse($data, '');
    }

    public function quotes(Request $request)
    {
        $page = $this->getSeoPage('quotes', $request->locale);
        $content = $this->getContentPage('quotes');
        $quantityPackages = ConfigQuantityPackage::where('active', 1)->orderBy('index')->get();
        $data = array(
            "page" => $page,
            "content" => $content,
            "quantity" => $quantityPackages
        );
        return $this->sendResponse($data, '');
    }

    public function privacityPolicy(Request $request)
    {
        $page = $this->getSeoPage('privacy-policies', $request->locale);
        $content = $this->getContentPage('privacy-policies');
        $data = array(
            "page" => $page,
            "content" => $content
        );
        return $this->sendResponse($data, '');
    }

}
