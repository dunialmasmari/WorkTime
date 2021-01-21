<?php

namespace App\Http\Controllers\Job;

use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\tender;
use App\Models\job;
use App\Models\Major;
use Illuminate\Support\Collection;
use validator;

class JobController extends Controller
{
    
    //
    public function getActiveJobs()
    {
        /*if (Auth::check()) 
        {*/
            $jobs=job::join('majors','jobs.major_id','=','majors.major_id')
            ->select('majors.major_name','jobs.*')->where('jobs.deadline','>=',now())
            ->where('jobs.start_date','<=',now())->where('jobs.active','1')->orderByRaw('jobs.start_date DESC')->paginate(10);//->limit(8)
            return response()->json($jobs,200);
       /* }
        else
        {
            return response()->json(['message' => 'The pages not found'], 401);
        } */
    }
    
    public function getJobById($id) 
    {
      /*  if (Auth::check()) 
        {*/
            $jobs=job::join('majors','jobs.major_id','=','majors.major_id')
            ->select('majors.major_name','jobs.*')->where('jobs.job_id', $id);
            if ($jobs->exists())
            {
            return response()->json($jobs->get(), 200);
            } 
            else 
            {
            return response()->json(["message" => "Jobs not found!"], 404);
            }
        /*}
        else
        {
            return response()->json(['message' => 'The pages not found'], 401);
        } */
      }

      public function getJobMajor()
      {
       /* if (Auth::check()) 
        {*/
            $jobs=job::where('active','1')->get();
            $majors=Major::where('active','1')->get();
            $collection =collect([]);
            $major_ar=array();
            foreach($majors as $major)
            {  
                foreach($jobs as $job)
                {
                    if($job->major_id == $major->major_id)
                    {
                        $key=$major->major_name ; 
                        $count=job::where('active','1')->where('major_id',$major->major_id)->get()->count();
                        
                        $major_ar[]=['count'=>$count,'name'=>$key];
                    break;
                    }
                }
            }
            return response()->json($major_ar,200);
      /*  }
        else
        {
            return response()->json(['message' => 'The pages not found'], 401);
        } */
      }

      public function filterAllActiveJob(Request $request)
      {
          $id=$request->input('major_id');
          $comp=$request->input('company');
          $loc=$request->input('location');
          $id_ar=explode(',', $id);
          $comp_ar=explode(',', $comp);
          $loc_ar=explode(',', $loc);
          //////no filters 
          if($id == '' && $comp == '' && $loc == '') 
          {
            $jobs=job::join('majors','jobs.major_id','=','majors.major_id')
            ->select('majors.major_name','jobs.*')
            ->where('jobs.active','1')->where('jobs.deadline','>=',now())->where('jobs.start_date','<=',now())->orderByRaw('jobs.start_date DESC')->paginate();
              return response()->json($jobs,200);
      
          }
          //////////filtter by major_id
          if($id != '' && $comp == '' && $loc == '')
          {
              return response()->json(job::join('majors','jobs.major_id','=','majors.major_id')
              ->select('majors.major_name','jobs.*')
              ->where(function ($query) use ($id_ar) 
              {
                  foreach($id_ar as $va)
                     $query->orwhere('jobs.major_id', '=', $va);
                  })->where('jobs.active','1')->where('jobs.deadline','>=',now())->where('jobs.start_date','<=',now())->orderByRaw('jobs.start_date DESC')->paginate(),200);
      
          }
                  //////////filtter by company name
          if($id == '' && $comp != '' && $loc == '')
          {
              return response()->json(job::join('majors','jobs.major_id','=','majors.major_id')
              ->select('majors.major_name','jobs.*')
              ->where(function ($query) use ($comp_ar) 
              {
                  foreach($comp_ar as $va)
                     $query->orwhere('jobs.company', '=', $va);
                  })->where('jobs.active','1')->where('jobs.deadline','>=',now())->where('jobs.start_date','<=',now())->orderByRaw('jobs.start_date DESC')->paginate(),200);
      
          }
          //////////filtter by location 
          if($id == '' && $comp == '' && $loc != '')
          {
              return response()->json(job::join('majors','jobs.major_id','=','majors.major_id')
              ->select('majors.major_name','jobs.*')
              ->where(function ($query) use ($loc_ar) 
              {
                  foreach($loc_ar as $va)
                     $query->orwhere('jobs.location', '=', $va);
                    })->where('jobs.active','1')->where('jobs.deadline','>=',now())->where('jobs.start_date','<=',now())->orderByRaw('jobs.start_date DESC')->paginate(),200);
      
          }
          //////////filtter by major_id and company name
          if($id != '' && $comp != '' && $loc == '')
          {
              return response()->json(job::join('majors','jobs.major_id','=','majors.major_id')
              ->select('majors.major_name','jobs.*')
              ->where(function ($query) use ($id_ar) 
              {
                  foreach($id_ar as $va)
                     $query->orwhere('jobs.major_id', '=', $va);
                  })->where(function ($query) use ($comp_ar) 
                  {
                      foreach($comp_ar as $va)
                         $query->orwhere('jobs.company', '=', $va);
                        })->where('jobs.active','1')->where('jobs.deadline','>=',now())->where('jobs.start_date','<=',now())->orderByRaw('jobs.start_date DESC')->paginate(),200);
      
          }
          //////////filtter by major_id and location
          if($id != '' && $comp == '' && $loc != '')
          {
              return response()->json(job::join('majors','jobs.major_id','=','majors.major_id')
              ->select('majors.major_name','jobs.*')
              ->where(function ($query) use ($id_ar) 
              {
                  foreach($id_ar as $va)
                     $query->orwhere('jobs.major_id', '=', $va);
                  })->where(function ($query) use ($loc_ar) 
                  {
                      foreach($loc_ar as $va)
                         $query->orwhere('jobs.location', '=', $va);
                        })->where('jobs.active','1')->where('jobs.deadline','>=',now())->where('jobs.start_date','<=',now())->orderByRaw('jobs.start_date DESC')->paginate(),200);
      
          }
          //////////filtter by company name and location
          if($id == '' && $comp != '' && $loc != '')
          {
              return response()->json(job::join('majors','jobs.major_id','=','majors.major_id')
              ->select('majors.major_name','jobs.*')
              ->where(function ($query) use ($comp_ar) 
              {
                  foreach($comp_ar as $va)
                     $query->orwhere('jobs.company', '=', $va);
                  })->where(function ($query) use ($loc_ar) 
                  {
                      foreach($loc_ar as $va)
                         $query->orwhere('jobs.location', '=', $va);
                        })->where('jobs.active','1')->where('jobs.deadline','>=',now())->where('jobs.start_date','<=',now())->orderByRaw('jobs.start_date DESC')->paginate(),200);
      
          }
          //////////filtter by major id , company name and location
          if($id != '' && $comp != '' && $loc != '')
          {
              return response()->json(job::join('majors','jobs.major_id','=','majors.major_id')
              ->select('majors.major_name','jobs.*')
              ->where(function ($query) use ($id_ar) 
              {
                  foreach($id_ar as $va)
                     $query->orwhere('jobs.major_id', '=', $va);
                  })->where(function ($query) use ($comp_ar) 
                  {
                      foreach($comp_ar as $va)
                         $query->orwhere('jobs.company', '=', $va);
                      })->where(function ($query) use ($loc_ar) 
                             {
                                foreach($loc_ar as $va)
                                   $query->orwhere('jobs.location', '=', $va);
                                })->where('jobs.active','1')->where('jobs.deadline','>=',now())->where('jobs.start_date','<=',now())->orderByRaw('jobs.start_date DESC')->paginate(),200);

          }
      }
      
    public function filterActiveJobField()
    {
        $jobs=job::where('active','1')->get();
        $majors=Major::where('active','1')->get();
        $major_ar=array();
        $compa_ar=array();
        $loca_ar=array();
        foreach($majors as $major)
        {  
            foreach($jobs as $job)
            {
                if($job->major_id == $major->major_id)
                {
                    $name=$major->major_name ; 
                    $id=$major->major_id;
                    $major_ar[]=['id'=>$id,'name'=>$name];
                break;
                }
            }
        }
        foreach($jobs as $job)
            {
                $compa_ar[]=$job->company;
            }
            //$compa_ar=array_unique($compa_ar);
        $compa_ar = array_values( array_flip( array_flip( $compa_ar ) ) );
        foreach($jobs as $job)
        {
            $loca_ar[]=$job->location;
        }
        //$loca_ar=array_unique($loca_ar);
        $loca_ar = array_values( array_flip( array_flip( $loca_ar ) ) );
        $key=['major','company','location'];
        $value=[$major_ar,$compa_ar,$loca_ar];
        $filters=array_combine($key,$value);
        //print_r($filters);
        return response()->json($filters,200);
    } 

    public function dowenloadFile($filename)
    {
            return response()->download(public_path('files/'.$filename), 'filename');
    }

}
