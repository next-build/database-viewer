<?php

use SaptarshiDy\DatabaseViewer;

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

// Import Controllers
use SaptarshiDy\DatabaseViewer\Http\Controllers\ApiController;


Route::middleware(config('database-viewer.api_middleware', []))->group(function () {

    Route::get('database-viewer/api/databases', [ApiController::class, 'databases'])->name('database-viewer.databases');
    Route::get('database-viewer/api/{database}/tables', [ApiController::class, 'tables'])->name('database-viewer.tables');
    Route::get('database-viewer/api/{database}/{table}', [ApiController::class, 'table'])->name('database-viewer.table');  

});