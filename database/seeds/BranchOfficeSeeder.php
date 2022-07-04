<?php

use Illuminate\Database\Seeder;

class BranchOfficeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('branch_offices')->insert([

            [
                'name' => 'prueba',
                'iframe' => '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62450.24862285709!2d-77.10897705033473!3d-11.964770111485198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105ce21b6748c45%3A0xece5fa25a5e8c4d5!2sLos%20Olivos!5e0!3m2!1ses-419!2spe!4v1654754294224!5m2!1ses-419!2spe" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
                'direction' => 'los olivos',
                'show' => 1,
                "code_ubigeo" => '050801',
                'phone_numbers' => '[{"number":"12345678"}, {"number":"32165487"}]',
                'emails' => '[{"name":"nuevo@gmail.com"}, {"name":"prueva@gmail.com"}]',
                'index' => 2,
                'products' => '[{"id": 1, "name": "gas limagas", "precio": "15", "image": "t-165682527562c125bb79525.png", "active": true, "index": 1, "created_at": "2022-07-03 00:14:35", "updated_at": "2022-07-03 00:14:35"}]',
            ],

        ]);
    }
}
