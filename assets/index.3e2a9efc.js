var O=Object.defineProperty,N=Object.defineProperties;var P=Object.getOwnPropertyDescriptors;var I=Object.getOwnPropertySymbols;var H=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var w=(e,t,n)=>t in e?O(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,C=(e,t)=>{for(var n in t||(t={}))H.call(t,n)&&w(e,n,t[n]);if(I)for(var n of I(t))R.call(t,n)&&w(e,n,t[n]);return e},v=(e,t)=>N(e,P(t));var _=(e,t,n)=>new Promise((i,d)=>{var m=s=>{try{l(n.next(s))}catch(o){d(o)}},a=s=>{try{l(n.throw(s))}catch(o){d(o)}},l=s=>s.done?i(s.value):Promise.resolve(s.value).then(m,a);l((n=n.apply(e,t)).next())});import{bc as V,D as r,bu as q,bE as j,F as D,b as S,j as k,u as W,k as X,at as z,l as T,Q as f,ac as F,aH as K,ax as Q,aw as U,O as Y,C as G,o as J,e as Z,E as y,bt as ee,ad as te,h}from"./vendor.1de287a7.js";/* empty css               */import{r as ne,I as oe,z as le}from"./index.57f23076.js";import{I as ae,a as se,j as ue}from"./index.ca111d3e.js";import{D as re}from"./dynamic-table.96d276c6.js";import{a as ce}from"./hero.628a68b4.js";import{u as ie}from"./useFormModal.67d087a2.js";/* empty css               */const de=e=>[{field:"filename",component:"Input",label:e("component.excel.fileName"),rules:[{required:!0}]},{field:"bookType",component:"Select",label:e("component.excel.fileType"),defaultValue:"xlsx",rules:[{required:!0}],componentProps:{options:[{label:"xlsx",value:"xlsx",key:"xlsx"},{label:"html",value:"html",key:"html"},{label:"csv",value:"csv",key:"csv"},{label:"txt",value:"txt",key:"txt"}]}}],me=()=>{const{t:e}=V(),[t]=ie();return{openModal:({onOk:i})=>{t({modalProps:{title:e("component.excel.exportModalTitle"),onFinish:d=>_(void 0,null,function*(){const{filename:m,bookType:a}=d;i({filename:`${m.split(".").shift()}.${a}`,bookType:a})})},formSchema:{labelWidth:100,layout:"vertical",schemas:de(e)}})}}};function pe(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!j(e)}const M=[{title:"\u5934\u50CF",align:"center",width:100,hideInSearch:!0,dataIndex:"avatar",bodyCell:({record:e})=>r(ae,{src:e.avatar,preview:{src:e.posters},key:e.avatar},null)},{title:"\u82F1\u96C4\u540D\u79F0",align:"center",dataIndex:"title"},{title:"\u82F1\u96C4\u79F0\u53F7",align:"center",dataIndex:"name"},{title:"\u5B9A\u4F4D",align:"center",dataIndex:"roles",bodyCell:({record:e})=>{var t;return r(D,null,[(t=e.roles)==null?void 0:t.map(n=>r(q,{color:"blue",key:n},pe(n)?n:{default:()=>[n]}))])}},{title:"\u64CD\u4F5C",align:"center",width:120,dataIndex:"$action",actions:({record:e})=>[{label:"\u67E5\u770B\u8BE6\u60C5",onClick:()=>ne.push({name:"demos-table-lol-info",params:{id:e.heroId}})}]}];function fe(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!j(e)}const E="context-menu",xe={width:{type:Number,default:156},customEvent:{type:Object,default:null},styles:{type:Object},showIcon:{type:Boolean,default:!0},axis:{type:Object,default(){return{x:0,y:0}}},items:{type:Array,default(){return[]}}},A=e=>{const{item:t}=e;return r("span",{style:"display: inline-block; width: 100%; ",class:"px-4",onClick:e.handler.bind(null,t)},[e.showIcon&&t.icon&&r(oe,{class:"mr-2",type:t.icon},null),r("span",null,[t.label])])};var ye=S({name:"ContextMenu",props:xe,setup(e){const t=k(null),n=k(!1),i=W(()=>{const{axis:a,items:l,styles:s,width:o}=e,{x:c,y:u}=a||{x:0,y:0},p=(l||[]).length*40,x=o,g=document.body,$=g.clientWidth<c+x?c-x:c,L=g.clientHeight<u+p?u-p:u;return v(C({},s),{position:"absolute",width:`${o}px`,left:`${$+1}px`,top:`${L+1}px`})});X(()=>{z(()=>n.value=!0)}),T(()=>{const a=f(t);a&&document.body.removeChild(a)});function d(a,l){const{handler:s,disabled:o}=a;o||(n.value=!1,l==null||l.stopPropagation(),l==null||l.preventDefault(),s==null||s())}function m(a){return a.map(l=>{const{disabled:s,label:o,children:c,divider:u=!1}=l,p={item:l,handler:d,showIcon:e.showIcon};return!c||c.length===0?r(D,null,[r(F.Item,{disabled:s,class:`${E}__item`,key:o},{default:()=>[r(A,p,null)]}),u?r(K,{key:`d-${o}`},null):null]):f(n)?r(F.SubMenu,{key:o,disabled:s,popupClassName:`${E}__popup`},{title:()=>r(A,p,null),default:()=>m(c)}):null})}return()=>{let a;if(!f(n))return null;const{items:l}=e;return r("div",{class:E},[r(F,{inlineIndent:12,mode:"vertical",ref:t,style:f(i)},fe(a=m(l))?a:{default:()=>[a]})])}}});const b={domList:[],resolve:()=>{}},be=function(e){const{event:t}=e||{};if(t&&(t==null||t.preventDefault()),!!le)return new Promise(n=>{const i=document.body,d=document.createElement("div"),m={};e.styles&&(m.styles=e.styles),e.items&&(m.items=e.items),e.event&&(m.customEvent=t,m.axis={x:t.clientX,y:t.clientY});const a=r(ye,m);Q(a,d);const l=function(){b.resolve("")};b.domList.push(d);const s=function(){b.domList.forEach(o=>{try{o&&i.removeChild(o)}catch(c){console.error(c)}}),i.removeEventListener("click",l),i.removeEventListener("scroll",l)};b.resolve=function(o){s(),n(o)},s(),i.appendChild(d),i.addEventListener("click",l),i.addEventListener("scroll",l)})},B=function(){b&&(b.resolve(""),b.domList=[])};function he(e=!0){return U()&&e&&T(()=>{B()}),[be,B]}const Ce=h(" \u82F1\u96C4\u8054\u76DF -- \u6839\u636E\u6570\u7EC4\u683C\u5F0F\u7684\u6570\u636E\u8FDB\u884C\u5BFC\u51FA "),ve=h("\u8868\u683C\u81EA\u5E26\u5BFC\u51FA"),_e=h(" \u6570\u7EC4\u683C\u5F0F\u5BFC\u51FA "),Fe=h(" \u81EA\u5B9A\u4E49\u5BFC\u51FA\u683C\u5F0F "),Ee={name:"DemosTablesLolTable"},Se=S(v(C({},Ee),{setup(e){const t=Y(),[n]=he(),i=me();let d=[];const m=()=>{const o=M.filter(u=>u.dataIndex!=="$action"),c=o.map(u=>u.dataIndex);se({data:d.map(u=>c.reduce((p,x)=>(p[x]=Array.isArray(u[x])?u[x].toString():u[x],p),{})).map(u=>Object.values(u)),header:o.map(u=>u.title),filename:"\u4E8C\u7EF4\u6570\u7EC4\u65B9\u5F0F\u5BFC\u51FAexcel.xlsx"})},a=()=>{i.openModal({onOk:({filename:o,bookType:c})=>{ue({data:d,filename:o,write2excelOpts:{bookType:c}})}})},l=o=>_(this,null,function*(){const{data:c}=yield ce(o);return d=c.list,c}),s=o=>({onContextmenu:c=>{n({event:c,items:[{label:"\u67E5\u770B",handler:()=>{t.push({name:"demos-table-lol-info",params:{id:o.heroId}})}},{label:"\u7F16\u8F91",handler:()=>{}}]})}});return(o,c)=>{const u=G("a-button");return J(),Z("div",null,[r(f(ee),{message:"\u6E38\u620F\u4ECB\u7ECD",type:"info","show-icon":""},{description:y(()=>[Ce]),_:1}),r(f(te),{title:"\u82F1\u96C4\u5217\u8868mock\u6570\u636E",style:{"margin-top":"20px"}},{default:y(()=>[r(f(re),{size:"small",bordered:"","data-request":l,columns:f(M),rowKey:"heroid","export-file-name":"\u8868\u683C\u81EA\u5E26\u5BFC\u51FA",customRow:s},{"export-button":y(()=>[r(u,{type:"primary"},{default:y(()=>[ve]),_:1})]),toolbar:y(()=>[r(u,{type:"primary",onClick:m},{default:y(()=>[_e]),_:1}),r(u,{type:"primary",onClick:a},{default:y(()=>[Fe]),_:1})]),_:1},8,["columns"])]),_:1})])}}}));export{Se as default};
