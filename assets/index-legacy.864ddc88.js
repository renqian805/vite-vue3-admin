System.register(["./index-legacy.32405bce.js"],(function(t){"use strict";var e,u,r;return{setters:[function(t){e=t.y,u=t.C,r=t.D}],execute:function(){t({a:function(){return e({url:r.list,method:"get"})},b:function(t){return e({url:u.page,method:"get",params:t})},c:function(t){return e({url:r.add,method:"post",data:t})},d:function(t){return e({url:"sys/dept/delete",method:"post",data:t},{successMsg:"删除成功"})},e:function(t){return e({url:u.update,method:"post",data:t},{successMsg:"更新角色成功"})},f:function(t){return e({url:u.add,method:"post",data:t},{successMsg:"创建角色成功"})},g:function(t){return e({url:u.list,method:"get",data:t})},h:function(t){return e({url:u.info,method:"get",params:t})},i:function(t){return e({url:u.delete,method:"post",data:t},{successMsg:"删除角色成功"})},t:function(t){return e({url:r.transfer,method:"post",data:t})},u:function(t){return e({url:r.update,method:"post",data:t})}})}}}));