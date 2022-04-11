<?php

use Illuminate\Database\Seeder;

class MasterModules2TableSeeder extends Seeder
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
                'name' 	=> 'Encuestas',
                'slug' 		=> 'encuestas',
                'parent' 	=> NULL,
                'icon' 		=> 'survey',
                'index'    => 7
            ]
        ]);
    }
}
