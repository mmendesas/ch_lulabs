(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e,t,n){e.exports=n(51)},38:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(12),o=n.n(c),s=n(16),i=n(3),l=n(2),u=n(9),h=n.n(u),d=n(15),m=n(24),p=n.n(m),f="https://viacep.com.br/ws",g="https://maps.googleapis.com/maps/api/geocode/json",b="AIzaSyBcAqRGOwKrY4l-yrUi1CNu7k6F2fDF8U0";function v(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return p()("".concat(f,"/").concat(e,"/json/?callback=myfn")).then(function(e){return e.json()}).then(function(e){return{cep:e.cep,logradouro:e.logradouro,bairro:e.bairro,localidade:e.localidade,uf:e.uf}}).catch(function(e){throw new Error("Error getting ViaCEP data",e)})}function E(e){var t=function(e,t){return e+=(-1===e.indexOf("?")?"?":"&")+function(e){return Object.keys(e).map(function(t){return"".concat(encodeURIComponent(t),"=").concat(encodeURIComponent(e[t]))}).join("&")}(t)}(g,Object(l.a)({},e,{key:b}));return fetch(t).then(function(e){return e.json()}).then(function(e){return"OK"===e.status?e.results[0].geometry.location:{lat:0,lng:0}}).catch(function(e){throw new Error("Error getting GoogleMaps API data",e)})}function w(e){return O.apply(this,arguments)}function O(){return(O=Object(d.a)(h.a.mark(function e(t){var n,a,r;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v(t);case 2:return n=e.sent,e.next=5,E({address:t});case 5:return a=e.sent,r=Object(l.a)({},n,a),e.abrupt("return",r);case 8:case"end":return e.stop()}},e)}))).apply(this,arguments)}var j="REQUEST_CEP",C="RECEIVE_CEP",y="ADD_ERROR",k="REMOVE_ERROR";function _(e){return{type:j,cep:e}}function N(e){return{type:C,payload:e}}var S=function(e){return function(){var t=Object(d.a)(h.a.mark(function t(n){return h.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n(_(e)),n({type:k}),w(e).then(function(e){return n(N(e))}).catch(function(e){return n({type:y,error:e})});case 3:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isFetching:!1,address:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return Object(l.a)({},e,{isFetching:!0});case C:return Object(l.a)({},e,{isFetching:!1,address:t.payload});case y:return Object(l.a)({},e,{isFetching:!1});default:return e}},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{message:""},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return Object(l.a)({},e,{message:t.error.message});case k:return Object(l.a)({},e,{message:""});default:return e}},I=Object(i.combineReducers)({info:M,error:R}),P=n(25),D=n(26),F=function(e){return function(t){return function(n){console.group(n.type),console.log("%cThe action: ","color: #1197E3",n);var a=t(n);return console.log("%cThe new state: ","color: #bada55",e.getState()),console.groupEnd(),a}}},x=Object(D.composeWithDevTools)(Object(i.applyMiddleware)(P.a,F));n(38);var A=n(4),W=n(5),U=n(7),T=n(6),B=n(8),G=n(14),K=function(e){function t(){var e,n;Object(A.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(U.a)(this,(e=Object(T.a)(t)).call.apply(e,[this].concat(r)))).state={cep:""},n.handleChange=function(e){var t=e.target,a=t.name,r=t.value.replace(/[^0-9]/g,"");n.setState(function(){return Object(G.a)({},a,r)})},n.submitForm=function(e){e.preventDefault(),n.props.onSearch(n.state.cep),n.setState(function(){return{cep:""}})},n}return Object(B.a)(t,e),Object(W.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"search"},r.a.createElement("h2",{className:"search__title"},"Consultar"),r.a.createElement("form",{onSubmit:this.submitForm},r.a.createElement("label",{className:"search__label"},"CEP"),r.a.createElement("input",{type:"text",placeholder:"02050-010",name:"cep","aria-label":"search",className:"search__text",value:this.state.cep,onChange:this.handleChange}),r.a.createElement("button",{type:"submit",className:"search__button"},"Buscar")))}}]),t}(a.Component),V=function(e){var t=e.visible,n=e.onCloseClick,a=e.children;return r.a.createElement("section",{className:t?"dialog dialog--active":"dialog"},r.a.createElement("div",{className:"close-thik",onClick:n}),a)},z=function(e){var t=e.logradouro,n=void 0===t?"address":t,a=e.bairro,c=e.localidade,o=e.uf,s=e.cep;return r.a.createElement("section",{className:"address"},r.a.createElement("h1",{className:"address__title"},n),r.a.createElement("div",{className:"address__item"},a),r.a.createElement("p",{className:"address__item"},"".concat(c,"-").concat(o)),r.a.createElement("div",{className:"address__item"},s))},J=n(13),Z={width:"100%",height:"100%"},q=function(e){function t(){var e,n;Object(A.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(U.a)(this,(e=Object(T.a)(t)).call.apply(e,[this].concat(r)))).state={showingInfoWindow:!1,activeMarker:{},selectedPlace:{},initialCenter:{lat:-12.765219,lng:-52.079634},initialZoom:4},n.onMarkerClick=function(e,t,a){return n.setState({selectedPlace:e,activeMarker:t,showingInfoWindow:!0})},n.onClose=function(){n.state.showingInfoWindow&&n.setState({showingInfoWindow:!1,activeMarker:null})},n}return Object(B.a)(t,e),Object(W.a)(t,[{key:"render",value:function(){var e=this.state,t=e.initialZoom,n=e.initialCenter,a=this.props,c=a.showMarker,o=a.google,s=a.lat,i=a.lng,l=a.logradouro;return r.a.createElement("div",{className:"map"},r.a.createElement(J.Map,{google:o,zoom:c?15:t,style:Z,initialCenter:c?{lat:s,lng:i}:n},c&&r.a.createElement(J.Marker,{onClick:this.onMarkerClick,name:l}),r.a.createElement(J.InfoWindow,{marker:this.state.activeMarker,visible:this.state.showingInfoWindow,onClose:this.onClose},r.a.createElement("div",null,r.a.createElement("h4",null,this.state.selectedPlace.name)))))}}]),t}(a.Component),L=Object(J.GoogleApiWrapper)({apiKey:b})(q),Q=function(e){function t(){var e,n;Object(A.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(U.a)(this,(e=Object(T.a)(t)).call.apply(e,[this].concat(r)))).state={showDialog:!0},n.onCloseClick=function(){n.setState(function(){return{showDialog:!1}})},n.onSearch=function(e){n.props.fetchCEP(e),n.setState(function(){return{showDialog:!0}})},n}return Object(B.a)(t,e),Object(W.a)(t,[{key:"render",value:function(){var e=this.props,t=e.info,n=t.isFetching,a=t.address,c=e.error,o=c&&""!==c.message;return r.a.createElement("div",null,r.a.createElement("h1",{className:"homepage__title"},"Consulta de Endere\xe7o"),r.a.createElement(K,{onSearch:this.onSearch}),o&&r.a.createElement("h1",{className:"error-message"},c.message),n&&r.a.createElement("h1",{className:"loading"},"Loading..."),!o&&!n&&a.cep&&r.a.createElement(V,{visible:this.state.showDialog,onCloseClick:this.onCloseClick},r.a.createElement(z,a),r.a.createElement(L,Object.assign({showMarker:!0},a))))}}]),t}(a.Component),Y=Object(s.b)(function(e){return Object(l.a)({},e)},function(e){return{fetchCEP:function(t){return e(S(t))}}})(Q);o.a.render(r.a.createElement(s.a,{store:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(i.createStore)(I,e,x)}()},r.a.createElement(Y,null)),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.c1d0629e.chunk.js.map