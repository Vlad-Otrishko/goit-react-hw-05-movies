(this["webpackJsonpgoit-react-hw-05-movies"]=this["webpackJsonpgoit-react-hw-05-movies"]||[]).push([[1],{70:function(t,a,e){t.exports={actorList:"CastSubview_actorList__1y128",actorData:"CastSubview_actorData__2GaG1",character:"CastSubview_character__2dzrW",actorPhoto:"CastSubview_actorPhoto__2r9i4",name:"CastSubview_name__4WvXD"}},76:function(t,a,e){"use strict";e.r(a),e.d(a,"default",(function(){return b}));var c=e(53),r=e(3),s=e(0),o=e(55),i=e(54),n=e(70),u=e.n(n),h=e(1),l=new o.a,b=function(){var t=Object(r.h)().movieId,a=Object(s.useState)([]),e=Object(c.a)(a,2),o=e[0],n=e[1],b=t+"/credits";return Object(s.useEffect)((function(){l.reset(),l.searchType=2,l.request=b,l.searchMovies().then((function(t){console.log("result",t),n(t.cast)}))}),[b]),o&&Object(h.jsx)("ul",{className:u.a.actorList,children:o.map((function(t){return Object(h.jsxs)("li",{className:u.a.actorData,children:[Object(h.jsx)("h3",{className:u.a.character,children:t.character}),Object(h.jsx)("h3",{className:u.a.name,children:t.name}),Object(h.jsx)("img",{className:u.a.actorPhoto,src:"https://image.tmdb.org/t/p/w500/".concat(t.profile_path),alt:t.name,onError:function(t){return t.target.src=i.a}}),Object(h.jsxs)("p",{children:["Popularity:",t.popularity," "]})]},t.id)}))})}}}]);
//# sourceMappingURL=Cast.f08b1973.chunk.js.map