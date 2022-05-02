<?php

namespace App\Http\Controllers\Cms\Noticia;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Str;

use App\Repositories\CategoriesRepository;
use App\Category;
use App\Http\Requests\Cms\Blog\CategoryRequest;

class CategoriesController extends Controller
{

    public function index()
    {
        return view("admin.pages.noticia.categories");
    }

    public function get(Category $element)
    {
        return response()->json($element);
    }

    public function getAll(Request $request, CategoriesRepository $repo)
    {
        $q = $request->q;
        $headers = ["Id", "Nombre ES", "Nombre EN", "Slug URL ES", "Slug URL EN"];
        if ($q) {
            $elements = $repo->datatable($request->itemsPerPage, $q);
        } else {
            $elements = $repo->datatable($request->itemsPerPage);
        }
        $elements["headers"] = $headers;
        return response()->json($elements);
    }

    public function store(CategoryRequest $request)
    {
        $element = request(['name_es','name_en','slug_en','slug_es']);
        try {
            $element = Category::UpdateOrCreate($element);
            return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.create.success', ['name' => trans('custom.attribute.category')]) ], 200);
        } catch (\Exception $e) {
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.create.error', ['name' => trans('custom.attribute.category')]) ], 500);
        }
    }

    public function update(Category $element, CategoryRequest $request)
    {
        $request_element = request(['name_es','name_en','slug_en','slug_es']);
        try {
            $element = Category::UpdateOrCreate(['id' => $element->id], $request_element);
            return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.update.success', ['name' => trans('custom.attribute.category')]) ], 200);
        } catch (\Exception $e) {
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.update.error', ['name' => trans('custom.attribute.category')]) ], 500);
        }
    }

    public function destroy(Category $element)
    {
        try {
            $element->delete();
            return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.delete.success', ['name' => trans('custom.attribute.category')]) ], 200);
        } catch (\Exception $e) {
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.delete.error', ['name' => trans('custom.attribute.category')]) ], 500);
        }
    }
}
