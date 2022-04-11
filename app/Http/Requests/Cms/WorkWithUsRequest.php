<?php

namespace App\Http\Requests\Cms;

use Illuminate\Foundation\Http\FormRequest;

class WorkWithUsRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $rules = [
            'name' => 'required',
            //'title_en' => 'required|max:100',
        ];
        $rules = [
            'apellido' => 'required',
            //'title_en' => 'required|max:100',
        ];
        $rules = [
            'phone' => 'required|max:9',
            //'title_en' => 'required|max:100',
        ];
        switch ($this->method()) {
            case 'POST':
                $rules = array_merge(
                    $rules,
                    ['name_file' => 'required']
                );
                break;
        }
        $rules = [
            'puesto' => 'required',
            //'title_en' => 'required|max:100',
        ];
        return $rules;
    }
}
