<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = [
        'name',
        'product_code',
        'quantity',
        'quantity_stock',
        'category_id',
        'description',
    ];
}
