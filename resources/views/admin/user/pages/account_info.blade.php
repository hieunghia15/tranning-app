@extends('admin.base')

@section('title', 'Hồ sơ')

@section('content')
    @include('admin.user.account_info')
@endsection

@push('css')
    {{-- @vite(['resources/css/admin/features/dish/detail.scss']) --}}
@endpush
@push('js')
    @vite(['resources/js/admin/features/user/update_account.js'])
@endpush