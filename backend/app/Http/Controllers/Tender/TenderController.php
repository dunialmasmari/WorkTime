<?php

namespace App\Http\Controllers\Tender;


use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\tender;
use App\Models\Major;
use Illuminate\Support\Collection;
use validator;

class TenderController extends Controller
{
    //
    public function getActiveTenders()
    {
        $tender=tender::where('active','1')->where('deadline','>=',now())->where('start_date','>=',now())->orderByRaw('start_date DESC')->limit(8)->get();
        return response()->json($tender,200);
    }
    
    public function getTenderById($id) 
    {
        $tender=tender::where('tender_id', $id);
        if ($tender->exists())
         {
          return response()->json($tender->get() , 200);
         } 
        else 
        {
          return response()->json(["message" => "Tender not found!"], 404);
        }
      }

      public function getTenderMajor()
      {
        $tenders=tender::where('active','1')->get();
        $majors=Major::where('active','1')->get();
        $collection =collect([]);
        foreach($majors as $major)
        {  
            foreach($tenders as $tender)
            {
                if($tender->major_id == $major->majorid)
                {
                    $key=$major->major_name ; 
                    $count=tender::where('active','1')->where('major_id',$major->majorid)->get()->count();
                    $collection->prepend( $count,$key);
                break;
                }
            }
        }
        return response()->json($collection,200);
      }

      public function filterAllActiveTender(Request $request)
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
              $tender=tender::where('active','1')->where('deadline','>=',now())->where('start_date','<=',now())->orderByRaw('start_date DESC')->get();
              return response()->json($tender,200);
      
          }
          //////////filtter by major_id
          if($id != '' && $comp == '' && $loc == '')
          {
              return response()->json(tender::where(function ($query) use ($id_ar) 
              {
                  foreach($id_ar as $va)
                     $query->orwhere('major_id', '=', $va);
                  })->where('active','1')->where('deadline','>=',now())->where('start_date','<=',now())->orderByRaw('start_date DESC')->get(),200);
      
          }
                  //////////filtter by company name
          if($id == '' && $comp != '' && $loc == '')
          {
              return response()->json(tender::where(function ($query) use ($comp_ar) 
              {
                  foreach($comp_ar as $va)
                     $query->orwhere('company', '=', $va);
                  })->where('active','1')->where('deadline','>=',now())->where('start_date','<=',now())->orderByRaw('start_date DESC')->get(),200);
      
          }
          //////////filtter by location 
          if($id == '' && $comp == '' && $loc != '')
          {
              return response()->json(tender::where(function ($query) use ($loc_ar) 
              {
                  foreach($loc_ar as $va)
                     $query->orwhere('location', '=', $va);
                  })->where('active','1')->where('deadline','>=',now())->where('start_date','<=',now())->orderByRaw('start_date DESC')->get(),200);
      
          }
          //////////filtter by major_id and company name
          if($id != '' && $comp != '' && $loc == '')
          {
              return response()->json(tender::where(function ($query) use ($id_ar) 
              {
                  foreach($id_ar as $va)
                     $query->orwhere('major_id', '=', $va);
                  })->where(function ($query) use ($comp_ar) 
                  {
                      foreach($comp_ar as $va)
                         $query->orwhere('company', '=', $va);
                      })->where('active','1')->where('deadline','>=',now())->where('start_date','<=',now())->orderByRaw('start_date DESC')->get(),200);
      
          }
          //////////filtter by major_id and location
          if($id != '' && $comp == '' && $loc != '')
          {
              return response()->json(tender::where(function ($query) use ($id_ar) 
              {
                  foreach($id_ar as $va)
                     $query->orwhere('major_id', '=', $va);
                  })->where(function ($query) use ($loc_ar) 
                  {
                      foreach($loc_ar as $va)
                         $query->orwhere('location', '=', $va);
                      })->where('active','1')->where('deadline','>=',now())->where('start_date','<=',now())->orderByRaw('start_date DESC')->get(),200);
      
          }
          //////////filtter by company name and location
          if($id == '' && $comp != '' && $loc != '')
          {
              return response()->json(tender::where(function ($query) use ($comp_ar) 
              {
                  foreach($comp_ar as $va)
                     $query->orwhere('company', '=', $va);
                  })->where(function ($query) use ($loc_ar) 
                  {
                      foreach($loc_ar as $va)
                         $query->orwhere('location', '=', $va);
                      })->where('active','1')->where('deadline','>=',now())->where('start_date','<=',now())->orderByRaw('start_date DESC')->get(),200);
      
          }
          //////////filtter by major id , company name and location
          if($id != '' && $comp != '' && $loc != '')
          {
              return response()->json(tender::where(function ($query) use ($id_ar) 
              {
                  foreach($id_ar as $va)
                     $query->orwhere('major_id', '=', $va);
                  })->where(function ($query) use ($comp_ar) 
                  {
                      foreach($comp_ar as $va)
                         $query->orwhere('company', '=', $va);
                      })->where(function ($query) use ($loc_ar) 
                             {
                                foreach($loc_ar as $va)
                                   $query->orwhere('location', '=', $va);
                              })->where('active','1')->where('deadline','>=',now())->where('start_date','<=',now())->orderByRaw('start_date DESC')
                            ->get(),200);
          }
          
  
      }

    public function filterActiveTender($id_major)
    {
        return response()->json(tender::where('active','0')->orderByRaw('deadline - start_date DESC')->get(),200);
    }


}
