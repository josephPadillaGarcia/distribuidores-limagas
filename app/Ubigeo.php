<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Ubigeo extends Model
{
    protected $table = 'master_ubigeo';

    public function branchOfficeRel()
    {
        return $this->belongsTo('App\BranchOffice', 'code_ubigeo', 'code_ubigeo');
    }
}
