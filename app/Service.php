<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    protected $table = 'services';
    protected $guarded = [];
    protected $appends = ['seen','id_video'];
    protected $casts = [
        'active' => 'boolean'
    ];

    public function getSeenAttribute()
    {
        return false;
    }

    public function getIdVideoAttribute()
    {
        if ($this->url_video) {
            if(strpos($this->url_video, "?v=") !== false){
                $id = explode("?v=", $this->url_video);
                return $id[1];
            } else{
                $parsed = parse_url($this->url_video);
                $path = $parsed['path'];
                $path_parts = explode('/', $path);
                $desired_output = $path_parts[1];
                return $desired_output;
            }
        }
    }
}
