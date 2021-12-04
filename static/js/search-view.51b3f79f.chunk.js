(this["webpackJsonpreact-5-movies"]=this["webpackJsonpreact-5-movies"]||[]).push([[8],{129:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return x}));var c=a(122),n=a(5),r=a(50),i=a.n(r),s=a(54),o=a(0),u=a(124),_=(a(93),a(6)),l=a(94),h=a.n(l),b=a(2);function j(e){var t=e.onSubmit,a=Object(o.useState)(""),c=Object(n.a)(a,2),r=c[0],i=c[1],l=Object(_.d)(),j=Object(n.a)(l,2),d=(j[0],j[1]);return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("form",{className:h.a.Searchbar,onSubmit:function(e){e.preventDefault(),""!==r.trim()?(d({query:r}),t(r)):u.a.error("Please type the query",{position:"top-right",hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})},children:[Object(b.jsx)("label",{htmlFor:"inputSearch"}),Object(b.jsx)("input",{className:h.a.Searchbar__input,type:"text",name:"query",value:r,onChange:function(e){i(e.currentTarget.value.toLowerCase())},id:"inputSearch",placeholder:"Please type a movie title"}),Object(b.jsx)(s.a,{text:"Search",type:"submit"})]})})}var d=a(1),m=a(46),O=a(11),p=a(45),f=a(47),S=a(95),v=a.n(S);a(96);function x(){var e=Object(o.useState)(""),t=Object(n.a)(e,2),a=t[0],r=t[1],u=Object(o.useState)([]),l=Object(n.a)(u,2),h=l[0],S=l[1],x=Object(o.useState)(null),g=Object(n.a)(x,2),w=(g[0],g[1]),N=Object(o.useState)(0),y=Object(n.a)(N,2),C=y[0],V=y[1],H=Object(o.useState)(1),k=Object(n.a)(H,2),B=k[0],M=k[1],L=Object(o.useState)(!1),q=Object(n.a)(L,2),J=q[0],P=q[1],D=Object(d.e)();Object(o.useEffect)((function(){""!==a&&(P(!0),r(a),i.a.get("".concat(f.b,"/search/movie?api_key=").concat(f.a,"&language=en-US&query=").concat(a,"&page=").concat(B,"&include_adult=false")).then((function(e){var t=e.data.results,a=e.data.total_results;S((function(e){return[].concat(Object(c.a)(e),Object(c.a)(t))})),V(a)})).catch((function(e){return w(e.message)})).finally((function(){return P(!1)})))}),[a,B]);return Object(b.jsxs)(p.a,{children:[Object(b.jsx)(j,{onSubmit:function(e){r(e),M(1),S([]),w(null)}}),J&&Object(b.jsx)(O.a,{}),h.length>0&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("h2",{children:["Results on ",'"'.concat(a,'"')]}),Object(b.jsx)(m.a,{children:h.map((function(e){var t=e.title,a=e.id,c=e.poster_path,n=e.release_date,r=e.overview;return Object(b.jsxs)("li",{className:v.a.Search__item,children:[Object(b.jsx)("img",{alt:t,src:"https://image.tmdb.org/t/p/w500/".concat(c),className:v.a.Search__image}),Object(b.jsxs)("div",{className:v.a.Search__description,children:[Object(b.jsx)(_.b,{to:"/movies/".concat(a),state:{from:D},className:v.a.Search__title,children:Object(b.jsx)("h2",{children:t})}),Object(b.jsxs)("p",{children:[" ",new Date(n).toDateString()]}),Object(b.jsx)("p",{className:v.a.Search__overview,children:r})]})]},a)}))})]}),C>20&&Object(b.jsx)(s.a,{text:"Load More",onClick:function(){M((function(e){return e+1}))}}),0===h.length&&a&&Object(b.jsxs)("div",{children:["Nothing was found on ",a]})]})}},45:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var c=a(48),n=a.n(c),r=a(2);function i(e){var t=e.children,a=e.additionalClass;return Object(r.jsx)("div",{className:"".concat(a,", ").concat(n.a.Container," "),children:t})}},46:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var c=a(49),n=a.n(c),r=a(2);function i(e){var t=e.children,a=e.heading,c=e.additionalClass,i=e.classProp;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h2",{className:i,children:a}),Object(r.jsx)("ul",{className:"".concat(n.a.List,", ").concat(c),children:t})]})}},47:function(e,t,a){"use strict";a.d(t,"a",(function(){return c})),a.d(t,"b",(function(){return n}));a(53),a(57);var c="6fc149a4cf08bb260c2094f65b6f8095",n="https://api.themoviedb.org/3"},48:function(e,t,a){e.exports={Container:"Container_Container__RbBaM"}},49:function(e,t,a){e.exports={List:"List_List__21E3Q"}},54:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var c=a(58),n=a.n(c),r=a(2);function i(e){var t=e.type,a=e.text,c=e.onClick,i=e.children;return Object(r.jsxs)("button",{className:n.a.Button,type:t,onClick:c,children:[a," ",i]})}},58:function(e,t,a){e.exports={Button:"Button_Button__2wZpR"}},94:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__3OVSN",Searchbar__input:"Searchbar_Searchbar__input__3Tr_B"}},95:function(e,t,a){e.exports={Search__item:"MovieSearchView_Search__item__2Xqa- HomeView_Home__item__263oX",Search__image:"MovieSearchView_Search__image__1ZPU6 HomeView_Home__image__skJiW",Search__description:"MovieSearchView_Search__description__2c_VD HomeView_Home__description__3r3-y",Search__title:"MovieSearchView_Search__title__tJiAO HomeView_Home__title__1iBkE",Search__overview:"MovieSearchView_Search__overview__1uJpn HomeView_Home__overview__1-KNm"}}}]);
//# sourceMappingURL=search-view.51b3f79f.chunk.js.map