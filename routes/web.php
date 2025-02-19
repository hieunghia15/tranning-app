<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;

Route::get('/', function () {
    return view('welcome');
})->name('welcome');

Route::post('/login', [AuthController::class, 'login'])->name('login');
Route::post('/logout', [AuthController::class, 'logout'])->name('logout')->middleware('auth');

Route::get('/sign-in', function () {
    return view('auth.login');
})->name('signin');

Route::middleware('auth')->get('/dashboard', function () {
    return view('admin.dashboard.pages.index');
})->name('dashboard');

// Route::get('/dashboard', function () {
//     return view('admin.dashboard.pages.index');
// });

Route::get('/account-info', function () {
    return view('admin.user.pages.account_info');
});

Route::get('/change-password', function () {
    return view('admin.user.pages.change_password');
});

Route::get('/users', function () {
    return view('admin.user.pages.index');
});

Route::get('/users/create', function () {
    return view('admin.user.pages.create');
});

Route::get('/users/edit', function () {
    return view('admin.user.pages.edit');
});

Route::get('/products', function () {
    return view('admin.product.pages.index');
});

Route::get('/products/detail', function () {
    return view('admin.product.pages.detail');
});

