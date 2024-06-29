<?php

use SaptarshiDy\DatabaseViewer;

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;


Route::prefix(config('database-viewer.prefix', 'database-viewer'))
->middleware(config('database-viewer.middleware', []))
->group(function () {

    Route::get('/', function() {
        return view('database-viewer::dashboard');
    })->name('database-viewer.dashboard');

});



