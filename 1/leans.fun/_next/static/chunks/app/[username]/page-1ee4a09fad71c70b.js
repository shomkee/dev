(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4712],{1275:function(e,t,r){Promise.resolve().then(r.bind(r,8121)),Promise.resolve().then(r.bind(r,4827)),Promise.resolve().then(r.bind(r,6583))},8121:function(e,t,r){"use strict";r.d(t,{BioLinkContent:function(){return W}});var s=r(7437),l=r(2265);let n=(0,l.createContext)(null),a=e=>{let{info:t,children:r}=e;return(0,s.jsx)(n.Provider,{value:t,children:r})},o=e=>{let{tag:t}=e;return(0,s.jsx)("span",{className:"line-clamp-1 select-none rounded-full border border-theme px-3 py-1 text-sm text-theme",children:t})},c=()=>{var e;let{tags:t,alignLeft:r}=null!==(e=(0,l.useContext)(n))&&void 0!==e?e:{tags:[],alignLeft:!1};return t&&0!==t.length?(0,s.jsx)("section",{className:"w-full flex ".concat(r?"justify-left":"justify-center"," flex-wrap gap-2"),children:t.map((e,t)=>(0,s.jsx)(o,{tag:e},t))}):null};var i=r(6648),u=r(1010);let d=e=>{let{src:t,width:r}=e;return t+"?w=".concat(r)},x=e=>{let{avatar:t,decoration:r}=e;return""===t&&"None"===r?null:""===t&&"None"!==r?(0,s.jsx)("div",{className:"relative m-2 aspect-square h-28"}):(0,s.jsx)("div",{className:"relative m-2 aspect-square h-28",children:(0,s.jsx)(i.default,{loader:d,src:t,width:112,height:112,alt:"Аватар",className:"border-color border-width avatar-radius aspect-square size-full",priority:!0})})},m=e=>{let{decoration:t,hueRotation:r}=e;if(""===t||"None"===t)return null;let l=(0,u.m)(t);return(0,s.jsx)("div",{className:"pointer-events-none absolute top-0 left-0 aspect-square h-32",children:(0,s.jsx)(i.default,{unoptimized:!0,src:"AHintOfClove"===t?"/assets/decorations/a-hint-of-clove.png":"/assets/decorations/".concat(l,".png"),width:128,height:128,alt:"Декорация",className:"aspect-square size-full",priority:!0,style:{color:"transparent",filter:"hue-rotate(".concat(r,"deg)")}})})},h=()=>{var e;let{avatar:t,avatarDecoration:r,hueRotation:a}=null!==(e=(0,l.useContext)(n))&&void 0!==e?e:{avatar:"",avatarDecoration:"None",hueRotation:0};return""===t&&"None"===r?null:(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsx)(x,{avatar:t,decoration:r}),(0,s.jsx)(m,{decoration:r,hueRotation:a})]})};var p=r(9950),f=r(1234);let v=e=>{var t,r;let{badge:l}=e,n=(null===(t=l.badgeIcon)||void 0===t?void 0:t.includes("views"))||(null===(r=l.badgeIcon)||void 0===r?void 0:r.includes("newyear"))?"scale-95":"scale-[80%]";return(0,s.jsx)("div",{className:"size-6",children:(0,s.jsx)(f._,{content:l.badgeName,children:(0,s.jsx)("div",{className:"text-theme size-full ".concat(n),children:(0,s.jsx)(p.default,{src:"/assets/badges/".concat(l.badgeIcon,".svg"),width:24,height:24,className:"fill-theme text-theme drop-shadow-theme"})})})})},j=()=>{var e;let{badges:t}=null!==(e=(0,l.useContext)(n))&&void 0!==e?e:{badges:[]};return(0,s.jsx)("section",{className:"flex justify-center flex-wrap gap-2",children:t.map(e=>(0,s.jsx)(v,{badge:e},e.id))})},g=()=>{var e;let{bio:t,alignLeft:r}=null!==(e=(0,l.useContext)(n))&&void 0!==e?e:{bio:"",alignLeft:!1};return(0,s.jsx)("section",{children:(0,s.jsx)("p",{className:"".concat(r?"text-left":"text-center"," secondary-text-color text-base"),children:t})})};var b=r(969),N=r(5733);let y=e=>{let{icon:t,tooltip:r,content:l}=e;return(0,s.jsx)(f._,{content:r,children:(0,s.jsxs)("div",{className:"flex justify-center items-center gap-2 card-style px-2 py-1",children:[(0,s.jsx)(t,{className:"size-4 text-theme drop-shadow-theme"}),(0,s.jsx)("span",{className:"secondary-text-color text-xs",children:l})]})})},w=()=>{var e;let{userId:t,showId:r}=null!==(e=(0,l.useContext)(n))&&void 0!==e?e:{userId:0};return r?(0,s.jsx)(y,{icon:b.Z,tooltip:"Уникальный ID",content:t}):null},C=()=>{var e;let{visits:t,showVisits:r}=null!==(e=(0,l.useContext)(n))&&void 0!==e?e:{visits:0};return r?(0,s.jsx)(y,{icon:N.Z,tooltip:"Просмотры",content:t}):null};var k=r(7138),z=r(1761);let S=e=>{let{title:t,icon:r,theme:n}=e,[a,o]=(0,l.useState)(!1);return(0,s.jsx)(f._,{content:a?"Скопировано!":"".concat(t," \uD83D\uDCCB"),children:(0,s.jsx)("div",{onClick:()=>{navigator.clipboard.writeText(t),o(!0),(0,z.Cj)("Ссылка на ".concat(t," скопирована!")),setTimeout(()=>o(!1),2e3)},className:"size-full",children:(0,s.jsx)(p.default,{src:"/assets/services/".concat(r,".svg"),width:32,height:32,className:n?"fill-theme text-theme drop-shadow-theme":"fill-neutral-50 text-neutral-50 drop-shadow-neutral"})})})},I=e=>{let{title:t,url:r,icon:l,theme:n}=e;return(0,s.jsx)(f._,{content:t||r,children:(0,s.jsx)(k.default,{href:r,passHref:!0,target:"_blank",className:"size-full block",children:(0,s.jsx)(p.default,{src:"/assets/services/".concat(l,".svg"),width:32,height:32,className:n?"fill-theme text-theme drop-shadow-theme":"fill-neutral-50 text-neutral-50 drop-shadow-neutral"})})})},_=()=>{var e;let{services:t,themeIcons:r}=null!==(e=(0,l.useContext)(n))&&void 0!==e?e:{services:[]};return(0,s.jsx)("section",{className:"flex justify-center items-center flex-wrap gap-4",children:t.map(e=>(0,s.jsx)("div",{className:"size-8",children:e.url?(0,s.jsx)(I,{title:e.title,url:e.url,icon:e.icon,theme:r}):(0,s.jsx)(S,{title:e.title,icon:e.icon,theme:r})},e.id))})};var q=r(9321);let B=()=>{var e;let{location:t}=null!==(e=(0,l.useContext)(n))&&void 0!==e?e:{location:""};return t?(0,s.jsxs)("section",{className:"flex items-center gap-1",children:[(0,s.jsx)("div",{className:"text-theme",children:(0,s.jsx)(q.Z,{size:16,className:"drop-shadow-theme"})}),(0,s.jsx)("p",{className:"text-center secondary-text-color text-sm",children:t})]}):null},E=()=>{var e;let{name:t,usernameEffect:r}=null!==(e=(0,l.useContext)(n))&&void 0!==e?e:{name:"",usernameEffect:""};if("None"!==r){let e=(0,u.m)(r);return(0,s.jsxs)("div",{className:"relative w-fit",children:[(0,s.jsx)(i.default,{src:"/assets/username/".concat(e,".gif"),alt:"Эффект имени",className:"absolute w-full h-full object-cover",width:0,height:0,style:{color:"transparent"}}),(0,s.jsx)("h1",{className:"relative primary-text-color break-all text-2xl font-bold",children:t})]})}return(0,s.jsx)("h1",{className:"primary-text-color break-all text-2xl font-bold",children:t})},T=()=>{var e;let{alignLeft:t}=null!==(e=(0,l.useContext)(n))&&void 0!==e?e:{alignLeft:!1},r=t?"items-start":"items-center";return(0,s.jsxs)("div",{className:"flex justify-center ".concat(r," flex-col gap-4"),children:[(0,s.jsx)(h,{}),(0,s.jsxs)("div",{className:"flex justify-center ".concat(r," z-10 flex-col gap-1 cursor-default"),children:[(0,s.jsx)(E,{}),(0,s.jsx)(j,{})]}),(0,s.jsx)("div",{className:"flex justify-center ".concat(r," z-10"),children:(0,s.jsx)(c,{})}),(0,s.jsx)(B,{}),(0,s.jsx)(g,{}),(0,s.jsx)(_,{}),(0,s.jsxs)("div",{className:"absolute right-0 top-0 m-4 flex items-center gap-2",children:[(0,s.jsx)(C,{}),(0,s.jsx)(w,{})]})]})};var O=r(6319);r(6674);let L=e=>{var t,r;let{revealed:a}=e,{audio:o,audioTitle:c}=null!==(t=(0,l.useContext)(n))&&void 0!==t?t:{audio:"",audioTitle:""},i=null!==(r=o.split(".").pop())&&void 0!==r?r:"";return((0,l.useEffect)(()=>{if(a){let e=document.querySelector("audio");null==e||e.play()}else{let e=document.querySelector("audio");null==e||e.pause()}return()=>{let e=document.querySelector("audio");null==e||e.pause()}},[a]),["mp3","wav","ogg"].includes(i))?(0,s.jsx)(O.Z,{header:c,src:o,layout:"horizontal",showJumpControls:!1,loop:!0}):(0,s.jsx)(s.Fragment,{})},R=e=>{let{revealed:t}=e;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"card-style",children:(0,s.jsx)("div",{className:"space-y-8 p-10",children:(0,s.jsx)(T,{})})}),(0,s.jsx)(L,{revealed:t})]})};var Z=r(4042),A=r(357);let D=()=>{let e=A.env.HOST_URL||"https://leans.fun";return(0,s.jsx)("div",{className:"fixed bottom-0 right-0 m-4",children:(0,s.jsxs)(k.default,{href:e,className:"card-style flex h-12 items-center gap-3 px-6 py-3",children:[(0,s.jsx)(Z.Z,{size:18,strokeWidth:0,className:"fill-theme drop-shadow-theme"}),(0,s.jsx)("span",{className:"text-xs font-semibold",children:"Сделано на leans.fun"})]})})},P=e=>{var t;let{setRevealed:r}=e,{revealScreen:a,revealScreenText:o}=null!==(t=(0,l.useContext)(n))&&void 0!==t?t:{revealScreen:!1,revealScreenText:""};return a?(0,s.jsx)("button",{type:"button",className:"fixed inset-0 z-50 flex justify-center items-center bg-neutral-950 bg-opacity-50 backdrop-blur-lg",onClick:()=>r(!0),children:(0,s.jsx)("p",{className:"text-center page-enter",children:o})}):null},F=()=>{var e,t;let{background:r}=null!==(e=(0,l.useContext)(n))&&void 0!==e?e:{background:""},a=null!==(t=r.split(".").pop())&&void 0!==t?t:"";return["png","jpeg","jpg","gif","webp"].includes(a)?(0,s.jsx)("div",{className:"fixed top-0 size-full bg-cover bg-center bg-no-repeat",style:{backgroundImage:"url(".concat(r,")"),transform:"scale(1.025)"}}):["mp4"].includes(a)?(0,s.jsx)("video",{autoPlay:!0,loop:!0,playsInline:!0,muted:!0,controlsList:"nofullscreen",disablePictureInPicture:!0,style:{transform:"scale(1.025)"},src:r,className:"fixed top-0 size-full object-cover"}):(0,s.jsx)(s.Fragment,{})};var $=r(1131);let H=e=>{let[t,r]=(0,l.useState)(1),[s,n]=(0,l.useState)(!0);return(0,l.useEffect)(()=>{let l=setTimeout(()=>{s?t<e.length?r(e=>e+1):n(!1):t>1?r(e=>e-1):n(!0)},300);return document.title=e.slice(0,t),()=>clearTimeout(l)},[t,s,e,300]),null},K=e=>{let t=" ".concat(e," "),[r,s]=(0,l.useState)(0);return(0,l.useEffect)(()=>{let e=setInterval(()=>{s(e=>(e+1)%t.length),document.title=t.slice(r)+t.slice(0,r)},300);return()=>clearInterval(e)},[r,t,300]),null},J=e=>{let[t,r]=(0,l.useState)(!0);return(0,l.useEffect)(()=>{let s=setInterval(()=>{r(e=>!e),document.title=t?e:"‎"},700);return()=>clearInterval(s)},[t,e,700]),null},M=e=>{let{animation:t,title:r}=e;switch(t){case"typewriter":return H(r);case"marquee":return K(r);case"blink":return J(r);default:return null}},W=e=>{let{info:t}=e,[r,n]=(0,l.useState)(!t.revealScreen),{tiltEffect:o,titleAnimation:c,pageTitle:i}=t;return(0,s.jsxs)(a,{info:t,children:[!r&&(0,s.jsx)(P,{setRevealed:n}),(0,s.jsx)(M,{animation:c,title:i}),(0,s.jsx)(F,{}),o?(0,s.jsx)($.Z,{className:"".concat(r?"page-enter":"hidden"," w-full card-width relative mx-auto space-y-8 px-4 py-20"),scale:1.05,transitionSpeed:1500,tiltReverse:!0,tiltMaxAngleX:10,tiltMaxAngleY:10,children:(0,s.jsx)(R,{revealed:r})}):(0,s.jsx)("div",{className:"".concat(r?"page-enter":"hidden"," w-full card-width relative mx-auto space-y-8 px-4 py-20"),children:(0,s.jsx)(R,{revealed:r})}),t.showWatermark&&r&&(0,s.jsx)(D,{})]})}},4827:function(e,t,r){"use strict";r.d(t,{CardCursor:function(){return a}});var s=r(7437),l=r(101),n=r(2265);let a=e=>{let{cursor:t,cursorTrail:r,themeColor:a}=e,o=t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),c="none"!==o?"".concat("https://s3.leans.fun","/assets/cursors/").concat(o,".cur"):"".concat("https://s3.leans.fun","/assets/cursors/default.png");return((0,n.useEffect)(()=>{switch(r){case"None":break;case"Rainbow":(0,l.Hy)();break;case"FairyDust":(0,l.f4)();break;case"Ghost":(0,l.$N)({image:c,randomDelay:!0});break;case"Trailing":(0,l.n8)({baseImageSrc:c,particles:10});break;case"Following":(0,l.Y2)({color:a});break;case"Bubbles":(0,l.gR)();break;case"Snowflakes":(0,l.be)()}return()=>{document.querySelectorAll("canvas").forEach(e=>e.remove())}},[r,c,a]),"None"===t)?null:(0,s.jsx)("style",{children:"\n        * {\n          cursor: url(".concat(c,"), auto !important;\n        }\n      ")})}},1234:function(e,t,r){"use strict";r.d(t,{_:function(){return l}});var s=r(7437);let l=e=>{let{children:t,content:r,notCard:l=!1}=e;return(0,s.jsxs)("div",{className:"group relative flex items-start justify-center size-full",children:[t,(0,s.jsx)("div",{className:"text-neutral-50 ".concat(l?"rounded-xl border-[--primary]":"tooltip-style"," bg-neutral-900 box-radius pointer-events-none absolute -top-10 z-10 flex translate-y-1 scale-90 items-center gap-2 border px-3 py-1.5 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100"),children:(0,s.jsx)("span",{className:"select-none truncate text-xs font-normal",children:r})})]})}},6583:function(e,t,r){"use strict";r.d(t,{Toaster:function(){return n}});var s=r(7437),l=r(7776);let n=e=>{let{...t}=e;return(0,s.jsx)(l.Toaster,{theme:"dark",className:"toaster group",toastOptions:{classNames:{toast:"group toast"}},...t})}},1761:function(e,t,r){"use strict";r.d(t,{Cj:function(){return c},Jc:function(){return a},Qm:function(){return n},Rr:function(){return o}});var s=r(7776);let l=(e,t,r,l,n,a)=>{var o;s.A[e](t,{description:r,action:{label:l,onClick:a||(()=>{})},classNames:{toast:"bg-neutral-900 border-2 "+(null==n?void 0:n.toast),title:"text-neutral-50",description:"text-neutral-300 "+(null==n?void 0:n.description),icon:null==n?void 0:n.icon,actionButton:null!==(o=null==n?void 0:n.actionButton)&&void 0!==o?o:"!bg-neutral-50 !text-neutral-950 !border !border-neutral-50",cancelButton:"bg-neutral-50 text-neutral-950 border border-neutral-50 ",closeButton:"bg-neutral-800 text-neutral-50 hover:bg-neutral-50 hover:text-[--primary] border border-neutral-50 "+(null==n?void 0:n.closeButton)}})},n=e=>{l("success","Успех",e,"OK",{toast:"border-green-500",description:"text-neutral-300",icon:"text-green-500"})},a=e=>{l("error","Ошибка",e,"OK",{toast:"border-red-500",description:"text-neutral-300",icon:"text-red-500"})},o=(e,t)=>{l("info",t,e,"OK",{toast:"border-[--primary]",description:t?"text-neutral-300":"text-white",icon:"text-[--primary]"})},c=(e,t)=>{l("info",t,e,"OK",{toast:"card-style",description:"primary-text-color",icon:"text-theme fill-theme drop-shadow-theme",closeButton:"hidden",actionButton:"!bg-[--card-color] !text-[--theme-color] !border-2 !border-[--border-color] !border-solid"})}},1010:function(e,t,r){"use strict";function s(e){return e.replace(/([a-z0–9])([A-Z])/g,"$1-$2").toLowerCase()}r.d(t,{m:function(){return s}})},6674:function(){}},function(e){e.O(0,[7112,231,7776,4974,9950,9457,2971,7023,1744],function(){return e(e.s=1275)}),_N_E=e.O()}]);