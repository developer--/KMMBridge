"use strict";(self.webpackChunkmy_website_ts=self.webpackChunkmy_website_ts||[]).push([[817],{6487:function(e,t,n){n.d(t,{Z:function(){return E}});var r=n(7462),a=n(7294),i=n(8425),l=n(8596),c=n(5281),s={breadcrumbsContainer:"breadcrumbsContainer_Xlws",breadcrumbHomeIcon:"breadcrumbHomeIcon_kU5B"},o=n(6010),m=n(9960),d=n(4996),u=n(5999);function h(e){return a.createElement("svg",(0,r.Z)({viewBox:"0 0 24 24"},e),a.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}function b(e){var t=e.children,n=e.href,r="breadcrumbs__link";return e.isLast?a.createElement("span",{className:r,itemProp:"name"},t):n?a.createElement(m.Z,{className:r,href:n,itemProp:"item"},a.createElement("span",{itemProp:"name"},t)):a.createElement("span",{className:r},t)}function v(e){var t=e.children,n=e.active,i=e.index,l=e.addMicrodata;return a.createElement("li",(0,r.Z)({},l&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,o.Z)("breadcrumbs__item",{"breadcrumbs__item--active":n})}),t,a.createElement("meta",{itemProp:"position",content:String(i+1)}))}function f(){var e=(0,d.Z)("/");return a.createElement("li",{className:"breadcrumbs__item"},a.createElement(m.Z,{"aria-label":(0,u.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:(0,o.Z)("breadcrumbs__link",s.breadcrumbsItemLink),href:e},a.createElement(h,{className:s.breadcrumbHomeIcon})))}function E(){var e=(0,i.s1)(),t=(0,l.Ns)();return e?a.createElement("nav",{className:(0,o.Z)(c.k.docs.docBreadcrumbs,s.breadcrumbsContainer),"aria-label":(0,u.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},a.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&a.createElement(f,null),e.map((function(t,n){var r=n===e.length-1;return a.createElement(v,{key:n,active:r,index:n,addMicrodata:!!t.href},a.createElement(b,{href:t.href,isLast:r},t.label))})))):null}},8507:function(e,t,n){n.r(t),n.d(t,{default:function(){return V}});var r=n(7294),a=n(1944),i=n(8425),l=n(6010),c=n(9960),s="cardContainer_woeA",o="cardTitle_pNjP",m="cardDescription_qC_k",d=n(3919),u=n(5999);function h(e){var t=e.href,n=e.children;return r.createElement(c.Z,{href:t,className:(0,l.Z)("card padding--lg",s)},n)}function b(e){var t=e.href,n=e.icon,a=e.title,i=e.description;return r.createElement(h,{href:t},r.createElement("h2",{className:(0,l.Z)("text--truncate",o),title:a},n," ",a),i&&r.createElement("p",{className:(0,l.Z)("text--truncate",m),title:i},i))}function v(e){var t=e.item,n=(0,i.Wl)(t);return n?r.createElement(b,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,u.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function f(e){var t,n=e.item,a=(0,d.Z)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",l=(0,i.xz)(null!=(t=n.docId)?t:void 0);return r.createElement(b,{href:n.href,icon:a,title:n.label,description:null==l?void 0:l.description})}function E(e){var t=e.item;switch(t.type){case"link":return r.createElement(f,{item:t});case"category":return r.createElement(v,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function g(e){var t=e.items,n=e.className;return r.createElement("section",{className:(0,l.Z)("row",n)},function(e){return e.filter((function(e){return"category"!==e.type||!!(0,i.Wl)(e)}))}(t).map((function(e,t){return r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(E,{key:t,item:e}))})))}var p=n(7311),Z=n(4474),N=n(7597),k=n(6487),L=n(9649),y=n(4996),_="generatedIndexPage_vzzw",w="list_HAaG",T="title_qBh7";function I(e){var t=e.categoryGeneratedIndex;return r.createElement(a.d,{title:t.title,description:t.description,keywords:t.keywords,image:(0,y.Z)(t.image)})}function C(e){var t=e.categoryGeneratedIndex,n=(0,i.jA)();return r.createElement(r.Fragment,null,r.createElement(a.d,{title:t.title,description:t.description,keywords:t.keywords,image:(0,y.Z)(t.image)}),r.createElement("div",{className:_},r.createElement(Z.Z,null),r.createElement(k.Z,null),r.createElement(N.Z,null),r.createElement("header",null,r.createElement(L.Z,{as:"h1",className:T},t.title),t.description&&r.createElement("p",null,t.description)),r.createElement("article",{className:"margin-top--lg"},r.createElement(g,{items:n.items,className:w})),r.createElement("footer",{className:"margin-top--lg"},r.createElement(p.Z,{previous:t.navigation.previous,next:t.navigation.next}))))}function V(e){return r.createElement(r.Fragment,null,r.createElement(I,e),r.createElement(C,e))}},7597:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(7294),a=n(5999),i=n(4477),l=n(5281),c=n(6010);function s(e){var t=e.className,n=(0,i.E)();return n.badge?r.createElement("span",{className:(0,c.Z)(t,l.k.docs.docVersionBadge,"badge badge--secondary")},r.createElement(a.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label}},"Version: {versionLabel}")):null}},4474:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(7294),a=n(2263),i=n(9960),l=n(5999),c=n(5551),s=n(373),o=n(5281),m=n(4477),d=n(6010);var u={unreleased:function(e){var t=e.siteTitle,n=e.versionMetadata;return r.createElement(l.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:r.createElement("b",null,n.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,n=e.versionMetadata;return r.createElement(l.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:r.createElement("b",null,n.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function h(e){var t=u[e.versionMetadata.banner];return r.createElement(t,e)}function b(e){var t=e.versionLabel,n=e.to,a=e.onClick;return r.createElement(l.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:r.createElement("b",null,r.createElement(i.Z,{to:n,onClick:a},r.createElement(l.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function v(e){var t,n=e.className,i=e.versionMetadata,l=(0,a.Z)().siteConfig.title,m=(0,c.gA)({failfast:!0}).pluginId,u=(0,s.J)(m).savePreferredVersionName,v=(0,c.Jo)(m),f=v.latestDocSuggestion,E=v.latestVersionSuggestion,g=null!=f?f:(t=E).docs.find((function(e){return e.id===t.mainDocId}));return r.createElement("div",{className:(0,d.Z)(n,o.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},r.createElement("div",null,r.createElement(h,{siteTitle:l,versionMetadata:i})),r.createElement("div",{className:"margin-top--md"},r.createElement(b,{versionLabel:E.label,to:g.path,onClick:function(){return u(E.name)}})))}function f(e){var t=e.className,n=(0,m.E)();return n.banner?r.createElement(v,{className:t,versionMetadata:n}):null}},9649:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(7462),a=n(3366),i=n(7294),l=n(6010),c=n(5999),s=n(6668),o="anchorWithStickyNavbar_mojV",m="anchorWithHideOnScrollNavbar_R0VQ",d=["as","id"];function u(e){var t=e.as,n=e.id,u=(0,a.Z)(e,d),h=(0,s.L)().navbar.hideOnScroll;return"h1"!==t&&n?i.createElement(t,(0,r.Z)({},u,{className:(0,l.Z)("anchor",h?m:o),id:n}),u.children,i.createElement("a",{className:"hash-link",href:"#"+n,title:(0,c.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):i.createElement(t,(0,r.Z)({},u,{id:void 0}))}},7311:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(7294);n(5999),n(9960);function a(e){return r.createElement(r.Fragment,null)}}}]);