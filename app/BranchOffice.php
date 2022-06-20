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
        'products' => 'array',
    ];

    public function ubigeoRel()
    {
        return $this->hasOne('App\Ubigeo', 'code_ubigeo', 'code_ubigeo');
    }
}
