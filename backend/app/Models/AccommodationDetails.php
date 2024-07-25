<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class AccommodationDetails extends Model
{
    use HasFactory;

    public $timestamps = false;
    protected $fillable = [
        'individual_heating',
        'energetic_certification',
        'plants',
        'bedrooms',
        'bathrooms',
        'floor',
        'reformed',
        'parking',
        'second_hand',
        'built_in_wardrobes',
        'furnished',
        'exterior',
        'interior',
        'elevator',
        'terrace',
        'storage_room',
        'pool',
        'garden',
        'balcony',
        'equipped_kitchen',
        'air_conditioning',
        'suitable_mobility',
        'pets_allowed',
    ];

    public function accommodation(): BelongsTo
    {
        return $this->belongsTo(Accommodation::class);
    }
}
