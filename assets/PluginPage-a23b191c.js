import{_ as f}from"./ChatMessageList-18ac983d.js";import{u as m}from"./socket-02ff7e1d.js";import{d as _,r as C,W as P,a1 as k,X as h,a8 as d,$ as o,a9 as s}from"./index-59f4d469.js";import{u as E}from"./config-c2b99d2d.js";import"./Paid-538fe086.js";import"./HFont.vuevuetypescriptsetuptruelang-e6f255b3.js";import"./index-59f465bc.js";import"./plugin-vueexport-helper-f4a8b4ae.js";import"./index-be7ebebd.js";import"./TicketPanel-0256727f.js";import"./index-41631858.js";import"./collapseMotion-5b73d6fb.js";import"./Dropdown-bbda95ed.js";import"./index-9b70d92e.js";import"./RightOutlined-77464fa5.js";const D=_({__name:"PluginPage",async setup(A){let t,c;const n=C();let{chatMessagePluginConfig:g,ticketPluginConfig:r,paidPluginConfig:p}=([t,c]=P(()=>E()),t=await t,c(),t);const l=e=>{var i;switch(e){case s.CLEAR:(i=n.value)==null||i.clear();break;case s.REFRESH_PAGE:break;case s.REFRESH_CONFIG:g.pull();break}},u=e=>{var a;const i=e;(a=n.value)==null||a.add({...i})};return m(k.PLUGIN_CHAT_MESSAGE,l,u),(e,i)=>{const a=f;return h(),d(a,{ref_key:"ChatMessageListRef",ref:n,"chat-message-config":o(g).reactivityPluginConfig.pluginConfig,"ticket-config":o(r).reactivityPluginConfig.pluginConfig,"paid-config":o(p).reactivityPluginConfig.pluginConfig},null,8,["chat-message-config","ticket-config","paid-config"])}}});export{D as default};