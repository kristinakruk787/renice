function outServeError(a,b){return window.mabayaPageServe?window.mabayaPageServe.fail(a,b):void 0}if("undefined"==typeof mabayaWidget&&"object"!=typeof mabayaWidget)var mabayaWidget={};mabayaWidget.Settings={},mabayaWidget.Settings.className="mabaya",mabayaWidget.Settings.arrayDelimiter=",",mabayaWidget.Settings.autoload=!1,mabayaWidget.Settings.Attributes={widgets:"data-widget"},mabayaWidget.Helper={},mabayaWidget.Helper.noop=function(a){return a},mabayaWidget.Helper.escapeEntities=function(a){var b=document.createElement("div");return b.innerHTML=a,decodeURIComponent(b.firstChild.nodeValue)},mabayaWidget.Helper.each=function(a,b){if("object"==typeof a&&a||"function"==typeof a&&!("call"in a))if("length"in a){var c=a.length;if(a)for(var d=0;c>d;d++)b(a[d],d)}else for(var e in a)b(a[e],e)},mabayaWidget.Helper.trim="function"==typeof String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^\s\s*/,"").replace(/\s\s*$/,"")},mabayaWidget.Helper.stripTags=function(a){return mabayaWidget.Helper.trim(a).replace(/<[^>]*>/g,"").replace(/\s+/g," ")},mabayaWidget.Helper.isNode=function(a){return"object"==typeof a&&a&&"nodeType"in a&&1==a.nodeType},mabayaWidget.Helper.indexOf="function"==typeof Array.prototype.indexOf?function(a,b){return a.indexOf(b)}:function(a,b){for(var c=a.length,d=0;c>d;d++)if(a[d]==b)return d;return-1},mabayaWidget.Helper.JSON="object"==typeof JSON?JSON:{parse:function(s){return eval("("+s.replace(/[\n\r]/g,"")+")")},stringify:function(a){if(a instanceof Object){var b="";if(a.constructor===Array){for(var c=0;c<a.length;b+=this.stringify(a[c])+",",c++);return"["+b.substr(0,b.length-1)+"]"}if(a.toString!==Object.prototype.toString)return'"'+a.toString().replace(/"/g,"\\$&")+'"';for(var d in a)b+='"'+d.replace(/"/g,"\\$&")+'":'+this.stringify(a[d])+",";return"{"+b.substr(0,b.length-1)+"}"}return"string"==typeof a?'"'+a.replace(/"/g,"\\$&")+'"':String(a)}},mabayaWidget.Helper.gVal=function(a){return a&&"function"==typeof a?a():a},mabayaWidget.Helper.Cookie=function(a,b){var c=mabayaWidget.Helper,d={expires:3600,path:"/",domain:document.location.host,secure:""},e=c.extend(d,b||{});return{put:function(b){switch(typeof b){case"undefined":case"function":case"unknown":return!1}var d=[a,"=",escape(c.JSON.stringify(b)),e.expires?"; expires="+new Date((new Date).getTime()+1e3*e.expires).toUTCString():"",e.path?"; path="+escape(e.path):"",e.domain?"; domain="+escape(e.domain):"",e.secure?"; secure":""].join("");try{window.document.cookie=d}catch(f){return console.log("Cookie set failed/",f),!1}return!0},remove:function(){try{window.document.cookie=[a,"=; expires=",new Date((new Date).getTime()-36e5).toUTCString(),e.path?"; path="+escape(e.path):"",e.domain?"; domain="+escape(e.domain):"",e.secure?"; secure":""].join("")}catch(b){return console.log("Cookie removal failed",b),!1}return!0},fetch:function(){var b=window.document.cookie.match(a+"=(.*?)(;|$)"),d=b&&b[1]?c.JSON.parse(unescape(b[1])):null,e=arguments&&arguments.length&&d?arguments[0]:null;return e?"object"==typeof d&&e in d?d[e]:null:d}}},mabayaWidget.Helper.hasClass=function(a,b){var c=new RegExp("(^|\\s)"+b+"(\\s|$)","g");return c.test(a.className)},mabayaWidget.Helper.addClass=function(a,b){mabayaWidget.Helper.hasClass(a,b)||(a.className=(a.className+" "+b).replace(/\s+/g," ").replace(/(^ | $)/g,""))},mabayaWidget.Helper.removeClass=function(a,b){var c=new RegExp("(^|\\s)"+b+"(\\s|$)","g");a.className=a.className.replace(c,"$1").replace(/\s+/g," ").replace(/(^ | $)/g,"")},mabayaWidget.Helper.getElementsByClassName="function"==typeof document.getElementsByClassName?function(a,b){var c="undefined"==typeof b?document:b;return c.getElementsByClassName(a)}:"function"==typeof document.querySelectorAll?function(a,b){var c="undefined"==typeof b?document:b;return c.querySelectorAll("."+a)}:function(a,b){var c=mabayaWidget.Helper,d="undefined"==typeof b?document:b,e=d.getElementsByTagName("*"),f=[];return c.each(e,function(b){b.className&&c.hasClass(b,a)&&-1===mabayaWidget.Helper.indexOf(f,b)&&f.push(b)}),f},mabayaWidget.Helper.extend=function(a,b){for(var c in b)b[c]&&b[c].constructor&&b[c].constructor===Object?(a[c]=a[c]||{},arguments.callee(a[c],b[property])):a[c]=b[c];return a},mabayaWidget.Helper.attachStyle=function(){var a=document.createElement("style"),b=document.getElementsByTagName("head");return a.type="text/css",b&&(b=b[0],b.appendChild(a)),function(b){a.styleSheet?a.styleSheet.cssText+=b:a.innerHTML+=b}}(),mabayaWidget.Helper.randomString=function(a){return Math.floor(Math.random()*Math.pow(10,a))},mabayaWidget.Helper.serialize=function(a){var b=[];return mabayaWidget.Helper.each(a,function(a,c){if(a)if("object"==typeof a){if("length"in a){var d=[];mabayaWidget.Helper.each(a,function(a){d.push(c+"="+encodeURIComponent(a))}),b.push(d.join("&"))}}else b.push(c+"="+encodeURIComponent(a))}),b.push("rand="+mabayaWidget.Helper.randomString(8)),b.join("&")},mabayaWidget.Helper.screenSize="innerWidth"in window&&"innerHeight"in window?function(){return{width:window.innerWidth,height:window.innerHeight}}:function(){var a=document.documentElement;return{width:a.clientWidth,height:a.clientHeight}},mabayaWidget.Helper.screenOrientation=function(){var a=mabayaWidget.Helper.screenSize();return a.width<a.height?"portrait":"landscape"},mabayaWidget.Helper.addEvent="addEventListener"in window?function(a,b,c){return a.addEventListener(b,c)}:function(a,b,c){a.attachEvent("on"+b,c)},mabayaWidget.Helper.removeEvent="removeEventListener"in window?function(a,b,c){return a.removeEventListener(b,c)}:function(a,b,c){a.detachEvent("on"+b,c)},mabayaWidget.Helper.parseUrl=function(a){var b="://",c=a.indexOf(b),d=c>0,e=d?a.substring(0,c):null,f=a.substring(d?c+b.length:0),g=f.indexOf("/"),h=g>-1,i=f.substr(0,h?g:f.length),j=i.indexOf(":"),k=j>-1,l=i.substring(0,k?j:i.length),m=k?i.substring(j+1,i.length):"",n=h?f.substring(g+1):"",o=n.indexOf("?"),p=n.indexOf("#"),q=o>=0,r=p>=0,s=n.substring(0,q?o:n.length).substring(0,r?p:n.length),t=s.split("/"),u=t&&t.length?t.pop():"",v=u.indexOf("."),w=v>=0;return t.length&&!t[0]&&t.shift(),{protocol:e,host:i,hostname:l,port:m,origin:d?e+b+i:i,pathname:s?"/"+s:"",filename:w?u.substring(0,v):u,extension:w?u.substring(v+1):"",search:q?n.substring(o,r&&p>o?p:n.length):"",hash:r?n.substring(p,q&&o>p?o:n.length):"",folders:t}},mabayaWidget.Helper.inUrl=function(a){return!!~window.location.href.indexOf("/"+a+"/")},mabayaWidget.Helper.isNumeric=function(a){return!isNaN(parseFloat(a))&&isFinite(a)},mabayaWidget.Helper.getUrlPathes=function(){var a=[];return mabayaWidget.Helper.each(location.pathname.split("/"),function(b){return b?a.push(b):void 0}),a},mabayaWidget.Helper.generateAttribute=function(a,b){for(var c=a&&a.split(".")||[],d=window;c.length;){var e=c.shift(),f=!c.length;f?"undefined"!=typeof b?d[e]=b:"undefined"==typeof d[e]&&(d[e]=null):"object"==typeof d[e]&&d[e]||(d[e]={}),d=d[e]}return d},mabayaWidget.Helper.domReady=function(){function a(){d?document.removeEventListener("DOMContentLoaded",a,!0):"complete"===document.readyState&&document.detachEvent("onreadystatechange",a),c()}function b(){if(!e){try{document.documentElement.doScroll("left")}catch(a){return void window.setTimeout(b,15)}c()}}function c(){if(!e){e=!0;for(var a=g.length,b=0;a>b;b++)g[b].call(document)}}var d=!!document.addEventListener,e=!1,f=!1,g=[];if(d)document.addEventListener("DOMContentLoaded",a,!0),window.addEventListener("load",c,!1);else{document.attachEvent("onreadystatechange",a),window.attachEvent("onload",c);try{f=null===window.frameElement}catch(h){}document.documentElement.doScroll&&f&&b()}return function(a){return e||"complete"===document.readyState||"loaded"==document.readyState||"interactive"==document.readyState?a.call(document):g.push(a)}}(),mabayaWidget.Test=function(){var a=mabayaWidget.Helper,b=new a.Cookie("_mabayaTestMode");return{on:function(){return!!b.put(1)},off:function(){return!!b.remove()},mode:function(){return!!b.fetch()}}}(),mabayaWidget.Request=function(){var a={ServerName:"widget.mabaya.com",api:{},Methods:{http:function(a,b,c){var d=window.XDomainRequest?!0:!1,e=d?new window.XDomainRequest:new XMLHttpRequest;e&&a&&(e.open("GET",a,!0),d?(e.onload=function(){"function"==typeof b&&b(e.responseText)},e.onerror=function(){"function"==typeof c&&c(e.responseText)}):e.onreadystatechange=function(){return 4==e.readyState?200!=e.status&&304!=e.status?void("function"==typeof c&&c()):void("function"==typeof b&&b(e.responseText)):void 0},4!=e.readyState&&e.send())},jsonp:function(a,b,c){var d=document.createElement("script");if(a){d.type="text/javascript",d.async=!0;var e=document.getElementsByTagName("body"),f=document.getElementsByTagName("script")[0];e=e&&e.length?e[0]:null,d.onload=function(a){"function"==typeof b&&b.call(d,a),e&&d.parentNode==e&&e.removeChild(d)},d.onerror=function(a){"function"==typeof c&&c.call(d,a),e&&d.parentNode==e&&e.removeChild(d)},d.src=a,f.parentNode.insertBefore(d,f)}},img:function(a,b,c){var d=document.createElement("img");if(a){d.src=a;var e=document.getElementsByTagName("body");e=e&&e.length?e[0]:null,d.onload=function(a){"function"==typeof b&&b.call(d,a),d.parentNode==e&&e.removeChild(d)},d.onerror=function(a){"function"==typeof c&&c.call(d,a),d.parentNode==e&&e.removeChild(d)},e.insertBefore(d,e.firstChild),d.style.height="0",d.style.display="block"}}},Session:{use:/constructor/i.test(window.HTMLElement),period:604800,domain:document.location.host,update:function(){var a=this;return new mabayaWidget.Helper.Cookie("mabaya",{expires:a.period,domain:a.domain})},read:function(){var a=this,b=a.update(),c=b.fetch(),d="bdb5fa60-79bd-416c-bafa-79d57471fa08";return c||b.put(d),c||d},setPeriod:function(a){var b=this;b.period=a,b.update()},setDomain:function(a){var b=this;b.domain=a,b.update()}},register:function(b,c,d){var e=arguments.length>3?arguments[3]:function(a){return a};d in a.Methods&&(a.api[b]=function(f,g,h){var i={};if("url"in f||!document.location.href||(i.url=document.location.href),"referrerUrl"in f||!document.referrer||(i.referrerUrl=document.referrer),!a.Session.use||"mcookie"in f||(i.mcookie=a.Session.read()),mabayaWidget.Helper.extend(f,i),"click"===b){(function(a){return a&&a.length&&(a=a.split("_"),a[0]&&(a=a[0].trim(),a&&a.length))?a:null})(f.mabaya_ad_info||f.sku||document.location.href)}a.Methods[d](a.buildUrl(c,e(f)),g,h)})},setServerName:function(a){a&&(this.ServerName=a)},isValidParams:function(a){var b=!0,c=!1;return mabayaWidget.Helper.each(a,function(a,d){c=!0,b&=d&&mabayaWidget.Helper.trim(d).length>0}),c&&b},buildUrl:function(a,b){return this.isValidParams(b)?[document.location.protocol,"//",this.ServerName,a,b?"?"+mabayaWidget.Helper.serialize(b):""].join(""):null}};return{setServerName:function(b){a.setServerName(b)},getServerName:function(){return a.ServerName},register:function(){a.register.apply(this,arguments)},getSession:function(){return a.Session.use?a.Session.read():null},setSessionPeriod:function(b){a.Session.setPeriod(b)},setSessionDomain:function(b){a.Session.setDomain(b)},api:a.api}}(),mabayaWidget.Request.register("visit","/pixel/visit","img"),mabayaWidget.Request.register("optimize","/optimize","http"),mabayaWidget.Request.register("converse","/pixel/conv","img"),mabayaWidget.Request.register("ad","/serve/ad.jsonp","jsonp"),mabayaWidget.Request.register("visibleAd","/pixel/thirdparty/visibleAd","img"),mabayaWidget.optimize=mabayaWidget.Request.api.optimize,mabayaWidget.converse=mabayaWidget.Request.api.converse,mabayaWidget.visit=mabayaWidget.Request.api.visit,mabayaWidget.ad=mabayaWidget.Request.api.ad,mabayaWidget.Widgets={},mabayaWidget.widgetNameFromAdInfo=function(a,b){if(!a)return b;var c=a.split("_");return(c=c[4]||null)?c.replace(new RegExp("-","g"),"_"):b},mabayaWidget.readAttributes=function(a){var b=mabayaWidget.Helper,c=mabayaWidget.Settings,d=c.Attributes,e=mabayaWidget.Widgets,f=function(){return document.getElementById("mabayaLoader")}(),g="tag=",h=f&&f.src.indexOf(g)>-1?f.src.substring(f.src.indexOf(g)+g.length).replace(/&[^&]*]/):"";mabayaWidget.preContainer=b.gVal(a);var i=mabayaWidget.preContainer?[].concat(mabayaWidget.preContainer):b.getElementsByClassName(c.className);c.tag=h,e.widgets=[],b.each(i,function(a){var f=a&&a.getAttribute(d.widgets);if(f&&(e.widgets.push(f.toLowerCase()),b.each(d,function(f,g){if(f!=d.widgets){var h=a.getAttribute(f);if(h)if(h.indexOf(c.arrayDelimiter)>-1){var i=[];b.each(h.split(c.arrayDelimiter),function(a){i.push(b.trim(a))}),e[g]=i}else e[g]=h}}),"url"in e||(e.url=document.location.href),"callback"in e||(e.callback="mabayaWidget.render"),!("signals"in e))){var g=[],h=document.getElementsByTagName("title"),i=document.getElementsByTagName("h1"),j=document.getElementsByTagName("meta");b.each(h,function(a){var c=b.trim(a.innerHTML);b.indexOf(g,c)<0&&g.push(c)}),b.each(i,function(a){var c=b.trim(b.stripTags(a.innerHTML));b.indexOf(g,c)<0&&g.push(c)}),b.each(j,function(a){var c=a.getAttribute("name"),d=null;if(c&&c.toLowerCase().indexOf("keywords")>-1&&(d=a.getAttribute("content"))){var e=d.split(/\s*,\s*/g);b.each(e,function(a){b.indexOf(g,a)<0&&g.push(a)})}}),e.signals=g}})},mabayaWidget.getIfContainer=function(a){return mabayaWidget.preContainer||mabayaWidget.Helper.gVal(a)||mabayaWidget.Helper.getElementsByClassName(mabayaWidget.Settings.className)[0]},mabayaWidget.onBeforeRender=mabayaWidget.Helper.noop,mabayaWidget.onAfterRender=mabayaWidget.Helper.noop,mabayaWidget.onAfterRenderAll=mabayaWidget.Helper.noop,mabayaWidget.render=function(a){var b=!(a&&a.payload&&a.payload.ads);b?setTimeout(function(){window._$check_event||outServeError(!0)}):window._$check_event=!0;var c=mabayaWidget.Helper,d=mabayaWidget.Settings,e="string"==typeof a?c.JSON.parse(a):a,f=e&&"object"==typeof e.payload?e.payload:null,g=f&&"object"==typeof f.ads?f.ads:null,h=[],i=function(a,b){if("groupName"in a){var e=c.getElementsByClassName(d.className),f=mabayaWidget.Request.getSession();return e&&e.length||(e=[].concat(mabayaWidget.getIfContainer())),b=b||{},c.each(h=e,function(e){var g=e.getAttribute(d.Attributes.widgets);if(!g)return!1;if(b[g.toLowerCase()]||(b[g.toLowerCase()]={status:!1,container:e}),g&&g.toLowerCase()==a.groupName.toLowerCase()){if("css"in a&&c.attachStyle(a.css),"html"in a&&(e.innerHTML=a.html),f){var h=e.getElementsByTagName("a"),i=mabayaWidget.Request.getServerName();c.each(h,function(a){var b=a.href;b&&b.indexOf(i)>-1&&(a.href+=(b.indexOf("?")>-1?"&":"?")+"mcookie="+f)})}(a.css||a.html&&a.html.length)&&(b[a.groupName.toLowerCase()].status=!0),mabayaWidget.onAfterRender(e,a.html,a.css)}}),b}return!1};if(g){var j="undefined"!==g.length&&g.length,k={};j?(c.each(g,function(a){var b=i(a,k);b&&(k=b)}),c.each(k,function(a){a.status||outServeError(!1,a.container)})):i(g)||outServeError(!0)}mabayaWidget.onAfterRenderAll(g)},mabayaWidget.start=function(a){var b=(window.mabayaPageServe?window.mabayaPageServe.getDefRequestParams("ad"):{})||{};a?(mabayaWidget.Helper.each(mabayaWidget.Widgets,function(a,c){"widgets"!==c&&(b[c]=a)}),mabayaWidget.Widgets.widgets&&mabayaWidget.Widgets.widgets.length&&mabayaWidget.Helper.each(mabayaWidget.Widgets.widgets,function(a,c){b["widget"+(c+1)]=a})):b=mabayaWidget.Helper.extend(b,mabayaWidget.Widgets);var c=!a&&window.mabayaPageServe&&window.mabayaPageServe.prof&&window.mabayaPageServe.prof.length,d=[],e=c?mabayaWidget.Widgets.widgets.filter(function(a){return-1!==window.mabayaPageServe.prof.indexOf(a)?(d.push(a),!1):!0}):mabayaWidget.Widgets.widgets,f=function(a){a.nSlots=1,mabayaWidget.Request.api.ad(a,function(a){mabayaWidget.render(mabayaWidget.onBeforeRender(a))})};return d&&d.length&&function(a){return a.widgets=d,!window.mabayaPageServe.slotsParams||-1===d.indexOf("gallery_page_w1")&&-1===d.indexOf("search_page_w1")||(a.nSlots=1),f(a)}(Object.assign({},b)),b.widgets=e,e&&e.length?f(b):void 0},mabayaWidget.readAttributes(),mabayaWidget.Settings.autoload&&mabayaWidget.start(),mabayaWidget.Tester=function(a){function b(){return!!sessionStorage.getItem(a)}if(!sessionStorage)return console.error("sessionStorage disabled");var c={status:b(),on:function(){return sessionStorage.setItem(a,"1"),c.status=b()},off:function(){return sessionStorage.removeItem(a),c.status=b()}};return c},mabayaWidget.Serve=function(){function a(a,b){k[a]=k[a]||[],k[a].push(b)}function b(a,b){return a&&b&&(j[a]=b),j[a]||null}function c(a,c,d){b(a,c),d&&e("def_"+a,d)}function d(a,c,d){return b(a)&&b(a)(d||{})||e("def_"+a)||c}function e(a,b){return a&&b&&(l[a]=b),l[a]||null}function f(a,b,c,d){mabayaWidget.started||window._serve_mabaya_start||(window._serve_mabaya_start=!0,mabayaWidget.start=function(a){return function(){return setTimeout(function(){mabayaWidget.v2?mabayaWidget.v2(a):a()})}}(mabayaWidget.start)),i.storeHash=a,i.cookieDomain=b,i.rHost=c,i.production=!!d,this.is={front:"/"===location.pathname,search:!1,cart:!1,product:!1,category:!1},this.addData={},this.query=this.getQuery(),this.pageType=null,this.test=!!window.isTestingMabayaWidgetByExtention,this.dontCheckHost=!1,this.beforeSendAdRequest=function(){return!0},this.beforeStart=function(){return!0},this.canDoRequest=function(){return!0},mabayaWidget.v2=this.start.bind(this),this.init()}function g(a,b,c){var d={};if(b&&b.length){var e=a.split(c);mabayaWidget.Helper.each(b,function(a,b){a&&(d[a]=e[b]||null)})}return d}function h(a){var b={};return mabayaWidget.Helper.each([].concat(a),function(a){mabayaWidget.Helper.each(a,function(a,c){b[c]=a})}),b}var i={cookieDomain:null,rHost:null},j={},k={},l={};return f.prototype={},f.prototype.isRightHost=function(){return i.rHost.test(document.location.host)},f.prototype.init=function(){mabayaWidget.Request.setSessionDomain(i.cookieDomain)},f.prototype.status=function(){return!!mabayaWidget.Test.mode()},f.prototype.enable=function(){return mabayaWidget.Test.on()},f.prototype.disable=function(){return mabayaWidget.Test.off()},f.prototype.getPageType=function(){var c=this;return function(b){if(!b)return a("global","Need to set pageType getter");for(var d in c.is)if(c.is.hasOwnProperty(d)&&(c.is[d]=b(d),c.is[d]))return c.pageType=d;return null}(b("pageType"))},f.prototype.getQuery=function(){var a={},b=document.location.search.replace(/^\?/,"").replace(/#[^#]$/,"").split("&");return mabayaWidget.Helper.each(b,function(b){b=b.split("="),b.length&&b[0]&&(a[b[0]]=b[1]||!0)}),a},f.prototype.getExp=function(a){if(a)return k;for(var b in k)if(k.hasOwnProperty(b)&&k[b]&&k[b].length){console.group(b);for(var c in k[b])k[b][c]&&console.info(k[b][c]);console.groupEnd(b)}},f.prototype.config=function(a){this.__config__=a,this.__config__callback&&this.__config__callback()},f.prototype.getConfig=function(a){var b=this,c=function(){b.__config__&&b.__config__(),a()};this.__config__?c():this.__config__callback=c},f.prototype.start=function(b){if(this.forceDisabled)return this.fail(!0,null,a("global","Force Disabled"));if(this.dontCheckHost||this.isRightHost()){var c=this;c.getConfig(function(){mabayaWidget.Helper.domReady(function(){setTimeout(function(){c.run(b)})})})}else this.fail(!0,null,a("global","Wrong host"))},f.prototype.run=function(b){var c=this;c.query=c.getQuery(),c.getPageType(),!c.pageType&&(c.pageType=e("def_pageType"))&&(c.is[c.pageType]=!0),c.signals=[].concat(d("pageSignals")).map(function(a){return a&&a.toLowerCase?a.toLowerCase():a}),c.is.product&&(c.productId=d("ProductId")),c.isProduction&&!c.status()&&c.enable(),setTimeout(function(){return c.test||c.$disableVisit||c.__Visit(),c.status()?(c.__AdScript(b),void(c.test&&setTimeout(function(){c.getExp()}))):c.fail(!0,null,a("adScript","Test mode disabled"))})},f.prototype.setPage=function(a,b){return c("pageType",a,b)},f.prototype.setSignals=function(a,b){return c("pageSignals",a,b)},f.prototype.setProductId=function(a,b){return c("ProductId",a,b)},f.prototype.setContainers=function(a,b){return c("adContainers",a,b)},f.prototype.postConfig=function(a){return c("postConfig",a)},f.prototype.afterRender=function(a){return mabayaWidget.onAfterRender=function(b,c,d){a&&a(b,c,d)}},f.prototype.canStart=function(a){return a?window.mabayaPageServe.enable():window.mabayaPageServe.status()},f.prototype.onFail=function(a){return this.failCallback=a,this},f.prototype.fail=function(a,b){return this.failCallback&&this.failCallback(a,b),0},f.prototype.unserialize=function(a,b,c,d){var e={};if(a){var f=a.getElementsByClassName("mabayaSerializedInfo mabayaSerializedInfo-"+b);f&&f.length&&mabayaWidget.Helper.each(f,function(a){e=g((a.textContent||a.innerText).trim(),c,d)})}return e},f.prototype.updateDataFromSerialized=function(a,b){a&&(b=h(b),function(a){for(var c=a.length-1;c>=0;c--)!function(a){if(a){var c=a.getAttribute("data-insert")||a.getAttribute("data-insert-inside");if(c&&b.hasOwnProperty(c))!function(d){d&&(d.textContent=b[c],a.setAttribute("class",""))}(a.getAttribute("data-insert")?a:a.getElementsByClassName("_data_")[0]);else{var d=!1;mabayaWidget.Helper.each(a.getElementsByClassName("_data_"),function(a){var c=a.getAttribute("data-insert");c&&b[c]&&(d||(d=!0),a.textContent=b[c])}),d&&a.setAttribute("class","")}}}(a[c])}(a.getElementsByClassName("_sData_")))},f.prototype.urlPath=function(){var a=null;return function(){return a||(a=mabayaWidget.Helper.getUrlPathes())}}(),f.prototype.getDefRequestParams=function(a){var b=mabayaWidget.Helper.extend({},this.addData["*"])||{};if(!a)return b;var c=this.addData[a];return mabayaWidget.Helper.extend(b,c)},f.prototype.__Visit=function(){if(mabayaWidget.visited)return a("visit","Already visited");mabayaWidget.visited=!0;var b=mabayaWidget.Helper.extend(this.getDefRequestParams("visit"),{storeHash:i.storeHash,isSearch:this.is.search?1:0});if(this.sendVisitPageType&&(b.pageType=this.pageType),this.sendVisitSignals){var c=this.sendVisitSignals instanceof Function?this.sendVisitSignals():this.signals;b.signal=(c||[]).map(function(a){return a&&a.toLowerCase?a.toLowerCase():a})}var d=function(a,c){if(this[c]){var d=this[c]();d&&(b[a]=d)}}.bind(this);return this.is.product&&(d("price","sendVisitPrice"),d("category","sendVisitCategory"),d("sku","sendVisitSku")),this.is.product&&(this.productId?b.productSiteId=this.productId:a("visit","Product page, but can't find ID")),this.canDoRequest()?mabayaWidget.Request.api.visit(b):a("visit","canDoRequestHook block request")},f.prototype.setGetter=function(a,b,d){return c(a,b,d)},f.prototype.__AdScript=function(b){if(mabayaWidget.started&&!this.test)return this.fail(!0,null,a("adScript","Already started"));var c=this;return c.adScriptStarted=!0,d("postConfig"),c.containers=mabayaWidget.Helper.gVal(d("adContainers")),mabayaWidget.readAttributes(c.containers),mabayaWidget.Widgets.widgets.length?(mabayaWidget.Widgets.signals=c.signals,mabayaWidget.Widgets.storeHash=i.storeHash,mabayaWidget.Widgets.callback=d("adScriptCallback")||"mabayaWidget.render",mabayaWidget.Widgets.pageType=d("adScriptPageType")||c.pageType,c.test&&(mabayaWidget.Widgets.isTestingWidget=1,mabayaWidget.Widgets.url=location.protocol+"//"+location.host+"/search",window.testingMabayaWidgetByExtentionSignals&&window.testingMabayaWidgetByExtentionSignals.length&&(mabayaWidget.Widgets.signals=window.testingMabayaWidgetByExtentionSignals),mabayaWidget.Widgets.SearchTerms=mabayaWidget.Widgets.signals),c.productId&&(mabayaWidget.Widgets.productSiteId=c.productId),(c.is.search||c.forceSearchTerm)&&(mabayaWidget.Widgets.SearchTerms=c.forceSearchTerm||mabayaWidget.Widgets.signals),mabayaWidget.Widgets.widgets&&mabayaWidget.Widgets.widgets.length?mabayaWidget.Widgets.signals&&mabayaWidget.Widgets.signals.length?(mabayaWidget.Widgets.widgets=function(a){var b=[];return mabayaWidget.Helper.each(a,function(a){return~b.indexOf(a)?void 0:b.push(a)}),b}(mabayaWidget.Widgets.widgets),this.beforeSendAdRequest()?this.canDoRequest()?(mabayaWidget.started=!0,void(b&&b(!!c.wAsdiff))):this.fail(!0,null,a("adScript","canDoRequestHook block ads request")):this.fail(!0,null,a("adScript","beforeSendHook block ads request"))):this.fail(!0,null,a("adScript","Dont have any signals")):this.fail(!0,null,a("adScript","Dont have any containers"))):this.fail(!0,null,a("adScript","Can't find ad containers"))},f}(),mabayaWidget.Visit=function(){function a(a,b){return(d[a]||(d[a]=[])).push(b),!1}function b(a,b,d){this.test=!!window.isTestingMabayaWidgetByExtention,c.storeHash=a,c.cookieDomain=b,c.rHost=d}var c={},d={},e=function(){function a(a){return"function"==typeof a?a():a}function b(){this.list={}}return b.prototype.set=function(a,b){return a?this.list[a]=b:void 0},b.prototype.get=function(a){return this.list[a]||null},b.prototype.run=function(b,c){return a(this.get(b))||c},new b}();return function(b){b.isRightHost=function(){return c.rHost.test(document.location.host)},b.init=function(){mabayaWidget.Request.setSessionDomain(c.cookieDomain)},b.config=function(b){return this.isRightHost()?(this.init(),b&&b(),function(a){mabayaWidget.Helper.domReady(function(){setTimeout(function(){a.run()})})}(this),void 0):a("config","Wrong host")},b.getQuery=function(){var a={},b=document.location.search.replace(/^\?/,"").replace(/#[^#]$/,"").split("&");return mabayaWidget.Helper.each(b,function(b){b=b.split("="),b.length&&b[0]&&(a[b[0]]=b[1]||!0)}),a},b.getExp=function(a){if(a)return d;for(var b in d)if(d.hasOwnProperty(b)&&d[b]&&d[b].length){console.group(b);for(var c in d[b])d[b][c]&&console.info(d[b][c]);console.groupEnd(b)}},b.run=function(){var b={storeHash:c.storeHash,url:location.href,referrerUrl:document.referrer};if(this.query=this.getQuery(),this.pageType=e.run("pageType","category"),b.signal=e.run("pageSignals",[]),"product"===this.pageType){var d=e.run("productId");d&&(b.productId=d)}return mabayaWidget.visited?a("run","Already visited"):(this.test&&console.info(b),mabayaWidget.visited=!0,mabayaWidget.visit(b)),this.test?this.getExp():void 0},b.setPageType=function(a){return e.set("pageType",a)},b.setSignals=function(a){return e.set("pageSignals",a)},b.setProductId=function(a){return e.set("productId",a)}}(b.prototype={}),b}(),mabayaWidget.Conv=function(){function a(a,b){this.storeHash=a,this.host=b,this.dontCheckHost=!1}return function(a){a.ready=function(a){return(this.dontCheckHost||this.host.test(document.location.host))&&mabayaWidget.Helper.domReady(a)||null};var b,c=0;a.wait=function(a,d){return a?b=setInterval(function(){var e=a();return c++,e||c>9?(clearInterval(b),e&&d&&d(e)):void 0},50):null},a.send=function(a){var b=this;return mabayaWidget.converse({storeHash:b.storeHash,ord:mabayaWidget.Helper.JSON.stringify(a)})}}(a.prototype={}),a}(),!!window.isTestingMabayaWidgetByExtention&&!function(){return window.testTemplate=function(){mabayaWidget.Request.setServerName("eu.widget.sp-srv.com"),mabayaWidget.Request.api.ad({SearchTerms:"yoni",callback:"mabayaWidget.render",pageType:"SEARCH",signals:["yoni"],storeHash:"1492fb8c054f5337b0cb17890215666606a2503b4",tag:"fliegende-pillen-general",isTestingWidget:1,url:"https://www.fliegende-pillen.de/search/result?term=yoni&row=0&order_by=Relevance&order_direction=DESC&kti=mabaya",widgets:"search_result_w1"},function(){})}}(),new mabayaWidget.Helper.Cookie("_mab_cc_").remove(),mabayaWidget.Request.setServerName("us.widget.mb-srv.com"),window.mabayaConfig={hash:"98af9191b489d90514047524c1f39bedf44a2a8bb0edd882650acf44a92e0284",siteHost:/linio\.[^\.]*\.[^\.]*/},function(){try{var a=function(a){return window.mabayaConfig&&delete window.mabayaConfig,a}(window.mabayaConfig);if(!a)return console.warn("[MABAYA] -C");var b=a.hash,c=a.siteHost.test(document.location.host),d=mabayaWidget.Helper,e=function(a,b){return b&&a in b&&null!=b[a]&&b[a]||null},f=function(){var a=e("dataLayer",window),b=a&&e("length",a)&&a[0];return b&&setTimeout(function(){return h(b)},1e3),b},g=function(){var a={},b=document.location.search.replace(/^\?/,"").replace(/#[^#]$/,""),c=b.split("&");return d.each(c,function(b){var c=b.split("=");c.length>1&&(a[c[0]]=c[1])}),a}();mabayaWidget.Request.register("impression","/pixel/impressionAndVisit","img"),mabayaWidget.Request.register("miss","/pixel/missAndVisit","img"),mabayaWidget.Request.register("click","/server2server/click","img");var h=function(a){var f=document.location.pathname,h=e("pageType",a)||(!f||"/"==f)&&"home"||/^\/?c\//.test(f)&&"category"||/^\/?search/.test(f)&&"search"||/^\/?p\//.test(f)&&"product"||"other";("categoryBrand"===h||"campaign"===h)&&(h="category");var i=function(){switch(h){case"product":case"category":var b=function(){for(var b=1,c="",d=[];c=e("category"+b,a);)d.push(c),b++;if(!d.length&&"category"==h){var g=/^\/?c\/(.+)/.exec(f);g&&g.length>1&&d.push.apply(d,g[1].split("/"))}return d}();if("product"===h)return b;var c=document.getElementsByClassName("catalogue-title section-title");return c[0]||(c=document.getElementsByClassName("static-page-content"),c&&c[0]&&(c=c[0].getElementsByTagName("h1"))),c&&c[0]&&(c=c[0]),c&&(c=c.textContent),c?[c]:b.length?b:[];case"search":return function(){var a="";return d.each(document.forms,function(b){b.action.indexOf("/search")>-1&&"q"in b&&b.q.value&&(a=b.q.value)}),a}();case"home":return["leading_ads"];default:return[]}}(),j=null,k=null,l=null,m=null;"product"===h&&(window.dataLayer&&window.dataLayer[0]&&window.dataLayer[0].ecommerce&&window.dataLayer[0].ecommerce.detail&&window.dataLayer[0].ecommerce.detail.products&&window.dataLayer[0].ecommerce.detail.products[0]&&window.dataLayer[0].ecommerce.detail.products[0]?(j=window.dataLayer[0].ecommerce.detail.products[0].id?[window.dataLayer[0].ecommerce.detail.products[0].id]:i,j=(j||[]).map(function(a){return a&&a.toLowerCase?a.toLowerCase():a}),window.dataLayer[0].ecommerce.detail.products[0].price&&(k=[window.dataLayer[0].ecommerce.detail.products[0].price]),window.dataLayer[0].ecommerce.detail.products[0].brand&&(l=window.dataLayer[0].ecommerce.detail.products[0].brand?window.dataLayer[0].ecommerce.detail.products[0].brand.toLowerCase():null)):j=i,m=function(a){if(a){var b=a.indexOf("?");if(-1!==b)return a=new URLSearchParams(a.substr(b)),a=a.get("q"),a?a.toLowerCase():null}return null}(document.referrer));var n=dataLayer&&dataLayer[0]&&dataLayer[0].category_full;n&&n.replace&&(n=n.replace(/\//g,">>").replace(/-/g," "));var o=function(){if(!e("visited",mabayaWidget)){mabayaWidget.visited=!0;var c={storeHash:b,pageType:h,isSearch:"search"===h?1:0,signal:i};if("product"===h){var d=e("sku_config",a);d&&(c.productId=d,c.productSiteId=d),c.signal=j,c.price=k,l&&(c.brand=l),m&&(c.referrerTitle=m),n&&(c.category=n)}mabayaWidget.visit(c)}},p=function(){mabayaWidget.readAttributes();var a=mabayaWidget.Widgets,c=a.widgets.length>0;a.signals=i,a.storeHash=b,mabayaWidget.Test.mode()&&a.signals.length&&c&&!mabayaWidget.started&&(mabayaWidget.started=!0,mabayaWidget.start())},q=function(){if(h&&-1!=d.indexOf(["home","category","product","search"],h)&&i.length){var c=document.location.href,f=document.referrer,l=e("sku_config",a),m=("ad_id"in g&&g.ad_id||null,"widget"in g&&g.widget||"gallery_page_w1"),p=("s"in g&&g.s&&d.trim(decodeURIComponent(g.s)).replace(/\s/g,"-")||null,l),q=document.querySelectorAll("[data-ad-id]"),r=[];if(q&&q.length)for(var s=q.length-1;s>=0;s--)q[s].getAttribute("data-ad-id")&&r.push(q[s].getAttribute("data-ad-id"));var t=Array.isArray(i)?i.map(function(a){return a.toLowerCase()}):i.toLowerCase();if(r.length){var u={mabaya_ad_info:r,url:c,pageType:h,storeHash:b,widgetName:m,signal:t};"product"===h&&(u.signal=j,u.price=k,n&&(u.category=n)),f&&(u.referrerUrl=f),p&&(u.productSiteId=p),mabayaWidget.Request.api.impression(u)}else if("product"!=h){var v={url:c,storeHash:b,pageType:h,widgetName:m,signal:t,isSearch:"search"==h?"1":"0"};"product"===h&&(v.signal=j,v.price=k,n&&(v.category=n)),f&&(v.referrerUrl=f),p&&(v.productSiteId=p),mabayaWidget.Request.api.miss(v)}else o()}},r=function(){if("product"==h){var c={sku:e("sku_config",a),url:encodeURIComponent(document.referrer),storeHash:b,signal:i,widgetName:"widget"in g&&g.widget||null,mabaya_ad_info:"ad_id"in g&&g.ad_id||null};c.sku&&c.url&&c.widgetName&&c.mabaya_ad_info&&mabayaWidget.Request.api.click(c)}};c&&(p(),q(),r())
};d.domReady(function(){if(!f())var a=setInterval(function(){f()&&clearInterval(a)},10)})}catch(i){console.warn(i)}}();