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

    public function filterAllActiveTender()
    {
        return response()->json(tender::where('active','1')->orderByRaw('deadline - start_date DESC')->get(),200);
    }

    public function filterActiveTender($id_major)
    {
        return response()->json(tender::where('active','0')->orderByRaw('deadline - start_date DESC')->get(),200);
    }


}
