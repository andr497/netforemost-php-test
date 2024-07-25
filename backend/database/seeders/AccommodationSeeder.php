<?php

namespace Database\Seeders;

use App\Models\Accommodation;
use App\Models\AccommodationDetails;
use App\Models\AccommodationLocation;
use Carbon\Carbon;
use Carbon\Exceptions\InvalidFormatException;
use Illuminate\Database\Seeder;

class AccommodationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = file('database/extras/resource_accommodation.csv');

        foreach ($data as $index => $csvLine) {
            if (!$index) continue;

            $row = str_getcsv($csvLine);

            $accommodation = self::getAccommodationData($row);
            $accommodation = new Accommodation($accommodation);
            $accommodation->save();

            $location = self::getLocationData($row);
            $location = new AccommodationLocation($location);
            $accommodation->location()->save($location);

            $details = self::getDetails($row);
            $details = new AccommodationDetails($details);
            $accommodation->details()->save($details);
        }
    }

    protected static function getAccommodationData($row): array
    {
        try {
            $date = Carbon::createFromFormat('Y/m/d', $row[28]);
        } catch (InvalidFormatException $e) {
            $date = null;
        }

        return [
            'csv_id' => (int) $row[2],
            'title' => $row[3],
            'advertiser' => $row[4],
            'description' => $row[5],
            'phones' => $row[7],
            'type' => $row[8],
            'price' => $row[9],
            'meter_per_price' => $row[10],
            'meters' => (int) $row[14],
            'built_in' => (!$row[20]) ? null : $row[20],
            'register_at' => $date,
            'useful_square_meters' => (int) $row[39],
        ];
    }

    protected static function getLocationData($row)
    {
        return [
            'latitude' => $row[0],
            'longitude' => $row[1],
            'address' => $row[11],
            'province' => $row[12],
            'city' => $row[13],
            'street' => $row[29],
            'neighborhood' => $row[30],
            'district' => $row[31],
        ];
    }

    protected static function getDetails($row)
    {
        $heating = filter_var($row[22], FILTER_VALIDATE_BOOLEAN) ? "SI" : $row[22];

        return [

            'individual_heating' => $heating,
            'energetic_certification' => $row[23] ?? null,

            'plants' => (int) $row[41],
            'bedrooms' => (int) $row[15],
            'bathrooms' => (int) $row[16],
            'floor' => (int) $row[24],

            'reformed' => self::validateBoolean($row[6]),
            'parking' => self::validateBoolean($row[17]),
            'second_hand' => self::validateBoolean($row[18]),
            'built_in_wardrobes' => self::validateBoolean($row[19]),
            'furnished' => self::validateBoolean($row[21]),
            'exterior' => self::validateBoolean($row[25]),
            'interior' => self::validateBoolean($row[26]),
            'elevator' => self::validateBoolean($row[27]),
            'terrace' => self::validateBoolean($row[32]),
            'storage_room' => self::validateBoolean($row[33]),
            'equipped_kitchen' => self::validateBoolean($row[34]),
            'air_conditioning' => self::validateBoolean($row[36]),
            'pool' => self::validateBoolean($row[37]),
            'garden' => self::validateBoolean($row[38]),
            'balcony' => self::validateBoolean($row[43]),
            'suitable_mobility' => self::validateBoolean($row[40]),
            'pets_allowed' => self::validateBoolean($row[42]),
        ];
    }

    protected static function validateBoolean(string $value): bool
    {
        return filter_var(mb_strtolower($value), FILTER_VALIDATE_BOOLEAN);
    }
}
