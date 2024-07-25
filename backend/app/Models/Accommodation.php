<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\SoftDeletes;

class Accommodation extends Model
{
    use HasFactory;
    use SoftDeletes;

    public $fillable = [
        "csv_id",
        "title",
        "advertiser",
        "description",
        "phones",
        "type",
        "price",
        "meters",
        "meter_per_price",
        "useful_square_meters",
        "register_at",
        "built_in"
    ];

    public function location(): HasOne {
        return $this->hasOne(AccommodationLocation::class);
    }

    public function details(): HasOne {
        return $this->hasOne(AccommodationDetails::class);
    }
}
