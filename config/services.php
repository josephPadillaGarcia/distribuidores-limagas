<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Third Party Services
    |--------------------------------------------------------------------------
    |
    | This file is for storing the credentials for third party services such
    | as Mailgun, Postmark, AWS and more. This file provides the de facto
    | location for this type of information, allowing packages to have
    | a conventional file to locate the various service credentials.
    |
    */
    'web_url' => env('WEB_URL', 'http://127.0.0.1:8000'),
    'storage_url' => env('STORAGE_URL', 'http://127.0.0.1:8000/storage'),
    'images_url' => env('IMAGES_URL', 'http://127.0.0.1:8000/storage/img'),
    'videos_url' => env('VIDEOS_URL', 'http://127.0.0.1:8000/storage/videos'),
    'files_url' => env('FILES_URL', 'http://127.0.0.1:8000/storage/files'),
    'mail_from_name' => env('MAIL_FROM_NAME', 'Dinet e-Commerce Lead'),
    'mail_dinet_token' => env('MAIL_DINET_TOKEN'),

    'mailgun' => [
        'domain' => env('MAILGUN_DOMAIN'),
        'secret' => env('MAILGUN_SECRET'),
        'endpoint' => env('MAILGUN_ENDPOINT', 'api.mailgun.net'),
    ],

    'postmark' => [
        'token' => env('POSTMARK_TOKEN'),
    ],

    'ses' => [
        'key' => env('AWS_ACCESS_KEY_ID'),
        'secret' => env('AWS_SECRET_ACCESS_KEY'),
        'region' => env('AWS_DEFAULT_REGION', 'us-east-1'),
    ],

];
