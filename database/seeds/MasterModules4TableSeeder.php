<?php

use Illuminate\Database\Seeder;

class MasterModules4TableSeeder extends Seeder
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
                'name' 	=> 'Sucursales',
                'slug' 		=> 'sucursales',
                'parent' 	=> NULL,
                'icon' 		=> 'store-3',
                'index'    => 7
            ]
        ]);
    }
}
