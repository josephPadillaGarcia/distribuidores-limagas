<?php

namespace App\Http\Requests\Cms;

use Illuminate\Foundation\Http\FormRequest;

class AppTrackingRequest extends FormRequest
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
                /*'phone_numbers.*.number' => 'teléfono',
                'whatsapp_numbers.*.number' => 'whatsapp',
                'phone_numbers.*.department' => 'departamento',
                'whatsapp_numbers.*.department' => 'departamento',
                'whatsapp_number' => 'número whatsapp'*/
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
            'image' => 'sometimes|required',
            'title_es' => 'required',
            'link_ios' => 'sometimes|url',
            'link_android' => 'sometimes|url',
        ];
        /*switch ($this->method()) {
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
        }*/
        return $rules;
    }
}
