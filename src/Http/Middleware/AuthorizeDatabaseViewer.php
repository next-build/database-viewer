<?php

namespace SaptarshiDy\DatabaseViewer\Http\Middleware;

use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Gate;
use SaptarshiDy\DatabaseViewer\Facades\DatabaseViewer;

class AuthorizeDatabaseViewer
{
    public function handle($request, $next)
    {
        // if (
        //     config('log-viewer.require_auth_in_production', false)
        //     && App::isProduction()
        //     && ! Gate::has('viewLogViewer')
        //     && ! DatabaseViewer::hasAuthCallback()
        // ) {
        //     abort(403);
        // }
        
        // DatabaseViewer::auth();

        return $next($request);
    }
}
