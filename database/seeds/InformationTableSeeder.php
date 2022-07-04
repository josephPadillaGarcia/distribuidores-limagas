<?php

use Illuminate\Database\Seeder;

class InformationTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('information')->insert([
            [
                'facebook_link' => 'https://www.facebook.com/',
                'instagram_link' => 'https://www.instagram.com/',
                'youtube_link' => 'https://www.youtube.com/',
                'linkedin_link' => 'https://pe.linkedin.com/'
            ],
        ]);
    }
}
