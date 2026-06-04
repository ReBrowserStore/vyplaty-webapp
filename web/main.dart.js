(function dartProgram(){function copyProperties(a,b){var t=Object.keys(a)
for(var s=0;s<t.length;s++){var r=t[s]
b[r]=a[r]}}function mixinPropertiesHard(a,b){var t=Object.keys(a)
for(var s=0;s<t.length;s++){var r=t[s]
if(!b.hasOwnProperty(r)){b[r]=a[r]}}}function mixinPropertiesEasy(a,b){Object.assign(b,a)}var z=function(){var t=function(){}
t.prototype={p:{}}
var s=new t()
if(!(Object.getPrototypeOf(s)&&Object.getPrototypeOf(s).p===t.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var r=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(r))return true}}catch(q){}return false}()
function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){Object.setPrototypeOf(a.prototype,b.prototype)
return}var t=Object.create(b.prototype)
copyProperties(a.prototype,t)
a.prototype=t}}function inheritMany(a,b){for(var t=0;t<b.length;t++){inherit(b[t],a)}}function mixinEasy(a,b){mixinPropertiesEasy(b.prototype,a.prototype)
a.prototype.constructor=a}function mixinHard(a,b){mixinPropertiesHard(b.prototype,a.prototype)
a.prototype.constructor=a}function lazy(a,b,c,d){var t=a
a[b]=t
a[c]=function(){if(a[b]===t){a[b]=d()}a[c]=function(){return this[b]}
return a[b]}}function lazyFinal(a,b,c,d){var t=a
a[b]=t
a[c]=function(){if(a[b]===t){var s=d()
if(a[b]!==t){A.h9(b)}a[b]=s}var r=a[b]
a[c]=function(){return r}
return r}}function makeConstList(a,b){if(b!=null)A.z(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var t=0;t<a.length;++t){convertToFastObject(a[t])}}var y=0
function instanceTearOffGetter(a,b){var t=null
return a?function(c){if(t===null)t=A.cn(b)
return new t(c,this)}:function(){if(t===null)t=A.cn(b)
return new t(this,null)}}function staticTearOffGetter(a){var t=null
return function(){if(t===null)t=A.cn(a).prototype
return t}}var x=0
function tearOffParameters(a,b,c,d,e,f,g,h,i,j){if(typeof h=="number"){h+=x}return{co:a,iS:b,iI:c,rC:d,dV:e,cs:f,fs:g,fT:h,aI:i||0,nDA:j}}function installStaticTearOff(a,b,c,d,e,f,g,h){var t=tearOffParameters(a,true,false,c,d,e,f,g,h,false)
var s=staticTearOffGetter(t)
a[b]=s}function installInstanceTearOff(a,b,c,d,e,f,g,h,i,j){c=!!c
var t=tearOffParameters(a,false,c,d,e,f,g,h,i,!!j)
var s=instanceTearOffGetter(c,t)
a[b]=s}function setOrUpdateInterceptorsByTag(a){var t=v.interceptorsByTag
if(!t){v.interceptorsByTag=a
return}copyProperties(a,t)}function setOrUpdateLeafTags(a){var t=v.leafTags
if(!t){v.leafTags=a
return}copyProperties(a,t)}function updateTypes(a){var t=v.types
var s=t.length
t.push.apply(t,a)
return s}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var t=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e,false)}},s=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixinEasy,mixinHard:mixinHard,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:t(0,0,null,["$0"],0),_instance_1u:t(0,1,null,["$1"],0),_instance_2u:t(0,2,null,["$2"],0),_instance_0i:t(1,0,null,["$0"],0),_instance_1i:t(1,1,null,["$1"],0),_instance_2i:t(1,2,null,["$2"],0),_static_0:s(0,null,["$0"],0),_static_1:s(1,null,["$1"],0),_static_2:s(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,lazyFinal:lazyFinal,updateHolder:updateHolder,convertToFastObject:convertToFastObject,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}var J={
cr(a,b,c,d){return{i:a,p:b,e:c,x:d}},
co(a){var t,s,r,q,p,o=a[v.dispatchPropertyName]
if(o==null)if($.cp==null){A.fd()
o=a[v.dispatchPropertyName]}if(o!=null){t=o.p
if(!1===t)return o.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return o.i
if(o.e===s)throw A.m(A.cI("Return interceptor for "+A.q(t(a,o))))}r=a.constructor
if(r==null)q=null
else{p=$.bM
if(p==null)p=$.bM=v.getIsolateTag("_$dart_js")
q=r[p]}if(q!=null)return q
q=A.fj(a)
if(q!=null)return q
if(typeof a=="function")return B.ab
t=Object.getPrototypeOf(a)
if(t==null)return B.o
if(t===Object.prototype)return B.o
if(typeof r=="function"){p=$.bM
if(p==null)p=$.bM=v.getIsolateTag("_$dart_js")
Object.defineProperty(r,p,{value:B.l,enumerable:false,writable:true,configurable:true})
return B.l}return B.l},
dy(a,b){if(a>4294967295)throw A.m(A.bC(a,0,4294967295,"length",null))
return J.dz(new Array(a),b)},
dz(a,b){var t=A.z(a,b.t("t<0>"))
t.$flags=1
return t},
cB(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
dA(a,b){var t,s
for(t=a.length;b<t;){s=a.charCodeAt(b)
if(s!==32&&s!==13&&!J.cB(s))break;++b}return b},
dB(a,b){var t,s,r
for(t=a.length;b>0;b=s){s=b-1
if(!(s<t))return A.v(a,s)
r=a.charCodeAt(s)
if(r!==32&&r!==13&&!J.cB(r))break}return b},
a0(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.al.prototype
return J.aS.prototype}if(typeof a=="string")return J.a7.prototype
if(a==null)return J.am.prototype
if(typeof a=="boolean")return J.aR.prototype
if(Array.isArray(a))return J.t.prototype
if(typeof a!="object"){if(typeof a=="function")return J.N.prototype
if(typeof a=="symbol")return J.aq.prototype
if(typeof a=="bigint")return J.ao.prototype
return a}if(a instanceof A.p)return a
return J.co(a)},
f4(a){if(typeof a=="string")return J.a7.prototype
if(a==null)return a
if(Array.isArray(a))return J.t.prototype
if(typeof a!="object"){if(typeof a=="function")return J.N.prototype
if(typeof a=="symbol")return J.aq.prototype
if(typeof a=="bigint")return J.ao.prototype
return a}if(a instanceof A.p)return a
return J.co(a)},
f5(a){if(a==null)return a
if(Array.isArray(a))return J.t.prototype
if(typeof a!="object"){if(typeof a=="function")return J.N.prototype
if(typeof a=="symbol")return J.aq.prototype
if(typeof a=="bigint")return J.ao.prototype
return a}if(a instanceof A.p)return a
return J.co(a)},
c7(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.a0(a).A(a,b)},
J(a){return J.a0(a).gm(a)},
cs(a){return J.f5(a).gv(a)},
ct(a){return J.f4(a).gu(a)},
di(a){return J.a0(a).gl(a)},
aL(a){return J.a0(a).j(a)},
aP:function aP(){},
aR:function aR(){},
am:function am(){},
ap:function ap(){},
O:function O(){},
b2:function b2(){},
ay:function ay(){},
N:function N(){},
ao:function ao(){},
aq:function aq(){},
t:function t(a){this.$ti=a},
aQ:function aQ(){},
bx:function bx(a){this.$ti=a},
ai:function ai(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
an:function an(){},
al:function al(){},
aS:function aS(){},
a7:function a7(){}},A={ca:function ca(){},
dC(a){return new A.a8("Field '"+a+"' has not been initialized.")},
P(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
cd(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
cq(a){var t,s
for(t=$.C.length,s=0;s<t;++s)if(a===$.C[s])return!0
return!1},
cA(){return new A.bG("No element")},
a8:function a8(a){this.a=a},
bF:function bF(){},
ar:function ar(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
ac:function ac(a,b,c){this.a=a
this.b=b
this.$ti=c},
U:function U(a,b,c){this.a=a
this.b=b
this.$ti=c},
y:function y(){},
df(a){var t=v.mangledGlobalNames[a]
if(t!=null)return t
return"minified:"+a},
ho(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return u.D.b(a)},
q(a){var t
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.aL(a)
return t},
b3(a){var t,s=$.cE
if(s==null)s=$.cE=Symbol("identityHashCode")
t=a[s]
if(t==null){t=Math.random()*0x3fffffff|0
a[s]=t}return t},
bB(a,b){var t,s=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(s==null)return null
if(3>=s.length)return A.v(s,3)
t=s[3]
if(t!=null)return parseInt(a,10)
if(s[2]!=null)return parseInt(a,16)
return null},
bA(a){var t,s
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return null
t=parseFloat(a)
if(isNaN(t)){s=B.i.a3(a)
if(s==="NaN"||s==="+NaN"||s==="-NaN")return t
return null}return t},
b4(a){var t,s,r,q
if(a instanceof A.p)return A.B(A.aK(a),null)
t=J.a0(a)
if(t===B.aa||t===B.ac||u.o.b(a)){s=B.m(a)
if(s!=="Object"&&s!=="")return s
r=a.constructor
if(typeof r=="function"){q=r.name
if(typeof q=="string"&&q!=="Object"&&q!=="")return q}}return A.B(A.aK(a),null)},
cF(a){var t,s,r
if(a==null||typeof a=="number"||A.cl(a))return J.aL(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.K)return a.j(0)
if(a instanceof A.Y)return a.U(!0)
t=$.dh()
for(s=0;s<1;++s){r=t[s].ao(a)
if(r!=null)return r}return"Instance of '"+A.b4(a)+"'"},
v(a,b){if(a==null)J.ct(a)
throw A.m(A.d9(a,b))},
d9(a,b){var t,s="index"
if(!A.d2(b))return new A.a3(!0,b,s,null)
t=J.ct(a)
if(b<0||b>=t)return A.dt(b,t,a,s)
return A.dK(b,s)},
eF(a){return new A.a3(!0,a,null,null)},
m(a){return A.x(a,new Error())},
x(a,b){var t
if(a==null)a=new A.bH()
b.dartException=a
t=A.ha
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:t})
b.name=""}else b.toString=t
return b},
ha(){return J.aL(this.dartException)},
bi(a,b){throw A.x(a,b==null?new Error():b)},
de(a,b,c){var t
if(b==null)b=0
if(c==null)c=0
t=Error()
A.bi(A.ef(a,b,c),t)},
ef(a,b,c){var t,s,r,q,p,o,n,m,l
if(typeof b=="string")t=b
else{s="[]=;add;removeWhere;retainWhere;removeRange;setRange;setInt8;setInt16;setInt32;setUint8;setUint16;setUint32;setFloat32;setFloat64".split(";")
r=s.length
q=b
if(q>r){c=q/r|0
q%=r}t=s[q]}p=typeof c=="string"?c:"modify;remove from;add to".split(";")[c]
o=u.j.b(a)?"list":"ByteData"
n=a.$flags|0
m="a "
if((n&4)!==0)l="constant "
else if((n&2)!==0){l="unmodifiable "
m="an "}else l=(n&1)!==0?"fixed-length ":""
return new A.b9("'"+t+"': Cannot "+p+" "+m+l+o)},
c5(a){throw A.m(A.c8(a))},
db(a){if(a==null)return J.J(a)
if(typeof a=="object")return A.b3(a)
return J.J(a)},
dq(a1){var t,s,r,q,p,o,n,m,l,k,j=a1.co,i=a1.iS,h=a1.iI,g=a1.nDA,f=a1.aI,e=a1.fs,d=a1.cs,c=e[0],b=d[0],a=j[c],a0=a1.fT
a0.toString
t=i?Object.create(new A.b6().constructor.prototype):Object.create(new A.a5(null,null).constructor.prototype)
t.$initialize=t.constructor
s=i?function static_tear_off(){this.$initialize()}:function tear_off(a2,a3){this.$initialize(a2,a3)}
t.constructor=s
s.prototype=t
t.$_name=c
t.$_target=a
r=!i
if(r)q=A.cy(c,a,h,g)
else{t.$static_name=c
q=a}t.$S=A.dl(a0,i,h)
t[b]=q
for(p=q,o=1;o<e.length;++o){n=e[o]
if(typeof n=="string"){m=j[n]
l=n
n=m}else l=""
k=d[o]
if(k!=null){if(r)n=A.cy(l,n,h,g)
t[k]=n}if(o===f)p=n}t.$C=p
t.$R=a1.rC
t.$D=a1.dV
return s},
dl(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.m("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.dj)}throw A.m("Error in functionType of tearoff")},
dm(a,b,c,d){var t=A.cx
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
cy(a,b,c,d){if(c)return A.dp(a,b,d)
return A.dm(b.length,d,a,b)},
dn(a,b,c,d){var t=A.cx,s=A.dk
switch(b?-1:a){case 0:throw A.m(new A.bE("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,t)
default:return function(e,f,g){return function(){var r=[g(this)]
Array.prototype.push.apply(r,arguments)
return e.apply(f(this),r)}}(d,s,t)}},
dp(a,b,c){var t,s
if($.cv==null)$.cv=A.cu("interceptor")
if($.cw==null)$.cw=A.cu("receiver")
t=b.length
s=A.dn(t,c,a,b)
return s},
cn(a){return A.dq(a)},
dj(a,b){return A.aI(v.typeUniverse,A.aK(a.a),b)},
cx(a){return a.a},
dk(a){return a.b},
cu(a){var t,s,r,q=new A.a5("receiver","interceptor"),p=Object.getOwnPropertyNames(q)
p.$flags=1
t=p
for(p=t.length,s=0;s<p;++s){r=t[s]
if(q[r]===a)return r}throw A.m(A.bk("Field name "+a+" not found."))},
f6(a){return v.getIsolateTag(a)},
fj(a){var t,s,r,q,p,o=A.bf($.da.$1(a)),n=$.bW[o]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.c0[o]
if(t!=null)return t
s=v.interceptorsByTag[o]
if(s==null){r=A.cY($.d7.$2(a,o))
if(r!=null){n=$.bW[r]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.c0[r]
if(t!=null)return t
s=v.interceptorsByTag[r]
o=r}}if(s==null)return null
t=s.prototype
q=o[0]
if(q==="!"){n=A.c4(t)
$.bW[o]=n
Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}if(q==="~"){$.c0[o]=t
return t}if(q==="-"){p=A.c4(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return A.dc(a,t)
if(q==="*")throw A.m(A.cI(o))
if(v.leafTags[o]===true){p=A.c4(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return A.dc(a,t)},
dc(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,v.dispatchPropertyName,{value:J.cr(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
c4(a){return J.cr(a,!1,null,!!a.$iA)},
fl(a,b,c){var t=b.prototype
if(v.leafTags[a]===true)return A.c4(t)
else return J.cr(t,c,null,null)},
fd(){if(!0===$.cp)return
$.cp=!0
A.fe()},
fe(){var t,s,r,q,p,o,n,m
$.bW=Object.create(null)
$.c0=Object.create(null)
A.fc()
t=v.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.dd.$1(p)
if(o!=null){n=A.fl(p,t[p],o)
if(n!=null){Object.defineProperty(o,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
fc(){var t,s,r,q,p,o,n=B.a4()
n=A.ag(B.a5,A.ag(B.a6,A.ag(B.n,A.ag(B.n,A.ag(B.a7,A.ag(B.a8,A.ag(B.a9(B.m),n)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(Array.isArray(t))for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")n=r(n)||n}}q=n.getTag
p=n.getUnknownTag
o=n.prototypeForTag
$.da=new A.bY(q)
$.d7=new A.bZ(p)
$.dd=new A.c_(o)},
ag(a,b){return a(b)||b},
eM(a,b){var t=b.length,s=v.rttc[""+t+";"+a]
if(s==null)return null
if(t===0)return s
if(t===s.length)return s.apply(null,b)
return s(b)},
cC(a,b,c,d,e,f){var t=b?"m":"",s=c?"":"i",r=d?"u":"",q=e?"s":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,t+s+r+q+f)
if(p instanceof RegExp)return p
throw A.m(new A.bv("Illegal RegExp pattern ("+String(p)+")",a))},
d6(a){return a},
h_(a,b,c,d){var t,s,r,q=new A.ba(b,a,0),p=u.F,o=0,n=""
while(q.n()){t=q.d
if(t==null)t=p.a(t)
s=t.b
r=s.index
n=n+A.q(A.d6(B.i.H(a,o,r)))+A.q(c.$1(t))
o=r+s[0].length}q=n+A.q(A.d6(B.i.a4(a,o)))
return q.charCodeAt(0)==0?q:q},
D:function D(a,b){this.a=a
this.b=b},
aO:function aO(){},
L:function L(a,b,c){this.a=a
this.b=b
this.$ti=c},
ax:function ax(){},
K:function K(){},
aN:function aN(){},
b8:function b8(){},
b6:function b6(){},
a5:function a5(a,b){this.a=a
this.b=b},
bE:function bE(a){this.a=a},
bY:function bY(a){this.a=a},
bZ:function bZ(a){this.a=a},
c_:function c_(a){this.a=a},
Y:function Y(){},
ad:function ad(){},
aT:function aT(a,b){var _=this
_.a=a
_.b=b
_.e=_.c=null},
bd:function bd(a){this.b=a},
ba:function ba(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
h9(a){throw A.x(new A.a8("Field '"+a+"' has been assigned during initialization."),new Error())},
k(){throw A.x(A.dC(""),new Error())},
cJ(){var t=new A.bJ()
return t.b=t},
bJ:function bJ(){this.b=null},
a9:function a9(){},
av:function av(){},
aU:function aU(){},
aa:function aa(){},
at:function at(){},
au:function au(){},
aV:function aV(){},
aW:function aW(){},
aX:function aX(){},
aY:function aY(){},
aZ:function aZ(){},
b_:function b_(){},
b0:function b0(){},
aw:function aw(){},
b1:function b1(){},
aA:function aA(){},
aB:function aB(){},
aC:function aC(){},
aD:function aD(){},
cb(a,b){var t=b.c
return t==null?b.c=A.aG(a,"cz",[b.x]):t},
cG(a){var t=a.w
if(t===6||t===7)return A.cG(a.x)
return t===11||t===12},
dO(a){return a.as},
aJ(a){return A.bP(v.typeUniverse,a,!1)},
Z(a0,a1,a2,a3){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=a1.w
switch(a){case 5:case 1:case 2:case 3:case 4:return a1
case 6:t=a1.x
s=A.Z(a0,t,a2,a3)
if(s===t)return a1
return A.cS(a0,s,!0)
case 7:t=a1.x
s=A.Z(a0,t,a2,a3)
if(s===t)return a1
return A.cR(a0,s,!0)
case 8:r=a1.y
q=A.af(a0,r,a2,a3)
if(q===r)return a1
return A.aG(a0,a1.x,q)
case 9:p=a1.x
o=A.Z(a0,p,a2,a3)
n=a1.y
m=A.af(a0,n,a2,a3)
if(o===p&&m===n)return a1
return A.cf(a0,o,m)
case 10:l=a1.x
k=a1.y
j=A.af(a0,k,a2,a3)
if(j===k)return a1
return A.cT(a0,l,j)
case 11:i=a1.x
h=A.Z(a0,i,a2,a3)
g=a1.y
f=A.eB(a0,g,a2,a3)
if(h===i&&f===g)return a1
return A.cQ(a0,h,f)
case 12:e=a1.y
a3+=e.length
d=A.af(a0,e,a2,a3)
p=a1.x
o=A.Z(a0,p,a2,a3)
if(d===e&&o===p)return a1
return A.cg(a0,o,d,!0)
case 13:c=a1.x
if(c<a3)return a1
b=a2[c-a3]
if(b==null)return a1
return b
default:throw A.m(A.aM("Attempted to substitute unexpected RTI kind "+a))}},
af(a,b,c,d){var t,s,r,q,p=b.length,o=A.bQ(p)
for(t=!1,s=0;s<p;++s){r=b[s]
q=A.Z(a,r,c,d)
if(q!==r)t=!0
o[s]=q}return t?o:b},
eC(a,b,c,d){var t,s,r,q,p,o,n=b.length,m=A.bQ(n)
for(t=!1,s=0;s<n;s+=3){r=b[s]
q=b[s+1]
p=b[s+2]
o=A.Z(a,p,c,d)
if(o!==p)t=!0
m.splice(s,3,r,q,o)}return t?m:b},
eB(a,b,c,d){var t,s=b.a,r=A.af(a,s,c,d),q=b.b,p=A.af(a,q,c,d),o=b.c,n=A.eC(a,o,c,d)
if(r===s&&p===q&&n===o)return b
t=new A.bb()
t.a=r
t.b=p
t.c=n
return t},
z(a,b){a[v.arrayRti]=b
return a},
d8(a){var t=a.$S
if(t!=null){if(typeof t=="number")return A.f8(t)
return a.$S()}return null},
ff(a,b){var t
if(A.cG(b))if(a instanceof A.K){t=A.d8(a)
if(t!=null)return t}return A.aK(a)},
aK(a){if(a instanceof A.p)return A.S(a)
if(Array.isArray(a))return A.ae(a)
return A.ck(J.a0(a))},
ae(a){var t=a[v.arrayRti],s=u.q
if(t==null)return s
if(t.constructor!==s.constructor)return s
return t},
S(a){var t=a.$ti
return t!=null?t:A.ck(a)},
ck(a){var t=a.constructor,s=t.$ccache
if(s!=null)return s
return A.em(a,t)},
em(a,b){var t=a instanceof A.K?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,s=A.e7(v.typeUniverse,t.name)
b.$ccache=s
return s},
f8(a){var t,s=v.types,r=s[a]
if(typeof r=="string"){t=A.bP(v.typeUniverse,r,!1)
s[a]=t
return t}return r},
f7(a){return A.a_(A.S(a))},
cm(a){var t
if(a instanceof A.Y)return A.eS(a.$r,a.S())
t=a instanceof A.K?A.d8(a):null
if(t!=null)return t
if(u.R.b(a))return J.di(a).a
if(Array.isArray(a))return A.ae(a)
return A.aK(a)},
a_(a){var t=a.r
return t==null?a.r=new A.bO(a):t},
eS(a,b){var t,s,r=b,q=r.length
if(q===0)return u.d
if(0>=q)return A.v(r,0)
t=A.aI(v.typeUniverse,A.cm(r[0]),"@<0>")
for(s=1;s<q;++s){if(!(s<r.length))return A.v(r,s)
t=A.cU(v.typeUniverse,t,A.cm(r[s]))}return A.aI(v.typeUniverse,t,a)},
G(a){return A.a_(A.bP(v.typeUniverse,a,!1))},
el(a){var t=this
t.b=A.eA(t)
return t.b(a)},
eA(a){var t,s,r,q,p
if(a===u.K)return A.es
if(A.a1(a))return A.ew
t=a.w
if(t===6)return A.ej
if(t===1)return A.d4
if(t===7)return A.en
s=A.ez(a)
if(s!=null)return s
if(t===8){r=a.x
if(a.y.every(A.a1)){a.f="$i"+r
if(r==="l")return A.eq
if(a===u.m)return A.ep
return A.ev}}else if(t===10){q=A.eM(a.x,a.y)
p=q==null?A.d4:q
return p==null?A.ci(p):p}return A.eh},
ez(a){if(a.w===8){if(a===u.S)return A.d2
if(a===u.i||a===u.H)return A.er
if(a===u.N)return A.eu
if(a===u.y)return A.cl}return null},
ek(a){var t=this,s=A.eg
if(A.a1(t))s=A.ee
else if(t===u.K)s=A.ci
else if(A.ah(t)){s=A.ei
if(t===u.w)s=A.ec
else if(t===u.v)s=A.cY
else if(t===u.u)s=A.ea
else if(t===u.n)s=A.cX
else if(t===u.t)s=A.eb
else if(t===u.z)s=A.R}else if(t===u.S)s=A.bR
else if(t===u.N)s=A.bf
else if(t===u.y)s=A.e9
else if(t===u.H)s=A.ed
else if(t===u.i)s=A.ch
else if(t===u.m)s=A.f
t.a=s
return t.a(a)},
eh(a){var t=this
if(a==null)return A.ah(t)
return A.fg(v.typeUniverse,A.ff(a,t),t)},
ej(a){if(a==null)return!0
return this.x.b(a)},
ev(a){var t,s=this
if(a==null)return A.ah(s)
t=s.f
if(a instanceof A.p)return!!a[t]
return!!J.a0(a)[t]},
eq(a){var t,s=this
if(a==null)return A.ah(s)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
t=s.f
if(a instanceof A.p)return!!a[t]
return!!J.a0(a)[t]},
ep(a){var t=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.p)return!!a[t.f]
return!0}if(typeof a=="function")return!0
return!1},
d3(a){if(typeof a=="object"){if(a instanceof A.p)return u.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
eg(a){var t=this
if(a==null){if(A.ah(t))return a}else if(t.b(a))return a
throw A.x(A.d_(a,t),new Error())},
ei(a){var t=this
if(a==null||t.b(a))return a
throw A.x(A.d_(a,t),new Error())},
d_(a,b){return new A.be("TypeError: "+A.cK(a,A.B(b,null)))},
cK(a,b){return A.bu(a)+": type '"+A.B(A.cm(a),null)+"' is not a subtype of type '"+b+"'"},
E(a,b){return new A.be("TypeError: "+A.cK(a,b))},
en(a){var t=this
return t.x.b(a)||A.cb(v.typeUniverse,t).b(a)},
es(a){return a!=null},
ci(a){if(a!=null)return a
throw A.x(A.E(a,"Object"),new Error())},
ew(a){return!0},
ee(a){return a},
d4(a){return!1},
cl(a){return!0===a||!1===a},
e9(a){if(!0===a)return!0
if(!1===a)return!1
throw A.x(A.E(a,"bool"),new Error())},
ea(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.x(A.E(a,"bool?"),new Error())},
ch(a){if(typeof a=="number")return a
throw A.x(A.E(a,"double"),new Error())},
eb(a){if(typeof a=="number")return a
if(a==null)return a
throw A.x(A.E(a,"double?"),new Error())},
d2(a){return typeof a=="number"&&Math.floor(a)===a},
bR(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.x(A.E(a,"int"),new Error())},
ec(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.x(A.E(a,"int?"),new Error())},
er(a){return typeof a=="number"},
ed(a){if(typeof a=="number")return a
throw A.x(A.E(a,"num"),new Error())},
cX(a){if(typeof a=="number")return a
if(a==null)return a
throw A.x(A.E(a,"num?"),new Error())},
eu(a){return typeof a=="string"},
bf(a){if(typeof a=="string")return a
throw A.x(A.E(a,"String"),new Error())},
cY(a){if(typeof a=="string")return a
if(a==null)return a
throw A.x(A.E(a,"String?"),new Error())},
f(a){if(A.d3(a))return a
throw A.x(A.E(a,"JSObject"),new Error())},
R(a){if(a==null)return a
if(A.d3(a))return a
throw A.x(A.E(a,"JSObject?"),new Error())},
d5(a,b){var t,s,r
for(t="",s="",r=0;r<a.length;++r,s=", ")t+=s+A.B(a[r],b)
return t},
ey(a,b){var t,s,r,q,p,o,n=a.x,m=a.y
if(""===n)return"("+A.d5(m,b)+")"
t=m.length
s=n.split(",")
r=s.length-t
for(q="(",p="",o=0;o<t;++o,p=", "){q+=p
if(r===0)q+="{"
q+=A.B(m[o],b)
if(r>=0)q+=" "+s[r];++r}return q+"})"},
d0(a2,a3,a4){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=", ",a1=null
if(a4!=null){t=a4.length
if(a3==null)a3=A.z([],u.s)
else a1=a3.length
s=a3.length
for(r=t;r>0;--r)B.b.k(a3,"T"+(s+r))
for(q=u.X,p="<",o="",r=0;r<t;++r,o=a0){n=a3.length
m=n-1-r
if(!(m>=0))return A.v(a3,m)
p=p+o+a3[m]
l=a4[r]
k=l.w
if(!(k===2||k===3||k===4||k===5||l===q))p+=" extends "+A.B(l,a3)}p+=">"}else p=""
q=a2.x
j=a2.y
i=j.a
h=i.length
g=j.b
f=g.length
e=j.c
d=e.length
c=A.B(q,a3)
for(b="",a="",r=0;r<h;++r,a=a0)b+=a+A.B(i[r],a3)
if(f>0){b+=a+"["
for(a="",r=0;r<f;++r,a=a0)b+=a+A.B(g[r],a3)
b+="]"}if(d>0){b+=a+"{"
for(a="",r=0;r<d;r+=3,a=a0){b+=a
if(e[r+1])b+="required "
b+=A.B(e[r+2],a3)+" "+e[r]}b+="}"}if(a1!=null){a3.toString
a3.length=a1}return p+"("+b+") => "+c},
B(a,b){var t,s,r,q,p,o,n,m=a.w
if(m===5)return"erased"
if(m===2)return"dynamic"
if(m===3)return"void"
if(m===1)return"Never"
if(m===4)return"any"
if(m===6){t=a.x
s=A.B(t,b)
r=t.w
return(r===11||r===12?"("+s+")":s)+"?"}if(m===7)return"FutureOr<"+A.B(a.x,b)+">"
if(m===8){q=A.eD(a.x)
p=a.y
return p.length>0?q+("<"+A.d5(p,b)+">"):q}if(m===10)return A.ey(a,b)
if(m===11)return A.d0(a,b,null)
if(m===12)return A.d0(a.x,b,a.y)
if(m===13){o=a.x
n=b.length
o=n-1-o
if(!(o>=0&&o<n))return A.v(b,o)
return b[o]}return"?"},
eD(a){var t=v.mangledGlobalNames[a]
if(t!=null)return t
return"minified:"+a},
e8(a,b){var t=a.tR[b]
while(typeof t=="string")t=a.tR[t]
return t},
e7(a,b){var t,s,r,q,p,o=a.eT,n=o[b]
if(n==null)return A.bP(a,b,!1)
else if(typeof n=="number"){t=n
s=A.aH(a,5,"#")
r=A.bQ(t)
for(q=0;q<t;++q)r[q]=s
p=A.aG(a,b,r)
o[b]=p
return p}else return n},
e6(a,b){return A.cV(a.tR,b)},
e5(a,b){return A.cV(a.eT,b)},
bP(a,b,c){var t,s=a.eC,r=s.get(b)
if(r!=null)return r
t=A.cO(A.cM(a,null,b,!1))
s.set(b,t)
return t},
aI(a,b,c){var t,s,r=b.z
if(r==null)r=b.z=new Map()
t=r.get(c)
if(t!=null)return t
s=A.cO(A.cM(a,b,c,!0))
r.set(c,s)
return s},
cU(a,b,c){var t,s,r,q=b.Q
if(q==null)q=b.Q=new Map()
t=c.as
s=q.get(t)
if(s!=null)return s
r=A.cf(a,b,c.w===9?c.y:[c])
q.set(t,r)
return r},
Q(a,b){b.a=A.ek
b.b=A.el
return b},
aH(a,b,c){var t,s,r=a.eC.get(c)
if(r!=null)return r
t=new A.F(null,null)
t.w=b
t.as=c
s=A.Q(a,t)
a.eC.set(c,s)
return s},
cS(a,b,c){var t,s=b.as+"?",r=a.eC.get(s)
if(r!=null)return r
t=A.e3(a,b,s,c)
a.eC.set(s,t)
return t},
e3(a,b,c,d){var t,s,r
if(d){t=b.w
s=!0
if(!A.a1(b))if(!(b===u.P||b===u.T))if(t!==6)s=t===7&&A.ah(b.x)
if(s)return b
else if(t===1)return u.P}r=new A.F(null,null)
r.w=6
r.x=b
r.as=c
return A.Q(a,r)},
cR(a,b,c){var t,s=b.as+"/",r=a.eC.get(s)
if(r!=null)return r
t=A.e1(a,b,s,c)
a.eC.set(s,t)
return t},
e1(a,b,c,d){var t,s
if(d){t=b.w
if(A.a1(b)||b===u.K)return b
else if(t===1)return A.aG(a,"cz",[b])
else if(b===u.P||b===u.T)return u.V}s=new A.F(null,null)
s.w=7
s.x=b
s.as=c
return A.Q(a,s)},
e4(a,b){var t,s,r=""+b+"^",q=a.eC.get(r)
if(q!=null)return q
t=new A.F(null,null)
t.w=13
t.x=b
t.as=r
s=A.Q(a,t)
a.eC.set(r,s)
return s},
aF(a){var t,s,r,q=a.length
for(t="",s="",r=0;r<q;++r,s=",")t+=s+a[r].as
return t},
e0(a){var t,s,r,q,p,o=a.length
for(t="",s="",r=0;r<o;r+=3,s=","){q=a[r]
p=a[r+1]?"!":":"
t+=s+q+p+a[r+2].as}return t},
aG(a,b,c){var t,s,r,q=b
if(c.length>0)q+="<"+A.aF(c)+">"
t=a.eC.get(q)
if(t!=null)return t
s=new A.F(null,null)
s.w=8
s.x=b
s.y=c
if(c.length>0)s.c=c[0]
s.as=q
r=A.Q(a,s)
a.eC.set(q,r)
return r},
cf(a,b,c){var t,s,r,q,p,o
if(b.w===9){t=b.x
s=b.y.concat(c)}else{s=c
t=b}r=t.as+(";<"+A.aF(s)+">")
q=a.eC.get(r)
if(q!=null)return q
p=new A.F(null,null)
p.w=9
p.x=t
p.y=s
p.as=r
o=A.Q(a,p)
a.eC.set(r,o)
return o},
cT(a,b,c){var t,s,r="+"+(b+"("+A.aF(c)+")"),q=a.eC.get(r)
if(q!=null)return q
t=new A.F(null,null)
t.w=10
t.x=b
t.y=c
t.as=r
s=A.Q(a,t)
a.eC.set(r,s)
return s},
cQ(a,b,c){var t,s,r,q,p,o=b.as,n=c.a,m=n.length,l=c.b,k=l.length,j=c.c,i=j.length,h="("+A.aF(n)
if(k>0){t=m>0?",":""
h+=t+"["+A.aF(l)+"]"}if(i>0){t=m>0?",":""
h+=t+"{"+A.e0(j)+"}"}s=o+(h+")")
r=a.eC.get(s)
if(r!=null)return r
q=new A.F(null,null)
q.w=11
q.x=b
q.y=c
q.as=s
p=A.Q(a,q)
a.eC.set(s,p)
return p},
cg(a,b,c,d){var t,s=b.as+("<"+A.aF(c)+">"),r=a.eC.get(s)
if(r!=null)return r
t=A.e2(a,b,c,s,d)
a.eC.set(s,t)
return t},
e2(a,b,c,d,e){var t,s,r,q,p,o,n,m
if(e){t=c.length
s=A.bQ(t)
for(r=0,q=0;q<t;++q){p=c[q]
if(p.w===1){s[q]=p;++r}}if(r>0){o=A.Z(a,b,s,0)
n=A.af(a,c,s,0)
return A.cg(a,o,n,c!==n)}}m=new A.F(null,null)
m.w=12
m.x=b
m.y=c
m.as=d
return A.Q(a,m)},
cM(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
cO(a){var t,s,r,q,p,o,n,m=a.r,l=a.s
for(t=m.length,s=0;s<t;){r=m.charCodeAt(s)
if(r>=48&&r<=57)s=A.dW(s+1,r,m,l)
else if((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124)s=A.cN(a,s,m,l,!1)
else if(r===46)s=A.cN(a,s,m,l,!0)
else{++s
switch(r){case 44:break
case 58:l.push(!1)
break
case 33:l.push(!0)
break
case 59:l.push(A.X(a.u,a.e,l.pop()))
break
case 94:l.push(A.e4(a.u,l.pop()))
break
case 35:l.push(A.aH(a.u,5,"#"))
break
case 64:l.push(A.aH(a.u,2,"@"))
break
case 126:l.push(A.aH(a.u,3,"~"))
break
case 60:l.push(a.p)
a.p=l.length
break
case 62:A.dY(a,l)
break
case 38:A.dX(a,l)
break
case 63:q=a.u
l.push(A.cS(q,A.X(q,a.e,l.pop()),a.n))
break
case 47:q=a.u
l.push(A.cR(q,A.X(q,a.e,l.pop()),a.n))
break
case 40:l.push(-3)
l.push(a.p)
a.p=l.length
break
case 41:A.dV(a,l)
break
case 91:l.push(a.p)
a.p=l.length
break
case 93:p=l.splice(a.p)
A.cP(a.u,a.e,p)
a.p=l.pop()
l.push(p)
l.push(-1)
break
case 123:l.push(a.p)
a.p=l.length
break
case 125:p=l.splice(a.p)
A.e_(a.u,a.e,p)
a.p=l.pop()
l.push(p)
l.push(-2)
break
case 43:o=m.indexOf("(",s)
l.push(m.substring(s,o))
l.push(-4)
l.push(a.p)
a.p=l.length
s=o+1
break
default:throw"Bad character "+r}}}n=l.pop()
return A.X(a.u,a.e,n)},
dW(a,b,c,d){var t,s,r=b-48
for(t=c.length;a<t;++a){s=c.charCodeAt(a)
if(!(s>=48&&s<=57))break
r=r*10+(s-48)}d.push(r)
return a},
cN(a,b,c,d,e){var t,s,r,q,p,o,n=b+1
for(t=c.length;n<t;++n){s=c.charCodeAt(n)
if(s===46){if(e)break
e=!0}else{if(!((((s|32)>>>0)-97&65535)<26||s===95||s===36||s===124))r=s>=48&&s<=57
else r=!0
if(!r)break}}q=c.substring(b,n)
if(e){t=a.u
p=a.e
if(p.w===9)p=p.x
o=A.e8(t,p.x)[q]
if(o==null)A.bi('No "'+q+'" in "'+A.dO(p)+'"')
d.push(A.aI(t,p,o))}else d.push(q)
return n},
dY(a,b){var t,s=a.u,r=A.cL(a,b),q=b.pop()
if(typeof q=="string")b.push(A.aG(s,q,r))
else{t=A.X(s,a.e,q)
switch(t.w){case 11:b.push(A.cg(s,t,r,a.n))
break
default:b.push(A.cf(s,t,r))
break}}},
dV(a,b){var t,s,r,q=a.u,p=b.pop(),o=null,n=null
if(typeof p=="number")switch(p){case-1:o=b.pop()
break
case-2:n=b.pop()
break
default:b.push(p)
break}else b.push(p)
t=A.cL(a,b)
p=b.pop()
switch(p){case-3:p=b.pop()
if(o==null)o=q.sEA
if(n==null)n=q.sEA
s=A.X(q,a.e,p)
r=new A.bb()
r.a=t
r.b=o
r.c=n
b.push(A.cQ(q,s,r))
return
case-4:b.push(A.cT(q,b.pop(),t))
return
default:throw A.m(A.aM("Unexpected state under `()`: "+A.q(p)))}},
dX(a,b){var t=b.pop()
if(0===t){b.push(A.aH(a.u,1,"0&"))
return}if(1===t){b.push(A.aH(a.u,4,"1&"))
return}throw A.m(A.aM("Unexpected extended operation "+A.q(t)))},
cL(a,b){var t=b.splice(a.p)
A.cP(a.u,a.e,t)
a.p=b.pop()
return t},
X(a,b,c){if(typeof c=="string")return A.aG(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.dZ(a,b,c)}else return c},
cP(a,b,c){var t,s=c.length
for(t=0;t<s;++t)c[t]=A.X(a,b,c[t])},
e_(a,b,c){var t,s=c.length
for(t=2;t<s;t+=3)c[t]=A.X(a,b,c[t])},
dZ(a,b,c){var t,s,r=b.w
if(r===9){if(c===0)return b.x
t=b.y
s=t.length
if(c<=s)return t[c-1]
c-=s
b=b.x
r=b.w}else if(c===0)return b
if(r!==8)throw A.m(A.aM("Indexed base must be an interface type"))
t=b.y
if(c<=t.length)return t[c-1]
throw A.m(A.aM("Bad index "+c+" for "+b.j(0)))},
fg(a,b,c){var t,s=b.d
if(s==null)s=b.d=new Map()
t=s.get(c)
if(t==null){t=A.u(a,b,null,c,null)
s.set(c,t)}return t},
u(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(A.a1(d))return!0
t=b.w
if(t===4)return!0
if(A.a1(b))return!1
if(b.w===1)return!0
s=t===13
if(s)if(A.u(a,c[b.x],c,d,e))return!0
r=d.w
q=u.P
if(b===q||b===u.T){if(r===7)return A.u(a,b,c,d.x,e)
return d===q||d===u.T||r===6}if(d===u.K){if(t===7)return A.u(a,b.x,c,d,e)
return t!==6}if(t===7){if(!A.u(a,b.x,c,d,e))return!1
return A.u(a,A.cb(a,b),c,d,e)}if(t===6)return A.u(a,q,c,d,e)&&A.u(a,b.x,c,d,e)
if(r===7){if(A.u(a,b,c,d.x,e))return!0
return A.u(a,b,c,A.cb(a,d),e)}if(r===6)return A.u(a,b,c,q,e)||A.u(a,b,c,d.x,e)
if(s)return!1
q=t!==11
if((!q||t===12)&&d===u.Z)return!0
p=t===10
if(p&&d===u.O)return!0
if(r===12){if(b===u.M)return!0
if(t!==12)return!1
o=b.y
n=d.y
m=o.length
if(m!==n.length)return!1
c=c==null?o:o.concat(c)
e=e==null?n:n.concat(e)
for(l=0;l<m;++l){k=o[l]
j=n[l]
if(!A.u(a,k,c,j,e)||!A.u(a,j,e,k,c))return!1}return A.d1(a,b.x,c,d.x,e)}if(r===11){if(b===u.M)return!0
if(q)return!1
return A.d1(a,b,c,d,e)}if(t===8){if(r!==8)return!1
return A.eo(a,b,c,d,e)}if(p&&r===10)return A.et(a,b,c,d,e)
return!1},
d1(a2,a3,a4,a5,a6){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
if(!A.u(a2,a3.x,a4,a5.x,a6))return!1
t=a3.y
s=a5.y
r=t.a
q=s.a
p=r.length
o=q.length
if(p>o)return!1
n=o-p
m=t.b
l=s.b
k=m.length
j=l.length
if(p+k<o+j)return!1
for(i=0;i<p;++i){h=r[i]
if(!A.u(a2,q[i],a6,h,a4))return!1}for(i=0;i<n;++i){h=m[i]
if(!A.u(a2,q[p+i],a6,h,a4))return!1}for(i=0;i<j;++i){h=m[n+i]
if(!A.u(a2,l[i],a6,h,a4))return!1}g=t.c
f=s.c
e=g.length
d=f.length
for(c=0,b=0;b<d;b+=3){a=f[b]
for(;;){if(c>=e)return!1
a0=g[c]
c+=3
if(a<a0)return!1
a1=g[c-2]
if(a0<a){if(a1)return!1
continue}h=f[b+1]
if(a1&&!h)return!1
h=g[c-1]
if(!A.u(a2,f[b+2],a6,h,a4))return!1
break}}while(c<e){if(g[c+1])return!1
c+=3}return!0},
eo(a,b,c,d,e){var t,s,r,q,p,o=b.x,n=d.x
while(o!==n){t=a.tR[o]
if(t==null)return!1
if(typeof t=="string"){o=t
continue}s=t[n]
if(s==null)return!1
r=s.length
q=r>0?new Array(r):v.typeUniverse.sEA
for(p=0;p<r;++p)q[p]=A.aI(a,b,s[p])
return A.cW(a,q,null,c,d.y,e)}return A.cW(a,b.y,null,c,d.y,e)},
cW(a,b,c,d,e,f){var t,s=b.length
for(t=0;t<s;++t)if(!A.u(a,b[t],d,e[t],f))return!1
return!0},
et(a,b,c,d,e){var t,s=b.y,r=d.y,q=s.length
if(q!==r.length)return!1
if(b.x!==d.x)return!1
for(t=0;t<q;++t)if(!A.u(a,s[t],c,r[t],e))return!1
return!0},
ah(a){var t=a.w,s=!0
if(!(a===u.P||a===u.T))if(!A.a1(a))if(t!==6)s=t===7&&A.ah(a.x)
return s},
a1(a){var t=a.w
return t===2||t===3||t===4||t===5||a===u.X},
cV(a,b){var t,s,r=Object.keys(b),q=r.length
for(t=0;t<q;++t){s=r[t]
a[s]=b[s]}},
bQ(a){return a>0?new Array(a):v.typeUniverse.sEA},
F:function F(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
bb:function bb(){this.c=this.b=this.a=null},
bO:function bO(a){this.a=a},
bL:function bL(){},
be:function be(a){this.a=a},
dD(a){return new A.V(a.t("V<0>"))},
dE(a){return new A.V(a.t("V<0>"))},
ce(){var t=Object.create(null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
dU(a,b,c){var t=new A.W(a,b,c.t("W<0>"))
t.c=a.e
return t},
dF(a,b){var t,s,r,q=A.dD(b)
for(t=A.dU(a,a.r,A.S(a).c),s=t.$ti.c;t.n();){r=t.d
q.k(0,b.a(r==null?s.a(r):r))}return q},
dI(a){var t,s
if(A.cq(a))return"{...}"
t=new A.b7("")
try{s={}
B.b.k($.C,a)
t.a+="{"
s.a=!0
a.al(0,new A.by(s,t))
t.a+="}"}finally{if(0>=$.C.length)return A.v($.C,-1)
$.C.pop()}s=t.a
return s.charCodeAt(0)==0?s:s},
V:function V(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
bc:function bc(a){this.a=a
this.c=this.b=null},
W:function W(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
o:function o(){},
by:function by(a,b){this.a=a
this.b=b},
ab:function ab(){},
aE:function aE(){},
dG(a,b,c,d){var t,s=J.dy(a,d)
if(a!==0)for(t=0;t<a;++t)s[t]=b
return s},
dH(a,b,c){var t,s,r=A.z([],c.t("t<0>"))
for(t=a.length,s=0;s<a.length;a.length===t||(0,A.c5)(a),++s)B.b.k(r,c.a(a[s]))
r.$flags=1
return r},
cD(a,b){var t=A.dH(a,!1,b)
t.$flags=3
return t},
dN(a){return new A.aT(a,A.cC(a,!1,!0,!1,!1,""))},
cH(a,b,c){var t=J.cs(b)
if(!t.n())return a
if(c.length===0){do a+=A.q(t.gq())
while(t.n())}else{a+=A.q(t.gq())
while(t.n())a=a+c+A.q(t.gq())}return a},
bu(a){if(typeof a=="number"||A.cl(a)||a==null)return J.aL(a)
if(typeof a=="string")return JSON.stringify(a)
return A.cF(a)},
aM(a){return new A.bl(a)},
bk(a){return new A.a3(!1,null,null,a)},
dK(a,b){return new A.b5(null,null,!0,a,b,"Value not in range")},
bC(a,b,c,d,e){return new A.b5(b,c,!0,a,d,"Invalid value")},
dL(a,b,c){if(0>a||a>c)throw A.m(A.bC(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.m(A.bC(b,a,c,"end",null))
return b}return c},
dt(a,b,c,d){return new A.bw(b,!0,a,d,"Index out of range")},
dT(a){return new A.b9(a)},
cI(a){return new A.bI(a)},
c8(a){return new A.bs(a)},
dx(a,b,c){var t,s
if(A.cq(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=A.z([],u.s)
B.b.k($.C,a)
try{A.ex(a,t)}finally{if(0>=$.C.length)return A.v($.C,-1)
$.C.pop()}s=A.cH(b,u.U.a(t),", ")+c
return s.charCodeAt(0)==0?s:s},
c9(a,b,c){var t,s
if(A.cq(a))return b+"..."+c
t=new A.b7(b)
B.b.k($.C,a)
try{s=t
s.a=A.cH(s.a,a,", ")}finally{if(0>=$.C.length)return A.v($.C,-1)
$.C.pop()}t.a+=c
s=t.a
return s.charCodeAt(0)==0?s:s},
ex(a,b){var t,s,r,q,p,o,n,m=a.gv(a),l=0,k=0
for(;;){if(!(l<80||k<3))break
if(!m.n())return
t=A.q(m.gq())
B.b.k(b,t)
l+=t.length+2;++k}if(!m.n()){if(k<=5)return
if(0>=b.length)return A.v(b,-1)
s=b.pop()
if(0>=b.length)return A.v(b,-1)
r=b.pop()}else{q=m.gq();++k
if(!m.n()){if(k<=4){B.b.k(b,A.q(q))
return}s=A.q(q)
if(0>=b.length)return A.v(b,-1)
r=b.pop()
l+=s.length+2}else{p=m.gq();++k
for(;m.n();q=p,p=o){o=m.gq();++k
if(k>100){for(;;){if(!(l>75&&k>3))break
if(0>=b.length)return A.v(b,-1)
l-=b.pop().length+2;--k}B.b.k(b,"...")
return}}r=A.q(q)
s=A.q(p)
l+=s.length+r.length+4}}if(k>b.length+2){l+=5
n="..."}else n=null
for(;;){if(!(l>80&&b.length>3))break
if(0>=b.length)return A.v(b,-1)
l-=b.pop().length+2
if(n==null){l+=5
n="..."}}if(n!=null)B.b.k(b,n)
B.b.k(b,r)
B.b.k(b,s)},
dJ(a,b,c,d){var t
if(B.j===c){t=B.h.gm(a)
b=J.J(b)
return A.cd(A.P(A.P($.c6(),t),b))}if(B.j===d){t=B.h.gm(a)
b=J.J(b)
c=J.J(c)
return A.cd(A.P(A.P(A.P($.c6(),t),b),c))}t=B.h.gm(a)
b=J.J(b)
c=J.J(c)
d=J.J(d)
d=A.cd(A.P(A.P(A.P(A.P($.c6(),t),b),c),d))
return d},
bK:function bK(){},
bt:function bt(){},
bl:function bl(a){this.a=a},
bH:function bH(){},
a3:function a3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b5:function b5(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
bw:function bw(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
b9:function b9(a){this.a=a},
bI:function bI(a){this.a=a},
bG:function bG(a){this.a=a},
bs:function bs(a){this.a=a},
bv:function bv(a,b){this.a=a
this.b=b},
h:function h(){},
T:function T(){},
p:function p(){},
b7:function b7(a){this.a=a},
br:function br(a,b,c){this.a=a
this.b=b
this.c=c},
bm:function bm(){},
bn:function bn(){},
bo:function bo(){},
bp:function bp(){},
bq:function bq(){},
ak:function ak(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.ch=_.ay=_.ax=_.at=_.as=_.Q=_.z=_.y=_.x=$},
aj:function aj(a){this.a=a
this.b=""},
e:function e(a,b){this.a=a
this.b=b},
r:function r(a,b){this.a=a
this.b=b},
d:function d(a,b){this.a=a
this.b=b},
fy(a){var t,s,r=B.ap.B(0,a)
if(r==null)r=a
for(t=0;t<92;++t){s=B.k[t]
if(s.a===r)return s}return B.b.gW(B.k)},
a:function a(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
H:function H(a,b,c,d,e,f){var _=this
_.b=a
_.d=b
_.e=c
_.f=d
_.r=e
_.w=f},
a4:function a4(a,b){this.a=a
this.b=b},
az:function az(a,b,c,d,e,f,g,h,i,j){var _=this
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
b(a,b){var t,s,r
if(a>=1e6&&!b)return B.c.a2(a/1e6,1)+" \u043c\u043b\u043d \u20bd"
if(!b)t=(a<0?Math.ceil(a):Math.floor(a))!==a
else t=!0
s=B.c.a2(a,t?2:0).split(".")
r=A.h_(B.b.gW(s),A.dN("(\\d{1,3})(?=(\\d{3})+(?!\\d))"),u.A.a(u.Q.a(new A.bX())),null)
if(s.length===1)return r+" \u20bd"
return r+"."+B.b.gam(s)+" \u20bd"},
fu(a){var t="\u043d\u0430\u0439\u0434\u0435\u043d\u043e \u0432\u044b\u043f\u043b\u0430\u0442",s=B.h.P(a,100),r=B.h.P(a,10)
if(s>=11&&s<=19)return t
if(r===1)return"\u043d\u0430\u0439\u0434\u0435\u043d\u0430 \u0432\u044b\u043f\u043b\u0430\u0442\u0430"
if(r>=2&&r<=4)return"\u043d\u0430\u0439\u0434\u0435\u043d\u043e \u0432\u044b\u043f\u043b\u0430\u0442\u044b"
return t},
bX:function bX(){},
fk(){var t,s,r,q,p,o,n,m,l="Attempting to rewrap a JS function.",k=u.L,j=A.z([B.p],k)
for(t=0;t<9;++t){s=B.aj[t]
j.push(new A.D(s.a,s.b))}A.bT("employment",j)
j=A.z([],k)
for(t=0;t<92;++t){r=B.k[t]
j.push(new A.D(r.a,r.b))}A.bT("region",j)
A.bT("marital",B.ae)
k=A.z([],k)
for(j=u.l.a(new A.c1()),q=B.b.gv(B.ad),j=new A.U(q,j,u.e);j.n();){p=q.gq()
k.push(new A.D(p.a,p.b))}A.bT("youngestChildAge",k)
A.bg("childChecks",B.ai)
A.bg("familyChecks",B.ak)
A.bg("housingChecks",B.ah)
A.bg("taxChecks",B.al)
A.bg("specialChecks",B.af)
for(k=A.cZ,j=v.G,t=0;t<9;++t){o=B.ag[t]
n=A.R(A.f(j.document).getElementById(o))
q=n==null
if(!q){p=new A.c2()
if(typeof p=="function")A.bi(A.bk(l))
m=function(a,b){return function(c){return a(b,c,arguments.length)}}(k,p)
m[$.bj()]=p
n.addEventListener("input",m)}if(!q){q=new A.c3()
if(typeof q=="function")A.bi(A.bk(l))
m=function(a,b){return function(c){return a(b,c,arguments.length)}}(k,q)
m[$.bj()]=q
n.addEventListener("change",m)}}A.bV()},
bT(a,b){var t,s,r,q,p=v.G,o=A.R(A.f(p.document).getElementById(a))
if(o==null)return
for(t=b.length,s=0;s<b.length;b.length===t||(0,A.c5)(b),++s){r=b[s]
q=A.f(A.f(p.document).createElement("option"))
q.value=r.a
q.text=r.b
A.f(o.appendChild(q))}},
bg(a,b){var t,s,r,q,p,o,n,m=v.G,l=A.R(A.f(m.document).getElementById(a))
if(l==null)return
for(t=b.length,s=A.cZ,r=0;r<t;++r){q=b[r]
p=A.f(A.f(m.document).createElement("div"))
p.className="chip"
p.textContent=q.b
o=new A.bS(q,p)
if(typeof o=="function")A.bi(A.bk("Attempting to rewrap a JS function."))
n=function(c,d){return function(e){return c(d,e,arguments.length)}}(s,o)
n[$.bj()]=o
p.addEventListener("click",n)
A.f(l.appendChild(p))}},
bU(a){var t=A.R(A.f(v.G.document).getElementById(a))
t=t==null?null:A.bf(t.value)
return t==null?"":t},
bh(a){var t=A.R(A.f(v.G.document).getElementById(a))
t=t==null?null:A.bf(t.value)
return t==null?"":t},
bV(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=$.dg(),a3=A.bB(A.bU("children"),null)
if(a3==null)a3=0
t=v.G
s=A.R(A.f(t.document).getElementById("youngestWrap"))
r=a3>0
if(r){if(s!=null)A.f(s.classList).remove("hidden")}else if(s!=null)A.f(s.classList).add("hidden")
q=A.bh("region")
p=A.bU("familySize")
o=A.bh("youngestChildAge")
n=A.bU("age")
m=A.bh("gender")
l=A.bh("employment")
k=q.length===0?"regular":q
j=A.bh("marital")
if(r)r=o.length===0?"3":o
else r="99"
i=A.dF($.cj,u.N)
h=A.bU("income")
g=a2.ah(new A.az(n,m,l,k,j,a3,r,i,h,p.length===0?"1":p))
f=A.R(A.f(t.document).getElementById("list"))
if(f!=null){f.textContent=""
for(a2=g.a,r=a2.length,e=0;e<a2.length;a2.length===r||(0,A.c5)(a2),++e){d=a2[e]
c=A.f(A.f(t.document).createElement("div"))
c.className="benefit"
b=A.f(A.f(t.document).createElement("div"))
b.className="row"
a=A.f(A.f(t.document).createElement("div"))
a.className="name"
a.textContent=d.e+" "+d.b
A.f(b.appendChild(a))
a=A.f(A.f(t.document).createElement("div"))
a.className="amt"
a.textContent=d.f
A.f(b.appendChild(a))
A.f(c.appendChild(b))
n=d.d
if(n.length!==0){b=A.f(A.f(t.document).createElement("div"))
b.className="desc"
b.textContent=n
A.f(c.appendChild(b))}A.f(f.appendChild(c))}}a0=A.R(A.f(t.document).getElementById("result"))
if(a0!=null){a0.textContent=""
c=A.f(A.f(t.document).createElement("div"))
c.className="total"
a2=g.a
r=a2.length===0?"\u041f\u043e\u043a\u0430 \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e":"\u2248 "+A.b(g.b,!1)+"/\u043c\u0435\u0441"
c.textContent=r
A.f(a0.appendChild(c))
a2=a2.length
a1=A.z([A.fu(a2)+": "+a2],u.s)
a2=g.c
if(a2>0)B.b.k(a1,A.b(a2,!1)+" \u0440\u0430\u0437\u043e\u0432\u043e")
c=A.f(A.f(t.document).createElement("div"))
c.className="sub"
c.textContent=B.b.Y(a1," \xb7 ")
A.f(a0.appendChild(c))}},
c1:function c1(){},
c2:function c2(){},
c3:function c3(){},
bS:function bS(a,b){this.a=a
this.b=b},
cZ(a,b,c){u.Z.a(a)
if(A.bR(c)>=1)return a.$1(b)
return a.$0()},
fv(a,b,c){var t,s,r,q,p,o,n
if(!a.w.i(0,"pregnant")||a.b!=="female")return
t=b.b
if(t>0&&t<14)return
if(b.gZ()){t=b.y
t===$&&A.k()
s=b.w
r=s.x
if(t<r*0.67)q=1
else q=t<r*0.85?0.75:0.5
p=B.c.p(s.y*q)
c.h(0,"c","\ud83e\udd30",B.e,"\u0415\u0434\u0438\u043d\u043e\u0435 \u043f\u043e\u0441\u043e\u0431\u0438\u0435 \u0431\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0439 (\u0440\u0430\u043d\u043d\u0438\u0435 \u0441\u0440\u043e\u043a\u0438)","\u041f\u0440\u0438 \u043f\u043e\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0435 \u043d\u0430 \u0443\u0447\u0451\u0442 \u0434\u043e 12 \u043d\u0435\u0434., \u0434\u043b\u044f \u043c\u0430\u043b\u043e\u0438\u043c\u0443\u0449\u0438\u0445. "+B.c.F(q*100)+"% \u041f\u041c \u0442\u0440\u0443\u0434\u043e\u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0433\u043e \u043d\u0430\u0441\u0435\u043b\u0435\u043d\u0438\u044f \u0440\u0435\u0433\u0438\u043e\u043d\u0430 = "+A.b(p,!1)+"/\u043c\u0435\u0441.",p,A.b(p,!1)+"/\u043c\u0435\u0441","monthly")}o=b.e
n=Math.min(B.c.p((o>0?o:Math.max(27093,b.c/b.d))*24/730*140),955836)
c.h(0,"c","\ud83e\udd31",B.e,"\u041f\u043e\u0441\u043e\u0431\u0438\u0435 \u043f\u043e \u0431\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u0438 \u0440\u043e\u0434\u0430\u043c","100% \u0441\u0440. \u0437\u0430\u0440\u043f\u043b\u0430\u0442\u044b \u0437\u0430 140 \u0434\u043d\u0435\u0439 (\u0441\u0440. \u0434\u043d. = \u0437\u043f \xd7 24 / 730). \u041c\u0430\u043a\u0441: "+A.b(955836,!1)+".",n,A.b(n,!1)+" (\u0435\u0434\u0438\u043d\u043e\u0432\u0440.)","once")},
fr(a,b,c){if(!a.w.i(0,"newborn"))return
c.h(0,"c","\ud83c\udf81",B.e,"\u0415\u0434\u0438\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0435 \u043f\u0440\u0438 \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u0438","\u041d\u0430 \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u0440\u0435\u0431\u0451\u043d\u043a\u0430. \u0413\u043e\u0441\u0443\u0441\u043b\u0443\u0433\u0438 \u0438\u043b\u0438 \u041c\u0424\u0426.",28450.45,A.b(28450.45,!0),"once")},
fm(a,b,c){var t,s,r="once",q=a.w
if(q.i(0,"used_matcap"))return
t=q.i(0,"newborn")||q.i(0,"pregnant")
q=a.f
s=t?1:0
if(t&&q===0)c.h(0,"c","\ud83c\udfe6",B.d,"\u041c\u0430\u0442\u0435\u0440\u0438\u043d\u0441\u043a\u0438\u0439 \u043a\u0430\u043f\u0438\u0442\u0430\u043b (1-\u0439 \u0440\u0435\u0431\u0451\u043d\u043e\u043a)","\u0418\u043f\u043e\u0442\u0435\u043a\u0430, \u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0435, \u043f\u0435\u043d\u0441\u0438\u044f, \u0440\u0435\u0430\u0431\u0438\u043b\u0438\u0442\u0430\u0446\u0438\u044f.",728921.9,A.b(728921.9,!1),r)
else if(t&&q>=1)c.h(0,"c","\ud83c\udfe6",B.d,"\u041c\u0430\u0442\u0435\u0440\u0438\u043d\u0441\u043a\u0438\u0439 \u043a\u0430\u043f\u0438\u0442\u0430\u043b (2-\u0439 \u0438 \u0434\u0430\u043b\u0435\u0435)","\u041f\u043e\u043b\u043d\u0430\u044f \u0441\u0443\u043c\u043c\u0430 \u0435\u0441\u043b\u0438 \u043d\u0430 1-\u0433\u043e \u043d\u0435 \u043f\u043e\u043b\u0443\u0447\u0430\u043b\u0438, \u0438\u043d\u0430\u0447\u0435 \u0434\u043e\u043f\u043b\u0430\u0442\u0430.",963243.17,A.b(963243.17,!1),r)
else if(!t&&q+s>=2)c.h(0,"c","\ud83c\udfe6",B.d,"\u041c\u0430\u0442\u043a\u0430\u043f\u0438\u0442\u0430\u043b (2-\u0439 \u0438 \u0434\u0430\u043b\u0435\u0435)","\u0415\u0441\u043b\u0438 \u043d\u0430 1-\u0433\u043e \u043d\u0435 \u043f\u043e\u043b\u0443\u0447\u0430\u043b\u0438 \u2014 \u043f\u043e\u043b\u043d\u0430\u044f \u0441\u0443\u043c\u043c\u0430.",963243.17,A.b(963243.17,!1),r)},
eG(a,b,c){var t,s,r,q,p
if(b.r>1.5||a.f<=0||a.w.i(0,"pregnant"))return
t=b.e
t=t>0?t:Math.max(27093,b.c/b.d)
s=a.c
r=s==="employed"||s==="matleave"||s==="ip"||s==="self"?10837.2:10669.64
q=Math.max(r,Math.min(B.c.p(t*0.4),83021.19))
s=A.b(r,!0)
p=A.b(83021.19,!0)
c.h(0,"c","\ud83c\udf7c",B.e,"\u041f\u043e\u0441\u043e\u0431\u0438\u0435 \u043f\u043e \u0443\u0445\u043e\u0434\u0443 \u0434\u043e 1,5 \u043b\u0435\u0442","40% \u0441\u0440. \u0437\u0430\u0440\u043f\u043b\u0430\u0442\u044b. \u041c\u0438\u043d "+s+", \u043c\u0430\u043a\u0441 "+p+".",q,A.b(q,(q<0?Math.ceil(q):Math.floor(q))!==q)+"/\u043c\u0435\u0441","monthly")},
hc(a,b,c){var t,s,r,q,p,o,n,m,l=a.f,k=!1
if(l>=3){t=b.y
t===$&&A.k()
s=b.w.x
if(t>=s){if(t<s*1.1)t=(!b.ga1()||b.c>=18062)&&b.ga_()&&b.ga0()
else t=k
k=t}}if(l>0)t=!(b.gZ()||k)
else t=!0
if(t)return
if(k)r=0.5
else{t=b.y
t===$&&A.k()
s=b.w.x
if(t<s*0.67)r=1
else{t=t<s*0.85?0.75:0.5
r=t}}t=b.w
s=t.z
q=B.c.p(s*r)
p=k?"\u041c\u043d\u043e\u0433\u043e\u0434\u0435\u0442\u043d\u044b\u043c \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u0435\u0442\u0441\u044f \u043f\u0440\u0438 \u043f\u0440\u0435\u0432\u044b\u0448\u0435\u043d\u0438\u0438 \u0434\u043e\u0445\u043e\u0434\u0430 \u0434\u043e 10% \u041f\u041c (\u0441 22.05.2026). ":""
o=B.c.F(r*100)
s=A.b(s,!1)
n=b.y
n===$&&A.k()
m=q*l
c.h(0,"c","\ud83d\udc76",B.e,"\u0415\u0434\u0438\u043d\u043e\u0435 \u043f\u043e\u0441\u043e\u0431\u0438\u0435 \u043d\u0430 \u0434\u0435\u0442\u0435\u0439 \u0434\u043e 17",p+o+"% \u0440\u0435\u0433\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u041f\u041c \u0440\u0435\u0431\u0451\u043d\u043a\u0430 ("+s+"). \u0412\u0430\u0448 \u0434\u043e\u0445\u043e\u0434 \u043d\u0430 \u0447\u0435\u043b.: "+A.b(n,!1)+", \u043f\u043e\u0440\u043e\u0433: "+A.b(t.x,!1)+".",m,A.b(q,!1)+" \xd7 "+l+" = "+A.b(m,!1)+"/\u043c\u0435\u0441","monthly")},
eT(a,b,c){var t,s,r,q=a.f
if(q<2)t=q>=1&&a.w.i(0,"child_study")
else t=!0
q=b.ch
q===$&&A.k()
if(q){q=b.z
q===$&&A.k()}else q=!1
s=!0
if(q)if(t){q=b.y
q===$&&A.k()
q=q>=b.w.x*1.5||a.w.i(0,"alimony_debt")}else q=s
else q=s
if(q)return
q=b.x
q===$&&A.k()
r=B.c.p(q*0.5384615384615384)
c.h(0,"c","\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc66",B.d,"\u0415\u0436\u0435\u0433\u043e\u0434\u043d\u0430\u044f \u0441\u0435\u043c\u0435\u0439\u043d\u0430\u044f \u0432\u044b\u043f\u043b\u0430\u0442\u0430","\u0412\u043e\u0437\u0432\u0440\u0430\u0442 7 \u0438\u0437 13 \u043f.\u043f. \u041d\u0414\u0424\u041b \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u0430\u044e\u0449\u0438\u0445 \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u0435\u0439 \u0441 2+ \u0434\u0435\u0442\u044c\u043c\u0438 \u043f\u0440\u0438 \u0434\u043e\u0445\u043e\u0434\u0435 \u043d\u0438\u0436\u0435 1,5 \u041f\u041c \u043d\u0430 \u0447\u0435\u043b. \u0414\u0435\u0439\u0441\u0442\u0432\u0443\u0435\u0442 \u0441 1 \u0438\u044e\u043d\u044f 2026 \u0433. (\u0424\u0417 \u211658-\u0424\u0417).",r,A.b(r,!1)+"/\u0433\u043e\u0434","once")},
fq(a,b,c){if(a.f<3||!a.w.i(0,"has_mortgage"))return
c.h(0,"c","\ud83c\udfe1",B.d,"450 000 \u20bd \u043d\u0430 \u0438\u043f\u043e\u0442\u0435\u043a\u0443 (\u043c\u043d\u043e\u0433\u043e\u0434\u0435\u0442\u043d\u044b\u0435)","\u041f\u0440\u0438 3+ \u0434\u0435\u0442\u044f\u0445 \u043f\u043e\u0441\u043b\u0435 01.01.2019.",45e4,A.b(45e4,!1),"once")},
eP(a,b,c){var t
if(!a.w.i(0,"disabled_child"))return
c.h(0,"c","\ud83e\uddd2",B.a,"\u0412\u044b\u043f\u043b\u0430\u0442\u044b \u043d\u0430 \u0440\u0435\u0431\u0451\u043d\u043a\u0430-\u0438\u043d\u0432\u0430\u043b\u0438\u0434\u0430","\u0421\u043e\u0446\u0438\u0430\u043b\u044c\u043d\u0430\u044f \u043f\u0435\u043d\u0441\u0438\u044f (~22 618 \u20bd) + \u0415\u0414\u0412 \u043f\u0440\u0438 \u043e\u0442\u043a\u0430\u0437\u0435 \u043e\u0442 \u041d\u0421\u0423 (~4 447 \u20bd).",27065,"~"+A.b(27065,!1)+"/\u043c\u0435\u0441","monthly")
t=a.c
if(t!=="employed"&&t!=="ip"&&t!=="self"&&t!=="pensioner")c.h(0,"c","\ud83e\udd1d",B.a,"\u041f\u043e\u0441\u043e\u0431\u0438\u0435 \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u044e \u0440\u0435\u0431\u0451\u043d\u043a\u0430-\u0438\u043d\u0432\u0430\u043b\u0438\u0434\u0430","\u041d\u0435\u0440\u0430\u0431\u043e\u0442\u0430\u044e\u0449\u0435\u043c\u0443/\u0437\u0430\u043d\u044f\u0442\u043e\u043c\u0443 \u043d\u0435\u043f\u043e\u043b\u043d\u043e \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u044e \u0438\u043b\u0438 \u043e\u043f\u0435\u043a\u0443\u043d\u0443 (\u0423\u043a\u0430\u0437 \u2116175). \u0418\u043d\u0434\u0435\u043a\u0441\u0438\u0440\u0443\u0435\u0442\u0441\u044f 1 \u0444\u0435\u0432\u0440\u0430\u043b\u044f.",11300,"~"+A.b(11300,!1)+"/\u043c\u0435\u0441","monthly")},
he(a,b,c){var t=a.w,s=!0
if(t.i(0,"young_family"))if(b.b<=35)if(a.e==="married")t=!(t.i(0,"need_housing")||t.i(0,"rent_home"))
else t=s
else t=s
else t=s
if(t)return
c.h(0,"h","\ud83d\udc6b",B.d,"\u041f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0430 \xab\u041c\u043e\u043b\u043e\u0434\u0430\u044f \u0441\u0435\u043c\u044c\u044f\xbb","\u0421\u043e\u0446\u0432\u044b\u043f\u043b\u0430\u0442\u0430 \u043d\u0430 \u043f\u043e\u043a\u0443\u043f\u043a\u0443/\u0441\u0442\u0440\u043e\u0438\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u043e \u0436\u0438\u043b\u044c\u044f.",0,"30\u201335% \u0441\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u0438 \u0436\u0438\u043b\u044c\u044f","benefit")},
eE(a,b,c){var t="once",s="\u041f\u0440\u0430\u0432\u043e \u043d\u0430 \u043c\u0430\u0442\u043a\u0430\u043f\u0438\u0442\u0430\u043b \u0440\u0430\u0441\u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u044f\u0435\u0442\u0441\u044f \u043d\u0430 \u0443\u0441\u044b\u043d\u043e\u0432\u043b\u0451\u043d\u043d\u044b\u0445 \u0434\u0435\u0442\u0435\u0439.",r=a.w
if(!r.i(0,"i_adopt"))return
c.h(0,"c","\ud83d\udc9b",B.e,"\u0415\u0434\u0438\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0435 \u043f\u0440\u0438 \u0443\u0441\u044b\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0438","\u0421\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u0430\u044f \u0432\u044b\u043f\u043b\u0430\u0442\u0430 \u043f\u0440\u0438 \u0443\u0441\u044b\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0438. \u041e\u0444\u043e\u0440\u043c\u043b\u044f\u0435\u0442\u0441\u044f \u0447\u0435\u0440\u0435\u0437 \u0413\u043e\u0441\u0443\u0441\u043b\u0443\u0433\u0438.",28450.45,A.b(28450.45,!0),t)
c.h(0,"c","\ud83d\udc9b",B.d,"\u041f\u043e\u0432\u044b\u0448\u0435\u043d\u043d\u043e\u0435 \u043f\u043e\u0441\u043e\u0431\u0438\u0435 \u043f\u0440\u0438 \u0443\u0441\u044b\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0438","\u0415\u0441\u043b\u0438 \u0440\u0435\u0431\u0451\u043d\u043a\u0443 7+ \u043b\u0435\u0442, \u0440\u0435\u0431\u0451\u043d\u043e\u043a-\u0438\u043d\u0432\u0430\u043b\u0438\u0434 \u0438\u043b\u0438 \u0443\u0441\u044b\u043d\u043e\u0432\u043b\u044f\u0435\u0442\u0435 \u0431\u0440\u0430\u0442\u044c\u0435\u0432/\u0441\u0435\u0441\u0442\u0451\u0440.",0,"\u0434\u043e "+A.b(217384.58,!0)+" (\u0441\u043f\u0435\u0446. \u0441\u043b\u0443\u0447\u0430\u0438)","benefit")
if(r.i(0,"used_matcap"))return
r=a.f
if(r===0)c.h(0,"c","\ud83c\udfe6",B.d,"\u041c\u0430\u0442\u0435\u0440\u0438\u043d\u0441\u043a\u0438\u0439 \u043a\u0430\u043f\u0438\u0442\u0430\u043b \u043f\u0440\u0438 \u0443\u0441\u044b\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0438 (1-\u0439)",s,728921.9,A.b(728921.9,!1),t)
else if(r+1>=2)c.h(0,"c","\ud83c\udfe6",B.d,"\u041c\u0430\u0442\u0435\u0440\u0438\u043d\u0441\u043a\u0438\u0439 \u043a\u0430\u043f\u0438\u0442\u0430\u043b \u043f\u0440\u0438 \u0443\u0441\u044b\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0438 (2-\u0439+)",s,963243.17,A.b(963243.17,!1),t)},
fs(a,b,c){var t,s,r,q=b.w
if(!q.e)return
t=B.ao.B(0,q.a)
if(t==null)t=0.3
s=b.c
r=B.c.p((s>0?s:28395.89)*t)
c.h(0,"r","\ud83c\udf28\ufe0f",B.a,"\u0420\u0430\u0439\u043e\u043d\u043d\u044b\u0439 \u043a\u043e\u044d\u0444\u0444\u0438\u0446\u0438\u0435\u043d\u0442","\u041a \u0437\u0430\u0440\u043f\u043b\u0430\u0442\u0435 \u0438 \u043f\u0435\u043d\u0441\u0438\u0438 +"+B.c.F(t*100)+"% (\u043c\u0438\u043d.) \u0434\u043e 100% \u2014 \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043e\u0442 \u0441\u0443\u0431\u044a\u0435\u043a\u0442\u0430 \u0420\u0424.",r,"\u043e\u0442 +"+A.b(r,!1)+"/\u043c\u0435\u0441","monthly")
c.h(0,"r","\u2708\ufe0f",B.a,"\u041a\u043e\u043c\u043f\u0435\u043d\u0441\u0430\u0446\u0438\u044f \u043f\u0440\u043e\u0435\u0437\u0434\u0430 \u0432 \u043e\u0442\u043f\u0443\u0441\u043a","\u0420\u0430\u0437 \u0432 2 \u0433\u043e\u0434\u0430 \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u043d\u0438\u043a\u043e\u0432 \u041a\u0440\u0430\u0439\u043d\u0435\u0433\u043e \u0421\u0435\u0432\u0435\u0440\u0430.",0,"\u0440\u0430\u0437 \u0432 2 \u0433\u043e\u0434\u0430","benefit")
c.h(0,"r","\ud83c\udfd6\ufe0f",B.a,"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u043e\u0442\u043f\u0443\u0441\u043a (\u0421\u0435\u0432\u0435\u0440)","16\u201324 \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0445 \u0434\u043d\u044f \u043a \u0435\u0436\u0435\u0433\u043e\u0434\u043d\u043e\u043c\u0443 \u043e\u0442\u043f\u0443\u0441\u043a\u0443.",0,"16\u201324 \u0434\u043d\u044f","benefit")},
eI(a,b,c){if(!a.w.i(0,"i_chern"))return
c.h(0,"s","\u2622\ufe0f",B.f,"\u0415\u0414\u0412 \u043b\u0438\u043a\u0432\u0438\u0434\u0430\u0442\u043e\u0440\u0430 \u0427\u0410\u042d\u0421","\u0415\u0414\u0412 \u0438 \u043b\u044c\u0433\u043e\u0442\u044b.",2590,A.b(2590,!1)+"/\u043c\u0435\u0441","monthly")},
fI(a,b,c){if(!a.w.i(0,"i_repr"))return
c.h(0,"s","\ud83d\udcdc",B.f,"\u0412\u044b\u043f\u043b\u0430\u0442\u044b \u0440\u0435\u0430\u0431\u0438\u043b\u0438\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u043c","\u0415\u0414\u0412, \u043b\u044c\u0433\u043e\u0442\u044b \u043f\u043e \u0416\u041a\u0425, \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u0443 \u0438 \u043c\u0435\u0434\u0438\u0446\u0438\u043d\u0435.",0,"\u0415\u0414\u0412 + \u043b\u044c\u0433\u043e\u0442\u044b","benefit")},
fp(a,b,c){var t,s,r="monthly",q=b.w
if(!q.d)return
if(a.f>0){t=b.as
t===$&&A.k()
t=t&&q.as!=null}else t=!1
if(t){t=q.as
t.toString
c.h(0,"r","\ud83c\udfd9\ufe0f",B.f,"\u041c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u0434\u043e\u043f\u043b\u0430\u0442\u0430 \u043d\u0430 \u0434\u0435\u0442\u0435\u0439","\u0420\u0435\u0433\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u0430\u044f \u043d\u0430\u0434\u0431\u0430\u0432\u043a\u0430 \u0441\u0432\u0435\u0440\u0445 \u0444\u0435\u0434\u0435\u0440\u0430\u043b\u044c\u043d\u044b\u0445 \u0432\u044b\u043f\u043b\u0430\u0442.",t,"~"+A.b(t,!1)+"/\u043c\u0435\u0441",r)}t=!1
if(a.d==="moscow")if(a.w.i(0,"i_pen")||a.c==="pensioner"){s=q.ax
if(s!=null){t=b.y
t===$&&A.k()
s=t<s
t=s}}if(t){t=q.ax
t.toString
s=b.y
s===$&&A.k()
c.h(0,"r","\ud83c\udfd9\ufe0f",B.f,"\u0414\u043e\u043f\u043b\u0430\u0442\u0430 \u043a \u043f\u0435\u043d\u0441\u0438\u0438 \u0434\u043e \u0433\u043e\u0440\u043e\u0434\u0441\u043a\u043e\u0433\u043e \u041f\u041c (\u041c\u043e\u0441\u043a\u0432\u0430)","\u041f\u0435\u043d\u0441\u0438\u044f \u0434\u043e\u0432\u043e\u0434\u0438\u0442\u0441\u044f \u0434\u043e \u0433\u043e\u0440\u043e\u0434\u0441\u043a\u043e\u0433\u043e \u043f\u0440\u043e\u0436\u0438\u0442\u043e\u0447\u043d\u043e\u0433\u043e \u043c\u0438\u043d\u0438\u043c\u0443\u043c\u0430 \u043f\u0435\u043d\u0441\u0438\u043e\u043d\u0435\u0440\u0430.",B.c.ai(t-s,0,1/0),"\u0434\u043e "+A.b(t,!1)+"/\u043c\u0435\u0441",r)}if((a.c==="student"||a.w.i(0,"i_stu"))&&q.at!=null){q=q.at
q.toString
c.h(0,"r","\ud83c\udfd9\ufe0f",B.f,"\u041c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u0441\u0442\u0438\u043f\u0435\u043d\u0434\u0438\u044f","\u0420\u0435\u0433\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u0430\u044f \u043d\u0430\u0434\u0431\u0430\u0432\u043a\u0430 \u043a \u0444\u0435\u0434\u0435\u0440\u0430\u043b\u044c\u043d\u043e\u0439 \u0441\u0442\u0438\u043f\u0435\u043d\u0434\u0438\u0438.",q,A.b(q,!1)+"/\u043c\u0435\u0441",r)}},
eN(a,b,c){if(!b.w.f&&!a.w.i(0,"i_dfo"))return
c.h(0,"r","\ud83c\udf0f",B.a,"\u0414\u0430\u043b\u044c\u043d\u0435\u0432\u043e\u0441\u0442\u043e\u0447\u043d\u044b\u0439 \u0433\u0435\u043a\u0442\u0430\u0440","\u041f\u0440\u0430\u0432\u043e \u043d\u0430 \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u044b\u0439 \u0437\u0435\u043c\u0435\u043b\u044c\u043d\u044b\u0439 \u0443\u0447\u0430\u0441\u0442\u043e\u043a \u0434\u043e 1 \u0433\u0430.",0,"1 \u0433\u0430 \u0437\u0435\u043c\u043b\u0438","benefit")},
fz(a,b,c){var t,s,r
if(b.w.d)return
t=a.f>0||a.w.i(0,"pregnant")
s=a.c==="student"||a.w.i(0,"i_stu")
if(!t&&!s)return
r=A.z([],u.s)
if(t)B.b.k(r,"\u0441\u0435\u043c\u044c\u044f\u043c \u0441 \u0434\u0435\u0442\u044c\u043c\u0438")
if(s)B.b.k(r,"\u0441\u0442\u0443\u0434\u0435\u043d\u0442\u0430\u043c")
c.h(0,"r","\ud83d\uddfa\ufe0f",B.a,"\u0420\u0435\u0433\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u0434\u043e\u043f\u043b\u0430\u0442\u044b","\u0412 \u0432\u0430\u0448\u0435\u043c \u0441\u0443\u0431\u044a\u0435\u043a\u0442\u0435 \u0420\u0424 \u043c\u043e\u0433\u0443\u0442 \u0434\u0435\u0439\u0441\u0442\u0432\u043e\u0432\u0430\u0442\u044c \u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0435 \u043c\u0435\u0440\u044b \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0438 "+B.b.Y(r," \u0438 ")+" (\u0434\u043e\u043f\u043b\u0430\u0442\u044b \u043d\u0430 \u0434\u0435\u0442\u0435\u0439 \u0438 \u0448\u043a\u043e\u043b\u044c\u043d\u0438\u043a\u043e\u0432, \u0440\u0435\u0433\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u0441\u0442\u0438\u043f\u0435\u043d\u0434\u0438\u0430\u043b\u044c\u043d\u044b\u0435 \u043d\u0430\u0434\u0431\u0430\u0432\u043a\u0438, \u043b\u044c\u0433\u043e\u0442\u043d\u044b\u0439 \u043f\u0440\u043e\u0435\u0437\u0434). \u0420\u0430\u0437\u043c\u0435\u0440 \u0438 \u0443\u0441\u043b\u043e\u0432\u0438\u044f \u0437\u0430\u0432\u0438\u0441\u044f\u0442 \u043e\u0442 \u0440\u0435\u0433\u0438\u043e\u043d\u0430 \u2014 \u0443\u0442\u043e\u0447\u043d\u0438\u0442\u0435 \u0432 \u0441\u043e\u0446\u0437\u0430\u0449\u0438\u0442\u0435, \u041c\u0424\u0426 \u0438\u043b\u0438 \u043d\u0430 \u043f\u043e\u0440\u0442\u0430\u043b\u0435 \u0413\u043e\u0441\u0443\u0441\u043b\u0443\u0433.",0,"\u0443\u0442\u043e\u0447\u043d\u044f\u0439\u0442\u0435 \u0432 \u0440\u0435\u0433\u0438\u043e\u043d\u0435","benefit")},
fA(a,b,c){var t,s,r=b.w,q=r.ch
if(q==null)return
t=r.CW
if(a.f<t)return
s=t===2?"2-\u0433\u043e":"3-\u0433\u043e"
c.h(0,"r","\ud83c\udfe6",B.e,"\u0420\u0435\u0433\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0439 \u043c\u0430\u0442\u0435\u0440\u0438\u043d\u0441\u043a\u0438\u0439 \u043a\u0430\u043f\u0438\u0442\u0430\u043b","\u0415\u0434\u0438\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u0430\u044f \u0432\u044b\u043f\u043b\u0430\u0442\u0430 \u043f\u0440\u0438 \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u0438 "+s+" \u0438 \u043f\u043e\u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0445 \u0434\u0435\u0442\u0435\u0439. \u0412 \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0440\u0435\u0433\u0438\u043e\u043d\u0430\u0445 \u0435\u0441\u0442\u044c \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f \u043f\u043e \u0432\u043e\u0437\u0440\u0430\u0441\u0442\u0443 \u0438\u043b\u0438 \u0434\u043e\u0445\u043e\u0434\u0443 \u2014 \u0443\u0442\u043e\u0447\u043d\u044f\u0439\u0442\u0435 \u0432 \u041c\u0424\u0426.",q,A.b(q,!1),"once")},
h0(a,b,c){var t
if(!(a.c==="student"||a.w.i(0,"i_stu")))return
c.h(0,"w","\ud83c\udf93",B.e,"\u0421\u043e\u0446\u0438\u0430\u043b\u044c\u043d\u0430\u044f \u0441\u0442\u0438\u043f\u0435\u043d\u0434\u0438\u044f","\u0414\u043b\u044f \u043d\u0443\u0436\u0434\u0430\u044e\u0449\u0438\u0445\u0441\u044f \u0441\u0442\u0443\u0434\u0435\u043d\u0442\u043e\u0432 \u043e\u0447\u043d\u043e\u0439 \u0444\u043e\u0440\u043c\u044b (\u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0430\u0435\u0442\u0441\u044f \u0441\u043f\u0440\u0430\u0432\u043a\u043e\u0439). \u041c\u0438\u043d. \u043d\u043e\u0440\u043c\u0430\u0442\u0438\u0432 \u0434\u043b\u044f \u0432\u0443\u0437\u043e\u0432 \u0441 01.09.2025.",3340,A.b(3340,!1)+"/\u043c\u0435\u0441","monthly")
t=b.Q
t===$&&A.k()
if(t)c.h(0,"w","\ud83d\udcb0",B.e,"\u0413\u043e\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043d\u043d\u0430\u044f \u0430\u043a\u0430\u0434\u0435\u043c\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0441\u0442\u0438\u043f\u0435\u043d\u0434\u0438\u044f","\u0411\u0430\u0437\u043e\u0432\u0430\u044f \u0430\u043a\u0430\u0434\u0435\u043c\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0441\u0442\u0438\u043f\u0435\u043d\u0434\u0438\u044f \u0434\u043b\u044f \u043e\u0447\u043d\u0438\u043a\u043e\u0432 (\u043c\u0438\u043d. \u043d\u043e\u0440\u043c\u0430\u0442\u0438\u0432 \u0434\u043b\u044f \u0432\u0443\u0437\u043e\u0432).",2224,A.b(2224,!1)+"/\u043c\u0435\u0441","monthly")
c.h(0,"w","\ud83d\ude8c",B.a,"\u041b\u044c\u0433\u043e\u0442\u043d\u044b\u0439 \u043f\u0440\u043e\u0435\u0437\u0434\u043d\u043e\u0439 (\u0441\u0442\u0443\u0434\u0435\u043d\u0442)","\u0421\u043a\u0438\u0434\u043a\u0430 50% \u043d\u0430 \u0433\u043e\u0440\u043e\u0434\u0441\u043a\u043e\u0439 \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442 \u0432\u043e \u043c\u043d\u043e\u0433\u0438\u0445 \u0440\u0435\u0433\u0438\u043e\u043d\u0430\u0445.",0,"\u0441\u043a\u0438\u0434\u043a\u0430 50%","benefit")
if(a.w.i(0,"paid_edu"))c.h(0,"t","\ud83c\udf93",B.d,"\u0412\u044b\u0447\u0435\u0442 \u0437\u0430 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435 (\u0441\u0430\u043c \u0441\u0442\u0443\u0434\u0435\u043d\u0442)","13% \u043e\u0442 \u043e\u043f\u043b\u0430\u0442\u044b \u0437\u0430 \u0441\u0435\u0431\u044f, \u0434\u043e 150 000 \u20bd/\u0433\u043e\u0434.",19500,"\u0434\u043e "+A.b(19500,!1)+"/\u0433\u043e\u0434","once")},
hb(a,b,c){var t,s
if(a.c!=="unemployed_reg")return
t=b.e
t=t>0?t:Math.max(27093,b.c/b.d)
s=b.f>0?Math.min(B.c.p(t*0.75),15886):1863
c.h(0,"w","\ud83d\udcbc",B.a,"\u041f\u043e\u0441\u043e\u0431\u0438\u0435 \u043f\u043e \u0431\u0435\u0437\u0440\u0430\u0431\u043e\u0442\u0438\u0446\u0435","\u041f\u0435\u0440\u0432\u044b\u0435 3 \u043c\u0435\u0441: 75% \u0437\u0430\u0440\u043f\u043b\u0430\u0442\u044b, \u0434\u0430\u043b\u0435\u0435 60%, \u0434\u0430\u043b\u0435\u0435 45%. \u041c\u0438\u043d "+A.b(1863,!1)+", \u043c\u0430\u043a\u0441 "+A.b(15886,!1)+".",s,A.b(s,!1)+"/\u043c\u0435\u0441","monthly")},
fh(a,b,c){var t,s
if(!a.w.i(0,"i_laid"))return
t=a.c
if(!(t==="unemployed_reg"||t==="unemployed"))return
s=b.e
s=s>0?s:Math.max(27093,b.c/b.d)
c.h(0,"w","\ud83d\udccb",B.a,"\u0412\u044b\u0445\u043e\u0434\u043d\u043e\u0435 \u043f\u043e\u0441\u043e\u0431\u0438\u0435 \u043f\u0440\u0438 \u0441\u043e\u043a\u0440\u0430\u0449\u0435\u043d\u0438\u0438","1 \u0441\u0440.\u043c\u0435\u0441. \u0437\u0430\u0440\u043f\u043b\u0430\u0442\u0430 \u0441\u0440\u0430\u0437\u0443 + \u0435\u0449\u0451 \u0434\u043e 2 \u043c\u0435\u0441. \u043f\u0440\u0438 \u043d\u0435\u0442\u0440\u0443\u0434\u043e\u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0435.",s,"\u2248 "+A.b(s,!1)+" \xd7 1\u20133 \u043c\u0435\u0441.","once")},
fa(a,b,c){var t,s,r,q,p
if(!a.w.i(0,"high_utility")){t=b.Q
t===$&&A.k()
t=!t}else t=!1
if(t)return
s=A.bA("")
if(s==null)s=0
t=b.c
r=t*0.22
q=A.cJ()
p=A.cJ()
if(s>0){q.sD(Math.max(0,B.c.p(s-r)))
p.sD("\u0420\u0430\u0441\u0445\u043e\u0434\u044b \u0416\u041a\u0425 "+A.b(s,!1)+" \u2212 22% \u0434\u043e\u0445\u043e\u0434\u0430 "+A.b(B.c.p(r),!1)+" = "+A.b(q.C(),!1)+".")}else{q.sD(Math.max(300,B.c.p(t*0.04)))
p.sD("\u041e\u0440\u0438\u0435\u043d\u0442\u0438\u0440: \u0435\u0441\u043b\u0438 \u0416\u041a\u0425 > 22% \u0434\u043e\u0445\u043e\u0434\u0430 ("+A.b(B.c.p(r),!1)+"/\u043c\u0435\u0441). \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0440\u0430\u0441\u0445\u043e\u0434\u044b \u043d\u0430 \u0416\u041a\u0425 \u0432 \u0448\u0430\u0433\u0435 4 \u0434\u043b\u044f \u0442\u043e\u0447\u043d\u043e\u0433\u043e \u0440\u0430\u0441\u0447\u0451\u0442\u0430.")}c.h(0,"h","\ud83c\udfe0",B.e,"\u0421\u0443\u0431\u0441\u0438\u0434\u0438\u044f \u043d\u0430 \u043e\u043f\u043b\u0430\u0442\u0443 \u0416\u041a\u0425",p.C(),q.C(),"~"+A.b(q.C(),!1)+"/\u043c\u0435\u0441","monthly")},
ft(a,b,c){var t,s,r
if(!(a.w.i(0,"i_pen")||a.c==="pensioner"))return
t=b.w
s=B.an.B(0,t.a)
if(s==null)s=16288
if(!(t.ax!=null&&a.d==="moscow")){t=b.y
t===$&&A.k()
t=t<s}else t=!1
if(t){t=A.b(s,!1)
r=b.y
r===$&&A.k()
c.h(0,"p","\ud83d\udc74",B.e,"\u0414\u043e\u043f\u043b\u0430\u0442\u0430 \u043a \u043f\u0435\u043d\u0441\u0438\u0438 \u0434\u043e \u041f\u041c \u043f\u0435\u043d\u0441\u0438\u043e\u043d\u0435\u0440\u0430","\u0420\u0435\u0433\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u0430\u044f \u0441\u043e\u0446\u0438\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043e\u043f\u043b\u0430\u0442\u0430 \u043d\u0435\u0440\u0430\u0431\u043e\u0442\u0430\u044e\u0449\u0435\u043c\u0443 \u043f\u0435\u043d\u0441\u0438\u043e\u043d\u0435\u0440\u0443 \u0434\u043e \u041f\u041c \u043f\u0435\u043d\u0441\u0438\u043e\u043d\u0435\u0440\u0430 \u0432 \u0432\u0430\u0448\u0435\u043c \u0440\u0435\u0433\u0438\u043e\u043d\u0435 ("+t+"). \u041d\u0430\u0437\u043d\u0430\u0447\u0430\u0435\u0442\u0441\u044f \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u0447\u0435\u0440\u0435\u0437 \u0421\u0424\u0420/\u0441\u043e\u0446\u0437\u0430\u0449\u0438\u0442\u0443.",Math.max(0,s-r),"\u0434\u043e "+A.b(s,!1)+"/\u043c\u0435\u0441","monthly")}if(b.b>=80)c.h(0,"p","\ud83e\uddd3",B.e,"\u041d\u0430\u0434\u0431\u0430\u0432\u043a\u0430 80+","\u0424\u0438\u043a\u0441. \u0432\u044b\u043f\u043b\u0430\u0442\u0430 \u0443\u0434\u0432\u0430\u0438\u0432\u0430\u0435\u0442\u0441\u044f.",9584.69,"+"+A.b(9584.69,!1)+"/\u043c\u0435\u0441","monthly")
c.h(0,"p","\u2764\ufe0f\u200d\ud83d\udd25",B.a,"\u0418\u043d\u0434\u0435\u043a\u0441\u0430\u0446\u0438\u044f 2026","\u0421\u0442\u0440\u0430\u0445\u043e\u0432\u044b\u0435 \u043f\u0435\u043d\u0441\u0438\u0438 +7,6%.",0,"+7,6%","benefit")},
eO(a,b,c){var t="s",s="\u041c\u0430\u043a\u0441. \u043f\u0440\u0438 \u043e\u0442\u043a\u0430\u0437\u0435 \u043e\u0442 \u041d\u0421\u0423. \u041f\u0440\u0438 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0438 \u043b\u044c\u0433\u043e\u0442 \u043d\u0430\u0442\u0443\u0440\u043e\u0439: \u2212",r="monthly",q="\u0441\u0442\u0430\u0436 + \u043d\u0430\u0434\u0431\u0430\u0432\u043a\u0430 \u0432 \u043f\u0435\u043d\u0441\u0438\u0438",p="benefit",o=a.w
if(o.i(0,"i_dis1"))c.h(0,t,"\u267f",B.e,"\u0415\u0414\u0412 \u2014 \u0438\u043d\u0432\u0430\u043b\u0438\u0434 I \u0433\u0440.",s+A.b(1825.25,!0)+"/\u043c\u0435\u0441.",6157.22,"~"+A.b(6157.22,!0)+"/\u043c\u0435\u0441",r)
if(o.i(0,"i_dis2"))c.h(0,t,"\u267f",B.e,"\u0415\u0414\u0412 \u2014 \u0438\u043d\u0432\u0430\u043b\u0438\u0434 II \u0433\u0440.",s+A.b(1825.25,!0)+"/\u043c\u0435\u0441.",4397.23,"~"+A.b(4397.23,!0)+"/\u043c\u0435\u0441",r)
if(o.i(0,"i_dis3"))c.h(0,t,"\u267f",B.a,"\u0415\u0414\u0412 \u2014 \u0438\u043d\u0432\u0430\u043b\u0438\u0434 III \u0433\u0440.",s+A.b(1825.25,!0)+"/\u043c\u0435\u0441.",3520.01,"~"+A.b(3520.01,!0)+"/\u043c\u0435\u0441",r)
if(o.i(0,"has_dis1")&&a.c!=="employed")c.h(0,t,"\ud83e\udd1d",B.a,"\u0423\u0445\u043e\u0434 \u0437\u0430 \u0438\u043d\u0432\u0430\u043b\u0438\u0434\u043e\u043c I \u0433\u0440.","\u0412\u044b\u043f\u043b\u0430\u0442\u0430 1 200 \u20bd \u0443\u0445\u0430\u0436\u0438\u0432\u0430\u044e\u0449\u0435\u043c\u0443 \u043e\u0442\u043c\u0435\u043d\u0435\u043d\u0430 \u0441 2025. \u041d\u0430\u0434\u0431\u0430\u0432\u043a\u0430 ~1 414 \u20bd \u0432\u0445\u043e\u0434\u0438\u0442 \u0432 \u043f\u0435\u043d\u0441\u0438\u044e \u0438\u043d\u0432\u0430\u043b\u0438\u0434\u0430; \u0443\u0445\u0430\u0436\u0438\u0432\u0430\u044e\u0449\u0435\u043c\u0443 \u2014 \u0441\u0442\u0430\u0436 1,8 \u0418\u041f\u041a/\u0433\u043e\u0434.",0,q,p)
if(o.i(0,"elderly80")&&a.c!=="employed")c.h(0,t,"\ud83e\uddd3",B.a,"\u0423\u0445\u043e\u0434 \u0437\u0430 \u043f\u043e\u0436\u0438\u043b\u044b\u043c 80+","\u0412\u044b\u043f\u043b\u0430\u0442\u0430 1 200 \u20bd \u0443\u0445\u0430\u0436\u0438\u0432\u0430\u044e\u0449\u0435\u043c\u0443 \u043e\u0442\u043c\u0435\u043d\u0435\u043d\u0430 \u0441 2025. \u041d\u0430\u0434\u0431\u0430\u0432\u043a\u0430 ~1 414 \u20bd \u0432\u0445\u043e\u0434\u0438\u0442 \u0432 \u043f\u0435\u043d\u0441\u0438\u044e \u043f\u043e\u0436\u0438\u043b\u043e\u0433\u043e; \u0443\u0445\u0430\u0436\u0438\u0432\u0430\u044e\u0449\u0435\u043c\u0443 \u2014 \u0441\u0442\u0430\u0436 1,8 \u0418\u041f\u041a/\u0433\u043e\u0434.",0,q,p)
if(o.i(0,"has_dis2")||o.i(0,"has_dis3"))c.h(0,t,"\ud83e\udd1d",B.a,"\u0423\u0445\u043e\u0434 \u0437\u0430 \u0438\u043d\u0432\u0430\u043b\u0438\u0434\u043e\u043c II/III \u0433\u0440.","\u0417\u0430 \u0443\u0445\u043e\u0434 \u0437\u0430 \u0438\u043d\u0432\u0430\u043b\u0438\u0434\u043e\u043c II \u0438\u043b\u0438 III \u0433\u0440\u0443\u043f\u043f\u044b \u043a\u043e\u043c\u043f\u0435\u043d\u0441\u0430\u0446\u0438\u044f \u0438 \u043f\u0435\u043d\u0441\u0438\u043e\u043d\u043d\u044b\u0439 \u0441\u0442\u0430\u0436 \u0443\u0445\u0430\u0436\u0438\u0432\u0430\u044e\u0449\u0435\u043c\u0443 \u043d\u0435 \u043f\u0440\u0435\u0434\u0443\u0441\u043c\u043e\u0442\u0440\u0435\u043d\u044b (\u0432 \u043e\u0442\u043b\u0438\u0447\u0438\u0435 \u043e\u0442 I \u0433\u0440\u0443\u043f\u043f\u044b). \u0421\u0430\u043c \u0438\u043d\u0432\u0430\u043b\u0438\u0434 \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u0442 \u043f\u0435\u043d\u0441\u0438\u044e \u043f\u043e \u0438\u043d\u0432\u0430\u043b\u0438\u0434\u043d\u043e\u0441\u0442\u0438 \u0438 \u0415\u0414\u0412.",0,"\u0432\u044b\u043f\u043b\u0430\u0442\u044b \u0443\u0445\u0430\u0436\u0438\u0432\u0430\u044e\u0449\u0435\u043c\u0443 \u043d\u0435\u0442",p)},
fx(a,b,c){var t,s,r,q=a.w
if(!q.i(0,"own_home"))return
t=q.i(0,"i_pen")||a.c==="pensioner"
s=q.i(0,"i_dis1")||q.i(0,"i_dis2")
r=a.f>=3
if(!(t||s||r))return
c.h(0,"t","\ud83c\udfe0",B.d,"\u041b\u044c\u0433\u043e\u0442\u0430 \u043f\u043e \u043d\u0430\u043b\u043e\u0433\u0443 \u043d\u0430 \u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u043e","\u041e\u0441\u0432\u043e\u0431\u043e\u0436\u0434\u0435\u043d\u0438\u0435 \u043e\u0442 \u043d\u0430\u043b\u043e\u0433\u0430 \u043d\u0430 \u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u043e \u043d\u0430 \u043e\u0434\u0438\u043d \u043e\u0431\u044a\u0435\u043a\u0442 \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u0432\u0438\u0434\u0430 (\u043a\u0432\u0430\u0440\u0442\u0438\u0440\u0430, \u0434\u043e\u043c, \u0433\u0430\u0440\u0430\u0436) \u2014 \u0434\u043b\u044f \u043f\u0435\u043d\u0441\u0438\u043e\u043d\u0435\u0440\u043e\u0432 \u0438 \u0438\u043d\u0432\u0430\u043b\u0438\u0434\u043e\u0432 I\u2013II \u0433\u0440\u0443\u043f\u043f. \u041c\u043d\u043e\u0433\u043e\u0434\u0435\u0442\u043d\u044b\u043c \u0441\u0435\u043c\u044c\u044f\u043c \u2014 \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u0432\u044b\u0447\u0435\u0442 (\u0441\u0442. 407 \u041d\u041a \u0420\u0424).",0,"\u043e\u0441\u0432\u043e\u0431\u043e\u0436\u0434\u0435\u043d\u0438\u0435 \u043e\u0442 \u043d\u0430\u043b\u043e\u0433\u0430","benefit")},
eK(a,b,c){if(!a.w.i(0,"communal"))return
c.h(0,"h","\ud83c\udfd8\ufe0f",B.a,"\u0420\u0430\u0441\u0441\u0435\u043b\u0435\u043d\u0438\u0435 \u043a\u043e\u043c\u043c\u0443\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u043a\u0432\u0430\u0440\u0442\u0438\u0440","\u041f\u0440\u043e\u0436\u0438\u0432\u0430\u043d\u0438\u0435 \u0432 \u043a\u043e\u043c\u043c\u0443\u043d\u0430\u043b\u044c\u043d\u043e\u0439 \u043a\u0432\u0430\u0440\u0442\u0438\u0440\u0435 \u2014 \u043e\u0441\u043d\u043e\u0432\u0430\u043d\u0438\u0435 \u0434\u043b\u044f \u043f\u043e\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043d\u0430 \u0443\u0447\u0451\u0442 \u043f\u043e \u0443\u043b\u0443\u0447\u0448\u0435\u043d\u0438\u044e \u0436\u0438\u043b\u0438\u0449\u043d\u044b\u0445 \u0443\u0441\u043b\u043e\u0432\u0438\u0439. \u0412\u043e \u043c\u043d\u043e\u0433\u0438\u0445 \u0440\u0435\u0433\u0438\u043e\u043d\u0430\u0445 \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u044e\u0442 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u044b \u0440\u0430\u0441\u0441\u0435\u043b\u0435\u043d\u0438\u044f \u0438 \u0441\u0443\u0431\u0441\u0438\u0434\u0438\u0438 \u2014 \u0443\u0442\u043e\u0447\u043d\u044f\u0439\u0442\u0435 \u0432 \u041c\u0424\u0426 \u0438\u043b\u0438 \u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438.",0,"\u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u044b \u0440\u0435\u0433\u0438\u043e\u043d\u0430","benefit")},
fK(a,b,c){var t
if(a.w.i(0,"i_sc")){t=b.Q
t===$&&A.k()
t=!t}else t=!0
if(t)return
c.h(0,"s","\ud83d\udcdd",B.e,"\u0421\u043e\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0439 \u043a\u043e\u043d\u0442\u0440\u0430\u043a\u0442: \u041e\u0442\u043a\u0440\u044b\u0442\u0438\u0435 \u0441\u0432\u043e\u0435\u0433\u043e \u0434\u0435\u043b\u0430 / \u0418\u041f","\u0415\u0434\u0438\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u0430\u044f \u0431\u0435\u0437\u0432\u043e\u0437\u043c\u0435\u0437\u0434\u043d\u0430\u044f \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430 \u043c\u0430\u043b\u043e\u0438\u043c\u0443\u0449\u0438\u043c \u0441\u0435\u043c\u044c\u044f\u043c.",35e4,"\u0434\u043e "+A.b(35e4,!1),"once")},
fo(a,b,c){var t=a.w
if(t.i(0,"i_mil")){c.h(0,"m","\ud83c\udf96\ufe0f",B.a,"\u0412\u044b\u043f\u043b\u0430\u0442\u0430 \u043f\u0440\u0438 \u0437\u0430\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0438 \u043a\u043e\u043d\u0442\u0440\u0430\u043a\u0442\u0430","\u0424\u0435\u0434\u0435\u0440\u0430\u043b\u044c\u043d\u0430\u044f + \u0440\u0435\u0433\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u0430\u044f.",4e5,"\u043e\u0442 "+A.b(4e5,!1),"once")
c.h(0,"m","\ud83d\udcb0",B.a,"\u0411\u043e\u0435\u0432\u044b\u0435 \u043d\u0430\u0434\u0431\u0430\u0432\u043a\u0438","\u0415\u0436\u0435\u043c\u0435\u0441\u044f\u0447\u043d\u044b\u0435 \u0434\u043e\u043f\u043b\u0430\u0442\u044b.",5e4,"\u043e\u0442 "+A.b(5e4,!1)+"/\u043c\u0435\u0441","monthly")}if(t.i(0,"i_vet"))c.h(0,"m","\ud83c\udfc5",B.a,"\u0415\u0414\u0412 \u0432\u0435\u0442\u0435\u0440\u0430\u043d\u0430 \u0431\u043e\u0435\u0432\u044b\u0445 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439","\u0415\u0436\u0435\u043c\u0435\u0441\u044f\u0447\u043d\u0430\u044f \u0434\u0435\u043d\u0435\u0436\u043d\u0430\u044f \u0432\u044b\u043f\u043b\u0430\u0442\u0430 \u0443\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u0443 \u0411\u0414. \u0421 01.02.2026.",4838.63,A.b(4838.63,!0)+"/\u043c\u0435\u0441","monthly")},
hd(a,b,c){if(!a.w.i(0,"vet_fam"))return
c.h(0,"m","\ud83c\udfc5",B.a,"\u0415\u0414\u0412 \u0441\u0435\u043c\u044c\u0435 \u0432\u0435\u0442\u0435\u0440\u0430\u043d\u0430 \u0411\u0414","\u0415\u0436\u0435\u043c\u0435\u0441\u044f\u0447\u043d\u0430\u044f \u0432\u044b\u043f\u043b\u0430\u0442\u0430 \u0441\u0435\u043c\u044c\u0435 \u0443\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u0430/\u043f\u043e\u0433\u0438\u0431\u0448\u0435\u0433\u043e. \u0421 01.02.2026.",4838.63,A.b(4838.63,!0)+"/\u043c\u0435\u0441","monthly")
c.h(0,"m","\ud83d\udee1\ufe0f",B.a,"\u0421\u0442\u0440\u0430\u0445\u043e\u0432\u0430\u044f \u0432\u044b\u043f\u043b\u0430\u0442\u0430 \u0441\u0435\u043c\u044c\u0435 \u043f\u043e\u0433\u0438\u0431\u0448\u0435\u0433\u043e","\u041f\u0440\u0438 \u0433\u0438\u0431\u0435\u043b\u0438 \u0432\u043e\u0435\u043d\u043d\u043e\u0441\u043b\u0443\u0436\u0430\u0449\u0435\u0433\u043e: \u0435\u0434\u0438\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u0430\u044f \u0441\u0442\u0440\u0430\u0445\u043e\u0432\u0430\u044f \u0432\u044b\u043f\u043b\u0430\u0442\u0430.",3e6,"\u043e\u0442 "+A.b(3e6,!1)+" (\u0435\u0434\u0438\u043d\u043e\u0432\u0440.)","once")
c.h(0,"m","\ud83d\udcb0",B.a,"\u0415\u0436\u0435\u043c\u0435\u0441\u044f\u0447\u043d\u0430\u044f \u0432\u044b\u043f\u043b\u0430\u0442\u0430 \u0441\u0435\u043c\u044c\u0435 \u043f\u043e\u0433\u0438\u0431\u0448\u0435\u0433\u043e","\u0427\u043b\u0435\u043d\u0430\u043c \u0441\u0435\u043c\u044c\u0438 \u043f\u043e\u0433\u0438\u0431\u0448\u0435\u0433\u043e \u0432\u043e\u0435\u043d\u043d\u043e\u0441\u043b\u0443\u0436\u0430\u0449\u0435\u0433\u043e.",27566,A.b(27566,!1)+"/\u043c\u0435\u0441","monthly")},
f9(a,b,c){var t="a",s="monthly",r="benefit",q=a.w
if(q.i(0,"i_vet_trud")){c.h(0,t,"\ud83c\udfc6",B.a,"\u0412\u0435\u0442\u0435\u0440\u0430\u043d \u0442\u0440\u0443\u0434\u0430 \u2014 \u0440\u0435\u0433\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u043b\u044c\u0433\u043e\u0442\u044b","\u0414\u043e\u043f\u043b\u0430\u0442\u0430 \u043a \u043f\u0435\u043d\u0441\u0438\u0438, \u0441\u043a\u0438\u0434\u043a\u0438 \u043d\u0430 \u0416\u041a\u0425 (50%), \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442 \u0438 \u043b\u0435\u043a\u0430\u0440\u0441\u0442\u0432\u0430. \u0420\u0430\u0437\u043c\u0435\u0440 \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043e\u0442 \u0440\u0435\u0433\u0438\u043e\u043d\u0430: \u0432 \u0441\u0440\u0435\u0434\u043d\u0435\u043c 1 000\u20135 000 \u20bd/\u043c\u0435\u0441.",2000,"~1 000\u20135 000 \u20bd/\u043c\u0435\u0441",s)
c.h(0,t,"\ud83d\ude8c",B.a,"\u0412\u0435\u0442\u0435\u0440\u0430\u043d \u0442\u0440\u0443\u0434\u0430 \u2014 \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u044b\u0439 \u043f\u0440\u043e\u0435\u0437\u0434","\u041f\u0440\u0430\u0432\u043e \u043d\u0430 \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u044b\u0439 \u043f\u0440\u043e\u0435\u0437\u0434 \u0432 \u0433\u043e\u0440\u043e\u0434\u0441\u043a\u043e\u043c \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u0435 (\u0440\u0435\u0433\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0439 \u0437\u0430\u043a\u043e\u043d).",0,"\u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u044b\u0439 \u043f\u0440\u043e\u0435\u0437\u0434",r)}if(q.i(0,"i_honored")){c.h(0,t,"\ud83c\udf96\ufe0f",B.f,"\u041d\u0430\u0434\u0431\u0430\u0432\u043a\u0430 \xab\u0417\u0430\u0441\u043b\u0443\u0436\u0435\u043d\u043d\u044b\u0439\xbb","\u0420\u0435\u0433\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043e\u043f\u043b\u0430\u0442\u0430 \u043a \u043f\u0435\u043d\u0441\u0438\u0438 \u0437\u0430 \u043f\u043e\u0447\u0451\u0442\u043d\u043e\u0435 \u0437\u0432\u0430\u043d\u0438\u0435 \u0420\u0424. \u0420\u0430\u0437\u043c\u0435\u0440 \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043e\u0442 \u0440\u0435\u0433\u0438\u043e\u043d\u0430: \u043e\u0431\u044b\u0447\u043d\u043e 1 000\u20133 000 \u20bd/\u043c\u0435\u0441.",1500,"~1 000\u20133 000 \u20bd/\u043c\u0435\u0441",s)
c.h(0,t,"\ud83c\udf97\ufe0f",B.f,"\u0421\u0442\u0438\u043f\u0435\u043d\u0434\u0438\u044f \u041f\u0440\u0435\u0437\u0438\u0434\u0435\u043d\u0442\u0430 \u0420\u0424","\u0414\u043b\u044f \u0417\u0430\u0441\u043b\u0443\u0436\u0435\u043d\u043d\u044b\u0445 \u043c\u0430\u0441\u0442\u0435\u0440\u043e\u0432 \u0441\u043f\u043e\u0440\u0442\u0430 \u0438 \u0434\u0435\u044f\u0442\u0435\u043b\u0435\u0439 \u043a\u0443\u043b\u044c\u0442\u0443\u0440\u044b \u2014 \u0435\u0434\u0438\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u0438 \u0435\u0436\u0435\u043c\u0435\u0441\u044f\u0447\u043d\u044b\u0435 \u0432\u044b\u043f\u043b\u0430\u0442\u044b \u043f\u043e \u0423\u043a\u0430\u0437\u0443 \u041f\u0440\u0435\u0437\u0438\u0434\u0435\u043d\u0442\u0430.",0,"\u043f\u043e \u0423\u043a\u0430\u0437\u0443 \u041f\u0440\u0435\u0437\u0438\u0434\u0435\u043d\u0442\u0430",r)}if(q.i(0,"i_people_art"))c.h(0,t,"\ud83c\udf1f",B.f,"\u041d\u0430\u0434\u0431\u0430\u0432\u043a\u0430 \xab\u041d\u0430\u0440\u043e\u0434\u043d\u044b\u0439 \u0430\u0440\u0442\u0438\u0441\u0442 / \u0434\u0435\u044f\u0442\u0435\u043b\u044c\xbb","\u0424\u0435\u0434\u0435\u0440\u0430\u043b\u044c\u043d\u0430\u044f \u043d\u0430\u0434\u0431\u0430\u0432\u043a\u0430 \u043a \u043f\u0435\u043d\u0441\u0438\u0438: 500% \u041f\u041c \u043f\u0435\u043d\u0441\u0438\u043e\u043d\u0435\u0440\u0430 (\u0423\u043a\u0430\u0437 \u041f\u0440\u0435\u0437\u0438\u0434\u0435\u043d\u0442\u0430 \u0420\u0424 \u2116 1584). \u041f\u043b\u044e\u0441 \u0440\u0435\u0433\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u0434\u043e\u043f\u043b\u0430\u0442\u044b.",47923.450000000004,"~"+A.b(47923.450000000004,!1)+"/\u043c\u0435\u0441",s)
if(q.i(0,"i_hero_labor")){c.h(0,t,"\u2b50",B.a,"\u0413\u0435\u0440\u043e\u0439 \u0422\u0440\u0443\u0434\u0430 \u0420\u0424 \u2014 \u0415\u0414\u0412","\u0415\u0436\u0435\u043c\u0435\u0441\u044f\u0447\u043d\u0430\u044f \u0434\u0435\u043d\u0435\u0436\u043d\u0430\u044f \u0432\u044b\u043f\u043b\u0430\u0442\u0430 \u0413\u0435\u0440\u043e\u044f\u043c \u0422\u0440\u0443\u0434\u0430 \u0420\u0424. \u0418\u043d\u0434\u0435\u043a\u0441\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u0435\u0436\u0435\u0433\u043e\u0434\u043d\u043e.",76458.4,A.b(76458.4,!0)+"/\u043c\u0435\u0441",s)
c.h(0,t,"\ud83c\udfe0",B.a,"\u0413\u0435\u0440\u043e\u0439 \u0422\u0440\u0443\u0434\u0430 \u0420\u0424 \u2014 \u043b\u044c\u0433\u043e\u0442\u044b","\u0411\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u044b\u0439 \u043f\u0440\u043e\u0435\u0437\u0434, 50% \u0441\u043a\u0438\u0434\u043a\u0430 \u043d\u0430 \u0416\u041a\u0425, \u043d\u0430\u043b\u043e\u0433\u043e\u0432\u044b\u0435 \u043b\u044c\u0433\u043e\u0442\u044b, \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u043e\u0435 \u043c\u0435\u0434\u043e\u0431\u0441\u043b\u0443\u0436\u0438\u0432\u0430\u043d\u0438\u0435.",0,"\u043f\u0430\u043a\u0435\u0442 \u043b\u044c\u0433\u043e\u0442",r)}},
fJ(a,b,c){var t,s,r,q,p,o=a.w
if(o.i(0,"i_sick")){t=a.c
s=!0
if(t!=="employed")if(t!=="matleave")o=t==="self"&&o.i(0,"self_sick_insured")
else o=s
else o=s
o=!o}else o=!0
if(o)return
o=a.c==="self"
if(o){t=b.e
r=t>0?t:35e3}else{t=b.e
r=t>0?t:Math.max(27093,b.c/b.d)}t=b.f
if(t>=8)q=1
else q=t>=5?0.8:0.6
p=B.c.p(Math.min(r*24/730,6827.397260273972)*q*21)
o=o?"\u0421\u0430\u043c\u043e\u0437\u0430\u043d\u044f\u0442\u044b\u0439 \u0441 \u0434\u043e\u0431\u0440\u043e\u0432\u043e\u043b\u044c\u043d\u044b\u043c \u0441\u0442\u0440\u0430\u0445\u043e\u0432\u0430\u043d\u0438\u0435\u043c: \u043e\u0440\u0438\u0435\u043d\u0442\u0438\u0440 \u0440\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u043d \u043e\u0442 \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u043e\u0439 \u0441\u0442\u0440\u0430\u0445\u043e\u0432\u043e\u0439 \u0441\u0443\u043c\u043c\u044b (\u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e 35 000 \u20bd, \u0435\u0441\u043b\u0438 \u043d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d\u0430 \u0441\u0432\u043e\u044f \u0431\u0430\u0437\u0430).":""+B.c.F(q*100)+"% \u0441\u0440. \u0437\u0430\u0440\u0430\u0431\u043e\u0442\u043a\u0430 (\u0441\u0442\u0430\u0436 "+t+" \u043b\u0435\u0442). \u041c\u0430\u043a\u0441. \u0434\u043d\u0435\u0432\u043d\u043e\u0435: "+A.b(B.c.p(6827.397260273972),!1)+". \u041e\u0440\u0438\u0435\u043d\u0442\u0438\u0440 \u0437\u0430 \u043c\u0435\u0441\u044f\u0446: ~"+A.b(p,!1)+"."
c.h(0,"w","\ud83c\udfe5",B.e,"\u041f\u043e\u0441\u043e\u0431\u0438\u0435 \u043f\u043e \u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0439 \u043d\u0435\u0442\u0440\u0443\u0434\u043e\u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u0438",o,p,"~"+A.b(p,!1)+"/\u043c\u0435\u0441","monthly")},
eL(a,b,c){var t=a.w
if(t.i(0,"mil_conscript_spouse")&&a.b==="female"&&t.i(0,"pregnant")&&a.e==="married")c.h(0,"m","\ud83e\udd30",B.a,"\u041f\u043e\u0441\u043e\u0431\u0438\u0435 \u0431\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0439 \u0436\u0435\u043d\u0435 \u0432\u043e\u0435\u043d\u043d\u043e\u0441\u043b\u0443\u0436\u0430\u0449\u0435\u0433\u043e \u043f\u043e \u043f\u0440\u0438\u0437\u044b\u0432\u0443","\u0415\u0434\u0438\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u0430\u044f \u0444\u0435\u0434\u0435\u0440\u0430\u043b\u044c\u043d\u0430\u044f \u0432\u044b\u043f\u043b\u0430\u0442\u0430 \u0441\u0443\u043f\u0440\u0443\u0433\u0435 \u0432\u043e\u0435\u043d\u043d\u043e\u0441\u043b\u0443\u0436\u0430\u0449\u0435\u0433\u043e \u043f\u043e \u043f\u0440\u0438\u0437\u044b\u0432\u0443 \u043f\u0440\u0438 \u0441\u0440\u043e\u043a\u0435 \u0431\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u043d\u0435 \u043c\u0435\u043d\u0435\u0435 180 \u0434\u043d\u0435\u0439.",45054.24,A.b(45054.24,!0),"once")
if(t.i(0,"mil_conscript_child")&&a.f>0&&b.r<=3)c.h(0,"m","\ud83e\ude96",B.a,"\u041f\u043e\u0441\u043e\u0431\u0438\u0435 \u043d\u0430 \u0440\u0435\u0431\u0451\u043d\u043a\u0430 \u0432\u043e\u0435\u043d\u043d\u043e\u0441\u043b\u0443\u0436\u0430\u0449\u0435\u0433\u043e \u043f\u043e \u043f\u0440\u0438\u0437\u044b\u0432\u0443","\u0415\u0436\u0435\u043c\u0435\u0441\u044f\u0447\u043d\u0430\u044f \u0444\u0435\u0434\u0435\u0440\u0430\u043b\u044c\u043d\u0430\u044f \u0432\u044b\u043f\u043b\u0430\u0442\u0430 \u043d\u0430 \u0440\u0435\u0431\u0451\u043d\u043a\u0430 \u0432\u043e\u0435\u043d\u043d\u043e\u0441\u043b\u0443\u0436\u0430\u0449\u0435\u0433\u043e \u043f\u043e \u043f\u0440\u0438\u0437\u044b\u0432\u0443 \u0434\u043e \u0434\u043e\u0441\u0442\u0438\u0436\u0435\u043d\u0438\u044f \u0440\u0435\u0431\u0451\u043d\u043a\u043e\u043c 3 \u043b\u0435\u0442.",19308.96,A.b(19308.96,!0)+"/\u043c\u0435\u0441","monthly")},
eQ(a,b,c){if(!a.w.i(0,"i_donor"))return
c.h(0,"s","\ud83e\ude78",B.a,"\u0415\u0414\u0412 \u041f\u043e\u0447\u0451\u0442\u043d\u043e\u0433\u043e \u0434\u043e\u043d\u043e\u0440\u0430 \u0420\u043e\u0441\u0441\u0438\u0438","\u0415\u0436\u0435\u0433\u043e\u0434\u043d\u0430\u044f \u0434\u0435\u043d\u0435\u0436\u043d\u0430\u044f \u0432\u044b\u043f\u043b\u0430\u0442\u0430 (\u0435\u0434\u0438\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e \u0440\u0430\u0437 \u0432 \u0433\u043e\u0434).",19497.68,A.b(19497.68,!0)+"/\u0433\u043e\u0434","once")
c.h(0,"s","\ud83c\udfe5",B.a,"\u041b\u044c\u0433\u043e\u0442\u044b \u041f\u043e\u0447\u0451\u0442\u043d\u043e\u0433\u043e \u0434\u043e\u043d\u043e\u0440\u0430","\u041e\u0442\u043f\u0443\u0441\u043a \u0432 \u0443\u0434\u043e\u0431\u043d\u043e\u0435 \u0432\u0440\u0435\u043c\u044f, \u043b\u044c\u0433\u043e\u0442\u043d\u044b\u0435 \u043f\u0443\u0442\u0451\u0432\u043a\u0438, \u0441\u043a\u0438\u0434\u043a\u0438 \u043d\u0430 \u043b\u0435\u0447\u0435\u043d\u0438\u0435.",0,"\u043f\u0430\u043a\u0435\u0442 \u043b\u044c\u0433\u043e\u0442","benefit")},
eJ(a,b,c){var t,s,r,q,p,o,n,m=a.f
if(m>0){t=b.ch
t===$&&A.k()
if(t){t=b.z
t===$&&A.k()}else t=!1
t=!t||b.c/b.d>37500}else t=!0
if(t)return
t=a.w
s=t.i(0,"solo_parent")
r=m>=2?4200:1400
if(m>=3)r+=(m-2)*6000
q=t.i(0,"disabled_child")
if(q)r+=12e3
p=s?r*2:r
o=B.c.p(p*0.13)
m=s?"\u0414\u0432\u043e\u0439\u043d\u043e\u0439 \u0432\u044b\u0447\u0435\u0442 \u041d\u0414\u0424\u041b (\u043e\u0434\u0438\u043d\u043e\u043a\u0438\u0439 \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u044c)":"\u0421\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u044b\u0439 \u0432\u044b\u0447\u0435\u0442 \u041d\u0414\u0424\u041b \u043d\u0430 \u0434\u0435\u0442\u0435\u0439"
t=A.b(p,!1)
n=q?", \u0438\u043d\u0432\u0430\u043b\u0438\u0434 \u2014 +12 000":""
c.h(0,"t","\ud83e\uddee",B.d,m,"\u0411\u0430\u0437\u0430: "+t+"/\u043c\u0435\u0441 \xd7 13% (1-\u0439 \u2014 1 400, 2-\u0439 \u2014 2 800, 3-\u0439+ \u2014 6 000"+n+" \u20bd). \u0414\u043e \u0434\u043e\u0445\u043e\u0434\u0430 450 000 \u20bd/\u0433\u043e\u0434.",o,"~"+A.b(o,!1)+"/\u043c\u0435\u0441","monthly")},
fw(a,b,c){var t=a.w
if(t.i(0,"bought_recent")||t.i(0,"has_mortgage")){t=b.ch
t===$&&A.k()
if(t){t=b.z
t===$&&A.k()}else t=!1
t=!t}else t=!0
if(t)return
t=b.x
t===$&&A.k()
if(!(t>0))t=B.c.p(b.c*12*0.13)
c.h(0,"t","\ud83c\udfd8\ufe0f",B.d,"\u0418\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0439 \u0432\u044b\u0447\u0435\u0442","\u0414\u043e 260 000 \u20bd \u0437\u0430 \u043f\u043e\u043a\u0443\u043f\u043a\u0443 + \u0434\u043e 390 000 \u20bd \u043f\u043e \u0438\u043f\u043e\u0442\u0435\u0447\u043d\u044b\u043c %.",Math.min(t,26e4),"\u0434\u043e "+A.b(26e4,!1)+" + "+A.b(39e4,!1),"once")},
fn(a,b,c){var t
if(a.w.i(0,"paid_med")){t=b.ch
t===$&&A.k()
if(t){t=b.z
t===$&&A.k()}else t=!1
t=!t}else t=!0
if(t)return
c.h(0,"t","\ud83c\udfe5",B.d,"\u0412\u044b\u0447\u0435\u0442: \u043b\u0435\u0447\u0435\u043d\u0438\u0435","13% \u043e\u0442 \u0440\u0430\u0441\u0445\u043e\u0434\u043e\u0432 (\u0434\u043e 150 000 \u20bd/\u0433\u043e\u0434; \u0434\u043e\u0440\u043e\u0433\u043e\u0441\u0442\u043e\u044f\u0449\u0435\u0435 \u2014 \u0431\u0435\u0437 \u043b\u0438\u043c\u0438\u0442\u0430).",19500,"\u0434\u043e "+A.b(19500,!1)+"/\u0433\u043e\u0434","once")},
eR(a,b,c){var t
if(a.w.i(0,"paid_edu")){t=b.ch
t===$&&A.k()
if(t){t=b.z
t===$&&A.k()}else t=!1
t=!t}else t=!0
if(t)return
c.h(0,"t","\ud83c\udf93",B.d,"\u0412\u044b\u0447\u0435\u0442: \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435","13% \u043e\u0442 \u0440\u0430\u0441\u0445\u043e\u0434\u043e\u0432: \u0437\u0430 \u0441\u0435\u0431\u044f \u0434\u043e 150 000, \u0437\u0430 \u0434\u0435\u0442\u0435\u0439 \u0434\u043e 110 000.",14300,"\u0434\u043e "+A.b(14300,!1)+"/\u0433\u043e\u0434","once")},
f3(a,b,c){var t
if(a.w.i(0,"paid_fit")){t=b.ch
t===$&&A.k()
if(t){t=b.z
t===$&&A.k()}else t=!1
t=!t}else t=!0
if(t)return
c.h(0,"t","\ud83c\udfcb\ufe0f",B.d,"\u0412\u044b\u0447\u0435\u0442: \u0444\u0438\u0442\u043d\u0435\u0441","13% \u043e\u0442 \u0440\u0430\u0441\u0445\u043e\u0434\u043e\u0432 \u0432 \u0441\u043e\u0441\u0442\u0430\u0432\u0435 \u0435\u0434\u0438\u043d\u043e\u0433\u043e \u0441\u043e\u0446\u0432\u044b\u0447\u0435\u0442\u0430 (\u043e\u0431\u0449\u0438\u0439 \u043b\u0438\u043c\u0438\u0442 150 000 \u20bd/\u0433\u043e\u0434).",19500,"\u0434\u043e "+A.b(19500,!1)+"/\u0433\u043e\u0434","once")},
fb(a,b,c){var t
if(a.w.i(0,"has_iis")){t=b.ch
t===$&&A.k()
if(t){t=b.z
t===$&&A.k()}else t=!1
t=!t}else t=!0
if(t)return
c.h(0,"t","\ud83d\udcc8",B.d,"\u0412\u044b\u0447\u0435\u0442 \u0418\u0418\u0421 \u0442\u0438\u043f \u0410","13% \u043e\u0442 \u043f\u043e\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0434\u043e 400 000 \u20bd.",52e3,"\u0434\u043e "+A.b(52e3,!1)+"/\u0433\u043e\u0434","once")},
fi(a,b,c){var t
if(a.w.i(0,"life_ins")){t=b.ch
t===$&&A.k()
if(t){t=b.z
t===$&&A.k()}else t=!1
t=!t}else t=!0
if(t)return
c.h(0,"t","\ud83d\udee1\ufe0f",B.d,"\u0412\u044b\u0447\u0435\u0442: \u0441\u0442\u0440\u0430\u0445\u043e\u0432\u0430\u043d\u0438\u0435 \u0436\u0438\u0437\u043d\u0438","13% \u043e\u0442 \u0432\u0437\u043d\u043e\u0441\u043e\u0432 \u043f\u043e \u0434\u043e\u0433\u043e\u0432\u043e\u0440\u0430\u043c \u0441\u0442\u0440\u0430\u0445\u043e\u0432\u0430\u043d\u0438\u044f \u0436\u0438\u0437\u043d\u0438 (3+ \u043b\u0435\u0442) \u0432 \u0441\u043e\u0441\u0442\u0430\u0432\u0435 \u0435\u0434\u0438\u043d\u043e\u0433\u043e \u0441\u043e\u0446\u0432\u044b\u0447\u0435\u0442\u0430 (\u043b\u0438\u043c\u0438\u0442 150 000 \u20bd/\u0433\u043e\u0434).",19500,"\u0434\u043e "+A.b(19500,!1)+"/\u0433\u043e\u0434","once")},
eH(a,b,c){if(!a.w.i(0,"charity"))return
c.h(0,"t","\ud83d\udc9d",B.d,"\u0412\u044b\u0447\u0435\u0442: \u043f\u043e\u0436\u0435\u0440\u0442\u0432\u043e\u0432\u0430\u043d\u0438\u044f","13% \u043e\u0442 \u0441\u0443\u043c\u043c\u044b \u043f\u043e\u0436\u0435\u0440\u0442\u0432\u043e\u0432\u0430\u043d\u0438\u0439, \u043d\u043e \u043d\u0435 \u0431\u043e\u043b\u0435\u0435 25% \u043e\u0442 \u0433\u043e\u0434\u043e\u0432\u043e\u0433\u043e \u0434\u043e\u0445\u043e\u0434\u0430.",0,"\u0434\u043e 25% \u043e\u0442 \u0434\u043e\u0445\u043e\u0434\u0430","benefit")}},B={}
var w=[A,J,B]
var $={}
A.ca.prototype={}
J.aP.prototype={
A(a,b){return a===b},
gm(a){return A.b3(a)},
j(a){return"Instance of '"+A.b4(a)+"'"},
gl(a){return A.a_(A.ck(this))}}
J.aR.prototype={
j(a){return String(a)},
gm(a){return a?519018:218159},
gl(a){return A.a_(u.y)},
$ij:1,
$iI:1}
J.am.prototype={
A(a,b){return null==b},
j(a){return"null"},
gm(a){return 0},
$ij:1}
J.ap.prototype={$in:1}
J.O.prototype={
gm(a){return 0},
j(a){return String(a)}}
J.b2.prototype={}
J.ay.prototype={}
J.N.prototype={
j(a){var t=a[$.bj()]
if(t==null)return this.a5(a)
return"JavaScript function for "+J.aL(t)},
$ia6:1}
J.ao.prototype={
gm(a){return 0},
j(a){return String(a)}}
J.aq.prototype={
gm(a){return 0},
j(a){return String(a)}}
J.t.prototype={
k(a,b){A.ae(a).c.a(b)
a.$flags&1&&A.de(a,29)
a.push(b)},
Y(a,b){var t,s=A.dG(a.length,"",!1,u.N)
for(t=0;t<a.length;++t)this.G(s,t,A.q(a[t]))
return s.join(b)},
gW(a){if(a.length>0)return a[0]
throw A.m(A.cA())},
gam(a){var t=a.length
if(t>0)return a[t-1]
throw A.m(A.cA())},
j(a){return A.c9(a,"[","]")},
gv(a){return new J.ai(a,a.length,A.ae(a).t("ai<1>"))},
gm(a){return A.b3(a)},
gu(a){return a.length},
G(a,b,c){A.ae(a).c.a(c)
a.$flags&2&&A.de(a)
if(!(b>=0&&b<a.length))throw A.m(A.d9(a,b))
a[b]=c},
$ih:1,
$il:1}
J.aQ.prototype={
ao(a){var t,s,r
if(!Array.isArray(a))return null
t=a.$flags|0
if((t&4)!==0)s="const, "
else if((t&2)!==0)s="unmodifiable, "
else s=(t&1)!==0?"fixed, ":""
r="Instance of '"+A.b4(a)+"'"
if(s==="")return r
return r+" ("+s+"length: "+a.length+")"}}
J.bx.prototype={}
J.ai.prototype={
gq(){var t=this.d
return t==null?this.$ti.c.a(t):t},
n(){var t,s=this,r=s.a,q=r.length
if(s.b!==q){r=A.c5(r)
throw A.m(r)}t=s.c
if(t>=q){s.d=null
return!1}s.d=r[t]
s.c=t+1
return!0},
$iM:1}
J.an.prototype={
N(a,b){var t
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=B.h.gE(b)
if(this.gE(a)===t)return 0
if(this.gE(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gE(a){return a===0?1/a<0:a<0},
F(a){var t
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){t=a<0?Math.ceil(a):Math.floor(a)
return t+0}throw A.m(A.dT(""+a+".toInt()"))},
p(a){if(a<0)return-Math.round(-a)
else return Math.round(a)},
ai(a,b,c){if(B.h.N(b,c)>0)throw A.m(A.eF(b))
if(this.N(a,b)<0)return b
if(this.N(a,c)>0)return c
return a},
a2(a,b){var t
if(b>20)throw A.m(A.bC(b,0,20,"fractionDigits",null))
t=a.toFixed(b)
if(a===0&&this.gE(a))return"-"+t
return t},
j(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gm(a){var t,s,r,q,p=a|0
if(a===p)return p&536870911
t=Math.abs(a)
s=Math.log(t)/0.6931471805599453|0
r=Math.pow(2,s)
q=t<1?t/r:r/t
return((q*9007199254740992|0)+(q*3542243181176521|0))*599197+s*1259&536870911},
P(a,b){var t=a%b
if(t===0)return 0
if(t>0)return t
return t+b},
gl(a){return A.a_(u.H)},
$ii:1,
$ia2:1}
J.al.prototype={
gl(a){return A.a_(u.S)},
$ij:1,
$ic:1}
J.aS.prototype={
gl(a){return A.a_(u.i)},
$ij:1}
J.a7.prototype={
H(a,b,c){return a.substring(b,A.dL(b,c,a.length))},
a4(a,b){return this.H(a,b,null)},
a3(a){var t,s,r,q=a.trim(),p=q.length
if(p===0)return q
if(0>=p)return A.v(q,0)
if(q.charCodeAt(0)===133){t=J.dA(q,1)
if(t===p)return""}else t=0
s=p-1
if(!(s>=0))return A.v(q,s)
r=q.charCodeAt(s)===133?J.dB(q,s):p
if(t===0&&r===p)return q
return q.substring(t,r)},
j(a){return a},
gm(a){var t,s,r
for(t=a.length,s=0,r=0;r<t;++r){s=s+a.charCodeAt(r)&536870911
s=s+((s&524287)<<10)&536870911
s^=s>>6}s=s+((s&67108863)<<3)&536870911
s^=s>>11
return s+((s&16383)<<15)&536870911},
gl(a){return A.a_(u.N)},
gu(a){return a.length},
$ij:1,
$ibz:1,
$iw:1}
A.a8.prototype={
j(a){return"LateInitializationError: "+this.a}}
A.bF.prototype={}
A.ar.prototype={
gq(){var t=this.d
return t==null?this.$ti.c.a(t):t},
n(){var t,s=this,r=s.a,q=r.length
if(s.b!==q)throw A.m(A.c8(r))
t=s.c
if(t>=q){s.d=null
return!1}s.d=r[t]
s.c=t+1
return!0},
$iM:1}
A.ac.prototype={
gv(a){return new A.U(J.cs(this.a),this.b,this.$ti.t("U<1>"))}}
A.U.prototype={
n(){var t,s
for(t=this.a,s=this.b;t.n();)if(s.$1(t.gq()))return!0
return!1},
gq(){return this.a.gq()},
$iM:1}
A.y.prototype={}
A.D.prototype={$r:"+(1,2)",$s:1}
A.aO.prototype={
j(a){return A.dI(this)}}
A.L.prototype={
gu(a){return this.b.length},
aj(a){if(typeof a!="string")return!1
if("__proto__"===a)return!1
return this.a.hasOwnProperty(a)},
B(a,b){if(!this.aj(b))return null
return this.b[this.a[b]]},
al(a,b){var t,s,r,q,p=this
p.$ti.t("~(1,2)").a(b)
t=p.$keys
if(t==null){t=Object.keys(p.a)
p.$keys=t}t=t
s=p.b
for(r=t.length,q=0;q<r;++q)b.$2(t[q],s[q])}}
A.ax.prototype={}
A.K.prototype={
j(a){var t=this.constructor,s=t==null?null:t.name
return"Closure '"+A.df(s==null?"unknown":s)+"'"},
$ia6:1,
gap(){return this},
$C:"$1",
$R:1,
$D:null}
A.aN.prototype={$C:"$2",$R:2}
A.b8.prototype={}
A.b6.prototype={
j(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+A.df(t)+"'"}}
A.a5.prototype={
A(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.a5))return!1
return this.$_target===b.$_target&&this.a===b.a},
gm(a){return(A.db(this.a)^A.b3(this.$_target))>>>0},
j(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.b4(this.a)+"'")}}
A.bE.prototype={
j(a){return"RuntimeError: "+this.a}}
A.bY.prototype={
$1(a){return this.a(a)},
$S:4}
A.bZ.prototype={
$2(a,b){return this.a(a,b)},
$S:5}
A.c_.prototype={
$1(a){return this.a(A.bf(a))},
$S:6}
A.Y.prototype={
j(a){return this.U(!1)},
U(a){var t,s,r,q,p,o=this.ad(),n=this.S(),m=(a?"Record ":"")+"("
for(t=o.length,s="",r=0;r<t;++r,s=", "){m+=s
q=o[r]
if(typeof q=="string")m=m+q+": "
if(!(r<n.length))return A.v(n,r)
p=n[r]
m=a?m+A.cF(p):m+A.q(p)}m+=")"
return m.charCodeAt(0)==0?m:m},
ad(){var t,s=this.$s
while($.bN.length<=s)B.b.k($.bN,null)
t=$.bN[s]
if(t==null){t=this.a8()
B.b.G($.bN,s,t)}return t},
a8(){var t,s,r,q=this.$r,p=q.indexOf("("),o=q.substring(1,p),n=q.substring(p),m=n==="()"?0:n.replace(/[^,]/g,"").length+1,l=A.z(new Array(m),u.f)
for(t=0;t<m;++t)l[t]=t
if(o!==""){s=o.split(",")
t=s.length
for(r=m;t>0;){--r;--t
B.b.G(l,r,s[t])}}return A.cD(l,u.K)}}
A.ad.prototype={
S(){return[this.a,this.b]},
A(a,b){if(b==null)return!1
return b instanceof A.ad&&this.$s===b.$s&&J.c7(this.a,b.a)&&J.c7(this.b,b.b)},
gm(a){return A.dJ(this.$s,this.a,this.b,B.j)}}
A.aT.prototype={
j(a){return"RegExp/"+this.a+"/"+this.b.flags},
gae(){var t=this,s=t.c
if(s!=null)return s
s=t.b
return t.c=A.cC(t.a,s.multiline,!s.ignoreCase,s.unicode,s.dotAll,"g")},
ac(a,b){var t,s=this.gae()
if(s==null)s=A.ci(s)
s.lastIndex=b
t=s.exec(a)
if(t==null)return null
return new A.bd(t)},
$ibz:1,
$idM:1}
A.bd.prototype={
gak(){var t=this.b
return t.index+t[0].length},
B(a,b){var t=this.b
if(!(b<t.length))return A.v(t,b)
return t[b]},
$ias:1,
$ibD:1}
A.ba.prototype={
gq(){var t=this.d
return t==null?u.F.a(t):t},
n(){var t,s,r,q,p,o,n=this,m=n.b
if(m==null)return!1
t=n.c
s=m.length
if(t<=s){r=n.a
q=r.ac(m,t)
if(q!=null){n.d=q
p=q.gak()
if(q.b.index===p){t=!1
if(r.b.unicode){r=n.c
o=r+1
if(o<s){if(!(r>=0&&r<s))return A.v(m,r)
r=m.charCodeAt(r)
if(r>=55296&&r<=56319){if(!(o>=0))return A.v(m,o)
t=m.charCodeAt(o)
t=t>=56320&&t<=57343}}}p=(t?p+1:p)+1}n.c=p
return!0}}n.b=n.d=null
return!1},
$iM:1}
A.bJ.prototype={
C(){var t=this.b
if(t===this)throw A.m(new A.a8("Local '' has not been initialized."))
return t},
sD(a){if(this.b!==this)throw A.m(new A.a8("Local '' has already been initialized."))
this.b=a}}
A.a9.prototype={
gl(a){return B.d2},
$ij:1}
A.av.prototype={}
A.aU.prototype={
gl(a){return B.d3},
$ij:1}
A.aa.prototype={
gu(a){return a.length},
$iA:1}
A.at.prototype={$ih:1,$il:1}
A.au.prototype={$ih:1,$il:1}
A.aV.prototype={
gl(a){return B.d4},
$ij:1}
A.aW.prototype={
gl(a){return B.d5},
$ij:1}
A.aX.prototype={
gl(a){return B.d6},
$ij:1}
A.aY.prototype={
gl(a){return B.d7},
$ij:1}
A.aZ.prototype={
gl(a){return B.d8},
$ij:1}
A.b_.prototype={
gl(a){return B.da},
$ij:1}
A.b0.prototype={
gl(a){return B.db},
$ij:1}
A.aw.prototype={
gl(a){return B.dc},
gu(a){return a.length},
$ij:1}
A.b1.prototype={
gl(a){return B.dd},
gu(a){return a.length},
$ij:1}
A.aA.prototype={}
A.aB.prototype={}
A.aC.prototype={}
A.aD.prototype={}
A.F.prototype={
t(a){return A.aI(v.typeUniverse,this,a)},
a7(a){return A.cU(v.typeUniverse,this,a)}}
A.bb.prototype={}
A.bO.prototype={
j(a){return A.B(this.a,null)}}
A.bL.prototype={
j(a){return this.a}}
A.be.prototype={}
A.V.prototype={
gv(a){var t=this,s=new A.W(t,t.r,A.S(t).t("W<1>"))
s.c=t.e
return s},
gu(a){return this.a},
i(a,b){var t,s
if(b!=="__proto__"){t=this.b
if(t==null)return!1
return u.g.a(t[b])!=null}else{s=this.a9(b)
return s}},
a9(a){var t=this.d
if(t==null)return!1
return this.L(t[this.I(a)],a)>=0},
k(a,b){var t,s,r=this
A.S(r).c.a(b)
if(typeof b=="string"&&b!=="__proto__"){t=r.b
return r.R(t==null?r.b=A.ce():t,b)}else if(typeof b=="number"&&(b&1073741823)===b){s=r.c
return r.R(s==null?r.c=A.ce():s,b)}else return r.a6(b)},
a6(a){var t,s,r,q=this
A.S(q).c.a(a)
t=q.d
if(t==null)t=q.d=A.ce()
s=q.I(a)
r=t[s]
if(r==null)t[s]=[q.M(a)]
else{if(q.L(r,a)>=0)return!1
r.push(q.M(a))}return!0},
an(a,b){var t
if(b!=="__proto__")return this.ag(this.b,b)
else{t=this.af(b)
return t}},
af(a){var t,s,r,q,p=this,o=p.d
if(o==null)return!1
t=p.I(a)
s=o[t]
r=p.L(s,a)
if(r<0)return!1
q=s.splice(r,1)[0]
if(0===s.length)delete o[t]
p.V(q)
return!0},
R(a,b){A.S(this).c.a(b)
if(u.g.a(a[b])!=null)return!1
a[b]=this.M(b)
return!0},
ag(a,b){var t
if(a==null)return!1
t=u.g.a(a[b])
if(t==null)return!1
this.V(t)
delete a[b]
return!0},
T(){this.r=this.r+1&1073741823},
M(a){var t,s=this,r=new A.bc(A.S(s).c.a(a))
if(s.e==null)s.e=s.f=r
else{t=s.f
t.toString
r.c=t
s.f=t.b=r}++s.a
s.T()
return r},
V(a){var t=this,s=a.c,r=a.b
if(s==null)t.e=r
else s.b=r
if(r==null)t.f=s
else r.c=s;--t.a
t.T()},
I(a){return J.J(a)&1073741823},
L(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.c7(a[s].a,b))return s
return-1}}
A.bc.prototype={}
A.W.prototype={
gq(){var t=this.d
return t==null?this.$ti.c.a(t):t},
n(){var t=this,s=t.c,r=t.a
if(t.b!==r.r)throw A.m(A.c8(r))
else if(s==null){t.d=null
return!1}else{t.d=t.$ti.t("1?").a(s.a)
t.c=s.b
return!0}},
$iM:1}
A.o.prototype={
gv(a){return new A.ar(a,a.length,A.aK(a).t("ar<o.E>"))},
j(a){return A.c9(a,"[","]")}}
A.by.prototype={
$2(a,b){var t,s=this.a
if(!s.a)this.b.a+=", "
s.a=!1
s=this.b
t=A.q(a)
s.a=(s.a+=t)+": "
t=A.q(b)
s.a+=t},
$S:7}
A.ab.prototype={
j(a){return A.c9(this,"{","}")},
$ih:1,
$icc:1}
A.aE.prototype={}
A.bK.prototype={
j(a){return this.ab()}}
A.bt.prototype={}
A.bl.prototype={
j(a){var t=this.a
if(t!=null)return"Assertion failed: "+A.bu(t)
return"Assertion failed"}}
A.bH.prototype={}
A.a3.prototype={
gK(){return"Invalid argument"+(!this.a?"(s)":"")},
gJ(){return""},
j(a){var t=this,s=t.c,r=s==null?"":" ("+s+")",q=t.d,p=q==null?"":": "+q,o=t.gK()+r+p
if(!t.a)return o
return o+t.gJ()+": "+A.bu(t.gO())},
gO(){return this.b}}
A.b5.prototype={
gO(){return A.cX(this.b)},
gK(){return"RangeError"},
gJ(){var t,s=this.e,r=this.f
if(s==null)t=r!=null?": Not less than or equal to "+A.q(r):""
else if(r==null)t=": Not greater than or equal to "+A.q(s)
else if(r>s)t=": Not in inclusive range "+A.q(s)+".."+A.q(r)
else t=r<s?": Valid value range is empty":": Only valid value is "+A.q(s)
return t}}
A.bw.prototype={
gO(){return A.bR(this.b)},
gK(){return"RangeError"},
gJ(){if(A.bR(this.b)<0)return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+t},
gu(a){return this.f}}
A.b9.prototype={
j(a){return"Unsupported operation: "+this.a}}
A.bI.prototype={
j(a){return"UnimplementedError: "+this.a}}
A.bG.prototype={
j(a){return"Bad state: "+this.a}}
A.bs.prototype={
j(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.bu(t)+"."}}
A.bv.prototype={
j(a){var t=this.a,s=""!==t?"FormatException: "+t:"FormatException",r=this.b
if(r.length>78)r=B.i.H(r,0,75)+"..."
return s+"\n"+r}}
A.h.prototype={
X(a,b,c,d){var t,s
d.a(b)
A.S(this).a7(d).t("1(1,h.E)").a(c)
for(t=this.gv(this),s=b;t.n();)s=c.$2(s,t.gq())
return s},
gu(a){var t,s=this.gv(this)
for(t=0;s.n();)++t
return t},
j(a){return A.dx(this,"(",")")}}
A.T.prototype={
gm(a){return A.p.prototype.gm.call(this,0)},
j(a){return"null"}}
A.p.prototype={$ip:1,
A(a,b){return this===b},
gm(a){return A.b3(this)},
j(a){return"Instance of '"+A.b4(this)+"'"},
gl(a){return A.f7(this)},
toString(){return this.j(this)}}
A.b7.prototype={
gu(a){return this.a.length},
j(a){var t=this.a
return t.charCodeAt(0)==0?t:t}}
A.br.prototype={}
A.bm.prototype={
ah(a){var t,s=this.aa(a),r=A.ae(s),q=r.t("I(1)")
r=r.t("ac<1>")
t=u.i
return new A.br(s,new A.ac(s,q.a(new A.bn()),r).X(0,0,new A.bo(),t),new A.ac(s,q.a(new A.bp()),r).X(0,0,new A.bq(),t))},
aa(a){var t,s,r,q,p,o,n,m,l,k,j,i,h=A.bB(a.a,null)
if(h==null)h=0
t=a.x
s=A.bA(t)
if(s==null)s=0
r=A.bB(a.y,null)
if(r==null)r=1
r=Math.max(1,r)
q=A.bA("")
if(q==null)q=0
p=A.bB("",null)
if(p==null)p=0
o=A.bA(a.r)
if(o==null)o=99
n=a.d
m=A.fy(n)
l=new A.ak(a,h,s,r,q,p,o,m)
l.x=B.c.p(s*12*0.13)
r=l.y=s/r
t=l.z=B.i.a3(t).length!==0
l.Q=t&&r<m.x
l.as=t&&r<m.x*2
l.at=n==="moscow"||n==="mo"
l.ax=n==="north"
l.ay=n==="dfo"||a.w.i(0,"i_dfo")
h=a.c
l.ch=h==="employed"||h==="matleave"
h=A.z([],u.E)
k=new A.aj(h)
for(j=0;j<40;++j){i=B.am[j]
k.b=i.a
i.b.$3(a,l,k)
k.b=""}h=A.cD(h,u.p)
h=A.z(h.slice(0),A.ae(h))
return h}}
A.bn.prototype={
$1(a){return u.p.a(a).r==="monthly"},
$S:1}
A.bo.prototype={
$2(a,b){return A.ch(a)+u.p.a(b).w},
$S:2}
A.bp.prototype={
$1(a){return u.p.a(a).r==="once"},
$S:1}
A.bq.prototype={
$2(a,b){return A.ch(a)+u.p.a(b).w},
$S:2}
A.ak.prototype={
ga1(){var t=this.a.c
return t==="employed"||t==="self"||t==="ip"},
ga_(){var t=this.a.w
return!t.i(0,"excess_property")&&!t.i(0,"high_deposits")&&!t.i(0,"alimony_debt")},
ga0(){if(this.c>0)return!0
var t=this.a
if(t.w.i(0,"valid_zero_income"))return!0
t=t.c
return t==="student"||t==="pensioner"||t==="caregiver"||t==="matleave"},
gZ(){var t=this,s=t.Q
s===$&&A.k()
if(s)s=(!t.ga1()||t.c>=18062)&&t.ga_()&&t.ga0()
else s=!1
return s}}
A.aj.prototype={
h(a,b,c,d,e,f,g,h,i){B.b.k(this.a,new A.H(e,f,c,h,i,g))}}
A.e.prototype={}
A.r.prototype={}
A.d.prototype={}
A.a.prototype={}
A.H.prototype={}
A.a4.prototype={
ab(){return"BenefitTone."+this.b}}
A.az.prototype={}
A.bX.prototype={
$1(a){return A.q(a.B(0,1))+" "},
$S:8}
A.c1.prototype={
$1(a){return u.a.a(a).a!=="99"},
$S:9}
A.c2.prototype={
$1(a){A.f(a)
return A.bV()},
$S:3}
A.c3.prototype={
$1(a){A.f(a)
return A.bV()},
$S:3}
A.bS.prototype={
$1(a){var t,s
A.f(a)
t=this.a.a
s=this.b
if($.cj.an(0,t))A.f(s.classList).remove("on")
else{$.cj.k(0,t)
A.f(s.classList).add("on")}A.bV()},
$S:10};(function aliases(){var t=J.O.prototype
t.a5=t.j})();(function installTearOffs(){var t=hunkHelpers.installStaticTearOff
t(A,"f0",3,null,["$3"],["fv"],0,0)
t(A,"f_",3,null,["$3"],["fr"],0,0)
t(A,"eY",3,null,["$3"],["fm"],0,0)
t(A,"eV",3,null,["$3"],["eG"],0,0)
t(A,"f1",3,null,["$3"],["hc"],0,0)
t(A,"eX",3,null,["$3"],["eT"],0,0)
t(A,"eZ",3,null,["$3"],["fq"],0,0)
t(A,"eW",3,null,["$3"],["eP"],0,0)
t(A,"f2",3,null,["$3"],["he"],0,0)
t(A,"eU",3,null,["$3"],["eE"],0,0)
t(A,"fE",3,null,["$3"],["fs"],0,0)
t(A,"fB",3,null,["$3"],["eI"],0,0)
t(A,"fH",3,null,["$3"],["fI"],0,0)
t(A,"fD",3,null,["$3"],["fp"],0,0)
t(A,"fC",3,null,["$3"],["eN"],0,0)
t(A,"fF",3,null,["$3"],["fz"],0,0)
t(A,"fG",3,null,["$3"],["fA"],0,0)
t(A,"fX",3,null,["$3"],["h0"],0,0)
t(A,"fY",3,null,["$3"],["hb"],0,0)
t(A,"fR",3,null,["$3"],["fh"],0,0)
t(A,"fQ",3,null,["$3"],["fa"],0,0)
t(A,"fT",3,null,["$3"],["ft"],0,0)
t(A,"fN",3,null,["$3"],["eO"],0,0)
t(A,"fU",3,null,["$3"],["fx"],0,0)
t(A,"fL",3,null,["$3"],["eK"],0,0)
t(A,"fW",3,null,["$3"],["fK"],0,0)
t(A,"fS",3,null,["$3"],["fo"],0,0)
t(A,"fZ",3,null,["$3"],["hd"],0,0)
t(A,"fP",3,null,["$3"],["f9"],0,0)
t(A,"fV",3,null,["$3"],["fJ"],0,0)
t(A,"fM",3,null,["$3"],["eL"],0,0)
t(A,"fO",3,null,["$3"],["eQ"],0,0)
t(A,"h2",3,null,["$3"],["eJ"],0,0)
t(A,"h8",3,null,["$3"],["fw"],0,0)
t(A,"h7",3,null,["$3"],["fn"],0,0)
t(A,"h3",3,null,["$3"],["eR"],0,0)
t(A,"h4",3,null,["$3"],["f3"],0,0)
t(A,"h5",3,null,["$3"],["fb"],0,0)
t(A,"h6",3,null,["$3"],["fi"],0,0)
t(A,"h1",3,null,["$3"],["eH"],0,0)})();(function inheritance(){var t=hunkHelpers.mixin,s=hunkHelpers.inherit,r=hunkHelpers.inheritMany
s(A.p,null)
r(A.p,[A.ca,J.aP,A.ax,J.ai,A.bt,A.bF,A.ar,A.h,A.U,A.y,A.Y,A.aO,A.K,A.aT,A.bd,A.ba,A.bJ,A.F,A.bb,A.bO,A.ab,A.bc,A.W,A.o,A.bK,A.bv,A.T,A.b7,A.br,A.bm,A.ak,A.aj,A.e,A.r,A.d,A.a,A.H,A.az])
r(J.aP,[J.aR,J.am,J.ap,J.ao,J.aq,J.an,J.a7])
r(J.ap,[J.O,J.t,A.a9,A.av])
r(J.O,[J.b2,J.ay,J.N])
s(J.aQ,A.ax)
s(J.bx,J.t)
r(J.an,[J.al,J.aS])
r(A.bt,[A.a8,A.bE,A.bL,A.bl,A.bH,A.a3,A.b9,A.bI,A.bG,A.bs])
s(A.ac,A.h)
s(A.ad,A.Y)
s(A.D,A.ad)
s(A.L,A.aO)
r(A.K,[A.aN,A.b8,A.bY,A.c_,A.bn,A.bp,A.bX,A.c1,A.c2,A.c3,A.bS])
r(A.b8,[A.b6,A.a5])
r(A.aN,[A.bZ,A.by,A.bo,A.bq])
r(A.av,[A.aU,A.aa])
r(A.aa,[A.aA,A.aC])
s(A.aB,A.aA)
s(A.at,A.aB)
s(A.aD,A.aC)
s(A.au,A.aD)
r(A.at,[A.aV,A.aW])
r(A.au,[A.aX,A.aY,A.aZ,A.b_,A.b0,A.aw,A.b1])
s(A.be,A.bL)
s(A.aE,A.ab)
s(A.V,A.aE)
r(A.a3,[A.b5,A.bw])
s(A.a4,A.bK)
t(A.aA,A.o)
t(A.aB,A.y)
t(A.aC,A.o)
t(A.aD,A.y)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{c:"int",i:"double",a2:"num",w:"String",I:"bool",T:"Null",l:"List",p:"Object",hi:"Map",n:"JSObject"},mangledNames:{},types:["~(az,ak,aj)","I(H)","i(i,H)","~(n)","@(@)","@(@,w)","@(w)","~(p?,p?)","w(as)","I(r)","T(n)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.D&&a.b(c.a)&&b.b(c.b)}}
A.e6(v.typeUniverse,JSON.parse('{"b2":"O","ay":"O","N":"O","hj":"a9","aR":{"I":[],"j":[]},"am":{"j":[]},"ap":{"n":[]},"O":{"n":[]},"t":{"l":["1"],"n":[],"h":["1"]},"aQ":{"ax":[]},"bx":{"t":["1"],"l":["1"],"n":[],"h":["1"]},"ai":{"M":["1"]},"an":{"i":[],"a2":[]},"al":{"i":[],"c":[],"a2":[],"j":[]},"aS":{"i":[],"a2":[],"j":[]},"a7":{"w":[],"bz":[],"j":[]},"ar":{"M":["1"]},"ac":{"h":["1"],"h.E":"1"},"U":{"M":["1"]},"D":{"ad":[],"Y":[]},"L":{"aO":["1","2"]},"K":{"a6":[]},"aN":{"a6":[]},"b8":{"a6":[]},"b6":{"a6":[]},"a5":{"a6":[]},"ad":{"Y":[]},"aT":{"dM":[],"bz":[]},"bd":{"bD":[],"as":[]},"ba":{"M":["bD"]},"a9":{"n":[],"j":[]},"av":{"n":[]},"aU":{"n":[],"j":[]},"aa":{"A":["1"],"n":[]},"at":{"o":["i"],"l":["i"],"A":["i"],"n":[],"h":["i"],"y":["i"]},"au":{"o":["c"],"l":["c"],"A":["c"],"n":[],"h":["c"],"y":["c"]},"aV":{"o":["i"],"l":["i"],"A":["i"],"n":[],"h":["i"],"y":["i"],"j":[],"o.E":"i"},"aW":{"o":["i"],"l":["i"],"A":["i"],"n":[],"h":["i"],"y":["i"],"j":[],"o.E":"i"},"aX":{"o":["c"],"l":["c"],"A":["c"],"n":[],"h":["c"],"y":["c"],"j":[],"o.E":"c"},"aY":{"o":["c"],"l":["c"],"A":["c"],"n":[],"h":["c"],"y":["c"],"j":[],"o.E":"c"},"aZ":{"o":["c"],"l":["c"],"A":["c"],"n":[],"h":["c"],"y":["c"],"j":[],"o.E":"c"},"b_":{"o":["c"],"l":["c"],"A":["c"],"n":[],"h":["c"],"y":["c"],"j":[],"o.E":"c"},"b0":{"o":["c"],"l":["c"],"A":["c"],"n":[],"h":["c"],"y":["c"],"j":[],"o.E":"c"},"aw":{"o":["c"],"l":["c"],"A":["c"],"n":[],"h":["c"],"y":["c"],"j":[],"o.E":"c"},"b1":{"o":["c"],"l":["c"],"A":["c"],"n":[],"h":["c"],"y":["c"],"j":[],"o.E":"c"},"V":{"ab":["1"],"cc":["1"],"h":["1"]},"W":{"M":["1"]},"ab":{"cc":["1"],"h":["1"]},"aE":{"ab":["1"],"cc":["1"],"h":["1"]},"i":{"a2":[]},"c":{"a2":[]},"l":{"h":["1"]},"bD":{"as":[]},"w":{"bz":[]},"dw":{"l":["c"],"h":["c"]},"dS":{"l":["c"],"h":["c"]},"dR":{"l":["c"],"h":["c"]},"du":{"l":["c"],"h":["c"]},"dP":{"l":["c"],"h":["c"]},"dv":{"l":["c"],"h":["c"]},"dQ":{"l":["c"],"h":["c"]},"dr":{"l":["i"],"h":["i"]},"ds":{"l":["i"],"h":["i"]}}'))
A.e5(v.typeUniverse,JSON.parse('{"aa":1,"aE":1}'))
var u=(function rtii(){var t=A.aJ
return{p:t("H"),J:t("L<w,i>"),Z:t("a6"),U:t("h<@>"),E:t("t<H>"),f:t("t<p>"),L:t("t<+(w,w)>"),I:t("t<r>"),s:t("t<w>"),b:t("t<d>"),q:t("t<@>"),T:t("am"),m:t("n"),M:t("N"),D:t("A<@>"),j:t("l<@>"),P:t("T"),K:t("p"),O:t("hk"),d:t("+()"),F:t("bD"),a:t("r"),N:t("w"),Q:t("w(as)"),R:t("j"),o:t("ay"),e:t("U<r>"),y:t("I"),l:t("I(r)"),i:t("i"),S:t("c"),V:t("cz<T>?"),z:t("n?"),X:t("p?"),v:t("w?"),A:t("w(as)?"),g:t("bc?"),u:t("I?"),t:t("i?"),w:t("c?"),n:t("a2?"),H:t("a2")}})();(function constants(){var t=hunkHelpers.makeConstList
B.aa=J.aP.prototype
B.b=J.t.prototype
B.h=J.al.prototype
B.c=J.an.prototype
B.i=J.a7.prototype
B.ab=J.N.prototype
B.ac=J.ap.prototype
B.o=J.b2.prototype
B.l=J.ay.prototype
B.d=new A.a4(0,"accent")
B.e=new A.a4(1,"success")
B.a=new A.a4(2,"warning")
B.f=new A.a4(3,"purple")
B.m=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.a4=function() {
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
B.a9=function(getTagFallback) {
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
B.a5=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.a8=function(hooks) {
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
B.a7=function(hooks) {
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
B.a6=function(hooks) {
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
B.n=function(hooks) { return hooks; }

B.j=new A.bF()
B.cd=new A.r("99","\u041d\u0435\u0442 \u0434\u0435\u0442\u0435\u0439")
B.c0=new A.r("0","\u0414\u043e 1 \u0433\u043e\u0434\u0430")
B.c3=new A.r("1.5","\u0414\u043e 1,5 \u043b\u0435\u0442")
B.c2=new A.r("3","\u0414\u043e 3 \u043b\u0435\u0442")
B.c9=new A.r("7","\u0414\u043e 7 \u043b\u0435\u0442")
B.ca=new A.r("17","\u0414\u043e 17 \u043b\u0435\u0442")
B.ad=t([B.cd,B.c0,B.c3,B.c2,B.c9,B.ca],u.I)
B.p=new A.D("","\u2014 \u0432\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u2014")
B.at=new A.D("single","\u041d\u0435 \u0432 \u0431\u0440\u0430\u043a\u0435")
B.av=new A.D("married","\u0412 \u0431\u0440\u0430\u043a\u0435")
B.aw=new A.D("divorced","\u0420\u0430\u0437\u0432\u0435\u0434\u0451\u043d(\u0430)")
B.au=new A.D("widow","\u0412\u0434\u043e\u0432\u0435\u0446 / \u0432\u0434\u043e\u0432\u0430")
B.ae=t([B.p,B.at,B.av,B.aw,B.au],u.L)
B.cC=new A.d("i_dis1","\u0418\u043d\u0432\u0430\u043b\u0438\u0434\u043d\u043e\u0441\u0442\u044c I \u0433\u0440\u0443\u043f\u043f\u044b (\u0443 \u043c\u0435\u043d\u044f)")
B.d0=new A.d("i_dis2","\u0418\u043d\u0432\u0430\u043b\u0438\u0434\u043d\u043e\u0441\u0442\u044c II \u0433\u0440\u0443\u043f\u043f\u044b")
B.ce=new A.d("i_dis3","\u0418\u043d\u0432\u0430\u043b\u0438\u0434\u043d\u043e\u0441\u0442\u044c III \u0433\u0440\u0443\u043f\u043f\u044b")
B.cF=new A.d("i_pen","\u042f \u043f\u0435\u043d\u0441\u0438\u043e\u043d\u0435\u0440(\u043a\u0430)")
B.cq=new A.d("i_mil","\u0412\u043e\u0435\u043d\u043d\u043e\u0441\u043b\u0443\u0436\u0430\u0449\u0438\u0439 / \u0443\u0447\u0430\u0441\u0442\u043d\u0438\u043a \u0421\u0412\u041e")
B.ck=new A.d("i_vet","\u0412\u0435\u0442\u0435\u0440\u0430\u043d \u0431\u043e\u0435\u0432\u044b\u0445 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439")
B.cx=new A.d("i_stu","\u0421\u0442\u0443\u0434\u0435\u043d\u0442 \u043e\u0447\u043d\u043e\u0439 \u0444\u043e\u0440\u043c\u044b")
B.cu=new A.d("i_laid","\u0423\u0432\u043e\u043b\u0435\u043d(\u0430) \u043f\u043e \u0441\u043e\u043a\u0440\u0430\u0449\u0435\u043d\u0438\u044e")
B.ch=new A.d("i_sc","\u0418\u043d\u0442\u0435\u0440\u0435\u0441\u0443\u0435\u0442 \u0441\u043e\u0446\u043a\u043e\u043d\u0442\u0440\u0430\u043a\u0442")
B.cM=new A.d("i_chern","\u041b\u0438\u043a\u0432\u0438\u0434\u0430\u0442\u043e\u0440 / \u0447\u0435\u0440\u043d\u043e\u0431\u044b\u043b\u0435\u0446")
B.cD=new A.d("i_dfo","\u041f\u0435\u0440\u0435\u0435\u0437\u0434 \u043d\u0430 \u0414\u0430\u043b\u044c\u043d\u0438\u0439 \u0412\u043e\u0441\u0442\u043e\u043a")
B.cG=new A.d("i_repr","\u0420\u0435\u0430\u0431\u0438\u043b\u0438\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439")
B.cO=new A.d("i_vet_trud","\u0412\u0435\u0442\u0435\u0440\u0430\u043d \u0442\u0440\u0443\u0434\u0430")
B.cv=new A.d("i_honored","\u0417\u0430\u0441\u043b\u0443\u0436\u0435\u043d\u043d\u044b\u0439 (\u043c\u0430\u0441\u0442\u0435\u0440/\u0434\u0435\u044f\u0442\u0435\u043b\u044c/\u0430\u0440\u0442\u0438\u0441\u0442)")
B.cl=new A.d("i_people_art","\u041d\u0430\u0440\u043e\u0434\u043d\u044b\u0439 \u0430\u0440\u0442\u0438\u0441\u0442 / \u0434\u0435\u044f\u0442\u0435\u043b\u044c")
B.cP=new A.d("i_hero_labor","\u0413\u0435\u0440\u043e\u0439 \u0422\u0440\u0443\u0434\u0430 \u0420\u0424")
B.cH=new A.d("i_sick","\u041d\u0430\u0445\u043e\u0436\u0443\u0441\u044c \u043d\u0430 \u0431\u043e\u043b\u044c\u043d\u0438\u0447\u043d\u043e\u043c")
B.cj=new A.d("self_sick_insured","\u0421\u0430\u043c\u043e\u0437\u0430\u043d\u044f\u0442\u044b\u0439: \u0435\u0441\u0442\u044c \u0434\u043e\u0431\u0440\u043e\u0432\u043e\u043b\u044c\u043d\u043e\u0435 \u0441\u043e\u0446\u0441\u0442\u0440\u0430\u0445\u043e\u0432\u0430\u043d\u0438\u0435")
B.d_=new A.d("mil_conscript_spouse","\u0411\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u0430\u044f \u0436\u0435\u043d\u0430 \u0432\u043e\u0435\u043d\u043d\u043e\u0441\u043b\u0443\u0436\u0430\u0449\u0435\u0433\u043e \u043f\u043e \u043f\u0440\u0438\u0437\u044b\u0432\u0443")
B.cL=new A.d("mil_conscript_child","\u0420\u0435\u0431\u0451\u043d\u043e\u043a \u0432\u043e\u0435\u043d\u043d\u043e\u0441\u043b\u0443\u0436\u0430\u0449\u0435\u0433\u043e \u043f\u043e \u043f\u0440\u0438\u0437\u044b\u0432\u0443")
B.cE=new A.d("alimony_debt","\u0415\u0441\u0442\u044c \u0437\u0430\u0434\u043e\u043b\u0436\u0435\u043d\u043d\u043e\u0441\u0442\u044c \u043f\u043e \u0430\u043b\u0438\u043c\u0435\u043d\u0442\u0430\u043c")
B.cX=new A.d("valid_zero_income","\u0415\u0441\u0442\u044c \u0443\u0432\u0430\u0436\u0438\u0442\u0435\u043b\u044c\u043d\u0430\u044f \u043f\u0440\u0438\u0447\u0438\u043d\u0430 \u043d\u0443\u043b\u0435\u0432\u043e\u0433\u043e \u0434\u043e\u0445\u043e\u0434\u0430")
B.cR=new A.d("i_adopt","\u0423\u0441\u044b\u043d\u043e\u0432\u043b\u044f\u044e / \u0443\u0434\u043e\u0447\u0435\u0440\u044f\u044e \u0440\u0435\u0431\u0451\u043d\u043a\u0430")
B.cm=new A.d("i_donor","\u041f\u043e\u0447\u0451\u0442\u043d\u044b\u0439 \u0434\u043e\u043d\u043e\u0440 \u0420\u043e\u0441\u0441\u0438\u0438")
B.af=t([B.cC,B.d0,B.ce,B.cF,B.cq,B.ck,B.cx,B.cu,B.ch,B.cM,B.cD,B.cG,B.cO,B.cv,B.cl,B.cP,B.cH,B.cj,B.d_,B.cL,B.cE,B.cX,B.cR,B.cm],u.b)
B.ag=t(["age","gender","employment","region","marital","children","youngestChildAge","income","familySize"],u.s)
B.cQ=new A.d("own_home","\u0421\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0435 \u0436\u0438\u043b\u044c\u0451")
B.cS=new A.d("rent_home","\u0421\u043d\u0438\u043c\u0430\u0435\u043c \u0436\u0438\u043b\u044c\u0451")
B.cW=new A.d("has_mortgage","\u0414\u0435\u0439\u0441\u0442\u0432\u0443\u044e\u0449\u0430\u044f \u0438\u043f\u043e\u0442\u0435\u043a\u0430")
B.cp=new A.d("bought_recent","\u041a\u0443\u043f\u0438\u043b\u0438 \u0436\u0438\u043b\u044c\u0451 \u0432 2021\u20132026")
B.cZ=new A.d("high_utility","\u0416\u041a\u0425 > 22% \u0434\u043e\u0445\u043e\u0434\u0430")
B.cA=new A.d("need_housing","\u041d\u0443\u0436\u0434\u0430\u0435\u043c\u0441\u044f \u0432 \u0443\u043b\u0443\u0447\u0448\u0435\u043d\u0438\u0438 \u0436\u0438\u043b\u044c\u044f")
B.cy=new A.d("young_family","\u041f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0430 \xab\u041c\u043e\u043b\u043e\u0434\u0430\u044f \u0441\u0435\u043c\u044c\u044f\xbb")
B.cf=new A.d("communal","\u041a\u043e\u043c\u043c\u0443\u043d\u0430\u043b\u044c\u043d\u0430\u044f \u043a\u0432\u0430\u0440\u0442\u0438\u0440\u0430")
B.cJ=new A.d("excess_property","\u0418\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u043e \u043c\u043e\u0436\u0435\u0442 \u043f\u0440\u0435\u0432\u044b\u0448\u0430\u0442\u044c \u043b\u0438\u043c\u0438\u0442 \u0434\u043b\u044f \u0435\u0434\u0438\u043d\u043e\u0433\u043e \u043f\u043e\u0441\u043e\u0431\u0438\u044f")
B.cV=new A.d("high_deposits","\u0415\u0441\u0442\u044c \u043a\u0440\u0443\u043f\u043d\u044b\u0435 \u0432\u043a\u043b\u0430\u0434\u044b / \u043f\u0440\u043e\u0446\u0435\u043d\u0442\u044b \u0441\u0432\u0435\u0440\u0445 \u043b\u0438\u043c\u0438\u0442\u0430")
B.ah=t([B.cQ,B.cS,B.cW,B.cp,B.cZ,B.cA,B.cy,B.cf,B.cJ,B.cV],u.b)
B.dn=t(["\u043e\u0431\u044b\u0447\u043d\u044b\u0439","\u0444\u0435\u0434\u0435\u0440\u0430\u043b\u044c\u043d\u044b\u0439"],u.s)
B.bf=new A.a("regular","\u041e\u0431\u044b\u0447\u043d\u044b\u0439 \u0440\u0435\u0433\u0438\u043e\u043d",!1,!1,!1,18939,20644,18371,null,null,null,null,3)
B.eH=t(["\u0441\u0435\u0432\u0435\u0440","\u0441\u0435\u0432\u0435\u0440\u043d\u044b\u0439"],u.s)
B.bj=new A.a("north","\u041a\u0440\u0430\u0439\u043d\u0438\u0439 \u0421\u0435\u0432\u0435\u0440",!1,!0,!1,18939,20644,18371,null,null,null,null,3)
B.dB=t(["\u0434\u0444\u043e","\u0434\u0430\u043b\u044c\u043d\u0438\u0439 \u0432\u043e\u0441\u0442\u043e\u043a"],u.s)
B.aI=new A.a("dfo","\u0414\u0430\u043b\u044c\u043d\u0438\u0439 \u0412\u043e\u0441\u0442\u043e\u043a (legacy)",!1,!1,!0,18939,20644,18371,null,null,null,null,3)
B.eq=t(["\u043c\u043e\u0441\u043a\u0432\u0430","\u043c\u043e\u0441","msk"],u.s)
B.bM=new A.a("moscow","\u041c\u043e\u0441\u043a\u0432\u0430",!0,!1,!1,25342,28940,21903,5000,2500,25e3,null,3)
B.dg=t(["\u0441\u0430\u043d\u043a\u0442-\u043f\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433","\u043f\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433","\u0441\u043f\u0431","spb"],u.s)
B.b9=new A.a("spb","\u0421\u0430\u043d\u043a\u0442-\u041f\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433",!1,!1,!1,20644,22502,20025,null,null,null,224578,3)
B.dt=t(["\u0441\u0435\u0432\u0430\u0441\u0442\u043e\u043f\u043e\u043b\u044c"],u.s)
B.aL=new A.a("sevastopol","\u0433. \u0421\u0435\u0432\u0430\u0441\u0442\u043e\u043f\u043e\u043b\u044c",!1,!1,!1,19318,21057,18738,null,null,null,null,3)
B.dr=t(["\u0430\u0434\u044b\u0433\u0435\u044f","\u043c\u0430\u0439\u043a\u043e\u043f"],u.s)
B.b2=new A.a("adygea","\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0410\u0434\u044b\u0433\u0435\u044f",!1,!1,!1,16288,17754,15799,null,null,null,5e4,3)
B.dm=t(["\u0430\u043b\u0442\u0430\u0439 \u0440\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430","\u0433\u043e\u0440\u043d\u044b\u0439 \u0430\u043b\u0442\u0430\u0439","\u0433\u043e\u0440\u043d\u043e-\u0430\u043b\u0442\u0430\u0439\u0441\u043a"],u.s)
B.bz=new A.a("altai_republic","\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0410\u043b\u0442\u0430\u0439",!1,!1,!1,17992,19611,17452,null,null,null,83850,3)
B.dI=t(["\u0431\u0430\u0448\u043a\u043e\u0440\u0442\u043e\u0441\u0442\u0430\u043d","\u0431\u0430\u0448\u043a\u0438\u0440\u0438\u044f","\u0443\u0444\u0430"],u.s)
B.b1=new A.a("bashkortostan","\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0411\u0430\u0448\u043a\u043e\u0440\u0442\u043e\u0441\u0442\u0430\u043d",!1,!1,!1,16856,18373,16350,null,null,null,622800,3)
B.eB=t(["\u0431\u0443\u0440\u044f\u0442\u0438\u044f","\u0443\u043b\u0430\u043d-\u0443\u0434\u044d"],u.s)
B.bt=new A.a("buryatia","\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0411\u0443\u0440\u044f\u0442\u0438\u044f",!1,!1,!0,20644,22502,20025,null,null,null,249907,3)
B.eh=t(["\u0434\u0430\u0433\u0435\u0441\u0442\u0430\u043d","\u043c\u0430\u0445\u0430\u0447\u043a\u0430\u043b\u0430"],u.s)
B.bq=new A.a("dagestan","\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0414\u0430\u0433\u0435\u0441\u0442\u0430\u043d",!1,!1,!1,17234,18785,16717,null,null,null,null,3)
B.e7=t(["\u0438\u043d\u0433\u0443\u0448\u0435\u0442\u0438\u044f","\u043c\u0430\u0433\u0430\u0441"],u.s)
B.bb=new A.a("ingushetia","\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0418\u043d\u0433\u0443\u0448\u0435\u0442\u0438\u044f",!1,!1,!1,17803,19405,17269,null,null,null,null,3)
B.es=t(["\u043a\u0430\u0431\u0430\u0440\u0434\u0438\u043d\u043e-\u0431\u0430\u043b\u043a\u0430\u0440\u0438\u044f","\u043a\u0431\u0440","\u043d\u0430\u043b\u044c\u0447\u0438\u043a"],u.s)
B.bv=new A.a("kabardino_balkaria","\u041a\u0430\u0431\u0430\u0440\u0434\u0438\u043d\u043e-\u0411\u0430\u043b\u043a\u0430\u0440\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",!1,!1,!1,20265,22089,19657,null,null,null,null,3)
B.ew=t(["\u043a\u0430\u043b\u043c\u044b\u043a\u0438\u044f","\u044d\u043b\u0438\u0441\u0442\u0430"],u.s)
B.b6=new A.a("kalmykia","\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041a\u0430\u043b\u043c\u044b\u043a\u0438\u044f",!1,!1,!1,18560,20230,18003,null,null,null,null,3)
B.dw=t(["\u043a\u0430\u0440\u0430\u0447\u0430\u0435\u0432\u043e-\u0447\u0435\u0440\u043a\u0435\u0441\u0438\u044f","\u043a\u0447\u0440","\u0447\u0435\u0440\u043a\u0435\u0441\u0441\u043a"],u.s)
B.aJ=new A.a("karachay_cherkessia","\u041a\u0430\u0440\u0430\u0447\u0430\u0435\u0432\u043e-\u0427\u0435\u0440\u043a\u0435\u0441\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",!1,!1,!1,17803,19405,17269,null,null,null,null,3)
B.dN=t(["\u043a\u0430\u0440\u0435\u043b\u0438\u044f","\u043f\u0435\u0442\u0440\u043e\u0437\u0430\u0432\u043e\u0434\u0441\u043a"],u.s)
B.bg=new A.a("karelia","\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041a\u0430\u0440\u0435\u043b\u0438\u044f",!1,!0,!1,21022,22914,20391,null,null,null,null,3)
B.dA=t(["\u043a\u043e\u043c\u0438","\u0441\u044b\u043a\u0442\u044b\u0432\u043a\u0430\u0440"],u.s)
B.bI=new A.a("komi","\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041a\u043e\u043c\u0438",!1,!0,!1,21780,23740,21127,null,null,null,3e5,3)
B.dK=t(["\u043a\u0440\u044b\u043c","\u0441\u0438\u043c\u0444\u0435\u0440\u043e\u043f\u043e\u043b\u044c"],u.s)
B.aP=new A.a("crimea","\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041a\u0440\u044b\u043c",!1,!1,!1,18371,20024,17820,null,null,null,null,3)
B.eE=t(["\u043c\u0430\u0440\u0438\u0439 \u044d\u043b","\u0439\u043e\u0448\u043a\u0430\u0440-\u043e\u043b\u0430"],u.s)
B.bT=new A.a("mari_el","\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041c\u0430\u0440\u0438\u0439 \u042d\u043b",!1,!1,!1,16666,18166,16166,null,null,null,null,3)
B.e3=t(["\u043c\u043e\u0440\u0434\u043e\u0432\u0438\u044f","\u0441\u0430\u0440\u0430\u043d\u0441\u043a"],u.s)
B.aS=new A.a("mordovia","\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041c\u043e\u0440\u0434\u043e\u0432\u0438\u044f",!1,!1,!1,16098,17547,15615,null,null,null,null,3)
B.dG=t(["\u0441\u0430\u0445\u0430","\u044f\u043a\u0443\u0442\u0438\u044f","\u044f\u043a\u0443\u0442\u0441\u043a"],u.s)
B.bB=new A.a("sakha","\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0421\u0430\u0445\u0430 (\u042f\u043a\u0443\u0442\u0438\u044f)",!1,!0,!0,28598,31172,27740,null,null,null,3e5,3)
B.em=t(["\u0441\u0435\u0432\u0435\u0440\u043d\u0430\u044f \u043e\u0441\u0435\u0442\u0438\u044f","\u0430\u043b\u0430\u043d\u0438\u044f","\u0432\u043b\u0430\u0434\u0438\u043a\u0430\u0432\u043a\u0430\u0437"],u.s)
B.aX=new A.a("north_ossetia","\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0421\u0435\u0432\u0435\u0440\u043d\u0430\u044f \u041e\u0441\u0435\u0442\u0438\u044f \u2014 \u0410\u043b\u0430\u043d\u0438\u044f",!1,!1,!1,17045,18579,16534,null,null,null,5e4,3)
B.dF=t(["\u0442\u0430\u0442\u0430\u0440\u0441\u0442\u0430\u043d","\u0442\u0430\u0442\u0430\u0440\u0438\u044f","\u043a\u0430\u0437\u0430\u043d\u044c","\u0440\u0442"],u.s)
B.aZ=new A.a("tatarstan","\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0422\u0430\u0442\u0430\u0440\u0441\u0442\u0430\u043d",!1,!1,!1,16098,17547,15615,null,null,null,1e5,3)
B.el=t(["\u0442\u044b\u0432\u0430","\u0442\u0443\u0432\u0430","\u043a\u044b\u0437\u044b\u043b"],u.s)
B.bE=new A.a("tyva","\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0422\u044b\u0432\u0430",!1,!1,!1,19128,20850,18554,null,null,null,null,3)
B.eC=t(["\u0443\u0434\u043c\u0443\u0440\u0442\u0438\u044f","\u0438\u0436\u0435\u0432\u0441\u043a"],u.s)
B.bX=new A.a("udmurtia","\u0423\u0434\u043c\u0443\u0440\u0442\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",!1,!1,!1,16856,18373,16350,null,null,null,null,3)
B.dQ=t(["\u0445\u0430\u043a\u0430\u0441\u0438\u044f","\u0430\u0431\u0430\u043a\u0430\u043d"],u.s)
B.bK=new A.a("khakassia","\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0425\u0430\u043a\u0430\u0441\u0438\u044f",!1,!1,!1,19318,21057,18738,null,null,null,null,3)
B.e6=t(["\u0447\u0435\u0447\u043d\u044f","\u0433\u0440\u043e\u0437\u043d\u044b\u0439"],u.s)
B.aV=new A.a("chechnya","\u0427\u0435\u0447\u0435\u043d\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",!1,!1,!1,18181,19817,17636,null,null,null,null,3)
B.dp=t(["\u0447\u0443\u0432\u0430\u0448\u0438\u044f","\u0447\u0435\u0431\u043e\u043a\u0441\u0430\u0440\u044b"],u.s)
B.aA=new A.a("chuvashia","\u0427\u0443\u0432\u0430\u0448\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",!1,!1,!1,16477,17960,15983,null,null,null,null,3)
B.e0=t(["\u0430\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439","\u0431\u0430\u0440\u043d\u0430\u0443\u043b"],u.s)
B.aC=new A.a("altai_krai","\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",!1,!1,!1,16856,18373,16350,null,null,null,83850,3)
B.ey=t(["\u0437\u0430\u0431\u0430\u0439\u043a\u0430\u043b\u044c\u0441\u043a\u0438\u0439","\u0437\u0430\u0431\u0430\u0439\u043a\u0430\u043b\u044c\u0435","\u0447\u0438\u0442\u0430"],u.s)
B.bW=new A.a("zabaykalsky","\u0417\u0430\u0431\u0430\u0439\u043a\u0430\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",!1,!1,!0,22159,24153,21494,null,null,null,null,3)
B.dD=t(["\u043a\u0430\u043c\u0447\u0430\u0442\u043a\u0430","\u043f\u0435\u0442\u0440\u043e\u043f\u0430\u0432\u043b\u043e\u0432\u0441\u043a-\u043a\u0430\u043c\u0447\u0430\u0442\u0441\u043a\u0438\u0439"],u.s)
B.bs=new A.a("kamchatka","\u041a\u0430\u043c\u0447\u0430\u0442\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",!1,!0,!0,33333,36333,32333,null,null,null,5e5,3)
B.ec=t(["\u043a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440","\u043a\u0443\u0431\u0430\u043d\u044c","\u0441\u043e\u0447\u0438","\u043d\u043e\u0432\u043e\u0440\u043e\u0441\u0441\u0438\u0439\u0441\u043a"],u.s)
B.bR=new A.a("krasnodar","\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",!1,!1,!1,18181,19817,17636,null,null,null,167135,3)
B.dl=t(["\u043a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a","\u043a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439"],u.s)
B.b5=new A.a("krasnoyarsk","\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",!1,!0,!1,21022,22914,20391,null,null,null,null,3)
B.er=t(["\u043f\u0435\u0440\u043c\u044c","\u043f\u0435\u0440\u043c\u0441\u043a\u0438\u0439"],u.s)
B.bC=new A.a("perm","\u041f\u0435\u0440\u043c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",!1,!1,!1,17424,18992,16901,null,null,null,null,3)
B.eu=t(["\u043f\u0440\u0438\u043c\u043e\u0440\u0441\u043a\u0438\u0439","\u043f\u0440\u0438\u043c\u043e\u0440\u044c\u0435","\u0432\u043b\u0430\u0434\u0438\u0432\u043e\u0441\u0442\u043e\u043a"],u.s)
B.bS=new A.a("primorsky","\u041f\u0440\u0438\u043c\u043e\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",!1,!1,!0,22537,24565,21861,null,null,null,null,3)
B.dx=t(["\u0441\u0442\u0430\u0432\u0440\u043e\u043f\u043e\u043b\u044c","\u0441\u0442\u0430\u0432\u0440\u043e\u043f\u043e\u043b\u044c\u0441\u043a\u0438\u0439"],u.s)
B.aH=new A.a("stavropol","\u0421\u0442\u0430\u0432\u0440\u043e\u043f\u043e\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",!1,!1,!1,17045,18579,16534,null,null,null,null,3)
B.et=t(["\u0445\u0430\u0431\u0430\u0440\u043e\u0432\u0441\u043a","\u0445\u0430\u0431\u0430\u0440\u043e\u0432\u0441\u043a\u0438\u0439"],u.s)
B.bu=new A.a("khabarovsk","\u0425\u0430\u0431\u0430\u0440\u043e\u0432\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",!1,!1,!0,23106,25186,23758,null,null,null,32e4,3)
B.ev=t(["\u0430\u043c\u0443\u0440\u0441\u043a\u0430\u044f","\u0431\u043b\u0430\u0433\u043e\u0432\u0435\u0449\u0435\u043d\u0441\u043a"],u.s)
B.aN=new A.a("amur","\u0410\u043c\u0443\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!0,21780,23740,21215,null,null,null,249907,3)
B.ek=t(["\u0430\u0440\u0445\u0430\u043d\u0433\u0435\u043b\u044c\u0441\u043a\u0430\u044f","\u0430\u0440\u0445\u0430\u043d\u0433\u0435\u043b\u044c\u0441\u043a"],u.s)
B.b7=new A.a("arkhangelsk","\u0410\u0440\u0445\u0430\u043d\u0433\u0435\u043b\u044c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!0,!1,21969,23946,21310,null,null,null,124609,3)
B.ds=t(["\u0430\u0441\u0442\u0440\u0430\u0445\u0430\u043d\u0441\u043a\u0430\u044f","\u0430\u0441\u0442\u0440\u0430\u0445\u0430\u043d\u044c"],u.s)
B.bO=new A.a("astrakhan","\u0410\u0441\u0442\u0440\u0430\u0445\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,18371,20024,17820,null,null,null,null,3)
B.eo=t(["\u0431\u0435\u043b\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f","\u0431\u0435\u043b\u0433\u043e\u0440\u043e\u0434"],u.s)
B.aB=new A.a("belgorod","\u0411\u0435\u043b\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,15909,17341,15432,null,null,null,90570,3)
B.eg=t(["\u0431\u0440\u044f\u043d\u0441\u043a\u0430\u044f","\u0431\u0440\u044f\u043d\u0441\u043a"],u.s)
B.bN=new A.a("bryansk","\u0411\u0440\u044f\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,17424,18992,16901,null,null,null,2e5,3)
B.de=t(["\u0432\u043b\u0430\u0434\u0438\u043c\u0438\u0440\u0441\u043a\u0430\u044f","\u0432\u043b\u0430\u0434\u0438\u043c\u0438\u0440"],u.s)
B.bc=new A.a("vladimir","\u0412\u043b\u0430\u0434\u0438\u043c\u0438\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,18371,20024,17820,null,null,null,75758,3)
B.en=t(["\u0432\u043e\u043b\u0433\u043e\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f","\u0432\u043e\u043b\u0433\u043e\u0433\u0440\u0430\u0434"],u.s)
B.bZ=new A.a("volgograd","\u0412\u043e\u043b\u0433\u043e\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,16288,17754,15799,null,null,null,null,3)
B.ea=t(["\u0432\u043e\u043b\u043e\u0433\u043e\u0434\u0441\u043a\u0430\u044f","\u0432\u043e\u043b\u043e\u0433\u0434\u0430"],u.s)
B.bn=new A.a("vologda","\u0412\u043e\u043b\u043e\u0433\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,19128,20850,18555,null,null,null,null,3)
B.dX=t(["\u0432\u043e\u0440\u043e\u043d\u0435\u0436\u0441\u043a\u0430\u044f","\u0432\u043e\u0440\u043e\u043d\u0435\u0436"],u.s)
B.aW=new A.a("voronezh","\u0412\u043e\u0440\u043e\u043d\u0435\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,16666,18166,16166,null,null,null,172724,3)
B.ef=t(["\u0437\u0430\u043f\u043e\u0440\u043e\u0436\u0441\u043a\u0430\u044f","\u0437\u0430\u043f\u043e\u0440\u043e\u0436\u044c\u0435"],u.s)
B.by=new A.a("zaporizhzhia","\u0417\u0430\u043f\u043e\u0440\u043e\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,18371,20024,17820,null,null,null,null,3)
B.dS=t(["\u0438\u0432\u0430\u043d\u043e\u0432\u0441\u043a\u0430\u044f","\u0438\u0432\u0430\u043d\u043e\u0432\u043e"],u.s)
B.aD=new A.a("ivanovo","\u0418\u0432\u0430\u043d\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,17803,19405,17269,null,null,null,null,3)
B.dC=t(["\u0438\u0440\u043a\u0443\u0442\u0441\u043a\u0430\u044f","\u0438\u0440\u043a\u0443\u0442\u0441\u043a"],u.s)
B.bp=new A.a("irkutsk","\u0418\u0440\u043a\u0443\u0442\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!0,!1,20075,21882,19473,null,null,null,153455,2)
B.ex=t(["\u043a\u0430\u043b\u0438\u043d\u0438\u043d\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f","\u043a\u0430\u043b\u0438\u043d\u0438\u043d\u0433\u0440\u0430\u0434"],u.s)
B.bd=new A.a("kaliningrad","\u041a\u0430\u043b\u0438\u043d\u0438\u043d\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,19507,21263,18922,null,null,null,null,3)
B.eG=t(["\u043a\u0430\u043b\u0443\u0436\u0441\u043a\u0430\u044f","\u043a\u0430\u043b\u0443\u0433\u0430"],u.s)
B.bi=new A.a("kaluga","\u041a\u0430\u043b\u0443\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,18181,19817,17636,null,null,null,null,3)
B.dO=t(["\u043a\u0435\u043c\u0435\u0440\u043e\u0432\u0441\u043a\u0430\u044f","\u043a\u0443\u0437\u0431\u0430\u0441\u0441","\u043a\u0435\u043c\u0435\u0440\u043e\u0432\u043e"],u.s)
B.bl=new A.a("kemerovo","\u041a\u0435\u043c\u0435\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c \u2014 \u041a\u0443\u0437\u0431\u0430\u0441\u0441",!1,!1,!1,17234,18785,16717,null,null,null,13e4,3)
B.df=t(["\u043a\u0438\u0440\u043e\u0432\u0441\u043a\u0430\u044f","\u043a\u0438\u0440\u043e\u0432"],u.s)
B.bQ=new A.a("kirov","\u041a\u0438\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,16856,18373,16350,null,null,null,null,3)
B.dy=t(["\u043a\u043e\u0441\u0442\u0440\u043e\u043c\u0441\u043a\u0430\u044f","\u043a\u043e\u0441\u0442\u0440\u043e\u043c\u0430"],u.s)
B.az=new A.a("kostroma","\u041a\u043e\u0441\u0442\u0440\u043e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,17424,18992,16901,null,null,null,null,3)
B.dM=t(["\u043a\u0443\u0440\u0433\u0430\u043d\u0441\u043a\u0430\u044f","\u043a\u0443\u0440\u0433\u0430\u043d"],u.s)
B.bx=new A.a("kurgan","\u041a\u0443\u0440\u0433\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,17803,19405,17269,null,null,null,null,3)
B.e8=t(["\u043a\u0443\u0440\u0441\u043a\u0430\u044f","\u043a\u0443\u0440\u0441\u043a"],u.s)
B.bw=new A.a("kursk","\u041a\u0443\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,16477,17960,15983,null,null,null,null,3)
B.dj=t(["\u043b\u0435\u043d\u0438\u043d\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f","\u043b\u0435\u043d\u043e\u0431\u043b\u0430\u0441\u0442\u044c"],u.s)
B.ay=new A.a("leningrad","\u041b\u0435\u043d\u0438\u043d\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,20265,22089,19657,null,null,null,125e3,2)
B.dZ=t(["\u043b\u0438\u043f\u0435\u0446\u043a\u0430\u044f","\u043b\u0438\u043f\u0435\u0446\u043a"],u.s)
B.aE=new A.a("lipetsk","\u041b\u0438\u043f\u0435\u0446\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,15719,17134,15247,null,null,null,null,3)
B.dW=t(["\u043b\u043d\u0440","\u043b\u0443\u0433\u0430\u043d\u0441\u043a\u0430\u044f","\u043b\u0443\u0433\u0430\u043d\u0441\u043a"],u.s)
B.aG=new A.a("lugansk","\u041b\u0443\u0433\u0430\u043d\u0441\u043a\u0430\u044f \u041d\u0430\u0440\u043e\u0434\u043d\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",!1,!1,!1,17803,19405,17269,null,null,null,null,3)
B.dH=t(["\u043c\u0430\u0433\u0430\u0434\u0430\u043d\u0441\u043a\u0430\u044f","\u043c\u0430\u0433\u0430\u0434\u0430\u043d"],u.s)
B.be=new A.a("magadan","\u041c\u0430\u0433\u0430\u0434\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!0,!0,32954,35920,32062,null,null,null,null,3)
B.du=t(["\u043c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c","\u043f\u043e\u0434\u043c\u043e\u0441\u043a\u043e\u0432\u044c\u0435","\u043c\u043e"],u.s)
B.bL=new A.a("mo","\u041c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!0,!1,!1,20286,22112,19677,null,null,null,3e5,3)
B.e1=t(["\u043c\u0443\u0440\u043c\u0430\u043d\u0441\u043a\u0430\u044f","\u043c\u0443\u0440\u043c\u0430\u043d\u0441\u043a"],u.s)
B.aQ=new A.a("murmansk","\u041c\u0443\u0440\u043c\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!0,!1,26406,28783,25614,null,null,null,null,3)
B.dk=t(["\u043d\u0438\u0436\u0435\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f","\u043d\u0438\u0436\u043d\u0438\u0439 \u043d\u043e\u0432\u0433\u043e\u0440\u043e\u0434","\u043d\u043d"],u.s)
B.bA=new A.a("nizhny_novgorod","\u041d\u0438\u0436\u0435\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,17803,19405,17269,null,null,null,7e5,3)
B.dE=t(["\u043d\u043e\u0432\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f","\u0432\u0435\u043b\u0438\u043a\u0438\u0439 \u043d\u043e\u0432\u0433\u043e\u0440\u043e\u0434"],u.s)
B.bH=new A.a("novgorod","\u041d\u043e\u0432\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,18560,20230,18003,null,null,null,null,3)
B.dz=t(["\u043d\u043e\u0432\u043e\u0441\u0438\u0431\u0438\u0440\u0441\u043a\u0430\u044f","\u043d\u043e\u0432\u043e\u0441\u0438\u0431\u0438\u0440\u0441\u043a"],u.s)
B.bk=new A.a("novosibirsk","\u041d\u043e\u0432\u043e\u0441\u0438\u0431\u0438\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,18560,20230,18003,null,null,null,null,3)
B.e5=t(["\u043e\u043c\u0441\u043a\u0430\u044f","\u043e\u043c\u0441\u043a"],u.s)
B.bD=new A.a("omsk","\u041e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,16477,17960,15983,null,null,null,null,3)
B.ez=t(["\u043e\u0440\u0435\u043d\u0431\u0443\u0440\u0433\u0441\u043a\u0430\u044f","\u043e\u0440\u0435\u043d\u0431\u0443\u0440\u0433"],u.s)
B.bF=new A.a("orenburg","\u041e\u0440\u0435\u043d\u0431\u0443\u0440\u0433\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,16477,17960,15983,null,null,null,149713,3)
B.eF=t(["\u043e\u0440\u043b\u043e\u0432\u0441\u043a\u0430\u044f","\u043e\u0440\u0451\u043b","\u043e\u0440\u0435\u043b"],u.s)
B.bJ=new A.a("orel","\u041e\u0440\u043b\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,17613,19198,17085,null,null,null,null,3)
B.dh=t(["\u043f\u0435\u043d\u0437\u0435\u043d\u0441\u043a\u0430\u044f","\u043f\u0435\u043d\u0437\u0430"],u.s)
B.aU=new A.a("penza","\u041f\u0435\u043d\u0437\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,15909,17341,15432,null,null,null,null,3)
B.di=t(["\u043f\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f","\u043f\u0441\u043a\u043e\u0432"],u.s)
B.bG=new A.a("pskov","\u041f\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,18750,20438,18188,null,null,null,null,3)
B.dJ=t(["\u0440\u043e\u0441\u0442\u043e\u0432\u0441\u043a\u0430\u044f","\u0440\u043e\u0441\u0442\u043e\u0432"],u.s)
B.bU=new A.a("rostov","\u0420\u043e\u0441\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,17803,19405,17269,null,null,null,151567,3)
B.e2=t(["\u0440\u044f\u0437\u0430\u043d\u0441\u043a\u0430\u044f","\u0440\u044f\u0437\u0430\u043d\u044c"],u.s)
B.br=new A.a("ryazan","\u0420\u044f\u0437\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,16856,18373,16350,null,null,null,null,3)
B.ee=t(["\u0441\u0430\u043c\u0430\u0440\u0441\u043a\u0430\u044f","\u0441\u0430\u043c\u0430\u0440\u0430","\u0442\u043e\u043b\u044c\u044f\u0442\u0442\u0438"],u.s)
B.bY=new A.a("samara","\u0421\u0430\u043c\u0430\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,17803,19405,17269,null,null,null,null,3)
B.eA=t(["\u0441\u0430\u0440\u0430\u0442\u043e\u0432\u0441\u043a\u0430\u044f","\u0441\u0430\u0440\u0430\u0442\u043e\u0432"],u.s)
B.aK=new A.a("saratov","\u0421\u0430\u0440\u0430\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,15909,17341,15432,null,null,null,null,3)
B.dY=t(["\u0441\u0430\u0445\u0430\u043b\u0438\u043d\u0441\u043a\u0430\u044f","\u0441\u0430\u0445\u0430\u043b\u0438\u043d","\u044e\u0436\u043d\u043e-\u0441\u0430\u0445\u0430\u043b\u0438\u043d\u0441\u043a"],u.s)
B.aY=new A.a("sakhalin","\u0421\u0430\u0445\u0430\u043b\u0438\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!0,!0,25757,28075,24984,null,null,null,5e5,3)
B.dv=t(["\u0441\u0432\u0435\u0440\u0434\u043b\u043e\u0432\u0441\u043a\u0430\u044f","\u0435\u043a\u0430\u0442\u0435\u0440\u0438\u043d\u0431\u0443\u0440\u0433","\u0441\u0432\u0435\u0440\u0434\u043b\u043e\u0432\u0441\u043a"],u.s)
B.aR=new A.a("sverdlovsk","\u0421\u0432\u0435\u0440\u0434\u043b\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,18750,20438,18188,null,null,null,175474,3)
B.e9=t(["\u0441\u043c\u043e\u043b\u0435\u043d\u0441\u043a\u0430\u044f","\u0441\u043c\u043e\u043b\u0435\u043d\u0441\u043a"],u.s)
B.bo=new A.a("smolensk","\u0421\u043c\u043e\u043b\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,18750,20438,18188,null,null,null,null,3)
B.dP=t(["\u0442\u0430\u043c\u0431\u043e\u0432\u0441\u043a\u0430\u044f","\u0442\u0430\u043c\u0431\u043e\u0432"],u.s)
B.bP=new A.a("tambov","\u0422\u0430\u043c\u0431\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,15719,17134,15247,null,null,null,3e5,3)
B.e_=t(["\u0442\u0432\u0435\u0440\u0441\u043a\u0430\u044f","\u0442\u0432\u0435\u0440\u044c"],u.s)
B.bm=new A.a("tver","\u0422\u0432\u0435\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,18560,20230,18003,null,null,null,null,3)
B.dR=t(["\u0442\u043e\u043c\u0441\u043a\u0430\u044f","\u0442\u043e\u043c\u0441\u043a"],u.s)
B.ba=new A.a("tomsk","\u0422\u043e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!0,!1,18560,20230,18003,null,null,null,null,3)
B.dU=t(["\u0442\u0443\u043b\u044c\u0441\u043a\u0430\u044f","\u0442\u0443\u043b\u0430"],u.s)
B.b3=new A.a("tula","\u0422\u0443\u043b\u044c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,18939,20644,18371,null,null,null,null,3)
B.eD=t(["\u0442\u044e\u043c\u0435\u043d\u0441\u043a\u0430\u044f","\u0442\u044e\u043c\u0435\u043d\u044c","\u0442\u044e\u043c"],u.s)
B.b0=new A.a("tyumen","\u0422\u044e\u043c\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!0,!1,18939,20644,18371,null,null,null,1e5,3)
B.e4=t(["\u0443\u043b\u044c\u044f\u043d\u043e\u0432\u0441\u043a\u0430\u044f","\u0443\u043b\u044c\u044f\u043d\u043e\u0432\u0441\u043a"],u.s)
B.ax=new A.a("ulyanovsk","\u0423\u043b\u044c\u044f\u043d\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,16856,18373,16350,null,null,null,5e4,2)
B.eb=t(["\u0445\u0435\u0440\u0441\u043e\u043d\u0441\u043a\u0430\u044f","\u0445\u0435\u0440\u0441\u043e\u043d"],u.s)
B.bh=new A.a("kherson","\u0425\u0435\u0440\u0441\u043e\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,18371,20024,17820,null,null,null,null,3)
B.ej=t(["\u0447\u0435\u043b\u044f\u0431\u0438\u043d\u0441\u043a\u0430\u044f","\u0447\u0435\u043b\u044f\u0431\u0438\u043d\u0441\u043a"],u.s)
B.bV=new A.a("chelyabinsk","\u0427\u0435\u043b\u044f\u0431\u0438\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,17424,18992,16901,null,null,null,133364,3)
B.dq=t(["\u044f\u0440\u043e\u0441\u043b\u0430\u0432\u0441\u043a\u0430\u044f","\u044f\u0440\u043e\u0441\u043b\u0430\u0432\u043b\u044c"],u.s)
B.aM=new A.a("yaroslavl","\u042f\u0440\u043e\u0441\u043b\u0430\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,18939,20644,18371,null,null,null,null,3)
B.ep=t(["\u0435\u0430\u043e","\u0435\u0432\u0440\u0435\u0439\u0441\u043a\u0430\u044f \u0430\u043e","\u0431\u0438\u0440\u043e\u0431\u0438\u0434\u0436\u0430\u043d"],u.s)
B.aO=new A.a("jewish_ao","\u0415\u0432\u0440\u0435\u0439\u0441\u043a\u0430\u044f \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!0,23674,25805,22964,null,null,null,null,3)
B.dT=t(["\u043d\u0430\u043e","\u043d\u0435\u043d\u0435\u0446\u043a\u0438\u0439","\u043d\u0430\u0440\u044c\u044f\u043d-\u043c\u0430\u0440"],u.s)
B.aF=new A.a("nenets_ao","\u041d\u0435\u043d\u0435\u0446\u043a\u0438\u0439 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433",!1,!0,!1,31060,33855,32026,null,null,null,4e5,3)
B.ed=t(["\u0445\u043c\u0430\u043e","\u044e\u0433\u0440\u0430","\u0445\u0430\u043d\u0442\u044b","\u0445\u0430\u043d\u0442\u044b-\u043c\u0430\u043d\u0441\u0438\u0439\u0441\u043a\u0438\u0439","\u0441\u0443\u0440\u0433\u0443\u0442"],u.s)
B.b_=new A.a("khanty_mansi_ao","\u0425\u0430\u043d\u0442\u044b-\u041c\u0430\u043d\u0441\u0438\u0439\u0441\u043a\u0438\u0439 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433 \u2014 \u042e\u0433\u0440\u0430",!1,!0,!1,22102,24091,22137,null,null,null,177e3,2)
B.ei=t(["\u0447\u0443\u043a\u043e\u0442\u043a\u0430","\u0447\u0443\u043a\u043e\u0442\u0441\u043a\u0438\u0439","\u0430\u043d\u0430\u0434\u044b\u0440\u044c"],u.s)
B.b8=new A.a("chukotka","\u0427\u0443\u043a\u043e\u0442\u0441\u043a\u0438\u0439 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433",!1,!0,!0,49431,53880,47948,null,null,null,null,3)
B.dV=t(["\u044f\u043d\u0430\u043e","\u044f\u043c\u0430\u043b","\u044f\u043c\u0430\u043b\u043e-\u043d\u0435\u043d\u0435\u0446\u043a\u0438\u0439","\u0441\u0430\u043b\u0435\u0445\u0430\u0440\u0434","\u044f\u043c\u0430"],u.s)
B.aT=new A.a("yamalo_nenets_ao","\u042f\u043c\u0430\u043b\u043e-\u041d\u0435\u043d\u0435\u0446\u043a\u0438\u0439 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433",!1,!0,!1,25946,28281,25168,null,null,null,1e6,3)
B.dL=t(["\u0434\u043d\u0440","\u0434\u043e\u043d\u0435\u0446\u043a\u0430\u044f","\u0434\u043e\u043d\u0435\u0446\u043a"],u.s)
B.b4=new A.a("donetsk","\u0414\u043e\u043d\u0435\u0446\u043a\u0430\u044f \u041d\u0430\u0440\u043e\u0434\u043d\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",!1,!1,!1,17803,19405,17269,null,null,null,null,3)
B.k=t([B.bf,B.bj,B.aI,B.bM,B.b9,B.aL,B.b2,B.bz,B.b1,B.bt,B.bq,B.bb,B.bv,B.b6,B.aJ,B.bg,B.bI,B.aP,B.bT,B.aS,B.bB,B.aX,B.aZ,B.bE,B.bX,B.bK,B.aV,B.aA,B.aC,B.bW,B.bs,B.bR,B.b5,B.bC,B.bS,B.aH,B.bu,B.aN,B.b7,B.bO,B.aB,B.bN,B.bc,B.bZ,B.bn,B.aW,B.by,B.aD,B.bp,B.bd,B.bi,B.bl,B.bQ,B.az,B.bx,B.bw,B.ay,B.aE,B.aG,B.be,B.bL,B.aQ,B.bA,B.bH,B.bk,B.bD,B.bF,B.bJ,B.aU,B.bG,B.bU,B.br,B.bY,B.aK,B.aY,B.aR,B.bo,B.bP,B.bm,B.ba,B.b3,B.b0,B.ax,B.bh,B.bV,B.aM,B.aO,B.aF,B.b_,B.b8,B.aT,B.b4],A.aJ("t<a>"))
B.ci=new A.d("pregnant","\u0421\u0435\u0439\u0447\u0430\u0441 \u0431\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u0430")
B.cr=new A.d("newborn","\u0420\u0435\u0431\u0451\u043d\u043e\u043a \u0440\u043e\u0434\u0438\u043b\u0441\u044f \u0432 2025\u20132026")
B.cB=new A.d("disabled_child","\u0420\u0435\u0431\u0451\u043d\u043e\u043a-\u0438\u043d\u0432\u0430\u043b\u0438\u0434")
B.cg=new A.d("solo_parent","\u041e\u0434\u0438\u043d\u043e\u043a\u0438\u0439 \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u044c")
B.d1=new A.d("used_matcap","\u041c\u0430\u0442\u043a\u0430\u043f\u0438\u0442\u0430\u043b \u0443\u0436\u0435 \u043f\u043e\u043b\u0443\u0447\u0435\u043d")
B.co=new A.d("child_study","\u0420\u0435\u0431\u0451\u043d\u043e\u043a \u0443\u0447\u0438\u0442\u0441\u044f \u043e\u0447\u043d\u043e (\u0434\u043e 24)")
B.ai=t([B.ci,B.cr,B.cB,B.cg,B.d1,B.co],u.b)
B.cb=new A.r("employed","\u0420\u0430\u0431\u043e\u0442\u0430\u044e \u043e\u0444\u0438\u0446\u0438\u0430\u043b\u044c\u043d\u043e")
B.c8=new A.r("self","\u0421\u0430\u043c\u043e\u0437\u0430\u043d\u044f\u0442\u044b\u0439")
B.c7=new A.r("ip","\u0418\u041f")
B.c4=new A.r("unemployed_reg","\u0411\u0435\u0437\u0440\u0430\u0431\u043e\u0442\u043d\u044b\u0439 (\u043d\u0430 \u0431\u0438\u0440\u0436\u0435)")
B.c6=new A.r("unemployed","\u0411\u0435\u0437\u0440\u0430\u0431\u043e\u0442\u043d\u044b\u0439")
B.c5=new A.r("pensioner","\u041f\u0435\u043d\u0441\u0438\u043e\u043d\u0435\u0440")
B.c1=new A.r("student","\u0421\u0442\u0443\u0434\u0435\u043d\u0442 \u043e\u0447\u043d\u043e\u0439 \u0444\u043e\u0440\u043c\u044b")
B.cc=new A.r("matleave","\u0412 \u0434\u0435\u043a\u0440\u0435\u0442\u0435 / \u043e\u0442\u043f\u0443\u0441\u043a\u0435 \u043f\u043e \u0443\u0445\u043e\u0434\u0443")
B.c_=new A.r("caregiver","\u0423\u0445\u043e\u0434 \u0437\u0430 \u0440\u043e\u0434\u0441\u0442\u0432\u0435\u043d\u043d\u0438\u043a\u043e\u043c")
B.aj=t([B.cb,B.c8,B.c7,B.c4,B.c6,B.c5,B.c1,B.cc,B.c_],u.I)
B.cK=new A.d("has_dis1","\u0418\u043d\u0432\u0430\u043b\u0438\u0434 I \u0433\u0440\u0443\u043f\u043f\u044b \u0432 \u0441\u0435\u043c\u044c\u0435")
B.cw=new A.d("has_dis2","\u0418\u043d\u0432\u0430\u043b\u0438\u0434 II \u0433\u0440\u0443\u043f\u043f\u044b \u0432 \u0441\u0435\u043c\u044c\u0435")
B.ct=new A.d("has_dis3","\u0418\u043d\u0432\u0430\u043b\u0438\u0434 III \u0433\u0440\u0443\u043f\u043f\u044b \u0432 \u0441\u0435\u043c\u044c\u0435")
B.cU=new A.d("elderly80","\u041f\u043e\u0436\u0438\u043b\u043e\u0439 80+ \u043b\u0435\u0442")
B.cz=new A.d("vet_fam","\u0412\u0435\u0442\u0435\u0440\u0430\u043d \u0411\u0414 \u0432 \u0441\u0435\u043c\u044c\u0435")
B.ak=t([B.cK,B.cw,B.ct,B.cU,B.cz],u.b)
B.cY=new A.d("paid_med","\u041f\u043b\u0430\u0442\u0438\u043b(\u0430) \u0437\u0430 \u043b\u0435\u0447\u0435\u043d\u0438\u0435")
B.cI=new A.d("paid_edu","\u041f\u043b\u0430\u0442\u0438\u043b(\u0430) \u0437\u0430 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435")
B.cN=new A.d("paid_fit","\u041f\u043b\u0430\u0442\u0438\u043b(\u0430) \u0437\u0430 \u0444\u0438\u0442\u043d\u0435\u0441")
B.cs=new A.d("has_iis","\u0415\u0441\u0442\u044c \u0418\u0418\u0421")
B.cn=new A.d("charity","\u041f\u043e\u0436\u0435\u0440\u0442\u0432\u043e\u0432\u0430\u043d\u0438\u044f")
B.cT=new A.d("life_ins","\u0421\u0442\u0440\u0430\u0445\u043e\u0432\u0430\u043d\u0438\u0435 \u0436\u0438\u0437\u043d\u0438 (3+ \u043b\u0435\u0442)")
B.al=t([B.cY,B.cI,B.cN,B.cs,B.cn,B.cT],u.b)
B.y=new A.e("pregnancy_support",A.f0())
B.U=new A.e("newborn",A.f_())
B.P=new A.e("mat_capital",A.eY())
B.D=new A.e("care_leave",A.eV())
B.a1=new A.e("unified_children",A.f1())
B.A=new A.e("family_annual_payment",A.eX())
B.a3=new A.e("multi_child_mortgage",A.eZ())
B.I=new A.e("disabled_child",A.eW())
B.a2=new A.e("young_family",A.f2())
B.C=new A.e("adoption",A.eU())
B.w=new A.e("child_tax_deduction",A.h2())
B.q=new A.e("property_deduction",A.h8())
B.t=new A.e("medical_deduction",A.h7())
B.L=new A.e("education_deduction",A.h3())
B.v=new A.e("fitness_deduction",A.h4())
B.N=new A.e("iis_deduction",A.h5())
B.S=new A.e("life_insurance_deduction",A.h6())
B.E=new A.e("charity_deduction",A.h1())
B.Z=new A.e("student",A.fX())
B.a_=new A.e("unemployment",A.fY())
B.O=new A.e("layoff",A.fR())
B.K=new A.e("housing_subsidy",A.fQ())
B.W=new A.e("pension",A.fT())
B.H=new A.e("disability",A.fN())
B.T=new A.e("property_tax_relief",A.fU())
B.z=new A.e("communal_housing",A.fL())
B.B=new A.e("social_contract",A.fW())
B.Q=new A.e("military",A.fS())
B.x=new A.e("conscript_family",A.fM())
B.a0=new A.e("veteran_family",A.fZ())
B.M=new A.e("honors",A.fP())
B.Y=new A.e("sick_leave",A.fV())
B.J=new A.e("donor",A.fO())
B.V=new A.e("north",A.fE())
B.F=new A.e("chernobyl",A.fB())
B.X=new A.e("rehabilitated",A.fH())
B.R=new A.e("moscow",A.fD())
B.G=new A.e("dfo",A.fC())
B.r=new A.e("regional_mat_cap",A.fG())
B.u=new A.e("regional_extra_info",A.fF())
B.am=t([B.y,B.U,B.P,B.D,B.a1,B.A,B.a3,B.I,B.a2,B.C,B.w,B.q,B.t,B.L,B.v,B.N,B.S,B.E,B.Z,B.a_,B.O,B.K,B.W,B.H,B.T,B.z,B.B,B.Q,B.x,B.a0,B.M,B.Y,B.J,B.V,B.F,B.X,B.R,B.G,B.r,B.u],A.aJ("t<e>"))
B.as={moscow:0,spb:1,sevastopol:2,adygea:3,altai_republic:4,bashkortostan:5,buryatia:6,dagestan:7,ingushetia:8,kabardino_balkaria:9,kalmykia:10,karachay_cherkessia:11,karelia:12,komi:13,crimea:14,mari_el:15,mordovia:16,sakha:17,north_ossetia:18,tatarstan:19,tyva:20,udmurtia:21,khakassia:22,chechnya:23,chuvashia:24,altai_krai:25,zabaykalsky:26,kamchatka:27,krasnodar:28,krasnoyarsk:29,perm:30,primorsky:31,stavropol:32,khabarovsk:33,amur:34,arkhangelsk:35,astrakhan:36,belgorod:37,bryansk:38,vladimir:39,volgograd:40,vologda:41,voronezh:42,zaporizhzhia:43,ivanovo:44,irkutsk:45,kaliningrad:46,kaluga:47,kemerovo:48,kirov:49,kostroma:50,kurgan:51,kursk:52,leningrad:53,lipetsk:54,lugansk:55,magadan:56,mo:57,murmansk:58,nizhny_novgorod:59,novgorod:60,novosibirsk:61,omsk:62,orenburg:63,orel:64,penza:65,pskov:66,rostov:67,ryazan:68,samara:69,saratov:70,sakhalin:71,sverdlovsk:72,smolensk:73,tambov:74,tver:75,tomsk:76,tula:77,tyumen:78,ulyanovsk:79,kherson:80,chelyabinsk:81,yaroslavl:82,jewish_ao:83,nenets_ao:84,khanty_mansi_ao:85,chukotka:86,yamalo_nenets_ao:87,donetsk:88}
B.an=new A.L(B.as,[18971,17754,16613,14008,15473,14496,17754,14821,15311,17428,15962,15311,18079,18731,15799,14333,13844,24594,14659,13844,16450,14496,16613,15636,14170,14496,19057,28666,15636,18079,14985,19382,14659,19871,18731,18893,15799,13682,14985,15799,14008,16450,14333,15799,15311,17265,16776,15636,14821,14496,14985,15311,14170,17428,13518,15311,28340,17446,22709,15311,15962,15962,14170,14170,15147,13682,16125,15311,14496,15311,13682,22151,16125,16125,13518,15962,15962,16288,16288,14496,15799,14985,16288,20360,26712,19067,42511,22314,15311],u.J)
B.aq={chukotka:0,kamchatka:1,magadan:2,yamalo_nenets_ao:3,nenets_ao:4,khanty_mansi_ao:5,murmansk:6,sakha:7,sakhalin:8,komi:9,arkhangelsk:10,krasnoyarsk:11,irkutsk:12,tomsk:13,karelia:14,tyumen:15}
B.ao=new A.L(B.aq,[1,0.6,0.6,0.5,0.5,0.5,0.4,0.4,0.4,0.2,0.2,0.2,0.2,0.2,0.15,0.15],u.J)
B.ar={regular:0,north:1,dfo:2}
B.ap=new A.L(B.ar,["regular","north","dfo"],A.aJ("L<w,w>"))
B.d2=A.G("hf")
B.d3=A.G("hg")
B.d4=A.G("dr")
B.d5=A.G("ds")
B.d6=A.G("du")
B.d7=A.G("dv")
B.d8=A.G("dw")
B.d9=A.G("p")
B.da=A.G("dP")
B.db=A.G("dQ")
B.dc=A.G("dR")
B.dd=A.G("dS")})();(function staticFields(){$.bM=null
$.C=A.z([],u.f)
$.cE=null
$.cw=null
$.cv=null
$.da=null
$.d7=null
$.dd=null
$.bW=null
$.c0=null
$.cp=null
$.bN=A.z([],A.aJ("t<l<p>?>"))
$.cj=A.dE(u.N)})();(function lazyInitializers(){var t=hunkHelpers.lazyFinal
t($,"hh","bj",()=>A.f6("_$dart_dartClosure"))
t($,"hn","dh",()=>A.z([new J.aQ()],A.aJ("t<ax>")))
t($,"hm","c6",()=>A.db(B.d9))
t($,"hl","dg",()=>new A.bm())})();(function nativeSupport(){!function(){var t=function(a){var n={}
n[a]=1
return Object.keys(hunkHelpers.convertToFastObject(n))[0]}
v.getIsolateTag=function(a){return t("___dart_"+a+v.isolateTag)}
var s="___dart_isolate_tags_"
var r=Object[s]||(Object[s]=Object.create(null))
var q="_ZxYxX"
for(var p=0;;p++){var o=t(q+"_"+p+"_")
if(!(o in r)){r[o]=1
v.isolateTag=o
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:A.a9,SharedArrayBuffer:A.a9,ArrayBufferView:A.av,DataView:A.aU,Float32Array:A.aV,Float64Array:A.aW,Int16Array:A.aX,Int32Array:A.aY,Int8Array:A.aZ,Uint16Array:A.b_,Uint32Array:A.b0,Uint8ClampedArray:A.aw,CanvasPixelArray:A.aw,Uint8Array:A.b1})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,SharedArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.aa.$nativeSuperclassTag="ArrayBufferView"
A.aA.$nativeSuperclassTag="ArrayBufferView"
A.aB.$nativeSuperclassTag="ArrayBufferView"
A.at.$nativeSuperclassTag="ArrayBufferView"
A.aC.$nativeSuperclassTag="ArrayBufferView"
A.aD.$nativeSuperclassTag="ArrayBufferView"
A.au.$nativeSuperclassTag="ArrayBufferView"})()
Function.prototype.$0=function(){return this()}
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$2=function(a,b){return this(a,b)}
Function.prototype.$3=function(a,b,c){return this(a,b,c)}
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r){t[r].removeEventListener("load",onLoad,false)}a(b.target)}for(var s=0;s<t.length;++s){t[s].addEventListener("load",onLoad,false)}})(function(a){v.currentScript=a
var t=A.fk
if(typeof dartMainRunner==="function"){dartMainRunner(t,[])}else{t([])}})})()
//# sourceMappingURL=main.dart.js.map
