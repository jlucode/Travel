(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[675],{759:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Australian_Cities/LoganCity",function(){return n(832)}])},832:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return y}});var r=n(7568),i=n(603),a=n(655),o=n(5893),l=n(7294),s=n(2370),c=n(9974),d=n(7385),x=n(1359),h=n(9630),u=n(9198),j=n.n(u);n(5828);var p=n(9669),f=n.n(p),g=n(1163),b=n.n(g),m=n(6638);function y(){var e,t,n=function(e){var t=e/60,n=Math.floor(t);return n+" hr "+Math.round((t-n)*60)+" min"},u=function(e){var t=e.split(/\D/g);return[t[1],t[2],t[0]].join("-")},p=function(){var n;O("pending"),(n=(0,r.Z)(function(){return(0,a.__generator)(this,function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,f()("https://cors-anywhere.herokuapp.com/https://engine.hotellook.com/api/v2/cache.json?location=bne&checkIn=".concat(e,"&checkOut=").concat(t,"&currency=usd&limit=20&sortBy=priceFrom&token=1fb2829993009e6a7db3163d4d00a1ff"))];case 1:return E(n.sent().data),O("resolved"),[3,3];case 2:return n.sent(),O("rejected"),[3,3];case 3:return[2]}})}),function(){return n.apply(this,arguments)})()},g=(0,i.Z)((0,l.useState)("idle"),2),y=(g[0],g[1]),D=(0,i.Z)((0,l.useState)([{data:"",iata:""}]),2),F=(D[0],D[1]),Z=(0,i.Z)((0,l.useState)("idle"),2),k=(Z[0],Z[1]),S=(0,i.Z)((0,l.useState)([{data:"",value:""}]),2),P=S[0],z=S[1];(0,l.useEffect)(function(){var e;y("pending"),k("pending"),(e=(0,r.Z)(function(){var e,t;return(0,a.__generator)(this,function(n){switch(n.label){case 0:return n.trys.push([0,4,,5]),[4,f()("https://www.travelpayouts.com/whereami?ip=")];case 1:if(F((e=n.sent()).data),y("resolved"),!("BNE"!==e.data.iata))return[3,3];return[4,f()("https://cors-anywhere.herokuapp.com/https://api.travelpayouts.com/v2/prices/latest?currency=usd&period_type=year&page=1&duration=hour&limit=5&origin=".concat(e.data.iata,"&destination=").concat("BNE","&show_to_affiliates=true&sorting=price&token=1fb2829993009e6a7db3163d4d00a1ff"))];case 2:z(n.sent().data),k("resolved"),n.label=3;case 3:return[3,5];case 4:return console.log(t=n.sent()),y("rejected"),console.log(t),k("rejected"),[3,5];case 5:return[2]}})}),function(){return e.apply(this,arguments)})()},[]);var C=(0,i.Z)((0,l.useState)([{}]),2),v=C[0],w=C[1],_=(0,i.Z)((0,l.useState)(""),2);_[0],_[1],(0,l.useEffect)(function(){fetch("https://api.openweathermap.org/data/2.5/weather?q=logan city&units=imperial&APPID=6ca5492956c0cad241e72a5b6126ed5f").then(function(e){return e.json()}).then(function(e){return w(e)})},[]);var L=(0,i.Z)((0,l.useState)([{}]),2),A=L[0],R=L[1],B=(0,i.Z)((0,l.useState)(""),2);B[0],B[1],(0,l.useEffect)(function(){f().get("https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search",{headers:{Authorization:"Bearer ".concat("34_H2aphTr2KCBnKHh-VkawG67HFJBMMLBjR51PVjwQYDNIPDpc_vIICnjYMmhU37ZnzBz04Ua82FYi-Y180FFBZOatgcijVBtij-UpZw4j-eZ778tPmMP7kh6fNYnYx")},params:{limit:6,location:"Logan City Queensland",sort_by:"best_match"}}).then(function(e){return R(e)})},[]);var M=(0,i.Z)((0,l.useState)("idle"),2),O=(M[0],M[1]),N=(0,i.Z)((0,l.useState)([{location:"",geo:"",hotelName:""}]),2),U=N[0],E=N[1];return(0,o.jsxs)(s.ZP,{container:!0,spacing:3,style:{backgroundColor:"#FDF5DF"},children:[(0,o.jsx)(s.ZP,{item:!0,xs:8,children:(0,o.jsx)(d.Z,{style:{backgroundColor:"#F3CBBD"},sx:{display:"flex",border:4,borderColor:"black",borderRadius:"16px"},children:(0,o.jsx)(x.Z,{sx:{width:"100%"},children:(0,o.jsxs)(h.Z,{gutterBottom:!0,variant:"h7",component:"div",align:"center",children:[(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),(0,o.jsx)("h1",{style:{color:"black",fontSize:46,fontFamily:"Fantasy"},children:"Explore Logan City!"}),(0,o.jsx)("div",{children:(0,o.jsx)("a",{target:"_blank",style:{fontFamily:"Optima",color:"black",fontSize:25,textDecoration:"none"},href:"https://www.beenleighrum.com.au/",children:"Beenleigh Artisan Distillery"})}),(0,o.jsx)("br",{}),(0,o.jsx)("div",{children:(0,o.jsx)("a",{target:"_blank",style:{fontFamily:"Optima",color:"black",fontSize:25,textDecoration:"none"},href:"http://www.chungtian.org.au/",children:"Chung Tian Temple"})}),(0,o.jsx)("br",{}),(0,o.jsx)("div",{children:(0,o.jsx)("a",{target:"_blank",style:{fontFamily:"Optima",color:"black",fontSize:25,textDecoration:"none"},href:"https://kingstonpark.com.au/",children:"Kingston Park Raceway"})}),(0,o.jsx)("br",{}),(0,o.jsx)("br",{})]})})})}),(0,o.jsx)(s.ZP,{item:!0,xs:4,children:(0,o.jsx)(d.Z,{style:{backgroundColor:"#90CDC3"},sx:{display:"flex",border:4,borderColor:"black",borderRadius:"16px"},children:(0,o.jsx)(x.Z,{sx:{width:"100%"},children:(0,o.jsx)(h.Z,{gutterBottom:!0,variant:"h7",component:"div",align:"center",children:(0,o.jsxs)("div",{children:[v.main?(0,o.jsxs)("h1",{style:{color:"#FDF5DF",fontSize:80,height:80},children:[Math.round(v.main.temp),"\xb0 "]}):null,v.weather?(0,o.jsxs)("p",{style:{fontFamily:"Optima",color:"Black",fontSize:25},children:[v.weather[0].main," "]}):null,v.main?(0,o.jsxs)("p",{style:{fontFamily:"Optima",color:"Black",fontSize:25,height:15},children:["Real Feel: ",Math.round(v.main.feels_like),"\xb0 F "]}):null,v.main?(0,o.jsxs)("p",{style:{fontFamily:"Optima",color:"Black",fontSize:25,height:24},children:["Humidity: ",v.main.humidity,"% "]}):null]})})})})}),(0,o.jsx)(s.ZP,{item:!0,xs:8,children:(0,o.jsx)(d.Z,{style:{backgroundColor:"#AF8C72"},sx:{align:"center",display:"flex",border:4,borderColor:"black",borderRadius:"16px"},children:(0,o.jsx)(x.Z,{sx:{width:"100%"},children:(0,o.jsx)(h.Z,{gutterBottom:!0,variant:"h7",component:"div",align:"center",children:(0,o.jsxs)("div",{children:[(0,o.jsx)("h1",{style:{color:"#FDF5DF",fontSize:46,fontFamily:"Fantasy"},align:"center",children:"Top Rated Restaurants"}),(0,o.jsx)(d.Z,{style:{backgroundColor:"#FDF5DF"},sx:{display:"flex",border:2,borderColor:"white",borderRadius:"0px"},children:(0,o.jsxs)(s.ZP,{container:!0,spacing:1,children:[(0,o.jsxs)(s.ZP,{item:!0,xs:6,children:[A.data?(0,o.jsx)("p",{style:{color:"black",fontFamily:"cursive",fontSize:25,textDecoration:"none"},children:A.data.businesses[0].name}):null,A.data?(0,o.jsx)("p",{style:{color:"black",fontFamily:"cursive",fontSize:25,textDecoration:"none"},children:A.data.businesses[1].name}):null,A.data?(0,o.jsx)("p",{style:{color:"black",fontFamily:"cursive",fontSize:25,textDecoration:"none"},children:A.data.businesses[2].name}):null]}),(0,o.jsxs)(s.ZP,{item:!0,xs:6,children:[A.data?(0,o.jsx)("p",{style:{color:"black",fontFamily:"cursive",fontSize:25,textDecoration:"none"},children:A.data.businesses[3].name}):null,A.data?(0,o.jsx)("p",{style:{color:"black",fontFamily:"cursive",fontSize:25,textDecoration:"none"},children:A.data.businesses[4].name}):null,A.data?(0,o.jsx)("p",{style:{color:"black",fontFamily:"cursive",fontSize:25,textDecoration:"none"},children:A.data.businesses[5].name}):null]})]})}),(0,o.jsx)("br",{}),(0,o.jsx)(s.ZP,{container:!0,spacing:0,display:"flex",justifyContent:"center",alignItems:"justify-end",children:(0,o.jsx)(c.Z,{rel:"noopener",href:"https://www.yelp.com/search?find_desc=Restaurants&find_loc=Logan City Queensland&sortby=recommended",color:"success",target:"_blank",variant:"contained",children:"Yelp"})})]})})})})}),(0,o.jsx)(s.ZP,{item:!0,xs:4,children:(0,o.jsx)(d.Z,{style:{backgroundColor:"white"},sx:{display:"flex",border:4,borderColor:"black",borderRadius:"16px"},children:(0,o.jsx)(x.Z,{sx:{width:"100%"},children:(0,o.jsxs)(h.Z,{gutterBottom:!0,variant:"overline",component:"div",align:"center",children:[(0,o.jsx)("div",{children:(0,o.jsx)("img",{src:"/BestTimesToVisit_LoganCity.png",width:"100%",height:"100%"})}),(0,o.jsx)("br",{})]})})})}),(0,o.jsx)(s.ZP,{item:!0,xs:6,children:(0,o.jsx)(d.Z,{style:{backgroundColor:"#8DA47E"},sx:{fontFamily:"Optima",display:"flex",border:4,borderColor:"black",borderRadius:"16px"},children:(0,o.jsx)(x.Z,{sx:{width:"100%"},children:(0,o.jsxs)(h.Z,{gutterBottom:!0,variant:"h7",component:"div",children:[(0,o.jsx)("h1",{style:{color:"#FDF5DF",fontSize:40,fontWeight:"bold",fontFamily:"Fantasy"},align:"center",children:"Hotels"}),(0,o.jsxs)(s.ZP,{children:[(0,o.jsxs)(x.Z,{sx:{display:"flex"},children:[(0,o.jsxs)(s.ZP,{item:!0,xs:6,children:[(0,o.jsx)("h1",{align:"left",style:{fontFamily:"Fantasy",color:"#FDF5DF"},children:"Check - In"}),(0,o.jsx)(function(){var t=(0,i.Z)((0,l.useState)(new Date),2),n=t[0],r=t[1];return(0,o.jsx)(j(),{selected:n,onChange:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Date;r(t),e=String(t.getFullYear())+"-"+String(t.getMonth()+1).padStart(2,"0")+"-"+String(t.getDate()).padStart(2,"0")},dateFormat:"yyyy-MM-dd"})},{popperPlacement:"bottom-start"})]}),(0,o.jsxs)(s.ZP,{item:!0,xs:6,align:"right",children:[(0,o.jsx)("h1",{align:"right",style:{fontFamily:"Fantasy",color:"#FDF5DF"},children:"Check - Out"}),(0,o.jsx)(function(){var e=(0,i.Z)((0,l.useState)(new Date),2),n=e[0],r=e[1];return(0,o.jsx)(j(),{selected:n,onChange:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Date;r(e),t=String(e.getFullYear())+"-"+String(e.getMonth()+1).padStart(2,"0")+"-"+String(e.getDate()).padStart(2,"0")},dateFormat:"yyyy-MM-dd"})},{popperPlacement:"bottom-end"})]})]}),(0,o.jsx)(s.ZP,{container:!0,sx:{p:2},spacing:0,display:"flex",justifyContent:"center",alignItems:"justify-end",children:(0,o.jsx)(c.Z,{onClick:function(){p()},color:"success",rel:"noopener",target:"_blank",variant:"contained",children:"Search"})}),(0,o.jsx)("br",{})]}),(0,o.jsxs)(d.Z,{style:{backgroundColor:"#FDF5DF"},sx:{border:3,borderColor:"#AF8C72",borderRadius:"0px"},children:[(0,o.jsx)(s.ZP,{container:!0,spacing:1}),(0,o.jsx)(s.ZP,{item:!0,xs:12,children:U[1]?(0,o.jsxs)("p",{style:{textAlign:"center",color:"black",fontSize:21,textDecoration:"none"},children:[" ",(0,o.jsxs)("b",{children:[" ",U[0].hotelName]})," "]}):null}),(0,o.jsxs)(s.ZP,{container:!0,spacing:1,children:[(0,o.jsx)(s.ZP,{item:!0,xs:6,children:U[1]?(0,o.jsxs)("p",{style:{textAlign:"left",marginLeft:15,color:"black",fontSize:21,textDecoration:"none"},children:[" ",(0,o.jsx)("b",{children:"From:"})," $",Math.round(U[0].priceFrom)," USD "]}):null}),(0,o.jsx)(s.ZP,{item:!0,xs:6,children:U[1]?(0,o.jsxs)("p",{style:{textAlign:"right",marginRight:15,color:"black",fontSize:21,textDecoration:"none"},children:[" ",(0,o.jsx)("b",{})," ",U[0].stars," Star Rating"]}):null})]})]}),(0,o.jsx)(s.ZP,{container:!0,spacing:1}),(0,o.jsx)(s.ZP,{item:!0,xs:12,children:U[1]?(0,o.jsxs)("p",{style:{textAlign:"center",color:"#FDF5DF",fontSize:21,textDecoration:"none"},children:[" ",(0,o.jsxs)("b",{children:[" ",U[1].hotelName]})," "]}):null}),(0,o.jsxs)(s.ZP,{container:!0,spacing:1,children:[(0,o.jsx)(s.ZP,{item:!0,xs:6,children:U[1]?(0,o.jsxs)("p",{style:{textAlign:"left",marginLeft:15,color:"#FDF5DF",fontSize:21,textDecoration:"none"},children:[" ",(0,o.jsx)("b",{children:"From:"})," $",Math.round(U[1].priceFrom)," USD "]}):null}),(0,o.jsx)(s.ZP,{item:!0,xs:6,children:U[1]?(0,o.jsxs)("p",{style:{textAlign:"right",marginRight:15,color:"#FDF5DF",fontSize:21,textDecoration:"none"},children:[" ",(0,o.jsx)("b",{})," ",U[1].stars," Star Rating"]}):null})]}),(0,o.jsxs)(d.Z,{style:{backgroundColor:"#FDF5DF"},sx:{border:3,borderColor:"#AF8C72",borderRadius:"0px"},children:[(0,o.jsx)(s.ZP,{container:!0,spacing:1}),(0,o.jsx)(s.ZP,{item:!0,xs:12,children:U[2]?(0,o.jsxs)("p",{style:{textAlign:"center",color:"black",fontSize:21,textDecoration:"none"},children:[" ",(0,o.jsxs)("b",{children:[" ",U[2].hotelName]})," "]}):null}),(0,o.jsxs)(s.ZP,{container:!0,spacing:1,children:[(0,o.jsx)(s.ZP,{item:!0,xs:6,children:U[2]?(0,o.jsxs)("p",{style:{textAlign:"left",marginLeft:15,color:"black",fontSize:21,textDecoration:"none"},children:[" ",(0,o.jsx)("b",{children:"From:"})," $",Math.round(U[2].priceFrom)," USD "]}):null}),(0,o.jsx)(s.ZP,{item:!0,xs:6,children:U[2]?(0,o.jsxs)("p",{style:{textAlign:"right",marginRight:15,color:"black",fontSize:21,textDecoration:"none"},children:[" ",(0,o.jsx)("b",{})," ",U[2].stars," Star Rating"]}):null})]})]}),(0,o.jsx)(s.ZP,{container:!0,spacing:1}),(0,o.jsx)(s.ZP,{item:!0,xs:12,children:U[3]?(0,o.jsxs)("p",{style:{textAlign:"center",color:"#FDF5DF",fontSize:21,textDecoration:"none"},children:[" ",(0,o.jsxs)("b",{children:[" ",U[3].hotelName]})," "]}):null}),(0,o.jsxs)(s.ZP,{container:!0,spacing:1,children:[(0,o.jsx)(s.ZP,{item:!0,xs:6,children:U[3]?(0,o.jsxs)("p",{style:{textAlign:"left",marginLeft:15,color:"#FDF5DF",fontSize:21,textDecoration:"none"},children:[" ",(0,o.jsx)("b",{children:"From:"})," $",Math.round(U[3].priceFrom)," USD "]}):null}),(0,o.jsx)(s.ZP,{item:!0,xs:6,children:U[3]?(0,o.jsxs)("p",{style:{textAlign:"right",marginRight:15,color:"#FDF5DF",fontSize:21,textDecoration:"none"},children:[" ",(0,o.jsx)("b",{})," ",U[3].stars," Star Rating"]}):null})]}),(0,o.jsxs)(d.Z,{style:{backgroundColor:"#FDF5DF"},sx:{border:3,borderColor:"#AF8C72",borderRadius:"0px"},children:[(0,o.jsx)(s.ZP,{container:!0,spacing:1}),(0,o.jsx)(s.ZP,{item:!0,xs:12,children:U[4]?(0,o.jsxs)("p",{style:{textAlign:"center",color:"black",fontSize:21,textDecoration:"none"},children:[" ",(0,o.jsxs)("b",{children:[" ",U[4].hotelName]})," "]}):null}),(0,o.jsxs)(s.ZP,{container:!0,spacing:1,children:[(0,o.jsx)(s.ZP,{item:!0,xs:6,children:U[4]?(0,o.jsxs)("p",{style:{textAlign:"left",marginLeft:15,color:"black",fontSize:21,textDecoration:"none"},children:[" ",(0,o.jsx)("b",{children:"From:"})," $",Math.round(U[4].priceFrom)," USD "]}):null}),(0,o.jsx)(s.ZP,{item:!0,xs:6,children:U[4]?(0,o.jsxs)("p",{style:{textAlign:"right",marginRight:15,color:"black",fontSize:21,textDecoration:"none"},children:[" ",(0,o.jsx)("b",{})," ",U[4].stars," Star Rating"]}):null})]})]})]})})})}),(0,o.jsx)(s.ZP,{item:!0,xs:6,children:(0,o.jsx)(d.Z,{style:{backgroundColor:"#F3CBBD"},sx:{fontFamily:"Optima",display:"flex",border:4,borderColor:"black",borderRadius:"16px"},children:(0,o.jsx)(x.Z,{sx:{width:"100%"},children:(0,o.jsxs)(h.Z,{gutterBottom:!0,variant:"h7",component:"div",children:[(0,o.jsx)("h1",{style:{color:"black",fontSize:40,fontWeight:"bold",fontFamily:"Fantasy"},align:"center",children:"Cheapest Flights"}),(0,o.jsx)(d.Z,{style:{backgroundColor:"#FDF5DF"},sx:{display:"flex",border:3,borderColor:"#AF8C72",borderRadius:"0px"},children:(0,o.jsxs)(s.ZP,{container:!0,spacing:1,children:[(0,o.jsxs)(s.ZP,{item:!0,xs:6,children:[P.data?(0,o.jsxs)("p",{style:{marginLeft:15,color:"black",fontSize:21,textDecoration:"none"},children:[" ",(0,o.jsx)("b",{children:"Origin Airport:"})," ",P.data[0].origin," "]}):null,P.data?(0,o.jsxs)("p",{style:{marginLeft:15,color:"black",fontSize:21,textDecoration:"none"},children:[" ",(0,o.jsx)("b",{children:"Price:"})," $",P.data[0].value,".00 USD"]}):null,P.data?(0,o.jsxs)("p",{style:{marginLeft:15,color:"black",fontSize:21,textDecoration:"none"},children:[" ",(0,o.jsx)("b",{children:"Depart Date:"})," ",u(P.data[0].depart_date)]}):null]}),(0,o.jsxs)(s.ZP,{item:!0,xs:6,children:[P.data?(0,o.jsxs)("p",{style:{marginLeft:15,color:"black",fontSize:21,textDecoration:"none"},children:[" ",(0,o.jsx)("b",{children:"Destination Airport:"})," ",P.data[0].destination]}):null,P.data?(0,o.jsxs)("p",{style:{marginLeft:15,color:"black",fontSize:21,textDecoration:"none"},children:[" ",(0,o.jsx)("b",{children:"Duration:"})," ",n(P.data[0].duration)]}):null,P.data?(0,o.jsxs)("p",{style:{marginLeft:15,color:"black",fontSize:21,textDecoration:"none"},children:[" ",(0,o.jsx)("b",{children:"Return Date:"})," ",u(P.data[0].return_date)]}):null]})]})}),(0,o.jsxs)(s.ZP,{container:!0,spacing:1,children:[(0,o.jsxs)(s.ZP,{item:!0,xs:6,children:[P.data?(0,o.jsxs)("p",{style:{marginLeft:15,color:"black",fontSize:21,textDecoration:"none"},children:[" ",(0,o.jsx)("b",{children:"Origin Airport:"}),"  ",P.data[1].origin," "]}):null,P.data?(0,o.jsxs)("p",{style:{marginLeft:15,color:"black",fontSize:21,textDecoration:"none"},children:[" ",(0,o.jsx)("b",{children:"Price:"}),"$",P.data[1].value,".00 USD"]}):null,P.data?(0,o.jsxs)("p",{style:{marginLeft:15,color:"black",fontSize:21,textDecoration:"none"},children:[" ",(0,o.jsx)("b",{children:"Depart Date:"}),"  ",u(P.data[1].depart_date)]}):null]}),(0,o.jsxs)(s.ZP,{item:!0,xs:6,children:[P.data?(0,o.jsxs)("p",{style:{marginLeft:15,color:"black",fontSize:21,textDecoration:"none"},children:[" ",(0,o.jsx)("b",{children:"Destination Airport:"}),"  ",P.data[1].destination]}):null,P.data?(0,o.jsxs)("p",{style:{marginLeft:15,color:"black",fontSize:21,textDecoration:"none"},children:[" ",(0,o.jsx)("b",{children:"Duration:"})," ",n(P.data[1].duration)]}):null,P.data?(0,o.jsxs)("p",{style:{marginLeft:15,color:"black",fontSize:21,textDecoration:"none"},children:[" ",(0,o.jsx)("b",{children:"Return Date:"})," ",u(P.data[1].return_date)]}):null]})]}),(0,o.jsx)(d.Z,{style:{backgroundColor:"#FDF5DF"},sx:{display:"flex",border:3,borderColor:"#AF8C72",borderRadius:"0px"},children:(0,o.jsxs)(s.ZP,{container:!0,spacing:1,children:[(0,o.jsxs)(s.ZP,{item:!0,xs:6,children:[P.data?(0,o.jsxs)("p",{style:{marginLeft:15,color:"black",fontSize:21,textDecoration:"none"},children:[" ",(0,o.jsx)("b",{children:"Origin Airport:"}),"  ",P.data[2].origin," "]}):null,P.data?(0,o.jsxs)("p",{style:{marginLeft:15,color:"black",fontSize:21,textDecoration:"none"},children:[" ",(0,o.jsx)("b",{children:"Price:"})," $",P.data[2].value,".00 USD"]}):null,P.data?(0,o.jsxs)("p",{style:{marginLeft:15,color:"black",fontSize:21,textDecoration:"none"},children:[" ",(0,o.jsx)("b",{children:"Depart Date:"}),"  ",u(P.data[2].depart_date)]}):null]}),(0,o.jsxs)(s.ZP,{item:!0,xs:6,children:[P.data?(0,o.jsxs)("p",{style:{marginLeft:15,color:"black",fontSize:21,textDecoration:"none"},children:[" ",(0,o.jsx)("b",{children:"Destination Airport:"}),"  ",P.data[2].destination]}):null,P.data?(0,o.jsxs)("p",{style:{marginLeft:15,color:"black",fontSize:21,textDecoration:"none"},children:[" ",(0,o.jsx)("b",{children:"Duration:"})," ",n(P.data[2].duration)]}):null,P.data?(0,o.jsxs)("p",{style:{marginLeft:15,color:"black",fontSize:21,textDecoration:"none"},children:[" ",(0,o.jsx)("b",{children:"Return Date:"})," ",u(P.data[2].return_date)]}):null]})]})}),(0,o.jsxs)(s.ZP,{container:!0,spacing:1,children:[(0,o.jsxs)(s.ZP,{item:!0,xs:6,children:[P.data?(0,o.jsxs)("p",{style:{marginLeft:15,color:"black",fontSize:21,textDecoration:"none"},children:[" ",(0,o.jsx)("b",{children:"Origin Airport:"}),"  ",P.data[3].origin," "]}):null,P.data?(0,o.jsxs)("p",{style:{marginLeft:15,color:"black",fontSize:21,textDecoration:"none"},children:[" ",(0,o.jsx)("b",{children:"Price:"})," $",P.data[3].value,".00 USD"]}):null,P.data?(0,o.jsxs)("p",{style:{marginLeft:15,color:"black",fontSize:21,textDecoration:"none"},children:[" ",(0,o.jsx)("b",{children:"Depart Date:"}),"  ",u(P.data[3].depart_date)]}):null]}),(0,o.jsxs)(s.ZP,{item:!0,xs:6,children:[P.data?(0,o.jsxs)("p",{style:{marginLeft:15,color:"black",fontSize:21,textDecoration:"none"},children:[" ",(0,o.jsx)("b",{children:"Destination Airport:"}),"  ",P.data[3].destination]}):null,P.data?(0,o.jsxs)("p",{style:{marginLeft:15,color:"black",fontSize:21,textDecoration:"none"},children:[" ",(0,o.jsx)("b",{children:"Duration:"})," ",n(P.data[3].duration)]}):null,P.data?(0,o.jsxs)("p",{style:{marginLeft:15,color:"black",fontSize:21,textDecoration:"none"},children:[" ",(0,o.jsx)("b",{children:"Return Date:"})," ",u(P.data[3].return_date)]}):null]})]}),(0,o.jsx)(d.Z,{style:{backgroundColor:"#FDF5DF"},sx:{display:"flex",border:3,borderColor:"#AF8C72",borderRadius:"0px"},children:(0,o.jsxs)(s.ZP,{container:!0,spacing:1,children:[(0,o.jsxs)(s.ZP,{item:!0,xs:6,children:[P.data?(0,o.jsxs)("p",{style:{marginLeft:15,color:"black",fontSize:21,textDecoration:"none"},children:[" ",(0,o.jsx)("b",{children:"Origin Airport:"}),"  ",P.data[4].origin," "]}):null,P.data?(0,o.jsxs)("p",{style:{marginLeft:15,color:"black",fontSize:21,textDecoration:"none"},children:[" ",(0,o.jsx)("b",{children:"Price:"})," $",P.data[4].value,".00 USD"]}):null,P.data?(0,o.jsxs)("p",{style:{marginLeft:15,color:"black",fontSize:21,textDecoration:"none"},children:[" ",(0,o.jsx)("b",{children:"Depart Date:"}),"  ",u(P.data[4].depart_date)]}):null]}),(0,o.jsxs)(s.ZP,{item:!0,xs:6,children:[P.data?(0,o.jsxs)("p",{style:{marginLeft:15,color:"black",fontSize:21,textDecoration:"none"},children:[" ",(0,o.jsx)("b",{children:"Destination Airport:"}),"  ",P.data[4].destination]}):null,P.data?(0,o.jsxs)("p",{style:{marginLeft:15,color:"black",fontSize:21,textDecoration:"none"},children:[" ",(0,o.jsx)("b",{children:"Duration:"})," ",n(P.data[4].duration)]}):null,P.data?(0,o.jsxs)("p",{style:{marginLeft:15,color:"black",fontSize:21,textDecoration:"none"},children:[" ",(0,o.jsx)("b",{children:"Return Date:"})," ",u(P.data[4].return_date)]}):null]})]})}),(0,o.jsx)(s.ZP,{container:!0,sx:{p:2},spacing:0,display:"flex",justifyContent:"center",alignItems:"justify-end",children:(0,o.jsx)(c.Z,{rel:"noopener",href:"https://www.skyscanner.com/",color:"success",target:"_blank",variant:"contained",children:"Search"})})]})})})}),(0,o.jsx)(s.ZP,{container:!0,sx:{p:3},spacing:0,display:"flex",justifyContent:"center",children:(0,o.jsx)(c.Z,{onClick:function(){return b().back()},style:{maxWidth:"100px",maxHeight:"100px",minWidth:"100px",minHeight:"100px"},rel:"noopener",justifyContent:"center",color:"success",target:"_blank",children:(0,o.jsx)(m.Z,{style:{maxWidth:"100px",maxHeight:"100px",minWidth:"100px",minHeight:"100px"}})})})]})}}},function(e){e.O(0,[9774,7876,2888,179],function(){return e(e.s=759)}),_N_E=e.O()}]);