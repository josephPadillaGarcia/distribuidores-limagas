<?php

namespace App\Exports;

use Carbon\Carbon;
use Maatwebsite\Excel\Concerns\FromView;
use Illuminate\Contracts\Support\Responsable;
use Illuminate\Contracts\View\View;
use Maatwebsite\Excel\Excel;

use Maatwebsite\Excel\Concerns\Exportable;

class EncuestasExport implements FromView, Responsable
{
    use Exportable;

    private $fileName = 'Dinet Encuestas.xlsx';
    private $writerType = Excel::XLSX;

    private $start;
    private $end;
    private $encuestas;

    public function __construct($start = null, $end = null, $encuestas)
    {
        $this->start = $start;
        $this->end = $end;
        $this->encuestas = $encuestas;
    }


    private $headers = [
        'Content-Type' => 'text/xlsx',
    ];
    /**
    * @return \Illuminate\Support\Collection
    */
    public function view(): View
    {
        return view('admin.exports.encuestas', [
            'today' =>  (Carbon::now())->format('H:i d-m-Y'),
            'encuestas' => $this->encuestas,
            "start" => $this->start,
            "end" => $this->end
        ]);
    }
}
