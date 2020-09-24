module.exports=function(e){var t={};function r(s){if(t[s])return t[s].exports;var a=t[s]={i:s,l:!1,exports:{}};return e[s].call(a.exports,a,a.exports,r),a.l=!0,a.exports}return r.m=e,r.c=t,r.d=function(e,t,s){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(s,a,function(t){return e[t]}.bind(null,a));return s},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=13)}({0:function(e,t){e.exports=flarum.core.compat.app},13:function(e,t,r){"use strict";r.r(t);var s=r(0),a=r.n(s);var n=r(6),o=n.settings.SettingsModal,l=n.settings.items.BooleanItem,p=function(e){var t,r;function s(){return e.apply(this,arguments)||this}r=e,(t=s).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var a=s.prototype;return a.className=function(){return"PusherSettingsModal Modal--small"},a.title=function(){return app.translator.trans("kyrne-websocket.admin.pusher_settings.title")},a.form=function(){return[m("div",{className:"Form-group"},m("label",null,app.translator.trans("kyrne-websocket.admin.pusher_settings.app_id_label")),m("div",{className:"helpText"},app.translator.trans("kyrne-websocket.admin.help.app_id")),m("input",{className:"FormControl",bidi:this.setting("kyrne-websocket.app_id")})),m("div",{className:"Form-group"},m("label",null,app.translator.trans("kyrne-websocket.admin.pusher_settings.app_key_label")),m("div",{className:"helpText"},app.translator.trans("kyrne-websocket.admin.help.app_key")),m("input",{className:"FormControl",bidi:this.setting("kyrne-websocket.app_key")})),m("div",{className:"Form-group"},m("label",null,app.translator.trans("kyrne-websocket.admin.pusher_settings.app_secret_label")),m("div",{className:"helpText"},app.translator.trans("kyrne-websocket.admin.help.secret")),m("input",{className:"FormControl",bidi:this.setting("kyrne-websocket.app_secret")})),m("div",{className:"Form-group"},m("label",null,app.translator.trans("kyrne-websocket.admin.pusher_settings.app_host_label")),m("div",{className:"helpText"},app.translator.trans("kyrne-websocket.admin.help.host")),m("input",{className:"FormControl",placeholder:window.location.hostname,bidi:this.setting("kyrne-websocket.app_host")})),m("div",{className:"Form-group"},m("label",null,app.translator.trans("kyrne-websocket.admin.pusher_settings.app_port_label")),m("div",{className:"helpText"},app.translator.trans("kyrne-websocket.admin.help.port")),m("input",{className:"FormControl",placeholder:"6001",bidi:this.setting("kyrne-websocket.app_port")})),m("div",{className:"Form-group"},m(l,{setting:this.setting,name:"kyrne-websocket.reverse_proxy",cast:Number},m("label",null,app.translator.trans("kyrne-websocket.admin.pusher_settings.reverse_proxy"))),m("div",{className:"helpText"},app.translator.trans("kyrne-websocket.admin.help.reverse_proxy"))),m("div",{className:"Form-group"},m("label",null,app.translator.trans("kyrne-websocket.admin.pusher_settings.local_cert_path")),m("div",{className:"helpText"},app.translator.trans("kyrne-websocket.admin.help.cert_path")),m("input",{className:"FormControl",placeholder:"/etc/letsencrypt/live/your.domain/fullchain.pem",bidi:this.setting("kyrne-websocket.local_cert")})),m("div",{className:"Form-group"},m("label",null,app.translator.trans("kyrne-websocket.admin.pusher_settings.local_pk_path")),m("div",{className:"helpText"},app.translator.trans("kyrne-websocket.admin.help.pk_path")),m("input",{className:"FormControl",placeholder:"/etc/letsencrypt/live/your.domain/privkey.pem",bidi:this.setting("kyrne-websocket.local_pk")})),m("div",{className:"Form-group"},m("label",null,app.translator.trans("kyrne-websocket.admin.pusher_settings.passphrase")),m("div",{className:"helpText"},app.translator.trans("kyrne-websocket.admin.help.passphrase")),m("input",{className:"FormControl",bidi:this.setting("kyrne-websocket.passphrase")})),m("div",{className:"Form-group"},m(l,{setting:this.setting,name:"kyrne-websocket.cert_self_signed",cast:Number},m("label",null,app.translator.trans("kyrne-websocket.admin.pusher_settings.cert_self_signed"))),m("div",{className:"helpText"},app.translator.trans("kyrne-websocket.admin.help.self_signed"))),m("div",{className:"Form-group"},m(l,{setting:this.setting,name:"kyrne-websocket.force_secure",cast:Number},m("label",null,app.translator.trans("kyrne-websocket.admin.pusher_settings.secure"))),m("div",{className:"helpText"},app.translator.trans("kyrne-websocket.admin.help.secure")))]},s}(o);a.a.initializers.add("kyrne-websocket",function(e){e.extensionSettings["kyrne-websocket"]=function(){return e.modal.show(p)}})},6:function(e,t){e.exports=flarum.extensions["fof-components"]}});
//# sourceMappingURL=admin.js.map