<?php

namespace Kyrne\Websocket;

use Flarum\Api\Event\Serializing;
use Flarum\Extend\Frontend;
use Flarum\Extend\Routes;
use Flarum\Extend\Compat;
use Flarum\Extend\Console;
use Flarum\Extend\Locales;
use Flarum\Foundation\Application;
use Flarum\Notification\Event\Sending;
use Flarum\Post\Event\Posted;
use Kyrne\Websocket\Provider\AppProvider;

return [
    (new Console)
        ->command(Commands\WebsocketServer::class),

    new Extend\GenerateApp(),

    (new Extend\Listen)
        ->on(Serializing::class, Listener\AddPusherApi::class)
        ->on(Posted::class, Listener\PushNewPost::class)
        ->on(Sending::class, Listener\PushNewNotification::class),

    (new Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/less/forum.less'),

    (new Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js')
        ->css(__DIR__.'/less/admin.less'),

    new Locales(__DIR__.'/resources/locale'),

    (new Routes('api'))
        ->post('/websocket/auth', 'websocket.auth', Api\Controller\AuthController::class),
    new Compat(function(Application $app) {
        $app->register(AppProvider::class);
    }),
];
