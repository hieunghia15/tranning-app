<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index(Request $request)
    {
        $product = Product::query();

        if ($request->has('name') && !empty($request->name)) {
            $product->where('name', 'LIKE', '%' . $request->name . '%');
        }
        // Số lượng bản ghi trên mỗi trang (DataTables gửi lên từ client)
        $length = $request->input('length', 10);
        $start = $request->input('start', 0);
        $page = ($start / $length) + 1; // Tính toán số trang hiện tại

        // Lấy danh sách người dùng theo phân trang
        $products = $product->paginate($length, ['*'], 'page', $page);

        return response()->json([
            'data' => $products,
            'recordsTotal' => $products->total(),
            'recordsFiltered' => $products->total(),
            'pages' => $products->lastPage(),
            'page' => $products->currentPage(),
            'length' => $products->perPage(),
        ]);
    }

    public function show($id)
    {
        $product = Product::find($id);

        if (!$product) {
            return response()->json(['message' => 'Product not found'], 404);
        }

        return response()->json($product);
    }

}
