<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class AccommodationLocation extends Model
{
    use HasFactory;

    public $timestamps = false;
    protected $fillable = [
        'latitude',
        'longitude',
        'province',
        'city',
        'street',
        'district',
        'neighborhood',
        'address',
    ];

    public function accommodation(): BelongsTo
    {
        return $this->belongsTo(Accommodation::class);
    }
}
