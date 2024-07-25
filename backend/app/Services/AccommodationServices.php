<?php

namespace App\Services;

use App\Repository\AccommodationRepository;
use Illuminate\Database\Eloquent\Builder;

class AccommodationServices
{

    protected AccommodationRepository $_repository;
    protected Builder $query;
    const PER_PAGE = 5;

    public function __construct()
    {
        $this->_repository = new AccommodationRepository();
    }

    public function getList($params = [])
    {
        $this->query = $this->_repository->getAll();
        $filter = new FilterQueryService($this->query, $params);

        $this->query = $filter->filteredData();

        return $this->query->paginate(5);
    }
}
