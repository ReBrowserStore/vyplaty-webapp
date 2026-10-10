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
if(a[b]!==s){A.lB(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.w(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.eN(b)
return new s(c,this)}:function(){if(s===null)s=A.eN(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.eN(a).prototype
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
eS(a,b,c,d){return{i:a,p:b,e:c,x:d}},
eP(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.eQ==null){A.kC()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.f(A.fk("Return interceptor for "+A.l(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.dy
if(o==null)o=$.dy=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.kJ(a)
if(p!=null)return p
if(typeof a=="function")return B.aG
s=Object.getPrototypeOf(a)
if(s==null)return B.w
if(s===Object.prototype)return B.w
if(typeof q=="function"){o=$.dy
if(o==null)o=$.dy=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.o,enumerable:false,writable:true,configurable:true})
return B.o}return B.o},
hY(a,b){if(a<0||a>4294967295)throw A.f(A.P(a,0,4294967295,"length",null))
return J.hZ(new Array(a),b)},
hZ(a,b){var s=A.w(a,b.j("u<0>"))
s.$flags=1
return s},
f3(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
i_(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.f3(r))break;++b}return b},
i0(a,b){var s,r,q
for(s=a.length;b>0;b=r){r=b-1
if(!(r<s))return A.c(a,r)
q=a.charCodeAt(r)
if(q!==32&&q!==13&&!J.f3(q))break}return b},
aw(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.b4.prototype
return J.c9.prototype}if(typeof a=="string")return J.ak.prototype
if(a==null)return J.b5.prototype
if(typeof a=="boolean")return J.c8.prototype
if(Array.isArray(a))return J.u.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ac.prototype
if(typeof a=="symbol")return J.ba.prototype
if(typeof a=="bigint")return J.b8.prototype
return a}if(a instanceof A.o)return a
return J.eP(a)},
eO(a){if(typeof a=="string")return J.ak.prototype
if(a==null)return a
if(Array.isArray(a))return J.u.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ac.prototype
if(typeof a=="symbol")return J.ba.prototype
if(typeof a=="bigint")return J.b8.prototype
return a}if(a instanceof A.o)return a
return J.eP(a)},
ks(a){if(a==null)return a
if(Array.isArray(a))return J.u.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ac.prototype
if(typeof a=="symbol")return J.ba.prototype
if(typeof a=="bigint")return J.b8.prototype
return a}if(a instanceof A.o)return a
return J.eP(a)},
kt(a){if(typeof a=="string")return J.ak.prototype
if(a==null)return a
if(!(a instanceof A.o))return J.aJ.prototype
return a},
cR(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.aw(a).H(a,b)},
hB(a,b){return J.kt(a).a8(a,b)},
a4(a){return J.aw(a).gu(a)},
bU(a){return J.ks(a).gB(a)},
el(a){return J.eO(a).gA(a)},
hC(a){return J.aw(a).gC(a)},
aX(a){return J.aw(a).k(a)},
c6:function c6(){},
c8:function c8(){},
b5:function b5(){},
b9:function b9(){},
ad:function ad(){},
ck:function ck(){},
aJ:function aJ(){},
ac:function ac(){},
b8:function b8(){},
ba:function ba(){},
u:function u(a){this.$ti=a},
c7:function c7(){},
d1:function d1(a){this.$ti=a},
aY:function aY(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
b6:function b6(){},
b4:function b4(){},
c9:function c9(){},
ak:function ak(){}},A={eo:function eo(){},
f5(a){return new A.al("Field '"+a+"' has been assigned during initialization.")},
i1(a){return new A.al("Field '"+a+"' has not been initialized.")},
e5(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
ag(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
eu(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
h5(a,b,c){return a},
eR(a){var s,r
for(s=$.O.length,r=0;r<s;++r)if(a===$.O[r])return!0
return!1},
f2(){return new A.bs("No element")},
al:function al(a){this.a=a},
c_:function c_(a){this.a=a},
d7:function d7(){},
bc:function bc(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
Q:function Q(a,b,c){this.a=a
this.b=b
this.$ti=c},
an:function an(a,b,c){this.a=a
this.b=b
this.$ti=c},
I:function I(){},
am:function am(){},
aK:function aK(){},
hN(){throw A.f(A.ah("Cannot modify unmodifiable Map"))},
hO(){throw A.f(A.ah("Cannot modify constant Set"))},
hh(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
m5(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.D.b(a)},
l(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.aX(a)
return s},
cl(a){var s,r=$.fc
if(r==null)r=$.fc=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
bm(a,b){var s,r=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(r==null)return null
if(3>=r.length)return A.c(r,3)
s=r[3]
if(s!=null)return parseInt(a,10)
if(r[2]!=null)return parseInt(a,16)
return null},
cn(a){var s,r
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return null
s=parseFloat(a)
if(isNaN(s)){r=B.a.aj(a)
if(r==="NaN"||r==="+NaN"||r==="-NaN")return s
return null}return s},
cm(a){var s,r,q,p
if(a instanceof A.o)return A.N(A.aV(a),null)
s=J.aw(a)
if(s===B.aF||s===B.aH||t.cr.b(a)){r=B.p(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.N(A.aV(a),null)},
fd(a){var s,r,q
if(a==null||typeof a=="number"||A.eH(a))return J.aX(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.ab)return a.k(0)
if(a instanceof A.ar)return a.aF(!0)
s=$.hz()
for(r=0;r<1;++r){q=s[r].bL(a)
if(q!=null)return q}return"Instance of '"+A.cm(a)+"'"},
i7(){if(!!self.location)return self.location.href
return null},
ih(a,b,c){var s,r,q,p
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
p=q<c?q:c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
ae(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((B.h.a6(s,10)|55296)>>>0,s&1023|56320)}}throw A.f(A.P(a,0,1114111,null,null))},
ij(a,b,c,d,e,f,g,h,i){var s,r,q,p=b-1
if(a<100){a+=400
p-=4800}s=B.h.M(h,1000)
r=new Date(a,p,c,d,e,f,g+B.h.aD(h-s,1000)).valueOf()
q=!0
if(!isNaN(r))if(!(r<-864e13))if(!(r>864e13))q=r===864e13&&s!==0
if(q)return null
return r},
aH(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
ig(a){var s=A.aH(a).getFullYear()+0
return s},
id(a){var s=A.aH(a).getMonth()+1
return s},
i9(a){var s=A.aH(a).getDate()+0
return s},
ia(a){var s=A.aH(a).getHours()+0
return s},
ic(a){var s=A.aH(a).getMinutes()+0
return s},
ie(a){var s=A.aH(a).getSeconds()+0
return s},
ib(a){var s=A.aH(a).getMilliseconds()+0
return s},
i8(a){var s=a.$thrownJsError
if(s==null)return null
return A.bS(s)},
ii(a,b){var s
if(a.$thrownJsError==null){s=new Error()
A.A(a,s)
a.$thrownJsError=s
s.stack=""}},
kz(a){throw A.f(A.eM(a))},
c(a,b){if(a==null)J.el(a)
throw A.f(A.e2(a,b))},
e2(a,b){var s,r="index"
if(!A.fS(b))return new A.U(!0,b,r,null)
s=J.el(a)
if(b<0||b>=s)return A.f1(b,s,a,r)
return A.fe(b,r)},
k8(a,b,c){if(a>c)return A.P(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return A.P(b,a,c,"end",null)
return new A.U(!0,b,"end",null)},
eM(a){return new A.U(!0,a,null,null)},
f(a){return A.A(a,new Error())},
A(a,b){var s
if(a==null)a=new A.a7()
b.dartException=a
s=A.lC
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
lC(){return J.aX(this.dartException)},
a_(a,b){throw A.A(a,b==null?new Error():b)},
a0(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.a_(A.jg(a,b,c),s)},
jg(a,b,c){var s,r,q,p,o,n,m,l,k
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
return new A.bt("'"+s+"': Cannot "+o+" "+l+k+n)},
ei(a){throw A.f(A.b0(a))},
a8(a){var s,r,q,p,o,n
a=A.hd(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.w([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.d9(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
da(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
fj(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
ep(a,b){var s=b==null,r=s?null:b.method
return new A.ca(a,r,s?null:b.receiver)},
cQ(a){if(a==null)return new A.d5(a)
if(typeof a!=="object")return a
if("dartException" in a)return A.az(a,a.dartException)
return A.jT(a)},
az(a,b){if(t.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
jT(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.h.a6(r,16)&8191)===10)switch(q){case 438:return A.az(a,A.ep(A.l(s)+" (Error "+q+")",null))
case 445:case 5007:A.l(s)
return A.az(a,new A.bl())}}if(a instanceof TypeError){p=$.hj()
o=$.hk()
n=$.hl()
m=$.hm()
l=$.hp()
k=$.hq()
j=$.ho()
$.hn()
i=$.hs()
h=$.hr()
g=p.F(s)
if(g!=null)return A.az(a,A.ep(A.a9(s),g))
else{g=o.F(s)
if(g!=null){g.method="call"
return A.az(a,A.ep(A.a9(s),g))}else if(n.F(s)!=null||m.F(s)!=null||l.F(s)!=null||k.F(s)!=null||j.F(s)!=null||m.F(s)!=null||i.F(s)!=null||h.F(s)!=null){A.a9(s)
return A.az(a,new A.bl())}}return A.az(a,new A.cu(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.br()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.az(a,new A.U(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.br()
return a},
bS(a){var s
if(a==null)return new A.bF(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.bF(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
h9(a){if(a==null)return J.a4(a)
if(typeof a=="object")return A.cl(a)
return J.a4(a)},
js(a,b,c,d,e,f){t.Z.a(a)
switch(A.aQ(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.f(new A.dm("Unsupported number of arguments for wrapped closure"))},
aU(a,b){var s=a.$identity
if(!!s)return s
s=A.k4(a,b)
a.$identity=s
return s},
k4(a,b){var s
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.js)},
hM(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.cq().constructor.prototype):Object.create(new A.aB(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.f_(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.hI(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.f_(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
hI(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.f("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.hG)}throw A.f("Error in functionType of tearoff")},
hJ(a,b,c,d){var s=A.eZ
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
f_(a,b,c,d){if(c)return A.hL(a,b,d)
return A.hJ(b.length,d,a,b)},
hK(a,b,c,d){var s=A.eZ,r=A.hH
switch(b?-1:a){case 0:throw A.f(new A.co("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
hL(a,b,c){var s,r
if($.eX==null)$.eX=A.eW("interceptor")
if($.eY==null)$.eY=A.eW("receiver")
s=b.length
r=A.hK(s,c,a,b)
return r},
eN(a){return A.hM(a)},
hG(a,b){return A.bK(v.typeUniverse,A.aV(a.a),b)},
eZ(a){return a.a},
hH(a){return a.b},
eW(a){var s,r,q,p=new A.aB("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.f(A.V("Field name "+a+" not found.",null))},
ku(a){return v.getIsolateTag(a)},
kJ(a){var s,r,q,p,o,n=A.a9($.h8.$1(a)),m=$.e3[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.e9[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.dM($.h3.$2(a,n))
if(q!=null){m=$.e3[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.e9[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.ef(s)
$.e3[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.e9[n]=s
return s}if(p==="-"){o=A.ef(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.ha(a,s)
if(p==="*")throw A.f(A.fk(n))
if(v.leafTags[n]===true){o=A.ef(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.ha(a,s)},
ha(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.eS(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
ef(a){return J.eS(a,!1,null,!!a.$iL)},
kL(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.ef(s)
else return J.eS(s,c,null,null)},
kC(){if(!0===$.eQ)return
$.eQ=!0
A.kD()},
kD(){var s,r,q,p,o,n,m,l
$.e3=Object.create(null)
$.e9=Object.create(null)
A.kB()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.hc.$1(o)
if(n!=null){m=A.kL(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
kB(){var s,r,q,p,o,n,m=B.ad()
m=A.aT(B.ae,A.aT(B.af,A.aT(B.q,A.aT(B.q,A.aT(B.ag,A.aT(B.ah,A.aT(B.ai(B.p),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.h8=new A.e6(p)
$.h3=new A.e7(o)
$.hc=new A.e8(n)},
aT(a,b){return a(b)||b},
k5(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
f4(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=function(g,h){try{return new RegExp(g,h)}catch(n){return n}}(a,s+r+q+p+f)
if(o instanceof RegExp)return o
throw A.f(A.H("Illegal RegExp pattern ("+String(o)+")",a,null))},
lo(a,b,c){var s=a.indexOf(b,c)
return s>=0},
h7(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
hd(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
he(a,b,c){var s
if(typeof b=="string")return A.lr(a,b,c)
if(b instanceof A.b7){s=b.gaA()
s.lastIndex=0
return a.replace(s,A.h7(c))}return A.lq(a,b,c)},
lq(a,b,c){var s,r,q,p
for(s=J.hB(b,a),s=s.gB(s),r=0,q="";s.n();){p=s.gp()
q=q+a.substring(r,p.gal())+c
r=p.gaa()}s=q+a.substring(r)
return s.charCodeAt(0)==0?s:s},
lr(a,b,c){var s,r,q
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}if(a.indexOf(b,0)<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(A.hd(b),"g"),A.h7(c))},
h2(a){return a},
lp(a,b,c,d){var s,r,q,p,o,n,m
for(s=b.a8(0,a),s=new A.bv(s.a,s.b,s.c),r=t.d,q=0,p="";s.n();){o=s.d
if(o==null)o=r.a(o)
n=o.b
m=n.index
p=p+A.l(A.h2(B.a.l(a,q,m)))+A.l(c.$1(o))
q=m+n[0].length}s=p+A.l(A.h2(B.a.N(a,q)))
return s.charCodeAt(0)==0?s:s},
S:function S(a,b){this.a=a
this.b=b},
b1:function b1(){},
W:function W(a,b,c){this.a=a
this.b=b
this.$ti=c},
by:function by(a,b){this.a=a
this.$ti=b},
ao:function ao(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
b2:function b2(){},
aD:function aD(a,b,c){this.a=a
this.b=b
this.$ti=c},
bq:function bq(){},
d9:function d9(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
bl:function bl(){},
ca:function ca(a,b,c){this.a=a
this.b=b
this.c=c},
cu:function cu(a){this.a=a},
d5:function d5(a){this.a=a},
bF:function bF(a){this.a=a
this.b=null},
ab:function ab(){},
bY:function bY(){},
bZ:function bZ(){},
cs:function cs(){},
cq:function cq(){},
aB:function aB(a,b){this.a=a
this.b=b},
co:function co(a){this.a=a},
bb:function bb(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
d2:function d2(a,b){this.a=a
this.b=b
this.c=null},
e6:function e6(a){this.a=a},
e7:function e7(a){this.a=a},
e8:function e8(a){this.a=a},
ar:function ar(){},
aN:function aN(){},
b7:function b7(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
cG:function cG(a){this.b=a},
cz:function cz(a,b,c){this.a=a
this.b=b
this.c=c},
bv:function bv(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
cr:function cr(a,b){this.a=a
this.c=b},
cJ:function cJ(a,b,c){this.a=a
this.b=b
this.c=c},
cK:function cK(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
lB(a){throw A.A(A.f5(a),new Error())},
p(){throw A.A(A.i1(""),new Error())},
hf(){throw A.A(A.f5(""),new Error())},
fr(){var s=new A.dk()
return s.b=s},
dk:function dk(){this.b=null},
jh(a){return a},
i6(a){return new Uint8Array(a)},
aa(a,b,c){if(a>>>0!==a||a>=c)throw A.f(A.e2(b,a))},
je(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw A.f(A.k8(a,b,c))
return b},
aG:function aG(){},
bi:function bi(){},
cb:function cb(){},
F:function F(){},
bg:function bg(){},
bh:function bh(){},
cc:function cc(){},
cd:function cd(){},
ce:function ce(){},
cf:function cf(){},
cg:function cg(){},
ch:function ch(){},
ci:function ci(){},
bj:function bj(){},
bk:function bk(){},
bA:function bA(){},
bB:function bB(){},
bC:function bC(){},
bD:function bD(){},
et(a,b){var s=b.c
return s==null?b.c=A.bI(a,"aF",[b.x]):s},
fg(a){var s=a.w
if(s===6||s===7)return A.fg(a.x)
return s===11||s===12},
il(a){return a.as},
av(a){return A.dE(v.typeUniverse,a,!1)},
at(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.at(a1,s,a3,a4)
if(r===s)return a2
return A.fB(a1,r,!0)
case 7:s=a2.x
r=A.at(a1,s,a3,a4)
if(r===s)return a2
return A.fA(a1,r,!0)
case 8:q=a2.y
p=A.aS(a1,q,a3,a4)
if(p===q)return a2
return A.bI(a1,a2.x,p)
case 9:o=a2.x
n=A.at(a1,o,a3,a4)
m=a2.y
l=A.aS(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.ey(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.aS(a1,j,a3,a4)
if(i===j)return a2
return A.fC(a1,k,i)
case 11:h=a2.x
g=A.at(a1,h,a3,a4)
f=a2.y
e=A.jQ(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.fz(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.aS(a1,d,a3,a4)
o=a2.x
n=A.at(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.ez(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.f(A.bW("Attempted to substitute unexpected RTI kind "+a0))}},
aS(a,b,c,d){var s,r,q,p,o=b.length,n=A.dJ(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.at(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
jR(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.dJ(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.at(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
jQ(a,b,c,d){var s,r=b.a,q=A.aS(a,r,c,d),p=b.b,o=A.aS(a,p,c,d),n=b.c,m=A.jR(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.cE()
s.a=q
s.b=o
s.c=m
return s},
w(a,b){a[v.arrayRti]=b
return a},
h6(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.kw(s)
return a.$S()}return null},
kE(a,b){var s
if(A.fg(b))if(a instanceof A.ab){s=A.h6(a)
if(s!=null)return s}return A.aV(a)},
aV(a){if(a instanceof A.o)return A.G(a)
if(Array.isArray(a))return A.Z(a)
return A.eG(J.aw(a))},
Z(a){var s=a[v.arrayRti],r=t.q
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
G(a){var s=a.$ti
return s!=null?s:A.eG(a)},
eG(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.jp(a,s)},
jp(a,b){var s=a instanceof A.ab?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.iQ(v.typeUniverse,s.name)
b.$ccache=r
return r},
kw(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.dE(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
kv(a){return A.au(A.G(a))},
eK(a){var s
if(a instanceof A.ar)return A.kd(a.$r,a.av())
s=a instanceof A.ab?A.h6(a):null
if(s!=null)return s
if(t.bW.b(a))return J.hC(a).a
if(Array.isArray(a))return A.Z(a)
return A.aV(a)},
au(a){var s=a.r
return s==null?a.r=new A.dD(a):s},
kd(a,b){var s,r,q=b,p=q.length
if(p===0)return t.r
if(0>=p)return A.c(q,0)
s=A.bK(v.typeUniverse,A.eK(q[0]),"@<0>")
for(r=1;r<p;++r){if(!(r<q.length))return A.c(q,r)
s=A.fD(v.typeUniverse,s,A.eK(q[r]))}return A.bK(v.typeUniverse,s,a)},
a1(a){return A.au(A.dE(v.typeUniverse,a,!1))},
jo(a){var s=this
s.b=A.jO(s)
return s.b(a)},
jO(a){var s,r,q,p,o
if(a===t.K)return A.jy
if(A.ax(a))return A.jC
s=a.w
if(s===6)return A.jm
if(s===1)return A.fU
if(s===7)return A.jt
r=A.jN(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.ax)){a.f="$i"+q
if(q==="n")return A.jw
if(a===t.m)return A.jv
return A.jB}}else if(s===10){p=A.k5(a.x,a.y)
o=p==null?A.fU:p
return o==null?A.bP(o):o}return A.jk},
jN(a){if(a.w===8){if(a===t.S)return A.fS
if(a===t.i||a===t.H)return A.jx
if(a===t.N)return A.jA
if(a===t.y)return A.eH}return null},
jn(a){var s=this,r=A.jj
if(A.ax(s))r=A.jd
else if(s===t.K)r=A.bP
else if(A.aW(s)){r=A.jl
if(s===t.a3)r=A.jc
else if(s===t.u)r=A.dM
else if(s===t.cG)r=A.ja
else if(s===t.ae)r=A.fO
else if(s===t.dd)r=A.jb
else if(s===t.aQ)r=A.z}else if(s===t.S)r=A.aQ
else if(s===t.N)r=A.a9
else if(s===t.y)r=A.dK
else if(s===t.H)r=A.fN
else if(s===t.i)r=A.dL
else if(s===t.m)r=A.a
s.a=r
return s.a(a)},
jk(a){var s=this
if(a==null)return A.aW(s)
return A.kG(v.typeUniverse,A.kE(a,s),s)},
jm(a){if(a==null)return!0
return this.x.b(a)},
jB(a){var s,r=this
if(a==null)return A.aW(r)
s=r.f
if(a instanceof A.o)return!!a[s]
return!!J.aw(a)[s]},
jw(a){var s,r=this
if(a==null)return A.aW(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.o)return!!a[s]
return!!J.aw(a)[s]},
jv(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.o)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
fT(a){if(typeof a=="object"){if(a instanceof A.o)return t.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
jj(a){var s=this
if(a==null){if(A.aW(s))return a}else if(s.b(a))return a
throw A.A(A.fP(a,s),new Error())},
jl(a){var s=this
if(a==null||s.b(a))return a
throw A.A(A.fP(a,s),new Error())},
fP(a,b){return new A.bG("TypeError: "+A.fs(a,A.N(b,null)))},
fs(a,b){return A.d0(a)+": type '"+A.N(A.eK(a),null)+"' is not a subtype of type '"+b+"'"},
T(a,b){return new A.bG("TypeError: "+A.fs(a,b))},
jt(a){var s=this
return s.x.b(a)||A.et(v.typeUniverse,s).b(a)},
jy(a){return a!=null},
bP(a){if(a!=null)return a
throw A.A(A.T(a,"Object"),new Error())},
jC(a){return!0},
jd(a){return a},
fU(a){return!1},
eH(a){return!0===a||!1===a},
dK(a){if(!0===a)return!0
if(!1===a)return!1
throw A.A(A.T(a,"bool"),new Error())},
ja(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.A(A.T(a,"bool?"),new Error())},
dL(a){if(typeof a=="number")return a
throw A.A(A.T(a,"double"),new Error())},
jb(a){if(typeof a=="number")return a
if(a==null)return a
throw A.A(A.T(a,"double?"),new Error())},
fS(a){return typeof a=="number"&&Math.floor(a)===a},
aQ(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.A(A.T(a,"int"),new Error())},
jc(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.A(A.T(a,"int?"),new Error())},
jx(a){return typeof a=="number"},
fN(a){if(typeof a=="number")return a
throw A.A(A.T(a,"num"),new Error())},
fO(a){if(typeof a=="number")return a
if(a==null)return a
throw A.A(A.T(a,"num?"),new Error())},
jA(a){return typeof a=="string"},
a9(a){if(typeof a=="string")return a
throw A.A(A.T(a,"String"),new Error())},
dM(a){if(typeof a=="string")return a
if(a==null)return a
throw A.A(A.T(a,"String?"),new Error())},
a(a){if(A.fT(a))return a
throw A.A(A.T(a,"JSObject"),new Error())},
z(a){if(a==null)return a
if(A.fT(a))return a
throw A.A(A.T(a,"JSObject?"),new Error())},
fY(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.N(a[q],b)
return s},
jG(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.fY(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.N(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
fQ(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=", ",a2=null
if(a5!=null){s=a5.length
if(a4==null)a4=A.w([],t.s)
else a2=a4.length
r=a4.length
for(q=s;q>0;--q)B.b.m(a4,"T"+(r+q))
for(p=t.X,o="<",n="",q=0;q<s;++q,n=a1){m=a4.length
l=m-1-q
if(!(l>=0))return A.c(a4,l)
o=o+n+a4[l]
k=a5[q]
j=k.w
if(!(j===2||j===3||j===4||j===5||k===p))o+=" extends "+A.N(k,a4)}o+=">"}else o=""
p=a3.x
i=a3.y
h=i.a
g=h.length
f=i.b
e=f.length
d=i.c
c=d.length
b=A.N(p,a4)
for(a="",a0="",q=0;q<g;++q,a0=a1)a+=a0+A.N(h[q],a4)
if(e>0){a+=a0+"["
for(a0="",q=0;q<e;++q,a0=a1)a+=a0+A.N(f[q],a4)
a+="]"}if(c>0){a+=a0+"{"
for(a0="",q=0;q<c;q+=3,a0=a1){a+=a0
if(d[q+1])a+="required "
a+=A.N(d[q+2],a4)+" "+d[q]}a+="}"}if(a2!=null){a4.toString
a4.length=a2}return o+"("+a+") => "+b},
N(a,b){var s,r,q,p,o,n,m,l=a.w
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=a.x
r=A.N(s,b)
q=s.w
return(q===11||q===12?"("+r+")":r)+"?"}if(l===7)return"FutureOr<"+A.N(a.x,b)+">"
if(l===8){p=A.jS(a.x)
o=a.y
return o.length>0?p+("<"+A.fY(o,b)+">"):p}if(l===10)return A.jG(a,b)
if(l===11)return A.fQ(a,b,null)
if(l===12)return A.fQ(a.x,b,a.y)
if(l===13){n=a.x
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.c(b,n)
return b[n]}return"?"},
jS(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
iR(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
iQ(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.dE(a,b,!1)
else if(typeof m=="number"){s=m
r=A.bJ(a,5,"#")
q=A.dJ(s)
for(p=0;p<s;++p)q[p]=r
o=A.bI(a,b,q)
n[b]=o
return o}else return m},
iP(a,b){return A.fL(a.tR,b)},
iO(a,b){return A.fL(a.eT,b)},
dE(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.fw(A.fu(a,null,b,!1))
r.set(b,s)
return s},
bK(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.fw(A.fu(a,b,c,!0))
q.set(c,r)
return r},
fD(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.ey(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
ai(a,b){b.a=A.jn
b.b=A.jo
return b},
bJ(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.Y(null,null)
s.w=b
s.as=c
r=A.ai(a,s)
a.eC.set(c,r)
return r},
fB(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.iM(a,b,r,c)
a.eC.set(r,s)
return s},
iM(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.ax(b))if(!(b===t.P||b===t.T))if(s!==6)r=s===7&&A.aW(b.x)
if(r)return b
else if(s===1)return t.P}q=new A.Y(null,null)
q.w=6
q.x=b
q.as=c
return A.ai(a,q)},
fA(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.iK(a,b,r,c)
a.eC.set(r,s)
return s},
iK(a,b,c,d){var s,r
if(d){s=b.w
if(A.ax(b)||b===t.K)return b
else if(s===1)return A.bI(a,"aF",[b])
else if(b===t.P||b===t.T)return t.bc}r=new A.Y(null,null)
r.w=7
r.x=b
r.as=c
return A.ai(a,r)},
iN(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.Y(null,null)
s.w=13
s.x=b
s.as=q
r=A.ai(a,s)
a.eC.set(q,r)
return r},
bH(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
iJ(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
bI(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.bH(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.Y(null,null)
r.w=8
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.ai(a,r)
a.eC.set(p,q)
return q},
ey(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.bH(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.Y(null,null)
o.w=9
o.x=s
o.y=r
o.as=q
n=A.ai(a,o)
a.eC.set(q,n)
return n},
fC(a,b,c){var s,r,q="+"+(b+"("+A.bH(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.Y(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.ai(a,s)
a.eC.set(q,r)
return r},
fz(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.bH(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.bH(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.iJ(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.Y(null,null)
p.w=11
p.x=b
p.y=c
p.as=r
o=A.ai(a,p)
a.eC.set(r,o)
return o},
ez(a,b,c,d){var s,r=b.as+("<"+A.bH(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.iL(a,b,c,r,d)
a.eC.set(r,s)
return s},
iL(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.dJ(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.at(a,b,r,0)
m=A.aS(a,c,r,0)
return A.ez(a,n,m,c!==m)}}l=new A.Y(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.ai(a,l)},
fu(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
fw(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.iD(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.fv(a,r,l,k,!1)
else if(q===46)r=A.fv(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.aq(a.u,a.e,k.pop()))
break
case 94:k.push(A.iN(a.u,k.pop()))
break
case 35:k.push(A.bJ(a.u,5,"#"))
break
case 64:k.push(A.bJ(a.u,2,"@"))
break
case 126:k.push(A.bJ(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.iF(a,k)
break
case 38:A.iE(a,k)
break
case 63:p=a.u
k.push(A.fB(p,A.aq(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.fA(p,A.aq(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.iC(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.fx(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.iH(a.u,a.e,o)
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
return A.aq(a.u,a.e,m)},
iD(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
fv(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.iR(s,o.x)[p]
if(n==null)A.a_('No "'+p+'" in "'+A.il(o)+'"')
d.push(A.bK(s,o,n))}else d.push(p)
return m},
iF(a,b){var s,r=a.u,q=A.ft(a,b),p=b.pop()
if(typeof p=="string")b.push(A.bI(r,p,q))
else{s=A.aq(r,a.e,p)
switch(s.w){case 11:b.push(A.ez(r,s,q,a.n))
break
default:b.push(A.ey(r,s,q))
break}}},
iC(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.ft(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.aq(p,a.e,o)
q=new A.cE()
q.a=s
q.b=n
q.c=m
b.push(A.fz(p,r,q))
return
case-4:b.push(A.fC(p,b.pop(),s))
return
default:throw A.f(A.bW("Unexpected state under `()`: "+A.l(o)))}},
iE(a,b){var s=b.pop()
if(0===s){b.push(A.bJ(a.u,1,"0&"))
return}if(1===s){b.push(A.bJ(a.u,4,"1&"))
return}throw A.f(A.bW("Unexpected extended operation "+A.l(s)))},
ft(a,b){var s=b.splice(a.p)
A.fx(a.u,a.e,s)
a.p=b.pop()
return s},
aq(a,b,c){if(typeof c=="string")return A.bI(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.iG(a,b,c)}else return c},
fx(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.aq(a,b,c[s])},
iH(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.aq(a,b,c[s])},
iG(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.f(A.bW("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.f(A.bW("Bad index "+c+" for "+b.k(0)))},
kG(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.B(a,b,null,c,null)
r.set(c,s)}return s},
B(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.ax(d))return!0
s=b.w
if(s===4)return!0
if(A.ax(b))return!1
if(b.w===1)return!0
r=s===13
if(r)if(A.B(a,c[b.x],c,d,e))return!0
q=d.w
p=t.P
if(b===p||b===t.T){if(q===7)return A.B(a,b,c,d.x,e)
return d===p||d===t.T||q===6}if(d===t.K){if(s===7)return A.B(a,b.x,c,d,e)
return s!==6}if(s===7){if(!A.B(a,b.x,c,d,e))return!1
return A.B(a,A.et(a,b),c,d,e)}if(s===6)return A.B(a,p,c,d,e)&&A.B(a,b.x,c,d,e)
if(q===7){if(A.B(a,b,c,d.x,e))return!0
return A.B(a,b,c,A.et(a,d),e)}if(q===6)return A.B(a,b,c,p,e)||A.B(a,b,c,d.x,e)
if(r)return!1
p=s!==11
if((!p||s===12)&&d===t.Z)return!0
o=s===10
if(o&&d===t.c)return!0
if(q===12){if(b===t.V)return!0
if(s!==12)return!1
n=b.y
m=d.y
l=n.length
if(l!==m.length)return!1
c=c==null?n:n.concat(c)
e=e==null?m:m.concat(e)
for(k=0;k<l;++k){j=n[k]
i=m[k]
if(!A.B(a,j,c,i,e)||!A.B(a,i,e,j,c))return!1}return A.fR(a,b.x,c,d.x,e)}if(q===11){if(b===t.V)return!0
if(p)return!1
return A.fR(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.ju(a,b,c,d,e)}if(o&&q===10)return A.jz(a,b,c,d,e)
return!1},
fR(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.B(a3,a4.x,a5,a6.x,a7))return!1
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
if(!A.B(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.B(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.B(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!A.B(a3,e[a+2],a7,g,a5))return!1
break}}while(b<d){if(f[b+1])return!1
b+=3}return!0},
ju(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
while(n!==m){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.bK(a,b,r[o])
return A.fM(a,p,null,c,d.y,e)}return A.fM(a,b.y,null,c,d.y,e)},
fM(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.B(a,b[s],d,e[s],f))return!1
return!0},
jz(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.B(a,r[s],c,q[s],e))return!1
return!0},
aW(a){var s=a.w,r=!0
if(!(a===t.P||a===t.T))if(!A.ax(a))if(s!==6)r=s===7&&A.aW(a.x)
return r},
ax(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
fL(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
dJ(a){return a>0?new Array(a):v.typeUniverse.sEA},
Y:function Y(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
cE:function cE(){this.c=this.b=this.a=null},
dD:function dD(a){this.a=a},
cD:function cD(){},
bG:function bG(a){this.a=a},
iy(){var s,r,q
if(self.scheduleImmediate!=null)return A.jW()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.aU(new A.dh(s),1)).observe(r,{childList:true})
return new A.dg(s,r,q)}else if(self.setImmediate!=null)return A.jX()
return A.jY()},
iz(a){self.scheduleImmediate(A.aU(new A.di(t.M.a(a)),0))},
iA(a){self.setImmediate(A.aU(new A.dj(t.M.a(a)),0))},
iB(a){t.M.a(a)
A.iI(0,a)},
iI(a,b){var s=new A.dB()
s.b5(a,b)
return s},
fy(a,b,c){return 0},
em(a){var s
if(t.C.b(a)){s=a.gL()
if(s!=null)return s}return B.m},
jq(a,b){if($.E===B.i)return null
return null},
jr(a,b){if($.E!==B.i)A.jq(a,b)
if(t.C.b(a)){b=a.gL()
if(b==null){A.ii(a,B.m)
b=B.m}}else b=B.m
return new A.a2(a,b)},
ew(a,b,c){var s,r,q,p,o={},n=o.a=a
for(s=t._;r=n.a,(r&4)!==0;n=a){a=s.a(n.c)
o.a=a}if(n===b){s=A.im()
b.ao(new A.a2(new A.U(!0,n,null,"Cannot complete a future with itself"),s))
return}q=b.a&1
s=n.a=r|q
if((s&24)===0){p=t.F.a(b.c)
b.a=b.a&1|4
b.c=n
n.aB(p)
return}if(!c)if(b.c==null)n=(s&16)===0||q!==0
else n=!1
else n=!0
if(n){p=b.R()
b.O(o.a)
A.aM(b,p)
return}b.a^=2
A.cO(null,null,b.b,t.M.a(new A.dr(o,b)))},
aM(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d={},c=d.a=a
for(s=t.n,r=t.F;;){q={}
p=c.a
o=(p&16)===0
n=!o
if(b==null){if(n&&(p&1)===0){m=s.a(c.c)
A.eJ(m.a,m.b)}return}q.a=b
l=b.a
for(c=b;l!=null;c=l,l=k){c.a=null
A.aM(d.a,c)
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
A.eJ(j.a,j.b)
return}g=$.E
if(g!==h)$.E=h
else g=null
c=c.c
if((c&15)===8)new A.dv(q,d,n).$0()
else if(o){if((c&1)!==0)new A.du(q,j).$0()}else if((c&2)!==0)new A.dt(d,q).$0()
if(g!=null)$.E=g
c=q.c
if(c instanceof A.R){p=q.a.$ti
p=p.j("aF<2>").b(c)||!p.y[1].b(c)}else p=!1
if(p){f=q.a.b
if((c.a&24)!==0){e=r.a(f.c)
f.c=null
b=f.S(e)
f.a=c.a&30|f.a&1
f.c=c.c
d.a=c
continue}else A.ew(c,f,!0)
return}}f=q.a.b
e=r.a(f.c)
f.c=null
b=f.S(e)
c=q.b
p=q.c
if(!c){f.$ti.c.a(p)
f.a=8
f.c=p}else{s.a(p)
f.a=f.a&1|16
f.c=p}d.a=f
c=f}},
jH(a,b){var s=t.Q
if(s.b(a))return s.a(a)
s=t.v
if(s.b(a))return s.a(a)
throw A.f(A.eU(a,"onError",u.c))},
jE(){var s,r
for(s=$.aR;s!=null;s=$.aR){$.bR=null
r=s.b
$.aR=r
if(r==null)$.bQ=null
s.a.$0()}},
jP(){$.eI=!0
try{A.jE()}finally{$.bR=null
$.eI=!1
if($.aR!=null)$.eT().$1(A.h4())}},
h0(a){var s=new A.cA(a),r=$.bQ
if(r==null){$.aR=$.bQ=s
if(!$.eI)$.eT().$1(A.h4())}else $.bQ=r.b=s},
jL(a){var s,r,q,p=$.aR
if(p==null){A.h0(a)
$.bR=$.bQ
return}s=new A.cA(a)
r=$.bR
if(r==null){s.b=p
$.aR=$.bR=s}else{q=r.b
s.b=q
$.bR=r.b=s
if(q==null)$.bQ=s}},
eJ(a,b){A.jL(new A.dX(a,b))},
fX(a,b,c,d,e){var s,r=$.E
if(r===c)return d.$0()
$.E=c
s=r
try{r=d.$0()
return r}finally{$.E=s}},
jK(a,b,c,d,e,f,g){var s,r=$.E
if(r===c)return d.$1(e)
$.E=c
s=r
try{r=d.$1(e)
return r}finally{$.E=s}},
jJ(a,b,c,d,e,f,g,h,i){var s,r=$.E
if(r===c)return d.$2(e,f)
$.E=c
s=r
try{r=d.$2(e,f)
return r}finally{$.E=s}},
cO(a,b,c,d){t.M.a(d)
if(B.i!==c){d=c.bv(d)
d=d}A.h0(d)},
dh:function dh(a){this.a=a},
dg:function dg(a,b,c){this.a=a
this.b=b
this.c=c},
di:function di(a){this.a=a},
dj:function dj(a){this.a=a},
dB:function dB(){},
dC:function dC(a,b){this.a=a
this.b=b},
as:function as(a,b){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.$ti=b},
aO:function aO(a,b){this.a=a
this.$ti=b},
a2:function a2(a,b){this.a=a
this.b=b},
cB:function cB(){},
bw:function bw(a,b){this.a=a
this.$ti=b},
bx:function bx(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
R:function R(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
dn:function dn(a,b){this.a=a
this.b=b},
ds:function ds(a,b){this.a=a
this.b=b},
dr:function dr(a,b){this.a=a
this.b=b},
dq:function dq(a,b){this.a=a
this.b=b},
dp:function dp(a,b){this.a=a
this.b=b},
dv:function dv(a,b,c){this.a=a
this.b=b
this.c=c},
dw:function dw(a,b){this.a=a
this.b=b},
dx:function dx(a){this.a=a},
du:function du(a,b){this.a=a
this.b=b},
dt:function dt(a,b){this.a=a
this.b=b},
cA:function cA(a){this.a=a
this.b=null},
bO:function bO(){},
dX:function dX(a,b){this.a=a
this.b=b},
cH:function cH(){},
dA:function dA(a,b){this.a=a
this.b=b},
f6(a,b){return new A.bb(a.j("@<0>").G(b).j("bb<1,2>"))},
f7(a){return new A.ap(a.j("ap<0>"))},
i2(a){return new A.ap(a.j("ap<0>"))},
ex(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
i3(a,b){var s,r=A.f7(b)
for(s=J.bU(a);s.n();)r.m(0,b.a(s.gp()))
return r},
i4(a,b){var s=A.f7(b)
s.bt(0,a)
return s},
eq(a){var s,r
if(A.eR(a))return"{...}"
s=new A.J("")
try{r={}
B.b.m($.O,a)
s.a+="{"
r.a=!0
a.aK(0,new A.d3(r,s))
s.a+="}"}finally{if(0>=$.O.length)return A.c($.O,-1)
$.O.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
ap:function ap(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cF:function cF(a){this.a=a
this.c=this.b=null},
bz:function bz(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
q:function q(){},
bd:function bd(){},
d3:function d3(a,b){this.a=a
this.b=b},
cM:function cM(){},
bf:function bf(){},
aL:function aL(a,b){this.a=a
this.$ti=b},
af:function af(){},
bE:function bE(){},
bL:function bL(){},
j8(a,b,c){var s,r,q,p,o=c-b
if(o<=4096)s=$.hx()
else s=new Uint8Array(o)
for(r=J.eO(a),q=0;q<o;++q){p=r.t(a,b+q)
if((p&255)!==p)p=255
s[q]=p}return s},
j7(a,b,c,d){var s=a?$.hw():$.hv()
if(s==null)return null
if(0===c&&d===b.length)return A.fK(s,b)
return A.fK(s,b.subarray(c,d))},
fK(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){}return null},
eV(a,b,c,d,e,f){if(B.h.M(f,4)!==0)throw A.f(A.H("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw A.f(A.H("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw A.f(A.H("Invalid base64 padding, more than two '=' characters",a,b))},
j9(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
dH:function dH(){},
dG:function dG(){},
bX:function bX(){},
cS:function cS(){},
aC:function aC(){},
c1:function c1(){},
c3:function c3(){},
cy:function cy(){},
df:function df(){},
dI:function dI(a){this.b=0
this.c=a},
de:function de(a){this.a=a},
dF:function dF(a){this.a=a
this.b=16
this.c=0},
kF(a){var s=A.bm(a,null)
if(s!=null)return s
throw A.f(A.H(a,null,null))},
hQ(a,b){a=A.A(a,new Error())
if(a==null)a=A.bP(a)
a.stack=b.k(0)
throw a},
f9(a,b,c,d){var s,r=J.hY(a,d)
if(a!==0&&b!=null)for(s=0;s<a;++s)r[s]=b
return r},
i5(a,b,c){var s,r,q=A.w([],c.j("u<0>"))
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.ei)(a),++r)B.b.m(q,c.a(a[r]))
q.$flags=1
return q},
f8(a,b){var s,r=A.w([],b.j("u<0>"))
for(s=J.bU(a);s.n();)B.b.m(r,s.gp())
return r},
fa(a,b){var s=A.i5(a,!1,b)
s.$flags=3
return s},
fi(a,b,c){var s,r
A.ff(b,"start")
if(c!=null){s=c-b
if(s<0)throw A.f(A.P(c,b,null,"end",null))
if(s===0)return""}r=A.ip(a,b,c)
return r},
ip(a,b,c){var s=a.length
if(b>=s)return""
return A.ih(a,b,c==null||c>s?s:c)},
es(a,b){return new A.b7(a,A.f4(a,!1,!0,b,!1,""))},
fh(a,b,c){var s=J.bU(b)
if(!s.n())return a
if(c.length===0){do a+=A.l(s.gp())
while(s.n())}else{a+=A.l(s.gp())
while(s.n())a=a+c+A.l(s.gp())}return a},
iw(){var s,r,q=A.i7()
if(q==null)throw A.f(A.ah("'Uri.base' is not supported"))
s=$.fn
if(s!=null&&q===$.fm)return s
r=A.ix(q)
$.fn=r
$.fm=q
return r},
j6(a,b,c,d){var s,r,q,p,o,n="0123456789ABCDEF"
if(c===B.l){s=$.hu()
s=s.b.test(b)}else s=!1
if(s)return b
r=B.ak.a9(b)
for(s=r.length,q=0,p="";q<s;++q){o=r[q]
if(o<128&&(u.f.charCodeAt(o)&a)!==0)p+=A.ae(o)
else p=d&&o===32?p+"+":p+"%"+n[o>>>4&15]+n[o&15]}return p.charCodeAt(0)==0?p:p},
im(){return A.bS(new Error())},
b3(a,b,c){var s=A.ij(a,b,c,0,0,0,0,0,!1)
return new A.aE(s==null?new A.d_(a,b,c,0,0,0,0,0).$0():s,0,!1)},
hP(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
f0(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
c2(a){if(a>=10)return""+a
return"0"+a},
d0(a){if(typeof a=="number"||A.eH(a)||a==null)return J.aX(a)
if(typeof a=="string")return JSON.stringify(a)
return A.fd(a)},
hR(a,b){A.h5(a,"error",t.K)
A.h5(b,"stackTrace",t.l)
A.hQ(a,b)},
bW(a){return new A.bV(a)},
V(a,b){return new A.U(!1,null,b,a)},
eU(a,b,c){return new A.U(!0,a,b,c)},
fe(a,b){return new A.bn(null,null,!0,a,b,"Value not in range")},
P(a,b,c,d,e){return new A.bn(b,c,!0,a,d,"Invalid value")},
bo(a,b,c){if(0>a||a>c)throw A.f(A.P(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.f(A.P(b,a,c,"end",null))
return b}return c},
ff(a,b){if(a<0)throw A.f(A.P(a,0,null,b,null))
return a},
f1(a,b,c,d){return new A.c5(b,!0,a,d,"Index out of range")},
ah(a){return new A.bt(a)},
fk(a){return new A.ct(a)},
d8(a){return new A.bs(a)},
b0(a){return new A.c0(a)},
H(a,b,c){return new A.a6(a,b,c)},
hX(a,b,c){var s,r
if(A.eR(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.w([],t.s)
B.b.m($.O,a)
try{A.jD(a,s)}finally{if(0>=$.O.length)return A.c($.O,-1)
$.O.pop()}r=A.fh(b,t.W.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
en(a,b,c){var s,r
if(A.eR(a))return b+"..."+c
s=new A.J(b)
B.b.m($.O,a)
try{r=s
r.a=A.fh(r.a,a,", ")}finally{if(0>=$.O.length)return A.c($.O,-1)
$.O.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
jD(a,b){var s,r,q,p,o,n,m,l=a.gB(a),k=0,j=0
for(;;){if(!(k<80||j<3))break
if(!l.n())return
s=A.l(l.gp())
B.b.m(b,s)
k+=s.length+2;++j}if(!l.n()){if(j<=5)return
if(0>=b.length)return A.c(b,-1)
r=b.pop()
if(0>=b.length)return A.c(b,-1)
q=b.pop()}else{p=l.gp();++j
if(!l.n()){if(j<=4){B.b.m(b,A.l(p))
return}r=A.l(p)
if(0>=b.length)return A.c(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gp();++j
for(;l.n();p=o,o=n){n=l.gp();++j
if(j>100){for(;;){if(!(k>75&&j>3))break
if(0>=b.length)return A.c(b,-1)
k-=b.pop().length+2;--j}B.b.m(b,"...")
return}}q=A.l(p)
r=A.l(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
for(;;){if(!(k>80&&b.length>3))break
if(0>=b.length)return A.c(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)B.b.m(b,m)
B.b.m(b,q)
B.b.m(b,r)},
fb(a,b,c,d){var s
if(B.k===c){s=B.h.gu(a)
b=J.a4(b)
return A.eu(A.ag(A.ag($.ek(),s),b))}if(B.k===d){s=B.h.gu(a)
b=J.a4(b)
c=J.a4(c)
return A.eu(A.ag(A.ag(A.ag($.ek(),s),b),c))}s=B.h.gu(a)
b=J.a4(b)
c=J.a4(c)
d=J.a4(d)
d=A.eu(A.ag(A.ag(A.ag(A.ag($.ek(),s),b),c),d))
return d},
ix(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a5.length
if(a4>=5){if(4>=a4)return A.c(a5,4)
s=((a5.charCodeAt(4)^58)*3|a5.charCodeAt(0)^100|a5.charCodeAt(1)^97|a5.charCodeAt(2)^116|a5.charCodeAt(3)^97)>>>0
if(s===0)return A.fl(a4<a4?B.a.l(a5,0,a4):a5,5,a3).gaZ()
else if(s===32)return A.fl(B.a.l(a5,5,a4),0,a3).gaZ()}r=A.f9(8,0,!1,t.S)
B.b.q(r,0,0)
B.b.q(r,1,-1)
B.b.q(r,2,-1)
B.b.q(r,7,-1)
B.b.q(r,3,0)
B.b.q(r,4,0)
B.b.q(r,5,a4)
B.b.q(r,6,a4)
if(A.h_(a5,0,a4,0,r)>=14)B.b.q(r,7,a4)
q=r[1]
if(q>=0)if(A.h_(a5,0,q,20,r)===20)r[7]=q
p=r[2]+1
o=r[3]
n=r[4]
m=r[5]
l=r[6]
if(l<m)m=l
if(n<p)n=m
else if(n<=q)n=q+1
if(o<p)o=n
k=r[7]<0
j=a3
if(k){k=!1
if(!(p>q+3)){i=o>0
if(!(i&&o+1===n)){if(!B.a.D(a5,"\\",n))if(p>0)h=B.a.D(a5,"\\",p-1)||B.a.D(a5,"\\",p-2)
else h=!1
else h=!0
if(!h){if(!(m<a4&&m===n+2&&B.a.D(a5,"..",n)))h=m>n+2&&B.a.D(a5,"/..",m-3)
else h=!0
if(!h)if(q===4){if(B.a.D(a5,"file",0)){if(p<=0){if(!B.a.D(a5,"/",n)){g="file:///"
s=3}else{g="file://"
s=2}a5=g+B.a.l(a5,n,a4)
m+=s
l+=s
a4=a5.length
p=7
o=7
n=7}else if(n===m){++l
f=m+1
a5=B.a.K(a5,n,m,"/");++a4
m=f}j="file"}else if(B.a.D(a5,"http",0)){if(i&&o+3===n&&B.a.D(a5,"80",o+1)){l-=3
e=n-3
m-=3
a5=B.a.K(a5,o,n,"")
a4-=3
n=e}j="http"}}else if(q===5&&B.a.D(a5,"https",0)){if(i&&o+4===n&&B.a.D(a5,"443",o+1)){l-=4
e=n-4
m-=4
a5=B.a.K(a5,o,n,"")
a4-=3
n=e}j="https"}k=!h}}}}if(k)return new A.cI(a4<a5.length?B.a.l(a5,0,a4):a5,q,p,o,n,m,l,j)
if(j==null)if(q>0)j=A.j0(a5,0,q)
else{if(q===0)A.aP(a5,0,"Invalid empty scheme")
j=""}d=a3
if(p>0){c=q+3
b=c<p?A.j1(a5,c,p-1):""
a=A.iX(a5,p,o,!1)
i=o+1
if(i<n){a0=A.bm(B.a.l(a5,i,n),a3)
d=A.iZ(a0==null?A.a_(A.H("Invalid port",a5,i)):a0,j)}}else{a=a3
b=""}a1=A.iY(a5,n,m,a3,j,a!=null)
a2=m<l?A.j_(a5,m+1,l,a3):a3
return A.iS(j,b,a,d,a1,a2,l<a4?A.iW(a5,l+1,a4):a3)},
cx(a){return A.j6(2,a,B.l,!1)},
fp(a){var s=t.N
return B.b.U(A.w(a.split("&"),t.s),A.f6(s,s),new A.dd(B.l),t.G)},
cw(a,b,c){throw A.f(A.H("Illegal IPv4 address, "+a,b,c))},
it(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j="invalid character"
for(s=a.length,r=b,q=r,p=0,o=0;;){if(q>=c)n=0
else{if(!(q>=0&&q<s))return A.c(a,q)
n=a.charCodeAt(q)}m=n^48
if(m<=9){if(o!==0||q===r){o=o*10+m
if(o<=255){++q
continue}A.cw("each part must be in the range 0..255",a,r)}A.cw("parts must not have leading zeros",a,r)}if(q===r){if(q===c)break
A.cw(j,a,q)}l=p+1
k=e+p
d.$flags&2&&A.a0(d)
if(!(k<16))return A.c(d,k)
d[k]=o
if(n===46){if(l<4){++q
p=l
r=q
o=0
continue}break}if(q===c){if(l===4)return
break}A.cw(j,a,q)
p=l}A.cw("IPv4 address should contain exactly 4 parts",a,q)},
iu(a,b,c){var s
if(b===c)throw A.f(A.H("Empty IP address",a,b))
if(!(b>=0&&b<a.length))return A.c(a,b)
if(a.charCodeAt(b)===118){s=A.iv(a,b,c)
if(s!=null)throw A.f(s)
return!1}A.fo(a,b,c)
return!0},
iv(a,b,c){var s,r,q,p,o,n="Missing hex-digit in IPvFuture address",m=u.f;++b
for(s=a.length,r=b;;r=q){if(r<c){q=r+1
if(!(r>=0&&r<s))return A.c(a,r)
p=a.charCodeAt(r)
if((p^48)<=9)continue
o=p|32
if(o>=97&&o<=102)continue
if(p===46){if(q-1===b)return new A.a6(n,a,q)
r=q
break}return new A.a6("Unexpected character",a,q-1)}if(r-1===b)return new A.a6(n,a,r)
return new A.a6("Missing '.' in IPvFuture address",a,r)}if(r===c)return new A.a6("Missing address in IPvFuture address, host, cursor",null,null)
for(;;){if(!(r>=0&&r<s))return A.c(a,r)
p=a.charCodeAt(r)
if(!(p<128))return A.c(m,p)
if((m.charCodeAt(p)&16)!==0){++r
if(r<c)continue
return null}return new A.a6("Invalid IPvFuture address character",a,r)}},
fo(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1="an address must contain at most 8 parts",a2=new A.dc(a3)
if(a5-a4<2)a2.$2("address is too short",null)
s=new Uint8Array(16)
r=a3.length
if(!(a4>=0&&a4<r))return A.c(a3,a4)
q=-1
p=0
if(a3.charCodeAt(a4)===58){o=a4+1
if(!(o<r))return A.c(a3,o)
if(a3.charCodeAt(o)===58){n=a4+2
m=n
q=0
p=1}else{a2.$2("invalid start colon",a4)
n=a4
m=n}}else{n=a4
m=n}for(l=0,k=!0;;){if(n>=a5)j=0
else{if(!(n<r))return A.c(a3,n)
j=a3.charCodeAt(n)}$label0$0:{i=j^48
h=!1
if(i<=9)g=i
else{f=j|32
if(f>=97&&f<=102)g=f-87
else break $label0$0
k=h}if(n<m+4){l=l*16+g;++n
continue}a2.$2("an IPv6 part can contain a maximum of 4 hex digits",m)}if(n>m){if(j===46){if(k){if(p<=6){A.it(a3,m,a5,s,p*2)
p+=2
n=a5
break}a2.$2(a1,m)}break}o=p*2
e=B.h.a6(l,8)
if(!(o<16))return A.c(s,o)
s[o]=e;++o
if(!(o<16))return A.c(s,o)
s[o]=l&255;++p
if(j===58){if(p<8){++n
m=n
l=0
k=!0
continue}a2.$2(a1,n)}break}if(j===58){if(q<0){d=p+1;++n
q=p
p=d
m=n
continue}a2.$2("only one wildcard `::` is allowed",n)}if(q!==p-1)a2.$2("missing part",n)
break}if(n<a5)a2.$2("invalid character",n)
if(p<8){if(q<0)a2.$2("an address without a wildcard must contain exactly 8 parts",a5)
c=q+1
b=p-c
if(b>0){a=c*2
a0=16-b*2
B.t.b2(s,a0,16,s,a)
B.t.bB(s,a,a0,0)}}return s},
iS(a,b,c,d,e,f,g){return new A.bM(a,b,c,d,e,f,g)},
fE(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
aP(a,b,c){throw A.f(A.H(c,a,b))},
iZ(a,b){var s=A.fE(b)
if(a===s)return null
return a},
iX(a,b,c,d){var s,r,q,p,o,n,m,l,k
if(b===c)return""
s=a.length
if(!(b>=0&&b<s))return A.c(a,b)
if(a.charCodeAt(b)===91){r=c-1
if(!(r>=0&&r<s))return A.c(a,r)
if(a.charCodeAt(r)!==93)A.aP(a,b,"Missing end `]` to match `[` in host")
q=b+1
if(!(q<s))return A.c(a,q)
p=""
if(a.charCodeAt(q)!==118){o=A.iU(a,q,r)
if(o<r){n=o+1
p=A.fJ(a,B.a.D(a,"25",n)?o+3:n,r,"%25")}}else o=r
m=A.iu(a,q,o)
l=B.a.l(a,q,o)
return"["+(m?l.toLowerCase():l)+p+"]"}for(k=b;k<c;++k){if(!(k<s))return A.c(a,k)
if(a.charCodeAt(k)===58){o=B.a.V(a,"%",b)
o=o>=b&&o<c?o:c
if(o<c){n=o+1
p=A.fJ(a,B.a.D(a,"25",n)?o+3:n,c,"%25")}else p=""
A.fo(a,b,o)
return"["+B.a.l(a,b,o)+p+"]"}}return A.j3(a,b,c)},
iU(a,b,c){var s=B.a.V(a,"%",b)
return s>=b&&s<c?s:c},
fJ(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=d!==""?new A.J(d):null
for(s=a.length,r=b,q=r,p=!0;r<c;){if(!(r>=0&&r<s))return A.c(a,r)
o=a.charCodeAt(r)
if(o===37){n=A.eB(a,r,!0)
m=n==null
if(m&&p){r+=3
continue}if(h==null)h=new A.J("")
l=h.a+=B.a.l(a,q,r)
if(m)n=B.a.l(a,r,r+3)
else if(n==="%")A.aP(a,r,"ZoneID should not contain % anymore")
h.a=l+n
r+=3
q=r
p=!0}else if(o<127&&(u.f.charCodeAt(o)&1)!==0){if(p&&65<=o&&90>=o){if(h==null)h=new A.J("")
if(q<r){h.a+=B.a.l(a,q,r)
q=r}p=!1}++r}else{k=1
if((o&64512)===55296&&r+1<c){m=r+1
if(!(m<s))return A.c(a,m)
j=a.charCodeAt(m)
if((j&64512)===56320){o=65536+((o&1023)<<10)+(j&1023)
k=2}}i=B.a.l(a,q,r)
if(h==null){h=new A.J("")
m=h}else m=h
m.a+=i
l=A.eA(o)
m.a+=l
r+=k
q=r}}if(h==null)return B.a.l(a,b,c)
if(q<c){i=B.a.l(a,q,c)
h.a+=i}s=h.a
return s.charCodeAt(0)==0?s:s},
j3(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g=u.f
for(s=a.length,r=b,q=r,p=null,o=!0;r<c;){if(!(r>=0&&r<s))return A.c(a,r)
n=a.charCodeAt(r)
if(n===37){m=A.eB(a,r,!0)
l=m==null
if(l&&o){r+=3
continue}if(p==null)p=new A.J("")
k=B.a.l(a,q,r)
if(!o)k=k.toLowerCase()
j=p.a+=k
i=3
if(l)m=B.a.l(a,r,r+3)
else if(m==="%"){m="%25"
i=1}p.a=j+m
r+=i
q=r
o=!0}else if(n<127&&(g.charCodeAt(n)&32)!==0){if(o&&65<=n&&90>=n){if(p==null)p=new A.J("")
if(q<r){p.a+=B.a.l(a,q,r)
q=r}o=!1}++r}else if(n<=93&&(g.charCodeAt(n)&1024)!==0)A.aP(a,r,"Invalid character")
else{i=1
if((n&64512)===55296&&r+1<c){l=r+1
if(!(l<s))return A.c(a,l)
h=a.charCodeAt(l)
if((h&64512)===56320){n=65536+((n&1023)<<10)+(h&1023)
i=2}}k=B.a.l(a,q,r)
if(!o)k=k.toLowerCase()
if(p==null){p=new A.J("")
l=p}else l=p
l.a+=k
j=A.eA(n)
l.a+=j
r+=i
q=r}}if(p==null)return B.a.l(a,b,c)
if(q<c){k=B.a.l(a,q,c)
if(!o)k=k.toLowerCase()
p.a+=k}s=p.a
return s.charCodeAt(0)==0?s:s},
j0(a,b,c){var s,r,q,p
if(b===c)return""
s=a.length
if(!(b<s))return A.c(a,b)
if(!A.fG(a.charCodeAt(b)))A.aP(a,b,"Scheme not starting with alphabetic character")
for(r=b,q=!1;r<c;++r){if(!(r<s))return A.c(a,r)
p=a.charCodeAt(r)
if(!(p<128&&(u.f.charCodeAt(p)&8)!==0))A.aP(a,r,"Illegal scheme character")
if(65<=p&&p<=90)q=!0}a=B.a.l(a,b,c)
return A.iT(q?a.toLowerCase():a)},
iT(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
j1(a,b,c){return A.bN(a,b,c,16,!1,!1)},
iY(a,b,c,d,e,f){var s=e==="file",r=s||f,q=A.bN(a,b,c,128,!0,!0)
if(q.length===0){if(s)return"/"}else if(r&&!B.a.E(q,"/"))q="/"+q
return A.j2(q,e,f)},
j2(a,b,c){var s=b.length===0
if(s&&!c&&!B.a.E(a,"/")&&!B.a.E(a,"\\"))return A.j4(a,!s||c)
return A.j5(a)},
j_(a,b,c,d){return A.bN(a,b,c,256,!0,!1)},
iW(a,b,c){return A.bN(a,b,c,256,!0,!1)},
eB(a,b,c){var s,r,q,p,o,n,m=u.f,l=b+2,k=a.length
if(l>=k)return"%"
s=b+1
if(!(s>=0&&s<k))return A.c(a,s)
r=a.charCodeAt(s)
if(!(l>=0))return A.c(a,l)
q=a.charCodeAt(l)
p=A.e5(r)
o=A.e5(q)
if(p<0||o<0)return"%"
n=p*16+o
if(n<127){if(!(n>=0))return A.c(m,n)
l=(m.charCodeAt(n)&1)!==0}else l=!1
if(l)return A.ae(c&&65<=n&&90>=n?(n|32)>>>0:n)
if(r>=97||q>=97)return B.a.l(a,b,b+3).toUpperCase()
return null},
eA(a){var s,r,q,p,o,n,m,l,k="0123456789ABCDEF"
if(a<=127){s=new Uint8Array(3)
s[0]=37
r=a>>>4
if(!(r<16))return A.c(k,r)
s[1]=k.charCodeAt(r)
s[2]=k.charCodeAt(a&15)}else{if(a>2047)if(a>65535){q=240
p=4}else{q=224
p=3}else{q=192
p=2}r=3*p
s=new Uint8Array(r)
for(o=0;--p,p>=0;q=128){n=B.h.bq(a,6*p)&63|q
if(!(o<r))return A.c(s,o)
s[o]=37
m=o+1
l=n>>>4
if(!(l<16))return A.c(k,l)
if(!(m<r))return A.c(s,m)
s[m]=k.charCodeAt(l)
l=o+2
if(!(l<r))return A.c(s,l)
s[l]=k.charCodeAt(n&15)
o+=3}}return A.fi(s,0,null)},
bN(a,b,c,d,e,f){var s=A.fI(a,b,c,d,e,f)
return s==null?B.a.l(a,b,c):s},
fI(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j,i=null,h=u.f
for(s=!e,r=a.length,q=b,p=q,o=i;q<c;){if(!(q>=0&&q<r))return A.c(a,q)
n=a.charCodeAt(q)
if(n<127&&(h.charCodeAt(n)&d)!==0)++q
else{m=1
if(n===37){l=A.eB(a,q,!1)
if(l==null){q+=3
continue}if("%"===l)l="%25"
else m=3}else if(n===92&&f)l="/"
else if(s&&n<=93&&(h.charCodeAt(n)&1024)!==0){A.aP(a,q,"Invalid character")
m=i
l=m}else{if((n&64512)===55296){k=q+1
if(k<c){if(!(k<r))return A.c(a,k)
j=a.charCodeAt(k)
if((j&64512)===56320){n=65536+((n&1023)<<10)+(j&1023)
m=2}}}l=A.eA(n)}if(o==null){o=new A.J("")
k=o}else k=o
k.a=(k.a+=B.a.l(a,p,q))+l
if(typeof m!=="number")return A.kz(m)
q+=m
p=q}}if(o==null)return i
if(p<c){s=B.a.l(a,p,c)
o.a+=s}s=o.a
return s.charCodeAt(0)==0?s:s},
fH(a){if(B.a.E(a,"."))return!0
return B.a.aP(a,"/.")!==-1},
j5(a){var s,r,q,p,o,n,m
if(!A.fH(a))return a
s=A.w([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(n===".."){m=s.length
if(m!==0){if(0>=m)return A.c(s,-1)
s.pop()
if(s.length===0)B.b.m(s,"")}p=!0}else{p="."===n
if(!p)B.b.m(s,n)}}if(p)B.b.m(s,"")
return B.b.J(s,"/")},
j4(a,b){var s,r,q,p,o,n
if(!A.fH(a))return!b?A.fF(a):a
s=A.w([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n){if(s.length!==0&&B.b.gae(s)!==".."){if(0>=s.length)return A.c(s,-1)
s.pop()}else B.b.m(s,"..")
p=!0}else{p="."===n
if(!p)B.b.m(s,n.length===0&&s.length===0?"./":n)}}if(s.length===0)return"./"
if(p)B.b.m(s,"")
if(!b){if(0>=s.length)return A.c(s,0)
B.b.q(s,0,A.fF(s[0]))}return B.b.J(s,"/")},
fF(a){var s,r,q,p=u.f,o=a.length
if(o>=2&&A.fG(a.charCodeAt(0)))for(s=1;s<o;++s){r=a.charCodeAt(s)
if(r===58)return B.a.l(a,0,s)+"%3A"+B.a.N(a,s+1)
if(r<=127){if(!(r<128))return A.c(p,r)
q=(p.charCodeAt(r)&8)===0}else q=!0
if(q)break}return a},
iV(a,b){var s,r,q,p,o
for(s=a.length,r=0,q=0;q<2;++q){p=b+q
if(!(p<s))return A.c(a,p)
o=a.charCodeAt(p)
if(48<=o&&o<=57)r=r*16+o-48
else{o|=32
if(97<=o&&o<=102)r=r*16+o-87
else throw A.f(A.V("Invalid URL encoding",null))}}return r},
eC(a,b,c,d,e){var s,r,q,p,o=a.length,n=b
for(;;){if(!(n<c)){s=!0
break}if(!(n<o))return A.c(a,n)
r=a.charCodeAt(n)
q=!0
if(r<=127)if(r!==37)q=r===43
if(q){s=!1
break}++n}if(s)if(B.l===d)return B.a.l(a,b,c)
else p=new A.c_(B.a.l(a,b,c))
else{p=A.w([],t.t)
for(n=b;n<c;++n){if(!(n<o))return A.c(a,n)
r=a.charCodeAt(n)
if(r>127)throw A.f(A.V("Illegal percent encoding in URI",null))
if(r===37){if(n+3>o)throw A.f(A.V("Truncated URI",null))
B.b.m(p,A.iV(a,n+1))
n+=2}else if(r===43)B.b.m(p,32)
else B.b.m(p,r)}}t.L.a(p)
return B.dQ.a9(p)},
fG(a){var s=a|32
return 97<=s&&s<=122},
fl(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=A.w([b-1],t.t)
for(s=a.length,r=b,q=-1,p=null;r<s;++r){p=a.charCodeAt(r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
continue}throw A.f(A.H(k,a,r))}}if(q<0&&r>b)throw A.f(A.H(k,a,r))
while(p!==44){B.b.m(j,r);++r
for(o=-1;r<s;++r){if(!(r>=0))return A.c(a,r)
p=a.charCodeAt(r)
if(p===61){if(o<0)o=r}else if(p===59||p===44)break}if(o>=0)B.b.m(j,o)
else{n=B.b.gae(j)
if(p!==44||r!==n+7||!B.a.D(a,"base64",n+1))throw A.f(A.H("Expecting '='",a,r))
break}}B.b.m(j,r)
m=r+1
if((j.length&1)===1)a=B.ac.bG(a,m,s)
else{l=A.fI(a,m,s,256,!0,!1)
if(l!=null)a=B.a.K(a,m,s,l)}return new A.db(a,j,c)},
h_(a,b,c,d,e){var s,r,q,p,o,n='\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe3\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0e\x03\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\n\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\xeb\xeb\x8b\xeb\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x83\xeb\xeb\x8b\xeb\x8b\xeb\xcd\x8b\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x92\x83\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x8b\xeb\x8b\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xebD\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12D\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe8\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\x05\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x10\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\f\xec\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\xec\f\xec\f\xec\xcd\f\xec\f\f\f\f\f\f\f\f\f\xec\f\f\f\f\f\f\f\f\f\f\xec\f\xec\f\xec\f\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\r\xed\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\xed\r\xed\r\xed\xed\r\xed\r\r\r\r\r\r\r\r\r\xed\r\r\r\r\r\r\r\r\r\r\xed\r\xed\r\xed\r\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0f\xea\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe9\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\t\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x11\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xe9\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\t\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x13\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\xf5\x15\x15\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5'
for(s=a.length,r=b;r<c;++r){if(!(r<s))return A.c(a,r)
q=a.charCodeAt(r)^96
if(q>95)q=31
p=d*96+q
if(!(p<2112))return A.c(n,p)
o=n.charCodeAt(p)
d=o&31
B.b.q(e,o>>>5,r)}return d},
d_:function d_(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
aE:function aE(a,b,c){this.a=a
this.b=b
this.c=c},
dl:function dl(){},
t:function t(){},
bV:function bV(a){this.a=a},
a7:function a7(){},
U:function U(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bn:function bn(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
c5:function c5(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
bt:function bt(a){this.a=a},
ct:function ct(a){this.a=a},
bs:function bs(a){this.a=a},
c0:function c0(a){this.a=a},
cj:function cj(){},
br:function br(){},
dm:function dm(a){this.a=a},
a6:function a6(a,b,c){this.a=a
this.b=b
this.c=c},
h:function h(){},
be:function be(a,b,c){this.a=a
this.b=b
this.$ti=c},
D:function D(){},
o:function o(){},
cL:function cL(){},
J:function J(a){this.a=a},
dd:function dd(a){this.a=a},
dc:function dc(a){this.a=a},
bM:function bM(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.z=_.y=_.w=$},
db:function db(a,b,c){this.a=a
this.b=b
this.c=c},
cI:function cI(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=null},
cC:function cC(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.z=_.y=_.w=$},
d4:function d4(a){this.a=a},
eF(a){var s
if(typeof a=="function")throw A.f(A.V("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.eD,a)
s[$.bT()]=a
return s},
eD(a,b,c){t.Z.a(a)
if(A.aQ(c)>=1)return a.$1(b)
return a.$0()},
hb(a,b){var s=new A.R($.E,b.j("R<0>")),r=new A.bw(s,b.j("bw<0>"))
a.then(A.aU(new A.eg(r,b),1),A.aU(new A.eh(r),1))
return s},
eg:function eg(a,b){this.a=a
this.b=b},
eh:function eh(a){this.a=a},
cZ:function cZ(a,b,c){this.a=a
this.b=b
this.c=c},
cT:function cT(){},
cU:function cU(){},
cV:function cV(){},
cW:function cW(){},
cX:function cX(){},
b_:function b_(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.dx=_.db=_.cy=_.cx=_.CW=_.ch=_.ay=_.ax=_.at=_.as=_.Q=_.z=_.y=_.x=$},
aZ:function aZ(a){this.a=a
this.b=""},
k:function k(a,b){this.a=a
this.b=b},
hg(a,b,c){var s=new A.ej(a,b,c),r=s.$1(0.75),q=a.w.x
if(typeof r!=="number")return r.b0()
if(r<=q)return 1
s=s.$1(0.5)
if(typeof s!=="number")return s.b0()
if(s<=q)return 0.75
return 0.5},
kU(a,b,c){var s,r,q,p,o
if(!a.w.i(0,"pregnant")||a.b!=="female")return
s=b.b
if(s>0&&s<14)return
if(b.gaS()){s=b.w.y
r=A.hg(b,s,1)
q=B.d.v(s*r)
c.h(0,"c","\ud83e\udd30",B.f,"\u0415\u0434\u0438\u043d\u043e\u0435 \u043f\u043e\u0441\u043e\u0431\u0438\u0435 \u0431\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0439 (\u0440\u0430\u043d\u043d\u0438\u0435 \u0441\u0440\u043e\u043a\u0438)","\u041f\u0440\u0438 \u043f\u043e\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0435 \u043d\u0430 \u0443\u0447\u0451\u0442 \u0434\u043e 12 \u043d\u0435\u0434., \u0434\u043b\u044f \u043c\u0430\u043b\u043e\u0438\u043c\u0443\u0449\u0438\u0445. "+B.d.X(r*100)+"% \u041f\u041c \u0442\u0440\u0443\u0434\u043e\u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0433\u043e \u043d\u0430\u0441\u0435\u043b\u0435\u043d\u0438\u044f \u0440\u0435\u0433\u0438\u043e\u043d\u0430 = "+A.e(q,!1)+"/\u043c\u0435\u0441.",q,A.e(q,!1)+"/\u043c\u0435\u0441","monthly")
if(a.f<=0)A.eL(a,b,c)}p=b.e
o=Math.min(B.d.v((p>0?p:Math.max(27093,b.c/b.d))*24/730*140),955836)
c.h(0,"c","\ud83e\udd31",B.f,"\u041f\u043e\u0441\u043e\u0431\u0438\u0435 \u043f\u043e \u0431\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u0438 \u0440\u043e\u0434\u0430\u043c","100% \u0441\u0440. \u0437\u0430\u0440\u043f\u043b\u0430\u0442\u044b \u0437\u0430 140 \u0434\u043d\u0435\u0439 (\u0441\u0440. \u0434\u043d. = \u0437\u043f \xd7 24 / 730). \u041c\u0430\u043a\u0441: "+A.e(955836,!1)+".",o,A.e(o,!1)+" (\u0435\u0434\u0438\u043d\u043e\u0432\u0440.)","once")},
kR(a,b,c){if(!a.w.i(0,"newborn"))return
c.h(0,"c","\ud83c\udf81",B.f,"\u0415\u0434\u0438\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0435 \u043f\u0440\u0438 \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u0438","\u041d\u0430 \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u0440\u0435\u0431\u0451\u043d\u043a\u0430. \u0413\u043e\u0441\u0443\u0441\u043b\u0443\u0433\u0438 \u0438\u043b\u0438 \u041c\u0424\u0426.",28450.45,A.e(28450.45,!0),"once")},
kM(a,b,c){var s,r,q="once",p=a.w
if(p.i(0,"used_matcap"))return
s=p.i(0,"newborn")||p.i(0,"pregnant")
p=a.f
r=s?1:0
if(s&&p===0)c.h(0,"c","\ud83c\udfe6",B.e,"\u041c\u0430\u0442\u0435\u0440\u0438\u043d\u0441\u043a\u0438\u0439 \u043a\u0430\u043f\u0438\u0442\u0430\u043b (1-\u0439 \u0440\u0435\u0431\u0451\u043d\u043e\u043a)","\u0418\u043f\u043e\u0442\u0435\u043a\u0430, \u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0435, \u043f\u0435\u043d\u0441\u0438\u044f, \u0440\u0435\u0430\u0431\u0438\u043b\u0438\u0442\u0430\u0446\u0438\u044f.",728921.9,A.e(728921.9,!1),q)
else if(s&&p>=1)c.h(0,"c","\ud83c\udfe6",B.e,"\u041c\u0430\u0442\u0435\u0440\u0438\u043d\u0441\u043a\u0438\u0439 \u043a\u0430\u043f\u0438\u0442\u0430\u043b (2-\u0439 \u0438 \u0434\u0430\u043b\u0435\u0435)","\u041f\u043e\u043b\u043d\u0430\u044f \u0441\u0443\u043c\u043c\u0430 \u0435\u0441\u043b\u0438 \u043d\u0430 1-\u0433\u043e \u043d\u0435 \u043f\u043e\u043b\u0443\u0447\u0430\u043b\u0438, \u0438\u043d\u0430\u0447\u0435 \u0434\u043e\u043f\u043b\u0430\u0442\u0430.",963243.17,A.e(963243.17,!1),q)
else if(!s&&p+r>=2)c.h(0,"c","\ud83c\udfe6",B.e,"\u041c\u0430\u0442\u043a\u0430\u043f\u0438\u0442\u0430\u043b (2-\u0439 \u0438 \u0434\u0430\u043b\u0435\u0435)","\u0415\u0441\u043b\u0438 \u043d\u0430 1-\u0433\u043e \u043d\u0435 \u043f\u043e\u043b\u0443\u0447\u0430\u043b\u0438 \u2014 \u043f\u043e\u043b\u043d\u0430\u044f \u0441\u0443\u043c\u043c\u0430.",963243.17,A.e(963243.17,!1),q)},
jZ(a,b,c){var s,r,q,p,o
if(b.r>1.5||a.f<=0||a.w.i(0,"pregnant"))return
s=b.e
s=s>0?s:Math.max(27093,b.c/b.d)
r=a.c
q=r==="employed"||r==="matleave"||r==="ip"||r==="self"?10837.2:10669.64
p=Math.max(q,Math.min(B.d.v(s*0.4),83021.19))
r=A.e(q,!0)
o=A.e(83021.19,!0)
c.h(0,"c","\ud83c\udf7c",B.f,"\u041f\u043e\u0441\u043e\u0431\u0438\u0435 \u043f\u043e \u0443\u0445\u043e\u0434\u0443 \u0434\u043e 1,5 \u043b\u0435\u0442","40% \u0441\u0440. \u0437\u0430\u0440\u043f\u043b\u0430\u0442\u044b. \u041c\u0438\u043d "+r+", \u043c\u0430\u043a\u0441 "+o+".",p,A.e(p,(p<0?Math.ceil(p):Math.floor(p))!==p)+"/\u043c\u0435\u0441","monthly")},
lE(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=b.ax
i===$&&A.p()
if(i>0){s=B.d.aY(A.jV(a.f)*100)
r=B.aU.t(0,a.d)
c.h(0,"c","\u2696\ufe0f",B.c,"\u0410\u043b\u0438\u043c\u0435\u043d\u0442\u044b \u043d\u0435 \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u044b \u2014 \u0421\u0424\u0420 \u0443\u0447\u0442\u0451\u0442 \u0432\u043c\u0435\u043d\u0451\u043d\u043d\u044b\u0435","\u0421 01.03.2026 \u043f\u0440\u0438 \u043d\u0435\u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u043d\u044b\u0445 \u0430\u043b\u0438\u043c\u0435\u043d\u0442\u0430\u0445 \u0432 \u0434\u043e\u0445\u043e\u0434 \u0434\u043b\u044f \u0435\u0434\u0438\u043d\u043e\u0433\u043e \u043f\u043e\u0441\u043e\u0431\u0438\u044f \u0432\u043a\u043b\u044e\u0447\u0430\u0435\u0442\u0441\u044f "+s+"% \u0441\u0440\u0435\u0434\u043d\u0435\u0439 \u0437\u0430\u0440\u043f\u043b\u0430\u0442\u044b \u0440\u0435\u0433\u0438\u043e\u043d\u0430 ("+A.e(r==null?100360:r,!1)+") = "+A.e(i,!1)+"/\u043c\u0435\u0441. \u0415\u0441\u043b\u0438 \u0432\u0437\u044b\u0441\u043a\u0430\u0442\u044c \u0430\u043b\u0438\u043c\u0435\u043d\u0442\u044b \u0447\u0435\u0440\u0435\u0437 \u0441\u0443\u0434, \u0431\u0443\u0434\u0435\u0442 \u0443\u0447\u0438\u0442\u044b\u0432\u0430\u0442\u044c\u0441\u044f \u0444\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0441\u0443\u043c\u043c\u0430 \u2014 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u043c\u043e\u0436\u0435\u0442 \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c\u0441\u044f.",0,"\u0443\u0447\u0442\u0435\u043d\u043e \u0432 \u0434\u043e\u0445\u043e\u0434\u0435","benefit")}s=a.f
q=!1
if(s>=3){r=b.ch
r===$&&A.p()
p=b.w.x
if(r>=p){if(r<=p*1.1)r=(!b.gaX()||b.c>=18062)&&b.gaT()&&b.gaU()
else r=q
q=r}}if(q){i=b.w
o=B.d.v(i.z*0.5)
r=b.ch
r===$&&A.p()
c.h(0,"c","\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc66",B.c,"\u0415\u0434\u0438\u043d\u043e\u0435 \u043f\u043e\u0441\u043e\u0431\u0438\u0435 \u043c\u043d\u043e\u0433\u043e\u0434\u0435\u0442\u043d\u044b\u043c \u2014 \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u0440\u0438 \u043f\u0440\u043e\u0434\u043b\u0435\u043d\u0438\u0438","\u0414\u043e\u0445\u043e\u0434 \u043d\u0430 \u0447\u0435\u043b. ("+A.e(r,!1)+") \u0432\u044b\u0448\u0435 \u043f\u043e\u0440\u043e\u0433\u0430 "+A.e(i.x,!1)+" \u043d\u0435 \u0431\u043e\u043b\u044c\u0448\u0435 \u0447\u0435\u043c \u043d\u0430 10%. \u0415\u0441\u043b\u0438 \u043f\u043e\u0441\u043e\u0431\u0438\u0435 \u0432\u044b \u0443\u0436\u0435 \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u0442\u0435, \u043f\u0440\u0438 \u043f\u0440\u043e\u0434\u043b\u0435\u043d\u0438\u0438 \u0435\u0433\u043e \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u0442 \u0432 \u0440\u0430\u0437\u043c\u0435\u0440\u0435 50% \u041f\u041c \u0440\u0435\u0431\u0451\u043d\u043a\u0430. \u0417\u0430\u044f\u0432\u043b\u0435\u043d\u0438\u0435 \u043d\u0443\u0436\u043d\u043e \u043f\u043e\u0434\u0430\u0442\u044c \u0432 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0439 \u043c\u0435\u0441\u044f\u0446 \u0432\u044b\u043f\u043b\u0430\u0442\u044b \u0438\u043b\u0438 \u0432 \u0442\u0435\u0447\u0435\u043d\u0438\u0435 3 \u043c\u0435\u0441\u044f\u0446\u0435\u0432 \u043f\u043e\u0441\u043b\u0435, \u0438 \u0442\u0430\u043a \u043c\u043e\u0436\u043d\u043e \u0442\u043e\u043b\u044c\u043a\u043e \u043e\u0434\u0438\u043d \u0440\u0430\u0437. \u0415\u0441\u043b\u0438 \u043f\u043e\u0434\u0430\u0451\u0442\u0435 \u0432\u043f\u0435\u0440\u0432\u044b\u0435 \u2014 \u043e\u0442\u043a\u0430\u0436\u0443\u0442.",0,A.e(o,!1)+" \xd7 "+s+" \u043f\u0440\u0438 \u043f\u0440\u043e\u0434\u043b\u0435\u043d\u0438\u0438","benefit")
A.eL(a,b,c)
return}if(s<=0||!b.gaS())return
r=b.w
p=r.z
n=A.hg(b,p,s)
m=B.d.v(p*n)
l=b.at
l===$&&A.p()
k=l+i>0?" (\u0441 \u0443\u0447\u0451\u0442\u043e\u043c \u0430\u043b\u0438\u043c\u0435\u043d\u0442\u043e\u0432)":""
i=B.d.X(n*100)
p=A.e(p,!1)
l=b.ch
l===$&&A.p()
j=m*s
c.h(0,"c","\ud83d\udc76",B.f,"\u0415\u0434\u0438\u043d\u043e\u0435 \u043f\u043e\u0441\u043e\u0431\u0438\u0435 \u043d\u0430 \u0434\u0435\u0442\u0435\u0439 \u0434\u043e 17",""+i+"% \u0440\u0435\u0433\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u041f\u041c \u0440\u0435\u0431\u0451\u043d\u043a\u0430 ("+p+"). \u0412\u0430\u0448 \u0434\u043e\u0445\u043e\u0434 \u043d\u0430 \u0447\u0435\u043b."+k+": "+A.e(l,!1)+", \u043f\u043e\u0440\u043e\u0433: "+A.e(r.x,!1)+".",j,A.e(m,!1)+" \xd7 "+s+" = "+A.e(j,!1)+"/\u043c\u0435\u0441","monthly")
A.eL(a,b,c)},
eL(a,b,c){if(a.c==="caregiver"&&b.c<=0)c.h(0,"c","\ud83e\uddd3",B.c,"\u0423\u0445\u043e\u0434 \u0437\u0430\u0441\u0447\u0438\u0442\u0430\u044e\u0442 \u0442\u043e\u043b\u044c\u043a\u043e \u0437\u0430 \u0431\u043b\u0438\u0437\u043a\u043e\u0433\u043e","\u0421 21.07.2026 \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u0435 \u0434\u043e\u0445\u043e\u0434\u0430 \u0438\u0437-\u0437\u0430 \u0443\u0445\u043e\u0434\u0430 \u043f\u0440\u0438\u0437\u043d\u0430\u044e\u0442 \u0443\u0432\u0430\u0436\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u043c, \u0442\u043e\u043b\u044c\u043a\u043e \u0435\u0441\u043b\u0438 \u0432\u044b \u0443\u0445\u0430\u0436\u0438\u0432\u0430\u0435\u0442\u0435 \u0437\u0430 \u0447\u043b\u0435\u043d\u043e\u043c \u0441\u0432\u043e\u0435\u0439 \u0441\u0435\u043c\u044c\u0438: \u0441\u0443\u043f\u0440\u0443\u0433\u043e\u043c, \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u0435\u043c, \u0440\u0435\u0431\u0451\u043d\u043a\u043e\u043c, \u0431\u0440\u0430\u0442\u043e\u043c \u0438\u043b\u0438 \u0441\u0435\u0441\u0442\u0440\u043e\u0439, \u0431\u0430\u0431\u0443\u0448\u043a\u043e\u0439 \u0438\u043b\u0438 \u0434\u0435\u0434\u0443\u0448\u043a\u043e\u0439, \u0432\u043d\u0443\u043a\u043e\u043c. \u0418 \u0442\u043e\u043b\u044c\u043a\u043e \u0435\u0441\u043b\u0438 \u044d\u0442\u043e \u0438\u043d\u0432\u0430\u043b\u0438\u0434 I \u0433\u0440\u0443\u043f\u043f\u044b, \u0447\u0435\u043b\u043e\u0432\u0435\u043a \u0441\u0442\u0430\u0440\u0448\u0435 80 \u043b\u0435\u0442 \u0438\u043b\u0438 \u043f\u043e\u0436\u0438\u043b\u043e\u0439, \u043a\u043e\u0442\u043e\u0440\u043e\u043c\u0443 \u0432\u0440\u0430\u0447\u0438 \u043d\u0430\u0437\u043d\u0430\u0447\u0438\u043b\u0438 \u043f\u043e\u0441\u0442\u043e\u044f\u043d\u043d\u044b\u0439 \u0443\u0445\u043e\u0434. \u0420\u043e\u0434\u0441\u0442\u0432\u043e \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0430\u044e\u0442 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u043c\u0438. \u0423\u0445\u043e\u0434 \u0437\u0430 \u0440\u0435\u0431\u0451\u043d\u043a\u043e\u043c-\u0438\u043d\u0432\u0430\u043b\u0438\u0434\u043e\u043c \u0437\u0430\u0441\u0447\u0438\u0442\u044b\u0432\u0430\u0435\u0442\u0441\u044f, \u043a\u0430\u043a \u0438 \u0440\u0430\u043d\u044c\u0448\u0435.",0,"\u0443\u0441\u043b\u043e\u0432\u0438\u0435 \u043f\u0440\u0430\u0432\u0430","benefit")
if(B.cO.i(0,a.d))c.h(0,"c","\ud83c\udfe6",B.c,"\u0412 \u0432\u0430\u0448\u0435\u043c \u0440\u0435\u0433\u0438\u043e\u043d\u0435 \u043f\u0440\u043e\u0432\u0435\u0440\u044f\u044e\u0442 \u043f\u043e\u0441\u0442\u0443\u043f\u043b\u0435\u043d\u0438\u044f \u043d\u0430 \u0441\u0447\u0435\u0442\u0430","\u041f\u043e \u0437\u0430\u044f\u0432\u043b\u0435\u043d\u0438\u044f\u043c \u0441 1 \u043e\u043a\u0442\u044f\u0431\u0440\u044f \u043f\u043e 31 \u0434\u0435\u043a\u0430\u0431\u0440\u044f 2026 \u0433\u043e\u0434\u0430 \u0421\u043e\u0446\u0444\u043e\u043d\u0434 \u0441\u0440\u0430\u0432\u043d\u0438\u0442 \u0432\u0441\u0435 \u043f\u043e\u0441\u0442\u0443\u043f\u043b\u0435\u043d\u0438\u044f \u043d\u0430 \u0441\u0447\u0435\u0442\u0430 \u0441\u0435\u043c\u044c\u0438 \u0437\u0430 12 \u043c\u0435\u0441\u044f\u0446\u0435\u0432 \u0441 \u0435\u0451 \u0434\u043e\u0445\u043e\u0434\u043e\u043c. \u0415\u0441\u043b\u0438 \u043f\u043e\u0441\u0442\u0443\u043f\u043b\u0435\u043d\u0438\u0439 \u0432\u0434\u0432\u043e\u0435 \u0431\u043e\u043b\u044c\u0448\u0435 \u0434\u043e\u0445\u043e\u0434\u0430 \u0438\u043b\u0438 \u0435\u0449\u0451 \u0431\u043e\u043b\u044c\u0448\u0435 \u2014 \u043e\u0442\u043a\u0430\u0436\u0443\u0442. \u041d\u0435 \u0441\u0447\u0438\u0442\u0430\u044e\u0442\u0441\u044f \u043f\u0435\u0440\u0435\u0432\u043e\u0434\u044b \u043c\u0435\u0436\u0434\u0443 \u0441\u0432\u043e\u0438\u043c\u0438 \u0441\u0447\u0435\u0442\u0430\u043c\u0438 \u0438 \u0441\u0447\u0435\u0442\u0430\u043c\u0438 \u0447\u043b\u0435\u043d\u043e\u0432 \u0441\u0435\u043c\u044c\u0438, \u043a\u0440\u0435\u0434\u0438\u0442\u044b, \u0432\u043e\u0437\u0432\u0440\u0430\u0442 \u043d\u0430\u043b\u043e\u0433\u043e\u0432, \u0434\u0435\u043d\u044c\u0433\u0438 \u043e\u0442 \u043f\u0440\u043e\u0434\u0430\u0436\u0438 \u0436\u0438\u043b\u044c\u044f \u0438\u043b\u0438 \u043c\u0430\u0448\u0438\u043d\u044b (\u043f\u043e \u0434\u043e\u0433\u043e\u0432\u043e\u0440\u0443). \u041f\u0435\u0440\u0435\u0432\u043e\u0434\u044b \u043e\u0442 \u0440\u043e\u0434\u0441\u0442\u0432\u0435\u043d\u043d\u0438\u043a\u043e\u0432 \u0432\u043d\u0435 \u0441\u0435\u043c\u044c\u0438 \u0441\u0447\u0438\u0442\u0430\u044e\u0442\u0441\u044f.",0,"\u044d\u043a\u0441\u043f\u0435\u0440\u0438\u043c\u0435\u043d\u0442 \u0434\u043e 31.12.2026","benefit")},
ke(a,b,c){var s,r,q,p=a.f
if(p<2)s=p>=1&&a.w.i(0,"child_study")
else s=!0
p=b.dx
p===$&&A.p()
if(p){p=b.z
p===$&&A.p()}else p=!1
r=!0
if(p)if(s){p=b.ay
p===$&&A.p()
p=p>=b.w.x*1.5||a.w.i(0,"alimony_debt")}else p=r
else p=r
if(p)return
p=b.x
p===$&&A.p()
q=B.d.v(p*0.5384615384615384)
c.h(0,"c","\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc66",B.e,"\u0415\u0436\u0435\u0433\u043e\u0434\u043d\u0430\u044f \u0441\u0435\u043c\u0435\u0439\u043d\u0430\u044f \u0432\u044b\u043f\u043b\u0430\u0442\u0430","\u0412\u043e\u0437\u0432\u0440\u0430\u0442 7 \u0438\u0437 13 \u043f.\u043f. \u041d\u0414\u0424\u041b \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u0430\u044e\u0449\u0438\u0445 \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u0435\u0439 \u0441 2+ \u0434\u0435\u0442\u044c\u043c\u0438 \u043f\u0440\u0438 \u0434\u043e\u0445\u043e\u0434\u0435 \u043d\u0438\u0436\u0435 1,5 \u041f\u041c \u043d\u0430 \u0447\u0435\u043b. \u0414\u0435\u0439\u0441\u0442\u0432\u0443\u0435\u0442 \u0441 1 \u0438\u044e\u043d\u044f 2026 \u0433. (\u0424\u0417 \u211658-\u0424\u0417).",q,A.e(q,!1)+"/\u0433\u043e\u0434","once")},
kQ(a,b,c){if(a.f<3||!a.w.i(0,"has_mortgage"))return
c.h(0,"c","\ud83c\udfe1",B.e,"450 000 \u20bd \u043d\u0430 \u0438\u043f\u043e\u0442\u0435\u043a\u0443 (\u043c\u043d\u043e\u0433\u043e\u0434\u0435\u0442\u043d\u044b\u0435)","3-\u0439 \u0438\u043b\u0438 \u043f\u043e\u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0440\u0435\u0431\u0451\u043d\u043e\u043a, \u0440\u043e\u0436\u0434\u0451\u043d\u043d\u044b\u0439 \u0432 2019\u20132030 \u0433\u0433. \u041d\u0430 \u043f\u043e\u0433\u0430\u0448\u0435\u043d\u0438\u0435 \u0438\u043f\u043e\u0442\u0435\u043a\u0438, \u0432 \u0442\u043e\u043c \u0447\u0438\u0441\u043b\u0435 \u0440\u0435\u0444\u0438\u043d\u0430\u043d\u0441\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0439 (\u043a\u0440\u0435\u0434\u0438\u0442 \u2014 \u0434\u043e 01.07.2031). \u0412 \u0440\u044f\u0434\u0435 \u0440\u0435\u0433\u0438\u043e\u043d\u043e\u0432 \u2014 \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u0430\u044f \u0440\u0435\u0433\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u0430\u044f \u0432\u044b\u043f\u043b\u0430\u0442\u0430.",45e4,A.e(45e4,!1),"once")},
kf(a,b,c){var s=A.cn(a.r)
if(a.f<1||s==null||s>6)return
c.h(0,"c","\ud83c\udfe6",B.e,"\u0421\u0435\u043c\u0435\u0439\u043d\u0430\u044f \u0438\u043f\u043e\u0442\u0435\u043a\u0430 \u2014 \u0441\u0442\u0430\u0432\u043a\u0430 \u0434\u043e 6%","\u0421\u0435\u043c\u044c\u044f\u043c \u0441 \u0440\u0435\u0431\u0451\u043d\u043a\u043e\u043c \u0434\u043e 6 \u043b\u0435\u0442 \u2014 \u043b\u044c\u0433\u043e\u0442\u043d\u0430\u044f \u0441\u0442\u0430\u0432\u043a\u0430 \u0434\u043e 6% \u0433\u043e\u0434\u043e\u0432\u044b\u0445 \u043d\u0430 \u043f\u043e\u043a\u0443\u043f\u043a\u0443 \u0436\u0438\u043b\u044c\u044f \u0438\u043b\u0438 \u0441\u0442\u0440\u043e\u0438\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u043e \u0434\u043e\u043c\u0430. \u041b\u0438\u043c\u0438\u0442 \u043a\u0440\u0435\u0434\u0438\u0442\u0430: 12 \u043c\u043b\u043d \u20bd \u0434\u043b\u044f \u041c\u043e\u0441\u043a\u0432\u044b, \u0421\u0430\u043d\u043a\u0442-\u041f\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433\u0430 \u0438 \u0438\u0445 \u043e\u0431\u043b\u0430\u0441\u0442\u0435\u0439, 6 \u043c\u043b\u043d \u20bd \u0434\u043b\u044f \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0445 \u0440\u0435\u0433\u0438\u043e\u043d\u043e\u0432. \u042d\u0442\u043e \u043b\u044c\u0433\u043e\u0442\u0430 \u043f\u043e \u0441\u0442\u0430\u0432\u043a\u0435, \u0430 \u043d\u0435 \u0432\u044b\u043f\u043b\u0430\u0442\u0430 \u043d\u0430 \u0440\u0443\u043a\u0438 \u2014 \u0443\u0441\u043b\u043e\u0432\u0438\u044f \u0438 \u0431\u0430\u043d\u043a\u0438 \u0443\u0442\u043e\u0447\u043d\u044f\u0439\u0442\u0435 \u0432 \u0431\u0430\u043d\u043a\u0435 \u0438\u043b\u0438 \u043d\u0430 \u0414\u041e\u041c.\u0420\u0424.",0,"\u043b\u044c\u0433\u043e\u0442\u043d\u0430\u044f \u0441\u0442\u0430\u0432\u043a\u0430","benefit")},
ka(a,b,c){var s
if(!a.w.i(0,"disabled_child"))return
c.h(0,"c","\ud83e\uddd2",B.c,"\u0412\u044b\u043f\u043b\u0430\u0442\u044b \u043d\u0430 \u0440\u0435\u0431\u0451\u043d\u043a\u0430-\u0438\u043d\u0432\u0430\u043b\u0438\u0434\u0430","\u0421\u043e\u0446\u0438\u0430\u043b\u044c\u043d\u0430\u044f \u043f\u0435\u043d\u0441\u0438\u044f "+A.e(22617.67,!0)+" + \u0415\u0414\u0412 "+A.e(4397.23,!0)+" (\u043f\u0440\u0438 \u043e\u0442\u043a\u0430\u0437\u0435 \u043e\u0442 \u043d\u0430\u0431\u043e\u0440\u0430 \u0441\u043e\u0446\u0443\u0441\u043b\u0443\u0433 \u2014 \u0432\u0441\u044f \u0441\u0443\u043c\u043c\u0430 \u0434\u0435\u043d\u044c\u0433\u0430\u043c\u0438).",27014.899999999998,A.e(27014.899999999998,!0)+"/\u043c\u0435\u0441","monthly")
s=a.c
if(s!=="employed"&&s!=="ip"&&s!=="self"&&s!=="pensioner")c.h(0,"c","\ud83e\udd1d",B.c,"\u041f\u043e\u0441\u043e\u0431\u0438\u0435 \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u044e \u0440\u0435\u0431\u0451\u043d\u043a\u0430-\u0438\u043d\u0432\u0430\u043b\u0438\u0434\u0430","\u041d\u0435\u0440\u0430\u0431\u043e\u0442\u0430\u044e\u0449\u0435\u043c\u0443 \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u044e \u0438\u043b\u0438 \u043e\u043f\u0435\u043a\u0443\u043d\u0443, \u0430 \u0442\u0430\u043a\u0436\u0435 \u0440\u0430\u0431\u043e\u0442\u0430\u044e\u0449\u0435\u043c\u0443 \u043d\u0435\u043f\u043e\u043b\u043d\u044b\u0439 \u0434\u0435\u043d\u044c, \u0434\u0438\u0441\u0442\u0430\u043d\u0446\u0438\u043e\u043d\u043d\u043e \u0438\u043b\u0438 \u043d\u0430 \u0434\u043e\u043c\u0443 (\u0423\u043a\u0430\u0437 \u2116175). \u0412 \u0440\u0430\u0439\u043e\u043d\u0430\u0445 \u0441 \u043a\u043e\u044d\u0444\u0444\u0438\u0446\u0438\u0435\u043d\u0442\u043e\u043c \u2014 \u0431\u043e\u043b\u044c\u0448\u0435.",11563.2,A.e(11563.2,!0)+"/\u043c\u0435\u0441","monthly")},
lG(a,b,c){var s=a.w,r=!0
if(s.i(0,"young_family"))if(b.b<=35)if(a.e==="married")s=!(s.i(0,"need_housing")||s.i(0,"rent_home"))
else s=r
else s=r
else s=r
if(s)return
c.h(0,"h","\ud83d\udc6b",B.e,"\u041f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0430 \xab\u041c\u043e\u043b\u043e\u0434\u0430\u044f \u0441\u0435\u043c\u044c\u044f\xbb","\u0421\u043e\u0446\u0432\u044b\u043f\u043b\u0430\u0442\u0430 \u043d\u0430 \u043f\u043e\u043a\u0443\u043f\u043a\u0443/\u0441\u0442\u0440\u043e\u0438\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u043e \u0436\u0438\u043b\u044c\u044f.",0,"30\u201335% \u0441\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u0438 \u0436\u0438\u043b\u044c\u044f","benefit")},
jU(a,b,c){var s="once",r="\u041f\u0440\u0430\u0432\u043e \u043d\u0430 \u043c\u0430\u0442\u043a\u0430\u043f\u0438\u0442\u0430\u043b \u0440\u0430\u0441\u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u044f\u0435\u0442\u0441\u044f \u043d\u0430 \u0443\u0441\u044b\u043d\u043e\u0432\u043b\u0451\u043d\u043d\u044b\u0445 \u0434\u0435\u0442\u0435\u0439.",q=a.w
if(!q.i(0,"i_adopt"))return
c.h(0,"c","\ud83d\udc9b",B.f,"\u0415\u0434\u0438\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0435 \u043f\u0440\u0438 \u0443\u0441\u044b\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0438","\u0421\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u0430\u044f \u0432\u044b\u043f\u043b\u0430\u0442\u0430 \u043f\u0440\u0438 \u0443\u0441\u044b\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0438. \u041e\u0444\u043e\u0440\u043c\u043b\u044f\u0435\u0442\u0441\u044f \u0447\u0435\u0440\u0435\u0437 \u0413\u043e\u0441\u0443\u0441\u043b\u0443\u0433\u0438.",28450.45,A.e(28450.45,!0),s)
c.h(0,"c","\ud83d\udc9b",B.e,"\u041f\u043e\u0432\u044b\u0448\u0435\u043d\u043d\u043e\u0435 \u043f\u043e\u0441\u043e\u0431\u0438\u0435 \u043f\u0440\u0438 \u0443\u0441\u044b\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0438","\u0415\u0441\u043b\u0438 \u0440\u0435\u0431\u0451\u043d\u043a\u0443 7+ \u043b\u0435\u0442, \u0440\u0435\u0431\u0451\u043d\u043e\u043a-\u0438\u043d\u0432\u0430\u043b\u0438\u0434 \u0438\u043b\u0438 \u0443\u0441\u044b\u043d\u043e\u0432\u043b\u044f\u0435\u0442\u0435 \u0431\u0440\u0430\u0442\u044c\u0435\u0432/\u0441\u0435\u0441\u0442\u0451\u0440.",0,"\u0434\u043e "+A.e(217384.58,!0)+" (\u0441\u043f\u0435\u0446. \u0441\u043b\u0443\u0447\u0430\u0438)","benefit")
if(q.i(0,"used_matcap"))return
q=a.f
if(q===0)c.h(0,"c","\ud83c\udfe6",B.e,"\u041c\u0430\u0442\u0435\u0440\u0438\u043d\u0441\u043a\u0438\u0439 \u043a\u0430\u043f\u0438\u0442\u0430\u043b \u043f\u0440\u0438 \u0443\u0441\u044b\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0438 (1-\u0439)",r,728921.9,A.e(728921.9,!1),s)
else if(q+1>=2)c.h(0,"c","\ud83c\udfe6",B.e,"\u041c\u0430\u0442\u0435\u0440\u0438\u043d\u0441\u043a\u0438\u0439 \u043a\u0430\u043f\u0438\u0442\u0430\u043b \u043f\u0440\u0438 \u0443\u0441\u044b\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0438 (2-\u0439+)",r,963243.17,A.e(963243.17,!1),s)},
ej:function ej(a,b,c){this.a=a
this.b=b
this.c=c},
y:function y(a,b){this.a=a
this.b=b},
i:function i(a,b){this.a=a
this.b=b},
kX(a){var s,r,q=B.aY.t(0,a)
if(q==null)q=a
for(s=0;s<92;++s){r=B.n[s]
if(r.a===q)return r}return B.b.gab(B.n)},
jV(a){var s
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
er(a,b,c,d,e,f,g){return new A.X(b,g,e,c,d,f,a)},
k6(a,b){var s=$.hA(),r=A.Z(s),q=r.j("Q<1>"),p=A.f8(new A.Q(s,r.j("C(1)").a(new A.e0(a,b)),q),q.j("h.E"))
B.b.b3(p,new A.e1())
return p.length===0?null:B.b.gab(p)},
c4:function c4(a,b){this.a=a
this.b=b},
X:function X(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
e0:function e0(a,b){this.a=a
this.b=b},
e1:function e1(){},
a5:function a5(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=e
_.r=f
_.w=g},
cY:function cY(a,b){this.a=a
this.b=b},
aA:function aA(a,b){this.a=a
this.b=b},
x:function x(a,b){this.a=a
this.d=b},
bu:function bu(a,b,c,d,e,f,g,h,i,j){var _=this
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
e(a,b){var s,r,q
if(a>=1e6&&!b)return B.d.Y(a/1e6,1)+" \u043c\u043b\u043d \u20bd"
if(!b)s=(a<0?Math.ceil(a):Math.floor(a))!==a
else s=!0
r=B.d.Y(a,s?2:0).split(".")
q=A.lp(B.b.gab(r),A.es("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!1),t.A.a(t.bj.a(new A.e4())),null)
if(r.length===1)return q+" \u20bd"
return q+"."+B.b.gae(r)+" \u20bd"},
e4:function e4(){},
kK(){var s,r,q,p,o,n,m,l,k="Attempting to rewrap a JS function.",j=t.U,i=A.w([B.x],j)
for(s=0;s<9;++s){r=B.aS[s]
i.push(new A.S(r.a,r.b))}A.dQ("employment",i)
i=A.w([],j)
for(s=0;s<92;++s){q=B.n[s]
i.push(new A.S(q.a,q.b))}A.dQ("region",i)
A.jF()
A.dQ("marital",B.aJ)
j=A.w([],j)
for(i=t.bU.a(new A.ea()),p=B.b.gB(B.aK),i=new A.an(p,i,t.e);i.n();){o=p.gp()
j.push(new A.S(o.a,o.b))}A.dQ("youngestChildAge",j)
A.cN("childChecks",B.aP)
A.cN("familyChecks",B.aQ)
A.cN("housingChecks",B.aN)
A.cN("taxChecks",B.aR)
A.cN("specialChecks",B.aL)
for(j=A.eD,i=v.G,s=0;s<9;++s){n=B.aM[s]
m=A.z(A.a(i.document).getElementById(n))
p=m==null
if(!p){o=new A.eb()
if(typeof o=="function")A.a_(A.V(k,null))
l=function(a,b){return function(c){return a(b,c,arguments.length)}}(j,o)
l[$.bT()]=o
m.addEventListener("input",l)}if(!p){p=new A.ec()
if(typeof p=="function")A.a_(A.V(k,null))
l=function(a,b){return function(c){return a(b,c,arguments.length)}}(j,p)
l[$.bT()]=p
m.addEventListener("change",l)}}j=A.z(A.a(i.document).getElementById("shareBtn"))
if(j!=null)j.addEventListener("click",A.eF(new A.ed()))
j=A.z(A.a(i.document).getElementById("shareCopy"))
if(j!=null)j.addEventListener("click",A.eF(new A.ee()))
A.jI()
A.dT()},
h1(){var s=A.w([],t.s),r=$.fV
if(r>0)s.push(A.fZ(r)+" \u0432 \u043c\u0435\u0441\u044f\u0446")
r=$.fW
if(r>0)s.push(A.fZ(r)+" \u0435\u0434\u0438\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e")
return"\u041a\u0430\u043b\u044c\u043a\u0443\u043b\u044f\u0442\u043e\u0440 \u0432\u044b\u043f\u043b\u0430\u0442 \u043f\u043e\u043a\u0430\u0437\u0430\u043b: \u043d\u0430\u0448\u0435\u0439 \u0441\u0435\u043c\u044c\u0435 \u043f\u043e\u043b\u043e\u0436\u0435\u043d\u043e "+B.b.J(s," \u0438 \u0435\u0449\u0451 ")+". \u041f\u043e\u0441\u0447\u0438\u0442\u0430\u0439 \u0441\u0432\u043e\u044e \u0441\u0435\u043c\u044c\u044e, \u044d\u0442\u043e \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u043e \u0438 \u0431\u0435\u0437 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438:"},
fZ(a){var s,r,q
if(a>=1e6){s=B.d.aY(a/1e5)/10
if(s===(s<0?Math.ceil(s):Math.floor(s)))r=B.d.Y(s,0)
else{q=B.d.Y(s,1)
r=A.he(q,".",",")}return r+" \u043c\u043b\u043d \u20bd"}return A.e(B.d.v(a),!1)},
jM(){var s,r="https://gosvyplaty.ru/?from=share",q=A.h1(),p=v.G,o=A.a(A.a(p.window).navigator)
if("share" in o){A.hb(A.a(o.share({title:"\u041a\u0430\u043b\u044c\u043a\u0443\u043b\u044f\u0442\u043e\u0440 \u0432\u044b\u043f\u043b\u0430\u0442",text:q,url:"https://gosvyplaty.ru/?from=share"})),t.X).ai(new A.dY(),new A.dZ(),t.P)
return}s=new A.e_()
s.$2("shareTg","https://t.me/share/url?url="+A.l(A.cx(r))+"&text="+A.l(A.cx(q)))
s.$2("shareVk","https://vk.com/share.php?url="+A.l(A.cx(r))+"&title="+A.l(A.cx(q)))
s.$2("shareWa","https://wa.me/?text="+A.l(A.cx(q+" https://gosvyplaty.ru/?from=share")))
p=A.z(A.a(p.document).getElementById("shareAlt"))
if(p!=null)A.dK(p.toggleAttribute("hidden",!1))},
jf(){var s=v.G,r=A.z(A.a(s.document).getElementById("shareCopy"))
A.hb(A.a(A.a(A.a(A.a(s.window).navigator).clipboard).writeText(A.h1()+" https://gosvyplaty.ru/?from=share")),t.X).ai(new A.dO(r),new A.dP(r),t.u)},
jI(){var s,r,q,p,o,n,m,l,k=v.G,j=A.z(A.a(k.document).getElementById("eventBanner"))
if(j==null)return
s=A.dM(A.a(A.a(k.window).localStorage).getItem("dismissed_events"))
r=t.bw
q=A.i4(new A.Q(A.w((s==null?"":s).split(","),t.s),t.au.a(new A.dV()),r),r.j("h.E"))
p=A.k6(new A.aE(Date.now(),0,!1),q)
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
l=A.ji(p.f)
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
n.addEventListener("click",A.eF(new A.dW(q,p,o)))
A.a(o.appendChild(n))
A.a(j.appendChild(o))},
ji(a){var s=null
switch(a.a){case 0:s="/post/aug_family_cashback"
break
case 1:s="/instrukcii/"
break
case 2:break}return s},
jF(){var s,r,q,p,o=A.iw().gaW().t(0,"region")
if(o==null)o=""
s=v.G
r=A.z(A.a(s.document).body)
q=r==null?null:A.dM(r.getAttribute("data-region"))
if(q==null)q=""
p=o.length!==0?o:q
if(p.length===0||!B.b.bu(B.n,new A.dS(p)))return
s=A.z(A.a(s.document).getElementById("region"))
if(s!=null)s.value=p},
dQ(a,b){var s,r,q,p,o=v.G,n=A.z(A.a(o.document).getElementById(a))
if(n==null)return
for(s=b.length,r=0;r<b.length;b.length===s||(0,A.ei)(b),++r){q=b[r]
p=A.a(A.a(o.document).createElement("option"))
p.value=q.a
p.text=q.b
A.a(n.appendChild(p))}},
cN(a,b){var s,r,q,p,o,n,m,l=v.G,k=A.z(A.a(l.document).getElementById(a))
if(k==null)return
for(s=b.length,r=A.eD,q=0;q<s;++q){p=b[q]
o=A.a(A.a(l.document).createElement("div"))
o.className="chip"
o.textContent=p.b
n=new A.dN(p,o)
if(typeof n=="function")A.a_(A.V("Attempting to rewrap a JS function.",null))
m=function(c,d){return function(e){return c(d,e,arguments.length)}}(r,n)
m[$.bT()]=n
o.addEventListener("click",m)
A.a(k.appendChild(o))}},
dR(a){var s=A.z(A.a(v.G.document).getElementById(a))
s=s==null?null:A.a9(s.value)
return s==null?"":s},
cP(a){var s=A.z(A.a(v.G.document).getElementById(a))
s=s==null?null:A.a9(s.value)
return s==null?"":s},
dT(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2="\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0444\u043e\u0440\u043c\u0443",b3=A.bm(A.dR("children"),null)
if(b3==null)b3=0
s=v.G
r=A.z(A.a(s.document).getElementById("youngestWrap"))
q=b3>0
if(q){if(r!=null)A.a(r.classList).remove("hidden")}else if(r!=null)A.a(r.classList).add("hidden")
p=A.cP("region")
o=A.dR("familySize")
n=A.cP("youngestChildAge")
m=A.dR("age")
l=A.cP("gender")
k=A.cP("employment")
j=p.length===0?"regular":p
i=A.cP("marital")
if(q)q=n.length===0?"3":n
else q="99"
h=A.i3($.eE,t.N)
g=A.dR("income")
f=new A.bu(m,l,k,j,i,b3,q,h,g,o.length===0?"1":o)
e=$.hy().bw(f)
q=e.a
m=q.length===0
d=!m
l=$.fV=e.b
k=$.fW=e.c
j=l>0
c=j||k>0
i=A.z(A.a(s.document).getElementById("shareBox"))
if(i!=null)A.dK(i.toggleAttribute("hidden",!c))
if(!c){i=A.z(A.a(s.document).getElementById("shareAlt"))
if(i!=null)A.dK(i.toggleAttribute("hidden",!0))}b=A.z(A.a(s.document).getElementById("shareCopy"))
if(b!=null)b.textContent="\u0421\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c"
a=A.z(A.a(s.document).getElementById("resultPanel"))
if(a!=null){a.textContent=""
a0=A.a(A.a(s.document).createElement("div"))
a0.className="cap"
i=d?"\u0415\u0436\u0435\u043c\u0435\u0441\u044f\u0447\u043d\u043e \u0432\u0430\u0448\u0435\u0439 \u0441\u0435\u043c\u044c\u0435 \u043f\u043e\u043b\u043e\u0436\u0435\u043d\u043e":b2
a0.textContent=i
A.a(a.appendChild(a0))
a0=A.a(A.a(s.document).createElement("div"))
a0.className="sum"
i=j?A.e(B.d.v(l),!1):"\u2014"
a0.textContent=i
A.a(a.appendChild(a0))
if(k>0){a0=A.a(A.a(s.document).createElement("div"))
a0.className="once"
a0.textContent="\u0438 \u0435\u0449\u0451 "+A.e(B.d.v(k),!1)+" \u0435\u0434\u0438\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e"
A.a(a.appendChild(a0))}else if(m){a0=A.a(A.a(s.document).createElement("div"))
a0.className="once"
a0.textContent="\u0421\u0443\u043c\u043c\u044b \u043f\u043e\u044f\u0432\u044f\u0442\u0441\u044f \u0437\u0434\u0435\u0441\u044c \u043f\u043e \u043c\u0435\u0440\u0435 \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"
A.a(a.appendChild(a0))}}a1=A.z(A.a(s.document).getElementById("stickyCount"))
a2=A.z(A.a(s.document).getElementById("stickySum"))
if(a1!=null&&a2!=null){i=d?"\u041d\u0430\u0439\u0434\u0435\u043d\u043e \u0432\u044b\u043f\u043b\u0430\u0442: "+q.length:b2
a1.textContent=i
if(j)l=A.e(B.d.v(l),!1)+"/\u043c\u0435\u0441"
else l=k>0?A.e(B.d.v(k),!1):"\u2014"
a2.textContent=l}a3=A.z(A.a(s.document).getElementById("list"))
if(a3==null)return
a3.textContent=""
if(m){a0=A.a(A.a(s.document).createElement("div"))
a0.className="muted"
a0.textContent="\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0444\u043e\u0440\u043c\u0443 \u2014 \u0437\u0434\u0435\u0441\u044c \u043f\u043e\u044f\u0432\u044f\u0442\u0441\u044f \u043f\u043e\u043b\u043e\u0436\u0435\u043d\u043d\u044b\u0435 \u0432\u044b\u043f\u043b\u0430\u0442\u044b."
A.a(a3.appendChild(a0))
return}for(m=B.aW.gaJ(),l=m.$ti,m=new A.as(m.a(),l.j("as<1>")),k=A.Z(q),j=k.j("C(1)"),k=k.j("Q<1>"),i=k.j("h.E"),l=l.c;m.n();){h=m.b
if(h==null)h=l.a(h)
a4=A.f8(new A.Q(q,j.a(new A.dU(h)),k),i)
if(a4.length===0)continue
a0=A.a(A.a(s.document).createElement("div"))
a0.className="cat"
h=h.b
g=A.es("[\\u{1F000}-\\u{1FAFF}\\u{2600}-\\u{27BF}\\u{2190}-\\u{21FF}\\u{2B00}-\\u{2BFF}\ufe0f\u200d]",!0)
a0.textContent=B.a.aj(A.he(h,g,""))
A.a(a3.appendChild(a0))
for(h=a4.length,a5=0;a5<a4.length;a4.length===h||(0,A.ei)(a4),++a5){a6=a4[a5]
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
A.a(a0.appendChild(a7))}b0=A.hF(a6,f)
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
ea:function ea(){},
eb:function eb(){},
ec:function ec(){},
ed:function ed(){},
ee:function ee(){},
dY:function dY(){},
dZ:function dZ(){},
e_:function e_(){},
dO:function dO(a){this.a=a},
dP:function dP(a){this.a=a},
dV:function dV(){},
dW:function dW(a,b,c){this.a=a
this.b=b
this.c=c},
dS:function dS(a){this.a=a},
dN:function dN(a,b){this.a=a
this.b=b},
dU:function dU(a){this.a=a},
kS(a,b,c){var s,r,q,p=b.w
if(!p.e)return
s=B.aV.t(0,p.a)
if(s==null)s=0.3
r=b.c
q=B.d.v((r>0?r:28395.89)*s)
c.h(0,"r","\ud83c\udf28\ufe0f",B.c,"\u0420\u0430\u0439\u043e\u043d\u043d\u044b\u0439 \u043a\u043e\u044d\u0444\u0444\u0438\u0446\u0438\u0435\u043d\u0442","\u041a \u0437\u0430\u0440\u043f\u043b\u0430\u0442\u0435 \u0438 \u043f\u0435\u043d\u0441\u0438\u0438 +"+B.d.X(s*100)+"% (\u043c\u0438\u043d.) \u0434\u043e 100% \u2014 \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043e\u0442 \u0441\u0443\u0431\u044a\u0435\u043a\u0442\u0430 \u0420\u0424.",q,"\u043e\u0442 +"+A.e(q,!1)+"/\u043c\u0435\u0441","monthly")
c.h(0,"r","\u2708\ufe0f",B.c,"\u041a\u043e\u043c\u043f\u0435\u043d\u0441\u0430\u0446\u0438\u044f \u043f\u0440\u043e\u0435\u0437\u0434\u0430 \u0432 \u043e\u0442\u043f\u0443\u0441\u043a","\u0420\u0430\u0437 \u0432 2 \u0433\u043e\u0434\u0430 \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u043d\u0438\u043a\u043e\u0432 \u041a\u0440\u0430\u0439\u043d\u0435\u0433\u043e \u0421\u0435\u0432\u0435\u0440\u0430.",0,"\u0440\u0430\u0437 \u0432 2 \u0433\u043e\u0434\u0430","benefit")
c.h(0,"r","\ud83c\udfd6\ufe0f",B.c,"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u043e\u0442\u043f\u0443\u0441\u043a (\u0421\u0435\u0432\u0435\u0440)","16\u201324 \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0445 \u0434\u043d\u044f \u043a \u0435\u0436\u0435\u0433\u043e\u0434\u043d\u043e\u043c\u0443 \u043e\u0442\u043f\u0443\u0441\u043a\u0443.",0,"16\u201324 \u0434\u043d\u044f","benefit")},
k0(a,b,c){if(!a.w.i(0,"i_chern"))return
c.h(0,"s","\u2622\ufe0f",B.j,"\u0415\u0414\u0412 \u043b\u0438\u043a\u0432\u0438\u0434\u0430\u0442\u043e\u0440\u0430 \u0427\u0410\u042d\u0421","\u0415\u0414\u0412 \u0438 \u043b\u044c\u0433\u043e\u0442\u044b.",2590,A.e(2590,!1)+"/\u043c\u0435\u0441","monthly")},
l6(a,b,c){if(!a.w.i(0,"i_repr"))return
c.h(0,"s","\ud83d\udcdc",B.j,"\u0412\u044b\u043f\u043b\u0430\u0442\u044b \u0440\u0435\u0430\u0431\u0438\u043b\u0438\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u043c","\u0415\u0414\u0412, \u043b\u044c\u0433\u043e\u0442\u044b \u043f\u043e \u0416\u041a\u0425, \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u0443 \u0438 \u043c\u0435\u0434\u0438\u0446\u0438\u043d\u0435.",0,"\u0415\u0414\u0412 + \u043b\u044c\u0433\u043e\u0442\u044b","benefit")},
kP(a,b,c){var s,r,q="monthly",p=b.w
if(!p.d)return
if(a.f>0){s=b.as
s===$&&A.p()
s=s&&p.as!=null}else s=!1
if(s){s=p.as
s.toString
c.h(0,"r","\ud83c\udfd9\ufe0f",B.j,"\u041c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u0434\u043e\u043f\u043b\u0430\u0442\u0430 \u043d\u0430 \u0434\u0435\u0442\u0435\u0439","\u0420\u0435\u0433\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u0430\u044f \u043d\u0430\u0434\u0431\u0430\u0432\u043a\u0430 \u0441\u0432\u0435\u0440\u0445 \u0444\u0435\u0434\u0435\u0440\u0430\u043b\u044c\u043d\u044b\u0445 \u0432\u044b\u043f\u043b\u0430\u0442.",s,"~"+A.e(s,!1)+"/\u043c\u0435\u0441",q)}s=!1
if(a.d==="moscow")if(a.w.i(0,"i_pen")||a.c==="pensioner"){r=p.ax
if(r!=null){s=b.y
s===$&&A.p()
r=s<r
s=r}}if(s){s=p.ax
s.toString
r=b.y
r===$&&A.p()
c.h(0,"r","\ud83c\udfd9\ufe0f",B.j,"\u0414\u043e\u043f\u043b\u0430\u0442\u0430 \u043a \u043f\u0435\u043d\u0441\u0438\u0438 \u0434\u043e \u0433\u043e\u0440\u043e\u0434\u0441\u043a\u043e\u0433\u043e \u041f\u041c (\u041c\u043e\u0441\u043a\u0432\u0430)","\u041f\u0435\u043d\u0441\u0438\u044f \u0434\u043e\u0432\u043e\u0434\u0438\u0442\u0441\u044f \u0434\u043e \u0433\u043e\u0440\u043e\u0434\u0441\u043a\u043e\u0433\u043e \u043f\u0440\u043e\u0436\u0438\u0442\u043e\u0447\u043d\u043e\u0433\u043e \u043c\u0438\u043d\u0438\u043c\u0443\u043c\u0430 \u043f\u0435\u043d\u0441\u0438\u043e\u043d\u0435\u0440\u0430.",B.d.bx(s-r,0,1/0),"\u0434\u043e "+A.e(s,!1)+"/\u043c\u0435\u0441",q)}if((a.c==="student"||a.w.i(0,"i_stu"))&&p.at!=null){p=p.at
p.toString
c.h(0,"r","\ud83c\udfd9\ufe0f",B.j,"\u041c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u0441\u0442\u0438\u043f\u0435\u043d\u0434\u0438\u044f","\u0420\u0435\u0433\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u0430\u044f \u043d\u0430\u0434\u0431\u0430\u0432\u043a\u0430 \u043a \u0444\u0435\u0434\u0435\u0440\u0430\u043b\u044c\u043d\u043e\u0439 \u0441\u0442\u0438\u043f\u0435\u043d\u0434\u0438\u0438.",p,A.e(p,!1)+"/\u043c\u0435\u0441",q)}},
k7(a,b,c){if(!b.w.f&&!a.w.i(0,"i_dfo"))return
c.h(0,"r","\ud83c\udf0f",B.c,"\u0414\u0430\u043b\u044c\u043d\u0435\u0432\u043e\u0441\u0442\u043e\u0447\u043d\u044b\u0439 \u0433\u0435\u043a\u0442\u0430\u0440","\u041f\u0440\u0430\u0432\u043e \u043d\u0430 \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u044b\u0439 \u0437\u0435\u043c\u0435\u043b\u044c\u043d\u044b\u0439 \u0443\u0447\u0430\u0441\u0442\u043e\u043a \u0434\u043e 1 \u0433\u0430.",0,"1 \u0433\u0430 \u0437\u0435\u043c\u043b\u0438","benefit")},
kY(a,b,c){var s,r,q
if(b.w.d)return
s=a.f>0||a.w.i(0,"pregnant")
r=a.c==="student"||a.w.i(0,"i_stu")
if(!s&&!r)return
q=A.w([],t.s)
if(s)B.b.m(q,"\u0441\u0435\u043c\u044c\u044f\u043c \u0441 \u0434\u0435\u0442\u044c\u043c\u0438")
if(r)B.b.m(q,"\u0441\u0442\u0443\u0434\u0435\u043d\u0442\u0430\u043c")
c.h(0,"r","\ud83d\uddfa\ufe0f",B.c,"\u0420\u0435\u0433\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u0434\u043e\u043f\u043b\u0430\u0442\u044b","\u0412 \u0432\u0430\u0448\u0435\u043c \u0441\u0443\u0431\u044a\u0435\u043a\u0442\u0435 \u0420\u0424 \u043c\u043e\u0433\u0443\u0442 \u0434\u0435\u0439\u0441\u0442\u0432\u043e\u0432\u0430\u0442\u044c \u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0435 \u043c\u0435\u0440\u044b \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0438 "+B.b.J(q," \u0438 ")+" (\u0434\u043e\u043f\u043b\u0430\u0442\u044b \u043d\u0430 \u0434\u0435\u0442\u0435\u0439 \u0438 \u0448\u043a\u043e\u043b\u044c\u043d\u0438\u043a\u043e\u0432, \u0440\u0435\u0433\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u0441\u0442\u0438\u043f\u0435\u043d\u0434\u0438\u0430\u043b\u044c\u043d\u044b\u0435 \u043d\u0430\u0434\u0431\u0430\u0432\u043a\u0438, \u043b\u044c\u0433\u043e\u0442\u043d\u044b\u0439 \u043f\u0440\u043e\u0435\u0437\u0434). \u0420\u0430\u0437\u043c\u0435\u0440 \u0438 \u0443\u0441\u043b\u043e\u0432\u0438\u044f \u0437\u0430\u0432\u0438\u0441\u044f\u0442 \u043e\u0442 \u0440\u0435\u0433\u0438\u043e\u043d\u0430 \u2014 \u0443\u0442\u043e\u0447\u043d\u0438\u0442\u0435 \u0432 \u0441\u043e\u0446\u0437\u0430\u0449\u0438\u0442\u0435, \u041c\u0424\u0426 \u0438\u043b\u0438 \u043d\u0430 \u043f\u043e\u0440\u0442\u0430\u043b\u0435 \u0413\u043e\u0441\u0443\u0441\u043b\u0443\u0433.",0,"\u0443\u0442\u043e\u0447\u043d\u044f\u0439\u0442\u0435 \u0432 \u0440\u0435\u0433\u0438\u043e\u043d\u0435","benefit")},
kZ(a,b,c){var s,r=b.w,q=r.ch
if(q==null)return
s=r.CW
if(a.f<s)return
$label0$0:{if(1===s){r="1-\u0433\u043e"
break $label0$0}if(2===s){r="2-\u0433\u043e"
break $label0$0}if(4===s){r="4-\u0433\u043e"
break $label0$0}if(5===s){r="5-\u0433\u043e"
break $label0$0}r="3-\u0433\u043e"
break $label0$0}c.h(0,"r","\ud83c\udfe6",B.f,"\u0420\u0435\u0433\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0439 \u043c\u0430\u0442\u0435\u0440\u0438\u043d\u0441\u043a\u0438\u0439 \u043a\u0430\u043f\u0438\u0442\u0430\u043b","\u0415\u0434\u0438\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u0430\u044f \u0432\u044b\u043f\u043b\u0430\u0442\u0430 \u043f\u0440\u0438 \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u0438 "+r+" \u0438 \u043f\u043e\u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0445 \u0434\u0435\u0442\u0435\u0439. \u0412 \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0440\u0435\u0433\u0438\u043e\u043d\u0430\u0445 \u0435\u0441\u0442\u044c \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f \u043f\u043e \u0432\u043e\u0437\u0440\u0430\u0441\u0442\u0443 \u0438\u043b\u0438 \u0434\u043e\u0445\u043e\u0434\u0443 \u2014 \u0443\u0442\u043e\u0447\u043d\u044f\u0439\u0442\u0435 \u0432 \u041c\u0424\u0426.",q,A.e(q,!1),"once")},
ls(a,b,c){var s
if(!(a.c==="student"||a.w.i(0,"i_stu")))return
c.h(0,"w","\ud83c\udf93",B.f,"\u0421\u043e\u0446\u0438\u0430\u043b\u044c\u043d\u0430\u044f \u0441\u0442\u0438\u043f\u0435\u043d\u0434\u0438\u044f","\u0414\u043b\u044f \u043d\u0443\u0436\u0434\u0430\u044e\u0449\u0438\u0445\u0441\u044f \u0441\u0442\u0443\u0434\u0435\u043d\u0442\u043e\u0432 \u043e\u0447\u043d\u043e\u0439 \u0444\u043e\u0440\u043c\u044b (\u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0430\u0435\u0442\u0441\u044f \u0441\u043f\u0440\u0430\u0432\u043a\u043e\u0439). \u041c\u0438\u043d. \u043d\u043e\u0440\u043c\u0430\u0442\u0438\u0432 \u0434\u043b\u044f \u0432\u0443\u0437\u043e\u0432 \u0441 01.09.2025.",3340,A.e(3340,!1)+"/\u043c\u0435\u0441","monthly")
s=b.Q
s===$&&A.p()
if(s)c.h(0,"w","\ud83d\udcb0",B.f,"\u0413\u043e\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043d\u043d\u0430\u044f \u0430\u043a\u0430\u0434\u0435\u043c\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0441\u0442\u0438\u043f\u0435\u043d\u0434\u0438\u044f","\u0411\u0430\u0437\u043e\u0432\u0430\u044f \u0430\u043a\u0430\u0434\u0435\u043c\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0441\u0442\u0438\u043f\u0435\u043d\u0434\u0438\u044f \u0434\u043b\u044f \u043e\u0447\u043d\u0438\u043a\u043e\u0432 (\u043c\u0438\u043d. \u043d\u043e\u0440\u043c\u0430\u0442\u0438\u0432 \u0434\u043b\u044f \u0432\u0443\u0437\u043e\u0432).",2224,A.e(2224,!1)+"/\u043c\u0435\u0441","monthly")
c.h(0,"w","\ud83d\ude8c",B.c,"\u041b\u044c\u0433\u043e\u0442\u043d\u044b\u0439 \u043f\u0440\u043e\u0435\u0437\u0434\u043d\u043e\u0439 (\u0441\u0442\u0443\u0434\u0435\u043d\u0442)","\u0421\u043a\u0438\u0434\u043a\u0430 50% \u043d\u0430 \u0433\u043e\u0440\u043e\u0434\u0441\u043a\u043e\u0439 \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442 \u0432\u043e \u043c\u043d\u043e\u0433\u0438\u0445 \u0440\u0435\u0433\u0438\u043e\u043d\u0430\u0445.",0,"\u0441\u043a\u0438\u0434\u043a\u0430 50%","benefit")
if(a.w.i(0,"paid_edu"))c.h(0,"t","\ud83c\udf93",B.e,"\u0412\u044b\u0447\u0435\u0442 \u0437\u0430 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435 (\u0441\u0430\u043c \u0441\u0442\u0443\u0434\u0435\u043d\u0442)","13% \u043e\u0442 \u043e\u043f\u043b\u0430\u0442\u044b \u0437\u0430 \u0441\u0435\u0431\u044f, \u0434\u043e 150 000 \u20bd/\u0433\u043e\u0434.",19500,"\u0434\u043e "+A.e(19500,!1)+"/\u0433\u043e\u0434","once")},
lD(a,b,c){var s,r
if(a.c!=="unemployed_reg")return
s=b.e
s=s>0?s:Math.max(27093,b.c/b.d)
r=b.f>0?Math.min(B.d.v(s*0.75),15886):1863
c.h(0,"w","\ud83d\udcbc",B.c,"\u041f\u043e\u0441\u043e\u0431\u0438\u0435 \u043f\u043e \u0431\u0435\u0437\u0440\u0430\u0431\u043e\u0442\u0438\u0446\u0435","\u041f\u0435\u0440\u0432\u044b\u0435 3 \u043c\u0435\u0441: 75% \u0437\u0430\u0440\u043f\u043b\u0430\u0442\u044b, \u0434\u0430\u043b\u0435\u0435 60%, \u0434\u0430\u043b\u0435\u0435 45%. \u041c\u0438\u043d "+A.e(1863,!1)+", \u043c\u0430\u043a\u0441 "+A.e(15886,!1)+".",r,A.e(r,!1)+"/\u043c\u0435\u0441","monthly")},
kH(a,b,c){var s,r
if(!a.w.i(0,"i_laid"))return
s=a.c
if(!(s==="unemployed_reg"||s==="unemployed"))return
r=b.e
r=r>0?r:Math.max(27093,b.c/b.d)
c.h(0,"w","\ud83d\udccb",B.c,"\u0412\u044b\u0445\u043e\u0434\u043d\u043e\u0435 \u043f\u043e\u0441\u043e\u0431\u0438\u0435 \u043f\u0440\u0438 \u0441\u043e\u043a\u0440\u0430\u0449\u0435\u043d\u0438\u0438","1 \u0441\u0440.\u043c\u0435\u0441. \u0437\u0430\u0440\u043f\u043b\u0430\u0442\u0430 \u0441\u0440\u0430\u0437\u0443 + \u0435\u0449\u0451 \u0434\u043e 2 \u043c\u0435\u0441. \u043f\u0440\u0438 \u043d\u0435\u0442\u0440\u0443\u0434\u043e\u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0435.",r,"\u2248 "+A.e(r,!1)+" \xd7 1\u20133 \u043c\u0435\u0441.","once")},
ky(a,b,c){var s,r,q,p,o
if(!a.w.i(0,"high_utility")){s=b.Q
s===$&&A.p()
s=!s}else s=!1
if(s)return
r=A.cn("")
if(r==null)r=0
s=b.c
q=s*0.22
p=A.fr()
o=A.fr()
if(r>0){p.sT(Math.max(0,B.d.v(r-q)))
o.sT("\u0420\u0430\u0441\u0445\u043e\u0434\u044b \u0416\u041a\u0425 "+A.e(r,!1)+" \u2212 22% \u0434\u043e\u0445\u043e\u0434\u0430 "+A.e(B.d.v(q),!1)+" = "+A.e(p.P(),!1)+".")}else{p.sT(Math.max(300,B.d.v(s*0.04)))
o.sT("\u041e\u0440\u0438\u0435\u043d\u0442\u0438\u0440: \u0435\u0441\u043b\u0438 \u0416\u041a\u0425 > 22% \u0434\u043e\u0445\u043e\u0434\u0430 ("+A.e(B.d.v(q),!1)+"/\u043c\u0435\u0441). \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0440\u0430\u0441\u0445\u043e\u0434\u044b \u043d\u0430 \u0416\u041a\u0425 \u0432 \u0448\u0430\u0433\u0435 4 \u0434\u043b\u044f \u0442\u043e\u0447\u043d\u043e\u0433\u043e \u0440\u0430\u0441\u0447\u0451\u0442\u0430.")}c.h(0,"h","\ud83c\udfe0",B.f,"\u0421\u0443\u0431\u0441\u0438\u0434\u0438\u044f \u043d\u0430 \u043e\u043f\u043b\u0430\u0442\u0443 \u0416\u041a\u0425",o.P(),p.P(),"~"+A.e(p.P(),!1)+"/\u043c\u0435\u0441","monthly")},
kT(a,b,c){var s,r,q
if(!(a.w.i(0,"i_pen")||a.c==="pensioner"))return
s=b.w
r=B.aT.t(0,s.a)
if(r==null)r=16288
if(!(s.ax!=null&&a.d==="moscow")){s=b.y
s===$&&A.p()
s=s<r}else s=!1
if(s){s=A.e(r,!1)
q=b.y
q===$&&A.p()
c.h(0,"p","\ud83d\udc74",B.f,"\u0414\u043e\u043f\u043b\u0430\u0442\u0430 \u043a \u043f\u0435\u043d\u0441\u0438\u0438 \u0434\u043e \u041f\u041c \u043f\u0435\u043d\u0441\u0438\u043e\u043d\u0435\u0440\u0430","\u0420\u0435\u0433\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u0430\u044f \u0441\u043e\u0446\u0438\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043e\u043f\u043b\u0430\u0442\u0430 \u043d\u0435\u0440\u0430\u0431\u043e\u0442\u0430\u044e\u0449\u0435\u043c\u0443 \u043f\u0435\u043d\u0441\u0438\u043e\u043d\u0435\u0440\u0443 \u0434\u043e \u041f\u041c \u043f\u0435\u043d\u0441\u0438\u043e\u043d\u0435\u0440\u0430 \u0432 \u0432\u0430\u0448\u0435\u043c \u0440\u0435\u0433\u0438\u043e\u043d\u0435 ("+s+"). \u041d\u0430\u0437\u043d\u0430\u0447\u0430\u0435\u0442\u0441\u044f \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u0447\u0435\u0440\u0435\u0437 \u0421\u0424\u0420/\u0441\u043e\u0446\u0437\u0430\u0449\u0438\u0442\u0443.",Math.max(0,r-q),"\u0434\u043e "+A.e(r,!1)+"/\u043c\u0435\u0441","monthly")}if(b.b>=80)c.h(0,"p","\ud83e\uddd3",B.f,"\u041d\u0430\u0434\u0431\u0430\u0432\u043a\u0430 80+","\u0424\u0438\u043a\u0441. \u0432\u044b\u043f\u043b\u0430\u0442\u0430 \u0443\u0434\u0432\u0430\u0438\u0432\u0430\u0435\u0442\u0441\u044f.",9584.69,"+"+A.e(9584.69,!1)+"/\u043c\u0435\u0441","monthly")
c.h(0,"p","\u2764\ufe0f\u200d\ud83d\udd25",B.c,"\u0418\u043d\u0434\u0435\u043a\u0441\u0430\u0446\u0438\u044f 2026","\u0421\u0442\u0440\u0430\u0445\u043e\u0432\u044b\u0435 \u043f\u0435\u043d\u0441\u0438\u0438 +7,6%.",0,"+7,6%","benefit")},
k9(a,b,c){var s="s",r="\u041c\u0430\u043a\u0441. \u043f\u0440\u0438 \u043e\u0442\u043a\u0430\u0437\u0435 \u043e\u0442 \u041d\u0421\u0423. \u041f\u0440\u0438 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0438 \u043b\u044c\u0433\u043e\u0442 \u043d\u0430\u0442\u0443\u0440\u043e\u0439: \u2212",q="monthly",p="\u0441\u0442\u0430\u0436 + \u043d\u0430\u0434\u0431\u0430\u0432\u043a\u0430 \u0432 \u043f\u0435\u043d\u0441\u0438\u0438",o="benefit",n=a.w
if(n.i(0,"i_dis1"))c.h(0,s,"\u267f",B.f,"\u0415\u0414\u0412 \u2014 \u0438\u043d\u0432\u0430\u043b\u0438\u0434 I \u0433\u0440.",r+A.e(1825.25,!0)+"/\u043c\u0435\u0441.",6157.22,"~"+A.e(6157.22,!0)+"/\u043c\u0435\u0441",q)
if(n.i(0,"i_dis2"))c.h(0,s,"\u267f",B.f,"\u0415\u0414\u0412 \u2014 \u0438\u043d\u0432\u0430\u043b\u0438\u0434 II \u0433\u0440.",r+A.e(1825.25,!0)+"/\u043c\u0435\u0441.",4397.23,"~"+A.e(4397.23,!0)+"/\u043c\u0435\u0441",q)
if(n.i(0,"i_dis3"))c.h(0,s,"\u267f",B.c,"\u0415\u0414\u0412 \u2014 \u0438\u043d\u0432\u0430\u043b\u0438\u0434 III \u0433\u0440.",r+A.e(1825.25,!0)+"/\u043c\u0435\u0441.",3520.01,"~"+A.e(3520.01,!0)+"/\u043c\u0435\u0441",q)
if(n.i(0,"has_dis1")&&a.c!=="employed")c.h(0,s,"\ud83e\udd1d",B.c,"\u0423\u0445\u043e\u0434 \u0437\u0430 \u0438\u043d\u0432\u0430\u043b\u0438\u0434\u043e\u043c I \u0433\u0440.","\u0412\u044b\u043f\u043b\u0430\u0442\u0430 1 200 \u20bd \u0443\u0445\u0430\u0436\u0438\u0432\u0430\u044e\u0449\u0435\u043c\u0443 \u043e\u0442\u043c\u0435\u043d\u0435\u043d\u0430 \u0441 2025. \u041d\u0430\u0434\u0431\u0430\u0432\u043a\u0430 ~1 414 \u20bd \u0432\u0445\u043e\u0434\u0438\u0442 \u0432 \u043f\u0435\u043d\u0441\u0438\u044e \u0438\u043d\u0432\u0430\u043b\u0438\u0434\u0430; \u0443\u0445\u0430\u0436\u0438\u0432\u0430\u044e\u0449\u0435\u043c\u0443 \u2014 \u0441\u0442\u0430\u0436 1,8 \u0418\u041f\u041a/\u0433\u043e\u0434.",0,p,o)
if(n.i(0,"elderly80")&&a.c!=="employed")c.h(0,s,"\ud83e\uddd3",B.c,"\u0423\u0445\u043e\u0434 \u0437\u0430 \u043f\u043e\u0436\u0438\u043b\u044b\u043c 80+","\u0412\u044b\u043f\u043b\u0430\u0442\u0430 1 200 \u20bd \u0443\u0445\u0430\u0436\u0438\u0432\u0430\u044e\u0449\u0435\u043c\u0443 \u043e\u0442\u043c\u0435\u043d\u0435\u043d\u0430 \u0441 2025. \u041d\u0430\u0434\u0431\u0430\u0432\u043a\u0430 ~1 414 \u20bd \u0432\u0445\u043e\u0434\u0438\u0442 \u0432 \u043f\u0435\u043d\u0441\u0438\u044e \u043f\u043e\u0436\u0438\u043b\u043e\u0433\u043e; \u0443\u0445\u0430\u0436\u0438\u0432\u0430\u044e\u0449\u0435\u043c\u0443 \u2014 \u0441\u0442\u0430\u0436 1,8 \u0418\u041f\u041a/\u0433\u043e\u0434.",0,p,o)
if(n.i(0,"has_dis2")||n.i(0,"has_dis3"))c.h(0,s,"\ud83e\udd1d",B.c,"\u0423\u0445\u043e\u0434 \u0437\u0430 \u0438\u043d\u0432\u0430\u043b\u0438\u0434\u043e\u043c II/III \u0433\u0440.","\u0417\u0430 \u0443\u0445\u043e\u0434 \u0437\u0430 \u0438\u043d\u0432\u0430\u043b\u0438\u0434\u043e\u043c II \u0438\u043b\u0438 III \u0433\u0440\u0443\u043f\u043f\u044b \u043a\u043e\u043c\u043f\u0435\u043d\u0441\u0430\u0446\u0438\u044f \u0438 \u043f\u0435\u043d\u0441\u0438\u043e\u043d\u043d\u044b\u0439 \u0441\u0442\u0430\u0436 \u0443\u0445\u0430\u0436\u0438\u0432\u0430\u044e\u0449\u0435\u043c\u0443 \u043d\u0435 \u043f\u0440\u0435\u0434\u0443\u0441\u043c\u043e\u0442\u0440\u0435\u043d\u044b (\u0432 \u043e\u0442\u043b\u0438\u0447\u0438\u0435 \u043e\u0442 I \u0433\u0440\u0443\u043f\u043f\u044b). \u0421\u0430\u043c \u0438\u043d\u0432\u0430\u043b\u0438\u0434 \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u0442 \u043f\u0435\u043d\u0441\u0438\u044e \u043f\u043e \u0438\u043d\u0432\u0430\u043b\u0438\u0434\u043d\u043e\u0441\u0442\u0438 \u0438 \u0415\u0414\u0412.",0,"\u0432\u044b\u043f\u043b\u0430\u0442\u044b \u0443\u0445\u0430\u0436\u0438\u0432\u0430\u044e\u0449\u0435\u043c\u0443 \u043d\u0435\u0442",o)},
kW(a,b,c){var s,r,q,p=a.w
if(!p.i(0,"own_home"))return
s=p.i(0,"i_pen")||a.c==="pensioner"
r=p.i(0,"i_dis1")||p.i(0,"i_dis2")
q=a.f>=3
if(!(s||r||q))return
c.h(0,"t","\ud83c\udfe0",B.e,"\u041b\u044c\u0433\u043e\u0442\u0430 \u043f\u043e \u043d\u0430\u043b\u043e\u0433\u0443 \u043d\u0430 \u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u043e","\u041e\u0441\u0432\u043e\u0431\u043e\u0436\u0434\u0435\u043d\u0438\u0435 \u043e\u0442 \u043d\u0430\u043b\u043e\u0433\u0430 \u043d\u0430 \u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u043e \u043d\u0430 \u043e\u0434\u0438\u043d \u043e\u0431\u044a\u0435\u043a\u0442 \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u0432\u0438\u0434\u0430 (\u043a\u0432\u0430\u0440\u0442\u0438\u0440\u0430, \u0434\u043e\u043c, \u0433\u0430\u0440\u0430\u0436) \u2014 \u0434\u043b\u044f \u043f\u0435\u043d\u0441\u0438\u043e\u043d\u0435\u0440\u043e\u0432 \u0438 \u0438\u043d\u0432\u0430\u043b\u0438\u0434\u043e\u0432 I\u2013II \u0433\u0440\u0443\u043f\u043f. \u041c\u043d\u043e\u0433\u043e\u0434\u0435\u0442\u043d\u044b\u043c \u0441\u0435\u043c\u044c\u044f\u043c \u2014 \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u0432\u044b\u0447\u0435\u0442 (\u0441\u0442. 407 \u041d\u041a \u0420\u0424).",0,"\u043e\u0441\u0432\u043e\u0431\u043e\u0436\u0434\u0435\u043d\u0438\u0435 \u043e\u0442 \u043d\u0430\u043b\u043e\u0433\u0430","benefit")},
k2(a,b,c){if(!a.w.i(0,"communal"))return
c.h(0,"h","\ud83c\udfd8\ufe0f",B.c,"\u0420\u0430\u0441\u0441\u0435\u043b\u0435\u043d\u0438\u0435 \u043a\u043e\u043c\u043c\u0443\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u043a\u0432\u0430\u0440\u0442\u0438\u0440","\u041f\u0440\u043e\u0436\u0438\u0432\u0430\u043d\u0438\u0435 \u0432 \u043a\u043e\u043c\u043c\u0443\u043d\u0430\u043b\u044c\u043d\u043e\u0439 \u043a\u0432\u0430\u0440\u0442\u0438\u0440\u0435 \u2014 \u043e\u0441\u043d\u043e\u0432\u0430\u043d\u0438\u0435 \u0434\u043b\u044f \u043f\u043e\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043d\u0430 \u0443\u0447\u0451\u0442 \u043f\u043e \u0443\u043b\u0443\u0447\u0448\u0435\u043d\u0438\u044e \u0436\u0438\u043b\u0438\u0449\u043d\u044b\u0445 \u0443\u0441\u043b\u043e\u0432\u0438\u0439. \u0412\u043e \u043c\u043d\u043e\u0433\u0438\u0445 \u0440\u0435\u0433\u0438\u043e\u043d\u0430\u0445 \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u044e\u0442 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u044b \u0440\u0430\u0441\u0441\u0435\u043b\u0435\u043d\u0438\u044f \u0438 \u0441\u0443\u0431\u0441\u0438\u0434\u0438\u0438 \u2014 \u0443\u0442\u043e\u0447\u043d\u044f\u0439\u0442\u0435 \u0432 \u041c\u0424\u0426 \u0438\u043b\u0438 \u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438.",0,"\u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u044b \u0440\u0435\u0433\u0438\u043e\u043d\u0430","benefit")},
l8(a,b,c){var s
if(a.w.i(0,"i_sc")){s=b.Q
s===$&&A.p()
s=!s}else s=!0
if(s)return
c.h(0,"s","\ud83d\udcdd",B.f,"\u0421\u043e\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0439 \u043a\u043e\u043d\u0442\u0440\u0430\u043a\u0442: \u041e\u0442\u043a\u0440\u044b\u0442\u0438\u0435 \u0441\u0432\u043e\u0435\u0433\u043e \u0434\u0435\u043b\u0430 / \u0418\u041f","\u0415\u0434\u0438\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u0430\u044f \u0431\u0435\u0437\u0432\u043e\u0437\u043c\u0435\u0437\u0434\u043d\u0430\u044f \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430 \u043c\u0430\u043b\u043e\u0438\u043c\u0443\u0449\u0438\u043c \u0441\u0435\u043c\u044c\u044f\u043c.",35e4,"\u0434\u043e "+A.e(35e4,!1),"once")},
kO(a,b,c){var s=a.w
if(s.i(0,"i_mil")){c.h(0,"m","\ud83c\udf96\ufe0f",B.c,"\u0412\u044b\u043f\u043b\u0430\u0442\u0430 \u043f\u0440\u0438 \u0437\u0430\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0438 \u043a\u043e\u043d\u0442\u0440\u0430\u043a\u0442\u0430","\u0424\u0435\u0434\u0435\u0440\u0430\u043b\u044c\u043d\u0430\u044f + \u0440\u0435\u0433\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u0430\u044f.",4e5,"\u043e\u0442 "+A.e(4e5,!1),"once")
c.h(0,"m","\ud83d\udcb0",B.c,"\u0411\u043e\u0435\u0432\u044b\u0435 \u043d\u0430\u0434\u0431\u0430\u0432\u043a\u0438","\u0415\u0436\u0435\u043c\u0435\u0441\u044f\u0447\u043d\u044b\u0435 \u0434\u043e\u043f\u043b\u0430\u0442\u044b.",5e4,"\u043e\u0442 "+A.e(5e4,!1)+"/\u043c\u0435\u0441","monthly")}if(s.i(0,"i_vet"))c.h(0,"m","\ud83c\udfc5",B.c,"\u0415\u0414\u0412 \u0432\u0435\u0442\u0435\u0440\u0430\u043d\u0430 \u0431\u043e\u0435\u0432\u044b\u0445 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439","\u0415\u0436\u0435\u043c\u0435\u0441\u044f\u0447\u043d\u0430\u044f \u0434\u0435\u043d\u0435\u0436\u043d\u0430\u044f \u0432\u044b\u043f\u043b\u0430\u0442\u0430 \u0443\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u0443 \u0411\u0414. \u0421 01.02.2026.",4838.63,A.e(4838.63,!0)+"/\u043c\u0435\u0441","monthly")},
lF(a,b,c){if(!a.w.i(0,"vet_fam"))return
c.h(0,"m","\ud83c\udfc5",B.c,"\u0415\u0414\u0412 \u0441\u0435\u043c\u044c\u0435 \u0432\u0435\u0442\u0435\u0440\u0430\u043d\u0430 \u0411\u0414","\u0415\u0436\u0435\u043c\u0435\u0441\u044f\u0447\u043d\u0430\u044f \u0432\u044b\u043f\u043b\u0430\u0442\u0430 \u0441\u0435\u043c\u044c\u0435 \u0443\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u0430/\u043f\u043e\u0433\u0438\u0431\u0448\u0435\u0433\u043e. \u0421 01.02.2026.",4838.63,A.e(4838.63,!0)+"/\u043c\u0435\u0441","monthly")
c.h(0,"m","\ud83d\udee1\ufe0f",B.c,"\u0421\u0442\u0440\u0430\u0445\u043e\u0432\u0430\u044f \u0432\u044b\u043f\u043b\u0430\u0442\u0430 \u0441\u0435\u043c\u044c\u0435 \u043f\u043e\u0433\u0438\u0431\u0448\u0435\u0433\u043e","\u041f\u0440\u0438 \u0433\u0438\u0431\u0435\u043b\u0438 \u0432\u043e\u0435\u043d\u043d\u043e\u0441\u043b\u0443\u0436\u0430\u0449\u0435\u0433\u043e: \u0435\u0434\u0438\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u0430\u044f \u0441\u0442\u0440\u0430\u0445\u043e\u0432\u0430\u044f \u0432\u044b\u043f\u043b\u0430\u0442\u0430.",3e6,"\u043e\u0442 "+A.e(3e6,!1)+" (\u0435\u0434\u0438\u043d\u043e\u0432\u0440.)","once")
c.h(0,"m","\ud83d\udcb0",B.c,"\u0415\u0436\u0435\u043c\u0435\u0441\u044f\u0447\u043d\u0430\u044f \u0432\u044b\u043f\u043b\u0430\u0442\u0430 \u0441\u0435\u043c\u044c\u0435 \u043f\u043e\u0433\u0438\u0431\u0448\u0435\u0433\u043e","\u0427\u043b\u0435\u043d\u0430\u043c \u0441\u0435\u043c\u044c\u0438 \u043f\u043e\u0433\u0438\u0431\u0448\u0435\u0433\u043e \u0432\u043e\u0435\u043d\u043d\u043e\u0441\u043b\u0443\u0436\u0430\u0449\u0435\u0433\u043e.",27566,A.e(27566,!1)+"/\u043c\u0435\u0441","monthly")},
kx(a,b,c){var s="a",r="monthly",q="benefit",p=a.w
if(p.i(0,"i_vet_trud")){c.h(0,s,"\ud83c\udfc6",B.c,"\u0412\u0435\u0442\u0435\u0440\u0430\u043d \u0442\u0440\u0443\u0434\u0430 \u2014 \u0440\u0435\u0433\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u043b\u044c\u0433\u043e\u0442\u044b","\u0414\u043e\u043f\u043b\u0430\u0442\u0430 \u043a \u043f\u0435\u043d\u0441\u0438\u0438, \u0441\u043a\u0438\u0434\u043a\u0438 \u043d\u0430 \u0416\u041a\u0425 (50%), \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442 \u0438 \u043b\u0435\u043a\u0430\u0440\u0441\u0442\u0432\u0430. \u0420\u0430\u0437\u043c\u0435\u0440 \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043e\u0442 \u0440\u0435\u0433\u0438\u043e\u043d\u0430: \u0432 \u0441\u0440\u0435\u0434\u043d\u0435\u043c 1 000\u20135 000 \u20bd/\u043c\u0435\u0441.",2000,"~1 000\u20135 000 \u20bd/\u043c\u0435\u0441",r)
c.h(0,s,"\ud83d\ude8c",B.c,"\u0412\u0435\u0442\u0435\u0440\u0430\u043d \u0442\u0440\u0443\u0434\u0430 \u2014 \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u044b\u0439 \u043f\u0440\u043e\u0435\u0437\u0434","\u041f\u0440\u0430\u0432\u043e \u043d\u0430 \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u044b\u0439 \u043f\u0440\u043e\u0435\u0437\u0434 \u0432 \u0433\u043e\u0440\u043e\u0434\u0441\u043a\u043e\u043c \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u0435 (\u0440\u0435\u0433\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0439 \u0437\u0430\u043a\u043e\u043d).",0,"\u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u044b\u0439 \u043f\u0440\u043e\u0435\u0437\u0434",q)}if(p.i(0,"i_honored")){c.h(0,s,"\ud83c\udf96\ufe0f",B.j,"\u041d\u0430\u0434\u0431\u0430\u0432\u043a\u0430 \xab\u0417\u0430\u0441\u043b\u0443\u0436\u0435\u043d\u043d\u044b\u0439\xbb","\u0420\u0435\u0433\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043e\u043f\u043b\u0430\u0442\u0430 \u043a \u043f\u0435\u043d\u0441\u0438\u0438 \u0437\u0430 \u043f\u043e\u0447\u0451\u0442\u043d\u043e\u0435 \u0437\u0432\u0430\u043d\u0438\u0435 \u0420\u0424. \u0420\u0430\u0437\u043c\u0435\u0440 \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043e\u0442 \u0440\u0435\u0433\u0438\u043e\u043d\u0430: \u043e\u0431\u044b\u0447\u043d\u043e 1 000\u20133 000 \u20bd/\u043c\u0435\u0441.",1500,"~1 000\u20133 000 \u20bd/\u043c\u0435\u0441",r)
c.h(0,s,"\ud83c\udf97\ufe0f",B.j,"\u0421\u0442\u0438\u043f\u0435\u043d\u0434\u0438\u044f \u041f\u0440\u0435\u0437\u0438\u0434\u0435\u043d\u0442\u0430 \u0420\u0424","\u0414\u043b\u044f \u0417\u0430\u0441\u043b\u0443\u0436\u0435\u043d\u043d\u044b\u0445 \u043c\u0430\u0441\u0442\u0435\u0440\u043e\u0432 \u0441\u043f\u043e\u0440\u0442\u0430 \u0438 \u0434\u0435\u044f\u0442\u0435\u043b\u0435\u0439 \u043a\u0443\u043b\u044c\u0442\u0443\u0440\u044b \u2014 \u0435\u0434\u0438\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u0438 \u0435\u0436\u0435\u043c\u0435\u0441\u044f\u0447\u043d\u044b\u0435 \u0432\u044b\u043f\u043b\u0430\u0442\u044b \u043f\u043e \u0423\u043a\u0430\u0437\u0443 \u041f\u0440\u0435\u0437\u0438\u0434\u0435\u043d\u0442\u0430.",0,"\u043f\u043e \u0423\u043a\u0430\u0437\u0443 \u041f\u0440\u0435\u0437\u0438\u0434\u0435\u043d\u0442\u0430",q)}if(p.i(0,"i_people_art"))c.h(0,s,"\ud83c\udf1f",B.j,"\u041d\u0430\u0434\u0431\u0430\u0432\u043a\u0430 \xab\u041d\u0430\u0440\u043e\u0434\u043d\u044b\u0439 \u0430\u0440\u0442\u0438\u0441\u0442 / \u0434\u0435\u044f\u0442\u0435\u043b\u044c\xbb","\u0424\u0435\u0434\u0435\u0440\u0430\u043b\u044c\u043d\u0430\u044f \u043d\u0430\u0434\u0431\u0430\u0432\u043a\u0430 \u043a \u043f\u0435\u043d\u0441\u0438\u0438: 500% \u041f\u041c \u043f\u0435\u043d\u0441\u0438\u043e\u043d\u0435\u0440\u0430 (\u0423\u043a\u0430\u0437 \u041f\u0440\u0435\u0437\u0438\u0434\u0435\u043d\u0442\u0430 \u0420\u0424 \u2116 1584). \u041f\u043b\u044e\u0441 \u0440\u0435\u0433\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u0434\u043e\u043f\u043b\u0430\u0442\u044b.",47923.450000000004,"~"+A.e(47923.450000000004,!1)+"/\u043c\u0435\u0441",r)
if(p.i(0,"i_hero_labor")){c.h(0,s,"\u2b50",B.c,"\u0413\u0435\u0440\u043e\u0439 \u0422\u0440\u0443\u0434\u0430 \u0420\u0424 \u2014 \u0415\u0414\u0412","\u0415\u0436\u0435\u043c\u0435\u0441\u044f\u0447\u043d\u0430\u044f \u0434\u0435\u043d\u0435\u0436\u043d\u0430\u044f \u0432\u044b\u043f\u043b\u0430\u0442\u0430 \u0413\u0435\u0440\u043e\u044f\u043c \u0422\u0440\u0443\u0434\u0430 \u0420\u0424. \u0418\u043d\u0434\u0435\u043a\u0441\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u0435\u0436\u0435\u0433\u043e\u0434\u043d\u043e.",76458.4,A.e(76458.4,!0)+"/\u043c\u0435\u0441",r)
c.h(0,s,"\ud83c\udfe0",B.c,"\u0413\u0435\u0440\u043e\u0439 \u0422\u0440\u0443\u0434\u0430 \u0420\u0424 \u2014 \u043b\u044c\u0433\u043e\u0442\u044b","\u0411\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u044b\u0439 \u043f\u0440\u043e\u0435\u0437\u0434, 50% \u0441\u043a\u0438\u0434\u043a\u0430 \u043d\u0430 \u0416\u041a\u0425, \u043d\u0430\u043b\u043e\u0433\u043e\u0432\u044b\u0435 \u043b\u044c\u0433\u043e\u0442\u044b, \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u043e\u0435 \u043c\u0435\u0434\u043e\u0431\u0441\u043b\u0443\u0436\u0438\u0432\u0430\u043d\u0438\u0435.",0,"\u043f\u0430\u043a\u0435\u0442 \u043b\u044c\u0433\u043e\u0442",q)}},
l7(a,b,c){var s,r,q,p,o,n=a.w
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
o=B.d.v(Math.min(q*24/730,6827.397260273972)*p*21)
n=n?"\u0421\u0430\u043c\u043e\u0437\u0430\u043d\u044f\u0442\u044b\u0439 \u0441 \u0434\u043e\u0431\u0440\u043e\u0432\u043e\u043b\u044c\u043d\u044b\u043c \u0441\u0442\u0440\u0430\u0445\u043e\u0432\u0430\u043d\u0438\u0435\u043c: \u043e\u0440\u0438\u0435\u043d\u0442\u0438\u0440 \u0440\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u043d \u043e\u0442 \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u043e\u0439 \u0441\u0442\u0440\u0430\u0445\u043e\u0432\u043e\u0439 \u0441\u0443\u043c\u043c\u044b (\u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e 35 000 \u20bd, \u0435\u0441\u043b\u0438 \u043d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d\u0430 \u0441\u0432\u043e\u044f \u0431\u0430\u0437\u0430).":""+B.d.X(p*100)+"% \u0441\u0440. \u0437\u0430\u0440\u0430\u0431\u043e\u0442\u043a\u0430 (\u0441\u0442\u0430\u0436 "+s+" \u043b\u0435\u0442). \u041c\u0430\u043a\u0441. \u0434\u043d\u0435\u0432\u043d\u043e\u0435: "+A.e(B.d.v(6827.397260273972),!1)+". \u041e\u0440\u0438\u0435\u043d\u0442\u0438\u0440 \u0437\u0430 \u043c\u0435\u0441\u044f\u0446: ~"+A.e(o,!1)+"."
c.h(0,"w","\ud83c\udfe5",B.f,"\u041f\u043e\u0441\u043e\u0431\u0438\u0435 \u043f\u043e \u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0439 \u043d\u0435\u0442\u0440\u0443\u0434\u043e\u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u0438",n,o,"~"+A.e(o,!1)+"/\u043c\u0435\u0441","monthly")},
k3(a,b,c){var s=a.w
if(s.i(0,"mil_conscript_spouse")&&a.b==="female"&&s.i(0,"pregnant")&&a.e==="married")c.h(0,"m","\ud83e\udd30",B.c,"\u041f\u043e\u0441\u043e\u0431\u0438\u0435 \u0431\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0439 \u0436\u0435\u043d\u0435 \u0432\u043e\u0435\u043d\u043d\u043e\u0441\u043b\u0443\u0436\u0430\u0449\u0435\u0433\u043e \u043f\u043e \u043f\u0440\u0438\u0437\u044b\u0432\u0443","\u0415\u0434\u0438\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u0430\u044f \u0444\u0435\u0434\u0435\u0440\u0430\u043b\u044c\u043d\u0430\u044f \u0432\u044b\u043f\u043b\u0430\u0442\u0430 \u0441\u0443\u043f\u0440\u0443\u0433\u0435 \u0432\u043e\u0435\u043d\u043d\u043e\u0441\u043b\u0443\u0436\u0430\u0449\u0435\u0433\u043e \u043f\u043e \u043f\u0440\u0438\u0437\u044b\u0432\u0443 \u043f\u0440\u0438 \u0441\u0440\u043e\u043a\u0435 \u0431\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u043d\u0435 \u043c\u0435\u043d\u0435\u0435 180 \u0434\u043d\u0435\u0439.",45054.24,A.e(45054.24,!0),"once")
if(s.i(0,"mil_conscript_child")&&a.f>0&&b.r<=3)c.h(0,"m","\ud83e\ude96",B.c,"\u041f\u043e\u0441\u043e\u0431\u0438\u0435 \u043d\u0430 \u0440\u0435\u0431\u0451\u043d\u043a\u0430 \u0432\u043e\u0435\u043d\u043d\u043e\u0441\u043b\u0443\u0436\u0430\u0449\u0435\u0433\u043e \u043f\u043e \u043f\u0440\u0438\u0437\u044b\u0432\u0443","\u0415\u0436\u0435\u043c\u0435\u0441\u044f\u0447\u043d\u0430\u044f \u0444\u0435\u0434\u0435\u0440\u0430\u043b\u044c\u043d\u0430\u044f \u0432\u044b\u043f\u043b\u0430\u0442\u0430 \u043d\u0430 \u0440\u0435\u0431\u0451\u043d\u043a\u0430 \u0432\u043e\u0435\u043d\u043d\u043e\u0441\u043b\u0443\u0436\u0430\u0449\u0435\u0433\u043e \u043f\u043e \u043f\u0440\u0438\u0437\u044b\u0432\u0443 \u0434\u043e \u0434\u043e\u0441\u0442\u0438\u0436\u0435\u043d\u0438\u044f \u0440\u0435\u0431\u0451\u043d\u043a\u043e\u043c 3 \u043b\u0435\u0442.",19308.96,A.e(19308.96,!0)+"/\u043c\u0435\u0441","monthly")},
kb(a,b,c){if(!a.w.i(0,"i_donor"))return
c.h(0,"s","\ud83e\ude78",B.c,"\u0415\u0414\u0412 \u041f\u043e\u0447\u0451\u0442\u043d\u043e\u0433\u043e \u0434\u043e\u043d\u043e\u0440\u0430 \u0420\u043e\u0441\u0441\u0438\u0438","\u0415\u0436\u0435\u0433\u043e\u0434\u043d\u0430\u044f \u0434\u0435\u043d\u0435\u0436\u043d\u0430\u044f \u0432\u044b\u043f\u043b\u0430\u0442\u0430 (\u0435\u0434\u0438\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e \u0440\u0430\u0437 \u0432 \u0433\u043e\u0434). \u0412 2026 \u0433\u043e\u0434\u0443 \u0435\u0451 \u043d\u0430\u0437\u043d\u0430\u0447\u0430\u0435\u0442 \u0440\u0435\u0433\u0438\u043e\u043d \u043f\u043e \u0437\u0430\u044f\u0432\u043b\u0435\u043d\u0438\u044e; \u0441 2027 \u0433\u043e\u0434\u0430 \u2014 \u0421\u043e\u0446\u0444\u043e\u043d\u0434, \u0431\u0435\u0437 \u0437\u0430\u044f\u0432\u043b\u0435\u043d\u0438\u044f (\u0424\u0417 \u2116275-\u0424\u0417 \u043e\u0442 26.07.2026).",19497.68,A.e(19497.68,!0)+"/\u0433\u043e\u0434","once")
c.h(0,"s","\ud83c\udfe5",B.c,"\u041b\u044c\u0433\u043e\u0442\u044b \u041f\u043e\u0447\u0451\u0442\u043d\u043e\u0433\u043e \u0434\u043e\u043d\u043e\u0440\u0430","\u041e\u0442\u043f\u0443\u0441\u043a \u0432 \u0443\u0434\u043e\u0431\u043d\u043e\u0435 \u0432\u0440\u0435\u043c\u044f, \u043b\u044c\u0433\u043e\u0442\u043d\u044b\u0435 \u043f\u0443\u0442\u0451\u0432\u043a\u0438, \u0441\u043a\u0438\u0434\u043a\u0438 \u043d\u0430 \u043b\u0435\u0447\u0435\u043d\u0438\u0435.",0,"\u043f\u0430\u043a\u0435\u0442 \u043b\u044c\u0433\u043e\u0442","benefit")},
k1(a,b,c){var s,r,q,p,o,n,m,l=a.f
if(l>0){s=b.dx
s===$&&A.p()
if(s){s=b.z
s===$&&A.p()}else s=!1
s=!s||b.c/b.d>37500}else s=!0
if(s)return
s=a.w
r=s.i(0,"solo_parent")
q=l>=2?4200:1400
if(l>=3)q+=(l-2)*6000
p=s.i(0,"disabled_child")
if(p)q+=12e3
o=r?q*2:q
n=B.d.v(o*0.13)
l=r?"\u0414\u0432\u043e\u0439\u043d\u043e\u0439 \u0432\u044b\u0447\u0435\u0442 \u041d\u0414\u0424\u041b (\u043e\u0434\u0438\u043d\u043e\u043a\u0438\u0439 \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u044c)":"\u0421\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u044b\u0439 \u0432\u044b\u0447\u0435\u0442 \u041d\u0414\u0424\u041b \u043d\u0430 \u0434\u0435\u0442\u0435\u0439"
s=A.e(o,!1)
m=p?", \u0438\u043d\u0432\u0430\u043b\u0438\u0434 \u2014 +12 000":""
c.h(0,"t","\ud83e\uddee",B.e,l,"\u0411\u0430\u0437\u0430: "+s+"/\u043c\u0435\u0441 \xd7 13% (1-\u0439 \u2014 1 400, 2-\u0439 \u2014 2 800, 3-\u0439+ \u2014 6 000"+m+" \u20bd). \u0414\u043e \u0434\u043e\u0445\u043e\u0434\u0430 450 000 \u20bd/\u0433\u043e\u0434.",n,"~"+A.e(n,!1)+"/\u043c\u0435\u0441","monthly")},
kV(a,b,c){var s=a.w
if(s.i(0,"bought_recent")||s.i(0,"has_mortgage")){s=b.dx
s===$&&A.p()
if(s){s=b.z
s===$&&A.p()}else s=!1
s=!s}else s=!0
if(s)return
s=b.x
s===$&&A.p()
if(!(s>0))s=B.d.v(b.c*12*0.13)
c.h(0,"t","\ud83c\udfd8\ufe0f",B.e,"\u0418\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0439 \u0432\u044b\u0447\u0435\u0442","\u0414\u043e 260 000 \u20bd \u0437\u0430 \u043f\u043e\u043a\u0443\u043f\u043a\u0443 + \u0434\u043e 390 000 \u20bd \u043f\u043e \u0438\u043f\u043e\u0442\u0435\u0447\u043d\u044b\u043c %.",Math.min(s,26e4),"\u0434\u043e "+A.e(26e4,!1)+" + "+A.e(39e4,!1),"once")},
kN(a,b,c){var s
if(a.w.i(0,"paid_med")){s=b.dx
s===$&&A.p()
if(s){s=b.z
s===$&&A.p()}else s=!1
s=!s}else s=!0
if(s)return
c.h(0,"t","\ud83c\udfe5",B.e,"\u0412\u044b\u0447\u0435\u0442: \u043b\u0435\u0447\u0435\u043d\u0438\u0435","13% \u043e\u0442 \u0440\u0430\u0441\u0445\u043e\u0434\u043e\u0432 (\u0434\u043e 150 000 \u20bd/\u0433\u043e\u0434; \u0434\u043e\u0440\u043e\u0433\u043e\u0441\u0442\u043e\u044f\u0449\u0435\u0435 \u2014 \u0431\u0435\u0437 \u043b\u0438\u043c\u0438\u0442\u0430).",19500,"\u0434\u043e "+A.e(19500,!1)+"/\u0433\u043e\u0434","once")},
kc(a,b,c){var s
if(a.w.i(0,"paid_edu")){s=b.dx
s===$&&A.p()
if(s){s=b.z
s===$&&A.p()}else s=!1
s=!s}else s=!0
if(s)return
c.h(0,"t","\ud83c\udf93",B.e,"\u0412\u044b\u0447\u0435\u0442: \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435","13% \u043e\u0442 \u0440\u0430\u0441\u0445\u043e\u0434\u043e\u0432: \u0437\u0430 \u0441\u0435\u0431\u044f \u0434\u043e 150 000, \u0437\u0430 \u0434\u0435\u0442\u0435\u0439 \u0434\u043e 110 000.",14300,"\u0434\u043e "+A.e(14300,!1)+"/\u0433\u043e\u0434","once")},
kr(a,b,c){var s
if(a.w.i(0,"paid_fit")){s=b.dx
s===$&&A.p()
if(s){s=b.z
s===$&&A.p()}else s=!1
s=!s}else s=!0
if(s)return
c.h(0,"t","\ud83c\udfcb\ufe0f",B.e,"\u0412\u044b\u0447\u0435\u0442: \u0444\u0438\u0442\u043d\u0435\u0441","13% \u043e\u0442 \u0440\u0430\u0441\u0445\u043e\u0434\u043e\u0432 \u0432 \u0441\u043e\u0441\u0442\u0430\u0432\u0435 \u0435\u0434\u0438\u043d\u043e\u0433\u043e \u0441\u043e\u0446\u0432\u044b\u0447\u0435\u0442\u0430 (\u043e\u0431\u0449\u0438\u0439 \u043b\u0438\u043c\u0438\u0442 150 000 \u20bd/\u0433\u043e\u0434).",19500,"\u0434\u043e "+A.e(19500,!1)+"/\u0433\u043e\u0434","once")},
kA(a,b,c){var s
if(a.w.i(0,"has_iis")){s=b.dx
s===$&&A.p()
if(s){s=b.z
s===$&&A.p()}else s=!1
s=!s}else s=!0
if(s)return
c.h(0,"t","\ud83d\udcc8",B.e,"\u0412\u044b\u0447\u0435\u0442 \u0418\u0418\u0421 \u0442\u0438\u043f \u0410","13% \u043e\u0442 \u043f\u043e\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0434\u043e 400 000 \u20bd.",52e3,"\u0434\u043e "+A.e(52e3,!1)+"/\u0433\u043e\u0434","once")},
kI(a,b,c){var s
if(a.w.i(0,"life_ins")){s=b.dx
s===$&&A.p()
if(s){s=b.z
s===$&&A.p()}else s=!1
s=!s}else s=!0
if(s)return
c.h(0,"t","\ud83d\udee1\ufe0f",B.e,"\u0412\u044b\u0447\u0435\u0442: \u0441\u0442\u0440\u0430\u0445\u043e\u0432\u0430\u043d\u0438\u0435 \u0436\u0438\u0437\u043d\u0438","13% \u043e\u0442 \u0432\u0437\u043d\u043e\u0441\u043e\u0432 \u043f\u043e \u0434\u043e\u0433\u043e\u0432\u043e\u0440\u0430\u043c \u0441\u0442\u0440\u0430\u0445\u043e\u0432\u0430\u043d\u0438\u044f \u0436\u0438\u0437\u043d\u0438 (3+ \u043b\u0435\u0442) \u0432 \u0441\u043e\u0441\u0442\u0430\u0432\u0435 \u0435\u0434\u0438\u043d\u043e\u0433\u043e \u0441\u043e\u0446\u0432\u044b\u0447\u0435\u0442\u0430 (\u043b\u0438\u043c\u0438\u0442 150 000 \u20bd/\u0433\u043e\u0434).",19500,"\u0434\u043e "+A.e(19500,!1)+"/\u0433\u043e\u0434","once")},
k_(a,b,c){if(!a.w.i(0,"charity"))return
c.h(0,"t","\ud83d\udc9d",B.e,"\u0412\u044b\u0447\u0435\u0442: \u043f\u043e\u0436\u0435\u0440\u0442\u0432\u043e\u0432\u0430\u043d\u0438\u044f","13% \u043e\u0442 \u0441\u0443\u043c\u043c\u044b \u043f\u043e\u0436\u0435\u0440\u0442\u0432\u043e\u0432\u0430\u043d\u0438\u0439, \u043d\u043e \u043d\u0435 \u0431\u043e\u043b\u0435\u0435 25% \u043e\u0442 \u0433\u043e\u0434\u043e\u0432\u043e\u0433\u043e \u0434\u043e\u0445\u043e\u0434\u0430.",0,"\u0434\u043e 25% \u043e\u0442 \u0434\u043e\u0445\u043e\u0434\u0430","benefit")},
hF(a,b){var s,r
if(a.a.length===0)return null
s=A.hD(a)
r=A.hE(a,b)
return new A.cY(r,s==null?null:$.hi().t(0,s))},
hD(a){var s="methodology_family_support",r="indexation_2026",q="methodology_social_support"
switch(a.a){case"pregnancy_support":return"bir_2026"
case"mat_capital":case"adoption":if(B.a.i(a.b,"\u041c\u0430\u0442"))return"mat_capital_2026"
return s
case"care_leave":return"childcare_1_5_2026"
case"unified_children":return"unified_benefit_2026"
case"newborn":case"multi_child_mortgage":case"disabled_child":case"young_family":return s
case"child_tax_deduction":case"property_deduction":case"medical_deduction":case"education_deduction":case"fitness_deduction":case"iis_deduction":case"life_insurance_deduction":case"charity_deduction":return"methodology_tax_support"
case"student":case"unemployment":case"layoff":case"sick_leave":return"methodology_employment_support"
case"housing_subsidy":return"methodology_housing_support"
case"pension":return B.a.i(a.b,"\u0418\u043d\u0434\u0435\u043a\u0441\u0430\u0446\u0438\u044f")?r:"methodology_pension_support"
case"disability":case"social_contract":case"chernobyl":case"rehabilitated":case"property_tax_relief":case"communal_housing":return q
case"donor":return B.a.i(a.b,"\u041f\u043e\u0447\u0451\u0442\u043d\u043e\u0433\u043e \u0434\u043e\u043d\u043e\u0440\u0430")?r:q
case"military":case"veteran_family":return"methodology_military_support"
case"honors":return"methodology_honor_support"
case"north":case"moscow":case"dfo":case"regional_mat_cap":case"regional_extra_info":return"methodology_regional_support"}return null},
hE(a,b){switch(a.a){case"pregnancy_support":return"\u041f\u043e\u0441\u043e\u0431\u0438\u0435 \u043f\u043e\u043a\u0430\u0437\u0430\u043d\u043e, \u043f\u043e\u0442\u043e\u043c\u0443 \u0447\u0442\u043e \u0432 \u0430\u043d\u043a\u0435\u0442\u0435 \u043e\u0442\u043c\u0435\u0447\u0435\u043d\u0430 \u0431\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0441\u0442\u044c \u0438 \u0432\u044b\u0431\u0440\u0430\u043d \u0436\u0435\u043d\u0441\u043a\u0438\u0439 \u043f\u043e\u043b."
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
case"military":return B.a.i(a.b,"\u0432\u0435\u0442\u0435\u0440\u0430\u043d\u0430")?"\u0412\u044b\u043f\u043b\u0430\u0442\u0430 \u043f\u043e\u043a\u0430\u0437\u0430\u043d\u0430, \u043f\u043e\u0442\u043e\u043c\u0443 \u0447\u0442\u043e \u043e\u0442\u043c\u0435\u0447\u0435\u043d \u0441\u0442\u0430\u0442\u0443\u0441 \u0432\u0435\u0442\u0435\u0440\u0430\u043d\u0430 \u0431\u043e\u0435\u0432\u044b\u0445 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439.":"\u0412\u043e\u0435\u043d\u043d\u0430\u044f \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430 \u043f\u043e\u043a\u0430\u0437\u0430\u043d\u0430, \u043f\u043e\u0442\u043e\u043c\u0443 \u0447\u0442\u043e \u043e\u0442\u043c\u0435\u0447\u0435\u043d \u0441\u0442\u0430\u0442\u0443\u0441 \u0432\u043e\u0435\u043d\u043d\u043e\u0441\u043b\u0443\u0436\u0430\u0449\u0435\u0433\u043e \u0438\u043b\u0438 \u0443\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u0430 \u0421\u0412\u041e."
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
A.eo.prototype={}
J.c6.prototype={
H(a,b){return a===b},
gu(a){return A.cl(a)},
k(a){return"Instance of '"+A.cm(a)+"'"},
gC(a){return A.au(A.eG(this))}}
J.c8.prototype={
k(a){return String(a)},
gu(a){return a?519018:218159},
gC(a){return A.au(t.y)},
$ir:1,
$iC:1}
J.b5.prototype={
H(a,b){return null==b},
k(a){return"null"},
gu(a){return 0},
$ir:1,
$iD:1}
J.b9.prototype={$iv:1}
J.ad.prototype={
gu(a){return 0},
k(a){return String(a)}}
J.ck.prototype={}
J.aJ.prototype={}
J.ac.prototype={
k(a){var s=a[$.bT()]
if(s==null)return this.b4(a)
return"JavaScript function for "+J.aX(s)},
$iaj:1}
J.b8.prototype={
gu(a){return 0},
k(a){return String(a)}}
J.ba.prototype={
gu(a){return 0},
k(a){return String(a)}}
J.u.prototype={
m(a,b){A.Z(a).c.a(b)
a.$flags&1&&A.a0(a,29)
a.push(b)},
J(a,b){var s,r=A.f9(a.length,"",!1,t.N)
for(s=0;s<a.length;++s)this.q(r,s,A.l(a[s]))
return r.join(b)},
U(a,b,c,d){var s,r,q
d.a(b)
A.Z(a).G(d).j("1(1,2)").a(c)
s=a.length
for(r=b,q=0;q<s;++q){r=c.$2(r,a[q])
if(a.length!==s)throw A.f(A.b0(a))}return r},
gab(a){if(a.length>0)return a[0]
throw A.f(A.f2())},
gae(a){var s=a.length
if(s>0)return a[s-1]
throw A.f(A.f2())},
bu(a,b){var s,r
A.Z(a).j("C(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(b.$1(a[r]))return!0
if(a.length!==s)throw A.f(A.b0(a))}return!1},
b3(a,b){var s,r,q,p,o,n=A.Z(a)
n.j("d(1,1)?").a(b)
a.$flags&2&&A.a0(a,"sort")
s=a.length
if(s<2)return
if(s===2){r=a[0]
q=a[1]
n=b.$2(r,q)
if(typeof n!=="number")return n.bN()
if(n>0){a[0]=q
a[1]=r}return}p=0
if(n.c.b(null))for(o=0;o<a.length;++o)if(a[o]===void 0){a[o]=null;++p}a.sort(A.aU(b,2))
if(p>0)this.bn(a,p)},
bn(a,b){var s,r=a.length
for(;s=r-1,r>0;r=s)if(a[s]===null){a[s]=void 0;--b
if(b===0)break}},
k(a){return A.en(a,"[","]")},
gB(a){return new J.aY(a,a.length,A.Z(a).j("aY<1>"))},
gu(a){return A.cl(a)},
gA(a){return a.length},
t(a,b){if(!(b>=0&&b<a.length))throw A.f(A.e2(a,b))
return a[b]},
q(a,b,c){A.Z(a).c.a(c)
a.$flags&2&&A.a0(a)
if(!(b>=0&&b<a.length))throw A.f(A.e2(a,b))
a[b]=c},
$ih:1,
$in:1}
J.c7.prototype={
bL(a){var s,r,q
if(!Array.isArray(a))return null
s=a.$flags|0
if((s&4)!==0)r="const, "
else if((s&2)!==0)r="unmodifiable, "
else r=(s&1)!==0?"fixed, ":""
q="Instance of '"+A.cm(a)+"'"
if(r==="")return q
return q+" ("+r+"length: "+a.length+")"}}
J.d1.prototype={}
J.aY.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
n(){var s,r=this,q=r.a,p=q.length
if(r.b!==p){q=A.ei(q)
throw A.f(q)}s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0},
$iK:1}
J.b6.prototype={
I(a,b){var s
A.fN(b)
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gW(b)
if(this.gW(a)===s)return 0
if(this.gW(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gW(a){return a===0?1/a<0:a<0},
X(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.f(A.ah(""+a+".toInt()"))},
aY(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.f(A.ah(""+a+".round()"))},
v(a){if(a<0)return-Math.round(-a)
else return Math.round(a)},
bx(a,b,c){if(B.h.I(b,c)>0)throw A.f(A.eM(b))
if(this.I(a,b)<0)return b
if(this.I(a,c)>0)return c
return a},
Y(a,b){var s
if(b>20)throw A.f(A.P(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gW(a))return"-"+s
return s},
k(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gu(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
M(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
return s+b},
aD(a,b){return(a|0)===a?a/b|0:this.br(a,b)},
br(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.f(A.ah("Result of truncating division is "+A.l(s)+": "+A.l(a)+" ~/ "+b))},
a6(a,b){var s
if(a>0)s=this.aC(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
bq(a,b){if(0>b)throw A.f(A.eM(b))
return this.aC(a,b)},
aC(a,b){return b>31?0:a>>>b},
gC(a){return A.au(t.H)},
$im:1,
$iay:1}
J.b4.prototype={
gC(a){return A.au(t.S)},
$ir:1,
$id:1}
J.c9.prototype={
gC(a){return A.au(t.i)},
$ir:1}
J.ak.prototype={
a8(a,b){return new A.cJ(b,a,0)},
K(a,b,c,d){var s=A.bo(b,c,a.length)
return a.substring(0,b)+d+a.substring(s)},
D(a,b,c){var s
if(c<0||c>a.length)throw A.f(A.P(c,0,a.length,null,null))
s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)},
E(a,b){return this.D(a,b,0)},
l(a,b,c){return a.substring(b,A.bo(b,c,a.length))},
N(a,b){return this.l(a,b,null)},
aj(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(0>=o)return A.c(p,0)
if(p.charCodeAt(0)===133){s=J.i_(p,1)
if(s===o)return""}else s=0
r=o-1
if(!(r>=0))return A.c(p,r)
q=p.charCodeAt(r)===133?J.i0(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
b1(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.f(B.aj)
for(s=a,r="";;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
V(a,b,c){var s
if(c<0||c>a.length)throw A.f(A.P(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
aP(a,b){return this.V(a,b,0)},
i(a,b){return A.lo(a,b,0)},
k(a){return a},
gu(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gC(a){return A.au(t.N)},
gA(a){return a.length},
$ir:1,
$id6:1,
$ij:1}
A.al.prototype={
k(a){return"LateInitializationError: "+this.a}}
A.c_.prototype={
gA(a){return this.a.length},
t(a,b){var s=this.a
if(!(b>=0&&b<s.length))return A.c(s,b)
return s.charCodeAt(b)}}
A.d7.prototype={}
A.bc.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
n(){var s,r=this,q=r.a,p=J.eO(q),o=p.gA(q)
if(r.b!==o)throw A.f(A.b0(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.aI(q,s);++r.c
return!0},
$iK:1}
A.Q.prototype={
gB(a){return new A.an(J.bU(this.a),this.b,this.$ti.j("an<1>"))}}
A.an.prototype={
n(){var s,r
for(s=this.a,r=this.b;s.n();)if(r.$1(s.gp()))return!0
return!1},
gp(){return this.a.gp()},
$iK:1}
A.I.prototype={}
A.am.prototype={
q(a,b,c){A.G(this).j("am.E").a(c)
throw A.f(A.ah("Cannot modify an unmodifiable list"))}}
A.aK.prototype={}
A.S.prototype={$r:"+(1,2)",$s:1}
A.b1.prototype={
k(a){return A.eq(this)},
q(a,b,c){var s=A.G(this)
s.c.a(b)
s.y[1].a(c)
A.hN()},
gaJ(){return new A.aO(this.bA(),A.G(this).j("aO<be<1,2>>"))},
bA(){var s=this
return function(){var r=0,q=1,p=[],o,n,m,l,k
return function $async$gaJ(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.gbE(),o=o.gB(o),n=A.G(s),m=n.y[1],n=n.j("be<1,2>")
case 2:if(!o.n()){r=3
break}l=o.gp()
k=s.t(0,l)
r=4
return a.b=new A.be(l,k==null?m.a(k):k,n),1
case 4:r=2
break
case 3:return 0
case 1:return a.c=p.at(-1),3}}}},
$iM:1}
A.W.prototype={
gA(a){return this.b.length},
gaw(){var s=this.$keys
if(s==null){s=Object.keys(this.a)
this.$keys=s}return s},
by(a){if(typeof a!="string")return!1
if("__proto__"===a)return!1
return this.a.hasOwnProperty(a)},
t(a,b){if(!this.by(b))return null
return this.b[this.a[b]]},
aK(a,b){var s,r,q,p
this.$ti.j("~(1,2)").a(b)
s=this.gaw()
r=this.b
for(q=s.length,p=0;p<q;++p)b.$2(s[p],r[p])},
gbE(){return new A.by(this.gaw(),this.$ti.j("by<1>"))}}
A.by.prototype={
gA(a){return this.a.length},
gB(a){var s=this.a
return new A.ao(s,s.length,this.$ti.j("ao<1>"))}}
A.ao.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
n(){var s=this,r=s.c
if(r>=s.b){s.d=null
return!1}s.d=s.a[r]
s.c=r+1
return!0},
$iK:1}
A.b2.prototype={
m(a,b){A.G(this).c.a(b)
A.hO()}}
A.aD.prototype={
gA(a){return this.b},
gB(a){var s,r=this,q=r.$keys
if(q==null){q=Object.keys(r.a)
r.$keys=q}s=q
return new A.ao(s,s.length,r.$ti.j("ao<1>"))},
i(a,b){if("__proto__"===b)return!1
return this.a.hasOwnProperty(b)}}
A.bq.prototype={}
A.d9.prototype={
F(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
A.bl.prototype={
k(a){return"Null check operator used on a null value"}}
A.ca.prototype={
k(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.cu.prototype={
k(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.d5.prototype={
k(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.bF.prototype={
k(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$iaI:1}
A.ab.prototype={
k(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.hh(r==null?"unknown":r)+"'"},
$iaj:1,
gbM(){return this},
$C:"$1",
$R:1,
$D:null}
A.bY.prototype={$C:"$0",$R:0}
A.bZ.prototype={$C:"$2",$R:2}
A.cs.prototype={}
A.cq.prototype={
k(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.hh(s)+"'"}}
A.aB.prototype={
H(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.aB))return!1
return this.$_target===b.$_target&&this.a===b.a},
gu(a){return(A.h9(this.a)^A.cl(this.$_target))>>>0},
k(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.cm(this.a)+"'")}}
A.co.prototype={
k(a){return"RuntimeError: "+this.a}}
A.bb.prototype={
gA(a){return this.a},
t(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.bD(b)},
bD(a){var s,r,q=this.d
if(q==null)return null
s=q[this.aQ(a)]
r=this.aR(s,a)
if(r<0)return null
return s[r].b},
q(a,b,c){var s,r,q,p,o,n,m=this,l=A.G(m)
l.c.a(b)
l.y[1].a(c)
if(typeof b=="string"){s=m.b
m.am(s==null?m.b=m.a4():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=m.c
m.am(r==null?m.c=m.a4():r,b,c)}else{q=m.d
if(q==null)q=m.d=m.a4()
p=m.aQ(b)
o=q[p]
if(o==null)q[p]=[m.a5(b,c)]
else{n=m.aR(o,b)
if(n>=0)o[n].b=c
else o.push(m.a5(b,c))}}},
aK(a,b){var s,r,q=this
A.G(q).j("~(1,2)").a(b)
s=q.e
r=q.r
while(s!=null){b.$2(s.a,s.b)
if(r!==q.r)throw A.f(A.b0(q))
s=s.c}},
am(a,b,c){var s,r=A.G(this)
r.c.a(b)
r.y[1].a(c)
s=a[b]
if(s==null)a[b]=this.a5(b,c)
else s.b=c},
a5(a,b){var s=this,r=A.G(s),q=new A.d2(r.c.a(a),r.y[1].a(b))
if(s.e==null)s.e=s.f=q
else s.f=s.f.c=q;++s.a
s.r=s.r+1&1073741823
return q},
aQ(a){return J.a4(a)&1073741823},
aR(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.cR(a[r].a,b))return r
return-1},
k(a){return A.eq(this)},
a4(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s}}
A.d2.prototype={}
A.e6.prototype={
$1(a){return this.a(a)},
$S:11}
A.e7.prototype={
$2(a,b){return this.a(a,b)},
$S:12}
A.e8.prototype={
$1(a){return this.a(A.a9(a))},
$S:13}
A.ar.prototype={
k(a){return this.aF(!1)},
aF(a){var s,r,q,p,o,n=this.bi(),m=this.av(),l=(a?"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
if(!(q<m.length))return A.c(m,q)
o=m[q]
l=a?l+A.fd(o):l+A.l(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
bi(){var s,r=this.$s
while($.dz.length<=r)B.b.m($.dz,null)
s=$.dz[r]
if(s==null){s=this.bc()
B.b.q($.dz,r,s)}return s},
bc(){var s,r,q,p=this.$r,o=p.indexOf("("),n=p.substring(1,o),m=p.substring(o),l=m==="()"?0:m.replace(/[^,]/g,"").length+1,k=A.w(new Array(l),t.f)
for(s=0;s<l;++s)k[s]=s
if(n!==""){r=n.split(",")
s=r.length
for(q=l;s>0;){--q;--s
B.b.q(k,q,r[s])}}return A.fa(k,t.K)}}
A.aN.prototype={
av(){return[this.a,this.b]},
H(a,b){if(b==null)return!1
return b instanceof A.aN&&this.$s===b.$s&&J.cR(this.a,b.a)&&J.cR(this.b,b.b)},
gu(a){return A.fb(this.$s,this.a,this.b,B.k)}}
A.b7.prototype={
k(a){return"RegExp/"+this.a+"/"+this.b.flags},
gaA(){var s=this,r=s.c
if(r!=null)return r
r=s.b
return s.c=A.f4(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,"g")},
a8(a,b){return new A.cz(this,b,0)},
bh(a,b){var s,r=this.gaA()
if(r==null)r=A.bP(r)
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
return new A.cG(s)},
$id6:1,
$iik:1}
A.cG.prototype={
gal(){return this.b.index},
gaa(){var s=this.b
return s.index+s[0].length},
t(a,b){var s=this.b
if(!(b<s.length))return A.c(s,b)
return s[b]},
$ia3:1,
$ibp:1}
A.cz.prototype={
gB(a){return new A.bv(this.a,this.b,this.c)}}
A.bv.prototype={
gp(){var s=this.d
return s==null?t.d.a(s):s},
n(){var s,r,q,p,o,n,m=this,l=m.b
if(l==null)return!1
s=m.c
r=l.length
if(s<=r){q=m.a
p=q.bh(l,s)
if(p!=null){m.d=p
o=p.gaa()
if(p.b.index===o){s=!1
if(q.b.unicode){q=m.c
n=q+1
if(n<r){if(!(q>=0&&q<r))return A.c(l,q)
q=l.charCodeAt(q)
if(q>=55296&&q<=56319){if(!(n>=0))return A.c(l,n)
s=l.charCodeAt(n)
s=s>=56320&&s<=57343}}}o=(s?o+1:o)+1}m.c=o
return!0}}m.b=m.d=null
return!1},
$iK:1}
A.cr.prototype={
gaa(){return this.a+this.c.length},
t(a,b){if(b!==0)A.a_(A.fe(b,null))
return this.c},
$ia3:1,
gal(){return this.a}}
A.cJ.prototype={
gB(a){return new A.cK(this.a,this.b,this.c)}}
A.cK.prototype={
n(){var s,r,q=this,p=q.c,o=q.b,n=o.length,m=q.a,l=m.length
if(p+n>l){q.d=null
return!1}s=m.indexOf(o,p)
if(s<0){q.c=l+1
q.d=null
return!1}r=s+n
q.d=new A.cr(s,o)
q.c=r===q.c?r+1:r
return!0},
gp(){var s=this.d
s.toString
return s},
$iK:1}
A.dk.prototype={
P(){var s=this.b
if(s===this)throw A.f(new A.al("Local '' has not been initialized."))
return s},
sT(a){if(this.b!==this)throw A.f(new A.al("Local '' has already been initialized."))
this.b=a}}
A.aG.prototype={
gC(a){return B.dE},
$ir:1}
A.bi.prototype={
bk(a,b,c,d){var s=A.P(b,0,c,d,null)
throw A.f(s)},
ap(a,b,c,d){if(b>>>0!==b||b>c)this.bk(a,b,c,d)}}
A.cb.prototype={
gC(a){return B.dF},
$ir:1}
A.F.prototype={
gA(a){return a.length},
$iL:1}
A.bg.prototype={
t(a,b){A.aa(b,a,a.length)
return a[b]},
q(a,b,c){A.dL(c)
a.$flags&2&&A.a0(a)
A.aa(b,a,a.length)
a[b]=c},
$ih:1,
$in:1}
A.bh.prototype={
q(a,b,c){A.aQ(c)
a.$flags&2&&A.a0(a)
A.aa(b,a,a.length)
a[b]=c},
b2(a,b,c,d,e){var s,r,q
t.a.a(d)
a.$flags&2&&A.a0(a,5)
s=a.length
this.ap(a,b,s,"start")
this.ap(a,c,s,"end")
if(b>c)A.a_(A.P(b,0,c,null,null))
r=c-b
if(e<0)A.a_(A.V(e,null))
if(16-e<r)A.a_(A.d8("Not enough elements"))
q=e!==0||16!==r?d.subarray(e,e+r):d
a.set(q,b)
return},
$ih:1,
$in:1}
A.cc.prototype={
gC(a){return B.dG},
$ir:1}
A.cd.prototype={
gC(a){return B.dH},
$ir:1}
A.ce.prototype={
gC(a){return B.dI},
t(a,b){A.aa(b,a,a.length)
return a[b]},
$ir:1}
A.cf.prototype={
gC(a){return B.dJ},
t(a,b){A.aa(b,a,a.length)
return a[b]},
$ir:1}
A.cg.prototype={
gC(a){return B.dK},
t(a,b){A.aa(b,a,a.length)
return a[b]},
$ir:1}
A.ch.prototype={
gC(a){return B.dM},
t(a,b){A.aa(b,a,a.length)
return a[b]},
$ir:1}
A.ci.prototype={
gC(a){return B.dN},
t(a,b){A.aa(b,a,a.length)
return a[b]},
$ir:1}
A.bj.prototype={
gC(a){return B.dO},
gA(a){return a.length},
t(a,b){A.aa(b,a,a.length)
return a[b]},
$ir:1}
A.bk.prototype={
gC(a){return B.dP},
gA(a){return a.length},
t(a,b){A.aa(b,a,a.length)
return a[b]},
$ir:1,
$iev:1}
A.bA.prototype={}
A.bB.prototype={}
A.bC.prototype={}
A.bD.prototype={}
A.Y.prototype={
j(a){return A.bK(v.typeUniverse,this,a)},
G(a){return A.fD(v.typeUniverse,this,a)}}
A.cE.prototype={}
A.dD.prototype={
k(a){return A.N(this.a,null)}}
A.cD.prototype={
k(a){return this.a}}
A.bG.prototype={$ia7:1}
A.dh.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:3}
A.dg.prototype={
$1(a){var s,r
this.a.a=t.M.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:14}
A.di.prototype={
$0(){this.a.$0()},
$S:6}
A.dj.prototype={
$0(){this.a.$0()},
$S:6}
A.dB.prototype={
b5(a,b){if(self.setTimeout!=null)self.setTimeout(A.aU(new A.dC(this,b),0),a)
else throw A.f(A.ah("`setTimeout()` not found."))}}
A.dC.prototype={
$0(){this.b.$0()},
$S:1}
A.as.prototype={
gp(){var s=this.b
return s==null?this.$ti.c.a(s):s},
bo(a,b){var s,r,q
a=A.aQ(a)
b=b
s=this.a
for(;;)try{r=s(this,a,b)
return r}catch(q){b=q
a=1}},
n(){var s,r,q,p,o=this,n=null,m=0
for(;;){s=o.d
if(s!=null)try{if(s.n()){o.b=s.gp()
return!0}else o.d=null}catch(r){n=r
m=1
o.d=null}q=o.bo(m,n)
if(1===q)return!0
if(0===q){o.b=null
p=o.e
if(p==null||p.length===0){o.a=A.fy
return!1}if(0>=p.length)return A.c(p,-1)
o.a=p.pop()
m=0
n=null
continue}if(2===q){m=0
n=null
continue}if(3===q){n=o.c
o.c=null
p=o.e
if(p==null||p.length===0){o.b=null
o.a=A.fy
throw n
return!1}if(0>=p.length)return A.c(p,-1)
o.a=p.pop()
m=1
continue}throw A.f(A.d8("sync*"))}return!1},
bO(a){var s,r,q=this
if(a instanceof A.aO){s=a.a()
r=q.e
if(r==null)r=q.e=[]
B.b.m(r,q.a)
q.a=s
return 2}else{q.d=J.bU(a)
return 2}},
$iK:1}
A.aO.prototype={
gB(a){return new A.as(this.a(),this.$ti.j("as<1>"))}}
A.a2.prototype={
k(a){return A.l(this.a)},
$it:1,
gL(){return this.b}}
A.cB.prototype={
aH(a){var s=this.a
if((s.a&30)!==0)throw A.f(A.d8("Future already completed"))
s.ao(A.jr(a,null))}}
A.bw.prototype={}
A.bx.prototype={
bF(a){if((this.c&15)!==6)return!0
return this.b.b.ah(t.bG.a(this.d),a.a,t.y,t.K)},
bC(a){var s,r=this,q=r.e,p=null,o=t.z,n=t.K,m=a.a,l=r.b.b
if(t.Q.b(q))p=l.bJ(q,m,a.b,o,n,t.l)
else p=l.ah(t.v.a(q),m,o,n)
try{o=r.$ti.j("2/").a(p)
return o}catch(s){if(t.b7.b(A.cQ(s))){if((r.c&1)!==0)throw A.f(A.V("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.f(A.V("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.R.prototype={
ai(a,b,c){var s,r,q=this.$ti
q.G(c).j("1/(2)").a(a)
s=$.E
if(s===B.i){if(!t.Q.b(b)&&!t.v.b(b))throw A.f(A.eU(b,"onError",u.c))}else{c.j("@<0/>").G(q.c).j("1(2)").a(a)
b=A.jH(b,s)}r=new A.R(s,c.j("R<0>"))
this.an(new A.bx(r,3,a,b,q.j("@<1>").G(c).j("bx<1,2>")))
return r},
bp(a){this.a=this.a&1|16
this.c=a},
O(a){this.a=a.a&30|this.a&1
this.c=a.c},
an(a){var s,r=this,q=r.a
if(q<=3){a.a=t.F.a(r.c)
r.c=a}else{if((q&4)!==0){s=t._.a(r.c)
if((s.a&24)===0){s.an(a)
return}r.O(s)}A.cO(null,null,r.b,t.M.a(new A.dn(r,a)))}},
aB(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=3){r=t.F.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){n=t._.a(m.c)
if((n.a&24)===0){n.aB(a)
return}m.O(n)}l.a=m.S(a)
A.cO(null,null,m.b,t.M.a(new A.ds(l,m)))}},
R(){var s=t.F.a(this.c)
this.c=null
return this.S(s)},
S(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
bb(a){var s,r=this
r.$ti.c.a(a)
s=r.R()
r.a=8
r.c=a
A.aM(r,s)},
ba(a){var s,r,q=this
if((a.a&16)!==0){s=q.b===a.b
s=!(s||s)}else s=!1
if(s)return
r=q.R()
q.O(a)
A.aM(q,r)},
ar(a){var s=this.R()
this.bp(a)
A.aM(this,s)},
b7(a){var s=this.$ti
s.j("1/").a(a)
if(s.j("aF<1>").b(a)){this.b9(a)
return}this.b8(a)},
b8(a){var s=this
s.$ti.c.a(a)
s.a^=2
A.cO(null,null,s.b,t.M.a(new A.dq(s,a)))},
b9(a){A.ew(this.$ti.j("aF<1>").a(a),this,!1)
return},
ao(a){this.a^=2
A.cO(null,null,this.b,t.M.a(new A.dp(this,a)))},
$iaF:1}
A.dn.prototype={
$0(){A.aM(this.a,this.b)},
$S:1}
A.ds.prototype={
$0(){A.aM(this.b,this.a.a)},
$S:1}
A.dr.prototype={
$0(){A.ew(this.a.a,this.b,!0)},
$S:1}
A.dq.prototype={
$0(){this.a.bb(this.b)},
$S:1}
A.dp.prototype={
$0(){this.a.ar(this.b)},
$S:1}
A.dv.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
j=q.b.b.bI(t.bd.a(q.d),t.z)}catch(p){s=A.cQ(p)
r=A.bS(p)
if(k.c&&t.n.a(k.b.a.c).a===s){q=k.a
q.c=t.n.a(k.b.a.c)}else{q=s
o=r
if(o==null)o=A.em(q)
n=k.a
n.c=new A.a2(q,o)
q=n}q.b=!0
return}if(j instanceof A.R&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=t.n.a(j.c)
q.b=!0}return}if(j instanceof A.R){m=k.b.a
l=new A.R(m.b,m.$ti)
j.ai(new A.dw(l,m),new A.dx(l),t.o)
q=k.a
q.c=l
q.b=!1}},
$S:1}
A.dw.prototype={
$1(a){this.a.ba(this.b)},
$S:3}
A.dx.prototype={
$2(a,b){A.bP(a)
t.l.a(b)
this.a.ar(new A.a2(a,b))},
$S:15}
A.du.prototype={
$0(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.ah(o.j("2/(1)").a(p.d),m,o.j("2/"),n)}catch(l){s=A.cQ(l)
r=A.bS(l)
q=s
p=r
if(p==null)p=A.em(q)
o=this.a
o.c=new A.a2(q,p)
o.b=!0}},
$S:1}
A.dt.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=t.n.a(l.a.a.c)
p=l.b
if(p.a.bF(s)&&p.a.e!=null){p.c=p.a.bC(s)
p.b=!1}}catch(o){r=A.cQ(o)
q=A.bS(o)
p=t.n.a(l.a.a.c)
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.em(p)
m=l.b
m.c=new A.a2(p,n)
p=m}p.b=!0}},
$S:1}
A.cA.prototype={}
A.bO.prototype={$ifq:1}
A.dX.prototype={
$0(){A.hR(this.a,this.b)},
$S:1}
A.cH.prototype={
bK(a){var s,r,q
t.M.a(a)
try{if(B.i===$.E){a.$0()
return}A.fX(null,null,this,a,t.o)}catch(q){s=A.cQ(q)
r=A.bS(q)
A.eJ(A.bP(s),t.l.a(r))}},
bv(a){return new A.dA(this,t.M.a(a))},
bI(a,b){b.j("0()").a(a)
if($.E===B.i)return a.$0()
return A.fX(null,null,this,a,b)},
ah(a,b,c,d){c.j("@<0>").G(d).j("1(2)").a(a)
d.a(b)
if($.E===B.i)return a.$1(b)
return A.jK(null,null,this,a,b,c,d)},
bJ(a,b,c,d,e,f){d.j("@<0>").G(e).G(f).j("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.E===B.i)return a.$2(b,c)
return A.jJ(null,null,this,a,b,c,d,e,f)}}
A.dA.prototype={
$0(){return this.a.bK(this.b)},
$S:1}
A.ap.prototype={
gB(a){var s=this,r=new A.bz(s,s.r,A.G(s).j("bz<1>"))
r.c=s.e
return r},
gA(a){return this.a},
i(a,b){var s,r
if(b!=="__proto__"){s=this.b
if(s==null)return!1
return t.g.a(s[b])!=null}else{r=this.be(b)
return r}},
be(a){var s=this.d
if(s==null)return!1
return this.a3(s[this.a_(a)],a)>=0},
m(a,b){var s,r,q=this
A.G(q).c.a(b)
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.aq(s==null?q.b=A.ex():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.aq(r==null?q.c=A.ex():r,b)}else return q.b6(b)},
b6(a){var s,r,q,p=this
A.G(p).c.a(a)
s=p.d
if(s==null)s=p.d=A.ex()
r=p.a_(a)
q=s[r]
if(q==null)s[r]=[p.Z(a)]
else{if(p.a3(q,a)>=0)return!1
q.push(p.Z(a))}return!0},
bH(a,b){var s
if(b!=="__proto__")return this.bm(this.b,b)
else{s=this.bl(b)
return s}},
bl(a){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.a_(a)
r=n[s]
q=o.a3(r,a)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.aG(p)
return!0},
aq(a,b){A.G(this).c.a(b)
if(t.g.a(a[b])!=null)return!1
a[b]=this.Z(b)
return!0},
bm(a,b){var s
if(a==null)return!1
s=t.g.a(a[b])
if(s==null)return!1
this.aG(s)
delete a[b]
return!0},
az(){this.r=this.r+1&1073741823},
Z(a){var s,r=this,q=new A.cF(A.G(r).c.a(a))
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.az()
return q},
aG(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.az()},
a_(a){return J.a4(a)&1073741823},
a3(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.cR(a[r].a,b))return r
return-1}}
A.cF.prototype={}
A.bz.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
n(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.f(A.b0(q))
else if(r==null){s.d=null
return!1}else{s.d=s.$ti.j("1?").a(r.a)
s.c=r.b
return!0}},
$iK:1}
A.q.prototype={
gB(a){return new A.bc(a,this.gA(a),A.aV(a).j("bc<q.E>"))},
aI(a,b){return this.t(a,b)},
bB(a,b,c,d){var s
A.aV(a).j("q.E?").a(d)
A.bo(b,c,this.gA(a))
for(s=b;s<c;++s)this.q(a,s,d)},
k(a){return A.en(a,"[","]")},
$ih:1,
$in:1}
A.bd.prototype={
gA(a){return this.a},
k(a){return A.eq(this)},
$iM:1}
A.d3.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.l(a)
r.a=(r.a+=s)+": "
s=A.l(b)
r.a+=s},
$S:16}
A.cM.prototype={
q(a,b,c){var s=this.$ti
s.c.a(b)
s.y[1].a(c)
throw A.f(A.ah("Cannot modify unmodifiable map"))}}
A.bf.prototype={
t(a,b){return this.a.t(0,b)},
q(a,b,c){var s=this.$ti
this.a.q(0,s.c.a(b),s.y[1].a(c))},
gA(a){var s=this.a
return s.gA(s)},
k(a){return this.a.k(0)},
$iM:1}
A.aL.prototype={}
A.af.prototype={
bt(a,b){var s
A.G(this).j("h<1>").a(b)
for(s=b.gB(b);s.n();)this.m(0,s.gp())},
k(a){return A.en(this,"{","}")},
J(a,b){var s,r,q=this.gB(this)
if(!q.n())return""
s=J.aX(q.gp())
if(!q.n())return s
if(b.length===0){r=s
do r+=A.l(q.gp())
while(q.n())}else{r=s
do r=r+b+A.l(q.gp())
while(q.n())}return r.charCodeAt(0)==0?r:r},
$ih:1,
$icp:1}
A.bE.prototype={}
A.bL.prototype={}
A.dH.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){}return null},
$S:7}
A.dG.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){}return null},
$S:7}
A.bX.prototype={
bG(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a1="Invalid base64 encoding length ",a2=a3.length
a5=A.bo(a4,a5,a2)
s=$.ht()
for(r=s.length,q=a4,p=q,o=null,n=-1,m=-1,l=0;q<a5;q=k){k=q+1
if(!(q<a2))return A.c(a3,q)
j=a3.charCodeAt(q)
if(j===37){i=k+2
if(i<=a5){if(!(k<a2))return A.c(a3,k)
h=A.e5(a3.charCodeAt(k))
g=k+1
if(!(g<a2))return A.c(a3,g)
f=A.e5(a3.charCodeAt(g))
e=h*16+f-(f&256)
if(e===37)e=-1
k=i}else e=-1}else e=j
if(0<=e&&e<=127){if(!(e>=0&&e<r))return A.c(s,e)
d=s[e]
if(d>=0){if(!(d<64))return A.c(a0,d)
e=a0.charCodeAt(d)
if(e===j)continue
j=e}else{if(d===-1){if(n<0){g=o==null?null:o.a.length
if(g==null)g=0
n=g+(q-p)
m=q}++l
if(j===61)continue}j=e}if(d!==-2){if(o==null){o=new A.J("")
g=o}else g=o
g.a+=B.a.l(a3,p,q)
c=A.ae(j)
g.a+=c
p=k
continue}}throw A.f(A.H("Invalid base64 data",a3,q))}if(o!=null){a2=B.a.l(a3,p,a5)
a2=o.a+=a2
r=a2.length
if(n>=0)A.eV(a3,m,a5,n,l,r)
else{b=B.h.M(r-1,4)+1
if(b===1)throw A.f(A.H(a1,a3,a5))
while(b<4){a2+="="
o.a=a2;++b}}a2=o.a
return B.a.K(a3,a4,a5,a2.charCodeAt(0)==0?a2:a2)}a=a5-a4
if(n>=0)A.eV(a3,m,a5,n,l,a)
else{b=B.h.M(a,4)
if(b===1)throw A.f(A.H(a1,a3,a5))
if(b>1)a3=B.a.K(a3,a5,a5,b===2?"==":"=")}return a3}}
A.cS.prototype={}
A.aC.prototype={}
A.c1.prototype={}
A.c3.prototype={}
A.cy.prototype={}
A.df.prototype={
a9(a){var s,r,q,p,o=a.length,n=A.bo(0,null,o)
if(n===0)return new Uint8Array(0)
s=n*3
r=new Uint8Array(s)
q=new A.dI(r)
if(q.bj(a,0,n)!==n){p=n-1
if(!(p>=0&&p<o))return A.c(a,p)
q.a7()}return new Uint8Array(r.subarray(0,A.je(0,q.b,s)))}}
A.dI.prototype={
a7(){var s,r=this,q=r.c,p=r.b,o=r.b=p+1
q.$flags&2&&A.a0(q)
s=q.length
if(!(p<s))return A.c(q,p)
q[p]=239
p=r.b=o+1
if(!(o<s))return A.c(q,o)
q[o]=191
r.b=p+1
if(!(p<s))return A.c(q,p)
q[p]=189},
bs(a,b){var s,r,q,p,o,n=this
if((b&64512)===56320){s=65536+((a&1023)<<10)|b&1023
r=n.c
q=n.b
p=n.b=q+1
r.$flags&2&&A.a0(r)
o=r.length
if(!(q<o))return A.c(r,q)
r[q]=s>>>18|240
q=n.b=p+1
if(!(p<o))return A.c(r,p)
r[p]=s>>>12&63|128
p=n.b=q+1
if(!(q<o))return A.c(r,q)
r[q]=s>>>6&63|128
n.b=p+1
if(!(p<o))return A.c(r,p)
r[p]=s&63|128
return!0}else{n.a7()
return!1}},
bj(a,b,c){var s,r,q,p,o,n,m,l,k=this
if(b!==c){s=c-1
if(!(s>=0&&s<a.length))return A.c(a,s)
s=(a.charCodeAt(s)&64512)===55296}else s=!1
if(s)--c
for(s=k.c,r=s.$flags|0,q=s.length,p=a.length,o=b;o<c;++o){if(!(o<p))return A.c(a,o)
n=a.charCodeAt(o)
if(n<=127){m=k.b
if(m>=q)break
k.b=m+1
r&2&&A.a0(s)
s[m]=n}else{m=n&64512
if(m===55296){if(k.b+4>q)break
m=o+1
if(!(m<p))return A.c(a,m)
if(k.bs(n,a.charCodeAt(m)))o=m}else if(m===56320){if(k.b+3>q)break
k.a7()}else if(n<=2047){m=k.b
l=m+1
if(l>=q)break
k.b=l
r&2&&A.a0(s)
if(!(m<q))return A.c(s,m)
s[m]=n>>>6|192
k.b=l+1
s[l]=n&63|128}else{m=k.b
if(m+2>=q)break
l=k.b=m+1
r&2&&A.a0(s)
if(!(m<q))return A.c(s,m)
s[m]=n>>>12|224
m=k.b=l+1
if(!(l<q))return A.c(s,l)
s[l]=n>>>6&63|128
k.b=m+1
if(!(m<q))return A.c(s,m)
s[m]=n&63|128}}}return o}}
A.de.prototype={
a9(a){return new A.dF(this.a).bf(t.L.a(a),0,null,!0)}}
A.dF.prototype={
bf(a,b,c,d){var s,r,q,p,o,n,m,l=this
t.L.a(a)
s=A.bo(b,c,J.el(a))
if(b===s)return""
if(a instanceof Uint8Array){r=a
q=r
p=0}else{q=A.j8(a,b,s)
s-=b
p=b
b=0}if(s-b>=15){o=l.a
n=A.j7(o,q,b,s)
if(n!=null){if(!o)return n
if(n.indexOf("\ufffd")<0)return n}}n=l.a0(q,b,s,!0)
o=l.b
if((o&1)!==0){m=A.j9(o)
l.b=0
throw A.f(A.H(m,a,p+l.c))}return n},
a0(a,b,c,d){var s,r,q=this
if(c-b>1000){s=B.h.aD(b+c,2)
r=q.a0(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.a0(a,s,c,d)}return q.bz(a,b,c,d)},
bz(a,b,a0,a1){var s,r,q,p,o,n,m,l,k=this,j="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE",i=" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA",h=65533,g=k.b,f=k.c,e=new A.J(""),d=b+1,c=a.length
if(!(b>=0&&b<c))return A.c(a,b)
s=a[b]
$label0$0:for(r=k.a;;){for(;;d=o){if(!(s>=0&&s<256))return A.c(j,s)
q=j.charCodeAt(s)&31
f=g<=32?s&61694>>>q:(s&63|f<<6)>>>0
p=g+q
if(!(p>=0&&p<144))return A.c(i,p)
g=i.charCodeAt(p)
if(g===0){p=A.ae(f)
e.a+=p
if(d===a0)break $label0$0
break}else if((g&1)!==0){if(r)switch(g){case 69:case 67:p=A.ae(h)
e.a+=p
break
case 65:p=A.ae(h)
e.a+=p;--d
break
default:p=A.ae(h)
e.a=(e.a+=p)+p
break}else{k.b=g
k.c=d-1
return""}g=0}if(d===a0)break $label0$0
o=d+1
if(!(d>=0&&d<c))return A.c(a,d)
s=a[d]}o=d+1
if(!(d>=0&&d<c))return A.c(a,d)
s=a[d]
if(s<128){for(;;){if(!(o<a0)){n=a0
break}m=o+1
if(!(o>=0&&o<c))return A.c(a,o)
s=a[o]
if(s>=128){n=m-1
o=m
break}o=m}if(n-d<20)for(l=d;l<n;++l){if(!(l<c))return A.c(a,l)
p=A.ae(a[l])
e.a+=p}else{p=A.fi(a,d,n)
e.a+=p}if(n===a0)break $label0$0
d=o}else d=o}if(a1&&g>32)if(r){c=A.ae(h)
e.a+=c}else{k.b=77
k.c=a0
return""}k.b=g
k.c=f
c=e.a
return c.charCodeAt(0)==0?c:c}}
A.d_.prototype={
$0(){var s=this
return A.a_(A.V("("+s.a+", "+s.b+", "+s.c+", "+s.d+", "+s.e+", "+s.f+", "+s.r+", "+s.w+")",null))},
$S:17}
A.aE.prototype={
H(a,b){var s
if(b==null)return!1
s=!1
if(b instanceof A.aE)if(this.a===b.a)s=this.b===b.b
return s},
gu(a){return A.fb(this.a,this.b,B.k,B.k)},
I(a,b){var s
t.k.a(b)
s=B.h.I(this.a,b.a)
if(s!==0)return s
return B.h.I(this.b,b.b)},
k(a){var s=this,r=A.hP(A.ig(s)),q=A.c2(A.id(s)),p=A.c2(A.i9(s)),o=A.c2(A.ia(s)),n=A.c2(A.ic(s)),m=A.c2(A.ie(s)),l=A.f0(A.ib(s)),k=s.b,j=k===0?"":A.f0(k)
return r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l+j}}
A.dl.prototype={
k(a){return this.au()}}
A.t.prototype={
gL(){return A.i8(this)}}
A.bV.prototype={
k(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.d0(s)
return"Assertion failed"}}
A.a7.prototype={}
A.U.prototype={
ga2(){return"Invalid argument"+(!this.a?"(s)":"")},
ga1(){return""},
k(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+A.l(p),n=s.ga2()+q+o
if(!s.a)return n
return n+s.ga1()+": "+A.d0(s.gad())},
gad(){return this.b}}
A.bn.prototype={
gad(){return A.fO(this.b)},
ga2(){return"RangeError"},
ga1(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.l(q):""
else if(q==null)s=": Not greater than or equal to "+A.l(r)
else if(q>r)s=": Not in inclusive range "+A.l(r)+".."+A.l(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.l(r)
return s}}
A.c5.prototype={
gad(){return A.aQ(this.b)},
ga2(){return"RangeError"},
ga1(){if(A.aQ(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gA(a){return this.f}}
A.bt.prototype={
k(a){return"Unsupported operation: "+this.a}}
A.ct.prototype={
k(a){return"UnimplementedError: "+this.a}}
A.bs.prototype={
k(a){return"Bad state: "+this.a}}
A.c0.prototype={
k(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.d0(s)+"."}}
A.cj.prototype={
k(a){return"Out of Memory"},
gL(){return null},
$it:1}
A.br.prototype={
k(a){return"Stack Overflow"},
gL(){return null},
$it:1}
A.dm.prototype={
k(a){return"Exception: "+this.a}}
A.a6.prototype={
k(a){var s,r,q,p,o,n,m,l,k,j,i,h=this.a,g=""!==h?"FormatException: "+h:"FormatException",f=this.c,e=this.b
if(typeof e=="string"){if(f!=null)s=f<0||f>e.length
else s=!1
if(s)f=null
if(f==null){if(e.length>78)e=B.a.l(e,0,75)+"..."
return g+"\n"+e}for(r=e.length,q=1,p=0,o=!1,n=0;n<f;++n){if(!(n<r))return A.c(e,n)
m=e.charCodeAt(n)
if(m===10){if(p!==n||!o)++q
p=n+1
o=!1}else if(m===13){++q
p=n+1
o=!0}}g=q>1?g+(" (at line "+q+", character "+(f-p+1)+")\n"):g+(" (at character "+(f+1)+")\n")
for(n=f;n<r;++n){if(!(n>=0))return A.c(e,n)
m=e.charCodeAt(n)
if(m===10||m===13){r=n
break}}l=""
if(r-p>78){k="..."
if(f-p<75){j=p+75
i=p}else{if(r-f<75){i=r-75
j=r
k=""}else{i=f-36
j=f+36}l="..."}}else{j=r
i=p
k=""}return g+l+B.a.l(e,i,j)+k+"\n"+B.a.b1(" ",f-i+l.length)+"^\n"}else return f!=null?g+(" (at offset "+A.l(f)+")"):g}}
A.h.prototype={
U(a,b,c,d){var s,r
d.a(b)
A.G(this).G(d).j("1(1,h.E)").a(c)
for(s=this.gB(this),r=b;s.n();)r=c.$2(r,s.gp())
return r},
gA(a){var s,r=this.gB(this)
for(s=0;r.n();)++s
return s},
aI(a,b){var s,r
A.ff(b,"index")
s=this.gB(this)
for(r=b;s.n();){if(r===0)return s.gp();--r}throw A.f(A.f1(b,b-r,this,"index"))},
k(a){return A.hX(this,"(",")")}}
A.be.prototype={
k(a){return"MapEntry("+A.l(this.a)+": "+A.l(this.b)+")"}}
A.D.prototype={
gu(a){return A.o.prototype.gu.call(this,0)},
k(a){return"null"}}
A.o.prototype={$io:1,
H(a,b){return this===b},
gu(a){return A.cl(this)},
k(a){return"Instance of '"+A.cm(this)+"'"},
gC(a){return A.kv(this)},
toString(){return this.k(this)}}
A.cL.prototype={
k(a){return""},
$iaI:1}
A.J.prototype={
gA(a){return this.a.length},
k(a){var s=this.a
return s.charCodeAt(0)==0?s:s},
$iio:1}
A.dd.prototype={
$2(a,b){var s,r,q,p
t.G.a(a)
A.a9(b)
s=B.a.aP(b,"=")
if(s===-1){if(b!=="")a.q(0,A.eC(b,0,b.length,this.a,!0),"")}else if(s!==0){r=B.a.l(b,0,s)
q=B.a.N(b,s+1)
p=this.a
a.q(0,A.eC(r,0,r.length,p,!0),A.eC(q,0,q.length,p,!0))}return a},
$S:18}
A.dc.prototype={
$2(a,b){throw A.f(A.H("Illegal IPv6 address, "+a,this.a,b))},
$S:19}
A.bM.prototype={
gaE(){var s,r,q,p,o=this,n=o.w
if(n===$){s=o.a
r=s.length!==0?s+":":""
q=o.c
p=q==null
if(!p||s==="file"){s=r+"//"
r=o.b
if(r.length!==0)s=s+r+"@"
if(!p)s+=q
r=o.d
if(r!=null)s=s+":"+A.l(r)}else s=r
s+=o.e
r=o.f
if(r!=null)s=s+"?"+r
r=o.r
if(r!=null)s=s+"#"+r
n=o.w=s.charCodeAt(0)==0?s:s}return n},
gu(a){var s,r=this,q=r.y
if(q===$){s=B.a.gu(r.gaE())
r.y!==$&&A.hf()
r.y=s
q=s}return q},
gaW(){var s,r=this,q=r.z
if(q===$){s=r.f
s=A.fp(s==null?"":s)
r.z!==$&&A.hf()
q=r.z=new A.aL(s,t.h)}return q},
gb_(){return this.b},
gac(){var s=this.c
if(s==null)return""
if(B.a.E(s,"[")&&!B.a.D(s,"v",1))return B.a.l(s,1,s.length-1)
return s},
gaf(){var s=this.d
return s==null?A.fE(this.a):s},
gag(){var s=this.f
return s==null?"":s},
gaL(){var s=this.r
return s==null?"":s},
gaM(){return this.c!=null},
gaO(){return this.f!=null},
gaN(){return this.r!=null},
k(a){return this.gaE()},
H(a,b){var s,r,q,p=this
if(b==null)return!1
if(p===b)return!0
s=!1
if(t.R.b(b))if(p.a===b.gak())if(p.c!=null===b.gaM())if(p.b===b.gb_())if(p.gac()===b.gac())if(p.gaf()===b.gaf())if(p.e===b.gaV()){r=p.f
q=r==null
if(!q===b.gaO()){if(q)r=""
if(r===b.gag()){r=p.r
q=r==null
if(!q===b.gaN()){s=q?"":r
s=s===b.gaL()}}}}return s},
$icv:1,
gak(){return this.a},
gaV(){return this.e}}
A.db.prototype={
gaZ(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.b
if(0>=m.length)return A.c(m,0)
s=o.a
m=m[0]+1
r=B.a.V(s,"?",m)
q=s.length
if(r>=0){p=A.bN(s,r+1,q,256,!1,!1)
q=r}else p=n
m=o.c=new A.cC("data","",n,n,A.bN(s,m,q,128,!1,!1),p,n)}return m},
k(a){var s,r=this.b
if(0>=r.length)return A.c(r,0)
s=this.a
return r[0]===-1?"data:"+s:s}}
A.cI.prototype={
gaM(){return this.c>0},
gaO(){return this.f<this.r},
gaN(){return this.r<this.a.length},
gak(){var s=this.w
return s==null?this.w=this.bd():s},
bd(){var s,r=this,q=r.b
if(q<=0)return""
s=q===4
if(s&&B.a.E(r.a,"http"))return"http"
if(q===5&&B.a.E(r.a,"https"))return"https"
if(s&&B.a.E(r.a,"file"))return"file"
if(q===7&&B.a.E(r.a,"package"))return"package"
return B.a.l(r.a,0,q)},
gb_(){var s=this.c,r=this.b+3
return s>r?B.a.l(this.a,r,s-1):""},
gac(){var s=this.c
return s>0?B.a.l(this.a,s,this.d):""},
gaf(){var s,r=this
if(r.c>0&&r.d+1<r.e)return A.kF(B.a.l(r.a,r.d+1,r.e))
s=r.b
if(s===4&&B.a.E(r.a,"http"))return 80
if(s===5&&B.a.E(r.a,"https"))return 443
return 0},
gaV(){return B.a.l(this.a,this.e,this.f)},
gag(){var s=this.f,r=this.r
return s<r?B.a.l(this.a,s+1,r):""},
gaL(){var s=this.r,r=this.a
return s<r.length?B.a.N(r,s+1):""},
gaW(){if(this.f>=this.r)return B.aX
return new A.aL(A.fp(this.gag()),t.h)},
gu(a){var s=this.x
return s==null?this.x=B.a.gu(this.a):s},
H(a,b){if(b==null)return!1
if(this===b)return!0
return t.R.b(b)&&this.a===b.k(0)},
k(a){return this.a},
$icv:1}
A.cC.prototype={}
A.d4.prototype={
k(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."}}
A.eg.prototype={
$1(a){var s=this.a,r=s.$ti
a=r.j("1/?").a(this.b.j("0/?").a(a))
s=s.a
if((s.a&30)!==0)A.a_(A.d8("Future already completed"))
s.b7(r.j("1/").a(a))
return null},
$S:8}
A.eh.prototype={
$1(a){if(a==null)return this.a.aH(new A.d4(a===undefined))
return this.a.aH(a)},
$S:8}
A.cZ.prototype={}
A.cT.prototype={
bw(a){var s,r=this.bg(a),q=A.Z(r),p=q.j("C(1)")
q=q.j("Q<1>")
s=t.i
return new A.cZ(r,new A.Q(r,p.a(new A.cU()),q).U(0,0,new A.cV(),s),new A.Q(r,p.a(new A.cW()),q).U(0,0,new A.cX(),s))},
bg(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=A.bm(a.a,null)
if(g==null)g=0
s=a.x
r=A.cn(s)
if(r==null)r=0
q=A.bm(a.y,null)
if(q==null)q=1
q=Math.max(1,q)
p=A.cn("")
if(p==null)p=0
o=A.bm("",null)
if(o==null)o=0
n=A.cn(a.r)
if(n==null)n=99
m=a.d
l=A.kX(m)
k=new A.b_(a,g,r,q,p,o,n,l)
k.x=B.d.v(r*12*0.13)
n=k.y=r/q
s=k.z=B.a.aj(s).length!==0
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
g=A.w([],t.E)
j=new A.aZ(g)
for(i=0;i<41;++i){h=B.aO[i]
j.b=h.a
h.b.$3(a,k,j)
j.b=""}g=A.fa(g,t.p)
g=A.w(g.slice(0),A.Z(g))
return g}}
A.cU.prototype={
$1(a){return t.p.a(a).r==="monthly"},
$S:4}
A.cV.prototype={
$2(a,b){return A.dL(a)+t.p.a(b).w},
$S:9}
A.cW.prototype={
$1(a){return t.p.a(a).r==="once"},
$S:4}
A.cX.prototype={
$2(a,b){return A.dL(a)+t.p.a(b).w},
$S:9}
A.b_.prototype={
gaX(){var s=this.a.c
return s==="employed"||s==="self"||s==="ip"},
gaT(){var s=this.a.w
return!s.i(0,"excess_property")&&!s.i(0,"high_deposits")&&!s.i(0,"alimony_debt")},
gaU(){if(this.c>0)return!0
var s=this.a
if(s.w.i(0,"valid_zero_income"))return!0
s=s.c
return s==="student"||s==="pensioner"||s==="caregiver"||s==="matleave"},
gaS(){var s=this,r=s.CW
r===$&&A.p()
if(r)r=(!s.gaX()||s.c>=18062)&&s.gaT()&&s.gaU()
else r=!1
return r}}
A.aZ.prototype={
h(a,b,c,d,e,f,g,h,i){B.b.m(this.a,new A.a5(this.b,e,b,f,h,i,g))}}
A.k.prototype={}
A.ej.prototype={
$1(a){var s=this.a,r=s.ch
r===$&&A.p()
return r+this.b*a*this.c/s.d},
$S:20}
A.y.prototype={}
A.i.prototype={}
A.b.prototype={}
A.c4.prototype={
au(){return"EventTarget."+this.b}}
A.X.prototype={}
A.e0.prototype={
$1(a){var s,r,q,p
t.Y.a(a)
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
$S:21}
A.e1.prototype={
$2(a,b){var s=t.Y
return s.a(a).e.I(0,s.a(b).e)},
$S:22}
A.a5.prototype={}
A.cY.prototype={}
A.aA.prototype={
au(){return"BenefitTone."+this.b}}
A.x.prototype={}
A.bu.prototype={}
A.e4.prototype={
$1(a){return A.l(a.t(0,1))+" "},
$S:23}
A.ea.prototype={
$1(a){return t.B.a(a).a!=="99"},
$S:24}
A.eb.prototype={
$1(a){A.a(a)
return A.dT()},
$S:2}
A.ec.prototype={
$1(a){A.a(a)
return A.dT()},
$S:2}
A.ed.prototype={
$1(a){A.a(a)
return A.jM()},
$S:2}
A.ee.prototype={
$1(a){A.a(a)
return A.jf()},
$S:2}
A.dY.prototype={
$1(a){},
$S:25}
A.dZ.prototype={
$1(a){},
$S:3}
A.e_.prototype={
$2(a,b){var s=A.z(A.a(v.G.document).getElementById(a))
if(s==null)s=null
else{s.href=b
s=b}return s},
$S:26}
A.dO.prototype={
$1(a){var s=this.a
if(s==null)s=null
else{s.textContent="\u0421\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u043e"
s="\u0421\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u043e"}return s},
$S:27}
A.dP.prototype={
$1(a){var s=this.a
if(s==null)s=null
else{s.textContent="\u041d\u0435 \u0432\u044b\u0448\u043b\u043e \u0441\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c"
s="\u041d\u0435 \u0432\u044b\u0448\u043b\u043e \u0441\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c"}return s},
$S:28}
A.dV.prototype={
$1(a){return A.a9(a).length!==0},
$S:29}
A.dW.prototype={
$1(a){var s
A.a(a)
s=this.a
s.m(0,this.b.a)
A.a(A.a(v.G.window).localStorage).setItem("dismissed_events",s.J(0,","))
this.c.remove()},
$S:10}
A.dS.prototype={
$1(a){return t.x.a(a).a===this.a},
$S:30}
A.dN.prototype={
$1(a){var s,r
A.a(a)
s=this.a.a
r=this.b
if($.eE.bH(0,s))A.a(r.classList).remove("on")
else{$.eE.m(0,s)
A.a(r.classList).add("on")}A.dT()},
$S:10}
A.dU.prototype={
$1(a){return t.p.a(a).c===this.a.a},
$S:4};(function aliases(){var s=J.ad.prototype
s.b4=s.k})();(function installTearOffs(){var s=hunkHelpers._static_1,r=hunkHelpers._static_0,q=hunkHelpers.installStaticTearOff
s(A,"jW","iz",5)
s(A,"jX","iA",5)
s(A,"jY","iB",5)
r(A,"h4","jP",1)
q(A,"ko",3,null,["$3"],["kU"],0,0)
q(A,"kn",3,null,["$3"],["kR"],0,0)
q(A,"kl",3,null,["$3"],["kM"],0,0)
q(A,"kh",3,null,["$3"],["jZ"],0,0)
q(A,"kp",3,null,["$3"],["lE"],0,0)
q(A,"kj",3,null,["$3"],["ke"],0,0)
q(A,"km",3,null,["$3"],["kQ"],0,0)
q(A,"kk",3,null,["$3"],["kf"],0,0)
q(A,"ki",3,null,["$3"],["ka"],0,0)
q(A,"kq",3,null,["$3"],["lG"],0,0)
q(A,"kg",3,null,["$3"],["jU"],0,0)
q(A,"l2",3,null,["$3"],["kS"],0,0)
q(A,"l_",3,null,["$3"],["k0"],0,0)
q(A,"l5",3,null,["$3"],["l6"],0,0)
q(A,"l1",3,null,["$3"],["kP"],0,0)
q(A,"l0",3,null,["$3"],["k7"],0,0)
q(A,"l3",3,null,["$3"],["kY"],0,0)
q(A,"l4",3,null,["$3"],["kZ"],0,0)
q(A,"ll",3,null,["$3"],["ls"],0,0)
q(A,"lm",3,null,["$3"],["lD"],0,0)
q(A,"lf",3,null,["$3"],["kH"],0,0)
q(A,"le",3,null,["$3"],["ky"],0,0)
q(A,"lh",3,null,["$3"],["kT"],0,0)
q(A,"lb",3,null,["$3"],["k9"],0,0)
q(A,"li",3,null,["$3"],["kW"],0,0)
q(A,"l9",3,null,["$3"],["k2"],0,0)
q(A,"lk",3,null,["$3"],["l8"],0,0)
q(A,"lg",3,null,["$3"],["kO"],0,0)
q(A,"ln",3,null,["$3"],["lF"],0,0)
q(A,"ld",3,null,["$3"],["kx"],0,0)
q(A,"lj",3,null,["$3"],["l7"],0,0)
q(A,"la",3,null,["$3"],["k3"],0,0)
q(A,"lc",3,null,["$3"],["kb"],0,0)
q(A,"lu",3,null,["$3"],["k1"],0,0)
q(A,"lA",3,null,["$3"],["kV"],0,0)
q(A,"lz",3,null,["$3"],["kN"],0,0)
q(A,"lv",3,null,["$3"],["kc"],0,0)
q(A,"lw",3,null,["$3"],["kr"],0,0)
q(A,"lx",3,null,["$3"],["kA"],0,0)
q(A,"ly",3,null,["$3"],["kI"],0,0)
q(A,"lt",3,null,["$3"],["k_"],0,0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.o,null)
q(A.o,[A.eo,J.c6,A.bq,J.aY,A.t,A.q,A.d7,A.bc,A.h,A.an,A.I,A.am,A.ar,A.b1,A.ao,A.af,A.d9,A.d5,A.bF,A.ab,A.bd,A.d2,A.b7,A.cG,A.bv,A.cr,A.cK,A.dk,A.Y,A.cE,A.dD,A.dB,A.as,A.a2,A.cB,A.bx,A.R,A.cA,A.bO,A.cF,A.bz,A.cM,A.bf,A.aC,A.c1,A.dI,A.dF,A.aE,A.dl,A.cj,A.br,A.dm,A.a6,A.be,A.D,A.cL,A.J,A.bM,A.db,A.cI,A.d4,A.cZ,A.cT,A.b_,A.aZ,A.k,A.y,A.i,A.b,A.X,A.a5,A.cY,A.x,A.bu])
q(J.c6,[J.c8,J.b5,J.b9,J.b8,J.ba,J.b6,J.ak])
q(J.b9,[J.ad,J.u,A.aG,A.bi])
q(J.ad,[J.ck,J.aJ,J.ac])
r(J.c7,A.bq)
r(J.d1,J.u)
q(J.b6,[J.b4,J.c9])
q(A.t,[A.al,A.a7,A.ca,A.cu,A.co,A.cD,A.bV,A.U,A.bt,A.ct,A.bs,A.c0])
r(A.aK,A.q)
r(A.c_,A.aK)
q(A.h,[A.Q,A.by,A.cz,A.cJ,A.aO])
r(A.aN,A.ar)
r(A.S,A.aN)
r(A.W,A.b1)
q(A.af,[A.b2,A.bE])
r(A.aD,A.b2)
r(A.bl,A.a7)
q(A.ab,[A.bY,A.bZ,A.cs,A.e6,A.e8,A.dh,A.dg,A.dw,A.eg,A.eh,A.cU,A.cW,A.ej,A.e0,A.e4,A.ea,A.eb,A.ec,A.ed,A.ee,A.dY,A.dZ,A.dO,A.dP,A.dV,A.dW,A.dS,A.dN,A.dU])
q(A.cs,[A.cq,A.aB])
r(A.bb,A.bd)
q(A.bZ,[A.e7,A.dx,A.d3,A.dd,A.dc,A.cV,A.cX,A.e1,A.e_])
q(A.bi,[A.cb,A.F])
q(A.F,[A.bA,A.bC])
r(A.bB,A.bA)
r(A.bg,A.bB)
r(A.bD,A.bC)
r(A.bh,A.bD)
q(A.bg,[A.cc,A.cd])
q(A.bh,[A.ce,A.cf,A.cg,A.ch,A.ci,A.bj,A.bk])
r(A.bG,A.cD)
q(A.bY,[A.di,A.dj,A.dC,A.dn,A.ds,A.dr,A.dq,A.dp,A.dv,A.du,A.dt,A.dX,A.dA,A.dH,A.dG,A.d_])
r(A.bw,A.cB)
r(A.cH,A.bO)
r(A.ap,A.bE)
r(A.bL,A.bf)
r(A.aL,A.bL)
q(A.aC,[A.bX,A.c3])
q(A.c1,[A.cS,A.df,A.de])
r(A.cy,A.c3)
q(A.U,[A.bn,A.c5])
r(A.cC,A.bM)
q(A.dl,[A.c4,A.aA])
s(A.aK,A.am)
s(A.bA,A.q)
s(A.bB,A.I)
s(A.bC,A.q)
s(A.bD,A.I)
s(A.bL,A.cM)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{d:"int",m:"double",ay:"num",j:"String",C:"bool",D:"Null",n:"List",o:"Object",M:"Map",v:"JSObject"},mangledNames:{},types:["~(bu,b_,aZ)","~()","~(v)","D(@)","C(a5)","~(~())","D()","@()","~(@)","m(m,a5)","D(v)","@(@)","@(@,j)","@(j)","D(~())","D(o,aI)","~(o?,o?)","0&()","M<j,j>(M<j,j>,j)","0&(j,d?)","m(m)","C(X)","d(X,X)","j(a3)","C(y)","D(o?)","~(j,j)","j?(o?)","j?(@)","C(j)","C(b)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.S&&a.b(c.a)&&b.b(c.b)}}
A.iP(v.typeUniverse,JSON.parse('{"ck":"ad","aJ":"ad","ac":"ad","lL":"aG","c8":{"C":[],"r":[]},"b5":{"D":[],"r":[]},"b9":{"v":[]},"ad":{"v":[]},"u":{"n":["1"],"v":[],"h":["1"]},"c7":{"bq":[]},"d1":{"u":["1"],"n":["1"],"v":[],"h":["1"]},"aY":{"K":["1"]},"b6":{"m":[],"ay":[]},"b4":{"m":[],"d":[],"ay":[],"r":[]},"c9":{"m":[],"ay":[],"r":[]},"ak":{"j":[],"d6":[],"r":[]},"al":{"t":[]},"c_":{"q":["d"],"am":["d"],"n":["d"],"h":["d"],"q.E":"d","am.E":"d"},"bc":{"K":["1"]},"Q":{"h":["1"],"h.E":"1"},"an":{"K":["1"]},"aK":{"q":["1"],"am":["1"],"n":["1"],"h":["1"]},"S":{"aN":[],"ar":[]},"b1":{"M":["1","2"]},"W":{"b1":["1","2"],"M":["1","2"]},"by":{"h":["1"],"h.E":"1"},"ao":{"K":["1"]},"b2":{"af":["1"],"cp":["1"],"h":["1"]},"aD":{"b2":["1"],"af":["1"],"cp":["1"],"h":["1"]},"bl":{"a7":[],"t":[]},"ca":{"t":[]},"cu":{"t":[]},"bF":{"aI":[]},"ab":{"aj":[]},"bY":{"aj":[]},"bZ":{"aj":[]},"cs":{"aj":[]},"cq":{"aj":[]},"aB":{"aj":[]},"co":{"t":[]},"bb":{"bd":["1","2"],"M":["1","2"]},"aN":{"ar":[]},"b7":{"ik":[],"d6":[]},"cG":{"bp":[],"a3":[]},"cz":{"h":["bp"],"h.E":"bp"},"bv":{"K":["bp"]},"cr":{"a3":[]},"cJ":{"h":["a3"],"h.E":"a3"},"cK":{"K":["a3"]},"aG":{"v":[],"r":[]},"bi":{"v":[]},"cb":{"v":[],"r":[]},"F":{"L":["1"],"v":[]},"bg":{"q":["m"],"F":["m"],"n":["m"],"L":["m"],"v":[],"h":["m"],"I":["m"]},"bh":{"q":["d"],"F":["d"],"n":["d"],"L":["d"],"v":[],"h":["d"],"I":["d"]},"cc":{"q":["m"],"F":["m"],"n":["m"],"L":["m"],"v":[],"h":["m"],"I":["m"],"r":[],"q.E":"m"},"cd":{"q":["m"],"F":["m"],"n":["m"],"L":["m"],"v":[],"h":["m"],"I":["m"],"r":[],"q.E":"m"},"ce":{"q":["d"],"F":["d"],"n":["d"],"L":["d"],"v":[],"h":["d"],"I":["d"],"r":[],"q.E":"d"},"cf":{"q":["d"],"F":["d"],"n":["d"],"L":["d"],"v":[],"h":["d"],"I":["d"],"r":[],"q.E":"d"},"cg":{"q":["d"],"F":["d"],"n":["d"],"L":["d"],"v":[],"h":["d"],"I":["d"],"r":[],"q.E":"d"},"ch":{"q":["d"],"F":["d"],"n":["d"],"L":["d"],"v":[],"h":["d"],"I":["d"],"r":[],"q.E":"d"},"ci":{"q":["d"],"F":["d"],"n":["d"],"L":["d"],"v":[],"h":["d"],"I":["d"],"r":[],"q.E":"d"},"bj":{"q":["d"],"F":["d"],"n":["d"],"L":["d"],"v":[],"h":["d"],"I":["d"],"r":[],"q.E":"d"},"bk":{"ev":[],"q":["d"],"F":["d"],"n":["d"],"L":["d"],"v":[],"h":["d"],"I":["d"],"r":[],"q.E":"d"},"cD":{"t":[]},"bG":{"a7":[],"t":[]},"as":{"K":["1"]},"aO":{"h":["1"],"h.E":"1"},"a2":{"t":[]},"bw":{"cB":["1"]},"R":{"aF":["1"]},"bO":{"fq":[]},"cH":{"bO":[],"fq":[]},"ap":{"af":["1"],"cp":["1"],"h":["1"]},"bz":{"K":["1"]},"q":{"n":["1"],"h":["1"]},"bd":{"M":["1","2"]},"bf":{"M":["1","2"]},"aL":{"bL":["1","2"],"bf":["1","2"],"cM":["1","2"],"M":["1","2"]},"af":{"cp":["1"],"h":["1"]},"bE":{"af":["1"],"cp":["1"],"h":["1"]},"bX":{"aC":["n<d>","j"]},"c3":{"aC":["j","n<d>"]},"cy":{"aC":["j","n<d>"]},"m":{"ay":[]},"d":{"ay":[]},"n":{"h":["1"]},"bp":{"a3":[]},"j":{"d6":[]},"bV":{"t":[]},"a7":{"t":[]},"U":{"t":[]},"bn":{"t":[]},"c5":{"t":[]},"bt":{"t":[]},"ct":{"t":[]},"bs":{"t":[]},"c0":{"t":[]},"cj":{"t":[]},"br":{"t":[]},"cL":{"aI":[]},"J":{"io":[]},"bM":{"cv":[]},"cI":{"cv":[]},"cC":{"cv":[]},"hW":{"n":["d"],"h":["d"]},"ev":{"n":["d"],"h":["d"]},"is":{"n":["d"],"h":["d"]},"hU":{"n":["d"],"h":["d"]},"iq":{"n":["d"],"h":["d"]},"hV":{"n":["d"],"h":["d"]},"ir":{"n":["d"],"h":["d"]},"hS":{"n":["m"],"h":["m"]},"hT":{"n":["m"],"h":["m"]}}'))
A.iO(v.typeUniverse,JSON.parse('{"aK":1,"F":1,"bE":1,"c1":2}'))
var u={f:"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u03f6\x00\u0404\u03f4 \u03f4\u03f6\u01f6\u01f6\u03f6\u03fc\u01f4\u03ff\u03ff\u0584\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u05d4\u01f4\x00\u01f4\x00\u0504\u05c4\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0400\x00\u0400\u0200\u03f7\u0200\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0200\u0200\u0200\u03f7\x00",c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type",e:"\u041f\u0430\u0441\u043f\u043e\u0440\u0442 \u0444\u043e\u0440\u043c\u0443\u043b \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f Vyplaty Calculator v5"}
var t=(function rtii(){var s=A.av
return{n:s("a2"),p:s("a5"),w:s("W<j,j>"),J:s("W<j,m>"),O:s("aD<j>"),k:s("aE"),C:s("t"),Z:s("aj"),W:s("h<@>"),a:s("h<d>"),E:s("u<a5>"),f:s("u<o>"),U:s("u<+(j,j)>"),I:s("u<y>"),s:s("u<j>"),b:s("u<i>"),q:s("u<@>"),t:s("u<d>"),T:s("b5"),m:s("v"),V:s("ac"),D:s("L<@>"),j:s("n<@>"),L:s("n<d>"),G:s("M<j,j>"),P:s("D"),K:s("o"),Y:s("X"),c:s("lM"),r:s("+()"),d:s("bp"),x:s("b"),B:s("y"),l:s("aI"),N:s("j"),bj:s("j(a3)"),bW:s("r"),b7:s("a7"),cr:s("aJ"),h:s("aL<j,j>"),R:s("cv"),bw:s("Q<j>"),e:s("an<y>"),_:s("R<@>"),y:s("C"),bG:s("C(o)"),bU:s("C(y)"),au:s("C(j)"),i:s("m"),z:s("@"),bd:s("@()"),v:s("@(o)"),Q:s("@(o,aI)"),S:s("d"),bc:s("aF<D>?"),aQ:s("v?"),X:s("o?"),u:s("j?"),A:s("j(a3)?"),F:s("bx<@,@>?"),g:s("cF?"),cG:s("C?"),dd:s("m?"),a3:s("d?"),ae:s("ay?"),H:s("ay"),o:s("~"),M:s("~()")}})();(function constants(){var s=hunkHelpers.makeConstList
B.aF=J.c6.prototype
B.b=J.u.prototype
B.h=J.b4.prototype
B.d=J.b6.prototype
B.a=J.ak.prototype
B.aG=J.ac.prototype
B.aH=J.b9.prototype
B.t=A.bk.prototype
B.w=J.ck.prototype
B.o=J.aJ.prototype
B.e=new A.aA(0,"accent")
B.f=new A.aA(1,"success")
B.c=new A.aA(2,"warning")
B.j=new A.aA(3,"purple")
B.dR=new A.cS()
B.ac=new A.bX()
B.p=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.ad=function() {
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
B.ai=function(getTagFallback) {
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
B.ae=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.ah=function(hooks) {
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
B.ag=function(hooks) {
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
B.af=function(hooks) {
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
B.q=function(hooks) { return hooks; }

B.aj=new A.cj()
B.k=new A.d7()
B.l=new A.cy()
B.ak=new A.df()
B.i=new A.cH()
B.m=new A.cL()
B.al=new A.c4(0,"familyPayment")
B.r=new A.c4(2,"calculator")
B.ao=new A.x("imputed_alimony_2026","\u0421\u0424\u0420: \u043f\u0440\u0430\u0432\u0438\u043b\u0430 \u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0435\u0434\u0438\u043d\u043e\u0433\u043e \u043f\u043e\u0441\u043e\u0431\u0438\u044f \u0441 2026 \u0433\u043e\u0434\u0430; \u0420\u043e\u0441\u0441\u0442\u0430\u0442: \u0441\u0440\u0435\u0434\u043d\u0435\u043c\u0435\u0441\u044f\u0447\u043d\u0430\u044f \u043d\u043e\u043c\u0438\u043d\u0430\u043b\u044c\u043d\u0430\u044f \u043d\u0430\u0447\u0438\u0441\u043b\u0435\u043d\u043d\u0430\u044f \u0437\u0430\u0440\u043f\u043b\u0430\u0442\u0430 \u043f\u043e \u0441\u0443\u0431\u044a\u0435\u043a\u0442\u0430\u043c \u0420\u0424 (2025)")
B.aA=new A.x("unified_pp440_2026","\u041f\u043e\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u041f\u0440\u0430\u0432\u0438\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u0430 \u0420\u0424 \u043e\u0442 20.04.2026 \u2116440 (\u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0432 \u041f\u041f \u21162330), \u043e\u0444\u0438\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0439 \u0442\u0435\u043a\u0441\u0442")
B.ax=new A.x("unified_bank_inflow_pilot_2026","\u041f\u043e\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u041f\u0440\u0430\u0432\u0438\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u0430 \u0420\u0424 \u043e\u0442 29.12.2025 \u21162207, \u043e\u0444\u0438\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0439 \u0442\u0435\u043a\u0441\u0442")
B.aw=new A.x("disabled_child_2026","\u0421\u0424\u0420: \u0432\u044b\u043f\u043b\u0430\u0442\u0430 \u043f\u043e \u0443\u0445\u043e\u0434\u0443 \u0437\u0430 \u0434\u0435\u0442\u044c\u043c\u0438-\u0438\u043d\u0432\u0430\u043b\u0438\u0434\u0430\u043c\u0438; \u0421\u0424\u0420 (\u0412\u043e\u043b\u043e\u0433\u043e\u0434\u0441\u043a\u043e\u0435 \u043e\u0442\u0434\u0435\u043b\u0435\u043d\u0438\u0435): \u0415\u0414\u0412 \u0441 01.02.2026")
B.am=new A.x("mat_capital_2026","\u0421\u0424\u0420: \u0420\u0430\u0437\u043c\u0435\u0440 \u043c\u0430\u0442\u0435\u0440\u0438\u043d\u0441\u043a\u043e\u0433\u043e (\u0441\u0435\u043c\u0435\u0439\u043d\u043e\u0433\u043e) \u043a\u0430\u043f\u0438\u0442\u0430\u043b\u0430 \u0441 1 \u0444\u0435\u0432\u0440\u0430\u043b\u044f 2026 \u0433\u043e\u0434\u0430")
B.aE=new A.x("childcare_1_5_2026","\u0421\u0424\u0420: \u043f\u043e\u0441\u043e\u0431\u0438\u0435 \u043f\u043e \u0443\u0445\u043e\u0434\u0443 \u0437\u0430 \u0440\u0435\u0431\u0451\u043d\u043a\u043e\u043c \u0434\u043e 1,5 \u043b\u0435\u0442")
B.aD=new A.x("bir_2026","\u0421\u0424\u0420: \u043d\u043e\u0432\u043e\u0441\u0442\u0438 \u043f\u043e \u043f\u043e\u0441\u043e\u0431\u0438\u044e \u043f\u043e \u0431\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u0438 \u0440\u043e\u0434\u0430\u043c \u0437\u0430 2026 \u0433\u043e\u0434")
B.ap=new A.x("indexation_2026","\u041e\u0444\u0438\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0435 \u043e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u043d\u0438\u0435 \u043f\u0440\u0430\u0432\u043e\u0432\u044b\u0445 \u0430\u043a\u0442\u043e\u0432: \u041f\u043e\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u041f\u0440\u0430\u0432\u0438\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u0430 \u0420\u0424 \u043e\u0442 23.01.2026 \u2116 30")
B.av=new A.x("unified_benefit_2026","\u0421\u0424\u0420: \u0440\u0435\u0433\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b \u043f\u043e \u0435\u0434\u0438\u043d\u043e\u043c\u0443 \u043f\u043e\u0441\u043e\u0431\u0438\u044e")
B.ay=new A.x("methodology_family_support",u.e)
B.as=new A.x("methodology_tax_support",u.e)
B.at=new A.x("methodology_employment_support",u.e)
B.au=new A.x("methodology_housing_support",u.e)
B.aC=new A.x("methodology_pension_support",u.e)
B.an=new A.x("methodology_social_support",u.e)
B.aB=new A.x("methodology_military_support",u.e)
B.ar=new A.x("methodology_regional_support",u.e)
B.az=new A.x("regional_mat_cap_2026","\u041e\u0444\u0438\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0435 \u043f\u043e\u0440\u0442\u0430\u043b\u044b \u0441\u043e\u0446\u0437\u0430\u0449\u0438\u0442\u044b \u0441\u0443\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u0420\u0424 + \u0434\u0443\u0431\u043b\u0438\u0440\u0443\u044e\u0449\u0438\u0439 \u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a \u043f\u043e \u043a\u0430\u0436\u0434\u043e\u043c\u0443 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044e (\u0441\u0432\u0435\u0440\u043a\u0430 \u0438\u044e\u043b\u044f 2026)")
B.aq=new A.x("methodology_honor_support",u.e)
B.aI=s([B.ao,B.aA,B.ax,B.aw,B.am,B.aE,B.aD,B.ap,B.av,B.ay,B.as,B.at,B.au,B.aC,B.an,B.aB,B.ar,B.az,B.aq],A.av("u<x>"))
B.x=new A.S("","\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435")
B.b2=new A.S("single","\u041d\u0435 \u0432 \u0431\u0440\u0430\u043a\u0435")
B.b4=new A.S("married","\u0412 \u0431\u0440\u0430\u043a\u0435")
B.b5=new A.S("divorced","\u0420\u0430\u0437\u0432\u0435\u0434\u0451\u043d(\u0430)")
B.b3=new A.S("widow","\u0412\u0434\u043e\u0432\u0435\u0446 / \u0432\u0434\u043e\u0432\u0430")
B.aJ=s([B.x,B.b2,B.b4,B.b5,B.b3],t.U)
B.cN=new A.y("99","\u041d\u0435\u0442 \u0434\u0435\u0442\u0435\u0439")
B.cz=new A.y("0","\u0414\u043e 1 \u0433\u043e\u0434\u0430")
B.cC=new A.y("1.5","\u0414\u043e 1,5 \u043b\u0435\u0442")
B.cB=new A.y("3","\u0414\u043e 3 \u043b\u0435\u0442")
B.cJ=new A.y("7","\u0414\u043e 7 \u043b\u0435\u0442")
B.cK=new A.y("17","\u0414\u043e 17 \u043b\u0435\u0442")
B.aK=s([B.cN,B.cz,B.cC,B.cB,B.cJ,B.cK],t.I)
B.e0=s(["\u043e\u0431\u044b\u0447\u043d\u044b\u0439","\u0444\u0435\u0434\u0435\u0440\u0430\u043b\u044c\u043d\u044b\u0439"],t.s)
B.bN=new A.b("regular","\u041e\u0431\u044b\u0447\u043d\u044b\u0439 \u0440\u0435\u0433\u0438\u043e\u043d",!1,!1,!1,18939,20644,18371,null,null,null,null,3)
B.fj=s(["\u0441\u0435\u0432\u0435\u0440","\u0441\u0435\u0432\u0435\u0440\u043d\u044b\u0439"],t.s)
B.bS=new A.b("north","\u041a\u0440\u0430\u0439\u043d\u0438\u0439 \u0421\u0435\u0432\u0435\u0440",!1,!0,!1,18939,20644,18371,null,null,null,null,3)
B.ed=s(["\u0434\u0444\u043e","\u0434\u0430\u043b\u044c\u043d\u0438\u0439 \u0432\u043e\u0441\u0442\u043e\u043a"],t.s)
B.bf=new A.b("dfo","\u0414\u0430\u043b\u044c\u043d\u0438\u0439 \u0412\u043e\u0441\u0442\u043e\u043a (legacy)",!1,!1,!0,18939,20644,18371,null,null,null,null,3)
B.f2=s(["\u043c\u043e\u0441\u043a\u0432\u0430","\u043c\u043e\u0441","msk"],t.s)
B.cn=new A.b("moscow","\u041c\u043e\u0441\u043a\u0432\u0430",!0,!1,!1,25342,28940,21903,5000,2500,25e3,null,3)
B.dU=s(["\u0441\u0430\u043d\u043a\u0442-\u043f\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433","\u043f\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433","\u0441\u043f\u0431","spb"],t.s)
B.bJ=new A.b("spb","\u0421\u0430\u043d\u043a\u0442-\u041f\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433",!1,!1,!1,20644,22502,20025,null,null,null,224578,3)
B.e5=s(["\u0441\u0435\u0432\u0430\u0441\u0442\u043e\u043f\u043e\u043b\u044c"],t.s)
B.bg=new A.b("sevastopol","\u0433. \u0421\u0435\u0432\u0430\u0441\u0442\u043e\u043f\u043e\u043b\u044c",!1,!1,!1,19318,21057,18738,null,null,null,null,3)
B.e3=s(["\u0430\u0434\u044b\u0433\u0435\u044f","\u043c\u0430\u0439\u043a\u043e\u043f"],t.s)
B.bA=new A.b("adygea","\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0410\u0434\u044b\u0433\u0435\u044f",!1,!1,!1,16288,17754,15799,null,null,null,5e4,3)
B.e_=s(["\u0430\u043b\u0442\u0430\u0439 \u0440\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430","\u0433\u043e\u0440\u043d\u044b\u0439 \u0430\u043b\u0442\u0430\u0439","\u0433\u043e\u0440\u043d\u043e-\u0430\u043b\u0442\u0430\u0439\u0441\u043a"],t.s)
B.c6=new A.b("altai_republic","\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0410\u043b\u0442\u0430\u0439",!1,!1,!1,17992,19611,17452,null,null,null,83850,3)
B.ek=s(["\u0431\u0430\u0448\u043a\u043e\u0440\u0442\u043e\u0441\u0442\u0430\u043d","\u0431\u0430\u0448\u043a\u0438\u0440\u0438\u044f","\u0443\u0444\u0430"],t.s)
B.bx=new A.b("bashkortostan","\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0411\u0430\u0448\u043a\u043e\u0440\u0442\u043e\u0441\u0442\u0430\u043d",!1,!1,!1,16856,18373,16350,null,null,null,622800,3)
B.fd=s(["\u0431\u0443\u0440\u044f\u0442\u0438\u044f","\u0443\u043b\u0430\u043d-\u0443\u0434\u044d"],t.s)
B.by=new A.b("buryatia","\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0411\u0443\u0440\u044f\u0442\u0438\u044f",!1,!1,!0,20644,22502,20025,null,null,null,218676,2)
B.eU=s(["\u0434\u0430\u0433\u0435\u0441\u0442\u0430\u043d","\u043c\u0430\u0445\u0430\u0447\u043a\u0430\u043b\u0430"],t.s)
B.bI=new A.b("dagestan","\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0414\u0430\u0433\u0435\u0441\u0442\u0430\u043d",!1,!1,!1,17234,18785,16717,null,null,null,3e5,5)
B.eK=s(["\u0438\u043d\u0433\u0443\u0448\u0435\u0442\u0438\u044f","\u043c\u0430\u0433\u0430\u0441"],t.s)
B.bK=new A.b("ingushetia","\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0418\u043d\u0433\u0443\u0448\u0435\u0442\u0438\u044f",!1,!1,!1,17803,19405,17269,null,null,null,null,3)
B.f4=s(["\u043a\u0430\u0431\u0430\u0440\u0434\u0438\u043d\u043e-\u0431\u0430\u043b\u043a\u0430\u0440\u0438\u044f","\u043a\u0431\u0440","\u043d\u0430\u043b\u044c\u0447\u0438\u043a"],t.s)
B.c1=new A.b("kabardino_balkaria","\u041a\u0430\u0431\u0430\u0440\u0434\u0438\u043d\u043e-\u0411\u0430\u043b\u043a\u0430\u0440\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",!1,!1,!1,20265,22089,19657,null,null,null,null,3)
B.f8=s(["\u043a\u0430\u043b\u043c\u044b\u043a\u0438\u044f","\u044d\u043b\u0438\u0441\u0442\u0430"],t.s)
B.bH=new A.b("kalmykia","\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041a\u0430\u043b\u043c\u044b\u043a\u0438\u044f",!1,!1,!1,18560,20230,18003,null,null,null,1e5,3)
B.e8=s(["\u043a\u0430\u0440\u0430\u0447\u0430\u0435\u0432\u043e-\u0447\u0435\u0440\u043a\u0435\u0441\u0438\u044f","\u043a\u0447\u0440","\u0447\u0435\u0440\u043a\u0435\u0441\u0441\u043a"],t.s)
B.c2=new A.b("karachay_cherkessia","\u041a\u0430\u0440\u0430\u0447\u0430\u0435\u0432\u043e-\u0427\u0435\u0440\u043a\u0435\u0441\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",!1,!1,!1,17803,19405,17269,null,null,null,15e4,4)
B.ep=s(["\u043a\u0430\u0440\u0435\u043b\u0438\u044f","\u043f\u0435\u0442\u0440\u043e\u0437\u0430\u0432\u043e\u0434\u0441\u043a"],t.s)
B.bG=new A.b("karelia","\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041a\u0430\u0440\u0435\u043b\u0438\u044f",!1,!0,!1,21022,22914,20391,null,null,null,105500,3)
B.ec=s(["\u043a\u043e\u043c\u0438","\u0441\u044b\u043a\u0442\u044b\u0432\u043a\u0430\u0440"],t.s)
B.ck=new A.b("komi","\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041a\u043e\u043c\u0438",!1,!0,!1,21780,23740,21127,null,null,null,3e5,3)
B.em=s(["\u043a\u0440\u044b\u043c","\u0441\u0438\u043c\u0444\u0435\u0440\u043e\u043f\u043e\u043b\u044c"],t.s)
B.bj=new A.b("crimea","\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041a\u0440\u044b\u043c",!1,!1,!1,18371,20024,17820,null,null,null,null,3)
B.fg=s(["\u043c\u0430\u0440\u0438\u0439 \u044d\u043b","\u0439\u043e\u0448\u043a\u0430\u0440-\u043e\u043b\u0430"],t.s)
B.cv=new A.b("mari_el","\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041c\u0430\u0440\u0438\u0439 \u042d\u043b",!1,!1,!1,16666,18166,16166,null,null,null,null,3)
B.eG=s(["\u043c\u043e\u0440\u0434\u043e\u0432\u0438\u044f","\u0441\u0430\u0440\u0430\u043d\u0441\u043a"],t.s)
B.cp=new A.b("mordovia","\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041c\u043e\u0440\u0434\u043e\u0432\u0438\u044f",!1,!1,!1,16098,17547,15615,null,null,null,135753,3)
B.ei=s(["\u0441\u0430\u0445\u0430","\u044f\u043a\u0443\u0442\u0438\u044f","\u044f\u043a\u0443\u0442\u0441\u043a"],t.s)
B.c9=new A.b("sakha","\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0421\u0430\u0445\u0430 (\u042f\u043a\u0443\u0442\u0438\u044f)",!1,!0,!0,28598,31172,27740,null,null,null,3e5,3)
B.eZ=s(["\u0441\u0435\u0432\u0435\u0440\u043d\u0430\u044f \u043e\u0441\u0435\u0442\u0438\u044f","\u0430\u043b\u0430\u043d\u0438\u044f","\u0432\u043b\u0430\u0434\u0438\u043a\u0430\u0432\u043a\u0430\u0437"],t.s)
B.bp=new A.b("north_ossetia","\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0421\u0435\u0432\u0435\u0440\u043d\u0430\u044f \u041e\u0441\u0435\u0442\u0438\u044f \u2014 \u0410\u043b\u0430\u043d\u0438\u044f",!1,!1,!1,17045,18579,16534,null,null,null,5e4,3)
B.eh=s(["\u0442\u0430\u0442\u0430\u0440\u0441\u0442\u0430\u043d","\u0442\u0430\u0442\u0430\u0440\u0438\u044f","\u043a\u0430\u0437\u0430\u043d\u044c","\u0440\u0442"],t.s)
B.br=new A.b("tatarstan","\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0422\u0430\u0442\u0430\u0440\u0441\u0442\u0430\u043d",!1,!1,!1,16098,17547,15615,null,null,null,1e5,3)
B.eY=s(["\u0442\u044b\u0432\u0430","\u0442\u0443\u0432\u0430","\u043a\u044b\u0437\u044b\u043b"],t.s)
B.ci=new A.b("tyva","\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0422\u044b\u0432\u0430",!1,!1,!1,19128,20850,18554,null,null,null,null,3)
B.fe=s(["\u0443\u0434\u043c\u0443\u0440\u0442\u0438\u044f","\u0438\u0436\u0435\u0432\u0441\u043a"],t.s)
B.cw=new A.b("udmurtia","\u0423\u0434\u043c\u0443\u0440\u0442\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",!1,!1,!1,16856,18373,16350,null,null,null,null,3)
B.es=s(["\u0445\u0430\u043a\u0430\u0441\u0438\u044f","\u0430\u0431\u0430\u043a\u0430\u043d"],t.s)
B.cm=new A.b("khakassia","\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0425\u0430\u043a\u0430\u0441\u0438\u044f",!1,!1,!1,19318,21057,18738,null,null,null,null,3)
B.eJ=s(["\u0447\u0435\u0447\u043d\u044f","\u0433\u0440\u043e\u0437\u043d\u044b\u0439"],t.s)
B.bn=new A.b("chechnya","\u0427\u0435\u0447\u0435\u043d\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",!1,!1,!1,18181,19817,17636,null,null,null,null,3)
B.e1=s(["\u0447\u0443\u0432\u0430\u0448\u0438\u044f","\u0447\u0435\u0431\u043e\u043a\u0441\u0430\u0440\u044b"],t.s)
B.cg=new A.b("chuvashia","\u0427\u0443\u0432\u0430\u0448\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",!1,!1,!1,16477,17960,15983,null,null,null,2e5,3)
B.eD=s(["\u0430\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439","\u0431\u0430\u0440\u043d\u0430\u0443\u043b"],t.s)
B.ca=new A.b("altai_krai","\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",!1,!1,!1,16856,18373,16350,null,null,null,95525,3)
B.fa=s(["\u0437\u0430\u0431\u0430\u0439\u043a\u0430\u043b\u044c\u0441\u043a\u0438\u0439","\u0437\u0430\u0431\u0430\u0439\u043a\u0430\u043b\u044c\u0435","\u0447\u0438\u0442\u0430"],t.s)
B.b9=new A.b("zabaykalsky","\u0417\u0430\u0431\u0430\u0439\u043a\u0430\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",!1,!1,!0,22159,24153,21494,null,null,null,249907,2)
B.ef=s(["\u043a\u0430\u043c\u0447\u0430\u0442\u043a\u0430","\u043f\u0435\u0442\u0440\u043e\u043f\u0430\u0432\u043b\u043e\u0432\u0441\u043a-\u043a\u0430\u043c\u0447\u0430\u0442\u0441\u043a\u0438\u0439"],t.s)
B.bq=new A.b("kamchatka","\u041a\u0430\u043c\u0447\u0430\u0442\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",!1,!0,!0,33333,36333,32333,null,null,null,160975,1)
B.eP=s(["\u043a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440","\u043a\u0443\u0431\u0430\u043d\u044c","\u0441\u043e\u0447\u0438","\u043d\u043e\u0432\u043e\u0440\u043e\u0441\u0441\u0438\u0439\u0441\u043a"],t.s)
B.ct=new A.b("krasnodar","\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",!1,!1,!1,18181,19817,17636,null,null,null,167135,3)
B.dZ=s(["\u043a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a","\u043a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439"],t.s)
B.cu=new A.b("krasnoyarsk","\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",!1,!0,!1,21022,22914,20391,null,null,null,196470,3)
B.f3=s(["\u043f\u0435\u0440\u043c\u044c","\u043f\u0435\u0440\u043c\u0441\u043a\u0438\u0439"],t.s)
B.cc=new A.b("perm","\u041f\u0435\u0440\u043c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",!1,!1,!1,17424,18992,16901,null,null,null,null,3)
B.f6=s(["\u043f\u0440\u0438\u043c\u043e\u0440\u0441\u043a\u0438\u0439","\u043f\u0440\u0438\u043c\u043e\u0440\u044c\u0435","\u0432\u043b\u0430\u0434\u0438\u0432\u043e\u0441\u0442\u043e\u043a"],t.s)
B.cd=new A.b("primorsky","\u041f\u0440\u0438\u043c\u043e\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",!1,!1,!0,22537,24565,21861,null,null,null,248393,3)
B.e9=s(["\u0441\u0442\u0430\u0432\u0440\u043e\u043f\u043e\u043b\u044c","\u0441\u0442\u0430\u0432\u0440\u043e\u043f\u043e\u043b\u044c\u0441\u043a\u0438\u0439"],t.s)
B.be=new A.b("stavropol","\u0421\u0442\u0430\u0432\u0440\u043e\u043f\u043e\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",!1,!1,!1,17045,18579,16534,null,null,null,null,3)
B.f5=s(["\u0445\u0430\u0431\u0430\u0440\u043e\u0432\u0441\u043a","\u0445\u0430\u0431\u0430\u0440\u043e\u0432\u0441\u043a\u0438\u0439"],t.s)
B.cj=new A.b("khabarovsk","\u0425\u0430\u0431\u0430\u0440\u043e\u0432\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",!1,!1,!0,23106,25186,23758,null,null,null,288973,2)
B.f7=s(["\u0430\u043c\u0443\u0440\u0441\u043a\u0430\u044f","\u0431\u043b\u0430\u0433\u043e\u0432\u0435\u0449\u0435\u043d\u0441\u043a"],t.s)
B.c8=new A.b("amur","\u0410\u043c\u0443\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!0,21780,23740,21215,null,null,null,249907,2)
B.eX=s(["\u0430\u0440\u0445\u0430\u043d\u0433\u0435\u043b\u044c\u0441\u043a\u0430\u044f","\u0430\u0440\u0445\u0430\u043d\u0433\u0435\u043b\u044c\u0441\u043a"],t.s)
B.bF=new A.b("arkhangelsk","\u0410\u0440\u0445\u0430\u043d\u0433\u0435\u043b\u044c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!0,!1,21969,23946,21310,null,null,null,124609,3)
B.e4=s(["\u0430\u0441\u0442\u0440\u0430\u0445\u0430\u043d\u0441\u043a\u0430\u044f","\u0430\u0441\u0442\u0440\u0430\u0445\u0430\u043d\u044c"],t.s)
B.cq=new A.b("astrakhan","\u0410\u0441\u0442\u0440\u0430\u0445\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,18371,20024,17820,null,null,null,null,3)
B.f0=s(["\u0431\u0435\u043b\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f","\u0431\u0435\u043b\u0433\u043e\u0440\u043e\u0434"],t.s)
B.ce=new A.b("belgorod","\u0411\u0435\u043b\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,15909,17341,15432,null,null,null,15e4,3)
B.eT=s(["\u0431\u0440\u044f\u043d\u0441\u043a\u0430\u044f","\u0431\u0440\u044f\u043d\u0441\u043a"],t.s)
B.co=new A.b("bryansk","\u0411\u0440\u044f\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,17424,18992,16901,null,null,null,2e5,3)
B.dS=s(["\u0432\u043b\u0430\u0434\u0438\u043c\u0438\u0440\u0441\u043a\u0430\u044f","\u0432\u043b\u0430\u0434\u0438\u043c\u0438\u0440"],t.s)
B.bu=new A.b("vladimir","\u0412\u043b\u0430\u0434\u0438\u043c\u0438\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,18371,20024,17820,null,null,null,78758,3)
B.f_=s(["\u0432\u043e\u043b\u0433\u043e\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f","\u0432\u043e\u043b\u0433\u043e\u0433\u0440\u0430\u0434"],t.s)
B.cb=new A.b("volgograd","\u0412\u043e\u043b\u0433\u043e\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,16288,17754,15799,null,null,null,89e3,3)
B.eN=s(["\u0432\u043e\u043b\u043e\u0433\u043e\u0434\u0441\u043a\u0430\u044f","\u0432\u043e\u043b\u043e\u0433\u0434\u0430"],t.s)
B.bV=new A.b("vologda","\u0412\u043e\u043b\u043e\u0433\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,19128,20850,18555,null,null,null,null,3)
B.ez=s(["\u0432\u043e\u0440\u043e\u043d\u0435\u0436\u0441\u043a\u0430\u044f","\u0432\u043e\u0440\u043e\u043d\u0435\u0436"],t.s)
B.bD=new A.b("voronezh","\u0412\u043e\u0440\u043e\u043d\u0435\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,16666,18166,16166,null,null,null,16e4,3)
B.eS=s(["\u0437\u0430\u043f\u043e\u0440\u043e\u0436\u0441\u043a\u0430\u044f","\u0437\u0430\u043f\u043e\u0440\u043e\u0436\u044c\u0435"],t.s)
B.c4=new A.b("zaporizhzhia","\u0417\u0430\u043f\u043e\u0440\u043e\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,18371,20024,17820,null,null,null,null,3)
B.eu=s(["\u0438\u0432\u0430\u043d\u043e\u0432\u0441\u043a\u0430\u044f","\u0438\u0432\u0430\u043d\u043e\u0432\u043e"],t.s)
B.bE=new A.b("ivanovo","\u0418\u0432\u0430\u043d\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,17803,19405,17269,null,null,null,5e4,3)
B.ee=s(["\u0438\u0440\u043a\u0443\u0442\u0441\u043a\u0430\u044f","\u0438\u0440\u043a\u0443\u0442\u0441\u043a"],t.s)
B.cf=new A.b("irkutsk","\u0418\u0440\u043a\u0443\u0442\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!0,!1,20075,21882,19473,null,null,null,162034,2)
B.f9=s(["\u043a\u0430\u043b\u0438\u043d\u0438\u043d\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f","\u043a\u0430\u043b\u0438\u043d\u0438\u043d\u0433\u0440\u0430\u0434"],t.s)
B.bL=new A.b("kaliningrad","\u041a\u0430\u043b\u0438\u043d\u0438\u043d\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,19507,21263,18922,null,null,null,null,3)
B.fi=s(["\u043a\u0430\u043b\u0443\u0436\u0441\u043a\u0430\u044f","\u043a\u0430\u043b\u0443\u0433\u0430"],t.s)
B.ba=new A.b("kaluga","\u041a\u0430\u043b\u0443\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,18181,19817,17636,null,null,null,1e5,3)
B.eq=s(["\u043a\u0435\u043c\u0435\u0440\u043e\u0432\u0441\u043a\u0430\u044f","\u043a\u0443\u0437\u0431\u0430\u0441\u0441","\u043a\u0435\u043c\u0435\u0440\u043e\u0432\u043e"],t.s)
B.bT=new A.b("kemerovo","\u041a\u0435\u043c\u0435\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c \u2014 \u041a\u0443\u0437\u0431\u0430\u0441\u0441",!1,!1,!1,17234,18785,16717,null,null,null,13e4,3)
B.dT=s(["\u043a\u0438\u0440\u043e\u0432\u0441\u043a\u0430\u044f","\u043a\u0438\u0440\u043e\u0432"],t.s)
B.cs=new A.b("kirov","\u041a\u0438\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,16856,18373,16350,null,null,null,null,3)
B.ea=s(["\u043a\u043e\u0441\u0442\u0440\u043e\u043c\u0441\u043a\u0430\u044f","\u043a\u043e\u0441\u0442\u0440\u043e\u043c\u0430"],t.s)
B.b7=new A.b("kostroma","\u041a\u043e\u0441\u0442\u0440\u043e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,17424,18992,16901,null,null,null,null,3)
B.eo=s(["\u043a\u0443\u0440\u0433\u0430\u043d\u0441\u043a\u0430\u044f","\u043a\u0443\u0440\u0433\u0430\u043d"],t.s)
B.c3=new A.b("kurgan","\u041a\u0443\u0440\u0433\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,17803,19405,17269,null,null,null,null,3)
B.eL=s(["\u043a\u0443\u0440\u0441\u043a\u0430\u044f","\u043a\u0443\u0440\u0441\u043a"],t.s)
B.bo=new A.b("kursk","\u041a\u0443\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,16477,17960,15983,null,null,null,122667,3)
B.dX=s(["\u043b\u0435\u043d\u0438\u043d\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f","\u043b\u0435\u043d\u043e\u0431\u043b\u0430\u0441\u0442\u044c"],t.s)
B.b6=new A.b("leningrad","\u041b\u0435\u043d\u0438\u043d\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,20265,22089,19657,null,null,null,125e3,2)
B.eB=s(["\u043b\u0438\u043f\u0435\u0446\u043a\u0430\u044f","\u043b\u0438\u043f\u0435\u0446\u043a"],t.s)
B.bW=new A.b("lipetsk","\u041b\u0438\u043f\u0435\u0446\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,15719,17134,15247,null,null,null,1e5,3)
B.ey=s(["\u043b\u043d\u0440","\u043b\u0443\u0433\u0430\u043d\u0441\u043a\u0430\u044f","\u043b\u0443\u0433\u0430\u043d\u0441\u043a"],t.s)
B.bd=new A.b("lugansk","\u041b\u0443\u0433\u0430\u043d\u0441\u043a\u0430\u044f \u041d\u0430\u0440\u043e\u0434\u043d\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",!1,!1,!1,17803,19405,17269,null,null,null,null,3)
B.ej=s(["\u043c\u0430\u0433\u0430\u0434\u0430\u043d\u0441\u043a\u0430\u044f","\u043c\u0430\u0433\u0430\u0434\u0430\u043d"],t.s)
B.bX=new A.b("magadan","\u041c\u0430\u0433\u0430\u0434\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!0,!0,32954,35920,32062,null,null,null,3e5,3)
B.e6=s(["\u043c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c","\u043f\u043e\u0434\u043c\u043e\u0441\u043a\u043e\u0432\u044c\u0435","\u043c\u043e"],t.s)
B.bY=new A.b("mo","\u041c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!0,!1,!1,20286,22112,19677,null,null,null,null,3)
B.eE=s(["\u043c\u0443\u0440\u043c\u0430\u043d\u0441\u043a\u0430\u044f","\u043c\u0443\u0440\u043c\u0430\u043d\u0441\u043a"],t.s)
B.cx=new A.b("murmansk","\u041c\u0443\u0440\u043c\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!0,!1,26406,28783,25614,null,null,null,149373,3)
B.dY=s(["\u043d\u0438\u0436\u0435\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f","\u043d\u0438\u0436\u043d\u0438\u0439 \u043d\u043e\u0432\u0433\u043e\u0440\u043e\u0434","\u043d\u043d"],t.s)
B.bt=new A.b("nizhny_novgorod","\u041d\u0438\u0436\u0435\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,17803,19405,17269,null,null,null,1e6,3)
B.eg=s(["\u043d\u043e\u0432\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f","\u0432\u0435\u043b\u0438\u043a\u0438\u0439 \u043d\u043e\u0432\u0433\u043e\u0440\u043e\u0434"],t.s)
B.bb=new A.b("novgorod","\u041d\u043e\u0432\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,18560,20230,18003,null,null,null,25e4,3)
B.eb=s(["\u043d\u043e\u0432\u043e\u0441\u0438\u0431\u0438\u0440\u0441\u043a\u0430\u044f","\u043d\u043e\u0432\u043e\u0441\u0438\u0431\u0438\u0440\u0441\u043a"],t.s)
B.bz=new A.b("novosibirsk","\u041d\u043e\u0432\u043e\u0441\u0438\u0431\u0438\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,18560,20230,18003,null,null,null,163141,3)
B.eI=s(["\u043e\u043c\u0441\u043a\u0430\u044f","\u043e\u043c\u0441\u043a"],t.s)
B.ch=new A.b("omsk","\u041e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,16477,17960,15983,null,null,null,null,3)
B.fb=s(["\u043e\u0440\u0435\u043d\u0431\u0443\u0440\u0433\u0441\u043a\u0430\u044f","\u043e\u0440\u0435\u043d\u0431\u0443\u0440\u0433"],t.s)
B.bh=new A.b("orenburg","\u041e\u0440\u0435\u043d\u0431\u0443\u0440\u0433\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,16477,17960,15983,null,null,null,155702,3)
B.fh=s(["\u043e\u0440\u043b\u043e\u0432\u0441\u043a\u0430\u044f","\u043e\u0440\u0451\u043b","\u043e\u0440\u0435\u043b"],t.s)
B.cl=new A.b("orel","\u041e\u0440\u043b\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,17613,19198,17085,null,null,null,null,3)
B.dV=s(["\u043f\u0435\u043d\u0437\u0435\u043d\u0441\u043a\u0430\u044f","\u043f\u0435\u043d\u0437\u0430"],t.s)
B.bm=new A.b("penza","\u041f\u0435\u043d\u0437\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,15909,17341,15432,null,null,null,null,3)
B.dW=s(["\u043f\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f","\u043f\u0441\u043a\u043e\u0432"],t.s)
B.c5=new A.b("pskov","\u041f\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,18750,20438,18188,null,null,null,107500,3)
B.el=s(["\u0440\u043e\u0441\u0442\u043e\u0432\u0441\u043a\u0430\u044f","\u0440\u043e\u0441\u0442\u043e\u0432"],t.s)
B.c_=new A.b("rostov","\u0420\u043e\u0441\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,17803,19405,17269,null,null,null,162307,3)
B.eF=s(["\u0440\u044f\u0437\u0430\u043d\u0441\u043a\u0430\u044f","\u0440\u044f\u0437\u0430\u043d\u044c"],t.s)
B.bZ=new A.b("ryazan","\u0420\u044f\u0437\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,16856,18373,16350,null,null,null,93352,3)
B.eR=s(["\u0441\u0430\u043c\u0430\u0440\u0441\u043a\u0430\u044f","\u0441\u0430\u043c\u0430\u0440\u0430","\u0442\u043e\u043b\u044c\u044f\u0442\u0442\u0438"],t.s)
B.bR=new A.b("samara","\u0421\u0430\u043c\u0430\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,17803,19405,17269,null,null,null,1e5,3)
B.fc=s(["\u0441\u0430\u0440\u0430\u0442\u043e\u0432\u0441\u043a\u0430\u044f","\u0441\u0430\u0440\u0430\u0442\u043e\u0432"],t.s)
B.c7=new A.b("saratov","\u0421\u0430\u0440\u0430\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,15909,17341,15432,null,null,null,107848,3)
B.eA=s(["\u0441\u0430\u0445\u0430\u043b\u0438\u043d\u0441\u043a\u0430\u044f","\u0441\u0430\u0445\u0430\u043b\u0438\u043d","\u044e\u0436\u043d\u043e-\u0441\u0430\u0445\u0430\u043b\u0438\u043d\u0441\u043a"],t.s)
B.bB=new A.b("sakhalin","\u0421\u0430\u0445\u0430\u043b\u0438\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!0,!0,25757,28075,24984,null,null,null,5e5,2)
B.e7=s(["\u0441\u0432\u0435\u0440\u0434\u043b\u043e\u0432\u0441\u043a\u0430\u044f","\u0435\u043a\u0430\u0442\u0435\u0440\u0438\u043d\u0431\u0443\u0440\u0433","\u0441\u0432\u0435\u0440\u0434\u043b\u043e\u0432\u0441\u043a"],t.s)
B.bw=new A.b("sverdlovsk","\u0421\u0432\u0435\u0440\u0434\u043b\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,18750,20438,18188,null,null,null,182493,3)
B.eM=s(["\u0441\u043c\u043e\u043b\u0435\u043d\u0441\u043a\u0430\u044f","\u0441\u043c\u043e\u043b\u0435\u043d\u0441\u043a"],t.s)
B.bk=new A.b("smolensk","\u0421\u043c\u043e\u043b\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,18750,20438,18188,null,null,null,163300,3)
B.er=s(["\u0442\u0430\u043c\u0431\u043e\u0432\u0441\u043a\u0430\u044f","\u0442\u0430\u043c\u0431\u043e\u0432"],t.s)
B.cr=new A.b("tambov","\u0422\u0430\u043c\u0431\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,15719,17134,15247,null,null,null,3e5,3)
B.eC=s(["\u0442\u0432\u0435\u0440\u0441\u043a\u0430\u044f","\u0442\u0432\u0435\u0440\u044c"],t.s)
B.bU=new A.b("tver","\u0422\u0432\u0435\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,18560,20230,18003,null,null,null,null,3)
B.et=s(["\u0442\u043e\u043c\u0441\u043a\u0430\u044f","\u0442\u043e\u043c\u0441\u043a"],t.s)
B.cy=new A.b("tomsk","\u0422\u043e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!0,!1,18560,20230,18003,null,null,null,1e5,3)
B.ew=s(["\u0442\u0443\u043b\u044c\u0441\u043a\u0430\u044f","\u0442\u0443\u043b\u0430"],t.s)
B.c0=new A.b("tula","\u0422\u0443\u043b\u044c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,18939,20644,18371,null,null,null,87737,3)
B.ff=s(["\u0442\u044e\u043c\u0435\u043d\u0441\u043a\u0430\u044f","\u0442\u044e\u043c\u0435\u043d\u044c","\u0442\u044e\u043c"],t.s)
B.bv=new A.b("tyumen","\u0422\u044e\u043c\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!0,!1,18939,20644,18371,null,null,null,1e5,3)
B.eH=s(["\u0443\u043b\u044c\u044f\u043d\u043e\u0432\u0441\u043a\u0430\u044f","\u0443\u043b\u044c\u044f\u043d\u043e\u0432\u0441\u043a"],t.s)
B.bM=new A.b("ulyanovsk","\u0423\u043b\u044c\u044f\u043d\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,16856,18373,16350,null,null,null,1e5,3)
B.eO=s(["\u0445\u0435\u0440\u0441\u043e\u043d\u0441\u043a\u0430\u044f","\u0445\u0435\u0440\u0441\u043e\u043d"],t.s)
B.bP=new A.b("kherson","\u0425\u0435\u0440\u0441\u043e\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,18371,20024,17820,null,null,null,null,3)
B.eW=s(["\u0447\u0435\u043b\u044f\u0431\u0438\u043d\u0441\u043a\u0430\u044f","\u0447\u0435\u043b\u044f\u0431\u0438\u043d\u0441\u043a"],t.s)
B.b8=new A.b("chelyabinsk","\u0427\u0435\u043b\u044f\u0431\u0438\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,17424,18992,16901,null,null,null,1e5,3)
B.e2=s(["\u044f\u0440\u043e\u0441\u043b\u0430\u0432\u0441\u043a\u0430\u044f","\u044f\u0440\u043e\u0441\u043b\u0430\u0432\u043b\u044c"],t.s)
B.bO=new A.b("yaroslavl","\u042f\u0440\u043e\u0441\u043b\u0430\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!1,18939,20644,18371,null,null,null,58870,3)
B.f1=s(["\u0435\u0430\u043e","\u0435\u0432\u0440\u0435\u0439\u0441\u043a\u0430\u044f \u0430\u043e","\u0431\u0438\u0440\u043e\u0431\u0438\u0434\u0436\u0430\u043d"],t.s)
B.bi=new A.b("jewish_ao","\u0415\u0432\u0440\u0435\u0439\u0441\u043a\u0430\u044f \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",!1,!1,!0,23674,25805,22964,null,null,null,null,3)
B.ev=s(["\u043d\u0430\u043e","\u043d\u0435\u043d\u0435\u0446\u043a\u0438\u0439","\u043d\u0430\u0440\u044c\u044f\u043d-\u043c\u0430\u0440"],t.s)
B.bc=new A.b("nenets_ao","\u041d\u0435\u043d\u0435\u0446\u043a\u0438\u0439 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433",!1,!0,!1,31060,33855,32026,null,null,null,4e5,3)
B.eQ=s(["\u0445\u043c\u0430\u043e","\u044e\u0433\u0440\u0430","\u0445\u0430\u043d\u0442\u044b","\u0445\u0430\u043d\u0442\u044b-\u043c\u0430\u043d\u0441\u0438\u0439\u0441\u043a\u0438\u0439","\u0441\u0443\u0440\u0433\u0443\u0442"],t.s)
B.bs=new A.b("khanty_mansi_ao","\u0425\u0430\u043d\u0442\u044b-\u041c\u0430\u043d\u0441\u0438\u0439\u0441\u043a\u0438\u0439 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433 \u2014 \u042e\u0433\u0440\u0430",!1,!0,!1,22102,24091,22137,null,null,null,177e3,2)
B.eV=s(["\u0447\u0443\u043a\u043e\u0442\u043a\u0430","\u0447\u0443\u043a\u043e\u0442\u0441\u043a\u0438\u0439","\u0430\u043d\u0430\u0434\u044b\u0440\u044c"],t.s)
B.bQ=new A.b("chukotka","\u0427\u0443\u043a\u043e\u0442\u0441\u043a\u0438\u0439 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433",!1,!0,!0,49431,53880,47948,null,null,null,201e3,3)
B.ex=s(["\u044f\u043d\u0430\u043e","\u044f\u043c\u0430\u043b","\u044f\u043c\u0430\u043b\u043e-\u043d\u0435\u043d\u0435\u0446\u043a\u0438\u0439","\u0441\u0430\u043b\u0435\u0445\u0430\u0440\u0434","\u044f\u043c\u0430"],t.s)
B.bl=new A.b("yamalo_nenets_ao","\u042f\u043c\u0430\u043b\u043e-\u041d\u0435\u043d\u0435\u0446\u043a\u0438\u0439 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433",!1,!0,!1,25946,28281,25168,null,null,null,1e6,3)
B.en=s(["\u0434\u043d\u0440","\u0434\u043e\u043d\u0435\u0446\u043a\u0430\u044f","\u0434\u043e\u043d\u0435\u0446\u043a"],t.s)
B.bC=new A.b("donetsk","\u0414\u043e\u043d\u0435\u0446\u043a\u0430\u044f \u041d\u0430\u0440\u043e\u0434\u043d\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",!1,!1,!1,17803,19405,17269,null,null,null,null,3)
B.n=s([B.bN,B.bS,B.bf,B.cn,B.bJ,B.bg,B.bA,B.c6,B.bx,B.by,B.bI,B.bK,B.c1,B.bH,B.c2,B.bG,B.ck,B.bj,B.cv,B.cp,B.c9,B.bp,B.br,B.ci,B.cw,B.cm,B.bn,B.cg,B.ca,B.b9,B.bq,B.ct,B.cu,B.cc,B.cd,B.be,B.cj,B.c8,B.bF,B.cq,B.ce,B.co,B.bu,B.cb,B.bV,B.bD,B.c4,B.bE,B.cf,B.bL,B.ba,B.bT,B.cs,B.b7,B.c3,B.bo,B.b6,B.bW,B.bd,B.bX,B.bY,B.cx,B.bt,B.bb,B.bz,B.ch,B.bh,B.cl,B.bm,B.c5,B.c_,B.bZ,B.bR,B.c7,B.bB,B.bw,B.bk,B.cr,B.bU,B.cy,B.c0,B.bv,B.bM,B.bP,B.b8,B.bO,B.bi,B.bc,B.bs,B.bQ,B.bl,B.bC],A.av("u<b>"))
B.dc=new A.i("i_dis1","\u0418\u043d\u0432\u0430\u043b\u0438\u0434\u043d\u043e\u0441\u0442\u044c I \u0433\u0440\u0443\u043f\u043f\u044b (\u0443 \u043c\u0435\u043d\u044f)")
B.dC=new A.i("i_dis2","\u0418\u043d\u0432\u0430\u043b\u0438\u0434\u043d\u043e\u0441\u0442\u044c II \u0433\u0440\u0443\u043f\u043f\u044b")
B.cP=new A.i("i_dis3","\u0418\u043d\u0432\u0430\u043b\u0438\u0434\u043d\u043e\u0441\u0442\u044c III \u0433\u0440\u0443\u043f\u043f\u044b")
B.df=new A.i("i_pen","\u042f \u043f\u0435\u043d\u0441\u0438\u043e\u043d\u0435\u0440(\u043a\u0430)")
B.d0=new A.i("i_mil","\u0412\u043e\u0435\u043d\u043d\u043e\u0441\u043b\u0443\u0436\u0430\u0449\u0438\u0439 / \u0443\u0447\u0430\u0441\u0442\u043d\u0438\u043a \u0421\u0412\u041e")
B.cV=new A.i("i_vet","\u0412\u0435\u0442\u0435\u0440\u0430\u043d \u0431\u043e\u0435\u0432\u044b\u0445 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439")
B.d7=new A.i("i_stu","\u0421\u0442\u0443\u0434\u0435\u043d\u0442 \u043e\u0447\u043d\u043e\u0439 \u0444\u043e\u0440\u043c\u044b")
B.d4=new A.i("i_laid","\u0423\u0432\u043e\u043b\u0435\u043d(\u0430) \u043f\u043e \u0441\u043e\u043a\u0440\u0430\u0449\u0435\u043d\u0438\u044e")
B.cS=new A.i("i_sc","\u0418\u043d\u0442\u0435\u0440\u0435\u0441\u0443\u0435\u0442 \u0441\u043e\u0446\u043a\u043e\u043d\u0442\u0440\u0430\u043a\u0442")
B.dm=new A.i("i_chern","\u041b\u0438\u043a\u0432\u0438\u0434\u0430\u0442\u043e\u0440 / \u0447\u0435\u0440\u043d\u043e\u0431\u044b\u043b\u0435\u0446")
B.dd=new A.i("i_dfo","\u041f\u0435\u0440\u0435\u0435\u0437\u0434 \u043d\u0430 \u0414\u0430\u043b\u044c\u043d\u0438\u0439 \u0412\u043e\u0441\u0442\u043e\u043a")
B.dg=new A.i("i_repr","\u0420\u0435\u0430\u0431\u0438\u043b\u0438\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439")
B.dp=new A.i("i_vet_trud","\u0412\u0435\u0442\u0435\u0440\u0430\u043d \u0442\u0440\u0443\u0434\u0430")
B.d5=new A.i("i_honored","\u0417\u0430\u0441\u043b\u0443\u0436\u0435\u043d\u043d\u044b\u0439 (\u043c\u0430\u0441\u0442\u0435\u0440/\u0434\u0435\u044f\u0442\u0435\u043b\u044c/\u0430\u0440\u0442\u0438\u0441\u0442)")
B.cW=new A.i("i_people_art","\u041d\u0430\u0440\u043e\u0434\u043d\u044b\u0439 \u0430\u0440\u0442\u0438\u0441\u0442 / \u0434\u0435\u044f\u0442\u0435\u043b\u044c")
B.dq=new A.i("i_hero_labor","\u0413\u0435\u0440\u043e\u0439 \u0422\u0440\u0443\u0434\u0430 \u0420\u0424")
B.dh=new A.i("i_sick","\u041d\u0430\u0445\u043e\u0436\u0443\u0441\u044c \u043d\u0430 \u0431\u043e\u043b\u044c\u043d\u0438\u0447\u043d\u043e\u043c")
B.cU=new A.i("self_sick_insured","\u0421\u0430\u043c\u043e\u0437\u0430\u043d\u044f\u0442\u044b\u0439: \u0435\u0441\u0442\u044c \u0434\u043e\u0431\u0440\u043e\u0432\u043e\u043b\u044c\u043d\u043e\u0435 \u0441\u043e\u0446\u0441\u0442\u0440\u0430\u0445\u043e\u0432\u0430\u043d\u0438\u0435")
B.dB=new A.i("mil_conscript_spouse","\u0411\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u0430\u044f \u0436\u0435\u043d\u0430 \u0432\u043e\u0435\u043d\u043d\u043e\u0441\u043b\u0443\u0436\u0430\u0449\u0435\u0433\u043e \u043f\u043e \u043f\u0440\u0438\u0437\u044b\u0432\u0443")
B.dl=new A.i("mil_conscript_child","\u0420\u0435\u0431\u0451\u043d\u043e\u043a \u0432\u043e\u0435\u043d\u043d\u043e\u0441\u043b\u0443\u0436\u0430\u0449\u0435\u0433\u043e \u043f\u043e \u043f\u0440\u0438\u0437\u044b\u0432\u0443")
B.de=new A.i("alimony_debt","\u0415\u0441\u0442\u044c \u0437\u0430\u0434\u043e\u043b\u0436\u0435\u043d\u043d\u043e\u0441\u0442\u044c \u043f\u043e \u0430\u043b\u0438\u043c\u0435\u043d\u0442\u0430\u043c")
B.dy=new A.i("valid_zero_income","\u0415\u0441\u0442\u044c \u0443\u0432\u0430\u0436\u0438\u0442\u0435\u043b\u044c\u043d\u0430\u044f \u043f\u0440\u0438\u0447\u0438\u043d\u0430 \u043d\u0443\u043b\u0435\u0432\u043e\u0433\u043e \u0434\u043e\u0445\u043e\u0434\u0430")
B.ds=new A.i("i_adopt","\u0423\u0441\u044b\u043d\u043e\u0432\u043b\u044f\u044e / \u0443\u0434\u043e\u0447\u0435\u0440\u044f\u044e \u0440\u0435\u0431\u0451\u043d\u043a\u0430")
B.cX=new A.i("i_donor","\u041f\u043e\u0447\u0451\u0442\u043d\u044b\u0439 \u0434\u043e\u043d\u043e\u0440 \u0420\u043e\u0441\u0441\u0438\u0438")
B.aL=s([B.dc,B.dC,B.cP,B.df,B.d0,B.cV,B.d7,B.d4,B.cS,B.dm,B.dd,B.dg,B.dp,B.d5,B.cW,B.dq,B.dh,B.cU,B.dB,B.dl,B.de,B.dy,B.ds,B.cX],t.b)
B.aM=s(["age","gender","employment","region","marital","children","youngestChildAge","income","familySize"],t.s)
B.dr=new A.i("own_home","\u0421\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0435 \u0436\u0438\u043b\u044c\u0451")
B.dt=new A.i("rent_home","\u0421\u043d\u0438\u043c\u0430\u0435\u043c \u0436\u0438\u043b\u044c\u0451")
B.dx=new A.i("has_mortgage","\u0414\u0435\u0439\u0441\u0442\u0432\u0443\u044e\u0449\u0430\u044f \u0438\u043f\u043e\u0442\u0435\u043a\u0430")
B.d_=new A.i("bought_recent","\u041a\u0443\u043f\u0438\u043b\u0438 \u0436\u0438\u043b\u044c\u0451 \u0432 2021\u20132026")
B.dA=new A.i("high_utility","\u0416\u041a\u0425 > 22% \u0434\u043e\u0445\u043e\u0434\u0430")
B.da=new A.i("need_housing","\u041d\u0443\u0436\u0434\u0430\u0435\u043c\u0441\u044f \u0432 \u0443\u043b\u0443\u0447\u0448\u0435\u043d\u0438\u0438 \u0436\u0438\u043b\u044c\u044f")
B.d8=new A.i("young_family","\u041f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0430 \xab\u041c\u043e\u043b\u043e\u0434\u0430\u044f \u0441\u0435\u043c\u044c\u044f\xbb")
B.cQ=new A.i("communal","\u041a\u043e\u043c\u043c\u0443\u043d\u0430\u043b\u044c\u043d\u0430\u044f \u043a\u0432\u0430\u0440\u0442\u0438\u0440\u0430")
B.dj=new A.i("excess_property","\u0418\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u043e \u043c\u043e\u0436\u0435\u0442 \u043f\u0440\u0435\u0432\u044b\u0448\u0430\u0442\u044c \u043b\u0438\u043c\u0438\u0442 \u0434\u043b\u044f \u0435\u0434\u0438\u043d\u043e\u0433\u043e \u043f\u043e\u0441\u043e\u0431\u0438\u044f")
B.dw=new A.i("high_deposits","\u0415\u0441\u0442\u044c \u043a\u0440\u0443\u043f\u043d\u044b\u0435 \u0432\u043a\u043b\u0430\u0434\u044b / \u043f\u0440\u043e\u0446\u0435\u043d\u0442\u044b \u0441\u0432\u0435\u0440\u0445 \u043b\u0438\u043c\u0438\u0442\u0430")
B.aN=s([B.dr,B.dt,B.dx,B.d_,B.dA,B.da,B.d8,B.cQ,B.dj,B.dw],t.b)
B.F=new A.k("pregnancy_support",A.ko())
B.a0=new A.k("newborn",A.kn())
B.W=new A.k("mat_capital",A.kl())
B.K=new A.k("care_leave",A.kh())
B.a9=new A.k("unified_children",A.kp())
B.H=new A.k("family_annual_payment",A.kj())
B.ab=new A.k("multi_child_mortgage",A.km())
B.a4=new A.k("family_mortgage",A.kk())
B.P=new A.k("disabled_child",A.ki())
B.aa=new A.k("young_family",A.kq())
B.J=new A.k("adoption",A.kg())
B.D=new A.k("child_tax_deduction",A.lu())
B.y=new A.k("property_deduction",A.lA())
B.A=new A.k("medical_deduction",A.lz())
B.S=new A.k("education_deduction",A.lv())
B.C=new A.k("fitness_deduction",A.lw())
B.U=new A.k("iis_deduction",A.lx())
B.Z=new A.k("life_insurance_deduction",A.ly())
B.L=new A.k("charity_deduction",A.lt())
B.a6=new A.k("student",A.ll())
B.a7=new A.k("unemployment",A.lm())
B.V=new A.k("layoff",A.lf())
B.R=new A.k("housing_subsidy",A.le())
B.a2=new A.k("pension",A.lh())
B.O=new A.k("disability",A.lb())
B.a_=new A.k("property_tax_relief",A.li())
B.G=new A.k("communal_housing",A.l9())
B.I=new A.k("social_contract",A.lk())
B.X=new A.k("military",A.lg())
B.E=new A.k("conscript_family",A.la())
B.a8=new A.k("veteran_family",A.ln())
B.T=new A.k("honors",A.ld())
B.a5=new A.k("sick_leave",A.lj())
B.Q=new A.k("donor",A.lc())
B.a1=new A.k("north",A.l2())
B.M=new A.k("chernobyl",A.l_())
B.a3=new A.k("rehabilitated",A.l5())
B.Y=new A.k("moscow",A.l1())
B.N=new A.k("dfo",A.l0())
B.z=new A.k("regional_mat_cap",A.l4())
B.B=new A.k("regional_extra_info",A.l3())
B.aO=s([B.F,B.a0,B.W,B.K,B.a9,B.H,B.ab,B.a4,B.P,B.aa,B.J,B.D,B.y,B.A,B.S,B.C,B.U,B.Z,B.L,B.a6,B.a7,B.V,B.R,B.a2,B.O,B.a_,B.G,B.I,B.X,B.E,B.a8,B.T,B.a5,B.Q,B.a1,B.M,B.a3,B.Y,B.N,B.z,B.B],A.av("u<k>"))
B.cT=new A.i("pregnant","\u0421\u0435\u0439\u0447\u0430\u0441 \u0431\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u0430")
B.d1=new A.i("newborn","\u0420\u0435\u0431\u0451\u043d\u043e\u043a \u0440\u043e\u0434\u0438\u043b\u0441\u044f \u0432 2025\u20132026")
B.db=new A.i("disabled_child","\u0420\u0435\u0431\u0451\u043d\u043e\u043a-\u0438\u043d\u0432\u0430\u043b\u0438\u0434")
B.cR=new A.i("solo_parent","\u041e\u0434\u0438\u043d\u043e\u043a\u0438\u0439 \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u044c")
B.dD=new A.i("used_matcap","\u041c\u0430\u0442\u043a\u0430\u043f\u0438\u0442\u0430\u043b \u0443\u0436\u0435 \u043f\u043e\u043b\u0443\u0447\u0435\u043d")
B.cZ=new A.i("child_study","\u0420\u0435\u0431\u0451\u043d\u043e\u043a \u0443\u0447\u0438\u0442\u0441\u044f \u043e\u0447\u043d\u043e (\u0434\u043e 24)")
B.aP=s([B.cT,B.d1,B.db,B.cR,B.dD,B.cZ],t.b)
B.dk=new A.i("has_dis1","\u0418\u043d\u0432\u0430\u043b\u0438\u0434 I \u0433\u0440\u0443\u043f\u043f\u044b \u0432 \u0441\u0435\u043c\u044c\u0435")
B.d6=new A.i("has_dis2","\u0418\u043d\u0432\u0430\u043b\u0438\u0434 II \u0433\u0440\u0443\u043f\u043f\u044b \u0432 \u0441\u0435\u043c\u044c\u0435")
B.d3=new A.i("has_dis3","\u0418\u043d\u0432\u0430\u043b\u0438\u0434 III \u0433\u0440\u0443\u043f\u043f\u044b \u0432 \u0441\u0435\u043c\u044c\u0435")
B.dv=new A.i("elderly80","\u041f\u043e\u0436\u0438\u043b\u043e\u0439 80+ \u043b\u0435\u0442")
B.d9=new A.i("vet_fam","\u0412\u0435\u0442\u0435\u0440\u0430\u043d \u0411\u0414 \u0432 \u0441\u0435\u043c\u044c\u0435")
B.aQ=s([B.dk,B.d6,B.d3,B.dv,B.d9],t.b)
B.dz=new A.i("paid_med","\u041f\u043b\u0430\u0442\u0438\u043b(\u0430) \u0437\u0430 \u043b\u0435\u0447\u0435\u043d\u0438\u0435")
B.di=new A.i("paid_edu","\u041f\u043b\u0430\u0442\u0438\u043b(\u0430) \u0437\u0430 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435")
B.dn=new A.i("paid_fit","\u041f\u043b\u0430\u0442\u0438\u043b(\u0430) \u0437\u0430 \u0444\u0438\u0442\u043d\u0435\u0441")
B.d2=new A.i("has_iis","\u0415\u0441\u0442\u044c \u0418\u0418\u0421")
B.cY=new A.i("charity","\u041f\u043e\u0436\u0435\u0440\u0442\u0432\u043e\u0432\u0430\u043d\u0438\u044f")
B.du=new A.i("life_ins","\u0421\u0442\u0440\u0430\u0445\u043e\u0432\u0430\u043d\u0438\u0435 \u0436\u0438\u0437\u043d\u0438 (3+ \u043b\u0435\u0442)")
B.aR=s([B.dz,B.di,B.dn,B.d2,B.cY,B.du],t.b)
B.cL=new A.y("employed","\u0420\u0430\u0431\u043e\u0442\u0430\u044e \u043e\u0444\u0438\u0446\u0438\u0430\u043b\u044c\u043d\u043e")
B.cI=new A.y("self","\u0421\u0430\u043c\u043e\u0437\u0430\u043d\u044f\u0442\u044b\u0439")
B.cH=new A.y("ip","\u0418\u041f")
B.cE=new A.y("unemployed_reg","\u0411\u0435\u0437\u0440\u0430\u0431\u043e\u0442\u043d\u044b\u0439 (\u043d\u0430 \u0431\u0438\u0440\u0436\u0435)")
B.cG=new A.y("unemployed","\u0411\u0435\u0437\u0440\u0430\u0431\u043e\u0442\u043d\u044b\u0439")
B.cF=new A.y("pensioner","\u041f\u0435\u043d\u0441\u0438\u043e\u043d\u0435\u0440")
B.cA=new A.y("student","\u0421\u0442\u0443\u0434\u0435\u043d\u0442 \u043e\u0447\u043d\u043e\u0439 \u0444\u043e\u0440\u043c\u044b")
B.cM=new A.y("matleave","\u0412 \u0434\u0435\u043a\u0440\u0435\u0442\u0435 / \u043e\u0442\u043f\u0443\u0441\u043a\u0435 \u043f\u043e \u0443\u0445\u043e\u0434\u0443")
B.cD=new A.y("caregiver","\u0423\u0445\u043e\u0434 \u0437\u0430 \u0431\u043b\u0438\u0437\u043a\u0438\u043c \u0440\u043e\u0434\u0441\u0442\u0432\u0435\u043d\u043d\u0438\u043a\u043e\u043c")
B.aS=s([B.cL,B.cI,B.cH,B.cE,B.cG,B.cF,B.cA,B.cM,B.cD],t.I)
B.u={moscow:0,spb:1,sevastopol:2,adygea:3,altai_republic:4,bashkortostan:5,buryatia:6,dagestan:7,ingushetia:8,kabardino_balkaria:9,kalmykia:10,karachay_cherkessia:11,karelia:12,komi:13,crimea:14,mari_el:15,mordovia:16,sakha:17,north_ossetia:18,tatarstan:19,tyva:20,udmurtia:21,khakassia:22,chechnya:23,chuvashia:24,altai_krai:25,zabaykalsky:26,kamchatka:27,krasnodar:28,krasnoyarsk:29,perm:30,primorsky:31,stavropol:32,khabarovsk:33,amur:34,arkhangelsk:35,astrakhan:36,belgorod:37,bryansk:38,vladimir:39,volgograd:40,vologda:41,voronezh:42,zaporizhzhia:43,ivanovo:44,irkutsk:45,kaliningrad:46,kaluga:47,kemerovo:48,kirov:49,kostroma:50,kurgan:51,kursk:52,leningrad:53,lipetsk:54,lugansk:55,magadan:56,mo:57,murmansk:58,nizhny_novgorod:59,novgorod:60,novosibirsk:61,omsk:62,orenburg:63,orel:64,penza:65,pskov:66,rostov:67,ryazan:68,samara:69,saratov:70,sakhalin:71,sverdlovsk:72,smolensk:73,tambov:74,tver:75,tomsk:76,tula:77,tyumen:78,ulyanovsk:79,kherson:80,chelyabinsk:81,yaroslavl:82,jewish_ao:83,nenets_ao:84,khanty_mansi_ao:85,chukotka:86,yamalo_nenets_ao:87,donetsk:88}
B.aT=new A.W(B.u,[18971,17754,16613,14008,15473,14496,17754,14821,15311,17428,15962,15311,18079,18731,15799,14333,13844,24594,14659,13844,16450,14496,16613,15636,14170,14496,19057,28666,15636,18079,14985,19382,14659,19871,18731,18893,15799,13682,14985,15799,14008,16450,14333,15799,15311,17265,16776,15636,14821,14496,14985,15311,14170,17428,13518,15311,28340,17446,22709,15311,15962,15962,14170,14170,15147,13682,16125,15311,14496,15311,13682,22151,16125,16125,13518,15962,15962,16288,16288,14496,15799,14985,16288,20360,26712,19067,42511,22314,15311],t.J)
B.aU=new A.W(B.u,[180861,121475,66605,63759,72941,74391,83574,49925,44652,53252,55806,54755,81569,95980,63834,70460,67262,139435,53721,90515,75253,77925,80227,46652,68379,63971,99768,151016,76115,105571,83646,96177,63673,97025,99073,91121,69820,73891,65803,73285,68340,80975,75525,58e3,57122,95318,77022,83930,83017,67199,63292,72992,75521,94348,76460,57e3,178076,116008,125302,80778,72178,86546,73100,74294,63817,67293,63454,70813,73393,76626,67353,148172,89286,68468,63024,72783,85829,84212,94124,69676,58e3,81366,73832,91167,146957,135914,214604,177711,60627],t.J)
B.aZ={chukotka:0,kamchatka:1,magadan:2,yamalo_nenets_ao:3,nenets_ao:4,khanty_mansi_ao:5,murmansk:6,sakha:7,sakhalin:8,komi:9,arkhangelsk:10,krasnoyarsk:11,irkutsk:12,tomsk:13,karelia:14,tyumen:15}
B.aV=new A.W(B.aZ,[1,0.6,0.6,0.5,0.5,0.5,0.4,0.4,0.4,0.2,0.2,0.2,0.2,0.2,0.15,0.15],t.J)
B.b1={c:0,w:1,h:2,p:3,s:4,m:5,t:6,r:7,a:8}
B.aW=new A.W(B.b1,["\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67 \u0421\u0435\u043c\u044c\u044f \u0438 \u0434\u0435\u0442\u0438","\ud83d\udcbc \u0417\u0430\u043d\u044f\u0442\u043e\u0441\u0442\u044c","\ud83c\udfe0 \u0416\u0438\u043b\u044c\u0451","\ud83d\udc74 \u041f\u0435\u043d\u0441\u0438\u044f","\ud83e\udd1d \u0421\u043e\u0446\u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430","\ud83c\udf96\ufe0f \u0412\u043e\u0435\u043d\u043d\u0430\u044f \u0441\u043b\u0443\u0436\u0431\u0430","\ud83d\udcca \u041d\u0430\u043b\u043e\u0433\u043e\u0432\u044b\u0435 \u0432\u044b\u0447\u0435\u0442\u044b","\ud83c\udf0d \u0420\u0435\u0433\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435","\ud83c\udf96\ufe0f \u041f\u043e\u0447\u0451\u0442\u043d\u044b\u0435 \u0437\u0432\u0430\u043d\u0438\u044f \u0438 \u0437\u0430\u0441\u043b\u0443\u0433\u0438"],t.w)
B.v={}
B.aX=new A.W(B.v,[],t.w)
B.b0={regular:0,north:1,dfo:2}
B.aY=new A.W(B.b0,["regular","north","dfo"],t.w)
B.fk=new A.aD(B.v,0,t.O)
B.b_={mo:0,khanty_mansi_ao:1,yamalo_nenets_ao:2}
B.cO=new A.aD(B.b_,3,t.O)
B.dE=A.a1("lI")
B.dF=A.a1("lJ")
B.dG=A.a1("hS")
B.dH=A.a1("hT")
B.dI=A.a1("hU")
B.dJ=A.a1("hV")
B.dK=A.a1("hW")
B.dL=A.a1("o")
B.dM=A.a1("iq")
B.dN=A.a1("ir")
B.dO=A.a1("is")
B.dP=A.a1("ev")
B.dQ=new A.de(!1)})();(function staticFields(){$.dy=null
$.O=A.w([],t.f)
$.fc=null
$.eY=null
$.eX=null
$.h8=null
$.h3=null
$.hc=null
$.e3=null
$.e9=null
$.eQ=null
$.dz=A.w([],A.av("u<n<o>?>"))
$.aR=null
$.bQ=null
$.bR=null
$.eI=!1
$.E=B.i
$.fm=""
$.fn=null
$.eE=A.i2(t.N)
$.fV=0
$.fW=0})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal
s($,"lK","bT",()=>A.ku("_$dart_dartClosure"))
s($,"m4","hz",()=>A.w([new J.c7()],A.av("u<bq>")))
s($,"lN","hj",()=>A.a8(A.da({
toString:function(){return"$receiver$"}})))
s($,"lO","hk",()=>A.a8(A.da({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"lP","hl",()=>A.a8(A.da(null)))
s($,"lQ","hm",()=>A.a8(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"lT","hp",()=>A.a8(A.da(void 0)))
s($,"lU","hq",()=>A.a8(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"lS","ho",()=>A.a8(A.fj(null)))
s($,"lR","hn",()=>A.a8(function(){try{null.$method$}catch(r){return r.message}}()))
s($,"lW","hs",()=>A.a8(A.fj(void 0)))
s($,"lV","hr",()=>A.a8(function(){try{(void 0).$method$}catch(r){return r.message}}()))
s($,"lX","eT",()=>A.iy())
s($,"m1","hx",()=>A.i6(4096))
s($,"m_","hv",()=>new A.dH().$0())
s($,"m0","hw",()=>new A.dG().$0())
s($,"lY","ht",()=>new Int8Array(A.jh(A.w([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t))))
s($,"lZ","hu",()=>A.es("^[\\-\\.0-9A-Z_a-z~]*$",!1))
s($,"m3","ek",()=>A.h9(B.dL))
s($,"m6","hA",()=>{var r=2027
return A.w([A.er("\u041f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c \u043f\u0440\u0430\u0432\u043e","family_payment_2026",A.b3(2026,8,15),A.b3(2026,10,1),"\u0412\u043e\u0437\u0432\u0440\u0430\u0442 \u0447\u0430\u0441\u0442\u0438 \u041d\u0414\u0424\u041b \u0437\u0430 2025 \u0433\u043e\u0434. \u041f\u043e\u0434\u0430\u0442\u044c \u043c\u043e\u0436\u043d\u043e \u0434\u043e 1 \u043e\u043a\u0442\u044f\u0431\u0440\u044f \u2014 \u043f\u043e\u0442\u043e\u043c \u0442\u043e\u043b\u044c\u043a\u043e \u0432 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u043c \u0433\u043e\u0434\u0443.",B.al,"\u0421\u0435\u043c\u0435\u0439\u043d\u0430\u044f \u0432\u044b\u043f\u043b\u0430\u0442\u0430: \u043f\u0440\u0438\u0451\u043c \u0437\u0430\u044f\u0432\u043b\u0435\u043d\u0438\u0439 \u0437\u0430\u043a\u0430\u043d\u0447\u0438\u0432\u0430\u0435\u0442\u0441\u044f"),A.er("\u041f\u0435\u0440\u0435\u0441\u0447\u0438\u0442\u0430\u0442\u044c","mrot_2027",A.b3(r,1,1),A.b3(r,1,31),"\u041f\u0435\u0440\u0435\u0441\u0447\u0438\u0442\u0430\u043d\u044b \u043f\u043e\u0441\u043e\u0431\u0438\u0435 \u043f\u043e \u0443\u0445\u043e\u0434\u0443 \u0434\u043e 1,5 \u043b\u0435\u0442, \u0434\u0435\u043a\u0440\u0435\u0442\u043d\u044b\u0435 \u043f\u0440\u0438 \u043d\u0435\u0432\u044b\u0441\u043e\u043a\u043e\u043c \u0434\u043e\u0445\u043e\u0434\u0435 \u0438 \u043c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u0439 \u0431\u043e\u043b\u044c\u043d\u0438\u0447\u043d\u044b\u0439.",B.r,"\u0421 1 \u044f\u043d\u0432\u0430\u0440\u044f \u0432\u044b\u0440\u043e\u0441\u043b\u0438 \u041c\u0420\u041e\u0422 \u0438 \u043f\u0440\u043e\u0436\u0438\u0442\u043e\u0447\u043d\u044b\u0439 \u043c\u0438\u043d\u0438\u043c\u0443\u043c"),A.er("\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0441\u0443\u043c\u043c\u044b","indexation_2027",A.b3(r,2,1),A.b3(r,2,28),"\u041e\u0431\u043d\u043e\u0432\u0438\u043b\u0438 \u0441\u0443\u043c\u043c\u044b \u0431\u043e\u043b\u0435\u0435 \u0441\u043e\u0440\u043e\u043a\u0430 \u043c\u0435\u0440 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0438 \u043f\u043e \u0444\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0439 \u0438\u043d\u0444\u043b\u044f\u0446\u0438\u0438.",B.r,"\u0421 1 \u0444\u0435\u0432\u0440\u0430\u043b\u044f \u043f\u0440\u043e\u0438\u043d\u0434\u0435\u043a\u0441\u0438\u0440\u043e\u0432\u0430\u043d\u044b \u0432\u044b\u043f\u043b\u0430\u0442\u044b \u0438 \u043c\u0430\u0442\u043a\u0430\u043f\u0438\u0442\u0430\u043b")],A.av("u<X>"))})
s($,"lH","hi",()=>{var r,q,p=A.f6(t.N,A.av("x"))
for(r=0;r<19;++r){q=B.aI[r]
p.q(0,q.a,q)}return p})
s($,"m2","hy",()=>new A.cT())})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:A.aG,SharedArrayBuffer:A.aG,ArrayBufferView:A.bi,DataView:A.cb,Float32Array:A.cc,Float64Array:A.cd,Int16Array:A.ce,Int32Array:A.cf,Int8Array:A.cg,Uint16Array:A.ch,Uint32Array:A.ci,Uint8ClampedArray:A.bj,CanvasPixelArray:A.bj,Uint8Array:A.bk})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,SharedArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.F.$nativeSuperclassTag="ArrayBufferView"
A.bA.$nativeSuperclassTag="ArrayBufferView"
A.bB.$nativeSuperclassTag="ArrayBufferView"
A.bg.$nativeSuperclassTag="ArrayBufferView"
A.bC.$nativeSuperclassTag="ArrayBufferView"
A.bD.$nativeSuperclassTag="ArrayBufferView"
A.bh.$nativeSuperclassTag="ArrayBufferView"})()
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
var s=A.kK
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()
//# sourceMappingURL=main.dart.js.map
