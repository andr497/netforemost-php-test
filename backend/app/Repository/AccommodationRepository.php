<?php

namespace App\Repository;

use App\Models\Accommodation;

class AccommodationRepository
{

    public function getAll()
    {
        $query = Accommodation::query();
        return $query->select(
            "csv_id",
            "price",
            "title",
            "meters",
            "type",
            "meter_per_price",
            "advertiser",
            "register_at",
        )
        ->join("accommodation_details AS ad", "ad.accommodation_id", "=", "accommodations.id")
        ->join("accommodation_locations AS al", "al.accommodation_id", "=", "accommodations.id");
    }
}
