<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $users = [];

        // Danh sách tên mẫu
        $firstNames = ['Nguyễn Văn', 'Trần Thị', 'Lê Hoàng', 'Phạm Minh', 'Hoàng Thị', 'Đặng Văn', 'Bùi Thị', 'Lý Thanh', 'Võ Anh', 'Đỗ Bích'];
        $lastNames = ['An', 'Bình', 'Chi', 'Dương', 'Hà', 'Khang', 'Linh', 'Minh', 'Nam', 'Phúc', 'Quang', 'Sơn', 'Tâm', 'Uyên', 'Vinh'];

        // Danh sách avatar mẫu
        $avatars = [
            'https://example.com/avatars/avatar1.jpg',
            'https://example.com/avatars/avatar2.jpg',
            'https://example.com/avatars/avatar3.jpg',
            'https://example.com/avatars/avatar4.jpg',
            'https://example.com/avatars/avatar5.jpg',
        ];

        // Tạo 2000 user
        for ($i = 1; $i <= 500; $i++) {
            $gender = $i % 2 === 0 ? 1 : 2; // 1: Nam, 2: Nữ
            $fullname = $firstNames[array_rand($firstNames)] . ' ' . $lastNames[array_rand($lastNames)] . ' #' . $i;
            $email = 'test' . $i . '@example.com';

            $users[] = [
                'fullname' => $fullname,
                'birthday' => rand(1980, 2005) . '-' . str_pad(rand(1, 12), 2, '0', STR_PAD_LEFT) . '-' . str_pad(rand(1, 28), 2, '0', STR_PAD_LEFT),
                'email' => $email,
                'password' => Hash::make('123admin'),
                'gender' => $gender,
                'avatar' => $avatars[array_rand($avatars)],
                'status' => rand(0, 1),
                'created_at' => now(),
                'updated_at' => now(),
            ];
        }

        // Chèn dữ liệu theo batch 500 để tối ưu hiệu suất
        foreach (array_chunk($users, 500) as $chunk) {
            User::insert($chunk);
        }
    }
}
