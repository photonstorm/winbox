/**
 * WinBox.js v0.0.8 (Bundle)
 * Copyright 2021 Nextapps GmbH
 * Author: Thomas Wilkerling
 * Licence: Apache-2.0
 * https://github.com/nextapps-de/winbox
 */
(function(){'use strict';var f,h=document.createElement("style");h.innerHTML="@keyframes fade-in{0%{opacity:0}to{opacity:.85}}.wb-header,.wb-title{width:100%;height:35px;vertical-align:middle}.winbox{position:fixed;left:0;top:0;background:#0050ff;overflow:hidden;box-shadow:0 14px 28px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.22);transition:width .3s,height .3s,transform .3s;transition-timing-function:cubic-bezier(.3,1,.3,1);will-change:transform,width,height;contain:strict;z-index:10}.wb-body,.wb-header{position:absolute;left:0;right:0}.wb-header{display:table;table-layout:fixed;top:0;color:#fff}.wb-body{top:35px;bottom:0;overflow:auto;-webkit-overflow-scrolling:touch;overflow-scrolling:touch;will-change:scroll-position;background:#fff;margin-top:0!important;box-sizing:border-box}.wb-title{display:table-cell;font-size:14px;text-align:left;padding-left:10px;cursor:move}.wb-n,.wb-nw,.wb-s{height:5px;left:0}.wb-title span{display:block;width:calc(100% - 120px);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.winbox.min .wb-title span{width:calc(100% - 65px)}.wb-e,.wb-nw,.wb-w{position:absolute;width:5px;top:0}.wb-n{position:absolute;top:0;right:0;cursor:n-resize}.wb-e,.wb-s{right:0;bottom:0;cursor:w-resize}.wb-s{position:absolute;cursor:n-resize}.wb-w{left:0;bottom:0;cursor:w-resize}.wb-nw{cursor:nw-resize}.wb-ne,.wb-sw{cursor:ne-resize;width:5px;height:5px;position:absolute}.wb-ne{top:0;right:0}.wb-sw{bottom:0;left:0}.wb-icon,.wb-se{position:absolute;bottom:0;right:0}.wb-se{width:5px;height:5px;cursor:nw-resize}.wb-icon{top:0;padding-right:2px}.wb-icon span{display:inline-block;width:30px;height:100%;background-position:center;background-repeat:no-repeat;cursor:pointer}.winbox.min .wb-full,.winbox.min .wb-min,.winbox.modal .wb-full,.winbox.modal .wb-max,.winbox.modal .wb-min{display:none}span.wb-min{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAyIj48cGF0aCBmaWxsPSIjZmZmIiBkPSJNOCAwaDdhMSAxIDAgMCAxIDAgMkgxYTEgMSAwIDAgMSAwLTJoN3oiLz48L3N2Zz4=);background-position:center bottom 5px;background-size:14px 14px}.wb-max{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNmZmYiIHZpZXdCb3g9IjAgMCA5NiA5NiI+PHBhdGggZD0iTTIwIDcxLjMxMUMxNS4zNCA2OS42NyAxMiA2NS4yMyAxMiA2MFYyMGMwLTYuNjMgNS4zNy0xMiAxMi0xMmg0MGM1LjIzIDAgOS42NyAzLjM0IDExLjMxMSA4SDI0Yy0yLjIxIDAtNCAxLjc5LTQgNHY1MS4zMTF6Ii8+PHBhdGggZD0iTTkyIDc2VjM2YzAtNi42My01LjM3LTEyLTEyLTEySDQwYy02LjYzIDAtMTIgNS4zNy0xMiAxMnY0MGMwIDYuNjMgNS4zNyAxMiAxMiAxMmg0MGM2LjYzIDAgMTItNS4zNyAxMi0xMnptLTUyIDRjLTIuMjEgMC00LTEuNzktNC00VjM2YzAtMi4yMSAxLjc5LTQgNC00aDQwYzIuMjEgMCA0IDEuNzkgNCA0djQwYzAgMi4yMS0xLjc5IDQtNCA0SDQweiIvPjwvc3ZnPg==);background-size:18px 18px}.wb-close{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xIC0xIDE4IDE4Ij48cGF0aCBmaWxsPSIjZmZmIiBkPSJtMS42MTMuMjEuMDk0LjA4M0w4IDYuNTg1IDE0LjI5My4yOTNsLjA5NC0uMDgzYTEgMSAwIDAgMSAxLjQwMyAxLjQwM2wtLjA4My4wOTRMOS40MTUgOGw2LjI5MiA2LjI5M2ExIDEgMCAwIDEtMS4zMiAxLjQ5N2wtLjA5NC0uMDgzTDggOS40MTVsLTYuMjkzIDYuMjkyLS4wOTQuMDgzQTEgMSAwIDAgMSAuMjEgMTQuMzg3bC4wODMtLjA5NEw2LjU4NSA4IC4yOTMgMS43MDdBMSAxIDAgMCAxIDEuNjEzLjIxeiIvPjwvc3ZnPg==);background-size:15px 15px}.wb-full{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIuNSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNOCAzSDVhMiAyIDAgMCAwLTIgMnYzbTE4IDBWNWEyIDIgMCAwIDAtMi0yaC0zbTAgMThoM2EyIDIgMCAwIDAgMi0ydi0zTTMgMTZ2M2EyIDIgMCAwIDAgMiAyaDMiLz48L3N2Zz4=);background-size:17px 17px}.winbox.max .wb-title,.winbox.max>div,.winbox.min .wb-title,.winbox.min>div,.winbox.modal .wb-title,.winbox.modal>div{cursor:default}.winbox iframe{position:absolute;width:100%;height:100%;border:0}.winbox.modal:after,.winbox.modal:before{content:'';position:fixed}.winbox.modal{overflow:visible;contain:layout size style}.winbox.modal:before{top:0;left:0;right:0;bottom:0;background:inherit}.winbox.modal:after{top:-50%;left:-50%;right:-50%;bottom:-50%;background:#0d1117;animation:fade-in .2s ease-out forwards;z-index:-1}";
var p=document.getElementsByTagName("head")[0];p.firstChild?p.insertBefore(h,p.firstChild):p.appendChild(h);var q=document.createElement("div");q.className="winbox";q.innerHTML="<div class=wb-header><div class=wb-title><span> </span></div><div class=wb-icon><span class=wb-min></span><span class=wb-max></span><span class=wb-full></span><span class=wb-close></span></div></div><div class=wb-body></div><div class=wb-n></div><div class=wb-s></div><div class=wb-w></div><div class=wb-e></div><div class=wb-nw></div><div class=wb-ne></div><div class=wb-se></div><div class=wb-sw></div>";function t(a,b,c){a.addEventListener(b,c)}function u(a,b,c){a["_s_"+b]!==c&&(a.style.setProperty(b,c),a["_s_"+b]=c)}function v(a){a.preventDefault();a.stopImmediatePropagation()};var w=document.documentElement,x=[],z=0,A=0,B,C,J,K,L,M;
function N(a,b){if(!(this instanceof N))return new N(a);z||O();this.g=q.cloneNode(!0);this.body=this.g.getElementsByClassName("wb-body")[0];var c,g;if(a){if(b){var e=a;a=b}if("string"===typeof a)e=a;else{if(g=a.modal){var r=c="center";this.g.classList.add("modal")}var D=a.id;var E=a.root;e=e||a.title;var d=a.mount;var F=a.html;var y=a.url;var k=a.width;var l=a.height;r=a.x||r;c=a.y||c;var G=a.max;var m=a.top;var n=a.left;var H=a.bottom;var I=a.right;var W=a.onclose;var X=a.onfocus;var Y=a.onblur;
var Z=a.onmove;var aa=a.onresize;b=a.background;var S=a.border;a=a["class"];b&&this.setBackground(b);S&&u(this.body,"margin",S+"px");a&&this.g.classList.add(a)}}this.setTitle(e||"");e=L;a=M;m=m?P(m,a):0;H=H?P(H,a):0;n=n?P(n,e):0;I=I?P(I,e):0;e-=n+I;a-=m+H;k=k?P(k,e):e/2;l=l?P(l,a):a/2;r=r?P(r,e,k):n;c=c?P(c,a,l):m;this.g.id=this.id=D||"winbox-"+ ++A;this.x=r;this.y=c;this.width=k;this.height=l;this.top=m;this.right=I;this.bottom=H;this.left=n;this.max=this.min=!1;this.j=W;this.l=X;this.i=Y;this.o=
Z;this.m=aa;G?this.maximize().focus():this.move().resize().focus();d?this.mount(d):F?this.body.innerHTML=F:y&&this.setUrl(y);ba(this,g);(E||document.body).appendChild(this.g)}N["new"]=function(a){return new N(a)};function P(a,b,c){"center"===a?a=(b-c)/2:"string"===typeof a&&(c=parseFloat(a),a="%"===(""+c!==a&&a.substring((""+c).length))?b/100*c:c);return a}
function O(){var a=document.body;a[J="requestFullscreen"]||a[J="msRequestFullscreen"]||a[J="webkitRequestFullscreen"]||a[J="mozRequestFullscreen"]||(J="");K=J&&J.replace("request","exit").replace("mozRequest","mozCancel").replace("Request","Exit");t(window,"resize",function(){Q();R()});Q()}
function ba(a,b){b||(T(a,"title"),T(a,"n"),T(a,"s"),T(a,"w"),T(a,"e"),T(a,"nw"),T(a,"ne"),T(a,"se"),T(a,"sw"),t(a.g.getElementsByClassName("wb-min")[0],"click",function(c){Q();a.minimize();v(c)}),t(a.g.getElementsByClassName("wb-max")[0],"click",function(c){Q();a.maximize();v(c)}),J?t(a.g.getElementsByClassName("wb-full")[0],"click",function(c){a.fullscreen();v(c)}):u(a.g.getElementsByClassName("wb-full")[0],"display","none"),t(a.g,"mousedown",function(){a.focus()}));t(a.g.getElementsByClassName("wb-close")[0],
"click",function(c){a.close();a=null;v(c)})}function U(a){x.splice(x.indexOf(a),1);R();a.g.classList.remove("min");a.min=!1;a.g.title=""}function R(){for(var a=x.length,b=Math.min(L/a,250),c=0,g;c<a;c++)g=x[c],g.resize(b,35,!0).move(g.left+c*b,M-g.bottom-35,!0)}
function T(a,b){function c(d){v(d);a.min?(U(a),a.resize().move()):a.min||a.max||(u(a.g,"transition","none"),window.addEventListener("mousemove",g),window.addEventListener("mouseup",e),window.addEventListener("touchmove",g),window.addEventListener("touchend",e),d.touches&&(d=d.touches[0]||d),D=d.pageX,E=d.pageY,Q(),a.focus())}function g(d){d.touches?d=d.touches[0]||d:v(d);var F=d.pageX;d=d.pageY;var y=F-D,k=d-E,l;if("title"===b){a.x+=y;a.y+=k;var G=l=1}else{if("e"===b||"se"===b||"ne"===b){a.width+=
y;var m=1}else if("w"===b||"sw"===b||"nw"===b)a.x+=y,a.width-=y,G=m=1;if("s"===b||"se"===b||"sw"===b){a.height+=k;var n=1}else if("n"===b||"ne"===b||"nw"===b)a.y+=k,a.height-=k,l=n=1}if(m||n)m&&(a.width=Math.max(Math.min(a.width,L-a.x-a.right),250)),n&&(a.height=Math.max(Math.min(a.height,M-a.y-a.bottom-1),35)),a.resize();if(G||l)G&&(a.x=Math.max(Math.min(a.x,L-a.width-a.right),a.left)),l&&(a.y=Math.max(Math.min(a.y,M-a.height-a.bottom-1),a.top)),a.move();D=F;E=d}function e(d){u(a.g,"transition",
"");window.removeEventListener("mousemove",g);window.removeEventListener("mouseup",e);window.removeEventListener("touchmove",g);window.removeEventListener("touchend",e);v(d)}var r=a.g.getElementsByClassName("wb-"+b)[0],D,E;r.addEventListener("mousedown",c);r.addEventListener("touchstart",c)}function Q(){L=w.clientWidth;M=w.clientHeight}f=N.prototype;f.mount=function(a){this.unmount();a.h||(a.h=a.parentNode);this.body.textContent="";this.body.appendChild(a);return this};
f.unmount=function(a){var b=this.body.firstChild;if(b){var c=a||b.h;c&&c.appendChild(b);b.h=a}return this};f.setTitle=function(a){var b=this.g.getElementsByClassName("wb-title")[0].firstChild;a=this.title=a;b.s!==a&&(b.firstChild.nodeValue=a,b.s=a);return this};f.setBackground=function(a){u(this.g,"background",a);return this};f.setUrl=function(a){this.body.innerHTML='<iframe src="'+a+'"></iframe>';return this};
f.focus=function(){C!==this&&(u(this.g,"z-index",10+ ++z),this.g.classList.add("focus"),C&&(C.g.classList.remove("focus"),C.i&&C.i()),C=this,this.l&&this.l());return this};f.minimize=function(a){B&&V();!a&&this.min?(U(this),this.resize().move()):!1===a||this.min||(x.push(this),this.g.classList.add("min"),R(),this.g.title=this.title,this.min=!0);this.max&&(this.g.classList.remove("max"),this.max=!1);return this};
f.maximize=function(a){if("undefined"===typeof a||a!==this.max)this.min&&U(this),(this.max=!this.max)?(this.g.classList.add("max"),this.resize(L-this.left-this.right,M-this.top-this.bottom-1,!0).move(this.left,this.top,!0)):(this.resize().move(),this.g.classList.remove("max"));return this};f.fullscreen=function(a){if("undefined"===typeof a||a!==B)this.min&&(this.resize().move(),U(this)),B&&V()||(this.body[J](),B=!0);return this};
function V(){B=!1;if(document.fullscreen||document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement)return document[K](),!0}f.close=function(){this.min&&U(this);this.j&&this.j();this.unmount();this.g.parentNode.removeChild(this.g);C===this&&(C=null)};
f.move=function(a,b,c){"undefined"===typeof a?(a=this.x,b=this.y):c||(this.x=a?a=P(a,L-this.left-this.right,this.width):0,this.y=b?b=P(b,M-this.top-this.bottom,this.height):0);u(this.g,"transform","translate("+a+"px,"+b+"px)");this.o&&this.o(a,b);return this};
f.resize=function(a,b,c){"undefined"===typeof a?(a=this.width,b=this.height):c||(this.width=a?a=P(a,L-this.left-this.right):0,this.height=b?b=P(b,M-this.top-this.bottom):0);u(this.g,"width",a+"px");u(this.g,"height",b+"px");this.m&&this.m(a,b);return this};window.WinBox=N;}).call(this);
