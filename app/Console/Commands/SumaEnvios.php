<?php

namespace App\Console\Commands;

use App\Content;
use Illuminate\Console\Command;

class SumaEnvios extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'envios:sumar';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Aumentar en 2 unidades los envios realizados en la Web';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $information = Content::where('field','count_1')->first();
        if($information){
            $information->value_es = $information->value_es + 2;
            $information->save();
        }
    }
}
