<table style="border: 1px solid black;">
    <!-- HEAD -->
    <thead>
     <tr>
      <th
       style="background-color:#0D2355;color:#FFFFFF;font-size:14px;font-weight:bold;text-align:center;vertical-align:middle;border: 1px solid black;"
       colspan="2">Fecha de Exportación</th>
      <th style=" font-size:13px;font-weight:bold;text-align:center;vertical-align:middle;border: 1px solid black;">
       {{ $today }}</th>
     </tr>
     @if($start && $end)
     <tr>
      <th
       style="background-color:#0D2355;color:#FFFFFF;font-size:14px;font-weight:bold;text-align:center;vertical-align:middle;border: 1px solid black;"
       colspan="2">Rango de Exportación</th>
      <th style=" font-size:13px;font-weight:bold;text-align:center;vertical-align:middle;border: 1px solid black;">
      {{ \Carbon\Carbon::createFromFormat("Y-m-d H:i:s",$start )->isoFormat('llll') }} - {{ \Carbon\Carbon::createFromFormat("Y-m-d H:i:s",$end )->isoFormat('llll') }}</th>
     </tr>
     @endif
     <tr>
      <th
       style="background-color:#0D2355;color:#FFFFFF;font-size:14px;font-weight:bold;text-align:center;vertical-align:middle;border: 1px solid black;"
       colspan="2">Cantidad de encuestas</th>
      <th style=" font-size:13px;font-weight:bold;text-align:center;vertical-align:middle;border: 1px solid black;">
       {{ count($encuestas) }}</th>
     </tr>
    </thead>
    <!-- FIN DEL HEAD -->

   </table>
   <table style="border: 1px solid black;">
    <thead>
     <tr>
      <th
       style="background-color:#0D2355;color:#FFFFFF;width:7px;font-size:14px;font-weight:bold;text-align:center;vertical-align:middle;border: 1px solid black;">
       #</th>
      <th
       style="background-color:#0D2355;color:#FFFFFF;width:30px;font-size:14px;font-weight:bold;text-align:center;vertical-align:middle;border: 1px solid black;">
       Num. face</th>
      <th
       style="background-color:#0D2355;color:#FFFFFF;width:30px;font-size:14px;font-weight:bold;text-align:center;vertical-align:middle;border: 1px solid black;">
       Respuesta</th>
      <th
       style="background-color:#0D2355;color:#FFFFFF;width:30px;font-size:14px;font-weight:bold;text-align:center;vertical-align:middle;border: 1px solid black;">
       Registrado el</th>
     </tr>
    </thead>
    <tbody>
     @foreach($encuestas as $key => $encuesta)
     <tr>
      <td style="text-align:center;vertical-align:middle;border: 1px solid black;">{{ $key + 1 }}</td>
      <td style="text-align:center;vertical-align:middle;border: 1px solid black;">{{ $encuesta->num_face ? $encuesta->num_face : 'No registrado' }}</td>
      <td style="text-align:center;vertical-align:middle;border: 1px solid black;">{{ $encuesta->respuesta ? $encuesta->respuesta : 'No registrado' }}</td>
      <td style="text-align:center;vertical-align:middle;border: 1px solid black;">{{ $encuesta->created_at_format }}</td>
     </tr>
     @endforeach
    </tbody>
   </table>
   