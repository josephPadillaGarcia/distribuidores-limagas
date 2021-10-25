<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            [
                'name' => 'Anthony Tucto',
                'email' => 'anthony@playgroup.pe',
                'password' => bcrypt('Qwerty123'),
            ],
        ]);
    }
}
