<?php

namespace App\Http\Controllers\Api;

use App\EmailDestination;
use App\Faq;
use Illuminate\Http\Request;
use App\Http\Controllers\Api\BaseController;
use App\Http\Requests\Api\Post\LeadRequest;
use App\Lead;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class PostController extends BaseController
{
    private $captchaSecret = "6LdqIEwfAAAAALNXsaTc3k1kEAFfutd1sPIVLZs2";

    public function updateLike(Request $request , Faq $like)
    {

        try {
            $like->increment('like');

            return  response()->json($like, 200);
        } catch (\Exception $e) {
            return  response()->json('malo', 500);
        }

    }

    public function updateDislike(Request $request , Faq $like)
    {

        try {
            $like->increment('dislike');

            return  response()->json($like, 200);
        } catch (\Exception $e) {
            return  response()->json('malo', 500);
        }

    }

    public function lead(LeadRequest $request){
        $el = request(['name','email','mobile','business','quantity_packages','service_id']);

        try {

            /*$emails = EmailDestination::where('type','traditional')->first();
            if($emails){
                $cuerpoMensaje = $this->buildBodyMsg($request);

                $data = [
                    "destinatarios" => $emails->leads_traditional,
                    "asuntoMensaje" => config('services.mail_from_name'),
                    "cuerpoMensajeHtml" => $cuerpoMensaje,
                ];

                $this->sendMessage($data);
            }*/
            $el = Lead::UpdateOrCreate($el);

            return $this->sendResponse([], trans('custom.title.success'), 200);
            
        } catch (\Exception $e) {
            return $this->sendError(trans('custom.title.error'), [], 500);
        }
    }

    public function captchaverify(Request $request)
    {
        $recaptcha = $request->g_recaptcha_response;
        $url = 'https://www.google.com/recaptcha/api/siteverify';
        $data = array(
            'secret' => $this->captchaSecret,
            'response' => $recaptcha
        );
        $options = array(
            'http' => array(
                'method' => 'POST',
                'header'  => 'Content-type: application/x-www-form-urlencoded',
                'content' => http_build_query($data)
            )
        );
        $context = stream_context_create($options);
        $verify = file_get_contents($url, false, $context);
        $captcha_success = json_decode($verify);
        if($captcha_success){
            return $this->sendResponse([], trans('custom.title.success'), 200);
        }
        else{
            return $this->sendError(trans('custom.title.error'), [], 500);
        }
    }

    public function buildBodyMsg(Request $request) {
        $body = "<table>";

        $body .= "<tbody>";

        $body .= "<tr><td>Nombres y Apellidos</td><td><a>" . $request->name . "</a></td></tr>";

        $body .= "<tr><td>Correo electrónico</td><td>" . $request->email . "</td></tr>";

        $body .= "<tr><td>Celular</td><td>" . $request->mobile . "</td></tr>";

        $body .= "<tr><td>Empresa</td><td>" . $request->business . "</td></tr>";

        $body .= "<tr><td>Consulta</td>";

        if(!$request->service_id && !$request->quantity_packages) {
            $body .= "<td>No registrado</td></tr>";
        } else {
            $body .= "<td>";

            if($request->service_id) {
                $body .= "Servicio:" . $request->service_id . "<br>";
            }

            if($request->quantity_packages) {
                $body .= "Cantidad de paquetes:" . $request->quantity_packages;
            }

            $body .= "</td></tr>";
        }

        return $body;
    }

    public function sendMessage($data){
        $curl = curl_init();
        $data = array(
            'Destinatarios'     => $data["destinatarios"],
            'AsuntoMensaje'     => $data["asuntoMensaje"],
            'CuerpoMensajeHtml' => $data["cuerpoMensajeHtml"],
        );

        $make_call = $this->callAPI('POST', config('services.mail_dinet_api_url'), json_encode($data));

        if($make_call == 200) {
            return response()->json(["success" => true], 200);
        } else {
            return response()->json(["success" => false], 500);
        }
    }

    function callAPI($method, $url, $data){
        $curl = curl_init();
        switch ($method){
           case "POST":
              curl_setopt($curl, CURLOPT_POST, 1);
              if ($data)
                 curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
              break;
           case "PUT":
              curl_setopt($curl, CURLOPT_CUSTOMREQUEST, "PUT");
              if ($data)
                 curl_setopt($curl, CURLOPT_POSTFIELDS, $data);                                                                 
              break;
           default:
              if ($data)
                 $url = sprintf("%s?%s", $url, http_build_query($data));
        }
        // OPTIONS:
        curl_setopt($curl, CURLOPT_URL, $url);
        curl_setopt($curl, CURLOPT_HTTPHEADER, array(
           'X-AUTH-TOKEN: ' . config('services.mail_dinet_token'),
           'Content-Type: application/json',
        ));
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
        // EXECUTE:

        $result = curl_exec($curl);
        $info = curl_getinfo($curl);
        if(!$result){ 
            curl_close($curl);

            return $info["http_code"];
        }
        curl_close($curl);
        return $info["http_code"];
     }

}
