<?php

use Illuminate\Database\Seeder;

class MasterPagesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $position = 0;
        DB::table('master_pages')->insert([
            [
                'name' 		=> 'Home',
                'slug_es'     => NULL,
                'slug_en'     => NULL,
                'title_es'     => 'Dinet e-Commerce',
                'title_en'     => 'Dinet e-Commerce',
                'index' => $position++
            ],

            [
                'name' 		=> 'Sobre Dinet',
                'slug_es'     => 'sobre-dinet',
                'title_es'     => 'Sobre Dinet',
                'slug_en'     => 'about-dinet',
                'title_en'     => 'About Dinet',
                'index' => $position++
            ],

            [
                'name' 		=> 'Servicios',
                'slug_es'     => 'servicios',
                'title_es'     => 'Servicios',
                'slug_en'     => 'services',
                'title_en'     => 'Services',
                'index' => $position++
            ],

            [
                'name' 		=> 'Noticias',
                'slug_es'     => 'noticias',
                'title_es'     => 'Noticias',
                'slug_en'     => 'news',
                'title_en'     => 'News',
                'index' => $position++
            ],

            [
                'name' 		=> 'Cotizaciones',
                'slug_es'     => 'cotizaciones',
                'title_es'     => 'Cotizaciones',
                'slug_en'     => 'quotes',
                'title_en'     => 'Quotes',
                'index' => $position++
            ],

            [
                'name' 		=> 'Trabaja con nosotros',
                'slug_es'     => 'trabaja-con-nosotros',
                'title_es'     => 'Trabaja con nosotros',
                'slug_en'     => 'work-with-us',
                'title_en'     => 'Work with us',
                'index' => $position++
            ],

            [
                'name' 		=> 'Preguntas Frecuentes',
                'slug_es'     => 'preguntas-frecuentes',
                'title_es'     => 'Preguntas Frecuentes',
                'slug_en'     => 'faq',
                'title_en'     => 'FAQ',
                'index' => $position++
            ],

            [
                'name' 		=> 'Políticas de Privacidad',
                'slug_es'     => 'politicas-privacidad',
                'title_es'     => 'Políticas de Privacidad',
                'slug_en'     => 'privacy-policies',
                'title_en'     => 'Privacy Policies',
                'index' => $position++
            ],

        ]);
    }
}
