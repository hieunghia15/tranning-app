<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Category;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories = ['Tủ lạnh', 'Máy giặt', 'Máy điều hòa', 'Lò vi sóng', 'Bếp từ', 'Máy hút bụi', 'Quạt điện', 'Nồi cơm điện', 'Bình nóng lạnh', 'Máy lọc nước'];

        foreach ($categories as $category) {
            Category::create(['name' => $category]);
        }
    }
}
