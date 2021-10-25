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
        $pContenido = 4;
        $pConfiguracion = 13;
        $pBlog = 9;
        $position = 1;
        DB::table('master_modules')->insert([
            [
                'name' 	=> 'Dashboard',
				'slug' 		=> 'dashboard',
				'parent' 	=> NULL,
				'icon' 		=> 'line-chart',
                'index'    => $position++
            ],

            [
                'name' 	=> 'Servicios',
                'slug' 		=> 'servicios',
                'parent' 	=> NULL,
                'icon' 		=> 'truck',
                'index'    => $position++
            ],

            [
                'name' 	=> 'Clientes',
                'slug' 		=> 'clientes',
                'parent' 	=> NULL,
                'icon' 		=> 'service',
                'index'    => $position++
            ],
            
            [
                'name' 	=> 'Contenido',
				'slug' 		=> NULL,
				'parent' 	=> NULL,
				'icon' 		=> 'computer',
                'index'    => $position++
            ],
                [
                    'name' 	=> 'SEO',
                    'slug' 		=> 'contenido/seo',
                    'parent' 	=> $pContenido,
                    'icon' 		=> NULL,
                    'index'    => 1
                ],

                [
                    'name' 	=> 'Inf. General',
                    'slug' 		=> 'contenido/informacion-general',
                    'parent' 	=> $pContenido,
                    'icon' 		=> NULL,
                    'index'    => 2
                ],
                
                [
                    'name' 	=> 'Contenido General',
                    'slug' 		=> 'contenido/contenido-general',
                    'parent' 	=> $pContenido,
                    'icon' 		=> NULL,
                    'index'    => 3
                ],

                [
                    'name' 	=> 'Testimoniales',
                    'slug' 		=> 'contenido/testimoniales',
                    'parent' 	=> $pContenido,
                    'icon' 		=> NULL,
                    'index'    => 4
                ],
                
                [
                    'name' 	=> 'Redes Sociales',
                    'slug' 		=> 'contenido/redes-sociales',
                    'parent' 	=> $pContenido,
                    'icon' 		=> NULL,
                    'index'    => 5
                ],

            [
                'name' 	=> 'Blog',
				'slug' 		=> NULL,
				'parent' 	=> NULL,
				'icon' 		=> 'article',
                'index'    => $position++
            ],
                [
                    'name' 	=> 'Posts',
                    'slug' 		=> 'blog/posts',
                    'parent' 	=> $pBlog,
                    'icon' 		=> NULL,
                    'index'    => 1
                ],
                [
                    'name' 	=> 'Categorías',
                    'slug' 		=> 'blog/categorias',
                    'parent' 	=> $pBlog,
                    'icon' 		=> NULL,
                    'index'    => 2
                ],

                [
                    'name' 	=> 'Leads',
                    'slug' 		=> 'leads',
                    'parent' 	=> NULL,
                    'icon' 		=> 'database',
                    'index'    => $position++
                ],
                    

            [
                'name' 	=> 'Configuración',
				'slug' 		=> NULL,
				'parent' 	=> NULL,
				'icon' 		=> 'settings-5',
                'index'    => $position++
            ],
                [
                    'name' 	    => 'Configuración General',
                    'slug' 		=> 'configuracion/general',
                    'parent' 	=> $pConfiguracion,
                    'icon' 		=> NULL,
                    'index'     => 1
                ],
                [
                    'name' 	=> 'Usuarios',
                    'slug' 		=> 'configuracion/usuarios',
                    'parent' 	=> $pConfiguracion,
                    'icon' 		=> NULL,
                    'index'    => 2
                ],
        ]); 
    }
}
