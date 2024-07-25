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
        Schema::create('accommodation_locations', function (Blueprint $table) {
            $table->id();
            $table->foreignId('accommodation_id')
                ->unique()
                ->constrained();
            $table->float('latitude');
            $table->float('longitude');
            $table->string('province');
            $table->string('city');
            $table->string('street');
            $table->string('district');
            $table->string('neighborhood');
            $table->string('address');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('accommodation_locations');
    }
};
