<?php

namespace App\Http\Controllers\Major;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\MajorModel;

class MajorController extends Controller
{
    public function major(){
        return response()->json(MajorModel::get(), 200);
    }
    public function majorByID($idd){
        return response()->json(MajorModel::find($idd), 200);
    }
    public function majorSave(Request $request){
        $major = MajorModel::create($request->all());
        return response()->json($major, 201);
    }
    public function majorUpdate(Request $request, MajorModel $major){
        $major->Update($request->all());
        return response()->json($major, 200);
    }
    public function majorDelete(Request $request, MajorModel $major){
        $major->delete();
        return response()->json('deleted', 200);
    }
}
