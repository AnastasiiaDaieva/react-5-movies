(this["webpackJsonpreact-5-movies"]=this["webpackJsonpreact-5-movies"]||[]).push([[3],{45:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var i=n(49),c=n.n(i),a=n(2);function o(e){var t=e.children,n=e.additionalClass;return Object(a.jsx)("div",{className:"".concat(n,", ").concat(c.a.Container," "),children:t})}},46:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var i=n(47),c=n.n(i),a=n(2);function o(e){var t=e.children,n=e.heading,i=e.additionalClass,o=e.classProp;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h2",{className:o,children:n}),Object(a.jsx)("ul",{className:"".concat(c.a.List,", ").concat(i),children:t})]})}},47:function(e,t,n){e.exports={List:"List_List__21E3Q"}},48:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return c}));var i="6fc149a4cf08bb260c2094f65b6f8095",c="https://api.themoviedb.org/3"},49:function(e,t,n){e.exports={Container:"Container_Container__RbBaM"}},81:function(e,t,n){e.exports={Home__item:"HomeView_Home__item__263oX",Home__description:"HomeView_Home__description__3r3-y",Home__title:"HomeView_Home__title__1iBkE",Home__image:"HomeView_Home__image__skJiW",Home__overview:"HomeView_Home__overview__1-KNm",Home__heading:"HomeView_Home__heading__hPUsH"}},93:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return h}));var i=n(5),c=n(53),a=n.n(c),o=n(48),s=n(0),r=n(6),_=n(45),m=n(46),d=n(11),l=n(81),u=n.n(l),j=n(2);function h(){var e=Object(s.useState)([]),t=Object(i.a)(e,2),n=t[0],c=t[1],l=Object(s.useState)(!1),h=Object(i.a)(l,2),b=h[0],f=h[1];return Object(s.useEffect)((function(){f(!0),a.a.get("".concat(o.b,"/trending/movie/day?api_key=").concat(o.a,"\n")).then((function(e){var t=e.data.results;c(t)})).catch((function(e){return console.log(e.message)})).finally((function(){return f(!1)}))}),[]),Object(j.jsxs)(j.Fragment,{children:[b&&Object(j.jsx)(d.a,{}),Object(j.jsx)(_.a,{children:Object(j.jsx)(m.a,{heading:"Trending Today",classProp:u.a.Home__heading,children:n.map((function(e){var t=e.title,n=e.id,i=e.poster_path,c=e.release_date,a=e.overview;return Object(j.jsxs)("li",{className:u.a.Home__item,children:[Object(j.jsx)("img",{alt:t,src:"https://image.tmdb.org/t/p/w500/".concat(i),className:u.a.Home__image}),Object(j.jsxs)("div",{className:u.a.Home__description,children:[Object(j.jsx)(r.b,{to:"/movies/".concat(n),className:u.a.Home__title,children:Object(j.jsx)("h2",{children:t})}),Object(j.jsxs)("p",{children:[" ",new Date(c).toDateString()]}),Object(j.jsx)("p",{className:u.a.Home__overview,children:a})]})]},n)}))})})]})}}}]);
//# sourceMappingURL=home-view.d1142942.chunk.js.map