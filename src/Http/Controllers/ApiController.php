<?php

namespace NextBuild\DatabaseViewer\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class ApiController
{
    function databases()
    {
        $databases = [];
        foreach (config('database.connections') as $key => $value) {
            try {
                $tables = DB::connection($key)->select('SHOW TABLES');
                $databases[] = $value['database']; // If the DB exists it will collected
            } catch (\Exception $e) {
                continue;
            }
        }
        return response()->json([
            'databases' => $databases,
        ], 200);
    }

    function tables($database) 
    {
        DB::statement("USE `$database`");
        $tables = DB::select('SHOW TABLES');
        $tables = array_map('current', $tables);

        return response()->json([
            'tables' => $tables,
        ], 200);
    }

    function table(Request $request, $database, $table)
    {

        $filter_column = $request->input('filter_column');
        $filter_operator = $request->input('filter_operator');
        $filter_query = $request->input('filter_query');

        $sort_column = $request->input('sort_column');
        $sort_order = $request->input('sort_order');

        DB::statement("USE `$database`");
        $columns = Schema::getColumnListing($table);
        $records = DB::table($table)
        ->when($filter_column && $filter_operator && $filter_query, function($q) use ($filter_column, $filter_operator, $filter_query) {
            return $q->where($filter_column, $filter_operator, $filter_query);
        })
        ->when($sort_column && $sort_order, function($q) use ($sort_column, $sort_order) {
            return $q->orderBy($sort_column, $sort_order);
        })
        ->paginate($request->paginate ?? 10);

        return response()->json([
            'columns' => $columns,
            'records' => $records,
        ], 200);
    }
}