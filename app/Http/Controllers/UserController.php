<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;

class UserController extends Controller
{
    public function userSignIn(Request $request): JsonResponse
    {
       $User = User::where('email',$request->email)->first();

        if(! $User)
        {
            return response()->json([
                'message' => 'unsuccess'
            ]);
        }

        if ($this->isValidateCredential($request->all() , $User)){
            return response()->json([
                'message' => 'success',
                'user_token' => $User->createToken('testToken', ['server:admin'])->plainTextToken

            ]);

        }
        return response()->json(['message' => 'not found']);

    }
    public function isValidateCredential(array $request,User $User)
    {
       return $User->email===$request['email'] && Hash::check($request['password'],$User->password);
    }


}
