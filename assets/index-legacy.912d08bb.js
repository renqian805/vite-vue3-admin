System.register(["./vendor-legacy.26c4b3e7.js","./dynamic-table-legacy.4c5346be.js","./index-legacy.34e6a1ac.js","./index-legacy.32405bce.js"],(function(e){"use strict";var t,n,a,c,r,l,d,i,s,u,o;return{setters:[function(e){t=e.b,n=e.o,a=e.G,c=e.Q,r=e.D,l=e.F,d=e.h,i=e.bu,s=e.bE},function(e){u=e.D},function(e){o=e.b},function(){}],execute:function(){e("default",t({name:"SystemScheduleTaskLog",setup(e){const t=e=>{switch(e){case 0:return"danger";case 1:return"success"}},g=[{title:"#",dataIndex:"id",width:80,align:"center",hideInSearch:!0},{title:"任务编号",dataIndex:"taskId",align:"center"},{title:"任务名称",dataIndex:"name",align:"center"},{title:"异常信息",dataIndex:"detail",align:"center",bodyCell:({record:e})=>{var t;return r(l,null,[null!==(t=e.detail)&&void 0!==t?t:"无"])}},{title:"耗时",dataIndex:"consumeTime",align:"center",bodyCell:({record:e})=>r(i,null,{default:()=>[e.consumeTime,d("ms")]})},{title:"状态",dataIndex:"status",align:"center",bodyCell:({record:e})=>{let n;return r(i,{color:t(e.status)},"function"==typeof(a=n=(e=>{switch(e){case 0:return"失败";case 1:return"成功"}})(e.status))||"[object Object]"===Object.prototype.toString.call(a)&&!s(a)?n:{default:()=>[n]});var a}},{title:"执行时间",dataIndex:"createdAt",align:"center"}];return(e,t)=>(n(),a(c(u),{"header-title":"任务日志","data-request":c(o),search:!1,columns:g},null,8,["data-request"]))}}))}}}));
