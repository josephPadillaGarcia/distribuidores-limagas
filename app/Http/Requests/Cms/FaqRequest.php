<?php

namespace App\Http\Requests\Cms;

use Illuminate\Foundation\Http\FormRequest;

class FaqRequest extends FormRequest
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

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $rules = [
            'question' => 'required',
            'question_es' => 'required',
            'question_en' => 'required',
        ];
        $rules = array_merge(
            $rules,
            [
                'description' => 'required',
                'description_es' => 'required',
                'description_en' => 'required',
            ]
        );

        return $rules;
    }
}
