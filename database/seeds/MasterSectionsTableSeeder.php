<?php

use App\MasterPage;
use Illuminate\Database\Seeder;

class MasterSectionsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('master_sections')->insert([
            #Home
            [
                'name' 		=> 'Banner',
                'master_page_id'     => MasterPage::where('name','Home')->first()->id,
            ],
            [
                'name' 		=> 'Servicios',
                'master_page_id'     => MasterPage::where('name','Home')->first()->id,
            ],
            [
                'name' 		=> 'Tutoriales',
                'master_page_id'     => MasterPage::where('name','Home')->first()->id,
            ],
            [
                'name' 		=> 'Sumando experiencia en cada servicio',
                'master_page_id'     => MasterPage::where('name','Home')->first()->id,
            ],
            [
                'name' 		=> 'Blog',
                'master_page_id'     => MasterPage::where('name','Home')->first()->id,
            ],
            [
                'name' 		=> 'Nuestros Clientes',
                'master_page_id'     => MasterPage::where('name','Home')->first()->id,
            ],
            [
                'name' 		=> 'Contamos con cuatro DARK STORE en lima para atender el e-commerce',
                'master_page_id'     => MasterPage::where('name','Home')->first()->id,
            ],
            #Nosotros
            [
                'name' 		=> 'Banner',
                'master_page_id'     => MasterPage::where('name','Sobre Dinet')->first()->id,
            ],
            [
                'name' 		=> 'Somos el operador logístico del Grupo Sandoval',
                'master_page_id'     => MasterPage::where('name','Sobre Dinet')->first()->id,
            ],
            [
                'name' 		=> 'Nuestros Clientes',
                'master_page_id'     => MasterPage::where('name','Sobre Dinet')->first()->id,
            ],
            [
                'name' 		=> 'Testimonios',
                'master_page_id'     => MasterPage::where('name','Sobre Dinet')->first()->id,
            ],

            #Servicios
            [
                'name' 		=> 'Banner',
                'master_page_id'     => MasterPage::where('name','Servicios')->first()->id,
            ],

            #Cotizaciones
            [
                'name' 		=> 'Banner',
                'master_page_id'     => MasterPage::where('name','Cotizaciones')->first()->id,
            ],

            [
                'name' 		=> 'Información',
                'master_page_id'     => MasterPage::where('name','Cotizaciones')->first()->id,
            ],

            /*#Blog
             [
                'name' 		=> 'Banner',
                'master_page_id'     => MasterPage::where('name','Blog')->first()->id,
            ],*/

        ]);
    }
}
