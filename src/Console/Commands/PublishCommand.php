<?php

namespace NextBuild\DatabaseViewer\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Str;
use NextBuild\DatabaseViewer\DatabaseViewerServiceProvider;
use Spatie\Watcher\Watch;

class PublishCommand extends Command
{
    protected $signature = 'database-viewer:publish  {--watch}';
    protected $description = 'Publish Database Viewer assets';

    public function handle()
    {
        $this->call('vendor:publish', [
            '--tag' => 'database-viewer-assets',
            '--force' => true,
        ]);

        if ($this->option('watch')) {
            if (! class_exists(Watch::class)) {
                $this->error('Please install the spatie/file-system-watcher package to use the --watch option.');
                $this->info('Learn more at https://github.com/spatie/file-system-watcher');

                return;
            }

            $this->info('Watching for file changes... (Press CTRL+C to stop)');

            Watch::path(DatabaseViewerServiceProvider::basePath('/public'))
                ->onAnyChange(function (string $type, string $path) {
                    if (Str::endsWith($path, 'manifest.json')) {
                        $this->call('vendor:publish', [
                            '--tag' => 'database-viewer-assets',
                            '--force' => true,
                        ]);
                    }
                })
                ->start();
        }
    }
}
