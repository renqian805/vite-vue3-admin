var C=Object.defineProperty,I=Object.defineProperties;var y=Object.getOwnPropertyDescriptors;var F=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;var x=(s,n,e)=>n in s?C(s,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[n]=e,v=(s,n)=>{for(var e in n||(n={}))M.call(n,e)&&x(s,e,n[e]);if(F)for(var e of F(n))V.call(n,e)&&x(s,e,n[e]);return s},k=(s,n)=>I(s,y(n));import{b as q,j as S,a2 as T,o as f,e as B,D as c,E as l,Q as a,br as p,h as E,t as D,F as j,r as N,G as O,bs as A,p as z,g as L,f as P}from"./vendor.1de287a7.js";/* empty css              *//* empty css               */import{_ as U,b as G,i as Q,j as W}from"./index.57f23076.js";var H="/vite-vue3-admin/assets/analysis.04ad2692.svg";function J(s="en"){const n=navigator.userAgent.toLowerCase(),e=m=>m.test(n),o=m=>{var h;return(h=n.match(m))==null?void 0:h.toString().replace(/[^0-9|_.]/g,"").replace(/_/g,".")},t=new Map([[e(/windows|win32|win64|wow32|wow64/g),"windows"],[e(/macintosh|macintel/g),"macos"],[e(/x11/g),"linux"],[e(/android|adr/g),"android"],[e(/ios|iphone|ipad|ipod|iwatch/g),"ios"]]).get(!0)||"unknow",d=new Map([["windows",new Map([[e(/windows nt 5.0|windows 2000/g),"2000"],[e(/windows nt 5.1|windows xp/g),"xp"],[e(/windows nt 5.2|windows 2003/g),"2003"],[e(/windows nt 6.0|windows vista/g),"vista"],[e(/windows nt 6.1|windows 7/g),"7"],[e(/windows nt 6.2|windows 8/g),"8"],[e(/windows nt 6.3|windows 8.1/g),"8.1"],[e(/windows nt 10.0|windows 10/g),"10"]]).get(!0)],["macos",o(/os x [\d._]+/g)],["android",o(/android [\d._]+/g)],["ios",o(/os [\d._]+/g)]]).get(t)||"unknow";let u="unknow";t==="windows"||t==="macos"||t==="linux"?u="desktop":(t==="android"||t==="ios"||e(/mobile/g))&&(u="mobile");const[r="unknow",g="unknow"]=new Map([[e(/applewebkit/g),["webkit",new Map([[e(/safari/g),"safari"],[e(/chrome/g),"chrome"],[e(/opr/g),"opera"],[e(/edge/g),"edge"]]).get(!0)]],[e(/gecko/g)&&e(/firefox/g),["gecko","firefox"]],[e(/presto/g),["presto","opera"]],[e(/trident|compatible|msie/g),["trident","iexplore"]]]).get(!0)||["unknow","unknow"],_=new Map([["webkit",o(/applewebkit\/[\d._]+/g)],["gecko",o(/gecko\/[\d._]+/g)],["presto",o(/presto\/[\d._]+/g)],["trident",o(/trident\/[\d._]+/g)]]).get(r)||"unknow",w=new Map([["firefox",o(/firefox\/[\d._]+/g)],["opera",o(/opr\/[\d._]+/g)],["iexplore",o(/(msie [\d._]+)|(rv:[\d._]+)/g)],["edge",o(/edge\/[\d._]+/g)],["safari",o(/version\/[\d._]+/g)],["chrome",o(/chrome\/[\d._]+/g)]]).get(g)||"unknow",[i="none",b="unknow"]=new Map([[e(/micromessenger/g),["wechat",o(/micromessenger\/[\d._]+/g)]],[e(/qqbrowser/g),["qq",o(/qqbrowser\/[\d._]+/g)]],[e(/ucbrowser/g),["uc",o(/ucbrowser\/[\d._]+/g)]],[e(/qihu 360se/g),["360","unknow"]],[e(/2345explorer/g),["2345",o(/2345explorer\/[\d._]+/g)]],[e(/metasr/g),["sougou","unknow"]],[e(/lbbrowser/g),["liebao","unknow"]],[e(/maxthon/g),["maxthon",o(/maxthon\/[\d._]+/g)]]]).get(!0)||["none","unknow"];return{"zh-cn":Object.assign({\u5185\u6838:r,\u5185\u6838\u7248\u672C:_,\u5E73\u53F0:u,\u8F7D\u4F53:g,\u8F7D\u4F53\u7248\u672C:w,\u7CFB\u7EDF:t,\u7CFB\u7EDF\u7248\u672C:d},i==="none"?{}:{\u5916\u58F3:i,\u5916\u58F3\u7248\u672C:b}),en:Object.assign({engine:r,engineVs:_,platform:u,supporter:g,supporterVs:w,system:t,systemVs:d},i==="none"?{}:{shell:i,shellVs:b})}[s]}const K=s=>(z("data-v-d54763d0"),s=s(),L(),s),R={class:"box"},X=K(()=>P("img",{src:H},null,-1)),Y={name:"DashboardWelcome"},Z=q(k(v({},Y),{setup(s){var r;const n=(r=G().userInfo)==null?void 0:r.loginIp,{online:e}=Q(),{battery:o,batteryStatus:t,calcDischargingTime:d}=W(),u=S(J("zh-cn"));return T(()=>{Object.assign(u.value,{\u8DDD\u79BB\u7535\u6C60\u5145\u6EE1\u9700\u8981:Number.isFinite(o.value.chargingTime)&&o.value.chargingTime!=0?d.value:"\u672A\u77E5",\u5269\u4F59\u53EF\u4F7F\u7528\u65F6\u95F4:Number.isFinite(o.value.dischargingTime)&&o.value.dischargingTime!=0?d.value:"\u672A\u77E5",\u7535\u6C60\u72B6\u6001:t.value,\u5F53\u524D\u7535\u91CF:o.value.level+"%"})}),(g,_)=>(f(),B("div",R,[X,c(a(p),{title:"\u7CFB\u7EDF\u4FE1\u606F",bordered:""},{default:l(()=>[c(a(p).Item,{key:"IP",label:"IP"},{default:l(()=>[E(D(a(n)),1)]),_:1}),(f(!0),B(j,null,N(u.value,(w,i)=>(f(),O(a(p).Item,{key:i,label:i},{default:l(()=>[E(D(w),1)]),_:2},1032,["label"]))),128)),c(a(p).Item,{label:"\u7F51\u7EDC\u72B6\u6001"},{default:l(()=>[c(a(A),{status:a(e)?"processing":"default",text:a(e)?"\u5728\u7EBF":"\u79BB\u7EBF"},null,8,["status","text"])]),_:1})]),_:1})]))}}));var te=U(Z,[["__scopeId","data-v-d54763d0"]]);export{te as default};
