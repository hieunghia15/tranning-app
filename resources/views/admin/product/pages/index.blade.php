@extends('admin.base')

@section('title', 'Danh sách sản phầm')

@section('content')
    @include('admin.product.index')
@endsection

@push('css')

@endpush
@push('js')
    @vite(['resources/js/admin/features/product/index.js'])
@endpush