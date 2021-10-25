<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInfoAppTrackingTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('info_app_tracking', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->text('description_es')->nullable();
            $table->text('description_en')->nullable();
            $table->string('title_es');
            $table->string('title_en')->nullable();
            $table->text('link_android')->nullable();
            $table->text('link_ios')->nullable();
            $table->string('image', 100);
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
        Schema::dropIfExists('info_app_tracking');
    }
}
