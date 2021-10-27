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

    protected $appends = ['whatsapp_number_formatted','contact_number_format'];

    public function getWhatsappNumberFormattedAttribute(){
        if($this->whatsapp_number){
            return substr($this->whatsapp_number,0,3).'-'.substr($this->whatsapp_number,3,3).'-'.substr($this->whatsapp_number,6,3);
        }
    }

    public function getContactNumberFormatAttribute(){
        if($this->contact_number){
            return substr($this->contact_number,0,3).'-'.substr($this->contact_number,3,3).'-'.substr($this->contact_number,6,3);
        }
    }
    
}

