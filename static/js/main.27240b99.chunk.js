(this["webpackJsonpwhatsapp-clone"]=this["webpackJsonpwhatsapp-clone"]||[]).push([[0],{59:function(e,a,t){e.exports=t(85)},64:function(e,a,t){},65:function(e,a,t){},66:function(e,a,t){},81:function(e,a,t){},83:function(e,a,t){},84:function(e,a,t){},85:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(24),l=t.n(r),o=(t(64),t(10)),s=(t(65),t(99)),i=t(97),m=t(49),u=t.n(m),d=t(50),p=t.n(d),h=t(35),E=t.n(h),f=t(36),v=t.n(f),b=(t(66),t(26)),g=b.initializeApp({apiKey:"AIzaSyDYfM6gURZHKQO69g3oGW9nmIl95yZMFSc",authDomain:"whatsapp-1c75a.firebaseapp.com",databaseURL:"https://whatsapp-1c75a.firebaseio.com",projectId:"whatsapp-1c75a",storageBucket:"whatsapp-1c75a.appspot.com",messagingSenderId:"59322468393",appId:"1:59322468393:web:92bee567c11193fc59f438",measurementId:"G-3JSBJGP0CS"}).firestore(),j=b.auth(),O=new b.auth.GoogleAuthProvider,S=g,N=t(27),w=Object(n.createContext)(),_=function(e){var a=e.reducer,t=e.initialState,r=e.children;return c.a.createElement(w.Provider,{value:Object(n.useReducer)(a,t)},r)},y=function(){return Object(n.useContext)(w)};var C=function(e){var a,t=Object(n.useState)(""),r=Object(o.a)(t,2),l=r[0],i=r[1],m=Object(n.useState)(""),u=Object(o.a)(m,2),d=u[0],p=u[1];return Object(n.useEffect)((function(){e.id&&S.collection("rooms").doc(e.id).collection("messages").orderBy("timestamp","desc").onSnapshot((function(e){return p(e.docs.map((function(e){return e.data()})))}))}),[e.id]),Object(n.useEffect)((function(){i(Math.floor(7e3*Math.random()))}),[]),e.name?c.a.createElement(N.b,{to:"/rooms/".concat(e.id)},c.a.createElement("div",{className:"sidebarChat"},c.a.createElement(s.a,{src:"https://avatars.dicebear.com/api/human/".concat(l,".svg")}),c.a.createElement("div",{className:"sidebarChat_info"},c.a.createElement("h2",null,e.name),c.a.createElement("p",null,null===(a=d[0])||void 0===a?void 0:a.message)))):c.a.createElement("div",{className:"sidebarChat",onClick:function(){var e=prompt("Please enter name for chat");e&&S.collection("rooms").add({name:e})}},c.a.createElement("h2",null,"Add new Chat"))};t(81);var k=function(){var e=Object(n.useState)([]),a=Object(o.a)(e,2),t=a[0],r=a[1],l=y(),m=Object(o.a)(l,2),d=m[0].user;return m[1],Object(n.useEffect)((function(){var e=S.collection("rooms").onSnapshot((function(e){return r(e.docs.map((function(e){return{id:e.id,data:e.data()}})))}));return function(){e()}}),[]),c.a.createElement("div",{className:"Sidebar"},c.a.createElement("div",{className:"sidebar_header"},c.a.createElement(s.a,{src:null===d||void 0===d?void 0:d.photoURL}),c.a.createElement("div",{className:"sidebar_heraderRight"},c.a.createElement(i.a,null,c.a.createElement(u.a,null)),c.a.createElement(i.a,null,c.a.createElement(p.a,null)),c.a.createElement(i.a,null,c.a.createElement(E.a,null)))),c.a.createElement("div",{className:"sidbar_search"},c.a.createElement("div",{className:"sidebar_searchContainer"},c.a.createElement(v.a,null),c.a.createElement("input",{type:"text",placeholder:"Search or start new chat"}))),c.a.createElement("div",{className:"sidebar_chats"},c.a.createElement(C,null),t.map((function(e){return c.a.createElement(C,{key:e.id,id:e.id,name:e.data.name})}))))},I=t(51),x=t.n(I),A=t(52),D=t.n(A),M=t(53),R=t.n(M),W=(t(83),t(4));var B=function(){var e,a,t=Object(n.useState)(""),r=Object(o.a)(t,2),l=r[0],m=r[1],u=Object(n.useState)(""),d=Object(o.a)(u,2),p=d[0],h=d[1],f=Object(W.f)().roomId,g=Object(n.useState)(""),j=Object(o.a)(g,2),O=j[0],N=j[1],w=Object(n.useState)([]),_=Object(o.a)(w,2),C=_[0],k=_[1],I=y(),A=Object(o.a)(I,2),M=A[0].user;return A[1],Object(n.useEffect)((function(){f&&(S.collection("rooms").doc(f).onSnapshot((function(e){console.log(e),N(e.data().name)})),S.collection("rooms").doc(f).collection("messages").orderBy("timestamp","asc").onSnapshot((function(e){console.log(e),k(e.docs.map((function(e){return e.data()})))})))}),[f]),Object(n.useEffect)((function(){m(Math.floor(7e3*Math.random()))}),[]),c.a.createElement("div",{className:"chat"},c.a.createElement("div",{className:"chat_header"},c.a.createElement(s.a,{src:"https://avatars.dicebear.com/api/human/".concat(l,".svg")}),c.a.createElement("div",{className:"chat_headerInfo"},c.a.createElement("h3",null,O),c.a.createElement("p",null,"last seen ",new Date(null===(e=C[C.length-1])||void 0===e||null===(a=e.timestamp)||void 0===a?void 0:a.toDate()).toUTCString())),c.a.createElement("div",{className:"chat_headerRight"},c.a.createElement(i.a,null,c.a.createElement(v.a,null)),c.a.createElement(i.a,null,c.a.createElement(x.a,null)),c.a.createElement(i.a,null,c.a.createElement(E.a,null)))),c.a.createElement("div",{className:"chat_body"},C.map((function(e){var a;return c.a.createElement("p",{className:"chat_message ".concat(e.name==M.displayName&&"chat_reciver")},c.a.createElement("span",{className:"chat_name"},e.name),e.message,c.a.createElement("span",{className:"chat_time"},new Date(null===(a=e.timestamp)||void 0===a?void 0:a.toDate()).toUTCString()))}))),c.a.createElement("div",{className:"chat_footer"},c.a.createElement(D.a,null),c.a.createElement("form",{action:""},c.a.createElement("input",{value:p,onChange:function(e){return h(e.target.value)},type:"text",placeholder:"Type a message",name:"",id:""}),c.a.createElement("button",{type:"submit",onClick:function(e){e.preventDefault(),console.log(p),S.collection("rooms").doc(f).collection("messages").add({message:p,name:M.displayName,timestamp:b.firestore.FieldValue.serverTimestamp()}),h("")}},"send")),c.a.createElement(R.a,null)))},U=t(54),G=(t(84),t(98)),P=t(40),T="SET_USER",J=function(e,a){switch(a.type){case T:return Object(P.a)(Object(P.a)({},e),{},{user:a.user});default:return e}};var z=function(){var e=y(),a=Object(o.a)(e,2);Object(U.a)(a[0]);var t=a[1];return c.a.createElement("div",{className:"login"},c.a.createElement("div",{className:"login_container"},c.a.createElement("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/597px-WhatsApp.svg.png",alt:""}),c.a.createElement("div",{className:"login_text"},c.a.createElement("h1",null,"Sign in to Whatsapp")),c.a.createElement(G.a,{onClick:function(){j.signInWithPopup(O).then((function(e){t({type:T,user:e.user})})).catch((function(e){return alert(e.message)}))}},"Sign in with Google")))};var F=function(){var e=y(),a=Object(o.a)(e,2),t=a[0].user;return a[1],c.a.createElement("div",{className:"App"},t?c.a.createElement("div",{className:"app_body"},c.a.createElement(N.a,null,c.a.createElement(k,null),c.a.createElement(W.c,null,c.a.createElement(W.a,{exact:!0,path:"/rooms/:roomId"},c.a.createElement(B,null)),c.a.createElement(W.a,{exact:!0,path:"/"},c.a.createElement(B,null))))):c.a.createElement(z,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(_,{initialState:{user:null},reducer:J},c.a.createElement(F,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[59,1,2]]]);
//# sourceMappingURL=main.27240b99.chunk.js.map