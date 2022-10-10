"use strict";(self.webpackChunkmy_website_ts=self.webpackChunkmy_website_ts||[]).push([[365],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(a),m=o,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return a?n.createElement(g,r(r({ref:t},p),{},{components:a})):n.createElement(g,r({ref:t},p))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},4530:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var n=a(7462),o=a(3366),i=(a(7294),a(3905)),r=["components"],s={},l="Using Swift Package Manager",c={unversionedId:"spm/IOS_SPM",id:"spm/IOS_SPM",title:"Using Swift Package Manager",description:"Swift Package Manager is a newer dependency manager directly from Apple. In some ways it's more integrated into Xcode, but is also less flexible than CocoaPods. Much of that seems by design, as it's very difficult to introduce side effects into the Package.swift build scripts. While that is likely to result in more reliable builds for the average Xcode project, for Kotlin builds, that means some more manual processes at present.",source:"@site/docs/spm/01_IOS_SPM.md",sourceDirName:"spm",slug:"/spm/IOS_SPM",permalink:"/KMMBridge/spm/IOS_SPM",draft:!1,editUrl:"https://github.com/touchlab/KMMBridge/tree/main/website/docs/spm/01_IOS_SPM.md",tags:[],version:"current",lastUpdatedBy:"Kevin Galligan",lastUpdatedAt:1665404730,formattedLastUpdatedAt:"10/10/2022",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Swift Package Manager (SPM)",permalink:"/KMMBridge/category/swift-package-manager-spm"},next:{title:"SPM Local Dev Flow",permalink:"/KMMBridge/spm/IOS_LOCAL_DEV_SPM"}},p={},u=[{value:"Kotlin Project Configuration",id:"kotlin-project-configuration",level:2},{value:"Artifact Authentication",id:"artifact-authentication",level:2},{value:"Xcode Configuration",id:"xcode-configuration",level:2},{value:"Updating Builds",id:"updating-builds",level:2},{value:"Local Kotlin Dev",id:"local-kotlin-dev",level:2}],d={toc:u};function m(e){var t=e.components,a=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"using-swift-package-manager"},"Using Swift Package Manager"),(0,i.kt)("p",null,"Swift Package Manager is a newer dependency manager directly from Apple. In some ways it's more integrated into Xcode, but is also less flexible than CocoaPods. Much of that seems by design, as it's very difficult to introduce side effects into the ",(0,i.kt)("inlineCode",{parentName:"p"},"Package.swift")," build scripts. While that is likely to result in more reliable builds for the average Xcode project, for Kotlin builds, that means some more manual processes at present."),(0,i.kt)("p",null,"Out of the box, the official Kotlin tools are far less integrated into SPM. We have some basic support for SPM development, but this is a work in progress. Feedback welcome."),(0,i.kt)("h2",{id:"kotlin-project-configuration"},"Kotlin Project Configuration"),(0,i.kt)("p",null,"After setting up KMMBridge in your Kotlin project, you should configure SPM for library publishing. Generally speaking, SPM wants to have the ",(0,i.kt)("inlineCode",{parentName:"p"},"Package.swift")," file in the root of the repo. Xcode and SPM use Git repos as an organizational and discovery unit. The ",(0,i.kt)("inlineCode",{parentName:"p"},"Package.swift")," file goes in the root, and Xcode clones from GitHub (or others) to read info about the library and source code."),(0,i.kt)("p",null,"If you don't have a ",(0,i.kt)("inlineCode",{parentName:"p"},"Package.swift")," file, or don't know how to set one up, that's OK. KMMBridge currently generates these files for you."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: If you'd prefer, or need to, manage your own ",(0,i.kt)("inlineCode",{parentName:"p"},"Package.swift")," file, please reach out. An earlier version of the plugin modified the file rather than replacing it. We may add that feature back after KMMBridge is more stable.")),(0,i.kt)("p",null,"In the ",(0,i.kt)("inlineCode",{parentName:"p"},"kmmbridge")," block, add ",(0,i.kt)("inlineCode",{parentName:"p"},"spm()"),". If you call it without parameters, KMMBridge assumes you want the ",(0,i.kt)("inlineCode",{parentName:"p"},"Package.swift")," file at the root of your repo (we also assume you're using Git)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"kmmbridge {\n    spm()\n    // Other config...\n}\n")),(0,i.kt)("p",null,"In the example above, the Kotlin module is one folder down. The ",(0,i.kt)("inlineCode",{parentName:"p"},"spm()")," setup detects that with git automatically."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://tl-navigator-images.s3.us-east-1.amazonaws.com/docimages/2022-10-06_06-43-spmfolder.png",alt:"spmfolder"})),(0,i.kt)("p",null,"SPM uses Git for versioning, so you'll probably want to use either Git tag or GitHub release version managers, and at least at launch, likely want to use GitHub artifacts."),(0,i.kt)("p",null,"Here is the suggested config for SPM:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'kmmbridge {\n    githubReleaseArtifacts()\n    githubReleaseVersions()\n    versionPrefix.set("0.1")\n    spm()\n}\n')),(0,i.kt)("p",null,"Once this is all set up, run a build so you have at least one version available."),(0,i.kt)("h2",{id:"artifact-authentication"},"Artifact Authentication"),(0,i.kt)("p",null,"For artifacts that are kept in private storage, you may need to add authentication information so your ",(0,i.kt)("inlineCode",{parentName:"p"},"~/.netrc")," file or your Mac's Keychain Access. See ",(0,i.kt)("a",{parentName:"p",href:"../artifacts/GITHUB_RELEASE_ARTIFACTS#private-repos"},"GITHUB_RELEASE_ARTIFACTS#private-repos")," for a description of how to set up private file access."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"When you acces repos in GitHub with Xcode, you need to authenticate to GitHub. That isn't enough to access private GitHub release artifacts. You ",(0,i.kt)("em",{parentName:"p"},"also")," need to add ",(0,i.kt)("inlineCode",{parentName:"p"},"~/.netrc")," or Mac Keychain Access authentication info."))),(0,i.kt)("h2",{id:"xcode-configuration"},"Xcode Configuration"),(0,i.kt)("p",null,"Open or create an Xcode project. To add an SPM package, go to ",(0,i.kt)("inlineCode",{parentName:"p"},"File > Add Packages"),' in the Xcode menu. Add your source control account (presumably GitHub). You can usually browse for the package at that point, but depending on how many repos you have, it may be easier to copy/paste the repo URL in the top/right search bar. After finding the package, you should generally add the pacakge by version ("Up to Next Major Version" suggested).'),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://tl-navigator-images.s3.us-east-1.amazonaws.com/docimages/2022-10-06_06-57-addpackages.png",alt:"addpackages"})),(0,i.kt)("p",null,"Once added, you should be able to import the Kotlin module into Swift/Objc files and build!"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://tl-navigator-images.s3.us-east-1.amazonaws.com/docimages/2022-10-06_07-00-import.png",alt:"import"})),(0,i.kt)("h2",{id:"updating-builds"},"Updating Builds"),(0,i.kt)("p",null,'Run the KMMBridge build again. It should automatically create another build version and publish that to the GitHub repo. In Xcode, you can update your imported version by right-clicking on the module and selecting "Update Package":'),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://tl-navigator-images.s3.us-east-1.amazonaws.com/docimages/2022-10-06_07-04-updatepackage.png",alt:"updatepackage"})),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://tl-navigator-images.s3.us-east-1.amazonaws.com/docimages/2022-10-06_07-17-updatepackagedone.png",alt:"updatepackagedone"})),(0,i.kt)("h2",{id:"local-kotlin-dev"},"Local Kotlin Dev"),(0,i.kt)("p",null,"If you are going to locally build and test Kotlin with SPM, see  ",(0,i.kt)("a",{parentName:"p",href:"/KMMBridge/spm/IOS_LOCAL_DEV_SPM"},"IOS_LOCAL_DEV_SPM"),"."))}m.isMDXComponent=!0}}]);