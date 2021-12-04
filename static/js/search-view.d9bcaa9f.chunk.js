(this["webpackJsonpreact-5-movies"]=this["webpackJsonpreact-5-movies"]||[]).push([[8],{44:function(e,t,c){"use strict";c.d(t,"a",(function(){return i}));var a=c(47),n=c.n(a),r=c(2);function i(e){var t=e.children,c=e.additionalClass;return Object(r.jsx)("div",{className:"".concat(c,", ").concat(n.a.Container," "),children:t})}},45:function(e,t,c){"use strict";c.d(t,"a",(function(){return i}));var a=c(48),n=c.n(a),r=c(2);function i(e){var t=e.children,c=e.heading,a=e.additionalClass;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h2",{children:c}),Object(r.jsx)("ul",{className:"".concat(n.a.List,", ").concat(a),children:t})]})}},46:function(e,t,c){"use strict";c.d(t,"a",(function(){return a})),c.d(t,"b",(function(){return n}));c(52),c(53);var a="6fc149a4cf08bb260c2094f65b6f8095",n="https://api.themoviedb.org/3"},47:function(e,t,c){e.exports={Container:"Container_Container__RbBaM"}},48:function(e,t,c){e.exports={List:"List_List__21E3Q"}},54:function(e,t,c){"use strict";c.d(t,"a",(function(){return i}));var a=c(55),n=c.n(a),r=c(2);function i(e){var t=e.type,c=e.text,a=e.onClick,i=e.children;return Object(r.jsxs)("button",{className:n.a.Button,type:t,onClick:a,children:[c," ",i]})}},55:function(e,t,c){e.exports={Button:"Button_Button__2wZpR"}},85:function(e,t,c){e.exports={Searchbar:"Searchbar_Searchbar__3OVSN",Searchbar__input:"Searchbar_Searchbar__input__3Tr_B"}},86:function(e,t,c){e.exports={Search__item:"MovieSearchView_Search__item__2Xqa- HomeView_Home__item__263oX",Search__image:"MovieSearchView_Search__image__1ZPU6 HomeView_Home__image__skJiW",Search__description:"MovieSearchView_Search__description__2c_VD HomeView_Home__description__3r3-y",Search__title:"MovieSearchView_Search__title__tJiAO HomeView_Home__title__1iBkE",Search__overview:"MovieSearchView_Search__overview__1uJpn HomeView_Home__overview__1-KNm"}},98:function(e,t,c){"use strict";c.r(t),c.d(t,"default",(function(){return x}));var a=c(91),n=c(5),r=c(49),i=c.n(r),s=c(54),o=c(0),u=c(93),_=(c(84),c(6)),l=c(85),h=c.n(l),b=c(2);function j(e){var t=e.onSubmit,c=Object(o.useState)(""),a=Object(n.a)(c,2),r=a[0],i=a[1],l=Object(_.d)(),j=Object(n.a)(l,2),d=j[0],m=j[1];console.log(d.get("query"));return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("form",{className:h.a.Searchbar,onSubmit:function(e){e.preventDefault(),""!==r.trim()?(m({query:r}),t(r)):u.a.error("Please type the query",{position:"top-right",hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})},children:[Object(b.jsx)("label",{htmlFor:"inputSearch"}),Object(b.jsx)("input",{className:h.a.Searchbar__input,type:"text",name:"query",value:r,onChange:function(e){i(e.currentTarget.value.toLowerCase())},id:"inputSearch"}),Object(b.jsx)(s.a,{text:"Search",type:"submit"})]})})}var d=c(1),m=c(45),O=c(11),f=c(44),S=c(46),p=c(86),v=c.n(p);function x(){var e=Object(o.useState)(""),t=Object(n.a)(e,2),c=t[0],r=t[1],u=Object(o.useState)([]),l=Object(n.a)(u,2),h=l[0],p=l[1],x=Object(o.useState)(null),g=Object(n.a)(x,2),w=(g[0],g[1]),y=Object(o.useState)(0),N=Object(n.a)(y,2),C=N[0],V=N[1],H=Object(o.useState)(1),k=Object(n.a)(H,2),B=k[0],M=k[1],q=Object(o.useState)(!1),D=Object(n.a)(q,2),J=D[0],L=D[1];Object(d.e)();Object(o.useEffect)((function(){""!==c&&(L(!0),r(c),i.a.get("".concat(S.b,"/search/movie?api_key=").concat(S.a,"&language=en-US&query=").concat(c,"&page=").concat(B,"&include_adult=false")).then((function(e){var t=e.data.results,c=e.data.total_results;p((function(e){return[].concat(Object(a.a)(e),Object(a.a)(t))})),V(c)})).catch((function(e){return w(e.message)})).finally((function(){return L(!1)})))}),[c,B]),Object(o.useEffect)((function(){window.sessionStorage.setItem("searchDetails",JSON.stringify({searchQuery:c,searchDetails:h}))}),[h]);return Object(b.jsxs)(f.a,{children:[Object(b.jsx)(j,{onSubmit:function(e){r(e),M(1),p([]),w(null)}}),J&&Object(b.jsx)(O.a,{}),h.length>0&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("h2",{children:["Results on ",'"'.concat(c,'"')]}),Object(b.jsx)(m.a,{children:h.map((function(e){var t=e.title,c=e.id,a=e.poster_path,n=e.release_date,r=e.overview;return Object(b.jsxs)("li",{className:v.a.Search__item,children:[Object(b.jsx)("img",{alt:t,src:"https://image.tmdb.org/t/p/w500/".concat(a),className:v.a.Search__image}),Object(b.jsxs)("div",{className:v.a.Search__description,children:[Object(b.jsx)(_.b,{to:"/movies/".concat(c),className:v.a.Search__title,children:Object(b.jsx)("h2",{children:t})}),Object(b.jsxs)("p",{children:[" ",new Date(n).toDateString()]}),Object(b.jsx)("p",{className:v.a.Search__overview,children:r})]})]},c)}))})]}),C>20&&Object(b.jsx)(s.a,{text:"Load More",onClick:function(){M((function(e){return e+1}))}}),0===h.length&&c&&Object(b.jsxs)("div",{children:["Nothing was found on ",c]})]})}}}]);
//# sourceMappingURL=search-view.d9bcaa9f.chunk.js.map