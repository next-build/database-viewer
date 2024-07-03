<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="h-full">

<head>
    <meta charset="UTF-8">
    <meta name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    {{-- <link rel="shortcut icon" href="{{ asset(mix('img/database-viewer-32.png', 'vendor/database-viewer')) }}"> --}}

    <title>Database Viewer{{ config('app.name') ? ' - ' . config('app.name') : '' }}</title>

    <!-- Style sheets-->
    <link href="{{ asset(mix('app.css', 'vendor/database-viewer')) }}" rel="stylesheet" onerror="alert('app.css failed to load. Please refresh the page, re-publish Database Viewer assets, or fix routing for vendor assets.')">
</head>

<body>
    
    <div id="database-viewer">

        @yield('content')

    </div>

    <script src="{{ asset(mix('app.js', 'vendor/database-viewer')) }}" onerror="alert('app.js failed to load. Please refresh the page, re-publish Database Viewer assets, or fix routing for vendor assets.')"></script>
</body>

</html>
