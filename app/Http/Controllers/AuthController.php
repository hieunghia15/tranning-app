<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Session;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);

        if(Auth::attempt($credentials))
        {
            $request->session()->regenerate();
            $user = Auth::user();
            // Tạo token mới
            $token = $user->createToken('auth_token')->plainTextToken;

            // Lưu token vào session để frontend sử dụng
            session(['api_token' => $token]);
            return redirect()->route('dashboard');
        }

        return back()->withErrors([
            'email' => 'Your provided credentials do not match in our records.',
        ])->onlyInput('email');
    }

    public function logout(Request $request)
    {
        $user = Auth::user();
        if ($user) {
            // Xóa tất cả token của user khi logout
            $user->tokens()->delete();
        }
        Session::flush();
        session()->forget('api_token');
        Auth::logout();
        return redirect()->route('signin')
            ->withSuccess('You have logged out successfully!');
    }
}