var Cookie=function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=n(1);e.exports=function(t,n){var i="object"===("undefined"==typeof document?"undefined":o(document))&&"string"==typeof document.cookie,s=function(){if("object"===(void 0===t?"undefined":o(t))&&"object"===(void 0===n?"undefined":o(n))&&void 0!==e)return!0}();if(!i&&!s||i&&s)throw"Cannot detect env, something went wrong!";var a=function(e){if(s){var o=t.headers.cookie||"";return e&&(o=n.getHeaders(),o=o["set-cookie"]?o["set-cookie"].map(function(e){return e.split(";")[0]}).join(";"):""),o}if(i)return document.cookie||""},c=function(){var e=n.getHeader("Set-Cookie");return(e="string"==typeof e?[e]:e)||[]},u=function(e){return n.setHeader("Set-Cookie",e)},p={set:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{path:"/"};if(s){var o=c();o.push(r.serialize(e,t,n)),u(o)}else document.cookie=r.serialize(e,t,n)},setAll:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];Array.isArray(e)&&e.forEach(function(e){var t=e.name,n=void 0===t?"":t,o=e.value,r=void 0===o?"":o,i=e.opts,s=void 0===i?{path:"/"}:i;p.set(n,r,s)})},get:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments[1];return r.parse(a(t))[e]},getAll:function(e){return r.parse(a(e))},remove:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{path:"/"},n=p.get(e);t.expires=new Date(0),n&&p.set(e,"",t)},removeAll:function(){var e=r.parse(a());for(var t in e)p.remove(t)}};return p},e.exports.meta=n(2)},function(e,t,n){"use strict";function o(e,t){if("string"!=typeof e)throw new TypeError("argument str must be a string");for(var n={},o=t||{},r=e.split(c),a=o.decode||s,u=0;u<r.length;u++){var p=r[u],d=p.indexOf("=");if(!(d<0)){var l=p.substr(0,d).trim(),f=p.substr(++d,p.length).trim();'"'==f[0]&&(f=f.slice(1,-1)),void 0==n[l]&&(n[l]=i(f,a))}}return n}function r(e,t,n){var o=n||{},r=o.encode||a;if("function"!=typeof r)throw new TypeError("option encode is invalid");if(!u.test(e))throw new TypeError("argument name is invalid");var i=r(t);if(i&&!u.test(i))throw new TypeError("argument val is invalid");var s=e+"="+i;if(null!=o.maxAge){var c=o.maxAge-0;if(isNaN(c))throw new Error("maxAge should be a Number");s+="; Max-Age="+Math.floor(c)}if(o.domain){if(!u.test(o.domain))throw new TypeError("option domain is invalid");s+="; Domain="+o.domain}if(o.path){if(!u.test(o.path))throw new TypeError("option path is invalid");s+="; Path="+o.path}if(o.expires){if("function"!=typeof o.expires.toUTCString)throw new TypeError("option expires is invalid");s+="; Expires="+o.expires.toUTCString()}if(o.httpOnly&&(s+="; HttpOnly"),o.secure&&(s+="; Secure"),o.sameSite){switch("string"==typeof o.sameSite?o.sameSite.toLowerCase():o.sameSite){case!0:s+="; SameSite=Strict";break;case"lax":s+="; SameSite=Lax";break;case"strict":s+="; SameSite=Strict";break;default:throw new TypeError("option sameSite is invalid")}}return s}function i(e,t){try{return t(e)}catch(t){return e}}/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
t.parse=o,t.serialize=r;var s=decodeURIComponent,a=encodeURIComponent,c=/; */,u=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/},function(e,t){e.exports={name:"cookie-universal",version:"1.0.0",description:"Universal cookie plugin, perfect for SSR",main:"index.js",author:"Salvatore Tedde <microcipcip@gmail.com>",license:"MIT",scripts:{build:"webpack","demo-node":"nodemon ./demo/server","demo-express":"nodemon ./demo/server-express",dev:'nodemon index.js --exec "npm run lint && node"',lint:"eslint index.js","test-nodemon":'nodemon --exec "npm run testlint && npm run mocha"',test:"npm run testlint && npm run mocha",testlint:"eslint **/*.spec.js",mocha:'mocha "./{,!(node_modules)/**/}*.spec.js"',prepublish:"npm run build && npm test"},keywords:["universal cookie","SSR cookie","node cookie","browser cookie","cookies","cookie"],repository:"microcipcip/cookie-universal",dependencies:{cookie:"^0.3.1"},devDependencies:{"babel-core":"^6.26.0","babel-eslint":"^7.2.3","babel-loader":"^7.1.2","babel-preset-es2015":"^6.24.1",chai:"^4.1.2","chai-http":"^3.0.0","clean-webpack-plugin":"^0.1.17","date-fns":"^1.29.0",eslint:"^4.3.0","eslint-config-standard":"^10.2.1","eslint-plugin-import":"^2.8.0","eslint-plugin-node":"^5.1.1","eslint-plugin-promise":"^3.5.0","eslint-plugin-standard":"^3.0.1",express:"^4.16.2",jsdom:"^11.5.1",mocha:"^4.0.1",webpack:"^3.10.0","webpack-merge":"^4.1.1"},files:[]}}]);