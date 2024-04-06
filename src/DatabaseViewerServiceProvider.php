<?php

namespace SaptarshiDy\DatabaseViewer;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Str;

use SaptarshiDy\DatabaseViewer\Console\Commands\PublishCommand;

class DatabaseViewerServiceProvider extends ServiceProvider 
{
    private string $name = 'database-viewer';
    
    public static function basePath(string $path): string
    {
        return __DIR__.'/..'.$path;
    }

    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->app->bind('database-viewer', function ($app) {
            return new \SaptarshiDy\DatabaseViewer\DatabaseViewer();
        });

        if ($this->app->runningInConsole()) {
            // registering the command
            $this->commands([
                PublishCommand::class,
            ]);
        }

        // Route::group([
        //     'domain' => null,
        //     'prefix' => Str::finish('database-viewer', '/').'api',
        //     'namespace' => 'SaptarshiDy\DatabaseViewer\Http\Controllers',
        //     'middleware' => null,
        // ], function () {
            
        // });

        // Route::group([
        //     'domain' => null,
        //     'prefix' => 'database-viewer',
        //     'namespace' => 'SaptarshiDy\DatabaseViewer\Http\Controllers',
        //     'middleware' => null,
        // ], function () {
            
        // });

        $this->loadRoutesFrom(__DIR__.'/../routes/web.php');
        $this->loadRoutesFrom(__DIR__.'/../routes/api.php');

        
        

        
    }

    /**
     * 
     */
    public function boot(): void
    {
        $this->registerRoutes();
        $this->registerResources();
        $this->defineAssetPublishing();
    }

    /**
     * Register the Log Viewer routes.
     *
     * @return void
     */
    protected function registerRoutes()
    {
        // For Web
        Route::group([
            // 'domain' => config('log-viewer.route_domain', null),
            // 'prefix' => config('log-viewer.route_path'),
            // 'namespace' => 'Opcodes\LogViewer\Http\Controllers',
            // 'middleware' => config('log-viewer.middleware', null),
        ], function () {
            $this->loadRoutesFrom(self::basePath('/routes/web.php'));
        });

        // For Apis
        // Route::group([
        //     'domain' => config('log-viewer.route_domain', null),
        //     'prefix' => Str::finish(config('log-viewer.route_path'), '/').'api',
        //     'namespace' => 'Opcodes\LogViewer\Http\Controllers',
        //     'middleware' => config('log-viewer.api_middleware', null),
        // ], function () {
        //     $this->loadRoutesFrom(self::basePath('/routes/api.php'));
        // });
    }

    protected function registerResources()
    {
        $this->loadViewsFrom(self::basePath('/resources/views'), 'log-viewer');
    }

    protected function defineAssetPublishing()
    {
        $this->publishes([
            self::basePath('/public') => public_path('vendor/database-viewer'),
        ], ['database-viewer-assets', 'laravel-assets']);
    }
}