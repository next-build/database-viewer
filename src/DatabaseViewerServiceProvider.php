<?php

namespace NextBuild\DatabaseViewer;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Str;

use NextBuild\DatabaseViewer\Console\Commands\PublishCommand;

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
        $this->mergeConfigFrom(self::basePath("/config/{$this->name}.php"), "{$this->name}-config");

        $this->app->bind('database-viewer', function ($app) {
            return new \NextBuild\DatabaseViewer\DatabaseViewer();
        });
    }

    /**
     * Bootstrap any package services.
     */
    public function boot(): void
    {
        if ($this->app->runningInConsole()) {

            // publishing config
            $this->publishes([
                self::basePath("/config/{$this->name}.php") => config_path("{$this->name}.php"),
            ], "{$this->name}-config");

            // publishing view
            $this->publishes([
                self::basePath('/resources/views') => resource_path("views/vendor/{$this->name}"),
            ], "{$this->name}-views");

            // registering command
            $this->commands([
                PublishCommand::class,
            ]);

        }

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
        $this->loadRoutesFrom(self::basePath('/routes/web.php'));
        $this->loadRoutesFrom(self::basePath('/routes/api.php'));
    }

    protected function registerResources()
    {
        $this->loadViewsFrom(self::basePath('/resources/views'), "{$this->name}");
    }

    protected function defineAssetPublishing()
    {
        $this->publishes([
            self::basePath('/public') => public_path('vendor/database-viewer'),
        ], ['database-viewer-assets', 'laravel-assets']);
    }
}