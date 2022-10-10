"use strict";(self.webpackChunkmy_website_ts=self.webpackChunkmy_website_ts||[]).push([[918],{6487:function(e,t,a){a.d(t,{Z:function(){return h}});var n=a(7462),l=a(7294),r=a(8425),s=a(8596),c=a(5281),i={breadcrumbsContainer:"breadcrumbsContainer_Xlws",breadcrumbHomeIcon:"breadcrumbHomeIcon_kU5B"},o=a(6010),d=a(9960),m=a(4996),u=a(5999);function b(e){return l.createElement("svg",(0,n.Z)({viewBox:"0 0 24 24"},e),l.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}function v(e){var t=e.children,a=e.href,n="breadcrumbs__link";return e.isLast?l.createElement("span",{className:n,itemProp:"name"},t):a?l.createElement(d.Z,{className:n,href:a,itemProp:"item"},l.createElement("span",{itemProp:"name"},t)):l.createElement("span",{className:n},t)}function p(e){var t=e.children,a=e.active,r=e.index,s=e.addMicrodata;return l.createElement("li",(0,n.Z)({},s&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,o.Z)("breadcrumbs__item",{"breadcrumbs__item--active":a})}),t,l.createElement("meta",{itemProp:"position",content:String(r+1)}))}function E(){var e=(0,m.Z)("/");return l.createElement("li",{className:"breadcrumbs__item"},l.createElement(d.Z,{"aria-label":(0,u.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:(0,o.Z)("breadcrumbs__link",i.breadcrumbsItemLink),href:e},l.createElement(b,{className:i.breadcrumbHomeIcon})))}function h(){var e=(0,r.s1)(),t=(0,s.Ns)();return e?l.createElement("nav",{className:(0,o.Z)(c.k.docs.docBreadcrumbs,i.breadcrumbsContainer),"aria-label":(0,u.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},l.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&l.createElement(E,null),e.map((function(t,a){var n=a===e.length-1;return l.createElement(p,{key:a,active:n,index:a,addMicrodata:!!t.href},l.createElement(v,{href:t.href,isLast:n},t.label))})))):null}},8614:function(e,t,a){a.r(t),a.d(t,{default:function(){return Y}});var n=a(7294),l=a(6010),r=a(7311),s=a(4474),c=a(7597),i=a(5999),o=a(5281);function d(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt;return n.createElement(i.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function m(e){var t=e.lastUpdatedBy;return n.createElement(i.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function u(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt,l=e.lastUpdatedBy;return n.createElement("span",{className:o.k.common.lastUpdated},n.createElement(i.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(d,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:l?n.createElement(m,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}var b=a(7462),v=a(3366),p="iconEdit_dcUD",E=["className"];function h(e){var t=e.className,a=(0,v.Z)(e,E);return n.createElement("svg",(0,b.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,l.Z)(p,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function g(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:o.k.common.editThisPage},n.createElement(h,null),n.createElement(i.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var f=a(9960),Z="tag_hD8n",N="tagRegular_D6E_",L="tagWithCount_i0QQ";function _(e){var t=e.permalink,a=e.label,r=e.count;return n.createElement(f.Z,{href:t,className:(0,l.Z)(Z,r?L:N)},a,r&&n.createElement("span",null,r))}var k="tags_XVD_",U="tag_JSN8";function T(e){var t=e.tags;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(i.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,l.Z)(k,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return n.createElement("li",{key:a,className:U},n.createElement(_,{label:t,permalink:a}))}))))}var w="lastUpdated_foO9";function y(e){return n.createElement("div",{className:(0,l.Z)(o.k.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(T,e)))}function C(e){var t=e.editUrl,a=e.lastUpdatedAt,r=e.lastUpdatedBy,s=e.formattedLastUpdatedAt;return n.createElement("div",{className:(0,l.Z)(o.k.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},t&&n.createElement(g,{editUrl:t})),n.createElement("div",{className:(0,l.Z)("col",w)},(a||r)&&n.createElement(u,{lastUpdatedAt:a,formattedLastUpdatedAt:s,lastUpdatedBy:r})))}function A(e){var t=e.content.metadata,a=t.editUrl,r=t.lastUpdatedAt,s=t.formattedLastUpdatedAt,c=t.lastUpdatedBy,i=t.tags,d=i.length>0,m=!!(a||r||c);return d||m?n.createElement("footer",{className:(0,l.Z)(o.k.docs.docFooter,"docusaurus-mt-lg")},d&&n.createElement(y,{tags:i}),m&&n.createElement(C,{editUrl:a,lastUpdatedAt:r,lastUpdatedBy:c,formattedLastUpdatedAt:s})):null}var B=a(1575),M=a(6043),I="tocCollapsible_bZGK",x="tocCollapsibleContent_NNA8",H="tocCollapsibleExpanded_IqtF",D=a(721),V="tocCollapsibleButton_l22C",S="tocCollapsibleButtonExpanded_KeTX",F=["collapsed"];function P(e){var t=e.collapsed,a=(0,v.Z)(e,F);return n.createElement("button",(0,b.Z)({type:"button"},a,{className:(0,l.Z)("clean-btn",V,!t&&S,a.className)}),n.createElement(i.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}function z(e){var t=e.toc,a=e.className,r=e.minHeadingLevel,s=e.maxHeadingLevel,c=(0,M.u)({initialState:!0}),i=c.collapsed,o=c.toggleCollapsed;return n.createElement("div",{className:(0,l.Z)(I,!i&&H,a)},n.createElement(P,{collapsed:i,onClick:o}),n.createElement(M.z,{lazy:!0,className:x,collapsed:i},n.createElement(D.Z,{toc:t,minHeadingLevel:r,maxHeadingLevel:s})))}var O=a(9649),R="docItemContainer_vinB",X="docItemCol_DM6M",q="tocMobile_TmEX",J=a(1944),G=a(7524),K=a(6487),Q=a(5290);function W(e){var t,a=e.content,l=a.metadata,r=a.frontMatter,s=a.assets,c=r.keywords,i=l.description,o=l.title,d=null!=(t=s.image)?t:r.image;return n.createElement(J.d,{title:o,description:i,keywords:c,image:d})}function j(e){var t=e.content,a=t.metadata,i=t.frontMatter,d=i.hide_title,m=i.hide_table_of_contents,u=i.toc_min_heading_level,b=i.toc_max_heading_level,v=a.title,p=!d&&void 0===t.contentTitle,E=(0,G.i)(),h=!m&&t.toc&&t.toc.length>0,g=h&&("desktop"===E||"ssr"===E);return n.createElement("div",{className:"row"},n.createElement("div",{className:(0,l.Z)("col",!m&&X)},n.createElement(s.Z,null),n.createElement("div",{className:R},n.createElement("article",null,n.createElement(K.Z,null),n.createElement(c.Z,null),h&&n.createElement(z,{toc:t.toc,minHeadingLevel:u,maxHeadingLevel:b,className:(0,l.Z)(o.k.docs.docTocMobile,q)}),n.createElement("div",{className:(0,l.Z)(o.k.docs.docMarkdown,"markdown")},p&&n.createElement("header",null,n.createElement(O.Z,{as:"h1"},v)),n.createElement(Q.Z,null,n.createElement(t,null))),n.createElement(A,e)),n.createElement(r.Z,{previous:a.previous,next:a.next}))),g&&n.createElement("div",{className:"col col--3"},n.createElement(B.Z,{toc:t.toc,minHeadingLevel:u,maxHeadingLevel:b,className:o.k.docs.docTocDesktop})))}function Y(e){var t="docs-doc-id-"+e.content.metadata.unversionedId;return n.createElement(J.FG,{className:t},n.createElement(W,e),n.createElement(j,e))}},7597:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(7294),l=a(5999),r=a(4477),s=a(5281),c=a(6010);function i(e){var t=e.className,a=(0,r.E)();return a.badge?n.createElement("span",{className:(0,c.Z)(t,s.k.docs.docVersionBadge,"badge badge--secondary")},n.createElement(l.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:a.label}},"Version: {versionLabel}")):null}},4474:function(e,t,a){a.d(t,{Z:function(){return E}});var n=a(7294),l=a(2263),r=a(9960),s=a(5999),c=a(5551),i=a(373),o=a(5281),d=a(4477),m=a(6010);var u={unreleased:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(s.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(s.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function b(e){var t=u[e.versionMetadata.banner];return n.createElement(t,e)}function v(e){var t=e.versionLabel,a=e.to,l=e.onClick;return n.createElement(s.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(r.Z,{to:a,onClick:l},n.createElement(s.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function p(e){var t,a=e.className,r=e.versionMetadata,s=(0,l.Z)().siteConfig.title,d=(0,c.gA)({failfast:!0}).pluginId,u=(0,i.J)(d).savePreferredVersionName,p=(0,c.Jo)(d),E=p.latestDocSuggestion,h=p.latestVersionSuggestion,g=null!=E?E:(t=h).docs.find((function(e){return e.id===t.mainDocId}));return n.createElement("div",{className:(0,m.Z)(a,o.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(b,{siteTitle:s,versionMetadata:r})),n.createElement("div",{className:"margin-top--md"},n.createElement(v,{versionLabel:h.label,to:g.path,onClick:function(){return u(h.name)}})))}function E(e){var t=e.className,a=(0,d.E)();return a.banner?n.createElement(p,{className:t,versionMetadata:a}):null}},7311:function(e,t,a){a.d(t,{Z:function(){return l}});var n=a(7294);a(5999),a(9960);function l(e){return n.createElement(n.Fragment,null)}}}]);