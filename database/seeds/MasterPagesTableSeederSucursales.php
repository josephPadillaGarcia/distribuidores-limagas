<?php

use App\MasterPage;
use App\MasterSection;
use Illuminate\Database\Seeder;

class MasterPagesTableSeederSucursales extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('master_pages')->insert([
            [
                'name' 		=> 'Sucursales',
                'slug_es'     => 'sucursales',
                'slug_en'     => 'branch-offices',
                'title_es'     => 'Sucursales',
                'title_en'     => 'Branch offices',
                'index' => 5
            ],
        ]);

        DB::table('master_sections')->insert([
            #Noticias
            [
                'name' 		=> 'Banner',
                'master_page_id'     => MasterPage::where('name','Sucursales')->first()->id,
            ],
        ]);
        
        DB::table('master_fields')->insert([
            [
                'name' 		            => 'Fondo',
                'variable'              => 'image',
                'type'                  => 'image',
                'master_section_id'     => MasterSection::where('name','Banner')->where('master_page_id',MasterPage::where('name','Sucursales')->first()->id)->first()->id
            ],
            [
                'name' 		            => 'Título',
                'variable' 		        => 'title',
                'type'                  => 'input',
                'master_section_id'     => MasterSection::where('name','Banner')->where('master_page_id',MasterPage::where('name','Sucursales')->first()->id)->first()->id
            ],
        ]);
    }
}
