<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Request;

class HandleInertiaRequests
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        return $next($request);
    }

    public function share(Request $request)
    {
        return array_merge(Parent::share($request), [
        // Provide the reCAPTCHA site key to the front-end.
        'recaptchav2_sitekey' => config('recaptchav2.sitekey'),
        // DO NOT SHARE RECAPTCHAV2_SECRET.
        ]);
    }
}
