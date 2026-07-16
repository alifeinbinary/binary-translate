import{a as Mn,n as Ln,o as Ge,r as Fn,t as ne}from"./chunk-Jp_zfdSZ.js";import{n as zn}from"./jsx-runtime-MUAlOh_t.js";function jn(t,e,n){return(e=Dn(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function pe(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?pe(Object(n),!0).forEach(function(a){jn(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):pe(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function Rn(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var a=n.call(t,e||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Dn(t){var e=Rn(t,"string");return typeof e=="symbol"?e:e+""}var ge=()=>{},ae={},Ve={},Be=null,Xe={mark:ge,measure:ge};try{typeof window<"u"&&(ae=window),typeof document<"u"&&(Ve=document),typeof MutationObserver<"u"&&(Be=MutationObserver),typeof performance<"u"&&(Xe=performance)}catch{}var{userAgent:he=""}=ae.navigator||{},F=ae,v=Ve,ve=Be,nt=Xe;F.document;var N=!!v.documentElement&&!!v.head&&typeof v.addEventListener=="function"&&typeof v.createElement=="function",qe=~he.indexOf("MSIE")||~he.indexOf("Trident/"),Wn=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,Un=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,Ke={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},Yn={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Je=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],k="classic",ft="duotone",Qe=[k,ft,"sharp","sharp-duotone"],$n={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},Hn={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},Gn=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),Vn={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},Bn=["fak","fa-kit","fakd","fa-kit-duotone"],ye={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Xn=["kit"],qn={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},Kn=["fak","fakd"],Jn={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},be={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},at={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Qn=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],Zn=["fak","fa-kit","fakd","fa-kit-duotone"],ta={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},ea={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},na={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},xt={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},aa=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],At=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...Qn,...aa],ra=["solid","regular","light","thin","duotone","brands"],Ze=[1,2,3,4,5,6,7,8,9,10],ia=Ze.concat([11,12,13,14,15,16,17,18,19,20]),oa=[...Object.keys(na),...ra,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",at.GROUP,at.SWAP_OPACITY,at.PRIMARY,at.SECONDARY].concat(Ze.map(t=>"".concat(t,"x"))).concat(ia.map(t=>"w-".concat(t))),sa={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},E="___FONT_AWESOME___",wt=16,tn="fa",en="svg-inline--fa",W="data-fa-i2svg",kt="data-fa-pseudo-element",la="data-fa-pseudo-element-pending",re="data-prefix",ie="data-icon",xe="fontawesome-i2svg",fa="async",ca=["HTML","HEAD","STYLE","SCRIPT"],nn=(()=>{try{return!0}catch{return!1}})();function Q(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[k]}})}var an=l({},Ke);an[k]=l(l(l(l({},{"fa-duotone":"duotone"}),Ke[k]),ye.kit),ye["kit-duotone"]);var ua=Q(an),St=l({},Vn);St[k]=l(l(l(l({},{duotone:"fad"}),St[k]),be.kit),be["kit-duotone"]);var Ae=Q(St),Ot=l({},xt);Ot[k]=l(l({},Ot[k]),Jn.kit);var oe=Q(Ot),Pt=l({},ea);Pt[k]=l(l({},Pt[k]),qn.kit);Q(Pt);var ma=Wn,rn="fa-layers-text",da=Un;Q(l({},$n));var pa=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],pt=Yn,ga=[...Xn,...oa],X=F.FontAwesomeConfig||{};function ha(t){var e=v.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function va(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}v&&typeof v.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(t=>{let[e,n]=t;const a=va(ha(e));a!=null&&(X[n]=a)});var on={styleDefault:"solid",familyDefault:k,cssPrefix:tn,replacementClass:en,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};X.familyPrefix&&(X.cssPrefix=X.familyPrefix);var G=l(l({},on),X);G.autoReplaceSvg||(G.observeMutations=!1);var m={};Object.keys(on).forEach(t=>{Object.defineProperty(m,t,{enumerable:!0,set:function(e){G[t]=e,q.forEach(n=>n(m))},get:function(){return G[t]}})});Object.defineProperty(m,"familyPrefix",{enumerable:!0,set:function(t){G.cssPrefix=t,q.forEach(e=>e(m))},get:function(){return G.cssPrefix}});F.FontAwesomeConfig=m;var q=[];function ya(t){return q.push(t),()=>{q.splice(q.indexOf(t),1)}}var M=wt,P={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function ba(t){if(!t||!N)return;const e=v.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=v.head.childNodes;let a=null;for(let r=n.length-1;r>-1;r--){const i=n[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=i)}return v.head.insertBefore(e,a),t}var xa="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function K(){let t=12,e="";for(;t-- >0;)e+=xa[Math.random()*62|0];return e}function V(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function se(t){return t.classList?V(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function sn(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Aa(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(sn(t[n]),'" '),"").trim()}function ct(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function le(t){return t.size!==P.size||t.x!==P.x||t.y!==P.y||t.rotate!==P.rotate||t.flipX||t.flipY}function wa(t){let{transform:e,containerWidth:n,iconWidth:a}=t;const r={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)");return{outer:r,inner:{transform:"".concat(i," ").concat(o," ").concat(s)},path:{transform:"translate(".concat(a/2*-1," -256)")}}}function ka(t){let{transform:e,width:n=wt,height:a=wt,startCentered:r=!1}=t,i="";return r&&qe?i+="translate(".concat(e.x/M-n/2,"em, ").concat(e.y/M-a/2,"em) "):r?i+="translate(calc(-50% + ".concat(e.x/M,"em), calc(-50% + ").concat(e.y/M,"em)) "):i+="translate(".concat(e.x/M,"em, ").concat(e.y/M,"em) "),i+="scale(".concat(e.size/M*(e.flipX?-1:1),", ").concat(e.size/M*(e.flipY?-1:1),") "),i+="rotate(".concat(e.rotate,"deg) "),i}var Sa=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function ln(){const t=tn,e=en,n=m.cssPrefix,a=m.replacementClass;let r=Sa;if(n!==t||a!==e){const i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");r=r.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(a))}return r}var we=!1;function gt(){m.autoAddCss&&!we&&(ba(ln()),we=!0)}var Oa={mixout(){return{dom:{css:ln,insertCss:gt}}},hooks(){return{beforeDOMElementCreation(){gt()},beforeI2svg(){gt()}}}},I=F||{};I[E]||(I[E]={});I[E].styles||(I[E].styles={});I[E].hooks||(I[E].hooks={});I[E].shims||(I[E].shims=[]);var C=I[E],fn=[],cn=function(){v.removeEventListener("DOMContentLoaded",cn),ot=1,fn.map(t=>t())},ot=!1;N&&(ot=(v.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(v.readyState),ot||v.addEventListener("DOMContentLoaded",cn));function Pa(t){N&&(ot?setTimeout(t,0):fn.push(t))}function Z(t){const{tag:e,attributes:n={},children:a=[]}=t;return typeof t=="string"?sn(t):"<".concat(e," ").concat(Aa(n),">").concat(a.map(Z).join(""),"</").concat(e,">")}function ke(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Ca=function(e,n){return function(a,r,i,o){return e.call(n,a,r,i,o)}},ht=function(e,n,a,r){var i=Object.keys(e),o=i.length,s=r!==void 0?Ca(n,r):n,f,c,u;for(a===void 0?(f=1,u=e[i[0]]):(f=0,u=a);f<o;f++)c=i[f],u=s(u,e[c],c,e);return u};function Ea(t){const e=[];let n=0;const a=t.length;for(;n<a;){const r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){const i=t.charCodeAt(n++);(i&64512)==56320?e.push(((r&1023)<<10)+(i&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function Ct(t){const e=Ea(t);return e.length===1?e[0].toString(16):null}function Ia(t,e){const n=t.length;let a=t.charCodeAt(e),r;return a>=55296&&a<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function Se(t){return Object.keys(t).reduce((e,n)=>{const a=t[n];return a.icon?e[a.iconName]=a.icon:e[n]=a,e},{})}function Et(t,e){const{skipHooks:n=!1}=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=Se(e);typeof C.hooks.addPack=="function"&&!n?C.hooks.addPack(t,Se(e)):C.styles[t]=l(l({},C.styles[t]||{}),a),t==="fas"&&Et("fa",e)}var{styles:J,shims:Na}=C,un=Object.keys(oe),_a=un.reduce((t,e)=>(t[e]=Object.keys(oe[e]),t),{}),fe=null,mn={},dn={},pn={},gn={},hn={};function Ta(t){return~ga.indexOf(t)}function Ma(t,e){const n=e.split("-"),a=n[0],r=n.slice(1).join("-");return a===t&&r!==""&&!Ta(r)?r:null}var vn=()=>{const t=a=>ht(J,(r,i,o)=>(r[o]=ht(i,a,{}),r),{});mn=t((a,r,i)=>(r[3]&&(a[r[3]]=i),r[2]&&r[2].filter(o=>typeof o=="number").forEach(o=>{a[o.toString(16)]=i}),a)),dn=t((a,r,i)=>(a[i]=i,r[2]&&r[2].filter(o=>typeof o=="string").forEach(o=>{a[o]=i}),a)),hn=t((a,r,i)=>{const o=r[2];return a[i]=i,o.forEach(s=>{a[s]=i}),a});const e="far"in J||m.autoFetchSvg,n=ht(Na,(a,r)=>{const i=r[0];let o=r[1];const s=r[2];return o==="far"&&!e&&(o="fas"),typeof i=="string"&&(a.names[i]={prefix:o,iconName:s}),typeof i=="number"&&(a.unicodes[i.toString(16)]={prefix:o,iconName:s}),a},{names:{},unicodes:{}});pn=n.names,gn=n.unicodes,fe=ut(m.styleDefault,{family:m.familyDefault})};ya(t=>{fe=ut(t.styleDefault,{family:m.familyDefault})});vn();function ce(t,e){return(mn[t]||{})[e]}function La(t,e){return(dn[t]||{})[e]}function D(t,e){return(hn[t]||{})[e]}function yn(t){return pn[t]||{prefix:null,iconName:null}}function Fa(t){const e=gn[t],n=ce("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function z(){return fe}var bn=()=>({prefix:null,iconName:null,rest:[]});function za(t){let e=k;const n=un.reduce((a,r)=>(a[r]="".concat(m.cssPrefix,"-").concat(r),a),{});return Qe.forEach(a=>{(t.includes(n[a])||t.some(r=>_a[a].includes(r)))&&(e=a)}),e}function ut(t){const{family:e=k}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=ua[e][t];if(e===ft&&!t)return"fad";const a=Ae[e][t]||Ae[e][n],r=t in C.styles?t:null;return a||r||null}function ja(t){let e=[],n=null;return t.forEach(a=>{const r=Ma(m.cssPrefix,a);r?n=r:a&&e.push(a)}),{iconName:n,rest:e}}function Oe(t){return t.sort().filter((e,n,a)=>a.indexOf(e)===n)}function mt(t){const{skipLookups:e=!1}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};let n=null;const a=At.concat(Zn),r=Oe(t.filter(c=>a.includes(c))),i=Oe(t.filter(c=>!At.includes(c))),[o=null]=r.filter(c=>(n=c,!Je.includes(c))),s=za(r),f=l(l({},ja(i)),{},{prefix:ut(o,{family:s})});return l(l(l({},f),Ua({values:t,family:s,styles:J,config:m,canonical:f,givenPrefix:n})),Ra(e,n,f))}function Ra(t,e,n){let{prefix:a,iconName:r}=n;if(t||!a||!r)return{prefix:a,iconName:r};const i=e==="fa"?yn(r):{},o=D(a,r);return r=i.iconName||o||r,a=i.prefix||a,a==="far"&&!J.far&&J.fas&&!m.autoFetchSvg&&(a="fas"),{prefix:a,iconName:r}}var Da=Qe.filter(t=>t!==k||t!==ft),Wa=Object.keys(xt).filter(t=>t!==k).map(t=>Object.keys(xt[t])).flat();function Ua(t){const{values:e,family:n,canonical:a,givenPrefix:r="",styles:i={},config:o={}}=t,s=n===ft,f=e.includes("fa-duotone")||e.includes("fad"),c=o.familyDefault==="duotone",u=a.prefix==="fad"||a.prefix==="fa-duotone";return!s&&(f||c||u)&&(a.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(a.prefix="fab"),!a.prefix&&Da.includes(n)&&(Object.keys(i).find(g=>Wa.includes(g))||o.autoFetchSvg)&&(a.prefix=Gn.get(n).defaultShortPrefixId,a.iconName=D(a.prefix,a.iconName)||a.iconName),(a.prefix==="fa"||r==="fa")&&(a.prefix=z()||"fas"),a}var Ya=class{constructor(){this.definitions={}}add(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];const a=e.reduce(this._pullDefinitions,{});Object.keys(a).forEach(r=>{this.definitions[r]=l(l({},this.definitions[r]||{}),a[r]),Et(r,a[r]);const i=oe[k][r];i&&Et(i,a[r]),vn()})}reset(){this.definitions={}}_pullDefinitions(t,e){const n=e.prefix&&e.iconName&&e.icon?{0:e}:e;return Object.keys(n).map(a=>{const{prefix:r,iconName:i,icon:o}=n[a],s=o[2];t[r]||(t[r]={}),s.length>0&&s.forEach(f=>{typeof f=="string"&&(t[r][f]=o)}),t[r][i]=o}),t}},Pe=[],$={},H={},$a=Object.keys(H);function Ha(t,e){let{mixoutsTo:n}=e;return Pe=t,$={},Object.keys(H).forEach(a=>{$a.indexOf(a)===-1&&delete H[a]}),Pe.forEach(a=>{const r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(i=>{typeof r[i]=="function"&&(n[i]=r[i]),typeof r[i]=="object"&&Object.keys(r[i]).forEach(o=>{n[i]||(n[i]={}),n[i][o]=r[i][o]})}),a.hooks){const i=a.hooks();Object.keys(i).forEach(o=>{$[o]||($[o]=[]),$[o].push(i[o])})}a.provides&&a.provides(H)}),n}function It(t,e){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];return($[t]||[]).forEach(i=>{e=i.apply(null,[e,...a])}),e}function U(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];($[t]||[]).forEach(r=>{r.apply(null,n)})}function j(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return H[t]?H[t].apply(null,e):void 0}function Nt(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||z();if(e)return e=D(n,e)||e,ke(xn.definitions,n,e)||ke(C.styles,n,e)}var xn=new Ya,Ga=()=>{m.autoReplaceSvg=!1,m.observeMutations=!1,U("noAuto")},S={noAuto:Ga,config:m,dom:{i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return N?(U("beforeI2svg",t),j("pseudoElements2svg",t),j("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;m.autoReplaceSvg===!1&&(m.autoReplaceSvg=!0),m.observeMutations=!0,Pa(()=>{Va({autoReplaceSvgRoot:e}),U("watch",t)})}},parse:{icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:D(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=ut(t[0]);return{prefix:n,iconName:D(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(m.cssPrefix,"-"))>-1||t.match(ma))){const e=mt(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||z(),iconName:D(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=z();return{prefix:e,iconName:D(e,t)||t}}}},library:xn,findIconDefinition:Nt,toHtml:Z},Va=function(){const{autoReplaceSvgRoot:t=v}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};(Object.keys(C.styles).length>0||m.autoFetchSvg)&&N&&m.autoReplaceSvg&&S.dom.i2svg({node:t})};function dt(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>Z(n))}}),Object.defineProperty(t,"node",{get:function(){if(!N)return;const n=v.createElement("div");return n.innerHTML=t.html,n.children}}),t}function Ba(t){let{children:e,main:n,mask:a,attributes:r,styles:i,transform:o}=t;if(le(o)&&n.found&&!a.found){const{width:s,height:f}=n,c={x:s/f/2,y:.5};r.style=ct(l(l({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function Xa(t){let{prefix:e,iconName:n,children:a,attributes:r,symbol:i}=t;const o=i===!0?"".concat(e,"-").concat(m.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:l(l({},r),{},{id:o}),children:a}]}]}function ue(t){const{icons:{main:e,mask:n},prefix:a,iconName:r,transform:i,symbol:o,title:s,maskId:f,titleId:c,extra:u,watchable:g=!1}=t,{width:p,height:x}=n.found?n:e,w=Kn.includes(a),A=[m.replacementClass,r?"".concat(m.cssPrefix,"-").concat(r):""].filter(T=>u.classes.indexOf(T)===-1).filter(T=>T!==""||!!T).concat(u.classes).join(" ");let h={children:[],attributes:l(l({},u.attributes),{},{"data-prefix":a,"data-icon":r,class:A,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(p," ").concat(x)})};const y=w&&!~u.classes.indexOf("fa-fw")?{width:"".concat(p/x*16*.0625,"em")}:{};g&&(h.attributes[W]=""),s&&(h.children.push({tag:"title",attributes:{id:h.attributes["aria-labelledby"]||"title-".concat(c||K())},children:[s]}),delete h.attributes.title);const b=l(l({},h),{},{prefix:a,iconName:r,main:e,mask:n,maskId:f,transform:i,symbol:o,styles:l(l({},y),u.styles)}),{children:_,attributes:R}=n.found&&e.found?j("generateAbstractMask",b)||{children:[],attributes:{}}:j("generateAbstractIcon",b)||{children:[],attributes:{}};return b.children=_,b.attributes=R,o?Xa(b):Ba(b)}function Ce(t){const{content:e,width:n,height:a,transform:r,title:i,extra:o,watchable:s=!1}=t,f=l(l(l({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});s&&(f[W]="");const c=l({},o.styles);le(r)&&(c.transform=ka({transform:r,startCentered:!0,width:n,height:a}),c["-webkit-transform"]=c.transform);const u=ct(c);u.length>0&&(f.style=u);const g=[];return g.push({tag:"span",attributes:f,children:[e]}),i&&g.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),g}function qa(t){const{content:e,title:n,extra:a}=t,r=l(l(l({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),i=ct(a.styles);i.length>0&&(r.style=i);const o=[];return o.push({tag:"span",attributes:r,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var{styles:vt}=C;function _t(t){const e=t[0],n=t[1],[a]=t.slice(4);let r=null;return Array.isArray(a)?r={tag:"g",attributes:{class:"".concat(m.cssPrefix,"-").concat(pt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(pt.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(pt.PRIMARY),fill:"currentColor",d:a[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:e,height:n,icon:r}}var Ka={found:!1,width:512,height:512};function Ja(t,e){!nn&&!m.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Tt(t,e){let n=e;return e==="fa"&&m.styleDefault!==null&&(e=z()),new Promise((a,r)=>{if(n==="fa"){const i=yn(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&vt[e]&&vt[e][t]){const i=vt[e][t];return a(_t(i))}Ja(t,e),a(l(l({},Ka),{},{icon:m.showMissingIcons&&t?j("missingIconAbstract")||{}:{}}))})}var Ee=()=>{},Mt=m.measurePerformance&&nt&&nt.mark&&nt.measure?nt:{mark:Ee,measure:Ee},B='FA "6.7.2"',Qa=t=>(Mt.mark("".concat(B," ").concat(t," begins")),()=>An(t)),An=t=>{Mt.mark("".concat(B," ").concat(t," ends")),Mt.measure("".concat(B," ").concat(t),"".concat(B," ").concat(t," begins"),"".concat(B," ").concat(t," ends"))},me={begin:Qa,end:An},rt=()=>{};function Ie(t){return typeof(t.getAttribute?t.getAttribute(W):null)=="string"}function Za(t){const e=t.getAttribute?t.getAttribute(re):null,n=t.getAttribute?t.getAttribute(ie):null;return e&&n}function tr(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(m.replacementClass)}function er(){return m.autoReplaceSvg===!0?it.replace:it[m.autoReplaceSvg]||it.replace}function nr(t){return v.createElementNS("http://www.w3.org/2000/svg",t)}function ar(t){return v.createElement(t)}function wn(t){const{ceFn:e=t.tag==="svg"?nr:ar}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(typeof t=="string")return v.createTextNode(t);const n=e(t.tag);return Object.keys(t.attributes||[]).forEach(function(a){n.setAttribute(a,t.attributes[a])}),(t.children||[]).forEach(function(a){n.appendChild(wn(a,{ceFn:e}))}),n}function rr(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var it={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(wn(n),e)}),e.getAttribute(W)===null&&m.keepOriginalSource){let n=v.createComment(rr(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~se(e).indexOf(m.replacementClass))return it.replace(t);const a=new RegExp("".concat(m.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const i=n[0].attributes.class.split(" ").reduce((o,s)=>(s===m.replacementClass||s.match(a)?o.toSvg.push(s):o.toNode.push(s),o),{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}const r=n.map(i=>Z(i)).join(`
`);e.setAttribute(W,""),e.innerHTML=r}};function Ne(t){t()}function kn(t,e){const n=typeof e=="function"?e:rt;if(t.length===0)n();else{let a=Ne;m.mutateApproach===fa&&(a=F.requestAnimationFrame||Ne),a(()=>{const r=er(),i=me.begin("mutate");t.map(r),i(),n()})}}var de=!1;function Sn(){de=!0}function Lt(){de=!1}var st=null;function _e(t){if(!ve||!m.observeMutations)return;const{treeCallback:e=rt,nodeCallback:n=rt,pseudoElementsCallback:a=rt,observeMutationsRoot:r=v}=t;st=new ve(i=>{if(de)return;const o=z();V(i).forEach(s=>{if(s.type==="childList"&&s.addedNodes.length>0&&!Ie(s.addedNodes[0])&&(m.searchPseudoElements&&a(s.target),e(s.target)),s.type==="attributes"&&s.target.parentNode&&m.searchPseudoElements&&a(s.target.parentNode),s.type==="attributes"&&Ie(s.target)&&~pa.indexOf(s.attributeName))if(s.attributeName==="class"&&Za(s.target)){const{prefix:f,iconName:c}=mt(se(s.target));s.target.setAttribute(re,f||o),c&&s.target.setAttribute(ie,c)}else tr(s.target)&&n(s.target)})}),N&&st.observe(r,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function ir(){st&&st.disconnect()}function or(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((a,r)=>{const i=r.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(a[o]=s.join(":").trim()),a},{})),n}function sr(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"";let r=mt(se(t));return r.prefix||(r.prefix=z()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=La(r.prefix,t.innerText)||ce(r.prefix,Ct(t.innerText))),!r.iconName&&m.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function lr(t){const e=V(t.attributes).reduce((r,i)=>(r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r),{}),n=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return m.autoA11y&&(n?e["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(a||K()):(e["aria-hidden"]="true",e.focusable="false")),e}function fr(){return{iconName:null,title:null,titleId:null,prefix:null,transform:P,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Te(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:a,rest:r}=sr(t),i=lr(t),o=It("parseNodeAttributes",{},t);let s=e.styleParser?or(t):[];return l({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:a,transform:P,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:s,attributes:i}},o)}var{styles:cr}=C;function On(t){const e=m.autoReplaceSvg==="nest"?Te(t,{styleParser:!1}):Te(t);return~e.extra.classes.indexOf(rn)?j("generateLayersText",t,e):j("generateSvgReplacementMutation",t,e)}function ur(){return[...Bn,...At]}function Me(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!N)return Promise.resolve();const n=v.documentElement.classList,a=u=>n.add("".concat(xe,"-").concat(u)),r=u=>n.remove("".concat(xe,"-").concat(u)),i=m.autoFetchSvg?ur():Je.concat(Object.keys(cr));i.includes("fa")||i.push("fa");const o=[".".concat(rn,":not([").concat(W,"])")].concat(i.map(u=>".".concat(u,":not([").concat(W,"])"))).join(", ");if(o.length===0)return Promise.resolve();let s=[];try{s=V(t.querySelectorAll(o))}catch{}if(s.length>0)a("pending"),r("complete");else return Promise.resolve();const f=me.begin("onTree"),c=s.reduce((u,g)=>{try{const p=On(g);p&&u.push(p)}catch(p){nn||p.name==="MissingIcon"&&console.error(p)}return u},[]);return new Promise((u,g)=>{Promise.all(c).then(p=>{kn(p,()=>{a("active"),a("complete"),r("pending"),typeof e=="function"&&e(),f(),u()})}).catch(p=>{f(),g(p)})})}function mr(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;On(t).then(n=>{n&&kn([n],e)})}function dr(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const a=(e||{}).icon?e:Nt(e||{});let{mask:r}=n;return r&&(r=(r||{}).icon?r:Nt(r||{})),t(a,l(l({},n),{},{mask:r}))}}var pr=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=P,symbol:a=!1,mask:r=null,maskId:i=null,title:o=null,titleId:s=null,classes:f=[],attributes:c={},styles:u={}}=e;if(!t)return;const{prefix:g,iconName:p,icon:x}=t;return dt(l({type:"icon"},t),()=>(U("beforeDOMElementCreation",{iconDefinition:t,params:e}),m.autoA11y&&(o?c["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(s||K()):(c["aria-hidden"]="true",c.focusable="false")),ue({icons:{main:_t(x),mask:r?_t(r.icon):{found:!1,width:null,height:null,icon:{}}},prefix:g,iconName:p,transform:l(l({},P),n),symbol:a,title:o,maskId:i,titleId:s,extra:{attributes:c,styles:u,classes:f}})))},gr={mixout(){return{icon:dr(pr)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=Me,t.nodeCallback=mr,t}}},provides(t){t.i2svg=function(e){const{node:n=v,callback:a=()=>{}}=e;return Me(n,a)},t.generateSvgReplacementMutation=function(e,n){const{iconName:a,title:r,titleId:i,prefix:o,transform:s,symbol:f,mask:c,maskId:u,extra:g}=n;return new Promise((p,x)=>{Promise.all([Tt(a,o),c.iconName?Tt(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(w=>{let[A,h]=w;p([e,ue({icons:{main:A,mask:h},prefix:o,iconName:a,transform:s,symbol:f,maskId:u,title:r,titleId:i,extra:g,watchable:!0})])}).catch(x)})},t.generateAbstractIcon=function(e){let{children:n,attributes:a,main:r,transform:i,styles:o}=e;const s=ct(o);s.length>0&&(a.style=s);let f;return le(i)&&(f=j("generateAbstractTransformGrouping",{main:r,transform:i,containerWidth:r.width,iconWidth:r.width})),n.push(f||r.icon),{children:n,attributes:a}}}},hr={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return dt({type:"layer"},()=>{U("beforeDOMElementCreation",{assembler:t,params:e});let a=[];return t(r=>{Array.isArray(r)?r.map(i=>{a=a.concat(i.abstract)}):a=a.concat(r.abstract)}),[{tag:"span",attributes:{class:["".concat(m.cssPrefix,"-layers"),...n].join(" ")},children:a}]})}}}},vr={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:a=[],attributes:r={},styles:i={}}=e;return dt({type:"counter",content:t},()=>(U("beforeDOMElementCreation",{content:t,params:e}),qa({content:t.toString(),title:n,extra:{attributes:r,styles:i,classes:["".concat(m.cssPrefix,"-layers-counter"),...a]}})))}}}},yr={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=P,title:a=null,classes:r=[],attributes:i={},styles:o={}}=e;return dt({type:"text",content:t},()=>(U("beforeDOMElementCreation",{content:t,params:e}),Ce({content:t,transform:l(l({},P),n),title:a,extra:{attributes:i,styles:o,classes:["".concat(m.cssPrefix,"-layers-text"),...r]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:a,transform:r,extra:i}=n;let o=null,s=null;if(qe){const f=parseInt(getComputedStyle(e).fontSize,10),c=e.getBoundingClientRect();o=c.width/f,s=c.height/f}return m.autoA11y&&!a&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,Ce({content:e.innerHTML,width:o,height:s,transform:r,title:a,extra:i,watchable:!0})])}}},br=new RegExp('"',"ug"),Le=[1105920,1112319],Fe=l(l(l(l({},{FontAwesome:{normal:"fas",400:"fas"}}),Hn),sa),ta),Ft=Object.keys(Fe).reduce((t,e)=>(t[e.toLowerCase()]=Fe[e],t),{}),xr=Object.keys(Ft).reduce((t,e)=>{const n=Ft[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function Ar(t){const e=t.replace(br,""),n=Ia(e,0),a=n>=Le[0]&&n<=Le[1],r=e.length===2?e[0]===e[1]:!1;return{value:Ct(r?e[0]:e),isSecondary:a||r}}function wr(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(e),r=isNaN(a)?"normal":a;return(Ft[n]||{})[r]||xr[n]}function ze(t,e){const n="".concat(la).concat(e.replace(":","-"));return new Promise((a,r)=>{if(t.getAttribute(n)!==null)return a();const i=V(t.children).filter(g=>g.getAttribute(kt)===e)[0],o=F.getComputedStyle(t,e),s=o.getPropertyValue("font-family"),f=s.match(da),c=o.getPropertyValue("font-weight"),u=o.getPropertyValue("content");if(i&&!f)return t.removeChild(i),a();if(f&&u!=="none"&&u!==""){const g=o.getPropertyValue("content");let p=wr(s,c);const{value:x,isSecondary:w}=Ar(g),A=f[0].startsWith("FontAwesome");let h=ce(p,x),y=h;if(A){const b=Fa(x);b.iconName&&b.prefix&&(h=b.iconName,p=b.prefix)}if(h&&!w&&(!i||i.getAttribute(re)!==p||i.getAttribute(ie)!==y)){t.setAttribute(n,y),i&&t.removeChild(i);const b=fr(),{extra:_}=b;_.attributes[kt]=e,Tt(h,p).then(R=>{const T=ue(l(l({},b),{},{icons:{main:R,mask:bn()},prefix:p,iconName:y,extra:_,watchable:!0})),Y=v.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(Y,t.firstChild):t.appendChild(Y),Y.outerHTML=T.map(tt=>Z(tt)).join(`
`),t.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function kr(t){return Promise.all([ze(t,"::before"),ze(t,"::after")])}function Sr(t){return t.parentNode!==document.head&&!~ca.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(kt)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function je(t){if(N)return new Promise((e,n)=>{const a=V(t.querySelectorAll("*")).filter(Sr).map(kr),r=me.begin("searchPseudoElements");Sn(),Promise.all(a).then(()=>{r(),Lt(),e()}).catch(()=>{r(),Lt(),n()})})}var Or={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=je,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=v}=e;m.searchPseudoElements&&je(n)}}},Re=!1,Pr={mixout(){return{dom:{unwatch(){Sn(),Re=!0}}}},hooks(){return{bootstrap(){_e(It("mutationObserverCallbacks",{}))},noAuto(){ir()},watch(t){const{observeMutationsRoot:e}=t;Re?Lt():_e(It("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}},De=t=>t.toLowerCase().split(" ").reduce((e,n)=>{const a=n.toLowerCase().split("-"),r=a[0];let i=a.slice(1).join("-");if(r&&i==="h")return e.flipX=!0,e;if(r&&i==="v")return e.flipY=!0,e;if(i=parseFloat(i),isNaN(i))return e;switch(r){case"grow":e.size=e.size+i;break;case"shrink":e.size=e.size-i;break;case"left":e.x=e.x-i;break;case"right":e.x=e.x+i;break;case"up":e.y=e.y-i;break;case"down":e.y=e.y+i;break;case"rotate":e.rotate=e.rotate+i;break}return e},{size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0}),Cr={mixout(){return{parse:{transform:t=>De(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=De(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:a,containerWidth:r,iconWidth:i}=e;const o={transform:"translate(".concat(r/2," 256)")},s="translate(".concat(a.x*32,", ").concat(a.y*32,") "),f="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),c="rotate(".concat(a.rotate," 0 0)"),u={outer:o,inner:{transform:"".concat(s," ").concat(f," ").concat(c)},path:{transform:"translate(".concat(i/2*-1," -256)")}};return{tag:"g",attributes:l({},u.outer),children:[{tag:"g",attributes:l({},u.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:l(l({},n.icon.attributes),u.path)}]}]}}}},yt={x:0,y:0,width:"100%",height:"100%"};function We(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function Er(t){return t.tag==="g"?t.children:[t]}Ha([Oa,gr,hr,vr,yr,Or,Pr,Cr,{hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),a=n?mt(n.split(" ").map(r=>r.trim())):bn();return a.prefix||(a.prefix=z()),t.mask=a,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:a,main:r,mask:i,maskId:o,transform:s}=e;const{width:f,icon:c}=r,{width:u,icon:g}=i,p=wa({transform:s,containerWidth:u,iconWidth:f}),x={tag:"rect",attributes:l(l({},yt),{},{fill:"white"})},w=c.children?{children:c.children.map(We)}:{},A={tag:"g",attributes:l({},p.inner),children:[We(l({tag:c.tag,attributes:l(l({},c.attributes),p.path)},w))]},h={tag:"g",attributes:l({},p.outer),children:[A]},y="mask-".concat(o||K()),b="clip-".concat(o||K()),_={tag:"mask",attributes:l(l({},yt),{},{id:y,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[x,h]},R={tag:"defs",children:[{tag:"clipPath",attributes:{id:b},children:Er(g)},_]};return n.push(R,{tag:"rect",attributes:l({fill:"currentColor","clip-path":"url(#".concat(b,")"),mask:"url(#".concat(y,")")},yt)}),{children:n,attributes:a}}}},{provides(t){let e=!1;F.matchMedia&&(e=F.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],a={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:l(l({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const i=l(l({},r),{},{attributeName:"opacity"}),o={tag:"circle",attributes:l(l({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||o.children.push({tag:"animate",attributes:l(l({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:l(l({},i),{},{values:"1;0;1;1;0;1;"})}),n.push(o),n.push({tag:"path",attributes:l(l({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:l(l({},i),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:l(l({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:l(l({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},{hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol");return t.symbol=n===null?!1:n===""?!0:n,t}}}}],{mixoutsTo:S});var ai=S.noAuto,ri=S.config,ii=S.library,oi=S.dom,zt=S.parse,si=S.findIconDefinition,li=S.toHtml,Ir=S.icon,fi=S.layer,ci=S.text,ui=S.counter,Nr=ne(((t,e)=>{var n="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";e.exports=n})),_r=ne(((t,e)=>{var n=Nr();function a(){}function r(){}r.resetWarningCache=a,e.exports=function(){function i(f,c,u,g,p,x){if(x!==n){var w=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw w.name="Invariant Violation",w}}i.isRequired=i;function o(){return i}var s={array:i,bigint:i,bool:i,func:i,number:i,object:i,string:i,symbol:i,any:i,arrayOf:o,element:i,elementType:i,instanceOf:o,node:i,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:r,resetWarningCache:a};return s.PropTypes=s,s}})),Tr=ne(((t,e)=>{e.exports=_r()()})),Mr=Fn({author:()=>Ut,bugs:()=>Wt,default:()=>Pn,dependencies:()=>Ht,description:()=>jt,engines:()=>$t,exports:()=>Jt,homepage:()=>Dt,keywords:()=>Rt,license:()=>"MIT",main:()=>Bt,module:()=>Xt,name:()=>Vt,repository:()=>Yt,sideEffects:()=>Qt,style:()=>qt,types:()=>Kt,version:()=>Gt}),jt,Rt,Dt,Wt,Ut,Yt,$t,Ht,Gt,Vt,Bt,Xt,qt,Lr,Kt,Jt,Qt,Pn,Fr=Ln((()=>{jt="The iconic font, CSS, and SVG framework",Rt=["font","awesome","fontawesome","icon","svg","bootstrap"],Dt="https://fontawesome.com",Wt={url:"https://github.com/FortAwesome/Font-Awesome/issues"},Ut="The Font Awesome Team (https://github.com/orgs/FortAwesome/people)",Yt={type:"git",url:"https://github.com/FortAwesome/Font-Awesome"},$t={node:">=6"},Ht={"@fortawesome/fontawesome-common-types":"6.7.2"},Gt="6.7.2",Vt="@fortawesome/fontawesome-svg-core",Bt="index.js",Xt="index.mjs",qt="styles.css",Lr="MIT",Kt="./index.d.ts",Jt={".":{types:"./index.d.ts",module:"./index.mjs",import:"./index.mjs",require:"./index.js",style:"./styles.css",default:"./index.js"},"./index":{types:"./index.d.ts",module:"./index.mjs",import:"./index.mjs",require:"./index.js",default:"./index.js"},"./index.js":{types:"./index.d.ts",module:"./index.mjs",import:"./index.mjs",require:"./index.js",default:"./index.js"},"./plugins":{types:"./index.d.ts",module:"./plugins.mjs",import:"./plugins.mjs",default:"./plugins.mjs"},"./import.macro":"./import.macro.js","./import.macro.js":"./import.macro.js","./styles":"./styles.css","./styles.css":"./styles.css","./package.json":"./package.json"},Qt=["./index.js","./index.mjs","./styles.css"],Pn={description:jt,keywords:Rt,homepage:Dt,bugs:Wt,author:Ut,repository:Yt,engines:$t,dependencies:Ht,version:Gt,name:Vt,main:Bt,module:Xt,"jsnext:main":"index.mjs",style:qt,license:"MIT",types:Kt,exports:Jt,sideEffects:Qt}})),d=Ge(Tr()),Cn=Ge(zn());function Zt(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,a=Array(e);n<e;n++)a[n]=t[n];return a}function zr(t){if(Array.isArray(t))return t}function jr(t){if(Array.isArray(t))return Zt(t)}function L(t,e,n){return(e=Gr(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Rr(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Dr(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var a,r,i,o,s=[],f=!0,c=!1;try{if(i=(n=n.call(t)).next,e===0){if(Object(n)!==n)return;f=!1}else for(;!(f=(a=i.call(n)).done)&&(s.push(a.value),s.length!==e);f=!0);}catch(u){c=!0,r=u}finally{try{if(!f&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(c)throw r}}return s}}function Wr(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ur(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ue(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function O(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Ue(Object(n),!0).forEach(function(a){L(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Ue(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function Yr(t,e){if(t==null)return{};var n,a,r=$r(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)===-1&&{}.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}function $r(t,e){if(t==null)return{};var n={};for(var a in t)if({}.hasOwnProperty.call(t,a)){if(e.indexOf(a)!==-1)continue;n[a]=t[a]}return n}function Ye(t,e){return zr(t)||Dr(t,e)||En(t,e)||Wr()}function te(t){return jr(t)||Rr(t)||En(t)||Ur()}function Hr(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var a=n.call(t,e||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Gr(t){var e=Hr(t,"string");return typeof e=="symbol"?e:e+""}function lt(t){"@babel/helpers - typeof";return lt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},lt(t)}function En(t,e){if(t){if(typeof t=="string")return Zt(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Zt(t,e):void 0}}var Vr="7.0.0",ee;try{ee=(Fr(),Mn(Mr).default).version}catch{ee=typeof process<"u"&&{}.FA_VERSION||"7.0.0"}function Br(t){var e=t.beat,n=t.fade,a=t.beatFade,r=t.bounce,i=t.shake,o=t.flash,s=t.spin,f=t.spinPulse,c=t.spinReverse,u=t.pulse,g=t.fixedWidth,p=t.inverse,x=t.border,w=t.listItem,A=t.flip,h=t.size,y=t.rotation,b=t.pull,_=t.swapOpacity,R=t.rotateBy,T=t.widthAuto,Y=Xr(ee,Vr),tt=L(L(L(L(L(L({"fa-beat":e,"fa-fade":n,"fa-beat-fade":a,"fa-bounce":r,"fa-shake":i,"fa-flash":o,"fa-spin":s,"fa-spin-reverse":c,"fa-spin-pulse":f,"fa-pulse":u,"fa-fw":g,"fa-inverse":p,"fa-border":x,"fa-li":w,"fa-flip":A===!0,"fa-flip-horizontal":A==="horizontal"||A==="both","fa-flip-vertical":A==="vertical"||A==="both"},"fa-".concat(h),typeof h<"u"&&h!==null),"fa-rotate-".concat(y),typeof y<"u"&&y!==null&&y!==0),"fa-pull-".concat(b),typeof b<"u"&&b!==null),"fa-swap-opacity",_),"fa-rotate-by",Y&&R),"fa-width-auto",Y&&T);return Object.keys(tt).map(function(et){return tt[et]?et:null}).filter(function(et){return et})}function Xr(t,e){for(var n=Ye(t.split("-"),2),a=n[0],r=n[1],i=Ye(e.split("-"),2),o=i[0],s=i[1],f=a.split("."),c=o.split("."),u=0;u<Math.max(f.length,c.length);u++){var g=f[u]||"0",p=c[u]||"0",x=parseInt(g,10),w=parseInt(p,10);if(x!==w)return x>w}for(var A=0;A<Math.max(f.length,c.length);A++){var h=f[A]||"0",y=c[A]||"0";if(h!==y&&h.length!==y.length)return h.length<y.length}return!(r&&!s)}function qr(t){return t=t-0,t===t}function In(t){return qr(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var Kr=["style"];function Jr(t){return t.charAt(0).toUpperCase()+t.slice(1)}function Qr(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var a=n.indexOf(":"),r=In(n.slice(0,a)),i=n.slice(a+1).trim();return r.startsWith("webkit")?e[Jr(r)]=i:e[r]=i,e},{})}function Nn(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var a=(e.children||[]).map(function(f){return Nn(t,f)}),r=Object.keys(e.attributes||{}).reduce(function(f,c){var u=e.attributes[c];switch(c){case"class":f.attrs.className=u,delete e.attributes.class;break;case"style":f.attrs.style=Qr(u);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?f.attrs[c.toLowerCase()]=u:f.attrs[In(c)]=u}return f},{attrs:{}}),i=n.style,o=i===void 0?{}:i,s=Yr(n,Kr);return r.attrs.style=O(O({},r.attrs.style),o),t.apply(void 0,[e.tag,O(O({},r.attrs),s)].concat(te(a)))}var _n=!1;try{_n=!0}catch{}function Zr(){if(!_n&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function $e(t){if(t&&lt(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(zt.icon)return zt.icon(t);if(t===null)return null;if(t&&lt(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function bt(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?L({},t,e):{}}var He={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,rotateBy:!1,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1,widthAuto:!1},Tn=Cn.forwardRef(function(t,e){var n=O(O({},He),t),a=n.icon,r=n.mask,i=n.symbol,o=n.className,s=n.title,f=n.titleId,c=n.maskId,u=$e(a),g=bt("classes",[].concat(te(Br(n)),te((o||"").split(" ")))),p=bt("transform",typeof n.transform=="string"?zt.transform(n.transform):n.transform),x=bt("mask",$e(r)),w=Ir(u,O(O(O(O({},g),p),x),{},{symbol:i,title:s,titleId:f,maskId:c}));if(!w)return Zr("Could not find icon",u),null;var A=w.abstract,h={ref:e};return Object.keys(n).forEach(function(y){He.hasOwnProperty(y)||(h[y]=n[y])}),ti(A[0],h)});Tn.displayName="FontAwesomeIcon";Tn.propTypes={beat:d.default.bool,border:d.default.bool,beatFade:d.default.bool,bounce:d.default.bool,className:d.default.string,fade:d.default.bool,flash:d.default.bool,mask:d.default.oneOfType([d.default.object,d.default.array,d.default.string]),maskId:d.default.string,fixedWidth:d.default.bool,inverse:d.default.bool,flip:d.default.oneOf([!0,!1,"horizontal","vertical","both"]),icon:d.default.oneOfType([d.default.object,d.default.array,d.default.string]),listItem:d.default.bool,pull:d.default.oneOf(["right","left"]),pulse:d.default.bool,rotation:d.default.oneOf([0,90,180,270]),rotateBy:d.default.bool,shake:d.default.bool,size:d.default.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:d.default.bool,spinPulse:d.default.bool,spinReverse:d.default.bool,symbol:d.default.oneOfType([d.default.bool,d.default.string]),title:d.default.string,titleId:d.default.string,transform:d.default.oneOfType([d.default.string,d.default.object]),swapOpacity:d.default.bool,widthAuto:d.default.bool};var ti=Nn.bind(null,Cn.createElement),mi={prefix:"fas",iconName:"info",icon:[192,512,[],"f129","M48 80a48 48 0 1 1 96 0A48 48 0 1 1 48 80zM0 224c0-17.7 14.3-32 32-32l64 0c17.7 0 32 14.3 32 32l0 224 32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 512c-17.7 0-32-14.3-32-32s14.3-32 32-32l32 0 0-192-32 0c-17.7 0-32-14.3-32-32z"]},di={prefix:"fas",iconName:"circle-chevron-down",icon:[512,512,["chevron-circle-down"],"f13a","M256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM135 241c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l87 87 87-87c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L273 345c-9.4 9.4-24.6 9.4-33.9 0L135 241z"]},pi={prefix:"fas",iconName:"asterisk",icon:[384,512,[10033,61545],"2a","M192 32c17.7 0 32 14.3 32 32l0 135.5 111.5-66.9c15.2-9.1 34.8-4.2 43.9 11s4.2 34.8-11 43.9L254.2 256l114.3 68.6c15.2 9.1 20.1 28.7 11 43.9s-28.7 20.1-43.9 11L224 312.5 224 448c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-135.5L48.5 379.4c-15.2 9.1-34.8 4.2-43.9-11s-4.2-34.8 11-43.9L129.8 256 15.5 187.4c-15.2-9.1-20.1-28.7-11-43.9s28.7-20.1 43.9-11L160 199.5 160 64c0-17.7 14.3-32 32-32z"]},gi={prefix:"fas",iconName:"egg",icon:[384,512,[129370],"f7fb","M192 496C86 496 0 394 0 288C0 176 64 16 192 16s192 160 192 272c0 106-86 208-192 208zM154.8 134c6.5-6 7-16.1 1-22.6s-16.1-7-22.6-1c-23.9 21.8-41.1 52.7-52.3 84.2C69.7 226.1 64 259.7 64 288c0 8.8 7.2 16 16 16s16-7.2 16-16c0-24.5 5-54.4 15.1-82.8c10.1-28.5 25-54.1 43.7-71.2z"]},hi={prefix:"fas",iconName:"lock",icon:[448,512,[128274],"f023","M144 144l0 48 160 0 0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192l0-48C80 64.5 144.5 0 224 0s144 64.5 144 144l0 48 16 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 256c0-35.3 28.7-64 64-64l16 0z"]},vi={prefix:"fas",iconName:"user",icon:[448,512,[128100,62144],"f007","M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"]},yi={prefix:"fas",iconName:"star",icon:[576,512,[11088,61446],"f005","M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"]},bi={prefix:"fas",iconName:"unlock",icon:[448,512,[128275],"f09c","M144 144c0-44.2 35.8-80 80-80c31.9 0 59.4 18.6 72.3 45.7c7.6 16 26.7 22.8 42.6 15.2s22.8-26.7 15.2-42.6C331 33.7 281.5 0 224 0C144.5 0 80 64.5 80 144l0 48-16 0c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-192c0-35.3-28.7-64-64-64l-240 0 0-48z"]},xi={prefix:"fas",iconName:"crow",icon:[640,512,[],"f520","M456 0c-48.6 0-88 39.4-88 88l0 29.2L12.5 390.6c-14 10.8-16.6 30.9-5.9 44.9s30.9 16.6 44.9 5.9L126.1 384l133.1 0 46.6 113.1c5 12.3 19.1 18.1 31.3 13.1s18.1-19.1 13.1-31.3L311.1 384l40.9 0c1.1 0 2.1 0 3.2 0l46.6 113.2c5 12.3 19.1 18.1 31.3 13.1s18.1-19.1 13.1-31.3l-42-102C484.9 354.1 544 280 544 192l0-64 0-8 80.5-20.1c8.6-2.1 13.8-10.8 11.6-19.4C629 52 603.4 32 574 32l-50.1 0C507.7 12.5 483.3 0 456 0zm0 64a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"]},Ai={prefix:"fas",iconName:"font-awesome",icon:[512,512,[62501,62694,"font-awesome-flag","font-awesome-logo-full"],"f2b4","M91.7 96C106.3 86.8 116 70.5 116 52C116 23.3 92.7 0 64 0S12 23.3 12 52c0 16.7 7.8 31.5 20 41l0 3 0 352 0 64 64 0 0-64 373.6 0c14.6 0 26.4-11.8 26.4-26.4c0-3.7-.8-7.3-2.3-10.7L432 272l61.7-138.9c1.5-3.4 2.3-7 2.3-10.7c0-14.6-11.8-26.4-26.4-26.4L91.7 96z"]},wi={prefix:"fas",iconName:"floppy-disk",icon:[448,512,[128190,128426,"save"],"f0c7","M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-242.7c0-17-6.7-33.3-18.7-45.3L352 50.7C340 38.7 323.7 32 306.7 32L64 32zm0 96c0-17.7 14.3-32 32-32l192 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32L96 224c-17.7 0-32-14.3-32-32l0-64zM224 288a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"]},ki={prefix:"fas",iconName:"keyboard",icon:[576,512,[9e3],"f11c","M64 64C28.7 64 0 92.7 0 128L0 384c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L64 64zm16 64l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zM64 240c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zm16 80l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zm80-176c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zm16 80l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zM160 336c0-8.8 7.2-16 16-16l224 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-224 0c-8.8 0-16-7.2-16-16l0-32zM272 128l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zM256 240c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zM368 128l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zM352 240c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zM464 128l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zM448 240c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zm16 80l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16z"]},Si={prefix:"fas",iconName:"download",icon:[512,512,[],"f019","M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 242.7-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7 288 32zM64 352c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-101.5 0-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352 64 352zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"]},Oi={prefix:"fas",iconName:"upload",icon:[512,512,[],"f093","M288 109.3L288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-242.7-73.4 73.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l128-128c12.5-12.5 32.8-12.5 45.3 0l128 128c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L288 109.3zM64 352l128 0c0 35.3 28.7 64 64 64s64-28.7 64-64l128 0c35.3 0 64 28.7 64 64l0 32c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64l0-32c0-35.3 28.7-64 64-64zM432 456a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"]},Pi={prefix:"fas",iconName:"earth-americas",icon:[512,512,[127758,"earth","earth-america","globe-americas"],"f57d","M57.7 193l9.4 16.4c8.3 14.5 21.9 25.2 38 29.8L163 255.7c17.2 4.9 29 20.6 29 38.5l0 39.9c0 11 6.2 21 16 25.9s16 14.9 16 25.9l0 39c0 15.6 14.9 26.9 29.9 22.6c16.1-4.6 28.6-17.5 32.7-33.8l2.8-11.2c4.2-16.9 15.2-31.4 30.3-40l8.1-4.6c15-8.5 24.2-24.5 24.2-41.7l0-8.3c0-12.7-5.1-24.9-14.1-33.9l-3.9-3.9c-9-9-21.2-14.1-33.9-14.1L257 256c-11.1 0-22.1-2.9-31.8-8.4l-34.5-19.7c-4.3-2.5-7.6-6.5-9.2-11.2c-3.2-9.6 1.1-20 10.2-24.5l5.9-3c6.6-3.3 14.3-3.9 21.3-1.5l23.2 7.7c8.2 2.7 17.2-.4 21.9-7.5c4.7-7 4.2-16.3-1.2-22.8l-13.6-16.3c-10-12-9.9-29.5 .3-41.3l15.7-18.3c8.8-10.3 10.2-25 3.5-36.7l-2.4-4.2c-3.5-.2-6.9-.3-10.4-.3C163.1 48 84.4 108.9 57.7 193zM464 256c0-36.8-9.6-71.4-26.4-101.5L412 164.8c-15.7 6.3-23.8 23.8-18.5 39.8l16.9 50.7c3.5 10.4 12 18.3 22.6 20.9l29.1 7.3c1.2-9 1.8-18.2 1.8-27.5zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"]},Ci={prefix:"fas",iconName:"face-smile",icon:[512,512,[128578,"smile"],"f118","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM164.1 325.5C182 346.2 212.6 368 256 368s74-21.8 91.9-42.5c5.8-6.7 15.9-7.4 22.6-1.6s7.4 15.9 1.6 22.6C349.8 372.1 311.1 400 256 400s-93.8-27.9-116.1-53.5c-5.8-6.7-5.1-16.8 1.6-22.6s16.8-5.1 22.6 1.6zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]},Ei={prefix:"fas",iconName:"paper-plane",icon:[512,512,[61913],"f1d8","M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480l0-83.6c0-4 1.5-7.8 4.2-10.8L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"]};export{vi as _,Pi as a,wi as c,ki as d,hi as f,Oi as g,bi as h,Si as i,Ai as l,yi as m,di as n,gi as o,Ei as p,xi as r,Ci as s,pi as t,mi as u,Tn as v,Tr as y};

//# sourceMappingURL=free-solid-svg-icons-CtnwORt4.js.map