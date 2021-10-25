<?php

namespace App\Http\Controllers\Cms\Configuration\General;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\Cms\Configuration\ConfigQuantityPackageRequest;
use App\Http\Traits\CmsTrait;
use App\ConfigQuantityPackage;

class ConfigQuantityPackageController extends Controller
{
    use CmsTrait;

    public function getAll()
    {
        $elements = ConfigQuantityPackage::orderBy('index', 'asc')->get();
        foreach ($elements as $el) {
            $data[] = array(
                "id" => $el["id"],
                "name_es" => $el["name_es"],
                "active" => $el["active"] ? 'Sí' : 'No',
            );
        }
        if (isset($data)) {
            $elements["data"] = '';
            $elements["data"] = $data;
        }
        $headers = ["Id", "Valor", "Mostrar en la Web"];
        $elements["headers"] = $headers;
        return response()->json($elements);
    }

    public function store(ConfigQuantityPackageRequest $request)
    {
        $element = request(["name_es","name_en","active"]);
        $index = $this->getMaxIndex(ConfigQuantityPackage::selectRaw('MAX(id),MAX(`index`) as "index"')->get());
        $element = array_merge($element, ["index" => $index]);
        try {
            $element = ConfigQuantityPackage::UpdateOrCreate($element);
            return response()->json(['title' => trans('custom.title.success'), 'message' => trans('custom.message.create.success', ['name' => trans('custom.attribute.schedule')])], 200);
        } catch (\Exception $e) {
            return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.message.create.error', ['name' => trans('custom.attribute.schedule')])], 500);
        }
    }

    public function order(Request $request)
    {
        $elements = $request->all();
        try {
            for ($i = 0; $i < count($elements); $i++) {
                $element = ConfigQuantityPackage::UpdateOrCreate(["id" => $elements[$i]["id"]], ["index" => $i + 1]);
            }
            return response()->json(['title' => trans('custom.title.success'), 'message' => trans('custom.message.update.success', ['name' => trans('custom.attribute.schedule')])], 200);
        } catch (\Exception $e) {
            return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.message.update.error', ['name' => trans('custom.attribute.schedule')])], 500);
        }
    }

    public function destroy(ConfigQuantityPackage $element)
    {
        try {
            $element = $element->delete();
            return response()->json(['title' => trans('custom.title.success'), 'message' => trans('custom.message.delete.success', ['name' => trans('custom.attribute.schedule')])], 200);
        } catch (\Exception $e) {
            return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.message.delete.error', ['name' => trans('custom.attribute.schedule')])], 500);
        }
    }

    public function get(ConfigQuantityPackage $element)
    {
        return response()->json($element);
    }

    public function update(ConfigQuantityPackage $element, ConfigQuantityPackageRequest $request)
    {
        $request_el = request(["name_es","name_en","active"]);
        try {
            $element = ConfigQuantityPackage::UpdateOrCreate(["id" => $element->id], $request_el);
            return response()->json(['title' => trans('custom.title.success'), 'message' => trans('custom.message.update.success', ['name' => trans('custom.attribute.schedule')])], 200);
        } catch (\Exception $e) {
            return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.message.update.error', ['name' => trans('custom.attribute.schedule')])], 500);
        }
    }
}
