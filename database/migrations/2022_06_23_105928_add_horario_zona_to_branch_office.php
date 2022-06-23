<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddHorarioZonaToBranchOffice extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('branch_offices', function (Blueprint $table) { 
            $table->text('horario')->nullable();
            $table->text('zona')->nullable();
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
            $table->string('horario')->nullable();
            $table->string('zona')->nullable();
        });
    }
}
