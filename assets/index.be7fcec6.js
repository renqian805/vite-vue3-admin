var g=Object.defineProperty,F=Object.defineProperties;var _=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var l=(a,e,t)=>e in a?g(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,d=(a,e)=>{for(var t in e||(e={}))D.call(e,t)&&l(a,t,e[t]);if(c)for(var t of c(e))x.call(e,t)&&l(a,t,e[t]);return a},m=(a,e)=>F(a,_(e));var p=(a,e,t)=>new Promise((r,o)=>{var f=n=>{try{u(t.next(n))}catch(i){o(i)}},s=n=>{try{u(t.throw(n))}catch(i){o(i)}},u=n=>n.done?r(n.value):Promise.resolve(n.value).then(f,s);u((t=t.apply(a,e)).next())});import{D as I}from"./dynamic-table.96d276c6.js";import{a as B}from"./index.ea1d3095.js";import{b as w,o as C,G as L,Q as b}from"./vendor.1de287a7.js";import"./index.57f23076.js";const h={name:"SystemMonitorLoginLog"},q=w(m(d({},h),{setup(a){const e=f=>p(this,[f],function*({page:r,limit:o}){return yield B({page:r,limit:o})}),t=[{title:"\u7528\u6237\u540D",dataIndex:"username",width:280,align:"center"},{title:"\u767B\u5F55IP",dataIndex:"ip",width:150,align:"center"},{title:"\u767B\u5F55\u65F6\u95F4",dataIndex:"time",align:"center",formItemProps:{component:"DatePicker",componentProps:{class:"w-full"}}},{title:"\u64CD\u4F5C\u7CFB\u7EDF",dataIndex:"os",align:"center"},{title:"\u6D4F\u89C8\u5668",dataIndex:"browser",align:"center"}];return(r,o)=>(C(),L(b(I),{"header-title":"\u767B\u5F55\u65E5\u5FD7","data-request":e,columns:t}))}}));export{q as default};