(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"3niX":function(e,t,r){"use strict";t.__esModule=!0,t.flush=function(){var e=n.cssRules();return n.flush(),e},t.default=void 0;var s,i=r("q1tI");var n=new(((s=r("SevZ"))&&s.__esModule?s:{default:s}).default),o=function(e){var t,r;function s(t){var r;return(r=e.call(this,t)||this).prevProps={},r}r=e,(t=s).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,s.dynamic=function(e){return e.map((function(e){var t=e[0],r=e[1];return n.computeId(t,r)})).join(" ")};var i=s.prototype;return i.shouldComponentUpdate=function(e){return this.props.id!==e.id||String(this.props.dynamic)!==String(e.dynamic)},i.componentWillUnmount=function(){n.remove(this.props)},i.render=function(){return this.shouldComponentUpdate(this.prevProps)&&(this.prevProps.id&&n.remove(this.prevProps),n.add(this.props),this.prevProps=this.props),null},s}(i.Component);t.default=o},"9kyW":function(e,t,r){"use strict";e.exports=function(e){for(var t=5381,r=e.length;r;)t=33*t^e.charCodeAt(--r);return t>>>0}},MX0m:function(e,t,r){e.exports=r("3niX")},RNiq:function(e,t,r){"use strict";r.r(t);var s=r("o0o1"),i=r.n(s),n=r("HaE+"),o=r("q1tI"),u=r.n(o),l=(r("WMMs"),r("CafY")),a=r("THT8"),c=r("Qi1R"),h=u.a.createElement,d=function(e){return h(l.a,null,h("article",null,h("h1",{className:"title"},"Masaki Arizuka"),h("div",{className:"hr"}),h("div",{className:"links"},h("h2",null,"Links"),h("ul",null,h("li",null,h("a",{href:"https://github.com/arizuk",target:"_blank"},"Github")),h("li",null,h("a",{href:"https://atcoder.jp/users/arzk",target:"_blank"},"AtCoder")),h("li",null,h("a",{href:"https://codeforces.com/profile/arzk",target:"_blank"},"Codeforces")),h("li",null,h("a",{href:"https://www.kaggle.com/arizuk",target:"_blank"},"Kaggle")))),h("div",{className:"hr"}),h("div",{className:"contact"},h("h2",null,"Contact"),h("ul",null,h("li",null,h("a",{href:"https://linkedin.com/in/masakiarizuka",target:"_blank"},"Linkedin")),h("li",null,"masaki.arizuka(at)gmail.com"))),h("div",{className:"hr"})),h("section",null,h(a.a,{posts:e.posts})))};d.getInitialProps=function(){var e=Object(n.a)(i.a.mark((function e(t){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.req,e.next=3,Object(c.b)();case 3:return r=e.sent,e.abrupt("return",{posts:r});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t.default=d},SevZ:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var s=n(r("9kyW")),i=n(r("bVZc"));function n(e){return e&&e.__esModule?e:{default:e}}var o=function(){function e(e){var t=void 0===e?{}:e,r=t.styleSheet,s=void 0===r?null:r,n=t.optimizeForSpeed,o=void 0!==n&&n,u=t.isBrowser,l=void 0===u?"undefined"!==typeof window:u;this._sheet=s||new i.default({name:"styled-jsx",optimizeForSpeed:o}),this._sheet.inject(),s&&"boolean"===typeof o&&(this._sheet.setOptimizeForSpeed(o),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=l,this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce((function(e,t){return e[t]=0,e}),{}));var r=this.getIdAndRules(e),s=r.styleId,i=r.rules;if(s in this._instancesCounts)this._instancesCounts[s]+=1;else{var n=i.map((function(e){return t._sheet.insertRule(e)})).filter((function(e){return-1!==e}));this._indices[s]=n,this._instancesCounts[s]=1}},t.remove=function(e){var t=this,r=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: "+t+".")}(r in this._instancesCounts,"styleId: `"+r+"` not found"),this._instancesCounts[r]-=1,this._instancesCounts[r]<1){var s=this._fromServer&&this._fromServer[r];s?(s.parentNode.removeChild(s),delete this._fromServer[r]):(this._indices[r].forEach((function(e){return t._sheet.deleteRule(e)})),delete this._indices[r]),delete this._instancesCounts[r]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map((function(t){return[t,e._fromServer[t]]})):[],r=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map((function(t){return[t,e._indices[t].map((function(e){return r[e].cssText})).join(e._optimizeForSpeed?"":"\n")]})).filter((function(e){return Boolean(e[1])})))},t.createComputeId=function(){var e={};return function(t,r){if(!r)return"jsx-"+t;var i=String(r),n=t+i;return e[n]||(e[n]="jsx-"+(0,s.default)(t+"-"+i)),e[n]}},t.createComputeSelector=function(e){void 0===e&&(e=/__jsx-style-dynamic-selector/g);var t={};return function(r,s){this._isBrowser||(s=s.replace(/\/style/gi,"\\/style"));var i=r+s;return t[i]||(t[i]=s.replace(e,r)),t[i]}},t.getIdAndRules=function(e){var t=this,r=e.children,s=e.dynamic,i=e.id;if(s){var n=this.computeId(i,s);return{styleId:n,rules:Array.isArray(r)?r.map((function(e){return t.computeSelector(n,e)})):[this.computeSelector(n,r)]}}return{styleId:this.computeId(i),rules:Array.isArray(r)?r:[r]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce((function(e,t){return e[t.id.slice(2)]=t,e}),{})},e}();t.default=o},THT8:function(e,t,r){"use strict";var s=r("MX0m"),i=r.n(s),n=r("q1tI"),o=r.n(n),u=(r("CafY"),r("YFqc")),l=r.n(u),a=(r("Qi1R"),r("wd/R")),c=r.n(a),h=o.a.createElement;t.a=function(e){return h("section",{className:"jsx-1522626436"},e.posts.map((function(t,r){return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=e.date.substr(0,4),s=t?t.date.substr(0,4):null;return h("div",{key:e.href},r!==s?h("h3",{className:"code"},r):null,h("ul",null,h("li",null,h("div",{className:"post-date code"},c()(e.date).format("MMM DD")),h("div",{className:"title"},h(l.a,{as:"/posts/"+e.href,href:"/_post_content?id=".concat(e.href)},h("a",null,e.title))))))}(t,e.posts[r-1])})),h(i.a,{id:"1522626436"},["ul.jsx-1522626436,ol.jsx-1522626436{margin:40px 0;padding-left:50px;}","ul.jsx-1522626436 li.jsx-1522626436{word-wrap:break-word;}","ul.jsx-1522626436 img.jsx-1522626436{margin:40px 0;border-radius:5px;}"]))}},bVZc:function(e,t,r){"use strict";(function(e){function r(e,t){for(var r=0;r<t.length;r++){var s=t[r];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}t.__esModule=!0,t.default=void 0;var s="undefined"!==typeof e&&e.env&&!0,i=function(e){return"[object String]"===Object.prototype.toString.call(e)},n=function(){function e(e){var t=void 0===e?{}:e,r=t.name,n=void 0===r?"stylesheet":r,u=t.optimizeForSpeed,l=void 0===u?s:u,a=t.isBrowser,c=void 0===a?"undefined"!==typeof window:a;o(i(n),"`name` must be a string"),this._name=n,this._deletedRulePlaceholder="#"+n+"-deleted-rule____{}",o("boolean"===typeof l,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=l,this._isBrowser=c,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var h=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=h?h.getAttribute("content"):null}var t,n,u,l=e.prototype;return l.setOptimizeForSpeed=function(e){o("boolean"===typeof e,"`setOptimizeForSpeed` accepts a boolean"),o(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},l.isOptimizeForSpeed=function(){return this._optimizeForSpeed},l.inject=function(){var e=this;if(o(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(s||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,r){return"number"===typeof r?e._serverSheet.cssRules[r]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),r},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},l.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},l.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},l.insertRule=function(e,t){if(o(i(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!==typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var r=this.getSheet();"number"!==typeof t&&(t=r.cssRules.length);try{r.insertRule(e,t)}catch(u){return s||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var n=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,n))}return this._rulesCount++},l.replaceRule=function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var r=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!r.cssRules[e])return e;r.deleteRule(e);try{r.insertRule(t,e)}catch(n){s||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),r.insertRule(this._deletedRulePlaceholder,e)}}else{var i=this._tags[e];o(i,"old rule at index `"+e+"` not found"),i.textContent=t}return e},l.deleteRule=function(e){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];o(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)},l.flush=function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach((function(e){return e&&e.parentNode.removeChild(e)})),this._tags=[]):this._serverSheet.cssRules=[]},l.cssRules=function(){var e=this;return this._isBrowser?this._tags.reduce((function(t,r){return r?t=t.concat(Array.prototype.map.call(e.getSheetForTag(r).cssRules,(function(t){return t.cssText===e._deletedRulePlaceholder?null:t}))):t.push(null),t}),[]):this._serverSheet.cssRules},l.makeStyleTag=function(e,t,r){t&&o(i(t),"makeStyleTag acceps only strings as second parameter");var s=document.createElement("style");this._nonce&&s.setAttribute("nonce",this._nonce),s.type="text/css",s.setAttribute("data-"+e,""),t&&s.appendChild(document.createTextNode(t));var n=document.head||document.getElementsByTagName("head")[0];return r?n.insertBefore(s,r):n.appendChild(s),s},t=e,(n=[{key:"length",get:function(){return this._rulesCount}}])&&r(t.prototype,n),u&&r(t,u),e}();function o(e,t){if(!e)throw new Error("StyleSheet: "+t+".")}t.default=n}).call(this,r("8oxB"))},vlRD:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r("RNiq")}])}},[["vlRD",0,2,1,3,4]]]);