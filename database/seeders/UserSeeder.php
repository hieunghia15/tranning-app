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
        $users = [
            [
                'fullname' => 'Nguyễn Văn A',
                'birthday' => '1995-07-20',
                'email' => 'nguyenvana@example.com',
                'password' => Hash::make('123admin'),
                'gender' => 1,
                'avatar' => 'https://example.com/avatars/nguyenvana.jpg',
                'status' => 1,
            ],
            [
                'fullname' => 'Trần Thị B',
                'birthday' => '1998-05-15',
                'email' => 'tranthib@example.com',
                'password' => Hash::make('123admin'),
                'gender' => 2,
                'avatar' => 'https://example.com/avatars/tranthib.jpg',
                'status' => 1,
            ],
            [
                'fullname' => 'Lê Hoàng C',
                'birthday' => '2000-02-10',
                'email' => 'lehoangc@example.com',
                'password' => Hash::make('123admin'),
                'gender' => 1,
                'avatar' => 'https://example.com/avatars/lehoangc.jpg',
                'status' => 1,
            ],
            [
                'fullname' => 'Phạm Minh D',
                'birthday' => '1993-11-25',
                'email' => 'phamminhd@example.com',
                'password' => Hash::make('123admin'),
                'gender' => 1,
                'avatar' => 'https://example.com/avatars/phamminhd.jpg',
                'status' => 1,
            ],
            [
                'fullname' => 'Hoàng Thị E',
                'birthday' => '1997-08-30',
                'email' => 'hoangthie@example.com',
                'password' => Hash::make('123admin'),
                'gender' => 2,
                'avatar' => 'https://example.com/avatars/hoangthie.jpg',
                'status' => 1,
            ],
        ];

        User::insert($users);
    }
}
