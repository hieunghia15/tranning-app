<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/dashboard', function () {
    return view('admin.dashboard.pages.index');
});

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
