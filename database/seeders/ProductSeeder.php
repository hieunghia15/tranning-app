<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Product;
use App\Models\Category;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $products = [
            ['Tủ lạnh Samsung Inverter 300L', 'TLSS300', 50, 30, 'Tủ lạnh', 'Tủ lạnh Samsung Inverter dung tích 300L, tiết kiệm điện.'],
            ['Tủ lạnh LG Door-in-Door 500L', 'TLLG500', 30, 20, 'Tủ lạnh', 'Tủ lạnh LG Door-in-Door với dung tích lớn 500L, công nghệ làm lạnh nhanh.'],
            ['Máy giặt Electrolux 8kg', 'MGEL8KG', 40, 25, 'Máy giặt', 'Máy giặt Electrolux cửa trước, giặt hơi nước, 8kg.'],
            ['Máy giặt Toshiba Inverter 10kg', 'MGTI10KG', 35, 18, 'Máy giặt', 'Máy giặt Toshiba Inverter giặt sạch, tiết kiệm nước.'],
            ['Điều hòa Daikin 1.5HP', 'DHDK1.5HP', 20, 10, 'Máy điều hòa', 'Điều hòa Daikin Inverter tiết kiệm điện, làm lạnh nhanh.'],
            ['Điều hòa Panasonic 2HP', 'DHPN2HP', 25, 15, 'Máy điều hòa', 'Điều hòa Panasonic 2HP mạnh mẽ, lọc bụi mịn PM2.5.'],
            ['Lò vi sóng Sharp 20L', 'LVSS20L', 30, 20, 'Lò vi sóng', 'Lò vi sóng Sharp 20L, 5 chế độ nấu, hẹn giờ tự động.'],
            ['Bếp từ Sunhouse SHD6862', 'BTSSHD6862', 50, 35, 'Bếp từ', 'Bếp từ Sunhouse SHD6862 công suất lớn, mặt kính chịu nhiệt.'],
            ['Máy hút bụi Hitachi 1600W', 'MHVHT1600', 45, 25, 'Máy hút bụi', 'Máy hút bụi Hitachi công suất mạnh, túi chứa bụi lớn.'],
            ['Quạt điều hòa Kangaroo KG50F79', 'QDKG50F79', 60, 40, 'Quạt điện', 'Quạt điều hòa Kangaroo KG50F79 làm mát hiệu quả, tiết kiệm điện.'],
            ['Nồi cơm điện Cuckoo 1.8L', 'NCDC18L', 55, 30, 'Nồi cơm điện', 'Nồi cơm điện Cuckoo 1.8L, công nghệ Fuzzy Logic nấu ngon.'],
            ['Bình nóng lạnh Ariston 20L', 'BNLAR20L', 35, 20, 'Bình nóng lạnh', 'Bình nóng lạnh Ariston dung tích 20L, giữ nhiệt lâu.'],
            ['Máy lọc nước Karofi 9 lõi', 'MLKK9L', 25, 15, 'Máy lọc nước', 'Máy lọc nước Karofi 9 lõi lọc sạch, bổ sung khoáng chất.'],
            ['Nồi chiên không dầu Lock&Lock 5.2L', 'NCKDLL52L', 50, 25, 'Nồi cơm điện', 'Nồi chiên không dầu Lock&Lock dung tích lớn 5.2L.'],
            ['Quạt sưởi dầu Tiross 11 thanh', 'QSTSR11T', 30, 15, 'Quạt điện', 'Quạt sưởi dầu Tiross 11 thanh sưởi ấm nhanh, an toàn.']
        ];
        
        // Thêm 200 sản phẩm bằng cách lặp qua các danh mục
        for ($i = 1; $i <= 200; $i++) {
            $category = Category::inRandomOrder()->first();

            do {
                $productCode = 'SPGD' . str_pad(rand(1, 9999), 4, '0', STR_PAD_LEFT);
            } while (Product::where('product_code', $productCode)->exists());

            Product::create([
                'name' => "Sản phẩm gia dụng mẫu $i",
                'product_code' => $productCode,
                'quantity' => rand(10, 100),
                'quantity_stock' => rand(5, 50),
                'category_id' => $category->id,
                'description' => "Mô tả sản phẩm gia dụng mẫu $i thuộc danh mục {$category->name}."
            ]);
        }
        
    }
}
