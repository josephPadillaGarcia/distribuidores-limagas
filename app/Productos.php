<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Productos extends Model
{
    protected $table = 'productos';
    protected $casts = [
        'active' => 'boolean'
    ];
    protected $guarded = [];


    // Relacion muchos a muchos

    public function branchoffices(){
        return $this->belongsToMany('App\BranchOffice');
    }
}
