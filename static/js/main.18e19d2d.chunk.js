(this.webpackJsonpnews=this.webpackJsonpnews||[]).push([[0],{70:function(t,e,r){"use strict";r.r(e);var a=r(0),n=r.n(a),c=r(11),i=r.n(c),o=r(18),s=r(19),l=r(23),u=r(22),d=r(34),j=r.n(d),b=r(86),h=r(89),f=r(88),x=r(90),m=r(72),p=r(91),O=r(2),g=Object(b.a)((function(t){return{root:{flexGrow:1},paper:{padding:t.spacing(2),margin:"auto",maxWidth:600,borderRadius:"5px"},image:{width:128,height:128},img:{margin:"auto",display:"inline",maxWidth:"100%",maxHeight:"100%",borderRadius:"5px"},button:{backgroundColor:"#fff",color:"#0066FF","&:hover":{backgroundColor:"#0066FF",color:"#fff"}}}})),v=function(t){var e=g();return Object(O.jsxs)("div",{className:e.root,children:[Object(O.jsx)(f.a,{className:e.paper,elevation:3,children:Object(O.jsxs)(h.a,{container:!0,spacing:2,children:[Object(O.jsx)(h.a,{item:!0,children:Object(O.jsx)(m.a,{className:e.image,href:t.url,target:"blank",children:Object(O.jsx)("img",{className:e.img,alt:"complex",src:t.urlImage})})}),Object(O.jsx)(h.a,{item:!0,xs:12,sm:!0,container:!0,children:Object(O.jsxs)(h.a,{item:!0,xs:!0,container:!0,direction:"column",spacing:2,children:[Object(O.jsxs)(h.a,{item:!0,xs:!0,children:[Object(O.jsx)(x.a,{gutterBottom:!0,variant:"h6",children:t.title}),Object(O.jsx)(x.a,{variant:"subtitle2",gutterBottom:!0,children:t.description}),t.author?Object(O.jsx)(x.a,{variant:"subtitle2",color:"inherit",children:t.author}):Object(O.jsx)(x.a,{variant:"subtitle2",color:"inherit",children:"Autor no Encontrado"}),Object(O.jsx)(x.a,{variant:"body2",color:"textSecondary",children:t.date})]}),Object(O.jsx)(h.a,{item:!0,children:Object(O.jsx)(p.a,{className:e.button,href:t.url,target:"blank",children:"Ver m\xe1s"})})]})})]})}),Object(O.jsx)("br",{})]})},y=r(92),k=Object(b.a)((function(t){return{root:{display:"flex",marginLeft:t.spacing(90),marginTop:t.spacing(10)}}})),C=function(){var t=k();return Object(O.jsx)("div",{className:t.root,children:Object(O.jsx)(y.a,{})})},w=function(t){Object(l.a)(r,t);var e=Object(u.a)(r);function r(){var t;Object(o.a)(this,r);for(var a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];return(t=e.call.apply(e,[this].concat(n))).state={data:null,error:null},t}return Object(s.a)(r,[{key:"fetchData",value:function(t){var e=this;j.a.get(t).then((function(t){var r=t.data.articles.map((function(t){return{title:t.title,author:t.author,description:t.description,date:t.publishedAt,urlImage:t.urlToImage,url:t.url}}));e.setState({data:r,error:null})})).catch((function(t){e.setState({data:null,error:t})}))}},{key:"componentDidMount",value:function(){this.fetchData("https://newsapi.org/v2/top-headlines?country=mx&category=business&apiKey=159a82fe42a4469abdd2b1b1272f4c9e")}},{key:"renderSuccess",value:function(){var t,e=this;return null===(t=this.state.data)||void 0===t?void 0:t.map((function(t){return Object(O.jsx)(v,{title:e.cutStringByCharacter(t.title,"-"),description:t.description,author:t.author,date:e.cutStringByCharacter(t.date,"T"),urlImage:t.urlImage,url:t.url},t.key)}))}},{key:"cutStringByCharacter",value:function(t,e){var r=t.indexOf(e);return t.slice(0,r)}},{key:"render",value:function(){return this.state.data?this.renderSuccess():Object(O.jsx)(C,{})}}]),r}(a.Component),F=Object(b.a)((function(t){return{root:{flexGrow:1,backgroundColor:"#FBFCFC"},paper:{display:"flex",flexDirection:"row",justifyContent:"space-evenly",alignItems:"center",fontFamily:"Courier",fontSize:"18px",fontWeight:"bold",color:"black"},button:{backgroundColor:"#fff",color:"#0066FF","&:hover":{backgroundColor:"#0066FF",color:"#fff"}}}})),N=function(){window.location.replace("")},S=function(t){var e=F();return Object(O.jsx)("div",{className:e.root,children:Object(O.jsxs)(h.a,{container:!0,spacing:3,children:[Object(O.jsxs)(h.a,{className:e.paper,item:!0,xs:12,children:[Object(O.jsx)(f.a,{elevation:0,children:"Noticias"}),Object(O.jsx)(f.a,{elevation:0,children:Object(O.jsx)(p.a,{className:e.button,onClick:N,children:"Actualizar"})})]}),Object(O.jsx)(h.a,{item:!0,xs:12,children:t.children})]})})},B=function(t){Object(l.a)(r,t);var e=Object(u.a)(r);function r(){return Object(o.a)(this,r),e.apply(this,arguments)}return Object(s.a)(r,[{key:"render",value:function(){return Object(O.jsx)(S,{children:Object(O.jsx)(w,{})})}}]),r}(a.Component);i.a.render(Object(O.jsx)(n.a.StrictMode,{children:Object(O.jsx)(B,{})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.18e19d2d.chunk.js.map