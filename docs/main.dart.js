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
if(a[b]!==s){A.i7(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.y(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.cU(b)
return new s(c,this)}:function(){if(s===null)s=A.cU(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.cU(a).prototype
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
cY(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cV(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.cW==null){A.ha()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.i(A.dj("Return interceptor for "+A.m(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.cd
if(o==null)o=$.cd=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.hg(a)
if(p!=null)return p
if(typeof a=="function")return B.av
s=Object.getPrototypeOf(a)
if(s==null)return B.q
if(s===Object.prototype)return B.q
if(typeof q=="function"){o=$.cd
if(o==null)o=$.cd=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.l,enumerable:false,writable:true,configurable:true})
return B.l}return B.l},
eg(a,b){if(a>4294967295)throw A.i(A.c3(a,0,4294967295,"length",null))
return J.ei(new Array(a),b)},
eh(a,b){return A.y(new Array(a),b.k("o<0>"))},
ei(a,b){var s=A.y(a,b.k("o<0>"))
s.$flags=1
return s},
d8(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
ej(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.d8(r))break;++b}return b},
ek(a,b){var s,r,q
for(s=a.length;b>0;b=r){r=b-1
if(!(r<s))return A.v(a,r)
q=a.charCodeAt(r)
if(q!==32&&q!==13&&!J.d8(q))break}return b},
a8(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.ax.prototype
return J.be.prototype}if(typeof a=="string")return J.af.prototype
if(a==null)return J.ay.prototype
if(typeof a=="boolean")return J.bd.prototype
if(Array.isArray(a))return J.o.prototype
if(typeof a!="object"){if(typeof a=="function")return J.T.prototype
if(typeof a=="symbol")return J.aC.prototype
if(typeof a=="bigint")return J.aA.prototype
return a}if(a instanceof A.r)return a
return J.cV(a)},
dN(a){if(typeof a=="string")return J.af.prototype
if(a==null)return a
if(Array.isArray(a))return J.o.prototype
if(typeof a!="object"){if(typeof a=="function")return J.T.prototype
if(typeof a=="symbol")return J.aC.prototype
if(typeof a=="bigint")return J.aA.prototype
return a}if(a instanceof A.r)return a
return J.cV(a)},
h2(a){if(a==null)return a
if(Array.isArray(a))return J.o.prototype
if(typeof a!="object"){if(typeof a=="function")return J.T.prototype
if(typeof a=="symbol")return J.aC.prototype
if(typeof a=="bigint")return J.aA.prototype
return a}if(a instanceof A.r)return a
return J.cV(a)},
bI(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.a8(a).C(a,b)},
P(a){return J.a8(a).gq(a)},
bJ(a){return J.h2(a).gu(a)},
d_(a){return J.dN(a).gv(a)},
dX(a){return J.a8(a).gt(a)},
ap(a){return J.a8(a).j(a)},
bb:function bb(){},
bd:function bd(){},
ay:function ay(){},
aB:function aB(){},
U:function U(){},
bq:function bq(){},
aN:function aN(){},
T:function T(){},
aA:function aA(){},
aC:function aC(){},
o:function o(a){this.$ti=a},
bc:function bc(){},
bZ:function bZ(a){this.$ti=a},
ar:function ar(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
az:function az(){},
ax:function ax(){},
be:function be(){},
af:function af(){}},A={cE:function cE(){},
el(a){return new A.ag("Field '"+a+"' has not been initialized.")},
W(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
cI(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
cX(a){var s,r
for(s=$.F.length,r=0;r<s;++r)if(a===$.F[r])return!0
return!1},
d7(){return new A.bw("No element")},
ag:function ag(a){this.a=a},
c5:function c5(){},
aE:function aE(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
H:function H(a,b,c){this.a=a
this.b=b
this.$ti=c},
a0:function a0(a,b,c){this.a=a
this.b=b
this.$ti=c},
B:function B(){},
e7(){throw A.i(A.c8("Cannot modify constant Set"))},
dS(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
ip(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.D.b(a)},
m(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.ap(a)
return s},
br(a){var s,r=$.de
if(r==null)r=$.de=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
c2(a,b){var s,r=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(r==null)return null
if(3>=r.length)return A.v(r,3)
s=r[3]
if(s!=null)return parseInt(a,10)
if(r[2]!=null)return parseInt(a,16)
return null},
bt(a){var s,r
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return null
s=parseFloat(a)
if(isNaN(s)){r=B.f.U(a)
if(r==="NaN"||r==="+NaN"||r==="-NaN")return s
return null}return s},
bs(a){var s,r,q,p
if(a instanceof A.r)return A.E(A.b2(a),null)
s=J.a8(a)
if(s===B.au||s===B.aw||t.o.b(a)){r=B.m(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.E(A.b2(a),null)},
df(a){var s,r,q
if(a==null||typeof a=="number"||A.cS(a))return J.ap(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.S)return a.j(0)
if(a instanceof A.a4)return a.a2(!0)
s=$.dV()
for(r=0;r<1;++r){q=s[r].aL(a)
if(q!=null)return q}return"Instance of '"+A.bs(a)+"'"},
ez(a,b,c,d,e,f,g,h,i){var s,r,q,p=b-1
if(a<100){a+=400
p-=4800}s=B.i.ae(h,1000)
r=new Date(a,p,c,d,e,f,g+B.i.au(h-s,1000)).valueOf()
q=!0
if(!isNaN(r))if(!(r<-864e13))if(!(r>864e13))q=r===864e13&&s!==0
if(q)return null
return r},
aj(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
ey(a){var s=A.aj(a).getFullYear()+0
return s},
ew(a){var s=A.aj(a).getMonth()+1
return s},
es(a){var s=A.aj(a).getDate()+0
return s},
et(a){var s=A.aj(a).getHours()+0
return s},
ev(a){var s=A.aj(a).getMinutes()+0
return s},
ex(a){var s=A.aj(a).getSeconds()+0
return s},
eu(a){var s=A.aj(a).getMilliseconds()+0
return s},
v(a,b){if(a==null)J.d_(a)
throw A.i(A.dM(a,b))},
dM(a,b){var s,r="index"
if(!A.dF(b))return new A.ab(!0,b,r,null)
s=J.d_(a)
if(b<0||b>=s)return A.eb(b,s,a,r)
return A.eA(b,r)},
fx(a){return new A.ab(!0,a,null,null)},
i(a){return A.z(a,new Error())},
z(a,b){var s
if(a==null)a=new A.c6()
b.dartException=a
s=A.i8
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
i8(){return J.ap(this.dartException)},
b3(a,b){throw A.z(a,b==null?new Error():b)},
cZ(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.b3(A.f2(a,b,c),s)},
f2(a,b,c){var s,r,q,p,o,n,m,l,k
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
return new A.bA("'"+s+"': Cannot "+o+" "+l+k+n)},
cB(a){throw A.i(A.bT(a))},
dP(a){if(a==null)return J.P(a)
if(typeof a=="object")return A.br(a)
return J.P(a)},
fc(a,b,c,d,e,f){t.Z.a(a)
switch(A.b0(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.i(new A.cc("Unsupported number of arguments for wrapped closure"))},
fE(a,b){var s=a.$identity
if(!!s)return s
s=A.fF(a,b)
a.$identity=s
return s},
fF(a,b){var s
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.fc)},
e6(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.bx().constructor.prototype):Object.create(new A.ad(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.d4(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.e2(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.d4(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
e2(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.i("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.e0)}throw A.i("Error in functionType of tearoff")},
e3(a,b,c,d){var s=A.d3
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
d4(a,b,c,d){if(c)return A.e5(a,b,d)
return A.e3(b.length,d,a,b)},
e4(a,b,c,d){var s=A.d3,r=A.e1
switch(b?-1:a){case 0:throw A.i(new A.c4("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
e5(a,b,c){var s,r
if($.d1==null)$.d1=A.d0("interceptor")
if($.d2==null)$.d2=A.d0("receiver")
s=b.length
r=A.e4(s,c,a,b)
return r},
cU(a){return A.e6(a)},
e0(a,b){return A.b_(v.typeUniverse,A.b2(a.a),b)},
d3(a){return a.a},
e1(a){return a.b},
d0(a){var s,r,q,p=new A.ad("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.i(A.aq("Field name "+a+" not found."))},
h3(a){return v.getIsolateTag(a)},
hg(a){var s,r,q,p,o,n=A.b1($.dO.$1(a)),m=$.cr[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.cw[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.cO($.dK.$2(a,n))
if(q!=null){m=$.cr[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.cw[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.cA(s)
$.cr[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.cw[n]=s
return s}if(p==="-"){o=A.cA(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.dQ(a,s)
if(p==="*")throw A.i(A.dj(n))
if(v.leafTags[n]===true){o=A.cA(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.dQ(a,s)},
dQ(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.cY(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
cA(a){return J.cY(a,!1,null,!!a.$iD)},
hi(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.cA(s)
else return J.cY(s,c,null,null)},
ha(){if(!0===$.cW)return
$.cW=!0
A.hb()},
hb(){var s,r,q,p,o,n,m,l
$.cr=Object.create(null)
$.cw=Object.create(null)
A.h9()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.dR.$1(o)
if(n!=null){m=A.hi(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
h9(){var s,r,q,p,o,n,m=B.a7()
m=A.an(B.a8,A.an(B.a9,A.an(B.n,A.an(B.n,A.an(B.aa,A.an(B.ab,A.an(B.ac(B.m),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.dO=new A.ct(p)
$.dK=new A.cu(o)
$.dR=new A.cv(n)},
an(a,b){return a(b)||b},
fG(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
d9(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=function(g,h){try{return new RegExp(g,h)}catch(n){return n}}(a,s+r+q+p+f)
if(o instanceof RegExp)return o
throw A.i(new A.bX("Illegal RegExp pattern ("+String(o)+")",a))},
hW(a,b,c){var s=a.indexOf(b,c)
return s>=0},
fN(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
hY(a,b,c){var s,r=b.ga1()
r.lastIndex=0
s=a.replace(r,A.fN(c))
return s},
dJ(a){return a},
hX(a,b,c,d){var s,r,q,p,o,n,m
for(s=b.az(0,a),s=new A.aP(s.a,s.b,s.c),r=t.F,q=0,p="";s.l();){o=s.d
if(o==null)o=r.a(o)
n=o.b
m=n.index
p=p+A.m(A.dJ(B.f.I(a,q,m)))+A.m(c.$1(o))
q=m+n[0].length}s=p+A.m(A.dJ(B.f.ag(a,q)))
return s.charCodeAt(0)==0?s:s},
I:function I(a,b){this.a=a
this.b=b},
b8:function b8(){},
O:function O(a,b,c){this.a=a
this.b=b
this.$ti=c},
aQ:function aQ(a,b){this.a=a
this.$ti=b},
a1:function a1(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
au:function au(){},
av:function av(a,b,c){this.a=a
this.b=b
this.$ti=c},
aM:function aM(){},
S:function S(){},
b6:function b6(){},
b7:function b7(){},
bz:function bz(){},
bx:function bx(){},
ad:function ad(a,b){this.a=a
this.b=b},
c4:function c4(a){this.a=a},
aD:function aD(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
c_:function c_(a,b){this.a=a
this.b=b
this.c=null},
ct:function ct(a){this.a=a},
cu:function cu(a){this.a=a},
cv:function cv(a){this.a=a},
a4:function a4(){},
ak:function ak(){},
bf:function bf(a,b){var _=this
_.a=a
_.b=b
_.e=_.c=null},
bE:function bE(a){this.b=a},
bB:function bB(a,b,c){this.a=a
this.b=b
this.c=c},
aP:function aP(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
i7(a){throw A.z(new A.ag("Field '"+a+"' has been assigned during initialization."),new Error())},
j(){throw A.z(A.el(""),new Error())},
dk(){var s=new A.c9()
return s.b=s},
c9:function c9(){this.b=null},
ah:function ah(){},
aJ:function aJ(){},
bh:function bh(){},
ai:function ai(){},
aH:function aH(){},
aI:function aI(){},
bi:function bi(){},
bj:function bj(){},
bk:function bk(){},
bl:function bl(){},
bm:function bm(){},
bn:function bn(){},
bo:function bo(){},
aK:function aK(){},
bp:function bp(){},
aS:function aS(){},
aT:function aT(){},
aU:function aU(){},
aV:function aV(){},
cH(a,b){var s=b.c
return s==null?b.c=A.aY(a,"d6",[b.x]):s},
dh(a){var s=a.w
if(s===6||s===7)return A.dh(a.x)
return s===11||s===12},
eD(a){return a.as},
Y(a){return A.cg(v.typeUniverse,a,!1)},
a6(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.a6(a1,s,a3,a4)
if(r===s)return a2
return A.dv(a1,r,!0)
case 7:s=a2.x
r=A.a6(a1,s,a3,a4)
if(r===s)return a2
return A.du(a1,r,!0)
case 8:q=a2.y
p=A.am(a1,q,a3,a4)
if(p===q)return a2
return A.aY(a1,a2.x,p)
case 9:o=a2.x
n=A.a6(a1,o,a3,a4)
m=a2.y
l=A.am(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.cK(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.am(a1,j,a3,a4)
if(i===j)return a2
return A.dw(a1,k,i)
case 11:h=a2.x
g=A.a6(a1,h,a3,a4)
f=a2.y
e=A.fs(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.dt(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.am(a1,d,a3,a4)
o=a2.x
n=A.a6(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.cL(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.i(A.b5("Attempted to substitute unexpected RTI kind "+a0))}},
am(a,b,c,d){var s,r,q,p,o=b.length,n=A.ch(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.a6(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
ft(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.ch(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.a6(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
fs(a,b,c,d){var s,r=b.a,q=A.am(a,r,c,d),p=b.b,o=A.am(a,p,c,d),n=b.c,m=A.ft(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.bC()
s.a=q
s.b=o
s.c=m
return s},
y(a,b){a[v.arrayRti]=b
return a},
dL(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.h5(s)
return a.$S()}return null},
hc(a,b){var s
if(A.dh(b))if(a instanceof A.S){s=A.dL(a)
if(s!=null)return s}return A.b2(a)},
b2(a){if(a instanceof A.r)return A.C(a)
if(Array.isArray(a))return A.R(a)
return A.cR(J.a8(a))},
R(a){var s=a[v.arrayRti],r=t.q
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
C(a){var s=a.$ti
return s!=null?s:A.cR(a)},
cR(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.fb(a,s)},
fb(a,b){var s=a instanceof A.S?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.eW(v.typeUniverse,s.name)
b.$ccache=r
return r},
h5(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.cg(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
h4(a){return A.a7(A.C(a))},
cT(a){var s
if(a instanceof A.a4)return A.fO(a.$r,a.Z())
s=a instanceof A.S?A.dL(a):null
if(s!=null)return s
if(t.R.b(a))return J.dX(a).a
if(Array.isArray(a))return A.R(a)
return A.b2(a)},
a7(a){var s=a.r
return s==null?a.r=new A.cf(a):s},
fO(a,b){var s,r,q=b,p=q.length
if(p===0)return t.d
if(0>=p)return A.v(q,0)
s=A.b_(v.typeUniverse,A.cT(q[0]),"@<0>")
for(r=1;r<p;++r){if(!(r<q.length))return A.v(q,r)
s=A.dx(v.typeUniverse,s,A.cT(q[r]))}return A.b_(v.typeUniverse,s,a)},
N(a){return A.a7(A.cg(v.typeUniverse,a,!1))},
fa(a){var s=this
s.b=A.fr(s)
return s.b(a)},
fr(a){var s,r,q,p,o
if(a===t.K)return A.fi
if(A.a9(a))return A.fm
s=a.w
if(s===6)return A.f8
if(s===1)return A.dH
if(s===7)return A.fd
r=A.fq(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.a9)){a.f="$i"+q
if(q==="n")return A.fg
if(a===t.m)return A.ff
return A.fl}}else if(s===10){p=A.fG(a.x,a.y)
o=p==null?A.dH:p
return o==null?A.cN(o):o}return A.f6},
fq(a){if(a.w===8){if(a===t.S)return A.dF
if(a===t.i||a===t.H)return A.fh
if(a===t.N)return A.fk
if(a===t.y)return A.cS}return null},
f9(a){var s=this,r=A.f5
if(A.a9(s))r=A.f1
else if(s===t.K)r=A.cN
else if(A.ao(s)){r=A.f7
if(s===t.B)r=A.f0
else if(s===t.v)r=A.cO
else if(s===t.u)r=A.eZ
else if(s===t.n)r=A.dB
else if(s===t.x)r=A.f_
else if(s===t.z)r=A.M}else if(s===t.S)r=A.b0
else if(s===t.N)r=A.b1
else if(s===t.y)r=A.eY
else if(s===t.H)r=A.dA
else if(s===t.i)r=A.cM
else if(s===t.m)r=A.b
s.a=r
return s.a(a)},
f6(a){var s=this
if(a==null)return A.ao(s)
return A.hd(v.typeUniverse,A.hc(a,s),s)},
f8(a){if(a==null)return!0
return this.x.b(a)},
fl(a){var s,r=this
if(a==null)return A.ao(r)
s=r.f
if(a instanceof A.r)return!!a[s]
return!!J.a8(a)[s]},
fg(a){var s,r=this
if(a==null)return A.ao(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.r)return!!a[s]
return!!J.a8(a)[s]},
ff(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.r)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
dG(a){if(typeof a=="object"){if(a instanceof A.r)return t.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
f5(a){var s=this
if(a==null){if(A.ao(s))return a}else if(s.b(a))return a
throw A.z(A.dC(a,s),new Error())},
f7(a){var s=this
if(a==null||s.b(a))return a
throw A.z(A.dC(a,s),new Error())},
dC(a,b){return new A.bF("TypeError: "+A.dl(a,A.E(b,null)))},
dl(a,b){return A.bW(a)+": type '"+A.E(A.cT(a),null)+"' is not a subtype of type '"+b+"'"},
J(a,b){return new A.bF("TypeError: "+A.dl(a,b))},
fd(a){var s=this
return s.x.b(a)||A.cH(v.typeUniverse,s).b(a)},
fi(a){return a!=null},
cN(a){if(a!=null)return a
throw A.z(A.J(a,"Object"),new Error())},
fm(a){return!0},
f1(a){return a},
dH(a){return!1},
cS(a){return!0===a||!1===a},
eY(a){if(!0===a)return!0
if(!1===a)return!1
throw A.z(A.J(a,"bool"),new Error())},
eZ(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.z(A.J(a,"bool?"),new Error())},
cM(a){if(typeof a=="number")return a
throw A.z(A.J(a,"double"),new Error())},
f_(a){if(typeof a=="number")return a
if(a==null)return a
throw A.z(A.J(a,"double?"),new Error())},
dF(a){return typeof a=="number"&&Math.floor(a)===a},
b0(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.z(A.J(a,"int"),new Error())},
f0(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.z(A.J(a,"int?"),new Error())},
fh(a){return typeof a=="number"},
dA(a){if(typeof a=="number")return a
throw A.z(A.J(a,"num"),new Error())},
dB(a){if(typeof a=="number")return a
if(a==null)return a
throw A.z(A.J(a,"num?"),new Error())},
fk(a){return typeof a=="string"},
b1(a){if(typeof a=="string")return a
throw A.z(A.J(a,"String"),new Error())},
cO(a){if(typeof a=="string")return a
if(a==null)return a
throw A.z(A.J(a,"String?"),new Error())},
b(a){if(A.dG(a))return a
throw A.z(A.J(a,"JSObject"),new Error())},
M(a){if(a==null)return a
if(A.dG(a))return a
throw A.z(A.J(a,"JSObject?"),new Error())},
dI(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.E(a[q],b)
return s},
fo(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.dI(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.E(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
dD(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=", ",a2=null
if(a5!=null){s=a5.length
if(a4==null)a4=A.y([],t.s)
else a2=a4.length
r=a4.length
for(q=s;q>0;--q)B.c.n(a4,"T"+(r+q))
for(p=t.X,o="<",n="",q=0;q<s;++q,n=a1){m=a4.length
l=m-1-q
if(!(l>=0))return A.v(a4,l)
o=o+n+a4[l]
k=a5[q]
j=k.w
if(!(j===2||j===3||j===4||j===5||k===p))o+=" extends "+A.E(k,a4)}o+=">"}else o=""
p=a3.x
i=a3.y
h=i.a
g=h.length
f=i.b
e=f.length
d=i.c
c=d.length
b=A.E(p,a4)
for(a="",a0="",q=0;q<g;++q,a0=a1)a+=a0+A.E(h[q],a4)
if(e>0){a+=a0+"["
for(a0="",q=0;q<e;++q,a0=a1)a+=a0+A.E(f[q],a4)
a+="]"}if(c>0){a+=a0+"{"
for(a0="",q=0;q<c;q+=3,a0=a1){a+=a0
if(d[q+1])a+="required "
a+=A.E(d[q+2],a4)+" "+d[q]}a+="}"}if(a2!=null){a4.toString
a4.length=a2}return o+"("+a+") => "+b},
E(a,b){var s,r,q,p,o,n,m,l=a.w
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=a.x
r=A.E(s,b)
q=s.w
return(q===11||q===12?"("+r+")":r)+"?"}if(l===7)return"FutureOr<"+A.E(a.x,b)+">"
if(l===8){p=A.fu(a.x)
o=a.y
return o.length>0?p+("<"+A.dI(o,b)+">"):p}if(l===10)return A.fo(a,b)
if(l===11)return A.dD(a,b,null)
if(l===12)return A.dD(a.x,b,a.y)
if(l===13){n=a.x
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.v(b,n)
return b[n]}return"?"},
fu(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
eX(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
eW(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.cg(a,b,!1)
else if(typeof m=="number"){s=m
r=A.aZ(a,5,"#")
q=A.ch(s)
for(p=0;p<s;++p)q[p]=r
o=A.aY(a,b,q)
n[b]=o
return o}else return m},
eV(a,b){return A.dy(a.tR,b)},
eU(a,b){return A.dy(a.eT,b)},
cg(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.dq(A.dn(a,null,b,!1))
r.set(b,s)
return s},
b_(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.dq(A.dn(a,b,c,!0))
q.set(c,r)
return r},
dx(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.cK(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
X(a,b){b.a=A.f9
b.b=A.fa
return b},
aZ(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.L(null,null)
s.w=b
s.as=c
r=A.X(a,s)
a.eC.set(c,r)
return r},
dv(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.eS(a,b,r,c)
a.eC.set(r,s)
return s},
eS(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.a9(b))if(!(b===t.P||b===t.T))if(s!==6)r=s===7&&A.ao(b.x)
if(r)return b
else if(s===1)return t.P}q=new A.L(null,null)
q.w=6
q.x=b
q.as=c
return A.X(a,q)},
du(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.eQ(a,b,r,c)
a.eC.set(r,s)
return s},
eQ(a,b,c,d){var s,r
if(d){s=b.w
if(A.a9(b)||b===t.K)return b
else if(s===1)return A.aY(a,"d6",[b])
else if(b===t.P||b===t.T)return t.Y}r=new A.L(null,null)
r.w=7
r.x=b
r.as=c
return A.X(a,r)},
eT(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.L(null,null)
s.w=13
s.x=b
s.as=q
r=A.X(a,s)
a.eC.set(q,r)
return r},
aX(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
eP(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
aY(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.aX(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.L(null,null)
r.w=8
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.X(a,r)
a.eC.set(p,q)
return q},
cK(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.aX(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.L(null,null)
o.w=9
o.x=s
o.y=r
o.as=q
n=A.X(a,o)
a.eC.set(q,n)
return n},
dw(a,b,c){var s,r,q="+"+(b+"("+A.aX(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.L(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.X(a,s)
a.eC.set(q,r)
return r},
dt(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.aX(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.aX(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.eP(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.L(null,null)
p.w=11
p.x=b
p.y=c
p.as=r
o=A.X(a,p)
a.eC.set(r,o)
return o},
cL(a,b,c,d){var s,r=b.as+("<"+A.aX(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.eR(a,b,c,r,d)
a.eC.set(r,s)
return s},
eR(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.ch(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.a6(a,b,r,0)
m=A.am(a,c,r,0)
return A.cL(a,n,m,c!==m)}}l=new A.L(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.X(a,l)},
dn(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
dq(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.eK(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.dp(a,r,l,k,!1)
else if(q===46)r=A.dp(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.a3(a.u,a.e,k.pop()))
break
case 94:k.push(A.eT(a.u,k.pop()))
break
case 35:k.push(A.aZ(a.u,5,"#"))
break
case 64:k.push(A.aZ(a.u,2,"@"))
break
case 126:k.push(A.aZ(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.eM(a,k)
break
case 38:A.eL(a,k)
break
case 63:p=a.u
k.push(A.dv(p,A.a3(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.du(p,A.a3(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.eJ(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.dr(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.eO(a.u,a.e,o)
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
return A.a3(a.u,a.e,m)},
eK(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
dp(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.eX(s,o.x)[p]
if(n==null)A.b3('No "'+p+'" in "'+A.eD(o)+'"')
d.push(A.b_(s,o,n))}else d.push(p)
return m},
eM(a,b){var s,r=a.u,q=A.dm(a,b),p=b.pop()
if(typeof p=="string")b.push(A.aY(r,p,q))
else{s=A.a3(r,a.e,p)
switch(s.w){case 11:b.push(A.cL(r,s,q,a.n))
break
default:b.push(A.cK(r,s,q))
break}}},
eJ(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.dm(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.a3(p,a.e,o)
q=new A.bC()
q.a=s
q.b=n
q.c=m
b.push(A.dt(p,r,q))
return
case-4:b.push(A.dw(p,b.pop(),s))
return
default:throw A.i(A.b5("Unexpected state under `()`: "+A.m(o)))}},
eL(a,b){var s=b.pop()
if(0===s){b.push(A.aZ(a.u,1,"0&"))
return}if(1===s){b.push(A.aZ(a.u,4,"1&"))
return}throw A.i(A.b5("Unexpected extended operation "+A.m(s)))},
dm(a,b){var s=b.splice(a.p)
A.dr(a.u,a.e,s)
a.p=b.pop()
return s},
a3(a,b,c){if(typeof c=="string")return A.aY(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.eN(a,b,c)}else return c},
dr(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.a3(a,b,c[s])},
eO(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.a3(a,b,c[s])},
eN(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.i(A.b5("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.i(A.b5("Bad index "+c+" for "+b.j(0)))},
hd(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.x(a,b,null,c,null)
r.set(c,s)}return s},
x(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.a9(d))return!0
s=b.w
if(s===4)return!0
if(A.a9(b))return!1
if(b.w===1)return!0
r=s===13
if(r)if(A.x(a,c[b.x],c,d,e))return!0
q=d.w
p=t.P
if(b===p||b===t.T){if(q===7)return A.x(a,b,c,d.x,e)
return d===p||d===t.T||q===6}if(d===t.K){if(s===7)return A.x(a,b.x,c,d,e)
return s!==6}if(s===7){if(!A.x(a,b.x,c,d,e))return!1
return A.x(a,A.cH(a,b),c,d,e)}if(s===6)return A.x(a,p,c,d,e)&&A.x(a,b.x,c,d,e)
if(q===7){if(A.x(a,b,c,d.x,e))return!0
return A.x(a,b,c,A.cH(a,d),e)}if(q===6)return A.x(a,b,c,p,e)||A.x(a,b,c,d.x,e)
if(r)return!1
p=s!==11
if((!p||s===12)&&d===t.Z)return!0
o=s===10
if(o&&d===t.O)return!0
if(q===12){if(b===t.M)return!0
if(s!==12)return!1
n=b.y
m=d.y
l=n.length
if(l!==m.length)return!1
c=c==null?n:n.concat(c)
e=e==null?m:m.concat(e)
for(k=0;k<l;++k){j=n[k]
i=m[k]
if(!A.x(a,j,c,i,e)||!A.x(a,i,e,j,c))return!1}return A.dE(a,b.x,c,d.x,e)}if(q===11){if(b===t.M)return!0
if(p)return!1
return A.dE(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.fe(a,b,c,d,e)}if(o&&q===10)return A.fj(a,b,c,d,e)
return!1},
dE(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.x(a3,a4.x,a5,a6.x,a7))return!1
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
if(!A.x(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.x(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.x(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!A.x(a3,e[a+2],a7,g,a5))return!1
break}}while(b<d){if(f[b+1])return!1
b+=3}return!0},
fe(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
while(n!==m){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.b_(a,b,r[o])
return A.dz(a,p,null,c,d.y,e)}return A.dz(a,b.y,null,c,d.y,e)},
dz(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.x(a,b[s],d,e[s],f))return!1
return!0},
fj(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.x(a,r[s],c,q[s],e))return!1
return!0},
ao(a){var s=a.w,r=!0
if(!(a===t.P||a===t.T))if(!A.a9(a))if(s!==6)r=s===7&&A.ao(a.x)
return r},
a9(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
dy(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
ch(a){return a>0?new Array(a):v.typeUniverse.sEA},
L:function L(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
bC:function bC(){this.c=this.b=this.a=null},
cf:function cf(a){this.a=a},
cb:function cb(){},
bF:function bF(a){this.a=a},
ds(a,b,c){return 0},
a5:function a5(a,b){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.$ti=b},
al:function al(a,b){this.a=a
this.$ti=b},
em(a,b){return new A.aD(a.k("@<0>").W(b).k("aD<1,2>"))},
da(a){return new A.a2(a.k("a2<0>"))},
en(a){return new A.a2(a.k("a2<0>"))},
cJ(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
eo(a,b){var s,r=A.da(b)
for(s=J.bJ(a);s.l();)r.n(0,b.a(s.gm()))
return r},
ep(a,b){var s=A.da(b)
s.aw(0,a)
return s},
cF(a){var s,r
if(A.cX(a))return"{...}"
s=new A.by("")
try{r={}
B.c.n($.F,a)
s.a+="{"
r.a=!0
a.a6(0,new A.c0(r,s))
s.a+="}"}finally{if(0>=$.F.length)return A.v($.F,-1)
$.F.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
a2:function a2(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
bD:function bD(a){this.a=a
this.c=this.b=null},
aR:function aR(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
q:function q(){},
bg:function bg(){},
c0:function c0(a,b){this.a=a
this.b=b},
V:function V(){},
aW:function aW(){},
eq(a,b,c,d){var s,r=c?J.eh(a,d):J.eg(a,d)
if(a!==0)for(s=0;s<r.length;++s)r[s]=b
return r},
er(a,b,c){var s,r,q=A.y([],c.k("o<0>"))
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.cB)(a),++r)B.c.n(q,c.a(a[r]))
q.$flags=1
return q},
db(a,b){var s,r=A.y([],b.k("o<0>"))
for(s=a.gu(a);s.l();)B.c.n(r,s.gm())
return r},
dc(a,b){var s=A.er(a,!1,b)
s.$flags=3
return s},
dg(a,b){return new A.bf(a,A.d9(a,!1,!0,b,!1,""))},
di(a,b,c){var s=J.bJ(b)
if(!s.l())return a
if(c.length===0){do a+=A.m(s.gm())
while(s.l())}else{a+=A.m(s.gm())
while(s.l())a=a+c+A.m(s.gm())}return a},
aw(a,b,c){var s=A.ez(a,b,c,0,0,0,0,0,!1)
return new A.ae(s==null?new A.bU(a,b,c,0,0,0,0,0).$0():s,0,!1)},
e8(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
d5(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
b9(a){if(a>=10)return""+a
return"0"+a},
bW(a){if(typeof a=="number"||A.cS(a)||a==null)return J.ap(a)
if(typeof a=="string")return JSON.stringify(a)
return A.df(a)},
b5(a){return new A.bK(a)},
aq(a){return new A.ab(!1,null,null,a)},
eA(a,b){return new A.bu(null,null,!0,a,b,"Value not in range")},
c3(a,b,c,d,e){return new A.bu(b,c,!0,a,d,"Invalid value")},
eB(a,b,c){if(0>a||a>c)throw A.i(A.c3(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.i(A.c3(b,a,c,"end",null))
return b}return c},
eb(a,b,c,d){return new A.bY(b,!0,a,d,"Index out of range")},
c8(a){return new A.bA(a)},
dj(a){return new A.c7(a)},
eE(a){return new A.bw(a)},
bT(a){return new A.bS(a)},
ef(a,b,c){var s,r
if(A.cX(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.y([],t.s)
B.c.n($.F,a)
try{A.fn(a,s)}finally{if(0>=$.F.length)return A.v($.F,-1)
$.F.pop()}r=A.di(b,t.V.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
cD(a,b,c){var s,r
if(A.cX(a))return b+"..."+c
s=new A.by(b)
B.c.n($.F,a)
try{r=s
r.a=A.di(r.a,a,", ")}finally{if(0>=$.F.length)return A.v($.F,-1)
$.F.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
fn(a,b){var s,r,q,p,o,n,m,l=a.gu(a),k=0,j=0
for(;;){if(!(k<80||j<3))break
if(!l.l())return
s=A.m(l.gm())
B.c.n(b,s)
k+=s.length+2;++j}if(!l.l()){if(j<=5)return
if(0>=b.length)return A.v(b,-1)
r=b.pop()
if(0>=b.length)return A.v(b,-1)
q=b.pop()}else{p=l.gm();++j
if(!l.l()){if(j<=4){B.c.n(b,A.m(p))
return}r=A.m(p)
if(0>=b.length)return A.v(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gm();++j
for(;l.l();p=o,o=n){n=l.gm();++j
if(j>100){for(;;){if(!(k>75&&j>3))break
if(0>=b.length)return A.v(b,-1)
k-=b.pop().length+2;--j}B.c.n(b,"...")
return}}q=A.m(p)
r=A.m(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
for(;;){if(!(k>80&&b.length>3))break
if(0>=b.length)return A.v(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)B.c.n(b,m)
B.c.n(b,q)
B.c.n(b,r)},
dd(a,b,c,d){var s
if(B.j===c){s=B.i.gq(a)
b=J.P(b)
return A.cI(A.W(A.W($.cC(),s),b))}if(B.j===d){s=B.i.gq(a)
b=J.P(b)
c=J.P(c)
return A.cI(A.W(A.W(A.W($.cC(),s),b),c))}s=B.i.gq(a)
b=J.P(b)
c=J.P(c)
d=J.P(d)
d=A.cI(A.W(A.W(A.W(A.W($.cC(),s),b),c),d))
return d},
bU:function bU(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
ae:function ae(a,b,c){this.a=a
this.b=b
this.c=c},
ca:function ca(){},
bV:function bV(){},
bK:function bK(a){this.a=a},
c6:function c6(){},
ab:function ab(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bu:function bu(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
bY:function bY(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
bA:function bA(a){this.a=a},
c7:function c7(a){this.a=a},
bw:function bw(a){this.a=a},
bS:function bS(a){this.a=a},
cc:function cc(a){this.a=a},
bX:function bX(a,b){this.a=a
this.b=b},
f:function f(){},
aF:function aF(a,b,c){this.a=a
this.b=b
this.$ti=c},
a_:function a_(){},
r:function r(){},
by:function by(a){this.a=a},
bR:function bR(a,b,c){this.a=a
this.b=b
this.c=c},
bL:function bL(){},
bM:function bM(){},
bN:function bN(){},
bO:function bO(){},
bP:function bP(){},
at:function at(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.dx=_.db=_.cy=_.cx=_.CW=_.ch=_.ay=_.ax=_.at=_.as=_.Q=_.z=_.y=_.x=$},
as:function as(a){this.a=a
this.b=""},
h:function h(a,b){this.a=a
this.b=b},
t:function t(a,b){this.a=a
this.b=b},
e:function e(a,b){this.a=a
this.b=b},
hu(a){var s,r,q=B.aM.A(0,a)
if(q==null)q=a
for(s=0;s<92;++s){r=B.k[s]
if(r.a===q)return r}return B.c.gR(B.k)},
fw(a){var s
if(a>=3)s=0.5
else if(a===2)s=0.3333333333333333
else s=a===1?0.25:0
return s},
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
cG(a,b,c,d,e,f,g){return new A.K(b,g,e,c,d,f,a)},
fH(a,b){var s=$.dW(),r=A.R(s),q=r.k("H<1>"),p=A.db(new A.H(s,r.k("A(1)").a(new A.cp(a,b)),q),q.k("f.E"))
B.c.af(p,new A.cq())
return p.length===0?null:B.c.gR(p)},
ba:function ba(a,b){this.a=a
this.b=b},
K:function K(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
cp:function cp(a,b){this.a=a
this.b=b},
cq:function cq(){},
Q:function Q(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=e
_.r=f
_.w=g},
bQ:function bQ(a,b){this.a=a
this.b=b},
ac:function ac(a,b){this.a=a
this.b=b},
w:function w(a,b){this.a=a
this.d=b},
aO:function aO(a,b,c,d,e,f,g,h,i,j){var _=this
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
if(a>=1e6&&!b)return B.b.ad(a/1e6,1)+" \u043c\u043b\u043d \u20bd"
if(!b)s=(a<0?Math.ceil(a):Math.floor(a))!==a
else s=!0
r=B.b.ad(a,s?2:0).split(".")
q=A.hX(B.c.gR(r),A.dg("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!1),t.A.a(t.W.a(new A.cs())),null)
if(r.length===1)return q+" \u20bd"
return q+"."+B.c.gaI(r)+" \u20bd"},
cs:function cs(){},
hh(){var s,r,q,p,o,n,m,l,k="Attempting to rewrap a JS function.",j=t.L,i=A.y([B.r],j)
for(s=0;s<9;++s){r=B.aF[s]
i.push(new A.I(r.a,r.b))}A.cj("employment",i)
i=A.y([],j)
for(s=0;s<92;++s){q=B.k[s]
i.push(new A.I(q.a,q.b))}A.cj("region",i)
A.cj("marital",B.ay)
j=A.y([],j)
for(i=t.l.a(new A.cx()),p=B.c.gu(B.az),i=new A.a0(p,i,t.e);i.l();){o=p.gm()
j.push(new A.I(o.a,o.b))}A.cj("youngestChildAge",j)
A.bG("childChecks",B.aE)
A.bG("familyChecks",B.aG)
A.bG("housingChecks",B.aC)
A.bG("taxChecks",B.aH)
A.bG("specialChecks",B.aA)
for(j=A.cP,i=v.G,s=0;s<9;++s){n=B.aB[s]
m=A.M(A.b(i.document).getElementById(n))
p=m==null
if(!p){o=new A.cy()
if(typeof o=="function")A.b3(A.aq(k))
l=function(a,b){return function(c){return a(b,c,arguments.length)}}(j,o)
l[$.b4()]=o
m.addEventListener("input",l)}if(!p){p=new A.cz()
if(typeof p=="function")A.b3(A.aq(k))
l=function(a,b){return function(c){return a(b,c,arguments.length)}}(j,p)
l[$.b4()]=p
m.addEventListener("change",l)}}A.fp()
A.cl()},
fp(){var s,r,q,p,o,n,m,l,k=v.G,j=A.M(A.b(k.document).getElementById("eventBanner"))
if(j==null)return
s=A.cO(A.b(A.b(k.window).localStorage).getItem("dismissed_events"))
r=t.U
q=A.ep(new A.H(A.y((s==null?"":s).split(","),t.s),t.Q.a(new A.cn()),r),r.k("f.E"))
p=A.fH(new A.ae(Date.now(),0,!1),q)
if(p==null)return
o=A.b(A.b(k.document).createElement("div"))
o.className="event"
n=A.b(A.b(k.document).createElement("div"))
n.className="ev-ico"
n.textContent="\ud83d\uddd3"
A.b(o.appendChild(n))
n=A.b(A.b(k.document).createElement("div"))
n.className="ev-body"
m=A.b(A.b(k.document).createElement("div"))
m.className="ev-title"
m.textContent=p.b
A.b(n.appendChild(m))
m=A.b(A.b(k.document).createElement("div"))
m.className="ev-text"
m.textContent=p.c
A.b(n.appendChild(m))
l=A.f3(p.f)
if(l!=null){m=A.b(A.b(k.document).createElement("a"))
m.className="ev-cta"
m.href=l
m.text=p.r+" \u2192"
A.b(n.appendChild(m))}A.b(o.appendChild(n))
n=A.b(A.b(k.document).createElement("button"))
n.className="ev-close"
n.textContent="\u2715"
n.title="\u0411\u043e\u043b\u044c\u0448\u0435 \u043d\u0435 \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c"
n.ariaLabel="\u0417\u0430\u043a\u0440\u044b\u0442\u044c"
n.addEventListener("click",A.f4(new A.co(q,p,o)))
A.b(o.appendChild(n))
A.b(j.appendChild(o))},
f3(a){var s=null
switch(a.a){case 0:s="/post/aug_family_cashback.html"
break
case 1:s="/instrukcii/"
break
case 2:break}return s},
cj(a,b){var s,r,q,p,o=v.G,n=A.M(A.b(o.document).getElementById(a))
if(n==null)return
for(s=b.length,r=0;r<b.length;b.length===s||(0,A.cB)(b),++r){q=b[r]
p=A.b(A.b(o.document).createElement("option"))
p.value=q.a
p.text=q.b
A.b(n.appendChild(p))}},
bG(a,b){var s,r,q,p,o,n,m,l=v.G,k=A.M(A.b(l.document).getElementById(a))
if(k==null)return
for(s=b.length,r=A.cP,q=0;q<s;++q){p=b[q]
o=A.b(A.b(l.document).createElement("div"))
o.className="chip"
o.textContent=p.b
n=new A.ci(p,o)
if(typeof n=="function")A.b3(A.aq("Attempting to rewrap a JS function."))
m=function(c,d){return function(e){return c(d,e,arguments.length)}}(r,n)
m[$.b4()]=n
o.addEventListener("click",m)
A.b(k.appendChild(o))}},
ck(a){var s=A.M(A.b(v.G.document).getElementById(a))
s=s==null?null:A.b1(s.value)
return s==null?"":s},
bH(a){var s=A.M(A.b(v.G.document).getElementById(a))
s=s==null?null:A.b1(s.value)
return s==null?"":s},
cl(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0="\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0444\u043e\u0440\u043c\u0443",b1=A.c2(A.ck("children"),null)
if(b1==null)b1=0
s=v.G
r=A.M(A.b(s.document).getElementById("youngestWrap"))
q=b1>0
if(q){if(r!=null)A.b(r.classList).remove("hidden")}else if(r!=null)A.b(r.classList).add("hidden")
p=A.bH("region")
o=A.ck("familySize")
n=A.bH("youngestChildAge")
m=A.ck("age")
l=A.bH("gender")
k=A.bH("employment")
j=p.length===0?"regular":p
i=A.bH("marital")
if(q)q=n.length===0?"3":n
else q="99"
h=A.eo($.cQ,t.N)
g=A.ck("income")
f=new A.aO(m,l,k,j,i,b1,q,h,g,o.length===0?"1":o)
e=$.dU().aA(f)
q=e.a
m=q.length===0
d=!m
c=A.M(A.b(s.document).getElementById("resultPanel"))
if(c!=null){c.textContent=""
b=A.b(A.b(s.document).createElement("div"))
b.className="cap"
l=d?"\u0415\u0436\u0435\u043c\u0435\u0441\u044f\u0447\u043d\u043e \u0432\u0430\u0448\u0435\u0439 \u0441\u0435\u043c\u044c\u0435 \u043f\u043e\u043b\u043e\u0436\u0435\u043d\u043e":b0
b.textContent=l
A.b(c.appendChild(b))
b=A.b(A.b(s.document).createElement("div"))
b.className="sum"
l=e.b
l=l>0?A.c(B.b.p(l),!1):"\u2014"
b.textContent=l
A.b(c.appendChild(b))
l=e.c
if(l>0){b=A.b(A.b(s.document).createElement("div"))
b.className="once"
b.textContent="\u0438 \u0435\u0449\u0451 "+A.c(B.b.p(l),!1)+" \u0435\u0434\u0438\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e"
A.b(c.appendChild(b))}else if(m){b=A.b(A.b(s.document).createElement("div"))
b.className="once"
b.textContent="\u0421\u0443\u043c\u043c\u044b \u043f\u043e\u044f\u0432\u044f\u0442\u0441\u044f \u0437\u0434\u0435\u0441\u044c \u043f\u043e \u043c\u0435\u0440\u0435 \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"
A.b(c.appendChild(b))}}a=A.M(A.b(s.document).getElementById("stickyCount"))
a0=A.M(A.b(s.document).getElementById("stickySum"))
if(a!=null&&a0!=null){l=d?"\u041d\u0430\u0439\u0434\u0435\u043d\u043e \u0432\u044b\u043f\u043b\u0430\u0442: "+q.length:b0
a.textContent=l
l=e.b
if(l>0)l=A.c(B.b.p(l),!1)+"/\u043c\u0435\u0441"
else{l=e.c
l=l>0?A.c(B.b.p(l),!1):"\u2014"}a0.textContent=l}a1=A.M(A.b(s.document).getElementById("list"))
if(a1==null)return
a1.textContent=""
if(m){b=A.b(A.b(s.document).createElement("div"))
b.className="muted"
b.textContent="\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0444\u043e\u0440\u043c\u0443 \u2014 \u0437\u0434\u0435\u0441\u044c \u043f\u043e\u044f\u0432\u044f\u0442\u0441\u044f \u043f\u043e\u043b\u043e\u0436\u0435\u043d\u043d\u044b\u0435 \u0432\u044b\u043f\u043b\u0430\u0442\u044b."
A.b(a1.appendChild(b))
return}for(m=B.aL.ga4(),l=m.$ti,m=new A.a5(m.a(),l.k("a5<1>")),k=A.R(q),j=k.k("A(1)"),k=k.k("H<1>"),i=k.k("f.E"),l=l.c;m.l();){h=m.b
if(h==null)h=l.a(h)
a2=A.db(new A.H(q,j.a(new A.cm(h)),k),i)
if(a2.length===0)continue
b=A.b(A.b(s.document).createElement("div"))
b.className="cat"
h=h.b
g=A.dg("[\\u{1F000}-\\u{1FAFF}\\u{2600}-\\u{27BF}\\u{2190}-\\u{21FF}\\u{2B00}-\\u{2BFF}\ufe0f\u200d]",!0)
b.textContent=B.f.U(A.hY(h,g,""))
A.b(a1.appendChild(b))
for(h=a2.length,a3=0;a3<a2.length;a2.length===h||(0,A.cB)(a2),++a3){a4=a2[a3]
b=A.b(A.b(s.document).createElement("div"))
b.className="benefit"
a5=A.b(A.b(s.document).createElement("div"))
a5.className="head"
a6=A.b(A.b(s.document).createElement("div"))
a6.className="nm"
a6.textContent=a4.b
A.b(a5.appendChild(a6))
g=a4.r
if(g==="monthly")a7="month"
else a7=g==="once"?"once":"relief"
a6=A.b(A.b(s.document).createElement("div"))
a6.className="amt "+a7
a6.textContent=a4.f
A.b(a5.appendChild(a6))
A.b(b.appendChild(a5))
g=a4.d
if(g.length!==0){a5=A.b(A.b(s.document).createElement("div"))
a5.className="desc"
a5.textContent=g
A.b(b.appendChild(a5))}a8=A.e_(a4,f)
if(a8!=null){a5=A.b(A.b(s.document).createElement("details"))
g=A.b(A.b(s.document).createElement("summary"))
g.textContent="\u041f\u043e\u0447\u0435\u043c\u0443 \u043f\u043e\u043b\u043e\u0436\u0435\u043d\u043e"
A.b(a5.appendChild(g))
a6=A.b(A.b(s.document).createElement("div"))
a6.className="why"
a6.textContent=a8.a
A.b(a5.appendChild(a6))
a9=a8.b
if(a9!=null){a6=A.b(A.b(s.document).createElement("div"))
a6.className="src"
a6.textContent=a9.d
A.b(a5.appendChild(a6))}A.b(b.appendChild(a5))}A.b(a1.appendChild(b))}}},
cx:function cx(){},
cy:function cy(){},
cz:function cz(){},
cn:function cn(){},
co:function co(a,b,c){this.a=a
this.b=b
this.c=c},
ci:function ci(a,b){this.a=a
this.b=b},
cm:function cm(a){this.a=a},
f4(a){var s
if(typeof a=="function")throw A.i(A.aq("Attempting to rewrap a JS function."))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.cP,a)
s[$.b4()]=a
return s},
cP(a,b,c){t.Z.a(a)
if(A.b0(c)>=1)return a.$1(b)
return a.$0()},
hr(a,b,c){var s,r,q,p,o,n,m
if(!a.w.i(0,"pregnant")||a.b!=="female")return
s=b.b
if(s>0&&s<14)return
if(b.ga9()){s=b.ch
s===$&&A.j()
r=b.w
q=r.x
if(s<q*0.67)p=1
else p=s<q*0.85?0.75:0.5
o=B.b.p(r.y*p)
c.h(0,"c","\ud83e\udd30",B.e,"\u0415\u0434\u0438\u043d\u043e\u0435 \u043f\u043e\u0441\u043e\u0431\u0438\u0435 \u0431\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0439 (\u0440\u0430\u043d\u043d\u0438\u0435 \u0441\u0440\u043e\u043a\u0438)","\u041f\u0440\u0438 \u043f\u043e\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0435 \u043d\u0430 \u0443\u0447\u0451\u0442 \u0434\u043e 12 \u043d\u0435\u0434., \u0434\u043b\u044f \u043c\u0430\u043b\u043e\u0438\u043c\u0443\u0449\u0438\u0445. "+B.b.H(p*100)+"% \u041f\u041c \u0442\u0440\u0443\u0434\u043e\u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0433\u043e \u043d\u0430\u0441\u0435\u043b\u0435\u043d\u0438\u044f \u0440\u0435\u0433\u0438\u043e\u043d\u0430 = "+A.c(o,!1)+"/\u043c\u0435\u0441.",o,A.c(o,!1)+"/\u043c\u0435\u0441","monthly")}n=b.e
m=Math.min(B.b.p((n>0?n:Math.max(27093,b.c/b.d))*24/730*140),955836)
c.h(0,"c","\ud83e\udd31",B.e,"\u041f\u043e\u0441\u043e\u0431\u0438\u0435 \u043f\u043e \u0431\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u0438 \u0440\u043e\u0434\u0430\u043c","100% \u0441\u0440. \u0437\u0430\u0440\u043f\u043b\u0430\u0442\u044b \u0437\u0430 140 \u0434\u043d\u0435\u0439 (\u0441\u0440. \u0434\u043d. = \u0437\u043f \xd7 24 / 730). \u041c\u0430\u043a\u0441: "+A.c(955836,!1)+".",m,A.c(m,!1)+" (\u0435\u0434\u0438\u043d\u043e\u0432\u0440.)","once")},
ho(a,b,c){if(!a.w.i(0,"newborn"))return
c.h(0,"c","\ud83c\udf81",B.e,"\u0415\u0434\u0438\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0435 \u043f\u0440\u0438 \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u0438","\u041d\u0430 \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u0440\u0435\u0431\u0451\u043d\u043a\u0430. \u0413\u043e\u0441\u0443\u0441\u043b\u0443\u0433\u0438 \u0438\u043b\u0438 \u041c\u0424\u0426.",28450.45,A.c(28450.45,!0),"once")},
hj(a,b,c){var s,r,q="once",p=a.w
if(p.i(0,"used_matcap"))return
s=p.i(0,"newborn")||p.i(0,"pregnant")
p=a.f
r=s?1:0
if(s&&p===0)c.h(0,"c","\ud83c\udfe6",B.d,"\u041c\u0430\u0442\u0435\u0440\u0438\u043d\u0441\u043a\u0438\u0439 \u043a\u0430\u043f\u0438\u0442\u0430\u043b (1-\u0439 \u0440\u0435\u0431\u0451\u043d\u043e\u043a)","\u0418\u043f\u043e\u0442\u0435\u043a\u0430, \u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0435, \u043f\u0435\u043d\u0441\u0438\u044f, \u0440\u0435\u0430\u0431\u0438\u043b\u0438\u0442\u0430\u0446\u0438\u044f.",728921.9,A.c(728921.9,!1),q)
else if(s&&p>=1)c.h(0,"c","\ud83c\udfe6",B.d,"\u041c\u0430\u0442\u0435\u0440\u0438\u043d\u0441\u043a\u0438\u0439 \u043a\u0430\u043f\u0438\u0442\u0430\u043b (2-\u0439 \u0438 \u0434\u0430\u043b\u0435\u0435)","\u041f\u043e\u043b\u043d\u0430\u044f \u0441\u0443\u043c\u043c\u0430 \u0435\u0441\u043b\u0438 \u043d\u0430 1-\u0433\u043e \u043d\u0435 \u043f\u043e\u043b\u0443\u0447\u0430\u043b\u0438, \u0438\u043d\u0430\u0447\u0435 \u0434\u043e\u043f\u043b\u0430\u0442\u0430.",963243.17,A.c(963243.17,!1),q)
else if(!s&&p+r>=2)c.h(0,"c","\ud83c\udfe6",B.d,"\u041c\u0430\u0442\u043a\u0430\u043f\u0438\u0442\u0430\u043b (2-\u0439 \u0438 \u0434\u0430\u043b\u0435\u0435)","\u0415\u0441\u043b\u0438 \u043d\u0430 1-\u0433\u043e \u043d\u0435 \u043f\u043e\u043b\u0443\u0447\u0430\u043b\u0438 \u2014 \u043f\u043e\u043b\u043d\u0430\u044f \u0441\u0443\u043c\u043c\u0430.",963243.17,A.c(963243.17,!1),q)},
fy(a,b,c){var s,r,q,p,o
if(b.r>1.5||a.f<=0||a.w.i(0,"pregnant"))return
s=b.e
s=s>0?s:Math.max(27093,b.c/b.d)
r=a.c
q=r==="employed"||r==="matleave"||r==="ip"||r==="self"?10837.2:10669.64
p=Math.max(q,Math.min(B.b.p(s*0.4),83021.19))
r=A.c(q,!0)
o=A.c(83021.19,!0)
c.h(0,"c","\ud83c\udf7c",B.e,"\u041f\u043e\u0441\u043e\u0431\u0438\u0435 \u043f\u043e \u0443\u0445\u043e\u0434\u0443 \u0434\u043e 1,5 \u043b\u0435\u0442","40% \u0441\u0440. \u0437\u0430\u0440\u043f\u043b\u0430\u0442\u044b. \u041c\u0438\u043d "+r+", \u043c\u0430\u043a\u0441 "+o+".",p,A.c(p,(p<0?Math.ceil(p):Math.floor(p))!==p)+"/\u043c\u0435\u0441","monthly")},
ia(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=b.ax
i===$&&A.j()
if(i>0){s=B.b.aK(A.fw(a.f)*100)
r=B.aJ.A(0,a.d)
c.h(0,"c","\u2696\ufe0f",B.a,"\u0410\u043b\u0438\u043c\u0435\u043d\u0442\u044b \u043d\u0435 \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u044b \u2014 \u0421\u0424\u0420 \u0443\u0447\u0442\u0451\u0442 \u0432\u043c\u0435\u043d\u0451\u043d\u043d\u044b\u0435","\u0421 01.03.2026 \u043f\u0440\u0438 \u043d\u0435\u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u043d\u044b\u0445 \u0430\u043b\u0438\u043c\u0435\u043d\u0442\u0430\u0445 \u0432 \u0434\u043e\u0445\u043e\u0434 \u0434\u043b\u044f \u0435\u0434\u0438\u043d\u043e\u0433\u043e \u043f\u043e\u0441\u043e\u0431\u0438\u044f \u0432\u043a\u043b\u044e\u0447\u0430\u0435\u0442\u0441\u044f "+s+"% \u0441\u0440\u0435\u0434\u043d\u0435\u0439 \u0437\u0430\u0440\u043f\u043b\u0430\u0442\u044b \u0440\u0435\u0433\u0438\u043e\u043d\u0430 ("+A.c(r==null?100360:r,!1)+") = "+A.c(i,!1)+"/\u043c\u0435\u0441. \u0415\u0441\u043b\u0438 \u0432\u0437\u044b\u0441\u043a\u0430\u0442\u044c \u0430\u043b\u0438\u043c\u0435\u043d\u0442\u044b \u0447\u0435\u0440\u0435\u0437 \u0441\u0443\u0434, \u0431\u0443\u0434\u0435\u0442 \u0443\u0447\u0438\u0442\u044b\u0432\u0430\u0442\u044c\u0441\u044f \u0444\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0441\u0443\u043c\u043c\u0430 \u2014 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u043c\u043e\u0436\u0435\u0442 \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c\u0441\u044f.",0,"\u0443\u0447\u0442\u0435\u043d\u043e \u0432 \u0434\u043e\u0445\u043e\u0434\u0435","benefit")}s=a.f
q=!1
if(s>=3){r=b.ch
r===$&&A.j()
p=b.w.x
if(r>=p){if(r<p*1.1)r=(!b.gac()||b.c>=18062)&&b.gaa()&&b.gab()
else r=q
q=r}}if(s>0)r=!(b.ga9()||q)
else r=!0
if(r)return
if(q)o=0.5
else{r=b.ch
r===$&&A.j()
p=b.w.x
if(r<p*0.67)o=1
else{r=r<p*0.85?0.75:0.5
o=r}}r=b.w
p=r.z
n=B.b.p(p*o)
m=q?"\u041c\u043d\u043e\u0433\u043e\u0434\u0435\u0442\u043d\u044b\u043c \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u0435\u0442\u0441\u044f \u043f\u0440\u0438 \u043f\u0440\u0435\u0432\u044b\u0448\u0435\u043d\u0438\u0438 \u0434\u043e\u0445\u043e\u0434\u0430 \u0434\u043e 10% \u041f\u041c (\u0441 22.05.2026). ":""
l=b.at
l===$&&A.j()
k=l+i>0?" (\u0441 \u0443\u0447\u0451\u0442\u043e\u043c \u0430\u043b\u0438\u043c\u0435\u043d\u0442\u043e\u0432)":""
i=B.b.H(o*100)
p=A.c(p,!1)
l=b.ch
l===$&&A.j()
j=n*s
c.h(0,"c","\ud83d\udc76",B.e,"\u0415\u0434\u0438\u043d\u043e\u0435 \u043f\u043e\u0441\u043e\u0431\u0438\u0435 \u043d\u0430 \u0434\u0435\u0442\u0435\u0439 \u0434\u043e 17",m+i+"% \u0440\u0435\u0433\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u041f\u041c \u0440\u0435\u0431\u0451\u043d\u043a\u0430 ("+p+"). \u0412\u0430\u0448 \u0434\u043e\u0445\u043e\u0434 \u043d\u0430 \u0447\u0435\u043b."+k+": "+A.c(l,!1)+", \u043f\u043e\u0440\u043e\u0433: "+A.c(r.x,!1)+".",j,A.c(n,!1)+" \xd7 "+s+" = "+A.c(j,!1)+"/\u043c\u0435\u0441","monthly")},
fP(a,b,c){var s,r,q,p=a.f
if(p<2)s=p>=1&&a.w.i(0,"child_study")
else s=!0
p=b.dx
p===$&&A.j()
if(p){p=b.z
p===$&&A.j()}else p=!1
r=!0
if(p)if(s){p=b.ay
p===$&&A.j()
p=p>=b.w.x*1.5||a.w.i(0,"alimony_debt")}else p=r
else p=r
if(p)return
p=b.x
p===$&&A.j()
q=B.b.p(p*0.5384615384615384)
c.h(0,"c","\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc66",B.d,"\u0415\u0436\u0435\u0433\u043e\u0434\u043d\u0430\u044f \u0441\u0435\u043c\u0435\u0439\u043d\u0430\u044f \u0432\u044b\u043f\u043b\u0430\u0442\u0430","\u0412\u043e\u0437\u0432\u0440\u0430\u0442 7 \u0438\u0437 13 \u043f.\u043f. \u041d\u0414\u0424\u041b \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u0430\u044e\u0449\u0438\u0445 \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u0435\u0439 \u0441 2+ \u0434\u0435\u0442\u044c\u043c\u0438 \u043f\u0440\u0438 \u0434\u043e\u0445\u043e\u0434\u0435 \u043d\u0438\u0436\u0435 1,5 \u041f\u041c \u043d\u0430 \u0447\u0435\u043b. \u0414\u0435\u0439\u0441\u0442\u0432\u0443\u0435\u0442 \u0441 1 \u0438\u044e\u043d\u044f 2026 \u0433. (\u0424\u0417 \u211658-\u0424\u0417).",q,A.c(q,!1)+"/\u0433\u043e\u0434","once")},
hn(a,b,c){if(a.f<3||!a.w.i(0,"has_mortgage"))return
c.h(0,"c","\ud83c\udfe1",B.d,"450 000 \u20bd \u043d\u0430 \u0438\u043f\u043e\u0442\u0435\u043a\u0443 (\u043c\u043d\u043e\u0433\u043e\u0434\u0435\u0442\u043d\u044b\u0435)","3-\u0439 \u0438\u043b\u0438 \u043f\u043e\u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0440\u0435\u0431\u0451\u043d\u043e\u043a, \u0440\u043e\u0436\u0434\u0451\u043d\u043d\u044b\u0439 \u0432 2019\u20132030 \u0433\u0433. \u041d\u0430 \u043f\u043e\u0433\u0430\u0448\u0435\u043d\u0438\u0435 \u0438\u043f\u043e\u0442\u0435\u043a\u0438, \u0432 \u0442\u043e\u043c \u0447\u0438\u0441\u043b\u0435 \u0440\u0435\u0444\u0438\u043d\u0430\u043d\u0441\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0439 (\u043a\u0440\u0435\u0434\u0438\u0442 \u2014 \u0434\u043e 01.07.2031). \u0412 \u0440\u044f\u0434\u0435 \u0440\u0435\u0433\u0438\u043e\u043d\u043e\u0432 \u2014 \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u0430\u044f \u0440\u0435\u0433\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u0430\u044f \u0432\u044b\u043f\u043b\u0430\u0442\u0430.",45e4,A.c(45e4,!1),"once")},
fQ(a,b,c){var s=A.bt(a.r)
if(a.f<1||s==null||s>6)return
c.h(0,"c","\ud83c\udfe6",B.d,"\u0421\u0435\u043c\u0435\u0439\u043d\u0430\u044f \u0438\u043f\u043e\u0442\u0435\u043a\u0430 \u2014 \u0441\u0442\u0430\u0432\u043a\u0430 \u0434\u043e 6%","\u0421\u0435\u043c\u044c\u044f\u043c \u0441 \u0440\u0435\u0431\u0451\u043d\u043a\u043e\u043c \u0434\u043e 6 \u043b\u0435\u0442 \u2014 \u043b\u044c\u0433\u043e\u0442\u043d\u0430\u044f \u0441\u0442\u0430\u0432\u043a\u0430 \u0434\u043e 6% \u0433\u043e\u0434\u043e\u0432\u044b\u0445 \u043d\u0430 \u043f\u043e\u043a\u0443\u043f\u043a\u0443 \u0436\u0438\u043b\u044c\u044f \u0438\u043b\u0438 \u0441\u0442\u0440\u043e\u0438\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u043e \u0434\u043e\u043c\u0430. \u041b\u0438\u043c\u0438\u0442 \u043a\u0440\u0435\u0434\u0438\u0442\u0430: 12 \u043c\u043b\u043d \u20bd \u0434\u043b\u044f \u041c\u043e\u0441\u043a\u0432\u044b, \u0421\u0430\u043d\u043a\u0442-\u041f\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433\u0430 \u0438 \u0438\u0445 \u043e\u0431\u043b\u0430\u0441\u0442\u0435\u0439, 6 \u043c\u043b\u043d \u20bd \u0434\u043b\u044f \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0445 \u0440\u0435\u0433\u0438\u043e\u043d\u043e\u0432. \u042d\u0442\u043e \u043b\u044c\u0433\u043e\u0442\u0430 \u043f\u043e \u0441\u0442\u0430\u0432\u043a\u0435, \u0430 \u043d\u0435 \u0432\u044b\u043f\u043b\u0430\u0442\u0430 \u043d\u0430 \u0440\u0443\u043a\u0438 \u2014 \u0443\u0441\u043b\u043e\u0432\u0438\u044f \u0438 \u0431\u0430\u043d\u043a\u0438 \u0443\u0442\u043e\u0447\u043d\u044f\u0439\u0442\u0435 \u0432 \u0431\u0430\u043d\u043a\u0435 \u0438\u043b\u0438 \u043d\u0430 \u0414\u041e\u041c.\u0420\u0424.",0,"\u043b\u044c\u0433\u043e\u0442\u043d\u0430\u044f \u0441\u0442\u0430\u0432\u043a\u0430","benefit")},
fK(a,b,c){var s
if(!a.w.i(0,"disabled_child"))return
c.h(0,"c","\ud83e\uddd2",B.a,"\u0412\u044b\u043f\u043b\u0430\u0442\u044b \u043d\u0430 \u0440\u0435\u0431\u0451\u043d\u043a\u0430-\u0438\u043d\u0432\u0430\u043b\u0438\u0434\u0430","\u0421\u043e\u0446\u0438\u0430\u043b\u044c\u043d\u0430\u044f \u043f\u0435\u043d\u0441\u0438\u044f (~22 618 \u20bd) + \u0415\u0414\u0412 \u043f\u0440\u0438 \u043e\u0442\u043a\u0430\u0437\u0435 \u043e\u0442 \u041d\u0421\u0423 (~4 447 \u20bd).",27065,"~"+A.c(27065,!1)+"/\u043c\u0435\u0441","monthly")
s=a.c
if(s!=="employed"&&s!=="ip"&&s!=="self"&&s!=="pensioner")c.h(0,"c","\ud83e\udd1d",B.a,"\u041f\u043e\u0441\u043e\u0431\u0438\u0435 \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u044e \u0440\u0435\u0431\u0451\u043d\u043a\u0430-\u0438\u043d\u0432\u0430\u043b\u0438\u0434\u0430","\u041d\u0435\u0440\u0430\u0431\u043e\u0442\u0430\u044e\u0449\u0435\u043c\u0443/\u0437\u0430\u043d\u044f\u0442\u043e\u043c\u0443 \u043d\u0435\u043f\u043e\u043b\u043d\u043e \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u044e \u0438\u043b\u0438 \u043e\u043f\u0435\u043a\u0443\u043d\u0443 (\u0423\u043a\u0430\u0437 \u2116175). \u0418\u043d\u0434\u0435\u043a\u0441\u0438\u0440\u0443\u0435\u0442\u0441\u044f 1 \u0444\u0435\u0432\u0440\u0430\u043b\u044f.",11300,"~"+A.c(11300,!1)+"/\u043c\u0435\u0441","monthly")},
ic(a,b,c){var s=a.w,r=!0
if(s.i(0,"young_family"))if(b.b<=35)if(a.e==="married")s=!(s.i(0,"need_housing")||s.i(0,"rent_home"))
else s=r
else s=r
else s=r
if(s)return
c.h(0,"h","\ud83d\udc6b",B.d,"\u041f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0430 \xab\u041c\u043e\u043b\u043e\u0434\u0430\u044f \u0441\u0435\u043c\u044c\u044f\xbb","\u0421\u043e\u0446\u0432\u044b\u043f\u043b\u0430\u0442\u0430 \u043d\u0430 \u043f\u043e\u043a\u0443\u043f\u043a\u0443/\u0441\u0442\u0440\u043e\u0438\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u043e \u0436\u0438\u043b\u044c\u044f.",0,"30\u201335% \u0441\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u0438 \u0436\u0438\u043b\u044c\u044f","benefit")},
fv(a,b,c){var s="once",r="\u041f\u0440\u0430\u0432\u043e \u043d\u0430 \u043c\u0430\u0442\u043a\u0430\u043f\u0438\u0442\u0430\u043b \u0440\u0430\u0441\u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u044f\u0435\u0442\u0441\u044f \u043d\u0430 \u0443\u0441\u044b\u043d\u043e\u0432\u043b\u0451\u043d\u043d\u044b\u0445 \u0434\u0435\u0442\u0435\u0439.",q=a.w
if(!q.i(0,"i_adopt"))return
c.h(0,"c","\ud83d\udc9b",B.e,"\u0415\u0434\u0438\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0435 \u043f\u0440\u0438 \u0443\u0441\u044b\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0438","\u0421\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u0430\u044f \u0432\u044b\u043f\u043b\u0430\u0442\u0430 \u043f\u0440\u0438 \u0443\u0441\u044b\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0438. \u041e\u0444\u043e\u0440\u043c\u043b\u044f\u0435\u0442\u0441\u044f \u0447\u0435\u0440\u0435\u0437 \u0413\u043e\u0441\u0443\u0441\u043b\u0443\u0433\u0438.",28450.45,A.c(28450.45,!0),s)
c.h(0,"c","\ud83d\udc9b",B.d,"\u041f\u043e\u0432\u044b\u0448\u0435\u043d\u043d\u043e\u0435 \u043f\u043e\u0441\u043e\u0431\u0438\u0435 \u043f\u0440\u0438 \u0443\u0441\u044b\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0438","\u0415\u0441\u043b\u0438 \u0440\u0435\u0431\u0451\u043d\u043a\u0443 7+ \u043b\u0435\u0442, \u0440\u0435\u0431\u0451\u043d\u043e\u043a-\u0438\u043d\u0432\u0430\u043b\u0438\u0434 \u0438\u043b\u0438 \u0443\u0441\u044b\u043d\u043e\u0432\u043b\u044f\u0435\u0442\u0435 \u0431\u0440\u0430\u0442\u044c\u0435\u0432/\u0441\u0435\u0441\u0442\u0451\u0440.",0,"\u0434\u043e "+A.c(217384.58,!0)+" (\u0441\u043f\u0435\u0446. \u0441\u043b\u0443\u0447\u0430\u0438)","benefit")
if(q.i(0,"used_matcap"))return
q=a.f
if(q===0)c.h(0,"c","\ud83c\udfe6",B.d,"\u041c\u0430\u0442\u0435\u0440\u0438\u043d\u0441\u043a\u0438\u0439 \u043a\u0430\u043f\u0438\u0442\u0430\u043b \u043f\u0440\u0438 \u0443\u0441\u044b\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0438 (1-\u0439)",r,728921.9,A.c(728921.9,!1),s)
else if(q+1>=2)c.h(0,"c","\ud83c\udfe6",B.d,"\u041c\u0430\u0442\u0435\u0440\u0438\u043d\u0441\u043a\u0438\u0439 \u043a\u0430\u043f\u0438\u0442\u0430\u043b \u043f\u0440\u0438 \u0443\u0441\u044b\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0438 (2-\u0439+)",r,963243.17,A.c(963243.17,!1),s)},
hp(a,b,c){var s,r,q,p=b.w
if(!p.e)return
s=B.aK.A(0,p.a)
if(s==null)s=0.3
r=b.c
q=B.b.p((r>0?r:28395.89)*s)
c.h(0,"r","\ud83c\udf28\ufe0f",B.a,"\u0420\u0430\u0439\u043e\u043d\u043d\u044b\u0439 \u043a\u043e\u044d\u0444\u0444\u0438\u0446\u0438\u0435\u043d\u0442","\u041a \u0437\u0430\u0440\u043f\u043b\u0430\u0442\u0435 \u0438 \u043f\u0435\u043d\u0441\u0438\u0438 +"+B.b.H(s*100)+"% (\u043c\u0438\u043d.) \u0434\u043e 100% \u2014 \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043e\u0442 \u0441\u0443\u0431\u044a\u0435\u043a\u0442\u0430 \u0420\u0424.",q,"\u043e\u0442 +"+A.c(q,!1)+"/\u043c\u0435\u0441","monthly")
c.h(0,"r","\u2708\ufe0f",B.a,"\u041a\u043e\u043c\u043f\u0435\u043d\u0441\u0430\u0446\u0438\u044f \u043f\u0440\u043e\u0435\u0437\u0434\u0430 \u0432 \u043e\u0442\u043f\u0443\u0441\u043a","\u0420\u0430\u0437 \u0432 2 \u0433\u043e\u0434\u0430 \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u043d\u0438\u043a\u043e\u0432 \u041a\u0440\u0430\u0439\u043d\u0435\u0433\u043e \u0421\u0435\u0432\u0435\u0440\u0430.",0,"\u0440\u0430\u0437 \u0432 2 \u0433\u043e\u0434\u0430","benefit")
c.h(0,"r","\ud83c\udfd6\ufe0f",B.a,"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u043e\u0442\u043f\u0443\u0441\u043a (\u0421\u0435\u0432\u0435\u0440)","16\u201324 \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0445 \u0434\u043d\u044f \u043a \u0435\u0436\u0435\u0433\u043e\u0434\u043d\u043e\u043c\u0443 \u043e\u0442\u043f\u0443\u0441\u043a\u0443.",0,"16\u201324 \u0434\u043d\u044f","benefit")},
fA(a,b,c){if(!a.w.i(0,"i_chern"))return
c.h(0,"s","\u2622\ufe0f",B.h,"\u0415\u0414\u0412 \u043b\u0438\u043a\u0432\u0438\u0434\u0430\u0442\u043e\u0440\u0430 \u0427\u0410\u042d\u0421","\u0415\u0414\u0412 \u0438 \u043b\u044c\u0433\u043e\u0442\u044b.",2590,A.c(2590,!1)+"/\u043c\u0435\u0441","monthly")},
hE(a,b,c){if(!a.w.i(0,"i_repr"))return
c.h(0,"s","\ud83d\udcdc",B.h,"\u0412\u044b\u043f\u043b\u0430\u0442\u044b \u0440\u0435\u0430\u0431\u0438\u043b\u0438\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u043c","\u0415\u0414\u0412, \u043b\u044c\u0433\u043e\u0442\u044b \u043f\u043e \u0416\u041a\u0425, \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u0443 \u0438 \u043c\u0435\u0434\u0438\u0446\u0438\u043d\u0435.",0,"\u0415\u0414\u0412 + \u043b\u044c\u0433\u043e\u0442\u044b","benefit")},
hm(a,b,c){var s,r,q="monthly",p=b.w
if(!p.d)return
if(a.f>0){s=b.as
s===$&&A.j()
s=s&&p.as!=null}else s=!1
if(s){s=p.as
s.toString
c.h(0,"r","\ud83c\udfd9\ufe0f",B.h,"\u041c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u0434\u043e\u043f\u043b\u0430\u0442\u0430 \u043d\u0430 \u0434\u0435\u0442\u0435\u0439","\u0420\u0435\u0433\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u0430\u044f \u043d\u0430\u0434\u0431\u0430\u0432\u043a\u0430 \u0441\u0432\u0435\u0440\u0445 \u0444\u0435\u0434\u0435\u0440\u0430\u043b\u044c\u043d\u044b\u0445 \u0432\u044b\u043f\u043b\u0430\u0442.",s,"~"+A.c(s,!1)+"/\u043c\u0435\u0441",q)}s=!1
if(a.d==="moscow")if(a.w.i(0,"i_pen")||a.c==="pensioner"){r=p.ax
if(r!=null){s=b.y
s===$&&A.j()
r=s<r
s=r}}if(s){s=p.ax
s.toString
r=b.y
r===$&&A.j()
c.h(0,"r","\ud83c\udfd9\ufe0f",B.h,"\u0414\u043e\u043f\u043b\u0430\u0442\u0430 \u043a \u043f\u0435\u043d\u0441\u0438\u0438 \u0434\u043e \u0433\u043e\u0440\u043e\u0434\u0441\u043a\u043e\u0433\u043e \u041f\u041c (\u041c\u043e\u0441\u043a\u0432\u0430)","\u041f\u0435\u043d\u0441\u0438\u044f \u0434\u043e\u0432\u043e\u0434\u0438\u0442\u0441\u044f \u0434\u043e \u0433\u043e\u0440\u043e\u0434\u0441\u043a\u043e\u0433\u043e \u043f\u0440\u043e\u0436\u0438\u0442\u043e\u0447\u043d\u043e\u0433\u043e \u043c\u0438\u043d\u0438\u043c\u0443\u043c\u0430 \u043f\u0435\u043d\u0441\u0438\u043e\u043d\u0435\u0440\u0430.",B.b.aB(s-r,0,1/0),"\u0434\u043e "+A.c(s,!1)+"/\u043c\u0435\u0441",q)}if((a.c==="student"||a.w.i(0,"i_stu"))&&p.at!=null){p=p.at
p.toString
c.h(0,"r","\ud83c\udfd9\ufe0f",B.h,"\u041c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u0441\u0442\u0438\u043f\u0435\u043d\u0434\u0438\u044f","\u0420\u0435\u0433\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u0430\u044f \u043d\u0430\u0434\u0431\u0430\u0432\u043a\u0430 \u043a \u0444\u0435\u0434\u0435\u0440\u0430\u043b\u044c\u043d\u043e\u0439 \u0441\u0442\u0438\u043f\u0435\u043d\u0434\u0438\u0438.",p,A.c(p,!1)+"/\u043c\u0435\u0441",q)}},
fI(a,b,c){if(!b.w.f&&!a.w.i(0,"i_dfo"))return
c.h(0,"r","\ud83c\udf0f",B.a,"\u0414\u0430\u043b\u044c\u043d\u0435\u0432\u043e\u0441\u0442\u043e\u0447\u043d\u044b\u0439 \u0433\u0435\u043a\u0442\u0430\u0440","\u041f\u0440\u0430\u0432\u043e \u043d\u0430 \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u044b\u0439 \u0437\u0435\u043c\u0435\u043b\u044c\u043d\u044b\u0439 \u0443\u0447\u0430\u0441\u0442\u043e\u043a \u0434\u043e 1 \u0433\u0430.",0,"1 \u0433\u0430 \u0437\u0435\u043c\u043b\u0438","benefit")},
hv(a,b,c){var s,r,q
if(b.w.d)return
s=a.f>0||a.w.i(0,"pregnant")
r=a.c==="student"||a.w.i(0,"i_stu")
if(!s&&!r)return
q=A.y([],t.s)
if(s)B.c.n(q,"\u0441\u0435\u043c\u044c\u044f\u043c \u0441 \u0434\u0435\u0442\u044c\u043c\u0438")
if(r)B.c.n(q,"\u0441\u0442\u0443\u0434\u0435\u043d\u0442\u0430\u043c")
c.h(0,"r","\ud83d\uddfa\ufe0f",B.a,"\u0420\u0435\u0433\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u0434\u043e\u043f\u043b\u0430\u0442\u044b","\u0412 \u0432\u0430\u0448\u0435\u043c \u0441\u0443\u0431\u044a\u0435\u043a\u0442\u0435 \u0420\u0424 \u043c\u043e\u0433\u0443\u0442 \u0434\u0435\u0439\u0441\u0442\u0432\u043e\u0432\u0430\u0442\u044c \u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0435 \u043c\u0435\u0440\u044b \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0438 "+B.c.T(q," \u0438 ")+" (\u0434\u043e\u043f\u043b\u0430\u0442\u044b \u043d\u0430 \u0434\u0435\u0442\u0435\u0439 \u0438 \u0448\u043a\u043e\u043b\u044c\u043d\u0438\u043a\u043e\u0432, \u0440\u0435\u0433\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u0441\u0442\u0438\u043f\u0435\u043d\u0434\u0438\u0430\u043b\u044c\u043d\u044b\u0435 \u043d\u0430\u0434\u0431\u0430\u0432\u043a\u0438, \u043b\u044c\u0433\u043e\u0442\u043d\u044b\u0439 \u043f\u0440\u043e\u0435\u0437\u0434). \u0420\u0430\u0437\u043c\u0435\u0440 \u0438 \u0443\u0441\u043b\u043e\u0432\u0438\u044f \u0437\u0430\u0432\u0438\u0441\u044f\u0442 \u043e\u0442 \u0440\u0435\u0433\u0438\u043e\u043d\u0430 \u2014 \u0443\u0442\u043e\u0447\u043d\u0438\u0442\u0435 \u0432 \u0441\u043e\u0446\u0437\u0430\u0449\u0438\u0442\u0435, \u041c\u0424\u0426 \u0438\u043b\u0438 \u043d\u0430 \u043f\u043e\u0440\u0442\u0430\u043b\u0435 \u0413\u043e\u0441\u0443\u0441\u043b\u0443\u0433.",0,"\u0443\u0442\u043e\u0447\u043d\u044f\u0439\u0442\u0435 \u0432 \u0440\u0435\u0433\u0438\u043e\u043d\u0435","benefit")},
hw(a,b,c){var s,r=b.w,q=r.ch
if(q==null)return
s=r.CW
if(a.f<s)return
$label0$0:{if(1===s){r="1-\u0433\u043e"
break $label0$0}if(2===s){r="2-\u0433\u043e"
break $label0$0}if(4===s){r="4-\u0433\u043e"
break $label0$0}if(5===s){r="5-\u0433\u043e"
break $label0$0}r="3-\u0433\u043e"
break $label0$0}c.h(0,"r","\ud83c\udfe6",B.e,"\u0420\u0435\u0433\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0439 \u043c\u0430\u0442\u0435\u0440\u0438\u043d\u0441\u043a\u0438\u0439 \u043a\u0430\u043f\u0438\u0442\u0430\u043b","\u0415\u0434\u0438\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u0430\u044f \u0432\u044b\u043f\u043b\u0430\u0442\u0430 \u043f\u0440\u0438 \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u0438 "+r+" \u0438 \u043f\u043e\u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0445 \u0434\u0435\u0442\u0435\u0439. \u0412 \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0440\u0435\u0433\u0438\u043e\u043d\u0430\u0445 \u0435\u0441\u0442\u044c \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f \u043f\u043e \u0432\u043e\u0437\u0440\u0430\u0441\u0442\u0443 \u0438\u043b\u0438 \u0434\u043e\u0445\u043e\u0434\u0443 \u2014 \u0443\u0442\u043e\u0447\u043d\u044f\u0439\u0442\u0435 \u0432 \u041c\u0424\u0426.",q,A.c(q,!1),"once")},
hZ(a,b,c){var s
if(!(a.c==="student"||a.w.i(0,"i_stu")))return
c.h(0,"w","\ud83c\udf93",B.e,"\u0421\u043e\u0446\u0438\u0430\u043b\u044c\u043d\u0430\u044f \u0441\u0442\u0438\u043f\u0435\u043d\u0434\u0438\u044f","\u0414\u043b\u044f \u043d\u0443\u0436\u0434\u0430\u044e\u0449\u0438\u0445\u0441\u044f \u0441\u0442\u0443\u0434\u0435\u043d\u0442\u043e\u0432 \u043e\u0447\u043d\u043e\u0439 \u0444\u043e\u0440\u043c\u044b (\u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0430\u0435\u0442\u0441\u044f \u0441\u043f\u0440\u0430\u0432\u043a\u043e\u0439). \u041c\u0438\u043d. \u043d\u043e\u0440\u043c\u0430\u0442\u0438\u0432 \u0434\u043b\u044f \u0432\u0443\u0437\u043e\u0432 \u0441 01.09.2025.",3340,A.c(3340,!1)+"/\u043c\u0435\u0441","monthly")
s=b.Q
s===$&&A.j()
if(s)c.h(0,"w","\ud83d\udcb0",B.e,"\u0413\u043e\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043d\u043d\u0430\u044f \u0430\u043a\u0430\u0434\u0435\u043c\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0441\u0442\u0438\u043f\u0435\u043d\u0434\u0438\u044f","\u0411\u0430\u0437\u043e\u0432\u0430\u044f \u0430\u043a\u0430\u0434\u0435\u043c\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0441\u0442\u0438\u043f\u0435\u043d\u0434\u0438\u044f \u0434\u043b\u044f \u043e\u0447\u043d\u0438\u043a\u043e\u0432 (\u043c\u0438\u043d. \u043d\u043e\u0440\u043c\u0430\u0442\u0438\u0432 \u0434\u043b\u044f \u0432\u0443\u0437\u043e\u0432).",2224,A.c(2224,!1)+"/\u043c\u0435\u0441","monthly")
c.h(0,"w","\ud83d\ude8c",B.a,"\u041b\u044c\u0433\u043e\u0442\u043d\u044b\u0439 \u043f\u0440\u043e\u0435\u0437\u0434\u043d\u043e\u0439 (\u0441\u0442\u0443\u0434\u0435\u043d\u0442)","\u0421\u043a\u0438\u0434\u043a\u0430 50% \u043d\u0430 \u0433\u043e\u0440\u043e\u0434\u0441\u043a\u043e\u0439 \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442 \u0432\u043e \u043c\u043d\u043e\u0433\u0438\u0445 \u0440\u0435\u0433\u0438\u043e\u043d\u0430\u0445.",0,"\u0441\u043a\u0438\u0434\u043a\u0430 50%","benefit")
if(a.w.i(0,"paid_edu"))c.h(0,"t","\ud83c\udf93",B.d,"\u0412\u044b\u0447\u0435\u0442 \u0437\u0430 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435 (\u0441\u0430\u043c \u0441\u0442\u0443\u0434\u0435\u043d\u0442)","13% \u043e\u0442 \u043e\u043f\u043b\u0430\u0442\u044b \u0437\u0430 \u0441\u0435\u0431\u044f, \u0434\u043e 150 000 \u20bd/\u0433\u043e\u0434.",19500,"\u0434\u043e "+A.c(19500,!1)+"/\u0433\u043e\u0434","once")},
i9(a,b,c){var s,r
if(a.c!=="unemployed_reg")return
s=b.e
s=s>0?s:Math.max(27093,b.c/b.d)
r=b.f>0?Math.min(B.b.p(s*0.75),15886):1863
c.h(0,"w","\ud83d\udcbc",B.a,"\u041f\u043e\u0441\u043e\u0431\u0438\u0435 \u043f\u043e \u0431\u0435\u0437\u0440\u0430\u0431\u043e\u0442\u0438\u0446\u0435","\u041f\u0435\u0440\u0432\u044b\u0435 3 \u043c\u0435\u0441: 75% \u0437\u0430\u0440\u043f\u043b\u0430\u0442\u044b, \u0434\u0430\u043b\u0435\u0435 60%, \u0434\u0430\u043b\u0435\u0435 45%. \u041c\u0438\u043d "+A.c(1863,!1)+", \u043c\u0430\u043a\u0441 "+A.c(15886,!1)+".",r,A.c(r,!1)+"/\u043c\u0435\u0441","monthly")},
he(a,b,c){var s,r
if(!a.w.i(0,"i_laid"))return
s=a.c
if(!(s==="unemployed_reg"||s==="unemployed"))return
r=b.e
r=r>0?r:Math.max(27093,b.c/b.d)
c.h(0,"w","\ud83d\udccb",B.a,"\u0412\u044b\u0445\u043e\u0434\u043d\u043e\u0435 \u043f\u043e\u0441\u043e\u0431\u0438\u0435 \u043f\u0440\u0438 \u0441\u043e\u043a\u0440\u0430\u0449\u0435\u043d\u0438\u0438","1 \u0441\u0440.\u043c\u0435\u0441. \u0437\u0430\u0440\u043f\u043b\u0430\u0442\u0430 \u0441\u0440\u0430\u0437\u0443 + \u0435\u0449\u0451 \u0434\u043e 2 \u043c\u0435\u0441. \u043f\u0440\u0438 \u043d\u0435\u0442\u0440\u0443\u0434\u043e\u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0435.",r,"\u2248 "+A.c(r,!1)+" \xd7 1\u20133 \u043c\u0435\u0441.","once")},
h7(a,b,c){var s,r,q,p,o
if(!a.w.i(0,"high_utility")){s=b.Q
s===$&&A.j()
s=!s}else s=!1
if(s)return
r=A.bt("")
if(r==null)r=0
s=b.c
q=s*0.22
p=A.dk()
o=A.dk()
if(r>0){p.sF(Math.max(0,B.b.p(r-q)))
o.sF("\u0420\u0430\u0441\u0445\u043e\u0434\u044b \u0416\u041a\u0425 "+A.c(r,!1)+" \u2212 22% \u0434\u043e\u0445\u043e\u0434\u0430 "+A.c(B.b.p(q),!1)+" = "+A.c(p.E(),!1)+".")}else{p.sF(Math.max(300,B.b.p(s*0.04)))
o.sF("\u041e\u0440\u0438\u0435\u043d\u0442\u0438\u0440: \u0435\u0441\u043b\u0438 \u0416\u041a\u0425 > 22% \u0434\u043e\u0445\u043e\u0434\u0430 ("+A.c(B.b.p(q),!1)+"/\u043c\u0435\u0441). \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0440\u0430\u0441\u0445\u043e\u0434\u044b \u043d\u0430 \u0416\u041a\u0425 \u0432 \u0448\u0430\u0433\u0435 4 \u0434\u043b\u044f \u0442\u043e\u0447\u043d\u043e\u0433\u043e \u0440\u0430\u0441\u0447\u0451\u0442\u0430.")}c.h(0,"h","\ud83c\udfe0",B.e,"\u0421\u0443\u0431\u0441\u0438\u0434\u0438\u044f \u043d\u0430 \u043e\u043f\u043b\u0430\u0442\u0443 \u0416\u041a\u0425",o.E(),p.E(),"~"+A.c(p.E(),!1)+"/\u043c\u0435\u0441","monthly")},
hq(a,b,c){var s,r,q
if(!(a.w.i(0,"i_pen")||a.c==="pensioner"))return
s=b.w
r=B.aI.A(0,s.a)
if(r==null)r=16288
if(!(s.ax!=null&&a.d==="moscow")){s=b.y
s===$&&A.j()
s=s<r}else s=!1
if(s){s=A.c(r,!1)
q=b.y
q===$&&A.j()
c.h(0,"p","\ud83d\udc74",B.e,"\u0414\u043e\u043f\u043b\u0430\u0442\u0430 \u043a \u043f\u0435\u043d\u0441\u0438\u0438 \u0434\u043e \u041f\u041c \u043f\u0435\u043d\u0441\u0438\u043e\u043d\u0435\u0440\u0430","\u0420\u0435\u0433\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u0430\u044f \u0441\u043e\u0446\u0438\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043e\u043f\u043b\u0430\u0442\u0430 \u043d\u0435\u0440\u0430\u0431\u043e\u0442\u0430\u044e\u0449\u0435\u043c\u0443 \u043f\u0435\u043d\u0441\u0438\u043e\u043d\u0435\u0440\u0443 \u0434\u043e \u041f\u041c \u043f\u0435\u043d\u0441\u0438\u043e\u043d\u0435\u0440\u0430 \u0432 \u0432\u0430\u0448\u0435\u043c \u0440\u0435\u0433\u0438\u043e\u043d\u0435 ("+s+"). \u041d\u0430\u0437\u043d\u0430\u0447\u0430\u0435\u0442\u0441\u044f \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u0447\u0435\u0440\u0435\u0437 \u0421\u0424\u0420/\u0441\u043e\u0446\u0437\u0430\u0449\u0438\u0442\u0443.",Math.max(0,r-q),"\u0434\u043e "+A.c(r,!1)+"/\u043c\u0435\u0441","monthly")}if(b.b>=80)c.h(0,"p","\ud83e\uddd3",B.e,"\u041d\u0430\u0434\u0431\u0430\u0432\u043a\u0430 80+","\u0424\u0438\u043a\u0441. \u0432\u044b\u043f\u043b\u0430\u0442\u0430 \u0443\u0434\u0432\u0430\u0438\u0432\u0430\u0435\u0442\u0441\u044f.",9584.69,"+"+A.c(9584.69,!1)+"/\u043c\u0435\u0441","monthly")
c.h(0,"p","\u2764\ufe0f\u200d\ud83d\udd25",B.a,"\u0418\u043d\u0434\u0435\u043a\u0441\u0430\u0446\u0438\u044f 2026","\u0421\u0442\u0440\u0430\u0445\u043e\u0432\u044b\u0435 \u043f\u0435\u043d\u0441\u0438\u0438 +7,6%.",0,"+7,6%","benefit")},
fJ(a,b,c){var s="s",r="\u041c\u0430\u043a\u0441. \u043f\u0440\u0438 \u043e\u0442\u043a\u0430\u0437\u0435 \u043e\u0442 \u041d\u0421\u0423. \u041f\u0440\u0438 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0438 \u043b\u044c\u0433\u043e\u0442 \u043d\u0430\u0442\u0443\u0440\u043e\u0439: \u2212",q="monthly",p="\u0441\u0442\u0430\u0436 + \u043d\u0430\u0434\u0431\u0430\u0432\u043a\u0430 \u0432 \u043f\u0435\u043d\u0441\u0438\u0438",o="benefit",n=a.w
if(n.i(0,"i_dis1"))c.h(0,s,"\u267f",B.e,"\u0415\u0414\u0412 \u2014 \u0438\u043d\u0432\u0430\u043b\u0438\u0434 I \u0433\u0440.",r+A.c(1825.25,!0)+"/\u043c\u0435\u0441.",6157.22,"~"+A.c(6157.22,!0)+"/\u043c\u0435\u0441",q)
if(n.i(0,"i_dis2"))c.h(0,s,"\u267f",B.e,"\u0415\u0414\u0412 \u2014 \u0438\u043d\u0432\u0430\u043b\u0438\u0434 II \u0433\u0440.",r+A.c(1825.25,!0)+"/\u043c\u0435\u0441.",4397.23,"~"+A.c(4397.23,!0)+"/\u043c\u0435\u0441",q)
if(n.i(0,"i_dis3"))c.h(0,s,"\u267f",B.a,"\u0415\u0414\u0412 \u2014 \u0438\u043d\u0432\u0430\u043b\u0438\u0434 III \u0433\u0440.",r+A.c(1825.25,!0)+"/\u043c\u0435\u0441.",3520.01,"~"+A.c(3520.01,!0)+"/\u043c\u0435\u0441",q)
if(n.i(0,"has_dis1")&&a.c!=="employed")c.h(0,s,"\ud83e\udd1d",B.a,"\u0423\u0445\u043e\u0434 \u0437\u0430 \u0438\u043d\u0432\u0430\u043b\u0438\u0434\u043e\u043c I \u0433\u0440.","\u0412\u044b\u043f\u043b\u0430\u0442\u0430 1 200 \u20bd \u0443\u0445\u0430\u0436\u0438\u0432\u0430\u044e\u0449\u0435\u043c\u0443 \u043e\u0442\u043c\u0435\u043d\u0435\u043d\u0430 \u0441 2025. \u041d\u0430\u0434\u0431\u0430\u0432\u043a\u0430 ~1 414 \u20bd \u0432\u0445\u043e\u0434\u0438\u0442 \u0432 \u043f\u0435\u043d\u0441\u0438\u044e \u0438\u043d\u0432\u0430\u043b\u0438\u0434\u0430; \u0443\u0445\u0430\u0436\u0438\u0432\u0430\u044e\u0449\u0435\u043c\u0443 \u2014 \u0441\u0442\u0430\u0436 1,8 \u0418\u041f\u041a/\u0433\u043e\u0434.",0,p,o)
if(n.i(0,"elderly80")&&a.c!=="employed")c.h(0,s,"\ud83e\uddd3",B.a,"\u0423\u0445\u043e\u0434 \u0437\u0430 \u043f\u043e\u0436\u0438\u043b\u044b\u043c 80+","\u0412\u044b\u043f\u043b\u0430\u0442\u0430 1 200 \u20bd \u0443\u0445\u0430\u0436\u0438\u0432\u0430\u044e\u0449\u0435\u043c\u0443 \u043e\u0442\u043c\u0435\u043d\u0435\u043d\u0430 \u0441 2025. \u041d\u0430\u0434\u0431\u0430\u0432\u043a\u0430 ~1 414 \u20bd \u0432\u0445\u043e\u0434\u0438\u0442 \u0432 \u043f\u0435\u043d\u0441\u0438\u044e \u043f\u043e\u0436\u0438\u043b\u043e\u0433\u043e; \u0443\u0445\u0430\u0436\u0438\u0432\u0430\u044e\u0449\u0435\u043c\u0443 \u2014 \u0441\u0442\u0430\u0436 1,8 \u0418\u041f\u041a/\u0433\u043e\u0434.",0,p,o)
if(n.i(0,"has_dis2")||n.i(0,"has_dis3"))c.h(0,s,"\ud83e\udd1d",B.a,"\u0423\u0445\u043e\u0434 \u0437\u0430 \u0438\u043d\u0432\u0430\u043b\u0438\u0434\u043e\u043c II/III \u0433\u0440.","\u0417\u0430 \u0443\u0445\u043e\u0434 \u0437\u0430 \u0438\u043d\u0432\u0430\u043b\u0438\u0434\u043e\u043c II \u0438\u043b\u0438 III \u0433\u0440\u0443\u043f\u043f\u044b \u043a\u043e\u043c\u043f\u0435\u043d\u0441\u0430\u0446\u0438\u044f \u0438 \u043f\u0435\u043d\u0441\u0438\u043e\u043d\u043d\u044b\u0439 \u0441\u0442\u0430\u0436 \u0443\u0445\u0430\u0436\u0438\u0432\u0430\u044e\u0449\u0435\u043c\u0443 \u043d\u0435 \u043f\u0440\u0435\u0434\u0443\u0441\u043c\u043e\u0442\u0440\u0435\u043d\u044b (\u0432 \u043e\u0442\u043b\u0438\u0447\u0438\u0435 \u043e\u0442 I \u0433\u0440\u0443\u043f\u043f\u044b). \u0421\u0430\u043c \u0438\u043d\u0432\u0430\u043b\u0438\u0434 \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u0442 \u043f\u0435\u043d\u0441\u0438\u044e \u043f\u043e \u0438\u043d\u0432\u0430\u043b\u0438\u0434\u043d\u043e\u0441\u0442\u0438 \u0438 \u0415\u0414\u0412.",0,"\u0432\u044b\u043f\u043b\u0430\u0442\u044b \u0443\u0445\u0430\u0436\u0438\u0432\u0430\u044e\u0449\u0435\u043c\u0443 \u043d\u0435\u0442",o)},
ht(a,b,c){var s,r,q,p=a.w
if(!p.i(0,"own_home"))return
s=p.i(0,"i_pen")||a.c==="pensioner"
r=p.i(0,"i_dis1")||p.i(0,"i_dis2")
q=a.f>=3
if(!(s||r||q))return
c.h(0,"t","\ud83c\udfe0",B.d,"\u041b\u044c\u0433\u043e\u0442\u0430 \u043f\u043e \u043d\u0430\u043b\u043e\u0433\u0443 \u043d\u0430 \u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u043e","\u041e\u0441\u0432\u043e\u0431\u043e\u0436\u0434\u0435\u043d\u0438\u0435 \u043e\u0442 \u043d\u0430\u043b\u043e\u0433\u0430 \u043d\u0430 \u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u043e \u043d\u0430 \u043e\u0434\u0438\u043d \u043e\u0431\u044a\u0435\u043a\u0442 \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u0432\u0438\u0434\u0430 (\u043a\u0432\u0430\u0440\u0442\u0438\u0440\u0430, \u0434\u043e\u043c, \u0433\u0430\u0440\u0430\u0436) \u2014 \u0434\u043b\u044f \u043f\u0435\u043d\u0441\u0438\u043e\u043d\u0435\u0440\u043e\u0432 \u0438 \u0438\u043d\u0432\u0430\u043b\u0438\u0434\u043e\u0432 I\u2013II \u0433\u0440\u0443\u043f\u043f. \u041c\u043d\u043e\u0433\u043e\u0434\u0435\u0442\u043d\u044b\u043c \u0441\u0435\u043c\u044c\u044f\u043c \u2014 \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u0432\u044b\u0447\u0435\u0442 (\u0441\u0442. 407 \u041d\u041a \u0420\u0424).",0,"\u043e\u0441\u0432\u043e\u0431\u043e\u0436\u0434\u0435\u043d\u0438\u0435 \u043e\u0442 \u043d\u0430\u043b\u043e\u0433\u0430","benefit")},
fC(a,b,c){if(!a.w.i(0,"communal"))return
c.h(0,"h","\ud83c\udfd8\ufe0f",B.a,"\u0420\u0430\u0441\u0441\u0435\u043b\u0435\u043d\u0438\u0435 \u043a\u043e\u043c\u043c\u0443\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u043a\u0432\u0430\u0440\u0442\u0438\u0440","\u041f\u0440\u043e\u0436\u0438\u0432\u0430\u043d\u0438\u0435 \u0432 \u043a\u043e\u043c\u043c\u0443\u043d\u0430\u043b\u044c\u043d\u043e\u0439 \u043a\u0432\u0430\u0440\u0442\u0438\u0440\u0435 \u2014 \u043e\u0441\u043d\u043e\u0432\u0430\u043d\u0438\u0435 \u0434\u043b\u044f \u043f\u043e\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043d\u0430 \u0443\u0447\u0451\u0442 \u043f\u043e \u0443\u043b\u0443\u0447\u0448\u0435\u043d\u0438\u044e \u0436\u0438\u043b\u0438\u0449\u043d\u044b\u0445 \u0443\u0441\u043b\u043e\u0432\u0438\u0439. \u0412\u043e \u043c\u043d\u043e\u0433\u0438\u0445 \u0440\u0435\u0433\u0438\u043e\u043d\u0430\u0445 \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u044e\u0442 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u044b \u0440\u0430\u0441\u0441\u0435\u043b\u0435\u043d\u0438\u044f \u0438 \u0441\u0443\u0431\u0441\u0438\u0434\u0438\u0438 \u2014 \u0443\u0442\u043e\u0447\u043d\u044f\u0439\u0442\u0435 \u0432 \u041c\u0424\u0426 \u0438\u043b\u0438 \u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438.",0,"\u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u044b \u0440\u0435\u0433\u0438\u043e\u043d\u0430","benefit")},
hG(a,b,c){var s
if(a.w.i(0,"i_sc")){s=b.Q
s===$&&A.j()
s=!s}else s=!0
if(s)return
c.h(0,"s","\ud83d\udcdd",B.e,"\u0421\u043e\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0439 \u043a\u043e\u043d\u0442\u0440\u0430\u043a\u0442: \u041e\u0442\u043a\u0440\u044b\u0442\u0438\u0435 \u0441\u0432\u043e\u0435\u0433\u043e \u0434\u0435\u043b\u0430 / \u0418\u041f","\u0415\u0434\u0438\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u0430\u044f \u0431\u0435\u0437\u0432\u043e\u0437\u043c\u0435\u0437\u0434\u043d\u0430\u044f \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430 \u043c\u0430\u043b\u043e\u0438\u043c\u0443\u0449\u0438\u043c \u0441\u0435\u043c\u044c\u044f\u043c.",35e4,"\u0434\u043e "+A.c(35e4,!1),"once")},
hl(a,b,c){var s=a.w
if(s.i(0,"i_mil")){c.h(0,"m","\ud83c\udf96\ufe0f",B.a,"\u0412\u044b\u043f\u043b\u0430\u0442\u0430 \u043f\u0440\u0438 \u0437\u0430\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0438 \u043a\u043e\u043d\u0442\u0440\u0430\u043a\u0442\u0430","\u0424\u0435\u0434\u0435\u0440\u0430\u043b\u044c\u043d\u0430\u044f + \u0440\u0435\u0433\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u0430\u044f.",4e5,"\u043e\u0442 "+A.c(4e5,!1),"once")
c.h(0,"m","\ud83d\udcb0",B.a,"\u0411\u043e\u0435\u0432\u044b\u0435 \u043d\u0430\u0434\u0431\u0430\u0432\u043a\u0438","\u0415\u0436\u0435\u043c\u0435\u0441\u044f\u0447\u043d\u044b\u0435 \u0434\u043e\u043f\u043b\u0430\u0442\u044b.",5e4,"\u043e\u0442 "+A.c(5e4,!1)+"/\u043c\u0435\u0441","monthly")}if(s.i(0,"i_vet"))c.h(0,"m","\ud83c\udfc5",B.a,"\u0415\u0414\u0412 \u0432\u0435\u0442\u0435\u0440\u0430\u043d\u0430 \u0431\u043e\u0435\u0432\u044b\u0445 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439","\u0415\u0436\u0435\u043c\u0435\u0441\u044f\u0447\u043d\u0430\u044f \u0434\u0435\u043d\u0435\u0436\u043d\u0430\u044f \u0432\u044b\u043f\u043b\u0430\u0442\u0430 \u0443\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u0443 \u0411\u0414. \u0421 01.02.2026.",4838.63,A.c(4838.63,!0)+"/\u043c\u0435\u0441","monthly")},
ib(a,b,c){if(!a.w.i(0,"vet_fam"))return
c.h(0,"m","\ud83c\udfc5",B.a,"\u0415\u0414\u0412 \u0441\u0435\u043c\u044c\u0435 \u0432\u0435\u0442\u0435\u0440\u0430\u043d\u0430 \u0411\u0414","\u0415\u0436\u0435\u043c\u0435\u0441\u044f\u0447\u043d\u0430\u044f \u0432\u044b\u043f\u043b\u0430\u0442\u0430 \u0441\u0435\u043c\u044c\u0435 \u0443\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u0430/\u043f\u043e\u0433\u0438\u0431\u0448\u0435\u0433\u043e. \u0421 01.02.2026.",4838.63,A.c(4838.63,!0)+"/\u043c\u0435\u0441","monthly")
c.h(0,"m","\ud83d\udee1\ufe0f",B.a,"\u0421\u0442\u0440\u0430\u0445\u043e\u0432\u0430\u044f \u0432\u044b\u043f\u043b\u0430\u0442\u0430 \u0441\u0435\u043c\u044c\u0435 \u043f\u043e\u0433\u0438\u0431\u0448\u0435\u0433\u043e","\u041f\u0440\u0438 \u0433\u0438\u0431\u0435\u043b\u0438 \u0432\u043e\u0435\u043d\u043d\u043e\u0441\u043b\u0443\u0436\u0430\u0449\u0435\u0433\u043e: \u0435\u0434\u0438\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u0430\u044f \u0441\u0442\u0440\u0430\u0445\u043e\u0432\u0430\u044f \u0432\u044b\u043f\u043b\u0430\u0442\u0430.",3e6,"\u043e\u0442 "+A.c(3e6,!1)+" (\u0435\u0434\u0438\u043d\u043e\u0432\u0440.)","once")
c.h(0,"m","\ud83d\udcb0",B.a,"\u0415\u0436\u0435\u043c\u0435\u0441\u044f\u0447\u043d\u0430\u044f \u0432\u044b\u043f\u043b\u0430\u0442\u0430 \u0441\u0435\u043c\u044c\u0435 \u043f\u043e\u0433\u0438\u0431\u0448\u0435\u0433\u043e","\u0427\u043b\u0435\u043d\u0430\u043c \u0441\u0435\u043c\u044c\u0438 \u043f\u043e\u0433\u0438\u0431\u0448\u0435\u0433\u043e \u0432\u043e\u0435\u043d\u043d\u043e\u0441\u043b\u0443\u0436\u0430\u0449\u0435\u0433\u043e.",27566,A.c(27566,!1)+"/\u043c\u0435\u0441","monthly")},
h6(a,b,c){var s="a",r="monthly",q="benefit",p=a.w
if(p.i(0,"i_vet_trud")){c.h(0,s,"\ud83c\udfc6",B.a,"\u0412\u0435\u0442\u0435\u0440\u0430\u043d \u0442\u0440\u0443\u0434\u0430 \u2014 \u0440\u0435\u0433\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u043b\u044c\u0433\u043e\u0442\u044b","\u0414\u043e\u043f\u043b\u0430\u0442\u0430 \u043a \u043f\u0435\u043d\u0441\u0438\u0438, \u0441\u043a\u0438\u0434\u043a\u0438 \u043d\u0430 \u0416\u041a\u0425 (50%), \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442 \u0438 \u043b\u0435\u043a\u0430\u0440\u0441\u0442\u0432\u0430. \u0420\u0430\u0437\u043c\u0435\u0440 \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043e\u0442 \u0440\u0435\u0433\u0438\u043e\u043d\u0430: \u0432 \u0441\u0440\u0435\u0434\u043d\u0435\u043c 1 000\u20135 000 \u20bd/\u043c\u0435\u0441.",2000,"~1 000\u20135 000 \u20bd/\u043c\u0435\u0441",r)
c.h(0,s,"\ud83d\ude8c",B.a,"\u0412\u0435\u0442\u0435\u0440\u0430\u043d \u0442\u0440\u0443\u0434\u0430 \u2014 \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u044b\u0439 \u043f\u0440\u043e\u0435\u0437\u0434","\u041f\u0440\u0430\u0432\u043e \u043d\u0430 \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u044b\u0439 \u043f\u0440\u043e\u0435\u0437\u0434 \u0432 \u0433\u043e\u0440\u043e\u0434\u0441\u043a\u043e\u043c \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u0435 (\u0440\u0435\u0433\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0439 \u0437\u0430\u043a\u043e\u043d).",0,"\u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u044b\u0439 \u043f\u0440\u043e\u0435\u0437\u0434",q)}if(p.i(0,"i_honored")){c.h(0,s,"\ud83c\udf96\ufe0f",B.h,"\u041d\u0430\u0434\u0431\u0430\u0432\u043a\u0430 \xab\u0417\u0430\u0441\u043b\u0443\u0436\u0435\u043d\u043d\u044b\u0439\xbb","\u0420\u0435\u0433\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043e\u043f\u043b\u0430\u0442\u0430 \u043a \u043f\u0435\u043d\u0441\u0438\u0438 \u0437\u0430 \u043f\u043e\u0447\u0451\u0442\u043d\u043e\u0435 \u0437\u0432\u0430\u043d\u0438\u0435 \u0420\u0424. \u0420\u0430\u0437\u043c\u0435\u0440 \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043e\u0442 \u0440\u0435\u0433\u0438\u043e\u043d\u0430: \u043e\u0431\u044b\u0447\u043d\u043e 1 000\u20133 000 \u20bd/\u043c\u0435\u0441.",1500,"~1 000\u20133 000 \u20bd/\u043c\u0435\u0441",r)
c.h(0,s,"\ud83c\udf97\ufe0f",B.h,"\u0421\u0442\u0438\u043f\u0435\u043d\u0434\u0438\u044f \u041f\u0440\u0435\u0437\u0438\u0434\u0435\u043d\u0442\u0430 \u0420\u0424","\u0414\u043b\u044f \u0417\u0430\u0441\u043b\u0443\u0436\u0435\u043d\u043d\u044b\u0445 \u043c\u0430\u0441\u0442\u0435\u0440\u043e\u0432 \u0441\u043f\u043e\u0440\u0442\u0430 \u0438 \u0434\u0435\u044f\u0442\u0435\u043b\u0435\u0439 \u043a\u0443\u043b\u044c\u0442\u0443\u0440\u044b \u2014 \u0435\u0434\u0438\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u0438 \u0435\u0436\u0435\u043c\u0435\u0441\u044f\u0447\u043d\u044b\u0435 \u0432\u044b\u043f\u043b\u0430\u0442\u044b \u043f\u043e \u0423\u043a\u0430\u0437\u0443 \u041f\u0440\u0435\u0437\u0438\u0434\u0435\u043d\u0442\u0430.",0,"\u043f\u043e \u0423\u043a\u0430\u0437\u0443 \u041f\u0440\u0435\u0437\u0438\u0434\u0435\u043d\u0442\u0430",q)}if(p.i(0,"i_people_art"))c.h(0,s,"\ud83c\udf1f",B.h,"\u041d\u0430\u0434\u0431\u0430\u0432\u043a\u0430 \xab\u041d\u0430\u0440\u043e\u0434\u043d\u044b\u0439 \u0430\u0440\u0442\u0438\u0441\u0442 / \u0434\u0435\u044f\u0442\u0435\u043b\u044c\xbb","\u0424\u0435\u0434\u0435\u0440\u0430\u043b\u044c\u043d\u0430\u044f \u043d\u0430\u0434\u0431\u0430\u0432\u043a\u0430 \u043a \u043f\u0435\u043d\u0441\u0438\u0438: 500% \u041f\u041c \u043f\u0435\u043d\u0441\u0438\u043e\u043d\u0435\u0440\u0430 (\u0423\u043a\u0430\u0437 \u041f\u0440\u0435\u0437\u0438\u0434\u0435\u043d\u0442\u0430 \u0420\u0424 \u2116 1584). \u041f\u043b\u044e\u0441 \u0440\u0435\u0433\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u0434\u043e\u043f\u043b\u0430\u0442\u044b.",47923.450000000004,"~"+A.c(47923.450000000004,!1)+"/\u043c\u0435\u0441",r)
if(p.i(0,"i_hero_labor")){c.h(0,s,"\u2b50",B.a,"\u0413\u0435\u0440\u043e\u0439 \u0422\u0440\u0443\u0434\u0430 \u0420\u0424 \u2014 \u0415\u0414\u0412","\u0415\u0436\u0435\u043c\u0435\u0441\u044f\u0447\u043d\u0430\u044f \u0434\u0435\u043d\u0435\u0436\u043d\u0430\u044f \u0432\u044b\u043f\u043b\u0430\u0442\u0430 \u0413\u0435\u0440\u043e\u044f\u043c \u0422\u0440\u0443\u0434\u0430 \u0420\u0424. \u0418\u043d\u0434\u0435\u043a\u0441\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u0435\u0436\u0435\u0433\u043e\u0434\u043d\u043e.",76458.4,A.c(76458.4,!0)+"/\u043c\u0435\u0441",r)
c.h(0,s,"\ud83c\udfe0",B.a,"\u0413\u0435\u0440\u043e\u0439 \u0422\u0440\u0443\u0434\u0430 \u0420\u0424 \u2014 \u043b\u044c\u0433\u043e\u0442\u044b","\u0411\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u044b\u0439 \u043f\u0440\u043e\u0435\u0437\u0434, 50% \u0441\u043a\u0438\u0434\u043a\u0430 \u043d\u0430 \u0416\u041a\u0425, \u043d\u0430\u043b\u043e\u0433\u043e\u0432\u044b\u0435 \u043b\u044c\u0433\u043e\u0442\u044b, \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u043e\u0435 \u043c\u0435\u0434\u043e\u0431\u0441\u043b\u0443\u0436\u0438\u0432\u0430\u043d\u0438\u0435.",0,"\u043f\u0430\u043a\u0435\u0442 \u043b\u044c\u0433\u043e\u0442",q)}},
hF(a,b,c){var s,r,q,p,o,n=a.w
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
n=n?"\u0421\u0430\u043c\u043e\u0437\u0430\u043d\u044f\u0442\u044b\u0439 \u0441 \u0434\u043e\u0431\u0440\u043e\u0432\u043e\u043b\u044c\u043d\u044b\u043c \u0441\u0442\u0440\u0430\u0445\u043e\u0432\u0430\u043d\u0438\u0435\u043c: \u043e\u0440\u0438\u0435\u043d\u0442\u0438\u0440 \u0440\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u043d \u043e\u0442 \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u043e\u0439 \u0441\u0442\u0440\u0430\u0445\u043e\u0432\u043e\u0439 \u0441\u0443\u043c\u043c\u044b (\u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e 35 000 \u20bd, \u0435\u0441\u043b\u0438 \u043d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d\u0430 \u0441\u0432\u043e\u044f \u0431\u0430\u0437\u0430).":""+B.b.H(p*100)+"% \u0441\u0440. \u0437\u0430\u0440\u0430\u0431\u043e\u0442\u043a\u0430 (\u0441\u0442\u0430\u0436 "+s+" \u043b\u0435\u0442). \u041c\u0430\u043a\u0441. \u0434\u043d\u0435\u0432\u043d\u043e\u0435: "+A.c(B.b.p(6827.397260273972),!1)+". \u041e\u0440\u0438\u0435\u043d\u0442\u0438\u0440 \u0437\u0430 \u043c\u0435\u0441\u044f\u0446: ~"+A.c(o,!1)+"."
c.h(0,"w","\ud83c\udfe5",B.e,"\u041f\u043e\u0441\u043e\u0431\u0438\u0435 \u043f\u043e \u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0439 \u043d\u0435\u0442\u0440\u0443\u0434\u043e\u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u0438",n,o,"~"+A.c(o,!1)+"/\u043c\u0435\u0441","monthly")},
fD(a,b,c){var s=a.w
if(s.i(0,"mil_conscript_spouse")&&a.b==="female"&&s.i(0,"pregnant")&&a.e==="married")c.h(0,"m","\ud83e\udd30",B.a,"\u041f\u043e\u0441\u043e\u0431\u0438\u0435 \u0431\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0439 \u0436\u0435\u043d\u0435 \u0432\u043e\u0435\u043d\u043d\u043e\u0441\u043b\u0443\u0436\u0430\u0449\u0435\u0433\u043e \u043f\u043e \u043f\u0440\u0438\u0437\u044b\u0432\u0443","\u0415\u0434\u0438\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u0430\u044f \u0444\u0435\u0434\u0435\u0440\u0430\u043b\u044c\u043d\u0430\u044f \u0432\u044b\u043f\u043b\u0430\u0442\u0430 \u0441\u0443\u043f\u0440\u0443\u0433\u0435 \u0432\u043e\u0435\u043d\u043d\u043e\u0441\u043b\u0443\u0436\u0430\u0449\u0435\u0433\u043e \u043f\u043e \u043f\u0440\u0438\u0437\u044b\u0432\u0443 \u043f\u0440\u0438 \u0441\u0440\u043e\u043a\u0435 \u0431\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u043d\u0435 \u043c\u0435\u043d\u0435\u0435 180 \u0434\u043d\u0435\u0439.",45054.24,A.c(45054.24,!0),"once")
if(s.i(0,"mil_conscript_child")&&a.f>0&&b.r<=3)c.h(0,"m","\ud83e\ude96",B.a,"\u041f\u043e\u0441\u043e\u0431\u0438\u0435 \u043d\u0430 \u0440\u0435\u0431\u0451\u043d\u043a\u0430 \u0432\u043e\u0435\u043d\u043d\u043e\u0441\u043b\u0443\u0436\u0430\u0449\u0435\u0433\u043e \u043f\u043e \u043f\u0440\u0438\u0437\u044b\u0432\u0443","\u0415\u0436\u0435\u043c\u0435\u0441\u044f\u0447\u043d\u0430\u044f \u0444\u0435\u0434\u0435\u0440\u0430\u043b\u044c\u043d\u0430\u044f \u0432\u044b\u043f\u043b\u0430\u0442\u0430 \u043d\u0430 \u0440\u0435\u0431\u0451\u043d\u043a\u0430 \u0432\u043e\u0435\u043d\u043d\u043e\u0441\u043b\u0443\u0436\u0430\u0449\u0435\u0433\u043e \u043f\u043e \u043f\u0440\u0438\u0437\u044b\u0432\u0443 \u0434\u043e \u0434\u043e\u0441\u0442\u0438\u0436\u0435\u043d\u0438\u044f \u0440\u0435\u0431\u0451\u043d\u043a\u043e\u043c 3 \u043b\u0435\u0442.",19308.96,A.c(19308.96,!0)+"/\u043c\u0435\u0441","monthly")},
fL(a,b,c){if(!a.w.i(0,"i_donor"))return
c.h(0,"s","\ud83e\ude78",B.a,"\u0415\u0414\u0412 \u041f\u043e\u0447\u0451\u0442\u043d\u043e\u0433\u043e \u0434\u043e\u043d\u043e\u0440\u0430 \u0420\u043e\u0441\u0441\u0438\u0438","\u0415\u0436\u0435\u0433\u043e\u0434\u043d\u0430\u044f \u0434\u0435\u043d\u0435\u0436\u043d\u0430\u044f \u0432\u044b\u043f\u043b\u0430\u0442\u0430 (\u0435\u0434\u0438\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e \u0440\u0430\u0437 \u0432 \u0433\u043e\u0434).",19497.68,A.c(19497.68,!0)+"/\u0433\u043e\u0434","once")
c.h(0,"s","\ud83c\udfe5",B.a,"\u041b\u044c\u0433\u043e\u0442\u044b \u041f\u043e\u0447\u0451\u0442\u043d\u043e\u0433\u043e \u0434\u043e\u043d\u043e\u0440\u0430","\u041e\u0442\u043f\u0443\u0441\u043a \u0432 \u0443\u0434\u043e\u0431\u043d\u043e\u0435 \u0432\u0440\u0435\u043c\u044f, \u043b\u044c\u0433\u043e\u0442\u043d\u044b\u0435 \u043f\u0443\u0442\u0451\u0432\u043a\u0438, \u0441\u043a\u0438\u0434\u043a\u0438 \u043d\u0430 \u043b\u0435\u0447\u0435\u043d\u0438\u0435.",0,"\u043f\u0430\u043a\u0435\u0442 \u043b\u044c\u0433\u043e\u0442","benefit")},
fB(a,b,c){var s,r,q,p,o,n,m,l=a.f
if(l>0){s=b.dx
s===$&&A.j()
if(s){s=b.z
s===$&&A.j()}else s=!1
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
hs(a,b,c){var s=a.w
if(s.i(0,"bought_recent")||s.i(0,"has_mortgage")){s=b.dx
s===$&&A.j()
if(s){s=b.z
s===$&&A.j()}else s=!1
s=!s}else s=!0
if(s)return
s=b.x
s===$&&A.j()
if(!(s>0))s=B.b.p(b.c*12*0.13)
c.h(0,"t","\ud83c\udfd8\ufe0f",B.d,"\u0418\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0439 \u0432\u044b\u0447\u0435\u0442","\u0414\u043e 260 000 \u20bd \u0437\u0430 \u043f\u043e\u043a\u0443\u043f\u043a\u0443 + \u0434\u043e 390 000 \u20bd \u043f\u043e \u0438\u043f\u043e\u0442\u0435\u0447\u043d\u044b\u043c %.",Math.min(s,26e4),"\u0434\u043e "+A.c(26e4,!1)+" + "+A.c(39e4,!1),"once")},
hk(a,b,c){var s
if(a.w.i(0,"paid_med")){s=b.dx
s===$&&A.j()
if(s){s=b.z
s===$&&A.j()}else s=!1
s=!s}else s=!0
if(s)return
c.h(0,"t","\ud83c\udfe5",B.d,"\u0412\u044b\u0447\u0435\u0442: \u043b\u0435\u0447\u0435\u043d\u0438\u0435","13% \u043e\u0442 \u0440\u0430\u0441\u0445\u043e\u0434\u043e\u0432 (\u0434\u043e 150 000 \u20bd/\u0433\u043e\u0434; \u0434\u043e\u0440\u043e\u0433\u043e\u0441\u0442\u043e\u044f\u0449\u0435\u0435 \u2014 \u0431\u0435\u0437 \u043b\u0438\u043c\u0438\u0442\u0430).",19500,"\u0434\u043e "+A.c(19500,!1)+"/\u0433\u043e\u0434","once")},
fM(a,b,c){var s
if(a.w.i(0,"paid_edu")){s=b.dx
s===$&&A.j()
if(s){s=b.z
s===$&&A.j()}else s=!1
s=!s}else s=!0
if(s)return
c.h(0,"t","\ud83c\udf93",B.d,"\u0412\u044b\u0447\u0435\u0442: \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435","13% \u043e\u0442 \u0440\u0430\u0441\u0445\u043e\u0434\u043e\u0432: \u0437\u0430 \u0441\u0435\u0431\u044f \u0434\u043e 150 000, \u0437\u0430 \u0434\u0435\u0442\u0435\u0439 \u0434\u043e 110 000.",14300,"\u0434\u043e "+A.c(14300,!1)+"/\u0433\u043e\u0434","once")},
h1(a,b,c){var s
if(a.w.i(0,"paid_fit")){s=b.dx
s===$&&A.j()
if(s){s=b.z
s===$&&A.j()}else s=!1
s=!s}else s=!0
if(s)return
c.h(0,"t","\ud83c\udfcb\ufe0f",B.d,"\u0412\u044b\u0447\u0435\u0442: \u0444\u0438\u0442\u043d\u0435\u0441","13% \u043e\u0442 \u0440\u0430\u0441\u0445\u043e\u0434\u043e\u0432 \u0432 \u0441\u043e\u0441\u0442\u0430\u0432\u0435 \u0435\u0434\u0438\u043d\u043e\u0433\u043e \u0441\u043e\u0446\u0432\u044b\u0447\u0435\u0442\u0430 (\u043e\u0431\u0449\u0438\u0439 \u043b\u0438\u043c\u0438\u0442 150 000 \u20bd/\u0433\u043e\u0434).",19500,"\u0434\u043e "+A.c(19500,!1)+"/\u0433\u043e\u0434","once")},
h8(a,b,c){var s
if(a.w.i(0,"has_iis")){s=b.dx
s===$&&A.j()
if(s){s=b.z
s===$&&A.j()}else s=!1
s=!s}else s=!0
if(s)return
c.h(0,"t","\ud83d\udcc8",B.d,"\u0412\u044b\u0447\u0435\u0442 \u0418\u0418\u0421 \u0442\u0438\u043f \u0410","13% \u043e\u0442 \u043f\u043e\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0434\u043e 400 000 \u20bd.",52e3,"\u0434\u043e "+A.c(52e3,!1)+"/\u0433\u043e\u0434","once")},
hf(a,b,c){var s
if(a.w.i(0,"life_ins")){s=b.dx
s===$&&A.j()
if(s){s=b.z
s===$&&A.j()}else s=!1
s=!s}else s=!0
if(s)return
c.h(0,"t","\ud83d\udee1\ufe0f",B.d,"\u0412\u044b\u0447\u0435\u0442: \u0441\u0442\u0440\u0430\u0445\u043e\u0432\u0430\u043d\u0438\u0435 \u0436\u0438\u0437\u043d\u0438","13% \u043e\u0442 \u0432\u0437\u043d\u043e\u0441\u043e\u0432 \u043f\u043e \u0434\u043e\u0433\u043e\u0432\u043e\u0440\u0430\u043c \u0441\u0442\u0440\u0430\u0445\u043e\u0432\u0430\u043d\u0438\u044f \u0436\u0438\u0437\u043d\u0438 (3+ \u043b\u0435\u0442) \u0432 \u0441\u043e\u0441\u0442\u0430\u0432\u0435 \u0435\u0434\u0438\u043d\u043e\u0433\u043e \u0441\u043e\u0446\u0432\u044b\u0447\u0435\u0442\u0430 (\u043b\u0438\u043c\u0438\u0442 150 000 \u20bd/\u0433\u043e\u0434).",19500,"\u0434\u043e "+A.c(19500,!1)+"/\u0433\u043e\u0434","once")},
fz(a,b,c){if(!a.w.i(0,"charity"))return
c.h(0,"t","\ud83d\udc9d",B.d,"\u0412\u044b\u0447\u0435\u0442: \u043f\u043e\u0436\u0435\u0440\u0442\u0432\u043e\u0432\u0430\u043d\u0438\u044f","13% \u043e\u0442 \u0441\u0443\u043c\u043c\u044b \u043f\u043e\u0436\u0435\u0440\u0442\u0432\u043e\u0432\u0430\u043d\u0438\u0439, \u043d\u043e \u043d\u0435 \u0431\u043e\u043b\u0435\u0435 25% \u043e\u0442 \u0433\u043e\u0434\u043e\u0432\u043e\u0433\u043e \u0434\u043e\u0445\u043e\u0434\u0430.",0,"\u0434\u043e 25% \u043e\u0442 \u0434\u043e\u0445\u043e\u0434\u0430","benefit")},
e_(a,b){var s,r
if(a.a.length===0)return null
s=A.dY(a)
r=A.dZ(a,b)
return new A.bQ(r,s==null?null:$.dT().A(0,s))},
dY(a){var s="methodology_family_support",r="indexation_2026",q="methodology_social_support"
switch(a.a){case"pregnancy_support":return"bir_2026"
case"mat_capital":case"adoption":if(B.f.i(a.b,"\u041c\u0430\u0442"))return"mat_capital_2026"
return s
case"care_leave":return"childcare_1_5_2026"
case"unified_children":return"unified_benefit_2026"
case"newborn":case"multi_child_mortgage":case"disabled_child":case"young_family":return s
case"child_tax_deduction":case"property_deduction":case"medical_deduction":case"education_deduction":case"fitness_deduction":case"iis_deduction":case"life_insurance_deduction":case"charity_deduction":return"methodology_tax_support"
case"student":case"unemployment":case"layoff":case"sick_leave":return"methodology_employment_support"
case"housing_subsidy":return"methodology_housing_support"
case"pension":return B.f.i(a.b,"\u0418\u043d\u0434\u0435\u043a\u0441\u0430\u0446\u0438\u044f")?r:"methodology_pension_support"
case"disability":case"social_contract":case"chernobyl":case"rehabilitated":case"property_tax_relief":case"communal_housing":return q
case"donor":return B.f.i(a.b,"\u041f\u043e\u0447\u0451\u0442\u043d\u043e\u0433\u043e \u0434\u043e\u043d\u043e\u0440\u0430")?r:q
case"military":case"veteran_family":return"methodology_military_support"
case"honors":return"methodology_honor_support"
case"north":case"moscow":case"dfo":case"regional_mat_cap":case"regional_extra_info":return"methodology_regional_support"}return null},
dZ(a,b){switch(a.a){case"pregnancy_support":return"\u041f\u043e\u0441\u043e\u0431\u0438\u0435 \u043f\u043e\u043a\u0430\u0437\u0430\u043d\u043e, \u043f\u043e\u0442\u043e\u043c\u0443 \u0447\u0442\u043e \u0432 \u0430\u043d\u043a\u0435\u0442\u0435 \u043e\u0442\u043c\u0435\u0447\u0435\u043d\u0430 \u0431\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0441\u0442\u044c \u0438 \u0432\u044b\u0431\u0440\u0430\u043d \u0436\u0435\u043d\u0441\u043a\u0438\u0439 \u043f\u043e\u043b."
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
case"military":return B.f.i(a.b,"\u0432\u0435\u0442\u0435\u0440\u0430\u043d\u0430")?"\u0412\u044b\u043f\u043b\u0430\u0442\u0430 \u043f\u043e\u043a\u0430\u0437\u0430\u043d\u0430, \u043f\u043e\u0442\u043e\u043c\u0443 \u0447\u0442\u043e \u043e\u0442\u043c\u0435\u0447\u0435\u043d \u0441\u0442\u0430\u0442\u0443\u0441 \u0432\u0435\u0442\u0435\u0440\u0430\u043d\u0430 \u0431\u043e\u0435\u0432\u044b\u0445 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439.":"\u0412\u043e\u0435\u043d\u043d\u0430\u044f \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430 \u043f\u043e\u043a\u0430\u0437\u0430\u043d\u0430, \u043f\u043e\u0442\u043e\u043c\u0443 \u0447\u0442\u043e \u043e\u0442\u043c\u0435\u0447\u0435\u043d \u0441\u0442\u0430\u0442\u0443\u0441 \u0432\u043e\u0435\u043d\u043d\u043e\u0441\u043b\u0443\u0436\u0430\u0449\u0435\u0433\u043e \u0438\u043b\u0438 \u0443\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u0430 \u0421\u0412\u041e."
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
A.cE.prototype={}
J.bb.prototype={
C(a,b){return a===b},
gq(a){return A.br(a)},
j(a){return"Instance of '"+A.bs(a)+"'"},
gt(a){return A.a7(A.cR(this))}}
J.bd.prototype={
j(a){return String(a)},
gq(a){return a?519018:218159},
gt(a){return A.a7(t.y)},
$il:1,
$iA:1}
J.ay.prototype={
C(a,b){return null==b},
j(a){return"null"},
gq(a){return 0},
$il:1}
J.aB.prototype={$ip:1}
J.U.prototype={
gq(a){return 0},
j(a){return String(a)}}
J.bq.prototype={}
J.aN.prototype={}
J.T.prototype={
j(a){var s=a[$.b4()]
if(s==null)return this.ah(a)
return"JavaScript function for "+J.ap(s)},
$iZ:1}
J.aA.prototype={
gq(a){return 0},
j(a){return String(a)}}
J.aC.prototype={
gq(a){return 0},
j(a){return String(a)}}
J.o.prototype={
n(a,b){A.R(a).c.a(b)
a.$flags&1&&A.cZ(a,29)
a.push(b)},
T(a,b){var s,r=A.eq(a.length,"",!1,t.N)
for(s=0;s<a.length;++s)this.D(r,s,A.m(a[s]))
return r.join(b)},
gR(a){if(a.length>0)return a[0]
throw A.i(A.d7())},
gaI(a){var s=a.length
if(s>0)return a[s-1]
throw A.i(A.d7())},
af(a,b){var s,r,q,p,o,n=A.R(a)
n.k("d(1,1)?").a(b)
a.$flags&2&&A.cZ(a,"sort")
s=a.length
if(s<2)return
if(s===2){r=a[0]
q=a[1]
n=b.$2(r,q)
if(typeof n!=="number")return n.aN()
if(n>0){a[0]=q
a[1]=r}return}p=0
if(n.c.b(null))for(o=0;o<a.length;++o)if(a[o]===void 0){a[o]=null;++p}a.sort(A.fE(b,2))
if(p>0)this.aq(a,p)},
aq(a,b){var s,r=a.length
for(;s=r-1,r>0;r=s)if(a[s]===null){a[s]=void 0;--b
if(b===0)break}},
j(a){return A.cD(a,"[","]")},
gu(a){return new J.ar(a,a.length,A.R(a).k("ar<1>"))},
gq(a){return A.br(a)},
gv(a){return a.length},
D(a,b,c){A.R(a).c.a(c)
a.$flags&2&&A.cZ(a)
if(!(b>=0&&b<a.length))throw A.i(A.dM(a,b))
a[b]=c},
$if:1,
$in:1}
J.bc.prototype={
aL(a){var s,r,q
if(!Array.isArray(a))return null
s=a.$flags|0
if((s&4)!==0)r="const, "
else if((s&2)!==0)r="unmodifiable, "
else r=(s&1)!==0?"fixed, ":""
q="Instance of '"+A.bs(a)+"'"
if(r==="")return q
return q+" ("+r+"length: "+a.length+")"}}
J.bZ.prototype={}
J.ar.prototype={
gm(){var s=this.d
return s==null?this.$ti.c.a(s):s},
l(){var s,r=this,q=r.a,p=q.length
if(r.b!==p){q=A.cB(q)
throw A.i(q)}s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0},
$iG:1}
J.az.prototype={
B(a,b){var s
A.dA(b)
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gG(b)
if(this.gG(a)===s)return 0
if(this.gG(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gG(a){return a===0?1/a<0:a<0},
H(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.i(A.c8(""+a+".toInt()"))},
aK(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.i(A.c8(""+a+".round()"))},
p(a){if(a<0)return-Math.round(-a)
else return Math.round(a)},
aB(a,b,c){if(B.i.B(b,c)>0)throw A.i(A.fx(b))
if(this.B(a,b)<0)return b
if(this.B(a,c)>0)return c
return a},
ad(a,b){var s
if(b>20)throw A.i(A.c3(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gG(a))return"-"+s
return s},
j(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gq(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
ae(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
return s+b},
au(a,b){return(a|0)===a?a/b|0:this.av(a,b)},
av(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.i(A.c8("Result of truncating division is "+A.m(s)+": "+A.m(a)+" ~/ "+b))},
gt(a){return A.a7(t.H)},
$ik:1,
$iaa:1}
J.ax.prototype={
gt(a){return A.a7(t.S)},
$il:1,
$id:1}
J.be.prototype={
gt(a){return A.a7(t.i)},
$il:1}
J.af.prototype={
I(a,b,c){return a.substring(b,A.eB(b,c,a.length))},
ag(a,b){return this.I(a,b,null)},
U(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(0>=o)return A.v(p,0)
if(p.charCodeAt(0)===133){s=J.ej(p,1)
if(s===o)return""}else s=0
r=o-1
if(!(r>=0))return A.v(p,r)
q=p.charCodeAt(r)===133?J.ek(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
i(a,b){return A.hW(a,b,0)},
j(a){return a},
gq(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gt(a){return A.a7(t.N)},
gv(a){return a.length},
$il:1,
$ic1:1,
$iu:1}
A.ag.prototype={
j(a){return"LateInitializationError: "+this.a}}
A.c5.prototype={}
A.aE.prototype={
gm(){var s=this.d
return s==null?this.$ti.c.a(s):s},
l(){var s,r=this,q=r.a,p=J.dN(q),o=p.gv(q)
if(r.b!==o)throw A.i(A.bT(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.aD(q,s);++r.c
return!0},
$iG:1}
A.H.prototype={
gu(a){return new A.a0(J.bJ(this.a),this.b,this.$ti.k("a0<1>"))}}
A.a0.prototype={
l(){var s,r
for(s=this.a,r=this.b;s.l();)if(r.$1(s.gm()))return!0
return!1},
gm(){return this.a.gm()},
$iG:1}
A.B.prototype={}
A.I.prototype={$r:"+(1,2)",$s:1}
A.b8.prototype={
j(a){return A.cF(this)},
ga4(){return new A.al(this.aF(),A.C(this).k("al<aF<1,2>>"))},
aF(){var s=this
return function(){var r=0,q=1,p=[],o,n,m,l,k
return function $async$ga4(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.gaH(),o=o.gu(o),n=A.C(s),m=n.y[1],n=n.k("aF<1,2>")
case 2:if(!o.l()){r=3
break}l=o.gm()
k=s.A(0,l)
r=4
return a.b=new A.aF(l,k==null?m.a(k):k,n),1
case 4:r=2
break
case 3:return 0
case 1:return a.c=p.at(-1),3}}}}}
A.O.prototype={
gv(a){return this.b.length},
ga_(){var s=this.$keys
if(s==null){s=Object.keys(this.a)
this.$keys=s}return s},
aC(a){if(typeof a!="string")return!1
if("__proto__"===a)return!1
return this.a.hasOwnProperty(a)},
A(a,b){if(!this.aC(b))return null
return this.b[this.a[b]]},
a6(a,b){var s,r,q,p
this.$ti.k("~(1,2)").a(b)
s=this.ga_()
r=this.b
for(q=s.length,p=0;p<q;++p)b.$2(s[p],r[p])},
gaH(){return new A.aQ(this.ga_(),this.$ti.k("aQ<1>"))}}
A.aQ.prototype={
gv(a){return this.a.length},
gu(a){var s=this.a
return new A.a1(s,s.length,this.$ti.k("a1<1>"))}}
A.a1.prototype={
gm(){var s=this.d
return s==null?this.$ti.c.a(s):s},
l(){var s=this,r=s.c
if(r>=s.b){s.d=null
return!1}s.d=s.a[r]
s.c=r+1
return!0},
$iG:1}
A.au.prototype={
n(a,b){A.C(this).c.a(b)
A.e7()}}
A.av.prototype={
gv(a){return this.b},
gu(a){var s,r=this,q=r.$keys
if(q==null){q=Object.keys(r.a)
r.$keys=q}s=q
return new A.a1(s,s.length,r.$ti.k("a1<1>"))}}
A.aM.prototype={}
A.S.prototype={
j(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.dS(r==null?"unknown":r)+"'"},
$iZ:1,
gaM(){return this},
$C:"$1",
$R:1,
$D:null}
A.b6.prototype={$C:"$0",$R:0}
A.b7.prototype={$C:"$2",$R:2}
A.bz.prototype={}
A.bx.prototype={
j(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.dS(s)+"'"}}
A.ad.prototype={
C(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.ad))return!1
return this.$_target===b.$_target&&this.a===b.a},
gq(a){return(A.dP(this.a)^A.br(this.$_target))>>>0},
j(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.bs(this.a)+"'")}}
A.c4.prototype={
j(a){return"RuntimeError: "+this.a}}
A.aD.prototype={
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
return q}else return this.aG(b)},
aG(a){var s,r,q=this.d
if(q==null)return null
s=q[this.a7(a)]
r=this.a8(s,a)
if(r<0)return null
return s[r].b},
D(a,b,c){var s,r,q,p,o,n,m=this,l=A.C(m)
l.c.a(b)
l.y[1].a(c)
if(typeof b=="string"){s=m.b
m.V(s==null?m.b=m.O():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=m.c
m.V(r==null?m.c=m.O():r,b,c)}else{q=m.d
if(q==null)q=m.d=m.O()
p=m.a7(b)
o=q[p]
if(o==null)q[p]=[m.P(b,c)]
else{n=m.a8(o,b)
if(n>=0)o[n].b=c
else o.push(m.P(b,c))}}},
a6(a,b){var s,r,q=this
A.C(q).k("~(1,2)").a(b)
s=q.e
r=q.r
while(s!=null){b.$2(s.a,s.b)
if(r!==q.r)throw A.i(A.bT(q))
s=s.c}},
V(a,b,c){var s,r=A.C(this)
r.c.a(b)
r.y[1].a(c)
s=a[b]
if(s==null)a[b]=this.P(b,c)
else s.b=c},
P(a,b){var s=this,r=A.C(s),q=new A.c_(r.c.a(a),r.y[1].a(b))
if(s.e==null)s.e=s.f=q
else s.f=s.f.c=q;++s.a
s.r=s.r+1&1073741823
return q},
a7(a){return J.P(a)&1073741823},
a8(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.bI(a[r].a,b))return r
return-1},
j(a){return A.cF(this)},
O(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s}}
A.c_.prototype={}
A.ct.prototype={
$1(a){return this.a(a)},
$S:5}
A.cu.prototype={
$2(a,b){return this.a(a,b)},
$S:6}
A.cv.prototype={
$1(a){return this.a(A.b1(a))},
$S:7}
A.a4.prototype={
j(a){return this.a2(!1)},
a2(a){var s,r,q,p,o,n=this.an(),m=this.Z(),l=(a?"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
if(!(q<m.length))return A.v(m,q)
o=m[q]
l=a?l+A.df(o):l+A.m(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
an(){var s,r=this.$s
while($.ce.length<=r)B.c.n($.ce,null)
s=$.ce[r]
if(s==null){s=this.aj()
B.c.D($.ce,r,s)}return s},
aj(){var s,r,q,p=this.$r,o=p.indexOf("("),n=p.substring(1,o),m=p.substring(o),l=m==="()"?0:m.replace(/[^,]/g,"").length+1,k=A.y(new Array(l),t.f)
for(s=0;s<l;++s)k[s]=s
if(n!==""){r=n.split(",")
s=r.length
for(q=l;s>0;){--q;--s
B.c.D(k,q,r[s])}}return A.dc(k,t.K)}}
A.ak.prototype={
Z(){return[this.a,this.b]},
C(a,b){if(b==null)return!1
return b instanceof A.ak&&this.$s===b.$s&&J.bI(this.a,b.a)&&J.bI(this.b,b.b)},
gq(a){return A.dd(this.$s,this.a,this.b,B.j)}}
A.bf.prototype={
j(a){return"RegExp/"+this.a+"/"+this.b.flags},
ga1(){var s=this,r=s.c
if(r!=null)return r
r=s.b
return s.c=A.d9(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,"g")},
az(a,b){return new A.bB(this,b,0)},
am(a,b){var s,r=this.ga1()
if(r==null)r=A.cN(r)
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
return new A.bE(s)},
$ic1:1,
$ieC:1}
A.bE.prototype={
gaE(){var s=this.b
return s.index+s[0].length},
A(a,b){var s=this.b
if(!(b<s.length))return A.v(s,b)
return s[b]},
$iaG:1,
$iaL:1}
A.bB.prototype={
gu(a){return new A.aP(this.a,this.b,this.c)}}
A.aP.prototype={
gm(){var s=this.d
return s==null?t.F.a(s):s},
l(){var s,r,q,p,o,n,m=this,l=m.b
if(l==null)return!1
s=m.c
r=l.length
if(s<=r){q=m.a
p=q.am(l,s)
if(p!=null){m.d=p
o=p.gaE()
if(p.b.index===o){s=!1
if(q.b.unicode){q=m.c
n=q+1
if(n<r){if(!(q>=0&&q<r))return A.v(l,q)
q=l.charCodeAt(q)
if(q>=55296&&q<=56319){if(!(n>=0))return A.v(l,n)
s=l.charCodeAt(n)
s=s>=56320&&s<=57343}}}o=(s?o+1:o)+1}m.c=o
return!0}}m.b=m.d=null
return!1},
$iG:1}
A.c9.prototype={
E(){var s=this.b
if(s===this)throw A.i(new A.ag("Local '' has not been initialized."))
return s},
sF(a){if(this.b!==this)throw A.i(new A.ag("Local '' has already been initialized."))
this.b=a}}
A.ah.prototype={
gt(a){return B.dr},
$il:1}
A.aJ.prototype={}
A.bh.prototype={
gt(a){return B.ds},
$il:1}
A.ai.prototype={
gv(a){return a.length},
$iD:1}
A.aH.prototype={$if:1,$in:1}
A.aI.prototype={$if:1,$in:1}
A.bi.prototype={
gt(a){return B.dt},
$il:1}
A.bj.prototype={
gt(a){return B.du},
$il:1}
A.bk.prototype={
gt(a){return B.dv},
$il:1}
A.bl.prototype={
gt(a){return B.dw},
$il:1}
A.bm.prototype={
gt(a){return B.dx},
$il:1}
A.bn.prototype={
gt(a){return B.dz},
$il:1}
A.bo.prototype={
gt(a){return B.dA},
$il:1}
A.aK.prototype={
gt(a){return B.dB},
gv(a){return a.length},
$il:1}
A.bp.prototype={
gt(a){return B.dC},
gv(a){return a.length},
$il:1}
A.aS.prototype={}
A.aT.prototype={}
A.aU.prototype={}
A.aV.prototype={}
A.L.prototype={
k(a){return A.b_(v.typeUniverse,this,a)},
W(a){return A.dx(v.typeUniverse,this,a)}}
A.bC.prototype={}
A.cf.prototype={
j(a){return A.E(this.a,null)}}
A.cb.prototype={
j(a){return this.a}}
A.bF.prototype={}
A.a5.prototype={
gm(){var s=this.b
return s==null?this.$ti.c.a(s):s},
ar(a,b){var s,r,q
a=A.b0(a)
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
o.d=null}q=o.ar(m,n)
if(1===q)return!0
if(0===q){o.b=null
p=o.e
if(p==null||p.length===0){o.a=A.ds
return!1}if(0>=p.length)return A.v(p,-1)
o.a=p.pop()
m=0
n=null
continue}if(2===q){m=0
n=null
continue}if(3===q){n=o.c
o.c=null
p=o.e
if(p==null||p.length===0){o.b=null
o.a=A.ds
throw n
return!1}if(0>=p.length)return A.v(p,-1)
o.a=p.pop()
m=1
continue}throw A.i(A.eE("sync*"))}return!1},
aO(a){var s,r,q=this
if(a instanceof A.al){s=a.a()
r=q.e
if(r==null)r=q.e=[]
B.c.n(r,q.a)
q.a=s
return 2}else{q.d=J.bJ(a)
return 2}},
$iG:1}
A.al.prototype={
gu(a){return new A.a5(this.a(),this.$ti.k("a5<1>"))}}
A.a2.prototype={
gu(a){var s=this,r=new A.aR(s,s.r,A.C(s).k("aR<1>"))
r.c=s.e
return r},
gv(a){return this.a},
i(a,b){var s,r
if(b!=="__proto__"){s=this.b
if(s==null)return!1
return t.g.a(s[b])!=null}else{r=this.ak(b)
return r}},
ak(a){var s=this.d
if(s==null)return!1
return this.N(s[this.K(a)],a)>=0},
n(a,b){var s,r,q=this
A.C(q).c.a(b)
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.X(s==null?q.b=A.cJ():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.X(r==null?q.c=A.cJ():r,b)}else return q.ai(b)},
ai(a){var s,r,q,p=this
A.C(p).c.a(a)
s=p.d
if(s==null)s=p.d=A.cJ()
r=p.K(a)
q=s[r]
if(q==null)s[r]=[p.J(a)]
else{if(p.N(q,a)>=0)return!1
q.push(p.J(a))}return!0},
aJ(a,b){var s
if(b!=="__proto__")return this.ap(this.b,b)
else{s=this.ao(b)
return s}},
ao(a){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.K(a)
r=n[s]
q=o.N(r,a)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.a3(p)
return!0},
X(a,b){A.C(this).c.a(b)
if(t.g.a(a[b])!=null)return!1
a[b]=this.J(b)
return!0},
ap(a,b){var s
if(a==null)return!1
s=t.g.a(a[b])
if(s==null)return!1
this.a3(s)
delete a[b]
return!0},
a0(){this.r=this.r+1&1073741823},
J(a){var s,r=this,q=new A.bD(A.C(r).c.a(a))
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.a0()
return q},
a3(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.a0()},
K(a){return J.P(a)&1073741823},
N(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.bI(a[r].a,b))return r
return-1}}
A.bD.prototype={}
A.aR.prototype={
gm(){var s=this.d
return s==null?this.$ti.c.a(s):s},
l(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.i(A.bT(q))
else if(r==null){s.d=null
return!1}else{s.d=s.$ti.k("1?").a(r.a)
s.c=r.b
return!0}},
$iG:1}
A.q.prototype={
gu(a){return new A.aE(a,a.length,A.b2(a).k("aE<q.E>"))},
aD(a,b){if(!(b<a.length))return A.v(a,b)
return a[b]},
j(a){return A.cD(a,"[","]")}}
A.bg.prototype={
gv(a){return this.a},
j(a){return A.cF(this)}}
A.c0.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.m(a)
r.a=(r.a+=s)+": "
s=A.m(b)
r.a+=s},
$S:8}
A.V.prototype={
aw(a,b){var s
A.C(this).k("f<1>").a(b)
for(s=b.gu(b);s.l();)this.n(0,s.gm())},
j(a){return A.cD(this,"{","}")},
T(a,b){var s,r,q=this.gu(this)
if(!q.l())return""
s=J.ap(q.gm())
if(!q.l())return s
if(b.length===0){r=s
do r+=A.m(q.gm())
while(q.l())}else{r=s
do r=r+b+A.m(q.gm())
while(q.l())}return r.charCodeAt(0)==0?r:r},
$if:1,
$ibv:1}
A.aW.prototype={}
A.bU.prototype={
$0(){var s=this
return A.b3(A.aq("("+s.a+", "+s.b+", "+s.c+", "+s.d+", "+s.e+", "+s.f+", "+s.r+", "+s.w+")"))},
$S:9}
A.ae.prototype={
C(a,b){var s
if(b==null)return!1
s=!1
if(b instanceof A.ae)if(this.a===b.a)s=this.b===b.b
return s},
gq(a){return A.dd(this.a,this.b,B.j,B.j)},
B(a,b){var s
t.k.a(b)
s=B.i.B(this.a,b.a)
if(s!==0)return s
return B.i.B(this.b,b.b)},
j(a){var s=this,r=A.e8(A.ey(s)),q=A.b9(A.ew(s)),p=A.b9(A.es(s)),o=A.b9(A.et(s)),n=A.b9(A.ev(s)),m=A.b9(A.ex(s)),l=A.d5(A.eu(s)),k=s.b,j=k===0?"":A.d5(k)
return r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l+j}}
A.ca.prototype={
j(a){return this.Y()}}
A.bV.prototype={}
A.bK.prototype={
j(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.bW(s)
return"Assertion failed"}}
A.c6.prototype={}
A.ab.prototype={
gM(){return"Invalid argument"+(!this.a?"(s)":"")},
gL(){return""},
j(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+p,n=s.gM()+q+o
if(!s.a)return n
return n+s.gL()+": "+A.bW(s.gS())},
gS(){return this.b}}
A.bu.prototype={
gS(){return A.dB(this.b)},
gM(){return"RangeError"},
gL(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.m(q):""
else if(q==null)s=": Not greater than or equal to "+A.m(r)
else if(q>r)s=": Not in inclusive range "+A.m(r)+".."+A.m(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.m(r)
return s}}
A.bY.prototype={
gS(){return A.b0(this.b)},
gM(){return"RangeError"},
gL(){if(A.b0(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gv(a){return this.f}}
A.bA.prototype={
j(a){return"Unsupported operation: "+this.a}}
A.c7.prototype={
j(a){return"UnimplementedError: "+this.a}}
A.bw.prototype={
j(a){return"Bad state: "+this.a}}
A.bS.prototype={
j(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.bW(s)+"."}}
A.cc.prototype={
j(a){return"Exception: "+this.a}}
A.bX.prototype={
j(a){var s=this.a,r=""!==s?"FormatException: "+s:"FormatException",q=this.b
if(q.length>78)q=B.f.I(q,0,75)+"..."
return r+"\n"+q}}
A.f.prototype={
a5(a,b,c,d){var s,r
d.a(b)
A.C(this).W(d).k("1(1,f.E)").a(c)
for(s=this.gu(this),r=b;s.l();)r=c.$2(r,s.gm())
return r},
gv(a){var s,r=this.gu(this)
for(s=0;r.l();)++s
return s},
j(a){return A.ef(this,"(",")")}}
A.aF.prototype={
j(a){return"MapEntry("+A.m(this.a)+": "+A.m(this.b)+")"}}
A.a_.prototype={
gq(a){return A.r.prototype.gq.call(this,0)},
j(a){return"null"}}
A.r.prototype={$ir:1,
C(a,b){return this===b},
gq(a){return A.br(this)},
j(a){return"Instance of '"+A.bs(this)+"'"},
gt(a){return A.h4(this)},
toString(){return this.j(this)}}
A.by.prototype={
gv(a){return this.a.length},
j(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
A.bR.prototype={}
A.bL.prototype={
aA(a){var s,r=this.al(a),q=A.R(r),p=q.k("A(1)")
q=q.k("H<1>")
s=t.i
return new A.bR(r,new A.H(r,p.a(new A.bM()),q).a5(0,0,new A.bN(),s),new A.H(r,p.a(new A.bO()),q).a5(0,0,new A.bP(),s))},
al(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=A.c2(a.a,null)
if(g==null)g=0
s=a.x
r=A.bt(s)
if(r==null)r=0
q=A.c2(a.y,null)
if(q==null)q=1
q=Math.max(1,q)
p=A.bt("")
if(p==null)p=0
o=A.c2("",null)
if(o==null)o=0
n=A.bt(a.r)
if(n==null)n=99
m=a.d
l=A.hu(m)
k=new A.at(a,g,r,q,p,o,n,l)
k.x=B.b.p(r*12*0.13)
n=k.y=r/q
s=k.z=B.f.U(s).length!==0
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
g=A.y([],t.E)
j=new A.as(g)
for(i=0;i<41;++i){h=B.aD[i]
j.b=h.a
h.b.$3(a,k,j)
j.b=""}g=A.dc(g,t.p)
g=A.y(g.slice(0),A.R(g))
return g}}
A.bM.prototype={
$1(a){return t.p.a(a).r==="monthly"},
$S:1}
A.bN.prototype={
$2(a,b){return A.cM(a)+t.p.a(b).w},
$S:2}
A.bO.prototype={
$1(a){return t.p.a(a).r==="once"},
$S:1}
A.bP.prototype={
$2(a,b){return A.cM(a)+t.p.a(b).w},
$S:2}
A.at.prototype={
gac(){var s=this.a.c
return s==="employed"||s==="self"||s==="ip"},
gaa(){var s=this.a.w
return!s.i(0,"excess_property")&&!s.i(0,"high_deposits")&&!s.i(0,"alimony_debt")},
gab(){if(this.c>0)return!0
var s=this.a
if(s.w.i(0,"valid_zero_income"))return!0
s=s.c
return s==="student"||s==="pensioner"||s==="caregiver"||s==="matleave"},
ga9(){var s=this,r=s.CW
r===$&&A.j()
if(r)r=(!s.gac()||s.c>=18062)&&s.gaa()&&s.gab()
else r=!1
return r}}
A.as.prototype={
h(a,b,c,d,e,f,g,h,i){B.c.n(this.a,new A.Q(this.b,e,b,f,h,i,g))}}
A.h.prototype={}
A.t.prototype={}
A.e.prototype={}
A.a.prototype={}
A.ba.prototype={
Y(){return"EventTarget."+this.b}}
A.K.prototype={}
A.cp.prototype={
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
$S:10}
A.cq.prototype={
$2(a,b){var s=t.t
return s.a(a).e.B(0,s.a(b).e)},
$S:11}
A.Q.prototype={}
A.bQ.prototype={}
A.ac.prototype={
Y(){return"BenefitTone."+this.b}}
A.w.prototype={}
A.aO.prototype={}
A.cs.prototype={
$1(a){return A.m(a.A(0,1))+" "},
$S:12}
A.cx.prototype={
$1(a){return t.a.a(a).a!=="99"},
$S:13}
A.cy.prototype={
$1(a){A.b(a)
return A.cl()},
$S:3}
A.cz.prototype={
$1(a){A.b(a)
return A.cl()},
$S:3}
A.cn.prototype={
$1(a){return A.b1(a).length!==0},
$S:14}
A.co.prototype={
$1(a){var s
A.b(a)
s=this.a
s.n(0,this.b.a)
A.b(A.b(v.G.window).localStorage).setItem("dismissed_events",s.T(0,","))
this.c.remove()},
$S:4}
A.ci.prototype={
$1(a){var s,r
A.b(a)
s=this.a.a
r=this.b
if($.cQ.aJ(0,s))A.b(r.classList).remove("on")
else{$.cQ.n(0,s)
A.b(r.classList).add("on")}A.cl()},
$S:4}
A.cm.prototype={
$1(a){return t.p.a(a).c===this.a.a},
$S:1};(function aliases(){var s=J.U.prototype
s.ah=s.j})();(function installTearOffs(){var s=hunkHelpers.installStaticTearOff
s(A,"fZ",3,null,["$3"],["hr"],0,0)
s(A,"fY",3,null,["$3"],["ho"],0,0)
s(A,"fW",3,null,["$3"],["hj"],0,0)
s(A,"fS",3,null,["$3"],["fy"],0,0)
s(A,"h_",3,null,["$3"],["ia"],0,0)
s(A,"fU",3,null,["$3"],["fP"],0,0)
s(A,"fX",3,null,["$3"],["hn"],0,0)
s(A,"fV",3,null,["$3"],["fQ"],0,0)
s(A,"fT",3,null,["$3"],["fK"],0,0)
s(A,"h0",3,null,["$3"],["ic"],0,0)
s(A,"fR",3,null,["$3"],["fv"],0,0)
s(A,"hA",3,null,["$3"],["hp"],0,0)
s(A,"hx",3,null,["$3"],["fA"],0,0)
s(A,"hD",3,null,["$3"],["hE"],0,0)
s(A,"hz",3,null,["$3"],["hm"],0,0)
s(A,"hy",3,null,["$3"],["fI"],0,0)
s(A,"hB",3,null,["$3"],["hv"],0,0)
s(A,"hC",3,null,["$3"],["hw"],0,0)
s(A,"hT",3,null,["$3"],["hZ"],0,0)
s(A,"hU",3,null,["$3"],["i9"],0,0)
s(A,"hN",3,null,["$3"],["he"],0,0)
s(A,"hM",3,null,["$3"],["h7"],0,0)
s(A,"hP",3,null,["$3"],["hq"],0,0)
s(A,"hJ",3,null,["$3"],["fJ"],0,0)
s(A,"hQ",3,null,["$3"],["ht"],0,0)
s(A,"hH",3,null,["$3"],["fC"],0,0)
s(A,"hS",3,null,["$3"],["hG"],0,0)
s(A,"hO",3,null,["$3"],["hl"],0,0)
s(A,"hV",3,null,["$3"],["ib"],0,0)
s(A,"hL",3,null,["$3"],["h6"],0,0)
s(A,"hR",3,null,["$3"],["hF"],0,0)
s(A,"hI",3,null,["$3"],["fD"],0,0)
s(A,"hK",3,null,["$3"],["fL"],0,0)
s(A,"i0",3,null,["$3"],["fB"],0,0)
s(A,"i6",3,null,["$3"],["hs"],0,0)
s(A,"i5",3,null,["$3"],["hk"],0,0)
s(A,"i1",3,null,["$3"],["fM"],0,0)
s(A,"i2",3,null,["$3"],["h1"],0,0)
s(A,"i3",3,null,["$3"],["h8"],0,0)
s(A,"i4",3,null,["$3"],["hf"],0,0)
s(A,"i_",3,null,["$3"],["fz"],0,0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.r,null)
q(A.r,[A.cE,J.bb,A.aM,J.ar,A.bV,A.c5,A.aE,A.f,A.a0,A.B,A.a4,A.b8,A.a1,A.V,A.S,A.bg,A.c_,A.bf,A.bE,A.aP,A.c9,A.L,A.bC,A.cf,A.a5,A.bD,A.aR,A.q,A.ae,A.ca,A.cc,A.bX,A.aF,A.a_,A.by,A.bR,A.bL,A.at,A.as,A.h,A.t,A.e,A.a,A.K,A.Q,A.bQ,A.w,A.aO])
q(J.bb,[J.bd,J.ay,J.aB,J.aA,J.aC,J.az,J.af])
q(J.aB,[J.U,J.o,A.ah,A.aJ])
q(J.U,[J.bq,J.aN,J.T])
r(J.bc,A.aM)
r(J.bZ,J.o)
q(J.az,[J.ax,J.be])
q(A.bV,[A.ag,A.c4,A.cb,A.bK,A.c6,A.ab,A.bA,A.c7,A.bw,A.bS])
q(A.f,[A.H,A.aQ,A.bB,A.al])
r(A.ak,A.a4)
r(A.I,A.ak)
r(A.O,A.b8)
q(A.V,[A.au,A.aW])
r(A.av,A.au)
q(A.S,[A.b6,A.b7,A.bz,A.ct,A.cv,A.bM,A.bO,A.cp,A.cs,A.cx,A.cy,A.cz,A.cn,A.co,A.ci,A.cm])
q(A.bz,[A.bx,A.ad])
r(A.aD,A.bg)
q(A.b7,[A.cu,A.c0,A.bN,A.bP,A.cq])
q(A.aJ,[A.bh,A.ai])
q(A.ai,[A.aS,A.aU])
r(A.aT,A.aS)
r(A.aH,A.aT)
r(A.aV,A.aU)
r(A.aI,A.aV)
q(A.aH,[A.bi,A.bj])
q(A.aI,[A.bk,A.bl,A.bm,A.bn,A.bo,A.aK,A.bp])
r(A.bF,A.cb)
r(A.a2,A.aW)
r(A.bU,A.b6)
q(A.ab,[A.bu,A.bY])
q(A.ca,[A.ba,A.ac])
s(A.aS,A.q)
s(A.aT,A.B)
s(A.aU,A.q)
s(A.aV,A.B)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{d:"int",k:"double",aa:"num",u:"String",A:"bool",a_:"Null",n:"List",r:"Object",ii:"Map",p:"JSObject"},mangledNames:{},types:["~(aO,at,as)","A(Q)","k(k,Q)","~(p)","a_(p)","@(@)","@(@,u)","@(u)","~(r?,r?)","0&()","A(K)","d(K,K)","u(aG)","A(t)","A(u)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.I&&a.b(c.a)&&b.b(c.b)}}
A.eV(v.typeUniverse,JSON.parse('{"bq":"U","aN":"U","T":"U","ij":"ah","bd":{"A":[],"l":[]},"ay":{"l":[]},"aB":{"p":[]},"U":{"p":[]},"o":{"n":["1"],"p":[],"f":["1"]},"bc":{"aM":[]},"bZ":{"o":["1"],"n":["1"],"p":[],"f":["1"]},"ar":{"G":["1"]},"az":{"k":[],"aa":[]},"ax":{"k":[],"d":[],"aa":[],"l":[]},"be":{"k":[],"aa":[],"l":[]},"af":{"u":[],"c1":[],"l":[]},"aE":{"G":["1"]},"H":{"f":["1"],"f.E":"1"},"a0":{"G":["1"]},"I":{"ak":[],"a4":[]},"O":{"b8":["1","2"]},"aQ":{"f":["1"],"f.E":"1"},"a1":{"G":["1"]},"au":{"V":["1"],"bv":["1"],"f":["1"]},"av":{"au":["1"],"V":["1"],"bv":["1"],"f":["1"]},"S":{"Z":[]},"b6":{"Z":[]},"b7":{"Z":[]},"bz":{"Z":[]},"bx":{"Z":[]},"ad":{"Z":[]},"aD":{"bg":["1","2"]},"ak":{"a4":[]},"bf":{"eC":[],"c1":[]},"bE":{"aL":[],"aG":[]},"bB":{"f":["aL"],"f.E":"aL"},"aP":{"G":["aL"]},"ah":{"p":[],"l":[]},"aJ":{"p":[]},"bh":{"p":[],"l":[]},"ai":{"D":["1"],"p":[]},"aH":{"q":["k"],"n":["k"],"D":["k"],"p":[],"f":["k"],"B":["k"]},"aI":{"q":["d"],"n":["d"],"D":["d"],"p":[],"f":["d"],"B":["d"]},"bi":{"q":["k"],"n":["k"],"D":["k"],"p":[],"f":["k"],"B":["k"],"l":[],"q.E":"k"},"bj":{"q":["k"],"n":["k"],"D":["k"],"p":[],"f":["k"],"B":["k"],"l":[],"q.E":"k"},"bk":{"q":["d"],"n":["d"],"D":["d"],"p":[],"f":["d"],"B":["d"],"l":[],"q.E":"d"},"bl":{"q":["d"],"n":["d"],"D":["d"],"p":[],"f":["d"],"B":["d"],"l":[],"q.E":"d"},"bm":{"q":["d"],"n":["d"],"D":["d"],"p":[],"f":["d"],"B":["d"],"l":[],"q.E":"d"},"bn":{"q":["d"],"n":["d"],"D":["d"],"p":[],"f":["d"],"B":["d"],"l":[],"q.E":"d"},"bo":{"q":["d"],"n":["d"],"D":["d"],"p":[],"f":["d"],"B":["d"],"l":[],"q.E":"d"},"aK":{"q":["d"],"n":["d"],"D":["d"],"p":[],"f":["d"],"B":["d"],"l":[],"q.E":"d"},"bp":{"q":["d"],"n":["d"],"D":["d"],"p":[],"f":["d"],"B":["d"],"l":[],"q.E":"d"},"a5":{"G":["1"]},"al":{"f":["1"],"f.E":"1"},"a2":{"V":["1"],"bv":["1"],"f":["1"]},"aR":{"G":["1"]},"V":{"bv":["1"],"f":["1"]},"aW":{"V":["1"],"bv":["1"],"f":["1"]},"k":{"aa":[]},"d":{"aa":[]},"n":{"f":["1"]},"aL":{"aG":[]},"u":{"c1":[]},"ee":{"n":["d"],"f":["d"]},"eI":{"n":["d"],"f":["d"]},"eH":{"n":["d"],"f":["d"]},"ec":{"n":["d"],"f":["d"]},"eF":{"n":["d"],"f":["d"]},"ed":{"n":["d"],"f":["d"]},"eG":{"n":["d"],"f":["d"]},"e9":{"n":["k"],"f":["k"]},"ea":{"n":["k"],"f":["k"]}}'))
A.eU(v.typeUniverse,JSON.parse('{"ai":1,"aW":1}'))
var u={a:"\u041f\u0430\u0441\u043f\u043e\u0440\u0442 \u0444\u043e\u0440\u043c\u0443\u043b \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f Vyplaty Calculator v5"}
var t=(function rtii(){var s=A.Y
return{p:s("Q"),w:s("O<u,u>"),J:s("O<u,k>"),k:s("ae"),Z:s("Z"),V:s("f<@>"),E:s("o<Q>"),f:s("o<r>"),L:s("o<+(u,u)>"),I:s("o<t>"),s:s("o<u>"),b:s("o<e>"),q:s("o<@>"),T:s("ay"),m:s("p"),M:s("T"),D:s("D<@>"),j:s("n<@>"),P:s("a_"),K:s("r"),t:s("K"),O:s("ik"),d:s("+()"),F:s("aL"),a:s("t"),N:s("u"),W:s("u(aG)"),R:s("l"),o:s("aN"),U:s("H<u>"),e:s("a0<t>"),y:s("A"),l:s("A(t)"),Q:s("A(u)"),i:s("k"),S:s("d"),Y:s("d6<a_>?"),z:s("p?"),X:s("r?"),v:s("u?"),A:s("u(aG)?"),g:s("bD?"),u:s("A?"),x:s("k?"),B:s("d?"),n:s("aa?"),H:s("aa")}})();(function constants(){var s=hunkHelpers.makeConstList
B.au=J.bb.prototype
B.c=J.o.prototype
B.i=J.ax.prototype
B.b=J.az.prototype
B.f=J.af.prototype
B.av=J.T.prototype
B.aw=J.aB.prototype
B.q=J.bq.prototype
B.l=J.aN.prototype
B.d=new A.ac(0,"accent")
B.e=new A.ac(1,"success")
B.a=new A.ac(2,"warning")
B.h=new A.ac(3,"purple")
B.m=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.a7=function() {
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
B.ac=function(getTagFallback) {
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
B.a8=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.ab=function(hooks) {
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
B.aa=function(hooks) {
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
B.a9=function(hooks) {
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

B.j=new A.c5()
B.ad=new A.ba(0,"familyPayment")
B.o=new A.ba(2,"calculator")
B.ag=new A.w("imputed_alimony_2026","\u0421\u0424\u0420: \u043f\u0440\u0430\u0432\u0438\u043b\u0430 \u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0435\u0434\u0438\u043d\u043e\u0433\u043e \u043f\u043e\u0441\u043e\u0431\u0438\u044f \u0441 2026 \u0433\u043e\u0434\u0430; \u0420\u043e\u0441\u0441\u0442\u0430\u0442: \u0441\u0440\u0435\u0434\u043d\u0435\u043c\u0435\u0441\u044f\u0447\u043d\u0430\u044f \u043d\u043e\u043c\u0438\u043d\u0430\u043b\u044c\u043d\u0430\u044f \u043d\u0430\u0447\u0438\u0441\u043b\u0435\u043d\u043d\u0430\u044f \u0437\u0430\u0440\u043f\u043b\u0430\u0442\u0430 \u043f\u043e \u0441\u0443\u0431\u044a\u0435\u043a\u0442\u0430\u043c \u0420\u0424 (2025)")
B.ae=new A.w("mat_capital_2026","\u0421\u0424\u0420: \u0420\u0430\u0437\u043c\u0435\u0440 \u043c\u0430\u0442\u0435\u0440\u0438\u043d\u0441\u043a\u043e\u0433\u043e (\u0441\u0435\u043c\u0435\u0439\u043d\u043e\u0433\u043e) \u043a\u0430\u043f\u0438\u0442\u0430\u043b\u0430 \u0441 1 \u0444\u0435\u0432\u0440\u0430\u043b\u044f 2026 \u0433\u043e\u0434\u0430")
B.at=new A.w("childcare_1_5_2026","\u0421\u0424\u0420: \u043f\u043e\u0441\u043e\u0431\u0438\u0435 \u043f\u043e \u0443\u0445\u043e\u0434\u0443 \u0437\u0430 \u0440\u0435\u0431\u0451\u043d\u043a\u043e\u043c \u0434\u043e 1,5 \u043b\u0435\u0442")
B.as=new A.w("bir_2026","\u0421\u0424\u0420: \u043d\u043e\u0432\u043e\u0441\u0442\u0438 \u043f\u043e \u043f\u043e\u0441\u043e\u0431\u0438\u044e \u043f\u043e \u0431\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u0438 \u0440\u043e\u0434\u0430\u043c \u0437\u0430 2026 \u0433\u043e\u0434")
B.ah=new A.w("indexation_2026","\u041e\u0444\u0438\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0435 \u043e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u043d\u0438\u0435 \u043f\u0440\u0430\u0432\u043e\u0432\u044b\u0445 \u0430\u043a\u0442\u043e\u0432: \u041f\u043e\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u041f\u0440\u0430\u0432\u0438\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u0430 \u0420\u0424 \u043e\u0442 23.01.2026 \u2116 30")
B.an=new A.w("unified_benefit_2026","\u0421\u0424\u0420: \u0440\u0435\u0433\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b \u043f\u043e \u0435\u0434\u0438\u043d\u043e\u043c\u0443 \u043f\u043e\u0441\u043e\u0431\u0438\u044e")
B.ao=new A.w("methodology_family_support",u.a)
B.ak=new A.w("methodology_tax_support",u.a)
B.al=new A.w("methodology_employment_support",u.a)
B.am=new A.w("methodology_housing_support",u.a)
B.ar=new A.w("methodology_pension_support",u.a)
B.af=new A.w("methodology_social_support",u.a)
B.aq=new A.w("methodology_military_support",u.a)
B.aj=new A.w("methodology_regional_support",u.a)
B.ap=new A.w("regional_mat_cap_2026","\u041e\u0444\u0438\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0435 \u043f\u043e\u0440\u0442\u0430\u043b\u044b \u0441\u043e\u0446\u0437\u0430\u0449\u0438\u0442\u044b \u0441\u0443\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u0420\u0424 + \u0434\u0443\u0431\u043b\u0438\u0440\u0443\u044e\u0449\u0438\u0439 \u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a \u043f\u043e \u043a\u0430\u0436\u0434\u043e\u043c\u0443 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044e (\u0441\u0432\u0435\u0440\u043a\u0430 \u0438\u044e\u043b\u044f 2026)")
B.ai=new A.w("methodology_honor_support",u.a)
B.ax=s([B.ag,B.ae,B.at,B.as,B.ah,B.an,B.ao,B.ak,B.al,B.am,B.ar,B.af,B.aq,B.aj,B.ap,B.ai],A.Y("o<w>"))
B.r=new A.I("","\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435")
B.aR=new A.I("single","\u041d\u0435 \u0432 \u0431\u0440\u0430\u043a\u0435")
B.aT=new A.I("married","\u0412 \u0431\u0440\u0430\u043a\u0435")
B.aU=new A.I("divorced","\u0420\u0430\u0437\u0432\u0435\u0434\u0451\u043d(\u0430)")
B.aS=new A.I("widow","\u0412\u0434\u043e\u0432\u0435\u0446 / \u0432\u0434\u043e\u0432\u0430")
B.ay=s([B.r,B.aR,B.aT,B.aU,B.aS],t.L)
B.cB=new A.t("99","\u041d\u0435\u0442 \u0434\u0435\u0442\u0435\u0439")
B.co=new A.t("0","\u0414\u043e 1 \u0433\u043e\u0434\u0430")
B.cr=new A.t("1.5","\u0414\u043e 1,5 \u043b\u0435\u0442")
B.cq=new A.t("3","\u0414\u043e 3 \u043b\u0435\u0442")
B.cx=new A.t("7","\u0414\u043e 7 \u043b\u0435\u0442")
B.cy=new A.t("17","\u0414\u043e 17 \u043b\u0435\u0442")
B.az=s([B.cB,B.co,B.cr,B.cq,B.cx,B.cy],t.I)
B.dM=s(["\u043e\u0431\u044b\u0447\u043d\u044b\u0439","\u0444\u0435\u0434\u0435\u0440\u0430\u043b\u044c\u043d\u044b\u0439"],t.s)
B.bB=new A.a("regular","\u041e\u0431\u044b\u0447\u043d\u044b\u0439 \u0440\u0435\u0433\u0438\u043e\u043d",!1,!1,!1,18939,20644,18371,null,null,null,null,3)
B.f4=s(["\u0441\u0435\u0432\u0435\u0440","\u0441\u0435\u0432\u0435\u0440\u043d\u044b\u0439"],t.s)
B.bG=new A.a("north","\u041a\u0440\u0430\u0439\u043d\u0438\u0439 \u0421\u0435\u0432\u0435\u0440",!1,!0,!1,18939,20644,18371,null,null,null,null,3)
B.dZ=s(["\u0434\u0444\u043e","\u0434\u0430\u043b\u044c\u043d\u0438\u0439 \u0432\u043e\u0441\u0442\u043e\u043a"],t.s)
B.b3=new A.a("dfo","\u0414\u0430\u043b\u044c\u043d\u0438\u0439 \u0412\u043e\u0441\u0442\u043e\u043a (legacy)",!1,!1,!0,18939,20644,18371,null,null,null,null,3)
B.eO=s(["\u043c\u043e\u0441\u043a\u0432\u0430","\u043c\u043e\u0441","msk"],t.s)
B.cb=new A.a("moscow","\u041c\u043e\u0441\u043a\u0432\u0430",!0,!1,!1,25342,28940,21903,5000,2500,25e3,null,3)
B.dF=s(["\u0441\u0430\u043d\u043a\u0442-\u043f\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433","\u043f\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433","\u0441\u043f\u0431","spb"],t.s)
B.bx=new A.a("spb","\u0421\u0430\u043d\u043a\u0442-\u041f\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433",!1,!1,!1,20644,22502,20025,null,null,null,224578,3)
B.dR=s(["\u0441\u0435\u0432\u0430\u0441\u0442\u043e\u043f\u043e\u043b\u044c"],t.s)
B.b4=new A.a("sevastopol","\u0433. \u0421\u0435\u0432\u0430\u0441\u0442\u043e\u043f\u043e\u043b\u044c",!1,!1,!1,19318,21057,18738,null,null,null,null,3)
B.dP=s(["\u0430\u0434\u044b\u0433\u0435\u044f","\u043c\u0430\u0439\u043a\u043e\u043f"],t.s)
B.bo=new A.a("adygea","\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0410\u0434\u044b\u0433\u0435\u044f",!1,!1,!1,16288,17754,15799,null,null,null,5e4,3)
B.dL=s(["\u0430\u043b\u0442\u0430\u0439 \u0440\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430","\u0433\u043e\u0440\u043d\u044b\u0439 \u0430\u043b\u0442\u0430\u0439","\u0433\u043e\u0440\u043d\u043e-\u0430\u043b\u0442\u0430\u0439\u0441\u043a"],t.s)
B.bV=new A.a("altai_republic","\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0410\u043b\u0442\u0430\u0439",!1,!1,!1,17992,19611,17452,null,null,null,83850,3)
B.e5=s(["\u0431\u0430\u0448\u043a\u043e\u0440\u0442\u043e\u0441\u0442\u0430\u043d","\u0431\u0430\u0448\u043a\u0438\u0440\u0438\u044f","\u0443\u0444\u0430"],t.s)
B.bl=new A.a("bashkortostan","\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0411\u0430\u0448\u043a\u043e\u0440\u0442\u043e\u0441\u0442\u0430\u043d",!1,!1,!1,16856,18373,16350,null,null,null,622800,3)
B.eZ=s(["\u0431\u0443\u0440\u044f\u0442\u0438\u044f","\u0443\u043b\u0430\u043d-\u0443\u0434\u044d"],t.s)
B.bm=new A.a("buryatia","\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0411\u0443\u0440\u044f\u0442\u0438\u044f",!1,!1,!0,20644,22502,20025,null,null,null,218676,2)
B.eF=s(["\u0434\u0430\u0433\u0435\u0441\u0442\u0430\u043d","\u043c\u0430\u0445\u0430\u0447\u043a\u0430\u043b\u0430"],t.s)
B.bw=new A.a("dagestan","\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0414\u0430\u0433\u0435\u0441\u0442\u0430\u043d",!1,!1,!1,17234,18785,16717,null,null,null,3e5,5)
B.ev=s(["\u0438\u043d\u0433\u0443\u0448\u0435\u0442\u0438\u044f","\u043c\u0430\u0433\u0430\u0441"],t.s)
B.by=new A.a("ingushetia","\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0418\u043d\u0433\u0443\u0448\u0435\u0442\u0438\u044f",!1,!1,!1,17803,19405,17269,null,null,null,null,3)
B.eQ=s(["\u043a\u0430\u0431\u0430\u0440\u0434\u0438\u043d\u043e-\u0431\u0430\u043b\u043a\u0430\u0440\u0438\u044f","\u043a\u0431\u0440","\u043d\u0430\u043b\u044c\u0447\u0438\u043a"],t.s)
B.bQ=new A.a("kabardino_balkaria","\u041a\u0430\u0431\u0430\u0440\u0434\u0438\u043d\u043e-\u0411\u0430\u043b\u043a\u0430\u0440\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",!1,!1,!1,20265,22089,19657,null,null,null,null,3)
B.eU=s(["\u043a\u0430\u043b\u043c\u044b\u043a\u0438\u044f","\u044d\u043b\u0438\u0441\u0442\u0430"],t.s)
B.bv=new A.a("kalmykia","\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041a\u0430\u043b\u043c\u044b\u043a\u0438\u044f",!1,!1,!1,18560,20230,18003,null,null,null,1e5,3)
B.dU=s(["\u043a\u0430\u0440\u0430\u0447\u0430\u0435\u0432\u043e-\u0447\u0435\u0440\u043a\u0435\u0441\u0438\u044f","\u043a\u0447\u0440","\u0447\u0435\u0440\u043a\u0435\u0441\u0441\u043a"],t.s)
B.bR=new A.a("karachay_cherkessia","\u041a\u0430\u0440\u0430\u0447\u0430\u0435\u0432\u043e-\u0427\u0435\u0440\u043a\u0435\u0441\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",!1,!1,!1,17803,19405,17269,null,null,null,15e4,4)
B.ea=s(["\u043a\u0430\u0440\u0435\u043b\u0438\u044f","\u043f\u0435\u0442\u0440\u043e\u0437\u0430\u0432\u043e\u0434\u0441\u043a"],t.s)
B.bu=new A.a("karelia","\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041a\u0430\u0440\u0435\u043b\u0438\u044f",!1,!0,!1,21022,22914,20391,null,null,null,105500,3)
B.dY=s(["\u043a\u043e\u043c\u0438","\u0441\u044b\u043a\u0442\u044b\u0432\u043a\u0430\u0440"],t.s)
B.c8=new A.a("komi","\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041a\u043e\u043c\u0438",!1,!0,!1,21780,23740,21127,null,null,null,3e5,3)
B.e7=s(["\u043a\u0440\u044b\u043c","\u0441\u0438\u043c\u0444\u0435\u0440\u043e\u043f\u043e\u043b\u044c"],t.s)
B.b7=new A.a("crimea","\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041a\u0440\u044b\u043c",!1,!1,!1,18371,20024,17820,null,null,null,null,3)
B.f1=s(["\u043c\u0430\u0440\u0438\u0439 \u044d\u043b","\u0439\u043e\u0448\u043a\u0430\u0440-\u043e\u043b\u0430"],t.s)
B.cj=new A.a("mari_el","\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041c\u0430\u0440\u0438\u0439 \u042d\u043b",!1,!1,!1,16666,18166,16166,null,null,null,null,3)
B.er=s(["\u043c\u043e\u0440\u0434\u043e\u0432\u0438\u044f","\u0441\u0430\u0440\u0430\u043d\u0441\u043a"],t.s)
B.cd=new A.a("mordovia","\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041c\u043e\u0440\u0434\u043e\u0432\u0438\u044f",!1,!1,!1,16098,17547,15615,null,null,null,135753,3)
B.e3=s(["\u0441\u0430\u0445\u0430","\u044f\u043a\u0443\u0442\u0438\u044f","\u044f\u043a\u0443\u0442\u0441\u043a"],t.s)
B.bY=new A.a("sakha","\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0421\u0430\u0445\u0430 (\u042f\u043a\u0443\u0442\u0438\u044f)",!1,!0,!0,28598,31172,27740,null,null,null,3e5,3)
B.eK=s(["\u0441\u0435\u0432\u0435\u0440\u043d\u0430\u044f \u043e\u0441\u0435\u0442\u0438\u044f","\u0430\u043b\u0430\u043d\u0438\u044f","\u0432\u043b\u0430\u0434\u0438\u043a\u0430\u0432\u043a\u0430\u0437"],t.s)
B.bd=new A.a("north_ossetia","\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0421\u0435\u0432\u0435\u0440\u043d\u0430\u044f \u041e\u0441\u0435\u0442\u0438\u044f \u2014 \u0410\u043b\u0430\u043d\u0438\u044f",!1,!1,!1,17045,18579,16534,null,null,null,5e4,3)
B.e2=s(["\u0442\u0430\u0442\u0430\u0440\u0441\u0442\u0430\u043d","\u0442\u0430\u0442\u0430\u0440\u0438\u044f","\u043a\u0430\u0437\u0430\u043d\u044c","\u0440\u0442"],t.s)
B.bf=new A.a("tatarstan","\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0422\u0430\u0442\u0430\u0440\u0441\u0442\u0430\u043d",!1,!1,!1,16098,17547,15615,null,null,null,1e5,3)
B.eJ=s(["\u0442\u044b\u0432\u0430","\u0442\u0443\u0432\u0430","\u043a\u044b\u0437\u044b\u043b"],t.s)
B.c6=new A.a("tyva","\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0422\u044b\u0432\u0430",!1,!1,!1,19128,20850,18554,null,null,null,null,3)
B.f_=s(["\u0443\u0434\u043c\u0443\u0440\u0442\u0438\u044f","\u0438\u0436\u0435\u0432\u0441\u043a"],t.s)
B.ck=new A.a("udmurtia","\u0423\u0434\u043c\u0443\u0440\u0442\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",!1,!1,!1,16856,18373,16350,null,null,null,null,3)
B.ed=s(["\u0445\u0430\u043a\u0430\u0441\u0438\u044f","\u0430\u0431\u0430\u043a\u0430\u043d"],t.s)
B.ca=new A.a("khakassia","\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0425\u0430\u043a\u0430\u0441\u0438\u044f",!1,!1,!1,19318,21057,18738,null,null,null,null,3)
B.eu=s(["\u0447\u0435\u0447\u043d\u044f","\u0433\u0440\u043e\u0437\u043d\u044b\u0439"],t.s)
B.bb=new A.a("chechnya","\u0427\u0435\u0447\u0435\u043d\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",!1,!1,!1,18181,19817,17636,null,null,null,null,3)
B.dN=s(["\u0447\u0443\u0432\u0430\u0448\u0438\u044f","\u0447\u0435\u0431\u043e\u043a\u0441\u0430\u0440\u044b"],t.s)
B.c4=new A.a("chuvashia","\u0427\u0443\u0432\u0430\u0448\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",!1,!1,!1,16477,17960,15983,null,null,null,2e5,3)
B.eo=s(["\u0430\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439","\u0431\u0430\u0440\u043d\u0430\u0443\u043b"],t.s)
B.bZ=new A.a("altai_krai","\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",!1,!1,!1,16856,18373,16350,null,null,null,95525,3)
B.eW=s(["\u0437\u0430\u0431\u0430\u0439\u043a\u0430\u043b\u044c\u0441\u043a\u0438\u0439","\u0437\u0430\u0431\u0430\u0439\u043a\u0430\u043b\u044c\u0435","\u0447\u0438\u0442\u0430"],t.s)
B.aY=new A.a("zabaykalsky","\u0417\u0430\u0431\u0430\u0439\u043a\u0430\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",!1,!1,!0,22159,24153,21494,null,null,null,249907,2)
B.e0=s(["\u043a\u0430\u043c\u0447\u0430\u0442\u043a\u0430","\u043f\u0435\u0442\u0440\u043e\u043f\u0430\u0432\u043b\u043e\u0432\u0441\u043a-\u043a\u0430\u043c\u0447\u0430\u0442\u0441\u043a\u0438\u0439"],t.s)
B.be=new A.a("kamchatka","\u041a\u0430\u043c\u0447\u0430\u0442\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",!1,!0,!0,33333,36333,32333,null,null,null,160975,1)
B.eA=s(["\u043a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440","\u043a\u0443\u0431\u0430\u043d\u044c","\u0441\u043e\u0447\u0438","\u043d\u043e\u0432\u043e\u0440\u043e\u0441\u0441\u0438\u0439\u0441\u043a"],t.s)
B.ch=new A.a("krasnodar","\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",!1,!1,!1,18181,19817,17636,null,null,null,167135,3)
B.dK=s(["\u043a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a","\u043a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439"],t.s)
B.ci=new A.a("krasnoyarsk","\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",!1,!0,!1,21022,22914,20391,null,null,null,196470,3)
B.eP=s(["\u043f\u0435\u0440\u043c\u044c","\u043f\u0435\u0440\u043c\u0441\u043a\u0438\u0439"],t.s)
B.c0=new A.a("perm","\u041f\u0435\u0440\u043c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",!1,!1,!1,17424,18992,16901,null,null,null,null,3)
B.eS=s(["\u043f\u0440\u0438\u043c\u043e\u0440\u0441\u043a\u0438\u0439","\u043f\u0440\u0438\u043c\u043e\u0440\u044c\u0435","\u0432\u043b\u0430\u0434\u0438\u0432\u043e\u0441\u0442\u043e\u043a"],t.s)
B.c1=new A.a("primorsky","\u041f\u0440\u0438\u043c\u043e\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",!1,!1,!0,22537,24565,21861,null,null,null,248393,3)
B.dV=s(["\u0441\u0442\u0430\u0432\u0440\u043e\u043f\u043e\u043b\u044c","\u0441\u0442\u0430\u0432\u0440\u043e\u043f\u043e\u043b\u044c\u0441\u043a\u0438\u0439"],t.s)
B.b2=new A.a("stavropol","\u0421\u0442\u0430\u0432\u0440\u043e\u043f\u043e\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",!1,!1,!1,17045,18579,16534,null,null,null,null,3)
B.eR=s(["\u0445\u0430\u0431\u0430\u0440\u043e\u0432\u0441\u043a","\u0445\u0430\u0431\u0430\u0440\u043e\u0432\u0441\u043a\u0438\u0439"],t.s)
B.c7=new A.a("khabarovsk","\u0425\u0430\u0431\u0430\u0440\u043e\u0432\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",!1,!1,!0,23106,25186,23758,null,null,null,288973,2)
B.eT=s(["\u0430\u043c\u0443\u0440\u0441\u043a\u0430\u044f","\u0431\u043b\u0430\u0433\u043e\u0432\u0435\u0449\u0435\u043d\u0441\u043a"],t.s)
B.bX=new A.a("amur","\u0410\u043c\u0443\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!0,21780,23740,21215,null,null,null,249907,2)
B.eI=s(["\u0430\u0440\u0445\u0430\u043d\u0433\u0435\u043b\u044c\u0441\u043a\u0430\u044f","\u0430\u0440\u0445\u0430\u043d\u0433\u0435\u043b\u044c\u0441\u043a"],t.s)
B.bt=new A.a("arkhangelsk","\u0410\u0440\u0445\u0430\u043d\u0433\u0435\u043b\u044c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!0,!1,21969,23946,21310,null,null,null,124609,3)
B.dQ=s(["\u0430\u0441\u0442\u0440\u0430\u0445\u0430\u043d\u0441\u043a\u0430\u044f","\u0430\u0441\u0442\u0440\u0430\u0445\u0430\u043d\u044c"],t.s)
B.ce=new A.a("astrakhan","\u0410\u0441\u0442\u0440\u0430\u0445\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,18371,20024,17820,null,null,null,null,3)
B.eM=s(["\u0431\u0435\u043b\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f","\u0431\u0435\u043b\u0433\u043e\u0440\u043e\u0434"],t.s)
B.c2=new A.a("belgorod","\u0411\u0435\u043b\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,15909,17341,15432,null,null,null,15e4,3)
B.eE=s(["\u0431\u0440\u044f\u043d\u0441\u043a\u0430\u044f","\u0431\u0440\u044f\u043d\u0441\u043a"],t.s)
B.cc=new A.a("bryansk","\u0411\u0440\u044f\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,17424,18992,16901,null,null,null,2e5,3)
B.dD=s(["\u0432\u043b\u0430\u0434\u0438\u043c\u0438\u0440\u0441\u043a\u0430\u044f","\u0432\u043b\u0430\u0434\u0438\u043c\u0438\u0440"],t.s)
B.bi=new A.a("vladimir","\u0412\u043b\u0430\u0434\u0438\u043c\u0438\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,18371,20024,17820,null,null,null,78758,3)
B.eL=s(["\u0432\u043e\u043b\u0433\u043e\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f","\u0432\u043e\u043b\u0433\u043e\u0433\u0440\u0430\u0434"],t.s)
B.c_=new A.a("volgograd","\u0412\u043e\u043b\u0433\u043e\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,16288,17754,15799,null,null,null,89e3,3)
B.ey=s(["\u0432\u043e\u043b\u043e\u0433\u043e\u0434\u0441\u043a\u0430\u044f","\u0432\u043e\u043b\u043e\u0433\u0434\u0430"],t.s)
B.bJ=new A.a("vologda","\u0412\u043e\u043b\u043e\u0433\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,19128,20850,18555,null,null,null,null,3)
B.ek=s(["\u0432\u043e\u0440\u043e\u043d\u0435\u0436\u0441\u043a\u0430\u044f","\u0432\u043e\u0440\u043e\u043d\u0435\u0436"],t.s)
B.br=new A.a("voronezh","\u0412\u043e\u0440\u043e\u043d\u0435\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,16666,18166,16166,null,null,null,16e4,3)
B.eD=s(["\u0437\u0430\u043f\u043e\u0440\u043e\u0436\u0441\u043a\u0430\u044f","\u0437\u0430\u043f\u043e\u0440\u043e\u0436\u044c\u0435"],t.s)
B.bT=new A.a("zaporizhzhia","\u0417\u0430\u043f\u043e\u0440\u043e\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,18371,20024,17820,null,null,null,null,3)
B.ef=s(["\u0438\u0432\u0430\u043d\u043e\u0432\u0441\u043a\u0430\u044f","\u0438\u0432\u0430\u043d\u043e\u0432\u043e"],t.s)
B.bs=new A.a("ivanovo","\u0418\u0432\u0430\u043d\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,17803,19405,17269,null,null,null,5e4,3)
B.e_=s(["\u0438\u0440\u043a\u0443\u0442\u0441\u043a\u0430\u044f","\u0438\u0440\u043a\u0443\u0442\u0441\u043a"],t.s)
B.c3=new A.a("irkutsk","\u0418\u0440\u043a\u0443\u0442\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!0,!1,20075,21882,19473,null,null,null,162034,2)
B.eV=s(["\u043a\u0430\u043b\u0438\u043d\u0438\u043d\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f","\u043a\u0430\u043b\u0438\u043d\u0438\u043d\u0433\u0440\u0430\u0434"],t.s)
B.bz=new A.a("kaliningrad","\u041a\u0430\u043b\u0438\u043d\u0438\u043d\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,19507,21263,18922,null,null,null,null,3)
B.f3=s(["\u043a\u0430\u043b\u0443\u0436\u0441\u043a\u0430\u044f","\u043a\u0430\u043b\u0443\u0433\u0430"],t.s)
B.aZ=new A.a("kaluga","\u041a\u0430\u043b\u0443\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,18181,19817,17636,null,null,null,1e5,3)
B.eb=s(["\u043a\u0435\u043c\u0435\u0440\u043e\u0432\u0441\u043a\u0430\u044f","\u043a\u0443\u0437\u0431\u0430\u0441\u0441","\u043a\u0435\u043c\u0435\u0440\u043e\u0432\u043e"],t.s)
B.bH=new A.a("kemerovo","\u041a\u0435\u043c\u0435\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c \u2014 \u041a\u0443\u0437\u0431\u0430\u0441\u0441",!1,!1,!1,17234,18785,16717,null,null,null,13e4,3)
B.dE=s(["\u043a\u0438\u0440\u043e\u0432\u0441\u043a\u0430\u044f","\u043a\u0438\u0440\u043e\u0432"],t.s)
B.cg=new A.a("kirov","\u041a\u0438\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,16856,18373,16350,null,null,null,null,3)
B.dW=s(["\u043a\u043e\u0441\u0442\u0440\u043e\u043c\u0441\u043a\u0430\u044f","\u043a\u043e\u0441\u0442\u0440\u043e\u043c\u0430"],t.s)
B.aW=new A.a("kostroma","\u041a\u043e\u0441\u0442\u0440\u043e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,17424,18992,16901,null,null,null,null,3)
B.e9=s(["\u043a\u0443\u0440\u0433\u0430\u043d\u0441\u043a\u0430\u044f","\u043a\u0443\u0440\u0433\u0430\u043d"],t.s)
B.bS=new A.a("kurgan","\u041a\u0443\u0440\u0433\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,17803,19405,17269,null,null,null,null,3)
B.ew=s(["\u043a\u0443\u0440\u0441\u043a\u0430\u044f","\u043a\u0443\u0440\u0441\u043a"],t.s)
B.bc=new A.a("kursk","\u041a\u0443\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,16477,17960,15983,null,null,null,122667,3)
B.dI=s(["\u043b\u0435\u043d\u0438\u043d\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f","\u043b\u0435\u043d\u043e\u0431\u043b\u0430\u0441\u0442\u044c"],t.s)
B.aV=new A.a("leningrad","\u041b\u0435\u043d\u0438\u043d\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,20265,22089,19657,null,null,null,125e3,2)
B.em=s(["\u043b\u0438\u043f\u0435\u0446\u043a\u0430\u044f","\u043b\u0438\u043f\u0435\u0446\u043a"],t.s)
B.bK=new A.a("lipetsk","\u041b\u0438\u043f\u0435\u0446\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,15719,17134,15247,null,null,null,1e5,3)
B.ej=s(["\u043b\u043d\u0440","\u043b\u0443\u0433\u0430\u043d\u0441\u043a\u0430\u044f","\u043b\u0443\u0433\u0430\u043d\u0441\u043a"],t.s)
B.b1=new A.a("lugansk","\u041b\u0443\u0433\u0430\u043d\u0441\u043a\u0430\u044f \u041d\u0430\u0440\u043e\u0434\u043d\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",!1,!1,!1,17803,19405,17269,null,null,null,null,3)
B.e4=s(["\u043c\u0430\u0433\u0430\u0434\u0430\u043d\u0441\u043a\u0430\u044f","\u043c\u0430\u0433\u0430\u0434\u0430\u043d"],t.s)
B.bL=new A.a("magadan","\u041c\u0430\u0433\u0430\u0434\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!0,!0,32954,35920,32062,null,null,null,3e5,3)
B.dS=s(["\u043c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c","\u043f\u043e\u0434\u043c\u043e\u0441\u043a\u043e\u0432\u044c\u0435","\u043c\u043e"],t.s)
B.bM=new A.a("mo","\u041c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!0,!1,!1,20286,22112,19677,null,null,null,null,3)
B.ep=s(["\u043c\u0443\u0440\u043c\u0430\u043d\u0441\u043a\u0430\u044f","\u043c\u0443\u0440\u043c\u0430\u043d\u0441\u043a"],t.s)
B.cl=new A.a("murmansk","\u041c\u0443\u0440\u043c\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!0,!1,26406,28783,25614,null,null,null,149373,3)
B.dJ=s(["\u043d\u0438\u0436\u0435\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f","\u043d\u0438\u0436\u043d\u0438\u0439 \u043d\u043e\u0432\u0433\u043e\u0440\u043e\u0434","\u043d\u043d"],t.s)
B.bh=new A.a("nizhny_novgorod","\u041d\u0438\u0436\u0435\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,17803,19405,17269,null,null,null,1e6,3)
B.e1=s(["\u043d\u043e\u0432\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f","\u0432\u0435\u043b\u0438\u043a\u0438\u0439 \u043d\u043e\u0432\u0433\u043e\u0440\u043e\u0434"],t.s)
B.b_=new A.a("novgorod","\u041d\u043e\u0432\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,18560,20230,18003,null,null,null,25e4,3)
B.dX=s(["\u043d\u043e\u0432\u043e\u0441\u0438\u0431\u0438\u0440\u0441\u043a\u0430\u044f","\u043d\u043e\u0432\u043e\u0441\u0438\u0431\u0438\u0440\u0441\u043a"],t.s)
B.bn=new A.a("novosibirsk","\u041d\u043e\u0432\u043e\u0441\u0438\u0431\u0438\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,18560,20230,18003,null,null,null,163141,3)
B.et=s(["\u043e\u043c\u0441\u043a\u0430\u044f","\u043e\u043c\u0441\u043a"],t.s)
B.c5=new A.a("omsk","\u041e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,16477,17960,15983,null,null,null,null,3)
B.eX=s(["\u043e\u0440\u0435\u043d\u0431\u0443\u0440\u0433\u0441\u043a\u0430\u044f","\u043e\u0440\u0435\u043d\u0431\u0443\u0440\u0433"],t.s)
B.b5=new A.a("orenburg","\u041e\u0440\u0435\u043d\u0431\u0443\u0440\u0433\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,16477,17960,15983,null,null,null,155702,3)
B.f2=s(["\u043e\u0440\u043b\u043e\u0432\u0441\u043a\u0430\u044f","\u043e\u0440\u0451\u043b","\u043e\u0440\u0435\u043b"],t.s)
B.c9=new A.a("orel","\u041e\u0440\u043b\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,17613,19198,17085,null,null,null,null,3)
B.dG=s(["\u043f\u0435\u043d\u0437\u0435\u043d\u0441\u043a\u0430\u044f","\u043f\u0435\u043d\u0437\u0430"],t.s)
B.ba=new A.a("penza","\u041f\u0435\u043d\u0437\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,15909,17341,15432,null,null,null,null,3)
B.dH=s(["\u043f\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f","\u043f\u0441\u043a\u043e\u0432"],t.s)
B.bU=new A.a("pskov","\u041f\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,18750,20438,18188,null,null,null,107500,3)
B.e6=s(["\u0440\u043e\u0441\u0442\u043e\u0432\u0441\u043a\u0430\u044f","\u0440\u043e\u0441\u0442\u043e\u0432"],t.s)
B.bO=new A.a("rostov","\u0420\u043e\u0441\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,17803,19405,17269,null,null,null,162307,3)
B.eq=s(["\u0440\u044f\u0437\u0430\u043d\u0441\u043a\u0430\u044f","\u0440\u044f\u0437\u0430\u043d\u044c"],t.s)
B.bN=new A.a("ryazan","\u0420\u044f\u0437\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,16856,18373,16350,null,null,null,93352,3)
B.eC=s(["\u0441\u0430\u043c\u0430\u0440\u0441\u043a\u0430\u044f","\u0441\u0430\u043c\u0430\u0440\u0430","\u0442\u043e\u043b\u044c\u044f\u0442\u0442\u0438"],t.s)
B.bF=new A.a("samara","\u0421\u0430\u043c\u0430\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,17803,19405,17269,null,null,null,1e5,3)
B.eY=s(["\u0441\u0430\u0440\u0430\u0442\u043e\u0432\u0441\u043a\u0430\u044f","\u0441\u0430\u0440\u0430\u0442\u043e\u0432"],t.s)
B.bW=new A.a("saratov","\u0421\u0430\u0440\u0430\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,15909,17341,15432,null,null,null,107848,3)
B.el=s(["\u0441\u0430\u0445\u0430\u043b\u0438\u043d\u0441\u043a\u0430\u044f","\u0441\u0430\u0445\u0430\u043b\u0438\u043d","\u044e\u0436\u043d\u043e-\u0441\u0430\u0445\u0430\u043b\u0438\u043d\u0441\u043a"],t.s)
B.bp=new A.a("sakhalin","\u0421\u0430\u0445\u0430\u043b\u0438\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!0,!0,25757,28075,24984,null,null,null,5e5,2)
B.dT=s(["\u0441\u0432\u0435\u0440\u0434\u043b\u043e\u0432\u0441\u043a\u0430\u044f","\u0435\u043a\u0430\u0442\u0435\u0440\u0438\u043d\u0431\u0443\u0440\u0433","\u0441\u0432\u0435\u0440\u0434\u043b\u043e\u0432\u0441\u043a"],t.s)
B.bk=new A.a("sverdlovsk","\u0421\u0432\u0435\u0440\u0434\u043b\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,18750,20438,18188,null,null,null,182493,3)
B.ex=s(["\u0441\u043c\u043e\u043b\u0435\u043d\u0441\u043a\u0430\u044f","\u0441\u043c\u043e\u043b\u0435\u043d\u0441\u043a"],t.s)
B.b8=new A.a("smolensk","\u0421\u043c\u043e\u043b\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,18750,20438,18188,null,null,null,163300,3)
B.ec=s(["\u0442\u0430\u043c\u0431\u043e\u0432\u0441\u043a\u0430\u044f","\u0442\u0430\u043c\u0431\u043e\u0432"],t.s)
B.cf=new A.a("tambov","\u0422\u0430\u043c\u0431\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,15719,17134,15247,null,null,null,3e5,3)
B.en=s(["\u0442\u0432\u0435\u0440\u0441\u043a\u0430\u044f","\u0442\u0432\u0435\u0440\u044c"],t.s)
B.bI=new A.a("tver","\u0422\u0432\u0435\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,18560,20230,18003,null,null,null,null,3)
B.ee=s(["\u0442\u043e\u043c\u0441\u043a\u0430\u044f","\u0442\u043e\u043c\u0441\u043a"],t.s)
B.cm=new A.a("tomsk","\u0422\u043e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!0,!1,18560,20230,18003,null,null,null,1e5,3)
B.eh=s(["\u0442\u0443\u043b\u044c\u0441\u043a\u0430\u044f","\u0442\u0443\u043b\u0430"],t.s)
B.bP=new A.a("tula","\u0422\u0443\u043b\u044c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,18939,20644,18371,null,null,null,87737,3)
B.f0=s(["\u0442\u044e\u043c\u0435\u043d\u0441\u043a\u0430\u044f","\u0442\u044e\u043c\u0435\u043d\u044c","\u0442\u044e\u043c"],t.s)
B.bj=new A.a("tyumen","\u0422\u044e\u043c\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!0,!1,18939,20644,18371,null,null,null,1e5,3)
B.es=s(["\u0443\u043b\u044c\u044f\u043d\u043e\u0432\u0441\u043a\u0430\u044f","\u0443\u043b\u044c\u044f\u043d\u043e\u0432\u0441\u043a"],t.s)
B.bA=new A.a("ulyanovsk","\u0423\u043b\u044c\u044f\u043d\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,16856,18373,16350,null,null,null,1e5,3)
B.ez=s(["\u0445\u0435\u0440\u0441\u043e\u043d\u0441\u043a\u0430\u044f","\u0445\u0435\u0440\u0441\u043e\u043d"],t.s)
B.bD=new A.a("kherson","\u0425\u0435\u0440\u0441\u043e\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,18371,20024,17820,null,null,null,null,3)
B.eH=s(["\u0447\u0435\u043b\u044f\u0431\u0438\u043d\u0441\u043a\u0430\u044f","\u0447\u0435\u043b\u044f\u0431\u0438\u043d\u0441\u043a"],t.s)
B.aX=new A.a("chelyabinsk","\u0427\u0435\u043b\u044f\u0431\u0438\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,17424,18992,16901,null,null,null,1e5,3)
B.dO=s(["\u044f\u0440\u043e\u0441\u043b\u0430\u0432\u0441\u043a\u0430\u044f","\u044f\u0440\u043e\u0441\u043b\u0430\u0432\u043b\u044c"],t.s)
B.bC=new A.a("yaroslavl","\u042f\u0440\u043e\u0441\u043b\u0430\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,18939,20644,18371,null,null,null,58870,3)
B.eN=s(["\u0435\u0430\u043e","\u0435\u0432\u0440\u0435\u0439\u0441\u043a\u0430\u044f \u0430\u043e","\u0431\u0438\u0440\u043e\u0431\u0438\u0434\u0436\u0430\u043d"],t.s)
B.b6=new A.a("jewish_ao","\u0415\u0432\u0440\u0435\u0439\u0441\u043a\u0430\u044f \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!0,23674,25805,22964,null,null,null,null,3)
B.eg=s(["\u043d\u0430\u043e","\u043d\u0435\u043d\u0435\u0446\u043a\u0438\u0439","\u043d\u0430\u0440\u044c\u044f\u043d-\u043c\u0430\u0440"],t.s)
B.b0=new A.a("nenets_ao","\u041d\u0435\u043d\u0435\u0446\u043a\u0438\u0439 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433",!1,!0,!1,31060,33855,32026,null,null,null,4e5,3)
B.eB=s(["\u0445\u043c\u0430\u043e","\u044e\u0433\u0440\u0430","\u0445\u0430\u043d\u0442\u044b","\u0445\u0430\u043d\u0442\u044b-\u043c\u0430\u043d\u0441\u0438\u0439\u0441\u043a\u0438\u0439","\u0441\u0443\u0440\u0433\u0443\u0442"],t.s)
B.bg=new A.a("khanty_mansi_ao","\u0425\u0430\u043d\u0442\u044b-\u041c\u0430\u043d\u0441\u0438\u0439\u0441\u043a\u0438\u0439 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433 \u2014 \u042e\u0433\u0440\u0430",!1,!0,!1,22102,24091,22137,null,null,null,177e3,2)
B.eG=s(["\u0447\u0443\u043a\u043e\u0442\u043a\u0430","\u0447\u0443\u043a\u043e\u0442\u0441\u043a\u0438\u0439","\u0430\u043d\u0430\u0434\u044b\u0440\u044c"],t.s)
B.bE=new A.a("chukotka","\u0427\u0443\u043a\u043e\u0442\u0441\u043a\u0438\u0439 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433",!1,!0,!0,49431,53880,47948,null,null,null,201e3,3)
B.ei=s(["\u044f\u043d\u0430\u043e","\u044f\u043c\u0430\u043b","\u044f\u043c\u0430\u043b\u043e-\u043d\u0435\u043d\u0435\u0446\u043a\u0438\u0439","\u0441\u0430\u043b\u0435\u0445\u0430\u0440\u0434","\u044f\u043c\u0430"],t.s)
B.b9=new A.a("yamalo_nenets_ao","\u042f\u043c\u0430\u043b\u043e-\u041d\u0435\u043d\u0435\u0446\u043a\u0438\u0439 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433",!1,!0,!1,25946,28281,25168,null,null,null,1e6,3)
B.e8=s(["\u0434\u043d\u0440","\u0434\u043e\u043d\u0435\u0446\u043a\u0430\u044f","\u0434\u043e\u043d\u0435\u0446\u043a"],t.s)
B.bq=new A.a("donetsk","\u0414\u043e\u043d\u0435\u0446\u043a\u0430\u044f \u041d\u0430\u0440\u043e\u0434\u043d\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",!1,!1,!1,17803,19405,17269,null,null,null,null,3)
B.k=s([B.bB,B.bG,B.b3,B.cb,B.bx,B.b4,B.bo,B.bV,B.bl,B.bm,B.bw,B.by,B.bQ,B.bv,B.bR,B.bu,B.c8,B.b7,B.cj,B.cd,B.bY,B.bd,B.bf,B.c6,B.ck,B.ca,B.bb,B.c4,B.bZ,B.aY,B.be,B.ch,B.ci,B.c0,B.c1,B.b2,B.c7,B.bX,B.bt,B.ce,B.c2,B.cc,B.bi,B.c_,B.bJ,B.br,B.bT,B.bs,B.c3,B.bz,B.aZ,B.bH,B.cg,B.aW,B.bS,B.bc,B.aV,B.bK,B.b1,B.bL,B.bM,B.cl,B.bh,B.b_,B.bn,B.c5,B.b5,B.c9,B.ba,B.bU,B.bO,B.bN,B.bF,B.bW,B.bp,B.bk,B.b8,B.cf,B.bI,B.cm,B.bP,B.bj,B.bA,B.bD,B.aX,B.bC,B.b6,B.b0,B.bg,B.bE,B.b9,B.bq],A.Y("o<a>"))
B.d_=new A.e("i_dis1","\u0418\u043d\u0432\u0430\u043b\u0438\u0434\u043d\u043e\u0441\u0442\u044c I \u0433\u0440\u0443\u043f\u043f\u044b (\u0443 \u043c\u0435\u043d\u044f)")
B.dp=new A.e("i_dis2","\u0418\u043d\u0432\u0430\u043b\u0438\u0434\u043d\u043e\u0441\u0442\u044c II \u0433\u0440\u0443\u043f\u043f\u044b")
B.cC=new A.e("i_dis3","\u0418\u043d\u0432\u0430\u043b\u0438\u0434\u043d\u043e\u0441\u0442\u044c III \u0433\u0440\u0443\u043f\u043f\u044b")
B.d2=new A.e("i_pen","\u042f \u043f\u0435\u043d\u0441\u0438\u043e\u043d\u0435\u0440(\u043a\u0430)")
B.cO=new A.e("i_mil","\u0412\u043e\u0435\u043d\u043d\u043e\u0441\u043b\u0443\u0436\u0430\u0449\u0438\u0439 / \u0443\u0447\u0430\u0441\u0442\u043d\u0438\u043a \u0421\u0412\u041e")
B.cI=new A.e("i_vet","\u0412\u0435\u0442\u0435\u0440\u0430\u043d \u0431\u043e\u0435\u0432\u044b\u0445 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439")
B.cV=new A.e("i_stu","\u0421\u0442\u0443\u0434\u0435\u043d\u0442 \u043e\u0447\u043d\u043e\u0439 \u0444\u043e\u0440\u043c\u044b")
B.cS=new A.e("i_laid","\u0423\u0432\u043e\u043b\u0435\u043d(\u0430) \u043f\u043e \u0441\u043e\u043a\u0440\u0430\u0449\u0435\u043d\u0438\u044e")
B.cF=new A.e("i_sc","\u0418\u043d\u0442\u0435\u0440\u0435\u0441\u0443\u0435\u0442 \u0441\u043e\u0446\u043a\u043e\u043d\u0442\u0440\u0430\u043a\u0442")
B.d9=new A.e("i_chern","\u041b\u0438\u043a\u0432\u0438\u0434\u0430\u0442\u043e\u0440 / \u0447\u0435\u0440\u043d\u043e\u0431\u044b\u043b\u0435\u0446")
B.d0=new A.e("i_dfo","\u041f\u0435\u0440\u0435\u0435\u0437\u0434 \u043d\u0430 \u0414\u0430\u043b\u044c\u043d\u0438\u0439 \u0412\u043e\u0441\u0442\u043e\u043a")
B.d3=new A.e("i_repr","\u0420\u0435\u0430\u0431\u0438\u043b\u0438\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439")
B.db=new A.e("i_vet_trud","\u0412\u0435\u0442\u0435\u0440\u0430\u043d \u0442\u0440\u0443\u0434\u0430")
B.cT=new A.e("i_honored","\u0417\u0430\u0441\u043b\u0443\u0436\u0435\u043d\u043d\u044b\u0439 (\u043c\u0430\u0441\u0442\u0435\u0440/\u0434\u0435\u044f\u0442\u0435\u043b\u044c/\u0430\u0440\u0442\u0438\u0441\u0442)")
B.cJ=new A.e("i_people_art","\u041d\u0430\u0440\u043e\u0434\u043d\u044b\u0439 \u0430\u0440\u0442\u0438\u0441\u0442 / \u0434\u0435\u044f\u0442\u0435\u043b\u044c")
B.dc=new A.e("i_hero_labor","\u0413\u0435\u0440\u043e\u0439 \u0422\u0440\u0443\u0434\u0430 \u0420\u0424")
B.d4=new A.e("i_sick","\u041d\u0430\u0445\u043e\u0436\u0443\u0441\u044c \u043d\u0430 \u0431\u043e\u043b\u044c\u043d\u0438\u0447\u043d\u043e\u043c")
B.cH=new A.e("self_sick_insured","\u0421\u0430\u043c\u043e\u0437\u0430\u043d\u044f\u0442\u044b\u0439: \u0435\u0441\u0442\u044c \u0434\u043e\u0431\u0440\u043e\u0432\u043e\u043b\u044c\u043d\u043e\u0435 \u0441\u043e\u0446\u0441\u0442\u0440\u0430\u0445\u043e\u0432\u0430\u043d\u0438\u0435")
B.dn=new A.e("mil_conscript_spouse","\u0411\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u0430\u044f \u0436\u0435\u043d\u0430 \u0432\u043e\u0435\u043d\u043d\u043e\u0441\u043b\u0443\u0436\u0430\u0449\u0435\u0433\u043e \u043f\u043e \u043f\u0440\u0438\u0437\u044b\u0432\u0443")
B.d8=new A.e("mil_conscript_child","\u0420\u0435\u0431\u0451\u043d\u043e\u043a \u0432\u043e\u0435\u043d\u043d\u043e\u0441\u043b\u0443\u0436\u0430\u0449\u0435\u0433\u043e \u043f\u043e \u043f\u0440\u0438\u0437\u044b\u0432\u0443")
B.d1=new A.e("alimony_debt","\u0415\u0441\u0442\u044c \u0437\u0430\u0434\u043e\u043b\u0436\u0435\u043d\u043d\u043e\u0441\u0442\u044c \u043f\u043e \u0430\u043b\u0438\u043c\u0435\u043d\u0442\u0430\u043c")
B.dk=new A.e("valid_zero_income","\u0415\u0441\u0442\u044c \u0443\u0432\u0430\u0436\u0438\u0442\u0435\u043b\u044c\u043d\u0430\u044f \u043f\u0440\u0438\u0447\u0438\u043d\u0430 \u043d\u0443\u043b\u0435\u0432\u043e\u0433\u043e \u0434\u043e\u0445\u043e\u0434\u0430")
B.de=new A.e("i_adopt","\u0423\u0441\u044b\u043d\u043e\u0432\u043b\u044f\u044e / \u0443\u0434\u043e\u0447\u0435\u0440\u044f\u044e \u0440\u0435\u0431\u0451\u043d\u043a\u0430")
B.cK=new A.e("i_donor","\u041f\u043e\u0447\u0451\u0442\u043d\u044b\u0439 \u0434\u043e\u043d\u043e\u0440 \u0420\u043e\u0441\u0441\u0438\u0438")
B.aA=s([B.d_,B.dp,B.cC,B.d2,B.cO,B.cI,B.cV,B.cS,B.cF,B.d9,B.d0,B.d3,B.db,B.cT,B.cJ,B.dc,B.d4,B.cH,B.dn,B.d8,B.d1,B.dk,B.de,B.cK],t.b)
B.aB=s(["age","gender","employment","region","marital","children","youngestChildAge","income","familySize"],t.s)
B.dd=new A.e("own_home","\u0421\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0435 \u0436\u0438\u043b\u044c\u0451")
B.df=new A.e("rent_home","\u0421\u043d\u0438\u043c\u0430\u0435\u043c \u0436\u0438\u043b\u044c\u0451")
B.dj=new A.e("has_mortgage","\u0414\u0435\u0439\u0441\u0442\u0432\u0443\u044e\u0449\u0430\u044f \u0438\u043f\u043e\u0442\u0435\u043a\u0430")
B.cN=new A.e("bought_recent","\u041a\u0443\u043f\u0438\u043b\u0438 \u0436\u0438\u043b\u044c\u0451 \u0432 2021\u20132026")
B.dm=new A.e("high_utility","\u0416\u041a\u0425 > 22% \u0434\u043e\u0445\u043e\u0434\u0430")
B.cY=new A.e("need_housing","\u041d\u0443\u0436\u0434\u0430\u0435\u043c\u0441\u044f \u0432 \u0443\u043b\u0443\u0447\u0448\u0435\u043d\u0438\u0438 \u0436\u0438\u043b\u044c\u044f")
B.cW=new A.e("young_family","\u041f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0430 \xab\u041c\u043e\u043b\u043e\u0434\u0430\u044f \u0441\u0435\u043c\u044c\u044f\xbb")
B.cD=new A.e("communal","\u041a\u043e\u043c\u043c\u0443\u043d\u0430\u043b\u044c\u043d\u0430\u044f \u043a\u0432\u0430\u0440\u0442\u0438\u0440\u0430")
B.d6=new A.e("excess_property","\u0418\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u043e \u043c\u043e\u0436\u0435\u0442 \u043f\u0440\u0435\u0432\u044b\u0448\u0430\u0442\u044c \u043b\u0438\u043c\u0438\u0442 \u0434\u043b\u044f \u0435\u0434\u0438\u043d\u043e\u0433\u043e \u043f\u043e\u0441\u043e\u0431\u0438\u044f")
B.di=new A.e("high_deposits","\u0415\u0441\u0442\u044c \u043a\u0440\u0443\u043f\u043d\u044b\u0435 \u0432\u043a\u043b\u0430\u0434\u044b / \u043f\u0440\u043e\u0446\u0435\u043d\u0442\u044b \u0441\u0432\u0435\u0440\u0445 \u043b\u0438\u043c\u0438\u0442\u0430")
B.aC=s([B.dd,B.df,B.dj,B.cN,B.dm,B.cY,B.cW,B.cD,B.d6,B.di],t.b)
B.A=new A.h("pregnancy_support",A.fZ())
B.W=new A.h("newborn",A.fY())
B.R=new A.h("mat_capital",A.fW())
B.F=new A.h("care_leave",A.fS())
B.a4=new A.h("unified_children",A.h_())
B.C=new A.h("family_annual_payment",A.fU())
B.a6=new A.h("multi_child_mortgage",A.fX())
B.a_=new A.h("family_mortgage",A.fV())
B.K=new A.h("disabled_child",A.fT())
B.a5=new A.h("young_family",A.h0())
B.E=new A.h("adoption",A.fR())
B.y=new A.h("child_tax_deduction",A.i0())
B.t=new A.h("property_deduction",A.i6())
B.v=new A.h("medical_deduction",A.i5())
B.N=new A.h("education_deduction",A.i1())
B.x=new A.h("fitness_deduction",A.i2())
B.P=new A.h("iis_deduction",A.i3())
B.U=new A.h("life_insurance_deduction",A.i4())
B.G=new A.h("charity_deduction",A.i_())
B.a1=new A.h("student",A.hT())
B.a2=new A.h("unemployment",A.hU())
B.Q=new A.h("layoff",A.hN())
B.M=new A.h("housing_subsidy",A.hM())
B.Y=new A.h("pension",A.hP())
B.J=new A.h("disability",A.hJ())
B.V=new A.h("property_tax_relief",A.hQ())
B.B=new A.h("communal_housing",A.hH())
B.D=new A.h("social_contract",A.hS())
B.S=new A.h("military",A.hO())
B.z=new A.h("conscript_family",A.hI())
B.a3=new A.h("veteran_family",A.hV())
B.O=new A.h("honors",A.hL())
B.a0=new A.h("sick_leave",A.hR())
B.L=new A.h("donor",A.hK())
B.X=new A.h("north",A.hA())
B.H=new A.h("chernobyl",A.hx())
B.Z=new A.h("rehabilitated",A.hD())
B.T=new A.h("moscow",A.hz())
B.I=new A.h("dfo",A.hy())
B.u=new A.h("regional_mat_cap",A.hC())
B.w=new A.h("regional_extra_info",A.hB())
B.aD=s([B.A,B.W,B.R,B.F,B.a4,B.C,B.a6,B.a_,B.K,B.a5,B.E,B.y,B.t,B.v,B.N,B.x,B.P,B.U,B.G,B.a1,B.a2,B.Q,B.M,B.Y,B.J,B.V,B.B,B.D,B.S,B.z,B.a3,B.O,B.a0,B.L,B.X,B.H,B.Z,B.T,B.I,B.u,B.w],A.Y("o<h>"))
B.cG=new A.e("pregnant","\u0421\u0435\u0439\u0447\u0430\u0441 \u0431\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u0430")
B.cP=new A.e("newborn","\u0420\u0435\u0431\u0451\u043d\u043e\u043a \u0440\u043e\u0434\u0438\u043b\u0441\u044f \u0432 2025\u20132026")
B.cZ=new A.e("disabled_child","\u0420\u0435\u0431\u0451\u043d\u043e\u043a-\u0438\u043d\u0432\u0430\u043b\u0438\u0434")
B.cE=new A.e("solo_parent","\u041e\u0434\u0438\u043d\u043e\u043a\u0438\u0439 \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u044c")
B.dq=new A.e("used_matcap","\u041c\u0430\u0442\u043a\u0430\u043f\u0438\u0442\u0430\u043b \u0443\u0436\u0435 \u043f\u043e\u043b\u0443\u0447\u0435\u043d")
B.cM=new A.e("child_study","\u0420\u0435\u0431\u0451\u043d\u043e\u043a \u0443\u0447\u0438\u0442\u0441\u044f \u043e\u0447\u043d\u043e (\u0434\u043e 24)")
B.aE=s([B.cG,B.cP,B.cZ,B.cE,B.dq,B.cM],t.b)
B.cz=new A.t("employed","\u0420\u0430\u0431\u043e\u0442\u0430\u044e \u043e\u0444\u0438\u0446\u0438\u0430\u043b\u044c\u043d\u043e")
B.cw=new A.t("self","\u0421\u0430\u043c\u043e\u0437\u0430\u043d\u044f\u0442\u044b\u0439")
B.cv=new A.t("ip","\u0418\u041f")
B.cs=new A.t("unemployed_reg","\u0411\u0435\u0437\u0440\u0430\u0431\u043e\u0442\u043d\u044b\u0439 (\u043d\u0430 \u0431\u0438\u0440\u0436\u0435)")
B.cu=new A.t("unemployed","\u0411\u0435\u0437\u0440\u0430\u0431\u043e\u0442\u043d\u044b\u0439")
B.ct=new A.t("pensioner","\u041f\u0435\u043d\u0441\u0438\u043e\u043d\u0435\u0440")
B.cp=new A.t("student","\u0421\u0442\u0443\u0434\u0435\u043d\u0442 \u043e\u0447\u043d\u043e\u0439 \u0444\u043e\u0440\u043c\u044b")
B.cA=new A.t("matleave","\u0412 \u0434\u0435\u043a\u0440\u0435\u0442\u0435 / \u043e\u0442\u043f\u0443\u0441\u043a\u0435 \u043f\u043e \u0443\u0445\u043e\u0434\u0443")
B.cn=new A.t("caregiver","\u0423\u0445\u043e\u0434 \u0437\u0430 \u0440\u043e\u0434\u0441\u0442\u0432\u0435\u043d\u043d\u0438\u043a\u043e\u043c")
B.aF=s([B.cz,B.cw,B.cv,B.cs,B.cu,B.ct,B.cp,B.cA,B.cn],t.I)
B.d7=new A.e("has_dis1","\u0418\u043d\u0432\u0430\u043b\u0438\u0434 I \u0433\u0440\u0443\u043f\u043f\u044b \u0432 \u0441\u0435\u043c\u044c\u0435")
B.cU=new A.e("has_dis2","\u0418\u043d\u0432\u0430\u043b\u0438\u0434 II \u0433\u0440\u0443\u043f\u043f\u044b \u0432 \u0441\u0435\u043c\u044c\u0435")
B.cR=new A.e("has_dis3","\u0418\u043d\u0432\u0430\u043b\u0438\u0434 III \u0433\u0440\u0443\u043f\u043f\u044b \u0432 \u0441\u0435\u043c\u044c\u0435")
B.dh=new A.e("elderly80","\u041f\u043e\u0436\u0438\u043b\u043e\u0439 80+ \u043b\u0435\u0442")
B.cX=new A.e("vet_fam","\u0412\u0435\u0442\u0435\u0440\u0430\u043d \u0411\u0414 \u0432 \u0441\u0435\u043c\u044c\u0435")
B.aG=s([B.d7,B.cU,B.cR,B.dh,B.cX],t.b)
B.dl=new A.e("paid_med","\u041f\u043b\u0430\u0442\u0438\u043b(\u0430) \u0437\u0430 \u043b\u0435\u0447\u0435\u043d\u0438\u0435")
B.d5=new A.e("paid_edu","\u041f\u043b\u0430\u0442\u0438\u043b(\u0430) \u0437\u0430 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435")
B.da=new A.e("paid_fit","\u041f\u043b\u0430\u0442\u0438\u043b(\u0430) \u0437\u0430 \u0444\u0438\u0442\u043d\u0435\u0441")
B.cQ=new A.e("has_iis","\u0415\u0441\u0442\u044c \u0418\u0418\u0421")
B.cL=new A.e("charity","\u041f\u043e\u0436\u0435\u0440\u0442\u0432\u043e\u0432\u0430\u043d\u0438\u044f")
B.dg=new A.e("life_ins","\u0421\u0442\u0440\u0430\u0445\u043e\u0432\u0430\u043d\u0438\u0435 \u0436\u0438\u0437\u043d\u0438 (3+ \u043b\u0435\u0442)")
B.aH=s([B.dl,B.d5,B.da,B.cQ,B.cL,B.dg],t.b)
B.p={moscow:0,spb:1,sevastopol:2,adygea:3,altai_republic:4,bashkortostan:5,buryatia:6,dagestan:7,ingushetia:8,kabardino_balkaria:9,kalmykia:10,karachay_cherkessia:11,karelia:12,komi:13,crimea:14,mari_el:15,mordovia:16,sakha:17,north_ossetia:18,tatarstan:19,tyva:20,udmurtia:21,khakassia:22,chechnya:23,chuvashia:24,altai_krai:25,zabaykalsky:26,kamchatka:27,krasnodar:28,krasnoyarsk:29,perm:30,primorsky:31,stavropol:32,khabarovsk:33,amur:34,arkhangelsk:35,astrakhan:36,belgorod:37,bryansk:38,vladimir:39,volgograd:40,vologda:41,voronezh:42,zaporizhzhia:43,ivanovo:44,irkutsk:45,kaliningrad:46,kaluga:47,kemerovo:48,kirov:49,kostroma:50,kurgan:51,kursk:52,leningrad:53,lipetsk:54,lugansk:55,magadan:56,mo:57,murmansk:58,nizhny_novgorod:59,novgorod:60,novosibirsk:61,omsk:62,orenburg:63,orel:64,penza:65,pskov:66,rostov:67,ryazan:68,samara:69,saratov:70,sakhalin:71,sverdlovsk:72,smolensk:73,tambov:74,tver:75,tomsk:76,tula:77,tyumen:78,ulyanovsk:79,kherson:80,chelyabinsk:81,yaroslavl:82,jewish_ao:83,nenets_ao:84,khanty_mansi_ao:85,chukotka:86,yamalo_nenets_ao:87,donetsk:88}
B.aI=new A.O(B.p,[18971,17754,16613,14008,15473,14496,17754,14821,15311,17428,15962,15311,18079,18731,15799,14333,13844,24594,14659,13844,16450,14496,16613,15636,14170,14496,19057,28666,15636,18079,14985,19382,14659,19871,18731,18893,15799,13682,14985,15799,14008,16450,14333,15799,15311,17265,16776,15636,14821,14496,14985,15311,14170,17428,13518,15311,28340,17446,22709,15311,15962,15962,14170,14170,15147,13682,16125,15311,14496,15311,13682,22151,16125,16125,13518,15962,15962,16288,16288,14496,15799,14985,16288,20360,26712,19067,42511,22314,15311],t.J)
B.aJ=new A.O(B.p,[180861,121475,66605,63759,72941,74391,83574,49925,44652,53252,55806,54755,81569,95980,63834,70460,67262,139435,53721,90515,75253,77925,80227,46652,68379,63971,99768,151016,76115,105571,83646,96177,63673,97025,99073,91121,69820,73891,65803,73285,68340,80975,75525,58e3,57122,95318,77022,83930,83017,67199,63292,72992,75521,94348,76460,57e3,178076,116008,125302,80778,72178,86546,73100,74294,63817,67293,63454,70813,73393,76626,67353,148172,89286,68468,63024,72783,85829,84212,94124,69676,58e3,81366,73832,91167,146957,135914,214604,177711,60627],t.J)
B.aN={chukotka:0,kamchatka:1,magadan:2,yamalo_nenets_ao:3,nenets_ao:4,khanty_mansi_ao:5,murmansk:6,sakha:7,sakhalin:8,komi:9,arkhangelsk:10,krasnoyarsk:11,irkutsk:12,tomsk:13,karelia:14,tyumen:15}
B.aK=new A.O(B.aN,[1,0.6,0.6,0.5,0.5,0.5,0.4,0.4,0.4,0.2,0.2,0.2,0.2,0.2,0.15,0.15],t.J)
B.aP={c:0,w:1,h:2,p:3,s:4,m:5,t:6,r:7,a:8}
B.aL=new A.O(B.aP,["\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67 \u0421\u0435\u043c\u044c\u044f \u0438 \u0434\u0435\u0442\u0438","\ud83d\udcbc \u0417\u0430\u043d\u044f\u0442\u043e\u0441\u0442\u044c","\ud83c\udfe0 \u0416\u0438\u043b\u044c\u0451","\ud83d\udc74 \u041f\u0435\u043d\u0441\u0438\u044f","\ud83e\udd1d \u0421\u043e\u0446\u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430","\ud83c\udf96\ufe0f \u0412\u043e\u0435\u043d\u043d\u0430\u044f \u0441\u043b\u0443\u0436\u0431\u0430","\ud83d\udcca \u041d\u0430\u043b\u043e\u0433\u043e\u0432\u044b\u0435 \u0432\u044b\u0447\u0435\u0442\u044b","\ud83c\udf0d \u0420\u0435\u0433\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435","\ud83c\udf96\ufe0f \u041f\u043e\u0447\u0451\u0442\u043d\u044b\u0435 \u0437\u0432\u0430\u043d\u0438\u044f \u0438 \u0437\u0430\u0441\u043b\u0443\u0433\u0438"],t.w)
B.aO={regular:0,north:1,dfo:2}
B.aM=new A.O(B.aO,["regular","north","dfo"],t.w)
B.aQ={}
B.f5=new A.av(B.aQ,0,A.Y("av<u>"))
B.dr=A.N("ie")
B.ds=A.N("ig")
B.dt=A.N("e9")
B.du=A.N("ea")
B.dv=A.N("ec")
B.dw=A.N("ed")
B.dx=A.N("ee")
B.dy=A.N("r")
B.dz=A.N("eF")
B.dA=A.N("eG")
B.dB=A.N("eH")
B.dC=A.N("eI")})();(function staticFields(){$.cd=null
$.F=A.y([],t.f)
$.de=null
$.d2=null
$.d1=null
$.dO=null
$.dK=null
$.dR=null
$.cr=null
$.cw=null
$.cW=null
$.ce=A.y([],A.Y("o<n<r>?>"))
$.cQ=A.en(t.N)})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal
s($,"ih","b4",()=>A.h3("_$dart_dartClosure"))
s($,"io","dV",()=>A.y([new J.bc()],A.Y("o<aM>")))
s($,"im","cC",()=>A.dP(B.dy))
s($,"iq","dW",()=>{var r=2027
return A.y([A.cG("\u041f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c \u043f\u0440\u0430\u0432\u043e","family_payment_2026",A.aw(2026,8,15),A.aw(2026,10,1),"\u0412\u043e\u0437\u0432\u0440\u0430\u0442 \u0447\u0430\u0441\u0442\u0438 \u041d\u0414\u0424\u041b \u0437\u0430 2025 \u0433\u043e\u0434. \u041f\u043e\u0434\u0430\u0442\u044c \u043c\u043e\u0436\u043d\u043e \u0434\u043e 1 \u043e\u043a\u0442\u044f\u0431\u0440\u044f \u2014 \u043f\u043e\u0442\u043e\u043c \u0442\u043e\u043b\u044c\u043a\u043e \u0432 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u043c \u0433\u043e\u0434\u0443.",B.ad,"\u0421\u0435\u043c\u0435\u0439\u043d\u0430\u044f \u0432\u044b\u043f\u043b\u0430\u0442\u0430: \u043f\u0440\u0438\u0451\u043c \u0437\u0430\u044f\u0432\u043b\u0435\u043d\u0438\u0439 \u0437\u0430\u043a\u0430\u043d\u0447\u0438\u0432\u0430\u0435\u0442\u0441\u044f"),A.cG("\u041f\u0435\u0440\u0435\u0441\u0447\u0438\u0442\u0430\u0442\u044c","mrot_2027",A.aw(r,1,1),A.aw(r,1,31),"\u041f\u0435\u0440\u0435\u0441\u0447\u0438\u0442\u0430\u043d\u044b \u043f\u043e\u0441\u043e\u0431\u0438\u0435 \u043f\u043e \u0443\u0445\u043e\u0434\u0443 \u0434\u043e 1,5 \u043b\u0435\u0442, \u0434\u0435\u043a\u0440\u0435\u0442\u043d\u044b\u0435 \u043f\u0440\u0438 \u043d\u0435\u0432\u044b\u0441\u043e\u043a\u043e\u043c \u0434\u043e\u0445\u043e\u0434\u0435 \u0438 \u043c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u0439 \u0431\u043e\u043b\u044c\u043d\u0438\u0447\u043d\u044b\u0439.",B.o,"\u0421 1 \u044f\u043d\u0432\u0430\u0440\u044f \u0432\u044b\u0440\u043e\u0441\u043b\u0438 \u041c\u0420\u041e\u0422 \u0438 \u043f\u0440\u043e\u0436\u0438\u0442\u043e\u0447\u043d\u044b\u0439 \u043c\u0438\u043d\u0438\u043c\u0443\u043c"),A.cG("\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0441\u0443\u043c\u043c\u044b","indexation_2027",A.aw(r,2,1),A.aw(r,2,28),"\u041e\u0431\u043d\u043e\u0432\u0438\u043b\u0438 \u0441\u0443\u043c\u043c\u044b \u0431\u043e\u043b\u0435\u0435 \u0441\u043e\u0440\u043e\u043a\u0430 \u043c\u0435\u0440 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0438 \u043f\u043e \u0444\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0439 \u0438\u043d\u0444\u043b\u044f\u0446\u0438\u0438.",B.o,"\u0421 1 \u0444\u0435\u0432\u0440\u0430\u043b\u044f \u043f\u0440\u043e\u0438\u043d\u0434\u0435\u043a\u0441\u0438\u0440\u043e\u0432\u0430\u043d\u044b \u0432\u044b\u043f\u043b\u0430\u0442\u044b \u0438 \u043c\u0430\u0442\u043a\u0430\u043f\u0438\u0442\u0430\u043b")],A.Y("o<K>"))})
s($,"id","dT",()=>{var r,q,p=A.em(t.N,A.Y("w"))
for(r=0;r<16;++r){q=B.ax[r]
p.D(0,q.a,q)}return p})
s($,"il","dU",()=>new A.bL())})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:A.ah,SharedArrayBuffer:A.ah,ArrayBufferView:A.aJ,DataView:A.bh,Float32Array:A.bi,Float64Array:A.bj,Int16Array:A.bk,Int32Array:A.bl,Int8Array:A.bm,Uint16Array:A.bn,Uint32Array:A.bo,Uint8ClampedArray:A.aK,CanvasPixelArray:A.aK,Uint8Array:A.bp})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,SharedArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.ai.$nativeSuperclassTag="ArrayBufferView"
A.aS.$nativeSuperclassTag="ArrayBufferView"
A.aT.$nativeSuperclassTag="ArrayBufferView"
A.aH.$nativeSuperclassTag="ArrayBufferView"
A.aU.$nativeSuperclassTag="ArrayBufferView"
A.aV.$nativeSuperclassTag="ArrayBufferView"
A.aI.$nativeSuperclassTag="ArrayBufferView"})()
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
var s=A.hh
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()
//# sourceMappingURL=main.dart.js.map
