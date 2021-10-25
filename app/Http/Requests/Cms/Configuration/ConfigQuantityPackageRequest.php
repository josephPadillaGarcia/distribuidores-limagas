<?php

namespace App\Http\Requests\Cms\Configuration;

use Illuminate\Foundation\Http\FormRequest;

class ConfigQuantityPackageRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    public function messages(){
        return [
        ];
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name_es' => 'required|max:150',
        ];
    }
}