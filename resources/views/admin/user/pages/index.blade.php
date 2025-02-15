@extends('admin.base')

@section('title', 'Người dùng')

@section('content')
    @include('admin.user.index')
@endsection

@push('css')
    {{-- @vite(['resources/css/admin/features/dish/detail.scss']) --}}
@endpush
@push('js')
    @vite([
        // 'resources/js/admin/features/user/update_status.js',
        // 'resources/js/admin/features/user/create.js',
        'resources/js/admin/features/user/index.js',
        // 'resources/js/admin/features/user/delete.js',
        ])
@endpush