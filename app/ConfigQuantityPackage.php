<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ConfigQuantityPackage extends Model
{
    protected $table = 'config_quantity_packages';
    protected $casts = [
        'active' => 'boolean'
    ];
    protected $guarded = [];
}
