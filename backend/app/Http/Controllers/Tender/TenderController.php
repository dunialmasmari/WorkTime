<?php

namespace App\Http\Controllers\Tender;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\tender;
use validator;
class TenderController extends Controller
{
    //
    public function getActiveTenders()
    {
        $tender=tender::where('active','1')->where('deadline','>=',now())->where('start_date','>=',now())->orderByRaw('start_date DESC')->limit(8)->get();
        return response()->json($tender,200);
    }
    
    
   
    public function getTenders($id) 
    {
        $tender=tender::where('tender_id', $id);
        if ($tender->exists())
         {
          //$tender = tender::where('tender_id', $id)->get();
          return response()->json($tender->get() , 200);
         } 
        else 
        {
          return response()->json(["message" => "Tender not found!"], 404);
        }
      }

    public function filterAllActiveTender()
    {
        return response()->json(tender::where('active','1')->orderByRaw('deadline - start_date DESC')->get(),200);
    }

    public function filterActiveTender($id_major)
    {
        return response()->json(tender::where('active','0')->orderByRaw('deadline - start_date DESC')->get(),200);
    }

   public function store(Request $request)
    {
        $this->validate($request, [
                'filenames' => 'required',
                'filenames.*' => 'mimes:doc,pdf,docx,zip'
        ]);
        if($request->hasfile('filenames'))
         {
            foreach($request->file('filenames') as $file)
            {
                $name = time().'.'.$file->extension();
                $file->move(public_path().'/files/', $name);  
                $data[] = $name;  
            }
         }               
         $file= new tender();
         $file->filenames=json_encode($data);
         $file->save();


        return back()->with('success', 'Data Your files has been successfully added');
    }
}
