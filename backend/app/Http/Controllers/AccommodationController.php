<?php

namespace App\Http\Controllers;

use App\Services\AccommodationServices;
use Illuminate\Http\Request;

class AccommodationController extends Controller
{

    public function index(Request $request)
    {
        $params = $request->all();
        $repository = new AccommodationServices();
        $data = $repository->getList($params);

        return response()->json($data);
    }
}
