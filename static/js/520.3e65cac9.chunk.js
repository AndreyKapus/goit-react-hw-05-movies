"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[520],{25:function(n,t,e){e.d(t,{Mc:function(){return f},mv:function(){return g},r7:function(){return v},uV:function(){return h},vw:function(){return s}});var r=e(861),a=e(757),c=e.n(a),i=e(44),u="7f79b9469f05b818a5fcd6a2e700e54b",o="https://api.themoviedb.org/3";function s(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.ZP.get("".concat(o,"/trending/movie/day?api_key=").concat(u)).then((function(n){return n.data.results}));case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.ZP.get("".concat(o,"/movie/").concat(t,"?api_key=").concat(u,"&language=en-US")).then((function(n){return n.data}));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.ZP.get("".concat(o,"/movie/").concat(t,"/credits?api_key=").concat(u,"&language=en-US")).then((function(n){return n.data}));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.ZP.get("".concat(o,"/movie/").concat(t,"/reviews?api_key=").concat(u,"&language=en-US")).then((function(n){return n.data}));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function g(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.ZP.get("".concat(o,"/search/movie?api_key=").concat(u,"&query=").concat(t,"&language=en-US")).then((function(n){return n.data}));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},152:function(n,t,e){e.d(t,{a:function(){return c}});var r=e(523),a=e(184),c=function(){return(0,a.jsx)("div",{children:(0,a.jsx)(r.Bb,{height:"80",width:"80",radius:"9",color:"green",ariaLabel:"three-dots-loading",wrapperStyle:!0,wrapperClass:!0})})}},520:function(n,t,e){e.r(t),e.d(t,{MovieDetails:function(){return _},default:function(){return S}});var r,a,c,i,u,o,s=e(885),p=e(791),f=e(470),d=e(25),h=e(731),l=e(184),v=function(n){var t=n.backLinkRef;return(0,l.jsx)("div",{children:(0,l.jsx)(h.OL,{to:t,children:"Go back"})})},x=e(152),g=e(168),m=e(839),w=m.Z.div(r||(r=(0,g.Z)(["\n  display: flex;\n  padding-left: 50px;\n  padding-right: 50px;\n"]))),Z=m.Z.div(a||(a=(0,g.Z)(["\n  margin-top: 50px;\n  margin-right: 30px;\n"]))),j=m.Z.div(c||(c=(0,g.Z)(["\n  margin-top: 50px;\n"]))),y=(0,m.Z)(h.OL)(i||(i=(0,g.Z)(["\n  margin-right: 20px;\n  color: gray;\n  font-size: 24px;\n"]))),b=m.Z.p(u||(u=(0,g.Z)(["\n  margin-bottom: 30px;\n"]))),k=m.Z.div(o||(o=(0,g.Z)(["\n  margin-bottom: 30px;\n"]))),_=function(){var n,t,e=(0,p.useState)(null),r=(0,s.Z)(e,2),a=r[0],c=r[1],i=(0,f.UO)().movieId,u=(0,p.useState)(!1),o=(0,s.Z)(u,2),h=o[0],g=o[1],m=null!==(n=null===(t=(0,f.TH)().state)||void 0===t?void 0:t.from)&&void 0!==n?n:"/";return(0,p.useEffect)((function(){g(!0),(0,d.Mc)(i).then((function(n){c(n)})),g(!1)}),[i]),a?(0,l.jsxs)(w,{children:[(0,l.jsx)(v,{backLinkRef:m}),(0,l.jsx)(Z,{children:(0,l.jsx)("img",{src:"https://image.tmdb.org/t/p/w300".concat(a.poster_path),alt:""})}),(0,l.jsxs)(j,{children:[(0,l.jsxs)("h2",{children:[a.title," ",a.release_date.slice(0,4)]}),(0,l.jsxs)("p",{children:["Vote average: ",a.vote_average]}),(0,l.jsx)("h3",{children:"Overview"}),(0,l.jsx)("p",{children:a.overview}),(0,l.jsxs)(b,{children:["Genre: ",a.genres.map((function(n){return n.name})).join(" ")]}),(0,l.jsxs)(k,{children:[(0,l.jsx)(y,{to:"movies/".concat(i,"/reviews"),children:"Reviews"}),(0,l.jsx)(y,{to:"movies/".concat(i,"/cast"),children:"Cast"})]}),(0,l.jsx)(f.j3,{}),h&&(0,l.jsx)(x.a,{})]})]}):null},S=_}}]);
//# sourceMappingURL=520.3e65cac9.chunk.js.map