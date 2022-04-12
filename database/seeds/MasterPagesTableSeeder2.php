<?php

use App\MasterPage;
use App\MasterSection;
use Illuminate\Database\Seeder;

class MasterPagesTableSeeder2 extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('master_pages')->where('name', 'Blog')
        ->update(['name' 		=> 'Noticias',
            'slug_es'     => 'noticias',
            'title_es'     => 'Noticias',
            'slug_en'     => 'news',
            'title_en'     => 'News',]
        );

        DB::table('master_modules')->where('name', 'Blog')
        ->update(['name' 		=> 'Noticias']);

        DB::table('master_modules')->where('name', 'Posts')
        ->update(['parent' 		=> 12]);

        DB::table('master_modules')->where('name', 'Categorías')
        ->update(['parent' 		=> 12]);

        
        DB::table('master_sections')->insert([
            #Noticias
            [
                'name' 		=> 'Banner',
                'master_page_id'     => MasterPage::where('name','Noticias')->first()->id,
            ],
        ]);
        
        DB::table('master_fields')->insert([
            [
                'name' 		            => 'Fondo',
                'variable'              => 'image',
                'type'                  => 'image',
                'master_section_id'     => MasterSection::where('name','Banner')->where('master_page_id',MasterPage::where('name','Noticias')->first()->id)->first()->id
            ],
            [
                'name' 		            => 'Título',
                'variable' 		        => 'title',
                'type'                  => 'input',
                'master_section_id'     => MasterSection::where('name','Banner')->where('master_page_id',MasterPage::where('name','Noticias')->first()->id)->first()->id
            ],
        ]);
    }
}
