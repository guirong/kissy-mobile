(function(){var r=this,I=r._,n={},k=Array.prototype,o=Object.prototype,s=k.push,i=k.slice,p=k.concat,l=o.toString,J=o.hasOwnProperty,x=k.forEach,y=k.map,z=k.reduce,A=k.reduceRight,B=k.filter,C=k.every,D=k.some,q=k.indexOf,E=k.lastIndexOf,o=Array.isArray,K=Object.keys,t=Function.prototype.bind,b=function(a){if(a instanceof b)return a;if(!(this instanceof b))return new b(a);this._wrapped=a};"undefined"!==typeof exports?("undefined"!==typeof module&&module.exports&&(exports=module.exports=b),exports._=
b):r._=b;b.VERSION="1.4.4";var j=b.each=b.forEach=function(a,c,d){if(a!=null)if(x&&a.forEach===x)a.forEach(c,d);else if(a.length===+a.length)for(var e=0,f=a.length;e<f;e++){if(c.call(d,a[e],e,a)===n)break}else for(e in a)if(b.has(a,e)&&c.call(d,a[e],e,a)===n)break};b.map=b.collect=function(a,c,b){var e=[];if(a==null)return e;if(y&&a.map===y)return a.map(c,b);j(a,function(a,h,g){e[e.length]=c.call(b,a,h,g)});return e};b.reduce=b.foldl=b.inject=function(a,c,d,e){var f=arguments.length>2;a==null&&(a=
[]);if(z&&a.reduce===z){e&&(c=b.bind(c,e));return f?a.reduce(c,d):a.reduce(c)}j(a,function(a,b,L){if(f)d=c.call(e,d,a,b,L);else{d=a;f=true}});if(!f)throw new TypeError("Reduce of empty array with no initial value");return d};b.reduceRight=b.foldr=function(a,c,d,e){var f=arguments.length>2;a==null&&(a=[]);if(A&&a.reduceRight===A){e&&(c=b.bind(c,e));return f?a.reduceRight(c,d):a.reduceRight(c)}var h=a.length;if(h!==+h)var g=b.keys(a),h=g.length;j(a,function(b,i,j){i=g?g[--h]:--h;if(f)d=c.call(e,d,a[i],
i,j);else{d=a[i];f=true}});if(!f)throw new TypeError("Reduce of empty array with no initial value");return d};b.find=b.detect=function(a,c,b){var e;F(a,function(a,h,g){if(c.call(b,a,h,g)){e=a;return true}});return e};b.filter=b.select=function(a,c,b){var e=[];if(a==null)return e;if(B&&a.filter===B)return a.filter(c,b);j(a,function(a,h,g){c.call(b,a,h,g)&&(e[e.length]=a)});return e};b.reject=function(a,c,d){return b.filter(a,function(a,b,h){return!c.call(d,a,b,h)},d)};b.every=b.all=function(a,c,d){c||
(c=b.identity);var e=true;if(a==null)return e;if(C&&a.every===C)return a.every(c,d);j(a,function(a,b,g){if(!(e=e&&c.call(d,a,b,g)))return n});return!!e};var F=b.some=b.any=function(a,c,d){c||(c=b.identity);var e=false;if(a==null)return e;if(D&&a.some===D)return a.some(c,d);j(a,function(a,b,g){if(e||(e=c.call(d,a,b,g)))return n});return!!e};b.contains=b.include=function(a,c){return a==null?false:q&&a.indexOf===q?a.indexOf(c)!=-1:F(a,function(a){return a===c})};b.invoke=function(a,c){var d=i.call(arguments,
2),e=b.isFunction(c);return b.map(a,function(a){return(e?c:a[c]).apply(a,d)})};b.pluck=function(a,c){return b.map(a,function(a){return a[c]})};b.where=function(a,c,d){return b.isEmpty(c)?d?null:[]:b[d?"find":"filter"](a,function(a){for(var b in c)if(c[b]!==a[b])return false;return true})};b.findWhere=function(a,c){return b.where(a,c,true)};b.max=function(a,c,d){if(!c&&b.isArray(a)&&a[0]===+a[0]&&a.length<65535)return Math.max.apply(Math,a);if(!c&&b.isEmpty(a))return-Infinity;var e={computed:-Infinity,
value:-Infinity};j(a,function(a,b,g){b=c?c.call(d,a,b,g):a;b>=e.computed&&(e={value:a,computed:b})});return e.value};b.min=function(a,c,d){if(!c&&b.isArray(a)&&a[0]===+a[0]&&a.length<65535)return Math.min.apply(Math,a);if(!c&&b.isEmpty(a))return Infinity;var e={computed:Infinity,value:Infinity};j(a,function(a,b,g){b=c?c.call(d,a,b,g):a;b<e.computed&&(e={value:a,computed:b})});return e.value};b.shuffle=function(a){var c,d=0,e=[];j(a,function(a){c=b.random(d++);e[d-1]=e[c];e[c]=a});return e};var u=
function(a){return b.isFunction(a)?a:function(c){return c[a]}};b.sortBy=function(a,c,d){var e=u(c);return b.pluck(b.map(a,function(a,c,b){return{value:a,index:c,criteria:e.call(d,a,c,b)}}).sort(function(a,c){var b=a.criteria,d=c.criteria;if(b!==d){if(b>d||b===void 0)return 1;if(b<d||d===void 0)return-1}return a.index<c.index?-1:1}),"value")};var G=function(a,c,d,e){var f={},h=u(c||b.identity);j(a,function(c,b){var i=h.call(d,c,b,a);e(f,i,c)});return f};b.groupBy=function(a,c,d){return G(a,c,d,function(a,
c,d){(b.has(a,c)?a[c]:a[c]=[]).push(d)})};b.countBy=function(a,c,d){return G(a,c,d,function(a,c){b.has(a,c)||(a[c]=0);a[c]++})};b.sortedIndex=function(a,c,d,e){for(var d=d==null?b.identity:u(d),c=d.call(e,c),f=0,h=a.length;f<h;){var g=f+h>>>1;d.call(e,a[g])<c?f=g+1:h=g}return f};b.toArray=function(a){return!a?[]:b.isArray(a)?i.call(a):a.length===+a.length?b.map(a,b.identity):b.values(a)};b.size=function(a){return a==null?0:a.length===+a.length?a.length:b.keys(a).length};b.first=b.head=b.take=function(a,
c,b){return a==null?void 0:c!=null&&!b?i.call(a,0,c):a[0]};b.initial=function(a,c,b){return i.call(a,0,a.length-(c==null||b?1:c))};b.last=function(a,c,b){return a==null?void 0:c!=null&&!b?i.call(a,Math.max(a.length-c,0)):a[a.length-1]};b.rest=b.tail=b.drop=function(a,c,b){return i.call(a,c==null||b?1:c)};b.compact=function(a){return b.filter(a,b.identity)};var H=function(a,c,d){j(a,function(a){b.isArray(a)?c?s.apply(d,a):H(a,c,d):d.push(a)});return d};b.flatten=function(a,c){return H(a,c,[])};b.without=
function(a){return b.difference(a,i.call(arguments,1))};b.uniq=b.unique=function(a,c,d,e){if(b.isFunction(c)){e=d;d=c;c=false}var d=d?b.map(a,d,e):a,f=[],h=[];j(d,function(d,e){if(c?!e||h[h.length-1]!==d:!b.contains(h,d)){h.push(d);f.push(a[e])}});return f};b.union=function(){return b.uniq(p.apply(k,arguments))};b.intersection=function(a){var c=i.call(arguments,1);return b.filter(b.uniq(a),function(a){return b.every(c,function(c){return b.indexOf(c,a)>=0})})};b.difference=function(a){var c=p.apply(k,
i.call(arguments,1));return b.filter(a,function(a){return!b.contains(c,a)})};b.zip=function(){for(var a=i.call(arguments),c=b.max(b.pluck(a,"length")),d=Array(c),e=0;e<c;e++)d[e]=b.pluck(a,""+e);return d};b.object=function(a,c){if(a==null)return{};for(var b={},e=0,f=a.length;e<f;e++)c?b[a[e]]=c[e]:b[a[e][0]]=a[e][1];return b};b.indexOf=function(a,c,d){if(a==null)return-1;var e=0,f=a.length;if(d)if(typeof d=="number")e=d<0?Math.max(0,f+d):d;else{e=b.sortedIndex(a,c);return a[e]===c?e:-1}if(q&&a.indexOf===
q)return a.indexOf(c,d);for(;e<f;e++)if(a[e]===c)return e;return-1};b.lastIndexOf=function(a,c,b){if(a==null)return-1;var e=b!=null;if(E&&a.lastIndexOf===E)return e?a.lastIndexOf(c,b):a.lastIndexOf(c);for(b=e?b:a.length;b--;)if(a[b]===c)return b;return-1};b.range=function(a,b,d){if(arguments.length<=1){b=a||0;a=0}for(var d=arguments[2]||1,e=Math.max(Math.ceil((b-a)/d),0),f=0,h=Array(e);f<e;){h[f++]=a;a=a+d}return h};b.bind=function(a,b){if(a.bind===t&&t)return t.apply(a,i.call(arguments,1));var d=
i.call(arguments,2);return function(){return a.apply(b,d.concat(i.call(arguments)))}};b.partial=function(a){var b=i.call(arguments,1);return function(){return a.apply(this,b.concat(i.call(arguments)))}};b.bindAll=function(a){var c=i.call(arguments,1);c.length===0&&(c=b.functions(a));j(c,function(c){a[c]=b.bind(a[c],a)});return a};b.memoize=function(a,c){var d={};c||(c=b.identity);return function(){var e=c.apply(this,arguments);return b.has(d,e)?d[e]:d[e]=a.apply(this,arguments)}};b.delay=function(a,
b){var d=i.call(arguments,2);return setTimeout(function(){return a.apply(null,d)},b)};b.defer=function(a){return b.delay.apply(b,[a,1].concat(i.call(arguments,1)))};b.throttle=function(a,b){var d,e,f,h,g=0,i=function(){g=new Date;f=null;h=a.apply(d,e)};return function(){var j=new Date,k=b-(j-g);d=this;e=arguments;if(k<=0){clearTimeout(f);f=null;g=j;h=a.apply(d,e)}else f||(f=setTimeout(i,k));return h}};b.debounce=function(a,b,d){var e,f;return function(){var h=this,g=arguments,i=d&&!e;clearTimeout(e);
e=setTimeout(function(){e=null;d||(f=a.apply(h,g))},b);i&&(f=a.apply(h,g));return f}};b.once=function(a){var b=false,d;return function(){if(b)return d;b=true;d=a.apply(this,arguments);a=null;return d}};b.wrap=function(a,b){return function(){var d=[a];s.apply(d,arguments);return b.apply(this,d)}};b.compose=function(){var a=arguments;return function(){for(var b=arguments,d=a.length-1;d>=0;d--)b=[a[d].apply(this,b)];return b[0]}};b.after=function(a,b){return a<=0?b():function(){if(--a<1)return b.apply(this,
arguments)}};b.keys=K||function(a){if(a!==Object(a))throw new TypeError("Invalid object");var c=[],d;for(d in a)b.has(a,d)&&(c[c.length]=d);return c};b.values=function(a){var c=[],d;for(d in a)b.has(a,d)&&c.push(a[d]);return c};b.pairs=function(a){var c=[],d;for(d in a)b.has(a,d)&&c.push([d,a[d]]);return c};b.invert=function(a){var c={},d;for(d in a)b.has(a,d)&&(c[a[d]]=d);return c};b.functions=b.methods=function(a){var c=[],d;for(d in a)b.isFunction(a[d])&&c.push(d);return c.sort()};b.extend=function(a){j(i.call(arguments,
1),function(b){if(b)for(var d in b)a[d]=b[d]});return a};b.pick=function(a){var b={},d=p.apply(k,i.call(arguments,1));j(d,function(d){d in a&&(b[d]=a[d])});return b};b.omit=function(a){var c={},d=p.apply(k,i.call(arguments,1)),e;for(e in a)b.contains(d,e)||(c[e]=a[e]);return c};b.defaults=function(a){j(i.call(arguments,1),function(b){if(b)for(var d in b)a[d]==null&&(a[d]=b[d])});return a};b.clone=function(a){return!b.isObject(a)?a:b.isArray(a)?a.slice():b.extend({},a)};b.tap=function(a,b){b(a);return a};
var v=function(a,c,d,e){if(a===c)return a!==0||1/a==1/c;if(a==null||c==null)return a===c;if(a instanceof b)a=a._wrapped;if(c instanceof b)c=c._wrapped;var f=l.call(a);if(f!=l.call(c))return false;switch(f){case "[object String]":return a==""+c;case "[object Number]":return a!=+a?c!=+c:a==0?1/a==1/c:a==+c;case "[object Date]":case "[object Boolean]":return+a==+c;case "[object RegExp]":return a.source==c.source&&a.global==c.global&&a.multiline==c.multiline&&a.ignoreCase==c.ignoreCase}if(typeof a!="object"||
typeof c!="object")return false;for(var h=d.length;h--;)if(d[h]==a)return e[h]==c;d.push(a);e.push(c);var h=0,g=true;if(f=="[object Array]"){h=a.length;if(g=h==c.length)for(;h--;)if(!(g=v(a[h],c[h],d,e)))break}else{var f=a.constructor,i=c.constructor;if(f!==i&&(!b.isFunction(f)||!(f instanceof f&&b.isFunction(i)&&i instanceof i)))return false;for(var j in a)if(b.has(a,j)){h++;if(!(g=b.has(c,j)&&v(a[j],c[j],d,e)))break}if(g){for(j in c)if(b.has(c,j)&&!h--)break;g=!h}}d.pop();e.pop();return g};b.isEqual=
function(a,b){return v(a,b,[],[])};b.isEmpty=function(a){if(a==null)return true;if(b.isArray(a)||b.isString(a))return a.length===0;for(var c in a)if(b.has(a,c))return false;return true};b.isElement=function(a){return!!(a&&a.nodeType===1)};b.isArray=o||function(a){return l.call(a)=="[object Array]"};b.isObject=function(a){return a===Object(a)};j("Arguments,Function,String,Number,Date,RegExp".split(","),function(a){b["is"+a]=function(b){return l.call(b)=="[object "+a+"]"}});b.isArguments(arguments)||
(b.isArguments=function(a){return!(!a||!b.has(a,"callee"))});"function"!==typeof/./&&(b.isFunction=function(a){return typeof a==="function"});b.isFinite=function(a){return isFinite(a)&&!isNaN(parseFloat(a))};b.isNaN=function(a){return b.isNumber(a)&&a!=+a};b.isBoolean=function(a){return a===true||a===false||l.call(a)=="[object Boolean]"};b.isNull=function(a){return a===null};b.isUndefined=function(a){return a===void 0};b.has=function(a,b){return J.call(a,b)};b.noConflict=function(){r._=I;return this};
b.identity=function(a){return a};b.times=function(a,b,d){for(var e=Array(a),f=0;f<a;f++)e[f]=b.call(d,f);return e};b.random=function(a,b){if(b==null){b=a;a=0}return a+Math.floor(Math.random()*(b-a+1))};var m={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","/":"&#x2F;"}};m.unescape=b.invert(m.escape);var M={escape:RegExp("["+b.keys(m.escape).join("")+"]","g"),unescape:RegExp("("+b.keys(m.unescape).join("|")+")","g")};b.each(["escape","unescape"],function(a){b[a]=function(b){return b==
null?"":(""+b).replace(M[a],function(b){return m[a][b]})}});b.result=function(a,c){if(a==null)return null;var d=a[c];return b.isFunction(d)?d.call(a):d};b.mixin=function(a){j(b.functions(a),function(c){var d=b[c]=a[c];b.prototype[c]=function(){var a=[this._wrapped];s.apply(a,arguments);a=d.apply(b,a);return this._chain?b(a).chain():a}})};var N=0;b.uniqueId=function(a){var b=++N+"";return a?a+b:b};b.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};
var w=/(.)^/,O={"'":"'","\\":"\\","\r":"r","\n":"n","\t":"t","\u2028":"u2028","\u2029":"u2029"},P=/\\|'|\r|\n|\t|\u2028|\u2029/g;b.template=function(a,c,d){var e,d=b.defaults({},d,b.templateSettings),f=RegExp([(d.escape||w).source,(d.interpolate||w).source,(d.evaluate||w).source].join("|")+"|$","g"),h=0,g="__p+='";a.replace(f,function(b,c,d,e,f){g=g+a.slice(h,f).replace(P,function(a){return"\\"+O[a]});c&&(g=g+("'+\n((__t=("+c+"))==null?'':_.escape(__t))+\n'"));d&&(g=g+("'+\n((__t=("+d+"))==null?'':__t)+\n'"));
e&&(g=g+("';\n"+e+"\n__p+='"));h=f+b.length;return b});g=g+"';\n";d.variable||(g="with(obj||{}){\n"+g+"}\n");g="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+g+"return __p;\n";try{e=new Function(d.variable||"obj","_",g)}catch(i){i.source=g;throw i;}if(c)return e(c,b);c=function(a){return e.call(this,a,b)};c.source="function("+(d.variable||"obj")+"){\n"+g+"}";return c};b.chain=function(a){return b(a).chain()};b.mixin(b);j("pop,push,reverse,shift,sort,splice,unshift".split(","),
function(a){var c=k[a];b.prototype[a]=function(){var d=this._wrapped;c.apply(d,arguments);(a=="shift"||a=="splice")&&d.length===0&&delete d[0];return this._chain?b(d).chain():d}});j(["concat","join","slice"],function(a){var c=k[a];b.prototype[a]=function(){var a=c.apply(this._wrapped,arguments);return this._chain?b(a).chain():a}});b.extend(b.prototype,{chain:function(){this._chain=true;return this},value:function(){return this._wrapped}})}).call(this);