<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        #Main
        /*$this->call(MasterModulesTableSeeder::class);
        $this->call(UsersTableSeeder::class);
        $this->call(MasterSocialNetworksTableSeeder::class);
        $this->call(MasterUbigeoTableSeeder::class);
        $this->call(MasterDocumentsTypeSeeder::class);
        $this->call(MasterPagesTableSeeder::class);
        $this->call(MasterSectionsTableSeeder::class);
        $this->call(MasterFieldsTableSeeder::class);*/
        #Update 1
        //$this->call(PuestosSeeder::class);
        //$this->call(MasterModules2TableSeeder::class);
        //$this->call(MasterPagesTableSeeder2::class);
        //$this->call(MasterModules3TableSeeder::class);
        //$this->call(MasterPagesFaqSeeder::class);
        #Update 2 
        $this->call(MasterPagesTableSeederSucursales::class);
    }
}
