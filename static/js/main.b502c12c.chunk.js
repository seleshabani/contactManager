(this.webpackJsonptest_kindigit=this.webpackJsonptest_kindigit||[]).push([[0],{115:function(e,t,a){},116:function(e,t,a){},143:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a(0),c=a(12),i=a.n(c),s=(a(115),a(16)),o=(a(116),a(13)),l=a(14),d=a(4),j=a(21),u=a(174),b=a(200),p=a(178),O=a(179),h=a(180),x=a(181),m=a(182),f=Object(u.a)((function(e){var t;return{listlink:{display:"flex",flexDirection:"row",alignContent:"baseline",alignItems:"center",justifyContent:"space-between",color:"black",fontWeight:"bold",textDecoration:"none"},drawerOpen:{width:"240px",display:"block",transition:"all ease-in 300ms"},drawerClose:(t={transition:"all ease-in 300ms",overflowX:"hidden",width:e.spacing(7)+1},Object(o.a)(t,e.breakpoints.up("sm"),{width:e.spacing(9)+1}),Object(o.a)(t,"display","none"),t)}})),g=function(){var e,t,a=f(),r=Object(l.c)((function(e){return e.Theme}));return Object(n.jsx)(b.a,{variant:"permanent",anchor:"left",open:r.drawerOpen,className:Object(d.a)((e={},Object(o.a)(e,a.drawerOpen,r.drawerOpen),Object(o.a)(e,a.drawerClose,!r.drawerOpen),e)),classes:{paper:Object(d.a)((t={},Object(o.a)(t,a.drawerOpen,r.drawerOpen),Object(o.a)(t,a.drawerClose,!r.drawerOpen),t))},children:Object(n.jsxs)(p.a,{children:[Object(n.jsx)(O.a,{children:Object(n.jsxs)(j.b,{to:"/contacts",className:a.listlink,children:[Object(n.jsx)(h.a,{children:Object(n.jsx)(x.a,{})}),Object(n.jsx)("span",{children:"Contacts"})]})}),Object(n.jsx)(O.a,{children:Object(n.jsxs)(j.b,{to:"/contacts-create",className:a.listlink,children:[Object(n.jsx)(h.a,{children:Object(n.jsx)(m.a,{})}),Object(n.jsx)("span",{children:"Nouveau"})]})})]})})},C=a(183),T=a(184),v=a(185),w=a(186),y=a(187),N=a(11),L=a.n(N),A=a(20),S=a(48),_=a.n(S),E="https://jsonplaceholder.typicode.com",k=function(e){return function(){var e=Object(A.a)(L.a.mark((function e(t){var a;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:"CONTACT_LIST_LOADING"}),e.next=4,_.a.get(E+"/users/");case 4:a=e.sent,t({type:"CONTACT_LIST_SUCCESS",payload:a.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),t({type:"CONTACT_LIST_FAIL"});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},I=function(e){return function(){var t=Object(A.a)(L.a.mark((function t(a){var n;return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:"CONTACT_MULTIPLE_LOADING"}),t.next=4,_.a.get(E+"/users/".concat(e));case 4:(n=t.sent).data&&a({type:"CONTACT_MULTIPLE_SUCCESS",payload:n.data}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),a({type:"CONTACT_MULTIPLE_FAIL"});case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},M=a(51),F=a.n(M),D=function(){return Object(n.jsx)("svg",{width:"200px",xmlns:"http://www.w3.org/2000/svg",version:"1.1",viewBox:"0 0 500 500",xmlnsXlink:"http://www.w3.org/1999/xlink",children:Object(n.jsxs)("g",{fill:"#aaa",transform:"translate(151.625,1010.25)",children:[Object(n.jsx)("path",{d:"m85.511-1010.2c-82.584,4.1917-154.6,48.523-196.98,113.89l85.781,49.607c24.978-35.605,65.228-59.679,111.23-62.677v-100.82c-0.01043,0.0005-0.02094-0.0006-0.03137,0z",children:Object(n.jsx)("animate",{id:"p1",attributeName:"fill",attributeType:"XML",from:"#333",to:"#aaa",dur:"0.08s",fill:"freeze",begin:"0s; p6.end"})}),Object(n.jsx)("path",{d:"m111.14-1010.2,0,101.35c44.506,4.7575,83.092,29.309,106.83,64.687l90.205-52.152c-42.394-65.388-114.42-109.72-197.04-113.89z",children:Object(n.jsx)("animate",{id:"p2",attributeName:"fill",attributeType:"XML",from:"#333",to:"#aaa",dur:"0.1s",fill:"freeze",begin:"p1.end"})}),Object(n.jsx)("path",{d:"m-124.33-874.18c-17.473,34.173-27.297,72.92-27.297,113.95,0,41.029,9.8236,79.745,27.297,113.92l86.973-50.298c-9.6635-19.671-15.092-41.818-15.092-65.221,0-22.43,4.9773-43.692,13.899-62.74l-85.781-49.607z",children:Object(n.jsx)("animate",{id:"p6",attributeName:"fill",attributeType:"XML",from:"#333",to:"#aaa",dur:"0.2s",fill:"freeze",begin:"p5.end"})}),Object(n.jsx)("path",{d:"m321.05-874.18-90.675,52.403c8.12,18.323,12.644,38.606,12.644,59.943,0,22.317-4.9677,43.483-13.805,62.457l91.805,53.063c17.477-34.176,27.359-72.884,27.359-113.92,0-41.029-9.855-79.776-27.328-113.95z",children:Object(n.jsx)("animate",{id:"p3",attributeName:"fill",attributeType:"XML",from:"#333",to:"#aaa",dur:"0.2s",fill:"freeze",begin:"p2.end"})}),Object(n.jsx)("path",{d:"m216.44-677.17c-23.852,34.163-61.743,57.738-105.3,62.394v104.52c82.625-4.1631,154.64-48.496,197.04-113.89l-91.742-53.032z",children:Object(n.jsx)("animate",{id:"p4",attributeName:"fill",attributeType:"XML",from:"#333",to:"#aaa",dur:"0.08s",fill:"freeze",begin:"p3.end"})}),Object(n.jsx)("path",{d:"m-24.084-674.65-87.381,50.518c42.379,65.37,114.4,109.7,197,113.88v-103.99c-45.02-2.9339-84.548-26.05-109.63-60.415z",children:Object(n.jsx)("animate",{id:"p5",attributeName:"fill",attributeType:"XML",from:"#333",to:"#aaa",dur:"0.1s",fill:"freeze",begin:"p4.end"})})]})})},G=Object(u.a)((function(e){return{main:{width:"40%",margin:"auto",marginTop:"20px"}}})),R=function(){var e=G();return Object(n.jsx)(C.a,{className:e.main,children:Object(n.jsx)(D,{})})},z=Object(u.a)((function(){return{card:{width:"60%",margin:"auto",marginTop:"30px"}}})),U=function(e){var t=e.match.params.id,a=Object(l.b)(),c=Object(l.c)((function(e){return e.Contact})),i=z(),o=Object(s.g)();Object(r.useEffect)((function(){a(I(t))}),[t]);var d=function(){var e;a((e=t,function(){var t=Object(A.a)(L.a.mark((function t(a){var n;return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:"CONTACT_MULTIPLE_LOADING"}),t.next=4,_.a.delete(E+"/users/".concat(e));case 4:n=t.sent,a({type:"CONTACT_DELETE_SUCCESS",payload:n.data}),a({type:"TOGGLE_FLASH",payload:"Contact supprim\xe9"}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),a({type:"CONTACT_DELETE_FAIL"});case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}())),a(k()),o.push("/contacts")};return Object(n.jsx)(n.Fragment,{children:F.a.isEmpty(c.data)?c.loading?Object(n.jsx)(R,{}):""!==c.errorMsg?Object(n.jsx)("p",{children:c.errorMsg}):void 0:Object(n.jsx)(C.a,{children:Object(n.jsxs)(T.a,{className:i.card,children:[Object(n.jsx)(v.a,{children:Object(n.jsx)("h1",{children:c.data.contactProfil.name})}),Object(n.jsxs)(w.a,{children:[Object(n.jsx)(y.a,{onClick:d,children:"Supprimer"}),Object(n.jsx)(y.a,{children:Object(n.jsx)(j.b,{to:"/contacts-update/".concat(t),children:"Modifier"})})]})]})})})},P=a(188),B=a(199),H=Object(u.a)((function(e){return{grid:{display:"flex"},GridRow:{marginTop:"10px",width:"60%",margin:"auto"},p:{display:"flex",flexDirection:"row",justifyContent:"space-between"},Button:{backgroundColor:"rgb(37,71,170)",width:"15%",color:"white","&:hover":{backgroundColor:"rgb(37,71,170)",transform:"scale(0.99)",transition:"all ease 300ms"}},link:{textDecoration:"none"}}})),X=function(e){var t=Object(l.b)(),a=Object(l.c)((function(e){return e.ContactsList})),c=H();Object(r.useEffect)((function(){i(1)}),[]);var i=function(){t(k())};return Object(n.jsx)(C.a,{children:Object(n.jsx)(P.a,{children:F.a.isEmpty(a.data)?a.loading?Object(n.jsx)(R,{}):""!==a.errorMessage?Object(n.jsx)("p",{children:a.errorMessage}):Object(n.jsx)("p",{children:"impossible de charger la liste"}):a.data.map((function(e){return Object(n.jsx)(B.a,{className:c.GridRow,children:Object(n.jsx)(T.a,{children:Object(n.jsx)(v.a,{children:Object(n.jsxs)("p",{className:c.p,children:[Object(n.jsx)("span",{children:e.name}),Object(n.jsx)(j.b,{className:c.link,to:"/contacts/".concat(e.id),children:Object(n.jsx)(y.a,{className:c.Button,children:"voir"})})]})})})},e.id)}))})})},V=Object(u.a)((function(){return{grid:{display:"flex"},GridRow:{marginTop:"10px",width:"60%",margin:"auto"},p:{display:"flex",flexDirection:"row",justifyContent:"space-between"},Button:{backgroundColor:"rgb(37,71,170)",width:"15%",color:"white","&:hover":{backgroundColor:"rgb(37,71,170)",transform:"scale(0.99)",transition:"all ease 300ms"}},link:{textDecoration:"none"}}})),W=function(e){var t=e.match.params.item,a=Object(l.b)(),c=Object(l.c)((function(e){return e.Recherche})),i=V();Object(r.useEffect)((function(){s(t)}),[t]);var s=function(e){a(function(e){return function(){var t=Object(A.a)(L.a.mark((function t(a){var n;return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:"CONTACT_SEARCH_LOADING"}),t.next=4,_.a.get(E+"/users?nom=".concat(e));case 4:n=t.sent,a({type:"CONTACT_SEARCH_SUCCESS",payload:n.data}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),a({type:"CONTACT_SEARCH_FAIL"});case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()}(e))};return Object(n.jsx)(C.a,{children:""!==c.errorMessage?Object(n.jsx)("p",{children:c.errorMessage}):F.a.isEmpty(c.data)?Object(n.jsx)("p",{children:"Aucun r\xe9sultat"}):c.data.map((function(e){return Object(n.jsx)(B.a,{className:i.GridRow,children:Object(n.jsx)(T.a,{children:Object(n.jsx)(v.a,{children:Object(n.jsxs)("p",{className:i.p,children:[Object(n.jsx)("span",{children:e.name}),Object(n.jsx)(j.b,{className:i.link,to:"/contacts/".concat(e.id),children:Object(n.jsx)(y.a,{className:i.Button,children:"voir"})})]})})})},e.id)}))})},Z=a(105),$=a(190),J=a(47),q=a(189),K=a(197),Q=function(e){var t=e.name,a=e.defValue,r=e.control;e.pattern;return Object(n.jsx)(q.a,{children:Object(n.jsx)(J.a,{control:r,name:t,defaultValue:a,render:function(e){var a=e.ref,r=e.value,c=e.onChange;return Object(n.jsx)(K.a,{inputRef:a,fullWidth:!0,size:"small",variant:"outlined",label:t,value:r,onChange:function(e){return c(e.target.value)}})},rules:{required:!0}})})},Y=Object(u.a)((function(e){return{Button:{marginTop:"10px",backgroundColor:"rgb(37,71,170)",color:"white",border:"none",width:"65px",height:"35px",borderRadius:"3px 3px 3px",cursor:"pointer",outline:"none","&:hover":{backgroundColor:"rgb(37,71,170)",transform:"scale(0.99)"}},grid1:{display:"flex",flexDirection:"row",justifyContent:"space-between","& .MuiFormControl-root":{width:"90%"}},grid:{margin:e.spacing(1),"& .MuiFormControl-root":{width:"100%"}}}})),ee=function(e){var t=Object(l.b)(),a=Object(J.b)(),r=(a.register,a.handleSubmit),c=a.errors,i=a.control,o=Object(s.h)(),d=Y(),j=Object(s.g)(),u=function(){return!!e.hasOwnProperty("contact")},b=!!u()&&e.contact;return Object(n.jsx)("form",{onSubmit:r((function(e){var a;u()?t(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return function(){var a=Object(A.a)(L.a.mark((function a(n){var r;return L.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,_.a.put(E+"/users/".concat(t),e);case 3:r=a.sent,n({type:"CONTACT_UPDATE_SUCCESS",payload:r.data}),r.data&&n({type:"TOGGLE_FLASH",payload:"Contact modifi\xe9"}),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),n({type:"CONTACT_UPDATE_FAIL"});case 11:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(e){return a.apply(this,arguments)}}()}(e,o.id)):t((a=e,function(){var e=Object(A.a)(L.a.mark((function e(t){var n;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_.a.post(E+"/users",a,{headers:{"content-type":"application/json"}});case 3:n=e.sent,t({type:"CONTACT_CREATE_SUCCESS",payload:n.data}),n.data&&t({type:"TOGGLE_FLASH",payload:"Contact cr\xe9es"}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),t({type:"CONTACT_CREATE_FAIL"});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())),j.push("/contacts")})),children:Object(n.jsxs)(P.a,{container:!0,children:[Object(n.jsx)(P.a,{item:!0,xs:12,lg:12,className:d.grid,children:Object(n.jsx)(Q,{defValue:b?b.name:"",name:"name",control:i})}),Object(n.jsx)(P.a,{item:!0,xs:12,lg:12,className:d.grid,children:Object(n.jsx)(Q,{defValue:b?b.username:"",name:"username",control:i})}),Object(n.jsx)(P.a,{item:!0,xs:12,lg:12,className:d.grid,children:Object(n.jsx)(Q,{defValue:b?b.email:"",name:"email",pattern:/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,control:i})}),c.mail&&Object(n.jsx)("p",{children:"veillez entrer une adresse mail valide"}),Object(n.jsx)(P.a,{item:!0,xs:12,lg:12,className:d.grid,children:Object(n.jsx)(Q,{defValue:b?b.tel:"",name:"phone",pattern:/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,control:i})}),Object(n.jsx)(P.a,{item:!0,xs:12,lg:12,className:d.grid,children:Object(n.jsx)(Q,{defValue:b?b.soc:"",name:"company",control:i})}),Object(n.jsx)(P.a,{item:!0,xs:12,lg:12,className:d.grid,children:Object(n.jsx)("button",{className:d.Button,children:e.btnText})})]})})},te=Object(u.a)((function(){return{card:{width:"70%",margin:"auto",marginTop:"20px",padding:"10px"}}})),ae=function(){var e=te();return Object(n.jsx)(C.a,{children:Object(n.jsxs)(Z.a,{className:e.card,children:[Object(n.jsx)($.a,{variant:"h2",gutterBottom:!0,children:"Nouveau Contact"}),Object(n.jsx)(ee,{btnText:"Cr\xe9er"})]})})},ne=Object(u.a)((function(){return{card:{width:"70%",margin:"auto",marginTop:"20px",padding:"10px"}}})),re=function(e){var t=e.match.params.id,a=Object(l.b)(),c=Object(l.c)((function(e){return e.Contact})),i=ne(),s=function(){return c.data.hasOwnProperty("contactProfil")?Object(n.jsxs)(C.a,{children:[Object(n.jsx)($.a,{variant:"h4",gutterBottom:!0,children:c.data.contactProfil.name}),Object(n.jsx)(ee,{contact:c.data.contactProfil,btnText:"modifier"})]}):Object(n.jsx)(n.Fragment,{})};return Object(r.useEffect)((function(){a(I(t))}),[t]),Object(n.jsx)(C.a,{children:Object(n.jsx)(T.a,{className:i.card,children:Object(n.jsx)(s,{})})})},ce=a(19),ie=a(191),se=a(192),oe=a(201),le=a(98),de=a.n(le),je=a(193),ue=a(99),be=a.n(ue),pe=Object(u.a)((function(e){return{menu:{height:"50px",zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},menuShift:{width:"calc(100% - 240px)",marginLeft:"240px",transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},container:{display:"flex",flexDirection:"colum",justifyContent:"space-between",alignItems:"center"},search:Object(o.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(ce.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(ce.b)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},icon:{width:"10%",color:"white",marginLeft:"10px"},input:{paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%",color:"white"}}})),Oe=function(){var e,t=Object(J.b)({mode:"onSubmit"}),a=t.handleSubmit,r=t.control,c=Object(s.g)(),i=pe(),j=Object(l.b)(),u=Object(l.c)((function(e){return e.Theme}));return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(ie.a,{className:Object(d.a)((e={},Object(o.a)(e,i.menu,!u.drawerOpen),Object(o.a)(e,i.menuShift,u.drawerOpen),e)),position:"sticky",children:Object(n.jsxs)(C.a,{className:i.container,children:[Object(n.jsx)(se.a,{className:i.icon,onClick:function(){j((function(e){e({type:"TOGGLE_DRAWER"})}))},children:u.drawerOpen?Object(n.jsx)(je.a,{}):Object(n.jsx)(de.a,{})}),Object(n.jsx)("form",{onSubmit:a((function(e){c.push("/contacts-search/".concat(e.search))})),children:Object(n.jsxs)("div",{className:i.search,children:[Object(n.jsx)("div",{className:i.searchIcon,children:Object(n.jsx)(be.a,{})}),Object(n.jsx)(J.a,{control:r,name:"search",render:function(e,t){var a=e.onChange,r=e.onBlur,c=(e.value,e.name,e.ref);t.invalid,t.isTouched,t.isDirty;return Object(n.jsx)(oe.a,{onBlur:r,onChange:function(e){return a(e.target.value)},inputRef:c,className:i.input})}})]})})]})})})},he=a(40),xe=a(194),me=a(195),fe=Object(u.a)((function(){return{paper:{width:"250px",height:"50px",position:"absolute",right:"10px",bottom:"10px",backgroundColor:"green",color:"white"},paper2:{display:"none"},container:{display:"flex",flexDirection:"row",justifyContent:"space-between"},IconButton:{marginTop:"0px",width:"10%"}}})),ge=function(){var e,t=fe(),a=Object(l.c)((function(e){return e.Theme})),c=Object(r.useState)(!1),i=Object(he.a)(c,2),s=i[0],j=i[1],u=Object(l.b)();return Object(r.useEffect)((function(){""!==a.FlashMessage?j(!0):j(!1)}),[a.FlashMessage]),Object(n.jsx)(xe.a,{in:!0,timeout:300,children:Object(n.jsx)(Z.a,{className:Object(d.a)((e={},Object(o.a)(e,t.paper,s),Object(o.a)(e,t.paper2,!s),e)),children:Object(n.jsxs)(C.a,{className:t.container,children:[Object(n.jsx)("p",{children:a.FlashMessage}),Object(n.jsx)(se.a,{className:t.IconButton,onClick:function(){u((function(e){e({type:"TOGGLE_FLASH",payload:""})}))},children:Object(n.jsx)(me.a,{})})]})})})},Ce=Object(u.a)((function(e){return{root:{display:"flex",flexDirection:"column"},content:{flexGrow:"1"}}}));var Te=function(){var e=Ce();return Object(n.jsxs)("div",{className:e.root,children:[Object(n.jsx)(Oe,{}),Object(n.jsx)(g,{}),Object(n.jsx)("main",{className:e.content,children:Object(n.jsxs)(s.d,{children:[Object(n.jsx)(s.b,{path:"/",exact:!0,component:X}),Object(n.jsx)(s.b,{path:"/contacts",exact:!0,component:X}),Object(n.jsx)(s.b,{path:"/contacts/:id",exact:!0,component:U}),Object(n.jsx)(s.b,{path:"/contacts-update/:id",exact:!0,component:re}),Object(n.jsx)(s.b,{path:"/contacts-create/",exact:!0,component:ae}),Object(n.jsx)(s.b,{path:"/contacts-search/:item",exact:!0,component:W}),Object(n.jsx)(s.a,{to:"/contacts"})]})}),Object(n.jsx)(ge,{})]})},ve=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,202)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),n(e),r(e),c(e),i(e)}))},we=a(35),ye=a(100),Ne=a(101),Le=a(10),Ae={loading:!1,data:[],errorMessage:"",count:0},Se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CONTACT_LIST_LOADING":return Object(Le.a)(Object(Le.a)({},e),{},{loading:!0,errorMessage:""});case"CONTACT_LIST_FAIL":return Object(Le.a)(Object(Le.a)({},e),{},{loading:!1,errorMessage:"impossible de charger la liste des CONTACT"});case"CONTACT_LIST_SUCCESS":return Object(Le.a)(Object(Le.a)({},e),{},{loading:!1,data:t.payload,count:t.payload.count,errorMessage:""});default:return e}},_e={loading:!1,data:{},errorMsg:""},Ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CONTACT_MULTIPLE_LOADING":return Object(Le.a)(Object(Le.a)({},e),{},{loading:!0,errorMsg:""});case"CONTACT_MULTIPLE_FAIL":return Object(Le.a)(Object(Le.a)({},e),{},{loading:!1,errorMsg:"impossible de trouver le contact demand\xe9"});case"CONTACT_MULTIPLE_SUCCESS":return Object(Le.a)(Object(Le.a)({},e),{},{loading:!1,errorMsg:"",data:Object(Le.a)(Object(Le.a)({},e.data),{},Object(o.a)({},"contactProfil",t.payload))});case"CONTACT_DELETE_SUCCESS":return Object(Le.a)(Object(Le.a)({},e),{},{loading:!1,data:t.payload,errorMsg:"Contact supprim\xe9!"});default:return e}},ke={loading:!1,data:[],errorMessage:"",count:0},Ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ke,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CONTACT_SEARCH_LOADING":return Object(Le.a)(Object(Le.a)({},e),{},{loading:!0,errorMessage:"En cours de recherche..."});case"CONTACT_LIST_FAIL":return Object(Le.a)(Object(Le.a)({},e),{},{loading:!1,errorMessage:"Aucun r\xe9sultat pour votre recherche"});case"CONTACT_SEARCH_SUCCESS":return Object(Le.a)(Object(Le.a)({},e),{},{data:t.payload,count:t.payload.count,errorMessage:""});default:return e}},Me={drawerOpen:!1,drawerSize:"0",FlashMessage:""},Fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOGGLE_DRAWER":return Object(Le.a)(Object(Le.a)({},e),{},{drawerOpen:!e.drawerOpen,drawerSize:"240"===e.drawerSize?"0":"240"});case"TOGGLE_FLASH":return Object(Le.a)(Object(Le.a)({},e),{},{FlashMessage:t.payload});default:return e}},De=Object(we.combineReducers)({ContactsList:Se,Contact:Ee,Recherche:Ie,Theme:Fe}),Ge=Object(we.createStore)(De,Object(ye.composeWithDevTools)(Object(we.applyMiddleware)(Ne.a))),Re=a(196),ze=a(102),Ue=Object(ze.a)({palette:{primary:{main:"#2547aa"},drawerWidth:"240"}});i.a.render(Object(n.jsx)(j.a,{children:Object(n.jsx)(l.a,{store:Ge,children:Object(n.jsx)(Re.a,{theme:Ue,children:Object(n.jsx)(Te,{})})})}),document.getElementById("root")),ve()}},[[143,1,2]]]);
//# sourceMappingURL=main.b502c12c.chunk.js.map