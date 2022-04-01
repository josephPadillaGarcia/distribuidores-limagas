<?php

use Illuminate\Database\Seeder;

class CategoriesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('categories')->insert([

            [
                'name_es' => 'categoria prueba 01',
                'name_en' => 'test category 01',
                'slug_es' => 'categoria01',
                'slug_en' => 'category01',
            ],
            [
                'name_es' => 'categoria prueba 02',
                'name_en' => 'test category 02',
                'slug_es' => 'categoria02',
                'slug_en' => 'category02',
            ],
            [
                'name_es' => 'categoria prueba 03',
                'name_en' => 'test category 03',
                'slug_es' => 'categoria03',
                'slug_en' => 'category03',
            ],

        ]);
    }
}
