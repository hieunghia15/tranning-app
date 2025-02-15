@extends('admin.base')

@section('title', 'Cập nhật người dùng')

@section('content')
    @include('admin.user.edit')
@endsection

@push('css')
    {{-- @vite(['resources/css/admin/features/dish/detail.scss']) --}}
@endpush
@push('js')
    @vite(['resources/js/admin/features/user/edit.js'])
@endpush