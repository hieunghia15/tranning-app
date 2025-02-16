@extends('admin.base')

@section('title', 'Chi tiết sản phầm')

@section('content')
    @include('admin.product.detail')
@endsection

@push('css')

@endpush
@push('js')
    {{-- @vite(['resources/js/admin/features/product/detail.js']) --}}
@endpush