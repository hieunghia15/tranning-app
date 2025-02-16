<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\ProductAttributeValue;
use App\Models\Product;
use App\Models\ProductAttribute;

class ProductAttributeValueSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $products = Product::all();
        $attributes = ProductAttribute::all();

        $attributeValues = [
            'Công suất' => ['500W', '1000W', '1500W', '2000W'],
            'Dung tích' => ['1L', '2L', '5L', '10L'],
            'Chất liệu' => ['Nhựa', 'Thép không gỉ', 'Nhôm', 'Gốm'],
            'Kích thước' => ['30x30x30 cm', '50x50x50 cm', '70x70x70 cm'],
            'Trọng lượng' => ['1kg', '2kg', '5kg', '10kg'],
            'Màu sắc' => ['Trắng', 'Đen', 'Xám', 'Đỏ'],
            'Điện áp' => ['220V', '110V'],
            'Tốc độ quay' => ['500 rpm', '1000 rpm', '1500 rpm'],
            'Lưu lượng khí' => ['50 m³/h', '100 m³/h', '150 m³/h'],
            'Tiêu thụ điện năng' => ['0.5 kWh', '1 kWh', '2 kWh']
        ];

        $productAttributes = [];

        foreach ($products as $product) {
            $assignedAttributes = $attributes->random(2); // Chọn ngẫu nhiên ít nhất 2 thuộc tính

            foreach ($assignedAttributes as $attribute) {
                $productAttributes[] = [
                    'product_id' => $product->id,
                    'product_attribute_id' => $attribute->id,
                    'value' => $attributeValues[$attribute->name][array_rand($attributeValues[$attribute->name])],
                    'created_at' => now(),
                    'updated_at' => now(),
                ];
            }
        }

        ProductAttributeValue::insert($productAttributes);

    }
}
