<?php

namespace App\Http\Controllers\login;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Session;
use App\User;

class loginController extends Controller
{
    public function login(Request $request)
    {
        $data = $request->validate([
            'email' => 'email|required',
            'password' => 'required'
        ]);
 
        if (auth()->attempt($data)) {
            $token = auth()->user()->createToken('LaravelAuthApp')->accessToken; 
            session()->put('data',$data);
            return response()->json(['message' => 'login sucessfuly', 'token' => $token], 200);// 'data' => $data, 
        } else {
            return response()->json(['message' => 'Unauthorised'], 401);
        }
    } 

    public function checklogin(){
        if (Auth::check()) {
            return response()->json(['message' => 'The user is logged in'], 200);
            // The user is logged in...
         }
        else{
            return response()->json(['message' => 'The user is not logged in'], 401);
        }
    }

    public function logout(){
            session()->forget('data');
            return response()->json(['message' => 'logout sucess'], 200);
       
    }
    public function details(){
        return response()->json(['user' => auth()->user()], 200);
    }
}
