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
                'name' 		=> 'Nosotros',
                'slug_es'     => 'nosotros',
                'title_es'     => 'Quiénes somos',
                'slug_en'     => 'about-us',
                'title_en'     => 'About Us',
                'index' => $position++
            ],

            [
                'name' 		=> 'Blog',
                'slug_es'     => 'blog',
                'title_es'     => 'Blog',
                'slug_en'     => 'blog',
                'title_en'     => 'Blog',
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

        ]);
    }
}
