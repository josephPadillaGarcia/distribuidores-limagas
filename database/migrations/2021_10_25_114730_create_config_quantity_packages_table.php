<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateConfigQuantityPackagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('config_quantity_packages', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->text('name_es');
            $table->text('name_en')->nullable();
            $table->boolean('active')->default(true);
            $table->integer('index');
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
        Schema::dropIfExists('config_quantity_packages');
    }
}
