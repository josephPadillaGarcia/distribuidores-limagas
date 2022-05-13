<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class EditorScript extends Model
{
    protected $table = 'editorcodescript';
    protected $guarded = [];
    protected $appends = ['seen'];

    public function getSeenAttribute() {
        return false;
    }
}
