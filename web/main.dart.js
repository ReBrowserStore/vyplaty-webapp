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
if(a[b]!==s){A.hw(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.z(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.cB(b)
return new s(c,this)}:function(){if(s===null)s=A.cB(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.cB(a).prototype
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
cF(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cC(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.cD==null){A.fz()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.l(A.cW("Return interceptor for "+A.q(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.c_
if(o==null)o=$.c_=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.fF(a)
if(p!=null)return p
if(typeof a=="function")return B.ap
s=Object.getPrototypeOf(a)
if(s==null)return B.o
if(s===Object.prototype)return B.o
if(typeof q=="function"){o=$.c_
if(o==null)o=$.c_=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.l,enumerable:false,writable:true,configurable:true})
return B.l}return B.l},
dS(a,b){if(a>4294967295)throw A.l(A.bS(a,0,4294967295,"length",null))
return J.dU(new Array(a),b)},
dT(a,b){return A.z(new Array(a),b.k("n<0>"))},
dU(a,b){var s=A.z(a,b.k("n<0>"))
s.$flags=1
return s},
cO(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
dV(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.cO(r))break;++b}return b},
dW(a,b){var s,r,q
for(s=a.length;b>0;b=r){r=b-1
if(!(r<s))return A.u(a,r)
q=a.charCodeAt(r)
if(q!==32&&q!==13&&!J.cO(q))break}return b},
a4(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.ap.prototype
return J.b0.prototype}if(typeof a=="string")return J.ab.prototype
if(a==null)return J.aq.prototype
if(typeof a=="boolean")return J.b_.prototype
if(Array.isArray(a))return J.n.prototype
if(typeof a!="object"){if(typeof a=="function")return J.P.prototype
if(typeof a=="symbol")return J.au.prototype
if(typeof a=="bigint")return J.as.prototype
return a}if(a instanceof A.r)return a
return J.cC(a)},
dq(a){if(typeof a=="string")return J.ab.prototype
if(a==null)return a
if(Array.isArray(a))return J.n.prototype
if(typeof a!="object"){if(typeof a=="function")return J.P.prototype
if(typeof a=="symbol")return J.au.prototype
if(typeof a=="bigint")return J.as.prototype
return a}if(a instanceof A.r)return a
return J.cC(a)},
fr(a){if(a==null)return a
if(Array.isArray(a))return J.n.prototype
if(typeof a!="object"){if(typeof a=="function")return J.P.prototype
if(typeof a=="symbol")return J.au.prototype
if(typeof a=="bigint")return J.as.prototype
return a}if(a instanceof A.r)return a
return J.cC(a)},
bw(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.a4(a).B(a,b)},
L(a){return J.a4(a).gq(a)},
cl(a){return J.fr(a).gv(a)},
cG(a){return J.dq(a).gu(a)},
dA(a){return J.a4(a).gp(a)},
aU(a){return J.a4(a).j(a)},
aY:function aY(){},
b_:function b_(){},
aq:function aq(){},
at:function at(){},
Q:function Q(){},
bc:function bc(){},
aF:function aF(){},
P:function P(){},
as:function as(){},
au:function au(){},
n:function n(a){this.$ti=a},
aZ:function aZ(){},
bM:function bM(a){this.$ti=a},
am:function am(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
ar:function ar(){},
ap:function ap(){},
b0:function b0(){},
ab:function ab(){}},A={cn:function cn(){},
dX(a){return new A.ac("Field '"+a+"' has not been initialized.")},
R(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
cr(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
cE(a){var s,r
for(s=$.E.length,r=0;r<s;++r)if(a===$.E[r])return!0
return!1},
cN(){return new A.bg("No element")},
ac:function ac(a){this.a=a},
bU:function bU(){},
aw:function aw(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
S:function S(a,b,c){this.a=a
this.b=b
this.$ti=c},
W:function W(a,b,c){this.a=a
this.b=b
this.$ti=c},
A:function A(){},
dw(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
hM(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.D.b(a)},
q(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.aU(a)
return s},
bd(a){var s,r=$.cR
if(r==null)r=$.cR=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
bR(a,b){var s,r=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(r==null)return null
if(3>=r.length)return A.u(r,3)
s=r[3]
if(s!=null)return parseInt(a,10)
if(r[2]!=null)return parseInt(a,16)
return null},
bQ(a){var s,r
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return null
s=parseFloat(a)
if(isNaN(s)){r=B.f.S(a)
if(r==="NaN"||r==="+NaN"||r==="-NaN")return s
return null}return s},
be(a){var s,r,q,p
if(a instanceof A.r)return A.D(A.aT(a),null)
s=J.a4(a)
if(s===B.ao||s===B.aq||t.o.b(a)){r=B.m(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.D(A.aT(a),null)},
cS(a){var s,r,q
if(a==null||typeof a=="number"||A.cz(a))return J.aU(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.O)return a.j(0)
if(a instanceof A.a_)return a.a_(!0)
s=$.dz()
for(r=0;r<1;++r){q=s[r].aE(a)
if(q!=null)return q}return"Instance of '"+A.be(a)+"'"},
u(a,b){if(a==null)J.cG(a)
throw A.l(A.dp(a,b))},
dp(a,b){var s,r="index"
if(!A.dh(b))return new A.a7(!0,b,r,null)
s=J.cG(a)
if(b<0||b>=s)return A.dN(b,s,a,r)
return A.e5(b,r)},
f0(a){return new A.a7(!0,a,null,null)},
l(a){return A.y(a,new Error())},
y(a,b){var s
if(a==null)a=new A.bV()
b.dartException=a
s=A.hx
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
hx(){return J.aU(this.dartException)},
bu(a,b){throw A.y(a,b==null?new Error():b)},
dv(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.bu(A.eB(a,b,c),s)},
eB(a,b,c){var s,r,q,p,o,n,m,l,k
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
return new A.bk("'"+s+"': Cannot "+o+" "+l+k+n)},
cj(a){throw A.l(A.bH(a))},
ds(a){if(a==null)return J.L(a)
if(typeof a=="object")return A.bd(a)
return J.L(a)},
dK(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.bh().constructor.prototype):Object.create(new A.a9(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.cL(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.dG(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.cL(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
dG(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.l("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.dE)}throw A.l("Error in functionType of tearoff")},
dH(a,b,c,d){var s=A.cK
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
cL(a,b,c,d){if(c)return A.dJ(a,b,d)
return A.dH(b.length,d,a,b)},
dI(a,b,c,d){var s=A.cK,r=A.dF
switch(b?-1:a){case 0:throw A.l(new A.bT("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
dJ(a,b,c){var s,r
if($.cI==null)$.cI=A.cH("interceptor")
if($.cJ==null)$.cJ=A.cH("receiver")
s=b.length
r=A.dI(s,c,a,b)
return r},
cB(a){return A.dK(a)},
dE(a,b){return A.aS(v.typeUniverse,A.aT(a.a),b)},
cK(a){return a.a},
dF(a){return a.b},
cH(a){var s,r,q,p=new A.a9("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.l(A.bx("Field name "+a+" not found."))},
fs(a){return v.getIsolateTag(a)},
fF(a){var s,r,q,p,o,n=A.br($.dr.$1(a)),m=$.c9[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.ce[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.dc($.dm.$2(a,n))
if(q!=null){m=$.c9[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.ce[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.ci(s)
$.c9[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.ce[n]=s
return s}if(p==="-"){o=A.ci(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.dt(a,s)
if(p==="*")throw A.l(A.cW(n))
if(v.leafTags[n]===true){o=A.ci(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.dt(a,s)},
dt(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.cF(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
ci(a){return J.cF(a,!1,null,!!a.$iC)},
fH(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.ci(s)
else return J.cF(s,c,null,null)},
fz(){if(!0===$.cD)return
$.cD=!0
A.fA()},
fA(){var s,r,q,p,o,n,m,l
$.c9=Object.create(null)
$.ce=Object.create(null)
A.fy()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.du.$1(o)
if(n!=null){m=A.fH(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
fy(){var s,r,q,p,o,n,m=B.a4()
m=A.aj(B.a5,A.aj(B.a6,A.aj(B.n,A.aj(B.n,A.aj(B.a7,A.aj(B.a8,A.aj(B.a9(B.m),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.dr=new A.cb(p)
$.dm=new A.cc(o)
$.du=new A.cd(n)},
aj(a,b){return a(b)||b},
f7(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
cP(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=function(g,h){try{return new RegExp(g,h)}catch(n){return n}}(a,s+r+q+p+f)
if(o instanceof RegExp)return o
throw A.l(new A.bK("Illegal RegExp pattern ("+String(o)+")",a))},
hk(a,b,c){var s=a.indexOf(b,c)
return s>=0},
fd(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
hm(a,b,c){var s,r=b.gZ()
r.lastIndex=0
s=a.replace(r,A.fd(c))
return s},
dl(a){return a},
hl(a,b,c,d){var s,r,q,p,o,n,m
for(s=b.ao(0,a),s=new A.aH(s.a,s.b,s.c),r=t.F,q=0,p="";s.l();){o=s.d
if(o==null)o=r.a(o)
n=o.b
m=n.index
p=p+A.q(A.dl(B.f.H(a,q,m)))+A.q(c.$1(o))
q=m+n[0].length}s=p+A.q(A.dl(B.f.ac(a,q)))
return s.charCodeAt(0)==0?s:s},
G:function G(a,b){this.a=a
this.b=b},
aX:function aX(){},
N:function N(a,b,c){this.a=a
this.b=b
this.$ti=c},
aI:function aI(a,b){this.a=a
this.$ti=b},
aJ:function aJ(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
aE:function aE(){},
O:function O(){},
aW:function aW(){},
bj:function bj(){},
bh:function bh(){},
a9:function a9(a,b){this.a=a
this.b=b},
bT:function bT(a){this.a=a},
av:function av(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
bN:function bN(a,b){this.a=a
this.b=b
this.c=null},
cb:function cb(a){this.a=a},
cc:function cc(a){this.a=a},
cd:function cd(a){this.a=a},
a_:function a_(){},
ag:function ag(){},
b1:function b1(a,b){var _=this
_.a=a
_.b=b
_.e=_.c=null},
bo:function bo(a){this.b=a},
bl:function bl(a,b,c){this.a=a
this.b=b
this.c=c},
aH:function aH(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
hw(a){throw A.y(new A.ac("Field '"+a+"' has been assigned during initialization."),new Error())},
k(){throw A.y(A.dX(""),new Error())},
cX(){var s=new A.bX()
return s.b=s},
bX:function bX(){this.b=null},
ad:function ad(){},
aB:function aB(){},
b3:function b3(){},
ae:function ae(){},
az:function az(){},
aA:function aA(){},
b4:function b4(){},
b5:function b5(){},
b6:function b6(){},
b7:function b7(){},
b8:function b8(){},
b9:function b9(){},
ba:function ba(){},
aC:function aC(){},
bb:function bb(){},
aK:function aK(){},
aL:function aL(){},
aM:function aM(){},
aN:function aN(){},
cp(a,b){var s=b.c
return s==null?b.c=A.aQ(a,"cM",[b.x]):s},
cU(a){var s=a.w
if(s===6||s===7)return A.cU(a.x)
return s===11||s===12},
e8(a){return a.as},
ak(a){return A.c2(v.typeUniverse,a,!1)},
a2(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.a2(a1,s,a3,a4)
if(r===s)return a2
return A.d6(a1,r,!0)
case 7:s=a2.x
r=A.a2(a1,s,a3,a4)
if(r===s)return a2
return A.d5(a1,r,!0)
case 8:q=a2.y
p=A.ai(a1,q,a3,a4)
if(p===q)return a2
return A.aQ(a1,a2.x,p)
case 9:o=a2.x
n=A.a2(a1,o,a3,a4)
m=a2.y
l=A.ai(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.ct(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.ai(a1,j,a3,a4)
if(i===j)return a2
return A.d7(a1,k,i)
case 11:h=a2.x
g=A.a2(a1,h,a3,a4)
f=a2.y
e=A.eX(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.d4(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.ai(a1,d,a3,a4)
o=a2.x
n=A.a2(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.cu(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.l(A.aV("Attempted to substitute unexpected RTI kind "+a0))}},
ai(a,b,c,d){var s,r,q,p,o=b.length,n=A.c3(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.a2(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
eY(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.c3(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.a2(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
eX(a,b,c,d){var s,r=b.a,q=A.ai(a,r,c,d),p=b.b,o=A.ai(a,p,c,d),n=b.c,m=A.eY(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.bm()
s.a=q
s.b=o
s.c=m
return s},
z(a,b){a[v.arrayRti]=b
return a},
dn(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.fu(s)
return a.$S()}return null},
fB(a,b){var s
if(A.cU(b))if(a instanceof A.O){s=A.dn(a)
if(s!=null)return s}return A.aT(a)},
aT(a){if(a instanceof A.r)return A.B(a)
if(Array.isArray(a))return A.a1(a)
return A.cy(J.a4(a))},
a1(a){var s=a[v.arrayRti],r=t.q
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
B(a){var s=a.$ti
return s!=null?s:A.cy(a)},
cy(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.eI(a,s)},
eI(a,b){var s=a instanceof A.O?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.et(v.typeUniverse,s.name)
b.$ccache=r
return r},
fu(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.c2(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
ft(a){return A.a3(A.B(a))},
cA(a){var s
if(a instanceof A.a_)return A.fe(a.$r,a.W())
s=a instanceof A.O?A.dn(a):null
if(s!=null)return s
if(t.R.b(a))return J.dA(a).a
if(Array.isArray(a))return A.a1(a)
return A.aT(a)},
a3(a){var s=a.r
return s==null?a.r=new A.c1(a):s},
fe(a,b){var s,r,q=b,p=q.length
if(p===0)return t.d
if(0>=p)return A.u(q,0)
s=A.aS(v.typeUniverse,A.cA(q[0]),"@<0>")
for(r=1;r<p;++r){if(!(r<q.length))return A.u(q,r)
s=A.d8(v.typeUniverse,s,A.cA(q[r]))}return A.aS(v.typeUniverse,s,a)},
J(a){return A.a3(A.c2(v.typeUniverse,a,!1))},
eH(a){var s=this
s.b=A.eW(s)
return s.b(a)},
eW(a){var s,r,q,p,o
if(a===t.K)return A.eO
if(A.a5(a))return A.eS
s=a.w
if(s===6)return A.eF
if(s===1)return A.dj
if(s===7)return A.eJ
r=A.eV(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.a5)){a.f="$i"+q
if(q==="m")return A.eM
if(a===t.m)return A.eL
return A.eR}}else if(s===10){p=A.f7(a.x,a.y)
o=p==null?A.dj:p
return o==null?A.cw(o):o}return A.eD},
eV(a){if(a.w===8){if(a===t.S)return A.dh
if(a===t.i||a===t.H)return A.eN
if(a===t.N)return A.eQ
if(a===t.y)return A.cz}return null},
eG(a){var s=this,r=A.eC
if(A.a5(s))r=A.eA
else if(s===t.K)r=A.cw
else if(A.al(s)){r=A.eE
if(s===t.x)r=A.ey
else if(s===t.v)r=A.dc
else if(s===t.u)r=A.ew
else if(s===t.n)r=A.db
else if(s===t.t)r=A.ex
else if(s===t.z)r=A.U}else if(s===t.S)r=A.bq
else if(s===t.N)r=A.br
else if(s===t.y)r=A.ev
else if(s===t.H)r=A.ez
else if(s===t.i)r=A.cv
else if(s===t.m)r=A.c
s.a=r
return s.a(a)},
eD(a){var s=this
if(a==null)return A.al(s)
return A.fC(v.typeUniverse,A.fB(a,s),s)},
eF(a){if(a==null)return!0
return this.x.b(a)},
eR(a){var s,r=this
if(a==null)return A.al(r)
s=r.f
if(a instanceof A.r)return!!a[s]
return!!J.a4(a)[s]},
eM(a){var s,r=this
if(a==null)return A.al(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.r)return!!a[s]
return!!J.a4(a)[s]},
eL(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.r)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
di(a){if(typeof a=="object"){if(a instanceof A.r)return t.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
eC(a){var s=this
if(a==null){if(A.al(s))return a}else if(s.b(a))return a
throw A.y(A.de(a,s),new Error())},
eE(a){var s=this
if(a==null||s.b(a))return a
throw A.y(A.de(a,s),new Error())},
de(a,b){return new A.bp("TypeError: "+A.cY(a,A.D(b,null)))},
cY(a,b){return A.bJ(a)+": type '"+A.D(A.cA(a),null)+"' is not a subtype of type '"+b+"'"},
H(a,b){return new A.bp("TypeError: "+A.cY(a,b))},
eJ(a){var s=this
return s.x.b(a)||A.cp(v.typeUniverse,s).b(a)},
eO(a){return a!=null},
cw(a){if(a!=null)return a
throw A.y(A.H(a,"Object"),new Error())},
eS(a){return!0},
eA(a){return a},
dj(a){return!1},
cz(a){return!0===a||!1===a},
ev(a){if(!0===a)return!0
if(!1===a)return!1
throw A.y(A.H(a,"bool"),new Error())},
ew(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.y(A.H(a,"bool?"),new Error())},
cv(a){if(typeof a=="number")return a
throw A.y(A.H(a,"double"),new Error())},
ex(a){if(typeof a=="number")return a
if(a==null)return a
throw A.y(A.H(a,"double?"),new Error())},
dh(a){return typeof a=="number"&&Math.floor(a)===a},
bq(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.y(A.H(a,"int"),new Error())},
ey(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.y(A.H(a,"int?"),new Error())},
eN(a){return typeof a=="number"},
ez(a){if(typeof a=="number")return a
throw A.y(A.H(a,"num"),new Error())},
db(a){if(typeof a=="number")return a
if(a==null)return a
throw A.y(A.H(a,"num?"),new Error())},
eQ(a){return typeof a=="string"},
br(a){if(typeof a=="string")return a
throw A.y(A.H(a,"String"),new Error())},
dc(a){if(typeof a=="string")return a
if(a==null)return a
throw A.y(A.H(a,"String?"),new Error())},
c(a){if(A.di(a))return a
throw A.y(A.H(a,"JSObject"),new Error())},
U(a){if(a==null)return a
if(A.di(a))return a
throw A.y(A.H(a,"JSObject?"),new Error())},
dk(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.D(a[q],b)
return s},
eU(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.dk(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.D(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
df(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=", ",a2=null
if(a5!=null){s=a5.length
if(a4==null)a4=A.z([],t.s)
else a2=a4.length
r=a4.length
for(q=s;q>0;--q)B.b.m(a4,"T"+(r+q))
for(p=t.X,o="<",n="",q=0;q<s;++q,n=a1){m=a4.length
l=m-1-q
if(!(l>=0))return A.u(a4,l)
o=o+n+a4[l]
k=a5[q]
j=k.w
if(!(j===2||j===3||j===4||j===5||k===p))o+=" extends "+A.D(k,a4)}o+=">"}else o=""
p=a3.x
i=a3.y
h=i.a
g=h.length
f=i.b
e=f.length
d=i.c
c=d.length
b=A.D(p,a4)
for(a="",a0="",q=0;q<g;++q,a0=a1)a+=a0+A.D(h[q],a4)
if(e>0){a+=a0+"["
for(a0="",q=0;q<e;++q,a0=a1)a+=a0+A.D(f[q],a4)
a+="]"}if(c>0){a+=a0+"{"
for(a0="",q=0;q<c;q+=3,a0=a1){a+=a0
if(d[q+1])a+="required "
a+=A.D(d[q+2],a4)+" "+d[q]}a+="}"}if(a2!=null){a4.toString
a4.length=a2}return o+"("+a+") => "+b},
D(a,b){var s,r,q,p,o,n,m,l=a.w
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=a.x
r=A.D(s,b)
q=s.w
return(q===11||q===12?"("+r+")":r)+"?"}if(l===7)return"FutureOr<"+A.D(a.x,b)+">"
if(l===8){p=A.eZ(a.x)
o=a.y
return o.length>0?p+("<"+A.dk(o,b)+">"):p}if(l===10)return A.eU(a,b)
if(l===11)return A.df(a,b,null)
if(l===12)return A.df(a.x,b,a.y)
if(l===13){n=a.x
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.u(b,n)
return b[n]}return"?"},
eZ(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
eu(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
et(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.c2(a,b,!1)
else if(typeof m=="number"){s=m
r=A.aR(a,5,"#")
q=A.c3(s)
for(p=0;p<s;++p)q[p]=r
o=A.aQ(a,b,q)
n[b]=o
return o}else return m},
es(a,b){return A.d9(a.tR,b)},
er(a,b){return A.d9(a.eT,b)},
c2(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.d1(A.d_(a,null,b,!1))
r.set(b,s)
return s},
aS(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.d1(A.d_(a,b,c,!0))
q.set(c,r)
return r},
d8(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.ct(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
T(a,b){b.a=A.eG
b.b=A.eH
return b},
aR(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.I(null,null)
s.w=b
s.as=c
r=A.T(a,s)
a.eC.set(c,r)
return r},
d6(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.ep(a,b,r,c)
a.eC.set(r,s)
return s},
ep(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.a5(b))if(!(b===t.P||b===t.T))if(s!==6)r=s===7&&A.al(b.x)
if(r)return b
else if(s===1)return t.P}q=new A.I(null,null)
q.w=6
q.x=b
q.as=c
return A.T(a,q)},
d5(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.en(a,b,r,c)
a.eC.set(r,s)
return s},
en(a,b,c,d){var s,r
if(d){s=b.w
if(A.a5(b)||b===t.K)return b
else if(s===1)return A.aQ(a,"cM",[b])
else if(b===t.P||b===t.T)return t.V}r=new A.I(null,null)
r.w=7
r.x=b
r.as=c
return A.T(a,r)},
eq(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.I(null,null)
s.w=13
s.x=b
s.as=q
r=A.T(a,s)
a.eC.set(q,r)
return r},
aP(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
em(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
aQ(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.aP(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.I(null,null)
r.w=8
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.T(a,r)
a.eC.set(p,q)
return q},
ct(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.aP(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.I(null,null)
o.w=9
o.x=s
o.y=r
o.as=q
n=A.T(a,o)
a.eC.set(q,n)
return n},
d7(a,b,c){var s,r,q="+"+(b+"("+A.aP(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.I(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.T(a,s)
a.eC.set(q,r)
return r},
d4(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.aP(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.aP(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.em(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.I(null,null)
p.w=11
p.x=b
p.y=c
p.as=r
o=A.T(a,p)
a.eC.set(r,o)
return o},
cu(a,b,c,d){var s,r=b.as+("<"+A.aP(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.eo(a,b,c,r,d)
a.eC.set(r,s)
return s},
eo(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.c3(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.a2(a,b,r,0)
m=A.ai(a,c,r,0)
return A.cu(a,n,m,c!==m)}}l=new A.I(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.T(a,l)},
d_(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
d1(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.eh(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.d0(a,r,l,k,!1)
else if(q===46)r=A.d0(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.Z(a.u,a.e,k.pop()))
break
case 94:k.push(A.eq(a.u,k.pop()))
break
case 35:k.push(A.aR(a.u,5,"#"))
break
case 64:k.push(A.aR(a.u,2,"@"))
break
case 126:k.push(A.aR(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.ej(a,k)
break
case 38:A.ei(a,k)
break
case 63:p=a.u
k.push(A.d6(p,A.Z(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.d5(p,A.Z(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.eg(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.d2(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.el(a.u,a.e,o)
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
return A.Z(a.u,a.e,m)},
eh(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
d0(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.eu(s,o.x)[p]
if(n==null)A.bu('No "'+p+'" in "'+A.e8(o)+'"')
d.push(A.aS(s,o,n))}else d.push(p)
return m},
ej(a,b){var s,r=a.u,q=A.cZ(a,b),p=b.pop()
if(typeof p=="string")b.push(A.aQ(r,p,q))
else{s=A.Z(r,a.e,p)
switch(s.w){case 11:b.push(A.cu(r,s,q,a.n))
break
default:b.push(A.ct(r,s,q))
break}}},
eg(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.cZ(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.Z(p,a.e,o)
q=new A.bm()
q.a=s
q.b=n
q.c=m
b.push(A.d4(p,r,q))
return
case-4:b.push(A.d7(p,b.pop(),s))
return
default:throw A.l(A.aV("Unexpected state under `()`: "+A.q(o)))}},
ei(a,b){var s=b.pop()
if(0===s){b.push(A.aR(a.u,1,"0&"))
return}if(1===s){b.push(A.aR(a.u,4,"1&"))
return}throw A.l(A.aV("Unexpected extended operation "+A.q(s)))},
cZ(a,b){var s=b.splice(a.p)
A.d2(a.u,a.e,s)
a.p=b.pop()
return s},
Z(a,b,c){if(typeof c=="string")return A.aQ(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.ek(a,b,c)}else return c},
d2(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.Z(a,b,c[s])},
el(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.Z(a,b,c[s])},
ek(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.l(A.aV("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.l(A.aV("Bad index "+c+" for "+b.j(0)))},
fC(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.v(a,b,null,c,null)
r.set(c,s)}return s},
v(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.a5(d))return!0
s=b.w
if(s===4)return!0
if(A.a5(b))return!1
if(b.w===1)return!0
r=s===13
if(r)if(A.v(a,c[b.x],c,d,e))return!0
q=d.w
p=t.P
if(b===p||b===t.T){if(q===7)return A.v(a,b,c,d.x,e)
return d===p||d===t.T||q===6}if(d===t.K){if(s===7)return A.v(a,b.x,c,d,e)
return s!==6}if(s===7){if(!A.v(a,b.x,c,d,e))return!1
return A.v(a,A.cp(a,b),c,d,e)}if(s===6)return A.v(a,p,c,d,e)&&A.v(a,b.x,c,d,e)
if(q===7){if(A.v(a,b,c,d.x,e))return!0
return A.v(a,b,c,A.cp(a,d),e)}if(q===6)return A.v(a,b,c,p,e)||A.v(a,b,c,d.x,e)
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
if(!A.v(a,j,c,i,e)||!A.v(a,i,e,j,c))return!1}return A.dg(a,b.x,c,d.x,e)}if(q===11){if(b===t.M)return!0
if(p)return!1
return A.dg(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.eK(a,b,c,d,e)}if(o&&q===10)return A.eP(a,b,c,d,e)
return!1},
dg(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.v(a3,a4.x,a5,a6.x,a7))return!1
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
if(!A.v(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.v(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.v(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!A.v(a3,e[a+2],a7,g,a5))return!1
break}}while(b<d){if(f[b+1])return!1
b+=3}return!0},
eK(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
while(n!==m){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.aS(a,b,r[o])
return A.da(a,p,null,c,d.y,e)}return A.da(a,b.y,null,c,d.y,e)},
da(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.v(a,b[s],d,e[s],f))return!1
return!0},
eP(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.v(a,r[s],c,q[s],e))return!1
return!0},
al(a){var s=a.w,r=!0
if(!(a===t.P||a===t.T))if(!A.a5(a))if(s!==6)r=s===7&&A.al(a.x)
return r},
a5(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
d9(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
c3(a){return a>0?new Array(a):v.typeUniverse.sEA},
I:function I(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
bm:function bm(){this.c=this.b=this.a=null},
c1:function c1(a){this.a=a},
bZ:function bZ(){},
bp:function bp(a){this.a=a},
d3(a,b,c){return 0},
a0:function a0(a,b){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.$ti=b},
ah:function ah(a,b){this.a=a
this.$ti=b},
dY(a,b){return new A.av(a.k("@<0>").U(b).k("av<1,2>"))},
dZ(a){return new A.X(a.k("X<0>"))},
e_(a){return new A.X(a.k("X<0>"))},
cs(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
ef(a,b,c){var s=new A.Y(a,b,c.k("Y<0>"))
s.c=a.e
return s},
e0(a,b){var s,r,q,p=A.dZ(b)
for(s=A.ef(a,a.r,A.B(a).c),r=s.$ti.c;s.l();){q=s.d
p.m(0,b.a(q==null?r.a(q):q))}return p},
co(a){var s,r
if(A.cE(a))return"{...}"
s=new A.bi("")
try{r={}
B.b.m($.E,a)
s.a+="{"
r.a=!0
a.a4(0,new A.bO(r,s))
s.a+="}"}finally{if(0>=$.E.length)return A.u($.E,-1)
$.E.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
X:function X(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
bn:function bn(a){this.a=a
this.c=this.b=null},
Y:function Y(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
p:function p(){},
b2:function b2(){},
bO:function bO(a,b){this.a=a
this.b=b},
af:function af(){},
aO:function aO(){},
e2(a,b,c,d){var s,r=c?J.dT(a,d):J.dS(a,d)
if(a!==0)for(s=0;s<r.length;++s)r[s]=b
return r},
e3(a,b,c){var s,r,q=A.z([],c.k("n<0>"))
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.cj)(a),++r)B.b.m(q,c.a(a[r]))
q.$flags=1
return q},
e1(a,b){var s,r=A.z([],b.k("n<0>"))
for(s=a.gv(a);s.l();)B.b.m(r,s.gn())
return r},
cQ(a,b){var s=A.e3(a,!1,b)
s.$flags=3
return s},
cT(a,b){return new A.b1(a,A.cP(a,!1,!0,b,!1,""))},
cV(a,b,c){var s=J.cl(b)
if(!s.l())return a
if(c.length===0){do a+=A.q(s.gn())
while(s.l())}else{a+=A.q(s.gn())
while(s.l())a=a+c+A.q(s.gn())}return a},
bJ(a){if(typeof a=="number"||A.cz(a)||a==null)return J.aU(a)
if(typeof a=="string")return JSON.stringify(a)
return A.cS(a)},
aV(a){return new A.by(a)},
bx(a){return new A.a7(!1,null,null,a)},
e5(a,b){return new A.bf(null,null,!0,a,b,"Value not in range")},
bS(a,b,c,d,e){return new A.bf(b,c,!0,a,d,"Invalid value")},
e6(a,b,c){if(0>a||a>c)throw A.l(A.bS(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.l(A.bS(b,a,c,"end",null))
return b}return c},
dN(a,b,c,d){return new A.bL(b,!0,a,d,"Index out of range")},
ee(a){return new A.bk(a)},
cW(a){return new A.bW(a)},
e9(a){return new A.bg(a)},
bH(a){return new A.bG(a)},
dR(a,b,c){var s,r
if(A.cE(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.z([],t.s)
B.b.m($.E,a)
try{A.eT(a,s)}finally{if(0>=$.E.length)return A.u($.E,-1)
$.E.pop()}r=A.cV(b,t.U.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
cm(a,b,c){var s,r
if(A.cE(a))return b+"..."+c
s=new A.bi(b)
B.b.m($.E,a)
try{r=s
r.a=A.cV(r.a,a,", ")}finally{if(0>=$.E.length)return A.u($.E,-1)
$.E.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
eT(a,b){var s,r,q,p,o,n,m,l=a.gv(a),k=0,j=0
for(;;){if(!(k<80||j<3))break
if(!l.l())return
s=A.q(l.gn())
B.b.m(b,s)
k+=s.length+2;++j}if(!l.l()){if(j<=5)return
if(0>=b.length)return A.u(b,-1)
r=b.pop()
if(0>=b.length)return A.u(b,-1)
q=b.pop()}else{p=l.gn();++j
if(!l.l()){if(j<=4){B.b.m(b,A.q(p))
return}r=A.q(p)
if(0>=b.length)return A.u(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gn();++j
for(;l.l();p=o,o=n){n=l.gn();++j
if(j>100){for(;;){if(!(k>75&&j>3))break
if(0>=b.length)return A.u(b,-1)
k-=b.pop().length+2;--j}B.b.m(b,"...")
return}}q=A.q(p)
r=A.q(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
for(;;){if(!(k>80&&b.length>3))break
if(0>=b.length)return A.u(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)B.b.m(b,m)
B.b.m(b,q)
B.b.m(b,r)},
e4(a,b,c,d){var s
if(B.j===c){s=B.i.gq(a)
b=J.L(b)
return A.cr(A.R(A.R($.ck(),s),b))}if(B.j===d){s=B.i.gq(a)
b=J.L(b)
c=J.L(c)
return A.cr(A.R(A.R(A.R($.ck(),s),b),c))}s=B.i.gq(a)
b=J.L(b)
c=J.L(c)
d=J.L(d)
d=A.cr(A.R(A.R(A.R(A.R($.ck(),s),b),c),d))
return d},
bY:function bY(){},
bI:function bI(){},
by:function by(a){this.a=a},
bV:function bV(){},
a7:function a7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bf:function bf(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
bL:function bL(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
bk:function bk(a){this.a=a},
bW:function bW(a){this.a=a},
bg:function bg(a){this.a=a},
bG:function bG(a){this.a=a},
bK:function bK(a,b){this.a=a
this.b=b},
f:function f(){},
ax:function ax(a,b,c){this.a=a
this.b=b
this.$ti=c},
V:function V(){},
r:function r(){},
bi:function bi(a){this.a=a},
bF:function bF(a,b,c){this.a=a
this.b=b
this.c=c},
bz:function bz(){},
bA:function bA(){},
bB:function bB(){},
bC:function bC(){},
bD:function bD(){},
ao:function ao(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.ch=_.ay=_.ax=_.at=_.as=_.Q=_.z=_.y=_.x=$},
an:function an(a){this.a=a
this.b=""},
h:function h(a,b){this.a=a
this.b=b},
t:function t(a,b){this.a=a
this.b=b},
e:function e(a,b){this.a=a
this.b=b},
fT(a){var s,r,q=B.aF.A(0,a)
if(q==null)q=a
for(s=0;s<92;++s){r=B.k[s]
if(r.a===q)return r}return B.b.ga2(B.k)},
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
M:function M(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=e
_.r=f
_.w=g},
bE:function bE(a,b){this.a=a
this.b=b},
a8:function a8(a,b){this.a=a
this.b=b},
w:function w(a,b){this.a=a
this.d=b},
aG:function aG(a,b,c,d,e,f,g,h,i,j){var _=this
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
b(a,b){var s,r,q
if(a>=1e6&&!b)return B.c.ab(a/1e6,1)+" \u043c\u043b\u043d \u20bd"
if(!b)s=(a<0?Math.ceil(a):Math.floor(a))!==a
else s=!0
r=B.c.ab(a,s?2:0).split(".")
q=A.hl(B.b.ga2(r),A.cT("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!1),t.A.a(t.Q.a(new A.ca())),null)
if(r.length===1)return q+" \u20bd"
return q+"."+B.b.gaC(r)+" \u20bd"},
ca:function ca(){},
fG(){var s,r,q,p,o,n,m,l,k="Attempting to rewrap a JS function.",j=t.L,i=A.z([B.p],j)
for(s=0;s<9;++s){r=B.ay[s]
i.push(new A.G(r.a,r.b))}A.c5("employment",i)
i=A.z([],j)
for(s=0;s<92;++s){q=B.k[s]
i.push(new A.G(q.a,q.b))}A.c5("region",i)
A.c5("marital",B.as)
j=A.z([],j)
for(i=t.l.a(new A.cf()),p=B.b.gv(B.at),i=new A.W(p,i,t.e);i.l();){o=p.gn()
j.push(new A.G(o.a,o.b))}A.c5("youngestChildAge",j)
A.bs("childChecks",B.ax)
A.bs("familyChecks",B.az)
A.bs("housingChecks",B.aw)
A.bs("taxChecks",B.aA)
A.bs("specialChecks",B.au)
for(j=A.dd,i=v.G,s=0;s<9;++s){n=B.av[s]
m=A.U(A.c(i.document).getElementById(n))
p=m==null
if(!p){o=new A.cg()
if(typeof o=="function")A.bu(A.bx(k))
l=function(a,b){return function(c){return a(b,c,arguments.length)}}(j,o)
l[$.bv()]=o
m.addEventListener("input",l)}if(!p){p=new A.ch()
if(typeof p=="function")A.bu(A.bx(k))
l=function(a,b){return function(c){return a(b,c,arguments.length)}}(j,p)
l[$.bv()]=p
m.addEventListener("change",l)}}A.c7()},
c5(a,b){var s,r,q,p,o=v.G,n=A.U(A.c(o.document).getElementById(a))
if(n==null)return
for(s=b.length,r=0;r<b.length;b.length===s||(0,A.cj)(b),++r){q=b[r]
p=A.c(A.c(o.document).createElement("option"))
p.value=q.a
p.text=q.b
A.c(n.appendChild(p))}},
bs(a,b){var s,r,q,p,o,n,m,l=v.G,k=A.U(A.c(l.document).getElementById(a))
if(k==null)return
for(s=b.length,r=A.dd,q=0;q<s;++q){p=b[q]
o=A.c(A.c(l.document).createElement("div"))
o.className="chip"
o.textContent=p.b
n=new A.c4(p,o)
if(typeof n=="function")A.bu(A.bx("Attempting to rewrap a JS function."))
m=function(c,d){return function(e){return c(d,e,arguments.length)}}(r,n)
m[$.bv()]=n
o.addEventListener("click",m)
A.c(k.appendChild(o))}},
c6(a){var s=A.U(A.c(v.G.document).getElementById(a))
s=s==null?null:A.br(s.value)
return s==null?"":s},
bt(a){var s=A.U(A.c(v.G.document).getElementById(a))
s=s==null?null:A.br(s.value)
return s==null?"":s},
c7(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7=A.bR(A.c6("children"),null)
if(a7==null)a7=0
s=v.G
r=A.U(A.c(s.document).getElementById("youngestWrap"))
q=a7>0
if(q){if(r!=null)A.c(r.classList).remove("hidden")}else if(r!=null)A.c(r.classList).add("hidden")
p=A.bt("region")
o=A.c6("familySize")
n=A.bt("youngestChildAge")
m=A.c6("age")
l=A.bt("gender")
k=A.bt("employment")
j=p.length===0?"regular":p
i=A.bt("marital")
if(q)q=n.length===0?"3":n
else q="99"
h=A.e0($.cx,t.N)
g=A.c6("income")
f=new A.aG(m,l,k,j,i,a7,q,h,g,o.length===0?"1":o)
e=$.dy().ap(f)
d=A.U(A.c(s.document).getElementById("result"))
if(d!=null){d.textContent=""
c=A.c(A.c(s.document).createElement("div"))
b=A.c(A.c(s.document).createElement("div"))
b.className="cnt"
b.textContent=""+e.a.length
A.c(c.appendChild(b))
b=A.c(A.c(s.document).createElement("div"))
b.className="lbl"
b.textContent="\u041d\u0430\u0439\u0434\u0435\u043d\u043e \u0432\u044b\u043f\u043b\u0430\u0442"
A.c(c.appendChild(b))
A.c(d.appendChild(c))
c=A.c(A.c(s.document).createElement("div"))
c.className="right"
b=A.c(A.c(s.document).createElement("div"))
b.className="m"
q=e.b
q=q>0?"\u2248 "+A.b(q,!1)+"/\u043c\u0435\u0441":"\u2014"
b.textContent=q
A.c(c.appendChild(b))
q=e.c
if(q>0){b=A.c(A.c(s.document).createElement("div"))
b.className="o"
b.textContent=A.b(q,!1)+" \u0440\u0430\u0437\u043e\u0432\u043e"
A.c(c.appendChild(b))}A.c(d.appendChild(c))}a=A.U(A.c(s.document).getElementById("list"))
if(a==null)return
a.textContent=""
q=e.a
if(q.length===0){c=A.c(A.c(s.document).createElement("div"))
c.className="muted"
c.textContent="\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0444\u043e\u0440\u043c\u0443 \u2014 \u0437\u0434\u0435\u0441\u044c \u043f\u043e\u044f\u0432\u044f\u0442\u0441\u044f \u043f\u043e\u043b\u043e\u0436\u0435\u043d\u043d\u044b\u0435 \u0432\u044b\u043f\u043b\u0430\u0442\u044b."
A.c(a.appendChild(c))
return}for(m=B.aE.ga1(),l=m.$ti,m=new A.a0(m.a(),l.k("a0<1>")),k=A.a1(q),j=k.k("K(1)"),k=k.k("S<1>"),i=k.k("f.E"),l=l.c;m.l();){h=m.b
if(h==null)h=l.a(h)
a0=A.e1(new A.S(q,j.a(new A.c8(h)),k),i)
if(a0.length===0)continue
c=A.c(A.c(s.document).createElement("div"))
c.className="cat"
h=h.b
g=A.cT("[\\u{1F000}-\\u{1FAFF}\\u{2600}-\\u{27BF}\\u{2190}-\\u{21FF}\\u{2B00}-\\u{2BFF}\ufe0f\u200d]",!0)
c.textContent=B.f.S(A.hm(h,g,""))
A.c(a.appendChild(c))
for(h=a0.length,a1=0;a1<a0.length;a0.length===h||(0,A.cj)(a0),++a1){a2=a0[a1]
c=A.c(A.c(s.document).createElement("div"))
c.className="benefit"
b=A.c(A.c(s.document).createElement("div"))
b.className="head"
a3=A.c(A.c(s.document).createElement("div"))
a3.className="nm"
a3.textContent=a2.b
A.c(b.appendChild(a3))
g=a2.r
if(g==="monthly")a4="month"
else a4=g==="once"?"once":"relief"
a3=A.c(A.c(s.document).createElement("div"))
a3.className="amt "+a4
a3.textContent=a2.f
A.c(b.appendChild(a3))
A.c(c.appendChild(b))
g=a2.d
if(g.length!==0){b=A.c(A.c(s.document).createElement("div"))
b.className="desc"
b.textContent=g
A.c(c.appendChild(b))}a5=A.dD(a2,f)
if(a5!=null){b=A.c(A.c(s.document).createElement("details"))
g=A.c(A.c(s.document).createElement("summary"))
g.textContent="\u041f\u043e\u0447\u0435\u043c\u0443 \u043f\u043e\u043b\u043e\u0436\u0435\u043d\u043e"
A.c(b.appendChild(g))
a3=A.c(A.c(s.document).createElement("div"))
a3.className="why"
a3.textContent=a5.a
A.c(b.appendChild(a3))
a6=a5.b
if(a6!=null){a3=A.c(A.c(s.document).createElement("div"))
a3.className="src"
a3.textContent=a6.d
A.c(b.appendChild(a3))}A.c(c.appendChild(b))}A.c(a.appendChild(c))}}},
cf:function cf(){},
cg:function cg(){},
ch:function ch(){},
c4:function c4(a,b){this.a=a
this.b=b},
c8:function c8(a){this.a=a},
dd(a,b,c){t.Z.a(a)
if(A.bq(c)>=1)return a.$1(b)
return a.$0()},
fQ(a,b,c){var s,r,q,p,o,n,m
if(!a.w.i(0,"pregnant")||a.b!=="female")return
s=b.b
if(s>0&&s<14)return
if(b.ga7()){s=b.y
s===$&&A.k()
r=b.w
q=r.x
if(s<q*0.67)p=1
else p=s<q*0.85?0.75:0.5
o=B.c.t(r.y*p)
c.h(0,"c","\ud83e\udd30",B.e,"\u0415\u0434\u0438\u043d\u043e\u0435 \u043f\u043e\u0441\u043e\u0431\u0438\u0435 \u0431\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0439 (\u0440\u0430\u043d\u043d\u0438\u0435 \u0441\u0440\u043e\u043a\u0438)","\u041f\u0440\u0438 \u043f\u043e\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0435 \u043d\u0430 \u0443\u0447\u0451\u0442 \u0434\u043e 12 \u043d\u0435\u0434., \u0434\u043b\u044f \u043c\u0430\u043b\u043e\u0438\u043c\u0443\u0449\u0438\u0445. "+B.c.G(p*100)+"% \u041f\u041c \u0442\u0440\u0443\u0434\u043e\u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0433\u043e \u043d\u0430\u0441\u0435\u043b\u0435\u043d\u0438\u044f \u0440\u0435\u0433\u0438\u043e\u043d\u0430 = "+A.b(o,!1)+"/\u043c\u0435\u0441.",o,A.b(o,!1)+"/\u043c\u0435\u0441","monthly")}n=b.e
m=Math.min(B.c.t((n>0?n:Math.max(27093,b.c/b.d))*24/730*140),955836)
c.h(0,"c","\ud83e\udd31",B.e,"\u041f\u043e\u0441\u043e\u0431\u0438\u0435 \u043f\u043e \u0431\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u0438 \u0440\u043e\u0434\u0430\u043c","100% \u0441\u0440. \u0437\u0430\u0440\u043f\u043b\u0430\u0442\u044b \u0437\u0430 140 \u0434\u043d\u0435\u0439 (\u0441\u0440. \u0434\u043d. = \u0437\u043f \xd7 24 / 730). \u041c\u0430\u043a\u0441: "+A.b(955836,!1)+".",m,A.b(m,!1)+" (\u0435\u0434\u0438\u043d\u043e\u0432\u0440.)","once")},
fN(a,b,c){if(!a.w.i(0,"newborn"))return
c.h(0,"c","\ud83c\udf81",B.e,"\u0415\u0434\u0438\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0435 \u043f\u0440\u0438 \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u0438","\u041d\u0430 \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u0440\u0435\u0431\u0451\u043d\u043a\u0430. \u0413\u043e\u0441\u0443\u0441\u043b\u0443\u0433\u0438 \u0438\u043b\u0438 \u041c\u0424\u0426.",28450.45,A.b(28450.45,!0),"once")},
fI(a,b,c){var s,r,q="once",p=a.w
if(p.i(0,"used_matcap"))return
s=p.i(0,"newborn")||p.i(0,"pregnant")
p=a.f
r=s?1:0
if(s&&p===0)c.h(0,"c","\ud83c\udfe6",B.d,"\u041c\u0430\u0442\u0435\u0440\u0438\u043d\u0441\u043a\u0438\u0439 \u043a\u0430\u043f\u0438\u0442\u0430\u043b (1-\u0439 \u0440\u0435\u0431\u0451\u043d\u043e\u043a)","\u0418\u043f\u043e\u0442\u0435\u043a\u0430, \u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0435, \u043f\u0435\u043d\u0441\u0438\u044f, \u0440\u0435\u0430\u0431\u0438\u043b\u0438\u0442\u0430\u0446\u0438\u044f.",728921.9,A.b(728921.9,!1),q)
else if(s&&p>=1)c.h(0,"c","\ud83c\udfe6",B.d,"\u041c\u0430\u0442\u0435\u0440\u0438\u043d\u0441\u043a\u0438\u0439 \u043a\u0430\u043f\u0438\u0442\u0430\u043b (2-\u0439 \u0438 \u0434\u0430\u043b\u0435\u0435)","\u041f\u043e\u043b\u043d\u0430\u044f \u0441\u0443\u043c\u043c\u0430 \u0435\u0441\u043b\u0438 \u043d\u0430 1-\u0433\u043e \u043d\u0435 \u043f\u043e\u043b\u0443\u0447\u0430\u043b\u0438, \u0438\u043d\u0430\u0447\u0435 \u0434\u043e\u043f\u043b\u0430\u0442\u0430.",963243.17,A.b(963243.17,!1),q)
else if(!s&&p+r>=2)c.h(0,"c","\ud83c\udfe6",B.d,"\u041c\u0430\u0442\u043a\u0430\u043f\u0438\u0442\u0430\u043b (2-\u0439 \u0438 \u0434\u0430\u043b\u0435\u0435)","\u0415\u0441\u043b\u0438 \u043d\u0430 1-\u0433\u043e \u043d\u0435 \u043f\u043e\u043b\u0443\u0447\u0430\u043b\u0438 \u2014 \u043f\u043e\u043b\u043d\u0430\u044f \u0441\u0443\u043c\u043c\u0430.",963243.17,A.b(963243.17,!1),q)},
f1(a,b,c){var s,r,q,p,o
if(b.r>1.5||a.f<=0||a.w.i(0,"pregnant"))return
s=b.e
s=s>0?s:Math.max(27093,b.c/b.d)
r=a.c
q=r==="employed"||r==="matleave"||r==="ip"||r==="self"?10837.2:10669.64
p=Math.max(q,Math.min(B.c.t(s*0.4),83021.19))
r=A.b(q,!0)
o=A.b(83021.19,!0)
c.h(0,"c","\ud83c\udf7c",B.e,"\u041f\u043e\u0441\u043e\u0431\u0438\u0435 \u043f\u043e \u0443\u0445\u043e\u0434\u0443 \u0434\u043e 1,5 \u043b\u0435\u0442","40% \u0441\u0440. \u0437\u0430\u0440\u043f\u043b\u0430\u0442\u044b. \u041c\u0438\u043d "+r+", \u043c\u0430\u043a\u0441 "+o+".",p,A.b(p,(p<0?Math.ceil(p):Math.floor(p))!==p)+"/\u043c\u0435\u0441","monthly")},
hz(a,b,c){var s,r,q,p,o,n,m,l,k=a.f,j=!1
if(k>=3){s=b.y
s===$&&A.k()
r=b.w.x
if(s>=r){if(s<r*1.1)s=(!b.gaa()||b.c>=18062)&&b.ga8()&&b.ga9()
else s=j
j=s}}if(k>0)s=!(b.ga7()||j)
else s=!0
if(s)return
if(j)q=0.5
else{s=b.y
s===$&&A.k()
r=b.w.x
if(s<r*0.67)q=1
else{s=s<r*0.85?0.75:0.5
q=s}}s=b.w
r=s.z
p=B.c.t(r*q)
o=j?"\u041c\u043d\u043e\u0433\u043e\u0434\u0435\u0442\u043d\u044b\u043c \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u0435\u0442\u0441\u044f \u043f\u0440\u0438 \u043f\u0440\u0435\u0432\u044b\u0448\u0435\u043d\u0438\u0438 \u0434\u043e\u0445\u043e\u0434\u0430 \u0434\u043e 10% \u041f\u041c (\u0441 22.05.2026). ":""
n=B.c.G(q*100)
r=A.b(r,!1)
m=b.y
m===$&&A.k()
l=p*k
c.h(0,"c","\ud83d\udc76",B.e,"\u0415\u0434\u0438\u043d\u043e\u0435 \u043f\u043e\u0441\u043e\u0431\u0438\u0435 \u043d\u0430 \u0434\u0435\u0442\u0435\u0439 \u0434\u043e 17",o+n+"% \u0440\u0435\u0433\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u041f\u041c \u0440\u0435\u0431\u0451\u043d\u043a\u0430 ("+r+"). \u0412\u0430\u0448 \u0434\u043e\u0445\u043e\u0434 \u043d\u0430 \u0447\u0435\u043b.: "+A.b(m,!1)+", \u043f\u043e\u0440\u043e\u0433: "+A.b(s.x,!1)+".",l,A.b(p,!1)+" \xd7 "+k+" = "+A.b(l,!1)+"/\u043c\u0435\u0441","monthly")},
ff(a,b,c){var s,r,q,p=a.f
if(p<2)s=p>=1&&a.w.i(0,"child_study")
else s=!0
p=b.ch
p===$&&A.k()
if(p){p=b.z
p===$&&A.k()}else p=!1
r=!0
if(p)if(s){p=b.y
p===$&&A.k()
p=p>=b.w.x*1.5||a.w.i(0,"alimony_debt")}else p=r
else p=r
if(p)return
p=b.x
p===$&&A.k()
q=B.c.t(p*0.5384615384615384)
c.h(0,"c","\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc66",B.d,"\u0415\u0436\u0435\u0433\u043e\u0434\u043d\u0430\u044f \u0441\u0435\u043c\u0435\u0439\u043d\u0430\u044f \u0432\u044b\u043f\u043b\u0430\u0442\u0430","\u0412\u043e\u0437\u0432\u0440\u0430\u0442 7 \u0438\u0437 13 \u043f.\u043f. \u041d\u0414\u0424\u041b \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u0430\u044e\u0449\u0438\u0445 \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u0435\u0439 \u0441 2+ \u0434\u0435\u0442\u044c\u043c\u0438 \u043f\u0440\u0438 \u0434\u043e\u0445\u043e\u0434\u0435 \u043d\u0438\u0436\u0435 1,5 \u041f\u041c \u043d\u0430 \u0447\u0435\u043b. \u0414\u0435\u0439\u0441\u0442\u0432\u0443\u0435\u0442 \u0441 1 \u0438\u044e\u043d\u044f 2026 \u0433. (\u0424\u0417 \u211658-\u0424\u0417).",q,A.b(q,!1)+"/\u0433\u043e\u0434","once")},
fM(a,b,c){if(a.f<3||!a.w.i(0,"has_mortgage"))return
c.h(0,"c","\ud83c\udfe1",B.d,"450 000 \u20bd \u043d\u0430 \u0438\u043f\u043e\u0442\u0435\u043a\u0443 (\u043c\u043d\u043e\u0433\u043e\u0434\u0435\u0442\u043d\u044b\u0435)","\u041f\u0440\u0438 3+ \u0434\u0435\u0442\u044f\u0445 \u043f\u043e\u0441\u043b\u0435 01.01.2019.",45e4,A.b(45e4,!1),"once")},
fa(a,b,c){var s
if(!a.w.i(0,"disabled_child"))return
c.h(0,"c","\ud83e\uddd2",B.a,"\u0412\u044b\u043f\u043b\u0430\u0442\u044b \u043d\u0430 \u0440\u0435\u0431\u0451\u043d\u043a\u0430-\u0438\u043d\u0432\u0430\u043b\u0438\u0434\u0430","\u0421\u043e\u0446\u0438\u0430\u043b\u044c\u043d\u0430\u044f \u043f\u0435\u043d\u0441\u0438\u044f (~22 618 \u20bd) + \u0415\u0414\u0412 \u043f\u0440\u0438 \u043e\u0442\u043a\u0430\u0437\u0435 \u043e\u0442 \u041d\u0421\u0423 (~4 447 \u20bd).",27065,"~"+A.b(27065,!1)+"/\u043c\u0435\u0441","monthly")
s=a.c
if(s!=="employed"&&s!=="ip"&&s!=="self"&&s!=="pensioner")c.h(0,"c","\ud83e\udd1d",B.a,"\u041f\u043e\u0441\u043e\u0431\u0438\u0435 \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u044e \u0440\u0435\u0431\u0451\u043d\u043a\u0430-\u0438\u043d\u0432\u0430\u043b\u0438\u0434\u0430","\u041d\u0435\u0440\u0430\u0431\u043e\u0442\u0430\u044e\u0449\u0435\u043c\u0443/\u0437\u0430\u043d\u044f\u0442\u043e\u043c\u0443 \u043d\u0435\u043f\u043e\u043b\u043d\u043e \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u044e \u0438\u043b\u0438 \u043e\u043f\u0435\u043a\u0443\u043d\u0443 (\u0423\u043a\u0430\u0437 \u2116175). \u0418\u043d\u0434\u0435\u043a\u0441\u0438\u0440\u0443\u0435\u0442\u0441\u044f 1 \u0444\u0435\u0432\u0440\u0430\u043b\u044f.",11300,"~"+A.b(11300,!1)+"/\u043c\u0435\u0441","monthly")},
hB(a,b,c){var s=a.w,r=!0
if(s.i(0,"young_family"))if(b.b<=35)if(a.e==="married")s=!(s.i(0,"need_housing")||s.i(0,"rent_home"))
else s=r
else s=r
else s=r
if(s)return
c.h(0,"h","\ud83d\udc6b",B.d,"\u041f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0430 \xab\u041c\u043e\u043b\u043e\u0434\u0430\u044f \u0441\u0435\u043c\u044c\u044f\xbb","\u0421\u043e\u0446\u0432\u044b\u043f\u043b\u0430\u0442\u0430 \u043d\u0430 \u043f\u043e\u043a\u0443\u043f\u043a\u0443/\u0441\u0442\u0440\u043e\u0438\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u043e \u0436\u0438\u043b\u044c\u044f.",0,"30\u201335% \u0441\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u0438 \u0436\u0438\u043b\u044c\u044f","benefit")},
f_(a,b,c){var s="once",r="\u041f\u0440\u0430\u0432\u043e \u043d\u0430 \u043c\u0430\u0442\u043a\u0430\u043f\u0438\u0442\u0430\u043b \u0440\u0430\u0441\u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u044f\u0435\u0442\u0441\u044f \u043d\u0430 \u0443\u0441\u044b\u043d\u043e\u0432\u043b\u0451\u043d\u043d\u044b\u0445 \u0434\u0435\u0442\u0435\u0439.",q=a.w
if(!q.i(0,"i_adopt"))return
c.h(0,"c","\ud83d\udc9b",B.e,"\u0415\u0434\u0438\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0435 \u043f\u0440\u0438 \u0443\u0441\u044b\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0438","\u0421\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u0430\u044f \u0432\u044b\u043f\u043b\u0430\u0442\u0430 \u043f\u0440\u0438 \u0443\u0441\u044b\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0438. \u041e\u0444\u043e\u0440\u043c\u043b\u044f\u0435\u0442\u0441\u044f \u0447\u0435\u0440\u0435\u0437 \u0413\u043e\u0441\u0443\u0441\u043b\u0443\u0433\u0438.",28450.45,A.b(28450.45,!0),s)
c.h(0,"c","\ud83d\udc9b",B.d,"\u041f\u043e\u0432\u044b\u0448\u0435\u043d\u043d\u043e\u0435 \u043f\u043e\u0441\u043e\u0431\u0438\u0435 \u043f\u0440\u0438 \u0443\u0441\u044b\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0438","\u0415\u0441\u043b\u0438 \u0440\u0435\u0431\u0451\u043d\u043a\u0443 7+ \u043b\u0435\u0442, \u0440\u0435\u0431\u0451\u043d\u043e\u043a-\u0438\u043d\u0432\u0430\u043b\u0438\u0434 \u0438\u043b\u0438 \u0443\u0441\u044b\u043d\u043e\u0432\u043b\u044f\u0435\u0442\u0435 \u0431\u0440\u0430\u0442\u044c\u0435\u0432/\u0441\u0435\u0441\u0442\u0451\u0440.",0,"\u0434\u043e "+A.b(217384.58,!0)+" (\u0441\u043f\u0435\u0446. \u0441\u043b\u0443\u0447\u0430\u0438)","benefit")
if(q.i(0,"used_matcap"))return
q=a.f
if(q===0)c.h(0,"c","\ud83c\udfe6",B.d,"\u041c\u0430\u0442\u0435\u0440\u0438\u043d\u0441\u043a\u0438\u0439 \u043a\u0430\u043f\u0438\u0442\u0430\u043b \u043f\u0440\u0438 \u0443\u0441\u044b\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0438 (1-\u0439)",r,728921.9,A.b(728921.9,!1),s)
else if(q+1>=2)c.h(0,"c","\ud83c\udfe6",B.d,"\u041c\u0430\u0442\u0435\u0440\u0438\u043d\u0441\u043a\u0438\u0439 \u043a\u0430\u043f\u0438\u0442\u0430\u043b \u043f\u0440\u0438 \u0443\u0441\u044b\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0438 (2-\u0439+)",r,963243.17,A.b(963243.17,!1),s)},
fO(a,b,c){var s,r,q,p=b.w
if(!p.e)return
s=B.aD.A(0,p.a)
if(s==null)s=0.3
r=b.c
q=B.c.t((r>0?r:28395.89)*s)
c.h(0,"r","\ud83c\udf28\ufe0f",B.a,"\u0420\u0430\u0439\u043e\u043d\u043d\u044b\u0439 \u043a\u043e\u044d\u0444\u0444\u0438\u0446\u0438\u0435\u043d\u0442","\u041a \u0437\u0430\u0440\u043f\u043b\u0430\u0442\u0435 \u0438 \u043f\u0435\u043d\u0441\u0438\u0438 +"+B.c.G(s*100)+"% (\u043c\u0438\u043d.) \u0434\u043e 100% \u2014 \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043e\u0442 \u0441\u0443\u0431\u044a\u0435\u043a\u0442\u0430 \u0420\u0424.",q,"\u043e\u0442 +"+A.b(q,!1)+"/\u043c\u0435\u0441","monthly")
c.h(0,"r","\u2708\ufe0f",B.a,"\u041a\u043e\u043c\u043f\u0435\u043d\u0441\u0430\u0446\u0438\u044f \u043f\u0440\u043e\u0435\u0437\u0434\u0430 \u0432 \u043e\u0442\u043f\u0443\u0441\u043a","\u0420\u0430\u0437 \u0432 2 \u0433\u043e\u0434\u0430 \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u043d\u0438\u043a\u043e\u0432 \u041a\u0440\u0430\u0439\u043d\u0435\u0433\u043e \u0421\u0435\u0432\u0435\u0440\u0430.",0,"\u0440\u0430\u0437 \u0432 2 \u0433\u043e\u0434\u0430","benefit")
c.h(0,"r","\ud83c\udfd6\ufe0f",B.a,"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u043e\u0442\u043f\u0443\u0441\u043a (\u0421\u0435\u0432\u0435\u0440)","16\u201324 \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0445 \u0434\u043d\u044f \u043a \u0435\u0436\u0435\u0433\u043e\u0434\u043d\u043e\u043c\u0443 \u043e\u0442\u043f\u0443\u0441\u043a\u0443.",0,"16\u201324 \u0434\u043d\u044f","benefit")},
f3(a,b,c){if(!a.w.i(0,"i_chern"))return
c.h(0,"s","\u2622\ufe0f",B.h,"\u0415\u0414\u0412 \u043b\u0438\u043a\u0432\u0438\u0434\u0430\u0442\u043e\u0440\u0430 \u0427\u0410\u042d\u0421","\u0415\u0414\u0412 \u0438 \u043b\u044c\u0433\u043e\u0442\u044b.",2590,A.b(2590,!1)+"/\u043c\u0435\u0441","monthly")},
h2(a,b,c){if(!a.w.i(0,"i_repr"))return
c.h(0,"s","\ud83d\udcdc",B.h,"\u0412\u044b\u043f\u043b\u0430\u0442\u044b \u0440\u0435\u0430\u0431\u0438\u043b\u0438\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u043c","\u0415\u0414\u0412, \u043b\u044c\u0433\u043e\u0442\u044b \u043f\u043e \u0416\u041a\u0425, \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u0443 \u0438 \u043c\u0435\u0434\u0438\u0446\u0438\u043d\u0435.",0,"\u0415\u0414\u0412 + \u043b\u044c\u0433\u043e\u0442\u044b","benefit")},
fL(a,b,c){var s,r,q="monthly",p=b.w
if(!p.d)return
if(a.f>0){s=b.as
s===$&&A.k()
s=s&&p.as!=null}else s=!1
if(s){s=p.as
s.toString
c.h(0,"r","\ud83c\udfd9\ufe0f",B.h,"\u041c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u0434\u043e\u043f\u043b\u0430\u0442\u0430 \u043d\u0430 \u0434\u0435\u0442\u0435\u0439","\u0420\u0435\u0433\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u0430\u044f \u043d\u0430\u0434\u0431\u0430\u0432\u043a\u0430 \u0441\u0432\u0435\u0440\u0445 \u0444\u0435\u0434\u0435\u0440\u0430\u043b\u044c\u043d\u044b\u0445 \u0432\u044b\u043f\u043b\u0430\u0442.",s,"~"+A.b(s,!1)+"/\u043c\u0435\u0441",q)}s=!1
if(a.d==="moscow")if(a.w.i(0,"i_pen")||a.c==="pensioner"){r=p.ax
if(r!=null){s=b.y
s===$&&A.k()
r=s<r
s=r}}if(s){s=p.ax
s.toString
r=b.y
r===$&&A.k()
c.h(0,"r","\ud83c\udfd9\ufe0f",B.h,"\u0414\u043e\u043f\u043b\u0430\u0442\u0430 \u043a \u043f\u0435\u043d\u0441\u0438\u0438 \u0434\u043e \u0433\u043e\u0440\u043e\u0434\u0441\u043a\u043e\u0433\u043e \u041f\u041c (\u041c\u043e\u0441\u043a\u0432\u0430)","\u041f\u0435\u043d\u0441\u0438\u044f \u0434\u043e\u0432\u043e\u0434\u0438\u0442\u0441\u044f \u0434\u043e \u0433\u043e\u0440\u043e\u0434\u0441\u043a\u043e\u0433\u043e \u043f\u0440\u043e\u0436\u0438\u0442\u043e\u0447\u043d\u043e\u0433\u043e \u043c\u0438\u043d\u0438\u043c\u0443\u043c\u0430 \u043f\u0435\u043d\u0441\u0438\u043e\u043d\u0435\u0440\u0430.",B.c.aq(s-r,0,1/0),"\u0434\u043e "+A.b(s,!1)+"/\u043c\u0435\u0441",q)}if((a.c==="student"||a.w.i(0,"i_stu"))&&p.at!=null){p=p.at
p.toString
c.h(0,"r","\ud83c\udfd9\ufe0f",B.h,"\u041c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u0441\u0442\u0438\u043f\u0435\u043d\u0434\u0438\u044f","\u0420\u0435\u0433\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u0430\u044f \u043d\u0430\u0434\u0431\u0430\u0432\u043a\u0430 \u043a \u0444\u0435\u0434\u0435\u0440\u0430\u043b\u044c\u043d\u043e\u0439 \u0441\u0442\u0438\u043f\u0435\u043d\u0434\u0438\u0438.",p,A.b(p,!1)+"/\u043c\u0435\u0441",q)}},
f8(a,b,c){if(!b.w.f&&!a.w.i(0,"i_dfo"))return
c.h(0,"r","\ud83c\udf0f",B.a,"\u0414\u0430\u043b\u044c\u043d\u0435\u0432\u043e\u0441\u0442\u043e\u0447\u043d\u044b\u0439 \u0433\u0435\u043a\u0442\u0430\u0440","\u041f\u0440\u0430\u0432\u043e \u043d\u0430 \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u044b\u0439 \u0437\u0435\u043c\u0435\u043b\u044c\u043d\u044b\u0439 \u0443\u0447\u0430\u0441\u0442\u043e\u043a \u0434\u043e 1 \u0433\u0430.",0,"1 \u0433\u0430 \u0437\u0435\u043c\u043b\u0438","benefit")},
fU(a,b,c){var s,r,q
if(b.w.d)return
s=a.f>0||a.w.i(0,"pregnant")
r=a.c==="student"||a.w.i(0,"i_stu")
if(!s&&!r)return
q=A.z([],t.s)
if(s)B.b.m(q,"\u0441\u0435\u043c\u044c\u044f\u043c \u0441 \u0434\u0435\u0442\u044c\u043c\u0438")
if(r)B.b.m(q,"\u0441\u0442\u0443\u0434\u0435\u043d\u0442\u0430\u043c")
c.h(0,"r","\ud83d\uddfa\ufe0f",B.a,"\u0420\u0435\u0433\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u0434\u043e\u043f\u043b\u0430\u0442\u044b","\u0412 \u0432\u0430\u0448\u0435\u043c \u0441\u0443\u0431\u044a\u0435\u043a\u0442\u0435 \u0420\u0424 \u043c\u043e\u0433\u0443\u0442 \u0434\u0435\u0439\u0441\u0442\u0432\u043e\u0432\u0430\u0442\u044c \u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0435 \u043c\u0435\u0440\u044b \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0438 "+B.b.aA(q," \u0438 ")+" (\u0434\u043e\u043f\u043b\u0430\u0442\u044b \u043d\u0430 \u0434\u0435\u0442\u0435\u0439 \u0438 \u0448\u043a\u043e\u043b\u044c\u043d\u0438\u043a\u043e\u0432, \u0440\u0435\u0433\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u0441\u0442\u0438\u043f\u0435\u043d\u0434\u0438\u0430\u043b\u044c\u043d\u044b\u0435 \u043d\u0430\u0434\u0431\u0430\u0432\u043a\u0438, \u043b\u044c\u0433\u043e\u0442\u043d\u044b\u0439 \u043f\u0440\u043e\u0435\u0437\u0434). \u0420\u0430\u0437\u043c\u0435\u0440 \u0438 \u0443\u0441\u043b\u043e\u0432\u0438\u044f \u0437\u0430\u0432\u0438\u0441\u044f\u0442 \u043e\u0442 \u0440\u0435\u0433\u0438\u043e\u043d\u0430 \u2014 \u0443\u0442\u043e\u0447\u043d\u0438\u0442\u0435 \u0432 \u0441\u043e\u0446\u0437\u0430\u0449\u0438\u0442\u0435, \u041c\u0424\u0426 \u0438\u043b\u0438 \u043d\u0430 \u043f\u043e\u0440\u0442\u0430\u043b\u0435 \u0413\u043e\u0441\u0443\u0441\u043b\u0443\u0433.",0,"\u0443\u0442\u043e\u0447\u043d\u044f\u0439\u0442\u0435 \u0432 \u0440\u0435\u0433\u0438\u043e\u043d\u0435","benefit")},
fV(a,b,c){var s,r,q=b.w,p=q.ch
if(p==null)return
s=q.CW
if(a.f<s)return
r=s===2?"2-\u0433\u043e":"3-\u0433\u043e"
c.h(0,"r","\ud83c\udfe6",B.e,"\u0420\u0435\u0433\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0439 \u043c\u0430\u0442\u0435\u0440\u0438\u043d\u0441\u043a\u0438\u0439 \u043a\u0430\u043f\u0438\u0442\u0430\u043b","\u0415\u0434\u0438\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u0430\u044f \u0432\u044b\u043f\u043b\u0430\u0442\u0430 \u043f\u0440\u0438 \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u0438 "+r+" \u0438 \u043f\u043e\u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0445 \u0434\u0435\u0442\u0435\u0439. \u0412 \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0440\u0435\u0433\u0438\u043e\u043d\u0430\u0445 \u0435\u0441\u0442\u044c \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f \u043f\u043e \u0432\u043e\u0437\u0440\u0430\u0441\u0442\u0443 \u0438\u043b\u0438 \u0434\u043e\u0445\u043e\u0434\u0443 \u2014 \u0443\u0442\u043e\u0447\u043d\u044f\u0439\u0442\u0435 \u0432 \u041c\u0424\u0426.",p,A.b(p,!1),"once")},
hn(a,b,c){var s
if(!(a.c==="student"||a.w.i(0,"i_stu")))return
c.h(0,"w","\ud83c\udf93",B.e,"\u0421\u043e\u0446\u0438\u0430\u043b\u044c\u043d\u0430\u044f \u0441\u0442\u0438\u043f\u0435\u043d\u0434\u0438\u044f","\u0414\u043b\u044f \u043d\u0443\u0436\u0434\u0430\u044e\u0449\u0438\u0445\u0441\u044f \u0441\u0442\u0443\u0434\u0435\u043d\u0442\u043e\u0432 \u043e\u0447\u043d\u043e\u0439 \u0444\u043e\u0440\u043c\u044b (\u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0430\u0435\u0442\u0441\u044f \u0441\u043f\u0440\u0430\u0432\u043a\u043e\u0439). \u041c\u0438\u043d. \u043d\u043e\u0440\u043c\u0430\u0442\u0438\u0432 \u0434\u043b\u044f \u0432\u0443\u0437\u043e\u0432 \u0441 01.09.2025.",3340,A.b(3340,!1)+"/\u043c\u0435\u0441","monthly")
s=b.Q
s===$&&A.k()
if(s)c.h(0,"w","\ud83d\udcb0",B.e,"\u0413\u043e\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043d\u043d\u0430\u044f \u0430\u043a\u0430\u0434\u0435\u043c\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0441\u0442\u0438\u043f\u0435\u043d\u0434\u0438\u044f","\u0411\u0430\u0437\u043e\u0432\u0430\u044f \u0430\u043a\u0430\u0434\u0435\u043c\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0441\u0442\u0438\u043f\u0435\u043d\u0434\u0438\u044f \u0434\u043b\u044f \u043e\u0447\u043d\u0438\u043a\u043e\u0432 (\u043c\u0438\u043d. \u043d\u043e\u0440\u043c\u0430\u0442\u0438\u0432 \u0434\u043b\u044f \u0432\u0443\u0437\u043e\u0432).",2224,A.b(2224,!1)+"/\u043c\u0435\u0441","monthly")
c.h(0,"w","\ud83d\ude8c",B.a,"\u041b\u044c\u0433\u043e\u0442\u043d\u044b\u0439 \u043f\u0440\u043e\u0435\u0437\u0434\u043d\u043e\u0439 (\u0441\u0442\u0443\u0434\u0435\u043d\u0442)","\u0421\u043a\u0438\u0434\u043a\u0430 50% \u043d\u0430 \u0433\u043e\u0440\u043e\u0434\u0441\u043a\u043e\u0439 \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442 \u0432\u043e \u043c\u043d\u043e\u0433\u0438\u0445 \u0440\u0435\u0433\u0438\u043e\u043d\u0430\u0445.",0,"\u0441\u043a\u0438\u0434\u043a\u0430 50%","benefit")
if(a.w.i(0,"paid_edu"))c.h(0,"t","\ud83c\udf93",B.d,"\u0412\u044b\u0447\u0435\u0442 \u0437\u0430 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435 (\u0441\u0430\u043c \u0441\u0442\u0443\u0434\u0435\u043d\u0442)","13% \u043e\u0442 \u043e\u043f\u043b\u0430\u0442\u044b \u0437\u0430 \u0441\u0435\u0431\u044f, \u0434\u043e 150 000 \u20bd/\u0433\u043e\u0434.",19500,"\u0434\u043e "+A.b(19500,!1)+"/\u0433\u043e\u0434","once")},
hy(a,b,c){var s,r
if(a.c!=="unemployed_reg")return
s=b.e
s=s>0?s:Math.max(27093,b.c/b.d)
r=b.f>0?Math.min(B.c.t(s*0.75),15886):1863
c.h(0,"w","\ud83d\udcbc",B.a,"\u041f\u043e\u0441\u043e\u0431\u0438\u0435 \u043f\u043e \u0431\u0435\u0437\u0440\u0430\u0431\u043e\u0442\u0438\u0446\u0435","\u041f\u0435\u0440\u0432\u044b\u0435 3 \u043c\u0435\u0441: 75% \u0437\u0430\u0440\u043f\u043b\u0430\u0442\u044b, \u0434\u0430\u043b\u0435\u0435 60%, \u0434\u0430\u043b\u0435\u0435 45%. \u041c\u0438\u043d "+A.b(1863,!1)+", \u043c\u0430\u043a\u0441 "+A.b(15886,!1)+".",r,A.b(r,!1)+"/\u043c\u0435\u0441","monthly")},
fD(a,b,c){var s,r
if(!a.w.i(0,"i_laid"))return
s=a.c
if(!(s==="unemployed_reg"||s==="unemployed"))return
r=b.e
r=r>0?r:Math.max(27093,b.c/b.d)
c.h(0,"w","\ud83d\udccb",B.a,"\u0412\u044b\u0445\u043e\u0434\u043d\u043e\u0435 \u043f\u043e\u0441\u043e\u0431\u0438\u0435 \u043f\u0440\u0438 \u0441\u043e\u043a\u0440\u0430\u0449\u0435\u043d\u0438\u0438","1 \u0441\u0440.\u043c\u0435\u0441. \u0437\u0430\u0440\u043f\u043b\u0430\u0442\u0430 \u0441\u0440\u0430\u0437\u0443 + \u0435\u0449\u0451 \u0434\u043e 2 \u043c\u0435\u0441. \u043f\u0440\u0438 \u043d\u0435\u0442\u0440\u0443\u0434\u043e\u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0435.",r,"\u2248 "+A.b(r,!1)+" \xd7 1\u20133 \u043c\u0435\u0441.","once")},
fw(a,b,c){var s,r,q,p,o
if(!a.w.i(0,"high_utility")){s=b.Q
s===$&&A.k()
s=!s}else s=!1
if(s)return
r=A.bQ("")
if(r==null)r=0
s=b.c
q=s*0.22
p=A.cX()
o=A.cX()
if(r>0){p.sE(Math.max(0,B.c.t(r-q)))
o.sE("\u0420\u0430\u0441\u0445\u043e\u0434\u044b \u0416\u041a\u0425 "+A.b(r,!1)+" \u2212 22% \u0434\u043e\u0445\u043e\u0434\u0430 "+A.b(B.c.t(q),!1)+" = "+A.b(p.D(),!1)+".")}else{p.sE(Math.max(300,B.c.t(s*0.04)))
o.sE("\u041e\u0440\u0438\u0435\u043d\u0442\u0438\u0440: \u0435\u0441\u043b\u0438 \u0416\u041a\u0425 > 22% \u0434\u043e\u0445\u043e\u0434\u0430 ("+A.b(B.c.t(q),!1)+"/\u043c\u0435\u0441). \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0440\u0430\u0441\u0445\u043e\u0434\u044b \u043d\u0430 \u0416\u041a\u0425 \u0432 \u0448\u0430\u0433\u0435 4 \u0434\u043b\u044f \u0442\u043e\u0447\u043d\u043e\u0433\u043e \u0440\u0430\u0441\u0447\u0451\u0442\u0430.")}c.h(0,"h","\ud83c\udfe0",B.e,"\u0421\u0443\u0431\u0441\u0438\u0434\u0438\u044f \u043d\u0430 \u043e\u043f\u043b\u0430\u0442\u0443 \u0416\u041a\u0425",o.D(),p.D(),"~"+A.b(p.D(),!1)+"/\u043c\u0435\u0441","monthly")},
fP(a,b,c){var s,r,q
if(!(a.w.i(0,"i_pen")||a.c==="pensioner"))return
s=b.w
r=B.aC.A(0,s.a)
if(r==null)r=16288
if(!(s.ax!=null&&a.d==="moscow")){s=b.y
s===$&&A.k()
s=s<r}else s=!1
if(s){s=A.b(r,!1)
q=b.y
q===$&&A.k()
c.h(0,"p","\ud83d\udc74",B.e,"\u0414\u043e\u043f\u043b\u0430\u0442\u0430 \u043a \u043f\u0435\u043d\u0441\u0438\u0438 \u0434\u043e \u041f\u041c \u043f\u0435\u043d\u0441\u0438\u043e\u043d\u0435\u0440\u0430","\u0420\u0435\u0433\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u0430\u044f \u0441\u043e\u0446\u0438\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043e\u043f\u043b\u0430\u0442\u0430 \u043d\u0435\u0440\u0430\u0431\u043e\u0442\u0430\u044e\u0449\u0435\u043c\u0443 \u043f\u0435\u043d\u0441\u0438\u043e\u043d\u0435\u0440\u0443 \u0434\u043e \u041f\u041c \u043f\u0435\u043d\u0441\u0438\u043e\u043d\u0435\u0440\u0430 \u0432 \u0432\u0430\u0448\u0435\u043c \u0440\u0435\u0433\u0438\u043e\u043d\u0435 ("+s+"). \u041d\u0430\u0437\u043d\u0430\u0447\u0430\u0435\u0442\u0441\u044f \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u0447\u0435\u0440\u0435\u0437 \u0421\u0424\u0420/\u0441\u043e\u0446\u0437\u0430\u0449\u0438\u0442\u0443.",Math.max(0,r-q),"\u0434\u043e "+A.b(r,!1)+"/\u043c\u0435\u0441","monthly")}if(b.b>=80)c.h(0,"p","\ud83e\uddd3",B.e,"\u041d\u0430\u0434\u0431\u0430\u0432\u043a\u0430 80+","\u0424\u0438\u043a\u0441. \u0432\u044b\u043f\u043b\u0430\u0442\u0430 \u0443\u0434\u0432\u0430\u0438\u0432\u0430\u0435\u0442\u0441\u044f.",9584.69,"+"+A.b(9584.69,!1)+"/\u043c\u0435\u0441","monthly")
c.h(0,"p","\u2764\ufe0f\u200d\ud83d\udd25",B.a,"\u0418\u043d\u0434\u0435\u043a\u0441\u0430\u0446\u0438\u044f 2026","\u0421\u0442\u0440\u0430\u0445\u043e\u0432\u044b\u0435 \u043f\u0435\u043d\u0441\u0438\u0438 +7,6%.",0,"+7,6%","benefit")},
f9(a,b,c){var s="s",r="\u041c\u0430\u043a\u0441. \u043f\u0440\u0438 \u043e\u0442\u043a\u0430\u0437\u0435 \u043e\u0442 \u041d\u0421\u0423. \u041f\u0440\u0438 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0438 \u043b\u044c\u0433\u043e\u0442 \u043d\u0430\u0442\u0443\u0440\u043e\u0439: \u2212",q="monthly",p="\u0441\u0442\u0430\u0436 + \u043d\u0430\u0434\u0431\u0430\u0432\u043a\u0430 \u0432 \u043f\u0435\u043d\u0441\u0438\u0438",o="benefit",n=a.w
if(n.i(0,"i_dis1"))c.h(0,s,"\u267f",B.e,"\u0415\u0414\u0412 \u2014 \u0438\u043d\u0432\u0430\u043b\u0438\u0434 I \u0433\u0440.",r+A.b(1825.25,!0)+"/\u043c\u0435\u0441.",6157.22,"~"+A.b(6157.22,!0)+"/\u043c\u0435\u0441",q)
if(n.i(0,"i_dis2"))c.h(0,s,"\u267f",B.e,"\u0415\u0414\u0412 \u2014 \u0438\u043d\u0432\u0430\u043b\u0438\u0434 II \u0433\u0440.",r+A.b(1825.25,!0)+"/\u043c\u0435\u0441.",4397.23,"~"+A.b(4397.23,!0)+"/\u043c\u0435\u0441",q)
if(n.i(0,"i_dis3"))c.h(0,s,"\u267f",B.a,"\u0415\u0414\u0412 \u2014 \u0438\u043d\u0432\u0430\u043b\u0438\u0434 III \u0433\u0440.",r+A.b(1825.25,!0)+"/\u043c\u0435\u0441.",3520.01,"~"+A.b(3520.01,!0)+"/\u043c\u0435\u0441",q)
if(n.i(0,"has_dis1")&&a.c!=="employed")c.h(0,s,"\ud83e\udd1d",B.a,"\u0423\u0445\u043e\u0434 \u0437\u0430 \u0438\u043d\u0432\u0430\u043b\u0438\u0434\u043e\u043c I \u0433\u0440.","\u0412\u044b\u043f\u043b\u0430\u0442\u0430 1 200 \u20bd \u0443\u0445\u0430\u0436\u0438\u0432\u0430\u044e\u0449\u0435\u043c\u0443 \u043e\u0442\u043c\u0435\u043d\u0435\u043d\u0430 \u0441 2025. \u041d\u0430\u0434\u0431\u0430\u0432\u043a\u0430 ~1 414 \u20bd \u0432\u0445\u043e\u0434\u0438\u0442 \u0432 \u043f\u0435\u043d\u0441\u0438\u044e \u0438\u043d\u0432\u0430\u043b\u0438\u0434\u0430; \u0443\u0445\u0430\u0436\u0438\u0432\u0430\u044e\u0449\u0435\u043c\u0443 \u2014 \u0441\u0442\u0430\u0436 1,8 \u0418\u041f\u041a/\u0433\u043e\u0434.",0,p,o)
if(n.i(0,"elderly80")&&a.c!=="employed")c.h(0,s,"\ud83e\uddd3",B.a,"\u0423\u0445\u043e\u0434 \u0437\u0430 \u043f\u043e\u0436\u0438\u043b\u044b\u043c 80+","\u0412\u044b\u043f\u043b\u0430\u0442\u0430 1 200 \u20bd \u0443\u0445\u0430\u0436\u0438\u0432\u0430\u044e\u0449\u0435\u043c\u0443 \u043e\u0442\u043c\u0435\u043d\u0435\u043d\u0430 \u0441 2025. \u041d\u0430\u0434\u0431\u0430\u0432\u043a\u0430 ~1 414 \u20bd \u0432\u0445\u043e\u0434\u0438\u0442 \u0432 \u043f\u0435\u043d\u0441\u0438\u044e \u043f\u043e\u0436\u0438\u043b\u043e\u0433\u043e; \u0443\u0445\u0430\u0436\u0438\u0432\u0430\u044e\u0449\u0435\u043c\u0443 \u2014 \u0441\u0442\u0430\u0436 1,8 \u0418\u041f\u041a/\u0433\u043e\u0434.",0,p,o)
if(n.i(0,"has_dis2")||n.i(0,"has_dis3"))c.h(0,s,"\ud83e\udd1d",B.a,"\u0423\u0445\u043e\u0434 \u0437\u0430 \u0438\u043d\u0432\u0430\u043b\u0438\u0434\u043e\u043c II/III \u0433\u0440.","\u0417\u0430 \u0443\u0445\u043e\u0434 \u0437\u0430 \u0438\u043d\u0432\u0430\u043b\u0438\u0434\u043e\u043c II \u0438\u043b\u0438 III \u0433\u0440\u0443\u043f\u043f\u044b \u043a\u043e\u043c\u043f\u0435\u043d\u0441\u0430\u0446\u0438\u044f \u0438 \u043f\u0435\u043d\u0441\u0438\u043e\u043d\u043d\u044b\u0439 \u0441\u0442\u0430\u0436 \u0443\u0445\u0430\u0436\u0438\u0432\u0430\u044e\u0449\u0435\u043c\u0443 \u043d\u0435 \u043f\u0440\u0435\u0434\u0443\u0441\u043c\u043e\u0442\u0440\u0435\u043d\u044b (\u0432 \u043e\u0442\u043b\u0438\u0447\u0438\u0435 \u043e\u0442 I \u0433\u0440\u0443\u043f\u043f\u044b). \u0421\u0430\u043c \u0438\u043d\u0432\u0430\u043b\u0438\u0434 \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u0442 \u043f\u0435\u043d\u0441\u0438\u044e \u043f\u043e \u0438\u043d\u0432\u0430\u043b\u0438\u0434\u043d\u043e\u0441\u0442\u0438 \u0438 \u0415\u0414\u0412.",0,"\u0432\u044b\u043f\u043b\u0430\u0442\u044b \u0443\u0445\u0430\u0436\u0438\u0432\u0430\u044e\u0449\u0435\u043c\u0443 \u043d\u0435\u0442",o)},
fS(a,b,c){var s,r,q,p=a.w
if(!p.i(0,"own_home"))return
s=p.i(0,"i_pen")||a.c==="pensioner"
r=p.i(0,"i_dis1")||p.i(0,"i_dis2")
q=a.f>=3
if(!(s||r||q))return
c.h(0,"t","\ud83c\udfe0",B.d,"\u041b\u044c\u0433\u043e\u0442\u0430 \u043f\u043e \u043d\u0430\u043b\u043e\u0433\u0443 \u043d\u0430 \u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u043e","\u041e\u0441\u0432\u043e\u0431\u043e\u0436\u0434\u0435\u043d\u0438\u0435 \u043e\u0442 \u043d\u0430\u043b\u043e\u0433\u0430 \u043d\u0430 \u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u043e \u043d\u0430 \u043e\u0434\u0438\u043d \u043e\u0431\u044a\u0435\u043a\u0442 \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u0432\u0438\u0434\u0430 (\u043a\u0432\u0430\u0440\u0442\u0438\u0440\u0430, \u0434\u043e\u043c, \u0433\u0430\u0440\u0430\u0436) \u2014 \u0434\u043b\u044f \u043f\u0435\u043d\u0441\u0438\u043e\u043d\u0435\u0440\u043e\u0432 \u0438 \u0438\u043d\u0432\u0430\u043b\u0438\u0434\u043e\u0432 I\u2013II \u0433\u0440\u0443\u043f\u043f. \u041c\u043d\u043e\u0433\u043e\u0434\u0435\u0442\u043d\u044b\u043c \u0441\u0435\u043c\u044c\u044f\u043c \u2014 \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u0432\u044b\u0447\u0435\u0442 (\u0441\u0442. 407 \u041d\u041a \u0420\u0424).",0,"\u043e\u0441\u0432\u043e\u0431\u043e\u0436\u0434\u0435\u043d\u0438\u0435 \u043e\u0442 \u043d\u0430\u043b\u043e\u0433\u0430","benefit")},
f5(a,b,c){if(!a.w.i(0,"communal"))return
c.h(0,"h","\ud83c\udfd8\ufe0f",B.a,"\u0420\u0430\u0441\u0441\u0435\u043b\u0435\u043d\u0438\u0435 \u043a\u043e\u043c\u043c\u0443\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u043a\u0432\u0430\u0440\u0442\u0438\u0440","\u041f\u0440\u043e\u0436\u0438\u0432\u0430\u043d\u0438\u0435 \u0432 \u043a\u043e\u043c\u043c\u0443\u043d\u0430\u043b\u044c\u043d\u043e\u0439 \u043a\u0432\u0430\u0440\u0442\u0438\u0440\u0435 \u2014 \u043e\u0441\u043d\u043e\u0432\u0430\u043d\u0438\u0435 \u0434\u043b\u044f \u043f\u043e\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043d\u0430 \u0443\u0447\u0451\u0442 \u043f\u043e \u0443\u043b\u0443\u0447\u0448\u0435\u043d\u0438\u044e \u0436\u0438\u043b\u0438\u0449\u043d\u044b\u0445 \u0443\u0441\u043b\u043e\u0432\u0438\u0439. \u0412\u043e \u043c\u043d\u043e\u0433\u0438\u0445 \u0440\u0435\u0433\u0438\u043e\u043d\u0430\u0445 \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u044e\u0442 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u044b \u0440\u0430\u0441\u0441\u0435\u043b\u0435\u043d\u0438\u044f \u0438 \u0441\u0443\u0431\u0441\u0438\u0434\u0438\u0438 \u2014 \u0443\u0442\u043e\u0447\u043d\u044f\u0439\u0442\u0435 \u0432 \u041c\u0424\u0426 \u0438\u043b\u0438 \u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438.",0,"\u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u044b \u0440\u0435\u0433\u0438\u043e\u043d\u0430","benefit")},
h4(a,b,c){var s
if(a.w.i(0,"i_sc")){s=b.Q
s===$&&A.k()
s=!s}else s=!0
if(s)return
c.h(0,"s","\ud83d\udcdd",B.e,"\u0421\u043e\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0439 \u043a\u043e\u043d\u0442\u0440\u0430\u043a\u0442: \u041e\u0442\u043a\u0440\u044b\u0442\u0438\u0435 \u0441\u0432\u043e\u0435\u0433\u043e \u0434\u0435\u043b\u0430 / \u0418\u041f","\u0415\u0434\u0438\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u0430\u044f \u0431\u0435\u0437\u0432\u043e\u0437\u043c\u0435\u0437\u0434\u043d\u0430\u044f \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430 \u043c\u0430\u043b\u043e\u0438\u043c\u0443\u0449\u0438\u043c \u0441\u0435\u043c\u044c\u044f\u043c.",35e4,"\u0434\u043e "+A.b(35e4,!1),"once")},
fK(a,b,c){var s=a.w
if(s.i(0,"i_mil")){c.h(0,"m","\ud83c\udf96\ufe0f",B.a,"\u0412\u044b\u043f\u043b\u0430\u0442\u0430 \u043f\u0440\u0438 \u0437\u0430\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0438 \u043a\u043e\u043d\u0442\u0440\u0430\u043a\u0442\u0430","\u0424\u0435\u0434\u0435\u0440\u0430\u043b\u044c\u043d\u0430\u044f + \u0440\u0435\u0433\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u0430\u044f.",4e5,"\u043e\u0442 "+A.b(4e5,!1),"once")
c.h(0,"m","\ud83d\udcb0",B.a,"\u0411\u043e\u0435\u0432\u044b\u0435 \u043d\u0430\u0434\u0431\u0430\u0432\u043a\u0438","\u0415\u0436\u0435\u043c\u0435\u0441\u044f\u0447\u043d\u044b\u0435 \u0434\u043e\u043f\u043b\u0430\u0442\u044b.",5e4,"\u043e\u0442 "+A.b(5e4,!1)+"/\u043c\u0435\u0441","monthly")}if(s.i(0,"i_vet"))c.h(0,"m","\ud83c\udfc5",B.a,"\u0415\u0414\u0412 \u0432\u0435\u0442\u0435\u0440\u0430\u043d\u0430 \u0431\u043e\u0435\u0432\u044b\u0445 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439","\u0415\u0436\u0435\u043c\u0435\u0441\u044f\u0447\u043d\u0430\u044f \u0434\u0435\u043d\u0435\u0436\u043d\u0430\u044f \u0432\u044b\u043f\u043b\u0430\u0442\u0430 \u0443\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u0443 \u0411\u0414. \u0421 01.02.2026.",4838.63,A.b(4838.63,!0)+"/\u043c\u0435\u0441","monthly")},
hA(a,b,c){if(!a.w.i(0,"vet_fam"))return
c.h(0,"m","\ud83c\udfc5",B.a,"\u0415\u0414\u0412 \u0441\u0435\u043c\u044c\u0435 \u0432\u0435\u0442\u0435\u0440\u0430\u043d\u0430 \u0411\u0414","\u0415\u0436\u0435\u043c\u0435\u0441\u044f\u0447\u043d\u0430\u044f \u0432\u044b\u043f\u043b\u0430\u0442\u0430 \u0441\u0435\u043c\u044c\u0435 \u0443\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u0430/\u043f\u043e\u0433\u0438\u0431\u0448\u0435\u0433\u043e. \u0421 01.02.2026.",4838.63,A.b(4838.63,!0)+"/\u043c\u0435\u0441","monthly")
c.h(0,"m","\ud83d\udee1\ufe0f",B.a,"\u0421\u0442\u0440\u0430\u0445\u043e\u0432\u0430\u044f \u0432\u044b\u043f\u043b\u0430\u0442\u0430 \u0441\u0435\u043c\u044c\u0435 \u043f\u043e\u0433\u0438\u0431\u0448\u0435\u0433\u043e","\u041f\u0440\u0438 \u0433\u0438\u0431\u0435\u043b\u0438 \u0432\u043e\u0435\u043d\u043d\u043e\u0441\u043b\u0443\u0436\u0430\u0449\u0435\u0433\u043e: \u0435\u0434\u0438\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u0430\u044f \u0441\u0442\u0440\u0430\u0445\u043e\u0432\u0430\u044f \u0432\u044b\u043f\u043b\u0430\u0442\u0430.",3e6,"\u043e\u0442 "+A.b(3e6,!1)+" (\u0435\u0434\u0438\u043d\u043e\u0432\u0440.)","once")
c.h(0,"m","\ud83d\udcb0",B.a,"\u0415\u0436\u0435\u043c\u0435\u0441\u044f\u0447\u043d\u0430\u044f \u0432\u044b\u043f\u043b\u0430\u0442\u0430 \u0441\u0435\u043c\u044c\u0435 \u043f\u043e\u0433\u0438\u0431\u0448\u0435\u0433\u043e","\u0427\u043b\u0435\u043d\u0430\u043c \u0441\u0435\u043c\u044c\u0438 \u043f\u043e\u0433\u0438\u0431\u0448\u0435\u0433\u043e \u0432\u043e\u0435\u043d\u043d\u043e\u0441\u043b\u0443\u0436\u0430\u0449\u0435\u0433\u043e.",27566,A.b(27566,!1)+"/\u043c\u0435\u0441","monthly")},
fv(a,b,c){var s="a",r="monthly",q="benefit",p=a.w
if(p.i(0,"i_vet_trud")){c.h(0,s,"\ud83c\udfc6",B.a,"\u0412\u0435\u0442\u0435\u0440\u0430\u043d \u0442\u0440\u0443\u0434\u0430 \u2014 \u0440\u0435\u0433\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u043b\u044c\u0433\u043e\u0442\u044b","\u0414\u043e\u043f\u043b\u0430\u0442\u0430 \u043a \u043f\u0435\u043d\u0441\u0438\u0438, \u0441\u043a\u0438\u0434\u043a\u0438 \u043d\u0430 \u0416\u041a\u0425 (50%), \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442 \u0438 \u043b\u0435\u043a\u0430\u0440\u0441\u0442\u0432\u0430. \u0420\u0430\u0437\u043c\u0435\u0440 \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043e\u0442 \u0440\u0435\u0433\u0438\u043e\u043d\u0430: \u0432 \u0441\u0440\u0435\u0434\u043d\u0435\u043c 1 000\u20135 000 \u20bd/\u043c\u0435\u0441.",2000,"~1 000\u20135 000 \u20bd/\u043c\u0435\u0441",r)
c.h(0,s,"\ud83d\ude8c",B.a,"\u0412\u0435\u0442\u0435\u0440\u0430\u043d \u0442\u0440\u0443\u0434\u0430 \u2014 \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u044b\u0439 \u043f\u0440\u043e\u0435\u0437\u0434","\u041f\u0440\u0430\u0432\u043e \u043d\u0430 \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u044b\u0439 \u043f\u0440\u043e\u0435\u0437\u0434 \u0432 \u0433\u043e\u0440\u043e\u0434\u0441\u043a\u043e\u043c \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u0435 (\u0440\u0435\u0433\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0439 \u0437\u0430\u043a\u043e\u043d).",0,"\u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u044b\u0439 \u043f\u0440\u043e\u0435\u0437\u0434",q)}if(p.i(0,"i_honored")){c.h(0,s,"\ud83c\udf96\ufe0f",B.h,"\u041d\u0430\u0434\u0431\u0430\u0432\u043a\u0430 \xab\u0417\u0430\u0441\u043b\u0443\u0436\u0435\u043d\u043d\u044b\u0439\xbb","\u0420\u0435\u0433\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043e\u043f\u043b\u0430\u0442\u0430 \u043a \u043f\u0435\u043d\u0441\u0438\u0438 \u0437\u0430 \u043f\u043e\u0447\u0451\u0442\u043d\u043e\u0435 \u0437\u0432\u0430\u043d\u0438\u0435 \u0420\u0424. \u0420\u0430\u0437\u043c\u0435\u0440 \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043e\u0442 \u0440\u0435\u0433\u0438\u043e\u043d\u0430: \u043e\u0431\u044b\u0447\u043d\u043e 1 000\u20133 000 \u20bd/\u043c\u0435\u0441.",1500,"~1 000\u20133 000 \u20bd/\u043c\u0435\u0441",r)
c.h(0,s,"\ud83c\udf97\ufe0f",B.h,"\u0421\u0442\u0438\u043f\u0435\u043d\u0434\u0438\u044f \u041f\u0440\u0435\u0437\u0438\u0434\u0435\u043d\u0442\u0430 \u0420\u0424","\u0414\u043b\u044f \u0417\u0430\u0441\u043b\u0443\u0436\u0435\u043d\u043d\u044b\u0445 \u043c\u0430\u0441\u0442\u0435\u0440\u043e\u0432 \u0441\u043f\u043e\u0440\u0442\u0430 \u0438 \u0434\u0435\u044f\u0442\u0435\u043b\u0435\u0439 \u043a\u0443\u043b\u044c\u0442\u0443\u0440\u044b \u2014 \u0435\u0434\u0438\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u0438 \u0435\u0436\u0435\u043c\u0435\u0441\u044f\u0447\u043d\u044b\u0435 \u0432\u044b\u043f\u043b\u0430\u0442\u044b \u043f\u043e \u0423\u043a\u0430\u0437\u0443 \u041f\u0440\u0435\u0437\u0438\u0434\u0435\u043d\u0442\u0430.",0,"\u043f\u043e \u0423\u043a\u0430\u0437\u0443 \u041f\u0440\u0435\u0437\u0438\u0434\u0435\u043d\u0442\u0430",q)}if(p.i(0,"i_people_art"))c.h(0,s,"\ud83c\udf1f",B.h,"\u041d\u0430\u0434\u0431\u0430\u0432\u043a\u0430 \xab\u041d\u0430\u0440\u043e\u0434\u043d\u044b\u0439 \u0430\u0440\u0442\u0438\u0441\u0442 / \u0434\u0435\u044f\u0442\u0435\u043b\u044c\xbb","\u0424\u0435\u0434\u0435\u0440\u0430\u043b\u044c\u043d\u0430\u044f \u043d\u0430\u0434\u0431\u0430\u0432\u043a\u0430 \u043a \u043f\u0435\u043d\u0441\u0438\u0438: 500% \u041f\u041c \u043f\u0435\u043d\u0441\u0438\u043e\u043d\u0435\u0440\u0430 (\u0423\u043a\u0430\u0437 \u041f\u0440\u0435\u0437\u0438\u0434\u0435\u043d\u0442\u0430 \u0420\u0424 \u2116 1584). \u041f\u043b\u044e\u0441 \u0440\u0435\u0433\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u0434\u043e\u043f\u043b\u0430\u0442\u044b.",47923.450000000004,"~"+A.b(47923.450000000004,!1)+"/\u043c\u0435\u0441",r)
if(p.i(0,"i_hero_labor")){c.h(0,s,"\u2b50",B.a,"\u0413\u0435\u0440\u043e\u0439 \u0422\u0440\u0443\u0434\u0430 \u0420\u0424 \u2014 \u0415\u0414\u0412","\u0415\u0436\u0435\u043c\u0435\u0441\u044f\u0447\u043d\u0430\u044f \u0434\u0435\u043d\u0435\u0436\u043d\u0430\u044f \u0432\u044b\u043f\u043b\u0430\u0442\u0430 \u0413\u0435\u0440\u043e\u044f\u043c \u0422\u0440\u0443\u0434\u0430 \u0420\u0424. \u0418\u043d\u0434\u0435\u043a\u0441\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u0435\u0436\u0435\u0433\u043e\u0434\u043d\u043e.",76458.4,A.b(76458.4,!0)+"/\u043c\u0435\u0441",r)
c.h(0,s,"\ud83c\udfe0",B.a,"\u0413\u0435\u0440\u043e\u0439 \u0422\u0440\u0443\u0434\u0430 \u0420\u0424 \u2014 \u043b\u044c\u0433\u043e\u0442\u044b","\u0411\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u044b\u0439 \u043f\u0440\u043e\u0435\u0437\u0434, 50% \u0441\u043a\u0438\u0434\u043a\u0430 \u043d\u0430 \u0416\u041a\u0425, \u043d\u0430\u043b\u043e\u0433\u043e\u0432\u044b\u0435 \u043b\u044c\u0433\u043e\u0442\u044b, \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u043e\u0435 \u043c\u0435\u0434\u043e\u0431\u0441\u043b\u0443\u0436\u0438\u0432\u0430\u043d\u0438\u0435.",0,"\u043f\u0430\u043a\u0435\u0442 \u043b\u044c\u0433\u043e\u0442",q)}},
h3(a,b,c){var s,r,q,p,o,n=a.w
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
o=B.c.t(Math.min(q*24/730,6827.397260273972)*p*21)
n=n?"\u0421\u0430\u043c\u043e\u0437\u0430\u043d\u044f\u0442\u044b\u0439 \u0441 \u0434\u043e\u0431\u0440\u043e\u0432\u043e\u043b\u044c\u043d\u044b\u043c \u0441\u0442\u0440\u0430\u0445\u043e\u0432\u0430\u043d\u0438\u0435\u043c: \u043e\u0440\u0438\u0435\u043d\u0442\u0438\u0440 \u0440\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u043d \u043e\u0442 \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u043e\u0439 \u0441\u0442\u0440\u0430\u0445\u043e\u0432\u043e\u0439 \u0441\u0443\u043c\u043c\u044b (\u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e 35 000 \u20bd, \u0435\u0441\u043b\u0438 \u043d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d\u0430 \u0441\u0432\u043e\u044f \u0431\u0430\u0437\u0430).":""+B.c.G(p*100)+"% \u0441\u0440. \u0437\u0430\u0440\u0430\u0431\u043e\u0442\u043a\u0430 (\u0441\u0442\u0430\u0436 "+s+" \u043b\u0435\u0442). \u041c\u0430\u043a\u0441. \u0434\u043d\u0435\u0432\u043d\u043e\u0435: "+A.b(B.c.t(6827.397260273972),!1)+". \u041e\u0440\u0438\u0435\u043d\u0442\u0438\u0440 \u0437\u0430 \u043c\u0435\u0441\u044f\u0446: ~"+A.b(o,!1)+"."
c.h(0,"w","\ud83c\udfe5",B.e,"\u041f\u043e\u0441\u043e\u0431\u0438\u0435 \u043f\u043e \u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0439 \u043d\u0435\u0442\u0440\u0443\u0434\u043e\u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u0438",n,o,"~"+A.b(o,!1)+"/\u043c\u0435\u0441","monthly")},
f6(a,b,c){var s=a.w
if(s.i(0,"mil_conscript_spouse")&&a.b==="female"&&s.i(0,"pregnant")&&a.e==="married")c.h(0,"m","\ud83e\udd30",B.a,"\u041f\u043e\u0441\u043e\u0431\u0438\u0435 \u0431\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0439 \u0436\u0435\u043d\u0435 \u0432\u043e\u0435\u043d\u043d\u043e\u0441\u043b\u0443\u0436\u0430\u0449\u0435\u0433\u043e \u043f\u043e \u043f\u0440\u0438\u0437\u044b\u0432\u0443","\u0415\u0434\u0438\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u0430\u044f \u0444\u0435\u0434\u0435\u0440\u0430\u043b\u044c\u043d\u0430\u044f \u0432\u044b\u043f\u043b\u0430\u0442\u0430 \u0441\u0443\u043f\u0440\u0443\u0433\u0435 \u0432\u043e\u0435\u043d\u043d\u043e\u0441\u043b\u0443\u0436\u0430\u0449\u0435\u0433\u043e \u043f\u043e \u043f\u0440\u0438\u0437\u044b\u0432\u0443 \u043f\u0440\u0438 \u0441\u0440\u043e\u043a\u0435 \u0431\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u043d\u0435 \u043c\u0435\u043d\u0435\u0435 180 \u0434\u043d\u0435\u0439.",45054.24,A.b(45054.24,!0),"once")
if(s.i(0,"mil_conscript_child")&&a.f>0&&b.r<=3)c.h(0,"m","\ud83e\ude96",B.a,"\u041f\u043e\u0441\u043e\u0431\u0438\u0435 \u043d\u0430 \u0440\u0435\u0431\u0451\u043d\u043a\u0430 \u0432\u043e\u0435\u043d\u043d\u043e\u0441\u043b\u0443\u0436\u0430\u0449\u0435\u0433\u043e \u043f\u043e \u043f\u0440\u0438\u0437\u044b\u0432\u0443","\u0415\u0436\u0435\u043c\u0435\u0441\u044f\u0447\u043d\u0430\u044f \u0444\u0435\u0434\u0435\u0440\u0430\u043b\u044c\u043d\u0430\u044f \u0432\u044b\u043f\u043b\u0430\u0442\u0430 \u043d\u0430 \u0440\u0435\u0431\u0451\u043d\u043a\u0430 \u0432\u043e\u0435\u043d\u043d\u043e\u0441\u043b\u0443\u0436\u0430\u0449\u0435\u0433\u043e \u043f\u043e \u043f\u0440\u0438\u0437\u044b\u0432\u0443 \u0434\u043e \u0434\u043e\u0441\u0442\u0438\u0436\u0435\u043d\u0438\u044f \u0440\u0435\u0431\u0451\u043d\u043a\u043e\u043c 3 \u043b\u0435\u0442.",19308.96,A.b(19308.96,!0)+"/\u043c\u0435\u0441","monthly")},
fb(a,b,c){if(!a.w.i(0,"i_donor"))return
c.h(0,"s","\ud83e\ude78",B.a,"\u0415\u0414\u0412 \u041f\u043e\u0447\u0451\u0442\u043d\u043e\u0433\u043e \u0434\u043e\u043d\u043e\u0440\u0430 \u0420\u043e\u0441\u0441\u0438\u0438","\u0415\u0436\u0435\u0433\u043e\u0434\u043d\u0430\u044f \u0434\u0435\u043d\u0435\u0436\u043d\u0430\u044f \u0432\u044b\u043f\u043b\u0430\u0442\u0430 (\u0435\u0434\u0438\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e \u0440\u0430\u0437 \u0432 \u0433\u043e\u0434).",19497.68,A.b(19497.68,!0)+"/\u0433\u043e\u0434","once")
c.h(0,"s","\ud83c\udfe5",B.a,"\u041b\u044c\u0433\u043e\u0442\u044b \u041f\u043e\u0447\u0451\u0442\u043d\u043e\u0433\u043e \u0434\u043e\u043d\u043e\u0440\u0430","\u041e\u0442\u043f\u0443\u0441\u043a \u0432 \u0443\u0434\u043e\u0431\u043d\u043e\u0435 \u0432\u0440\u0435\u043c\u044f, \u043b\u044c\u0433\u043e\u0442\u043d\u044b\u0435 \u043f\u0443\u0442\u0451\u0432\u043a\u0438, \u0441\u043a\u0438\u0434\u043a\u0438 \u043d\u0430 \u043b\u0435\u0447\u0435\u043d\u0438\u0435.",0,"\u043f\u0430\u043a\u0435\u0442 \u043b\u044c\u0433\u043e\u0442","benefit")},
f4(a,b,c){var s,r,q,p,o,n,m,l=a.f
if(l>0){s=b.ch
s===$&&A.k()
if(s){s=b.z
s===$&&A.k()}else s=!1
s=!s||b.c/b.d>37500}else s=!0
if(s)return
s=a.w
r=s.i(0,"solo_parent")
q=l>=2?4200:1400
if(l>=3)q+=(l-2)*6000
p=s.i(0,"disabled_child")
if(p)q+=12e3
o=r?q*2:q
n=B.c.t(o*0.13)
l=r?"\u0414\u0432\u043e\u0439\u043d\u043e\u0439 \u0432\u044b\u0447\u0435\u0442 \u041d\u0414\u0424\u041b (\u043e\u0434\u0438\u043d\u043e\u043a\u0438\u0439 \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u044c)":"\u0421\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u044b\u0439 \u0432\u044b\u0447\u0435\u0442 \u041d\u0414\u0424\u041b \u043d\u0430 \u0434\u0435\u0442\u0435\u0439"
s=A.b(o,!1)
m=p?", \u0438\u043d\u0432\u0430\u043b\u0438\u0434 \u2014 +12 000":""
c.h(0,"t","\ud83e\uddee",B.d,l,"\u0411\u0430\u0437\u0430: "+s+"/\u043c\u0435\u0441 \xd7 13% (1-\u0439 \u2014 1 400, 2-\u0439 \u2014 2 800, 3-\u0439+ \u2014 6 000"+m+" \u20bd). \u0414\u043e \u0434\u043e\u0445\u043e\u0434\u0430 450 000 \u20bd/\u0433\u043e\u0434.",n,"~"+A.b(n,!1)+"/\u043c\u0435\u0441","monthly")},
fR(a,b,c){var s=a.w
if(s.i(0,"bought_recent")||s.i(0,"has_mortgage")){s=b.ch
s===$&&A.k()
if(s){s=b.z
s===$&&A.k()}else s=!1
s=!s}else s=!0
if(s)return
s=b.x
s===$&&A.k()
if(!(s>0))s=B.c.t(b.c*12*0.13)
c.h(0,"t","\ud83c\udfd8\ufe0f",B.d,"\u0418\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0439 \u0432\u044b\u0447\u0435\u0442","\u0414\u043e 260 000 \u20bd \u0437\u0430 \u043f\u043e\u043a\u0443\u043f\u043a\u0443 + \u0434\u043e 390 000 \u20bd \u043f\u043e \u0438\u043f\u043e\u0442\u0435\u0447\u043d\u044b\u043c %.",Math.min(s,26e4),"\u0434\u043e "+A.b(26e4,!1)+" + "+A.b(39e4,!1),"once")},
fJ(a,b,c){var s
if(a.w.i(0,"paid_med")){s=b.ch
s===$&&A.k()
if(s){s=b.z
s===$&&A.k()}else s=!1
s=!s}else s=!0
if(s)return
c.h(0,"t","\ud83c\udfe5",B.d,"\u0412\u044b\u0447\u0435\u0442: \u043b\u0435\u0447\u0435\u043d\u0438\u0435","13% \u043e\u0442 \u0440\u0430\u0441\u0445\u043e\u0434\u043e\u0432 (\u0434\u043e 150 000 \u20bd/\u0433\u043e\u0434; \u0434\u043e\u0440\u043e\u0433\u043e\u0441\u0442\u043e\u044f\u0449\u0435\u0435 \u2014 \u0431\u0435\u0437 \u043b\u0438\u043c\u0438\u0442\u0430).",19500,"\u0434\u043e "+A.b(19500,!1)+"/\u0433\u043e\u0434","once")},
fc(a,b,c){var s
if(a.w.i(0,"paid_edu")){s=b.ch
s===$&&A.k()
if(s){s=b.z
s===$&&A.k()}else s=!1
s=!s}else s=!0
if(s)return
c.h(0,"t","\ud83c\udf93",B.d,"\u0412\u044b\u0447\u0435\u0442: \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435","13% \u043e\u0442 \u0440\u0430\u0441\u0445\u043e\u0434\u043e\u0432: \u0437\u0430 \u0441\u0435\u0431\u044f \u0434\u043e 150 000, \u0437\u0430 \u0434\u0435\u0442\u0435\u0439 \u0434\u043e 110 000.",14300,"\u0434\u043e "+A.b(14300,!1)+"/\u0433\u043e\u0434","once")},
fq(a,b,c){var s
if(a.w.i(0,"paid_fit")){s=b.ch
s===$&&A.k()
if(s){s=b.z
s===$&&A.k()}else s=!1
s=!s}else s=!0
if(s)return
c.h(0,"t","\ud83c\udfcb\ufe0f",B.d,"\u0412\u044b\u0447\u0435\u0442: \u0444\u0438\u0442\u043d\u0435\u0441","13% \u043e\u0442 \u0440\u0430\u0441\u0445\u043e\u0434\u043e\u0432 \u0432 \u0441\u043e\u0441\u0442\u0430\u0432\u0435 \u0435\u0434\u0438\u043d\u043e\u0433\u043e \u0441\u043e\u0446\u0432\u044b\u0447\u0435\u0442\u0430 (\u043e\u0431\u0449\u0438\u0439 \u043b\u0438\u043c\u0438\u0442 150 000 \u20bd/\u0433\u043e\u0434).",19500,"\u0434\u043e "+A.b(19500,!1)+"/\u0433\u043e\u0434","once")},
fx(a,b,c){var s
if(a.w.i(0,"has_iis")){s=b.ch
s===$&&A.k()
if(s){s=b.z
s===$&&A.k()}else s=!1
s=!s}else s=!0
if(s)return
c.h(0,"t","\ud83d\udcc8",B.d,"\u0412\u044b\u0447\u0435\u0442 \u0418\u0418\u0421 \u0442\u0438\u043f \u0410","13% \u043e\u0442 \u043f\u043e\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0434\u043e 400 000 \u20bd.",52e3,"\u0434\u043e "+A.b(52e3,!1)+"/\u0433\u043e\u0434","once")},
fE(a,b,c){var s
if(a.w.i(0,"life_ins")){s=b.ch
s===$&&A.k()
if(s){s=b.z
s===$&&A.k()}else s=!1
s=!s}else s=!0
if(s)return
c.h(0,"t","\ud83d\udee1\ufe0f",B.d,"\u0412\u044b\u0447\u0435\u0442: \u0441\u0442\u0440\u0430\u0445\u043e\u0432\u0430\u043d\u0438\u0435 \u0436\u0438\u0437\u043d\u0438","13% \u043e\u0442 \u0432\u0437\u043d\u043e\u0441\u043e\u0432 \u043f\u043e \u0434\u043e\u0433\u043e\u0432\u043e\u0440\u0430\u043c \u0441\u0442\u0440\u0430\u0445\u043e\u0432\u0430\u043d\u0438\u044f \u0436\u0438\u0437\u043d\u0438 (3+ \u043b\u0435\u0442) \u0432 \u0441\u043e\u0441\u0442\u0430\u0432\u0435 \u0435\u0434\u0438\u043d\u043e\u0433\u043e \u0441\u043e\u0446\u0432\u044b\u0447\u0435\u0442\u0430 (\u043b\u0438\u043c\u0438\u0442 150 000 \u20bd/\u0433\u043e\u0434).",19500,"\u0434\u043e "+A.b(19500,!1)+"/\u0433\u043e\u0434","once")},
f2(a,b,c){if(!a.w.i(0,"charity"))return
c.h(0,"t","\ud83d\udc9d",B.d,"\u0412\u044b\u0447\u0435\u0442: \u043f\u043e\u0436\u0435\u0440\u0442\u0432\u043e\u0432\u0430\u043d\u0438\u044f","13% \u043e\u0442 \u0441\u0443\u043c\u043c\u044b \u043f\u043e\u0436\u0435\u0440\u0442\u0432\u043e\u0432\u0430\u043d\u0438\u0439, \u043d\u043e \u043d\u0435 \u0431\u043e\u043b\u0435\u0435 25% \u043e\u0442 \u0433\u043e\u0434\u043e\u0432\u043e\u0433\u043e \u0434\u043e\u0445\u043e\u0434\u0430.",0,"\u0434\u043e 25% \u043e\u0442 \u0434\u043e\u0445\u043e\u0434\u0430","benefit")},
dD(a,b){var s,r
if(a.a.length===0)return null
s=A.dB(a)
r=A.dC(a,b)
return new A.bE(r,s==null?null:$.dx().A(0,s))},
dB(a){var s="methodology_family_support",r="indexation_2026",q="methodology_social_support"
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
dC(a,b){switch(a.a){case"pregnancy_support":return"\u041f\u043e\u0441\u043e\u0431\u0438\u0435 \u043f\u043e\u043a\u0430\u0437\u0430\u043d\u043e, \u043f\u043e\u0442\u043e\u043c\u0443 \u0447\u0442\u043e \u0432 \u0430\u043d\u043a\u0435\u0442\u0435 \u043e\u0442\u043c\u0435\u0447\u0435\u043d\u0430 \u0431\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0441\u0442\u044c \u0438 \u0432\u044b\u0431\u0440\u0430\u043d \u0436\u0435\u043d\u0441\u043a\u0438\u0439 \u043f\u043e\u043b."
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
A.cn.prototype={}
J.aY.prototype={
B(a,b){return a===b},
gq(a){return A.bd(a)},
j(a){return"Instance of '"+A.be(a)+"'"},
gp(a){return A.a3(A.cy(this))}}
J.b_.prototype={
j(a){return String(a)},
gq(a){return a?519018:218159},
gp(a){return A.a3(t.y)},
$ij:1,
$iK:1}
J.aq.prototype={
B(a,b){return null==b},
j(a){return"null"},
gq(a){return 0},
$ij:1}
J.at.prototype={$io:1}
J.Q.prototype={
gq(a){return 0},
j(a){return String(a)}}
J.bc.prototype={}
J.aF.prototype={}
J.P.prototype={
j(a){var s=a[$.bv()]
if(s==null)return this.ad(a)
return"JavaScript function for "+J.aU(s)},
$iaa:1}
J.as.prototype={
gq(a){return 0},
j(a){return String(a)}}
J.au.prototype={
gq(a){return 0},
j(a){return String(a)}}
J.n.prototype={
m(a,b){A.a1(a).c.a(b)
a.$flags&1&&A.dv(a,29)
a.push(b)},
aA(a,b){var s,r=A.e2(a.length,"",!1,t.N)
for(s=0;s<a.length;++s)this.C(r,s,A.q(a[s]))
return r.join(b)},
ga2(a){if(a.length>0)return a[0]
throw A.l(A.cN())},
gaC(a){var s=a.length
if(s>0)return a[s-1]
throw A.l(A.cN())},
j(a){return A.cm(a,"[","]")},
gv(a){return new J.am(a,a.length,A.a1(a).k("am<1>"))},
gq(a){return A.bd(a)},
gu(a){return a.length},
C(a,b,c){A.a1(a).c.a(c)
a.$flags&2&&A.dv(a)
if(!(b>=0&&b<a.length))throw A.l(A.dp(a,b))
a[b]=c},
$if:1,
$im:1}
J.aZ.prototype={
aE(a){var s,r,q
if(!Array.isArray(a))return null
s=a.$flags|0
if((s&4)!==0)r="const, "
else if((s&2)!==0)r="unmodifiable, "
else r=(s&1)!==0?"fixed, ":""
q="Instance of '"+A.be(a)+"'"
if(r==="")return q
return q+" ("+r+"length: "+a.length+")"}}
J.bM.prototype={}
J.am.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
l(){var s,r=this,q=r.a,p=q.length
if(r.b!==p){q=A.cj(q)
throw A.l(q)}s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0},
$iF:1}
J.ar.prototype={
P(a,b){var s
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=B.i.gF(b)
if(this.gF(a)===s)return 0
if(this.gF(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gF(a){return a===0?1/a<0:a<0},
G(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.l(A.ee(""+a+".toInt()"))},
t(a){if(a<0)return-Math.round(-a)
else return Math.round(a)},
aq(a,b,c){if(B.i.P(b,c)>0)throw A.l(A.f0(b))
if(this.P(a,b)<0)return b
if(this.P(a,c)>0)return c
return a},
ab(a,b){var s
if(b>20)throw A.l(A.bS(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gF(a))return"-"+s
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
gp(a){return A.a3(t.H)},
$ii:1,
$ia6:1}
J.ap.prototype={
gp(a){return A.a3(t.S)},
$ij:1,
$id:1}
J.b0.prototype={
gp(a){return A.a3(t.i)},
$ij:1}
J.ab.prototype={
H(a,b,c){return a.substring(b,A.e6(b,c,a.length))},
ac(a,b){return this.H(a,b,null)},
S(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(0>=o)return A.u(p,0)
if(p.charCodeAt(0)===133){s=J.dV(p,1)
if(s===o)return""}else s=0
r=o-1
if(!(r>=0))return A.u(p,r)
q=p.charCodeAt(r)===133?J.dW(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
i(a,b){return A.hk(a,b,0)},
j(a){return a},
gq(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gp(a){return A.a3(t.N)},
gu(a){return a.length},
$ij:1,
$ibP:1,
$ix:1}
A.ac.prototype={
j(a){return"LateInitializationError: "+this.a}}
A.bU.prototype={}
A.aw.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
l(){var s,r=this,q=r.a,p=J.dq(q),o=p.gu(q)
if(r.b!==o)throw A.l(A.bH(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.au(q,s);++r.c
return!0},
$iF:1}
A.S.prototype={
gv(a){return new A.W(J.cl(this.a),this.b,this.$ti.k("W<1>"))}}
A.W.prototype={
l(){var s,r
for(s=this.a,r=this.b;s.l();)if(r.$1(s.gn()))return!0
return!1},
gn(){return this.a.gn()},
$iF:1}
A.A.prototype={}
A.G.prototype={$r:"+(1,2)",$s:1}
A.aX.prototype={
j(a){return A.co(this)},
ga1(){return new A.ah(this.aw(),A.B(this).k("ah<ax<1,2>>"))},
aw(){var s=this
return function(){var r=0,q=1,p=[],o,n,m,l,k
return function $async$ga1(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.gaB(),o=o.gv(o),n=A.B(s),m=n.y[1],n=n.k("ax<1,2>")
case 2:if(!o.l()){r=3
break}l=o.gn()
k=s.A(0,l)
r=4
return a.b=new A.ax(l,k==null?m.a(k):k,n),1
case 4:r=2
break
case 3:return 0
case 1:return a.c=p.at(-1),3}}}}}
A.N.prototype={
gu(a){return this.b.length},
gX(){var s=this.$keys
if(s==null){s=Object.keys(this.a)
this.$keys=s}return s},
ar(a){if(typeof a!="string")return!1
if("__proto__"===a)return!1
return this.a.hasOwnProperty(a)},
A(a,b){if(!this.ar(b))return null
return this.b[this.a[b]]},
a4(a,b){var s,r,q,p
this.$ti.k("~(1,2)").a(b)
s=this.gX()
r=this.b
for(q=s.length,p=0;p<q;++p)b.$2(s[p],r[p])},
gaB(){return new A.aI(this.gX(),this.$ti.k("aI<1>"))}}
A.aI.prototype={
gu(a){return this.a.length},
gv(a){var s=this.a
return new A.aJ(s,s.length,this.$ti.k("aJ<1>"))}}
A.aJ.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
l(){var s=this,r=s.c
if(r>=s.b){s.d=null
return!1}s.d=s.a[r]
s.c=r+1
return!0},
$iF:1}
A.aE.prototype={}
A.O.prototype={
j(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.dw(r==null?"unknown":r)+"'"},
$iaa:1,
gaF(){return this},
$C:"$1",
$R:1,
$D:null}
A.aW.prototype={$C:"$2",$R:2}
A.bj.prototype={}
A.bh.prototype={
j(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.dw(s)+"'"}}
A.a9.prototype={
B(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.a9))return!1
return this.$_target===b.$_target&&this.a===b.a},
gq(a){return(A.ds(this.a)^A.bd(this.$_target))>>>0},
j(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.be(this.a)+"'")}}
A.bT.prototype={
j(a){return"RuntimeError: "+this.a}}
A.av.prototype={
gu(a){return this.a},
A(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.az(b)},
az(a){var s,r,q=this.d
if(q==null)return null
s=q[this.a5(a)]
r=this.a6(s,a)
if(r<0)return null
return s[r].b},
C(a,b,c){var s,r,q,p,o,n,m=this,l=A.B(m)
l.c.a(b)
l.y[1].a(c)
if(typeof b=="string"){s=m.b
m.T(s==null?m.b=m.N():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=m.c
m.T(r==null?m.c=m.N():r,b,c)}else{q=m.d
if(q==null)q=m.d=m.N()
p=m.a5(b)
o=q[p]
if(o==null)q[p]=[m.O(b,c)]
else{n=m.a6(o,b)
if(n>=0)o[n].b=c
else o.push(m.O(b,c))}}},
a4(a,b){var s,r,q=this
A.B(q).k("~(1,2)").a(b)
s=q.e
r=q.r
while(s!=null){b.$2(s.a,s.b)
if(r!==q.r)throw A.l(A.bH(q))
s=s.c}},
T(a,b,c){var s,r=A.B(this)
r.c.a(b)
r.y[1].a(c)
s=a[b]
if(s==null)a[b]=this.O(b,c)
else s.b=c},
O(a,b){var s=this,r=A.B(s),q=new A.bN(r.c.a(a),r.y[1].a(b))
if(s.e==null)s.e=s.f=q
else s.f=s.f.c=q;++s.a
s.r=s.r+1&1073741823
return q},
a5(a){return J.L(a)&1073741823},
a6(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.bw(a[r].a,b))return r
return-1},
j(a){return A.co(this)},
N(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s}}
A.bN.prototype={}
A.cb.prototype={
$1(a){return this.a(a)},
$S:4}
A.cc.prototype={
$2(a,b){return this.a(a,b)},
$S:5}
A.cd.prototype={
$1(a){return this.a(A.br(a))},
$S:6}
A.a_.prototype={
j(a){return this.a_(!1)},
a_(a){var s,r,q,p,o,n=this.ak(),m=this.W(),l=(a?"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
if(!(q<m.length))return A.u(m,q)
o=m[q]
l=a?l+A.cS(o):l+A.q(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
ak(){var s,r=this.$s
while($.c0.length<=r)B.b.m($.c0,null)
s=$.c0[r]
if(s==null){s=this.af()
B.b.C($.c0,r,s)}return s},
af(){var s,r,q,p=this.$r,o=p.indexOf("("),n=p.substring(1,o),m=p.substring(o),l=m==="()"?0:m.replace(/[^,]/g,"").length+1,k=A.z(new Array(l),t.f)
for(s=0;s<l;++s)k[s]=s
if(n!==""){r=n.split(",")
s=r.length
for(q=l;s>0;){--q;--s
B.b.C(k,q,r[s])}}return A.cQ(k,t.K)}}
A.ag.prototype={
W(){return[this.a,this.b]},
B(a,b){if(b==null)return!1
return b instanceof A.ag&&this.$s===b.$s&&J.bw(this.a,b.a)&&J.bw(this.b,b.b)},
gq(a){return A.e4(this.$s,this.a,this.b,B.j)}}
A.b1.prototype={
j(a){return"RegExp/"+this.a+"/"+this.b.flags},
gZ(){var s=this,r=s.c
if(r!=null)return r
r=s.b
return s.c=A.cP(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,"g")},
ao(a,b){return new A.bl(this,b,0)},
aj(a,b){var s,r=this.gZ()
if(r==null)r=A.cw(r)
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
return new A.bo(s)},
$ibP:1,
$ie7:1}
A.bo.prototype={
gav(){var s=this.b
return s.index+s[0].length},
A(a,b){var s=this.b
if(!(b<s.length))return A.u(s,b)
return s[b]},
$iay:1,
$iaD:1}
A.bl.prototype={
gv(a){return new A.aH(this.a,this.b,this.c)}}
A.aH.prototype={
gn(){var s=this.d
return s==null?t.F.a(s):s},
l(){var s,r,q,p,o,n,m=this,l=m.b
if(l==null)return!1
s=m.c
r=l.length
if(s<=r){q=m.a
p=q.aj(l,s)
if(p!=null){m.d=p
o=p.gav()
if(p.b.index===o){s=!1
if(q.b.unicode){q=m.c
n=q+1
if(n<r){if(!(q>=0&&q<r))return A.u(l,q)
q=l.charCodeAt(q)
if(q>=55296&&q<=56319){if(!(n>=0))return A.u(l,n)
s=l.charCodeAt(n)
s=s>=56320&&s<=57343}}}o=(s?o+1:o)+1}m.c=o
return!0}}m.b=m.d=null
return!1},
$iF:1}
A.bX.prototype={
D(){var s=this.b
if(s===this)throw A.l(new A.ac("Local '' has not been initialized."))
return s},
sE(a){if(this.b!==this)throw A.l(new A.ac("Local '' has already been initialized."))
this.b=a}}
A.ad.prototype={
gp(a){return B.dj},
$ij:1}
A.aB.prototype={}
A.b3.prototype={
gp(a){return B.dk},
$ij:1}
A.ae.prototype={
gu(a){return a.length},
$iC:1}
A.az.prototype={$if:1,$im:1}
A.aA.prototype={$if:1,$im:1}
A.b4.prototype={
gp(a){return B.dl},
$ij:1}
A.b5.prototype={
gp(a){return B.dm},
$ij:1}
A.b6.prototype={
gp(a){return B.dn},
$ij:1}
A.b7.prototype={
gp(a){return B.dp},
$ij:1}
A.b8.prototype={
gp(a){return B.dq},
$ij:1}
A.b9.prototype={
gp(a){return B.ds},
$ij:1}
A.ba.prototype={
gp(a){return B.dt},
$ij:1}
A.aC.prototype={
gp(a){return B.du},
gu(a){return a.length},
$ij:1}
A.bb.prototype={
gp(a){return B.dv},
gu(a){return a.length},
$ij:1}
A.aK.prototype={}
A.aL.prototype={}
A.aM.prototype={}
A.aN.prototype={}
A.I.prototype={
k(a){return A.aS(v.typeUniverse,this,a)},
U(a){return A.d8(v.typeUniverse,this,a)}}
A.bm.prototype={}
A.c1.prototype={
j(a){return A.D(this.a,null)}}
A.bZ.prototype={
j(a){return this.a}}
A.bp.prototype={}
A.a0.prototype={
gn(){var s=this.b
return s==null?this.$ti.c.a(s):s},
an(a,b){var s,r,q
a=A.bq(a)
b=b
s=this.a
for(;;)try{r=s(this,a,b)
return r}catch(q){b=q
a=1}},
l(){var s,r,q,p,o=this,n=null,m=0
for(;;){s=o.d
if(s!=null)try{if(s.l()){o.b=s.gn()
return!0}else o.d=null}catch(r){n=r
m=1
o.d=null}q=o.an(m,n)
if(1===q)return!0
if(0===q){o.b=null
p=o.e
if(p==null||p.length===0){o.a=A.d3
return!1}if(0>=p.length)return A.u(p,-1)
o.a=p.pop()
m=0
n=null
continue}if(2===q){m=0
n=null
continue}if(3===q){n=o.c
o.c=null
p=o.e
if(p==null||p.length===0){o.b=null
o.a=A.d3
throw n
return!1}if(0>=p.length)return A.u(p,-1)
o.a=p.pop()
m=1
continue}throw A.l(A.e9("sync*"))}return!1},
aG(a){var s,r,q=this
if(a instanceof A.ah){s=a.a()
r=q.e
if(r==null)r=q.e=[]
B.b.m(r,q.a)
q.a=s
return 2}else{q.d=J.cl(a)
return 2}},
$iF:1}
A.ah.prototype={
gv(a){return new A.a0(this.a(),this.$ti.k("a0<1>"))}}
A.X.prototype={
gv(a){var s=this,r=new A.Y(s,s.r,A.B(s).k("Y<1>"))
r.c=s.e
return r},
gu(a){return this.a},
i(a,b){var s,r
if(b!=="__proto__"){s=this.b
if(s==null)return!1
return t.g.a(s[b])!=null}else{r=this.ag(b)
return r}},
ag(a){var s=this.d
if(s==null)return!1
return this.M(s[this.J(a)],a)>=0},
m(a,b){var s,r,q=this
A.B(q).c.a(b)
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.V(s==null?q.b=A.cs():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.V(r==null?q.c=A.cs():r,b)}else return q.ae(b)},
ae(a){var s,r,q,p=this
A.B(p).c.a(a)
s=p.d
if(s==null)s=p.d=A.cs()
r=p.J(a)
q=s[r]
if(q==null)s[r]=[p.I(a)]
else{if(p.M(q,a)>=0)return!1
q.push(p.I(a))}return!0},
aD(a,b){var s
if(b!=="__proto__")return this.am(this.b,b)
else{s=this.al(b)
return s}},
al(a){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.J(a)
r=n[s]
q=o.M(r,a)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.a0(p)
return!0},
V(a,b){A.B(this).c.a(b)
if(t.g.a(a[b])!=null)return!1
a[b]=this.I(b)
return!0},
am(a,b){var s
if(a==null)return!1
s=t.g.a(a[b])
if(s==null)return!1
this.a0(s)
delete a[b]
return!0},
Y(){this.r=this.r+1&1073741823},
I(a){var s,r=this,q=new A.bn(A.B(r).c.a(a))
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.Y()
return q},
a0(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.Y()},
J(a){return J.L(a)&1073741823},
M(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.bw(a[r].a,b))return r
return-1}}
A.bn.prototype={}
A.Y.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
l(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.l(A.bH(q))
else if(r==null){s.d=null
return!1}else{s.d=s.$ti.k("1?").a(r.a)
s.c=r.b
return!0}},
$iF:1}
A.p.prototype={
gv(a){return new A.aw(a,a.length,A.aT(a).k("aw<p.E>"))},
au(a,b){if(!(b<a.length))return A.u(a,b)
return a[b]},
j(a){return A.cm(a,"[","]")}}
A.b2.prototype={
gu(a){return this.a},
j(a){return A.co(this)}}
A.bO.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.q(a)
r.a=(r.a+=s)+": "
s=A.q(b)
r.a+=s},
$S:7}
A.af.prototype={
j(a){return A.cm(this,"{","}")},
$if:1,
$icq:1}
A.aO.prototype={}
A.bY.prototype={
j(a){return this.ai()}}
A.bI.prototype={}
A.by.prototype={
j(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.bJ(s)
return"Assertion failed"}}
A.bV.prototype={}
A.a7.prototype={
gL(){return"Invalid argument"+(!this.a?"(s)":"")},
gK(){return""},
j(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+p,n=s.gL()+q+o
if(!s.a)return n
return n+s.gK()+": "+A.bJ(s.gR())},
gR(){return this.b}}
A.bf.prototype={
gR(){return A.db(this.b)},
gL(){return"RangeError"},
gK(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.q(q):""
else if(q==null)s=": Not greater than or equal to "+A.q(r)
else if(q>r)s=": Not in inclusive range "+A.q(r)+".."+A.q(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.q(r)
return s}}
A.bL.prototype={
gR(){return A.bq(this.b)},
gL(){return"RangeError"},
gK(){if(A.bq(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gu(a){return this.f}}
A.bk.prototype={
j(a){return"Unsupported operation: "+this.a}}
A.bW.prototype={
j(a){return"UnimplementedError: "+this.a}}
A.bg.prototype={
j(a){return"Bad state: "+this.a}}
A.bG.prototype={
j(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.bJ(s)+"."}}
A.bK.prototype={
j(a){var s=this.a,r=""!==s?"FormatException: "+s:"FormatException",q=this.b
if(q.length>78)q=B.f.H(q,0,75)+"..."
return r+"\n"+q}}
A.f.prototype={
a3(a,b,c,d){var s,r
d.a(b)
A.B(this).U(d).k("1(1,f.E)").a(c)
for(s=this.gv(this),r=b;s.l();)r=c.$2(r,s.gn())
return r},
gu(a){var s,r=this.gv(this)
for(s=0;r.l();)++s
return s},
j(a){return A.dR(this,"(",")")}}
A.ax.prototype={
j(a){return"MapEntry("+A.q(this.a)+": "+A.q(this.b)+")"}}
A.V.prototype={
gq(a){return A.r.prototype.gq.call(this,0)},
j(a){return"null"}}
A.r.prototype={$ir:1,
B(a,b){return this===b},
gq(a){return A.bd(this)},
j(a){return"Instance of '"+A.be(this)+"'"},
gp(a){return A.ft(this)},
toString(){return this.j(this)}}
A.bi.prototype={
gu(a){return this.a.length},
j(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
A.bF.prototype={}
A.bz.prototype={
ap(a){var s,r=this.ah(a),q=A.a1(r),p=q.k("K(1)")
q=q.k("S<1>")
s=t.i
return new A.bF(r,new A.S(r,p.a(new A.bA()),q).a3(0,0,new A.bB(),s),new A.S(r,p.a(new A.bC()),q).a3(0,0,new A.bD(),s))},
ah(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=A.bR(a.a,null)
if(g==null)g=0
s=a.x
r=A.bQ(s)
if(r==null)r=0
q=A.bR(a.y,null)
if(q==null)q=1
q=Math.max(1,q)
p=A.bQ("")
if(p==null)p=0
o=A.bR("",null)
if(o==null)o=0
n=A.bQ(a.r)
if(n==null)n=99
m=a.d
l=A.fT(m)
k=new A.ao(a,g,r,q,p,o,n,l)
k.x=B.c.t(r*12*0.13)
q=k.y=r/q
s=k.z=B.f.S(s).length!==0
k.Q=s&&q<l.x
k.as=s&&q<l.x*2
k.at=m==="moscow"||m==="mo"
k.ax=m==="north"
k.ay=m==="dfo"||a.w.i(0,"i_dfo")
g=a.c
k.ch=g==="employed"||g==="matleave"
g=A.z([],t.E)
j=new A.an(g)
for(i=0;i<40;++i){h=B.aB[i]
j.b=h.a
h.b.$3(a,k,j)
j.b=""}g=A.cQ(g,t.p)
g=A.z(g.slice(0),A.a1(g))
return g}}
A.bA.prototype={
$1(a){return t.p.a(a).r==="monthly"},
$S:1}
A.bB.prototype={
$2(a,b){return A.cv(a)+t.p.a(b).w},
$S:2}
A.bC.prototype={
$1(a){return t.p.a(a).r==="once"},
$S:1}
A.bD.prototype={
$2(a,b){return A.cv(a)+t.p.a(b).w},
$S:2}
A.ao.prototype={
gaa(){var s=this.a.c
return s==="employed"||s==="self"||s==="ip"},
ga8(){var s=this.a.w
return!s.i(0,"excess_property")&&!s.i(0,"high_deposits")&&!s.i(0,"alimony_debt")},
ga9(){if(this.c>0)return!0
var s=this.a
if(s.w.i(0,"valid_zero_income"))return!0
s=s.c
return s==="student"||s==="pensioner"||s==="caregiver"||s==="matleave"},
ga7(){var s=this,r=s.Q
r===$&&A.k()
if(r)r=(!s.gaa()||s.c>=18062)&&s.ga8()&&s.ga9()
else r=!1
return r}}
A.an.prototype={
h(a,b,c,d,e,f,g,h,i){B.b.m(this.a,new A.M(this.b,e,b,f,h,i,g))}}
A.h.prototype={}
A.t.prototype={}
A.e.prototype={}
A.a.prototype={}
A.M.prototype={}
A.bE.prototype={}
A.a8.prototype={
ai(){return"BenefitTone."+this.b}}
A.w.prototype={}
A.aG.prototype={}
A.ca.prototype={
$1(a){return A.q(a.A(0,1))+" "},
$S:8}
A.cf.prototype={
$1(a){return t.a.a(a).a!=="99"},
$S:9}
A.cg.prototype={
$1(a){A.c(a)
return A.c7()},
$S:3}
A.ch.prototype={
$1(a){A.c(a)
return A.c7()},
$S:3}
A.c4.prototype={
$1(a){var s,r
A.c(a)
s=this.a.a
r=this.b
if($.cx.aD(0,s))A.c(r.classList).remove("on")
else{$.cx.m(0,s)
A.c(r.classList).add("on")}A.c7()},
$S:10}
A.c8.prototype={
$1(a){return t.p.a(a).c===this.a.a},
$S:1};(function aliases(){var s=J.Q.prototype
s.ad=s.j})();(function installTearOffs(){var s=hunkHelpers.installStaticTearOff
s(A,"fn",3,null,["$3"],["fQ"],0,0)
s(A,"fm",3,null,["$3"],["fN"],0,0)
s(A,"fk",3,null,["$3"],["fI"],0,0)
s(A,"fh",3,null,["$3"],["f1"],0,0)
s(A,"fo",3,null,["$3"],["hz"],0,0)
s(A,"fj",3,null,["$3"],["ff"],0,0)
s(A,"fl",3,null,["$3"],["fM"],0,0)
s(A,"fi",3,null,["$3"],["fa"],0,0)
s(A,"fp",3,null,["$3"],["hB"],0,0)
s(A,"fg",3,null,["$3"],["f_"],0,0)
s(A,"fZ",3,null,["$3"],["fO"],0,0)
s(A,"fW",3,null,["$3"],["f3"],0,0)
s(A,"h1",3,null,["$3"],["h2"],0,0)
s(A,"fY",3,null,["$3"],["fL"],0,0)
s(A,"fX",3,null,["$3"],["f8"],0,0)
s(A,"h_",3,null,["$3"],["fU"],0,0)
s(A,"h0",3,null,["$3"],["fV"],0,0)
s(A,"hh",3,null,["$3"],["hn"],0,0)
s(A,"hi",3,null,["$3"],["hy"],0,0)
s(A,"hb",3,null,["$3"],["fD"],0,0)
s(A,"ha",3,null,["$3"],["fw"],0,0)
s(A,"hd",3,null,["$3"],["fP"],0,0)
s(A,"h7",3,null,["$3"],["f9"],0,0)
s(A,"he",3,null,["$3"],["fS"],0,0)
s(A,"h5",3,null,["$3"],["f5"],0,0)
s(A,"hg",3,null,["$3"],["h4"],0,0)
s(A,"hc",3,null,["$3"],["fK"],0,0)
s(A,"hj",3,null,["$3"],["hA"],0,0)
s(A,"h9",3,null,["$3"],["fv"],0,0)
s(A,"hf",3,null,["$3"],["h3"],0,0)
s(A,"h6",3,null,["$3"],["f6"],0,0)
s(A,"h8",3,null,["$3"],["fb"],0,0)
s(A,"hp",3,null,["$3"],["f4"],0,0)
s(A,"hv",3,null,["$3"],["fR"],0,0)
s(A,"hu",3,null,["$3"],["fJ"],0,0)
s(A,"hq",3,null,["$3"],["fc"],0,0)
s(A,"hr",3,null,["$3"],["fq"],0,0)
s(A,"hs",3,null,["$3"],["fx"],0,0)
s(A,"ht",3,null,["$3"],["fE"],0,0)
s(A,"ho",3,null,["$3"],["f2"],0,0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.r,null)
q(A.r,[A.cn,J.aY,A.aE,J.am,A.bI,A.bU,A.aw,A.f,A.W,A.A,A.a_,A.aX,A.aJ,A.O,A.b2,A.bN,A.b1,A.bo,A.aH,A.bX,A.I,A.bm,A.c1,A.a0,A.af,A.bn,A.Y,A.p,A.bY,A.bK,A.ax,A.V,A.bi,A.bF,A.bz,A.ao,A.an,A.h,A.t,A.e,A.a,A.M,A.bE,A.w,A.aG])
q(J.aY,[J.b_,J.aq,J.at,J.as,J.au,J.ar,J.ab])
q(J.at,[J.Q,J.n,A.ad,A.aB])
q(J.Q,[J.bc,J.aF,J.P])
r(J.aZ,A.aE)
r(J.bM,J.n)
q(J.ar,[J.ap,J.b0])
q(A.bI,[A.ac,A.bT,A.bZ,A.by,A.bV,A.a7,A.bk,A.bW,A.bg,A.bG])
q(A.f,[A.S,A.aI,A.bl,A.ah])
r(A.ag,A.a_)
r(A.G,A.ag)
r(A.N,A.aX)
q(A.O,[A.aW,A.bj,A.cb,A.cd,A.bA,A.bC,A.ca,A.cf,A.cg,A.ch,A.c4,A.c8])
q(A.bj,[A.bh,A.a9])
r(A.av,A.b2)
q(A.aW,[A.cc,A.bO,A.bB,A.bD])
q(A.aB,[A.b3,A.ae])
q(A.ae,[A.aK,A.aM])
r(A.aL,A.aK)
r(A.az,A.aL)
r(A.aN,A.aM)
r(A.aA,A.aN)
q(A.az,[A.b4,A.b5])
q(A.aA,[A.b6,A.b7,A.b8,A.b9,A.ba,A.aC,A.bb])
r(A.bp,A.bZ)
r(A.aO,A.af)
r(A.X,A.aO)
q(A.a7,[A.bf,A.bL])
r(A.a8,A.bY)
s(A.aK,A.p)
s(A.aL,A.A)
s(A.aM,A.p)
s(A.aN,A.A)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{d:"int",i:"double",a6:"num",x:"String",K:"bool",V:"Null",m:"List",r:"Object",hG:"Map",o:"JSObject"},mangledNames:{},types:["~(aG,ao,an)","K(M)","i(i,M)","~(o)","@(@)","@(@,x)","@(x)","~(r?,r?)","x(ay)","K(t)","V(o)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.G&&a.b(c.a)&&b.b(c.b)}}
A.es(v.typeUniverse,JSON.parse('{"bc":"Q","aF":"Q","P":"Q","hH":"ad","b_":{"K":[],"j":[]},"aq":{"j":[]},"at":{"o":[]},"Q":{"o":[]},"n":{"m":["1"],"o":[],"f":["1"]},"aZ":{"aE":[]},"bM":{"n":["1"],"m":["1"],"o":[],"f":["1"]},"am":{"F":["1"]},"ar":{"i":[],"a6":[]},"ap":{"i":[],"d":[],"a6":[],"j":[]},"b0":{"i":[],"a6":[],"j":[]},"ab":{"x":[],"bP":[],"j":[]},"aw":{"F":["1"]},"S":{"f":["1"],"f.E":"1"},"W":{"F":["1"]},"G":{"ag":[],"a_":[]},"N":{"aX":["1","2"]},"aI":{"f":["1"],"f.E":"1"},"aJ":{"F":["1"]},"O":{"aa":[]},"aW":{"aa":[]},"bj":{"aa":[]},"bh":{"aa":[]},"a9":{"aa":[]},"av":{"b2":["1","2"]},"ag":{"a_":[]},"b1":{"e7":[],"bP":[]},"bo":{"aD":[],"ay":[]},"bl":{"f":["aD"],"f.E":"aD"},"aH":{"F":["aD"]},"ad":{"o":[],"j":[]},"aB":{"o":[]},"b3":{"o":[],"j":[]},"ae":{"C":["1"],"o":[]},"az":{"p":["i"],"m":["i"],"C":["i"],"o":[],"f":["i"],"A":["i"]},"aA":{"p":["d"],"m":["d"],"C":["d"],"o":[],"f":["d"],"A":["d"]},"b4":{"p":["i"],"m":["i"],"C":["i"],"o":[],"f":["i"],"A":["i"],"j":[],"p.E":"i"},"b5":{"p":["i"],"m":["i"],"C":["i"],"o":[],"f":["i"],"A":["i"],"j":[],"p.E":"i"},"b6":{"p":["d"],"m":["d"],"C":["d"],"o":[],"f":["d"],"A":["d"],"j":[],"p.E":"d"},"b7":{"p":["d"],"m":["d"],"C":["d"],"o":[],"f":["d"],"A":["d"],"j":[],"p.E":"d"},"b8":{"p":["d"],"m":["d"],"C":["d"],"o":[],"f":["d"],"A":["d"],"j":[],"p.E":"d"},"b9":{"p":["d"],"m":["d"],"C":["d"],"o":[],"f":["d"],"A":["d"],"j":[],"p.E":"d"},"ba":{"p":["d"],"m":["d"],"C":["d"],"o":[],"f":["d"],"A":["d"],"j":[],"p.E":"d"},"aC":{"p":["d"],"m":["d"],"C":["d"],"o":[],"f":["d"],"A":["d"],"j":[],"p.E":"d"},"bb":{"p":["d"],"m":["d"],"C":["d"],"o":[],"f":["d"],"A":["d"],"j":[],"p.E":"d"},"a0":{"F":["1"]},"ah":{"f":["1"],"f.E":"1"},"X":{"af":["1"],"cq":["1"],"f":["1"]},"Y":{"F":["1"]},"af":{"cq":["1"],"f":["1"]},"aO":{"af":["1"],"cq":["1"],"f":["1"]},"i":{"a6":[]},"d":{"a6":[]},"m":{"f":["1"]},"aD":{"ay":[]},"x":{"bP":[]},"dQ":{"m":["d"],"f":["d"]},"ed":{"m":["d"],"f":["d"]},"ec":{"m":["d"],"f":["d"]},"dO":{"m":["d"],"f":["d"]},"ea":{"m":["d"],"f":["d"]},"dP":{"m":["d"],"f":["d"]},"eb":{"m":["d"],"f":["d"]},"dL":{"m":["i"],"f":["i"]},"dM":{"m":["i"],"f":["i"]}}'))
A.er(v.typeUniverse,JSON.parse('{"ae":1,"aO":1}'))
var u={a:"\u041f\u0430\u0441\u043f\u043e\u0440\u0442 \u0444\u043e\u0440\u043c\u0443\u043b \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f Vyplaty Calculator v5"}
var t=(function rtii(){var s=A.ak
return{p:s("M"),w:s("N<x,x>"),J:s("N<x,i>"),Z:s("aa"),U:s("f<@>"),E:s("n<M>"),f:s("n<r>"),L:s("n<+(x,x)>"),I:s("n<t>"),s:s("n<x>"),b:s("n<e>"),q:s("n<@>"),T:s("aq"),m:s("o"),M:s("P"),D:s("C<@>"),j:s("m<@>"),P:s("V"),K:s("r"),O:s("hI"),d:s("+()"),F:s("aD"),a:s("t"),N:s("x"),Q:s("x(ay)"),R:s("j"),o:s("aF"),e:s("W<t>"),y:s("K"),l:s("K(t)"),i:s("i"),S:s("d"),V:s("cM<V>?"),z:s("o?"),X:s("r?"),v:s("x?"),A:s("x(ay)?"),g:s("bn?"),u:s("K?"),t:s("i?"),x:s("d?"),n:s("a6?"),H:s("a6")}})();(function constants(){var s=hunkHelpers.makeConstList
B.ao=J.aY.prototype
B.b=J.n.prototype
B.i=J.ap.prototype
B.c=J.ar.prototype
B.f=J.ab.prototype
B.ap=J.P.prototype
B.aq=J.at.prototype
B.o=J.bc.prototype
B.l=J.aF.prototype
B.d=new A.a8(0,"accent")
B.e=new A.a8(1,"success")
B.a=new A.a8(2,"warning")
B.h=new A.a8(3,"purple")
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

B.j=new A.bU()
B.aa=new A.w("mat_capital_2026","\u0421\u0424\u0420: \u0420\u0430\u0437\u043c\u0435\u0440 \u043c\u0430\u0442\u0435\u0440\u0438\u043d\u0441\u043a\u043e\u0433\u043e (\u0441\u0435\u043c\u0435\u0439\u043d\u043e\u0433\u043e) \u043a\u0430\u043f\u0438\u0442\u0430\u043b\u0430 \u0441 1 \u0444\u0435\u0432\u0440\u0430\u043b\u044f 2026 \u0433\u043e\u0434\u0430")
B.an=new A.w("childcare_1_5_2026","\u0421\u0424\u0420: \u043f\u043e\u0441\u043e\u0431\u0438\u0435 \u043f\u043e \u0443\u0445\u043e\u0434\u0443 \u0437\u0430 \u0440\u0435\u0431\u0451\u043d\u043a\u043e\u043c \u0434\u043e 1,5 \u043b\u0435\u0442")
B.am=new A.w("bir_2026","\u0421\u0424\u0420: \u043d\u043e\u0432\u043e\u0441\u0442\u0438 \u043f\u043e \u043f\u043e\u0441\u043e\u0431\u0438\u044e \u043f\u043e \u0431\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u0438 \u0440\u043e\u0434\u0430\u043c \u0437\u0430 2026 \u0433\u043e\u0434")
B.ac=new A.w("indexation_2026","\u041e\u0444\u0438\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0435 \u043e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u043d\u0438\u0435 \u043f\u0440\u0430\u0432\u043e\u0432\u044b\u0445 \u0430\u043a\u0442\u043e\u0432: \u041f\u043e\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u041f\u0440\u0430\u0432\u0438\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u0430 \u0420\u0424 \u043e\u0442 23.01.2026 \u2116 30")
B.ai=new A.w("unified_benefit_2026","\u0421\u0424\u0420: \u0440\u0435\u0433\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b \u043f\u043e \u0435\u0434\u0438\u043d\u043e\u043c\u0443 \u043f\u043e\u0441\u043e\u0431\u0438\u044e")
B.aj=new A.w("methodology_family_support",u.a)
B.af=new A.w("methodology_tax_support",u.a)
B.ag=new A.w("methodology_employment_support",u.a)
B.ah=new A.w("methodology_housing_support",u.a)
B.al=new A.w("methodology_pension_support",u.a)
B.ab=new A.w("methodology_social_support",u.a)
B.ak=new A.w("methodology_military_support",u.a)
B.ae=new A.w("methodology_regional_support",u.a)
B.ad=new A.w("methodology_honor_support",u.a)
B.ar=s([B.aa,B.an,B.am,B.ac,B.ai,B.aj,B.af,B.ag,B.ah,B.al,B.ab,B.ak,B.ae,B.ad],A.ak("n<w>"))
B.p=new A.G("","\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435")
B.aK=new A.G("single","\u041d\u0435 \u0432 \u0431\u0440\u0430\u043a\u0435")
B.aM=new A.G("married","\u0412 \u0431\u0440\u0430\u043a\u0435")
B.aN=new A.G("divorced","\u0420\u0430\u0437\u0432\u0435\u0434\u0451\u043d(\u0430)")
B.aL=new A.G("widow","\u0412\u0434\u043e\u0432\u0435\u0446 / \u0432\u0434\u043e\u0432\u0430")
B.as=s([B.p,B.aK,B.aM,B.aN,B.aL],t.L)
B.cu=new A.t("99","\u041d\u0435\u0442 \u0434\u0435\u0442\u0435\u0439")
B.ch=new A.t("0","\u0414\u043e 1 \u0433\u043e\u0434\u0430")
B.ck=new A.t("1.5","\u0414\u043e 1,5 \u043b\u0435\u0442")
B.cj=new A.t("3","\u0414\u043e 3 \u043b\u0435\u0442")
B.cq=new A.t("7","\u0414\u043e 7 \u043b\u0435\u0442")
B.cr=new A.t("17","\u0414\u043e 17 \u043b\u0435\u0442")
B.at=s([B.cu,B.ch,B.ck,B.cj,B.cq,B.cr],t.I)
B.cT=new A.e("i_dis1","\u0418\u043d\u0432\u0430\u043b\u0438\u0434\u043d\u043e\u0441\u0442\u044c I \u0433\u0440\u0443\u043f\u043f\u044b (\u0443 \u043c\u0435\u043d\u044f)")
B.dh=new A.e("i_dis2","\u0418\u043d\u0432\u0430\u043b\u0438\u0434\u043d\u043e\u0441\u0442\u044c II \u0433\u0440\u0443\u043f\u043f\u044b")
B.cv=new A.e("i_dis3","\u0418\u043d\u0432\u0430\u043b\u0438\u0434\u043d\u043e\u0441\u0442\u044c III \u0433\u0440\u0443\u043f\u043f\u044b")
B.cW=new A.e("i_pen","\u042f \u043f\u0435\u043d\u0441\u0438\u043e\u043d\u0435\u0440(\u043a\u0430)")
B.cH=new A.e("i_mil","\u0412\u043e\u0435\u043d\u043d\u043e\u0441\u043b\u0443\u0436\u0430\u0449\u0438\u0439 / \u0443\u0447\u0430\u0441\u0442\u043d\u0438\u043a \u0421\u0412\u041e")
B.cB=new A.e("i_vet","\u0412\u0435\u0442\u0435\u0440\u0430\u043d \u0431\u043e\u0435\u0432\u044b\u0445 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439")
B.cO=new A.e("i_stu","\u0421\u0442\u0443\u0434\u0435\u043d\u0442 \u043e\u0447\u043d\u043e\u0439 \u0444\u043e\u0440\u043c\u044b")
B.cL=new A.e("i_laid","\u0423\u0432\u043e\u043b\u0435\u043d(\u0430) \u043f\u043e \u0441\u043e\u043a\u0440\u0430\u0449\u0435\u043d\u0438\u044e")
B.cy=new A.e("i_sc","\u0418\u043d\u0442\u0435\u0440\u0435\u0441\u0443\u0435\u0442 \u0441\u043e\u0446\u043a\u043e\u043d\u0442\u0440\u0430\u043a\u0442")
B.d2=new A.e("i_chern","\u041b\u0438\u043a\u0432\u0438\u0434\u0430\u0442\u043e\u0440 / \u0447\u0435\u0440\u043d\u043e\u0431\u044b\u043b\u0435\u0446")
B.cU=new A.e("i_dfo","\u041f\u0435\u0440\u0435\u0435\u0437\u0434 \u043d\u0430 \u0414\u0430\u043b\u044c\u043d\u0438\u0439 \u0412\u043e\u0441\u0442\u043e\u043a")
B.cX=new A.e("i_repr","\u0420\u0435\u0430\u0431\u0438\u043b\u0438\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439")
B.d4=new A.e("i_vet_trud","\u0412\u0435\u0442\u0435\u0440\u0430\u043d \u0442\u0440\u0443\u0434\u0430")
B.cM=new A.e("i_honored","\u0417\u0430\u0441\u043b\u0443\u0436\u0435\u043d\u043d\u044b\u0439 (\u043c\u0430\u0441\u0442\u0435\u0440/\u0434\u0435\u044f\u0442\u0435\u043b\u044c/\u0430\u0440\u0442\u0438\u0441\u0442)")
B.cC=new A.e("i_people_art","\u041d\u0430\u0440\u043e\u0434\u043d\u044b\u0439 \u0430\u0440\u0442\u0438\u0441\u0442 / \u0434\u0435\u044f\u0442\u0435\u043b\u044c")
B.d5=new A.e("i_hero_labor","\u0413\u0435\u0440\u043e\u0439 \u0422\u0440\u0443\u0434\u0430 \u0420\u0424")
B.cY=new A.e("i_sick","\u041d\u0430\u0445\u043e\u0436\u0443\u0441\u044c \u043d\u0430 \u0431\u043e\u043b\u044c\u043d\u0438\u0447\u043d\u043e\u043c")
B.cA=new A.e("self_sick_insured","\u0421\u0430\u043c\u043e\u0437\u0430\u043d\u044f\u0442\u044b\u0439: \u0435\u0441\u0442\u044c \u0434\u043e\u0431\u0440\u043e\u0432\u043e\u043b\u044c\u043d\u043e\u0435 \u0441\u043e\u0446\u0441\u0442\u0440\u0430\u0445\u043e\u0432\u0430\u043d\u0438\u0435")
B.dg=new A.e("mil_conscript_spouse","\u0411\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u0430\u044f \u0436\u0435\u043d\u0430 \u0432\u043e\u0435\u043d\u043d\u043e\u0441\u043b\u0443\u0436\u0430\u0449\u0435\u0433\u043e \u043f\u043e \u043f\u0440\u0438\u0437\u044b\u0432\u0443")
B.d1=new A.e("mil_conscript_child","\u0420\u0435\u0431\u0451\u043d\u043e\u043a \u0432\u043e\u0435\u043d\u043d\u043e\u0441\u043b\u0443\u0436\u0430\u0449\u0435\u0433\u043e \u043f\u043e \u043f\u0440\u0438\u0437\u044b\u0432\u0443")
B.cV=new A.e("alimony_debt","\u0415\u0441\u0442\u044c \u0437\u0430\u0434\u043e\u043b\u0436\u0435\u043d\u043d\u043e\u0441\u0442\u044c \u043f\u043e \u0430\u043b\u0438\u043c\u0435\u043d\u0442\u0430\u043c")
B.dd=new A.e("valid_zero_income","\u0415\u0441\u0442\u044c \u0443\u0432\u0430\u0436\u0438\u0442\u0435\u043b\u044c\u043d\u0430\u044f \u043f\u0440\u0438\u0447\u0438\u043d\u0430 \u043d\u0443\u043b\u0435\u0432\u043e\u0433\u043e \u0434\u043e\u0445\u043e\u0434\u0430")
B.d7=new A.e("i_adopt","\u0423\u0441\u044b\u043d\u043e\u0432\u043b\u044f\u044e / \u0443\u0434\u043e\u0447\u0435\u0440\u044f\u044e \u0440\u0435\u0431\u0451\u043d\u043a\u0430")
B.cD=new A.e("i_donor","\u041f\u043e\u0447\u0451\u0442\u043d\u044b\u0439 \u0434\u043e\u043d\u043e\u0440 \u0420\u043e\u0441\u0441\u0438\u0438")
B.au=s([B.cT,B.dh,B.cv,B.cW,B.cH,B.cB,B.cO,B.cL,B.cy,B.d2,B.cU,B.cX,B.d4,B.cM,B.cC,B.d5,B.cY,B.cA,B.dg,B.d1,B.cV,B.dd,B.d7,B.cD],t.b)
B.av=s(["age","gender","employment","region","marital","children","youngestChildAge","income","familySize"],t.s)
B.d6=new A.e("own_home","\u0421\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0435 \u0436\u0438\u043b\u044c\u0451")
B.d8=new A.e("rent_home","\u0421\u043d\u0438\u043c\u0430\u0435\u043c \u0436\u0438\u043b\u044c\u0451")
B.dc=new A.e("has_mortgage","\u0414\u0435\u0439\u0441\u0442\u0432\u0443\u044e\u0449\u0430\u044f \u0438\u043f\u043e\u0442\u0435\u043a\u0430")
B.cG=new A.e("bought_recent","\u041a\u0443\u043f\u0438\u043b\u0438 \u0436\u0438\u043b\u044c\u0451 \u0432 2021\u20132026")
B.df=new A.e("high_utility","\u0416\u041a\u0425 > 22% \u0434\u043e\u0445\u043e\u0434\u0430")
B.cR=new A.e("need_housing","\u041d\u0443\u0436\u0434\u0430\u0435\u043c\u0441\u044f \u0432 \u0443\u043b\u0443\u0447\u0448\u0435\u043d\u0438\u0438 \u0436\u0438\u043b\u044c\u044f")
B.cP=new A.e("young_family","\u041f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0430 \xab\u041c\u043e\u043b\u043e\u0434\u0430\u044f \u0441\u0435\u043c\u044c\u044f\xbb")
B.cw=new A.e("communal","\u041a\u043e\u043c\u043c\u0443\u043d\u0430\u043b\u044c\u043d\u0430\u044f \u043a\u0432\u0430\u0440\u0442\u0438\u0440\u0430")
B.d_=new A.e("excess_property","\u0418\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u043e \u043c\u043e\u0436\u0435\u0442 \u043f\u0440\u0435\u0432\u044b\u0448\u0430\u0442\u044c \u043b\u0438\u043c\u0438\u0442 \u0434\u043b\u044f \u0435\u0434\u0438\u043d\u043e\u0433\u043e \u043f\u043e\u0441\u043e\u0431\u0438\u044f")
B.db=new A.e("high_deposits","\u0415\u0441\u0442\u044c \u043a\u0440\u0443\u043f\u043d\u044b\u0435 \u0432\u043a\u043b\u0430\u0434\u044b / \u043f\u0440\u043e\u0446\u0435\u043d\u0442\u044b \u0441\u0432\u0435\u0440\u0445 \u043b\u0438\u043c\u0438\u0442\u0430")
B.aw=s([B.d6,B.d8,B.dc,B.cG,B.df,B.cR,B.cP,B.cw,B.d_,B.db],t.b)
B.dF=s(["\u043e\u0431\u044b\u0447\u043d\u044b\u0439","\u0444\u0435\u0434\u0435\u0440\u0430\u043b\u044c\u043d\u044b\u0439"],t.s)
B.bw=new A.a("regular","\u041e\u0431\u044b\u0447\u043d\u044b\u0439 \u0440\u0435\u0433\u0438\u043e\u043d",!1,!1,!1,18939,20644,18371,null,null,null,null,3)
B.eY=s(["\u0441\u0435\u0432\u0435\u0440","\u0441\u0435\u0432\u0435\u0440\u043d\u044b\u0439"],t.s)
B.bA=new A.a("north","\u041a\u0440\u0430\u0439\u043d\u0438\u0439 \u0421\u0435\u0432\u0435\u0440",!1,!0,!1,18939,20644,18371,null,null,null,null,3)
B.dS=s(["\u0434\u0444\u043e","\u0434\u0430\u043b\u044c\u043d\u0438\u0439 \u0432\u043e\u0441\u0442\u043e\u043a"],t.s)
B.aZ=new A.a("dfo","\u0414\u0430\u043b\u044c\u043d\u0438\u0439 \u0412\u043e\u0441\u0442\u043e\u043a (legacy)",!1,!1,!0,18939,20644,18371,null,null,null,null,3)
B.eH=s(["\u043c\u043e\u0441\u043a\u0432\u0430","\u043c\u043e\u0441","msk"],t.s)
B.c2=new A.a("moscow","\u041c\u043e\u0441\u043a\u0432\u0430",!0,!1,!1,25342,28940,21903,5000,2500,25e3,null,3)
B.dy=s(["\u0441\u0430\u043d\u043a\u0442-\u043f\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433","\u043f\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433","\u0441\u043f\u0431","spb"],t.s)
B.bq=new A.a("spb","\u0421\u0430\u043d\u043a\u0442-\u041f\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433",!1,!1,!1,20644,22502,20025,null,null,null,224578,3)
B.dK=s(["\u0441\u0435\u0432\u0430\u0441\u0442\u043e\u043f\u043e\u043b\u044c"],t.s)
B.b1=new A.a("sevastopol","\u0433. \u0421\u0435\u0432\u0430\u0441\u0442\u043e\u043f\u043e\u043b\u044c",!1,!1,!1,19318,21057,18738,null,null,null,null,3)
B.dI=s(["\u0430\u0434\u044b\u0433\u0435\u044f","\u043c\u0430\u0439\u043a\u043e\u043f"],t.s)
B.bj=new A.a("adygea","\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0410\u0434\u044b\u0433\u0435\u044f",!1,!1,!1,16288,17754,15799,null,null,null,5e4,3)
B.dE=s(["\u0430\u043b\u0442\u0430\u0439 \u0440\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430","\u0433\u043e\u0440\u043d\u044b\u0439 \u0430\u043b\u0442\u0430\u0439","\u0433\u043e\u0440\u043d\u043e-\u0430\u043b\u0442\u0430\u0439\u0441\u043a"],t.s)
B.bQ=new A.a("altai_republic","\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0410\u043b\u0442\u0430\u0439",!1,!1,!1,17992,19611,17452,null,null,null,83850,3)
B.dZ=s(["\u0431\u0430\u0448\u043a\u043e\u0440\u0442\u043e\u0441\u0442\u0430\u043d","\u0431\u0430\u0448\u043a\u0438\u0440\u0438\u044f","\u0443\u0444\u0430"],t.s)
B.bi=new A.a("bashkortostan","\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0411\u0430\u0448\u043a\u043e\u0440\u0442\u043e\u0441\u0442\u0430\u043d",!1,!1,!1,16856,18373,16350,null,null,null,622800,3)
B.eS=s(["\u0431\u0443\u0440\u044f\u0442\u0438\u044f","\u0443\u043b\u0430\u043d-\u0443\u0434\u044d"],t.s)
B.bK=new A.a("buryatia","\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0411\u0443\u0440\u044f\u0442\u0438\u044f",!1,!1,!0,20644,22502,20025,null,null,null,249907,3)
B.ey=s(["\u0434\u0430\u0433\u0435\u0441\u0442\u0430\u043d","\u043c\u0430\u0445\u0430\u0447\u043a\u0430\u043b\u0430"],t.s)
B.bH=new A.a("dagestan","\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0414\u0430\u0433\u0435\u0441\u0442\u0430\u043d",!1,!1,!1,17234,18785,16717,null,null,null,null,3)
B.eo=s(["\u0438\u043d\u0433\u0443\u0448\u0435\u0442\u0438\u044f","\u043c\u0430\u0433\u0430\u0441"],t.s)
B.bs=new A.a("ingushetia","\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0418\u043d\u0433\u0443\u0448\u0435\u0442\u0438\u044f",!1,!1,!1,17803,19405,17269,null,null,null,null,3)
B.eJ=s(["\u043a\u0430\u0431\u0430\u0440\u0434\u0438\u043d\u043e-\u0431\u0430\u043b\u043a\u0430\u0440\u0438\u044f","\u043a\u0431\u0440","\u043d\u0430\u043b\u044c\u0447\u0438\u043a"],t.s)
B.bM=new A.a("kabardino_balkaria","\u041a\u0430\u0431\u0430\u0440\u0434\u0438\u043d\u043e-\u0411\u0430\u043b\u043a\u0430\u0440\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",!1,!1,!1,20265,22089,19657,null,null,null,null,3)
B.eN=s(["\u043a\u0430\u043b\u043c\u044b\u043a\u0438\u044f","\u044d\u043b\u0438\u0441\u0442\u0430"],t.s)
B.bn=new A.a("kalmykia","\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041a\u0430\u043b\u043c\u044b\u043a\u0438\u044f",!1,!1,!1,18560,20230,18003,null,null,null,null,3)
B.dN=s(["\u043a\u0430\u0440\u0430\u0447\u0430\u0435\u0432\u043e-\u0447\u0435\u0440\u043a\u0435\u0441\u0438\u044f","\u043a\u0447\u0440","\u0447\u0435\u0440\u043a\u0435\u0441\u0441\u043a"],t.s)
B.b_=new A.a("karachay_cherkessia","\u041a\u0430\u0440\u0430\u0447\u0430\u0435\u0432\u043e-\u0427\u0435\u0440\u043a\u0435\u0441\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",!1,!1,!1,17803,19405,17269,null,null,null,null,3)
B.e3=s(["\u043a\u0430\u0440\u0435\u043b\u0438\u044f","\u043f\u0435\u0442\u0440\u043e\u0437\u0430\u0432\u043e\u0434\u0441\u043a"],t.s)
B.bx=new A.a("karelia","\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041a\u0430\u0440\u0435\u043b\u0438\u044f",!1,!0,!1,21022,22914,20391,null,null,null,null,3)
B.dR=s(["\u043a\u043e\u043c\u0438","\u0441\u044b\u043a\u0442\u044b\u0432\u043a\u0430\u0440"],t.s)
B.bZ=new A.a("komi","\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041a\u043e\u043c\u0438",!1,!0,!1,21780,23740,21127,null,null,null,3e5,3)
B.e0=s(["\u043a\u0440\u044b\u043c","\u0441\u0438\u043c\u0444\u0435\u0440\u043e\u043f\u043e\u043b\u044c"],t.s)
B.b5=new A.a("crimea","\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041a\u0440\u044b\u043c",!1,!1,!1,18371,20024,17820,null,null,null,null,3)
B.eV=s(["\u043c\u0430\u0440\u0438\u0439 \u044d\u043b","\u0439\u043e\u0448\u043a\u0430\u0440-\u043e\u043b\u0430"],t.s)
B.c9=new A.a("mari_el","\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041c\u0430\u0440\u0438\u0439 \u042d\u043b",!1,!1,!1,16666,18166,16166,null,null,null,null,3)
B.ek=s(["\u043c\u043e\u0440\u0434\u043e\u0432\u0438\u044f","\u0441\u0430\u0440\u0430\u043d\u0441\u043a"],t.s)
B.b8=new A.a("mordovia","\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041c\u043e\u0440\u0434\u043e\u0432\u0438\u044f",!1,!1,!1,16098,17547,15615,null,null,null,null,3)
B.dX=s(["\u0441\u0430\u0445\u0430","\u044f\u043a\u0443\u0442\u0438\u044f","\u044f\u043a\u0443\u0442\u0441\u043a"],t.s)
B.bS=new A.a("sakha","\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0421\u0430\u0445\u0430 (\u042f\u043a\u0443\u0442\u0438\u044f)",!1,!0,!0,28598,31172,27740,null,null,null,3e5,3)
B.eD=s(["\u0441\u0435\u0432\u0435\u0440\u043d\u0430\u044f \u043e\u0441\u0435\u0442\u0438\u044f","\u0430\u043b\u0430\u043d\u0438\u044f","\u0432\u043b\u0430\u0434\u0438\u043a\u0430\u0432\u043a\u0430\u0437"],t.s)
B.bd=new A.a("north_ossetia","\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0421\u0435\u0432\u0435\u0440\u043d\u0430\u044f \u041e\u0441\u0435\u0442\u0438\u044f \u2014 \u0410\u043b\u0430\u043d\u0438\u044f",!1,!1,!1,17045,18579,16534,null,null,null,5e4,3)
B.dW=s(["\u0442\u0430\u0442\u0430\u0440\u0441\u0442\u0430\u043d","\u0442\u0430\u0442\u0430\u0440\u0438\u044f","\u043a\u0430\u0437\u0430\u043d\u044c","\u0440\u0442"],t.s)
B.bf=new A.a("tatarstan","\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0422\u0430\u0442\u0430\u0440\u0441\u0442\u0430\u043d",!1,!1,!1,16098,17547,15615,null,null,null,1e5,3)
B.eC=s(["\u0442\u044b\u0432\u0430","\u0442\u0443\u0432\u0430","\u043a\u044b\u0437\u044b\u043b"],t.s)
B.bV=new A.a("tyva","\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0422\u044b\u0432\u0430",!1,!1,!1,19128,20850,18554,null,null,null,null,3)
B.eT=s(["\u0443\u0434\u043c\u0443\u0440\u0442\u0438\u044f","\u0438\u0436\u0435\u0432\u0441\u043a"],t.s)
B.cd=new A.a("udmurtia","\u0423\u0434\u043c\u0443\u0440\u0442\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",!1,!1,!1,16856,18373,16350,null,null,null,null,3)
B.e6=s(["\u0445\u0430\u043a\u0430\u0441\u0438\u044f","\u0430\u0431\u0430\u043a\u0430\u043d"],t.s)
B.c0=new A.a("khakassia","\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0425\u0430\u043a\u0430\u0441\u0438\u044f",!1,!1,!1,19318,21057,18738,null,null,null,null,3)
B.en=s(["\u0447\u0435\u0447\u043d\u044f","\u0433\u0440\u043e\u0437\u043d\u044b\u0439"],t.s)
B.bb=new A.a("chechnya","\u0427\u0435\u0447\u0435\u043d\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",!1,!1,!1,18181,19817,17636,null,null,null,null,3)
B.dG=s(["\u0447\u0443\u0432\u0430\u0448\u0438\u044f","\u0447\u0435\u0431\u043e\u043a\u0441\u0430\u0440\u044b"],t.s)
B.aR=new A.a("chuvashia","\u0427\u0443\u0432\u0430\u0448\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",!1,!1,!1,16477,17960,15983,null,null,null,null,3)
B.eh=s(["\u0430\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439","\u0431\u0430\u0440\u043d\u0430\u0443\u043b"],t.s)
B.aT=new A.a("altai_krai","\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",!1,!1,!1,16856,18373,16350,null,null,null,83850,3)
B.eP=s(["\u0437\u0430\u0431\u0430\u0439\u043a\u0430\u043b\u044c\u0441\u043a\u0438\u0439","\u0437\u0430\u0431\u0430\u0439\u043a\u0430\u043b\u044c\u0435","\u0447\u0438\u0442\u0430"],t.s)
B.cc=new A.a("zabaykalsky","\u0417\u0430\u0431\u0430\u0439\u043a\u0430\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",!1,!1,!0,22159,24153,21494,null,null,null,null,3)
B.dU=s(["\u043a\u0430\u043c\u0447\u0430\u0442\u043a\u0430","\u043f\u0435\u0442\u0440\u043e\u043f\u0430\u0432\u043b\u043e\u0432\u0441\u043a-\u043a\u0430\u043c\u0447\u0430\u0442\u0441\u043a\u0438\u0439"],t.s)
B.bJ=new A.a("kamchatka","\u041a\u0430\u043c\u0447\u0430\u0442\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",!1,!0,!0,33333,36333,32333,null,null,null,5e5,3)
B.et=s(["\u043a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440","\u043a\u0443\u0431\u0430\u043d\u044c","\u0441\u043e\u0447\u0438","\u043d\u043e\u0432\u043e\u0440\u043e\u0441\u0441\u0438\u0439\u0441\u043a"],t.s)
B.c7=new A.a("krasnodar","\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",!1,!1,!1,18181,19817,17636,null,null,null,167135,3)
B.dD=s(["\u043a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a","\u043a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439"],t.s)
B.bm=new A.a("krasnoyarsk","\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",!1,!0,!1,21022,22914,20391,null,null,null,null,3)
B.eI=s(["\u043f\u0435\u0440\u043c\u044c","\u043f\u0435\u0440\u043c\u0441\u043a\u0438\u0439"],t.s)
B.bT=new A.a("perm","\u041f\u0435\u0440\u043c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",!1,!1,!1,17424,18992,16901,null,null,null,null,3)
B.eL=s(["\u043f\u0440\u0438\u043c\u043e\u0440\u0441\u043a\u0438\u0439","\u043f\u0440\u0438\u043c\u043e\u0440\u044c\u0435","\u0432\u043b\u0430\u0434\u0438\u0432\u043e\u0441\u0442\u043e\u043a"],t.s)
B.c8=new A.a("primorsky","\u041f\u0440\u0438\u043c\u043e\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",!1,!1,!0,22537,24565,21861,null,null,null,null,3)
B.dO=s(["\u0441\u0442\u0430\u0432\u0440\u043e\u043f\u043e\u043b\u044c","\u0441\u0442\u0430\u0432\u0440\u043e\u043f\u043e\u043b\u044c\u0441\u043a\u0438\u0439"],t.s)
B.aY=new A.a("stavropol","\u0421\u0442\u0430\u0432\u0440\u043e\u043f\u043e\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",!1,!1,!1,17045,18579,16534,null,null,null,null,3)
B.eK=s(["\u0445\u0430\u0431\u0430\u0440\u043e\u0432\u0441\u043a","\u0445\u0430\u0431\u0430\u0440\u043e\u0432\u0441\u043a\u0438\u0439"],t.s)
B.bL=new A.a("khabarovsk","\u0425\u0430\u0431\u0430\u0440\u043e\u0432\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",!1,!1,!0,23106,25186,23758,null,null,null,32e4,3)
B.eM=s(["\u0430\u043c\u0443\u0440\u0441\u043a\u0430\u044f","\u0431\u043b\u0430\u0433\u043e\u0432\u0435\u0449\u0435\u043d\u0441\u043a"],t.s)
B.b3=new A.a("amur","\u0410\u043c\u0443\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!0,21780,23740,21215,null,null,null,249907,3)
B.eB=s(["\u0430\u0440\u0445\u0430\u043d\u0433\u0435\u043b\u044c\u0441\u043a\u0430\u044f","\u0430\u0440\u0445\u0430\u043d\u0433\u0435\u043b\u044c\u0441\u043a"],t.s)
B.bo=new A.a("arkhangelsk","\u0410\u0440\u0445\u0430\u043d\u0433\u0435\u043b\u044c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!0,!1,21969,23946,21310,null,null,null,124609,3)
B.dJ=s(["\u0430\u0441\u0442\u0440\u0430\u0445\u0430\u043d\u0441\u043a\u0430\u044f","\u0430\u0441\u0442\u0440\u0430\u0445\u0430\u043d\u044c"],t.s)
B.c4=new A.a("astrakhan","\u0410\u0441\u0442\u0440\u0430\u0445\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,18371,20024,17820,null,null,null,null,3)
B.eF=s(["\u0431\u0435\u043b\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f","\u0431\u0435\u043b\u0433\u043e\u0440\u043e\u0434"],t.s)
B.aS=new A.a("belgorod","\u0411\u0435\u043b\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,15909,17341,15432,null,null,null,90570,3)
B.ex=s(["\u0431\u0440\u044f\u043d\u0441\u043a\u0430\u044f","\u0431\u0440\u044f\u043d\u0441\u043a"],t.s)
B.c3=new A.a("bryansk","\u0411\u0440\u044f\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,17424,18992,16901,null,null,null,2e5,3)
B.dw=s(["\u0432\u043b\u0430\u0434\u0438\u043c\u0438\u0440\u0441\u043a\u0430\u044f","\u0432\u043b\u0430\u0434\u0438\u043c\u0438\u0440"],t.s)
B.bt=new A.a("vladimir","\u0412\u043b\u0430\u0434\u0438\u043c\u0438\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,18371,20024,17820,null,null,null,75758,3)
B.eE=s(["\u0432\u043e\u043b\u0433\u043e\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f","\u0432\u043e\u043b\u0433\u043e\u0433\u0440\u0430\u0434"],t.s)
B.cf=new A.a("volgograd","\u0412\u043e\u043b\u0433\u043e\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,16288,17754,15799,null,null,null,null,3)
B.er=s(["\u0432\u043e\u043b\u043e\u0433\u043e\u0434\u0441\u043a\u0430\u044f","\u0432\u043e\u043b\u043e\u0433\u0434\u0430"],t.s)
B.bE=new A.a("vologda","\u0412\u043e\u043b\u043e\u0433\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,19128,20850,18555,null,null,null,null,3)
B.ed=s(["\u0432\u043e\u0440\u043e\u043d\u0435\u0436\u0441\u043a\u0430\u044f","\u0432\u043e\u0440\u043e\u043d\u0435\u0436"],t.s)
B.bc=new A.a("voronezh","\u0412\u043e\u0440\u043e\u043d\u0435\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,16666,18166,16166,null,null,null,172724,3)
B.ew=s(["\u0437\u0430\u043f\u043e\u0440\u043e\u0436\u0441\u043a\u0430\u044f","\u0437\u0430\u043f\u043e\u0440\u043e\u0436\u044c\u0435"],t.s)
B.bP=new A.a("zaporizhzhia","\u0417\u0430\u043f\u043e\u0440\u043e\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,18371,20024,17820,null,null,null,null,3)
B.e8=s(["\u0438\u0432\u0430\u043d\u043e\u0432\u0441\u043a\u0430\u044f","\u0438\u0432\u0430\u043d\u043e\u0432\u043e"],t.s)
B.aU=new A.a("ivanovo","\u0418\u0432\u0430\u043d\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,17803,19405,17269,null,null,null,null,3)
B.dT=s(["\u0438\u0440\u043a\u0443\u0442\u0441\u043a\u0430\u044f","\u0438\u0440\u043a\u0443\u0442\u0441\u043a"],t.s)
B.bG=new A.a("irkutsk","\u0418\u0440\u043a\u0443\u0442\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!0,!1,20075,21882,19473,null,null,null,153455,2)
B.eO=s(["\u043a\u0430\u043b\u0438\u043d\u0438\u043d\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f","\u043a\u0430\u043b\u0438\u043d\u0438\u043d\u0433\u0440\u0430\u0434"],t.s)
B.bu=new A.a("kaliningrad","\u041a\u0430\u043b\u0438\u043d\u0438\u043d\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,19507,21263,18922,null,null,null,null,3)
B.eX=s(["\u043a\u0430\u043b\u0443\u0436\u0441\u043a\u0430\u044f","\u043a\u0430\u043b\u0443\u0433\u0430"],t.s)
B.bz=new A.a("kaluga","\u041a\u0430\u043b\u0443\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,18181,19817,17636,null,null,null,null,3)
B.e4=s(["\u043a\u0435\u043c\u0435\u0440\u043e\u0432\u0441\u043a\u0430\u044f","\u043a\u0443\u0437\u0431\u0430\u0441\u0441","\u043a\u0435\u043c\u0435\u0440\u043e\u0432\u043e"],t.s)
B.bC=new A.a("kemerovo","\u041a\u0435\u043c\u0435\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c \u2014 \u041a\u0443\u0437\u0431\u0430\u0441\u0441",!1,!1,!1,17234,18785,16717,null,null,null,13e4,3)
B.dx=s(["\u043a\u0438\u0440\u043e\u0432\u0441\u043a\u0430\u044f","\u043a\u0438\u0440\u043e\u0432"],t.s)
B.c6=new A.a("kirov","\u041a\u0438\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,16856,18373,16350,null,null,null,null,3)
B.dP=s(["\u043a\u043e\u0441\u0442\u0440\u043e\u043c\u0441\u043a\u0430\u044f","\u043a\u043e\u0441\u0442\u0440\u043e\u043c\u0430"],t.s)
B.aQ=new A.a("kostroma","\u041a\u043e\u0441\u0442\u0440\u043e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,17424,18992,16901,null,null,null,null,3)
B.e2=s(["\u043a\u0443\u0440\u0433\u0430\u043d\u0441\u043a\u0430\u044f","\u043a\u0443\u0440\u0433\u0430\u043d"],t.s)
B.bO=new A.a("kurgan","\u041a\u0443\u0440\u0433\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,17803,19405,17269,null,null,null,null,3)
B.ep=s(["\u043a\u0443\u0440\u0441\u043a\u0430\u044f","\u043a\u0443\u0440\u0441\u043a"],t.s)
B.bN=new A.a("kursk","\u041a\u0443\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,16477,17960,15983,null,null,null,null,3)
B.dB=s(["\u043b\u0435\u043d\u0438\u043d\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f","\u043b\u0435\u043d\u043e\u0431\u043b\u0430\u0441\u0442\u044c"],t.s)
B.aP=new A.a("leningrad","\u041b\u0435\u043d\u0438\u043d\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,20265,22089,19657,null,null,null,125e3,2)
B.ef=s(["\u043b\u0438\u043f\u0435\u0446\u043a\u0430\u044f","\u043b\u0438\u043f\u0435\u0446\u043a"],t.s)
B.aV=new A.a("lipetsk","\u041b\u0438\u043f\u0435\u0446\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,15719,17134,15247,null,null,null,null,3)
B.ec=s(["\u043b\u043d\u0440","\u043b\u0443\u0433\u0430\u043d\u0441\u043a\u0430\u044f","\u043b\u0443\u0433\u0430\u043d\u0441\u043a"],t.s)
B.aX=new A.a("lugansk","\u041b\u0443\u0433\u0430\u043d\u0441\u043a\u0430\u044f \u041d\u0430\u0440\u043e\u0434\u043d\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",!1,!1,!1,17803,19405,17269,null,null,null,null,3)
B.dY=s(["\u043c\u0430\u0433\u0430\u0434\u0430\u043d\u0441\u043a\u0430\u044f","\u043c\u0430\u0433\u0430\u0434\u0430\u043d"],t.s)
B.bv=new A.a("magadan","\u041c\u0430\u0433\u0430\u0434\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!0,!0,32954,35920,32062,null,null,null,null,3)
B.dL=s(["\u043c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c","\u043f\u043e\u0434\u043c\u043e\u0441\u043a\u043e\u0432\u044c\u0435","\u043c\u043e"],t.s)
B.c1=new A.a("mo","\u041c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!0,!1,!1,20286,22112,19677,null,null,null,3e5,3)
B.ei=s(["\u043c\u0443\u0440\u043c\u0430\u043d\u0441\u043a\u0430\u044f","\u043c\u0443\u0440\u043c\u0430\u043d\u0441\u043a"],t.s)
B.b6=new A.a("murmansk","\u041c\u0443\u0440\u043c\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!0,!1,26406,28783,25614,null,null,null,null,3)
B.dC=s(["\u043d\u0438\u0436\u0435\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f","\u043d\u0438\u0436\u043d\u0438\u0439 \u043d\u043e\u0432\u0433\u043e\u0440\u043e\u0434","\u043d\u043d"],t.s)
B.bR=new A.a("nizhny_novgorod","\u041d\u0438\u0436\u0435\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,17803,19405,17269,null,null,null,7e5,3)
B.dV=s(["\u043d\u043e\u0432\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f","\u0432\u0435\u043b\u0438\u043a\u0438\u0439 \u043d\u043e\u0432\u0433\u043e\u0440\u043e\u0434"],t.s)
B.bY=new A.a("novgorod","\u041d\u043e\u0432\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,18560,20230,18003,null,null,null,null,3)
B.dQ=s(["\u043d\u043e\u0432\u043e\u0441\u0438\u0431\u0438\u0440\u0441\u043a\u0430\u044f","\u043d\u043e\u0432\u043e\u0441\u0438\u0431\u0438\u0440\u0441\u043a"],t.s)
B.bB=new A.a("novosibirsk","\u041d\u043e\u0432\u043e\u0441\u0438\u0431\u0438\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,18560,20230,18003,null,null,null,null,3)
B.em=s(["\u043e\u043c\u0441\u043a\u0430\u044f","\u043e\u043c\u0441\u043a"],t.s)
B.bU=new A.a("omsk","\u041e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,16477,17960,15983,null,null,null,null,3)
B.eQ=s(["\u043e\u0440\u0435\u043d\u0431\u0443\u0440\u0433\u0441\u043a\u0430\u044f","\u043e\u0440\u0435\u043d\u0431\u0443\u0440\u0433"],t.s)
B.bW=new A.a("orenburg","\u041e\u0440\u0435\u043d\u0431\u0443\u0440\u0433\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,16477,17960,15983,null,null,null,149713,3)
B.eW=s(["\u043e\u0440\u043b\u043e\u0432\u0441\u043a\u0430\u044f","\u043e\u0440\u0451\u043b","\u043e\u0440\u0435\u043b"],t.s)
B.c_=new A.a("orel","\u041e\u0440\u043b\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,17613,19198,17085,null,null,null,null,3)
B.dz=s(["\u043f\u0435\u043d\u0437\u0435\u043d\u0441\u043a\u0430\u044f","\u043f\u0435\u043d\u0437\u0430"],t.s)
B.ba=new A.a("penza","\u041f\u0435\u043d\u0437\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,15909,17341,15432,null,null,null,null,3)
B.dA=s(["\u043f\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f","\u043f\u0441\u043a\u043e\u0432"],t.s)
B.bX=new A.a("pskov","\u041f\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,18750,20438,18188,null,null,null,null,3)
B.e_=s(["\u0440\u043e\u0441\u0442\u043e\u0432\u0441\u043a\u0430\u044f","\u0440\u043e\u0441\u0442\u043e\u0432"],t.s)
B.ca=new A.a("rostov","\u0420\u043e\u0441\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,17803,19405,17269,null,null,null,151567,3)
B.ej=s(["\u0440\u044f\u0437\u0430\u043d\u0441\u043a\u0430\u044f","\u0440\u044f\u0437\u0430\u043d\u044c"],t.s)
B.bI=new A.a("ryazan","\u0420\u044f\u0437\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,16856,18373,16350,null,null,null,null,3)
B.ev=s(["\u0441\u0430\u043c\u0430\u0440\u0441\u043a\u0430\u044f","\u0441\u0430\u043c\u0430\u0440\u0430","\u0442\u043e\u043b\u044c\u044f\u0442\u0442\u0438"],t.s)
B.ce=new A.a("samara","\u0421\u0430\u043c\u0430\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,17803,19405,17269,null,null,null,null,3)
B.eR=s(["\u0441\u0430\u0440\u0430\u0442\u043e\u0432\u0441\u043a\u0430\u044f","\u0441\u0430\u0440\u0430\u0442\u043e\u0432"],t.s)
B.b0=new A.a("saratov","\u0421\u0430\u0440\u0430\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,15909,17341,15432,null,null,null,null,3)
B.ee=s(["\u0441\u0430\u0445\u0430\u043b\u0438\u043d\u0441\u043a\u0430\u044f","\u0441\u0430\u0445\u0430\u043b\u0438\u043d","\u044e\u0436\u043d\u043e-\u0441\u0430\u0445\u0430\u043b\u0438\u043d\u0441\u043a"],t.s)
B.be=new A.a("sakhalin","\u0421\u0430\u0445\u0430\u043b\u0438\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!0,!0,25757,28075,24984,null,null,null,5e5,3)
B.dM=s(["\u0441\u0432\u0435\u0440\u0434\u043b\u043e\u0432\u0441\u043a\u0430\u044f","\u0435\u043a\u0430\u0442\u0435\u0440\u0438\u043d\u0431\u0443\u0440\u0433","\u0441\u0432\u0435\u0440\u0434\u043b\u043e\u0432\u0441\u043a"],t.s)
B.b7=new A.a("sverdlovsk","\u0421\u0432\u0435\u0440\u0434\u043b\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,18750,20438,18188,null,null,null,175474,3)
B.eq=s(["\u0441\u043c\u043e\u043b\u0435\u043d\u0441\u043a\u0430\u044f","\u0441\u043c\u043e\u043b\u0435\u043d\u0441\u043a"],t.s)
B.bF=new A.a("smolensk","\u0421\u043c\u043e\u043b\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,18750,20438,18188,null,null,null,null,3)
B.e5=s(["\u0442\u0430\u043c\u0431\u043e\u0432\u0441\u043a\u0430\u044f","\u0442\u0430\u043c\u0431\u043e\u0432"],t.s)
B.c5=new A.a("tambov","\u0422\u0430\u043c\u0431\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,15719,17134,15247,null,null,null,3e5,3)
B.eg=s(["\u0442\u0432\u0435\u0440\u0441\u043a\u0430\u044f","\u0442\u0432\u0435\u0440\u044c"],t.s)
B.bD=new A.a("tver","\u0422\u0432\u0435\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,18560,20230,18003,null,null,null,null,3)
B.e7=s(["\u0442\u043e\u043c\u0441\u043a\u0430\u044f","\u0442\u043e\u043c\u0441\u043a"],t.s)
B.br=new A.a("tomsk","\u0422\u043e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!0,!1,18560,20230,18003,null,null,null,null,3)
B.ea=s(["\u0442\u0443\u043b\u044c\u0441\u043a\u0430\u044f","\u0442\u0443\u043b\u0430"],t.s)
B.bk=new A.a("tula","\u0422\u0443\u043b\u044c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,18939,20644,18371,null,null,null,null,3)
B.eU=s(["\u0442\u044e\u043c\u0435\u043d\u0441\u043a\u0430\u044f","\u0442\u044e\u043c\u0435\u043d\u044c","\u0442\u044e\u043c"],t.s)
B.bh=new A.a("tyumen","\u0422\u044e\u043c\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!0,!1,18939,20644,18371,null,null,null,1e5,3)
B.el=s(["\u0443\u043b\u044c\u044f\u043d\u043e\u0432\u0441\u043a\u0430\u044f","\u0443\u043b\u044c\u044f\u043d\u043e\u0432\u0441\u043a"],t.s)
B.aO=new A.a("ulyanovsk","\u0423\u043b\u044c\u044f\u043d\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,16856,18373,16350,null,null,null,5e4,2)
B.es=s(["\u0445\u0435\u0440\u0441\u043e\u043d\u0441\u043a\u0430\u044f","\u0445\u0435\u0440\u0441\u043e\u043d"],t.s)
B.by=new A.a("kherson","\u0425\u0435\u0440\u0441\u043e\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,18371,20024,17820,null,null,null,null,3)
B.eA=s(["\u0447\u0435\u043b\u044f\u0431\u0438\u043d\u0441\u043a\u0430\u044f","\u0447\u0435\u043b\u044f\u0431\u0438\u043d\u0441\u043a"],t.s)
B.cb=new A.a("chelyabinsk","\u0427\u0435\u043b\u044f\u0431\u0438\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,17424,18992,16901,null,null,null,133364,3)
B.dH=s(["\u044f\u0440\u043e\u0441\u043b\u0430\u0432\u0441\u043a\u0430\u044f","\u044f\u0440\u043e\u0441\u043b\u0430\u0432\u043b\u044c"],t.s)
B.b2=new A.a("yaroslavl","\u042f\u0440\u043e\u0441\u043b\u0430\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,18939,20644,18371,null,null,null,null,3)
B.eG=s(["\u0435\u0430\u043e","\u0435\u0432\u0440\u0435\u0439\u0441\u043a\u0430\u044f \u0430\u043e","\u0431\u0438\u0440\u043e\u0431\u0438\u0434\u0436\u0430\u043d"],t.s)
B.b4=new A.a("jewish_ao","\u0415\u0432\u0440\u0435\u0439\u0441\u043a\u0430\u044f \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!0,23674,25805,22964,null,null,null,null,3)
B.e9=s(["\u043d\u0430\u043e","\u043d\u0435\u043d\u0435\u0446\u043a\u0438\u0439","\u043d\u0430\u0440\u044c\u044f\u043d-\u043c\u0430\u0440"],t.s)
B.aW=new A.a("nenets_ao","\u041d\u0435\u043d\u0435\u0446\u043a\u0438\u0439 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433",!1,!0,!1,31060,33855,32026,null,null,null,4e5,3)
B.eu=s(["\u0445\u043c\u0430\u043e","\u044e\u0433\u0440\u0430","\u0445\u0430\u043d\u0442\u044b","\u0445\u0430\u043d\u0442\u044b-\u043c\u0430\u043d\u0441\u0438\u0439\u0441\u043a\u0438\u0439","\u0441\u0443\u0440\u0433\u0443\u0442"],t.s)
B.bg=new A.a("khanty_mansi_ao","\u0425\u0430\u043d\u0442\u044b-\u041c\u0430\u043d\u0441\u0438\u0439\u0441\u043a\u0438\u0439 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433 \u2014 \u042e\u0433\u0440\u0430",!1,!0,!1,22102,24091,22137,null,null,null,177e3,2)
B.ez=s(["\u0447\u0443\u043a\u043e\u0442\u043a\u0430","\u0447\u0443\u043a\u043e\u0442\u0441\u043a\u0438\u0439","\u0430\u043d\u0430\u0434\u044b\u0440\u044c"],t.s)
B.bp=new A.a("chukotka","\u0427\u0443\u043a\u043e\u0442\u0441\u043a\u0438\u0439 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433",!1,!0,!0,49431,53880,47948,null,null,null,null,3)
B.eb=s(["\u044f\u043d\u0430\u043e","\u044f\u043c\u0430\u043b","\u044f\u043c\u0430\u043b\u043e-\u043d\u0435\u043d\u0435\u0446\u043a\u0438\u0439","\u0441\u0430\u043b\u0435\u0445\u0430\u0440\u0434","\u044f\u043c\u0430"],t.s)
B.b9=new A.a("yamalo_nenets_ao","\u042f\u043c\u0430\u043b\u043e-\u041d\u0435\u043d\u0435\u0446\u043a\u0438\u0439 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433",!1,!0,!1,25946,28281,25168,null,null,null,1e6,3)
B.e1=s(["\u0434\u043d\u0440","\u0434\u043e\u043d\u0435\u0446\u043a\u0430\u044f","\u0434\u043e\u043d\u0435\u0446\u043a"],t.s)
B.bl=new A.a("donetsk","\u0414\u043e\u043d\u0435\u0446\u043a\u0430\u044f \u041d\u0430\u0440\u043e\u0434\u043d\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",!1,!1,!1,17803,19405,17269,null,null,null,null,3)
B.k=s([B.bw,B.bA,B.aZ,B.c2,B.bq,B.b1,B.bj,B.bQ,B.bi,B.bK,B.bH,B.bs,B.bM,B.bn,B.b_,B.bx,B.bZ,B.b5,B.c9,B.b8,B.bS,B.bd,B.bf,B.bV,B.cd,B.c0,B.bb,B.aR,B.aT,B.cc,B.bJ,B.c7,B.bm,B.bT,B.c8,B.aY,B.bL,B.b3,B.bo,B.c4,B.aS,B.c3,B.bt,B.cf,B.bE,B.bc,B.bP,B.aU,B.bG,B.bu,B.bz,B.bC,B.c6,B.aQ,B.bO,B.bN,B.aP,B.aV,B.aX,B.bv,B.c1,B.b6,B.bR,B.bY,B.bB,B.bU,B.bW,B.c_,B.ba,B.bX,B.ca,B.bI,B.ce,B.b0,B.be,B.b7,B.bF,B.c5,B.bD,B.br,B.bk,B.bh,B.aO,B.by,B.cb,B.b2,B.b4,B.aW,B.bg,B.bp,B.b9,B.bl],A.ak("n<a>"))
B.cz=new A.e("pregnant","\u0421\u0435\u0439\u0447\u0430\u0441 \u0431\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u0430")
B.cI=new A.e("newborn","\u0420\u0435\u0431\u0451\u043d\u043e\u043a \u0440\u043e\u0434\u0438\u043b\u0441\u044f \u0432 2025\u20132026")
B.cS=new A.e("disabled_child","\u0420\u0435\u0431\u0451\u043d\u043e\u043a-\u0438\u043d\u0432\u0430\u043b\u0438\u0434")
B.cx=new A.e("solo_parent","\u041e\u0434\u0438\u043d\u043e\u043a\u0438\u0439 \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u044c")
B.di=new A.e("used_matcap","\u041c\u0430\u0442\u043a\u0430\u043f\u0438\u0442\u0430\u043b \u0443\u0436\u0435 \u043f\u043e\u043b\u0443\u0447\u0435\u043d")
B.cF=new A.e("child_study","\u0420\u0435\u0431\u0451\u043d\u043e\u043a \u0443\u0447\u0438\u0442\u0441\u044f \u043e\u0447\u043d\u043e (\u0434\u043e 24)")
B.ax=s([B.cz,B.cI,B.cS,B.cx,B.di,B.cF],t.b)
B.cs=new A.t("employed","\u0420\u0430\u0431\u043e\u0442\u0430\u044e \u043e\u0444\u0438\u0446\u0438\u0430\u043b\u044c\u043d\u043e")
B.cp=new A.t("self","\u0421\u0430\u043c\u043e\u0437\u0430\u043d\u044f\u0442\u044b\u0439")
B.co=new A.t("ip","\u0418\u041f")
B.cl=new A.t("unemployed_reg","\u0411\u0435\u0437\u0440\u0430\u0431\u043e\u0442\u043d\u044b\u0439 (\u043d\u0430 \u0431\u0438\u0440\u0436\u0435)")
B.cn=new A.t("unemployed","\u0411\u0435\u0437\u0440\u0430\u0431\u043e\u0442\u043d\u044b\u0439")
B.cm=new A.t("pensioner","\u041f\u0435\u043d\u0441\u0438\u043e\u043d\u0435\u0440")
B.ci=new A.t("student","\u0421\u0442\u0443\u0434\u0435\u043d\u0442 \u043e\u0447\u043d\u043e\u0439 \u0444\u043e\u0440\u043c\u044b")
B.ct=new A.t("matleave","\u0412 \u0434\u0435\u043a\u0440\u0435\u0442\u0435 / \u043e\u0442\u043f\u0443\u0441\u043a\u0435 \u043f\u043e \u0443\u0445\u043e\u0434\u0443")
B.cg=new A.t("caregiver","\u0423\u0445\u043e\u0434 \u0437\u0430 \u0440\u043e\u0434\u0441\u0442\u0432\u0435\u043d\u043d\u0438\u043a\u043e\u043c")
B.ay=s([B.cs,B.cp,B.co,B.cl,B.cn,B.cm,B.ci,B.ct,B.cg],t.I)
B.d0=new A.e("has_dis1","\u0418\u043d\u0432\u0430\u043b\u0438\u0434 I \u0433\u0440\u0443\u043f\u043f\u044b \u0432 \u0441\u0435\u043c\u044c\u0435")
B.cN=new A.e("has_dis2","\u0418\u043d\u0432\u0430\u043b\u0438\u0434 II \u0433\u0440\u0443\u043f\u043f\u044b \u0432 \u0441\u0435\u043c\u044c\u0435")
B.cK=new A.e("has_dis3","\u0418\u043d\u0432\u0430\u043b\u0438\u0434 III \u0433\u0440\u0443\u043f\u043f\u044b \u0432 \u0441\u0435\u043c\u044c\u0435")
B.da=new A.e("elderly80","\u041f\u043e\u0436\u0438\u043b\u043e\u0439 80+ \u043b\u0435\u0442")
B.cQ=new A.e("vet_fam","\u0412\u0435\u0442\u0435\u0440\u0430\u043d \u0411\u0414 \u0432 \u0441\u0435\u043c\u044c\u0435")
B.az=s([B.d0,B.cN,B.cK,B.da,B.cQ],t.b)
B.de=new A.e("paid_med","\u041f\u043b\u0430\u0442\u0438\u043b(\u0430) \u0437\u0430 \u043b\u0435\u0447\u0435\u043d\u0438\u0435")
B.cZ=new A.e("paid_edu","\u041f\u043b\u0430\u0442\u0438\u043b(\u0430) \u0437\u0430 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435")
B.d3=new A.e("paid_fit","\u041f\u043b\u0430\u0442\u0438\u043b(\u0430) \u0437\u0430 \u0444\u0438\u0442\u043d\u0435\u0441")
B.cJ=new A.e("has_iis","\u0415\u0441\u0442\u044c \u0418\u0418\u0421")
B.cE=new A.e("charity","\u041f\u043e\u0436\u0435\u0440\u0442\u0432\u043e\u0432\u0430\u043d\u0438\u044f")
B.d9=new A.e("life_ins","\u0421\u0442\u0440\u0430\u0445\u043e\u0432\u0430\u043d\u0438\u0435 \u0436\u0438\u0437\u043d\u0438 (3+ \u043b\u0435\u0442)")
B.aA=s([B.de,B.cZ,B.d3,B.cJ,B.cE,B.d9],t.b)
B.y=new A.h("pregnancy_support",A.fn())
B.U=new A.h("newborn",A.fm())
B.P=new A.h("mat_capital",A.fk())
B.D=new A.h("care_leave",A.fh())
B.a1=new A.h("unified_children",A.fo())
B.A=new A.h("family_annual_payment",A.fj())
B.a3=new A.h("multi_child_mortgage",A.fl())
B.I=new A.h("disabled_child",A.fi())
B.a2=new A.h("young_family",A.fp())
B.C=new A.h("adoption",A.fg())
B.w=new A.h("child_tax_deduction",A.hp())
B.q=new A.h("property_deduction",A.hv())
B.t=new A.h("medical_deduction",A.hu())
B.L=new A.h("education_deduction",A.hq())
B.v=new A.h("fitness_deduction",A.hr())
B.N=new A.h("iis_deduction",A.hs())
B.S=new A.h("life_insurance_deduction",A.ht())
B.E=new A.h("charity_deduction",A.ho())
B.Z=new A.h("student",A.hh())
B.a_=new A.h("unemployment",A.hi())
B.O=new A.h("layoff",A.hb())
B.K=new A.h("housing_subsidy",A.ha())
B.W=new A.h("pension",A.hd())
B.H=new A.h("disability",A.h7())
B.T=new A.h("property_tax_relief",A.he())
B.z=new A.h("communal_housing",A.h5())
B.B=new A.h("social_contract",A.hg())
B.Q=new A.h("military",A.hc())
B.x=new A.h("conscript_family",A.h6())
B.a0=new A.h("veteran_family",A.hj())
B.M=new A.h("honors",A.h9())
B.Y=new A.h("sick_leave",A.hf())
B.J=new A.h("donor",A.h8())
B.V=new A.h("north",A.fZ())
B.F=new A.h("chernobyl",A.fW())
B.X=new A.h("rehabilitated",A.h1())
B.R=new A.h("moscow",A.fY())
B.G=new A.h("dfo",A.fX())
B.r=new A.h("regional_mat_cap",A.h0())
B.u=new A.h("regional_extra_info",A.h_())
B.aB=s([B.y,B.U,B.P,B.D,B.a1,B.A,B.a3,B.I,B.a2,B.C,B.w,B.q,B.t,B.L,B.v,B.N,B.S,B.E,B.Z,B.a_,B.O,B.K,B.W,B.H,B.T,B.z,B.B,B.Q,B.x,B.a0,B.M,B.Y,B.J,B.V,B.F,B.X,B.R,B.G,B.r,B.u],A.ak("n<h>"))
B.aI={moscow:0,spb:1,sevastopol:2,adygea:3,altai_republic:4,bashkortostan:5,buryatia:6,dagestan:7,ingushetia:8,kabardino_balkaria:9,kalmykia:10,karachay_cherkessia:11,karelia:12,komi:13,crimea:14,mari_el:15,mordovia:16,sakha:17,north_ossetia:18,tatarstan:19,tyva:20,udmurtia:21,khakassia:22,chechnya:23,chuvashia:24,altai_krai:25,zabaykalsky:26,kamchatka:27,krasnodar:28,krasnoyarsk:29,perm:30,primorsky:31,stavropol:32,khabarovsk:33,amur:34,arkhangelsk:35,astrakhan:36,belgorod:37,bryansk:38,vladimir:39,volgograd:40,vologda:41,voronezh:42,zaporizhzhia:43,ivanovo:44,irkutsk:45,kaliningrad:46,kaluga:47,kemerovo:48,kirov:49,kostroma:50,kurgan:51,kursk:52,leningrad:53,lipetsk:54,lugansk:55,magadan:56,mo:57,murmansk:58,nizhny_novgorod:59,novgorod:60,novosibirsk:61,omsk:62,orenburg:63,orel:64,penza:65,pskov:66,rostov:67,ryazan:68,samara:69,saratov:70,sakhalin:71,sverdlovsk:72,smolensk:73,tambov:74,tver:75,tomsk:76,tula:77,tyumen:78,ulyanovsk:79,kherson:80,chelyabinsk:81,yaroslavl:82,jewish_ao:83,nenets_ao:84,khanty_mansi_ao:85,chukotka:86,yamalo_nenets_ao:87,donetsk:88}
B.aC=new A.N(B.aI,[18971,17754,16613,14008,15473,14496,17754,14821,15311,17428,15962,15311,18079,18731,15799,14333,13844,24594,14659,13844,16450,14496,16613,15636,14170,14496,19057,28666,15636,18079,14985,19382,14659,19871,18731,18893,15799,13682,14985,15799,14008,16450,14333,15799,15311,17265,16776,15636,14821,14496,14985,15311,14170,17428,13518,15311,28340,17446,22709,15311,15962,15962,14170,14170,15147,13682,16125,15311,14496,15311,13682,22151,16125,16125,13518,15962,15962,16288,16288,14496,15799,14985,16288,20360,26712,19067,42511,22314,15311],t.J)
B.aG={chukotka:0,kamchatka:1,magadan:2,yamalo_nenets_ao:3,nenets_ao:4,khanty_mansi_ao:5,murmansk:6,sakha:7,sakhalin:8,komi:9,arkhangelsk:10,krasnoyarsk:11,irkutsk:12,tomsk:13,karelia:14,tyumen:15}
B.aD=new A.N(B.aG,[1,0.6,0.6,0.5,0.5,0.5,0.4,0.4,0.4,0.2,0.2,0.2,0.2,0.2,0.15,0.15],t.J)
B.aJ={c:0,w:1,h:2,p:3,s:4,m:5,t:6,r:7,a:8}
B.aE=new A.N(B.aJ,["\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67 \u0421\u0435\u043c\u044c\u044f \u0438 \u0434\u0435\u0442\u0438","\ud83d\udcbc \u0417\u0430\u043d\u044f\u0442\u043e\u0441\u0442\u044c","\ud83c\udfe0 \u0416\u0438\u043b\u044c\u0451","\ud83d\udc74 \u041f\u0435\u043d\u0441\u0438\u044f","\ud83e\udd1d \u0421\u043e\u0446\u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430","\ud83c\udf96\ufe0f \u0412\u043e\u0435\u043d\u043d\u0430\u044f \u0441\u043b\u0443\u0436\u0431\u0430","\ud83d\udcca \u041d\u0430\u043b\u043e\u0433\u043e\u0432\u044b\u0435 \u0432\u044b\u0447\u0435\u0442\u044b","\ud83c\udf0d \u0420\u0435\u0433\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435","\ud83c\udf96\ufe0f \u041f\u043e\u0447\u0451\u0442\u043d\u044b\u0435 \u0437\u0432\u0430\u043d\u0438\u044f \u0438 \u0437\u0430\u0441\u043b\u0443\u0433\u0438"],t.w)
B.aH={regular:0,north:1,dfo:2}
B.aF=new A.N(B.aH,["regular","north","dfo"],t.w)
B.dj=A.J("hD")
B.dk=A.J("hE")
B.dl=A.J("dL")
B.dm=A.J("dM")
B.dn=A.J("dO")
B.dp=A.J("dP")
B.dq=A.J("dQ")
B.dr=A.J("r")
B.ds=A.J("ea")
B.dt=A.J("eb")
B.du=A.J("ec")
B.dv=A.J("ed")})();(function staticFields(){$.c_=null
$.E=A.z([],t.f)
$.cR=null
$.cJ=null
$.cI=null
$.dr=null
$.dm=null
$.du=null
$.c9=null
$.ce=null
$.cD=null
$.c0=A.z([],A.ak("n<m<r>?>"))
$.cx=A.e_(t.N)})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal
s($,"hF","bv",()=>A.fs("_$dart_dartClosure"))
s($,"hL","dz",()=>A.z([new J.aZ()],A.ak("n<aE>")))
s($,"hK","ck",()=>A.ds(B.dr))
s($,"hC","dx",()=>{var r,q,p=A.dY(t.N,A.ak("w"))
for(r=0;r<14;++r){q=B.ar[r]
p.C(0,q.a,q)}return p})
s($,"hJ","dy",()=>new A.bz())})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:A.ad,SharedArrayBuffer:A.ad,ArrayBufferView:A.aB,DataView:A.b3,Float32Array:A.b4,Float64Array:A.b5,Int16Array:A.b6,Int32Array:A.b7,Int8Array:A.b8,Uint16Array:A.b9,Uint32Array:A.ba,Uint8ClampedArray:A.aC,CanvasPixelArray:A.aC,Uint8Array:A.bb})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,SharedArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.ae.$nativeSuperclassTag="ArrayBufferView"
A.aK.$nativeSuperclassTag="ArrayBufferView"
A.aL.$nativeSuperclassTag="ArrayBufferView"
A.az.$nativeSuperclassTag="ArrayBufferView"
A.aM.$nativeSuperclassTag="ArrayBufferView"
A.aN.$nativeSuperclassTag="ArrayBufferView"
A.aA.$nativeSuperclassTag="ArrayBufferView"})()
Function.prototype.$0=function(){return this()}
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$2=function(a,b){return this(a,b)}
Function.prototype.$3=function(a,b,c){return this(a,b,c)}
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q){s[q].removeEventListener("load",onLoad,false)}a(b.target)}for(var r=0;r<s.length;++r){s[r].addEventListener("load",onLoad,false)}})(function(a){v.currentScript=a
var s=A.fG
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()
//# sourceMappingURL=main.dart.js.map
