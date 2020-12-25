<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TenderModel extends Model
{
    //
    protected $table="tenders";
    public $timestamps = false;
    protected $filtable=[
        "tender_id",
        'user_id',
        'major_id',
        'title',
        'image',
        'company',
        'description',
        'apply_link',
        'start_date',
        'deadline',
        'posted_date',
        'active',
        'created_at',
        'updated_at',
    ];
}
