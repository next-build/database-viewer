<?php

return [

    'prefix' => 'database-viewer',

    'middleware' => [
        'web',
        \NextBuild\DatabaseViewer\Http\Middleware\AuthorizeDatabaseViewer::class,
    ],

    'api_middleware' => [
        \NextBuild\DatabaseViewer\Http\Middleware\AuthorizeDatabaseViewer::class,
        \NextBuild\DatabaseViewer\Http\Middleware\EnsureFrontendRequestsAreStateful::class,
    ],

];