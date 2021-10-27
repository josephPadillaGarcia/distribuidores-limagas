<?php

Route::get('/', 'Cms\Auth\LoginController@showLoginForm')->name('login');
Route::post('login', 'Cms\Auth\LoginController@login')->name('login.post');
Route::post('logout', 'Cms\Auth\LoginController@logout')->name('logout');
Route::post('login/email', 'Cms\Auth\ForgotPasswordController@sendResetLinkEmail')->name('password.email');
Route::get('login/restablecer/{token}', 'Cms\Auth\ResetPasswordController@showResetForm')->name('password.reset');
Route::post('login/reset', 'Cms\Auth\ResetPasswordController@reset')->name('password.update');

Route::middleware(['auth'])->namespace('Cms')->name('cms.')->group(function () {
    Route::get('/dashboard', 'DashboardController@index')->name('dashboard');
    Route::get('json/dashboard', 'DashboardController@getStatistics')->name('dashboard.get-statistics');
    Route::get('json/dashboard-by-date', 'DashboardController@getStatisticsByDate')->name('dashboard.get-statistics-by-date');

    Route::get('perfil', 'ProfileController@index')->name('profile');
    Route::get('json/profile', 'ProfileController@getProfile')->name('profile.json.get-profile');
    Route::put('profile', 'ProfileController@updateProfile')->name('profile.update-profile');
    Route::put('change-password', 'ProfileController@updatePassword')->name('profile.update-contrasena');

    Route::namespace('Configuration')->prefix('configuracion')->name('configuration.')->group(function () {
        Route::name('users.')->prefix('usuarios')->group(function () {
            Route::get('/', 'UsersController@index')->name('index');
            Route::post('/', 'UsersController@store')->name('store');
            Route::put('/{user}', 'UsersController@update')->name('update');
            Route::delete('/{user}', 'UsersController@destroy')->name('destroy');
            Route::get('/json/get-all', 'UsersController@getAll')->name('get-all');
            Route::get('/json/get/{user}', 'UsersController@get')->name('get');
        });
        Route::name('general.')->prefix('general')->group(function () {
            Route::get('/', 'GeneralController@index')->name('index');

            Route::namespace('General')->name('config-quantity-package.')->prefix('config-quantity-package')->group(function () {
                Route::get('/', 'ConfigQuantityPackageController@getAll')->name('getAll');

                Route::post('/', 'ConfigQuantityPackageController@store')->name('store');
                Route::put('/order', 'ConfigQuantityPackageController@order')->name('order');
                Route::delete('/{element}', 'ConfigQuantityPackageController@destroy')->name('destroy');
                Route::put('/{element}', 'ConfigQuantityPackageController@update')->name('update');
                Route::get('/json/get/{element}', 'ConfigQuantityPackageController@get')->name('get');
            });
        });
    });

    Route::prefix('servicios')->name('services.')->group(function () {
        Route::get('/', 'ServicesController@index')->name('index');
        Route::get('/nuevo', 'ServicesController@create')->name('create');
        Route::get('/editar/{element}', 'ServicesController@edit')->name('edit');
        Route::put('/order', 'ServicesController@order')->name('order');
        Route::post('/', 'ServicesController@store')->name('store');
        Route::get('/{element}', 'ServicesController@read')->name('read');
        Route::put('/{element}', 'ServicesController@update')->name('update');
        Route::delete('/{element}', 'ServicesController@destroy')->name('destroy');
        Route::get('/json/get-all', 'ServicesController@getAll')->name('get-all');
        Route::get('/json/get/{element}', 'ServicesController@get')->name('get');
    });

    #Customers
    Route::namespace('Customers')->prefix('clientes')->name('customers.')->group(function () {
        Route::get('/', 'IndexController@index')->name('index');
        Route::post('/', 'IndexController@store')->name('store');
        Route::put('/order', 'IndexController@order')->name('order');
        Route::put('/{element}', 'IndexController@update')->name('update');
        Route::delete('/{element}', 'IndexController@destroy')->name('destroy');
        Route::get('/json/get-all', 'IndexController@getAll')->name('get-all');
        Route::get('/json/get/{element}', 'IndexController@get')->name('get');
    });

    Route::namespace('Content')->prefix('contenido')->name('content.')->group(function () {
        Route::name('general-content.')->prefix('contenido-general')->group(function () {
            Route::get('/', 'GeneralContentController@index')->name('index');
            Route::put('/', 'GeneralContentController@updateSection')->name('update-section');
            Route::get('/json/get-all', 'GeneralContentController@getAllPages')->name('get-all');
            Route::get('/json/get/{page}', 'GeneralContentController@getPageSections')->name('get');
            Route::get('/json/get/section/{section}', 'GeneralContentController@getPageSectionFields')->name('get-page-sections-fields');
            Route::post('/image', 'GeneralContentController@storeImage')->name('store-image');
        });

        #Social Networks
        Route::name('social-networks.')->prefix('redes-sociales')->group(function () {
            Route::get('/', 'SocialController@index')->name('index');
            Route::post('/', 'SocialController@store')->name('store');
            Route::put('/order', 'SocialController@order')->name('order');
            Route::delete('/{element}', 'SocialController@destroy')->name('destroy');
            Route::put('/{element}', 'SocialController@update')->name('update');
            Route::get('/json/get-all', 'SocialController@getAll')->name('get-all');
            Route::get('/json/get/{element}', 'SocialController@get')->name('get');
        });

        Route::name('general-information.')->prefix('informacion-general')->group(function () {
            #General Information
            Route::get('/', 'GeneralInformationController@index')->name('index');
            Route::post('/', 'GeneralInformationController@store')->name('store');
            Route::get('/json/get', 'GeneralInformationController@get')->name('get');
        });

        #SEO
        Route::name('seo.')->prefix('seo')->group(function () {
            Route::get('/', 'SeoController@index')->name('index');
            Route::get('/json/get-all', 'SeoController@getAll')->name('get-all');
            Route::put('/{page}', 'SeoController@update')->name('update');
        });

        Route::prefix('testimoniales')->name('testimonials.')->group(function () {
            Route::get('/', 'TestimonialsController@index')->name('index');
            Route::post('/', 'TestimonialsController@store')->name('store');
            Route::put('/order', 'TestimonialsController@order')->name('order');
            Route::put('/{element}', 'TestimonialsController@update')->name('update');
            Route::delete('/{element}', 'TestimonialsController@destroy')->name('destroy');
            Route::get('/json/get-all', 'TestimonialsController@getAll')->name('get-all');
            Route::get('/json/get/{element}', 'TestimonialsController@get')->name('get');
        });

        #Slider
        /*Route::prefix('slider')->name('slider.')->group(function () {
            Route::get('/', 'SliderController@index')->name('index');
            Route::get('/nuevo', 'SliderController@create')->name('create');
            Route::get('/editar/{element}', 'SliderController@edit')->name('edit');
            Route::put('/order', 'SliderController@order')->name('order');
            Route::post('/', 'SliderController@store')->name('store');
            Route::put('/{element}', 'SliderController@update')->name('update');
            Route::delete('/{element}', 'SliderController@destroy')->name('destroy');
            Route::get('/json/get-all', 'SliderController@getAll')->name('get-all');
            Route::get('/json/get/{element}', 'SliderController@get')->name('get');
        });*/

    });

    /*Route::namespace('Blog')->prefix('blog')->name('blog.')->group(function () {
        Route::name('category.')->prefix('categorias')->group(function () {
            Route::get('/', 'CategoriesController@index')->name('index');
            Route::post('/', 'CategoriesController@store')->name('store');
            Route::put('/{element}', 'CategoriesController@update')->name('update');
            Route::delete('/{element}', 'CategoriesController@destroy')->name('destroy');
            Route::get('/json/get-all', 'CategoriesController@getAll')->name('get-all');
            Route::get('/json/get/{element}', 'CategoriesController@get')->name('get');
        });

        Route::name('posts.')->prefix('posts')->group(function () {
            Route::get('/', 'PostsController@index')->name('index');
            Route::get('/nuevo', 'PostsController@create')->name('create');
            Route::get('/editar/{element}', 'PostsController@edit')->name('edit');
            Route::post('/', 'PostsController@store')->name('store');
            Route::put('/{element}', 'PostsController@update')->name('update');
            Route::delete('/{element}', 'PostsController@destroy')->name('destroy');
            Route::get('/json/get-all', 'PostsController@getAll')->name('get-all');
            Route::get('/json/get/{element}', 'PostsController@get')->name('get');
            Route::post('/posts/image', 'PostsController@storeImage')->name('store-image');
        });
    });*/

    Route::namespace('Leads')->prefix('leads')->name('leads.')->group(function () {
            Route::get('/', 'LeadTraditionalController@index')->name('index');
            Route::get('/json/get-all', 'LeadTraditionalController@getAll')->name('get-all');
            Route::delete('/{element}', 'LeadTraditionalController@destroy')->name('destroy');
            Route::get('/json/get/{element}', 'LeadTraditionalController@get')->name('get');
            Route::put('/', 'LeadTraditionalController@update')->name('update');
            Route::get('/get-email-destination', 'LeadTraditionalController@getEmailDestination')->name('get-email-destination');
            Route::get('/all-export', 'LeadTraditionalController@allExport')->name('all-export');
            Route::post('/filter-export', 'LeadTraditionalController@filterExport')->name('filter-export');
    });

    Route::prefix('tutoriales')->name('tutorials.')->group(function () {
        Route::get('/', 'TutorialsController@index')->name('index');
        Route::post('/', 'TutorialsController@store')->name('store');
        Route::put('/order', 'TutorialsController@order')->name('order');
        Route::put('/{element}', 'TutorialsController@update')->name('update');
        Route::delete('/{element}', 'TutorialsController@destroy')->name('destroy');
        Route::get('/json/get-all', 'TutorialsController@getAll')->name('get-all');
        Route::get('/json/get/{element}', 'TutorialsController@get')->name('get');
    });

    Route::name('app-tracking.')->prefix('app-rastreo')->group(function () {
        Route::get('/', 'AppTrackingController@index')->name('index');
        Route::post('/', 'AppTrackingController@store')->name('store');
        Route::get('/json/get', 'AppTrackingController@get')->name('get');
    });

    #Misc
    Route::get('files/{folder}/{subfolder}/{file}', 'CmsController@getFile')->name('get-file');
    Route::get('json/get-departments', 'CmsController@getDepartmentsParent')->name('json.get-departments');
    Route::get('json/get-provinces', 'CmsController@getProvincesParent')->name('json.get-provinces');
    Route::get('json/get-districts', 'CmsController@getDistrictsParent')->name('json.get-districts');
    Route::get('json/select/categories', 'CmsController@getCategories')->name('json.get-categories');
});
