(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"HJ+G":function(e,t,n){"use strict";n.r(t),n.d(t,"query",(function(){return s}));var r=n("q1tI"),a=n("H8eV"),l=["contain","cover","fill","none","scale-down"],c=l.map((function(e){return'<img class="obj__fit--'+e+'" src="..." alt="..."/>\n'})),i=["center","top","bottom","left","right","left-top","left-bottom","right-top","right-bottom"],o=i.map((function(e){return'<img class="obj__pos--'+e+'" src="..." alt="..."/>\n'})),m=n("sR9D"),s=(t.default=function(e){var t=e.data;console.log(t);var n=t.allImageSharp.nodes;return console.log(n),r.createElement(r.Fragment,null,r.createElement(a.a,{title:"Object"}),r.createElement("h1",null,"Object"),r.createElement("p",null,"The class constructor looks like this:"),r.createElement(m.b,{label:"For Object Fit",codeString:"obj__fit--{value}"}),r.createElement(m.b,{label:"For Object Position",codeString:"obj__pos--{value}"}),r.createElement(m.d,{id:"object-fit",codeString:c.join("")},r.createElement("div",{className:"grid ",style:{gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:20}},l.map((function(e){return r.createElement("div",{key:e},r.createElement("img",{className:"brd obj__fit--"+e,width:200,height:200,src:n[1].original.src,alt:"sample"}),r.createElement("p",null,".obj__fit--",e))})))),r.createElement(m.d,{id:"object-position",codeString:o.join("")},r.createElement("div",{className:"grid ",style:{gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:20}},i.map((function(e){return r.createElement("div",{key:e},r.createElement("img",{className:"brd obj__fit--none obj__pos--"+e,width:200,height:200,src:n[0].original.src,alt:"sample"}),r.createElement("p",null,".obj__pos--",e))})))))},"2239409008")},sR9D:function(e,t,n){"use strict";n.d(t,"d",(function(){return c})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return m}));var r=n("q1tI"),a=n("LTBh"),l=n("z6+x"),c=function(e){var t=e.id,n=e.children,c=e.codeString,i=e.headingSize;return r.createElement("section",{id:t,className:"pt--xs"},r.createElement("h2",{className:i},Object(l.c)(t)),n,c&&r.createElement(a.a,{lang:"html",codeString:c}))},i=Object(r.memo)((function(e){var t=e.children,n=e.className,a=e.wrapperClassName,l=e.isDefault,c=e.grid,i=e.useHeight,o=void 0===i||i,m=e.height,s=void 0===m?120:m,d=e.wrap,u=e.customLabel;return r.createElement("div",{className:a},n?r.createElement("small",{className:"block mb--xs"},r.createElement("code",null,".",u||n," ",l&&"(default)")):"",r.createElement("div",{style:{minHeight:o&&120,height:o&&s,gridTemplateColumns:" repeat(auto-fit, minmax(300px, 1fr) )"},className:(c?"grid":"flex")+" "+(d?"flex--wrap":"")+" bg--bgDimmed text--text brd--border brd--md brd--border p--xs mb--md round "+n},t))})),o=Object(r.memo)((function(e){var t=e.className,n=e.fullwidth,a=e.children,l=e.style;return r.createElement("div",{style:l,className:(n?"w--100":"")+" p--md bg--bg text--text brd--md brd--bgDimmed round "+(t||"")},a||"Child")})),m=function(e){var t=e.label,n=e.codeString;return r.createElement(r.Fragment,null,r.createElement("small",{className:"block p--xs"},t),r.createElement(a.a,{lang:"html",codeString:n}))}}}]);
//# sourceMappingURL=component---src-pages-utilities-object-tsx-e42918da7a8a084d1d1a.js.map