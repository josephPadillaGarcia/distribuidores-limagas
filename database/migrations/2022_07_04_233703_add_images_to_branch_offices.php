<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddImagesToBranchOffices extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('branch_offices', function (Blueprint $table) {
            $table->string('img_slider_1')->nullable();
            $table->string('img_slider_2')->nullable();
            $table->string('img_slider_3')->nullable();
            $table->string('img_slider_4')->nullable();
            $table->string('img_slider_5')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('branch_offices', function (Blueprint $table) {
            $table->string('img_slider_1')->nullable();
            $table->string('img_slider_2')->nullable();
            $table->string('img_slider_3')->nullable();
            $table->string('img_slider_4')->nullable();
            $table->string('img_slider_5')->nullable();
        });
    }
}
