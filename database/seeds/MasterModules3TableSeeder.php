<?php

use Illuminate\Database\Seeder;

class MasterModules3TableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('master_modules')->insert([
                [
                    'name' 	=> 'Faqs',
                    'slug' 		=> 'faqs',
                    'parent' 	=> NULL,
                    'icon' 		=> 'questionnaire',
                    'index'    => 6
                ],
        ]);

    }
}
