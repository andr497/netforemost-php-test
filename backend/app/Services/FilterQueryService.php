<?php

namespace App\Services;

use App\Services\Filters\BaseFilter;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\DB;

class FilterQueryService extends BaseFilter
{
    public function filteredData(): Builder
    {
        $this->filterQuantityBedrooms();
        $this->filterMaxPrice();
        $this->filterMinPrice();
        $this->filterDistance();
        return $this->query;
    }

    protected function filterQuantityBedrooms()
    {
        if (!isset($this->params["quantity_bedrooms"])) return;
        $bedrooms = (int) $this->params["quantity_bedrooms"];
        if (!$bedrooms && $bedrooms != 0) return;
        $this->query->where('bedrooms', '=', $bedrooms);
    }

    protected function filterMinPrice()
    {
        if (!isset($this->params["min_price"])) return;
        $min_price = (int) $this->params["min_price"];
        if (!$min_price) return;
        $this->query->where('price', '>=', $min_price);
    }

    protected function filterMaxPrice()
    {
        if (!isset($this->params["max_price"])) return;
        $max_price = (int) $this->params["max_price"];
        if (!$max_price) return;
        $this->query->where('price', '<=', $max_price);
    }

    protected function filterDistance()
    {
        if (!isset($this->params['filter_distance'])) return;
        $useCoordinates = filter_var($this->params['filter_distance'], FILTER_VALIDATE_BOOLEAN);
        if (!$useCoordinates) return;
        $latitude = (float) $this->params['lat'];
        $longitude = (float) $this->params['long'];
        $distance = (float) $this->params['distance_km'];
        $this->query->addSelect(
            DB::raw("
                latitude,
                longitude,
                (
                    6371 *
                    acos(cos(radians($latitude)
                ) *
                    cos(radians(latitude)
                ) *
                    cos(radians(longitude) - radians($longitude)
                ) + sin(radians($latitude)
                ) * sin(radians(latitude))
                    )
                ) AS distance")
        );
        $this->query->having('distance', '<=', $distance);
    }
}
