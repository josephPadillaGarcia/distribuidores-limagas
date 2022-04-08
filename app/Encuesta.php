<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class Encuesta extends Model
{
    protected $table = 'encuestas';
    protected $guarded = [];
    protected $appends = ["created_at_format"];

    public function getCreatedAtFormatAttribute(  ) {
        return (new Carbon($this->created_at))->format('g:iA d-m-Y');
    }

}
