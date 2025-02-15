@extends('admin.base')

@section('title', 'Tạo người dùng')

@section('content')
    @include('admin.user.create')
@endsection

@push('css')

@endpush
@push('js')
    @vite(['resources/js/admin/features/user/create.js'])
@endpush