<?php

return [

    'prefix' => 'database-viewer',

    'middleware' => [
        'web',
        \SaptarshiDy\DatabaseViewer\Http\Middleware\AuthorizeDatabaseViewer::class,
    ],

    'api_middleware' => [
        \SaptarshiDy\DatabaseViewer\Http\Middleware\AuthorizeDatabaseViewer::class,
        \SaptarshiDy\DatabaseViewer\Http\Middleware\EnsureFrontendRequestsAreStateful::class,
    ],

];