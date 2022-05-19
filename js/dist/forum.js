module.exports=function(e){var s={};function t(n){if(s[n])return s[n].exports;var r=s[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}return t.m=e,t.c=s,t.d=function(e,s,n){t.o(e,s)||Object.defineProperty(e,s,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,s){if(1&s&&(e=t(e)),8&s)return e;if(4&s&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&s&&"string"!=typeof e)for(var r in e)t.d(n,r,function(s){return e[s]}.bind(null,r));return n},t.n=function(e){var s=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(s,"a",s),s},t.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)},t.p="",t(t.s=24)}([function(e,s){e.exports=flarum.core.compat.app},function(e,s){e.exports=flarum.core.compat["utils/Stream"]},function(e,s){e.exports=flarum.core.compat.extend},function(e,s,t){"use strict";function n(e,s){return(n=Object.setPrototypeOf||function(e,s){return e.__proto__=s,e})(e,s)}function r(e,s){e.prototype=Object.create(s.prototype),e.prototype.constructor=e,n(e,s)}t.d(s,"a",(function(){return r}))},function(e,s){e.exports=flarum.core.compat["utils/stringToColor"]},function(e,s){e.exports=flarum.core.compat["helpers/avatar"]},function(e,s){e.exports=flarum.core.compat["components/DiscussionPage"]},function(e,s){e.exports=flarum.core.compat["extensions/afrux-forum-widgets-core/common/components/Widget"]},,function(e,s){e.exports=flarum.core.compat["extensions/afrux-forum-widgets-core/common/extend/Widgets"]},function(e,s){e.exports=flarum.core.compat["components/LoadingIndicator"]},function(e,s){e.exports=flarum.core.compat["components/Tooltip"]},function(e,s){e.exports=flarum.core.compat["components/Link"]},function(e,s,t){"use strict";var n=t(9),r=t.n(n),i=t(3),o=t(10),a=t.n(o),u=t(11),c=t.n(u),p=t(5),d=t.n(p),l=t(12),f=t.n(l),b=t(4),h=t.n(b),y=t(1),g=t.n(y),v=t(7),w=t.n(v),O=w.a?function(e){function s(){return e.apply(this,arguments)||this}Object(i.a)(s,e);var t=s.prototype;return t.oninit=function(s){e.prototype.oninit.call(this,s),this.users=[],this.loading=!0,this.guests=0},t.oncreate=function(s){var t=this;e.prototype.oncreate.call(this,s),app.pusher.then((function(e){var s=e.channels.presence,n=Object.keys(s.members.members),r=!app.session.user||app.session.user&&!app.session.user.preferences().discloseOnline;0===n.length?(s.bind("pusher:subscription_succeeded",(function(e){Object.keys(e.members).map((function(s){s.includes("Guest")?t.guests++:(e.members[s].id=s,t.pushMember(e.members[s]))})),t.loading=!1,m.redraw()})),r&&(t.guests--,m.redraw())):(n.map((function(e){e.includes("Guest")?t.guests++:(s.members.members[e].id=e,t.pushMember(s.members.members[e]))})),t.loading=!1,r&&(t.guests--,m.redraw())),s.bind("pusher:member_removed",(function(e){"string"!=typeof e.id?t.users.some((function(s,n){if(s.id()==e.id)return t.users.splice(n,1),!0})):t.guests--,m.redraw()})),s.bind("pusher:member_added",(function(e){"string"!=typeof e.id?(e.info.id=e.id,t.pushMember(e.info)):t.guests++,m.redraw()}))}))},t.pushMember=function(e){this.users.push({id:g()(e.id),color:g()("#"+h()(e.displayName)),displayName:g()(e.displayName),avatarUrl:g()(e.avatarUrl),slug:g()(e.slug)})},t.className=function(){return"WebsocketOnlineUsersWidget"},t.icon=function(){return"fas fa-user-friends"},t.title=function(){return app.translator.trans("kyrne-websocket.forum.widget.title")},t.content=function(){if(this.loading)return m(a.a,null);var e=this.users;return m("div",{className:"WebsocketOnlineUsersWidget-users"},m("div",{className:"WebsocketOnlineUsersWidget-users-message"},0===e.length?app.translator.trans("kyrne-websocket.forum.widget.empty"):null),m("div",{className:"WebsocketOnlineUsersWidget-users-list"},e.slice(0,12).map((function(e){return m(f.a,{href:app.route("user",{username:e.slug()}),className:"WebsocketOnlineUsersWidget-users-item"},m(c.a,{text:e.displayName()},d()(e)))})),this.guests>0?m("span",{style:e.length>0?"margin-left: 8px":"",className:"WebsocketOnlineUsersWidget-users-guests"},app.translator.trans("kyrne-websocket.forum.widget.guests",{count:this.guests})):"",e.length>12?m("span",{className:"WebsocketOnlineUsersWidget-users-item WebsocketOnlineUsersWidget-users-item--plus"},m("span",{className:"Avatar"},"+12")):null))},s}(w.a):function(){};s.a=function(e){(new r.a).add({key:"WebsocketOnlineUsersWidget",component:O,isDisabled:!1,placement:"end",position:1}).extend(e,"kyrne-websocket")}},function(e,s){e.exports=flarum.core.compat["components/DiscussionList"]},function(e,s){e.exports=flarum.core.compat["components/ReplyComposer"]},function(e,s){e.exports=flarum.core.compat["components/ReplyPlaceholder"]},function(e,s){e.exports=flarum.core.compat["helpers/username"]},function(e,s){e.exports=flarum.core.compat["components/IndexPage"]},,,,,,function(e,s,t){"use strict";t.r(s);var n=t(2),r=t(0),i=t.n(r),o=t(14),a=t.n(o),u=t(6),c=t.n(u),p=t(18),d=t.n(p),l=t(15),f=t.n(l),b=t(16),h=t.n(b),y=t(5),g=t.n(y),v=t(17),w=t.n(v),O=t(1),x=t.n(O),k=t(4),j=t.n(k),N=t(13);i.a.initializers.add("kyrne-websocket",(function(){var e=new Promise((function(e,s){"connected"!==i.a.socketStatus&&$.getScript("https://cdn.jsdelivr.net/npm/pusher-js@7.0.3/dist/web/pusher.min.js",(function(){if(!i.a.session.user&&i.a.forum.attribute("websocketAuthOnly"))return!1;i.a.forum.attribute("debug")&&(Pusher.logToConsole=!0);var s="1"===i.a.forum.attribute("websocketReverseProxy")?443:i.a.forum.attribute("websocketPort")||2083,t=new Pusher(i.a.forum.attribute("websocketKey"),{authEndpoint:i.a.forum.attribute("apiUrl")+"/websocket/auth",cluster:null,wsHost:i.a.forum.attribute("websocketHost")||window.location.hostname,wsPort:i.a.forum.attribute("websocketPort")||2083,wssPort:s,enableStats:!1,encrypted:i.a.forum.attribute("websocketSecure"),auth:{headers:{"X-CSRF-Token":i.a.session.csrfToken}},enabledTransports:["ws","flash"],disabledTransports:["xhr_polling","xhr_streaming","sockjs"]});return t.connection.bind("state_change",(function(e){return i.a.socketStatus=e.current})),e({channels:{main:t.subscribe("public"),user:i.a.session.user?t.subscribe("private-user"+i.a.session.user.id()):null,presence:t.subscribe("presence-forum")},pusher:t})}))}));i.a.pusher=e,i.a.pushedUpdates=[],Object(n.extend)(a.a.prototype,"oncreate",(function(e){i.a.pusher.then((function(e){var s=e.channels;Object.keys(s).map((function(e){null!==s[e]&&s[e].bind("newPost",(function(e){var s=String(e.discussionId),t=i.a.discussions.getParams();-1===["user.posts","user.discussions"].indexOf(i.a.current.data.routeName)&&(t.q||i.a.current.get("discussion")&&s===i.a.current.get("discussion").id()||-1!==i.a.pushedUpdates.indexOf(s)||i.a.request({method:"GET",url:i.a.forum.attribute("apiUrl")+"/discussions/"+s}).then((function(e){if("ignore"!==e.data.attributes.subscription){if(t.filter&&t.filter.tag){var s=e.data.relationships.tags.data.map((function(e){return e.id})),n=[];t.filter.tag.split(",").forEach((function(e){var s=i.a.store.getBy("tags","slug",e);s&&n.push(s.data.id)}));var r=s.some((function(e){return n.includes(e)}));if(console.log(r),0==r)return}if(i.a.forum.attribute("websocketAutoUpdate"))for(var o=i.a.discussions.getPages().length;o>0;o--)i.a.discussions.refresh(o);else i.a.pushedUpdates.push(e),i.a.current.matches(d.a)&&i.a.setTitleCount(i.a.pushedUpdates.length),m.redraw()}})))}))}))}))})),Object(n.extend)(c.a.prototype,"oncreate",(function(){var e=this;i.a.pusher.then((function(s){var t=s.channels;Object.keys(t).map((function(s){null!==t[s]&&t[s].bind("newPost",(function(s){var t=String(s.discussionId);if(e.discussion&&e.discussion.id()===t&&e.stream){var n=e.discussion.commentCount();i.a.store.find("discussions",e.discussion.id()).then((function(){e.stream.update().then((function(){document.hasFocus()||(i.a.setTitleCount(Math.max(0,e.discussion.commentCount()-n)),$(window).one("focus",(function(){return i.a.setTitleCount(0)}))),m.redraw()}))}))}}))}))}))})),Object(n.extend)(a.a.prototype,"onremove",(function(e){i.a.pusher.then((function(e){var s=e.channels;Object.keys(s).map((function(e){null!==s[e]&&s[e].unbind("newPost")}))}))})),Object(n.extend)(c.a.prototype,"onremove",(function(){i.a.pusher.then((function(e){var s=e.channels;Object.keys(s).map((function(e){null!==s[e]&&s[e].unbind("newPost")}))}))})),i.a.pusher.then((function(e){var s=e.channels;s.user&&s.user.bind("notification",(function(){i.a.session.user.pushAttributes({unreadNotificationCount:i.a.session.user.unreadNotificationCount()+1,newNotificationCount:i.a.session.user.newNotificationCount()+1}),i.a.notifications.clear(),m.redraw()}))})),Object(n.extend)(c.a.prototype,"view",(function(e){var s=this;app.pusher.then((function(e){!app.discussions.presence&&s.discussion&&(app.discussions.presence=e.pusher.subscribe("presence-"+s.discussion.id()),app.discussions.presence.bind("pusher:subscription_succeeded",(function(e){s.membersOnline=[],Object.keys(e.members).map((function(t){app.discussions.presence.members.myID!=t&&"string"!=typeof t&&(s.membersOnline.push({id:x()(t),color:x()("#"+j()(e.members[t].displayName)),displayName:x()(e.members[t].displayName),avatarUrl:x()(e.members[t].avatarUrl)}),m.redraw())}))})),app.discussions.presence.bind("pusher:member_removed",(function(e){s.membersOnline.some((function(t,n){if(t.id()==e.id)return s.membersOnline.splice(n,1),m.redraw(),!0}))})),app.discussions.presence.bind("pusher:member_added",(function(e){app.discussions.presence.members.myID!=e.id&&"string"!=typeof e.id&&(s.membersOnline.push({id:x()(e.id),color:x()("#"+j()(e.info.displayName)),displayName:x()(e.info.displayName),avatarUrl:x()(e.info.avatarUrl)}),m.redraw())})))}))})),Object(n.extend)(c.a.prototype,"sidebarItems",(function(e){this.membersOnline&&this.membersOnline.length&&e.add("viewing",m("div",{className:"UsersOnline"},m("legend",{className:"UsersOnline-title"},app.translator.trans("kyrne-websocket.forum.discussion_page.viewing_title")),m("ul",{className:"UsersOnline-list"},this.membersOnline.map((function(e){return m("li",{className:"UsersOnline-item"},g()(e),w()(e))})))),-101)})),Object(n.extend)(c.a.prototype,"oncreate",(function(e){window.matchMedia("only screen and (max-width: 767px)").matches||$(window).on("scroll",(function(e){var s=$(".DiscussionPage-nav").children();$(window).scrollTop()>147?(s.css("position","fixed"),s.addClass("websocket-nav")):(s.css("position","absolute"),s.removeClass("websocket-nav"))}))})),Object(n.extend)(c.a.prototype,"onremove",(function(e){var s=this;app.pusher.then((function(e){app.discussions.presence&&(app.discussions.presence=e.pusher.unsubscribe("presence-"+s.discussion.id()),app.discussions.presence=null)}))})),Object(n.extend)(f.a.prototype,"oninit",(function(){var e=this;!function s(){e.typingTimeout=!0,setTimeout((function(){s()}),18e3)}()})),Object(n.extend)(f.a.prototype,"view",(function(){var e=this;app.session.user&&app.session.user.preferences().discloseOnline&&$(".TextEditor-editor").on("keydown",(function(){e.typingTimeout&&(e.typingTimeout=!1,app.request({method:"POST",url:app.forum.attribute("apiUrl")+"/posts/typing",body:{discussionId:e.attrs.discussion.id()}}))}))})),Object(n.extend)(h.a.prototype,"oninit",(function(){var e=this;this.typers={},setTimeout((function(){app.discussions.presence&&app.discussions.presence.bind("typing",(function(s){e.typers[s.userId]||s.userId==app.discussions.presence.members.myID||(e.typers[s.userId]={id:x()(s.userId),color:x()("#"+j()(s.displayName)),displayName:x()(s.displayName),avatarUrl:x()(s.avatarUrl),time:new Date}),m.redraw()}))}),2e3),function s(){Object.keys(e.typers).map((function(s){e.typers[s].time<new Date(Date.now()-2e4)&&(delete e.typers[s],m.redraw())})),setTimeout((function(){s()}),2e4)}()})),Object(n.extend)(h.a.prototype,"view",(function(e){var s=this;Object.keys(this.typers).length&&e.children.push(m("div",{className:"ReplyPlaceholder-typers"},m("ul",{className:"ReplyPlaceholder-typers-list"},Object.keys(this.typers).map((function(e){return m("li",{className:"ReplyPlaceholder-typers-item"},g()(s.typers[e]),w()(s.typers[e]),m("div",{className:"tiblock"},m("div",{className:"tidot"}),m("div",{className:"tidot"}),m("div",{className:"tidot"})))})))))})),i.a.initializers.has("afrux/forum-widgets-core")&&Object(N.a)(i.a)}))}]);
//# sourceMappingURL=forum.js.map