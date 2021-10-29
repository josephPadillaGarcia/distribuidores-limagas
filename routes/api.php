<?php
use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/*Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});*/

Route::namespace('Api')->group(function() { 
    Route::get('layout', 'BaseController@layout');

    Route::get('sitemap-blog', 'BaseController@sitemapBlog');
    Route::get('sitemap-projects', 'BaseController@sitemapProjects');

    Route::prefix('paginate')->group(function() { 
        Route::get('projects', 'BaseController@paginateProjects');
        Route::get('blog', 'BaseController@paginateBlog');
        Route::get('testimonials', 'BaseController@paginateTestimonials');
        Route::get('departments', 'Reserve\IndexController@paginateDepartments');
    });
    Route::prefix('post')->group(function() { 
        Route::prefix('lead')->group(function() { 
            Route::post('traditional', 'PostController@traditional');
        });
    });
    Route::prefix('page')->group(function() { 
        Route::get('home', 'PageController@home');
        Route::get('about', 'PageController@about');
        Route::get('services', 'PageController@services');


        Route::get('blog', 'PageController@blog');
        Route::get('blog/category/{slug}', 'PageController@blogCategory');
        Route::get('blog/category/{slug}/{post}', 'PageController@blogCategoryPost');
        Route::get('online-appointment', 'PageController@onlineAppointment');
        Route::get('contact-us', 'PageController@contactUs');
        Route::get('about-us', 'PageController@aboutUs');
        Route::get('testimonials', 'PageController@testimonials');
        Route::get('privacy-policies', 'PageController@privacityPolicy');
        Route::get('terms-conditions', 'PageController@termsConditions');
    });
});


