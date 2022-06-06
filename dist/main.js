(()=>{"use strict";var n={575:(n,e,o)=>{o.d(e,{Z:()=>a});var t=o(537),r=o.n(t),A=o(645),i=o.n(A)()(r());i.push([n.id,"h3{\n    display: flex;\n    justify-content: center;\n    font-weight: bold;\n    font-size: 2rem;\n}\n#left-panel{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n.project-left{\n    border: none;\n    margin: 10px;\n    width: 75%;\n    height: 40px;\n    background-color: rgba(255,255,255,0.3);\n    font-size: 1.3rem;\n    font-weight: bold;\n}\n.project-left:hover{\n    color: rgb(111, 111, 111);\n}\n.project-left:focus{\n    font-size: 1.5rem;\n    transform: scale(1.1);\n    color: rgb(99, 124, 104);\n}","",{version:3,sources:["webpack://./src/LeftPanelStyle.css"],names:[],mappings:"AAAA;IACI,aAAa;IACb,uBAAuB;IACvB,iBAAiB;IACjB,eAAe;AACnB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;AACA;IACI,YAAY;IACZ,YAAY;IACZ,UAAU;IACV,YAAY;IACZ,uCAAuC;IACvC,iBAAiB;IACjB,iBAAiB;AACrB;AACA;IACI,yBAAyB;AAC7B;AACA;IACI,iBAAiB;IACjB,qBAAqB;IACrB,wBAAwB;AAC5B",sourcesContent:["h3{\n    display: flex;\n    justify-content: center;\n    font-weight: bold;\n    font-size: 2rem;\n}\n#left-panel{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n.project-left{\n    border: none;\n    margin: 10px;\n    width: 75%;\n    height: 40px;\n    background-color: rgba(255,255,255,0.3);\n    font-size: 1.3rem;\n    font-weight: bold;\n}\n.project-left:hover{\n    color: rgb(111, 111, 111);\n}\n.project-left:focus{\n    font-size: 1.5rem;\n    transform: scale(1.1);\n    color: rgb(99, 124, 104);\n}"],sourceRoot:""}]);const a=i},189:(n,e,o)=>{o.d(e,{Z:()=>a});var t=o(537),r=o.n(t),A=o(645),i=o.n(A)()(r());i.push([n.id,"body{\n    margin: 0;\n    background-color: darkseagreen;\n    height: 100vh;\n}\n#content{\n    margin: 0;\n    height: 95vh;\n    display: flex;\n    flex-direction: column;\n\n    align-items: center;\n}\n#bottom-side{\n    height: 100%;\n    width: 100%;\n    display: flex;\n}\n#left-panel{\n    height: 100%;\n    width: 25%;\n    background-color: rgb(135, 211, 191);\n}\n#todos{\n    padding-top: 3%;\n    width: 75%;\n    height: 95%;\n}\n#project-add{\n    width: 60%;\n    height: 7%;\n    align-items: center;\n    display: flex;\n    justify-content: center;\n    border: none;\n    background-color: rgb(255, 255, 255);\n    border: solid 2px rgb(0, 60, 0);\n    font-size: 1.2rem;\n    color: rgb(32, 60, 43);\n    font-weight: bold;\n}\n#project-add:not(:hover){\n    width: 60%;\n    height: 7%;\n    align-items: center;\n    display: flex;\n    justify-content: center;\n    border: none;\n    background-color: rgb(255, 255, 255);\n    border: solid 2px rgb(0, 60, 0);\n    font-size: 1.2rem;\n    color: rgb(32, 60, 43);\n    font-weight: bold;\n}\n#project-add:hover{\n    background-color: rgb(189, 230, 184);\n    box-shadow: 0px 0px 10px 1px rgb(255, 255, 255);\n    transform: scale(0.96);\n}\n#project-add:focus{\n    background-color: rgb(158, 231, 155);\n\n}\nfooter{\n    height: 5%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: rgb(140, 234, 179);\n    font-size: 1.2rem;\n}","",{version:3,sources:["webpack://./src/OverallStyle.css"],names:[],mappings:"AAAA;IACI,SAAS;IACT,8BAA8B;IAC9B,aAAa;AACjB;AACA;IACI,SAAS;IACT,YAAY;IACZ,aAAa;IACb,sBAAsB;;IAEtB,mBAAmB;AACvB;AACA;IACI,YAAY;IACZ,WAAW;IACX,aAAa;AACjB;AACA;IACI,YAAY;IACZ,UAAU;IACV,oCAAoC;AACxC;AACA;IACI,eAAe;IACf,UAAU;IACV,WAAW;AACf;AACA;IACI,UAAU;IACV,UAAU;IACV,mBAAmB;IACnB,aAAa;IACb,uBAAuB;IACvB,YAAY;IACZ,oCAAoC;IACpC,+BAA+B;IAC/B,iBAAiB;IACjB,sBAAsB;IACtB,iBAAiB;AACrB;AACA;IACI,UAAU;IACV,UAAU;IACV,mBAAmB;IACnB,aAAa;IACb,uBAAuB;IACvB,YAAY;IACZ,oCAAoC;IACpC,+BAA+B;IAC/B,iBAAiB;IACjB,sBAAsB;IACtB,iBAAiB;AACrB;AACA;IACI,oCAAoC;IACpC,+CAA+C;IAC/C,sBAAsB;AAC1B;AACA;IACI,oCAAoC;;AAExC;AACA;IACI,UAAU;IACV,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,oCAAoC;IACpC,iBAAiB;AACrB",sourcesContent:["body{\n    margin: 0;\n    background-color: darkseagreen;\n    height: 100vh;\n}\n#content{\n    margin: 0;\n    height: 95vh;\n    display: flex;\n    flex-direction: column;\n\n    align-items: center;\n}\n#bottom-side{\n    height: 100%;\n    width: 100%;\n    display: flex;\n}\n#left-panel{\n    height: 100%;\n    width: 25%;\n    background-color: rgb(135, 211, 191);\n}\n#todos{\n    padding-top: 3%;\n    width: 75%;\n    height: 95%;\n}\n#project-add{\n    width: 60%;\n    height: 7%;\n    align-items: center;\n    display: flex;\n    justify-content: center;\n    border: none;\n    background-color: rgb(255, 255, 255);\n    border: solid 2px rgb(0, 60, 0);\n    font-size: 1.2rem;\n    color: rgb(32, 60, 43);\n    font-weight: bold;\n}\n#project-add:not(:hover){\n    width: 60%;\n    height: 7%;\n    align-items: center;\n    display: flex;\n    justify-content: center;\n    border: none;\n    background-color: rgb(255, 255, 255);\n    border: solid 2px rgb(0, 60, 0);\n    font-size: 1.2rem;\n    color: rgb(32, 60, 43);\n    font-weight: bold;\n}\n#project-add:hover{\n    background-color: rgb(189, 230, 184);\n    box-shadow: 0px 0px 10px 1px rgb(255, 255, 255);\n    transform: scale(0.96);\n}\n#project-add:focus{\n    background-color: rgb(158, 231, 155);\n\n}\nfooter{\n    height: 5%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: rgb(140, 234, 179);\n    font-size: 1.2rem;\n}"],sourceRoot:""}]);const a=i},173:(n,e,o)=>{o.d(e,{Z:()=>a});var t=o(537),r=o.n(t),A=o(645),i=o.n(A)()(r());i.push([n.id,"#todos{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 10px;\n}\n.todo{\n    background-color: rgba(255,255,255,0.5);\n    min-height: 60px;\n    width: 90%;\n    align-items: center;\n    display: flex;\n    justify-content: space-between;\n\n}\n#todo-btn{\n    border: none;\n    width: 20%;\n    background-color: rgb(255, 255, 255);\n    height: 30px;\n    font-weight: bold;\n    border: solid 1px black;\n    margin-right: 5px;\n    font-size: 1rem;\n}\n#todo-btn:hover{\n    background-color: rgb(189, 230, 184);\n    transform: scale(0.98);\n}\n#todo-btn:focus{\n    background-color: rgb(158, 231, 155);\n}\n.todo>p{\n    width: 90%;\n    font-size: 1.15rem;\n    padding: 10px;\n}\n","",{version:3,sources:["webpack://./src/TodoStyle.css"],names:[],mappings:"AAAA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,SAAS;AACb;AACA;IACI,uCAAuC;IACvC,gBAAgB;IAChB,UAAU;IACV,mBAAmB;IACnB,aAAa;IACb,8BAA8B;;AAElC;AACA;IACI,YAAY;IACZ,UAAU;IACV,oCAAoC;IACpC,YAAY;IACZ,iBAAiB;IACjB,uBAAuB;IACvB,iBAAiB;IACjB,eAAe;AACnB;AACA;IACI,oCAAoC;IACpC,sBAAsB;AAC1B;AACA;IACI,oCAAoC;AACxC;AACA;IACI,UAAU;IACV,kBAAkB;IAClB,aAAa;AACjB",sourcesContent:["#todos{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 10px;\n}\n.todo{\n    background-color: rgba(255,255,255,0.5);\n    min-height: 60px;\n    width: 90%;\n    align-items: center;\n    display: flex;\n    justify-content: space-between;\n\n}\n#todo-btn{\n    border: none;\n    width: 20%;\n    background-color: rgb(255, 255, 255);\n    height: 30px;\n    font-weight: bold;\n    border: solid 1px black;\n    margin-right: 5px;\n    font-size: 1rem;\n}\n#todo-btn:hover{\n    background-color: rgb(189, 230, 184);\n    transform: scale(0.98);\n}\n#todo-btn:focus{\n    background-color: rgb(158, 231, 155);\n}\n.todo>p{\n    width: 90%;\n    font-size: 1.15rem;\n    padding: 10px;\n}\n"],sourceRoot:""}]);const a=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var o="",t=void 0!==e[5];return e[4]&&(o+="@supports (".concat(e[4],") {")),e[2]&&(o+="@media ".concat(e[2]," {")),t&&(o+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),o+=n(e),t&&(o+="}"),e[2]&&(o+="}"),e[4]&&(o+="}"),o})).join("")},e.i=function(n,o,t,r,A){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(t)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(i[c]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);t&&i[l[0]]||(void 0!==A&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=A),o&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=o):l[2]=o),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},537:n=>{n.exports=function(n){var e=n[1],o=n[3];if(!o)return e;if("function"==typeof btoa){var t=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t),A="/*# ".concat(r," */"),i=o.sources.map((function(n){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(n," */")}));return[e].concat(i).concat([A]).join("\n")}return[e].join("\n")}},379:n=>{var e=[];function o(n){for(var o=-1,t=0;t<e.length;t++)if(e[t].identifier===n){o=t;break}return o}function t(n,t){for(var A={},i=[],a=0;a<n.length;a++){var c=n[a],s=t.base?c[0]+t.base:c[0],l=A[s]||0,d="".concat(s," ").concat(l);A[s]=l+1;var C=o(d),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==C)e[C].references++,e[C].updater(p);else{var u=r(p,t);t.byIndex=a,e.splice(a,0,{identifier:d,updater:u,references:1})}i.push(d)}return i}function r(n,e){var o=e.domAPI(e);return o.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;o.update(n=e)}else o.remove()}}n.exports=function(n,r){var A=t(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<A.length;i++){var a=o(A[i]);e[a].references--}for(var c=t(n,r),s=0;s<A.length;s++){var l=o(A[s]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}A=c}}},569:n=>{var e={};n.exports=function(n,o){var t=function(n){if(void 0===e[n]){var o=document.querySelector(n);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(n){o=null}e[n]=o}return e[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(o)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,o)=>{n.exports=function(n){var e=o.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(o){!function(n,e,o){var t="";o.supports&&(t+="@supports (".concat(o.supports,") {")),o.media&&(t+="@media ".concat(o.media," {"));var r=void 0!==o.layer;r&&(t+="@layer".concat(o.layer.length>0?" ".concat(o.layer):""," {")),t+=o.css,r&&(t+="}"),o.media&&(t+="}"),o.supports&&(t+="}");var A=o.sourceMap;A&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(A))))," */")),e.styleTagTransform(t,n,e.options)}(e,n,o)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function o(t){var r=e[t];if(void 0!==r)return r.exports;var A=e[t]={id:t,exports:{}};return n[t](A,A.exports,o),A.exports}o.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return o.d(e,{a:e}),e},o.d=(n,e)=>{for(var t in e)o.o(e,t)&&!o.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},o.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),o.nc=void 0,(()=>{var n=o(379),e=o.n(n),t=o(795),r=o.n(t),A=o(569),i=o.n(A),a=o(565),c=o.n(a),s=o(216),l=o.n(s),d=o(589),C=o.n(d),p=o(189),u={};u.styleTagTransform=C(),u.setAttributes=c(),u.insert=i().bind(null,"head"),u.domAPI=r(),u.insertStyleElement=l(),e()(p.Z,u),p.Z&&p.Z.locals&&p.Z.locals;var f=o(575),g={};g.styleTagTransform=C(),g.setAttributes=c(),g.insert=i().bind(null,"head"),g.domAPI=r(),g.insertStyleElement=l(),e()(f.Z,g),f.Z&&f.Z.locals&&f.Z.locals;var b=o(173),h={};h.styleTagTransform=C(),h.setAttributes=c(),h.insert=i().bind(null,"head"),h.domAPI=r(),h.insertStyleElement=l(),e()(b.Z,h),b.Z&&b.Z.locals&&b.Z.locals})()})();
//# sourceMappingURL=main.js.map