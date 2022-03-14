<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Lead;
use App\Mail\SendNewMail;
use App\Mail\SendNewMailGuest;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    public function send(Request $request)
    {
        $data = $request->all();
        $validator = Validator::make($data, [
            'name' => 'required',
            'email' => 'required',
            'message' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'errors' => $validator->errors()
            ]);
        } else {
            $newMail = new Lead();
            $newMail->fill($data);
            $newMail->save();

            Mail::to('manuel@me.com')->send(new SendNewMail($newMail));
            Mail::to($newMail->email)->send(new SendNewMailGuest($newMail));

            return response()->json([
                'success' => true,
            ]);
        }
    }
}
