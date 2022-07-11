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
                'num_what.*.numwhat' => 'número',
                
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
            'num_what.*.numwhat' => 'required',
            'num_what.*.' => 'nullable|sometimes',
        ];
        switch ($this->method()) {
            case 'POST':
                $rules = array_merge(
                    $rules,
                    ['img_slider_1' => 'required'],                    
                    ['img_slider_2' => 'sometimes|required'],                   
                    ['img_slider_3' => 'sometimes|required'],                   
                    ['img_slider_4' => 'sometimes|required'],                   
                    ['img_slider_5' => 'sometimes|required'],
                );
                break;
            case 'PUT':
                $rules = array_merge(
                    $rules,
                    ['img_slider_1' => 'sometimes|required'],
                    ['img_slider_2' => 'sometimes|required'],
                    ['img_slider_3' => 'sometimes|required'],
                    ['img_slider_4' => 'sometimes|required'],
                    ['img_slider_5' => 'sometimes|required']
                );
                break;
        }
        return $rules;
    }
}
