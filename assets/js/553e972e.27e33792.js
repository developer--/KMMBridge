"use strict";(self.webpackChunkmy_website_ts=self.webpackChunkmy_website_ts||[]).push([[995],{3905:function(e,t,o){o.d(t,{Zo:function(){return u},kt:function(){return m}});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(o),m=a,f=d["".concat(p,".").concat(m)]||d[m]||s[m]||r;return o?n.createElement(f,i(i({ref:t},u),{},{components:o})):n.createElement(f,i({ref:t},u))}));function m(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=o[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},5916:function(e,t,o){o.r(t),o.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s}});var n=o(7462),a=o(3366),r=(o(7294),o(3905)),i=["components"],l={},p="Using CocoaPods",c={unversionedId:"cocoapods/IOS_COCOAPODS",id:"cocoapods/IOS_COCOAPODS",title:"Using CocoaPods",description:"You'll need an Xcode project with CocoaPods set up. That means you'll have a Podfile that you can edit with the necessary code to integrate your Kotlin module.",source:"@site/docs/cocoapods/01_IOS_COCOAPODS.md",sourceDirName:"cocoapods",slug:"/cocoapods/IOS_COCOAPODS",permalink:"/KMMBridge/cocoapods/IOS_COCOAPODS",draft:!1,editUrl:"https://github.com/touchlab/KMMBridge/tree/main/website/docs/cocoapods/01_IOS_COCOAPODS.md",tags:[],version:"current",lastUpdatedBy:"Kevin Galligan",lastUpdatedAt:1665410807,formattedLastUpdatedAt:"10/10/2022",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"CocoaPods",permalink:"/KMMBridge/category/cocoapods"},next:{title:"CocoaPods Local Dev Flow",permalink:"/KMMBridge/cocoapods/IOS_LOCAL_DEV_COCOAPODS"}},u={},s=[{value:"Artifact Authentication",id:"artifact-authentication",level:2},{value:"Add Podspec Repo",id:"add-podspec-repo",level:2},{value:"Local Kotlin Dev",id:"local-kotlin-dev",level:2}],d={toc:s};function m(e){var t=e.components,o=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"using-cocoapods"},"Using CocoaPods"),(0,r.kt)("p",null,"You'll need an Xcode project with CocoaPods set up. That means you'll have a ",(0,r.kt)("inlineCode",{parentName:"p"},"Podfile")," that you can edit with the necessary code to integrate your Kotlin module."),(0,r.kt)("h2",{id:"artifact-authentication"},"Artifact Authentication"),(0,r.kt)("p",null,"For artifacts that are kept in private storage, you may need to add authentication information so your ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.netrc")," file or your Mac's Keychain Access. See ",(0,r.kt)("a",{parentName:"p",href:"../artifacts/GITHUB_RELEASE_ARTIFACTS#private-repos"},"GITHUB_RELEASE_ARTIFACTS#private-repos")," for a description of how to set up private file access."),(0,r.kt)("h2",{id:"add-podspec-repo"},"Add Podspec Repo"),(0,r.kt)("p",null,"You'll need to add the podspec repo to CocoaPods and to your ",(0,r.kt)("inlineCode",{parentName:"p"},"Podfile"),". First, tell CocoaPods about it. In our case, we're using ",(0,r.kt)("inlineCode",{parentName:"p"},"https://github.com/touchlab/PublicPodspecs.git")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"pod repo add touchlabpublic https://github.com/touchlab/PublicPodspecs.git\n")),(0,r.kt)("p",null,'Replace "touchlabpublic" with whatever you want to call your repo.'),(0,r.kt)("p",null,"Then, in your ",(0,r.kt)("inlineCode",{parentName:"p"},"Podfile"),", add the module and the source. An example ",(0,r.kt)("inlineCode",{parentName:"p"},"Podfile")," might look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"platform :ios, '13'\n\nsource 'https://github.com/touchlab/PublicPodspecs.git'\n\ntarget 'KMMBridgeSampleCocoaPods' do\n  pod 'shared', '0.2.1'\nend\n\n")),(0,r.kt)("p",null,"Then, to initialize CocoaPods, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"pod install\n")),(0,r.kt)("p",null,"As you publish new versions of the library, you will need to update the local podspec repo copy. Either run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"pod repo update\n")),(0,r.kt)("p",null,"Or update the podspec when you're updating your CocoaPods project:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"pod install --repo-update\n# Or...\npod update --repo-update\n")),(0,r.kt)("p",null,"Assuming that all worked, you should be able to open the project and build it."),(0,r.kt)("p",null,"If you are using a private podspec repo, your setup should work if you've added the authentication above. If the files can't be synced, make sure to double-check the auth setup."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"VERY IMPORTANT!!!"))),(0,r.kt)("p",null,"After you run ",(0,r.kt)("inlineCode",{parentName:"p"},"pod install"),", CocoaPods generates an ",(0,r.kt)("inlineCode",{parentName:"p"},"xcworkspace")," file. There is usually both an ",(0,r.kt)("inlineCode",{parentName:"p"},"xcodeproj")," and an ",(0,r.kt)("inlineCode",{parentName:"p"},"xcworkspace"),". Make sure you open the ",(0,r.kt)("inlineCode",{parentName:"p"},"xcworkspace")," file!!!"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://tl-navigator-images.s3.us-east-1.amazonaws.com/docimages/2022-10-06_09-11-xcworkspacefile.png",alt:"xcworkspacefile"})),(0,r.kt)("h2",{id:"local-kotlin-dev"},"Local Kotlin Dev"),(0,r.kt)("p",null,"If you are editing Kotlin, you will probably want to test it locally. To do that, see  ",(0,r.kt)("a",{parentName:"p",href:"/KMMBridge/cocoapods/IOS_LOCAL_DEV_COCOAPODS"},"IOS_LOCAL_DEV_COCOAPODS"),"."))}m.isMDXComponent=!0}}]);