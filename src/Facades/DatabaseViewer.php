<?php

namespace NextBuild\DatabaseViewer\Facades;

use Illuminate\Support\Facades\Facade;

/**
 * @see \NextBuild\DatabaseViewer\DatabaseViewer
 */
class DatabaseViewer extends Facade
{
    protected static function getFacadeAccessor(): string
    {
        return 'database-viewer';
    }
}