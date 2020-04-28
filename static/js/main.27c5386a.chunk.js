(this["webpackJsonpburger-builder"]=this["webpackJsonpburger-builder"]||[]).push([[0],[,function(e,t,a){e.exports={BreadBottom:"BurgerIngredient_BreadBottom__2US69",BreadTop:"BurgerIngredient_BreadTop__3Y4-R",Seeds1:"BurgerIngredient_Seeds1__J6vUJ",Seeds2:"BurgerIngredient_Seeds2__2Ylex",Meat:"BurgerIngredient_Meat__3flwI",Cheese:"BurgerIngredient_Cheese__3rOTJ",Salad:"BurgerIngredient_Salad__KLnhy",Bacon:"BurgerIngredient_Bacon__1KK6n"}},,,,,,,,function(e,t,a){e.exports=a.p+"static/media/app-logo.b8503d26.png"},,function(e,t,a){e.exports=a(30)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),i=a.n(c),l=(a(16),a(3)),s=a(5),o=a(4),d=(a(17),a(18),a(2)),u=a(8),m=(a(19),a(20),function(e){return r.a.createElement("div",{className:"Aux"},e.children)}),g=(a(21),function(e){var t=e.clicked;return e.show?r.a.createElement("div",{className:"Backdrop",onClick:t}):null});g.defaultProps={shouldShow:!1};var v=g,f=function(e){var t=e.clicked,a=e.show;return r.a.createElement(m,null,r.a.createElement(v,{show:a,clicked:t}),r.a.createElement("div",{className:"Modal",style:{transform:a?"translate(0)":"translateY(-100vh)"}},e.children))};f.defaultProps={show:!1};var E=f,h=a(10),p=(a(22),a(1)),b=a.n(p),k=function(e){var t;switch(e.type){case"bread-top":t=r.a.createElement("div",{className:b.a.BreadTop},r.a.createElement("div",{className:b.a.Seeds1}),r.a.createElement("div",{className:b.a.Seeds2}));break;case"bread-bottom":t=r.a.createElement("div",{className:b.a.BreadBottom});break;case"meat":t=r.a.createElement("div",{className:b.a.Meat});break;case"cheese":t=r.a.createElement("div",{className:b.a.Cheese});break;case"bacon":t=r.a.createElement("div",{className:b.a.Bacon});break;case"salad":t=r.a.createElement("div",{className:b.a.Salad});break;default:t=null}return t},O=function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(h.a)(Array(e.ingredients[t])).map((function(e,a){return r.a.createElement(k,{type:t,key:t+a})}))})).reduce((function(e,t){return e.concat(t)}),[]);return 0===t.length&&(t=r.a.createElement("p",null,"please start adding ingredients")),r.a.createElement("div",{className:"Burger"},r.a.createElement(k,{type:"bread-top"}),t,r.a.createElement(k,{type:"bread-bottom"}))},B=function(e){var t=e.totalCost,a=e.ingredients;return r.a.createElement("div",{className:"OrderSummary"},r.a.createElement("p",null,"Oh Yeah! You are ordering a Burger with the following items:"),r.a.createElement("ol",null,Object.keys(a).map((function(e){return r.a.createElement("li",{key:e},e,": ",a[e])}))),r.a.createElement("strong",null,"Your Total Cost: ",t," TK"))},N=(a(23),a(24),function(e){var t=e.addIngredients,a=e.removeIngredients;return r.a.createElement("div",{className:"SingleController"},r.a.createElement("span",{className:"Label"},e.name),r.a.createElement("button",{onClick:function(){return a(e.name)},className:"Less"},"Less"),r.a.createElement("button",{onClick:function(){return t(e.name)},className:"More"},"More"),"(",e.price?e.price:0," tk / item)")}),C=function(e){var t=e.totalCost,a=e.placeOrder,n=e.addIngredients,c=e.ingredientPrices,i=e.removeIngredients;return r.a.createElement(m,null,r.a.createElement("p",null,"Total Cost: ",r.a.createElement("strong",null,t," tk.")),r.a.createElement("div",{className:"IngredientController"},Object.keys(e.ingredientPrices).map((function(e,t){return r.a.createElement(N,{key:e+t,name:e,addIngredients:n,removeIngredients:i,price:c[e]})})),r.a.createElement("button",{onClick:a},"Place Order")))};C.defaultProps={cost:0};var I=C,_=function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={ingredients:{bacon:0,salad:0,cheese:0,meat:0},ingredientPrices:{bacon:20,salad:10,cheese:30,meat:100},totalCost:10,isPlacedOrder:!1},e.addIngredients=function(t){var a=Object(d.a)({},e.state.ingredients),n=Object(d.a)({},e.state.ingredientPrices);a[t]=a[t]+1;var r=n[t];e.setState({ingredients:a,totalCost:e.state.totalCost+r})},e.removeIngredients=function(t){var a=Object(d.a)({},e.state.ingredients),n=Object(d.a)({},e.state.ingredientPrices);if(!(a[t]<=0)){a[t]=a[t]-1;var r=n[t];e.setState({ingredients:a,totalCost:e.state.totalCost-r})}},e.placeOrder=function(){var t=0,a=!0,n=Object(d.a)({},e.state.ingredients);Object.values(n).forEach((function(e){return t+=e})),0===t&&(a=!1),e.setState({isPlacedOrder:a})},e.cancelOrder=function(){e.setState({isPlacedOrder:!1})},e}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"BurgerBuilder"},r.a.createElement(O,{ingredients:this.state.ingredients}),r.a.createElement(E,{show:this.state.isPlacedOrder,clicked:this.cancelOrder},r.a.createElement(B,{ingredients:this.state.ingredients,totalCost:this.state.totalCost})),r.a.createElement(I,{ingredientPrices:this.state.ingredientPrices,addIngredients:this.addIngredients,removeIngredients:this.removeIngredients,totalCost:this.state.totalCost,placeOrder:this.placeOrder}))}}]),a}(n.Component),y=(a(25),a(26),a(9)),w=a.n(y),S=function(e){return r.a.createElement("div",{className:"Logo",style:{height:e.height}},r.a.createElement("img",{src:w.a,alt:"BurgerLogo"}))},j=(a(27),a(28),function(e){var t=e.link,a=e.active;return console.log("active: ",a),r.a.createElement("li",{className:"NavigationItem"},r.a.createElement("a",{href:t,className:a?"active":null},e.children))}),P=function(e){return r.a.createElement("ul",{className:"NavigationItems"},r.a.createElement(j,{link:"/",active:!0},"Burger Builder"),r.a.createElement(j,{link:"/"},"Checkout"))},M=function(e){return r.a.createElement("div",{className:"Toolbar"},r.a.createElement("div",null,"MENU"),r.a.createElement(S,{height:"80%"}),r.a.createElement(P,null))},T=(a(29),function(e){return r.a.createElement("div",{className:"SideDrawer"},r.a.createElement(S,{height:"15%"}),r.a.createElement(P,null))}),L=function(){return r.a.createElement("div",{className:"Layout"},r.a.createElement(M,null),r.a.createElement(T,null),r.a.createElement(_,null))},Y=function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).render=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(L,null))},e}return a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[11,1,2]]]);
//# sourceMappingURL=main.27c5386a.chunk.js.map