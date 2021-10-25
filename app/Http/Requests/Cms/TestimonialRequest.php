<?php

namespace App\Http\Requests\Cms;

use Illuminate\Foundation\Http\FormRequest;

class TestimonialRequest extends FormRequest
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
            'title_es' => 'required|max:100',
            //'title_en' => 'required|max:100',
        ];
        $rules = array_merge(
            $rules,
            [
                'description_es' => 'required',
                //'description_en' => 'required'
            ]
        );
        switch ($this->method()) {
            case 'POST':
                $rules = array_merge(
                    $rules,
                    ['image' => 'required']
                );
                break;
            case 'PUT':
                $rules = array_merge(
                    $rules,
                    ['image' => 'sometimes|required']
                );
                break;
        }
        return $rules;
    }
}
