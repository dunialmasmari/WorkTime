<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MajorModel extends Model
{
    protected $table = "majors";

    protected $fillable = [
       
        'major_name',
        'type',
        'active',
        'created_at',
        'updated_at',
    ];
}
						