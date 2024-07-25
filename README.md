# Netforemost PHP Test

## Requirements

> PHP 8.3.9

> NODE 20.15.1

## Installation

### Backend

Inside on folder *./backend* run the next command to install the dependecies for PHP:
```bash
composer install
```

> NOTE 1: I develop this app with docker using [Laravel Sail](https://laravel.com/docs/11.x/sail) to have an isolated environment.

> NOTE 2: If you are on Windows and want to use Laravel Sail you must have [WSL 2](https://learn.microsoft.com/en-us/windows/wsl/install) activated.

Run the next command to build the project with sails
```bash
./vendor/bin/sail up -d
```

Run migrations to insert data from CSV to the Database
```bash
./vendor/bin/sail artisan migrate:refresh --seed
```

### Frontend

Inside on folder *./frontend* run the next command to install the dependecies for React:
```bash
yarn install
```

> NOTE 1: I'm using yarn but also works with npm

Run the application on develop mode with the next command:
```bash
yarn dev
```
