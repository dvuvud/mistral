var sE=Object.defineProperty,cE=Object.defineProperties;var lE=Object.getOwnPropertyDescriptors;var Pb=Object.getOwnPropertySymbols;var dE=Object.prototype.hasOwnProperty,uE=Object.prototype.propertyIsEnumerable;var Lb=(t,n,e)=>n in t?sE(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e,v=(t,n)=>{for(var e in n||={})dE.call(n,e)&&Lb(t,e,n[e]);if(Pb)for(var e of Pb(n))uE.call(n,e)&&Lb(t,e,n[e]);return t},G=(t,n)=>cE(t,lE(n));var mt=null,dc=!1,yf=1,fE=null,He=Symbol("SIGNAL");function L(t){let n=mt;return mt=t,n}function hc(){return mt}var er={version:0,lastCleanEpoch:0,dirty:!1,producers:void 0,producersTail:void 0,consumers:void 0,consumersTail:void 0,recomputing:!1,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,kind:"unknown",producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function gi(t){if(dc)throw new Error("");if(mt===null)return;mt.consumerOnSignalRead(t);let n=mt.producersTail;if(n!==void 0&&n.producer===t)return;let e,i=mt.recomputing;if(i&&(e=n!==void 0?n.nextProducer:mt.producers,e!==void 0&&e.producer===t)){mt.producersTail=e,e.lastReadVersion=t.version;return}let r=t.consumersTail;if(r!==void 0&&r.consumer===mt&&(!i||hE(r,mt)))return;let o=Kr(mt),a={producer:t,consumer:mt,nextProducer:e,prevConsumer:r,lastReadVersion:t.version,nextConsumer:void 0};mt.producersTail=a,n!==void 0?n.nextProducer=a:mt.producers=a,o&&Hb(t,a)}function jb(){yf++}function pc(t){if(!(Kr(t)&&!t.dirty)&&!(!t.dirty&&t.lastCleanEpoch===yf)){if(!t.producerMustRecompute(t)&&!Yr(t)){mc(t);return}t.producerRecomputeValue(t),mc(t)}}function wf(t){if(t.consumers===void 0)return;let n=dc;dc=!0;try{for(let e=t.consumers;e!==void 0;e=e.nextConsumer){let i=e.consumer;i.dirty||mE(i)}}finally{dc=n}}function Cf(){return mt?.consumerAllowSignalWrites!==!1}function mE(t){t.dirty=!0,wf(t),t.consumerMarkedDirty?.(t)}function mc(t){t.dirty=!1,t.lastCleanEpoch=yf}function bi(t){return t&&Bb(t),L(t)}function Bb(t){t.producersTail=void 0,t.recomputing=!0}function tr(t,n){L(n),t&&Vb(t)}function Vb(t){t.recomputing=!1;let n=t.producersTail,e=n!==void 0?n.nextProducer:t.producers;if(e!==void 0){if(Kr(t))do e=Df(e);while(e!==void 0);n!==void 0?n.nextProducer=void 0:t.producers=void 0}}function Yr(t){for(let n=t.producers;n!==void 0;n=n.nextProducer){let e=n.producer,i=n.lastReadVersion;if(i!==e.version||(pc(e),i!==e.version))return!0}return!1}function vi(t){if(Kr(t)){let n=t.producers;for(;n!==void 0;)n=Df(n)}t.producers=void 0,t.producersTail=void 0,t.consumers=void 0,t.consumersTail=void 0}function Hb(t,n){let e=t.consumersTail,i=Kr(t);if(e!==void 0?(n.nextConsumer=e.nextConsumer,e.nextConsumer=n):(n.nextConsumer=void 0,t.consumers=n),n.prevConsumer=e,t.consumersTail=n,!i)for(let r=t.producers;r!==void 0;r=r.nextProducer)Hb(r.producer,r)}function Df(t){let n=t.producer,e=t.nextProducer,i=t.nextConsumer,r=t.prevConsumer;if(t.nextConsumer=void 0,t.prevConsumer=void 0,i!==void 0?i.prevConsumer=r:n.consumersTail=r,r!==void 0)r.nextConsumer=i;else if(n.consumers=i,!Kr(n)){let o=n.producers;for(;o!==void 0;)o=Df(o)}return e}function Kr(t){return t.consumerIsAlwaysLive||t.consumers!==void 0}function gc(t){fE?.(t)}function hE(t,n){let e=n.producersTail;if(e!==void 0){let i=n.producers;do{if(i===t)return!0;if(i===e)break;i=i.nextProducer}while(i!==void 0)}return!1}function bc(t,n){return Object.is(t,n)}function xa(t,n){let e=Object.create(pE);e.computation=t,n!==void 0&&(e.equal=n);let i=()=>{if(pc(e),gi(e),e.value===Da)throw e.error;return e.value};return i[He]=e,gc(e),i}var uc=Symbol("UNSET"),fc=Symbol("COMPUTING"),Da=Symbol("ERRORED"),pE=G(v({},er),{value:uc,dirty:!0,error:null,equal:bc,kind:"computed",producerMustRecompute(t){return t.value===uc||t.value===fc},producerRecomputeValue(t){if(t.value===fc)throw new Error("");let n=t.value;t.value=fc;let e=bi(t),i,r=!1;try{i=t.computation(),L(null),r=n!==uc&&n!==Da&&i!==Da&&t.equal(n,i)}catch(o){i=Da,t.error=o}finally{tr(t,e)}if(r){t.value=n;return}t.value=i,t.version++}});function gE(){throw new Error}var Ub=gE;function zb(t){Ub(t)}function xf(t){Ub=t}var bE=null;function Ef(t,n){let e=Object.create(Ea);e.value=t,n!==void 0&&(e.equal=n);let i=()=>$b(e);return i[He]=e,gc(e),[i,a=>nr(e,a),a=>If(e,a)]}function $b(t){return gi(t),t.value}function nr(t,n){Cf()||zb(t),t.equal(t.value,n)||(t.value=n,vE(t))}function If(t,n){Cf()||zb(t),nr(t,n(t.value))}var Ea=G(v({},er),{equal:bc,value:void 0,kind:"signal"});function vE(t){t.version++,jb(),wf(t),bE?.(t)}var Mf=G(v({},er),{consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!0,dirty:!0,kind:"effect"});function Sf(t){if(t.dirty=!1,t.version>0&&!Yr(t))return;t.version++;let n=bi(t);try{t.cleanup(),t.fn()}finally{tr(t,n)}}function ee(t){return typeof t=="function"}function Xr(t){let e=t(i=>{Error.call(i),i.stack=new Error().stack});return e.prototype=Object.create(Error.prototype),e.prototype.constructor=e,e}var vc=Xr(t=>function(e){t(this),this.message=e?`${e.length} errors occurred during unsubscription:
${e.map((i,r)=>`${r+1}) ${i.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=e});function ir(t,n){if(t){let e=t.indexOf(n);0<=e&&t.splice(e,1)}}var se=class t{constructor(n){this.initialTeardown=n,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let n;if(!this.closed){this.closed=!0;let{_parentage:e}=this;if(e)if(this._parentage=null,Array.isArray(e))for(let o of e)o.remove(this);else e.remove(this);let{initialTeardown:i}=this;if(ee(i))try{i()}catch(o){n=o instanceof vc?o.errors:[o]}let{_finalizers:r}=this;if(r){this._finalizers=null;for(let o of r)try{Wb(o)}catch(a){n=n??[],a instanceof vc?n=[...n,...a.errors]:n.push(a)}}if(n)throw new vc(n)}}add(n){var e;if(n&&n!==this)if(this.closed)Wb(n);else{if(n instanceof t){if(n.closed||n._hasParent(this))return;n._addParent(this)}(this._finalizers=(e=this._finalizers)!==null&&e!==void 0?e:[]).push(n)}}_hasParent(n){let{_parentage:e}=this;return e===n||Array.isArray(e)&&e.includes(n)}_addParent(n){let{_parentage:e}=this;this._parentage=Array.isArray(e)?(e.push(n),e):e?[e,n]:n}_removeParent(n){let{_parentage:e}=this;e===n?this._parentage=null:Array.isArray(e)&&ir(e,n)}remove(n){let{_finalizers:e}=this;e&&ir(e,n),n instanceof t&&n._removeParent(this)}};se.EMPTY=(()=>{let t=new se;return t.closed=!0,t})();var kf=se.EMPTY;function _c(t){return t instanceof se||t&&"closed"in t&&ee(t.remove)&&ee(t.add)&&ee(t.unsubscribe)}function Wb(t){ee(t)?t():t.unsubscribe()}var un={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var Jr={setTimeout(t,n,...e){let{delegate:i}=Jr;return i?.setTimeout?i.setTimeout(t,n,...e):setTimeout(t,n,...e)},clearTimeout(t){let{delegate:n}=Jr;return(n?.clearTimeout||clearTimeout)(t)},delegate:void 0};function yc(t){Jr.setTimeout(()=>{let{onUnhandledError:n}=un;if(n)n(t);else throw t})}function Ia(){}var Gb=Tf("C",void 0,void 0);function qb(t){return Tf("E",void 0,t)}function Zb(t){return Tf("N",t,void 0)}function Tf(t,n,e){return{kind:t,value:n,error:e}}var rr=null;function eo(t){if(un.useDeprecatedSynchronousErrorHandling){let n=!rr;if(n&&(rr={errorThrown:!1,error:null}),t(),n){let{errorThrown:e,error:i}=rr;if(rr=null,e)throw i}}else t()}function Qb(t){un.useDeprecatedSynchronousErrorHandling&&rr&&(rr.errorThrown=!0,rr.error=t)}var or=class extends se{constructor(n){super(),this.isStopped=!1,n?(this.destination=n,_c(n)&&n.add(this)):this.destination=wE}static create(n,e,i){return new fn(n,e,i)}next(n){this.isStopped?Rf(Zb(n),this):this._next(n)}error(n){this.isStopped?Rf(qb(n),this):(this.isStopped=!0,this._error(n))}complete(){this.isStopped?Rf(Gb,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(n){this.destination.next(n)}_error(n){try{this.destination.error(n)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},_E=Function.prototype.bind;function Af(t,n){return _E.call(t,n)}var Nf=class{constructor(n){this.partialObserver=n}next(n){let{partialObserver:e}=this;if(e.next)try{e.next(n)}catch(i){wc(i)}}error(n){let{partialObserver:e}=this;if(e.error)try{e.error(n)}catch(i){wc(i)}else wc(n)}complete(){let{partialObserver:n}=this;if(n.complete)try{n.complete()}catch(e){wc(e)}}},fn=class extends or{constructor(n,e,i){super();let r;if(ee(n)||!n)r={next:n??void 0,error:e??void 0,complete:i??void 0};else{let o;this&&un.useDeprecatedNextContext?(o=Object.create(n),o.unsubscribe=()=>this.unsubscribe(),r={next:n.next&&Af(n.next,o),error:n.error&&Af(n.error,o),complete:n.complete&&Af(n.complete,o)}):r=n}this.destination=new Nf(r)}};function wc(t){un.useDeprecatedSynchronousErrorHandling?Qb(t):yc(t)}function yE(t){throw t}function Rf(t,n){let{onStoppedNotification:e}=un;e&&Jr.setTimeout(()=>e(t,n))}var wE={closed:!0,next:Ia,error:yE,complete:Ia};var to=typeof Symbol=="function"&&Symbol.observable||"@@observable";function Vt(t){return t}function Of(...t){return Ff(t)}function Ff(t){return t.length===0?Vt:t.length===1?t[0]:function(e){return t.reduce((i,r)=>r(i),e)}}var Q=(()=>{class t{constructor(e){e&&(this._subscribe=e)}lift(e){let i=new t;return i.source=this,i.operator=e,i}subscribe(e,i,r){let o=DE(e)?e:new fn(e,i,r);return eo(()=>{let{operator:a,source:s}=this;o.add(a?a.call(o,s):s?this._subscribe(o):this._trySubscribe(o))}),o}_trySubscribe(e){try{return this._subscribe(e)}catch(i){e.error(i)}}forEach(e,i){return i=Yb(i),new i((r,o)=>{let a=new fn({next:s=>{try{e(s)}catch(c){o(c),a.unsubscribe()}},error:o,complete:r});this.subscribe(a)})}_subscribe(e){var i;return(i=this.source)===null||i===void 0?void 0:i.subscribe(e)}[to](){return this}pipe(...e){return Ff(e)(this)}toPromise(e){return e=Yb(e),new e((i,r)=>{let o;this.subscribe(a=>o=a,a=>r(a),()=>i(o))})}}return t.create=n=>new t(n),t})();function Yb(t){var n;return(n=t??un.Promise)!==null&&n!==void 0?n:Promise}function CE(t){return t&&ee(t.next)&&ee(t.error)&&ee(t.complete)}function DE(t){return t&&t instanceof or||CE(t)&&_c(t)}function xE(t){return ee(t?.lift)}function ie(t){return n=>{if(xE(n))return n.lift(function(e){try{return t(e,this)}catch(i){this.error(i)}});throw new TypeError("Unable to lift unknown Observable type")}}function re(t,n,e,i,r){return new Pf(t,n,e,i,r)}var Pf=class extends or{constructor(n,e,i,r,o,a){super(n),this.onFinalize=o,this.shouldUnsubscribe=a,this._next=e?function(s){try{e(s)}catch(c){n.error(c)}}:super._next,this._error=r?function(s){try{r(s)}catch(c){n.error(c)}finally{this.unsubscribe()}}:super._error,this._complete=i?function(){try{i()}catch(s){n.error(s)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var n;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:e}=this;super.unsubscribe(),!e&&((n=this.onFinalize)===null||n===void 0||n.call(this))}}};var Kb=Xr(t=>function(){t(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var x=(()=>{class t extends Q{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(e){let i=new Cc(this,this);return i.operator=e,i}_throwIfClosed(){if(this.closed)throw new Kb}next(e){eo(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let i of this.currentObservers)i.next(e)}})}error(e){eo(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=e;let{observers:i}=this;for(;i.length;)i.shift().error(e)}})}complete(){eo(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:e}=this;for(;e.length;)e.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var e;return((e=this.observers)===null||e===void 0?void 0:e.length)>0}_trySubscribe(e){return this._throwIfClosed(),super._trySubscribe(e)}_subscribe(e){return this._throwIfClosed(),this._checkFinalizedStatuses(e),this._innerSubscribe(e)}_innerSubscribe(e){let{hasError:i,isStopped:r,observers:o}=this;return i||r?kf:(this.currentObservers=null,o.push(e),new se(()=>{this.currentObservers=null,ir(o,e)}))}_checkFinalizedStatuses(e){let{hasError:i,thrownError:r,isStopped:o}=this;i?e.error(r):o&&e.complete()}asObservable(){let e=new Q;return e.source=this,e}}return t.create=(n,e)=>new Cc(n,e),t})(),Cc=class extends x{constructor(n,e){super(),this.destination=n,this.source=e}next(n){var e,i;(i=(e=this.destination)===null||e===void 0?void 0:e.next)===null||i===void 0||i.call(e,n)}error(n){var e,i;(i=(e=this.destination)===null||e===void 0?void 0:e.error)===null||i===void 0||i.call(e,n)}complete(){var n,e;(e=(n=this.destination)===null||n===void 0?void 0:n.complete)===null||e===void 0||e.call(n)}_subscribe(n){var e,i;return(i=(e=this.source)===null||e===void 0?void 0:e.subscribe(n))!==null&&i!==void 0?i:kf}};var Ue=class extends x{constructor(n){super(),this._value=n}get value(){return this.getValue()}_subscribe(n){let e=super._subscribe(n);return!e.closed&&n.next(this._value),e}getValue(){let{hasError:n,thrownError:e,_value:i}=this;if(n)throw e;return this._throwIfClosed(),i}next(n){super.next(this._value=n)}};var Ma={now(){return(Ma.delegate||Date).now()},delegate:void 0};var _i=class extends x{constructor(n=1/0,e=1/0,i=Ma){super(),this._bufferSize=n,this._windowTime=e,this._timestampProvider=i,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=e===1/0,this._bufferSize=Math.max(1,n),this._windowTime=Math.max(1,e)}next(n){let{isStopped:e,_buffer:i,_infiniteTimeWindow:r,_timestampProvider:o,_windowTime:a}=this;e||(i.push(n),!r&&i.push(o.now()+a)),this._trimBuffer(),super.next(n)}_subscribe(n){this._throwIfClosed(),this._trimBuffer();let e=this._innerSubscribe(n),{_infiniteTimeWindow:i,_buffer:r}=this,o=r.slice();for(let a=0;a<o.length&&!n.closed;a+=i?1:2)n.next(o[a]);return this._checkFinalizedStatuses(n),e}_trimBuffer(){let{_bufferSize:n,_timestampProvider:e,_buffer:i,_infiniteTimeWindow:r}=this,o=(r?1:2)*n;if(n<1/0&&o<i.length&&i.splice(0,i.length-o),!r){let a=e.now(),s=0;for(let c=1;c<i.length&&i[c]<=a;c+=2)s=c;s&&i.splice(0,s+1)}}};var Dc=class extends se{constructor(n,e){super()}schedule(n,e=0){return this}};var Sa={setInterval(t,n,...e){let{delegate:i}=Sa;return i?.setInterval?i.setInterval(t,n,...e):setInterval(t,n,...e)},clearInterval(t){let{delegate:n}=Sa;return(n?.clearInterval||clearInterval)(t)},delegate:void 0};var xc=class extends Dc{constructor(n,e){super(n,e),this.scheduler=n,this.work=e,this.pending=!1}schedule(n,e=0){var i;if(this.closed)return this;this.state=n;let r=this.id,o=this.scheduler;return r!=null&&(this.id=this.recycleAsyncId(o,r,e)),this.pending=!0,this.delay=e,this.id=(i=this.id)!==null&&i!==void 0?i:this.requestAsyncId(o,this.id,e),this}requestAsyncId(n,e,i=0){return Sa.setInterval(n.flush.bind(n,this),i)}recycleAsyncId(n,e,i=0){if(i!=null&&this.delay===i&&this.pending===!1)return e;e!=null&&Sa.clearInterval(e)}execute(n,e){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;let i=this._execute(n,e);if(i)return i;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(n,e){let i=!1,r;try{this.work(n)}catch(o){i=!0,r=o||new Error("Scheduled action threw falsy error")}if(i)return this.unsubscribe(),r}unsubscribe(){if(!this.closed){let{id:n,scheduler:e}=this,{actions:i}=e;this.work=this.state=this.scheduler=null,this.pending=!1,ir(i,this),n!=null&&(this.id=this.recycleAsyncId(e,n,null)),this.delay=null,super.unsubscribe()}}};var no=class t{constructor(n,e=t.now){this.schedulerActionCtor=n,this.now=e}schedule(n,e=0,i){return new this.schedulerActionCtor(this,n).schedule(i,e)}};no.now=Ma.now;var Ec=class extends no{constructor(n,e=no.now){super(n,e),this.actions=[],this._active=!1}flush(n){let{actions:e}=this;if(this._active){e.push(n);return}let i;this._active=!0;do if(i=n.execute(n.state,n.delay))break;while(n=e.shift());if(this._active=!1,i){for(;n=e.shift();)n.unsubscribe();throw i}}};var ka=new Ec(xc),Xb=ka;var Te=new Q(t=>t.complete());function Ic(t){return t&&ee(t.schedule)}function Lf(t){return t[t.length-1]}function Mc(t){return ee(Lf(t))?t.pop():void 0}function Mn(t){return Ic(Lf(t))?t.pop():void 0}function Jb(t,n){return typeof Lf(t)=="number"?t.pop():n}function tv(t,n,e,i){function r(o){return o instanceof e?o:new e(function(a){a(o)})}return new(e||(e=Promise))(function(o,a){function s(u){try{l(i.next(u))}catch(f){a(f)}}function c(u){try{l(i.throw(u))}catch(f){a(f)}}function l(u){u.done?o(u.value):r(u.value).then(s,c)}l((i=i.apply(t,n||[])).next())})}function ev(t){var n=typeof Symbol=="function"&&Symbol.iterator,e=n&&t[n],i=0;if(e)return e.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&i>=t.length&&(t=void 0),{value:t&&t[i++],done:!t}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}function ar(t){return this instanceof ar?(this.v=t,this):new ar(t)}function nv(t,n,e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=e.apply(t,n||[]),r,o=[];return r=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),s("next"),s("throw"),s("return",a),r[Symbol.asyncIterator]=function(){return this},r;function a(h){return function(b){return Promise.resolve(b).then(h,f)}}function s(h,b){i[h]&&(r[h]=function(C){return new Promise(function(I,A){o.push([h,C,I,A])>1||c(h,C)})},b&&(r[h]=b(r[h])))}function c(h,b){try{l(i[h](b))}catch(C){m(o[0][3],C)}}function l(h){h.value instanceof ar?Promise.resolve(h.value.v).then(u,f):m(o[0][2],h)}function u(h){c("next",h)}function f(h){c("throw",h)}function m(h,b){h(b),o.shift(),o.length&&c(o[0][0],o[0][1])}}function iv(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n=t[Symbol.asyncIterator],e;return n?n.call(t):(t=typeof ev=="function"?ev(t):t[Symbol.iterator](),e={},i("next"),i("throw"),i("return"),e[Symbol.asyncIterator]=function(){return this},e);function i(o){e[o]=t[o]&&function(a){return new Promise(function(s,c){a=t[o](a),r(s,c,a.done,a.value)})}}function r(o,a,s,c){Promise.resolve(c).then(function(l){o({value:l,done:s})},a)}}var Sc=t=>t&&typeof t.length=="number"&&typeof t!="function";function kc(t){return ee(t?.then)}function Tc(t){return ee(t[to])}function Ac(t){return Symbol.asyncIterator&&ee(t?.[Symbol.asyncIterator])}function Rc(t){return new TypeError(`You provided ${t!==null&&typeof t=="object"?"an invalid object":`'${t}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function EE(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var Nc=EE();function Oc(t){return ee(t?.[Nc])}function Fc(t){return nv(this,arguments,function*(){let e=t.getReader();try{for(;;){let{value:i,done:r}=yield ar(e.read());if(r)return yield ar(void 0);yield yield ar(i)}}finally{e.releaseLock()}})}function Pc(t){return ee(t?.getReader)}function Ee(t){if(t instanceof Q)return t;if(t!=null){if(Tc(t))return IE(t);if(Sc(t))return ME(t);if(kc(t))return SE(t);if(Ac(t))return rv(t);if(Oc(t))return kE(t);if(Pc(t))return TE(t)}throw Rc(t)}function IE(t){return new Q(n=>{let e=t[to]();if(ee(e.subscribe))return e.subscribe(n);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function ME(t){return new Q(n=>{for(let e=0;e<t.length&&!n.closed;e++)n.next(t[e]);n.complete()})}function SE(t){return new Q(n=>{t.then(e=>{n.closed||(n.next(e),n.complete())},e=>n.error(e)).then(null,yc)})}function kE(t){return new Q(n=>{for(let e of t)if(n.next(e),n.closed)return;n.complete()})}function rv(t){return new Q(n=>{AE(t,n).catch(e=>n.error(e))})}function TE(t){return rv(Fc(t))}function AE(t,n){var e,i,r,o;return tv(this,void 0,void 0,function*(){try{for(e=iv(t);i=yield e.next(),!i.done;){let a=i.value;if(n.next(a),n.closed)return}}catch(a){r={error:a}}finally{try{i&&!i.done&&(o=e.return)&&(yield o.call(e))}finally{if(r)throw r.error}}n.complete()})}function Nt(t,n,e,i=0,r=!1){let o=n.schedule(function(){e(),r?t.add(this.schedule(null,i)):this.unsubscribe()},i);if(t.add(o),!r)return o}function Lc(t,n=0){return ie((e,i)=>{e.subscribe(re(i,r=>Nt(i,t,()=>i.next(r),n),()=>Nt(i,t,()=>i.complete(),n),r=>Nt(i,t,()=>i.error(r),n)))})}function jc(t,n=0){return ie((e,i)=>{i.add(t.schedule(()=>e.subscribe(i),n))})}function ov(t,n){return Ee(t).pipe(jc(n),Lc(n))}function av(t,n){return Ee(t).pipe(jc(n),Lc(n))}function sv(t,n){return new Q(e=>{let i=0;return n.schedule(function(){i===t.length?e.complete():(e.next(t[i++]),e.closed||this.schedule())})})}function cv(t,n){return new Q(e=>{let i;return Nt(e,n,()=>{i=t[Nc](),Nt(e,n,()=>{let r,o;try{({value:r,done:o}=i.next())}catch(a){e.error(a);return}o?e.complete():e.next(r)},0,!0)}),()=>ee(i?.return)&&i.return()})}function Bc(t,n){if(!t)throw new Error("Iterable cannot be null");return new Q(e=>{Nt(e,n,()=>{let i=t[Symbol.asyncIterator]();Nt(e,n,()=>{i.next().then(r=>{r.done?e.complete():e.next(r.value)})},0,!0)})})}function lv(t,n){return Bc(Fc(t),n)}function dv(t,n){if(t!=null){if(Tc(t))return ov(t,n);if(Sc(t))return sv(t,n);if(kc(t))return av(t,n);if(Ac(t))return Bc(t,n);if(Oc(t))return cv(t,n);if(Pc(t))return lv(t,n)}throw Rc(t)}function Ie(t,n){return n?dv(t,n):Ee(t)}function O(...t){let n=Mn(t);return Ie(t,n)}function sr(t,n){let e=ee(t)?t:()=>t,i=r=>r.error(e());return new Q(n?r=>n.schedule(i,0,r):i)}function Ta(t){return!!t&&(t instanceof Q||ee(t.lift)&&ee(t.subscribe))}var Zn=Xr(t=>function(){t(this),this.name="EmptyError",this.message="no elements in sequence"});function jf(t,n){let e=typeof n=="object";return new Promise((i,r)=>{let o=new fn({next:a=>{i(a),o.unsubscribe()},error:r,complete:()=>{e?i(n.defaultValue):r(new Zn)}});t.subscribe(o)})}function uv(t){return t instanceof Date&&!isNaN(t)}function X(t,n){return ie((e,i)=>{let r=0;e.subscribe(re(i,o=>{i.next(t.call(n,o,r++))}))})}var{isArray:RE}=Array;function NE(t,n){return RE(n)?t(...n):t(n)}function Vc(t){return X(n=>NE(t,n))}var{isArray:OE}=Array,{getPrototypeOf:FE,prototype:PE,keys:LE}=Object;function Hc(t){if(t.length===1){let n=t[0];if(OE(n))return{args:n,keys:null};if(jE(n)){let e=LE(n);return{args:e.map(i=>n[i]),keys:e}}}return{args:t,keys:null}}function jE(t){return t&&typeof t=="object"&&FE(t)===PE}function Uc(t,n){return t.reduce((e,i,r)=>(e[i]=n[r],e),{})}function io(...t){let n=Mn(t),e=Mc(t),{args:i,keys:r}=Hc(t);if(i.length===0)return Ie([],n);let o=new Q(BE(i,n,r?a=>Uc(r,a):Vt));return e?o.pipe(Vc(e)):o}function BE(t,n,e=Vt){return i=>{fv(n,()=>{let{length:r}=t,o=new Array(r),a=r,s=r;for(let c=0;c<r;c++)fv(n,()=>{let l=Ie(t[c],n),u=!1;l.subscribe(re(i,f=>{o[c]=f,u||(u=!0,s--),s||i.next(e(o.slice()))},()=>{--a||i.complete()}))},i)},i)}}function fv(t,n,e){t?Nt(e,t,n):n()}function mv(t,n,e,i,r,o,a,s){let c=[],l=0,u=0,f=!1,m=()=>{f&&!c.length&&!l&&n.complete()},h=C=>l<i?b(C):c.push(C),b=C=>{o&&n.next(C),l++;let I=!1;Ee(e(C,u++)).subscribe(re(n,A=>{r?.(A),o?h(A):n.next(A)},()=>{I=!0},void 0,()=>{if(I)try{for(l--;c.length&&l<i;){let A=c.shift();a?Nt(n,a,()=>b(A)):b(A)}m()}catch(A){n.error(A)}}))};return t.subscribe(re(n,h,()=>{f=!0,m()})),()=>{s?.()}}function st(t,n,e=1/0){return ee(n)?st((i,r)=>X((o,a)=>n(i,o,r,a))(Ee(t(i,r))),e):(typeof n=="number"&&(e=n),ie((i,r)=>mv(i,r,t,e)))}function yi(t=1/0){return st(Vt,t)}function hv(){return yi(1)}function wi(...t){return hv()(Ie(t,Mn(t)))}function Qn(t){return new Q(n=>{Ee(t()).subscribe(n)})}function Aa(...t){let n=Mc(t),{args:e,keys:i}=Hc(t),r=new Q(o=>{let{length:a}=e;if(!a){o.complete();return}let s=new Array(a),c=a,l=a;for(let u=0;u<a;u++){let f=!1;Ee(e[u]).subscribe(re(o,m=>{f||(f=!0,l--),s[u]=m},()=>c--,void 0,()=>{(!c||!f)&&(l||o.next(i?Uc(i,s):s),o.complete())}))}});return n?r.pipe(Vc(n)):r}function Ra(t=0,n,e=Xb){let i=-1;return n!=null&&(Ic(n)?e=n:i=n),new Q(r=>{let o=uv(t)?+t-e.now():t;o<0&&(o=0);let a=0;return e.schedule(function(){r.closed||(r.next(a++),0<=i?this.schedule(void 0,i):r.complete())},o)})}function mn(...t){let n=Mn(t),e=Jb(t,1/0),i=t;return i.length?i.length===1?Ee(i[0]):yi(e)(Ie(i,n)):Te}function ue(t,n){return ie((e,i)=>{let r=0;e.subscribe(re(i,o=>t.call(n,o,r++)&&i.next(o)))})}function pv(t){return ie((n,e)=>{let i=!1,r=null,o=null,a=!1,s=()=>{if(o?.unsubscribe(),o=null,i){i=!1;let l=r;r=null,e.next(l)}a&&e.complete()},c=()=>{o=null,a&&e.complete()};n.subscribe(re(e,l=>{i=!0,r=l,o||Ee(t(l)).subscribe(o=re(e,s,c))},()=>{a=!0,(!i||!o||o.closed)&&e.complete()}))})}function zc(t,n=ka){return pv(()=>Ra(t,n))}function Ci(t){return ie((n,e)=>{let i=null,r=!1,o;i=n.subscribe(re(e,void 0,void 0,a=>{o=Ee(t(a,Ci(t)(n))),i?(i.unsubscribe(),i=null,o.subscribe(e)):r=!0})),r&&(i.unsubscribe(),i=null,o.subscribe(e))})}function Di(t,n){return ee(n)?st(t,n,1):st(t,1)}function Yn(t,n=ka){return ie((e,i)=>{let r=null,o=null,a=null,s=()=>{if(r){r.unsubscribe(),r=null;let l=o;o=null,i.next(l)}};function c(){let l=a+t,u=n.now();if(u<l){r=this.schedule(void 0,l-u),i.add(r);return}s()}e.subscribe(re(i,l=>{o=l,a=n.now(),r||(r=n.schedule(c,t),i.add(r))},()=>{s(),i.complete()},void 0,()=>{o=r=null}))})}function gv(t){return ie((n,e)=>{let i=!1;n.subscribe(re(e,r=>{i=!0,e.next(r)},()=>{i||e.next(t),e.complete()}))})}function Ge(t){return t<=0?()=>Te:ie((n,e)=>{let i=0;n.subscribe(re(e,r=>{++i<=t&&(e.next(r),t<=i&&e.complete())}))})}function $c(t,n=Vt){return t=t??VE,ie((e,i)=>{let r,o=!0;e.subscribe(re(i,a=>{let s=n(a);(o||!t(r,s))&&(o=!1,r=s,i.next(a))}))})}function VE(t,n){return t===n}function bv(t=HE){return ie((n,e)=>{let i=!1;n.subscribe(re(e,r=>{i=!0,e.next(r)},()=>i?e.complete():e.error(t())))})}function HE(){return new Zn}function xi(t){return ie((n,e)=>{try{n.subscribe(e)}finally{e.add(t)}})}function Kn(t,n){let e=arguments.length>=2;return i=>i.pipe(t?ue((r,o)=>t(r,o,i)):Vt,Ge(1),e?gv(n):bv(()=>new Zn))}function Wc(t){return t<=0?()=>Te:ie((n,e)=>{let i=[];n.subscribe(re(e,r=>{i.push(r),t<i.length&&i.shift()},()=>{for(let r of i)e.next(r);e.complete()},void 0,()=>{i=null}))})}function Gc(){return ie((t,n)=>{let e,i=!1;t.subscribe(re(n,r=>{let o=e;e=r,i&&n.next([o,r]),i=!0}))})}function Na(t={}){let{connector:n=()=>new x,resetOnError:e=!0,resetOnComplete:i=!0,resetOnRefCountZero:r=!0}=t;return o=>{let a,s,c,l=0,u=!1,f=!1,m=()=>{s?.unsubscribe(),s=void 0},h=()=>{m(),a=c=void 0,u=f=!1},b=()=>{let C=a;h(),C?.unsubscribe()};return ie((C,I)=>{l++,!f&&!u&&m();let A=c=c??n();I.add(()=>{l--,l===0&&!f&&!u&&(s=Bf(b,r))}),A.subscribe(I),!a&&l>0&&(a=new fn({next:be=>A.next(be),error:be=>{f=!0,m(),s=Bf(h,e,be),A.error(be)},complete:()=>{u=!0,m(),s=Bf(h,i),A.complete()}}),Ee(C).subscribe(a))})(o)}}function Bf(t,n,...e){if(n===!0){t();return}if(n===!1)return;let i=new fn({next:()=>{i.unsubscribe(),t()}});return Ee(n(...e)).subscribe(i)}function qc(t,n,e){let i,r=!1;return t&&typeof t=="object"?{bufferSize:i=1/0,windowTime:n=1/0,refCount:r=!1,scheduler:e}=t:i=t??1/0,Na({connector:()=>new _i(i,n,e),resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:r})}function cr(t){return ue((n,e)=>t<=e)}function ht(...t){let n=Mn(t);return ie((e,i)=>{(n?wi(t,e,n):wi(t,e)).subscribe(i)})}function ct(t,n){return ie((e,i)=>{let r=null,o=0,a=!1,s=()=>a&&!r&&i.complete();e.subscribe(re(i,c=>{r?.unsubscribe();let l=0,u=o++;Ee(t(c,u)).subscribe(r=re(i,f=>i.next(n?n(c,f,u,l++):f),()=>{r=null,s()}))},()=>{a=!0,s()}))})}function qe(t){return ie((n,e)=>{Ee(t).subscribe(re(e,()=>e.complete(),Ia)),!e.closed&&n.subscribe(e)})}function je(t,n,e){let i=ee(t)||n||e?{next:t,error:n,complete:e}:t;return i?ie((r,o)=>{var a;(a=i.subscribe)===null||a===void 0||a.call(i);let s=!0;r.subscribe(re(o,c=>{var l;(l=i.next)===null||l===void 0||l.call(i,c),o.next(c)},()=>{var c;s=!1,(c=i.complete)===null||c===void 0||c.call(i),o.complete()},c=>{var l;s=!1,(l=i.error)===null||l===void 0||l.call(i,c),o.error(c)},()=>{var c,l;s&&((c=i.unsubscribe)===null||c===void 0||c.call(i)),(l=i.finalize)===null||l===void 0||l.call(i)}))}):Vt}var Vf;function Zc(){return Vf}function Sn(t){let n=Vf;return Vf=t,n}var vv=Symbol("NotFound");function ro(t){return t===vv||t?.name==="\u0275NotFound"}function _v(t){let n=L(null);try{return t()}finally{L(n)}}var tl="https://angular.dev/best-practices/security#preventing-cross-site-scripting-xss",D=class extends Error{code;constructor(n,e){super(Yt(n,e)),this.code=n}};function UE(t){return`NG0${Math.abs(t)}`}function Yt(t,n){return`${UE(t)}${n?": "+n:""}`}var ao=globalThis;function _e(t){for(let n in t)if(t[n]===_e)return n;throw Error("")}function xv(t,n){for(let e in n)n.hasOwnProperty(e)&&!t.hasOwnProperty(e)&&(t[e]=n[e])}function Va(t){if(typeof t=="string")return t;if(Array.isArray(t))return`[${t.map(Va).join(", ")}]`;if(t==null)return""+t;let n=t.overriddenName||t.name;if(n)return`${n}`;let e=t.toString();if(e==null)return""+e;let i=e.indexOf(`
`);return i>=0?e.slice(0,i):e}function nl(t,n){return t?n?`${t} ${n}`:t:n||""}var zE=_e({__forward_ref__:_e});function Ht(t){return t.__forward_ref__=Ht,t}function lt(t){return Jf(t)?t():t}function Jf(t){return typeof t=="function"&&t.hasOwnProperty(zE)&&t.__forward_ref__===Ht}function p(t){return{token:t.token,providedIn:t.providedIn||null,factory:t.factory,value:void 0}}function P(t){return{providers:t.providers||[],imports:t.imports||[]}}function Ha(t){return $E(t,il)}function em(t){return Ha(t)!==null}function $E(t,n){return t.hasOwnProperty(n)&&t[n]||null}function WE(t){let n=t?.[il]??null;return n||null}function Uf(t){return t&&t.hasOwnProperty(Yc)?t[Yc]:null}var il=_e({\u0275prov:_e}),Yc=_e({\u0275inj:_e}),g=class{_desc;ngMetadataName="InjectionToken";\u0275prov;constructor(n,e){this._desc=n,this.\u0275prov=void 0,typeof e=="number"?this.__NG_ELEMENT_ID__=e:e!==void 0&&(this.\u0275prov=p({token:this,providedIn:e.providedIn||"root",factory:e.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};function tm(t){return t&&!!t.\u0275providers}var nm=_e({\u0275cmp:_e}),im=_e({\u0275dir:_e}),rm=_e({\u0275pipe:_e}),om=_e({\u0275mod:_e}),Fa=_e({\u0275fac:_e}),mr=_e({__NG_ELEMENT_ID__:_e}),yv=_e({__NG_ENV_ID__:_e});function am(t){return rl(t,"@NgModule"),t[om]||null}function Tn(t){return rl(t,"@Component"),t[nm]||null}function sm(t){return rl(t,"@Directive"),t[im]||null}function Ev(t){return rl(t,"@Pipe"),t[rm]||null}function rl(t,n){if(t==null)throw new D(-919,!1)}function ol(t){return typeof t=="string"?t:t==null?"":String(t)}var Iv=_e({ngErrorCode:_e}),GE=_e({ngErrorMessage:_e}),qE=_e({ngTokenPath:_e});function cm(t,n){return Mv("",-200,n)}function al(t,n){throw new D(-201,!1)}function Mv(t,n,e){let i=new D(n,t);return i[Iv]=n,i[GE]=t,e&&(i[qE]=e),i}function ZE(t){return t[Iv]}var zf;function Sv(){return zf}function Dt(t){let n=zf;return zf=t,n}function lm(t,n,e){let i=Ha(t);if(i&&i.providedIn=="root")return i.value===void 0?i.value=i.factory():i.value;if(e&8)return null;if(n!==void 0)return n;al(t,"")}var QE={},lr=QE,YE="__NG_DI_FLAG__",$f=class{injector;constructor(n){this.injector=n}retrieve(n,e){let i=dr(e)||0;try{return this.injector.get(n,i&8?null:lr,i)}catch(r){if(ro(r))return r;throw r}}};function KE(t,n=0){let e=Zc();if(e===void 0)throw new D(-203,!1);if(e===null)return lm(t,void 0,n);{let i=XE(n),r=e.retrieve(t,i);if(ro(r)){if(i.optional)return null;throw r}return r}}function T(t,n=0){return(Sv()||KE)(lt(t),n)}function d(t,n){return T(t,dr(n))}function dr(t){return typeof t>"u"||typeof t=="number"?t:0|(t.optional&&8)|(t.host&&1)|(t.self&&2)|(t.skipSelf&&4)}function XE(t){return{optional:!!(t&8),host:!!(t&1),self:!!(t&2),skipSelf:!!(t&4)}}function Wf(t){let n=[];for(let e=0;e<t.length;e++){let i=lt(t[e]);if(Array.isArray(i)){if(i.length===0)throw new D(900,!1);let r,o=0;for(let a=0;a<i.length;a++){let s=i[a],c=JE(s);typeof c=="number"?c===-1?r=s.token:o|=c:r=s}n.push(T(r,o))}else n.push(T(i))}return n}function JE(t){return t[YE]}function Ei(t,n){let e=t.hasOwnProperty(Fa);return e?t[Fa]:null}function kv(t,n,e){if(t.length!==n.length)return!1;for(let i=0;i<t.length;i++){let r=t[i],o=n[i];if(e&&(r=e(r),o=e(o)),o!==r)return!1}return!0}function Tv(t){return t.flat(Number.POSITIVE_INFINITY)}function sl(t,n){t.forEach(e=>Array.isArray(e)?sl(e,n):n(e))}function dm(t,n,e){n>=t.length?t.push(e):t.splice(n,0,e)}function Ua(t,n){return n>=t.length-1?t.pop():t.splice(n,1)[0]}function Av(t,n){let e=[];for(let i=0;i<t;i++)e.push(n);return e}function Rv(t,n,e,i){let r=t.length;if(r==n)t.push(e,i);else if(r===1)t.push(i,t[0]),t[0]=e;else{for(r--,t.push(t[r-1],t[r]);r>n;){let o=r-2;t[r]=t[o],r--}t[n]=e,t[n+1]=i}}function cl(t,n,e){let i=so(t,n);return i>=0?t[i|1]=e:(i=~i,Rv(t,i,n,e)),i}function ll(t,n){let e=so(t,n);if(e>=0)return t[e|1]}function so(t,n){return eI(t,n,1)}function eI(t,n,e){let i=0,r=t.length>>e;for(;r!==i;){let o=i+(r-i>>1),a=t[o<<e];if(n===a)return o<<e;a>n?r=o:i=o+1}return~(r<<e)}var Si={},pt=[],ki=new g(""),um=new g("",-1),fm=new g(""),Pa=class{get(n,e=lr){if(e===lr){let r=Mv("",-201);throw r.name="\u0275NotFound",r}return e}};function An(t){return{\u0275providers:t}}function Nv(t){return An([{provide:ki,multi:!0,useValue:t}])}function Ov(...t){return{\u0275providers:mm(!0,t),\u0275fromNgModule:!0}}function mm(t,...n){let e=[],i=new Set,r,o=a=>{e.push(a)};return sl(n,a=>{let s=a;Kc(s,o,[],i)&&(r||=[],r.push(s))}),r!==void 0&&Fv(r,o),e}function Fv(t,n){for(let e=0;e<t.length;e++){let{ngModule:i,providers:r}=t[e];hm(r,o=>{n(o,i)})}}function Kc(t,n,e,i){if(t=lt(t),!t)return!1;let r=null,o=Uf(t),a=!o&&Tn(t);if(!o&&!a){let c=t.ngModule;if(o=Uf(c),o)r=c;else return!1}else{if(a&&!a.standalone)return!1;r=t}let s=i.has(r);if(a){if(s)return!1;if(i.add(r),a.dependencies){let c=typeof a.dependencies=="function"?a.dependencies():a.dependencies;for(let l of c)Kc(l,n,e,i)}}else if(o){if(o.imports!=null&&!s){i.add(r);let l;sl(o.imports,u=>{Kc(u,n,e,i)&&(l||=[],l.push(u))}),l!==void 0&&Fv(l,n)}if(!s){let l=Ei(r)||(()=>new r);n({provide:r,useFactory:l,deps:pt},r),n({provide:fm,useValue:r,multi:!0},r),n({provide:ki,useValue:()=>T(r),multi:!0},r)}let c=o.providers;if(c!=null&&!s){let l=t;hm(c,u=>{n(u,l)})}}else return!1;return r!==t&&t.providers!==void 0}function hm(t,n){for(let e of t)tm(e)&&(e=e.\u0275providers),Array.isArray(e)?hm(e,n):n(e)}var tI=_e({provide:String,useValue:_e});function Pv(t){return t!==null&&typeof t=="object"&&tI in t}function nI(t){return!!(t&&t.useExisting)}function iI(t){return!!(t&&t.useFactory)}function ur(t){return typeof t=="function"}function Lv(t){return!!t.useClass}var za=new g(""),Qc={},wv={},Hf;function co(){return Hf===void 0&&(Hf=new Pa),Hf}var ye=class{},fr=class extends ye{parent;source;scopes;records=new Map;_ngOnDestroyHooks=new Set;_onDestroyHooks=[];get destroyed(){return this._destroyed}_destroyed=!1;injectorDefTypes;constructor(n,e,i,r){super(),this.parent=e,this.source=i,this.scopes=r,qf(n,a=>this.processProvider(a)),this.records.set(um,oo(void 0,this)),r.has("environment")&&this.records.set(ye,oo(void 0,this));let o=this.records.get(za);o!=null&&typeof o.value=="string"&&this.scopes.add(o.value),this.injectorDefTypes=new Set(this.get(fm,pt,{self:!0}))}retrieve(n,e){let i=dr(e)||0;try{return this.get(n,lr,i)}catch(r){if(ro(r))return r;throw r}}destroy(){Oa(this),this._destroyed=!0;let n=L(null);try{for(let i of this._ngOnDestroyHooks)i.ngOnDestroy();let e=this._onDestroyHooks;this._onDestroyHooks=[];for(let i of e)i()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),L(n)}}onDestroy(n){return Oa(this),this._onDestroyHooks.push(n),()=>this.removeOnDestroy(n)}runInContext(n){Oa(this);let e=Sn(this),i=Dt(void 0),r;try{return n()}finally{Sn(e),Dt(i)}}get(n,e=lr,i){if(Oa(this),n.hasOwnProperty(yv))return n[yv](this);let r=dr(i),o,a=Sn(this),s=Dt(void 0);try{if(!(r&4)){let l=this.records.get(n);if(l===void 0){let u=cI(n)&&Ha(n);u&&this.injectableDefInScope(u)?l=oo(Gf(n),Qc):l=null,this.records.set(n,l)}if(l!=null)return this.hydrate(n,l,r)}let c=r&2?co():this.parent;return e=r&8&&e===lr?null:e,c.get(n,e)}catch(c){let l=ZE(c);throw l===-200||l===-201?new D(l,null):c}finally{Dt(s),Sn(a)}}resolveInjectorInitializers(){let n=L(null),e=Sn(this),i=Dt(void 0),r;try{let o=this.get(ki,pt,{self:!0});for(let a of o)a()}finally{Sn(e),Dt(i),L(n)}}toString(){return"R3Injector[...]"}processProvider(n){n=lt(n);let e=ur(n)?n:lt(n&&n.provide),i=oI(n);if(!ur(n)&&n.multi===!0){let r=this.records.get(e);r||(r=oo(void 0,Qc,!0),r.factory=()=>Wf(r.multi),this.records.set(e,r)),e=n,r.multi.push(n)}this.records.set(e,i)}hydrate(n,e,i){let r=L(null);try{if(e.value===wv)throw cm("");return e.value===Qc&&(e.value=wv,e.value=e.factory(void 0,i)),typeof e.value=="object"&&e.value&&sI(e.value)&&this._ngOnDestroyHooks.add(e.value),e.value}finally{L(r)}}injectableDefInScope(n){if(!n.providedIn)return!1;let e=lt(n.providedIn);return typeof e=="string"?e==="any"||this.scopes.has(e):this.injectorDefTypes.has(e)}removeOnDestroy(n){let e=this._onDestroyHooks.indexOf(n);e!==-1&&this._onDestroyHooks.splice(e,1)}};function Gf(t){let n=Ha(t),e=n!==null?n.factory:Ei(t);if(e!==null)return e;if(t instanceof g)throw new D(-204,!1);if(t instanceof Function)return rI(t);throw new D(-204,!1)}function rI(t){if(t.length>0)throw new D(-204,!1);let e=WE(t);return e!==null?()=>e.factory(t):()=>new t}function oI(t){if(Pv(t))return oo(void 0,t.useValue);{let n=pm(t);return oo(n,Qc)}}function pm(t,n,e){let i;if(ur(t)){let r=lt(t);return Ei(r)||Gf(r)}else if(Pv(t))i=()=>lt(t.useValue);else if(iI(t))i=()=>t.useFactory(...Wf(t.deps||[]));else if(nI(t))i=(r,o)=>T(lt(t.useExisting),o!==void 0&&o&8?8:void 0);else{let r=lt(t&&(t.useClass||t.provide));if(aI(t))i=()=>new r(...Wf(t.deps));else return Ei(r)||Gf(r)}return i}function Oa(t){if(t.destroyed)throw new D(-205,!1)}function oo(t,n,e=!1){return{factory:t,value:n,multi:e?[]:void 0}}function aI(t){return!!t.deps}function sI(t){return t!==null&&typeof t=="object"&&typeof t.ngOnDestroy=="function"}function cI(t){return typeof t=="function"||typeof t=="object"&&t.ngMetadataName==="InjectionToken"}function qf(t,n){for(let e of t)Array.isArray(e)?qf(e,n):e&&tm(e)?qf(e.\u0275providers,n):n(e)}function Qe(t,n){let e;t instanceof fr?(Oa(t),e=t):e=new $f(t);let i,r=Sn(e),o=Dt(void 0);try{return n()}finally{Sn(r),Dt(o)}}function jv(){return Sv()!==void 0||Zc()!=null}var hn=0,U=1,Y=2,Ze=3,Kt=4,xt=5,hr=6,lo=7,Be=8,Jn=9,Rn=10,Ce=11,uo=12,gm=13,pr=14,Et=15,Ti=16,gr=17,Nn=18,ei=19,bm=20,Xn=21,dl=22,Ii=23,Ut=24,br=25,Ai=26,Ae=27,Bv=1,vm=6,Ri=7,$a=8,vr=9,Ne=10;function ti(t){return Array.isArray(t)&&typeof t[Bv]=="object"}function pn(t){return Array.isArray(t)&&t[Bv]===!0}function _m(t){return(t.flags&4)!==0}function On(t){return t.componentOffset>-1}function Wa(t){return(t.flags&1)===1}function Fn(t){return!!t.template}function fo(t){return(t[Y]&512)!==0}function _r(t){return(t[Y]&256)===256}var ym="svg",Vv="math";function Xt(t){for(;Array.isArray(t);)t=t[hn];return t}function wm(t,n){return Xt(n[t])}function Jt(t,n){return Xt(n[t.index])}function ul(t,n){return t.data[n]}function Cm(t,n){return t[n]}function Dm(t,n,e,i){e>=t.data.length&&(t.data[e]=null,t.blueprint[e]=null),n[e]=i}function en(t,n){let e=n[t];return ti(e)?e:e[hn]}function Hv(t){return(t[Y]&4)===4}function fl(t){return(t[Y]&128)===128}function Uv(t){return pn(t[Ze])}function zt(t,n){return n==null?null:t[n]}function xm(t){t[gr]=0}function Em(t){t[Y]&1024||(t[Y]|=1024,fl(t)&&yr(t))}function zv(t,n){for(;t>0;)n=n[pr],t--;return n}function Ga(t){return!!(t[Y]&9216||t[Ut]?.dirty)}function ml(t){t[Rn].changeDetectionScheduler?.notify(8),t[Y]&64&&(t[Y]|=1024),Ga(t)&&yr(t)}function yr(t){t[Rn].changeDetectionScheduler?.notify(0);let n=Mi(t);for(;n!==null&&!(n[Y]&8192||(n[Y]|=8192,!fl(n)));)n=Mi(n)}function Im(t,n){if(_r(t))throw new D(911,!1);t[Xn]===null&&(t[Xn]=[]),t[Xn].push(n)}function $v(t,n){if(t[Xn]===null)return;let e=t[Xn].indexOf(n);e!==-1&&t[Xn].splice(e,1)}function Mi(t){let n=t[Ze];return pn(n)?n[Ze]:n}function Mm(t){return t[lo]??=[]}function Sm(t){return t.cleanup??=[]}function Wv(t,n,e,i){let r=Mm(n);r.push(e),t.firstCreatePass&&Sm(t).push(i,r.length-1)}var te={lFrame:i_(null),bindingsEnabled:!0,skipHydrationRootTNode:null};var Zf=!1;function Gv(){return te.lFrame.elementDepthCount}function qv(){te.lFrame.elementDepthCount++}function km(){te.lFrame.elementDepthCount--}function Tm(){return te.bindingsEnabled}function Am(){return te.skipHydrationRootTNode!==null}function Rm(t){return te.skipHydrationRootTNode===t}function Nm(){te.skipHydrationRootTNode=null}function Z(){return te.lFrame.lView}function Me(){return te.lFrame.tView}function tt(t){return te.lFrame.contextLView=t,t[Be]}function nt(t){return te.lFrame.contextLView=null,t}function it(){let t=Om();for(;t!==null&&t.type===64;)t=t.parent;return t}function Om(){return te.lFrame.currentTNode}function Zv(){let t=te.lFrame,n=t.currentTNode;return t.isParent?n:n.parent}function mo(t,n){let e=te.lFrame;e.currentTNode=t,e.isParent=n}function Fm(){return te.lFrame.isParent}function Pm(){te.lFrame.isParent=!1}function Qv(){return te.lFrame.contextLView}function Lm(){return Zf}function La(t){let n=Zf;return Zf=t,n}function Yv(){let t=te.lFrame,n=t.bindingRootIndex;return n===-1&&(n=t.bindingRootIndex=t.tView.bindingStartIndex),n}function Kv(t){return te.lFrame.bindingIndex=t}function Pn(){return te.lFrame.bindingIndex++}function jm(t){let n=te.lFrame,e=n.bindingIndex;return n.bindingIndex=n.bindingIndex+t,e}function Xv(){return te.lFrame.inI18n}function Jv(t,n){let e=te.lFrame;e.bindingIndex=e.bindingRootIndex=t,hl(n)}function e_(){return te.lFrame.currentDirectiveIndex}function hl(t){te.lFrame.currentDirectiveIndex=t}function t_(t){let n=te.lFrame.currentDirectiveIndex;return n===-1?null:t[n]}function pl(){return te.lFrame.currentQueryIndex}function qa(t){te.lFrame.currentQueryIndex=t}function lI(t){let n=t[U];return n.type===2?n.declTNode:n.type===1?t[xt]:null}function Bm(t,n,e){if(e&4){let r=n,o=t;for(;r=r.parent,r===null&&!(e&1);)if(r=lI(o),r===null||(o=o[pr],r.type&10))break;if(r===null)return!1;n=r,t=o}let i=te.lFrame=n_();return i.currentTNode=n,i.lView=t,!0}function gl(t){let n=n_(),e=t[U];te.lFrame=n,n.currentTNode=e.firstChild,n.lView=t,n.tView=e,n.contextLView=t,n.bindingIndex=e.bindingStartIndex,n.inI18n=!1}function n_(){let t=te.lFrame,n=t===null?null:t.child;return n===null?i_(t):n}function i_(t){let n={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:t,child:null,inI18n:!1};return t!==null&&(t.child=n),n}function r_(){let t=te.lFrame;return te.lFrame=t.parent,t.currentTNode=null,t.lView=null,t}var Vm=r_;function bl(){let t=r_();t.isParent=!0,t.tView=null,t.selectedIndex=-1,t.contextLView=null,t.elementDepthCount=0,t.currentDirectiveIndex=-1,t.currentNamespace=null,t.bindingRootIndex=-1,t.bindingIndex=-1,t.currentQueryIndex=0}function o_(t){return(te.lFrame.contextLView=zv(t,te.lFrame.contextLView))[Be]}function ni(){return te.lFrame.selectedIndex}function Ni(t){te.lFrame.selectedIndex=t}function ho(){let t=te.lFrame;return ul(t.tView,t.selectedIndex)}function Za(){te.lFrame.currentNamespace=ym}function Qa(){dI()}function dI(){te.lFrame.currentNamespace=null}function a_(){return te.lFrame.currentNamespace}var s_=!0;function vl(){return s_}function _l(t){s_=t}function Qf(t,n=null,e=null,i){let r=Hm(t,n,e,i);return r.resolveInjectorInitializers(),r}function Hm(t,n=null,e=null,i,r=new Set){let o=[e||pt,Ov(t)],a;return new fr(o,n||co(),a||null,r)}var q=class t{static THROW_IF_NOT_FOUND=lr;static NULL=new Pa;static create(n,e){if(Array.isArray(n))return Qf({name:""},e,n,"");{let i=n.name??"";return Qf({name:i},n.parent,n.providers,i)}}static \u0275prov=p({token:t,providedIn:"any",factory:()=>T(um)});static __NG_ELEMENT_ID__=-1},j=new g(""),dt=(()=>{class t{static __NG_ELEMENT_ID__=uI;static __NG_ENV_ID__=e=>e}return t})(),Xc=class extends dt{_lView;constructor(n){super(),this._lView=n}get destroyed(){return _r(this._lView)}onDestroy(n){let e=this._lView;return Im(e,n),()=>$v(e,n)}};function uI(){return new Xc(Z())}var c_=!1,l_=new g(""),ii=(()=>{class t{taskId=0;pendingTasks=new Set;destroyed=!1;pendingTask=new Ue(!1);debugTaskTracker=d(l_,{optional:!0});get hasPendingTasks(){return this.destroyed?!1:this.pendingTask.value}get hasPendingTasksObservable(){return this.destroyed?new Q(e=>{e.next(!1),e.complete()}):this.pendingTask}add(){!this.hasPendingTasks&&!this.destroyed&&this.pendingTask.next(!0);let e=this.taskId++;return this.pendingTasks.add(e),this.debugTaskTracker?.add(e),e}has(e){return this.pendingTasks.has(e)}remove(e){this.pendingTasks.delete(e),this.debugTaskTracker?.remove(e),this.pendingTasks.size===0&&this.hasPendingTasks&&this.pendingTask.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this.hasPendingTasks&&this.pendingTask.next(!1),this.destroyed=!0,this.pendingTask.unsubscribe()}static \u0275prov=p({token:t,providedIn:"root",factory:()=>new t})}return t})(),Yf=class extends x{__isAsync;destroyRef=void 0;pendingTasks=void 0;constructor(n=!1){super(),this.__isAsync=n,jv()&&(this.destroyRef=d(dt,{optional:!0})??void 0,this.pendingTasks=d(ii,{optional:!0})??void 0)}emit(n){let e=L(null);try{super.next(n)}finally{L(e)}}subscribe(n,e,i){let r=n,o=e||(()=>null),a=i;if(n&&typeof n=="object"){let c=n;r=c.next?.bind(c),o=c.error?.bind(c),a=c.complete?.bind(c)}this.__isAsync&&(o=this.wrapInTimeout(o),r&&(r=this.wrapInTimeout(r)),a&&(a=this.wrapInTimeout(a)));let s=super.subscribe({next:r,error:o,complete:a});return n instanceof se&&n.add(s),s}wrapInTimeout(n){return e=>{let i=this.pendingTasks?.add();setTimeout(()=>{try{n(e)}finally{i!==void 0&&this.pendingTasks?.remove(i)}})}}},R=Yf;function Jc(...t){}function Um(t){let n,e;function i(){t=Jc;try{e!==void 0&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(e),n!==void 0&&clearTimeout(n)}catch{}}return n=setTimeout(()=>{t(),i()}),typeof requestAnimationFrame=="function"&&(e=requestAnimationFrame(()=>{t(),i()})),()=>i()}function d_(t){return queueMicrotask(()=>t()),()=>{t=Jc}}var zm="isAngularZone",ja=zm+"_ID",fI=0,k=class t{hasPendingMacrotasks=!1;hasPendingMicrotasks=!1;isStable=!0;onUnstable=new R(!1);onMicrotaskEmpty=new R(!1);onStable=new R(!1);onError=new R(!1);constructor(n){let{enableLongStackTrace:e=!1,shouldCoalesceEventChangeDetection:i=!1,shouldCoalesceRunChangeDetection:r=!1,scheduleInRootZone:o=c_}=n;if(typeof Zone>"u")throw new D(908,!1);Zone.assertZonePatched();let a=this;a._nesting=0,a._outer=a._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(a._inner=a._inner.fork(new Zone.TaskTrackingZoneSpec)),e&&Zone.longStackTraceZoneSpec&&(a._inner=a._inner.fork(Zone.longStackTraceZoneSpec)),a.shouldCoalesceEventChangeDetection=!r&&i,a.shouldCoalesceRunChangeDetection=r,a.callbackScheduled=!1,a.scheduleInRootZone=o,pI(a)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get(zm)===!0}static assertInAngularZone(){if(!t.isInAngularZone())throw new D(909,!1)}static assertNotInAngularZone(){if(t.isInAngularZone())throw new D(909,!1)}run(n,e,i){return this._inner.run(n,e,i)}runTask(n,e,i,r){let o=this._inner,a=o.scheduleEventTask("NgZoneEvent: "+r,n,mI,Jc,Jc);try{return o.runTask(a,e,i)}finally{o.cancelTask(a)}}runGuarded(n,e,i){return this._inner.runGuarded(n,e,i)}runOutsideAngular(n){return this._outer.run(n)}},mI={};function $m(t){if(t._nesting==0&&!t.hasPendingMicrotasks&&!t.isStable)try{t._nesting++,t.onMicrotaskEmpty.emit(null)}finally{if(t._nesting--,!t.hasPendingMicrotasks)try{t.runOutsideAngular(()=>t.onStable.emit(null))}finally{t.isStable=!0}}}function hI(t){if(t.isCheckStableRunning||t.callbackScheduled)return;t.callbackScheduled=!0;function n(){Um(()=>{t.callbackScheduled=!1,Kf(t),t.isCheckStableRunning=!0,$m(t),t.isCheckStableRunning=!1})}t.scheduleInRootZone?Zone.root.run(()=>{n()}):t._outer.run(()=>{n()}),Kf(t)}function pI(t){let n=()=>{hI(t)},e=fI++;t._inner=t._inner.fork({name:"angular",properties:{[zm]:!0,[ja]:e,[ja+e]:!0},onInvokeTask:(i,r,o,a,s,c)=>{if(gI(c))return i.invokeTask(o,a,s,c);try{return Cv(t),i.invokeTask(o,a,s,c)}finally{(t.shouldCoalesceEventChangeDetection&&a.type==="eventTask"||t.shouldCoalesceRunChangeDetection)&&n(),Dv(t)}},onInvoke:(i,r,o,a,s,c,l)=>{try{return Cv(t),i.invoke(o,a,s,c,l)}finally{t.shouldCoalesceRunChangeDetection&&!t.callbackScheduled&&!bI(c)&&n(),Dv(t)}},onHasTask:(i,r,o,a)=>{i.hasTask(o,a),r===o&&(a.change=="microTask"?(t._hasPendingMicrotasks=a.microTask,Kf(t),$m(t)):a.change=="macroTask"&&(t.hasPendingMacrotasks=a.macroTask))},onHandleError:(i,r,o,a)=>(i.handleError(o,a),t.runOutsideAngular(()=>t.onError.emit(a)),!1)})}function Kf(t){t._hasPendingMicrotasks||(t.shouldCoalesceEventChangeDetection||t.shouldCoalesceRunChangeDetection)&&t.callbackScheduled===!0?t.hasPendingMicrotasks=!0:t.hasPendingMicrotasks=!1}function Cv(t){t._nesting++,t.isStable&&(t.isStable=!1,t.onUnstable.emit(null))}function Dv(t){t._nesting--,$m(t)}var Ba=class{hasPendingMicrotasks=!1;hasPendingMacrotasks=!1;isStable=!0;onUnstable=new R;onMicrotaskEmpty=new R;onStable=new R;onError=new R;run(n,e,i){return n.apply(e,i)}runGuarded(n,e,i){return n.apply(e,i)}runOutsideAngular(n){return n()}runTask(n,e,i,r){return n.apply(e,i)}};function gI(t){return u_(t,"__ignore_ng_zone__")}function bI(t){return u_(t,"__scheduler_tick__")}function u_(t,n){return!Array.isArray(t)||t.length!==1?!1:t[0]?.data?.[n]===!0}var gt=class{_console=console;handleError(n){this._console.error("ERROR",n)}},$t=new g("",{factory:()=>{let t=d(k),n=d(ye),e;return i=>{t.runOutsideAngular(()=>{n.destroyed&&!e?setTimeout(()=>{throw i}):(e??=n.get(gt),e.handleError(i))})}}}),f_={provide:ki,useValue:()=>{let t=d(gt,{optional:!0})},multi:!0},vI=new g("",{factory:()=>{let t=d(j).defaultView;if(!t)return;let n=d($t),e=o=>{n(o.reason),o.preventDefault()},i=o=>{o.error?n(o.error):n(new Error(o.message,{cause:o})),o.preventDefault()},r=()=>{t.addEventListener("unhandledrejection",e),t.addEventListener("error",i)};typeof Zone<"u"?Zone.root.run(r):r(),d(dt).onDestroy(()=>{t.removeEventListener("error",i),t.removeEventListener("unhandledrejection",e)})}});function Wm(){return An([Nv(()=>{d(vI)})])}function B(t,n){let[e,i,r]=Ef(t,n?.equal),o=e,a=o[He];return o.set=i,o.update=r,o.asReadonly=yl.bind(o),o}function yl(){let t=this[He];if(t.readonlyFn===void 0){let n=()=>this();n[He]=t,t.readonlyFn=n}return t.readonlyFn}var po=(()=>{class t{view;node;constructor(e,i){this.view=e,this.node=i}static __NG_ELEMENT_ID__=_I}return t})();function _I(){return new po(Z(),it())}var kn=class{},Ya=new g("",{factory:()=>!0});var Gm=new g(""),go=(()=>{class t{internalPendingTasks=d(ii);scheduler=d(kn);errorHandler=d($t);add(){let e=this.internalPendingTasks.add();return()=>{this.internalPendingTasks.has(e)&&(this.scheduler.notify(11),this.internalPendingTasks.remove(e))}}run(e){let i=this.add();e().catch(this.errorHandler).finally(i)}static \u0275prov=p({token:t,providedIn:"root",factory:()=>new t})}return t})(),wl=(()=>{class t{static \u0275prov=p({token:t,providedIn:"root",factory:()=>new Xf})}return t})(),Xf=class{dirtyEffectCount=0;queues=new Map;add(n){this.enqueue(n),this.schedule(n)}schedule(n){n.dirty&&this.dirtyEffectCount++}remove(n){let e=n.zone,i=this.queues.get(e);i.has(n)&&(i.delete(n),n.dirty&&this.dirtyEffectCount--)}enqueue(n){let e=n.zone;this.queues.has(e)||this.queues.set(e,new Set);let i=this.queues.get(e);i.has(n)||i.add(n)}flush(){for(;this.dirtyEffectCount>0;){let n=!1;for(let[e,i]of this.queues)e===null?n||=this.flushQueue(i):n||=e.run(()=>this.flushQueue(i));n||(this.dirtyEffectCount=0)}}flushQueue(n){let e=!1;for(let i of n)i.dirty&&(this.dirtyEffectCount--,e=!0,i.run());return e}},el=class{[He];constructor(n){this[He]=n}destroy(){this[He].destroy()}};function It(t,n){let e=n?.injector??d(q),i=n?.manualCleanup!==!0?e.get(dt):null,r,o=e.get(po,null,{optional:!0}),a=e.get(kn);return o!==null?(r=CI(o.view,a,t),i instanceof Xc&&i._lView===o.view&&(i=null)):r=DI(t,e.get(wl),a),r.injector=e,i!==null&&(r.onDestroyFns=[i.onDestroy(()=>r.destroy())]),new el(r)}var m_=G(v({},Mf),{cleanupFns:void 0,zone:null,onDestroyFns:null,run(){let t=La(!1);try{Sf(this)}finally{La(t)}},cleanup(){if(!this.cleanupFns?.length)return;let t=L(null);try{for(;this.cleanupFns.length;)this.cleanupFns.pop()()}finally{this.cleanupFns=[],L(t)}}}),yI=G(v({},m_),{consumerMarkedDirty(){this.scheduler.schedule(this),this.notifier.notify(12)},destroy(){if(vi(this),this.onDestroyFns!==null)for(let t of this.onDestroyFns)t();this.cleanup(),this.scheduler.remove(this)}}),wI=G(v({},m_),{consumerMarkedDirty(){this.view[Y]|=8192,yr(this.view),this.notifier.notify(13)},destroy(){if(vi(this),this.onDestroyFns!==null)for(let t of this.onDestroyFns)t();this.cleanup(),this.view[Ii]?.delete(this)}});function CI(t,n,e){let i=Object.create(wI);return i.view=t,i.zone=typeof Zone<"u"?Zone.current:null,i.notifier=n,i.fn=h_(i,e),t[Ii]??=new Set,t[Ii].add(i),i.consumerMarkedDirty(i),i}function DI(t,n,e){let i=Object.create(yI);return i.fn=h_(i,t),i.scheduler=n,i.notifier=e,i.zone=typeof Zone<"u"?Zone.current:null,i.scheduler.add(i),i.notifier.notify(12),i}function h_(t,n){return()=>{n(e=>(t.cleanupFns??=[]).push(e))}}function as(t){return{toString:t}.toString()}function kI(t){return typeof t=="function"}function G_(t,n,e,i){n!==null?n.applyValueToInputSignal(n,i):t[e]=i}var Tl=class{previousValue;currentValue;firstChange;constructor(n,e,i){this.previousValue=n,this.currentValue=e,this.firstChange=i}isFirstChange(){return this.firstChange}},$e=(()=>{let t=()=>q_;return t.ngInherit=!0,t})();function q_(t){return t.type.prototype.ngOnChanges&&(t.setInput=AI),TI}function TI(){let t=Q_(this),n=t?.current;if(n){let e=t.previous;if(e===Si)t.previous=n;else for(let i in n)e[i]=n[i];t.current=null,this.ngOnChanges(n)}}function AI(t,n,e,i,r){let o=this.declaredInputs[i],a=Q_(t)||RI(t,{previous:Si,current:null}),s=a.current||(a.current={}),c=a.previous,l=c[o];s[o]=new Tl(l&&l.currentValue,e,c===Si),G_(t,n,r,e)}var Z_="__ngSimpleChanges__";function Q_(t){return t[Z_]||null}function RI(t,n){return t[Z_]=n}var p_=[];var we=function(t,n=null,e){for(let i=0;i<p_.length;i++){let r=p_[i];r(t,n,e)}},fe=(function(t){return t[t.TemplateCreateStart=0]="TemplateCreateStart",t[t.TemplateCreateEnd=1]="TemplateCreateEnd",t[t.TemplateUpdateStart=2]="TemplateUpdateStart",t[t.TemplateUpdateEnd=3]="TemplateUpdateEnd",t[t.LifecycleHookStart=4]="LifecycleHookStart",t[t.LifecycleHookEnd=5]="LifecycleHookEnd",t[t.OutputStart=6]="OutputStart",t[t.OutputEnd=7]="OutputEnd",t[t.BootstrapApplicationStart=8]="BootstrapApplicationStart",t[t.BootstrapApplicationEnd=9]="BootstrapApplicationEnd",t[t.BootstrapComponentStart=10]="BootstrapComponentStart",t[t.BootstrapComponentEnd=11]="BootstrapComponentEnd",t[t.ChangeDetectionStart=12]="ChangeDetectionStart",t[t.ChangeDetectionEnd=13]="ChangeDetectionEnd",t[t.ChangeDetectionSyncStart=14]="ChangeDetectionSyncStart",t[t.ChangeDetectionSyncEnd=15]="ChangeDetectionSyncEnd",t[t.AfterRenderHooksStart=16]="AfterRenderHooksStart",t[t.AfterRenderHooksEnd=17]="AfterRenderHooksEnd",t[t.ComponentStart=18]="ComponentStart",t[t.ComponentEnd=19]="ComponentEnd",t[t.DeferBlockStateStart=20]="DeferBlockStateStart",t[t.DeferBlockStateEnd=21]="DeferBlockStateEnd",t[t.DynamicComponentStart=22]="DynamicComponentStart",t[t.DynamicComponentEnd=23]="DynamicComponentEnd",t[t.HostBindingsUpdateStart=24]="HostBindingsUpdateStart",t[t.HostBindingsUpdateEnd=25]="HostBindingsUpdateEnd",t})(fe||{});function NI(t,n,e){let{ngOnChanges:i,ngOnInit:r,ngDoCheck:o}=n.type.prototype;if(i){let a=q_(n);(e.preOrderHooks??=[]).push(t,a),(e.preOrderCheckHooks??=[]).push(t,a)}r&&(e.preOrderHooks??=[]).push(0-t,r),o&&((e.preOrderHooks??=[]).push(t,o),(e.preOrderCheckHooks??=[]).push(t,o))}function Y_(t,n){for(let e=n.directiveStart,i=n.directiveEnd;e<i;e++){let o=t.data[e].type.prototype,{ngAfterContentInit:a,ngAfterContentChecked:s,ngAfterViewInit:c,ngAfterViewChecked:l,ngOnDestroy:u}=o;a&&(t.contentHooks??=[]).push(-e,a),s&&((t.contentHooks??=[]).push(e,s),(t.contentCheckHooks??=[]).push(e,s)),c&&(t.viewHooks??=[]).push(-e,c),l&&((t.viewHooks??=[]).push(e,l),(t.viewCheckHooks??=[]).push(e,l)),u!=null&&(t.destroyHooks??=[]).push(e,u)}}function El(t,n,e){K_(t,n,3,e)}function Il(t,n,e,i){(t[Y]&3)===e&&K_(t,n,e,i)}function qm(t,n){let e=t[Y];(e&3)===n&&(e&=16383,e+=1,t[Y]=e)}function K_(t,n,e,i){let r=i!==void 0?t[gr]&65535:0,o=i??-1,a=n.length-1,s=0;for(let c=r;c<a;c++)if(typeof n[c+1]=="number"){if(s=n[c],i!=null&&s>=i)break}else n[c]<0&&(t[gr]+=65536),(s<o||o==-1)&&(OI(t,e,n,c),t[gr]=(t[gr]&4294901760)+c+2),c++}function g_(t,n){we(fe.LifecycleHookStart,t,n);let e=L(null);try{n.call(t)}finally{L(e),we(fe.LifecycleHookEnd,t,n)}}function OI(t,n,e,i){let r=e[i]<0,o=e[i+1],a=r?-e[i]:e[i],s=t[a];r?t[Y]>>14<t[gr]>>16&&(t[Y]&3)===n&&(t[Y]+=16384,g_(s,o)):g_(s,o)}var vo=-1,Cr=class{factory;name;injectImpl;resolving=!1;canSeeViewProviders;multi;componentProviders;index;providerFactory;constructor(n,e,i,r){this.factory=n,this.name=r,this.canSeeViewProviders=e,this.injectImpl=i}};function FI(t){return(t.flags&8)!==0}function PI(t){return(t.flags&16)!==0}function LI(t,n,e){let i=0;for(;i<e.length;){let r=e[i];if(typeof r=="number"){if(r!==0)break;i++;let o=e[i++],a=e[i++],s=e[i++];t.setAttribute(n,a,s,o)}else{let o=r,a=e[++i];jI(o)?t.setProperty(n,o,a):t.setAttribute(n,o,a),i++}}return i}function X_(t){return t===3||t===4||t===6}function jI(t){return t.charCodeAt(0)===64}function _o(t,n){if(!(n===null||n.length===0))if(t===null||t.length===0)t=n.slice();else{let e=-1;for(let i=0;i<n.length;i++){let r=n[i];typeof r=="number"?e=r:e===0||(e===-1||e===2?b_(t,e,r,null,n[++i]):b_(t,e,r,null,null))}}return t}function b_(t,n,e,i,r){let o=0,a=t.length;if(n===-1)a=-1;else for(;o<t.length;){let s=t[o++];if(typeof s=="number"){if(s===n){a=-1;break}else if(s>n){a=o-1;break}}}for(;o<t.length;){let s=t[o];if(typeof s=="number")break;if(s===e){r!==null&&(t[o+1]=r);return}o++,r!==null&&o++}a!==-1&&(t.splice(a,0,n),o=a+1),t.splice(o++,0,e),r!==null&&t.splice(o++,0,r)}function J_(t){return t!==vo}function Al(t){return t&32767}function BI(t){return t>>16}function Rl(t,n){let e=BI(t),i=n;for(;e>0;)i=i[pr],e--;return i}var ih=!0;function Nl(t){let n=ih;return ih=t,n}var VI=256,ey=VI-1,ty=5,HI=0,Ln={};function UI(t,n,e){let i;typeof e=="string"?i=e.charCodeAt(0)||0:e.hasOwnProperty(mr)&&(i=e[mr]),i==null&&(i=e[mr]=HI++);let r=i&ey,o=1<<r;n.data[t+(r>>ty)]|=o}function Ol(t,n){let e=ny(t,n);if(e!==-1)return e;let i=n[U];i.firstCreatePass&&(t.injectorIndex=n.length,Zm(i.data,t),Zm(n,null),Zm(i.blueprint,null));let r=Bh(t,n),o=t.injectorIndex;if(J_(r)){let a=Al(r),s=Rl(r,n),c=s[U].data;for(let l=0;l<8;l++)n[o+l]=s[a+l]|c[a+l]}return n[o+8]=r,o}function Zm(t,n){t.push(0,0,0,0,0,0,0,0,n)}function ny(t,n){return t.injectorIndex===-1||t.parent&&t.parent.injectorIndex===t.injectorIndex||n[t.injectorIndex+8]===null?-1:t.injectorIndex}function Bh(t,n){if(t.parent&&t.parent.injectorIndex!==-1)return t.parent.injectorIndex;let e=0,i=null,r=n;for(;r!==null;){if(i=sy(r),i===null)return vo;if(e++,r=r[pr],i.injectorIndex!==-1)return i.injectorIndex|e<<16}return vo}function rh(t,n,e){UI(t,n,e)}function zI(t,n){if(n==="class")return t.classes;if(n==="style")return t.styles;let e=t.attrs;if(e){let i=e.length,r=0;for(;r<i;){let o=e[r];if(X_(o))break;if(o===0)r=r+2;else if(typeof o=="number")for(r++;r<i&&typeof e[r]=="string";)r++;else{if(o===n)return e[r+1];r=r+2}}}return null}function iy(t,n,e){if(e&8||t!==void 0)return t;al(n,"NodeInjector")}function ry(t,n,e,i){if(e&8&&i===void 0&&(i=null),(e&3)===0){let r=t[Jn],o=Dt(void 0);try{return r?r.get(n,i,e&8):lm(n,i,e&8)}finally{Dt(o)}}return iy(i,n,e)}function oy(t,n,e,i=0,r){if(t!==null){if(n[Y]&2048&&!(i&2)){let a=qI(t,n,e,i,Ln);if(a!==Ln)return a}let o=ay(t,n,e,i,Ln);if(o!==Ln)return o}return ry(n,e,i,r)}function ay(t,n,e,i,r){let o=WI(e);if(typeof o=="function"){if(!Bm(n,t,i))return i&1?iy(r,e,i):ry(n,e,i,r);try{let a;if(a=o(i),a==null&&!(i&8))al(e);else return a}finally{Vm()}}else if(typeof o=="number"){let a=null,s=ny(t,n),c=vo,l=i&1?n[Et][xt]:null;for((s===-1||i&4)&&(c=s===-1?Bh(t,n):n[s+8],c===vo||!__(i,!1)?s=-1:(a=n[U],s=Al(c),n=Rl(c,n)));s!==-1;){let u=n[U];if(v_(o,s,u.data)){let f=$I(s,n,e,a,i,l);if(f!==Ln)return f}c=n[s+8],c!==vo&&__(i,n[U].data[s+8]===l)&&v_(o,s,n)?(a=u,s=Al(c),n=Rl(c,n)):s=-1}}return r}function $I(t,n,e,i,r,o){let a=n[U],s=a.data[t+8],c=i==null?On(s)&&ih:i!=a&&(s.type&3)!==0,l=r&1&&o===s,u=Ml(s,a,e,c,l);return u!==null?es(n,a,u,s,r):Ln}function Ml(t,n,e,i,r){let o=t.providerIndexes,a=n.data,s=o&1048575,c=t.directiveStart,l=t.directiveEnd,u=o>>20,f=i?s:s+u,m=r?s+u:l;for(let h=f;h<m;h++){let b=a[h];if(h<c&&e===b||h>=c&&b.type===e)return h}if(r){let h=a[c];if(h&&Fn(h)&&h.type===e)return c}return null}function es(t,n,e,i,r){let o=t[e],a=n.data;if(o instanceof Cr){let s=o;if(s.resolving)throw cm("");let c=Nl(s.canSeeViewProviders);s.resolving=!0;let l=a[e].type||a[e],u,f=s.injectImpl?Dt(s.injectImpl):null,m=Bm(t,i,0);try{o=t[e]=s.factory(void 0,r,a,t,i),n.firstCreatePass&&e>=i.directiveStart&&NI(e,a[e],n)}finally{f!==null&&Dt(f),Nl(c),s.resolving=!1,Vm()}}return o}function WI(t){if(typeof t=="string")return t.charCodeAt(0)||0;let n=t.hasOwnProperty(mr)?t[mr]:void 0;return typeof n=="number"?n>=0?n&ey:GI:n}function v_(t,n,e){let i=1<<t;return!!(e[n+(t>>ty)]&i)}function __(t,n){return!(t&2)&&!(t&1&&n)}var wr=class{_tNode;_lView;constructor(n,e){this._tNode=n,this._lView=e}get(n,e,i){return oy(this._tNode,this._lView,n,dr(i),e)}};function GI(){return new wr(it(),Z())}function Re(t){return as(()=>{let n=t.prototype.constructor,e=n[Fa]||oh(n),i=Object.prototype,r=Object.getPrototypeOf(t.prototype).constructor;for(;r&&r!==i;){let o=r[Fa]||oh(r);if(o&&o!==e)return o;r=Object.getPrototypeOf(r)}return o=>new o})}function oh(t){return Jf(t)?()=>{let n=oh(lt(t));return n&&n()}:Ei(t)}function qI(t,n,e,i,r){let o=t,a=n;for(;o!==null&&a!==null&&a[Y]&2048&&!fo(a);){let s=ay(o,a,e,i|2,Ln);if(s!==Ln)return s;let c=o.parent;if(!c){let l=a[bm];if(l){let u=l.get(e,Ln,i&-5);if(u!==Ln)return u}c=sy(a),a=a[pr]}o=c}return r}function sy(t){let n=t[U],e=n.type;return e===2?n.declTNode:e===1?t[xt]:null}function ql(t){return zI(it(),t)}function ZI(){return xo(it(),Z())}function xo(t,n){return new F(Jt(t,n))}var F=(()=>{class t{nativeElement;constructor(e){this.nativeElement=e}static __NG_ELEMENT_ID__=ZI}return t})();function cy(t){return t instanceof F?t.nativeElement:t}function QI(){return this._results[Symbol.iterator]()}var ri=class{_emitDistinctChangesOnly;dirty=!0;_onDirty=void 0;_results=[];_changesDetected=!1;_changes=void 0;length=0;first=void 0;last=void 0;get changes(){return this._changes??=new x}constructor(n=!1){this._emitDistinctChangesOnly=n}get(n){return this._results[n]}map(n){return this._results.map(n)}filter(n){return this._results.filter(n)}find(n){return this._results.find(n)}reduce(n,e){return this._results.reduce(n,e)}forEach(n){this._results.forEach(n)}some(n){return this._results.some(n)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(n,e){this.dirty=!1;let i=Tv(n);(this._changesDetected=!kv(this._results,i,e))&&(this._results=i,this.length=i.length,this.last=i[this.length-1],this.first=i[0])}notifyOnChanges(){this._changes!==void 0&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.next(this)}onDirty(n){this._onDirty=n}setDirty(){this.dirty=!0,this._onDirty?.()}destroy(){this._changes!==void 0&&(this._changes.complete(),this._changes.unsubscribe())}[Symbol.iterator]=QI};function ly(t){return(t.flags&128)===128}var Vh=(function(t){return t[t.OnPush=0]="OnPush",t[t.Eager=1]="Eager",t[t.Default=1]="Default",t})(Vh||{}),dy=new Map,YI=0;function KI(){return YI++}function XI(t){dy.set(t[ei],t)}function ah(t){dy.delete(t[ei])}var y_="__ngContext__";function yo(t,n){ti(n)?(t[y_]=n[ei],XI(n)):t[y_]=n}function uy(t){return my(t[uo])}function fy(t){return my(t[Kt])}function my(t){for(;t!==null&&!pn(t);)t=t[Kt];return t}var JI;function Hh(t){JI=t}var Eo=new g("",{factory:()=>eM}),eM="ng";var Zl=new g(""),Er=new g("",{providedIn:"platform",factory:()=>"unknown"}),ss=new g(""),Io=new g("",{factory:()=>d(j).body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});var hy="r";var py="di";var gy=!1,by=new g("",{factory:()=>gy});var Ql=new g("");var tM=(t,n,e,i)=>{};function nM(t,n,e,i){tM(t,n,e,i)}function Yl(t){return(t.flags&32)===32}var iM=()=>null;function vy(t,n,e=!1){return iM(t,n,e)}function _y(t,n){let e=t.contentQueries;if(e!==null){let i=L(null);try{for(let r=0;r<e.length;r+=2){let o=e[r],a=e[r+1];if(a!==-1){let s=t.data[a];qa(o),s.contentQueries(2,n[a],a)}}}finally{L(i)}}}function sh(t,n,e){qa(0);let i=L(null);try{n(t,e)}finally{L(i)}}function yy(t,n,e){if(_m(n)){let i=L(null);try{let r=n.directiveStart,o=n.directiveEnd;for(let a=r;a<o;a++){let s=t.data[a];if(s.contentQueries){let c=e[a];s.contentQueries(1,c,a)}}}finally{L(i)}}}var vn=(function(t){return t[t.Emulated=0]="Emulated",t[t.None=2]="None",t[t.ShadowDom=3]="ShadowDom",t[t.ExperimentalIsolatedShadowDom=4]="ExperimentalIsolatedShadowDom",t})(vn||{});var Cl;function rM(){if(Cl===void 0&&(Cl=null,ao.trustedTypes))try{Cl=ao.trustedTypes.createPolicy("angular",{createHTML:t=>t,createScript:t=>t,createScriptURL:t=>t})}catch{}return Cl}function Kl(t){return rM()?.createHTML(t)||t}var oi=class{changingThisBreaksApplicationSecurity;constructor(n){this.changingThisBreaksApplicationSecurity=n}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${tl})`}},ch=class extends oi{getTypeName(){return"HTML"}},lh=class extends oi{getTypeName(){return"Style"}},dh=class extends oi{getTypeName(){return"Script"}},uh=class extends oi{getTypeName(){return"URL"}},fh=class extends oi{getTypeName(){return"ResourceURL"}};function Vn(t){return t instanceof oi?t.changingThisBreaksApplicationSecurity:t}function Ir(t,n){let e=wy(t);if(e!=null&&e!==n){if(e==="ResourceURL"&&n==="URL")return!0;throw new Error(`Required a safe ${n}, got a ${e} (see ${tl})`)}return e===n}function wy(t){return t instanceof oi&&t.getTypeName()||null}function Uh(t){return new ch(t)}function zh(t){return new lh(t)}function $h(t){return new dh(t)}function Wh(t){return new uh(t)}function Gh(t){return new fh(t)}function oM(t){let n=new hh(t);return aM()?new mh(n):n}var mh=class{inertDocumentHelper;constructor(n){this.inertDocumentHelper=n}getInertBodyElement(n){n="<body><remove></remove>"+n;try{let e=new window.DOMParser().parseFromString(Kl(n),"text/html").body;return e===null?this.inertDocumentHelper.getInertBodyElement(n):(e.firstChild?.remove(),e)}catch{return null}}},hh=class{defaultDoc;inertDocument;constructor(n){this.defaultDoc=n,this.inertDocument=this.defaultDoc.implementation.createHTMLDocument("sanitization-inert")}getInertBodyElement(n){let e=this.inertDocument.createElement("template");return e.innerHTML=Kl(n),e}};function aM(){try{return!!new window.DOMParser().parseFromString(Kl(""),"text/html")}catch{return!1}}var sM=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;function Xl(t){return t=String(t),t.match(sM)?t:"unsafe:"+t}function ai(t){let n={};for(let e of t.split(","))n[e]=!0;return n}function cs(...t){let n={};for(let e of t)for(let i in e)e.hasOwnProperty(i)&&(n[i]=!0);return n}var Cy=ai("area,br,col,hr,img,wbr"),Dy=ai("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),xy=ai("rp,rt"),cM=cs(xy,Dy),lM=cs(Dy,ai("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")),dM=cs(xy,ai("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")),w_=cs(Cy,lM,dM,cM),Ey=ai("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),uM=ai("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,srcset,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"),fM=ai("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext"),mM=cs(Ey,uM,fM),hM=ai("script,style,template");var ph=class{sanitizedSomething=!1;buf=[];sanitizeChildren(n){let e=n.firstChild,i=!0,r=[];for(;e;){if(e.nodeType===Node.ELEMENT_NODE?i=this.startElement(e):e.nodeType===Node.TEXT_NODE?this.chars(e.nodeValue):this.sanitizedSomething=!0,i&&e.firstChild){r.push(e),e=bM(e);continue}for(;e;){e.nodeType===Node.ELEMENT_NODE&&this.endElement(e);let o=gM(e);if(o){e=o;break}e=r.pop()}}return this.buf.join("")}startElement(n){let e=C_(n).toLowerCase();if(!w_.hasOwnProperty(e))return this.sanitizedSomething=!0,!hM.hasOwnProperty(e);this.buf.push("<"),this.buf.push(e);let i=n.attributes;for(let r=0;r<i.length;r++){let o=i.item(r),a=o.name,s=a.toLowerCase();if(!mM.hasOwnProperty(s)){this.sanitizedSomething=!0;continue}let c=o.value;Ey[s]&&(c=Xl(c)),this.buf.push(" ",a,'="',D_(c),'"')}return this.buf.push(">"),!0}endElement(n){let e=C_(n).toLowerCase();w_.hasOwnProperty(e)&&!Cy.hasOwnProperty(e)&&(this.buf.push("</"),this.buf.push(e),this.buf.push(">"))}chars(n){this.buf.push(D_(n))}};function pM(t,n){return(t.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY)!==Node.DOCUMENT_POSITION_CONTAINED_BY}function gM(t){let n=t.nextSibling;if(n&&t!==n.previousSibling)throw Iy(n);return n}function bM(t){let n=t.firstChild;if(n&&pM(t,n))throw Iy(n);return n}function C_(t){let n=t.nodeName;return typeof n=="string"?n:"FORM"}function Iy(t){return new Error(`Failed to sanitize html because the element is clobbered: ${t.outerHTML}`)}var vM=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,_M=/([^\#-~ |!])/g;function D_(t){return t.replace(/&/g,"&amp;").replace(vM,function(n){let e=n.charCodeAt(0),i=n.charCodeAt(1);return"&#"+((e-55296)*1024+(i-56320)+65536)+";"}).replace(_M,function(n){return"&#"+n.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}var Dl;function qh(t,n){let e=null;try{Dl=Dl||oM(t);let i=n?String(n):"";e=Dl.getInertBodyElement(i);let r=5,o=i;do{if(r===0)throw new Error("Failed to sanitize html because the input is unstable");r--,i=o,o=e.innerHTML,e=Dl.getInertBodyElement(i)}while(i!==o);let s=new ph().sanitizeChildren(x_(e)||e);return Kl(s)}finally{if(e){let i=x_(e)||e;for(;i.firstChild;)i.firstChild.remove()}}}function x_(t){return"content"in t&&yM(t)?t.content:null}function yM(t){return t.nodeType===Node.ELEMENT_NODE&&t.nodeName==="TEMPLATE"}function wM(t,n){return t.createText(n)}function CM(t,n,e){t.setValue(n,e)}function My(t,n,e){return t.createElement(n,e)}function Fl(t,n,e,i,r){t.insertBefore(n,e,i,r)}function Sy(t,n,e){t.appendChild(n,e)}function E_(t,n,e,i,r){i!==null?Fl(t,n,e,i,r):Sy(t,n,e)}function ky(t,n,e,i){t.removeChild(null,n,e,i)}function DM(t,n,e){t.setAttribute(n,"style",e)}function xM(t,n,e){e===""?t.removeAttribute(n,"class"):t.setAttribute(n,"class",e)}function Ty(t,n,e){let{mergedAttrs:i,classes:r,styles:o}=e;i!==null&&LI(t,n,i),r!==null&&xM(t,n,r),o!==null&&DM(t,n,o)}var Mt=(function(t){return t[t.NONE=0]="NONE",t[t.HTML=1]="HTML",t[t.STYLE=2]="STYLE",t[t.SCRIPT=3]="SCRIPT",t[t.URL=4]="URL",t[t.RESOURCE_URL=5]="RESOURCE_URL",t})(Mt||{});function Ay(t){return t instanceof Function?t():t}function EM(t,n,e){let i=t.length;for(;;){let r=t.indexOf(n,e);if(r===-1)return r;if(r===0||t.charCodeAt(r-1)<=32){let o=n.length;if(r+o===i||t.charCodeAt(r+o)<=32)return r}e=r+1}}var Ry="ng-template";function IM(t,n,e,i){let r=0;if(i){for(;r<n.length&&typeof n[r]=="string";r+=2)if(n[r]==="class"&&EM(n[r+1].toLowerCase(),e,0)!==-1)return!0}else if(Zh(t))return!1;if(r=n.indexOf(1,r),r>-1){let o;for(;++r<n.length&&typeof(o=n[r])=="string";)if(o.toLowerCase()===e)return!0}return!1}function Zh(t){return t.type===4&&t.value!==Ry}function MM(t,n,e){let i=t.type===4&&!e?Ry:t.value;return n===i}function SM(t,n,e){let i=4,r=t.attrs,o=r!==null?AM(r):0,a=!1;for(let s=0;s<n.length;s++){let c=n[s];if(typeof c=="number"){if(!a&&!gn(i)&&!gn(c))return!1;if(a&&gn(c))continue;a=!1,i=c|i&1;continue}if(!a)if(i&4){if(i=2|i&1,c!==""&&!MM(t,c,e)||c===""&&n.length===1){if(gn(i))return!1;a=!0}}else if(i&8){if(r===null||!IM(t,r,c,e)){if(gn(i))return!1;a=!0}}else{let l=n[++s],u=kM(c,r,Zh(t),e);if(u===-1){if(gn(i))return!1;a=!0;continue}if(l!==""){let f;if(u>o?f="":f=r[u+1].toLowerCase(),i&2&&l!==f){if(gn(i))return!1;a=!0}}}}return gn(i)||a}function gn(t){return(t&1)===0}function kM(t,n,e,i){if(n===null)return-1;let r=0;if(i||!e){let o=!1;for(;r<n.length;){let a=n[r];if(a===t)return r;if(a===3||a===6)o=!0;else if(a===1||a===2){let s=n[++r];for(;typeof s=="string";)s=n[++r];continue}else{if(a===4)break;if(a===0){r+=4;continue}}r+=o?1:2}return-1}else return RM(n,t)}function Ny(t,n,e=!1){for(let i=0;i<n.length;i++)if(SM(t,n[i],e))return!0;return!1}function TM(t){let n=t.attrs;if(n!=null){let e=n.indexOf(5);if((e&1)===0)return n[e+1]}return null}function AM(t){for(let n=0;n<t.length;n++){let e=t[n];if(X_(e))return n}return t.length}function RM(t,n){let e=t.indexOf(4);if(e>-1)for(e++;e<t.length;){let i=t[e];if(typeof i=="number")return-1;if(i===n)return e;e++}return-1}function NM(t,n){e:for(let e=0;e<n.length;e++){let i=n[e];if(t.length===i.length){for(let r=0;r<t.length;r++)if(t[r]!==i[r])continue e;return!0}}return!1}function I_(t,n){return t?":not("+n.trim()+")":n}function OM(t){let n=t[0],e=1,i=2,r="",o=!1;for(;e<t.length;){let a=t[e];if(typeof a=="string")if(i&2){let s=t[++e];r+="["+a+(s.length>0?'="'+s+'"':"")+"]"}else i&8?r+="."+a:i&4&&(r+=" "+a);else r!==""&&!gn(a)&&(n+=I_(o,r),r=""),i=a,o=o||!gn(i);e++}return r!==""&&(n+=I_(o,r)),n}function FM(t){return t.map(OM).join(",")}function PM(t){let n=[],e=[],i=1,r=2;for(;i<t.length;){let o=t[i];if(typeof o=="string")r===2?o!==""&&n.push(o,t[++i]):r===8&&e.push(o);else{if(!gn(r))break;r=o}i++}return e.length&&n.push(1,...e),n}var Wt={};function Qh(t,n,e,i,r,o,a,s,c,l,u){let f=Ae+i,m=f+r,h=LM(f,m),b=typeof l=="function"?l():l;return h[U]={type:t,blueprint:h,template:e,queries:null,viewQuery:s,declTNode:n,data:h.slice().fill(null,f),bindingStartIndex:f,expandoStartIndex:m,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof o=="function"?o():o,pipeRegistry:typeof a=="function"?a():a,firstChild:null,schemas:c,consts:b,incompleteFirstPass:!1,ssrId:u}}function LM(t,n){let e=[];for(let i=0;i<n;i++)e.push(i<t?null:Wt);return e}function jM(t){let n=t.tView;return n===null||n.incompleteFirstPass?t.tView=Qh(1,null,t.template,t.decls,t.vars,t.directiveDefs,t.pipeDefs,t.viewQuery,t.schemas,t.consts,t.id):n}function Yh(t,n,e,i,r,o,a,s,c,l,u){let f=n.blueprint.slice();return f[hn]=r,f[Y]=i|4|128|8|64|1024,(l!==null||t&&t[Y]&2048)&&(f[Y]|=2048),xm(f),f[Ze]=f[pr]=t,f[Be]=e,f[Rn]=a||t&&t[Rn],f[Ce]=s||t&&t[Ce],f[Jn]=c||t&&t[Jn]||null,f[xt]=o,f[ei]=KI(),f[hr]=u,f[bm]=l,f[Et]=n.type==2?t[Et]:f,f}function BM(t,n,e){let i=Jt(n,t),r=jM(e),o=t[Rn].rendererFactory,a=Kh(t,Yh(t,r,null,Oy(e),i,n,null,o.createRenderer(i,e),null,null,null));return t[n.index]=a}function Oy(t){let n=16;return t.signals?n=4096:t.onPush&&(n=64),n}function Fy(t,n,e,i){if(e===0)return-1;let r=n.length;for(let o=0;o<e;o++)n.push(i),t.blueprint.push(i),t.data.push(null);return r}function Kh(t,n){return t[uo]?t[gm][Kt]=n:t[uo]=n,t[gm]=n,n}function w(t=1){Py(Me(),Z(),ni()+t,!1)}function Py(t,n,e,i){if(!i)if((n[Y]&3)===3){let o=t.preOrderCheckHooks;o!==null&&El(n,o,e)}else{let o=t.preOrderHooks;o!==null&&Il(n,o,0,e)}Ni(e)}var Jl=(function(t){return t[t.None=0]="None",t[t.SignalBased=1]="SignalBased",t[t.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",t})(Jl||{});function gh(t,n,e,i){let r=L(null);try{let[o,a,s]=t.inputs[e],c=null;(a&Jl.SignalBased)!==0&&(c=n[o][He]),c!==null&&c.transformFn!==void 0?i=c.transformFn(i):s!==null&&(i=s.call(n,i)),t.setInput!==null?t.setInput(n,c,i,e,o):G_(n,c,o,i)}finally{L(r)}}var jn=(function(t){return t[t.Important=1]="Important",t[t.DashCase=2]="DashCase",t})(jn||{}),VM;function Xh(t,n){return VM(t,n)}var yz=typeof document<"u"&&typeof document?.documentElement?.getAnimations=="function";var bh=new WeakMap,Ka=new WeakSet;function HM(t,n){let e=bh.get(t);if(!e||e.length===0)return;let i=n.parentNode,r=n.previousSibling;for(let o=e.length-1;o>=0;o--){let a=e[o],s=a.parentNode;a===n?(e.splice(o,1),Ka.add(a),a.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}}))):(r&&a===r||s&&i&&s!==i)&&(e.splice(o,1),a.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}})),a.parentNode?.removeChild(a))}}function UM(t,n){let e=bh.get(t);e?e.includes(n)||e.push(n):bh.set(t,[n])}var Dr=new Set,ed=(function(t){return t[t.CHANGE_DETECTION=0]="CHANGE_DETECTION",t[t.AFTER_NEXT_RENDER=1]="AFTER_NEXT_RENDER",t})(ed||{}),_n=new g(""),M_=new Set;function Hn(t){M_.has(t)||(M_.add(t),performance?.mark?.("mark_feature_usage",{detail:{feature:t}}))}var td=(()=>{class t{impl=null;execute(){this.impl?.execute()}static \u0275prov=p({token:t,providedIn:"root",factory:()=>new t})}return t})(),Jh=[0,1,2,3],ep=(()=>{class t{ngZone=d(k);scheduler=d(kn);errorHandler=d(gt,{optional:!0});sequences=new Set;deferredRegistrations=new Set;executing=!1;constructor(){d(_n,{optional:!0})}execute(){let e=this.sequences.size>0;e&&we(fe.AfterRenderHooksStart),this.executing=!0;for(let i of Jh)for(let r of this.sequences)if(!(r.erroredOrDestroyed||!r.hooks[i]))try{r.pipelinedValue=this.ngZone.runOutsideAngular(()=>this.maybeTrace(()=>{let o=r.hooks[i];return o(r.pipelinedValue)},r.snapshot))}catch(o){r.erroredOrDestroyed=!0,this.errorHandler?.handleError(o)}this.executing=!1;for(let i of this.sequences)i.afterRun(),i.once&&(this.sequences.delete(i),i.destroy());for(let i of this.deferredRegistrations)this.sequences.add(i);this.deferredRegistrations.size>0&&this.scheduler.notify(7),this.deferredRegistrations.clear(),e&&we(fe.AfterRenderHooksEnd)}register(e){let{view:i}=e;i!==void 0?((i[br]??=[]).push(e),yr(i),i[Y]|=8192):this.executing?this.deferredRegistrations.add(e):this.addSequence(e)}addSequence(e){this.sequences.add(e),this.scheduler.notify(7)}unregister(e){this.executing&&this.sequences.has(e)?(e.erroredOrDestroyed=!0,e.pipelinedValue=void 0,e.once=!0):(this.sequences.delete(e),this.deferredRegistrations.delete(e))}maybeTrace(e,i){return i?i.run(ed.AFTER_NEXT_RENDER,e):e()}static \u0275prov=p({token:t,providedIn:"root",factory:()=>new t})}return t})(),ts=class{impl;hooks;view;once;snapshot;erroredOrDestroyed=!1;pipelinedValue=void 0;unregisterOnDestroy;constructor(n,e,i,r,o,a=null){this.impl=n,this.hooks=e,this.view=i,this.once=r,this.snapshot=a,this.unregisterOnDestroy=o?.onDestroy(()=>this.destroy())}afterRun(){this.erroredOrDestroyed=!1,this.pipelinedValue=void 0,this.snapshot?.dispose(),this.snapshot=null}destroy(){this.impl.unregister(this),this.unregisterOnDestroy?.();let n=this.view?.[br];n&&(this.view[br]=n.filter(e=>e!==this))}};function ut(t,n){let e=n?.injector??d(q);return Hn("NgAfterNextRender"),$M(t,e,n,!0)}function zM(t){return t instanceof Function?[void 0,void 0,t,void 0]:[t.earlyRead,t.write,t.mixedReadWrite,t.read]}function $M(t,n,e,i){let r=n.get(td);r.impl??=n.get(ep);let o=n.get(_n,null,{optional:!0}),a=e?.manualCleanup!==!0?n.get(dt):null,s=n.get(po,null,{optional:!0}),c=new ts(r.impl,zM(t),s?.view,i,a,o?.snapshot(null));return r.impl.register(c),c}var Ly=new g("",{factory:()=>({queue:new Set,isScheduled:!1,scheduler:null,injector:d(ye)})});function jy(t,n,e){let i=t.get(Ly);if(Array.isArray(n))for(let r of n)i.queue.add(r),e?.detachedLeaveAnimationFns?.push(r);else i.queue.add(n),e?.detachedLeaveAnimationFns?.push(n);i.scheduler&&i.scheduler(t)}function WM(t,n){let e=t.get(Ly);if(n.detachedLeaveAnimationFns){for(let i of n.detachedLeaveAnimationFns)e.queue.delete(i);n.detachedLeaveAnimationFns=void 0}}function GM(t,n){for(let[e,i]of n)jy(t,i.animateFns)}function S_(t,n,e,i){let r=t?.[Ai]?.enter;n!==null&&r&&r.has(e.index)&&GM(i,r)}function bo(t,n,e,i,r,o,a,s){if(r!=null){let c,l=!1;pn(r)?c=r:ti(r)&&(l=!0,r=r[hn]);let u=Xt(r);t===0&&i!==null?(S_(s,i,o,e),a==null?Sy(n,i,u):Fl(n,i,u,a||null,!0)):t===1&&i!==null?(S_(s,i,o,e),Fl(n,i,u,a||null,!0),HM(o,u)):t===2?(s?.[Ai]?.leave?.has(o.index)&&UM(o,u),Ka.delete(u),k_(s,o,e,f=>{if(Ka.has(u)){Ka.delete(u);return}ky(n,u,l,f)})):t===3&&(Ka.delete(u),k_(s,o,e,()=>{n.destroyNode(u)})),c!=null&&iS(n,t,e,c,o,i,a)}}function qM(t,n){By(t,n),n[hn]=null,n[xt]=null}function ZM(t,n,e,i,r,o){i[hn]=r,i[xt]=n,id(t,i,e,1,r,o)}function By(t,n){n[Rn].changeDetectionScheduler?.notify(9),id(t,n,n[Ce],2,null,null)}function QM(t){let n=t[uo];if(!n)return Qm(t[U],t);for(;n;){let e=null;if(ti(n))e=n[uo];else{let i=n[Ne];i&&(e=i)}if(!e){for(;n&&!n[Kt]&&n!==t;)ti(n)&&Qm(n[U],n),n=n[Ze];n===null&&(n=t),ti(n)&&Qm(n[U],n),e=n&&n[Kt]}n=e}}function tp(t,n){let e=t[vr],i=e.indexOf(n);e.splice(i,1)}function nd(t,n){if(_r(n))return;let e=n[Ce];e.destroyNode&&id(t,n,e,3,null,null),QM(n)}function Qm(t,n){if(_r(n))return;let e=L(null);try{n[Y]&=-129,n[Y]|=256,n[Ut]&&vi(n[Ut]),XM(t,n),KM(t,n),n[U].type===1&&n[Ce].destroy();let i=n[Ti];if(i!==null&&pn(n[Ze])){i!==n[Ze]&&tp(i,n);let r=n[Nn];r!==null&&r.detachView(t)}ah(n)}finally{L(e)}}function k_(t,n,e,i){let r=t?.[Ai];if(r==null||r.leave==null||!r.leave.has(n.index))return i(!1);t&&Dr.add(t[ei]),jy(e,()=>{if(r.leave&&r.leave.has(n.index)){let a=r.leave.get(n.index),s=[];if(a){for(let c=0;c<a.animateFns.length;c++){let l=a.animateFns[c],{promise:u}=l();s.push(u)}r.detachedLeaveAnimationFns=void 0}r.running=Promise.allSettled(s),YM(t,i)}else t&&Dr.delete(t[ei]),i(!1)},r)}function YM(t,n){let e=t[Ai]?.running;if(e){e.then(()=>{t[Ai].running=void 0,Dr.delete(t[ei]),n(!0)});return}n(!1)}function KM(t,n){let e=t.cleanup,i=n[lo];if(e!==null)for(let a=0;a<e.length-1;a+=2)if(typeof e[a]=="string"){let s=e[a+3];s>=0?i[s]():i[-s].unsubscribe(),a+=2}else{let s=i[e[a+1]];e[a].call(s)}i!==null&&(n[lo]=null);let r=n[Xn];if(r!==null){n[Xn]=null;for(let a=0;a<r.length;a++){let s=r[a];s()}}let o=n[Ii];if(o!==null){n[Ii]=null;for(let a of o)a.destroy()}}function XM(t,n){let e;if(t!=null&&(e=t.destroyHooks)!=null)for(let i=0;i<e.length;i+=2){let r=n[e[i]];if(!(r instanceof Cr)){let o=e[i+1];if(Array.isArray(o))for(let a=0;a<o.length;a+=2){let s=r[o[a]],c=o[a+1];we(fe.LifecycleHookStart,s,c);try{c.call(s)}finally{we(fe.LifecycleHookEnd,s,c)}}else{we(fe.LifecycleHookStart,r,o);try{o.call(r)}finally{we(fe.LifecycleHookEnd,r,o)}}}}}function Vy(t,n,e){return JM(t,n.parent,e)}function JM(t,n,e){let i=n;for(;i!==null&&i.type&168;)n=i,i=n.parent;if(i===null)return e[hn];if(On(i)){let{encapsulation:r}=t.data[i.directiveStart+i.componentOffset];if(r===vn.None||r===vn.Emulated)return null}return Jt(i,e)}function Hy(t,n,e){return tS(t,n,e)}function eS(t,n,e){return t.type&40?Jt(t,e):null}var tS=eS,T_;function np(t,n,e,i){let r=Vy(t,i,n),o=n[Ce],a=i.parent||n[xt],s=Hy(a,i,n);if(r!=null)if(Array.isArray(e))for(let c=0;c<e.length;c++)E_(o,r,e[c],s,!1);else E_(o,r,e,s,!1);T_!==void 0&&T_(o,i,n,e,r)}function Xa(t,n){if(n!==null){let e=n.type;if(e&3)return Jt(n,t);if(e&4)return vh(-1,t[n.index]);if(e&8){let i=n.child;if(i!==null)return Xa(t,i);{let r=t[n.index];return pn(r)?vh(-1,r):Xt(r)}}else{if(e&128)return Xa(t,n.next);if(e&32)return Xh(n,t)()||Xt(t[n.index]);{let i=Uy(t,n);if(i!==null){if(Array.isArray(i))return i[0];let r=Mi(t[Et]);return Xa(r,i)}else return Xa(t,n.next)}}}return null}function Uy(t,n){if(n!==null){let i=t[Et][xt],r=n.projection;return i.projection[r]}return null}function vh(t,n){let e=Ne+t+1;if(e<n.length){let i=n[e],r=i[U].firstChild;if(r!==null)return Xa(i,r)}return n[Ri]}function ip(t,n,e,i,r,o,a){for(;e!=null;){let s=i[Jn];if(e.type===128){e=e.next;continue}let c=i[e.index],l=e.type;if(a&&n===0&&(c&&yo(Xt(c),i),e.flags|=2),!Yl(e))if(l&8)ip(t,n,e.child,i,r,o,!1),bo(n,t,s,r,c,e,o,i);else if(l&32){let u=Xh(e,i),f;for(;f=u();)bo(n,t,s,r,f,e,o,i);bo(n,t,s,r,c,e,o,i)}else l&16?zy(t,n,i,e,r,o):bo(n,t,s,r,c,e,o,i);e=a?e.projectionNext:e.next}}function id(t,n,e,i,r,o){ip(e,i,t.firstChild,n,r,o,!1)}function nS(t,n,e){let i=n[Ce],r=Vy(t,e,n),o=e.parent||n[xt],a=Hy(o,e,n);zy(i,0,n,e,r,a)}function zy(t,n,e,i,r,o){let a=e[Et],c=a[xt].projection[i.projection];if(Array.isArray(c))for(let l=0;l<c.length;l++){let u=c[l];bo(n,t,e[Jn],r,u,i,o,e)}else{let l=c,u=a[Ze];ly(i)&&(l.flags|=128),ip(t,n,l,u,r,o,!0)}}function iS(t,n,e,i,r,o,a){let s=i[Ri],c=Xt(i);s!==c&&bo(n,t,e,o,s,r,a);for(let l=Ne;l<i.length;l++){let u=i[l];id(u[U],u,t,n,o,s)}}function rS(t,n,e,i,r){if(n)r?t.addClass(e,i):t.removeClass(e,i);else{let o=i.indexOf("-")===-1?void 0:jn.DashCase;r==null?t.removeStyle(e,i,o):(typeof r=="string"&&r.endsWith("!important")&&(r=r.slice(0,-10),o|=jn.Important),t.setStyle(e,i,r,o))}}function $y(t,n,e,i,r){let o=ni(),a=i&2;try{Ni(-1),a&&n.length>Ae&&Py(t,n,Ae,!1);let s=a?fe.TemplateUpdateStart:fe.TemplateCreateStart;we(s,r,e),e(i,r)}finally{Ni(o);let s=a?fe.TemplateUpdateEnd:fe.TemplateCreateEnd;we(s,r,e)}}function rp(t,n,e){lS(t,n,e),(e.flags&64)===64&&dS(t,n,e)}function rd(t,n,e=Jt){let i=n.localNames;if(i!==null){let r=n.index+1;for(let o=0;o<i.length;o+=2){let a=i[o+1],s=a===-1?e(n,t):t[a];t[r++]=s}}}function oS(t,n,e,i){let o=i.get(by,gy)||e===vn.ShadowDom||e===vn.ExperimentalIsolatedShadowDom,a=t.selectRootElement(n,o);return aS(a),a}function aS(t){sS(t)}var sS=()=>null;function cS(t){return t==="class"?"className":t==="for"?"htmlFor":t==="formaction"?"formAction":t==="innerHtml"?"innerHTML":t==="readonly"?"readOnly":t==="tabindex"?"tabIndex":t}function Wy(t,n,e,i,r,o){let a=n[U];if(od(t,a,n,e,i)){On(t)&&qy(n,t.index);return}t.type&3&&(e=cS(e)),Gy(t,n,e,i,r,o)}function Gy(t,n,e,i,r,o){if(t.type&3){let a=Jt(t,n);i=o!=null?o(i,t.value||"",e):i,r.setProperty(a,e,i)}else t.type&12}function qy(t,n){let e=en(n,t);e[Y]&16||(e[Y]|=64)}function lS(t,n,e){let i=e.directiveStart,r=e.directiveEnd;On(e)&&BM(n,e,t.data[i+e.componentOffset]),t.firstCreatePass||Ol(e,n);let o=e.initialInputs;for(let a=i;a<r;a++){let s=t.data[a],c=es(n,t,a,e);if(yo(c,n),o!==null&&mS(n,a-i,c,s,e,o),Fn(s)){let l=en(e.index,n);l[Be]=es(n,t,a,e)}}}function dS(t,n,e){let i=e.directiveStart,r=e.directiveEnd,o=e.index,a=e_();try{Ni(o);for(let s=i;s<r;s++){let c=t.data[s],l=n[s];hl(s),(c.hostBindings!==null||c.hostVars!==0||c.hostAttrs!==null)&&uS(c,l)}}finally{Ni(-1),hl(a)}}function uS(t,n){t.hostBindings!==null&&t.hostBindings(1,n)}function Zy(t,n){let e=t.directiveRegistry,i=null;if(e)for(let r=0;r<e.length;r++){let o=e[r];Ny(n,o.selectors,!1)&&(i??=[],Fn(o)?i.unshift(o):i.push(o))}return i}function fS(t,n,e,i,r,o){let a=Jt(t,n);Qy(n[Ce],a,o,t.value,e,i,r)}function Qy(t,n,e,i,r,o,a){if(o==null)t.removeAttribute(n,r,e);else{let s=a==null?ol(o):a(o,i||"",r);t.setAttribute(n,r,s,e)}}function mS(t,n,e,i,r,o){let a=o[n];if(a!==null)for(let s=0;s<a.length;s+=2){let c=a[s],l=a[s+1];gh(i,e,c,l)}}function Yy(t,n,e,i,r){let o=Ae+e,a=n[U],s=r(a,n,t,i,e);n[o]=s,mo(t,!0);let c=t.type===2;return c?(Ty(n[Ce],s,t),(Gv()===0||Wa(t))&&yo(s,n),qv()):yo(s,n),vl()&&(!c||!Yl(t))&&np(a,n,s,t),t}function Ky(t){let n=t;return Fm()?Pm():(n=n.parent,mo(n,!1)),n}function hS(t,n){let e=t[Jn];if(!e)return;let i;try{i=e.get($t,null)}catch{i=null}i?.(n)}function od(t,n,e,i,r){let o=t.inputs?.[i],a=t.hostDirectiveInputs?.[i],s=!1;if(a)for(let c=0;c<a.length;c+=2){let l=a[c],u=a[c+1],f=n.data[l];gh(f,e[l],u,r),s=!0}if(o)for(let c of o){let l=e[c],u=n.data[c];gh(u,l,i,r),s=!0}return s}function pS(t,n){let e=en(n,t),i=e[U];gS(i,e);let r=e[hn];r!==null&&e[hr]===null&&(e[hr]=vy(r,e[Jn])),we(fe.ComponentStart);try{op(i,e,e[Be])}finally{we(fe.ComponentEnd,e[Be])}}function gS(t,n){for(let e=n.length;e<t.blueprint.length;e++)n.push(t.blueprint[e])}function op(t,n,e){gl(n);try{let i=t.viewQuery;i!==null&&sh(1,i,e);let r=t.template;r!==null&&$y(t,n,r,1,e),t.firstCreatePass&&(t.firstCreatePass=!1),n[Nn]?.finishViewCreation(t),t.staticContentQueries&&_y(t,n),t.staticViewQueries&&sh(2,t.viewQuery,e);let o=t.components;o!==null&&bS(n,o)}catch(i){throw t.firstCreatePass&&(t.incompleteFirstPass=!0,t.firstCreatePass=!1),i}finally{n[Y]&=-5,bl()}}function bS(t,n){for(let e=0;e<n.length;e++)pS(t,n[e])}function ls(t,n,e,i){let r=L(null);try{let o=n.tView,s=t[Y]&4096?4096:16,c=Yh(t,o,e,s,null,n,null,null,i?.injector??null,i?.embeddedViewInjector??null,i?.dehydratedView??null),l=t[n.index];c[Ti]=l;let u=t[Nn];return u!==null&&(c[Nn]=u.createEmbeddedView(o)),op(o,c,e),c}finally{L(r)}}function wo(t,n){return!n||n.firstChild===null||ly(t)}function ns(t,n,e,i,r=!1){for(;e!==null;){if(e.type===128){e=r?e.projectionNext:e.next;continue}let o=n[e.index];o!==null&&i.push(Xt(o)),pn(o)&&Xy(o,i);let a=e.type;if(a&8)ns(t,n,e.child,i);else if(a&32){let s=Xh(e,n),c;for(;c=s();)i.push(c)}else if(a&16){let s=Uy(n,e);if(Array.isArray(s))i.push(...s);else{let c=Mi(n[Et]);ns(c[U],c,s,i,!0)}}e=r?e.projectionNext:e.next}return i}function Xy(t,n){for(let e=Ne;e<t.length;e++){let i=t[e],r=i[U].firstChild;r!==null&&ns(i[U],i,r,n)}t[Ri]!==t[hn]&&n.push(t[Ri])}function Jy(t){if(t[br]!==null){for(let n of t[br])n.impl.addSequence(n);t[br].length=0}}var ew=[];function vS(t){return t[Ut]??_S(t)}function _S(t){let n=ew.pop()??Object.create(wS);return n.lView=t,n}function yS(t){t.lView[Ut]!==t&&(t.lView=null,ew.push(t))}var wS=G(v({},er),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:t=>{yr(t.lView)},consumerOnSignalRead(){this.lView[Ut]=this}});function CS(t){let n=t[Ut]??Object.create(DS);return n.lView=t,n}var DS=G(v({},er),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:t=>{let n=Mi(t.lView);for(;n&&!tw(n[U]);)n=Mi(n);n&&Em(n)},consumerOnSignalRead(){this.lView[Ut]=this}});function tw(t){return t.type!==2}function nw(t){if(t[Ii]===null)return;let n=!0;for(;n;){let e=!1;for(let i of t[Ii])i.dirty&&(e=!0,i.zone===null||Zone.current===i.zone?i.run():i.zone.run(()=>i.run()));n=e&&!!(t[Y]&8192)}}var xS=100;function iw(t,n=0){let i=t[Rn].rendererFactory,r=!1;r||i.begin?.();try{ES(t,n)}finally{r||i.end?.()}}function ES(t,n){let e=Lm();try{La(!0),_h(t,n);let i=0;for(;Ga(t);){if(i===xS)throw new D(103,!1);i++,_h(t,1)}}finally{La(e)}}function IS(t,n,e,i){if(_r(n))return;let r=n[Y],o=!1,a=!1;gl(n);let s=!0,c=null,l=null;o||(tw(t)?(l=vS(n),c=bi(l)):hc()===null?(s=!1,l=CS(n),c=bi(l)):n[Ut]&&(vi(n[Ut]),n[Ut]=null));try{xm(n),Kv(t.bindingStartIndex),e!==null&&$y(t,n,e,2,i);let u=(r&3)===3;if(!o)if(u){let h=t.preOrderCheckHooks;h!==null&&El(n,h,null)}else{let h=t.preOrderHooks;h!==null&&Il(n,h,0,null),qm(n,0)}if(a||MS(n),nw(n),rw(n,0),t.contentQueries!==null&&_y(t,n),!o)if(u){let h=t.contentCheckHooks;h!==null&&El(n,h)}else{let h=t.contentHooks;h!==null&&Il(n,h,1),qm(n,1)}kS(t,n);let f=t.components;f!==null&&aw(n,f,0);let m=t.viewQuery;if(m!==null&&sh(2,m,i),!o)if(u){let h=t.viewCheckHooks;h!==null&&El(n,h)}else{let h=t.viewHooks;h!==null&&Il(n,h,2),qm(n,2)}if(t.firstUpdatePass===!0&&(t.firstUpdatePass=!1),n[dl]){for(let h of n[dl])h();n[dl]=null}o||(Jy(n),n[Y]&=-73)}catch(u){throw o||yr(n),u}finally{l!==null&&(tr(l,c),s&&yS(l)),bl()}}function rw(t,n){for(let e=uy(t);e!==null;e=fy(e))for(let i=Ne;i<e.length;i++){let r=e[i];ow(r,n)}}function MS(t){for(let n=uy(t);n!==null;n=fy(n)){if(!(n[Y]&2))continue;let e=n[vr];for(let i=0;i<e.length;i++){let r=e[i];Em(r)}}}function SS(t,n,e){we(fe.ComponentStart);let i=en(n,t);try{ow(i,e)}finally{we(fe.ComponentEnd,i[Be])}}function ow(t,n){fl(t)&&_h(t,n)}function _h(t,n){let i=t[U],r=t[Y],o=t[Ut],a=!!(n===0&&r&16);if(a||=!!(r&64&&n===0),a||=!!(r&1024),a||=!!(o?.dirty&&Yr(o)),a||=!1,o&&(o.dirty=!1),t[Y]&=-9217,a)IS(i,t,i.template,t[Be]);else if(r&8192){let s=L(null);try{nw(t),rw(t,1);let c=i.components;c!==null&&aw(t,c,1),Jy(t)}finally{L(s)}}}function aw(t,n,e){for(let i=0;i<n.length;i++)SS(t,n[i],e)}function kS(t,n){let e=t.hostBindingOpCodes;if(e!==null)try{for(let i=0;i<e.length;i++){let r=e[i];if(r<0)Ni(~r);else{let o=r,a=e[++i],s=e[++i];Jv(a,o);let c=n[o];we(fe.HostBindingsUpdateStart,c);try{s(2,c)}finally{we(fe.HostBindingsUpdateEnd,c)}}}}finally{Ni(-1)}}function ap(t,n){let e=Lm()?64:1088;for(t[Rn].changeDetectionScheduler?.notify(n);t;){t[Y]|=e;let i=Mi(t);if(fo(t)&&!i)return t;t=i}return null}function sw(t,n,e,i){return[t,!0,0,n,null,i,null,e,null,null]}function cw(t,n){let e=Ne+n;if(e<t.length)return t[e]}function ds(t,n,e,i=!0){let r=n[U];if(TS(r,n,t,e),i){let a=vh(e,t),s=n[Ce],c=s.parentNode(t[Ri]);c!==null&&ZM(r,t[xt],s,n,c,a)}let o=n[hr];o!==null&&o.firstChild!==null&&(o.firstChild=null)}function lw(t,n){let e=is(t,n);return e!==void 0&&nd(e[U],e),e}function is(t,n){if(t.length<=Ne)return;let e=Ne+n,i=t[e];if(i){let r=i[Ti];r!==null&&r!==t&&tp(r,i),n>0&&(t[e-1][Kt]=i[Kt]);let o=Ua(t,Ne+n);qM(i[U],i);let a=o[Nn];a!==null&&a.detachView(o[U]),i[Ze]=null,i[Kt]=null,i[Y]&=-129}return i}function TS(t,n,e,i){let r=Ne+i,o=e.length;i>0&&(e[r-1][Kt]=n),i<o-Ne?(n[Kt]=e[r],dm(e,Ne+i,n)):(e.push(n),n[Kt]=null),n[Ze]=e;let a=n[Ti];a!==null&&e!==a&&dw(a,n);let s=n[Nn];s!==null&&s.insertView(t),ml(n),n[Y]|=128}function dw(t,n){let e=t[vr],i=n[Ze];if(ti(i))t[Y]|=2;else{let r=i[Ze][Et];n[Et]!==r&&(t[Y]|=2)}e===null?t[vr]=[n]:e.push(n)}var Oi=class{_lView;_cdRefInjectingView;_appRef=null;_attachedToViewContainer=!1;exhaustive;get rootNodes(){let n=this._lView,e=n[U];return ns(e,n,e.firstChild,[])}constructor(n,e){this._lView=n,this._cdRefInjectingView=e}get context(){return this._lView[Be]}set context(n){this._lView[Be]=n}get destroyed(){return _r(this._lView)}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let n=this._lView[Ze];if(pn(n)){let e=n[$a],i=e?e.indexOf(this):-1;i>-1&&(is(n,i),Ua(e,i))}this._attachedToViewContainer=!1}nd(this._lView[U],this._lView)}onDestroy(n){Im(this._lView,n)}markForCheck(){ap(this._cdRefInjectingView||this._lView,4)}detach(){this._lView[Y]&=-129}reattach(){ml(this._lView),this._lView[Y]|=128}detectChanges(){this._lView[Y]|=1024,iw(this._lView)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new D(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null;let n=fo(this._lView),e=this._lView[Ti];e!==null&&!n&&tp(e,this._lView),By(this._lView[U],this._lView)}attachToAppRef(n){if(this._attachedToViewContainer)throw new D(902,!1);this._appRef=n;let e=fo(this._lView),i=this._lView[Ti];i!==null&&!e&&dw(i,this._lView),ml(this._lView)}};var bt=(()=>{class t{_declarationLView;_declarationTContainer;elementRef;static __NG_ELEMENT_ID__=AS;constructor(e,i,r){this._declarationLView=e,this._declarationTContainer=i,this.elementRef=r}get ssrId(){return this._declarationTContainer.tView?.ssrId||null}createEmbeddedView(e,i){return this.createEmbeddedViewImpl(e,i)}createEmbeddedViewImpl(e,i,r){let o=ls(this._declarationLView,this._declarationTContainer,e,{embeddedViewInjector:i,dehydratedView:r});return new Oi(o)}}return t})();function AS(){return ad(it(),Z())}function ad(t,n){return t.type&4?new bt(n,t,xo(t,n)):null}function Mo(t,n,e,i,r){let o=t.data[n];if(o===null)o=RS(t,n,e,i,r),Xv()&&(o.flags|=32);else if(o.type&64){o.type=e,o.value=i,o.attrs=r;let a=Zv();o.injectorIndex=a===null?-1:a.injectorIndex}return mo(o,!0),o}function RS(t,n,e,i,r){let o=Om(),a=Fm(),s=a?o:o&&o.parent,c=t.data[n]=OS(t,s,e,n,i,r);return NS(t,c,o,a),c}function NS(t,n,e,i){t.firstChild===null&&(t.firstChild=n),e!==null&&(i?e.child==null&&n.parent!==null&&(e.child=n):e.next===null&&(e.next=n,n.prev=e))}function OS(t,n,e,i,r,o){let a=n?n.injectorIndex:-1,s=0;return Am()&&(s|=128),{type:e,index:i,insertBeforeIndex:null,injectorIndex:a,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,controlDirectiveIndex:-1,customControlIndex:-1,propertyBindings:null,flags:s,providerIndexes:0,value:r,attrs:o,mergedAttrs:null,localNames:null,initialInputs:null,inputs:null,hostDirectiveInputs:null,outputs:null,hostDirectiveOutputs:null,directiveToIndex:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:n,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}function FS(t){let n=t[vm]??[],i=t[Ze][Ce],r=[];for(let o of n)o.data[py]!==void 0?r.push(o):PS(o,i);t[vm]=r}function PS(t,n){let e=0,i=t.firstChild;if(i){let r=t.data[hy];for(;e<r;){let o=i.nextSibling;ky(n,i,!1),i=o,e++}}}var LS=()=>null,jS=()=>null;function Pl(t,n){return LS(t,n)}function uw(t,n,e){return jS(t,n,e)}var fw=class{},sd=class{},yh=class{resolveComponentFactory(n){throw new D(917,!1)}},us=class{static NULL=new yh},ze=class{},Se=(()=>{class t{destroyNode=null;static __NG_ELEMENT_ID__=()=>BS()}return t})();function BS(){let t=Z(),n=it(),e=en(n.index,t);return(ti(e)?e:t)[Ce]}var mw=(()=>{class t{static \u0275prov=p({token:t,providedIn:"root",factory:()=>null})}return t})();var Sl={},wh=class{injector;parentInjector;constructor(n,e){this.injector=n,this.parentInjector=e}get(n,e,i){let r=this.injector.get(n,Sl,i);return r!==Sl||e===Sl?r:this.parentInjector.get(n,e,i)}};function Ll(t,n,e){let i=e?t.styles:null,r=e?t.classes:null,o=0;if(n!==null)for(let a=0;a<n.length;a++){let s=n[a];if(typeof s=="number")o=s;else if(o==1)r=nl(r,s);else if(o==2){let c=s,l=n[++a];i=nl(i,c+": "+l+";")}}e?t.styles=i:t.stylesWithoutHost=i,e?t.classes=r:t.classesWithoutHost=r}function De(t,n=0){let e=Z();if(e===null)return T(t,n);let i=it();return oy(i,e,lt(t),n)}function sp(){let t="invalid";throw new Error(t)}function hw(t,n,e,i,r){let o=i===null?null:{"":-1},a=r(t,e);if(a!==null){let s=a,c=null,l=null;for(let u of a)if(u.resolveHostDirectives!==null){[s,c,l]=u.resolveHostDirectives(a);break}US(t,n,e,s,o,c,l)}o!==null&&i!==null&&VS(e,i,o)}function VS(t,n,e){let i=t.localNames=[];for(let r=0;r<n.length;r+=2){let o=e[n[r+1]];if(o==null)throw new D(-301,!1);i.push(n[r],o)}}function HS(t,n,e){n.componentOffset=e,(t.components??=[]).push(n.index)}function US(t,n,e,i,r,o,a){let s=i.length,c=null;for(let m=0;m<s;m++){let h=i[m];c===null&&Fn(h)&&(c=h,HS(t,e,m)),rh(Ol(e,n),t,h.type)}ZS(e,t.data.length,s),c?.viewProvidersResolver&&c.viewProvidersResolver(c);for(let m=0;m<s;m++){let h=i[m];h.providersResolver&&h.providersResolver(h)}let l=!1,u=!1,f=Fy(t,n,s,null);s>0&&(e.directiveToIndex=new Map);for(let m=0;m<s;m++){let h=i[m];if(e.mergedAttrs=_o(e.mergedAttrs,h.hostAttrs),$S(t,e,n,f,h),qS(f,h,r),a!==null&&a.has(h)){let[C,I]=a.get(h);e.directiveToIndex.set(h.type,[f,C+e.directiveStart,I+e.directiveStart])}else(o===null||!o.has(h))&&e.directiveToIndex.set(h.type,f);h.contentQueries!==null&&(e.flags|=4),(h.hostBindings!==null||h.hostAttrs!==null||h.hostVars!==0)&&(e.flags|=64);let b=h.type.prototype;!l&&(b.ngOnChanges||b.ngOnInit||b.ngDoCheck)&&((t.preOrderHooks??=[]).push(e.index),l=!0),!u&&(b.ngOnChanges||b.ngDoCheck)&&((t.preOrderCheckHooks??=[]).push(e.index),u=!0),f++}zS(t,e,o)}function zS(t,n,e){for(let i=n.directiveStart;i<n.directiveEnd;i++){let r=t.data[i];if(e===null||!e.has(r))A_(0,n,r,i),A_(1,n,r,i),N_(n,i,!1);else{let o=e.get(r);R_(0,n,o,i),R_(1,n,o,i),N_(n,i,!0)}}}function A_(t,n,e,i){let r=t===0?e.inputs:e.outputs;for(let o in r)if(r.hasOwnProperty(o)){let a;t===0?a=n.inputs??={}:a=n.outputs??={},a[o]??=[],a[o].push(i),pw(n,o)}}function R_(t,n,e,i){let r=t===0?e.inputs:e.outputs;for(let o in r)if(r.hasOwnProperty(o)){let a=r[o],s;t===0?s=n.hostDirectiveInputs??={}:s=n.hostDirectiveOutputs??={},s[a]??=[],s[a].push(i,o),pw(n,a)}}function pw(t,n){n==="class"?t.flags|=8:n==="style"&&(t.flags|=16)}function N_(t,n,e){let{attrs:i,inputs:r,hostDirectiveInputs:o}=t;if(i===null||!e&&r===null||e&&o===null||Zh(t)){t.initialInputs??=[],t.initialInputs.push(null);return}let a=null,s=0;for(;s<i.length;){let c=i[s];if(c===0){s+=4;continue}else if(c===5){s+=2;continue}else if(typeof c=="number")break;if(!e&&r.hasOwnProperty(c)){let l=r[c];for(let u of l)if(u===n){a??=[],a.push(c,i[s+1]);break}}else if(e&&o.hasOwnProperty(c)){let l=o[c];for(let u=0;u<l.length;u+=2)if(l[u]===n){a??=[],a.push(l[u+1],i[s+1]);break}}s+=2}t.initialInputs??=[],t.initialInputs.push(a)}function $S(t,n,e,i,r){t.data[i]=r;let o=r.factory||(r.factory=Ei(r.type,!0)),a=new Cr(o,Fn(r),De,null);t.blueprint[i]=a,e[i]=a,WS(t,n,i,Fy(t,e,r.hostVars,Wt),r)}function WS(t,n,e,i,r){let o=r.hostBindings;if(o){let a=t.hostBindingOpCodes;a===null&&(a=t.hostBindingOpCodes=[]);let s=~n.index;GS(a)!=s&&a.push(s),a.push(e,i,o)}}function GS(t){let n=t.length;for(;n>0;){let e=t[--n];if(typeof e=="number"&&e<0)return e}return 0}function qS(t,n,e){if(e){if(n.exportAs)for(let i=0;i<n.exportAs.length;i++)e[n.exportAs[i]]=t;Fn(n)&&(e[""]=t)}}function ZS(t,n,e){t.flags|=1,t.directiveStart=n,t.directiveEnd=n+e,t.providerIndexes=n}function gw(t,n,e,i,r,o,a,s){let c=n[U],l=c.consts,u=zt(l,a),f=Mo(c,t,e,i,u);return o&&hw(c,n,f,zt(l,s),r),f.mergedAttrs=_o(f.mergedAttrs,f.attrs),f.attrs!==null&&Ll(f,f.attrs,!1),f.mergedAttrs!==null&&Ll(f,f.mergedAttrs,!0),c.queries!==null&&c.queries.elementStart(c,f),f}function bw(t,n){Y_(t,n),_m(n)&&t.queries.elementEnd(n)}function QS(t,n,e,i,r,o){let a=n.consts,s=zt(a,r),c=Mo(n,t,e,i,s);if(c.mergedAttrs=_o(c.mergedAttrs,c.attrs),o!=null){let l=zt(a,o);c.localNames=[];for(let u=0;u<l.length;u+=2)c.localNames.push(l[u],-1)}return c.attrs!==null&&Ll(c,c.attrs,!1),c.mergedAttrs!==null&&Ll(c,c.mergedAttrs,!0),n.queries!==null&&n.queries.elementStart(n,c),c}function YS(t,n,e){return t[n]=e}function tn(t,n,e){if(e===Wt)return!1;let i=t[n];return Object.is(i,e)?!1:(t[n]=e,!0)}function kl(t,n,e){return function i(r){let o=On(t)?en(t.index,n):n;ap(o,5);let a=n[Be],s=O_(n,a,e,r),c=i.__ngNextListenerFn__;for(;c;)s=O_(n,a,c,r)&&s,c=c.__ngNextListenerFn__;return s}}function O_(t,n,e,i){let r=L(null);try{return we(fe.OutputStart,n,e),e(i)!==!1}catch(o){return hS(t,o),!1}finally{we(fe.OutputEnd,n,e),L(r)}}function vw(t,n,e,i,r,o,a,s){let c=Wa(t),l=!1,u=null;if(!i&&c&&(u=XS(n,e,o,t.index)),u!==null){let f=u.__ngLastListenerFn__||u;f.__ngNextListenerFn__=a,u.__ngLastListenerFn__=a,l=!0}else{let f=Jt(t,e),m=i?i(f):f;nM(e,m,o,s);let h=r.listen(m,o,s);if(!KS(o)){let b=i?C=>i(Xt(C[t.index])):t.index;_w(b,n,e,o,s,h,!1)}}return l}function KS(t){return t.startsWith("animation")||t.startsWith("transition")}function XS(t,n,e,i){let r=t.cleanup;if(r!=null)for(let o=0;o<r.length-1;o+=2){let a=r[o];if(a===e&&r[o+1]===i){let s=n[lo],c=r[o+2];return s&&s.length>c?s[c]:null}typeof a=="string"&&(o+=2)}return null}function _w(t,n,e,i,r,o,a){let s=n.firstCreatePass?Sm(n):null,c=Mm(e),l=c.length;c.push(r,o),s&&s.push(i,t,l,(l+1)*(a?-1:1))}function F_(t,n,e,i,r,o){let a=n[e],s=n[U],l=s.data[e].outputs[i],f=a[l].subscribe(o);_w(t.index,s,n,r,o,f,!0)}var Ch=Symbol("BINDING");function yw(t){return t.debugInfo?.className||t.type.name||null}var jl=class extends us{ngModule;constructor(n){super(),this.ngModule=n}resolveComponentFactory(n){let e=Tn(n);return new Fi(e,this.ngModule)}};function JS(t){return Object.keys(t).map(n=>{let[e,i,r]=t[n],o={propName:e,templateName:n,isSignal:(i&Jl.SignalBased)!==0};return r&&(o.transform=r),o})}function ek(t){return Object.keys(t).map(n=>({propName:t[n],templateName:n}))}function tk(t,n,e){let i=n instanceof ye?n:n?.injector;return i&&t.getStandaloneInjector!==null&&(i=t.getStandaloneInjector(i)||i),i?new wh(e,i):e}function nk(t){let n=t.get(ze,null);if(n===null)throw new D(407,!1);let e=t.get(mw,null),i=t.get(kn,null),r=t.get(_n,null,{optional:!0});return{rendererFactory:n,sanitizer:e,changeDetectionScheduler:i,ngReflect:!1,tracingService:r}}function ik(t,n){let e=ww(t);return My(n,e,e==="svg"?ym:e==="math"?Vv:null)}function ww(t){return(t.selectors[0][0]||"div").toLowerCase()}var Fi=class extends sd{componentDef;ngModule;selector;componentType;ngContentSelectors;isBoundToModule;cachedInputs=null;cachedOutputs=null;get inputs(){return this.cachedInputs??=JS(this.componentDef.inputs),this.cachedInputs}get outputs(){return this.cachedOutputs??=ek(this.componentDef.outputs),this.cachedOutputs}constructor(n,e){super(),this.componentDef=n,this.ngModule=e,this.componentType=n.type,this.selector=FM(n.selectors),this.ngContentSelectors=n.ngContentSelectors??[],this.isBoundToModule=!!e}create(n,e,i,r,o,a){we(fe.DynamicComponentStart);let s=L(null);try{let c=this.componentDef,l=tk(c,r||this.ngModule,n),u=nk(l),f=u.tracingService;return f&&f.componentCreate?f.componentCreate(yw(c),()=>this.createComponentRef(u,l,e,i,o,a)):this.createComponentRef(u,l,e,i,o,a)}finally{L(s)}}createComponentRef(n,e,i,r,o,a){let s=this.componentDef,c=rk(r,s,a,o),l=n.rendererFactory.createRenderer(null,s),u=r?oS(l,r,s.encapsulation,e):ik(s,l),f=a?.some(P_)||o?.some(b=>typeof b!="function"&&b.bindings.some(P_)),m=Yh(null,c,null,512|Oy(s),null,null,n,l,e,null,vy(u,e,!0));m[Ae]=u,gl(m);let h=null;try{let b=gw(Ae,m,2,"#host",()=>c.directiveRegistry,!0,0);Ty(l,u,b),yo(u,m),rp(c,m,b),yy(c,b,m),bw(c,b),i!==void 0&&ak(b,this.ngContentSelectors,i),h=en(b.index,m),m[Be]=h[Be],op(c,m,null)}catch(b){throw h!==null&&ah(h),ah(m),b}finally{we(fe.DynamicComponentEnd),bl()}return new Bl(this.componentType,m,!!f)}};function rk(t,n,e,i){let r=t?["ng-version","21.2.7"]:PM(n.selectors[0]),o=null,a=null,s=0;if(e)for(let u of e)s+=u[Ch].requiredVars,u.create&&(u.targetIdx=0,(o??=[]).push(u)),u.update&&(u.targetIdx=0,(a??=[]).push(u));if(i)for(let u=0;u<i.length;u++){let f=i[u];if(typeof f!="function")for(let m of f.bindings){s+=m[Ch].requiredVars;let h=u+1;m.create&&(m.targetIdx=h,(o??=[]).push(m)),m.update&&(m.targetIdx=h,(a??=[]).push(m))}}let c=[n];if(i)for(let u of i){let f=typeof u=="function"?u:u.type,m=sm(f);c.push(m)}return Qh(0,null,ok(o,a),1,s,c,null,null,null,[r],null)}function ok(t,n){return!t&&!n?null:e=>{if(e&1&&t)for(let i of t)i.create();if(e&2&&n)for(let i of n)i.update()}}function P_(t){let n=t[Ch].kind;return n==="input"||n==="twoWay"}var Bl=class extends fw{_rootLView;_hasInputBindings;instance;hostView;changeDetectorRef;componentType;location;previousInputValues=null;_tNode;constructor(n,e,i){super(),this._rootLView=e,this._hasInputBindings=i,this._tNode=ul(e[U],Ae),this.location=xo(this._tNode,e),this.instance=en(this._tNode.index,e)[Be],this.hostView=this.changeDetectorRef=new Oi(e,void 0),this.componentType=n}setInput(n,e){this._hasInputBindings;let i=this._tNode;if(this.previousInputValues??=new Map,this.previousInputValues.has(n)&&Object.is(this.previousInputValues.get(n),e))return;let r=this._rootLView,o=od(i,r[U],r,n,e);this.previousInputValues.set(n,e);let a=en(i.index,r);ap(a,1)}get injector(){return new wr(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(n){this.hostView.onDestroy(n)}};function ak(t,n,e){let i=t.projection=[];for(let r=0;r<n.length;r++){let o=e[r];i.push(o!=null&&o.length?Array.from(o):null)}}var St=(()=>{class t{static __NG_ELEMENT_ID__=sk}return t})();function sk(){let t=it();return Cw(t,Z())}var Dh=class t extends St{_lContainer;_hostTNode;_hostLView;constructor(n,e,i){super(),this._lContainer=n,this._hostTNode=e,this._hostLView=i}get element(){return xo(this._hostTNode,this._hostLView)}get injector(){return new wr(this._hostTNode,this._hostLView)}get parentInjector(){let n=Bh(this._hostTNode,this._hostLView);if(J_(n)){let e=Rl(n,this._hostLView),i=Al(n),r=e[U].data[i+8];return new wr(r,e)}else return new wr(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(n){let e=L_(this._lContainer);return e!==null&&e[n]||null}get length(){return this._lContainer.length-Ne}createEmbeddedView(n,e,i){let r,o;typeof i=="number"?r=i:i!=null&&(r=i.index,o=i.injector);let a=Pl(this._lContainer,n.ssrId),s=n.createEmbeddedViewImpl(e||{},o,a);return this.insertImpl(s,r,wo(this._hostTNode,a)),s}createComponent(n,e,i,r,o,a,s){let c=n&&!kI(n),l;if(c)l=e;else{let I=e||{};l=I.index,i=I.injector,r=I.projectableNodes,o=I.environmentInjector||I.ngModuleRef,a=I.directives,s=I.bindings}let u=c?n:new Fi(Tn(n)),f=i||this.parentInjector;if(!o&&u.ngModule==null){let A=(c?f:this.parentInjector).get(ye,null);A&&(o=A)}let m=Tn(u.componentType??{}),h=Pl(this._lContainer,m?.id??null),b=h?.firstChild??null,C=u.create(f,r,b,o,a,s);return this.insertImpl(C.hostView,l,wo(this._hostTNode,h)),C}insert(n,e){return this.insertImpl(n,e,!0)}insertImpl(n,e,i){let r=n._lView;if(Uv(r)){let s=this.indexOf(n);if(s!==-1)this.detach(s);else{let c=r[Ze],l=new t(c,c[xt],c[Ze]);l.detach(l.indexOf(n))}}let o=this._adjustIndex(e),a=this._lContainer;return ds(a,r,o,i),n.attachToViewContainerRef(),dm(Ym(a),o,n),n}move(n,e){return this.insert(n,e)}indexOf(n){let e=L_(this._lContainer);return e!==null?e.indexOf(n):-1}remove(n){let e=this._adjustIndex(n,-1),i=is(this._lContainer,e);i&&(Ua(Ym(this._lContainer),e),nd(i[U],i))}detach(n){let e=this._adjustIndex(n,-1),i=is(this._lContainer,e);return i&&Ua(Ym(this._lContainer),e)!=null?new Oi(i):null}_adjustIndex(n,e=0){return n??this.length+e}};function L_(t){return t[$a]}function Ym(t){return t[$a]||(t[$a]=[])}function Cw(t,n){let e,i=n[t.index];return pn(i)?e=i:(e=sw(i,n,null,t),n[t.index]=e,Kh(n,e)),lk(e,n,t,i),new Dh(e,t,n)}function ck(t,n){let e=t[Ce],i=e.createComment(""),r=Jt(n,t),o=e.parentNode(r);return Fl(e,o,i,e.nextSibling(r),!1),i}var lk=fk,dk=()=>!1;function uk(t,n,e){return dk(t,n,e)}function fk(t,n,e,i){if(t[Ri])return;let r;e.type&8?r=Xt(i):r=ck(n,e),t[Ri]=r}var xh=class t{queryList;matches=null;constructor(n){this.queryList=n}clone(){return new t(this.queryList)}setDirty(){this.queryList.setDirty()}},Eh=class t{queries;constructor(n=[]){this.queries=n}createEmbeddedView(n){let e=n.queries;if(e!==null){let i=n.contentQueries!==null?n.contentQueries[0]:e.length,r=[];for(let o=0;o<i;o++){let a=e.getByIndex(o),s=this.queries[a.indexInDeclarationView];r.push(s.clone())}return new t(r)}return null}insertView(n){this.dirtyQueriesWithMatches(n)}detachView(n){this.dirtyQueriesWithMatches(n)}finishViewCreation(n){this.dirtyQueriesWithMatches(n)}dirtyQueriesWithMatches(n){for(let e=0;e<this.queries.length;e++)lp(n,e).matches!==null&&this.queries[e].setDirty()}},Vl=class{flags;read;predicate;constructor(n,e,i=null){this.flags=e,this.read=i,typeof n=="string"?this.predicate=bk(n):this.predicate=n}},Ih=class t{queries;constructor(n=[]){this.queries=n}elementStart(n,e){for(let i=0;i<this.queries.length;i++)this.queries[i].elementStart(n,e)}elementEnd(n){for(let e=0;e<this.queries.length;e++)this.queries[e].elementEnd(n)}embeddedTView(n){let e=null;for(let i=0;i<this.length;i++){let r=e!==null?e.length:0,o=this.getByIndex(i).embeddedTView(n,r);o&&(o.indexInDeclarationView=i,e!==null?e.push(o):e=[o])}return e!==null?new t(e):null}template(n,e){for(let i=0;i<this.queries.length;i++)this.queries[i].template(n,e)}getByIndex(n){return this.queries[n]}get length(){return this.queries.length}track(n){this.queries.push(n)}},Mh=class t{metadata;matches=null;indexInDeclarationView=-1;crossesNgTemplate=!1;_declarationNodeIndex;_appliesToNextNode=!0;constructor(n,e=-1){this.metadata=n,this._declarationNodeIndex=e}elementStart(n,e){this.isApplyingToNode(e)&&this.matchTNode(n,e)}elementEnd(n){this._declarationNodeIndex===n.index&&(this._appliesToNextNode=!1)}template(n,e){this.elementStart(n,e)}embeddedTView(n,e){return this.isApplyingToNode(n)?(this.crossesNgTemplate=!0,this.addMatch(-n.index,e),new t(this.metadata)):null}isApplyingToNode(n){if(this._appliesToNextNode&&(this.metadata.flags&1)!==1){let e=this._declarationNodeIndex,i=n.parent;for(;i!==null&&i.type&8&&i.index!==e;)i=i.parent;return e===(i!==null?i.index:-1)}return this._appliesToNextNode}matchTNode(n,e){let i=this.metadata.predicate;if(Array.isArray(i))for(let r=0;r<i.length;r++){let o=i[r];this.matchTNodeWithReadOption(n,e,mk(e,o)),this.matchTNodeWithReadOption(n,e,Ml(e,n,o,!1,!1))}else i===bt?e.type&4&&this.matchTNodeWithReadOption(n,e,-1):this.matchTNodeWithReadOption(n,e,Ml(e,n,i,!1,!1))}matchTNodeWithReadOption(n,e,i){if(i!==null){let r=this.metadata.read;if(r!==null)if(r===F||r===St||r===bt&&e.type&4)this.addMatch(e.index,-2);else{let o=Ml(e,n,r,!1,!1);o!==null&&this.addMatch(e.index,o)}else this.addMatch(e.index,i)}}addMatch(n,e){this.matches===null?this.matches=[n,e]:this.matches.push(n,e)}};function mk(t,n){let e=t.localNames;if(e!==null){for(let i=0;i<e.length;i+=2)if(e[i]===n)return e[i+1]}return null}function hk(t,n){return t.type&11?xo(t,n):t.type&4?ad(t,n):null}function pk(t,n,e,i){return e===-1?hk(n,t):e===-2?gk(t,n,i):es(t,t[U],e,n)}function gk(t,n,e){if(e===F)return xo(n,t);if(e===bt)return ad(n,t);if(e===St)return Cw(n,t)}function Dw(t,n,e,i){let r=n[Nn].queries[i];if(r.matches===null){let o=t.data,a=e.matches,s=[];for(let c=0;a!==null&&c<a.length;c+=2){let l=a[c];if(l<0)s.push(null);else{let u=o[l];s.push(pk(n,u,a[c+1],e.metadata.read))}}r.matches=s}return r.matches}function Sh(t,n,e,i){let r=t.queries.getByIndex(e),o=r.matches;if(o!==null){let a=Dw(t,n,r,e);for(let s=0;s<o.length;s+=2){let c=o[s];if(c>0)i.push(a[s/2]);else{let l=o[s+1],u=n[-c];for(let f=Ne;f<u.length;f++){let m=u[f];m[Ti]===m[Ze]&&Sh(m[U],m,l,i)}if(u[vr]!==null){let f=u[vr];for(let m=0;m<f.length;m++){let h=f[m];Sh(h[U],h,l,i)}}}}}return i}function cp(t,n){return t[Nn].queries[n].queryList}function xw(t,n,e){let i=new ri((e&4)===4);return Wv(t,n,i,i.destroy),(n[Nn]??=new Eh).queries.push(new xh(i))-1}function Ew(t,n,e){let i=Me();return i.firstCreatePass&&(Mw(i,new Vl(t,n,e),-1),(n&2)===2&&(i.staticViewQueries=!0)),xw(i,Z(),n)}function Iw(t,n,e,i){let r=Me();if(r.firstCreatePass){let o=it();Mw(r,new Vl(n,e,i),o.index),vk(r,t),(e&2)===2&&(r.staticContentQueries=!0)}return xw(r,Z(),e)}function bk(t){return t.split(",").map(n=>n.trim())}function Mw(t,n,e){t.queries===null&&(t.queries=new Ih),t.queries.track(new Mh(n,e))}function vk(t,n){let e=t.contentQueries||(t.contentQueries=[]),i=e.length?e[e.length-1]:-1;n!==i&&e.push(t.queries.length-1,n)}function lp(t,n){return t.queries.getByIndex(n)}function Sw(t,n){let e=t[U],i=lp(e,n);return i.crossesNgTemplate?Sh(e,t,n,[]):Dw(e,t,i,n)}function kw(t,n,e){let i,r=xa(()=>{i._dirtyCounter();let o=_k(i,t);if(n&&o===void 0)throw new D(-951,!1);return o});return i=r[He],i._dirtyCounter=B(0),i._flatValue=void 0,r}function dp(t){return kw(!0,!1,t)}function up(t){return kw(!0,!0,t)}function Tw(t,n){let e=t[He];e._lView=Z(),e._queryIndex=n,e._queryList=cp(e._lView,n),e._queryList.onDirty(()=>e._dirtyCounter.update(i=>i+1))}function _k(t,n){let e=t._lView,i=t._queryIndex;if(e===void 0||i===void 0||e[Y]&4)return n?void 0:pt;let r=cp(e,i),o=Sw(e,i);return r.reset(o,cy),n?r.first:r._changesDetected||t._flatValue===void 0?t._flatValue=r.toArray():t._flatValue}var Bn=class{},cd=class{};var Hl=class extends Bn{ngModuleType;_parent;_bootstrapComponents=[];_r3Injector;instance;destroyCbs=[];componentFactoryResolver=new jl(this);constructor(n,e,i,r=!0){super(),this.ngModuleType=n,this._parent=e;let o=am(n);this._bootstrapComponents=Ay(o.bootstrap),this._r3Injector=Hm(n,e,[{provide:Bn,useValue:this},{provide:us,useValue:this.componentFactoryResolver},...i],Va(n),new Set(["environment"])),r&&this.resolveInjectorInitializers()}resolveInjectorInitializers(){this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(this.ngModuleType)}get injector(){return this._r3Injector}destroy(){let n=this._r3Injector;!n.destroyed&&n.destroy(),this.destroyCbs.forEach(e=>e()),this.destroyCbs=null}onDestroy(n){this.destroyCbs.push(n)}},Ul=class extends cd{moduleType;constructor(n){super(),this.moduleType=n}create(n){return new Hl(this.moduleType,n,[])}};var rs=class extends Bn{injector;componentFactoryResolver=new jl(this);instance=null;constructor(n){super();let e=new fr([...n.providers,{provide:Bn,useValue:this},{provide:us,useValue:this.componentFactoryResolver}],n.parent||co(),n.debugName,new Set(["environment"]));this.injector=e,n.runEnvironmentInitializers&&e.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(n){this.injector.onDestroy(n)}};function So(t,n,e=null){return new rs({providers:t,parent:n,debugName:e,runEnvironmentInitializers:!0}).injector}var yk=(()=>{class t{_injector;cachedInjectors=new Map;constructor(e){this._injector=e}getOrCreateStandaloneInjector(e){if(!e.standalone)return null;if(!this.cachedInjectors.has(e)){let i=mm(!1,e.type),r=i.length>0?So([i],this._injector,""):null;this.cachedInjectors.set(e,r)}return this.cachedInjectors.get(e)}ngOnDestroy(){try{for(let e of this.cachedInjectors.values())e!==null&&e.destroy()}finally{this.cachedInjectors.clear()}}static \u0275prov=p({token:t,providedIn:"environment",factory:()=>new t(T(ye))})}return t})();function E(t){return as(()=>{let n=Aw(t),e=G(v({},n),{decls:t.decls,vars:t.vars,template:t.template,consts:t.consts||null,ngContentSelectors:t.ngContentSelectors,onPush:t.changeDetection===Vh.OnPush,directiveDefs:null,pipeDefs:null,dependencies:n.standalone&&t.dependencies||null,getStandaloneInjector:n.standalone?r=>r.get(yk).getOrCreateStandaloneInjector(e):null,getExternalStyles:null,signals:t.signals??!1,data:t.data||{},encapsulation:t.encapsulation||vn.Emulated,styles:t.styles||pt,_:null,schemas:t.schemas||null,tView:null,id:""});n.standalone&&Hn("NgStandalone"),Rw(e);let i=t.dependencies;return e.directiveDefs=j_(i,wk),e.pipeDefs=j_(i,Ev),e.id=xk(e),e})}function wk(t){return Tn(t)||sm(t)}function V(t){return as(()=>({type:t.type,bootstrap:t.bootstrap||pt,declarations:t.declarations||pt,imports:t.imports||pt,exports:t.exports||pt,transitiveCompileScopes:null,schemas:t.schemas||null,id:t.id||null}))}function Ck(t,n){if(t==null)return Si;let e={};for(let i in t)if(t.hasOwnProperty(i)){let r=t[i],o,a,s,c;Array.isArray(r)?(s=r[0],o=r[1],a=r[2]??o,c=r[3]||null):(o=r,a=r,s=Jl.None,c=null),e[o]=[i,s,c],n[o]=a}return e}function Dk(t){if(t==null)return Si;let n={};for(let e in t)t.hasOwnProperty(e)&&(n[t[e]]=e);return n}function S(t){return as(()=>{let n=Aw(t);return Rw(n),n})}function fp(t){return{type:t.type,name:t.name,factory:null,pure:t.pure!==!1,standalone:t.standalone??!0,onDestroy:t.type.prototype.ngOnDestroy||null}}function Aw(t){let n={};return{type:t.type,providersResolver:null,viewProvidersResolver:null,factory:null,hostBindings:t.hostBindings||null,hostVars:t.hostVars||0,hostAttrs:t.hostAttrs||null,contentQueries:t.contentQueries||null,declaredInputs:n,inputConfig:t.inputs||Si,exportAs:t.exportAs||null,standalone:t.standalone??!0,signals:t.signals===!0,selectors:t.selectors||pt,viewQuery:t.viewQuery||null,features:t.features||null,setInput:null,resolveHostDirectives:null,hostDirectives:null,controlDef:null,inputs:Ck(t.inputs,n),outputs:Dk(t.outputs),debugInfo:null}}function Rw(t){t.features?.forEach(n=>n(t))}function j_(t,n){return t?()=>{let e=typeof t=="function"?t():t,i=[];for(let r of e){let o=n(r);o!==null&&i.push(o)}return i}:null}function xk(t){let n=0,e=typeof t.consts=="function"?"":t.consts,i=[t.selectors,t.ngContentSelectors,t.hostVars,t.hostAttrs,e,t.vars,t.decls,t.encapsulation,t.standalone,t.signals,t.exportAs,JSON.stringify(t.inputs),JSON.stringify(t.outputs),Object.getOwnPropertyNames(t.type.prototype),!!t.contentQueries,!!t.viewQuery];for(let o of i.join("|"))n=Math.imul(31,n)+o.charCodeAt(0)<<0;return n+=2147483648,"c"+n}function Ek(t){return Object.getPrototypeOf(t.prototype).constructor}function me(t){let n=Ek(t.type),e=!0,i=[t];for(;n;){let r;if(Fn(t))r=n.\u0275cmp||n.\u0275dir;else{if(n.\u0275cmp)throw new D(903,!1);r=n.\u0275dir}if(r){if(e){i.push(r);let a=t;a.inputs=Km(t.inputs),a.declaredInputs=Km(t.declaredInputs),a.outputs=Km(t.outputs);let s=r.hostBindings;s&&Tk(t,s);let c=r.viewQuery,l=r.contentQueries;if(c&&Sk(t,c),l&&kk(t,l),Ik(t,r),xv(t.outputs,r.outputs),Fn(r)&&r.data.animation){let u=t.data;u.animation=(u.animation||[]).concat(r.data.animation)}}let o=r.features;if(o)for(let a=0;a<o.length;a++){let s=o[a];s&&s.ngInherit&&s(t),s===me&&(e=!1)}}n=Object.getPrototypeOf(n)}Mk(i)}function Ik(t,n){for(let e in n.inputs){if(!n.inputs.hasOwnProperty(e)||t.inputs.hasOwnProperty(e))continue;let i=n.inputs[e];i!==void 0&&(t.inputs[e]=i,t.declaredInputs[e]=n.declaredInputs[e])}}function Mk(t){let n=0,e=null;for(let i=t.length-1;i>=0;i--){let r=t[i];r.hostVars=n+=r.hostVars,r.hostAttrs=_o(r.hostAttrs,e=_o(e,r.hostAttrs))}}function Km(t){return t===Si?{}:t===pt?[]:t}function Sk(t,n){let e=t.viewQuery;e?t.viewQuery=(i,r)=>{n(i,r),e(i,r)}:t.viewQuery=n}function kk(t,n){let e=t.contentQueries;e?t.contentQueries=(i,r,o)=>{n(i,r,o),e(i,r,o)}:t.contentQueries=n}function Tk(t,n){let e=t.hostBindings;e?t.hostBindings=(i,r)=>{n(i,r),e(i,r)}:t.hostBindings=n}function Nw(t,n,e,i,r,o,a,s){if(e.firstCreatePass){t.mergedAttrs=_o(t.mergedAttrs,t.attrs);let u=t.tView=Qh(2,t,r,o,a,e.directiveRegistry,e.pipeRegistry,null,e.schemas,e.consts,null);e.queries!==null&&(e.queries.template(e,t),u.queries=e.queries.embeddedTView(t))}s&&(t.flags|=s),mo(t,!1);let c=Rk(e,n,t,i);vl()&&np(e,n,c,t),yo(c,n);let l=sw(c,n,c,t);n[i+Ae]=l,Kh(n,l),uk(l,t,n)}function Ak(t,n,e,i,r,o,a,s,c,l,u){let f=e+Ae,m;return n.firstCreatePass?(m=Mo(n,f,4,a||null,s||null),Tm()&&hw(n,t,m,zt(n.consts,l),Zy),Y_(n,m)):m=n.data[f],Nw(m,t,n,e,i,r,o,c),Wa(m)&&rp(n,t,m),l!=null&&rd(t,m,u),m}function Co(t,n,e,i,r,o,a,s,c,l,u){let f=e+Ae,m;if(n.firstCreatePass){if(m=Mo(n,f,4,a||null,s||null),l!=null){let h=zt(n.consts,l);m.localNames=[];for(let b=0;b<h.length;b+=2)m.localNames.push(h[b],-1)}}else m=n.data[f];return Nw(m,t,n,e,i,r,o,c),l!=null&&rd(t,m,u),m}function Ot(t,n,e,i,r,o,a,s){let c=Z(),l=Me(),u=zt(l.consts,o);return Ak(c,l,t,n,e,i,r,u,void 0,a,s),Ot}function ld(t,n,e,i,r,o,a,s){let c=Z(),l=Me(),u=zt(l.consts,o);return Co(c,l,t,n,e,i,r,u,void 0,a,s),ld}var Rk=Nk;function Nk(t,n,e,i){return _l(!0),n[Ce].createComment("")}var dd=(()=>{class t{log(e){console.log(e)}warn(e){console.warn(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"platform"})}return t})();function Pi(t){return typeof t=="function"&&t[He]!==void 0}function mp(t){return Pi(t)&&typeof t.set=="function"}var hp=new g("");function si(t){return!!t&&typeof t.then=="function"}function ud(t){return!!t&&typeof t.subscribe=="function"}var pp=new g("");function fd(t){return An([{provide:pp,multi:!0,useValue:t}])}var gp=(()=>{class t{resolve;reject;initialized=!1;done=!1;donePromise=new Promise((e,i)=>{this.resolve=e,this.reject=i});appInits=d(pp,{optional:!0})??[];injector=d(q);constructor(){}runInitializers(){if(this.initialized)return;let e=[];for(let r of this.appInits){let o=Qe(this.injector,r);if(si(o))e.push(o);else if(ud(o)){let a=new Promise((s,c)=>{o.subscribe({complete:s,error:c})});e.push(a)}}let i=()=>{this.done=!0,this.resolve()};Promise.all(e).then(()=>{i()}).catch(r=>{this.reject(r)}),e.length===0&&i(),this.initialized=!0}static \u0275fac=function(i){return new(i||t)};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),fs=new g("");function Ow(){xf(()=>{let t="";throw new D(600,t)})}function Fw(t){return t.isBoundToModule}var Ok=10;var Gt=(()=>{class t{_runningTick=!1;_destroyed=!1;_destroyListeners=[];_views=[];internalErrorHandler=d($t);afterRenderManager=d(td);zonelessEnabled=d(Ya);rootEffectScheduler=d(wl);dirtyFlags=0;tracingSnapshot=null;allTestViews=new Set;autoDetectTestViews=new Set;includeAllTestViews=!1;afterTick=new x;get allViews(){return[...(this.includeAllTestViews?this.allTestViews:this.autoDetectTestViews).keys(),...this._views]}get destroyed(){return this._destroyed}componentTypes=[];components=[];internalPendingTask=d(ii);get isStable(){return this.internalPendingTask.hasPendingTasksObservable.pipe(X(e=>!e))}constructor(){d(_n,{optional:!0})}whenStable(){let e;return new Promise(i=>{e=this.isStable.subscribe({next:r=>{r&&i()}})}).finally(()=>{e.unsubscribe()})}_injector=d(ye);_rendererFactory=null;get injector(){return this._injector}bootstrap(e,i){return this.bootstrapImpl(e,i)}bootstrapImpl(e,i,r=q.NULL){return this._injector.get(k).run(()=>{we(fe.BootstrapComponentStart);let a=e instanceof sd;if(!this._injector.get(gp).done){let b="";throw new D(405,b)}let c;a?c=e:c=this._injector.get(us).resolveComponentFactory(e),this.componentTypes.push(c.componentType);let l=Fw(c)?void 0:this._injector.get(Bn),u=i||c.selector,f=c.create(r,[],u,l),m=f.location.nativeElement,h=f.injector.get(hp,null);return h?.registerApplication(m),f.onDestroy(()=>{this.detachView(f.hostView),Ja(this.components,f),h?.unregisterApplication(m)}),this._loadComponent(f),we(fe.BootstrapComponentEnd,f),f})}tick(){this.zonelessEnabled||(this.dirtyFlags|=1),this._tick()}_tick(){we(fe.ChangeDetectionStart),this.tracingSnapshot!==null?this.tracingSnapshot.run(ed.CHANGE_DETECTION,this.tickImpl):this.tickImpl()}tickImpl=()=>{if(this._runningTick)throw we(fe.ChangeDetectionEnd),new D(101,!1);let e=L(null);try{this._runningTick=!0,this.synchronize()}finally{this._runningTick=!1,this.tracingSnapshot?.dispose(),this.tracingSnapshot=null,L(e),this.afterTick.next(),we(fe.ChangeDetectionEnd)}};synchronize(){this._rendererFactory===null&&!this._injector.destroyed&&(this._rendererFactory=this._injector.get(ze,null,{optional:!0}));let e=0;for(;this.dirtyFlags!==0&&e++<Ok;){we(fe.ChangeDetectionSyncStart);try{this.synchronizeOnce()}finally{we(fe.ChangeDetectionSyncEnd)}}}synchronizeOnce(){this.dirtyFlags&16&&(this.dirtyFlags&=-17,this.rootEffectScheduler.flush());let e=!1;if(this.dirtyFlags&7){let i=!!(this.dirtyFlags&1);this.dirtyFlags&=-8,this.dirtyFlags|=8;for(let{_lView:r}of this.allViews){if(!i&&!Ga(r))continue;let o=i&&!this.zonelessEnabled?0:1;iw(r,o),e=!0}if(this.dirtyFlags&=-5,this.syncDirtyFlagsWithViews(),this.dirtyFlags&23)return}e||(this._rendererFactory?.begin?.(),this._rendererFactory?.end?.()),this.dirtyFlags&8&&(this.dirtyFlags&=-9,this.afterRenderManager.execute()),this.syncDirtyFlagsWithViews()}syncDirtyFlagsWithViews(){if(this.allViews.some(({_lView:e})=>Ga(e))){this.dirtyFlags|=2;return}else this.dirtyFlags&=-8}attachView(e){let i=e;this._views.push(i),i.attachToAppRef(this)}detachView(e){let i=e;Ja(this._views,i),i.detachFromAppRef()}_loadComponent(e){this.attachView(e.hostView);try{this.tick()}catch(r){this.internalErrorHandler(r)}this.components.push(e),this._injector.get(fs,[]).forEach(r=>r(e))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(e=>e()),this._views.slice().forEach(e=>e.destroy())}finally{this._destroyed=!0,this._views=[],this._destroyListeners=[]}}onDestroy(e){return this._destroyListeners.push(e),()=>Ja(this._destroyListeners,e)}destroy(){if(this._destroyed)throw new D(406,!1);let e=this._injector;e.destroy&&!e.destroyed&&e.destroy()}get viewCount(){return this._views.length}static \u0275fac=function(i){return new(i||t)};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Ja(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}function md(t,n){let e=Z(),i=Pn();if(tn(e,i,n)){let r=Me(),o=ho();if(od(o,r,e,t,n))On(o)&&qy(e,o.index);else{let s=Jt(o,e);Qy(e[Ce],s,null,o.value,t,n,null)}}return md}function oe(t,n,e,i){let r=Z(),o=Pn();if(tn(r,o,n)){let a=Me(),s=ho();fS(s,r,t,n,e,i)}return oe}var kh=class{destroy(n){}updateValue(n,e){}swap(n,e){let i=Math.min(n,e),r=Math.max(n,e),o=this.detach(r);if(r-i>1){let a=this.detach(i);this.attach(i,o),this.attach(r,a)}else this.attach(i,o)}move(n,e){this.attach(e,this.detach(n))}};function Xm(t,n,e,i,r){return t===e&&Object.is(n,i)?1:Object.is(r(t,n),r(e,i))?-1:0}function Fk(t,n,e,i){let r,o,a=0,s=t.length-1,c=void 0;if(Array.isArray(n)){L(i);let l=n.length-1;for(L(null);a<=s&&a<=l;){let u=t.at(a),f=n[a],m=Xm(a,u,a,f,e);if(m!==0){m<0&&t.updateValue(a,f),a++;continue}let h=t.at(s),b=n[l],C=Xm(s,h,l,b,e);if(C!==0){C<0&&t.updateValue(s,b),s--,l--;continue}let I=e(a,u),A=e(s,h),be=e(a,f);if(Object.is(be,A)){let Je=e(l,b);Object.is(Je,I)?(t.swap(a,s),t.updateValue(s,b),l--,s--):t.move(s,a),t.updateValue(a,f),a++;continue}if(r??=new zl,o??=V_(t,a,s,e),Th(t,r,a,be))t.updateValue(a,f),a++,s++;else if(o.has(be))r.set(I,t.detach(a)),s--;else{let Je=t.create(a,n[a]);t.attach(a,Je),a++,s++}}for(;a<=l;)B_(t,r,e,a,n[a]),a++}else if(n!=null){L(i);let l=n[Symbol.iterator]();L(null);let u=l.next();for(;!u.done&&a<=s;){let f=t.at(a),m=u.value,h=Xm(a,f,a,m,e);if(h!==0)h<0&&t.updateValue(a,m),a++,u=l.next();else{r??=new zl,o??=V_(t,a,s,e);let b=e(a,m);if(Th(t,r,a,b))t.updateValue(a,m),a++,s++,u=l.next();else if(!o.has(b))t.attach(a,t.create(a,m)),a++,s++,u=l.next();else{let C=e(a,f);r.set(C,t.detach(a)),s--}}}for(;!u.done;)B_(t,r,e,t.length,u.value),u=l.next()}for(;a<=s;)t.destroy(t.detach(s--));r?.forEach(l=>{t.destroy(l)})}function Th(t,n,e,i){return n!==void 0&&n.has(i)?(t.attach(e,n.get(i)),n.delete(i),!0):!1}function B_(t,n,e,i,r){if(Th(t,n,i,e(i,r)))t.updateValue(i,r);else{let o=t.create(i,r);t.attach(i,o)}}function V_(t,n,e,i){let r=new Set;for(let o=n;o<=e;o++)r.add(i(o,t.at(o)));return r}var zl=class{kvMap=new Map;_vMap=void 0;has(n){return this.kvMap.has(n)}delete(n){if(!this.has(n))return!1;let e=this.kvMap.get(n);return this._vMap!==void 0&&this._vMap.has(e)?(this.kvMap.set(n,this._vMap.get(e)),this._vMap.delete(e)):this.kvMap.delete(n),!0}get(n){return this.kvMap.get(n)}set(n,e){if(this.kvMap.has(n)){let i=this.kvMap.get(n);this._vMap===void 0&&(this._vMap=new Map);let r=this._vMap;for(;r.has(i);)i=r.get(i);r.set(i,e)}else this.kvMap.set(n,e)}forEach(n){for(let[e,i]of this.kvMap)if(n(i,e),this._vMap!==void 0){let r=this._vMap;for(;r.has(i);)i=r.get(i),n(i,e)}}};function he(t,n,e,i,r,o,a,s){Hn("NgControlFlow");let c=Z(),l=Me(),u=zt(l.consts,o);return Co(c,l,t,n,e,i,r,u,256,a,s),bp}function bp(t,n,e,i,r,o,a,s){Hn("NgControlFlow");let c=Z(),l=Me(),u=zt(l.consts,o);return Co(c,l,t,n,e,i,r,u,512,a,s),bp}function pe(t,n){Hn("NgControlFlow");let e=Z(),i=Pn(),r=e[i]!==Wt?e[i]:-1,o=r!==-1?$l(e,Ae+r):void 0,a=0;if(tn(e,i,t)){let s=L(null);try{if(o!==void 0&&lw(o,a),t!==-1){let c=Ae+t,l=$l(e,c),u=Oh(e[U],c),f=uw(l,u,e),m=ls(e,u,n,{dehydratedView:f});ds(l,m,a,wo(u,f))}}finally{L(s)}}else if(o!==void 0){let s=cw(o,a);s!==void 0&&(s[Be]=n)}}var Ah=class{lContainer;$implicit;$index;constructor(n,e,i){this.lContainer=n,this.$implicit=e,this.$index=i}get $count(){return this.lContainer.length-Ne}};function hd(t,n){return n}var Rh=class{hasEmptyBlock;trackByFn;liveCollection;constructor(n,e,i){this.hasEmptyBlock=n,this.trackByFn=e,this.liveCollection=i}};function Li(t,n,e,i,r,o,a,s,c,l,u,f,m){Hn("NgControlFlow");let h=Z(),b=Me(),C=c!==void 0,I=Z(),A=s?a.bind(I[Et][Be]):a,be=new Rh(C,A);I[Ae+t]=be,Co(h,b,t+1,n,e,i,r,zt(b.consts,o),256),C&&Co(h,b,t+2,c,l,u,f,zt(b.consts,m),512)}var Nh=class extends kh{lContainer;hostLView;templateTNode;operationsCounter=void 0;needsIndexUpdate=!1;constructor(n,e,i){super(),this.lContainer=n,this.hostLView=e,this.templateTNode=i}get length(){return this.lContainer.length-Ne}at(n){return this.getLView(n)[Be].$implicit}attach(n,e){let i=e[hr];this.needsIndexUpdate||=n!==this.length,ds(this.lContainer,e,n,wo(this.templateTNode,i)),Pk(this.lContainer,n)}detach(n){return this.needsIndexUpdate||=n!==this.length-1,Lk(this.lContainer,n),jk(this.lContainer,n)}create(n,e){let i=Pl(this.lContainer,this.templateTNode.tView.ssrId);return ls(this.hostLView,this.templateTNode,new Ah(this.lContainer,e,n),{dehydratedView:i})}destroy(n){nd(n[U],n)}updateValue(n,e){this.getLView(n)[Be].$implicit=e}reset(){this.needsIndexUpdate=!1}updateIndexes(){if(this.needsIndexUpdate)for(let n=0;n<this.length;n++)this.getLView(n)[Be].$index=n}getLView(n){return Bk(this.lContainer,n)}};function ji(t){let n=L(null),e=ni();try{let i=Z(),r=i[U],o=i[e],a=e+1,s=$l(i,a);if(o.liveCollection===void 0){let l=Oh(r,a);o.liveCollection=new Nh(s,i,l)}else o.liveCollection.reset();let c=o.liveCollection;if(Fk(c,t,o.trackByFn,n),c.updateIndexes(),o.hasEmptyBlock){let l=Pn(),u=c.length===0;if(tn(i,l,u)){let f=e+2,m=$l(i,f);if(u){let h=Oh(r,f),b=uw(m,h,i),C=ls(i,h,void 0,{dehydratedView:b});ds(m,C,0,wo(h,b))}else r.firstUpdatePass&&FS(m),lw(m,0)}}}finally{L(n)}}function $l(t,n){return t[n]}function Pk(t,n){if(t.length<=Ne)return;let e=Ne+n,i=t[e],r=i?i[Ai]:void 0;if(i&&r&&r.detachedLeaveAnimationFns&&r.detachedLeaveAnimationFns.length>0){let o=i[Jn];WM(o,r),Dr.delete(i[ei]),r.detachedLeaveAnimationFns=void 0}}function Lk(t,n){if(t.length<=Ne)return;let e=Ne+n,i=t[e],r=i?i[Ai]:void 0;r&&r.leave&&r.leave.size>0&&(r.detachedLeaveAnimationFns=[])}function jk(t,n){return is(t,n)}function Bk(t,n){return cw(t,n)}function Oh(t,n){return ul(t,n)}function ne(t,n,e){let i=Z(),r=Pn();if(tn(i,r,n)){let o=Me(),a=ho();Wy(a,i,t,n,i[Ce],e)}return ne}function Fh(t,n,e,i,r){od(n,t,e,r?"class":"style",i)}function _(t,n,e,i){let r=Z(),o=r[U],a=t+Ae,s=o.firstCreatePass?gw(a,r,2,n,Zy,Tm(),e,i):o.data[a];if(On(s)){let c=r[Rn].tracingService;if(c&&c.componentCreate){let l=o.data[s.directiveStart+s.componentOffset];return c.componentCreate(yw(l),()=>(H_(t,n,r,s,i),_))}}return H_(t,n,r,s,i),_}function H_(t,n,e,i,r){if(Yy(i,e,t,n,Pw),Wa(i)){let o=e[U];rp(o,e,i),yy(o,i,e)}r!=null&&rd(e,i)}function y(){let t=Me(),n=it(),e=Ky(n);return t.firstCreatePass&&bw(t,e),Rm(e)&&Nm(),km(),e.classesWithoutHost!=null&&FI(e)&&Fh(t,e,Z(),e.classesWithoutHost,!0),e.stylesWithoutHost!=null&&PI(e)&&Fh(t,e,Z(),e.stylesWithoutHost,!1),y}function le(t,n,e,i){return _(t,n,e,i),y(),le}function Ft(t,n,e,i){let r=Z(),o=r[U],a=t+Ae,s=o.firstCreatePass?QS(a,o,2,n,e,i):o.data[a];return Yy(s,r,t,n,Pw),i!=null&&rd(r,s),Ft}function Pt(){let t=it(),n=Ky(t);return Rm(n)&&Nm(),km(),Pt}function nn(t,n,e,i){return Ft(t,n,e,i),Pt(),nn}var Pw=(t,n,e,i,r)=>(_l(!0),My(n[Ce],i,a_()));function rn(){return Z()}function yn(t,n,e){let i=Z(),r=Pn();if(tn(i,r,n)){let o=Me(),a=ho();Gy(a,i,t,n,i[Ce],e)}return yn}var ms="en-US";var Vk=ms;function Lw(t){typeof t=="string"&&(Vk=t.toLowerCase().replace(/_/g,"-"))}function H(t,n,e){let i=Z(),r=Me(),o=it();return jw(r,i,i[Ce],o,t,n,e),H}function hs(t,n,e){let i=Z(),r=Me(),o=it();return(o.type&3||e)&&vw(o,r,i,e,i[Ce],t,n,kl(o,i,n)),hs}function jw(t,n,e,i,r,o,a){let s=!0,c=null;if((i.type&3||a)&&(c??=kl(i,n,o),vw(i,t,n,a,e,r,o,c)&&(s=!1)),s){let l=i.outputs?.[r],u=i.hostDirectiveOutputs?.[r];if(u&&u.length)for(let f=0;f<u.length;f+=2){let m=u[f],h=u[f+1];c??=kl(i,n,o),F_(i,n,m,h,r,c)}if(l&&l.length)for(let f of l)c??=kl(i,n,o),F_(i,n,f,r,r,c)}}function ce(t=1){return o_(t)}function Hk(t,n){let e=null,i=TM(t);for(let r=0;r<n.length;r++){let o=n[r];if(o==="*"){e=r;continue}if(i===null?Ny(t,o,!0):NM(i,o))return r}return e}function xe(t){let n=Z()[Et][xt];if(!n.projection){let e=t?t.length:1,i=n.projection=Av(e,null),r=i.slice(),o=n.child;for(;o!==null;){if(o.type!==128){let a=t?Hk(o,t):0;a!==null&&(r[a]?r[a].projectionNext=o:i[a]=o,r[a]=o)}o=o.next}}}function K(t,n=0,e,i,r,o){let a=Z(),s=Me(),c=i?t+1:null;c!==null&&Co(a,s,c,i,r,o,null,e);let l=Mo(s,Ae+t,16,null,e||null);l.projection===null&&(l.projection=n),Pm();let f=!a[hr]||Am();a[Et][xt].projection[l.projection]===null&&c!==null?Uk(a,s,c):f&&!Yl(l)&&nS(s,a,l)}function Uk(t,n,e){let i=Ae+e,r=n.data[i],o=t[i],a=Pl(o,r.tView.ssrId),s=ls(t,r,void 0,{dehydratedView:a});ds(o,s,0,wo(r,a))}function kt(t,n,e,i){return Iw(t,n,e,i),kt}function rt(t,n,e){return Ew(t,n,e),rt}function z(t){let n=Z(),e=Me(),i=pl();qa(i+1);let r=lp(e,i);if(t.dirty&&Hv(n)===((r.metadata.flags&2)===2)){if(r.matches===null)t.reset([]);else{let o=Sw(n,i);t.reset(o,cy),t.notifyOnChanges()}return!0}return!1}function $(){return cp(Z(),pl())}function pd(t,n,e,i,r){return Tw(n,Iw(t,e,i,r)),pd}function Un(t,n,e,i){return Tw(t,Ew(n,e,i)),Un}function zn(t=1){qa(pl()+t)}function on(t){let n=Qv();return Cm(n,Ae+t)}function xl(t,n){return t<<17|n<<2}function xr(t){return t>>17&32767}function zk(t){return(t&2)==2}function $k(t,n){return t&131071|n<<17}function Ph(t){return t|2}function Do(t){return(t&131068)>>2}function Jm(t,n){return t&-131069|n<<2}function Wk(t){return(t&1)===1}function Lh(t){return t|1}function Gk(t,n,e,i,r,o){let a=o?n.classBindings:n.styleBindings,s=xr(a),c=Do(a);t[i]=e;let l=!1,u;if(Array.isArray(e)){let f=e;u=f[1],(u===null||so(f,u)>0)&&(l=!0)}else u=e;if(r)if(c!==0){let m=xr(t[s+1]);t[i+1]=xl(m,s),m!==0&&(t[m+1]=Jm(t[m+1],i)),t[s+1]=$k(t[s+1],i)}else t[i+1]=xl(s,0),s!==0&&(t[s+1]=Jm(t[s+1],i)),s=i;else t[i+1]=xl(c,0),s===0?s=i:t[c+1]=Jm(t[c+1],i),c=i;l&&(t[i+1]=Ph(t[i+1])),U_(t,u,i,!0),U_(t,u,i,!1),qk(n,u,t,i,o),a=xl(s,c),o?n.classBindings=a:n.styleBindings=a}function qk(t,n,e,i,r){let o=r?t.residualClasses:t.residualStyles;o!=null&&typeof n=="string"&&so(o,n)>=0&&(e[i+1]=Lh(e[i+1]))}function U_(t,n,e,i){let r=t[e+1],o=n===null,a=i?xr(r):Do(r),s=!1;for(;a!==0&&(s===!1||o);){let c=t[a],l=t[a+1];Zk(c,n)&&(s=!0,t[a+1]=i?Lh(l):Ph(l)),a=i?xr(l):Do(l)}s&&(t[e+1]=i?Ph(r):Lh(r))}function Zk(t,n){return t===null||n==null||(Array.isArray(t)?t[1]:t)===n?!0:Array.isArray(t)&&typeof n=="string"?so(t,n)>=0:!1}var bn={textEnd:0,key:0,keyEnd:0,value:0,valueEnd:0};function Qk(t){return t.substring(bn.key,bn.keyEnd)}function Yk(t){return Kk(t),Bw(t,Vw(t,0,bn.textEnd))}function Bw(t,n){let e=bn.textEnd;return e===n?-1:(n=bn.keyEnd=Xk(t,bn.key=n,e),Vw(t,n,e))}function Kk(t){bn.key=0,bn.keyEnd=0,bn.value=0,bn.valueEnd=0,bn.textEnd=t.length}function Vw(t,n,e){for(;n<e&&t.charCodeAt(n)<=32;)n++;return n}function Xk(t,n,e){for(;n<e&&t.charCodeAt(n)>32;)n++;return n}function ko(t,n,e){return Hw(t,n,e,!1),ko}function W(t,n){return Hw(t,n,null,!0),W}function qt(t){eT(aT,Jk,t,!0)}function Jk(t,n){for(let e=Yk(n);e>=0;e=Bw(n,e))cl(t,Qk(n),!0)}function Hw(t,n,e,i){let r=Z(),o=Me(),a=jm(2);if(o.firstUpdatePass&&zw(o,t,a,i),n!==Wt&&tn(r,a,n)){let s=o.data[ni()];$w(o,s,r,r[Ce],t,r[a+1]=cT(n,e),i,a)}}function eT(t,n,e,i){let r=Me(),o=jm(2);r.firstUpdatePass&&zw(r,null,o,i);let a=Z();if(e!==Wt&&tn(a,o,e)){let s=r.data[ni()];if(Ww(s,i)&&!Uw(r,o)){let c=i?s.classesWithoutHost:s.stylesWithoutHost;c!==null&&(e=nl(c,e||"")),Fh(r,s,a,e,i)}else sT(r,s,a,a[Ce],a[o+1],a[o+1]=oT(t,n,e),i,o)}}function Uw(t,n){return n>=t.expandoStartIndex}function zw(t,n,e,i){let r=t.data;if(r[e+1]===null){let o=r[ni()],a=Uw(t,e);Ww(o,i)&&n===null&&!a&&(n=!1),n=tT(r,o,n,i),Gk(r,o,n,e,a,i)}}function tT(t,n,e,i){let r=t_(t),o=i?n.residualClasses:n.residualStyles;if(r===null)(i?n.classBindings:n.styleBindings)===0&&(e=eh(null,t,n,e,i),e=os(e,n.attrs,i),o=null);else{let a=n.directiveStylingLast;if(a===-1||t[a]!==r)if(e=eh(r,t,n,e,i),o===null){let c=nT(t,n,i);c!==void 0&&Array.isArray(c)&&(c=eh(null,t,n,c[1],i),c=os(c,n.attrs,i),iT(t,n,i,c))}else o=rT(t,n,i)}return o!==void 0&&(i?n.residualClasses=o:n.residualStyles=o),e}function nT(t,n,e){let i=e?n.classBindings:n.styleBindings;if(Do(i)!==0)return t[xr(i)]}function iT(t,n,e,i){let r=e?n.classBindings:n.styleBindings;t[xr(r)]=i}function rT(t,n,e){let i,r=n.directiveEnd;for(let o=1+n.directiveStylingLast;o<r;o++){let a=t[o].hostAttrs;i=os(i,a,e)}return os(i,n.attrs,e)}function eh(t,n,e,i,r){let o=null,a=e.directiveEnd,s=e.directiveStylingLast;for(s===-1?s=e.directiveStart:s++;s<a&&(o=n[s],i=os(i,o.hostAttrs,r),o!==t);)s++;return t!==null&&(e.directiveStylingLast=s),i}function os(t,n,e){let i=e?1:2,r=-1;if(n!==null)for(let o=0;o<n.length;o++){let a=n[o];typeof a=="number"?r=a:r===i&&(Array.isArray(t)||(t=t===void 0?[]:["",t]),cl(t,a,e?!0:n[++o]))}return t===void 0?null:t}function oT(t,n,e){if(e==null||e==="")return pt;let i=[],r=Vn(e);if(Array.isArray(r))for(let o=0;o<r.length;o++)t(i,r[o],!0);else if(r instanceof Set)for(let o of r)t(i,o,!0);else if(typeof r=="object")for(let o in r)r.hasOwnProperty(o)&&t(i,o,r[o]);else typeof r=="string"&&n(i,r);return i}function aT(t,n,e){let i=String(n);i!==""&&!i.includes(" ")&&cl(t,i,e)}function sT(t,n,e,i,r,o,a,s){r===Wt&&(r=pt);let c=0,l=0,u=0<r.length?r[0]:null,f=0<o.length?o[0]:null;for(;u!==null||f!==null;){let m=c<r.length?r[c+1]:void 0,h=l<o.length?o[l+1]:void 0,b=null,C;u===f?(c+=2,l+=2,m!==h&&(b=f,C=h)):f===null||u!==null&&u<f?(c+=2,b=u):(l+=2,b=f,C=h),b!==null&&$w(t,n,e,i,b,C,a,s),u=c<r.length?r[c]:null,f=l<o.length?o[l]:null}}function $w(t,n,e,i,r,o,a,s){if(!(n.type&3))return;let c=t.data,l=c[s+1],u=Wk(l)?z_(c,n,e,r,Do(l),a):void 0;if(!Wl(u)){Wl(o)||zk(l)&&(o=z_(c,null,e,r,s,a));let f=wm(ni(),e);rS(i,a,f,r,o)}}function z_(t,n,e,i,r,o){let a=n===null,s;for(;r>0;){let c=t[r],l=Array.isArray(c),u=l?c[1]:c,f=u===null,m=e[r+1];m===Wt&&(m=f?pt:void 0);let h=f?ll(m,i):u===i?m:void 0;if(l&&!Wl(h)&&(h=ll(c,i)),Wl(h)&&(s=h,a))return s;let b=t[r+1];r=a?xr(b):Do(b)}if(n!==null){let c=o?n.residualClasses:n.residualStyles;c!=null&&(s=ll(c,i))}return s}function Wl(t){return t!==void 0}function cT(t,n){return t==null||t===""||(typeof n=="string"?t=t+n:typeof t=="object"&&(t=Va(Vn(t)))),t}function Ww(t,n){return(t.flags&(n?8:16))!==0}function N(t,n=""){let e=Z(),i=Me(),r=t+Ae,o=i.firstCreatePass?Mo(i,r,1,n,null):i.data[r],a=lT(i,e,o,n);e[r]=a,vl()&&np(i,e,a,o),mo(o,!1)}var lT=(t,n,e,i)=>(_l(!0),wM(n[Ce],i));function dT(t,n,e,i=""){return tn(t,Pn(),e)?n+ol(e)+i:Wt}function Oe(t){return Mr("",t),Oe}function Mr(t,n,e){let i=Z(),r=dT(i,t,n,e);return r!==Wt&&uT(i,ni(),r),Mr}function uT(t,n,e){let i=wm(n,t);CM(t[Ce],i,e)}function vt(t,n,e){mp(n)&&(n=n());let i=Z(),r=Pn();if(tn(i,r,n)){let o=Me(),a=ho();Wy(a,i,t,n,i[Ce],e)}return vt}function Fe(t,n){let e=mp(t);return e&&t.set(n),e}function _t(t,n){let e=Z(),i=Me(),r=it();return jw(i,e,e[Ce],r,t,n),_t}function ps(t){return tn(Z(),Pn(),t)?ol(t):Wt}function $_(t,n,e){let i=Me();i.firstCreatePass&&Gw(n,i.data,i.blueprint,Fn(t),e)}function Gw(t,n,e,i,r){if(t=lt(t),Array.isArray(t))for(let o=0;o<t.length;o++)Gw(t[o],n,e,i,r);else{let o=Me(),a=Z(),s=it(),c=ur(t)?t:lt(t.provide),l=pm(t),u=s.providerIndexes&1048575,f=s.directiveStart,m=s.providerIndexes>>20;if(ur(t)||!t.multi){let h=new Cr(l,r,De,null),b=nh(c,n,r?u:u+m,f);b===-1?(rh(Ol(s,a),o,c),th(o,t,n.length),n.push(c),s.directiveStart++,s.directiveEnd++,r&&(s.providerIndexes+=1048576),e.push(h),a.push(h)):(e[b]=h,a[b]=h)}else{let h=nh(c,n,u+m,f),b=nh(c,n,u,u+m),C=h>=0&&e[h],I=b>=0&&e[b];if(r&&!I||!r&&!C){rh(Ol(s,a),o,c);let A=hT(r?mT:fT,e.length,r,i,l,t);!r&&I&&(e[b].providerFactory=A),th(o,t,n.length,0),n.push(c),s.directiveStart++,s.directiveEnd++,r&&(s.providerIndexes+=1048576),e.push(A),a.push(A)}else{let A=qw(e[r?b:h],l,!r&&i);th(o,t,h>-1?h:b,A)}!r&&i&&I&&e[b].componentProviders++}}}function th(t,n,e,i){let r=ur(n),o=Lv(n);if(r||o){let c=(o?lt(n.useClass):n).prototype.ngOnDestroy;if(c){let l=t.destroyHooks||(t.destroyHooks=[]);if(!r&&n.multi){let u=l.indexOf(e);u===-1?l.push(e,[i,c]):l[u+1].push(i,c)}else l.push(e,c)}}}function qw(t,n,e){return e&&t.componentProviders++,t.multi.push(n)-1}function nh(t,n,e,i){for(let r=e;r<i;r++)if(n[r]===t)return r;return-1}function fT(t,n,e,i,r){return jh(this.multi,[])}function mT(t,n,e,i,r){let o=this.multi,a;if(this.providerFactory){let s=this.providerFactory.componentProviders,c=es(i,i[U],this.providerFactory.index,r);a=c.slice(0,s),jh(o,a);for(let l=s;l<c.length;l++)a.push(c[l])}else a=[],jh(o,a);return a}function jh(t,n){for(let e=0;e<t.length;e++){let i=t[e];n.push(i())}return n}function hT(t,n,e,i,r,o){let a=new Cr(t,e,De,null);return a.multi=[],a.index=n,a.componentProviders=0,qw(a,r,i&&!e),a}function ke(t,n){return e=>{e.providersResolver=(i,r)=>$_(i,r?r(t):t,!1),n&&(e.viewProvidersResolver=(i,r)=>$_(i,r?r(n):n,!0))}}function pT(t,n){let e=t[n];return e===Wt?void 0:e}function gT(t,n,e,i,r,o){let a=n+e;return tn(t,a,r)?YS(t,a+1,o?i.call(o,r):i(r)):pT(t,a+1)}function gs(t,n){let e=Me(),i,r=t+Ae;e.firstCreatePass?(i=bT(n,e.pipeRegistry),e.data[r]=i,i.onDestroy&&(e.destroyHooks??=[]).push(r,i.onDestroy)):i=e.data[r];let o=i.factory||(i.factory=Ei(i.type,!0)),a,s=Dt(De);try{let c=Nl(!1),l=o();return Nl(c),Dm(e,Z(),r,l),l}finally{Dt(s)}}function bT(t,n){if(n)for(let e=n.length-1;e>=0;e--){let i=n[e];if(t===i.name)return i}}function bs(t,n,e){let i=t+Ae,r=Z(),o=Cm(r,i);return vT(r,i)?gT(r,Yv(),n,o.transform,e,o):o.transform(e)}function vT(t,n){return t[U].data[n].pure}function gd(t,n){return ad(t,n)}var Gl=class{ngModuleFactory;componentFactories;constructor(n,e){this.ngModuleFactory=n,this.componentFactories=e}},vp=(()=>{class t{compileModuleSync(e){return new Ul(e)}compileModuleAsync(e){return Promise.resolve(this.compileModuleSync(e))}compileModuleAndAllComponentsSync(e){let i=this.compileModuleSync(e),r=am(e),o=Ay(r.declarations).reduce((a,s)=>{let c=Tn(s);return c&&a.push(new Fi(c)),a},[]);return new Gl(i,o)}compileModuleAndAllComponentsAsync(e){return Promise.resolve(this.compileModuleAndAllComponentsSync(e))}clearCache(){}clearCacheFor(e){}getModuleId(e){}static \u0275fac=function(i){return new(i||t)};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Zw=(()=>{class t{applicationErrorHandler=d($t);appRef=d(Gt);taskService=d(ii);ngZone=d(k);zonelessEnabled=d(Ya);tracing=d(_n,{optional:!0});zoneIsDefined=typeof Zone<"u"&&!!Zone.root.run;schedulerTickApplyArgs=[{data:{__scheduler_tick__:!0}}];subscriptions=new se;angularZoneId=this.zoneIsDefined?this.ngZone._inner?.get(ja):null;scheduleInRootZone=!this.zonelessEnabled&&this.zoneIsDefined&&(d(Gm,{optional:!0})??!1);cancelScheduledCallback=null;useMicrotaskScheduler=!1;runningTick=!1;pendingRenderTaskId=null;constructor(){this.subscriptions.add(this.appRef.afterTick.subscribe(()=>{let e=this.taskService.add();if(!this.runningTick&&(this.cleanup(),!this.zonelessEnabled||this.appRef.includeAllTestViews)){this.taskService.remove(e);return}this.switchToMicrotaskScheduler(),this.taskService.remove(e)})),this.subscriptions.add(this.ngZone.onUnstable.subscribe(()=>{this.runningTick||this.cleanup()}))}switchToMicrotaskScheduler(){this.ngZone.runOutsideAngular(()=>{let e=this.taskService.add();this.useMicrotaskScheduler=!0,queueMicrotask(()=>{this.useMicrotaskScheduler=!1,this.taskService.remove(e)})})}notify(e){if(!this.zonelessEnabled&&e===5)return;switch(e){case 0:{this.appRef.dirtyFlags|=2;break}case 3:case 2:case 4:case 5:case 1:{this.appRef.dirtyFlags|=4;break}case 6:{this.appRef.dirtyFlags|=2;break}case 12:{this.appRef.dirtyFlags|=16;break}case 13:{this.appRef.dirtyFlags|=2;break}case 11:break;default:this.appRef.dirtyFlags|=8}if(this.appRef.tracingSnapshot=this.tracing?.snapshot(this.appRef.tracingSnapshot)??null,!this.shouldScheduleTick())return;let i=this.useMicrotaskScheduler?d_:Um;this.pendingRenderTaskId=this.taskService.add(),this.scheduleInRootZone?this.cancelScheduledCallback=Zone.root.run(()=>i(()=>this.tick())):this.cancelScheduledCallback=this.ngZone.runOutsideAngular(()=>i(()=>this.tick()))}shouldScheduleTick(){return!(this.appRef.destroyed||this.pendingRenderTaskId!==null||this.runningTick||this.appRef._runningTick||!this.zonelessEnabled&&this.zoneIsDefined&&Zone.current.get(ja+this.angularZoneId))}tick(){if(this.runningTick||this.appRef.destroyed)return;if(this.appRef.dirtyFlags===0){this.cleanup();return}!this.zonelessEnabled&&this.appRef.dirtyFlags&7&&(this.appRef.dirtyFlags|=1);let e=this.taskService.add();try{this.ngZone.run(()=>{this.runningTick=!0,this.appRef._tick()},void 0,this.schedulerTickApplyArgs)}catch(i){this.applicationErrorHandler(i)}finally{this.taskService.remove(e),this.cleanup()}}ngOnDestroy(){this.subscriptions.unsubscribe(),this.cleanup()}cleanup(){if(this.runningTick=!1,this.cancelScheduledCallback?.(),this.cancelScheduledCallback=null,this.pendingRenderTaskId!==null){let e=this.pendingRenderTaskId;this.pendingRenderTaskId=null,this.taskService.remove(e)}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Qw(){return[{provide:kn,useExisting:Zw},{provide:k,useClass:Ba},{provide:Ya,useValue:!0}]}function _T(){return typeof $localize<"u"&&$localize.locale||ms}var bd=new g("",{factory:()=>d(bd,{optional:!0,skipSelf:!0})||_T()});var vd=class{destroyed=!1;listeners=null;errorHandler=d(gt,{optional:!0});destroyRef=d(dt);constructor(){this.destroyRef.onDestroy(()=>{this.destroyed=!0,this.listeners=null})}subscribe(n){if(this.destroyed)throw new D(953,!1);return(this.listeners??=[]).push(n),{unsubscribe:()=>{let e=this.listeners?.indexOf(n);e!==void 0&&e!==-1&&this.listeners?.splice(e,1)}}}emit(n){if(this.destroyed){console.warn(Yt(953,!1));return}if(this.listeners===null)return;let e=L(null);try{for(let i of this.listeners)try{i(n)}catch(r){this.errorHandler?.handleError(r)}}finally{L(e)}}};function Pe(t){return _v(t)}function ot(t,n){return xa(t,n?.equal)}var yd=Symbol("InputSignalNode#UNSET"),n0=G(v({},Ea),{transformFn:void 0,applyValueToInputSignal(t,n){nr(t,n)}});function i0(t,n){let e=Object.create(n0);e.value=t,e.transformFn=n?.transform;function i(){if(gi(e),e.value===yd){let r=null;throw new D(-950,r)}return e.value}return i[He]=e,i}var Bi=class{attributeName;constructor(n){this.attributeName=n}__NG_ELEMENT_ID__=()=>ql(this.attributeName);toString(){return`HostAttributeToken ${this.attributeName}`}};function Yw(t,n){return i0(t,n)}function LT(t){return i0(yd,t)}var wd=(Yw.required=LT,Yw);function Kw(t,n){return dp(n)}function jT(t,n){return up(n)}var wn=(Kw.required=jT,Kw);function Xw(t,n){return dp(n)}function BT(t,n){return up(n)}var r0=(Xw.required=BT,Xw);function o0(t,n){let e=Object.create(n0),i=new vd;e.value=t;function r(){return gi(e),Jw(e.value),e.value}return r[He]=e,r.asReadonly=yl.bind(r),r.set=o=>{e.equal(e.value,o)||(nr(e,o),i.emit(o))},r.update=o=>{Jw(e.value),r.set(o(e.value))},r.subscribe=i.subscribe.bind(i),r.destroyRef=i.destroyRef,r}function Jw(t){if(t===yd)throw new D(952,!1)}function e0(t,n){return o0(t,n)}function VT(t){return o0(yd,t)}var Le=(e0.required=VT,e0);var yp=new g(""),HT=new g("");function vs(t){return!t.moduleRef}function UT(t){let n=vs(t)?t.r3Injector:t.moduleRef.injector,e=n.get(k);return e.run(()=>{vs(t)?t.r3Injector.resolveInjectorInitializers():t.moduleRef.resolveInjectorInitializers();let i=n.get($t),r;if(e.runOutsideAngular(()=>{r=e.onError.subscribe({next:i})}),vs(t)){let o=()=>n.destroy(),a=t.platformInjector.get(yp);a.add(o),n.onDestroy(()=>{r.unsubscribe(),a.delete(o)})}else{let o=()=>t.moduleRef.destroy(),a=t.platformInjector.get(yp);a.add(o),t.moduleRef.onDestroy(()=>{Ja(t.allPlatformModules,t.moduleRef),r.unsubscribe(),a.delete(o)})}return $T(i,e,()=>{let o=n.get(ii),a=o.add(),s=n.get(gp);return s.runInitializers(),s.donePromise.then(()=>{let c=n.get(bd,ms);if(Lw(c||ms),!n.get(HT,!0))return vs(t)?n.get(Gt):(t.allPlatformModules.push(t.moduleRef),t.moduleRef);if(vs(t)){let u=n.get(Gt);return t.rootComponent!==void 0&&u.bootstrap(t.rootComponent),u}else return zT?.(t.moduleRef,t.allPlatformModules),t.moduleRef}).finally(()=>{o.remove(a)})})})}var zT;function $T(t,n,e){try{let i=e();return si(i)?i.catch(r=>{throw n.runOutsideAngular(()=>t(r)),r}):i}catch(i){throw n.runOutsideAngular(()=>t(i)),i}}var _d=null;function WT(t=[],n){return q.create({name:n,providers:[{provide:za,useValue:"platform"},{provide:yp,useValue:new Set([()=>_d=null])},...t]})}function GT(t=[]){if(_d)return _d;let n=WT(t);return _d=n,Ow(),qT(n),n}function qT(t){let n=t.get(Zl,null);Qe(t,()=>{n?.forEach(e=>e())})}var ZT=1e4;var CG=ZT-1e3;var We=(()=>{class t{static __NG_ELEMENT_ID__=QT}return t})();function QT(t){return YT(it(),Z(),(t&16)===16)}function YT(t,n,e){if(On(t)&&!e){let i=en(t.index,n);return new Oi(i,i)}else if(t.type&175){let i=n[Et];return new Oi(i,n)}return null}function a0(t){let{rootComponent:n,appProviders:e,platformProviders:i,platformRef:r}=t;we(fe.BootstrapApplicationStart);try{let o=r?.injector??GT(i),a=[Qw(),f_,...e||[]],s=new rs({providers:a,parent:o,debugName:"",runEnvironmentInitializers:!1});return UT({r3Injector:s.injector,platformInjector:o,rootComponent:n})}catch(o){return Promise.reject(o)}finally{we(fe.BootstrapApplicationEnd)}}function ae(t){return typeof t=="boolean"?t:t!=null&&t!=="false"}function ci(t,n=NaN){return!isNaN(parseFloat(t))&&!isNaN(Number(t))?Number(t):n}var _p=Symbol("NOT_SET"),s0=new Set,KT=G(v({},Ea),{kind:"afterRenderEffectPhase",consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!0,value:_p,cleanup:null,consumerMarkedDirty(){if(this.sequence.impl.executing){if(this.sequence.lastPhase===null||this.sequence.lastPhase<this.phase)return;this.sequence.erroredOrDestroyed=!0}this.sequence.scheduler.notify(7)},phaseFn(t){if(this.sequence.lastPhase=this.phase,!this.dirty)return this.signal;if(this.dirty=!1,this.value!==_p&&!Yr(this))return this.signal;try{for(let r of this.cleanup??s0)r()}finally{this.cleanup?.clear()}let n=[];t!==void 0&&n.push(t),n.push(this.registerCleanupFn);let e=bi(this),i;try{i=this.userFn.apply(null,n)}finally{tr(this,e)}return(this.value===_p||!this.equal(this.value,i))&&(this.value=i,this.version++),this.signal}}),wp=class extends ts{scheduler;lastPhase=null;nodes=[void 0,void 0,void 0,void 0];onDestroyFns=null;constructor(n,e,i,r,o,a=null){super(n,[void 0,void 0,void 0,void 0],i,!1,o.get(dt),a),this.scheduler=r;for(let s of Jh){let c=e[s];if(c===void 0)continue;let l=Object.create(KT);l.sequence=this,l.phase=s,l.userFn=c,l.dirty=!0,l.signal=()=>(gi(l),l.value),l.signal[He]=l,l.registerCleanupFn=u=>(l.cleanup??=new Set).add(u),this.nodes[s]=l,this.hooks[s]=u=>l.phaseFn(u)}}afterRun(){super.afterRun(),this.lastPhase=null}destroy(){if(this.onDestroyFns!==null)for(let n of this.onDestroyFns)n();super.destroy();for(let n of this.nodes)if(n)try{for(let e of n.cleanup??s0)e()}finally{vi(n)}}};function c0(t,n){let e=n?.injector??d(q),i=e.get(kn),r=e.get(td),o=e.get(_n,null,{optional:!0});r.impl??=e.get(ep);let a=t;typeof a=="function"&&(a={mixedReadWrite:t});let s=e.get(po,null,{optional:!0}),c=new wp(r.impl,[a.earlyRead,a.write,a.mixedReadWrite,a.read],s?.view,i,e,o?.snapshot(null));return r.impl.register(c),c}function Cd(t,n){let e=Tn(t),i=n.elementInjector||co();return new Fi(e).create(i,n.projectableNodes,n.hostElement,n.environmentInjector,n.directives,n.bindings)}function l0(t){let n=Tn(t);if(!n)return null;let e=new Fi(n);return{get selector(){return e.selector},get type(){return e.componentType},get inputs(){return e.inputs},get outputs(){return e.outputs},get ngContentSelectors(){return e.ngContentSelectors},get isStandalone(){return n.standalone},get isSignal(){return n.signals}}}var d0=null;function sn(){return d0}function Dp(t){d0??=t}var _s=class{},li=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(i){return new(i||t)};static \u0275prov=p({token:t,factory:()=>d(u0),providedIn:"platform"})}return t})(),xp=new g(""),u0=(()=>{class t extends li{_location;_history;_doc=d(j);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return sn().getBaseHref(this._doc)}onPopState(e){let i=sn().getGlobalEventTarget(this._doc,"window");return i.addEventListener("popstate",e,!1),()=>i.removeEventListener("popstate",e)}onHashChange(e){let i=sn().getGlobalEventTarget(this._doc,"window");return i.addEventListener("hashchange",e,!1),()=>i.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,i,r){this._history.pushState(e,i,r)}replaceState(e,i,r){this._history.replaceState(e,i,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(i){return new(i||t)};static \u0275prov=p({token:t,factory:()=>new t,providedIn:"platform"})}return t})();function Dd(t,n){return t?n?t.endsWith("/")?n.startsWith("/")?t+n.slice(1):t+n:n.startsWith("/")?t+n:`${t}/${n}`:t:n}function f0(t){let n=t.search(/#|\?|$/);return t[n-1]==="/"?t.slice(0,n-1)+t.slice(n):t}function Cn(t){return t&&t[0]!=="?"?`?${t}`:t}var di=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(i){return new(i||t)};static \u0275prov=p({token:t,factory:()=>d(Ed),providedIn:"root"})}return t})(),xd=new g(""),Ed=(()=>{class t extends di{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,i){super(),this._platformLocation=e,this._baseHref=i??this._platformLocation.getBaseHrefFromDOM()??d(j).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return Dd(this._baseHref,e)}path(e=!1){let i=this._platformLocation.pathname+Cn(this._platformLocation.search),r=this._platformLocation.hash;return r&&e?`${i}${r}`:i}pushState(e,i,r,o){let a=this.prepareExternalUrl(r+Cn(o));this._platformLocation.pushState(e,i,a)}replaceState(e,i,r,o){let a=this.prepareExternalUrl(r+Cn(o));this._platformLocation.replaceState(e,i,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(i){return new(i||t)(T(li),T(xd,8))};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var $n=(()=>{class t{_subject=new x;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let i=this._locationStrategy.getBaseHref();this._basePath=eA(f0(m0(i))),this._locationStrategy.onPopState(r=>{this._subject.next({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,i=""){return this.path()==this.normalize(e+Cn(i))}normalize(e){return t.stripTrailingSlash(JT(this._basePath,m0(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,i="",r=null){this._locationStrategy.pushState(r,"",e,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+Cn(i)),r)}replaceState(e,i="",r=null){this._locationStrategy.replaceState(r,"",e,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+Cn(i)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(i=>{this._notifyUrlChangeListeners(i.url,i.state)}),()=>{let i=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(i,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",i){this._urlChangeListeners.forEach(r=>r(e,i))}subscribe(e,i,r){return this._subject.subscribe({next:e,error:i??void 0,complete:r??void 0})}static normalizeQueryParams=Cn;static joinWithSlash=Dd;static stripTrailingSlash=f0;static \u0275fac=function(i){return new(i||t)(T(di))};static \u0275prov=p({token:t,factory:()=>XT(),providedIn:"root"})}return t})();function XT(){return new $n(T(di))}function JT(t,n){if(!t||!n.startsWith(t))return n;let e=n.substring(t.length);return e===""||["/",";","?","#"].includes(e[0])?e:n}function m0(t){return t.replace(/\/index.html$/,"")}function eA(t){if(new RegExp("^(https?:)?//").test(t)){let[,e]=t.split(/\/\/[^\/]+/);return e}return t}var Mp=(()=>{class t extends di{_platformLocation;_baseHref="";_removeListenerFns=[];constructor(e,i){super(),this._platformLocation=e,i!=null&&(this._baseHref=i)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}path(e=!1){let i=this._platformLocation.hash??"#";return i.length>0?i.substring(1):i}prepareExternalUrl(e){let i=Dd(this._baseHref,e);return i.length>0?"#"+i:i}pushState(e,i,r,o){let a=this.prepareExternalUrl(r+Cn(o))||this._platformLocation.pathname;this._platformLocation.pushState(e,i,a)}replaceState(e,i,r,o){let a=this.prepareExternalUrl(r+Cn(o))||this._platformLocation.pathname;this._platformLocation.replaceState(e,i,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(i){return new(i||t)(T(li),T(xd,8))};static \u0275prov=p({token:t,factory:t.\u0275fac})}return t})();var Sp=(()=>{class t{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;injector=d(q);constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let i=this._viewContainerRef;if(this._viewRef&&i.remove(i.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let r=this._createContextForwardProxy();this._viewRef=i.createEmbeddedView(this.ngTemplateOutlet,r,{injector:this._getInjector()})}}_getInjector(){return this.ngTemplateOutletInjector==="outlet"?this.injector:this.ngTemplateOutletInjector??void 0}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,i,r)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,i,r):!1,get:(e,i,r)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,i,r)}})}static \u0275fac=function(i){return new(i||t)(De(St))};static \u0275dir=S({type:t,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[$e]})}return t})();function nA(t,n){return new D(2100,!1)}var Ep=class{createSubscription(n,e,i){return Pe(()=>n.subscribe({next:e,error:i}))}dispose(n){Pe(()=>n.unsubscribe())}},Ip=class{createSubscription(n,e,i){return n.then(r=>e?.(r),r=>i?.(r)),{unsubscribe:()=>{e=null,i=null}}}dispose(n){n.unsubscribe()}},iA=new Ip,rA=new Ep,kp=(()=>{class t{_ref;_latestValue=null;markForCheckOnValueUpdate=!0;_subscription=null;_obj=null;_strategy=null;applicationErrorHandler=d($t);constructor(e){this._ref=e}ngOnDestroy(){this._subscription&&this._dispose(),this._ref=null}transform(e){if(!this._obj){if(e)try{this.markForCheckOnValueUpdate=!1,this._subscribe(e)}finally{this.markForCheckOnValueUpdate=!0}return this._latestValue}return e!==this._obj?(this._dispose(),this.transform(e)):this._latestValue}_subscribe(e){this._obj=e,this._strategy=this._selectStrategy(e),this._subscription=this._strategy.createSubscription(e,i=>this._updateLatestValue(e,i),i=>this.applicationErrorHandler(i))}_selectStrategy(e){if(si(e))return iA;if(ud(e))return rA;throw nA(t,e)}_dispose(){this._strategy.dispose(this._subscription),this._latestValue=null,this._subscription=null,this._obj=null}_updateLatestValue(e,i){e===this._obj&&(this._latestValue=i,this.markForCheckOnValueUpdate&&this._ref?.markForCheck())}static \u0275fac=function(i){return new(i||t)(De(We,16))};static \u0275pipe=fp({name:"async",type:t,pure:!1})}return t})();function ys(t,n){n=encodeURIComponent(n);for(let e of t.split(";")){let i=e.indexOf("="),[r,o]=i==-1?[e,""]:[e.slice(0,i),e.slice(i+1)];if(r.trim()===n)return decodeURIComponent(o)}return null}var Sr=class{};var Ap="browser";function h0(t){return t===Ap}var Rp=(()=>{class t{static \u0275prov=p({token:t,providedIn:"root",factory:()=>new Tp(d(j),window)})}return t})(),Tp=class{document;window;offset=()=>[0,0];constructor(n,e){this.document=n,this.window=e}setOffset(n){Array.isArray(n)?this.offset=()=>n:this.offset=n}getScrollPosition(){return[this.window.scrollX,this.window.scrollY]}scrollToPosition(n,e){this.window.scrollTo(G(v({},e),{left:n[0],top:n[1]}))}scrollToAnchor(n,e){let i=sA(this.document,n);i&&(this.scrollToElement(i,e),i.focus())}setHistoryScrollRestoration(n){try{this.window.history.scrollRestoration=n}catch{console.warn(Yt(2400,!1))}}scrollToElement(n,e){let i=n.getBoundingClientRect(),r=i.left+this.window.pageXOffset,o=i.top+this.window.pageYOffset,a=this.offset();this.window.scrollTo(G(v({},e),{left:r-a[0],top:o-a[1]}))}};function sA(t,n){let e=t.getElementById(n)||t.getElementsByName(n)[0];if(e)return e;if(typeof t.createTreeWalker=="function"&&t.body&&typeof t.body.attachShadow=="function"){let i=t.createTreeWalker(t.body,NodeFilter.SHOW_ELEMENT),r=i.currentNode;for(;r;){let o=r.shadowRoot;if(o){let a=o.getElementById(n)||o.querySelector(`[name="${n}"]`);if(a)return a}r=i.nextNode()}}return null}var ws=class{_doc;constructor(n){this._doc=n}manager},Id=(()=>{class t extends ws{constructor(e){super(e)}supports(e){return!0}addEventListener(e,i,r,o){return e.addEventListener(i,r,o),()=>this.removeEventListener(e,i,r,o)}removeEventListener(e,i,r,o){return e.removeEventListener(i,r,o)}static \u0275fac=function(i){return new(i||t)(T(j))};static \u0275prov=p({token:t,factory:t.\u0275fac})}return t})(),kd=new g(""),Pp=(()=>{class t{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,i){this._zone=i,e.forEach(a=>{a.manager=this});let r=e.filter(a=>!(a instanceof Id));this._plugins=r.slice().reverse();let o=e.find(a=>a instanceof Id);o&&this._plugins.push(o)}addEventListener(e,i,r,o){return this._findPluginFor(i).addEventListener(e,i,r,o)}getZone(){return this._zone}_findPluginFor(e){let i=this._eventNameToPlugin.get(e);if(i)return i;if(i=this._plugins.find(o=>o.supports(e)),!i)throw new D(5101,!1);return this._eventNameToPlugin.set(e,i),i}static \u0275fac=function(i){return new(i||t)(T(kd),T(k))};static \u0275prov=p({token:t,factory:t.\u0275fac})}return t})(),Np="ng-app-id";function p0(t){for(let n of t)n.remove()}function g0(t,n){let e=n.createElement("style");return e.textContent=t,e}function cA(t,n,e,i){let r=t.head?.querySelectorAll(`style[${Np}="${n}"],link[${Np}="${n}"]`);if(r)for(let o of r)o.removeAttribute(Np),o instanceof HTMLLinkElement?i.set(o.href.slice(o.href.lastIndexOf("/")+1),{usage:0,elements:[o]}):o.textContent&&e.set(o.textContent,{usage:0,elements:[o]})}function Fp(t,n){let e=n.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",t),e}var Lp=(()=>{class t{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(e,i,r,o={}){this.doc=e,this.appId=i,this.nonce=r,cA(e,i,this.inline,this.external),this.hosts.add(e.head)}addStyles(e,i){for(let r of e)this.addUsage(r,this.inline,g0);i?.forEach(r=>this.addUsage(r,this.external,Fp))}removeStyles(e,i){for(let r of e)this.removeUsage(r,this.inline);i?.forEach(r=>this.removeUsage(r,this.external))}addUsage(e,i,r){let o=i.get(e);o?o.usage++:i.set(e,{usage:1,elements:[...this.hosts].map(a=>this.addElement(a,r(e,this.doc)))})}removeUsage(e,i){let r=i.get(e);r&&(r.usage--,r.usage<=0&&(p0(r.elements),i.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])p0(e);this.hosts.clear()}addHost(e){this.hosts.add(e);for(let[i,{elements:r}]of this.inline)r.push(this.addElement(e,g0(i,this.doc)));for(let[i,{elements:r}]of this.external)r.push(this.addElement(e,Fp(i,this.doc)))}removeHost(e){this.hosts.delete(e)}addElement(e,i){return this.nonce&&i.setAttribute("nonce",this.nonce),e.appendChild(i)}static \u0275fac=function(i){return new(i||t)(T(j),T(Eo),T(Io,8),T(Er))};static \u0275prov=p({token:t,factory:t.\u0275fac})}return t})(),Op={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},jp=/%COMP%/g;var v0="%COMP%",lA=`_nghost-${v0}`,dA=`_ngcontent-${v0}`,uA=!0,fA=new g("",{factory:()=>uA});function mA(t){return dA.replace(jp,t)}function hA(t){return lA.replace(jp,t)}function _0(t,n){return n.map(e=>e.replace(jp,t))}var Bp=(()=>{class t{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;constructor(e,i,r,o,a,s,c=null,l=null){this.eventManager=e,this.sharedStylesHost=i,this.appId=r,this.removeStylesOnCompDestroy=o,this.doc=a,this.ngZone=s,this.nonce=c,this.tracingService=l,this.defaultRenderer=new Cs(e,a,s,this.tracingService)}createRenderer(e,i){if(!e||!i)return this.defaultRenderer;let r=this.getOrCreateRenderer(e,i);return r instanceof Sd?r.applyToHost(e):r instanceof Ds&&r.applyStyles(),r}getOrCreateRenderer(e,i){let r=this.rendererByCompId,o=r.get(i.id);if(!o){let a=this.doc,s=this.ngZone,c=this.eventManager,l=this.sharedStylesHost,u=this.removeStylesOnCompDestroy,f=this.tracingService;switch(i.encapsulation){case vn.Emulated:o=new Sd(c,l,i,this.appId,u,a,s,f);break;case vn.ShadowDom:return new Md(c,e,i,a,s,this.nonce,f,l);case vn.ExperimentalIsolatedShadowDom:return new Md(c,e,i,a,s,this.nonce,f);default:o=new Ds(c,l,i,u,a,s,f);break}r.set(i.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(i){return new(i||t)(T(Pp),T(Lp),T(Eo),T(fA),T(j),T(k),T(Io),T(_n,8))};static \u0275prov=p({token:t,factory:t.\u0275fac})}return t})(),Cs=class{eventManager;doc;ngZone;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(n,e,i,r){this.eventManager=n,this.doc=e,this.ngZone=i,this.tracingService=r}destroy(){}destroyNode=null;createElement(n,e){return e?this.doc.createElementNS(Op[e]||e,n):this.doc.createElement(n)}createComment(n){return this.doc.createComment(n)}createText(n){return this.doc.createTextNode(n)}appendChild(n,e){(b0(n)?n.content:n).appendChild(e)}insertBefore(n,e,i){n&&(b0(n)?n.content:n).insertBefore(e,i)}removeChild(n,e){e.remove()}selectRootElement(n,e){let i=typeof n=="string"?this.doc.querySelector(n):n;if(!i)throw new D(-5104,!1);return e||(i.textContent=""),i}parentNode(n){return n.parentNode}nextSibling(n){return n.nextSibling}setAttribute(n,e,i,r){if(r){e=r+":"+e;let o=Op[r];o?n.setAttributeNS(o,e,i):n.setAttribute(e,i)}else n.setAttribute(e,i)}removeAttribute(n,e,i){if(i){let r=Op[i];r?n.removeAttributeNS(r,e):n.removeAttribute(`${i}:${e}`)}else n.removeAttribute(e)}addClass(n,e){n.classList.add(e)}removeClass(n,e){n.classList.remove(e)}setStyle(n,e,i,r){r&(jn.DashCase|jn.Important)?n.style.setProperty(e,i,r&jn.Important?"important":""):n.style[e]=i}removeStyle(n,e,i){i&jn.DashCase?n.style.removeProperty(e):n.style[e]=""}setProperty(n,e,i){n!=null&&(n[e]=i)}setValue(n,e){n.nodeValue=e}listen(n,e,i,r){if(typeof n=="string"&&(n=sn().getGlobalEventTarget(this.doc,n),!n))throw new D(5102,!1);let o=this.decoratePreventDefault(i);return this.tracingService?.wrapEventListener&&(o=this.tracingService.wrapEventListener(n,e,o)),this.eventManager.addEventListener(n,e,o,r)}decoratePreventDefault(n){return e=>{if(e==="__ngUnwrap__")return n;n(e)===!1&&e.preventDefault()}}};function b0(t){return t.tagName==="TEMPLATE"&&t.content!==void 0}var Md=class extends Cs{hostEl;sharedStylesHost;shadowRoot;constructor(n,e,i,r,o,a,s,c){super(n,r,o,s),this.hostEl=e,this.sharedStylesHost=c,this.shadowRoot=e.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let l=i.styles;l=_0(i.id,l);for(let f of l){let m=document.createElement("style");a&&m.setAttribute("nonce",a),m.textContent=f,this.shadowRoot.appendChild(m)}let u=i.getExternalStyles?.();if(u)for(let f of u){let m=Fp(f,r);a&&m.setAttribute("nonce",a),this.shadowRoot.appendChild(m)}}nodeOrShadowRoot(n){return n===this.hostEl?this.shadowRoot:n}appendChild(n,e){return super.appendChild(this.nodeOrShadowRoot(n),e)}insertBefore(n,e,i){return super.insertBefore(this.nodeOrShadowRoot(n),e,i)}removeChild(n,e){return super.removeChild(null,e)}parentNode(n){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(n)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},Ds=class extends Cs{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(n,e,i,r,o,a,s,c){super(n,o,a,s),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=r;let l=i.styles;this.styles=c?_0(c,l):l,this.styleUrls=i.getExternalStyles?.(c)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&Dr.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},Sd=class extends Ds{contentAttr;hostAttr;constructor(n,e,i,r,o,a,s,c){let l=r+"-"+i.id;super(n,e,i,o,a,s,c,l),this.contentAttr=mA(l),this.hostAttr=hA(l)}applyToHost(n){this.applyStyles(),this.setAttribute(n,this.hostAttr,"")}createElement(n,e){let i=super.createElement(n,e);return super.setAttribute(i,this.contentAttr,""),i}};var Td=class t extends _s{supportsDOMEvents=!0;static makeCurrent(){Dp(new t)}onAndCancel(n,e,i,r){return n.addEventListener(e,i,r),()=>{n.removeEventListener(e,i,r)}}dispatchEvent(n,e){n.dispatchEvent(e)}remove(n){n.remove()}createElement(n,e){return e=e||this.getDefaultDocument(),e.createElement(n)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(n){return n.nodeType===Node.ELEMENT_NODE}isShadowRoot(n){return n instanceof DocumentFragment}getGlobalEventTarget(n,e){return e==="window"?window:e==="document"?n:e==="body"?n.body:null}getBaseHref(n){let e=pA();return e==null?null:gA(e)}resetBaseElement(){xs=null}getUserAgent(){return window.navigator.userAgent}getCookie(n){return ys(document.cookie,n)}},xs=null;function pA(){return xs=xs||document.head.querySelector("base"),xs?xs.getAttribute("href"):null}function gA(t){return new URL(t,document.baseURI).pathname}var bA=(()=>{class t{build(){return new XMLHttpRequest}static \u0275fac=function(i){return new(i||t)};static \u0275prov=p({token:t,factory:t.\u0275fac})}return t})(),y0=["alt","control","meta","shift"],vA={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},_A={alt:t=>t.altKey,control:t=>t.ctrlKey,meta:t=>t.metaKey,shift:t=>t.shiftKey},w0=(()=>{class t extends ws{constructor(e){super(e)}supports(e){return t.parseEventName(e)!=null}addEventListener(e,i,r,o){let a=t.parseEventName(i),s=t.eventCallback(a.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>sn().onAndCancel(e,a.domEventName,s,o))}static parseEventName(e){let i=e.toLowerCase().split("."),r=i.shift();if(i.length===0||!(r==="keydown"||r==="keyup"))return null;let o=t._normalizeKey(i.pop()),a="",s=i.indexOf("code");if(s>-1&&(i.splice(s,1),a="code."),y0.forEach(l=>{let u=i.indexOf(l);u>-1&&(i.splice(u,1),a+=l+".")}),a+=o,i.length!=0||o.length===0)return null;let c={};return c.domEventName=r,c.fullKey=a,c}static matchEventFullKeyCode(e,i){let r=vA[e.key]||e.key,o="";return i.indexOf("code.")>-1&&(r=e.code,o="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),y0.forEach(a=>{if(a!==r){let s=_A[a];s(e)&&(o+=a+".")}}),o+=r,o===i)}static eventCallback(e,i,r){return o=>{t.matchEventFullKeyCode(o,e)&&r.runGuarded(()=>i(o))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(i){return new(i||t)(T(j))};static \u0275prov=p({token:t,factory:t.\u0275fac})}return t})();async function Vp(t,n,e){let i=v({rootComponent:t},yA(n,e));return a0(i)}function yA(t,n){return{platformRef:n?.platformRef,appProviders:[...EA,...t?.providers??[]],platformProviders:xA}}function wA(){Td.makeCurrent()}function CA(){return new gt}function DA(){return Hh(document),document}var xA=[{provide:Er,useValue:Ap},{provide:Zl,useValue:wA,multi:!0},{provide:j,useFactory:DA}];var EA=[{provide:za,useValue:"root"},{provide:gt,useFactory:CA},{provide:kd,useClass:Id,multi:!0},{provide:kd,useClass:w0,multi:!0},Bp,Lp,Pp,{provide:ze,useExisting:Bp},{provide:Sr,useClass:bA},[]];var Vi=class t{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(n){n?typeof n=="string"?this.lazyInit=()=>{this.headers=new Map,n.split(`
`).forEach(e=>{let i=e.indexOf(":");if(i>0){let r=e.slice(0,i),o=e.slice(i+1).trim();this.addHeaderEntry(r,o)}})}:typeof Headers<"u"&&n instanceof Headers?(this.headers=new Map,n.forEach((e,i)=>{this.addHeaderEntry(i,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(n).forEach(([e,i])=>{this.setHeaderEntries(e,i)})}:this.headers=new Map}has(n){return this.init(),this.headers.has(n.toLowerCase())}get(n){this.init();let e=this.headers.get(n.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(n){return this.init(),this.headers.get(n.toLowerCase())||null}append(n,e){return this.clone({name:n,value:e,op:"a"})}set(n,e){return this.clone({name:n,value:e,op:"s"})}delete(n,e){return this.clone({name:n,value:e,op:"d"})}maybeSetNormalizedName(n,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,n)}init(){this.lazyInit&&(this.lazyInit instanceof t?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(n=>this.applyUpdate(n)),this.lazyUpdate=null))}copyFrom(n){n.init(),Array.from(n.headers.keys()).forEach(e=>{this.headers.set(e,n.headers.get(e)),this.normalizedNames.set(e,n.normalizedNames.get(e))})}clone(n){let e=new t;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof t?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([n]),e}applyUpdate(n){let e=n.name.toLowerCase();switch(n.op){case"a":case"s":let i=n.value;if(typeof i=="string"&&(i=[i]),i.length===0)return;this.maybeSetNormalizedName(n.name,e);let r=(n.op==="a"?this.headers.get(e):void 0)||[];r.push(...i),this.headers.set(e,r);break;case"d":let o=n.value;if(!o)this.headers.delete(e),this.normalizedNames.delete(e);else{let a=this.headers.get(e);if(!a)return;a=a.filter(s=>o.indexOf(s)===-1),a.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,a)}break}}addHeaderEntry(n,e){let i=n.toLowerCase();this.maybeSetNormalizedName(n,i),this.headers.has(i)?this.headers.get(i).push(e):this.headers.set(i,[e])}setHeaderEntries(n,e){let i=(Array.isArray(e)?e:[e]).map(o=>o.toString()),r=n.toLowerCase();this.headers.set(r,i),this.maybeSetNormalizedName(n,r)}forEach(n){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>n(this.normalizedNames.get(e),this.headers.get(e)))}};var Rd=class{map=new Map;set(n,e){return this.map.set(n,e),this}get(n){return this.map.has(n)||this.map.set(n,n.defaultValue()),this.map.get(n)}delete(n){return this.map.delete(n),this}has(n){return this.map.has(n)}keys(){return this.map.keys()}},Nd=class{encodeKey(n){return C0(n)}encodeValue(n){return C0(n)}decodeKey(n){return decodeURIComponent(n)}decodeValue(n){return decodeURIComponent(n)}};function IA(t,n){let e=new Map;return t.length>0&&t.replace(/^\?/,"").split("&").forEach(r=>{let o=r.indexOf("="),[a,s]=o==-1?[n.decodeKey(r),""]:[n.decodeKey(r.slice(0,o)),n.decodeValue(r.slice(o+1))],c=e.get(a)||[];c.push(s),e.set(a,c)}),e}var MA=/%(\d[a-f0-9])/gi,SA={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function C0(t){return encodeURIComponent(t).replace(MA,(n,e)=>SA[e]??n)}function Ad(t){return`${t}`}var Tt=class t{map;encoder;updates=null;cloneFrom=null;constructor(n={}){if(this.encoder=n.encoder||new Nd,n.fromString){if(n.fromObject)throw new D(2805,!1);this.map=IA(n.fromString,this.encoder)}else n.fromObject?(this.map=new Map,Object.keys(n.fromObject).forEach(e=>{let i=n.fromObject[e],r=Array.isArray(i)?i.map(Ad):[Ad(i)];this.map.set(e,r)})):this.map=null}has(n){return this.init(),this.map.has(n)}get(n){this.init();let e=this.map.get(n);return e?e[0]:null}getAll(n){return this.init(),this.map.get(n)||null}keys(){return this.init(),Array.from(this.map.keys())}append(n,e){return this.clone({param:n,value:e,op:"a"})}appendAll(n){let e=[];return Object.keys(n).forEach(i=>{let r=n[i];Array.isArray(r)?r.forEach(o=>{e.push({param:i,value:o,op:"a"})}):e.push({param:i,value:r,op:"a"})}),this.clone(e)}set(n,e){return this.clone({param:n,value:e,op:"s"})}delete(n,e){return this.clone({param:n,value:e,op:"d"})}toString(){return this.init(),this.keys().map(n=>{let e=this.encoder.encodeKey(n);return this.map.get(n).map(i=>e+"="+this.encoder.encodeValue(i)).join("&")}).filter(n=>n!=="").join("&")}clone(n){let e=new t({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(n),e}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(n=>this.map.set(n,this.cloneFrom.map.get(n))),this.updates.forEach(n=>{switch(n.op){case"a":case"s":let e=(n.op==="a"?this.map.get(n.param):void 0)||[];e.push(Ad(n.value)),this.map.set(n.param,e);break;case"d":if(n.value!==void 0){let i=this.map.get(n.param)||[],r=i.indexOf(Ad(n.value));r!==-1&&i.splice(r,1),i.length>0?this.map.set(n.param,i):this.map.delete(n.param)}else{this.map.delete(n.param);break}}}),this.cloneFrom=this.updates=null)}};function kA(t){switch(t){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function D0(t){return typeof ArrayBuffer<"u"&&t instanceof ArrayBuffer}function x0(t){return typeof Blob<"u"&&t instanceof Blob}function E0(t){return typeof FormData<"u"&&t instanceof FormData}function TA(t){return typeof URLSearchParams<"u"&&t instanceof URLSearchParams}var I0="Content-Type",M0="Accept",k0="text/plain",T0="application/json",AA=`${T0}, ${k0}, */*`,To=class t{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(n,e,i,r){this.url=e,this.method=n.toUpperCase();let o;if(kA(this.method)||r?(this.body=i!==void 0?i:null,o=r):o=i,o){if(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,this.keepalive=!!o.keepalive,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),o.priority&&(this.priority=o.priority),o.cache&&(this.cache=o.cache),o.credentials&&(this.credentials=o.credentials),typeof o.timeout=="number"){if(o.timeout<1||!Number.isInteger(o.timeout))throw new D(2822,"");this.timeout=o.timeout}o.mode&&(this.mode=o.mode),o.redirect&&(this.redirect=o.redirect),o.integrity&&(this.integrity=o.integrity),o.referrer&&(this.referrer=o.referrer),o.referrerPolicy&&(this.referrerPolicy=o.referrerPolicy),this.transferCache=o.transferCache}if(this.headers??=new Vi,this.context??=new Rd,!this.params)this.params=new Tt,this.urlWithParams=e;else{let a=this.params.toString();if(a.length===0)this.urlWithParams=e;else{let s=e.indexOf("?"),c=s===-1?"?":s<e.length-1?"&":"";this.urlWithParams=e+c+a}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||D0(this.body)||x0(this.body)||E0(this.body)||TA(this.body)?this.body:this.body instanceof Tt?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||E0(this.body)?null:x0(this.body)?this.body.type||null:D0(this.body)?null:typeof this.body=="string"?k0:this.body instanceof Tt?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?T0:null}clone(n={}){let e=n.method||this.method,i=n.url||this.url,r=n.responseType||this.responseType,o=n.keepalive??this.keepalive,a=n.priority||this.priority,s=n.cache||this.cache,c=n.mode||this.mode,l=n.redirect||this.redirect,u=n.credentials||this.credentials,f=n.referrer||this.referrer,m=n.integrity||this.integrity,h=n.referrerPolicy||this.referrerPolicy,b=n.transferCache??this.transferCache,C=n.timeout??this.timeout,I=n.body!==void 0?n.body:this.body,A=n.withCredentials??this.withCredentials,be=n.reportProgress??this.reportProgress,Je=n.headers||this.headers,et=n.params||this.params,wa=n.context??this.context;return n.setHeaders!==void 0&&(Je=Object.keys(n.setHeaders).reduce((Ca,Ji)=>Ca.set(Ji,n.setHeaders[Ji]),Je)),n.setParams&&(et=Object.keys(n.setParams).reduce((Ca,Ji)=>Ca.set(Ji,n.setParams[Ji]),et)),new t(e,i,I,{params:et,headers:Je,context:wa,reportProgress:be,responseType:r,withCredentials:A,transferCache:b,keepalive:o,cache:s,priority:a,timeout:C,mode:c,redirect:l,credentials:u,referrer:f,integrity:m,referrerPolicy:h})}},kr=(function(t){return t[t.Sent=0]="Sent",t[t.UploadProgress=1]="UploadProgress",t[t.ResponseHeader=2]="ResponseHeader",t[t.DownloadProgress=3]="DownloadProgress",t[t.Response=4]="Response",t[t.User=5]="User",t})(kr||{}),Ro=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(n,e=200,i="OK"){this.headers=n.headers||new Vi,this.status=n.status!==void 0?n.status:e,this.statusText=n.statusText||i,this.url=n.url||null,this.redirected=n.redirected,this.responseType=n.responseType,this.ok=this.status>=200&&this.status<300}},Od=class t extends Ro{constructor(n={}){super(n)}type=kr.ResponseHeader;clone(n={}){return new t({headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0})}},Es=class t extends Ro{body;constructor(n={}){super(n),this.body=n.body!==void 0?n.body:null}type=kr.Response;clone(n={}){return new t({body:n.body!==void 0?n.body:this.body,headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0,redirected:n.redirected??this.redirected,responseType:n.responseType??this.responseType})}},Ao=class extends Ro{name="HttpErrorResponse";message;error;ok=!1;constructor(n){super(n,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${n.url||"(unknown url)"}`:this.message=`Http failure response for ${n.url||"(unknown url)"}: ${n.status} ${n.statusText}`,this.error=n.error||null}},RA=200,NA=204;var OA=new g("");var FA=/^\)\]\}',?\n/;var Up=(()=>{class t{xhrFactory;tracingService=d(_n,{optional:!0});constructor(e){this.xhrFactory=e}maybePropagateTrace(e){return this.tracingService?.propagate?this.tracingService.propagate(e):e}handle(e){if(e.method==="JSONP")throw new D(-2800,!1);let i=this.xhrFactory;return O(null).pipe(ct(()=>new Q(o=>{let a=i.build();if(a.open(e.method,e.urlWithParams),e.withCredentials&&(a.withCredentials=!0),e.headers.forEach((I,A)=>a.setRequestHeader(I,A.join(","))),e.headers.has(M0)||a.setRequestHeader(M0,AA),!e.headers.has(I0)){let I=e.detectContentTypeHeader();I!==null&&a.setRequestHeader(I0,I)}if(e.timeout&&(a.timeout=e.timeout),e.responseType){let I=e.responseType.toLowerCase();a.responseType=I!=="json"?I:"text"}let s=e.serializeBody(),c=null,l=()=>{if(c!==null)return c;let I=a.statusText||"OK",A=new Vi(a.getAllResponseHeaders()),be=a.responseURL||e.url;return c=new Od({headers:A,status:a.status,statusText:I,url:be}),c},u=this.maybePropagateTrace(()=>{let{headers:I,status:A,statusText:be,url:Je}=l(),et=null;A!==NA&&(et=typeof a.response>"u"?a.responseText:a.response),A===0&&(A=et?RA:0);let wa=A>=200&&A<300;if(e.responseType==="json"&&typeof et=="string"){let Ca=et;et=et.replace(FA,"");try{et=et!==""?JSON.parse(et):null}catch(Ji){et=Ca,wa&&(wa=!1,et={error:Ji,text:et})}}wa?(o.next(new Es({body:et,headers:I,status:A,statusText:be,url:Je||void 0})),o.complete()):o.error(new Ao({error:et,headers:I,status:A,statusText:be,url:Je||void 0}))}),f=this.maybePropagateTrace(I=>{let{url:A}=l(),be=new Ao({error:I,status:a.status||0,statusText:a.statusText||"Unknown Error",url:A||void 0});o.error(be)}),m=f;e.timeout&&(m=this.maybePropagateTrace(I=>{let{url:A}=l(),be=new Ao({error:new DOMException("Request timed out","TimeoutError"),status:a.status||0,statusText:a.statusText||"Request timeout",url:A||void 0});o.error(be)}));let h=!1,b=this.maybePropagateTrace(I=>{h||(o.next(l()),h=!0);let A={type:kr.DownloadProgress,loaded:I.loaded};I.lengthComputable&&(A.total=I.total),e.responseType==="text"&&a.responseText&&(A.partialText=a.responseText),o.next(A)}),C=this.maybePropagateTrace(I=>{let A={type:kr.UploadProgress,loaded:I.loaded};I.lengthComputable&&(A.total=I.total),o.next(A)});return a.addEventListener("load",u),a.addEventListener("error",f),a.addEventListener("timeout",m),a.addEventListener("abort",f),e.reportProgress&&(a.addEventListener("progress",b),s!==null&&a.upload&&a.upload.addEventListener("progress",C)),a.send(s),o.next({type:kr.Sent}),()=>{a.removeEventListener("error",f),a.removeEventListener("abort",f),a.removeEventListener("load",u),a.removeEventListener("timeout",m),e.reportProgress&&(a.removeEventListener("progress",b),s!==null&&a.upload&&a.upload.removeEventListener("progress",C)),a.readyState!==a.DONE&&a.abort()}})))}static \u0275fac=function(i){return new(i||t)(T(Sr))};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function A0(t,n){return n(t)}function PA(t,n){return(e,i)=>n.intercept(e,{handle:r=>t(r,i)})}function LA(t,n,e){return(i,r)=>Qe(e,()=>n(i,o=>t(o,r)))}var Pd=new g(""),zp=new g("",{factory:()=>[]}),R0=new g(""),$p=new g("",{factory:()=>!0});function jA(){let t=null;return(n,e)=>{t===null&&(t=(d(Pd,{optional:!0})??[]).reduceRight(PA,A0));let i=d(go);if(d($p)){let o=i.add();return t(n,e).pipe(xi(o))}else return t(n,e)}}var Wp=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=p({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=T(Up),r},providedIn:"root"})}return t})();var Fd=(()=>{class t{backend;injector;chain=null;pendingTasks=d(go);contributeToStability=d($p);constructor(e,i){this.backend=e,this.injector=i}handle(e){if(this.chain===null){let i=Array.from(new Set([...this.injector.get(zp),...this.injector.get(R0,[])]));this.chain=i.reduceRight((r,o)=>LA(r,o,this.injector),A0)}if(this.contributeToStability){let i=this.pendingTasks.add();return this.chain(e,r=>this.backend.handle(r)).pipe(xi(i))}else return this.chain(e,i=>this.backend.handle(i))}static \u0275fac=function(i){return new(i||t)(T(Wp),T(ye))};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Gp=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=p({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=T(Fd),r},providedIn:"root"})}return t})();function Hp(t,n){return{body:n,headers:t.headers,context:t.context,observe:t.observe,params:t.params,reportProgress:t.reportProgress,responseType:t.responseType,withCredentials:t.withCredentials,credentials:t.credentials,transferCache:t.transferCache,timeout:t.timeout,keepalive:t.keepalive,priority:t.priority,cache:t.cache,mode:t.mode,redirect:t.redirect,integrity:t.integrity,referrer:t.referrer,referrerPolicy:t.referrerPolicy}}var yt=(()=>{class t{handler;constructor(e){this.handler=e}request(e,i,r={}){let o;if(e instanceof To)o=e;else{let c;r.headers instanceof Vi?c=r.headers:c=new Vi(r.headers);let l;r.params&&(r.params instanceof Tt?l=r.params:l=new Tt({fromObject:r.params})),o=new To(e,i,r.body!==void 0?r.body:null,{headers:c,context:r.context,params:l,reportProgress:r.reportProgress,responseType:r.responseType||"json",withCredentials:r.withCredentials,transferCache:r.transferCache,keepalive:r.keepalive,priority:r.priority,cache:r.cache,mode:r.mode,redirect:r.redirect,credentials:r.credentials,referrer:r.referrer,referrerPolicy:r.referrerPolicy,integrity:r.integrity,timeout:r.timeout})}let a=O(o).pipe(Di(c=>this.handler.handle(c)));if(e instanceof To||r.observe==="events")return a;let s=a.pipe(ue(c=>c instanceof Es));switch(r.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return s.pipe(X(c=>{if(c.body!==null&&!(c.body instanceof ArrayBuffer))throw new D(2806,!1);return c.body}));case"blob":return s.pipe(X(c=>{if(c.body!==null&&!(c.body instanceof Blob))throw new D(2807,!1);return c.body}));case"text":return s.pipe(X(c=>{if(c.body!==null&&typeof c.body!="string")throw new D(2808,!1);return c.body}));default:return s.pipe(X(c=>c.body))}case"response":return s;default:throw new D(2809,!1)}}delete(e,i={}){return this.request("DELETE",e,i)}get(e,i={}){return this.request("GET",e,i)}head(e,i={}){return this.request("HEAD",e,i)}jsonp(e,i){return this.request("JSONP",e,{params:new Tt().append(i,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,i={}){return this.request("OPTIONS",e,i)}patch(e,i,r={}){return this.request("PATCH",e,Hp(r,i))}post(e,i,r={}){return this.request("POST",e,Hp(r,i))}put(e,i,r={}){return this.request("PUT",e,Hp(r,i))}static \u0275fac=function(i){return new(i||t)(T(Gp))};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var BA=new g("",{factory:()=>!0}),VA="XSRF-TOKEN",HA=new g("",{factory:()=>VA}),UA="X-XSRF-TOKEN",zA=new g("",{factory:()=>UA}),$A=(()=>{class t{cookieName=d(HA);doc=d(j);lastCookieString="";lastToken=null;parseCount=0;getToken(){let e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=ys(e,this.cookieName),this.lastCookieString=e),this.lastToken}static \u0275fac=function(i){return new(i||t)};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),N0=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=p({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=T($A),r},providedIn:"root"})}return t})();function WA(t,n){if(!d(BA)||t.method==="GET"||t.method==="HEAD")return n(t);try{let r=d(li).href,{origin:o}=new URL(r),{origin:a}=new URL(t.url,o);if(o!==a)return n(t)}catch{return n(t)}let e=d(N0).getToken(),i=d(zA);return e!=null&&!t.headers.has(i)&&(t=t.clone({headers:t.headers.set(i,e)})),n(t)}var qp=(function(t){return t[t.Interceptors=0]="Interceptors",t[t.LegacyInterceptors=1]="LegacyInterceptors",t[t.CustomXsrfConfiguration=2]="CustomXsrfConfiguration",t[t.NoXsrfProtection=3]="NoXsrfProtection",t[t.JsonpSupport=4]="JsonpSupport",t[t.RequestsMadeViaParent=5]="RequestsMadeViaParent",t[t.Fetch=6]="Fetch",t})(qp||{});function GA(t,n){return{\u0275kind:t,\u0275providers:n}}function Zp(...t){let n=[yt,Fd,{provide:Gp,useExisting:Fd},{provide:Wp,useFactory:()=>d(OA,{optional:!0})??d(Up)},{provide:zp,useValue:WA,multi:!0}];for(let e of t)n.push(...e.\u0275providers);return An(n)}var S0=new g("");function Qp(){return GA(qp.LegacyInterceptors,[{provide:S0,useFactory:jA},{provide:zp,useExisting:S0,multi:!0}])}var O0=(()=>{class t{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(i){return new(i||t)(T(j))};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Yp=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=p({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=T(ZA),r},providedIn:"root"})}return t})(),ZA=(()=>{class t extends Yp{_doc;constructor(e){super(),this._doc=e}sanitize(e,i){if(i==null)return null;switch(e){case Mt.NONE:return i;case Mt.HTML:return Ir(i,"HTML")?Vn(i):qh(this._doc,String(i)).toString();case Mt.STYLE:return Ir(i,"Style")?Vn(i):i;case Mt.SCRIPT:if(Ir(i,"Script"))return Vn(i);throw new D(5200,!1);case Mt.URL:return Ir(i,"URL")?Vn(i):Xl(String(i));case Mt.RESOURCE_URL:if(Ir(i,"ResourceURL"))return Vn(i);throw new D(5201,!1);default:throw new D(5202,!1)}}bypassSecurityTrustHtml(e){return Uh(e)}bypassSecurityTrustStyle(e){return zh(e)}bypassSecurityTrustScript(e){return $h(e)}bypassSecurityTrustUrl(e){return Wh(e)}bypassSecurityTrustResourceUrl(e){return Gh(e)}static \u0275fac=function(i){return new(i||t)(T(j))};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var J="primary",Ls=Symbol("RouteTitle"),tg=class{params;constructor(n){this.params=n||{}}has(n){return Object.prototype.hasOwnProperty.call(this.params,n)}get(n){if(this.has(n)){let e=this.params[n];return Array.isArray(e)?e[0]:e}return null}getAll(n){if(this.has(n)){let e=this.params[n];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function Ar(t){return new tg(t)}function Kp(t,n,e){for(let i=0;i<t.length;i++){let r=t[i],o=n[i];if(r[0]===":")e[r.substring(1)]=o;else if(r!==o.path)return!1}return!0}function z0(t,n,e){let i=e.path.split("/"),r=i.indexOf("**");if(r===-1){if(i.length>t.length||e.pathMatch==="full"&&(n.hasChildren()||i.length<t.length))return null;let c={},l=t.slice(0,i.length);return Kp(i,l,c)?{consumed:l,posParams:c}:null}if(r!==i.lastIndexOf("**"))return null;let o=i.slice(0,r),a=i.slice(r+1);if(o.length+a.length>t.length||e.pathMatch==="full"&&n.hasChildren()&&e.path!=="**")return null;let s={};return!Kp(o,t.slice(0,o.length),s)||!Kp(a,t.slice(t.length-a.length),s)?null:{consumed:t,posParams:s}}function Ud(t){return new Promise((n,e)=>{t.pipe(Kn()).subscribe({next:i=>n(i),error:i=>e(i)})})}function QA(t,n){if(t.length!==n.length)return!1;for(let e=0;e<t.length;++e)if(!Wn(t[e],n[e]))return!1;return!0}function Wn(t,n){let e=t?ng(t):void 0,i=n?ng(n):void 0;if(!e||!i||e.length!=i.length)return!1;let r;for(let o=0;o<e.length;o++)if(r=e[o],!$0(t[r],n[r]))return!1;return!0}function ng(t){return[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function $0(t,n){if(Array.isArray(t)&&Array.isArray(n)){if(t.length!==n.length)return!1;let e=[...t].sort(),i=[...n].sort();return e.every((r,o)=>i[o]===r)}else return t===n}function YA(t){return t.length>0?t[t.length-1]:null}function Nr(t){return Ta(t)?t:si(t)?Ie(Promise.resolve(t)):O(t)}function W0(t){return Ta(t)?Ud(t):Promise.resolve(t)}var KA={exact:Z0,subset:Q0},G0={exact:XA,subset:JA,ignored:()=>!0},q0={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},ig={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};function P0(t,n,e){return KA[e.paths](t.root,n.root,e.matrixParams)&&G0[e.queryParams](t.queryParams,n.queryParams)&&!(e.fragment==="exact"&&t.fragment!==n.fragment)}function XA(t,n){return Wn(t,n)}function Z0(t,n,e){if(!Tr(t.segments,n.segments)||!Bd(t.segments,n.segments,e)||t.numberOfChildren!==n.numberOfChildren)return!1;for(let i in n.children)if(!t.children[i]||!Z0(t.children[i],n.children[i],e))return!1;return!0}function JA(t,n){return Object.keys(n).length<=Object.keys(t).length&&Object.keys(n).every(e=>$0(t[e],n[e]))}function Q0(t,n,e){return Y0(t,n,n.segments,e)}function Y0(t,n,e,i){if(t.segments.length>e.length){let r=t.segments.slice(0,e.length);return!(!Tr(r,e)||n.hasChildren()||!Bd(r,e,i))}else if(t.segments.length===e.length){if(!Tr(t.segments,e)||!Bd(t.segments,e,i))return!1;for(let r in n.children)if(!t.children[r]||!Q0(t.children[r],n.children[r],i))return!1;return!0}else{let r=e.slice(0,t.segments.length),o=e.slice(t.segments.length);return!Tr(t.segments,r)||!Bd(t.segments,r,i)||!t.children[J]?!1:Y0(t.children[J],n,o,i)}}function Bd(t,n,e){return n.every((i,r)=>G0[e](t[r].parameters,i.parameters))}var ln=class{root;queryParams;fragment;_queryParamMap;constructor(n=new ve([],{}),e={},i=null){this.root=n,this.queryParams=e,this.fragment=i}get queryParamMap(){return this._queryParamMap??=Ar(this.queryParams),this._queryParamMap}toString(){return nR.serialize(this)}},ve=class{segments;children;parent=null;constructor(n,e){this.segments=n,this.children=e,Object.values(e).forEach(i=>i.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return Vd(this)}},Hi=class{path;parameters;_parameterMap;constructor(n,e){this.path=n,this.parameters=e}get parameterMap(){return this._parameterMap??=Ar(this.parameters),this._parameterMap}toString(){return X0(this)}};function eR(t,n){return Tr(t,n)&&t.every((e,i)=>Wn(e.parameters,n[i].parameters))}function Tr(t,n){return t.length!==n.length?!1:t.every((e,i)=>e.path===n[i].path)}function tR(t,n){let e=[];return Object.entries(t.children).forEach(([i,r])=>{i===J&&(e=e.concat(n(r,i)))}),Object.entries(t.children).forEach(([i,r])=>{i!==J&&(e=e.concat(n(r,i)))}),e}var Or=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=p({token:t,factory:()=>new fi,providedIn:"root"})}return t})(),fi=class{parse(n){let e=new og(n);return new ln(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(n){let e=`/${Is(n.root,!0)}`,i=oR(n.queryParams),r=typeof n.fragment=="string"?`#${iR(n.fragment)}`:"";return`${e}${i}${r}`}},nR=new fi;function Vd(t){return t.segments.map(n=>X0(n)).join("/")}function Is(t,n){if(!t.hasChildren())return Vd(t);if(n){let e=t.children[J]?Is(t.children[J],!1):"",i=[];return Object.entries(t.children).forEach(([r,o])=>{r!==J&&i.push(`${r}:${Is(o,!1)}`)}),i.length>0?`${e}(${i.join("//")})`:e}else{let e=tR(t,(i,r)=>r===J?[Is(t.children[J],!1)]:[`${r}:${Is(i,!1)}`]);return Object.keys(t.children).length===1&&t.children[J]!=null?`${Vd(t)}/${e[0]}`:`${Vd(t)}/(${e.join("//")})`}}function K0(t){return encodeURIComponent(t).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function Ld(t){return K0(t).replace(/%3B/gi,";")}function iR(t){return encodeURI(t)}function rg(t){return K0(t).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function Hd(t){return decodeURIComponent(t)}function L0(t){return Hd(t.replace(/\+/g,"%20"))}function X0(t){return`${rg(t.path)}${rR(t.parameters)}`}function rR(t){return Object.entries(t).map(([n,e])=>`;${rg(n)}=${rg(e)}`).join("")}function oR(t){let n=Object.entries(t).map(([e,i])=>Array.isArray(i)?i.map(r=>`${Ld(e)}=${Ld(r)}`).join("&"):`${Ld(e)}=${Ld(i)}`).filter(e=>e);return n.length?`?${n.join("&")}`:""}var aR=/^[^\/()?;#]+/;function Xp(t){let n=t.match(aR);return n?n[0]:""}var sR=/^[^\/()?;=#]+/;function cR(t){let n=t.match(sR);return n?n[0]:""}var lR=/^[^=?&#]+/;function dR(t){let n=t.match(lR);return n?n[0]:""}var uR=/^[^&#]+/;function fR(t){let n=t.match(uR);return n?n[0]:""}var og=class{url;remaining;constructor(n){this.url=n,this.remaining=n}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new ve([],{}):new ve([],this.parseChildren())}parseQueryParams(){let n={};if(this.consumeOptional("?"))do this.parseQueryParam(n);while(this.consumeOptional("&"));return n}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(n=0){if(n>50)throw new D(4010,!1);if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let i={};this.peekStartsWith("/(")&&(this.capture("/"),i=this.parseParens(!0,n));let r={};return this.peekStartsWith("(")&&(r=this.parseParens(!1,n)),(e.length>0||Object.keys(i).length>0)&&(r[J]=new ve(e,i)),r}parseSegment(){let n=Xp(this.remaining);if(n===""&&this.peekStartsWith(";"))throw new D(4009,!1);return this.capture(n),new Hi(Hd(n),this.parseMatrixParams())}parseMatrixParams(){let n={};for(;this.consumeOptional(";");)this.parseParam(n);return n}parseParam(n){let e=cR(this.remaining);if(!e)return;this.capture(e);let i="";if(this.consumeOptional("=")){let r=Xp(this.remaining);r&&(i=r,this.capture(i))}n[Hd(e)]=Hd(i)}parseQueryParam(n){let e=dR(this.remaining);if(!e)return;this.capture(e);let i="";if(this.consumeOptional("=")){let a=fR(this.remaining);a&&(i=a,this.capture(i))}let r=L0(e),o=L0(i);if(n.hasOwnProperty(r)){let a=n[r];Array.isArray(a)||(a=[a],n[r]=a),a.push(o)}else n[r]=o}parseParens(n,e){let i={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let r=Xp(this.remaining),o=this.remaining[r.length];if(o!=="/"&&o!==")"&&o!==";")throw new D(4010,!1);let a;r.indexOf(":")>-1?(a=r.slice(0,r.indexOf(":")),this.capture(a),this.capture(":")):n&&(a=J);let s=this.parseChildren(e+1);i[a??J]=Object.keys(s).length===1&&s[J]?s[J]:new ve([],s),this.consumeOptional("//")}return i}peekStartsWith(n){return this.remaining.startsWith(n)}consumeOptional(n){return this.peekStartsWith(n)?(this.remaining=this.remaining.substring(n.length),!0):!1}capture(n){if(!this.consumeOptional(n))throw new D(4011,!1)}};function J0(t){return t.segments.length>0?new ve([],{[J]:t}):t}function eC(t){let n={};for(let[i,r]of Object.entries(t.children)){let o=eC(r);if(i===J&&o.segments.length===0&&o.hasChildren())for(let[a,s]of Object.entries(o.children))n[a]=s;else(o.segments.length>0||o.hasChildren())&&(n[i]=o)}let e=new ve(t.segments,n);return mR(e)}function mR(t){if(t.numberOfChildren===1&&t.children[J]){let n=t.children[J];return new ve(t.segments.concat(n.segments),n.children)}return t}function Lo(t){return t instanceof ln}function tC(t,n,e=null,i=null,r=new fi){let o=nC(t);return iC(o,n,e,i,r)}function nC(t){let n;function e(o){let a={};for(let c of o.children){let l=e(c);a[c.outlet]=l}let s=new ve(o.url,a);return o===t&&(n=s),s}let i=e(t.root),r=J0(i);return n??r}function iC(t,n,e,i,r){let o=t;for(;o.parent;)o=o.parent;if(n.length===0)return Jp(o,o,o,e,i,r);let a=hR(n);if(a.toRoot())return Jp(o,o,new ve([],{}),e,i,r);let s=pR(a,o,t),c=s.processChildren?Ss(s.segmentGroup,s.index,a.commands):oC(s.segmentGroup,s.index,a.commands);return Jp(o,s.segmentGroup,c,e,i,r)}function zd(t){return typeof t=="object"&&t!=null&&!t.outlets&&!t.segmentPath}function Ts(t){return typeof t=="object"&&t!=null&&t.outlets}function j0(t,n,e){t||="\u0275";let i=new ln;return i.queryParams={[t]:n},e.parse(e.serialize(i)).queryParams[t]}function Jp(t,n,e,i,r,o){let a={};for(let[l,u]of Object.entries(i??{}))a[l]=Array.isArray(u)?u.map(f=>j0(l,f,o)):j0(l,u,o);let s;t===n?s=e:s=rC(t,n,e);let c=J0(eC(s));return new ln(c,a,r)}function rC(t,n,e){let i={};return Object.entries(t.children).forEach(([r,o])=>{o===n?i[r]=e:i[r]=rC(o,n,e)}),new ve(t.segments,i)}var $d=class{isAbsolute;numberOfDoubleDots;commands;constructor(n,e,i){if(this.isAbsolute=n,this.numberOfDoubleDots=e,this.commands=i,n&&i.length>0&&zd(i[0]))throw new D(4003,!1);let r=i.find(Ts);if(r&&r!==YA(i))throw new D(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function hR(t){if(typeof t[0]=="string"&&t.length===1&&t[0]==="/")return new $d(!0,0,t);let n=0,e=!1,i=t.reduce((r,o,a)=>{if(typeof o=="object"&&o!=null){if(o.outlets){let s={};return Object.entries(o.outlets).forEach(([c,l])=>{s[c]=typeof l=="string"?l.split("/"):l}),[...r,{outlets:s}]}if(o.segmentPath)return[...r,o.segmentPath]}return typeof o!="string"?[...r,o]:a===0?(o.split("/").forEach((s,c)=>{c==0&&s==="."||(c==0&&s===""?e=!0:s===".."?n++:s!=""&&r.push(s))}),r):[...r,o]},[]);return new $d(e,n,i)}var Oo=class{segmentGroup;processChildren;index;constructor(n,e,i){this.segmentGroup=n,this.processChildren=e,this.index=i}};function pR(t,n,e){if(t.isAbsolute)return new Oo(n,!0,0);if(!e)return new Oo(n,!1,NaN);if(e.parent===null)return new Oo(e,!0,0);let i=zd(t.commands[0])?0:1,r=e.segments.length-1+i;return gR(e,r,t.numberOfDoubleDots)}function gR(t,n,e){let i=t,r=n,o=e;for(;o>r;){if(o-=r,i=i.parent,!i)throw new D(4005,!1);r=i.segments.length}return new Oo(i,!1,r-o)}function bR(t){return Ts(t[0])?t[0].outlets:{[J]:t}}function oC(t,n,e){if(t??=new ve([],{}),t.segments.length===0&&t.hasChildren())return Ss(t,n,e);let i=vR(t,n,e),r=e.slice(i.commandIndex);if(i.match&&i.pathIndex<t.segments.length){let o=new ve(t.segments.slice(0,i.pathIndex),{});return o.children[J]=new ve(t.segments.slice(i.pathIndex),t.children),Ss(o,0,r)}else return i.match&&r.length===0?new ve(t.segments,{}):i.match&&!t.hasChildren()?ag(t,n,e):i.match?Ss(t,0,r):ag(t,n,e)}function Ss(t,n,e){if(e.length===0)return new ve(t.segments,{});{let i=bR(e),r={};if(Object.keys(i).some(o=>o!==J)&&t.children[J]&&t.numberOfChildren===1&&t.children[J].segments.length===0){let o=Ss(t.children[J],n,e);return new ve(t.segments,o.children)}return Object.entries(i).forEach(([o,a])=>{typeof a=="string"&&(a=[a]),a!==null&&(r[o]=oC(t.children[o],n,a))}),Object.entries(t.children).forEach(([o,a])=>{i[o]===void 0&&(r[o]=a)}),new ve(t.segments,r)}}function vR(t,n,e){let i=0,r=n,o={match:!1,pathIndex:0,commandIndex:0};for(;r<t.segments.length;){if(i>=e.length)return o;let a=t.segments[r],s=e[i];if(Ts(s))break;let c=`${s}`,l=i<e.length-1?e[i+1]:null;if(r>0&&c===void 0)break;if(c&&l&&typeof l=="object"&&l.outlets===void 0){if(!V0(c,l,a))return o;i+=2}else{if(!V0(c,{},a))return o;i++}r++}return{match:!0,pathIndex:r,commandIndex:i}}function ag(t,n,e){let i=t.segments.slice(0,n),r=0;for(;r<e.length;){let o=e[r];if(Ts(o)){let c=_R(o.outlets);return new ve(i,c)}if(r===0&&zd(e[0])){let c=t.segments[n];i.push(new Hi(c.path,B0(e[0]))),r++;continue}let a=Ts(o)?o.outlets[J]:`${o}`,s=r<e.length-1?e[r+1]:null;a&&s&&zd(s)?(i.push(new Hi(a,B0(s))),r+=2):(i.push(new Hi(a,{})),r++)}return new ve(i,{})}function _R(t){let n={};return Object.entries(t).forEach(([e,i])=>{typeof i=="string"&&(i=[i]),i!==null&&(n[e]=ag(new ve([],{}),0,i))}),n}function B0(t){let n={};return Object.entries(t).forEach(([e,i])=>n[e]=`${i}`),n}function V0(t,n,e){return t==e.path&&Wn(n,e.parameters)}var Fo="imperative",Ye=(function(t){return t[t.NavigationStart=0]="NavigationStart",t[t.NavigationEnd=1]="NavigationEnd",t[t.NavigationCancel=2]="NavigationCancel",t[t.NavigationError=3]="NavigationError",t[t.RoutesRecognized=4]="RoutesRecognized",t[t.ResolveStart=5]="ResolveStart",t[t.ResolveEnd=6]="ResolveEnd",t[t.GuardsCheckStart=7]="GuardsCheckStart",t[t.GuardsCheckEnd=8]="GuardsCheckEnd",t[t.RouteConfigLoadStart=9]="RouteConfigLoadStart",t[t.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",t[t.ChildActivationStart=11]="ChildActivationStart",t[t.ChildActivationEnd=12]="ChildActivationEnd",t[t.ActivationStart=13]="ActivationStart",t[t.ActivationEnd=14]="ActivationEnd",t[t.Scroll=15]="Scroll",t[t.NavigationSkipped=16]="NavigationSkipped",t})(Ye||{}),Qt=class{id;url;constructor(n,e){this.id=n,this.url=e}},Ui=class extends Qt{type=Ye.NavigationStart;navigationTrigger;restoredState;constructor(n,e,i="imperative",r=null){super(n,e),this.navigationTrigger=i,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},xn=class extends Qt{urlAfterRedirects;type=Ye.NavigationEnd;constructor(n,e,i){super(n,e),this.urlAfterRedirects=i}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},wt=(function(t){return t[t.Redirect=0]="Redirect",t[t.SupersededByNewNavigation=1]="SupersededByNewNavigation",t[t.NoDataFromResolver=2]="NoDataFromResolver",t[t.GuardRejected=3]="GuardRejected",t[t.Aborted=4]="Aborted",t})(wt||{}),jo=(function(t){return t[t.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",t[t.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",t})(jo||{}),cn=class extends Qt{reason;code;type=Ye.NavigationCancel;constructor(n,e,i,r){super(n,e),this.reason=i,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function aC(t){return t instanceof cn&&(t.code===wt.Redirect||t.code===wt.SupersededByNewNavigation)}var Gn=class extends Qt{reason;code;type=Ye.NavigationSkipped;constructor(n,e,i,r){super(n,e),this.reason=i,this.code=r}},Rr=class extends Qt{error;target;type=Ye.NavigationError;constructor(n,e,i,r){super(n,e),this.error=i,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},As=class extends Qt{urlAfterRedirects;state;type=Ye.RoutesRecognized;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Wd=class extends Qt{urlAfterRedirects;state;type=Ye.GuardsCheckStart;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Gd=class extends Qt{urlAfterRedirects;state;shouldActivate;type=Ye.GuardsCheckEnd;constructor(n,e,i,r,o){super(n,e),this.urlAfterRedirects=i,this.state=r,this.shouldActivate=o}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},qd=class extends Qt{urlAfterRedirects;state;type=Ye.ResolveStart;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Zd=class extends Qt{urlAfterRedirects;state;type=Ye.ResolveEnd;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Qd=class{route;type=Ye.RouteConfigLoadStart;constructor(n){this.route=n}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},Yd=class{route;type=Ye.RouteConfigLoadEnd;constructor(n){this.route=n}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},Kd=class{snapshot;type=Ye.ChildActivationStart;constructor(n){this.snapshot=n}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Xd=class{snapshot;type=Ye.ChildActivationEnd;constructor(n){this.snapshot=n}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Jd=class{snapshot;type=Ye.ActivationStart;constructor(n){this.snapshot=n}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},eu=class{snapshot;type=Ye.ActivationEnd;constructor(n){this.snapshot=n}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Bo=class{routerEvent;position;anchor;scrollBehavior;type=Ye.Scroll;constructor(n,e,i,r){this.routerEvent=n,this.position=e,this.anchor=i,this.scrollBehavior=r}toString(){let n=this.position?`${this.position[0]}, ${this.position[1]}`:null;return`Scroll(anchor: '${this.anchor}', position: '${n}')`}},Vo=class{},Rs=class{},Ho=class{url;navigationBehaviorOptions;constructor(n,e){this.url=n,this.navigationBehaviorOptions=e}};function yR(t){return!(t instanceof Vo)&&!(t instanceof Ho)&&!(t instanceof Rs)}var tu=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(n){this.rootInjector=n,this.children=new Fr(this.rootInjector)}},Fr=(()=>{class t{rootInjector;contexts=new Map;constructor(e){this.rootInjector=e}onChildOutletCreated(e,i){let r=this.getOrCreateContext(e);r.outlet=i,this.contexts.set(e,r)}onChildOutletDestroyed(e){let i=this.getContext(e);i&&(i.outlet=null,i.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let i=this.getContext(e);return i||(i=new tu(this.rootInjector),this.contexts.set(e,i)),i}getContext(e){return this.contexts.get(e)||null}static \u0275fac=function(i){return new(i||t)(T(ye))};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),nu=class{_root;constructor(n){this._root=n}get root(){return this._root.value}parent(n){let e=this.pathFromRoot(n);return e.length>1?e[e.length-2]:null}children(n){let e=sg(n,this._root);return e?e.children.map(i=>i.value):[]}firstChild(n){let e=sg(n,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(n){let e=cg(n,this._root);return e.length<2?[]:e[e.length-2].children.map(r=>r.value).filter(r=>r!==n)}pathFromRoot(n){return cg(n,this._root).map(e=>e.value)}};function sg(t,n){if(t===n.value)return n;for(let e of n.children){let i=sg(t,e);if(i)return i}return null}function cg(t,n){if(t===n.value)return[n];for(let e of n.children){let i=cg(t,e);if(i.length)return i.unshift(n),i}return[]}var Zt=class{value;children;constructor(n,e){this.value=n,this.children=e}toString(){return`TreeNode(${this.value})`}};function No(t){let n={};return t&&t.children.forEach(e=>n[e.value.outlet]=e),n}var Ns=class extends nu{snapshot;constructor(n,e){super(n),this.snapshot=e,bg(this,n)}toString(){return this.snapshot.toString()}};function sC(t,n){let e=wR(t,n),i=new Ue([new Hi("",{})]),r=new Ue({}),o=new Ue({}),a=new Ue({}),s=new Ue(""),c=new mi(i,r,a,s,o,J,t,e.root);return c.snapshot=e.root,new Ns(new Zt(c,[]),e)}function wR(t,n){let e={},i={},r={},a=new Uo([],e,r,"",i,J,t,null,{},n);return new Os("",new Zt(a,[]))}var mi=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(n,e,i,r,o,a,s,c){this.urlSubject=n,this.paramsSubject=e,this.queryParamsSubject=i,this.fragmentSubject=r,this.dataSubject=o,this.outlet=a,this.component=s,this._futureSnapshot=c,this.title=this.dataSubject?.pipe(X(l=>l[Ls]))??O(void 0),this.url=n,this.params=e,this.queryParams=i,this.fragment=r,this.data=o}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(X(n=>Ar(n))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(X(n=>Ar(n))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function gg(t,n,e="emptyOnly"){let i,{routeConfig:r}=t;return n!==null&&(e==="always"||r?.path===""||!n.component&&!n.routeConfig?.loadComponent)?i={params:v(v({},n.params),t.params),data:v(v({},n.data),t.data),resolve:v(v(v(v({},t.data),n.data),r?.data),t._resolvedData)}:i={params:v({},t.params),data:v({},t.data),resolve:v(v({},t.data),t._resolvedData??{})},r&&lC(r)&&(i.resolve[Ls]=r.title),i}var Uo=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;get title(){return this.data?.[Ls]}constructor(n,e,i,r,o,a,s,c,l,u){this.url=n,this.params=e,this.queryParams=i,this.fragment=r,this.data=o,this.outlet=a,this.component=s,this.routeConfig=c,this._resolve=l,this._environmentInjector=u}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=Ar(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=Ar(this.queryParams),this._queryParamMap}toString(){let n=this.url.map(i=>i.toString()).join("/"),e=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${n}', path:'${e}')`}},Os=class extends nu{url;constructor(n,e){super(e),this.url=n,bg(this,e)}toString(){return cC(this._root)}};function bg(t,n){n.value._routerState=t,n.children.forEach(e=>bg(t,e))}function cC(t){let n=t.children.length>0?` { ${t.children.map(cC).join(", ")} } `:"";return`${t.value}${n}`}function eg(t){if(t.snapshot){let n=t.snapshot,e=t._futureSnapshot;t.snapshot=e,Wn(n.queryParams,e.queryParams)||t.queryParamsSubject.next(e.queryParams),n.fragment!==e.fragment&&t.fragmentSubject.next(e.fragment),Wn(n.params,e.params)||t.paramsSubject.next(e.params),QA(n.url,e.url)||t.urlSubject.next(e.url),Wn(n.data,e.data)||t.dataSubject.next(e.data)}else t.snapshot=t._futureSnapshot,t.dataSubject.next(t._futureSnapshot.data)}function lg(t,n){let e=Wn(t.params,n.params)&&eR(t.url,n.url),i=!t.parent!=!n.parent;return e&&!i&&(!t.parent||lg(t.parent,n.parent))}function lC(t){return typeof t.title=="string"||t.title===null}var dC=new g(""),js=(()=>{class t{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=J;activateEvents=new R;deactivateEvents=new R;attachEvents=new R;detachEvents=new R;routerOutletData=wd();parentContexts=d(Fr);location=d(St);changeDetector=d(We);inputBinder=d(Bs,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(e){if(e.name){let{firstChange:i,previousValue:r}=e.name;if(i)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new D(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new D(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new D(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,i){this.activated=e,this._activatedRoute=i,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,i){if(this.isActivated)throw new D(4013,!1);this._activatedRoute=e;let r=this.location,a=e.snapshot.component,s=this.parentContexts.getOrCreateContext(this.name).children,c=new dg(e,s,r.injector,this.routerOutletData);this.activated=r.createComponent(a,{index:r.length,injector:c,environmentInjector:i}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(i){return new(i||t)};static \u0275dir=S({type:t,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[$e]})}return t})(),dg=class{route;childContexts;parent;outletData;constructor(n,e,i,r){this.route=n,this.childContexts=e,this.parent=i,this.outletData=r}get(n,e){return n===mi?this.route:n===Fr?this.childContexts:n===dC?this.outletData:this.parent.get(n,e)}},Bs=new g(""),vg=(()=>{class t{outletDataSubscriptions=new Map;bindActivatedRouteToOutletComponent(e){this.unsubscribeFromRouteData(e),this.subscribeToRouteData(e)}unsubscribeFromRouteData(e){this.outletDataSubscriptions.get(e)?.unsubscribe(),this.outletDataSubscriptions.delete(e)}subscribeToRouteData(e){let{activatedRoute:i}=e,r=io([i.queryParams,i.params,i.data]).pipe(ct(([o,a,s],c)=>(s=v(v(v({},o),a),s),c===0?O(s):Promise.resolve(s)))).subscribe(o=>{if(!e.isActivated||!e.activatedComponentRef||e.activatedRoute!==i||i.component===null){this.unsubscribeFromRouteData(e);return}let a=l0(i.component);if(!a){this.unsubscribeFromRouteData(e);return}for(let{templateName:s}of a.inputs)e.activatedComponentRef.setInput(s,o[s])});this.outletDataSubscriptions.set(e,r)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=p({token:t,factory:t.\u0275fac})}return t})(),_g=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=E({type:t,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(i,r){i&1&&le(0,"router-outlet")},dependencies:[js],encapsulation:2})}return t})();function yg(t){let n=t.children&&t.children.map(yg),e=n?G(v({},t),{children:n}):v({},t);return!e.component&&!e.loadComponent&&(n||e.loadChildren)&&e.outlet&&e.outlet!==J&&(e.component=_g),e}function CR(t,n,e){let i=Fs(t,n._root,e?e._root:void 0);return new Ns(i,n)}function Fs(t,n,e){if(e&&t.shouldReuseRoute(n.value,e.value.snapshot)){let i=e.value;i._futureSnapshot=n.value;let r=DR(t,n,e);return new Zt(i,r)}else{if(t.shouldAttach(n.value)){let o=t.retrieve(n.value);if(o!==null){let a=o.route;return a.value._futureSnapshot=n.value,a.children=n.children.map(s=>Fs(t,s)),a}}let i=xR(n.value),r=n.children.map(o=>Fs(t,o));return new Zt(i,r)}}function DR(t,n,e){return n.children.map(i=>{for(let r of e.children)if(t.shouldReuseRoute(i.value,r.value.snapshot))return Fs(t,i,r);return Fs(t,i)})}function xR(t){return new mi(new Ue(t.url),new Ue(t.params),new Ue(t.queryParams),new Ue(t.fragment),new Ue(t.data),t.outlet,t.component,t)}var zo=class{redirectTo;navigationBehaviorOptions;constructor(n,e){this.redirectTo=n,this.navigationBehaviorOptions=e}},uC="ngNavigationCancelingError";function iu(t,n){let{redirectTo:e,navigationBehaviorOptions:i}=Lo(n)?{redirectTo:n,navigationBehaviorOptions:void 0}:n,r=fC(!1,wt.Redirect);return r.url=e,r.navigationBehaviorOptions=i,r}function fC(t,n){let e=new Error(`NavigationCancelingError: ${t||""}`);return e[uC]=!0,e.cancellationCode=n,e}function ER(t){return mC(t)&&Lo(t.url)}function mC(t){return!!t&&t[uC]}var ug=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(n,e,i,r,o){this.routeReuseStrategy=n,this.futureState=e,this.currState=i,this.forwardEvent=r,this.inputBindingEnabled=o}activate(n){let e=this.futureState._root,i=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,i,n),eg(this.futureState.root),this.activateChildRoutes(e,i,n)}deactivateChildRoutes(n,e,i){let r=No(e);n.children.forEach(o=>{let a=o.value.outlet;this.deactivateRoutes(o,r[a],i),delete r[a]}),Object.values(r).forEach(o=>{this.deactivateRouteAndItsChildren(o,i)})}deactivateRoutes(n,e,i){let r=n.value,o=e?e.value:null;if(r===o)if(r.component){let a=i.getContext(r.outlet);a&&this.deactivateChildRoutes(n,e,a.children)}else this.deactivateChildRoutes(n,e,i);else o&&this.deactivateRouteAndItsChildren(e,i)}deactivateRouteAndItsChildren(n,e){n.value.component&&this.routeReuseStrategy.shouldDetach(n.value.snapshot)?this.detachAndStoreRouteSubtree(n,e):this.deactivateRouteAndOutlet(n,e)}detachAndStoreRouteSubtree(n,e){let i=e.getContext(n.value.outlet),r=i&&n.value.component?i.children:e,o=No(n);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,r);if(i&&i.outlet){let a=i.outlet.detach(),s=i.children.onOutletDeactivated();this.routeReuseStrategy.store(n.value.snapshot,{componentRef:a,route:n,contexts:s})}}deactivateRouteAndOutlet(n,e){let i=e.getContext(n.value.outlet),r=i&&n.value.component?i.children:e,o=No(n);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,r);i&&(i.outlet&&(i.outlet.deactivate(),i.children.onOutletDeactivated()),i.attachRef=null,i.route=null)}activateChildRoutes(n,e,i){let r=No(e);n.children.forEach(o=>{this.activateRoutes(o,r[o.value.outlet],i),this.forwardEvent(new eu(o.value.snapshot))}),n.children.length&&this.forwardEvent(new Xd(n.value.snapshot))}activateRoutes(n,e,i){let r=n.value,o=e?e.value:null;if(eg(r),r===o)if(r.component){let a=i.getOrCreateContext(r.outlet);this.activateChildRoutes(n,e,a.children)}else this.activateChildRoutes(n,e,i);else if(r.component){let a=i.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let s=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),a.children.onOutletReAttached(s.contexts),a.attachRef=s.componentRef,a.route=s.route.value,a.outlet&&a.outlet.attach(s.componentRef,s.route.value),eg(s.route.value),this.activateChildRoutes(n,null,a.children)}else a.attachRef=null,a.route=r,a.outlet&&a.outlet.activateWith(r,a.injector),this.activateChildRoutes(n,null,a.children)}else this.activateChildRoutes(n,null,i)}},ru=class{path;route;constructor(n){this.path=n,this.route=this.path[this.path.length-1]}},Po=class{component;route;constructor(n,e){this.component=n,this.route=e}};function IR(t,n,e){let i=t._root,r=n?n._root:null;return Ms(i,r,e,[i.value])}function MR(t){let n=t.routeConfig?t.routeConfig.canActivateChild:null;return!n||n.length===0?null:{node:t,guards:n}}function Wo(t,n){let e=Symbol(),i=n.get(t,e);return i===e?typeof t=="function"&&!em(t)?t:n.get(t):i}function Ms(t,n,e,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=No(n);return t.children.forEach(a=>{SR(a,o[a.value.outlet],e,i.concat([a.value]),r),delete o[a.value.outlet]}),Object.entries(o).forEach(([a,s])=>ks(s,e.getContext(a),r)),r}function SR(t,n,e,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=t.value,a=n?n.value:null,s=e?e.getContext(t.value.outlet):null;if(a&&o.routeConfig===a.routeConfig){let c=kR(a,o,o.routeConfig.runGuardsAndResolvers);c?r.canActivateChecks.push(new ru(i)):(o.data=a.data,o._resolvedData=a._resolvedData),o.component?Ms(t,n,s?s.children:null,i,r):Ms(t,n,e,i,r),c&&s&&s.outlet&&s.outlet.isActivated&&r.canDeactivateChecks.push(new Po(s.outlet.component,a))}else a&&ks(n,s,r),r.canActivateChecks.push(new ru(i)),o.component?Ms(t,null,s?s.children:null,i,r):Ms(t,null,e,i,r);return r}function kR(t,n,e){if(typeof e=="function")return Qe(n._environmentInjector,()=>e(t,n));switch(e){case"pathParamsChange":return!Tr(t.url,n.url);case"pathParamsOrQueryParamsChange":return!Tr(t.url,n.url)||!Wn(t.queryParams,n.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!lg(t,n)||!Wn(t.queryParams,n.queryParams);default:return!lg(t,n)}}function ks(t,n,e){let i=No(t),r=t.value;Object.entries(i).forEach(([o,a])=>{r.component?n?ks(a,n.children.getContext(o),e):ks(a,null,e):ks(a,n,e)}),r.component?n&&n.outlet&&n.outlet.isActivated?e.canDeactivateChecks.push(new Po(n.outlet.component,r)):e.canDeactivateChecks.push(new Po(null,r)):e.canDeactivateChecks.push(new Po(null,r))}function Vs(t){return typeof t=="function"}function TR(t){return typeof t=="boolean"}function AR(t){return t&&Vs(t.canLoad)}function RR(t){return t&&Vs(t.canActivate)}function NR(t){return t&&Vs(t.canActivateChild)}function OR(t){return t&&Vs(t.canDeactivate)}function FR(t){return t&&Vs(t.canMatch)}function hC(t){return t instanceof Zn||t?.name==="EmptyError"}var jd=Symbol("INITIAL_VALUE");function $o(){return ct(t=>io(t.map(n=>n.pipe(Ge(1),ht(jd)))).pipe(X(n=>{for(let e of n)if(e!==!0){if(e===jd)return jd;if(e===!1||PR(e))return e}return!0}),ue(n=>n!==jd),Ge(1)))}function PR(t){return Lo(t)||t instanceof zo}function pC(t){return t.aborted?O(void 0).pipe(Ge(1)):new Q(n=>{let e=()=>{n.next(),n.complete()};return t.addEventListener("abort",e),()=>t.removeEventListener("abort",e)})}function gC(t){return qe(pC(t))}function LR(t){return st(n=>{let{targetSnapshot:e,currentSnapshot:i,guards:{canActivateChecks:r,canDeactivateChecks:o}}=n;return o.length===0&&r.length===0?O(G(v({},n),{guardsResult:!0})):jR(o,e,i).pipe(st(a=>a&&TR(a)?BR(e,r,t):O(a)),X(a=>G(v({},n),{guardsResult:a})))})}function jR(t,n,e){return Ie(t).pipe(st(i=>$R(i.component,i.route,e,n)),Kn(i=>i!==!0,!0))}function BR(t,n,e){return Ie(n).pipe(Di(i=>wi(HR(i.route.parent,e),VR(i.route,e),zR(t,i.path),UR(t,i.route))),Kn(i=>i!==!0,!0))}function VR(t,n){return t!==null&&n&&n(new Jd(t)),O(!0)}function HR(t,n){return t!==null&&n&&n(new Kd(t)),O(!0)}function UR(t,n){let e=n.routeConfig?n.routeConfig.canActivate:null;if(!e||e.length===0)return O(!0);let i=e.map(r=>Qn(()=>{let o=n._environmentInjector,a=Wo(r,o),s=RR(a)?a.canActivate(n,t):Qe(o,()=>a(n,t));return Nr(s).pipe(Kn())}));return O(i).pipe($o())}function zR(t,n){let e=n[n.length-1],r=n.slice(0,n.length-1).reverse().map(o=>MR(o)).filter(o=>o!==null).map(o=>Qn(()=>{let a=o.guards.map(s=>{let c=o.node._environmentInjector,l=Wo(s,c),u=NR(l)?l.canActivateChild(e,t):Qe(c,()=>l(e,t));return Nr(u).pipe(Kn())});return O(a).pipe($o())}));return O(r).pipe($o())}function $R(t,n,e,i){let r=n&&n.routeConfig?n.routeConfig.canDeactivate:null;if(!r||r.length===0)return O(!0);let o=r.map(a=>{let s=n._environmentInjector,c=Wo(a,s),l=OR(c)?c.canDeactivate(t,n,e,i):Qe(s,()=>c(t,n,e,i));return Nr(l).pipe(Kn())});return O(o).pipe($o())}function WR(t,n,e,i,r){let o=n.canLoad;if(o===void 0||o.length===0)return O(!0);let a=o.map(s=>{let c=Wo(s,t),l=AR(c)?c.canLoad(n,e):Qe(t,()=>c(n,e)),u=Nr(l);return r?u.pipe(gC(r)):u});return O(a).pipe($o(),bC(i))}function bC(t){return Of(je(n=>{if(typeof n!="boolean")throw iu(t,n)}),X(n=>n===!0))}function GR(t,n,e,i,r,o){let a=n.canMatch;if(!a||a.length===0)return O(!0);let s=a.map(c=>{let l=Wo(c,t),u=FR(l)?l.canMatch(n,e,r):Qe(t,()=>l(n,e,r));return Nr(u).pipe(gC(o))});return O(s).pipe($o(),bC(i))}var ui=class t extends Error{segmentGroup;constructor(n){super(),this.segmentGroup=n||null,Object.setPrototypeOf(this,t.prototype)}},Ps=class t extends Error{urlTree;constructor(n){super(),this.urlTree=n,Object.setPrototypeOf(this,t.prototype)}};function qR(t){throw new D(4e3,!1)}function ZR(t){throw fC(!1,wt.GuardRejected)}var fg=class{urlSerializer;urlTree;constructor(n,e){this.urlSerializer=n,this.urlTree=e}async lineralizeSegments(n,e){let i=[],r=e.root;for(;;){if(i=i.concat(r.segments),r.numberOfChildren===0)return i;if(r.numberOfChildren>1||!r.children[J])throw qR(`${n.redirectTo}`);r=r.children[J]}}async applyRedirectCommands(n,e,i,r,o){let a=await QR(e,r,o);if(a instanceof ln)throw new Ps(a);let s=this.applyRedirectCreateUrlTree(a,this.urlSerializer.parse(a),n,i);if(a[0]==="/")throw new Ps(s);return s}applyRedirectCreateUrlTree(n,e,i,r){let o=this.createSegmentGroup(n,e.root,i,r);return new ln(o,this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(n,e){let i={};return Object.entries(n).forEach(([r,o])=>{if(typeof o=="string"&&o[0]===":"){let s=o.substring(1);i[r]=e[s]}else i[r]=o}),i}createSegmentGroup(n,e,i,r){let o=this.createSegments(n,e.segments,i,r),a={};return Object.entries(e.children).forEach(([s,c])=>{a[s]=this.createSegmentGroup(n,c,i,r)}),new ve(o,a)}createSegments(n,e,i,r){return e.map(o=>o.path[0]===":"?this.findPosParam(n,o,r):this.findOrReturn(o,i))}findPosParam(n,e,i){let r=i[e.path.substring(1)];if(!r)throw new D(4001,!1);return r}findOrReturn(n,e){let i=0;for(let r of e){if(r.path===n.path)return e.splice(i),r;i++}return n}};function QR(t,n,e){if(typeof t=="string")return Promise.resolve(t);let i=t;return Ud(Nr(Qe(e,()=>i(n))))}function YR(t,n){return t.providers&&!t._injector&&(t._injector=So(t.providers,n,`Route: ${t.path}`)),t._injector??n}function Dn(t){return t.outlet||J}function KR(t,n){let e=t.filter(i=>Dn(i)===n);return e.push(...t.filter(i=>Dn(i)!==n)),e}var mg={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function vC(t){return{routeConfig:t.routeConfig,url:t.url,params:t.params,queryParams:t.queryParams,fragment:t.fragment,data:t.data,outlet:t.outlet,title:t.title,paramMap:t.paramMap,queryParamMap:t.queryParamMap}}function XR(t,n,e,i,r,o,a){let s=_C(t,n,e);if(!s.matched)return O(s);let c=vC(o(s));return i=YR(n,i),GR(i,n,e,r,c,a).pipe(X(l=>l===!0?s:v({},mg)))}function _C(t,n,e){if(n.path==="")return n.pathMatch==="full"&&(t.hasChildren()||e.length>0)?v({},mg):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let r=(n.matcher||z0)(e,t,n);if(!r)return v({},mg);let o={};Object.entries(r.posParams??{}).forEach(([s,c])=>{o[s]=c.path});let a=r.consumed.length>0?v(v({},o),r.consumed[r.consumed.length-1].parameters):o;return{matched:!0,consumedSegments:r.consumed,remainingSegments:e.slice(r.consumed.length),parameters:a,positionalParamSegments:r.posParams??{}}}function H0(t,n,e,i,r){return e.length>0&&tN(t,e,i,r)?{segmentGroup:new ve(n,eN(i,new ve(e,t.children))),slicedSegments:[]}:e.length===0&&nN(t,e,i)?{segmentGroup:new ve(t.segments,JR(t,e,i,t.children)),slicedSegments:e}:{segmentGroup:new ve(t.segments,t.children),slicedSegments:e}}function JR(t,n,e,i){let r={};for(let o of e)if(au(t,n,o)&&!i[Dn(o)]){let a=new ve([],{});r[Dn(o)]=a}return v(v({},i),r)}function eN(t,n){let e={};e[J]=n;for(let i of t)if(i.path===""&&Dn(i)!==J){let r=new ve([],{});e[Dn(i)]=r}return e}function tN(t,n,e,i){return e.some(r=>!au(t,n,r)||!(Dn(r)!==J)?!1:!(i!==void 0&&Dn(r)===i))}function nN(t,n,e){return e.some(i=>au(t,n,i))}function au(t,n,e){return(t.hasChildren()||n.length>0)&&e.pathMatch==="full"?!1:e.path===""}function iN(t,n,e){return n.length===0&&!t.children[e]}var hg=class{};async function rN(t,n,e,i,r,o,a="emptyOnly",s){return new pg(t,n,e,i,r,a,o,s).recognize()}var oN=31,pg=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(n,e,i,r,o,a,s,c){this.injector=n,this.configLoader=e,this.rootComponentType=i,this.config=r,this.urlTree=o,this.paramsInheritanceStrategy=a,this.urlSerializer=s,this.abortSignal=c,this.applyRedirects=new fg(this.urlSerializer,this.urlTree)}noMatchError(n){return new D(4002,`'${n.segmentGroup}'`)}async recognize(){let n=H0(this.urlTree.root,[],[],this.config).segmentGroup,{children:e,rootSnapshot:i}=await this.match(n),r=new Zt(i,e),o=new Os("",r),a=tC(i,[],this.urlTree.queryParams,this.urlTree.fragment);return a.queryParams=this.urlTree.queryParams,o.url=this.urlSerializer.serialize(a),{state:o,tree:a}}async match(n){let e=new Uo([],Object.freeze({}),Object.freeze(v({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),J,this.rootComponentType,null,{},this.injector);try{return{children:await this.processSegmentGroup(this.injector,this.config,n,J,e),rootSnapshot:e}}catch(i){if(i instanceof Ps)return this.urlTree=i.urlTree,this.match(i.urlTree.root);throw i instanceof ui?this.noMatchError(i):i}}async processSegmentGroup(n,e,i,r,o){if(i.segments.length===0&&i.hasChildren())return this.processChildren(n,e,i,o);let a=await this.processSegment(n,e,i,i.segments,r,!0,o);return a instanceof Zt?[a]:[]}async processChildren(n,e,i,r){let o=[];for(let c of Object.keys(i.children))c==="primary"?o.unshift(c):o.push(c);let a=[];for(let c of o){let l=i.children[c],u=KR(e,c),f=await this.processSegmentGroup(n,u,l,c,r);a.push(...f)}let s=yC(a);return aN(s),s}async processSegment(n,e,i,r,o,a,s){for(let c of e)try{return await this.processSegmentAgainstRoute(c._injector??n,e,c,i,r,o,a,s)}catch(l){if(l instanceof ui||hC(l))continue;throw l}if(iN(i,r,o))return new hg;throw new ui(i)}async processSegmentAgainstRoute(n,e,i,r,o,a,s,c){if(Dn(i)!==a&&(a===J||!au(r,o,i)))throw new ui(r);if(i.redirectTo===void 0)return this.matchSegmentAgainstRoute(n,r,i,o,a,c);if(this.allowRedirects&&s)return this.expandSegmentAgainstRouteUsingRedirect(n,r,e,i,o,a,c);throw new ui(r)}async expandSegmentAgainstRouteUsingRedirect(n,e,i,r,o,a,s){let{matched:c,parameters:l,consumedSegments:u,positionalParamSegments:f,remainingSegments:m}=_C(e,r,o);if(!c)throw new ui(e);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>oN&&(this.allowRedirects=!1));let h=this.createSnapshot(n,r,o,l,s);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let b=await this.applyRedirects.applyRedirectCommands(u,r.redirectTo,f,vC(h),n),C=await this.applyRedirects.lineralizeSegments(r,b);return this.processSegment(n,i,e,C.concat(m),a,!1,s)}createSnapshot(n,e,i,r,o){let a=new Uo(i,r,Object.freeze(v({},this.urlTree.queryParams)),this.urlTree.fragment,cN(e),Dn(e),e.component??e._loadedComponent??null,e,lN(e),n),s=gg(a,o,this.paramsInheritanceStrategy);return a.params=Object.freeze(s.params),a.data=Object.freeze(s.data),a}async matchSegmentAgainstRoute(n,e,i,r,o,a){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let s=Je=>this.createSnapshot(n,i,Je.consumedSegments,Je.parameters,a),c=await Ud(XR(e,i,r,n,this.urlSerializer,s,this.abortSignal));if(i.path==="**"&&(e.children={}),!c?.matched)throw new ui(e);n=i._injector??n;let{routes:l}=await this.getChildConfig(n,i,r),u=i._loadedInjector??n,{parameters:f,consumedSegments:m,remainingSegments:h}=c,b=this.createSnapshot(n,i,m,f,a),{segmentGroup:C,slicedSegments:I}=H0(e,m,h,l,o);if(I.length===0&&C.hasChildren()){let Je=await this.processChildren(u,l,C,b);return new Zt(b,Je)}if(l.length===0&&I.length===0)return new Zt(b,[]);let A=Dn(i)===o,be=await this.processSegment(u,l,C,I,A?J:o,!0,b);return new Zt(b,be instanceof Zt?[be]:[])}async getChildConfig(n,e,i){if(e.children)return{routes:e.children,injector:n};if(e.loadChildren){if(e._loadedRoutes!==void 0){let o=e._loadedNgModuleFactory;return o&&!e._loadedInjector&&(e._loadedInjector=o.create(n).injector),{routes:e._loadedRoutes,injector:e._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(await Ud(WR(n,e,i,this.urlSerializer,this.abortSignal))){let o=await this.configLoader.loadChildren(n,e);return e._loadedRoutes=o.routes,e._loadedInjector=o.injector,e._loadedNgModuleFactory=o.factory,o}throw ZR(e)}return{routes:[],injector:n}}};function aN(t){t.sort((n,e)=>n.value.outlet===J?-1:e.value.outlet===J?1:n.value.outlet.localeCompare(e.value.outlet))}function sN(t){let n=t.value.routeConfig;return n&&n.path===""}function yC(t){let n=[],e=new Set;for(let i of t){if(!sN(i)){n.push(i);continue}let r=n.find(o=>i.value.routeConfig===o.value.routeConfig);r!==void 0?(r.children.push(...i.children),e.add(r)):n.push(i)}for(let i of e){let r=yC(i.children);n.push(new Zt(i.value,r))}return n.filter(i=>!e.has(i))}function cN(t){return t.data||{}}function lN(t){return t.resolve||{}}function dN(t,n,e,i,r,o,a){return st(async s=>{let{state:c,tree:l}=await rN(t,n,e,i,s.extractedUrl,r,o,a);return G(v({},s),{targetSnapshot:c,urlAfterRedirects:l})})}function uN(t){return st(n=>{let{targetSnapshot:e,guards:{canActivateChecks:i}}=n;if(!i.length)return O(n);let r=new Set(i.map(s=>s.route)),o=new Set;for(let s of r)if(!o.has(s))for(let c of wC(s))o.add(c);let a=0;return Ie(o).pipe(Di(s=>r.has(s)?fN(s,e,t):(s.data=gg(s,s.parent,t).resolve,O(void 0))),je(()=>a++),Wc(1),st(s=>a===o.size?O(n):Te))})}function wC(t){let n=t.children.map(e=>wC(e)).flat();return[t,...n]}function fN(t,n,e){let i=t.routeConfig,r=t._resolve;return i?.title!==void 0&&!lC(i)&&(r[Ls]=i.title),Qn(()=>(t.data=gg(t,t.parent,e).resolve,mN(r,t,n).pipe(X(o=>(t._resolvedData=o,t.data=v(v({},t.data),o),null)))))}function mN(t,n,e){let i=ng(t);if(i.length===0)return O({});let r={};return Ie(i).pipe(st(o=>hN(t[o],n,e).pipe(Kn(),je(a=>{if(a instanceof zo)throw iu(new fi,a);r[o]=a}))),Wc(1),X(()=>r),Ci(o=>hC(o)?Te:sr(o)))}function hN(t,n,e){let i=n._environmentInjector,r=Wo(t,i),o=r.resolve?r.resolve(n,e):Qe(i,()=>r(n,e));return Nr(o)}function U0(t){return ct(n=>{let e=t(n);return e?Ie(e).pipe(X(()=>n)):O(n)})}var wg=(()=>{class t{buildTitle(e){let i,r=e.root;for(;r!==void 0;)i=this.getResolvedTitleForRoute(r)??i,r=r.children.find(o=>o.outlet===J);return i}getResolvedTitleForRoute(e){return e.data[Ls]}static \u0275fac=function(i){return new(i||t)};static \u0275prov=p({token:t,factory:()=>d(CC),providedIn:"root"})}return t})(),CC=(()=>{class t extends wg{title;constructor(e){super(),this.title=e}updateTitle(e){let i=this.buildTitle(e);i!==void 0&&this.title.setTitle(i)}static \u0275fac=function(i){return new(i||t)(T(O0))};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Pr=new g("",{factory:()=>({})}),Lr=new g(""),su=(()=>{class t{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=d(vp);async loadComponent(e,i){if(this.componentLoaders.get(i))return this.componentLoaders.get(i);if(i._loadedComponent)return Promise.resolve(i._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(i);let r=(async()=>{try{let o=await W0(Qe(e,()=>i.loadComponent())),a=await EC(xC(o));return this.onLoadEndListener&&this.onLoadEndListener(i),i._loadedComponent=a,a}finally{this.componentLoaders.delete(i)}})();return this.componentLoaders.set(i,r),r}loadChildren(e,i){if(this.childrenLoaders.get(i))return this.childrenLoaders.get(i);if(i._loadedRoutes)return Promise.resolve({routes:i._loadedRoutes,injector:i._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(i);let r=(async()=>{try{let o=await DC(i,this.compiler,e,this.onLoadEndListener);return i._loadedRoutes=o.routes,i._loadedInjector=o.injector,i._loadedNgModuleFactory=o.factory,o}finally{this.childrenLoaders.delete(i)}})();return this.childrenLoaders.set(i,r),r}static \u0275fac=function(i){return new(i||t)};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();async function DC(t,n,e,i){let r=await W0(Qe(e,()=>t.loadChildren())),o=await EC(xC(r)),a;o instanceof cd||Array.isArray(o)?a=o:a=await n.compileModuleAsync(o),i&&i(t);let s,c,l=!1,u;return Array.isArray(a)?(c=a,l=!0):(s=a.create(e).injector,u=a,c=s.get(Lr,[],{optional:!0,self:!0}).flat()),{routes:c.map(yg),injector:s,factory:u}}function pN(t){return t&&typeof t=="object"&&"default"in t}function xC(t){return pN(t)?t.default:t}async function EC(t){return t}var cu=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=p({token:t,factory:()=>d(gN),providedIn:"root"})}return t})(),gN=(()=>{class t{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,i){return e}static \u0275fac=function(i){return new(i||t)};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Cg=new g(""),Dg=new g("");function IC(t,n,e){let i=t.get(Dg),r=t.get(j);if(!r.startViewTransition||i.skipNextTransition)return i.skipNextTransition=!1,new Promise(l=>setTimeout(l));let o,a=new Promise(l=>{o=l}),s=r.startViewTransition(()=>(o(),bN(t)));s.updateCallbackDone.catch(l=>{}),s.ready.catch(l=>{}),s.finished.catch(l=>{});let{onViewTransitionCreated:c}=i;return c&&Qe(t,()=>c({transition:s,from:n,to:e})),a}function bN(t){return new Promise(n=>{ut({read:()=>setTimeout(n)},{injector:t})})}var vN=()=>{},xg=new g(""),lu=(()=>{class t{currentNavigation=B(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=B(null);events=new x;transitionAbortWithErrorSubject=new x;configLoader=d(su);environmentInjector=d(ye);destroyRef=d(dt);urlSerializer=d(Or);rootContexts=d(Fr);location=d($n);inputBindingEnabled=d(Bs,{optional:!0})!==null;titleStrategy=d(wg);options=d(Pr,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=d(cu);createViewTransition=d(Cg,{optional:!0});navigationErrorHandler=d(xg,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>O(void 0);rootComponentType=null;destroyed=!1;constructor(){let e=r=>this.events.next(new Qd(r)),i=r=>this.events.next(new Yd(r));this.configLoader.onLoadEndListener=i,this.configLoader.onLoadStartListener=e,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(e){let i=++this.navigationId;Pe(()=>{this.transitions?.next(G(v({},e),{extractedUrl:this.urlHandlingStrategy.extract(e.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:i,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(e){return this.transitions=new Ue(null),this.transitions.pipe(ue(i=>i!==null),ct(i=>{let r=!1,o=new AbortController,a=()=>!r&&this.currentTransition?.id===i.id;return O(i).pipe(ct(s=>{if(this.navigationId>i.id)return this.cancelNavigationTransition(i,"",wt.SupersededByNewNavigation),Te;this.currentTransition=i;let c=this.lastSuccessfulNavigation();this.currentNavigation.set({id:s.id,initialUrl:s.rawUrl,extractedUrl:s.extractedUrl,targetBrowserUrl:typeof s.extras.browserUrl=="string"?this.urlSerializer.parse(s.extras.browserUrl):s.extras.browserUrl,trigger:s.source,extras:s.extras,previousNavigation:c?G(v({},c),{previousNavigation:null}):null,abort:()=>o.abort(),routesRecognizeHandler:s.routesRecognizeHandler,beforeActivateHandler:s.beforeActivateHandler});let l=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),u=s.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!l&&u!=="reload")return this.events.next(new Gn(s.id,this.urlSerializer.serialize(s.rawUrl),"",jo.IgnoredSameUrlNavigation)),s.resolve(!1),Te;if(this.urlHandlingStrategy.shouldProcessUrl(s.rawUrl))return O(s).pipe(ct(f=>(this.events.next(new Ui(f.id,this.urlSerializer.serialize(f.extractedUrl),f.source,f.restoredState)),f.id!==this.navigationId?Te:Promise.resolve(f))),dN(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy,o.signal),je(f=>{i.targetSnapshot=f.targetSnapshot,i.urlAfterRedirects=f.urlAfterRedirects,this.currentNavigation.update(m=>(m.finalUrl=f.urlAfterRedirects,m)),this.events.next(new Rs)}),ct(f=>Ie(i.routesRecognizeHandler.deferredHandle??O(void 0)).pipe(X(()=>f))),je(()=>{let f=new As(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(f)}));if(l&&this.urlHandlingStrategy.shouldProcessUrl(s.currentRawUrl)){let{id:f,extractedUrl:m,source:h,restoredState:b,extras:C}=s,I=new Ui(f,this.urlSerializer.serialize(m),h,b);this.events.next(I);let A=sC(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=i=G(v({},s),{targetSnapshot:A,urlAfterRedirects:m,extras:G(v({},C),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(be=>(be.finalUrl=m,be)),O(i)}else return this.events.next(new Gn(s.id,this.urlSerializer.serialize(s.extractedUrl),"",jo.IgnoredByUrlHandlingStrategy)),s.resolve(!1),Te}),X(s=>{let c=new Wd(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);return this.events.next(c),this.currentTransition=i=G(v({},s),{guards:IR(s.targetSnapshot,s.currentSnapshot,this.rootContexts)}),i}),LR(s=>this.events.next(s)),ct(s=>{if(i.guardsResult=s.guardsResult,s.guardsResult&&typeof s.guardsResult!="boolean")throw iu(this.urlSerializer,s.guardsResult);let c=new Gd(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot,!!s.guardsResult);if(this.events.next(c),!a())return Te;if(!s.guardsResult)return this.cancelNavigationTransition(s,"",wt.GuardRejected),Te;if(s.guards.canActivateChecks.length===0)return O(s);let l=new qd(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);if(this.events.next(l),!a())return Te;let u=!1;return O(s).pipe(uN(this.paramsInheritanceStrategy),je({next:()=>{u=!0;let f=new Zd(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(f)},complete:()=>{u||this.cancelNavigationTransition(s,"",wt.NoDataFromResolver)}}))}),U0(s=>{let c=u=>{let f=[];if(u.routeConfig?._loadedComponent)u.component=u.routeConfig?._loadedComponent;else if(u.routeConfig?.loadComponent){let m=u._environmentInjector;f.push(this.configLoader.loadComponent(m,u.routeConfig).then(h=>{u.component=h}))}for(let m of u.children)f.push(...c(m));return f},l=c(s.targetSnapshot.root);return l.length===0?O(s):Ie(Promise.all(l).then(()=>s))}),U0(()=>this.afterPreactivation()),ct(()=>{let{currentSnapshot:s,targetSnapshot:c}=i,l=this.createViewTransition?.(this.environmentInjector,s.root,c.root);return l?Ie(l).pipe(X(()=>i)):O(i)}),Ge(1),ct(s=>{let c=CR(e.routeReuseStrategy,s.targetSnapshot,s.currentRouterState);this.currentTransition=i=s=G(v({},s),{targetRouterState:c}),this.currentNavigation.update(u=>(u.targetRouterState=c,u)),this.events.next(new Vo);let l=i.beforeActivateHandler.deferredHandle;return l?Ie(l.then(()=>s)):O(s)}),je(s=>{new ug(e.routeReuseStrategy,i.targetRouterState,i.currentRouterState,c=>this.events.next(c),this.inputBindingEnabled).activate(this.rootContexts),a()&&(r=!0,this.currentNavigation.update(c=>(c.abort=vN,c)),this.lastSuccessfulNavigation.set(Pe(this.currentNavigation)),this.events.next(new xn(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects))),this.titleStrategy?.updateTitle(s.targetRouterState.snapshot),s.resolve(!0))}),qe(pC(o.signal).pipe(ue(()=>!r&&!i.targetRouterState),je(()=>{this.cancelNavigationTransition(i,o.signal.reason+"",wt.Aborted)}))),je({complete:()=>{r=!0}}),qe(this.transitionAbortWithErrorSubject.pipe(je(s=>{throw s}))),xi(()=>{o.abort(),r||this.cancelNavigationTransition(i,"",wt.SupersededByNewNavigation),this.currentTransition?.id===i.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),Ci(s=>{if(r=!0,this.destroyed)return i.resolve(!1),Te;if(mC(s))this.events.next(new cn(i.id,this.urlSerializer.serialize(i.extractedUrl),s.message,s.cancellationCode)),ER(s)?this.events.next(new Ho(s.url,s.navigationBehaviorOptions)):i.resolve(!1);else{let c=new Rr(i.id,this.urlSerializer.serialize(i.extractedUrl),s,i.targetSnapshot??void 0);try{let l=Qe(this.environmentInjector,()=>this.navigationErrorHandler?.(c));if(l instanceof zo){let{message:u,cancellationCode:f}=iu(this.urlSerializer,l);this.events.next(new cn(i.id,this.urlSerializer.serialize(i.extractedUrl),u,f)),this.events.next(new Ho(l.redirectTo,l.navigationBehaviorOptions))}else throw this.events.next(c),s}catch(l){this.options.resolveNavigationPromiseOnError?i.resolve(!1):i.reject(l)}}return Te}))}))}cancelNavigationTransition(e,i,r){let o=new cn(e.id,this.urlSerializer.serialize(e.extractedUrl),i,r);this.events.next(o),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),i=Pe(this.currentNavigation),r=i?.targetBrowserUrl??i?.extractedUrl;return e.toString()!==r?.toString()&&!i?.extras.skipLocationChange}static \u0275fac=function(i){return new(i||t)};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function _N(t){return t!==Fo}var MC=new g("");var SC=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=p({token:t,factory:()=>d(yN),providedIn:"root"})}return t})(),ou=class{shouldDetach(n){return!1}store(n,e){}shouldAttach(n){return!1}retrieve(n){return null}shouldReuseRoute(n,e){return n.routeConfig===e.routeConfig}shouldDestroyInjector(n){return!0}},yN=(()=>{class t extends ou{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Re(t)))(r||t)}})();static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Eg=(()=>{class t{urlSerializer=d(Or);options=d(Pr,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=d($n);urlHandlingStrategy=d(cu);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new ln;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:e,initialUrl:i,targetBrowserUrl:r}){let o=e!==void 0?this.urlHandlingStrategy.merge(e,i):i,a=r??o;return a instanceof ln?this.urlSerializer.serialize(a):a}commitTransition({targetRouterState:e,finalUrl:i,initialUrl:r}){i&&e?(this.currentUrlTree=i,this.rawUrlTree=this.urlHandlingStrategy.merge(i,r),this.routerState=e):this.rawUrlTree=r}routerState=sC(null,d(ye));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static \u0275fac=function(i){return new(i||t)};static \u0275prov=p({token:t,factory:()=>d(wN),providedIn:"root"})}return t})(),wN=(()=>{class t extends Eg{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(i=>{i.type==="popstate"&&setTimeout(()=>{e(i.url,i.state,"popstate",{replaceUrl:!0})})})}handleRouterEvent(e,i){e instanceof Ui?this.updateStateMemento():e instanceof Gn?this.commitTransition(i):e instanceof As?this.urlUpdateStrategy==="eager"&&(i.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(i),i)):e instanceof Vo?(this.commitTransition(i),this.urlUpdateStrategy==="deferred"&&!i.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(i),i)):e instanceof cn&&!aC(e)?this.restoreHistory(i):e instanceof Rr?this.restoreHistory(i,!0):e instanceof xn&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,{extras:i,id:r}){let{replaceUrl:o,state:a}=i;if(this.location.isCurrentPathEqualTo(e)||o){let s=this.browserPageId,c=v(v({},a),this.generateNgRouterState(r,s));this.location.replaceState(e,"",c)}else{let s=v(v({},a),this.generateNgRouterState(r,this.browserPageId+1));this.location.go(e,"",s)}}restoreHistory(e,i=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,o=this.currentPageId-r;o!==0?this.location.historyGo(o):this.getCurrentUrlTree()===e.finalUrl&&o===0&&(this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(i&&this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:e}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,i){return this.canceledNavigationResolution==="computed"?{navigationId:e,\u0275routerPageId:i}:{navigationId:e}}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Re(t)))(r||t)}})();static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function du(t,n){t.events.pipe(ue(e=>e instanceof xn||e instanceof cn||e instanceof Rr||e instanceof Gn),X(e=>e instanceof xn||e instanceof Gn?0:(e instanceof cn?e.code===wt.Redirect||e.code===wt.SupersededByNewNavigation:!1)?2:1),ue(e=>e!==2),Ge(1)).subscribe(()=>{n()})}var Lt=(()=>{class t{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=d(dd);stateManager=d(Eg);options=d(Pr,{optional:!0})||{};pendingTasks=d(ii);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=d(lu);urlSerializer=d(Or);location=d($n);urlHandlingStrategy=d(cu);injector=d(ye);_events=new x;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=d(SC);injectorCleanup=d(MC,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=d(Lr,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!d(Bs,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:e=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new se;subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(i=>{try{let r=this.navigationTransitions.currentTransition,o=Pe(this.navigationTransitions.currentNavigation);if(r!==null&&o!==null){if(this.stateManager.handleRouterEvent(i,o),i instanceof cn&&i.code!==wt.Redirect&&i.code!==wt.SupersededByNewNavigation)this.navigated=!0;else if(i instanceof xn)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(i instanceof Ho){let a=i.navigationBehaviorOptions,s=this.urlHandlingStrategy.merge(i.url,r.currentRawUrl),c=v({scroll:r.extras.scroll,browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||_N(r.source)},a);this.scheduleNavigation(s,Fo,null,c,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}yR(i)&&this._events.next(i)}catch(r){this.navigationTransitions.transitionAbortWithErrorSubject.next(r)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),Fo,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,i,r,o)=>{this.navigateToSyncWithBrowser(e,r,i,o)})}navigateToSyncWithBrowser(e,i,r,o){let a=r?.navigationId?r:null;if(r){let c=v({},r);delete c.navigationId,delete c.\u0275routerPageId,Object.keys(c).length!==0&&(o.state=c)}let s=this.parseUrl(e);this.scheduleNavigation(s,i,a,o).catch(c=>{this.disposed||this.injector.get($t)(c)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return Pe(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map(yg),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,i={}){let{relativeTo:r,queryParams:o,fragment:a,queryParamsHandling:s,preserveFragment:c}=i,l=c?this.currentUrlTree.fragment:a,u=null;switch(s??this.options.defaultQueryParamsHandling){case"merge":u=v(v({},this.currentUrlTree.queryParams),o);break;case"preserve":u=this.currentUrlTree.queryParams;break;default:u=o||null}u!==null&&(u=this.removeEmptyProps(u));let f;try{let m=r?r.snapshot:this.routerState.snapshot.root;f=nC(m)}catch{(typeof e[0]!="string"||e[0][0]!=="/")&&(e=[]),f=this.currentUrlTree.root}return iC(f,e,u,l??null,this.urlSerializer)}navigateByUrl(e,i={skipLocationChange:!1}){let r=Lo(e)?e:this.parseUrl(e),o=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(o,Fo,null,i)}navigate(e,i={skipLocationChange:!1}){return CN(e),this.navigateByUrl(this.createUrlTree(e,i),i)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch{return this.console.warn(Yt(4018,!1)),this.urlSerializer.parse("/")}}isActive(e,i){let r;if(i===!0?r=v({},q0):i===!1?r=v({},ig):r=v(v({},ig),i),Lo(e))return P0(this.currentUrlTree,e,r);let o=this.parseUrl(e);return P0(this.currentUrlTree,o,r)}removeEmptyProps(e){return Object.entries(e).reduce((i,[r,o])=>(o!=null&&(i[r]=o),i),{})}scheduleNavigation(e,i,r,o,a){if(this.disposed)return Promise.resolve(!1);let s,c,l;a?(s=a.resolve,c=a.reject,l=a.promise):l=new Promise((f,m)=>{s=f,c=m});let u=this.pendingTasks.add();return du(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(u))}),this.navigationTransitions.handleNavigationRequest({source:i,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:o,resolve:s,reject:c,promise:l,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),l.catch(Promise.reject.bind(Promise))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function CN(t){for(let n=0;n<t.length;n++)if(t[n]==null)throw new D(4008,!1)}var Hs=class{};var kC=(()=>{class t{router;injector;preloadingStrategy;loader;subscription;constructor(e,i,r,o){this.router=e,this.injector=i,this.preloadingStrategy=r,this.loader=o}setUpPreloading(){this.subscription=this.router.events.pipe(ue(e=>e instanceof xn),Di(()=>this.preload())).subscribe(()=>{})}preload(){return this.processRoutes(this.injector,this.router.config)}ngOnDestroy(){this.subscription?.unsubscribe()}processRoutes(e,i){let r=[];for(let o of i){o.providers&&!o._injector&&(o._injector=So(o.providers,e,""));let a=o._injector??e;o._loadedNgModuleFactory&&!o._loadedInjector&&(o._loadedInjector=o._loadedNgModuleFactory.create(a).injector);let s=o._loadedInjector??a;(o.loadChildren&&!o._loadedRoutes&&o.canLoad===void 0||o.loadComponent&&!o._loadedComponent)&&r.push(this.preloadConfig(a,o)),(o.children||o._loadedRoutes)&&r.push(this.processRoutes(s,o.children??o._loadedRoutes))}return Ie(r).pipe(yi())}preloadConfig(e,i){return this.preloadingStrategy.preload(i,()=>{if(e.destroyed)return O(null);let r;i.loadChildren&&i.canLoad===void 0?r=Ie(this.loader.loadChildren(e,i)):r=O(null);let o=r.pipe(st(a=>a===null?O(void 0):(i._loadedRoutes=a.routes,i._loadedInjector=a.injector,i._loadedNgModuleFactory=a.factory,this.processRoutes(a.injector??e,a.routes))));if(i.loadComponent&&!i._loadedComponent){let a=this.loader.loadComponent(e,i);return Ie([o,a]).pipe(yi())}else return o})}static \u0275fac=function(i){return new(i||t)(T(Lt),T(ye),T(Hs),T(su))};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),TC=new g(""),xN=(()=>{class t{options;routerEventsSubscription;scrollEventsSubscription;lastId=0;lastSource=Fo;restoredId=0;store={};urlSerializer=d(Or);zone=d(k);viewportScroller=d(Rp);transitions=d(lu);constructor(e){this.options=e,this.options.scrollPositionRestoration||="disabled",this.options.anchorScrolling||="disabled"}init(){this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.setHistoryScrollRestoration("manual"),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.transitions.events.subscribe(e=>{e instanceof Ui?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=e.navigationTrigger,this.restoredId=e.restoredState?e.restoredState.navigationId:0):e instanceof xn?(this.lastId=e.id,this.scheduleScrollEvent(e,this.urlSerializer.parse(e.urlAfterRedirects).fragment)):e instanceof Gn&&e.code===jo.IgnoredSameUrlNavigation&&(this.lastSource=void 0,this.restoredId=0,this.scheduleScrollEvent(e,this.urlSerializer.parse(e.url).fragment))})}consumeScrollEvents(){return this.transitions.events.subscribe(e=>{if(!(e instanceof Bo)||e.scrollBehavior==="manual")return;let i={behavior:"instant"};e.position?this.options.scrollPositionRestoration==="top"?this.viewportScroller.scrollToPosition([0,0],i):this.options.scrollPositionRestoration==="enabled"&&this.viewportScroller.scrollToPosition(e.position,i):e.anchor&&this.options.anchorScrolling==="enabled"?this.viewportScroller.scrollToAnchor(e.anchor):this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.scrollToPosition([0,0])})}scheduleScrollEvent(e,i){let r=Pe(this.transitions.currentNavigation)?.extras.scroll;this.zone.runOutsideAngular(async()=>{await new Promise(o=>{setTimeout(o),typeof requestAnimationFrame<"u"&&requestAnimationFrame(o)}),this.zone.run(()=>{this.transitions.events.next(new Bo(e,this.lastSource==="popstate"?this.store[this.restoredId]:null,i,r))})})}ngOnDestroy(){this.routerEventsSubscription?.unsubscribe(),this.scrollEventsSubscription?.unsubscribe()}static \u0275fac=function(i){sp()};static \u0275prov=p({token:t,factory:t.\u0275fac})}return t})();function Mg(t,...n){return An([{provide:Lr,multi:!0,useValue:t},[],{provide:mi,useFactory:AC},{provide:fs,multi:!0,useFactory:RC},n.map(e=>e.\u0275providers)])}function AC(){return d(Lt).routerState.root}function Us(t,n){return{\u0275kind:t,\u0275providers:n}}function RC(){let t=d(q);return n=>{let e=t.get(Gt);if(n!==e.components[0])return;let i=t.get(Lt),r=t.get(NC);t.get(Sg)===1&&i.initialNavigation(),t.get(PC,null,{optional:!0})?.setUpPreloading(),t.get(TC,null,{optional:!0})?.init(),i.resetRootComponentType(e.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var NC=new g("",{factory:()=>new x}),Sg=new g("",{factory:()=>1});function OC(){let t=[{provide:Ql,useValue:!0},{provide:Sg,useValue:0},fd(()=>{let n=d(q);return n.get(xp,Promise.resolve()).then(()=>new Promise(i=>{let r=n.get(Lt),o=n.get(NC);du(r,()=>{i(!0)}),n.get(lu).afterPreactivation=()=>(i(!0),o.closed?O(void 0):o),r.initialNavigation()}))})];return Us(2,t)}function FC(){let t=[fd(()=>{d(Lt).setUpLocationChangeListener()}),{provide:Sg,useValue:2}];return Us(3,t)}var PC=new g("");function LC(t){return Us(0,[{provide:PC,useExisting:kC},{provide:Hs,useExisting:t}])}function jC(){return Us(8,[vg,{provide:Bs,useExisting:vg}])}function BC(t){Hn("NgRouterViewTransitions");let n=[{provide:Cg,useValue:IC},{provide:Dg,useValue:v({skipNextTransition:!!t?.skipInitialTransition},t)}];return Us(9,n)}var VC=[$n,{provide:Or,useClass:fi},Lt,Fr,{provide:mi,useFactory:AC},su,[]],kg=(()=>{class t{constructor(){}static forRoot(e,i){return{ngModule:t,providers:[VC,[],{provide:Lr,multi:!0,useValue:e},[],i?.errorHandler?{provide:xg,useValue:i.errorHandler}:[],{provide:Pr,useValue:i||{}},i?.useHash?IN():MN(),EN(),i?.preloadingStrategy?LC(i.preloadingStrategy).\u0275providers:[],i?.initialNavigation?SN(i):[],i?.bindToComponentInputs?jC().\u0275providers:[],i?.enableViewTransitions?BC().\u0275providers:[],kN()]}}static forChild(e){return{ngModule:t,providers:[{provide:Lr,multi:!0,useValue:e}]}}static \u0275fac=function(i){return new(i||t)};static \u0275mod=V({type:t});static \u0275inj=P({})}return t})();function EN(){return{provide:TC,useFactory:()=>{let t=d(Rp),n=d(Pr);return n.scrollOffset&&t.setOffset(n.scrollOffset),new xN(n)}}}function IN(){return{provide:di,useClass:Mp}}function MN(){return{provide:di,useClass:Ed}}function SN(t){return[t.initialNavigation==="disabled"?FC().\u0275providers:[],t.initialNavigation==="enabledBlocking"?OC().\u0275providers:[]]}var Ig=new g("");function kN(){return[{provide:Ig,useFactory:RC},{provide:fs,multi:!0,useExisting:Ig}]}var AN=new g("cdk-dir-doc",{providedIn:"root",factory:()=>d(j)}),RN=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function HC(t){let n=t?.toLowerCase()||"";return n==="auto"&&typeof navigator<"u"&&navigator?.language?RN.test(navigator.language)?"rtl":"ltr":n==="rtl"?"rtl":"ltr"}var jt=(()=>{class t{get value(){return this.valueSignal()}valueSignal=B("ltr");change=new R;constructor(){let e=d(AN,{optional:!0});if(e){let i=e.body?e.body.dir:null,r=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(HC(i||r||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(i){return new(i||t)};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var ge=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=V({type:t});static \u0275inj=P({})}return t})();var NN=["*"];var ON=[[["","mat-card-avatar",""],["","matCardAvatar",""]],[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],"*"],FN=["[mat-card-avatar], [matCardAvatar]",`mat-card-title, mat-card-subtitle,
      [mat-card-title], [mat-card-subtitle],
      [matCardTitle], [matCardSubtitle]`,"*"],PN=new g("MAT_CARD_CONFIG"),zi=(()=>{class t{appearance;constructor(){let e=d(PN,{optional:!0});this.appearance=e?.appearance||"raised"}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=E({type:t,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(i,r){i&2&&W("mat-mdc-card-outlined",r.appearance==="outlined")("mdc-card--outlined",r.appearance==="outlined")("mat-mdc-card-filled",r.appearance==="filled")("mdc-card--filled",r.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:NN,decls:1,vars:0,template:function(i,r){i&1&&(xe(),K(0))},styles:[`.mat-mdc-card {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  border-style: solid;
  border-width: 0;
  background-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-elevated-container-elevation, var(--mat-sys-level1));
}
.mat-mdc-card::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: solid 1px transparent;
  content: "";
  display: block;
  pointer-events: none;
  box-sizing: border-box;
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
}

.mat-mdc-card-outlined {
  background-color: var(--mat-card-outlined-container-color, var(--mat-sys-surface));
  border-radius: var(--mat-card-outlined-container-shape, var(--mat-sys-corner-medium));
  border-width: var(--mat-card-outlined-outline-width, 1px);
  border-color: var(--mat-card-outlined-outline-color, var(--mat-sys-outline-variant));
  box-shadow: var(--mat-card-outlined-container-elevation, var(--mat-sys-level0));
}
.mat-mdc-card-outlined::after {
  border: none;
}

.mat-mdc-card-filled {
  background-color: var(--mat-card-filled-container-color, var(--mat-sys-surface-container-highest));
  border-radius: var(--mat-card-filled-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-filled-container-elevation, var(--mat-sys-level0));
}

.mdc-card__media {
  position: relative;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.mdc-card__media::before {
  display: block;
  content: "";
}
.mdc-card__media:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.mdc-card__media:last-child {
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
}

.mat-mdc-card-actions {
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  padding: 8px;
}

.mat-mdc-card-title {
  font-family: var(--mat-card-title-text-font, var(--mat-sys-title-large-font));
  line-height: var(--mat-card-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-size: var(--mat-card-title-text-size, var(--mat-sys-title-large-size));
  letter-spacing: var(--mat-card-title-text-tracking, var(--mat-sys-title-large-tracking));
  font-weight: var(--mat-card-title-text-weight, var(--mat-sys-title-large-weight));
}

.mat-mdc-card-subtitle {
  color: var(--mat-card-subtitle-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-card-subtitle-text-font, var(--mat-sys-title-medium-font));
  line-height: var(--mat-card-subtitle-text-line-height, var(--mat-sys-title-medium-line-height));
  font-size: var(--mat-card-subtitle-text-size, var(--mat-sys-title-medium-size));
  letter-spacing: var(--mat-card-subtitle-text-tracking, var(--mat-sys-title-medium-tracking));
  font-weight: var(--mat-card-subtitle-text-weight, var(--mat-sys-title-medium-weight));
}

.mat-mdc-card-title,
.mat-mdc-card-subtitle {
  display: block;
  margin: 0;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle {
  padding: 16px 16px 0;
}

.mat-mdc-card-header {
  display: flex;
  padding: 16px 16px 0;
}

.mat-mdc-card-content {
  display: block;
  padding: 0 16px;
}
.mat-mdc-card-content:first-child {
  padding-top: 16px;
}
.mat-mdc-card-content:last-child {
  padding-bottom: 16px;
}

.mat-mdc-card-title-group {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.mat-mdc-card-avatar {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-bottom: 16px;
  object-fit: cover;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title {
  line-height: normal;
}

.mat-mdc-card-sm-image {
  width: 80px;
  height: 80px;
}

.mat-mdc-card-md-image {
  width: 112px;
  height: 112px;
}

.mat-mdc-card-lg-image {
  width: 152px;
  height: 152px;
}

.mat-mdc-card-xl-image {
  width: 240px;
  height: 240px;
}

.mat-mdc-card-subtitle ~ .mat-mdc-card-title,
.mat-mdc-card-title ~ .mat-mdc-card-subtitle,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-title-group .mat-mdc-card-title,
.mat-mdc-card-title-group .mat-mdc-card-subtitle {
  padding-top: 0;
}

.mat-mdc-card-content > :last-child:not(.mat-mdc-card-footer) {
  margin-bottom: 0;
}

.mat-mdc-card-actions-align-end {
  justify-content: flex-end;
}
`],encapsulation:2,changeDetection:0})}return t})(),uu=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=S({type:t,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-mdc-card-title"]})}return t})();var $i=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=S({type:t,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"]})}return t})(),UC=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=S({type:t,selectors:[["mat-card-subtitle"],["","mat-card-subtitle",""],["","matCardSubtitle",""]],hostAttrs:[1,"mat-mdc-card-subtitle"]})}return t})();var Wi=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=E({type:t,selectors:[["mat-card-header"]],hostAttrs:[1,"mat-mdc-card-header"],ngContentSelectors:FN,decls:4,vars:0,consts:[[1,"mat-mdc-card-header-text"]],template:function(i,r){i&1&&(xe(ON),K(0),Ft(1,"div",0),K(2,1),Pt(),K(3,2))},encapsulation:2,changeDetection:0})}return t})();var zC=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=S({type:t,selectors:[["","mat-card-avatar",""],["","matCardAvatar",""]],hostAttrs:[1,"mat-mdc-card-avatar"]})}return t})();var $C=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=V({type:t});static \u0275inj=P({imports:[ge]})}return t})();function zs(t){return t.buttons===0||t.detail===0}function $s(t){let n=t.touches&&t.touches[0]||t.changedTouches&&t.changedTouches[0];return!!n&&n.identifier===-1&&(n.radiusX==null||n.radiusX===1)&&(n.radiusY==null||n.radiusY===1)}var Tg;function WC(){if(Tg==null){let t=typeof document<"u"?document.head:null;Tg=!!(t&&(t.createShadowRoot||t.attachShadow))}return Tg}function Ag(t){if(WC()){let n=t.getRootNode?t.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&n instanceof ShadowRoot)return n}return null}function Go(){let t=typeof document<"u"&&document?document.activeElement:null;for(;t&&t.shadowRoot;){let n=t.shadowRoot.activeElement;if(n===t)break;t=n}return t}function Bt(t){return t.composedPath?t.composedPath()[0]:t.target}var Rg;try{Rg=typeof Intl<"u"&&Intl.v8BreakIterator}catch{Rg=!1}var de=(()=>{class t{_platformId=d(Er);isBrowser=this._platformId?h0(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||Rg)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Ws;function GC(){if(Ws==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>Ws=!0}))}finally{Ws=Ws||!1}return Ws}function qo(t){return GC()?t:!!t.capture}function qn(t,n=0){return qC(t)?Number(t):arguments.length===2?n:0}function qC(t){return!isNaN(parseFloat(t))&&!isNaN(Number(t))}function At(t){return t instanceof F?t.nativeElement:t}var ZC=new g("cdk-input-modality-detector-options"),QC={ignoreKeys:[18,17,224,91,16]},YC=650,Ng={passive:!0,capture:!0},KC=(()=>{class t{_platform=d(de);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new Ue(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(i=>i===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=Bt(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<YC||(this._modality.next(zs(e)?"keyboard":"mouse"),this._mostRecentTarget=Bt(e))};_onTouchstart=e=>{if($s(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=Bt(e)};constructor(){let e=d(k),i=d(j),r=d(ZC,{optional:!0});if(this._options=v(v({},QC),r),this.modalityDetected=this._modality.pipe(cr(1)),this.modalityChanged=this.modalityDetected.pipe($c()),this._platform.isBrowser){let o=d(ze).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[o.listen(i,"keydown",this._onKeydown,Ng),o.listen(i,"mousedown",this._onMousedown,Ng),o.listen(i,"touchstart",this._onTouchstart,Ng)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static \u0275fac=function(i){return new(i||t)};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Gs=(function(t){return t[t.IMMEDIATE=0]="IMMEDIATE",t[t.EVENTUAL=1]="EVENTUAL",t})(Gs||{}),XC=new g("cdk-focus-monitor-default-options"),fu=qo({passive:!0,capture:!0}),jr=(()=>{class t{_ngZone=d(k);_platform=d(de);_inputModalityDetector=d(KC);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=d(j);_stopInputModalityDetector=new x;constructor(){let e=d(XC,{optional:!0});this._detectionMode=e?.detectionMode||Gs.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let i=Bt(e);for(let r=i;r;r=r.parentElement)e.type==="focus"?this._onFocus(e,r):this._onBlur(e,r)};monitor(e,i=!1){let r=At(e);if(!this._platform.isBrowser||r.nodeType!==1)return O();let o=Ag(r)||this._document,a=this._elementInfo.get(r);if(a)return i&&(a.checkChildren=!0),a.subject;let s={checkChildren:i,subject:new x,rootNode:o};return this._elementInfo.set(r,s),this._registerGlobalListeners(s),s.subject}stopMonitoring(e){let i=At(e),r=this._elementInfo.get(i);r&&(r.subject.complete(),this._setClasses(i),this._elementInfo.delete(i),this._removeGlobalListeners(r))}focusVia(e,i,r){let o=At(e),a=this._document.activeElement;o===a?this._getClosestElementsInfo(o).forEach(([s,c])=>this._originChanged(s,i,c)):(this._setOrigin(i),typeof o.focus=="function"&&o.focus(r))}ngOnDestroy(){this._elementInfo.forEach((e,i)=>this.stopMonitoring(i))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===Gs.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,i){e.classList.toggle("cdk-focused",!!i),e.classList.toggle("cdk-touch-focused",i==="touch"),e.classList.toggle("cdk-keyboard-focused",i==="keyboard"),e.classList.toggle("cdk-mouse-focused",i==="mouse"),e.classList.toggle("cdk-program-focused",i==="program")}_setOrigin(e,i=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&i,this._detectionMode===Gs.IMMEDIATE){clearTimeout(this._originTimeoutId);let r=this._originFromTouchInteraction?YC:1;this._originTimeoutId=setTimeout(()=>this._origin=null,r)}})}_onFocus(e,i){let r=this._elementInfo.get(i),o=Bt(e);!r||!r.checkChildren&&i!==o||this._originChanged(i,this._getFocusOrigin(o),r)}_onBlur(e,i){let r=this._elementInfo.get(i);!r||r.checkChildren&&e.relatedTarget instanceof Node&&i.contains(e.relatedTarget)||(this._setClasses(i),this._emitOrigin(r,null))}_emitOrigin(e,i){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(i))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let i=e.rootNode,r=this._rootNodeFocusListenerCount.get(i)||0;r||this._ngZone.runOutsideAngular(()=>{i.addEventListener("focus",this._rootNodeFocusAndBlurListener,fu),i.addEventListener("blur",this._rootNodeFocusAndBlurListener,fu)}),this._rootNodeFocusListenerCount.set(i,r+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(qe(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(e){let i=e.rootNode;if(this._rootNodeFocusListenerCount.has(i)){let r=this._rootNodeFocusListenerCount.get(i);r>1?this._rootNodeFocusListenerCount.set(i,r-1):(i.removeEventListener("focus",this._rootNodeFocusAndBlurListener,fu),i.removeEventListener("blur",this._rootNodeFocusAndBlurListener,fu),this._rootNodeFocusListenerCount.delete(i))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,i,r){this._setClasses(e,i),this._emitOrigin(r,i),this._lastFocusOrigin=i}_getClosestElementsInfo(e){let i=[];return this._elementInfo.forEach((r,o)=>{(o===e||r.checkChildren&&o.contains(e))&&i.push([o,r])}),i}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:i,mostRecentModality:r}=this._inputModalityDetector;if(r!=="mouse"||!i||i===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let o=e.labels;if(o){for(let a=0;a<o.length;a++)if(o[a].contains(i))return!0}return!1}static \u0275fac=function(i){return new(i||t)};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Og=(()=>{class t{_elementRef=d(F);_focusMonitor=d(jr);_monitorSubscription;_focusOrigin=null;cdkFocusChange=new R;constructor(){}get focusOrigin(){return this._focusOrigin}ngAfterViewInit(){let e=this._elementRef.nativeElement;this._monitorSubscription=this._focusMonitor.monitor(e,e.nodeType===1&&e.hasAttribute("cdkMonitorSubtreeFocus")).subscribe(i=>{this._focusOrigin=i,this.cdkFocusChange.emit(i)})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._monitorSubscription?.unsubscribe()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=S({type:t,selectors:[["","cdkMonitorElementFocus",""],["","cdkMonitorSubtreeFocus",""]],outputs:{cdkFocusChange:"cdkFocusChange"},exportAs:["cdkMonitorFocus"]})}return t})();var mu=new WeakMap,at=(()=>{class t{_appRef;_injector=d(q);_environmentInjector=d(ye);load(e){let i=this._appRef=this._appRef||this._injector.get(Gt),r=mu.get(i);r||(r={loaders:new Set,refs:[]},mu.set(i,r),i.onDestroy(()=>{mu.get(i)?.refs.forEach(o=>o.destroy()),mu.delete(i)})),r.loaders.has(e)||(r.loaders.add(e),r.refs.push(Cd(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var JC=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=E({type:t,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(i,r){},styles:[`.cdk-visually-hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
  outline: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  left: 0;
}
[dir=rtl] .cdk-visually-hidden {
  left: auto;
  right: 0;
}
`],encapsulation:2,changeDetection:0})}return t})(),hu;function jN(){if(hu===void 0&&(hu=null,typeof window<"u")){let t=window;t.trustedTypes!==void 0&&(hu=t.trustedTypes.createPolicy("angular#components",{createHTML:n=>n}))}return hu}function Zo(t){return jN()?.createHTML(t)||t}function Qo(t){return Array.isArray(t)?t:[t]}var eD=new Set,Br,pu=(()=>{class t{_platform=d(de);_nonce=d(Io,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):VN}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&BN(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function BN(t,n){if(!eD.has(t))try{Br||(Br=document.createElement("style"),n&&Br.setAttribute("nonce",n),Br.setAttribute("type","text/css"),document.head.appendChild(Br)),Br.sheet&&(Br.sheet.insertRule(`@media ${t} {body{ }}`,0),eD.add(t))}catch(e){console.error(e)}}function VN(t){return{matches:t==="all"||t==="",media:t,addListener:()=>{},removeListener:()=>{}}}var Fg=(()=>{class t{_mediaMatcher=d(pu);_zone=d(k);_queries=new Map;_destroySubject=new x;constructor(){}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return tD(Qo(e)).some(r=>this._registerQuery(r).mql.matches)}observe(e){let r=tD(Qo(e)).map(a=>this._registerQuery(a).observable),o=io(r);return o=wi(o.pipe(Ge(1)),o.pipe(cr(1),Yn(0))),o.pipe(X(a=>{let s={matches:!1,breakpoints:{}};return a.forEach(({matches:c,query:l})=>{s.matches=s.matches||c,s.breakpoints[l]=c}),s}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);let i=this._mediaMatcher.matchMedia(e),o={observable:new Q(a=>{let s=c=>this._zone.run(()=>a.next(c));return i.addListener(s),()=>{i.removeListener(s)}}).pipe(ht(i),X(({matches:a})=>({query:e,matches:a})),qe(this._destroySubject)),mql:i};return this._queries.set(e,o),o}static \u0275fac=function(i){return new(i||t)};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function tD(t){return t.map(n=>n.split(",")).reduce((n,e)=>n.concat(e)).map(n=>n.trim())}function HN(t){if(t.type==="characterData"&&t.target instanceof Comment)return!0;if(t.type==="childList"){for(let n=0;n<t.addedNodes.length;n++)if(!(t.addedNodes[n]instanceof Comment))return!1;for(let n=0;n<t.removedNodes.length;n++)if(!(t.removedNodes[n]instanceof Comment))return!1;return!0}return!1}var nD=(()=>{class t{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),iD=(()=>{class t{_mutationObserverFactory=d(nD);_observedElements=new Map;_ngZone=d(k);constructor(){}ngOnDestroy(){this._observedElements.forEach((e,i)=>this._cleanupObserver(i))}observe(e){let i=At(e);return new Q(r=>{let a=this._observeElement(i).pipe(X(s=>s.filter(c=>!HN(c))),ue(s=>!!s.length)).subscribe(s=>{this._ngZone.run(()=>{r.next(s)})});return()=>{a.unsubscribe(),this._unobserveElement(i)}})}_observeElement(e){return this._ngZone.runOutsideAngular(()=>{if(this._observedElements.has(e))this._observedElements.get(e).count++;else{let i=new x,r=this._mutationObserverFactory.create(o=>i.next(o));r&&r.observe(e,{characterData:!0,childList:!0,subtree:!0}),this._observedElements.set(e,{observer:r,stream:i,count:1})}return this._observedElements.get(e).stream})}_unobserveElement(e){this._observedElements.has(e)&&(this._observedElements.get(e).count--,this._observedElements.get(e).count||this._cleanupObserver(e))}_cleanupObserver(e){if(this._observedElements.has(e)){let{observer:i,stream:r}=this._observedElements.get(e);i&&i.disconnect(),r.complete(),this._observedElements.delete(e)}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),gu=(()=>{class t{_contentObserver=d(iD);_elementRef=d(F);event=new R;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._disabled?this._unsubscribe():this._subscribe()}_disabled=!1;get debounce(){return this._debounce}set debounce(e){this._debounce=qn(e),this._subscribe()}_debounce;_currentSubscription=null;constructor(){}ngAfterContentInit(){!this._currentSubscription&&!this.disabled&&this._subscribe()}ngOnDestroy(){this._unsubscribe()}_subscribe(){this._unsubscribe();let e=this._contentObserver.observe(this._elementRef);this._currentSubscription=(this.debounce?e.pipe(Yn(this.debounce)):e).subscribe(this.event)}_unsubscribe(){this._currentSubscription?.unsubscribe()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=S({type:t,selectors:[["","cdkObserveContent",""]],inputs:{disabled:[2,"cdkObserveContentDisabled","disabled",ae],debounce:"debounce"},outputs:{event:"cdkObserveContent"},exportAs:["cdkObserveContent"]})}return t})(),Yo=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=V({type:t});static \u0275inj=P({providers:[nD]})}return t})();var jg=(()=>{class t{_platform=d(de);constructor(){}isDisabled(e){return e.hasAttribute("disabled")}isVisible(e){return zN(e)&&getComputedStyle(e).visibility==="visible"}isTabbable(e){if(!this._platform.isBrowser)return!1;let i=UN(KN(e));if(i&&(rD(i)===-1||!this.isVisible(i)))return!1;let r=e.nodeName.toLowerCase(),o=rD(e);return e.hasAttribute("contenteditable")?o!==-1:r==="iframe"||r==="object"||this._platform.WEBKIT&&this._platform.IOS&&!QN(e)?!1:r==="audio"?e.hasAttribute("controls")?o!==-1:!1:r==="video"?o===-1?!1:o!==null?!0:this._platform.FIREFOX||e.hasAttribute("controls"):e.tabIndex>=0}isFocusable(e,i){return YN(e)&&!this.isDisabled(e)&&(i?.ignoreVisibility||this.isVisible(e))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function UN(t){try{return t.frameElement}catch{return null}}function zN(t){return!!(t.offsetWidth||t.offsetHeight||typeof t.getClientRects=="function"&&t.getClientRects().length)}function $N(t){let n=t.nodeName.toLowerCase();return n==="input"||n==="select"||n==="button"||n==="textarea"}function WN(t){return qN(t)&&t.type=="hidden"}function GN(t){return ZN(t)&&t.hasAttribute("href")}function qN(t){return t.nodeName.toLowerCase()=="input"}function ZN(t){return t.nodeName.toLowerCase()=="a"}function sD(t){if(!t.hasAttribute("tabindex")||t.tabIndex===void 0)return!1;let n=t.getAttribute("tabindex");return!!(n&&!isNaN(parseInt(n,10)))}function rD(t){if(!sD(t))return null;let n=parseInt(t.getAttribute("tabindex")||"",10);return isNaN(n)?-1:n}function QN(t){let n=t.nodeName.toLowerCase(),e=n==="input"&&t.type;return e==="text"||e==="password"||n==="select"||n==="textarea"}function YN(t){return WN(t)?!1:$N(t)||GN(t)||t.hasAttribute("contenteditable")||sD(t)}function KN(t){return t.ownerDocument&&t.ownerDocument.defaultView||window}var Lg=class{_element;_checker;_ngZone;_document;_injector;_startAnchor=null;_endAnchor=null;_hasAttached=!1;startAnchorListener=()=>this.focusLastTabbableElement();endAnchorListener=()=>this.focusFirstTabbableElement();get enabled(){return this._enabled}set enabled(n){this._enabled=n,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(n,this._startAnchor),this._toggleAnchorTabIndex(n,this._endAnchor))}_enabled=!0;constructor(n,e,i,r,o=!1,a){this._element=n,this._checker=e,this._ngZone=i,this._document=r,this._injector=a,o||this.attachAnchors()}destroy(){let n=this._startAnchor,e=this._endAnchor;n&&(n.removeEventListener("focus",this.startAnchorListener),n.remove()),e&&(e.removeEventListener("focus",this.endAnchorListener),e.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener("focus",this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener("focus",this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusInitialElement(n)))})}focusFirstTabbableElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusFirstTabbableElement(n)))})}focusLastTabbableElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusLastTabbableElement(n)))})}_getRegionBoundary(n){let e=this._element.querySelectorAll(`[cdk-focus-region-${n}], [cdkFocusRegion${n}], [cdk-focus-${n}]`);return n=="start"?e.length?e[0]:this._getFirstTabbableElement(this._element):e.length?e[e.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(n){let e=this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");if(e){if(!this._checker.isFocusable(e)){let i=this._getFirstTabbableElement(e);return i?.focus(n),!!i}return e.focus(n),!0}return this.focusFirstTabbableElement(n)}focusFirstTabbableElement(n){let e=this._getRegionBoundary("start");return e&&e.focus(n),!!e}focusLastTabbableElement(n){let e=this._getRegionBoundary("end");return e&&e.focus(n),!!e}hasAttached(){return this._hasAttached}_getFirstTabbableElement(n){if(this._checker.isFocusable(n)&&this._checker.isTabbable(n))return n;let e=n.children;for(let i=0;i<e.length;i++){let r=e[i].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(e[i]):null;if(r)return r}return null}_getLastTabbableElement(n){if(this._checker.isFocusable(n)&&this._checker.isTabbable(n))return n;let e=n.children;for(let i=e.length-1;i>=0;i--){let r=e[i].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(e[i]):null;if(r)return r}return null}_createAnchor(){let n=this._document.createElement("div");return this._toggleAnchorTabIndex(this._enabled,n),n.classList.add("cdk-visually-hidden"),n.classList.add("cdk-focus-trap-anchor"),n.setAttribute("aria-hidden","true"),n}_toggleAnchorTabIndex(n,e){n?e.setAttribute("tabindex","0"):e.removeAttribute("tabindex")}toggleAnchors(n){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(n,this._startAnchor),this._toggleAnchorTabIndex(n,this._endAnchor))}_executeOnStable(n){this._injector?ut(n,{injector:this._injector}):setTimeout(n)}},cD=(()=>{class t{_checker=d(jg);_ngZone=d(k);_document=d(j);_injector=d(q);constructor(){d(at).load(JC)}create(e,i=!1){return new Lg(e,this._checker,this._ngZone,this._document,i,this._injector)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Vr=(function(t){return t[t.NONE=0]="NONE",t[t.BLACK_ON_WHITE=1]="BLACK_ON_WHITE",t[t.WHITE_ON_BLACK=2]="WHITE_ON_BLACK",t})(Vr||{}),oD="cdk-high-contrast-black-on-white",aD="cdk-high-contrast-white-on-black",Pg="cdk-high-contrast-active",XN=(()=>{class t{_platform=d(de);_hasCheckedHighContrastMode=!1;_document=d(j);_breakpointSubscription;constructor(){this._breakpointSubscription=d(Fg).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return Vr.NONE;let e=this._document.createElement("div");e.style.backgroundColor="rgb(1,2,3)",e.style.position="absolute",this._document.body.appendChild(e);let i=this._document.defaultView||window,r=i&&i.getComputedStyle?i.getComputedStyle(e):null,o=(r&&r.backgroundColor||"").replace(/ /g,"");switch(e.remove(),o){case"rgb(0,0,0)":case"rgb(45,50,54)":case"rgb(32,32,32)":return Vr.WHITE_ON_BLACK;case"rgb(255,255,255)":case"rgb(255,250,239)":return Vr.BLACK_ON_WHITE}return Vr.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let e=this._document.body.classList;e.remove(Pg,oD,aD),this._hasCheckedHighContrastMode=!0;let i=this.getHighContrastMode();i===Vr.BLACK_ON_WHITE?e.add(Pg,oD):i===Vr.WHITE_ON_BLACK&&e.add(Pg,aD)}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),lD=(()=>{class t{constructor(){d(XN)._applyBodyHighContrastModeCssClasses()}static \u0275fac=function(i){return new(i||t)};static \u0275mod=V({type:t});static \u0275inj=P({imports:[Yo]})}return t})();var JN=200,bu=class{_letterKeyStream=new x;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new x;selectedItem=this._selectedItem;constructor(n,e){let i=typeof e?.debounceInterval=="number"?e.debounceInterval:JN;e?.skipPredicate&&(this._skipPredicateFn=e.skipPredicate),this.setItems(n),this._setupKeyHandler(i)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(n){this._selectedItemIndex=n}setItems(n){this._items=n}handleKey(n){let e=n.keyCode;n.key&&n.key.length===1?this._letterKeyStream.next(n.key.toLocaleUpperCase()):(e>=65&&e<=90||e>=48&&e<=57)&&this._letterKeyStream.next(String.fromCharCode(e))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(n){this._letterKeyStream.pipe(je(e=>this._pressedLetters.push(e)),Yn(n),ue(()=>this._pressedLetters.length>0),X(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(e=>{for(let i=1;i<this._items.length+1;i++){let r=(this._selectedItemIndex+i)%this._items.length,o=this._items[r];if(!this._skipPredicateFn?.(o)&&o.getLabel?.().toLocaleUpperCase().trim().indexOf(e)===0){this._selectedItem.next(o);break}}this._pressedLetters=[]})}};function Gi(t,...n){return n.length?n.some(e=>t[e]):t.altKey||t.shiftKey||t.ctrlKey||t.metaKey}var vu=class{_items;_activeItemIndex=B(-1);_activeItem=B(null);_wrap=!1;_typeaheadSubscription=se.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=n=>n.disabled;constructor(n,e){this._items=n,n instanceof ri?this._itemChangesSubscription=n.changes.subscribe(i=>this._itemsChanged(i.toArray())):Pi(n)&&(this._effectRef=It(()=>this._itemsChanged(n()),{injector:e}))}tabOut=new x;change=new x;skipPredicate(n){return this._skipPredicateFn=n,this}withWrap(n=!0){return this._wrap=n,this}withVerticalOrientation(n=!0){return this._vertical=n,this}withHorizontalOrientation(n){return this._horizontal=n,this}withAllowedModifierKeys(n){return this._allowedModifierKeys=n,this}withTypeAhead(n=200){this._typeaheadSubscription.unsubscribe();let e=this._getItemsArray();return this._typeahead=new bu(e,{debounceInterval:typeof n=="number"?n:void 0,skipPredicate:i=>this._skipPredicateFn(i)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(i=>{this.setActiveItem(i)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(n=!0){return this._homeAndEnd=n,this}withPageUpDown(n=!0,e=10){return this._pageUpAndDown={enabled:n,delta:e},this}setActiveItem(n){let e=this._activeItem();this.updateActiveItem(n),this._activeItem()!==e&&this.change.next(this._activeItemIndex())}onKeydown(n){let e=n.keyCode,r=["altKey","ctrlKey","metaKey","shiftKey"].every(o=>!n[o]||this._allowedModifierKeys.indexOf(o)>-1);switch(e){case 9:this.tabOut.next();return;case 40:if(this._vertical&&r){this.setNextItemActive();break}else return;case 38:if(this._vertical&&r){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&r){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&r){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&r){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&r){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(o>0?o:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()+this._pageUpAndDown.delta,a=this._getItemsArray().length;this._setActiveItemByIndex(o<a?o:a-1,-1);break}else return;default:(r||Gi(n,"shiftKey"))&&this._typeahead?.handleKey(n);return}this._typeahead?.reset(),n.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(n){let e=this._getItemsArray(),i=typeof n=="number"?n:e.indexOf(n),r=e[i];this._activeItem.set(r??null),this._activeItemIndex.set(i),this._typeahead?.setCurrentSelectedItemIndex(i)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(n){this._wrap?this._setActiveInWrapMode(n):this._setActiveInDefaultMode(n)}_setActiveInWrapMode(n){let e=this._getItemsArray();for(let i=1;i<=e.length;i++){let r=(this._activeItemIndex()+n*i+e.length)%e.length,o=e[r];if(!this._skipPredicateFn(o)){this.setActiveItem(r);return}}}_setActiveInDefaultMode(n){this._setActiveItemByIndex(this._activeItemIndex()+n,n)}_setActiveItemByIndex(n,e){let i=this._getItemsArray();if(i[n]){for(;this._skipPredicateFn(i[n]);)if(n+=e,!i[n])return;this.setActiveItem(n)}}_getItemsArray(){return Pi(this._items)?this._items():this._items instanceof ri?this._items.toArray():this._items}_itemsChanged(n){this._typeahead?.setItems(n);let e=this._activeItem();if(e){let i=n.indexOf(e);i>-1&&i!==this._activeItemIndex()&&(this._activeItemIndex.set(i),this._typeahead?.setCurrentSelectedItemIndex(i))}}};var qs=class extends vu{_origin="program";setFocusOrigin(n){return this._origin=n,this}setActiveItem(n){super.setActiveItem(n),this.activeItem&&this.activeItem.focus(this._origin)}};var Bg={},Ke=class t{_appId=d(Eo);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(n,e=!1){return this._appId!=="ng"&&(n+=this._appId),Bg.hasOwnProperty(n)||(Bg[n]=0),`${n}${e?t._infix+"-":""}${Bg[n]++}`}static \u0275fac=function(e){return new(e||t)};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})};var En=(function(t){return t[t.NORMAL=0]="NORMAL",t[t.NEGATED=1]="NEGATED",t[t.INVERTED=2]="INVERTED",t})(En||{}),_u,Hr;function yu(){if(Hr==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return Hr=!1,Hr;if(document.documentElement?.style&&"scrollBehavior"in document.documentElement.style)Hr=!0;else{let t=Element.prototype.scrollTo;t?Hr=!/\{\s*\[native code\]\s*\}/.test(t.toString()):Hr=!1}}return Hr}function Ko(){if(typeof document!="object"||!document)return En.NORMAL;if(_u==null){let t=document.createElement("div"),n=t.style;t.dir="rtl",n.width="1px",n.overflow="auto",n.visibility="hidden",n.pointerEvents="none",n.position="absolute";let e=document.createElement("div"),i=e.style;i.width="2px",i.height="1px",t.appendChild(e),document.body.appendChild(t),_u=En.NORMAL,t.scrollLeft===0&&(t.scrollLeft=1,_u=t.scrollLeft===0?En.NEGATED:En.INVERTED),t.remove()}return _u}function Vg(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}var Xo,dD=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function Hg(){if(Xo)return Xo;if(typeof document!="object"||!document)return Xo=new Set(dD),Xo;let t=document.createElement("input");return Xo=new Set(dD.filter(n=>(t.setAttribute("type",n),t.type===n))),Xo}var eO=new g("MATERIAL_ANIMATIONS"),uD=null;function tO(){return d(eO,{optional:!0})?.animationsDisabled||d(ss,{optional:!0})==="NoopAnimations"?"di-disabled":(uD??=d(pu).matchMedia("(prefers-reduced-motion)").matches,uD?"reduced-motion":"enabled")}function Xe(){return tO()!=="enabled"}function Ve(t){return t==null?"":typeof t=="string"?t:`${t}px`}function Rt(t){return t!=null&&`${t}`!="false"}var dn=(function(t){return t[t.FADING_IN=0]="FADING_IN",t[t.VISIBLE=1]="VISIBLE",t[t.FADING_OUT=2]="FADING_OUT",t[t.HIDDEN=3]="HIDDEN",t})(dn||{}),Ug=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=dn.HIDDEN;constructor(n,e,i,r=!1){this._renderer=n,this.element=e,this.config=i,this._animationForciblyDisabledThroughCss=r}fadeOut(){this._renderer.fadeOutRipple(this)}},fD=qo({passive:!0,capture:!0}),zg=class{_events=new Map;addHandler(n,e,i,r){let o=this._events.get(e);if(o){let a=o.get(i);a?a.add(r):o.set(i,new Set([r]))}else this._events.set(e,new Map([[i,new Set([r])]])),n.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,fD)})}removeHandler(n,e,i){let r=this._events.get(n);if(!r)return;let o=r.get(e);o&&(o.delete(i),o.size===0&&r.delete(e),r.size===0&&(this._events.delete(n),document.removeEventListener(n,this._delegateEventHandler,fD)))}_delegateEventHandler=n=>{let e=Bt(n);e&&this._events.get(n.type)?.forEach((i,r)=>{(r===e||r.contains(e))&&i.forEach(o=>o.handleEvent(n))})}},Zs={enterDuration:225,exitDuration:150},nO=800,mD=qo({passive:!0,capture:!0}),hD=["mousedown","touchstart"],pD=["mouseup","mouseleave","touchend","touchcancel"],iO=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=E({type:t,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(i,r){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--mat-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2,changeDetection:0})}return t})(),Ur=class t{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new zg;constructor(n,e,i,r,o){this._target=n,this._ngZone=e,this._platform=r,r.isBrowser&&(this._containerElement=At(i)),o&&o.get(at).load(iO)}fadeInRipple(n,e,i={}){let r=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=v(v({},Zs),i.animation);i.centered&&(n=r.left+r.width/2,e=r.top+r.height/2);let a=i.radius||rO(n,e,r),s=n-r.left,c=e-r.top,l=o.enterDuration,u=document.createElement("div");u.classList.add("mat-ripple-element"),u.style.left=`${s-a}px`,u.style.top=`${c-a}px`,u.style.height=`${a*2}px`,u.style.width=`${a*2}px`,i.color!=null&&(u.style.backgroundColor=i.color),u.style.transitionDuration=`${l}ms`,this._containerElement.appendChild(u);let f=window.getComputedStyle(u),m=f.transitionProperty,h=f.transitionDuration,b=m==="none"||h==="0s"||h==="0s, 0s"||r.width===0&&r.height===0,C=new Ug(this,u,i,b);u.style.transform="scale3d(1, 1, 1)",C.state=dn.FADING_IN,i.persistent||(this._mostRecentTransientRipple=C);let I=null;return!b&&(l||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let A=()=>{I&&(I.fallbackTimer=null),clearTimeout(Je),this._finishRippleTransition(C)},be=()=>this._destroyRipple(C),Je=setTimeout(be,l+100);u.addEventListener("transitionend",A),u.addEventListener("transitioncancel",be),I={onTransitionEnd:A,onTransitionCancel:be,fallbackTimer:Je}}),this._activeRipples.set(C,I),(b||!l)&&this._finishRippleTransition(C),C}fadeOutRipple(n){if(n.state===dn.FADING_OUT||n.state===dn.HIDDEN)return;let e=n.element,i=v(v({},Zs),n.config.animation);e.style.transitionDuration=`${i.exitDuration}ms`,e.style.opacity="0",n.state=dn.FADING_OUT,(n._animationForciblyDisabledThroughCss||!i.exitDuration)&&this._finishRippleTransition(n)}fadeOutAll(){this._getActiveRipples().forEach(n=>n.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(n=>{n.config.persistent||n.fadeOut()})}setupTriggerEvents(n){let e=At(n);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,hD.forEach(i=>{t._eventManager.addHandler(this._ngZone,i,e,this)}))}handleEvent(n){n.type==="mousedown"?this._onMousedown(n):n.type==="touchstart"?this._onTouchStart(n):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{pD.forEach(e=>{this._triggerElement.addEventListener(e,this,mD)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(n){n.state===dn.FADING_IN?this._startFadeOutTransition(n):n.state===dn.FADING_OUT&&this._destroyRipple(n)}_startFadeOutTransition(n){let e=n===this._mostRecentTransientRipple,{persistent:i}=n.config;n.state=dn.VISIBLE,!i&&(!e||!this._isPointerDown)&&n.fadeOut()}_destroyRipple(n){let e=this._activeRipples.get(n)??null;this._activeRipples.delete(n),this._activeRipples.size||(this._containerRect=null),n===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),n.state=dn.HIDDEN,e!==null&&(n.element.removeEventListener("transitionend",e.onTransitionEnd),n.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),n.element.remove()}_onMousedown(n){let e=zs(n),i=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+nO;!this._target.rippleDisabled&&!e&&!i&&(this._isPointerDown=!0,this.fadeInRipple(n.clientX,n.clientY,this._target.rippleConfig))}_onTouchStart(n){if(!this._target.rippleDisabled&&!$s(n)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=n.changedTouches;if(e)for(let i=0;i<e.length;i++)this.fadeInRipple(e[i].clientX,e[i].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(n=>{let e=n.state===dn.VISIBLE||n.config.terminateOnPointerUp&&n.state===dn.FADING_IN;!n.config.persistent&&e&&n.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let n=this._triggerElement;n&&(hD.forEach(e=>t._eventManager.removeHandler(e,n,this)),this._pointerUpEventsRegistered&&(pD.forEach(e=>n.removeEventListener(e,this,mD)),this._pointerUpEventsRegistered=!1))}};function rO(t,n,e){let i=Math.max(Math.abs(t-e.left),Math.abs(t-e.right)),r=Math.max(Math.abs(n-e.top),Math.abs(n-e.bottom));return Math.sqrt(i*i+r*r)}var Jo=new g("mat-ripple-global-options"),Qs=(()=>{class t{_elementRef=d(F);_animationsDisabled=Xe();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=d(k),i=d(de),r=d(Jo,{optional:!0}),o=d(q);this._globalOptions=r||{},this._rippleRenderer=new Ur(this,e,this._elementRef,i,o)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:v(v(v({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,i=0,r){return typeof e=="number"?this._rippleRenderer.fadeInRipple(e,i,v(v({},this.rippleConfig),r)):this._rippleRenderer.fadeInRipple(0,0,v(v({},this.rippleConfig),e))}static \u0275fac=function(i){return new(i||t)};static \u0275dir=S({type:t,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(i,r){i&2&&W("mat-ripple-unbounded",r.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return t})();var oO={capture:!0},aO=["focus","mousedown","mouseenter","touchstart"],$g="mat-ripple-loader-uninitialized",Wg="mat-ripple-loader-class-name",gD="mat-ripple-loader-centered",wu="mat-ripple-loader-disabled",bD=(()=>{class t{_document=d(j);_animationsDisabled=Xe();_globalRippleOptions=d(Jo,{optional:!0});_platform=d(de);_ngZone=d(k);_injector=d(q);_eventCleanups;_hosts=new Map;constructor(){let e=d(ze).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>aO.map(i=>e.listen(this._document,i,this._onInteraction,oO)))}ngOnDestroy(){let e=this._hosts.keys();for(let i of e)this.destroyRipple(i);this._eventCleanups.forEach(i=>i())}configureRipple(e,i){e.setAttribute($g,this._globalRippleOptions?.namespace??""),(i.className||!e.hasAttribute(Wg))&&e.setAttribute(Wg,i.className||""),i.centered&&e.setAttribute(gD,""),i.disabled&&e.setAttribute(wu,"")}setDisabled(e,i){let r=this._hosts.get(e);r?(r.target.rippleDisabled=i,!i&&!r.hasSetUpEvents&&(r.hasSetUpEvents=!0,r.renderer.setupTriggerEvents(e))):i?e.setAttribute(wu,""):e.removeAttribute(wu)}_onInteraction=e=>{let i=Bt(e);if(i instanceof HTMLElement){let r=i.closest(`[${$g}="${this._globalRippleOptions?.namespace??""}"]`);r&&this._createRipple(r)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let i=this._document.createElement("span");i.classList.add("mat-ripple",e.getAttribute(Wg)),e.append(i);let r=this._globalRippleOptions,o=this._animationsDisabled?0:r?.animation?.enterDuration??Zs.enterDuration,a=this._animationsDisabled?0:r?.animation?.exitDuration??Zs.exitDuration,s={rippleDisabled:this._animationsDisabled||r?.disabled||e.hasAttribute(wu),rippleConfig:{centered:e.hasAttribute(gD),terminateOnPointerUp:r?.terminateOnPointerUp,animation:{enterDuration:o,exitDuration:a}}},c=new Ur(s,this._ngZone,i,this._platform,this._injector),l=!s.rippleDisabled;l&&c.setupTriggerEvents(e),this._hosts.set(e,{target:s,renderer:c,hasSetUpEvents:l}),e.removeAttribute($g)}destroyRipple(e){let i=this._hosts.get(e);i&&(i.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var qi=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=E({type:t,selectors:[["structural-styles"]],decls:0,vars:0,template:function(i,r){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--mat-focus-indicator-display, none);
  border-width: var(--mat-focus-indicator-border-width, 3px);
  border-style: var(--mat-focus-indicator-border-style, solid);
  border-color: var(--mat-focus-indicator-border-color, transparent);
  border-radius: var(--mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --mat-focus-indicator-display: block;
  }
}
`],encapsulation:2,changeDetection:0})}return t})();var sO=["mat-icon-button",""],cO=["*"],lO=new g("MAT_BUTTON_CONFIG");function vD(t){return t==null?void 0:ci(t)}var Gg=(()=>{class t{_elementRef=d(F);_ngZone=d(k);_animationsDisabled=Xe();_config=d(lO,{optional:!0});_focusMonitor=d(jr);_cleanupClick;_renderer=d(Se);_rippleLoader=d(bD);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}constructor(){d(at).load(qi);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e="program",i){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,i):this._elementRef.nativeElement.focus(i)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static \u0275fac=function(i){return new(i||t)};static \u0275dir=S({type:t,hostAttrs:[1,"mat-mdc-button-base"],hostVars:13,hostBindings:function(i,r){i&2&&(oe("disabled",r._getDisabledAttribute())("aria-disabled",r._getAriaDisabled())("tabindex",r._getTabIndex()),qt(r.color?"mat-"+r.color:""),W("mat-mdc-button-disabled",r.disabled)("mat-mdc-button-disabled-interactive",r.disabledInteractive)("mat-unthemed",!r.color)("_mat-animation-noopable",r._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",ae],disabled:[2,"disabled","disabled",ae],ariaDisabled:[2,"aria-disabled","ariaDisabled",ae],disabledInteractive:[2,"disabledInteractive","disabledInteractive",ae],tabIndex:[2,"tabIndex","tabIndex",vD],_tabindex:[2,"tabindex","_tabindex",vD]}})}return t})(),qg=(()=>{class t extends Gg{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=E({type:t,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[me],attrs:sO,ngContentSelectors:cO,decls:4,vars:0,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(i,r){i&1&&(xe(),nn(0,"span",0),K(1),nn(2,"span",1)(3,"span",2))},styles:[`.mat-mdc-icon-button {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: transparent;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  z-index: 0;
  overflow: visible;
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
  flex-shrink: 0;
  text-align: center;
  width: var(--mat-icon-button-state-layer-size, 40px);
  height: var(--mat-icon-button-state-layer-size, 40px);
  padding: calc(calc(var(--mat-icon-button-state-layer-size, 40px) - var(--mat-icon-button-icon-size, 24px)) / 2);
  font-size: var(--mat-icon-button-icon-size, 24px);
  color: var(--mat-icon-button-icon-color, var(--mat-sys-on-surface-variant));
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-icon-button .mat-mdc-button-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-icon-button .mdc-button__label,
.mat-mdc-icon-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-icon-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-icon-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-ripple-element {
  background-color: var(--mat-icon-button-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface-variant) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-icon-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-icon-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-icon-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-icon-button-touch-target-size, 48px);
  display: var(--mat-icon-button-touch-target-display, block);
  left: 50%;
  width: var(--mat-icon-button-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-icon-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-icon-button[disabled], .mat-mdc-icon-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-icon-button-disabled-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-icon-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-icon-button img,
.mat-mdc-icon-button svg {
  width: var(--mat-icon-button-icon-size, 24px);
  height: var(--mat-icon-button-icon-size, 24px);
  vertical-align: baseline;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple {
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
}
.mat-mdc-icon-button[hidden] {
  display: none;
}
.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before {
  background: transparent;
  opacity: 1;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return t})();var Cu=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=V({type:t});static \u0275inj=P({imports:[ge]})}return t})();var dO=["matButton",""],uO=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]]],fO=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"];var _D=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),Du=(()=>{class t extends Gg{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let e=mO(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let i=this._elementRef.nativeElement.classList,r=this._appearance?_D.get(this._appearance):null,o=_D.get(e);r&&i.remove(...r),i.add(...o),this._appearance=e}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=E({type:t,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[me],attrs:dO,ngContentSelectors:fO,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(i,r){i&1&&(xe(uO),nn(0,"span",0),K(1),Ft(2,"span",1),K(3,1),Pt(),K(4,2),nn(5,"span",2)(6,"span",3)),i&2&&W("mdc-button__ripple",!r._isFab)("mdc-fab__ripple",r._isFab)},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--mat-button-text-horizontal-padding, 12px);
  height: var(--mat-button-text-container-height, 40px);
  font-family: var(--mat-button-text-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-text-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-text-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-text-label-text-transform);
  font-weight: var(--mat-button-text-label-text-weight, var(--mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--mat-button-text-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--mat-button-text-label-text-color, var(--mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding: 0 var(--mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--mat-button-text-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-text-touch-target-size, 48px);
  display: var(--mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-filled-container-height, 40px);
  font-family: var(--mat-button-filled-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-filled-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-filled-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-filled-label-text-transform);
  font-weight: var(--mat-button-filled-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--mat-button-filled-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-state-layer-color, var(--mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-filled-touch-target-size, 48px);
  display: var(--mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--mat-button-filled-label-text-color, var(--mat-sys-on-primary));
  background-color: var(--mat-button-filled-container-color, var(--mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--mat-button-filled-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--mat-button-protected-container-elevation-shadow, var(--mat-sys-level1));
  height: var(--mat-button-protected-container-height, 40px);
  font-family: var(--mat-button-protected-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-protected-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-protected-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-protected-label-text-transform);
  font-weight: var(--mat-button-protected-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--mat-button-protected-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-protected-touch-target-size, 48px);
  display: var(--mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--mat-button-protected-label-text-color, var(--mat-sys-primary));
  background-color: var(--mat-button-protected-container-color, var(--mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--mat-button-protected-container-shape, var(--mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--mat-button-protected-hover-container-elevation-shadow, var(--mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--mat-button-protected-focus-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--mat-button-protected-pressed-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-protected-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--mat-button-protected-disabled-container-elevation-shadow, var(--mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-outlined-container-height, 40px);
  font-family: var(--mat-button-outlined-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-outlined-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-outlined-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-outlined-label-text-transform);
  font-weight: var(--mat-button-outlined-label-text-weight, var(--mat-sys-label-large-weight));
  border-radius: var(--mat-button-outlined-container-shape, var(--mat-sys-corner-full));
  border-width: var(--mat-button-outlined-outline-width, 1px);
  padding: 0 var(--mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--mat-button-outlined-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-outlined-touch-target-size, 48px);
  display: var(--mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--mat-button-outlined-label-text-color, var(--mat-sys-primary));
  border-color: var(--mat-button-outlined-outline-color, var(--mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: var(--mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-tonal-container-height, 40px);
  font-family: var(--mat-button-tonal-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-tonal-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-tonal-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-tonal-label-text-transform);
  font-weight: var(--mat-button-tonal-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--mat-button-tonal-label-text-color, var(--mat-sys-on-secondary-container));
  background-color: var(--mat-button-tonal-container-color, var(--mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--mat-button-tonal-container-shape, var(--mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--mat-button-tonal-ripple-color, color-mix(in srgb, var(--mat-sys-on-secondary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-tonal-touch-target-size, 48px);
  display: var(--mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1);
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return t})();function mO(t){return t.hasAttribute("mat-raised-button")?"elevated":t.hasAttribute("mat-stroked-button")?"outlined":t.hasAttribute("mat-flat-button")?"filled":t.hasAttribute("mat-button")?"text":null}var ea=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=V({type:t});static \u0275inj=P({imports:[Cu,ge]})}return t})();var Zg=class{_box;_destroyed=new x;_resizeSubject=new x;_resizeObserver;_elementObservables=new Map;constructor(n){this._box=n,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(n){return this._elementObservables.has(n)||this._elementObservables.set(n,new Q(e=>{let i=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(n,{box:this._box}),()=>{this._resizeObserver?.unobserve(n),i.unsubscribe(),this._elementObservables.delete(n)}}).pipe(ue(e=>e.some(i=>i.target===n)),qc({bufferSize:1,refCount:!0}),qe(this._destroyed))),this._elementObservables.get(n)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},xu=(()=>{class t{_cleanupErrorListener;_observers=new Map;_ngZone=d(k);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,i){let r=i?.box||"content-box";return this._observers.has(r)||this._observers.set(r,new Zg(r)),this._observers.get(r).observe(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var hO=["notch"],pO=["matFormFieldNotchedOutline",""],gO=["*"],wD=["iconPrefixContainer"],CD=["textPrefixContainer"],DD=["iconSuffixContainer"],xD=["textSuffixContainer"],bO=["textField"],vO=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],_O=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function yO(t,n){t&1&&le(0,"span",21)}function wO(t,n){if(t&1&&(_(0,"label",20),K(1,1),he(2,yO,1,0,"span",21),y()),t&2){let e=ce(2);ne("floating",e._shouldLabelFloat())("monitorResize",e._hasOutline())("id",e._labelId),oe("for",e._control.disableAutomaticLabeling?null:e._control.id),w(2),pe(!e.hideRequiredMarker&&e._control.required?2:-1)}}function CO(t,n){if(t&1&&he(0,wO,3,5,"label",20),t&2){let e=ce();pe(e._hasFloatingLabel()?0:-1)}}function DO(t,n){t&1&&le(0,"div",7)}function xO(t,n){}function EO(t,n){if(t&1&&Ot(0,xO,0,0,"ng-template",13),t&2){ce(2);let e=on(1);ne("ngTemplateOutlet",e)}}function IO(t,n){if(t&1&&(_(0,"div",9),he(1,EO,1,1,null,13),y()),t&2){let e=ce();ne("matFormFieldNotchedOutlineOpen",e._shouldLabelFloat()),w(),pe(e._forceDisplayInfixLabel()?-1:1)}}function MO(t,n){t&1&&(_(0,"div",10,2),K(2,2),y())}function SO(t,n){t&1&&(_(0,"div",11,3),K(2,3),y())}function kO(t,n){}function TO(t,n){if(t&1&&Ot(0,kO,0,0,"ng-template",13),t&2){ce();let e=on(1);ne("ngTemplateOutlet",e)}}function AO(t,n){t&1&&(_(0,"div",14,4),K(2,4),y())}function RO(t,n){t&1&&(_(0,"div",15,5),K(2,5),y())}function NO(t,n){t&1&&le(0,"div",16)}function OO(t,n){t&1&&(_(0,"div",18),K(1,6),y())}function FO(t,n){if(t&1&&(_(0,"mat-hint",22),N(1),y()),t&2){let e=ce(2);ne("id",e._hintLabelId),w(),Oe(e.hintLabel)}}function PO(t,n){if(t&1&&(_(0,"div",19),he(1,FO,2,2,"mat-hint",22),K(2,7),le(3,"div",23),K(4,8),y()),t&2){let e=ce();w(),pe(e.hintLabel?1:-1)}}var zr=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=S({type:t,selectors:[["mat-label"]]})}return t})(),AD=new g("MatError"),Yg=(()=>{class t{id=d(Ke).getId("mat-mdc-error-");constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275dir=S({type:t,selectors:[["mat-error"],["","matError",""]],hostAttrs:[1,"mat-mdc-form-field-error","mat-mdc-form-field-bottom-align"],hostVars:1,hostBindings:function(i,r){i&2&&yn("id",r.id)},inputs:{id:"id"},features:[ke([{provide:AD,useExisting:t}])]})}return t})(),Qg=(()=>{class t{align="start";id=d(Ke).getId("mat-mdc-hint-");static \u0275fac=function(i){return new(i||t)};static \u0275dir=S({type:t,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(i,r){i&2&&(yn("id",r.id),oe("align",null),W("mat-mdc-form-field-hint-end",r.align==="end"))},inputs:{align:"align",id:"id"}})}return t})(),LO=new g("MatPrefix");var RD=new g("MatSuffix"),Kg=(()=>{class t{set _isTextSelector(e){this._isText=!0}_isText=!1;static \u0275fac=function(i){return new(i||t)};static \u0275dir=S({type:t,selectors:[["","matSuffix",""],["","matIconSuffix",""],["","matTextSuffix",""]],inputs:{_isTextSelector:[0,"matTextSuffix","_isTextSelector"]},features:[ke([{provide:RD,useExisting:t}])]})}return t})(),ND=new g("FloatingLabelParent"),ED=(()=>{class t{_elementRef=d(F);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=d(xu);_ngZone=d(k);_parent=d(ND);_resizeSubscription=new se;constructor(){}ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return jO(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(i){return new(i||t)};static \u0275dir=S({type:t,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(i,r){i&2&&W("mdc-floating-label--float-above",r.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return t})();function jO(t){let n=t;if(n.offsetParent!==null)return n.scrollWidth;let e=n.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let i=e.scrollWidth;return e.remove(),i}var ID="mdc-line-ripple--active",Eu="mdc-line-ripple--deactivating",MD=(()=>{class t{_elementRef=d(F);_cleanupTransitionEnd;constructor(){let e=d(k),i=d(Se);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=i.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(Eu),e.add(ID)}deactivate(){this._elementRef.nativeElement.classList.add(Eu)}_handleTransitionEnd=e=>{let i=this._elementRef.nativeElement.classList,r=i.contains(Eu);e.propertyName==="opacity"&&r&&i.remove(ID,Eu)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=S({type:t,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return t})(),SD=(()=>{class t{_elementRef=d(F);_ngZone=d(k);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,i=e.querySelector(".mdc-floating-label");i?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(i.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>i.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){let i=this._notch.nativeElement;!this.open||!e?i.style.width="":i.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=E({type:t,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(i,r){if(i&1&&rt(hO,5),i&2){let o;z(o=$())&&(r._notch=o.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(i,r){i&2&&W("mdc-notched-outline--notched",r.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},attrs:pO,ngContentSelectors:gO,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(i,r){i&1&&(xe(),nn(0,"div",1),Ft(1,"div",2,0),K(3),Pt(),nn(4,"div",3))},encapsulation:2,changeDetection:0})}return t})(),Xg=(()=>{class t{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(i){return new(i||t)};static \u0275dir=S({type:t})}return t})();var Jg=new g("MatFormField"),BO=new g("MAT_FORM_FIELD_DEFAULT_OPTIONS"),kD="fill",VO="auto",TD="fixed",HO="translateY(-50%)",Zi=(()=>{class t{_elementRef=d(F);_changeDetectorRef=d(We);_platform=d(de);_idGenerator=d(Ke);_ngZone=d(k);_defaults=d(BO,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=wn("iconPrefixContainer");_textPrefixContainerSignal=wn("textPrefixContainer");_iconSuffixContainerSignal=wn("iconSuffixContainer");_textSuffixContainerSignal=wn("textSuffixContainer");_prefixSuffixContainers=ot(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=r0(zr);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=Rt(e)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||VO}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let i=e||this._defaults?.appearance||kD;this._appearanceSignal.set(i)}_appearanceSignal=B(kD);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||TD}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||TD}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new x;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=Xe();constructor(){let e=this._defaults,i=d(jt);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),It(()=>this._currentDirection=i.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=ot(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){let i=this._control,r="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(r+e.controlType),i.controlType&&this._elementRef.nativeElement.classList.add(r+i.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=i.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=i.stateChanges.pipe(ht([void 0,void 0]),X(()=>[i.errorState,i.userAriaDescribedBy]),Gc(),ue(([[o,a],[s,c]])=>o!==s||a!==c)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),i.ngControl&&i.ngControl.valueChanges&&(this._valueChanges=i.ngControl.valueChanges.pipe(qe(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),mn(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){c0({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=ot(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let i=this._control?this._control.ngControl:null;return i&&i[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let o=this._hintChildren?this._hintChildren.find(s=>s.align==="start"):null,a=this._hintChildren?this._hintChildren.find(s=>s.align==="end"):null;o?e.push(o.id):this._hintLabel&&e.push(this._hintLabelId),a&&e.push(a.id)}else this._errorChildren&&e.push(...this._errorChildren.map(o=>o.id));let i=this._control.describedByIds,r;if(i){let o=this._describedByIds||e;r=e.concat(i.filter(a=>a&&!o.includes(a)))}else r=e;this._control.setDescribedByIds(r),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,i=this._textPrefixContainer?.nativeElement,r=this._iconSuffixContainer?.nativeElement,o=this._textSuffixContainer?.nativeElement,a=e?.getBoundingClientRect().width??0,s=i?.getBoundingClientRect().width??0,c=r?.getBoundingClientRect().width??0,l=o?.getBoundingClientRect().width??0,u=this._currentDirection==="rtl"?"-1":"1",f=`${a+s}px`,h=`calc(${u} * (${f} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,b=`var(--mat-mdc-form-field-label-transform, ${HO} translateX(${h}))`,C=a+s+c+l;return[b,C]}_writeOutlinedLabelStyles(e){if(e!==null){let[i,r]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=i),r!==null&&this._notchedOutline?._setMaxWidth(r)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let i=e.getRootNode();return i&&i!==e}return document.documentElement.contains(e)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=E({type:t,selectors:[["mat-form-field"]],contentQueries:function(i,r,o){if(i&1&&(pd(o,r._labelChild,zr,5),kt(o,Xg,5)(o,LO,5)(o,RD,5)(o,AD,5)(o,Qg,5)),i&2){zn();let a;z(a=$())&&(r._formFieldControl=a.first),z(a=$())&&(r._prefixChildren=a),z(a=$())&&(r._suffixChildren=a),z(a=$())&&(r._errorChildren=a),z(a=$())&&(r._hintChildren=a)}},viewQuery:function(i,r){if(i&1&&(Un(r._iconPrefixContainerSignal,wD,5)(r._textPrefixContainerSignal,CD,5)(r._iconSuffixContainerSignal,DD,5)(r._textSuffixContainerSignal,xD,5),rt(bO,5)(wD,5)(CD,5)(DD,5)(xD,5)(ED,5)(SD,5)(MD,5)),i&2){zn(4);let o;z(o=$())&&(r._textField=o.first),z(o=$())&&(r._iconPrefixContainer=o.first),z(o=$())&&(r._textPrefixContainer=o.first),z(o=$())&&(r._iconSuffixContainer=o.first),z(o=$())&&(r._textSuffixContainer=o.first),z(o=$())&&(r._floatingLabel=o.first),z(o=$())&&(r._notchedOutline=o.first),z(o=$())&&(r._lineRipple=o.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(i,r){i&2&&W("mat-mdc-form-field-label-always-float",r._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",r._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",r._hasIconSuffix)("mat-form-field-invalid",r._control.errorState)("mat-form-field-disabled",r._control.disabled)("mat-form-field-autofilled",r._control.autofilled)("mat-form-field-appearance-fill",r.appearance=="fill")("mat-form-field-appearance-outline",r.appearance=="outline")("mat-form-field-hide-placeholder",r._hasFloatingLabel()&&!r._shouldLabelFloat())("mat-primary",r.color!=="accent"&&r.color!=="warn")("mat-accent",r.color==="accent")("mat-warn",r.color==="warn")("ng-untouched",r._shouldForward("untouched"))("ng-touched",r._shouldForward("touched"))("ng-pristine",r._shouldForward("pristine"))("ng-dirty",r._shouldForward("dirty"))("ng-valid",r._shouldForward("valid"))("ng-invalid",r._shouldForward("invalid"))("ng-pending",r._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[ke([{provide:Jg,useExisting:t},{provide:ND,useExisting:t}])],ngContentSelectors:_O,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(i,r){if(i&1&&(xe(vO),Ot(0,CO,1,1,"ng-template",null,0,gd),_(2,"div",6,1),H("click",function(a){return r._control.onContainerClick(a)}),he(4,DO,1,0,"div",7),_(5,"div",8),he(6,IO,2,2,"div",9),he(7,MO,3,0,"div",10),he(8,SO,3,0,"div",11),_(9,"div",12),he(10,TO,1,1,null,13),K(11),y(),he(12,AO,3,0,"div",14),he(13,RO,3,0,"div",15),y(),he(14,NO,1,0,"div",16),y(),_(15,"div",17),he(16,OO,2,0,"div",18)(17,PO,5,1,"div",19),y()),i&2){let o;w(2),W("mdc-text-field--filled",!r._hasOutline())("mdc-text-field--outlined",r._hasOutline())("mdc-text-field--no-label",!r._hasFloatingLabel())("mdc-text-field--disabled",r._control.disabled)("mdc-text-field--invalid",r._control.errorState),w(2),pe(!r._hasOutline()&&!r._control.disabled?4:-1),w(2),pe(r._hasOutline()?6:-1),w(),pe(r._hasIconPrefix?7:-1),w(),pe(r._hasTextPrefix?8:-1),w(2),pe(!r._hasOutline()||r._forceDisplayInfixLabel()?10:-1),w(2),pe(r._hasTextSuffix?12:-1),w(),pe(r._hasIconSuffix?13:-1),w(),pe(r._hasOutline()?-1:14),w(),W("mat-mdc-form-field-subscript-dynamic-size",r.subscriptSizing==="dynamic");let a=r._getSubscriptMessageType();w(),pe((o=a)==="error"?16:o==="hint"?17:-1)}},dependencies:[ED,SD,Sp,MD,Qg],styles:[`.mdc-text-field {
  display: inline-flex;
  align-items: baseline;
  padding: 0 16px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  will-change: opacity, transform, color;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.mdc-text-field__input {
  width: 100%;
  min-width: 0;
  border: none;
  border-radius: 0;
  background: none;
  padding: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  height: 28px;
}
.mdc-text-field__input::-webkit-calendar-picker-indicator, .mdc-text-field__input::-webkit-search-cancel-button {
  display: none;
}
.mdc-text-field__input::-ms-clear {
  display: none;
}
.mdc-text-field__input:focus {
  outline: none;
}
.mdc-text-field__input:invalid {
  box-shadow: none;
}
.mdc-text-field__input::placeholder {
  opacity: 0;
}
.mdc-text-field__input::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field__input::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field__input:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mdc-text-field--focused .mdc-text-field__input::placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  opacity: 1;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--outlined .mdc-text-field__input, .mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input {
  height: 100%;
}
.mdc-text-field--outlined .mdc-text-field__input {
  display: flex;
  border: none !important;
  background-color: transparent;
}
.mdc-text-field--disabled .mdc-text-field__input {
  pointer-events: auto;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-filled-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-filled-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-outlined-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-outlined-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-filled-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-outlined-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-text-field__input {
    background-color: Window;
  }
}

.mdc-text-field--filled {
  height: 56px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-top-left-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
  border-top-right-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) {
  background-color: var(--mat-form-field-filled-container-color, var(--mat-sys-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled {
  background-color: var(--mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 4%, transparent));
}

.mdc-text-field--outlined {
  height: 56px;
  overflow: visible;
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
}
[dir=rtl] .mdc-text-field--outlined {
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}

.mdc-floating-label {
  position: absolute;
  left: 0;
  transform-origin: left top;
  line-height: 1.15rem;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: text;
  overflow: hidden;
  will-change: transform;
}
[dir=rtl] .mdc-floating-label {
  right: 0;
  left: auto;
  transform-origin: right top;
  text-align: right;
}
.mdc-text-field .mdc-floating-label {
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
.mdc-notched-outline .mdc-floating-label {
  display: inline-block;
  position: relative;
  max-width: 100%;
}
.mdc-text-field--outlined .mdc-floating-label {
  left: 4px;
  right: auto;
}
[dir=rtl] .mdc-text-field--outlined .mdc-floating-label {
  left: auto;
  right: 4px;
}
.mdc-text-field--filled .mdc-floating-label {
  left: 16px;
  right: auto;
}
[dir=rtl] .mdc-text-field--filled .mdc-floating-label {
  left: auto;
  right: 16px;
}
.mdc-text-field--disabled .mdc-floating-label {
  cursor: default;
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-floating-label {
    z-index: 1;
  }
}
.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label {
  display: none;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-filled-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-hover-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-filled-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--filled .mdc-floating-label {
  font-family: var(--mat-form-field-filled-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-filled-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-filled-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-filled-label-text-tracking, var(--mat-sys-body-large-tracking));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-outlined-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-hover-label-text-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined .mdc-floating-label {
  font-family: var(--mat-form-field-outlined-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-outlined-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-outlined-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-outlined-label-text-tracking, var(--mat-sys-body-large-tracking));
}

.mdc-floating-label--float-above {
  cursor: auto;
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--filled .mdc-floating-label--float-above {
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--outlined .mdc-floating-label--float-above {
  transform: translateY(-37.25px) scale(1);
  font-size: 0.75rem;
}
.mdc-notched-outline .mdc-floating-label--float-above {
  text-overflow: clip;
}
.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: 133.3333333333%;
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  transform: translateY(-34.75px) scale(0.75);
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: 1rem;
}

.mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 1px;
  margin-right: 0;
  content: "*";
}
[dir=rtl] .mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 0;
  margin-right: 1px;
}

.mdc-notched-outline {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: 100%;
  text-align: left;
  pointer-events: none;
}
[dir=rtl] .mdc-notched-outline {
  text-align: right;
}
.mdc-text-field--outlined .mdc-notched-outline {
  z-index: 1;
}

.mat-mdc-notch-piece {
  box-sizing: border-box;
  height: 100%;
  pointer-events: none;
  border: none;
  border-top: 1px solid;
  border-bottom: 1px solid;
}
.mdc-text-field--focused .mat-mdc-notch-piece {
  border-width: 2px;
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-outline-color, var(--mat-sys-outline));
  border-width: var(--mat-form-field-outlined-outline-width, 1px);
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-hover-outline-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-focus-outline-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-hover-outline-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-focus-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece {
  border-width: var(--mat-form-field-outlined-focus-outline-width, 2px);
}

.mdc-notched-outline__leading {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {
  width: max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}
[dir=rtl] .mdc-notched-outline__leading {
  border-left: none;
  border-right: 1px solid;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__trailing {
  flex-grow: 1;
  border-left: none;
  border-right: 1px solid;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
[dir=rtl] .mdc-notched-outline__trailing {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__notch {
  flex: 0 0 auto;
  width: auto;
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch {
  max-width: min(var(--mat-form-field-notch-max-width, 100%), calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  max-width: min(100%, calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 1px;
}
.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 2px;
}
.mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 0;
  padding-right: 8px;
  border-top: none;
}
[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 8px;
  padding-right: 0;
}
.mdc-notched-outline--no-label .mdc-notched-outline__notch {
  display: none;
}

.mdc-line-ripple::before, .mdc-line-ripple::after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-bottom-style: solid;
  content: "";
}
.mdc-line-ripple::before {
  z-index: 1;
  border-bottom-width: var(--mat-form-field-filled-active-indicator-height, 1px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-active-indicator-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-hover-active-indicator-color, var(--mat-sys-on-surface));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-active-indicator-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-hover-active-indicator-color, var(--mat-sys-on-error-container));
}
.mdc-line-ripple::after {
  transform: scaleX(0);
  opacity: 0;
  z-index: 2;
}
.mdc-text-field--filled .mdc-line-ripple::after {
  border-bottom-width: var(--mat-form-field-filled-focus-active-indicator-height, 2px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-focus-active-indicator-color, var(--mat-sys-primary));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-error-focus-active-indicator-color, var(--mat-sys-error));
}

.mdc-line-ripple--active::after {
  transform: scaleX(1);
  opacity: 1;
}

.mdc-line-ripple--deactivating::after {
  opacity: 0;
}

.mdc-text-field--disabled {
  pointer-events: none;
}

.mat-mdc-form-field-textarea-control {
  vertical-align: middle;
  resize: vertical;
  box-sizing: border-box;
  height: auto;
  margin: 0;
  padding: 0;
  border: none;
  overflow: auto;
}

.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font: inherit;
  letter-spacing: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  border: none;
}

.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  line-height: normal;
  pointer-events: all;
  will-change: auto;
}

.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label {
  cursor: inherit;
}

.mdc-text-field--no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,
.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control {
  height: auto;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color] {
  height: 23px;
}

.mat-mdc-text-field-wrapper {
  height: auto;
  flex: auto;
  will-change: auto;
}

.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-left: 0;
  --mat-mdc-form-field-label-offset-x: -16px;
}

.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

[dir=rtl] .mat-mdc-text-field-wrapper {
  padding-left: 16px;
  padding-right: 16px;
}
[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-left: 0;
}
[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

.mat-form-field-disabled .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
  opacity: 1;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label {
  left: auto;
  right: auto;
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input {
  display: inline-block;
}

.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch {
  padding-top: 0;
}

.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: 1px solid transparent;
}

[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: none;
  border-right: 1px solid transparent;
}

.mat-mdc-form-field-infix {
  min-height: var(--mat-form-field-container-height, 56px);
  padding-top: var(--mat-form-field-filled-with-label-container-padding-top, 24px);
  padding-bottom: var(--mat-form-field-filled-with-label-container-padding-bottom, 8px);
}
.mdc-text-field--outlined .mat-mdc-form-field-infix, .mdc-text-field--no-label .mat-mdc-form-field-infix {
  padding-top: var(--mat-form-field-container-vertical-padding, 16px);
  padding-bottom: var(--mat-form-field-container-vertical-padding, 16px);
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label {
  top: calc(var(--mat-form-field-container-height, 56px) / 2);
}

.mdc-text-field--filled .mat-mdc-floating-label {
  display: var(--mat-form-field-filled-label-display, block);
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  --mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--mat-form-field-container-height, 56px) / 2) * -1))
    scale(var(--mat-mdc-form-field-floating-label-scale, 0.75));
  transform: var(--mat-mdc-form-field-label-transform);
}

@keyframes _mat-form-field-subscript-animation {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.mat-mdc-form-field-subscript-wrapper {
  box-sizing: border-box;
  width: 100%;
  position: relative;
}

.mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-error-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 16px;
  opacity: 1;
  transform: translateY(0);
  animation: _mat-form-field-subscript-animation 0ms cubic-bezier(0.55, 0, 0.55, 0.2);
}

.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper {
  position: static;
}

.mat-mdc-form-field-bottom-align::before {
  content: "";
  display: inline-block;
  height: 16px;
}

.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before {
  content: unset;
}

.mat-mdc-form-field-hint-end {
  order: 1;
}

.mat-mdc-form-field-hint-wrapper {
  display: flex;
}

.mat-mdc-form-field-hint-spacer {
  flex: 1 0 1em;
}

.mat-mdc-form-field-error {
  display: block;
  color: var(--mat-form-field-error-text-color, var(--mat-sys-error));
}

.mat-mdc-form-field-subscript-wrapper,
.mat-mdc-form-field-bottom-align::before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-subscript-text-font, var(--mat-sys-body-small-font));
  line-height: var(--mat-form-field-subscript-text-line-height, var(--mat-sys-body-small-line-height));
  font-size: var(--mat-form-field-subscript-text-size, var(--mat-sys-body-small-size));
  letter-spacing: var(--mat-form-field-subscript-text-tracking, var(--mat-sys-body-small-tracking));
  font-weight: var(--mat-form-field-subscript-text-weight, var(--mat-sys-body-small-weight));
}

.mat-mdc-form-field-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  background-color: var(--mat-form-field-state-layer-color, var(--mat-sys-on-surface));
}
.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-focus-state-layer-opacity, 0);
}

select.mat-mdc-form-field-input-control {
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: transparent;
  display: inline-flex;
  box-sizing: border-box;
}
select.mat-mdc-form-field-input-control:not(:disabled) {
  cursor: pointer;
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option {
  color: var(--mat-form-field-select-option-text-color, var(--mat-sys-neutral10));
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled {
  color: var(--mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--mat-sys-neutral10) 38%, transparent));
}

.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  content: "";
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -2.5px;
  pointer-events: none;
  color: var(--mat-form-field-enabled-select-arrow-color, var(--mat-sys-on-surface-variant));
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  right: auto;
  left: 0;
}
.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-focus-select-arrow-color, var(--mat-sys-primary));
}
.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 15px;
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 0;
  padding-left: 15px;
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill .mat-mdc-text-field-wrapper {
    outline: solid 1px;
  }
}
@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper {
    outline-color: GrayText;
  }
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper {
    outline: dashed 3px;
  }
}

@media (forced-colors: active) {
  .mat-mdc-form-field.mat-focused .mdc-notched-outline {
    border: dashed 3px;
  }
}

.mat-mdc-form-field-input-control[type=date], .mat-mdc-form-field-input-control[type=datetime], .mat-mdc-form-field-input-control[type=datetime-local], .mat-mdc-form-field-input-control[type=month], .mat-mdc-form-field-input-control[type=week], .mat-mdc-form-field-input-control[type=time] {
  line-height: 1;
}
.mat-mdc-form-field-input-control::-webkit-datetime-edit {
  line-height: 1;
  padding: 0;
  margin-bottom: -2px;
}

.mat-mdc-form-field {
  --mat-mdc-form-field-floating-label-scale: 0.75;
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
  text-align: left;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-container-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-form-field-container-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-form-field-container-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-form-field-container-text-tracking, var(--mat-sys-body-large-tracking));
  font-weight: var(--mat-form-field-container-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above {
  font-size: calc(var(--mat-form-field-outlined-label-text-populated-size) * var(--mat-mdc-form-field-floating-label-scale));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: var(--mat-form-field-outlined-label-text-populated-size);
}
[dir=rtl] .mat-mdc-form-field {
  text-align: right;
}

.mat-mdc-form-field-flex {
  display: inline-flex;
  align-items: baseline;
  box-sizing: border-box;
  width: 100%;
}

.mat-mdc-text-field-wrapper {
  width: 100%;
  z-index: 0;
}

.mat-mdc-form-field-icon-prefix,
.mat-mdc-form-field-icon-suffix {
  align-self: center;
  line-height: 0;
  pointer-events: auto;
  position: relative;
  z-index: 1;
}
.mat-mdc-form-field-icon-prefix > .mat-icon,
.mat-mdc-form-field-icon-suffix > .mat-icon {
  padding: 0 12px;
  box-sizing: content-box;
}

.mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-leading-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-trailing-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-invalid .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-trailing-icon-color, var(--mat-sys-error));
}
.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-hover-trailing-icon-color, var(--mat-sys-on-error-container));
}
.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-focus-trailing-icon-color, var(--mat-sys-error));
}

.mat-mdc-form-field-icon-prefix,
[dir=rtl] .mat-mdc-form-field-icon-suffix {
  padding: 0 4px 0 0;
}

.mat-mdc-form-field-icon-suffix,
[dir=rtl] .mat-mdc-form-field-icon-prefix {
  padding: 0 0 0 4px;
}

.mat-mdc-form-field-subscript-wrapper .mat-icon,
.mat-mdc-form-field label .mat-icon {
  width: 1em;
  height: 1em;
  font-size: inherit;
}

.mat-mdc-form-field-infix {
  flex: auto;
  min-width: 0;
  width: 180px;
  position: relative;
  box-sizing: border-box;
}
.mat-mdc-form-field-infix:has(textarea[cols]) {
  width: auto;
}

.mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: -1px;
  -webkit-clip-path: inset(-9em -999em -9em 1px);
  clip-path: inset(-9em -999em -9em 1px);
}
[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: 0;
  margin-right: -1px;
  -webkit-clip-path: inset(-9em 1px -9em -999em);
  clip-path: inset(-9em 1px -9em -999em);
}

.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-floating-label {
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input {
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-moz-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-webkit-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input:-ms-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before {
  transition-duration: 75ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-line-ripple::after {
  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-error-wrapper {
  animation-duration: 300ms;
}

.mdc-notched-outline .mdc-floating-label {
  max-width: calc(100% + 1px);
}

.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: calc(133.3333333333% + 1px);
}
`],encapsulation:2,changeDetection:0})}return t})();var $r=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=V({type:t});static \u0275inj=P({imports:[Yo,Zi,ge]})}return t})();function FD(t){return Error(`Unable to find icon with the name "${t}"`)}function UO(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function PD(t){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${t}".`)}function LD(t){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${t}".`)}var hi=class{url;svgText;options;svgElement=null;constructor(n,e,i){this.url=n,this.svgText=e,this.options=i}},BD=(()=>{class t{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(e,i,r,o){this._httpClient=e,this._sanitizer=i,this._errorHandler=o,this._document=r}addSvgIcon(e,i,r){return this.addSvgIconInNamespace("",e,i,r)}addSvgIconLiteral(e,i,r){return this.addSvgIconLiteralInNamespace("",e,i,r)}addSvgIconInNamespace(e,i,r,o){return this._addSvgIconConfig(e,i,new hi(r,null,o))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,i,r,o){let a=this._sanitizer.sanitize(Mt.HTML,r);if(!a)throw LD(r);let s=Zo(a);return this._addSvgIconConfig(e,i,new hi("",s,o))}addSvgIconSet(e,i){return this.addSvgIconSetInNamespace("",e,i)}addSvgIconSetLiteral(e,i){return this.addSvgIconSetLiteralInNamespace("",e,i)}addSvgIconSetInNamespace(e,i,r){return this._addSvgIconSetConfig(e,new hi(i,null,r))}addSvgIconSetLiteralInNamespace(e,i,r){let o=this._sanitizer.sanitize(Mt.HTML,i);if(!o)throw LD(i);let a=Zo(o);return this._addSvgIconSetConfig(e,new hi("",a,r))}registerFontClassAlias(e,i=e){return this._fontCssClassesByAlias.set(e,i),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(e){let i=this._sanitizer.sanitize(Mt.RESOURCE_URL,e);if(!i)throw PD(e);let r=this._cachedIconsByUrl.get(i);return r?O(Iu(r)):this._loadSvgIconFromConfig(new hi(e,null)).pipe(je(o=>this._cachedIconsByUrl.set(i,o)),X(o=>Iu(o)))}getNamedSvgIcon(e,i=""){let r=jD(i,e),o=this._svgIconConfigs.get(r);if(o)return this._getSvgFromConfig(o);if(o=this._getIconConfigFromResolvers(i,e),o)return this._svgIconConfigs.set(r,o),this._getSvgFromConfig(o);let a=this._iconSetConfigs.get(i);return a?this._getSvgFromIconSetConfigs(e,a):sr(FD(r))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?O(Iu(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe(X(i=>Iu(i)))}_getSvgFromIconSetConfigs(e,i){let r=this._extractIconWithNameFromAnySet(e,i);if(r)return O(r);let o=i.filter(a=>!a.svgText).map(a=>this._loadSvgIconSetFromConfig(a).pipe(Ci(s=>{let l=`Loading icon set URL: ${this._sanitizer.sanitize(Mt.RESOURCE_URL,a.url)} failed: ${s.message}`;return this._errorHandler.handleError(new Error(l)),O(null)})));return Aa(o).pipe(X(()=>{let a=this._extractIconWithNameFromAnySet(e,i);if(!a)throw FD(e);return a}))}_extractIconWithNameFromAnySet(e,i){for(let r=i.length-1;r>=0;r--){let o=i[r];if(o.svgText&&o.svgText.toString().indexOf(e)>-1){let a=this._svgElementFromConfig(o),s=this._extractSvgIconFromSet(a,e,o.options);if(s)return s}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe(je(i=>e.svgText=i),X(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?O(null):this._fetchIcon(e).pipe(je(i=>e.svgText=i))}_extractSvgIconFromSet(e,i,r){let o=e.querySelector(`[id="${i}"]`);if(!o)return null;let a=o.cloneNode(!0);if(a.removeAttribute("id"),a.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(a,r);if(a.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(a),r);let s=this._svgElementFromString(Zo("<svg></svg>"));return s.appendChild(a),this._setSvgAttributes(s,r)}_svgElementFromString(e){let i=this._document.createElement("DIV");i.innerHTML=e;let r=i.querySelector("svg");if(!r)throw Error("<svg> tag not found");return r}_toSvgElement(e){let i=this._svgElementFromString(Zo("<svg></svg>")),r=e.attributes;for(let o=0;o<r.length;o++){let{name:a,value:s}=r[o];a!=="id"&&i.setAttribute(a,s)}for(let o=0;o<e.childNodes.length;o++)e.childNodes[o].nodeType===this._document.ELEMENT_NODE&&i.appendChild(e.childNodes[o].cloneNode(!0));return i}_setSvgAttributes(e,i){return e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),i&&i.viewBox&&e.setAttribute("viewBox",i.viewBox),e}_fetchIcon(e){let{url:i,options:r}=e,o=r?.withCredentials??!1;if(!this._httpClient)throw UO();if(i==null)throw Error(`Cannot fetch icon from URL "${i}".`);let a=this._sanitizer.sanitize(Mt.RESOURCE_URL,i);if(!a)throw PD(i);let s=this._inProgressUrlFetches.get(a);if(s)return s;let c=this._httpClient.get(a,{responseType:"text",withCredentials:o}).pipe(X(l=>Zo(l)),xi(()=>this._inProgressUrlFetches.delete(a)),Na());return this._inProgressUrlFetches.set(a,c),c}_addSvgIconConfig(e,i,r){return this._svgIconConfigs.set(jD(e,i),r),this}_addSvgIconSetConfig(e,i){let r=this._iconSetConfigs.get(e);return r?r.push(i):this._iconSetConfigs.set(e,[i]),this}_svgElementFromConfig(e){if(!e.svgElement){let i=this._svgElementFromString(e.svgText);this._setSvgAttributes(i,e.options),e.svgElement=i}return e.svgElement}_getIconConfigFromResolvers(e,i){for(let r=0;r<this._resolvers.length;r++){let o=this._resolvers[r](i,e);if(o)return zO(o)?new hi(o.url,null,o.options):new hi(o,null)}}static \u0275fac=function(i){return new(i||t)(T(yt,8),T(Yp),T(j,8),T(gt))};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Iu(t){return t.cloneNode(!0)}function jD(t,n){return t+":"+n}function zO(t){return!!(t.url&&t.options)}var $O=["*"],WO=new g("MAT_ICON_DEFAULT_OPTIONS"),GO=new g("mat-icon-location",{providedIn:"root",factory:()=>{let t=d(j),n=t?t.location:null;return{getPathname:()=>n?n.pathname+n.search:""}}}),VD=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],qO=VD.map(t=>`[${t}]`).join(", "),ZO=/^url\(['"]?#(.*?)['"]?\)$/,ta=(()=>{class t{_elementRef=d(F);_iconRegistry=d(BD);_location=d(GO);_errorHandler=d(gt);_defaultColor;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(e){let i=this._cleanupFontValue(e);i!==this._fontSet&&(this._fontSet=i,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(e){let i=this._cleanupFontValue(e);i!==this._fontIcon&&(this._fontIcon=i,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=se.EMPTY;constructor(){let e=d(new Bi("aria-hidden"),{optional:!0}),i=d(WO,{optional:!0});i&&(i.color&&(this.color=this._defaultColor=i.color),i.fontSet&&(this.fontSet=i.fontSet)),e||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(e){if(!e)return["",""];let i=e.split(":");switch(i.length){case 1:return["",i[0]];case 2:return i;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let i=this._location.getPathname();i!==this._previousPath&&(this._previousPath=i,this._prependPathToReferences(i))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();let i=this._location.getPathname();this._previousPath=i,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(i),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){let e=this._elementRef.nativeElement,i=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();i--;){let r=e.childNodes[i];(r.nodeType!==1||r.nodeName.toLowerCase()==="svg")&&r.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,i=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(r=>r.length>0);this._previousFontSetClass.forEach(r=>e.classList.remove(r)),i.forEach(r=>e.classList.add(r)),this._previousFontSetClass=i,this.fontIcon!==this._previousFontIconClass&&!i.includes("mat-ligature-font")&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return typeof e=="string"?e.trim().split(" ")[0]:e}_prependPathToReferences(e){let i=this._elementsWithExternalReferences;i&&i.forEach((r,o)=>{r.forEach(a=>{o.setAttribute(a.name,`url('${e}#${a.value}')`)})})}_cacheChildrenWithExternalReferences(e){let i=e.querySelectorAll(qO),r=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let o=0;o<i.length;o++)VD.forEach(a=>{let s=i[o],c=s.getAttribute(a),l=c?c.match(ZO):null;if(l){let u=r.get(s);u||(u=[],r.set(s,u)),u.push({name:a,value:l[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[i,r]=this._splitIconName(e);i&&(this._svgNamespace=i),r&&(this._svgName=r),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(r,i).pipe(Ge(1)).subscribe(o=>this._setSvgElement(o),o=>{let a=`Error retrieving icon ${i}:${r}! ${o.message}`;this._errorHandler.handleError(new Error(a))})}}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=E({type:t,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(i,r){i&2&&(oe("data-mat-icon-type",r._usingFontIcon()?"font":"svg")("data-mat-icon-name",r._svgName||r.fontIcon)("data-mat-icon-namespace",r._svgNamespace||r.fontSet)("fontIcon",r._usingFontIcon()?r.fontIcon:null),qt(r.color?"mat-"+r.color:""),W("mat-icon-inline",r.inline)("mat-icon-no-color",r.color!=="primary"&&r.color!=="accent"&&r.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",ae],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:$O,decls:1,vars:0,template:function(i,r){i&1&&(xe(),K(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
  color: var(--mat-icon-color, inherit);
}

.mat-icon {
  -webkit-user-select: none;
  user-select: none;
  background-repeat: no-repeat;
  display: inline-block;
  fill: currentColor;
  height: 24px;
  width: 24px;
  overflow: hidden;
}
.mat-icon.mat-icon-inline {
  font-size: inherit;
  height: inherit;
  line-height: inherit;
  width: inherit;
}
.mat-icon.mat-ligature-font[fontIcon]::before {
  content: attr(fontIcon);
}

[dir=rtl] .mat-icon-rtl-mirror {
  transform: scale(-1, 1);
}

.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon {
  display: block;
}
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon {
  margin: auto;
}
`],encapsulation:2,changeDetection:0})}return t})(),na=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=V({type:t});static \u0275inj=P({imports:[ge]})}return t})();var QO=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=E({type:t,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(i,r){},styles:[`textarea.cdk-textarea-autosize {
  resize: none;
}

textarea.cdk-textarea-autosize-measuring {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: auto !important;
  overflow: hidden !important;
}

textarea.cdk-textarea-autosize-measuring-firefox {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: 0 !important;
}

@keyframes cdk-text-field-autofill-start { /*!*/ }
@keyframes cdk-text-field-autofill-end { /*!*/ }
.cdk-text-field-autofill-monitored:-webkit-autofill {
  animation: cdk-text-field-autofill-start 0s 1ms;
}

.cdk-text-field-autofill-monitored:not(:-webkit-autofill) {
  animation: cdk-text-field-autofill-end 0s 1ms;
}
`],encapsulation:2,changeDetection:0})}return t})(),YO={passive:!0},HD=(()=>{class t{_platform=d(de);_ngZone=d(k);_renderer=d(ze).createRenderer(null,null);_styleLoader=d(at);_monitoredElements=new Map;constructor(){}monitor(e){if(!this._platform.isBrowser)return Te;this._styleLoader.load(QO);let i=At(e),r=this._monitoredElements.get(i);if(r)return r.subject;let o=new x,a="cdk-text-field-autofilled",s=l=>{l.animationName==="cdk-text-field-autofill-start"&&!i.classList.contains(a)?(i.classList.add(a),this._ngZone.run(()=>o.next({target:l.target,isAutofilled:!0}))):l.animationName==="cdk-text-field-autofill-end"&&i.classList.contains(a)&&(i.classList.remove(a),this._ngZone.run(()=>o.next({target:l.target,isAutofilled:!1})))},c=this._ngZone.runOutsideAngular(()=>(i.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(i,"animationstart",s,YO)));return this._monitoredElements.set(i,{subject:o,unlisten:c}),o}stopMonitoring(e){let i=At(e),r=this._monitoredElements.get(i);r&&(r.unlisten(),r.subject.complete(),i.classList.remove("cdk-text-field-autofill-monitored"),i.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(i))}ngOnDestroy(){this._monitoredElements.forEach((e,i)=>this.stopMonitoring(i))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var UD=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=V({type:t});static \u0275inj=P({})}return t})();var YD=(()=>{class t{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,i){this._renderer=e,this._elementRef=i}setProperty(e,i){this._renderer.setProperty(this._elementRef.nativeElement,e,i)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(i){return new(i||t)(De(Se),De(F))};static \u0275dir=S({type:t})}return t})(),KO=(()=>{class t extends YD{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Re(t)))(r||t)}})();static \u0275dir=S({type:t,features:[me]})}return t})(),Bu=new g("");var XO={provide:Bu,useExisting:Ht(()=>oa),multi:!0};function JO(){let t=sn()?sn().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var eF=new g(""),oa=(()=>{class t extends YD{_compositionMode;_composing=!1;constructor(e,i,r){super(e,i),this._compositionMode=r,this._compositionMode==null&&(this._compositionMode=!JO())}writeValue(e){let i=e??"";this.setProperty("value",i)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(i){return new(i||t)(De(Se),De(F),De(eF,8))};static \u0275dir=S({type:t,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(i,r){i&1&&H("input",function(a){return r._handleInput(a.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(a){return r._compositionEnd(a.target.value)})},standalone:!1,features:[ke([XO]),me]})}return t})();function ib(t){return t==null||rb(t)===0}function rb(t){return t==null?null:Array.isArray(t)||typeof t=="string"?t.length:t instanceof Set?t.size:null}var tc=new g(""),ob=new g(""),tF=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,Su=class{static min(n){return nF(n)}static max(n){return iF(n)}static required(n){return rF(n)}static requiredTrue(n){return oF(n)}static email(n){return aF(n)}static minLength(n){return sF(n)}static maxLength(n){return cF(n)}static pattern(n){return lF(n)}static nullValidator(n){return KD()}static compose(n){return ix(n)}static composeAsync(n){return rx(n)}};function nF(t){return n=>{if(n.value==null||t==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e<t?{min:{min:t,actual:n.value}}:null}}function iF(t){return n=>{if(n.value==null||t==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e>t?{max:{max:t,actual:n.value}}:null}}function rF(t){return ib(t.value)?{required:!0}:null}function oF(t){return t.value===!0?null:{required:!0}}function aF(t){return ib(t.value)||tF.test(t.value)?null:{email:!0}}function sF(t){return n=>{let e=n.value?.length??rb(n.value);return e===null||e===0?null:e<t?{minlength:{requiredLength:t,actualLength:e}}:null}}function cF(t){return n=>{let e=n.value?.length??rb(n.value);return e!==null&&e>t?{maxlength:{requiredLength:t,actualLength:e}}:null}}function lF(t){if(!t)return KD;let n,e;return typeof t=="string"?(e="",t.charAt(0)!=="^"&&(e+="^"),e+=t,t.charAt(t.length-1)!=="$"&&(e+="$"),n=new RegExp(e)):(e=t.toString(),n=t),i=>{if(ib(i.value))return null;let r=i.value;return n.test(r)?null:{pattern:{requiredPattern:e,actualValue:r}}}}function KD(t){return null}function XD(t){return t!=null}function JD(t){return si(t)?Ie(t):t}function ex(t){let n={};return t.forEach(e=>{n=e!=null?v(v({},n),e):n}),Object.keys(n).length===0?null:n}function tx(t,n){return n.map(e=>e(t))}function dF(t){return!t.validate}function nx(t){return t.map(n=>dF(n)?n:e=>n.validate(e))}function ix(t){if(!t)return null;let n=t.filter(XD);return n.length==0?null:function(e){return ex(tx(e,n))}}function ab(t){return t!=null?ix(nx(t)):null}function rx(t){if(!t)return null;let n=t.filter(XD);return n.length==0?null:function(e){let i=tx(e,n).map(JD);return Aa(i).pipe(X(ex))}}function sb(t){return t!=null?rx(nx(t)):null}function zD(t,n){return t===null?[n]:Array.isArray(t)?[...t,n]:[t,n]}function ox(t){return t._rawValidators}function ax(t){return t._rawAsyncValidators}function tb(t){return t?Array.isArray(t)?t:[t]:[]}function ku(t,n){return Array.isArray(t)?t.includes(n):t===n}function $D(t,n){let e=tb(n);return tb(t).forEach(r=>{ku(e,r)||e.push(r)}),e}function WD(t,n){return tb(n).filter(e=>!ku(t,e))}var Tu=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(n){this._rawValidators=n||[],this._composedValidatorFn=ab(this._rawValidators)}_setAsyncValidators(n){this._rawAsyncValidators=n||[],this._composedAsyncValidatorFn=sb(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(n){this._onDestroyCallbacks.push(n)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(n=>n()),this._onDestroyCallbacks=[]}reset(n=void 0){this.control?.reset(n)}hasError(n,e){return this.control?this.control.hasError(n,e):!1}getError(n,e){return this.control?this.control.getError(n,e):null}},Wr=class extends Tu{name;get formDirective(){return null}get path(){return null}},Gr=class extends Tu{_parent=null;name=null;valueAccessor=null},nb=class{_cd;constructor(n){this._cd=n}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var Vu=(()=>{class t extends nb{constructor(e){super(e)}static \u0275fac=function(i){return new(i||t)(De(Gr,2))};static \u0275dir=S({type:t,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(i,r){i&2&&W("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},standalone:!1,features:[me]})}return t})();var Ys="VALID",Mu="INVALID",ia="PENDING",Ks="DISABLED",Qi=class{},Au=class extends Qi{value;source;constructor(n,e){super(),this.value=n,this.source=e}},Js=class extends Qi{pristine;source;constructor(n,e){super(),this.pristine=n,this.source=e}},ec=class extends Qi{touched;source;constructor(n,e){super(),this.touched=n,this.source=e}},ra=class extends Qi{status;source;constructor(n,e){super(),this.status=n,this.source=e}},Ru=class extends Qi{source;constructor(n){super(),this.source=n}},Nu=class extends Qi{source;constructor(n){super(),this.source=n}};function sx(t){return(Hu(t)?t.validators:t)||null}function uF(t){return Array.isArray(t)?ab(t):t||null}function cx(t,n){return(Hu(n)?n.asyncValidators:t)||null}function fF(t){return Array.isArray(t)?sb(t):t||null}function Hu(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function mF(t,n,e){let i=t.controls;if(!(n?Object.keys(i):i).length)throw new D(1e3,"");if(!i[e])throw new D(1001,"")}function hF(t,n,e){t._forEachChild((i,r)=>{if(e[r]===void 0)throw new D(1002,"")})}var Ou=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(n,e){this._assignValidators(n),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(n){this._rawValidators=this._composedValidatorFn=n}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(n){this._rawAsyncValidators=this._composedAsyncValidatorFn=n}get parent(){return this._parent}get status(){return Pe(this.statusReactive)}set status(n){Pe(()=>this.statusReactive.set(n))}_status=ot(()=>this.statusReactive());statusReactive=B(void 0);get valid(){return this.status===Ys}get invalid(){return this.status===Mu}get pending(){return this.status===ia}get disabled(){return this.status===Ks}get enabled(){return this.status!==Ks}errors;get pristine(){return Pe(this.pristineReactive)}set pristine(n){Pe(()=>this.pristineReactive.set(n))}_pristine=ot(()=>this.pristineReactive());pristineReactive=B(!0);get dirty(){return!this.pristine}get touched(){return Pe(this.touchedReactive)}set touched(n){Pe(()=>this.touchedReactive.set(n))}_touched=ot(()=>this.touchedReactive());touchedReactive=B(!1);get untouched(){return!this.touched}_events=new x;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(n){this._assignValidators(n)}setAsyncValidators(n){this._assignAsyncValidators(n)}addValidators(n){this.setValidators($D(n,this._rawValidators))}addAsyncValidators(n){this.setAsyncValidators($D(n,this._rawAsyncValidators))}removeValidators(n){this.setValidators(WD(n,this._rawValidators))}removeAsyncValidators(n){this.setAsyncValidators(WD(n,this._rawAsyncValidators))}hasValidator(n){return ku(this._rawValidators,n)}hasAsyncValidator(n){return ku(this._rawAsyncValidators,n)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(n={}){let e=this.touched===!1;this.touched=!0;let i=n.sourceControl??this;n.onlySelf||this._parent?.markAsTouched(G(v({},n),{sourceControl:i})),e&&n.emitEvent!==!1&&this._events.next(new ec(!0,i))}markAllAsDirty(n={}){this.markAsDirty({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(n))}markAllAsTouched(n={}){this.markAsTouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(n))}markAsUntouched(n={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let i=n.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:i})}),n.onlySelf||this._parent?._updateTouched(n,i),e&&n.emitEvent!==!1&&this._events.next(new ec(!1,i))}markAsDirty(n={}){let e=this.pristine===!0;this.pristine=!1;let i=n.sourceControl??this;n.onlySelf||this._parent?.markAsDirty(G(v({},n),{sourceControl:i})),e&&n.emitEvent!==!1&&this._events.next(new Js(!1,i))}markAsPristine(n={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let i=n.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:n.emitEvent})}),n.onlySelf||this._parent?._updatePristine(n,i),e&&n.emitEvent!==!1&&this._events.next(new Js(!0,i))}markAsPending(n={}){this.status=ia;let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new ra(this.status,e)),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.markAsPending(G(v({},n),{sourceControl:e}))}disable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=Ks,this.errors=null,this._forEachChild(r=>{r.disable(G(v({},n),{onlySelf:!0}))}),this._updateValue();let i=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new Au(this.value,i)),this._events.next(new ra(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(G(v({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=Ys,this._forEachChild(i=>{i.enable(G(v({},n),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent}),this._updateAncestors(G(v({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(n,e){n.onlySelf||(this._parent?.updateValueAndValidity(n),n.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(n){this._parent=n}getRawValue(){return this.value}updateValueAndValidity(n={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Ys||this.status===ia)&&this._runAsyncValidator(i,n.emitEvent)}let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new Au(this.value,e)),this._events.next(new ra(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.updateValueAndValidity(G(v({},n),{sourceControl:e}))}_updateTreeValidity(n={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(n)),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Ks:Ys}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(n,e){if(this.asyncValidator){this.status=ia,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:n!==!1};let i=JD(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:e,shouldHaveEmitted:n})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let n=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,n}return!1}setErrors(n,e={}){this.errors=n,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(n){let e=n;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((i,r)=>i&&i._find(r),this)}getError(n,e){let i=e?this.get(e):this;return i?.errors?i.errors[n]:null}hasError(n,e){return!!this.getError(n,e)}get root(){let n=this;for(;n._parent;)n=n._parent;return n}_updateControlsErrors(n,e,i){this.status=this._calculateStatus(),n&&this.statusChanges.emit(this.status),(n||i)&&this._events.next(new ra(this.status,e)),this._parent&&this._parent._updateControlsErrors(n,e,i)}_initObservables(){this.valueChanges=new R,this.statusChanges=new R}_calculateStatus(){return this._allControlsDisabled()?Ks:this.errors?Mu:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(ia)?ia:this._anyControlsHaveStatus(Mu)?Mu:Ys}_anyControlsHaveStatus(n){return this._anyControls(e=>e.status===n)}_anyControlsDirty(){return this._anyControls(n=>n.dirty)}_anyControlsTouched(){return this._anyControls(n=>n.touched)}_updatePristine(n,e){let i=!this._anyControlsDirty(),r=this.pristine!==i;this.pristine=i,n.onlySelf||this._parent?._updatePristine(n,e),r&&this._events.next(new Js(this.pristine,e))}_updateTouched(n={},e){this.touched=this._anyControlsTouched(),this._events.next(new ec(this.touched,e)),n.onlySelf||this._parent?._updateTouched(n,e)}_onDisabledChange=[];_registerOnCollectionChange(n){this._onCollectionChange=n}_setUpdateStrategy(n){Hu(n)&&n.updateOn!=null&&(this._updateOn=n.updateOn)}_parentMarkedDirty(n){return!n&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(n){return null}_assignValidators(n){this._rawValidators=Array.isArray(n)?n.slice():n,this._composedValidatorFn=uF(this._rawValidators)}_assignAsyncValidators(n){this._rawAsyncValidators=Array.isArray(n)?n.slice():n,this._composedAsyncValidatorFn=fF(this._rawAsyncValidators)}},Fu=class extends Ou{constructor(n,e,i){super(sx(e),cx(i,e)),this.controls=n,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(n,e){return this.controls[n]?this.controls[n]:(this.controls[n]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(n,e,i={}){this.registerControl(n,e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(n,e={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(n,e,i={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],e&&this.registerControl(n,e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(n){return this.controls.hasOwnProperty(n)&&this.controls[n].enabled}setValue(n,e={}){hF(this,!0,n),Object.keys(n).forEach(i=>{mF(this,!0,i),this.controls[i].setValue(n[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(n,e={}){n!=null&&(Object.keys(n).forEach(i=>{let r=this.controls[i];r&&r.patchValue(n[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(n={},e={}){this._forEachChild((i,r)=>{i.reset(n?n[r]:null,G(v({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new Nu(this))}getRawValue(){return this._reduceChildren({},(n,e,i)=>(n[i]=e.getRawValue(),n))}_syncPendingControls(){let n=this._reduceChildren(!1,(e,i)=>i._syncPendingControls()?!0:e);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){Object.keys(this.controls).forEach(e=>{let i=this.controls[e];i&&n(i,e)})}_setUpControls(){this._forEachChild(n=>{n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(n){for(let[e,i]of Object.entries(this.controls))if(this.contains(e)&&n(i))return!0;return!1}_reduceValue(){let n={};return this._reduceChildren(n,(e,i,r)=>((i.enabled||this.disabled)&&(e[r]=i.value),e))}_reduceChildren(n,e){let i=n;return this._forEachChild((r,o)=>{i=e(i,r,o)}),i}_allControlsDisabled(){for(let n of Object.keys(this.controls))if(this.controls[n].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(n){return this.controls.hasOwnProperty(n)?this.controls[n]:null}};var Uu=new g("",{factory:()=>cb}),cb="always";function pF(t,n){return[...n.path,t]}function Pu(t,n,e=cb){lb(t,n),n.valueAccessor.writeValue(t.value),(t.disabled||e==="always")&&n.valueAccessor.setDisabledState?.(t.disabled),bF(t,n),_F(t,n),vF(t,n),gF(t,n)}function GD(t,n,e=!0){let i=()=>{};n?.valueAccessor?.registerOnChange(i),n?.valueAccessor?.registerOnTouched(i),ju(t,n),t&&(n._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function Lu(t,n){t.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(n)})}function gF(t,n){if(n.valueAccessor.setDisabledState){let e=i=>{n.valueAccessor.setDisabledState(i)};t.registerOnDisabledChange(e),n._registerOnDestroy(()=>{t._unregisterOnDisabledChange(e)})}}function lb(t,n){let e=ox(t);n.validator!==null?t.setValidators(zD(e,n.validator)):typeof e=="function"&&t.setValidators([e]);let i=ax(t);n.asyncValidator!==null?t.setAsyncValidators(zD(i,n.asyncValidator)):typeof i=="function"&&t.setAsyncValidators([i]);let r=()=>t.updateValueAndValidity();Lu(n._rawValidators,r),Lu(n._rawAsyncValidators,r)}function ju(t,n){let e=!1;if(t!==null){if(n.validator!==null){let r=ox(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==n.validator);o.length!==r.length&&(e=!0,t.setValidators(o))}}if(n.asyncValidator!==null){let r=ax(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==n.asyncValidator);o.length!==r.length&&(e=!0,t.setAsyncValidators(o))}}}let i=()=>{};return Lu(n._rawValidators,i),Lu(n._rawAsyncValidators,i),e}function bF(t,n){n.valueAccessor.registerOnChange(e=>{t._pendingValue=e,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&lx(t,n)})}function vF(t,n){n.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&lx(t,n),t.updateOn!=="submit"&&t.markAsTouched()})}function lx(t,n){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),n.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function _F(t,n){let e=(i,r)=>{n.valueAccessor.writeValue(i),r&&n.viewToModelUpdate(i)};t.registerOnChange(e),n._registerOnDestroy(()=>{t._unregisterOnChange(e)})}function dx(t,n){t==null,lb(t,n)}function yF(t,n){return ju(t,n)}function wF(t,n){if(!t.hasOwnProperty("model"))return!1;let e=t.model;return e.isFirstChange()?!0:!Object.is(n,e.currentValue)}function CF(t){return Object.getPrototypeOf(t.constructor)===KO}function ux(t,n){t._syncPendingControls(),n.forEach(e=>{let i=e.control;i.updateOn==="submit"&&i._pendingChange&&(e.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function DF(t,n){if(!n)return null;Array.isArray(n);let e,i,r;return n.forEach(o=>{o.constructor===oa?e=o:CF(o)?i=o:r=o}),r||i||e||null}function xF(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}var EF={provide:Wr,useExisting:Ht(()=>db)},Xs=Promise.resolve(),db=(()=>{class t extends Wr{callSetDisabledState;get submitted(){return Pe(this.submittedReactive)}_submitted=ot(()=>this.submittedReactive());submittedReactive=B(!1);_directives=new Set;form;ngSubmit=new R;options;constructor(e,i,r){super(),this.callSetDisabledState=r,this.form=new Fu({},ab(e),sb(i))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){Xs.then(()=>{let i=this._findContainer(e.path);e.control=i.registerControl(e.name,e.control),Pu(e.control,e,this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){Xs.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){Xs.then(()=>{let i=this._findContainer(e.path),r=new Fu({});dx(r,e),i.registerControl(e.name,r),r.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){Xs.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,i){Xs.then(()=>{this.form.get(e.path).setValue(i)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),ux(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new Ru(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static \u0275fac=function(i){return new(i||t)(De(tc,10),De(ob,10),De(Uu,8))};static \u0275dir=S({type:t,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(i,r){i&1&&H("submit",function(a){return r.onSubmit(a)})("reset",function(){return r.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[ke([EF]),me]})}return t})();function qD(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}function ZD(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var fx=class extends Ou{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(n=null,e,i){super(sx(e),cx(i,e)),this._applyFormState(n),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Hu(e)&&(e.nonNullable||e.initialValueIsDefault)&&(ZD(n)?this.defaultValue=n.value:this.defaultValue=n)}setValue(n,e={}){this.value=this._pendingValue=n,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(n,e={}){this.setValue(n,e)}reset(n=this.defaultValue,e={}){this._applyFormState(n),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new Nu(this))}_updateValue(){}_anyControls(n){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(n){this._onChange.push(n)}_unregisterOnChange(n){qD(this._onChange,n)}registerOnDisabledChange(n){this._onDisabledChange.push(n)}_unregisterOnDisabledChange(n){qD(this._onDisabledChange,n)}_forEachChild(n){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(n){ZD(n)?(this.value=this._pendingValue=n.value,n.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=n}};var IF=t=>t instanceof fx;var MF={provide:Gr,useExisting:Ht(()=>nc)},QD=Promise.resolve(),nc=(()=>{class t extends Gr{_changeDetectorRef;callSetDisabledState;control=new fx;static ngAcceptInputType_isDisabled;_registered=!1;viewModel;name="";isDisabled;model;options;update=new R;constructor(e,i,r,o,a,s){super(),this._changeDetectorRef=a,this.callSetDisabledState=s,this._parent=e,this._setValidators(i),this._setAsyncValidators(r),this.valueAccessor=DF(this,o)}ngOnChanges(e){if(this._checkForErrors(),!this._registered||"name"in e){if(this._registered&&(this._checkName(),this.formDirective)){let i=e.name.previousValue;this.formDirective.removeControl({name:i,path:this._getPath(i)})}this._setUpControl()}"isDisabled"in e&&this._updateDisabled(e),wF(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective?.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){Pu(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._checkName()}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(e){QD.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(e){let i=e.isDisabled.currentValue,r=i!==0&&ae(i);QD.then(()=>{r&&!this.control.disabled?this.control.disable():!r&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(e){return this._parent?pF(e,this._parent):[e]}static \u0275fac=function(i){return new(i||t)(De(Wr,9),De(tc,10),De(ob,10),De(Bu,10),De(We,8),De(Uu,8))};static \u0275dir=S({type:t,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[ke([MF]),me,$e]})}return t})();var SF=(()=>{class t extends Wr{callSetDisabledState;get submitted(){return Pe(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=ot(()=>this._submittedReactive());_submittedReactive=B(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,i,r){super(),this.callSetDisabledState=r,this._setValidators(e),this._setAsyncValidators(i)}ngOnChanges(e){this.onChanges(e)}ngOnDestroy(){this.onDestroy()}onChanges(e){this._checkFormPresent(),e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(ju(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(e){let i=this.form.get(e.path);return Pu(i,e,this.callSetDisabledState),i.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),i}getControl(e){return this.form.get(e.path)}removeControl(e){GD(e.control||null,e,!1),xF(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}updateModel(e,i){this.form.get(e.path).setValue(i)}onReset(){this.resetForm()}resetForm(e=void 0,i={}){this.form.reset(e,i),this._submittedReactive.set(!1)}onSubmit(e){return this.submitted=!0,ux(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new Ru(this.control)),e?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(e=>{let i=e.control,r=this.form.get(e.path);i!==r&&(GD(i||null,e),IF(r)&&(Pu(r,e,this.callSetDisabledState),e.control=r))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let i=this.form.get(e.path);dx(i,e),i.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){let i=this.form?.get(e.path);i&&yF(i,e)&&i.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){lb(this.form,this),this._oldForm&&ju(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(i){return new(i||t)(De(tc,10),De(ob,10),De(Uu,8))};static \u0275dir=S({type:t,features:[me,$e]})}return t})();var kF={provide:Wr,useExisting:Ht(()=>ub)},ub=(()=>{class t extends SF{form=null;ngSubmit=new R;get control(){return this.form}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Re(t)))(r||t)}})();static \u0275dir=S({type:t,selectors:[["","formGroup",""]],hostBindings:function(i,r){i&1&&H("submit",function(a){return r.onSubmit(a)})("reset",function(){return r.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[ke([kF]),me]})}return t})();var TF=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=V({type:t});static \u0275inj=P({})}return t})();var zu=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:Uu,useValue:e.callSetDisabledState??cb}]}}static \u0275fac=function(i){return new(i||t)};static \u0275mod=V({type:t});static \u0275inj=P({imports:[TF]})}return t})();var hx=new g("MAT_INPUT_VALUE_ACCESSOR");var px=(()=>{class t{isErrorState(e,i){return!!(e&&e.invalid&&(e.touched||i&&i.submitted))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var $u=class{_defaultMatcher;ngControl;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;constructor(n,e,i,r,o){this._defaultMatcher=n,this.ngControl=e,this._parentFormGroup=i,this._parentForm=r,this._stateChanges=o}updateErrorState(){let n=this.errorState,e=this._parentFormGroup||this._parentForm,i=this.matcher||this._defaultMatcher,r=this.ngControl?this.ngControl.control:null,o=i?.isErrorState(r,e)??!1;o!==n&&(this.errorState=o,this._stateChanges.next())}};var AF=["button","checkbox","file","hidden","image","radio","range","reset","submit"],RF=new g("MAT_INPUT_CONFIG"),aa=(()=>{class t{_elementRef=d(F);_platform=d(de);ngControl=d(Gr,{optional:!0,self:!0});_autofillMonitor=d(HD);_ngZone=d(k);_formField=d(Jg,{optional:!0});_renderer=d(Se);_uid=d(Ke).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=d(RF,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new x;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=Rt(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(Su.required)??!1}set required(e){this._required=Rt(e)}_required;get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&Hg().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=Rt(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(e=>Hg().has(e));constructor(){let e=d(db,{optional:!0}),i=d(ub,{optional:!0}),r=d(px),o=d(hx,{optional:!0,self:!0}),a=this._elementRef.nativeElement,s=a.nodeName.toLowerCase();o?Pi(o.value)?this._signalBasedValueAccessor=o:this._inputValueAccessor=o:this._inputValueAccessor=a,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(a,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new $u(r,this.ngControl,i,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=s==="select",this._isTextarea=s==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=a.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&It(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let i=this._elementRef.nativeElement;i.type==="number"?(i.type="text",i.setSelectionRange(0,0),i.type="number"):i.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let i=this._elementRef.nativeElement;this._previousPlaceholder=e,e?i.setAttribute("placeholder",e):i.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){AF.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,i=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&i&&i.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let i=this._elementRef.nativeElement;e.length?i.setAttribute("aria-describedby",e.join(" ")):i.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let i=e.target;!i.value&&i.selectionStart===0&&i.selectionEnd===0&&(i.setSelectionRange(1,1),i.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(i){return new(i||t)};static \u0275dir=S({type:t,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(i,r){i&1&&H("focus",function(){return r._focusChanged(!0)})("blur",function(){return r._focusChanged(!1)})("input",function(){return r._onInput()}),i&2&&(yn("id",r.id)("disabled",r.disabled&&!r.disabledInteractive)("required",r.required),oe("name",r.name||null)("readonly",r._getReadonlyAttribute())("aria-disabled",r.disabled&&r.disabledInteractive?"true":null)("aria-invalid",r.empty&&r.required?null:r.errorState)("aria-required",r.required)("id",r.id),W("mat-input-server",r._isServer)("mat-mdc-form-field-textarea-control",r._isInFormField&&r._isTextarea)("mat-mdc-form-field-input-control",r._isInFormField)("mat-mdc-input-disabled-interactive",r.disabledInteractive)("mdc-text-field__input",r._isInFormField)("mat-mdc-native-select-inline",r._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",ae]},exportAs:["matInput"],features:[ke([{provide:Xg,useExisting:t}]),$e]})}return t})(),Wu=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=V({type:t});static \u0275inj=P({imports:[$r,$r,UD,ge]})}return t})();var ic=class{_attachedHost=null;attach(n){return this._attachedHost=n,n.attach(this)}detach(){let n=this._attachedHost;n!=null&&(this._attachedHost=null,n.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(n){this._attachedHost=n}},sa=class extends ic{component;viewContainerRef;injector;projectableNodes;bindings;constructor(n,e,i,r,o){super(),this.component=n,this.viewContainerRef=e,this.injector=i,this.projectableNodes=r,this.bindings=o||null}},pi=class extends ic{templateRef;viewContainerRef;context;injector;constructor(n,e,i,r){super(),this.templateRef=n,this.viewContainerRef=e,this.context=i,this.injector=r}get origin(){return this.templateRef.elementRef}attach(n,e=this.context){return this.context=e,super.attach(n)}detach(){return this.context=void 0,super.detach()}},fb=class extends ic{element;constructor(n){super(),this.element=n instanceof F?n.nativeElement:n}},ca=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(n){if(n instanceof sa)return this._attachedPortal=n,this.attachComponentPortal(n);if(n instanceof pi)return this._attachedPortal=n,this.attachTemplatePortal(n);if(this.attachDomPortal&&n instanceof fb)return this._attachedPortal=n,this.attachDomPortal(n)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(n){this._disposeFn=n}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}},Gu=class extends ca{outletElement;_appRef;_defaultInjector;constructor(n,e,i){super(),this.outletElement=n,this._appRef=e,this._defaultInjector=i}attachComponentPortal(n){let e;if(n.viewContainerRef){let i=n.injector||n.viewContainerRef.injector,r=i.get(Bn,null,{optional:!0})||void 0;e=n.viewContainerRef.createComponent(n.component,{index:n.viewContainerRef.length,injector:i,ngModuleRef:r,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0}),this.setDisposeFn(()=>e.destroy())}else{let i=this._appRef,r=n.injector||this._defaultInjector||q.NULL,o=r.get(ye,i.injector);e=Cd(n.component,{elementInjector:r,environmentInjector:o,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0}),i.attachView(e.hostView),this.setDisposeFn(()=>{i.viewCount>0&&i.detachView(e.hostView),e.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=n,e}attachTemplatePortal(n){let e=n.viewContainerRef,i=e.createEmbeddedView(n.templateRef,n.context,{injector:n.injector});return i.rootNodes.forEach(r=>this.outletElement.appendChild(r)),i.detectChanges(),this.setDisposeFn(()=>{let r=e.indexOf(i);r!==-1&&e.remove(r)}),this._attachedPortal=n,i}attachDomPortal=n=>{let e=n.element;e.parentNode;let i=this.outletElement.ownerDocument.createComment("dom-portal");e.parentNode.insertBefore(i,e),this.outletElement.appendChild(e),this._attachedPortal=n,super.setDisposeFn(()=>{i.parentNode&&i.parentNode.replaceChild(e,i)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(n){return n.hostView.rootNodes[0]}},bx=(()=>{class t extends pi{constructor(){let e=d(bt),i=d(St);super(e,i)}static \u0275fac=function(i){return new(i||t)};static \u0275dir=S({type:t,selectors:[["","cdkPortal",""]],exportAs:["cdkPortal"],features:[me]})}return t})(),Yi=(()=>{class t extends ca{_moduleRef=d(Bn,{optional:!0});_document=d(j);_viewContainerRef=d(St);_isInitialized=!1;_attachedRef=null;constructor(){super()}get portal(){return this._attachedPortal}set portal(e){this.hasAttached()&&!e&&!this._isInitialized||(this.hasAttached()&&super.detach(),e&&super.attach(e),this._attachedPortal=e||null)}attached=new R;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(e){e.setAttachedHost(this);let i=e.viewContainerRef!=null?e.viewContainerRef:this._viewContainerRef,r=i.createComponent(e.component,{index:i.length,injector:e.injector||i.injector,projectableNodes:e.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:e.bindings||void 0});return i!==this._viewContainerRef&&this._getRootNode().appendChild(r.hostView.rootNodes[0]),super.setDisposeFn(()=>r.destroy()),this._attachedPortal=e,this._attachedRef=r,this.attached.emit(r),r}attachTemplatePortal(e){e.setAttachedHost(this);let i=this._viewContainerRef.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=e,this._attachedRef=i,this.attached.emit(i),i}attachDomPortal=e=>{let i=e.element;i.parentNode;let r=this._document.createComment("dom-portal");e.setAttachedHost(this),i.parentNode.insertBefore(r,i),this._getRootNode().appendChild(i),this._attachedPortal=e,super.setDisposeFn(()=>{r.parentNode&&r.parentNode.replaceChild(i,r)})};_getRootNode(){let e=this._viewContainerRef.element.nativeElement;return e.nodeType===e.ELEMENT_NODE?e:e.parentNode}static \u0275fac=function(i){return new(i||t)};static \u0275dir=S({type:t,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:[0,"cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[me]})}return t})(),qr=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=V({type:t});static \u0275inj=P({})}return t})();var NF=20,oc=(()=>{class t{_ngZone=d(k);_platform=d(de);_renderer=d(ze).createRenderer(null,null);_cleanupGlobalListener;constructor(){}_scrolled=new x;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let i=this.scrollContainers.get(e);i&&(i.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=NF){return this._platform.isBrowser?new Q(i=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let r=e>0?this._scrolled.pipe(zc(e)).subscribe(i):this._scrolled.subscribe(i);return this._scrolledCount++,()=>{r.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):O()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,i)=>this.deregister(i)),this._scrolled.complete()}ancestorScrolled(e,i){let r=this.getAncestorScrollContainers(e);return this.scrolled(i).pipe(ue(o=>!o||r.indexOf(o)>-1))}getAncestorScrollContainers(e){let i=[];return this.scrollContainers.forEach((r,o)=>{this._scrollableContainsElement(o,e)&&i.push(o)}),i}_scrollableContainsElement(e,i){let r=At(i),o=e.getElementRef().nativeElement;do if(r==o)return!0;while(r=r.parentElement);return!1}static \u0275fac=function(i){return new(i||t)};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),mb=(()=>{class t{elementRef=d(F);scrollDispatcher=d(oc);ngZone=d(k);dir=d(jt,{optional:!0});_scrollElement=this.elementRef.nativeElement;_destroyed=new x;_renderer=d(Se);_cleanupScroll;_elementScrolled=new x;constructor(){}ngOnInit(){this._cleanupScroll=this.ngZone.runOutsideAngular(()=>this._renderer.listen(this._scrollElement,"scroll",e=>this._elementScrolled.next(e))),this.scrollDispatcher.register(this)}ngOnDestroy(){this._cleanupScroll?.(),this._elementScrolled.complete(),this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(e){let i=this.elementRef.nativeElement,r=this.dir&&this.dir.value=="rtl";e.left==null&&(e.left=r?e.end:e.start),e.right==null&&(e.right=r?e.start:e.end),e.bottom!=null&&(e.top=i.scrollHeight-i.clientHeight-e.bottom),r&&Ko()!=En.NORMAL?(e.left!=null&&(e.right=i.scrollWidth-i.clientWidth-e.left),Ko()==En.INVERTED?e.left=e.right:Ko()==En.NEGATED&&(e.left=e.right?-e.right:e.right)):e.right!=null&&(e.left=i.scrollWidth-i.clientWidth-e.right),this._applyScrollToOptions(e)}_applyScrollToOptions(e){let i=this.elementRef.nativeElement;yu()?i.scrollTo(e):(e.top!=null&&(i.scrollTop=e.top),e.left!=null&&(i.scrollLeft=e.left))}measureScrollOffset(e){let i="left",r="right",o=this.elementRef.nativeElement;if(e=="top")return o.scrollTop;if(e=="bottom")return o.scrollHeight-o.clientHeight-o.scrollTop;let a=this.dir&&this.dir.value=="rtl";return e=="start"?e=a?r:i:e=="end"&&(e=a?i:r),a&&Ko()==En.INVERTED?e==i?o.scrollWidth-o.clientWidth-o.scrollLeft:o.scrollLeft:a&&Ko()==En.NEGATED?e==i?o.scrollLeft+o.scrollWidth-o.clientWidth:-o.scrollLeft:e==i?o.scrollLeft:o.scrollWidth-o.clientWidth-o.scrollLeft}static \u0275fac=function(i){return new(i||t)};static \u0275dir=S({type:t,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]]})}return t})(),OF=20,Ki=(()=>{class t{_platform=d(de);_listeners;_viewportSize=null;_change=new x;_document=d(j);constructor(){let e=d(k),i=d(ze).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let r=o=>this._change.next(o);this._listeners=[i.listen("window","resize",r),i.listen("window","orientationchange",r)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:i,height:r}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+r,right:e.left+i,height:r,width:i}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,i=this._getWindow(),r=e.documentElement,o=r.getBoundingClientRect(),a=-o.top||e.body?.scrollTop||i.scrollY||r.scrollTop||0,s=-o.left||e.body?.scrollLeft||i.scrollX||r.scrollLeft||0;return{top:a,left:s}}change(e=OF){return e>0?this._change.pipe(zc(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var rc=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=V({type:t});static \u0275inj=P({})}return t})(),hb=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=V({type:t});static \u0275inj=P({imports:[ge,rc,ge,rc]})}return t})();var _b=["*"];function LF(t,n){t&1&&K(0)}var jF=["tabListContainer"],BF=["tabList"],VF=["tabListInner"],HF=["nextPaginator"],UF=["previousPaginator"],zF=["content"];function $F(t,n){}var WF=["tabBodyWrapper"],GF=["tabHeader"];function qF(t,n){}function ZF(t,n){if(t&1&&Ot(0,qF,0,0,"ng-template",12),t&2){let e=ce().$implicit;ne("cdkPortalOutlet",e.templateLabel)}}function QF(t,n){if(t&1&&N(0),t&2){let e=ce().$implicit;Oe(e.textLabel)}}function YF(t,n){if(t&1){let e=rn();_(0,"div",7,2),H("click",function(){let r=tt(e),o=r.$implicit,a=r.$index,s=ce(),c=on(1);return nt(s._handleClick(o,c,a))})("cdkFocusChange",function(r){let o=tt(e).$index,a=ce();return nt(a._tabFocusChanged(r,o))}),le(2,"span",8)(3,"div",9),_(4,"span",10)(5,"span",11),he(6,ZF,1,1,null,12)(7,QF,1,1),y()()()}if(t&2){let e=n.$implicit,i=n.$index,r=on(1),o=ce();qt(e.labelClass),W("mdc-tab--active",o.selectedIndex===i),ne("id",o._getTabLabelId(e,i))("disabled",e.disabled)("fitInkBarToContent",o.fitInkBarToContent),oe("tabIndex",o._getTabIndex(i))("aria-posinset",i+1)("aria-setsize",o._tabs.length)("aria-controls",o._getTabContentId(i))("aria-selected",o.selectedIndex===i)("aria-label",e.ariaLabel||null)("aria-labelledby",!e.ariaLabel&&e.ariaLabelledby?e.ariaLabelledby:null),w(3),ne("matRippleTrigger",r)("matRippleDisabled",e.disabled||o.disableRipple),w(3),pe(e.templateLabel?6:7)}}function KF(t,n){t&1&&K(0)}function XF(t,n){if(t&1){let e=rn();_(0,"mat-tab-body",13),H("_onCentered",function(){tt(e);let r=ce();return nt(r._removeTabBodyWrapperHeight())})("_onCentering",function(r){tt(e);let o=ce();return nt(o._setTabBodyWrapperHeight(r))})("_beforeCentering",function(r){tt(e);let o=ce();return nt(o._bodyCentered(r))}),y()}if(t&2){let e=n.$implicit,i=n.$index,r=ce();qt(e.bodyClass),ne("id",r._getTabContentId(i))("content",e.content)("position",e.position)("animationDuration",r.animationDuration)("preserveContent",r.preserveContent),oe("tabindex",r.contentTabIndex!=null&&r.selectedIndex===i?r.contentTabIndex:null)("aria-labelledby",r._getTabLabelId(e,i))("aria-hidden",r.selectedIndex!==i)}}var JF=new g("MatTabContent"),e1=(()=>{class t{template=d(bt);constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275dir=S({type:t,selectors:[["","matTabContent",""]],features:[ke([{provide:JF,useExisting:t}])]})}return t})(),t1=new g("MatTabLabel"),wx=new g("MAT_TAB"),n1=(()=>{class t extends bx{_closestTab=d(wx,{optional:!0});static \u0275fac=(()=>{let e;return function(r){return(e||(e=Re(t)))(r||t)}})();static \u0275dir=S({type:t,selectors:[["","mat-tab-label",""],["","matTabLabel",""]],features:[ke([{provide:t1,useExisting:t}]),me]})}return t})(),Cx=new g("MAT_TAB_GROUP"),Zr=(()=>{class t{_viewContainerRef=d(St);_closestTabGroup=d(Cx,{optional:!0});disabled=!1;get templateLabel(){return this._templateLabel}set templateLabel(e){this._setTemplateLabelInput(e)}_templateLabel;_explicitContent=void 0;_implicitContent;textLabel="";ariaLabel;ariaLabelledby;labelClass;bodyClass;id=null;_contentPortal=null;get content(){return this._contentPortal}_stateChanges=new x;position=null;origin=null;isActive=!1;constructor(){d(at).load(qi)}ngOnChanges(e){(e.hasOwnProperty("textLabel")||e.hasOwnProperty("disabled"))&&this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}ngOnInit(){this._contentPortal=new pi(this._explicitContent||this._implicitContent,this._viewContainerRef)}_setTemplateLabelInput(e){e&&e._closestTab===this&&(this._templateLabel=e)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=E({type:t,selectors:[["mat-tab"]],contentQueries:function(i,r,o){if(i&1&&kt(o,n1,5)(o,e1,7,bt),i&2){let a;z(a=$())&&(r.templateLabel=a.first),z(a=$())&&(r._explicitContent=a.first)}},viewQuery:function(i,r){if(i&1&&rt(bt,7),i&2){let o;z(o=$())&&(r._implicitContent=o.first)}},hostAttrs:["hidden",""],hostVars:1,hostBindings:function(i,r){i&2&&oe("id",null)},inputs:{disabled:[2,"disabled","disabled",ae],textLabel:[0,"label","textLabel"],ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],labelClass:"labelClass",bodyClass:"bodyClass",id:"id"},exportAs:["matTab"],features:[ke([{provide:wx,useExisting:t}]),$e],ngContentSelectors:_b,decls:1,vars:0,template:function(i,r){i&1&&(xe(),ld(0,LF,1,0,"ng-template"))},encapsulation:2})}return t})(),pb="mdc-tab-indicator--active",vx="mdc-tab-indicator--no-transition",gb=class{_items;_currentItem;constructor(n){this._items=n}hide(){this._items.forEach(n=>n.deactivateInkBar()),this._currentItem=void 0}alignToElement(n){let e=this._items.find(r=>r.elementRef.nativeElement===n),i=this._currentItem;if(e!==i&&(i?.deactivateInkBar(),e)){let r=i?.elementRef.nativeElement.getBoundingClientRect?.();e.activateInkBar(r),this._currentItem=e}}},i1=(()=>{class t{_elementRef=d(F);_inkBarElement=null;_inkBarContentElement=null;_fitToContent=!1;get fitInkBarToContent(){return this._fitToContent}set fitInkBarToContent(e){this._fitToContent!==e&&(this._fitToContent=e,this._inkBarElement&&this._appendInkBarElement())}activateInkBar(e){let i=this._elementRef.nativeElement;if(!e||!i.getBoundingClientRect||!this._inkBarContentElement){i.classList.add(pb);return}let r=i.getBoundingClientRect(),o=e.width/r.width,a=e.left-r.left;i.classList.add(vx),this._inkBarContentElement.style.setProperty("transform",`translateX(${a}px) scaleX(${o})`),i.getBoundingClientRect(),i.classList.remove(vx),i.classList.add(pb),this._inkBarContentElement.style.setProperty("transform","")}deactivateInkBar(){this._elementRef.nativeElement.classList.remove(pb)}ngOnInit(){this._createInkBarElement()}ngOnDestroy(){this._inkBarElement?.remove(),this._inkBarElement=this._inkBarContentElement=null}_createInkBarElement(){let e=this._elementRef.nativeElement.ownerDocument||document,i=this._inkBarElement=e.createElement("span"),r=this._inkBarContentElement=e.createElement("span");i.className="mdc-tab-indicator",r.className="mdc-tab-indicator__content mdc-tab-indicator__content--underline",i.appendChild(this._inkBarContentElement),this._appendInkBarElement()}_appendInkBarElement(){this._inkBarElement;let e=this._fitToContent?this._elementRef.nativeElement.querySelector(".mdc-tab__content"):this._elementRef.nativeElement;e.appendChild(this._inkBarElement)}static \u0275fac=function(i){return new(i||t)};static \u0275dir=S({type:t,inputs:{fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",ae]}})}return t})();var Dx=(()=>{class t extends i1{elementRef=d(F);disabled=!1;focus(){this.elementRef.nativeElement.focus()}getOffsetLeft(){return this.elementRef.nativeElement.offsetLeft}getOffsetWidth(){return this.elementRef.nativeElement.offsetWidth}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Re(t)))(r||t)}})();static \u0275dir=S({type:t,selectors:[["","matTabLabelWrapper",""]],hostVars:3,hostBindings:function(i,r){i&2&&(oe("aria-disabled",!!r.disabled),W("mat-mdc-tab-disabled",r.disabled))},inputs:{disabled:[2,"disabled","disabled",ae]},features:[me]})}return t})(),_x={passive:!0},r1=650,o1=100,a1=(()=>{class t{_elementRef=d(F);_changeDetectorRef=d(We);_viewportRuler=d(Ki);_dir=d(jt,{optional:!0});_ngZone=d(k);_platform=d(de);_sharedResizeObserver=d(xu);_injector=d(q);_renderer=d(Se);_animationsDisabled=Xe();_eventCleanups;_scrollDistance=0;_selectedIndexChanged=!1;_destroyed=new x;_showPaginationControls=!1;_disableScrollAfter=!0;_disableScrollBefore=!0;_tabLabelCount;_scrollDistanceChanged=!1;_keyManager;_currentTextContent;_stopScrolling=new x;disablePagination=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){let i=isNaN(e)?0:e;this._selectedIndex!=i&&(this._selectedIndexChanged=!0,this._selectedIndex=i,this._keyManager&&this._keyManager.updateActiveItem(i))}_selectedIndex=0;selectFocusedIndex=new R;indexFocused=new R;constructor(){this._eventCleanups=this._ngZone.runOutsideAngular(()=>[this._renderer.listen(this._elementRef.nativeElement,"mouseleave",()=>this._stopInterval())])}ngAfterViewInit(){this._eventCleanups.push(this._renderer.listen(this._previousPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("before"),_x),this._renderer.listen(this._nextPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("after"),_x))}ngAfterContentInit(){let e=this._dir?this._dir.change:O("ltr"),i=this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe(Yn(32),qe(this._destroyed)),r=this._viewportRuler.change(150).pipe(qe(this._destroyed)),o=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new qs(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(()=>!1),this._keyManager.updateActiveItem(Math.max(this._selectedIndex,0)),ut(o,{injector:this._injector}),mn(e,r,i,this._items.changes,this._itemsResized()).pipe(qe(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>{Promise.resolve().then(()=>{this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),this._scrollDistance)),o()})}),this._keyManager?.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.subscribe(a=>{this.indexFocused.emit(a),this._setTabFocus(a)})}_itemsResized(){return typeof ResizeObserver!="function"?Te:this._items.changes.pipe(ht(this._items),ct(e=>new Q(i=>this._ngZone.runOutsideAngular(()=>{let r=new ResizeObserver(o=>i.next(o));return e.forEach(o=>r.observe(o.elementRef.nativeElement)),()=>{r.disconnect()}}))),cr(1),ue(e=>e.some(i=>i.contentRect.width>0&&i.contentRect.height>0)))}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._keyManager?.destroy(),this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(e){if(!Gi(e))switch(e.keyCode){case 13:case 32:if(this.focusIndex!==this.selectedIndex){let i=this._items.get(this.focusIndex);i&&!i.disabled&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(e))}break;default:this._keyManager?.onKeydown(e)}}_onContentChanges(){let e=this._elementRef.nativeElement.textContent;e!==this._currentTextContent&&(this._currentTextContent=e||"",this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(e){!this._isValidIndex(e)||this.focusIndex===e||!this._keyManager||this._keyManager.setActiveItem(e)}_isValidIndex(e){return this._items?!!this._items.toArray()[e]:!0}_setTabFocus(e){if(this._showPaginationControls&&this._scrollToLabel(e),this._items&&this._items.length){this._items.toArray()[e].focus();let i=this._tabListContainer.nativeElement;this._getLayoutDirection()=="ltr"?i.scrollLeft=0:i.scrollLeft=i.scrollWidth-i.offsetWidth}}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_updateTabScrollPosition(){if(this.disablePagination)return;let e=this.scrollDistance,i=this._getLayoutDirection()==="ltr"?-e:e;this._tabList.nativeElement.style.transform=`translateX(${Math.round(i)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(e){this._scrollTo(e)}_scrollHeader(e){let i=this._tabListContainer.nativeElement.offsetWidth,r=(e=="before"?-1:1)*i/3;return this._scrollTo(this._scrollDistance+r)}_handlePaginatorClick(e){this._stopInterval(),this._scrollHeader(e)}_scrollToLabel(e){if(this.disablePagination)return;let i=this._items?this._items.toArray()[e]:null;if(!i)return;let r=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:o,offsetWidth:a}=i.elementRef.nativeElement,s,c;this._getLayoutDirection()=="ltr"?(s=o,c=s+a):(c=this._tabListInner.nativeElement.offsetWidth-o,s=c-a);let l=this.scrollDistance,u=this.scrollDistance+r;s<l?this.scrollDistance-=l-s:c>u&&(this.scrollDistance+=Math.min(c-u,s-l))}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{let e=this._tabListInner.nativeElement.scrollWidth,i=this._elementRef.nativeElement.offsetWidth,r=e-i>=5;r||(this.scrollDistance=0),r!==this._showPaginationControls&&(this._showPaginationControls=r,this._changeDetectorRef.markForCheck())}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=this.scrollDistance==0,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){let e=this._tabListInner.nativeElement.scrollWidth,i=this._tabListContainer.nativeElement.offsetWidth;return e-i||0}_alignInkBarToSelectedTab(){let e=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,i=e?e.elementRef.nativeElement:null;i?this._inkBar.alignToElement(i):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(e,i){i&&i.button!=null&&i.button!==0||(this._stopInterval(),Ra(r1,o1).pipe(qe(mn(this._stopScrolling,this._destroyed))).subscribe(()=>{let{maxScrollDistance:r,distance:o}=this._scrollHeader(e);(o===0||o>=r)&&this._stopInterval()}))}_scrollTo(e){if(this.disablePagination)return{maxScrollDistance:0,distance:0};let i=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(i,e)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:i,distance:this._scrollDistance}}static \u0275fac=function(i){return new(i||t)};static \u0275dir=S({type:t,inputs:{disablePagination:[2,"disablePagination","disablePagination",ae],selectedIndex:[2,"selectedIndex","selectedIndex",ci]},outputs:{selectFocusedIndex:"selectFocusedIndex",indexFocused:"indexFocused"}})}return t})(),s1=(()=>{class t extends a1{_items;_tabListContainer;_tabList;_tabListInner;_nextPaginator;_previousPaginator;_inkBar;ariaLabel;ariaLabelledby;disableRipple=!1;ngAfterContentInit(){this._inkBar=new gb(this._items),super.ngAfterContentInit()}_itemSelected(e){e.preventDefault()}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Re(t)))(r||t)}})();static \u0275cmp=E({type:t,selectors:[["mat-tab-header"]],contentQueries:function(i,r,o){if(i&1&&kt(o,Dx,4),i&2){let a;z(a=$())&&(r._items=a)}},viewQuery:function(i,r){if(i&1&&rt(jF,7)(BF,7)(VF,7)(HF,5)(UF,5),i&2){let o;z(o=$())&&(r._tabListContainer=o.first),z(o=$())&&(r._tabList=o.first),z(o=$())&&(r._tabListInner=o.first),z(o=$())&&(r._nextPaginator=o.first),z(o=$())&&(r._previousPaginator=o.first)}},hostAttrs:[1,"mat-mdc-tab-header"],hostVars:4,hostBindings:function(i,r){i&2&&W("mat-mdc-tab-header-pagination-controls-enabled",r._showPaginationControls)("mat-mdc-tab-header-rtl",r._getLayoutDirection()=="rtl")},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],disableRipple:[2,"disableRipple","disableRipple",ae]},features:[me],ngContentSelectors:_b,decls:13,vars:10,consts:[["previousPaginator",""],["tabListContainer",""],["tabList",""],["tabListInner",""],["nextPaginator",""],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-before",3,"click","mousedown","touchend","matRippleDisabled"],[1,"mat-mdc-tab-header-pagination-chevron"],[1,"mat-mdc-tab-label-container",3,"keydown"],["role","tablist",1,"mat-mdc-tab-list",3,"cdkObserveContent"],[1,"mat-mdc-tab-labels"],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-after",3,"mousedown","click","touchend","matRippleDisabled"]],template:function(i,r){i&1&&(xe(),_(0,"div",5,0),H("click",function(){return r._handlePaginatorClick("before")})("mousedown",function(a){return r._handlePaginatorPress("before",a)})("touchend",function(){return r._stopInterval()}),le(2,"div",6),y(),_(3,"div",7,1),H("keydown",function(a){return r._handleKeydown(a)}),_(5,"div",8,2),H("cdkObserveContent",function(){return r._onContentChanges()}),_(7,"div",9,3),K(9),y()()(),_(10,"div",10,4),H("mousedown",function(a){return r._handlePaginatorPress("after",a)})("click",function(){return r._handlePaginatorClick("after")})("touchend",function(){return r._stopInterval()}),le(12,"div",6),y()),i&2&&(W("mat-mdc-tab-header-pagination-disabled",r._disableScrollBefore),ne("matRippleDisabled",r._disableScrollBefore||r.disableRipple),w(3),W("_mat-animation-noopable",r._animationsDisabled),w(2),oe("aria-label",r.ariaLabel||null)("aria-labelledby",r.ariaLabelledby||null),w(5),W("mat-mdc-tab-header-pagination-disabled",r._disableScrollAfter),ne("matRippleDisabled",r._disableScrollAfter||r.disableRipple))},dependencies:[Qs,gu],styles:[`.mat-mdc-tab-header {
  display: flex;
  overflow: hidden;
  position: relative;
  flex-shrink: 0;
}

.mdc-tab-indicator .mdc-tab-indicator__content {
  transition-duration: var(--mat-tab-animation-duration, 250ms);
}

.mat-mdc-tab-header-pagination {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: none;
  justify-content: center;
  align-items: center;
  min-width: 32px;
  cursor: pointer;
  z-index: 2;
  -webkit-tap-highlight-color: transparent;
  touch-action: none;
  box-sizing: content-box;
  outline: 0;
}
.mat-mdc-tab-header-pagination::-moz-focus-inner {
  border: 0;
}
.mat-mdc-tab-header-pagination .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab-header-pagination-controls-enabled .mat-mdc-tab-header-pagination {
  display: flex;
}

.mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after {
  padding-left: 4px;
}
.mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(-135deg);
}

.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-pagination-after {
  padding-right: 4px;
}
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(45deg);
}

.mat-mdc-tab-header-pagination-chevron {
  border-style: solid;
  border-width: 2px 2px 0 0;
  height: 8px;
  width: 8px;
  border-color: var(--mat-tab-pagination-icon-color, var(--mat-sys-on-surface));
}

.mat-mdc-tab-header-pagination-disabled {
  box-shadow: none;
  cursor: default;
  pointer-events: none;
}
.mat-mdc-tab-header-pagination-disabled .mat-mdc-tab-header-pagination-chevron {
  opacity: 0.4;
}

.mat-mdc-tab-list {
  flex-grow: 1;
  position: relative;
  transition: transform 500ms cubic-bezier(0.35, 0, 0.25, 1);
}
._mat-animation-noopable .mat-mdc-tab-list {
  transition: none;
}

.mat-mdc-tab-label-container {
  display: flex;
  flex-grow: 1;
  overflow: hidden;
  z-index: 1;
  border-bottom-style: solid;
  border-bottom-width: var(--mat-tab-divider-height, 1px);
  border-bottom-color: var(--mat-tab-divider-color, var(--mat-sys-surface-variant));
}
.mat-mdc-tab-group-inverted-header .mat-mdc-tab-label-container {
  border-bottom: none;
  border-top-style: solid;
  border-top-width: var(--mat-tab-divider-height, 1px);
  border-top-color: var(--mat-tab-divider-color, var(--mat-sys-surface-variant));
}

.mat-mdc-tab-labels {
  display: flex;
  flex: 1 0 auto;
}
[mat-align-tabs=center] > .mat-mdc-tab-header .mat-mdc-tab-labels {
  justify-content: center;
}
[mat-align-tabs=end] > .mat-mdc-tab-header .mat-mdc-tab-labels {
  justify-content: flex-end;
}
.cdk-drop-list .mat-mdc-tab-labels, .mat-mdc-tab-labels.cdk-drop-list {
  min-height: var(--mat-tab-container-height, 48px);
}

.mat-mdc-tab::before {
  margin: 5px;
}
@media (forced-colors: active) {
  .mat-mdc-tab[aria-disabled=true] {
    color: GrayText;
  }
}
`],encapsulation:2})}return t})(),c1=new g("MAT_TABS_CONFIG"),yx=(()=>{class t extends Yi{_host=d(bb);_ngZone=d(k);_centeringSub=se.EMPTY;_leavingSub=se.EMPTY;constructor(){super()}ngOnInit(){super.ngOnInit(),this._centeringSub=this._host._beforeCentering.pipe(ht(this._host._isCenterPosition())).subscribe(e=>{this._host._content&&e&&!this.hasAttached()&&this._ngZone.run(()=>{Promise.resolve().then(),this.attach(this._host._content)})}),this._leavingSub=this._host._afterLeavingCenter.subscribe(()=>{this._host.preserveContent||this._ngZone.run(()=>this.detach())})}ngOnDestroy(){super.ngOnDestroy(),this._centeringSub.unsubscribe(),this._leavingSub.unsubscribe()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=S({type:t,selectors:[["","matTabBodyHost",""]],features:[me]})}return t})(),bb=(()=>{class t{_elementRef=d(F);_dir=d(jt,{optional:!0});_ngZone=d(k);_injector=d(q);_renderer=d(Se);_diAnimationsDisabled=Xe();_eventCleanups;_initialized=!1;_fallbackTimer;_positionIndex;_dirChangeSubscription=se.EMPTY;_position;_previousPosition;_onCentering=new R;_beforeCentering=new R;_afterLeavingCenter=new R;_onCentered=new R(!0);_portalHost;_contentElement;_content;animationDuration="500ms";preserveContent=!1;set position(e){this._positionIndex=e,this._computePositionAnimationState()}constructor(){if(this._dir){let e=d(We);this._dirChangeSubscription=this._dir.change.subscribe(i=>{this._computePositionAnimationState(i),e.markForCheck()})}}ngOnInit(){this._bindTransitionEvents(),this._position==="center"&&(this._setActiveClass(!0),ut(()=>this._onCentering.emit(this._elementRef.nativeElement.clientHeight),{injector:this._injector})),this._initialized=!0}ngOnDestroy(){clearTimeout(this._fallbackTimer),this._eventCleanups?.forEach(e=>e()),this._dirChangeSubscription.unsubscribe()}_bindTransitionEvents(){this._ngZone.runOutsideAngular(()=>{let e=this._elementRef.nativeElement,i=r=>{r.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.remove("mat-tab-body-animating"),r.type==="transitionend"&&this._transitionDone())};this._eventCleanups=[this._renderer.listen(e,"transitionstart",r=>{r.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.add("mat-tab-body-animating"),this._transitionStarted())}),this._renderer.listen(e,"transitionend",i),this._renderer.listen(e,"transitioncancel",i)]})}_transitionStarted(){clearTimeout(this._fallbackTimer);let e=this._position==="center";this._beforeCentering.emit(e),e&&this._onCentering.emit(this._elementRef.nativeElement.clientHeight)}_transitionDone(){this._position==="center"?this._onCentered.emit():this._previousPosition==="center"&&this._afterLeavingCenter.emit()}_setActiveClass(e){this._elementRef.nativeElement.classList.toggle("mat-mdc-tab-body-active",e)}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_isCenterPosition(){return this._positionIndex===0}_computePositionAnimationState(e=this._getLayoutDirection()){this._previousPosition=this._position,this._positionIndex<0?this._position=e=="ltr"?"left":"right":this._positionIndex>0?this._position=e=="ltr"?"right":"left":this._position="center",this._animationsDisabled()?this._simulateTransitionEvents():this._initialized&&(this._position==="center"||this._previousPosition==="center")&&(clearTimeout(this._fallbackTimer),this._fallbackTimer=this._ngZone.runOutsideAngular(()=>setTimeout(()=>this._simulateTransitionEvents(),100)))}_simulateTransitionEvents(){this._transitionStarted(),ut(()=>this._transitionDone(),{injector:this._injector})}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0ms"||this.animationDuration==="0s"}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=E({type:t,selectors:[["mat-tab-body"]],viewQuery:function(i,r){if(i&1&&rt(yx,5)(zF,5),i&2){let o;z(o=$())&&(r._portalHost=o.first),z(o=$())&&(r._contentElement=o.first)}},hostAttrs:[1,"mat-mdc-tab-body"],hostVars:1,hostBindings:function(i,r){i&2&&oe("inert",r._position==="center"?null:"")},inputs:{_content:[0,"content","_content"],animationDuration:"animationDuration",preserveContent:"preserveContent",position:"position"},outputs:{_onCentering:"_onCentering",_beforeCentering:"_beforeCentering",_onCentered:"_onCentered"},decls:3,vars:6,consts:[["content",""],["cdkScrollable","",1,"mat-mdc-tab-body-content"],["matTabBodyHost",""]],template:function(i,r){i&1&&(_(0,"div",1,0),Ot(2,$F,0,0,"ng-template",2),y()),i&2&&W("mat-tab-body-content-left",r._position==="left")("mat-tab-body-content-right",r._position==="right")("mat-tab-body-content-can-animate",r._position==="center"||r._previousPosition==="center")},dependencies:[yx,mb],styles:[`.mat-mdc-tab-body {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  overflow: hidden;
  outline: 0;
  flex-basis: 100%;
}
.mat-mdc-tab-body.mat-mdc-tab-body-active {
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
  z-index: 1;
  flex-grow: 1;
}
.mat-mdc-tab-group.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body.mat-mdc-tab-body-active {
  overflow-y: hidden;
}

.mat-mdc-tab-body-content {
  height: 100%;
  overflow: auto;
  transform: none;
  visibility: hidden;
}
.mat-tab-body-animating > .mat-mdc-tab-body-content, .mat-mdc-tab-body-active > .mat-mdc-tab-body-content {
  visibility: visible;
}
.mat-tab-body-animating > .mat-mdc-tab-body-content {
  min-height: 1px;
}
.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body-content {
  overflow: hidden;
}

.mat-tab-body-content-can-animate {
  transition: transform var(--mat-tab-animation-duration) 1ms cubic-bezier(0.35, 0, 0.25, 1);
}
.mat-mdc-tab-body-wrapper._mat-animation-noopable .mat-tab-body-content-can-animate {
  transition: none;
}

.mat-tab-body-content-left {
  transform: translate3d(-100%, 0, 0);
}

.mat-tab-body-content-right {
  transform: translate3d(100%, 0, 0);
}
`],encapsulation:2})}return t})(),la=(()=>{class t{_elementRef=d(F);_changeDetectorRef=d(We);_ngZone=d(k);_tabsSubscription=se.EMPTY;_tabLabelSubscription=se.EMPTY;_tabBodySubscription=se.EMPTY;_diAnimationsDisabled=Xe();_allTabs;_tabBodies;_tabBodyWrapper;_tabHeader;_tabs=new ri;_indexToSelect=0;_lastFocusedTabIndex=null;_tabBodyWrapperHeight=0;color;get fitInkBarToContent(){return this._fitInkBarToContent}set fitInkBarToContent(e){this._fitInkBarToContent=e,this._changeDetectorRef.markForCheck()}_fitInkBarToContent=!1;stretchTabs=!0;alignTabs=null;dynamicHeight=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){this._indexToSelect=isNaN(e)?null:e}_selectedIndex=null;headerPosition="above";get animationDuration(){return this._animationDuration}set animationDuration(e){let i=e+"";this._animationDuration=/^\d+$/.test(i)?e+"ms":i}_animationDuration;get contentTabIndex(){return this._contentTabIndex}set contentTabIndex(e){this._contentTabIndex=isNaN(e)?null:e}_contentTabIndex=null;disablePagination=!1;disableRipple=!1;preserveContent=!1;get backgroundColor(){return this._backgroundColor}set backgroundColor(e){let i=this._elementRef.nativeElement.classList;i.remove("mat-tabs-with-background",`mat-background-${this.backgroundColor}`),e&&i.add("mat-tabs-with-background",`mat-background-${e}`),this._backgroundColor=e}_backgroundColor;ariaLabel;ariaLabelledby;selectedIndexChange=new R;focusChange=new R;animationDone=new R;selectedTabChange=new R(!0);_groupId;_isServer=!d(de).isBrowser;constructor(){let e=d(c1,{optional:!0});this._groupId=d(Ke).getId("mat-tab-group-"),this.animationDuration=e&&e.animationDuration?e.animationDuration:"500ms",this.disablePagination=e&&e.disablePagination!=null?e.disablePagination:!1,this.dynamicHeight=e&&e.dynamicHeight!=null?e.dynamicHeight:!1,e?.contentTabIndex!=null&&(this.contentTabIndex=e.contentTabIndex),this.preserveContent=!!e?.preserveContent,this.fitInkBarToContent=e&&e.fitInkBarToContent!=null?e.fitInkBarToContent:!1,this.stretchTabs=e&&e.stretchTabs!=null?e.stretchTabs:!0,this.alignTabs=e&&e.alignTabs!=null?e.alignTabs:null}ngAfterContentChecked(){let e=this._indexToSelect=this._clampTabIndex(this._indexToSelect);if(this._selectedIndex!=e){let i=this._selectedIndex==null;if(!i){this.selectedTabChange.emit(this._createChangeEvent(e));let r=this._tabBodyWrapper.nativeElement;r.style.minHeight=r.clientHeight+"px"}Promise.resolve().then(()=>{this._tabs.forEach((r,o)=>r.isActive=o===e),i||(this.selectedIndexChange.emit(e),this._tabBodyWrapper.nativeElement.style.minHeight="")})}this._tabs.forEach((i,r)=>{i.position=r-e,this._selectedIndex!=null&&i.position==0&&!i.origin&&(i.origin=e-this._selectedIndex)}),this._selectedIndex!==e&&(this._selectedIndex=e,this._lastFocusedTabIndex=null,this._changeDetectorRef.markForCheck())}ngAfterContentInit(){this._subscribeToAllTabChanges(),this._subscribeToTabLabels(),this._tabsSubscription=this._tabs.changes.subscribe(()=>{let e=this._clampTabIndex(this._indexToSelect);if(e===this._selectedIndex){let i=this._tabs.toArray(),r;for(let o=0;o<i.length;o++)if(i[o].isActive){this._indexToSelect=this._selectedIndex=o,this._lastFocusedTabIndex=null,r=i[o];break}!r&&i[e]&&Promise.resolve().then(()=>{i[e].isActive=!0,this.selectedTabChange.emit(this._createChangeEvent(e))})}this._changeDetectorRef.markForCheck()})}ngAfterViewInit(){this._tabBodySubscription=this._tabBodies.changes.subscribe(()=>this._bodyCentered(!0))}_subscribeToAllTabChanges(){this._allTabs.changes.pipe(ht(this._allTabs)).subscribe(e=>{this._tabs.reset(e.filter(i=>i._closestTabGroup===this||!i._closestTabGroup)),this._tabs.notifyOnChanges()})}ngOnDestroy(){this._tabs.destroy(),this._tabsSubscription.unsubscribe(),this._tabLabelSubscription.unsubscribe(),this._tabBodySubscription.unsubscribe()}realignInkBar(){this._tabHeader&&this._tabHeader._alignInkBarToSelectedTab()}updatePagination(){this._tabHeader&&this._tabHeader.updatePagination()}focusTab(e){let i=this._tabHeader;i&&(i.focusIndex=e)}_focusChanged(e){this._lastFocusedTabIndex=e,this.focusChange.emit(this._createChangeEvent(e))}_createChangeEvent(e){let i=new vb;return i.index=e,this._tabs&&this._tabs.length&&(i.tab=this._tabs.toArray()[e]),i}_subscribeToTabLabels(){this._tabLabelSubscription&&this._tabLabelSubscription.unsubscribe(),this._tabLabelSubscription=mn(...this._tabs.map(e=>e._stateChanges)).subscribe(()=>this._changeDetectorRef.markForCheck())}_clampTabIndex(e){return Math.min(this._tabs.length-1,Math.max(e||0,0))}_getTabLabelId(e,i){return e.id||`${this._groupId}-label-${i}`}_getTabContentId(e){return`${this._groupId}-content-${e}`}_setTabBodyWrapperHeight(e){if(!this.dynamicHeight||!this._tabBodyWrapperHeight){this._tabBodyWrapperHeight=e;return}let i=this._tabBodyWrapper.nativeElement;i.style.height=this._tabBodyWrapperHeight+"px",this._tabBodyWrapper.nativeElement.offsetHeight&&(i.style.height=e+"px")}_removeTabBodyWrapperHeight(){let e=this._tabBodyWrapper.nativeElement;this._tabBodyWrapperHeight=e.clientHeight,e.style.height="",this._ngZone.run(()=>this.animationDone.emit())}_handleClick(e,i,r){i.focusIndex=r,e.disabled||(this.selectedIndex=r)}_getTabIndex(e){let i=this._lastFocusedTabIndex??this.selectedIndex;return e===i?0:-1}_tabFocusChanged(e,i){e&&e!=="mouse"&&e!=="touch"&&(this._tabHeader.focusIndex=i)}_bodyCentered(e){e&&this._tabBodies?.forEach((i,r)=>i._setActiveClass(r===this._selectedIndex))}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0"||this.animationDuration==="0ms"}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=E({type:t,selectors:[["mat-tab-group"]],contentQueries:function(i,r,o){if(i&1&&kt(o,Zr,5),i&2){let a;z(a=$())&&(r._allTabs=a)}},viewQuery:function(i,r){if(i&1&&rt(WF,5)(GF,5)(bb,5),i&2){let o;z(o=$())&&(r._tabBodyWrapper=o.first),z(o=$())&&(r._tabHeader=o.first),z(o=$())&&(r._tabBodies=o)}},hostAttrs:[1,"mat-mdc-tab-group"],hostVars:11,hostBindings:function(i,r){i&2&&(oe("mat-align-tabs",r.alignTabs),qt("mat-"+(r.color||"primary")),ko("--mat-tab-animation-duration",r.animationDuration),W("mat-mdc-tab-group-dynamic-height",r.dynamicHeight)("mat-mdc-tab-group-inverted-header",r.headerPosition==="below")("mat-mdc-tab-group-stretch-tabs",r.stretchTabs))},inputs:{color:"color",fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",ae],stretchTabs:[2,"mat-stretch-tabs","stretchTabs",ae],alignTabs:[0,"mat-align-tabs","alignTabs"],dynamicHeight:[2,"dynamicHeight","dynamicHeight",ae],selectedIndex:[2,"selectedIndex","selectedIndex",ci],headerPosition:"headerPosition",animationDuration:"animationDuration",contentTabIndex:[2,"contentTabIndex","contentTabIndex",ci],disablePagination:[2,"disablePagination","disablePagination",ae],disableRipple:[2,"disableRipple","disableRipple",ae],preserveContent:[2,"preserveContent","preserveContent",ae],backgroundColor:"backgroundColor",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"]},outputs:{selectedIndexChange:"selectedIndexChange",focusChange:"focusChange",animationDone:"animationDone",selectedTabChange:"selectedTabChange"},exportAs:["matTabGroup"],features:[ke([{provide:Cx,useExisting:t}])],ngContentSelectors:_b,decls:9,vars:8,consts:[["tabHeader",""],["tabBodyWrapper",""],["tabNode",""],[3,"indexFocused","selectFocusedIndex","selectedIndex","disableRipple","disablePagination","aria-label","aria-labelledby"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"id","mdc-tab--active","class","disabled","fitInkBarToContent"],[1,"mat-mdc-tab-body-wrapper"],["role","tabpanel",3,"id","class","content","position","animationDuration","preserveContent"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"click","cdkFocusChange","id","disabled","fitInkBarToContent"],[1,"mdc-tab__ripple"],["mat-ripple","",1,"mat-mdc-tab-ripple",3,"matRippleTrigger","matRippleDisabled"],[1,"mdc-tab__content"],[1,"mdc-tab__text-label"],[3,"cdkPortalOutlet"],["role","tabpanel",3,"_onCentered","_onCentering","_beforeCentering","id","content","position","animationDuration","preserveContent"]],template:function(i,r){i&1&&(xe(),_(0,"mat-tab-header",3,0),H("indexFocused",function(a){return r._focusChanged(a)})("selectFocusedIndex",function(a){return r.selectedIndex=a}),Li(2,YF,8,17,"div",4,hd),y(),he(4,KF,1,0),_(5,"div",5,1),Li(7,XF,1,10,"mat-tab-body",6,hd),y()),i&2&&(ne("selectedIndex",r.selectedIndex||0)("disableRipple",r.disableRipple)("disablePagination",r.disablePagination),md("aria-label",r.ariaLabel)("aria-labelledby",r.ariaLabelledby),w(2),ji(r._tabs),w(2),pe(r._isServer?4:-1),w(),W("_mat-animation-noopable",r._animationsDisabled()),w(2),ji(r._tabs))},dependencies:[s1,Dx,Og,Qs,Yi,bb],styles:[`.mdc-tab {
  min-width: 90px;
  padding: 0 24px;
  display: flex;
  flex: 1 0 auto;
  justify-content: center;
  box-sizing: border-box;
  border: none;
  outline: none;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
  z-index: 1;
  touch-action: manipulation;
}

.mdc-tab__content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: inherit;
  pointer-events: none;
}

.mdc-tab__text-label {
  transition: 150ms color linear;
  display: inline-block;
  line-height: 1;
  z-index: 2;
}

.mdc-tab--active .mdc-tab__text-label {
  transition-delay: 100ms;
}

._mat-animation-noopable .mdc-tab__text-label {
  transition: none;
}

.mdc-tab-indicator {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  justify-content: center;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.mdc-tab-indicator__content {
  transition: var(--mat-tab-animation-duration, 250ms) transform cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: left;
  opacity: 0;
}

.mdc-tab-indicator__content--underline {
  align-self: flex-end;
  box-sizing: border-box;
  width: 100%;
  border-top-style: solid;
}

.mdc-tab-indicator--active .mdc-tab-indicator__content {
  opacity: 1;
}

._mat-animation-noopable .mdc-tab-indicator__content, .mdc-tab-indicator--no-transition .mdc-tab-indicator__content {
  transition: none;
}

.mat-mdc-tab-ripple.mat-mdc-tab-ripple {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: none;
}

.mat-mdc-tab {
  -webkit-tap-highlight-color: transparent;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-decoration: none;
  background: none;
  height: var(--mat-tab-container-height, 48px);
  font-family: var(--mat-tab-label-text-font, var(--mat-sys-title-small-font));
  font-size: var(--mat-tab-label-text-size, var(--mat-sys-title-small-size));
  letter-spacing: var(--mat-tab-label-text-tracking, var(--mat-sys-title-small-tracking));
  line-height: var(--mat-tab-label-text-line-height, var(--mat-sys-title-small-line-height));
  font-weight: var(--mat-tab-label-text-weight, var(--mat-sys-title-small-weight));
}
.mat-mdc-tab.mdc-tab {
  flex-grow: 0;
}
.mat-mdc-tab .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-active-indicator-color, var(--mat-sys-primary));
  border-top-width: var(--mat-tab-active-indicator-height, 2px);
  border-radius: var(--mat-tab-active-indicator-shape, 0);
}
.mat-mdc-tab:hover .mdc-tab__text-label {
  color: var(--mat-tab-inactive-hover-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab:focus .mdc-tab__text-label {
  color: var(--mat-tab-inactive-focus-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active .mdc-tab__text-label {
  color: var(--mat-tab-active-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active .mdc-tab__ripple::before,
.mat-mdc-tab.mdc-tab--active .mat-ripple-element {
  background-color: var(--mat-tab-active-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active:hover .mdc-tab__text-label {
  color: var(--mat-tab-active-hover-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active:hover .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-active-hover-indicator-color, var(--mat-sys-primary));
}
.mat-mdc-tab.mdc-tab--active:focus .mdc-tab__text-label {
  color: var(--mat-tab-active-focus-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active:focus .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-active-focus-indicator-color, var(--mat-sys-primary));
}
.mat-mdc-tab.mat-mdc-tab-disabled {
  opacity: 0.4;
  pointer-events: none;
}
.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__content {
  pointer-events: none;
}
.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__ripple::before,
.mat-mdc-tab.mat-mdc-tab-disabled .mat-ripple-element {
  background-color: var(--mat-tab-disabled-ripple-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-tab .mdc-tab__ripple::before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  pointer-events: none;
  background-color: var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab .mdc-tab__text-label {
  color: var(--mat-tab-inactive-label-text-color, var(--mat-sys-on-surface));
  display: inline-flex;
  align-items: center;
}
.mat-mdc-tab .mdc-tab__content {
  position: relative;
  pointer-events: auto;
}
.mat-mdc-tab:hover .mdc-tab__ripple::before {
  opacity: 0.04;
}
.mat-mdc-tab.cdk-program-focused .mdc-tab__ripple::before, .mat-mdc-tab.cdk-keyboard-focused .mdc-tab__ripple::before {
  opacity: 0.12;
}
.mat-mdc-tab .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab-group.mat-mdc-tab-group-stretch-tabs > .mat-mdc-tab-header .mat-mdc-tab {
  flex-grow: 1;
}

.mat-mdc-tab-group {
  display: flex;
  flex-direction: column;
  max-width: 100%;
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination {
  background-color: var(--mat-tab-background-color);
}
.mat-mdc-tab-group.mat-tabs-with-background.mat-primary > .mat-mdc-tab-header .mat-mdc-tab .mdc-tab__text-label {
  color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background.mat-primary > .mat-mdc-tab-header .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab__text-label {
  color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-focus-indicator::before, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-focus-indicator::before {
  border-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-ripple-element, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mdc-tab__ripple::before, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-ripple-element, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mdc-tab__ripple::before {
  background-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron {
  color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header {
  flex-direction: column-reverse;
}
.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header .mdc-tab-indicator__content--underline {
  align-self: flex-start;
}

.mat-mdc-tab-body-wrapper {
  position: relative;
  overflow: hidden;
  display: flex;
  transition: height 500ms cubic-bezier(0.35, 0, 0.25, 1);
}
.mat-mdc-tab-body-wrapper._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
`],encapsulation:2})}return t})(),vb=class{index;tab};function l1(t,n){if(t&1&&(_(0,"div",10)(1,"mat-error"),N(2),y()()),t&2){let e=ce();w(2),Oe(e.errorMessage())}}function d1(t,n){if(t&1&&(_(0,"div",10)(1,"mat-error"),N(2),y()()),t&2){let e=ce();w(2),Oe(e.errorMessage())}}function u1(t,n){if(t&1&&(_(0,"div",14)(1,"p"),N(2),y()()),t&2){let e=ce();w(2),Oe(e.successMessage())}}var qu=class t{email=Le.required();password=Le.required();name=Le.required();lastName=Le.required();errorMessage=Le.required();successMessage=Le.required();hide=B(!0);clickEvent(n){this.hide.set(!this.hide()),n.stopPropagation()}clearError(){this.errorMessage.set(""),this.successMessage.set("")}loginSubmitEvent=new R;submitLogin(){this.loginSubmitEvent.emit()}registerSubmitEvent=new R;submitRegister(){this.registerSubmitEvent.emit()}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=E({type:t,selectors:[["login-container"]],inputs:{email:[1,"email"],password:[1,"password"],name:[1,"name"],lastName:[1,"lastName"],errorMessage:[1,"errorMessage"],successMessage:[1,"successMessage"]},outputs:{email:"emailChange",password:"passwordChange",name:"nameChange",lastName:"lastNameChange",errorMessage:"errorMessageChange",successMessage:"successMessageChange",loginSubmitEvent:"loginSubmitEvent",registerSubmitEvent:"registerSubmitEvent"},decls:59,vars:17,consts:[[1,"login-container"],["id","logincard","appearance","outlined",1,"login-container-card"],["dynamicHeight","",3,"selectedIndexChange"],["label","Logga in"],[1,"login-container-header"],[1,"login-container-card-content"],[1,"login-container-fields"],["matInput","",3,"ngModelChange","ngModel"],["matInput","",3,"ngModelChange","ngModel","type"],["matIconButton","","matSuffix","",3,"click"],[1,"login-container-error"],[1,"login-container-buttons"],["matButton","elevated",1,"login-container-button",3,"click"],["label","Registrera anv\xE4ndare"],[1,"login-container-success"]],template:function(e,i){e&1&&(_(0,"div",0)(1,"mat-card",1)(2,"mat-tab-group",2),H("selectedIndexChange",function(){return i.clearError()}),_(3,"mat-tab",3)(4,"mat-card-header",4)(5,"mat-card-title"),N(6,"V\xE4lkommen tillbaka till "),_(7,"b"),N(8,"K\xEEndGuard"),y()()(),_(9,"mat-card-content",5)(10,"div",6)(11,"mat-form-field")(12,"mat-label"),N(13,"E-post adress"),y(),_(14,"input",7),_t("ngModelChange",function(o){return Fe(i.email,o)||(i.email=o),o}),y()(),_(15,"mat-form-field")(16,"mat-label"),N(17,"L\xF6senord"),y(),_(18,"input",8),_t("ngModelChange",function(o){return Fe(i.password,o)||(i.password=o),o}),y(),_(19,"button",9),H("click",function(o){return i.clickEvent(o)}),_(20,"mat-icon"),N(21),y()()()(),he(22,l1,3,1,"div",10),_(23,"div",11)(24,"button",12),H("click",function(){return i.submitLogin()}),N(25," Logga in "),y()()()(),_(26,"mat-tab",13)(27,"mat-card-header",4)(28,"mat-card-title"),N(29,"V\xE4lkommen till "),_(30,"b"),N(31,"K\xEEndGuard"),y()()(),_(32,"mat-card-content",5)(33,"div",6)(34,"mat-form-field")(35,"mat-label"),N(36,"F\xF6rnamn"),y(),_(37,"input",7),_t("ngModelChange",function(o){return Fe(i.name,o)||(i.name=o),o}),y()(),_(38,"mat-form-field")(39,"mat-label"),N(40,"Efternamn"),y(),_(41,"input",7),_t("ngModelChange",function(o){return Fe(i.lastName,o)||(i.lastName=o),o}),y()()(),_(42,"div",6)(43,"mat-form-field")(44,"mat-label"),N(45,"E-post adress"),y(),_(46,"input",7),_t("ngModelChange",function(o){return Fe(i.email,o)||(i.email=o),o}),y()(),_(47,"mat-form-field")(48,"mat-label"),N(49,"L\xF6senord"),y(),_(50,"input",8),_t("ngModelChange",function(o){return Fe(i.password,o)||(i.password=o),o}),y(),_(51,"button",9),H("click",function(o){return i.clickEvent(o)}),_(52,"mat-icon"),N(53),y()()()(),he(54,d1,3,1,"div",10),he(55,u1,3,1,"div",14),_(56,"div",11)(57,"button",12),H("click",function(){return i.submitRegister()}),N(58," Registrera "),y()()()()()()()),e&2&&(w(14),vt("ngModel",i.email),w(4),vt("ngModel",i.password),ne("type",i.hide()?"password":"text"),w(),oe("aria-label","Hide password")("aria-pressed",i.hide()),w(2),Oe(i.hide()?"visibility_off":"visibility"),w(),pe(i.errorMessage()!==""?22:-1),w(15),vt("ngModel",i.name),w(4),vt("ngModel",i.lastName),w(5),vt("ngModel",i.email),w(4),vt("ngModel",i.password),ne("type",i.hide()?"password":"text"),w(),oe("aria-label","Hide password")("aria-pressed",i.hide()),w(2),Oe(i.hide()?"visibility_off":"visibility"),w(),pe(i.errorMessage()!==""?54:-1),w(),pe(i.successMessage()!==""?55:-1))},dependencies:[zu,oa,Vu,nc,$r,Zi,zr,Yg,Kg,Wu,aa,ea,Du,qg,na,ta,zi,$i,Wi,uu,la,Zr],styles:['[_nghost-%COMP%]{width:40%}.login-container[_ngcontent-%COMP%]{display:flex;flex:1;width:100%}.login-container-header[_ngcontent-%COMP%]{text-align:center;margin-bottom:1em}.login-container-card[_ngcontent-%COMP%]{width:100%}.login-container-card-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.login-container-fields[_ngcontent-%COMP%]{display:flex;width:100%;justify-content:space-between}.login-container-fields[_ngcontent-%COMP%]:after{content:""}.login-container-fields[_ngcontent-%COMP%]:before{content:""}.login-container-fields[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:33%}.login-container-buttons[_ngcontent-%COMP%]{display:flex;justify-content:center;width:100%}.login-container-buttons[_ngcontent-%COMP%]:after{content:""}.login-container-button[_ngcontent-%COMP%]:before{content:""}.login-container-error[_ngcontent-%COMP%]{margin-bottom:1em;text-align:center}.login-container-success[_ngcontent-%COMP%]{color:green;text-align:center;margin-bottom:1em}.login-container-button[_ngcontent-%COMP%]{width:auto;margin-left:1em;margin-right:1em}']})};var ft={apiUrl:"https://salad-dramatize-customary.ngrok-free.dev",wsUrl:"wss://salad-dramatize-customary.ngrok-free.dev"};var da=class t{baseUrl=`${ft.apiUrl}/api/auth`;http=d(yt);login(n,e){let i={email:n,password:e};return this.http.post(`${this.baseUrl}/login`,i).pipe(je(r=>{sessionStorage.setItem("token",r.token),sessionStorage.setItem("UserId",r.id.toString())}))}register(n,e,i){let r={name:n,email:e,password:i};return this.http.post(`${this.baseUrl}/register`,r)}async isAuthorized(){return await new Promise(i=>{this.http.get(`${this.baseUrl}/validate`,{}).subscribe({error:()=>i(!1),complete:()=>i(!0)})})}static \u0275fac=function(e){return new(e||t)};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})};var Zu=class t{email=B("");password=B("");name=B("");lastName=B("");errorMessage=B("");successMessage=B("");router=d(Lt);authService=d(da);onLoginSubmit(){this.authService.login(this.email(),this.password()).subscribe({error:n=>{this.errorMessage.set(n.error.error)},next:()=>{this.router.navigate(["/app"])}})}onRegisterSubmit(){let n=this.name()+" "+this.lastName(),e=this.email().trim(),i=this.password();this.authService.register(n,e,i).subscribe({error:r=>{this.successMessage.set(""),this.errorMessage.set(r.error.error)},next:r=>{this.errorMessage.set(""),this.successMessage.set(r.message)}})}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=E({type:t,selectors:[["login-page"]],decls:3,vars:6,consts:[["width","auto","height","150px","alt","Kindguard logo","src","Kindguardlogo.png"],[1,"login-page-container",3,"emailChange","passwordChange","nameChange","lastNameChange","errorMessageChange","successMessageChange","loginSubmitEvent","registerSubmitEvent","email","password","name","lastName","errorMessage","successMessage"]],template:function(e,i){e&1&&(_(0,"div"),le(1,"img",0),y(),_(2,"login-container",1),_t("emailChange",function(o){return Fe(i.email,o)||(i.email=o),o})("passwordChange",function(o){return Fe(i.password,o)||(i.password=o),o})("nameChange",function(o){return Fe(i.name,o)||(i.name=o),o})("lastNameChange",function(o){return Fe(i.lastName,o)||(i.lastName=o),o})("errorMessageChange",function(o){return Fe(i.errorMessage,o)||(i.errorMessage=o),o})("successMessageChange",function(o){return Fe(i.successMessage,o)||(i.successMessage=o),o}),H("loginSubmitEvent",function(){return i.onLoginSubmit()})("registerSubmitEvent",function(){return i.onRegisterSubmit()}),y()),e&2&&(w(2),vt("email",i.email)("password",i.password)("name",i.name)("lastName",i.lastName)("errorMessage",i.errorMessage)("successMessage",i.successMessage))},dependencies:[qu],styles:["[_nghost-%COMP%]{display:flex;width:100%;height:80%;flex-direction:column;justify-content:center;align-items:center;gap:100px}"]})};var yb=(()=>{class t{get vertical(){return this._vertical}set vertical(e){this._vertical=Rt(e)}_vertical=!1;get inset(){return this._inset}set inset(e){this._inset=Rt(e)}_inset=!1;static \u0275fac=function(i){return new(i||t)};static \u0275cmp=E({type:t,selectors:[["mat-divider"]],hostAttrs:["role","separator",1,"mat-divider"],hostVars:7,hostBindings:function(i,r){i&2&&(oe("aria-orientation",r.vertical?"vertical":"horizontal"),W("mat-divider-vertical",r.vertical)("mat-divider-horizontal",!r.vertical)("mat-divider-inset",r.inset))},inputs:{vertical:"vertical",inset:"inset"},decls:0,vars:0,template:function(i,r){},styles:[`.mat-divider {
  display: block;
  margin: 0;
  border-top-style: solid;
  border-top-color: var(--mat-divider-color, var(--mat-sys-outline-variant));
  border-top-width: var(--mat-divider-width, 1px);
}
.mat-divider.mat-divider-vertical {
  border-top: 0;
  border-right-style: solid;
  border-right-color: var(--mat-divider-color, var(--mat-sys-outline-variant));
  border-right-width: var(--mat-divider-width, 1px);
}
.mat-divider.mat-divider-inset {
  margin-left: 80px;
}
[dir=rtl] .mat-divider.mat-divider-inset {
  margin-left: auto;
  margin-right: 80px;
}
`],encapsulation:2,changeDetection:0})}return t})(),ua=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=V({type:t});static \u0275inj=P({imports:[ge]})}return t})();var f1=["mat-internal-form-field",""],m1=["*"],xx=(()=>{class t{labelPosition="after";static \u0275fac=function(i){return new(i||t)};static \u0275cmp=E({type:t,selectors:[["div","mat-internal-form-field",""]],hostAttrs:[1,"mdc-form-field","mat-internal-form-field"],hostVars:2,hostBindings:function(i,r){i&2&&W("mdc-form-field--align-end",r.labelPosition==="before")},inputs:{labelPosition:"labelPosition"},attrs:f1,ngContentSelectors:m1,decls:1,vars:0,template:function(i,r){i&1&&(xe(),K(0))},styles:[`.mat-internal-form-field {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
}
.mat-internal-form-field > label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
  order: 0;
}
[dir=rtl] .mat-internal-form-field > label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
}

.mdc-form-field--align-end > label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
  order: -1;
}
[dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
}
`],encapsulation:2,changeDetection:0})}return t})();var h1=["input"],p1=["label"],g1=["*"],wb={color:"accent",clickAction:"check-indeterminate",disabledInteractive:!1},b1=new g("mat-checkbox-default-options",{providedIn:"root",factory:()=>wb}),Ct=(function(t){return t[t.Init=0]="Init",t[t.Checked=1]="Checked",t[t.Unchecked=2]="Unchecked",t[t.Indeterminate=3]="Indeterminate",t})(Ct||{}),Cb=class{source;checked},Db=(()=>{class t{_elementRef=d(F);_changeDetectorRef=d(We);_ngZone=d(k);_animationsDisabled=Xe();_options=d(b1,{optional:!0});focus(){this._inputElement.nativeElement.focus()}_createChangeEvent(e){let i=new Cb;return i.source=this,i.checked=e,i}_getAnimationTargetElement(){return this._inputElement?.nativeElement}_animationClasses={uncheckedToChecked:"mdc-checkbox--anim-unchecked-checked",uncheckedToIndeterminate:"mdc-checkbox--anim-unchecked-indeterminate",checkedToUnchecked:"mdc-checkbox--anim-checked-unchecked",checkedToIndeterminate:"mdc-checkbox--anim-checked-indeterminate",indeterminateToChecked:"mdc-checkbox--anim-indeterminate-checked",indeterminateToUnchecked:"mdc-checkbox--anim-indeterminate-unchecked"};ariaLabel="";ariaLabelledby=null;ariaDescribedby;ariaExpanded;ariaControls;ariaOwns;_uniqueId;id;get inputId(){return`${this.id||this._uniqueId}-input`}required=!1;labelPosition="after";name=null;change=new R;indeterminateChange=new R;value;disableRipple=!1;_inputElement;_labelElement;tabIndex;color;disabledInteractive;_onTouched=()=>{};_currentAnimationClass="";_currentCheckState=Ct.Init;_controlValueAccessorChangeFn=()=>{};_validatorChangeFn=()=>{};constructor(){d(at).load(qi);let e=d(new Bi("tabindex"),{optional:!0});this._options=this._options||wb,this.color=this._options.color||wb.color,this.tabIndex=e==null?0:parseInt(e)||0,this.id=this._uniqueId=d(Ke).getId("mat-mdc-checkbox-"),this.disabledInteractive=this._options?.disabledInteractive??!1}ngOnChanges(e){e.required&&this._validatorChangeFn()}ngAfterViewInit(){this._syncIndeterminate(this.indeterminate)}get checked(){return this._checked}set checked(e){e!=this.checked&&(this._checked=e,this._changeDetectorRef.markForCheck())}_checked=!1;get disabled(){return this._disabled}set disabled(e){e!==this.disabled&&(this._disabled=e,this._changeDetectorRef.markForCheck())}_disabled=!1;get indeterminate(){return this._indeterminate()}set indeterminate(e){let i=e!=this._indeterminate();this._indeterminate.set(e),i&&(e?this._transitionCheckState(Ct.Indeterminate):this._transitionCheckState(this.checked?Ct.Checked:Ct.Unchecked),this.indeterminateChange.emit(e)),this._syncIndeterminate(e)}_indeterminate=B(!1);_isRippleDisabled(){return this.disableRipple||this.disabled}_onLabelTextChange(){this._changeDetectorRef.detectChanges()}writeValue(e){this.checked=!!e}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorChangeFn=e}_transitionCheckState(e){let i=this._currentCheckState,r=this._getAnimationTargetElement();if(!(i===e||!r)&&(this._currentAnimationClass&&r.classList.remove(this._currentAnimationClass),this._currentAnimationClass=this._getAnimationClassForCheckStateTransition(i,e),this._currentCheckState=e,this._currentAnimationClass.length>0)){r.classList.add(this._currentAnimationClass);let o=this._currentAnimationClass;this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{r.classList.remove(o)},1e3)})}}_emitChangeEvent(){this._controlValueAccessorChangeFn(this.checked),this.change.emit(this._createChangeEvent(this.checked)),this._inputElement&&(this._inputElement.nativeElement.checked=this.checked)}toggle(){this.checked=!this.checked,this._controlValueAccessorChangeFn(this.checked)}_handleInputClick(){let e=this._options?.clickAction;!this.disabled&&e!=="noop"?(this.indeterminate&&e!=="check"&&Promise.resolve().then(()=>{this._indeterminate.set(!1),this.indeterminateChange.emit(!1)}),this._checked=!this._checked,this._transitionCheckState(this._checked?Ct.Checked:Ct.Unchecked),this._emitChangeEvent()):(this.disabled&&this.disabledInteractive||!this.disabled&&e==="noop")&&(this._inputElement.nativeElement.checked=this.checked,this._inputElement.nativeElement.indeterminate=this.indeterminate)}_onInteractionEvent(e){e.stopPropagation()}_onBlur(){Promise.resolve().then(()=>{this._onTouched(),this._changeDetectorRef.markForCheck()})}_getAnimationClassForCheckStateTransition(e,i){if(this._animationsDisabled)return"";switch(e){case Ct.Init:if(i===Ct.Checked)return this._animationClasses.uncheckedToChecked;if(i==Ct.Indeterminate)return this._checked?this._animationClasses.checkedToIndeterminate:this._animationClasses.uncheckedToIndeterminate;break;case Ct.Unchecked:return i===Ct.Checked?this._animationClasses.uncheckedToChecked:this._animationClasses.uncheckedToIndeterminate;case Ct.Checked:return i===Ct.Unchecked?this._animationClasses.checkedToUnchecked:this._animationClasses.checkedToIndeterminate;case Ct.Indeterminate:return i===Ct.Checked?this._animationClasses.indeterminateToChecked:this._animationClasses.indeterminateToUnchecked}return""}_syncIndeterminate(e){let i=this._inputElement;i&&(i.nativeElement.indeterminate=e)}_onInputClick(){this._handleInputClick()}_onTouchTargetClick(){this._handleInputClick(),this.disabled||this._inputElement.nativeElement.focus()}_preventBubblingFromLabel(e){e.target&&this._labelElement.nativeElement.contains(e.target)&&e.stopPropagation()}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=E({type:t,selectors:[["mat-checkbox"]],viewQuery:function(i,r){if(i&1&&rt(h1,5)(p1,5),i&2){let o;z(o=$())&&(r._inputElement=o.first),z(o=$())&&(r._labelElement=o.first)}},hostAttrs:[1,"mat-mdc-checkbox"],hostVars:16,hostBindings:function(i,r){i&2&&(yn("id",r.id),oe("tabindex",null)("aria-label",null)("aria-labelledby",null),qt(r.color?"mat-"+r.color:"mat-accent"),W("_mat-animation-noopable",r._animationsDisabled)("mdc-checkbox--disabled",r.disabled)("mat-mdc-checkbox-disabled",r.disabled)("mat-mdc-checkbox-checked",r.checked)("mat-mdc-checkbox-disabled-interactive",r.disabledInteractive))},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],ariaExpanded:[2,"aria-expanded","ariaExpanded",ae],ariaControls:[0,"aria-controls","ariaControls"],ariaOwns:[0,"aria-owns","ariaOwns"],id:"id",required:[2,"required","required",ae],labelPosition:"labelPosition",name:"name",value:"value",disableRipple:[2,"disableRipple","disableRipple",ae],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?void 0:ci(e)],color:"color",disabledInteractive:[2,"disabledInteractive","disabledInteractive",ae],checked:[2,"checked","checked",ae],disabled:[2,"disabled","disabled",ae],indeterminate:[2,"indeterminate","indeterminate",ae]},outputs:{change:"change",indeterminateChange:"indeterminateChange"},exportAs:["matCheckbox"],features:[ke([{provide:Bu,useExisting:Ht(()=>t),multi:!0},{provide:tc,useExisting:t,multi:!0}]),$e],ngContentSelectors:g1,decls:15,vars:23,consts:[["checkbox",""],["input",""],["label",""],["mat-internal-form-field","",3,"click","labelPosition"],[1,"mdc-checkbox"],["aria-hidden","true",1,"mat-mdc-checkbox-touch-target",3,"click"],["type","checkbox",1,"mdc-checkbox__native-control",3,"blur","click","change","checked","indeterminate","disabled","id","required","tabIndex"],["aria-hidden","true",1,"mdc-checkbox__ripple"],["aria-hidden","true",1,"mdc-checkbox__background"],["focusable","false","viewBox","0 0 24 24",1,"mdc-checkbox__checkmark"],["fill","none","d","M1.73,12.91 8.1,19.28 22.79,4.59",1,"mdc-checkbox__checkmark-path"],[1,"mdc-checkbox__mixedmark"],["mat-ripple","","aria-hidden","true",1,"mat-mdc-checkbox-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-label",3,"for"]],template:function(i,r){if(i&1&&(xe(),_(0,"div",3),H("click",function(a){return r._preventBubblingFromLabel(a)}),_(1,"div",4,0)(3,"div",5),H("click",function(){return r._onTouchTargetClick()}),y(),_(4,"input",6,1),H("blur",function(){return r._onBlur()})("click",function(){return r._onInputClick()})("change",function(a){return r._onInteractionEvent(a)}),y(),le(6,"div",7),_(7,"div",8),Za(),_(8,"svg",9),le(9,"path",10),y(),Qa(),le(10,"div",11),y(),le(11,"div",12),y(),_(12,"label",13,2),K(14),y()()),i&2){let o=on(2);ne("labelPosition",r.labelPosition),w(4),W("mdc-checkbox--selected",r.checked),ne("checked",r.checked)("indeterminate",r.indeterminate)("disabled",r.disabled&&!r.disabledInteractive)("id",r.inputId)("required",r.required)("tabIndex",r.disabled&&!r.disabledInteractive?-1:r.tabIndex),oe("aria-label",r.ariaLabel||null)("aria-labelledby",r.ariaLabelledby)("aria-describedby",r.ariaDescribedby)("aria-checked",r.indeterminate?"mixed":null)("aria-controls",r.ariaControls)("aria-disabled",r.disabled&&r.disabledInteractive?!0:null)("aria-expanded",r.ariaExpanded)("aria-owns",r.ariaOwns)("name",r.name)("value",r.value),w(7),ne("matRippleTrigger",o)("matRippleDisabled",r.disableRipple||r.disabled)("matRippleCentered",!0),w(),ne("for",r.inputId)}},dependencies:[Qs,xx],styles:[`.mdc-checkbox {
  display: inline-block;
  position: relative;
  flex: 0 0 18px;
  box-sizing: content-box;
  width: 18px;
  height: 18px;
  line-height: 0;
  white-space: nowrap;
  cursor: pointer;
  vertical-align: bottom;
  padding: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  margin: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
}
.mdc-checkbox:hover > .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-unselected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox:hover > .mat-mdc-checkbox-ripple > .mat-ripple-element {
  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control:focus + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-unselected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
  background-color: var(--mat-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control:focus ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox:active > .mdc-checkbox__native-control + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  background-color: var(--mat-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:active > .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:hover > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
  background-color: var(--mat-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox .mdc-checkbox__native-control:focus:checked + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
  background-color: var(--mat-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox .mdc-checkbox__native-control:focus:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:active > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  background-color: var(--mat-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox:active > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control + .mdc-checkbox__ripple {
  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control {
  position: absolute;
  margin: 0;
  padding: 0;
  opacity: 0;
  cursor: inherit;
  z-index: 1;
  width: var(--mat-checkbox-state-layer-size, 40px);
  height: var(--mat-checkbox-state-layer-size, 40px);
  top: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
  right: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
  left: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
}

.mdc-checkbox--disabled {
  cursor: default;
  pointer-events: none;
}

.mdc-checkbox__background {
  display: inline-flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 18px;
  height: 18px;
  border: 2px solid currentColor;
  border-radius: 2px;
  background-color: transparent;
  pointer-events: none;
  will-change: background-color, border-color;
  transition: background-color 90ms cubic-bezier(0.4, 0, 0.6, 1), border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
  -webkit-print-color-adjust: exact;
  color-adjust: exact;
  border-color: var(--mat-checkbox-unselected-icon-color, var(--mat-sys-on-surface-variant));
  top: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  left: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);
}

.mdc-checkbox__native-control:enabled:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:enabled:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary));
}

.mdc-checkbox--disabled .mdc-checkbox__background {
  border-color: var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__background {
    border-color: GrayText;
  }
}

.mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}
@media (forced-colors: active) {
  .mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
  .mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
    border-color: GrayText;
  }
}

.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:checked) ~ .mdc-checkbox__background,
.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-unselected-hover-icon-color, var(--mat-sys-on-surface));
  background-color: transparent;
}

.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox:hover > .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary));
}

.mdc-checkbox__native-control:focus:focus:not(:checked) ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:focus:focus:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-unselected-focus-icon-color, var(--mat-sys-on-surface));
}

.mdc-checkbox__native-control:focus:focus:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:focus:focus:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary));
}

.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
  border-color: var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
    border-color: GrayText;
  }
}
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}

.mdc-checkbox__checkmark {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  opacity: 0;
  transition: opacity 180ms cubic-bezier(0.4, 0, 0.6, 1);
  color: var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mdc-checkbox__checkmark {
    color: CanvasText;
  }
}

.mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
  color: var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
    color: GrayText;
  }
}

.mdc-checkbox__checkmark-path {
  transition: stroke-dashoffset 180ms cubic-bezier(0.4, 0, 0.6, 1);
  stroke: currentColor;
  stroke-width: 3.12px;
  stroke-dashoffset: 29.7833385;
  stroke-dasharray: 29.7833385;
}

.mdc-checkbox__mixedmark {
  width: 100%;
  height: 0;
  transform: scaleX(0) rotate(0deg);
  border-width: 1px;
  border-style: solid;
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
  border-color: var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mdc-checkbox__mixedmark {
    margin: 0 1px;
  }
}

.mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
  border-color: var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
    border-color: GrayText;
  }
}

.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,
.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,
.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,
.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background {
  animation-duration: 180ms;
  animation-timing-function: linear;
}

.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-unchecked-checked-checkmark-path 180ms linear;
  transition: none;
}

.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-checked-unchecked-checkmark-path 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark {
  animation: mdc-checkbox-checked-indeterminate-checkmark 90ms linear;
  transition: none;
}
.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-checked-indeterminate-mixedmark 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark {
  animation: mdc-checkbox-indeterminate-checked-checkmark 500ms linear;
  transition: none;
}
.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-checked-mixedmark 500ms linear;
  transition: none;
}

.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear;
  transition: none;
}

.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path {
  stroke-dashoffset: 0;
}

.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transition: opacity 180ms cubic-bezier(0, 0, 0.2, 1), transform 180ms cubic-bezier(0, 0, 0.2, 1);
  opacity: 1;
}
.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(-45deg);
}

.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transform: rotate(45deg);
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(0deg);
  opacity: 1;
}

@keyframes mdc-checkbox-unchecked-checked-checkmark-path {
  0%, 50% {
    stroke-dashoffset: 29.7833385;
  }
  50% {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  100% {
    stroke-dashoffset: 0;
  }
}
@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark {
  0%, 68.2% {
    transform: scaleX(0);
  }
  68.2% {
    animation-timing-function: cubic-bezier(0, 0, 0, 1);
  }
  100% {
    transform: scaleX(1);
  }
}
@keyframes mdc-checkbox-checked-unchecked-checkmark-path {
  from {
    animation-timing-function: cubic-bezier(0.4, 0, 1, 1);
    opacity: 1;
    stroke-dashoffset: 0;
  }
  to {
    opacity: 0;
    stroke-dashoffset: -29.7833385;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-checkmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(45deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-checkmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(45deg);
    opacity: 0;
  }
  to {
    transform: rotate(360deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(-45deg);
    opacity: 0;
  }
  to {
    transform: rotate(0deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(315deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark {
  0% {
    animation-timing-function: linear;
    transform: scaleX(1);
    opacity: 1;
  }
  32.8%, 100% {
    transform: scaleX(0);
    opacity: 0;
  }
}
.mat-mdc-checkbox {
  display: inline-block;
  position: relative;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-touch-target,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__native-control,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__ripple,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-ripple::before,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-checkbox label {
  cursor: pointer;
}
.mat-mdc-checkbox .mat-internal-form-field {
  color: var(--mat-checkbox-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-checkbox-label-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-checkbox-label-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-checkbox-label-text-size, var(--mat-sys-body-medium-size));
  letter-spacing: var(--mat-checkbox-label-text-tracking, var(--mat-sys-body-medium-tracking));
  font-weight: var(--mat-checkbox-label-text-weight, var(--mat-sys-body-medium-weight));
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive input {
  cursor: default;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled label {
  cursor: default;
  color: var(--mat-checkbox-disabled-label-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-checkbox.mat-mdc-checkbox-disabled label {
    color: GrayText;
  }
}
.mat-mdc-checkbox label:empty {
  display: none;
}
.mat-mdc-checkbox .mdc-checkbox__ripple {
  opacity: 0;
}

.mat-mdc-checkbox .mat-mdc-checkbox-ripple,
.mdc-checkbox__ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}
.mat-mdc-checkbox .mat-mdc-checkbox-ripple:not(:empty),
.mdc-checkbox__ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-mdc-checkbox-ripple .mat-ripple-element {
  opacity: 0.1;
}

.mat-mdc-checkbox-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--mat-checkbox-touch-target-size, 48px);
  width: var(--mat-checkbox-touch-target-size, 48px);
  transform: translate(-50%, -50%);
  display: var(--mat-checkbox-touch-target-display, block);
}

.mat-mdc-checkbox .mat-mdc-checkbox-ripple::before {
  border-radius: 50%;
}

.mdc-checkbox__native-control:focus-visible ~ .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2,changeDetection:0})}return t})(),Ex=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=V({type:t});static \u0275inj=P({imports:[Db,ge]})}return t})();var fa=class t{url=`${ft.apiUrl}/api/attendance`;attendanceSignals=new Map;http=d(yt);getSignal(n,e){let i=`${n}_${e}`;return this.attendanceSignals.has(i)||this.attendanceSignals.set(i,B(null)),this.attendanceSignals.get(i)}setAttendance(n,e,i){let r={childId:n,date:e,present:i};return this.http.put(this.url,r)}static \u0275fac=function(e){return new(e||t)};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})};var Ix=yu();function pa(t){return new Qu(t.get(Ki),t.get(j))}var Qu=class{_viewportRuler;_previousHTMLStyles={top:"",left:""};_previousScrollPosition;_isEnabled=!1;_document;constructor(n,e){this._viewportRuler=n,this._document=e}attach(){}enable(){if(this._canBeEnabled()){let n=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=n.style.left||"",this._previousHTMLStyles.top=n.style.top||"",n.style.left=Ve(-this._previousScrollPosition.left),n.style.top=Ve(-this._previousScrollPosition.top),n.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){let n=this._document.documentElement,e=this._document.body,i=n.style,r=e.style,o=i.scrollBehavior||"",a=r.scrollBehavior||"";this._isEnabled=!1,i.left=this._previousHTMLStyles.left,i.top=this._previousHTMLStyles.top,n.classList.remove("cdk-global-scrollblock"),Ix&&(i.scrollBehavior=r.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),Ix&&(i.scrollBehavior=o,r.scrollBehavior=a)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;let e=this._document.documentElement,i=this._viewportRuler.getViewportSize();return e.scrollHeight>i.height||e.scrollWidth>i.width}};function Nx(t,n){return new Yu(t.get(oc),t.get(k),t.get(Ki),n)}var Yu=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(n,e,i,r){this._scrollDispatcher=n,this._ngZone=e,this._viewportRuler=i,this._config=r}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(this._scrollSubscription)return;let n=this._scrollDispatcher.scrolled(0).pipe(ue(e=>!e||!this._overlayRef.overlayElement.contains(e.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=n.subscribe(()=>{let e=this._viewportRuler.getViewportScrollPosition().top;Math.abs(e-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=n.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var ac=class{enable(){}disable(){}attach(){}};function xb(t,n){return n.some(e=>{let i=t.bottom<e.top,r=t.top>e.bottom,o=t.right<e.left,a=t.left>e.right;return i||r||o||a})}function Mx(t,n){return n.some(e=>{let i=t.top<e.top,r=t.bottom>e.bottom,o=t.left<e.left,a=t.right>e.right;return i||r||o||a})}function Ox(t,n){return new Ku(t.get(oc),t.get(Ki),t.get(k),n)}var Ku=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(n,e,i,r){this._scrollDispatcher=n,this._viewportRuler=e,this._ngZone=i,this._config=r}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(!this._scrollSubscription){let n=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(n).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:i,height:r}=this._viewportRuler.getViewportSize();xb(e,[{width:i,height:r,bottom:r,right:i,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},Fx=(()=>{class t{_injector=d(q);constructor(){}noop=()=>new ac;close=e=>Nx(this._injector,e);block=()=>pa(this._injector);reposition=e=>Ox(this._injector,e);static \u0275fac=function(i){return new(i||t)};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),ma=class{positionStrategy;scrollStrategy=new ac;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(n){if(n){let e=Object.keys(n);for(let i of e)n[i]!==void 0&&(this[i]=n[i])}}};var Xu=class{connectionPair;scrollableViewProperties;constructor(n,e){this.connectionPair=n,this.scrollableViewProperties=e}};var Px=(()=>{class t{_attachedOverlays=[];_document=d(j);_isAttached=!1;constructor(){}ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let i=this._attachedOverlays.indexOf(e);i>-1&&this._attachedOverlays.splice(i,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(e,i,r){return r.observers.length<1?!1:e.eventPredicate?e.eventPredicate(i):!0}static \u0275fac=function(i){return new(i||t)};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Lx=(()=>{class t extends Px{_ngZone=d(k);_renderer=d(ze).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=e=>{let i=this._attachedOverlays;for(let r=i.length-1;r>-1;r--){let o=i[r];if(this.canReceiveEvent(o,e,o._keydownEvents)){this._ngZone.run(()=>o._keydownEvents.next(e));break}}};static \u0275fac=(()=>{let e;return function(r){return(e||(e=Re(t)))(r||t)}})();static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),jx=(()=>{class t extends Px{_platform=d(de);_ngZone=d(k);_renderer=d(ze).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let i=this._document.body,r={capture:!0},o=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[o.listen(i,"pointerdown",this._pointerDownListener,r),o.listen(i,"click",this._clickListener,r),o.listen(i,"auxclick",this._clickListener,r),o.listen(i,"contextmenu",this._clickListener,r)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=i.style.cursor,i.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=e=>{this._pointerDownEventTarget=Bt(e)};_clickListener=e=>{let i=Bt(e),r=e.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:i;this._pointerDownEventTarget=null;let o=this._attachedOverlays.slice();for(let a=o.length-1;a>-1;a--){let s=o[a],c=s._outsidePointerEvents;if(!(!s.hasAttached()||!this.canReceiveEvent(s,e,c))){if(Sx(s.overlayElement,i)||Sx(s.overlayElement,r))break;this._ngZone?this._ngZone.run(()=>c.next(e)):c.next(e)}}};static \u0275fac=(()=>{let e;return function(r){return(e||(e=Re(t)))(r||t)}})();static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Sx(t,n){let e=typeof ShadowRoot<"u"&&ShadowRoot,i=n;for(;i;){if(i===t)return!0;i=e&&i instanceof ShadowRoot?i.host:i.parentNode}return!1}var Bx=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=E({type:t,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(i,r){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
  pointer-events: none;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.cdk-overlay-container {
  position: fixed;
}
@layer cdk-overlay {
  .cdk-overlay-container {
    z-index: 1000;
  }
}
.cdk-overlay-container:empty {
  display: none;
}

.cdk-global-overlay-wrapper {
  display: flex;
  position: absolute;
}
@layer cdk-overlay {
  .cdk-global-overlay-wrapper {
    z-index: 1000;
  }
}

.cdk-overlay-pane {
  position: absolute;
  pointer-events: auto;
  box-sizing: border-box;
  display: flex;
  max-width: 100%;
  max-height: 100%;
}
@layer cdk-overlay {
  .cdk-overlay-pane {
    z-index: 1000;
  }
}

.cdk-overlay-backdrop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: auto;
  -webkit-tap-highlight-color: transparent;
  opacity: 0;
  touch-action: manipulation;
}
@layer cdk-overlay {
  .cdk-overlay-backdrop {
    z-index: 1000;
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
  }
}
@media (prefers-reduced-motion) {
  .cdk-overlay-backdrop {
    transition-duration: 1ms;
  }
}

.cdk-overlay-backdrop-showing {
  opacity: 1;
}
@media (forced-colors: active) {
  .cdk-overlay-backdrop-showing {
    opacity: 0.6;
  }
}

@layer cdk-overlay {
  .cdk-overlay-dark-backdrop {
    background: rgba(0, 0, 0, 0.32);
  }
}

.cdk-overlay-transparent-backdrop {
  transition: visibility 1ms linear, opacity 1ms linear;
  visibility: hidden;
  opacity: 1;
}
.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing, .cdk-high-contrast-active .cdk-overlay-transparent-backdrop {
  opacity: 0;
  visibility: visible;
}

.cdk-overlay-backdrop-noop-animation {
  transition: none;
}

.cdk-overlay-connected-position-bounding-box {
  position: absolute;
  display: flex;
  flex-direction: column;
  min-width: 1px;
  min-height: 1px;
}
@layer cdk-overlay {
  .cdk-overlay-connected-position-bounding-box {
    z-index: 1000;
  }
}

.cdk-global-scrollblock {
  position: fixed;
  width: 100%;
  overflow-y: scroll;
}

.cdk-overlay-popover {
  background: none;
  border: none;
  padding: 0;
  outline: 0;
  overflow: visible;
  position: fixed;
  pointer-events: none;
  white-space: normal;
  color: inherit;
  text-decoration: none;
  width: 100%;
  height: 100%;
  inset: auto;
  top: 0;
  left: 0;
}
.cdk-overlay-popover::backdrop {
  display: none;
}
.cdk-overlay-popover .cdk-overlay-backdrop {
  position: fixed;
  z-index: auto;
}
`],encapsulation:2,changeDetection:0})}return t})(),tf=(()=>{class t{_platform=d(de);_containerElement;_document=d(j);_styleLoader=d(at);constructor(){}ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e="cdk-overlay-container";if(this._platform.isBrowser||Vg()){let r=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let o=0;o<r.length;o++)r[o].remove()}let i=this._document.createElement("div");i.classList.add(e),Vg()?i.setAttribute("platform","test"):this._platform.isBrowser||i.setAttribute("platform","server"),this._document.body.appendChild(i),this._containerElement=i}_loadStyles(){this._styleLoader.load(Bx)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Eb=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(n,e,i,r){this._renderer=e,this._ngZone=i,this.element=n.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=e.listen(this.element,"click",r)}detach(){this._ngZone.runOutsideAngular(()=>{let n=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(n,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),n.style.pointerEvents="none",n.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function Ib(t){return t&&t.nodeType===1}var ha=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new x;_attachments=new x;_detachments=new x;_positionStrategy;_scrollStrategy;_locationChanges=se.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new x;_outsidePointerEvents=new x;_afterNextRenderRef;constructor(n,e,i,r,o,a,s,c,l,u=!1,f,m){this._portalOutlet=n,this._host=e,this._pane=i,this._config=r,this._ngZone=o,this._keyboardDispatcher=a,this._document=s,this._location=c,this._outsideClickDispatcher=l,this._animationsDisabled=u,this._injector=f,this._renderer=m,r.scrollStrategy&&(this._scrollStrategy=r.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=r.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(n){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(n);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=ut(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof e?.onDestroy=="function"&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let n=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),n}dispose(){if(this._disposed)return;let n=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,n&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(n){n!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=n,this.hasAttached()&&(n.attach(this),this.updatePosition()))}updateSize(n){this._config=v(v({},this._config),n),this._updateElementSize()}setDirection(n){this._config=G(v({},this._config),{direction:n}),this._updateElementDirection()}addPanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!0)}removePanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!1)}getDirection(){let n=this._config.direction;return n?typeof n=="string"?n:n.value:"ltr"}updateScrollStrategy(n){n!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=n,this.hasAttached()&&(n.attach(this),n.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let n=this._pane.style;n.width=Ve(this._config.width),n.height=Ve(this._config.height),n.minWidth=Ve(this._config.minWidth),n.minHeight=Ve(this._config.minHeight),n.maxWidth=Ve(this._config.maxWidth),n.maxHeight=Ve(this._config.maxHeight)}_togglePointerEvents(n){this._pane.style.pointerEvents=n?"":"none"}_attachHost(){if(!this._host.parentElement){let n=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;Ib(n)?n.after(this._host):n?.type==="parent"?n.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let n="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new Eb(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(n))}):this._backdropRef.element.classList.add(n)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(n,e,i){let r=Qo(e||[]).filter(o=>!!o);r.length&&(i?n.classList.add(...r):n.classList.remove(...r))}_detachContentWhenEmpty(){let n=!1;try{this._detachContentAfterRenderRef=ut(()=>{n=!0,this._detachContent()},{injector:this._injector})}catch(e){if(n)throw e;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let n=this._scrollStrategy;n?.disable(),n?.detach?.()}},kx="cdk-overlay-connected-position-bounding-box",_1=/([A-Za-z%]+)$/;function Vx(t,n){return new Ju(n,t.get(Ki),t.get(j),t.get(de),t.get(tf))}var Ju=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new x;_resizeSubscription=se.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(n,e,i,r,o){this._viewportRuler=e,this._document=i,this._platform=r,this._overlayContainer=o,this.setOrigin(n)}attach(n){this._overlayRef&&this._overlayRef,this._validatePositions(),n.hostElement.classList.add(kx),this._overlayRef=n,this._boundingBox=n.hostElement,this._pane=n.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let n=this._originRect,e=this._overlayRect,i=this._viewportRect,r=this._containerRect,o=[],a;for(let s of this._preferredPositions){let c=this._getOriginPoint(n,r,s),l=this._getOverlayPoint(c,e,s),u=this._getOverlayFit(l,e,i,s);if(u.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(s,c);return}if(this._canFitWithFlexibleDimensions(u,l,i)){o.push({position:s,origin:c,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(c,s)});continue}(!a||a.overlayFit.visibleArea<u.visibleArea)&&(a={overlayFit:u,overlayPoint:l,originPoint:c,position:s,overlayRect:e})}if(o.length){let s=null,c=-1;for(let l of o){let u=l.boundingBoxRect.width*l.boundingBoxRect.height*(l.position.weight||1);u>c&&(c=u,s=l)}this._isPushed=!1,this._applyPosition(s.position,s.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(a.position,a.originPoint);return}this._applyPosition(a.position,a.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&Qr(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(kx),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let n=this._lastPosition;n?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(n,this._getOriginPoint(this._originRect,this._containerRect,n))):this.apply()}withScrollableContainers(n){return this._scrollables=n,this}withPositions(n){return this._preferredPositions=n,n.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(n){return this._viewportMargin=n,this}withFlexibleDimensions(n=!0){return this._hasFlexibleDimensions=n,this}withGrowAfterOpen(n=!0){return this._growAfterOpen=n,this}withPush(n=!0){return this._canPush=n,this}withLockedPosition(n=!0){return this._positionLocked=n,this}setOrigin(n){return this._origin=n,this}withDefaultOffsetX(n){return this._offsetX=n,this}withDefaultOffsetY(n){return this._offsetY=n,this}withTransformOriginOn(n){return this._transformOriginSelector=n,this}withPopoverLocation(n){return this._popoverLocation=n,this}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof F?this._origin.nativeElement:Ib(this._origin)?this._origin:null}_getOriginPoint(n,e,i){let r;if(i.originX=="center")r=n.left+n.width/2;else{let a=this._isRtl()?n.right:n.left,s=this._isRtl()?n.left:n.right;r=i.originX=="start"?a:s}e.left<0&&(r-=e.left);let o;return i.originY=="center"?o=n.top+n.height/2:o=i.originY=="top"?n.top:n.bottom,e.top<0&&(o-=e.top),{x:r,y:o}}_getOverlayPoint(n,e,i){let r;i.overlayX=="center"?r=-e.width/2:i.overlayX==="start"?r=this._isRtl()?-e.width:0:r=this._isRtl()?0:-e.width;let o;return i.overlayY=="center"?o=-e.height/2:o=i.overlayY=="top"?0:-e.height,{x:n.x+r,y:n.y+o}}_getOverlayFit(n,e,i,r){let o=Ax(e),{x:a,y:s}=n,c=this._getOffset(r,"x"),l=this._getOffset(r,"y");c&&(a+=c),l&&(s+=l);let u=0-a,f=a+o.width-i.width,m=0-s,h=s+o.height-i.height,b=this._subtractOverflows(o.width,u,f),C=this._subtractOverflows(o.height,m,h),I=b*C;return{visibleArea:I,isCompletelyWithinViewport:o.width*o.height===I,fitsInViewportVertically:C===o.height,fitsInViewportHorizontally:b==o.width}}_canFitWithFlexibleDimensions(n,e,i){if(this._hasFlexibleDimensions){let r=i.bottom-e.y,o=i.right-e.x,a=Tx(this._overlayRef.getConfig().minHeight),s=Tx(this._overlayRef.getConfig().minWidth),c=n.fitsInViewportVertically||a!=null&&a<=r,l=n.fitsInViewportHorizontally||s!=null&&s<=o;return c&&l}return!1}_pushOverlayOnScreen(n,e,i){if(this._previousPushAmount&&this._positionLocked)return{x:n.x+this._previousPushAmount.x,y:n.y+this._previousPushAmount.y};let r=Ax(e),o=this._viewportRect,a=Math.max(n.x+r.width-o.width,0),s=Math.max(n.y+r.height-o.height,0),c=Math.max(o.top-i.top-n.y,0),l=Math.max(o.left-i.left-n.x,0),u=0,f=0;return r.width<=o.width?u=l||-a:u=n.x<this._getViewportMarginStart()?o.left-i.left-n.x:0,r.height<=o.height?f=c||-s:f=n.y<this._getViewportMarginTop()?o.top-i.top-n.y:0,this._previousPushAmount={x:u,y:f},{x:n.x+u,y:n.y+f}}_applyPosition(n,e){if(this._setTransformOrigin(n),this._setOverlayElementStyles(e,n),this._setBoundingBoxStyles(e,n),n.panelClass&&this._addPanelClasses(n.panelClass),this._positionChanges.observers.length){let i=this._getScrollVisibility();if(n!==this._lastPosition||!this._lastScrollVisibility||!y1(this._lastScrollVisibility,i)){let r=new Xu(n,i);this._positionChanges.next(r)}this._lastScrollVisibility=i}this._lastPosition=n,this._isInitialRender=!1}_setTransformOrigin(n){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),i,r=n.overlayY;n.overlayX==="center"?i="center":this._isRtl()?i=n.overlayX==="start"?"right":"left":i=n.overlayX==="start"?"left":"right";for(let o=0;o<e.length;o++)e[o].style.transformOrigin=`${i} ${r}`}_calculateBoundingBoxRect(n,e){let i=this._viewportRect,r=this._isRtl(),o,a,s;if(e.overlayY==="top")a=n.y,o=i.height-a+this._getViewportMarginBottom();else if(e.overlayY==="bottom")s=i.height-n.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),o=i.height-s+this._getViewportMarginTop();else{let h=Math.min(i.bottom-n.y+i.top,n.y),b=this._lastBoundingBoxSize.height;o=h*2,a=n.y-h,o>b&&!this._isInitialRender&&!this._growAfterOpen&&(a=n.y-b/2)}let c=e.overlayX==="start"&&!r||e.overlayX==="end"&&r,l=e.overlayX==="end"&&!r||e.overlayX==="start"&&r,u,f,m;if(l)m=i.width-n.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),u=n.x-this._getViewportMarginStart();else if(c)f=n.x,u=i.right-n.x-this._getViewportMarginEnd();else{let h=Math.min(i.right-n.x+i.left,n.x),b=this._lastBoundingBoxSize.width;u=h*2,f=n.x-h,u>b&&!this._isInitialRender&&!this._growAfterOpen&&(f=n.x-b/2)}return{top:a,left:f,bottom:s,right:m,width:u,height:o}}_setBoundingBoxStyles(n,e){let i=this._calculateBoundingBoxRect(n,e);!this._isInitialRender&&!this._growAfterOpen&&(i.height=Math.min(i.height,this._lastBoundingBoxSize.height),i.width=Math.min(i.width,this._lastBoundingBoxSize.width));let r={};if(this._hasExactPosition())r.top=r.left="0",r.bottom=r.right="auto",r.maxHeight=r.maxWidth="",r.width=r.height="100%";else{let o=this._overlayRef.getConfig().maxHeight,a=this._overlayRef.getConfig().maxWidth;r.width=Ve(i.width),r.height=Ve(i.height),r.top=Ve(i.top)||"auto",r.bottom=Ve(i.bottom)||"auto",r.left=Ve(i.left)||"auto",r.right=Ve(i.right)||"auto",e.overlayX==="center"?r.alignItems="center":r.alignItems=e.overlayX==="end"?"flex-end":"flex-start",e.overlayY==="center"?r.justifyContent="center":r.justifyContent=e.overlayY==="bottom"?"flex-end":"flex-start",o&&(r.maxHeight=Ve(o)),a&&(r.maxWidth=Ve(a))}this._lastBoundingBoxSize=i,Qr(this._boundingBox.style,r)}_resetBoundingBoxStyles(){Qr(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){Qr(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(n,e){let i={},r=this._hasExactPosition(),o=this._hasFlexibleDimensions,a=this._overlayRef.getConfig();if(r){let u=this._viewportRuler.getViewportScrollPosition();Qr(i,this._getExactOverlayY(e,n,u)),Qr(i,this._getExactOverlayX(e,n,u))}else i.position="static";let s="",c=this._getOffset(e,"x"),l=this._getOffset(e,"y");c&&(s+=`translateX(${c}px) `),l&&(s+=`translateY(${l}px)`),i.transform=s.trim(),a.maxHeight&&(r?i.maxHeight=Ve(a.maxHeight):o&&(i.maxHeight="")),a.maxWidth&&(r?i.maxWidth=Ve(a.maxWidth):o&&(i.maxWidth="")),Qr(this._pane.style,i)}_getExactOverlayY(n,e,i){let r={top:"",bottom:""},o=this._getOverlayPoint(e,this._overlayRect,n);if(this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,i)),n.overlayY==="bottom"){let a=this._document.documentElement.clientHeight;r.bottom=`${a-(o.y+this._overlayRect.height)}px`}else r.top=Ve(o.y);return r}_getExactOverlayX(n,e,i){let r={left:"",right:""},o=this._getOverlayPoint(e,this._overlayRect,n);this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,i));let a;if(this._isRtl()?a=n.overlayX==="end"?"left":"right":a=n.overlayX==="end"?"right":"left",a==="right"){let s=this._document.documentElement.clientWidth;r.right=`${s-(o.x+this._overlayRect.width)}px`}else r.left=Ve(o.x);return r}_getScrollVisibility(){let n=this._getOriginRect(),e=this._pane.getBoundingClientRect(),i=this._scrollables.map(r=>r.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:Mx(n,i),isOriginOutsideView:xb(n,i),isOverlayClipped:Mx(e,i),isOverlayOutsideView:xb(e,i)}}_subtractOverflows(n,...e){return e.reduce((i,r)=>i-Math.max(r,0),n)}_getNarrowedViewportRect(){let n=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,i=this._viewportRuler.getViewportScrollPosition();return{top:i.top+this._getViewportMarginTop(),left:i.left+this._getViewportMarginStart(),right:i.left+n-this._getViewportMarginEnd(),bottom:i.top+e-this._getViewportMarginBottom(),width:n-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:e-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(n,e){return e==="x"?n.offsetX==null?this._offsetX:n.offsetX:n.offsetY==null?this._offsetY:n.offsetY}_validatePositions(){}_addPanelClasses(n){this._pane&&Qo(n).forEach(e=>{e!==""&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(n=>{this._pane.classList.remove(n)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let n=this._origin;if(n instanceof F)return n.nativeElement.getBoundingClientRect();if(n instanceof Element)return n.getBoundingClientRect();let e=n.width||0,i=n.height||0;return{top:n.y,bottom:n.y+i,left:n.x,right:n.x+e,height:i,width:e}}_getContainerRect(){let n=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",e=this._overlayContainer.getContainerElement();n&&(e.style.display="block");let i=e.getBoundingClientRect();return n&&(e.style.display=""),i}};function Qr(t,n){for(let e in n)n.hasOwnProperty(e)&&(t[e]=n[e]);return t}function Tx(t){if(typeof t!="number"&&t!=null){let[n,e]=t.split(_1);return!e||e==="px"?parseFloat(n):null}return t||null}function Ax(t){return{top:Math.floor(t.top),right:Math.floor(t.right),bottom:Math.floor(t.bottom),left:Math.floor(t.left),width:Math.floor(t.width),height:Math.floor(t.height)}}function y1(t,n){return t===n?!0:t.isOriginClipped===n.isOriginClipped&&t.isOriginOutsideView===n.isOriginOutsideView&&t.isOverlayClipped===n.isOverlayClipped&&t.isOverlayOutsideView===n.isOverlayOutsideView}var Rx="cdk-global-overlay-wrapper";function ga(t){return new ef}var ef=class{_overlayRef;_cssPosition="static";_topOffset="";_bottomOffset="";_alignItems="";_xPosition="";_xOffset="";_width="";_height="";_isDisposed=!1;attach(n){let e=n.getConfig();this._overlayRef=n,this._width&&!e.width&&n.updateSize({width:this._width}),this._height&&!e.height&&n.updateSize({height:this._height}),n.hostElement.classList.add(Rx),this._isDisposed=!1}top(n=""){return this._bottomOffset="",this._topOffset=n,this._alignItems="flex-start",this}left(n=""){return this._xOffset=n,this._xPosition="left",this}bottom(n=""){return this._topOffset="",this._bottomOffset=n,this._alignItems="flex-end",this}right(n=""){return this._xOffset=n,this._xPosition="right",this}start(n=""){return this._xOffset=n,this._xPosition="start",this}end(n=""){return this._xOffset=n,this._xPosition="end",this}width(n=""){return this._overlayRef?this._overlayRef.updateSize({width:n}):this._width=n,this}height(n=""){return this._overlayRef?this._overlayRef.updateSize({height:n}):this._height=n,this}centerHorizontally(n=""){return this.left(n),this._xPosition="center",this}centerVertically(n=""){return this.top(n),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let n=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,i=this._overlayRef.getConfig(),{width:r,height:o,maxWidth:a,maxHeight:s}=i,c=(r==="100%"||r==="100vw")&&(!a||a==="100%"||a==="100vw"),l=(o==="100%"||o==="100vh")&&(!s||s==="100%"||s==="100vh"),u=this._xPosition,f=this._xOffset,m=this._overlayRef.getConfig().direction==="rtl",h="",b="",C="";c?C="flex-start":u==="center"?(C="center",m?b=f:h=f):m?u==="left"||u==="end"?(C="flex-end",h=f):(u==="right"||u==="start")&&(C="flex-start",b=f):u==="left"||u==="start"?(C="flex-start",h=f):(u==="right"||u==="end")&&(C="flex-end",b=f),n.position=this._cssPosition,n.marginLeft=c?"0":h,n.marginTop=l?"0":this._topOffset,n.marginBottom=this._bottomOffset,n.marginRight=c?"0":b,e.justifyContent=C,e.alignItems=l?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let n=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,i=e.style;e.classList.remove(Rx),i.justifyContent=i.alignItems=n.marginTop=n.marginBottom=n.marginLeft=n.marginRight=n.position="",this._overlayRef=null,this._isDisposed=!0}},Hx=(()=>{class t{_injector=d(q);constructor(){}global(){return ga()}flexibleConnectedTo(e){return Vx(this._injector,e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Ux=new g("OVERLAY_DEFAULT_CONFIG");function nf(t,n){t.get(at).load(Bx);let e=t.get(tf),i=t.get(j),r=t.get(Ke),o=t.get(Gt),a=t.get(jt),s=t.get(Se,null,{optional:!0})||t.get(ze).createRenderer(null,null),c=new ma(n),l=t.get(Ux,null,{optional:!0})?.usePopover??!0;c.direction=c.direction||a.value,"showPopover"in i.body?c.usePopover=n?.usePopover??l:c.usePopover=!1;let u=i.createElement("div"),f=i.createElement("div");u.id=r.getId("cdk-overlay-"),u.classList.add("cdk-overlay-pane"),f.appendChild(u),c.usePopover&&(f.setAttribute("popover","manual"),f.classList.add("cdk-overlay-popover"));let m=c.usePopover?c.positionStrategy?.getPopoverInsertionPoint?.():null;return Ib(m)?m.after(f):m?.type==="parent"?m.element.appendChild(f):e.getContainerElement().appendChild(f),new ha(new Gu(u,o,t),f,u,c,t.get(k),t.get(Lx),i,t.get($n),t.get(jx),n?.disableAnimations??t.get(ss,null,{optional:!0})==="NoopAnimations",t.get(ye),s)}var zx=(()=>{class t{scrollStrategies=d(Fx);_positionBuilder=d(Hx);_injector=d(q);constructor(){}create(e){return nf(this._injector,e)}position(){return this._positionBuilder}static \u0275fac=function(i){return new(i||t)};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var sc=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=V({type:t});static \u0275inj=P({providers:[zx],imports:[ge,qr,hb,hb]})}return t})();function w1(t,n){}var Xi=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;positionStrategy;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;scrollStrategy;closeOnNavigation=!0;closeOnDestroy=!0;closeOnOverlayDetachments=!0;disableAnimations=!1;providers;container;templateContext};var Sb=(()=>{class t extends ca{_elementRef=d(F);_focusTrapFactory=d(cD);_config;_interactivityChecker=d(jg);_ngZone=d(k);_focusMonitor=d(jr);_renderer=d(Se);_changeDetectorRef=d(We);_injector=d(q);_platform=d(de);_document=d(j);_portalOutlet;_focusTrapped=new x;_focusTrap=null;_elementFocusedBeforeDialogWasOpened=null;_closeInteractionType=null;_ariaLabelledByQueue=[];_isDestroyed=!1;constructor(){super(),this._config=d(Xi,{optional:!0})||new Xi,this._config.ariaLabelledBy&&this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)}_addAriaLabelledBy(e){this._ariaLabelledByQueue.push(e),this._changeDetectorRef.markForCheck()}_removeAriaLabelledBy(e){let i=this._ariaLabelledByQueue.indexOf(e);i>-1&&(this._ariaLabelledByQueue.splice(i,1),this._changeDetectorRef.markForCheck())}_contentAttached(){this._initializeFocusTrap(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._focusTrapped.complete(),this._isDestroyed=!0,this._restoreFocus()}attachComponentPortal(e){this._portalOutlet.hasAttached();let i=this._portalOutlet.attachComponentPortal(e);return this._contentAttached(),i}attachTemplatePortal(e){this._portalOutlet.hasAttached();let i=this._portalOutlet.attachTemplatePortal(e);return this._contentAttached(),i}attachDomPortal=e=>{this._portalOutlet.hasAttached();let i=this._portalOutlet.attachDomPortal(e);return this._contentAttached(),i};_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(e,i){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let r=()=>{o(),a(),e.removeAttribute("tabindex")},o=this._renderer.listen(e,"blur",r),a=this._renderer.listen(e,"mousedown",r)})),e.focus(i)}_focusByCssSelector(e,i){let r=this._elementRef.nativeElement.querySelector(e);r&&this._forceFocus(r,i)}_trapFocus(e){this._isDestroyed||ut(()=>{let i=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case"dialog":this._containsFocus()||i.focus(e);break;case!0:case"first-tabbable":this._focusTrap?.focusInitialElement(e)||this._focusDialogContainer(e);break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]',e);break;default:this._focusByCssSelector(this._config.autoFocus,e);break}this._focusTrapped.next()},{injector:this._injector})}_restoreFocus(){let e=this._config.restoreFocus,i=null;if(typeof e=="string"?i=this._document.querySelector(e):typeof e=="boolean"?i=e?this._elementFocusedBeforeDialogWasOpened:null:e&&(i=e),this._config.restoreFocus&&i&&typeof i.focus=="function"){let r=Go(),o=this._elementRef.nativeElement;(!r||r===this._document.body||r===o||o.contains(r))&&(this._focusMonitor?(this._focusMonitor.focusVia(i,this._closeInteractionType),this._closeInteractionType=null):i.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(e){this._elementRef.nativeElement.focus?.(e)}_containsFocus(){let e=this._elementRef.nativeElement,i=Go();return e===i||e.contains(i)}_initializeFocusTrap(){this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=Go()))}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=E({type:t,selectors:[["cdk-dialog-container"]],viewQuery:function(i,r){if(i&1&&rt(Yi,7),i&2){let o;z(o=$())&&(r._portalOutlet=o.first)}},hostAttrs:["tabindex","-1",1,"cdk-dialog-container"],hostVars:6,hostBindings:function(i,r){i&2&&oe("id",r._config.id||null)("role",r._config.role)("aria-modal",r._config.ariaModal)("aria-labelledby",r._config.ariaLabel?null:r._ariaLabelledByQueue[0])("aria-label",r._config.ariaLabel)("aria-describedby",r._config.ariaDescribedBy||null)},features:[me],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(i,r){i&1&&Ot(0,w1,0,0,"ng-template",0)},dependencies:[Yi],styles:[`.cdk-dialog-container {
  display: block;
  width: 100%;
  height: 100%;
  min-height: inherit;
  max-height: inherit;
}
`],encapsulation:2})}return t})(),cc=class{overlayRef;config;componentInstance=null;componentRef=null;containerInstance;disableClose;closed=new x;backdropClick;keydownEvents;outsidePointerEvents;id;_detachSubscription;constructor(n,e){this.overlayRef=n,this.config=e,this.disableClose=e.disableClose,this.backdropClick=n.backdropClick(),this.keydownEvents=n.keydownEvents(),this.outsidePointerEvents=n.outsidePointerEvents(),this.id=e.id,this.keydownEvents.subscribe(i=>{i.keyCode===27&&!this.disableClose&&!Gi(i)&&(i.preventDefault(),this.close(void 0,{focusOrigin:"keyboard"}))}),this.backdropClick.subscribe(()=>{!this.disableClose&&this._canClose()?this.close(void 0,{focusOrigin:"mouse"}):this.containerInstance._recaptureFocus?.()}),this._detachSubscription=n.detachments().subscribe(()=>{e.closeOnOverlayDetachments!==!1&&this.close()})}close(n,e){if(this._canClose(n)){let i=this.closed;this.containerInstance._closeInteractionType=e?.focusOrigin||"program",this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),i.next(n),i.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(n="",e=""){return this.overlayRef.updateSize({width:n,height:e}),this}addPanelClass(n){return this.overlayRef.addPanelClass(n),this}removePanelClass(n){return this.overlayRef.removePanelClass(n),this}_canClose(n){let e=this.config;return!!this.containerInstance&&(!e.closePredicate||e.closePredicate(n,e,this.componentInstance))}},C1=new g("DialogScrollStrategy",{providedIn:"root",factory:()=>{let t=d(q);return()=>pa(t)}}),D1=new g("DialogData"),x1=new g("DefaultDialogConfig");function E1(t){let n=B(t),e=new R;return{valueSignal:n,get value(){return n()},change:e,ngOnDestroy(){e.complete()}}}var kb=(()=>{class t{_injector=d(q);_defaultOptions=d(x1,{optional:!0});_parentDialog=d(t,{optional:!0,skipSelf:!0});_overlayContainer=d(tf);_idGenerator=d(Ke);_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new x;_afterOpenedAtThisLevel=new x;_ariaHiddenElements=new Map;_scrollStrategy=d(C1);get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}afterAllClosed=Qn(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(ht(void 0)));constructor(){}open(e,i){let r=this._defaultOptions||new Xi;i=v(v({},r),i),i.id=i.id||this._idGenerator.getId("cdk-dialog-"),i.id&&this.getDialogById(i.id);let o=this._getOverlayConfig(i),a=nf(this._injector,o),s=new cc(a,i),c=this._attachContainer(a,s,i);if(s.containerInstance=c,!this.openDialogs.length){let l=this._overlayContainer.getContainerElement();c._focusTrapped?c._focusTrapped.pipe(Ge(1)).subscribe(()=>{this._hideNonDialogContentFromAssistiveTechnology(l)}):this._hideNonDialogContentFromAssistiveTechnology(l)}return this._attachDialogContent(e,s,c,i),this.openDialogs.push(s),s.closed.subscribe(()=>this._removeOpenDialog(s,!0)),this.afterOpened.next(s),s}closeAll(){Mb(this.openDialogs,e=>e.close())}getDialogById(e){return this.openDialogs.find(i=>i.id===e)}ngOnDestroy(){Mb(this._openDialogsAtThisLevel,e=>{e.config.closeOnDestroy===!1&&this._removeOpenDialog(e,!1)}),Mb(this._openDialogsAtThisLevel,e=>e.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(e){let i=new ma({positionStrategy:e.positionStrategy||ga().centerHorizontally().centerVertically(),scrollStrategy:e.scrollStrategy||this._scrollStrategy(),panelClass:e.panelClass,hasBackdrop:e.hasBackdrop,direction:e.direction,minWidth:e.minWidth,minHeight:e.minHeight,maxWidth:e.maxWidth,maxHeight:e.maxHeight,width:e.width,height:e.height,disposeOnNavigation:e.closeOnNavigation,disableAnimations:e.disableAnimations});return e.backdropClass&&(i.backdropClass=e.backdropClass),i}_attachContainer(e,i,r){let o=r.injector||r.viewContainerRef?.injector,a=[{provide:Xi,useValue:r},{provide:cc,useValue:i},{provide:ha,useValue:e}],s;r.container?typeof r.container=="function"?s=r.container:(s=r.container.type,a.push(...r.container.providers(r))):s=Sb;let c=new sa(s,r.viewContainerRef,q.create({parent:o||this._injector,providers:a}));return e.attach(c).instance}_attachDialogContent(e,i,r,o){if(e instanceof bt){let a=this._createInjector(o,i,r,void 0),s={$implicit:o.data,dialogRef:i};o.templateContext&&(s=v(v({},s),typeof o.templateContext=="function"?o.templateContext():o.templateContext)),r.attachTemplatePortal(new pi(e,null,s,a))}else{let a=this._createInjector(o,i,r,this._injector),s=r.attachComponentPortal(new sa(e,o.viewContainerRef,a));i.componentRef=s,i.componentInstance=s.instance}}_createInjector(e,i,r,o){let a=e.injector||e.viewContainerRef?.injector,s=[{provide:D1,useValue:e.data},{provide:cc,useValue:i}];return e.providers&&(typeof e.providers=="function"?s.push(...e.providers(i,e,r)):s.push(...e.providers)),e.direction&&(!a||!a.get(jt,null,{optional:!0}))&&s.push({provide:jt,useValue:E1(e.direction)}),q.create({parent:a||o,providers:s})}_removeOpenDialog(e,i){let r=this.openDialogs.indexOf(e);r>-1&&(this.openDialogs.splice(r,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((o,a)=>{o?a.setAttribute("aria-hidden",o):a.removeAttribute("aria-hidden")}),this._ariaHiddenElements.clear(),i&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(e){if(e.parentElement){let i=e.parentElement.children;for(let r=i.length-1;r>-1;r--){let o=i[r];o!==e&&o.nodeName!=="SCRIPT"&&o.nodeName!=="STYLE"&&!o.hasAttribute("aria-live")&&!o.hasAttribute("popover")&&(this._ariaHiddenElements.set(o,o.getAttribute("aria-hidden")),o.setAttribute("aria-hidden","true"))}}}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}static \u0275fac=function(i){return new(i||t)};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Mb(t,n){let e=t.length;for(;e--;)n(t[e])}var Wx=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=V({type:t});static \u0275inj=P({providers:[kb],imports:[sc,qr,lD,qr]})}return t})();function I1(t,n){}var of=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;position;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;delayFocusTrap=!0;scrollStrategy;closeOnNavigation=!0;enterAnimationDuration;exitAnimationDuration},Tb="mdc-dialog--open",Gx="mdc-dialog--opening",qx="mdc-dialog--closing",M1=150,S1=75,k1=(()=>{class t extends Sb{_animationStateChanged=new R;_animationsEnabled=!Xe();_actionSectionCount=0;_hostElement=this._elementRef.nativeElement;_enterAnimationDuration=this._animationsEnabled?Qx(this._config.enterAnimationDuration)??M1:0;_exitAnimationDuration=this._animationsEnabled?Qx(this._config.exitAnimationDuration)??S1:0;_animationTimer=null;_contentAttached(){super._contentAttached(),this._startOpenAnimation()}_startOpenAnimation(){this._animationStateChanged.emit({state:"opening",totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(Zx,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(Gx,Tb)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(Tb),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:"closing",totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(Tb),this._animationsEnabled?(this._hostElement.style.setProperty(Zx,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(qx)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_updateActionSectionCount(e){this._actionSectionCount+=e,this._changeDetectorRef.markForCheck()}_finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration)};_finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:"closed",totalTime:this._exitAnimationDuration})};_clearAnimationClasses(){this._hostElement.classList.remove(Gx,qx)}_waitForAnimationToComplete(e,i){this._animationTimer!==null&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(i,e)}_requestAnimationFrame(e){this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame=="function"?requestAnimationFrame(e):e()})}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(e){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:"opened",totalTime:e})}ngOnDestroy(){super.ngOnDestroy(),this._animationTimer!==null&&clearTimeout(this._animationTimer)}attachComponentPortal(e){let i=super.attachComponentPortal(e);return i.location.nativeElement.classList.add("mat-mdc-dialog-component-host"),i}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Re(t)))(r||t)}})();static \u0275cmp=E({type:t,selectors:[["mat-dialog-container"]],hostAttrs:["tabindex","-1",1,"mat-mdc-dialog-container","mdc-dialog"],hostVars:10,hostBindings:function(i,r){i&2&&(yn("id",r._config.id),oe("aria-modal",r._config.ariaModal)("role",r._config.role)("aria-labelledby",r._config.ariaLabel?null:r._ariaLabelledByQueue[0])("aria-label",r._config.ariaLabel)("aria-describedby",r._config.ariaDescribedBy||null),W("_mat-animation-noopable",!r._animationsEnabled)("mat-mdc-dialog-container-with-actions",r._actionSectionCount>0))},features:[me],decls:3,vars:0,consts:[[1,"mat-mdc-dialog-inner-container","mdc-dialog__container"],[1,"mat-mdc-dialog-surface","mdc-dialog__surface"],["cdkPortalOutlet",""]],template:function(i,r){i&1&&(_(0,"div",0)(1,"div",1),Ot(2,I1,0,0,"ng-template",2),y()())},dependencies:[Yi],styles:[`.mat-mdc-dialog-container {
  width: 100%;
  height: 100%;
  display: block;
  box-sizing: border-box;
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  outline: 0;
}

.cdk-overlay-pane.mat-mdc-dialog-panel {
  max-width: var(--mat-dialog-container-max-width, 560px);
  min-width: var(--mat-dialog-container-min-width, 280px);
}
@media (max-width: 599px) {
  .cdk-overlay-pane.mat-mdc-dialog-panel {
    max-width: var(--mat-dialog-container-small-max-width, calc(100vw - 32px));
  }
}

.mat-mdc-dialog-inner-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
  height: 100%;
  opacity: 0;
  transition: opacity linear var(--mat-dialog-transition-duration, 0ms);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
}
.mdc-dialog--closing .mat-mdc-dialog-inner-container {
  transition: opacity 75ms linear;
  transform: none;
}
.mdc-dialog--open .mat-mdc-dialog-inner-container {
  opacity: 1;
}
._mat-animation-noopable .mat-mdc-dialog-inner-container {
  transition: none;
}

.mat-mdc-dialog-surface {
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: relative;
  overflow-y: auto;
  outline: 0;
  transform: scale(0.8);
  transition: transform var(--mat-dialog-transition-duration, 0ms) cubic-bezier(0, 0, 0.2, 1);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  box-shadow: var(--mat-dialog-container-elevation-shadow, none);
  border-radius: var(--mat-dialog-container-shape, var(--mat-sys-corner-extra-large, 4px));
  background-color: var(--mat-dialog-container-color, var(--mat-sys-surface, white));
}
[dir=rtl] .mat-mdc-dialog-surface {
  text-align: right;
}
.mdc-dialog--open .mat-mdc-dialog-surface, .mdc-dialog--closing .mat-mdc-dialog-surface {
  transform: none;
}
._mat-animation-noopable .mat-mdc-dialog-surface {
  transition: none;
}
.mat-mdc-dialog-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 2px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}

.mat-mdc-dialog-title {
  display: block;
  position: relative;
  flex-shrink: 0;
  box-sizing: border-box;
  margin: 0 0 1px;
  padding: var(--mat-dialog-headline-padding, 6px 24px 13px);
}
.mat-mdc-dialog-title::before {
  display: inline-block;
  width: 0;
  height: 40px;
  content: "";
  vertical-align: 0;
}
[dir=rtl] .mat-mdc-dialog-title {
  text-align: right;
}
.mat-mdc-dialog-container .mat-mdc-dialog-title {
  color: var(--mat-dialog-subhead-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--mat-dialog-subhead-font, var(--mat-sys-headline-small-font, inherit));
  line-height: var(--mat-dialog-subhead-line-height, var(--mat-sys-headline-small-line-height, 1.5rem));
  font-size: var(--mat-dialog-subhead-size, var(--mat-sys-headline-small-size, 1rem));
  font-weight: var(--mat-dialog-subhead-weight, var(--mat-sys-headline-small-weight, 400));
  letter-spacing: var(--mat-dialog-subhead-tracking, var(--mat-sys-headline-small-tracking, 0.03125em));
}

.mat-mdc-dialog-content {
  display: block;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  overflow: auto;
  max-height: 65vh;
}
.mat-mdc-dialog-content > :first-child {
  margin-top: 0;
}
.mat-mdc-dialog-content > :last-child {
  margin-bottom: 0;
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  color: var(--mat-dialog-supporting-text-color, var(--mat-sys-on-surface-variant, rgba(0, 0, 0, 0.6)));
  font-family: var(--mat-dialog-supporting-text-font, var(--mat-sys-body-medium-font, inherit));
  line-height: var(--mat-dialog-supporting-text-line-height, var(--mat-sys-body-medium-line-height, 1.5rem));
  font-size: var(--mat-dialog-supporting-text-size, var(--mat-sys-body-medium-size, 1rem));
  font-weight: var(--mat-dialog-supporting-text-weight, var(--mat-sys-body-medium-weight, 400));
  letter-spacing: var(--mat-dialog-supporting-text-tracking, var(--mat-sys-body-medium-tracking, 0.03125em));
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  padding: var(--mat-dialog-content-padding, 20px 24px);
}
.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content {
  padding: var(--mat-dialog-with-actions-content-padding, 20px 24px 0);
}
.mat-mdc-dialog-container .mat-mdc-dialog-title + .mat-mdc-dialog-content {
  padding-top: 0;
}

.mat-mdc-dialog-actions {
  display: flex;
  position: relative;
  flex-shrink: 0;
  flex-wrap: wrap;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  margin: 0;
  border-top: 1px solid transparent;
  padding: var(--mat-dialog-actions-padding, 16px 24px);
  justify-content: var(--mat-dialog-actions-alignment, flex-end);
}
@media (forced-colors: active) {
  .mat-mdc-dialog-actions {
    border-top-color: CanvasText;
  }
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start, .mat-mdc-dialog-actions[align=start] {
  justify-content: start;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center, .mat-mdc-dialog-actions[align=center] {
  justify-content: center;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end, .mat-mdc-dialog-actions[align=end] {
  justify-content: flex-end;
}
.mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
.mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 8px;
}
[dir=rtl] .mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 0;
  margin-right: 8px;
}

.mat-mdc-dialog-component-host {
  display: contents;
}
`],encapsulation:2})}return t})(),Zx="--mat-dialog-transition-duration";function Qx(t){return t==null?null:typeof t=="number"?t:t.endsWith("ms")?qn(t.substring(0,t.length-2)):t.endsWith("s")?qn(t.substring(0,t.length-1))*1e3:t==="0"?0:null}var rf=(function(t){return t[t.OPEN=0]="OPEN",t[t.CLOSING=1]="CLOSING",t[t.CLOSED=2]="CLOSED",t})(rf||{}),lc=class{_ref;_config;_containerInstance;componentInstance;componentRef=null;disableClose;id;_afterOpened=new _i(1);_beforeClosed=new _i(1);_result;_closeFallbackTimeout;_state=rf.OPEN;_closeInteractionType;constructor(n,e,i){this._ref=n,this._config=e,this._containerInstance=i,this.disableClose=e.disableClose,this.id=n.id,n.addPanelClass("mat-mdc-dialog-panel"),i._animationStateChanged.pipe(ue(r=>r.state==="opened"),Ge(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),i._animationStateChanged.pipe(ue(r=>r.state==="closed"),Ge(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),n.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),mn(this.backdropClick(),this.keydownEvents().pipe(ue(r=>r.keyCode===27&&!this.disableClose&&!Gi(r)))).subscribe(r=>{this.disableClose||(r.preventDefault(),T1(this,r.type==="keydown"?"keyboard":"mouse"))})}close(n){let e=this._config.closePredicate;e&&!e(n,this._config,this.componentInstance)||(this._result=n,this._containerInstance._animationStateChanged.pipe(ue(i=>i.state==="closing"),Ge(1)).subscribe(i=>{this._beforeClosed.next(n),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),i.totalTime+100)}),this._state=rf.CLOSING,this._containerInstance._startExitAnimation())}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(n){let e=this._ref.config.positionStrategy;return n&&(n.left||n.right)?n.left?e.left(n.left):e.right(n.right):e.centerHorizontally(),n&&(n.top||n.bottom)?n.top?e.top(n.top):e.bottom(n.bottom):e.centerVertically(),this._ref.updatePosition(),this}updateSize(n="",e=""){return this._ref.updateSize(n,e),this}addPanelClass(n){return this._ref.addPanelClass(n),this}removePanelClass(n){return this._ref.removePanelClass(n),this}getState(){return this._state}_finishDialogClose(){this._state=rf.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}};function T1(t,n,e){return t._closeInteractionType=n,t.close(e)}var A1=new g("MatMdcDialogData"),R1=new g("mat-mdc-dialog-default-options"),N1=new g("mat-mdc-dialog-scroll-strategy",{providedIn:"root",factory:()=>{let t=d(q);return()=>pa(t)}}),Ab=(()=>{class t{_defaultOptions=d(R1,{optional:!0});_scrollStrategy=d(N1);_parentDialog=d(t,{optional:!0,skipSelf:!0});_idGenerator=d(Ke);_injector=d(q);_dialog=d(kb);_animationsDisabled=Xe();_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new x;_afterOpenedAtThisLevel=new x;dialogConfigClass=of;_dialogRefConstructor;_dialogContainerType;_dialogDataToken;get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}afterAllClosed=Qn(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(ht(void 0)));constructor(){this._dialogRefConstructor=lc,this._dialogContainerType=k1,this._dialogDataToken=A1}open(e,i){let r;i=v(v({},this._defaultOptions||new of),i),i.id=i.id||this._idGenerator.getId("mat-mdc-dialog-"),i.scrollStrategy=i.scrollStrategy||this._scrollStrategy();let o=this._dialog.open(e,G(v({},i),{positionStrategy:ga(this._injector).centerHorizontally().centerVertically(),disableClose:!0,closePredicate:void 0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,disableAnimations:this._animationsDisabled||i.enterAnimationDuration?.toLocaleString()==="0"||i.exitAnimationDuration?.toString()==="0",container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:i},{provide:Xi,useValue:i}]},templateContext:()=>({dialogRef:r}),providers:(a,s,c)=>(r=new this._dialogRefConstructor(a,i,c),r.updatePosition(i?.position),[{provide:this._dialogContainerType,useValue:c},{provide:this._dialogDataToken,useValue:s.data},{provide:this._dialogRefConstructor,useValue:r}])}));return r.componentRef=o.componentRef,r.componentInstance=o.componentInstance,this.openDialogs.push(r),this.afterOpened.next(r),r.afterClosed().subscribe(()=>{let a=this.openDialogs.indexOf(r);a>-1&&(this.openDialogs.splice(a,1),this.openDialogs.length||this._getAfterAllClosed().next())}),r}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(e){return this.openDialogs.find(i=>i.id===e)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(e){let i=e.length;for(;i--;)e[i].close()}static \u0275fac=function(i){return new(i||t)};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Yx=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=V({type:t});static \u0275inj=P({providers:[Ab],imports:[Wx,sc,qr,ge]})}return t})();var af=class t{dialogRef=d(lc);onConfirm(){this.dialogRef.close(!0)}onDeny(){this.dialogRef.close(!1)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=E({type:t,selectors:[["confirmation-dialog"]],decls:8,vars:0,consts:[[1,"flex-with-style"],[1,"top-text"],[1,"button-group"],[1,"button",3,"click"]],template:function(e,i){e&1&&(Ft(0,"div",0)(1,"p",1),N(2," \xC4r du s\xE4ker att du vill avregistrera n\xE4rvaro? "),Pt(),Ft(3,"li",2)(4,"button",3),hs("click",function(){return i.onConfirm()}),N(5," Ja "),Pt(),Ft(6,"button",3),hs("click",function(){return i.onDeny()}),N(7," Nej "),Pt()()())},dependencies:[Yx,ea],styles:["[_nghost-%COMP%]{display:block;text-align:center;padding:8px}.top-text[_ngcontent-%COMP%]{font:var(--mat-sys-title-medium)}.button-group[_ngcontent-%COMP%]{display:flex;justify-content:center;gap:32px}.button[_ngcontent-%COMP%]{padding:8px 32px;font:var(--mat-sys-label-small);font-weight:700;cursor:pointer;border-radius:4px;transition:all .2s ease-in-out;background-color:var(--mat-sys-primary);color:var(--mat-sys-on-primary);border:1px solid}button[_ngcontent-%COMP%]:hover{background-color:var(--mat-sys-primary-fixed-dim)}"]})};function In(){let t=new Date;return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`}function O1(t,n){if(t&1&&(_(0,"p",1),N(1),y()),t&2){let e=ce();w(),Oe(e.errorMessage)}}var ba=class t{childSignal=Le.required();disabled=wd();errorMessage="";dialog=d(Ab);get isChecked(){return this.attendanceService.getSignal(this.childSignal().id,In())()??!1}attendanceService=d(fa);constructor(){It(()=>{let n=this.childSignal();if(!n)return;let e=this.attendanceService.getSignal(n.id,In());e()===null&&(n.present===null?e.set(!1):e.set(n.present))})}async onCheckBox(n){let e=n.checked;if(e===!1&&(n.source.checked=!0,!await this.confirmation()))return;let i=this.attendanceService.getSignal(this.childSignal().id,In());i.set(e),this.attendanceService.setAttendance(this.childSignal().id,In(),e).subscribe({next:r=>i.set(r.present),error:r=>{console.error("Kunde inte spara",r),i.set(!e),n.source.checked=!e,this.errorMessage="Misslyckades att spara till databasen.",setTimeout(()=>this.errorMessage="",2e3)}}),this.wsUpdateAttendance(n.checked)}attendanceChangeEvent=new R;wsUpdateAttendance(n){let e={childId:this.childSignal().id,present:n};this.attendanceChangeEvent.emit(e)}async confirmation(){let n=this.dialog.open(af,{height:"120px",width:"400px"});return await jf(n.afterClosed())}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=E({type:t,selectors:[["attendance-box"]],inputs:{childSignal:[1,"childSignal"],disabled:[1,"disabled"]},outputs:{childSignal:"childSignalChange",attendanceChangeEvent:"attendanceChangeEvent"},decls:3,vars:3,consts:[[3,"change","disabled","checked"],[1,"error-text"]],template:function(e,i){e&1&&(_(0,"div")(1,"mat-checkbox",0),H("change",function(o){return i.onCheckBox(o)}),y(),he(2,O1,2,1,"p",1),y()),e&2&&(w(),ne("disabled",i.disabled())("checked",i.isChecked),w(),pe(i.errorMessage?2:-1))},dependencies:[Ex,Db],styles:[".error-text[_ngcontent-%COMP%]{color:red;font-size:16px;position:absolute}"]})};var sf=class t{childSignal=Le.required();months=["Januari","Februari","Mars","April","Maj","Juni","Juli","Augusti","September","Oktober","November","December"];days=["S\xF6ndag","M\xE5ndag","Tisdag","Onsdag","Torsdag","Fredag","L\xF6rdag"];attendanceChangeEvent=new R;wsUpdateAttendance(n){this.attendanceChangeEvent.emit(n)}getDate(){let n=new Date;return`${this.days[n.getDay()]} ${n.getDate()} ${this.months[n.getMonth()]} ${n.getFullYear()}`}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=E({type:t,selectors:[["child-display"]],inputs:{childSignal:[1,"childSignal"]},outputs:{childSignal:"childSignalChange",attendanceChangeEvent:"attendanceChangeEvent"},decls:6,vars:2,consts:[[1,"columnise"],[1,"rowise"],[3,"attendanceChangeEvent","childSignal"]],template:function(e,i){e&1&&(_(0,"div",0)(1,"p"),N(2),y(),_(3,"div",1),N(4," N\xE4rvaro: "),_(5,"attendance-box",2),H("attendanceChangeEvent",function(o){return i.wsUpdateAttendance(o)}),y()()()),e&2&&(w(2),Oe(i.getDate()),w(3),ne("childSignal",i.childSignal()))},dependencies:[ba],styles:[".columnise[_ngcontent-%COMP%]{font:var(--mat-sys-label-large);display:flex;flex-direction:column;padding-left:16px}.rowise[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:baseline}"]})};var Kx=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=V({type:t});static \u0275inj=P({imports:[ge]})}return t})();var F1=["*"];var P1=["unscopedContent"],L1=["text"],j1=[[["","matListItemAvatar",""],["","matListItemIcon",""]],[["","matListItemTitle",""]],[["","matListItemLine",""]],"*",[["","matListItemMeta",""]],[["mat-divider"]]],B1=["[matListItemAvatar],[matListItemIcon]","[matListItemTitle]","[matListItemLine]","*","[matListItemMeta]","mat-divider"];var V1=new g("ListOption"),Nb=(()=>{class t{_elementRef=d(F);constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275dir=S({type:t,selectors:[["","matListItemTitle",""]],hostAttrs:[1,"mat-mdc-list-item-title","mdc-list-item__primary-text"]})}return t})(),H1=(()=>{class t{_elementRef=d(F);constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275dir=S({type:t,selectors:[["","matListItemLine",""]],hostAttrs:[1,"mat-mdc-list-item-line","mdc-list-item__secondary-text"]})}return t})(),Ob=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=S({type:t,selectors:[["","matListItemMeta",""]],hostAttrs:[1,"mat-mdc-list-item-meta","mdc-list-item__end"]})}return t})(),Xx=(()=>{class t{_listOption=d(V1,{optional:!0});constructor(){}_isAlignedAtStart(){return!this._listOption||this._listOption?._getTogglePosition()==="after"}static \u0275fac=function(i){return new(i||t)};static \u0275dir=S({type:t,hostVars:4,hostBindings:function(i,r){i&2&&W("mdc-list-item__start",r._isAlignedAtStart())("mdc-list-item__end",!r._isAlignedAtStart())}})}return t})(),U1=(()=>{class t extends Xx{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Re(t)))(r||t)}})();static \u0275dir=S({type:t,selectors:[["","matListItemAvatar",""]],hostAttrs:[1,"mat-mdc-list-item-avatar"],features:[me]})}return t})(),z1=(()=>{class t extends Xx{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Re(t)))(r||t)}})();static \u0275dir=S({type:t,selectors:[["","matListItemIcon",""]],hostAttrs:[1,"mat-mdc-list-item-icon"],features:[me]})}return t})(),$1=new g("MAT_LIST_CONFIG"),Rb=(()=>{class t{_isNonInteractive=!0;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=Rt(e)}_disableRipple=!1;get disabled(){return this._disabled()}set disabled(e){this._disabled.set(Rt(e))}_disabled=B(!1);_defaultOptions=d($1,{optional:!0});static \u0275fac=function(i){return new(i||t)};static \u0275dir=S({type:t,hostVars:1,hostBindings:function(i,r){i&2&&oe("aria-disabled",r.disabled)},inputs:{disableRipple:"disableRipple",disabled:"disabled"}})}return t})(),W1=(()=>{class t{_elementRef=d(F);_ngZone=d(k);_listBase=d(Rb,{optional:!0});_platform=d(de);_hostElement;_isButtonElement;_noopAnimations=Xe();_avatars;_icons;set lines(e){this._explicitLines=qn(e,null),this._updateItemLines(!1)}_explicitLines=null;get disableRipple(){return this.disabled||this._disableRipple||this._noopAnimations||!!this._listBase?.disableRipple}set disableRipple(e){this._disableRipple=Rt(e)}_disableRipple=!1;get disabled(){return this._disabled()||!!this._listBase?.disabled}set disabled(e){this._disabled.set(Rt(e))}_disabled=B(!1);_subscriptions=new se;_rippleRenderer=null;_hasUnscopedTextContent=!1;rippleConfig;get rippleDisabled(){return this.disableRipple||!!this.rippleConfig.disabled}constructor(){d(at).load(qi);let e=d(Jo,{optional:!0});this.rippleConfig=e||{},this._hostElement=this._elementRef.nativeElement,this._isButtonElement=this._hostElement.nodeName.toLowerCase()==="button",this._listBase&&!this._listBase._isNonInteractive&&this._initInteractiveListItem(),this._isButtonElement&&!this._hostElement.hasAttribute("type")&&this._hostElement.setAttribute("type","button")}ngAfterViewInit(){this._monitorProjectedLinesAndTitle(),this._updateItemLines(!0)}ngOnDestroy(){this._subscriptions.unsubscribe(),this._rippleRenderer!==null&&this._rippleRenderer._removeTriggerEvents()}_hasIconOrAvatar(){return!!(this._avatars.length||this._icons.length)}_initInteractiveListItem(){this._hostElement.classList.add("mat-mdc-list-item-interactive"),this._rippleRenderer=new Ur(this,this._ngZone,this._hostElement,this._platform,d(q)),this._rippleRenderer.setupTriggerEvents(this._hostElement)}_monitorProjectedLinesAndTitle(){this._ngZone.runOutsideAngular(()=>{this._subscriptions.add(mn(this._lines.changes,this._titles.changes).subscribe(()=>this._updateItemLines(!1)))})}_updateItemLines(e){if(!this._lines||!this._titles||!this._unscopedContent)return;e&&this._checkDomForUnscopedTextContent();let i=this._explicitLines??this._inferLinesFromContent(),r=this._unscopedContent.nativeElement;if(this._hostElement.classList.toggle("mat-mdc-list-item-single-line",i<=1),this._hostElement.classList.toggle("mdc-list-item--with-one-line",i<=1),this._hostElement.classList.toggle("mdc-list-item--with-two-lines",i===2),this._hostElement.classList.toggle("mdc-list-item--with-three-lines",i===3),this._hasUnscopedTextContent){let o=this._titles.length===0&&i===1;r.classList.toggle("mdc-list-item__primary-text",o),r.classList.toggle("mdc-list-item__secondary-text",!o)}else r.classList.remove("mdc-list-item__primary-text"),r.classList.remove("mdc-list-item__secondary-text")}_inferLinesFromContent(){let e=this._titles.length+this._lines.length;return this._hasUnscopedTextContent&&(e+=1),e}_checkDomForUnscopedTextContent(){this._hasUnscopedTextContent=Array.from(this._unscopedContent.nativeElement.childNodes).filter(e=>e.nodeType!==e.COMMENT_NODE).some(e=>!!(e.textContent&&e.textContent.trim()))}static \u0275fac=function(i){return new(i||t)};static \u0275dir=S({type:t,contentQueries:function(i,r,o){if(i&1&&kt(o,U1,4)(o,z1,4),i&2){let a;z(a=$())&&(r._avatars=a),z(a=$())&&(r._icons=a)}},hostVars:4,hostBindings:function(i,r){i&2&&(oe("aria-disabled",r.disabled)("disabled",r._isButtonElement&&r.disabled||null),W("mdc-list-item--disabled",r.disabled))},inputs:{lines:"lines",disableRipple:"disableRipple",disabled:"disabled"}})}return t})();var Jx=(()=>{class t extends Rb{_isNonInteractive=!1;static \u0275fac=(()=>{let e;return function(r){return(e||(e=Re(t)))(r||t)}})();static \u0275cmp=E({type:t,selectors:[["mat-action-list"]],hostAttrs:["role","group",1,"mat-mdc-action-list","mat-mdc-list-base","mdc-list"],exportAs:["matActionList"],features:[ke([{provide:Rb,useExisting:t}]),me],ngContentSelectors:F1,decls:1,vars:0,template:function(i,r){i&1&&(xe(),K(0))},styles:[`.mdc-list {
  margin: 0;
  padding: 8px 0;
  list-style-type: none;
}
.mdc-list:focus {
  outline: none;
}

.mdc-list-item {
  display: flex;
  position: relative;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  align-items: stretch;
  cursor: pointer;
  padding-left: 16px;
  padding-right: 16px;
  background-color: var(--mat-list-list-item-container-color, transparent);
  border-radius: var(--mat-list-list-item-container-shape, var(--mat-sys-corner-none));
}
.mdc-list-item.mdc-list-item--selected {
  background-color: var(--mat-list-list-item-selected-container-color);
}
.mdc-list-item:focus {
  outline: 0;
}
.mdc-list-item.mdc-list-item--disabled {
  cursor: auto;
}
.mdc-list-item.mdc-list-item--with-one-line {
  height: var(--mat-list-list-item-one-line-container-height, 48px);
}
.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__start {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__end {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-two-lines {
  height: var(--mat-list-list-item-two-line-container-height, 64px);
}
.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__end {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-three-lines {
  height: var(--mat-list-list-item-three-line-container-height, 88px);
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--selected::before, .mdc-list-item.mdc-list-item--selected:focus::before, .mdc-list-item:not(.mdc-list-item--selected):focus::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  content: "";
  pointer-events: none;
}

a.mdc-list-item {
  color: inherit;
  text-decoration: none;
}

.mdc-list-item__start {
  fill: currentColor;
  flex-shrink: 0;
  pointer-events: none;
}
.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--mat-list-list-item-leading-icon-color, var(--mat-sys-on-surface-variant));
  width: var(--mat-list-list-item-leading-icon-size, 24px);
  height: var(--mat-list-list-item-leading-icon-size, 24px);
  margin-left: 16px;
  margin-right: 32px;
}
[dir=rtl] .mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-left: 32px;
  margin-right: 16px;
}
.mdc-list-item--with-leading-icon:hover .mdc-list-item__start {
  color: var(--mat-list-list-item-hover-leading-icon-color);
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start {
  width: var(--mat-list-list-item-leading-avatar-size, 40px);
  height: var(--mat-list-list-item-leading-avatar-size, 40px);
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50%;
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start, [dir=rtl] .mdc-list-item--with-leading-avatar .mdc-list-item__start {
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50%;
}

.mdc-list-item__end {
  flex-shrink: 0;
  pointer-events: none;
}
.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  font-family: var(--mat-list-list-item-trailing-supporting-text-font, var(--mat-sys-label-small-font));
  line-height: var(--mat-list-list-item-trailing-supporting-text-line-height, var(--mat-sys-label-small-line-height));
  font-size: var(--mat-list-list-item-trailing-supporting-text-size, var(--mat-sys-label-small-size));
  font-weight: var(--mat-list-list-item-trailing-supporting-text-weight, var(--mat-sys-label-small-weight));
  letter-spacing: var(--mat-list-list-item-trailing-supporting-text-tracking, var(--mat-sys-label-small-tracking));
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-trailing-icon-color, var(--mat-sys-on-surface-variant));
  width: var(--mat-list-list-item-trailing-icon-size, 24px);
  height: var(--mat-list-list-item-trailing-icon-size, 24px);
}
.mdc-list-item--with-trailing-icon:hover .mdc-list-item__end {
  color: var(--mat-list-list-item-hover-trailing-icon-color);
}
.mdc-list-item.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  color: var(--mat-list-list-item-trailing-supporting-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-list-item--selected.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-selected-trailing-icon-color, var(--mat-sys-primary));
}

.mdc-list-item__content {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  align-self: center;
  flex: 1;
  pointer-events: none;
}
.mdc-list-item--with-two-lines .mdc-list-item__content, .mdc-list-item--with-three-lines .mdc-list-item__content {
  align-self: stretch;
}

.mdc-list-item__primary-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: var(--mat-list-list-item-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-list-list-item-label-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-list-list-item-label-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-list-list-item-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-list-list-item-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-list-list-item-label-text-tracking, var(--mat-sys-body-large-tracking));
}
.mdc-list-item:hover .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-hover-label-text-color, var(--mat-sys-on-surface));
}
.mdc-list-item:focus .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-focus-label-text-color, var(--mat-sys-on-surface));
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text, .mdc-list-item--with-three-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 28px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}

.mdc-list-item__secondary-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  display: block;
  margin-top: 0;
  color: var(--mat-list-list-item-supporting-text-color, var(--mat-sys-on-surface-variant));
  font-family: var(--mat-list-list-item-supporting-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-list-list-item-supporting-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-list-list-item-supporting-text-size, var(--mat-sys-body-medium-size));
  font-weight: var(--mat-list-list-item-supporting-text-weight, var(--mat-sys-body-medium-weight));
  letter-spacing: var(--mat-list-list-item-supporting-text-tracking, var(--mat-sys-body-medium-tracking));
}
.mdc-list-item__secondary-text::before {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-three-lines .mdc-list-item__secondary-text {
  white-space: normal;
  line-height: 20px;
}
.mdc-list-item--with-overline .mdc-list-item__secondary-text {
  white-space: nowrap;
  line-height: auto;
}

.mdc-list-item--with-leading-radio.mdc-list-item,
.mdc-list-item--with-leading-checkbox.mdc-list-item,
.mdc-list-item--with-leading-icon.mdc-list-item,
.mdc-list-item--with-leading-avatar.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
[dir=rtl] .mdc-list-item--with-leading-radio.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-checkbox.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-icon.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-avatar.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  display: block;
  margin-top: 0;
  line-height: normal;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}

.mdc-list-item--with-trailing-icon.mdc-list-item, [dir=rtl] .mdc-list-item--with-trailing-icon.mdc-list-item {
  padding-left: 0;
  padding-right: 0;
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 16px;
}

.mdc-list-item--with-trailing-meta.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-meta.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  -webkit-user-select: none;
  user-select: none;
  margin-left: 28px;
  margin-right: 16px;
}
[dir=rtl] .mdc-list-item--with-trailing-meta .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 28px;
}
.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end {
  display: block;
  line-height: normal;
  align-self: flex-start;
  margin-top: 0;
}
.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end::before, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end::before {
  display: inline-block;
  width: 0;
  height: 28px;
  content: "";
  vertical-align: 0;
}

.mdc-list-item--with-leading-radio .mdc-list-item__start,
.mdc-list-item--with-leading-checkbox .mdc-list-item__start {
  margin-left: 8px;
  margin-right: 24px;
}
[dir=rtl] .mdc-list-item--with-leading-radio .mdc-list-item__start,
[dir=rtl] .mdc-list-item--with-leading-checkbox .mdc-list-item__start {
  margin-left: 24px;
  margin-right: 8px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__start,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 8px;
}

.mdc-list-item--with-trailing-radio.mdc-list-item,
.mdc-list-item--with-trailing-checkbox.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
.mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {
  padding-left: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, [dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {
  padding-right: 0;
}
.mdc-list-item--with-trailing-radio .mdc-list-item__end,
.mdc-list-item--with-trailing-checkbox .mdc-list-item__end {
  margin-left: 24px;
  margin-right: 8px;
}
[dir=rtl] .mdc-list-item--with-trailing-radio .mdc-list-item__end,
[dir=rtl] .mdc-list-item--with-trailing-checkbox .mdc-list-item__end {
  margin-left: 8px;
  margin-right: 24px;
}
.mdc-list-item--with-trailing-radio.mdc-list-item--with-three-lines .mdc-list-item__end,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 8px;
}

.mdc-list-group__subheader {
  margin: 0.75rem 16px;
}

.mdc-list-item--disabled .mdc-list-item__start,
.mdc-list-item--disabled .mdc-list-item__content,
.mdc-list-item--disabled .mdc-list-item__end {
  opacity: 1;
}
.mdc-list-item--disabled .mdc-list-item__primary-text,
.mdc-list-item--disabled .mdc-list-item__secondary-text {
  opacity: var(--mat-list-list-item-disabled-label-text-opacity, 0.3);
}
.mdc-list-item--disabled.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--mat-list-list-item-disabled-leading-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-leading-icon-opacity, 0.38);
}
.mdc-list-item--disabled.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-disabled-trailing-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-trailing-icon-opacity, 0.38);
}

.mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing, [dir=rtl] .mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing {
  padding-left: 0;
  padding-right: 0;
}

.mdc-list-item.mdc-list-item--disabled .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-disabled-label-text-color, var(--mat-sys-on-surface));
}

.mdc-list-item:hover::before {
  background-color: var(--mat-list-list-item-hover-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}

.mdc-list-item.mdc-list-item--disabled::before {
  background-color: var(--mat-list-list-item-disabled-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-list-item:focus::before {
  background-color: var(--mat-list-list-item-focus-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-list-item--disabled .mdc-radio,
.mdc-list-item--disabled .mdc-checkbox {
  opacity: var(--mat-list-list-item-disabled-label-text-opacity, 0.3);
}

.mdc-list-item--with-leading-avatar .mat-mdc-list-item-avatar {
  border-radius: var(--mat-list-list-item-leading-avatar-shape, var(--mat-sys-corner-full));
  background-color: var(--mat-list-list-item-leading-avatar-color, var(--mat-sys-primary-container));
}

.mat-mdc-list-item-icon {
  font-size: var(--mat-list-list-item-leading-icon-size, 24px);
}

@media (forced-colors: active) {
  a.mdc-list-item--activated::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  a.mdc-list-item--activated [dir=rtl]::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-list-base {
  display: block;
}
.mat-mdc-list-base .mdc-list-item__start,
.mat-mdc-list-base .mdc-list-item__end,
.mat-mdc-list-base .mdc-list-item__content {
  pointer-events: auto;
}

.mat-mdc-list-item,
.mat-mdc-list-option {
  width: 100%;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-list-item:not(.mat-mdc-list-item-interactive),
.mat-mdc-list-option:not(.mat-mdc-list-item-interactive) {
  cursor: default;
}
.mat-mdc-list-item .mat-divider-inset,
.mat-mdc-list-option .mat-divider-inset {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}
.mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,
.mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {
  margin-left: 72px;
}
[dir=rtl] .mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,
[dir=rtl] .mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {
  margin-right: 72px;
}

.mat-mdc-list-item-interactive::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  content: "";
  opacity: 0;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-list-item > .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-list-item:focus-visible > .mat-focus-indicator::before {
  content: "";
}

.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-line.mdc-list-item__secondary-text {
  white-space: nowrap;
  line-height: normal;
}
.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-unscoped-content.mdc-list-item__secondary-text {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

mat-action-list button {
  background: none;
  color: inherit;
  border: none;
  font: inherit;
  outline: inherit;
  -webkit-tap-highlight-color: transparent;
  text-align: start;
}
mat-action-list button::-moz-focus-inner {
  border: 0;
}

.mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-inline-start: var(--mat-list-list-item-leading-icon-start-space, 16px);
  margin-inline-end: var(--mat-list-list-item-leading-icon-end-space, 16px);
}

.mat-mdc-nav-list .mat-mdc-list-item {
  border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));
  --mat-focus-indicator-border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));
}
.mat-mdc-nav-list .mat-mdc-list-item.mdc-list-item--activated {
  background-color: var(--mat-list-active-indicator-color, var(--mat-sys-secondary-container));
}
`],encapsulation:2,changeDetection:0})}return t})();var eE=(()=>{class t extends W1{_lines;_titles;_meta;_unscopedContent;_itemText;get activated(){return this._activated}set activated(e){this._activated=Rt(e)}_activated=!1;_getAriaCurrent(){return this._hostElement.nodeName==="A"&&this._activated?"page":null}_hasBothLeadingAndTrailing(){return this._meta.length!==0&&(this._avatars.length!==0||this._icons.length!==0)}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Re(t)))(r||t)}})();static \u0275cmp=E({type:t,selectors:[["mat-list-item"],["a","mat-list-item",""],["button","mat-list-item",""]],contentQueries:function(i,r,o){if(i&1&&kt(o,H1,5)(o,Nb,5)(o,Ob,5),i&2){let a;z(a=$())&&(r._lines=a),z(a=$())&&(r._titles=a),z(a=$())&&(r._meta=a)}},viewQuery:function(i,r){if(i&1&&rt(P1,5)(L1,5),i&2){let o;z(o=$())&&(r._unscopedContent=o.first),z(o=$())&&(r._itemText=o.first)}},hostAttrs:[1,"mat-mdc-list-item","mdc-list-item"],hostVars:13,hostBindings:function(i,r){i&2&&(oe("aria-current",r._getAriaCurrent()),W("mdc-list-item--activated",r.activated)("mdc-list-item--with-leading-avatar",r._avatars.length!==0)("mdc-list-item--with-leading-icon",r._icons.length!==0)("mdc-list-item--with-trailing-meta",r._meta.length!==0)("mat-mdc-list-item-both-leading-and-trailing",r._hasBothLeadingAndTrailing())("_mat-animation-noopable",r._noopAnimations))},inputs:{activated:"activated"},exportAs:["matListItem"],features:[me],ngContentSelectors:B1,decls:10,vars:0,consts:[["unscopedContent",""],[1,"mdc-list-item__content"],[1,"mat-mdc-list-item-unscoped-content",3,"cdkObserveContent"],[1,"mat-focus-indicator"]],template:function(i,r){i&1&&(xe(j1),K(0),_(1,"span",1),K(2,1),K(3,2),_(4,"span",2,0),H("cdkObserveContent",function(){return r._updateItemLines(!0)}),K(6,3),y()(),K(7,4),K(8,5),le(9,"div",3))},dependencies:[gu],encapsulation:2,changeDetection:0})}return t})();var tE=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=V({type:t});static \u0275inj=P({imports:[Yo,Cu,Kx,ge,ua]})}return t})();var cf=class t{url=`${ft.apiUrl}/api/children/attendance`;urlPerGroup=`${ft.apiUrl}/api/children/attendance/group`;http=d(yt);getChildren(){return this.http.get(this.url)}getChildrenByGroup(n,e){let i=new Tt().set("groupId",n);return e&&(i=i.set("date",e)),this.http.get(this.urlPerGroup,{params:i})}static \u0275fac=function(e){return new(e||t)};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})};var q1=(t,n)=>n.id;function Z1(t,n){t&1&&le(0,"mat-divider")}function Q1(t,n){if(t&1){let e=rn();_(0,"button",5),H("click",function(){let r=tt(e).$implicit,o=ce();return nt(o.onSelectChild(r))}),_(1,"span",6),N(2),y(),_(3,"div",7),le(4,"attendance-box",8),y()(),he(5,Z1,1,0,"mat-divider")}if(t&2){let e=n.$implicit,i=n.$index,r=n.$count;w(2),Mr("",e.name," "),w(2),ne("disabled",!0)("childSignal",e),w(),pe(i!==r-1?5:-1)}}var va=class t{children=B([]);childSignal=Le.required();searchQuery=B("");groupSignal=Le.required();contentSignal=Le.required();searchedChildren=ot(()=>{let n=this.searchQuery();return this.children().filter(e=>e.name.toLowerCase().includes(n))});attendanceService=d(fa);childService=d(cf);constructor(){It(()=>{this.groupSignal().id!==0&&this.loadChildren()})}onSearchUpdated(n){this.searchQuery.set(n)}get isChecked(){return this.attendanceService.getSignal(this.childSignal().id,In())()??!1}onSelectChild(n){this.childSignal.set(n),this.contentSignal.set("childView")}loadChildren(){this.childService.getChildrenByGroup(this.groupSignal().id).subscribe({next:n=>{this.children.set(n)}})}handleWebsocketMessage(n){let e=this.children().find(r=>r.id===n.childId);if(!e){alert("Child not found");return}this.attendanceService.getSignal(e.id,In()).set(n.present)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=E({type:t,selectors:[["main-child-list"]],inputs:{childSignal:[1,"childSignal"],groupSignal:[1,"groupSignal"],contentSignal:[1,"contentSignal"]},outputs:{childSignal:"childSignalChange",groupSignal:"groupSignalChange",contentSignal:"contentSignalChange"},decls:11,vars:0,consts:[["searchQuery",""],[1,"child-list-container"],["subscriptSizing","dynamic"],["matInput","","type","search",3,"input"],[1,"list-class"],["mat-list-item","",3,"click"],["matListItemTitle",""],["matListItemMeta","",1,"meta-container"],[3,"disabled","childSignal"]],template:function(e,i){if(e&1){let r=rn();_(0,"div",1)(1,"mat-form-field",2)(2,"mat-label")(3,"mat-icon"),N(4,"search"),y(),N(5,"S\xF6k"),y(),_(6,"input",3,0),H("input",function(){tt(r);let a=on(7);return nt(i.onSearchUpdated(a.value.toLowerCase()))}),y()(),_(8,"mat-action-list",4),Li(9,Q1,6,4,null,null,q1),y()()}e&2&&(w(9),ji(i.searchedChildren()))},dependencies:[tE,Jx,eE,yb,Nb,Ob,kg,ua,ba,$r,Zi,zr,Wu,aa,na,ta],styles:["[_nghost-%COMP%]{background-color:var(--mat-sys-primary-container);width:100%;border:1px solid var(--mat-sys-outline-variant);color:var(--mat-sys-on-primary-container);box-sizing:border-box;border-radius:5px;flex:1;display:flex;flex-direction:column;min-height:0;height:100%}.mat-mdc-action-list[_ngcontent-%COMP%]{padding:0;border-radius:5px;height:100%}.mdc-list-item[_ngcontent-%COMP%]{color:var(--mat-sys-on-primary-container);background-color:var(--mat-sys-primary-container);box-shadow:var(--mat-sys-level1)}.child-list-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%}.list-class[_ngcontent-%COMP%]{flex:1;overflow-y:auto}mat-form-field[_ngcontent-%COMP%]{width:100%}"]})};var _a=class t{socket=null;messages=new x;roomName="";connect(n,e){let i=sessionStorage.getItem("token");this.socket=new WebSocket(`${n}?token=${i}`),this.roomName=e,this.socket.onopen=()=>{this.socket?.send(JSON.stringify({type:"subscribe",room:this.roomName}))},this.socket.onmessage=r=>{let o=JSON.parse(r.data);this.messages.next(o)}}disconnect(){this.socket&&(this.socket?.send(JSON.stringify({type:"unsubscribe",room:this.roomName})),this.socket.close(),this.socket=null)}changeRoom(n){this.socket?.send(JSON.stringify({type:"unsubscribe",room:this.roomName})),this.socket?.send(JSON.stringify({type:"subscribe",room:n})),this.roomName=n}sendMessage(n,e){let i=JSON.stringify(v({type:n,room:this.roomName},e));this.socket?.send(i)}sendAttendanceUpdate(n){this.sendMessage("ATTENDANCE",n)}sendJournalUpdate(n){this.sendMessage("DOC_OPERATION",n)}getMessages(){return this.messages.asObservable()}static \u0275fac=function(e){return new(e||t)};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})};var lf=class{getDiff(n,e,i){let r=n.length-e.length,o=this.surroundingMatch(n,e,i,r)?r>0?"DELETE":"INSERT":"REPLACEMENT",a={operation:o,idx:i,value:"",length:0};switch(o){case"DELETE":a.length=r;break;case"INSERT":a.idx=i+r,a.value=e.substring(i+r,i);break;case"REPLACEMENT":{let s=this.findFirstDiff(n,e),c=this.findLastDiff(n,e);switch(c){case"prevOutOfBounds":a.idx=0,a.value=e.substring(0,0-r),a.operation="INSERT";break;case"newOutOfBounds":a.idx=0,a.length=r,a.operation="DELETE";break;default:a.value=e.substring(s,c),a.length=r+a.value.length,a.idx=s;break}}}return a}surroundingMatch(n,e,i,r){switch(r<0){case!0:return n.substring(0,i+r)===e.substring(0,i+r)&&n.substring(i+r)===e.substring(i);case!1:return n.substring(0,i)===e.substring(0,i)&&n.substring(i+r)===e.substring(i)}}findFirstDiff(n,e){let i=0;for(;;)if(n.charAt(i)===e.charAt(i))i++;else return i}findLastDiff(n,e){let i=1;for(;;){if(i>n.length)return"prevOutOfBounds";if(i>e.length)return"newOutOfBounds";if(n.charAt(n.length-i)===e.charAt(e.length-i))i++;else return e.length-i+1}}};var df=class{transformClient(n,e){switch(n.type){case"INSERT":return this.transformInsert(n,e);case"DELETE":return this.transformDelete(n,e)}}transformInsert(n,e){let i=n;switch(e.type){case"INSERT":e.position<=n.position&&(i.position+=e.text.length);break;case"DELETE":e.position<n.position&&(i.position=Math.max(e.position,i.position-=e.length));break}return i}transformDelete(n,e){let i=n;switch(e.type){case"INSERT":e.position<=i.position?i.position+=e.text.length:e.position<i.position+i.length&&(i.length+=e.text.length);break;case"DELETE":let r=e.position+e.length;if(r<=i.position)i.position-=e.length;else if(!(e.position>=i.position+i.length)){let o=Math.max(i.position,e.position),a=Math.min(i.position+i.length,r);i.length=Math.max(0,i.length-(a-o)),i.position=Math.min(i.position,e.position)}break}return i}};var uf=class t{baseUrl=`${ft.apiUrl}/api/journal`;http=d(yt);getJournal(n,e,i){let r=new Tt;if(i==="childView")r=r.set("childId",n);else if(i==="groupView")r=r.set("groupId",e);else return console.error(`Attempted to fetch journal with unknown view: ${i}`),sr(()=>new Error("Invalid view type provided to JournalService"));return this.http.get(this.baseUrl,{params:r})}static \u0275fac=function(e){return new(e||t)};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})};var Y1=["journalContent"],ff=class t{initialized=!1;journalSocket=new _a;differ=new lf;operationalTransformer=new df;journalService=d(uf);textArea=wn.required("journalContent");childSignal=Le.required();contentSignal=Le.required();groupSignal=Le.required();reportTitle=ot(()=>{switch(this.contentSignal()){case"childView":return this.childSignal().name+"s dagsrapport";case"groupView":return this.groupSignal().name+"s dagsrapport";default:return"ERROR"}});constructor(){this.journalSocket.getMessages().subscribe(n=>{let e=n,i=e.operation;if(this.isMyOwnAck(e))this.inFlight.shift();else{for(let r of this.inFlight)i=this.operationalTransformer.transformClient(i,r);this.applyToLocalContent(i)}this.serverRevision=e.serverRevision}),It(()=>{this.loadJournal();let n=this.getRoom();this.initialized?this.journalSocket.changeRoom(n):(this.journalSocket.connect(`${ft.wsUrl}/ws`,n),this.initialized=!0)})}text=B("");prevText="";serverRevision=0;sequence=0;inFlight=[];getRoom(){return this.contentSignal()==="childView"?"journal:child:"+this.childSignal().id+":"+In():"journal:group:"+this.groupSignal().id+":"+In()}isMyOwnAck(n){return n.userId.toString()===sessionStorage.getItem("UserId")&&this.inFlight.length>0}loadJournal(){this.journalService.getJournal(this.childSignal().id,this.groupSignal().id,this.contentSignal()).subscribe({next:n=>{this.text.set(n.content),this.serverRevision=n.serverRevision,this.sequence=0,this.inFlight=[]}})}applyToLocalContent(n){let e=n.position;switch(n.type){case"INSERT":this.textArea().nativeElement.setRangeText(n.text,e,e,"preserve");break;case"DELETE":this.textArea().nativeElement.setRangeText("",e,e+n.length,"preserve");break}this.text.set(this.textArea().nativeElement.value),this.prevText=this.text()}ngOnDestroy(){this.journalSocket.disconnect()}onInput(n){this.sequence++;let e=n.target,i=e.value;this.prevText=this.text();let r=e.selectionStart,o=this.differ.getDiff(this.prevText,i,r);this.text.set(i);let a;switch(o.operation){case"DELETE":a={type:"DELETE",position:o.idx,length:o.length};break;case"INSERT":a={type:"INSERT",position:o.idx,text:o.value};break;case"REPLACEMENT":a={type:"DELETE",position:o.idx,length:o.length},this.sendOperation(a),this.sequence++,a={type:"INSERT",position:o.idx,text:o.value};break}this.sendOperation(a)}sendOperation(n){let e={clientRevision:this.serverRevision,operation:n,sequence:this.sequence};this.inFlight.push(n),this.journalSocket.sendJournalUpdate(e)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=E({type:t,selectors:[["main-live-journal"]],viewQuery:function(e,i){e&1&&Un(i.textArea,Y1,5),e&2&&zn()},inputs:{childSignal:[1,"childSignal"],contentSignal:[1,"contentSignal"],groupSignal:[1,"groupSignal"]},outputs:{childSignal:"childSignalChange",contentSignal:"contentSignalChange",groupSignal:"groupSignalChange"},decls:6,vars:3,consts:[["journalContent",""],["mat-stretch-tabs","false","mat-align-tabs","start"],[3,"label"],["matInput","",3,"input","ngModel"],["label","Historik",1,"main-journal-historik"]],template:function(e,i){e&1&&(_(0,"mat-tab-group",1)(1,"mat-tab",2)(2,"mat-form-field")(3,"textarea",3,0),H("input",function(o){return i.onInput(o)}),y()()(),le(5,"mat-tab",4),y()),e&2&&(w(),ne("label",ps(i.reportTitle())),w(2),ne("ngModel",i.text()))},dependencies:[Zi,aa,la,Zr,zu,oa,Vu,nc],styles:["mat-tab-group[_ngcontent-%COMP%]{height:100%}mat-tab-group[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{height:100%}mat-mdc-tab-body-wrapper[_ngcontent-%COMP%]{height:100%}  .mat-mdc-form-field-flex{height:100%}  .mat-mdc-form-field-infix{height:100%}mat-form-field[_ngcontent-%COMP%]{width:100%;box-sizing:border-box;height:100%}textarea[_ngcontent-%COMP%]{width:100%;height:100%!important;min-height:20vh;margin-bottom:1em;padding:0;box-sizing:content-box;resize:none;overflow-y:scroll}"]})};var mf=class t{url=`${ft.apiUrl}/api/user/teacher`;http=d(yt);getUser(n){let e=new Tt().set("teacherId",n);return this.http.get(this.url,{params:e})}static \u0275fac=function(e){return new(e||t)};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})};var hf=class t{userService=d(mf);currentUser=this.userService.getUser(Number(sessionStorage.getItem("UserId")));static \u0275fac=function(e){return new(e||t)};static \u0275cmp=E({type:t,selectors:[["account-page"]],decls:27,vars:9,consts:[["appearance","outlined"],["mat-card-avatar","",1,"icon-display"]],template:function(e,i){if(e&1&&(_(0,"mat-card",0)(1,"mat-card-header")(2,"div",1)(3,"mat-icon"),N(4,"person"),y()(),_(5,"mat-card-title"),N(6),gs(7,"async"),y(),_(8,"mat-card-subtitle"),N(9),gs(10,"async"),y()(),_(11,"mat-card-content")(12,"p"),N(13),gs(14,"async"),y(),_(15,"p"),N(16,"Exempeltext"),y(),_(17,"p"),N(18,"Exempeltext"),y(),_(19,"p"),N(20,"Exempeltext"),y(),_(21,"p"),N(22,"Exempeltext"),y(),_(23,"p"),N(24,"Exempeltext"),y(),_(25,"p"),N(26,"Exempeltext"),y()()()),e&2){let r,o,a;w(6),Oe((r=bs(7,3,i.currentUser))==null?null:r.name),w(3),Oe((o=bs(10,5,i.currentUser))==null?null:o.role),w(4),Mr("Mejladress: ",(a=bs(14,7,i.currentUser))==null?null:a.email)}},dependencies:[$C,zi,zC,$i,Wi,UC,uu,na,ta,kp],styles:[".icon-display[_ngcontent-%COMP%]{transform:scale(2);display:flex;align-items:center;justify-content:center;overflow:hidden}p[_ngcontent-%COMP%]{font:var(--mat-sys-body-large)}"]})};function K1(t,n){if(t&1){let e=rn();_(0,"mat-card-header")(1,"span",4),N(2),y()(),_(3,"div",5)(4,"child-display",6),H("attendanceChangeEvent",function(r){tt(e);let o=ce();return nt(o.wsUpdateAttendance(r))}),_t("childSignalChange",function(r){tt(e);let o=ce();return Fe(o.childSignal,r)||(o.childSignal=r),nt(r)}),y()(),le(5,"main-live-journal",7)}if(t&2){let e=ce();w(2),Oe(e.childSignal().name),w(2),vt("childSignal",e.childSignal),w(),ne("childSignal",e.childSignal())("groupSignal",e.groupSignal())("contentSignal",e.contentSignal())}}function X1(t,n){if(t&1&&(_(0,"mat-card-header")(1,"span",4),N(2),y()(),le(3,"main-live-journal",7)),t&2){let e=ce();w(2),Oe(e.groupSignal().name),w(),ne("childSignal",e.childSignal())("groupSignal",e.groupSignal())("contentSignal",e.contentSignal())}}function J1(t,n){t&1&&le(0,"account-page")}function eP(t,n){t&1&&(_(0,"h1"),N(1,"Den \xE4r tom"),y())}var ya=class t{childSignal=B({name:"",id:0,date:"",present:!1});groupSignal=Le.required();contentSignal=Le.required();childList=wn.required(va);handleWebsocketMessage(n){this.childList().handleWebsocketMessage(n)}attendanceChangeEvent=new R;wsUpdateAttendance(n){this.attendanceChangeEvent.emit(n)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=E({type:t,selectors:[["main-panel"]],viewQuery:function(e,i){e&1&&Un(i.childList,va,5),e&2&&zn()},inputs:{groupSignal:[1,"groupSignal"],contentSignal:[1,"contentSignal"]},outputs:{groupSignal:"groupSignalChange",contentSignal:"contentSignalChange",attendanceChangeEvent:"attendanceChangeEvent"},decls:9,vars:7,consts:[[1,"main-card-content"],[1,"main-card-left"],[1,"main-card-right"],[3,"childSignalChange","groupSignalChange","contentSignalChange","childSignal","groupSignal","contentSignal"],[1,"dagens-datumn"],[1,"childDisplay"],[3,"attendanceChangeEvent","childSignalChange","childSignal"],[3,"childSignal","groupSignal","contentSignal"]],template:function(e,i){e&1&&(_(0,"mat-card")(1,"mat-card-content",0)(2,"div",1),he(3,K1,6,5),he(4,X1,4,4),he(5,J1,1,0,"account-page"),he(6,eP,2,0,"h1"),y(),_(7,"div",2)(8,"main-child-list",3),_t("childSignalChange",function(o){return Fe(i.childSignal,o)||(i.childSignal=o),o})("groupSignalChange",function(o){return Fe(i.groupSignal,o)||(i.groupSignal=o),o})("contentSignalChange",function(o){return Fe(i.contentSignal,o)||(i.contentSignal=o),o}),y()()()()),e&2&&(w(3),pe(i.contentSignal()==="childView"?3:-1),w(),pe(i.contentSignal()==="groupView"?4:-1),w(),pe(i.contentSignal()==="teacherView"?5:-1),w(),pe(i.contentSignal()===""?6:-1),w(2),vt("childSignal",i.childSignal)("groupSignal",i.groupSignal)("contentSignal",i.contentSignal))},dependencies:[va,ua,sf,zi,Wi,$i,ff,hf],styles:["[_nghost-%COMP%]{display:block;margin:0 auto;border-radius:12px;box-sizing:border-box;width:100%;height:100%}mat-card-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font:var(--mat-sys-headline-medium)}h2[_ngcontent-%COMP%]{margin-bottom:16px}mat-card[_ngcontent-%COMP%]{width:100%;height:100%}.main-card-content[_ngcontent-%COMP%]{display:flex;flex-direction:row;box-sizing:border-box;height:100%}.main-card-left[_ngcontent-%COMP%]{width:100%;height:100%;padding-right:5%;overflow-y:hidden;display:flex;flex-direction:column;flex:1.5}.main-card-right[_ngcontent-%COMP%]{width:100%;height:100%;overflow-y:hidden;min-width:fit-content;overflow-x:auto;display:flex;flex:1;min-width:30%}mat-card-header[_ngcontent-%COMP%]{flex:.5}.childDisplay[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex:.9;background-color:var(--mat-sys-primary-container);color:var(--mat-sys-on-primary-container);border-radius:12px;height:auto;flex:1}main-live-journal[_ngcontent-%COMP%]{flex:4}.spacer[_ngcontent-%COMP%]{flex:1 1 auto}  .mat-mdc-form-field-subscript-wrapper{display:none}"]})};var tP=["*",[["mat-toolbar-row"]]],nP=["*","mat-toolbar-row"],iP=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=S({type:t,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return t})(),nE=(()=>{class t{_elementRef=d(F);_platform=d(de);_document=d(j);color;_toolbarRows;constructor(){}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=E({type:t,selectors:[["mat-toolbar"]],contentQueries:function(i,r,o){if(i&1&&kt(o,iP,5),i&2){let a;z(a=$())&&(r._toolbarRows=a)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(i,r){i&2&&(qt(r.color?"mat-"+r.color:""),W("mat-toolbar-multiple-rows",r._toolbarRows.length>0)("mat-toolbar-single-row",r._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:nP,decls:2,vars:0,template:function(i,r){i&1&&(xe(tP),K(0),K(1,1))},styles:[`.mat-toolbar {
  background: var(--mat-toolbar-container-background-color, var(--mat-sys-surface));
  color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}
.mat-toolbar, .mat-toolbar h1, .mat-toolbar h2, .mat-toolbar h3, .mat-toolbar h4, .mat-toolbar h5, .mat-toolbar h6 {
  font-family: var(--mat-toolbar-title-text-font, var(--mat-sys-title-large-font));
  font-size: var(--mat-toolbar-title-text-size, var(--mat-sys-title-large-size));
  line-height: var(--mat-toolbar-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-weight: var(--mat-toolbar-title-text-weight, var(--mat-sys-title-large-weight));
  letter-spacing: var(--mat-toolbar-title-text-tracking, var(--mat-sys-title-large-tracking));
  margin: 0;
}
@media (forced-colors: active) {
  .mat-toolbar {
    outline: solid 1px;
  }
}
.mat-toolbar .mat-form-field-underline,
.mat-toolbar .mat-form-field-ripple,
.mat-toolbar .mat-focused .mat-form-field-ripple {
  background-color: currentColor;
}
.mat-toolbar .mat-form-field-label,
.mat-toolbar .mat-focused .mat-form-field-label,
.mat-toolbar .mat-select-value,
.mat-toolbar .mat-select-arrow,
.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow {
  color: inherit;
}
.mat-toolbar .mat-input-element {
  caret-color: currentColor;
}
.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed {
  --mat-button-text-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
  --mat-button-outlined-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}

.mat-toolbar-row, .mat-toolbar-single-row {
  display: flex;
  box-sizing: border-box;
  padding: 0 16px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-row, .mat-toolbar-single-row {
    height: var(--mat-toolbar-mobile-height, 56px);
  }
}

.mat-toolbar-multiple-rows {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
  min-height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-multiple-rows {
    min-height: var(--mat-toolbar-mobile-height, 56px);
  }
}
`],encapsulation:2,changeDetection:0})}return t})();var iE=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=V({type:t});static \u0275inj=P({imports:[ge]})}return t})();var rE=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=V({type:t});static \u0275inj=P({imports:[rc,ge,rc]})}return t})();var pf=class t{url=`${ft.apiUrl}/api/group`;http=d(yt);getGroups(){return this.http.get(this.url)}static \u0275fac=function(e){return new(e||t)};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})};var oP=(t,n)=>n.id;function aP(t,n){if(t&1){let e=rn();_(0,"mat-tab",8)(1,"main-panel",9),H("attendanceChangeEvent",function(r){tt(e);let o=ce();return nt(o.wsUpdateAttendance(r))}),_t("contentSignalChange",function(r){tt(e);let o=ce();return Fe(o.contentSignal,r)||(o.contentSignal=r),nt(r)}),y()()}if(t&2){let e=n.$implicit,i=ce();ne("label",ps(e.name)),w(),ne("groupSignal",e),vt("contentSignal",i.contentSignal)}}var gf=class t{groupSignal=B({name:"",id:0});allGroups=B([]);contentSignal=B("");router=d(Lt);socketService=d(_a);groupService=d(pf);mainPanel=wn.required(ya);ngOnInit(){this.socketService.connect(`${ft.wsUrl}/ws`,"group=Nyckelpigorna"),this.loadGroups(),this.socketService.getMessages().subscribe(n=>{if(!("childId"in n)){console.error("Attendance message with incorrect body!");return}let e=n;this.handleWebsocketMessage(e)})}ngOnDestroy(){this.socketService.disconnect()}loadGroups(){this.groupService.getGroups().subscribe({next:n=>{this.allGroups.set(n),n.length>0&&this.groupSignal.set(n[0])}})}handleWebsocketMessage(n){this.mainPanel().handleWebsocketMessage(n)}wsUpdateAttendance(n){this.socketService.sendAttendanceUpdate(n)}onTabChange(n){let e=n.index,i=this.allGroups()[e];this.contentSignal.set("groupView"),this.groupSignal.set(i)}logout(){document.cookie='jwtToken=""',sessionStorage.removeItem("token"),sessionStorage.removeItem("userId"),this.router.navigateByUrl("/")}minaSidor(){this.contentSignal.set("teacherView")}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=E({type:t,selectors:[["main-page"]],viewQuery:function(e,i){e&1&&Un(i.mainPanel,ya,5),e&2&&zn()},decls:14,vars:1,consts:[[1,"main-nav"],["color","mat-sys-primary"],["matButton","tonal",1,"mina-sidor-button",3,"click"],[1,"example-spacer"],["matButton","tonal",1,"logout-button",3,"click"],[1,"main-body"],[1,"main-panel-container"],["mat-stretch-tabs","false","mat-align-tabs","start","dynamicHeight","",3,"selectedTabChange","preserveContent"],[3,"label"],[3,"attendanceChangeEvent","contentSignalChange","groupSignal","contentSignal"]],template:function(e,i){e&1&&(_(0,"div",0)(1,"mat-toolbar",1)(2,"span"),N(3,"K\xEEndGuard"),y(),_(4,"button",2),H("click",function(){return i.minaSidor()}),N(5,"Mina sidor"),y(),le(6,"span",3),_(7,"button",4),H("click",function(){return i.logout()}),N(8,"Logout"),y()()(),_(9,"div",5)(10,"div",6)(11,"mat-tab-group",7),H("selectedTabChange",function(o){return i.onTabChange(o)}),Li(12,aP,2,4,"mat-tab",8,oP),y()()()),e&2&&(w(11),ne("preserveContent",!0),w(),ji(i.allGroups()))},dependencies:[iE,nE,ya,rE,ea,Du,la,Zr],styles:["[_nghost-%COMP%]{background-color:var(--mat-sys-surface);width:100%;height:100%;display:flex}mat-toolbar[_ngcontent-%COMP%]{background:linear-gradient(90deg,var(--mat-sys-primary) 30%,var(--mat-sys-tertiary) 100%);color:var(--mat-sys-primary-on-surface);display:flex;align-items:center;position:fixed}mat-tab-group[_ngcontent-%COMP%]{height:100%}mat-tab[_ngcontent-%COMP%]{height:100%}.example-spacer[_ngcontent-%COMP%]{flex:1 1 auto}  .mat-mdc-tab{background-color:var(--mat-sys-surface-container);border-radius:5px;box-shadow:var(--mat-sys-level1)}  .mdc-tab--active{background-color:var(--mat-sys-surface-container);border-radius:5px;box-shadow:var(--mat-sys-level3)}  .mat-mdc-tab-body-wrapper{height:100%}.main-body[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:100%;width:100%}.main-panel-container[_ngcontent-%COMP%]{width:85%;height:80%}.mina-sidor-button[_ngcontent-%COMP%]{margin:2em}"]})};var Fb=async t=>{let n=t.url.join(""),e=d(Lt),r=await d(da).isAuthorized();switch(n){case"":return r?e.parseUrl("/app"):!0;case"app":return r?!0:e.parseUrl("/");default:return!1}};var bf=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=E({type:t,selectors:[["admin-page"]],decls:5,vars:0,consts:[[1,"container"]],template:function(e,i){e&1&&(_(0,"mat-card",0)(1,"mat-card-header"),N(2," H\xE4r \xE4r en header "),y(),_(3,"mat-card-content"),N(4," H\xE4r \xE4r content "),y()())},dependencies:[zi,Wi,$i],styles:["[_nghost-%COMP%]{display:flex;justify-content:center;align-items:center;width:100vw;height:100vh;overflow-y:scroll}.container[_ngcontent-%COMP%]{width:85%;height:80%;background-color:--var(mat-sys-surface-container)}"]})};var oE=[{canActivate:[Fb],path:"",component:Zu},{canActivate:[Fb],path:"app",component:gf},{path:"admin",component:bf}];var vf=class t{intercept(n,e){let i=sessionStorage.getItem("token");if(!i)return e.handle(n);let r=n.clone({setHeaders:G(v({},i?{Authorization:`Bearer ${i}`}:{}),{"ngrok-skip-browser-warning":"true"})});return e.handle(r)}static \u0275fac=function(e){return new(e||t)};static \u0275prov=p({token:t,factory:t.\u0275fac})};var aE={providers:[Wm(),Mg(oE),Zp(Qp()),{provide:Pd,useClass:vf,multi:!0}]};var _f=class t{title=B("frontend");static \u0275fac=function(e){return new(e||t)};static \u0275cmp=E({type:t,selectors:[["app-root"]],decls:1,vars:0,template:function(e,i){e&1&&le(0,"router-outlet")},dependencies:[js],encapsulation:2})};Vp(_f,aE).catch(t=>console.error(t));
