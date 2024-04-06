<?php

namespace SaptarshiDy\DatabaseViewer\Facades;

use Illuminate\Support\Facades\Facade;

/**
 * @see \SaptarshiDy\DatabaseViewer\DatabaseViewer
 */
class DatabaseViewer extends Facade
{
    protected static function getFacadeAccessor(): string
    {
        return 'database-viewer';
    }
}