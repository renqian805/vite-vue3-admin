System.register(["./dynamic-table-legacy.4c5346be.js","./index-legacy.34e6a1ac.js","./vendor-legacy.26c4b3e7.js","./index-legacy.32405bce.js"],(function(e){"use strict";var t,n,a,i,c,r;return{setters:[function(e){t=e.D},function(e){n=e.a},function(e){a=e.b,i=e.o,c=e.G,r=e.Q},function(){}],execute:function(){e("default",a({name:"SystemMonitorLoginLog",setup(e){const a=async({page:e,limit:t})=>await n({page:e,limit:t}),l=[{title:"用户名",dataIndex:"username",width:280,align:"center"},{title:"登录IP",dataIndex:"ip",width:150,align:"center"},{title:"登录时间",dataIndex:"time",align:"center",formItemProps:{component:"DatePicker",componentProps:{class:"w-full"}}},{title:"操作系统",dataIndex:"os",align:"center"},{title:"浏览器",dataIndex:"browser",align:"center"}];return(e,n)=>(i(),c(r(t),{"header-title":"登录日志","data-request":a,columns:l}))}}))}}}));
