<?php

namespace Kyrne\Websocket;

use Flarum\Extend\Console;
use Flarum\Extend\Event;
use Flarum\Extend\Frontend;
use Flarum\Extend\Locales;
use Flarum\Extend\Notification;
use Flarum\Extend\Routes;
use Flarum\Extend\ServiceProvider;
use Flarum\Extend\Settings;
use Flarum\Post\Event\Posted;
use Kyrne\Websocket\Api\Controllers\AuthController;
use Kyrne\Websocket\Api\Controllers\TypingWebsocketController;
use Kyrne\Websocket\Extend\GenerateApp;
use Kyrne\Websocket\Provider\AppProvider;
use Flarum\Extend\User;

return [
    (new Console())
        ->command(Commands\WebsocketServer::class)
        ->command(Commands\AltServer::class),

    new GenerateApp(),

    (new Settings())
        ->serializeToForum('websocketSecure', 'kyrne-websocket.force_secure', function ($setting) {
            return boolval($setting);
        })
        ->serializeToForum('websocketReverseProxy', 'kyrne-websocket.reverse_proxy')
        ->serializeToForum('websocketPort', 'kyrne-websocket.app_port')
        ->serializeToForum('websocketAutoUpdate', 'kyrne-websocket.auto_update', function ($setting) {
            return boolval($setting);
        })
        ->serializeToForum('websocketKey', 'kyrne-websocket.app_key')
        ->serializeToForum('websocketHost', 'kyrne-websocket.app_host')
        ->serializeToForum('websocketAuthOnly', 'kyrne-websocket.auth_only', function ($setting) {
            return boolval($setting);
        }),

    (new Event())
        ->listen(Posted::class, Listener\PushNewPost::class),

    (new Notification())
        ->driver('websocket', WebsocketNotificationDriver::class),

    (new Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/resources/less/forum.less'),

    (new Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js')
        ->css(__DIR__.'/resources/less/admin.less')
        ->content(AddStatsData::class),

    new Locales(__DIR__.'/resources/locale'),

    (new User())
        ->registerPreference('disableAutoFresh', 'boolVal', false),

    (new Routes('api'))
        ->post('/posts/typing', 'posts.typing', TypingWebsocketController::class)
        ->post('/websocket/auth', 'websocket.auth', AuthController::class),
    (new ServiceProvider())
        ->register(AppProvider::class),
];
