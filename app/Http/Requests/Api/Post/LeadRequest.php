<?php

namespace App\Http\Requests\Api\Post;

use Illuminate\Foundation\Http\FormRequest;

class LeadRequest extends FormRequest
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
            'mobile' => 'celular',
            'business' => 'empresa',
            'quantity_packages' => 'cantidad estimada de paquetes mensuales'
        ];
    }

    public function messages(){
      return [
          'accepted.accepted' => 'Debe aceptar nuestra política de privacidad.',
          'email.email' => 'Por favor ingrese un :attribute válido.',
          'name.required' => 'Por favor ingrese su nombre y apellidos.',
          'service_id.required' => 'Por favor ingrese un servicio.',
          'required' => 'Por favor ingrese su :attribute.',
          'mobile.required' => 'Por favor ingrese su celular.',
          'datosvacios.required' => 'Por favor llenar todos los campos requeridos',
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
          'name' => 'required|max:100',
          'email' =>  'required|max:100|email',
          'mobile' => 'required|digits:9',
          'business' => 'required',
          'service_id' => 'required',
          'quantity_packages' => 'required',
          'accepted' => 'accepted',
          'datosvacios' => 'required',
        ];
    }
}
