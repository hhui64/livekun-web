import{d as i,ap as l,ax as d,X as f,Y as g,a as o,Z as e,$ as a,g as r,a7 as h}from"./index-76b20fec.js";import{_ as y}from"./index-7277d9a0.js";import{B as x}from"./index-1de51d07.js";import{C}from"./index-fe02b315.js";import{_ as b}from"./index-b0afbba2.js";import"./Text-91b94e9a.js";import"./index-8d8d112e.js";import"./collapseMotion-db20317c.js";import"./styleChecker-97e1809e.js";import"./TextArea-0250f291.js";import"./useMergedState-f71f3423.js";import"./index-f0e7daaf.js";import"./Dropdown-cae8fae7.js";import"./hasIn-7f46988f.js";const w={class:"account-page-wrapper"},Z=i({__name:"AccountPage",setup(B){const t=l(),n=d(),s=async()=>{await t.logout()&&n.push({path:"/user/login"})};return(p,k)=>{const c=b,_=y,m=x,u=C;return f(),g("div",w,[o(u,null,{default:e(()=>[o(c,{message:"如果忘记密码，请联系管理员重置！",type:"info",showIcon:"",style:{"margin-bottom":"1rem"}}),o(_,{copyable:{text:a(t).uuid}},{default:e(()=>[r(" UUID："+h(a(t).uuid),1)]),_:1},8,["copyable"]),o(m,{onClick:s,danger:""},{default:e(()=>[r("退出登录")]),_:1})]),_:1})])}}});export{Z as default};