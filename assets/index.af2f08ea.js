var h=(l,e,i)=>new Promise((_,p)=>{var d=o=>{try{u(i.next(o))}catch(s){p(s)}},g=o=>{try{u(i.throw(o))}catch(s){p(s)}},u=o=>o.done?_(o.value):Promise.resolve(o.value).then(d,g);u((i=i.apply(l,e)).next())});import{b as x,q as C,P as w,O as b,C as f,o as F,e as B,f as v,D as t,Q as a,E as n,W as S,U as A,bq as z,a1 as D,p as U,g as k,h as E,B as m,M as O}from"./vendor.1de287a7.js";import{_ as q,b as M,e as N,h as V}from"./index.57f23076.js";const R=l=>(U("data-v-4d4a3e44"),l=l(),k(),l),T={class:"login-box"},L={class:"login-logo"},P=R(()=>v("h1",{class:"mb-0 ml-2 text-3xl font-bold"},"Antd Admin",-1)),Q=["src"],W=E(" \u767B\u5F55 "),$=x({setup(l){const e=C({loading:!1,captcha:"",formInline:{username:"",password:"",verifyCode:"",captchaId:""}}),i=w(),_=b(),p=M(),d=()=>h(this,null,function*(){const{id:u,img:o}=yield V({width:100,height:50});e.captcha=o,e.formInline.captchaId=u});d();const g=()=>h(this,null,function*(){const{username:u,password:o,verifyCode:s}=e.formInline;if(u.trim()==""||o.trim()=="")return m.warning("\u7528\u6237\u540D\u6216\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A\uFF01");if(!s)return m.warning("\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801\uFF01");m.loading("\u767B\u5F55\u4E2D...",0),e.loading=!0,e.formInline;try{yield p.login(e.formInline).finally(()=>{e.loading=!1,m.destroy()}),m.success("\u767B\u5F55\u6210\u529F\uFF01"),setTimeout(()=>{var r;return _.replace((r=i.query.redirect)!=null?r:"/")})}catch(r){O.error({title:()=>"\u63D0\u793A",content:()=>r.message}),d()}});return(u,o)=>{const s=f("a-input"),r=f("a-form-item"),y=f("a-button"),I=f("a-form");return F(),B("div",T,[v("div",L,[t(a(N),{name:"logo",size:45}),P]),t(I,{layout:"horizontal",model:a(e).formInline,onSubmit:D(g,["prevent"])},{default:n(()=>[t(r,null,{default:n(()=>[t(s,{value:a(e).formInline.username,"onUpdate:value":o[0]||(o[0]=c=>a(e).formInline.username=c),size:"large",placeholder:"rootadmin"},{prefix:n(()=>[t(a(S),{type:"user"})]),_:1},8,["value"])]),_:1}),t(r,null,{default:n(()=>[t(s,{value:a(e).formInline.password,"onUpdate:value":o[1]||(o[1]=c=>a(e).formInline.password=c),size:"large",type:"password",placeholder:"123456",autocomplete:"new-password"},{prefix:n(()=>[t(a(A),{type:"user"})]),_:1},8,["value"])]),_:1}),t(r,null,{default:n(()=>[t(s,{value:a(e).formInline.verifyCode,"onUpdate:value":o[2]||(o[2]=c=>a(e).formInline.verifyCode=c),placeholder:"\u9A8C\u8BC1\u7801",maxlength:4,size:"large"},{prefix:n(()=>[t(a(z))]),suffix:n(()=>[v("img",{src:a(e).captcha,class:"absolute right-0 h-full cursor-pointer",onClick:d},null,8,Q)]),_:1},8,["value"])]),_:1}),t(r,null,{default:n(()=>[t(y,{type:"primary","html-type":"submit",size:"large",loading:a(e).loading,block:""},{default:n(()=>[W]),_:1},8,["loading"])]),_:1})]),_:1},8,["model","onSubmit"])])}}});var J=q($,[["__scopeId","data-v-4d4a3e44"]]);export{J as default};