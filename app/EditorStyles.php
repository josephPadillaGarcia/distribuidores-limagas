<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class EditorStyles extends Model
{
    protected $table = 'editorcodestyle';

    protected $guarded = [];

    public function getSeenAttribute() {
        return false;
    }

}
