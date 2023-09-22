import{az as S,a4 as m,a5 as n,d as R,W as P,r as d,X as $,Y as b,a as o,Z as c,$ as e,al as x,a2 as j,g as f}from"./index-59f4d469.js";import{_ as B}from"./index-41932eac.js";import{I as k}from"./index-24545621.js";import{B as J}from"./index-9b70d92e.js";import{_ as D}from"./index-a57c3d77.js";import{C as N}from"./index-dde31f8f.js";import"./index-be7ebebd.js";import"./TextArea-29c3bd90.js";import"./collapseMotion-5b73d6fb.js";import"./SearchOutlined-d41488c7.js";import"./useFlexGapSupport-50aed4ba.js";import"./styleChecker-09f1a0ab.js";import"./index-41631858.js";import"./Dropdown-bbda95ed.js";import"./hasIn-326eb4cb.js";import"./useMergedState-4402de99.js";const V=S("connentStore",{state(){return{isJoinedRoom:!1,roomInfo:{liveId:"",title:""}}},actions:{async getStatus(){const t=await m.get("/api/getStatus");return t.data.code===200?(this.$state=t.data.data,Promise.resolve(!0)):(this.$reset(),Promise.resolve(!1))},async joinRoom(t){const s=await m.post("/api/join",{liveId:t.toString()});return s.data.code===200?(this.$state=s.data.data,n.success("进入直播间成功！"),await this.getStatus(),Promise.resolve(!0)):(s.data.code===10001?n.warn("进入直播间失败，请稍后再试！"):n.error("服务器错误！"),await this.getStatus(),Promise.resolve(!1))},async reset(){const t=await m.post("/api/reset");return t.data.code===200?(this.$reset(),await this.getStatus(),n.success("重置成功！"),Promise.resolve(!0)):(n.warn(t.data.message),await this.getStatus(),Promise.resolve(!1))}}}),z={class:"connect-page-wrapper"},A={class:"join-input-wrap",style:{"margin-top":"1rem"}},te=R({__name:"ConnectPage",async setup(t){let s,u;const a=V();[s,u]=P(()=>a.getStatus()),await s,u();const i=d(""),l=d(!1),r=d(!1),g=async()=>{i.value?(l.value=!0,await a.joinRoom(i.value),l.value=!1):n.warn("请输入直播间ID或房间ID！")},v=async()=>{r.value=!0,await a.reset(),r.value=!1};return(E,p)=>{const w=B,y=k,_=J,h=D,I=N;return $(),b("div",z,[o(I,null,{default:c(()=>[o(w,{message:e(a).isJoinedRoom?`已连接 ${e(a).roomInfo.liveId}`:"未连接",description:e(a).isJoinedRoom?`已进入直播间「${e(a).roomInfo.title}」`:"请进入一个直播间以使用所有功能。",type:e(a).isJoinedRoom?"success":"info",style:{"margin-bottom":"1rem"},"show-icon":""},null,8,["message","description","type"]),x("div",A,[o(h,{size:10},{default:c(()=>[o(y,{value:e(i),"onUpdate:value":p[0]||(p[0]=C=>j(i)?i.value=C:null),placeholder:"请输入直播间ID",disabled:e(l)||e(r),allowClear:""},null,8,["value","disabled"]),o(_,{onClick:g,type:"primary",loading:e(l),disabled:e(r)},{default:c(()=>[f("进入")]),_:1},8,["loading","disabled"]),o(_,{onClick:v,danger:"",loading:e(r)},{default:c(()=>[f("重置")]),_:1},8,["loading"])]),_:1})])]),_:1})])}}});export{te as default};