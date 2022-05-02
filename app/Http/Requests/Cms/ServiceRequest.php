<?php

namespace App\Http\Requests\Cms;

use Illuminate\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;

class ServiceRequest extends FormRequest
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
            //'title_es' => 'required|max:100',
            'title_es' => ['required',Rule::unique('services')->ignore($this->id),'max:150'],
            'excerpt_es' => 'required',
            'excerpt_en' => 'required',
            'seo_image' => 'sometimes|required',
            'seo_title_es' => 'sometimes|max:60',
            'seo_title_en' => 'sometimes|max:60',
            'seo_keywords_es' => 'sometimes',
            'seo_keywords_en' => 'sometimes',
            'seo_description_es' => 'sometimes|max:160',
            'seo_description_en' => 'sometimes|max:160',
            'title_en' => ['required',Rule::unique('services')->ignore($this->id),'max:150'],
        ];
        $rules = array_merge(
            $rules,
            [
                'description_es' => 'required',
                'description_en' => 'required'
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
