(this.webpackJsonpfractal_react=this.webpackJsonpfractal_react||[]).push([[0],[,,,,,,,,,,function(t,e,i){t.exports=i(22)},,,,,function(t,e,i){},,function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){"use strict";i.r(e);var n={};i.r(n),i.d(n,"QuiltFractal",(function(){return O})),i.d(n,"SierpinskiTri",(function(){return j})),i.d(n,"BoxFractal",(function(){return D})),i.d(n,"Mondrian",(function(){return x}));var r=i(2),s=i.n(r),a=i(9),h=i.n(a),o=(i(15),i(0)),u=i(1),l=i(4),c=i(3),d=i(6),p=i(5),f=Math.cos,v=Math.sin,y=function(){function t(e,i,n,r){var s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,a=!(arguments.length>5&&void 0!==arguments[5])||arguments[5],h=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null,u=arguments.length>7&&void 0!==arguments[7]?arguments[7]:null,l=arguments.length>8&&void 0!==arguments[8]?arguments[8]:1;Object(o.a)(this,t),this.x=e,this.y=i,this.w=n,this.h=r,this.toFill=a,this.lineWidth=l,this.vertices=s||this.square(),this.fillStyle=h||this.getRandomColor(),this.strokeStyle=u||this.fillStyle}return Object(u.a)(t,[{key:"square",value:function(){return[[this.x,this.y],[this.x+this.w,this.y],[this.x+this.w,this.y+this.h],[this.x,this.y+this.h]]}},{key:"getRandomColor",value:function(){return"#"+(16777216+16777215*Math.random()).toString(16).substr(1,6)}},{key:"getVertices",value:function(){return this.vertices}},{key:"fill",value:function(){return this.toFill}},{key:"getFillStyle",value:function(){return this.fillStyle}},{key:"getStrokeStyle",value:function(){return this.strokeStyle}},{key:"getLineWidth",value:function(){return this.lineWidth}},{key:"setFillStyle",value:function(t){this.fillStyle=t}},{key:"setStrokeStyle",value:function(t){this.strokeStyle=t}},{key:"rotate",value:function(t,e){if(0!==t){var i,n;null===e?(i=this.x+this.w/2,n=this.y+this.h/2):(i=e[0],n=e[1]);for(var r=[[f(t),v(t),i-(i*f(t)+n*v(t))],[-v(t),f(t),n-(n*f(t)-i*v(t))],[0,0,1]],s=0;s<this.vertices.length;s++){var a=this.vertices[s][0],h=this.vertices[s][1];this.vertices[s]=[a*r[0][0]+h*r[0][1]+1*r[0][2],a*r[1][0]+h*r[1][1]+1*r[1][2]]}}}}]),t}(),g=i(7),k=i.n(g),b=function(){function t(e,i){Object(o.a)(this,t),this.value=e,this.next=i}return Object(u.a)(t,[{key:"setNext",value:function(t){this.next=t}},{key:"setValue",value:function(t){this.value=t}},{key:"getNext",value:function(){return this.next}},{key:"getValue",value:function(){return this.value}}]),t}(),m=function(){function t(){Object(o.a)(this,t),this.length=0,this.head=null,this.current=null}return Object(u.a)(t,[{key:"isEmpty",value:function(){return 0===this.length}},{key:"tail",value:function(){return this.isEmpty()?null:this.current.getValue()}},{key:"slice",value:function(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;i||(i=this.length);var n=new t,r=0,s=!0,a=!1,h=void 0;try{for(var o,u=this[Symbol.iterator]();!(s=(o=u.next()).done);s=!0){var l=o.value;e<=r&&r<i&&n.add(l),r++}}catch(c){a=!0,h=c}finally{try{s||null==u.return||u.return()}finally{if(a)throw h}}return n}},{key:"add",value:function(t){if(this.isEmpty())this.head=new b(t,null),this.current=this.head;else{var e=new b(t,null);this.current.setNext(e),this.current=e}return++this.length}},{key:"toArray",value:function(){var t=0,e=new Array(this.length),i=!0,n=!1,r=void 0;try{for(var s,a=this[Symbol.iterator]();!(i=(s=a.next()).done);i=!0){var h=s.value;e[t++]=h}}catch(o){n=!0,r=o}finally{try{i||null==a.return||a.return()}finally{if(n)throw r}}return e}},{key:Symbol.iterator,value:k.a.mark((function t(){var e,i;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.isEmpty()){t.next=2;break}return t.abrupt("return");case 2:e=this.head;case 3:if(!e.getNext()){t.next=10;break}return i=e.getValue(),e=e.getNext(),t.next=8,i;case 8:t.next=3;break;case 10:return t.next=12,e.getValue();case 12:case"end":return t.stop()}}),t,this)}))}]),t}(),w=function(){function t(e,i,n,r){if(Object(o.a)(this,t),this.constructor===t)throw new Error("Abstract classes can't be instantiated.");this.maxDepth=n,this.points=null,this.width=e,this.height=i,this.origin=r,this.depthToPoints=new Array(11),this.recursionDepth=-1,this.setDepthToDefault()}return Object(u.a)(t,[{key:"setDepthToDefault",value:function(){this.setRecursionDepth(Math.round(this.maxDepth/2))}},{key:"setRecursionDepth",value:function(t){this.recursionDepth=t,this.setPoints()}},{key:"setDimensions",value:function(t,e){this.width=t,this.height=e,this.wipeOutDepthToPointArray(),this.setPoints()}},{key:"setPoints",value:function(){this.pointsNeedBeSet()&&(this.depthToPoints[this.getRecursionDepth()]=this.set(this.origin[0],this.origin[1],this.width,this.height))}},{key:"wipeOutDepthToPointArray",value:function(){this.depthToPoints=new Array(11)}},{key:"set",value:function(){throw new Error("Method 'set()' must be implemented.")}},{key:"pointsNeedBeSet",value:function(){return!this.depthToPoints[this.getRecursionDepth()]}},{key:"getTitle",value:function(){throw new Error("Method 'getTitle()' must be implemented.")}},{key:"getReactState",value:function(){return{title:this.getTitle(),width:this.getWidth(),height:this.getHeight(),points:this.getPoints(),recursionDepth:this.getRecursionDepth(),maxRecursionDepth:this.maxDepth}}},{key:"getPoints",value:function(){return this.depthToPoints[this.getRecursionDepth()]}},{key:"getWidth",value:function(){return this.width}},{key:"getHeight",value:function(){return this.height}},{key:"getRecursionDepth",value:function(){return this.recursionDepth}}]),t}(),O=function(t){function e(t,i,n,r){return Object(o.a)(this,e),Object(l.a)(this,Object(c.a)(e).call(this,t,i,n,[0,0]))}return Object(p.a)(e,t),Object(u.a)(e,[{key:"set",value:function(t,e,i,n){var r=Math.min(i,n),s=this.markPoints(t,e,r);return this.rotatePoints(s,0,this.getRecursionDepth()),this.rotatePoints(s,1,this.getRecursionDepth()),this.rotatePoints(s,2,this.getRecursionDepth()),this.rotatePoints(s,3,this.getRecursionDepth()),this.rotatePoints(s,4,this.getRecursionDepth())}},{key:"markPoints",value:function(t,e,i){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:new m,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;if(r>=this.recursionDepth){var s=new y(t,e,i,i,null,!1,"#afff14");return n.add(s),n}var a=.25*i,h=t+.75*i,o=e+.75*i;return n=this.markPoints(t,e,a,n,++r),n=this.markPoints(h,e,a,n,r),n=this.markPoints(h,o,a,n,r),n=this.markPoints(t,o,a,n,r),this.markPoints(this.cord(t,i),this.cord(e,i),this.dist(i),n,r)}},{key:"rotatePoints",value:function(t,e,i){if(0===i)return t;var n=this.subsetIndices(e,i),r=t.slice(n[0],n[1]),s=r.tail();return s=[s.x+s.w/2,s.y+s.h/2],4===e&&this.rotateAll(r,s),this.rotatePoints(r,4,--i),t}},{key:"rotateAll",value:function(t,e){var i=!0,n=!1,r=void 0;try{for(var s,a=t[Symbol.iterator]();!(i=(s=a.next()).done);i=!0){s.value.rotate(Math.PI/4,e)}}catch(h){n=!0,r=h}finally{try{i||null==a.return||a.return()}finally{if(n)throw r}}}},{key:"subsetIndices",value:function(t,e){if(t>4||t<0)throw new Error("subsetIndices(position), invalid position: "+t);return[t*Math.pow(5,e-1),(t+1)*Math.pow(5,e-1)]}},{key:"dist",value:function(t){return Math.sqrt(2)*t/2}},{key:"cord",value:function(t,e){return t+e/2-this.dist(e)/2}},{key:"getTitle",value:function(){return"Some Fractal Quilt"}}]),e}(w),j=function(t){function e(){return Object(o.a)(this,e),Object(l.a)(this,Object(c.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(u.a)(e,[{key:"set",value:function(t,e,i,n){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:new m,s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0;if(s>=this.recursionDepth){var a=[[t+i/2,e],[t,e+n],[t+i,e+n]],h=new y(t,e,i,n,a);return r.add(h),r}return r=this.set(t,e+n/2,i/2,n/2,r,++s),r=this.set(t+i/2,e+n/2,i/2,n/2,r,s),this.set(t+i/4,e,i/2,n/2,r,s)}},{key:"getTitle",value:function(){return"Sierpinski's Triangle"}}]),e}(w),D=function(t){function e(t,i,n,r){return Object(o.a)(this,e),Object(l.a)(this,Object(c.a)(e).call(this,t,i,7,r))}return Object(p.a)(e,t),Object(u.a)(e,[{key:"set",value:function(t,e,i,n){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:new m,s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0;if(s>=this.recursionDepth){var a=new y(t,e,i,n);return r.add(a),r}return r=this.set(t,e,i/3,n/3,r,++s),r=this.set(t+2*i/3,e,i/3,n/3,r,s),r=this.set(t,e+2*n/3,i/3,n/3,r,s),r=this.set(t+2*i/3,e+2*n/3,i/3,n/3,r,s),this.set(t+i/3,e+n/3,i/3,n/3,r,s)}},{key:"getTitle",value:function(){return"Box Fractal"}}]),e}(w),x=function(t){function e(){return Object(o.a)(this,e),Object(l.a)(this,Object(c.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(u.a)(e,[{key:"set",value:function(t,e,i,n){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:new m,s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0;if(s>=this.recursionDepth){var a=new y(t,e,i,n,null,!0,this.palette(),"#30303a",5);return r.add(a),r}var h=this.rand(t,i)+.2*i,o=this.rand(e,n)+.2*n;return r=this.set(t,e,t+h,e+o,r,++s),r=this.set(t+h,e,i-h,e+o,r,s),r=this.set(t,e+o,t+h,n-o,r,s),this.set(t+h,e+o,i-h,n-o,r,s)}},{key:"getTitle",value:function(){return"Piet Mondrian"}},{key:"palette",value:function(){return["#FEFFFA","#F60201","#FDED01","#1F7FC9","#30303a"][Math.round(this.rand(0,4))]}},{key:"rand",value:function(t,e){return Math.random()*(e-t)+t}}]),e}(w),S=function(){function t(e,i){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[0,0];Object(o.a)(this,t),this.DEFAULT_MAX_DEPTH=8,this.width=e,this.height=i,this.origin=n,this.fractal=null,this.options={},this.setOptions()}return Object(u.a)(t,[{key:"setOptions",value:function(){for(var t in n){var e=new n[t](0,0,0,[0,0]);this.options[t]=e.getTitle()}this.setNameAndFractal(Object.keys(this.options)[0])}},{key:"setNameAndFractal",value:function(t){this.name=t,this.fractal=new n[this.name](this.width,this.height,this.DEFAULT_MAX_DEPTH,this.origin),this.recursionDepth=this.fractal.getRecursionDepth()}},{key:"setRecursionDepth",value:function(t){this.recursionDepth=t,this.getFractal().setRecursionDepth(this.recursionDepth)}},{key:"getReactState",value:function(){return this.getFractal().getReactState()}},{key:"getName",value:function(){return this.name}},{key:"getRecursionDepth",value:function(){return this.recursionDepth}},{key:"getOptions",value:function(){return this.options}},{key:"getFractal",value:function(){return this.fractal}},{key:"setDimensions",value:function(t,e){this.width=t,this.height=e,this.getFractal().setDimensions(this.width,this.height)}},{key:"updateFractal",value:function(t,e,i,n){return this.width=e||this.width,this.height=i||this.height,null!==t&&this.getName()!==t?this.setNameAndFractal(t):null!==n&&this.getRecursionDepth()!==n?this.setRecursionDepth(n):this.setDimensions(this.width,this.height),this.getReactState()}}]),t}(),E=function t(e){var i=this;Object(o.a)(this,t),this.sliderEventHandler=function(t){var e=Number(t.target.value),n=i.app.model.updateFractal(null,null,null,e);i.app.setState(n)},this.dropdownEventHandler=function(t){var e=t.target.value,n=i.app.model.updateFractal(e,null,null,null);i.app.setState(n)},this.onWindowResize=function(){var t=i.app.model.updateFractal(null,i.app.getWinWidth(),i.app.getWinHeight(),null);i.app.setState(t)},this.app=e},P=(i(17),i(18),function(t){function e(){return Object(o.a)(this,e),Object(l.a)(this,Object(c.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return s.a.createElement("input",{id:"slider",type:"range",min:"0",max:this.props.sliderMaxValue.toString(),autoComplete:"off",value:this.props.sliderInitialValue,onChange:this.props.eventHandler})}}]),e}(r.Component)),R=(i(19),function(t){function e(t){var i;Object(o.a)(this,e),i=Object(l.a)(this,Object(c.a)(e).call(this,t));var n=Object.entries(i.props.dropdownOptions);return i.options=new Array(n.length),n.forEach((function(t,e){i.options[e]=s.a.createElement("option",{key:e,value:t[0]},t[1])})),i}return Object(p.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return s.a.createElement("select",{id:"dropdown",onChange:this.props.eventHandler},this.options)}}]),e}(r.Component)),F=function(t){function e(){return Object(o.a)(this,e),Object(l.a)(this,Object(c.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return s.a.createElement("h1",{id:"header"}," ",s.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://duckduckgo.com/?q="+this.props.title},this.props.title),s.a.createElement(P,{eventHandler:this.props.sliderEventHandler,sliderInitialValue:this.props.sliderInitialValue,sliderMaxValue:this.props.sliderMaxValue}),s.a.createElement(R,{eventHandler:this.props.dropdownEventHandler,dropdownOptions:this.props.dropdownOptions}))}}]),e}(r.Component),T=(i(20),function(t){function e(){return Object(o.a)(this,e),Object(l.a)(this,Object(c.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(u.a)(e,[{key:"plotPoints",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=this.refs.canvas,i=e.getContext("2d");t&&i.clearRect(0,0,e.width,e.height);var n=this.props.fractal.points,r=!0,s=!1,a=void 0;try{for(var h,o=n[Symbol.iterator]();!(r=(h=o.next()).done);r=!0){var u=h.value;this.drawPoint(i,u)}}catch(l){s=!0,a=l}finally{try{r||null==o.return||o.return()}finally{if(s)throw a}}}},{key:"componentDidMount",value:function(){this.plotPoints()}},{key:"componentDidUpdate",value:function(){this.plotPoints(!0)}},{key:"drawPoint",value:function(t,e){t.fillStyle=e.getFillStyle(),t.strokeStyle=e.getStrokeStyle(),t.lineWidth=e.getLineWidth(),t.beginPath();var i=e.getVertices();t.moveTo(i[0][0],i[0][1]);for(var n=1;n<i.length;n++)t.lineTo(i[n][0],i[n][1]);t.closePath(),t.stroke(),e.fill()&&t.fill()}},{key:"render",value:function(){var t,e;return t=this.props.fractal.width,e=this.props.fractal.height,s.a.createElement("canvas",{id:"fractal_pane",ref:"canvas",width:t,height:e})}}]),e}(r.Component)),M=(i(21),function(t){function e(t){var i;return Object(o.a)(this,e),(i=Object(l.a)(this,Object(c.a)(e).call(this,t))).MARGIN=0,i.control=new E(Object(d.a)(i)),i.model=new S(i.getWinWidth(),i.getWinHeight()),i.state=i.model.getReactState(),window.addEventListener("resize",i.control.onWindowResize),i}return Object(p.a)(e,t),Object(u.a)(e,[{key:"getWinWidth",value:function(){return window.innerWidth}},{key:"getWinHeight",value:function(){return window.innerHeight}},{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement(F,{sliderEventHandler:this.control.sliderEventHandler,sliderInitialValue:this.state.recursionDepth,sliderMaxValue:this.state.maxRecursionDepth,dropdownEventHandler:this.control.dropdownEventHandler,dropdownOptions:this.model.getOptions(),title:this.state.title}),s.a.createElement(T,{fractal:this.state}))}}]),e}(r.Component));h.a.render(s.a.createElement(M,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.97d06e60.chunk.js.map