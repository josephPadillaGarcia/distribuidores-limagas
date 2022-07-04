<?php

use Illuminate\Database\Seeder;

class PaymentMethodSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('payment_methods')->insert([

            [
                'method' => 'Efectivo'
            ],
            [
                'method' => 'Visa'
            ],
            [
                'method' => 'MasterCard'
            ],
            [
                'method' => 'AmericanExpress'
            ],
            [
                'method' => 'Diners Club International'
            ],

        ]);
    }
}
