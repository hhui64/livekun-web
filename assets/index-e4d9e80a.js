import{d as V,M as k,c as o,r as O,f as L,e as U,_ as p,bm as W,a as v,F as q,b as F,P as G,am as I,U as H}from"./index-76b20fec.js";import{u as J}from"./useFlexGapSupport-31de592c.js";import{i as K,_ as S}from"./collapseMotion-db20317c.js";const Q={small:8,middle:16,large:24},X=()=>({prefixCls:String,size:{type:[String,Number,Array]},direction:G.oneOf(I("horizontal","vertical")).def("horizontal"),align:G.oneOf(I("start","end","center","baseline")),wrap:H()});function Y(e){return typeof e=="string"?Q[e]:e||0}const s=V({compatConfig:{MODE:3},name:"ASpace",inheritAttrs:!1,props:X(),slots:Object,setup(e,j){let{slots:r,attrs:d}=j;const{prefixCls:n,space:f,direction:x}=k("space",e),[B,P]=K(n),z=J(),l=o(()=>{var t,a,i;return(i=(t=e.size)!==null&&t!==void 0?t:(a=f==null?void 0:f.value)===null||a===void 0?void 0:a.size)!==null&&i!==void 0?i:"small"}),g=O(),c=O();L(l,()=>{[g.value,c.value]=(Array.isArray(l.value)?l.value:[l.value,l.value]).map(t=>Y(t))},{immediate:!0});const $=o(()=>e.align===void 0&&e.direction==="horizontal"?"center":e.align),D=o(()=>U(n.value,P.value,`${n.value}-${e.direction}`,{[`${n.value}-rtl`]:x.value==="rtl",[`${n.value}-align-${$.value}`]:$.value})),E=o(()=>x.value==="rtl"?"marginLeft":"marginRight"),M=o(()=>{const t={};return z.value&&(t.columnGap=`${g.value}px`,t.rowGap=`${c.value}px`),p(p({},t),e.wrap&&{flexWrap:"wrap",marginBottom:`${-c.value}px`})});return()=>{var t,a;const{wrap:i,direction:R="horizontal"}=e,h=(t=r.default)===null||t===void 0?void 0:t.call(r),b=W(h),C=b.length;if(C===0)return null;const u=(a=r.split)===null||a===void 0?void 0:a.call(r),w=`${n.value}-item`,A=g.value,_=C-1;return v("div",F(F({},d),{},{class:[D.value,d.class],style:[M.value,d.style]}),[b.map((N,y)=>{const T=h.indexOf(N);let m={};return z.value||(R==="vertical"?y<_&&(m={marginBottom:`${A/(u?2:1)}px`}):m=p(p({},y<_&&{[E.value]:`${A/(u?2:1)}px`}),i&&{paddingBottom:`${c.value}px`})),B(v(q,{key:T},[v("div",{class:w,style:m},[N]),y<_&&u&&v("span",{class:`${w}-split`,style:m},[u])]))})])}}});s.Compact=S;s.install=function(e){return e.component(s.name,s),e.component(S.name,S),e};const ae=s;export{ae as _};