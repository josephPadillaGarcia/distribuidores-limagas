<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class EditorScript extends Model
{
    protected $table = 'editorcodescript';
    protected $guarded = [];

    public function getSeenAttribute() {
        return false;
    }
}
