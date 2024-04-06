<?php

use SaptarshiDy\DatabaseViewer;

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;


Route::get('database-viewer', function() {
    return view('log-viewer::dashboard', []);
})->name('database-viewer.dashboard');

Route::get('database-viewer/{table}', function($table) {

    $column = Schema::getColumnListing($table);
    $table_data = DB::table($table)->get();

    return view('log-viewer::table', [
        'columns' => $column,
        'tableData' => $table_data,
    ]);

})->name('database-viewer.table.view');

// Route::get('database-viewer', function () {
//     config('database.connections');
//     $tables = DB::select('SHOW TABLES');
//     foreach ($tables as $key => $table) {
//         $table->name = $table->Tables_in_packages;
//         $table->url = route('database-viewer.table', $table->Tables_in_packages);
//     }
//     return view('log-viewer::index', compact('tables'));
// })->name('database-viewer.index');

// Route::get('database-viewer/{table}', function ($table) {

//     $column = Schema::getColumnListing($table);
//     $values = DB::table($table)->get();

//     return $column;

//     return view('log-viewer::index', [
//         'table' => $table
//     ]);

// })->name('database-viewer.table');