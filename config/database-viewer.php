<?php

return [
    'middleware' => [
        'web',
        \SaptarshiDy\DatabaseViewer\Http\Middleware\AuthorizeDatabaseViewer::class,
    ],

    'api_middleware' => [
        \SaptarshiDy\DatabaseViewer\Http\Middleware\EnsureFrontendRequestsAreStateful::class,
        \SaptarshiDy\DatabaseViewer\Http\Middleware\AuthorizeDatabaseViewer::class,
    ],
];