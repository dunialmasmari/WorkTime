<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Job extends Model
{
    public $timestamps = false;
    protected $filtable=[
        "job_id",
        'user_id',
        'major_id',
        'title',
        'company',
        'description',
        'filename',
        'apply_link',
        'start_date',
        'deadline',
        'posted_date',
        'active',
        'created_at',
        'updated_at',
    ];
}
