<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Testimonial extends Model
{
    protected $table = 'testimonials';
    protected $casts = [
        'active' => 'boolean'
    ];
    protected $guarded = [];
}
