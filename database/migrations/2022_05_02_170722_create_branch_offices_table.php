<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBranchOfficesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('branch_offices', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name')->nullable();
            $table->string('code_ubigeo');
            $table->foreign('code_ubigeo')->references('code_ubigeo')->on('master_ubigeo');
            $table->json('emails')->nullable();
            $table->json('phone_numbers')->nullable();
            $table->text('direction')->nullable();
            $table->text('iframe')->nullable();
            $table->text('schedule')->nullable();
            $table->boolean('show')->default(true);
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
        Schema::dropIfExists('branch_offices');
    }
}
