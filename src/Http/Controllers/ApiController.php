<?php

namespace SaptarshiDy\DatabaseViewer\Http\Controllers;

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
        DB::statement("USE `$database`");
        $columns = Schema::getColumnListing($table);
        $records = DB::table($table)->paginate(10);

        return response()->json([
            'columns' => $columns,
            'records' => $records,
        ], 200);
    }
}