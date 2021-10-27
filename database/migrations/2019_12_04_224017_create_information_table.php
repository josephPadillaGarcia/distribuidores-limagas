<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInformationTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('information', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->text('customers_link')->nullable();
            $table->text('book_link')->nullable();
            $table->string('contact_number',20)->nullable();
            $table->text('direction');
            $table->string('whatsapp_number',15)->nullable();
            $table->string('name_api')->nullable();
            $table->text('api_link')->nullable();
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
        Schema::dropIfExists('information');
    }
}
