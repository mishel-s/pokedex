(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1:function(e,t,n){e.exports={pokemonCard:"_2AkdGGssd9H03qFmFyQh8",pokemonDescription:"_1fJL4PIBtLimlbIvnl101G",pokemonBigInfo:"DcDO_LAxRqG7GDq7RR5Ex",pokemonBg:"_1Vy-fwwc2ENda_b093I7-a",pokemonMain:"_1zHA4p357EAQ3Hq8io7DtJ",pokemonClose:"_1XPysRZ9e5zoknRk2GYb0v",pokemonClose_X:"_3ROBbdgksSGNKzA15gm-a_",pokemonInfo_logo:"_2t3czCHHGAHqKYhGGIT8II",pokemonInfo:"ZjS5cfqtRGZ4nGp9WCSMb",pokemonInfo_details:"_2lByAqoMob-rtu0LcanfAD",pokemonInfo_details__name:"_7nRl7V2gHmaauF-oAtz3"}},11:function(e,t,n){e.exports={itemsPerPage:"_3bn_E4_Cghi_RnF5_Z-Uox",bt:"_1lfL6QoSxVQs6iYHYOzrrU",active:"_2I588p8DerdMdc_QMdN0_l"}},12:function(e,t,n){e.exports={content:"mNspQC-UH7B1ovcvsGCMH",pokemonsCards:"_1g34eRnyKOdx2B1mma8e65",nopokemons:"_21CUgSvBFtCVb32ab83f_n"}},18:function(e,t,n){e.exports={searchName:"_2SulnnTWscYkOwWgC9qGKP"}},28:function(e,t,n){e.exports=n.p+"static/media/logo.5fc17fd4.png"},29:function(e,t,n){e.exports={filtersPanel:"_2MViAHM1wHmrwc87asgv94"}},33:function(e,t,n){e.exports={tagsPanel:"_3JXS8WRpD631pkVHm6s31j"}},35:function(e,t,n){e.exports={spinnerThin:"_3EFKhj6o9p3lgyh2eJX7Lq"}},38:function(e,t,n){e.exports=n(94)},43:function(e,t,n){},45:function(e,t,n){},55:function(e,t,n){e.exports=n.p+"static/media/pokemon.de945d7a.jpeg"},92:function(e,t,n){e.exports={App:"_3Ge-CIdMbROGJFA06DTnds","App-logo":"S1LueT9M4QSOTquar826M","App-logo-spin":"_2zbnzgnYyXt1P54dmldOdh","App-header":"_1mzDF1MhAg2ItVJGFPVYW0","App-link":"_2IVtctMzgDks-Pbg2govDv"}},94:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(27),s=n.n(r),i=(n(43),n(2)),c=n(3),l=n(5),m=n(4),p=n(6),u=n(28),d=n.n(u),f=(n(45),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("header",null,o.a.createElement("img",{src:d.a,alt:"logo"})))}}]),t}(a.Component)),h=n(29),k=n.n(h),g=n(11),y=n.n(g),v=n(8),E=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(m.a)(t).call(this,e))).getStyles=function(e){return n.state.active===e?y.a.active:""},n.state={active:"bt_10",value:"10"},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return this.props.setItems(this.state.value),o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:y.a.itemsPerPage},o.a.createElement("span",null,"Items per page:"),o.a.createElement("button",{id:"bt_10",value:"10",onClick:function(t){e.setState({active:t.target.id,value:t.target.value}),e.props.setItems(e.state.value)},className:y.a.bt+" "+this.getStyles("bt_10")},"10"),o.a.createElement("button",{id:"bt_20",value:"20",onClick:function(t){e.setState({active:t.target.id,value:t.target.value}),e.props.setItems(e.state.value)},className:y.a.bt+" "+this.getStyles("bt_20")},"20"),o.a.createElement("button",{id:"bt_50",value:"50",onClick:function(t){e.setState({active:t.target.id,value:t.target.value}),e.props.setItems(e.state.value)},className:y.a.bt+" "+this.getStyles("bt_50")},"50")))}}]),t}(a.Component),_=Object(v.b)(function(e){return{itemsPerPage:e.itemsPerPage}},function(e){return{setItems:function(t){e({type:"SET_ITEMS_PER_PAGE",payload:t})}}})(E),b=n(18),O=n.n(b),P=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(m.a)(t).call(this,e))).getStyles=function(e){return n.state.active===e?O.a.active:""},n.state={active:"bt_10"},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:O.a.searchName},o.a.createElement("span",null,"Search by Name:"),o.a.createElement("input",{id:"searchName",type:"text",onChange:function(t){e.props.findPokemons(t.target.value.toLowerCase())},placeholder:"Type name"})))}}]),t}(a.Component),I=Object(v.b)(function(e){return{itemsPerPage:e.itemsPerPage,pokemonsTypes:e.pokemonsTypes,pokemonsInfo:e.pokemonsInfo,checkedTypes:e.checkedTypes,filterPokemons:e.filterPokemons}},function(e){return{findPokemons:function(t){e({type:"FIND_POKEMONS",payload:t})}}})(P),T=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:k.a.filtersPanel},o.a.createElement(I,null),o.a.createElement(_,null)))}}]),t}(a.Component),N=n(33),j=n.n(N),C=function(){return fetch("https://pokeapi.co/api/v2/type/").then(function(e){return e.json()}).catch(function(e){console.log("ERROR:"+e)})},S=function(e,t){return e.filter(function(e){return"show"==function(e,t){for(var n=[],a=function(a){var o=[];e.forEach(function(e){e.type.name==t[a]?o.push("show"):o.push("hide")}),o.includes("show")?n.push("show"):n.push("hide")},o=0;o<t.length;o++)a(o);return n.includes("hide")?"hide":"show"}(e.types,t)})},F=[],w=function(e){var t=e.types,n=e.addTypeToList;e.removeTypeFromList;return o.a.createElement("ul",null,t.map(function(t){return o.a.createElement("li",{key:t.toString(),id:t,onClick:function(t){!function(e){var t=document.getElementById(e.target.id);"hide"==e.target.className||""==e.target.className?(t.className="show",t.style.backgroundColor="#2F8FD8",F.push(e.target.id)):(t.className="hide",t.style.backgroundColor="transparent",F=F.filter(function(t){return t!==e.target.id}))}(t),e.filterContentPokemons(S(e.pokemonsInfo,F)),n(F)}},t)}))},M=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={types:[]},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=[];C().then(function(n){for(var a=0;a<n.results.length;a++)t.push(n.results[a].name);e.setState({types:t})})}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:j.a.tagsPanel},"Find by Type:",o.a.createElement(w,{pokemonsInfo:this.props.pokemonsInfo,types:this.state.types,filterContentPokemons:this.props.filterContentPokemons,addTypeToList:this.props.addTypeToList,removeTypeFromList:this.props.removeTypeFromList})),this.props.getArrayPokemonsTypes(this.state.types))}}]),t}(a.Component),A=Object(v.b)(function(e){return{pokemonsInfo:e.pokemonsInfo.filter(function(t){return t.name.includes(e.findPokemons)}),pokemonsTypes:e.pokemonsTypes,checkedTypes:e.checkedTypes,filterPokemons:e.filterPokemons}},function(e){return{getArrayPokemonsTypes:function(t){e({type:"GET_ARRAY_POKEMONS_TYPES",payload:t})},filterContentPokemons:function(t){e({type:"FILTER_POKEMONS",payload:t})},addTypeToList:function(t){e({type:"ADD_TYPE_TO_LIST",payload:t})},removeTypeFromList:function(t){e({type:"REMOVE_TYPE_FROM_LIST",payload:t})}}})(M),R=n(12),D=n.n(R),L=[],G=function(){return function(){for(var e=1;e<=50;e++)L.push(fetch("https://pokeapi.co/api/v2/pokemon/"+e+"/").then(function(e){return e.json()}))}(),function(){var e=[];return Promise.all(L).then(function(t){return console.log(t),t.forEach(function(t){e.push(t)}),console.log(e),e}).catch(function(e){console.log("ERROR:"+e)})}()},B=(n(55),n(1)),x=n.n(B),H=function(e){for(var t=[],n=0;n<e.length;n++)t.push(e[n].type.name);return t},K=function(e){return e.types.join(", ")},Y=function(e){var t=document.getElementById(e.id),n=document.getElementById(e.id+"_Bg");t.style.display="flex",n.style.right="0"},z=function(e){var t=document.getElementById(e.id),n=document.getElementById(e.id+"_Bg");t.style.display="none",n.style.right="100%"};function q(e){var t=e.pokemon,n=t.name,a=t.id,r=t.weight,s=t.height,i=H(e.pokemon.types),c=e.pokemon.sprites.front_default,l="https://pokeapi.co/api/v2/pokemon/"+e.pokemon.id+"/";return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{onClick:function(){Y(e.pokemon)},className:x.a.pokemonCard},o.a.createElement("img",{src:c,alt:"pokemonLogo"}),o.a.createElement("div",{className:x.a.pokemonDescription},o.a.createElement("div",{className:x.a.pokemonDescription_name},n.toUpperCase()),o.a.createElement("div",{className:x.a.pokemonDescription_type},"Type: ",o.a.createElement(K,{types:i}),"."))),o.a.createElement("div",{id:a,className:x.a.pokemonBigInfo},o.a.createElement("div",{id:a+"_Bg",className:x.a.pokemonBg}),o.a.createElement("div",{id:a+"_Main",className:x.a.pokemonMain},o.a.createElement("div",{className:x.a.pokemonClose},o.a.createElement("div",{className:x.a.pokemonClose_X,onClick:function(){z(e.pokemon)}},"X")),o.a.createElement("div",{className:x.a.pokemonInfo},o.a.createElement("div",{className:x.a.pokemonInfo_logo},o.a.createElement("img",{src:c,alt:"pokemonLogo"})),o.a.createElement("div",{className:x.a.pokemonInfo_details},o.a.createElement("p",{className:x.a.pokemonInfo_details__name},o.a.createElement("b",null,n.toUpperCase())),o.a.createElement("p",{className:x.a.pokemonInfo_details__types},o.a.createElement("b",null,"Type:")," ",o.a.createElement(K,{types:i})),o.a.createElement("p",{className:x.a.pokemonInfo_details__weight},o.a.createElement("b",null,"Weight:")," ",r),o.a.createElement("p",{className:x.a.pokemonInfo_details__height},o.a.createElement("b",null,"Height:")," ",s),o.a.createElement("p",{className:x.a.pokemonInfo_details__link},o.a.createElement("b",null,"Link:")," ",o.a.createElement("a",{href:l},l)))))))}var V=function(e){var t=e.itemsPerPage,n=e.pokemons,a=[];if(console.log(n.length),n.length){for(var r=0;r<t;r++)void 0!=n[r]&&a.push(o.a.createElement(q,{key:n[r].name.toString(),pokemon:n[r]}));return o.a.createElement(o.a.Fragment,null,a)}return o.a.createElement(o.a.Fragment,null,"NO INFORMATION")},W=n(34),J=n.n(W),Q=n(35),X=n.n(Q),U=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:X.a.spinnerThin},o.a.createElement(J.a,{size:70,borderSize:3,duration:2e3}))}}]),t}(a.Component),Z=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={pokemonsInfo:[]},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;G().then(function(t){e.setState({pokemonsInfo:t}),e.props.getArrayPokemonsInfo(t)})}},{key:"render",value:function(){return 0==this.props.checkedTypes&&this.props.pokemonsInfo.length?o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:D.a.content},o.a.createElement("div",{id:"pokemonsCards",className:D.a.pokemonsCards},o.a.createElement(V,{itemsPerPage:this.props.itemsPerPage,pokemons:this.props.pokemonsInfo})))):this.props.filterPokemons.length?o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:D.a.content},o.a.createElement("div",{id:"pokemonsCards",className:D.a.pokemonsCards},o.a.createElement(V,{itemsPerPage:this.props.itemsPerPage,pokemons:this.props.filterPokemons})))):0==this.props.filterPokemons.length&&this.props.checkedTypes.length||this.props.findPokemons.length>0&&0==this.props.pokemonsInfo.length?o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:D.a.nopokemons},"NO POKEMONS")):o.a.createElement(U,null)}}]),t}(a.Component),$=Object(v.b)(function(e){return{itemsPerPage:e.itemsPerPage,pokemonsTypes:e.pokemonsTypes,pokemonsInfo:e.pokemonsInfo.filter(function(t){return t.name.includes(e.findPokemons)}),checkedTypes:e.checkedTypes,filterPokemons:e.filterPokemons.filter(function(t){return t.name.includes(e.findPokemons)}),findPokemons:e.findPokemons}},function(e){return{getArrayPokemonsInfo:function(t){e({type:"POKEMONS_INFO",payload:t})}}})(Z),ee=(n(92),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(f,null),o.a.createElement(T,null),o.a.createElement(A,null),o.a.createElement($,null))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var te=n(10),ne=n(36),ae=Object(te.combineReducers)({itemsPerPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_ITEMS_PER_PAGE":return t.payload;default:return e}},pokemonsTypes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ARRAY_POKEMONS_TYPES":return t.payload;default:return e}},pokemonsInfo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"POKEMONS_INFO":return t.payload;default:return e}},checkedTypes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TYPE_TO_LIST":return t.payload;default:return e}},filterPokemons:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FILTER_POKEMONS":return t.payload;default:return e}},findPokemons:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FIND_POKEMONS":return t.payload;default:return e}}}),oe=n(37);s.a.render(o.a.createElement(v.a,{store:Object(te.createStore)(ae,Object(oe.composeWithDevTools)(Object(te.applyMiddleware)(ne.a)))},o.a.createElement(ee,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[38,2,1]]]);
//# sourceMappingURL=main.e1f35a73.chunk.js.map