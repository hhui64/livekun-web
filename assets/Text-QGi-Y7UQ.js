import{c as u,A as J,d as G,s as Fe,q as ae,j as f,_,aD as F,c2 as Ve,g as Ke,aF as Xe,z as we,n as ie,r as le,b as Te,c3 as qe,u as $e,c4 as De,a as q,t as Je,aJ as ee,ap as me,av as Ge,ax as re,c5 as te,ao as ce,N as be,aL as Qe,c6 as Ye}from"./index-fE7iDMEm.js";import{k as Ze,T as et}from"./TextArea-s8ONPElW.js";import{R as tt,h as ne}from"./index-LBDaFOMZ.js";import{u as nt}from"./useMergedState-Oj0_i8Bo.js";const Be=e=>({color:e.colorLink,textDecoration:"none",outline:"none",cursor:"pointer",transition:`color ${e.motionDurationSlow}`,"&:focus, &:hover":{color:e.colorLinkHover},"&:active":{color:e.colorLinkActive}});var ot={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"}}]},name:"check",theme:"outlined"};const it=ot;function ve(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?Object(arguments[t]):{},o=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable}))),o.forEach(function(i){lt(e,i,n[i])})}return e}function lt(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var se=function(t,n){var o=ve({},t,n.attrs);return u(J,ve({},o,{icon:it}),null)};se.displayName="CheckOutlined";se.inheritAttrs=!1;const rt=se;var at=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,o=Object.getOwnPropertySymbols(e);i<o.length;i++)t.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(n[o[i]]=e[o[i]]);return n};const ct={border:0,background:"transparent",padding:0,lineHeight:"inherit",display:"inline-block"},st=G({compatConfig:{MODE:3},name:"TransButton",inheritAttrs:!1,props:{noStyle:{type:Boolean,default:void 0},onClick:Function,disabled:{type:Boolean,default:void 0},autofocus:{type:Boolean,default:void 0}},setup(e,t){let{slots:n,emit:o,attrs:i,expose:s}=t;const a=Fe(),l=h=>{const{keyCode:S}=h;S===F.ENTER&&h.preventDefault()},m=h=>{const{keyCode:S}=h;S===F.ENTER&&o("click",h)},x=h=>{o("click",h)},g=()=>{a.value&&a.value.focus()},$=()=>{a.value&&a.value.blur()};return ae(()=>{e.autofocus&&g()}),s({focus:g,blur:$}),()=>{var h;const{noStyle:S,disabled:B}=e,D=at(e,["noStyle","disabled"]);let N={};return S||(N=f({},ct)),B&&(N.pointerEvents="none"),u("div",_(_(_({role:"button",tabindex:0,ref:a},D),i),{},{onClick:x,onKeydown:l,onKeyup:m,style:f(f({},N),i.style||{})}),[(h=n.default)===null||h===void 0?void 0:h.call(n)])}}}),he=st;var dt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z"}}]},name:"enter",theme:"outlined"};const ut=dt;function Ce(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?Object(arguments[t]):{},o=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable}))),o.forEach(function(i){pt(e,i,n[i])})}return e}function pt(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var de=function(t,n){var o=Ce({},t,n.attrs);return u(J,Ce({},o,{icon:ut}),null)};de.displayName="EnterOutlined";de.inheritAttrs=!1;const ft=de,gt=(e,t,n,o)=>{const{sizeMarginHeadingVerticalEnd:i,fontWeightStrong:s}=o;return{marginBottom:i,color:n,fontWeight:s,fontSize:e,lineHeight:t}},yt=e=>{const t=[1,2,3,4,5],n={};return t.forEach(o=>{n[`
      h${o}&,
      div&-h${o},
      div&-h${o} > textarea,
      h${o}
    `]=gt(e[`fontSizeHeading${o}`],e[`lineHeightHeading${o}`],e.colorTextHeading,e)}),n},mt=e=>{const{componentCls:t}=e;return{"a&, a":f(f({},Be(e)),{textDecoration:e.linkDecoration,"&:active, &:hover":{textDecoration:e.linkHoverDecoration},[`&[disabled], &${t}-disabled`]:{color:e.colorTextDisabled,cursor:"not-allowed","&:active, &:hover":{color:e.colorTextDisabled},"&:active":{pointerEvents:"none"}}})}},bt=()=>({code:{margin:"0 0.2em",paddingInline:"0.4em",paddingBlock:"0.2em 0.1em",fontSize:"85%",background:"rgba(150, 150, 150, 0.1)",border:"1px solid rgba(100, 100, 100, 0.2)",borderRadius:3},kbd:{margin:"0 0.2em",paddingInline:"0.4em",paddingBlock:"0.15em 0.1em",fontSize:"90%",background:"rgba(150, 150, 150, 0.06)",border:"1px solid rgba(100, 100, 100, 0.2)",borderBottomWidth:2,borderRadius:3},mark:{padding:0,backgroundColor:Ve[2]},"u, ins":{textDecoration:"underline",textDecorationSkipInk:"auto"},"s, del":{textDecoration:"line-through"},strong:{fontWeight:600},"ul, ol":{marginInline:0,marginBlock:"0 1em",padding:0,li:{marginInline:"20px 0",marginBlock:0,paddingInline:"4px 0",paddingBlock:0}},ul:{listStyleType:"circle",ul:{listStyleType:"disc"}},ol:{listStyleType:"decimal"},"pre, blockquote":{margin:"1em 0"},pre:{padding:"0.4em 0.6em",whiteSpace:"pre-wrap",wordWrap:"break-word",background:"rgba(150, 150, 150, 0.1)",border:"1px solid rgba(100, 100, 100, 0.2)",borderRadius:3,code:{display:"inline",margin:0,padding:0,fontSize:"inherit",fontFamily:"inherit",background:"transparent",border:0}},blockquote:{paddingInline:"0.6em 0",paddingBlock:0,borderInlineStart:"4px solid rgba(100, 100, 100, 0.2)",opacity:.85}}),vt=e=>{const{componentCls:t}=e,o=Ze(e).inputPaddingVertical+1;return{"&-edit-content":{position:"relative","div&":{insetInlineStart:-e.paddingSM,marginTop:-o,marginBottom:`calc(1em - ${o}px)`},[`${t}-edit-content-confirm`]:{position:"absolute",insetInlineEnd:e.marginXS+2,insetBlockEnd:e.marginXS,color:e.colorTextDescription,fontWeight:"normal",fontSize:e.fontSize,fontStyle:"normal",pointerEvents:"none"},textarea:{margin:"0!important",MozTransition:"none",height:"1em"}}}},ht=e=>({"&-copy-success":{"\n    &,\n    &:hover,\n    &:focus":{color:e.colorSuccess}}}),Ct=()=>({"\n  a&-ellipsis,\n  span&-ellipsis\n  ":{display:"inline-block",maxWidth:"100%"},"&-single-line":{whiteSpace:"nowrap"},"&-ellipsis-single-line":{overflow:"hidden",textOverflow:"ellipsis","a&, span&":{verticalAlign:"bottom"}},"&-ellipsis-multiple-line":{display:"-webkit-box",overflow:"hidden",WebkitLineClamp:3,WebkitBoxOrient:"vertical"}}),xt=e=>{const{componentCls:t,sizeMarginHeadingVerticalStart:n}=e;return{[t]:f(f(f(f(f(f(f(f(f({color:e.colorText,wordBreak:"break-word",lineHeight:e.lineHeight,[`&${t}-secondary`]:{color:e.colorTextDescription},[`&${t}-success`]:{color:e.colorSuccess},[`&${t}-warning`]:{color:e.colorWarning},[`&${t}-danger`]:{color:e.colorError,"a&:active, a&:focus":{color:e.colorErrorActive},"a&:hover":{color:e.colorErrorHover}},[`&${t}-disabled`]:{color:e.colorTextDisabled,cursor:"not-allowed",userSelect:"none"},"\n        div&,\n        p\n      ":{marginBottom:"1em"}},yt(e)),{[`
      & + h1${t},
      & + h2${t},
      & + h3${t},
      & + h4${t},
      & + h5${t}
      `]:{marginTop:n},"\n      div,\n      ul,\n      li,\n      p,\n      h1,\n      h2,\n      h3,\n      h4,\n      h5":{"\n        + h1,\n        + h2,\n        + h3,\n        + h4,\n        + h5\n        ":{marginTop:n}}}),bt()),mt(e)),{[`
        ${t}-expand,
        ${t}-edit,
        ${t}-copy
      `]:f(f({},Be(e)),{marginInlineStart:e.marginXXS})}),vt(e)),ht(e)),Ct()),{"&-rtl":{direction:"rtl"}})}},Ne=Ke("Typography",e=>[xt(e)],{sizeMarginHeadingVerticalStart:"1.2em",sizeMarginHeadingVerticalEnd:"0.5em"}),St=()=>({prefixCls:String,value:String,maxlength:Number,autoSize:{type:[Boolean,Object]},onSave:Function,onCancel:Function,onEnd:Function,onChange:Function,originContent:String,direction:String,component:String}),Ot=G({compatConfig:{MODE:3},name:"Editable",inheritAttrs:!1,props:St(),setup(e,t){let{emit:n,slots:o,attrs:i}=t;const{prefixCls:s}=Xe(e),a=we({current:e.value||"",lastKeyCode:void 0,inComposition:!1,cancelFlag:!1});ie(()=>e.value,y=>{a.current=y});const l=le();ae(()=>{var y;if(l.value){const d=(y=l.value)===null||y===void 0?void 0:y.resizableTextArea,v=d==null?void 0:d.textArea;v.focus();const{length:b}=v.value;v.setSelectionRange(b,b)}});function m(y){l.value=y}function x(y){let{target:{value:d}}=y;a.current=d.replace(/[\r\n]/g,""),n("change",a.current)}function g(){a.inComposition=!0}function $(){a.inComposition=!1}function h(y){const{keyCode:d}=y;d===F.ENTER&&y.preventDefault(),!a.inComposition&&(a.lastKeyCode=d)}function S(y){const{keyCode:d,ctrlKey:v,altKey:b,metaKey:w,shiftKey:R}=y;a.lastKeyCode===d&&!a.inComposition&&!v&&!b&&!w&&!R&&(d===F.ENTER?(D(),n("end")):d===F.ESC&&(a.current=e.originContent,n("cancel")))}function B(){D()}function D(){n("save",a.current.trim())}const[N,k]=Ne(s);return()=>{const y=Te({[`${s.value}`]:!0,[`${s.value}-edit-content`]:!0,[`${s.value}-rtl`]:e.direction==="rtl",[e.component?`${s.value}-${e.component}`:""]:!0},i.class,k.value);return N(u("div",_(_({},i),{},{class:y}),[u(et,{ref:m,maxlength:e.maxlength,value:a.current,onChange:x,onKeydown:h,onKeyup:S,onCompositionstart:g,onCompositionend:$,onBlur:B,rows:1,autoSize:e.autoSize===void 0||e.autoSize},null),o.enterIcon?o.enterIcon({className:`${e.prefixCls}-edit-content-confirm`}):u(ft,{class:`${e.prefixCls}-edit-content-confirm`},null)]))}}}),Et=Ot,wt=3,Tt=8;let E;const oe={padding:0,margin:0,display:"inline",lineHeight:"inherit"};function $t(e){return Array.prototype.slice.apply(e).map(n=>`${n}: ${e.getPropertyValue(n)};`).join("")}function Pe(e,t){e.setAttribute("aria-hidden","true");const n=window.getComputedStyle(t),o=$t(n);e.setAttribute("style",o),e.style.position="fixed",e.style.left="0",e.style.height="auto",e.style.minHeight="auto",e.style.maxHeight="auto",e.style.paddingTop="0",e.style.paddingBottom="0",e.style.borderTopWidth="0",e.style.borderBottomWidth="0",e.style.top="-999999px",e.style.zIndex="-1000",e.style.textOverflow="clip",e.style.whiteSpace="normal",e.style.webkitLineClamp="none"}function Dt(e){const t=document.createElement("div");Pe(t,e),t.appendChild(document.createTextNode("text")),document.body.appendChild(t);const n=t.getBoundingClientRect().height;return document.body.removeChild(t),n}const Bt=(e,t,n,o,i)=>{E||(E=document.createElement("div"),E.setAttribute("aria-hidden","true"),document.body.appendChild(E));const{rows:s,suffix:a=""}=t,l=Dt(e),m=Math.round(l*s*100)/100;Pe(E,e);const x=qe({render(){return u("div",{style:oe},[u("span",{style:oe},[n,a]),u("span",{style:oe},[o])])}});x.mount(E);function g(){return Math.round(E.getBoundingClientRect().height*100)/100-.1<=m}if(g())return x.unmount(),{content:n,text:E.innerHTML,ellipsis:!1};const $=Array.prototype.slice.apply(E.childNodes[0].childNodes[0].cloneNode(!0).childNodes).filter(d=>{let{nodeType:v,data:b}=d;return v!==Tt&&b!==""}),h=Array.prototype.slice.apply(E.childNodes[0].childNodes[1].cloneNode(!0).childNodes);x.unmount();const S=[];E.innerHTML="";const B=document.createElement("span");E.appendChild(B);const D=document.createTextNode(i+a);B.appendChild(D),h.forEach(d=>{E.appendChild(d)});function N(d){B.insertBefore(d,D)}function k(d,v){let b=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,w=arguments.length>3&&arguments[3]!==void 0?arguments[3]:v.length,R=arguments.length>4&&arguments[4]!==void 0?arguments[4]:0;const A=Math.floor((b+w)/2),Y=v.slice(0,A);if(d.textContent=Y,b>=w-1)for(let H=w;H>=b;H-=1){const U=v.slice(0,H);if(d.textContent=U,g()||!U)return H===v.length?{finished:!1,vNode:v}:{finished:!0,vNode:U}}return g()?k(d,v,A,w,A):k(d,v,b,A,R)}function y(d){if(d.nodeType===wt){const b=d.textContent||"",w=document.createTextNode(b);return N(w),k(w,b)}return{finished:!1,vNode:null}}return $.some(d=>{const{finished:v,vNode:b}=y(d);return b&&S.push(b),v}),{content:S,text:E.innerHTML,ellipsis:!0}};var Nt=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,o=Object.getOwnPropertySymbols(e);i<o.length;i++)t.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(n[o[i]]=e[o[i]]);return n};const Pt=()=>({prefixCls:String,direction:String,component:String}),It=G({name:"ATypography",inheritAttrs:!1,props:Pt(),setup(e,t){let{slots:n,attrs:o}=t;const{prefixCls:i,direction:s}=$e("typography",e),[a,l]=Ne(i);return()=>{var m;const x=f(f({},e),o),{prefixCls:g,direction:$,component:h="article"}=x,S=Nt(x,["prefixCls","direction","component"]);return a(u(h,_(_({},S),{},{class:Te(i.value,{[`${i.value}-rtl`]:s.value==="rtl"},o.class,l.value)}),{default:()=>[(m=n.default)===null||m===void 0?void 0:m.call(n)]}))}}}),_t=It,kt=()=>{const e=document.getSelection();if(!e.rangeCount)return function(){};let t=document.activeElement;const n=[];for(let o=0;o<e.rangeCount;o++)n.push(e.getRangeAt(o));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null;break}return e.removeAllRanges(),function(){e.type==="Caret"&&e.removeAllRanges(),e.rangeCount||n.forEach(function(o){e.addRange(o)}),t&&t.focus()}},jt=kt,xe={"text/plain":"Text","text/html":"Url",default:"Text"},Rt="Copy to clipboard: #{key}, Enter";function At(e){const t=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}function Ht(e,t){let n,o,i,s,a,l=!1;t||(t={});const m=t.debug||!1;try{if(o=jt(),i=document.createRange(),s=document.getSelection(),a=document.createElement("span"),a.textContent=e,a.style.all="unset",a.style.position="fixed",a.style.top=0,a.style.clip="rect(0, 0, 0, 0)",a.style.whiteSpace="pre",a.style.webkitUserSelect="text",a.style.MozUserSelect="text",a.style.msUserSelect="text",a.style.userSelect="text",a.addEventListener("copy",function(g){if(g.stopPropagation(),t.format)if(g.preventDefault(),typeof g.clipboardData>"u"){m&&console.warn("unable to use e.clipboardData"),m&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();const $=xe[t.format]||xe.default;window.clipboardData.setData($,e)}else g.clipboardData.clearData(),g.clipboardData.setData(t.format,e);t.onCopy&&(g.preventDefault(),t.onCopy(g.clipboardData))}),document.body.appendChild(a),i.selectNodeContents(a),s.addRange(i),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");l=!0}catch(x){m&&console.error("unable to copy using execCommand: ",x),m&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),l=!0}catch(g){m&&console.error("unable to copy using clipboardData: ",g),m&&console.error("falling back to prompt"),n=At("message"in t?t.message:Rt),window.prompt(n,e)}}finally{s&&(typeof s.removeRange=="function"?s.removeRange(i):s.removeAllRanges()),a&&document.body.removeChild(a),o()}return l}var zt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"}}]},name:"copy",theme:"outlined"};const Mt=zt;function Se(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?Object(arguments[t]):{},o=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable}))),o.forEach(function(i){Lt(e,i,n[i])})}return e}function Lt(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var ue=function(t,n){var o=Se({},t,n.attrs);return u(J,Se({},o,{icon:Mt}),null)};ue.displayName="CopyOutlined";ue.inheritAttrs=!1;const Ut=ue;var Wt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"};const Ft=Wt;function Oe(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?Object(arguments[t]):{},o=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable}))),o.forEach(function(i){Vt(e,i,n[i])})}return e}function Vt(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var pe=function(t,n){var o=Oe({},t,n.attrs);return u(J,Oe({},o,{icon:Ft}),null)};pe.displayName="EditOutlined";pe.inheritAttrs=!1;const Kt=pe;var Xt=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,o=Object.getOwnPropertySymbols(e);i<o.length;i++)t.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(n[o[i]]=e[o[i]]);return n};const qt=De("webkitLineClamp"),Jt=De("textOverflow"),Ee="...",Ie=()=>({editable:{type:[Boolean,Object],default:void 0},copyable:{type:[Boolean,Object],default:void 0},prefixCls:String,component:String,type:String,disabled:{type:Boolean,default:void 0},ellipsis:{type:[Boolean,Object],default:void 0},code:{type:Boolean,default:void 0},mark:{type:Boolean,default:void 0},underline:{type:Boolean,default:void 0},delete:{type:Boolean,default:void 0},strong:{type:Boolean,default:void 0},keyboard:{type:Boolean,default:void 0},content:String,"onUpdate:content":Function}),Gt=G({compatConfig:{MODE:3},name:"TypographyBase",inheritAttrs:!1,props:Ie(),setup(e,t){let{slots:n,attrs:o,emit:i}=t;const{prefixCls:s,direction:a}=$e("typography",e),l=we({copied:!1,ellipsisText:"",ellipsisContent:null,isEllipsis:!1,expanded:!1,clientRendered:!1,expandStr:"",copyStr:"",copiedStr:"",editStr:"",copyId:void 0,rafId:void 0,prevProps:void 0,originContent:""}),m=le(),x=le(),g=q(()=>{const r=e.ellipsis;return r?f({rows:1,expandable:!1},typeof r=="object"?r:null):{}});ae(()=>{l.clientRendered=!0}),Je(()=>{clearTimeout(l.copyId),ee.cancel(l.rafId)}),ie([()=>g.value.rows,()=>e.content],()=>{me(()=>{w()})},{flush:"post",deep:!0,immediate:!0}),Ge(()=>{e.content===void 0&&(re(!e.editable),re(!e.ellipsis))});function $(){var r;return e.ellipsis||e.editable?e.content:(r=te(m.value))===null||r===void 0?void 0:r.innerText}function h(r){const{onExpand:c}=g.value;l.expanded=!0,c==null||c(r)}function S(r){r.preventDefault(),l.originContent=e.content,b(!0)}function B(r){D(r),b(!1)}function D(r){const{onChange:c}=y.value;r!==e.content&&(i("update:content",r),c==null||c(r))}function N(){var r,c;(c=(r=y.value).onCancel)===null||c===void 0||c.call(r),b(!1)}function k(r){r.preventDefault(),r.stopPropagation();const{copyable:c}=e,p=f({},typeof c=="object"?c:null);p.text===void 0&&(p.text=$()),Ht(p.text||""),l.copied=!0,me(()=>{p.onCopy&&p.onCopy(r),l.copyId=setTimeout(()=>{l.copied=!1},3e3)})}const y=q(()=>{const r=e.editable;return r?f({},typeof r=="object"?r:null):{editing:!1}}),[d,v]=nt(!1,{value:q(()=>y.value.editing)});function b(r){const{onStart:c}=y.value;r&&c&&c(),v(r)}ie(d,r=>{var c;r||(c=x.value)===null||c===void 0||c.focus()},{flush:"post"});function w(){ee.cancel(l.rafId),l.rafId=ee(()=>{A()})}const R=q(()=>{const{rows:r,expandable:c,suffix:p,onEllipsis:C,tooltip:O}=g.value;return p||O||e.editable||e.copyable||c||C?!1:r===1?Jt:qt}),A=()=>{const{ellipsisText:r,isEllipsis:c}=l,{rows:p,suffix:C,onEllipsis:O}=g.value;if(!p||p<0||!te(m.value)||l.expanded||e.content===void 0||R.value)return;const{content:P,text:z,ellipsis:j}=Bt(te(m.value),{rows:p,suffix:C},e.content,fe(!0),Ee);(r!==z||l.isEllipsis!==j)&&(l.ellipsisText=z,l.ellipsisContent=P,l.isEllipsis=j,c!==j&&O&&O(j))};function Y(r,c){let{mark:p,code:C,underline:O,delete:P,strong:z,keyboard:j}=r,W=c;function I(V,T){if(!V)return;const K=function(){return W}();W=u(T,null,{default:()=>[K]})}return I(z,"strong"),I(O,"u"),I(P,"del"),I(C,"code"),I(p,"mark"),I(j,"kbd"),W}function H(r){const{expandable:c,symbol:p}=g.value;if(!c||!r&&(l.expanded||!l.isEllipsis))return null;const C=(n.ellipsisSymbol?n.ellipsisSymbol():p)||l.expandStr;return u("a",{key:"expand",class:`${s.value}-expand`,onClick:h,"aria-label":l.expandStr},[C])}function U(){if(!e.editable)return;const{tooltip:r,triggerType:c=["icon"]}=e.editable,p=n.editableIcon?n.editableIcon():u(Kt,{role:"button"},null),C=n.editableTooltip?n.editableTooltip():l.editStr,O=typeof C=="string"?C:"";return c.indexOf("icon")!==-1?u(ne,{key:"edit",title:r===!1?"":C},{default:()=>[u(he,{ref:x,class:`${s.value}-edit`,onClick:S,"aria-label":O},{default:()=>[p]})]}):null}function _e(){if(!e.copyable)return;const{tooltip:r}=e.copyable,c=l.copied?l.copiedStr:l.copyStr,p=n.copyableTooltip?n.copyableTooltip({copied:l.copied}):c,C=typeof p=="string"?p:"",O=l.copied?u(rt,null,null):u(Ut,null,null),P=n.copyableIcon?n.copyableIcon({copied:!!l.copied}):O;return u(ne,{key:"copy",title:r===!1?"":p},{default:()=>[u(he,{class:[`${s.value}-copy`,{[`${s.value}-copy-success`]:l.copied}],onClick:k,"aria-label":C},{default:()=>[P]})]})}function ke(){const{class:r,style:c}=o,{maxlength:p,autoSize:C,onEnd:O}=y.value;return u(Et,{class:r,style:c,prefixCls:s.value,value:e.content,originContent:l.originContent,maxlength:p,autoSize:C,onSave:B,onChange:D,onCancel:N,onEnd:O,direction:a.value,component:e.component},{enterIcon:n.editableEnterIcon})}function fe(r){return[H(r),U(),_e()].filter(c=>c)}return()=>{var r;const{triggerType:c=["icon"]}=y.value,p=e.ellipsis||e.editable?e.content!==void 0?e.content:(r=n.default)===null||r===void 0?void 0:r.call(n):n.default?n.default():e.content;return d.value?ke():u(Ye,{componentName:"Text",children:C=>{const O=f(f({},e),o),{type:P,disabled:z,content:j,class:W,style:I}=O,V=Xt(O,["type","disabled","content","class","style"]),{rows:T,suffix:K,tooltip:Z}=g.value,{edit:je,copy:Re,copied:Ae,expand:He}=C;l.editStr=je,l.copyStr=Re,l.copiedStr=Ae,l.expandStr=He;const ze=ce(V,["prefixCls","editable","copyable","ellipsis","mark","code","delete","underline","strong","keyboard","onUpdate:content"]),X=R.value,Me=T===1&&X,ge=T&&T>1&&X;let M=p,Le;if(T&&l.isEllipsis&&!l.expanded&&!X){const{title:ye}=V;let L=ye||"";!ye&&(typeof p=="string"||typeof p=="number")&&(L=String(p)),L=L==null?void 0:L.slice(String(l.ellipsisContent||"").length),M=u(be,null,[Qe(l.ellipsisContent),u("span",{title:L,"aria-hidden":"true"},[Ee]),K])}else M=u(be,null,[p,K]);M=Y(e,M);const Ue=Z&&T&&l.isEllipsis&&!l.expanded&&!X,We=n.ellipsisTooltip?n.ellipsisTooltip():Z;return u(tt,{onResize:w,disabled:!T},{default:()=>[u(_t,_({ref:m,class:[{[`${s.value}-${P}`]:P,[`${s.value}-disabled`]:z,[`${s.value}-ellipsis`]:T,[`${s.value}-single-line`]:T===1&&!l.isEllipsis,[`${s.value}-ellipsis-single-line`]:Me,[`${s.value}-ellipsis-multiple-line`]:ge},W],style:f(f({},I),{WebkitLineClamp:ge?T:void 0}),"aria-label":Le,direction:a.value,onClick:c.indexOf("text")!==-1?S:()=>{}},ze),{default:()=>[Ue?u(ne,{title:Z===!0?p:We},{default:()=>[u("span",null,[M])]}):M,fe()]})]})}},null)}}}),Qt=Gt,Yt=()=>f(f({},ce(Ie(),["component"])),{ellipsis:{type:[Boolean,Object],default:void 0}}),Q=(e,t)=>{let{slots:n,attrs:o}=t;const{ellipsis:i}=e;re();const s=f(f(f({},e),{ellipsis:i&&typeof i=="object"?ce(i,["expandable","rows"]):i,component:"span"}),o);return u(Qt,s,n)};Q.displayName="ATypographyText";Q.inheritAttrs=!1;Q.props=Yt();const on=Q;export{Qt as B,rt as C,_t as T,on as _,Ie as b};
