(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[1],{13:function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return i}));var a=n(37),r=a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",key:{"API-KEY":"6070d609-7209-4d7e-b68d-c86179c676cf"}}),s={getUsers:function(e,t){return r.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))}},u={me:function(){return r.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return r.post("auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return r.delete("auth/login")}},i={getProfile:function(e){return r.get("profile/"+e)},getStatus:function(e){return r.get("profile/status/"+e)},updateStatus:function(e){return r.put("profile/status",{status:e})}}},138:function(e,t,n){e.exports=n(227)},143:function(e,t,n){},144:function(e,t,n){},21:function(e,t,n){"use strict";var a=n(0),r=n.n(a),s=n(86),u=n.n(s);t.a=function(e){return r.a.createElement("div",null,r.a.createElement("img",{src:u.a}))}},227:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(46),u=n.n(s),i=(n(143),n(24)),c=n(25),o=n(29),l=n(28),d=(n(144),n(84)),m=n.n(d),p=n(10),f=n(36),g=n(38),b={myFriends:[{friend:"Anton",id:"1"},{friend:"Ivan",id:"2"},{friend:"Stepan",id:"3"},{friend:"Jora",id:"4"},{friend:"Roman",id:"5"}]},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b;return e},E={_state:{mainPage:{posts:[{id:"1",sms:"Hey, how are you?",likesCount:8},{id:"2",sms:"Bingoooo",likesCount:17}],newPostText:""},messagePage:{message:[{id:1,sms:"Hi"},{id:2,sms:"Yo"}],dialogs:[{id:"1",name:"Stepan"},{id:"2",name:"Ivan"},{id:"3",name:"Valera"},{id:"4",name:"Grisha"},{id:"5",name:"Stasik"}]},sidebar:{myFriends:[{friend:"Anton",id:"1"},{friend:"Ivan",id:"2"},{friend:"Stepan",id:"3"},{friend:"Jora",id:"4"},{friend:"Roman",id:"5"}]}},getState:function(){return this._state},dispatch:function(e){this._state.mainPage=Object(f.b)(this._state.mainPage,e),this._state.messagePage=Object(g.a)(this._state.messagePage,e),this._state.sidebar=h(this._state.sidebar,e)}};window.store=E;var v=function(e){return r.a.createElement("div",null,r.a.createElement("nav",{className:m.a.menu},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(p.b,{to:"/Main"}," Profile ")),r.a.createElement("li",null,r.a.createElement(p.b,{to:"/Dialogs"}," Messages ")),r.a.createElement("li",null,r.a.createElement(p.b,{to:"/Users"}," Users ")),r.a.createElement("li",null,r.a.createElement("a",null,"News")),r.a.createElement("li",null,r.a.createElement("a",null,"Music")),r.a.createElement("li",null,r.a.createElement("a",null,"Settings")))))},S=n(4),O=n(16),P=n(6),j=n.n(P),_=n(15),C=n(3),w=n(13),U=function(e,t,n,a){return e.map((function(e){return e[n]===t?Object(C.a)(Object(C.a)({},e),a):e}))},y={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!0},k=function(e){return{type:"SET_USERS",users:e}},T=function(e){return{type:"SHOW_PRELOADER",isFetching:e}},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SUBSCRIBE":return Object(C.a)(Object(C.a)({},e),{},{users:U(e.users,t.userId,"id",{followed:!0})});case"UNSUBSCRIBE":return Object(C.a)(Object(C.a)({},e),{},{users:U(e.users,t.userId,"id",{followed:!1})});case"SET_USERS":return Object(C.a)(Object(C.a)({},e),{},{users:t.users});case"SET_CURRENT_PAGE":return Object(C.a)(Object(C.a)({},e),{},{currentPage:t.currentPage});case"SHOW_PRELOADER":return Object(C.a)(Object(C.a)({},e),{},{isFetching:t.isFetching});case"TOTAL-USERS-COUNT":return Object(C.a)(Object(C.a)({},e),{},{totalUsersCount:t.totalUsersCount});default:return e}},I=n(63),x=n(82),N=n(60),R=n.n(N),z=function(e){for(var t=e.totalUsersCount,n=e.pageSize,s=e.currentPage,u=e.onPageChanged,i=e.portionSize,c=void 0===i?10:i,o=Math.ceil(t/n),l=[],d=1;d<=o;d++)l.push(d);var m=Math.ceil(o/c),p=Object(a.useState)(1),f=Object(x.a)(p,2),g=f[0],b=f[1],h=(g-1)*n+1,E=g*n;return r.a.createElement("div",null,r.a.createElement("div",{className:R.a.paginator},g>1&&r.a.createElement("button",{onClick:function(){return b(g-1)}}," Previous "),l.filter((function(e){return e>=h&&e<=E})).map((function(e){return r.a.createElement("span",{className:s===e&&R.a.currentPage,key:e,onClick:function(t){u(e)}}," ",e," ")})),m>g&&r.a.createElement("button",{onClick:function(){b(g+1)}}," Next ")))},B=n(23),D=n.n(B),F=function(e){var t=e.user,n=e.unsubscribe,a=e.subscribe;return r.a.createElement("div",null,r.a.createElement("div",{className:D.a.row},r.a.createElement("div",{className:D.a.avaAndBut},r.a.createElement("div",{className:D.a.avatar},r.a.createElement(p.b,{to:"/main/"+t.id},null!==t.photos?r.a.createElement("img",{src:"https://klike.net/uploads/posts/2019-03/1551511801_1.jpg"}):t.photos.small)),r.a.createElement("div",null," ",t.followed?r.a.createElement("button",{className:D.a.subscribe,onClick:function(){n(t.id)}},"Unsubscribe"):r.a.createElement("button",{className:D.a.subscribe,onClick:function(){a(t.id)}},"Subscribe"))),r.a.createElement("div",{className:D.a.userInfo},r.a.createElement("div",null,t.name),r.a.createElement("div",null,"`",t.uniqueUrlName," user country`"))))},L=function(e){var t=e.totalUsersCount,n=e.pageSize,a=e.onPageChanged,s=e.currentPage,u=e.users,i=Object(I.a)(e,["totalUsersCount","pageSize","onPageChanged","currentPage","users"]);return r.a.createElement("div",null,r.a.createElement(z,{totalUsersCount:t,pageSize:n,onPageChanged:a,currentPage:s}),r.a.createElement("div",null,u.map((function(e){return r.a.createElement(F,{user:e,key:e.id,subscribe:i.subscribe,unsubscribe:i.unsubscribe})}))))},M=(n(37),n(21)),H=function(e){return e.usersPage.users},G=function(e){return e.usersPage.pageSize},W=function(e){return e.usersPage.totalUsersCount},J=function(e){return e.usersPage.currentPage},Y=function(e){return e.usersPage.isFetching},Z=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).onPageChanged=function(t){e.props.setCurrentPage(t),e.props.showPreloader(!0),e.props.getUsersTC(t,e.props.pageSize)},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.props.getUsersTC(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.props.isFetching?r.a.createElement(M.a,null):null,r.a.createElement(L,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,users:this.props.users,unsubscribe:this.props.unsubscribe,subscribe:this.props.subscribe,onPageChanged:this.onPageChanged}))}}]),n}(r.a.Component),V=Object(O.b)((function(e){return{users:H(e),pageSize:G(e),totalUsersCount:W(e),currentPage:J(e),isFetching:Y(e)}}),{unsubscribe:function(e){return{type:"UNSUBSCRIBE",userId:e}},subscribe:function(e){return{type:"SUBSCRIBE",userId:e}},setUsers:k,setCurrentPage:function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},showPreloader:T,getUsersTC:function(e,t){return function(){var n=Object(_.a)(j.a.mark((function n(a){var r;return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,w.c.getUsers(e,t);case 2:r=n.sent,a(T(!1)),a(k(r.items)),a({type:"TOTAL-USERS-COUNT",totalUsersCount:r.totalCount});case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}})(Z),Q=n(49),q=n.n(Q),K=function(e){return r.a.createElement("header",{className:q.a.tittle},r.a.createElement("div",{className:q.a.image},r.a.createElement("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/200px-NASA_logo.svg.png"})),r.a.createElement("div",{className:q.a.log},e.isAuth?r.a.createElement("div",null,e.login,r.a.createElement("button",{onClick:e.logout},"Logout")):r.a.createElement(p.b,{to:"/login"},"Login")))},X=n(30),$=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement(K,this.props)}}]),n}(r.a.Component),ee=Object(O.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:X.d})($),te=n(18),ne=n(89),ae={initialized:!1},re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INITIALIZED-SUCCESS":return Object(C.a)(Object(C.a)({},e),{},{initialized:!0});default:return e}},se=r.a.lazy((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,297))})),ue=r.a.lazy((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,295))})),ie=r.a.lazy((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,296))})),ce=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?r.a.createElement("div",{className:"main-page"},r.a.createElement(ee,null),r.a.createElement(v,null),r.a.createElement("div",null,r.a.createElement(S.b,{path:"/dialogs",render:function(){return r.a.createElement(a.Suspense,{fallback:r.a.createElement(M.a,null)},r.a.createElement(se,null))}}),r.a.createElement(S.b,{path:"/main/:userId?",render:function(){return r.a.createElement(a.Suspense,{fallback:r.a.createElement(M.a,null)},r.a.createElement(ie,null))}}),r.a.createElement(S.b,{path:"/users",render:function(){return r.a.createElement(V,null)}}),r.a.createElement(S.b,{path:"/login",render:function(){return r.a.createElement(a.Suspense,{fallback:r.a.createElement(M.a,null)},r.a.createElement(ue,null))}}))):r.a.createElement(M.a,null)}}]),n}(r.a.Component),oe=Object(te.d)(ne.a,Object(O.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(Object(X.b)());Promise.all([t]).then((function(){e({type:"INITIALIZED-SUCCESS"})}))}}}))(ce);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var le=n(87),de=n(83),me=Object(te.c)({mainPage:f.b,messagePage:g.a,sidebar:h,usersPage:A,auth:X.a,form:de.a,app:re}),pe=Object(te.e)(me,Object(te.a)(le.a));window.store=pe;var fe=pe;u.a.render(r.a.createElement(p.a,null,r.a.createElement(O.a,{store:fe},r.a.createElement(oe,{dispatch:fe.dispatch.bind(fe),store:fe}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},23:function(e,t,n){e.exports={avatar:"User_avatar__1egS4",subscribe:"User_subscribe__1cjXw",row:"User_row__1Lxbu",avaAndBut:"User_avaAndBut__3_1pI",userInfo:"User_userInfo__3W6m9",page:"User_page__3bYnk",changedPage:"User_changedPage__vTPmQ"}},30:function(e,t,n){"use strict";n.d(t,"b",(function(){return d})),n.d(t,"c",(function(){return m})),n.d(t,"d",(function(){return p}));var a=n(6),r=n.n(a),s=n(15),u=n(3),i=n(13),c=n(50),o={userId:null,email:null,login:null,isAuth:!1},l=function(e,t,n,a){return{type:"AUTHORIZED",data:{userId:e,email:t,login:n,isAuth:a}}},d=function(){return function(){var e=Object(s.a)(r.a.mark((function e(t){var n,a,s,u,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.me();case 2:0===(n=e.sent).data.resultCode&&(a=n.data.data,s=a.id,u=a.email,c=a.login,t(l(s,u,c,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},m=function(e,t,n){return function(){var a=Object(s.a)(r.a.mark((function a(s){var u,o;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,i.a.login(e,t,n);case 2:0===(u=a.sent).data.resultCode?s(d()):(o=u.data.messages.length>0?u.data.messages[0]:"Some error!",s(Object(c.a)("login",{_error:o})));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},p=function(){return function(){var e=Object(s.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.logout();case 2:0===e.sent.data.resultCode&&t(l(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTHORIZED":return Object(u.a)(Object(u.a)({},e),t.data);default:return e}}},36:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"d",(function(){return m})),n.d(t,"c",(function(){return p})),n.d(t,"e",(function(){return f}));var a=n(6),r=n.n(a),s=n(15),u=n(48),i=n(3),c=n(13),o={posts:[{id:"1",sms:"Hey, how are you?",likesCount:8},{id:"2",sms:"Bingoooo",likesCount:17}],profile:null,status:null},l=function(e){return{type:"ADD-POST",newPostText:e}},d=function(e){return{type:"SET-STATUS",status:e}},m=function(e){return function(t){c.b.getProfile(e).then((function(e){t({type:"SET-PROFILE",profile:e.data})}))}},p=function(e){return function(){var t=Object(s.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.b.getStatus(e);case 2:a=t.sent,n(d(a.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},f=function(e){return function(){var t=Object(s.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(d(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var n={id:"5",sms:t.newPostText,likesCount:5},a=Object(i.a)(Object(i.a)({},e),{},{posts:[].concat(Object(u.a)(e.posts),[n]),newPostText:""});return a;case"SET-PROFILE":return Object(i.a)(Object(i.a)({},e),{},{profile:t.profile});case"SET-STATUS":return Object(i.a)(Object(i.a)({},e),{},{status:t.status});default:return e}}},38:function(e,t,n){"use strict";n.d(t,"b",(function(){return u}));var a=n(48),r=n(3),s={message:[{id:1,sms:"Hi"},{id:2,sms:"Yo"}],dialogs:[{id:"1",name:"Stepan"},{id:"2",name:"Ivan"},{id:"3",name:"Valera"},{id:"4",name:"Grisha"},{id:"5",name:"Stasik"}]},u=function(e){return{type:"SEND-MESSAGE",newMessageText:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND-MESSAGE":var n=t.newMessageText;return Object(r.a)(Object(r.a)({},e),{},{message:[].concat(Object(a.a)(e.message),[{id:18,sms:n}])});default:return e}}},49:function(e,t,n){e.exports={tittle:"Tittle_tittle__2rfQF",image:"Tittle_image__17BeB",log:"Tittle_log__3OVI0"}},60:function(e,t,n){e.exports={paginator:"Paginator_paginator__kleWg",currentPage:"Paginator_currentPage__JwGg2"}},84:function(e,t,n){e.exports={menu:"Menu_menu__3d4RL"}},86:function(e,t,n){e.exports=n.p+"static/media/Eclipse-1s-200px.db5ccd0a.svg"}},[[138,2,3]]]);
//# sourceMappingURL=main.11a1134a.chunk.js.map