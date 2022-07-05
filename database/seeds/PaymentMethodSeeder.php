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
                'method' => 'Efectivo',
                'img_method' => 'efectivo.png',
            ],
            [
                'method' => 'Visa',
                'img_method' => 'visa.png',
            ],
            [
                'method' => 'MasterCard',
                'img_method' => 'mastercard.png',
            ],
            [
                'method' => 'AmericanExpress',
                'img_method' => 'americanexpress.png',
            ],
            [
                'method' => 'Diners Club International',
                'img_method' => 'dinnersclub.png',
            ],

        ]);
    }
}
