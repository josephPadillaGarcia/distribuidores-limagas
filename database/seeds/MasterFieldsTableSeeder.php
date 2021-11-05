<?php

use App\MasterPage;
use App\MasterSection;
use Illuminate\Database\Seeder;

class MasterFieldsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('master_fields')->insert([
            #Home 
            //Baner
            [
                'name' 		=> 'Video',
                'variable'     => 'video',
                'type'     => 'video',
                'master_section_id'     => MasterSection::where('name','Banner')->where('master_page_id',MasterPage::where('name','Home')->first()->id)->first()->id
            ],
            [
                'name' 		=> 'Poster',
                'variable'     => 'image',
                'type'     => 'image',
                'master_section_id'     => MasterSection::where('name','Banner')->where('master_page_id',MasterPage::where('name','Home')->first()->id)->first()->id
            ],
            [
                'name' 		            => 'Descripción',
                'variable' 		        => 'description',
                'type'                  => 'editor_small',
                'master_section_id'     => MasterSection::where('name','Banner')->where('master_page_id',MasterPage::where('name','Home')->first()->id)->first()->id
            ],
            //Servicios
            [
                'name' 		            => 'Título',
                'variable' 		        => 'title',
                'type'                  => 'input',
                'master_section_id'     => MasterSection::where('name','Servicios')->where('master_page_id',MasterPage::where('name','Home')->first()->id)->first()->id
            ],
            //Tutoriales
            [
                'name' 		            => 'Subtítulo',
                'variable' 		        => 'subtitle',
                'type'                  => 'input',
                'master_section_id'     => MasterSection::where('name','Tutoriales')->where('master_page_id',MasterPage::where('name','Home')->first()->id)->first()->id
            ],
            [
                'name' 		            => 'Título',
                'variable' 		        => 'title',
                'type'                  => 'input',
                'master_section_id'     => MasterSection::where('name','Tutoriales')->where('master_page_id',MasterPage::where('name','Home')->first()->id)->first()->id
            ],
            [
                'name' 		            => 'URL Más Tutoriales',
                'variable' 		        => 'url_tutos',
                'type'                  => 'input',
                'master_section_id'     => MasterSection::where('name','Tutoriales')->where('master_page_id',MasterPage::where('name','Home')->first()->id)->first()->id
            ],
            //Sumando experiencia en cada servicio
            [
                'name' 		            => 'Título',
                'variable' 		        => 'title',
                'type'                  => 'editor_small',
                'master_section_id'     => MasterSection::where('name','Sumando experiencia en cada servicio')->where('master_page_id',MasterPage::where('name','Home')->first()->id)->first()->id
            ],
            [
                'name' 		            => 'Imagen',
                'variable' 		        => 'image',
                'type'                  => 'image',
                'master_section_id'     => MasterSection::where('name','Sumando experiencia en cada servicio')->where('master_page_id',MasterPage::where('name','Home')->first()->id)->first()->id
            ],

            [
                'name' 		            => 'Icono 1',
                'variable' 		        => 'icon_1',
                'type'                  => 'image',
                'master_section_id'     => MasterSection::where('name','Sumando experiencia en cada servicio')->where('master_page_id',MasterPage::where('name','Home')->first()->id)->first()->id
            ],
            [
                'name' 		            => 'Contador 1',
                'variable' 		        => 'count_1',
                'type'                  => 'input',
                'master_section_id'     => MasterSection::where('name','Sumando experiencia en cada servicio')->where('master_page_id',MasterPage::where('name','Home')->first()->id)->first()->id
            ],
            [
                'name' 		            => 'Característica 1',
                'variable' 		        => 'feature_1',
                'type'                  => 'input',
                'master_section_id'     => MasterSection::where('name','Sumando experiencia en cada servicio')->where('master_page_id',MasterPage::where('name','Home')->first()->id)->first()->id
            ],

            [
                'name' 		            => 'Icono 2',
                'variable' 		        => 'icon_2',
                'type'                  => 'image',
                'master_section_id'     => MasterSection::where('name','Sumando experiencia en cada servicio')->where('master_page_id',MasterPage::where('name','Home')->first()->id)->first()->id
            ],
            [
                'name' 		            => 'Contador 2',
                'variable' 		        => 'count_2',
                'type'                  => 'input',
                'master_section_id'     => MasterSection::where('name','Sumando experiencia en cada servicio')->where('master_page_id',MasterPage::where('name','Home')->first()->id)->first()->id
            ],
            [
                'name' 		            => 'Característica 2',
                'variable' 		        => 'feature_2',
                'type'                  => 'input',
                'master_section_id'     => MasterSection::where('name','Sumando experiencia en cada servicio')->where('master_page_id',MasterPage::where('name','Home')->first()->id)->first()->id
            ],

            [
                'name' 		            => 'Icono 3',
                'variable' 		        => 'icon_3',
                'type'                  => 'image',
                'master_section_id'     => MasterSection::where('name','Sumando experiencia en cada servicio')->where('master_page_id',MasterPage::where('name','Home')->first()->id)->first()->id
            ],
            [
                'name' 		            => 'Contador 3',
                'variable' 		        => 'count_3',
                'type'                  => 'input',
                'master_section_id'     => MasterSection::where('name','Sumando experiencia en cada servicio')->where('master_page_id',MasterPage::where('name','Home')->first()->id)->first()->id
            ],
            [
                'name' 		            => 'Característica 3',
                'variable' 		        => 'feature_3',
                'type'                  => 'input',
                'master_section_id'     => MasterSection::where('name','Sumando experiencia en cada servicio')->where('master_page_id',MasterPage::where('name','Home')->first()->id)->first()->id
            ],
            //Blog
            [
                'name' 		            => 'Título',
                'variable' 		        => 'title',
                'type'                  => 'input',
                'master_section_id'     => MasterSection::where('name','Blog')->where('master_page_id',MasterPage::where('name','Home')->first()->id)->first()->id
            ],

            //Clientes
            [
                'name' 		            => 'Título',
                'variable' 		        => 'title',
                'type'                  => 'input',
                'master_section_id'     => MasterSection::where('name','Nuestros Clientes')->where('master_page_id',MasterPage::where('name','Home')->first()->id)->first()->id
            ],

            //Darkstore
            [
                'name' 		            => 'Texto',
                'variable' 		        => 'text',
                'type'                  => 'editor_large',
                'master_section_id'     => MasterSection::where('name','Contamos con cuatro DARK STORE en lima para atender el e-commerce')->where('master_page_id',MasterPage::where('name','Home')->first()->id)->first()->id
            ],
            [
                'name' 		            => 'Imagen',
                'variable' 		        => 'image',
                'type'                  => 'image',
                'master_section_id'     => MasterSection::where('name','Contamos con cuatro DARK STORE en lima para atender el e-commerce')->where('master_page_id',MasterPage::where('name','Home')->first()->id)->first()->id
            ],

            #Nosotros
            [
                'name' 		            => 'Fondo',
                'variable'              => 'image',
                'type'                  => 'image',
                'master_section_id'     => MasterSection::where('name','Banner')->where('master_page_id',MasterPage::where('name','Sobre Dinet')->first()->id)->first()->id
            ],
            [
                'name' 		            => 'Título',
                'variable' 		        => 'title',
                'type'                  => 'input',
                'master_section_id'     => MasterSection::where('name','Banner')->where('master_page_id',MasterPage::where('name','Sobre Dinet')->first()->id)->first()->id
            ],

            [
                'name' 		            => 'Título',
                'variable' 		        => 'title',
                'type'                  => 'editor_small',
                'master_section_id'     => MasterSection::where('name','Somos el operador logístico del Grupo Sandoval')->where('master_page_id',MasterPage::where('name','Sobre Dinet')->first()->id)->first()->id
            ],
            [
                'name' 		            => 'Descripción',
                'variable' 		        => 'description',
                'type'                  => 'editor_large',
                'master_section_id'     => MasterSection::where('name','Somos el operador logístico del Grupo Sandoval')->where('master_page_id',MasterPage::where('name','Sobre Dinet')->first()->id)->first()->id
            ],
            [
                'name' 		            => 'Imagen',
                'variable' 		        => 'image',
                'type'                  => 'image',
                'master_section_id'     => MasterSection::where('name','Somos el operador logístico del Grupo Sandoval')->where('master_page_id',MasterPage::where('name','Sobre Dinet')->first()->id)->first()->id
            ],

            [
                'name' 		            => 'URL Video Youtube',
                'variable' 		        => 'url_video',
                'type'                  => 'input',
                'master_section_id'     => MasterSection::where('name','Somos el operador logístico del Grupo Sandoval')->where('master_page_id',MasterPage::where('name','Sobre Dinet')->first()->id)->first()->id
            ],
            //Nuestros clientes
            [
                'name' 		            => 'Título',
                'variable' 		        => 'title',
                'type'                  => 'input',
                'master_section_id'     => MasterSection::where('name','Nuestros clientes')->where('master_page_id',MasterPage::where('name','Sobre Dinet')->first()->id)->first()->id
            ],
            [
                'name' 		            => 'Descripción',
                'variable' 		        => 'description',
                'type'                  => 'editor_large',
                'master_section_id'     => MasterSection::where('name','Nuestros clientes')->where('master_page_id',MasterPage::where('name','Sobre Dinet')->first()->id)->first()->id
            ],
            //Testimonios
            [
                'name' 		            => 'Título',
                'variable' 		        => 'title',
                'type'                  => 'input',
                'master_section_id'     => MasterSection::where('name','Testimonios')->where('master_page_id',MasterPage::where('name','Sobre Dinet')->first()->id)->first()->id
            ],

            #Servicios
            [
                'name' 		            => 'Fondo',
                'variable'              => 'image',
                'type'                  => 'image',
                'master_section_id'     => MasterSection::where('name','Banner')->where('master_page_id',MasterPage::where('name','Servicios')->first()->id)->first()->id
            ],
            [
                'name' 		            => 'Título',
                'variable' 		        => 'title',
                'type'                  => 'input',
                'master_section_id'     => MasterSection::where('name','Banner')->where('master_page_id',MasterPage::where('name','Servicios')->first()->id)->first()->id
            ],

            #Cotizaciones
            [
                'name' 		            => 'Fondo',
                'variable'              => 'image',
                'type'                  => 'image',
                'master_section_id'     => MasterSection::where('name','Banner')->where('master_page_id',MasterPage::where('name','Cotizaciones')->first()->id)->first()->id
            ],
            [
                'name' 		            => 'Título',
                'variable' 		        => 'title',
                'type'                  => 'input',
                'master_section_id'     => MasterSection::where('name','Banner')->where('master_page_id',MasterPage::where('name','Cotizaciones')->first()->id)->first()->id
            ],

            [
                'name' 		            => 'Título',
                'variable' 		        => 'title',
                'type'                  => 'input',
                'master_section_id'     => MasterSection::where('name','Información')->where('master_page_id',MasterPage::where('name','Cotizaciones')->first()->id)->first()->id
            ],
            [
                'name' 		            => 'Imagen',
                'variable' 		        => 'image',
                'type'                  => 'image',
                'master_section_id'     => MasterSection::where('name','Información')->where('master_page_id',MasterPage::where('name','Cotizaciones')->first()->id)->first()->id
            ],
            [
                'name' 		            => 'Descripción',
                'variable' 		        => 'description',
                'type'                  => 'editor_large',
                'master_section_id'     => MasterSection::where('name','Información')->where('master_page_id',MasterPage::where('name','Cotizaciones')->first()->id)->first()->id
            ],

            #PPrivacidad

            [
                'name' 		            => 'Fondo',
                'variable'              => 'image',
                'type'                  => 'image',
                'master_section_id'     => MasterSection::where('name','Banner')->where('master_page_id',MasterPage::where('name','Políticas de Privacidad')->first()->id)->first()->id
            ],
            [
                'name' 		            => 'Título',
                'variable' 		        => 'title',
                'type'                  => 'input',
                'master_section_id'     => MasterSection::where('name','Banner')->where('master_page_id',MasterPage::where('name','Políticas de Privacidad')->first()->id)->first()->id
            ],
            [
                'name' 		            => 'Descripción',
                'variable' 		        => 'description',
                'type'                  => 'editor_large',
                'master_section_id'     => MasterSection::where('name','Información')->where('master_page_id',MasterPage::where('name','Políticas de Privacidad')->first()->id)->first()->id
            ],
        ]);
    }
}
