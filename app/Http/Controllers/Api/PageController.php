<?php

namespace App\Http\Controllers\Api;

use App\AboutCustomerSupport;
use App\AboutProjectFinished;
use App\AboutText;
use App\AboutWarrantyElement;
use App\Cami;
use App\CamiElement;
use App\Category;
use App\FinancingOption;
use App\Http\Controllers\Api\BaseController;
use App\MasterLeadMedium;
use App\MasterLeadTimeDay;
use App\Post;
use App\Project;
use App\ProjectBanner;
use App\ProjectQuotation;
use App\ProjectTypeDepartment;
use App\Slider;
use App\Testimonial;
use Carbon\Carbon;
use Illuminate\Http\Request;

class PageController extends BaseController
{

    public function home(Request $request)
    {
        $page = $this->getSeoPage(NULL, $request->locale);
        $slider = Slider::select('id','link', 'image_' . $request->locale, 'image_responsive_' . $request->locale)->where('from', '<=', Carbon::now()->toDateTimeString())
            ->where('to', '>=', Carbon::now()->toDateTimeString())->orderBy('index')->get();
        $projects = $this->paginateProjects($request);
        $posts = Post::select('id', 'excerpt_' . $request->locale, 'created_at', 'category_id', 'thumbnail', 'title_' . $request->locale, 'slug_' . $request->locale)
            ->orderBy('created_at', 'desc')->where('published', 1)->with('category:id,name_' . $request->locale . ',slug_' . $request->locale)->take(9)->get();
        $filters = $this->getFilters();
        $content = $this->getContentPage(NULL);
        $data = array(
            "filters" => $filters,
            "page" => $page,
            "slider" => $slider,
            "projects" => $projects,
            "posts" => $posts,
            "content" => $content
        );
        return $this->sendResponse($data, '');
    }

    public function blog(Request $request)
    {
        $page = $this->getSeoPage('blog', $request->locale);
        $categories = Category::has('post')->orderBy('name_' . $request->locale)->get();
        $posts = $this->paginateBlog($request->q, $request);
        $content = $this->getContentPage('blog');
        $data = array(
            "page" => $page,
            "categories" => $categories,
            "posts" => $posts,
            "content" => $content
        );
        return $this->sendResponse($data, '');
    }

    public function blogCategory(Request $request)
    {
        $category = Category::select('id', 'name_' . $request->locale, 'slug_es', 'slug_en')->where('slug_' . $request->locale, $request->slug)->first();
        if (!$category) {
            return $this->sendError("");
        }
        $posts = $this->paginateBlog($request->q, $request,$category->id);
        $page = $this->getSeoPage('blog', $request->locale);
        $categories = Category::has('post')->orderBy('name_' . $request->locale)->get();
        $content = $this->getContentPage('blog');
        $data = array(
            "page" => $page,
            "category" => $category,
            "categories" => $categories,
            "posts" => $posts,
            "content" => $content
        );
        return $this->sendResponse($data, '');
    }

    public function blogCategoryPost(Request $request)
    {
        $category = Category::select('id', 'name_' . $request->locale, 'slug_es', 'slug_en')->where('slug_' . $request->locale, $request->slug)->first();
        if (!$category) {
            return $this->sendError("Not found");
        }
        $post = Post::where('slug_' . $request->locale, $request->post)->where('category_id', $category->id)->where('published', 1)->first();
        if (!$post) {
            return $this->sendError("Not found");
        }
        $page = $this->getSeoPage('blog', $request->locale);
        $categories = Category::has('post')->orderBy('name_' . $request->locale)->get();
        $posts = Post::where('published', 1)->where('id', '!=', $post->id)->with('category:id,name_' . $request->locale . ',slug_' . $request->locale)->inRandomOrder()->take(3)->get();
        $content = $this->getContentPage('blog');
        $data = array(
            "page" => $page,
            "category" => $category,
            "posts" => $posts,
            'post' => $post,
            "categories" => $categories,
            "content" => $content
        );
        return $this->sendResponse($data, '');
    }

    public function contactUs(Request $request)
    {
        $page = $this->getSeoPage('contact-us', $request->locale);
        $medium = MasterLeadMedium::where('videocall', 0)->get();
        $projects = Project::select('id', 'logo','logo_colour', 'name_es', 'name_en')->where('active', 1)->get();
        $content = $this->getContentPage('contact-us');
        $terms = $this->getContentPage('terms-conditions');
        $privacy = $this->getContentPage('privacy-policies');
        $data = array(
            "page" => $page,
            "medium" => $medium,
            "projects" => $projects,
            "content" => $content,
            'privacy' => $privacy,
            'terms' => $terms
        );
        return $this->sendResponse($data, '');
    }

    public function termsConditions(Request $request)
    {
        $page = $this->getSeoPage('terms-conditions', $request->locale);
        $content = $this->getContentPage('terms-conditions');
        $data = array(
            "page" => $page,
            "content" => $content
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

    public function testimonials(Request $request)
    {
        $page = $this->getSeoPage('testimonials', $request->locale);
        $testimonials = $this->paginateTestimonials($request);
        $content = $this->getContentPage('testimonials');
        $data = array(
            "page" => $page,
            "testimonials" => $testimonials,
            "content" => $content
        );
        return $this->sendResponse($data, '');
    }
    
}
