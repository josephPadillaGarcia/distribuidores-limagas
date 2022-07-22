<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class BranchOffice extends Model
{
    protected $table = 'branch_offices';
    protected $guarded = [];

    protected $casts = [
        'emails' => 'array',
        'phone_numbers' => 'array',
        'num_what' => 'array',
        'products' => 'array',
        'payment_methods' => 'array',
    ];

    public function ubigeoRel()
    {
        return $this->hasOne('App\Ubigeo', 'code_ubigeo', 'code_ubigeo');
    }


    // Relacion muchos a muchos

    public function productos(){
        return $this->belongsToMany('App\Productos', 'branchoffice_products', 'branchoffice_id', 'producto_id');
    }
}
