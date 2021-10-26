<?php

namespace App\Http\Requests\Cms\Export;

use Illuminate\Foundation\Http\FormRequest;

class LeadExportExcel extends FormRequest
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
        return [
            'from' => 'required|date_format:H:i d-m-Y',
            'to' => 'required|date_format:H:i d-m-Y'
        ];
    }
}
