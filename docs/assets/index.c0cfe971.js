var E=Object.defineProperty,h=Object.defineProperties;var g=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var i=(a,e,u)=>e in a?E(a,e,{enumerable:!0,configurable:!0,writable:!0,value:u}):a[e]=u,l=(a,e)=>{for(var u in e||(e={}))C.call(e,u)&&i(a,u,e[u]);if(c)for(var u of c(e))B.call(e,u)&&i(a,u,e[u]);return a},d=(a,e)=>h(a,g(e));import{d as _,u as b,o as A,a4 as f,w as p,a as n,e as k,aj as s,aq as y}from"./index.e78d68c4.js";import{g as x}from"./index.31b6197a.js";var D={request:x,search:{span:{xs:24,sm:12,lg:8,xl:6},data:{status:"1"},forms:[{type:"input",label:"\u59D3\u540D\u59D3\u540D",name:"name",others:{}},{type:"date",label:"\u65E5\u671F",name:"date",others:{}},{type:"date",label:"\u65E5\u671F",name:"date",others:{}},{type:"date",label:"\u65E5\u671F",name:"date",others:{}},{type:"date",label:"\u65E5\u671F",name:"date",others:{}},{type:"select",label:"\u57CE\u5E02",name:"city",options:[{label:"A",value:"a"},{label:"B",value:"b"},{label:"C",value:"c"}],others:{a:111}}]},toolbar:{statusProp:"status",status:[{name:"\u672A\u5F00\u59CB",value:"1"},{name:"\u8FDB\u884C\u4E2D",value:"2"},{name:"\u5DF2\u5B8C\u6210",value:"3",total:999}],operates:[{name:"\u65B0\u589E\u6570\u636E",others:{type:"primary"}},{name:"\u5BFC\u51FA\u6570\u636E",others:{type:"primary",class:"success"}},{name:"\u67E5\u770B\u914D\u7F6E",others:{}}]},table:{data:[],selectedRows:[],columns:[{title:"#",width:55,align:"center",fixed:"left"},{type:"slot",title:"\u56FE\u7247",dataIndex:"image",width:190},{title:"\u59D3\u540D",width:460,dataIndex:"name",ellipsis:!0},{title:"\u5E74\u9F84",width:300,dataIndex:"age"},{title:"\u65E5\u671F",dataIndex:"date",width:160},{title:"\u57CE\u5E02",dataIndex:"custom",width:300},{type:"slot",title:"\u64CD\u4F5C",dataIndex:"operate",width:200,align:"center",fixed:"right"}],others:{scroll:{x:"100%"}}},footer:{fixed:!0,checked:!1,operates:[{name:"\u6279\u91CF\u5F00\u59CB",others:{type:"primary"}},{name:"\u6279\u91CF\u5173\u95ED",others:{type:"primary",danger:!0}}],pagination:{total:0,currentPage:1,pageSize:10,pageSizes:[10,20,30,50,100]}}};const w=["onClick"],v=["onClick"],$=n("img",{style:{width:"32px",height:"32px","border-radius":"50%"},src:"https://i.postimg.cc/Lsw8GQv5/icon.jpg"},null,-1),I=n("span",{class:"m-l6"},"Lean",-1),R={name:"DevelopComponentsTable"},q=_(d(l({},R),{setup(a){const e=b(),u=(t,o)=>{switch(console.log("data:::",o),t.name){case"\u7F16\u8F91":s.success({message:`${t.name}`,description:"\u5904\u7406\u7F16\u8F91\u4E1A\u52A1\u903B\u8F91",duration:2.5});break;case"\u5220\u9664":s.success({message:`${t.name}`,description:"\u5904\u7406\u5220\u9664\u4E1A\u52A1\u903B\u8F91",duration:2.5});break;case"\u65B0\u589E\u6570\u636E":e.push("/develop/table-create"),s.success({message:`${t.name}`,description:"\u5904\u7406\u65B0\u589E\u6570\u636E\u4E1A\u52A1\u903B\u8F91",duration:2.5});break;case"\u5BFC\u51FA\u6570\u636E":s.success({message:`${t.name}`,description:"\u5904\u7406\u5BFC\u51FA\u6570\u636E\u4E1A\u52A1\u903B\u8F91",duration:2.5});break;case"\u67E5\u770B\u914D\u7F6E":s.success({message:`${t.name}`,description:"\u5904\u7406\u67E5\u770B\u914D\u7F6E\u4E1A\u52A1\u903B\u8F91",duration:2.5});break;case"\u6279\u91CF\u5F00\u59CB":s.success({message:`${t.name}`,description:"\u5904\u7406\u6279\u91CF\u5F00\u59CB\u4E1A\u52A1\u903B\u8F91",duration:2.5});break;case"\u6279\u91CF\u5173\u95ED":s.success({message:`${t.name}`,description:"\u5904\u7406\u6279\u91CF\u5173\u95ED\u4E1A\u52A1\u903B\u8F91",duration:2.5});break}};return(t,o)=>{const m=y;return A(),f(m,{config:k(D),"onClick:operate":u},{operate:p(r=>[n("a",{class:"link",onClick:F=>u({name:"\u7F16\u8F91"},r.rows)},"\u7F16\u8F91",8,w),n("a",{class:"link",onClick:F=>u({name:"\u5220\u9664"},r.rows)},"\u5220\u9664",8,v)]),image:p(()=>[$,I]),_:1},8,["config"])}}}));export{q as default};
