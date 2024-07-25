<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('accommodations', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('csv_id');
            $table->string('title');
            $table->string('advertiser');
            $table->text('description');
            $table->string('phones');
            $table->enum('type', Config::get('constants.accommodation.types'));
            $table->float('price');
            $table->unsignedBigInteger('meters');
            $table->float('meter_per_price');
            $table->unsignedBigInteger('useful_square_meters');
            $table->date('register_at')->nullable();
            $table->unsignedSmallInteger('built_in')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('accommodations');
    }
};
