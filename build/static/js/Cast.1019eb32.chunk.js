(this["webpackJsonpgoit-react-hw-05-movies"]=this["webpackJsonpgoit-react-hw-05-movies"]||[]).push([[1],{70:function(t,a,e){t.exports={actorList:"CastSubview_actorList__1y128",actorData:"CastSubview_actorData__2GaG1",character:"CastSubview_character__2dzrW",actorPhoto:"CastSubview_actorPhoto__2r9i4",name:"CastSubview_name__4WvXD"}},76:function(t,a,e){"use strict";e.r(a),e.d(a,"default",(function(){return l}));var c=e(53),r=e(3),s=e(0),i=e(55),o=e(54),n=e(70),u=e.n(n),h=e(1),b=new i.a,l=function(){var t=Object(r.h)().movieId,a=Object(s.useState)([]),e=Object(c.a)(a,2),i=e[0],n=e[1],l=t+"/credits";return Object(s.useEffect)((function(){b.reset(),b.searchType=2,b.request=l,b.searchMovies().then((function(t){n(t.cast)}))}),[l]),i&&Object(h.jsx)("ul",{className:u.a.actorList,children:i.map((function(t){return Object(h.jsxs)("li",{className:u.a.actorData,children:[Object(h.jsx)("h3",{className:u.a.character,children:t.character}),Object(h.jsx)("h3",{className:u.a.name,children:t.name}),Object(h.jsx)("img",{className:u.a.actorPhoto,src:"https://image.tmdb.org/t/p/w500/".concat(t.profile_path),alt:t.name,onError:function(t){return t.target.src=o.a}}),Object(h.jsxs)("p",{children:["Popularity:",t.popularity," "]})]},t.id)}))})}}}]);
//# sourceMappingURL=Cast.1019eb32.chunk.js.map