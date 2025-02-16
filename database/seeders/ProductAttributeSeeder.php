<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\ProductAttribute;

class ProductAttributeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $attributes = [
            'Công suất', 
            'Dung tích', 
            'Chất liệu', 
            'Kích thước', 
            'Trọng lượng', 
            'Màu sắc', 
            'Điện áp', 
            'Tốc độ quay', 
            'Lưu lượng khí', 
            'Tiêu thụ điện năng'
        ];
        
        foreach ($attributes as $attribute) {
            ProductAttribute::firstOrCreate(['name' => $attribute]);
        }
    }
}
