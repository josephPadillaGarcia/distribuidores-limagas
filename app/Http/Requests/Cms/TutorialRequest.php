<?php

namespace App\Http\Requests\Cms;

use Illuminate\Foundation\Http\FormRequest;

class TutorialRequest extends FormRequest
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

    public function attributes()
    {
        return [
                'link' => 'video youtube'
            ];
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $rules = [
            'title_es' => 'required',
            'link' => 'required|url'
        ];
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
