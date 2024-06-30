<div align="center">
    <p>
        <h1>Database Viewer<br/>Laravel package for managing databases</h1>
    </p>
</div>

<p align="center">
    <a href="#">Documentation</a> |
    <a href="#features">Features</a> |
    <a href="#installation">Installation</a> |
    <a href="#troubleshooting">Troubleshooting</a> |
    <a href="#credits">Credits</a>
</p>

<p align="center">
<a href="https://packagist.org/packages/nextbuild/database-viewer"><img src="https://img.shields.io/packagist/v/nextbuild/database-viewer.svg?style=flat-square" alt="Packagist"></a>
<a href="https://packagist.org/packages/nextbuild/database-viewer"><img src="https://img.shields.io/badge/Laravel-8.x,%209.x,%2010.x,%2011.x-brightgreen.svg?style=flat-square" alt="Laravel Version"></a>
</p>

### Documentation

Documentation can be found on the [official website](#).

## Get Started

### Requirements

- **PHP 8.0+**
- **Laravel 8+**

### Installation

To install the package via composer, Run:

```bash
composer require next-build/database-viewer
```

After installing the package, publish the front-end assets by running:

```bash
php artisan database-viewer:publish
```

Publish config file by running:

```bash
php artisan vendor:publish --tag=database-viewer-config
```

### Usage

Once the installation is complete, you will be able to access **Database Viewer** directly in your browser.

By default, the application is available at: `{APP_URL}/database-viewer`.

(for example: `https://my-app.test/database-viewer`)

## Troubleshooting

Here are some common problems and solutions.

## Security Vulnerabilities

Please review [our security policy](../../security/policy) on how to report security vulnerabilities.

## Credits

- [Saptarshi Dey](https://github.com/SaptarshiDy)
- [All Contributors](../../contributors)

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.


