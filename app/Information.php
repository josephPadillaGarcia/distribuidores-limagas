<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Ubigeo;

class Information extends Model
{
    protected $table = 'information';
    protected $guarded = [];
    protected $casts = [
    ];

    protected $appends = ['whatsapp_number_formatted'];

    public function getWhatsappNumberFormattedAttribute(){
        if($this->whatsapp_number){
            return substr($this->whatsapp_number,0,3).'-'.substr($this->whatsapp_number,3,3).'-'.substr($this->whatsapp_number,6,3);
        }
    }
    
}

