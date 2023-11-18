import{aJ as ae,bd as Ce,aI as Ie,g as G,m as me,$ as L,d as W,s as oe,z as Pe,an as _e,a as O,n as k,q as ve,aM as Me,aK as Te,u as Q,b as we,ao as J,c as r,_ as M,j as b,A as ze,k as Oe,r as V,ax as K,aO as Be,be as Ee,bf as De,aU as Ae,bg as D,aY as He,bh as ce,E as Ne,bi as le,B as Le,bj as Re,aD as q,bk as Fe,Z as je,bl as Ve,v as We,ar as Ue,bm as Xe,ap as ke,aQ as Ke,bn as se,b8 as qe,P as w,x as Ge,o as Qe,L as Je,H as re,bo as Ye,w as F,i as X,J as H,O as Ze,Q as en}from"./index-fE7iDMEm.js";import{R as nn,t as tn,b as an,d as on}from"./index-LBDaFOMZ.js";import{C as cn,R as ln}from"./index-MpAA6Hqt.js";import{P as sn}from"./index-TthERCWb.js";import{u as rn}from"./useMergedState-Oj0_i8Bo.js";import{u as dn}from"./TextArea-s8ONPElW.js";import{_ as un}from"./Text-QGi-Y7UQ.js";import{_ as hn}from"./index-GWx55Pg8.js";import{_ as fn}from"./Link-fGPAxqxw.js";import{_ as gn}from"./plugin-vueexport-helper-x3n3nnut.js";function de(e){let n;const t=o=>()=>{n=null,e(...o)},i=function(){if(n==null){for(var o=arguments.length,d=new Array(o),s=0;s<o;s++)d[s]=arguments[s];n=ae(t(d))}};return i.cancel=()=>{ae.cancel(n),n=null},i}function j(e){return e!==window?e.getBoundingClientRect():{top:0,bottom:window.innerHeight}}function ue(e,n,t){if(t!==void 0&&n.top>e.top-t)return`${t+n.top}px`}function he(e,n,t){if(t!==void 0&&n.bottom<e.bottom+t){const i=window.innerHeight-n.bottom;return`${t+i}px`}}const Se=["resize","scroll","touchstart","touchmove","touchend","pageshow","load"];let N=[];function fe(e,n){if(!e)return;let t=N.find(i=>i.target===e);t?t.affixList.push(n):(t={target:e,affixList:[n],eventHandlers:{}},N.push(t),Se.forEach(i=>{t.eventHandlers[i]=Ce(e,i,()=>{t.affixList.forEach(o=>{const{lazyUpdatePosition:d}=o.exposed;d()},(i==="touchstart"||i==="touchmove")&&Ie?{passive:!0}:!1)})}))}function ge(e){const n=N.find(t=>{const i=t.affixList.some(o=>o===e);return i&&(t.affixList=t.affixList.filter(o=>o!==e)),i});n&&n.affixList.length===0&&(N=N.filter(t=>t!==n),Se.forEach(t=>{const i=n.eventHandlers[t];i&&i.remove&&i.remove()}))}const pn=e=>{const{componentCls:n}=e;return{[n]:{position:"fixed",zIndex:e.zIndexPopup}}},mn=G("Affix",e=>{const n=me(e,{zIndexPopup:e.zIndexBase+10});return[pn(n)]});function vn(){return typeof window<"u"?window:null}var A;(function(e){e[e.None=0]="None",e[e.Prepare=1]="Prepare"})(A||(A={}));const wn=()=>({offsetTop:Number,offsetBottom:Number,target:{type:Function,default:vn},prefixCls:String,onChange:Function,onTestUpdatePosition:Function}),Sn=W({compatConfig:{MODE:3},name:"AAffix",inheritAttrs:!1,props:wn(),setup(e,n){let{slots:t,emit:i,expose:o,attrs:d}=n;const s=oe(),x=oe(),h=Pe({affixStyle:void 0,placeholderStyle:void 0,status:A.None,lastAffix:!1,prevTarget:null,timeout:null}),f=_e(),$=O(()=>e.offsetBottom===void 0&&e.offsetTop===void 0?0:e.offsetTop),g=O(()=>e.offsetBottom),T=()=>{const{status:p,lastAffix:v}=h,{target:I}=e;if(p!==A.Prepare||!x.value||!s.value||!I)return;const c=I();if(!c)return;const l={status:A.None},u=j(s.value);if(u.top===0&&u.left===0&&u.width===0&&u.height===0)return;const a=j(c),S=ue(u,a,$.value),B=he(u,a,g.value);if(!(u.top===0&&u.left===0&&u.width===0&&u.height===0)){if(S!==void 0){const P=`${u.width}px`,_=`${u.height}px`;l.affixStyle={position:"fixed",top:S,width:P,height:_},l.placeholderStyle={width:P,height:_}}else if(B!==void 0){const P=`${u.width}px`,_=`${u.height}px`;l.affixStyle={position:"fixed",bottom:B,width:P,height:_},l.placeholderStyle={width:P,height:_}}l.lastAffix=!!l.affixStyle,v!==l.lastAffix&&i("change",l.lastAffix),b(h,l)}},z=()=>{b(h,{status:A.Prepare,affixStyle:void 0,placeholderStyle:void 0}),f.update()},y=de(()=>{z()}),m=de(()=>{const{target:p}=e,{affixStyle:v}=h;if(p&&v){const I=p();if(I&&s.value){const c=j(I),l=j(s.value),u=ue(l,c,$.value),a=he(l,c,g.value);if(u!==void 0&&v.top===u||a!==void 0&&v.bottom===a)return}}z()});o({updatePosition:y,lazyUpdatePosition:m}),k(()=>e.target,p=>{const v=(p==null?void 0:p())||null;h.prevTarget!==v&&(ge(f),v&&(fe(v,f),y()),h.prevTarget=v)}),k(()=>[e.offsetTop,e.offsetBottom],y),ve(()=>{const{target:p}=e;p&&(h.timeout=setTimeout(()=>{fe(p(),f),y()}))}),Me(()=>{T()}),Te(()=>{clearTimeout(h.timeout),ge(f),y.cancel(),m.cancel()});const{prefixCls:C}=Q("affix",e),[E,R]=mn(C);return()=>{var p;const{affixStyle:v,placeholderStyle:I}=h,c=we({[C.value]:v,[R.value]:!0}),l=J(e,["prefixCls","offsetTop","offsetBottom","target","onChange","onTestUpdatePosition"]);return E(r(nn,{onResize:y},{default:()=>[r("div",M(M(M({},l),d),{},{ref:s}),[v&&r("div",{style:I,"aria-hidden":"true"},null),r("div",{class:c,ref:x,style:v},[(p=t.default)===null||p===void 0?void 0:p.call(t)])])]}))}}}),Jn=L(Sn);var xn={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"}}]},name:"down",theme:"outlined"};const bn=xn;function pe(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?Object(arguments[n]):{},i=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(i=i.concat(Object.getOwnPropertySymbols(t).filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable}))),i.forEach(function(o){$n(e,o,t[o])})}return e}function $n(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var Y=function(n,t){var i=pe({},n,t.attrs);return r(ze,pe({},i,{icon:bn}),null)};Y.displayName="DownOutlined";Y.inheritAttrs=!1;const Yn=Y,Zn=L(cn),yn=e=>{const{componentCls:n,iconCls:t,zIndexPopup:i,colorText:o,colorWarning:d,marginXS:s,fontSize:x,fontWeightStrong:h,lineHeight:f}=e;return{[n]:{zIndex:i,[`${n}-inner-content`]:{color:o},[`${n}-message`]:{position:"relative",marginBottom:s,color:o,fontSize:x,display:"flex",flexWrap:"nowrap",alignItems:"start",[`> ${n}-message-icon ${t}`]:{color:d,fontSize:x,flex:"none",lineHeight:1,paddingTop:(Math.round(x*f)-x)/2},"&-title":{flex:"auto",marginInlineStart:s},"&-title-only":{fontWeight:h}},[`${n}-description`]:{position:"relative",marginInlineStart:x+s,marginBottom:s,color:o,fontSize:x},[`${n}-buttons`]:{textAlign:"end",button:{marginInlineStart:s}}}}},Cn=G("Popconfirm",e=>yn(e),e=>{const{zIndexPopupBase:n}=e;return{zIndexPopup:n+60}});var In=function(e,n){var t={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&n.indexOf(i)<0&&(t[i]=e[i]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,i=Object.getOwnPropertySymbols(e);o<i.length;o++)n.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(t[i[o]]=e[i[o]]);return t};const Pn=()=>b(b({},on()),{prefixCls:String,content:D(),title:D(),description:D(),okType:He("primary"),disabled:{type:Boolean,default:!1},okText:D(),cancelText:D(),icon:D(),okButtonProps:ce(),cancelButtonProps:ce(),showCancel:{type:Boolean,default:!0},onConfirm:Function,onCancel:Function}),_n=W({compatConfig:{MODE:3},name:"APopconfirm",inheritAttrs:!1,props:Oe(Pn(),b(b({},tn()),{trigger:"click",placement:"top",mouseEnterDelay:.1,mouseLeaveDelay:.1,arrowPointAtCenter:!1,autoAdjustOverflow:!0,okType:"primary",disabled:!1})),slots:Object,setup(e,n){let{slots:t,emit:i,expose:o,attrs:d}=n;const s=V();K(e.visible===void 0),o({getPopupDomNode:()=>{var c,l;return(l=(c=s.value)===null||c===void 0?void 0:c.getPopupDomNode)===null||l===void 0?void 0:l.call(c)}});const[x,h]=rn(!1,{value:Be(e,"open")}),f=(c,l)=>{e.open===void 0&&h(c),i("update:open",c),i("openChange",c,l)},$=c=>{f(!1,c)},g=c=>{var l;return(l=e.onConfirm)===null||l===void 0?void 0:l.call(e,c)},T=c=>{var l;f(!1,c),(l=e.onCancel)===null||l===void 0||l.call(e,c)},z=c=>{c.keyCode===q.ESC&&x&&f(!1,c)},y=c=>{const{disabled:l}=e;l||f(c)},{prefixCls:m,getPrefixCls:C}=Q("popconfirm",e),E=O(()=>C()),R=O(()=>C("btn")),[p]=Cn(m),[v]=Ee("Popconfirm",De.Popconfirm),I=()=>{var c,l,u,a,S;const{okButtonProps:B,cancelButtonProps:P,title:_=(c=t.title)===null||c===void 0?void 0:c.call(t),description:U=(l=t.description)===null||l===void 0?void 0:l.call(t),cancelText:xe=(u=t.cancel)===null||u===void 0?void 0:u.call(t),okText:be=(a=t.okText)===null||a===void 0?void 0:a.call(t),okType:Z,icon:ee=((S=t.icon)===null||S===void 0?void 0:S.call(t))||r(Ne,null,null),showCancel:$e=!0}=e,{cancelButton:ne,okButton:te}=t,ie=b({onClick:T,size:"small"},P),ye=b(b(b({onClick:g},le(Z)),{size:"small"}),B);return r("div",{class:`${m.value}-inner-content`},[r("div",{class:`${m.value}-message`},[ee&&r("span",{class:`${m.value}-message-icon`},[ee]),r("div",{class:[`${m.value}-message-title`,{[`${m.value}-message-title-only`]:!!U}]},[_])]),U&&r("div",{class:`${m.value}-description`},[U]),r("div",{class:`${m.value}-buttons`},[$e?ne?ne(ie):r(Le,ie,{default:()=>[xe||v.value.cancelText]}):null,te?te(ye):r(Re,{buttonProps:b(b({size:"small"},le(Z)),B),actionFn:g,close:$,prefixCls:R.value,quitOnNullishReturnValue:!0,emitEvent:!0},{default:()=>[be||v.value.okText]})])])};return()=>{var c;const{placement:l,overlayClassName:u,trigger:a="click"}=e,S=In(e,["placement","overlayClassName","trigger"]),B=J(S,["title","content","cancelText","okText","onUpdate:open","onConfirm","onCancel","prefixCls"]),P=we(m.value,u);return p(r(sn,M(M(M({},B),d),{},{trigger:a,placement:l,onOpenChange:y,open:x.value,overlayClassName:P,transitionName:Ae(E.value,"zoom-big",e.transitionName),ref:s,"data-popover-inject":!0}),{default:()=>[an(((c=t.default)===null||c===void 0?void 0:c.call(t))||[],{onKeydown:_=>{z(_)}},!1)],content:I}))}}}),et=L(_n),nt=L(ln),Mn=e=>{const{componentCls:n}=e,t=`${n}-inner`;return{[n]:{[`&${n}-small`]:{minWidth:e.switchMinWidthSM,height:e.switchHeightSM,lineHeight:`${e.switchHeightSM}px`,[`${n}-inner`]:{paddingInlineStart:e.switchInnerMarginMaxSM,paddingInlineEnd:e.switchInnerMarginMinSM,[`${t}-checked`]:{marginInlineStart:`calc(-100% + ${e.switchPinSizeSM+e.switchPadding*2}px - ${e.switchInnerMarginMaxSM*2}px)`,marginInlineEnd:`calc(100% - ${e.switchPinSizeSM+e.switchPadding*2}px + ${e.switchInnerMarginMaxSM*2}px)`},[`${t}-unchecked`]:{marginTop:-e.switchHeightSM,marginInlineStart:0,marginInlineEnd:0}},[`${n}-handle`]:{width:e.switchPinSizeSM,height:e.switchPinSizeSM},[`${n}-loading-icon`]:{top:(e.switchPinSizeSM-e.switchLoadingIconSize)/2,fontSize:e.switchLoadingIconSize},[`&${n}-checked`]:{[`${n}-inner`]:{paddingInlineStart:e.switchInnerMarginMinSM,paddingInlineEnd:e.switchInnerMarginMaxSM,[`${t}-checked`]:{marginInlineStart:0,marginInlineEnd:0},[`${t}-unchecked`]:{marginInlineStart:`calc(100% - ${e.switchPinSizeSM+e.switchPadding*2}px + ${e.switchInnerMarginMaxSM*2}px)`,marginInlineEnd:`calc(-100% + ${e.switchPinSizeSM+e.switchPadding*2}px - ${e.switchInnerMarginMaxSM*2}px)`}},[`${n}-handle`]:{insetInlineStart:`calc(100% - ${e.switchPinSizeSM+e.switchPadding}px)`}},[`&:not(${n}-disabled):active`]:{[`&:not(${n}-checked) ${t}`]:{[`${t}-unchecked`]:{marginInlineStart:e.marginXXS/2,marginInlineEnd:-e.marginXXS/2}},[`&${n}-checked ${t}`]:{[`${t}-checked`]:{marginInlineStart:-e.marginXXS/2,marginInlineEnd:e.marginXXS/2}}}}}}},Tn=e=>{const{componentCls:n}=e;return{[n]:{[`${n}-loading-icon${e.iconCls}`]:{position:"relative",top:(e.switchPinSize-e.fontSize)/2,color:e.switchLoadingIconColor,verticalAlign:"top"},[`&${n}-checked ${n}-loading-icon`]:{color:e.switchColor}}}},zn=e=>{const{componentCls:n}=e,t=`${n}-handle`;return{[n]:{[t]:{position:"absolute",top:e.switchPadding,insetInlineStart:e.switchPadding,width:e.switchPinSize,height:e.switchPinSize,transition:`all ${e.switchDuration} ease-in-out`,"&::before":{position:"absolute",top:0,insetInlineEnd:0,bottom:0,insetInlineStart:0,backgroundColor:e.colorWhite,borderRadius:e.switchPinSize/2,boxShadow:e.switchHandleShadow,transition:`all ${e.switchDuration} ease-in-out`,content:'""'}},[`&${n}-checked ${t}`]:{insetInlineStart:`calc(100% - ${e.switchPinSize+e.switchPadding}px)`},[`&:not(${n}-disabled):active`]:{[`${t}::before`]:{insetInlineEnd:e.switchHandleActiveInset,insetInlineStart:0},[`&${n}-checked ${t}::before`]:{insetInlineEnd:0,insetInlineStart:e.switchHandleActiveInset}}}}},On=e=>{const{componentCls:n}=e,t=`${n}-inner`;return{[n]:{[t]:{display:"block",overflow:"hidden",borderRadius:100,height:"100%",paddingInlineStart:e.switchInnerMarginMax,paddingInlineEnd:e.switchInnerMarginMin,transition:`padding-inline-start ${e.switchDuration} ease-in-out, padding-inline-end ${e.switchDuration} ease-in-out`,[`${t}-checked, ${t}-unchecked`]:{display:"block",color:e.colorTextLightSolid,fontSize:e.fontSizeSM,transition:`margin-inline-start ${e.switchDuration} ease-in-out, margin-inline-end ${e.switchDuration} ease-in-out`,pointerEvents:"none"},[`${t}-checked`]:{marginInlineStart:`calc(-100% + ${e.switchPinSize+e.switchPadding*2}px - ${e.switchInnerMarginMax*2}px)`,marginInlineEnd:`calc(100% - ${e.switchPinSize+e.switchPadding*2}px + ${e.switchInnerMarginMax*2}px)`},[`${t}-unchecked`]:{marginTop:-e.switchHeight,marginInlineStart:0,marginInlineEnd:0}},[`&${n}-checked ${t}`]:{paddingInlineStart:e.switchInnerMarginMin,paddingInlineEnd:e.switchInnerMarginMax,[`${t}-checked`]:{marginInlineStart:0,marginInlineEnd:0},[`${t}-unchecked`]:{marginInlineStart:`calc(100% - ${e.switchPinSize+e.switchPadding*2}px + ${e.switchInnerMarginMax*2}px)`,marginInlineEnd:`calc(-100% + ${e.switchPinSize+e.switchPadding*2}px - ${e.switchInnerMarginMax*2}px)`}},[`&:not(${n}-disabled):active`]:{[`&:not(${n}-checked) ${t}`]:{[`${t}-unchecked`]:{marginInlineStart:e.switchPadding*2,marginInlineEnd:-e.switchPadding*2}},[`&${n}-checked ${t}`]:{[`${t}-checked`]:{marginInlineStart:-e.switchPadding*2,marginInlineEnd:e.switchPadding*2}}}}}},Bn=e=>{const{componentCls:n}=e;return{[n]:b(b(b(b({},je(e)),{position:"relative",display:"inline-block",boxSizing:"border-box",minWidth:e.switchMinWidth,height:e.switchHeight,lineHeight:`${e.switchHeight}px`,verticalAlign:"middle",background:e.colorTextQuaternary,border:"0",borderRadius:100,cursor:"pointer",transition:`all ${e.motionDurationMid}`,userSelect:"none",[`&:hover:not(${n}-disabled)`]:{background:e.colorTextTertiary}}),Ve(e)),{[`&${n}-checked`]:{background:e.switchColor,[`&:hover:not(${n}-disabled)`]:{background:e.colorPrimaryHover}},[`&${n}-loading, &${n}-disabled`]:{cursor:"not-allowed",opacity:e.switchDisabledOpacity,"*":{boxShadow:"none",cursor:"not-allowed"}},[`&${n}-rtl`]:{direction:"rtl"}})}},En=G("Switch",e=>{const n=e.fontSize*e.lineHeight,t=e.controlHeight/2,i=2,o=n-i*2,d=t-i*2,s=me(e,{switchMinWidth:o*2+i*4,switchHeight:n,switchDuration:e.motionDurationMid,switchColor:e.colorPrimary,switchDisabledOpacity:e.opacityLoading,switchInnerMarginMin:o/2,switchInnerMarginMax:o+i+i*2,switchPadding:i,switchPinSize:o,switchBg:e.colorBgContainer,switchMinWidthSM:d*2+i*2,switchHeightSM:t,switchInnerMarginMinSM:d/2,switchInnerMarginMaxSM:d+i+i*2,switchPinSizeSM:d,switchHandleShadow:`0 2px 4px 0 ${new Fe("#00230b").setAlpha(.2).toRgbString()}`,switchLoadingIconSize:e.fontSizeIcon*.75,switchLoadingIconColor:`rgba(0, 0, 0, ${e.opacityLoading})`,switchHandleActiveInset:"-30%"});return[Bn(s),On(s),zn(s),Tn(s),Mn(s)]}),Dn=We("small","default"),An=()=>({id:String,prefixCls:String,size:w.oneOf(Dn),disabled:{type:Boolean,default:void 0},checkedChildren:w.any,unCheckedChildren:w.any,tabindex:w.oneOfType([w.string,w.number]),autofocus:{type:Boolean,default:void 0},loading:{type:Boolean,default:void 0},checked:w.oneOfType([w.string,w.number,w.looseBool]),checkedValue:w.oneOfType([w.string,w.number,w.looseBool]).def(!0),unCheckedValue:w.oneOfType([w.string,w.number,w.looseBool]).def(!1),onChange:{type:Function},onClick:{type:Function},onKeydown:{type:Function},onMouseup:{type:Function},"onUpdate:checked":{type:Function},onBlur:Function,onFocus:Function}),Hn=W({compatConfig:{MODE:3},name:"ASwitch",__ANT_SWITCH:!0,inheritAttrs:!1,props:An(),slots:Object,setup(e,n){let{attrs:t,slots:i,expose:o,emit:d}=n;const s=dn(),x=Ue(),h=O(()=>{var a;return(a=e.disabled)!==null&&a!==void 0?a:x.value});Xe(()=>{K(),K()});const f=V(e.checked!==void 0?e.checked:t.defaultChecked),$=O(()=>f.value===e.checkedValue);k(()=>e.checked,()=>{f.value=e.checked});const{prefixCls:g,direction:T,size:z}=Q("switch",e),[y,m]=En(g),C=V(),E=()=>{var a;(a=C.value)===null||a===void 0||a.focus()};o({focus:E,blur:()=>{var a;(a=C.value)===null||a===void 0||a.blur()}}),ve(()=>{ke(()=>{e.autofocus&&!h.value&&C.value.focus()})});const p=(a,S)=>{h.value||(d("update:checked",a),d("change",a,S),s.onFieldChange())},v=a=>{d("blur",a)},I=a=>{E();const S=$.value?e.unCheckedValue:e.checkedValue;p(S,a),d("click",S,a)},c=a=>{a.keyCode===q.LEFT?p(e.unCheckedValue,a):a.keyCode===q.RIGHT&&p(e.checkedValue,a),d("keydown",a)},l=a=>{var S;(S=C.value)===null||S===void 0||S.blur(),d("mouseup",a)},u=O(()=>({[`${g.value}-small`]:z.value==="small",[`${g.value}-loading`]:e.loading,[`${g.value}-checked`]:$.value,[`${g.value}-disabled`]:h.value,[g.value]:!0,[`${g.value}-rtl`]:T.value==="rtl",[m.value]:!0}));return()=>{var a;return y(r(qe,null,{default:()=>[r("button",M(M(M({},J(e,["prefixCls","checkedChildren","unCheckedChildren","checked","autofocus","checkedValue","unCheckedValue","id","onChange","onUpdate:checked"])),t),{},{id:(a=e.id)!==null&&a!==void 0?a:s.id.value,onKeydown:c,onClick:I,onBlur:v,onMouseup:l,type:"button",role:"switch","aria-checked":f.value,disabled:h.value||e.loading,class:[t.class,u.value],ref:C}),[r("div",{class:`${g.value}-handle`},[e.loading?r(Ke,{class:`${g.value}-loading-icon`},null):null]),r("span",{class:`${g.value}-inner`},[r("span",{class:`${g.value}-inner-checked`},[se(i,e,"checkedChildren")]),r("span",{class:`${g.value}-inner-unchecked`},[se(i,e,"unCheckedChildren")])])])]}))}}}),Nn=L(Hn),Ln={class:"preview-main"},Rn={class:"preview-footer"},Fn=W({__name:"PluginPreviewWrapper",props:{pluginName:{type:String,default:""},autoPreview:{type:Boolean,default:!0},theme:{type:String,default:"dark"}},emits:["update:autoPreview","update:theme","onAutoPreviewSwitchChange"],setup(e,{emit:n}){const t=Ge(),i=e,o=n,d=O(()=>`${window.location.origin}/#/plugins-obs/${i.pluginName}?uuid=${t.uuid}`),s=f=>{o("update:autoPreview",f),o("onAutoPreviewSwitchChange",f)},x=f=>{o("update:theme",f?"dark":"light")},h=V(!0);return(f,$)=>{const g=un,T=Nn,z=hn,y=fn;return Qe(),Je("div",{class:en(["plugin-preview-wrapper",{"theme-dark":e.theme==="dark"||H(h),"theme-light":e.theme==="light"||!H(h)}])},[re("div",Ln,[Ye(f.$slots,"default",{},void 0,!0)]),re("div",Rn,[r(z,{size:5},{default:F(()=>[r(g,null,{default:F(()=>[X("自动预览")]),_:1}),r(T,{checked:e.autoPreview,"checked-children":"开","un-checked-children":"关",onChange:$[0]||($[0]=m=>s(m)),style:{"vertical-align":"bottom"}},null,8,["checked"]),r(g,null,{default:F(()=>[X("背景")]),_:1}),r(T,{checked:H(h),"onUpdate:checked":$[1]||($[1]=m=>Ze(h)?h.value=m:null),"checked-children":"暗","un-checked-children":"亮",onChange:$[2]||($[2]=m=>x(m)),style:{"vertical-align":"bottom","background-color":"#1890ff"}},null,8,["checked"])]),_:1}),r(y,{href:H(d),copyable:{text:H(d)},target:"_blank",style:{float:"right"}},{default:F(()=>[X(" 插件链接 ")]),_:1},8,["href","copyable"])])],2)}}}),tt=gn(Fn,[["__scopeId","data-v-c1d3b8db"]]);export{Yn as D,nt as _,Zn as a,Nn as b,et as c,tt as d,Jn as e};
