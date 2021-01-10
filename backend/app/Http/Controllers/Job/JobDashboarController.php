<?php

namespace App\Http\Controllers\Job;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use App\Models\job;
use App\Models\Major;

class JobDashboarController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
           // if (Auth::check()) 
          //  {
                $job =job::join('majors', 'jobs.major_id', '=', 'majors.major_id')
                ->select('majors.major_name', 'jobs.*' );//->where('jobs.active','1');
                if($job->exists())
                {
                    return response()->json($job->paginate(10), 200);
                }
                else{
                    return response()->json(['message' => 'You do not have jobs '], 404);
                } 
            //}
            //else
            //{
           //     return response()->json(['message' => 'The pages not found'], 401);
           // } 
    }

    public function getActiveJobs()
    {	
        //if (Auth::check()) 
        {
            $job =job::join('majors', 'jobs.major_id', '=', 'majors.major_id')
                ->select('majors.major_name', 'jobs.*' )->where('jobs.active','1');
                if($job->exists())
                {
                    return response()->json($job->paginate(10), 200);
                }
                else{
                    return response()->json(['message' => 'You do not have active jobs'], 404);
                } 
        }
       // else
        {
        //    return response()->json(['message' => 'The pages not found'], 401);
        }  
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //if (Auth::check()) 
        {
            $job = new job();
            $job->user_id = $request->input('user_id');
            $job->major_id = $request->input('major_id');
            $job->title = $request->input('title');
            $job->company = $request->input('company');
            $job->description = $request->input('description');
            //$job->apply_link = $request->input('apply_link');
            $job->start_date = $request->input('start_date');
            $job->deadline = $request->input('deadline');
            $job->posted_date = $request->input('posted_date');
            $job->active = $request->input('active');
            $job->location = $request->input('location');
            if($request->hasfile('filename'))
            {
            $filename = time().'.'.$request->file('filename')->extension();
            $result = $request->file('filename')->move(public_path().'/files/', $filename); //store('files');
            $job->filename = $filename;
            }
           /* if($request->hasfile('image'))
            {
            $imagename = time().'.'.$request->file('image')->extension();
            $result = $request->file('image')->move(public_path().'/images/', $imagename); //store('files');
            $job->image = $imagename;
            }*/
            $job->save();
            return response()->json(['message' => 'add sucessful', 'data' => $job], 201);  
        }
       // else
        {
        //    return response()->json(['message' => 'The pages not found'], 401);
        } 
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
       // if (Auth::check()) 
        {
            $job = job::join('majors', 'jobs.major_id', '=', 'majors.major_id')
            ->select('majors.major_name', 'jobs.*' )->where('jobs.job_id', $id);
            if($job->exists())
            {
                return response()->json(['data' => $job->get(), 'path the folder of files' => public_path('files/'), 'path the folder of images' => public_path('images/')], 200);
            }
            else{
                return response()->json(['message' => 'You do not have active jobs '], 404);
            }
        }
       // else
        {
         //   return response()->json(['message' => 'The pages not found'], 401);
        } 
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
       // if (Auth::check()) 
        {
            $job = job::where('job_id',$id);
            if($job->exists())
            {
                $job->title = $request->input('title');
                $job->company = $request->input('company');
                $job->description = $request->input('description');
                //$job->apply_link = $request->input('apply_link');
                $job->start_date = $request->input('start_date');
                $job->deadline = $request->input('deadline');
                $job->posted_date = $request->input('posted_date');
                $job->active = $request->input('active');
                $job->location = $request->input('location');
                if($request->hasfile('filename'))
                {
                $filename = time().'.'.$request->file('filename')->extension();
                $result = $request->file('filename')->move(public_path().'/files/', $filename); //store('files');
                $job->filename = $filename;
                }
                /*if($request->hasfile('image'))
                {
                $imagename = time().'.'.$request->file('image')->extension();
                $result = $request->file('image')->move(public_path().'/images/', $imagename); //store('files');
                $job->image = $imagename;
                }*/
                $job->Update();
            // $job->Update($request->all());
                return response()->json($job->paginate(), 200);
            }
            else{
                return response()->json(['message' => 'job not found'], 404);
            }
        }
        //else
        {
        //    return response()->json(['message' => 'The pages not found'], 401);
        } 
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //if (Auth::check()) 
        {
            $job = job::where('job_id',$id);
            if($job->exists())
            {
                if($job->active = 1){
                    $job->Update(['active' => '0']);
                    return response()->json(['message' => 'job not active'], 200);
                }
            else{
                $job->Update(['active' => '1']);
                return response()->json(['message' => 'job active'], 200);
                }
            }
            else{
                return response()->json(['message' => 'job not found'], 404);
            }
        }
       // else
        {
          //  return response()->json(['message' => 'The pages not found'], 401);
        }
    }

    public function delete($id)
    {
        //if (Auth::check()) 
        {
            $job = job::where('job_id',$id);
            if($job->exists())
            {
            
                    $job->delete();
                    return response()->json(['message' => 'job deleted'], 200);
            }
            else{
                return response()->json(['message' => 'job not found'], 404);
            }
        }
       // else
        {
           // return response()->json(['message' => 'The pages not found'], 401);
        } 
    }

}
