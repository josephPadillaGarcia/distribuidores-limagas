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
    Route::prefix('post')->group(function() { 
        Route::post('lead', 'PostController@lead');
    });
    Route::prefix('page')->group(function() { 
        Route::get('home', 'PageController@home');
        Route::get('about', 'PageController@about');
        Route::get('services', 'PageController@services');
        Route::get('services/{slug}', 'PageController@servicesRead');
        Route::get('quotes', 'PageController@quotes');
        Route::get('privacy-policies', 'PageController@privacityPolicy');
    });
});


