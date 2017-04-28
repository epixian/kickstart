!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.KsPaginator=n():(t.KickstartUI=t.KickstartUI||{},t.KickstartUI.KsPaginator=n())}(this,function(){return function(t){function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var e={};return n.m=t,n.c=e,n.i=function(t){return t},n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="",n(n.s=199)}({0:function(t,n){t.exports=function(t,n,e,r){var o,i=t=t||{},a=typeof t.default;"object"!==a&&"function"!==a||(o=t,i=t.default);var u="function"==typeof i?i.options:i;if(n&&(u.render=n.render,u.staticRenderFns=n.staticRenderFns),e&&(u._scopeId=e),r){var c=Object.create(u.computed||null);Object.keys(r).forEach(function(t){var n=r[t];c[t]=function(){return n}}),u.computed=c}return{esModule:o,exports:i,options:u}}},1:function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},10:function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},11:function(t,n,e){var r=e(9),o=e(34),i=e(31),a=Object.defineProperty;n.f=e(4)?Object.defineProperty:function(t,n,e){if(r(t),n=i(n,!0),r(e),o)try{return a(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},128:function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(n,"__esModule",{value:!0});var o=e(138),i=r(o);n.default={name:"KsPaginator",props:{limit:{type:Number,default:5},routed:{type:Boolean,default:!1},pageVar:{type:String,default:"page"},pagination:{type:Object,default:function(){return{total_count:0,total_pages:0,current_page:0,limit:10}}}},computed:{current_page:function(){return this.pagination.current_page},total_pages:function(){return this.pagination.total_pages},first_page:function(){return 1},is_first_page:function(){return this.current_page==this.first_page},last_page:function(){return this.total_pages},is_last_page:function(){return this.current_page==this.last_page},more_than_limit:function(){return this.last_page>this.limit},pages:function t(){for(var t=[],n=Math.round(this.limit/2),e=this.current_page-n;e+this.limit>this.last_page;)e--;e=e<0?0:e;for(var r=0,o=e;o<this.pagination.total_pages&&r<this.limit;o++)t.push(o+1),r++;return t},show_upper_range:function(){return this.more_than_limit&&this.pages[this.limit-1]<this.last_page},show_lower_range:function(){return this.more_than_limit&&this.pages[0]>this.first_page}},data:function(){return{}},methods:{changePage:function(t){if(!(t<=0||t>this.last_page)){if(!this.routed)return void this.$emit("input",t);var n=(0,i.default)({},this.$route.query);n[this.pageVar]=t,this.$router.push({to:{name:this.$route.name},params:this.$route.params,query:n})}}},components:{}}},13:function(t,n){var e=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=e)},138:function(t,n,e){t.exports={default:e(143),__esModule:!0}},14:function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},143:function(t,n,e){e(165),t.exports=e(13).Object.assign},158:function(t,n,e){"use strict";var r=e(26),o=e(50),i=e(42),a=e(44),u=e(35),c=Object.assign;t.exports=!c||e(14)(function(){var t={},n={},e=Symbol(),r="abcdefghijklmnopqrst";return t[e]=7,r.split("").forEach(function(t){n[t]=t}),7!=c({},t)[e]||Object.keys(c({},n)).join("")!=r})?function(t,n){for(var e=a(t),c=arguments.length,s=1,f=o.f,p=i.f;c>s;)for(var l,g=u(arguments[s++]),_=f?r(g).concat(f(g)):r(g),h=_.length,v=0;h>v;)p.call(g,l=_[v++])&&(e[l]=g[l]);return e}:c},16:function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},165:function(t,n,e){var r=e(29);r(r.S+r.F,"Object",{assign:e(158)})},17:function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},18:function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},183:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{directives:[{name:"show",rawName:"v-show",value:t.total_pages>1,expression:"total_pages > 1"}],staticClass:"pagination"},[e("ul",{staticClass:"row"},[e("li",[e("a",{staticClass:"prev-page",attrs:{href:"#"},on:{click:function(n){n.preventDefault(),n.stopPropagation(),t.changePage(t.current_page-1)}}},[t._v("\n                <\n            ")])]),t._v(" "),t.show_lower_range?[e("li",[e("a",{attrs:{href:"#"},on:{click:function(n){n.preventDefault(),n.stopPropagation(),t.changePage(t.first_page)}}},[t._v("\n                    "+t._s(t.first_page)+"\n                ")])]),t._v(" "),t.pages[0]!=t.first_page+1?e("li",{staticClass:"dot-pages"},[t._v("\n                ...\n            ")]):t._e()]:t._e(),t._v(" "),t._l(t.pages,function(n){return e("li",[e("a",{staticClass:"page-link",class:{"current-page":n==t.pagination.current_page},attrs:{href:"#"},on:{click:function(e){e.preventDefault(),e.stopPropagation(),t.changePage(n)}}},[t._v("\n                "+t._s(n)+"\n            ")])])}),t._v(" "),t.show_upper_range?[t.pages[t.limit-1]!=t.last_page-1?e("li",{staticClass:"dot-pages"},[t._v("\n                ...\n            ")]):t._e(),t._v(" "),e("li",[e("a",{attrs:{href:"#"},on:{click:function(n){n.preventDefault(),n.stopPropagation(),t.changePage(t.last_page)}}},[t._v("\n                    "+t._s(t.last_page)+"\n                ")])])]:t._e(),t._v(" "),e("li",[e("a",{staticClass:"next-page",attrs:{href:"#"},on:{click:function(n){n.preventDefault(),n.stopPropagation(),t.changePage(t.current_page+1)}}},[t._v("\n                >\n            ")])])],2)])},staticRenderFns:[]}},199:function(t,n,e){t.exports=e(97)},20:function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},21:function(t,n,e){var r=e(27)("keys"),o=e(22);t.exports=function(t){return r[t]||(r[t]=o(t))}},22:function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},23:function(t,n,e){var r=e(28);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},24:function(t,n,e){var r=e(10),o=e(1).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},25:function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},26:function(t,n,e){var r=e(37),o=e(25);t.exports=Object.keys||function(t){return r(t,o)}},27:function(t,n,e){var r=e(1),o="__core-js_shared__",i=r[o]||(r[o]={});t.exports=function(t){return i[t]||(i[t]={})}},28:function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},29:function(t,n,e){var r=e(1),o=e(13),i=e(23),a=e(5),u="prototype",c=function(t,n,e){var s,f,p,l=t&c.F,g=t&c.G,_=t&c.S,h=t&c.P,v=t&c.B,d=t&c.W,y=g?o:o[n]||(o[n]={}),m=y[u],x=g?r:_?r[n]:(r[n]||{})[u];g&&(e=n);for(s in e)(f=!l&&x&&void 0!==x[s])&&s in y||(p=f?x[s]:e[s],y[s]=g&&"function"!=typeof x[s]?e[s]:v&&f?i(p,r):d&&x[s]==p?function(t){var n=function(n,e,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,e)}return new t(n,e,r)}return t.apply(this,arguments)};return n[u]=t[u],n}(p):h&&"function"==typeof p?i(Function.call,p):p,h&&((y.virtual||(y.virtual={}))[s]=p,t&c.R&&m&&!m[s]&&a(m,s,p)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},31:function(t,n,e){var r=e(10);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},34:function(t,n,e){t.exports=!e(4)&&!e(14)(function(){return 7!=Object.defineProperty(e(24)("div"),"a",{get:function(){return 7}}).a})},35:function(t,n,e){var r=e(18);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},37:function(t,n,e){var r=e(6),o=e(7),i=e(40)(!1),a=e(21)("IE_PROTO");t.exports=function(t,n){var e,u=o(t),c=0,s=[];for(e in u)e!=a&&r(u,e)&&s.push(e);for(;n.length>c;)r(u,e=n[c++])&&(~i(s,e)||s.push(e));return s}},38:function(t,n,e){var r=e(17),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},4:function(t,n,e){t.exports=!e(14)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},40:function(t,n,e){var r=e(7),o=e(38),i=e(43);t.exports=function(t){return function(n,e,a){var u,c=r(n),s=o(c.length),f=i(a,s);if(t&&e!=e){for(;s>f;)if((u=c[f++])!=u)return!0}else for(;s>f;f++)if((t||f in c)&&c[f]===e)return t||f||0;return!t&&-1}}},42:function(t,n){n.f={}.propertyIsEnumerable},43:function(t,n,e){var r=e(17),o=Math.max,i=Math.min;t.exports=function(t,n){return t=r(t),t<0?o(t+n,0):i(t,n)}},44:function(t,n,e){var r=e(16);t.exports=function(t){return Object(r(t))}},5:function(t,n,e){var r=e(11),o=e(20);t.exports=e(4)?function(t,n,e){return r.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},50:function(t,n){n.f=Object.getOwnPropertySymbols},6:function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},7:function(t,n,e){var r=e(35),o=e(16);t.exports=function(t){return r(o(t))}},9:function(t,n,e){var r=e(10);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},97:function(t,n,e){var r=e(0)(e(128),e(183),null,null);t.exports=r.exports}})});