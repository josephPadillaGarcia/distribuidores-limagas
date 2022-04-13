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

Route::namespace('Api')->name('api.')->group(function() { 
    Route::prefix('post')->name('post.')->group(function() { 
        Route::post('lead', 'PostController@lead');        
        Route::post('captchaverify', 'PostController@captchaverify');
        Route::put('/update-like/{like}', 'PostController@updateLike')->name('update-like');
        Route::put('/update-dislike/{like}', 'PostController@updateDislike')->name('update-dislike');
    });
});
