<?php

namespace App\Services\Filters;

use Illuminate\Database\Eloquent\Builder;

class BaseFilter
{
    protected Builder $query;
    protected array $params;

    public function __construct(Builder $query, array $params)
    {
        $this->setQuery($query);
        $this->setParams($params);
    }

    public function setQuery(Builder $query)
    {
        $this->query = $query;
    }

    public function setParams(array $params)
    {
        $this->params = $params;
    }
}
