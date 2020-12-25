<?php

namespace App\Http\Controllers\Tender;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\TenderModel;
use validator;
class TenderController extends Controller
{
    //
    public function getActiveTenders()
    {
        $tender=TenderModel::where('active','1')->where('deadline','>=',now())->where('start_date','>=',now())->orderByRaw('start_date DESC')->limit(8)->get();
        return response()->json($tender,200);
    }
    
    
   
    public function getTenders($id) 
    {
        $tender=TenderModel::where('tender_id', $id);
        if ($tender->exists())
         {
          //$tender = TenderModel::where('tender_id', $id)->get();
          return response()->json($tender->get() , 200);
         } 
        else 
        {
          return response()->json(["message" => "Tender not found!"], 404);
        }
      }

    public function filterAllActiveTender()
    {
        return response()->json(TenderModel::where('active','1')->orderByRaw('deadline - start_date DESC')->get(),200);
    }

    public function filterActiveTender($id_major)
    {
        return response()->json(TenderModel::where('active','0')->orderByRaw('deadline - start_date DESC')->get(),200);
    }

}
