(function(){function e(t,r){function i(e){if(i[e]!==v)return i[e];var t;if("bug-string-char-index"==e)t="a"!="a"[0];else if("json"==e)t=i("json-stringify")&&i("json-parse");else{var n,o='{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';if("json-stringify"==e){var c=r.stringify,u="function"==typeof c&&b;if(u){(n=function(){return 1}).toJSON=n;try{u="0"===c(0)&&"0"===c(new s)&&'""'==c(new a)&&c(y)===v&&c(v)===v&&c()===v&&"1"===c(n)&&"[1]"==c([n])&&"[null]"==c([v])&&"null"==c(null)&&"[null,null,null]"==c([v,y,null])&&c({a:[n,!0,!1,null,"\0\b\n\f\r\t"]})==o&&"1"===c(null,n)&&"[\n 1,\n 2\n]"==c([1,2],null,1)&&'"-271821-04-20T00:00:00.000Z"'==c(new l(-864e13))&&'"+275760-09-13T00:00:00.000Z"'==c(new l(864e13))&&'"-000001-01-01T00:00:00.000Z"'==c(new l(-621987552e5))&&'"1969-12-31T23:59:59.999Z"'==c(new l(-1))}catch(p){u=!1}}t=u}if("json-parse"==e){var f=r.parse;if("function"==typeof f)try{if(0===f("0")&&!f(!1)){n=f(o);var d=5==n.a.length&&1===n.a[0];if(d){try{d=!f('"\t"')}catch(p){}if(d)try{d=1!==f("01")}catch(p){}if(d)try{d=1!==f("1.")}catch(p){}}}}catch(p){d=!1}t=d}}return i[e]=!!t}t||(t=o.Object()),r||(r=o.Object());var s=t.Number||o.Number,a=t.String||o.String,c=t.Object||o.Object,l=t.Date||o.Date,u=t.SyntaxError||o.SyntaxError,f=t.TypeError||o.TypeError,d=t.Math||o.Math,p=t.JSON||o.JSON;"object"==typeof p&&p&&(r.stringify=p.stringify,r.parse=p.parse);var h,m,v,g=c.prototype,y=g.toString,b=new l(-0xc782b5b800cec);try{b=-109252==b.getUTCFullYear()&&0===b.getUTCMonth()&&1===b.getUTCDate()&&10==b.getUTCHours()&&37==b.getUTCMinutes()&&6==b.getUTCSeconds()&&708==b.getUTCMilliseconds()}catch(J){}if(!i("json")){var w=i("bug-string-char-index");if(!b)var S=d.floor,x=[0,31,59,90,120,151,181,212,243,273,304,334],k=function(e,t){return x[t]+365*(e-1970)+S((e-1969+(t=+(t>1)))/4)-S((e-1901+t)/100)+S((e-1601+t)/400)};if((h=g.hasOwnProperty)||(h=function(e){var t,n={};return(n.__proto__=null,n.__proto__={toString:1},n).toString!=y?h=function(e){var t=this.__proto__,n=e in(this.__proto__=null,this);return this.__proto__=t,n}:(t=n.constructor,h=function(e){var n=(this.constructor||t).prototype;return e in this&&!(e in n&&this[e]===n[e])}),n=null,h.call(this,e)}),m=function(e,t){var r,o,i,s=0;(r=function(){this.valueOf=0}).prototype.valueOf=0,o=new r;for(i in o)h.call(o,i)&&s++;return r=o=null,s?m=2==s?function(e,t){var n,r={},o="[object Function]"==y.call(e);for(n in e)o&&"prototype"==n||h.call(r,n)||!(r[n]=1)||!h.call(e,n)||t(n)}:function(e,t){var n,r,o="[object Function]"==y.call(e);for(n in e)o&&"prototype"==n||!h.call(e,n)||(r="constructor"===n)||t(n);(r||h.call(e,n="constructor"))&&t(n)}:(o=["valueOf","toString","toLocaleString","propertyIsEnumerable","isPrototypeOf","hasOwnProperty","constructor"],m=function(e,t){var r,i,s="[object Function]"==y.call(e),a=!s&&"function"!=typeof e.constructor&&n[typeof e.hasOwnProperty]&&e.hasOwnProperty||h;for(r in e)s&&"prototype"==r||!a.call(e,r)||t(r);for(i=o.length;r=o[--i];a.call(e,r)&&t(r));}),m(e,t)},!i("json-stringify")){var j={92:"\\\\",34:'\\"',8:"\\b",12:"\\f",10:"\\n",13:"\\r",9:"\\t"},C=function(e,t){return("000000"+(t||0)).slice(-e)},E=function(e){for(var t='"',n=0,r=e.length,o=!w||r>10,i=o&&(w?e.split(""):e);n<r;n++){var s=e.charCodeAt(n);switch(s){case 8:case 9:case 10:case 12:case 13:case 34:case 92:t+=j[s];break;default:if(s<32){t+="\\u00"+C(2,s.toString(16));break}t+=o?i[n]:e.charAt(n)}}return t+'"'},_=function(e,t,n,r,o,i,s){var a,c,l,u,d,p,g,b,w,x,j,A,N,O,M,T;try{a=t[e]}catch(J){}if("object"==typeof a&&a)if("[object Date]"!=(c=y.call(a))||h.call(a,"toJSON"))"function"==typeof a.toJSON&&("[object Number]"!=c&&"[object String]"!=c&&"[object Array]"!=c||h.call(a,"toJSON"))&&(a=a.toJSON(e));else if(a>-1/0&&a<1/0){if(k){for(d=S(a/864e5),l=S(d/365.2425)+1970-1;k(l+1,0)<=d;l++);for(u=S((d-k(l,0))/30.42);k(l,u+1)<=d;u++);d=1+d-k(l,u),p=(a%864e5+864e5)%864e5,g=S(p/36e5)%24,b=S(p/6e4)%60,w=S(p/1e3)%60,x=p%1e3}else l=a.getUTCFullYear(),u=a.getUTCMonth(),d=a.getUTCDate(),g=a.getUTCHours(),b=a.getUTCMinutes(),w=a.getUTCSeconds(),x=a.getUTCMilliseconds();a=(l<=0||l>=1e4?(l<0?"-":"+")+C(6,l<0?-l:l):C(4,l))+"-"+C(2,u+1)+"-"+C(2,d)+"T"+C(2,g)+":"+C(2,b)+":"+C(2,w)+"."+C(3,x)+"Z"}else a=null;if(n&&(a=n.call(t,e,a)),null===a)return"null";if("[object Boolean]"==(c=y.call(a)))return""+a;if("[object Number]"==c)return a>-1/0&&a<1/0?""+a:"null";if("[object String]"==c)return E(""+a);if("object"==typeof a){for(O=s.length;O--;)if(s[O]===a)throw f();if(s.push(a),j=[],M=i,i+=o,"[object Array]"==c){for(N=0,O=a.length;N<O;N++)A=_(N,a,n,r,o,i,s),j.push(A===v?"null":A);T=j.length?o?"[\n"+i+j.join(",\n"+i)+"\n"+M+"]":"["+j.join(",")+"]":"[]"}else m(r||a,function(e){var t=_(e,a,n,r,o,i,s);t!==v&&j.push(E(e)+":"+(o?" ":"")+t)}),T=j.length?o?"{\n"+i+j.join(",\n"+i)+"\n"+M+"}":"{"+j.join(",")+"}":"{}";return s.pop(),T}};r.stringify=function(e,t,r){var o,i,s,a;if(n[typeof t]&&t)if("[object Function]"==(a=y.call(t)))i=t;else if("[object Array]"==a){s={};for(var c,l=0,u=t.length;l<u;c=t[l++],("[object String]"==(a=y.call(c))||"[object Number]"==a)&&(s[c]=1));}if(r)if("[object Number]"==(a=y.call(r))){if((r-=r%1)>0)for(o="",r>10&&(r=10);o.length<r;o+=" ");}else"[object String]"==a&&(o=r.length<=10?r:r.slice(0,10));return _("",(c={},c[""]=e,c),i,s,o,"",[])}}if(!i("json-parse")){var A,N,O=a.fromCharCode,M={92:"\\",34:'"',47:"/",98:"\b",116:"\t",110:"\n",102:"\f",114:"\r"},T=function(){throw A=N=null,u()},q=function(){for(var e,t,n,r,o,i=N,s=i.length;A<s;)switch(o=i.charCodeAt(A)){case 9:case 10:case 13:case 32:A++;break;case 123:case 125:case 91:case 93:case 58:case 44:return e=w?i.charAt(A):i[A],A++,e;case 34:for(e="@",A++;A<s;)if((o=i.charCodeAt(A))<32)T();else if(92==o)switch(o=i.charCodeAt(++A)){case 92:case 34:case 47:case 98:case 116:case 110:case 102:case 114:e+=M[o],A++;break;case 117:for(t=++A,n=A+4;A<n;A++)(o=i.charCodeAt(A))>=48&&o<=57||o>=97&&o<=102||o>=65&&o<=70||T();e+=O("0x"+i.slice(t,A));break;default:T()}else{if(34==o)break;for(o=i.charCodeAt(A),t=A;o>=32&&92!=o&&34!=o;)o=i.charCodeAt(++A);e+=i.slice(t,A)}if(34==i.charCodeAt(A))return A++,e;T();default:if(t=A,45==o&&(r=!0,o=i.charCodeAt(++A)),o>=48&&o<=57){for(48==o&&(o=i.charCodeAt(A+1))>=48&&o<=57&&T(),r=!1;A<s&&(o=i.charCodeAt(A))>=48&&o<=57;A++);if(46==i.charCodeAt(A)){for(n=++A;n<s&&(o=i.charCodeAt(n))>=48&&o<=57;n++);n==A&&T(),A=n}if(101==(o=i.charCodeAt(A))||69==o){for(o=i.charCodeAt(++A),43!=o&&45!=o||A++,n=A;n<s&&(o=i.charCodeAt(n))>=48&&o<=57;n++);n==A&&T(),A=n}return+i.slice(t,A)}if(r&&T(),"true"==i.slice(A,A+4))return A+=4,!0;if("false"==i.slice(A,A+5))return A+=5,!1;if("null"==i.slice(A,A+4))return A+=4,null;T()}return"$"},L=function(e){var t,n;if("$"==e&&T(),"string"==typeof e){if("@"==(w?e.charAt(0):e[0]))return e.slice(1);if("["==e){for(t=[];"]"!=(e=q());n||(n=!0))n&&(","==e?"]"==(e=q())&&T():T()),","==e&&T(),t.push(L(e));return t}if("{"==e){for(t={};"}"!=(e=q());n||(n=!0))n&&(","==e?"}"==(e=q())&&T():T()),","!=e&&"string"==typeof e&&"@"==(w?e.charAt(0):e[0])&&":"==q()||T(),t[e.slice(1)]=L(q());return t}T()}return e},P=function(e,t,n){var r=U(e,t,n);r===v?delete e[t]:e[t]=r},U=function(e,t,n){var r,o=e[t];if("object"==typeof o&&o)if("[object Array]"==y.call(o))for(r=o.length;r--;)P(o,r,n);else m(o,function(e){P(o,e,n)});return n.call(e,t,o)};r.parse=function(e,t){var n,r;return A=0,N=""+e,n=L(q()),"$"!=q()&&T(),A=N=null,t&&"[object Function]"==y.call(t)?U((r={},r[""]=n,r),"",t):n}}}return r.runInContext=e,r}var t="function"==typeof define&&define.amd,n={"function":!0,object:!0},r=n[typeof exports]&&exports&&!exports.nodeType&&exports,o=n[typeof window]&&window||this,i=r&&n[typeof module]&&module&&!module.nodeType&&"object"==typeof global&&global;if(!i||i.global!==i&&i.window!==i&&i.self!==i||(o=i),r&&!t)e(o,r);else{var s=o.JSON,a=o.JSON3,c=!1,l=e(o,o.JSON3={noConflict:function(){return c||(c=!0,o.JSON=s,o.JSON3=a,s=a=null),l}});o.JSON={parse:l.parse,stringify:l.stringify}}t&&define(function(){return l})}).call(this),document.getElementsByClassName||(document.getElementsByClassName=function(e){var t,n,r,o=document,i=[];if(o.querySelectorAll)return o.querySelectorAll("."+e);if(o.evaluate)for(n=".//*[contains(concat(' ', @class, ' '), ' "+e+" ')]",t=o.evaluate(n,o,null,0,null);r=t.iterateNext();)i.push(r);else for(t=o.getElementsByTagName("*"),n=new RegExp("(^|\\s)"+e+"(\\s|$)"),r=0;r<t.length;r++)n.test(t[r].className)&&i.push(t[r]);return i}),document.querySelectorAll||(document.querySelectorAll=document.body.querySelectorAll=Object.querySelectorAll=function(e,t,n,r,o){var i=document,s=i.createStyleSheet();for(o=i.all,t=[],e=e.replace(/\[for\b/gi,"[htmlFor").split(","),n=e.length;n--;){for(s.addRule(e[n],"k:v"),r=o.length;r--;)o[r].currentStyle.k&&t.push(o[r]);s.removeRule(0)}return t}),document.querySelector||(document.querySelector=function(e){var t=document.querySelectorAll(e);return t.length?t[0]:null}),function(){function e(t,n,r){t.document;var o,i=t.currentStyle[n].match(/([\d\.]+)(%|cm|em|in|mm|pc|pt|)/)||[0,0,""],s=i[1],a=i[2];return r=r?/%|em/.test(a)&&t.parentElement?e(t.parentElement,"fontSize",null):16:r,o="fontSize"===n?r:/width/i.test(n)?t.clientWidth:t.clientHeight,"%"===a?s/100*o:"cm"===a?.3937*s*96:"em"===a?s*r:"in"===a?96*s:"mm"===a?.3937*s*96/10:"pc"===a?12*s*96/72:"pt"===a?96*s/72:s}function t(e,t){var n="border"===t?"Width":"",r=t+"Top"+n,o=t+"Right"+n,i=t+"Bottom"+n,s=t+"Left"+n;e[t]=(e[r]===e[o]&&e[r]===e[i]&&e[r]===e[s]?[e[r]]:e[r]===e[i]&&e[s]===e[o]?[e[r],e[o]]:e[s]===e[o]?[e[r],e[o],e[i]]:[e[r],e[o],e[i],e[s]]).join(" ")}function n(n){var r,o=this,i=n.currentStyle,s=e(n,"fontSize"),a=function(e){return"-"+e.toLowerCase()};for(r in i)if(Array.prototype.push.call(o,"styleFloat"===r?"float":r.replace(/[A-Z]/,a)),"width"===r)o[r]=n.offsetWidth+"px";else if("height"===r)o[r]=n.offsetHeight+"px";else if("styleFloat"===r)o["float"]=i[r];else if(/margin.|padding.|border.+W/.test(r)&&"auto"!==o[r])o[r]=Math.round(e(n,r,s))+"px";else if(/^outline/.test(r))try{o[r]=i[r]}catch(c){o.outlineColor=i.color,o.outlineStyle=o.outlineStyle||"none",o.outlineWidth=o.outlineWidth||"0px",o.outline=[o.outlineColor,o.outlineWidth,o.outlineStyle].join(" ")}else o[r]=i[r];t(o,"margin"),t(o,"padding"),t(o,"border"),o.fontSize=Math.round(s)+"px"}n.prototype={constructor:n,getPropertyPriority:function(){throw new Error("NotSupportedError: DOM Exception 9")},getPropertyValue:function(e){return this[e.replace(/-\w/g,function(e){return e[1].toUpperCase()})]},item:function(e){return this[e]},removeProperty:function(){throw new Error("NoModificationAllowedError: DOM Exception 7")},setProperty:function(){throw new Error("NoModificationAllowedError: DOM Exception 7")},getPropertyCSSValue:function(){throw new Error("NotSupportedError: DOM Exception 9")}},window.getComputedStyle||(window.getComputedStyle=function(e){return new n(e)})}(),function(){function e(e){function t(t){var n=e.match(t);return n&&n.length>1&&n[1]||""}var n,r=t(/(ipod|iphone|ipad)/i).toLowerCase(),o=/like android/i.test(e),i=!o&&/android/i.test(e),a=/nexus\s*[0-6]\s*/i.test(e),c=!a&&/nexus\s*[0-9]+/i.test(e),l=/CrOS/.test(e),u=/silk/i.test(e),f=/sailfish/i.test(e),d=/tizen/i.test(e),p=/(web|hpw)os/i.test(e),h=/windows phone/i.test(e),m=!h&&/windows/i.test(e),v=!r&&!u&&/macintosh/i.test(e),g=!i&&!f&&!d&&!p&&/linux/i.test(e),y=t(/edge\/(\d+(\.\d+)?)/i),b=t(/version\/(\d+(\.\d+)?)/i),w=/tablet/i.test(e),S=!w&&/[^-]mobi/i.test(e),x=/xbox/i.test(e);/opera|opr|opios/i.test(e)?n={name:"Opera",opera:s,version:b||t(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)}:/coast/i.test(e)?n={name:"Opera Coast",coast:s,version:b||t(/(?:coast)[\s\/](\d+(\.\d+)?)/i)}:/yabrowser/i.test(e)?n={name:"Yandex Browser",yandexbrowser:s,version:b||t(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)}:/ucbrowser/i.test(e)?n={name:"UC Browser",ucbrowser:s,version:t(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)}:/mxios/i.test(e)?n={name:"Maxthon",maxthon:s,version:t(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)}:/epiphany/i.test(e)?n={name:"Epiphany",epiphany:s,version:t(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)}:/puffin/i.test(e)?n={name:"Puffin",puffin:s,version:t(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)}:/sleipnir/i.test(e)?n={name:"Sleipnir",sleipnir:s,version:t(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)}:/k-meleon/i.test(e)?n={name:"K-Meleon",kMeleon:s,version:t(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)}:h?(n={name:"Windows Phone",windowsphone:s},y?(n.msedge=s,n.version=y):(n.msie=s,n.version=t(/iemobile\/(\d+(\.\d+)?)/i))):/msie|trident/i.test(e)?n={name:"Internet Explorer",msie:s,version:t(/(?:msie |rv:)(\d+(\.\d+)?)/i)}:l?n={name:"Chrome",chromeos:s,chromeBook:s,chrome:s,version:t(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)}:/chrome.+? edge/i.test(e)?n={name:"Microsoft Edge",msedge:s,version:y}:/vivaldi/i.test(e)?n={name:"Vivaldi",vivaldi:s,version:t(/vivaldi\/(\d+(\.\d+)?)/i)||b}:f?n={name:"Sailfish",sailfish:s,version:t(/sailfish\s?browser\/(\d+(\.\d+)?)/i)}:/seamonkey\//i.test(e)?n={name:"SeaMonkey",seamonkey:s,version:t(/seamonkey\/(\d+(\.\d+)?)/i)}:/firefox|iceweasel|fxios/i.test(e)?(n={name:"Firefox",firefox:s,version:t(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)},/\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(e)&&(n.firefoxos=s)):u?n={name:"Amazon Silk",silk:s,version:t(/silk\/(\d+(\.\d+)?)/i)}:/phantom/i.test(e)?n={name:"PhantomJS",phantom:s,version:t(/phantomjs\/(\d+(\.\d+)?)/i)}:/slimerjs/i.test(e)?n={name:"SlimerJS",slimer:s,version:t(/slimerjs\/(\d+(\.\d+)?)/i)}:/blackberry|\bbb\d+/i.test(e)||/rim\stablet/i.test(e)?n={name:"BlackBerry",blackberry:s,version:b||t(/blackberry[\d]+\/(\d+(\.\d+)?)/i)}:p?(n={name:"WebOS",webos:s,version:b||t(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)},/touchpad\//i.test(e)&&(n.touchpad=s)):/bada/i.test(e)?n={name:"Bada",bada:s,version:t(/dolfin\/(\d+(\.\d+)?)/i)}:d?n={name:"Tizen",tizen:s,version:t(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i)||b}:/qupzilla/i.test(e)?n={name:"QupZilla",qupzilla:s,version:t(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i)||b}:/chromium/i.test(e)?n={name:"Chromium",chromium:s,version:t(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i)||b}:/chrome|crios|crmo/i.test(e)?n={name:"Chrome",chrome:s,version:t(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)}:i?n={name:"Android",version:b}:/safari|applewebkit/i.test(e)?(n={name:"Safari",safari:s},b&&(n.version=b)):r?(n={name:"iphone"==r?"iPhone":"ipad"==r?"iPad":"iPod"},b&&(n.version=b)):n=/googlebot/i.test(e)?{name:"Googlebot",googlebot:s,version:t(/googlebot\/(\d+(\.\d+))/i)||b}:{name:t(/^(.*)\/(.*) /),version:function(t){var n=e.match(t);return n&&n.length>1&&n[2]||""}(/^(.*)\/(.*) /)},!n.msedge&&/(apple)?webkit/i.test(e)?(/(apple)?webkit\/537\.36/i.test(e)?(n.name=n.name||"Blink",n.blink=s):(n.name=n.name||"Webkit",n.webkit=s),!n.version&&b&&(n.version=b)):!n.opera&&/gecko\//i.test(e)&&(n.name=n.name||"Gecko",n.gecko=s,n.version=n.version||t(/gecko\/(\d+(\.\d+)?)/i)),n.msedge||!i&&!n.silk?r?(n[r]=s,n.ios=s):v?n.mac=s:x?n.xbox=s:m?n.windows=s:g&&(n.linux=s):n.android=s;var k="";n.windowsphone?k=t(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i):r?(k=t(/os (\d+([_\s]\d+)*) like mac os x/i),k=k.replace(/[_\s]/g,".")):i?k=t(/android[ \/-](\d+(\.\d+)*)/i):n.webos?k=t(/(?:web|hpw)os\/(\d+(\.\d+)*)/i):n.blackberry?k=t(/rim\stablet\sos\s(\d+(\.\d+)*)/i):n.bada?k=t(/bada\/(\d+(\.\d+)*)/i):n.tizen&&(k=t(/tizen[\/\s](\d+(\.\d+)*)/i)),k&&(n.osversion=k);var j=k.split(".")[0];return w||c||"ipad"==r||i&&(3==j||j>=4&&!S)||n.silk?n.tablet=s:(S||"iphone"==r||"ipod"==r||i||a||n.blackberry||n.webos||n.bada)&&(n.mobile=s),n.msedge||n.msie&&n.version>=10||n.yandexbrowser&&n.version>=15||n.vivaldi&&n.version>=1||n.chrome&&n.version>=20||n.firefox&&n.version>=20||n.safari&&n.version>=6||n.opera&&n.version>=10||n.ios&&n.osversion&&n.osversion.split(".")[0]>=6||n.blackberry&&n.version>=10.1||n.chromium&&n.version>=20?n.a=s:n.msie&&n.version<10||n.chrome&&n.version<20||n.firefox&&n.version<20||n.safari&&n.version<6||n.opera&&n.version<10||n.ios&&n.osversion&&n.osversion.split(".")[0]<6||n.chromium&&n.version<20?n.c=s:n.x=s,n}function t(e){return e.split(".").length}function n(e,t){var n,r=[];if(Array.prototype.map)return Array.prototype.map.call(e,t);for(n=0;n<e.length;n++)r.push(t(e[n]));return r}function r(e){for(var r=Math.max(t(e[0]),t(e[1])),o=n(e,function(e){var o=r-t(e);return e+=new Array(o+1).join(".0"),n(e.split("."),function(e){return new Array(20-e.length).join("0")+e}).reverse()});--r>=0;){if(o[0][r]>o[1][r])return 1;if(o[0][r]!==o[1][r])return-1;if(0===r)return 0}}function o(t,n,o){var i=a;"string"==typeof n&&(o=n,n=void 0),void 0===n&&(n=!1),o&&(i=e(o));var s=""+i.version;for(var c in t)if(t.hasOwnProperty(c)&&i[c])return r([s,t[c]])<0;return n}function i(e,t,n){return!o(e,t,n)}var s=!0,a=e("undefined"!=typeof navigator?navigator.userAgent:"");a.test=function(e){for(var t=0;t<e.length;++t){var n=e[t];if("string"==typeof n&&n in a)return!0}return!1},a.isUnsupportedBrowser=o,a.compareVersions=r,a.check=i,a._detect=e,window.bowser=this.bowser=a}(),function(){var e=e||{};e.is_mobile_test=!1,e.config={},e.siteKey="",e.isLoad=!1,e.data={},e.reset=!1,e.parent_url=decodeURIComponent(document.location.hash.replace(/^#/,"")),e.location={request:"captcha.luosimao.com/api/request?k="},e.is_mobile_test&&(e.location={request:"10.0.0.5/api/request?k="}),e.cache_bust=1,e.interval_id="",e.status={reset:{className:"",text:"\u70b9\u51fb\u6b64\u5904\u8fdb\u884c\u4eba\u673a\u8bc6\u522b\u9a8c\u8bc1"},success:{className:"verify-success",text:"\u606d\u559c,\u9a8c\u8bc1\u6210\u529f!"},fail:{className:"verify-failed",text:"\u5f88\u9057\u61be\uff0c\u9a8c\u8bc1\u5931\u8d25!"},timeout:{className:"verify-timeout",text:"\u9a8c\u8bc1\u8d85\u65f6,\u8bf7\u91cd\u65b0\u9a8c\u8bc1"},reload:{className:"",text:"\u70b9\u51fb\u6b64\u5904\u8fdb\u884c\u4eba\u673a\u8bc6\u522b\u9a8c\u8bc1"}},e.has_postMessage=function(){var e=!0;return"undefined"==typeof bowser?e:("Internet Explorer"==bowser.name&&bowser.version<8&&(e=!1),e)}(),e.event={addEvent:function(e,t,n){if(window.addEventListener)return e.addEventListener(t,n,!1),0;if(document.attachEvent){var r=t+n;e["e"+r]=n,e[r]=function(){e["e"+r](window.event)},e.attachEvent("on"+t,e[r])}},removeEvent:function(e,t,n){if(window.addEventListener)return e.removeEventListener(t,n,!1),0;if(document.attachEvent){var r=t+n;e.detachEvent("on"+t,e[r]),e[r]=null,e["e"+r]=null}}},e.message={post:function(t,n,r){n&&(r=r||parent,r.location=n.toString().replace(/#.*$/,"")+"#"+ +new Date+e.cache_bust+++"&"+t)},receive:function(t,n,r){e.interval_id&&clearInterval(e.interval_id),e.interval_id=null,t&&(r="number"==typeof n?n:"number"==typeof r?r:100,e.interval_id=setInterval(function(){var n=document.location.hash,r=/^#?\d+&/;n!==e.last_hash&&r.test(n)&&(e.last_hash=n,t({data:n.replace(r,"")}))},r))}},e.createTimestamp=function(){return Date.now||(Date.now=function(){return(new Date).getTime()}),Date.now()},e.ajax=function(e,t,n,r){try{window.XMLHttpRequest?r=new XMLHttpRequest:window.ActiveXObject&&(r=new ActiveXObject("MSXML2.XMLHTTP.3.0")),r.open(n?"POST":"GET",e,1),r.setRequestHeader("X-Requested-With","XMLHttpRequest"),r.setRequestHeader("Content-type","application/x-www-form-urlencoded"),r.onreadystatechange=function(){r.readyState>3&&t&&t(r.responseText,r)},r.send(n)}catch(o){window.console&&console.log(o)}},e.responseMessage=function(t){if("object"!=typeof t.data){1!==t.data.indexOf("#")&&(t.data=[t.data.slice(0,1),"#",t.data.slice(1)].join(""));var n=t.data.split("#"),r=e,o=n[0],i=n[1];"d"==o&&(r.data=JSON.parse(i)),"v"==o&&r.verifyStatus(i),"p"==o&&(0==i&&r.switchLoading("start"),1!=i&&2!=i||setTimeout(function(){r.switchLoading("end")},200))}},e.verifyStatus=function(e){switch(e){case"1":e="success";break;case"2":e="fail";break;case"3":e="reload";break;case"4":e="reset";break;default:e=""}var t=document.getElementById("l_captcha_widget"),n=this;t.className=this.status[e].className,"reload"==e&&(n.isLoad=!0,t.className=""),"reset"==e&&(n.reset=!1,n.isLoad=!1,t.className=""),document.querySelector(".captcha-widget-text").innerHTML=this.status[e].text,"success"==e&&(n.reset=!0)},e.openEvent=function(){var e=this,t=document.querySelector(".captcha-widget-event");null!==t&&e.event.addEvent(t,"click",function(t){0==e.reset&&e.verifyRequest()})},e.switchLoading=function(e){var t=document.querySelector(".captcha-widget-status"),n=t.className;"start"==e?(n+=" loading",t.className=n):"end"==e&&(n=n.replace(new RegExp("(\\s|^)loading(\\s|$)")," "),t.className=n)},e.verifyRequest=function(){var e=this;if(0==e.isLoad){if(!e.data.sitekey)return 0;e.ajax(e.config.protocol+e.location.request+e.data.sitekey+"&t="+e.createTimestamp(),function(t,n){if(!t||0==t.length)return 0;var r=JSON.parse(t);if("a"===r.t&&"failed"===r.res)return e.responseMessage({data:"v#2"}),setTimeout(function(){e.responseMessage({data:"v#4"})},1e3),0;e.messageSender("d#"+t,"*"),e.has_postMessage?(e.switchLoading("start"),e.messageSender("f#1","*")):setTimeout(function(){e.messageSender("f#1","*")},200),e.isLoad=!0})}else e.messageSender("f#1","*")},e.messageSender=function(e,t){this.has_postMessage?window.parent.postMessage(e,t):this.message.post(e,this.parent_url,parent)},e.forceReload=function(){e.isLoad=!0},e.setCaptchaLink=function(){var e=document.getElementById("l_captcha_link"),t=this;1!=bowser.mobile&&1!=bowser.tablet||t.event.addEvent(e,"click",function(e){return e.preventDefault(),e.stopPropagation(),!1})},e.init=function(){"https:"==document.location.protocol?this.config.protocol="https://":this.config.protocol="http://",this.has_postMessage?this.event.addEvent(window,"message",e.responseMessage):this.message.receive(function(t){e.responseMessage(t)}),this.openEvent(),this.messageSender("w#0","*"),this.setCaptchaLink()},e.init()}();