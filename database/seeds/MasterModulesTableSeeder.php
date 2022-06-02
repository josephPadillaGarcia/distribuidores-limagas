<?php

use Illuminate\Database\Seeder;

class MasterModulesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $pContenido = 6;
        $pConfiguracion = 17;
        $pBlog = 13;
        $position = 1;
        DB::table('master_modules')->insert([
            
            [
                'name' 	=> 'Distribuidores',
                'slug' 		=> 'distribuidores',
                'parent' 	=> NULL,
                'icon' 		=> 'store-3',
                'index'    => $position++
            ],
            
            [
                'name' 	=> 'Productos',
                'slug' 		=> 'productos',
                'parent' 	=> NULL,
                'icon' 		=> 'blaze',
                'index'    => $position++
            ]

        ]); 
    }
}
