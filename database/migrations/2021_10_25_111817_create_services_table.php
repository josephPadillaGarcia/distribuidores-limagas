<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateServicesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('services', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->text('description_es')->nullable();
            $table->text('description_en')->nullable();
            $table->text('excerpt_es')->nullable();
            $table->text('excerpt_en')->nullable();
            $table->string('title_es',150);
            $table->string('title_en',150)->nullable();
            $table->string('slug_en',170);
            $table->string('slug_es',170)->nullable();
            $table->string('image', 100);
            $table->string('icon_white', 100)->nullable();
            $table->string('icon_colour', 100)->nullable();
            $table->integer('index');
            $table->boolean('active')->default(true);
            $table->text('url_video')->nullable();
            $table->string('seo_title_en')->nullable();
            $table->string('seo_title_es')->nullable();
            $table->string('seo_description_es')->nullable();
            $table->string('seo_description_en')->nullable();
            $table->text('seo_keywords_es')->nullable();
            $table->text('seo_keywords_en')->nullable();
            $table->string('seo_image',100)->nullable();
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
        Schema::dropIfExists('services');
    }
}
