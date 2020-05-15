(this.webpackJsonpfractal_react=this.webpackJsonpfractal_react||[]).push([[0],[,,,,,,,,,,,function(t,e,n){t.exports=n(23)},,,,,function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var i={};n.r(i),n.d(i,"ParametricTornado",(function(){return S})),n.d(i,"ParametricFish",(function(){return A})),n.d(i,"TreeBranch",(function(){return H})),n.d(i,"KochSnowflake",(function(){return W})),n.d(i,"SierpinskiTri",(function(){return B})),n.d(i,"QuiltFractal",(function(){return _})),n.d(i,"BoxFractal",(function(){return L})),n.d(i,"Mondrian",(function(){return q}));var r=n(5),a=n.n(r),s=n(10),h=n.n(s),u=(n(16),n(0)),o=n(1),l=n(3),c=n(2),f=n(7),d=n(4),v=n(8),p=n(6),y=n.n(p),g=function(){function t(e,n){Object(u.a)(this,t),this.value=e,this.next=n}return Object(o.a)(t,[{key:"setNext",value:function(t){this.next=t}},{key:"setValue",value:function(t){this.value=t}},{key:"getNext",value:function(){return this.next}},{key:"getValue",value:function(){return this.value}}]),t}(),k=function(){function t(){Object(u.a)(this,t),this.length=0,this.head=null,this.current=null}return Object(o.a)(t,[{key:"isEmpty",value:function(){return 0===this.length}},{key:"tail",value:function(){return this.isEmpty()?null:this.current.getValue()}},{key:"slice",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;n||(n=this.length);var i=new t,r=0,a=!0,s=!1,h=void 0;try{for(var u,o=this[Symbol.iterator]();!(a=(u=o.next()).done);a=!0){var l=u.value;e<=r&&r<n&&i.add(l),r++}}catch(c){s=!0,h=c}finally{try{a||null==o.return||o.return()}finally{if(s)throw h}}return i}},{key:"add",value:function(t){if(this.isEmpty())this.head=new g(t,null),this.current=this.head;else{var e=new g(t,null);this.current.setNext(e),this.current=e}return++this.length}},{key:"toArray",value:function(){var t=0,e=new Array(this.length),n=!0,i=!1,r=void 0;try{for(var a,s=this[Symbol.iterator]();!(n=(a=s.next()).done);n=!0){var h=a.value;e[t++]=h}}catch(u){i=!0,r=u}finally{try{n||null==s.return||s.return()}finally{if(i)throw r}}return e}},{key:Symbol.iterator,value:y.a.mark((function t(){var e,n;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.isEmpty()){t.next=2;break}return t.abrupt("return");case 2:e=this.head;case 3:if(!e.getNext()){t.next=10;break}return n=e.getValue(),e=e.getNext(),t.next=8,n;case 8:t.next=3;break;case 10:return t.next=12,e.getValue();case 12:case"end":return t.stop()}}),t,this)}))}]),t}(),b=function(){function t(e,n,i){Object(u.a)(this,t),this.start=e,this.l=n,this.radians=i,this.end=[this.start[0]+n*Math.cos(i),this.start[1]+n*Math.sin(i)]}return Object(o.a)(t,[{key:"addVector",value:function(t){var e=[this.start,this.end];return t.add(new O(this.start[0],this.start[1],0,0,e,!0,"#fffafa",null,2)),t}}]),t}(),w=Math.cos,m=Math.sin,O=function(){function t(e,n,i,r){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,s=!(arguments.length>5&&void 0!==arguments[5])||arguments[5],h=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null,o=arguments.length>7&&void 0!==arguments[7]?arguments[7]:null,l=arguments.length>8&&void 0!==arguments[8]?arguments[8]:1;Object(u.a)(this,t),this.x=e,this.y=n,this.w=i,this.h=r,this.toFill=s,this.lineWidth=l,this.vertices=a||this.square(),this.fillStyle=h||this.getRandomColor(),this.strokeStyle=o||this.fillStyle}return Object(o.a)(t,[{key:"square",value:function(){return[[this.x,this.y],[this.x+this.w,this.y],[this.x+this.w,this.y+this.h],[this.x,this.y+this.h]]}},{key:"translate",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=!0,i=!1,r=void 0;try{for(var a,s=this.getVertices()[Symbol.iterator]();!(n=(a=s.next()).done);n=!0){var h=a.value;h[0]+=t,h[1]+=e}}catch(u){i=!0,r=u}finally{try{n||null==s.return||s.return()}finally{if(i)throw r}}}},{key:"getRandomColor",value:function(){return"#"+(16777216+16777215*Math.random()).toString(16).substr(1,6)}},{key:"getVertices",value:function(){return this.vertices}},{key:"fill",value:function(){return this.toFill}},{key:"getFillStyle",value:function(){return this.fillStyle}},{key:"getStrokeStyle",value:function(){return this.strokeStyle}},{key:"getLineWidth",value:function(){return this.lineWidth}},{key:"setFillStyle",value:function(t){this.fillStyle=t}},{key:"setStrokeStyle",value:function(t){this.strokeStyle=t}},{key:"rotate",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(0!==t){var n,i;null===e?(n=this.x+this.w/2,i=this.y+this.h/2):(n=e[0],i=e[1]);for(var r=[[w(t),m(t),n-(n*w(t)+i*m(t))],[-m(t),w(t),i-(i*w(t)-n*m(t))],[0,0,1]],a=0;a<this.vertices.length;a++){var s=this.vertices[a][0],h=this.vertices[a][1],u=1;this.vertices[a]=[s*r[0][0]+h*r[0][1]+u*r[0][2],s*r[1][0]+h*r[1][1]+u*r[1][2]]}}}}]),t}(),j=function(){function t(e,n,i,r){var a=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(Object(u.a)(this,t),this.constructor===t)throw new Error("Abstract classes can't be instantiated.");this.maxDepth=i,this.points=null,this.width=e,this.height=n,this.origin=r,this.toCenterFractal=a,this.depthToPoints=new Array(11),this.recursionDepth=-1,this.setDepthToDefault()}return Object(o.a)(t,[{key:"setDepthToDefault",value:function(){this.setRecursionDepth(Math.round(this.maxDepth/2))}},{key:"setRecursionDepth",value:function(t){this.recursionDepth=t,this.setPoints()}},{key:"setDimensions",value:function(t,e){this.width=t,this.height=e,this.wipeOutDepthToPointArray(),this.setPoints()}},{key:"setPoints",value:function(){this.pointsNeedBeSet()&&(this.depthToPoints[this.getRecursionDepth()]=this.set(this.origin[0],this.origin[1],this.width,this.height),this.toCenterFractal&&this.centerFractal())}},{key:"wipeOutDepthToPointArray",value:function(){this.depthToPoints=new Array(11)}},{key:"set",value:function(){throw new Error("Method 'set()' must be implemented.")}},{key:"centerFractal",value:function(){var t=Number.POSITIVE_INFINITY,e=Number.POSITIVE_INFINITY,n=Number.NEGATIVE_INFINITY,i=Number.NEGATIVE_INFINITY,r=!0,a=!1,s=void 0;try{for(var h,u=this.getPoints()[Symbol.iterator]();!(r=(h=u.next()).done);r=!0){var o=h.value,l=!0,c=!1,f=void 0;try{for(var d,v=o.getVertices()[Symbol.iterator]();!(l=(d=v.next()).done);l=!0){var p=d.value;t=p[0]<t?p[0]:t,e=p[1]<e?p[1]:e,n=p[0]>n?p[0]:n,i=p[1]>i?p[1]:i}}catch(j){c=!0,f=j}finally{try{l||null==v.return||v.return()}finally{if(c)throw f}}}}catch(j){a=!0,s=j}finally{try{r||null==u.return||u.return()}finally{if(a)throw s}}var y=this.width/2-(n-t)/2-t,g=this.height/2-(i-e)/2-e,k=!0,b=!1,w=void 0;try{for(var m,O=this.getPoints()[Symbol.iterator]();!(k=(m=O.next()).done);k=!0){m.value.translate(y,g)}}catch(j){b=!0,w=j}finally{try{k||null==O.return||O.return()}finally{if(b)throw w}}}},{key:"pointsNeedBeSet",value:function(){return!this.depthToPoints[this.getRecursionDepth()]}},{key:"getTitle",value:function(){throw new Error("Method 'getTitle()' must be implemented.")}},{key:"getReactState",value:function(){return{title:this.getTitle(),width:this.getWidth(),height:this.getHeight(),points:this.getPoints(),recursionDepth:this.getRecursionDepth(),maxRecursionDepth:this.maxDepth}}},{key:"getPoints",value:function(){return this.depthToPoints[this.getRecursionDepth()]}},{key:"getWidth",value:function(){return this.width}},{key:"getHeight",value:function(){return this.height}},{key:"getRecursionDepth",value:function(){return this.recursionDepth}},{key:"linspace",value:y.a.mark((function t(e,n){var i,r,a,s=arguments;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:i=s.length>2&&void 0!==s[2]?s[2]:10,r=(n-e)/(i-1),a=0;case 3:if(!(a<i)){t.next=9;break}return t.next=6,e+a*r;case 6:a++,t.next=3;break;case 9:case"end":return t.stop()}}),t)}))}]),t}(),D=Math.sin,M=Math.pow,P=Math.PI,x=M(10,4),E={0:"#CC2A49",.333:"#F99E4C",.666:"#582841"},S=function(t){function e(t,n,i,r){return Object(u.a)(this,e),Object(l.a)(this,Object(c.a)(e).call(this,t,n,x,r,!0))}return Object(d.a)(e,t),Object(o.a)(e,[{key:"set",value:function(t,e,n,i){var r,a,s,h=arguments.length>4&&void 0!==arguments[4]?arguments[4]:new k,u=(arguments.length>5&&void 0!==arguments[5]&&arguments[5],this.linspace(-13,13,this.recursionDepth));for(a=0;a<this.recursionDepth;a++){var o=this.parametricCurve(u.next().value,Math.min(n,i)),l=Object(v.a)(o,2);t=l[0],e=l[1];for(var c=0,f=[0,.333,.666];c<f.length;c++)s=f[c],(r=new O(t,e,1,1,null,!1,E[s])).rotate(s*P,[0,0]),h.add(r)}return h}},{key:"parametricCurve",value:function(t,e){var n=Math.round(.35*e);return[n*(D(1.36*t)/M(1+M(D(10.8*t),2),2)),n*M(D(1.36*t),3)]}},{key:"getTitle",value:function(){return"Curve by LThMath 1"}}]),e}(j),F=Math.cos,T=Math.sin,I=Math.pow,R=Math.PI,N=I(10,4),C={0:"#EFDBCB",.5:"#4BB4DE",1:"#FCD593",1.5:"#345DA7"},A=function(t){function e(t,n,i,r){return Object(u.a)(this,e),Object(l.a)(this,Object(c.a)(e).call(this,t,n,N,r,!0))}return Object(d.a)(e,t),Object(o.a)(e,[{key:"set",value:function(t,e,n,i){var r,a,s,h=arguments.length>4&&void 0!==arguments[4]?arguments[4]:new k,u=(arguments.length>5&&void 0!==arguments[5]&&arguments[5],this.linspace(-2*R,2*R,N));for(a=0;a<this.recursionDepth;a++){var o=this.parametricCurve(u.next().value,Math.min(n,i)),l=Object(v.a)(o,2);t=l[0],e=l[1];for(var c=0,f=[0,.5,1,1.5];c<f.length;c++)s=f[c],(r=new O(t,e,1,1,null,!1,this.colour(s,a))).rotate(s*R,[0,0]),h.add(r)}return h}},{key:"parametricCurve",value:function(t,e){var n=Math.round(.25*e);return[n*I(T(-5*t),2)*I(2,F(F(9.844*t))),n*T(T(-5*t))*I(F(9.844*t),2)]}},{key:"colour",value:function(t,e){var n=Math.round(e%10/10*255).toString(16);return n=1===n.length?"0"+n:n,C[t]+n}},{key:"getTitle",value:function(){return"Curve by LThMath 2"}}]),e}(j),V=Math.PI/4,H=function(t){function e(t,n,i,r){return Object(u.a)(this,e),Object(l.a)(this,Object(c.a)(e).call(this,t,n,10,r))}return Object(d.a)(e,t),Object(o.a)(e,[{key:"set",value:function(t,e,n,i){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:new k;arguments.length>5&&void 0!==arguments[5]&&arguments[5];return this.branch([t,e],.3*Math.sqrt(n*n+i*i),Math.PI/4,this.recursionDepth,r),r}},{key:"branch",value:function(t,e,n,i,r){if(i>0){var a=Math.random()>.5?1:-1,s=[t,this.end(t,e,n)],h=new O(t[0],t[1],0,0,s,!0,this.palette());r.add(h);for(var u=0;u<3;u++){var o=this.rand(.3*e,.9*e),l=this.end(t,o,n),c=n+a*this.rand(0,V);a*=-1,this.branch(l,o,c,i-1,r)}}}},{key:"end",value:function(t,e,n){return[t[0]+e*Math.cos(n),t[1]+e*Math.sin(n)]}},{key:"palette",value:function(){var t=["#77a37a","#5f926a","#587e60","#485e52","#3a4f3f","#77a37a","#5f926a","#587e60","#485e52","#3a4f3f","#77a37a","#5f926a","#587e60","#485e52","#3a4f3f","#603C14","#9C2706","#D45B12","#F3BC2E","#5F5426"];return t[Math.round(this.rand(0,t.length-1))]}},{key:"rand",value:function(t,e){return Math.random()*(e-t)+t}},{key:"getTitle",value:function(){return"Tree Branch Fractal"}}]),e}(j),W=function(t){function e(t,n,i,r){return Object(u.a)(this,e),Object(l.a)(this,Object(c.a)(e).call(this,t,n,6,r,!0))}return Object(d.a)(e,t),Object(o.a)(e,[{key:"set",value:function(t,e,n,i){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:new k,a=(arguments.length>5&&void 0!==arguments[5]&&arguments[5],Math.min(n,i)),s=new b([t+a/2,e+a/10],.75*a,Math.PI*(2/3));return r=this.fractal(s,r,this.recursionDepth),s=new b([t+.875*a,e+.75*a],.75*a,Math.PI*(-2/3)),r=this.fractal(s,r,this.recursionDepth),s=new b([t+.125*a,e+.75*a],.75*a,0),r=this.fractal(s,r,this.recursionDepth)}},{key:"fractal",value:function(t,e,n){if(0===n)return t.addVector(e);var i=new b([t.start[0],t.start[1]],t.l/3,t.radians),r=new b([i.end[0],i.end[1]],t.l/3,t.radians+Math.PI/3),a=new b([r.end[0],r.end[1]],t.l/3,t.radians-Math.PI/3),s=new b([a.end[0],a.end[1]],t.l/3,t.radians);return e=this.fractal(i,e,n-1),e=this.fractal(r,e,n-1),e=this.fractal(a,e,n-1),this.fractal(s,e,n-1)}},{key:"getTitle",value:function(){return"Koch Snowflake"}}]),e}(j),B=function(t){function e(){return Object(u.a)(this,e),Object(l.a)(this,Object(c.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(o.a)(e,[{key:"set",value:function(t,e,n,i){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:new k,a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0;if(a>=this.recursionDepth){var s=[[t+n/2,e],[t,e+i],[t+n,e+i]],h=new O(t,e,n,i,s);return r.add(h),r}return r=this.set(t,e+i/2,n/2,i/2,r,++a),r=this.set(t+n/2,e+i/2,n/2,i/2,r,a),this.set(t+n/4,e,n/2,i/2,r,a)}},{key:"getTitle",value:function(){return"Sierpinski's Triangle"}}]),e}(j),_=function(t){function e(t,n,i,r){return Object(u.a)(this,e),Object(l.a)(this,Object(c.a)(e).call(this,t,n,7,r,!0))}return Object(d.a)(e,t),Object(o.a)(e,[{key:"set",value:function(t,e,n,i){var r=Math.min(n,i),a=this.markPoints(t,e,r);return this.rotatePoints(a,0,this.getRecursionDepth()),this.rotatePoints(a,1,this.getRecursionDepth()),this.rotatePoints(a,2,this.getRecursionDepth()),this.rotatePoints(a,3,this.getRecursionDepth()),this.rotatePoints(a,4,this.getRecursionDepth())}},{key:"markPoints",value:function(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:new k,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;if(r>=this.recursionDepth){var a=new O(t,e,n,n,null,!1,"#afff14");return i.add(a),i}var s=.25*n,h=t+.75*n,u=e+.75*n;return i=this.markPoints(t,e,s,i,++r),i=this.markPoints(h,e,s,i,r),i=this.markPoints(h,u,s,i,r),i=this.markPoints(t,u,s,i,r),this.markPoints(this.cord(t,n),this.cord(e,n),this.dist(n),i,r)}},{key:"rotatePoints",value:function(t,e,n){if(0===n)return t;var i=this.subsetIndices(e,n),r=t.slice(i[0],i[1]),a=r.tail();return a=[a.x+a.w/2,a.y+a.h/2],4===e&&this.rotateAll(r,a),this.rotatePoints(r,4,--n),t}},{key:"rotateAll",value:function(t,e){var n=!0,i=!1,r=void 0;try{for(var a,s=t[Symbol.iterator]();!(n=(a=s.next()).done);n=!0){a.value.rotate(Math.PI/4,e)}}catch(h){i=!0,r=h}finally{try{n||null==s.return||s.return()}finally{if(i)throw r}}}},{key:"subsetIndices",value:function(t,e){if(t>4||t<0)throw new Error("subsetIndices(position), invalid position: "+t);return[t*Math.pow(5,e-1),(t+1)*Math.pow(5,e-1)]}},{key:"dist",value:function(t){return Math.sqrt(2)*t/2}},{key:"cord",value:function(t,e){return t+e/2-this.dist(e)/2}},{key:"getTitle",value:function(){return"Some Fractal Quilt"}}]),e}(j),L=function(t){function e(t,n,i,r){return Object(u.a)(this,e),Object(l.a)(this,Object(c.a)(e).call(this,t,n,7,r))}return Object(d.a)(e,t),Object(o.a)(e,[{key:"set",value:function(t,e,n,i){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:new k,a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0;if(a>=this.recursionDepth){var s=new O(t,e,n,i);return r.add(s),r}return r=this.set(t,e,n/3,i/3,r,++a),r=this.set(t+2*n/3,e,n/3,i/3,r,a),r=this.set(t,e+2*i/3,n/3,i/3,r,a),r=this.set(t+2*n/3,e+2*i/3,n/3,i/3,r,a),this.set(t+n/3,e+i/3,n/3,i/3,r,a)}},{key:"getTitle",value:function(){return"Box Fractal"}}]),e}(j),q=function(t){function e(){return Object(u.a)(this,e),Object(l.a)(this,Object(c.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(o.a)(e,[{key:"set",value:function(t,e,n,i){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:new k,a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0;if(a>=this.recursionDepth){var s=new O(t,e,n,i,null,!0,this.palette(),"#30303a",5);return r.add(s),r}var h=this.rand(t,n)+.2*n,u=this.rand(e,i)+.2*i;return r=this.set(t,e,t+h,e+u,r,++a),r=this.set(t+h,e,n-h,e+u,r,a),r=this.set(t,e+u,t+h,i-u,r,a),this.set(t+h,e+u,n-h,i-u,r,a)}},{key:"getTitle",value:function(){return"Piet Mondrian"}},{key:"palette",value:function(){return["#FEFFFA","#F60201","#FDED01","#1F7FC9","#30303a"][Math.round(this.rand(0,4))]}},{key:"rand",value:function(t,e){return Math.random()*(e-t)+t}}]),e}(j),Y=function(){function t(e,n){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[0,0];Object(u.a)(this,t),this.DEFAULT_MAX_DEPTH=8,this.width=e,this.height=n,this.origin=i,this.fractal=null,this.options={},this.setOptions()}return Object(o.a)(t,[{key:"setOptions",value:function(){for(var t in i){var e=new i[t](0,0,0,[0,0]);this.options[t]=e.getTitle()}this.setNameAndFigure(Object.keys(this.options)[0])}},{key:"setNameAndFigure",value:function(t){this.name=t,this.fractal=new i[this.name](this.width,this.height,this.DEFAULT_MAX_DEPTH,this.origin),this.recursionDepth=this.fractal.getRecursionDepth()}},{key:"setRecursionDepth",value:function(t){this.recursionDepth=t,this.getFigure().setRecursionDepth(this.recursionDepth)}},{key:"getReactState",value:function(){return this.getFigure().getReactState()}},{key:"getName",value:function(){return this.name}},{key:"getRecursionDepth",value:function(){return this.recursionDepth}},{key:"getOptions",value:function(){return this.options}},{key:"getFigure",value:function(){return this.fractal}},{key:"setDimensions",value:function(t,e){this.width=t,this.height=e,this.getFigure().setDimensions(this.width,this.height)}},{key:"updateFigure",value:function(t,e,n,i){return this.width=e||this.width,this.height=n||this.height,null!==t&&this.getName()!==t?this.setNameAndFigure(t):null!==i&&this.getRecursionDepth()!==i?this.setRecursionDepth(i):this.setDimensions(this.width,this.height),this.getReactState()}}]),t}(),z=function t(e){var n=this;Object(u.a)(this,t),this.sliderEventHandler=function(t){var e=Number(t.target.value),i=n.app.model.updateFigure(null,null,null,e);n.app.setState(i)},this.dropdownEventHandler=function(t){var e=t.target.value,i=n.app.model.updateFigure(e,null,null,null);n.app.setState(i)},this.onWindowResize=function(){var t=n.app.model.updateFigure(null,n.app.getWinWidth(),n.app.getWinHeight(),null);n.app.setState(t)},this.app=e},G=(n(18),n(19),function(t){function e(){return Object(u.a)(this,e),Object(l.a)(this,Object(c.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){return a.a.createElement("input",{id:"slider",type:"range",min:"0",max:this.props.sliderMaxValue.toString(),autoComplete:"off",value:this.props.sliderInitialValue,onChange:this.props.eventHandler})}}]),e}(r.Component)),U=(n(20),function(t){function e(t){var n;Object(u.a)(this,e),n=Object(l.a)(this,Object(c.a)(e).call(this,t));var i=Object.entries(n.props.dropdownOptions);return n.options=new Array(i.length),i.forEach((function(t,e){n.options[e]=a.a.createElement("option",{key:e,value:t[0]},t[1])})),n}return Object(d.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){return a.a.createElement("select",{id:"dropdown",onChange:this.props.eventHandler},this.options)}}]),e}(r.Component)),J=function(t){function e(){return Object(u.a)(this,e),Object(l.a)(this,Object(c.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){return a.a.createElement("h1",{id:"header"}," ",a.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://duckduckgo.com/?q="+this.props.title},this.props.title),a.a.createElement(G,{eventHandler:this.props.sliderEventHandler,sliderInitialValue:this.props.sliderInitialValue,sliderMaxValue:this.props.sliderMaxValue}),a.a.createElement(U,{eventHandler:this.props.dropdownEventHandler,dropdownOptions:this.props.dropdownOptions}))}}]),e}(r.Component),K=(n(21),function(t){function e(){return Object(u.a)(this,e),Object(l.a)(this,Object(c.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(o.a)(e,[{key:"plotPoints",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=this.refs.canvas,n=e.getContext("2d");t&&n.clearRect(0,0,e.width,e.height);var i=this.props.fractal.points,r=!0,a=!1,s=void 0;try{for(var h,u=i[Symbol.iterator]();!(r=(h=u.next()).done);r=!0){var o=h.value;this.drawPoint(n,o)}}catch(l){a=!0,s=l}finally{try{r||null==u.return||u.return()}finally{if(a)throw s}}}},{key:"componentDidMount",value:function(){this.plotPoints()}},{key:"componentDidUpdate",value:function(){this.plotPoints(!0)}},{key:"drawPoint",value:function(t,e){t.fillStyle=e.getFillStyle(),t.strokeStyle=e.getStrokeStyle(),t.lineWidth=e.getLineWidth(),t.beginPath();var n=e.getVertices();t.moveTo(n[0][0],n[0][1]);for(var i=1;i<n.length;i++)t.lineTo(n[i][0],n[i][1]);t.closePath(),t.stroke(),e.fill()&&t.fill()}},{key:"render",value:function(){var t,e;return t=this.props.fractal.width,e=this.props.fractal.height,a.a.createElement("canvas",{id:"fractal_pane",ref:"canvas",width:t,height:e})}}]),e}(r.Component)),Q=(n(22),function(t){function e(t){var n;return Object(u.a)(this,e),(n=Object(l.a)(this,Object(c.a)(e).call(this,t))).MARGIN=0,n.control=new z(Object(f.a)(n)),n.model=new Y(n.getWinWidth(),n.getWinHeight()),n.state=n.model.getReactState(),window.addEventListener("resize",n.control.onWindowResize),n}return Object(d.a)(e,t),Object(o.a)(e,[{key:"getWinWidth",value:function(){return window.innerWidth}},{key:"getWinHeight",value:function(){return window.innerHeight}},{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement(J,{sliderEventHandler:this.control.sliderEventHandler,sliderInitialValue:this.state.recursionDepth,sliderMaxValue:this.state.maxRecursionDepth,dropdownEventHandler:this.control.dropdownEventHandler,dropdownOptions:this.model.getOptions(),title:this.state.title}),a.a.createElement(K,{fractal:this.state}))}}]),e}(r.Component));h.a.render(a.a.createElement(Q,null),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.bfebda11.chunk.js.map