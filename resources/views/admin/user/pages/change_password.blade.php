@extends('admin.base')

@section('title', 'Đổi mật khẩu')

@section('content')
    @include('admin.user.change_password')
@endsection

@push('css')
    {{-- @vite(['resources/css/admin/features/dish/detail.scss']) --}}
@endpush
@push('js')
    @vite(['resources/js/admin/features/user/update_password.js'])
@endpush