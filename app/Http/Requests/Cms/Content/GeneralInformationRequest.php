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

    /*public function attributes()
    {
        return [
                'phone_numbers.*.number' => 'teléfono',
                'whatsapp_numbers.*.number' => 'whatsapp',
                'phone_numbers.*.department' => 'departamento',
                'whatsapp_numbers.*.department' => 'departamento',
                'whatsapp_number' => 'número whatsapp',
                'link_work_with_us' => 'link únete a nuestro equipo',
                'api_url_tracking' => 'link envio cliente número tracking'
            ];
    }*/

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'facebook_link' => 'nullable|sometimes|url',
            'instagram_link' => 'nullable|sometimes|url',
            'youtube_link' => 'nullable|sometimes|url',
            'linkedin_link' => 'nullable|sometimes|url',
        ];
    }
}
