<?php


namespace App\Http\Controllers\Api;

use App\Certification;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller as Controller;
use App\Information;
use App\MasterPage;
use App\Member;
use App\Post;
use App\Project;
use App\ProjectStatus;
use App\ProjectTypeDepartment;
use App\Service;
use App\SocialNetwork;
use App\Testimonial;
use App\Ubigeo;

class BaseController extends Controller
{
    /**
     * success response method.
     *
     * @return \Illuminate\Http\Response
     */
    public function sendResponse($result, $message)
    {
    	$response = [
            'success' => true,
            'data'    => $result,
            'message' => $message,
        ];
        return response()->json($response, 200);
    }


    /**
     * return error response.
     *
     * @return \Illuminate\Http\Response
     */
    public function sendError($error, $errorMessages = [], $code = 404)
    {
    	$response = [
            'success' => false,
            'message' => $error,
        ];

        
        if(!empty($errorMessages)){
            $response['data'] = $errorMessages;
        }


        return response()->json($response, $code);
    }

    public function layout(){
        $social_networks = SocialNetwork::select('id','url','master_social_network_id')->with('master_social_networks:id,icon,name')->orderBy('index','asc')->get();  
        $information = Information::first();
        $services = Service::where('active', 1)->orderBy('index')->get();
        $data = array(
            "menu" => array(
                "social_networks" => $social_networks,
                "information" => $information,
                "services" => $services
            ),
            "footer" => array(
                "social_networks" => $social_networks,
                "information" => $information,
            )
        );
        return $this->sendResponse($data,'');
    }

    public function getSeoPage($slug, $lang){
        $page = MasterPage::select('id','title_'.$lang,'seo_description_'.$lang,'seo_keywords_'.$lang,'seo_image','slug_'.$lang)->where('slug_en',$slug)->first()->toArray();
        return $page;
    }

    public function getContentPage($slug){
        $content = MasterPage::where('slug_en',$slug)->first()->load('sections:id,name,master_page_id','sections.content:id,master_section_id,field,value,value_en,value_es')->sections->toArray();
        return $content;
    }
}