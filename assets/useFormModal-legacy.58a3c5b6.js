System.register(["./index-legacy.32405bce.js","./vendor-legacy.26c4b3e7.js"],(function(l){"use strict";var n,e,o,a,t;return{setters:[function(l){n=l.k,e=l.m},function(l){o=l.j,a=l.D,t=l.at}],execute:function(){l("u",(function(){const{show:l}=n();return[async({modalProps:n,formSchema:i})=>{const r=o();return await l({destroyOnClose:!0,...n,onCancel:l=>{var e,o;null===(e=r.value)||void 0===e||e.resetFields(),null==n||null===(o=n.onCancel)||void 0===o||o.call(n,l)},content:()=>a(e,{ref:r,formSchema:i},null),onOk:async()=>{var l;const e=(null===(l=r.value)||void 0===l?void 0:l.formModel)||{};try{var o,a,t;await(null===(o=r.value)||void 0===o?void 0:o.validate()),await(null==n||null===(a=n.onFinish)||void 0===a?void 0:a.call(n,{...e})),null===(t=r.value)||void 0===t||t.resetFields()}catch(c){var i;return null==n||null===(i=n.onFail)||void 0===i||i.call(n,{...e}),Promise.reject(c)}}}),await t(),[r]}]}))}}}));