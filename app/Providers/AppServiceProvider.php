<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

use Illuminate\Support\Str;
use Auth;
use Carbon\Carbon;
use App\Module;
use App\Service;
use App\SocialNetwork;
use App\Information;
use Illuminate\Support\Facades\App;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //Carbon::setLocale(config('app.locale'));
        view()->composer('admin.layouts.dashboard',function($view){
            $menu = [];
            $modules = Module::where('name','!=','Blog')->get();
            //$modules = Module::get();
            foreach( $modules as $i => $module){
                if(!$module->parent){  
                    $menu[$i]["id"] = $module->id;
                    $menu[$i]["name"] = $module->name;
                    if($module->name == 'Ventas y Estad.'){
                        $menu[$i]["variable"] = 'ventas-estadisticas';
                    }
                    else{
                        $menu[$i]["variable"] = Str::slug($module->name, '-');
                    }
                    $menu[$i]["icon"] = $module->icon;
                    $menu[$i]["slug"] = $module->slug;
                }
            }
            foreach( Module::get() as $j => $module){
                foreach($menu as $k => $item){
                    if($item["id"] == $module->parent){
                        //$menu[$k]["clase"] = "dropdown";
                        $menu[$k]["menu_secondary"][$j]["name"] = $module->name;     
                        $menu[$k]["menu_secondary"][$j]["slug"] = $module->slug;    
                        $menu[$k]["menu_secondary"][$j]["icon"] = $module->icon;    
                    }
                }
            }
            $view->with(compact("menu"));
        });

        view()->composer('web.layouts.menu',function($view){
            $social_networks = SocialNetwork::select('id','url','master_social_network_id')->with('master_social_networks:id,icon,name')->orderBy('index','asc')->get();  
            $information = Information::first();
            $services = Service::where('active', 1)->orderBy('index')->get();

            $menu = array(
                "social_networks" => $social_networks,
                "information" => $information,
                "services" => $services,
                "locale" => App::getLocale(),
                "routeLocale" => App::getLocale() === "es" ? "" : App::getLocale()
            );

            $view->with(compact("menu"));
        });

        view()->composer('web.layouts.footer',function($view){
            $social_networks = SocialNetwork::select('id','url','master_social_network_id')->with('master_social_networks:id,icon,name')->orderBy('index','asc')->get();  
            $information = Information::first();

            $footer = array(
                "social_networks" => $social_networks,
                "information" => $information,
                "locale" => App::getLocale(),
                "routeLocale" => App::getLocale() === "es" ? "" : App::getLocale()
            );

            $view->with(compact("footer"));
        });
    }
}
