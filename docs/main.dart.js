(function dartProgram(){function copyProperties(a,b){var s=Object.keys(a)
for(var r=0;r<s.length;r++){var q=s[r]
b[q]=a[q]}}function mixinPropertiesHard(a,b){var s=Object.keys(a)
for(var r=0;r<s.length;r++){var q=s[r]
if(!b.hasOwnProperty(q)){b[q]=a[q]}}}function mixinPropertiesEasy(a,b){Object.assign(b,a)}var z=function(){var s=function(){}
s.prototype={p:{}}
var r=new s()
if(!(Object.getPrototypeOf(r)&&Object.getPrototypeOf(r).p===s.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var q=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(q))return true}}catch(p){}return false}()
function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){Object.setPrototypeOf(a.prototype,b.prototype)
return}var s=Object.create(b.prototype)
copyProperties(a.prototype,s)
a.prototype=s}}function inheritMany(a,b){for(var s=0;s<b.length;s++){inherit(b[s],a)}}function mixinEasy(a,b){mixinPropertiesEasy(b.prototype,a.prototype)
a.prototype.constructor=a}function mixinHard(a,b){mixinPropertiesHard(b.prototype,a.prototype)
a.prototype.constructor=a}function lazy(a,b,c,d){var s=a
a[b]=s
a[c]=function(){if(a[b]===s){a[b]=d()}a[c]=function(){return this[b]}
return a[b]}}function lazyFinal(a,b,c,d){var s=a
a[b]=s
a[c]=function(){if(a[b]===s){var r=d()
if(a[b]!==s){A.kf(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.z(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.ec(b)
return new s(c,this)}:function(){if(s===null)s=A.ec(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.ec(a).prototype
return s}}var x=0
function tearOffParameters(a,b,c,d,e,f,g,h,i,j){if(typeof h=="number"){h+=x}return{co:a,iS:b,iI:c,rC:d,dV:e,cs:f,fs:g,fT:h,aI:i||0,nDA:j}}function installStaticTearOff(a,b,c,d,e,f,g,h){var s=tearOffParameters(a,true,false,c,d,e,f,g,h,false)
var r=staticTearOffGetter(s)
a[b]=r}function installInstanceTearOff(a,b,c,d,e,f,g,h,i,j){c=!!c
var s=tearOffParameters(a,false,c,d,e,f,g,h,i,!!j)
var r=instanceTearOffGetter(c,s)
a[b]=r}function setOrUpdateInterceptorsByTag(a){var s=v.interceptorsByTag
if(!s){v.interceptorsByTag=a
return}copyProperties(a,s)}function setOrUpdateLeafTags(a){var s=v.leafTags
if(!s){v.leafTags=a
return}copyProperties(a,s)}function updateTypes(a){var s=v.types
var r=s.length
s.push.apply(s,a)
return r}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var s=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e,false)}},r=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixinEasy,mixinHard:mixinHard,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:s(0,0,null,["$0"],0),_instance_1u:s(0,1,null,["$1"],0),_instance_2u:s(0,2,null,["$2"],0),_instance_0i:s(1,0,null,["$0"],0),_instance_1i:s(1,1,null,["$1"],0),_instance_2i:s(1,2,null,["$2"],0),_static_0:r(0,null,["$0"],0),_static_1:r(1,null,["$1"],0),_static_2:r(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,lazyFinal:lazyFinal,updateHolder:updateHolder,convertToFastObject:convertToFastObject,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}var J={
eg(a,b,c,d){return{i:a,p:b,e:c,x:d}},
ed(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.ee==null){A.jh()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.i(A.eF("Return interceptor for "+A.j(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.d6
if(o==null)o=$.d6=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.jn(a)
if(p!=null)return p
if(typeof a=="function")return B.aC
s=Object.getPrototypeOf(a)
if(s==null)return B.u
if(s===Object.prototype)return B.u
if(typeof q=="function"){o=$.d6
if(o==null)o=$.d6=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.n,enumerable:false,writable:true,configurable:true})
return B.n}return B.n},
h1(a,b){if(a>4294967295)throw A.i(A.ay(a,0,4294967295,"length",null))
return J.h3(new Array(a),b)},
h2(a,b){return A.z(new Array(a),b.j("r<0>"))},
h3(a,b){var s=A.z(a,b.j("r<0>"))
s.$flags=1
return s},
es(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
h4(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.es(r))break;++b}return b},
h5(a,b){var s,r,q
for(s=a.length;b>0;b=r){r=b-1
if(!(r<s))return A.k(a,r)
q=a.charCodeAt(r)
if(q!==32&&q!==13&&!J.es(q))break}return b},
ak(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.aQ.prototype
return J.bN.prototype}if(typeof a=="string")return J.a9.prototype
if(a==null)return J.aR.prototype
if(typeof a=="boolean")return J.bM.prototype
if(Array.isArray(a))return J.r.prototype
if(typeof a!="object"){if(typeof a=="function")return J.a1.prototype
if(typeof a=="symbol")return J.aW.prototype
if(typeof a=="bigint")return J.aU.prototype
return a}if(a instanceof A.m)return a
return J.ed(a)},
fh(a){if(typeof a=="string")return J.a9.prototype
if(a==null)return a
if(Array.isArray(a))return J.r.prototype
if(typeof a!="object"){if(typeof a=="function")return J.a1.prototype
if(typeof a=="symbol")return J.aW.prototype
if(typeof a=="bigint")return J.aU.prototype
return a}if(a instanceof A.m)return a
return J.ed(a)},
j8(a){if(a==null)return a
if(Array.isArray(a))return J.r.prototype
if(typeof a!="object"){if(typeof a=="function")return J.a1.prototype
if(typeof a=="symbol")return J.aW.prototype
if(typeof a=="bigint")return J.aU.prototype
return a}if(a instanceof A.m)return a
return J.ed(a)},
j9(a){if(typeof a=="string")return J.a9.prototype
if(a==null)return a
if(!(a instanceof A.m))return J.aA.prototype
return a},
cs(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.ak(a).E(a,b)},
fG(a,b){return J.j9(a).a_(a,b)},
W(a){return J.ak(a).gt(a)},
ct(a){return J.j8(a).gq(a)},
ei(a){return J.fh(a).gv(a)},
fH(a){return J.ak(a).gu(a)},
aJ(a){return J.ak(a).k(a)},
bK:function bK(){},
bM:function bM(){},
aR:function aR(){},
aV:function aV(){},
a2:function a2(){},
bZ:function bZ(){},
aA:function aA(){},
a1:function a1(){},
aU:function aU(){},
aW:function aW(){},
r:function r(a){this.$ti=a},
bL:function bL(){},
cF:function cF(a){this.$ti=a},
aK:function aK(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
aS:function aS(){},
aQ:function aQ(){},
bN:function bN(){},
a9:function a9(){}},A={dP:function dP(){},
h6(a){return new A.aa("Field '"+a+"' has not been initialized.")},
a4(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
dW(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
fd(a,b,c){return a},
ef(a){var s,r
for(s=$.K.length,r=0;r<s;++r)if(a===$.K[r])return!0
return!1},
er(){return new A.b8("No element")},
aa:function aa(a){this.a=a},
cM:function cM(){},
aY:function aY(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
L:function L(a,b,c){this.a=a
this.b=b
this.$ti=c},
ab:function ab(a,b,c){this.a=a
this.b=b
this.$ti=c},
F:function F(){},
fS(){throw A.i(A.ca("Cannot modify constant Set"))},
fq(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
kH(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.D.b(a)},
j(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.aJ(a)
return s},
c_(a){var s,r=$.ey
if(r==null)r=$.ey=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
cL(a,b){var s,r=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(r==null)return null
if(3>=r.length)return A.k(r,3)
s=r[3]
if(s!=null)return parseInt(a,10)
if(r[2]!=null)return parseInt(a,16)
return null},
c1(a){var s,r
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return null
s=parseFloat(a)
if(isNaN(s)){r=B.h.a5(a)
if(r==="NaN"||r==="+NaN"||r==="-NaN")return s
return null}return s},
c0(a){var s,r,q,p
if(a instanceof A.m)return A.J(A.bx(a),null)
s=J.ak(a)
if(s===B.aB||s===B.aD||t.B.b(a)){r=B.o(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.J(A.bx(a),null)},
ez(a){var s,r,q
if(a==null||typeof a=="number"||A.e7(a))return J.aJ(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.a0)return a.k(0)
if(a instanceof A.af)return a.aj(!0)
s=$.fE()
for(r=0;r<1;++r){q=s[r].bh(a)
if(q!=null)return q}return"Instance of '"+A.c0(a)+"'"},
hl(a){var s
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((B.f.ai(s,10)|55296)>>>0,s&1023|56320)}throw A.i(A.ay(a,0,1114111,null,null))},
hn(a,b,c,d,e,f,g,h,i){var s,r,q,p=b-1
if(a<100){a+=400
p-=4800}s=B.f.aC(h,1000)
r=new Date(a,p,c,d,e,f,g+B.f.aZ(h-s,1000)).valueOf()
q=!0
if(!isNaN(r))if(!(r<-864e13))if(!(r>864e13))q=r===864e13&&s!==0
if(q)return null
return r},
ax(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
hk(a){var s=A.ax(a).getFullYear()+0
return s},
hi(a){var s=A.ax(a).getMonth()+1
return s},
he(a){var s=A.ax(a).getDate()+0
return s},
hf(a){var s=A.ax(a).getHours()+0
return s},
hh(a){var s=A.ax(a).getMinutes()+0
return s},
hj(a){var s=A.ax(a).getSeconds()+0
return s},
hg(a){var s=A.ax(a).getMilliseconds()+0
return s},
hd(a){var s=a.$thrownJsError
if(s==null)return null
return A.bw(s)},
hm(a,b){var s
if(a.$thrownJsError==null){s=new Error()
A.A(a,s)
a.$thrownJsError=s
s.stack=""}},
k(a,b){if(a==null)J.ei(a)
throw A.i(A.ff(a,b))},
ff(a,b){var s,r="index"
if(!A.f0(b))return new A.P(!0,b,r,null)
s=J.ei(a)
if(b<0||b>=s)return A.eq(b,s,a,r)
return A.eA(b,r)},
iP(a,b,c){if(a>c)return A.ay(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return A.ay(b,a,c,"end",null)
return new A.P(!0,b,"end",null)},
iB(a){return new A.P(!0,a,null,null)},
i(a){return A.A(a,new Error())},
A(a,b){var s
if(a==null)a=new A.Y()
b.dartException=a
s=A.kg
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
kg(){return J.aJ(this.dartException)},
ao(a,b){throw A.A(a,b==null?new Error():b)},
ap(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.ao(A.hW(a,b,c),s)},
hW(a,b,c){var s,r,q,p,o,n,m,l,k
if(typeof b=="string")s=b
else{r="[]=;add;removeWhere;retainWhere;removeRange;setRange;setInt8;setInt16;setInt32;setUint8;setUint16;setUint32;setFloat32;setFloat64".split(";")
q=r.length
p=b
if(p>q){c=p/q|0
p%=q}s=r[p]}o=typeof c=="string"?c:"modify;remove from;add to".split(";")[c]
n=t.j.b(a)?"list":"ByteData"
m=a.$flags|0
l="a "
if((m&4)!==0)k="constant "
else if((m&2)!==0){k="unmodifiable "
l="an "}else k=(m&1)!==0?"fixed-length ":""
return new A.b9("'"+s+"': Cannot "+o+" "+l+k+n)},
dK(a){throw A.i(A.cB(a))},
Z(a){var s,r,q,p,o,n
a=A.fn(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.z([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.cN(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
cO(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
eE(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
dQ(a,b){var s=b==null,r=s?null:b.method
return new A.bO(a,r,s?null:b.receiver)},
cr(a){if(a==null)return new A.cJ(a)
if(typeof a!=="object")return a
if("dartException" in a)return A.an(a,a.dartException)
return A.iy(a)},
an(a,b){if(t.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
iy(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.f.ai(r,16)&8191)===10)switch(q){case 438:return A.an(a,A.dQ(A.j(s)+" (Error "+q+")",null))
case 445:case 5007:A.j(s)
return A.an(a,new A.b3())}}if(a instanceof TypeError){p=$.fs()
o=$.ft()
n=$.fu()
m=$.fv()
l=$.fy()
k=$.fz()
j=$.fx()
$.fw()
i=$.fB()
h=$.fA()
g=p.B(s)
if(g!=null)return A.an(a,A.dQ(A.a6(s),g))
else{g=o.B(s)
if(g!=null){g.method="call"
return A.an(a,A.dQ(A.a6(s),g))}else if(n.B(s)!=null||m.B(s)!=null||l.B(s)!=null||k.B(s)!=null||j.B(s)!=null||m.B(s)!=null||i.B(s)!=null||h.B(s)!=null){A.a6(s)
return A.an(a,new A.b3())}}return A.an(a,new A.c9(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.b7()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.an(a,new A.P(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.b7()
return a},
bw(a){var s
if(a==null)return new A.bl(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.bl(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
fj(a){if(a==null)return J.W(a)
if(typeof a=="object")return A.c_(a)
return J.W(a)},
i6(a,b,c,d,e,f){t.Z.a(a)
switch(A.bs(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.i(new A.cW("Unsupported number of arguments for wrapped closure"))},
aH(a,b){var s=a.$identity
if(!!s)return s
s=A.iL(a,b)
a.$identity=s
return s},
iL(a,b){var s
switch(b){case 0:s=a.$0
break
case 1:s=a.$1
break
case 2:s=a.$2
break
case 3:s=a.$3
break
case 4:s=a.$4
break
default:s=null}if(s!=null)return s.bind(a)
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.i6)},
fR(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.c4().constructor.prototype):Object.create(new A.ar(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.eo(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.fN(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.eo(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
fN(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.i("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.fL)}throw A.i("Error in functionType of tearoff")},
fO(a,b,c,d){var s=A.en
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
eo(a,b,c,d){if(c)return A.fQ(a,b,d)
return A.fO(b.length,d,a,b)},
fP(a,b,c,d){var s=A.en,r=A.fM
switch(b?-1:a){case 0:throw A.i(new A.c2("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
fQ(a,b,c){var s,r
if($.el==null)$.el=A.ek("interceptor")
if($.em==null)$.em=A.ek("receiver")
s=b.length
r=A.fP(s,c,a,b)
return r},
ec(a){return A.fR(a)},
fL(a,b){return A.bq(v.typeUniverse,A.bx(a.a),b)},
en(a){return a.a},
fM(a){return a.b},
ek(a){var s,r,q,p=new A.ar("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.i(A.a7("Field name "+a+" not found.",null))},
ja(a){return v.getIsolateTag(a)},
jn(a){var s,r,q,p,o,n=A.a6($.fi.$1(a)),m=$.dw[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.dB[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.e2($.fb.$2(a,n))
if(q!=null){m=$.dw[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.dB[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.dH(s)
$.dw[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.dB[n]=s
return s}if(p==="-"){o=A.dH(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.fk(a,s)
if(p==="*")throw A.i(A.eF(n))
if(v.leafTags[n]===true){o=A.dH(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.fk(a,s)},
fk(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.eg(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
dH(a){return J.eg(a,!1,null,!!a.$iI)},
jp(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.dH(s)
else return J.eg(s,c,null,null)},
jh(){if(!0===$.ee)return
$.ee=!0
A.ji()},
ji(){var s,r,q,p,o,n,m,l
$.dw=Object.create(null)
$.dB=Object.create(null)
A.jg()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.fm.$1(o)
if(n!=null){m=A.jp(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
jg(){var s,r,q,p,o,n,m=B.aa()
m=A.aG(B.ab,A.aG(B.ac,A.aG(B.p,A.aG(B.p,A.aG(B.ad,A.aG(B.ae,A.aG(B.af(B.o),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.fi=new A.dy(p)
$.fb=new A.dz(o)
$.fm=new A.dA(n)},
aG(a,b){return a(b)||b},
iM(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
et(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=function(g,h){try{return new RegExp(g,h)}catch(n){return n}}(a,s+r+q+p+f)
if(o instanceof RegExp)return o
throw A.i(new A.cE("Illegal RegExp pattern ("+String(o)+")",a))},
k2(a,b,c){var s=a.indexOf(b,c)
return s>=0},
fg(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
fn(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
fo(a,b,c){var s
if(typeof b=="string")return A.k5(a,b,c)
if(b instanceof A.aT){s=b.gag()
s.lastIndex=0
return a.replace(s,A.fg(c))}return A.k4(a,b,c)},
k4(a,b,c){var s,r,q,p
for(s=J.fG(b,a),s=s.gq(s),r=0,q="";s.l();){p=s.gm()
q=q+a.substring(r,p.ga6())+c
r=p.ga0()}s=q+a.substring(r)
return s.charCodeAt(0)==0?s:s},
k5(a,b,c){var s,r,q
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}if(a.indexOf(b,0)<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(A.fn(b),"g"),A.fg(c))},
fa(a){return a},
k3(a,b,c,d){var s,r,q,p,o,n,m
for(s=b.a_(0,a),s=new A.bb(s.a,s.b,s.c),r=t.d,q=0,p="";s.l();){o=s.d
if(o==null)o=r.a(o)
n=o.b
m=n.index
p=p+A.j(A.fa(B.h.R(a,q,m)))+A.j(c.$1(o))
q=m+n[0].length}s=p+A.j(A.fa(B.h.aE(a,q)))
return s.charCodeAt(0)==0?s:s},
N:function N(a,b){this.a=a
this.b=b},
bE:function bE(){},
U:function U(a,b,c){this.a=a
this.b=b
this.$ti=c},
be:function be(a,b){this.a=a
this.$ti=b},
ac:function ac(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
aO:function aO(){},
as:function as(a,b,c){this.a=a
this.b=b
this.$ti=c},
b6:function b6(){},
cN:function cN(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
b3:function b3(){},
bO:function bO(a,b,c){this.a=a
this.b=b
this.c=c},
c9:function c9(a){this.a=a},
cJ:function cJ(a){this.a=a},
bl:function bl(a){this.a=a
this.b=null},
a0:function a0(){},
bB:function bB(){},
bC:function bC(){},
c7:function c7(){},
c4:function c4(){},
ar:function ar(a,b){this.a=a
this.b=b},
c2:function c2(a){this.a=a},
aX:function aX(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cG:function cG(a,b){this.a=a
this.b=b
this.c=null},
dy:function dy(a){this.a=a},
dz:function dz(a){this.a=a},
dA:function dA(a){this.a=a},
af:function af(){},
aC:function aC(){},
aT:function aT(a,b){var _=this
_.a=a
_.b=b
_.e=_.c=null},
cj:function cj(a){this.b=a},
cd:function cd(a,b,c){this.a=a
this.b=b
this.c=c},
bb:function bb(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
c6:function c6(a,b){this.a=a
this.c=b},
cl:function cl(a,b,c){this.a=a
this.b=b
this.c=c},
cm:function cm(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
kf(a){throw A.A(new A.aa("Field '"+a+"' has been assigned during initialization."),new Error())},
o(){throw A.A(A.h6(""),new Error())},
eH(){var s=new A.cU()
return s.b=s},
cU:function cU(){this.b=null},
hU(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw A.i(A.iP(a,b,c))
return b},
av:function av(){},
b1:function b1(){},
bQ:function bQ(){},
aw:function aw(){},
b_:function b_(){},
b0:function b0(){},
bR:function bR(){},
bS:function bS(){},
bT:function bT(){},
bU:function bU(){},
bV:function bV(){},
bW:function bW(){},
bX:function bX(){},
b2:function b2(){},
bY:function bY(){},
bg:function bg(){},
bh:function bh(){},
bi:function bi(){},
bj:function bj(){},
dU(a,b){var s=b.c
return s==null?b.c=A.bo(a,"au",[b.x]):s},
eC(a){var s=a.w
if(s===6||s===7)return A.eC(a.x)
return s===11||s===12},
hq(a){return a.as},
aj(a){return A.dc(v.typeUniverse,a,!1)},
ah(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.ah(a1,s,a3,a4)
if(r===s)return a2
return A.eR(a1,r,!0)
case 7:s=a2.x
r=A.ah(a1,s,a3,a4)
if(r===s)return a2
return A.eQ(a1,r,!0)
case 8:q=a2.y
p=A.aF(a1,q,a3,a4)
if(p===q)return a2
return A.bo(a1,a2.x,p)
case 9:o=a2.x
n=A.ah(a1,o,a3,a4)
m=a2.y
l=A.aF(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.e_(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.aF(a1,j,a3,a4)
if(i===j)return a2
return A.eS(a1,k,i)
case 11:h=a2.x
g=A.ah(a1,h,a3,a4)
f=a2.y
e=A.iv(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.eP(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.aF(a1,d,a3,a4)
o=a2.x
n=A.ah(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.e0(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.i(A.bA("Attempted to substitute unexpected RTI kind "+a0))}},
aF(a,b,c,d){var s,r,q,p,o=b.length,n=A.de(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.ah(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
iw(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.de(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.ah(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
iv(a,b,c,d){var s,r=b.a,q=A.aF(a,r,c,d),p=b.b,o=A.aF(a,p,c,d),n=b.c,m=A.iw(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.ch()
s.a=q
s.b=o
s.c=m
return s},
z(a,b){a[v.arrayRti]=b
return a},
fe(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.jc(s)
return a.$S()}return null},
jj(a,b){var s
if(A.eC(b))if(a instanceof A.a0){s=A.fe(a)
if(s!=null)return s}return A.bx(a)},
bx(a){if(a instanceof A.m)return A.G(a)
if(Array.isArray(a))return A.a_(a)
return A.e6(J.ak(a))},
a_(a){var s=a[v.arrayRti],r=t.q
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
G(a){var s=a.$ti
return s!=null?s:A.e6(a)},
e6(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.i3(a,s)},
i3(a,b){var s=a instanceof A.a0?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.hN(v.typeUniverse,s.name)
b.$ccache=r
return r},
jc(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.dc(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
jb(a){return A.ai(A.G(a))},
ea(a){var s
if(a instanceof A.af)return A.iU(a.$r,a.ad())
s=a instanceof A.a0?A.fe(a):null
if(s!=null)return s
if(t.r.b(a))return J.fH(a).a
if(Array.isArray(a))return A.a_(a)
return A.bx(a)},
ai(a){var s=a.r
return s==null?a.r=new A.db(a):s},
iU(a,b){var s,r,q=b,p=q.length
if(p===0)return t.h
if(0>=p)return A.k(q,0)
s=A.bq(v.typeUniverse,A.ea(q[0]),"@<0>")
for(r=1;r<p;++r){if(!(r<q.length))return A.k(q,r)
s=A.eT(v.typeUniverse,s,A.ea(q[r]))}return A.bq(v.typeUniverse,s,a)},
S(a){return A.ai(A.dc(v.typeUniverse,a,!1))},
i2(a){var s=this
s.b=A.it(s)
return s.b(a)},
it(a){var s,r,q,p,o
if(a===t.K)return A.ic
if(A.al(a))return A.ih
s=a.w
if(s===6)return A.i0
if(s===1)return A.f2
if(s===7)return A.i7
r=A.is(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.al)){a.f="$i"+q
if(q==="q")return A.ia
if(a===t.m)return A.i9
return A.ig}}else if(s===10){p=A.iM(a.x,a.y)
o=p==null?A.f2:p
return o==null?A.bt(o):o}return A.hZ},
is(a){if(a.w===8){if(a===t.S)return A.f0
if(a===t.i||a===t.H)return A.ib
if(a===t.N)return A.ie
if(a===t.y)return A.e7}return null},
i1(a){var s=this,r=A.hY
if(A.al(s))r=A.hT
else if(s===t.K)r=A.bt
else if(A.aI(s)){r=A.i_
if(s===t.a3)r=A.hS
else if(s===t.u)r=A.e2
else if(s===t.cG)r=A.hQ
else if(s===t.ae)r=A.eX
else if(s===t.dd)r=A.hR
else if(s===t.aQ)r=A.D}else if(s===t.S)r=A.bs
else if(s===t.N)r=A.a6
else if(s===t.y)r=A.df
else if(s===t.H)r=A.eW
else if(s===t.i)r=A.e1
else if(s===t.m)r=A.a
s.a=r
return s.a(a)},
hZ(a){var s=this
if(a==null)return A.aI(s)
return A.jk(v.typeUniverse,A.jj(a,s),s)},
i0(a){if(a==null)return!0
return this.x.b(a)},
ig(a){var s,r=this
if(a==null)return A.aI(r)
s=r.f
if(a instanceof A.m)return!!a[s]
return!!J.ak(a)[s]},
ia(a){var s,r=this
if(a==null)return A.aI(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.m)return!!a[s]
return!!J.ak(a)[s]},
i9(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.m)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
f1(a){if(typeof a=="object"){if(a instanceof A.m)return t.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
hY(a){var s=this
if(a==null){if(A.aI(s))return a}else if(s.b(a))return a
throw A.A(A.eY(a,s),new Error())},
i_(a){var s=this
if(a==null||s.b(a))return a
throw A.A(A.eY(a,s),new Error())},
eY(a,b){return new A.bm("TypeError: "+A.eI(a,A.J(b,null)))},
eI(a,b){return A.cD(a)+": type '"+A.J(A.ea(a),null)+"' is not a subtype of type '"+b+"'"},
O(a,b){return new A.bm("TypeError: "+A.eI(a,b))},
i7(a){var s=this
return s.x.b(a)||A.dU(v.typeUniverse,s).b(a)},
ic(a){return a!=null},
bt(a){if(a!=null)return a
throw A.A(A.O(a,"Object"),new Error())},
ih(a){return!0},
hT(a){return a},
f2(a){return!1},
e7(a){return!0===a||!1===a},
df(a){if(!0===a)return!0
if(!1===a)return!1
throw A.A(A.O(a,"bool"),new Error())},
hQ(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.A(A.O(a,"bool?"),new Error())},
e1(a){if(typeof a=="number")return a
throw A.A(A.O(a,"double"),new Error())},
hR(a){if(typeof a=="number")return a
if(a==null)return a
throw A.A(A.O(a,"double?"),new Error())},
f0(a){return typeof a=="number"&&Math.floor(a)===a},
bs(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.A(A.O(a,"int"),new Error())},
hS(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.A(A.O(a,"int?"),new Error())},
ib(a){return typeof a=="number"},
eW(a){if(typeof a=="number")return a
throw A.A(A.O(a,"num"),new Error())},
eX(a){if(typeof a=="number")return a
if(a==null)return a
throw A.A(A.O(a,"num?"),new Error())},
ie(a){return typeof a=="string"},
a6(a){if(typeof a=="string")return a
throw A.A(A.O(a,"String"),new Error())},
e2(a){if(typeof a=="string")return a
if(a==null)return a
throw A.A(A.O(a,"String?"),new Error())},
a(a){if(A.f1(a))return a
throw A.A(A.O(a,"JSObject"),new Error())},
D(a){if(a==null)return a
if(A.f1(a))return a
throw A.A(A.O(a,"JSObject?"),new Error())},
f6(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.J(a[q],b)
return s},
ik(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.f6(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.J(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
eZ(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=", ",a2=null
if(a5!=null){s=a5.length
if(a4==null)a4=A.z([],t.s)
else a2=a4.length
r=a4.length
for(q=s;q>0;--q)B.c.n(a4,"T"+(r+q))
for(p=t.X,o="<",n="",q=0;q<s;++q,n=a1){m=a4.length
l=m-1-q
if(!(l>=0))return A.k(a4,l)
o=o+n+a4[l]
k=a5[q]
j=k.w
if(!(j===2||j===3||j===4||j===5||k===p))o+=" extends "+A.J(k,a4)}o+=">"}else o=""
p=a3.x
i=a3.y
h=i.a
g=h.length
f=i.b
e=f.length
d=i.c
c=d.length
b=A.J(p,a4)
for(a="",a0="",q=0;q<g;++q,a0=a1)a+=a0+A.J(h[q],a4)
if(e>0){a+=a0+"["
for(a0="",q=0;q<e;++q,a0=a1)a+=a0+A.J(f[q],a4)
a+="]"}if(c>0){a+=a0+"{"
for(a0="",q=0;q<c;q+=3,a0=a1){a+=a0
if(d[q+1])a+="required "
a+=A.J(d[q+2],a4)+" "+d[q]}a+="}"}if(a2!=null){a4.toString
a4.length=a2}return o+"("+a+") => "+b},
J(a,b){var s,r,q,p,o,n,m,l=a.w
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=a.x
r=A.J(s,b)
q=s.w
return(q===11||q===12?"("+r+")":r)+"?"}if(l===7)return"FutureOr<"+A.J(a.x,b)+">"
if(l===8){p=A.ix(a.x)
o=a.y
return o.length>0?p+("<"+A.f6(o,b)+">"):p}if(l===10)return A.ik(a,b)
if(l===11)return A.eZ(a,b,null)
if(l===12)return A.eZ(a.x,b,a.y)
if(l===13){n=a.x
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.k(b,n)
return b[n]}return"?"},
ix(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
hO(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
hN(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.dc(a,b,!1)
else if(typeof m=="number"){s=m
r=A.bp(a,5,"#")
q=A.de(s)
for(p=0;p<s;++p)q[p]=r
o=A.bo(a,b,q)
n[b]=o
return o}else return m},
hM(a,b){return A.eU(a.tR,b)},
hL(a,b){return A.eU(a.eT,b)},
dc(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.eM(A.eK(a,null,b,!1))
r.set(b,s)
return s},
bq(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.eM(A.eK(a,b,c,!0))
q.set(c,r)
return r},
eT(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.e_(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
a5(a,b){b.a=A.i1
b.b=A.i2
return b},
bp(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.R(null,null)
s.w=b
s.as=c
r=A.a5(a,s)
a.eC.set(c,r)
return r},
eR(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.hJ(a,b,r,c)
a.eC.set(r,s)
return s},
hJ(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.al(b))if(!(b===t.P||b===t.T))if(s!==6)r=s===7&&A.aI(b.x)
if(r)return b
else if(s===1)return t.P}q=new A.R(null,null)
q.w=6
q.x=b
q.as=c
return A.a5(a,q)},
eQ(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.hH(a,b,r,c)
a.eC.set(r,s)
return s},
hH(a,b,c,d){var s,r
if(d){s=b.w
if(A.al(b)||b===t.K)return b
else if(s===1)return A.bo(a,"au",[b])
else if(b===t.P||b===t.T)return t.bc}r=new A.R(null,null)
r.w=7
r.x=b
r.as=c
return A.a5(a,r)},
hK(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.R(null,null)
s.w=13
s.x=b
s.as=q
r=A.a5(a,s)
a.eC.set(q,r)
return r},
bn(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
hG(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
bo(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.bn(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.R(null,null)
r.w=8
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.a5(a,r)
a.eC.set(p,q)
return q},
e_(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.bn(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.R(null,null)
o.w=9
o.x=s
o.y=r
o.as=q
n=A.a5(a,o)
a.eC.set(q,n)
return n},
eS(a,b,c){var s,r,q="+"+(b+"("+A.bn(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.R(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.a5(a,s)
a.eC.set(q,r)
return r},
eP(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.bn(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.bn(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.hG(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.R(null,null)
p.w=11
p.x=b
p.y=c
p.as=r
o=A.a5(a,p)
a.eC.set(r,o)
return o},
e0(a,b,c,d){var s,r=b.as+("<"+A.bn(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.hI(a,b,c,r,d)
a.eC.set(r,s)
return s},
hI(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.de(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.ah(a,b,r,0)
m=A.aF(a,c,r,0)
return A.e0(a,n,m,c!==m)}}l=new A.R(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.a5(a,l)},
eK(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
eM(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.hA(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.eL(a,r,l,k,!1)
else if(q===46)r=A.eL(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.ae(a.u,a.e,k.pop()))
break
case 94:k.push(A.hK(a.u,k.pop()))
break
case 35:k.push(A.bp(a.u,5,"#"))
break
case 64:k.push(A.bp(a.u,2,"@"))
break
case 126:k.push(A.bp(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.hC(a,k)
break
case 38:A.hB(a,k)
break
case 63:p=a.u
k.push(A.eR(p,A.ae(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.eQ(p,A.ae(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.hz(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.eN(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.hE(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-2)
break
case 43:n=l.indexOf("(",r)
k.push(l.substring(r,n))
k.push(-4)
k.push(a.p)
a.p=k.length
r=n+1
break
default:throw"Bad character "+q}}}m=k.pop()
return A.ae(a.u,a.e,m)},
hA(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
eL(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.hO(s,o.x)[p]
if(n==null)A.ao('No "'+p+'" in "'+A.hq(o)+'"')
d.push(A.bq(s,o,n))}else d.push(p)
return m},
hC(a,b){var s,r=a.u,q=A.eJ(a,b),p=b.pop()
if(typeof p=="string")b.push(A.bo(r,p,q))
else{s=A.ae(r,a.e,p)
switch(s.w){case 11:b.push(A.e0(r,s,q,a.n))
break
default:b.push(A.e_(r,s,q))
break}}},
hz(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.eJ(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.ae(p,a.e,o)
q=new A.ch()
q.a=s
q.b=n
q.c=m
b.push(A.eP(p,r,q))
return
case-4:b.push(A.eS(p,b.pop(),s))
return
default:throw A.i(A.bA("Unexpected state under `()`: "+A.j(o)))}},
hB(a,b){var s=b.pop()
if(0===s){b.push(A.bp(a.u,1,"0&"))
return}if(1===s){b.push(A.bp(a.u,4,"1&"))
return}throw A.i(A.bA("Unexpected extended operation "+A.j(s)))},
eJ(a,b){var s=b.splice(a.p)
A.eN(a.u,a.e,s)
a.p=b.pop()
return s},
ae(a,b,c){if(typeof c=="string")return A.bo(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.hD(a,b,c)}else return c},
eN(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.ae(a,b,c[s])},
hE(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.ae(a,b,c[s])},
hD(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.i(A.bA("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.i(A.bA("Bad index "+c+" for "+b.k(0)))},
jk(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.y(a,b,null,c,null)
r.set(c,s)}return s},
y(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.al(d))return!0
s=b.w
if(s===4)return!0
if(A.al(b))return!1
if(b.w===1)return!0
r=s===13
if(r)if(A.y(a,c[b.x],c,d,e))return!0
q=d.w
p=t.P
if(b===p||b===t.T){if(q===7)return A.y(a,b,c,d.x,e)
return d===p||d===t.T||q===6}if(d===t.K){if(s===7)return A.y(a,b.x,c,d,e)
return s!==6}if(s===7){if(!A.y(a,b.x,c,d,e))return!1
return A.y(a,A.dU(a,b),c,d,e)}if(s===6)return A.y(a,p,c,d,e)&&A.y(a,b.x,c,d,e)
if(q===7){if(A.y(a,b,c,d.x,e))return!0
return A.y(a,b,c,A.dU(a,d),e)}if(q===6)return A.y(a,b,c,p,e)||A.y(a,b,c,d.x,e)
if(r)return!1
p=s!==11
if((!p||s===12)&&d===t.Z)return!0
o=s===10
if(o&&d===t.W)return!0
if(q===12){if(b===t.R)return!0
if(s!==12)return!1
n=b.y
m=d.y
l=n.length
if(l!==m.length)return!1
c=c==null?n:n.concat(c)
e=e==null?m:m.concat(e)
for(k=0;k<l;++k){j=n[k]
i=m[k]
if(!A.y(a,j,c,i,e)||!A.y(a,i,e,j,c))return!1}return A.f_(a,b.x,c,d.x,e)}if(q===11){if(b===t.R)return!0
if(p)return!1
return A.f_(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.i8(a,b,c,d,e)}if(o&&q===10)return A.id(a,b,c,d,e)
return!1},
f_(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.y(a3,a4.x,a5,a6.x,a7))return!1
s=a4.y
r=a6.y
q=s.a
p=r.a
o=q.length
n=p.length
if(o>n)return!1
m=n-o
l=s.b
k=r.b
j=l.length
i=k.length
if(o+j<n+i)return!1
for(h=0;h<o;++h){g=q[h]
if(!A.y(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.y(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.y(a3,k[h],a7,g,a5))return!1}f=s.c
e=r.c
d=f.length
c=e.length
for(b=0,a=0;a<c;a+=3){a0=e[a]
for(;;){if(b>=d)return!1
a1=f[b]
b+=3
if(a0<a1)return!1
a2=f[b-2]
if(a1<a0){if(a2)return!1
continue}g=e[a+1]
if(a2&&!g)return!1
g=f[b-1]
if(!A.y(a3,e[a+2],a7,g,a5))return!1
break}}while(b<d){if(f[b+1])return!1
b+=3}return!0},
i8(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
while(n!==m){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.bq(a,b,r[o])
return A.eV(a,p,null,c,d.y,e)}return A.eV(a,b.y,null,c,d.y,e)},
eV(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.y(a,b[s],d,e[s],f))return!1
return!0},
id(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.y(a,r[s],c,q[s],e))return!1
return!0},
aI(a){var s=a.w,r=!0
if(!(a===t.P||a===t.T))if(!A.al(a))if(s!==6)r=s===7&&A.aI(a.x)
return r},
al(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
eU(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
de(a){return a>0?new Array(a):v.typeUniverse.sEA},
R:function R(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
ch:function ch(){this.c=this.b=this.a=null},
db:function db(a){this.a=a},
cg:function cg(){},
bm:function bm(a){this.a=a},
hv(){var s,r,q
if(self.scheduleImmediate!=null)return A.iC()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.aH(new A.cR(s),1)).observe(r,{childList:true})
return new A.cQ(s,r,q)}else if(self.setImmediate!=null)return A.iD()
return A.iE()},
hw(a){self.scheduleImmediate(A.aH(new A.cS(t.M.a(a)),0))},
hx(a){self.setImmediate(A.aH(new A.cT(t.M.a(a)),0))},
hy(a){t.M.a(a)
A.hF(0,a)},
hF(a,b){var s=new A.d9()
s.aG(a,b)
return s},
eO(a,b,c){return 0},
dN(a){var s
if(t.C.b(a)){s=a.gG()
if(s!=null)return s}return B.l},
i4(a,b){if($.C===B.i)return null
return null},
i5(a,b){if($.C!==B.i)A.i4(a,b)
if(t.C.b(a)){b=a.gG()
if(b==null){A.hm(a,B.l)
b=B.l}}else b=B.l
return new A.T(a,b)},
dY(a,b,c){var s,r,q,p,o={},n=o.a=a
for(s=t._;r=n.a,(r&4)!==0;n=a){a=s.a(n.c)
o.a=a}if(n===b){s=A.hr()
b.a9(new A.T(new A.P(!0,n,null,"Cannot complete a future with itself"),s))
return}q=b.a&1
s=n.a=r|q
if((s&24)===0){p=t.F.a(b.c)
b.a=b.a&1|4
b.c=n
n.ah(p)
return}if(!c)if(b.c==null)n=(s&16)===0||q!==0
else n=!1
else n=!0
if(n){p=b.J()
b.H(o.a)
A.aB(b,p)
return}b.a^=2
A.cp(null,null,b.b,t.M.a(new A.d_(o,b)))},
aB(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d={},c=d.a=a
for(s=t.n,r=t.F;;){q={}
p=c.a
o=(p&16)===0
n=!o
if(b==null){if(n&&(p&1)===0){m=s.a(c.c)
A.e9(m.a,m.b)}return}q.a=b
l=b.a
for(c=b;l!=null;c=l,l=k){c.a=null
A.aB(d.a,c)
q.a=l
k=l.a}p=d.a
j=p.c
q.b=n
q.c=j
if(o){i=c.c
i=(i&1)!==0||(i&15)===8}else i=!0
if(i){h=c.b.b
if(n){p=p.b===h
p=!(p||p)}else p=!1
if(p){s.a(j)
A.e9(j.a,j.b)
return}g=$.C
if(g!==h)$.C=h
else g=null
c=c.c
if((c&15)===8)new A.d3(q,d,n).$0()
else if(o){if((c&1)!==0)new A.d2(q,j).$0()}else if((c&2)!==0)new A.d1(d,q).$0()
if(g!=null)$.C=g
c=q.c
if(c instanceof A.M){p=q.a.$ti
p=p.j("au<2>").b(c)||!p.y[1].b(c)}else p=!1
if(p){f=q.a.b
if((c.a&24)!==0){e=r.a(f.c)
f.c=null
b=f.K(e)
f.a=c.a&30|f.a&1
f.c=c.c
d.a=c
continue}else A.dY(c,f,!0)
return}}f=q.a.b
e=r.a(f.c)
f.c=null
b=f.K(e)
c=q.b
p=q.c
if(!c){f.$ti.c.a(p)
f.a=8
f.c=p}else{s.a(p)
f.a=f.a&1|16
f.c=p}d.a=f
c=f}},
il(a,b){var s=t.Q
if(s.b(a))return s.a(a)
s=t.v
if(s.b(a))return s.a(a)
throw A.i(A.ej(a,"onError",u.c))},
ij(){var s,r
for(s=$.aE;s!=null;s=$.aE){$.bv=null
r=s.b
$.aE=r
if(r==null)$.bu=null
s.a.$0()}},
iu(){$.e8=!0
try{A.ij()}finally{$.bv=null
$.e8=!1
if($.aE!=null)$.eh().$1(A.fc())}},
f8(a){var s=new A.ce(a),r=$.bu
if(r==null){$.aE=$.bu=s
if(!$.e8)$.eh().$1(A.fc())}else $.bu=r.b=s},
iq(a){var s,r,q,p=$.aE
if(p==null){A.f8(a)
$.bv=$.bu
return}s=new A.ce(a)
r=$.bv
if(r==null){s.b=p
$.aE=$.bv=s}else{q=r.b
s.b=q
$.bv=r.b=s
if(q==null)$.bu=s}},
e9(a,b){A.iq(new A.dq(a,b))},
f5(a,b,c,d,e){var s,r=$.C
if(r===c)return d.$0()
$.C=c
s=r
try{r=d.$0()
return r}finally{$.C=s}},
ip(a,b,c,d,e,f,g){var s,r=$.C
if(r===c)return d.$1(e)
$.C=c
s=r
try{r=d.$1(e)
return r}finally{$.C=s}},
io(a,b,c,d,e,f,g,h,i){var s,r=$.C
if(r===c)return d.$2(e,f)
$.C=c
s=r
try{r=d.$2(e,f)
return r}finally{$.C=s}},
cp(a,b,c,d){t.M.a(d)
if(B.i!==c){d=c.b2(d)
d=d}A.f8(d)},
cR:function cR(a){this.a=a},
cQ:function cQ(a,b,c){this.a=a
this.b=b
this.c=c},
cS:function cS(a){this.a=a},
cT:function cT(a){this.a=a},
d9:function d9(){},
da:function da(a,b){this.a=a
this.b=b},
ag:function ag(a,b){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.$ti=b},
aD:function aD(a,b){this.a=a
this.$ti=b},
T:function T(a,b){this.a=a
this.b=b},
cf:function cf(){},
bc:function bc(a,b){this.a=a
this.$ti=b},
bd:function bd(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
M:function M(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
cX:function cX(a,b){this.a=a
this.b=b},
d0:function d0(a,b){this.a=a
this.b=b},
d_:function d_(a,b){this.a=a
this.b=b},
cZ:function cZ(a,b){this.a=a
this.b=b},
cY:function cY(a,b){this.a=a
this.b=b},
d3:function d3(a,b,c){this.a=a
this.b=b
this.c=c},
d4:function d4(a,b){this.a=a
this.b=b},
d5:function d5(a){this.a=a},
d2:function d2(a,b){this.a=a
this.b=b},
d1:function d1(a,b){this.a=a
this.b=b},
ce:function ce(a){this.a=a
this.b=null},
br:function br(){},
dq:function dq(a,b){this.a=a
this.b=b},
ck:function ck(){},
d8:function d8(a,b){this.a=a
this.b=b},
h7(a,b){return new A.aX(a.j("@<0>").C(b).j("aX<1,2>"))},
eu(a){return new A.ad(a.j("ad<0>"))},
h8(a){return new A.ad(a.j("ad<0>"))},
dZ(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
h9(a,b){var s,r=A.eu(b)
for(s=J.ct(a);s.l();)r.n(0,b.a(s.gm()))
return r},
ha(a,b){var s=A.eu(b)
s.b1(0,a)
return s},
dR(a){var s,r
if(A.ef(a))return"{...}"
s=new A.c5("")
try{r={}
B.c.n($.K,a)
s.a+="{"
r.a=!0
a.ap(0,new A.cH(r,s))
s.a+="}"}finally{if(0>=$.K.length)return A.k($.K,-1)
$.K.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
ad:function ad(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
ci:function ci(a){this.a=a
this.c=this.b=null},
bf:function bf(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
u:function u(){},
bP:function bP(){},
cH:function cH(a,b){this.a=a
this.b=b},
a3:function a3(){},
bk:function bk(){},
aN:function aN(){},
bF:function bF(){},
bH:function bH(){},
cc:function cc(){},
cP:function cP(){},
dd:function dd(a){this.b=0
this.c=a},
fU(a,b){a=A.A(a,new Error())
if(a==null)a=A.bt(a)
a.stack=b.k(0)
throw a},
hb(a,b,c,d){var s,r=c?J.h2(a,d):J.h1(a,d)
if(a!==0)for(s=0;s<r.length;++s)r[s]=b
return r},
hc(a,b,c){var s,r,q=A.z([],c.j("r<0>"))
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.dK)(a),++r)B.c.n(q,c.a(a[r]))
q.$flags=1
return q},
ev(a,b){var s,r=A.z([],b.j("r<0>"))
for(s=a.gq(a);s.l();)B.c.n(r,s.gm())
return r},
ew(a,b){var s=A.hc(a,!1,b)
s.$flags=3
return s},
dT(a,b){return new A.aT(a,A.et(a,!1,!0,b,!1,""))},
eD(a,b,c){var s=J.ct(b)
if(!s.l())return a
if(c.length===0){do a+=A.j(s.gm())
while(s.l())}else{a+=A.j(s.gm())
while(s.l())a=a+c+A.j(s.gm())}return a},
hP(a,b,c,d){var s,r,q,p,o,n="0123456789ABCDEF"
if(c===B.q){s=$.fC()
s=s.b.test(b)}else s=!1
if(s)return b
r=B.ag.b6(b)
for(s=r.length,q=0,p="";q<s;++q){o=r[q]
if(o<128&&("\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u03f6\x00\u0404\u03f4 \u03f4\u03f6\u01f6\u01f6\u03f6\u03fc\u01f4\u03ff\u03ff\u0584\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u05d4\u01f4\x00\u01f4\x00\u0504\u05c4\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0400\x00\u0400\u0200\u03f7\u0200\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0200\u0200\u0200\u03f7\x00".charCodeAt(o)&a)!==0)p+=A.hl(o)
else p=p+"%"+n[o>>>4&15]+n[o&15]}return p.charCodeAt(0)==0?p:p},
hr(){return A.bw(new Error())},
aP(a,b,c){var s=A.hn(a,b,c,0,0,0,0,0,!1)
return new A.at(s==null?new A.cC(a,b,c,0,0,0,0,0).$0():s,0,!1)},
fT(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
ep(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bG(a){if(a>=10)return""+a
return"0"+a},
cD(a){if(typeof a=="number"||A.e7(a)||a==null)return J.aJ(a)
if(typeof a=="string")return JSON.stringify(a)
return A.ez(a)},
fV(a,b){A.fd(a,"error",t.K)
A.fd(b,"stackTrace",t.l)
A.fU(a,b)},
bA(a){return new A.bz(a)},
a7(a,b){return new A.P(!1,null,b,a)},
ej(a,b,c){return new A.P(!0,a,b,c)},
eA(a,b){return new A.b4(null,null,!0,a,b,"Value not in range")},
ay(a,b,c,d,e){return new A.b4(b,c,!0,a,d,"Invalid value")},
eB(a,b,c){if(0>a||a>c)throw A.i(A.ay(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.i(A.ay(b,a,c,"end",null))
return b}return c},
ho(a,b){return a},
eq(a,b,c,d){return new A.bJ(b,!0,a,d,"Index out of range")},
ca(a){return new A.b9(a)},
eF(a){return new A.c8(a)},
dV(a){return new A.b8(a)},
cB(a){return new A.bD(a)},
h0(a,b,c){var s,r
if(A.ef(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.z([],t.s)
B.c.n($.K,a)
try{A.ii(a,s)}finally{if(0>=$.K.length)return A.k($.K,-1)
$.K.pop()}r=A.eD(b,t.V.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
dO(a,b,c){var s,r
if(A.ef(a))return b+"..."+c
s=new A.c5(b)
B.c.n($.K,a)
try{r=s
r.a=A.eD(r.a,a,", ")}finally{if(0>=$.K.length)return A.k($.K,-1)
$.K.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
ii(a,b){var s,r,q,p,o,n,m,l=a.gq(a),k=0,j=0
for(;;){if(!(k<80||j<3))break
if(!l.l())return
s=A.j(l.gm())
B.c.n(b,s)
k+=s.length+2;++j}if(!l.l()){if(j<=5)return
if(0>=b.length)return A.k(b,-1)
r=b.pop()
if(0>=b.length)return A.k(b,-1)
q=b.pop()}else{p=l.gm();++j
if(!l.l()){if(j<=4){B.c.n(b,A.j(p))
return}r=A.j(p)
if(0>=b.length)return A.k(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gm();++j
for(;l.l();p=o,o=n){n=l.gm();++j
if(j>100){for(;;){if(!(k>75&&j>3))break
if(0>=b.length)return A.k(b,-1)
k-=b.pop().length+2;--j}B.c.n(b,"...")
return}}q=A.j(p)
r=A.j(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
for(;;){if(!(k>80&&b.length>3))break
if(0>=b.length)return A.k(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)B.c.n(b,m)
B.c.n(b,q)
B.c.n(b,r)},
ex(a,b,c,d){var s
if(B.k===c){s=B.f.gt(a)
b=J.W(b)
return A.dW(A.a4(A.a4($.dM(),s),b))}if(B.k===d){s=B.f.gt(a)
b=J.W(b)
c=J.W(c)
return A.dW(A.a4(A.a4(A.a4($.dM(),s),b),c))}s=B.f.gt(a)
b=J.W(b)
c=J.W(c)
d=J.W(d)
d=A.dW(A.a4(A.a4(A.a4(A.a4($.dM(),s),b),c),d))
return d},
cb(a){return A.hP(2,a,B.q,!1)},
cC:function cC(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
at:function at(a,b,c){this.a=a
this.b=b
this.c=c},
cV:function cV(){},
v:function v(){},
bz:function bz(a){this.a=a},
Y:function Y(){},
P:function P(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b4:function b4(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
bJ:function bJ(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
b9:function b9(a){this.a=a},
c8:function c8(a){this.a=a},
b8:function b8(a){this.a=a},
bD:function bD(a){this.a=a},
b7:function b7(){},
cW:function cW(a){this.a=a},
cE:function cE(a,b){this.a=a
this.b=b},
f:function f(){},
aZ:function aZ(a,b,c){this.a=a
this.b=b
this.$ti=c},
B:function B(){},
m:function m(){},
cn:function cn(){},
c5:function c5(a){this.a=a},
cI:function cI(a){this.a=a},
e5(a){var s
if(typeof a=="function")throw A.i(A.a7("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.e3,a)
s[$.by()]=a
return s},
e3(a,b,c){t.Z.a(a)
if(A.bs(c)>=1)return a.$1(b)
return a.$0()},
fl(a,b){var s=new A.M($.C,b.j("M<0>")),r=new A.bc(s,b.j("bc<0>"))
a.then(A.aH(new A.dI(r,b),1),A.aH(new A.dJ(r),1))
return s},
dI:function dI(a,b){this.a=a
this.b=b},
dJ:function dJ(a){this.a=a},
cA:function cA(a,b,c){this.a=a
this.b=b
this.c=c},
cu:function cu(){},
cv:function cv(){},
cw:function cw(){},
cx:function cx(){},
cy:function cy(){},
aM:function aM(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.dx=_.db=_.cy=_.cx=_.CW=_.ch=_.ay=_.ax=_.at=_.as=_.Q=_.z=_.y=_.x=$},
aL:function aL(a){this.a=a
this.b=""},
h:function h(a,b){this.a=a
this.b=b},
fp(a,b,c){var s=new A.dL(a,b,c),r=s.$1(0.75),q=a.w.x
if(typeof r!=="number")return r.aB()
if(r<=q)return 1
s=s.$1(0.5)
if(typeof s!=="number")return s.aB()
if(s<=q)return 0.75
return 0.5},
jy(a,b,c){var s,r,q,p,o
if(!a.w.i(0,"pregnant")||a.b!=="female")return
s=b.b
if(s>0&&s<14)return
if(b.gau()){s=b.w.y
r=A.fp(b,s,1)
q=B.b.p(s*r)
c.h(0,"c","\ud83e\udd30",B.e,"\u0415\u0434\u0438\u043d\u043e\u0435 \u043f\u043e\u0441\u043e\u0431\u0438\u0435 \u0431\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0439 (\u0440\u0430\u043d\u043d\u0438\u0435 \u0441\u0440\u043e\u043a\u0438)","\u041f\u0440\u0438 \u043f\u043e\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0435 \u043d\u0430 \u0443\u0447\u0451\u0442 \u0434\u043e 12 \u043d\u0435\u0434., \u0434\u043b\u044f \u043c\u0430\u043b\u043e\u0438\u043c\u0443\u0449\u0438\u0445. "+B.b.O(r*100)+"% \u041f\u041c \u0442\u0440\u0443\u0434\u043e\u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0433\u043e \u043d\u0430\u0441\u0435\u043b\u0435\u043d\u0438\u044f \u0440\u0435\u0433\u0438\u043e\u043d\u0430 = "+A.c(q,!1)+"/\u043c\u0435\u0441.",q,A.c(q,!1)+"/\u043c\u0435\u0441","monthly")
if(a.f<=0)A.eb(a,b,c)}p=b.e
o=Math.min(B.b.p((p>0?p:Math.max(27093,b.c/b.d))*24/730*140),955836)
c.h(0,"c","\ud83e\udd31",B.e,"\u041f\u043e\u0441\u043e\u0431\u0438\u0435 \u043f\u043e \u0431\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u0438 \u0440\u043e\u0434\u0430\u043c","100% \u0441\u0440. \u0437\u0430\u0440\u043f\u043b\u0430\u0442\u044b \u0437\u0430 140 \u0434\u043d\u0435\u0439 (\u0441\u0440. \u0434\u043d. = \u0437\u043f \xd7 24 / 730). \u041c\u0430\u043a\u0441: "+A.c(955836,!1)+".",o,A.c(o,!1)+" (\u0435\u0434\u0438\u043d\u043e\u0432\u0440.)","once")},
jv(a,b,c){if(!a.w.i(0,"newborn"))return
c.h(0,"c","\ud83c\udf81",B.e,"\u0415\u0434\u0438\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0435 \u043f\u0440\u0438 \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u0438","\u041d\u0430 \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u0440\u0435\u0431\u0451\u043d\u043a\u0430. \u0413\u043e\u0441\u0443\u0441\u043b\u0443\u0433\u0438 \u0438\u043b\u0438 \u041c\u0424\u0426.",28450.45,A.c(28450.45,!0),"once")},
jq(a,b,c){var s,r,q="once",p=a.w
if(p.i(0,"used_matcap"))return
s=p.i(0,"newborn")||p.i(0,"pregnant")
p=a.f
r=s?1:0
if(s&&p===0)c.h(0,"c","\ud83c\udfe6",B.d,"\u041c\u0430\u0442\u0435\u0440\u0438\u043d\u0441\u043a\u0438\u0439 \u043a\u0430\u043f\u0438\u0442\u0430\u043b (1-\u0439 \u0440\u0435\u0431\u0451\u043d\u043e\u043a)","\u0418\u043f\u043e\u0442\u0435\u043a\u0430, \u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0435, \u043f\u0435\u043d\u0441\u0438\u044f, \u0440\u0435\u0430\u0431\u0438\u043b\u0438\u0442\u0430\u0446\u0438\u044f.",728921.9,A.c(728921.9,!1),q)
else if(s&&p>=1)c.h(0,"c","\ud83c\udfe6",B.d,"\u041c\u0430\u0442\u0435\u0440\u0438\u043d\u0441\u043a\u0438\u0439 \u043a\u0430\u043f\u0438\u0442\u0430\u043b (2-\u0439 \u0438 \u0434\u0430\u043b\u0435\u0435)","\u041f\u043e\u043b\u043d\u0430\u044f \u0441\u0443\u043c\u043c\u0430 \u0435\u0441\u043b\u0438 \u043d\u0430 1-\u0433\u043e \u043d\u0435 \u043f\u043e\u043b\u0443\u0447\u0430\u043b\u0438, \u0438\u043d\u0430\u0447\u0435 \u0434\u043e\u043f\u043b\u0430\u0442\u0430.",963243.17,A.c(963243.17,!1),q)
else if(!s&&p+r>=2)c.h(0,"c","\ud83c\udfe6",B.d,"\u041c\u0430\u0442\u043a\u0430\u043f\u0438\u0442\u0430\u043b (2-\u0439 \u0438 \u0434\u0430\u043b\u0435\u0435)","\u0415\u0441\u043b\u0438 \u043d\u0430 1-\u0433\u043e \u043d\u0435 \u043f\u043e\u043b\u0443\u0447\u0430\u043b\u0438 \u2014 \u043f\u043e\u043b\u043d\u0430\u044f \u0441\u0443\u043c\u043c\u0430.",963243.17,A.c(963243.17,!1),q)},
iF(a,b,c){var s,r,q,p,o
if(b.r>1.5||a.f<=0||a.w.i(0,"pregnant"))return
s=b.e
s=s>0?s:Math.max(27093,b.c/b.d)
r=a.c
q=r==="employed"||r==="matleave"||r==="ip"||r==="self"?10837.2:10669.64
p=Math.max(q,Math.min(B.b.p(s*0.4),83021.19))
r=A.c(q,!0)
o=A.c(83021.19,!0)
c.h(0,"c","\ud83c\udf7c",B.e,"\u041f\u043e\u0441\u043e\u0431\u0438\u0435 \u043f\u043e \u0443\u0445\u043e\u0434\u0443 \u0434\u043e 1,5 \u043b\u0435\u0442","40% \u0441\u0440. \u0437\u0430\u0440\u043f\u043b\u0430\u0442\u044b. \u041c\u0438\u043d "+r+", \u043c\u0430\u043a\u0441 "+o+".",p,A.c(p,(p<0?Math.ceil(p):Math.floor(p))!==p)+"/\u043c\u0435\u0441","monthly")},
ki(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=b.ax
i===$&&A.o()
if(i>0){s=B.b.aA(A.iA(a.f)*100)
r=B.aQ.A(0,a.d)
c.h(0,"c","\u2696\ufe0f",B.a,"\u0410\u043b\u0438\u043c\u0435\u043d\u0442\u044b \u043d\u0435 \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u044b \u2014 \u0421\u0424\u0420 \u0443\u0447\u0442\u0451\u0442 \u0432\u043c\u0435\u043d\u0451\u043d\u043d\u044b\u0435","\u0421 01.03.2026 \u043f\u0440\u0438 \u043d\u0435\u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u043d\u044b\u0445 \u0430\u043b\u0438\u043c\u0435\u043d\u0442\u0430\u0445 \u0432 \u0434\u043e\u0445\u043e\u0434 \u0434\u043b\u044f \u0435\u0434\u0438\u043d\u043e\u0433\u043e \u043f\u043e\u0441\u043e\u0431\u0438\u044f \u0432\u043a\u043b\u044e\u0447\u0430\u0435\u0442\u0441\u044f "+s+"% \u0441\u0440\u0435\u0434\u043d\u0435\u0439 \u0437\u0430\u0440\u043f\u043b\u0430\u0442\u044b \u0440\u0435\u0433\u0438\u043e\u043d\u0430 ("+A.c(r==null?100360:r,!1)+") = "+A.c(i,!1)+"/\u043c\u0435\u0441. \u0415\u0441\u043b\u0438 \u0432\u0437\u044b\u0441\u043a\u0430\u0442\u044c \u0430\u043b\u0438\u043c\u0435\u043d\u0442\u044b \u0447\u0435\u0440\u0435\u0437 \u0441\u0443\u0434, \u0431\u0443\u0434\u0435\u0442 \u0443\u0447\u0438\u0442\u044b\u0432\u0430\u0442\u044c\u0441\u044f \u0444\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0441\u0443\u043c\u043c\u0430 \u2014 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u043c\u043e\u0436\u0435\u0442 \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c\u0441\u044f.",0,"\u0443\u0447\u0442\u0435\u043d\u043e \u0432 \u0434\u043e\u0445\u043e\u0434\u0435","benefit")}s=a.f
q=!1
if(s>=3){r=b.ch
r===$&&A.o()
p=b.w.x
if(r>=p){if(r<=p*1.1)r=(!b.gaz()||b.c>=18062)&&b.gav()&&b.gaw()
else r=q
q=r}}if(q){i=b.w
o=B.b.p(i.z*0.5)
r=b.ch
r===$&&A.o()
c.h(0,"c","\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc66",B.a,"\u0415\u0434\u0438\u043d\u043e\u0435 \u043f\u043e\u0441\u043e\u0431\u0438\u0435 \u043c\u043d\u043e\u0433\u043e\u0434\u0435\u0442\u043d\u044b\u043c \u2014 \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u0440\u0438 \u043f\u0440\u043e\u0434\u043b\u0435\u043d\u0438\u0438","\u0414\u043e\u0445\u043e\u0434 \u043d\u0430 \u0447\u0435\u043b. ("+A.c(r,!1)+") \u0432\u044b\u0448\u0435 \u043f\u043e\u0440\u043e\u0433\u0430 "+A.c(i.x,!1)+" \u043d\u0435 \u0431\u043e\u043b\u044c\u0448\u0435 \u0447\u0435\u043c \u043d\u0430 10%. \u0415\u0441\u043b\u0438 \u043f\u043e\u0441\u043e\u0431\u0438\u0435 \u0432\u044b \u0443\u0436\u0435 \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u0442\u0435, \u043f\u0440\u0438 \u043f\u0440\u043e\u0434\u043b\u0435\u043d\u0438\u0438 \u0435\u0433\u043e \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u0442 \u0432 \u0440\u0430\u0437\u043c\u0435\u0440\u0435 50% \u041f\u041c \u0440\u0435\u0431\u0451\u043d\u043a\u0430. \u0417\u0430\u044f\u0432\u043b\u0435\u043d\u0438\u0435 \u043d\u0443\u0436\u043d\u043e \u043f\u043e\u0434\u0430\u0442\u044c \u0432 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0439 \u043c\u0435\u0441\u044f\u0446 \u0432\u044b\u043f\u043b\u0430\u0442\u044b \u0438\u043b\u0438 \u0432 \u0442\u0435\u0447\u0435\u043d\u0438\u0435 3 \u043c\u0435\u0441\u044f\u0446\u0435\u0432 \u043f\u043e\u0441\u043b\u0435, \u0438 \u0442\u0430\u043a \u043c\u043e\u0436\u043d\u043e \u0442\u043e\u043b\u044c\u043a\u043e \u043e\u0434\u0438\u043d \u0440\u0430\u0437. \u0415\u0441\u043b\u0438 \u043f\u043e\u0434\u0430\u0451\u0442\u0435 \u0432\u043f\u0435\u0440\u0432\u044b\u0435 \u2014 \u043e\u0442\u043a\u0430\u0436\u0443\u0442.",0,A.c(o,!1)+" \xd7 "+s+" \u043f\u0440\u0438 \u043f\u0440\u043e\u0434\u043b\u0435\u043d\u0438\u0438","benefit")
A.eb(a,b,c)
return}if(s<=0||!b.gau())return
r=b.w
p=r.z
n=A.fp(b,p,s)
m=B.b.p(p*n)
l=b.at
l===$&&A.o()
k=l+i>0?" (\u0441 \u0443\u0447\u0451\u0442\u043e\u043c \u0430\u043b\u0438\u043c\u0435\u043d\u0442\u043e\u0432)":""
i=B.b.O(n*100)
p=A.c(p,!1)
l=b.ch
l===$&&A.o()
j=m*s
c.h(0,"c","\ud83d\udc76",B.e,"\u0415\u0434\u0438\u043d\u043e\u0435 \u043f\u043e\u0441\u043e\u0431\u0438\u0435 \u043d\u0430 \u0434\u0435\u0442\u0435\u0439 \u0434\u043e 17",""+i+"% \u0440\u0435\u0433\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u041f\u041c \u0440\u0435\u0431\u0451\u043d\u043a\u0430 ("+p+"). \u0412\u0430\u0448 \u0434\u043e\u0445\u043e\u0434 \u043d\u0430 \u0447\u0435\u043b."+k+": "+A.c(l,!1)+", \u043f\u043e\u0440\u043e\u0433: "+A.c(r.x,!1)+".",j,A.c(m,!1)+" \xd7 "+s+" = "+A.c(j,!1)+"/\u043c\u0435\u0441","monthly")
A.eb(a,b,c)},
eb(a,b,c){if(a.c==="caregiver"&&b.c<=0)c.h(0,"c","\ud83e\uddd3",B.a,"\u0423\u0445\u043e\u0434 \u0437\u0430\u0441\u0447\u0438\u0442\u0430\u044e\u0442 \u0442\u043e\u043b\u044c\u043a\u043e \u0437\u0430 \u0431\u043b\u0438\u0437\u043a\u043e\u0433\u043e","\u0421 21.07.2026 \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u0435 \u0434\u043e\u0445\u043e\u0434\u0430 \u0438\u0437-\u0437\u0430 \u0443\u0445\u043e\u0434\u0430 \u043f\u0440\u0438\u0437\u043d\u0430\u044e\u0442 \u0443\u0432\u0430\u0436\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u043c, \u0442\u043e\u043b\u044c\u043a\u043e \u0435\u0441\u043b\u0438 \u0432\u044b \u0443\u0445\u0430\u0436\u0438\u0432\u0430\u0435\u0442\u0435 \u0437\u0430 \u0447\u043b\u0435\u043d\u043e\u043c \u0441\u0432\u043e\u0435\u0439 \u0441\u0435\u043c\u044c\u0438: \u0441\u0443\u043f\u0440\u0443\u0433\u043e\u043c, \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u0435\u043c, \u0440\u0435\u0431\u0451\u043d\u043a\u043e\u043c, \u0431\u0440\u0430\u0442\u043e\u043c \u0438\u043b\u0438 \u0441\u0435\u0441\u0442\u0440\u043e\u0439, \u0431\u0430\u0431\u0443\u0448\u043a\u043e\u0439 \u0438\u043b\u0438 \u0434\u0435\u0434\u0443\u0448\u043a\u043e\u0439, \u0432\u043d\u0443\u043a\u043e\u043c. \u0418 \u0442\u043e\u043b\u044c\u043a\u043e \u0435\u0441\u043b\u0438 \u044d\u0442\u043e \u0438\u043d\u0432\u0430\u043b\u0438\u0434 I \u0433\u0440\u0443\u043f\u043f\u044b, \u0447\u0435\u043b\u043e\u0432\u0435\u043a \u0441\u0442\u0430\u0440\u0448\u0435 80 \u043b\u0435\u0442 \u0438\u043b\u0438 \u043f\u043e\u0436\u0438\u043b\u043e\u0439, \u043a\u043e\u0442\u043e\u0440\u043e\u043c\u0443 \u0432\u0440\u0430\u0447\u0438 \u043d\u0430\u0437\u043d\u0430\u0447\u0438\u043b\u0438 \u043f\u043e\u0441\u0442\u043e\u044f\u043d\u043d\u044b\u0439 \u0443\u0445\u043e\u0434. \u0420\u043e\u0434\u0441\u0442\u0432\u043e \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0430\u044e\u0442 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u043c\u0438. \u0423\u0445\u043e\u0434 \u0437\u0430 \u0440\u0435\u0431\u0451\u043d\u043a\u043e\u043c-\u0438\u043d\u0432\u0430\u043b\u0438\u0434\u043e\u043c \u0437\u0430\u0441\u0447\u0438\u0442\u044b\u0432\u0430\u0435\u0442\u0441\u044f, \u043a\u0430\u043a \u0438 \u0440\u0430\u043d\u044c\u0448\u0435.",0,"\u0443\u0441\u043b\u043e\u0432\u0438\u0435 \u043f\u0440\u0430\u0432\u0430","benefit")
if(B.cK.i(0,a.d))c.h(0,"c","\ud83c\udfe6",B.a,"\u0412 \u0432\u0430\u0448\u0435\u043c \u0440\u0435\u0433\u0438\u043e\u043d\u0435 \u043f\u0440\u043e\u0432\u0435\u0440\u044f\u044e\u0442 \u043f\u043e\u0441\u0442\u0443\u043f\u043b\u0435\u043d\u0438\u044f \u043d\u0430 \u0441\u0447\u0435\u0442\u0430","\u041f\u043e \u0437\u0430\u044f\u0432\u043b\u0435\u043d\u0438\u044f\u043c \u0441 1 \u043e\u043a\u0442\u044f\u0431\u0440\u044f \u043f\u043e 31 \u0434\u0435\u043a\u0430\u0431\u0440\u044f 2026 \u0433\u043e\u0434\u0430 \u0421\u043e\u0446\u0444\u043e\u043d\u0434 \u0441\u0440\u0430\u0432\u043d\u0438\u0442 \u0432\u0441\u0435 \u043f\u043e\u0441\u0442\u0443\u043f\u043b\u0435\u043d\u0438\u044f \u043d\u0430 \u0441\u0447\u0435\u0442\u0430 \u0441\u0435\u043c\u044c\u0438 \u0437\u0430 12 \u043c\u0435\u0441\u044f\u0446\u0435\u0432 \u0441 \u0435\u0451 \u0434\u043e\u0445\u043e\u0434\u043e\u043c. \u0415\u0441\u043b\u0438 \u043f\u043e\u0441\u0442\u0443\u043f\u043b\u0435\u043d\u0438\u0439 \u0432\u0434\u0432\u043e\u0435 \u0431\u043e\u043b\u044c\u0448\u0435 \u0434\u043e\u0445\u043e\u0434\u0430 \u0438\u043b\u0438 \u0435\u0449\u0451 \u0431\u043e\u043b\u044c\u0448\u0435 \u2014 \u043e\u0442\u043a\u0430\u0436\u0443\u0442. \u041d\u0435 \u0441\u0447\u0438\u0442\u0430\u044e\u0442\u0441\u044f \u043f\u0435\u0440\u0435\u0432\u043e\u0434\u044b \u043c\u0435\u0436\u0434\u0443 \u0441\u0432\u043e\u0438\u043c\u0438 \u0441\u0447\u0435\u0442\u0430\u043c\u0438 \u0438 \u0441\u0447\u0435\u0442\u0430\u043c\u0438 \u0447\u043b\u0435\u043d\u043e\u0432 \u0441\u0435\u043c\u044c\u0438, \u043a\u0440\u0435\u0434\u0438\u0442\u044b, \u0432\u043e\u0437\u0432\u0440\u0430\u0442 \u043d\u0430\u043b\u043e\u0433\u043e\u0432, \u0434\u0435\u043d\u044c\u0433\u0438 \u043e\u0442 \u043f\u0440\u043e\u0434\u0430\u0436\u0438 \u0436\u0438\u043b\u044c\u044f \u0438\u043b\u0438 \u043c\u0430\u0448\u0438\u043d\u044b (\u043f\u043e \u0434\u043e\u0433\u043e\u0432\u043e\u0440\u0443). \u041f\u0435\u0440\u0435\u0432\u043e\u0434\u044b \u043e\u0442 \u0440\u043e\u0434\u0441\u0442\u0432\u0435\u043d\u043d\u0438\u043a\u043e\u0432 \u0432\u043d\u0435 \u0441\u0435\u043c\u044c\u0438 \u0441\u0447\u0438\u0442\u0430\u044e\u0442\u0441\u044f.",0,"\u044d\u043a\u0441\u043f\u0435\u0440\u0438\u043c\u0435\u043d\u0442 \u0434\u043e 31.12.2026","benefit")},
iV(a,b,c){var s,r,q,p=a.f
if(p<2)s=p>=1&&a.w.i(0,"child_study")
else s=!0
p=b.dx
p===$&&A.o()
if(p){p=b.z
p===$&&A.o()}else p=!1
r=!0
if(p)if(s){p=b.ay
p===$&&A.o()
p=p>=b.w.x*1.5||a.w.i(0,"alimony_debt")}else p=r
else p=r
if(p)return
p=b.x
p===$&&A.o()
q=B.b.p(p*0.5384615384615384)
c.h(0,"c","\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc66",B.d,"\u0415\u0436\u0435\u0433\u043e\u0434\u043d\u0430\u044f \u0441\u0435\u043c\u0435\u0439\u043d\u0430\u044f \u0432\u044b\u043f\u043b\u0430\u0442\u0430","\u0412\u043e\u0437\u0432\u0440\u0430\u0442 7 \u0438\u0437 13 \u043f.\u043f. \u041d\u0414\u0424\u041b \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u0430\u044e\u0449\u0438\u0445 \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u0435\u0439 \u0441 2+ \u0434\u0435\u0442\u044c\u043c\u0438 \u043f\u0440\u0438 \u0434\u043e\u0445\u043e\u0434\u0435 \u043d\u0438\u0436\u0435 1,5 \u041f\u041c \u043d\u0430 \u0447\u0435\u043b. \u0414\u0435\u0439\u0441\u0442\u0432\u0443\u0435\u0442 \u0441 1 \u0438\u044e\u043d\u044f 2026 \u0433. (\u0424\u0417 \u211658-\u0424\u0417).",q,A.c(q,!1)+"/\u0433\u043e\u0434","once")},
ju(a,b,c){if(a.f<3||!a.w.i(0,"has_mortgage"))return
c.h(0,"c","\ud83c\udfe1",B.d,"450 000 \u20bd \u043d\u0430 \u0438\u043f\u043e\u0442\u0435\u043a\u0443 (\u043c\u043d\u043e\u0433\u043e\u0434\u0435\u0442\u043d\u044b\u0435)","3-\u0439 \u0438\u043b\u0438 \u043f\u043e\u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0440\u0435\u0431\u0451\u043d\u043e\u043a, \u0440\u043e\u0436\u0434\u0451\u043d\u043d\u044b\u0439 \u0432 2019\u20132030 \u0433\u0433. \u041d\u0430 \u043f\u043e\u0433\u0430\u0448\u0435\u043d\u0438\u0435 \u0438\u043f\u043e\u0442\u0435\u043a\u0438, \u0432 \u0442\u043e\u043c \u0447\u0438\u0441\u043b\u0435 \u0440\u0435\u0444\u0438\u043d\u0430\u043d\u0441\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0439 (\u043a\u0440\u0435\u0434\u0438\u0442 \u2014 \u0434\u043e 01.07.2031). \u0412 \u0440\u044f\u0434\u0435 \u0440\u0435\u0433\u0438\u043e\u043d\u043e\u0432 \u2014 \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u0430\u044f \u0440\u0435\u0433\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u0430\u044f \u0432\u044b\u043f\u043b\u0430\u0442\u0430.",45e4,A.c(45e4,!1),"once")},
iW(a,b,c){var s=A.c1(a.r)
if(a.f<1||s==null||s>6)return
c.h(0,"c","\ud83c\udfe6",B.d,"\u0421\u0435\u043c\u0435\u0439\u043d\u0430\u044f \u0438\u043f\u043e\u0442\u0435\u043a\u0430 \u2014 \u0441\u0442\u0430\u0432\u043a\u0430 \u0434\u043e 6%","\u0421\u0435\u043c\u044c\u044f\u043c \u0441 \u0440\u0435\u0431\u0451\u043d\u043a\u043e\u043c \u0434\u043e 6 \u043b\u0435\u0442 \u2014 \u043b\u044c\u0433\u043e\u0442\u043d\u0430\u044f \u0441\u0442\u0430\u0432\u043a\u0430 \u0434\u043e 6% \u0433\u043e\u0434\u043e\u0432\u044b\u0445 \u043d\u0430 \u043f\u043e\u043a\u0443\u043f\u043a\u0443 \u0436\u0438\u043b\u044c\u044f \u0438\u043b\u0438 \u0441\u0442\u0440\u043e\u0438\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u043e \u0434\u043e\u043c\u0430. \u041b\u0438\u043c\u0438\u0442 \u043a\u0440\u0435\u0434\u0438\u0442\u0430: 12 \u043c\u043b\u043d \u20bd \u0434\u043b\u044f \u041c\u043e\u0441\u043a\u0432\u044b, \u0421\u0430\u043d\u043a\u0442-\u041f\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433\u0430 \u0438 \u0438\u0445 \u043e\u0431\u043b\u0430\u0441\u0442\u0435\u0439, 6 \u043c\u043b\u043d \u20bd \u0434\u043b\u044f \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0445 \u0440\u0435\u0433\u0438\u043e\u043d\u043e\u0432. \u042d\u0442\u043e \u043b\u044c\u0433\u043e\u0442\u0430 \u043f\u043e \u0441\u0442\u0430\u0432\u043a\u0435, \u0430 \u043d\u0435 \u0432\u044b\u043f\u043b\u0430\u0442\u0430 \u043d\u0430 \u0440\u0443\u043a\u0438 \u2014 \u0443\u0441\u043b\u043e\u0432\u0438\u044f \u0438 \u0431\u0430\u043d\u043a\u0438 \u0443\u0442\u043e\u0447\u043d\u044f\u0439\u0442\u0435 \u0432 \u0431\u0430\u043d\u043a\u0435 \u0438\u043b\u0438 \u043d\u0430 \u0414\u041e\u041c.\u0420\u0424.",0,"\u043b\u044c\u0433\u043e\u0442\u043d\u0430\u044f \u0441\u0442\u0430\u0432\u043a\u0430","benefit")},
iR(a,b,c){var s
if(!a.w.i(0,"disabled_child"))return
c.h(0,"c","\ud83e\uddd2",B.a,"\u0412\u044b\u043f\u043b\u0430\u0442\u044b \u043d\u0430 \u0440\u0435\u0431\u0451\u043d\u043a\u0430-\u0438\u043d\u0432\u0430\u043b\u0438\u0434\u0430","\u0421\u043e\u0446\u0438\u0430\u043b\u044c\u043d\u0430\u044f \u043f\u0435\u043d\u0441\u0438\u044f "+A.c(22617.67,!0)+" + \u0415\u0414\u0412 "+A.c(4397.23,!0)+" (\u043f\u0440\u0438 \u043e\u0442\u043a\u0430\u0437\u0435 \u043e\u0442 \u043d\u0430\u0431\u043e\u0440\u0430 \u0441\u043e\u0446\u0443\u0441\u043b\u0443\u0433 \u2014 \u0432\u0441\u044f \u0441\u0443\u043c\u043c\u0430 \u0434\u0435\u043d\u044c\u0433\u0430\u043c\u0438).",27014.899999999998,A.c(27014.899999999998,!0)+"/\u043c\u0435\u0441","monthly")
s=a.c
if(s!=="employed"&&s!=="ip"&&s!=="self"&&s!=="pensioner")c.h(0,"c","\ud83e\udd1d",B.a,"\u041f\u043e\u0441\u043e\u0431\u0438\u0435 \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u044e \u0440\u0435\u0431\u0451\u043d\u043a\u0430-\u0438\u043d\u0432\u0430\u043b\u0438\u0434\u0430","\u041d\u0435\u0440\u0430\u0431\u043e\u0442\u0430\u044e\u0449\u0435\u043c\u0443 \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u044e \u0438\u043b\u0438 \u043e\u043f\u0435\u043a\u0443\u043d\u0443, \u0430 \u0442\u0430\u043a\u0436\u0435 \u0440\u0430\u0431\u043e\u0442\u0430\u044e\u0449\u0435\u043c\u0443 \u043d\u0435\u043f\u043e\u043b\u043d\u044b\u0439 \u0434\u0435\u043d\u044c, \u0434\u0438\u0441\u0442\u0430\u043d\u0446\u0438\u043e\u043d\u043d\u043e \u0438\u043b\u0438 \u043d\u0430 \u0434\u043e\u043c\u0443 (\u0423\u043a\u0430\u0437 \u2116175). \u0412 \u0440\u0430\u0439\u043e\u043d\u0430\u0445 \u0441 \u043a\u043e\u044d\u0444\u0444\u0438\u0446\u0438\u0435\u043d\u0442\u043e\u043c \u2014 \u0431\u043e\u043b\u044c\u0448\u0435.",11563.2,A.c(11563.2,!0)+"/\u043c\u0435\u0441","monthly")},
kk(a,b,c){var s=a.w,r=!0
if(s.i(0,"young_family"))if(b.b<=35)if(a.e==="married")s=!(s.i(0,"need_housing")||s.i(0,"rent_home"))
else s=r
else s=r
else s=r
if(s)return
c.h(0,"h","\ud83d\udc6b",B.d,"\u041f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0430 \xab\u041c\u043e\u043b\u043e\u0434\u0430\u044f \u0441\u0435\u043c\u044c\u044f\xbb","\u0421\u043e\u0446\u0432\u044b\u043f\u043b\u0430\u0442\u0430 \u043d\u0430 \u043f\u043e\u043a\u0443\u043f\u043a\u0443/\u0441\u0442\u0440\u043e\u0438\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u043e \u0436\u0438\u043b\u044c\u044f.",0,"30\u201335% \u0441\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u0438 \u0436\u0438\u043b\u044c\u044f","benefit")},
iz(a,b,c){var s="once",r="\u041f\u0440\u0430\u0432\u043e \u043d\u0430 \u043c\u0430\u0442\u043a\u0430\u043f\u0438\u0442\u0430\u043b \u0440\u0430\u0441\u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u044f\u0435\u0442\u0441\u044f \u043d\u0430 \u0443\u0441\u044b\u043d\u043e\u0432\u043b\u0451\u043d\u043d\u044b\u0445 \u0434\u0435\u0442\u0435\u0439.",q=a.w
if(!q.i(0,"i_adopt"))return
c.h(0,"c","\ud83d\udc9b",B.e,"\u0415\u0434\u0438\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0435 \u043f\u0440\u0438 \u0443\u0441\u044b\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0438","\u0421\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u0430\u044f \u0432\u044b\u043f\u043b\u0430\u0442\u0430 \u043f\u0440\u0438 \u0443\u0441\u044b\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0438. \u041e\u0444\u043e\u0440\u043c\u043b\u044f\u0435\u0442\u0441\u044f \u0447\u0435\u0440\u0435\u0437 \u0413\u043e\u0441\u0443\u0441\u043b\u0443\u0433\u0438.",28450.45,A.c(28450.45,!0),s)
c.h(0,"c","\ud83d\udc9b",B.d,"\u041f\u043e\u0432\u044b\u0448\u0435\u043d\u043d\u043e\u0435 \u043f\u043e\u0441\u043e\u0431\u0438\u0435 \u043f\u0440\u0438 \u0443\u0441\u044b\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0438","\u0415\u0441\u043b\u0438 \u0440\u0435\u0431\u0451\u043d\u043a\u0443 7+ \u043b\u0435\u0442, \u0440\u0435\u0431\u0451\u043d\u043e\u043a-\u0438\u043d\u0432\u0430\u043b\u0438\u0434 \u0438\u043b\u0438 \u0443\u0441\u044b\u043d\u043e\u0432\u043b\u044f\u0435\u0442\u0435 \u0431\u0440\u0430\u0442\u044c\u0435\u0432/\u0441\u0435\u0441\u0442\u0451\u0440.",0,"\u0434\u043e "+A.c(217384.58,!0)+" (\u0441\u043f\u0435\u0446. \u0441\u043b\u0443\u0447\u0430\u0438)","benefit")
if(q.i(0,"used_matcap"))return
q=a.f
if(q===0)c.h(0,"c","\ud83c\udfe6",B.d,"\u041c\u0430\u0442\u0435\u0440\u0438\u043d\u0441\u043a\u0438\u0439 \u043a\u0430\u043f\u0438\u0442\u0430\u043b \u043f\u0440\u0438 \u0443\u0441\u044b\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0438 (1-\u0439)",r,728921.9,A.c(728921.9,!1),s)
else if(q+1>=2)c.h(0,"c","\ud83c\udfe6",B.d,"\u041c\u0430\u0442\u0435\u0440\u0438\u043d\u0441\u043a\u0438\u0439 \u043a\u0430\u043f\u0438\u0442\u0430\u043b \u043f\u0440\u0438 \u0443\u0441\u044b\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0438 (2-\u0439+)",r,963243.17,A.c(963243.17,!1),s)},
dL:function dL(a,b,c){this.a=a
this.b=b
this.c=c},
x:function x(a,b){this.a=a
this.b=b},
e:function e(a,b){this.a=a
this.b=b},
jB(a){var s,r,q=B.aT.A(0,a)
if(q==null)q=a
for(s=0;s<92;++s){r=B.m[s]
if(r.a===q)return r}return B.c.ga1(B.m)},
iA(a){var s
if(a>=3)s=0.5
else if(a===2)s=0.3333333333333333
else s=a===1?0.25:0
return s},
b:function b(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
_.a=a
_.b=b
_.d=c
_.e=d
_.f=e
_.x=f
_.y=g
_.z=h
_.as=i
_.at=j
_.ax=k
_.ch=l
_.CW=m},
dS(a,b,c,d,e,f,g){return new A.Q(b,g,e,c,d,f,a)},
iN(a,b){var s=$.fF(),r=A.a_(s),q=r.j("L<1>"),p=A.ev(new A.L(s,r.j("E(1)").a(new A.du(a,b)),q),q.j("f.E"))
B.c.aD(p,new A.dv())
return p.length===0?null:B.c.ga1(p)},
bI:function bI(a,b){this.a=a
this.b=b},
Q:function Q(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
du:function du(a,b){this.a=a
this.b=b},
dv:function dv(){},
X:function X(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=e
_.r=f
_.w=g},
cz:function cz(a,b){this.a=a
this.b=b},
aq:function aq(a,b){this.a=a
this.b=b},
w:function w(a,b){this.a=a
this.d=b},
ba:function ba(a,b,c,d,e,f,g,h,i,j){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j},
c(a,b){var s,r,q
if(a>=1e6&&!b)return B.b.P(a/1e6,1)+" \u043c\u043b\u043d \u20bd"
if(!b)s=(a<0?Math.ceil(a):Math.floor(a))!==a
else s=!0
r=B.b.P(a,s?2:0).split(".")
q=A.k3(B.c.ga1(r),A.dT("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!1),t.A.a(t.Y.a(new A.dx())),null)
if(r.length===1)return q+" \u20bd"
return q+"."+B.c.gbb(r)+" \u20bd"},
dx:function dx(){},
jo(){var s,r,q,p,o,n,m,l,k="Attempting to rewrap a JS function.",j=t.L,i=A.z([B.v],j)
for(s=0;s<9;++s){r=B.aO[s]
i.push(new A.N(r.a,r.b))}A.dj("employment",i)
i=A.z([],j)
for(s=0;s<92;++s){q=B.m[s]
i.push(new A.N(q.a,q.b))}A.dj("region",i)
A.dj("marital",B.aF)
j=A.z([],j)
for(i=t.G.a(new A.dC()),p=B.c.gq(B.aG),i=new A.ab(p,i,t.e);i.l();){o=p.gm()
j.push(new A.N(o.a,o.b))}A.dj("youngestChildAge",j)
A.co("childChecks",B.aL)
A.co("familyChecks",B.aM)
A.co("housingChecks",B.aJ)
A.co("taxChecks",B.aN)
A.co("specialChecks",B.aH)
for(j=A.e3,i=v.G,s=0;s<9;++s){n=B.aI[s]
m=A.D(A.a(i.document).getElementById(n))
p=m==null
if(!p){o=new A.dD()
if(typeof o=="function")A.ao(A.a7(k,null))
l=function(a,b){return function(c){return a(b,c,arguments.length)}}(j,o)
l[$.by()]=o
m.addEventListener("input",l)}if(!p){p=new A.dE()
if(typeof p=="function")A.ao(A.a7(k,null))
l=function(a,b){return function(c){return a(b,c,arguments.length)}}(j,p)
l[$.by()]=p
m.addEventListener("change",l)}}j=A.D(A.a(i.document).getElementById("shareBtn"))
if(j!=null)j.addEventListener("click",A.e5(new A.dF()))
j=A.D(A.a(i.document).getElementById("shareCopy"))
if(j!=null)j.addEventListener("click",A.e5(new A.dG()))
A.im()
A.dl()},
f9(){var s=A.z([],t.s),r=$.f3
if(r>0)s.push(A.f7(r)+" \u0432 \u043c\u0435\u0441\u044f\u0446")
r=$.f4
if(r>0)s.push(A.f7(r)+" \u0435\u0434\u0438\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e")
return"\u041a\u0430\u043b\u044c\u043a\u0443\u043b\u044f\u0442\u043e\u0440 \u0432\u044b\u043f\u043b\u0430\u0442 \u043f\u043e\u043a\u0430\u0437\u0430\u043b: \u043d\u0430\u0448\u0435\u0439 \u0441\u0435\u043c\u044c\u0435 \u043f\u043e\u043b\u043e\u0436\u0435\u043d\u043e "+B.c.N(s," \u0438 \u0435\u0449\u0451 ")+". \u041f\u043e\u0441\u0447\u0438\u0442\u0430\u0439 \u0441\u0432\u043e\u044e \u0441\u0435\u043c\u044c\u044e, \u044d\u0442\u043e \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u043e \u0438 \u0431\u0435\u0437 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438:"},
f7(a){var s,r,q
if(a>=1e6){s=B.b.aA(a/1e5)/10
if(s===(s<0?Math.ceil(s):Math.floor(s)))r=B.b.P(s,0)
else{q=B.b.P(s,1)
r=A.fo(q,".",",")}return r+" \u043c\u043b\u043d \u20bd"}return A.c(B.b.p(a),!1)},
ir(){var s,r="https://gosvyplaty.ru/?from=share",q=A.f9(),p=v.G,o=A.a(A.a(p.window).navigator)
if("share" in o){A.fl(A.a(o.share({title:"\u041a\u0430\u043b\u044c\u043a\u0443\u043b\u044f\u0442\u043e\u0440 \u0432\u044b\u043f\u043b\u0430\u0442",text:q,url:"https://gosvyplaty.ru/?from=share"})),t.X).a4(new A.dr(),new A.ds(),t.P)
return}s=new A.dt()
s.$2("shareTg","https://t.me/share/url?url="+A.j(A.cb(r))+"&text="+A.j(A.cb(q)))
s.$2("shareVk","https://vk.com/share.php?url="+A.j(A.cb(r))+"&title="+A.j(A.cb(q)))
s.$2("shareWa","https://wa.me/?text="+A.j(A.cb(q+" https://gosvyplaty.ru/?from=share")))
p=A.D(A.a(p.document).getElementById("shareAlt"))
if(p!=null)A.df(p.toggleAttribute("hidden",!1))},
hV(){var s=v.G,r=A.D(A.a(s.document).getElementById("shareCopy"))
A.fl(A.a(A.a(A.a(A.a(s.window).navigator).clipboard).writeText(A.f9()+" https://gosvyplaty.ru/?from=share")),t.X).a4(new A.dh(r),new A.di(r),t.u)},
im(){var s,r,q,p,o,n,m,l,k=v.G,j=A.D(A.a(k.document).getElementById("eventBanner"))
if(j==null)return
s=A.e2(A.a(A.a(k.window).localStorage).getItem("dismissed_events"))
r=t.U
q=A.ha(new A.L(A.z((s==null?"":s).split(","),t.s),t.au.a(new A.dn()),r),r.j("f.E"))
p=A.iN(new A.at(Date.now(),0,!1),q)
if(p==null)return
o=A.a(A.a(k.document).createElement("div"))
o.className="event"
n=A.a(A.a(k.document).createElement("div"))
n.className="ev-ico"
n.textContent="\ud83d\uddd3"
A.a(o.appendChild(n))
n=A.a(A.a(k.document).createElement("div"))
n.className="ev-body"
m=A.a(A.a(k.document).createElement("div"))
m.className="ev-title"
m.textContent=p.b
A.a(n.appendChild(m))
m=A.a(A.a(k.document).createElement("div"))
m.className="ev-text"
m.textContent=p.c
A.a(n.appendChild(m))
l=A.hX(p.f)
if(l!=null){m=A.a(A.a(k.document).createElement("a"))
m.className="ev-cta"
m.href=l
m.text=p.r+" \u2192"
A.a(n.appendChild(m))}A.a(o.appendChild(n))
n=A.a(A.a(k.document).createElement("button"))
n.className="ev-close"
n.textContent="\u2715"
n.title="\u0411\u043e\u043b\u044c\u0448\u0435 \u043d\u0435 \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c"
n.ariaLabel="\u0417\u0430\u043a\u0440\u044b\u0442\u044c"
n.addEventListener("click",A.e5(new A.dp(q,p,o)))
A.a(o.appendChild(n))
A.a(j.appendChild(o))},
hX(a){var s=null
switch(a.a){case 0:s="/post/aug_family_cashback.html"
break
case 1:s="/instrukcii/"
break
case 2:break}return s},
dj(a,b){var s,r,q,p,o=v.G,n=A.D(A.a(o.document).getElementById(a))
if(n==null)return
for(s=b.length,r=0;r<b.length;b.length===s||(0,A.dK)(b),++r){q=b[r]
p=A.a(A.a(o.document).createElement("option"))
p.value=q.a
p.text=q.b
A.a(n.appendChild(p))}},
co(a,b){var s,r,q,p,o,n,m,l=v.G,k=A.D(A.a(l.document).getElementById(a))
if(k==null)return
for(s=b.length,r=A.e3,q=0;q<s;++q){p=b[q]
o=A.a(A.a(l.document).createElement("div"))
o.className="chip"
o.textContent=p.b
n=new A.dg(p,o)
if(typeof n=="function")A.ao(A.a7("Attempting to rewrap a JS function.",null))
m=function(c,d){return function(e){return c(d,e,arguments.length)}}(r,n)
m[$.by()]=n
o.addEventListener("click",m)
A.a(k.appendChild(o))}},
dk(a){var s=A.D(A.a(v.G.document).getElementById(a))
s=s==null?null:A.a6(s.value)
return s==null?"":s},
cq(a){var s=A.D(A.a(v.G.document).getElementById(a))
s=s==null?null:A.a6(s.value)
return s==null?"":s},
dl(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2="\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0444\u043e\u0440\u043c\u0443",b3=A.cL(A.dk("children"),null)
if(b3==null)b3=0
s=v.G
r=A.D(A.a(s.document).getElementById("youngestWrap"))
q=b3>0
if(q){if(r!=null)A.a(r.classList).remove("hidden")}else if(r!=null)A.a(r.classList).add("hidden")
p=A.cq("region")
o=A.dk("familySize")
n=A.cq("youngestChildAge")
m=A.dk("age")
l=A.cq("gender")
k=A.cq("employment")
j=p.length===0?"regular":p
i=A.cq("marital")
if(q)q=n.length===0?"3":n
else q="99"
h=A.h9($.e4,t.N)
g=A.dk("income")
f=new A.ba(m,l,k,j,i,b3,q,h,g,o.length===0?"1":o)
e=$.fD().b3(f)
q=e.a
m=q.length===0
d=!m
l=$.f3=e.b
k=$.f4=e.c
j=l>0
c=j||k>0
i=A.D(A.a(s.document).getElementById("shareBox"))
if(i!=null)A.df(i.toggleAttribute("hidden",!c))
if(!c){i=A.D(A.a(s.document).getElementById("shareAlt"))
if(i!=null)A.df(i.toggleAttribute("hidden",!0))}b=A.D(A.a(s.document).getElementById("shareCopy"))
if(b!=null)b.textContent="\u0421\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c"
a=A.D(A.a(s.document).getElementById("resultPanel"))
if(a!=null){a.textContent=""
a0=A.a(A.a(s.document).createElement("div"))
a0.className="cap"
i=d?"\u0415\u0436\u0435\u043c\u0435\u0441\u044f\u0447\u043d\u043e \u0432\u0430\u0448\u0435\u0439 \u0441\u0435\u043c\u044c\u0435 \u043f\u043e\u043b\u043e\u0436\u0435\u043d\u043e":b2
a0.textContent=i
A.a(a.appendChild(a0))
a0=A.a(A.a(s.document).createElement("div"))
a0.className="sum"
i=j?A.c(B.b.p(l),!1):"\u2014"
a0.textContent=i
A.a(a.appendChild(a0))
if(k>0){a0=A.a(A.a(s.document).createElement("div"))
a0.className="once"
a0.textContent="\u0438 \u0435\u0449\u0451 "+A.c(B.b.p(k),!1)+" \u0435\u0434\u0438\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e"
A.a(a.appendChild(a0))}else if(m){a0=A.a(A.a(s.document).createElement("div"))
a0.className="once"
a0.textContent="\u0421\u0443\u043c\u043c\u044b \u043f\u043e\u044f\u0432\u044f\u0442\u0441\u044f \u0437\u0434\u0435\u0441\u044c \u043f\u043e \u043c\u0435\u0440\u0435 \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"
A.a(a.appendChild(a0))}}a1=A.D(A.a(s.document).getElementById("stickyCount"))
a2=A.D(A.a(s.document).getElementById("stickySum"))
if(a1!=null&&a2!=null){i=d?"\u041d\u0430\u0439\u0434\u0435\u043d\u043e \u0432\u044b\u043f\u043b\u0430\u0442: "+q.length:b2
a1.textContent=i
if(j)l=A.c(B.b.p(l),!1)+"/\u043c\u0435\u0441"
else l=k>0?A.c(B.b.p(k),!1):"\u2014"
a2.textContent=l}a3=A.D(A.a(s.document).getElementById("list"))
if(a3==null)return
a3.textContent=""
if(m){a0=A.a(A.a(s.document).createElement("div"))
a0.className="muted"
a0.textContent="\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0444\u043e\u0440\u043c\u0443 \u2014 \u0437\u0434\u0435\u0441\u044c \u043f\u043e\u044f\u0432\u044f\u0442\u0441\u044f \u043f\u043e\u043b\u043e\u0436\u0435\u043d\u043d\u044b\u0435 \u0432\u044b\u043f\u043b\u0430\u0442\u044b."
A.a(a3.appendChild(a0))
return}for(m=B.aS.gan(),l=m.$ti,m=new A.ag(m.a(),l.j("ag<1>")),k=A.a_(q),j=k.j("E(1)"),k=k.j("L<1>"),i=k.j("f.E"),l=l.c;m.l();){h=m.b
if(h==null)h=l.a(h)
a4=A.ev(new A.L(q,j.a(new A.dm(h)),k),i)
if(a4.length===0)continue
a0=A.a(A.a(s.document).createElement("div"))
a0.className="cat"
h=h.b
g=A.dT("[\\u{1F000}-\\u{1FAFF}\\u{2600}-\\u{27BF}\\u{2190}-\\u{21FF}\\u{2B00}-\\u{2BFF}\ufe0f\u200d]",!0)
a0.textContent=B.h.a5(A.fo(h,g,""))
A.a(a3.appendChild(a0))
for(h=a4.length,a5=0;a5<a4.length;a4.length===h||(0,A.dK)(a4),++a5){a6=a4[a5]
a0=A.a(A.a(s.document).createElement("div"))
a0.className="benefit"
a7=A.a(A.a(s.document).createElement("div"))
a7.className="head"
a8=A.a(A.a(s.document).createElement("div"))
a8.className="nm"
a8.textContent=a6.b
A.a(a7.appendChild(a8))
g=a6.r
if(g==="monthly")a9="month"
else a9=g==="once"?"once":"relief"
a8=A.a(A.a(s.document).createElement("div"))
a8.className="amt "+a9
a8.textContent=a6.f
A.a(a7.appendChild(a8))
A.a(a0.appendChild(a7))
g=a6.d
if(g.length!==0){a7=A.a(A.a(s.document).createElement("div"))
a7.className="desc"
a7.textContent=g
A.a(a0.appendChild(a7))}b0=A.fK(a6,f)
if(b0!=null){a7=A.a(A.a(s.document).createElement("details"))
g=A.a(A.a(s.document).createElement("summary"))
g.textContent="\u041f\u043e\u0447\u0435\u043c\u0443 \u043f\u043e\u043b\u043e\u0436\u0435\u043d\u043e"
A.a(a7.appendChild(g))
a8=A.a(A.a(s.document).createElement("div"))
a8.className="why"
a8.textContent=b0.a
A.a(a7.appendChild(a8))
b1=b0.b
if(b1!=null){a8=A.a(A.a(s.document).createElement("div"))
a8.className="src"
a8.textContent=b1.d
A.a(a7.appendChild(a8))}A.a(a0.appendChild(a7))}A.a(a3.appendChild(a0))}}},
dC:function dC(){},
dD:function dD(){},
dE:function dE(){},
dF:function dF(){},
dG:function dG(){},
dr:function dr(){},
ds:function ds(){},
dt:function dt(){},
dh:function dh(a){this.a=a},
di:function di(a){this.a=a},
dn:function dn(){},
dp:function dp(a,b,c){this.a=a
this.b=b
this.c=c},
dg:function dg(a,b){this.a=a
this.b=b},
dm:function dm(a){this.a=a},
jw(a,b,c){var s,r,q,p=b.w
if(!p.e)return
s=B.aR.A(0,p.a)
if(s==null)s=0.3
r=b.c
q=B.b.p((r>0?r:28395.89)*s)
c.h(0,"r","\ud83c\udf28\ufe0f",B.a,"\u0420\u0430\u0439\u043e\u043d\u043d\u044b\u0439 \u043a\u043e\u044d\u0444\u0444\u0438\u0446\u0438\u0435\u043d\u0442","\u041a \u0437\u0430\u0440\u043f\u043b\u0430\u0442\u0435 \u0438 \u043f\u0435\u043d\u0441\u0438\u0438 +"+B.b.O(s*100)+"% (\u043c\u0438\u043d.) \u0434\u043e 100% \u2014 \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043e\u0442 \u0441\u0443\u0431\u044a\u0435\u043a\u0442\u0430 \u0420\u0424.",q,"\u043e\u0442 +"+A.c(q,!1)+"/\u043c\u0435\u0441","monthly")
c.h(0,"r","\u2708\ufe0f",B.a,"\u041a\u043e\u043c\u043f\u0435\u043d\u0441\u0430\u0446\u0438\u044f \u043f\u0440\u043e\u0435\u0437\u0434\u0430 \u0432 \u043e\u0442\u043f\u0443\u0441\u043a","\u0420\u0430\u0437 \u0432 2 \u0433\u043e\u0434\u0430 \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u043d\u0438\u043a\u043e\u0432 \u041a\u0440\u0430\u0439\u043d\u0435\u0433\u043e \u0421\u0435\u0432\u0435\u0440\u0430.",0,"\u0440\u0430\u0437 \u0432 2 \u0433\u043e\u0434\u0430","benefit")
c.h(0,"r","\ud83c\udfd6\ufe0f",B.a,"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u043e\u0442\u043f\u0443\u0441\u043a (\u0421\u0435\u0432\u0435\u0440)","16\u201324 \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0445 \u0434\u043d\u044f \u043a \u0435\u0436\u0435\u0433\u043e\u0434\u043d\u043e\u043c\u0443 \u043e\u0442\u043f\u0443\u0441\u043a\u0443.",0,"16\u201324 \u0434\u043d\u044f","benefit")},
iH(a,b,c){if(!a.w.i(0,"i_chern"))return
c.h(0,"s","\u2622\ufe0f",B.j,"\u0415\u0414\u0412 \u043b\u0438\u043a\u0432\u0438\u0434\u0430\u0442\u043e\u0440\u0430 \u0427\u0410\u042d\u0421","\u0415\u0414\u0412 \u0438 \u043b\u044c\u0433\u043e\u0442\u044b.",2590,A.c(2590,!1)+"/\u043c\u0435\u0441","monthly")},
jL(a,b,c){if(!a.w.i(0,"i_repr"))return
c.h(0,"s","\ud83d\udcdc",B.j,"\u0412\u044b\u043f\u043b\u0430\u0442\u044b \u0440\u0435\u0430\u0431\u0438\u043b\u0438\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u043c","\u0415\u0414\u0412, \u043b\u044c\u0433\u043e\u0442\u044b \u043f\u043e \u0416\u041a\u0425, \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u0443 \u0438 \u043c\u0435\u0434\u0438\u0446\u0438\u043d\u0435.",0,"\u0415\u0414\u0412 + \u043b\u044c\u0433\u043e\u0442\u044b","benefit")},
jt(a,b,c){var s,r,q="monthly",p=b.w
if(!p.d)return
if(a.f>0){s=b.as
s===$&&A.o()
s=s&&p.as!=null}else s=!1
if(s){s=p.as
s.toString
c.h(0,"r","\ud83c\udfd9\ufe0f",B.j,"\u041c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u0434\u043e\u043f\u043b\u0430\u0442\u0430 \u043d\u0430 \u0434\u0435\u0442\u0435\u0439","\u0420\u0435\u0433\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u0430\u044f \u043d\u0430\u0434\u0431\u0430\u0432\u043a\u0430 \u0441\u0432\u0435\u0440\u0445 \u0444\u0435\u0434\u0435\u0440\u0430\u043b\u044c\u043d\u044b\u0445 \u0432\u044b\u043f\u043b\u0430\u0442.",s,"~"+A.c(s,!1)+"/\u043c\u0435\u0441",q)}s=!1
if(a.d==="moscow")if(a.w.i(0,"i_pen")||a.c==="pensioner"){r=p.ax
if(r!=null){s=b.y
s===$&&A.o()
r=s<r
s=r}}if(s){s=p.ax
s.toString
r=b.y
r===$&&A.o()
c.h(0,"r","\ud83c\udfd9\ufe0f",B.j,"\u0414\u043e\u043f\u043b\u0430\u0442\u0430 \u043a \u043f\u0435\u043d\u0441\u0438\u0438 \u0434\u043e \u0433\u043e\u0440\u043e\u0434\u0441\u043a\u043e\u0433\u043e \u041f\u041c (\u041c\u043e\u0441\u043a\u0432\u0430)","\u041f\u0435\u043d\u0441\u0438\u044f \u0434\u043e\u0432\u043e\u0434\u0438\u0442\u0441\u044f \u0434\u043e \u0433\u043e\u0440\u043e\u0434\u0441\u043a\u043e\u0433\u043e \u043f\u0440\u043e\u0436\u0438\u0442\u043e\u0447\u043d\u043e\u0433\u043e \u043c\u0438\u043d\u0438\u043c\u0443\u043c\u0430 \u043f\u0435\u043d\u0441\u0438\u043e\u043d\u0435\u0440\u0430.",B.b.b4(s-r,0,1/0),"\u0434\u043e "+A.c(s,!1)+"/\u043c\u0435\u0441",q)}if((a.c==="student"||a.w.i(0,"i_stu"))&&p.at!=null){p=p.at
p.toString
c.h(0,"r","\ud83c\udfd9\ufe0f",B.j,"\u041c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u0441\u0442\u0438\u043f\u0435\u043d\u0434\u0438\u044f","\u0420\u0435\u0433\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u0430\u044f \u043d\u0430\u0434\u0431\u0430\u0432\u043a\u0430 \u043a \u0444\u0435\u0434\u0435\u0440\u0430\u043b\u044c\u043d\u043e\u0439 \u0441\u0442\u0438\u043f\u0435\u043d\u0434\u0438\u0438.",p,A.c(p,!1)+"/\u043c\u0435\u0441",q)}},
iO(a,b,c){if(!b.w.f&&!a.w.i(0,"i_dfo"))return
c.h(0,"r","\ud83c\udf0f",B.a,"\u0414\u0430\u043b\u044c\u043d\u0435\u0432\u043e\u0441\u0442\u043e\u0447\u043d\u044b\u0439 \u0433\u0435\u043a\u0442\u0430\u0440","\u041f\u0440\u0430\u0432\u043e \u043d\u0430 \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u044b\u0439 \u0437\u0435\u043c\u0435\u043b\u044c\u043d\u044b\u0439 \u0443\u0447\u0430\u0441\u0442\u043e\u043a \u0434\u043e 1 \u0433\u0430.",0,"1 \u0433\u0430 \u0437\u0435\u043c\u043b\u0438","benefit")},
jC(a,b,c){var s,r,q
if(b.w.d)return
s=a.f>0||a.w.i(0,"pregnant")
r=a.c==="student"||a.w.i(0,"i_stu")
if(!s&&!r)return
q=A.z([],t.s)
if(s)B.c.n(q,"\u0441\u0435\u043c\u044c\u044f\u043c \u0441 \u0434\u0435\u0442\u044c\u043c\u0438")
if(r)B.c.n(q,"\u0441\u0442\u0443\u0434\u0435\u043d\u0442\u0430\u043c")
c.h(0,"r","\ud83d\uddfa\ufe0f",B.a,"\u0420\u0435\u0433\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u0434\u043e\u043f\u043b\u0430\u0442\u044b","\u0412 \u0432\u0430\u0448\u0435\u043c \u0441\u0443\u0431\u044a\u0435\u043a\u0442\u0435 \u0420\u0424 \u043c\u043e\u0433\u0443\u0442 \u0434\u0435\u0439\u0441\u0442\u0432\u043e\u0432\u0430\u0442\u044c \u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0435 \u043c\u0435\u0440\u044b \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0438 "+B.c.N(q," \u0438 ")+" (\u0434\u043e\u043f\u043b\u0430\u0442\u044b \u043d\u0430 \u0434\u0435\u0442\u0435\u0439 \u0438 \u0448\u043a\u043e\u043b\u044c\u043d\u0438\u043a\u043e\u0432, \u0440\u0435\u0433\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u0441\u0442\u0438\u043f\u0435\u043d\u0434\u0438\u0430\u043b\u044c\u043d\u044b\u0435 \u043d\u0430\u0434\u0431\u0430\u0432\u043a\u0438, \u043b\u044c\u0433\u043e\u0442\u043d\u044b\u0439 \u043f\u0440\u043e\u0435\u0437\u0434). \u0420\u0430\u0437\u043c\u0435\u0440 \u0438 \u0443\u0441\u043b\u043e\u0432\u0438\u044f \u0437\u0430\u0432\u0438\u0441\u044f\u0442 \u043e\u0442 \u0440\u0435\u0433\u0438\u043e\u043d\u0430 \u2014 \u0443\u0442\u043e\u0447\u043d\u0438\u0442\u0435 \u0432 \u0441\u043e\u0446\u0437\u0430\u0449\u0438\u0442\u0435, \u041c\u0424\u0426 \u0438\u043b\u0438 \u043d\u0430 \u043f\u043e\u0440\u0442\u0430\u043b\u0435 \u0413\u043e\u0441\u0443\u0441\u043b\u0443\u0433.",0,"\u0443\u0442\u043e\u0447\u043d\u044f\u0439\u0442\u0435 \u0432 \u0440\u0435\u0433\u0438\u043e\u043d\u0435","benefit")},
jD(a,b,c){var s,r=b.w,q=r.ch
if(q==null)return
s=r.CW
if(a.f<s)return
$label0$0:{if(1===s){r="1-\u0433\u043e"
break $label0$0}if(2===s){r="2-\u0433\u043e"
break $label0$0}if(4===s){r="4-\u0433\u043e"
break $label0$0}if(5===s){r="5-\u0433\u043e"
break $label0$0}r="3-\u0433\u043e"
break $label0$0}c.h(0,"r","\ud83c\udfe6",B.e,"\u0420\u0435\u0433\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0439 \u043c\u0430\u0442\u0435\u0440\u0438\u043d\u0441\u043a\u0438\u0439 \u043a\u0430\u043f\u0438\u0442\u0430\u043b","\u0415\u0434\u0438\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u0430\u044f \u0432\u044b\u043f\u043b\u0430\u0442\u0430 \u043f\u0440\u0438 \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u0438 "+r+" \u0438 \u043f\u043e\u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0445 \u0434\u0435\u0442\u0435\u0439. \u0412 \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0440\u0435\u0433\u0438\u043e\u043d\u0430\u0445 \u0435\u0441\u0442\u044c \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f \u043f\u043e \u0432\u043e\u0437\u0440\u0430\u0441\u0442\u0443 \u0438\u043b\u0438 \u0434\u043e\u0445\u043e\u0434\u0443 \u2014 \u0443\u0442\u043e\u0447\u043d\u044f\u0439\u0442\u0435 \u0432 \u041c\u0424\u0426.",q,A.c(q,!1),"once")},
k6(a,b,c){var s
if(!(a.c==="student"||a.w.i(0,"i_stu")))return
c.h(0,"w","\ud83c\udf93",B.e,"\u0421\u043e\u0446\u0438\u0430\u043b\u044c\u043d\u0430\u044f \u0441\u0442\u0438\u043f\u0435\u043d\u0434\u0438\u044f","\u0414\u043b\u044f \u043d\u0443\u0436\u0434\u0430\u044e\u0449\u0438\u0445\u0441\u044f \u0441\u0442\u0443\u0434\u0435\u043d\u0442\u043e\u0432 \u043e\u0447\u043d\u043e\u0439 \u0444\u043e\u0440\u043c\u044b (\u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0430\u0435\u0442\u0441\u044f \u0441\u043f\u0440\u0430\u0432\u043a\u043e\u0439). \u041c\u0438\u043d. \u043d\u043e\u0440\u043c\u0430\u0442\u0438\u0432 \u0434\u043b\u044f \u0432\u0443\u0437\u043e\u0432 \u0441 01.09.2025.",3340,A.c(3340,!1)+"/\u043c\u0435\u0441","monthly")
s=b.Q
s===$&&A.o()
if(s)c.h(0,"w","\ud83d\udcb0",B.e,"\u0413\u043e\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043d\u043d\u0430\u044f \u0430\u043a\u0430\u0434\u0435\u043c\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0441\u0442\u0438\u043f\u0435\u043d\u0434\u0438\u044f","\u0411\u0430\u0437\u043e\u0432\u0430\u044f \u0430\u043a\u0430\u0434\u0435\u043c\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0441\u0442\u0438\u043f\u0435\u043d\u0434\u0438\u044f \u0434\u043b\u044f \u043e\u0447\u043d\u0438\u043a\u043e\u0432 (\u043c\u0438\u043d. \u043d\u043e\u0440\u043c\u0430\u0442\u0438\u0432 \u0434\u043b\u044f \u0432\u0443\u0437\u043e\u0432).",2224,A.c(2224,!1)+"/\u043c\u0435\u0441","monthly")
c.h(0,"w","\ud83d\ude8c",B.a,"\u041b\u044c\u0433\u043e\u0442\u043d\u044b\u0439 \u043f\u0440\u043e\u0435\u0437\u0434\u043d\u043e\u0439 (\u0441\u0442\u0443\u0434\u0435\u043d\u0442)","\u0421\u043a\u0438\u0434\u043a\u0430 50% \u043d\u0430 \u0433\u043e\u0440\u043e\u0434\u0441\u043a\u043e\u0439 \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442 \u0432\u043e \u043c\u043d\u043e\u0433\u0438\u0445 \u0440\u0435\u0433\u0438\u043e\u043d\u0430\u0445.",0,"\u0441\u043a\u0438\u0434\u043a\u0430 50%","benefit")
if(a.w.i(0,"paid_edu"))c.h(0,"t","\ud83c\udf93",B.d,"\u0412\u044b\u0447\u0435\u0442 \u0437\u0430 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435 (\u0441\u0430\u043c \u0441\u0442\u0443\u0434\u0435\u043d\u0442)","13% \u043e\u0442 \u043e\u043f\u043b\u0430\u0442\u044b \u0437\u0430 \u0441\u0435\u0431\u044f, \u0434\u043e 150 000 \u20bd/\u0433\u043e\u0434.",19500,"\u0434\u043e "+A.c(19500,!1)+"/\u0433\u043e\u0434","once")},
kh(a,b,c){var s,r
if(a.c!=="unemployed_reg")return
s=b.e
s=s>0?s:Math.max(27093,b.c/b.d)
r=b.f>0?Math.min(B.b.p(s*0.75),15886):1863
c.h(0,"w","\ud83d\udcbc",B.a,"\u041f\u043e\u0441\u043e\u0431\u0438\u0435 \u043f\u043e \u0431\u0435\u0437\u0440\u0430\u0431\u043e\u0442\u0438\u0446\u0435","\u041f\u0435\u0440\u0432\u044b\u0435 3 \u043c\u0435\u0441: 75% \u0437\u0430\u0440\u043f\u043b\u0430\u0442\u044b, \u0434\u0430\u043b\u0435\u0435 60%, \u0434\u0430\u043b\u0435\u0435 45%. \u041c\u0438\u043d "+A.c(1863,!1)+", \u043c\u0430\u043a\u0441 "+A.c(15886,!1)+".",r,A.c(r,!1)+"/\u043c\u0435\u0441","monthly")},
jl(a,b,c){var s,r
if(!a.w.i(0,"i_laid"))return
s=a.c
if(!(s==="unemployed_reg"||s==="unemployed"))return
r=b.e
r=r>0?r:Math.max(27093,b.c/b.d)
c.h(0,"w","\ud83d\udccb",B.a,"\u0412\u044b\u0445\u043e\u0434\u043d\u043e\u0435 \u043f\u043e\u0441\u043e\u0431\u0438\u0435 \u043f\u0440\u0438 \u0441\u043e\u043a\u0440\u0430\u0449\u0435\u043d\u0438\u0438","1 \u0441\u0440.\u043c\u0435\u0441. \u0437\u0430\u0440\u043f\u043b\u0430\u0442\u0430 \u0441\u0440\u0430\u0437\u0443 + \u0435\u0449\u0451 \u0434\u043e 2 \u043c\u0435\u0441. \u043f\u0440\u0438 \u043d\u0435\u0442\u0440\u0443\u0434\u043e\u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0435.",r,"\u2248 "+A.c(r,!1)+" \xd7 1\u20133 \u043c\u0435\u0441.","once")},
je(a,b,c){var s,r,q,p,o
if(!a.w.i(0,"high_utility")){s=b.Q
s===$&&A.o()
s=!s}else s=!1
if(s)return
r=A.c1("")
if(r==null)r=0
s=b.c
q=s*0.22
p=A.eH()
o=A.eH()
if(r>0){p.sL(Math.max(0,B.b.p(r-q)))
o.sL("\u0420\u0430\u0441\u0445\u043e\u0434\u044b \u0416\u041a\u0425 "+A.c(r,!1)+" \u2212 22% \u0434\u043e\u0445\u043e\u0434\u0430 "+A.c(B.b.p(q),!1)+" = "+A.c(p.I(),!1)+".")}else{p.sL(Math.max(300,B.b.p(s*0.04)))
o.sL("\u041e\u0440\u0438\u0435\u043d\u0442\u0438\u0440: \u0435\u0441\u043b\u0438 \u0416\u041a\u0425 > 22% \u0434\u043e\u0445\u043e\u0434\u0430 ("+A.c(B.b.p(q),!1)+"/\u043c\u0435\u0441). \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0440\u0430\u0441\u0445\u043e\u0434\u044b \u043d\u0430 \u0416\u041a\u0425 \u0432 \u0448\u0430\u0433\u0435 4 \u0434\u043b\u044f \u0442\u043e\u0447\u043d\u043e\u0433\u043e \u0440\u0430\u0441\u0447\u0451\u0442\u0430.")}c.h(0,"h","\ud83c\udfe0",B.e,"\u0421\u0443\u0431\u0441\u0438\u0434\u0438\u044f \u043d\u0430 \u043e\u043f\u043b\u0430\u0442\u0443 \u0416\u041a\u0425",o.I(),p.I(),"~"+A.c(p.I(),!1)+"/\u043c\u0435\u0441","monthly")},
jx(a,b,c){var s,r,q
if(!(a.w.i(0,"i_pen")||a.c==="pensioner"))return
s=b.w
r=B.aP.A(0,s.a)
if(r==null)r=16288
if(!(s.ax!=null&&a.d==="moscow")){s=b.y
s===$&&A.o()
s=s<r}else s=!1
if(s){s=A.c(r,!1)
q=b.y
q===$&&A.o()
c.h(0,"p","\ud83d\udc74",B.e,"\u0414\u043e\u043f\u043b\u0430\u0442\u0430 \u043a \u043f\u0435\u043d\u0441\u0438\u0438 \u0434\u043e \u041f\u041c \u043f\u0435\u043d\u0441\u0438\u043e\u043d\u0435\u0440\u0430","\u0420\u0435\u0433\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u0430\u044f \u0441\u043e\u0446\u0438\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043e\u043f\u043b\u0430\u0442\u0430 \u043d\u0435\u0440\u0430\u0431\u043e\u0442\u0430\u044e\u0449\u0435\u043c\u0443 \u043f\u0435\u043d\u0441\u0438\u043e\u043d\u0435\u0440\u0443 \u0434\u043e \u041f\u041c \u043f\u0435\u043d\u0441\u0438\u043e\u043d\u0435\u0440\u0430 \u0432 \u0432\u0430\u0448\u0435\u043c \u0440\u0435\u0433\u0438\u043e\u043d\u0435 ("+s+"). \u041d\u0430\u0437\u043d\u0430\u0447\u0430\u0435\u0442\u0441\u044f \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u0447\u0435\u0440\u0435\u0437 \u0421\u0424\u0420/\u0441\u043e\u0446\u0437\u0430\u0449\u0438\u0442\u0443.",Math.max(0,r-q),"\u0434\u043e "+A.c(r,!1)+"/\u043c\u0435\u0441","monthly")}if(b.b>=80)c.h(0,"p","\ud83e\uddd3",B.e,"\u041d\u0430\u0434\u0431\u0430\u0432\u043a\u0430 80+","\u0424\u0438\u043a\u0441. \u0432\u044b\u043f\u043b\u0430\u0442\u0430 \u0443\u0434\u0432\u0430\u0438\u0432\u0430\u0435\u0442\u0441\u044f.",9584.69,"+"+A.c(9584.69,!1)+"/\u043c\u0435\u0441","monthly")
c.h(0,"p","\u2764\ufe0f\u200d\ud83d\udd25",B.a,"\u0418\u043d\u0434\u0435\u043a\u0441\u0430\u0446\u0438\u044f 2026","\u0421\u0442\u0440\u0430\u0445\u043e\u0432\u044b\u0435 \u043f\u0435\u043d\u0441\u0438\u0438 +7,6%.",0,"+7,6%","benefit")},
iQ(a,b,c){var s="s",r="\u041c\u0430\u043a\u0441. \u043f\u0440\u0438 \u043e\u0442\u043a\u0430\u0437\u0435 \u043e\u0442 \u041d\u0421\u0423. \u041f\u0440\u0438 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0438 \u043b\u044c\u0433\u043e\u0442 \u043d\u0430\u0442\u0443\u0440\u043e\u0439: \u2212",q="monthly",p="\u0441\u0442\u0430\u0436 + \u043d\u0430\u0434\u0431\u0430\u0432\u043a\u0430 \u0432 \u043f\u0435\u043d\u0441\u0438\u0438",o="benefit",n=a.w
if(n.i(0,"i_dis1"))c.h(0,s,"\u267f",B.e,"\u0415\u0414\u0412 \u2014 \u0438\u043d\u0432\u0430\u043b\u0438\u0434 I \u0433\u0440.",r+A.c(1825.25,!0)+"/\u043c\u0435\u0441.",6157.22,"~"+A.c(6157.22,!0)+"/\u043c\u0435\u0441",q)
if(n.i(0,"i_dis2"))c.h(0,s,"\u267f",B.e,"\u0415\u0414\u0412 \u2014 \u0438\u043d\u0432\u0430\u043b\u0438\u0434 II \u0433\u0440.",r+A.c(1825.25,!0)+"/\u043c\u0435\u0441.",4397.23,"~"+A.c(4397.23,!0)+"/\u043c\u0435\u0441",q)
if(n.i(0,"i_dis3"))c.h(0,s,"\u267f",B.a,"\u0415\u0414\u0412 \u2014 \u0438\u043d\u0432\u0430\u043b\u0438\u0434 III \u0433\u0440.",r+A.c(1825.25,!0)+"/\u043c\u0435\u0441.",3520.01,"~"+A.c(3520.01,!0)+"/\u043c\u0435\u0441",q)
if(n.i(0,"has_dis1")&&a.c!=="employed")c.h(0,s,"\ud83e\udd1d",B.a,"\u0423\u0445\u043e\u0434 \u0437\u0430 \u0438\u043d\u0432\u0430\u043b\u0438\u0434\u043e\u043c I \u0433\u0440.","\u0412\u044b\u043f\u043b\u0430\u0442\u0430 1 200 \u20bd \u0443\u0445\u0430\u0436\u0438\u0432\u0430\u044e\u0449\u0435\u043c\u0443 \u043e\u0442\u043c\u0435\u043d\u0435\u043d\u0430 \u0441 2025. \u041d\u0430\u0434\u0431\u0430\u0432\u043a\u0430 ~1 414 \u20bd \u0432\u0445\u043e\u0434\u0438\u0442 \u0432 \u043f\u0435\u043d\u0441\u0438\u044e \u0438\u043d\u0432\u0430\u043b\u0438\u0434\u0430; \u0443\u0445\u0430\u0436\u0438\u0432\u0430\u044e\u0449\u0435\u043c\u0443 \u2014 \u0441\u0442\u0430\u0436 1,8 \u0418\u041f\u041a/\u0433\u043e\u0434.",0,p,o)
if(n.i(0,"elderly80")&&a.c!=="employed")c.h(0,s,"\ud83e\uddd3",B.a,"\u0423\u0445\u043e\u0434 \u0437\u0430 \u043f\u043e\u0436\u0438\u043b\u044b\u043c 80+","\u0412\u044b\u043f\u043b\u0430\u0442\u0430 1 200 \u20bd \u0443\u0445\u0430\u0436\u0438\u0432\u0430\u044e\u0449\u0435\u043c\u0443 \u043e\u0442\u043c\u0435\u043d\u0435\u043d\u0430 \u0441 2025. \u041d\u0430\u0434\u0431\u0430\u0432\u043a\u0430 ~1 414 \u20bd \u0432\u0445\u043e\u0434\u0438\u0442 \u0432 \u043f\u0435\u043d\u0441\u0438\u044e \u043f\u043e\u0436\u0438\u043b\u043e\u0433\u043e; \u0443\u0445\u0430\u0436\u0438\u0432\u0430\u044e\u0449\u0435\u043c\u0443 \u2014 \u0441\u0442\u0430\u0436 1,8 \u0418\u041f\u041a/\u0433\u043e\u0434.",0,p,o)
if(n.i(0,"has_dis2")||n.i(0,"has_dis3"))c.h(0,s,"\ud83e\udd1d",B.a,"\u0423\u0445\u043e\u0434 \u0437\u0430 \u0438\u043d\u0432\u0430\u043b\u0438\u0434\u043e\u043c II/III \u0433\u0440.","\u0417\u0430 \u0443\u0445\u043e\u0434 \u0437\u0430 \u0438\u043d\u0432\u0430\u043b\u0438\u0434\u043e\u043c II \u0438\u043b\u0438 III \u0433\u0440\u0443\u043f\u043f\u044b \u043a\u043e\u043c\u043f\u0435\u043d\u0441\u0430\u0446\u0438\u044f \u0438 \u043f\u0435\u043d\u0441\u0438\u043e\u043d\u043d\u044b\u0439 \u0441\u0442\u0430\u0436 \u0443\u0445\u0430\u0436\u0438\u0432\u0430\u044e\u0449\u0435\u043c\u0443 \u043d\u0435 \u043f\u0440\u0435\u0434\u0443\u0441\u043c\u043e\u0442\u0440\u0435\u043d\u044b (\u0432 \u043e\u0442\u043b\u0438\u0447\u0438\u0435 \u043e\u0442 I \u0433\u0440\u0443\u043f\u043f\u044b). \u0421\u0430\u043c \u0438\u043d\u0432\u0430\u043b\u0438\u0434 \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u0442 \u043f\u0435\u043d\u0441\u0438\u044e \u043f\u043e \u0438\u043d\u0432\u0430\u043b\u0438\u0434\u043d\u043e\u0441\u0442\u0438 \u0438 \u0415\u0414\u0412.",0,"\u0432\u044b\u043f\u043b\u0430\u0442\u044b \u0443\u0445\u0430\u0436\u0438\u0432\u0430\u044e\u0449\u0435\u043c\u0443 \u043d\u0435\u0442",o)},
jA(a,b,c){var s,r,q,p=a.w
if(!p.i(0,"own_home"))return
s=p.i(0,"i_pen")||a.c==="pensioner"
r=p.i(0,"i_dis1")||p.i(0,"i_dis2")
q=a.f>=3
if(!(s||r||q))return
c.h(0,"t","\ud83c\udfe0",B.d,"\u041b\u044c\u0433\u043e\u0442\u0430 \u043f\u043e \u043d\u0430\u043b\u043e\u0433\u0443 \u043d\u0430 \u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u043e","\u041e\u0441\u0432\u043e\u0431\u043e\u0436\u0434\u0435\u043d\u0438\u0435 \u043e\u0442 \u043d\u0430\u043b\u043e\u0433\u0430 \u043d\u0430 \u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u043e \u043d\u0430 \u043e\u0434\u0438\u043d \u043e\u0431\u044a\u0435\u043a\u0442 \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u0432\u0438\u0434\u0430 (\u043a\u0432\u0430\u0440\u0442\u0438\u0440\u0430, \u0434\u043e\u043c, \u0433\u0430\u0440\u0430\u0436) \u2014 \u0434\u043b\u044f \u043f\u0435\u043d\u0441\u0438\u043e\u043d\u0435\u0440\u043e\u0432 \u0438 \u0438\u043d\u0432\u0430\u043b\u0438\u0434\u043e\u0432 I\u2013II \u0433\u0440\u0443\u043f\u043f. \u041c\u043d\u043e\u0433\u043e\u0434\u0435\u0442\u043d\u044b\u043c \u0441\u0435\u043c\u044c\u044f\u043c \u2014 \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u0432\u044b\u0447\u0435\u0442 (\u0441\u0442. 407 \u041d\u041a \u0420\u0424).",0,"\u043e\u0441\u0432\u043e\u0431\u043e\u0436\u0434\u0435\u043d\u0438\u0435 \u043e\u0442 \u043d\u0430\u043b\u043e\u0433\u0430","benefit")},
iJ(a,b,c){if(!a.w.i(0,"communal"))return
c.h(0,"h","\ud83c\udfd8\ufe0f",B.a,"\u0420\u0430\u0441\u0441\u0435\u043b\u0435\u043d\u0438\u0435 \u043a\u043e\u043c\u043c\u0443\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u043a\u0432\u0430\u0440\u0442\u0438\u0440","\u041f\u0440\u043e\u0436\u0438\u0432\u0430\u043d\u0438\u0435 \u0432 \u043a\u043e\u043c\u043c\u0443\u043d\u0430\u043b\u044c\u043d\u043e\u0439 \u043a\u0432\u0430\u0440\u0442\u0438\u0440\u0435 \u2014 \u043e\u0441\u043d\u043e\u0432\u0430\u043d\u0438\u0435 \u0434\u043b\u044f \u043f\u043e\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043d\u0430 \u0443\u0447\u0451\u0442 \u043f\u043e \u0443\u043b\u0443\u0447\u0448\u0435\u043d\u0438\u044e \u0436\u0438\u043b\u0438\u0449\u043d\u044b\u0445 \u0443\u0441\u043b\u043e\u0432\u0438\u0439. \u0412\u043e \u043c\u043d\u043e\u0433\u0438\u0445 \u0440\u0435\u0433\u0438\u043e\u043d\u0430\u0445 \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u044e\u0442 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u044b \u0440\u0430\u0441\u0441\u0435\u043b\u0435\u043d\u0438\u044f \u0438 \u0441\u0443\u0431\u0441\u0438\u0434\u0438\u0438 \u2014 \u0443\u0442\u043e\u0447\u043d\u044f\u0439\u0442\u0435 \u0432 \u041c\u0424\u0426 \u0438\u043b\u0438 \u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438.",0,"\u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u044b \u0440\u0435\u0433\u0438\u043e\u043d\u0430","benefit")},
jN(a,b,c){var s
if(a.w.i(0,"i_sc")){s=b.Q
s===$&&A.o()
s=!s}else s=!0
if(s)return
c.h(0,"s","\ud83d\udcdd",B.e,"\u0421\u043e\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0439 \u043a\u043e\u043d\u0442\u0440\u0430\u043a\u0442: \u041e\u0442\u043a\u0440\u044b\u0442\u0438\u0435 \u0441\u0432\u043e\u0435\u0433\u043e \u0434\u0435\u043b\u0430 / \u0418\u041f","\u0415\u0434\u0438\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u0430\u044f \u0431\u0435\u0437\u0432\u043e\u0437\u043c\u0435\u0437\u0434\u043d\u0430\u044f \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430 \u043c\u0430\u043b\u043e\u0438\u043c\u0443\u0449\u0438\u043c \u0441\u0435\u043c\u044c\u044f\u043c.",35e4,"\u0434\u043e "+A.c(35e4,!1),"once")},
js(a,b,c){var s=a.w
if(s.i(0,"i_mil")){c.h(0,"m","\ud83c\udf96\ufe0f",B.a,"\u0412\u044b\u043f\u043b\u0430\u0442\u0430 \u043f\u0440\u0438 \u0437\u0430\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0438 \u043a\u043e\u043d\u0442\u0440\u0430\u043a\u0442\u0430","\u0424\u0435\u0434\u0435\u0440\u0430\u043b\u044c\u043d\u0430\u044f + \u0440\u0435\u0433\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u0430\u044f.",4e5,"\u043e\u0442 "+A.c(4e5,!1),"once")
c.h(0,"m","\ud83d\udcb0",B.a,"\u0411\u043e\u0435\u0432\u044b\u0435 \u043d\u0430\u0434\u0431\u0430\u0432\u043a\u0438","\u0415\u0436\u0435\u043c\u0435\u0441\u044f\u0447\u043d\u044b\u0435 \u0434\u043e\u043f\u043b\u0430\u0442\u044b.",5e4,"\u043e\u0442 "+A.c(5e4,!1)+"/\u043c\u0435\u0441","monthly")}if(s.i(0,"i_vet"))c.h(0,"m","\ud83c\udfc5",B.a,"\u0415\u0414\u0412 \u0432\u0435\u0442\u0435\u0440\u0430\u043d\u0430 \u0431\u043e\u0435\u0432\u044b\u0445 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439","\u0415\u0436\u0435\u043c\u0435\u0441\u044f\u0447\u043d\u0430\u044f \u0434\u0435\u043d\u0435\u0436\u043d\u0430\u044f \u0432\u044b\u043f\u043b\u0430\u0442\u0430 \u0443\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u0443 \u0411\u0414. \u0421 01.02.2026.",4838.63,A.c(4838.63,!0)+"/\u043c\u0435\u0441","monthly")},
kj(a,b,c){if(!a.w.i(0,"vet_fam"))return
c.h(0,"m","\ud83c\udfc5",B.a,"\u0415\u0414\u0412 \u0441\u0435\u043c\u044c\u0435 \u0432\u0435\u0442\u0435\u0440\u0430\u043d\u0430 \u0411\u0414","\u0415\u0436\u0435\u043c\u0435\u0441\u044f\u0447\u043d\u0430\u044f \u0432\u044b\u043f\u043b\u0430\u0442\u0430 \u0441\u0435\u043c\u044c\u0435 \u0443\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u0430/\u043f\u043e\u0433\u0438\u0431\u0448\u0435\u0433\u043e. \u0421 01.02.2026.",4838.63,A.c(4838.63,!0)+"/\u043c\u0435\u0441","monthly")
c.h(0,"m","\ud83d\udee1\ufe0f",B.a,"\u0421\u0442\u0440\u0430\u0445\u043e\u0432\u0430\u044f \u0432\u044b\u043f\u043b\u0430\u0442\u0430 \u0441\u0435\u043c\u044c\u0435 \u043f\u043e\u0433\u0438\u0431\u0448\u0435\u0433\u043e","\u041f\u0440\u0438 \u0433\u0438\u0431\u0435\u043b\u0438 \u0432\u043e\u0435\u043d\u043d\u043e\u0441\u043b\u0443\u0436\u0430\u0449\u0435\u0433\u043e: \u0435\u0434\u0438\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u0430\u044f \u0441\u0442\u0440\u0430\u0445\u043e\u0432\u0430\u044f \u0432\u044b\u043f\u043b\u0430\u0442\u0430.",3e6,"\u043e\u0442 "+A.c(3e6,!1)+" (\u0435\u0434\u0438\u043d\u043e\u0432\u0440.)","once")
c.h(0,"m","\ud83d\udcb0",B.a,"\u0415\u0436\u0435\u043c\u0435\u0441\u044f\u0447\u043d\u0430\u044f \u0432\u044b\u043f\u043b\u0430\u0442\u0430 \u0441\u0435\u043c\u044c\u0435 \u043f\u043e\u0433\u0438\u0431\u0448\u0435\u0433\u043e","\u0427\u043b\u0435\u043d\u0430\u043c \u0441\u0435\u043c\u044c\u0438 \u043f\u043e\u0433\u0438\u0431\u0448\u0435\u0433\u043e \u0432\u043e\u0435\u043d\u043d\u043e\u0441\u043b\u0443\u0436\u0430\u0449\u0435\u0433\u043e.",27566,A.c(27566,!1)+"/\u043c\u0435\u0441","monthly")},
jd(a,b,c){var s="a",r="monthly",q="benefit",p=a.w
if(p.i(0,"i_vet_trud")){c.h(0,s,"\ud83c\udfc6",B.a,"\u0412\u0435\u0442\u0435\u0440\u0430\u043d \u0442\u0440\u0443\u0434\u0430 \u2014 \u0440\u0435\u0433\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u043b\u044c\u0433\u043e\u0442\u044b","\u0414\u043e\u043f\u043b\u0430\u0442\u0430 \u043a \u043f\u0435\u043d\u0441\u0438\u0438, \u0441\u043a\u0438\u0434\u043a\u0438 \u043d\u0430 \u0416\u041a\u0425 (50%), \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442 \u0438 \u043b\u0435\u043a\u0430\u0440\u0441\u0442\u0432\u0430. \u0420\u0430\u0437\u043c\u0435\u0440 \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043e\u0442 \u0440\u0435\u0433\u0438\u043e\u043d\u0430: \u0432 \u0441\u0440\u0435\u0434\u043d\u0435\u043c 1 000\u20135 000 \u20bd/\u043c\u0435\u0441.",2000,"~1 000\u20135 000 \u20bd/\u043c\u0435\u0441",r)
c.h(0,s,"\ud83d\ude8c",B.a,"\u0412\u0435\u0442\u0435\u0440\u0430\u043d \u0442\u0440\u0443\u0434\u0430 \u2014 \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u044b\u0439 \u043f\u0440\u043e\u0435\u0437\u0434","\u041f\u0440\u0430\u0432\u043e \u043d\u0430 \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u044b\u0439 \u043f\u0440\u043e\u0435\u0437\u0434 \u0432 \u0433\u043e\u0440\u043e\u0434\u0441\u043a\u043e\u043c \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u0435 (\u0440\u0435\u0433\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0439 \u0437\u0430\u043a\u043e\u043d).",0,"\u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u044b\u0439 \u043f\u0440\u043e\u0435\u0437\u0434",q)}if(p.i(0,"i_honored")){c.h(0,s,"\ud83c\udf96\ufe0f",B.j,"\u041d\u0430\u0434\u0431\u0430\u0432\u043a\u0430 \xab\u0417\u0430\u0441\u043b\u0443\u0436\u0435\u043d\u043d\u044b\u0439\xbb","\u0420\u0435\u0433\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043e\u043f\u043b\u0430\u0442\u0430 \u043a \u043f\u0435\u043d\u0441\u0438\u0438 \u0437\u0430 \u043f\u043e\u0447\u0451\u0442\u043d\u043e\u0435 \u0437\u0432\u0430\u043d\u0438\u0435 \u0420\u0424. \u0420\u0430\u0437\u043c\u0435\u0440 \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043e\u0442 \u0440\u0435\u0433\u0438\u043e\u043d\u0430: \u043e\u0431\u044b\u0447\u043d\u043e 1 000\u20133 000 \u20bd/\u043c\u0435\u0441.",1500,"~1 000\u20133 000 \u20bd/\u043c\u0435\u0441",r)
c.h(0,s,"\ud83c\udf97\ufe0f",B.j,"\u0421\u0442\u0438\u043f\u0435\u043d\u0434\u0438\u044f \u041f\u0440\u0435\u0437\u0438\u0434\u0435\u043d\u0442\u0430 \u0420\u0424","\u0414\u043b\u044f \u0417\u0430\u0441\u043b\u0443\u0436\u0435\u043d\u043d\u044b\u0445 \u043c\u0430\u0441\u0442\u0435\u0440\u043e\u0432 \u0441\u043f\u043e\u0440\u0442\u0430 \u0438 \u0434\u0435\u044f\u0442\u0435\u043b\u0435\u0439 \u043a\u0443\u043b\u044c\u0442\u0443\u0440\u044b \u2014 \u0435\u0434\u0438\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u0438 \u0435\u0436\u0435\u043c\u0435\u0441\u044f\u0447\u043d\u044b\u0435 \u0432\u044b\u043f\u043b\u0430\u0442\u044b \u043f\u043e \u0423\u043a\u0430\u0437\u0443 \u041f\u0440\u0435\u0437\u0438\u0434\u0435\u043d\u0442\u0430.",0,"\u043f\u043e \u0423\u043a\u0430\u0437\u0443 \u041f\u0440\u0435\u0437\u0438\u0434\u0435\u043d\u0442\u0430",q)}if(p.i(0,"i_people_art"))c.h(0,s,"\ud83c\udf1f",B.j,"\u041d\u0430\u0434\u0431\u0430\u0432\u043a\u0430 \xab\u041d\u0430\u0440\u043e\u0434\u043d\u044b\u0439 \u0430\u0440\u0442\u0438\u0441\u0442 / \u0434\u0435\u044f\u0442\u0435\u043b\u044c\xbb","\u0424\u0435\u0434\u0435\u0440\u0430\u043b\u044c\u043d\u0430\u044f \u043d\u0430\u0434\u0431\u0430\u0432\u043a\u0430 \u043a \u043f\u0435\u043d\u0441\u0438\u0438: 500% \u041f\u041c \u043f\u0435\u043d\u0441\u0438\u043e\u043d\u0435\u0440\u0430 (\u0423\u043a\u0430\u0437 \u041f\u0440\u0435\u0437\u0438\u0434\u0435\u043d\u0442\u0430 \u0420\u0424 \u2116 1584). \u041f\u043b\u044e\u0441 \u0440\u0435\u0433\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u0434\u043e\u043f\u043b\u0430\u0442\u044b.",47923.450000000004,"~"+A.c(47923.450000000004,!1)+"/\u043c\u0435\u0441",r)
if(p.i(0,"i_hero_labor")){c.h(0,s,"\u2b50",B.a,"\u0413\u0435\u0440\u043e\u0439 \u0422\u0440\u0443\u0434\u0430 \u0420\u0424 \u2014 \u0415\u0414\u0412","\u0415\u0436\u0435\u043c\u0435\u0441\u044f\u0447\u043d\u0430\u044f \u0434\u0435\u043d\u0435\u0436\u043d\u0430\u044f \u0432\u044b\u043f\u043b\u0430\u0442\u0430 \u0413\u0435\u0440\u043e\u044f\u043c \u0422\u0440\u0443\u0434\u0430 \u0420\u0424. \u0418\u043d\u0434\u0435\u043a\u0441\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u0435\u0436\u0435\u0433\u043e\u0434\u043d\u043e.",76458.4,A.c(76458.4,!0)+"/\u043c\u0435\u0441",r)
c.h(0,s,"\ud83c\udfe0",B.a,"\u0413\u0435\u0440\u043e\u0439 \u0422\u0440\u0443\u0434\u0430 \u0420\u0424 \u2014 \u043b\u044c\u0433\u043e\u0442\u044b","\u0411\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u044b\u0439 \u043f\u0440\u043e\u0435\u0437\u0434, 50% \u0441\u043a\u0438\u0434\u043a\u0430 \u043d\u0430 \u0416\u041a\u0425, \u043d\u0430\u043b\u043e\u0433\u043e\u0432\u044b\u0435 \u043b\u044c\u0433\u043e\u0442\u044b, \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u043e\u0435 \u043c\u0435\u0434\u043e\u0431\u0441\u043b\u0443\u0436\u0438\u0432\u0430\u043d\u0438\u0435.",0,"\u043f\u0430\u043a\u0435\u0442 \u043b\u044c\u0433\u043e\u0442",q)}},
jM(a,b,c){var s,r,q,p,o,n=a.w
if(n.i(0,"i_sick")){s=a.c
r=!0
if(s!=="employed")if(s!=="matleave")n=s==="self"&&n.i(0,"self_sick_insured")
else n=r
else n=r
n=!n}else n=!0
if(n)return
n=a.c==="self"
if(n){s=b.e
q=s>0?s:35e3}else{s=b.e
q=s>0?s:Math.max(27093,b.c/b.d)}s=b.f
if(s>=8)p=1
else p=s>=5?0.8:0.6
o=B.b.p(Math.min(q*24/730,6827.397260273972)*p*21)
n=n?"\u0421\u0430\u043c\u043e\u0437\u0430\u043d\u044f\u0442\u044b\u0439 \u0441 \u0434\u043e\u0431\u0440\u043e\u0432\u043e\u043b\u044c\u043d\u044b\u043c \u0441\u0442\u0440\u0430\u0445\u043e\u0432\u0430\u043d\u0438\u0435\u043c: \u043e\u0440\u0438\u0435\u043d\u0442\u0438\u0440 \u0440\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u043d \u043e\u0442 \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u043e\u0439 \u0441\u0442\u0440\u0430\u0445\u043e\u0432\u043e\u0439 \u0441\u0443\u043c\u043c\u044b (\u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e 35 000 \u20bd, \u0435\u0441\u043b\u0438 \u043d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d\u0430 \u0441\u0432\u043e\u044f \u0431\u0430\u0437\u0430).":""+B.b.O(p*100)+"% \u0441\u0440. \u0437\u0430\u0440\u0430\u0431\u043e\u0442\u043a\u0430 (\u0441\u0442\u0430\u0436 "+s+" \u043b\u0435\u0442). \u041c\u0430\u043a\u0441. \u0434\u043d\u0435\u0432\u043d\u043e\u0435: "+A.c(B.b.p(6827.397260273972),!1)+". \u041e\u0440\u0438\u0435\u043d\u0442\u0438\u0440 \u0437\u0430 \u043c\u0435\u0441\u044f\u0446: ~"+A.c(o,!1)+"."
c.h(0,"w","\ud83c\udfe5",B.e,"\u041f\u043e\u0441\u043e\u0431\u0438\u0435 \u043f\u043e \u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0439 \u043d\u0435\u0442\u0440\u0443\u0434\u043e\u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u0438",n,o,"~"+A.c(o,!1)+"/\u043c\u0435\u0441","monthly")},
iK(a,b,c){var s=a.w
if(s.i(0,"mil_conscript_spouse")&&a.b==="female"&&s.i(0,"pregnant")&&a.e==="married")c.h(0,"m","\ud83e\udd30",B.a,"\u041f\u043e\u0441\u043e\u0431\u0438\u0435 \u0431\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0439 \u0436\u0435\u043d\u0435 \u0432\u043e\u0435\u043d\u043d\u043e\u0441\u043b\u0443\u0436\u0430\u0449\u0435\u0433\u043e \u043f\u043e \u043f\u0440\u0438\u0437\u044b\u0432\u0443","\u0415\u0434\u0438\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u0430\u044f \u0444\u0435\u0434\u0435\u0440\u0430\u043b\u044c\u043d\u0430\u044f \u0432\u044b\u043f\u043b\u0430\u0442\u0430 \u0441\u0443\u043f\u0440\u0443\u0433\u0435 \u0432\u043e\u0435\u043d\u043d\u043e\u0441\u043b\u0443\u0436\u0430\u0449\u0435\u0433\u043e \u043f\u043e \u043f\u0440\u0438\u0437\u044b\u0432\u0443 \u043f\u0440\u0438 \u0441\u0440\u043e\u043a\u0435 \u0431\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u043d\u0435 \u043c\u0435\u043d\u0435\u0435 180 \u0434\u043d\u0435\u0439.",45054.24,A.c(45054.24,!0),"once")
if(s.i(0,"mil_conscript_child")&&a.f>0&&b.r<=3)c.h(0,"m","\ud83e\ude96",B.a,"\u041f\u043e\u0441\u043e\u0431\u0438\u0435 \u043d\u0430 \u0440\u0435\u0431\u0451\u043d\u043a\u0430 \u0432\u043e\u0435\u043d\u043d\u043e\u0441\u043b\u0443\u0436\u0430\u0449\u0435\u0433\u043e \u043f\u043e \u043f\u0440\u0438\u0437\u044b\u0432\u0443","\u0415\u0436\u0435\u043c\u0435\u0441\u044f\u0447\u043d\u0430\u044f \u0444\u0435\u0434\u0435\u0440\u0430\u043b\u044c\u043d\u0430\u044f \u0432\u044b\u043f\u043b\u0430\u0442\u0430 \u043d\u0430 \u0440\u0435\u0431\u0451\u043d\u043a\u0430 \u0432\u043e\u0435\u043d\u043d\u043e\u0441\u043b\u0443\u0436\u0430\u0449\u0435\u0433\u043e \u043f\u043e \u043f\u0440\u0438\u0437\u044b\u0432\u0443 \u0434\u043e \u0434\u043e\u0441\u0442\u0438\u0436\u0435\u043d\u0438\u044f \u0440\u0435\u0431\u0451\u043d\u043a\u043e\u043c 3 \u043b\u0435\u0442.",19308.96,A.c(19308.96,!0)+"/\u043c\u0435\u0441","monthly")},
iS(a,b,c){if(!a.w.i(0,"i_donor"))return
c.h(0,"s","\ud83e\ude78",B.a,"\u0415\u0414\u0412 \u041f\u043e\u0447\u0451\u0442\u043d\u043e\u0433\u043e \u0434\u043e\u043d\u043e\u0440\u0430 \u0420\u043e\u0441\u0441\u0438\u0438","\u0415\u0436\u0435\u0433\u043e\u0434\u043d\u0430\u044f \u0434\u0435\u043d\u0435\u0436\u043d\u0430\u044f \u0432\u044b\u043f\u043b\u0430\u0442\u0430 (\u0435\u0434\u0438\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e \u0440\u0430\u0437 \u0432 \u0433\u043e\u0434). \u0412 2026 \u0433\u043e\u0434\u0443 \u0435\u0451 \u043d\u0430\u0437\u043d\u0430\u0447\u0430\u0435\u0442 \u0440\u0435\u0433\u0438\u043e\u043d \u043f\u043e \u0437\u0430\u044f\u0432\u043b\u0435\u043d\u0438\u044e; \u0441 2027 \u0433\u043e\u0434\u0430 \u2014 \u0421\u043e\u0446\u0444\u043e\u043d\u0434, \u0431\u0435\u0437 \u0437\u0430\u044f\u0432\u043b\u0435\u043d\u0438\u044f (\u0424\u0417 \u2116275-\u0424\u0417 \u043e\u0442 26.07.2026).",19497.68,A.c(19497.68,!0)+"/\u0433\u043e\u0434","once")
c.h(0,"s","\ud83c\udfe5",B.a,"\u041b\u044c\u0433\u043e\u0442\u044b \u041f\u043e\u0447\u0451\u0442\u043d\u043e\u0433\u043e \u0434\u043e\u043d\u043e\u0440\u0430","\u041e\u0442\u043f\u0443\u0441\u043a \u0432 \u0443\u0434\u043e\u0431\u043d\u043e\u0435 \u0432\u0440\u0435\u043c\u044f, \u043b\u044c\u0433\u043e\u0442\u043d\u044b\u0435 \u043f\u0443\u0442\u0451\u0432\u043a\u0438, \u0441\u043a\u0438\u0434\u043a\u0438 \u043d\u0430 \u043b\u0435\u0447\u0435\u043d\u0438\u0435.",0,"\u043f\u0430\u043a\u0435\u0442 \u043b\u044c\u0433\u043e\u0442","benefit")},
iI(a,b,c){var s,r,q,p,o,n,m,l=a.f
if(l>0){s=b.dx
s===$&&A.o()
if(s){s=b.z
s===$&&A.o()}else s=!1
s=!s||b.c/b.d>37500}else s=!0
if(s)return
s=a.w
r=s.i(0,"solo_parent")
q=l>=2?4200:1400
if(l>=3)q+=(l-2)*6000
p=s.i(0,"disabled_child")
if(p)q+=12e3
o=r?q*2:q
n=B.b.p(o*0.13)
l=r?"\u0414\u0432\u043e\u0439\u043d\u043e\u0439 \u0432\u044b\u0447\u0435\u0442 \u041d\u0414\u0424\u041b (\u043e\u0434\u0438\u043d\u043e\u043a\u0438\u0439 \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u044c)":"\u0421\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u044b\u0439 \u0432\u044b\u0447\u0435\u0442 \u041d\u0414\u0424\u041b \u043d\u0430 \u0434\u0435\u0442\u0435\u0439"
s=A.c(o,!1)
m=p?", \u0438\u043d\u0432\u0430\u043b\u0438\u0434 \u2014 +12 000":""
c.h(0,"t","\ud83e\uddee",B.d,l,"\u0411\u0430\u0437\u0430: "+s+"/\u043c\u0435\u0441 \xd7 13% (1-\u0439 \u2014 1 400, 2-\u0439 \u2014 2 800, 3-\u0439+ \u2014 6 000"+m+" \u20bd). \u0414\u043e \u0434\u043e\u0445\u043e\u0434\u0430 450 000 \u20bd/\u0433\u043e\u0434.",n,"~"+A.c(n,!1)+"/\u043c\u0435\u0441","monthly")},
jz(a,b,c){var s=a.w
if(s.i(0,"bought_recent")||s.i(0,"has_mortgage")){s=b.dx
s===$&&A.o()
if(s){s=b.z
s===$&&A.o()}else s=!1
s=!s}else s=!0
if(s)return
s=b.x
s===$&&A.o()
if(!(s>0))s=B.b.p(b.c*12*0.13)
c.h(0,"t","\ud83c\udfd8\ufe0f",B.d,"\u0418\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0439 \u0432\u044b\u0447\u0435\u0442","\u0414\u043e 260 000 \u20bd \u0437\u0430 \u043f\u043e\u043a\u0443\u043f\u043a\u0443 + \u0434\u043e 390 000 \u20bd \u043f\u043e \u0438\u043f\u043e\u0442\u0435\u0447\u043d\u044b\u043c %.",Math.min(s,26e4),"\u0434\u043e "+A.c(26e4,!1)+" + "+A.c(39e4,!1),"once")},
jr(a,b,c){var s
if(a.w.i(0,"paid_med")){s=b.dx
s===$&&A.o()
if(s){s=b.z
s===$&&A.o()}else s=!1
s=!s}else s=!0
if(s)return
c.h(0,"t","\ud83c\udfe5",B.d,"\u0412\u044b\u0447\u0435\u0442: \u043b\u0435\u0447\u0435\u043d\u0438\u0435","13% \u043e\u0442 \u0440\u0430\u0441\u0445\u043e\u0434\u043e\u0432 (\u0434\u043e 150 000 \u20bd/\u0433\u043e\u0434; \u0434\u043e\u0440\u043e\u0433\u043e\u0441\u0442\u043e\u044f\u0449\u0435\u0435 \u2014 \u0431\u0435\u0437 \u043b\u0438\u043c\u0438\u0442\u0430).",19500,"\u0434\u043e "+A.c(19500,!1)+"/\u0433\u043e\u0434","once")},
iT(a,b,c){var s
if(a.w.i(0,"paid_edu")){s=b.dx
s===$&&A.o()
if(s){s=b.z
s===$&&A.o()}else s=!1
s=!s}else s=!0
if(s)return
c.h(0,"t","\ud83c\udf93",B.d,"\u0412\u044b\u0447\u0435\u0442: \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435","13% \u043e\u0442 \u0440\u0430\u0441\u0445\u043e\u0434\u043e\u0432: \u0437\u0430 \u0441\u0435\u0431\u044f \u0434\u043e 150 000, \u0437\u0430 \u0434\u0435\u0442\u0435\u0439 \u0434\u043e 110 000.",14300,"\u0434\u043e "+A.c(14300,!1)+"/\u0433\u043e\u0434","once")},
j7(a,b,c){var s
if(a.w.i(0,"paid_fit")){s=b.dx
s===$&&A.o()
if(s){s=b.z
s===$&&A.o()}else s=!1
s=!s}else s=!0
if(s)return
c.h(0,"t","\ud83c\udfcb\ufe0f",B.d,"\u0412\u044b\u0447\u0435\u0442: \u0444\u0438\u0442\u043d\u0435\u0441","13% \u043e\u0442 \u0440\u0430\u0441\u0445\u043e\u0434\u043e\u0432 \u0432 \u0441\u043e\u0441\u0442\u0430\u0432\u0435 \u0435\u0434\u0438\u043d\u043e\u0433\u043e \u0441\u043e\u0446\u0432\u044b\u0447\u0435\u0442\u0430 (\u043e\u0431\u0449\u0438\u0439 \u043b\u0438\u043c\u0438\u0442 150 000 \u20bd/\u0433\u043e\u0434).",19500,"\u0434\u043e "+A.c(19500,!1)+"/\u0433\u043e\u0434","once")},
jf(a,b,c){var s
if(a.w.i(0,"has_iis")){s=b.dx
s===$&&A.o()
if(s){s=b.z
s===$&&A.o()}else s=!1
s=!s}else s=!0
if(s)return
c.h(0,"t","\ud83d\udcc8",B.d,"\u0412\u044b\u0447\u0435\u0442 \u0418\u0418\u0421 \u0442\u0438\u043f \u0410","13% \u043e\u0442 \u043f\u043e\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0434\u043e 400 000 \u20bd.",52e3,"\u0434\u043e "+A.c(52e3,!1)+"/\u0433\u043e\u0434","once")},
jm(a,b,c){var s
if(a.w.i(0,"life_ins")){s=b.dx
s===$&&A.o()
if(s){s=b.z
s===$&&A.o()}else s=!1
s=!s}else s=!0
if(s)return
c.h(0,"t","\ud83d\udee1\ufe0f",B.d,"\u0412\u044b\u0447\u0435\u0442: \u0441\u0442\u0440\u0430\u0445\u043e\u0432\u0430\u043d\u0438\u0435 \u0436\u0438\u0437\u043d\u0438","13% \u043e\u0442 \u0432\u0437\u043d\u043e\u0441\u043e\u0432 \u043f\u043e \u0434\u043e\u0433\u043e\u0432\u043e\u0440\u0430\u043c \u0441\u0442\u0440\u0430\u0445\u043e\u0432\u0430\u043d\u0438\u044f \u0436\u0438\u0437\u043d\u0438 (3+ \u043b\u0435\u0442) \u0432 \u0441\u043e\u0441\u0442\u0430\u0432\u0435 \u0435\u0434\u0438\u043d\u043e\u0433\u043e \u0441\u043e\u0446\u0432\u044b\u0447\u0435\u0442\u0430 (\u043b\u0438\u043c\u0438\u0442 150 000 \u20bd/\u0433\u043e\u0434).",19500,"\u0434\u043e "+A.c(19500,!1)+"/\u0433\u043e\u0434","once")},
iG(a,b,c){if(!a.w.i(0,"charity"))return
c.h(0,"t","\ud83d\udc9d",B.d,"\u0412\u044b\u0447\u0435\u0442: \u043f\u043e\u0436\u0435\u0440\u0442\u0432\u043e\u0432\u0430\u043d\u0438\u044f","13% \u043e\u0442 \u0441\u0443\u043c\u043c\u044b \u043f\u043e\u0436\u0435\u0440\u0442\u0432\u043e\u0432\u0430\u043d\u0438\u0439, \u043d\u043e \u043d\u0435 \u0431\u043e\u043b\u0435\u0435 25% \u043e\u0442 \u0433\u043e\u0434\u043e\u0432\u043e\u0433\u043e \u0434\u043e\u0445\u043e\u0434\u0430.",0,"\u0434\u043e 25% \u043e\u0442 \u0434\u043e\u0445\u043e\u0434\u0430","benefit")},
fK(a,b){var s,r
if(a.a.length===0)return null
s=A.fI(a)
r=A.fJ(a,b)
return new A.cz(r,s==null?null:$.fr().A(0,s))},
fI(a){var s="methodology_family_support",r="indexation_2026",q="methodology_social_support"
switch(a.a){case"pregnancy_support":return"bir_2026"
case"mat_capital":case"adoption":if(B.h.i(a.b,"\u041c\u0430\u0442"))return"mat_capital_2026"
return s
case"care_leave":return"childcare_1_5_2026"
case"unified_children":return"unified_benefit_2026"
case"newborn":case"multi_child_mortgage":case"disabled_child":case"young_family":return s
case"child_tax_deduction":case"property_deduction":case"medical_deduction":case"education_deduction":case"fitness_deduction":case"iis_deduction":case"life_insurance_deduction":case"charity_deduction":return"methodology_tax_support"
case"student":case"unemployment":case"layoff":case"sick_leave":return"methodology_employment_support"
case"housing_subsidy":return"methodology_housing_support"
case"pension":return B.h.i(a.b,"\u0418\u043d\u0434\u0435\u043a\u0441\u0430\u0446\u0438\u044f")?r:"methodology_pension_support"
case"disability":case"social_contract":case"chernobyl":case"rehabilitated":case"property_tax_relief":case"communal_housing":return q
case"donor":return B.h.i(a.b,"\u041f\u043e\u0447\u0451\u0442\u043d\u043e\u0433\u043e \u0434\u043e\u043d\u043e\u0440\u0430")?r:q
case"military":case"veteran_family":return"methodology_military_support"
case"honors":return"methodology_honor_support"
case"north":case"moscow":case"dfo":case"regional_mat_cap":case"regional_extra_info":return"methodology_regional_support"}return null},
fJ(a,b){switch(a.a){case"pregnancy_support":return"\u041f\u043e\u0441\u043e\u0431\u0438\u0435 \u043f\u043e\u043a\u0430\u0437\u0430\u043d\u043e, \u043f\u043e\u0442\u043e\u043c\u0443 \u0447\u0442\u043e \u0432 \u0430\u043d\u043a\u0435\u0442\u0435 \u043e\u0442\u043c\u0435\u0447\u0435\u043d\u0430 \u0431\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0441\u0442\u044c \u0438 \u0432\u044b\u0431\u0440\u0430\u043d \u0436\u0435\u043d\u0441\u043a\u0438\u0439 \u043f\u043e\u043b."
case"newborn":return"\u0412\u044b\u043f\u043b\u0430\u0442\u0430 \u043f\u043e\u043a\u0430\u0437\u0430\u043d\u0430, \u043f\u043e\u0442\u043e\u043c\u0443 \u0447\u0442\u043e \u0432 \u0430\u043d\u043a\u0435\u0442\u0435 \u043e\u0442\u043c\u0435\u0447\u0435\u043d\u043e \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u0435 \u0440\u0435\u0431\u0451\u043d\u043a\u0430 \u0432 2025\u20132026 \u0433\u043e\u0434\u0443."
case"mat_capital":return"\u041f\u0440\u0430\u0432\u043e \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043e \u043f\u043e \u0447\u0438\u0441\u043b\u0443 \u0434\u0435\u0442\u0435\u0439, \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u0443 \u043d\u043e\u0432\u043e\u0433\u043e \u0440\u0435\u0431\u0451\u043d\u043a\u0430 \u0438 \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u044e \u043e\u0442\u043c\u0435\u0442\u043a\u0438, \u0447\u0442\u043e \u043c\u0430\u0442\u043a\u0430\u043f\u0438\u0442\u0430\u043b \u0443\u0436\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d."
case"care_leave":return"\u041f\u043e\u0441\u043e\u0431\u0438\u0435 \u0440\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u043d\u043e, \u043f\u043e\u0442\u043e\u043c\u0443 \u0447\u0442\u043e \u0432 \u0441\u0435\u043c\u044c\u0435 \u0435\u0441\u0442\u044c \u0440\u0435\u0431\u0451\u043d\u043e\u043a \u043c\u043b\u0430\u0434\u0448\u0435 1,5 \u043b\u0435\u0442."
case"unified_children":return"\u041f\u043e\u0441\u043e\u0431\u0438\u0435 \u043f\u043e\u043a\u0430\u0437\u0430\u043d\u043e, \u043f\u043e\u0442\u043e\u043c\u0443 \u0447\u0442\u043e \u0435\u0441\u0442\u044c \u0434\u0435\u0442\u0438 \u0438 \u043f\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u0434\u043e\u0445\u043e\u0434 \u043d\u0430 \u0447\u0435\u043b\u043e\u0432\u0435\u043a\u0430 \u043d\u0438\u0436\u0435 \u043f\u0440\u043e\u0436\u0438\u0442\u043e\u0447\u043d\u043e\u0433\u043e \u043c\u0438\u043d\u0438\u043c\u0443\u043c\u0430."
case"multi_child_mortgage":return"\u041b\u044c\u0433\u043e\u0442\u0430 \u043f\u043e\u043a\u0430\u0437\u0430\u043d\u0430, \u043f\u043e\u0442\u043e\u043c\u0443 \u0447\u0442\u043e \u0432 \u0430\u043d\u043a\u0435\u0442\u0435 \u0435\u0441\u0442\u044c 3+ \u0434\u0435\u0442\u0435\u0439 \u0438 \u043e\u0442\u043c\u0435\u0447\u0435\u043d\u0430 \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u044e\u0449\u0430\u044f \u0438\u043f\u043e\u0442\u0435\u043a\u0430."
case"disabled_child":return"\u041c\u0435\u0440\u0430 \u043f\u043e\u043a\u0430\u0437\u0430\u043d\u0430, \u043f\u043e\u0442\u043e\u043c\u0443 \u0447\u0442\u043e \u043e\u0442\u043c\u0435\u0447\u0435\u043d \u0441\u0442\u0430\u0442\u0443\u0441 \u0440\u0435\u0431\u0451\u043d\u043a\u0430-\u0438\u043d\u0432\u0430\u043b\u0438\u0434\u0430."
case"young_family":return"\u041f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0430 \u043f\u043e\u043a\u0430\u0437\u0430\u043d\u0430, \u043f\u043e\u0442\u043e\u043c\u0443 \u0447\u0442\u043e \u0441\u043e\u0431\u043b\u044e\u0434\u0435\u043d\u044b \u0431\u0430\u0437\u043e\u0432\u044b\u0435 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u0438 \u043c\u043e\u043b\u043e\u0434\u043e\u0439 \u0441\u0435\u043c\u044c\u0438: \u0432\u043e\u0437\u0440\u0430\u0441\u0442 \u0434\u043e 35 \u043b\u0435\u0442, \u0431\u0440\u0430\u043a \u0438 \u0436\u0438\u043b\u0438\u0449\u043d\u0430\u044f \u043f\u043e\u0442\u0440\u0435\u0431\u043d\u043e\u0441\u0442\u044c."
case"adoption":return"\u0421\u0446\u0435\u043d\u0430\u0440\u0438\u0439 \u0432\u043a\u043b\u044e\u0447\u0451\u043d, \u043f\u043e\u0442\u043e\u043c\u0443 \u0447\u0442\u043e \u0432 \u0430\u043d\u043a\u0435\u0442\u0435 \u043e\u0442\u043c\u0435\u0447\u0435\u043d\u043e \u0443\u0441\u044b\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u0438\u043b\u0438 \u0443\u0434\u043e\u0447\u0435\u0440\u0435\u043d\u0438\u0435 \u0440\u0435\u0431\u0451\u043d\u043a\u0430."
case"child_tax_deduction":return"\u0412\u044b\u0447\u0435\u0442 \u0440\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u043d \u043f\u043e \u0447\u0438\u0441\u043b\u0443 \u0434\u0435\u0442\u0435\u0439 \u0438 \u043f\u0440\u0435\u0434\u043f\u043e\u043b\u0430\u0433\u0430\u0435\u043c\u043e\u0439 \u0443\u043f\u043b\u0430\u0442\u0435 \u041d\u0414\u0424\u041b \u0441 \u043e\u0444\u0438\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0434\u043e\u0445\u043e\u0434\u0430."
case"property_deduction":return"\u0412\u044b\u0447\u0435\u0442 \u043f\u043e\u043a\u0430\u0437\u0430\u043d, \u043f\u043e\u0442\u043e\u043c\u0443 \u0447\u0442\u043e \u043e\u0442\u043c\u0435\u0447\u0435\u043d\u0430 \u043f\u043e\u043a\u0443\u043f\u043a\u0430 \u0436\u0438\u043b\u044c\u044f \u0438\u043b\u0438 \u0438\u043f\u043e\u0442\u0435\u043a\u0430 \u0438 \u0435\u0441\u0442\u044c \u0431\u0430\u0437\u0430 \u0434\u043b\u044f \u041d\u0414\u0424\u041b."
case"medical_deduction":case"education_deduction":case"fitness_deduction":case"iis_deduction":case"life_insurance_deduction":case"charity_deduction":return"\u0412\u044b\u0447\u0435\u0442 \u043f\u043e\u043a\u0430\u0437\u0430\u043d \u043f\u043e \u043e\u0442\u043c\u0435\u0447\u0435\u043d\u043d\u044b\u043c \u0440\u0430\u0441\u0445\u043e\u0434\u0430\u043c \u0438 \u043f\u0440\u0435\u0434\u043f\u043e\u043b\u0430\u0433\u0430\u0435\u043c\u043e\u0439 \u0443\u043f\u043b\u0430\u0442\u0435 \u041d\u0414\u0424\u041b."
case"student":return"\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430 \u043f\u043e\u043a\u0430\u0437\u0430\u043d\u0430, \u043f\u043e\u0442\u043e\u043c\u0443 \u0447\u0442\u043e \u0432\u044b\u0431\u0440\u0430\u043d \u0441\u0442\u0430\u0442\u0443\u0441 \u0441\u0442\u0443\u0434\u0435\u043d\u0442\u0430 \u0438\u043b\u0438 \u043e\u0442\u043c\u0435\u0447\u0435\u043d \u043e\u0447\u043d\u044b\u0439 \u0441\u0442\u0443\u0434\u0435\u043d\u0442."
case"unemployment":return"\u041f\u043e\u0441\u043e\u0431\u0438\u0435 \u043f\u043e\u043a\u0430\u0437\u0430\u043d\u043e, \u043f\u043e\u0442\u043e\u043c\u0443 \u0447\u0442\u043e \u0432\u044b\u0431\u0440\u0430\u043d \u0441\u0442\u0430\u0442\u0443\u0441 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0433\u043e \u0431\u0435\u0437\u0440\u0430\u0431\u043e\u0442\u043d\u043e\u0433\u043e."
case"layoff":return"\u0412\u044b\u043f\u043b\u0430\u0442\u0430 \u043f\u043e\u043a\u0430\u0437\u0430\u043d\u0430, \u043f\u043e\u0442\u043e\u043c\u0443 \u0447\u0442\u043e \u043e\u0442\u043c\u0435\u0447\u0435\u043d\u043e \u0443\u0432\u043e\u043b\u044c\u043d\u0435\u043d\u0438\u0435 \u043f\u043e \u0441\u043e\u043a\u0440\u0430\u0449\u0435\u043d\u0438\u044e."
case"housing_subsidy":return"\u0421\u0443\u0431\u0441\u0438\u0434\u0438\u044f \u043f\u043e\u043a\u0430\u0437\u0430\u043d\u0430, \u043f\u043e\u0442\u043e\u043c\u0443 \u0447\u0442\u043e \u043b\u0438\u0431\u043e \u043e\u0442\u043c\u0435\u0447\u0435\u043d\u0430 \u0432\u044b\u0441\u043e\u043a\u0430\u044f \u0434\u043e\u043b\u044f \u0440\u0430\u0441\u0445\u043e\u0434\u043e\u0432 \u043d\u0430 \u0416\u041a\u0425, \u043b\u0438\u0431\u043e \u0434\u043e\u0445\u043e\u0434 \u0441\u0435\u043c\u044c\u0438 \u0432\u044b\u0433\u043b\u044f\u0434\u0438\u0442 \u043d\u0438\u0437\u043a\u0438\u043c."
case"pension":return"\u041f\u0435\u043d\u0441\u0438\u043e\u043d\u043d\u044b\u0435 \u043c\u0435\u0440\u044b \u043f\u043e\u043a\u0430\u0437\u0430\u043d\u044b, \u043f\u043e\u0442\u043e\u043c\u0443 \u0447\u0442\u043e \u0432\u044b\u0431\u0440\u0430\u043d \u0441\u0442\u0430\u0442\u0443\u0441 \u043f\u0435\u043d\u0441\u0438\u043e\u043d\u0435\u0440\u0430 \u0438\u043b\u0438 \u043e\u0442\u043c\u0435\u0447\u0435\u043d \u043f\u0435\u043d\u0441\u0438\u043e\u043d\u043d\u044b\u0439 \u0441\u0442\u0430\u0442\u0443\u0441."
case"disability":return"\u0421\u043e\u0446\u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430 \u043f\u043e\u043a\u0430\u0437\u0430\u043d\u0430 \u043f\u043e \u043e\u0442\u043c\u0435\u0447\u0435\u043d\u043d\u043e\u0439 \u0438\u043d\u0432\u0430\u043b\u0438\u0434\u043d\u043e\u0441\u0442\u0438 \u043b\u0438\u0431\u043e \u043f\u043e \u0443\u0445\u043e\u0434\u0443 \u0437\u0430 \u0438\u043d\u0432\u0430\u043b\u0438\u0434\u043e\u043c \u0438\u043b\u0438 \u043f\u043e\u0436\u0438\u043b\u044b\u043c 80+."
case"property_tax_relief":return"\u041b\u044c\u0433\u043e\u0442\u0430 \u043f\u043e\u043a\u0430\u0437\u0430\u043d\u0430, \u043f\u043e\u0442\u043e\u043c\u0443 \u0447\u0442\u043e \u043e\u0442\u043c\u0435\u0447\u0435\u043d\u043e \u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0435 \u0436\u0438\u043b\u044c\u0451 \u0438 \u043b\u044c\u0433\u043e\u0442\u043d\u0430\u044f \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f (\u043f\u0435\u043d\u0441\u0438\u043e\u043d\u0435\u0440, \u0438\u043d\u0432\u0430\u043b\u0438\u0434 \u0438\u043b\u0438 \u043c\u043d\u043e\u0433\u043e\u0434\u0435\u0442\u043d\u0430\u044f \u0441\u0435\u043c\u044c\u044f)."
case"communal_housing":return"\u041c\u0435\u0440\u0430 \u043f\u043e\u043a\u0430\u0437\u0430\u043d\u0430, \u043f\u043e\u0442\u043e\u043c\u0443 \u0447\u0442\u043e \u0432 \u0430\u043d\u043a\u0435\u0442\u0435 \u043e\u0442\u043c\u0435\u0447\u0435\u043d\u043e \u043f\u0440\u043e\u0436\u0438\u0432\u0430\u043d\u0438\u0435 \u0432 \u043a\u043e\u043c\u043c\u0443\u043d\u0430\u043b\u044c\u043d\u043e\u0439 \u043a\u0432\u0430\u0440\u0442\u0438\u0440\u0435."
case"social_contract":return"\u0421\u043e\u0446\u043a\u043e\u043d\u0442\u0440\u0430\u043a\u0442 \u043f\u043e\u043a\u0430\u0437\u0430\u043d, \u043f\u043e\u0442\u043e\u043c\u0443 \u0447\u0442\u043e \u043e\u043d \u043e\u0442\u043c\u0435\u0447\u0435\u043d \u0432 \u0430\u043d\u043a\u0435\u0442\u0435 \u0438 \u043f\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u0434\u043e\u0445\u043e\u0434 \u0441\u0435\u043c\u044c\u0438 \u0432\u044b\u0433\u043b\u044f\u0434\u0438\u0442 \u043e\u0447\u0435\u043d\u044c \u043d\u0438\u0437\u043a\u0438\u043c."
case"military":return B.h.i(a.b,"\u0432\u0435\u0442\u0435\u0440\u0430\u043d\u0430")?"\u0412\u044b\u043f\u043b\u0430\u0442\u0430 \u043f\u043e\u043a\u0430\u0437\u0430\u043d\u0430, \u043f\u043e\u0442\u043e\u043c\u0443 \u0447\u0442\u043e \u043e\u0442\u043c\u0435\u0447\u0435\u043d \u0441\u0442\u0430\u0442\u0443\u0441 \u0432\u0435\u0442\u0435\u0440\u0430\u043d\u0430 \u0431\u043e\u0435\u0432\u044b\u0445 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439.":"\u0412\u043e\u0435\u043d\u043d\u0430\u044f \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430 \u043f\u043e\u043a\u0430\u0437\u0430\u043d\u0430, \u043f\u043e\u0442\u043e\u043c\u0443 \u0447\u0442\u043e \u043e\u0442\u043c\u0435\u0447\u0435\u043d \u0441\u0442\u0430\u0442\u0443\u0441 \u0432\u043e\u0435\u043d\u043d\u043e\u0441\u043b\u0443\u0436\u0430\u0449\u0435\u0433\u043e \u0438\u043b\u0438 \u0443\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u0430 \u0421\u0412\u041e."
case"veteran_family":return"\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430 \u0441\u0435\u043c\u044c\u0438 \u043f\u043e\u043a\u0430\u0437\u0430\u043d\u0430, \u043f\u043e\u0442\u043e\u043c\u0443 \u0447\u0442\u043e \u0432 \u0430\u043d\u043a\u0435\u0442\u0435 \u043e\u0442\u043c\u0435\u0447\u0435\u043d \u0432\u0435\u0442\u0435\u0440\u0430\u043d \u0431\u043e\u0435\u0432\u044b\u0445 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439 \u0432 \u0441\u0435\u043c\u044c\u0435."
case"honors":return"\u041b\u044c\u0433\u043e\u0442\u0430 \u043f\u043e\u043a\u0430\u0437\u0430\u043d\u0430, \u043f\u043e\u0442\u043e\u043c\u0443 \u0447\u0442\u043e \u0432 \u0430\u043d\u043a\u0435\u0442\u0435 \u043e\u0442\u043c\u0435\u0447\u0435\u043d \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0439 \u043f\u043e\u0447\u0451\u0442\u043d\u044b\u0439 \u0441\u0442\u0430\u0442\u0443\u0441 \u0438\u043b\u0438 \u0437\u0432\u0430\u043d\u0438\u0435."
case"sick_leave":return"\u0411\u043e\u043b\u044c\u043d\u0438\u0447\u043d\u044b\u0439 \u043f\u043e\u043a\u0430\u0437\u0430\u043d, \u043f\u043e\u0442\u043e\u043c\u0443 \u0447\u0442\u043e \u043e\u0442\u043c\u0435\u0447\u0435\u043d \u043b\u0438\u0441\u0442 \u043d\u0435\u0442\u0440\u0443\u0434\u043e\u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u0438 \u0438 \u0432\u044b\u0431\u0440\u0430\u043d \u0441\u0442\u0430\u0442\u0443\u0441 \u0441 \u043f\u0440\u0430\u0432\u043e\u043c \u043d\u0430 \u0432\u044b\u043f\u043b\u0430\u0442\u0443."
case"donor":return"\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430 \u043f\u043e\u043a\u0430\u0437\u0430\u043d\u0430, \u043f\u043e\u0442\u043e\u043c\u0443 \u0447\u0442\u043e \u043e\u0442\u043c\u0435\u0447\u0435\u043d \u0441\u0442\u0430\u0442\u0443\u0441 \u043f\u043e\u0447\u0451\u0442\u043d\u043e\u0433\u043e \u0434\u043e\u043d\u043e\u0440\u0430 \u0420\u043e\u0441\u0441\u0438\u0438."
case"north":return"\u0420\u0435\u0433\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u0430\u044f \u043c\u0435\u0440\u0430 \u043f\u043e\u043a\u0430\u0437\u0430\u043d\u0430, \u043f\u043e\u0442\u043e\u043c\u0443 \u0447\u0442\u043e \u0432\u044b\u0431\u0440\u0430\u043d \u0440\u0435\u0433\u0438\u043e\u043d \u041a\u0440\u0430\u0439\u043d\u0435\u0433\u043e \u0421\u0435\u0432\u0435\u0440\u0430."
case"chernobyl":return"\u0412\u044b\u043f\u043b\u0430\u0442\u0430 \u043f\u043e\u043a\u0430\u0437\u0430\u043d\u0430, \u043f\u043e\u0442\u043e\u043c\u0443 \u0447\u0442\u043e \u043e\u0442\u043c\u0435\u0447\u0435\u043d \u0441\u0442\u0430\u0442\u0443\u0441 \u0447\u0435\u0440\u043d\u043e\u0431\u044b\u043b\u044c\u0446\u0430 \u0438\u043b\u0438 \u043b\u0438\u043a\u0432\u0438\u0434\u0430\u0442\u043e\u0440\u0430."
case"rehabilitated":return"\u041b\u044c\u0433\u043e\u0442\u0430 \u043f\u043e\u043a\u0430\u0437\u0430\u043d\u0430, \u043f\u043e\u0442\u043e\u043c\u0443 \u0447\u0442\u043e \u043e\u0442\u043c\u0435\u0447\u0435\u043d \u0441\u0442\u0430\u0442\u0443\u0441 \u0440\u0435\u0430\u0431\u0438\u043b\u0438\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0433\u043e."
case"moscow":return"\u041c\u0435\u0440\u0430 \u043f\u043e\u043a\u0430\u0437\u0430\u043d\u0430, \u043f\u043e\u0442\u043e\u043c\u0443 \u0447\u0442\u043e \u0432\u044b\u0431\u0440\u0430\u043d \u043c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u0438\u0439 \u0440\u0435\u0433\u0438\u043e\u043d \u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u044b \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u0443\u0441\u043b\u043e\u0432\u0438\u044f \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e\u0439 \u0432\u044b\u043f\u043b\u0430\u0442\u044b."
case"dfo":return"\u041b\u044c\u0433\u043e\u0442\u0430 \u043f\u043e\u043a\u0430\u0437\u0430\u043d\u0430, \u043f\u043e\u0442\u043e\u043c\u0443 \u0447\u0442\u043e \u0432\u044b\u0431\u0440\u0430\u043d \u0414\u0430\u043b\u044c\u043d\u0438\u0439 \u0412\u043e\u0441\u0442\u043e\u043a \u0438\u043b\u0438 \u043e\u0442\u043c\u0435\u0447\u0435\u043d \u043f\u0435\u0440\u0435\u0435\u0437\u0434 \u043d\u0430 \u0414\u0430\u043b\u044c\u043d\u0438\u0439 \u0412\u043e\u0441\u0442\u043e\u043a."
case"regional_extra_info":return"\u041d\u0430\u043f\u043e\u043c\u0438\u043d\u0430\u043d\u0438\u0435 \u043f\u043e\u043a\u0430\u0437\u0430\u043d\u043e, \u043f\u043e\u0442\u043e\u043c\u0443 \u0447\u0442\u043e \u0432 \u0430\u043d\u043a\u0435\u0442\u0435 \u0435\u0441\u0442\u044c \u0434\u0435\u0442\u0438/\u0431\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0441\u0442\u044c \u0438\u043b\u0438 \u0441\u0442\u0430\u0442\u0443\u0441 \u0441\u0442\u0443\u0434\u0435\u043d\u0442\u0430, \u0430 \u0440\u0435\u0433\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u0434\u043e\u043f\u043b\u0430\u0442\u044b \u0437\u0430\u0432\u0438\u0441\u044f\u0442 \u043e\u0442 \u0441\u0443\u0431\u044a\u0435\u043a\u0442\u0430 \u0420\u0424."}return"\u0412\u044b\u043f\u043b\u0430\u0442\u0430 \u043f\u043e\u043a\u0430\u0437\u0430\u043d\u0430 \u043f\u043e \u0441\u043e\u0432\u043e\u043a\u0443\u043f\u043d\u043e\u0441\u0442\u0438 \u0432\u0432\u0435\u0434\u0451\u043d\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445 \u043f\u0440\u043e\u0444\u0438\u043b\u044f."}},B={}
var w=[A,J,B]
var $={}
A.dP.prototype={}
J.bK.prototype={
E(a,b){return a===b},
gt(a){return A.c_(a)},
k(a){return"Instance of '"+A.c0(a)+"'"},
gu(a){return A.ai(A.e6(this))}}
J.bM.prototype={
k(a){return String(a)},
gt(a){return a?519018:218159},
gu(a){return A.ai(t.y)},
$ip:1,
$iE:1}
J.aR.prototype={
E(a,b){return null==b},
k(a){return"null"},
gt(a){return 0},
$ip:1,
$iB:1}
J.aV.prototype={$it:1}
J.a2.prototype={
gt(a){return 0},
k(a){return String(a)}}
J.bZ.prototype={}
J.aA.prototype={}
J.a1.prototype={
k(a){var s=a[$.by()]
if(s==null)return this.aF(a)
return"JavaScript function for "+J.aJ(s)},
$ia8:1}
J.aU.prototype={
gt(a){return 0},
k(a){return String(a)}}
J.aW.prototype={
gt(a){return 0},
k(a){return String(a)}}
J.r.prototype={
n(a,b){A.a_(a).c.a(b)
a.$flags&1&&A.ap(a,29)
a.push(b)},
N(a,b){var s,r=A.hb(a.length,"",!1,t.N)
for(s=0;s<a.length;++s)this.F(r,s,A.j(a[s]))
return r.join(b)},
ga1(a){if(a.length>0)return a[0]
throw A.i(A.er())},
gbb(a){var s=a.length
if(s>0)return a[s-1]
throw A.i(A.er())},
aD(a,b){var s,r,q,p,o,n=A.a_(a)
n.j("d(1,1)?").a(b)
a.$flags&2&&A.ap(a,"sort")
s=a.length
if(s<2)return
if(s===2){r=a[0]
q=a[1]
n=b.$2(r,q)
if(typeof n!=="number")return n.bj()
if(n>0){a[0]=q
a[1]=r}return}p=0
if(n.c.b(null))for(o=0;o<a.length;++o)if(a[o]===void 0){a[o]=null;++p}a.sort(A.aH(b,2))
if(p>0)this.aV(a,p)},
aV(a,b){var s,r=a.length
for(;s=r-1,r>0;r=s)if(a[s]===null){a[s]=void 0;--b
if(b===0)break}},
k(a){return A.dO(a,"[","]")},
gq(a){return new J.aK(a,a.length,A.a_(a).j("aK<1>"))},
gt(a){return A.c_(a)},
gv(a){return a.length},
F(a,b,c){A.a_(a).c.a(c)
a.$flags&2&&A.ap(a)
if(!(b>=0&&b<a.length))throw A.i(A.ff(a,b))
a[b]=c},
$if:1,
$iq:1}
J.bL.prototype={
bh(a){var s,r,q
if(!Array.isArray(a))return null
s=a.$flags|0
if((s&4)!==0)r="const, "
else if((s&2)!==0)r="unmodifiable, "
else r=(s&1)!==0?"fixed, ":""
q="Instance of '"+A.c0(a)+"'"
if(r==="")return q
return q+" ("+r+"length: "+a.length+")"}}
J.cF.prototype={}
J.aK.prototype={
gm(){var s=this.d
return s==null?this.$ti.c.a(s):s},
l(){var s,r=this,q=r.a,p=q.length
if(r.b!==p){q=A.dK(q)
throw A.i(q)}s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0},
$iH:1}
J.aS.prototype={
D(a,b){var s
A.eW(b)
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gM(b)
if(this.gM(a)===s)return 0
if(this.gM(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gM(a){return a===0?1/a<0:a<0},
O(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.i(A.ca(""+a+".toInt()"))},
aA(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.i(A.ca(""+a+".round()"))},
p(a){if(a<0)return-Math.round(-a)
else return Math.round(a)},
b4(a,b,c){if(B.f.D(b,c)>0)throw A.i(A.iB(b))
if(this.D(a,b)<0)return b
if(this.D(a,c)>0)return c
return a},
P(a,b){var s
if(b>20)throw A.i(A.ay(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gM(a))return"-"+s
return s},
k(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gt(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
aC(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
return s+b},
aZ(a,b){return(a|0)===a?a/b|0:this.b_(a,b)},
b_(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.i(A.ca("Result of truncating division is "+A.j(s)+": "+A.j(a)+" ~/ "+b))},
ai(a,b){var s
if(a>0)s=this.aY(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
aY(a,b){return b>31?0:a>>>b},
gu(a){return A.ai(t.H)},
$il:1,
$iam:1}
J.aQ.prototype={
gu(a){return A.ai(t.S)},
$ip:1,
$id:1}
J.bN.prototype={
gu(a){return A.ai(t.i)},
$ip:1}
J.a9.prototype={
a_(a,b){return new A.cl(b,a,0)},
R(a,b,c){return a.substring(b,A.eB(b,c,a.length))},
aE(a,b){return this.R(a,b,null)},
a5(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(0>=o)return A.k(p,0)
if(p.charCodeAt(0)===133){s=J.h4(p,1)
if(s===o)return""}else s=0
r=o-1
if(!(r>=0))return A.k(p,r)
q=p.charCodeAt(r)===133?J.h5(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
i(a,b){return A.k2(a,b,0)},
k(a){return a},
gt(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gu(a){return A.ai(t.N)},
gv(a){return a.length},
$ip:1,
$icK:1,
$in:1}
A.aa.prototype={
k(a){return"LateInitializationError: "+this.a}}
A.cM.prototype={}
A.aY.prototype={
gm(){var s=this.d
return s==null?this.$ti.c.a(s):s},
l(){var s,r=this,q=r.a,p=J.fh(q),o=p.gv(q)
if(r.b!==o)throw A.i(A.cB(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.am(q,s);++r.c
return!0},
$iH:1}
A.L.prototype={
gq(a){return new A.ab(J.ct(this.a),this.b,this.$ti.j("ab<1>"))}}
A.ab.prototype={
l(){var s,r
for(s=this.a,r=this.b;s.l();)if(r.$1(s.gm()))return!0
return!1},
gm(){return this.a.gm()},
$iH:1}
A.F.prototype={}
A.N.prototype={$r:"+(1,2)",$s:1}
A.bE.prototype={
k(a){return A.dR(this)},
gan(){return new A.aD(this.b7(),A.G(this).j("aD<aZ<1,2>>"))},
b7(){var s=this
return function(){var r=0,q=1,p=[],o,n,m,l,k
return function $async$gan(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.gba(),o=o.gq(o),n=A.G(s),m=n.y[1],n=n.j("aZ<1,2>")
case 2:if(!o.l()){r=3
break}l=o.gm()
k=s.A(0,l)
r=4
return a.b=new A.aZ(l,k==null?m.a(k):k,n),1
case 4:r=2
break
case 3:return 0
case 1:return a.c=p.at(-1),3}}}}}
A.U.prototype={
gv(a){return this.b.length},
gae(){var s=this.$keys
if(s==null){s=Object.keys(this.a)
this.$keys=s}return s},
b5(a){if(typeof a!="string")return!1
if("__proto__"===a)return!1
return this.a.hasOwnProperty(a)},
A(a,b){if(!this.b5(b))return null
return this.b[this.a[b]]},
ap(a,b){var s,r,q,p
this.$ti.j("~(1,2)").a(b)
s=this.gae()
r=this.b
for(q=s.length,p=0;p<q;++p)b.$2(s[p],r[p])},
gba(){return new A.be(this.gae(),this.$ti.j("be<1>"))}}
A.be.prototype={
gv(a){return this.a.length},
gq(a){var s=this.a
return new A.ac(s,s.length,this.$ti.j("ac<1>"))}}
A.ac.prototype={
gm(){var s=this.d
return s==null?this.$ti.c.a(s):s},
l(){var s=this,r=s.c
if(r>=s.b){s.d=null
return!1}s.d=s.a[r]
s.c=r+1
return!0},
$iH:1}
A.aO.prototype={
n(a,b){A.G(this).c.a(b)
A.fS()}}
A.as.prototype={
gv(a){return this.b},
gq(a){var s,r=this,q=r.$keys
if(q==null){q=Object.keys(r.a)
r.$keys=q}s=q
return new A.ac(s,s.length,r.$ti.j("ac<1>"))},
i(a,b){if("__proto__"===b)return!1
return this.a.hasOwnProperty(b)}}
A.b6.prototype={}
A.cN.prototype={
B(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
if(p==null)return null
s=Object.create(null)
r=q.b
if(r!==-1)s.arguments=p[r+1]
r=q.c
if(r!==-1)s.argumentsExpr=p[r+1]
r=q.d
if(r!==-1)s.expr=p[r+1]
r=q.e
if(r!==-1)s.method=p[r+1]
r=q.f
if(r!==-1)s.receiver=p[r+1]
return s}}
A.b3.prototype={
k(a){return"Null check operator used on a null value"}}
A.bO.prototype={
k(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.c9.prototype={
k(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.cJ.prototype={
k(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.bl.prototype={
k(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$iaz:1}
A.a0.prototype={
k(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.fq(r==null?"unknown":r)+"'"},
$ia8:1,
gbi(){return this},
$C:"$1",
$R:1,
$D:null}
A.bB.prototype={$C:"$0",$R:0}
A.bC.prototype={$C:"$2",$R:2}
A.c7.prototype={}
A.c4.prototype={
k(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.fq(s)+"'"}}
A.ar.prototype={
E(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.ar))return!1
return this.$_target===b.$_target&&this.a===b.a},
gt(a){return(A.fj(this.a)^A.c_(this.$_target))>>>0},
k(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.c0(this.a)+"'")}}
A.c2.prototype={
k(a){return"RuntimeError: "+this.a}}
A.aX.prototype={
gv(a){return this.a},
A(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.b9(b)},
b9(a){var s,r,q=this.d
if(q==null)return null
s=q[this.aq(a)]
r=this.ar(s,a)
if(r<0)return null
return s[r].b},
F(a,b,c){var s,r,q,p,o,n,m=this,l=A.G(m)
l.c.a(b)
l.y[1].a(c)
if(typeof b=="string"){s=m.b
m.a7(s==null?m.b=m.X():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=m.c
m.a7(r==null?m.c=m.X():r,b,c)}else{q=m.d
if(q==null)q=m.d=m.X()
p=m.aq(b)
o=q[p]
if(o==null)q[p]=[m.Y(b,c)]
else{n=m.ar(o,b)
if(n>=0)o[n].b=c
else o.push(m.Y(b,c))}}},
ap(a,b){var s,r,q=this
A.G(q).j("~(1,2)").a(b)
s=q.e
r=q.r
while(s!=null){b.$2(s.a,s.b)
if(r!==q.r)throw A.i(A.cB(q))
s=s.c}},
a7(a,b,c){var s,r=A.G(this)
r.c.a(b)
r.y[1].a(c)
s=a[b]
if(s==null)a[b]=this.Y(b,c)
else s.b=c},
Y(a,b){var s=this,r=A.G(s),q=new A.cG(r.c.a(a),r.y[1].a(b))
if(s.e==null)s.e=s.f=q
else s.f=s.f.c=q;++s.a
s.r=s.r+1&1073741823
return q},
aq(a){return J.W(a)&1073741823},
ar(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.cs(a[r].a,b))return r
return-1},
k(a){return A.dR(this)},
X(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s}}
A.cG.prototype={}
A.dy.prototype={
$1(a){return this.a(a)},
$S:10}
A.dz.prototype={
$2(a,b){return this.a(a,b)},
$S:11}
A.dA.prototype={
$1(a){return this.a(A.a6(a))},
$S:12}
A.af.prototype={
k(a){return this.aj(!1)},
aj(a){var s,r,q,p,o,n=this.aR(),m=this.ad(),l=(a?"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
if(!(q<m.length))return A.k(m,q)
o=m[q]
l=a?l+A.ez(o):l+A.j(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
aR(){var s,r=this.$s
while($.d7.length<=r)B.c.n($.d7,null)
s=$.d7[r]
if(s==null){s=this.aN()
B.c.F($.d7,r,s)}return s},
aN(){var s,r,q,p=this.$r,o=p.indexOf("("),n=p.substring(1,o),m=p.substring(o),l=m==="()"?0:m.replace(/[^,]/g,"").length+1,k=A.z(new Array(l),t.f)
for(s=0;s<l;++s)k[s]=s
if(n!==""){r=n.split(",")
s=r.length
for(q=l;s>0;){--q;--s
B.c.F(k,q,r[s])}}return A.ew(k,t.K)}}
A.aC.prototype={
ad(){return[this.a,this.b]},
E(a,b){if(b==null)return!1
return b instanceof A.aC&&this.$s===b.$s&&J.cs(this.a,b.a)&&J.cs(this.b,b.b)},
gt(a){return A.ex(this.$s,this.a,this.b,B.k)}}
A.aT.prototype={
k(a){return"RegExp/"+this.a+"/"+this.b.flags},
gag(){var s=this,r=s.c
if(r!=null)return r
r=s.b
return s.c=A.et(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,"g")},
a_(a,b){return new A.cd(this,b,0)},
aQ(a,b){var s,r=this.gag()
if(r==null)r=A.bt(r)
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
return new A.cj(s)},
$icK:1,
$ihp:1}
A.cj.prototype={
ga6(){return this.b.index},
ga0(){var s=this.b
return s.index+s[0].length},
A(a,b){var s=this.b
if(!(b<s.length))return A.k(s,b)
return s[b]},
$iV:1,
$ib5:1}
A.cd.prototype={
gq(a){return new A.bb(this.a,this.b,this.c)}}
A.bb.prototype={
gm(){var s=this.d
return s==null?t.d.a(s):s},
l(){var s,r,q,p,o,n,m=this,l=m.b
if(l==null)return!1
s=m.c
r=l.length
if(s<=r){q=m.a
p=q.aQ(l,s)
if(p!=null){m.d=p
o=p.ga0()
if(p.b.index===o){s=!1
if(q.b.unicode){q=m.c
n=q+1
if(n<r){if(!(q>=0&&q<r))return A.k(l,q)
q=l.charCodeAt(q)
if(q>=55296&&q<=56319){if(!(n>=0))return A.k(l,n)
s=l.charCodeAt(n)
s=s>=56320&&s<=57343}}}o=(s?o+1:o)+1}m.c=o
return!0}}m.b=m.d=null
return!1},
$iH:1}
A.c6.prototype={
ga0(){return this.a+this.c.length},
A(a,b){if(b!==0)A.ao(A.eA(b,null))
return this.c},
$iV:1,
ga6(){return this.a}}
A.cl.prototype={
gq(a){return new A.cm(this.a,this.b,this.c)}}
A.cm.prototype={
l(){var s,r,q=this,p=q.c,o=q.b,n=o.length,m=q.a,l=m.length
if(p+n>l){q.d=null
return!1}s=m.indexOf(o,p)
if(s<0){q.c=l+1
q.d=null
return!1}r=s+n
q.d=new A.c6(s,o)
q.c=r===q.c?r+1:r
return!0},
gm(){var s=this.d
s.toString
return s},
$iH:1}
A.cU.prototype={
I(){var s=this.b
if(s===this)throw A.i(new A.aa("Local '' has not been initialized."))
return s},
sL(a){if(this.b!==this)throw A.i(new A.aa("Local '' has already been initialized."))
this.b=a}}
A.av.prototype={
gu(a){return B.dA},
$ip:1}
A.b1.prototype={}
A.bQ.prototype={
gu(a){return B.dB},
$ip:1}
A.aw.prototype={
gv(a){return a.length},
$iI:1}
A.b_.prototype={$if:1,$iq:1}
A.b0.prototype={$if:1,$iq:1}
A.bR.prototype={
gu(a){return B.dC},
$ip:1}
A.bS.prototype={
gu(a){return B.dD},
$ip:1}
A.bT.prototype={
gu(a){return B.dE},
$ip:1}
A.bU.prototype={
gu(a){return B.dF},
$ip:1}
A.bV.prototype={
gu(a){return B.dG},
$ip:1}
A.bW.prototype={
gu(a){return B.dI},
$ip:1}
A.bX.prototype={
gu(a){return B.dJ},
$ip:1}
A.b2.prototype={
gu(a){return B.dK},
gv(a){return a.length},
$ip:1}
A.bY.prototype={
gu(a){return B.dL},
gv(a){return a.length},
$ip:1,
$idX:1}
A.bg.prototype={}
A.bh.prototype={}
A.bi.prototype={}
A.bj.prototype={}
A.R.prototype={
j(a){return A.bq(v.typeUniverse,this,a)},
C(a){return A.eT(v.typeUniverse,this,a)}}
A.ch.prototype={}
A.db.prototype={
k(a){return A.J(this.a,null)}}
A.cg.prototype={
k(a){return this.a}}
A.bm.prototype={$iY:1}
A.cR.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:3}
A.cQ.prototype={
$1(a){var s,r
this.a.a=t.M.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:13}
A.cS.prototype={
$0(){this.a.$0()},
$S:6}
A.cT.prototype={
$0(){this.a.$0()},
$S:6}
A.d9.prototype={
aG(a,b){if(self.setTimeout!=null)self.setTimeout(A.aH(new A.da(this,b),0),a)
else throw A.i(A.ca("`setTimeout()` not found."))}}
A.da.prototype={
$0(){this.b.$0()},
$S:1}
A.ag.prototype={
gm(){var s=this.b
return s==null?this.$ti.c.a(s):s},
aW(a,b){var s,r,q
a=A.bs(a)
b=b
s=this.a
for(;;)try{r=s(this,a,b)
return r}catch(q){b=q
a=1}},
l(){var s,r,q,p,o=this,n=null,m=0
for(;;){s=o.d
if(s!=null)try{if(s.l()){o.b=s.gm()
return!0}else o.d=null}catch(r){n=r
m=1
o.d=null}q=o.aW(m,n)
if(1===q)return!0
if(0===q){o.b=null
p=o.e
if(p==null||p.length===0){o.a=A.eO
return!1}if(0>=p.length)return A.k(p,-1)
o.a=p.pop()
m=0
n=null
continue}if(2===q){m=0
n=null
continue}if(3===q){n=o.c
o.c=null
p=o.e
if(p==null||p.length===0){o.b=null
o.a=A.eO
throw n
return!1}if(0>=p.length)return A.k(p,-1)
o.a=p.pop()
m=1
continue}throw A.i(A.dV("sync*"))}return!1},
bk(a){var s,r,q=this
if(a instanceof A.aD){s=a.a()
r=q.e
if(r==null)r=q.e=[]
B.c.n(r,q.a)
q.a=s
return 2}else{q.d=J.ct(a)
return 2}},
$iH:1}
A.aD.prototype={
gq(a){return new A.ag(this.a(),this.$ti.j("ag<1>"))}}
A.T.prototype={
k(a){return A.j(this.a)},
$iv:1,
gG(){return this.b}}
A.cf.prototype={
al(a){var s=this.a
if((s.a&30)!==0)throw A.i(A.dV("Future already completed"))
s.a9(A.i5(a,null))}}
A.bc.prototype={}
A.bd.prototype={
bc(a){if((this.c&15)!==6)return!0
return this.b.b.a3(t.x.a(this.d),a.a,t.y,t.K)},
b8(a){var s,r=this,q=r.e,p=null,o=t.z,n=t.K,m=a.a,l=r.b.b
if(t.Q.b(q))p=l.bf(q,m,a.b,o,n,t.l)
else p=l.a3(t.v.a(q),m,o,n)
try{o=r.$ti.j("2/").a(p)
return o}catch(s){if(t.c.b(A.cr(s))){if((r.c&1)!==0)throw A.i(A.a7("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.i(A.a7("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.M.prototype={
a4(a,b,c){var s,r,q=this.$ti
q.C(c).j("1/(2)").a(a)
s=$.C
if(s===B.i){if(!t.Q.b(b)&&!t.v.b(b))throw A.i(A.ej(b,"onError",u.c))}else{c.j("@<0/>").C(q.c).j("1(2)").a(a)
b=A.il(b,s)}r=new A.M(s,c.j("M<0>"))
this.a8(new A.bd(r,3,a,b,q.j("@<1>").C(c).j("bd<1,2>")))
return r},
aX(a){this.a=this.a&1|16
this.c=a},
H(a){this.a=a.a&30|this.a&1
this.c=a.c},
a8(a){var s,r=this,q=r.a
if(q<=3){a.a=t.F.a(r.c)
r.c=a}else{if((q&4)!==0){s=t._.a(r.c)
if((s.a&24)===0){s.a8(a)
return}r.H(s)}A.cp(null,null,r.b,t.M.a(new A.cX(r,a)))}},
ah(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=3){r=t.F.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){n=t._.a(m.c)
if((n.a&24)===0){n.ah(a)
return}m.H(n)}l.a=m.K(a)
A.cp(null,null,m.b,t.M.a(new A.d0(l,m)))}},
J(){var s=t.F.a(this.c)
this.c=null
return this.K(s)},
K(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
aM(a){var s,r=this
r.$ti.c.a(a)
s=r.J()
r.a=8
r.c=a
A.aB(r,s)},
aL(a){var s,r,q=this
if((a.a&16)!==0){s=q.b===a.b
s=!(s||s)}else s=!1
if(s)return
r=q.J()
q.H(a)
A.aB(q,r)},
ab(a){var s=this.J()
this.aX(a)
A.aB(this,s)},
aI(a){var s=this.$ti
s.j("1/").a(a)
if(s.j("au<1>").b(a)){this.aK(a)
return}this.aJ(a)},
aJ(a){var s=this
s.$ti.c.a(a)
s.a^=2
A.cp(null,null,s.b,t.M.a(new A.cZ(s,a)))},
aK(a){A.dY(this.$ti.j("au<1>").a(a),this,!1)
return},
a9(a){this.a^=2
A.cp(null,null,this.b,t.M.a(new A.cY(this,a)))},
$iau:1}
A.cX.prototype={
$0(){A.aB(this.a,this.b)},
$S:1}
A.d0.prototype={
$0(){A.aB(this.b,this.a.a)},
$S:1}
A.d_.prototype={
$0(){A.dY(this.a.a,this.b,!0)},
$S:1}
A.cZ.prototype={
$0(){this.a.aM(this.b)},
$S:1}
A.cY.prototype={
$0(){this.a.ab(this.b)},
$S:1}
A.d3.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
j=q.b.b.be(t.bd.a(q.d),t.z)}catch(p){s=A.cr(p)
r=A.bw(p)
if(k.c&&t.n.a(k.b.a.c).a===s){q=k.a
q.c=t.n.a(k.b.a.c)}else{q=s
o=r
if(o==null)o=A.dN(q)
n=k.a
n.c=new A.T(q,o)
q=n}q.b=!0
return}if(j instanceof A.M&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=t.n.a(j.c)
q.b=!0}return}if(j instanceof A.M){m=k.b.a
l=new A.M(m.b,m.$ti)
j.a4(new A.d4(l,m),new A.d5(l),t.o)
q=k.a
q.c=l
q.b=!1}},
$S:1}
A.d4.prototype={
$1(a){this.a.aL(this.b)},
$S:3}
A.d5.prototype={
$2(a,b){A.bt(a)
t.l.a(b)
this.a.ab(new A.T(a,b))},
$S:14}
A.d2.prototype={
$0(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.a3(o.j("2/(1)").a(p.d),m,o.j("2/"),n)}catch(l){s=A.cr(l)
r=A.bw(l)
q=s
p=r
if(p==null)p=A.dN(q)
o=this.a
o.c=new A.T(q,p)
o.b=!0}},
$S:1}
A.d1.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=t.n.a(l.a.a.c)
p=l.b
if(p.a.bc(s)&&p.a.e!=null){p.c=p.a.b8(s)
p.b=!1}}catch(o){r=A.cr(o)
q=A.bw(o)
p=t.n.a(l.a.a.c)
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.dN(p)
m=l.b
m.c=new A.T(p,n)
p=m}p.b=!0}},
$S:1}
A.ce.prototype={}
A.br.prototype={$ieG:1}
A.dq.prototype={
$0(){A.fV(this.a,this.b)},
$S:1}
A.ck.prototype={
bg(a){var s,r,q
t.M.a(a)
try{if(B.i===$.C){a.$0()
return}A.f5(null,null,this,a,t.o)}catch(q){s=A.cr(q)
r=A.bw(q)
A.e9(A.bt(s),t.l.a(r))}},
b2(a){return new A.d8(this,t.M.a(a))},
be(a,b){b.j("0()").a(a)
if($.C===B.i)return a.$0()
return A.f5(null,null,this,a,b)},
a3(a,b,c,d){c.j("@<0>").C(d).j("1(2)").a(a)
d.a(b)
if($.C===B.i)return a.$1(b)
return A.ip(null,null,this,a,b,c,d)},
bf(a,b,c,d,e,f){d.j("@<0>").C(e).C(f).j("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.C===B.i)return a.$2(b,c)
return A.io(null,null,this,a,b,c,d,e,f)}}
A.d8.prototype={
$0(){return this.a.bg(this.b)},
$S:1}
A.ad.prototype={
gq(a){var s=this,r=new A.bf(s,s.r,A.G(s).j("bf<1>"))
r.c=s.e
return r},
gv(a){return this.a},
i(a,b){var s,r
if(b!=="__proto__"){s=this.b
if(s==null)return!1
return t.g.a(s[b])!=null}else{r=this.aO(b)
return r}},
aO(a){var s=this.d
if(s==null)return!1
return this.W(s[this.T(a)],a)>=0},
n(a,b){var s,r,q=this
A.G(q).c.a(b)
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.aa(s==null?q.b=A.dZ():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.aa(r==null?q.c=A.dZ():r,b)}else return q.aH(b)},
aH(a){var s,r,q,p=this
A.G(p).c.a(a)
s=p.d
if(s==null)s=p.d=A.dZ()
r=p.T(a)
q=s[r]
if(q==null)s[r]=[p.S(a)]
else{if(p.W(q,a)>=0)return!1
q.push(p.S(a))}return!0},
bd(a,b){var s
if(b!=="__proto__")return this.aU(this.b,b)
else{s=this.aT(b)
return s}},
aT(a){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.T(a)
r=n[s]
q=o.W(r,a)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.ak(p)
return!0},
aa(a,b){A.G(this).c.a(b)
if(t.g.a(a[b])!=null)return!1
a[b]=this.S(b)
return!0},
aU(a,b){var s
if(a==null)return!1
s=t.g.a(a[b])
if(s==null)return!1
this.ak(s)
delete a[b]
return!0},
af(){this.r=this.r+1&1073741823},
S(a){var s,r=this,q=new A.ci(A.G(r).c.a(a))
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.af()
return q},
ak(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.af()},
T(a){return J.W(a)&1073741823},
W(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.cs(a[r].a,b))return r
return-1}}
A.ci.prototype={}
A.bf.prototype={
gm(){var s=this.d
return s==null?this.$ti.c.a(s):s},
l(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.i(A.cB(q))
else if(r==null){s.d=null
return!1}else{s.d=s.$ti.j("1?").a(r.a)
s.c=r.b
return!0}},
$iH:1}
A.u.prototype={
gq(a){return new A.aY(a,a.length,A.bx(a).j("aY<u.E>"))},
am(a,b){if(!(b<a.length))return A.k(a,b)
return a[b]},
k(a){return A.dO(a,"[","]")}}
A.bP.prototype={
gv(a){return this.a},
k(a){return A.dR(this)}}
A.cH.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.j(a)
r.a=(r.a+=s)+": "
s=A.j(b)
r.a+=s},
$S:15}
A.a3.prototype={
b1(a,b){var s
A.G(this).j("f<1>").a(b)
for(s=b.gq(b);s.l();)this.n(0,s.gm())},
k(a){return A.dO(this,"{","}")},
N(a,b){var s,r,q=this.gq(this)
if(!q.l())return""
s=J.aJ(q.gm())
if(!q.l())return s
if(b.length===0){r=s
do r+=A.j(q.gm())
while(q.l())}else{r=s
do r=r+b+A.j(q.gm())
while(q.l())}return r.charCodeAt(0)==0?r:r},
$if:1,
$ic3:1}
A.bk.prototype={}
A.aN.prototype={}
A.bF.prototype={}
A.bH.prototype={}
A.cc.prototype={}
A.cP.prototype={
b6(a){var s,r,q,p,o=a.length,n=A.eB(0,null,o)
if(n===0)return new Uint8Array(0)
s=n*3
r=new Uint8Array(s)
q=new A.dd(r)
if(q.aS(a,0,n)!==n){p=n-1
if(!(p>=0&&p<o))return A.k(a,p)
q.Z()}return new Uint8Array(r.subarray(0,A.hU(0,q.b,s)))}}
A.dd.prototype={
Z(){var s,r=this,q=r.c,p=r.b,o=r.b=p+1
q.$flags&2&&A.ap(q)
s=q.length
if(!(p<s))return A.k(q,p)
q[p]=239
p=r.b=o+1
if(!(o<s))return A.k(q,o)
q[o]=191
r.b=p+1
if(!(p<s))return A.k(q,p)
q[p]=189},
b0(a,b){var s,r,q,p,o,n=this
if((b&64512)===56320){s=65536+((a&1023)<<10)|b&1023
r=n.c
q=n.b
p=n.b=q+1
r.$flags&2&&A.ap(r)
o=r.length
if(!(q<o))return A.k(r,q)
r[q]=s>>>18|240
q=n.b=p+1
if(!(p<o))return A.k(r,p)
r[p]=s>>>12&63|128
p=n.b=q+1
if(!(q<o))return A.k(r,q)
r[q]=s>>>6&63|128
n.b=p+1
if(!(p<o))return A.k(r,p)
r[p]=s&63|128
return!0}else{n.Z()
return!1}},
aS(a,b,c){var s,r,q,p,o,n,m,l,k=this
if(b!==c){s=c-1
if(!(s>=0&&s<a.length))return A.k(a,s)
s=(a.charCodeAt(s)&64512)===55296}else s=!1
if(s)--c
for(s=k.c,r=s.$flags|0,q=s.length,p=a.length,o=b;o<c;++o){if(!(o<p))return A.k(a,o)
n=a.charCodeAt(o)
if(n<=127){m=k.b
if(m>=q)break
k.b=m+1
r&2&&A.ap(s)
s[m]=n}else{m=n&64512
if(m===55296){if(k.b+4>q)break
m=o+1
if(!(m<p))return A.k(a,m)
if(k.b0(n,a.charCodeAt(m)))o=m}else if(m===56320){if(k.b+3>q)break
k.Z()}else if(n<=2047){m=k.b
l=m+1
if(l>=q)break
k.b=l
r&2&&A.ap(s)
if(!(m<q))return A.k(s,m)
s[m]=n>>>6|192
k.b=l+1
s[l]=n&63|128}else{m=k.b
if(m+2>=q)break
l=k.b=m+1
r&2&&A.ap(s)
if(!(m<q))return A.k(s,m)
s[m]=n>>>12|224
m=k.b=l+1
if(!(l<q))return A.k(s,l)
s[l]=n>>>6&63|128
k.b=m+1
if(!(m<q))return A.k(s,m)
s[m]=n&63|128}}}return o}}
A.cC.prototype={
$0(){var s=this
return A.ao(A.a7("("+s.a+", "+s.b+", "+s.c+", "+s.d+", "+s.e+", "+s.f+", "+s.r+", "+s.w+")",null))},
$S:16}
A.at.prototype={
E(a,b){var s
if(b==null)return!1
s=!1
if(b instanceof A.at)if(this.a===b.a)s=this.b===b.b
return s},
gt(a){return A.ex(this.a,this.b,B.k,B.k)},
D(a,b){var s
t.k.a(b)
s=B.f.D(this.a,b.a)
if(s!==0)return s
return B.f.D(this.b,b.b)},
k(a){var s=this,r=A.fT(A.hk(s)),q=A.bG(A.hi(s)),p=A.bG(A.he(s)),o=A.bG(A.hf(s)),n=A.bG(A.hh(s)),m=A.bG(A.hj(s)),l=A.ep(A.hg(s)),k=s.b,j=k===0?"":A.ep(k)
return r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l+j}}
A.cV.prototype={
k(a){return this.ac()}}
A.v.prototype={
gG(){return A.hd(this)}}
A.bz.prototype={
k(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.cD(s)
return"Assertion failed"}}
A.Y.prototype={}
A.P.prototype={
gV(){return"Invalid argument"+(!this.a?"(s)":"")},
gU(){return""},
k(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+p,n=s.gV()+q+o
if(!s.a)return n
return n+s.gU()+": "+A.cD(s.ga2())},
ga2(){return this.b}}
A.b4.prototype={
ga2(){return A.eX(this.b)},
gV(){return"RangeError"},
gU(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.j(q):""
else if(q==null)s=": Not greater than or equal to "+A.j(r)
else if(q>r)s=": Not in inclusive range "+A.j(r)+".."+A.j(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.j(r)
return s}}
A.bJ.prototype={
ga2(){return A.bs(this.b)},
gV(){return"RangeError"},
gU(){if(A.bs(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gv(a){return this.f}}
A.b9.prototype={
k(a){return"Unsupported operation: "+this.a}}
A.c8.prototype={
k(a){return"UnimplementedError: "+this.a}}
A.b8.prototype={
k(a){return"Bad state: "+this.a}}
A.bD.prototype={
k(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.cD(s)+"."}}
A.b7.prototype={
k(a){return"Stack Overflow"},
gG(){return null},
$iv:1}
A.cW.prototype={
k(a){return"Exception: "+this.a}}
A.cE.prototype={
k(a){var s=this.a,r=""!==s?"FormatException: "+s:"FormatException",q=this.b
if(q.length>78)q=B.h.R(q,0,75)+"..."
return r+"\n"+q}}
A.f.prototype={
ao(a,b,c,d){var s,r
d.a(b)
A.G(this).C(d).j("1(1,f.E)").a(c)
for(s=this.gq(this),r=b;s.l();)r=c.$2(r,s.gm())
return r},
gv(a){var s,r=this.gq(this)
for(s=0;r.l();)++s
return s},
am(a,b){var s,r
A.ho(b,"index")
s=this.gq(this)
for(r=b;s.l();){if(r===0)return s.gm();--r}throw A.i(A.eq(b,b-r,this,"index"))},
k(a){return A.h0(this,"(",")")}}
A.aZ.prototype={
k(a){return"MapEntry("+A.j(this.a)+": "+A.j(this.b)+")"}}
A.B.prototype={
gt(a){return A.m.prototype.gt.call(this,0)},
k(a){return"null"}}
A.m.prototype={$im:1,
E(a,b){return this===b},
gt(a){return A.c_(this)},
k(a){return"Instance of '"+A.c0(this)+"'"},
gu(a){return A.jb(this)},
toString(){return this.k(this)}}
A.cn.prototype={
k(a){return""},
$iaz:1}
A.c5.prototype={
gv(a){return this.a.length},
k(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
A.cI.prototype={
k(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."}}
A.dI.prototype={
$1(a){var s=this.a,r=s.$ti
a=r.j("1/?").a(this.b.j("0/?").a(a))
s=s.a
if((s.a&30)!==0)A.ao(A.dV("Future already completed"))
s.aI(r.j("1/").a(a))
return null},
$S:7}
A.dJ.prototype={
$1(a){if(a==null)return this.a.al(new A.cI(a===undefined))
return this.a.al(a)},
$S:7}
A.cA.prototype={}
A.cu.prototype={
b3(a){var s,r=this.aP(a),q=A.a_(r),p=q.j("E(1)")
q=q.j("L<1>")
s=t.i
return new A.cA(r,new A.L(r,p.a(new A.cv()),q).ao(0,0,new A.cw(),s),new A.L(r,p.a(new A.cx()),q).ao(0,0,new A.cy(),s))},
aP(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=A.cL(a.a,null)
if(g==null)g=0
s=a.x
r=A.c1(s)
if(r==null)r=0
q=A.cL(a.y,null)
if(q==null)q=1
q=Math.max(1,q)
p=A.c1("")
if(p==null)p=0
o=A.cL("",null)
if(o==null)o=0
n=A.c1(a.r)
if(n==null)n=99
m=a.d
l=A.jB(m)
k=new A.aM(a,g,r,q,p,o,n,l)
k.x=B.b.p(r*12*0.13)
n=k.y=r/q
s=k.z=B.h.a5(s).length!==0
k.Q=s&&n<l.x
k.as=s&&n<l.x*2
k.at=0
k.ax=0
g=r+0
k.ay=g/q
q=(g+0)/q
k.ch=q
k.CW=s&&q<l.x
k.cx=m==="moscow"||m==="mo"
k.cy=m==="north"
k.db=m==="dfo"||a.w.i(0,"i_dfo")
g=a.c
k.dx=g==="employed"||g==="matleave"
g=A.z([],t.E)
j=new A.aL(g)
for(i=0;i<41;++i){h=B.aK[i]
j.b=h.a
h.b.$3(a,k,j)
j.b=""}g=A.ew(g,t.p)
g=A.z(g.slice(0),A.a_(g))
return g}}
A.cv.prototype={
$1(a){return t.p.a(a).r==="monthly"},
$S:4}
A.cw.prototype={
$2(a,b){return A.e1(a)+t.p.a(b).w},
$S:8}
A.cx.prototype={
$1(a){return t.p.a(a).r==="once"},
$S:4}
A.cy.prototype={
$2(a,b){return A.e1(a)+t.p.a(b).w},
$S:8}
A.aM.prototype={
gaz(){var s=this.a.c
return s==="employed"||s==="self"||s==="ip"},
gav(){var s=this.a.w
return!s.i(0,"excess_property")&&!s.i(0,"high_deposits")&&!s.i(0,"alimony_debt")},
gaw(){if(this.c>0)return!0
var s=this.a
if(s.w.i(0,"valid_zero_income"))return!0
s=s.c
return s==="student"||s==="pensioner"||s==="caregiver"||s==="matleave"},
gau(){var s=this,r=s.CW
r===$&&A.o()
if(r)r=(!s.gaz()||s.c>=18062)&&s.gav()&&s.gaw()
else r=!1
return r}}
A.aL.prototype={
h(a,b,c,d,e,f,g,h,i){B.c.n(this.a,new A.X(this.b,e,b,f,h,i,g))}}
A.h.prototype={}
A.dL.prototype={
$1(a){var s=this.a,r=s.ch
r===$&&A.o()
return r+this.b*a*this.c/s.d},
$S:17}
A.x.prototype={}
A.e.prototype={}
A.b.prototype={}
A.bI.prototype={
ac(){return"EventTarget."+this.b}}
A.Q.prototype={}
A.du.prototype={
$1(a){var s,r,q,p
t.t.a(a)
s=this.a
r=a.d
q=s.a
p=r.a
if(q>=p)r=q===p&&s.b<r.b
else r=!0
if(!r){r=a.e
p=r.a
if(q<=p)s=q===p&&s.b>r.b
else s=!0
s=!s}else s=!1
return s&&!this.b.i(0,a.a)},
$S:18}
A.dv.prototype={
$2(a,b){var s=t.t
return s.a(a).e.D(0,s.a(b).e)},
$S:19}
A.X.prototype={}
A.cz.prototype={}
A.aq.prototype={
ac(){return"BenefitTone."+this.b}}
A.w.prototype={}
A.ba.prototype={}
A.dx.prototype={
$1(a){return A.j(a.A(0,1))+" "},
$S:20}
A.dC.prototype={
$1(a){return t.a.a(a).a!=="99"},
$S:21}
A.dD.prototype={
$1(a){A.a(a)
return A.dl()},
$S:2}
A.dE.prototype={
$1(a){A.a(a)
return A.dl()},
$S:2}
A.dF.prototype={
$1(a){A.a(a)
return A.ir()},
$S:2}
A.dG.prototype={
$1(a){A.a(a)
return A.hV()},
$S:2}
A.dr.prototype={
$1(a){},
$S:22}
A.ds.prototype={
$1(a){},
$S:3}
A.dt.prototype={
$2(a,b){var s=A.D(A.a(v.G.document).getElementById(a))
if(s==null)s=null
else{s.href=b
s=b}return s},
$S:23}
A.dh.prototype={
$1(a){var s=this.a
if(s==null)s=null
else{s.textContent="\u0421\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u043e"
s="\u0421\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u043e"}return s},
$S:24}
A.di.prototype={
$1(a){var s=this.a
if(s==null)s=null
else{s.textContent="\u041d\u0435 \u0432\u044b\u0448\u043b\u043e \u0441\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c"
s="\u041d\u0435 \u0432\u044b\u0448\u043b\u043e \u0441\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c"}return s},
$S:25}
A.dn.prototype={
$1(a){return A.a6(a).length!==0},
$S:26}
A.dp.prototype={
$1(a){var s
A.a(a)
s=this.a
s.n(0,this.b.a)
A.a(A.a(v.G.window).localStorage).setItem("dismissed_events",s.N(0,","))
this.c.remove()},
$S:9}
A.dg.prototype={
$1(a){var s,r
A.a(a)
s=this.a.a
r=this.b
if($.e4.bd(0,s))A.a(r.classList).remove("on")
else{$.e4.n(0,s)
A.a(r.classList).add("on")}A.dl()},
$S:9}
A.dm.prototype={
$1(a){return t.p.a(a).c===this.a.a},
$S:4};(function aliases(){var s=J.a2.prototype
s.aF=s.k})();(function installTearOffs(){var s=hunkHelpers._static_1,r=hunkHelpers._static_0,q=hunkHelpers.installStaticTearOff
s(A,"iC","hw",5)
s(A,"iD","hx",5)
s(A,"iE","hy",5)
r(A,"fc","iu",1)
q(A,"j4",3,null,["$3"],["jy"],0,0)
q(A,"j3",3,null,["$3"],["jv"],0,0)
q(A,"j1",3,null,["$3"],["jq"],0,0)
q(A,"iY",3,null,["$3"],["iF"],0,0)
q(A,"j5",3,null,["$3"],["ki"],0,0)
q(A,"j_",3,null,["$3"],["iV"],0,0)
q(A,"j2",3,null,["$3"],["ju"],0,0)
q(A,"j0",3,null,["$3"],["iW"],0,0)
q(A,"iZ",3,null,["$3"],["iR"],0,0)
q(A,"j6",3,null,["$3"],["kk"],0,0)
q(A,"iX",3,null,["$3"],["iz"],0,0)
q(A,"jH",3,null,["$3"],["jw"],0,0)
q(A,"jE",3,null,["$3"],["iH"],0,0)
q(A,"jK",3,null,["$3"],["jL"],0,0)
q(A,"jG",3,null,["$3"],["jt"],0,0)
q(A,"jF",3,null,["$3"],["iO"],0,0)
q(A,"jI",3,null,["$3"],["jC"],0,0)
q(A,"jJ",3,null,["$3"],["jD"],0,0)
q(A,"k_",3,null,["$3"],["k6"],0,0)
q(A,"k0",3,null,["$3"],["kh"],0,0)
q(A,"jU",3,null,["$3"],["jl"],0,0)
q(A,"jT",3,null,["$3"],["je"],0,0)
q(A,"jW",3,null,["$3"],["jx"],0,0)
q(A,"jQ",3,null,["$3"],["iQ"],0,0)
q(A,"jX",3,null,["$3"],["jA"],0,0)
q(A,"jO",3,null,["$3"],["iJ"],0,0)
q(A,"jZ",3,null,["$3"],["jN"],0,0)
q(A,"jV",3,null,["$3"],["js"],0,0)
q(A,"k1",3,null,["$3"],["kj"],0,0)
q(A,"jS",3,null,["$3"],["jd"],0,0)
q(A,"jY",3,null,["$3"],["jM"],0,0)
q(A,"jP",3,null,["$3"],["iK"],0,0)
q(A,"jR",3,null,["$3"],["iS"],0,0)
q(A,"k8",3,null,["$3"],["iI"],0,0)
q(A,"ke",3,null,["$3"],["jz"],0,0)
q(A,"kd",3,null,["$3"],["jr"],0,0)
q(A,"k9",3,null,["$3"],["iT"],0,0)
q(A,"ka",3,null,["$3"],["j7"],0,0)
q(A,"kb",3,null,["$3"],["jf"],0,0)
q(A,"kc",3,null,["$3"],["jm"],0,0)
q(A,"k7",3,null,["$3"],["iG"],0,0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.m,null)
q(A.m,[A.dP,J.bK,A.b6,J.aK,A.v,A.cM,A.aY,A.f,A.ab,A.F,A.af,A.bE,A.ac,A.a3,A.cN,A.cJ,A.bl,A.a0,A.bP,A.cG,A.aT,A.cj,A.bb,A.c6,A.cm,A.cU,A.R,A.ch,A.db,A.d9,A.ag,A.T,A.cf,A.bd,A.M,A.ce,A.br,A.ci,A.bf,A.u,A.aN,A.bF,A.dd,A.at,A.cV,A.b7,A.cW,A.cE,A.aZ,A.B,A.cn,A.c5,A.cI,A.cA,A.cu,A.aM,A.aL,A.h,A.x,A.e,A.b,A.Q,A.X,A.cz,A.w,A.ba])
q(J.bK,[J.bM,J.aR,J.aV,J.aU,J.aW,J.aS,J.a9])
q(J.aV,[J.a2,J.r,A.av,A.b1])
q(J.a2,[J.bZ,J.aA,J.a1])
r(J.bL,A.b6)
r(J.cF,J.r)
q(J.aS,[J.aQ,J.bN])
q(A.v,[A.aa,A.Y,A.bO,A.c9,A.c2,A.cg,A.bz,A.P,A.b9,A.c8,A.b8,A.bD])
q(A.f,[A.L,A.be,A.cd,A.cl,A.aD])
r(A.aC,A.af)
r(A.N,A.aC)
r(A.U,A.bE)
q(A.a3,[A.aO,A.bk])
r(A.as,A.aO)
r(A.b3,A.Y)
q(A.a0,[A.bB,A.bC,A.c7,A.dy,A.dA,A.cR,A.cQ,A.d4,A.dI,A.dJ,A.cv,A.cx,A.dL,A.du,A.dx,A.dC,A.dD,A.dE,A.dF,A.dG,A.dr,A.ds,A.dh,A.di,A.dn,A.dp,A.dg,A.dm])
q(A.c7,[A.c4,A.ar])
r(A.aX,A.bP)
q(A.bC,[A.dz,A.d5,A.cH,A.cw,A.cy,A.dv,A.dt])
q(A.b1,[A.bQ,A.aw])
q(A.aw,[A.bg,A.bi])
r(A.bh,A.bg)
r(A.b_,A.bh)
r(A.bj,A.bi)
r(A.b0,A.bj)
q(A.b_,[A.bR,A.bS])
q(A.b0,[A.bT,A.bU,A.bV,A.bW,A.bX,A.b2,A.bY])
r(A.bm,A.cg)
q(A.bB,[A.cS,A.cT,A.da,A.cX,A.d0,A.d_,A.cZ,A.cY,A.d3,A.d2,A.d1,A.dq,A.d8,A.cC])
r(A.bc,A.cf)
r(A.ck,A.br)
r(A.ad,A.bk)
r(A.bH,A.aN)
r(A.cc,A.bH)
r(A.cP,A.bF)
q(A.P,[A.b4,A.bJ])
q(A.cV,[A.bI,A.aq])
s(A.bg,A.u)
s(A.bh,A.F)
s(A.bi,A.u)
s(A.bj,A.F)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{d:"int",l:"double",am:"num",n:"String",E:"bool",B:"Null",q:"List",m:"Object",kp:"Map",t:"JSObject"},mangledNames:{},types:["~(ba,aM,aL)","~()","~(t)","B(@)","E(X)","~(~())","B()","~(@)","l(l,X)","B(t)","@(@)","@(@,n)","@(n)","B(~())","B(m,az)","~(m?,m?)","0&()","l(l)","E(Q)","d(Q,Q)","n(V)","E(x)","B(m?)","~(n,n)","n?(m?)","n?(@)","E(n)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.N&&a.b(c.a)&&b.b(c.b)}}
A.hM(v.typeUniverse,JSON.parse('{"bZ":"a2","aA":"a2","a1":"a2","kq":"av","bM":{"E":[],"p":[]},"aR":{"B":[],"p":[]},"aV":{"t":[]},"a2":{"t":[]},"r":{"q":["1"],"t":[],"f":["1"]},"bL":{"b6":[]},"cF":{"r":["1"],"q":["1"],"t":[],"f":["1"]},"aK":{"H":["1"]},"aS":{"l":[],"am":[]},"aQ":{"l":[],"d":[],"am":[],"p":[]},"bN":{"l":[],"am":[],"p":[]},"a9":{"n":[],"cK":[],"p":[]},"aa":{"v":[]},"aY":{"H":["1"]},"L":{"f":["1"],"f.E":"1"},"ab":{"H":["1"]},"N":{"aC":[],"af":[]},"U":{"bE":["1","2"]},"be":{"f":["1"],"f.E":"1"},"ac":{"H":["1"]},"aO":{"a3":["1"],"c3":["1"],"f":["1"]},"as":{"aO":["1"],"a3":["1"],"c3":["1"],"f":["1"]},"b3":{"Y":[],"v":[]},"bO":{"v":[]},"c9":{"v":[]},"bl":{"az":[]},"a0":{"a8":[]},"bB":{"a8":[]},"bC":{"a8":[]},"c7":{"a8":[]},"c4":{"a8":[]},"ar":{"a8":[]},"c2":{"v":[]},"aX":{"bP":["1","2"]},"aC":{"af":[]},"aT":{"hp":[],"cK":[]},"cj":{"b5":[],"V":[]},"cd":{"f":["b5"],"f.E":"b5"},"bb":{"H":["b5"]},"c6":{"V":[]},"cl":{"f":["V"],"f.E":"V"},"cm":{"H":["V"]},"av":{"t":[],"p":[]},"b1":{"t":[]},"bQ":{"t":[],"p":[]},"aw":{"I":["1"],"t":[]},"b_":{"u":["l"],"q":["l"],"I":["l"],"t":[],"f":["l"],"F":["l"]},"b0":{"u":["d"],"q":["d"],"I":["d"],"t":[],"f":["d"],"F":["d"]},"bR":{"u":["l"],"q":["l"],"I":["l"],"t":[],"f":["l"],"F":["l"],"p":[],"u.E":"l"},"bS":{"u":["l"],"q":["l"],"I":["l"],"t":[],"f":["l"],"F":["l"],"p":[],"u.E":"l"},"bT":{"u":["d"],"q":["d"],"I":["d"],"t":[],"f":["d"],"F":["d"],"p":[],"u.E":"d"},"bU":{"u":["d"],"q":["d"],"I":["d"],"t":[],"f":["d"],"F":["d"],"p":[],"u.E":"d"},"bV":{"u":["d"],"q":["d"],"I":["d"],"t":[],"f":["d"],"F":["d"],"p":[],"u.E":"d"},"bW":{"u":["d"],"q":["d"],"I":["d"],"t":[],"f":["d"],"F":["d"],"p":[],"u.E":"d"},"bX":{"u":["d"],"q":["d"],"I":["d"],"t":[],"f":["d"],"F":["d"],"p":[],"u.E":"d"},"b2":{"u":["d"],"q":["d"],"I":["d"],"t":[],"f":["d"],"F":["d"],"p":[],"u.E":"d"},"bY":{"dX":[],"u":["d"],"q":["d"],"I":["d"],"t":[],"f":["d"],"F":["d"],"p":[],"u.E":"d"},"cg":{"v":[]},"bm":{"Y":[],"v":[]},"ag":{"H":["1"]},"aD":{"f":["1"],"f.E":"1"},"T":{"v":[]},"bc":{"cf":["1"]},"M":{"au":["1"]},"br":{"eG":[]},"ck":{"br":[],"eG":[]},"ad":{"a3":["1"],"c3":["1"],"f":["1"]},"bf":{"H":["1"]},"a3":{"c3":["1"],"f":["1"]},"bk":{"a3":["1"],"c3":["1"],"f":["1"]},"bH":{"aN":["n","q<d>"]},"cc":{"aN":["n","q<d>"]},"l":{"am":[]},"d":{"am":[]},"q":{"f":["1"]},"b5":{"V":[]},"n":{"cK":[]},"bz":{"v":[]},"Y":{"v":[]},"P":{"v":[]},"b4":{"v":[]},"bJ":{"v":[]},"b9":{"v":[]},"c8":{"v":[]},"b8":{"v":[]},"bD":{"v":[]},"b7":{"v":[]},"cn":{"az":[]},"h_":{"q":["d"],"f":["d"]},"dX":{"q":["d"],"f":["d"]},"hu":{"q":["d"],"f":["d"]},"fY":{"q":["d"],"f":["d"]},"hs":{"q":["d"],"f":["d"]},"fZ":{"q":["d"],"f":["d"]},"ht":{"q":["d"],"f":["d"]},"fW":{"q":["l"],"f":["l"]},"fX":{"q":["l"],"f":["l"]}}'))
A.hL(v.typeUniverse,JSON.parse('{"aw":1,"bk":1,"bF":2}'))
var u={c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type",e:"\u041f\u0430\u0441\u043f\u043e\u0440\u0442 \u0444\u043e\u0440\u043c\u0443\u043b \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f Vyplaty Calculator v5"}
var t=(function rtii(){var s=A.aj
return{n:s("T"),p:s("X"),w:s("U<n,n>"),J:s("U<n,l>"),O:s("as<n>"),k:s("at"),C:s("v"),Z:s("a8"),V:s("f<@>"),E:s("r<X>"),f:s("r<m>"),L:s("r<+(n,n)>"),I:s("r<x>"),s:s("r<n>"),b:s("r<e>"),q:s("r<@>"),T:s("aR"),m:s("t"),R:s("a1"),D:s("I<@>"),j:s("q<@>"),P:s("B"),K:s("m"),t:s("Q"),W:s("kr"),h:s("+()"),d:s("b5"),a:s("x"),l:s("az"),N:s("n"),Y:s("n(V)"),r:s("p"),c:s("Y"),B:s("aA"),U:s("L<n>"),e:s("ab<x>"),_:s("M<@>"),y:s("E"),x:s("E(m)"),G:s("E(x)"),au:s("E(n)"),i:s("l"),z:s("@"),bd:s("@()"),v:s("@(m)"),Q:s("@(m,az)"),S:s("d"),bc:s("au<B>?"),aQ:s("t?"),X:s("m?"),u:s("n?"),A:s("n(V)?"),F:s("bd<@,@>?"),g:s("ci?"),cG:s("E?"),dd:s("l?"),a3:s("d?"),ae:s("am?"),H:s("am"),o:s("~"),M:s("~()")}})();(function constants(){var s=hunkHelpers.makeConstList
B.aB=J.bK.prototype
B.c=J.r.prototype
B.f=J.aQ.prototype
B.b=J.aS.prototype
B.h=J.a9.prototype
B.aC=J.a1.prototype
B.aD=J.aV.prototype
B.u=J.bZ.prototype
B.n=J.aA.prototype
B.d=new A.aq(0,"accent")
B.e=new A.aq(1,"success")
B.a=new A.aq(2,"warning")
B.j=new A.aq(3,"purple")
B.o=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.aa=function() {
  var toStringFunction = Object.prototype.toString;
  function getTag(o) {
    var s = toStringFunction.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = toStringFunction.call(object);
      if (name == "[object Object]") return null;
      return "HTMLElement";
    }
  }
  function getUnknownTagGenericBrowser(object, tag) {
    if (object instanceof HTMLElement) return "HTMLElement";
    return getUnknownTag(object, tag);
  }
  function prototypeForTag(tag) {
    if (typeof window == "undefined") return null;
    if (typeof window[tag] == "undefined") return null;
    var constructor = window[tag];
    if (typeof constructor != "function") return null;
    return constructor.prototype;
  }
  function discriminator(tag) { return null; }
  var isBrowser = typeof HTMLElement == "function";
  return {
    getTag: getTag,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
B.af=function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var userAgent = navigator.userAgent;
    if (typeof userAgent != "string") return hooks;
    if (userAgent.indexOf("DumpRenderTree") >= 0) return hooks;
    if (userAgent.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
}
B.ab=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.ae=function(hooks) {
  if (typeof navigator != "object") return hooks;
  var userAgent = navigator.userAgent;
  if (typeof userAgent != "string") return hooks;
  if (userAgent.indexOf("Firefox") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "GeoGeolocation": "Geolocation",
    "Location": "!Location",
    "WorkerMessageEvent": "MessageEvent",
    "XMLDocument": "!Document"};
  function getTagFirefox(o) {
    var tag = getTag(o);
    return quickMap[tag] || tag;
  }
  hooks.getTag = getTagFirefox;
}
B.ad=function(hooks) {
  if (typeof navigator != "object") return hooks;
  var userAgent = navigator.userAgent;
  if (typeof userAgent != "string") return hooks;
  if (userAgent.indexOf("Trident/") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "HTMLDDElement": "HTMLElement",
    "HTMLDTElement": "HTMLElement",
    "HTMLPhraseElement": "HTMLElement",
    "Position": "Geoposition"
  };
  function getTagIE(o) {
    var tag = getTag(o);
    var newTag = quickMap[tag];
    if (newTag) return newTag;
    if (tag == "Object") {
      if (window.DataView && (o instanceof window.DataView)) return "DataView";
    }
    return tag;
  }
  function prototypeForTagIE(tag) {
    var constructor = window[tag];
    if (constructor == null) return null;
    return constructor.prototype;
  }
  hooks.getTag = getTagIE;
  hooks.prototypeForTag = prototypeForTagIE;
}
B.ac=function(hooks) {
  var getTag = hooks.getTag;
  var prototypeForTag = hooks.prototypeForTag;
  function getTagFixed(o) {
    var tag = getTag(o);
    if (tag == "Document") {
      if (!!o.xmlVersion) return "!Document";
      return "!HTMLDocument";
    }
    return tag;
  }
  function prototypeForTagFixed(tag) {
    if (tag == "Document") return null;
    return prototypeForTag(tag);
  }
  hooks.getTag = getTagFixed;
  hooks.prototypeForTag = prototypeForTagFixed;
}
B.p=function(hooks) { return hooks; }

B.k=new A.cM()
B.q=new A.cc()
B.ag=new A.cP()
B.i=new A.ck()
B.l=new A.cn()
B.ah=new A.bI(0,"familyPayment")
B.r=new A.bI(2,"calculator")
B.ak=new A.w("imputed_alimony_2026","\u0421\u0424\u0420: \u043f\u0440\u0430\u0432\u0438\u043b\u0430 \u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0435\u0434\u0438\u043d\u043e\u0433\u043e \u043f\u043e\u0441\u043e\u0431\u0438\u044f \u0441 2026 \u0433\u043e\u0434\u0430; \u0420\u043e\u0441\u0441\u0442\u0430\u0442: \u0441\u0440\u0435\u0434\u043d\u0435\u043c\u0435\u0441\u044f\u0447\u043d\u0430\u044f \u043d\u043e\u043c\u0438\u043d\u0430\u043b\u044c\u043d\u0430\u044f \u043d\u0430\u0447\u0438\u0441\u043b\u0435\u043d\u043d\u0430\u044f \u0437\u0430\u0440\u043f\u043b\u0430\u0442\u0430 \u043f\u043e \u0441\u0443\u0431\u044a\u0435\u043a\u0442\u0430\u043c \u0420\u0424 (2025)")
B.aw=new A.w("unified_pp440_2026","\u041f\u043e\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u041f\u0440\u0430\u0432\u0438\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u0430 \u0420\u0424 \u043e\u0442 20.04.2026 \u2116440 (\u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0432 \u041f\u041f \u21162330), \u043e\u0444\u0438\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0439 \u0442\u0435\u043a\u0441\u0442")
B.at=new A.w("unified_bank_inflow_pilot_2026","\u041f\u043e\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u041f\u0440\u0430\u0432\u0438\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u0430 \u0420\u0424 \u043e\u0442 29.12.2025 \u21162207, \u043e\u0444\u0438\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0439 \u0442\u0435\u043a\u0441\u0442")
B.as=new A.w("disabled_child_2026","\u0421\u0424\u0420: \u0432\u044b\u043f\u043b\u0430\u0442\u0430 \u043f\u043e \u0443\u0445\u043e\u0434\u0443 \u0437\u0430 \u0434\u0435\u0442\u044c\u043c\u0438-\u0438\u043d\u0432\u0430\u043b\u0438\u0434\u0430\u043c\u0438; \u0421\u0424\u0420 (\u0412\u043e\u043b\u043e\u0433\u043e\u0434\u0441\u043a\u043e\u0435 \u043e\u0442\u0434\u0435\u043b\u0435\u043d\u0438\u0435): \u0415\u0414\u0412 \u0441 01.02.2026")
B.ai=new A.w("mat_capital_2026","\u0421\u0424\u0420: \u0420\u0430\u0437\u043c\u0435\u0440 \u043c\u0430\u0442\u0435\u0440\u0438\u043d\u0441\u043a\u043e\u0433\u043e (\u0441\u0435\u043c\u0435\u0439\u043d\u043e\u0433\u043e) \u043a\u0430\u043f\u0438\u0442\u0430\u043b\u0430 \u0441 1 \u0444\u0435\u0432\u0440\u0430\u043b\u044f 2026 \u0433\u043e\u0434\u0430")
B.aA=new A.w("childcare_1_5_2026","\u0421\u0424\u0420: \u043f\u043e\u0441\u043e\u0431\u0438\u0435 \u043f\u043e \u0443\u0445\u043e\u0434\u0443 \u0437\u0430 \u0440\u0435\u0431\u0451\u043d\u043a\u043e\u043c \u0434\u043e 1,5 \u043b\u0435\u0442")
B.az=new A.w("bir_2026","\u0421\u0424\u0420: \u043d\u043e\u0432\u043e\u0441\u0442\u0438 \u043f\u043e \u043f\u043e\u0441\u043e\u0431\u0438\u044e \u043f\u043e \u0431\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u0438 \u0440\u043e\u0434\u0430\u043c \u0437\u0430 2026 \u0433\u043e\u0434")
B.al=new A.w("indexation_2026","\u041e\u0444\u0438\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0435 \u043e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u043d\u0438\u0435 \u043f\u0440\u0430\u0432\u043e\u0432\u044b\u0445 \u0430\u043a\u0442\u043e\u0432: \u041f\u043e\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u041f\u0440\u0430\u0432\u0438\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u0430 \u0420\u0424 \u043e\u0442 23.01.2026 \u2116 30")
B.ar=new A.w("unified_benefit_2026","\u0421\u0424\u0420: \u0440\u0435\u0433\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b \u043f\u043e \u0435\u0434\u0438\u043d\u043e\u043c\u0443 \u043f\u043e\u0441\u043e\u0431\u0438\u044e")
B.au=new A.w("methodology_family_support",u.e)
B.ao=new A.w("methodology_tax_support",u.e)
B.ap=new A.w("methodology_employment_support",u.e)
B.aq=new A.w("methodology_housing_support",u.e)
B.ay=new A.w("methodology_pension_support",u.e)
B.aj=new A.w("methodology_social_support",u.e)
B.ax=new A.w("methodology_military_support",u.e)
B.an=new A.w("methodology_regional_support",u.e)
B.av=new A.w("regional_mat_cap_2026","\u041e\u0444\u0438\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0435 \u043f\u043e\u0440\u0442\u0430\u043b\u044b \u0441\u043e\u0446\u0437\u0430\u0449\u0438\u0442\u044b \u0441\u0443\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u0420\u0424 + \u0434\u0443\u0431\u043b\u0438\u0440\u0443\u044e\u0449\u0438\u0439 \u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a \u043f\u043e \u043a\u0430\u0436\u0434\u043e\u043c\u0443 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044e (\u0441\u0432\u0435\u0440\u043a\u0430 \u0438\u044e\u043b\u044f 2026)")
B.am=new A.w("methodology_honor_support",u.e)
B.aE=s([B.ak,B.aw,B.at,B.as,B.ai,B.aA,B.az,B.al,B.ar,B.au,B.ao,B.ap,B.aq,B.ay,B.aj,B.ax,B.an,B.av,B.am],A.aj("r<w>"))
B.v=new A.N("","\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435")
B.aZ=new A.N("single","\u041d\u0435 \u0432 \u0431\u0440\u0430\u043a\u0435")
B.b0=new A.N("married","\u0412 \u0431\u0440\u0430\u043a\u0435")
B.b1=new A.N("divorced","\u0420\u0430\u0437\u0432\u0435\u0434\u0451\u043d(\u0430)")
B.b_=new A.N("widow","\u0412\u0434\u043e\u0432\u0435\u0446 / \u0432\u0434\u043e\u0432\u0430")
B.aF=s([B.v,B.aZ,B.b0,B.b1,B.b_],t.L)
B.cJ=new A.x("99","\u041d\u0435\u0442 \u0434\u0435\u0442\u0435\u0439")
B.cv=new A.x("0","\u0414\u043e 1 \u0433\u043e\u0434\u0430")
B.cy=new A.x("1.5","\u0414\u043e 1,5 \u043b\u0435\u0442")
B.cx=new A.x("3","\u0414\u043e 3 \u043b\u0435\u0442")
B.cF=new A.x("7","\u0414\u043e 7 \u043b\u0435\u0442")
B.cG=new A.x("17","\u0414\u043e 17 \u043b\u0435\u0442")
B.aG=s([B.cJ,B.cv,B.cy,B.cx,B.cF,B.cG],t.I)
B.dV=s(["\u043e\u0431\u044b\u0447\u043d\u044b\u0439","\u0444\u0435\u0434\u0435\u0440\u0430\u043b\u044c\u043d\u044b\u0439"],t.s)
B.bJ=new A.b("regular","\u041e\u0431\u044b\u0447\u043d\u044b\u0439 \u0440\u0435\u0433\u0438\u043e\u043d",!1,!1,!1,18939,20644,18371,null,null,null,null,3)
B.fd=s(["\u0441\u0435\u0432\u0435\u0440","\u0441\u0435\u0432\u0435\u0440\u043d\u044b\u0439"],t.s)
B.bO=new A.b("north","\u041a\u0440\u0430\u0439\u043d\u0438\u0439 \u0421\u0435\u0432\u0435\u0440",!1,!0,!1,18939,20644,18371,null,null,null,null,3)
B.e7=s(["\u0434\u0444\u043e","\u0434\u0430\u043b\u044c\u043d\u0438\u0439 \u0432\u043e\u0441\u0442\u043e\u043a"],t.s)
B.bb=new A.b("dfo","\u0414\u0430\u043b\u044c\u043d\u0438\u0439 \u0412\u043e\u0441\u0442\u043e\u043a (legacy)",!1,!1,!0,18939,20644,18371,null,null,null,null,3)
B.eX=s(["\u043c\u043e\u0441\u043a\u0432\u0430","\u043c\u043e\u0441","msk"],t.s)
B.cj=new A.b("moscow","\u041c\u043e\u0441\u043a\u0432\u0430",!0,!1,!1,25342,28940,21903,5000,2500,25e3,null,3)
B.dO=s(["\u0441\u0430\u043d\u043a\u0442-\u043f\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433","\u043f\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433","\u0441\u043f\u0431","spb"],t.s)
B.bF=new A.b("spb","\u0421\u0430\u043d\u043a\u0442-\u041f\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433",!1,!1,!1,20644,22502,20025,null,null,null,224578,3)
B.e_=s(["\u0441\u0435\u0432\u0430\u0441\u0442\u043e\u043f\u043e\u043b\u044c"],t.s)
B.bc=new A.b("sevastopol","\u0433. \u0421\u0435\u0432\u0430\u0441\u0442\u043e\u043f\u043e\u043b\u044c",!1,!1,!1,19318,21057,18738,null,null,null,null,3)
B.dY=s(["\u0430\u0434\u044b\u0433\u0435\u044f","\u043c\u0430\u0439\u043a\u043e\u043f"],t.s)
B.bw=new A.b("adygea","\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0410\u0434\u044b\u0433\u0435\u044f",!1,!1,!1,16288,17754,15799,null,null,null,5e4,3)
B.dU=s(["\u0430\u043b\u0442\u0430\u0439 \u0440\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430","\u0433\u043e\u0440\u043d\u044b\u0439 \u0430\u043b\u0442\u0430\u0439","\u0433\u043e\u0440\u043d\u043e-\u0430\u043b\u0442\u0430\u0439\u0441\u043a"],t.s)
B.c2=new A.b("altai_republic","\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0410\u043b\u0442\u0430\u0439",!1,!1,!1,17992,19611,17452,null,null,null,83850,3)
B.ee=s(["\u0431\u0430\u0448\u043a\u043e\u0440\u0442\u043e\u0441\u0442\u0430\u043d","\u0431\u0430\u0448\u043a\u0438\u0440\u0438\u044f","\u0443\u0444\u0430"],t.s)
B.bt=new A.b("bashkortostan","\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0411\u0430\u0448\u043a\u043e\u0440\u0442\u043e\u0441\u0442\u0430\u043d",!1,!1,!1,16856,18373,16350,null,null,null,622800,3)
B.f7=s(["\u0431\u0443\u0440\u044f\u0442\u0438\u044f","\u0443\u043b\u0430\u043d-\u0443\u0434\u044d"],t.s)
B.bu=new A.b("buryatia","\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0411\u0443\u0440\u044f\u0442\u0438\u044f",!1,!1,!0,20644,22502,20025,null,null,null,218676,2)
B.eO=s(["\u0434\u0430\u0433\u0435\u0441\u0442\u0430\u043d","\u043c\u0430\u0445\u0430\u0447\u043a\u0430\u043b\u0430"],t.s)
B.bE=new A.b("dagestan","\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0414\u0430\u0433\u0435\u0441\u0442\u0430\u043d",!1,!1,!1,17234,18785,16717,null,null,null,3e5,5)
B.eE=s(["\u0438\u043d\u0433\u0443\u0448\u0435\u0442\u0438\u044f","\u043c\u0430\u0433\u0430\u0441"],t.s)
B.bG=new A.b("ingushetia","\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0418\u043d\u0433\u0443\u0448\u0435\u0442\u0438\u044f",!1,!1,!1,17803,19405,17269,null,null,null,null,3)
B.eZ=s(["\u043a\u0430\u0431\u0430\u0440\u0434\u0438\u043d\u043e-\u0431\u0430\u043b\u043a\u0430\u0440\u0438\u044f","\u043a\u0431\u0440","\u043d\u0430\u043b\u044c\u0447\u0438\u043a"],t.s)
B.bY=new A.b("kabardino_balkaria","\u041a\u0430\u0431\u0430\u0440\u0434\u0438\u043d\u043e-\u0411\u0430\u043b\u043a\u0430\u0440\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",!1,!1,!1,20265,22089,19657,null,null,null,null,3)
B.f2=s(["\u043a\u0430\u043b\u043c\u044b\u043a\u0438\u044f","\u044d\u043b\u0438\u0441\u0442\u0430"],t.s)
B.bD=new A.b("kalmykia","\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041a\u0430\u043b\u043c\u044b\u043a\u0438\u044f",!1,!1,!1,18560,20230,18003,null,null,null,1e5,3)
B.e2=s(["\u043a\u0430\u0440\u0430\u0447\u0430\u0435\u0432\u043e-\u0447\u0435\u0440\u043a\u0435\u0441\u0438\u044f","\u043a\u0447\u0440","\u0447\u0435\u0440\u043a\u0435\u0441\u0441\u043a"],t.s)
B.bZ=new A.b("karachay_cherkessia","\u041a\u0430\u0440\u0430\u0447\u0430\u0435\u0432\u043e-\u0427\u0435\u0440\u043a\u0435\u0441\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",!1,!1,!1,17803,19405,17269,null,null,null,15e4,4)
B.ej=s(["\u043a\u0430\u0440\u0435\u043b\u0438\u044f","\u043f\u0435\u0442\u0440\u043e\u0437\u0430\u0432\u043e\u0434\u0441\u043a"],t.s)
B.bC=new A.b("karelia","\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041a\u0430\u0440\u0435\u043b\u0438\u044f",!1,!0,!1,21022,22914,20391,null,null,null,105500,3)
B.e6=s(["\u043a\u043e\u043c\u0438","\u0441\u044b\u043a\u0442\u044b\u0432\u043a\u0430\u0440"],t.s)
B.cg=new A.b("komi","\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041a\u043e\u043c\u0438",!1,!0,!1,21780,23740,21127,null,null,null,3e5,3)
B.eg=s(["\u043a\u0440\u044b\u043c","\u0441\u0438\u043c\u0444\u0435\u0440\u043e\u043f\u043e\u043b\u044c"],t.s)
B.bf=new A.b("crimea","\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041a\u0440\u044b\u043c",!1,!1,!1,18371,20024,17820,null,null,null,null,3)
B.fa=s(["\u043c\u0430\u0440\u0438\u0439 \u044d\u043b","\u0439\u043e\u0448\u043a\u0430\u0440-\u043e\u043b\u0430"],t.s)
B.cr=new A.b("mari_el","\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041c\u0430\u0440\u0438\u0439 \u042d\u043b",!1,!1,!1,16666,18166,16166,null,null,null,null,3)
B.eA=s(["\u043c\u043e\u0440\u0434\u043e\u0432\u0438\u044f","\u0441\u0430\u0440\u0430\u043d\u0441\u043a"],t.s)
B.cl=new A.b("mordovia","\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041c\u043e\u0440\u0434\u043e\u0432\u0438\u044f",!1,!1,!1,16098,17547,15615,null,null,null,135753,3)
B.ec=s(["\u0441\u0430\u0445\u0430","\u044f\u043a\u0443\u0442\u0438\u044f","\u044f\u043a\u0443\u0442\u0441\u043a"],t.s)
B.c5=new A.b("sakha","\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0421\u0430\u0445\u0430 (\u042f\u043a\u0443\u0442\u0438\u044f)",!1,!0,!0,28598,31172,27740,null,null,null,3e5,3)
B.eT=s(["\u0441\u0435\u0432\u0435\u0440\u043d\u0430\u044f \u043e\u0441\u0435\u0442\u0438\u044f","\u0430\u043b\u0430\u043d\u0438\u044f","\u0432\u043b\u0430\u0434\u0438\u043a\u0430\u0432\u043a\u0430\u0437"],t.s)
B.bl=new A.b("north_ossetia","\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0421\u0435\u0432\u0435\u0440\u043d\u0430\u044f \u041e\u0441\u0435\u0442\u0438\u044f \u2014 \u0410\u043b\u0430\u043d\u0438\u044f",!1,!1,!1,17045,18579,16534,null,null,null,5e4,3)
B.eb=s(["\u0442\u0430\u0442\u0430\u0440\u0441\u0442\u0430\u043d","\u0442\u0430\u0442\u0430\u0440\u0438\u044f","\u043a\u0430\u0437\u0430\u043d\u044c","\u0440\u0442"],t.s)
B.bn=new A.b("tatarstan","\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0422\u0430\u0442\u0430\u0440\u0441\u0442\u0430\u043d",!1,!1,!1,16098,17547,15615,null,null,null,1e5,3)
B.eS=s(["\u0442\u044b\u0432\u0430","\u0442\u0443\u0432\u0430","\u043a\u044b\u0437\u044b\u043b"],t.s)
B.ce=new A.b("tyva","\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0422\u044b\u0432\u0430",!1,!1,!1,19128,20850,18554,null,null,null,null,3)
B.f8=s(["\u0443\u0434\u043c\u0443\u0440\u0442\u0438\u044f","\u0438\u0436\u0435\u0432\u0441\u043a"],t.s)
B.cs=new A.b("udmurtia","\u0423\u0434\u043c\u0443\u0440\u0442\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",!1,!1,!1,16856,18373,16350,null,null,null,null,3)
B.em=s(["\u0445\u0430\u043a\u0430\u0441\u0438\u044f","\u0430\u0431\u0430\u043a\u0430\u043d"],t.s)
B.ci=new A.b("khakassia","\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0425\u0430\u043a\u0430\u0441\u0438\u044f",!1,!1,!1,19318,21057,18738,null,null,null,null,3)
B.eD=s(["\u0447\u0435\u0447\u043d\u044f","\u0433\u0440\u043e\u0437\u043d\u044b\u0439"],t.s)
B.bj=new A.b("chechnya","\u0427\u0435\u0447\u0435\u043d\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",!1,!1,!1,18181,19817,17636,null,null,null,null,3)
B.dW=s(["\u0447\u0443\u0432\u0430\u0448\u0438\u044f","\u0447\u0435\u0431\u043e\u043a\u0441\u0430\u0440\u044b"],t.s)
B.cc=new A.b("chuvashia","\u0427\u0443\u0432\u0430\u0448\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",!1,!1,!1,16477,17960,15983,null,null,null,2e5,3)
B.ex=s(["\u0430\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439","\u0431\u0430\u0440\u043d\u0430\u0443\u043b"],t.s)
B.c6=new A.b("altai_krai","\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",!1,!1,!1,16856,18373,16350,null,null,null,95525,3)
B.f4=s(["\u0437\u0430\u0431\u0430\u0439\u043a\u0430\u043b\u044c\u0441\u043a\u0438\u0439","\u0437\u0430\u0431\u0430\u0439\u043a\u0430\u043b\u044c\u0435","\u0447\u0438\u0442\u0430"],t.s)
B.b5=new A.b("zabaykalsky","\u0417\u0430\u0431\u0430\u0439\u043a\u0430\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",!1,!1,!0,22159,24153,21494,null,null,null,249907,2)
B.e9=s(["\u043a\u0430\u043c\u0447\u0430\u0442\u043a\u0430","\u043f\u0435\u0442\u0440\u043e\u043f\u0430\u0432\u043b\u043e\u0432\u0441\u043a-\u043a\u0430\u043c\u0447\u0430\u0442\u0441\u043a\u0438\u0439"],t.s)
B.bm=new A.b("kamchatka","\u041a\u0430\u043c\u0447\u0430\u0442\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",!1,!0,!0,33333,36333,32333,null,null,null,160975,1)
B.eJ=s(["\u043a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440","\u043a\u0443\u0431\u0430\u043d\u044c","\u0441\u043e\u0447\u0438","\u043d\u043e\u0432\u043e\u0440\u043e\u0441\u0441\u0438\u0439\u0441\u043a"],t.s)
B.cp=new A.b("krasnodar","\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",!1,!1,!1,18181,19817,17636,null,null,null,167135,3)
B.dT=s(["\u043a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a","\u043a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439"],t.s)
B.cq=new A.b("krasnoyarsk","\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",!1,!0,!1,21022,22914,20391,null,null,null,196470,3)
B.eY=s(["\u043f\u0435\u0440\u043c\u044c","\u043f\u0435\u0440\u043c\u0441\u043a\u0438\u0439"],t.s)
B.c8=new A.b("perm","\u041f\u0435\u0440\u043c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",!1,!1,!1,17424,18992,16901,null,null,null,null,3)
B.f0=s(["\u043f\u0440\u0438\u043c\u043e\u0440\u0441\u043a\u0438\u0439","\u043f\u0440\u0438\u043c\u043e\u0440\u044c\u0435","\u0432\u043b\u0430\u0434\u0438\u0432\u043e\u0441\u0442\u043e\u043a"],t.s)
B.c9=new A.b("primorsky","\u041f\u0440\u0438\u043c\u043e\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",!1,!1,!0,22537,24565,21861,null,null,null,248393,3)
B.e3=s(["\u0441\u0442\u0430\u0432\u0440\u043e\u043f\u043e\u043b\u044c","\u0441\u0442\u0430\u0432\u0440\u043e\u043f\u043e\u043b\u044c\u0441\u043a\u0438\u0439"],t.s)
B.ba=new A.b("stavropol","\u0421\u0442\u0430\u0432\u0440\u043e\u043f\u043e\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",!1,!1,!1,17045,18579,16534,null,null,null,null,3)
B.f_=s(["\u0445\u0430\u0431\u0430\u0440\u043e\u0432\u0441\u043a","\u0445\u0430\u0431\u0430\u0440\u043e\u0432\u0441\u043a\u0438\u0439"],t.s)
B.cf=new A.b("khabarovsk","\u0425\u0430\u0431\u0430\u0440\u043e\u0432\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",!1,!1,!0,23106,25186,23758,null,null,null,288973,2)
B.f1=s(["\u0430\u043c\u0443\u0440\u0441\u043a\u0430\u044f","\u0431\u043b\u0430\u0433\u043e\u0432\u0435\u0449\u0435\u043d\u0441\u043a"],t.s)
B.c4=new A.b("amur","\u0410\u043c\u0443\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!0,21780,23740,21215,null,null,null,249907,2)
B.eR=s(["\u0430\u0440\u0445\u0430\u043d\u0433\u0435\u043b\u044c\u0441\u043a\u0430\u044f","\u0430\u0440\u0445\u0430\u043d\u0433\u0435\u043b\u044c\u0441\u043a"],t.s)
B.bB=new A.b("arkhangelsk","\u0410\u0440\u0445\u0430\u043d\u0433\u0435\u043b\u044c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!0,!1,21969,23946,21310,null,null,null,124609,3)
B.dZ=s(["\u0430\u0441\u0442\u0440\u0430\u0445\u0430\u043d\u0441\u043a\u0430\u044f","\u0430\u0441\u0442\u0440\u0430\u0445\u0430\u043d\u044c"],t.s)
B.cm=new A.b("astrakhan","\u0410\u0441\u0442\u0440\u0430\u0445\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,18371,20024,17820,null,null,null,null,3)
B.eV=s(["\u0431\u0435\u043b\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f","\u0431\u0435\u043b\u0433\u043e\u0440\u043e\u0434"],t.s)
B.ca=new A.b("belgorod","\u0411\u0435\u043b\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,15909,17341,15432,null,null,null,15e4,3)
B.eN=s(["\u0431\u0440\u044f\u043d\u0441\u043a\u0430\u044f","\u0431\u0440\u044f\u043d\u0441\u043a"],t.s)
B.ck=new A.b("bryansk","\u0411\u0440\u044f\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,17424,18992,16901,null,null,null,2e5,3)
B.dM=s(["\u0432\u043b\u0430\u0434\u0438\u043c\u0438\u0440\u0441\u043a\u0430\u044f","\u0432\u043b\u0430\u0434\u0438\u043c\u0438\u0440"],t.s)
B.bq=new A.b("vladimir","\u0412\u043b\u0430\u0434\u0438\u043c\u0438\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,18371,20024,17820,null,null,null,78758,3)
B.eU=s(["\u0432\u043e\u043b\u0433\u043e\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f","\u0432\u043e\u043b\u0433\u043e\u0433\u0440\u0430\u0434"],t.s)
B.c7=new A.b("volgograd","\u0412\u043e\u043b\u0433\u043e\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,16288,17754,15799,null,null,null,89e3,3)
B.eH=s(["\u0432\u043e\u043b\u043e\u0433\u043e\u0434\u0441\u043a\u0430\u044f","\u0432\u043e\u043b\u043e\u0433\u0434\u0430"],t.s)
B.bR=new A.b("vologda","\u0412\u043e\u043b\u043e\u0433\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,19128,20850,18555,null,null,null,null,3)
B.et=s(["\u0432\u043e\u0440\u043e\u043d\u0435\u0436\u0441\u043a\u0430\u044f","\u0432\u043e\u0440\u043e\u043d\u0435\u0436"],t.s)
B.bz=new A.b("voronezh","\u0412\u043e\u0440\u043e\u043d\u0435\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,16666,18166,16166,null,null,null,16e4,3)
B.eM=s(["\u0437\u0430\u043f\u043e\u0440\u043e\u0436\u0441\u043a\u0430\u044f","\u0437\u0430\u043f\u043e\u0440\u043e\u0436\u044c\u0435"],t.s)
B.c0=new A.b("zaporizhzhia","\u0417\u0430\u043f\u043e\u0440\u043e\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,18371,20024,17820,null,null,null,null,3)
B.eo=s(["\u0438\u0432\u0430\u043d\u043e\u0432\u0441\u043a\u0430\u044f","\u0438\u0432\u0430\u043d\u043e\u0432\u043e"],t.s)
B.bA=new A.b("ivanovo","\u0418\u0432\u0430\u043d\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,17803,19405,17269,null,null,null,5e4,3)
B.e8=s(["\u0438\u0440\u043a\u0443\u0442\u0441\u043a\u0430\u044f","\u0438\u0440\u043a\u0443\u0442\u0441\u043a"],t.s)
B.cb=new A.b("irkutsk","\u0418\u0440\u043a\u0443\u0442\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!0,!1,20075,21882,19473,null,null,null,162034,2)
B.f3=s(["\u043a\u0430\u043b\u0438\u043d\u0438\u043d\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f","\u043a\u0430\u043b\u0438\u043d\u0438\u043d\u0433\u0440\u0430\u0434"],t.s)
B.bH=new A.b("kaliningrad","\u041a\u0430\u043b\u0438\u043d\u0438\u043d\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,19507,21263,18922,null,null,null,null,3)
B.fc=s(["\u043a\u0430\u043b\u0443\u0436\u0441\u043a\u0430\u044f","\u043a\u0430\u043b\u0443\u0433\u0430"],t.s)
B.b6=new A.b("kaluga","\u041a\u0430\u043b\u0443\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,18181,19817,17636,null,null,null,1e5,3)
B.ek=s(["\u043a\u0435\u043c\u0435\u0440\u043e\u0432\u0441\u043a\u0430\u044f","\u043a\u0443\u0437\u0431\u0430\u0441\u0441","\u043a\u0435\u043c\u0435\u0440\u043e\u0432\u043e"],t.s)
B.bP=new A.b("kemerovo","\u041a\u0435\u043c\u0435\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c \u2014 \u041a\u0443\u0437\u0431\u0430\u0441\u0441",!1,!1,!1,17234,18785,16717,null,null,null,13e4,3)
B.dN=s(["\u043a\u0438\u0440\u043e\u0432\u0441\u043a\u0430\u044f","\u043a\u0438\u0440\u043e\u0432"],t.s)
B.co=new A.b("kirov","\u041a\u0438\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,16856,18373,16350,null,null,null,null,3)
B.e4=s(["\u043a\u043e\u0441\u0442\u0440\u043e\u043c\u0441\u043a\u0430\u044f","\u043a\u043e\u0441\u0442\u0440\u043e\u043c\u0430"],t.s)
B.b3=new A.b("kostroma","\u041a\u043e\u0441\u0442\u0440\u043e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,17424,18992,16901,null,null,null,null,3)
B.ei=s(["\u043a\u0443\u0440\u0433\u0430\u043d\u0441\u043a\u0430\u044f","\u043a\u0443\u0440\u0433\u0430\u043d"],t.s)
B.c_=new A.b("kurgan","\u041a\u0443\u0440\u0433\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,17803,19405,17269,null,null,null,null,3)
B.eF=s(["\u043a\u0443\u0440\u0441\u043a\u0430\u044f","\u043a\u0443\u0440\u0441\u043a"],t.s)
B.bk=new A.b("kursk","\u041a\u0443\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,16477,17960,15983,null,null,null,122667,3)
B.dR=s(["\u043b\u0435\u043d\u0438\u043d\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f","\u043b\u0435\u043d\u043e\u0431\u043b\u0430\u0441\u0442\u044c"],t.s)
B.b2=new A.b("leningrad","\u041b\u0435\u043d\u0438\u043d\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,20265,22089,19657,null,null,null,125e3,2)
B.ev=s(["\u043b\u0438\u043f\u0435\u0446\u043a\u0430\u044f","\u043b\u0438\u043f\u0435\u0446\u043a"],t.s)
B.bS=new A.b("lipetsk","\u041b\u0438\u043f\u0435\u0446\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,15719,17134,15247,null,null,null,1e5,3)
B.es=s(["\u043b\u043d\u0440","\u043b\u0443\u0433\u0430\u043d\u0441\u043a\u0430\u044f","\u043b\u0443\u0433\u0430\u043d\u0441\u043a"],t.s)
B.b9=new A.b("lugansk","\u041b\u0443\u0433\u0430\u043d\u0441\u043a\u0430\u044f \u041d\u0430\u0440\u043e\u0434\u043d\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",!1,!1,!1,17803,19405,17269,null,null,null,null,3)
B.ed=s(["\u043c\u0430\u0433\u0430\u0434\u0430\u043d\u0441\u043a\u0430\u044f","\u043c\u0430\u0433\u0430\u0434\u0430\u043d"],t.s)
B.bT=new A.b("magadan","\u041c\u0430\u0433\u0430\u0434\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!0,!0,32954,35920,32062,null,null,null,3e5,3)
B.e0=s(["\u043c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c","\u043f\u043e\u0434\u043c\u043e\u0441\u043a\u043e\u0432\u044c\u0435","\u043c\u043e"],t.s)
B.bU=new A.b("mo","\u041c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!0,!1,!1,20286,22112,19677,null,null,null,null,3)
B.ey=s(["\u043c\u0443\u0440\u043c\u0430\u043d\u0441\u043a\u0430\u044f","\u043c\u0443\u0440\u043c\u0430\u043d\u0441\u043a"],t.s)
B.ct=new A.b("murmansk","\u041c\u0443\u0440\u043c\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!0,!1,26406,28783,25614,null,null,null,149373,3)
B.dS=s(["\u043d\u0438\u0436\u0435\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f","\u043d\u0438\u0436\u043d\u0438\u0439 \u043d\u043e\u0432\u0433\u043e\u0440\u043e\u0434","\u043d\u043d"],t.s)
B.bp=new A.b("nizhny_novgorod","\u041d\u0438\u0436\u0435\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,17803,19405,17269,null,null,null,1e6,3)
B.ea=s(["\u043d\u043e\u0432\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f","\u0432\u0435\u043b\u0438\u043a\u0438\u0439 \u043d\u043e\u0432\u0433\u043e\u0440\u043e\u0434"],t.s)
B.b7=new A.b("novgorod","\u041d\u043e\u0432\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,18560,20230,18003,null,null,null,25e4,3)
B.e5=s(["\u043d\u043e\u0432\u043e\u0441\u0438\u0431\u0438\u0440\u0441\u043a\u0430\u044f","\u043d\u043e\u0432\u043e\u0441\u0438\u0431\u0438\u0440\u0441\u043a"],t.s)
B.bv=new A.b("novosibirsk","\u041d\u043e\u0432\u043e\u0441\u0438\u0431\u0438\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,18560,20230,18003,null,null,null,163141,3)
B.eC=s(["\u043e\u043c\u0441\u043a\u0430\u044f","\u043e\u043c\u0441\u043a"],t.s)
B.cd=new A.b("omsk","\u041e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,16477,17960,15983,null,null,null,null,3)
B.f5=s(["\u043e\u0440\u0435\u043d\u0431\u0443\u0440\u0433\u0441\u043a\u0430\u044f","\u043e\u0440\u0435\u043d\u0431\u0443\u0440\u0433"],t.s)
B.bd=new A.b("orenburg","\u041e\u0440\u0435\u043d\u0431\u0443\u0440\u0433\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,16477,17960,15983,null,null,null,155702,3)
B.fb=s(["\u043e\u0440\u043b\u043e\u0432\u0441\u043a\u0430\u044f","\u043e\u0440\u0451\u043b","\u043e\u0440\u0435\u043b"],t.s)
B.ch=new A.b("orel","\u041e\u0440\u043b\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,17613,19198,17085,null,null,null,null,3)
B.dP=s(["\u043f\u0435\u043d\u0437\u0435\u043d\u0441\u043a\u0430\u044f","\u043f\u0435\u043d\u0437\u0430"],t.s)
B.bi=new A.b("penza","\u041f\u0435\u043d\u0437\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,15909,17341,15432,null,null,null,null,3)
B.dQ=s(["\u043f\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f","\u043f\u0441\u043a\u043e\u0432"],t.s)
B.c1=new A.b("pskov","\u041f\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,18750,20438,18188,null,null,null,107500,3)
B.ef=s(["\u0440\u043e\u0441\u0442\u043e\u0432\u0441\u043a\u0430\u044f","\u0440\u043e\u0441\u0442\u043e\u0432"],t.s)
B.bW=new A.b("rostov","\u0420\u043e\u0441\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,17803,19405,17269,null,null,null,162307,3)
B.ez=s(["\u0440\u044f\u0437\u0430\u043d\u0441\u043a\u0430\u044f","\u0440\u044f\u0437\u0430\u043d\u044c"],t.s)
B.bV=new A.b("ryazan","\u0420\u044f\u0437\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,16856,18373,16350,null,null,null,93352,3)
B.eL=s(["\u0441\u0430\u043c\u0430\u0440\u0441\u043a\u0430\u044f","\u0441\u0430\u043c\u0430\u0440\u0430","\u0442\u043e\u043b\u044c\u044f\u0442\u0442\u0438"],t.s)
B.bN=new A.b("samara","\u0421\u0430\u043c\u0430\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,17803,19405,17269,null,null,null,1e5,3)
B.f6=s(["\u0441\u0430\u0440\u0430\u0442\u043e\u0432\u0441\u043a\u0430\u044f","\u0441\u0430\u0440\u0430\u0442\u043e\u0432"],t.s)
B.c3=new A.b("saratov","\u0421\u0430\u0440\u0430\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,15909,17341,15432,null,null,null,107848,3)
B.eu=s(["\u0441\u0430\u0445\u0430\u043b\u0438\u043d\u0441\u043a\u0430\u044f","\u0441\u0430\u0445\u0430\u043b\u0438\u043d","\u044e\u0436\u043d\u043e-\u0441\u0430\u0445\u0430\u043b\u0438\u043d\u0441\u043a"],t.s)
B.bx=new A.b("sakhalin","\u0421\u0430\u0445\u0430\u043b\u0438\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!0,!0,25757,28075,24984,null,null,null,5e5,2)
B.e1=s(["\u0441\u0432\u0435\u0440\u0434\u043b\u043e\u0432\u0441\u043a\u0430\u044f","\u0435\u043a\u0430\u0442\u0435\u0440\u0438\u043d\u0431\u0443\u0440\u0433","\u0441\u0432\u0435\u0440\u0434\u043b\u043e\u0432\u0441\u043a"],t.s)
B.bs=new A.b("sverdlovsk","\u0421\u0432\u0435\u0440\u0434\u043b\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,18750,20438,18188,null,null,null,182493,3)
B.eG=s(["\u0441\u043c\u043e\u043b\u0435\u043d\u0441\u043a\u0430\u044f","\u0441\u043c\u043e\u043b\u0435\u043d\u0441\u043a"],t.s)
B.bg=new A.b("smolensk","\u0421\u043c\u043e\u043b\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,18750,20438,18188,null,null,null,163300,3)
B.el=s(["\u0442\u0430\u043c\u0431\u043e\u0432\u0441\u043a\u0430\u044f","\u0442\u0430\u043c\u0431\u043e\u0432"],t.s)
B.cn=new A.b("tambov","\u0422\u0430\u043c\u0431\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,15719,17134,15247,null,null,null,3e5,3)
B.ew=s(["\u0442\u0432\u0435\u0440\u0441\u043a\u0430\u044f","\u0442\u0432\u0435\u0440\u044c"],t.s)
B.bQ=new A.b("tver","\u0422\u0432\u0435\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,18560,20230,18003,null,null,null,null,3)
B.en=s(["\u0442\u043e\u043c\u0441\u043a\u0430\u044f","\u0442\u043e\u043c\u0441\u043a"],t.s)
B.cu=new A.b("tomsk","\u0422\u043e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!0,!1,18560,20230,18003,null,null,null,1e5,3)
B.eq=s(["\u0442\u0443\u043b\u044c\u0441\u043a\u0430\u044f","\u0442\u0443\u043b\u0430"],t.s)
B.bX=new A.b("tula","\u0422\u0443\u043b\u044c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,18939,20644,18371,null,null,null,87737,3)
B.f9=s(["\u0442\u044e\u043c\u0435\u043d\u0441\u043a\u0430\u044f","\u0442\u044e\u043c\u0435\u043d\u044c","\u0442\u044e\u043c"],t.s)
B.br=new A.b("tyumen","\u0422\u044e\u043c\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!0,!1,18939,20644,18371,null,null,null,1e5,3)
B.eB=s(["\u0443\u043b\u044c\u044f\u043d\u043e\u0432\u0441\u043a\u0430\u044f","\u0443\u043b\u044c\u044f\u043d\u043e\u0432\u0441\u043a"],t.s)
B.bI=new A.b("ulyanovsk","\u0423\u043b\u044c\u044f\u043d\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,16856,18373,16350,null,null,null,1e5,3)
B.eI=s(["\u0445\u0435\u0440\u0441\u043e\u043d\u0441\u043a\u0430\u044f","\u0445\u0435\u0440\u0441\u043e\u043d"],t.s)
B.bL=new A.b("kherson","\u0425\u0435\u0440\u0441\u043e\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,18371,20024,17820,null,null,null,null,3)
B.eQ=s(["\u0447\u0435\u043b\u044f\u0431\u0438\u043d\u0441\u043a\u0430\u044f","\u0447\u0435\u043b\u044f\u0431\u0438\u043d\u0441\u043a"],t.s)
B.b4=new A.b("chelyabinsk","\u0427\u0435\u043b\u044f\u0431\u0438\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,17424,18992,16901,null,null,null,1e5,3)
B.dX=s(["\u044f\u0440\u043e\u0441\u043b\u0430\u0432\u0441\u043a\u0430\u044f","\u044f\u0440\u043e\u0441\u043b\u0430\u0432\u043b\u044c"],t.s)
B.bK=new A.b("yaroslavl","\u042f\u0440\u043e\u0441\u043b\u0430\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,18939,20644,18371,null,null,null,58870,3)
B.eW=s(["\u0435\u0430\u043e","\u0435\u0432\u0440\u0435\u0439\u0441\u043a\u0430\u044f \u0430\u043e","\u0431\u0438\u0440\u043e\u0431\u0438\u0434\u0436\u0430\u043d"],t.s)
B.be=new A.b("jewish_ao","\u0415\u0432\u0440\u0435\u0439\u0441\u043a\u0430\u044f \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!0,23674,25805,22964,null,null,null,null,3)
B.ep=s(["\u043d\u0430\u043e","\u043d\u0435\u043d\u0435\u0446\u043a\u0438\u0439","\u043d\u0430\u0440\u044c\u044f\u043d-\u043c\u0430\u0440"],t.s)
B.b8=new A.b("nenets_ao","\u041d\u0435\u043d\u0435\u0446\u043a\u0438\u0439 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433",!1,!0,!1,31060,33855,32026,null,null,null,4e5,3)
B.eK=s(["\u0445\u043c\u0430\u043e","\u044e\u0433\u0440\u0430","\u0445\u0430\u043d\u0442\u044b","\u0445\u0430\u043d\u0442\u044b-\u043c\u0430\u043d\u0441\u0438\u0439\u0441\u043a\u0438\u0439","\u0441\u0443\u0440\u0433\u0443\u0442"],t.s)
B.bo=new A.b("khanty_mansi_ao","\u0425\u0430\u043d\u0442\u044b-\u041c\u0430\u043d\u0441\u0438\u0439\u0441\u043a\u0438\u0439 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433 \u2014 \u042e\u0433\u0440\u0430",!1,!0,!1,22102,24091,22137,null,null,null,177e3,2)
B.eP=s(["\u0447\u0443\u043a\u043e\u0442\u043a\u0430","\u0447\u0443\u043a\u043e\u0442\u0441\u043a\u0438\u0439","\u0430\u043d\u0430\u0434\u044b\u0440\u044c"],t.s)
B.bM=new A.b("chukotka","\u0427\u0443\u043a\u043e\u0442\u0441\u043a\u0438\u0439 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433",!1,!0,!0,49431,53880,47948,null,null,null,201e3,3)
B.er=s(["\u044f\u043d\u0430\u043e","\u044f\u043c\u0430\u043b","\u044f\u043c\u0430\u043b\u043e-\u043d\u0435\u043d\u0435\u0446\u043a\u0438\u0439","\u0441\u0430\u043b\u0435\u0445\u0430\u0440\u0434","\u044f\u043c\u0430"],t.s)
B.bh=new A.b("yamalo_nenets_ao","\u042f\u043c\u0430\u043b\u043e-\u041d\u0435\u043d\u0435\u0446\u043a\u0438\u0439 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433",!1,!0,!1,25946,28281,25168,null,null,null,1e6,3)
B.eh=s(["\u0434\u043d\u0440","\u0434\u043e\u043d\u0435\u0446\u043a\u0430\u044f","\u0434\u043e\u043d\u0435\u0446\u043a"],t.s)
B.by=new A.b("donetsk","\u0414\u043e\u043d\u0435\u0446\u043a\u0430\u044f \u041d\u0430\u0440\u043e\u0434\u043d\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",!1,!1,!1,17803,19405,17269,null,null,null,null,3)
B.m=s([B.bJ,B.bO,B.bb,B.cj,B.bF,B.bc,B.bw,B.c2,B.bt,B.bu,B.bE,B.bG,B.bY,B.bD,B.bZ,B.bC,B.cg,B.bf,B.cr,B.cl,B.c5,B.bl,B.bn,B.ce,B.cs,B.ci,B.bj,B.cc,B.c6,B.b5,B.bm,B.cp,B.cq,B.c8,B.c9,B.ba,B.cf,B.c4,B.bB,B.cm,B.ca,B.ck,B.bq,B.c7,B.bR,B.bz,B.c0,B.bA,B.cb,B.bH,B.b6,B.bP,B.co,B.b3,B.c_,B.bk,B.b2,B.bS,B.b9,B.bT,B.bU,B.ct,B.bp,B.b7,B.bv,B.cd,B.bd,B.ch,B.bi,B.c1,B.bW,B.bV,B.bN,B.c3,B.bx,B.bs,B.bg,B.cn,B.bQ,B.cu,B.bX,B.br,B.bI,B.bL,B.b4,B.bK,B.be,B.b8,B.bo,B.bM,B.bh,B.by],A.aj("r<b>"))
B.d8=new A.e("i_dis1","\u0418\u043d\u0432\u0430\u043b\u0438\u0434\u043d\u043e\u0441\u0442\u044c I \u0433\u0440\u0443\u043f\u043f\u044b (\u0443 \u043c\u0435\u043d\u044f)")
B.dy=new A.e("i_dis2","\u0418\u043d\u0432\u0430\u043b\u0438\u0434\u043d\u043e\u0441\u0442\u044c II \u0433\u0440\u0443\u043f\u043f\u044b")
B.cL=new A.e("i_dis3","\u0418\u043d\u0432\u0430\u043b\u0438\u0434\u043d\u043e\u0441\u0442\u044c III \u0433\u0440\u0443\u043f\u043f\u044b")
B.db=new A.e("i_pen","\u042f \u043f\u0435\u043d\u0441\u0438\u043e\u043d\u0435\u0440(\u043a\u0430)")
B.cX=new A.e("i_mil","\u0412\u043e\u0435\u043d\u043d\u043e\u0441\u043b\u0443\u0436\u0430\u0449\u0438\u0439 / \u0443\u0447\u0430\u0441\u0442\u043d\u0438\u043a \u0421\u0412\u041e")
B.cR=new A.e("i_vet","\u0412\u0435\u0442\u0435\u0440\u0430\u043d \u0431\u043e\u0435\u0432\u044b\u0445 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439")
B.d3=new A.e("i_stu","\u0421\u0442\u0443\u0434\u0435\u043d\u0442 \u043e\u0447\u043d\u043e\u0439 \u0444\u043e\u0440\u043c\u044b")
B.d0=new A.e("i_laid","\u0423\u0432\u043e\u043b\u0435\u043d(\u0430) \u043f\u043e \u0441\u043e\u043a\u0440\u0430\u0449\u0435\u043d\u0438\u044e")
B.cO=new A.e("i_sc","\u0418\u043d\u0442\u0435\u0440\u0435\u0441\u0443\u0435\u0442 \u0441\u043e\u0446\u043a\u043e\u043d\u0442\u0440\u0430\u043a\u0442")
B.di=new A.e("i_chern","\u041b\u0438\u043a\u0432\u0438\u0434\u0430\u0442\u043e\u0440 / \u0447\u0435\u0440\u043d\u043e\u0431\u044b\u043b\u0435\u0446")
B.d9=new A.e("i_dfo","\u041f\u0435\u0440\u0435\u0435\u0437\u0434 \u043d\u0430 \u0414\u0430\u043b\u044c\u043d\u0438\u0439 \u0412\u043e\u0441\u0442\u043e\u043a")
B.dc=new A.e("i_repr","\u0420\u0435\u0430\u0431\u0438\u043b\u0438\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439")
B.dk=new A.e("i_vet_trud","\u0412\u0435\u0442\u0435\u0440\u0430\u043d \u0442\u0440\u0443\u0434\u0430")
B.d1=new A.e("i_honored","\u0417\u0430\u0441\u043b\u0443\u0436\u0435\u043d\u043d\u044b\u0439 (\u043c\u0430\u0441\u0442\u0435\u0440/\u0434\u0435\u044f\u0442\u0435\u043b\u044c/\u0430\u0440\u0442\u0438\u0441\u0442)")
B.cS=new A.e("i_people_art","\u041d\u0430\u0440\u043e\u0434\u043d\u044b\u0439 \u0430\u0440\u0442\u0438\u0441\u0442 / \u0434\u0435\u044f\u0442\u0435\u043b\u044c")
B.dl=new A.e("i_hero_labor","\u0413\u0435\u0440\u043e\u0439 \u0422\u0440\u0443\u0434\u0430 \u0420\u0424")
B.dd=new A.e("i_sick","\u041d\u0430\u0445\u043e\u0436\u0443\u0441\u044c \u043d\u0430 \u0431\u043e\u043b\u044c\u043d\u0438\u0447\u043d\u043e\u043c")
B.cQ=new A.e("self_sick_insured","\u0421\u0430\u043c\u043e\u0437\u0430\u043d\u044f\u0442\u044b\u0439: \u0435\u0441\u0442\u044c \u0434\u043e\u0431\u0440\u043e\u0432\u043e\u043b\u044c\u043d\u043e\u0435 \u0441\u043e\u0446\u0441\u0442\u0440\u0430\u0445\u043e\u0432\u0430\u043d\u0438\u0435")
B.dx=new A.e("mil_conscript_spouse","\u0411\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u0430\u044f \u0436\u0435\u043d\u0430 \u0432\u043e\u0435\u043d\u043d\u043e\u0441\u043b\u0443\u0436\u0430\u0449\u0435\u0433\u043e \u043f\u043e \u043f\u0440\u0438\u0437\u044b\u0432\u0443")
B.dh=new A.e("mil_conscript_child","\u0420\u0435\u0431\u0451\u043d\u043e\u043a \u0432\u043e\u0435\u043d\u043d\u043e\u0441\u043b\u0443\u0436\u0430\u0449\u0435\u0433\u043e \u043f\u043e \u043f\u0440\u0438\u0437\u044b\u0432\u0443")
B.da=new A.e("alimony_debt","\u0415\u0441\u0442\u044c \u0437\u0430\u0434\u043e\u043b\u0436\u0435\u043d\u043d\u043e\u0441\u0442\u044c \u043f\u043e \u0430\u043b\u0438\u043c\u0435\u043d\u0442\u0430\u043c")
B.du=new A.e("valid_zero_income","\u0415\u0441\u0442\u044c \u0443\u0432\u0430\u0436\u0438\u0442\u0435\u043b\u044c\u043d\u0430\u044f \u043f\u0440\u0438\u0447\u0438\u043d\u0430 \u043d\u0443\u043b\u0435\u0432\u043e\u0433\u043e \u0434\u043e\u0445\u043e\u0434\u0430")
B.dn=new A.e("i_adopt","\u0423\u0441\u044b\u043d\u043e\u0432\u043b\u044f\u044e / \u0443\u0434\u043e\u0447\u0435\u0440\u044f\u044e \u0440\u0435\u0431\u0451\u043d\u043a\u0430")
B.cT=new A.e("i_donor","\u041f\u043e\u0447\u0451\u0442\u043d\u044b\u0439 \u0434\u043e\u043d\u043e\u0440 \u0420\u043e\u0441\u0441\u0438\u0438")
B.aH=s([B.d8,B.dy,B.cL,B.db,B.cX,B.cR,B.d3,B.d0,B.cO,B.di,B.d9,B.dc,B.dk,B.d1,B.cS,B.dl,B.dd,B.cQ,B.dx,B.dh,B.da,B.du,B.dn,B.cT],t.b)
B.aI=s(["age","gender","employment","region","marital","children","youngestChildAge","income","familySize"],t.s)
B.dm=new A.e("own_home","\u0421\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0435 \u0436\u0438\u043b\u044c\u0451")
B.dp=new A.e("rent_home","\u0421\u043d\u0438\u043c\u0430\u0435\u043c \u0436\u0438\u043b\u044c\u0451")
B.dt=new A.e("has_mortgage","\u0414\u0435\u0439\u0441\u0442\u0432\u0443\u044e\u0449\u0430\u044f \u0438\u043f\u043e\u0442\u0435\u043a\u0430")
B.cW=new A.e("bought_recent","\u041a\u0443\u043f\u0438\u043b\u0438 \u0436\u0438\u043b\u044c\u0451 \u0432 2021\u20132026")
B.dw=new A.e("high_utility","\u0416\u041a\u0425 > 22% \u0434\u043e\u0445\u043e\u0434\u0430")
B.d6=new A.e("need_housing","\u041d\u0443\u0436\u0434\u0430\u0435\u043c\u0441\u044f \u0432 \u0443\u043b\u0443\u0447\u0448\u0435\u043d\u0438\u0438 \u0436\u0438\u043b\u044c\u044f")
B.d4=new A.e("young_family","\u041f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0430 \xab\u041c\u043e\u043b\u043e\u0434\u0430\u044f \u0441\u0435\u043c\u044c\u044f\xbb")
B.cM=new A.e("communal","\u041a\u043e\u043c\u043c\u0443\u043d\u0430\u043b\u044c\u043d\u0430\u044f \u043a\u0432\u0430\u0440\u0442\u0438\u0440\u0430")
B.df=new A.e("excess_property","\u0418\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u043e \u043c\u043e\u0436\u0435\u0442 \u043f\u0440\u0435\u0432\u044b\u0448\u0430\u0442\u044c \u043b\u0438\u043c\u0438\u0442 \u0434\u043b\u044f \u0435\u0434\u0438\u043d\u043e\u0433\u043e \u043f\u043e\u0441\u043e\u0431\u0438\u044f")
B.ds=new A.e("high_deposits","\u0415\u0441\u0442\u044c \u043a\u0440\u0443\u043f\u043d\u044b\u0435 \u0432\u043a\u043b\u0430\u0434\u044b / \u043f\u0440\u043e\u0446\u0435\u043d\u0442\u044b \u0441\u0432\u0435\u0440\u0445 \u043b\u0438\u043c\u0438\u0442\u0430")
B.aJ=s([B.dm,B.dp,B.dt,B.cW,B.dw,B.d6,B.d4,B.cM,B.df,B.ds],t.b)
B.D=new A.h("pregnancy_support",A.j4())
B.Z=new A.h("newborn",A.j3())
B.U=new A.h("mat_capital",A.j1())
B.I=new A.h("care_leave",A.iY())
B.a7=new A.h("unified_children",A.j5())
B.F=new A.h("family_annual_payment",A.j_())
B.a9=new A.h("multi_child_mortgage",A.j2())
B.a2=new A.h("family_mortgage",A.j0())
B.N=new A.h("disabled_child",A.iZ())
B.a8=new A.h("young_family",A.j6())
B.H=new A.h("adoption",A.iX())
B.B=new A.h("child_tax_deduction",A.k8())
B.w=new A.h("property_deduction",A.ke())
B.y=new A.h("medical_deduction",A.kd())
B.Q=new A.h("education_deduction",A.k9())
B.A=new A.h("fitness_deduction",A.ka())
B.S=new A.h("iis_deduction",A.kb())
B.X=new A.h("life_insurance_deduction",A.kc())
B.J=new A.h("charity_deduction",A.k7())
B.a4=new A.h("student",A.k_())
B.a5=new A.h("unemployment",A.k0())
B.T=new A.h("layoff",A.jU())
B.P=new A.h("housing_subsidy",A.jT())
B.a0=new A.h("pension",A.jW())
B.M=new A.h("disability",A.jQ())
B.Y=new A.h("property_tax_relief",A.jX())
B.E=new A.h("communal_housing",A.jO())
B.G=new A.h("social_contract",A.jZ())
B.V=new A.h("military",A.jV())
B.C=new A.h("conscript_family",A.jP())
B.a6=new A.h("veteran_family",A.k1())
B.R=new A.h("honors",A.jS())
B.a3=new A.h("sick_leave",A.jY())
B.O=new A.h("donor",A.jR())
B.a_=new A.h("north",A.jH())
B.K=new A.h("chernobyl",A.jE())
B.a1=new A.h("rehabilitated",A.jK())
B.W=new A.h("moscow",A.jG())
B.L=new A.h("dfo",A.jF())
B.x=new A.h("regional_mat_cap",A.jJ())
B.z=new A.h("regional_extra_info",A.jI())
B.aK=s([B.D,B.Z,B.U,B.I,B.a7,B.F,B.a9,B.a2,B.N,B.a8,B.H,B.B,B.w,B.y,B.Q,B.A,B.S,B.X,B.J,B.a4,B.a5,B.T,B.P,B.a0,B.M,B.Y,B.E,B.G,B.V,B.C,B.a6,B.R,B.a3,B.O,B.a_,B.K,B.a1,B.W,B.L,B.x,B.z],A.aj("r<h>"))
B.cP=new A.e("pregnant","\u0421\u0435\u0439\u0447\u0430\u0441 \u0431\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u0430")
B.cY=new A.e("newborn","\u0420\u0435\u0431\u0451\u043d\u043e\u043a \u0440\u043e\u0434\u0438\u043b\u0441\u044f \u0432 2025\u20132026")
B.d7=new A.e("disabled_child","\u0420\u0435\u0431\u0451\u043d\u043e\u043a-\u0438\u043d\u0432\u0430\u043b\u0438\u0434")
B.cN=new A.e("solo_parent","\u041e\u0434\u0438\u043d\u043e\u043a\u0438\u0439 \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u044c")
B.dz=new A.e("used_matcap","\u041c\u0430\u0442\u043a\u0430\u043f\u0438\u0442\u0430\u043b \u0443\u0436\u0435 \u043f\u043e\u043b\u0443\u0447\u0435\u043d")
B.cV=new A.e("child_study","\u0420\u0435\u0431\u0451\u043d\u043e\u043a \u0443\u0447\u0438\u0442\u0441\u044f \u043e\u0447\u043d\u043e (\u0434\u043e 24)")
B.aL=s([B.cP,B.cY,B.d7,B.cN,B.dz,B.cV],t.b)
B.dg=new A.e("has_dis1","\u0418\u043d\u0432\u0430\u043b\u0438\u0434 I \u0433\u0440\u0443\u043f\u043f\u044b \u0432 \u0441\u0435\u043c\u044c\u0435")
B.d2=new A.e("has_dis2","\u0418\u043d\u0432\u0430\u043b\u0438\u0434 II \u0433\u0440\u0443\u043f\u043f\u044b \u0432 \u0441\u0435\u043c\u044c\u0435")
B.d_=new A.e("has_dis3","\u0418\u043d\u0432\u0430\u043b\u0438\u0434 III \u0433\u0440\u0443\u043f\u043f\u044b \u0432 \u0441\u0435\u043c\u044c\u0435")
B.dr=new A.e("elderly80","\u041f\u043e\u0436\u0438\u043b\u043e\u0439 80+ \u043b\u0435\u0442")
B.d5=new A.e("vet_fam","\u0412\u0435\u0442\u0435\u0440\u0430\u043d \u0411\u0414 \u0432 \u0441\u0435\u043c\u044c\u0435")
B.aM=s([B.dg,B.d2,B.d_,B.dr,B.d5],t.b)
B.dv=new A.e("paid_med","\u041f\u043b\u0430\u0442\u0438\u043b(\u0430) \u0437\u0430 \u043b\u0435\u0447\u0435\u043d\u0438\u0435")
B.de=new A.e("paid_edu","\u041f\u043b\u0430\u0442\u0438\u043b(\u0430) \u0437\u0430 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435")
B.dj=new A.e("paid_fit","\u041f\u043b\u0430\u0442\u0438\u043b(\u0430) \u0437\u0430 \u0444\u0438\u0442\u043d\u0435\u0441")
B.cZ=new A.e("has_iis","\u0415\u0441\u0442\u044c \u0418\u0418\u0421")
B.cU=new A.e("charity","\u041f\u043e\u0436\u0435\u0440\u0442\u0432\u043e\u0432\u0430\u043d\u0438\u044f")
B.dq=new A.e("life_ins","\u0421\u0442\u0440\u0430\u0445\u043e\u0432\u0430\u043d\u0438\u0435 \u0436\u0438\u0437\u043d\u0438 (3+ \u043b\u0435\u0442)")
B.aN=s([B.dv,B.de,B.dj,B.cZ,B.cU,B.dq],t.b)
B.cH=new A.x("employed","\u0420\u0430\u0431\u043e\u0442\u0430\u044e \u043e\u0444\u0438\u0446\u0438\u0430\u043b\u044c\u043d\u043e")
B.cE=new A.x("self","\u0421\u0430\u043c\u043e\u0437\u0430\u043d\u044f\u0442\u044b\u0439")
B.cD=new A.x("ip","\u0418\u041f")
B.cA=new A.x("unemployed_reg","\u0411\u0435\u0437\u0440\u0430\u0431\u043e\u0442\u043d\u044b\u0439 (\u043d\u0430 \u0431\u0438\u0440\u0436\u0435)")
B.cC=new A.x("unemployed","\u0411\u0435\u0437\u0440\u0430\u0431\u043e\u0442\u043d\u044b\u0439")
B.cB=new A.x("pensioner","\u041f\u0435\u043d\u0441\u0438\u043e\u043d\u0435\u0440")
B.cw=new A.x("student","\u0421\u0442\u0443\u0434\u0435\u043d\u0442 \u043e\u0447\u043d\u043e\u0439 \u0444\u043e\u0440\u043c\u044b")
B.cI=new A.x("matleave","\u0412 \u0434\u0435\u043a\u0440\u0435\u0442\u0435 / \u043e\u0442\u043f\u0443\u0441\u043a\u0435 \u043f\u043e \u0443\u0445\u043e\u0434\u0443")
B.cz=new A.x("caregiver","\u0423\u0445\u043e\u0434 \u0437\u0430 \u0431\u043b\u0438\u0437\u043a\u0438\u043c \u0440\u043e\u0434\u0441\u0442\u0432\u0435\u043d\u043d\u0438\u043a\u043e\u043c")
B.aO=s([B.cH,B.cE,B.cD,B.cA,B.cC,B.cB,B.cw,B.cI,B.cz],t.I)
B.t={moscow:0,spb:1,sevastopol:2,adygea:3,altai_republic:4,bashkortostan:5,buryatia:6,dagestan:7,ingushetia:8,kabardino_balkaria:9,kalmykia:10,karachay_cherkessia:11,karelia:12,komi:13,crimea:14,mari_el:15,mordovia:16,sakha:17,north_ossetia:18,tatarstan:19,tyva:20,udmurtia:21,khakassia:22,chechnya:23,chuvashia:24,altai_krai:25,zabaykalsky:26,kamchatka:27,krasnodar:28,krasnoyarsk:29,perm:30,primorsky:31,stavropol:32,khabarovsk:33,amur:34,arkhangelsk:35,astrakhan:36,belgorod:37,bryansk:38,vladimir:39,volgograd:40,vologda:41,voronezh:42,zaporizhzhia:43,ivanovo:44,irkutsk:45,kaliningrad:46,kaluga:47,kemerovo:48,kirov:49,kostroma:50,kurgan:51,kursk:52,leningrad:53,lipetsk:54,lugansk:55,magadan:56,mo:57,murmansk:58,nizhny_novgorod:59,novgorod:60,novosibirsk:61,omsk:62,orenburg:63,orel:64,penza:65,pskov:66,rostov:67,ryazan:68,samara:69,saratov:70,sakhalin:71,sverdlovsk:72,smolensk:73,tambov:74,tver:75,tomsk:76,tula:77,tyumen:78,ulyanovsk:79,kherson:80,chelyabinsk:81,yaroslavl:82,jewish_ao:83,nenets_ao:84,khanty_mansi_ao:85,chukotka:86,yamalo_nenets_ao:87,donetsk:88}
B.aP=new A.U(B.t,[18971,17754,16613,14008,15473,14496,17754,14821,15311,17428,15962,15311,18079,18731,15799,14333,13844,24594,14659,13844,16450,14496,16613,15636,14170,14496,19057,28666,15636,18079,14985,19382,14659,19871,18731,18893,15799,13682,14985,15799,14008,16450,14333,15799,15311,17265,16776,15636,14821,14496,14985,15311,14170,17428,13518,15311,28340,17446,22709,15311,15962,15962,14170,14170,15147,13682,16125,15311,14496,15311,13682,22151,16125,16125,13518,15962,15962,16288,16288,14496,15799,14985,16288,20360,26712,19067,42511,22314,15311],t.J)
B.aQ=new A.U(B.t,[180861,121475,66605,63759,72941,74391,83574,49925,44652,53252,55806,54755,81569,95980,63834,70460,67262,139435,53721,90515,75253,77925,80227,46652,68379,63971,99768,151016,76115,105571,83646,96177,63673,97025,99073,91121,69820,73891,65803,73285,68340,80975,75525,58e3,57122,95318,77022,83930,83017,67199,63292,72992,75521,94348,76460,57e3,178076,116008,125302,80778,72178,86546,73100,74294,63817,67293,63454,70813,73393,76626,67353,148172,89286,68468,63024,72783,85829,84212,94124,69676,58e3,81366,73832,91167,146957,135914,214604,177711,60627],t.J)
B.aU={chukotka:0,kamchatka:1,magadan:2,yamalo_nenets_ao:3,nenets_ao:4,khanty_mansi_ao:5,murmansk:6,sakha:7,sakhalin:8,komi:9,arkhangelsk:10,krasnoyarsk:11,irkutsk:12,tomsk:13,karelia:14,tyumen:15}
B.aR=new A.U(B.aU,[1,0.6,0.6,0.5,0.5,0.5,0.4,0.4,0.4,0.2,0.2,0.2,0.2,0.2,0.15,0.15],t.J)
B.aX={c:0,w:1,h:2,p:3,s:4,m:5,t:6,r:7,a:8}
B.aS=new A.U(B.aX,["\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67 \u0421\u0435\u043c\u044c\u044f \u0438 \u0434\u0435\u0442\u0438","\ud83d\udcbc \u0417\u0430\u043d\u044f\u0442\u043e\u0441\u0442\u044c","\ud83c\udfe0 \u0416\u0438\u043b\u044c\u0451","\ud83d\udc74 \u041f\u0435\u043d\u0441\u0438\u044f","\ud83e\udd1d \u0421\u043e\u0446\u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430","\ud83c\udf96\ufe0f \u0412\u043e\u0435\u043d\u043d\u0430\u044f \u0441\u043b\u0443\u0436\u0431\u0430","\ud83d\udcca \u041d\u0430\u043b\u043e\u0433\u043e\u0432\u044b\u0435 \u0432\u044b\u0447\u0435\u0442\u044b","\ud83c\udf0d \u0420\u0435\u0433\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435","\ud83c\udf96\ufe0f \u041f\u043e\u0447\u0451\u0442\u043d\u044b\u0435 \u0437\u0432\u0430\u043d\u0438\u044f \u0438 \u0437\u0430\u0441\u043b\u0443\u0433\u0438"],t.w)
B.aW={regular:0,north:1,dfo:2}
B.aT=new A.U(B.aW,["regular","north","dfo"],t.w)
B.aY={}
B.fe=new A.as(B.aY,0,t.O)
B.aV={mo:0,khanty_mansi_ao:1,yamalo_nenets_ao:2}
B.cK=new A.as(B.aV,3,t.O)
B.dA=A.S("km")
B.dB=A.S("kn")
B.dC=A.S("fW")
B.dD=A.S("fX")
B.dE=A.S("fY")
B.dF=A.S("fZ")
B.dG=A.S("h_")
B.dH=A.S("m")
B.dI=A.S("hs")
B.dJ=A.S("ht")
B.dK=A.S("hu")
B.dL=A.S("dX")})();(function staticFields(){$.d6=null
$.K=A.z([],t.f)
$.ey=null
$.em=null
$.el=null
$.fi=null
$.fb=null
$.fm=null
$.dw=null
$.dB=null
$.ee=null
$.d7=A.z([],A.aj("r<q<m>?>"))
$.aE=null
$.bu=null
$.bv=null
$.e8=!1
$.C=B.i
$.e4=A.h8(t.N)
$.f3=0
$.f4=0})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal
s($,"ko","by",()=>A.ja("_$dart_dartClosure"))
s($,"kG","fE",()=>A.z([new J.bL()],A.aj("r<b6>")))
s($,"ks","fs",()=>A.Z(A.cO({
toString:function(){return"$receiver$"}})))
s($,"kt","ft",()=>A.Z(A.cO({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"ku","fu",()=>A.Z(A.cO(null)))
s($,"kv","fv",()=>A.Z(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"ky","fy",()=>A.Z(A.cO(void 0)))
s($,"kz","fz",()=>A.Z(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"kx","fx",()=>A.Z(A.eE(null)))
s($,"kw","fw",()=>A.Z(function(){try{null.$method$}catch(r){return r.message}}()))
s($,"kB","fB",()=>A.Z(A.eE(void 0)))
s($,"kA","fA",()=>A.Z(function(){try{(void 0).$method$}catch(r){return r.message}}()))
s($,"kC","eh",()=>A.hv())
s($,"kD","fC",()=>A.dT("^[\\-\\.0-9A-Z_a-z~]*$",!1))
s($,"kF","dM",()=>A.fj(B.dH))
s($,"kI","fF",()=>{var r=2027
return A.z([A.dS("\u041f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c \u043f\u0440\u0430\u0432\u043e","family_payment_2026",A.aP(2026,8,15),A.aP(2026,10,1),"\u0412\u043e\u0437\u0432\u0440\u0430\u0442 \u0447\u0430\u0441\u0442\u0438 \u041d\u0414\u0424\u041b \u0437\u0430 2025 \u0433\u043e\u0434. \u041f\u043e\u0434\u0430\u0442\u044c \u043c\u043e\u0436\u043d\u043e \u0434\u043e 1 \u043e\u043a\u0442\u044f\u0431\u0440\u044f \u2014 \u043f\u043e\u0442\u043e\u043c \u0442\u043e\u043b\u044c\u043a\u043e \u0432 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u043c \u0433\u043e\u0434\u0443.",B.ah,"\u0421\u0435\u043c\u0435\u0439\u043d\u0430\u044f \u0432\u044b\u043f\u043b\u0430\u0442\u0430: \u043f\u0440\u0438\u0451\u043c \u0437\u0430\u044f\u0432\u043b\u0435\u043d\u0438\u0439 \u0437\u0430\u043a\u0430\u043d\u0447\u0438\u0432\u0430\u0435\u0442\u0441\u044f"),A.dS("\u041f\u0435\u0440\u0435\u0441\u0447\u0438\u0442\u0430\u0442\u044c","mrot_2027",A.aP(r,1,1),A.aP(r,1,31),"\u041f\u0435\u0440\u0435\u0441\u0447\u0438\u0442\u0430\u043d\u044b \u043f\u043e\u0441\u043e\u0431\u0438\u0435 \u043f\u043e \u0443\u0445\u043e\u0434\u0443 \u0434\u043e 1,5 \u043b\u0435\u0442, \u0434\u0435\u043a\u0440\u0435\u0442\u043d\u044b\u0435 \u043f\u0440\u0438 \u043d\u0435\u0432\u044b\u0441\u043e\u043a\u043e\u043c \u0434\u043e\u0445\u043e\u0434\u0435 \u0438 \u043c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u0439 \u0431\u043e\u043b\u044c\u043d\u0438\u0447\u043d\u044b\u0439.",B.r,"\u0421 1 \u044f\u043d\u0432\u0430\u0440\u044f \u0432\u044b\u0440\u043e\u0441\u043b\u0438 \u041c\u0420\u041e\u0422 \u0438 \u043f\u0440\u043e\u0436\u0438\u0442\u043e\u0447\u043d\u044b\u0439 \u043c\u0438\u043d\u0438\u043c\u0443\u043c"),A.dS("\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0441\u0443\u043c\u043c\u044b","indexation_2027",A.aP(r,2,1),A.aP(r,2,28),"\u041e\u0431\u043d\u043e\u0432\u0438\u043b\u0438 \u0441\u0443\u043c\u043c\u044b \u0431\u043e\u043b\u0435\u0435 \u0441\u043e\u0440\u043e\u043a\u0430 \u043c\u0435\u0440 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0438 \u043f\u043e \u0444\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0439 \u0438\u043d\u0444\u043b\u044f\u0446\u0438\u0438.",B.r,"\u0421 1 \u0444\u0435\u0432\u0440\u0430\u043b\u044f \u043f\u0440\u043e\u0438\u043d\u0434\u0435\u043a\u0441\u0438\u0440\u043e\u0432\u0430\u043d\u044b \u0432\u044b\u043f\u043b\u0430\u0442\u044b \u0438 \u043c\u0430\u0442\u043a\u0430\u043f\u0438\u0442\u0430\u043b")],A.aj("r<Q>"))})
s($,"kl","fr",()=>{var r,q,p=A.h7(t.N,A.aj("w"))
for(r=0;r<19;++r){q=B.aE[r]
p.F(0,q.a,q)}return p})
s($,"kE","fD",()=>new A.cu())})();(function nativeSupport(){!function(){var s=function(a){var m={}
m[a]=1
return Object.keys(hunkHelpers.convertToFastObject(m))[0]}
v.getIsolateTag=function(a){return s("___dart_"+a+v.isolateTag)}
var r="___dart_isolate_tags_"
var q=Object[r]||(Object[r]=Object.create(null))
var p="_ZxYxX"
for(var o=0;;o++){var n=s(p+"_"+o+"_")
if(!(n in q)){q[n]=1
v.isolateTag=n
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:A.av,SharedArrayBuffer:A.av,ArrayBufferView:A.b1,DataView:A.bQ,Float32Array:A.bR,Float64Array:A.bS,Int16Array:A.bT,Int32Array:A.bU,Int8Array:A.bV,Uint16Array:A.bW,Uint32Array:A.bX,Uint8ClampedArray:A.b2,CanvasPixelArray:A.b2,Uint8Array:A.bY})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,SharedArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.aw.$nativeSuperclassTag="ArrayBufferView"
A.bg.$nativeSuperclassTag="ArrayBufferView"
A.bh.$nativeSuperclassTag="ArrayBufferView"
A.b_.$nativeSuperclassTag="ArrayBufferView"
A.bi.$nativeSuperclassTag="ArrayBufferView"
A.bj.$nativeSuperclassTag="ArrayBufferView"
A.b0.$nativeSuperclassTag="ArrayBufferView"})()
Function.prototype.$0=function(){return this()}
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$2=function(a,b){return this(a,b)}
Function.prototype.$3=function(a,b,c){return this(a,b,c)}
Function.prototype.$4=function(a,b,c,d){return this(a,b,c,d)}
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q){s[q].removeEventListener("load",onLoad,false)}a(b.target)}for(var r=0;r<s.length;++r){s[r].addEventListener("load",onLoad,false)}})(function(a){v.currentScript=a
var s=A.jo
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()
//# sourceMappingURL=main.dart.js.map
