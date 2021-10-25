<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

use Illuminate\Support\Str;
use Auth;
use Carbon\Carbon;
use App\Module;

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
        view()->composer('layouts.dashboard',function($view){
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
    }
}
