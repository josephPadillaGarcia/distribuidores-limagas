<?php

namespace App\Http\Requests\Cms\Content;

use Illuminate\Foundation\Http\FormRequest;

class GeneralInformationRequest extends FormRequest
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
                'whatsapp_numbers.*.department' => 'departamento',*/
                'whatsapp_number' => 'número whatsapp',
                'link_work_with_us' => 'link únete a nuestro equipo',
                'api_url_tracking' => 'link envio cliente número tracking'
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
            'direction' => 'required',
            'book_link' => 'nullable|sometimes|url',
            'api_url_tracking' => 'nullable|sometimes|url',
            'contact_number' => 'nullable|digits:9',
            'api_link' => 'nullable|sometimes|url',
            'customers_link' => 'nullable|sometimes|url',
            'whatsapp_number' => 'nullable|digits:9',
            'link_work_with_us' => 'nullable|sometimes|url',
        ];
    }
}
