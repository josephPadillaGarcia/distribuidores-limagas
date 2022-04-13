<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Faq extends Model
{
    protected $table = 'faqs';
    protected $casts = [
        'active' => 'boolean'
    ];
    protected $guarded = [];
    protected $appends = ['seen'];

    public function getSeenAttribute() {
        return false;
    }
}
