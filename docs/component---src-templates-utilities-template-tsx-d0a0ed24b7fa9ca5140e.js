(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"306R":function(e,t,r){"use strict";var l=r("q1tI"),n=r("qhky"),a=r("Wbzz");t.a=function(e){var t=e.title,r=e.description,c=e.image,u=e.type,i=e.pathname,o=Object(a.useStaticQuery)("4121979608"),m=o.site.siteMetadata,s=o.ogImage.childImageSharp.original.src,d=m.siteUrl+"/skil3e-css/"+(null!=i?i:""),p=t+" | "+m.title,E=null!=r?r:m.description,f=null!=c?c:m.siteUrl+"/skil3e-css"+s;return l.createElement(n.a,null,l.createElement("title",null,p),l.createElement("meta",{name:"title",content:p}),l.createElement("meta",{name:"description",content:E}),l.createElement("meta",{property:"og:type",content:null!=u?u:"website"}),l.createElement("meta",{property:"og:url",content:d}),l.createElement("meta",{property:"og:title",content:p}),l.createElement("meta",{property:"og:description",content:E}),l.createElement("meta",{property:"og:image",content:f}),l.createElement("meta",{property:"twitter:card",content:"summary_large_image"}),l.createElement("meta",{property:"twitter:url",content:d}),l.createElement("meta",{property:"twitter:title",content:p}),l.createElement("meta",{property:"twitter:description",content:E}),l.createElement("meta",{property:"twitter:image",content:f}))}},"6wML":function(e,t,r){"use strict";var l=r("q1tI");t.a=function(e){var t=e.title,r=e.children;return l.createElement("div",{id:t.replace(" ","-").toLowerCase()},l.createElement("h2",{className:"mt--xxl mb--lg"},t),r&&l.createElement("p",{className:"mb--md"},r))}},Nakq:function(e,t,r){"use strict";var l=r("q1tI");t.a=function(e){var t=e.lang,r=e.children;return l.createElement("pre",{className:"language-"+(null!=t?t:"scss")},l.createElement("code",null,r))}},RB16:function(e,t,r){"use strict";r.r(t);var l=r("q1tI"),n=r("6wML"),a=r("Nakq"),c=r("KJa7"),u=function(e){var t=e.map;return"positions-placement"===t.utility&&t.prefix.push("inset","inset-x","inset-y"),l.createElement("div",{className:"overflow-y--auto mb--lg bg--bg round",style:{maxHeight:600}},t.prefix.map((function(e){return l.createElement("table",{key:e,width:"100%",className:"table-classes text--code"},l.createElement("tbody",null,function(e,t){return"jf__it"===e||"jf__self"===e?t.values.filter((function(e){return!("between"===e.key||"around"===e.key||"evenly"===e.key)})):t.values}(e,t).map((function(r){var n=r.key,a=r.val;return t.withPosition?l.createElement(o,{key:n,map:t,classKey:n,pre:e,val:a}):l.createElement(i,{key:n,map:t,classKey:n,pre:e,val:a})}))))})))},i=function(e){var t=e.pre,r=e.classKey,n=e.map,a=e.val;return l.createElement("tr",{className:"border-t border--border"},l.createElement("td",{className:"w--50 p--md "},s(t,r,n.divider)),l.createElement("td",{className:"w--50 p--md language-css"}," ",function(e,t,r){switch(e){case"inset":return l.createElement(l.Fragment,null,l.createElement("code",null,"top: ",t,";"),l.createElement("br",null),l.createElement("code",null,"right: ",t,";"),l.createElement("br",null),l.createElement("code",null,"bottom: ",t,";"),l.createElement("br",null),l.createElement("code",null,"left: ",t,";"));case"inset-y":return l.createElement(l.Fragment,null,l.createElement("code",null,"top: ",t,";"),l.createElement("br",null),l.createElement("code",null,"bottom: ",t,";"));case"inset-x":return l.createElement(l.Fragment,null,l.createElement("code",null,"right: ",t,";"),l.createElement("br",null),l.createElement("code",null,"left: ",t,";"));default:return l.createElement("code",null,"positions-placement"===r?e:d(e,r),": ",t,";")}}(t,a,n.utility)))};var o=function(e){var t=e.map,r=e.pre,n=e.classKey,a=e.val;return l.createElement(l.Fragment,null,function(e){return"round"===e?Object.entries({"":"",t:"top",b:"bottom",l:"left",r:"right"}):Object.entries({"":"",t:"top",b:"bottom",l:"left",r:"right",x:"left right",y:"top bottom"})}(r).map((function(e){var c=e[0],u=e[1];return l.createElement("tr",{key:c,className:"border-t border--border"},l.createElement("td",{className:"w--50 p--md"},s(r,n,t.divider,c)),l.createElement(m,{val:a,pre:r,posKey:c,posValue:u,utility:t.utility}))})))},m=function(e){var t=e.pre,r=e.posKey,n=e.posValue,a=e.val,c=e.utility;return l.createElement("td",{className:"w--50 p--md language-css"},"border"===t?function(e,t,r){switch(e){case"x":case"y":return l.createElement(l.Fragment,null,l.createElement("code",null,"border",t&&"-"+t.split(" ")[0],"-width: ",r,";"),l.createElement("br",null),l.createElement("code",null,"border",t&&"-"+t.split(" ")[1],"-width: ",r,";"));default:return l.createElement("code",null,"border",t&&"-"+t,"-width: ",r,";")}}(r,n,a):"round"===t?function(e,t,r){switch(e){case"t":return l.createElement(l.Fragment,null,l.createElement("code",null,"border-top-right-radius: ",r,";"),l.createElement("br",null),l.createElement("code",null,"border-top-left-radius: ",r,";"));case"b":return l.createElement(l.Fragment,null,l.createElement("code",null,"border-bottom-right-radius: ",r,";"),l.createElement("br",null),l.createElement("code",null,"border-bottom-left-radius: ",r,";"));case"l":return l.createElement(l.Fragment,null,l.createElement("code",null,"border-top-left-radius: ",r,";"),l.createElement("br",null),l.createElement("code",null,"border-bottom-left-radius: ",r,";"));case"r":return l.createElement(l.Fragment,null,l.createElement("code",null,"border-top-right-radius: ",r,";"),l.createElement("br",null),l.createElement("code",null,"border-bottom-right-radius: ",r,";"));case"x":case"y":return null;default:return l.createElement("code",null,"border-radius: ",r,";")}}(r,0,a):function(e,t,r,n,a){switch(e){case"x":case"y":return l.createElement(l.Fragment,null,l.createElement("code",null,d(n,a),t&&"-"+t.split(" ")[0],": ",r,";"),l.createElement("br",null),l.createElement("code",null,d(n,a),t&&"-"+t.split(" ")[1],": ",r,";"));default:return l.createElement("code",null,d(n,a)+(t&&"-"+t),": ",r,";")}}(r,n,a,t,c))};function s(e,t,r,l){if("null"===e)return t;if(!l)return t?e+r+t:e;switch(e){case"m":case"p":return e+l+(t&&r+t);default:return e+"-"+l+(t&&r+t)}}function d(e,t){switch(e){case"al__it":return"align-items";case"al__cnt":return"align-content";case"al__self":return"align-self";case"jf__it":return"justify-items";case"jf__cnt":return"justify-content";case"jf__self":return"justify-self";case"overflow-x":return"overflow-x";case"overflow-y":return"overflow-y";default:return t}}var p=r("306R");t.default=function(e){var t=e.pageContext.data;return Object(c.c)(),l.createElement("div",{className:"utils"},l.createElement(p.a,{title:Object(c.a)(t.utility),pathname:t.utility}),l.createElement(n.a,{title:Object(c.a)(t.utility)}),l.createElement(u,{map:t}),l.createElement(n.a,{title:"Customize"}),l.createElement(a.a,null,'@use "~skil3e-css/src/utilities/',t.utility," with (",t.variables,");"))}}}]);
//# sourceMappingURL=component---src-templates-utilities-template-tsx-d0a0ed24b7fa9ca5140e.js.map