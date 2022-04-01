<?php

use Illuminate\Database\Seeder;

class PostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('posts')->insert([

            [
                'title_es' => 'Prueba de Post de Noticias - Dinet',
                'title_en' => 'Prueba de Post de Noticias (EN) - Dinet',
                'slug_es' => 'Prueba-de-Post-de-Noticias-Dinet',
                'slug_es' => 'Prueba-de-Post-de-Noticias-EN-Dinet',
                'excerpt_es' => 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                'excerpt_en' => 'EN-Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                'content_es' => 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
                'content_en' => 'EN-Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
                'image' => 'img_prueba.png',
                'thumbnail' => 'img_thum.png',
,            ],

        ]);
    }
}
