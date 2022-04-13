<?php

use App\MasterPage;
use App\MasterSection;
use Illuminate\Database\Seeder;

class MasterPagesFaqSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('master_sections')->insert([
            #Noticias
            [
                'name' 		=> 'Banner',
                'master_page_id'     => MasterPage::where('name','Preguntas Frecuentes')->first()->id,
            ],
        ]);
        
        DB::table('master_fields')->insert([
            [
                'name' 		            => 'Fondo',
                'variable'              => 'image',
                'type'                  => 'image',
                'master_section_id'     => MasterSection::where('name','Banner')->where('master_page_id',MasterPage::where('name','Preguntas Frecuentes')->first()->id)->first()->id
            ],
            [
                'name' 		            => 'Título',
                'variable' 		        => 'title',
                'type'                  => 'input',
                'master_section_id'     => MasterSection::where('name','Banner')->where('master_page_id',MasterPage::where('name','Preguntas Frecuentes')->first()->id)->first()->id
            ],
        ]);
    }
}
