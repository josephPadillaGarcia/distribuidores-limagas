<?php

namespace App\Http\Controllers\Cms;

use App\Http\Controllers\Controller;
use App\Http\Requests\Cms\ServiceRequest;
use App\Http\Traits\CmsTrait;
use App\Service;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class ServicesController extends Controller
{
    use CmsTrait;

    public function index()
    {
        return view("pages.services.index");
    }

    public function create()
    {
        return view("pages.services.create");
    }

    public function getAll()
    {
        $elements = Service::orderBy('index', 'asc')->get();
        return response()->json($elements);
    }

    public function get($element)
    {
        $element = Service::where('slug_es', $element)->firstOrFail();
        return response()->json($element);
    }

    public function store(ServiceRequest $request)
    {
        $service = request(['title_es',"description_en","description_es",'title_en','slug_en','slug_es','active',
        "seo_keywords_es","seo_keywords_en","seo_description_es","seo_description_en","seo_title_es","seo_title_en",'url_video']);
        
        $fileName2 = $this->setFileName('ssi-', $request->file('image'));
        $storeFile2 = Storage::disk('public')->putFileAs('img/services/', $request->file('image'), $fileName2);

        $index = $this->getMaxIndex(Service::selectRaw('MAX(id),MAX(`index`) as "index"')->get());
        $service = array_merge($service, ["image" => $fileName2, "index" => $index]);

        if ($request->hasFile('seo_image')) {
            $imageName = $this->setFileName('si-', $request->file('seo_image'));
            $storeImage = Storage::disk('public')->putFileAs('img/services/', $request->file('seo_image'), $imageName);
            if (!$storeImage) {
                return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.errors.image') ], 500);
            }
            $service = array_merge($service, ["seo_image"=>$imageName]);
        }

        if ($request->hasFile('icon_white')) {
            $imageNameWhite = $this->setFileName('iw-', $request->file('icon_white'));
            $storeImageWhite = Storage::disk('public')->putFileAs('img/services/', $request->file('icon_white'), $imageNameWhite);
            if (!$storeImageWhite) {
                return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.errors.image') ], 500);
            }
            $service = array_merge($service, ["icon_white"=>$imageNameWhite]);
        }

        if ($request->hasFile('icon_color')) {
            $imageNameColor = $this->setFileName('ic-', $request->file('icon_color'));
            $storeImageColor = Storage::disk('public')->putFileAs('img/services/', $request->file('icon_color'), $imageNameColor);
            if (!$storeImageColor) {
                return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.errors.image') ], 500);
            }
            $service = array_merge($service, ["icon_colour"=>$imageNameColor]);
        }
        try {
            $serviceTR = Service::UpdateOrCreate($service);
            $request->session()->flash('success', trans('custom.message.create.success', ['name' => trans('custom.attribute.service')]));
            return response()->json(["route" => route('cms.services.index')]);
        } catch (\Exception $e) {
            Storage::disk('public')->delete('img/services/' . $fileName2);
            $request->session()->flash('error', trans('custom.message.create.error', ['name' => trans('custom.attribute.service')]));
            return response()->json(["route" => route('cms.services.index')], 500);
        }
    }

    public function update(ServiceRequest $request, $element)
    {
        $request_element = request(['title_es',"description_en","description_es",'title_en','slug_en','slug_es','active',
        "seo_keywords_es","seo_keywords_en","seo_description_es","seo_description_en","seo_title_es","seo_title_en",'url_video']);
        $serviceRegistered = Service::find($request->id);
        if ($request->hasFile('image')) {
            $imageName = $this->setFileName('ssi-', $request->file('image'));
            $storeImage = Storage::disk('public')->putFileAs('img/services/', $request->file('image'), $imageName);
            if (!$storeImage) {
                $request->session()->flash('error', trans('custom.message.update.error', ['name' => trans('custom.attribute.service')]));
                return response()->json(["route" => route('cms.content.catalogs.index')], 500);
            }
            $request_element = array_merge($request_element, ["image" => $imageName]);
        } else {
            $request_element = array_merge($request_element, ["image" => $serviceRegistered->image]);
        }

        if ($request->hasFile('image') && $serviceRegistered->image) {
            Storage::disk('public')->delete('img/services/' . $serviceRegistered->image);
        }

        if ($request->hasFile('seo_image')) {
            $seoImage = $this->setFileName('si-', $request->file('seo_image'));
            $storeSeoImage = Storage::disk('public')->putFileAs('img/services/', $request->file('seo_image'), $seoImage);
            if (!$storeSeoImage) {
                Storage::disk('public')->delete('img/services/'.$seoImage);
                $request->session()->flash('error', trans('custom.message.update.error', ['name' => trans('custom.attribute.service')]));
                return response()->json(["route" => route('cms.services.index')], 500);
            }
            $request_element = array_merge($request_element, ["seo_image" => $seoImage]);
        } else {
            $request_element = array_merge($request_element, ["seo_image" => $serviceRegistered->seo_image]);
        }

        if ($request->hasFile('seo_image') && $serviceRegistered->seo_image) {
            Storage::disk('public')->delete('img/services/'.$serviceRegistered->seo_image);
        }

        if ($request->hasFile('icon_color')) {
            $iconNameColour = $this->setFileName('iw-', $request->file('icon_color'));
            $storeIconColour = Storage::disk('public')->putFileAs('img/services/', $request->file('icon_color'), $iconNameColour);
            if (!$storeIconColour) {
                Storage::disk('public')->delete('img/services/'.$iconNameColour);
                $request->session()->flash('error', trans('custom.message.update.error', ['name' => trans('custom.attribute.project')]));
                return response()->json(["route" => route('cms.services.index')], 500);
            }
            $request_element = array_merge($request_element, ["icon_colour" => $iconNameColour]);
        } else {
            $request_element = array_merge($request_element, ["icon_colour" => $serviceRegistered->icon_colour]);
        }
        if ($request->hasFile('icon_color') && $serviceRegistered->icon_colour) {
            Storage::disk('public')->delete('img/services/'.$serviceRegistered->icon_colour);
        }

        if ($request->hasFile('icon_white')) {
            $iconWhiteNameColour = $this->setFileName('iw-', $request->file('icon_white'));
            $storeIconColour = Storage::disk('public')->putFileAs('img/services/', $request->file('icon_white'), $iconWhiteNameColour);
            if (!$storeIconColour) {
                Storage::disk('public')->delete('img/services/'.$iconWhiteNameColour);
                $request->session()->flash('error', trans('custom.message.update.error', ['name' => trans('custom.attribute.project')]));
                return response()->json(["route" => route('cms.services.index')], 500);
            }
            $request_element = array_merge($request_element, ["icon_white" => $iconWhiteNameColour]);
        } else {
            $request_element = array_merge($request_element, ["icon_white" => $serviceRegistered->icon_white]);
        }
        if ($request->hasFile('icon_white') && $serviceRegistered->icon_white) {
            Storage::disk('public')->delete('img/services/'.$serviceRegistered->icon_white);
        }

        try {
            $element = Service::UpdateOrCreate(["id" => $serviceRegistered->id], $request_element);
            $request->session()->flash('success', trans('custom.message.update.success', ['name' => trans('custom.attribute.service')]));
            return response()->json(["route" => route('cms.services.index')]);
        } catch (\Exception $e) {
            $request->session()->flash('error', trans('custom.message.update.error', ['name' => trans('custom.attribute.service')]));
            return response()->json(["route" => route('cms.services.index')], 500);
        }
    }

    public function destroy(Service $element)
    {
        $image = $element->image;
        $icon_white = $element->icon_white;
        $icon_colour = $element->icon_colour;
        try {
            $destroy = $element->delete();
            if ($destroy) {
                Storage::disk('public')->delete('img/services/' . $image);
                Storage::disk('public')->delete('img/services/' . $icon_white);
                Storage::disk('public')->delete('img/services/' . $icon_colour);
            }
            return response()->json(['title' => trans('custom.title.success'), 'message' => trans('custom.message.delete.success', ['name' => trans('custom.attribute.service')])], 200);
        } catch (\Exception $e) {
            return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.message.delete.error', ['name' => trans('custom.attribute.service')])], 500);
        }
    }

    public function edit($element)
    {
        $element = Service::where('slug_es', $element)->firstOrFail();
        return view("pages.services.edit", compact('element'));
    }

    public function read($element)
    {
        $element = Service::where('slug_es', $element)->firstOrFail();
        return view("pages.services.read", compact('element'));
    }

    public function order(Request $request)
    {
        $elements = $request->all();
        try {
            for ($i = 0; $i < count($elements); $i++) {
                $slide = Service::UpdateOrCreate(["id" => $elements[$i]["id"]], ["index" => $i + 1]);
            }
            return response()->json(['title' => trans('custom.title.success'), 'message' => trans('custom.message.update.success', ['name' => trans('custom.attribute.service')])], 200);
        } catch (\Exception $e) {
            return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.message.update.error', ['name' => trans('custom.attribute.service')])], 500);
        }
    }

}
