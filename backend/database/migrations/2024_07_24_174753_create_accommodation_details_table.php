<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('accommodation_details', function (Blueprint $table) {
            $table->id();
            $table->foreignId('accommodation_id')
                ->unique()
                ->constrained();
            $table->string('individual_heating')->nullable();
            $table->string('energetic_certification')->nullable();
            $table->boolean('plants')->default(0);
            $table->tinyInteger('bedrooms')->default(0);
            $table->tinyInteger('bathrooms')->default(0);
            $table->tinyInteger('floor')->default(0);
            $table->boolean('reformed');
            $table->boolean('parking');
            $table->boolean('second_hand');
            $table->boolean('built_in_wardrobes');
            $table->boolean('furnished');
            $table->boolean('exterior');
            $table->boolean('interior');
            $table->boolean('elevator');
            $table->boolean('terrace');
            $table->boolean('storage_room');
            $table->boolean('pool');
            $table->boolean('garden');
            $table->boolean('balcony');
            $table->boolean('equipped_kitchen');
            $table->boolean('air_conditioning');
            $table->boolean('suitable_mobility');
            $table->boolean('pets_allowed');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('accommodation_details');
    }
};
