<?php

use Illuminate\Database\Seeder;

class PuestosSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('puestos')->insert([

            [
                'name_job' => 'Desarrollador',
            ],
            [
                'name_job' => 'Motorizado',
            ],
            [
                'name_job' => 'Operador Logistico',
            ],
            [
                'name_job' => 'Secretaria',
            ],
            [
                'name_job' => 'Limpieza',
            ],

        ]);
    }
}
