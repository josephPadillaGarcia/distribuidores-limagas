<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSliderTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('slider', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('image_es', 100);
            $table->string('image_responsive_es', 100);
            $table->string('image_en', 100);
            $table->string('image_responsive_en', 100);
            $table->datetime('from')->nullable();
            $table->datetime('to')->nullable();
            $table->integer('index');
            $table->text('link')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('slider');
    }
}
