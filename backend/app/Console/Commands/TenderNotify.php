<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Tender;
use App\Models\userProf;
use Illuminate\Support\Facades\Mail; 
use App\Mail\Notifies\NotifyEmail;

class TenderNotify extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'user:notify_email';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'send notify email for all users if any tender show in home site every day';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $tenders=tender::where('active','1')->where->where('start_date',now())->get();  
        foreach($tenders as $tender)
        {
            //$user=userprof::select('userProfs_email')->get();
            $emails=userprof::pluck('userProfs_email')->toArray();
            foreach($emails as $email)
            {
                $data=[$tender->tender_id,$tender->major_id,$tender->title,$tender->image,$tender->company];
                Mail::To($email)->send(new NotifyEmail ($data) );
            }

        }
     }
}
