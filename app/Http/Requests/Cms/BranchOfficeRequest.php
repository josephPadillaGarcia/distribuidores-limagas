<?php

namespace App\Http\Requests\Cms;

use Illuminate\Foundation\Http\FormRequest;

class BranchOfficeRequest extends FormRequest
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
                'emails.*.name' => 'email',
                'phone_numbers.*.number' => 'teléfono',
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
            'name' => 'required|max:150',
            'direction' => 'required|max:150',
            'district'              => 'required',
            'department'            => 'required',
            'province'              => 'required',
            'emails.*.name' => 'required|email',
            'emails.*' => 'nullable|sometimes',
            'phone_numbers.*.number' => 'required',
            'phone_numbers.*' => 'nullable|sometimes',
        ];
        return $rules;
    }
}
