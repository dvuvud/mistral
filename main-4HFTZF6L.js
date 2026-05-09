var Yx=Object.defineProperty,Zx=Object.defineProperties;var Qx=Object.getOwnPropertyDescriptors;var db=Object.getOwnPropertySymbols;var Kx=Object.prototype.hasOwnProperty,Xx=Object.prototype.propertyIsEnumerable;var ub=(t,n,e)=>n in t?Yx(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e,_=(t,n)=>{for(var e in n||={})Kx.call(n,e)&&ub(t,e,n[e]);if(db)for(var e of db(n))Xx.call(n,e)&&ub(t,e,n[e]);return t},X=(t,n)=>Zx(t,Qx(n));var wt=null,Nl=!1,Hf=1,Jx=null,Ye=Symbol("SIGNAL");function $(t){let n=wt;return wt=t,n}function Ll(){return wt}var dr={version:0,lastCleanEpoch:0,dirty:!1,producers:void 0,producersTail:void 0,consumers:void 0,consumersTail:void 0,recomputing:!1,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,kind:"unknown",producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function Si(t){if(Nl)throw new Error("");if(wt===null)return;wt.consumerOnSignalRead(t);let n=wt.producersTail;if(n!==void 0&&n.producer===t)return;let e,i=wt.recomputing;if(i&&(e=n!==void 0?n.nextProducer:wt.producers,e!==void 0&&e.producer===t)){wt.producersTail=e,e.lastReadVersion=t.version;return}let r=t.consumersTail;if(r!==void 0&&r.consumer===wt&&(!i||tI(r,wt)))return;let o=lo(wt),s={producer:t,consumer:wt,nextProducer:e,prevConsumer:r,lastReadVersion:t.version,nextConsumer:void 0};wt.producersTail=s,n!==void 0?n.nextProducer=s:wt.producers=s,o&&pb(t,s)}function fb(){Hf++}function jl(t){if(!(lo(t)&&!t.dirty)&&!(!t.dirty&&t.lastCleanEpoch===Hf)){if(!t.producerMustRecompute(t)&&!ao(t)){Pl(t);return}t.producerRecomputeValue(t),Pl(t)}}function Uf(t){if(t.consumers===void 0)return;let n=Nl;Nl=!0;try{for(let e=t.consumers;e!==void 0;e=e.nextConsumer){let i=e.consumer;i.dirty||eI(i)}}finally{Nl=n}}function zf(){return wt?.consumerAllowSignalWrites!==!1}function eI(t){t.dirty=!0,Uf(t),t.consumerMarkedDirty?.(t)}function Pl(t){t.dirty=!1,t.lastCleanEpoch=Hf}function Ti(t){return t&&mb(t),$(t)}function mb(t){t.producersTail=void 0,t.recomputing=!0}function ur(t,n){$(n),t&&hb(t)}function hb(t){t.recomputing=!1;let n=t.producersTail,e=n!==void 0?n.nextProducer:t.producers;if(e!==void 0){if(lo(t))do e=$f(e);while(e!==void 0);n!==void 0?n.nextProducer=void 0:t.producers=void 0}}function ao(t){for(let n=t.producers;n!==void 0;n=n.nextProducer){let e=n.producer,i=n.lastReadVersion;if(i!==e.version||(jl(e),i!==e.version))return!0}return!1}function ki(t){if(lo(t)){let n=t.producers;for(;n!==void 0;)n=$f(n)}t.producers=void 0,t.producersTail=void 0,t.consumers=void 0,t.consumersTail=void 0}function pb(t,n){let e=t.consumersTail,i=lo(t);if(e!==void 0?(n.nextConsumer=e.nextConsumer,e.nextConsumer=n):(n.nextConsumer=void 0,t.consumers=n),n.prevConsumer=e,t.consumersTail=n,!i)for(let r=t.producers;r!==void 0;r=r.nextProducer)pb(r.producer,r)}function $f(t){let n=t.producer,e=t.nextProducer,i=t.nextConsumer,r=t.prevConsumer;if(t.nextConsumer=void 0,t.prevConsumer=void 0,i!==void 0?i.prevConsumer=r:n.consumersTail=r,r!==void 0)r.nextConsumer=i;else if(n.consumers=i,!lo(n)){let o=n.producers;for(;o!==void 0;)o=$f(o)}return e}function lo(t){return t.consumerIsAlwaysLive||t.consumers!==void 0}function Bl(t){Jx?.(t)}function tI(t,n){let e=n.producersTail;if(e!==void 0){let i=n.producers;do{if(i===t)return!0;if(i===e)break;i=i.nextProducer}while(i!==void 0)}return!1}function Vl(t,n){return Object.is(t,n)}function Vs(t,n){let e=Object.create(nI);e.computation=t,n!==void 0&&(e.equal=n);let i=()=>{if(jl(e),Si(e),e.value===Bs)throw e.error;return e.value};return i[Ye]=e,Bl(e),i}var Ol=Symbol("UNSET"),Fl=Symbol("COMPUTING"),Bs=Symbol("ERRORED"),nI=X(_({},dr),{value:Ol,dirty:!0,error:null,equal:Vl,kind:"computed",producerMustRecompute(t){return t.value===Ol||t.value===Fl},producerRecomputeValue(t){if(t.value===Fl)throw new Error("");let n=t.value;t.value=Fl;let e=Ti(t),i,r=!1;try{i=t.computation(),$(null),r=n!==Ol&&n!==Bs&&i!==Bs&&t.equal(n,i)}catch(o){i=Bs,t.error=o}finally{ur(t,e)}if(r){t.value=n;return}t.value=i,t.version++}});function iI(){throw new Error}var gb=iI;function vb(t){gb(t)}function Wf(t){gb=t}var rI=null;function Gf(t,n){let e=Object.create(Hs);e.value=t,n!==void 0&&(e.equal=n);let i=()=>bb(e);return i[Ye]=e,Bl(e),[i,s=>fr(e,s),s=>qf(e,s)]}function bb(t){return Si(t),t.value}function fr(t,n){zf()||vb(t),t.equal(t.value,n)||(t.value=n,oI(t))}function qf(t,n){zf()||vb(t),fr(t,n(t.value))}var Hs=X(_({},dr),{equal:Vl,value:void 0,kind:"signal"});function oI(t){t.version++,fb(),Uf(t),rI?.(t)}var Yf=X(_({},dr),{consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!0,dirty:!0,kind:"effect"});function Zf(t){if(t.dirty=!1,t.version>0&&!ao(t))return;t.version++;let n=Ti(t);try{t.cleanup(),t.fn()}finally{ur(t,n)}}function re(t){return typeof t=="function"}function co(t){let e=t(i=>{Error.call(i),i.stack=new Error().stack});return e.prototype=Object.create(Error.prototype),e.prototype.constructor=e,e}var Hl=co(t=>function(e){t(this),this.message=e?`${e.length} errors occurred during unsubscription:
${e.map((i,r)=>`${r+1}) ${i.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=e});function mr(t,n){if(t){let e=t.indexOf(n);0<=e&&t.splice(e,1)}}var ae=class t{constructor(n){this.initialTeardown=n,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let n;if(!this.closed){this.closed=!0;let{_parentage:e}=this;if(e)if(this._parentage=null,Array.isArray(e))for(let o of e)o.remove(this);else e.remove(this);let{initialTeardown:i}=this;if(re(i))try{i()}catch(o){n=o instanceof Hl?o.errors:[o]}let{_finalizers:r}=this;if(r){this._finalizers=null;for(let o of r)try{_b(o)}catch(s){n=n??[],s instanceof Hl?n=[...n,...s.errors]:n.push(s)}}if(n)throw new Hl(n)}}add(n){var e;if(n&&n!==this)if(this.closed)_b(n);else{if(n instanceof t){if(n.closed||n._hasParent(this))return;n._addParent(this)}(this._finalizers=(e=this._finalizers)!==null&&e!==void 0?e:[]).push(n)}}_hasParent(n){let{_parentage:e}=this;return e===n||Array.isArray(e)&&e.includes(n)}_addParent(n){let{_parentage:e}=this;this._parentage=Array.isArray(e)?(e.push(n),e):e?[e,n]:n}_removeParent(n){let{_parentage:e}=this;e===n?this._parentage=null:Array.isArray(e)&&mr(e,n)}remove(n){let{_finalizers:e}=this;e&&mr(e,n),n instanceof t&&n._removeParent(this)}};ae.EMPTY=(()=>{let t=new ae;return t.closed=!0,t})();var Qf=ae.EMPTY;function Ul(t){return t instanceof ae||t&&"closed"in t&&re(t.remove)&&re(t.add)&&re(t.unsubscribe)}function _b(t){re(t)?t():t.unsubscribe()}var pn={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var uo={setTimeout(t,n,...e){let{delegate:i}=uo;return i?.setTimeout?i.setTimeout(t,n,...e):setTimeout(t,n,...e)},clearTimeout(t){let{delegate:n}=uo;return(n?.clearTimeout||clearTimeout)(t)},delegate:void 0};function zl(t){uo.setTimeout(()=>{let{onUnhandledError:n}=pn;if(n)n(t);else throw t})}function Us(){}var yb=Kf("C",void 0,void 0);function wb(t){return Kf("E",void 0,t)}function Cb(t){return Kf("N",t,void 0)}function Kf(t,n,e){return{kind:t,value:n,error:e}}var hr=null;function fo(t){if(pn.useDeprecatedSynchronousErrorHandling){let n=!hr;if(n&&(hr={errorThrown:!1,error:null}),t(),n){let{errorThrown:e,error:i}=hr;if(hr=null,e)throw i}}else t()}function Db(t){pn.useDeprecatedSynchronousErrorHandling&&hr&&(hr.errorThrown=!0,hr.error=t)}var pr=class extends ae{constructor(n){super(),this.isStopped=!1,n?(this.destination=n,Ul(n)&&n.add(this)):this.destination=lI}static create(n,e,i){return new si(n,e,i)}next(n){this.isStopped?Jf(Cb(n),this):this._next(n)}error(n){this.isStopped?Jf(wb(n),this):(this.isStopped=!0,this._error(n))}complete(){this.isStopped?Jf(yb,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(n){this.destination.next(n)}_error(n){try{this.destination.error(n)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},sI=Function.prototype.bind;function Xf(t,n){return sI.call(t,n)}var em=class{constructor(n){this.partialObserver=n}next(n){let{partialObserver:e}=this;if(e.next)try{e.next(n)}catch(i){$l(i)}}error(n){let{partialObserver:e}=this;if(e.error)try{e.error(n)}catch(i){$l(i)}else $l(n)}complete(){let{partialObserver:n}=this;if(n.complete)try{n.complete()}catch(e){$l(e)}}},si=class extends pr{constructor(n,e,i){super();let r;if(re(n)||!n)r={next:n??void 0,error:e??void 0,complete:i??void 0};else{let o;this&&pn.useDeprecatedNextContext?(o=Object.create(n),o.unsubscribe=()=>this.unsubscribe(),r={next:n.next&&Xf(n.next,o),error:n.error&&Xf(n.error,o),complete:n.complete&&Xf(n.complete,o)}):r=n}this.destination=new em(r)}};function $l(t){pn.useDeprecatedSynchronousErrorHandling?Db(t):zl(t)}function aI(t){throw t}function Jf(t,n){let{onStoppedNotification:e}=pn;e&&uo.setTimeout(()=>e(t,n))}var lI={closed:!0,next:Us,error:aI,complete:Us};var mo=typeof Symbol=="function"&&Symbol.observable||"@@observable";function zt(t){return t}function tm(...t){return nm(t)}function nm(t){return t.length===0?zt:t.length===1?t[0]:function(e){return t.reduce((i,r)=>r(i),e)}}var J=(()=>{class t{constructor(e){e&&(this._subscribe=e)}lift(e){let i=new t;return i.source=this,i.operator=e,i}subscribe(e,i,r){let o=dI(e)?e:new si(e,i,r);return fo(()=>{let{operator:s,source:a}=this;o.add(s?s.call(o,a):a?this._subscribe(o):this._trySubscribe(o))}),o}_trySubscribe(e){try{return this._subscribe(e)}catch(i){e.error(i)}}forEach(e,i){return i=Eb(i),new i((r,o)=>{let s=new si({next:a=>{try{e(a)}catch(l){o(l),s.unsubscribe()}},error:o,complete:r});this.subscribe(s)})}_subscribe(e){var i;return(i=this.source)===null||i===void 0?void 0:i.subscribe(e)}[mo](){return this}pipe(...e){return nm(e)(this)}toPromise(e){return e=Eb(e),new e((i,r)=>{let o;this.subscribe(s=>o=s,s=>r(s),()=>i(o))})}}return t.create=n=>new t(n),t})();function Eb(t){var n;return(n=t??pn.Promise)!==null&&n!==void 0?n:Promise}function cI(t){return t&&re(t.next)&&re(t.error)&&re(t.complete)}function dI(t){return t&&t instanceof pr||cI(t)&&Ul(t)}function uI(t){return re(t?.lift)}function le(t){return n=>{if(uI(n))return n.lift(function(e){try{return t(e,this)}catch(i){this.error(i)}});throw new TypeError("Unable to lift unknown Observable type")}}function ce(t,n,e,i,r){return new im(t,n,e,i,r)}var im=class extends pr{constructor(n,e,i,r,o,s){super(n),this.onFinalize=o,this.shouldUnsubscribe=s,this._next=e?function(a){try{e(a)}catch(l){n.error(l)}}:super._next,this._error=r?function(a){try{r(a)}catch(l){n.error(l)}finally{this.unsubscribe()}}:super._error,this._complete=i?function(){try{i()}catch(a){n.error(a)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var n;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:e}=this;super.unsubscribe(),!e&&((n=this.onFinalize)===null||n===void 0||n.call(this))}}};var xb=co(t=>function(){t(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var C=(()=>{class t extends J{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(e){let i=new Wl(this,this);return i.operator=e,i}_throwIfClosed(){if(this.closed)throw new xb}next(e){fo(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let i of this.currentObservers)i.next(e)}})}error(e){fo(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=e;let{observers:i}=this;for(;i.length;)i.shift().error(e)}})}complete(){fo(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:e}=this;for(;e.length;)e.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var e;return((e=this.observers)===null||e===void 0?void 0:e.length)>0}_trySubscribe(e){return this._throwIfClosed(),super._trySubscribe(e)}_subscribe(e){return this._throwIfClosed(),this._checkFinalizedStatuses(e),this._innerSubscribe(e)}_innerSubscribe(e){let{hasError:i,isStopped:r,observers:o}=this;return i||r?Qf:(this.currentObservers=null,o.push(e),new ae(()=>{this.currentObservers=null,mr(o,e)}))}_checkFinalizedStatuses(e){let{hasError:i,thrownError:r,isStopped:o}=this;i?e.error(r):o&&e.complete()}asObservable(){let e=new J;return e.source=this,e}}return t.create=(n,e)=>new Wl(n,e),t})(),Wl=class extends C{constructor(n,e){super(),this.destination=n,this.source=e}next(n){var e,i;(i=(e=this.destination)===null||e===void 0?void 0:e.next)===null||i===void 0||i.call(e,n)}error(n){var e,i;(i=(e=this.destination)===null||e===void 0?void 0:e.error)===null||i===void 0||i.call(e,n)}complete(){var n,e;(e=(n=this.destination)===null||n===void 0?void 0:n.complete)===null||e===void 0||e.call(n)}_subscribe(n){var e,i;return(i=(e=this.source)===null||e===void 0?void 0:e.subscribe(n))!==null&&i!==void 0?i:Qf}};var Ze=class extends C{constructor(n){super(),this._value=n}get value(){return this.getValue()}_subscribe(n){let e=super._subscribe(n);return!e.closed&&n.next(this._value),e}getValue(){let{hasError:n,thrownError:e,_value:i}=this;if(n)throw e;return this._throwIfClosed(),i}next(n){super.next(this._value=n)}};var zs={now(){return(zs.delegate||Date).now()},delegate:void 0};var An=class extends C{constructor(n=1/0,e=1/0,i=zs){super(),this._bufferSize=n,this._windowTime=e,this._timestampProvider=i,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=e===1/0,this._bufferSize=Math.max(1,n),this._windowTime=Math.max(1,e)}next(n){let{isStopped:e,_buffer:i,_infiniteTimeWindow:r,_timestampProvider:o,_windowTime:s}=this;e||(i.push(n),!r&&i.push(o.now()+s)),this._trimBuffer(),super.next(n)}_subscribe(n){this._throwIfClosed(),this._trimBuffer();let e=this._innerSubscribe(n),{_infiniteTimeWindow:i,_buffer:r}=this,o=r.slice();for(let s=0;s<o.length&&!n.closed;s+=i?1:2)n.next(o[s]);return this._checkFinalizedStatuses(n),e}_trimBuffer(){let{_bufferSize:n,_timestampProvider:e,_buffer:i,_infiniteTimeWindow:r}=this,o=(r?1:2)*n;if(n<1/0&&o<i.length&&i.splice(0,i.length-o),!r){let s=e.now(),a=0;for(let l=1;l<i.length&&i[l]<=s;l+=2)a=l;a&&i.splice(0,a+1)}}};var Gl=class extends ae{constructor(n,e){super()}schedule(n,e=0){return this}};var $s={setInterval(t,n,...e){let{delegate:i}=$s;return i?.setInterval?i.setInterval(t,n,...e):setInterval(t,n,...e)},clearInterval(t){let{delegate:n}=$s;return(n?.clearInterval||clearInterval)(t)},delegate:void 0};var ql=class extends Gl{constructor(n,e){super(n,e),this.scheduler=n,this.work=e,this.pending=!1}schedule(n,e=0){var i;if(this.closed)return this;this.state=n;let r=this.id,o=this.scheduler;return r!=null&&(this.id=this.recycleAsyncId(o,r,e)),this.pending=!0,this.delay=e,this.id=(i=this.id)!==null&&i!==void 0?i:this.requestAsyncId(o,this.id,e),this}requestAsyncId(n,e,i=0){return $s.setInterval(n.flush.bind(n,this),i)}recycleAsyncId(n,e,i=0){if(i!=null&&this.delay===i&&this.pending===!1)return e;e!=null&&$s.clearInterval(e)}execute(n,e){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;let i=this._execute(n,e);if(i)return i;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(n,e){let i=!1,r;try{this.work(n)}catch(o){i=!0,r=o||new Error("Scheduled action threw falsy error")}if(i)return this.unsubscribe(),r}unsubscribe(){if(!this.closed){let{id:n,scheduler:e}=this,{actions:i}=e;this.work=this.state=this.scheduler=null,this.pending=!1,mr(i,this),n!=null&&(this.id=this.recycleAsyncId(e,n,null)),this.delay=null,super.unsubscribe()}}};var ho=class t{constructor(n,e=t.now){this.schedulerActionCtor=n,this.now=e}schedule(n,e=0,i){return new this.schedulerActionCtor(this,n).schedule(i,e)}};ho.now=zs.now;var Yl=class extends ho{constructor(n,e=ho.now){super(n,e),this.actions=[],this._active=!1}flush(n){let{actions:e}=this;if(this._active){e.push(n);return}let i;this._active=!0;do if(i=n.execute(n.state,n.delay))break;while(n=e.shift());if(this._active=!1,i){for(;n=e.shift();)n.unsubscribe();throw i}}};var Ws=new Yl(ql),Ib=Ws;var Pe=new J(t=>t.complete());function Zl(t){return t&&re(t.schedule)}function rm(t){return t[t.length-1]}function Ql(t){return re(rm(t))?t.pop():void 0}function Rn(t){return Zl(rm(t))?t.pop():void 0}function Mb(t,n){return typeof rm(t)=="number"?t.pop():n}function Tb(t,n,e,i){function r(o){return o instanceof e?o:new e(function(s){s(o)})}return new(e||(e=Promise))(function(o,s){function a(u){try{c(i.next(u))}catch(f){s(f)}}function l(u){try{c(i.throw(u))}catch(f){s(f)}}function c(u){u.done?o(u.value):r(u.value).then(a,l)}c((i=i.apply(t,n||[])).next())})}function Sb(t){var n=typeof Symbol=="function"&&Symbol.iterator,e=n&&t[n],i=0;if(e)return e.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&i>=t.length&&(t=void 0),{value:t&&t[i++],done:!t}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}function gr(t){return this instanceof gr?(this.v=t,this):new gr(t)}function kb(t,n,e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=e.apply(t,n||[]),r,o=[];return r=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),a("next"),a("throw"),a("return",s),r[Symbol.asyncIterator]=function(){return this},r;function s(h){return function(y){return Promise.resolve(y).then(h,f)}}function a(h,y){i[h]&&(r[h]=function(x){return new Promise(function(T,P){o.push([h,x,T,P])>1||l(h,x)})},y&&(r[h]=y(r[h])))}function l(h,y){try{c(i[h](y))}catch(x){m(o[0][3],x)}}function c(h){h.value instanceof gr?Promise.resolve(h.value.v).then(u,f):m(o[0][2],h)}function u(h){l("next",h)}function f(h){l("throw",h)}function m(h,y){h(y),o.shift(),o.length&&l(o[0][0],o[0][1])}}function Ab(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n=t[Symbol.asyncIterator],e;return n?n.call(t):(t=typeof Sb=="function"?Sb(t):t[Symbol.iterator](),e={},i("next"),i("throw"),i("return"),e[Symbol.asyncIterator]=function(){return this},e);function i(o){e[o]=t[o]&&function(s){return new Promise(function(a,l){s=t[o](s),r(a,l,s.done,s.value)})}}function r(o,s,a,l){Promise.resolve(l).then(function(c){o({value:c,done:a})},s)}}var Kl=t=>t&&typeof t.length=="number"&&typeof t!="function";function Xl(t){return re(t?.then)}function Jl(t){return re(t[mo])}function ec(t){return Symbol.asyncIterator&&re(t?.[Symbol.asyncIterator])}function tc(t){return new TypeError(`You provided ${t!==null&&typeof t=="object"?"an invalid object":`'${t}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function fI(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var nc=fI();function ic(t){return re(t?.[nc])}function rc(t){return kb(this,arguments,function*(){let e=t.getReader();try{for(;;){let{value:i,done:r}=yield gr(e.read());if(r)return yield gr(void 0);yield yield gr(i)}}finally{e.releaseLock()}})}function oc(t){return re(t?.getReader)}function Me(t){if(t instanceof J)return t;if(t!=null){if(Jl(t))return mI(t);if(Kl(t))return hI(t);if(Xl(t))return pI(t);if(ec(t))return Rb(t);if(ic(t))return gI(t);if(oc(t))return vI(t)}throw tc(t)}function mI(t){return new J(n=>{let e=t[mo]();if(re(e.subscribe))return e.subscribe(n);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function hI(t){return new J(n=>{for(let e=0;e<t.length&&!n.closed;e++)n.next(t[e]);n.complete()})}function pI(t){return new J(n=>{t.then(e=>{n.closed||(n.next(e),n.complete())},e=>n.error(e)).then(null,zl)})}function gI(t){return new J(n=>{for(let e of t)if(n.next(e),n.closed)return;n.complete()})}function Rb(t){return new J(n=>{bI(t,n).catch(e=>n.error(e))})}function vI(t){return Rb(rc(t))}function bI(t,n){var e,i,r,o;return Tb(this,void 0,void 0,function*(){try{for(e=Ab(t);i=yield e.next(),!i.done;){let s=i.value;if(n.next(s),n.closed)return}}catch(s){r={error:s}}finally{try{i&&!i.done&&(o=e.return)&&(yield o.call(e))}finally{if(r)throw r.error}}n.complete()})}function Lt(t,n,e,i=0,r=!1){let o=n.schedule(function(){e(),r?t.add(this.schedule(null,i)):this.unsubscribe()},i);if(t.add(o),!r)return o}function sc(t,n=0){return le((e,i)=>{e.subscribe(ce(i,r=>Lt(i,t,()=>i.next(r),n),()=>Lt(i,t,()=>i.complete(),n),r=>Lt(i,t,()=>i.error(r),n)))})}function ac(t,n=0){return le((e,i)=>{i.add(t.schedule(()=>e.subscribe(i),n))})}function Nb(t,n){return Me(t).pipe(ac(n),sc(n))}function Ob(t,n){return Me(t).pipe(ac(n),sc(n))}function Fb(t,n){return new J(e=>{let i=0;return n.schedule(function(){i===t.length?e.complete():(e.next(t[i++]),e.closed||this.schedule())})})}function Pb(t,n){return new J(e=>{let i;return Lt(e,n,()=>{i=t[nc](),Lt(e,n,()=>{let r,o;try{({value:r,done:o}=i.next())}catch(s){e.error(s);return}o?e.complete():e.next(r)},0,!0)}),()=>re(i?.return)&&i.return()})}function lc(t,n){if(!t)throw new Error("Iterable cannot be null");return new J(e=>{Lt(e,n,()=>{let i=t[Symbol.asyncIterator]();Lt(e,n,()=>{i.next().then(r=>{r.done?e.complete():e.next(r.value)})},0,!0)})})}function Lb(t,n){return lc(rc(t),n)}function jb(t,n){if(t!=null){if(Jl(t))return Nb(t,n);if(Kl(t))return Fb(t,n);if(Xl(t))return Ob(t,n);if(ec(t))return lc(t,n);if(ic(t))return Pb(t,n);if(oc(t))return Lb(t,n)}throw tc(t)}function Se(t,n){return n?jb(t,n):Me(t)}function B(...t){let n=Rn(t);return Se(t,n)}function vr(t,n){let e=re(t)?t:()=>t,i=r=>r.error(e());return new J(n?r=>n.schedule(i,0,r):i)}function Gs(t){return!!t&&(t instanceof J||re(t.lift)&&re(t.subscribe))}var br=co(t=>function(){t(this),this.name="EmptyError",this.message="no elements in sequence"});function Bb(t){return t instanceof Date&&!isNaN(t)}function ee(t,n){return le((e,i)=>{let r=0;e.subscribe(ce(i,o=>{i.next(t.call(n,o,r++))}))})}var{isArray:_I}=Array;function yI(t,n){return _I(n)?t(...n):t(n)}function cc(t){return ee(n=>yI(t,n))}var{isArray:wI}=Array,{getPrototypeOf:CI,prototype:DI,keys:EI}=Object;function dc(t){if(t.length===1){let n=t[0];if(wI(n))return{args:n,keys:null};if(xI(n)){let e=EI(n);return{args:e.map(i=>n[i]),keys:e}}}return{args:t,keys:null}}function xI(t){return t&&typeof t=="object"&&CI(t)===DI}function uc(t,n){return t.reduce((e,i,r)=>(e[i]=n[r],e),{})}function po(...t){let n=Rn(t),e=Ql(t),{args:i,keys:r}=dc(t);if(i.length===0)return Se([],n);let o=new J(II(i,n,r?s=>uc(r,s):zt));return e?o.pipe(cc(e)):o}function II(t,n,e=zt){return i=>{Vb(n,()=>{let{length:r}=t,o=new Array(r),s=r,a=r;for(let l=0;l<r;l++)Vb(n,()=>{let c=Se(t[l],n),u=!1;c.subscribe(ce(i,f=>{o[l]=f,u||(u=!0,a--),a||i.next(e(o.slice()))},()=>{--s||i.complete()}))},i)},i)}}function Vb(t,n,e){t?Lt(e,t,n):n()}function Hb(t,n,e,i,r,o,s,a){let l=[],c=0,u=0,f=!1,m=()=>{f&&!l.length&&!c&&n.complete()},h=x=>c<i?y(x):l.push(x),y=x=>{o&&n.next(x),c++;let T=!1;Me(e(x,u++)).subscribe(ce(n,P=>{r?.(P),o?h(P):n.next(P)},()=>{T=!0},void 0,()=>{if(T)try{for(c--;l.length&&c<i;){let P=l.shift();s?Lt(n,s,()=>y(P)):y(P)}m()}catch(P){n.error(P)}}))};return t.subscribe(ce(n,h,()=>{f=!0,m()})),()=>{a?.()}}function mt(t,n,e=1/0){return re(n)?mt((i,r)=>ee((o,s)=>n(i,o,r,s))(Me(t(i,r))),e):(typeof n=="number"&&(e=n),le((i,r)=>Hb(i,r,t,e)))}function Ai(t=1/0){return mt(zt,t)}function Ub(){return Ai(1)}function Ri(...t){return Ub()(Se(t,Rn(t)))}function _r(t){return new J(n=>{Me(t()).subscribe(n)})}function qs(...t){let n=Ql(t),{args:e,keys:i}=dc(t),r=new J(o=>{let{length:s}=e;if(!s){o.complete();return}let a=new Array(s),l=s,c=s;for(let u=0;u<s;u++){let f=!1;Me(e[u]).subscribe(ce(o,m=>{f||(f=!0,c--),a[u]=m},()=>l--,void 0,()=>{(!l||!f)&&(c||o.next(i?uc(i,a):a),o.complete())}))}});return n?r.pipe(cc(n)):r}function Ys(t=0,n,e=Ib){let i=-1;return n!=null&&(Zl(n)?e=n:i=n),new J(r=>{let o=Bb(t)?+t-e.now():t;o<0&&(o=0);let s=0;return e.schedule(function(){r.closed||(r.next(s++),0<=i?this.schedule(void 0,i):r.complete())},o)})}function $t(...t){let n=Rn(t),e=Mb(t,1/0),i=t;return i.length?i.length===1?Me(i[0]):Ai(e)(Se(i,n)):Pe}function ge(t,n){return le((e,i)=>{let r=0;e.subscribe(ce(i,o=>t.call(n,o,r++)&&i.next(o)))})}function zb(t){return le((n,e)=>{let i=!1,r=null,o=null,s=!1,a=()=>{if(o?.unsubscribe(),o=null,i){i=!1;let c=r;r=null,e.next(c)}s&&e.complete()},l=()=>{o=null,s&&e.complete()};n.subscribe(ce(e,c=>{i=!0,r=c,o||Me(t(c)).subscribe(o=ce(e,a,l))},()=>{s=!0,(!i||!o||o.closed)&&e.complete()}))})}function fc(t,n=Ws){return zb(()=>Ys(t,n))}function Ni(t){return le((n,e)=>{let i=null,r=!1,o;i=n.subscribe(ce(e,void 0,void 0,s=>{o=Me(t(s,Ni(t)(n))),i?(i.unsubscribe(),i=null,o.subscribe(e)):r=!0})),r&&(i.unsubscribe(),i=null,o.subscribe(e))})}function Oi(t,n){return re(n)?mt(t,n,1):mt(t,1)}function ai(t,n=Ws){return le((e,i)=>{let r=null,o=null,s=null,a=()=>{if(r){r.unsubscribe(),r=null;let c=o;o=null,i.next(c)}};function l(){let c=s+t,u=n.now();if(u<c){r=this.schedule(void 0,c-u),i.add(r);return}a()}e.subscribe(ce(i,c=>{o=c,s=n.now(),r||(r=n.schedule(l,t),i.add(r))},()=>{a(),i.complete()},void 0,()=>{o=r=null}))})}function $b(t){return le((n,e)=>{let i=!1;n.subscribe(ce(e,r=>{i=!0,e.next(r)},()=>{i||e.next(t),e.complete()}))})}function Tt(t){return t<=0?()=>Pe:le((n,e)=>{let i=0;n.subscribe(ce(e,r=>{++i<=t&&(e.next(r),t<=i&&e.complete())}))})}function mc(t,n=zt){return t=t??MI,le((e,i)=>{let r,o=!0;e.subscribe(ce(i,s=>{let a=n(s);(o||!t(r,a))&&(o=!1,r=a,i.next(s))}))})}function MI(t,n){return t===n}function Wb(t=SI){return le((n,e)=>{let i=!1;n.subscribe(ce(e,r=>{i=!0,e.next(r)},()=>i?e.complete():e.error(t())))})}function SI(){return new br}function Fi(t){return le((n,e)=>{try{n.subscribe(e)}finally{e.add(t)}})}function li(t,n){let e=arguments.length>=2;return i=>i.pipe(t?ge((r,o)=>t(r,o,i)):zt,Tt(1),e?$b(n):Wb(()=>new br))}function hc(t){return t<=0?()=>Pe:le((n,e)=>{let i=[];n.subscribe(ce(e,r=>{i.push(r),t<i.length&&i.shift()},()=>{for(let r of i)e.next(r);e.complete()},void 0,()=>{i=null}))})}function pc(){return le((t,n)=>{let e,i=!1;t.subscribe(ce(n,r=>{let o=e;e=r,i&&n.next([o,r]),i=!0}))})}function Zs(t={}){let{connector:n=()=>new C,resetOnError:e=!0,resetOnComplete:i=!0,resetOnRefCountZero:r=!0}=t;return o=>{let s,a,l,c=0,u=!1,f=!1,m=()=>{a?.unsubscribe(),a=void 0},h=()=>{m(),s=l=void 0,u=f=!1},y=()=>{let x=s;h(),x?.unsubscribe()};return le((x,T)=>{c++,!f&&!u&&m();let P=l=l??n();T.add(()=>{c--,c===0&&!f&&!u&&(a=om(y,r))}),P.subscribe(T),!s&&c>0&&(s=new si({next:ve=>P.next(ve),error:ve=>{f=!0,m(),a=om(h,e,ve),P.error(ve)},complete:()=>{u=!0,m(),a=om(h,i),P.complete()}}),Me(x).subscribe(s))})(o)}}function om(t,n,...e){if(n===!0){t();return}if(n===!1)return;let i=new si({next:()=>{i.unsubscribe(),t()}});return Me(n(...e)).subscribe(i)}function gc(t,n,e){let i,r=!1;return t&&typeof t=="object"?{bufferSize:i=1/0,windowTime:n=1/0,refCount:r=!1,scheduler:e}=t:i=t??1/0,Zs({connector:()=>new An(i,n,e),resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:r})}function yr(t){return ge((n,e)=>t<=e)}function kt(...t){let n=Rn(t);return le((e,i)=>{(n?Ri(t,e,n):Ri(t,e)).subscribe(i)})}function Qe(t,n){return le((e,i)=>{let r=null,o=0,s=!1,a=()=>s&&!r&&i.complete();e.subscribe(ce(i,l=>{r?.unsubscribe();let c=0,u=o++;Me(t(l,u)).subscribe(r=ce(i,f=>i.next(n?n(l,f,u,c++):f),()=>{r=null,a()}))},()=>{s=!0,a()}))})}function me(t){return le((n,e)=>{Me(t).subscribe(ce(e,()=>e.complete(),Us)),!e.closed&&n.subscribe(e)})}function sm(t,n=!1){return le((e,i)=>{let r=0;e.subscribe(ce(i,o=>{let s=t(o,r++);(s||n)&&i.next(o),!s&&i.complete()}))})}function $e(t,n,e){let i=re(t)||n||e?{next:t,error:n,complete:e}:t;return i?le((r,o)=>{var s;(s=i.subscribe)===null||s===void 0||s.call(i);let a=!0;r.subscribe(ce(o,l=>{var c;(c=i.next)===null||c===void 0||c.call(i,l),o.next(l)},()=>{var l;a=!1,(l=i.complete)===null||l===void 0||l.call(i),o.complete()},l=>{var c;a=!1,(c=i.error)===null||c===void 0||c.call(i,l),o.error(l)},()=>{var l,c;a&&((l=i.unsubscribe)===null||l===void 0||l.call(i)),(c=i.finalize)===null||c===void 0||c.call(i)}))}):zt}var am;function Qs(){return am}function Nn(t){let n=am;return am=t,n}function lm(t,n){let e=Qs();if(!e)throw new Error("Current injector is not set.");if(!t.\u0275prov)throw new Error("Token is not an injectable");return e.retrieve(t,n)}var Gb=Symbol("NotFound");function go(t){return t===Gb||t?.name==="\u0275NotFound"}function qb(t){let n=$(null);try{return t()}finally{$(n)}}var Dc="https://angular.dev/best-practices/security#preventing-cross-site-scripting-xss",I=class extends Error{code;constructor(n,e){super(tn(n,e)),this.code=n}};function TI(t){return`NG0${Math.abs(t)}`}function tn(t,n){return`${TI(t)}${n?": "+n:""}`}var bo=globalThis;function ye(t){for(let n in t)if(t[n]===ye)return n;throw Error("")}function Xb(t,n){for(let e in n)n.hasOwnProperty(e)&&!t.hasOwnProperty(e)&&(t[e]=n[e])}function ia(t){if(typeof t=="string")return t;if(Array.isArray(t))return`[${t.map(ia).join(", ")}]`;if(t==null)return""+t;let n=t.overriddenName||t.name;if(n)return`${n}`;let e=t.toString();if(e==null)return""+e;let i=e.indexOf(`
`);return i>=0?e.slice(0,i):e}function Ec(t,n){return t?n?`${t} ${n}`:t:n||""}var kI=ye({__forward_ref__:ye});function gn(t){return t.__forward_ref__=gn,t}function ht(t){return wm(t)?t():t}function wm(t){return typeof t=="function"&&t.hasOwnProperty(kI)&&t.__forward_ref__===gn}function b(t){return{token:t.token,providedIn:t.providedIn||null,factory:t.factory,value:void 0}}function H(t){return{providers:t.providers||[],imports:t.imports||[]}}function ra(t){return AI(t,xc)}function Cm(t){return ra(t)!==null}function AI(t,n){return t.hasOwnProperty(n)&&t[n]||null}function RI(t){let n=t?.[xc]??null;return n||null}function dm(t){return t&&t.hasOwnProperty(bc)?t[bc]:null}var xc=ye({\u0275prov:ye}),bc=ye({\u0275inj:ye}),v=class{_desc;ngMetadataName="InjectionToken";\u0275prov;constructor(n,e){this._desc=n,this.\u0275prov=void 0,typeof e=="number"?this.__NG_ELEMENT_ID__=e:e!==void 0&&(this.\u0275prov=b({token:this,providedIn:e.providedIn||"root",factory:e.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};function Dm(t){return t&&!!t.\u0275providers}var Em=ye({\u0275cmp:ye}),xm=ye({\u0275dir:ye}),Im=ye({\u0275pipe:ye}),Mm=ye({\u0275mod:ye}),Xs=ye({\u0275fac:ye}),xr=ye({__NG_ELEMENT_ID__:ye}),Yb=ye({__NG_ENV_ID__:ye});function Sm(t){return Ic(t,"@NgModule"),t[Mm]||null}function Fn(t){return Ic(t,"@Component"),t[Em]||null}function Tm(t){return Ic(t,"@Directive"),t[xm]||null}function Jb(t){return Ic(t,"@Pipe"),t[Im]||null}function Ic(t,n){if(t==null)throw new I(-919,!1)}function Mc(t){return typeof t=="string"?t:t==null?"":String(t)}var e_=ye({ngErrorCode:ye}),NI=ye({ngErrorMessage:ye}),OI=ye({ngTokenPath:ye});function km(t,n){return t_("",-200,n)}function Sc(t,n){throw new I(-201,!1)}function t_(t,n,e){let i=new I(n,t);return i[e_]=n,i[NI]=t,e&&(i[OI]=e),i}function FI(t){return t[e_]}var um;function n_(){return um}function At(t){let n=um;return um=t,n}function Am(t,n,e){let i=ra(t);if(i&&i.providedIn=="root")return i.value===void 0?i.value=i.factory():i.value;if(e&8)return null;if(n!==void 0)return n;Sc(t,"")}var PI={},wr=PI,LI="__NG_DI_FLAG__",fm=class{injector;constructor(n){this.injector=n}retrieve(n,e){let i=Cr(e)||0;try{return this.injector.get(n,i&8?null:wr,i)}catch(r){if(go(r))return r;throw r}}};function jI(t,n=0){let e=Qs();if(e===void 0)throw new I(-203,!1);if(e===null)return Am(t,void 0,n);{let i=BI(n),r=e.retrieve(t,i);if(go(r)){if(i.optional)return null;throw r}return r}}function O(t,n=0){return(n_()||jI)(ht(t),n)}function d(t,n){return O(t,Cr(n))}function Cr(t){return typeof t>"u"||typeof t=="number"?t:0|(t.optional&&8)|(t.host&&1)|(t.self&&2)|(t.skipSelf&&4)}function BI(t){return{optional:!!(t&8),host:!!(t&1),self:!!(t&2),skipSelf:!!(t&4)}}function mm(t){let n=[];for(let e=0;e<t.length;e++){let i=ht(t[e]);if(Array.isArray(i)){if(i.length===0)throw new I(900,!1);let r,o=0;for(let s=0;s<i.length;s++){let a=i[s],l=VI(a);typeof l=="number"?l===-1?r=a.token:o|=l:r=a}n.push(O(r,o))}else n.push(O(i))}return n}function VI(t){return t[LI]}function Pi(t,n){let e=t.hasOwnProperty(Xs);return e?t[Xs]:null}function i_(t,n,e){if(t.length!==n.length)return!1;for(let i=0;i<t.length;i++){let r=t[i],o=n[i];if(e&&(r=e(r),o=e(o)),o!==r)return!1}return!0}function r_(t){return t.flat(Number.POSITIVE_INFINITY)}function Tc(t,n){t.forEach(e=>Array.isArray(e)?Tc(e,n):n(e))}function Rm(t,n,e){n>=t.length?t.push(e):t.splice(n,0,e)}function oa(t,n){return n>=t.length-1?t.pop():t.splice(n,1)[0]}function o_(t,n){let e=[];for(let i=0;i<t;i++)e.push(n);return e}function s_(t,n,e,i){let r=t.length;if(r==n)t.push(e,i);else if(r===1)t.push(i,t[0]),t[0]=e;else{for(r--,t.push(t[r-1],t[r]);r>n;){let o=r-2;t[r]=t[o],r--}t[n]=e,t[n+1]=i}}function sa(t,n,e){let i=_o(t,n);return i>=0?t[i|1]=e:(i=~i,s_(t,i,n,e)),i}function kc(t,n){let e=_o(t,n);if(e>=0)return t[e|1]}function _o(t,n){return HI(t,n,1)}function HI(t,n,e){let i=0,r=t.length>>e;for(;r!==i;){let o=i+(r-i>>1),s=t[o<<e];if(n===s)return o<<e;s>n?r=o:i=o+1}return~(r<<e)}var Bi={},Ct=[],Vi=new v(""),Nm=new v("",-1),Om=new v(""),Js=class{get(n,e=wr){if(e===wr){let r=t_("",-201);throw r.name="\u0275NotFound",r}return e}};function Pn(t){return{\u0275providers:t}}function a_(t){return Pn([{provide:Vi,multi:!0,useValue:t}])}function l_(...t){return{\u0275providers:Fm(!0,t),\u0275fromNgModule:!0}}function Fm(t,...n){let e=[],i=new Set,r,o=s=>{e.push(s)};return Tc(n,s=>{let a=s;_c(a,o,[],i)&&(r||=[],r.push(a))}),r!==void 0&&c_(r,o),e}function c_(t,n){for(let e=0;e<t.length;e++){let{ngModule:i,providers:r}=t[e];Pm(r,o=>{n(o,i)})}}function _c(t,n,e,i){if(t=ht(t),!t)return!1;let r=null,o=dm(t),s=!o&&Fn(t);if(!o&&!s){let l=t.ngModule;if(o=dm(l),o)r=l;else return!1}else{if(s&&!s.standalone)return!1;r=t}let a=i.has(r);if(s){if(a)return!1;if(i.add(r),s.dependencies){let l=typeof s.dependencies=="function"?s.dependencies():s.dependencies;for(let c of l)_c(c,n,e,i)}}else if(o){if(o.imports!=null&&!a){i.add(r);let c;Tc(o.imports,u=>{_c(u,n,e,i)&&(c||=[],c.push(u))}),c!==void 0&&c_(c,n)}if(!a){let c=Pi(r)||(()=>new r);n({provide:r,useFactory:c,deps:Ct},r),n({provide:Om,useValue:r,multi:!0},r),n({provide:Vi,useValue:()=>O(r),multi:!0},r)}let l=o.providers;if(l!=null&&!a){let c=t;Pm(l,u=>{n(u,c)})}}else return!1;return r!==t&&t.providers!==void 0}function Pm(t,n){for(let e of t)Dm(e)&&(e=e.\u0275providers),Array.isArray(e)?Pm(e,n):n(e)}var UI=ye({provide:String,useValue:ye});function d_(t){return t!==null&&typeof t=="object"&&UI in t}function zI(t){return!!(t&&t.useExisting)}function $I(t){return!!(t&&t.useFactory)}function Dr(t){return typeof t=="function"}function u_(t){return!!t.useClass}var aa=new v(""),vc={},Zb={},cm;function yo(){return cm===void 0&&(cm=new Js),cm}var we=class{},Er=class extends we{parent;source;scopes;records=new Map;_ngOnDestroyHooks=new Set;_onDestroyHooks=[];get destroyed(){return this._destroyed}_destroyed=!1;injectorDefTypes;constructor(n,e,i,r){super(),this.parent=e,this.source=i,this.scopes=r,pm(n,s=>this.processProvider(s)),this.records.set(Nm,vo(void 0,this)),r.has("environment")&&this.records.set(we,vo(void 0,this));let o=this.records.get(aa);o!=null&&typeof o.value=="string"&&this.scopes.add(o.value),this.injectorDefTypes=new Set(this.get(Om,Ct,{self:!0}))}retrieve(n,e){let i=Cr(e)||0;try{return this.get(n,wr,i)}catch(r){if(go(r))return r;throw r}}destroy(){Ks(this),this._destroyed=!0;let n=$(null);try{for(let i of this._ngOnDestroyHooks)i.ngOnDestroy();let e=this._onDestroyHooks;this._onDestroyHooks=[];for(let i of e)i()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),$(n)}}onDestroy(n){return Ks(this),this._onDestroyHooks.push(n),()=>this.removeOnDestroy(n)}runInContext(n){Ks(this);let e=Nn(this),i=At(void 0),r;try{return n()}finally{Nn(e),At(i)}}get(n,e=wr,i){if(Ks(this),n.hasOwnProperty(Yb))return n[Yb](this);let r=Cr(i),o,s=Nn(this),a=At(void 0);try{if(!(r&4)){let c=this.records.get(n);if(c===void 0){let u=ZI(n)&&ra(n);u&&this.injectableDefInScope(u)?c=vo(hm(n),vc):c=null,this.records.set(n,c)}if(c!=null)return this.hydrate(n,c,r)}let l=r&2?yo():this.parent;return e=r&8&&e===wr?null:e,l.get(n,e)}catch(l){let c=FI(l);throw c===-200||c===-201?new I(c,null):l}finally{At(a),Nn(s)}}resolveInjectorInitializers(){let n=$(null),e=Nn(this),i=At(void 0),r;try{let o=this.get(Vi,Ct,{self:!0});for(let s of o)s()}finally{Nn(e),At(i),$(n)}}toString(){return"R3Injector[...]"}processProvider(n){n=ht(n);let e=Dr(n)?n:ht(n&&n.provide),i=GI(n);if(!Dr(n)&&n.multi===!0){let r=this.records.get(e);r||(r=vo(void 0,vc,!0),r.factory=()=>mm(r.multi),this.records.set(e,r)),e=n,r.multi.push(n)}this.records.set(e,i)}hydrate(n,e,i){let r=$(null);try{if(e.value===Zb)throw km("");return e.value===vc&&(e.value=Zb,e.value=e.factory(void 0,i)),typeof e.value=="object"&&e.value&&YI(e.value)&&this._ngOnDestroyHooks.add(e.value),e.value}finally{$(r)}}injectableDefInScope(n){if(!n.providedIn)return!1;let e=ht(n.providedIn);return typeof e=="string"?e==="any"||this.scopes.has(e):this.injectorDefTypes.has(e)}removeOnDestroy(n){let e=this._onDestroyHooks.indexOf(n);e!==-1&&this._onDestroyHooks.splice(e,1)}};function hm(t){let n=ra(t),e=n!==null?n.factory:Pi(t);if(e!==null)return e;if(t instanceof v)throw new I(-204,!1);if(t instanceof Function)return WI(t);throw new I(-204,!1)}function WI(t){if(t.length>0)throw new I(-204,!1);let e=RI(t);return e!==null?()=>e.factory(t):()=>new t}function GI(t){if(d_(t))return vo(void 0,t.useValue);{let n=Lm(t);return vo(n,vc)}}function Lm(t,n,e){let i;if(Dr(t)){let r=ht(t);return Pi(r)||hm(r)}else if(d_(t))i=()=>ht(t.useValue);else if($I(t))i=()=>t.useFactory(...mm(t.deps||[]));else if(zI(t))i=(r,o)=>O(ht(t.useExisting),o!==void 0&&o&8?8:void 0);else{let r=ht(t&&(t.useClass||t.provide));if(qI(t))i=()=>new r(...mm(t.deps));else return Pi(r)||hm(r)}return i}function Ks(t){if(t.destroyed)throw new I(-205,!1)}function vo(t,n,e=!1){return{factory:t,value:n,multi:e?[]:void 0}}function qI(t){return!!t.deps}function YI(t){return t!==null&&typeof t=="object"&&typeof t.ngOnDestroy=="function"}function ZI(t){return typeof t=="function"||typeof t=="object"&&t.ngMetadataName==="InjectionToken"}function pm(t,n){for(let e of t)Array.isArray(e)?pm(e,n):e&&Dm(e)?pm(e.\u0275providers,n):n(e)}function tt(t,n){let e;t instanceof Er?(Ks(t),e=t):e=new fm(t);let i,r=Nn(e),o=At(void 0);try{return n()}finally{Nn(r),At(o)}}function f_(){return n_()!==void 0||Qs()!=null}var vn=0,G=1,te=2,et=3,nn=4,Rt=5,Ir=6,wo=7,We=8,di=9,Ln=10,Ee=11,Co=12,jm=13,Mr=14,Nt=15,Hi=16,Sr=17,jn=18,ui=19,Bm=20,ci=21,Ac=22,Li=23,Wt=24,Tr=25,Ui=26,Le=27,m_=1,Vm=6,zi=7,la=8,kr=9,je=10;function fi(t){return Array.isArray(t)&&typeof t[m_]=="object"}function bn(t){return Array.isArray(t)&&t[m_]===!0}function Hm(t){return(t.flags&4)!==0}function Bn(t){return t.componentOffset>-1}function ca(t){return(t.flags&1)===1}function Vn(t){return!!t.template}function Do(t){return(t[te]&512)!==0}function Ar(t){return(t[te]&256)===256}var Um="svg",h_="math";function rn(t){for(;Array.isArray(t);)t=t[vn];return t}function zm(t,n){return rn(n[t])}function on(t,n){return rn(n[t.index])}function Rc(t,n){return t.data[n]}function $m(t,n){return t[n]}function Wm(t,n,e,i){e>=t.data.length&&(t.data[e]=null,t.blueprint[e]=null),n[e]=i}function sn(t,n){let e=n[t];return fi(e)?e:e[vn]}function p_(t){return(t[te]&4)===4}function Nc(t){return(t[te]&128)===128}function g_(t){return bn(t[et])}function Gt(t,n){return n==null?null:t[n]}function Gm(t){t[Sr]=0}function qm(t){t[te]&1024||(t[te]|=1024,Nc(t)&&Rr(t))}function v_(t,n){for(;t>0;)n=n[Mr],t--;return n}function da(t){return!!(t[te]&9216||t[Wt]?.dirty)}function Oc(t){t[Ln].changeDetectionScheduler?.notify(8),t[te]&64&&(t[te]|=1024),da(t)&&Rr(t)}function Rr(t){t[Ln].changeDetectionScheduler?.notify(0);let n=ji(t);for(;n!==null&&!(n[te]&8192||(n[te]|=8192,!Nc(n)));)n=ji(n)}function Ym(t,n){if(Ar(t))throw new I(911,!1);t[ci]===null&&(t[ci]=[]),t[ci].push(n)}function b_(t,n){if(t[ci]===null)return;let e=t[ci].indexOf(n);e!==-1&&t[ci].splice(e,1)}function ji(t){let n=t[et];return bn(n)?n[et]:n}function Zm(t){return t[wo]??=[]}function Qm(t){return t.cleanup??=[]}function __(t,n,e,i){let r=Zm(n);r.push(e),t.firstCreatePass&&Qm(t).push(i,r.length-1)}var de={lFrame:k_(null),bindingsEnabled:!0,skipHydrationRootTNode:null};var gm=!1;function y_(){return de.lFrame.elementDepthCount}function w_(){de.lFrame.elementDepthCount++}function Km(){de.lFrame.elementDepthCount--}function Xm(){return de.bindingsEnabled}function Jm(){return de.skipHydrationRootTNode!==null}function eh(t){return de.skipHydrationRootTNode===t}function th(){de.skipHydrationRootTNode=null}function Y(){return de.lFrame.lView}function Te(){return de.lFrame.tView}function Be(t){return de.lFrame.contextLView=t,t[We]}function Ve(t){return de.lFrame.contextLView=null,t}function at(){let t=nh();for(;t!==null&&t.type===64;)t=t.parent;return t}function nh(){return de.lFrame.currentTNode}function C_(){let t=de.lFrame,n=t.currentTNode;return t.isParent?n:n.parent}function Eo(t,n){let e=de.lFrame;e.currentTNode=t,e.isParent=n}function ih(){return de.lFrame.isParent}function rh(){de.lFrame.isParent=!1}function D_(){return de.lFrame.contextLView}function oh(){return gm}function ea(t){let n=gm;return gm=t,n}function sh(){let t=de.lFrame,n=t.bindingRootIndex;return n===-1&&(n=t.bindingRootIndex=t.tView.bindingStartIndex),n}function E_(t){return de.lFrame.bindingIndex=t}function Hn(){return de.lFrame.bindingIndex++}function ah(t){let n=de.lFrame,e=n.bindingIndex;return n.bindingIndex=n.bindingIndex+t,e}function x_(){return de.lFrame.inI18n}function I_(t,n){let e=de.lFrame;e.bindingIndex=e.bindingRootIndex=t,Fc(n)}function M_(){return de.lFrame.currentDirectiveIndex}function Fc(t){de.lFrame.currentDirectiveIndex=t}function S_(t){let n=de.lFrame.currentDirectiveIndex;return n===-1?null:t[n]}function Pc(){return de.lFrame.currentQueryIndex}function ua(t){de.lFrame.currentQueryIndex=t}function QI(t){let n=t[G];return n.type===2?n.declTNode:n.type===1?t[Rt]:null}function lh(t,n,e){if(e&4){let r=n,o=t;for(;r=r.parent,r===null&&!(e&1);)if(r=QI(o),r===null||(o=o[Mr],r.type&10))break;if(r===null)return!1;n=r,t=o}let i=de.lFrame=T_();return i.currentTNode=n,i.lView=t,!0}function Lc(t){let n=T_(),e=t[G];de.lFrame=n,n.currentTNode=e.firstChild,n.lView=t,n.tView=e,n.contextLView=t,n.bindingIndex=e.bindingStartIndex,n.inI18n=!1}function T_(){let t=de.lFrame,n=t===null?null:t.child;return n===null?k_(t):n}function k_(t){let n={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:t,child:null,inI18n:!1};return t!==null&&(t.child=n),n}function A_(){let t=de.lFrame;return de.lFrame=t.parent,t.currentTNode=null,t.lView=null,t}var ch=A_;function jc(){let t=A_();t.isParent=!0,t.tView=null,t.selectedIndex=-1,t.contextLView=null,t.elementDepthCount=0,t.currentDirectiveIndex=-1,t.currentNamespace=null,t.bindingRootIndex=-1,t.bindingIndex=-1,t.currentQueryIndex=0}function R_(t){return(de.lFrame.contextLView=v_(t,de.lFrame.contextLView))[We]}function mi(){return de.lFrame.selectedIndex}function $i(t){de.lFrame.selectedIndex=t}function xo(){let t=de.lFrame;return Rc(t.tView,t.selectedIndex)}function fa(){de.lFrame.currentNamespace=Um}function N_(){return de.lFrame.currentNamespace}var O_=!0;function Bc(){return O_}function Vc(t){O_=t}function vm(t,n=null,e=null,i){let r=dh(t,n,e,i);return r.resolveInjectorInitializers(),r}function dh(t,n=null,e=null,i,r=new Set){let o=[e||Ct,l_(t)],s;return new Er(o,n||yo(),s||null,r)}var W=class t{static THROW_IF_NOT_FOUND=wr;static NULL=new Js;static create(n,e){if(Array.isArray(n))return vm({name:""},e,n,"");{let i=n.name??"";return vm({name:i},n.parent,n.providers,i)}}static \u0275prov=b({token:t,providedIn:"any",factory:()=>O(Nm)});static __NG_ELEMENT_ID__=-1},V=new v(""),pt=(()=>{class t{static __NG_ELEMENT_ID__=KI;static __NG_ENV_ID__=e=>e}return t})(),yc=class extends pt{_lView;constructor(n){super(),this._lView=n}get destroyed(){return Ar(this._lView)}onDestroy(n){let e=this._lView;return Ym(e,n),()=>b_(e,n)}};function KI(){return new yc(Y())}var F_=!1,P_=new v(""),hi=(()=>{class t{taskId=0;pendingTasks=new Set;destroyed=!1;pendingTask=new Ze(!1);debugTaskTracker=d(P_,{optional:!0});get hasPendingTasks(){return this.destroyed?!1:this.pendingTask.value}get hasPendingTasksObservable(){return this.destroyed?new J(e=>{e.next(!1),e.complete()}):this.pendingTask}add(){!this.hasPendingTasks&&!this.destroyed&&this.pendingTask.next(!0);let e=this.taskId++;return this.pendingTasks.add(e),this.debugTaskTracker?.add(e),e}has(e){return this.pendingTasks.has(e)}remove(e){this.pendingTasks.delete(e),this.debugTaskTracker?.remove(e),this.pendingTasks.size===0&&this.hasPendingTasks&&this.pendingTask.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this.hasPendingTasks&&this.pendingTask.next(!1),this.destroyed=!0,this.pendingTask.unsubscribe()}static \u0275prov=b({token:t,providedIn:"root",factory:()=>new t})}return t})(),bm=class extends C{__isAsync;destroyRef=void 0;pendingTasks=void 0;constructor(n=!1){super(),this.__isAsync=n,f_()&&(this.destroyRef=d(pt,{optional:!0})??void 0,this.pendingTasks=d(hi,{optional:!0})??void 0)}emit(n){let e=$(null);try{super.next(n)}finally{$(e)}}subscribe(n,e,i){let r=n,o=e||(()=>null),s=i;if(n&&typeof n=="object"){let l=n;r=l.next?.bind(l),o=l.error?.bind(l),s=l.complete?.bind(l)}this.__isAsync&&(o=this.wrapInTimeout(o),r&&(r=this.wrapInTimeout(r)),s&&(s=this.wrapInTimeout(s)));let a=super.subscribe({next:r,error:o,complete:s});return n instanceof ae&&n.add(a),a}wrapInTimeout(n){return e=>{let i=this.pendingTasks?.add();setTimeout(()=>{try{n(e)}finally{i!==void 0&&this.pendingTasks?.remove(i)}})}}},A=bm;function wc(...t){}function uh(t){let n,e;function i(){t=wc;try{e!==void 0&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(e),n!==void 0&&clearTimeout(n)}catch{}}return n=setTimeout(()=>{t(),i()}),typeof requestAnimationFrame=="function"&&(e=requestAnimationFrame(()=>{t(),i()})),()=>i()}function L_(t){return queueMicrotask(()=>t()),()=>{t=wc}}var fh="isAngularZone",ta=fh+"_ID",XI=0,k=class t{hasPendingMacrotasks=!1;hasPendingMicrotasks=!1;isStable=!0;onUnstable=new A(!1);onMicrotaskEmpty=new A(!1);onStable=new A(!1);onError=new A(!1);constructor(n){let{enableLongStackTrace:e=!1,shouldCoalesceEventChangeDetection:i=!1,shouldCoalesceRunChangeDetection:r=!1,scheduleInRootZone:o=F_}=n;if(typeof Zone>"u")throw new I(908,!1);Zone.assertZonePatched();let s=this;s._nesting=0,s._outer=s._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(s._inner=s._inner.fork(new Zone.TaskTrackingZoneSpec)),e&&Zone.longStackTraceZoneSpec&&(s._inner=s._inner.fork(Zone.longStackTraceZoneSpec)),s.shouldCoalesceEventChangeDetection=!r&&i,s.shouldCoalesceRunChangeDetection=r,s.callbackScheduled=!1,s.scheduleInRootZone=o,tM(s)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get(fh)===!0}static assertInAngularZone(){if(!t.isInAngularZone())throw new I(909,!1)}static assertNotInAngularZone(){if(t.isInAngularZone())throw new I(909,!1)}run(n,e,i){return this._inner.run(n,e,i)}runTask(n,e,i,r){let o=this._inner,s=o.scheduleEventTask("NgZoneEvent: "+r,n,JI,wc,wc);try{return o.runTask(s,e,i)}finally{o.cancelTask(s)}}runGuarded(n,e,i){return this._inner.runGuarded(n,e,i)}runOutsideAngular(n){return this._outer.run(n)}},JI={};function mh(t){if(t._nesting==0&&!t.hasPendingMicrotasks&&!t.isStable)try{t._nesting++,t.onMicrotaskEmpty.emit(null)}finally{if(t._nesting--,!t.hasPendingMicrotasks)try{t.runOutsideAngular(()=>t.onStable.emit(null))}finally{t.isStable=!0}}}function eM(t){if(t.isCheckStableRunning||t.callbackScheduled)return;t.callbackScheduled=!0;function n(){uh(()=>{t.callbackScheduled=!1,_m(t),t.isCheckStableRunning=!0,mh(t),t.isCheckStableRunning=!1})}t.scheduleInRootZone?Zone.root.run(()=>{n()}):t._outer.run(()=>{n()}),_m(t)}function tM(t){let n=()=>{eM(t)},e=XI++;t._inner=t._inner.fork({name:"angular",properties:{[fh]:!0,[ta]:e,[ta+e]:!0},onInvokeTask:(i,r,o,s,a,l)=>{if(nM(l))return i.invokeTask(o,s,a,l);try{return Qb(t),i.invokeTask(o,s,a,l)}finally{(t.shouldCoalesceEventChangeDetection&&s.type==="eventTask"||t.shouldCoalesceRunChangeDetection)&&n(),Kb(t)}},onInvoke:(i,r,o,s,a,l,c)=>{try{return Qb(t),i.invoke(o,s,a,l,c)}finally{t.shouldCoalesceRunChangeDetection&&!t.callbackScheduled&&!iM(l)&&n(),Kb(t)}},onHasTask:(i,r,o,s)=>{i.hasTask(o,s),r===o&&(s.change=="microTask"?(t._hasPendingMicrotasks=s.microTask,_m(t),mh(t)):s.change=="macroTask"&&(t.hasPendingMacrotasks=s.macroTask))},onHandleError:(i,r,o,s)=>(i.handleError(o,s),t.runOutsideAngular(()=>t.onError.emit(s)),!1)})}function _m(t){t._hasPendingMicrotasks||(t.shouldCoalesceEventChangeDetection||t.shouldCoalesceRunChangeDetection)&&t.callbackScheduled===!0?t.hasPendingMicrotasks=!0:t.hasPendingMicrotasks=!1}function Qb(t){t._nesting++,t.isStable&&(t.isStable=!1,t.onUnstable.emit(null))}function Kb(t){t._nesting--,mh(t)}var na=class{hasPendingMicrotasks=!1;hasPendingMacrotasks=!1;isStable=!0;onUnstable=new A;onMicrotaskEmpty=new A;onStable=new A;onError=new A;run(n,e,i){return n.apply(e,i)}runGuarded(n,e,i){return n.apply(e,i)}runOutsideAngular(n){return n()}runTask(n,e,i,r){return n.apply(e,i)}};function nM(t){return j_(t,"__ignore_ng_zone__")}function iM(t){return j_(t,"__scheduler_tick__")}function j_(t,n){return!Array.isArray(t)||t.length!==1?!1:t[0]?.data?.[n]===!0}var Dt=class{_console=console;handleError(n){this._console.error("ERROR",n)}},qt=new v("",{factory:()=>{let t=d(k),n=d(we),e;return i=>{t.runOutsideAngular(()=>{n.destroyed&&!e?setTimeout(()=>{throw i}):(e??=n.get(Dt),e.handleError(i))})}}}),B_={provide:Vi,useValue:()=>{let t=d(Dt,{optional:!0})},multi:!0},rM=new v("",{factory:()=>{let t=d(V).defaultView;if(!t)return;let n=d(qt),e=o=>{n(o.reason),o.preventDefault()},i=o=>{o.error?n(o.error):n(new Error(o.message,{cause:o})),o.preventDefault()},r=()=>{t.addEventListener("unhandledrejection",e),t.addEventListener("error",i)};typeof Zone<"u"?Zone.root.run(r):r(),d(pt).onDestroy(()=>{t.removeEventListener("error",i),t.removeEventListener("unhandledrejection",e)})}});function hh(){return Pn([a_(()=>{d(rM)})])}function F(t,n){let[e,i,r]=Gf(t,n?.equal),o=e,s=o[Ye];return o.set=i,o.update=r,o.asReadonly=Hc.bind(o),o}function Hc(){let t=this[Ye];if(t.readonlyFn===void 0){let n=()=>this();n[Ye]=t,t.readonlyFn=n}return t.readonlyFn}var Io=(()=>{class t{view;node;constructor(e,i){this.view=e,this.node=i}static __NG_ELEMENT_ID__=oM}return t})();function oM(){return new Io(Y(),at())}var On=class{},ma=new v("",{factory:()=>!0});var ph=new v(""),Mo=(()=>{class t{internalPendingTasks=d(hi);scheduler=d(On);errorHandler=d(qt);add(){let e=this.internalPendingTasks.add();return()=>{this.internalPendingTasks.has(e)&&(this.scheduler.notify(11),this.internalPendingTasks.remove(e))}}run(e){let i=this.add();e().catch(this.errorHandler).finally(i)}static \u0275prov=b({token:t,providedIn:"root",factory:()=>new t})}return t})(),Uc=(()=>{class t{static \u0275prov=b({token:t,providedIn:"root",factory:()=>new ym})}return t})(),ym=class{dirtyEffectCount=0;queues=new Map;add(n){this.enqueue(n),this.schedule(n)}schedule(n){n.dirty&&this.dirtyEffectCount++}remove(n){let e=n.zone,i=this.queues.get(e);i.has(n)&&(i.delete(n),n.dirty&&this.dirtyEffectCount--)}enqueue(n){let e=n.zone;this.queues.has(e)||this.queues.set(e,new Set);let i=this.queues.get(e);i.has(n)||i.add(n)}flush(){for(;this.dirtyEffectCount>0;){let n=!1;for(let[e,i]of this.queues)e===null?n||=this.flushQueue(i):n||=e.run(()=>this.flushQueue(i));n||(this.dirtyEffectCount=0)}}flushQueue(n){let e=!1;for(let i of n)i.dirty&&(this.dirtyEffectCount--,e=!0,i.run());return e}},Cc=class{[Ye];constructor(n){this[Ye]=n}destroy(){this[Ye].destroy()}};function Yt(t,n){let e=n?.injector??d(W),i=n?.manualCleanup!==!0?e.get(pt):null,r,o=e.get(Io,null,{optional:!0}),s=e.get(On);return o!==null?(r=lM(o.view,s,t),i instanceof yc&&i._lView===o.view&&(i=null)):r=cM(t,e.get(Uc),s),r.injector=e,i!==null&&(r.onDestroyFns=[i.onDestroy(()=>r.destroy())]),new Cc(r)}var V_=X(_({},Yf),{cleanupFns:void 0,zone:null,onDestroyFns:null,run(){let t=ea(!1);try{Zf(this)}finally{ea(t)}},cleanup(){if(!this.cleanupFns?.length)return;let t=$(null);try{for(;this.cleanupFns.length;)this.cleanupFns.pop()()}finally{this.cleanupFns=[],$(t)}}}),sM=X(_({},V_),{consumerMarkedDirty(){this.scheduler.schedule(this),this.notifier.notify(12)},destroy(){if(ki(this),this.onDestroyFns!==null)for(let t of this.onDestroyFns)t();this.cleanup(),this.scheduler.remove(this)}}),aM=X(_({},V_),{consumerMarkedDirty(){this.view[te]|=8192,Rr(this.view),this.notifier.notify(13)},destroy(){if(ki(this),this.onDestroyFns!==null)for(let t of this.onDestroyFns)t();this.cleanup(),this.view[Li]?.delete(this)}});function lM(t,n,e){let i=Object.create(aM);return i.view=t,i.zone=typeof Zone<"u"?Zone.current:null,i.notifier=n,i.fn=H_(i,e),t[Li]??=new Set,t[Li].add(i),i.consumerMarkedDirty(i),i}function cM(t,n,e){let i=Object.create(sM);return i.fn=H_(i,t),i.scheduler=n,i.notifier=e,i.zone=typeof Zone<"u"?Zone.current:null,i.scheduler.add(i),i.notifier.notify(12),i}function H_(t,n){return()=>{n(e=>(t.cleanupFns??=[]).push(e))}}function Da(t){return{toString:t}.toString()}function pM(t){return typeof t=="function"}function Cy(t,n,e,i){n!==null?n.applyValueToInputSignal(n,i):t[e]=i}var Kc=class{previousValue;currentValue;firstChange;constructor(n,e,i){this.previousValue=n,this.currentValue=e,this.firstChange=i}isFirstChange(){return this.firstChange}},He=(()=>{let t=()=>Dy;return t.ngInherit=!0,t})();function Dy(t){return t.type.prototype.ngOnChanges&&(t.setInput=vM),gM}function gM(){let t=xy(this),n=t?.current;if(n){let e=t.previous;if(e===Bi)t.previous=n;else for(let i in n)e[i]=n[i];t.current=null,this.ngOnChanges(n)}}function vM(t,n,e,i,r){let o=this.declaredInputs[i],s=xy(t)||bM(t,{previous:Bi,current:null}),a=s.current||(s.current={}),l=s.previous,c=l[o];a[o]=new Kc(c&&c.currentValue,e,l===Bi),Cy(t,n,r,e)}var Ey="__ngSimpleChanges__";function xy(t){return t[Ey]||null}function bM(t,n){return t[Ey]=n}var U_=[];var Ce=function(t,n=null,e){for(let i=0;i<U_.length;i++){let r=U_[i];r(t,n,e)}},pe=(function(t){return t[t.TemplateCreateStart=0]="TemplateCreateStart",t[t.TemplateCreateEnd=1]="TemplateCreateEnd",t[t.TemplateUpdateStart=2]="TemplateUpdateStart",t[t.TemplateUpdateEnd=3]="TemplateUpdateEnd",t[t.LifecycleHookStart=4]="LifecycleHookStart",t[t.LifecycleHookEnd=5]="LifecycleHookEnd",t[t.OutputStart=6]="OutputStart",t[t.OutputEnd=7]="OutputEnd",t[t.BootstrapApplicationStart=8]="BootstrapApplicationStart",t[t.BootstrapApplicationEnd=9]="BootstrapApplicationEnd",t[t.BootstrapComponentStart=10]="BootstrapComponentStart",t[t.BootstrapComponentEnd=11]="BootstrapComponentEnd",t[t.ChangeDetectionStart=12]="ChangeDetectionStart",t[t.ChangeDetectionEnd=13]="ChangeDetectionEnd",t[t.ChangeDetectionSyncStart=14]="ChangeDetectionSyncStart",t[t.ChangeDetectionSyncEnd=15]="ChangeDetectionSyncEnd",t[t.AfterRenderHooksStart=16]="AfterRenderHooksStart",t[t.AfterRenderHooksEnd=17]="AfterRenderHooksEnd",t[t.ComponentStart=18]="ComponentStart",t[t.ComponentEnd=19]="ComponentEnd",t[t.DeferBlockStateStart=20]="DeferBlockStateStart",t[t.DeferBlockStateEnd=21]="DeferBlockStateEnd",t[t.DynamicComponentStart=22]="DynamicComponentStart",t[t.DynamicComponentEnd=23]="DynamicComponentEnd",t[t.HostBindingsUpdateStart=24]="HostBindingsUpdateStart",t[t.HostBindingsUpdateEnd=25]="HostBindingsUpdateEnd",t})(pe||{});function _M(t,n,e){let{ngOnChanges:i,ngOnInit:r,ngDoCheck:o}=n.type.prototype;if(i){let s=Dy(n);(e.preOrderHooks??=[]).push(t,s),(e.preOrderCheckHooks??=[]).push(t,s)}r&&(e.preOrderHooks??=[]).push(0-t,r),o&&((e.preOrderHooks??=[]).push(t,o),(e.preOrderCheckHooks??=[]).push(t,o))}function Iy(t,n){for(let e=n.directiveStart,i=n.directiveEnd;e<i;e++){let o=t.data[e].type.prototype,{ngAfterContentInit:s,ngAfterContentChecked:a,ngAfterViewInit:l,ngAfterViewChecked:c,ngOnDestroy:u}=o;s&&(t.contentHooks??=[]).push(-e,s),a&&((t.contentHooks??=[]).push(e,a),(t.contentCheckHooks??=[]).push(e,a)),l&&(t.viewHooks??=[]).push(-e,l),c&&((t.viewHooks??=[]).push(e,c),(t.viewCheckHooks??=[]).push(e,c)),u!=null&&(t.destroyHooks??=[]).push(e,u)}}function Gc(t,n,e){My(t,n,3,e)}function qc(t,n,e,i){(t[te]&3)===e&&My(t,n,e,i)}function gh(t,n){let e=t[te];(e&3)===n&&(e&=16383,e+=1,t[te]=e)}function My(t,n,e,i){let r=i!==void 0?t[Sr]&65535:0,o=i??-1,s=n.length-1,a=0;for(let l=r;l<s;l++)if(typeof n[l+1]=="number"){if(a=n[l],i!=null&&a>=i)break}else n[l]<0&&(t[Sr]+=65536),(a<o||o==-1)&&(yM(t,e,n,l),t[Sr]=(t[Sr]&4294901760)+l+2),l++}function z_(t,n){Ce(pe.LifecycleHookStart,t,n);let e=$(null);try{n.call(t)}finally{$(e),Ce(pe.LifecycleHookEnd,t,n)}}function yM(t,n,e,i){let r=e[i]<0,o=e[i+1],s=r?-e[i]:e[i],a=t[s];r?t[te]>>14<t[Sr]>>16&&(t[te]&3)===n&&(t[te]+=16384,z_(a,o)):z_(a,o)}var To=-1,Or=class{factory;name;injectImpl;resolving=!1;canSeeViewProviders;multi;componentProviders;index;providerFactory;constructor(n,e,i,r){this.factory=n,this.name=r,this.canSeeViewProviders=e,this.injectImpl=i}};function wM(t){return(t.flags&8)!==0}function CM(t){return(t.flags&16)!==0}function DM(t,n,e){let i=0;for(;i<e.length;){let r=e[i];if(typeof r=="number"){if(r!==0)break;i++;let o=e[i++],s=e[i++],a=e[i++];t.setAttribute(n,s,a,o)}else{let o=r,s=e[++i];EM(o)?t.setProperty(n,o,s):t.setAttribute(n,o,s),i++}}return i}function Sy(t){return t===3||t===4||t===6}function EM(t){return t.charCodeAt(0)===64}function ko(t,n){if(!(n===null||n.length===0))if(t===null||t.length===0)t=n.slice();else{let e=-1;for(let i=0;i<n.length;i++){let r=n[i];typeof r=="number"?e=r:e===0||(e===-1||e===2?$_(t,e,r,null,n[++i]):$_(t,e,r,null,null))}}return t}function $_(t,n,e,i,r){let o=0,s=t.length;if(n===-1)s=-1;else for(;o<t.length;){let a=t[o++];if(typeof a=="number"){if(a===n){s=-1;break}else if(a>n){s=o-1;break}}}for(;o<t.length;){let a=t[o];if(typeof a=="number")break;if(a===e){r!==null&&(t[o+1]=r);return}o++,r!==null&&o++}s!==-1&&(t.splice(s,0,n),o=s+1),t.splice(o++,0,e),r!==null&&t.splice(o++,0,r)}function Ty(t){return t!==To}function Xc(t){return t&32767}function xM(t){return t>>16}function Jc(t,n){let e=xM(t),i=n;for(;e>0;)i=i[Mr],e--;return i}var Ih=!0;function ed(t){let n=Ih;return Ih=t,n}var IM=256,ky=IM-1,Ay=5,MM=0,Un={};function SM(t,n,e){let i;typeof e=="string"?i=e.charCodeAt(0)||0:e.hasOwnProperty(xr)&&(i=e[xr]),i==null&&(i=e[xr]=MM++);let r=i&ky,o=1<<r;n.data[t+(r>>Ay)]|=o}function td(t,n){let e=Ry(t,n);if(e!==-1)return e;let i=n[G];i.firstCreatePass&&(t.injectorIndex=n.length,vh(i.data,t),vh(n,null),vh(i.blueprint,null));let r=lp(t,n),o=t.injectorIndex;if(Ty(r)){let s=Xc(r),a=Jc(r,n),l=a[G].data;for(let c=0;c<8;c++)n[o+c]=a[s+c]|l[s+c]}return n[o+8]=r,o}function vh(t,n){t.push(0,0,0,0,0,0,0,0,n)}function Ry(t,n){return t.injectorIndex===-1||t.parent&&t.parent.injectorIndex===t.injectorIndex||n[t.injectorIndex+8]===null?-1:t.injectorIndex}function lp(t,n){if(t.parent&&t.parent.injectorIndex!==-1)return t.parent.injectorIndex;let e=0,i=null,r=n;for(;r!==null;){if(i=Ly(r),i===null)return To;if(e++,r=r[Mr],i.injectorIndex!==-1)return i.injectorIndex|e<<16}return To}function Mh(t,n,e){SM(t,n,e)}function TM(t,n){if(n==="class")return t.classes;if(n==="style")return t.styles;let e=t.attrs;if(e){let i=e.length,r=0;for(;r<i;){let o=e[r];if(Sy(o))break;if(o===0)r=r+2;else if(typeof o=="number")for(r++;r<i&&typeof e[r]=="string";)r++;else{if(o===n)return e[r+1];r=r+2}}}return null}function Ny(t,n,e){if(e&8||t!==void 0)return t;Sc(n,"NodeInjector")}function Oy(t,n,e,i){if(e&8&&i===void 0&&(i=null),(e&3)===0){let r=t[di],o=At(void 0);try{return r?r.get(n,i,e&8):Am(n,i,e&8)}finally{At(o)}}return Ny(i,n,e)}function Fy(t,n,e,i=0,r){if(t!==null){if(n[te]&2048&&!(i&2)){let s=NM(t,n,e,i,Un);if(s!==Un)return s}let o=Py(t,n,e,i,Un);if(o!==Un)return o}return Oy(n,e,i,r)}function Py(t,n,e,i,r){let o=AM(e);if(typeof o=="function"){if(!lh(n,t,i))return i&1?Ny(r,e,i):Oy(n,e,i,r);try{let s;if(s=o(i),s==null&&!(i&8))Sc(e);else return s}finally{ch()}}else if(typeof o=="number"){let s=null,a=Ry(t,n),l=To,c=i&1?n[Nt][Rt]:null;for((a===-1||i&4)&&(l=a===-1?lp(t,n):n[a+8],l===To||!G_(i,!1)?a=-1:(s=n[G],a=Xc(l),n=Jc(l,n)));a!==-1;){let u=n[G];if(W_(o,a,u.data)){let f=kM(a,n,e,s,i,c);if(f!==Un)return f}l=n[a+8],l!==To&&G_(i,n[G].data[a+8]===c)&&W_(o,a,n)?(s=u,a=Xc(l),n=Jc(l,n)):a=-1}}return r}function kM(t,n,e,i,r,o){let s=n[G],a=s.data[t+8],l=i==null?Bn(a)&&Ih:i!=s&&(a.type&3)!==0,c=r&1&&o===a,u=Yc(a,s,e,l,c);return u!==null?va(n,s,u,a,r):Un}function Yc(t,n,e,i,r){let o=t.providerIndexes,s=n.data,a=o&1048575,l=t.directiveStart,c=t.directiveEnd,u=o>>20,f=i?a:a+u,m=r?a+u:c;for(let h=f;h<m;h++){let y=s[h];if(h<l&&e===y||h>=l&&y.type===e)return h}if(r){let h=s[l];if(h&&Vn(h)&&h.type===e)return l}return null}function va(t,n,e,i,r){let o=t[e],s=n.data;if(o instanceof Or){let a=o;if(a.resolving)throw km("");let l=ed(a.canSeeViewProviders);a.resolving=!0;let c=s[e].type||s[e],u,f=a.injectImpl?At(a.injectImpl):null,m=lh(t,i,0);try{o=t[e]=a.factory(void 0,r,s,t,i),n.firstCreatePass&&e>=i.directiveStart&&_M(e,s[e],n)}finally{f!==null&&At(f),ed(l),a.resolving=!1,ch()}}return o}function AM(t){if(typeof t=="string")return t.charCodeAt(0)||0;let n=t.hasOwnProperty(xr)?t[xr]:void 0;return typeof n=="number"?n>=0?n&ky:RM:n}function W_(t,n,e){let i=1<<t;return!!(e[n+(t>>Ay)]&i)}function G_(t,n){return!(t&2)&&!(t&1&&n)}var Nr=class{_tNode;_lView;constructor(n,e){this._tNode=n,this._lView=e}get(n,e,i){return Fy(this._tNode,this._lView,n,Cr(i),e)}};function RM(){return new Nr(at(),Y())}function Ge(t){return Da(()=>{let n=t.prototype.constructor,e=n[Xs]||Sh(n),i=Object.prototype,r=Object.getPrototypeOf(t.prototype).constructor;for(;r&&r!==i;){let o=r[Xs]||Sh(r);if(o&&o!==e)return o;r=Object.getPrototypeOf(r)}return o=>new o})}function Sh(t){return wm(t)?()=>{let n=Sh(ht(t));return n&&n()}:Pi(t)}function NM(t,n,e,i,r){let o=t,s=n;for(;o!==null&&s!==null&&s[te]&2048&&!Do(s);){let a=Py(o,s,e,i|2,Un);if(a!==Un)return a;let l=o.parent;if(!l){let c=s[Bm];if(c){let u=c.get(e,Un,i&-5);if(u!==Un)return u}l=Ly(s),s=s[Mr]}o=l}return r}function Ly(t){let n=t[G],e=n.type;return e===2?n.declTNode:e===1?t[Rt]:null}function hd(t){return TM(at(),t)}function OM(){return Po(at(),Y())}function Po(t,n){return new R(on(t,n))}var R=(()=>{class t{nativeElement;constructor(e){this.nativeElement=e}static __NG_ELEMENT_ID__=OM}return t})();function jy(t){return t instanceof R?t.nativeElement:t}function FM(){return this._results[Symbol.iterator]()}var pi=class{_emitDistinctChangesOnly;dirty=!0;_onDirty=void 0;_results=[];_changesDetected=!1;_changes=void 0;length=0;first=void 0;last=void 0;get changes(){return this._changes??=new C}constructor(n=!1){this._emitDistinctChangesOnly=n}get(n){return this._results[n]}map(n){return this._results.map(n)}filter(n){return this._results.filter(n)}find(n){return this._results.find(n)}reduce(n,e){return this._results.reduce(n,e)}forEach(n){this._results.forEach(n)}some(n){return this._results.some(n)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(n,e){this.dirty=!1;let i=r_(n);(this._changesDetected=!i_(this._results,i,e))&&(this._results=i,this.length=i.length,this.last=i[this.length-1],this.first=i[0])}notifyOnChanges(){this._changes!==void 0&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.next(this)}onDirty(n){this._onDirty=n}setDirty(){this.dirty=!0,this._onDirty?.()}destroy(){this._changes!==void 0&&(this._changes.complete(),this._changes.unsubscribe())}[Symbol.iterator]=FM};function By(t){return(t.flags&128)===128}var cp=(function(t){return t[t.OnPush=0]="OnPush",t[t.Eager=1]="Eager",t[t.Default=1]="Default",t})(cp||{}),Vy=new Map,PM=0;function LM(){return PM++}function jM(t){Vy.set(t[ui],t)}function Th(t){Vy.delete(t[ui])}var q_="__ngContext__";function Ao(t,n){fi(n)?(t[q_]=n[ui],jM(n)):t[q_]=n}function Hy(t){return zy(t[Co])}function Uy(t){return zy(t[nn])}function zy(t){for(;t!==null&&!bn(t);)t=t[nn];return t}var BM;function dp(t){BM=t}var qi=new v("",{factory:()=>VM}),VM="ng";var pd=new v(""),Lr=new v("",{providedIn:"platform",factory:()=>"unknown"}),Ea=new v(""),Lo=new v("",{factory:()=>d(V).body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});var $y="r";var Wy="di";var Gy=!1,qy=new v("",{factory:()=>Gy});var gd=new v("");var HM=(t,n,e,i)=>{};function UM(t,n,e,i){HM(t,n,e,i)}function vd(t){return(t.flags&32)===32}var zM=()=>null;function Yy(t,n,e=!1){return zM(t,n,e)}function Zy(t,n){let e=t.contentQueries;if(e!==null){let i=$(null);try{for(let r=0;r<e.length;r+=2){let o=e[r],s=e[r+1];if(s!==-1){let a=t.data[s];ua(o),a.contentQueries(2,n[s],s)}}}finally{$(i)}}}function kh(t,n,e){ua(0);let i=$(null);try{n(t,e)}finally{$(i)}}function Qy(t,n,e){if(Hm(n)){let i=$(null);try{let r=n.directiveStart,o=n.directiveEnd;for(let s=r;s<o;s++){let a=t.data[s];if(a.contentQueries){let l=e[s];a.contentQueries(1,l,s)}}}finally{$(i)}}}var yn=(function(t){return t[t.Emulated=0]="Emulated",t[t.None=2]="None",t[t.ShadowDom=3]="ShadowDom",t[t.ExperimentalIsolatedShadowDom=4]="ExperimentalIsolatedShadowDom",t})(yn||{});var zc;function $M(){if(zc===void 0&&(zc=null,bo.trustedTypes))try{zc=bo.trustedTypes.createPolicy("angular",{createHTML:t=>t,createScript:t=>t,createScriptURL:t=>t})}catch{}return zc}function bd(t){return $M()?.createHTML(t)||t}var gi=class{changingThisBreaksApplicationSecurity;constructor(n){this.changingThisBreaksApplicationSecurity=n}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${Dc})`}},Ah=class extends gi{getTypeName(){return"HTML"}},Rh=class extends gi{getTypeName(){return"Style"}},Nh=class extends gi{getTypeName(){return"Script"}},Oh=class extends gi{getTypeName(){return"URL"}},Fh=class extends gi{getTypeName(){return"ResourceURL"}};function wn(t){return t instanceof gi?t.changingThisBreaksApplicationSecurity:t}function jr(t,n){let e=Ky(t);if(e!=null&&e!==n){if(e==="ResourceURL"&&n==="URL")return!0;throw new Error(`Required a safe ${n}, got a ${e} (see ${Dc})`)}return e===n}function Ky(t){return t instanceof gi&&t.getTypeName()||null}function up(t){return new Ah(t)}function fp(t){return new Rh(t)}function mp(t){return new Nh(t)}function hp(t){return new Oh(t)}function pp(t){return new Fh(t)}function WM(t){let n=new Lh(t);return GM()?new Ph(n):n}var Ph=class{inertDocumentHelper;constructor(n){this.inertDocumentHelper=n}getInertBodyElement(n){n="<body><remove></remove>"+n;try{let e=new window.DOMParser().parseFromString(bd(n),"text/html").body;return e===null?this.inertDocumentHelper.getInertBodyElement(n):(e.firstChild?.remove(),e)}catch{return null}}},Lh=class{defaultDoc;inertDocument;constructor(n){this.defaultDoc=n,this.inertDocument=this.defaultDoc.implementation.createHTMLDocument("sanitization-inert")}getInertBodyElement(n){let e=this.inertDocument.createElement("template");return e.innerHTML=bd(n),e}};function GM(){try{return!!new window.DOMParser().parseFromString(bd(""),"text/html")}catch{return!1}}var qM=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;function _d(t){return t=String(t),t.match(qM)?t:"unsafe:"+t}function vi(t){let n={};for(let e of t.split(","))n[e]=!0;return n}function xa(...t){let n={};for(let e of t)for(let i in e)e.hasOwnProperty(i)&&(n[i]=!0);return n}var Xy=vi("area,br,col,hr,img,wbr"),Jy=vi("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),ew=vi("rp,rt"),YM=xa(ew,Jy),ZM=xa(Jy,vi("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")),QM=xa(ew,vi("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")),Y_=xa(Xy,ZM,QM,YM),tw=vi("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),KM=vi("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,srcset,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"),XM=vi("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext"),JM=xa(tw,KM,XM),eS=vi("script,style,template");var jh=class{sanitizedSomething=!1;buf=[];sanitizeChildren(n){let e=n.firstChild,i=!0,r=[];for(;e;){if(e.nodeType===Node.ELEMENT_NODE?i=this.startElement(e):e.nodeType===Node.TEXT_NODE?this.chars(e.nodeValue):this.sanitizedSomething=!0,i&&e.firstChild){r.push(e),e=iS(e);continue}for(;e;){e.nodeType===Node.ELEMENT_NODE&&this.endElement(e);let o=nS(e);if(o){e=o;break}e=r.pop()}}return this.buf.join("")}startElement(n){let e=Z_(n).toLowerCase();if(!Y_.hasOwnProperty(e))return this.sanitizedSomething=!0,!eS.hasOwnProperty(e);this.buf.push("<"),this.buf.push(e);let i=n.attributes;for(let r=0;r<i.length;r++){let o=i.item(r),s=o.name,a=s.toLowerCase();if(!JM.hasOwnProperty(a)){this.sanitizedSomething=!0;continue}let l=o.value;tw[a]&&(l=_d(l)),this.buf.push(" ",s,'="',Q_(l),'"')}return this.buf.push(">"),!0}endElement(n){let e=Z_(n).toLowerCase();Y_.hasOwnProperty(e)&&!Xy.hasOwnProperty(e)&&(this.buf.push("</"),this.buf.push(e),this.buf.push(">"))}chars(n){this.buf.push(Q_(n))}};function tS(t,n){return(t.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY)!==Node.DOCUMENT_POSITION_CONTAINED_BY}function nS(t){let n=t.nextSibling;if(n&&t!==n.previousSibling)throw nw(n);return n}function iS(t){let n=t.firstChild;if(n&&tS(t,n))throw nw(n);return n}function Z_(t){let n=t.nodeName;return typeof n=="string"?n:"FORM"}function nw(t){return new Error(`Failed to sanitize html because the element is clobbered: ${t.outerHTML}`)}var rS=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,oS=/([^\#-~ |!])/g;function Q_(t){return t.replace(/&/g,"&amp;").replace(rS,function(n){let e=n.charCodeAt(0),i=n.charCodeAt(1);return"&#"+((e-55296)*1024+(i-56320)+65536)+";"}).replace(oS,function(n){return"&#"+n.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}var $c;function gp(t,n){let e=null;try{$c=$c||WM(t);let i=n?String(n):"";e=$c.getInertBodyElement(i);let r=5,o=i;do{if(r===0)throw new Error("Failed to sanitize html because the input is unstable");r--,i=o,o=e.innerHTML,e=$c.getInertBodyElement(i)}while(i!==o);let a=new jh().sanitizeChildren(K_(e)||e);return bd(a)}finally{if(e){let i=K_(e)||e;for(;i.firstChild;)i.firstChild.remove()}}}function K_(t){return"content"in t&&sS(t)?t.content:null}function sS(t){return t.nodeType===Node.ELEMENT_NODE&&t.nodeName==="TEMPLATE"}function aS(t,n){return t.createText(n)}function lS(t,n,e){t.setValue(n,e)}function iw(t,n,e){return t.createElement(n,e)}function nd(t,n,e,i,r){t.insertBefore(n,e,i,r)}function rw(t,n,e){t.appendChild(n,e)}function X_(t,n,e,i,r){i!==null?nd(t,n,e,i,r):rw(t,n,e)}function ow(t,n,e,i){t.removeChild(null,n,e,i)}function cS(t,n,e){t.setAttribute(n,"style",e)}function dS(t,n,e){e===""?t.removeAttribute(n,"class"):t.setAttribute(n,"class",e)}function sw(t,n,e){let{mergedAttrs:i,classes:r,styles:o}=e;i!==null&&DM(t,n,i),r!==null&&dS(t,n,r),o!==null&&cS(t,n,o)}var vt=(function(t){return t[t.NONE=0]="NONE",t[t.HTML=1]="HTML",t[t.STYLE=2]="STYLE",t[t.SCRIPT=3]="SCRIPT",t[t.URL=4]="URL",t[t.RESOURCE_URL=5]="RESOURCE_URL",t})(vt||{});function aw(t){return t instanceof Function?t():t}function uS(t,n,e){let i=t.length;for(;;){let r=t.indexOf(n,e);if(r===-1)return r;if(r===0||t.charCodeAt(r-1)<=32){let o=n.length;if(r+o===i||t.charCodeAt(r+o)<=32)return r}e=r+1}}var lw="ng-template";function fS(t,n,e,i){let r=0;if(i){for(;r<n.length&&typeof n[r]=="string";r+=2)if(n[r]==="class"&&uS(n[r+1].toLowerCase(),e,0)!==-1)return!0}else if(vp(t))return!1;if(r=n.indexOf(1,r),r>-1){let o;for(;++r<n.length&&typeof(o=n[r])=="string";)if(o.toLowerCase()===e)return!0}return!1}function vp(t){return t.type===4&&t.value!==lw}function mS(t,n,e){let i=t.type===4&&!e?lw:t.value;return n===i}function hS(t,n,e){let i=4,r=t.attrs,o=r!==null?vS(r):0,s=!1;for(let a=0;a<n.length;a++){let l=n[a];if(typeof l=="number"){if(!s&&!_n(i)&&!_n(l))return!1;if(s&&_n(l))continue;s=!1,i=l|i&1;continue}if(!s)if(i&4){if(i=2|i&1,l!==""&&!mS(t,l,e)||l===""&&n.length===1){if(_n(i))return!1;s=!0}}else if(i&8){if(r===null||!fS(t,r,l,e)){if(_n(i))return!1;s=!0}}else{let c=n[++a],u=pS(l,r,vp(t),e);if(u===-1){if(_n(i))return!1;s=!0;continue}if(c!==""){let f;if(u>o?f="":f=r[u+1].toLowerCase(),i&2&&c!==f){if(_n(i))return!1;s=!0}}}}return _n(i)||s}function _n(t){return(t&1)===0}function pS(t,n,e,i){if(n===null)return-1;let r=0;if(i||!e){let o=!1;for(;r<n.length;){let s=n[r];if(s===t)return r;if(s===3||s===6)o=!0;else if(s===1||s===2){let a=n[++r];for(;typeof a=="string";)a=n[++r];continue}else{if(s===4)break;if(s===0){r+=4;continue}}r+=o?1:2}return-1}else return bS(n,t)}function cw(t,n,e=!1){for(let i=0;i<n.length;i++)if(hS(t,n[i],e))return!0;return!1}function gS(t){let n=t.attrs;if(n!=null){let e=n.indexOf(5);if((e&1)===0)return n[e+1]}return null}function vS(t){for(let n=0;n<t.length;n++){let e=t[n];if(Sy(e))return n}return t.length}function bS(t,n){let e=t.indexOf(4);if(e>-1)for(e++;e<t.length;){let i=t[e];if(typeof i=="number")return-1;if(i===n)return e;e++}return-1}function _S(t,n){e:for(let e=0;e<n.length;e++){let i=n[e];if(t.length===i.length){for(let r=0;r<t.length;r++)if(t[r]!==i[r])continue e;return!0}}return!1}function J_(t,n){return t?":not("+n.trim()+")":n}function yS(t){let n=t[0],e=1,i=2,r="",o=!1;for(;e<t.length;){let s=t[e];if(typeof s=="string")if(i&2){let a=t[++e];r+="["+s+(a.length>0?'="'+a+'"':"")+"]"}else i&8?r+="."+s:i&4&&(r+=" "+s);else r!==""&&!_n(s)&&(n+=J_(o,r),r=""),i=s,o=o||!_n(i);e++}return r!==""&&(n+=J_(o,r)),n}function wS(t){return t.map(yS).join(",")}function CS(t){let n=[],e=[],i=1,r=2;for(;i<t.length;){let o=t[i];if(typeof o=="string")r===2?o!==""&&n.push(o,t[++i]):r===8&&e.push(o);else{if(!_n(r))break;r=o}i++}return e.length&&n.push(1,...e),n}var jt={};function bp(t,n,e,i,r,o,s,a,l,c,u){let f=Le+i,m=f+r,h=DS(f,m),y=typeof c=="function"?c():c;return h[G]={type:t,blueprint:h,template:e,queries:null,viewQuery:a,declTNode:n,data:h.slice().fill(null,f),bindingStartIndex:f,expandoStartIndex:m,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof o=="function"?o():o,pipeRegistry:typeof s=="function"?s():s,firstChild:null,schemas:l,consts:y,incompleteFirstPass:!1,ssrId:u}}function DS(t,n){let e=[];for(let i=0;i<n;i++)e.push(i<t?null:jt);return e}function ES(t){let n=t.tView;return n===null||n.incompleteFirstPass?t.tView=bp(1,null,t.template,t.decls,t.vars,t.directiveDefs,t.pipeDefs,t.viewQuery,t.schemas,t.consts,t.id):n}function _p(t,n,e,i,r,o,s,a,l,c,u){let f=n.blueprint.slice();return f[vn]=r,f[te]=i|4|128|8|64|1024,(c!==null||t&&t[te]&2048)&&(f[te]|=2048),Gm(f),f[et]=f[Mr]=t,f[We]=e,f[Ln]=s||t&&t[Ln],f[Ee]=a||t&&t[Ee],f[di]=l||t&&t[di]||null,f[Rt]=o,f[ui]=LM(),f[Ir]=u,f[Bm]=c,f[Nt]=n.type==2?t[Nt]:f,f}function xS(t,n,e){let i=on(n,t),r=ES(e),o=t[Ln].rendererFactory,s=yp(t,_p(t,r,null,dw(e),i,n,null,o.createRenderer(i,e),null,null,null));return t[n.index]=s}function dw(t){let n=16;return t.signals?n=4096:t.onPush&&(n=64),n}function uw(t,n,e,i){if(e===0)return-1;let r=n.length;for(let o=0;o<e;o++)n.push(i),t.blueprint.push(i),t.data.push(null);return r}function yp(t,n){return t[Co]?t[jm][nn]=n:t[Co]=n,t[jm]=n,n}function w(t=1){fw(Te(),Y(),mi()+t,!1)}function fw(t,n,e,i){if(!i)if((n[te]&3)===3){let o=t.preOrderCheckHooks;o!==null&&Gc(n,o,e)}else{let o=t.preOrderHooks;o!==null&&qc(n,o,0,e)}$i(e)}var yd=(function(t){return t[t.None=0]="None",t[t.SignalBased=1]="SignalBased",t[t.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",t})(yd||{});function Bh(t,n,e,i){let r=$(null);try{let[o,s,a]=t.inputs[e],l=null;(s&yd.SignalBased)!==0&&(l=n[o][Ye]),l!==null&&l.transformFn!==void 0?i=l.transformFn(i):a!==null&&(i=a.call(n,i)),t.setInput!==null?t.setInput(n,l,i,e,o):Cy(n,l,o,i)}finally{$(r)}}var zn=(function(t){return t[t.Important=1]="Important",t[t.DashCase=2]="DashCase",t})(zn||{}),IS;function wp(t,n){return IS(t,n)}var b$=typeof document<"u"&&typeof document?.documentElement?.getAnimations=="function";var Vh=new WeakMap,ha=new WeakSet;function MS(t,n){let e=Vh.get(t);if(!e||e.length===0)return;let i=n.parentNode,r=n.previousSibling;for(let o=e.length-1;o>=0;o--){let s=e[o],a=s.parentNode;s===n?(e.splice(o,1),ha.add(s),s.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}}))):(r&&s===r||a&&i&&a!==i)&&(e.splice(o,1),s.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}})),s.parentNode?.removeChild(s))}}function SS(t,n){let e=Vh.get(t);e?e.includes(n)||e.push(n):Vh.set(t,[n])}var Fr=new Set,wd=(function(t){return t[t.CHANGE_DETECTION=0]="CHANGE_DETECTION",t[t.AFTER_NEXT_RENDER=1]="AFTER_NEXT_RENDER",t})(wd||{}),Cn=new v(""),ey=new Set;function Wn(t){ey.has(t)||(ey.add(t),performance?.mark?.("mark_feature_usage",{detail:{feature:t}}))}var Cd=(()=>{class t{impl=null;execute(){this.impl?.execute()}static \u0275prov=b({token:t,providedIn:"root",factory:()=>new t})}return t})(),Cp=[0,1,2,3],Dp=(()=>{class t{ngZone=d(k);scheduler=d(On);errorHandler=d(Dt,{optional:!0});sequences=new Set;deferredRegistrations=new Set;executing=!1;constructor(){d(Cn,{optional:!0})}execute(){let e=this.sequences.size>0;e&&Ce(pe.AfterRenderHooksStart),this.executing=!0;for(let i of Cp)for(let r of this.sequences)if(!(r.erroredOrDestroyed||!r.hooks[i]))try{r.pipelinedValue=this.ngZone.runOutsideAngular(()=>this.maybeTrace(()=>{let o=r.hooks[i];return o(r.pipelinedValue)},r.snapshot))}catch(o){r.erroredOrDestroyed=!0,this.errorHandler?.handleError(o)}this.executing=!1;for(let i of this.sequences)i.afterRun(),i.once&&(this.sequences.delete(i),i.destroy());for(let i of this.deferredRegistrations)this.sequences.add(i);this.deferredRegistrations.size>0&&this.scheduler.notify(7),this.deferredRegistrations.clear(),e&&Ce(pe.AfterRenderHooksEnd)}register(e){let{view:i}=e;i!==void 0?((i[Tr]??=[]).push(e),Rr(i),i[te]|=8192):this.executing?this.deferredRegistrations.add(e):this.addSequence(e)}addSequence(e){this.sequences.add(e),this.scheduler.notify(7)}unregister(e){this.executing&&this.sequences.has(e)?(e.erroredOrDestroyed=!0,e.pipelinedValue=void 0,e.once=!0):(this.sequences.delete(e),this.deferredRegistrations.delete(e))}maybeTrace(e,i){return i?i.run(wd.AFTER_NEXT_RENDER,e):e()}static \u0275prov=b({token:t,providedIn:"root",factory:()=>new t})}return t})(),ba=class{impl;hooks;view;once;snapshot;erroredOrDestroyed=!1;pipelinedValue=void 0;unregisterOnDestroy;constructor(n,e,i,r,o,s=null){this.impl=n,this.hooks=e,this.view=i,this.once=r,this.snapshot=s,this.unregisterOnDestroy=o?.onDestroy(()=>this.destroy())}afterRun(){this.erroredOrDestroyed=!1,this.pipelinedValue=void 0,this.snapshot?.dispose(),this.snapshot=null}destroy(){this.impl.unregister(this),this.unregisterOnDestroy?.();let n=this.view?.[Tr];n&&(this.view[Tr]=n.filter(e=>e!==this))}};function Xe(t,n){let e=n?.injector??d(W);return Wn("NgAfterNextRender"),kS(t,e,n,!0)}function TS(t){return t instanceof Function?[void 0,void 0,t,void 0]:[t.earlyRead,t.write,t.mixedReadWrite,t.read]}function kS(t,n,e,i){let r=n.get(Cd);r.impl??=n.get(Dp);let o=n.get(Cn,null,{optional:!0}),s=e?.manualCleanup!==!0?n.get(pt):null,a=n.get(Io,null,{optional:!0}),l=new ba(r.impl,TS(t),a?.view,i,s,o?.snapshot(null));return r.impl.register(l),l}var mw=new v("",{factory:()=>({queue:new Set,isScheduled:!1,scheduler:null,injector:d(we)})});function hw(t,n,e){let i=t.get(mw);if(Array.isArray(n))for(let r of n)i.queue.add(r),e?.detachedLeaveAnimationFns?.push(r);else i.queue.add(n),e?.detachedLeaveAnimationFns?.push(n);i.scheduler&&i.scheduler(t)}function AS(t,n){let e=t.get(mw);if(n.detachedLeaveAnimationFns){for(let i of n.detachedLeaveAnimationFns)e.queue.delete(i);n.detachedLeaveAnimationFns=void 0}}function RS(t,n){for(let[e,i]of n)hw(t,i.animateFns)}function ty(t,n,e,i){let r=t?.[Ui]?.enter;n!==null&&r&&r.has(e.index)&&RS(i,r)}function So(t,n,e,i,r,o,s,a){if(r!=null){let l,c=!1;bn(r)?l=r:fi(r)&&(c=!0,r=r[vn]);let u=rn(r);t===0&&i!==null?(ty(a,i,o,e),s==null?rw(n,i,u):nd(n,i,u,s||null,!0)):t===1&&i!==null?(ty(a,i,o,e),nd(n,i,u,s||null,!0),MS(o,u)):t===2?(a?.[Ui]?.leave?.has(o.index)&&SS(o,u),ha.delete(u),ny(a,o,e,f=>{if(ha.has(u)){ha.delete(u);return}ow(n,u,c,f)})):t===3&&(ha.delete(u),ny(a,o,e,()=>{n.destroyNode(u)})),l!=null&&zS(n,t,e,l,o,i,s)}}function NS(t,n){pw(t,n),n[vn]=null,n[Rt]=null}function OS(t,n,e,i,r,o){i[vn]=r,i[Rt]=n,Ed(t,i,e,1,r,o)}function pw(t,n){n[Ln].changeDetectionScheduler?.notify(9),Ed(t,n,n[Ee],2,null,null)}function FS(t){let n=t[Co];if(!n)return bh(t[G],t);for(;n;){let e=null;if(fi(n))e=n[Co];else{let i=n[je];i&&(e=i)}if(!e){for(;n&&!n[nn]&&n!==t;)fi(n)&&bh(n[G],n),n=n[et];n===null&&(n=t),fi(n)&&bh(n[G],n),e=n&&n[nn]}n=e}}function Ep(t,n){let e=t[kr],i=e.indexOf(n);e.splice(i,1)}function Dd(t,n){if(Ar(n))return;let e=n[Ee];e.destroyNode&&Ed(t,n,e,3,null,null),FS(n)}function bh(t,n){if(Ar(n))return;let e=$(null);try{n[te]&=-129,n[te]|=256,n[Wt]&&ki(n[Wt]),jS(t,n),LS(t,n),n[G].type===1&&n[Ee].destroy();let i=n[Hi];if(i!==null&&bn(n[et])){i!==n[et]&&Ep(i,n);let r=n[jn];r!==null&&r.detachView(t)}Th(n)}finally{$(e)}}function ny(t,n,e,i){let r=t?.[Ui];if(r==null||r.leave==null||!r.leave.has(n.index))return i(!1);t&&Fr.add(t[ui]),hw(e,()=>{if(r.leave&&r.leave.has(n.index)){let s=r.leave.get(n.index),a=[];if(s){for(let l=0;l<s.animateFns.length;l++){let c=s.animateFns[l],{promise:u}=c();a.push(u)}r.detachedLeaveAnimationFns=void 0}r.running=Promise.allSettled(a),PS(t,i)}else t&&Fr.delete(t[ui]),i(!1)},r)}function PS(t,n){let e=t[Ui]?.running;if(e){e.then(()=>{t[Ui].running=void 0,Fr.delete(t[ui]),n(!0)});return}n(!1)}function LS(t,n){let e=t.cleanup,i=n[wo];if(e!==null)for(let s=0;s<e.length-1;s+=2)if(typeof e[s]=="string"){let a=e[s+3];a>=0?i[a]():i[-a].unsubscribe(),s+=2}else{let a=i[e[s+1]];e[s].call(a)}i!==null&&(n[wo]=null);let r=n[ci];if(r!==null){n[ci]=null;for(let s=0;s<r.length;s++){let a=r[s];a()}}let o=n[Li];if(o!==null){n[Li]=null;for(let s of o)s.destroy()}}function jS(t,n){let e;if(t!=null&&(e=t.destroyHooks)!=null)for(let i=0;i<e.length;i+=2){let r=n[e[i]];if(!(r instanceof Or)){let o=e[i+1];if(Array.isArray(o))for(let s=0;s<o.length;s+=2){let a=r[o[s]],l=o[s+1];Ce(pe.LifecycleHookStart,a,l);try{l.call(a)}finally{Ce(pe.LifecycleHookEnd,a,l)}}else{Ce(pe.LifecycleHookStart,r,o);try{o.call(r)}finally{Ce(pe.LifecycleHookEnd,r,o)}}}}}function gw(t,n,e){return BS(t,n.parent,e)}function BS(t,n,e){let i=n;for(;i!==null&&i.type&168;)n=i,i=n.parent;if(i===null)return e[vn];if(Bn(i)){let{encapsulation:r}=t.data[i.directiveStart+i.componentOffset];if(r===yn.None||r===yn.Emulated)return null}return on(i,e)}function vw(t,n,e){return HS(t,n,e)}function VS(t,n,e){return t.type&40?on(t,e):null}var HS=VS,iy;function xp(t,n,e,i){let r=gw(t,i,n),o=n[Ee],s=i.parent||n[Rt],a=vw(s,i,n);if(r!=null)if(Array.isArray(e))for(let l=0;l<e.length;l++)X_(o,r,e[l],a,!1);else X_(o,r,e,a,!1);iy!==void 0&&iy(o,i,n,e,r)}function pa(t,n){if(n!==null){let e=n.type;if(e&3)return on(n,t);if(e&4)return Hh(-1,t[n.index]);if(e&8){let i=n.child;if(i!==null)return pa(t,i);{let r=t[n.index];return bn(r)?Hh(-1,r):rn(r)}}else{if(e&128)return pa(t,n.next);if(e&32)return wp(n,t)()||rn(t[n.index]);{let i=bw(t,n);if(i!==null){if(Array.isArray(i))return i[0];let r=ji(t[Nt]);return pa(r,i)}else return pa(t,n.next)}}}return null}function bw(t,n){if(n!==null){let i=t[Nt][Rt],r=n.projection;return i.projection[r]}return null}function Hh(t,n){let e=je+t+1;if(e<n.length){let i=n[e],r=i[G].firstChild;if(r!==null)return pa(i,r)}return n[zi]}function Ip(t,n,e,i,r,o,s){for(;e!=null;){let a=i[di];if(e.type===128){e=e.next;continue}let l=i[e.index],c=e.type;if(s&&n===0&&(l&&Ao(rn(l),i),e.flags|=2),!vd(e))if(c&8)Ip(t,n,e.child,i,r,o,!1),So(n,t,a,r,l,e,o,i);else if(c&32){let u=wp(e,i),f;for(;f=u();)So(n,t,a,r,f,e,o,i);So(n,t,a,r,l,e,o,i)}else c&16?_w(t,n,i,e,r,o):So(n,t,a,r,l,e,o,i);e=s?e.projectionNext:e.next}}function Ed(t,n,e,i,r,o){Ip(e,i,t.firstChild,n,r,o,!1)}function US(t,n,e){let i=n[Ee],r=gw(t,e,n),o=e.parent||n[Rt],s=vw(o,e,n);_w(i,0,n,e,r,s)}function _w(t,n,e,i,r,o){let s=e[Nt],l=s[Rt].projection[i.projection];if(Array.isArray(l))for(let c=0;c<l.length;c++){let u=l[c];So(n,t,e[di],r,u,i,o,e)}else{let c=l,u=s[et];By(i)&&(c.flags|=128),Ip(t,n,c,u,r,o,!0)}}function zS(t,n,e,i,r,o,s){let a=i[zi],l=rn(i);a!==l&&So(n,t,e,o,a,r,s);for(let c=je;c<i.length;c++){let u=i[c];Ed(u[G],u,t,n,o,a)}}function $S(t,n,e,i,r){if(n)r?t.addClass(e,i):t.removeClass(e,i);else{let o=i.indexOf("-")===-1?void 0:zn.DashCase;r==null?t.removeStyle(e,i,o):(typeof r=="string"&&r.endsWith("!important")&&(r=r.slice(0,-10),o|=zn.Important),t.setStyle(e,i,r,o))}}function yw(t,n,e,i,r){let o=mi(),s=i&2;try{$i(-1),s&&n.length>Le&&fw(t,n,Le,!1);let a=s?pe.TemplateUpdateStart:pe.TemplateCreateStart;Ce(a,r,e),e(i,r)}finally{$i(o);let a=s?pe.TemplateUpdateEnd:pe.TemplateCreateEnd;Ce(a,r,e)}}function Mp(t,n,e){ZS(t,n,e),(e.flags&64)===64&&QS(t,n,e)}function xd(t,n,e=on){let i=n.localNames;if(i!==null){let r=n.index+1;for(let o=0;o<i.length;o+=2){let s=i[o+1],a=s===-1?e(n,t):t[s];t[r++]=a}}}function WS(t,n,e,i){let o=i.get(qy,Gy)||e===yn.ShadowDom||e===yn.ExperimentalIsolatedShadowDom,s=t.selectRootElement(n,o);return GS(s),s}function GS(t){qS(t)}var qS=()=>null;function YS(t){return t==="class"?"className":t==="for"?"htmlFor":t==="formaction"?"formAction":t==="innerHtml"?"innerHTML":t==="readonly"?"readOnly":t==="tabindex"?"tabIndex":t}function ww(t,n,e,i,r,o){let s=n[G];if(Id(t,s,n,e,i)){Bn(t)&&Dw(n,t.index);return}t.type&3&&(e=YS(e)),Cw(t,n,e,i,r,o)}function Cw(t,n,e,i,r,o){if(t.type&3){let s=on(t,n);i=o!=null?o(i,t.value||"",e):i,r.setProperty(s,e,i)}else t.type&12}function Dw(t,n){let e=sn(n,t);e[te]&16||(e[te]|=64)}function ZS(t,n,e){let i=e.directiveStart,r=e.directiveEnd;Bn(e)&&xS(n,e,t.data[i+e.componentOffset]),t.firstCreatePass||td(e,n);let o=e.initialInputs;for(let s=i;s<r;s++){let a=t.data[s],l=va(n,t,s,e);if(Ao(l,n),o!==null&&JS(n,s-i,l,a,e,o),Vn(a)){let c=sn(e.index,n);c[We]=va(n,t,s,e)}}}function QS(t,n,e){let i=e.directiveStart,r=e.directiveEnd,o=e.index,s=M_();try{$i(o);for(let a=i;a<r;a++){let l=t.data[a],c=n[a];Fc(a),(l.hostBindings!==null||l.hostVars!==0||l.hostAttrs!==null)&&KS(l,c)}}finally{$i(-1),Fc(s)}}function KS(t,n){t.hostBindings!==null&&t.hostBindings(1,n)}function Ew(t,n){let e=t.directiveRegistry,i=null;if(e)for(let r=0;r<e.length;r++){let o=e[r];cw(n,o.selectors,!1)&&(i??=[],Vn(o)?i.unshift(o):i.push(o))}return i}function XS(t,n,e,i,r,o){let s=on(t,n);xw(n[Ee],s,o,t.value,e,i,r)}function xw(t,n,e,i,r,o,s){if(o==null)t.removeAttribute(n,r,e);else{let a=s==null?Mc(o):s(o,i||"",r);t.setAttribute(n,r,a,e)}}function JS(t,n,e,i,r,o){let s=o[n];if(s!==null)for(let a=0;a<s.length;a+=2){let l=s[a],c=s[a+1];Bh(i,e,l,c)}}function Iw(t,n,e,i,r){let o=Le+e,s=n[G],a=r(s,n,t,i,e);n[o]=a,Eo(t,!0);let l=t.type===2;return l?(sw(n[Ee],a,t),(y_()===0||ca(t))&&Ao(a,n),w_()):Ao(a,n),Bc()&&(!l||!vd(t))&&xp(s,n,a,t),t}function Mw(t){let n=t;return ih()?rh():(n=n.parent,Eo(n,!1)),n}function eT(t,n){let e=t[di];if(!e)return;let i;try{i=e.get(qt,null)}catch{i=null}i?.(n)}function Id(t,n,e,i,r){let o=t.inputs?.[i],s=t.hostDirectiveInputs?.[i],a=!1;if(s)for(let l=0;l<s.length;l+=2){let c=s[l],u=s[l+1],f=n.data[c];Bh(f,e[c],u,r),a=!0}if(o)for(let l of o){let c=e[l],u=n.data[l];Bh(u,c,i,r),a=!0}return a}function tT(t,n){let e=sn(n,t),i=e[G];nT(i,e);let r=e[vn];r!==null&&e[Ir]===null&&(e[Ir]=Yy(r,e[di])),Ce(pe.ComponentStart);try{Sp(i,e,e[We])}finally{Ce(pe.ComponentEnd,e[We])}}function nT(t,n){for(let e=n.length;e<t.blueprint.length;e++)n.push(t.blueprint[e])}function Sp(t,n,e){Lc(n);try{let i=t.viewQuery;i!==null&&kh(1,i,e);let r=t.template;r!==null&&yw(t,n,r,1,e),t.firstCreatePass&&(t.firstCreatePass=!1),n[jn]?.finishViewCreation(t),t.staticContentQueries&&Zy(t,n),t.staticViewQueries&&kh(2,t.viewQuery,e);let o=t.components;o!==null&&iT(n,o)}catch(i){throw t.firstCreatePass&&(t.incompleteFirstPass=!0,t.firstCreatePass=!1),i}finally{n[te]&=-5,jc()}}function iT(t,n){for(let e=0;e<n.length;e++)tT(t,n[e])}function Ia(t,n,e,i){let r=$(null);try{let o=n.tView,a=t[te]&4096?4096:16,l=_p(t,o,e,a,null,n,null,null,i?.injector??null,i?.embeddedViewInjector??null,i?.dehydratedView??null),c=t[n.index];l[Hi]=c;let u=t[jn];return u!==null&&(l[jn]=u.createEmbeddedView(o)),Sp(o,l,e),l}finally{$(r)}}function Ro(t,n){return!n||n.firstChild===null||By(t)}function _a(t,n,e,i,r=!1){for(;e!==null;){if(e.type===128){e=r?e.projectionNext:e.next;continue}let o=n[e.index];o!==null&&i.push(rn(o)),bn(o)&&Sw(o,i);let s=e.type;if(s&8)_a(t,n,e.child,i);else if(s&32){let a=wp(e,n),l;for(;l=a();)i.push(l)}else if(s&16){let a=bw(n,e);if(Array.isArray(a))i.push(...a);else{let l=ji(n[Nt]);_a(l[G],l,a,i,!0)}}e=r?e.projectionNext:e.next}return i}function Sw(t,n){for(let e=je;e<t.length;e++){let i=t[e],r=i[G].firstChild;r!==null&&_a(i[G],i,r,n)}t[zi]!==t[vn]&&n.push(t[zi])}function Tw(t){if(t[Tr]!==null){for(let n of t[Tr])n.impl.addSequence(n);t[Tr].length=0}}var kw=[];function rT(t){return t[Wt]??oT(t)}function oT(t){let n=kw.pop()??Object.create(aT);return n.lView=t,n}function sT(t){t.lView[Wt]!==t&&(t.lView=null,kw.push(t))}var aT=X(_({},dr),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:t=>{Rr(t.lView)},consumerOnSignalRead(){this.lView[Wt]=this}});function lT(t){let n=t[Wt]??Object.create(cT);return n.lView=t,n}var cT=X(_({},dr),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:t=>{let n=ji(t.lView);for(;n&&!Aw(n[G]);)n=ji(n);n&&qm(n)},consumerOnSignalRead(){this.lView[Wt]=this}});function Aw(t){return t.type!==2}function Rw(t){if(t[Li]===null)return;let n=!0;for(;n;){let e=!1;for(let i of t[Li])i.dirty&&(e=!0,i.zone===null||Zone.current===i.zone?i.run():i.zone.run(()=>i.run()));n=e&&!!(t[te]&8192)}}var dT=100;function Nw(t,n=0){let i=t[Ln].rendererFactory,r=!1;r||i.begin?.();try{uT(t,n)}finally{r||i.end?.()}}function uT(t,n){let e=oh();try{ea(!0),Uh(t,n);let i=0;for(;da(t);){if(i===dT)throw new I(103,!1);i++,Uh(t,1)}}finally{ea(e)}}function fT(t,n,e,i){if(Ar(n))return;let r=n[te],o=!1,s=!1;Lc(n);let a=!0,l=null,c=null;o||(Aw(t)?(c=rT(n),l=Ti(c)):Ll()===null?(a=!1,c=lT(n),l=Ti(c)):n[Wt]&&(ki(n[Wt]),n[Wt]=null));try{Gm(n),E_(t.bindingStartIndex),e!==null&&yw(t,n,e,2,i);let u=(r&3)===3;if(!o)if(u){let h=t.preOrderCheckHooks;h!==null&&Gc(n,h,null)}else{let h=t.preOrderHooks;h!==null&&qc(n,h,0,null),gh(n,0)}if(s||mT(n),Rw(n),Ow(n,0),t.contentQueries!==null&&Zy(t,n),!o)if(u){let h=t.contentCheckHooks;h!==null&&Gc(n,h)}else{let h=t.contentHooks;h!==null&&qc(n,h,1),gh(n,1)}pT(t,n);let f=t.components;f!==null&&Pw(n,f,0);let m=t.viewQuery;if(m!==null&&kh(2,m,i),!o)if(u){let h=t.viewCheckHooks;h!==null&&Gc(n,h)}else{let h=t.viewHooks;h!==null&&qc(n,h,2),gh(n,2)}if(t.firstUpdatePass===!0&&(t.firstUpdatePass=!1),n[Ac]){for(let h of n[Ac])h();n[Ac]=null}o||(Tw(n),n[te]&=-73)}catch(u){throw o||Rr(n),u}finally{c!==null&&(ur(c,l),a&&sT(c)),jc()}}function Ow(t,n){for(let e=Hy(t);e!==null;e=Uy(e))for(let i=je;i<e.length;i++){let r=e[i];Fw(r,n)}}function mT(t){for(let n=Hy(t);n!==null;n=Uy(n)){if(!(n[te]&2))continue;let e=n[kr];for(let i=0;i<e.length;i++){let r=e[i];qm(r)}}}function hT(t,n,e){Ce(pe.ComponentStart);let i=sn(n,t);try{Fw(i,e)}finally{Ce(pe.ComponentEnd,i[We])}}function Fw(t,n){Nc(t)&&Uh(t,n)}function Uh(t,n){let i=t[G],r=t[te],o=t[Wt],s=!!(n===0&&r&16);if(s||=!!(r&64&&n===0),s||=!!(r&1024),s||=!!(o?.dirty&&ao(o)),s||=!1,o&&(o.dirty=!1),t[te]&=-9217,s)fT(i,t,i.template,t[We]);else if(r&8192){let a=$(null);try{Rw(t),Ow(t,1);let l=i.components;l!==null&&Pw(t,l,1),Tw(t)}finally{$(a)}}}function Pw(t,n,e){for(let i=0;i<n.length;i++)hT(t,n[i],e)}function pT(t,n){let e=t.hostBindingOpCodes;if(e!==null)try{for(let i=0;i<e.length;i++){let r=e[i];if(r<0)$i(~r);else{let o=r,s=e[++i],a=e[++i];I_(s,o);let l=n[o];Ce(pe.HostBindingsUpdateStart,l);try{a(2,l)}finally{Ce(pe.HostBindingsUpdateEnd,l)}}}}finally{$i(-1)}}function Tp(t,n){let e=oh()?64:1088;for(t[Ln].changeDetectionScheduler?.notify(n);t;){t[te]|=e;let i=ji(t);if(Do(t)&&!i)return t;t=i}return null}function Lw(t,n,e,i){return[t,!0,0,n,null,i,null,e,null,null]}function jw(t,n){let e=je+n;if(e<t.length)return t[e]}function Ma(t,n,e,i=!0){let r=n[G];if(gT(r,n,t,e),i){let s=Hh(e,t),a=n[Ee],l=a.parentNode(t[zi]);l!==null&&OS(r,t[Rt],a,n,l,s)}let o=n[Ir];o!==null&&o.firstChild!==null&&(o.firstChild=null)}function Bw(t,n){let e=ya(t,n);return e!==void 0&&Dd(e[G],e),e}function ya(t,n){if(t.length<=je)return;let e=je+n,i=t[e];if(i){let r=i[Hi];r!==null&&r!==t&&Ep(r,i),n>0&&(t[e-1][nn]=i[nn]);let o=oa(t,je+n);NS(i[G],i);let s=o[jn];s!==null&&s.detachView(o[G]),i[et]=null,i[nn]=null,i[te]&=-129}return i}function gT(t,n,e,i){let r=je+i,o=e.length;i>0&&(e[r-1][nn]=n),i<o-je?(n[nn]=e[r],Rm(e,je+i,n)):(e.push(n),n[nn]=null),n[et]=e;let s=n[Hi];s!==null&&e!==s&&Vw(s,n);let a=n[jn];a!==null&&a.insertView(t),Oc(n),n[te]|=128}function Vw(t,n){let e=t[kr],i=n[et];if(fi(i))t[te]|=2;else{let r=i[et][Nt];n[Nt]!==r&&(t[te]|=2)}e===null?t[kr]=[n]:e.push(n)}var Wi=class{_lView;_cdRefInjectingView;_appRef=null;_attachedToViewContainer=!1;exhaustive;get rootNodes(){let n=this._lView,e=n[G];return _a(e,n,e.firstChild,[])}constructor(n,e){this._lView=n,this._cdRefInjectingView=e}get context(){return this._lView[We]}set context(n){this._lView[We]=n}get destroyed(){return Ar(this._lView)}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let n=this._lView[et];if(bn(n)){let e=n[la],i=e?e.indexOf(this):-1;i>-1&&(ya(n,i),oa(e,i))}this._attachedToViewContainer=!1}Dd(this._lView[G],this._lView)}onDestroy(n){Ym(this._lView,n)}markForCheck(){Tp(this._cdRefInjectingView||this._lView,4)}detach(){this._lView[te]&=-129}reattach(){Oc(this._lView),this._lView[te]|=128}detectChanges(){this._lView[te]|=1024,Nw(this._lView)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new I(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null;let n=Do(this._lView),e=this._lView[Hi];e!==null&&!n&&Ep(e,this._lView),pw(this._lView[G],this._lView)}attachToAppRef(n){if(this._attachedToViewContainer)throw new I(902,!1);this._appRef=n;let e=Do(this._lView),i=this._lView[Hi];i!==null&&!e&&Vw(i,this._lView),Oc(this._lView)}};var gt=(()=>{class t{_declarationLView;_declarationTContainer;elementRef;static __NG_ELEMENT_ID__=vT;constructor(e,i,r){this._declarationLView=e,this._declarationTContainer=i,this.elementRef=r}get ssrId(){return this._declarationTContainer.tView?.ssrId||null}createEmbeddedView(e,i){return this.createEmbeddedViewImpl(e,i)}createEmbeddedViewImpl(e,i,r){let o=Ia(this._declarationLView,this._declarationTContainer,e,{embeddedViewInjector:i,dehydratedView:r});return new Wi(o)}}return t})();function vT(){return Md(at(),Y())}function Md(t,n){return t.type&4?new gt(n,t,Po(t,n)):null}function jo(t,n,e,i,r){let o=t.data[n];if(o===null)o=bT(t,n,e,i,r),x_()&&(o.flags|=32);else if(o.type&64){o.type=e,o.value=i,o.attrs=r;let s=C_();o.injectorIndex=s===null?-1:s.injectorIndex}return Eo(o,!0),o}function bT(t,n,e,i,r){let o=nh(),s=ih(),a=s?o:o&&o.parent,l=t.data[n]=yT(t,a,e,n,i,r);return _T(t,l,o,s),l}function _T(t,n,e,i){t.firstChild===null&&(t.firstChild=n),e!==null&&(i?e.child==null&&n.parent!==null&&(e.child=n):e.next===null&&(e.next=n,n.prev=e))}function yT(t,n,e,i,r,o){let s=n?n.injectorIndex:-1,a=0;return Jm()&&(a|=128),{type:e,index:i,insertBeforeIndex:null,injectorIndex:s,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,controlDirectiveIndex:-1,customControlIndex:-1,propertyBindings:null,flags:a,providerIndexes:0,value:r,attrs:o,mergedAttrs:null,localNames:null,initialInputs:null,inputs:null,hostDirectiveInputs:null,outputs:null,hostDirectiveOutputs:null,directiveToIndex:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:n,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}function wT(t){let n=t[Vm]??[],i=t[et][Ee],r=[];for(let o of n)o.data[Wy]!==void 0?r.push(o):CT(o,i);t[Vm]=r}function CT(t,n){let e=0,i=t.firstChild;if(i){let r=t.data[$y];for(;e<r;){let o=i.nextSibling;ow(n,i,!1),i=o,e++}}}var DT=()=>null,ET=()=>null;function id(t,n){return DT(t,n)}function Hw(t,n,e){return ET(t,n,e)}var Uw=class{},Sd=class{},zh=class{resolveComponentFactory(n){throw new I(917,!1)}},Sa=class{static NULL=new zh},Ke=class{},ke=(()=>{class t{destroyNode=null;static __NG_ELEMENT_ID__=()=>xT()}return t})();function xT(){let t=Y(),n=at(),e=sn(n.index,t);return(fi(e)?e:t)[Ee]}var zw=(()=>{class t{static \u0275prov=b({token:t,providedIn:"root",factory:()=>null})}return t})();var Zc={},$h=class{injector;parentInjector;constructor(n,e){this.injector=n,this.parentInjector=e}get(n,e,i){let r=this.injector.get(n,Zc,i);return r!==Zc||e===Zc?r:this.parentInjector.get(n,e,i)}};function rd(t,n,e){let i=e?t.styles:null,r=e?t.classes:null,o=0;if(n!==null)for(let s=0;s<n.length;s++){let a=n[s];if(typeof a=="number")o=a;else if(o==1)r=Ec(r,a);else if(o==2){let l=a,c=n[++s];i=Ec(i,l+": "+c+";")}}e?t.styles=i:t.stylesWithoutHost=i,e?t.classes=r:t.classesWithoutHost=r}function xe(t,n=0){let e=Y();if(e===null)return O(t,n);let i=at();return Fy(i,e,ht(t),n)}function kp(){let t="invalid";throw new Error(t)}function $w(t,n,e,i,r){let o=i===null?null:{"":-1},s=r(t,e);if(s!==null){let a=s,l=null,c=null;for(let u of s)if(u.resolveHostDirectives!==null){[a,l,c]=u.resolveHostDirectives(s);break}ST(t,n,e,a,o,l,c)}o!==null&&i!==null&&IT(e,i,o)}function IT(t,n,e){let i=t.localNames=[];for(let r=0;r<n.length;r+=2){let o=e[n[r+1]];if(o==null)throw new I(-301,!1);i.push(n[r],o)}}function MT(t,n,e){n.componentOffset=e,(t.components??=[]).push(n.index)}function ST(t,n,e,i,r,o,s){let a=i.length,l=null;for(let m=0;m<a;m++){let h=i[m];l===null&&Vn(h)&&(l=h,MT(t,e,m)),Mh(td(e,n),t,h.type)}OT(e,t.data.length,a),l?.viewProvidersResolver&&l.viewProvidersResolver(l);for(let m=0;m<a;m++){let h=i[m];h.providersResolver&&h.providersResolver(h)}let c=!1,u=!1,f=uw(t,n,a,null);a>0&&(e.directiveToIndex=new Map);for(let m=0;m<a;m++){let h=i[m];if(e.mergedAttrs=ko(e.mergedAttrs,h.hostAttrs),kT(t,e,n,f,h),NT(f,h,r),s!==null&&s.has(h)){let[x,T]=s.get(h);e.directiveToIndex.set(h.type,[f,x+e.directiveStart,T+e.directiveStart])}else(o===null||!o.has(h))&&e.directiveToIndex.set(h.type,f);h.contentQueries!==null&&(e.flags|=4),(h.hostBindings!==null||h.hostAttrs!==null||h.hostVars!==0)&&(e.flags|=64);let y=h.type.prototype;!c&&(y.ngOnChanges||y.ngOnInit||y.ngDoCheck)&&((t.preOrderHooks??=[]).push(e.index),c=!0),!u&&(y.ngOnChanges||y.ngDoCheck)&&((t.preOrderCheckHooks??=[]).push(e.index),u=!0),f++}TT(t,e,o)}function TT(t,n,e){for(let i=n.directiveStart;i<n.directiveEnd;i++){let r=t.data[i];if(e===null||!e.has(r))ry(0,n,r,i),ry(1,n,r,i),sy(n,i,!1);else{let o=e.get(r);oy(0,n,o,i),oy(1,n,o,i),sy(n,i,!0)}}}function ry(t,n,e,i){let r=t===0?e.inputs:e.outputs;for(let o in r)if(r.hasOwnProperty(o)){let s;t===0?s=n.inputs??={}:s=n.outputs??={},s[o]??=[],s[o].push(i),Ww(n,o)}}function oy(t,n,e,i){let r=t===0?e.inputs:e.outputs;for(let o in r)if(r.hasOwnProperty(o)){let s=r[o],a;t===0?a=n.hostDirectiveInputs??={}:a=n.hostDirectiveOutputs??={},a[s]??=[],a[s].push(i,o),Ww(n,s)}}function Ww(t,n){n==="class"?t.flags|=8:n==="style"&&(t.flags|=16)}function sy(t,n,e){let{attrs:i,inputs:r,hostDirectiveInputs:o}=t;if(i===null||!e&&r===null||e&&o===null||vp(t)){t.initialInputs??=[],t.initialInputs.push(null);return}let s=null,a=0;for(;a<i.length;){let l=i[a];if(l===0){a+=4;continue}else if(l===5){a+=2;continue}else if(typeof l=="number")break;if(!e&&r.hasOwnProperty(l)){let c=r[l];for(let u of c)if(u===n){s??=[],s.push(l,i[a+1]);break}}else if(e&&o.hasOwnProperty(l)){let c=o[l];for(let u=0;u<c.length;u+=2)if(c[u]===n){s??=[],s.push(c[u+1],i[a+1]);break}}a+=2}t.initialInputs??=[],t.initialInputs.push(s)}function kT(t,n,e,i,r){t.data[i]=r;let o=r.factory||(r.factory=Pi(r.type,!0)),s=new Or(o,Vn(r),xe,null);t.blueprint[i]=s,e[i]=s,AT(t,n,i,uw(t,e,r.hostVars,jt),r)}function AT(t,n,e,i,r){let o=r.hostBindings;if(o){let s=t.hostBindingOpCodes;s===null&&(s=t.hostBindingOpCodes=[]);let a=~n.index;RT(s)!=a&&s.push(a),s.push(e,i,o)}}function RT(t){let n=t.length;for(;n>0;){let e=t[--n];if(typeof e=="number"&&e<0)return e}return 0}function NT(t,n,e){if(e){if(n.exportAs)for(let i=0;i<n.exportAs.length;i++)e[n.exportAs[i]]=t;Vn(n)&&(e[""]=t)}}function OT(t,n,e){t.flags|=1,t.directiveStart=n,t.directiveEnd=n+e,t.providerIndexes=n}function Gw(t,n,e,i,r,o,s,a){let l=n[G],c=l.consts,u=Gt(c,s),f=jo(l,t,e,i,u);return o&&$w(l,n,f,Gt(c,a),r),f.mergedAttrs=ko(f.mergedAttrs,f.attrs),f.attrs!==null&&rd(f,f.attrs,!1),f.mergedAttrs!==null&&rd(f,f.mergedAttrs,!0),l.queries!==null&&l.queries.elementStart(l,f),f}function qw(t,n){Iy(t,n),Hm(n)&&t.queries.elementEnd(n)}function FT(t,n,e,i,r,o){let s=n.consts,a=Gt(s,r),l=jo(n,t,e,i,a);if(l.mergedAttrs=ko(l.mergedAttrs,l.attrs),o!=null){let c=Gt(s,o);l.localNames=[];for(let u=0;u<c.length;u+=2)l.localNames.push(c[u],-1)}return l.attrs!==null&&rd(l,l.attrs,!1),l.mergedAttrs!==null&&rd(l,l.mergedAttrs,!0),n.queries!==null&&n.queries.elementStart(n,l),l}function Yw(t,n,e){return t[n]=e}function PT(t,n){return t[n]}function an(t,n,e){if(e===jt)return!1;let i=t[n];return Object.is(i,e)?!1:(t[n]=e,!0)}function Qc(t,n,e){return function i(r){let o=Bn(t)?sn(t.index,n):n;Tp(o,5);let s=n[We],a=ay(n,s,e,r),l=i.__ngNextListenerFn__;for(;l;)a=ay(n,s,l,r)&&a,l=l.__ngNextListenerFn__;return a}}function ay(t,n,e,i){let r=$(null);try{return Ce(pe.OutputStart,n,e),e(i)!==!1}catch(o){return eT(t,o),!1}finally{Ce(pe.OutputEnd,n,e),$(r)}}function Zw(t,n,e,i,r,o,s,a){let l=ca(t),c=!1,u=null;if(!i&&l&&(u=jT(n,e,o,t.index)),u!==null){let f=u.__ngLastListenerFn__||u;f.__ngNextListenerFn__=s,u.__ngLastListenerFn__=s,c=!0}else{let f=on(t,e),m=i?i(f):f;UM(e,m,o,a);let h=r.listen(m,o,a);if(!LT(o)){let y=i?x=>i(rn(x[t.index])):t.index;Qw(y,n,e,o,a,h,!1)}}return c}function LT(t){return t.startsWith("animation")||t.startsWith("transition")}function jT(t,n,e,i){let r=t.cleanup;if(r!=null)for(let o=0;o<r.length-1;o+=2){let s=r[o];if(s===e&&r[o+1]===i){let a=n[wo],l=r[o+2];return a&&a.length>l?a[l]:null}typeof s=="string"&&(o+=2)}return null}function Qw(t,n,e,i,r,o,s){let a=n.firstCreatePass?Qm(n):null,l=Zm(e),c=l.length;l.push(r,o),a&&a.push(i,t,c,(c+1)*(s?-1:1))}function ly(t,n,e,i,r,o){let s=n[e],a=n[G],c=a.data[e].outputs[i],f=s[c].subscribe(o);Qw(t.index,a,n,r,o,f,!0)}var Wh=Symbol("BINDING");function Kw(t){return t.debugInfo?.className||t.type.name||null}var od=class extends Sa{ngModule;constructor(n){super(),this.ngModule=n}resolveComponentFactory(n){let e=Fn(n);return new Gi(e,this.ngModule)}};function BT(t){return Object.keys(t).map(n=>{let[e,i,r]=t[n],o={propName:e,templateName:n,isSignal:(i&yd.SignalBased)!==0};return r&&(o.transform=r),o})}function VT(t){return Object.keys(t).map(n=>({propName:t[n],templateName:n}))}function HT(t,n,e){let i=n instanceof we?n:n?.injector;return i&&t.getStandaloneInjector!==null&&(i=t.getStandaloneInjector(i)||i),i?new $h(e,i):e}function UT(t){let n=t.get(Ke,null);if(n===null)throw new I(407,!1);let e=t.get(zw,null),i=t.get(On,null),r=t.get(Cn,null,{optional:!0});return{rendererFactory:n,sanitizer:e,changeDetectionScheduler:i,ngReflect:!1,tracingService:r}}function zT(t,n){let e=Xw(t);return iw(n,e,e==="svg"?Um:e==="math"?h_:null)}function Xw(t){return(t.selectors[0][0]||"div").toLowerCase()}var Gi=class extends Sd{componentDef;ngModule;selector;componentType;ngContentSelectors;isBoundToModule;cachedInputs=null;cachedOutputs=null;get inputs(){return this.cachedInputs??=BT(this.componentDef.inputs),this.cachedInputs}get outputs(){return this.cachedOutputs??=VT(this.componentDef.outputs),this.cachedOutputs}constructor(n,e){super(),this.componentDef=n,this.ngModule=e,this.componentType=n.type,this.selector=wS(n.selectors),this.ngContentSelectors=n.ngContentSelectors??[],this.isBoundToModule=!!e}create(n,e,i,r,o,s){Ce(pe.DynamicComponentStart);let a=$(null);try{let l=this.componentDef,c=HT(l,r||this.ngModule,n),u=UT(c),f=u.tracingService;return f&&f.componentCreate?f.componentCreate(Kw(l),()=>this.createComponentRef(u,c,e,i,o,s)):this.createComponentRef(u,c,e,i,o,s)}finally{$(a)}}createComponentRef(n,e,i,r,o,s){let a=this.componentDef,l=$T(r,a,s,o),c=n.rendererFactory.createRenderer(null,a),u=r?WS(c,r,a.encapsulation,e):zT(a,c),f=s?.some(cy)||o?.some(y=>typeof y!="function"&&y.bindings.some(cy)),m=_p(null,l,null,512|dw(a),null,null,n,c,e,null,Yy(u,e,!0));m[Le]=u,Lc(m);let h=null;try{let y=Gw(Le,m,2,"#host",()=>l.directiveRegistry,!0,0);sw(c,u,y),Ao(u,m),Mp(l,m,y),Qy(l,y,m),qw(l,y),i!==void 0&&GT(y,this.ngContentSelectors,i),h=sn(y.index,m),m[We]=h[We],Sp(l,m,null)}catch(y){throw h!==null&&Th(h),Th(m),y}finally{Ce(pe.DynamicComponentEnd),jc()}return new sd(this.componentType,m,!!f)}};function $T(t,n,e,i){let r=t?["ng-version","21.2.7"]:CS(n.selectors[0]),o=null,s=null,a=0;if(e)for(let u of e)a+=u[Wh].requiredVars,u.create&&(u.targetIdx=0,(o??=[]).push(u)),u.update&&(u.targetIdx=0,(s??=[]).push(u));if(i)for(let u=0;u<i.length;u++){let f=i[u];if(typeof f!="function")for(let m of f.bindings){a+=m[Wh].requiredVars;let h=u+1;m.create&&(m.targetIdx=h,(o??=[]).push(m)),m.update&&(m.targetIdx=h,(s??=[]).push(m))}}let l=[n];if(i)for(let u of i){let f=typeof u=="function"?u:u.type,m=Tm(f);l.push(m)}return bp(0,null,WT(o,s),1,a,l,null,null,null,[r],null)}function WT(t,n){return!t&&!n?null:e=>{if(e&1&&t)for(let i of t)i.create();if(e&2&&n)for(let i of n)i.update()}}function cy(t){let n=t[Wh].kind;return n==="input"||n==="twoWay"}var sd=class extends Uw{_rootLView;_hasInputBindings;instance;hostView;changeDetectorRef;componentType;location;previousInputValues=null;_tNode;constructor(n,e,i){super(),this._rootLView=e,this._hasInputBindings=i,this._tNode=Rc(e[G],Le),this.location=Po(this._tNode,e),this.instance=sn(this._tNode.index,e)[We],this.hostView=this.changeDetectorRef=new Wi(e,void 0),this.componentType=n}setInput(n,e){this._hasInputBindings;let i=this._tNode;if(this.previousInputValues??=new Map,this.previousInputValues.has(n)&&Object.is(this.previousInputValues.get(n),e))return;let r=this._rootLView,o=Id(i,r[G],r,n,e);this.previousInputValues.set(n,e);let s=sn(i.index,r);Tp(s,1)}get injector(){return new Nr(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(n){this.hostView.onDestroy(n)}};function GT(t,n,e){let i=t.projection=[];for(let r=0;r<n.length;r++){let o=e[r];i.push(o!=null&&o.length?Array.from(o):null)}}var lt=(()=>{class t{static __NG_ELEMENT_ID__=qT}return t})();function qT(){let t=at();return Jw(t,Y())}var Gh=class t extends lt{_lContainer;_hostTNode;_hostLView;constructor(n,e,i){super(),this._lContainer=n,this._hostTNode=e,this._hostLView=i}get element(){return Po(this._hostTNode,this._hostLView)}get injector(){return new Nr(this._hostTNode,this._hostLView)}get parentInjector(){let n=lp(this._hostTNode,this._hostLView);if(Ty(n)){let e=Jc(n,this._hostLView),i=Xc(n),r=e[G].data[i+8];return new Nr(r,e)}else return new Nr(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(n){let e=dy(this._lContainer);return e!==null&&e[n]||null}get length(){return this._lContainer.length-je}createEmbeddedView(n,e,i){let r,o;typeof i=="number"?r=i:i!=null&&(r=i.index,o=i.injector);let s=id(this._lContainer,n.ssrId),a=n.createEmbeddedViewImpl(e||{},o,s);return this.insertImpl(a,r,Ro(this._hostTNode,s)),a}createComponent(n,e,i,r,o,s,a){let l=n&&!pM(n),c;if(l)c=e;else{let T=e||{};c=T.index,i=T.injector,r=T.projectableNodes,o=T.environmentInjector||T.ngModuleRef,s=T.directives,a=T.bindings}let u=l?n:new Gi(Fn(n)),f=i||this.parentInjector;if(!o&&u.ngModule==null){let P=(l?f:this.parentInjector).get(we,null);P&&(o=P)}let m=Fn(u.componentType??{}),h=id(this._lContainer,m?.id??null),y=h?.firstChild??null,x=u.create(f,r,y,o,s,a);return this.insertImpl(x.hostView,c,Ro(this._hostTNode,h)),x}insert(n,e){return this.insertImpl(n,e,!0)}insertImpl(n,e,i){let r=n._lView;if(g_(r)){let a=this.indexOf(n);if(a!==-1)this.detach(a);else{let l=r[et],c=new t(l,l[Rt],l[et]);c.detach(c.indexOf(n))}}let o=this._adjustIndex(e),s=this._lContainer;return Ma(s,r,o,i),n.attachToViewContainerRef(),Rm(_h(s),o,n),n}move(n,e){return this.insert(n,e)}indexOf(n){let e=dy(this._lContainer);return e!==null?e.indexOf(n):-1}remove(n){let e=this._adjustIndex(n,-1),i=ya(this._lContainer,e);i&&(oa(_h(this._lContainer),e),Dd(i[G],i))}detach(n){let e=this._adjustIndex(n,-1),i=ya(this._lContainer,e);return i&&oa(_h(this._lContainer),e)!=null?new Wi(i):null}_adjustIndex(n,e=0){return n??this.length+e}};function dy(t){return t[la]}function _h(t){return t[la]||(t[la]=[])}function Jw(t,n){let e,i=n[t.index];return bn(i)?e=i:(e=Lw(i,n,null,t),n[t.index]=e,yp(n,e)),ZT(e,n,t,i),new Gh(e,t,n)}function YT(t,n){let e=t[Ee],i=e.createComment(""),r=on(n,t),o=e.parentNode(r);return nd(e,o,i,e.nextSibling(r),!1),i}var ZT=XT,QT=()=>!1;function KT(t,n,e){return QT(t,n,e)}function XT(t,n,e,i){if(t[zi])return;let r;e.type&8?r=rn(i):r=YT(n,e),t[zi]=r}var qh=class t{queryList;matches=null;constructor(n){this.queryList=n}clone(){return new t(this.queryList)}setDirty(){this.queryList.setDirty()}},Yh=class t{queries;constructor(n=[]){this.queries=n}createEmbeddedView(n){let e=n.queries;if(e!==null){let i=n.contentQueries!==null?n.contentQueries[0]:e.length,r=[];for(let o=0;o<i;o++){let s=e.getByIndex(o),a=this.queries[s.indexInDeclarationView];r.push(a.clone())}return new t(r)}return null}insertView(n){this.dirtyQueriesWithMatches(n)}detachView(n){this.dirtyQueriesWithMatches(n)}finishViewCreation(n){this.dirtyQueriesWithMatches(n)}dirtyQueriesWithMatches(n){for(let e=0;e<this.queries.length;e++)Rp(n,e).matches!==null&&this.queries[e].setDirty()}},ad=class{flags;read;predicate;constructor(n,e,i=null){this.flags=e,this.read=i,typeof n=="string"?this.predicate=ik(n):this.predicate=n}},Zh=class t{queries;constructor(n=[]){this.queries=n}elementStart(n,e){for(let i=0;i<this.queries.length;i++)this.queries[i].elementStart(n,e)}elementEnd(n){for(let e=0;e<this.queries.length;e++)this.queries[e].elementEnd(n)}embeddedTView(n){let e=null;for(let i=0;i<this.length;i++){let r=e!==null?e.length:0,o=this.getByIndex(i).embeddedTView(n,r);o&&(o.indexInDeclarationView=i,e!==null?e.push(o):e=[o])}return e!==null?new t(e):null}template(n,e){for(let i=0;i<this.queries.length;i++)this.queries[i].template(n,e)}getByIndex(n){return this.queries[n]}get length(){return this.queries.length}track(n){this.queries.push(n)}},Qh=class t{metadata;matches=null;indexInDeclarationView=-1;crossesNgTemplate=!1;_declarationNodeIndex;_appliesToNextNode=!0;constructor(n,e=-1){this.metadata=n,this._declarationNodeIndex=e}elementStart(n,e){this.isApplyingToNode(e)&&this.matchTNode(n,e)}elementEnd(n){this._declarationNodeIndex===n.index&&(this._appliesToNextNode=!1)}template(n,e){this.elementStart(n,e)}embeddedTView(n,e){return this.isApplyingToNode(n)?(this.crossesNgTemplate=!0,this.addMatch(-n.index,e),new t(this.metadata)):null}isApplyingToNode(n){if(this._appliesToNextNode&&(this.metadata.flags&1)!==1){let e=this._declarationNodeIndex,i=n.parent;for(;i!==null&&i.type&8&&i.index!==e;)i=i.parent;return e===(i!==null?i.index:-1)}return this._appliesToNextNode}matchTNode(n,e){let i=this.metadata.predicate;if(Array.isArray(i))for(let r=0;r<i.length;r++){let o=i[r];this.matchTNodeWithReadOption(n,e,JT(e,o)),this.matchTNodeWithReadOption(n,e,Yc(e,n,o,!1,!1))}else i===gt?e.type&4&&this.matchTNodeWithReadOption(n,e,-1):this.matchTNodeWithReadOption(n,e,Yc(e,n,i,!1,!1))}matchTNodeWithReadOption(n,e,i){if(i!==null){let r=this.metadata.read;if(r!==null)if(r===R||r===lt||r===gt&&e.type&4)this.addMatch(e.index,-2);else{let o=Yc(e,n,r,!1,!1);o!==null&&this.addMatch(e.index,o)}else this.addMatch(e.index,i)}}addMatch(n,e){this.matches===null?this.matches=[n,e]:this.matches.push(n,e)}};function JT(t,n){let e=t.localNames;if(e!==null){for(let i=0;i<e.length;i+=2)if(e[i]===n)return e[i+1]}return null}function ek(t,n){return t.type&11?Po(t,n):t.type&4?Md(t,n):null}function tk(t,n,e,i){return e===-1?ek(n,t):e===-2?nk(t,n,i):va(t,t[G],e,n)}function nk(t,n,e){if(e===R)return Po(n,t);if(e===gt)return Md(n,t);if(e===lt)return Jw(n,t)}function e0(t,n,e,i){let r=n[jn].queries[i];if(r.matches===null){let o=t.data,s=e.matches,a=[];for(let l=0;s!==null&&l<s.length;l+=2){let c=s[l];if(c<0)a.push(null);else{let u=o[c];a.push(tk(n,u,s[l+1],e.metadata.read))}}r.matches=a}return r.matches}function Kh(t,n,e,i){let r=t.queries.getByIndex(e),o=r.matches;if(o!==null){let s=e0(t,n,r,e);for(let a=0;a<o.length;a+=2){let l=o[a];if(l>0)i.push(s[a/2]);else{let c=o[a+1],u=n[-l];for(let f=je;f<u.length;f++){let m=u[f];m[Hi]===m[et]&&Kh(m[G],m,c,i)}if(u[kr]!==null){let f=u[kr];for(let m=0;m<f.length;m++){let h=f[m];Kh(h[G],h,c,i)}}}}}return i}function Ap(t,n){return t[jn].queries[n].queryList}function t0(t,n,e){let i=new pi((e&4)===4);return __(t,n,i,i.destroy),(n[jn]??=new Yh).queries.push(new qh(i))-1}function n0(t,n,e){let i=Te();return i.firstCreatePass&&(r0(i,new ad(t,n,e),-1),(n&2)===2&&(i.staticViewQueries=!0)),t0(i,Y(),n)}function i0(t,n,e,i){let r=Te();if(r.firstCreatePass){let o=at();r0(r,new ad(n,e,i),o.index),rk(r,t),(e&2)===2&&(r.staticContentQueries=!0)}return t0(r,Y(),e)}function ik(t){return t.split(",").map(n=>n.trim())}function r0(t,n,e){t.queries===null&&(t.queries=new Zh),t.queries.track(new Qh(n,e))}function rk(t,n){let e=t.contentQueries||(t.contentQueries=[]),i=e.length?e[e.length-1]:-1;n!==i&&e.push(t.queries.length-1,n)}function Rp(t,n){return t.queries.getByIndex(n)}function o0(t,n){let e=t[G],i=Rp(e,n);return i.crossesNgTemplate?Kh(e,t,n,[]):e0(e,t,i,n)}function s0(t,n,e){let i,r=Vs(()=>{i._dirtyCounter();let o=ok(i,t);if(n&&o===void 0)throw new I(-951,!1);return o});return i=r[Ye],i._dirtyCounter=F(0),i._flatValue=void 0,r}function Np(t){return s0(!0,!1,t)}function Op(t){return s0(!0,!0,t)}function a0(t,n){let e=t[Ye];e._lView=Y(),e._queryIndex=n,e._queryList=Ap(e._lView,n),e._queryList.onDirty(()=>e._dirtyCounter.update(i=>i+1))}function ok(t,n){let e=t._lView,i=t._queryIndex;if(e===void 0||i===void 0||e[te]&4)return n?void 0:Ct;let r=Ap(e,i),o=o0(e,i);return r.reset(o,jy),n?r.first:r._changesDetected||t._flatValue===void 0?t._flatValue=r.toArray():t._flatValue}var $n=class{},Td=class{};var ld=class extends $n{ngModuleType;_parent;_bootstrapComponents=[];_r3Injector;instance;destroyCbs=[];componentFactoryResolver=new od(this);constructor(n,e,i,r=!0){super(),this.ngModuleType=n,this._parent=e;let o=Sm(n);this._bootstrapComponents=aw(o.bootstrap),this._r3Injector=dh(n,e,[{provide:$n,useValue:this},{provide:Sa,useValue:this.componentFactoryResolver},...i],ia(n),new Set(["environment"])),r&&this.resolveInjectorInitializers()}resolveInjectorInitializers(){this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(this.ngModuleType)}get injector(){return this._r3Injector}destroy(){let n=this._r3Injector;!n.destroyed&&n.destroy(),this.destroyCbs.forEach(e=>e()),this.destroyCbs=null}onDestroy(n){this.destroyCbs.push(n)}},cd=class extends Td{moduleType;constructor(n){super(),this.moduleType=n}create(n){return new ld(this.moduleType,n,[])}};var wa=class extends $n{injector;componentFactoryResolver=new od(this);instance=null;constructor(n){super();let e=new Er([...n.providers,{provide:$n,useValue:this},{provide:Sa,useValue:this.componentFactoryResolver}],n.parent||yo(),n.debugName,new Set(["environment"]));this.injector=e,n.runEnvironmentInitializers&&e.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(n){this.injector.onDestroy(n)}};function Bo(t,n,e=null){return new wa({providers:t,parent:n,debugName:e,runEnvironmentInitializers:!0}).injector}var sk=(()=>{class t{_injector;cachedInjectors=new Map;constructor(e){this._injector=e}getOrCreateStandaloneInjector(e){if(!e.standalone)return null;if(!this.cachedInjectors.has(e)){let i=Fm(!1,e.type),r=i.length>0?Bo([i],this._injector,""):null;this.cachedInjectors.set(e,r)}return this.cachedInjectors.get(e)}ngOnDestroy(){try{for(let e of this.cachedInjectors.values())e!==null&&e.destroy()}finally{this.cachedInjectors.clear()}}static \u0275prov=b({token:t,providedIn:"environment",factory:()=>new t(O(we))})}return t})();function E(t){return Da(()=>{let n=l0(t),e=X(_({},n),{decls:t.decls,vars:t.vars,template:t.template,consts:t.consts||null,ngContentSelectors:t.ngContentSelectors,onPush:t.changeDetection===cp.OnPush,directiveDefs:null,pipeDefs:null,dependencies:n.standalone&&t.dependencies||null,getStandaloneInjector:n.standalone?r=>r.get(sk).getOrCreateStandaloneInjector(e):null,getExternalStyles:null,signals:t.signals??!1,data:t.data||{},encapsulation:t.encapsulation||yn.Emulated,styles:t.styles||Ct,_:null,schemas:t.schemas||null,tView:null,id:""});n.standalone&&Wn("NgStandalone"),c0(e);let i=t.dependencies;return e.directiveDefs=uy(i,ak),e.pipeDefs=uy(i,Jb),e.id=dk(e),e})}function ak(t){return Fn(t)||Tm(t)}function U(t){return Da(()=>({type:t.type,bootstrap:t.bootstrap||Ct,declarations:t.declarations||Ct,imports:t.imports||Ct,exports:t.exports||Ct,transitiveCompileScopes:null,schemas:t.schemas||null,id:t.id||null}))}function lk(t,n){if(t==null)return Bi;let e={};for(let i in t)if(t.hasOwnProperty(i)){let r=t[i],o,s,a,l;Array.isArray(r)?(a=r[0],o=r[1],s=r[2]??o,l=r[3]||null):(o=r,s=r,a=yd.None,l=null),e[o]=[i,a,l],n[o]=s}return e}function ck(t){if(t==null)return Bi;let n={};for(let e in t)t.hasOwnProperty(e)&&(n[t[e]]=e);return n}function M(t){return Da(()=>{let n=l0(t);return c0(n),n})}function Fp(t){return{type:t.type,name:t.name,factory:null,pure:t.pure!==!1,standalone:t.standalone??!0,onDestroy:t.type.prototype.ngOnDestroy||null}}function l0(t){let n={};return{type:t.type,providersResolver:null,viewProvidersResolver:null,factory:null,hostBindings:t.hostBindings||null,hostVars:t.hostVars||0,hostAttrs:t.hostAttrs||null,contentQueries:t.contentQueries||null,declaredInputs:n,inputConfig:t.inputs||Bi,exportAs:t.exportAs||null,standalone:t.standalone??!0,signals:t.signals===!0,selectors:t.selectors||Ct,viewQuery:t.viewQuery||null,features:t.features||null,setInput:null,resolveHostDirectives:null,hostDirectives:null,controlDef:null,inputs:lk(t.inputs,n),outputs:ck(t.outputs),debugInfo:null}}function c0(t){t.features?.forEach(n=>n(t))}function uy(t,n){return t?()=>{let e=typeof t=="function"?t():t,i=[];for(let r of e){let o=n(r);o!==null&&i.push(o)}return i}:null}function dk(t){let n=0,e=typeof t.consts=="function"?"":t.consts,i=[t.selectors,t.ngContentSelectors,t.hostVars,t.hostAttrs,e,t.vars,t.decls,t.encapsulation,t.standalone,t.signals,t.exportAs,JSON.stringify(t.inputs),JSON.stringify(t.outputs),Object.getOwnPropertyNames(t.type.prototype),!!t.contentQueries,!!t.viewQuery];for(let o of i.join("|"))n=Math.imul(31,n)+o.charCodeAt(0)<<0;return n+=2147483648,"c"+n}function uk(t){return Object.getPrototypeOf(t.prototype).constructor}function be(t){let n=uk(t.type),e=!0,i=[t];for(;n;){let r;if(Vn(t))r=n.\u0275cmp||n.\u0275dir;else{if(n.\u0275cmp)throw new I(903,!1);r=n.\u0275dir}if(r){if(e){i.push(r);let s=t;s.inputs=yh(t.inputs),s.declaredInputs=yh(t.declaredInputs),s.outputs=yh(t.outputs);let a=r.hostBindings;a&&gk(t,a);let l=r.viewQuery,c=r.contentQueries;if(l&&hk(t,l),c&&pk(t,c),fk(t,r),Xb(t.outputs,r.outputs),Vn(r)&&r.data.animation){let u=t.data;u.animation=(u.animation||[]).concat(r.data.animation)}}let o=r.features;if(o)for(let s=0;s<o.length;s++){let a=o[s];a&&a.ngInherit&&a(t),a===be&&(e=!1)}}n=Object.getPrototypeOf(n)}mk(i)}function fk(t,n){for(let e in n.inputs){if(!n.inputs.hasOwnProperty(e)||t.inputs.hasOwnProperty(e))continue;let i=n.inputs[e];i!==void 0&&(t.inputs[e]=i,t.declaredInputs[e]=n.declaredInputs[e])}}function mk(t){let n=0,e=null;for(let i=t.length-1;i>=0;i--){let r=t[i];r.hostVars=n+=r.hostVars,r.hostAttrs=ko(r.hostAttrs,e=ko(e,r.hostAttrs))}}function yh(t){return t===Bi?{}:t===Ct?[]:t}function hk(t,n){let e=t.viewQuery;e?t.viewQuery=(i,r)=>{n(i,r),e(i,r)}:t.viewQuery=n}function pk(t,n){let e=t.contentQueries;e?t.contentQueries=(i,r,o)=>{n(i,r,o),e(i,r,o)}:t.contentQueries=n}function gk(t,n){let e=t.hostBindings;e?t.hostBindings=(i,r)=>{n(i,r),e(i,r)}:t.hostBindings=n}function d0(t,n,e,i,r,o,s,a){if(e.firstCreatePass){t.mergedAttrs=ko(t.mergedAttrs,t.attrs);let u=t.tView=bp(2,t,r,o,s,e.directiveRegistry,e.pipeRegistry,null,e.schemas,e.consts,null);e.queries!==null&&(e.queries.template(e,t),u.queries=e.queries.embeddedTView(t))}a&&(t.flags|=a),Eo(t,!1);let l=bk(e,n,t,i);Bc()&&xp(e,n,l,t),Ao(l,n);let c=Lw(l,n,l,t);n[i+Le]=c,yp(n,c),KT(c,t,n)}function vk(t,n,e,i,r,o,s,a,l,c,u){let f=e+Le,m;return n.firstCreatePass?(m=jo(n,f,4,s||null,a||null),Xm()&&$w(n,t,m,Gt(n.consts,c),Ew),Iy(n,m)):m=n.data[f],d0(m,t,n,e,i,r,o,l),ca(m)&&Mp(n,t,m),c!=null&&xd(t,m,u),m}function No(t,n,e,i,r,o,s,a,l,c,u){let f=e+Le,m;if(n.firstCreatePass){if(m=jo(n,f,4,s||null,a||null),c!=null){let h=Gt(n.consts,c);m.localNames=[];for(let y=0;y<h.length;y+=2)m.localNames.push(h[y],-1)}}else m=n.data[f];return d0(m,t,n,e,i,r,o,l),c!=null&&xd(t,m,u),m}function Bt(t,n,e,i,r,o,s,a){let l=Y(),c=Te(),u=Gt(c.consts,o);return vk(l,c,t,n,e,i,r,u,void 0,s,a),Bt}function kd(t,n,e,i,r,o,s,a){let l=Y(),c=Te(),u=Gt(c.consts,o);return No(l,c,t,n,e,i,r,u,void 0,s,a),kd}var bk=_k;function _k(t,n,e,i){return Vc(!0),n[Ee].createComment("")}var Ad=(()=>{class t{log(e){console.log(e)}warn(e){console.warn(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"platform"})}return t})();function Gn(t){return typeof t=="function"&&t[Ye]!==void 0}function Pp(t){return Gn(t)&&typeof t.set=="function"}var Lp=new v("");function bi(t){return!!t&&typeof t.then=="function"}function Rd(t){return!!t&&typeof t.subscribe=="function"}var jp=new v("");function Nd(t){return Pn([{provide:jp,multi:!0,useValue:t}])}var Bp=(()=>{class t{resolve;reject;initialized=!1;done=!1;donePromise=new Promise((e,i)=>{this.resolve=e,this.reject=i});appInits=d(jp,{optional:!0})??[];injector=d(W);constructor(){}runInitializers(){if(this.initialized)return;let e=[];for(let r of this.appInits){let o=tt(this.injector,r);if(bi(o))e.push(o);else if(Rd(o)){let s=new Promise((a,l)=>{o.subscribe({complete:a,error:l})});e.push(s)}}let i=()=>{this.done=!0,this.resolve()};Promise.all(e).then(()=>{i()}).catch(r=>{this.reject(r)}),e.length===0&&i(),this.initialized=!0}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Ta=new v("");function u0(){Wf(()=>{let t="";throw new I(600,t)})}function f0(t){return t.isBoundToModule}var yk=10;var Zt=(()=>{class t{_runningTick=!1;_destroyed=!1;_destroyListeners=[];_views=[];internalErrorHandler=d(qt);afterRenderManager=d(Cd);zonelessEnabled=d(ma);rootEffectScheduler=d(Uc);dirtyFlags=0;tracingSnapshot=null;allTestViews=new Set;autoDetectTestViews=new Set;includeAllTestViews=!1;afterTick=new C;get allViews(){return[...(this.includeAllTestViews?this.allTestViews:this.autoDetectTestViews).keys(),...this._views]}get destroyed(){return this._destroyed}componentTypes=[];components=[];internalPendingTask=d(hi);get isStable(){return this.internalPendingTask.hasPendingTasksObservable.pipe(ee(e=>!e))}constructor(){d(Cn,{optional:!0})}whenStable(){let e;return new Promise(i=>{e=this.isStable.subscribe({next:r=>{r&&i()}})}).finally(()=>{e.unsubscribe()})}_injector=d(we);_rendererFactory=null;get injector(){return this._injector}bootstrap(e,i){return this.bootstrapImpl(e,i)}bootstrapImpl(e,i,r=W.NULL){return this._injector.get(k).run(()=>{Ce(pe.BootstrapComponentStart);let s=e instanceof Sd;if(!this._injector.get(Bp).done){let y="";throw new I(405,y)}let l;s?l=e:l=this._injector.get(Sa).resolveComponentFactory(e),this.componentTypes.push(l.componentType);let c=f0(l)?void 0:this._injector.get($n),u=i||l.selector,f=l.create(r,[],u,c),m=f.location.nativeElement,h=f.injector.get(Lp,null);return h?.registerApplication(m),f.onDestroy(()=>{this.detachView(f.hostView),ga(this.components,f),h?.unregisterApplication(m)}),this._loadComponent(f),Ce(pe.BootstrapComponentEnd,f),f})}tick(){this.zonelessEnabled||(this.dirtyFlags|=1),this._tick()}_tick(){Ce(pe.ChangeDetectionStart),this.tracingSnapshot!==null?this.tracingSnapshot.run(wd.CHANGE_DETECTION,this.tickImpl):this.tickImpl()}tickImpl=()=>{if(this._runningTick)throw Ce(pe.ChangeDetectionEnd),new I(101,!1);let e=$(null);try{this._runningTick=!0,this.synchronize()}finally{this._runningTick=!1,this.tracingSnapshot?.dispose(),this.tracingSnapshot=null,$(e),this.afterTick.next(),Ce(pe.ChangeDetectionEnd)}};synchronize(){this._rendererFactory===null&&!this._injector.destroyed&&(this._rendererFactory=this._injector.get(Ke,null,{optional:!0}));let e=0;for(;this.dirtyFlags!==0&&e++<yk;){Ce(pe.ChangeDetectionSyncStart);try{this.synchronizeOnce()}finally{Ce(pe.ChangeDetectionSyncEnd)}}}synchronizeOnce(){this.dirtyFlags&16&&(this.dirtyFlags&=-17,this.rootEffectScheduler.flush());let e=!1;if(this.dirtyFlags&7){let i=!!(this.dirtyFlags&1);this.dirtyFlags&=-8,this.dirtyFlags|=8;for(let{_lView:r}of this.allViews){if(!i&&!da(r))continue;let o=i&&!this.zonelessEnabled?0:1;Nw(r,o),e=!0}if(this.dirtyFlags&=-5,this.syncDirtyFlagsWithViews(),this.dirtyFlags&23)return}e||(this._rendererFactory?.begin?.(),this._rendererFactory?.end?.()),this.dirtyFlags&8&&(this.dirtyFlags&=-9,this.afterRenderManager.execute()),this.syncDirtyFlagsWithViews()}syncDirtyFlagsWithViews(){if(this.allViews.some(({_lView:e})=>da(e))){this.dirtyFlags|=2;return}else this.dirtyFlags&=-8}attachView(e){let i=e;this._views.push(i),i.attachToAppRef(this)}detachView(e){let i=e;ga(this._views,i),i.detachFromAppRef()}_loadComponent(e){this.attachView(e.hostView);try{this.tick()}catch(r){this.internalErrorHandler(r)}this.components.push(e),this._injector.get(Ta,[]).forEach(r=>r(e))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(e=>e()),this._views.slice().forEach(e=>e.destroy())}finally{this._destroyed=!0,this._views=[],this._destroyListeners=[]}}onDestroy(e){return this._destroyListeners.push(e),()=>ga(this._destroyListeners,e)}destroy(){if(this._destroyed)throw new I(406,!1);let e=this._injector;e.destroy&&!e.destroyed&&e.destroy()}get viewCount(){return this._views.length}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function ga(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}function Od(t,n){let e=Y(),i=Hn();if(an(e,i,n)){let r=Te(),o=xo();if(Id(o,r,e,t,n))Bn(o)&&Dw(e,o.index);else{let a=on(o,e);xw(e[Ee],a,null,o.value,t,n,null)}}return Od}function ue(t,n,e,i){let r=Y(),o=Hn();if(an(r,o,n)){let s=Te(),a=xo();XS(a,r,t,n,e,i)}return ue}var Xh=class{destroy(n){}updateValue(n,e){}swap(n,e){let i=Math.min(n,e),r=Math.max(n,e),o=this.detach(r);if(r-i>1){let s=this.detach(i);this.attach(i,o),this.attach(r,s)}else this.attach(i,o)}move(n,e){this.attach(e,this.detach(n))}};function wh(t,n,e,i,r){return t===e&&Object.is(n,i)?1:Object.is(r(t,n),r(e,i))?-1:0}function wk(t,n,e,i){let r,o,s=0,a=t.length-1,l=void 0;if(Array.isArray(n)){$(i);let c=n.length-1;for($(null);s<=a&&s<=c;){let u=t.at(s),f=n[s],m=wh(s,u,s,f,e);if(m!==0){m<0&&t.updateValue(s,f),s++;continue}let h=t.at(a),y=n[c],x=wh(a,h,c,y,e);if(x!==0){x<0&&t.updateValue(a,y),a--,c--;continue}let T=e(s,u),P=e(a,h),ve=e(s,f);if(Object.is(ve,P)){let ot=e(c,y);Object.is(ot,T)?(t.swap(s,a),t.updateValue(a,y),c--,a--):t.move(a,s),t.updateValue(s,f),s++;continue}if(r??=new dd,o??=my(t,s,a,e),Jh(t,r,s,ve))t.updateValue(s,f),s++,a++;else if(o.has(ve))r.set(T,t.detach(s)),a--;else{let ot=t.create(s,n[s]);t.attach(s,ot),s++,a++}}for(;s<=c;)fy(t,r,e,s,n[s]),s++}else if(n!=null){$(i);let c=n[Symbol.iterator]();$(null);let u=c.next();for(;!u.done&&s<=a;){let f=t.at(s),m=u.value,h=wh(s,f,s,m,e);if(h!==0)h<0&&t.updateValue(s,m),s++,u=c.next();else{r??=new dd,o??=my(t,s,a,e);let y=e(s,m);if(Jh(t,r,s,y))t.updateValue(s,m),s++,a++,u=c.next();else if(!o.has(y))t.attach(s,t.create(s,m)),s++,a++,u=c.next();else{let x=e(s,f);r.set(x,t.detach(s)),a--}}}for(;!u.done;)fy(t,r,e,t.length,u.value),u=c.next()}for(;s<=a;)t.destroy(t.detach(a--));r?.forEach(c=>{t.destroy(c)})}function Jh(t,n,e,i){return n!==void 0&&n.has(i)?(t.attach(e,n.get(i)),n.delete(i),!0):!1}function fy(t,n,e,i,r){if(Jh(t,n,i,e(i,r)))t.updateValue(i,r);else{let o=t.create(i,r);t.attach(i,o)}}function my(t,n,e,i){let r=new Set;for(let o=n;o<=e;o++)r.add(i(o,t.at(o)));return r}var dd=class{kvMap=new Map;_vMap=void 0;has(n){return this.kvMap.has(n)}delete(n){if(!this.has(n))return!1;let e=this.kvMap.get(n);return this._vMap!==void 0&&this._vMap.has(e)?(this.kvMap.set(n,this._vMap.get(e)),this._vMap.delete(e)):this.kvMap.delete(n),!0}get(n){return this.kvMap.get(n)}set(n,e){if(this.kvMap.has(n)){let i=this.kvMap.get(n);this._vMap===void 0&&(this._vMap=new Map);let r=this._vMap;for(;r.has(i);)i=r.get(i);r.set(i,e)}else this.kvMap.set(n,e)}forEach(n){for(let[e,i]of this.kvMap)if(n(i,e),this._vMap!==void 0){let r=this._vMap;for(;r.has(i);)i=r.get(i),n(i,e)}}};function oe(t,n,e,i,r,o,s,a){Wn("NgControlFlow");let l=Y(),c=Te(),u=Gt(c.consts,o);return No(l,c,t,n,e,i,r,u,256,s,a),Vp}function Vp(t,n,e,i,r,o,s,a){Wn("NgControlFlow");let l=Y(),c=Te(),u=Gt(c.consts,o);return No(l,c,t,n,e,i,r,u,512,s,a),Vp}function se(t,n){Wn("NgControlFlow");let e=Y(),i=Hn(),r=e[i]!==jt?e[i]:-1,o=r!==-1?ud(e,Le+r):void 0,s=0;if(an(e,i,t)){let a=$(null);try{if(o!==void 0&&Bw(o,s),t!==-1){let l=Le+t,c=ud(e,l),u=ip(e[G],l),f=Hw(c,u,e),m=Ia(e,u,n,{dehydratedView:f});Ma(c,m,s,Ro(u,f))}}finally{$(a)}}else if(o!==void 0){let a=jw(o,s);a!==void 0&&(a[We]=n)}}var ep=class{lContainer;$implicit;$index;constructor(n,e,i){this.lContainer=n,this.$implicit=e,this.$index=i}get $count(){return this.lContainer.length-je}};function Fd(t,n){return n}var tp=class{hasEmptyBlock;trackByFn;liveCollection;constructor(n,e,i){this.hasEmptyBlock=n,this.trackByFn=e,this.liveCollection=i}};function Dn(t,n,e,i,r,o,s,a,l,c,u,f,m){Wn("NgControlFlow");let h=Y(),y=Te(),x=l!==void 0,T=Y(),P=a?s.bind(T[Nt][We]):s,ve=new tp(x,P);T[Le+t]=ve,No(h,y,t+1,n,e,i,r,Gt(y.consts,o),256),x&&No(h,y,t+2,l,c,u,f,Gt(y.consts,m),512)}var np=class extends Xh{lContainer;hostLView;templateTNode;operationsCounter=void 0;needsIndexUpdate=!1;constructor(n,e,i){super(),this.lContainer=n,this.hostLView=e,this.templateTNode=i}get length(){return this.lContainer.length-je}at(n){return this.getLView(n)[We].$implicit}attach(n,e){let i=e[Ir];this.needsIndexUpdate||=n!==this.length,Ma(this.lContainer,e,n,Ro(this.templateTNode,i)),Ck(this.lContainer,n)}detach(n){return this.needsIndexUpdate||=n!==this.length-1,Dk(this.lContainer,n),Ek(this.lContainer,n)}create(n,e){let i=id(this.lContainer,this.templateTNode.tView.ssrId);return Ia(this.hostLView,this.templateTNode,new ep(this.lContainer,e,n),{dehydratedView:i})}destroy(n){Dd(n[G],n)}updateValue(n,e){this.getLView(n)[We].$implicit=e}reset(){this.needsIndexUpdate=!1}updateIndexes(){if(this.needsIndexUpdate)for(let n=0;n<this.length;n++)this.getLView(n)[We].$index=n}getLView(n){return xk(this.lContainer,n)}};function En(t){let n=$(null),e=mi();try{let i=Y(),r=i[G],o=i[e],s=e+1,a=ud(i,s);if(o.liveCollection===void 0){let c=ip(r,s);o.liveCollection=new np(a,i,c)}else o.liveCollection.reset();let l=o.liveCollection;if(wk(l,t,o.trackByFn,n),l.updateIndexes(),o.hasEmptyBlock){let c=Hn(),u=l.length===0;if(an(i,c,u)){let f=e+2,m=ud(i,f);if(u){let h=ip(r,f),y=Hw(m,h,i),x=Ia(i,h,void 0,{dehydratedView:y});Ma(m,x,0,Ro(h,y))}else r.firstUpdatePass&&wT(m),Bw(m,0)}}}finally{$(n)}}function ud(t,n){return t[n]}function Ck(t,n){if(t.length<=je)return;let e=je+n,i=t[e],r=i?i[Ui]:void 0;if(i&&r&&r.detachedLeaveAnimationFns&&r.detachedLeaveAnimationFns.length>0){let o=i[di];AS(o,r),Fr.delete(i[ui]),r.detachedLeaveAnimationFns=void 0}}function Dk(t,n){if(t.length<=je)return;let e=je+n,i=t[e],r=i?i[Ui]:void 0;r&&r.leave&&r.leave.size>0&&(r.detachedLeaveAnimationFns=[])}function Ek(t,n){return ya(t,n)}function xk(t,n){return jw(t,n)}function ip(t,n){return Rc(t,n)}function Z(t,n,e){let i=Y(),r=Hn();if(an(i,r,n)){let o=Te(),s=xo();ww(s,i,t,n,i[Ee],e)}return Z}function rp(t,n,e,i,r){Id(n,t,e,r?"class":"style",i)}function p(t,n,e,i){let r=Y(),o=r[G],s=t+Le,a=o.firstCreatePass?Gw(s,r,2,n,Ew,Xm(),e,i):o.data[s];if(Bn(a)){let l=r[Ln].tracingService;if(l&&l.componentCreate){let c=o.data[a.directiveStart+a.componentOffset];return l.componentCreate(Kw(c),()=>(hy(t,n,r,a,i),p))}}return hy(t,n,r,a,i),p}function hy(t,n,e,i,r){if(Iw(i,e,t,n,m0),ca(i)){let o=e[G];Mp(o,e,i),Qy(o,i,e)}r!=null&&xd(e,i)}function g(){let t=Te(),n=at(),e=Mw(n);return t.firstCreatePass&&qw(t,e),eh(e)&&th(),Km(),e.classesWithoutHost!=null&&wM(e)&&rp(t,e,Y(),e.classesWithoutHost,!0),e.stylesWithoutHost!=null&&CM(e)&&rp(t,e,Y(),e.stylesWithoutHost,!1),g}function ne(t,n,e,i){return p(t,n,e,i),g(),ne}function Vt(t,n,e,i){let r=Y(),o=r[G],s=t+Le,a=o.firstCreatePass?FT(s,o,2,n,e,i):o.data[s];return Iw(a,r,t,n,m0),i!=null&&xd(r,a),Vt}function Qt(){let t=at(),n=Mw(t);return eh(n)&&th(),Km(),Qt}function ln(t,n,e,i){return Vt(t,n,e,i),Qt(),ln}var m0=(t,n,e,i,r)=>(Vc(!0),iw(n[Ee],i,N_()));function bt(){return Y()}function _i(t,n,e){let i=Y(),r=Hn();if(an(i,r,n)){let o=Te(),s=xo();Cw(s,i,t,n,i[Ee],e)}return _i}var ka="en-US";var Ik=ka;function h0(t){typeof t=="string"&&(Ik=t.toLowerCase().replace(/_/g,"-"))}function N(t,n,e){let i=Y(),r=Te(),o=at();return p0(r,i,i[Ee],o,t,n,e),N}function Pd(t,n,e){let i=Y(),r=Te(),o=at();return(o.type&3||e)&&Zw(o,r,i,e,i[Ee],t,n,Qc(o,i,n)),Pd}function p0(t,n,e,i,r,o,s){let a=!0,l=null;if((i.type&3||s)&&(l??=Qc(i,n,o),Zw(i,t,n,s,e,r,o,l)&&(a=!1)),a){let c=i.outputs?.[r],u=i.hostDirectiveOutputs?.[r];if(u&&u.length)for(let f=0;f<u.length;f+=2){let m=u[f],h=u[f+1];l??=Qc(i,n,o),ly(i,n,m,h,r,l)}if(c&&c.length)for(let f of c)l??=Qc(i,n,o),ly(i,n,f,r,r,l)}}function q(t=1){return R_(t)}function Mk(t,n){let e=null,i=gS(t);for(let r=0;r<n.length;r++){let o=n[r];if(o==="*"){e=r;continue}if(i===null?cw(t,o,!0):_S(i,o))return r}return e}function Ie(t){let n=Y()[Nt][Rt];if(!n.projection){let e=t?t.length:1,i=n.projection=o_(e,null),r=i.slice(),o=n.child;for(;o!==null;){if(o.type!==128){let s=t?Mk(o,t):0;s!==null&&(r[s]?r[s].projectionNext=o:i[s]=o,r[s]=o)}o=o.next}}}function Q(t,n=0,e,i,r,o){let s=Y(),a=Te(),l=i?t+1:null;l!==null&&No(s,a,l,i,r,o,null,e);let c=jo(a,Le+t,16,null,e||null);c.projection===null&&(c.projection=n),rh();let f=!s[Ir]||Jm();s[Nt][Rt].projection[c.projection]===null&&l!==null?Sk(s,a,l):f&&!vd(c)&&US(a,s,c)}function Sk(t,n,e){let i=Le+e,r=n.data[i],o=t[i],s=id(o,r.tView.ssrId),a=Ia(t,r,void 0,{dehydratedView:s});Ma(o,a,0,Ro(r,s))}function _t(t,n,e,i){return i0(t,n,e,i),_t}function Ue(t,n,e){return n0(t,n,e),Ue}function L(t){let n=Y(),e=Te(),i=Pc();ua(i+1);let r=Rp(e,i);if(t.dirty&&p_(n)===((r.metadata.flags&2)===2)){if(r.matches===null)t.reset([]);else{let o=o0(n,i);t.reset(o,jy),t.notifyOnChanges()}return!0}return!1}function j(){return Ap(Y(),Pc())}function Ld(t,n,e,i,r){return a0(n,i0(t,e,i,r)),Ld}function qn(t,n,e,i){return a0(t,n0(n,e,i)),qn}function Yn(t=1){ua(Pc()+t)}function cn(t){let n=D_();return $m(n,Le+t)}function Wc(t,n){return t<<17|n<<2}function Pr(t){return t>>17&32767}function Tk(t){return(t&2)==2}function kk(t,n){return t&131071|n<<17}function op(t){return t|2}function Oo(t){return(t&131068)>>2}function Ch(t,n){return t&-131069|n<<2}function Ak(t){return(t&1)===1}function sp(t){return t|1}function Rk(t,n,e,i,r,o){let s=o?n.classBindings:n.styleBindings,a=Pr(s),l=Oo(s);t[i]=e;let c=!1,u;if(Array.isArray(e)){let f=e;u=f[1],(u===null||_o(f,u)>0)&&(c=!0)}else u=e;if(r)if(l!==0){let m=Pr(t[a+1]);t[i+1]=Wc(m,a),m!==0&&(t[m+1]=Ch(t[m+1],i)),t[a+1]=kk(t[a+1],i)}else t[i+1]=Wc(a,0),a!==0&&(t[a+1]=Ch(t[a+1],i)),a=i;else t[i+1]=Wc(l,0),a===0?a=i:t[l+1]=Ch(t[l+1],i),l=i;c&&(t[i+1]=op(t[i+1])),py(t,u,i,!0),py(t,u,i,!1),Nk(n,u,t,i,o),s=Wc(a,l),o?n.classBindings=s:n.styleBindings=s}function Nk(t,n,e,i,r){let o=r?t.residualClasses:t.residualStyles;o!=null&&typeof n=="string"&&_o(o,n)>=0&&(e[i+1]=sp(e[i+1]))}function py(t,n,e,i){let r=t[e+1],o=n===null,s=i?Pr(r):Oo(r),a=!1;for(;s!==0&&(a===!1||o);){let l=t[s],c=t[s+1];Ok(l,n)&&(a=!0,t[s+1]=i?sp(c):op(c)),s=i?Pr(c):Oo(c)}a&&(t[e+1]=i?op(r):sp(r))}function Ok(t,n){return t===null||n==null||(Array.isArray(t)?t[1]:t)===n?!0:Array.isArray(t)&&typeof n=="string"?_o(t,n)>=0:!1}var nt={textEnd:0,key:0,keyEnd:0,value:0,valueEnd:0};function g0(t){return t.substring(nt.key,nt.keyEnd)}function Fk(t){return t.substring(nt.value,nt.valueEnd)}function Pk(t){return _0(t),v0(t,Fo(t,0,nt.textEnd))}function v0(t,n){let e=nt.textEnd;return e===n?-1:(n=nt.keyEnd=jk(t,nt.key=n,e),Fo(t,n,e))}function Lk(t){return _0(t),b0(t,Fo(t,0,nt.textEnd))}function b0(t,n){let e=nt.textEnd,i=nt.key=Fo(t,n,e);return e===i?-1:(i=nt.keyEnd=Bk(t,i,e),i=gy(t,i,e,58),i=nt.value=Fo(t,i,e),i=nt.valueEnd=Vk(t,i,e),gy(t,i,e,59))}function _0(t){nt.key=0,nt.keyEnd=0,nt.value=0,nt.valueEnd=0,nt.textEnd=t.length}function Fo(t,n,e){for(;n<e&&t.charCodeAt(n)<=32;)n++;return n}function jk(t,n,e){for(;n<e&&t.charCodeAt(n)>32;)n++;return n}function Bk(t,n,e){let i;for(;n<e&&((i=t.charCodeAt(n))===45||i===95||(i&-33)>=65&&(i&-33)<=90||i>=48&&i<=57);)n++;return n}function gy(t,n,e,i){return n=Fo(t,n,e),n<e&&n++,n}function Vk(t,n,e){let i=-1,r=-1,o=-1,s=n,a=s;for(;s<e;){let l=t.charCodeAt(s++);if(l===59)return a;l===34||l===39?a=s=vy(t,l,s,e):n===s-4&&o===85&&r===82&&i===76&&l===40?a=s=vy(t,41,s,e):l>32&&(a=s),o=r,r=i,i=l&-33}return a}function vy(t,n,e,i){let r=-1,o=e;for(;o<i;){let s=t.charCodeAt(o++);if(s==n&&r!==92)return o;s==92&&r===92?r=0:r=s}throw new Error}function Vo(t,n,e){return y0(t,n,e,!1),Vo}function z(t,n){return y0(t,n,null,!0),z}function Hp(t){w0(E0,Hk,t,!1)}function Hk(t,n){for(let e=Lk(n);e>=0;e=b0(n,e))E0(t,g0(n),Fk(n))}function Ot(t){w0(Yk,Uk,t,!0)}function Uk(t,n){for(let e=Pk(n);e>=0;e=v0(n,e))sa(t,g0(n),!0)}function y0(t,n,e,i){let r=Y(),o=Te(),s=ah(2);if(o.firstUpdatePass&&D0(o,t,s,i),n!==jt&&an(r,s,n)){let a=o.data[mi()];x0(o,a,r,r[Ee],t,r[s+1]=Qk(n,e),i,s)}}function w0(t,n,e,i){let r=Te(),o=ah(2);r.firstUpdatePass&&D0(r,null,o,i);let s=Y();if(e!==jt&&an(s,o,e)){let a=r.data[mi()];if(I0(a,i)&&!C0(r,o)){let l=i?a.classesWithoutHost:a.stylesWithoutHost;l!==null&&(e=Ec(l,e||"")),rp(r,a,s,e,i)}else Zk(r,a,s,s[Ee],s[o+1],s[o+1]=qk(t,n,e),i,o)}}function C0(t,n){return n>=t.expandoStartIndex}function D0(t,n,e,i){let r=t.data;if(r[e+1]===null){let o=r[mi()],s=C0(t,e);I0(o,i)&&n===null&&!s&&(n=!1),n=zk(r,o,n,i),Rk(r,o,n,e,s,i)}}function zk(t,n,e,i){let r=S_(t),o=i?n.residualClasses:n.residualStyles;if(r===null)(i?n.classBindings:n.styleBindings)===0&&(e=Dh(null,t,n,e,i),e=Ca(e,n.attrs,i),o=null);else{let s=n.directiveStylingLast;if(s===-1||t[s]!==r)if(e=Dh(r,t,n,e,i),o===null){let l=$k(t,n,i);l!==void 0&&Array.isArray(l)&&(l=Dh(null,t,n,l[1],i),l=Ca(l,n.attrs,i),Wk(t,n,i,l))}else o=Gk(t,n,i)}return o!==void 0&&(i?n.residualClasses=o:n.residualStyles=o),e}function $k(t,n,e){let i=e?n.classBindings:n.styleBindings;if(Oo(i)!==0)return t[Pr(i)]}function Wk(t,n,e,i){let r=e?n.classBindings:n.styleBindings;t[Pr(r)]=i}function Gk(t,n,e){let i,r=n.directiveEnd;for(let o=1+n.directiveStylingLast;o<r;o++){let s=t[o].hostAttrs;i=Ca(i,s,e)}return Ca(i,n.attrs,e)}function Dh(t,n,e,i,r){let o=null,s=e.directiveEnd,a=e.directiveStylingLast;for(a===-1?a=e.directiveStart:a++;a<s&&(o=n[a],i=Ca(i,o.hostAttrs,r),o!==t);)a++;return t!==null&&(e.directiveStylingLast=a),i}function Ca(t,n,e){let i=e?1:2,r=-1;if(n!==null)for(let o=0;o<n.length;o++){let s=n[o];typeof s=="number"?r=s:r===i&&(Array.isArray(t)||(t=t===void 0?[]:["",t]),sa(t,s,e?!0:n[++o]))}return t===void 0?null:t}function qk(t,n,e){if(e==null||e==="")return Ct;let i=[],r=wn(e);if(Array.isArray(r))for(let o=0;o<r.length;o++)t(i,r[o],!0);else if(r instanceof Set)for(let o of r)t(i,o,!0);else if(typeof r=="object")for(let o in r)r.hasOwnProperty(o)&&t(i,o,r[o]);else typeof r=="string"&&n(i,r);return i}function E0(t,n,e){sa(t,n,wn(e))}function Yk(t,n,e){let i=String(n);i!==""&&!i.includes(" ")&&sa(t,i,e)}function Zk(t,n,e,i,r,o,s,a){r===jt&&(r=Ct);let l=0,c=0,u=0<r.length?r[0]:null,f=0<o.length?o[0]:null;for(;u!==null||f!==null;){let m=l<r.length?r[l+1]:void 0,h=c<o.length?o[c+1]:void 0,y=null,x;u===f?(l+=2,c+=2,m!==h&&(y=f,x=h)):f===null||u!==null&&u<f?(l+=2,y=u):(c+=2,y=f,x=h),y!==null&&x0(t,n,e,i,y,x,s,a),u=l<r.length?r[l]:null,f=c<o.length?o[c]:null}}function x0(t,n,e,i,r,o,s,a){if(!(n.type&3))return;let l=t.data,c=l[a+1],u=Ak(c)?by(l,n,e,r,Oo(c),s):void 0;if(!fd(u)){fd(o)||Tk(c)&&(o=by(l,null,e,r,a,s));let f=zm(mi(),e);$S(i,s,f,r,o)}}function by(t,n,e,i,r,o){let s=n===null,a;for(;r>0;){let l=t[r],c=Array.isArray(l),u=c?l[1]:l,f=u===null,m=e[r+1];m===jt&&(m=f?Ct:void 0);let h=f?kc(m,i):u===i?m:void 0;if(c&&!fd(h)&&(h=kc(l,i)),fd(h)&&(a=h,s))return a;let y=t[r+1];r=s?Pr(y):Oo(y)}if(n!==null){let l=o?n.residualClasses:n.residualStyles;l!=null&&(a=kc(l,i))}return a}function fd(t){return t!==void 0}function Qk(t,n){return t==null||t===""||(typeof n=="string"?t=t+n:typeof t=="object"&&(t=ia(wn(t)))),t}function I0(t,n){return(t.flags&(n?8:16))!==0}function D(t,n=""){let e=Y(),i=Te(),r=t+Le,o=i.firstCreatePass?jo(i,r,1,n,null):i.data[r],s=Kk(i,e,o,n);e[r]=s,Bc()&&xp(i,e,s,o),Eo(o,!1)}var Kk=(t,n,e,i)=>(Vc(!0),aS(n[Ee],i));function M0(t,n,e,i=""){return an(t,Hn(),e)?n+Mc(e)+i:jt}function De(t){return Et("",t),De}function Et(t,n,e){let i=Y(),r=M0(i,t,n,e);return r!==jt&&Xk(i,mi(),r),Et}function Xk(t,n,e){let i=zm(n,t);lS(t[Ee],i,e)}function ct(t,n,e){Pp(n)&&(n=n());let i=Y(),r=Hn();if(an(i,r,n)){let o=Te(),s=xo();ww(s,i,t,n,i[Ee],e)}return ct}function Ae(t,n){let e=Pp(t);return e&&t.set(n),e}function dt(t,n){let e=Y(),i=Te(),r=at();return p0(i,e,e[Ee],r,t,n),dt}function Zn(t){return an(Y(),Hn(),t)?Mc(t):jt}function Up(t,n,e=""){return M0(Y(),t,n,e)}function _y(t,n,e){let i=Te();i.firstCreatePass&&S0(n,i.data,i.blueprint,Vn(t),e)}function S0(t,n,e,i,r){if(t=ht(t),Array.isArray(t))for(let o=0;o<t.length;o++)S0(t[o],n,e,i,r);else{let o=Te(),s=Y(),a=at(),l=Dr(t)?t:ht(t.provide),c=Lm(t),u=a.providerIndexes&1048575,f=a.directiveStart,m=a.providerIndexes>>20;if(Dr(t)||!t.multi){let h=new Or(c,r,xe,null),y=xh(l,n,r?u:u+m,f);y===-1?(Mh(td(a,s),o,l),Eh(o,t,n.length),n.push(l),a.directiveStart++,a.directiveEnd++,r&&(a.providerIndexes+=1048576),e.push(h),s.push(h)):(e[y]=h,s[y]=h)}else{let h=xh(l,n,u+m,f),y=xh(l,n,u,u+m),x=h>=0&&e[h],T=y>=0&&e[y];if(r&&!T||!r&&!x){Mh(td(a,s),o,l);let P=tA(r?eA:Jk,e.length,r,i,c,t);!r&&T&&(e[y].providerFactory=P),Eh(o,t,n.length,0),n.push(l),a.directiveStart++,a.directiveEnd++,r&&(a.providerIndexes+=1048576),e.push(P),s.push(P)}else{let P=T0(e[r?y:h],c,!r&&i);Eh(o,t,h>-1?h:y,P)}!r&&i&&T&&e[y].componentProviders++}}}function Eh(t,n,e,i){let r=Dr(n),o=u_(n);if(r||o){let l=(o?ht(n.useClass):n).prototype.ngOnDestroy;if(l){let c=t.destroyHooks||(t.destroyHooks=[]);if(!r&&n.multi){let u=c.indexOf(e);u===-1?c.push(e,[i,l]):c[u+1].push(i,l)}else c.push(e,l)}}}function T0(t,n,e){return e&&t.componentProviders++,t.multi.push(n)-1}function xh(t,n,e,i){for(let r=e;r<i;r++)if(n[r]===t)return r;return-1}function Jk(t,n,e,i,r){return ap(this.multi,[])}function eA(t,n,e,i,r){let o=this.multi,s;if(this.providerFactory){let a=this.providerFactory.componentProviders,l=va(i,i[G],this.providerFactory.index,r);s=l.slice(0,a),ap(o,s);for(let c=a;c<l.length;c++)s.push(l[c])}else s=[],ap(o,s);return s}function ap(t,n){for(let e=0;e<t.length;e++){let i=t[e];n.push(i())}return n}function tA(t,n,e,i,r,o){let s=new Or(t,e,xe,null);return s.multi=[],s.index=n,s.componentProviders=0,T0(s,r,i&&!e),s}function Re(t,n){return e=>{e.providersResolver=(i,r)=>_y(i,r?r(t):t,!1),n&&(e.viewProvidersResolver=(i,r)=>_y(i,r?r(n):n,!0))}}function zp(t,n){let e=sh()+t,i=Y();return i[e]===jt?Yw(i,e,n()):PT(i,e)}function nA(t,n){let e=t[n];return e===jt?void 0:e}function iA(t,n,e,i,r,o){let s=n+e;return an(t,s,r)?Yw(t,s+1,o?i.call(o,r):i(r)):nA(t,s+1)}function Aa(t,n){let e=Te(),i,r=t+Le;e.firstCreatePass?(i=rA(n,e.pipeRegistry),e.data[r]=i,i.onDestroy&&(e.destroyHooks??=[]).push(r,i.onDestroy)):i=e.data[r];let o=i.factory||(i.factory=Pi(i.type,!0)),s,a=At(xe);try{let l=ed(!1),c=o();return ed(l),Wm(e,Y(),r,c),c}finally{At(a)}}function rA(t,n){if(n)for(let e=n.length-1;e>=0;e--){let i=n[e];if(t===i.name)return i}}function Ra(t,n,e){let i=t+Le,r=Y(),o=$m(r,i);return oA(r,i)?iA(r,sh(),n,o.transform,e,o):o.transform(e)}function oA(t,n){return t[G].data[n].pure}function jd(t,n){return Md(t,n)}var md=class{ngModuleFactory;componentFactories;constructor(n,e){this.ngModuleFactory=n,this.componentFactories=e}},$p=(()=>{class t{compileModuleSync(e){return new cd(e)}compileModuleAsync(e){return Promise.resolve(this.compileModuleSync(e))}compileModuleAndAllComponentsSync(e){let i=this.compileModuleSync(e),r=Sm(e),o=aw(r.declarations).reduce((s,a)=>{let l=Fn(a);return l&&s.push(new Gi(l)),s},[]);return new md(i,o)}compileModuleAndAllComponentsAsync(e){return Promise.resolve(this.compileModuleAndAllComponentsSync(e))}clearCache(){}clearCacheFor(e){}getModuleId(e){}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var k0=(()=>{class t{applicationErrorHandler=d(qt);appRef=d(Zt);taskService=d(hi);ngZone=d(k);zonelessEnabled=d(ma);tracing=d(Cn,{optional:!0});zoneIsDefined=typeof Zone<"u"&&!!Zone.root.run;schedulerTickApplyArgs=[{data:{__scheduler_tick__:!0}}];subscriptions=new ae;angularZoneId=this.zoneIsDefined?this.ngZone._inner?.get(ta):null;scheduleInRootZone=!this.zonelessEnabled&&this.zoneIsDefined&&(d(ph,{optional:!0})??!1);cancelScheduledCallback=null;useMicrotaskScheduler=!1;runningTick=!1;pendingRenderTaskId=null;constructor(){this.subscriptions.add(this.appRef.afterTick.subscribe(()=>{let e=this.taskService.add();if(!this.runningTick&&(this.cleanup(),!this.zonelessEnabled||this.appRef.includeAllTestViews)){this.taskService.remove(e);return}this.switchToMicrotaskScheduler(),this.taskService.remove(e)})),this.subscriptions.add(this.ngZone.onUnstable.subscribe(()=>{this.runningTick||this.cleanup()}))}switchToMicrotaskScheduler(){this.ngZone.runOutsideAngular(()=>{let e=this.taskService.add();this.useMicrotaskScheduler=!0,queueMicrotask(()=>{this.useMicrotaskScheduler=!1,this.taskService.remove(e)})})}notify(e){if(!this.zonelessEnabled&&e===5)return;switch(e){case 0:{this.appRef.dirtyFlags|=2;break}case 3:case 2:case 4:case 5:case 1:{this.appRef.dirtyFlags|=4;break}case 6:{this.appRef.dirtyFlags|=2;break}case 12:{this.appRef.dirtyFlags|=16;break}case 13:{this.appRef.dirtyFlags|=2;break}case 11:break;default:this.appRef.dirtyFlags|=8}if(this.appRef.tracingSnapshot=this.tracing?.snapshot(this.appRef.tracingSnapshot)??null,!this.shouldScheduleTick())return;let i=this.useMicrotaskScheduler?L_:uh;this.pendingRenderTaskId=this.taskService.add(),this.scheduleInRootZone?this.cancelScheduledCallback=Zone.root.run(()=>i(()=>this.tick())):this.cancelScheduledCallback=this.ngZone.runOutsideAngular(()=>i(()=>this.tick()))}shouldScheduleTick(){return!(this.appRef.destroyed||this.pendingRenderTaskId!==null||this.runningTick||this.appRef._runningTick||!this.zonelessEnabled&&this.zoneIsDefined&&Zone.current.get(ta+this.angularZoneId))}tick(){if(this.runningTick||this.appRef.destroyed)return;if(this.appRef.dirtyFlags===0){this.cleanup();return}!this.zonelessEnabled&&this.appRef.dirtyFlags&7&&(this.appRef.dirtyFlags|=1);let e=this.taskService.add();try{this.ngZone.run(()=>{this.runningTick=!0,this.appRef._tick()},void 0,this.schedulerTickApplyArgs)}catch(i){this.applicationErrorHandler(i)}finally{this.taskService.remove(e),this.cleanup()}}ngOnDestroy(){this.subscriptions.unsubscribe(),this.cleanup()}cleanup(){if(this.runningTick=!1,this.cancelScheduledCallback?.(),this.cancelScheduledCallback=null,this.pendingRenderTaskId!==null){let e=this.pendingRenderTaskId;this.pendingRenderTaskId=null,this.taskService.remove(e)}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function A0(){return[{provide:On,useExisting:k0},{provide:k,useClass:na},{provide:ma,useValue:!0}]}function sA(){return typeof $localize<"u"&&$localize.locale||ka}var Bd=new v("",{factory:()=>d(Bd,{optional:!0,skipSelf:!0})||sA()});var Vd=class{destroyed=!1;listeners=null;errorHandler=d(Dt,{optional:!0});destroyRef=d(pt);constructor(){this.destroyRef.onDestroy(()=>{this.destroyed=!0,this.listeners=null})}subscribe(n){if(this.destroyed)throw new I(953,!1);return(this.listeners??=[]).push(n),{unsubscribe:()=>{let e=this.listeners?.indexOf(n);e!==void 0&&e!==-1&&this.listeners?.splice(e,1)}}}emit(n){if(this.destroyed){console.warn(tn(953,!1));return}if(this.listeners===null)return;let e=$(null);try{for(let i of this.listeners)try{i(n)}catch(r){this.errorHandler?.handleError(r)}}finally{$(e)}}};function ze(t){return qb(t)}function Je(t,n){return Vs(t,n?.equal)}var Ud=Symbol("InputSignalNode#UNSET"),j0=X(_({},Hs),{transformFn:void 0,applyValueToInputSignal(t,n){fr(t,n)}});function B0(t,n){let e=Object.create(j0);e.value=t,e.transformFn=n?.transform;function i(){if(Si(e),e.value===Ud){let r=null;throw new I(-950,r)}return e.value}return i[Ye]=e,i}var Yi=class{attributeName;constructor(n){this.attributeName=n}__NG_ELEMENT_ID__=()=>hd(this.attributeName);toString(){return`HostAttributeToken ${this.attributeName}`}};function R0(t,n){return B0(t,n)}function DA(t){return B0(Ud,t)}var yi=(R0.required=DA,R0);function N0(t,n){return Np(n)}function EA(t,n){return Op(n)}var xn=(N0.required=EA,N0);function O0(t,n){return Np(n)}function xA(t,n){return Op(n)}var V0=(O0.required=xA,O0);function H0(t,n){let e=Object.create(j0),i=new Vd;e.value=t;function r(){return Si(e),F0(e.value),e.value}return r[Ye]=e,r.asReadonly=Hc.bind(r),r.set=o=>{e.equal(e.value,o)||(fr(e,o),i.emit(o))},r.update=o=>{F0(e.value),r.set(o(e.value))},r.subscribe=i.subscribe.bind(i),r.destroyRef=i.destroyRef,r}function F0(t){if(t===Ud)throw new I(952,!1)}function P0(t,n){return H0(t,n)}function IA(t){return H0(Ud,t)}var Ne=(P0.required=IA,P0);var Gp=new v(""),MA=new v("");function Na(t){return!t.moduleRef}function SA(t){let n=Na(t)?t.r3Injector:t.moduleRef.injector,e=n.get(k);return e.run(()=>{Na(t)?t.r3Injector.resolveInjectorInitializers():t.moduleRef.resolveInjectorInitializers();let i=n.get(qt),r;if(e.runOutsideAngular(()=>{r=e.onError.subscribe({next:i})}),Na(t)){let o=()=>n.destroy(),s=t.platformInjector.get(Gp);s.add(o),n.onDestroy(()=>{r.unsubscribe(),s.delete(o)})}else{let o=()=>t.moduleRef.destroy(),s=t.platformInjector.get(Gp);s.add(o),t.moduleRef.onDestroy(()=>{ga(t.allPlatformModules,t.moduleRef),r.unsubscribe(),s.delete(o)})}return kA(i,e,()=>{let o=n.get(hi),s=o.add(),a=n.get(Bp);return a.runInitializers(),a.donePromise.then(()=>{let l=n.get(Bd,ka);if(h0(l||ka),!n.get(MA,!0))return Na(t)?n.get(Zt):(t.allPlatformModules.push(t.moduleRef),t.moduleRef);if(Na(t)){let u=n.get(Zt);return t.rootComponent!==void 0&&u.bootstrap(t.rootComponent),u}else return TA?.(t.moduleRef,t.allPlatformModules),t.moduleRef}).finally(()=>{o.remove(s)})})})}var TA;function kA(t,n,e){try{let i=e();return bi(i)?i.catch(r=>{throw n.runOutsideAngular(()=>t(r)),r}):i}catch(i){throw n.runOutsideAngular(()=>t(i)),i}}var Hd=null;function AA(t=[],n){return W.create({name:n,providers:[{provide:aa,useValue:"platform"},{provide:Gp,useValue:new Set([()=>Hd=null])},...t]})}function RA(t=[]){if(Hd)return Hd;let n=AA(t);return Hd=n,u0(),NA(n),n}function NA(t){let n=t.get(pd,null);tt(t,()=>{n?.forEach(e=>e())})}var OA=1e4;var b5=OA-1e3;var Oe=(()=>{class t{static __NG_ELEMENT_ID__=FA}return t})();function FA(t){return PA(at(),Y(),(t&16)===16)}function PA(t,n,e){if(Bn(t)&&!e){let i=sn(t.index,n);return new Wi(i,i)}else if(t.type&175){let i=n[Nt];return new Wi(i,n)}return null}function U0(t){let{rootComponent:n,appProviders:e,platformProviders:i,platformRef:r}=t;Ce(pe.BootstrapApplicationStart);try{let o=r?.injector??RA(i),s=[A0(),B_,...e||[]],a=new wa({providers:s,parent:o,debugName:"",runEnvironmentInitializers:!1});return SA({r3Injector:a.injector,platformInjector:o,rootComponent:n})}catch(o){return Promise.reject(o)}finally{Ce(pe.BootstrapApplicationEnd)}}function K(t){return typeof t=="boolean"?t:t!=null&&t!=="false"}function Qn(t,n=NaN){return!isNaN(parseFloat(t))&&!isNaN(Number(t))?Number(t):n}var Wp=Symbol("NOT_SET"),z0=new Set,LA=X(_({},Hs),{kind:"afterRenderEffectPhase",consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!0,value:Wp,cleanup:null,consumerMarkedDirty(){if(this.sequence.impl.executing){if(this.sequence.lastPhase===null||this.sequence.lastPhase<this.phase)return;this.sequence.erroredOrDestroyed=!0}this.sequence.scheduler.notify(7)},phaseFn(t){if(this.sequence.lastPhase=this.phase,!this.dirty)return this.signal;if(this.dirty=!1,this.value!==Wp&&!ao(this))return this.signal;try{for(let r of this.cleanup??z0)r()}finally{this.cleanup?.clear()}let n=[];t!==void 0&&n.push(t),n.push(this.registerCleanupFn);let e=Ti(this),i;try{i=this.userFn.apply(null,n)}finally{ur(this,e)}return(this.value===Wp||!this.equal(this.value,i))&&(this.value=i,this.version++),this.signal}}),qp=class extends ba{scheduler;lastPhase=null;nodes=[void 0,void 0,void 0,void 0];onDestroyFns=null;constructor(n,e,i,r,o,s=null){super(n,[void 0,void 0,void 0,void 0],i,!1,o.get(pt),s),this.scheduler=r;for(let a of Cp){let l=e[a];if(l===void 0)continue;let c=Object.create(LA);c.sequence=this,c.phase=a,c.userFn=l,c.dirty=!0,c.signal=()=>(Si(c),c.value),c.signal[Ye]=c,c.registerCleanupFn=u=>(c.cleanup??=new Set).add(u),this.nodes[a]=c,this.hooks[a]=u=>c.phaseFn(u)}}afterRun(){super.afterRun(),this.lastPhase=null}destroy(){if(this.onDestroyFns!==null)for(let n of this.onDestroyFns)n();super.destroy();for(let n of this.nodes)if(n)try{for(let e of n.cleanup??z0)e()}finally{ki(n)}}};function $0(t,n){let e=n?.injector??d(W),i=e.get(On),r=e.get(Cd),o=e.get(Cn,null,{optional:!0});r.impl??=e.get(Dp);let s=t;typeof s=="function"&&(s={mixedReadWrite:t});let a=e.get(Io,null,{optional:!0}),l=new qp(r.impl,[s.earlyRead,s.write,s.mixedReadWrite,s.read],a?.view,i,e,o?.snapshot(null));return r.impl.register(l),l}function zd(t,n){let e=Fn(t),i=n.elementInjector||yo();return new Gi(e).create(i,n.projectableNodes,n.hostElement,n.environmentInjector,n.directives,n.bindings)}function W0(t){let n=Fn(t);if(!n)return null;let e=new Gi(n);return{get selector(){return e.selector},get type(){return e.componentType},get inputs(){return e.inputs},get outputs(){return e.outputs},get ngContentSelectors(){return e.ngContentSelectors},get isStandalone(){return n.standalone},get isSignal(){return n.signals}}}var G0=null;function dn(){return G0}function Zp(t){G0??=t}var Oa=class{},wi=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:()=>d(q0),providedIn:"platform"})}return t})(),Qp=new v(""),q0=(()=>{class t extends wi{_location;_history;_doc=d(V);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return dn().getBaseHref(this._doc)}onPopState(e){let i=dn().getGlobalEventTarget(this._doc,"window");return i.addEventListener("popstate",e,!1),()=>i.removeEventListener("popstate",e)}onHashChange(e){let i=dn().getGlobalEventTarget(this._doc,"window");return i.addEventListener("hashchange",e,!1),()=>i.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,i,r){this._history.pushState(e,i,r)}replaceState(e,i,r){this._history.replaceState(e,i,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:()=>new t,providedIn:"platform"})}return t})();function $d(t,n){return t?n?t.endsWith("/")?n.startsWith("/")?t+n.slice(1):t+n:n.startsWith("/")?t+n:`${t}/${n}`:t:n}function Y0(t){let n=t.search(/#|\?|$/);return t[n-1]==="/"?t.slice(0,n-1)+t.slice(n):t}function In(t){return t&&t[0]!=="?"?`?${t}`:t}var Ci=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:()=>d(Gd),providedIn:"root"})}return t})(),Wd=new v(""),Gd=(()=>{class t extends Ci{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,i){super(),this._platformLocation=e,this._baseHref=i??this._platformLocation.getBaseHrefFromDOM()??d(V).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return $d(this._baseHref,e)}path(e=!1){let i=this._platformLocation.pathname+In(this._platformLocation.search),r=this._platformLocation.hash;return r&&e?`${i}${r}`:i}pushState(e,i,r,o){let s=this.prepareExternalUrl(r+In(o));this._platformLocation.pushState(e,i,s)}replaceState(e,i,r,o){let s=this.prepareExternalUrl(r+In(o));this._platformLocation.replaceState(e,i,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(i){return new(i||t)(O(wi),O(Wd,8))};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Kn=(()=>{class t{_subject=new C;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let i=this._locationStrategy.getBaseHref();this._basePath=VA(Y0(Z0(i))),this._locationStrategy.onPopState(r=>{this._subject.next({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,i=""){return this.path()==this.normalize(e+In(i))}normalize(e){return t.stripTrailingSlash(BA(this._basePath,Z0(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,i="",r=null){this._locationStrategy.pushState(r,"",e,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+In(i)),r)}replaceState(e,i="",r=null){this._locationStrategy.replaceState(r,"",e,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+In(i)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(i=>{this._notifyUrlChangeListeners(i.url,i.state)}),()=>{let i=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(i,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",i){this._urlChangeListeners.forEach(r=>r(e,i))}subscribe(e,i,r){return this._subject.subscribe({next:e,error:i??void 0,complete:r??void 0})}static normalizeQueryParams=In;static joinWithSlash=$d;static stripTrailingSlash=Y0;static \u0275fac=function(i){return new(i||t)(O(Ci))};static \u0275prov=b({token:t,factory:()=>jA(),providedIn:"root"})}return t})();function jA(){return new Kn(O(Ci))}function BA(t,n){if(!t||!n.startsWith(t))return n;let e=n.substring(t.length);return e===""||["/",";","?","#"].includes(e[0])?e:n}function Z0(t){return t.replace(/\/index.html$/,"")}function VA(t){if(new RegExp("^(https?:)?//").test(t)){let[,e]=t.split(/\/\/[^\/]+/);return e}return t}var Jp=(()=>{class t extends Ci{_platformLocation;_baseHref="";_removeListenerFns=[];constructor(e,i){super(),this._platformLocation=e,i!=null&&(this._baseHref=i)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}path(e=!1){let i=this._platformLocation.hash??"#";return i.length>0?i.substring(1):i}prepareExternalUrl(e){let i=$d(this._baseHref,e);return i.length>0?"#"+i:i}pushState(e,i,r,o){let s=this.prepareExternalUrl(r+In(o))||this._platformLocation.pathname;this._platformLocation.pushState(e,i,s)}replaceState(e,i,r,o){let s=this.prepareExternalUrl(r+In(o))||this._platformLocation.pathname;this._platformLocation.replaceState(e,i,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(i){return new(i||t)(O(wi),O(Wd,8))};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})();var eg=(()=>{class t{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;injector=d(W);constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let i=this._viewContainerRef;if(this._viewRef&&i.remove(i.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let r=this._createContextForwardProxy();this._viewRef=i.createEmbeddedView(this.ngTemplateOutlet,r,{injector:this._getInjector()})}}_getInjector(){return this.ngTemplateOutletInjector==="outlet"?this.injector:this.ngTemplateOutletInjector??void 0}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,i,r)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,i,r):!1,get:(e,i,r)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,i,r)}})}static \u0275fac=function(i){return new(i||t)(xe(lt))};static \u0275dir=M({type:t,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[He]})}return t})();function UA(t,n){return new I(2100,!1)}var Kp=class{createSubscription(n,e,i){return ze(()=>n.subscribe({next:e,error:i}))}dispose(n){ze(()=>n.unsubscribe())}},Xp=class{createSubscription(n,e,i){return n.then(r=>e?.(r),r=>i?.(r)),{unsubscribe:()=>{e=null,i=null}}}dispose(n){n.unsubscribe()}},zA=new Xp,$A=new Kp,tg=(()=>{class t{_ref;_latestValue=null;markForCheckOnValueUpdate=!0;_subscription=null;_obj=null;_strategy=null;applicationErrorHandler=d(qt);constructor(e){this._ref=e}ngOnDestroy(){this._subscription&&this._dispose(),this._ref=null}transform(e){if(!this._obj){if(e)try{this.markForCheckOnValueUpdate=!1,this._subscribe(e)}finally{this.markForCheckOnValueUpdate=!0}return this._latestValue}return e!==this._obj?(this._dispose(),this.transform(e)):this._latestValue}_subscribe(e){this._obj=e,this._strategy=this._selectStrategy(e),this._subscription=this._strategy.createSubscription(e,i=>this._updateLatestValue(e,i),i=>this.applicationErrorHandler(i))}_selectStrategy(e){if(bi(e))return zA;if(Rd(e))return $A;throw UA(t,e)}_dispose(){this._strategy.dispose(this._subscription),this._latestValue=null,this._subscription=null,this._obj=null}_updateLatestValue(e,i){e===this._obj&&(this._latestValue=i,this.markForCheckOnValueUpdate&&this._ref?.markForCheck())}static \u0275fac=function(i){return new(i||t)(xe(Oe,16))};static \u0275pipe=Fp({name:"async",type:t,pure:!1})}return t})();function Fa(t,n){n=encodeURIComponent(n);for(let e of t.split(";")){let i=e.indexOf("="),[r,o]=i==-1?[e,""]:[e.slice(0,i),e.slice(i+1)];if(r.trim()===n)return decodeURIComponent(o)}return null}var Br=class{};var ig="browser";function Q0(t){return t===ig}var rg=(()=>{class t{static \u0275prov=b({token:t,providedIn:"root",factory:()=>new ng(d(V),window)})}return t})(),ng=class{document;window;offset=()=>[0,0];constructor(n,e){this.document=n,this.window=e}setOffset(n){Array.isArray(n)?this.offset=()=>n:this.offset=n}getScrollPosition(){return[this.window.scrollX,this.window.scrollY]}scrollToPosition(n,e){this.window.scrollTo(X(_({},e),{left:n[0],top:n[1]}))}scrollToAnchor(n,e){let i=qA(this.document,n);i&&(this.scrollToElement(i,e),i.focus())}setHistoryScrollRestoration(n){try{this.window.history.scrollRestoration=n}catch{console.warn(tn(2400,!1))}}scrollToElement(n,e){let i=n.getBoundingClientRect(),r=i.left+this.window.pageXOffset,o=i.top+this.window.pageYOffset,s=this.offset();this.window.scrollTo(X(_({},e),{left:r-s[0],top:o-s[1]}))}};function qA(t,n){let e=t.getElementById(n)||t.getElementsByName(n)[0];if(e)return e;if(typeof t.createTreeWalker=="function"&&t.body&&typeof t.body.attachShadow=="function"){let i=t.createTreeWalker(t.body,NodeFilter.SHOW_ELEMENT),r=i.currentNode;for(;r;){let o=r.shadowRoot;if(o){let s=o.getElementById(n)||o.querySelector(`[name="${n}"]`);if(s)return s}r=i.nextNode()}}return null}var Pa=class{_doc;constructor(n){this._doc=n}manager},qd=(()=>{class t extends Pa{constructor(e){super(e)}supports(e){return!0}addEventListener(e,i,r,o){return e.addEventListener(i,r,o),()=>this.removeEventListener(e,i,r,o)}removeEventListener(e,i,r,o){return e.removeEventListener(i,r,o)}static \u0275fac=function(i){return new(i||t)(O(V))};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})(),Qd=new v(""),lg=(()=>{class t{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,i){this._zone=i,e.forEach(s=>{s.manager=this});let r=e.filter(s=>!(s instanceof qd));this._plugins=r.slice().reverse();let o=e.find(s=>s instanceof qd);o&&this._plugins.push(o)}addEventListener(e,i,r,o){return this._findPluginFor(i).addEventListener(e,i,r,o)}getZone(){return this._zone}_findPluginFor(e){let i=this._eventNameToPlugin.get(e);if(i)return i;if(i=this._plugins.find(o=>o.supports(e)),!i)throw new I(5101,!1);return this._eventNameToPlugin.set(e,i),i}static \u0275fac=function(i){return new(i||t)(O(Qd),O(k))};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})(),og="ng-app-id";function K0(t){for(let n of t)n.remove()}function X0(t,n){let e=n.createElement("style");return e.textContent=t,e}function YA(t,n,e,i){let r=t.head?.querySelectorAll(`style[${og}="${n}"],link[${og}="${n}"]`);if(r)for(let o of r)o.removeAttribute(og),o instanceof HTMLLinkElement?i.set(o.href.slice(o.href.lastIndexOf("/")+1),{usage:0,elements:[o]}):o.textContent&&e.set(o.textContent,{usage:0,elements:[o]})}function ag(t,n){let e=n.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",t),e}var cg=(()=>{class t{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(e,i,r,o={}){this.doc=e,this.appId=i,this.nonce=r,YA(e,i,this.inline,this.external),this.hosts.add(e.head)}addStyles(e,i){for(let r of e)this.addUsage(r,this.inline,X0);i?.forEach(r=>this.addUsage(r,this.external,ag))}removeStyles(e,i){for(let r of e)this.removeUsage(r,this.inline);i?.forEach(r=>this.removeUsage(r,this.external))}addUsage(e,i,r){let o=i.get(e);o?o.usage++:i.set(e,{usage:1,elements:[...this.hosts].map(s=>this.addElement(s,r(e,this.doc)))})}removeUsage(e,i){let r=i.get(e);r&&(r.usage--,r.usage<=0&&(K0(r.elements),i.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])K0(e);this.hosts.clear()}addHost(e){this.hosts.add(e);for(let[i,{elements:r}]of this.inline)r.push(this.addElement(e,X0(i,this.doc)));for(let[i,{elements:r}]of this.external)r.push(this.addElement(e,ag(i,this.doc)))}removeHost(e){this.hosts.delete(e)}addElement(e,i){return this.nonce&&i.setAttribute("nonce",this.nonce),e.appendChild(i)}static \u0275fac=function(i){return new(i||t)(O(V),O(qi),O(Lo,8),O(Lr))};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})(),sg={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},dg=/%COMP%/g;var eC="%COMP%",ZA=`_nghost-${eC}`,QA=`_ngcontent-${eC}`,KA=!0,XA=new v("",{factory:()=>KA});function JA(t){return QA.replace(dg,t)}function eR(t){return ZA.replace(dg,t)}function tC(t,n){return n.map(e=>e.replace(dg,t))}var ug=(()=>{class t{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;constructor(e,i,r,o,s,a,l=null,c=null){this.eventManager=e,this.sharedStylesHost=i,this.appId=r,this.removeStylesOnCompDestroy=o,this.doc=s,this.ngZone=a,this.nonce=l,this.tracingService=c,this.defaultRenderer=new La(e,s,a,this.tracingService)}createRenderer(e,i){if(!e||!i)return this.defaultRenderer;let r=this.getOrCreateRenderer(e,i);return r instanceof Zd?r.applyToHost(e):r instanceof ja&&r.applyStyles(),r}getOrCreateRenderer(e,i){let r=this.rendererByCompId,o=r.get(i.id);if(!o){let s=this.doc,a=this.ngZone,l=this.eventManager,c=this.sharedStylesHost,u=this.removeStylesOnCompDestroy,f=this.tracingService;switch(i.encapsulation){case yn.Emulated:o=new Zd(l,c,i,this.appId,u,s,a,f);break;case yn.ShadowDom:return new Yd(l,e,i,s,a,this.nonce,f,c);case yn.ExperimentalIsolatedShadowDom:return new Yd(l,e,i,s,a,this.nonce,f);default:o=new ja(l,c,i,u,s,a,f);break}r.set(i.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(i){return new(i||t)(O(lg),O(cg),O(qi),O(XA),O(V),O(k),O(Lo),O(Cn,8))};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})(),La=class{eventManager;doc;ngZone;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(n,e,i,r){this.eventManager=n,this.doc=e,this.ngZone=i,this.tracingService=r}destroy(){}destroyNode=null;createElement(n,e){return e?this.doc.createElementNS(sg[e]||e,n):this.doc.createElement(n)}createComment(n){return this.doc.createComment(n)}createText(n){return this.doc.createTextNode(n)}appendChild(n,e){(J0(n)?n.content:n).appendChild(e)}insertBefore(n,e,i){n&&(J0(n)?n.content:n).insertBefore(e,i)}removeChild(n,e){e.remove()}selectRootElement(n,e){let i=typeof n=="string"?this.doc.querySelector(n):n;if(!i)throw new I(-5104,!1);return e||(i.textContent=""),i}parentNode(n){return n.parentNode}nextSibling(n){return n.nextSibling}setAttribute(n,e,i,r){if(r){e=r+":"+e;let o=sg[r];o?n.setAttributeNS(o,e,i):n.setAttribute(e,i)}else n.setAttribute(e,i)}removeAttribute(n,e,i){if(i){let r=sg[i];r?n.removeAttributeNS(r,e):n.removeAttribute(`${i}:${e}`)}else n.removeAttribute(e)}addClass(n,e){n.classList.add(e)}removeClass(n,e){n.classList.remove(e)}setStyle(n,e,i,r){r&(zn.DashCase|zn.Important)?n.style.setProperty(e,i,r&zn.Important?"important":""):n.style[e]=i}removeStyle(n,e,i){i&zn.DashCase?n.style.removeProperty(e):n.style[e]=""}setProperty(n,e,i){n!=null&&(n[e]=i)}setValue(n,e){n.nodeValue=e}listen(n,e,i,r){if(typeof n=="string"&&(n=dn().getGlobalEventTarget(this.doc,n),!n))throw new I(5102,!1);let o=this.decoratePreventDefault(i);return this.tracingService?.wrapEventListener&&(o=this.tracingService.wrapEventListener(n,e,o)),this.eventManager.addEventListener(n,e,o,r)}decoratePreventDefault(n){return e=>{if(e==="__ngUnwrap__")return n;n(e)===!1&&e.preventDefault()}}};function J0(t){return t.tagName==="TEMPLATE"&&t.content!==void 0}var Yd=class extends La{hostEl;sharedStylesHost;shadowRoot;constructor(n,e,i,r,o,s,a,l){super(n,r,o,a),this.hostEl=e,this.sharedStylesHost=l,this.shadowRoot=e.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let c=i.styles;c=tC(i.id,c);for(let f of c){let m=document.createElement("style");s&&m.setAttribute("nonce",s),m.textContent=f,this.shadowRoot.appendChild(m)}let u=i.getExternalStyles?.();if(u)for(let f of u){let m=ag(f,r);s&&m.setAttribute("nonce",s),this.shadowRoot.appendChild(m)}}nodeOrShadowRoot(n){return n===this.hostEl?this.shadowRoot:n}appendChild(n,e){return super.appendChild(this.nodeOrShadowRoot(n),e)}insertBefore(n,e,i){return super.insertBefore(this.nodeOrShadowRoot(n),e,i)}removeChild(n,e){return super.removeChild(null,e)}parentNode(n){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(n)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},ja=class extends La{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(n,e,i,r,o,s,a,l){super(n,o,s,a),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=r;let c=i.styles;this.styles=l?tC(l,c):c,this.styleUrls=i.getExternalStyles?.(l)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&Fr.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},Zd=class extends ja{contentAttr;hostAttr;constructor(n,e,i,r,o,s,a,l){let c=r+"-"+i.id;super(n,e,i,o,s,a,l,c),this.contentAttr=JA(c),this.hostAttr=eR(c)}applyToHost(n){this.applyStyles(),this.setAttribute(n,this.hostAttr,"")}createElement(n,e){let i=super.createElement(n,e);return super.setAttribute(i,this.contentAttr,""),i}};var Kd=class t extends Oa{supportsDOMEvents=!0;static makeCurrent(){Zp(new t)}onAndCancel(n,e,i,r){return n.addEventListener(e,i,r),()=>{n.removeEventListener(e,i,r)}}dispatchEvent(n,e){n.dispatchEvent(e)}remove(n){n.remove()}createElement(n,e){return e=e||this.getDefaultDocument(),e.createElement(n)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(n){return n.nodeType===Node.ELEMENT_NODE}isShadowRoot(n){return n instanceof DocumentFragment}getGlobalEventTarget(n,e){return e==="window"?window:e==="document"?n:e==="body"?n.body:null}getBaseHref(n){let e=tR();return e==null?null:nR(e)}resetBaseElement(){Ba=null}getUserAgent(){return window.navigator.userAgent}getCookie(n){return Fa(document.cookie,n)}},Ba=null;function tR(){return Ba=Ba||document.head.querySelector("base"),Ba?Ba.getAttribute("href"):null}function nR(t){return new URL(t,document.baseURI).pathname}var iR=(()=>{class t{build(){return new XMLHttpRequest}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})(),nC=["alt","control","meta","shift"],rR={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},oR={alt:t=>t.altKey,control:t=>t.ctrlKey,meta:t=>t.metaKey,shift:t=>t.shiftKey},iC=(()=>{class t extends Pa{constructor(e){super(e)}supports(e){return t.parseEventName(e)!=null}addEventListener(e,i,r,o){let s=t.parseEventName(i),a=t.eventCallback(s.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>dn().onAndCancel(e,s.domEventName,a,o))}static parseEventName(e){let i=e.toLowerCase().split("."),r=i.shift();if(i.length===0||!(r==="keydown"||r==="keyup"))return null;let o=t._normalizeKey(i.pop()),s="",a=i.indexOf("code");if(a>-1&&(i.splice(a,1),s="code."),nC.forEach(c=>{let u=i.indexOf(c);u>-1&&(i.splice(u,1),s+=c+".")}),s+=o,i.length!=0||o.length===0)return null;let l={};return l.domEventName=r,l.fullKey=s,l}static matchEventFullKeyCode(e,i){let r=rR[e.key]||e.key,o="";return i.indexOf("code.")>-1&&(r=e.code,o="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),nC.forEach(s=>{if(s!==r){let a=oR[s];a(e)&&(o+=s+".")}}),o+=r,o===i)}static eventCallback(e,i,r){return o=>{t.matchEventFullKeyCode(o,e)&&r.runGuarded(()=>i(o))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(i){return new(i||t)(O(V))};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})();async function fg(t,n,e){let i=_({rootComponent:t},sR(n,e));return U0(i)}function sR(t,n){return{platformRef:n?.platformRef,appProviders:[...uR,...t?.providers??[]],platformProviders:dR}}function aR(){Kd.makeCurrent()}function lR(){return new Dt}function cR(){return dp(document),document}var dR=[{provide:Lr,useValue:ig},{provide:pd,useValue:aR,multi:!0},{provide:V,useFactory:cR}];var uR=[{provide:aa,useValue:"root"},{provide:Dt,useFactory:lR},{provide:Qd,useClass:qd,multi:!0},{provide:Qd,useClass:iC,multi:!0},ug,cg,lg,{provide:Ke,useExisting:ug},{provide:Br,useClass:iR},[]];var Zi=class t{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(n){n?typeof n=="string"?this.lazyInit=()=>{this.headers=new Map,n.split(`
`).forEach(e=>{let i=e.indexOf(":");if(i>0){let r=e.slice(0,i),o=e.slice(i+1).trim();this.addHeaderEntry(r,o)}})}:typeof Headers<"u"&&n instanceof Headers?(this.headers=new Map,n.forEach((e,i)=>{this.addHeaderEntry(i,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(n).forEach(([e,i])=>{this.setHeaderEntries(e,i)})}:this.headers=new Map}has(n){return this.init(),this.headers.has(n.toLowerCase())}get(n){this.init();let e=this.headers.get(n.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(n){return this.init(),this.headers.get(n.toLowerCase())||null}append(n,e){return this.clone({name:n,value:e,op:"a"})}set(n,e){return this.clone({name:n,value:e,op:"s"})}delete(n,e){return this.clone({name:n,value:e,op:"d"})}maybeSetNormalizedName(n,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,n)}init(){this.lazyInit&&(this.lazyInit instanceof t?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(n=>this.applyUpdate(n)),this.lazyUpdate=null))}copyFrom(n){n.init(),Array.from(n.headers.keys()).forEach(e=>{this.headers.set(e,n.headers.get(e)),this.normalizedNames.set(e,n.normalizedNames.get(e))})}clone(n){let e=new t;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof t?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([n]),e}applyUpdate(n){let e=n.name.toLowerCase();switch(n.op){case"a":case"s":let i=n.value;if(typeof i=="string"&&(i=[i]),i.length===0)return;this.maybeSetNormalizedName(n.name,e);let r=(n.op==="a"?this.headers.get(e):void 0)||[];r.push(...i),this.headers.set(e,r);break;case"d":let o=n.value;if(!o)this.headers.delete(e),this.normalizedNames.delete(e);else{let s=this.headers.get(e);if(!s)return;s=s.filter(a=>o.indexOf(a)===-1),s.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,s)}break}}addHeaderEntry(n,e){let i=n.toLowerCase();this.maybeSetNormalizedName(n,i),this.headers.has(i)?this.headers.get(i).push(e):this.headers.set(i,[e])}setHeaderEntries(n,e){let i=(Array.isArray(e)?e:[e]).map(o=>o.toString()),r=n.toLowerCase();this.headers.set(r,i),this.maybeSetNormalizedName(n,r)}forEach(n){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>n(this.normalizedNames.get(e),this.headers.get(e)))}};var Jd=class{map=new Map;set(n,e){return this.map.set(n,e),this}get(n){return this.map.has(n)||this.map.set(n,n.defaultValue()),this.map.get(n)}delete(n){return this.map.delete(n),this}has(n){return this.map.has(n)}keys(){return this.map.keys()}},eu=class{encodeKey(n){return rC(n)}encodeValue(n){return rC(n)}decodeKey(n){return decodeURIComponent(n)}decodeValue(n){return decodeURIComponent(n)}};function fR(t,n){let e=new Map;return t.length>0&&t.replace(/^\?/,"").split("&").forEach(r=>{let o=r.indexOf("="),[s,a]=o==-1?[n.decodeKey(r),""]:[n.decodeKey(r.slice(0,o)),n.decodeValue(r.slice(o+1))],l=e.get(s)||[];l.push(a),e.set(s,l)}),e}var mR=/%(\d[a-f0-9])/gi,hR={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function rC(t){return encodeURIComponent(t).replace(mR,(n,e)=>hR[e]??n)}function Xd(t){return`${t}`}var Ft=class t{map;encoder;updates=null;cloneFrom=null;constructor(n={}){if(this.encoder=n.encoder||new eu,n.fromString){if(n.fromObject)throw new I(2805,!1);this.map=fR(n.fromString,this.encoder)}else n.fromObject?(this.map=new Map,Object.keys(n.fromObject).forEach(e=>{let i=n.fromObject[e],r=Array.isArray(i)?i.map(Xd):[Xd(i)];this.map.set(e,r)})):this.map=null}has(n){return this.init(),this.map.has(n)}get(n){this.init();let e=this.map.get(n);return e?e[0]:null}getAll(n){return this.init(),this.map.get(n)||null}keys(){return this.init(),Array.from(this.map.keys())}append(n,e){return this.clone({param:n,value:e,op:"a"})}appendAll(n){let e=[];return Object.keys(n).forEach(i=>{let r=n[i];Array.isArray(r)?r.forEach(o=>{e.push({param:i,value:o,op:"a"})}):e.push({param:i,value:r,op:"a"})}),this.clone(e)}set(n,e){return this.clone({param:n,value:e,op:"s"})}delete(n,e){return this.clone({param:n,value:e,op:"d"})}toString(){return this.init(),this.keys().map(n=>{let e=this.encoder.encodeKey(n);return this.map.get(n).map(i=>e+"="+this.encoder.encodeValue(i)).join("&")}).filter(n=>n!=="").join("&")}clone(n){let e=new t({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(n),e}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(n=>this.map.set(n,this.cloneFrom.map.get(n))),this.updates.forEach(n=>{switch(n.op){case"a":case"s":let e=(n.op==="a"?this.map.get(n.param):void 0)||[];e.push(Xd(n.value)),this.map.set(n.param,e);break;case"d":if(n.value!==void 0){let i=this.map.get(n.param)||[],r=i.indexOf(Xd(n.value));r!==-1&&i.splice(r,1),i.length>0?this.map.set(n.param,i):this.map.delete(n.param)}else{this.map.delete(n.param);break}}}),this.cloneFrom=this.updates=null)}};function pR(t){switch(t){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function oC(t){return typeof ArrayBuffer<"u"&&t instanceof ArrayBuffer}function sC(t){return typeof Blob<"u"&&t instanceof Blob}function aC(t){return typeof FormData<"u"&&t instanceof FormData}function gR(t){return typeof URLSearchParams<"u"&&t instanceof URLSearchParams}var lC="Content-Type",cC="Accept",uC="text/plain",fC="application/json",vR=`${fC}, ${uC}, */*`,Ho=class t{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(n,e,i,r){this.url=e,this.method=n.toUpperCase();let o;if(pR(this.method)||r?(this.body=i!==void 0?i:null,o=r):o=i,o){if(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,this.keepalive=!!o.keepalive,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),o.priority&&(this.priority=o.priority),o.cache&&(this.cache=o.cache),o.credentials&&(this.credentials=o.credentials),typeof o.timeout=="number"){if(o.timeout<1||!Number.isInteger(o.timeout))throw new I(2822,"");this.timeout=o.timeout}o.mode&&(this.mode=o.mode),o.redirect&&(this.redirect=o.redirect),o.integrity&&(this.integrity=o.integrity),o.referrer&&(this.referrer=o.referrer),o.referrerPolicy&&(this.referrerPolicy=o.referrerPolicy),this.transferCache=o.transferCache}if(this.headers??=new Zi,this.context??=new Jd,!this.params)this.params=new Ft,this.urlWithParams=e;else{let s=this.params.toString();if(s.length===0)this.urlWithParams=e;else{let a=e.indexOf("?"),l=a===-1?"?":a<e.length-1?"&":"";this.urlWithParams=e+l+s}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||oC(this.body)||sC(this.body)||aC(this.body)||gR(this.body)?this.body:this.body instanceof Ft?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||aC(this.body)?null:sC(this.body)?this.body.type||null:oC(this.body)?null:typeof this.body=="string"?uC:this.body instanceof Ft?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?fC:null}clone(n={}){let e=n.method||this.method,i=n.url||this.url,r=n.responseType||this.responseType,o=n.keepalive??this.keepalive,s=n.priority||this.priority,a=n.cache||this.cache,l=n.mode||this.mode,c=n.redirect||this.redirect,u=n.credentials||this.credentials,f=n.referrer||this.referrer,m=n.integrity||this.integrity,h=n.referrerPolicy||this.referrerPolicy,y=n.transferCache??this.transferCache,x=n.timeout??this.timeout,T=n.body!==void 0?n.body:this.body,P=n.withCredentials??this.withCredentials,ve=n.reportProgress??this.reportProgress,ot=n.headers||this.headers,st=n.params||this.params,Ls=n.context??this.context;return n.setHeaders!==void 0&&(ot=Object.keys(n.setHeaders).reduce((js,cr)=>js.set(cr,n.setHeaders[cr]),ot)),n.setParams&&(st=Object.keys(n.setParams).reduce((js,cr)=>js.set(cr,n.setParams[cr]),st)),new t(e,i,T,{params:st,headers:ot,context:Ls,reportProgress:ve,responseType:r,withCredentials:P,transferCache:y,keepalive:o,cache:a,priority:s,timeout:x,mode:l,redirect:c,credentials:u,referrer:f,integrity:m,referrerPolicy:h})}},Vr=(function(t){return t[t.Sent=0]="Sent",t[t.UploadProgress=1]="UploadProgress",t[t.ResponseHeader=2]="ResponseHeader",t[t.DownloadProgress=3]="DownloadProgress",t[t.Response=4]="Response",t[t.User=5]="User",t})(Vr||{}),zo=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(n,e=200,i="OK"){this.headers=n.headers||new Zi,this.status=n.status!==void 0?n.status:e,this.statusText=n.statusText||i,this.url=n.url||null,this.redirected=n.redirected,this.responseType=n.responseType,this.ok=this.status>=200&&this.status<300}},tu=class t extends zo{constructor(n={}){super(n)}type=Vr.ResponseHeader;clone(n={}){return new t({headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0})}},Va=class t extends zo{body;constructor(n={}){super(n),this.body=n.body!==void 0?n.body:null}type=Vr.Response;clone(n={}){return new t({body:n.body!==void 0?n.body:this.body,headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0,redirected:n.redirected??this.redirected,responseType:n.responseType??this.responseType})}},Uo=class extends zo{name="HttpErrorResponse";message;error;ok=!1;constructor(n){super(n,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${n.url||"(unknown url)"}`:this.message=`Http failure response for ${n.url||"(unknown url)"}: ${n.status} ${n.statusText}`,this.error=n.error||null}},bR=200,_R=204;var yR=new v("");var wR=/^\)\]\}',?\n/;var hg=(()=>{class t{xhrFactory;tracingService=d(Cn,{optional:!0});constructor(e){this.xhrFactory=e}maybePropagateTrace(e){return this.tracingService?.propagate?this.tracingService.propagate(e):e}handle(e){if(e.method==="JSONP")throw new I(-2800,!1);let i=this.xhrFactory;return B(null).pipe(Qe(()=>new J(o=>{let s=i.build();if(s.open(e.method,e.urlWithParams),e.withCredentials&&(s.withCredentials=!0),e.headers.forEach((T,P)=>s.setRequestHeader(T,P.join(","))),e.headers.has(cC)||s.setRequestHeader(cC,vR),!e.headers.has(lC)){let T=e.detectContentTypeHeader();T!==null&&s.setRequestHeader(lC,T)}if(e.timeout&&(s.timeout=e.timeout),e.responseType){let T=e.responseType.toLowerCase();s.responseType=T!=="json"?T:"text"}let a=e.serializeBody(),l=null,c=()=>{if(l!==null)return l;let T=s.statusText||"OK",P=new Zi(s.getAllResponseHeaders()),ve=s.responseURL||e.url;return l=new tu({headers:P,status:s.status,statusText:T,url:ve}),l},u=this.maybePropagateTrace(()=>{let{headers:T,status:P,statusText:ve,url:ot}=c(),st=null;P!==_R&&(st=typeof s.response>"u"?s.responseText:s.response),P===0&&(P=st?bR:0);let Ls=P>=200&&P<300;if(e.responseType==="json"&&typeof st=="string"){let js=st;st=st.replace(wR,"");try{st=st!==""?JSON.parse(st):null}catch(cr){st=js,Ls&&(Ls=!1,st={error:cr,text:st})}}Ls?(o.next(new Va({body:st,headers:T,status:P,statusText:ve,url:ot||void 0})),o.complete()):o.error(new Uo({error:st,headers:T,status:P,statusText:ve,url:ot||void 0}))}),f=this.maybePropagateTrace(T=>{let{url:P}=c(),ve=new Uo({error:T,status:s.status||0,statusText:s.statusText||"Unknown Error",url:P||void 0});o.error(ve)}),m=f;e.timeout&&(m=this.maybePropagateTrace(T=>{let{url:P}=c(),ve=new Uo({error:new DOMException("Request timed out","TimeoutError"),status:s.status||0,statusText:s.statusText||"Request timeout",url:P||void 0});o.error(ve)}));let h=!1,y=this.maybePropagateTrace(T=>{h||(o.next(c()),h=!0);let P={type:Vr.DownloadProgress,loaded:T.loaded};T.lengthComputable&&(P.total=T.total),e.responseType==="text"&&s.responseText&&(P.partialText=s.responseText),o.next(P)}),x=this.maybePropagateTrace(T=>{let P={type:Vr.UploadProgress,loaded:T.loaded};T.lengthComputable&&(P.total=T.total),o.next(P)});return s.addEventListener("load",u),s.addEventListener("error",f),s.addEventListener("timeout",m),s.addEventListener("abort",f),e.reportProgress&&(s.addEventListener("progress",y),a!==null&&s.upload&&s.upload.addEventListener("progress",x)),s.send(a),o.next({type:Vr.Sent}),()=>{s.removeEventListener("error",f),s.removeEventListener("abort",f),s.removeEventListener("load",u),s.removeEventListener("timeout",m),e.reportProgress&&(s.removeEventListener("progress",y),a!==null&&s.upload&&s.upload.removeEventListener("progress",x)),s.readyState!==s.DONE&&s.abort()}})))}static \u0275fac=function(i){return new(i||t)(O(Br))};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function mC(t,n){return n(t)}function CR(t,n){return(e,i)=>n.intercept(e,{handle:r=>t(r,i)})}function DR(t,n,e){return(i,r)=>tt(e,()=>n(i,o=>t(o,r)))}var iu=new v(""),pg=new v("",{factory:()=>[]}),hC=new v(""),gg=new v("",{factory:()=>!0});function ER(){let t=null;return(n,e)=>{t===null&&(t=(d(iu,{optional:!0})??[]).reduceRight(CR,mC));let i=d(Mo);if(d(gg)){let o=i.add();return t(n,e).pipe(Fi(o))}else return t(n,e)}}var vg=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=O(hg),r},providedIn:"root"})}return t})();var nu=(()=>{class t{backend;injector;chain=null;pendingTasks=d(Mo);contributeToStability=d(gg);constructor(e,i){this.backend=e,this.injector=i}handle(e){if(this.chain===null){let i=Array.from(new Set([...this.injector.get(pg),...this.injector.get(hC,[])]));this.chain=i.reduceRight((r,o)=>DR(r,o,this.injector),mC)}if(this.contributeToStability){let i=this.pendingTasks.add();return this.chain(e,r=>this.backend.handle(r)).pipe(Fi(i))}else return this.chain(e,i=>this.backend.handle(i))}static \u0275fac=function(i){return new(i||t)(O(vg),O(we))};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),bg=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=O(nu),r},providedIn:"root"})}return t})();function mg(t,n){return{body:n,headers:t.headers,context:t.context,observe:t.observe,params:t.params,reportProgress:t.reportProgress,responseType:t.responseType,withCredentials:t.withCredentials,credentials:t.credentials,transferCache:t.transferCache,timeout:t.timeout,keepalive:t.keepalive,priority:t.priority,cache:t.cache,mode:t.mode,redirect:t.redirect,integrity:t.integrity,referrer:t.referrer,referrerPolicy:t.referrerPolicy}}var xt=(()=>{class t{handler;constructor(e){this.handler=e}request(e,i,r={}){let o;if(e instanceof Ho)o=e;else{let l;r.headers instanceof Zi?l=r.headers:l=new Zi(r.headers);let c;r.params&&(r.params instanceof Ft?c=r.params:c=new Ft({fromObject:r.params})),o=new Ho(e,i,r.body!==void 0?r.body:null,{headers:l,context:r.context,params:c,reportProgress:r.reportProgress,responseType:r.responseType||"json",withCredentials:r.withCredentials,transferCache:r.transferCache,keepalive:r.keepalive,priority:r.priority,cache:r.cache,mode:r.mode,redirect:r.redirect,credentials:r.credentials,referrer:r.referrer,referrerPolicy:r.referrerPolicy,integrity:r.integrity,timeout:r.timeout})}let s=B(o).pipe(Oi(l=>this.handler.handle(l)));if(e instanceof Ho||r.observe==="events")return s;let a=s.pipe(ge(l=>l instanceof Va));switch(r.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return a.pipe(ee(l=>{if(l.body!==null&&!(l.body instanceof ArrayBuffer))throw new I(2806,!1);return l.body}));case"blob":return a.pipe(ee(l=>{if(l.body!==null&&!(l.body instanceof Blob))throw new I(2807,!1);return l.body}));case"text":return a.pipe(ee(l=>{if(l.body!==null&&typeof l.body!="string")throw new I(2808,!1);return l.body}));default:return a.pipe(ee(l=>l.body))}case"response":return a;default:throw new I(2809,!1)}}delete(e,i={}){return this.request("DELETE",e,i)}get(e,i={}){return this.request("GET",e,i)}head(e,i={}){return this.request("HEAD",e,i)}jsonp(e,i){return this.request("JSONP",e,{params:new Ft().append(i,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,i={}){return this.request("OPTIONS",e,i)}patch(e,i,r={}){return this.request("PATCH",e,mg(r,i))}post(e,i,r={}){return this.request("POST",e,mg(r,i))}put(e,i,r={}){return this.request("PUT",e,mg(r,i))}static \u0275fac=function(i){return new(i||t)(O(bg))};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var xR=new v("",{factory:()=>!0}),IR="XSRF-TOKEN",MR=new v("",{factory:()=>IR}),SR="X-XSRF-TOKEN",TR=new v("",{factory:()=>SR}),kR=(()=>{class t{cookieName=d(MR);doc=d(V);lastCookieString="";lastToken=null;parseCount=0;getToken(){let e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=Fa(e,this.cookieName),this.lastCookieString=e),this.lastToken}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),pC=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=O(kR),r},providedIn:"root"})}return t})();function AR(t,n){if(!d(xR)||t.method==="GET"||t.method==="HEAD")return n(t);try{let r=d(wi).href,{origin:o}=new URL(r),{origin:s}=new URL(t.url,o);if(o!==s)return n(t)}catch{return n(t)}let e=d(pC).getToken(),i=d(TR);return e!=null&&!t.headers.has(i)&&(t=t.clone({headers:t.headers.set(i,e)})),n(t)}var _g=(function(t){return t[t.Interceptors=0]="Interceptors",t[t.LegacyInterceptors=1]="LegacyInterceptors",t[t.CustomXsrfConfiguration=2]="CustomXsrfConfiguration",t[t.NoXsrfProtection=3]="NoXsrfProtection",t[t.JsonpSupport=4]="JsonpSupport",t[t.RequestsMadeViaParent=5]="RequestsMadeViaParent",t[t.Fetch=6]="Fetch",t})(_g||{});function RR(t,n){return{\u0275kind:t,\u0275providers:n}}function yg(...t){let n=[xt,nu,{provide:bg,useExisting:nu},{provide:vg,useFactory:()=>d(yR,{optional:!0})??d(hg)},{provide:pg,useValue:AR,multi:!0}];for(let e of t)n.push(...e.\u0275providers);return Pn(n)}var dC=new v("");function wg(){return RR(_g.LegacyInterceptors,[{provide:dC,useFactory:ER},{provide:pg,useExisting:dC,multi:!0}])}var gC=(()=>{class t{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(i){return new(i||t)(O(V))};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Ha=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=O(OR),r},providedIn:"root"})}return t})(),OR=(()=>{class t extends Ha{_doc;constructor(e){super(),this._doc=e}sanitize(e,i){if(i==null)return null;switch(e){case vt.NONE:return i;case vt.HTML:return jr(i,"HTML")?wn(i):gp(this._doc,String(i)).toString();case vt.STYLE:return jr(i,"Style")?wn(i):i;case vt.SCRIPT:if(jr(i,"Script"))return wn(i);throw new I(5200,!1);case vt.URL:return jr(i,"URL")?wn(i):_d(String(i));case vt.RESOURCE_URL:if(jr(i,"ResourceURL"))return wn(i);throw new I(5201,!1);default:throw new I(5202,!1)}}bypassSecurityTrustHtml(e){return up(e)}bypassSecurityTrustStyle(e){return fp(e)}bypassSecurityTrustScript(e){return mp(e)}bypassSecurityTrustUrl(e){return hp(e)}bypassSecurityTrustResourceUrl(e){return pp(e)}static \u0275fac=function(i){return new(i||t)(O(V))};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var ie="primary",Ja=Symbol("RouteTitle"),Ig=class{params;constructor(n){this.params=n||{}}has(n){return Object.prototype.hasOwnProperty.call(this.params,n)}get(n){if(this.has(n)){let e=this.params[n];return Array.isArray(e)?e[0]:e}return null}getAll(n){if(this.has(n)){let e=this.params[n];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function Ur(t){return new Ig(t)}function Cg(t,n,e){for(let i=0;i<t.length;i++){let r=t[i],o=n[i];if(r[0]===":")e[r.substring(1)]=o;else if(r!==o.path)return!1}return!0}function xC(t,n,e){let i=e.path.split("/"),r=i.indexOf("**");if(r===-1){if(i.length>t.length||e.pathMatch==="full"&&(n.hasChildren()||i.length<t.length))return null;let l={},c=t.slice(0,i.length);return Cg(i,c,l)?{consumed:c,posParams:l}:null}if(r!==i.lastIndexOf("**"))return null;let o=i.slice(0,r),s=i.slice(r+1);if(o.length+s.length>t.length||e.pathMatch==="full"&&n.hasChildren()&&e.path!=="**")return null;let a={};return!Cg(o,t.slice(0,o.length),a)||!Cg(s,t.slice(t.length-s.length),a)?null:{consumed:t,posParams:a}}function cu(t){return new Promise((n,e)=>{t.pipe(li()).subscribe({next:i=>n(i),error:i=>e(i)})})}function FR(t,n){if(t.length!==n.length)return!1;for(let e=0;e<t.length;++e)if(!Xn(t[e],n[e]))return!1;return!0}function Xn(t,n){let e=t?Mg(t):void 0,i=n?Mg(n):void 0;if(!e||!i||e.length!=i.length)return!1;let r;for(let o=0;o<e.length;o++)if(r=e[o],!IC(t[r],n[r]))return!1;return!0}function Mg(t){return[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function IC(t,n){if(Array.isArray(t)&&Array.isArray(n)){if(t.length!==n.length)return!1;let e=[...t].sort(),i=[...n].sort();return e.every((r,o)=>i[o]===r)}else return t===n}function PR(t){return t.length>0?t[t.length-1]:null}function $r(t){return Gs(t)?t:bi(t)?Se(Promise.resolve(t)):B(t)}function MC(t){return Gs(t)?cu(t):Promise.resolve(t)}var LR={exact:kC,subset:AC},SC={exact:jR,subset:BR,ignored:()=>!0},TC={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},Sg={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};function bC(t,n,e){return LR[e.paths](t.root,n.root,e.matrixParams)&&SC[e.queryParams](t.queryParams,n.queryParams)&&!(e.fragment==="exact"&&t.fragment!==n.fragment)}function jR(t,n){return Xn(t,n)}function kC(t,n,e){if(!Hr(t.segments,n.segments)||!su(t.segments,n.segments,e)||t.numberOfChildren!==n.numberOfChildren)return!1;for(let i in n.children)if(!t.children[i]||!kC(t.children[i],n.children[i],e))return!1;return!0}function BR(t,n){return Object.keys(n).length<=Object.keys(t).length&&Object.keys(n).every(e=>IC(t[e],n[e]))}function AC(t,n,e){return RC(t,n,n.segments,e)}function RC(t,n,e,i){if(t.segments.length>e.length){let r=t.segments.slice(0,e.length);return!(!Hr(r,e)||n.hasChildren()||!su(r,e,i))}else if(t.segments.length===e.length){if(!Hr(t.segments,e)||!su(t.segments,e,i))return!1;for(let r in n.children)if(!t.children[r]||!AC(t.children[r],n.children[r],i))return!1;return!0}else{let r=e.slice(0,t.segments.length),o=e.slice(t.segments.length);return!Hr(t.segments,r)||!su(t.segments,r,i)||!t.children[ie]?!1:RC(t.children[ie],n,o,i)}}function su(t,n,e){return n.every((i,r)=>SC[e](t[r].parameters,i.parameters))}var fn=class{root;queryParams;fragment;_queryParamMap;constructor(n=new _e([],{}),e={},i=null){this.root=n,this.queryParams=e,this.fragment=i}get queryParamMap(){return this._queryParamMap??=Ur(this.queryParams),this._queryParamMap}toString(){return UR.serialize(this)}},_e=class{segments;children;parent=null;constructor(n,e){this.segments=n,this.children=e,Object.values(e).forEach(i=>i.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return au(this)}},Qi=class{path;parameters;_parameterMap;constructor(n,e){this.path=n,this.parameters=e}get parameterMap(){return this._parameterMap??=Ur(this.parameters),this._parameterMap}toString(){return OC(this)}};function VR(t,n){return Hr(t,n)&&t.every((e,i)=>Xn(e.parameters,n[i].parameters))}function Hr(t,n){return t.length!==n.length?!1:t.every((e,i)=>e.path===n[i].path)}function HR(t,n){let e=[];return Object.entries(t.children).forEach(([i,r])=>{i===ie&&(e=e.concat(n(r,i)))}),Object.entries(t.children).forEach(([i,r])=>{i!==ie&&(e=e.concat(n(r,i)))}),e}var Wr=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:()=>new Ei,providedIn:"root"})}return t})(),Ei=class{parse(n){let e=new kg(n);return new fn(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(n){let e=`/${Ua(n.root,!0)}`,i=WR(n.queryParams),r=typeof n.fragment=="string"?`#${zR(n.fragment)}`:"";return`${e}${i}${r}`}},UR=new Ei;function au(t){return t.segments.map(n=>OC(n)).join("/")}function Ua(t,n){if(!t.hasChildren())return au(t);if(n){let e=t.children[ie]?Ua(t.children[ie],!1):"",i=[];return Object.entries(t.children).forEach(([r,o])=>{r!==ie&&i.push(`${r}:${Ua(o,!1)}`)}),i.length>0?`${e}(${i.join("//")})`:e}else{let e=HR(t,(i,r)=>r===ie?[Ua(t.children[ie],!1)]:[`${r}:${Ua(i,!1)}`]);return Object.keys(t.children).length===1&&t.children[ie]!=null?`${au(t)}/${e[0]}`:`${au(t)}/(${e.join("//")})`}}function NC(t){return encodeURIComponent(t).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function ru(t){return NC(t).replace(/%3B/gi,";")}function zR(t){return encodeURI(t)}function Tg(t){return NC(t).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function lu(t){return decodeURIComponent(t)}function _C(t){return lu(t.replace(/\+/g,"%20"))}function OC(t){return`${Tg(t.path)}${$R(t.parameters)}`}function $R(t){return Object.entries(t).map(([n,e])=>`;${Tg(n)}=${Tg(e)}`).join("")}function WR(t){let n=Object.entries(t).map(([e,i])=>Array.isArray(i)?i.map(r=>`${ru(e)}=${ru(r)}`).join("&"):`${ru(e)}=${ru(i)}`).filter(e=>e);return n.length?`?${n.join("&")}`:""}var GR=/^[^\/()?;#]+/;function Dg(t){let n=t.match(GR);return n?n[0]:""}var qR=/^[^\/()?;=#]+/;function YR(t){let n=t.match(qR);return n?n[0]:""}var ZR=/^[^=?&#]+/;function QR(t){let n=t.match(ZR);return n?n[0]:""}var KR=/^[^&#]+/;function XR(t){let n=t.match(KR);return n?n[0]:""}var kg=class{url;remaining;constructor(n){this.url=n,this.remaining=n}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new _e([],{}):new _e([],this.parseChildren())}parseQueryParams(){let n={};if(this.consumeOptional("?"))do this.parseQueryParam(n);while(this.consumeOptional("&"));return n}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(n=0){if(n>50)throw new I(4010,!1);if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let i={};this.peekStartsWith("/(")&&(this.capture("/"),i=this.parseParens(!0,n));let r={};return this.peekStartsWith("(")&&(r=this.parseParens(!1,n)),(e.length>0||Object.keys(i).length>0)&&(r[ie]=new _e(e,i)),r}parseSegment(){let n=Dg(this.remaining);if(n===""&&this.peekStartsWith(";"))throw new I(4009,!1);return this.capture(n),new Qi(lu(n),this.parseMatrixParams())}parseMatrixParams(){let n={};for(;this.consumeOptional(";");)this.parseParam(n);return n}parseParam(n){let e=YR(this.remaining);if(!e)return;this.capture(e);let i="";if(this.consumeOptional("=")){let r=Dg(this.remaining);r&&(i=r,this.capture(i))}n[lu(e)]=lu(i)}parseQueryParam(n){let e=QR(this.remaining);if(!e)return;this.capture(e);let i="";if(this.consumeOptional("=")){let s=XR(this.remaining);s&&(i=s,this.capture(i))}let r=_C(e),o=_C(i);if(n.hasOwnProperty(r)){let s=n[r];Array.isArray(s)||(s=[s],n[r]=s),s.push(o)}else n[r]=o}parseParens(n,e){let i={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let r=Dg(this.remaining),o=this.remaining[r.length];if(o!=="/"&&o!==")"&&o!==";")throw new I(4010,!1);let s;r.indexOf(":")>-1?(s=r.slice(0,r.indexOf(":")),this.capture(s),this.capture(":")):n&&(s=ie);let a=this.parseChildren(e+1);i[s??ie]=Object.keys(a).length===1&&a[ie]?a[ie]:new _e([],a),this.consumeOptional("//")}return i}peekStartsWith(n){return this.remaining.startsWith(n)}consumeOptional(n){return this.peekStartsWith(n)?(this.remaining=this.remaining.substring(n.length),!0):!1}capture(n){if(!this.consumeOptional(n))throw new I(4011,!1)}};function FC(t){return t.segments.length>0?new _e([],{[ie]:t}):t}function PC(t){let n={};for(let[i,r]of Object.entries(t.children)){let o=PC(r);if(i===ie&&o.segments.length===0&&o.hasChildren())for(let[s,a]of Object.entries(o.children))n[s]=a;else(o.segments.length>0||o.hasChildren())&&(n[i]=o)}let e=new _e(t.segments,n);return JR(e)}function JR(t){if(t.numberOfChildren===1&&t.children[ie]){let n=t.children[ie];return new _e(t.segments.concat(n.segments),n.children)}return t}function Yo(t){return t instanceof fn}function LC(t,n,e=null,i=null,r=new Ei){let o=jC(t);return BC(o,n,e,i,r)}function jC(t){let n;function e(o){let s={};for(let l of o.children){let c=e(l);s[l.outlet]=c}let a=new _e(o.url,s);return o===t&&(n=a),a}let i=e(t.root),r=FC(i);return n??r}function BC(t,n,e,i,r){let o=t;for(;o.parent;)o=o.parent;if(n.length===0)return Eg(o,o,o,e,i,r);let s=eN(n);if(s.toRoot())return Eg(o,o,new _e([],{}),e,i,r);let a=tN(s,o,t),l=a.processChildren?$a(a.segmentGroup,a.index,s.commands):HC(a.segmentGroup,a.index,s.commands);return Eg(o,a.segmentGroup,l,e,i,r)}function du(t){return typeof t=="object"&&t!=null&&!t.outlets&&!t.segmentPath}function Ga(t){return typeof t=="object"&&t!=null&&t.outlets}function yC(t,n,e){t||="\u0275";let i=new fn;return i.queryParams={[t]:n},e.parse(e.serialize(i)).queryParams[t]}function Eg(t,n,e,i,r,o){let s={};for(let[c,u]of Object.entries(i??{}))s[c]=Array.isArray(u)?u.map(f=>yC(c,f,o)):yC(c,u,o);let a;t===n?a=e:a=VC(t,n,e);let l=FC(PC(a));return new fn(l,s,r)}function VC(t,n,e){let i={};return Object.entries(t.children).forEach(([r,o])=>{o===n?i[r]=e:i[r]=VC(o,n,e)}),new _e(t.segments,i)}var uu=class{isAbsolute;numberOfDoubleDots;commands;constructor(n,e,i){if(this.isAbsolute=n,this.numberOfDoubleDots=e,this.commands=i,n&&i.length>0&&du(i[0]))throw new I(4003,!1);let r=i.find(Ga);if(r&&r!==PR(i))throw new I(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function eN(t){if(typeof t[0]=="string"&&t.length===1&&t[0]==="/")return new uu(!0,0,t);let n=0,e=!1,i=t.reduce((r,o,s)=>{if(typeof o=="object"&&o!=null){if(o.outlets){let a={};return Object.entries(o.outlets).forEach(([l,c])=>{a[l]=typeof c=="string"?c.split("/"):c}),[...r,{outlets:a}]}if(o.segmentPath)return[...r,o.segmentPath]}return typeof o!="string"?[...r,o]:s===0?(o.split("/").forEach((a,l)=>{l==0&&a==="."||(l==0&&a===""?e=!0:a===".."?n++:a!=""&&r.push(a))}),r):[...r,o]},[]);return new uu(e,n,i)}var Wo=class{segmentGroup;processChildren;index;constructor(n,e,i){this.segmentGroup=n,this.processChildren=e,this.index=i}};function tN(t,n,e){if(t.isAbsolute)return new Wo(n,!0,0);if(!e)return new Wo(n,!1,NaN);if(e.parent===null)return new Wo(e,!0,0);let i=du(t.commands[0])?0:1,r=e.segments.length-1+i;return nN(e,r,t.numberOfDoubleDots)}function nN(t,n,e){let i=t,r=n,o=e;for(;o>r;){if(o-=r,i=i.parent,!i)throw new I(4005,!1);r=i.segments.length}return new Wo(i,!1,r-o)}function iN(t){return Ga(t[0])?t[0].outlets:{[ie]:t}}function HC(t,n,e){if(t??=new _e([],{}),t.segments.length===0&&t.hasChildren())return $a(t,n,e);let i=rN(t,n,e),r=e.slice(i.commandIndex);if(i.match&&i.pathIndex<t.segments.length){let o=new _e(t.segments.slice(0,i.pathIndex),{});return o.children[ie]=new _e(t.segments.slice(i.pathIndex),t.children),$a(o,0,r)}else return i.match&&r.length===0?new _e(t.segments,{}):i.match&&!t.hasChildren()?Ag(t,n,e):i.match?$a(t,0,r):Ag(t,n,e)}function $a(t,n,e){if(e.length===0)return new _e(t.segments,{});{let i=iN(e),r={};if(Object.keys(i).some(o=>o!==ie)&&t.children[ie]&&t.numberOfChildren===1&&t.children[ie].segments.length===0){let o=$a(t.children[ie],n,e);return new _e(t.segments,o.children)}return Object.entries(i).forEach(([o,s])=>{typeof s=="string"&&(s=[s]),s!==null&&(r[o]=HC(t.children[o],n,s))}),Object.entries(t.children).forEach(([o,s])=>{i[o]===void 0&&(r[o]=s)}),new _e(t.segments,r)}}function rN(t,n,e){let i=0,r=n,o={match:!1,pathIndex:0,commandIndex:0};for(;r<t.segments.length;){if(i>=e.length)return o;let s=t.segments[r],a=e[i];if(Ga(a))break;let l=`${a}`,c=i<e.length-1?e[i+1]:null;if(r>0&&l===void 0)break;if(l&&c&&typeof c=="object"&&c.outlets===void 0){if(!CC(l,c,s))return o;i+=2}else{if(!CC(l,{},s))return o;i++}r++}return{match:!0,pathIndex:r,commandIndex:i}}function Ag(t,n,e){let i=t.segments.slice(0,n),r=0;for(;r<e.length;){let o=e[r];if(Ga(o)){let l=oN(o.outlets);return new _e(i,l)}if(r===0&&du(e[0])){let l=t.segments[n];i.push(new Qi(l.path,wC(e[0]))),r++;continue}let s=Ga(o)?o.outlets[ie]:`${o}`,a=r<e.length-1?e[r+1]:null;s&&a&&du(a)?(i.push(new Qi(s,wC(a))),r+=2):(i.push(new Qi(s,{})),r++)}return new _e(i,{})}function oN(t){let n={};return Object.entries(t).forEach(([e,i])=>{typeof i=="string"&&(i=[i]),i!==null&&(n[e]=Ag(new _e([],{}),0,i))}),n}function wC(t){let n={};return Object.entries(t).forEach(([e,i])=>n[e]=`${i}`),n}function CC(t,n,e){return t==e.path&&Xn(n,e.parameters)}var Go="imperative",it=(function(t){return t[t.NavigationStart=0]="NavigationStart",t[t.NavigationEnd=1]="NavigationEnd",t[t.NavigationCancel=2]="NavigationCancel",t[t.NavigationError=3]="NavigationError",t[t.RoutesRecognized=4]="RoutesRecognized",t[t.ResolveStart=5]="ResolveStart",t[t.ResolveEnd=6]="ResolveEnd",t[t.GuardsCheckStart=7]="GuardsCheckStart",t[t.GuardsCheckEnd=8]="GuardsCheckEnd",t[t.RouteConfigLoadStart=9]="RouteConfigLoadStart",t[t.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",t[t.ChildActivationStart=11]="ChildActivationStart",t[t.ChildActivationEnd=12]="ChildActivationEnd",t[t.ActivationStart=13]="ActivationStart",t[t.ActivationEnd=14]="ActivationEnd",t[t.Scroll=15]="Scroll",t[t.NavigationSkipped=16]="NavigationSkipped",t})(it||{}),Jt=class{id;url;constructor(n,e){this.id=n,this.url=e}},Ki=class extends Jt{type=it.NavigationStart;navigationTrigger;restoredState;constructor(n,e,i="imperative",r=null){super(n,e),this.navigationTrigger=i,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},Sn=class extends Jt{urlAfterRedirects;type=it.NavigationEnd;constructor(n,e,i){super(n,e),this.urlAfterRedirects=i}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},It=(function(t){return t[t.Redirect=0]="Redirect",t[t.SupersededByNewNavigation=1]="SupersededByNewNavigation",t[t.NoDataFromResolver=2]="NoDataFromResolver",t[t.GuardRejected=3]="GuardRejected",t[t.Aborted=4]="Aborted",t})(It||{}),Zo=(function(t){return t[t.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",t[t.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",t})(Zo||{}),un=class extends Jt{reason;code;type=it.NavigationCancel;constructor(n,e,i,r){super(n,e),this.reason=i,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function UC(t){return t instanceof un&&(t.code===It.Redirect||t.code===It.SupersededByNewNavigation)}var Jn=class extends Jt{reason;code;type=it.NavigationSkipped;constructor(n,e,i,r){super(n,e),this.reason=i,this.code=r}},zr=class extends Jt{error;target;type=it.NavigationError;constructor(n,e,i,r){super(n,e),this.error=i,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},qa=class extends Jt{urlAfterRedirects;state;type=it.RoutesRecognized;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},fu=class extends Jt{urlAfterRedirects;state;type=it.GuardsCheckStart;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},mu=class extends Jt{urlAfterRedirects;state;shouldActivate;type=it.GuardsCheckEnd;constructor(n,e,i,r,o){super(n,e),this.urlAfterRedirects=i,this.state=r,this.shouldActivate=o}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},hu=class extends Jt{urlAfterRedirects;state;type=it.ResolveStart;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},pu=class extends Jt{urlAfterRedirects;state;type=it.ResolveEnd;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},gu=class{route;type=it.RouteConfigLoadStart;constructor(n){this.route=n}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},vu=class{route;type=it.RouteConfigLoadEnd;constructor(n){this.route=n}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},bu=class{snapshot;type=it.ChildActivationStart;constructor(n){this.snapshot=n}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},_u=class{snapshot;type=it.ChildActivationEnd;constructor(n){this.snapshot=n}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},yu=class{snapshot;type=it.ActivationStart;constructor(n){this.snapshot=n}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},wu=class{snapshot;type=it.ActivationEnd;constructor(n){this.snapshot=n}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Qo=class{routerEvent;position;anchor;scrollBehavior;type=it.Scroll;constructor(n,e,i,r){this.routerEvent=n,this.position=e,this.anchor=i,this.scrollBehavior=r}toString(){let n=this.position?`${this.position[0]}, ${this.position[1]}`:null;return`Scroll(anchor: '${this.anchor}', position: '${n}')`}},Ko=class{},Ya=class{},Xo=class{url;navigationBehaviorOptions;constructor(n,e){this.url=n,this.navigationBehaviorOptions=e}};function sN(t){return!(t instanceof Ko)&&!(t instanceof Xo)&&!(t instanceof Ya)}var Cu=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(n){this.rootInjector=n,this.children=new Gr(this.rootInjector)}},Gr=(()=>{class t{rootInjector;contexts=new Map;constructor(e){this.rootInjector=e}onChildOutletCreated(e,i){let r=this.getOrCreateContext(e);r.outlet=i,this.contexts.set(e,r)}onChildOutletDestroyed(e){let i=this.getContext(e);i&&(i.outlet=null,i.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let i=this.getContext(e);return i||(i=new Cu(this.rootInjector),this.contexts.set(e,i)),i}getContext(e){return this.contexts.get(e)||null}static \u0275fac=function(i){return new(i||t)(O(we))};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Du=class{_root;constructor(n){this._root=n}get root(){return this._root.value}parent(n){let e=this.pathFromRoot(n);return e.length>1?e[e.length-2]:null}children(n){let e=Rg(n,this._root);return e?e.children.map(i=>i.value):[]}firstChild(n){let e=Rg(n,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(n){let e=Ng(n,this._root);return e.length<2?[]:e[e.length-2].children.map(r=>r.value).filter(r=>r!==n)}pathFromRoot(n){return Ng(n,this._root).map(e=>e.value)}};function Rg(t,n){if(t===n.value)return n;for(let e of n.children){let i=Rg(t,e);if(i)return i}return null}function Ng(t,n){if(t===n.value)return[n];for(let e of n.children){let i=Ng(t,e);if(i.length)return i.unshift(n),i}return[]}var Xt=class{value;children;constructor(n,e){this.value=n,this.children=e}toString(){return`TreeNode(${this.value})`}};function $o(t){let n={};return t&&t.children.forEach(e=>n[e.value.outlet]=e),n}var Za=class extends Du{snapshot;constructor(n,e){super(n),this.snapshot=e,Ug(this,n)}toString(){return this.snapshot.toString()}};function zC(t,n){let e=aN(t,n),i=new Ze([new Qi("",{})]),r=new Ze({}),o=new Ze({}),s=new Ze({}),a=new Ze(""),l=new xi(i,r,s,a,o,ie,t,e.root);return l.snapshot=e.root,new Za(new Xt(l,[]),e)}function aN(t,n){let e={},i={},r={},s=new Jo([],e,r,"",i,ie,t,null,{},n);return new Qa("",new Xt(s,[]))}var xi=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(n,e,i,r,o,s,a,l){this.urlSubject=n,this.paramsSubject=e,this.queryParamsSubject=i,this.fragmentSubject=r,this.dataSubject=o,this.outlet=s,this.component=a,this._futureSnapshot=l,this.title=this.dataSubject?.pipe(ee(c=>c[Ja]))??B(void 0),this.url=n,this.params=e,this.queryParams=i,this.fragment=r,this.data=o}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(ee(n=>Ur(n))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(ee(n=>Ur(n))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function Hg(t,n,e="emptyOnly"){let i,{routeConfig:r}=t;return n!==null&&(e==="always"||r?.path===""||!n.component&&!n.routeConfig?.loadComponent)?i={params:_(_({},n.params),t.params),data:_(_({},n.data),t.data),resolve:_(_(_(_({},t.data),n.data),r?.data),t._resolvedData)}:i={params:_({},t.params),data:_({},t.data),resolve:_(_({},t.data),t._resolvedData??{})},r&&WC(r)&&(i.resolve[Ja]=r.title),i}var Jo=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;get title(){return this.data?.[Ja]}constructor(n,e,i,r,o,s,a,l,c,u){this.url=n,this.params=e,this.queryParams=i,this.fragment=r,this.data=o,this.outlet=s,this.component=a,this.routeConfig=l,this._resolve=c,this._environmentInjector=u}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=Ur(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=Ur(this.queryParams),this._queryParamMap}toString(){let n=this.url.map(i=>i.toString()).join("/"),e=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${n}', path:'${e}')`}},Qa=class extends Du{url;constructor(n,e){super(e),this.url=n,Ug(this,e)}toString(){return $C(this._root)}};function Ug(t,n){n.value._routerState=t,n.children.forEach(e=>Ug(t,e))}function $C(t){let n=t.children.length>0?` { ${t.children.map($C).join(", ")} } `:"";return`${t.value}${n}`}function xg(t){if(t.snapshot){let n=t.snapshot,e=t._futureSnapshot;t.snapshot=e,Xn(n.queryParams,e.queryParams)||t.queryParamsSubject.next(e.queryParams),n.fragment!==e.fragment&&t.fragmentSubject.next(e.fragment),Xn(n.params,e.params)||t.paramsSubject.next(e.params),FR(n.url,e.url)||t.urlSubject.next(e.url),Xn(n.data,e.data)||t.dataSubject.next(e.data)}else t.snapshot=t._futureSnapshot,t.dataSubject.next(t._futureSnapshot.data)}function Og(t,n){let e=Xn(t.params,n.params)&&VR(t.url,n.url),i=!t.parent!=!n.parent;return e&&!i&&(!t.parent||Og(t.parent,n.parent))}function WC(t){return typeof t.title=="string"||t.title===null}var GC=new v(""),el=(()=>{class t{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=ie;activateEvents=new A;deactivateEvents=new A;attachEvents=new A;detachEvents=new A;routerOutletData=yi();parentContexts=d(Gr);location=d(lt);changeDetector=d(Oe);inputBinder=d(tl,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(e){if(e.name){let{firstChange:i,previousValue:r}=e.name;if(i)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new I(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new I(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new I(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,i){this.activated=e,this._activatedRoute=i,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,i){if(this.isActivated)throw new I(4013,!1);this._activatedRoute=e;let r=this.location,s=e.snapshot.component,a=this.parentContexts.getOrCreateContext(this.name).children,l=new Fg(e,a,r.injector,this.routerOutletData);this.activated=r.createComponent(s,{index:r.length,injector:l,environmentInjector:i}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(i){return new(i||t)};static \u0275dir=M({type:t,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[He]})}return t})(),Fg=class{route;childContexts;parent;outletData;constructor(n,e,i,r){this.route=n,this.childContexts=e,this.parent=i,this.outletData=r}get(n,e){return n===xi?this.route:n===Gr?this.childContexts:n===GC?this.outletData:this.parent.get(n,e)}},tl=new v(""),zg=(()=>{class t{outletDataSubscriptions=new Map;bindActivatedRouteToOutletComponent(e){this.unsubscribeFromRouteData(e),this.subscribeToRouteData(e)}unsubscribeFromRouteData(e){this.outletDataSubscriptions.get(e)?.unsubscribe(),this.outletDataSubscriptions.delete(e)}subscribeToRouteData(e){let{activatedRoute:i}=e,r=po([i.queryParams,i.params,i.data]).pipe(Qe(([o,s,a],l)=>(a=_(_(_({},o),s),a),l===0?B(a):Promise.resolve(a)))).subscribe(o=>{if(!e.isActivated||!e.activatedComponentRef||e.activatedRoute!==i||i.component===null){this.unsubscribeFromRouteData(e);return}let s=W0(i.component);if(!s){this.unsubscribeFromRouteData(e);return}for(let{templateName:a}of s.inputs)e.activatedComponentRef.setInput(a,o[a])});this.outletDataSubscriptions.set(e,r)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})(),$g=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=E({type:t,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(i,r){i&1&&ne(0,"router-outlet")},dependencies:[el],encapsulation:2})}return t})();function Wg(t){let n=t.children&&t.children.map(Wg),e=n?X(_({},t),{children:n}):_({},t);return!e.component&&!e.loadComponent&&(n||e.loadChildren)&&e.outlet&&e.outlet!==ie&&(e.component=$g),e}function lN(t,n,e){let i=Ka(t,n._root,e?e._root:void 0);return new Za(i,n)}function Ka(t,n,e){if(e&&t.shouldReuseRoute(n.value,e.value.snapshot)){let i=e.value;i._futureSnapshot=n.value;let r=cN(t,n,e);return new Xt(i,r)}else{if(t.shouldAttach(n.value)){let o=t.retrieve(n.value);if(o!==null){let s=o.route;return s.value._futureSnapshot=n.value,s.children=n.children.map(a=>Ka(t,a)),s}}let i=dN(n.value),r=n.children.map(o=>Ka(t,o));return new Xt(i,r)}}function cN(t,n,e){return n.children.map(i=>{for(let r of e.children)if(t.shouldReuseRoute(i.value,r.value.snapshot))return Ka(t,i,r);return Ka(t,i)})}function dN(t){return new xi(new Ze(t.url),new Ze(t.params),new Ze(t.queryParams),new Ze(t.fragment),new Ze(t.data),t.outlet,t.component,t)}var es=class{redirectTo;navigationBehaviorOptions;constructor(n,e){this.redirectTo=n,this.navigationBehaviorOptions=e}},qC="ngNavigationCancelingError";function Eu(t,n){let{redirectTo:e,navigationBehaviorOptions:i}=Yo(n)?{redirectTo:n,navigationBehaviorOptions:void 0}:n,r=YC(!1,It.Redirect);return r.url=e,r.navigationBehaviorOptions=i,r}function YC(t,n){let e=new Error(`NavigationCancelingError: ${t||""}`);return e[qC]=!0,e.cancellationCode=n,e}function uN(t){return ZC(t)&&Yo(t.url)}function ZC(t){return!!t&&t[qC]}var Pg=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(n,e,i,r,o){this.routeReuseStrategy=n,this.futureState=e,this.currState=i,this.forwardEvent=r,this.inputBindingEnabled=o}activate(n){let e=this.futureState._root,i=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,i,n),xg(this.futureState.root),this.activateChildRoutes(e,i,n)}deactivateChildRoutes(n,e,i){let r=$o(e);n.children.forEach(o=>{let s=o.value.outlet;this.deactivateRoutes(o,r[s],i),delete r[s]}),Object.values(r).forEach(o=>{this.deactivateRouteAndItsChildren(o,i)})}deactivateRoutes(n,e,i){let r=n.value,o=e?e.value:null;if(r===o)if(r.component){let s=i.getContext(r.outlet);s&&this.deactivateChildRoutes(n,e,s.children)}else this.deactivateChildRoutes(n,e,i);else o&&this.deactivateRouteAndItsChildren(e,i)}deactivateRouteAndItsChildren(n,e){n.value.component&&this.routeReuseStrategy.shouldDetach(n.value.snapshot)?this.detachAndStoreRouteSubtree(n,e):this.deactivateRouteAndOutlet(n,e)}detachAndStoreRouteSubtree(n,e){let i=e.getContext(n.value.outlet),r=i&&n.value.component?i.children:e,o=$o(n);for(let s of Object.values(o))this.deactivateRouteAndItsChildren(s,r);if(i&&i.outlet){let s=i.outlet.detach(),a=i.children.onOutletDeactivated();this.routeReuseStrategy.store(n.value.snapshot,{componentRef:s,route:n,contexts:a})}}deactivateRouteAndOutlet(n,e){let i=e.getContext(n.value.outlet),r=i&&n.value.component?i.children:e,o=$o(n);for(let s of Object.values(o))this.deactivateRouteAndItsChildren(s,r);i&&(i.outlet&&(i.outlet.deactivate(),i.children.onOutletDeactivated()),i.attachRef=null,i.route=null)}activateChildRoutes(n,e,i){let r=$o(e);n.children.forEach(o=>{this.activateRoutes(o,r[o.value.outlet],i),this.forwardEvent(new wu(o.value.snapshot))}),n.children.length&&this.forwardEvent(new _u(n.value.snapshot))}activateRoutes(n,e,i){let r=n.value,o=e?e.value:null;if(xg(r),r===o)if(r.component){let s=i.getOrCreateContext(r.outlet);this.activateChildRoutes(n,e,s.children)}else this.activateChildRoutes(n,e,i);else if(r.component){let s=i.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let a=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),s.children.onOutletReAttached(a.contexts),s.attachRef=a.componentRef,s.route=a.route.value,s.outlet&&s.outlet.attach(a.componentRef,a.route.value),xg(a.route.value),this.activateChildRoutes(n,null,s.children)}else s.attachRef=null,s.route=r,s.outlet&&s.outlet.activateWith(r,s.injector),this.activateChildRoutes(n,null,s.children)}else this.activateChildRoutes(n,null,i)}},xu=class{path;route;constructor(n){this.path=n,this.route=this.path[this.path.length-1]}},qo=class{component;route;constructor(n,e){this.component=n,this.route=e}};function fN(t,n,e){let i=t._root,r=n?n._root:null;return za(i,r,e,[i.value])}function mN(t){let n=t.routeConfig?t.routeConfig.canActivateChild:null;return!n||n.length===0?null:{node:t,guards:n}}function ns(t,n){let e=Symbol(),i=n.get(t,e);return i===e?typeof t=="function"&&!Cm(t)?t:n.get(t):i}function za(t,n,e,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=$o(n);return t.children.forEach(s=>{hN(s,o[s.value.outlet],e,i.concat([s.value]),r),delete o[s.value.outlet]}),Object.entries(o).forEach(([s,a])=>Wa(a,e.getContext(s),r)),r}function hN(t,n,e,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=t.value,s=n?n.value:null,a=e?e.getContext(t.value.outlet):null;if(s&&o.routeConfig===s.routeConfig){let l=pN(s,o,o.routeConfig.runGuardsAndResolvers);l?r.canActivateChecks.push(new xu(i)):(o.data=s.data,o._resolvedData=s._resolvedData),o.component?za(t,n,a?a.children:null,i,r):za(t,n,e,i,r),l&&a&&a.outlet&&a.outlet.isActivated&&r.canDeactivateChecks.push(new qo(a.outlet.component,s))}else s&&Wa(n,a,r),r.canActivateChecks.push(new xu(i)),o.component?za(t,null,a?a.children:null,i,r):za(t,null,e,i,r);return r}function pN(t,n,e){if(typeof e=="function")return tt(n._environmentInjector,()=>e(t,n));switch(e){case"pathParamsChange":return!Hr(t.url,n.url);case"pathParamsOrQueryParamsChange":return!Hr(t.url,n.url)||!Xn(t.queryParams,n.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!Og(t,n)||!Xn(t.queryParams,n.queryParams);default:return!Og(t,n)}}function Wa(t,n,e){let i=$o(t),r=t.value;Object.entries(i).forEach(([o,s])=>{r.component?n?Wa(s,n.children.getContext(o),e):Wa(s,null,e):Wa(s,n,e)}),r.component?n&&n.outlet&&n.outlet.isActivated?e.canDeactivateChecks.push(new qo(n.outlet.component,r)):e.canDeactivateChecks.push(new qo(null,r)):e.canDeactivateChecks.push(new qo(null,r))}function nl(t){return typeof t=="function"}function gN(t){return typeof t=="boolean"}function vN(t){return t&&nl(t.canLoad)}function bN(t){return t&&nl(t.canActivate)}function _N(t){return t&&nl(t.canActivateChild)}function yN(t){return t&&nl(t.canDeactivate)}function wN(t){return t&&nl(t.canMatch)}function QC(t){return t instanceof br||t?.name==="EmptyError"}var ou=Symbol("INITIAL_VALUE");function ts(){return Qe(t=>po(t.map(n=>n.pipe(Tt(1),kt(ou)))).pipe(ee(n=>{for(let e of n)if(e!==!0){if(e===ou)return ou;if(e===!1||CN(e))return e}return!0}),ge(n=>n!==ou),Tt(1)))}function CN(t){return Yo(t)||t instanceof es}function KC(t){return t.aborted?B(void 0).pipe(Tt(1)):new J(n=>{let e=()=>{n.next(),n.complete()};return t.addEventListener("abort",e),()=>t.removeEventListener("abort",e)})}function XC(t){return me(KC(t))}function DN(t){return mt(n=>{let{targetSnapshot:e,currentSnapshot:i,guards:{canActivateChecks:r,canDeactivateChecks:o}}=n;return o.length===0&&r.length===0?B(X(_({},n),{guardsResult:!0})):EN(o,e,i).pipe(mt(s=>s&&gN(s)?xN(e,r,t):B(s)),ee(s=>X(_({},n),{guardsResult:s})))})}function EN(t,n,e){return Se(t).pipe(mt(i=>kN(i.component,i.route,e,n)),li(i=>i!==!0,!0))}function xN(t,n,e){return Se(n).pipe(Oi(i=>Ri(MN(i.route.parent,e),IN(i.route,e),TN(t,i.path),SN(t,i.route))),li(i=>i!==!0,!0))}function IN(t,n){return t!==null&&n&&n(new yu(t)),B(!0)}function MN(t,n){return t!==null&&n&&n(new bu(t)),B(!0)}function SN(t,n){let e=n.routeConfig?n.routeConfig.canActivate:null;if(!e||e.length===0)return B(!0);let i=e.map(r=>_r(()=>{let o=n._environmentInjector,s=ns(r,o),a=bN(s)?s.canActivate(n,t):tt(o,()=>s(n,t));return $r(a).pipe(li())}));return B(i).pipe(ts())}function TN(t,n){let e=n[n.length-1],r=n.slice(0,n.length-1).reverse().map(o=>mN(o)).filter(o=>o!==null).map(o=>_r(()=>{let s=o.guards.map(a=>{let l=o.node._environmentInjector,c=ns(a,l),u=_N(c)?c.canActivateChild(e,t):tt(l,()=>c(e,t));return $r(u).pipe(li())});return B(s).pipe(ts())}));return B(r).pipe(ts())}function kN(t,n,e,i){let r=n&&n.routeConfig?n.routeConfig.canDeactivate:null;if(!r||r.length===0)return B(!0);let o=r.map(s=>{let a=n._environmentInjector,l=ns(s,a),c=yN(l)?l.canDeactivate(t,n,e,i):tt(a,()=>l(t,n,e,i));return $r(c).pipe(li())});return B(o).pipe(ts())}function AN(t,n,e,i,r){let o=n.canLoad;if(o===void 0||o.length===0)return B(!0);let s=o.map(a=>{let l=ns(a,t),c=vN(l)?l.canLoad(n,e):tt(t,()=>l(n,e)),u=$r(c);return r?u.pipe(XC(r)):u});return B(s).pipe(ts(),JC(i))}function JC(t){return tm($e(n=>{if(typeof n!="boolean")throw Eu(t,n)}),ee(n=>n===!0))}function RN(t,n,e,i,r,o){let s=n.canMatch;if(!s||s.length===0)return B(!0);let a=s.map(l=>{let c=ns(l,t),u=wN(c)?c.canMatch(n,e,r):tt(t,()=>c(n,e,r));return $r(u).pipe(XC(o))});return B(a).pipe(ts(),JC(i))}var Di=class t extends Error{segmentGroup;constructor(n){super(),this.segmentGroup=n||null,Object.setPrototypeOf(this,t.prototype)}},Xa=class t extends Error{urlTree;constructor(n){super(),this.urlTree=n,Object.setPrototypeOf(this,t.prototype)}};function NN(t){throw new I(4e3,!1)}function ON(t){throw YC(!1,It.GuardRejected)}var Lg=class{urlSerializer;urlTree;constructor(n,e){this.urlSerializer=n,this.urlTree=e}async lineralizeSegments(n,e){let i=[],r=e.root;for(;;){if(i=i.concat(r.segments),r.numberOfChildren===0)return i;if(r.numberOfChildren>1||!r.children[ie])throw NN(`${n.redirectTo}`);r=r.children[ie]}}async applyRedirectCommands(n,e,i,r,o){let s=await FN(e,r,o);if(s instanceof fn)throw new Xa(s);let a=this.applyRedirectCreateUrlTree(s,this.urlSerializer.parse(s),n,i);if(s[0]==="/")throw new Xa(a);return a}applyRedirectCreateUrlTree(n,e,i,r){let o=this.createSegmentGroup(n,e.root,i,r);return new fn(o,this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(n,e){let i={};return Object.entries(n).forEach(([r,o])=>{if(typeof o=="string"&&o[0]===":"){let a=o.substring(1);i[r]=e[a]}else i[r]=o}),i}createSegmentGroup(n,e,i,r){let o=this.createSegments(n,e.segments,i,r),s={};return Object.entries(e.children).forEach(([a,l])=>{s[a]=this.createSegmentGroup(n,l,i,r)}),new _e(o,s)}createSegments(n,e,i,r){return e.map(o=>o.path[0]===":"?this.findPosParam(n,o,r):this.findOrReturn(o,i))}findPosParam(n,e,i){let r=i[e.path.substring(1)];if(!r)throw new I(4001,!1);return r}findOrReturn(n,e){let i=0;for(let r of e){if(r.path===n.path)return e.splice(i),r;i++}return n}};function FN(t,n,e){if(typeof t=="string")return Promise.resolve(t);let i=t;return cu($r(tt(e,()=>i(n))))}function PN(t,n){return t.providers&&!t._injector&&(t._injector=Bo(t.providers,n,`Route: ${t.path}`)),t._injector??n}function Mn(t){return t.outlet||ie}function LN(t,n){let e=t.filter(i=>Mn(i)===n);return e.push(...t.filter(i=>Mn(i)!==n)),e}var jg={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function eD(t){return{routeConfig:t.routeConfig,url:t.url,params:t.params,queryParams:t.queryParams,fragment:t.fragment,data:t.data,outlet:t.outlet,title:t.title,paramMap:t.paramMap,queryParamMap:t.queryParamMap}}function jN(t,n,e,i,r,o,s){let a=tD(t,n,e);if(!a.matched)return B(a);let l=eD(o(a));return i=PN(n,i),RN(i,n,e,r,l,s).pipe(ee(c=>c===!0?a:_({},jg)))}function tD(t,n,e){if(n.path==="")return n.pathMatch==="full"&&(t.hasChildren()||e.length>0)?_({},jg):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let r=(n.matcher||xC)(e,t,n);if(!r)return _({},jg);let o={};Object.entries(r.posParams??{}).forEach(([a,l])=>{o[a]=l.path});let s=r.consumed.length>0?_(_({},o),r.consumed[r.consumed.length-1].parameters):o;return{matched:!0,consumedSegments:r.consumed,remainingSegments:e.slice(r.consumed.length),parameters:s,positionalParamSegments:r.posParams??{}}}function DC(t,n,e,i,r){return e.length>0&&HN(t,e,i,r)?{segmentGroup:new _e(n,VN(i,new _e(e,t.children))),slicedSegments:[]}:e.length===0&&UN(t,e,i)?{segmentGroup:new _e(t.segments,BN(t,e,i,t.children)),slicedSegments:e}:{segmentGroup:new _e(t.segments,t.children),slicedSegments:e}}function BN(t,n,e,i){let r={};for(let o of e)if(Mu(t,n,o)&&!i[Mn(o)]){let s=new _e([],{});r[Mn(o)]=s}return _(_({},i),r)}function VN(t,n){let e={};e[ie]=n;for(let i of t)if(i.path===""&&Mn(i)!==ie){let r=new _e([],{});e[Mn(i)]=r}return e}function HN(t,n,e,i){return e.some(r=>!Mu(t,n,r)||!(Mn(r)!==ie)?!1:!(i!==void 0&&Mn(r)===i))}function UN(t,n,e){return e.some(i=>Mu(t,n,i))}function Mu(t,n,e){return(t.hasChildren()||n.length>0)&&e.pathMatch==="full"?!1:e.path===""}function zN(t,n,e){return n.length===0&&!t.children[e]}var Bg=class{};async function $N(t,n,e,i,r,o,s="emptyOnly",a){return new Vg(t,n,e,i,r,s,o,a).recognize()}var WN=31,Vg=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(n,e,i,r,o,s,a,l){this.injector=n,this.configLoader=e,this.rootComponentType=i,this.config=r,this.urlTree=o,this.paramsInheritanceStrategy=s,this.urlSerializer=a,this.abortSignal=l,this.applyRedirects=new Lg(this.urlSerializer,this.urlTree)}noMatchError(n){return new I(4002,`'${n.segmentGroup}'`)}async recognize(){let n=DC(this.urlTree.root,[],[],this.config).segmentGroup,{children:e,rootSnapshot:i}=await this.match(n),r=new Xt(i,e),o=new Qa("",r),s=LC(i,[],this.urlTree.queryParams,this.urlTree.fragment);return s.queryParams=this.urlTree.queryParams,o.url=this.urlSerializer.serialize(s),{state:o,tree:s}}async match(n){let e=new Jo([],Object.freeze({}),Object.freeze(_({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),ie,this.rootComponentType,null,{},this.injector);try{return{children:await this.processSegmentGroup(this.injector,this.config,n,ie,e),rootSnapshot:e}}catch(i){if(i instanceof Xa)return this.urlTree=i.urlTree,this.match(i.urlTree.root);throw i instanceof Di?this.noMatchError(i):i}}async processSegmentGroup(n,e,i,r,o){if(i.segments.length===0&&i.hasChildren())return this.processChildren(n,e,i,o);let s=await this.processSegment(n,e,i,i.segments,r,!0,o);return s instanceof Xt?[s]:[]}async processChildren(n,e,i,r){let o=[];for(let l of Object.keys(i.children))l==="primary"?o.unshift(l):o.push(l);let s=[];for(let l of o){let c=i.children[l],u=LN(e,l),f=await this.processSegmentGroup(n,u,c,l,r);s.push(...f)}let a=nD(s);return GN(a),a}async processSegment(n,e,i,r,o,s,a){for(let l of e)try{return await this.processSegmentAgainstRoute(l._injector??n,e,l,i,r,o,s,a)}catch(c){if(c instanceof Di||QC(c))continue;throw c}if(zN(i,r,o))return new Bg;throw new Di(i)}async processSegmentAgainstRoute(n,e,i,r,o,s,a,l){if(Mn(i)!==s&&(s===ie||!Mu(r,o,i)))throw new Di(r);if(i.redirectTo===void 0)return this.matchSegmentAgainstRoute(n,r,i,o,s,l);if(this.allowRedirects&&a)return this.expandSegmentAgainstRouteUsingRedirect(n,r,e,i,o,s,l);throw new Di(r)}async expandSegmentAgainstRouteUsingRedirect(n,e,i,r,o,s,a){let{matched:l,parameters:c,consumedSegments:u,positionalParamSegments:f,remainingSegments:m}=tD(e,r,o);if(!l)throw new Di(e);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>WN&&(this.allowRedirects=!1));let h=this.createSnapshot(n,r,o,c,a);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let y=await this.applyRedirects.applyRedirectCommands(u,r.redirectTo,f,eD(h),n),x=await this.applyRedirects.lineralizeSegments(r,y);return this.processSegment(n,i,e,x.concat(m),s,!1,a)}createSnapshot(n,e,i,r,o){let s=new Jo(i,r,Object.freeze(_({},this.urlTree.queryParams)),this.urlTree.fragment,YN(e),Mn(e),e.component??e._loadedComponent??null,e,ZN(e),n),a=Hg(s,o,this.paramsInheritanceStrategy);return s.params=Object.freeze(a.params),s.data=Object.freeze(a.data),s}async matchSegmentAgainstRoute(n,e,i,r,o,s){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let a=ot=>this.createSnapshot(n,i,ot.consumedSegments,ot.parameters,s),l=await cu(jN(e,i,r,n,this.urlSerializer,a,this.abortSignal));if(i.path==="**"&&(e.children={}),!l?.matched)throw new Di(e);n=i._injector??n;let{routes:c}=await this.getChildConfig(n,i,r),u=i._loadedInjector??n,{parameters:f,consumedSegments:m,remainingSegments:h}=l,y=this.createSnapshot(n,i,m,f,s),{segmentGroup:x,slicedSegments:T}=DC(e,m,h,c,o);if(T.length===0&&x.hasChildren()){let ot=await this.processChildren(u,c,x,y);return new Xt(y,ot)}if(c.length===0&&T.length===0)return new Xt(y,[]);let P=Mn(i)===o,ve=await this.processSegment(u,c,x,T,P?ie:o,!0,y);return new Xt(y,ve instanceof Xt?[ve]:[])}async getChildConfig(n,e,i){if(e.children)return{routes:e.children,injector:n};if(e.loadChildren){if(e._loadedRoutes!==void 0){let o=e._loadedNgModuleFactory;return o&&!e._loadedInjector&&(e._loadedInjector=o.create(n).injector),{routes:e._loadedRoutes,injector:e._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(await cu(AN(n,e,i,this.urlSerializer,this.abortSignal))){let o=await this.configLoader.loadChildren(n,e);return e._loadedRoutes=o.routes,e._loadedInjector=o.injector,e._loadedNgModuleFactory=o.factory,o}throw ON(e)}return{routes:[],injector:n}}};function GN(t){t.sort((n,e)=>n.value.outlet===ie?-1:e.value.outlet===ie?1:n.value.outlet.localeCompare(e.value.outlet))}function qN(t){let n=t.value.routeConfig;return n&&n.path===""}function nD(t){let n=[],e=new Set;for(let i of t){if(!qN(i)){n.push(i);continue}let r=n.find(o=>i.value.routeConfig===o.value.routeConfig);r!==void 0?(r.children.push(...i.children),e.add(r)):n.push(i)}for(let i of e){let r=nD(i.children);n.push(new Xt(i.value,r))}return n.filter(i=>!e.has(i))}function YN(t){return t.data||{}}function ZN(t){return t.resolve||{}}function QN(t,n,e,i,r,o,s){return mt(async a=>{let{state:l,tree:c}=await $N(t,n,e,i,a.extractedUrl,r,o,s);return X(_({},a),{targetSnapshot:l,urlAfterRedirects:c})})}function KN(t){return mt(n=>{let{targetSnapshot:e,guards:{canActivateChecks:i}}=n;if(!i.length)return B(n);let r=new Set(i.map(a=>a.route)),o=new Set;for(let a of r)if(!o.has(a))for(let l of iD(a))o.add(l);let s=0;return Se(o).pipe(Oi(a=>r.has(a)?XN(a,e,t):(a.data=Hg(a,a.parent,t).resolve,B(void 0))),$e(()=>s++),hc(1),mt(a=>s===o.size?B(n):Pe))})}function iD(t){let n=t.children.map(e=>iD(e)).flat();return[t,...n]}function XN(t,n,e){let i=t.routeConfig,r=t._resolve;return i?.title!==void 0&&!WC(i)&&(r[Ja]=i.title),_r(()=>(t.data=Hg(t,t.parent,e).resolve,JN(r,t,n).pipe(ee(o=>(t._resolvedData=o,t.data=_(_({},t.data),o),null)))))}function JN(t,n,e){let i=Mg(t);if(i.length===0)return B({});let r={};return Se(i).pipe(mt(o=>eO(t[o],n,e).pipe(li(),$e(s=>{if(s instanceof es)throw Eu(new Ei,s);r[o]=s}))),hc(1),ee(()=>r),Ni(o=>QC(o)?Pe:vr(o)))}function eO(t,n,e){let i=n._environmentInjector,r=ns(t,i),o=r.resolve?r.resolve(n,e):tt(i,()=>r(n,e));return $r(o)}function EC(t){return Qe(n=>{let e=t(n);return e?Se(e).pipe(ee(()=>n)):B(n)})}var Gg=(()=>{class t{buildTitle(e){let i,r=e.root;for(;r!==void 0;)i=this.getResolvedTitleForRoute(r)??i,r=r.children.find(o=>o.outlet===ie);return i}getResolvedTitleForRoute(e){return e.data[Ja]}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:()=>d(rD),providedIn:"root"})}return t})(),rD=(()=>{class t extends Gg{title;constructor(e){super(),this.title=e}updateTitle(e){let i=this.buildTitle(e);i!==void 0&&this.title.setTitle(i)}static \u0275fac=function(i){return new(i||t)(O(gC))};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),qr=new v("",{factory:()=>({})}),Yr=new v(""),Su=(()=>{class t{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=d($p);async loadComponent(e,i){if(this.componentLoaders.get(i))return this.componentLoaders.get(i);if(i._loadedComponent)return Promise.resolve(i._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(i);let r=(async()=>{try{let o=await MC(tt(e,()=>i.loadComponent())),s=await aD(sD(o));return this.onLoadEndListener&&this.onLoadEndListener(i),i._loadedComponent=s,s}finally{this.componentLoaders.delete(i)}})();return this.componentLoaders.set(i,r),r}loadChildren(e,i){if(this.childrenLoaders.get(i))return this.childrenLoaders.get(i);if(i._loadedRoutes)return Promise.resolve({routes:i._loadedRoutes,injector:i._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(i);let r=(async()=>{try{let o=await oD(i,this.compiler,e,this.onLoadEndListener);return i._loadedRoutes=o.routes,i._loadedInjector=o.injector,i._loadedNgModuleFactory=o.factory,o}finally{this.childrenLoaders.delete(i)}})();return this.childrenLoaders.set(i,r),r}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();async function oD(t,n,e,i){let r=await MC(tt(e,()=>t.loadChildren())),o=await aD(sD(r)),s;o instanceof Td||Array.isArray(o)?s=o:s=await n.compileModuleAsync(o),i&&i(t);let a,l,c=!1,u;return Array.isArray(s)?(l=s,c=!0):(a=s.create(e).injector,u=s,l=a.get(Yr,[],{optional:!0,self:!0}).flat()),{routes:l.map(Wg),injector:a,factory:u}}function tO(t){return t&&typeof t=="object"&&"default"in t}function sD(t){return tO(t)?t.default:t}async function aD(t){return t}var Tu=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:()=>d(nO),providedIn:"root"})}return t})(),nO=(()=>{class t{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,i){return e}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),qg=new v(""),Yg=new v("");function lD(t,n,e){let i=t.get(Yg),r=t.get(V);if(!r.startViewTransition||i.skipNextTransition)return i.skipNextTransition=!1,new Promise(c=>setTimeout(c));let o,s=new Promise(c=>{o=c}),a=r.startViewTransition(()=>(o(),iO(t)));a.updateCallbackDone.catch(c=>{}),a.ready.catch(c=>{}),a.finished.catch(c=>{});let{onViewTransitionCreated:l}=i;return l&&tt(t,()=>l({transition:a,from:n,to:e})),s}function iO(t){return new Promise(n=>{Xe({read:()=>setTimeout(n)},{injector:t})})}var rO=()=>{},Zg=new v(""),ku=(()=>{class t{currentNavigation=F(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=F(null);events=new C;transitionAbortWithErrorSubject=new C;configLoader=d(Su);environmentInjector=d(we);destroyRef=d(pt);urlSerializer=d(Wr);rootContexts=d(Gr);location=d(Kn);inputBindingEnabled=d(tl,{optional:!0})!==null;titleStrategy=d(Gg);options=d(qr,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=d(Tu);createViewTransition=d(qg,{optional:!0});navigationErrorHandler=d(Zg,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>B(void 0);rootComponentType=null;destroyed=!1;constructor(){let e=r=>this.events.next(new gu(r)),i=r=>this.events.next(new vu(r));this.configLoader.onLoadEndListener=i,this.configLoader.onLoadStartListener=e,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(e){let i=++this.navigationId;ze(()=>{this.transitions?.next(X(_({},e),{extractedUrl:this.urlHandlingStrategy.extract(e.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:i,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(e){return this.transitions=new Ze(null),this.transitions.pipe(ge(i=>i!==null),Qe(i=>{let r=!1,o=new AbortController,s=()=>!r&&this.currentTransition?.id===i.id;return B(i).pipe(Qe(a=>{if(this.navigationId>i.id)return this.cancelNavigationTransition(i,"",It.SupersededByNewNavigation),Pe;this.currentTransition=i;let l=this.lastSuccessfulNavigation();this.currentNavigation.set({id:a.id,initialUrl:a.rawUrl,extractedUrl:a.extractedUrl,targetBrowserUrl:typeof a.extras.browserUrl=="string"?this.urlSerializer.parse(a.extras.browserUrl):a.extras.browserUrl,trigger:a.source,extras:a.extras,previousNavigation:l?X(_({},l),{previousNavigation:null}):null,abort:()=>o.abort(),routesRecognizeHandler:a.routesRecognizeHandler,beforeActivateHandler:a.beforeActivateHandler});let c=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),u=a.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!c&&u!=="reload")return this.events.next(new Jn(a.id,this.urlSerializer.serialize(a.rawUrl),"",Zo.IgnoredSameUrlNavigation)),a.resolve(!1),Pe;if(this.urlHandlingStrategy.shouldProcessUrl(a.rawUrl))return B(a).pipe(Qe(f=>(this.events.next(new Ki(f.id,this.urlSerializer.serialize(f.extractedUrl),f.source,f.restoredState)),f.id!==this.navigationId?Pe:Promise.resolve(f))),QN(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy,o.signal),$e(f=>{i.targetSnapshot=f.targetSnapshot,i.urlAfterRedirects=f.urlAfterRedirects,this.currentNavigation.update(m=>(m.finalUrl=f.urlAfterRedirects,m)),this.events.next(new Ya)}),Qe(f=>Se(i.routesRecognizeHandler.deferredHandle??B(void 0)).pipe(ee(()=>f))),$e(()=>{let f=new qa(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);this.events.next(f)}));if(c&&this.urlHandlingStrategy.shouldProcessUrl(a.currentRawUrl)){let{id:f,extractedUrl:m,source:h,restoredState:y,extras:x}=a,T=new Ki(f,this.urlSerializer.serialize(m),h,y);this.events.next(T);let P=zC(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=i=X(_({},a),{targetSnapshot:P,urlAfterRedirects:m,extras:X(_({},x),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(ve=>(ve.finalUrl=m,ve)),B(i)}else return this.events.next(new Jn(a.id,this.urlSerializer.serialize(a.extractedUrl),"",Zo.IgnoredByUrlHandlingStrategy)),a.resolve(!1),Pe}),ee(a=>{let l=new fu(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);return this.events.next(l),this.currentTransition=i=X(_({},a),{guards:fN(a.targetSnapshot,a.currentSnapshot,this.rootContexts)}),i}),DN(a=>this.events.next(a)),Qe(a=>{if(i.guardsResult=a.guardsResult,a.guardsResult&&typeof a.guardsResult!="boolean")throw Eu(this.urlSerializer,a.guardsResult);let l=new mu(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot,!!a.guardsResult);if(this.events.next(l),!s())return Pe;if(!a.guardsResult)return this.cancelNavigationTransition(a,"",It.GuardRejected),Pe;if(a.guards.canActivateChecks.length===0)return B(a);let c=new hu(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);if(this.events.next(c),!s())return Pe;let u=!1;return B(a).pipe(KN(this.paramsInheritanceStrategy),$e({next:()=>{u=!0;let f=new pu(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);this.events.next(f)},complete:()=>{u||this.cancelNavigationTransition(a,"",It.NoDataFromResolver)}}))}),EC(a=>{let l=u=>{let f=[];if(u.routeConfig?._loadedComponent)u.component=u.routeConfig?._loadedComponent;else if(u.routeConfig?.loadComponent){let m=u._environmentInjector;f.push(this.configLoader.loadComponent(m,u.routeConfig).then(h=>{u.component=h}))}for(let m of u.children)f.push(...l(m));return f},c=l(a.targetSnapshot.root);return c.length===0?B(a):Se(Promise.all(c).then(()=>a))}),EC(()=>this.afterPreactivation()),Qe(()=>{let{currentSnapshot:a,targetSnapshot:l}=i,c=this.createViewTransition?.(this.environmentInjector,a.root,l.root);return c?Se(c).pipe(ee(()=>i)):B(i)}),Tt(1),Qe(a=>{let l=lN(e.routeReuseStrategy,a.targetSnapshot,a.currentRouterState);this.currentTransition=i=a=X(_({},a),{targetRouterState:l}),this.currentNavigation.update(u=>(u.targetRouterState=l,u)),this.events.next(new Ko);let c=i.beforeActivateHandler.deferredHandle;return c?Se(c.then(()=>a)):B(a)}),$e(a=>{new Pg(e.routeReuseStrategy,i.targetRouterState,i.currentRouterState,l=>this.events.next(l),this.inputBindingEnabled).activate(this.rootContexts),s()&&(r=!0,this.currentNavigation.update(l=>(l.abort=rO,l)),this.lastSuccessfulNavigation.set(ze(this.currentNavigation)),this.events.next(new Sn(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects))),this.titleStrategy?.updateTitle(a.targetRouterState.snapshot),a.resolve(!0))}),me(KC(o.signal).pipe(ge(()=>!r&&!i.targetRouterState),$e(()=>{this.cancelNavigationTransition(i,o.signal.reason+"",It.Aborted)}))),$e({complete:()=>{r=!0}}),me(this.transitionAbortWithErrorSubject.pipe($e(a=>{throw a}))),Fi(()=>{o.abort(),r||this.cancelNavigationTransition(i,"",It.SupersededByNewNavigation),this.currentTransition?.id===i.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),Ni(a=>{if(r=!0,this.destroyed)return i.resolve(!1),Pe;if(ZC(a))this.events.next(new un(i.id,this.urlSerializer.serialize(i.extractedUrl),a.message,a.cancellationCode)),uN(a)?this.events.next(new Xo(a.url,a.navigationBehaviorOptions)):i.resolve(!1);else{let l=new zr(i.id,this.urlSerializer.serialize(i.extractedUrl),a,i.targetSnapshot??void 0);try{let c=tt(this.environmentInjector,()=>this.navigationErrorHandler?.(l));if(c instanceof es){let{message:u,cancellationCode:f}=Eu(this.urlSerializer,c);this.events.next(new un(i.id,this.urlSerializer.serialize(i.extractedUrl),u,f)),this.events.next(new Xo(c.redirectTo,c.navigationBehaviorOptions))}else throw this.events.next(l),a}catch(c){this.options.resolveNavigationPromiseOnError?i.resolve(!1):i.reject(c)}}return Pe}))}))}cancelNavigationTransition(e,i,r){let o=new un(e.id,this.urlSerializer.serialize(e.extractedUrl),i,r);this.events.next(o),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),i=ze(this.currentNavigation),r=i?.targetBrowserUrl??i?.extractedUrl;return e.toString()!==r?.toString()&&!i?.extras.skipLocationChange}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function oO(t){return t!==Go}var cD=new v("");var dD=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:()=>d(sO),providedIn:"root"})}return t})(),Iu=class{shouldDetach(n){return!1}store(n,e){}shouldAttach(n){return!1}retrieve(n){return null}shouldReuseRoute(n,e){return n.routeConfig===e.routeConfig}shouldDestroyInjector(n){return!0}},sO=(()=>{class t extends Iu{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ge(t)))(r||t)}})();static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Qg=(()=>{class t{urlSerializer=d(Wr);options=d(qr,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=d(Kn);urlHandlingStrategy=d(Tu);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new fn;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:e,initialUrl:i,targetBrowserUrl:r}){let o=e!==void 0?this.urlHandlingStrategy.merge(e,i):i,s=r??o;return s instanceof fn?this.urlSerializer.serialize(s):s}commitTransition({targetRouterState:e,finalUrl:i,initialUrl:r}){i&&e?(this.currentUrlTree=i,this.rawUrlTree=this.urlHandlingStrategy.merge(i,r),this.routerState=e):this.rawUrlTree=r}routerState=zC(null,d(we));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:()=>d(aO),providedIn:"root"})}return t})(),aO=(()=>{class t extends Qg{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(i=>{i.type==="popstate"&&setTimeout(()=>{e(i.url,i.state,"popstate",{replaceUrl:!0})})})}handleRouterEvent(e,i){e instanceof Ki?this.updateStateMemento():e instanceof Jn?this.commitTransition(i):e instanceof qa?this.urlUpdateStrategy==="eager"&&(i.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(i),i)):e instanceof Ko?(this.commitTransition(i),this.urlUpdateStrategy==="deferred"&&!i.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(i),i)):e instanceof un&&!UC(e)?this.restoreHistory(i):e instanceof zr?this.restoreHistory(i,!0):e instanceof Sn&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,{extras:i,id:r}){let{replaceUrl:o,state:s}=i;if(this.location.isCurrentPathEqualTo(e)||o){let a=this.browserPageId,l=_(_({},s),this.generateNgRouterState(r,a));this.location.replaceState(e,"",l)}else{let a=_(_({},s),this.generateNgRouterState(r,this.browserPageId+1));this.location.go(e,"",a)}}restoreHistory(e,i=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,o=this.currentPageId-r;o!==0?this.location.historyGo(o):this.getCurrentUrlTree()===e.finalUrl&&o===0&&(this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(i&&this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:e}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,i){return this.canceledNavigationResolution==="computed"?{navigationId:e,\u0275routerPageId:i}:{navigationId:e}}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ge(t)))(r||t)}})();static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Au(t,n){t.events.pipe(ge(e=>e instanceof Sn||e instanceof un||e instanceof zr||e instanceof Jn),ee(e=>e instanceof Sn||e instanceof Jn?0:(e instanceof un?e.code===It.Redirect||e.code===It.SupersededByNewNavigation:!1)?2:1),ge(e=>e!==2),Tt(1)).subscribe(()=>{n()})}var Ht=(()=>{class t{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=d(Ad);stateManager=d(Qg);options=d(qr,{optional:!0})||{};pendingTasks=d(hi);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=d(ku);urlSerializer=d(Wr);location=d(Kn);urlHandlingStrategy=d(Tu);injector=d(we);_events=new C;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=d(dD);injectorCleanup=d(cD,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=d(Yr,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!d(tl,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:e=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new ae;subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(i=>{try{let r=this.navigationTransitions.currentTransition,o=ze(this.navigationTransitions.currentNavigation);if(r!==null&&o!==null){if(this.stateManager.handleRouterEvent(i,o),i instanceof un&&i.code!==It.Redirect&&i.code!==It.SupersededByNewNavigation)this.navigated=!0;else if(i instanceof Sn)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(i instanceof Xo){let s=i.navigationBehaviorOptions,a=this.urlHandlingStrategy.merge(i.url,r.currentRawUrl),l=_({scroll:r.extras.scroll,browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||oO(r.source)},s);this.scheduleNavigation(a,Go,null,l,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}sN(i)&&this._events.next(i)}catch(r){this.navigationTransitions.transitionAbortWithErrorSubject.next(r)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),Go,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,i,r,o)=>{this.navigateToSyncWithBrowser(e,r,i,o)})}navigateToSyncWithBrowser(e,i,r,o){let s=r?.navigationId?r:null;if(r){let l=_({},r);delete l.navigationId,delete l.\u0275routerPageId,Object.keys(l).length!==0&&(o.state=l)}let a=this.parseUrl(e);this.scheduleNavigation(a,i,s,o).catch(l=>{this.disposed||this.injector.get(qt)(l)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return ze(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map(Wg),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,i={}){let{relativeTo:r,queryParams:o,fragment:s,queryParamsHandling:a,preserveFragment:l}=i,c=l?this.currentUrlTree.fragment:s,u=null;switch(a??this.options.defaultQueryParamsHandling){case"merge":u=_(_({},this.currentUrlTree.queryParams),o);break;case"preserve":u=this.currentUrlTree.queryParams;break;default:u=o||null}u!==null&&(u=this.removeEmptyProps(u));let f;try{let m=r?r.snapshot:this.routerState.snapshot.root;f=jC(m)}catch{(typeof e[0]!="string"||e[0][0]!=="/")&&(e=[]),f=this.currentUrlTree.root}return BC(f,e,u,c??null,this.urlSerializer)}navigateByUrl(e,i={skipLocationChange:!1}){let r=Yo(e)?e:this.parseUrl(e),o=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(o,Go,null,i)}navigate(e,i={skipLocationChange:!1}){return lO(e),this.navigateByUrl(this.createUrlTree(e,i),i)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch{return this.console.warn(tn(4018,!1)),this.urlSerializer.parse("/")}}isActive(e,i){let r;if(i===!0?r=_({},TC):i===!1?r=_({},Sg):r=_(_({},Sg),i),Yo(e))return bC(this.currentUrlTree,e,r);let o=this.parseUrl(e);return bC(this.currentUrlTree,o,r)}removeEmptyProps(e){return Object.entries(e).reduce((i,[r,o])=>(o!=null&&(i[r]=o),i),{})}scheduleNavigation(e,i,r,o,s){if(this.disposed)return Promise.resolve(!1);let a,l,c;s?(a=s.resolve,l=s.reject,c=s.promise):c=new Promise((f,m)=>{a=f,l=m});let u=this.pendingTasks.add();return Au(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(u))}),this.navigationTransitions.handleNavigationRequest({source:i,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:o,resolve:a,reject:l,promise:c,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),c.catch(Promise.reject.bind(Promise))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function lO(t){for(let n=0;n<t.length;n++)if(t[n]==null)throw new I(4008,!1)}var il=class{};var uD=(()=>{class t{router;injector;preloadingStrategy;loader;subscription;constructor(e,i,r,o){this.router=e,this.injector=i,this.preloadingStrategy=r,this.loader=o}setUpPreloading(){this.subscription=this.router.events.pipe(ge(e=>e instanceof Sn),Oi(()=>this.preload())).subscribe(()=>{})}preload(){return this.processRoutes(this.injector,this.router.config)}ngOnDestroy(){this.subscription?.unsubscribe()}processRoutes(e,i){let r=[];for(let o of i){o.providers&&!o._injector&&(o._injector=Bo(o.providers,e,""));let s=o._injector??e;o._loadedNgModuleFactory&&!o._loadedInjector&&(o._loadedInjector=o._loadedNgModuleFactory.create(s).injector);let a=o._loadedInjector??s;(o.loadChildren&&!o._loadedRoutes&&o.canLoad===void 0||o.loadComponent&&!o._loadedComponent)&&r.push(this.preloadConfig(s,o)),(o.children||o._loadedRoutes)&&r.push(this.processRoutes(a,o.children??o._loadedRoutes))}return Se(r).pipe(Ai())}preloadConfig(e,i){return this.preloadingStrategy.preload(i,()=>{if(e.destroyed)return B(null);let r;i.loadChildren&&i.canLoad===void 0?r=Se(this.loader.loadChildren(e,i)):r=B(null);let o=r.pipe(mt(s=>s===null?B(void 0):(i._loadedRoutes=s.routes,i._loadedInjector=s.injector,i._loadedNgModuleFactory=s.factory,this.processRoutes(s.injector??e,s.routes))));if(i.loadComponent&&!i._loadedComponent){let s=this.loader.loadComponent(e,i);return Se([o,s]).pipe(Ai())}else return o})}static \u0275fac=function(i){return new(i||t)(O(Ht),O(we),O(il),O(Su))};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),fD=new v(""),dO=(()=>{class t{options;routerEventsSubscription;scrollEventsSubscription;lastId=0;lastSource=Go;restoredId=0;store={};urlSerializer=d(Wr);zone=d(k);viewportScroller=d(rg);transitions=d(ku);constructor(e){this.options=e,this.options.scrollPositionRestoration||="disabled",this.options.anchorScrolling||="disabled"}init(){this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.setHistoryScrollRestoration("manual"),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.transitions.events.subscribe(e=>{e instanceof Ki?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=e.navigationTrigger,this.restoredId=e.restoredState?e.restoredState.navigationId:0):e instanceof Sn?(this.lastId=e.id,this.scheduleScrollEvent(e,this.urlSerializer.parse(e.urlAfterRedirects).fragment)):e instanceof Jn&&e.code===Zo.IgnoredSameUrlNavigation&&(this.lastSource=void 0,this.restoredId=0,this.scheduleScrollEvent(e,this.urlSerializer.parse(e.url).fragment))})}consumeScrollEvents(){return this.transitions.events.subscribe(e=>{if(!(e instanceof Qo)||e.scrollBehavior==="manual")return;let i={behavior:"instant"};e.position?this.options.scrollPositionRestoration==="top"?this.viewportScroller.scrollToPosition([0,0],i):this.options.scrollPositionRestoration==="enabled"&&this.viewportScroller.scrollToPosition(e.position,i):e.anchor&&this.options.anchorScrolling==="enabled"?this.viewportScroller.scrollToAnchor(e.anchor):this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.scrollToPosition([0,0])})}scheduleScrollEvent(e,i){let r=ze(this.transitions.currentNavigation)?.extras.scroll;this.zone.runOutsideAngular(async()=>{await new Promise(o=>{setTimeout(o),typeof requestAnimationFrame<"u"&&requestAnimationFrame(o)}),this.zone.run(()=>{this.transitions.events.next(new Qo(e,this.lastSource==="popstate"?this.store[this.restoredId]:null,i,r))})})}ngOnDestroy(){this.routerEventsSubscription?.unsubscribe(),this.scrollEventsSubscription?.unsubscribe()}static \u0275fac=function(i){kp()};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})();function Xg(t,...n){return Pn([{provide:Yr,multi:!0,useValue:t},[],{provide:xi,useFactory:mD},{provide:Ta,multi:!0,useFactory:hD},n.map(e=>e.\u0275providers)])}function mD(){return d(Ht).routerState.root}function rl(t,n){return{\u0275kind:t,\u0275providers:n}}function hD(){let t=d(W);return n=>{let e=t.get(Zt);if(n!==e.components[0])return;let i=t.get(Ht),r=t.get(pD);t.get(Jg)===1&&i.initialNavigation(),t.get(bD,null,{optional:!0})?.setUpPreloading(),t.get(fD,null,{optional:!0})?.init(),i.resetRootComponentType(e.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var pD=new v("",{factory:()=>new C}),Jg=new v("",{factory:()=>1});function gD(){let t=[{provide:gd,useValue:!0},{provide:Jg,useValue:0},Nd(()=>{let n=d(W);return n.get(Qp,Promise.resolve()).then(()=>new Promise(i=>{let r=n.get(Ht),o=n.get(pD);Au(r,()=>{i(!0)}),n.get(ku).afterPreactivation=()=>(i(!0),o.closed?B(void 0):o),r.initialNavigation()}))})];return rl(2,t)}function vD(){let t=[Nd(()=>{d(Ht).setUpLocationChangeListener()}),{provide:Jg,useValue:2}];return rl(3,t)}var bD=new v("");function _D(t){return rl(0,[{provide:bD,useExisting:uD},{provide:il,useExisting:t}])}function yD(){return rl(8,[zg,{provide:tl,useExisting:zg}])}function wD(t){Wn("NgRouterViewTransitions");let n=[{provide:qg,useValue:lD},{provide:Yg,useValue:_({skipNextTransition:!!t?.skipInitialTransition},t)}];return rl(9,n)}var CD=[Kn,{provide:Wr,useClass:Ei},Ht,Gr,{provide:xi,useFactory:mD},Su,[]],ev=(()=>{class t{constructor(){}static forRoot(e,i){return{ngModule:t,providers:[CD,[],{provide:Yr,multi:!0,useValue:e},[],i?.errorHandler?{provide:Zg,useValue:i.errorHandler}:[],{provide:qr,useValue:i||{}},i?.useHash?fO():mO(),uO(),i?.preloadingStrategy?_D(i.preloadingStrategy).\u0275providers:[],i?.initialNavigation?hO(i):[],i?.bindToComponentInputs?yD().\u0275providers:[],i?.enableViewTransitions?wD().\u0275providers:[],pO()]}}static forChild(e){return{ngModule:t,providers:[{provide:Yr,multi:!0,useValue:e}]}}static \u0275fac=function(i){return new(i||t)};static \u0275mod=U({type:t});static \u0275inj=H({})}return t})();function uO(){return{provide:fD,useFactory:()=>{let t=d(rg),n=d(qr);return n.scrollOffset&&t.setOffset(n.scrollOffset),new dO(n)}}}function fO(){return{provide:Ci,useClass:Jp}}function mO(){return{provide:Ci,useClass:Gd}}function hO(t){return[t.initialNavigation==="disabled"?vD().\u0275providers:[],t.initialNavigation==="enabledBlocking"?gD().\u0275providers:[]]}var Kg=new v("");function pO(){return[{provide:Kg,useFactory:hD},{provide:Ta,multi:!0,useExisting:Kg}]}var vO=new v("cdk-dir-doc",{providedIn:"root",factory:()=>d(V)}),bO=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function DD(t){let n=t?.toLowerCase()||"";return n==="auto"&&typeof navigator<"u"&&navigator?.language?bO.test(navigator.language)?"rtl":"ltr":n==="rtl"?"rtl":"ltr"}var Mt=(()=>{class t{get value(){return this.valueSignal()}valueSignal=F("ltr");change=new A;constructor(){let e=d(vO,{optional:!0});if(e){let i=e.body?e.body.dir:null,r=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(DD(i||r||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var he=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=U({type:t});static \u0275inj=H({})}return t})();var _O=["*"];var yO=[[["","mat-card-avatar",""],["","matCardAvatar",""]],[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],"*"],wO=["[mat-card-avatar], [matCardAvatar]",`mat-card-title, mat-card-subtitle,
      [mat-card-title], [mat-card-subtitle],
      [matCardTitle], [matCardSubtitle]`,"*"],CO=new v("MAT_CARD_CONFIG"),mn=(()=>{class t{appearance;constructor(){let e=d(CO,{optional:!0});this.appearance=e?.appearance||"raised"}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=E({type:t,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(i,r){i&2&&z("mat-mdc-card-outlined",r.appearance==="outlined")("mdc-card--outlined",r.appearance==="outlined")("mat-mdc-card-filled",r.appearance==="filled")("mdc-card--filled",r.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:_O,decls:1,vars:0,template:function(i,r){i&1&&(Ie(),Q(0))},styles:[`.mat-mdc-card {
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
`],encapsulation:2,changeDetection:0})}return t})(),Ru=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=M({type:t,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-mdc-card-title"]})}return t})();var ei=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=M({type:t,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"]})}return t})(),ED=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=M({type:t,selectors:[["mat-card-subtitle"],["","mat-card-subtitle",""],["","matCardSubtitle",""]],hostAttrs:[1,"mat-mdc-card-subtitle"]})}return t})();var Xi=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=E({type:t,selectors:[["mat-card-header"]],hostAttrs:[1,"mat-mdc-card-header"],ngContentSelectors:wO,decls:4,vars:0,consts:[[1,"mat-mdc-card-header-text"]],template:function(i,r){i&1&&(Ie(yO),Q(0),Vt(1,"div",0),Q(2,1),Qt(),Q(3,2))},encapsulation:2,changeDetection:0})}return t})();var xD=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=M({type:t,selectors:[["","mat-card-avatar",""],["","matCardAvatar",""]],hostAttrs:[1,"mat-mdc-card-avatar"]})}return t})();var Nu=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=U({type:t});static \u0275inj=H({imports:[he]})}return t})();function ol(t){return t.buttons===0||t.detail===0}function sl(t){let n=t.touches&&t.touches[0]||t.changedTouches&&t.changedTouches[0];return!!n&&n.identifier===-1&&(n.radiusX==null||n.radiusX===1)&&(n.radiusY==null||n.radiusY===1)}var tv;function MD(){if(tv==null){let t=typeof document<"u"?document.head:null;tv=!!(t&&(t.createShadowRoot||t.attachShadow))}return tv}function nv(t){if(MD()){let n=t.getRootNode?t.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&n instanceof ShadowRoot)return n}return null}function yt(t){return t.composedPath?t.composedPath()[0]:t.target}var iv;try{iv=typeof Intl<"u"&&Intl.v8BreakIterator}catch{iv=!1}var fe=(()=>{class t{_platformId=d(Lr);isBrowser=this._platformId?Q0(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||iv)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var al;function SD(){if(al==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>al=!0}))}finally{al=al||!1}return al}function is(t){return SD()?t:!!t.capture}function ti(t,n=0){return TD(t)?Number(t):arguments.length===2?n:0}function TD(t){return!isNaN(parseFloat(t))&&!isNaN(Number(t))}function Pt(t){return t instanceof R?t.nativeElement:t}var kD=new v("cdk-input-modality-detector-options"),AD={ignoreKeys:[18,17,224,91,16]},RD=650,rv={passive:!0,capture:!0},ND=(()=>{class t{_platform=d(fe);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new Ze(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(i=>i===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=yt(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<RD||(this._modality.next(ol(e)?"keyboard":"mouse"),this._mostRecentTarget=yt(e))};_onTouchstart=e=>{if(sl(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=yt(e)};constructor(){let e=d(k),i=d(V),r=d(kD,{optional:!0});if(this._options=_(_({},AD),r),this.modalityDetected=this._modality.pipe(yr(1)),this.modalityChanged=this.modalityDetected.pipe(mc()),this._platform.isBrowser){let o=d(Ke).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[o.listen(i,"keydown",this._onKeydown,rv),o.listen(i,"mousedown",this._onMousedown,rv),o.listen(i,"touchstart",this._onTouchstart,rv)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),ll=(function(t){return t[t.IMMEDIATE=0]="IMMEDIATE",t[t.EVENTUAL=1]="EVENTUAL",t})(ll||{}),OD=new v("cdk-focus-monitor-default-options"),Ou=is({passive:!0,capture:!0}),Zr=(()=>{class t{_ngZone=d(k);_platform=d(fe);_inputModalityDetector=d(ND);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=d(V);_stopInputModalityDetector=new C;constructor(){let e=d(OD,{optional:!0});this._detectionMode=e?.detectionMode||ll.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let i=yt(e);for(let r=i;r;r=r.parentElement)e.type==="focus"?this._onFocus(e,r):this._onBlur(e,r)};monitor(e,i=!1){let r=Pt(e);if(!this._platform.isBrowser||r.nodeType!==1)return B();let o=nv(r)||this._document,s=this._elementInfo.get(r);if(s)return i&&(s.checkChildren=!0),s.subject;let a={checkChildren:i,subject:new C,rootNode:o};return this._elementInfo.set(r,a),this._registerGlobalListeners(a),a.subject}stopMonitoring(e){let i=Pt(e),r=this._elementInfo.get(i);r&&(r.subject.complete(),this._setClasses(i),this._elementInfo.delete(i),this._removeGlobalListeners(r))}focusVia(e,i,r){let o=Pt(e),s=this._document.activeElement;o===s?this._getClosestElementsInfo(o).forEach(([a,l])=>this._originChanged(a,i,l)):(this._setOrigin(i),typeof o.focus=="function"&&o.focus(r))}ngOnDestroy(){this._elementInfo.forEach((e,i)=>this.stopMonitoring(i))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===ll.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,i){e.classList.toggle("cdk-focused",!!i),e.classList.toggle("cdk-touch-focused",i==="touch"),e.classList.toggle("cdk-keyboard-focused",i==="keyboard"),e.classList.toggle("cdk-mouse-focused",i==="mouse"),e.classList.toggle("cdk-program-focused",i==="program")}_setOrigin(e,i=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&i,this._detectionMode===ll.IMMEDIATE){clearTimeout(this._originTimeoutId);let r=this._originFromTouchInteraction?RD:1;this._originTimeoutId=setTimeout(()=>this._origin=null,r)}})}_onFocus(e,i){let r=this._elementInfo.get(i),o=yt(e);!r||!r.checkChildren&&i!==o||this._originChanged(i,this._getFocusOrigin(o),r)}_onBlur(e,i){let r=this._elementInfo.get(i);!r||r.checkChildren&&e.relatedTarget instanceof Node&&i.contains(e.relatedTarget)||(this._setClasses(i),this._emitOrigin(r,null))}_emitOrigin(e,i){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(i))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let i=e.rootNode,r=this._rootNodeFocusListenerCount.get(i)||0;r||this._ngZone.runOutsideAngular(()=>{i.addEventListener("focus",this._rootNodeFocusAndBlurListener,Ou),i.addEventListener("blur",this._rootNodeFocusAndBlurListener,Ou)}),this._rootNodeFocusListenerCount.set(i,r+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(me(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(e){let i=e.rootNode;if(this._rootNodeFocusListenerCount.has(i)){let r=this._rootNodeFocusListenerCount.get(i);r>1?this._rootNodeFocusListenerCount.set(i,r-1):(i.removeEventListener("focus",this._rootNodeFocusAndBlurListener,Ou),i.removeEventListener("blur",this._rootNodeFocusAndBlurListener,Ou),this._rootNodeFocusListenerCount.delete(i))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,i,r){this._setClasses(e,i),this._emitOrigin(r,i),this._lastFocusOrigin=i}_getClosestElementsInfo(e){let i=[];return this._elementInfo.forEach((r,o)=>{(o===e||r.checkChildren&&o.contains(e))&&i.push([o,r])}),i}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:i,mostRecentModality:r}=this._inputModalityDetector;if(r!=="mouse"||!i||i===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let o=e.labels;if(o){for(let s=0;s<o.length;s++)if(o[s].contains(i))return!0}return!1}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),ov=(()=>{class t{_elementRef=d(R);_focusMonitor=d(Zr);_monitorSubscription;_focusOrigin=null;cdkFocusChange=new A;constructor(){}get focusOrigin(){return this._focusOrigin}ngAfterViewInit(){let e=this._elementRef.nativeElement;this._monitorSubscription=this._focusMonitor.monitor(e,e.nodeType===1&&e.hasAttribute("cdkMonitorSubtreeFocus")).subscribe(i=>{this._focusOrigin=i,this.cdkFocusChange.emit(i)})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._monitorSubscription?.unsubscribe()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=M({type:t,selectors:[["","cdkMonitorElementFocus",""],["","cdkMonitorSubtreeFocus",""]],outputs:{cdkFocusChange:"cdkFocusChange"},exportAs:["cdkMonitorFocus"]})}return t})();var Fu=new WeakMap,ut=(()=>{class t{_appRef;_injector=d(W);_environmentInjector=d(we);load(e){let i=this._appRef=this._appRef||this._injector.get(Zt),r=Fu.get(i);r||(r={loaders:new Set,refs:[]},Fu.set(i,r),i.onDestroy(()=>{Fu.get(i)?.refs.forEach(o=>o.destroy()),Fu.delete(i)})),r.loaders.has(e)||(r.loaders.add(e),r.refs.push(zd(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var cl=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=E({type:t,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(i,r){},styles:[`.cdk-visually-hidden {
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
`],encapsulation:2,changeDetection:0})}return t})(),Pu;function DO(){if(Pu===void 0&&(Pu=null,typeof window<"u")){let t=window;t.trustedTypes!==void 0&&(Pu=t.trustedTypes.createPolicy("angular#components",{createHTML:n=>n}))}return Pu}function Qr(t){return DO()?.createHTML(t)||t}function FD(t,n,e){let i=e.sanitize(vt.HTML,n);t.innerHTML=Qr(i||"")}function rs(t){return Array.isArray(t)?t:[t]}var PD=new Set,Kr,os=(()=>{class t{_platform=d(fe);_nonce=d(Lo,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):xO}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&EO(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function EO(t,n){if(!PD.has(t))try{Kr||(Kr=document.createElement("style"),n&&Kr.setAttribute("nonce",n),Kr.setAttribute("type","text/css"),document.head.appendChild(Kr)),Kr.sheet&&(Kr.sheet.insertRule(`@media ${t} {body{ }}`,0),PD.add(t))}catch(e){console.error(e)}}function xO(t){return{matches:t==="all"||t==="",media:t,addListener:()=>{},removeListener:()=>{}}}var dl=(()=>{class t{_mediaMatcher=d(os);_zone=d(k);_queries=new Map;_destroySubject=new C;constructor(){}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return LD(rs(e)).some(r=>this._registerQuery(r).mql.matches)}observe(e){let r=LD(rs(e)).map(s=>this._registerQuery(s).observable),o=po(r);return o=Ri(o.pipe(Tt(1)),o.pipe(yr(1),ai(0))),o.pipe(ee(s=>{let a={matches:!1,breakpoints:{}};return s.forEach(({matches:l,query:c})=>{a.matches=a.matches||l,a.breakpoints[c]=l}),a}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);let i=this._mediaMatcher.matchMedia(e),o={observable:new J(s=>{let a=l=>this._zone.run(()=>s.next(l));return i.addListener(a),()=>{i.removeListener(a)}}).pipe(kt(i),ee(({matches:s})=>({query:e,matches:s})),me(this._destroySubject)),mql:i};return this._queries.set(e,o),o}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function LD(t){return t.map(n=>n.split(",")).reduce((n,e)=>n.concat(e)).map(n=>n.trim())}function IO(t){if(t.type==="characterData"&&t.target instanceof Comment)return!0;if(t.type==="childList"){for(let n=0;n<t.addedNodes.length;n++)if(!(t.addedNodes[n]instanceof Comment))return!1;for(let n=0;n<t.removedNodes.length;n++)if(!(t.removedNodes[n]instanceof Comment))return!1;return!0}return!1}var jD=(()=>{class t{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),BD=(()=>{class t{_mutationObserverFactory=d(jD);_observedElements=new Map;_ngZone=d(k);constructor(){}ngOnDestroy(){this._observedElements.forEach((e,i)=>this._cleanupObserver(i))}observe(e){let i=Pt(e);return new J(r=>{let s=this._observeElement(i).pipe(ee(a=>a.filter(l=>!IO(l))),ge(a=>!!a.length)).subscribe(a=>{this._ngZone.run(()=>{r.next(a)})});return()=>{s.unsubscribe(),this._unobserveElement(i)}})}_observeElement(e){return this._ngZone.runOutsideAngular(()=>{if(this._observedElements.has(e))this._observedElements.get(e).count++;else{let i=new C,r=this._mutationObserverFactory.create(o=>i.next(o));r&&r.observe(e,{characterData:!0,childList:!0,subtree:!0}),this._observedElements.set(e,{observer:r,stream:i,count:1})}return this._observedElements.get(e).stream})}_unobserveElement(e){this._observedElements.has(e)&&(this._observedElements.get(e).count--,this._observedElements.get(e).count||this._cleanupObserver(e))}_cleanupObserver(e){if(this._observedElements.has(e)){let{observer:i,stream:r}=this._observedElements.get(e);i&&i.disconnect(),r.complete(),this._observedElements.delete(e)}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Lu=(()=>{class t{_contentObserver=d(BD);_elementRef=d(R);event=new A;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._disabled?this._unsubscribe():this._subscribe()}_disabled=!1;get debounce(){return this._debounce}set debounce(e){this._debounce=ti(e),this._subscribe()}_debounce;_currentSubscription=null;constructor(){}ngAfterContentInit(){!this._currentSubscription&&!this.disabled&&this._subscribe()}ngOnDestroy(){this._unsubscribe()}_subscribe(){this._unsubscribe();let e=this._contentObserver.observe(this._elementRef);this._currentSubscription=(this.debounce?e.pipe(ai(this.debounce)):e).subscribe(this.event)}_unsubscribe(){this._currentSubscription?.unsubscribe()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=M({type:t,selectors:[["","cdkObserveContent",""]],inputs:{disabled:[2,"cdkObserveContentDisabled","disabled",K],debounce:"debounce"},outputs:{event:"cdkObserveContent"},exportAs:["cdkObserveContent"]})}return t})(),ss=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=U({type:t});static \u0275inj=H({providers:[jD]})}return t})();var UD=new v("liveAnnouncerElement",{providedIn:"root",factory:()=>null}),zD=new v("LIVE_ANNOUNCER_DEFAULT_OPTIONS"),MO=0,ul=(()=>{class t{_ngZone=d(k);_defaultOptions=d(zD,{optional:!0});_liveElement;_document=d(V);_sanitizer=d(Ha);_previousTimeout;_currentPromise;_currentResolve;constructor(){let e=d(UD,{optional:!0});this._liveElement=e||this._createLiveElement()}announce(e,...i){let r=this._defaultOptions,o,s;return i.length===1&&typeof i[0]=="number"?s=i[0]:[o,s]=i,this.clear(),clearTimeout(this._previousTimeout),o||(o=r&&r.politeness?r.politeness:"polite"),s==null&&r&&(s=r.duration),this._liveElement.setAttribute("aria-live",o),this._liveElement.id&&this._exposeAnnouncerToModals(this._liveElement.id),this._ngZone.runOutsideAngular(()=>(this._currentPromise||(this._currentPromise=new Promise(a=>this._currentResolve=a)),clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{!e||typeof e=="string"?this._liveElement.textContent=e:FD(this._liveElement,e,this._sanitizer),typeof s=="number"&&(this._previousTimeout=setTimeout(()=>this.clear(),s)),this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0},100),this._currentPromise))}clear(){this._liveElement&&(this._liveElement.textContent="")}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement?.remove(),this._liveElement=null,this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0}_createLiveElement(){let e="cdk-live-announcer-element",i=this._document.getElementsByClassName(e),r=this._document.createElement("div");for(let o=0;o<i.length;o++)i[o].remove();return r.classList.add(e),r.classList.add("cdk-visually-hidden"),r.setAttribute("aria-atomic","true"),r.setAttribute("aria-live","polite"),r.id=`cdk-live-announcer-${MO++}`,this._document.body.appendChild(r),r}_exposeAnnouncerToModals(e){let i=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let r=0;r<i.length;r++){let o=i[r],s=o.getAttribute("aria-owns");s?s.indexOf(e)===-1&&o.setAttribute("aria-owns",s+" "+e):o.setAttribute("aria-owns",e)}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Ji=(function(t){return t[t.NONE=0]="NONE",t[t.BLACK_ON_WHITE=1]="BLACK_ON_WHITE",t[t.WHITE_ON_BLACK=2]="WHITE_ON_BLACK",t})(Ji||{}),VD="cdk-high-contrast-black-on-white",HD="cdk-high-contrast-white-on-black",sv="cdk-high-contrast-active",$D=(()=>{class t{_platform=d(fe);_hasCheckedHighContrastMode=!1;_document=d(V);_breakpointSubscription;constructor(){this._breakpointSubscription=d(dl).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return Ji.NONE;let e=this._document.createElement("div");e.style.backgroundColor="rgb(1,2,3)",e.style.position="absolute",this._document.body.appendChild(e);let i=this._document.defaultView||window,r=i&&i.getComputedStyle?i.getComputedStyle(e):null,o=(r&&r.backgroundColor||"").replace(/ /g,"");switch(e.remove(),o){case"rgb(0,0,0)":case"rgb(45,50,54)":case"rgb(32,32,32)":return Ji.WHITE_ON_BLACK;case"rgb(255,255,255)":case"rgb(255,250,239)":return Ji.BLACK_ON_WHITE}return Ji.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let e=this._document.body.classList;e.remove(sv,VD,HD),this._hasCheckedHighContrastMode=!0;let i=this.getHighContrastMode();i===Ji.BLACK_ON_WHITE?e.add(sv,VD):i===Ji.WHITE_ON_BLACK&&e.add(sv,HD)}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),av=(()=>{class t{constructor(){d($D)._applyBodyHighContrastModeCssClasses()}static \u0275fac=function(i){return new(i||t)};static \u0275mod=U({type:t});static \u0275inj=H({imports:[ss]})}return t})();var SO=200,ju=class{_letterKeyStream=new C;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new C;selectedItem=this._selectedItem;constructor(n,e){let i=typeof e?.debounceInterval=="number"?e.debounceInterval:SO;e?.skipPredicate&&(this._skipPredicateFn=e.skipPredicate),this.setItems(n),this._setupKeyHandler(i)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(n){this._selectedItemIndex=n}setItems(n){this._items=n}handleKey(n){let e=n.keyCode;n.key&&n.key.length===1?this._letterKeyStream.next(n.key.toLocaleUpperCase()):(e>=65&&e<=90||e>=48&&e<=57)&&this._letterKeyStream.next(String.fromCharCode(e))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(n){this._letterKeyStream.pipe($e(e=>this._pressedLetters.push(e)),ai(n),ge(()=>this._pressedLetters.length>0),ee(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(e=>{for(let i=1;i<this._items.length+1;i++){let r=(this._selectedItemIndex+i)%this._items.length,o=this._items[r];if(!this._skipPredicateFn?.(o)&&o.getLabel?.().toLocaleUpperCase().trim().indexOf(e)===0){this._selectedItem.next(o);break}}this._pressedLetters=[]})}};function Ut(t,...n){return n.length?n.some(e=>t[e]):t.altKey||t.shiftKey||t.ctrlKey||t.metaKey}var as=class{_items;_activeItemIndex=F(-1);_activeItem=F(null);_wrap=!1;_typeaheadSubscription=ae.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=n=>n.disabled;constructor(n,e){this._items=n,n instanceof pi?this._itemChangesSubscription=n.changes.subscribe(i=>this._itemsChanged(i.toArray())):Gn(n)&&(this._effectRef=Yt(()=>this._itemsChanged(n()),{injector:e}))}tabOut=new C;change=new C;skipPredicate(n){return this._skipPredicateFn=n,this}withWrap(n=!0){return this._wrap=n,this}withVerticalOrientation(n=!0){return this._vertical=n,this}withHorizontalOrientation(n){return this._horizontal=n,this}withAllowedModifierKeys(n){return this._allowedModifierKeys=n,this}withTypeAhead(n=200){this._typeaheadSubscription.unsubscribe();let e=this._getItemsArray();return this._typeahead=new ju(e,{debounceInterval:typeof n=="number"?n:void 0,skipPredicate:i=>this._skipPredicateFn(i)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(i=>{this.setActiveItem(i)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(n=!0){return this._homeAndEnd=n,this}withPageUpDown(n=!0,e=10){return this._pageUpAndDown={enabled:n,delta:e},this}setActiveItem(n){let e=this._activeItem();this.updateActiveItem(n),this._activeItem()!==e&&this.change.next(this._activeItemIndex())}onKeydown(n){let e=n.keyCode,r=["altKey","ctrlKey","metaKey","shiftKey"].every(o=>!n[o]||this._allowedModifierKeys.indexOf(o)>-1);switch(e){case 9:this.tabOut.next();return;case 40:if(this._vertical&&r){this.setNextItemActive();break}else return;case 38:if(this._vertical&&r){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&r){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&r){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&r){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&r){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(o>0?o:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()+this._pageUpAndDown.delta,s=this._getItemsArray().length;this._setActiveItemByIndex(o<s?o:s-1,-1);break}else return;default:(r||Ut(n,"shiftKey"))&&this._typeahead?.handleKey(n);return}this._typeahead?.reset(),n.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(n){let e=this._getItemsArray(),i=typeof n=="number"?n:e.indexOf(n),r=e[i];this._activeItem.set(r??null),this._activeItemIndex.set(i),this._typeahead?.setCurrentSelectedItemIndex(i)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(n){this._wrap?this._setActiveInWrapMode(n):this._setActiveInDefaultMode(n)}_setActiveInWrapMode(n){let e=this._getItemsArray();for(let i=1;i<=e.length;i++){let r=(this._activeItemIndex()+n*i+e.length)%e.length,o=e[r];if(!this._skipPredicateFn(o)){this.setActiveItem(r);return}}}_setActiveInDefaultMode(n){this._setActiveItemByIndex(this._activeItemIndex()+n,n)}_setActiveItemByIndex(n,e){let i=this._getItemsArray();if(i[n]){for(;this._skipPredicateFn(i[n]);)if(n+=e,!i[n])return;this.setActiveItem(n)}}_getItemsArray(){return Gn(this._items)?this._items():this._items instanceof pi?this._items.toArray():this._items}_itemsChanged(n){this._typeahead?.setItems(n);let e=this._activeItem();if(e){let i=n.indexOf(e);i>-1&&i!==this._activeItemIndex()&&(this._activeItemIndex.set(i),this._typeahead?.setCurrentSelectedItemIndex(i))}}};var fl=class extends as{setActiveItem(n){this.activeItem&&this.activeItem.setInactiveStyles(),super.setActiveItem(n),this.activeItem&&this.activeItem.setActiveStyles()}};var ml=class extends as{_origin="program";setFocusOrigin(n){return this._origin=n,this}setActiveItem(n){super.setActiveItem(n),this.activeItem&&this.activeItem.focus(this._origin)}};var dv={},rt=class t{_appId=d(qi);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(n,e=!1){return this._appId!=="ng"&&(n+=this._appId),dv.hasOwnProperty(n)||(dv[n]=0),`${n}${e?t._infix+"-":""}${dv[n]++}`}static \u0275fac=function(e){return new(e||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})};var ZD=" ";function mv(t,n,e){let i=Vu(t,n);e=e.trim(),!i.some(r=>r.trim()===e)&&(i.push(e),t.setAttribute(n,i.join(ZD)))}function Hu(t,n,e){let i=Vu(t,n);e=e.trim();let r=i.filter(o=>o!==e);r.length?t.setAttribute(n,r.join(ZD)):t.removeAttribute(n)}function Vu(t,n){return t.getAttribute(n)?.match(/\S+/g)??[]}var QD="cdk-describedby-message",Bu="cdk-describedby-host",fv=0,KD=(()=>{class t{_platform=d(fe);_document=d(V);_messageRegistry=new Map;_messagesContainer=null;_id=`${fv++}`;constructor(){d(ut).load(cl),this._id=d(qi)+"-"+fv++}describe(e,i,r){if(!this._canBeDescribed(e,i))return;let o=uv(i,r);typeof i!="string"?(YD(i,this._id),this._messageRegistry.set(o,{messageElement:i,referenceCount:0})):this._messageRegistry.has(o)||this._createMessageElement(i,r),this._isElementDescribedByMessage(e,o)||this._addMessageReference(e,o)}removeDescription(e,i,r){if(!i||!this._isElementNode(e))return;let o=uv(i,r);if(this._isElementDescribedByMessage(e,o)&&this._removeMessageReference(e,o),typeof i=="string"){let s=this._messageRegistry.get(o);s&&s.referenceCount===0&&this._deleteMessageElement(o)}this._messagesContainer?.childNodes.length===0&&(this._messagesContainer.remove(),this._messagesContainer=null)}ngOnDestroy(){let e=this._document.querySelectorAll(`[${Bu}="${this._id}"]`);for(let i=0;i<e.length;i++)this._removeCdkDescribedByReferenceIds(e[i]),e[i].removeAttribute(Bu);this._messagesContainer?.remove(),this._messagesContainer=null,this._messageRegistry.clear()}_createMessageElement(e,i){let r=this._document.createElement("div");YD(r,this._id),r.textContent=e,i&&r.setAttribute("role",i),this._createMessagesContainer(),this._messagesContainer.appendChild(r),this._messageRegistry.set(uv(e,i),{messageElement:r,referenceCount:0})}_deleteMessageElement(e){this._messageRegistry.get(e)?.messageElement?.remove(),this._messageRegistry.delete(e)}_createMessagesContainer(){if(this._messagesContainer)return;let e="cdk-describedby-message-container",i=this._document.querySelectorAll(`.${e}[platform="server"]`);for(let o=0;o<i.length;o++)i[o].remove();let r=this._document.createElement("div");r.style.visibility="hidden",r.classList.add(e),r.classList.add("cdk-visually-hidden"),this._platform.isBrowser||r.setAttribute("platform","server"),this._document.body.appendChild(r),this._messagesContainer=r}_removeCdkDescribedByReferenceIds(e){let i=Vu(e,"aria-describedby").filter(r=>r.indexOf(QD)!=0);e.setAttribute("aria-describedby",i.join(" "))}_addMessageReference(e,i){let r=this._messageRegistry.get(i);mv(e,"aria-describedby",r.messageElement.id),e.setAttribute(Bu,this._id),r.referenceCount++}_removeMessageReference(e,i){let r=this._messageRegistry.get(i);r.referenceCount--,Hu(e,"aria-describedby",r.messageElement.id),e.removeAttribute(Bu)}_isElementDescribedByMessage(e,i){let r=Vu(e,"aria-describedby"),o=this._messageRegistry.get(i),s=o&&o.messageElement.id;return!!s&&r.indexOf(s)!=-1}_canBeDescribed(e,i){if(!this._isElementNode(e))return!1;if(i&&typeof i=="object")return!0;let r=i==null?"":`${i}`.trim(),o=e.getAttribute("aria-label");return r?!o||o.trim()!==r:!1}_isElementNode(e){return e.nodeType===this._document.ELEMENT_NODE}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function uv(t,n){return typeof t=="string"?`${n||""}/${t}`:t}function YD(t,n){t.id||(t.id=`${QD}-${n}-${fv++}`)}var Tn=(function(t){return t[t.NORMAL=0]="NORMAL",t[t.NEGATED=1]="NEGATED",t[t.INVERTED=2]="INVERTED",t})(Tn||{}),Uu,Xr;function zu(){if(Xr==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return Xr=!1,Xr;if(document.documentElement?.style&&"scrollBehavior"in document.documentElement.style)Xr=!0;else{let t=Element.prototype.scrollTo;t?Xr=!/\{\s*\[native code\]\s*\}/.test(t.toString()):Xr=!1}}return Xr}function ls(){if(typeof document!="object"||!document)return Tn.NORMAL;if(Uu==null){let t=document.createElement("div"),n=t.style;t.dir="rtl",n.width="1px",n.overflow="auto",n.visibility="hidden",n.pointerEvents="none",n.position="absolute";let e=document.createElement("div"),i=e.style;i.width="2px",i.height="1px",t.appendChild(e),document.body.appendChild(t),Uu=Tn.NORMAL,t.scrollLeft===0&&(t.scrollLeft=1,Uu=t.scrollLeft===0?Tn.NEGATED:Tn.INVERTED),t.remove()}return Uu}function hv(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}var cs,XD=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function pv(){if(cs)return cs;if(typeof document!="object"||!document)return cs=new Set(XD),cs;let t=document.createElement("input");return cs=new Set(XD.filter(n=>(t.setAttribute("type",n),t.type===n))),cs}var JD={XSmall:"(max-width: 599.98px)",Small:"(min-width: 600px) and (max-width: 959.98px)",Medium:"(min-width: 960px) and (max-width: 1279.98px)",Large:"(min-width: 1280px) and (max-width: 1919.98px)",XLarge:"(min-width: 1920px)",Handset:"(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)",Tablet:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",Web:"(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)",HandsetPortrait:"(max-width: 599.98px) and (orientation: portrait)",TabletPortrait:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)",WebPortrait:"(min-width: 840px) and (orientation: portrait)",HandsetLandscape:"(max-width: 959.98px) and (orientation: landscape)",TabletLandscape:"(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",WebLandscape:"(min-width: 1280px) and (orientation: landscape)"};var kO=new v("MATERIAL_ANIMATIONS"),eE=null;function AO(){return d(kO,{optional:!0})?.animationsDisabled||d(Ea,{optional:!0})==="NoopAnimations"?"di-disabled":(eE??=d(os).matchMedia("(prefers-reduced-motion)").matches,eE?"reduced-motion":"enabled")}function Fe(){return AO()!=="enabled"}function qe(t){return t==null?"":typeof t=="string"?t:`${t}px`}function ft(t){return t!=null&&`${t}`!="false"}var hn=(function(t){return t[t.FADING_IN=0]="FADING_IN",t[t.VISIBLE=1]="VISIBLE",t[t.FADING_OUT=2]="FADING_OUT",t[t.HIDDEN=3]="HIDDEN",t})(hn||{}),gv=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=hn.HIDDEN;constructor(n,e,i,r=!1){this._renderer=n,this.element=e,this.config=i,this._animationForciblyDisabledThroughCss=r}fadeOut(){this._renderer.fadeOutRipple(this)}},tE=is({passive:!0,capture:!0}),vv=class{_events=new Map;addHandler(n,e,i,r){let o=this._events.get(e);if(o){let s=o.get(i);s?s.add(r):o.set(i,new Set([r]))}else this._events.set(e,new Map([[i,new Set([r])]])),n.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,tE)})}removeHandler(n,e,i){let r=this._events.get(n);if(!r)return;let o=r.get(e);o&&(o.delete(i),o.size===0&&r.delete(e),r.size===0&&(this._events.delete(n),document.removeEventListener(n,this._delegateEventHandler,tE)))}_delegateEventHandler=n=>{let e=yt(n);e&&this._events.get(n.type)?.forEach((i,r)=>{(r===e||r.contains(e))&&i.forEach(o=>o.handleEvent(n))})}},hl={enterDuration:225,exitDuration:150},RO=800,nE=is({passive:!0,capture:!0}),iE=["mousedown","touchstart"],rE=["mouseup","mouseleave","touchend","touchcancel"],NO=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=E({type:t,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(i,r){},styles:[`.mat-ripple {
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
`],encapsulation:2,changeDetection:0})}return t})(),Jr=class t{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new vv;constructor(n,e,i,r,o){this._target=n,this._ngZone=e,this._platform=r,r.isBrowser&&(this._containerElement=Pt(i)),o&&o.get(ut).load(NO)}fadeInRipple(n,e,i={}){let r=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=_(_({},hl),i.animation);i.centered&&(n=r.left+r.width/2,e=r.top+r.height/2);let s=i.radius||OO(n,e,r),a=n-r.left,l=e-r.top,c=o.enterDuration,u=document.createElement("div");u.classList.add("mat-ripple-element"),u.style.left=`${a-s}px`,u.style.top=`${l-s}px`,u.style.height=`${s*2}px`,u.style.width=`${s*2}px`,i.color!=null&&(u.style.backgroundColor=i.color),u.style.transitionDuration=`${c}ms`,this._containerElement.appendChild(u);let f=window.getComputedStyle(u),m=f.transitionProperty,h=f.transitionDuration,y=m==="none"||h==="0s"||h==="0s, 0s"||r.width===0&&r.height===0,x=new gv(this,u,i,y);u.style.transform="scale3d(1, 1, 1)",x.state=hn.FADING_IN,i.persistent||(this._mostRecentTransientRipple=x);let T=null;return!y&&(c||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let P=()=>{T&&(T.fallbackTimer=null),clearTimeout(ot),this._finishRippleTransition(x)},ve=()=>this._destroyRipple(x),ot=setTimeout(ve,c+100);u.addEventListener("transitionend",P),u.addEventListener("transitioncancel",ve),T={onTransitionEnd:P,onTransitionCancel:ve,fallbackTimer:ot}}),this._activeRipples.set(x,T),(y||!c)&&this._finishRippleTransition(x),x}fadeOutRipple(n){if(n.state===hn.FADING_OUT||n.state===hn.HIDDEN)return;let e=n.element,i=_(_({},hl),n.config.animation);e.style.transitionDuration=`${i.exitDuration}ms`,e.style.opacity="0",n.state=hn.FADING_OUT,(n._animationForciblyDisabledThroughCss||!i.exitDuration)&&this._finishRippleTransition(n)}fadeOutAll(){this._getActiveRipples().forEach(n=>n.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(n=>{n.config.persistent||n.fadeOut()})}setupTriggerEvents(n){let e=Pt(n);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,iE.forEach(i=>{t._eventManager.addHandler(this._ngZone,i,e,this)}))}handleEvent(n){n.type==="mousedown"?this._onMousedown(n):n.type==="touchstart"?this._onTouchStart(n):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{rE.forEach(e=>{this._triggerElement.addEventListener(e,this,nE)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(n){n.state===hn.FADING_IN?this._startFadeOutTransition(n):n.state===hn.FADING_OUT&&this._destroyRipple(n)}_startFadeOutTransition(n){let e=n===this._mostRecentTransientRipple,{persistent:i}=n.config;n.state=hn.VISIBLE,!i&&(!e||!this._isPointerDown)&&n.fadeOut()}_destroyRipple(n){let e=this._activeRipples.get(n)??null;this._activeRipples.delete(n),this._activeRipples.size||(this._containerRect=null),n===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),n.state=hn.HIDDEN,e!==null&&(n.element.removeEventListener("transitionend",e.onTransitionEnd),n.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),n.element.remove()}_onMousedown(n){let e=ol(n),i=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+RO;!this._target.rippleDisabled&&!e&&!i&&(this._isPointerDown=!0,this.fadeInRipple(n.clientX,n.clientY,this._target.rippleConfig))}_onTouchStart(n){if(!this._target.rippleDisabled&&!sl(n)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=n.changedTouches;if(e)for(let i=0;i<e.length;i++)this.fadeInRipple(e[i].clientX,e[i].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(n=>{let e=n.state===hn.VISIBLE||n.config.terminateOnPointerUp&&n.state===hn.FADING_IN;!n.config.persistent&&e&&n.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let n=this._triggerElement;n&&(iE.forEach(e=>t._eventManager.removeHandler(e,n,this)),this._pointerUpEventsRegistered&&(rE.forEach(e=>n.removeEventListener(e,this,nE)),this._pointerUpEventsRegistered=!1))}};function OO(t,n,e){let i=Math.max(Math.abs(t-e.left),Math.abs(t-e.right)),r=Math.max(Math.abs(n-e.top),Math.abs(n-e.bottom));return Math.sqrt(i*i+r*r)}var ds=new v("mat-ripple-global-options"),pl=(()=>{class t{_elementRef=d(R);_animationsDisabled=Fe();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=d(k),i=d(fe),r=d(ds,{optional:!0}),o=d(W);this._globalOptions=r||{},this._rippleRenderer=new Jr(this,e,this._elementRef,i,o)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:_(_(_({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,i=0,r){return typeof e=="number"?this._rippleRenderer.fadeInRipple(e,i,_(_({},this.rippleConfig),r)):this._rippleRenderer.fadeInRipple(0,0,_(_({},this.rippleConfig),e))}static \u0275fac=function(i){return new(i||t)};static \u0275dir=M({type:t,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(i,r){i&2&&z("mat-ripple-unbounded",r.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return t})();var FO={capture:!0},PO=["focus","mousedown","mouseenter","touchstart"],bv="mat-ripple-loader-uninitialized",_v="mat-ripple-loader-class-name",oE="mat-ripple-loader-centered",$u="mat-ripple-loader-disabled",sE=(()=>{class t{_document=d(V);_animationsDisabled=Fe();_globalRippleOptions=d(ds,{optional:!0});_platform=d(fe);_ngZone=d(k);_injector=d(W);_eventCleanups;_hosts=new Map;constructor(){let e=d(Ke).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>PO.map(i=>e.listen(this._document,i,this._onInteraction,FO)))}ngOnDestroy(){let e=this._hosts.keys();for(let i of e)this.destroyRipple(i);this._eventCleanups.forEach(i=>i())}configureRipple(e,i){e.setAttribute(bv,this._globalRippleOptions?.namespace??""),(i.className||!e.hasAttribute(_v))&&e.setAttribute(_v,i.className||""),i.centered&&e.setAttribute(oE,""),i.disabled&&e.setAttribute($u,"")}setDisabled(e,i){let r=this._hosts.get(e);r?(r.target.rippleDisabled=i,!i&&!r.hasSetUpEvents&&(r.hasSetUpEvents=!0,r.renderer.setupTriggerEvents(e))):i?e.setAttribute($u,""):e.removeAttribute($u)}_onInteraction=e=>{let i=yt(e);if(i instanceof HTMLElement){let r=i.closest(`[${bv}="${this._globalRippleOptions?.namespace??""}"]`);r&&this._createRipple(r)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let i=this._document.createElement("span");i.classList.add("mat-ripple",e.getAttribute(_v)),e.append(i);let r=this._globalRippleOptions,o=this._animationsDisabled?0:r?.animation?.enterDuration??hl.enterDuration,s=this._animationsDisabled?0:r?.animation?.exitDuration??hl.exitDuration,a={rippleDisabled:this._animationsDisabled||r?.disabled||e.hasAttribute($u),rippleConfig:{centered:e.hasAttribute(oE),terminateOnPointerUp:r?.terminateOnPointerUp,animation:{enterDuration:o,exitDuration:s}}},l=new Jr(a,this._ngZone,i,this._platform,this._injector),c=!a.rippleDisabled;c&&l.setupTriggerEvents(e),this._hosts.set(e,{target:a,renderer:l,hasSetUpEvents:c}),e.removeAttribute(bv)}destroyRipple(e){let i=this._hosts.get(e);i&&(i.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var er=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=E({type:t,selectors:[["structural-styles"]],decls:0,vars:0,template:function(i,r){},styles:[`.mat-focus-indicator {
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
`],encapsulation:2,changeDetection:0})}return t})();var LO=["mat-icon-button",""],jO=["*"],BO=new v("MAT_BUTTON_CONFIG");function aE(t){return t==null?void 0:Qn(t)}var yv=(()=>{class t{_elementRef=d(R);_ngZone=d(k);_animationsDisabled=Fe();_config=d(BO,{optional:!0});_focusMonitor=d(Zr);_cleanupClick;_renderer=d(ke);_rippleLoader=d(sE);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}constructor(){d(ut).load(er);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e="program",i){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,i):this._elementRef.nativeElement.focus(i)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static \u0275fac=function(i){return new(i||t)};static \u0275dir=M({type:t,hostAttrs:[1,"mat-mdc-button-base"],hostVars:13,hostBindings:function(i,r){i&2&&(ue("disabled",r._getDisabledAttribute())("aria-disabled",r._getAriaDisabled())("tabindex",r._getTabIndex()),Ot(r.color?"mat-"+r.color:""),z("mat-mdc-button-disabled",r.disabled)("mat-mdc-button-disabled-interactive",r.disabledInteractive)("mat-unthemed",!r.color)("_mat-animation-noopable",r._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",K],disabled:[2,"disabled","disabled",K],ariaDisabled:[2,"aria-disabled","ariaDisabled",K],disabledInteractive:[2,"disabledInteractive","disabledInteractive",K],tabIndex:[2,"tabIndex","tabIndex",aE],_tabindex:[2,"tabindex","_tabindex",aE]}})}return t})(),wv=(()=>{class t extends yv{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=E({type:t,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[be],attrs:LO,ngContentSelectors:jO,decls:4,vars:0,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(i,r){i&1&&(Ie(),ln(0,"span",0),Q(1),ln(2,"span",1)(3,"span",2))},styles:[`.mat-mdc-icon-button {
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
`],encapsulation:2,changeDetection:0})}return t})();var us=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=U({type:t});static \u0275inj=H({imports:[he]})}return t})();var VO=["matButton",""],HO=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]]],UO=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"];var lE=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),fs=(()=>{class t extends yv{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let e=zO(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let i=this._elementRef.nativeElement.classList,r=this._appearance?lE.get(this._appearance):null,o=lE.get(e);r&&i.remove(...r),i.add(...o),this._appearance=e}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=E({type:t,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[be],attrs:VO,ngContentSelectors:UO,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(i,r){i&1&&(Ie(HO),ln(0,"span",0),Q(1),Vt(2,"span",1),Q(3,1),Qt(),Q(4,2),ln(5,"span",2)(6,"span",3)),i&2&&z("mdc-button__ripple",!r._isFab)("mdc-fab__ripple",r._isFab)},styles:[`.mat-mdc-button-base {
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
`],encapsulation:2,changeDetection:0})}return t})();function zO(t){return t.hasAttribute("mat-raised-button")?"elevated":t.hasAttribute("mat-stroked-button")?"outlined":t.hasAttribute("mat-flat-button")?"filled":t.hasAttribute("mat-button")?"text":null}var gl=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=U({type:t});static \u0275inj=H({imports:[us,he]})}return t})();var Cv=class{_box;_destroyed=new C;_resizeSubject=new C;_resizeObserver;_elementObservables=new Map;constructor(n){this._box=n,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(n){return this._elementObservables.has(n)||this._elementObservables.set(n,new J(e=>{let i=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(n,{box:this._box}),()=>{this._resizeObserver?.unobserve(n),i.unsubscribe(),this._elementObservables.delete(n)}}).pipe(ge(e=>e.some(i=>i.target===n)),gc({bufferSize:1,refCount:!0}),me(this._destroyed))),this._elementObservables.get(n)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},Wu=(()=>{class t{_cleanupErrorListener;_observers=new Map;_ngZone=d(k);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,i){let r=i?.box||"content-box";return this._observers.has(r)||this._observers.set(r,new Cv(r)),this._observers.get(r).observe(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var $O=["notch"],WO=["matFormFieldNotchedOutline",""],GO=["*"],dE=["iconPrefixContainer"],uE=["textPrefixContainer"],fE=["iconSuffixContainer"],mE=["textSuffixContainer"],qO=["textField"],YO=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],ZO=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function QO(t,n){t&1&&ne(0,"span",21)}function KO(t,n){if(t&1&&(p(0,"label",20),Q(1,1),oe(2,QO,1,0,"span",21),g()),t&2){let e=q(2);Z("floating",e._shouldLabelFloat())("monitorResize",e._hasOutline())("id",e._labelId),ue("for",e._control.disableAutomaticLabeling?null:e._control.id),w(2),se(!e.hideRequiredMarker&&e._control.required?2:-1)}}function XO(t,n){if(t&1&&oe(0,KO,3,5,"label",20),t&2){let e=q();se(e._hasFloatingLabel()?0:-1)}}function JO(t,n){t&1&&ne(0,"div",7)}function eF(t,n){}function tF(t,n){if(t&1&&Bt(0,eF,0,0,"ng-template",13),t&2){q(2);let e=cn(1);Z("ngTemplateOutlet",e)}}function nF(t,n){if(t&1&&(p(0,"div",9),oe(1,tF,1,1,null,13),g()),t&2){let e=q();Z("matFormFieldNotchedOutlineOpen",e._shouldLabelFloat()),w(),se(e._forceDisplayInfixLabel()?-1:1)}}function iF(t,n){t&1&&(p(0,"div",10,2),Q(2,2),g())}function rF(t,n){t&1&&(p(0,"div",11,3),Q(2,3),g())}function oF(t,n){}function sF(t,n){if(t&1&&Bt(0,oF,0,0,"ng-template",13),t&2){q();let e=cn(1);Z("ngTemplateOutlet",e)}}function aF(t,n){t&1&&(p(0,"div",14,4),Q(2,4),g())}function lF(t,n){t&1&&(p(0,"div",15,5),Q(2,5),g())}function cF(t,n){t&1&&ne(0,"div",16)}function dF(t,n){t&1&&(p(0,"div",18),Q(1,6),g())}function uF(t,n){if(t&1&&(p(0,"mat-hint",22),D(1),g()),t&2){let e=q(2);Z("id",e._hintLabelId),w(),De(e.hintLabel)}}function fF(t,n){if(t&1&&(p(0,"div",19),oe(1,uF,2,2,"mat-hint",22),Q(2,7),ne(3,"div",23),Q(4,8),g()),t&2){let e=q();w(),se(e.hintLabel?1:-1)}}var eo=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=M({type:t,selectors:[["mat-label"]]})}return t})(),yE=new v("MatError"),Ev=(()=>{class t{id=d(rt).getId("mat-mdc-error-");constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275dir=M({type:t,selectors:[["mat-error"],["","matError",""]],hostAttrs:[1,"mat-mdc-form-field-error","mat-mdc-form-field-bottom-align"],hostVars:1,hostBindings:function(i,r){i&2&&_i("id",r.id)},inputs:{id:"id"},features:[Re([{provide:yE,useExisting:t}])]})}return t})(),Dv=(()=>{class t{align="start";id=d(rt).getId("mat-mdc-hint-");static \u0275fac=function(i){return new(i||t)};static \u0275dir=M({type:t,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(i,r){i&2&&(_i("id",r.id),ue("align",null),z("mat-mdc-form-field-hint-end",r.align==="end"))},inputs:{align:"align",id:"id"}})}return t})(),mF=new v("MatPrefix");var wE=new v("MatSuffix"),xv=(()=>{class t{set _isTextSelector(e){this._isText=!0}_isText=!1;static \u0275fac=function(i){return new(i||t)};static \u0275dir=M({type:t,selectors:[["","matSuffix",""],["","matIconSuffix",""],["","matTextSuffix",""]],inputs:{_isTextSelector:[0,"matTextSuffix","_isTextSelector"]},features:[Re([{provide:wE,useExisting:t}])]})}return t})(),CE=new v("FloatingLabelParent"),hE=(()=>{class t{_elementRef=d(R);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=d(Wu);_ngZone=d(k);_parent=d(CE);_resizeSubscription=new ae;constructor(){}ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return hF(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(i){return new(i||t)};static \u0275dir=M({type:t,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(i,r){i&2&&z("mdc-floating-label--float-above",r.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return t})();function hF(t){let n=t;if(n.offsetParent!==null)return n.scrollWidth;let e=n.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let i=e.scrollWidth;return e.remove(),i}var pE="mdc-line-ripple--active",Gu="mdc-line-ripple--deactivating",gE=(()=>{class t{_elementRef=d(R);_cleanupTransitionEnd;constructor(){let e=d(k),i=d(ke);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=i.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(Gu),e.add(pE)}deactivate(){this._elementRef.nativeElement.classList.add(Gu)}_handleTransitionEnd=e=>{let i=this._elementRef.nativeElement.classList,r=i.contains(Gu);e.propertyName==="opacity"&&r&&i.remove(pE,Gu)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=M({type:t,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return t})(),vE=(()=>{class t{_elementRef=d(R);_ngZone=d(k);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,i=e.querySelector(".mdc-floating-label");i?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(i.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>i.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){let i=this._notch.nativeElement;!this.open||!e?i.style.width="":i.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=E({type:t,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(i,r){if(i&1&&Ue($O,5),i&2){let o;L(o=j())&&(r._notch=o.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(i,r){i&2&&z("mdc-notched-outline--notched",r.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},attrs:WO,ngContentSelectors:GO,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(i,r){i&1&&(Ie(),ln(0,"div",1),Vt(1,"div",2,0),Q(3),Qt(),ln(4,"div",3))},encapsulation:2,changeDetection:0})}return t})(),vl=(()=>{class t{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(i){return new(i||t)};static \u0275dir=M({type:t})}return t})();var bl=new v("MatFormField"),pF=new v("MAT_FORM_FIELD_DEFAULT_OPTIONS"),bE="fill",gF="auto",_E="fixed",vF="translateY(-50%)",ni=(()=>{class t{_elementRef=d(R);_changeDetectorRef=d(Oe);_platform=d(fe);_idGenerator=d(rt);_ngZone=d(k);_defaults=d(pF,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=xn("iconPrefixContainer");_textPrefixContainerSignal=xn("textPrefixContainer");_iconSuffixContainerSignal=xn("iconSuffixContainer");_textSuffixContainerSignal=xn("textSuffixContainer");_prefixSuffixContainers=Je(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=V0(eo);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=ft(e)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||gF}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let i=e||this._defaults?.appearance||bE;this._appearanceSignal.set(i)}_appearanceSignal=F(bE);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||_E}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||_E}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new C;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=Fe();constructor(){let e=this._defaults,i=d(Mt);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),Yt(()=>this._currentDirection=i.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=Je(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){let i=this._control,r="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(r+e.controlType),i.controlType&&this._elementRef.nativeElement.classList.add(r+i.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=i.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=i.stateChanges.pipe(kt([void 0,void 0]),ee(()=>[i.errorState,i.userAriaDescribedBy]),pc(),ge(([[o,s],[a,l]])=>o!==a||s!==l)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),i.ngControl&&i.ngControl.valueChanges&&(this._valueChanges=i.ngControl.valueChanges.pipe(me(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),$t(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){$0({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=Je(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let i=this._control?this._control.ngControl:null;return i&&i[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let o=this._hintChildren?this._hintChildren.find(a=>a.align==="start"):null,s=this._hintChildren?this._hintChildren.find(a=>a.align==="end"):null;o?e.push(o.id):this._hintLabel&&e.push(this._hintLabelId),s&&e.push(s.id)}else this._errorChildren&&e.push(...this._errorChildren.map(o=>o.id));let i=this._control.describedByIds,r;if(i){let o=this._describedByIds||e;r=e.concat(i.filter(s=>s&&!o.includes(s)))}else r=e;this._control.setDescribedByIds(r),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,i=this._textPrefixContainer?.nativeElement,r=this._iconSuffixContainer?.nativeElement,o=this._textSuffixContainer?.nativeElement,s=e?.getBoundingClientRect().width??0,a=i?.getBoundingClientRect().width??0,l=r?.getBoundingClientRect().width??0,c=o?.getBoundingClientRect().width??0,u=this._currentDirection==="rtl"?"-1":"1",f=`${s+a}px`,h=`calc(${u} * (${f} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,y=`var(--mat-mdc-form-field-label-transform, ${vF} translateX(${h}))`,x=s+a+l+c;return[y,x]}_writeOutlinedLabelStyles(e){if(e!==null){let[i,r]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=i),r!==null&&this._notchedOutline?._setMaxWidth(r)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let i=e.getRootNode();return i&&i!==e}return document.documentElement.contains(e)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=E({type:t,selectors:[["mat-form-field"]],contentQueries:function(i,r,o){if(i&1&&(Ld(o,r._labelChild,eo,5),_t(o,vl,5)(o,mF,5)(o,wE,5)(o,yE,5)(o,Dv,5)),i&2){Yn();let s;L(s=j())&&(r._formFieldControl=s.first),L(s=j())&&(r._prefixChildren=s),L(s=j())&&(r._suffixChildren=s),L(s=j())&&(r._errorChildren=s),L(s=j())&&(r._hintChildren=s)}},viewQuery:function(i,r){if(i&1&&(qn(r._iconPrefixContainerSignal,dE,5)(r._textPrefixContainerSignal,uE,5)(r._iconSuffixContainerSignal,fE,5)(r._textSuffixContainerSignal,mE,5),Ue(qO,5)(dE,5)(uE,5)(fE,5)(mE,5)(hE,5)(vE,5)(gE,5)),i&2){Yn(4);let o;L(o=j())&&(r._textField=o.first),L(o=j())&&(r._iconPrefixContainer=o.first),L(o=j())&&(r._textPrefixContainer=o.first),L(o=j())&&(r._iconSuffixContainer=o.first),L(o=j())&&(r._textSuffixContainer=o.first),L(o=j())&&(r._floatingLabel=o.first),L(o=j())&&(r._notchedOutline=o.first),L(o=j())&&(r._lineRipple=o.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(i,r){i&2&&z("mat-mdc-form-field-label-always-float",r._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",r._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",r._hasIconSuffix)("mat-form-field-invalid",r._control.errorState)("mat-form-field-disabled",r._control.disabled)("mat-form-field-autofilled",r._control.autofilled)("mat-form-field-appearance-fill",r.appearance=="fill")("mat-form-field-appearance-outline",r.appearance=="outline")("mat-form-field-hide-placeholder",r._hasFloatingLabel()&&!r._shouldLabelFloat())("mat-primary",r.color!=="accent"&&r.color!=="warn")("mat-accent",r.color==="accent")("mat-warn",r.color==="warn")("ng-untouched",r._shouldForward("untouched"))("ng-touched",r._shouldForward("touched"))("ng-pristine",r._shouldForward("pristine"))("ng-dirty",r._shouldForward("dirty"))("ng-valid",r._shouldForward("valid"))("ng-invalid",r._shouldForward("invalid"))("ng-pending",r._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[Re([{provide:bl,useExisting:t},{provide:CE,useExisting:t}])],ngContentSelectors:ZO,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(i,r){if(i&1&&(Ie(YO),Bt(0,XO,1,1,"ng-template",null,0,jd),p(2,"div",6,1),N("click",function(s){return r._control.onContainerClick(s)}),oe(4,JO,1,0,"div",7),p(5,"div",8),oe(6,nF,2,2,"div",9),oe(7,iF,3,0,"div",10),oe(8,rF,3,0,"div",11),p(9,"div",12),oe(10,sF,1,1,null,13),Q(11),g(),oe(12,aF,3,0,"div",14),oe(13,lF,3,0,"div",15),g(),oe(14,cF,1,0,"div",16),g(),p(15,"div",17),oe(16,dF,2,0,"div",18)(17,fF,5,1,"div",19),g()),i&2){let o;w(2),z("mdc-text-field--filled",!r._hasOutline())("mdc-text-field--outlined",r._hasOutline())("mdc-text-field--no-label",!r._hasFloatingLabel())("mdc-text-field--disabled",r._control.disabled)("mdc-text-field--invalid",r._control.errorState),w(2),se(!r._hasOutline()&&!r._control.disabled?4:-1),w(2),se(r._hasOutline()?6:-1),w(),se(r._hasIconPrefix?7:-1),w(),se(r._hasTextPrefix?8:-1),w(2),se(!r._hasOutline()||r._forceDisplayInfixLabel()?10:-1),w(2),se(r._hasTextSuffix?12:-1),w(),se(r._hasIconSuffix?13:-1),w(),se(r._hasOutline()?-1:14),w(),z("mat-mdc-form-field-subscript-dynamic-size",r.subscriptSizing==="dynamic");let s=r._getSubscriptMessageType();w(),se((o=s)==="error"?16:o==="hint"?17:-1)}},dependencies:[hE,vE,eg,gE,Dv],styles:[`.mdc-text-field {
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
`],encapsulation:2,changeDetection:0})}return t})();var en=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=U({type:t});static \u0275inj=H({imports:[ss,ni,he]})}return t})();function DE(t){return Error(`Unable to find icon with the name "${t}"`)}function bF(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function EE(t){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${t}".`)}function xE(t){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${t}".`)}var Ii=class{url;svgText;options;svgElement=null;constructor(n,e,i){this.url=n,this.svgText=e,this.options=i}},ME=(()=>{class t{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(e,i,r,o){this._httpClient=e,this._sanitizer=i,this._errorHandler=o,this._document=r}addSvgIcon(e,i,r){return this.addSvgIconInNamespace("",e,i,r)}addSvgIconLiteral(e,i,r){return this.addSvgIconLiteralInNamespace("",e,i,r)}addSvgIconInNamespace(e,i,r,o){return this._addSvgIconConfig(e,i,new Ii(r,null,o))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,i,r,o){let s=this._sanitizer.sanitize(vt.HTML,r);if(!s)throw xE(r);let a=Qr(s);return this._addSvgIconConfig(e,i,new Ii("",a,o))}addSvgIconSet(e,i){return this.addSvgIconSetInNamespace("",e,i)}addSvgIconSetLiteral(e,i){return this.addSvgIconSetLiteralInNamespace("",e,i)}addSvgIconSetInNamespace(e,i,r){return this._addSvgIconSetConfig(e,new Ii(i,null,r))}addSvgIconSetLiteralInNamespace(e,i,r){let o=this._sanitizer.sanitize(vt.HTML,i);if(!o)throw xE(i);let s=Qr(o);return this._addSvgIconSetConfig(e,new Ii("",s,r))}registerFontClassAlias(e,i=e){return this._fontCssClassesByAlias.set(e,i),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(e){let i=this._sanitizer.sanitize(vt.RESOURCE_URL,e);if(!i)throw EE(e);let r=this._cachedIconsByUrl.get(i);return r?B(qu(r)):this._loadSvgIconFromConfig(new Ii(e,null)).pipe($e(o=>this._cachedIconsByUrl.set(i,o)),ee(o=>qu(o)))}getNamedSvgIcon(e,i=""){let r=IE(i,e),o=this._svgIconConfigs.get(r);if(o)return this._getSvgFromConfig(o);if(o=this._getIconConfigFromResolvers(i,e),o)return this._svgIconConfigs.set(r,o),this._getSvgFromConfig(o);let s=this._iconSetConfigs.get(i);return s?this._getSvgFromIconSetConfigs(e,s):vr(DE(r))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?B(qu(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe(ee(i=>qu(i)))}_getSvgFromIconSetConfigs(e,i){let r=this._extractIconWithNameFromAnySet(e,i);if(r)return B(r);let o=i.filter(s=>!s.svgText).map(s=>this._loadSvgIconSetFromConfig(s).pipe(Ni(a=>{let c=`Loading icon set URL: ${this._sanitizer.sanitize(vt.RESOURCE_URL,s.url)} failed: ${a.message}`;return this._errorHandler.handleError(new Error(c)),B(null)})));return qs(o).pipe(ee(()=>{let s=this._extractIconWithNameFromAnySet(e,i);if(!s)throw DE(e);return s}))}_extractIconWithNameFromAnySet(e,i){for(let r=i.length-1;r>=0;r--){let o=i[r];if(o.svgText&&o.svgText.toString().indexOf(e)>-1){let s=this._svgElementFromConfig(o),a=this._extractSvgIconFromSet(s,e,o.options);if(a)return a}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe($e(i=>e.svgText=i),ee(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?B(null):this._fetchIcon(e).pipe($e(i=>e.svgText=i))}_extractSvgIconFromSet(e,i,r){let o=e.querySelector(`[id="${i}"]`);if(!o)return null;let s=o.cloneNode(!0);if(s.removeAttribute("id"),s.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(s,r);if(s.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(s),r);let a=this._svgElementFromString(Qr("<svg></svg>"));return a.appendChild(s),this._setSvgAttributes(a,r)}_svgElementFromString(e){let i=this._document.createElement("DIV");i.innerHTML=e;let r=i.querySelector("svg");if(!r)throw Error("<svg> tag not found");return r}_toSvgElement(e){let i=this._svgElementFromString(Qr("<svg></svg>")),r=e.attributes;for(let o=0;o<r.length;o++){let{name:s,value:a}=r[o];s!=="id"&&i.setAttribute(s,a)}for(let o=0;o<e.childNodes.length;o++)e.childNodes[o].nodeType===this._document.ELEMENT_NODE&&i.appendChild(e.childNodes[o].cloneNode(!0));return i}_setSvgAttributes(e,i){return e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),i&&i.viewBox&&e.setAttribute("viewBox",i.viewBox),e}_fetchIcon(e){let{url:i,options:r}=e,o=r?.withCredentials??!1;if(!this._httpClient)throw bF();if(i==null)throw Error(`Cannot fetch icon from URL "${i}".`);let s=this._sanitizer.sanitize(vt.RESOURCE_URL,i);if(!s)throw EE(i);let a=this._inProgressUrlFetches.get(s);if(a)return a;let l=this._httpClient.get(s,{responseType:"text",withCredentials:o}).pipe(ee(c=>Qr(c)),Fi(()=>this._inProgressUrlFetches.delete(s)),Zs());return this._inProgressUrlFetches.set(s,l),l}_addSvgIconConfig(e,i,r){return this._svgIconConfigs.set(IE(e,i),r),this}_addSvgIconSetConfig(e,i){let r=this._iconSetConfigs.get(e);return r?r.push(i):this._iconSetConfigs.set(e,[i]),this}_svgElementFromConfig(e){if(!e.svgElement){let i=this._svgElementFromString(e.svgText);this._setSvgAttributes(i,e.options),e.svgElement=i}return e.svgElement}_getIconConfigFromResolvers(e,i){for(let r=0;r<this._resolvers.length;r++){let o=this._resolvers[r](i,e);if(o)return _F(o)?new Ii(o.url,null,o.options):new Ii(o,null)}}static \u0275fac=function(i){return new(i||t)(O(xt,8),O(Ha),O(V,8),O(Dt))};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function qu(t){return t.cloneNode(!0)}function IE(t,n){return t+":"+n}function _F(t){return!!(t.url&&t.options)}var yF=["*"],wF=new v("MAT_ICON_DEFAULT_OPTIONS"),CF=new v("mat-icon-location",{providedIn:"root",factory:()=>{let t=d(V),n=t?t.location:null;return{getPathname:()=>n?n.pathname+n.search:""}}}),SE=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],DF=SE.map(t=>`[${t}]`).join(", "),EF=/^url\(['"]?#(.*?)['"]?\)$/,ms=(()=>{class t{_elementRef=d(R);_iconRegistry=d(ME);_location=d(CF);_errorHandler=d(Dt);_defaultColor;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(e){let i=this._cleanupFontValue(e);i!==this._fontSet&&(this._fontSet=i,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(e){let i=this._cleanupFontValue(e);i!==this._fontIcon&&(this._fontIcon=i,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=ae.EMPTY;constructor(){let e=d(new Yi("aria-hidden"),{optional:!0}),i=d(wF,{optional:!0});i&&(i.color&&(this.color=this._defaultColor=i.color),i.fontSet&&(this.fontSet=i.fontSet)),e||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(e){if(!e)return["",""];let i=e.split(":");switch(i.length){case 1:return["",i[0]];case 2:return i;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let i=this._location.getPathname();i!==this._previousPath&&(this._previousPath=i,this._prependPathToReferences(i))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();let i=this._location.getPathname();this._previousPath=i,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(i),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){let e=this._elementRef.nativeElement,i=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();i--;){let r=e.childNodes[i];(r.nodeType!==1||r.nodeName.toLowerCase()==="svg")&&r.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,i=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(r=>r.length>0);this._previousFontSetClass.forEach(r=>e.classList.remove(r)),i.forEach(r=>e.classList.add(r)),this._previousFontSetClass=i,this.fontIcon!==this._previousFontIconClass&&!i.includes("mat-ligature-font")&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return typeof e=="string"?e.trim().split(" ")[0]:e}_prependPathToReferences(e){let i=this._elementsWithExternalReferences;i&&i.forEach((r,o)=>{r.forEach(s=>{o.setAttribute(s.name,`url('${e}#${s.value}')`)})})}_cacheChildrenWithExternalReferences(e){let i=e.querySelectorAll(DF),r=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let o=0;o<i.length;o++)SE.forEach(s=>{let a=i[o],l=a.getAttribute(s),c=l?l.match(EF):null;if(c){let u=r.get(a);u||(u=[],r.set(a,u)),u.push({name:s,value:c[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[i,r]=this._splitIconName(e);i&&(this._svgNamespace=i),r&&(this._svgName=r),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(r,i).pipe(Tt(1)).subscribe(o=>this._setSvgElement(o),o=>{let s=`Error retrieving icon ${i}:${r}! ${o.message}`;this._errorHandler.handleError(new Error(s))})}}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=E({type:t,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(i,r){i&2&&(ue("data-mat-icon-type",r._usingFontIcon()?"font":"svg")("data-mat-icon-name",r._svgName||r.fontIcon)("data-mat-icon-namespace",r._svgNamespace||r.fontSet)("fontIcon",r._usingFontIcon()?r.fontIcon:null),Ot(r.color?"mat-"+r.color:""),z("mat-icon-inline",r.inline)("mat-icon-no-color",r.color!=="primary"&&r.color!=="accent"&&r.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",K],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:yF,decls:1,vars:0,template:function(i,r){i&1&&(Ie(),Q(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
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
`],encapsulation:2,changeDetection:0})}return t})(),hs=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=U({type:t});static \u0275inj=H({imports:[he]})}return t})();var xF=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=E({type:t,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(i,r){},styles:[`textarea.cdk-textarea-autosize {
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
`],encapsulation:2,changeDetection:0})}return t})(),IF={passive:!0},TE=(()=>{class t{_platform=d(fe);_ngZone=d(k);_renderer=d(Ke).createRenderer(null,null);_styleLoader=d(ut);_monitoredElements=new Map;constructor(){}monitor(e){if(!this._platform.isBrowser)return Pe;this._styleLoader.load(xF);let i=Pt(e),r=this._monitoredElements.get(i);if(r)return r.subject;let o=new C,s="cdk-text-field-autofilled",a=c=>{c.animationName==="cdk-text-field-autofill-start"&&!i.classList.contains(s)?(i.classList.add(s),this._ngZone.run(()=>o.next({target:c.target,isAutofilled:!0}))):c.animationName==="cdk-text-field-autofill-end"&&i.classList.contains(s)&&(i.classList.remove(s),this._ngZone.run(()=>o.next({target:c.target,isAutofilled:!1})))},l=this._ngZone.runOutsideAngular(()=>(i.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(i,"animationstart",a,IF)));return this._monitoredElements.set(i,{subject:o,unlisten:l}),o}stopMonitoring(e){let i=Pt(e),r=this._monitoredElements.get(i);r&&(r.unlisten(),r.subject.complete(),i.classList.remove("cdk-text-field-autofill-monitored"),i.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(i))}ngOnDestroy(){this._monitoredElements.forEach((e,i)=>this.stopMonitoring(i))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var kE=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=U({type:t});static \u0275inj=H({})}return t})();var jE=(()=>{class t{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,i){this._renderer=e,this._elementRef=i}setProperty(e,i){this._renderer.setProperty(this._elementRef.nativeElement,e,i)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(i){return new(i||t)(xe(ke),xe(R))};static \u0275dir=M({type:t})}return t})(),MF=(()=>{class t extends jE{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ge(t)))(r||t)}})();static \u0275dir=M({type:t,features:[be]})}return t})(),BE=new v("");var SF={provide:BE,useExisting:gn(()=>nr),multi:!0};function TF(){let t=dn()?dn().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var kF=new v(""),nr=(()=>{class t extends jE{_compositionMode;_composing=!1;constructor(e,i,r){super(e,i),this._compositionMode=r,this._compositionMode==null&&(this._compositionMode=!TF())}writeValue(e){let i=e??"";this.setProperty("value",i)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(i){return new(i||t)(xe(ke),xe(R),xe(kF,8))};static \u0275dir=M({type:t,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(i,r){i&1&&N("input",function(s){return r._handleInput(s.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(s){return r._compositionEnd(s.target.value)})},standalone:!1,features:[Re([SF]),be]})}return t})();function kv(t){return t==null||Av(t)===0}function Av(t){return t==null?null:Array.isArray(t)||typeof t=="string"?t.length:t instanceof Set?t.size:null}var Rv=new v(""),Nv=new v(""),AF=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,vs=class{static min(n){return RF(n)}static max(n){return NF(n)}static required(n){return OF(n)}static requiredTrue(n){return FF(n)}static email(n){return PF(n)}static minLength(n){return LF(n)}static maxLength(n){return jF(n)}static pattern(n){return BF(n)}static nullValidator(n){return VE()}static compose(n){return GE(n)}static composeAsync(n){return qE(n)}};function RF(t){return n=>{if(n.value==null||t==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e<t?{min:{min:t,actual:n.value}}:null}}function NF(t){return n=>{if(n.value==null||t==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e>t?{max:{max:t,actual:n.value}}:null}}function OF(t){return kv(t.value)?{required:!0}:null}function FF(t){return t.value===!0?null:{required:!0}}function PF(t){return kv(t.value)||AF.test(t.value)?null:{email:!0}}function LF(t){return n=>{let e=n.value?.length??Av(n.value);return e===null||e===0?null:e<t?{minlength:{requiredLength:t,actualLength:e}}:null}}function jF(t){return n=>{let e=n.value?.length??Av(n.value);return e!==null&&e>t?{maxlength:{requiredLength:t,actualLength:e}}:null}}function BF(t){if(!t)return VE;let n,e;return typeof t=="string"?(e="",t.charAt(0)!=="^"&&(e+="^"),e+=t,t.charAt(t.length-1)!=="$"&&(e+="$"),n=new RegExp(e)):(e=t.toString(),n=t),i=>{if(kv(i.value))return null;let r=i.value;return n.test(r)?null:{pattern:{requiredPattern:e,actualValue:r}}}}function VE(t){return null}function HE(t){return t!=null}function UE(t){return bi(t)?Se(t):t}function zE(t){let n={};return t.forEach(e=>{n=e!=null?_(_({},n),e):n}),Object.keys(n).length===0?null:n}function $E(t,n){return n.map(e=>e(t))}function VF(t){return!t.validate}function WE(t){return t.map(n=>VF(n)?n:e=>n.validate(e))}function GE(t){if(!t)return null;let n=t.filter(HE);return n.length==0?null:function(e){return zE($E(e,n))}}function Ov(t){return t!=null?GE(WE(t)):null}function qE(t){if(!t)return null;let n=t.filter(HE);return n.length==0?null:function(e){let i=$E(e,n).map(UE);return qs(i).pipe(ee(zE))}}function Fv(t){return t!=null?qE(WE(t)):null}function AE(t,n){return t===null?[n]:Array.isArray(t)?[...t,n]:[t,n]}function YE(t){return t._rawValidators}function ZE(t){return t._rawAsyncValidators}function Sv(t){return t?Array.isArray(t)?t:[t]:[]}function Zu(t,n){return Array.isArray(t)?t.includes(n):t===n}function RE(t,n){let e=Sv(n);return Sv(t).forEach(r=>{Zu(e,r)||e.push(r)}),e}function NE(t,n){return Sv(n).filter(e=>!Zu(t,e))}var Qu=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(n){this._rawValidators=n||[],this._composedValidatorFn=Ov(this._rawValidators)}_setAsyncValidators(n){this._rawAsyncValidators=n||[],this._composedAsyncValidatorFn=Fv(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(n){this._onDestroyCallbacks.push(n)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(n=>n()),this._onDestroyCallbacks=[]}reset(n=void 0){this.control?.reset(n)}hasError(n,e){return this.control?this.control.hasError(n,e):!1}getError(n,e){return this.control?this.control.getError(n,e):null}},to=class extends Qu{name;get formDirective(){return null}get path(){return null}},Mi=class extends Qu{_parent=null;name=null;valueAccessor=null},Tv=class{_cd;constructor(n){this._cd=n}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var bs=(()=>{class t extends Tv{constructor(e){super(e)}static \u0275fac=function(i){return new(i||t)(xe(Mi,2))};static \u0275dir=M({type:t,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(i,r){i&2&&z("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},standalone:!1,features:[be]})}return t})();var _l="VALID",Yu="INVALID",ps="PENDING",yl="DISABLED",tr=class{},Ku=class extends tr{value;source;constructor(n,e){super(),this.value=n,this.source=e}},Cl=class extends tr{pristine;source;constructor(n,e){super(),this.pristine=n,this.source=e}},Dl=class extends tr{touched;source;constructor(n,e){super(),this.touched=n,this.source=e}},gs=class extends tr{status;source;constructor(n,e){super(),this.status=n,this.source=e}},Xu=class extends tr{source;constructor(n){super(),this.source=n}},Ju=class extends tr{source;constructor(n){super(),this.source=n}};function QE(t){return(sf(t)?t.validators:t)||null}function HF(t){return Array.isArray(t)?Ov(t):t||null}function KE(t,n){return(sf(n)?n.asyncValidators:t)||null}function UF(t){return Array.isArray(t)?Fv(t):t||null}function sf(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function zF(t,n,e){let i=t.controls;if(!(n?Object.keys(i):i).length)throw new I(1e3,"");if(!i[e])throw new I(1001,"")}function $F(t,n,e){t._forEachChild((i,r)=>{if(e[r]===void 0)throw new I(1002,"")})}var ef=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(n,e){this._assignValidators(n),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(n){this._rawValidators=this._composedValidatorFn=n}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(n){this._rawAsyncValidators=this._composedAsyncValidatorFn=n}get parent(){return this._parent}get status(){return ze(this.statusReactive)}set status(n){ze(()=>this.statusReactive.set(n))}_status=Je(()=>this.statusReactive());statusReactive=F(void 0);get valid(){return this.status===_l}get invalid(){return this.status===Yu}get pending(){return this.status===ps}get disabled(){return this.status===yl}get enabled(){return this.status!==yl}errors;get pristine(){return ze(this.pristineReactive)}set pristine(n){ze(()=>this.pristineReactive.set(n))}_pristine=Je(()=>this.pristineReactive());pristineReactive=F(!0);get dirty(){return!this.pristine}get touched(){return ze(this.touchedReactive)}set touched(n){ze(()=>this.touchedReactive.set(n))}_touched=Je(()=>this.touchedReactive());touchedReactive=F(!1);get untouched(){return!this.touched}_events=new C;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(n){this._assignValidators(n)}setAsyncValidators(n){this._assignAsyncValidators(n)}addValidators(n){this.setValidators(RE(n,this._rawValidators))}addAsyncValidators(n){this.setAsyncValidators(RE(n,this._rawAsyncValidators))}removeValidators(n){this.setValidators(NE(n,this._rawValidators))}removeAsyncValidators(n){this.setAsyncValidators(NE(n,this._rawAsyncValidators))}hasValidator(n){return Zu(this._rawValidators,n)}hasAsyncValidator(n){return Zu(this._rawAsyncValidators,n)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(n={}){let e=this.touched===!1;this.touched=!0;let i=n.sourceControl??this;n.onlySelf||this._parent?.markAsTouched(X(_({},n),{sourceControl:i})),e&&n.emitEvent!==!1&&this._events.next(new Dl(!0,i))}markAllAsDirty(n={}){this.markAsDirty({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(n))}markAllAsTouched(n={}){this.markAsTouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(n))}markAsUntouched(n={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let i=n.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:i})}),n.onlySelf||this._parent?._updateTouched(n,i),e&&n.emitEvent!==!1&&this._events.next(new Dl(!1,i))}markAsDirty(n={}){let e=this.pristine===!0;this.pristine=!1;let i=n.sourceControl??this;n.onlySelf||this._parent?.markAsDirty(X(_({},n),{sourceControl:i})),e&&n.emitEvent!==!1&&this._events.next(new Cl(!1,i))}markAsPristine(n={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let i=n.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:n.emitEvent})}),n.onlySelf||this._parent?._updatePristine(n,i),e&&n.emitEvent!==!1&&this._events.next(new Cl(!0,i))}markAsPending(n={}){this.status=ps;let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new gs(this.status,e)),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.markAsPending(X(_({},n),{sourceControl:e}))}disable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=yl,this.errors=null,this._forEachChild(r=>{r.disable(X(_({},n),{onlySelf:!0}))}),this._updateValue();let i=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new Ku(this.value,i)),this._events.next(new gs(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(X(_({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=_l,this._forEachChild(i=>{i.enable(X(_({},n),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent}),this._updateAncestors(X(_({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(n,e){n.onlySelf||(this._parent?.updateValueAndValidity(n),n.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(n){this._parent=n}getRawValue(){return this.value}updateValueAndValidity(n={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===_l||this.status===ps)&&this._runAsyncValidator(i,n.emitEvent)}let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new Ku(this.value,e)),this._events.next(new gs(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.updateValueAndValidity(X(_({},n),{sourceControl:e}))}_updateTreeValidity(n={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(n)),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?yl:_l}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(n,e){if(this.asyncValidator){this.status=ps,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:n!==!1};let i=UE(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:e,shouldHaveEmitted:n})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let n=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,n}return!1}setErrors(n,e={}){this.errors=n,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(n){let e=n;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((i,r)=>i&&i._find(r),this)}getError(n,e){let i=e?this.get(e):this;return i?.errors?i.errors[n]:null}hasError(n,e){return!!this.getError(n,e)}get root(){let n=this;for(;n._parent;)n=n._parent;return n}_updateControlsErrors(n,e,i){this.status=this._calculateStatus(),n&&this.statusChanges.emit(this.status),(n||i)&&this._events.next(new gs(this.status,e)),this._parent&&this._parent._updateControlsErrors(n,e,i)}_initObservables(){this.valueChanges=new A,this.statusChanges=new A}_calculateStatus(){return this._allControlsDisabled()?yl:this.errors?Yu:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(ps)?ps:this._anyControlsHaveStatus(Yu)?Yu:_l}_anyControlsHaveStatus(n){return this._anyControls(e=>e.status===n)}_anyControlsDirty(){return this._anyControls(n=>n.dirty)}_anyControlsTouched(){return this._anyControls(n=>n.touched)}_updatePristine(n,e){let i=!this._anyControlsDirty(),r=this.pristine!==i;this.pristine=i,n.onlySelf||this._parent?._updatePristine(n,e),r&&this._events.next(new Cl(this.pristine,e))}_updateTouched(n={},e){this.touched=this._anyControlsTouched(),this._events.next(new Dl(this.touched,e)),n.onlySelf||this._parent?._updateTouched(n,e)}_onDisabledChange=[];_registerOnCollectionChange(n){this._onCollectionChange=n}_setUpdateStrategy(n){sf(n)&&n.updateOn!=null&&(this._updateOn=n.updateOn)}_parentMarkedDirty(n){return!n&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(n){return null}_assignValidators(n){this._rawValidators=Array.isArray(n)?n.slice():n,this._composedValidatorFn=HF(this._rawValidators)}_assignAsyncValidators(n){this._rawAsyncValidators=Array.isArray(n)?n.slice():n,this._composedAsyncValidatorFn=UF(this._rawAsyncValidators)}},tf=class extends ef{constructor(n,e,i){super(QE(e),KE(i,e)),this.controls=n,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(n,e){return this.controls[n]?this.controls[n]:(this.controls[n]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(n,e,i={}){this.registerControl(n,e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(n,e={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(n,e,i={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],e&&this.registerControl(n,e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(n){return this.controls.hasOwnProperty(n)&&this.controls[n].enabled}setValue(n,e={}){$F(this,!0,n),Object.keys(n).forEach(i=>{zF(this,!0,i),this.controls[i].setValue(n[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(n,e={}){n!=null&&(Object.keys(n).forEach(i=>{let r=this.controls[i];r&&r.patchValue(n[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(n={},e={}){this._forEachChild((i,r)=>{i.reset(n?n[r]:null,X(_({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new Ju(this))}getRawValue(){return this._reduceChildren({},(n,e,i)=>(n[i]=e.getRawValue(),n))}_syncPendingControls(){let n=this._reduceChildren(!1,(e,i)=>i._syncPendingControls()?!0:e);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){Object.keys(this.controls).forEach(e=>{let i=this.controls[e];i&&n(i,e)})}_setUpControls(){this._forEachChild(n=>{n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(n){for(let[e,i]of Object.entries(this.controls))if(this.contains(e)&&n(i))return!0;return!1}_reduceValue(){let n={};return this._reduceChildren(n,(e,i,r)=>((i.enabled||this.disabled)&&(e[r]=i.value),e))}_reduceChildren(n,e){let i=n;return this._forEachChild((r,o)=>{i=e(i,r,o)}),i}_allControlsDisabled(){for(let n of Object.keys(this.controls))if(this.controls[n].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(n){return this.controls.hasOwnProperty(n)?this.controls[n]:null}};var af=new v("",{factory:()=>Pv}),Pv="always";function WF(t,n){return[...n.path,t]}function nf(t,n,e=Pv){Lv(t,n),n.valueAccessor.writeValue(t.value),(t.disabled||e==="always")&&n.valueAccessor.setDisabledState?.(t.disabled),qF(t,n),ZF(t,n),YF(t,n),GF(t,n)}function OE(t,n,e=!0){let i=()=>{};n?.valueAccessor?.registerOnChange(i),n?.valueAccessor?.registerOnTouched(i),of(t,n),t&&(n._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function rf(t,n){t.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(n)})}function GF(t,n){if(n.valueAccessor.setDisabledState){let e=i=>{n.valueAccessor.setDisabledState(i)};t.registerOnDisabledChange(e),n._registerOnDestroy(()=>{t._unregisterOnDisabledChange(e)})}}function Lv(t,n){let e=YE(t);n.validator!==null?t.setValidators(AE(e,n.validator)):typeof e=="function"&&t.setValidators([e]);let i=ZE(t);n.asyncValidator!==null?t.setAsyncValidators(AE(i,n.asyncValidator)):typeof i=="function"&&t.setAsyncValidators([i]);let r=()=>t.updateValueAndValidity();rf(n._rawValidators,r),rf(n._rawAsyncValidators,r)}function of(t,n){let e=!1;if(t!==null){if(n.validator!==null){let r=YE(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(s=>s!==n.validator);o.length!==r.length&&(e=!0,t.setValidators(o))}}if(n.asyncValidator!==null){let r=ZE(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(s=>s!==n.asyncValidator);o.length!==r.length&&(e=!0,t.setAsyncValidators(o))}}}let i=()=>{};return rf(n._rawValidators,i),rf(n._rawAsyncValidators,i),e}function qF(t,n){n.valueAccessor.registerOnChange(e=>{t._pendingValue=e,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&XE(t,n)})}function YF(t,n){n.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&XE(t,n),t.updateOn!=="submit"&&t.markAsTouched()})}function XE(t,n){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),n.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function ZF(t,n){let e=(i,r)=>{n.valueAccessor.writeValue(i),r&&n.viewToModelUpdate(i)};t.registerOnChange(e),n._registerOnDestroy(()=>{t._unregisterOnChange(e)})}function JE(t,n){t==null,Lv(t,n)}function QF(t,n){return of(t,n)}function KF(t,n){if(!t.hasOwnProperty("model"))return!1;let e=t.model;return e.isFirstChange()?!0:!Object.is(n,e.currentValue)}function XF(t){return Object.getPrototypeOf(t.constructor)===MF}function ex(t,n){t._syncPendingControls(),n.forEach(e=>{let i=e.control;i.updateOn==="submit"&&i._pendingChange&&(e.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function JF(t,n){if(!n)return null;Array.isArray(n);let e,i,r;return n.forEach(o=>{o.constructor===nr?e=o:XF(o)?i=o:r=o}),r||i||e||null}function eP(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}var tP={provide:to,useExisting:gn(()=>El)},wl=Promise.resolve(),El=(()=>{class t extends to{callSetDisabledState;get submitted(){return ze(this.submittedReactive)}_submitted=Je(()=>this.submittedReactive());submittedReactive=F(!1);_directives=new Set;form;ngSubmit=new A;options;constructor(e,i,r){super(),this.callSetDisabledState=r,this.form=new tf({},Ov(e),Fv(i))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){wl.then(()=>{let i=this._findContainer(e.path);e.control=i.registerControl(e.name,e.control),nf(e.control,e,this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){wl.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){wl.then(()=>{let i=this._findContainer(e.path),r=new tf({});JE(r,e),i.registerControl(e.name,r),r.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){wl.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,i){wl.then(()=>{this.form.get(e.path).setValue(i)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),ex(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new Xu(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static \u0275fac=function(i){return new(i||t)(xe(Rv,10),xe(Nv,10),xe(af,8))};static \u0275dir=M({type:t,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(i,r){i&1&&N("submit",function(s){return r.onSubmit(s)})("reset",function(){return r.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[Re([tP]),be]})}return t})();function FE(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}function PE(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var tx=class extends ef{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(n=null,e,i){super(QE(e),KE(i,e)),this._applyFormState(n),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),sf(e)&&(e.nonNullable||e.initialValueIsDefault)&&(PE(n)?this.defaultValue=n.value:this.defaultValue=n)}setValue(n,e={}){this.value=this._pendingValue=n,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(n,e={}){this.setValue(n,e)}reset(n=this.defaultValue,e={}){this._applyFormState(n),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new Ju(this))}_updateValue(){}_anyControls(n){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(n){this._onChange.push(n)}_unregisterOnChange(n){FE(this._onChange,n)}registerOnDisabledChange(n){this._onDisabledChange.push(n)}_unregisterOnDisabledChange(n){FE(this._onDisabledChange,n)}_forEachChild(n){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(n){PE(n)?(this.value=this._pendingValue=n.value,n.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=n}};var nP=t=>t instanceof tx;var iP={provide:Mi,useExisting:gn(()=>no)},LE=Promise.resolve(),no=(()=>{class t extends Mi{_changeDetectorRef;callSetDisabledState;control=new tx;static ngAcceptInputType_isDisabled;_registered=!1;viewModel;name="";isDisabled;model;options;update=new A;constructor(e,i,r,o,s,a){super(),this._changeDetectorRef=s,this.callSetDisabledState=a,this._parent=e,this._setValidators(i),this._setAsyncValidators(r),this.valueAccessor=JF(this,o)}ngOnChanges(e){if(this._checkForErrors(),!this._registered||"name"in e){if(this._registered&&(this._checkName(),this.formDirective)){let i=e.name.previousValue;this.formDirective.removeControl({name:i,path:this._getPath(i)})}this._setUpControl()}"isDisabled"in e&&this._updateDisabled(e),KF(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective?.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){nf(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._checkName()}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(e){LE.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(e){let i=e.isDisabled.currentValue,r=i!==0&&K(i);LE.then(()=>{r&&!this.control.disabled?this.control.disable():!r&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(e){return this._parent?WF(e,this._parent):[e]}static \u0275fac=function(i){return new(i||t)(xe(to,9),xe(Rv,10),xe(Nv,10),xe(BE,10),xe(Oe,8),xe(af,8))};static \u0275dir=M({type:t,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[Re([iP]),be,He]})}return t})();var rP=(()=>{class t extends to{callSetDisabledState;get submitted(){return ze(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=Je(()=>this._submittedReactive());_submittedReactive=F(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,i,r){super(),this.callSetDisabledState=r,this._setValidators(e),this._setAsyncValidators(i)}ngOnChanges(e){this.onChanges(e)}ngOnDestroy(){this.onDestroy()}onChanges(e){this._checkFormPresent(),e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(of(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(e){let i=this.form.get(e.path);return nf(i,e,this.callSetDisabledState),i.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),i}getControl(e){return this.form.get(e.path)}removeControl(e){OE(e.control||null,e,!1),eP(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}updateModel(e,i){this.form.get(e.path).setValue(i)}onReset(){this.resetForm()}resetForm(e=void 0,i={}){this.form.reset(e,i),this._submittedReactive.set(!1)}onSubmit(e){return this.submitted=!0,ex(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new Xu(this.control)),e?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(e=>{let i=e.control,r=this.form.get(e.path);i!==r&&(OE(i||null,e),nP(r)&&(nf(r,e,this.callSetDisabledState),e.control=r))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let i=this.form.get(e.path);JE(i,e),i.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){let i=this.form?.get(e.path);i&&QF(i,e)&&i.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){Lv(this.form,this),this._oldForm&&of(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(i){return new(i||t)(xe(Rv,10),xe(Nv,10),xe(af,8))};static \u0275dir=M({type:t,features:[be,He]})}return t})();var oP={provide:to,useExisting:gn(()=>xl)},xl=(()=>{class t extends rP{form=null;ngSubmit=new A;get control(){return this.form}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ge(t)))(r||t)}})();static \u0275dir=M({type:t,selectors:[["","formGroup",""]],hostBindings:function(i,r){i&1&&N("submit",function(s){return r.onSubmit(s)})("reset",function(){return r.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[Re([oP]),be]})}return t})();var sP=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=U({type:t});static \u0275inj=H({})}return t})();var _s=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:af,useValue:e.callSetDisabledState??Pv}]}}static \u0275fac=function(i){return new(i||t)};static \u0275mod=U({type:t});static \u0275inj=H({imports:[sP]})}return t})();var nx=new v("MAT_INPUT_VALUE_ACCESSOR");var lf=(()=>{class t{isErrorState(e,i){return!!(e&&e.invalid&&(e.touched||i&&i.submitted))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var ys=class{_defaultMatcher;ngControl;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;constructor(n,e,i,r,o){this._defaultMatcher=n,this.ngControl=e,this._parentFormGroup=i,this._parentForm=r,this._stateChanges=o}updateErrorState(){let n=this.errorState,e=this._parentFormGroup||this._parentForm,i=this.matcher||this._defaultMatcher,r=this.ngControl?this.ngControl.control:null,o=i?.isErrorState(r,e)??!1;o!==n&&(this.errorState=o,this._stateChanges.next())}};var aP=["button","checkbox","file","hidden","image","radio","range","reset","submit"],lP=new v("MAT_INPUT_CONFIG"),ir=(()=>{class t{_elementRef=d(R);_platform=d(fe);ngControl=d(Mi,{optional:!0,self:!0});_autofillMonitor=d(TE);_ngZone=d(k);_formField=d(bl,{optional:!0});_renderer=d(ke);_uid=d(rt).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=d(lP,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new C;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=ft(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(vs.required)??!1}set required(e){this._required=ft(e)}_required;get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&pv().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=ft(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(e=>pv().has(e));constructor(){let e=d(El,{optional:!0}),i=d(xl,{optional:!0}),r=d(lf),o=d(nx,{optional:!0,self:!0}),s=this._elementRef.nativeElement,a=s.nodeName.toLowerCase();o?Gn(o.value)?this._signalBasedValueAccessor=o:this._inputValueAccessor=o:this._inputValueAccessor=s,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(s,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new ys(r,this.ngControl,i,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=a==="select",this._isTextarea=a==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=s.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&Yt(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let i=this._elementRef.nativeElement;i.type==="number"?(i.type="text",i.setSelectionRange(0,0),i.type="number"):i.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let i=this._elementRef.nativeElement;this._previousPlaceholder=e,e?i.setAttribute("placeholder",e):i.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){aP.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,i=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&i&&i.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let i=this._elementRef.nativeElement;e.length?i.setAttribute("aria-describedby",e.join(" ")):i.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let i=e.target;!i.value&&i.selectionStart===0&&i.selectionEnd===0&&(i.setSelectionRange(1,1),i.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(i){return new(i||t)};static \u0275dir=M({type:t,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(i,r){i&1&&N("focus",function(){return r._focusChanged(!0)})("blur",function(){return r._focusChanged(!1)})("input",function(){return r._onInput()}),i&2&&(_i("id",r.id)("disabled",r.disabled&&!r.disabledInteractive)("required",r.required),ue("name",r.name||null)("readonly",r._getReadonlyAttribute())("aria-disabled",r.disabled&&r.disabledInteractive?"true":null)("aria-invalid",r.empty&&r.required?null:r.errorState)("aria-required",r.required)("id",r.id),z("mat-input-server",r._isServer)("mat-mdc-form-field-textarea-control",r._isInFormField&&r._isTextarea)("mat-mdc-form-field-input-control",r._isInFormField)("mat-mdc-input-disabled-interactive",r.disabledInteractive)("mdc-text-field__input",r._isInFormField)("mat-mdc-native-select-inline",r._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",K]},exportAs:["matInput"],features:[Re([{provide:vl,useExisting:t}]),He]})}return t})(),ws=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=U({type:t});static \u0275inj=H({imports:[en,en,kE,he]})}return t})();var Il=class{_attachedHost=null;attach(n){return this._attachedHost=n,n.attach(this)}detach(){let n=this._attachedHost;n!=null&&(this._attachedHost=null,n.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(n){this._attachedHost=n}},rr=class extends Il{component;viewContainerRef;injector;projectableNodes;bindings;constructor(n,e,i,r,o){super(),this.component=n,this.viewContainerRef=e,this.injector=i,this.projectableNodes=r,this.bindings=o||null}},ii=class extends Il{templateRef;viewContainerRef;context;injector;constructor(n,e,i,r){super(),this.templateRef=n,this.viewContainerRef=e,this.context=i,this.injector=r}get origin(){return this.templateRef.elementRef}attach(n,e=this.context){return this.context=e,super.attach(n)}detach(){return this.context=void 0,super.detach()}},Vv=class extends Il{element;constructor(n){super(),this.element=n instanceof R?n.nativeElement:n}},Cs=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(n){if(n instanceof rr)return this._attachedPortal=n,this.attachComponentPortal(n);if(n instanceof ii)return this._attachedPortal=n,this.attachTemplatePortal(n);if(this.attachDomPortal&&n instanceof Vv)return this._attachedPortal=n,this.attachDomPortal(n)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(n){this._disposeFn=n}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}},cf=class extends Cs{outletElement;_appRef;_defaultInjector;constructor(n,e,i){super(),this.outletElement=n,this._appRef=e,this._defaultInjector=i}attachComponentPortal(n){let e;if(n.viewContainerRef){let i=n.injector||n.viewContainerRef.injector,r=i.get($n,null,{optional:!0})||void 0;e=n.viewContainerRef.createComponent(n.component,{index:n.viewContainerRef.length,injector:i,ngModuleRef:r,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0}),this.setDisposeFn(()=>e.destroy())}else{let i=this._appRef,r=n.injector||this._defaultInjector||W.NULL,o=r.get(we,i.injector);e=zd(n.component,{elementInjector:r,environmentInjector:o,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0}),i.attachView(e.hostView),this.setDisposeFn(()=>{i.viewCount>0&&i.detachView(e.hostView),e.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=n,e}attachTemplatePortal(n){let e=n.viewContainerRef,i=e.createEmbeddedView(n.templateRef,n.context,{injector:n.injector});return i.rootNodes.forEach(r=>this.outletElement.appendChild(r)),i.detectChanges(),this.setDisposeFn(()=>{let r=e.indexOf(i);r!==-1&&e.remove(r)}),this._attachedPortal=n,i}attachDomPortal=n=>{let e=n.element;e.parentNode;let i=this.outletElement.ownerDocument.createComment("dom-portal");e.parentNode.insertBefore(i,e),this.outletElement.appendChild(e),this._attachedPortal=n,super.setDisposeFn(()=>{i.parentNode&&i.parentNode.replaceChild(e,i)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(n){return n.hostView.rootNodes[0]}},ix=(()=>{class t extends ii{constructor(){let e=d(gt),i=d(lt);super(e,i)}static \u0275fac=function(i){return new(i||t)};static \u0275dir=M({type:t,selectors:[["","cdkPortal",""]],exportAs:["cdkPortal"],features:[be]})}return t})(),Ds=(()=>{class t extends Cs{_moduleRef=d($n,{optional:!0});_document=d(V);_viewContainerRef=d(lt);_isInitialized=!1;_attachedRef=null;constructor(){super()}get portal(){return this._attachedPortal}set portal(e){this.hasAttached()&&!e&&!this._isInitialized||(this.hasAttached()&&super.detach(),e&&super.attach(e),this._attachedPortal=e||null)}attached=new A;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(e){e.setAttachedHost(this);let i=e.viewContainerRef!=null?e.viewContainerRef:this._viewContainerRef,r=i.createComponent(e.component,{index:i.length,injector:e.injector||i.injector,projectableNodes:e.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:e.bindings||void 0});return i!==this._viewContainerRef&&this._getRootNode().appendChild(r.hostView.rootNodes[0]),super.setDisposeFn(()=>r.destroy()),this._attachedPortal=e,this._attachedRef=r,this.attached.emit(r),r}attachTemplatePortal(e){e.setAttachedHost(this);let i=this._viewContainerRef.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=e,this._attachedRef=i,this.attached.emit(i),i}attachDomPortal=e=>{let i=e.element;i.parentNode;let r=this._document.createComment("dom-portal");e.setAttachedHost(this),i.parentNode.insertBefore(r,i),this._getRootNode().appendChild(i),this._attachedPortal=e,super.setDisposeFn(()=>{r.parentNode&&r.parentNode.replaceChild(i,r)})};_getRootNode(){let e=this._viewContainerRef.element.nativeElement;return e.nodeType===e.ELEMENT_NODE?e:e.parentNode}static \u0275fac=function(i){return new(i||t)};static \u0275dir=M({type:t,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:[0,"cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[be]})}return t})(),Hv=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=U({type:t});static \u0275inj=H({})}return t})();var cP=20,or=(()=>{class t{_ngZone=d(k);_platform=d(fe);_renderer=d(Ke).createRenderer(null,null);_cleanupGlobalListener;constructor(){}_scrolled=new C;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let i=this.scrollContainers.get(e);i&&(i.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=cP){return this._platform.isBrowser?new J(i=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let r=e>0?this._scrolled.pipe(fc(e)).subscribe(i):this._scrolled.subscribe(i);return this._scrolledCount++,()=>{r.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):B()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,i)=>this.deregister(i)),this._scrolled.complete()}ancestorScrolled(e,i){let r=this.getAncestorScrollContainers(e);return this.scrolled(i).pipe(ge(o=>!o||r.indexOf(o)>-1))}getAncestorScrollContainers(e){let i=[];return this.scrollContainers.forEach((r,o)=>{this._scrollableContainsElement(o,e)&&i.push(o)}),i}_scrollableContainsElement(e,i){let r=Pt(i),o=e.getElementRef().nativeElement;do if(r==o)return!0;while(r=r.parentElement);return!1}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),df=(()=>{class t{elementRef=d(R);scrollDispatcher=d(or);ngZone=d(k);dir=d(Mt,{optional:!0});_scrollElement=this.elementRef.nativeElement;_destroyed=new C;_renderer=d(ke);_cleanupScroll;_elementScrolled=new C;constructor(){}ngOnInit(){this._cleanupScroll=this.ngZone.runOutsideAngular(()=>this._renderer.listen(this._scrollElement,"scroll",e=>this._elementScrolled.next(e))),this.scrollDispatcher.register(this)}ngOnDestroy(){this._cleanupScroll?.(),this._elementScrolled.complete(),this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(e){let i=this.elementRef.nativeElement,r=this.dir&&this.dir.value=="rtl";e.left==null&&(e.left=r?e.end:e.start),e.right==null&&(e.right=r?e.start:e.end),e.bottom!=null&&(e.top=i.scrollHeight-i.clientHeight-e.bottom),r&&ls()!=Tn.NORMAL?(e.left!=null&&(e.right=i.scrollWidth-i.clientWidth-e.left),ls()==Tn.INVERTED?e.left=e.right:ls()==Tn.NEGATED&&(e.left=e.right?-e.right:e.right)):e.right!=null&&(e.left=i.scrollWidth-i.clientWidth-e.right),this._applyScrollToOptions(e)}_applyScrollToOptions(e){let i=this.elementRef.nativeElement;zu()?i.scrollTo(e):(e.top!=null&&(i.scrollTop=e.top),e.left!=null&&(i.scrollLeft=e.left))}measureScrollOffset(e){let i="left",r="right",o=this.elementRef.nativeElement;if(e=="top")return o.scrollTop;if(e=="bottom")return o.scrollHeight-o.clientHeight-o.scrollTop;let s=this.dir&&this.dir.value=="rtl";return e=="start"?e=s?r:i:e=="end"&&(e=s?i:r),s&&ls()==Tn.INVERTED?e==i?o.scrollWidth-o.clientWidth-o.scrollLeft:o.scrollLeft:s&&ls()==Tn.NEGATED?e==i?o.scrollLeft+o.scrollWidth-o.clientWidth:-o.scrollLeft:e==i?o.scrollLeft:o.scrollWidth-o.clientWidth-o.scrollLeft}static \u0275fac=function(i){return new(i||t)};static \u0275dir=M({type:t,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]]})}return t})(),dP=20,kn=(()=>{class t{_platform=d(fe);_listeners;_viewportSize=null;_change=new C;_document=d(V);constructor(){let e=d(k),i=d(Ke).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let r=o=>this._change.next(o);this._listeners=[i.listen("window","resize",r),i.listen("window","orientationchange",r)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:i,height:r}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+r,right:e.left+i,height:r,width:i}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,i=this._getWindow(),r=e.documentElement,o=r.getBoundingClientRect(),s=-o.top||e.body?.scrollTop||i.scrollY||r.scrollTop||0,a=-o.left||e.body?.scrollLeft||i.scrollX||r.scrollLeft||0;return{top:s,left:a}}change(e=dP){return e>0?this._change.pipe(fc(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var ri=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=U({type:t});static \u0275inj=H({})}return t})(),Uv=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=U({type:t});static \u0275inj=H({imports:[he,ri,he,ri]})}return t})();var qv=["*"];function uP(t,n){t&1&&Q(0)}var fP=["tabListContainer"],mP=["tabList"],hP=["tabListInner"],pP=["nextPaginator"],gP=["previousPaginator"],vP=["content"];function bP(t,n){}var _P=["tabBodyWrapper"],yP=["tabHeader"];function wP(t,n){}function CP(t,n){if(t&1&&Bt(0,wP,0,0,"ng-template",12),t&2){let e=q().$implicit;Z("cdkPortalOutlet",e.templateLabel)}}function DP(t,n){if(t&1&&D(0),t&2){let e=q().$implicit;De(e.textLabel)}}function EP(t,n){if(t&1){let e=bt();p(0,"div",7,2),N("click",function(){let r=Be(e),o=r.$implicit,s=r.$index,a=q(),l=cn(1);return Ve(a._handleClick(o,l,s))})("cdkFocusChange",function(r){let o=Be(e).$index,s=q();return Ve(s._tabFocusChanged(r,o))}),ne(2,"span",8)(3,"div",9),p(4,"span",10)(5,"span",11),oe(6,CP,1,1,null,12)(7,DP,1,1),g()()()}if(t&2){let e=n.$implicit,i=n.$index,r=cn(1),o=q();Ot(e.labelClass),z("mdc-tab--active",o.selectedIndex===i),Z("id",o._getTabLabelId(e,i))("disabled",e.disabled)("fitInkBarToContent",o.fitInkBarToContent),ue("tabIndex",o._getTabIndex(i))("aria-posinset",i+1)("aria-setsize",o._tabs.length)("aria-controls",o._getTabContentId(i))("aria-selected",o.selectedIndex===i)("aria-label",e.ariaLabel||null)("aria-labelledby",!e.ariaLabel&&e.ariaLabelledby?e.ariaLabelledby:null),w(3),Z("matRippleTrigger",r)("matRippleDisabled",e.disabled||o.disableRipple),w(3),se(e.templateLabel?6:7)}}function xP(t,n){t&1&&Q(0)}function IP(t,n){if(t&1){let e=bt();p(0,"mat-tab-body",13),N("_onCentered",function(){Be(e);let r=q();return Ve(r._removeTabBodyWrapperHeight())})("_onCentering",function(r){Be(e);let o=q();return Ve(o._setTabBodyWrapperHeight(r))})("_beforeCentering",function(r){Be(e);let o=q();return Ve(o._bodyCentered(r))}),g()}if(t&2){let e=n.$implicit,i=n.$index,r=q();Ot(e.bodyClass),Z("id",r._getTabContentId(i))("content",e.content)("position",e.position)("animationDuration",r.animationDuration)("preserveContent",r.preserveContent),ue("tabindex",r.contentTabIndex!=null&&r.selectedIndex===i?r.contentTabIndex:null)("aria-labelledby",r._getTabLabelId(e,i))("aria-hidden",r.selectedIndex!==i)}}var MP=new v("MatTabContent"),SP=(()=>{class t{template=d(gt);constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275dir=M({type:t,selectors:[["","matTabContent",""]],features:[Re([{provide:MP,useExisting:t}])]})}return t})(),TP=new v("MatTabLabel"),ax=new v("MAT_TAB"),kP=(()=>{class t extends ix{_closestTab=d(ax,{optional:!0});static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ge(t)))(r||t)}})();static \u0275dir=M({type:t,selectors:[["","mat-tab-label",""],["","matTabLabel",""]],features:[Re([{provide:TP,useExisting:t}]),be]})}return t})(),lx=new v("MAT_TAB_GROUP"),Ml=(()=>{class t{_viewContainerRef=d(lt);_closestTabGroup=d(lx,{optional:!0});disabled=!1;get templateLabel(){return this._templateLabel}set templateLabel(e){this._setTemplateLabelInput(e)}_templateLabel;_explicitContent=void 0;_implicitContent;textLabel="";ariaLabel;ariaLabelledby;labelClass;bodyClass;id=null;_contentPortal=null;get content(){return this._contentPortal}_stateChanges=new C;position=null;origin=null;isActive=!1;constructor(){d(ut).load(er)}ngOnChanges(e){(e.hasOwnProperty("textLabel")||e.hasOwnProperty("disabled"))&&this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}ngOnInit(){this._contentPortal=new ii(this._explicitContent||this._implicitContent,this._viewContainerRef)}_setTemplateLabelInput(e){e&&e._closestTab===this&&(this._templateLabel=e)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=E({type:t,selectors:[["mat-tab"]],contentQueries:function(i,r,o){if(i&1&&_t(o,kP,5)(o,SP,7,gt),i&2){let s;L(s=j())&&(r.templateLabel=s.first),L(s=j())&&(r._explicitContent=s.first)}},viewQuery:function(i,r){if(i&1&&Ue(gt,7),i&2){let o;L(o=j())&&(r._implicitContent=o.first)}},hostAttrs:["hidden",""],hostVars:1,hostBindings:function(i,r){i&2&&ue("id",null)},inputs:{disabled:[2,"disabled","disabled",K],textLabel:[0,"label","textLabel"],ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],labelClass:"labelClass",bodyClass:"bodyClass",id:"id"},exportAs:["matTab"],features:[Re([{provide:ax,useExisting:t}]),He],ngContentSelectors:qv,decls:1,vars:0,template:function(i,r){i&1&&(Ie(),kd(0,uP,1,0,"ng-template"))},encapsulation:2})}return t})(),zv="mdc-tab-indicator--active",rx="mdc-tab-indicator--no-transition",$v=class{_items;_currentItem;constructor(n){this._items=n}hide(){this._items.forEach(n=>n.deactivateInkBar()),this._currentItem=void 0}alignToElement(n){let e=this._items.find(r=>r.elementRef.nativeElement===n),i=this._currentItem;if(e!==i&&(i?.deactivateInkBar(),e)){let r=i?.elementRef.nativeElement.getBoundingClientRect?.();e.activateInkBar(r),this._currentItem=e}}},AP=(()=>{class t{_elementRef=d(R);_inkBarElement=null;_inkBarContentElement=null;_fitToContent=!1;get fitInkBarToContent(){return this._fitToContent}set fitInkBarToContent(e){this._fitToContent!==e&&(this._fitToContent=e,this._inkBarElement&&this._appendInkBarElement())}activateInkBar(e){let i=this._elementRef.nativeElement;if(!e||!i.getBoundingClientRect||!this._inkBarContentElement){i.classList.add(zv);return}let r=i.getBoundingClientRect(),o=e.width/r.width,s=e.left-r.left;i.classList.add(rx),this._inkBarContentElement.style.setProperty("transform",`translateX(${s}px) scaleX(${o})`),i.getBoundingClientRect(),i.classList.remove(rx),i.classList.add(zv),this._inkBarContentElement.style.setProperty("transform","")}deactivateInkBar(){this._elementRef.nativeElement.classList.remove(zv)}ngOnInit(){this._createInkBarElement()}ngOnDestroy(){this._inkBarElement?.remove(),this._inkBarElement=this._inkBarContentElement=null}_createInkBarElement(){let e=this._elementRef.nativeElement.ownerDocument||document,i=this._inkBarElement=e.createElement("span"),r=this._inkBarContentElement=e.createElement("span");i.className="mdc-tab-indicator",r.className="mdc-tab-indicator__content mdc-tab-indicator__content--underline",i.appendChild(this._inkBarContentElement),this._appendInkBarElement()}_appendInkBarElement(){this._inkBarElement;let e=this._fitToContent?this._elementRef.nativeElement.querySelector(".mdc-tab__content"):this._elementRef.nativeElement;e.appendChild(this._inkBarElement)}static \u0275fac=function(i){return new(i||t)};static \u0275dir=M({type:t,inputs:{fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",K]}})}return t})();var cx=(()=>{class t extends AP{elementRef=d(R);disabled=!1;focus(){this.elementRef.nativeElement.focus()}getOffsetLeft(){return this.elementRef.nativeElement.offsetLeft}getOffsetWidth(){return this.elementRef.nativeElement.offsetWidth}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ge(t)))(r||t)}})();static \u0275dir=M({type:t,selectors:[["","matTabLabelWrapper",""]],hostVars:3,hostBindings:function(i,r){i&2&&(ue("aria-disabled",!!r.disabled),z("mat-mdc-tab-disabled",r.disabled))},inputs:{disabled:[2,"disabled","disabled",K]},features:[be]})}return t})(),ox={passive:!0},RP=650,NP=100,OP=(()=>{class t{_elementRef=d(R);_changeDetectorRef=d(Oe);_viewportRuler=d(kn);_dir=d(Mt,{optional:!0});_ngZone=d(k);_platform=d(fe);_sharedResizeObserver=d(Wu);_injector=d(W);_renderer=d(ke);_animationsDisabled=Fe();_eventCleanups;_scrollDistance=0;_selectedIndexChanged=!1;_destroyed=new C;_showPaginationControls=!1;_disableScrollAfter=!0;_disableScrollBefore=!0;_tabLabelCount;_scrollDistanceChanged=!1;_keyManager;_currentTextContent;_stopScrolling=new C;disablePagination=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){let i=isNaN(e)?0:e;this._selectedIndex!=i&&(this._selectedIndexChanged=!0,this._selectedIndex=i,this._keyManager&&this._keyManager.updateActiveItem(i))}_selectedIndex=0;selectFocusedIndex=new A;indexFocused=new A;constructor(){this._eventCleanups=this._ngZone.runOutsideAngular(()=>[this._renderer.listen(this._elementRef.nativeElement,"mouseleave",()=>this._stopInterval())])}ngAfterViewInit(){this._eventCleanups.push(this._renderer.listen(this._previousPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("before"),ox),this._renderer.listen(this._nextPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("after"),ox))}ngAfterContentInit(){let e=this._dir?this._dir.change:B("ltr"),i=this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe(ai(32),me(this._destroyed)),r=this._viewportRuler.change(150).pipe(me(this._destroyed)),o=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new ml(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(()=>!1),this._keyManager.updateActiveItem(Math.max(this._selectedIndex,0)),Xe(o,{injector:this._injector}),$t(e,r,i,this._items.changes,this._itemsResized()).pipe(me(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>{Promise.resolve().then(()=>{this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),this._scrollDistance)),o()})}),this._keyManager?.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.subscribe(s=>{this.indexFocused.emit(s),this._setTabFocus(s)})}_itemsResized(){return typeof ResizeObserver!="function"?Pe:this._items.changes.pipe(kt(this._items),Qe(e=>new J(i=>this._ngZone.runOutsideAngular(()=>{let r=new ResizeObserver(o=>i.next(o));return e.forEach(o=>r.observe(o.elementRef.nativeElement)),()=>{r.disconnect()}}))),yr(1),ge(e=>e.some(i=>i.contentRect.width>0&&i.contentRect.height>0)))}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._keyManager?.destroy(),this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(e){if(!Ut(e))switch(e.keyCode){case 13:case 32:if(this.focusIndex!==this.selectedIndex){let i=this._items.get(this.focusIndex);i&&!i.disabled&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(e))}break;default:this._keyManager?.onKeydown(e)}}_onContentChanges(){let e=this._elementRef.nativeElement.textContent;e!==this._currentTextContent&&(this._currentTextContent=e||"",this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(e){!this._isValidIndex(e)||this.focusIndex===e||!this._keyManager||this._keyManager.setActiveItem(e)}_isValidIndex(e){return this._items?!!this._items.toArray()[e]:!0}_setTabFocus(e){if(this._showPaginationControls&&this._scrollToLabel(e),this._items&&this._items.length){this._items.toArray()[e].focus();let i=this._tabListContainer.nativeElement;this._getLayoutDirection()=="ltr"?i.scrollLeft=0:i.scrollLeft=i.scrollWidth-i.offsetWidth}}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_updateTabScrollPosition(){if(this.disablePagination)return;let e=this.scrollDistance,i=this._getLayoutDirection()==="ltr"?-e:e;this._tabList.nativeElement.style.transform=`translateX(${Math.round(i)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(e){this._scrollTo(e)}_scrollHeader(e){let i=this._tabListContainer.nativeElement.offsetWidth,r=(e=="before"?-1:1)*i/3;return this._scrollTo(this._scrollDistance+r)}_handlePaginatorClick(e){this._stopInterval(),this._scrollHeader(e)}_scrollToLabel(e){if(this.disablePagination)return;let i=this._items?this._items.toArray()[e]:null;if(!i)return;let r=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:o,offsetWidth:s}=i.elementRef.nativeElement,a,l;this._getLayoutDirection()=="ltr"?(a=o,l=a+s):(l=this._tabListInner.nativeElement.offsetWidth-o,a=l-s);let c=this.scrollDistance,u=this.scrollDistance+r;a<c?this.scrollDistance-=c-a:l>u&&(this.scrollDistance+=Math.min(l-u,a-c))}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{let e=this._tabListInner.nativeElement.scrollWidth,i=this._elementRef.nativeElement.offsetWidth,r=e-i>=5;r||(this.scrollDistance=0),r!==this._showPaginationControls&&(this._showPaginationControls=r,this._changeDetectorRef.markForCheck())}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=this.scrollDistance==0,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){let e=this._tabListInner.nativeElement.scrollWidth,i=this._tabListContainer.nativeElement.offsetWidth;return e-i||0}_alignInkBarToSelectedTab(){let e=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,i=e?e.elementRef.nativeElement:null;i?this._inkBar.alignToElement(i):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(e,i){i&&i.button!=null&&i.button!==0||(this._stopInterval(),Ys(RP,NP).pipe(me($t(this._stopScrolling,this._destroyed))).subscribe(()=>{let{maxScrollDistance:r,distance:o}=this._scrollHeader(e);(o===0||o>=r)&&this._stopInterval()}))}_scrollTo(e){if(this.disablePagination)return{maxScrollDistance:0,distance:0};let i=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(i,e)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:i,distance:this._scrollDistance}}static \u0275fac=function(i){return new(i||t)};static \u0275dir=M({type:t,inputs:{disablePagination:[2,"disablePagination","disablePagination",K],selectedIndex:[2,"selectedIndex","selectedIndex",Qn]},outputs:{selectFocusedIndex:"selectFocusedIndex",indexFocused:"indexFocused"}})}return t})(),FP=(()=>{class t extends OP{_items;_tabListContainer;_tabList;_tabListInner;_nextPaginator;_previousPaginator;_inkBar;ariaLabel;ariaLabelledby;disableRipple=!1;ngAfterContentInit(){this._inkBar=new $v(this._items),super.ngAfterContentInit()}_itemSelected(e){e.preventDefault()}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ge(t)))(r||t)}})();static \u0275cmp=E({type:t,selectors:[["mat-tab-header"]],contentQueries:function(i,r,o){if(i&1&&_t(o,cx,4),i&2){let s;L(s=j())&&(r._items=s)}},viewQuery:function(i,r){if(i&1&&Ue(fP,7)(mP,7)(hP,7)(pP,5)(gP,5),i&2){let o;L(o=j())&&(r._tabListContainer=o.first),L(o=j())&&(r._tabList=o.first),L(o=j())&&(r._tabListInner=o.first),L(o=j())&&(r._nextPaginator=o.first),L(o=j())&&(r._previousPaginator=o.first)}},hostAttrs:[1,"mat-mdc-tab-header"],hostVars:4,hostBindings:function(i,r){i&2&&z("mat-mdc-tab-header-pagination-controls-enabled",r._showPaginationControls)("mat-mdc-tab-header-rtl",r._getLayoutDirection()=="rtl")},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],disableRipple:[2,"disableRipple","disableRipple",K]},features:[be],ngContentSelectors:qv,decls:13,vars:10,consts:[["previousPaginator",""],["tabListContainer",""],["tabList",""],["tabListInner",""],["nextPaginator",""],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-before",3,"click","mousedown","touchend","matRippleDisabled"],[1,"mat-mdc-tab-header-pagination-chevron"],[1,"mat-mdc-tab-label-container",3,"keydown"],["role","tablist",1,"mat-mdc-tab-list",3,"cdkObserveContent"],[1,"mat-mdc-tab-labels"],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-after",3,"mousedown","click","touchend","matRippleDisabled"]],template:function(i,r){i&1&&(Ie(),p(0,"div",5,0),N("click",function(){return r._handlePaginatorClick("before")})("mousedown",function(s){return r._handlePaginatorPress("before",s)})("touchend",function(){return r._stopInterval()}),ne(2,"div",6),g(),p(3,"div",7,1),N("keydown",function(s){return r._handleKeydown(s)}),p(5,"div",8,2),N("cdkObserveContent",function(){return r._onContentChanges()}),p(7,"div",9,3),Q(9),g()()(),p(10,"div",10,4),N("mousedown",function(s){return r._handlePaginatorPress("after",s)})("click",function(){return r._handlePaginatorClick("after")})("touchend",function(){return r._stopInterval()}),ne(12,"div",6),g()),i&2&&(z("mat-mdc-tab-header-pagination-disabled",r._disableScrollBefore),Z("matRippleDisabled",r._disableScrollBefore||r.disableRipple),w(3),z("_mat-animation-noopable",r._animationsDisabled),w(2),ue("aria-label",r.ariaLabel||null)("aria-labelledby",r.ariaLabelledby||null),w(5),z("mat-mdc-tab-header-pagination-disabled",r._disableScrollAfter),Z("matRippleDisabled",r._disableScrollAfter||r.disableRipple))},dependencies:[pl,Lu],styles:[`.mat-mdc-tab-header {
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
`],encapsulation:2})}return t})(),PP=new v("MAT_TABS_CONFIG"),sx=(()=>{class t extends Ds{_host=d(Wv);_ngZone=d(k);_centeringSub=ae.EMPTY;_leavingSub=ae.EMPTY;constructor(){super()}ngOnInit(){super.ngOnInit(),this._centeringSub=this._host._beforeCentering.pipe(kt(this._host._isCenterPosition())).subscribe(e=>{this._host._content&&e&&!this.hasAttached()&&this._ngZone.run(()=>{Promise.resolve().then(),this.attach(this._host._content)})}),this._leavingSub=this._host._afterLeavingCenter.subscribe(()=>{this._host.preserveContent||this._ngZone.run(()=>this.detach())})}ngOnDestroy(){super.ngOnDestroy(),this._centeringSub.unsubscribe(),this._leavingSub.unsubscribe()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=M({type:t,selectors:[["","matTabBodyHost",""]],features:[be]})}return t})(),Wv=(()=>{class t{_elementRef=d(R);_dir=d(Mt,{optional:!0});_ngZone=d(k);_injector=d(W);_renderer=d(ke);_diAnimationsDisabled=Fe();_eventCleanups;_initialized=!1;_fallbackTimer;_positionIndex;_dirChangeSubscription=ae.EMPTY;_position;_previousPosition;_onCentering=new A;_beforeCentering=new A;_afterLeavingCenter=new A;_onCentered=new A(!0);_portalHost;_contentElement;_content;animationDuration="500ms";preserveContent=!1;set position(e){this._positionIndex=e,this._computePositionAnimationState()}constructor(){if(this._dir){let e=d(Oe);this._dirChangeSubscription=this._dir.change.subscribe(i=>{this._computePositionAnimationState(i),e.markForCheck()})}}ngOnInit(){this._bindTransitionEvents(),this._position==="center"&&(this._setActiveClass(!0),Xe(()=>this._onCentering.emit(this._elementRef.nativeElement.clientHeight),{injector:this._injector})),this._initialized=!0}ngOnDestroy(){clearTimeout(this._fallbackTimer),this._eventCleanups?.forEach(e=>e()),this._dirChangeSubscription.unsubscribe()}_bindTransitionEvents(){this._ngZone.runOutsideAngular(()=>{let e=this._elementRef.nativeElement,i=r=>{r.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.remove("mat-tab-body-animating"),r.type==="transitionend"&&this._transitionDone())};this._eventCleanups=[this._renderer.listen(e,"transitionstart",r=>{r.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.add("mat-tab-body-animating"),this._transitionStarted())}),this._renderer.listen(e,"transitionend",i),this._renderer.listen(e,"transitioncancel",i)]})}_transitionStarted(){clearTimeout(this._fallbackTimer);let e=this._position==="center";this._beforeCentering.emit(e),e&&this._onCentering.emit(this._elementRef.nativeElement.clientHeight)}_transitionDone(){this._position==="center"?this._onCentered.emit():this._previousPosition==="center"&&this._afterLeavingCenter.emit()}_setActiveClass(e){this._elementRef.nativeElement.classList.toggle("mat-mdc-tab-body-active",e)}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_isCenterPosition(){return this._positionIndex===0}_computePositionAnimationState(e=this._getLayoutDirection()){this._previousPosition=this._position,this._positionIndex<0?this._position=e=="ltr"?"left":"right":this._positionIndex>0?this._position=e=="ltr"?"right":"left":this._position="center",this._animationsDisabled()?this._simulateTransitionEvents():this._initialized&&(this._position==="center"||this._previousPosition==="center")&&(clearTimeout(this._fallbackTimer),this._fallbackTimer=this._ngZone.runOutsideAngular(()=>setTimeout(()=>this._simulateTransitionEvents(),100)))}_simulateTransitionEvents(){this._transitionStarted(),Xe(()=>this._transitionDone(),{injector:this._injector})}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0ms"||this.animationDuration==="0s"}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=E({type:t,selectors:[["mat-tab-body"]],viewQuery:function(i,r){if(i&1&&Ue(sx,5)(vP,5),i&2){let o;L(o=j())&&(r._portalHost=o.first),L(o=j())&&(r._contentElement=o.first)}},hostAttrs:[1,"mat-mdc-tab-body"],hostVars:1,hostBindings:function(i,r){i&2&&ue("inert",r._position==="center"?null:"")},inputs:{_content:[0,"content","_content"],animationDuration:"animationDuration",preserveContent:"preserveContent",position:"position"},outputs:{_onCentering:"_onCentering",_beforeCentering:"_beforeCentering",_onCentered:"_onCentered"},decls:3,vars:6,consts:[["content",""],["cdkScrollable","",1,"mat-mdc-tab-body-content"],["matTabBodyHost",""]],template:function(i,r){i&1&&(p(0,"div",1,0),Bt(2,bP,0,0,"ng-template",2),g()),i&2&&z("mat-tab-body-content-left",r._position==="left")("mat-tab-body-content-right",r._position==="right")("mat-tab-body-content-can-animate",r._position==="center"||r._previousPosition==="center")},dependencies:[sx,df],styles:[`.mat-mdc-tab-body {
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
`],encapsulation:2})}return t})(),uf=(()=>{class t{_elementRef=d(R);_changeDetectorRef=d(Oe);_ngZone=d(k);_tabsSubscription=ae.EMPTY;_tabLabelSubscription=ae.EMPTY;_tabBodySubscription=ae.EMPTY;_diAnimationsDisabled=Fe();_allTabs;_tabBodies;_tabBodyWrapper;_tabHeader;_tabs=new pi;_indexToSelect=0;_lastFocusedTabIndex=null;_tabBodyWrapperHeight=0;color;get fitInkBarToContent(){return this._fitInkBarToContent}set fitInkBarToContent(e){this._fitInkBarToContent=e,this._changeDetectorRef.markForCheck()}_fitInkBarToContent=!1;stretchTabs=!0;alignTabs=null;dynamicHeight=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){this._indexToSelect=isNaN(e)?null:e}_selectedIndex=null;headerPosition="above";get animationDuration(){return this._animationDuration}set animationDuration(e){let i=e+"";this._animationDuration=/^\d+$/.test(i)?e+"ms":i}_animationDuration;get contentTabIndex(){return this._contentTabIndex}set contentTabIndex(e){this._contentTabIndex=isNaN(e)?null:e}_contentTabIndex=null;disablePagination=!1;disableRipple=!1;preserveContent=!1;get backgroundColor(){return this._backgroundColor}set backgroundColor(e){let i=this._elementRef.nativeElement.classList;i.remove("mat-tabs-with-background",`mat-background-${this.backgroundColor}`),e&&i.add("mat-tabs-with-background",`mat-background-${e}`),this._backgroundColor=e}_backgroundColor;ariaLabel;ariaLabelledby;selectedIndexChange=new A;focusChange=new A;animationDone=new A;selectedTabChange=new A(!0);_groupId;_isServer=!d(fe).isBrowser;constructor(){let e=d(PP,{optional:!0});this._groupId=d(rt).getId("mat-tab-group-"),this.animationDuration=e&&e.animationDuration?e.animationDuration:"500ms",this.disablePagination=e&&e.disablePagination!=null?e.disablePagination:!1,this.dynamicHeight=e&&e.dynamicHeight!=null?e.dynamicHeight:!1,e?.contentTabIndex!=null&&(this.contentTabIndex=e.contentTabIndex),this.preserveContent=!!e?.preserveContent,this.fitInkBarToContent=e&&e.fitInkBarToContent!=null?e.fitInkBarToContent:!1,this.stretchTabs=e&&e.stretchTabs!=null?e.stretchTabs:!0,this.alignTabs=e&&e.alignTabs!=null?e.alignTabs:null}ngAfterContentChecked(){let e=this._indexToSelect=this._clampTabIndex(this._indexToSelect);if(this._selectedIndex!=e){let i=this._selectedIndex==null;if(!i){this.selectedTabChange.emit(this._createChangeEvent(e));let r=this._tabBodyWrapper.nativeElement;r.style.minHeight=r.clientHeight+"px"}Promise.resolve().then(()=>{this._tabs.forEach((r,o)=>r.isActive=o===e),i||(this.selectedIndexChange.emit(e),this._tabBodyWrapper.nativeElement.style.minHeight="")})}this._tabs.forEach((i,r)=>{i.position=r-e,this._selectedIndex!=null&&i.position==0&&!i.origin&&(i.origin=e-this._selectedIndex)}),this._selectedIndex!==e&&(this._selectedIndex=e,this._lastFocusedTabIndex=null,this._changeDetectorRef.markForCheck())}ngAfterContentInit(){this._subscribeToAllTabChanges(),this._subscribeToTabLabels(),this._tabsSubscription=this._tabs.changes.subscribe(()=>{let e=this._clampTabIndex(this._indexToSelect);if(e===this._selectedIndex){let i=this._tabs.toArray(),r;for(let o=0;o<i.length;o++)if(i[o].isActive){this._indexToSelect=this._selectedIndex=o,this._lastFocusedTabIndex=null,r=i[o];break}!r&&i[e]&&Promise.resolve().then(()=>{i[e].isActive=!0,this.selectedTabChange.emit(this._createChangeEvent(e))})}this._changeDetectorRef.markForCheck()})}ngAfterViewInit(){this._tabBodySubscription=this._tabBodies.changes.subscribe(()=>this._bodyCentered(!0))}_subscribeToAllTabChanges(){this._allTabs.changes.pipe(kt(this._allTabs)).subscribe(e=>{this._tabs.reset(e.filter(i=>i._closestTabGroup===this||!i._closestTabGroup)),this._tabs.notifyOnChanges()})}ngOnDestroy(){this._tabs.destroy(),this._tabsSubscription.unsubscribe(),this._tabLabelSubscription.unsubscribe(),this._tabBodySubscription.unsubscribe()}realignInkBar(){this._tabHeader&&this._tabHeader._alignInkBarToSelectedTab()}updatePagination(){this._tabHeader&&this._tabHeader.updatePagination()}focusTab(e){let i=this._tabHeader;i&&(i.focusIndex=e)}_focusChanged(e){this._lastFocusedTabIndex=e,this.focusChange.emit(this._createChangeEvent(e))}_createChangeEvent(e){let i=new Gv;return i.index=e,this._tabs&&this._tabs.length&&(i.tab=this._tabs.toArray()[e]),i}_subscribeToTabLabels(){this._tabLabelSubscription&&this._tabLabelSubscription.unsubscribe(),this._tabLabelSubscription=$t(...this._tabs.map(e=>e._stateChanges)).subscribe(()=>this._changeDetectorRef.markForCheck())}_clampTabIndex(e){return Math.min(this._tabs.length-1,Math.max(e||0,0))}_getTabLabelId(e,i){return e.id||`${this._groupId}-label-${i}`}_getTabContentId(e){return`${this._groupId}-content-${e}`}_setTabBodyWrapperHeight(e){if(!this.dynamicHeight||!this._tabBodyWrapperHeight){this._tabBodyWrapperHeight=e;return}let i=this._tabBodyWrapper.nativeElement;i.style.height=this._tabBodyWrapperHeight+"px",this._tabBodyWrapper.nativeElement.offsetHeight&&(i.style.height=e+"px")}_removeTabBodyWrapperHeight(){let e=this._tabBodyWrapper.nativeElement;this._tabBodyWrapperHeight=e.clientHeight,e.style.height="",this._ngZone.run(()=>this.animationDone.emit())}_handleClick(e,i,r){i.focusIndex=r,e.disabled||(this.selectedIndex=r)}_getTabIndex(e){let i=this._lastFocusedTabIndex??this.selectedIndex;return e===i?0:-1}_tabFocusChanged(e,i){e&&e!=="mouse"&&e!=="touch"&&(this._tabHeader.focusIndex=i)}_bodyCentered(e){e&&this._tabBodies?.forEach((i,r)=>i._setActiveClass(r===this._selectedIndex))}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0"||this.animationDuration==="0ms"}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=E({type:t,selectors:[["mat-tab-group"]],contentQueries:function(i,r,o){if(i&1&&_t(o,Ml,5),i&2){let s;L(s=j())&&(r._allTabs=s)}},viewQuery:function(i,r){if(i&1&&Ue(_P,5)(yP,5)(Wv,5),i&2){let o;L(o=j())&&(r._tabBodyWrapper=o.first),L(o=j())&&(r._tabHeader=o.first),L(o=j())&&(r._tabBodies=o)}},hostAttrs:[1,"mat-mdc-tab-group"],hostVars:11,hostBindings:function(i,r){i&2&&(ue("mat-align-tabs",r.alignTabs),Ot("mat-"+(r.color||"primary")),Vo("--mat-tab-animation-duration",r.animationDuration),z("mat-mdc-tab-group-dynamic-height",r.dynamicHeight)("mat-mdc-tab-group-inverted-header",r.headerPosition==="below")("mat-mdc-tab-group-stretch-tabs",r.stretchTabs))},inputs:{color:"color",fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",K],stretchTabs:[2,"mat-stretch-tabs","stretchTabs",K],alignTabs:[0,"mat-align-tabs","alignTabs"],dynamicHeight:[2,"dynamicHeight","dynamicHeight",K],selectedIndex:[2,"selectedIndex","selectedIndex",Qn],headerPosition:"headerPosition",animationDuration:"animationDuration",contentTabIndex:[2,"contentTabIndex","contentTabIndex",Qn],disablePagination:[2,"disablePagination","disablePagination",K],disableRipple:[2,"disableRipple","disableRipple",K],preserveContent:[2,"preserveContent","preserveContent",K],backgroundColor:"backgroundColor",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"]},outputs:{selectedIndexChange:"selectedIndexChange",focusChange:"focusChange",animationDone:"animationDone",selectedTabChange:"selectedTabChange"},exportAs:["matTabGroup"],features:[Re([{provide:lx,useExisting:t}])],ngContentSelectors:qv,decls:9,vars:8,consts:[["tabHeader",""],["tabBodyWrapper",""],["tabNode",""],[3,"indexFocused","selectFocusedIndex","selectedIndex","disableRipple","disablePagination","aria-label","aria-labelledby"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"id","mdc-tab--active","class","disabled","fitInkBarToContent"],[1,"mat-mdc-tab-body-wrapper"],["role","tabpanel",3,"id","class","content","position","animationDuration","preserveContent"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"click","cdkFocusChange","id","disabled","fitInkBarToContent"],[1,"mdc-tab__ripple"],["mat-ripple","",1,"mat-mdc-tab-ripple",3,"matRippleTrigger","matRippleDisabled"],[1,"mdc-tab__content"],[1,"mdc-tab__text-label"],[3,"cdkPortalOutlet"],["role","tabpanel",3,"_onCentered","_onCentering","_beforeCentering","id","content","position","animationDuration","preserveContent"]],template:function(i,r){i&1&&(Ie(),p(0,"mat-tab-header",3,0),N("indexFocused",function(s){return r._focusChanged(s)})("selectFocusedIndex",function(s){return r.selectedIndex=s}),Dn(2,EP,8,17,"div",4,Fd),g(),oe(4,xP,1,0),p(5,"div",5,1),Dn(7,IP,1,10,"mat-tab-body",6,Fd),g()),i&2&&(Z("selectedIndex",r.selectedIndex||0)("disableRipple",r.disableRipple)("disablePagination",r.disablePagination),Od("aria-label",r.ariaLabel)("aria-labelledby",r.ariaLabelledby),w(2),En(r._tabs),w(2),se(r._isServer?4:-1),w(),z("_mat-animation-noopable",r._animationsDisabled()),w(2),En(r._tabs))},dependencies:[FP,cx,ov,pl,Ds,Wv],styles:[`.mdc-tab {
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
`],encapsulation:2})}return t})(),Gv=class{index;tab};function LP(t,n){if(t&1&&(p(0,"div",10)(1,"mat-error"),D(2),g()()),t&2){let e=q();w(2),De(e.errorMessage())}}function jP(t,n){if(t&1&&(p(0,"div",10)(1,"mat-error"),D(2),g()()),t&2){let e=q();w(2),De(e.errorMessage())}}function BP(t,n){if(t&1&&(p(0,"div",14)(1,"p"),D(2),g()()),t&2){let e=q();w(2),De(e.successMessage())}}var ff=class t{email=Ne.required();password=Ne.required();name=Ne.required();lastName=Ne.required();errorMessage=Ne.required();successMessage=Ne.required();hide=F(!0);clickEvent(n){this.hide.set(!this.hide()),n.stopPropagation()}clearError(){this.errorMessage.set(""),this.successMessage.set("")}loginSubmitEvent=new A;submitLogin(){this.loginSubmitEvent.emit()}registerSubmitEvent=new A;submitRegister(){this.registerSubmitEvent.emit()}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=E({type:t,selectors:[["login-container"]],inputs:{email:[1,"email"],password:[1,"password"],name:[1,"name"],lastName:[1,"lastName"],errorMessage:[1,"errorMessage"],successMessage:[1,"successMessage"]},outputs:{email:"emailChange",password:"passwordChange",name:"nameChange",lastName:"lastNameChange",errorMessage:"errorMessageChange",successMessage:"successMessageChange",loginSubmitEvent:"loginSubmitEvent",registerSubmitEvent:"registerSubmitEvent"},decls:59,vars:17,consts:[[1,"login-container"],["id","logincard","appearance","outlined",1,"login-container-card"],["dynamicHeight","",3,"selectedIndexChange"],["label","Logga in"],[1,"login-container-header"],[1,"login-container-card-content"],[1,"login-container-fields"],["matInput","",3,"ngModelChange","ngModel"],["matInput","",3,"ngModelChange","ngModel","type"],["matIconButton","","matSuffix","",3,"click"],[1,"login-container-error"],[1,"login-container-buttons"],["matButton","elevated",1,"login-container-button",3,"click"],["label","Registrera anv\xE4ndare"],[1,"login-container-success"]],template:function(e,i){e&1&&(p(0,"div",0)(1,"mat-card",1)(2,"mat-tab-group",2),N("selectedIndexChange",function(){return i.clearError()}),p(3,"mat-tab",3)(4,"mat-card-header",4)(5,"mat-card-title"),D(6,"V\xE4lkommen tillbaka till "),p(7,"b"),D(8,"K\xEEndGuard"),g()()(),p(9,"mat-card-content",5)(10,"div",6)(11,"mat-form-field")(12,"mat-label"),D(13,"E-post adress"),g(),p(14,"input",7),dt("ngModelChange",function(o){return Ae(i.email,o)||(i.email=o),o}),g()(),p(15,"mat-form-field")(16,"mat-label"),D(17,"L\xF6senord"),g(),p(18,"input",8),dt("ngModelChange",function(o){return Ae(i.password,o)||(i.password=o),o}),g(),p(19,"button",9),N("click",function(o){return i.clickEvent(o)}),p(20,"mat-icon"),D(21),g()()()(),oe(22,LP,3,1,"div",10),p(23,"div",11)(24,"button",12),N("click",function(){return i.submitLogin()}),D(25," Logga in "),g()()()(),p(26,"mat-tab",13)(27,"mat-card-header",4)(28,"mat-card-title"),D(29,"V\xE4lkommen till "),p(30,"b"),D(31,"K\xEEndGuard"),g()()(),p(32,"mat-card-content",5)(33,"div",6)(34,"mat-form-field")(35,"mat-label"),D(36,"F\xF6rnamn"),g(),p(37,"input",7),dt("ngModelChange",function(o){return Ae(i.name,o)||(i.name=o),o}),g()(),p(38,"mat-form-field")(39,"mat-label"),D(40,"Efternamn"),g(),p(41,"input",7),dt("ngModelChange",function(o){return Ae(i.lastName,o)||(i.lastName=o),o}),g()()(),p(42,"div",6)(43,"mat-form-field")(44,"mat-label"),D(45,"E-post adress"),g(),p(46,"input",7),dt("ngModelChange",function(o){return Ae(i.email,o)||(i.email=o),o}),g()(),p(47,"mat-form-field")(48,"mat-label"),D(49,"L\xF6senord"),g(),p(50,"input",8),dt("ngModelChange",function(o){return Ae(i.password,o)||(i.password=o),o}),g(),p(51,"button",9),N("click",function(o){return i.clickEvent(o)}),p(52,"mat-icon"),D(53),g()()()(),oe(54,jP,3,1,"div",10),oe(55,BP,3,1,"div",14),p(56,"div",11)(57,"button",12),N("click",function(){return i.submitRegister()}),D(58," Registrera "),g()()()()()()()),e&2&&(w(14),ct("ngModel",i.email),w(4),ct("ngModel",i.password),Z("type",i.hide()?"password":"text"),w(),ue("aria-label","Hide password")("aria-pressed",i.hide()),w(2),De(i.hide()?"visibility_off":"visibility"),w(),se(i.errorMessage()!==""?22:-1),w(15),ct("ngModel",i.name),w(4),ct("ngModel",i.lastName),w(5),ct("ngModel",i.email),w(4),ct("ngModel",i.password),Z("type",i.hide()?"password":"text"),w(),ue("aria-label","Hide password")("aria-pressed",i.hide()),w(2),De(i.hide()?"visibility_off":"visibility"),w(),se(i.errorMessage()!==""?54:-1),w(),se(i.successMessage()!==""?55:-1))},dependencies:[_s,nr,bs,no,en,ni,eo,Ev,xv,ws,ir,gl,fs,wv,hs,ms,mn,ei,Xi,Ru,uf,Ml],styles:['[_nghost-%COMP%]{width:40%}.login-container[_ngcontent-%COMP%]{display:flex;flex:1;width:100%}.login-container-header[_ngcontent-%COMP%]{text-align:center;margin-bottom:1em}.login-container-card[_ngcontent-%COMP%]{width:100%}.login-container-card-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.login-container-fields[_ngcontent-%COMP%]{display:flex;width:100%;justify-content:space-between}.login-container-fields[_ngcontent-%COMP%]:after{content:""}.login-container-fields[_ngcontent-%COMP%]:before{content:""}.login-container-fields[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:33%}.login-container-buttons[_ngcontent-%COMP%]{display:flex;justify-content:center;width:100%}.login-container-buttons[_ngcontent-%COMP%]:after{content:""}.login-container-button[_ngcontent-%COMP%]:before{content:""}.login-container-error[_ngcontent-%COMP%]{margin-bottom:1em;text-align:center}.login-container-success[_ngcontent-%COMP%]{color:green;text-align:center;margin-bottom:1em}.login-container-button[_ngcontent-%COMP%]{width:auto;margin-left:1em;margin-right:1em}']})};var St={apiUrl:"https://salad-dramatize-customary.ngrok-free.dev",wsUrl:"wss://salad-dramatize-customary.ngrok-free.dev"};var Is=class t{baseUrl=`${St.apiUrl}/api/auth`;http=d(xt);login(n,e){let i={email:n,password:e};return this.http.post(`${this.baseUrl}/login`,i).pipe($e(r=>{sessionStorage.setItem("token",r.token),sessionStorage.setItem("UserId",r.id.toString())}))}register(n,e,i){let r={name:n,email:e,password:i};return this.http.post(`${this.baseUrl}/register`,r)}async isAuthorized(){return await new Promise(i=>{this.http.get(`${this.baseUrl}/validate`,{}).subscribe({error:()=>i(!1),complete:()=>i(!0)})})}static \u0275fac=function(e){return new(e||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})};var mf=class t{email=F("");password=F("");name=F("");lastName=F("");errorMessage=F("");successMessage=F("");router=d(Ht);authService=d(Is);onLoginSubmit(){this.authService.login(this.email(),this.password()).subscribe({error:n=>{this.errorMessage.set(n.error.error)},next:()=>{this.router.navigate(["/app"])}})}onRegisterSubmit(){let n=this.name()+" "+this.lastName(),e=this.email().trim(),i=this.password();this.authService.register(n,e,i).subscribe({error:r=>{this.successMessage.set(""),this.errorMessage.set(r.error.error)},next:r=>{this.errorMessage.set(""),this.successMessage.set(r.message)}})}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=E({type:t,selectors:[["login-page"]],decls:3,vars:6,consts:[["width","auto","height","150px","alt","Kindguard logo","src","Kindguardlogo.png"],[1,"login-page-container",3,"emailChange","passwordChange","nameChange","lastNameChange","errorMessageChange","successMessageChange","loginSubmitEvent","registerSubmitEvent","email","password","name","lastName","errorMessage","successMessage"]],template:function(e,i){e&1&&(p(0,"div"),ne(1,"img",0),g(),p(2,"login-container",1),dt("emailChange",function(o){return Ae(i.email,o)||(i.email=o),o})("passwordChange",function(o){return Ae(i.password,o)||(i.password=o),o})("nameChange",function(o){return Ae(i.name,o)||(i.name=o),o})("lastNameChange",function(o){return Ae(i.lastName,o)||(i.lastName=o),o})("errorMessageChange",function(o){return Ae(i.errorMessage,o)||(i.errorMessage=o),o})("successMessageChange",function(o){return Ae(i.successMessage,o)||(i.successMessage=o),o}),N("loginSubmitEvent",function(){return i.onLoginSubmit()})("registerSubmitEvent",function(){return i.onRegisterSubmit()}),g()),e&2&&(w(2),ct("email",i.email)("password",i.password)("name",i.name)("lastName",i.lastName)("errorMessage",i.errorMessage)("successMessage",i.successMessage))},dependencies:[ff],styles:["[_nghost-%COMP%]{display:flex;width:100%;height:80%;flex-direction:column;justify-content:center;align-items:center;gap:100px}"]})};var Yv=(()=>{class t{get vertical(){return this._vertical}set vertical(e){this._vertical=ft(e)}_vertical=!1;get inset(){return this._inset}set inset(e){this._inset=ft(e)}_inset=!1;static \u0275fac=function(i){return new(i||t)};static \u0275cmp=E({type:t,selectors:[["mat-divider"]],hostAttrs:["role","separator",1,"mat-divider"],hostVars:7,hostBindings:function(i,r){i&2&&(ue("aria-orientation",r.vertical?"vertical":"horizontal"),z("mat-divider-vertical",r.vertical)("mat-divider-horizontal",!r.vertical)("mat-divider-inset",r.inset))},inputs:{vertical:"vertical",inset:"inset"},decls:0,vars:0,template:function(i,r){},styles:[`.mat-divider {
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
`],encapsulation:2,changeDetection:0})}return t})(),Ms=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=U({type:t});static \u0275inj=H({imports:[he]})}return t})();var Ss=class t{url=`${St.apiUrl}/api/attendance`;attendanceSignals=new Map;attendanceChanges=new An;http=d(xt);getAttendanceChanges=this.attendanceChanges.asObservable();getSignal(n,e){let i=`${n}_${e}`;return this.attendanceSignals.has(i)||this.attendanceSignals.set(i,F(null)),this.attendanceSignals.get(i)}setAttendance(n,e,i){let r={childId:n,date:e,status:i};return this.attendanceChanges.next(r),this.http.put(this.url,r)}static \u0275fac=function(e){return new(e||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})};function oi(){let t=new Date;return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`}var Sl=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new C;constructor(n=!1,e,i=!0,r){this._multiple=n,this._emitChanges=i,this.compareWith=r,e&&e.length&&(n?e.forEach(o=>this._markSelected(o)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...n){this._verifyValueAssignment(n),n.forEach(i=>this._markSelected(i));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}deselect(...n){this._verifyValueAssignment(n),n.forEach(i=>this._unmarkSelected(i));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}setSelection(...n){this._verifyValueAssignment(n);let e=this.selected,i=new Set(n.map(o=>this._getConcreteValue(o)));n.forEach(o=>this._markSelected(o)),e.filter(o=>!i.has(this._getConcreteValue(o,i))).forEach(o=>this._unmarkSelected(o));let r=this._hasQueuedChanges();return this._emitChangeEvent(),r}toggle(n){return this.isSelected(n)?this.deselect(n):this.select(n)}clear(n=!0){this._unmarkAll();let e=this._hasQueuedChanges();return n&&this._emitChangeEvent(),e}isSelected(n){return this._selection.has(this._getConcreteValue(n))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(n){this._multiple&&this.selected&&this._selected.sort(n)}isMultipleSelection(){return this._multiple}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(n){n=this._getConcreteValue(n),this.isSelected(n)||(this._multiple||this._unmarkAll(),this.isSelected(n)||this._selection.add(n),this._emitChanges&&this._selectedToEmit.push(n))}_unmarkSelected(n){n=this._getConcreteValue(n),this.isSelected(n)&&(this._selection.delete(n),this._emitChanges&&this._deselectedToEmit.push(n))}_unmarkAll(){this.isEmpty()||this._selection.forEach(n=>this._unmarkSelected(n))}_verifyValueAssignment(n){n.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(n,e){if(this.compareWith){e=e??this._selection;for(let i of e)if(this.compareWith(n,i))return i;return n}else return n}};var dx=zu();function vx(t){return new hf(t.get(kn),t.get(V))}var hf=class{_viewportRuler;_previousHTMLStyles={top:"",left:""};_previousScrollPosition;_isEnabled=!1;_document;constructor(n,e){this._viewportRuler=n,this._document=e}attach(){}enable(){if(this._canBeEnabled()){let n=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=n.style.left||"",this._previousHTMLStyles.top=n.style.top||"",n.style.left=qe(-this._previousScrollPosition.left),n.style.top=qe(-this._previousScrollPosition.top),n.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){let n=this._document.documentElement,e=this._document.body,i=n.style,r=e.style,o=i.scrollBehavior||"",s=r.scrollBehavior||"";this._isEnabled=!1,i.left=this._previousHTMLStyles.left,i.top=this._previousHTMLStyles.top,n.classList.remove("cdk-global-scrollblock"),dx&&(i.scrollBehavior=r.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),dx&&(i.scrollBehavior=o,r.scrollBehavior=s)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;let e=this._document.documentElement,i=this._viewportRuler.getViewportSize();return e.scrollHeight>i.height||e.scrollWidth>i.width}};function bx(t,n){return new pf(t.get(or),t.get(k),t.get(kn),n)}var pf=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(n,e,i,r){this._scrollDispatcher=n,this._ngZone=e,this._viewportRuler=i,this._config=r}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(this._scrollSubscription)return;let n=this._scrollDispatcher.scrolled(0).pipe(ge(e=>!e||!this._overlayRef.overlayElement.contains(e.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=n.subscribe(()=>{let e=this._viewportRuler.getViewportScrollPosition().top;Math.abs(e-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=n.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var Tl=class{enable(){}disable(){}attach(){}};function Zv(t,n){return n.some(e=>{let i=t.bottom<e.top,r=t.top>e.bottom,o=t.right<e.left,s=t.left>e.right;return i||r||o||s})}function ux(t,n){return n.some(e=>{let i=t.top<e.top,r=t.bottom>e.bottom,o=t.left<e.left,s=t.right>e.right;return i||r||o||s})}function oo(t,n){return new gf(t.get(or),t.get(kn),t.get(k),n)}var gf=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(n,e,i,r){this._scrollDispatcher=n,this._viewportRuler=e,this._ngZone=i,this._config=r}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(!this._scrollSubscription){let n=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(n).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:i,height:r}=this._viewportRuler.getViewportSize();Zv(e,[{width:i,height:r,bottom:r,right:i,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},_x=(()=>{class t{_injector=d(W);constructor(){}noop=()=>new Tl;close=e=>bx(this._injector,e);block=()=>vx(this._injector);reposition=e=>oo(this._injector,e);static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),ro=class{positionStrategy;scrollStrategy=new Tl;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(n){if(n){let e=Object.keys(n);for(let i of e)n[i]!==void 0&&(this[i]=n[i])}}};var vf=class{connectionPair;scrollableViewProperties;constructor(n,e){this.connectionPair=n,this.scrollableViewProperties=e}};var yx=(()=>{class t{_attachedOverlays=[];_document=d(V);_isAttached=!1;constructor(){}ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let i=this._attachedOverlays.indexOf(e);i>-1&&this._attachedOverlays.splice(i,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(e,i,r){return r.observers.length<1?!1:e.eventPredicate?e.eventPredicate(i):!0}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),wx=(()=>{class t extends yx{_ngZone=d(k);_renderer=d(Ke).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=e=>{let i=this._attachedOverlays;for(let r=i.length-1;r>-1;r--){let o=i[r];if(this.canReceiveEvent(o,e,o._keydownEvents)){this._ngZone.run(()=>o._keydownEvents.next(e));break}}};static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ge(t)))(r||t)}})();static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Cx=(()=>{class t extends yx{_platform=d(fe);_ngZone=d(k);_renderer=d(Ke).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let i=this._document.body,r={capture:!0},o=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[o.listen(i,"pointerdown",this._pointerDownListener,r),o.listen(i,"click",this._clickListener,r),o.listen(i,"auxclick",this._clickListener,r),o.listen(i,"contextmenu",this._clickListener,r)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=i.style.cursor,i.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=e=>{this._pointerDownEventTarget=yt(e)};_clickListener=e=>{let i=yt(e),r=e.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:i;this._pointerDownEventTarget=null;let o=this._attachedOverlays.slice();for(let s=o.length-1;s>-1;s--){let a=o[s],l=a._outsidePointerEvents;if(!(!a.hasAttached()||!this.canReceiveEvent(a,e,l))){if(fx(a.overlayElement,i)||fx(a.overlayElement,r))break;this._ngZone?this._ngZone.run(()=>l.next(e)):l.next(e)}}};static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ge(t)))(r||t)}})();static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function fx(t,n){let e=typeof ShadowRoot<"u"&&ShadowRoot,i=n;for(;i;){if(i===t)return!0;i=e&&i instanceof ShadowRoot?i.host:i.parentNode}return!1}var Dx=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=E({type:t,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(i,r){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
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
`],encapsulation:2,changeDetection:0})}return t})(),Ex=(()=>{class t{_platform=d(fe);_containerElement;_document=d(V);_styleLoader=d(ut);constructor(){}ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e="cdk-overlay-container";if(this._platform.isBrowser||hv()){let r=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let o=0;o<r.length;o++)r[o].remove()}let i=this._document.createElement("div");i.classList.add(e),hv()?i.setAttribute("platform","test"):this._platform.isBrowser||i.setAttribute("platform","server"),this._document.body.appendChild(i),this._containerElement=i}_loadStyles(){this._styleLoader.load(Dx)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Qv=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(n,e,i,r){this._renderer=e,this._ngZone=i,this.element=n.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=e.listen(this.element,"click",r)}detach(){this._ngZone.runOutsideAngular(()=>{let n=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(n,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),n.style.pointerEvents="none",n.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function Kv(t){return t&&t.nodeType===1}var bf=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new C;_attachments=new C;_detachments=new C;_positionStrategy;_scrollStrategy;_locationChanges=ae.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new C;_outsidePointerEvents=new C;_afterNextRenderRef;constructor(n,e,i,r,o,s,a,l,c,u=!1,f,m){this._portalOutlet=n,this._host=e,this._pane=i,this._config=r,this._ngZone=o,this._keyboardDispatcher=s,this._document=a,this._location=l,this._outsideClickDispatcher=c,this._animationsDisabled=u,this._injector=f,this._renderer=m,r.scrollStrategy&&(this._scrollStrategy=r.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=r.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(n){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(n);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=Xe(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof e?.onDestroy=="function"&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let n=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),n}dispose(){if(this._disposed)return;let n=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,n&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(n){n!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=n,this.hasAttached()&&(n.attach(this),this.updatePosition()))}updateSize(n){this._config=_(_({},this._config),n),this._updateElementSize()}setDirection(n){this._config=X(_({},this._config),{direction:n}),this._updateElementDirection()}addPanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!0)}removePanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!1)}getDirection(){let n=this._config.direction;return n?typeof n=="string"?n:n.value:"ltr"}updateScrollStrategy(n){n!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=n,this.hasAttached()&&(n.attach(this),n.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let n=this._pane.style;n.width=qe(this._config.width),n.height=qe(this._config.height),n.minWidth=qe(this._config.minWidth),n.minHeight=qe(this._config.minHeight),n.maxWidth=qe(this._config.maxWidth),n.maxHeight=qe(this._config.maxHeight)}_togglePointerEvents(n){this._pane.style.pointerEvents=n?"":"none"}_attachHost(){if(!this._host.parentElement){let n=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;Kv(n)?n.after(this._host):n?.type==="parent"?n.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let n="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new Qv(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(n))}):this._backdropRef.element.classList.add(n)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(n,e,i){let r=rs(e||[]).filter(o=>!!o);r.length&&(i?n.classList.add(...r):n.classList.remove(...r))}_detachContentWhenEmpty(){let n=!1;try{this._detachContentAfterRenderRef=Xe(()=>{n=!0,this._detachContent()},{injector:this._injector})}catch(e){if(n)throw e;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let n=this._scrollStrategy;n?.disable(),n?.detach?.()}},mx="cdk-overlay-connected-position-bounding-box",VP=/([A-Za-z%]+)$/;function kl(t,n){return new _f(n,t.get(kn),t.get(V),t.get(fe),t.get(Ex))}var _f=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new C;_resizeSubscription=ae.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(n,e,i,r,o){this._viewportRuler=e,this._document=i,this._platform=r,this._overlayContainer=o,this.setOrigin(n)}attach(n){this._overlayRef&&this._overlayRef,this._validatePositions(),n.hostElement.classList.add(mx),this._overlayRef=n,this._boundingBox=n.hostElement,this._pane=n.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let n=this._originRect,e=this._overlayRect,i=this._viewportRect,r=this._containerRect,o=[],s;for(let a of this._preferredPositions){let l=this._getOriginPoint(n,r,a),c=this._getOverlayPoint(l,e,a),u=this._getOverlayFit(c,e,i,a);if(u.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(a,l);return}if(this._canFitWithFlexibleDimensions(u,c,i)){o.push({position:a,origin:l,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(l,a)});continue}(!s||s.overlayFit.visibleArea<u.visibleArea)&&(s={overlayFit:u,overlayPoint:c,originPoint:l,position:a,overlayRect:e})}if(o.length){let a=null,l=-1;for(let c of o){let u=c.boundingBoxRect.width*c.boundingBoxRect.height*(c.position.weight||1);u>l&&(l=u,a=c)}this._isPushed=!1,this._applyPosition(a.position,a.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(s.position,s.originPoint);return}this._applyPosition(s.position,s.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&io(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(mx),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let n=this._lastPosition;n?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(n,this._getOriginPoint(this._originRect,this._containerRect,n))):this.apply()}withScrollableContainers(n){return this._scrollables=n,this}withPositions(n){return this._preferredPositions=n,n.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(n){return this._viewportMargin=n,this}withFlexibleDimensions(n=!0){return this._hasFlexibleDimensions=n,this}withGrowAfterOpen(n=!0){return this._growAfterOpen=n,this}withPush(n=!0){return this._canPush=n,this}withLockedPosition(n=!0){return this._positionLocked=n,this}setOrigin(n){return this._origin=n,this}withDefaultOffsetX(n){return this._offsetX=n,this}withDefaultOffsetY(n){return this._offsetY=n,this}withTransformOriginOn(n){return this._transformOriginSelector=n,this}withPopoverLocation(n){return this._popoverLocation=n,this}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof R?this._origin.nativeElement:Kv(this._origin)?this._origin:null}_getOriginPoint(n,e,i){let r;if(i.originX=="center")r=n.left+n.width/2;else{let s=this._isRtl()?n.right:n.left,a=this._isRtl()?n.left:n.right;r=i.originX=="start"?s:a}e.left<0&&(r-=e.left);let o;return i.originY=="center"?o=n.top+n.height/2:o=i.originY=="top"?n.top:n.bottom,e.top<0&&(o-=e.top),{x:r,y:o}}_getOverlayPoint(n,e,i){let r;i.overlayX=="center"?r=-e.width/2:i.overlayX==="start"?r=this._isRtl()?-e.width:0:r=this._isRtl()?0:-e.width;let o;return i.overlayY=="center"?o=-e.height/2:o=i.overlayY=="top"?0:-e.height,{x:n.x+r,y:n.y+o}}_getOverlayFit(n,e,i,r){let o=px(e),{x:s,y:a}=n,l=this._getOffset(r,"x"),c=this._getOffset(r,"y");l&&(s+=l),c&&(a+=c);let u=0-s,f=s+o.width-i.width,m=0-a,h=a+o.height-i.height,y=this._subtractOverflows(o.width,u,f),x=this._subtractOverflows(o.height,m,h),T=y*x;return{visibleArea:T,isCompletelyWithinViewport:o.width*o.height===T,fitsInViewportVertically:x===o.height,fitsInViewportHorizontally:y==o.width}}_canFitWithFlexibleDimensions(n,e,i){if(this._hasFlexibleDimensions){let r=i.bottom-e.y,o=i.right-e.x,s=hx(this._overlayRef.getConfig().minHeight),a=hx(this._overlayRef.getConfig().minWidth),l=n.fitsInViewportVertically||s!=null&&s<=r,c=n.fitsInViewportHorizontally||a!=null&&a<=o;return l&&c}return!1}_pushOverlayOnScreen(n,e,i){if(this._previousPushAmount&&this._positionLocked)return{x:n.x+this._previousPushAmount.x,y:n.y+this._previousPushAmount.y};let r=px(e),o=this._viewportRect,s=Math.max(n.x+r.width-o.width,0),a=Math.max(n.y+r.height-o.height,0),l=Math.max(o.top-i.top-n.y,0),c=Math.max(o.left-i.left-n.x,0),u=0,f=0;return r.width<=o.width?u=c||-s:u=n.x<this._getViewportMarginStart()?o.left-i.left-n.x:0,r.height<=o.height?f=l||-a:f=n.y<this._getViewportMarginTop()?o.top-i.top-n.y:0,this._previousPushAmount={x:u,y:f},{x:n.x+u,y:n.y+f}}_applyPosition(n,e){if(this._setTransformOrigin(n),this._setOverlayElementStyles(e,n),this._setBoundingBoxStyles(e,n),n.panelClass&&this._addPanelClasses(n.panelClass),this._positionChanges.observers.length){let i=this._getScrollVisibility();if(n!==this._lastPosition||!this._lastScrollVisibility||!HP(this._lastScrollVisibility,i)){let r=new vf(n,i);this._positionChanges.next(r)}this._lastScrollVisibility=i}this._lastPosition=n,this._isInitialRender=!1}_setTransformOrigin(n){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),i,r=n.overlayY;n.overlayX==="center"?i="center":this._isRtl()?i=n.overlayX==="start"?"right":"left":i=n.overlayX==="start"?"left":"right";for(let o=0;o<e.length;o++)e[o].style.transformOrigin=`${i} ${r}`}_calculateBoundingBoxRect(n,e){let i=this._viewportRect,r=this._isRtl(),o,s,a;if(e.overlayY==="top")s=n.y,o=i.height-s+this._getViewportMarginBottom();else if(e.overlayY==="bottom")a=i.height-n.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),o=i.height-a+this._getViewportMarginTop();else{let h=Math.min(i.bottom-n.y+i.top,n.y),y=this._lastBoundingBoxSize.height;o=h*2,s=n.y-h,o>y&&!this._isInitialRender&&!this._growAfterOpen&&(s=n.y-y/2)}let l=e.overlayX==="start"&&!r||e.overlayX==="end"&&r,c=e.overlayX==="end"&&!r||e.overlayX==="start"&&r,u,f,m;if(c)m=i.width-n.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),u=n.x-this._getViewportMarginStart();else if(l)f=n.x,u=i.right-n.x-this._getViewportMarginEnd();else{let h=Math.min(i.right-n.x+i.left,n.x),y=this._lastBoundingBoxSize.width;u=h*2,f=n.x-h,u>y&&!this._isInitialRender&&!this._growAfterOpen&&(f=n.x-y/2)}return{top:s,left:f,bottom:a,right:m,width:u,height:o}}_setBoundingBoxStyles(n,e){let i=this._calculateBoundingBoxRect(n,e);!this._isInitialRender&&!this._growAfterOpen&&(i.height=Math.min(i.height,this._lastBoundingBoxSize.height),i.width=Math.min(i.width,this._lastBoundingBoxSize.width));let r={};if(this._hasExactPosition())r.top=r.left="0",r.bottom=r.right="auto",r.maxHeight=r.maxWidth="",r.width=r.height="100%";else{let o=this._overlayRef.getConfig().maxHeight,s=this._overlayRef.getConfig().maxWidth;r.width=qe(i.width),r.height=qe(i.height),r.top=qe(i.top)||"auto",r.bottom=qe(i.bottom)||"auto",r.left=qe(i.left)||"auto",r.right=qe(i.right)||"auto",e.overlayX==="center"?r.alignItems="center":r.alignItems=e.overlayX==="end"?"flex-end":"flex-start",e.overlayY==="center"?r.justifyContent="center":r.justifyContent=e.overlayY==="bottom"?"flex-end":"flex-start",o&&(r.maxHeight=qe(o)),s&&(r.maxWidth=qe(s))}this._lastBoundingBoxSize=i,io(this._boundingBox.style,r)}_resetBoundingBoxStyles(){io(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){io(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(n,e){let i={},r=this._hasExactPosition(),o=this._hasFlexibleDimensions,s=this._overlayRef.getConfig();if(r){let u=this._viewportRuler.getViewportScrollPosition();io(i,this._getExactOverlayY(e,n,u)),io(i,this._getExactOverlayX(e,n,u))}else i.position="static";let a="",l=this._getOffset(e,"x"),c=this._getOffset(e,"y");l&&(a+=`translateX(${l}px) `),c&&(a+=`translateY(${c}px)`),i.transform=a.trim(),s.maxHeight&&(r?i.maxHeight=qe(s.maxHeight):o&&(i.maxHeight="")),s.maxWidth&&(r?i.maxWidth=qe(s.maxWidth):o&&(i.maxWidth="")),io(this._pane.style,i)}_getExactOverlayY(n,e,i){let r={top:"",bottom:""},o=this._getOverlayPoint(e,this._overlayRect,n);if(this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,i)),n.overlayY==="bottom"){let s=this._document.documentElement.clientHeight;r.bottom=`${s-(o.y+this._overlayRect.height)}px`}else r.top=qe(o.y);return r}_getExactOverlayX(n,e,i){let r={left:"",right:""},o=this._getOverlayPoint(e,this._overlayRect,n);this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,i));let s;if(this._isRtl()?s=n.overlayX==="end"?"left":"right":s=n.overlayX==="end"?"right":"left",s==="right"){let a=this._document.documentElement.clientWidth;r.right=`${a-(o.x+this._overlayRect.width)}px`}else r.left=qe(o.x);return r}_getScrollVisibility(){let n=this._getOriginRect(),e=this._pane.getBoundingClientRect(),i=this._scrollables.map(r=>r.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:ux(n,i),isOriginOutsideView:Zv(n,i),isOverlayClipped:ux(e,i),isOverlayOutsideView:Zv(e,i)}}_subtractOverflows(n,...e){return e.reduce((i,r)=>i-Math.max(r,0),n)}_getNarrowedViewportRect(){let n=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,i=this._viewportRuler.getViewportScrollPosition();return{top:i.top+this._getViewportMarginTop(),left:i.left+this._getViewportMarginStart(),right:i.left+n-this._getViewportMarginEnd(),bottom:i.top+e-this._getViewportMarginBottom(),width:n-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:e-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(n,e){return e==="x"?n.offsetX==null?this._offsetX:n.offsetX:n.offsetY==null?this._offsetY:n.offsetY}_validatePositions(){}_addPanelClasses(n){this._pane&&rs(n).forEach(e=>{e!==""&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(n=>{this._pane.classList.remove(n)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let n=this._origin;if(n instanceof R)return n.nativeElement.getBoundingClientRect();if(n instanceof Element)return n.getBoundingClientRect();let e=n.width||0,i=n.height||0;return{top:n.y,bottom:n.y+i,left:n.x,right:n.x+e,height:i,width:e}}_getContainerRect(){let n=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",e=this._overlayContainer.getContainerElement();n&&(e.style.display="block");let i=e.getBoundingClientRect();return n&&(e.style.display=""),i}};function io(t,n){for(let e in n)n.hasOwnProperty(e)&&(t[e]=n[e]);return t}function hx(t){if(typeof t!="number"&&t!=null){let[n,e]=t.split(VP);return!e||e==="px"?parseFloat(n):null}return t||null}function px(t){return{top:Math.floor(t.top),right:Math.floor(t.right),bottom:Math.floor(t.bottom),left:Math.floor(t.left),width:Math.floor(t.width),height:Math.floor(t.height)}}function HP(t,n){return t===n?!0:t.isOriginClipped===n.isOriginClipped&&t.isOriginOutsideView===n.isOriginOutsideView&&t.isOverlayClipped===n.isOverlayClipped&&t.isOverlayOutsideView===n.isOverlayOutsideView}var gx="cdk-global-overlay-wrapper";function Cf(t){return new yf}var yf=class{_overlayRef;_cssPosition="static";_topOffset="";_bottomOffset="";_alignItems="";_xPosition="";_xOffset="";_width="";_height="";_isDisposed=!1;attach(n){let e=n.getConfig();this._overlayRef=n,this._width&&!e.width&&n.updateSize({width:this._width}),this._height&&!e.height&&n.updateSize({height:this._height}),n.hostElement.classList.add(gx),this._isDisposed=!1}top(n=""){return this._bottomOffset="",this._topOffset=n,this._alignItems="flex-start",this}left(n=""){return this._xOffset=n,this._xPosition="left",this}bottom(n=""){return this._topOffset="",this._bottomOffset=n,this._alignItems="flex-end",this}right(n=""){return this._xOffset=n,this._xPosition="right",this}start(n=""){return this._xOffset=n,this._xPosition="start",this}end(n=""){return this._xOffset=n,this._xPosition="end",this}width(n=""){return this._overlayRef?this._overlayRef.updateSize({width:n}):this._width=n,this}height(n=""){return this._overlayRef?this._overlayRef.updateSize({height:n}):this._height=n,this}centerHorizontally(n=""){return this.left(n),this._xPosition="center",this}centerVertically(n=""){return this.top(n),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let n=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,i=this._overlayRef.getConfig(),{width:r,height:o,maxWidth:s,maxHeight:a}=i,l=(r==="100%"||r==="100vw")&&(!s||s==="100%"||s==="100vw"),c=(o==="100%"||o==="100vh")&&(!a||a==="100%"||a==="100vh"),u=this._xPosition,f=this._xOffset,m=this._overlayRef.getConfig().direction==="rtl",h="",y="",x="";l?x="flex-start":u==="center"?(x="center",m?y=f:h=f):m?u==="left"||u==="end"?(x="flex-end",h=f):(u==="right"||u==="start")&&(x="flex-start",y=f):u==="left"||u==="start"?(x="flex-start",h=f):(u==="right"||u==="end")&&(x="flex-end",y=f),n.position=this._cssPosition,n.marginLeft=l?"0":h,n.marginTop=c?"0":this._topOffset,n.marginBottom=this._bottomOffset,n.marginRight=l?"0":y,e.justifyContent=x,e.alignItems=c?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let n=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,i=e.style;e.classList.remove(gx),i.justifyContent=i.alignItems=n.marginTop=n.marginBottom=n.marginLeft=n.marginRight=n.position="",this._overlayRef=null,this._isDisposed=!0}},xx=(()=>{class t{_injector=d(W);constructor(){}global(){return Cf()}flexibleConnectedTo(e){return kl(this._injector,e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Al=new v("OVERLAY_DEFAULT_CONFIG");function so(t,n){t.get(ut).load(Dx);let e=t.get(Ex),i=t.get(V),r=t.get(rt),o=t.get(Zt),s=t.get(Mt),a=t.get(ke,null,{optional:!0})||t.get(Ke).createRenderer(null,null),l=new ro(n),c=t.get(Al,null,{optional:!0})?.usePopover??!0;l.direction=l.direction||s.value,"showPopover"in i.body?l.usePopover=n?.usePopover??c:l.usePopover=!1;let u=i.createElement("div"),f=i.createElement("div");u.id=r.getId("cdk-overlay-"),u.classList.add("cdk-overlay-pane"),f.appendChild(u),l.usePopover&&(f.setAttribute("popover","manual"),f.classList.add("cdk-overlay-popover"));let m=l.usePopover?l.positionStrategy?.getPopoverInsertionPoint?.():null;return Kv(m)?m.after(f):m?.type==="parent"?m.element.appendChild(f):e.getContainerElement().appendChild(f),new bf(new cf(u,o,t),f,u,l,t.get(k),t.get(wx),i,t.get(Kn),t.get(Cx),n?.disableAnimations??t.get(Ea,null,{optional:!0})==="NoopAnimations",t.get(we),a)}var Ix=(()=>{class t{scrollStrategies=d(_x);_positionBuilder=d(xx);_injector=d(W);constructor(){}create(e){return so(this._injector,e)}position(){return this._positionBuilder}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),UP=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],zP=new v("cdk-connected-overlay-scroll-strategy",{providedIn:"root",factory:()=>{let t=d(W);return()=>oo(t)}}),Ts=(()=>{class t{elementRef=d(R);constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275dir=M({type:t,selectors:[["","cdk-overlay-origin",""],["","overlay-origin",""],["","cdkOverlayOrigin",""]],exportAs:["cdkOverlayOrigin"]})}return t})(),Mx=new v("cdk-connected-overlay-default-config"),Df=(()=>{class t{_dir=d(Mt,{optional:!0});_injector=d(W);_overlayRef;_templatePortal;_backdropSubscription=ae.EMPTY;_attachSubscription=ae.EMPTY;_detachSubscription=ae.EMPTY;_positionSubscription=ae.EMPTY;_offsetX;_offsetY;_position;_scrollStrategyFactory=d(zP);_ngZone=d(k);origin;positions;positionStrategy;get offsetX(){return this._offsetX}set offsetX(e){this._offsetX=e,this._position&&this._updatePositionStrategy(this._position)}get offsetY(){return this._offsetY}set offsetY(e){this._offsetY=e,this._position&&this._updatePositionStrategy(this._position)}width;height;minWidth;minHeight;backdropClass;panelClass;viewportMargin=0;scrollStrategy;open=!1;disableClose=!1;transformOriginSelector;hasBackdrop=!1;lockPosition=!1;flexibleDimensions=!1;growAfterOpen=!1;push=!1;disposeOnNavigation=!1;usePopover;matchWidth=!1;set _config(e){typeof e!="string"&&this._assignConfig(e)}backdropClick=new A;positionChange=new A;attach=new A;detach=new A;overlayKeydown=new A;overlayOutsideClick=new A;constructor(){let e=d(gt),i=d(lt),r=d(Mx,{optional:!0}),o=d(Al,{optional:!0});this.usePopover=o?.usePopover===!1?null:"global",this._templatePortal=new ii(e,i),this.scrollStrategy=this._scrollStrategyFactory(),r&&this._assignConfig(r)}get overlayRef(){return this._overlayRef}get dir(){return this._dir?this._dir.value:"ltr"}ngOnDestroy(){this._attachSubscription.unsubscribe(),this._detachSubscription.unsubscribe(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this._overlayRef?.dispose()}ngOnChanges(e){this._position&&(this._updatePositionStrategy(this._position),this._overlayRef?.updateSize({width:this._getWidth(),minWidth:this.minWidth,height:this.height,minHeight:this.minHeight}),e.origin&&this.open&&this._position.apply()),e.open&&(this.open?this.attachOverlay():this.detachOverlay())}_createOverlay(){(!this.positions||!this.positions.length)&&(this.positions=UP);let e=this._overlayRef=so(this._injector,this._buildConfig());this._attachSubscription=e.attachments().subscribe(()=>this.attach.emit()),this._detachSubscription=e.detachments().subscribe(()=>this.detach.emit()),e.keydownEvents().subscribe(i=>{this.overlayKeydown.next(i),i.keyCode===27&&!this.disableClose&&!Ut(i)&&(i.preventDefault(),this.detachOverlay())}),this._overlayRef.outsidePointerEvents().subscribe(i=>{let r=this._getOriginElement(),o=yt(i);(!r||r!==o&&!r.contains(o))&&this.overlayOutsideClick.next(i)})}_buildConfig(){let e=this._position=this.positionStrategy||this._createPositionStrategy(),i=new ro({direction:this._dir||"ltr",positionStrategy:e,scrollStrategy:this.scrollStrategy,hasBackdrop:this.hasBackdrop,disposeOnNavigation:this.disposeOnNavigation,usePopover:!!this.usePopover});return(this.height||this.height===0)&&(i.height=this.height),(this.minWidth||this.minWidth===0)&&(i.minWidth=this.minWidth),(this.minHeight||this.minHeight===0)&&(i.minHeight=this.minHeight),this.backdropClass&&(i.backdropClass=this.backdropClass),this.panelClass&&(i.panelClass=this.panelClass),i}_updatePositionStrategy(e){let i=this.positions.map(r=>({originX:r.originX,originY:r.originY,overlayX:r.overlayX,overlayY:r.overlayY,offsetX:r.offsetX||this.offsetX,offsetY:r.offsetY||this.offsetY,panelClass:r.panelClass||void 0}));return e.setOrigin(this._getOrigin()).withPositions(i).withFlexibleDimensions(this.flexibleDimensions).withPush(this.push).withGrowAfterOpen(this.growAfterOpen).withViewportMargin(this.viewportMargin).withLockedPosition(this.lockPosition).withTransformOriginOn(this.transformOriginSelector).withPopoverLocation(this.usePopover===null?"global":this.usePopover)}_createPositionStrategy(){let e=kl(this._injector,this._getOrigin());return this._updatePositionStrategy(e),e}_getOrigin(){return this.origin instanceof Ts?this.origin.elementRef:this.origin}_getOriginElement(){return this.origin instanceof Ts?this.origin.elementRef.nativeElement:this.origin instanceof R?this.origin.nativeElement:typeof Element<"u"&&this.origin instanceof Element?this.origin:null}_getWidth(){return this.width?this.width:this.matchWidth?this._getOriginElement()?.getBoundingClientRect?.().width:void 0}attachOverlay(){this._overlayRef||this._createOverlay();let e=this._overlayRef;e.getConfig().hasBackdrop=this.hasBackdrop,e.updateSize({width:this._getWidth()}),e.hasAttached()||e.attach(this._templatePortal),this.hasBackdrop?this._backdropSubscription=e.backdropClick().subscribe(i=>this.backdropClick.emit(i)):this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.positionChange.observers.length>0&&(this._positionSubscription=this._position.positionChanges.pipe(sm(()=>this.positionChange.observers.length>0)).subscribe(i=>{this._ngZone.run(()=>this.positionChange.emit(i)),this.positionChange.observers.length===0&&this._positionSubscription.unsubscribe()})),this.open=!0}detachOverlay(){this._overlayRef?.detach(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.open=!1}_assignConfig(e){this.origin=e.origin??this.origin,this.positions=e.positions??this.positions,this.positionStrategy=e.positionStrategy??this.positionStrategy,this.offsetX=e.offsetX??this.offsetX,this.offsetY=e.offsetY??this.offsetY,this.width=e.width??this.width,this.height=e.height??this.height,this.minWidth=e.minWidth??this.minWidth,this.minHeight=e.minHeight??this.minHeight,this.backdropClass=e.backdropClass??this.backdropClass,this.panelClass=e.panelClass??this.panelClass,this.viewportMargin=e.viewportMargin??this.viewportMargin,this.scrollStrategy=e.scrollStrategy??this.scrollStrategy,this.disableClose=e.disableClose??this.disableClose,this.transformOriginSelector=e.transformOriginSelector??this.transformOriginSelector,this.hasBackdrop=e.hasBackdrop??this.hasBackdrop,this.lockPosition=e.lockPosition??this.lockPosition,this.flexibleDimensions=e.flexibleDimensions??this.flexibleDimensions,this.growAfterOpen=e.growAfterOpen??this.growAfterOpen,this.push=e.push??this.push,this.disposeOnNavigation=e.disposeOnNavigation??this.disposeOnNavigation,this.usePopover=e.usePopover??this.usePopover,this.matchWidth=e.matchWidth??this.matchWidth}static \u0275fac=function(i){return new(i||t)};static \u0275dir=M({type:t,selectors:[["","cdk-connected-overlay",""],["","connected-overlay",""],["","cdkConnectedOverlay",""]],inputs:{origin:[0,"cdkConnectedOverlayOrigin","origin"],positions:[0,"cdkConnectedOverlayPositions","positions"],positionStrategy:[0,"cdkConnectedOverlayPositionStrategy","positionStrategy"],offsetX:[0,"cdkConnectedOverlayOffsetX","offsetX"],offsetY:[0,"cdkConnectedOverlayOffsetY","offsetY"],width:[0,"cdkConnectedOverlayWidth","width"],height:[0,"cdkConnectedOverlayHeight","height"],minWidth:[0,"cdkConnectedOverlayMinWidth","minWidth"],minHeight:[0,"cdkConnectedOverlayMinHeight","minHeight"],backdropClass:[0,"cdkConnectedOverlayBackdropClass","backdropClass"],panelClass:[0,"cdkConnectedOverlayPanelClass","panelClass"],viewportMargin:[0,"cdkConnectedOverlayViewportMargin","viewportMargin"],scrollStrategy:[0,"cdkConnectedOverlayScrollStrategy","scrollStrategy"],open:[0,"cdkConnectedOverlayOpen","open"],disableClose:[0,"cdkConnectedOverlayDisableClose","disableClose"],transformOriginSelector:[0,"cdkConnectedOverlayTransformOriginOn","transformOriginSelector"],hasBackdrop:[2,"cdkConnectedOverlayHasBackdrop","hasBackdrop",K],lockPosition:[2,"cdkConnectedOverlayLockPosition","lockPosition",K],flexibleDimensions:[2,"cdkConnectedOverlayFlexibleDimensions","flexibleDimensions",K],growAfterOpen:[2,"cdkConnectedOverlayGrowAfterOpen","growAfterOpen",K],push:[2,"cdkConnectedOverlayPush","push",K],disposeOnNavigation:[2,"cdkConnectedOverlayDisposeOnNavigation","disposeOnNavigation",K],usePopover:[0,"cdkConnectedOverlayUsePopover","usePopover"],matchWidth:[2,"cdkConnectedOverlayMatchWidth","matchWidth",K],_config:[0,"cdkConnectedOverlay","_config"]},outputs:{backdropClick:"backdropClick",positionChange:"positionChange",attach:"attach",detach:"detach",overlayKeydown:"overlayKeydown",overlayOutsideClick:"overlayOutsideClick"},exportAs:["cdkConnectedOverlay"],features:[He]})}return t})(),ks=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=U({type:t});static \u0275inj=H({providers:[Ix],imports:[he,Hv,Uv,Uv]})}return t})();var Sx=(()=>{class t{_animationsDisabled=Fe();state="unchecked";disabled=!1;appearance="full";constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=E({type:t,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(i,r){i&2&&z("mat-pseudo-checkbox-indeterminate",r.state==="indeterminate")("mat-pseudo-checkbox-checked",r.state==="checked")("mat-pseudo-checkbox-disabled",r.disabled)("mat-pseudo-checkbox-minimal",r.appearance==="minimal")("mat-pseudo-checkbox-full",r.appearance==="full")("_mat-animation-noopable",r._animationsDisabled)},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},decls:0,vars:0,template:function(i,r){},styles:[`.mat-pseudo-checkbox {
  border-radius: 2px;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  position: relative;
  flex-shrink: 0;
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 0.1), background-color 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox::after {
  position: absolute;
  opacity: 0;
  content: "";
  border-bottom: 2px solid currentColor;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-pseudo-checkbox._mat-animation-noopable::after {
  transition: none;
}

.mat-pseudo-checkbox-disabled {
  cursor: default;
}

.mat-pseudo-checkbox-indeterminate::after {
  left: 1px;
  opacity: 1;
  border-radius: 2px;
}

.mat-pseudo-checkbox-checked::after {
  left: 1px;
  border-left: 2px solid currentColor;
  transform: rotate(-45deg);
  opacity: 1;
  box-sizing: content-box;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--mat-sys-primary));
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-pseudo-checkbox-full {
  border-color: var(--mat-pseudo-checkbox-full-unselected-icon-color, var(--mat-sys-on-surface-variant));
  border-width: 2px;
  border-style: solid;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled {
  border-color: var(--mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate {
  background-color: var(--mat-pseudo-checkbox-full-selected-icon-color, var(--mat-sys-primary));
  border-color: transparent;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-full-selected-checkmark-color, var(--mat-sys-on-primary));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {
  background-color: var(--mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--mat-sys-surface));
}

.mat-pseudo-checkbox {
  width: 18px;
  height: 18px;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after {
  width: 14px;
  height: 6px;
  transform-origin: center;
  top: -4.2426406871px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  top: 8px;
  width: 16px;
}

.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after {
  width: 10px;
  height: 4px;
  transform-origin: center;
  top: -2.8284271247px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  top: 6px;
  width: 12px;
}
`],encapsulation:2,changeDetection:0})}return t})();var $P=["text"],WP=[[["mat-icon"]],"*"],GP=["mat-icon","*"];function qP(t,n){if(t&1&&ne(0,"mat-pseudo-checkbox",1),t&2){let e=q();Z("disabled",e.disabled)("state",e.selected?"checked":"unchecked")}}function YP(t,n){if(t&1&&ne(0,"mat-pseudo-checkbox",3),t&2){let e=q();Z("disabled",e.disabled)}}function ZP(t,n){if(t&1&&(p(0,"span",4),D(1),g()),t&2){let e=q();w(),Et("(",e.group.label,")")}}var Jv=new v("MAT_OPTION_PARENT_COMPONENT"),eb=new v("MatOptgroup");var Xv=class{source;isUserInput;constructor(n,e=!1){this.source=n,this.isUserInput=e}},sr=(()=>{class t{_element=d(R);_changeDetectorRef=d(Oe);_parent=d(Jv,{optional:!0});group=d(eb,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue="";get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=d(rt).getId("mat-option-");get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=F(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new A;_text;_stateChanges=new C;constructor(){let e=d(ut);e.load(er),e.load(cl),this._signalDisableRipple=!!this._parent&&Gn(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||"").trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,i){let r=this._getHostElement();typeof r.focus=="function"&&r.focus(i)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!Ut(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new Xv(this,e))}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=E({type:t,selectors:[["mat-option"]],viewQuery:function(i,r){if(i&1&&Ue($P,7),i&2){let o;L(o=j())&&(r._text=o.first)}},hostAttrs:["role","option",1,"mat-mdc-option","mdc-list-item"],hostVars:11,hostBindings:function(i,r){i&1&&N("click",function(){return r._selectViaInteraction()})("keydown",function(s){return r._handleKeydown(s)}),i&2&&(_i("id",r.id),ue("aria-selected",r.selected)("aria-disabled",r.disabled.toString()),z("mdc-list-item--selected",r.selected)("mat-mdc-option-multiple",r.multiple)("mat-mdc-option-active",r.active)("mdc-list-item--disabled",r.disabled))},inputs:{value:"value",id:"id",disabled:[2,"disabled","disabled",K]},outputs:{onSelectionChange:"onSelectionChange"},exportAs:["matOption"],ngContentSelectors:GP,decls:8,vars:5,consts:[["text",""],["aria-hidden","true",1,"mat-mdc-option-pseudo-checkbox",3,"disabled","state"],[1,"mdc-list-item__primary-text"],["state","checked","aria-hidden","true","appearance","minimal",1,"mat-mdc-option-pseudo-checkbox",3,"disabled"],[1,"cdk-visually-hidden"],["aria-hidden","true","mat-ripple","",1,"mat-mdc-option-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"]],template:function(i,r){i&1&&(Ie(WP),oe(0,qP,1,2,"mat-pseudo-checkbox",1),Q(1),p(2,"span",2,0),Q(4,1),g(),oe(5,YP,1,1,"mat-pseudo-checkbox",3),oe(6,ZP,2,1,"span",4),ne(7,"div",5)),i&2&&(se(r.multiple?0:-1),w(5),se(!r.multiple&&r.selected&&!r.hideSingleSelectionIndicator?5:-1),w(),se(r.group&&r.group._inert?6:-1),w(),Z("matRippleTrigger",r._getHostElement())("matRippleDisabled",r.disabled||r.disableRipple))},dependencies:[Sx,pl],styles:[`.mat-mdc-option {
  -webkit-user-select: none;
  user-select: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  min-height: 48px;
  padding: 0 16px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  color: var(--mat-option-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-option-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-option-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-option-label-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-option-label-text-tracking, var(--mat-sys-label-large-tracking));
  font-weight: var(--mat-option-label-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-option:hover:not(.mdc-list-item--disabled) {
  background-color: var(--mat-option-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-option:focus.mdc-list-item, .mat-mdc-option.mat-mdc-option-active.mdc-list-item {
  background-color: var(--mat-option-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
  outline: 0;
}
.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) {
  background-color: var(--mat-option-selected-state-layer-color, var(--mat-sys-secondary-container));
}
.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) .mdc-list-item__primary-text {
  color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-option .mat-pseudo-checkbox {
  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-option.mdc-list-item {
  align-items: center;
  background: transparent;
}
.mat-mdc-option.mdc-list-item--disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox, .mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text, .mat-mdc-option.mdc-list-item--disabled > mat-icon {
  opacity: 0.38;
}
.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 32px;
}
[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 16px;
  padding-right: 32px;
}
.mat-mdc-option .mat-icon,
.mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-icon,
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 0;
  margin-left: 16px;
}
.mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-left: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-right: 16px;
  margin-left: 0;
}
.mat-mdc-option .mat-mdc-option-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-option .mdc-list-item__primary-text {
  white-space: normal;
  font-size: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  font-family: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  margin-right: auto;
}
[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text {
  margin-right: 0;
  margin-left: auto;
}
@media (forced-colors: active) {
  .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
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
  [dir=rtl] .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-option-multiple {
  --mat-list-list-item-selected-container-color: var(--mat-list-list-item-container-color, transparent);
}

.mat-mdc-option-active .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2,changeDetection:0})}return t})();function Tx(t,n,e){if(e.length){let i=n.toArray(),r=e.toArray(),o=0;for(let s=0;s<t+1;s++)i[s].group&&i[s].group===r[o]&&o++;return o}return 0}function kx(t,n,e,i){return t<e?t:t+n>e+i?Math.max(0,t-i+n):e}var Ef=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=U({type:t});static \u0275inj=H({imports:[he]})}return t})();var tb=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=U({type:t});static \u0275inj=H({imports:[us,Ef,sr,he]})}return t})();var QP=["trigger"],KP=["panel"],XP=[[["mat-select-trigger"]],"*"],JP=["mat-select-trigger","*"];function e1(t,n){if(t&1&&(p(0,"span",4),D(1),g()),t&2){let e=q();w(),De(e.placeholder)}}function t1(t,n){t&1&&Q(0)}function n1(t,n){if(t&1&&(p(0,"span",11),D(1),g()),t&2){let e=q(2);w(),De(e.triggerValue)}}function i1(t,n){if(t&1&&(p(0,"span",5),oe(1,t1,1,0)(2,n1,2,1,"span",11),g()),t&2){let e=q();w(),se(e.customTrigger?1:2)}}function r1(t,n){if(t&1){let e=bt();p(0,"div",12,1),N("keydown",function(r){Be(e);let o=q();return Ve(o._handleKeydown(r))}),Q(2,1),g()}if(t&2){let e=q();Ot(e.panelClass),z("mat-select-panel-animations-enabled",!e._animationsDisabled)("mat-primary",(e._parentFormField==null?null:e._parentFormField.color)==="primary")("mat-accent",(e._parentFormField==null?null:e._parentFormField.color)==="accent")("mat-warn",(e._parentFormField==null?null:e._parentFormField.color)==="warn")("mat-undefined",!(e._parentFormField!=null&&e._parentFormField.color)),ue("id",e.id+"-panel")("aria-multiselectable",e.multiple)("aria-label",e.ariaLabel||null)("aria-labelledby",e._getPanelAriaLabelledby())}}var o1=new v("mat-select-scroll-strategy",{providedIn:"root",factory:()=>{let t=d(W);return()=>oo(t)}}),s1=new v("MAT_SELECT_CONFIG"),a1=new v("MatSelectTrigger"),nb=class{source;value;constructor(n,e){this.source=n,this.value=e}},xf=(()=>{class t{_viewportRuler=d(kn);_changeDetectorRef=d(Oe);_elementRef=d(R);_dir=d(Mt,{optional:!0});_idGenerator=d(rt);_renderer=d(ke);_parentFormField=d(bl,{optional:!0});ngControl=d(Mi,{self:!0,optional:!0});_liveAnnouncer=d(ul);_defaultOptions=d(s1,{optional:!0});_animationsDisabled=Fe();_popoverLocation;_initialized=new C;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"}];_scrollOptionIntoView(e){let i=this.options.toArray()[e];if(i){let r=this.panel.nativeElement,o=Tx(e,this.options,this.optionGroups),s=i._getHostElement();e===0&&o===1?r.scrollTop=0:r.scrollTop=kx(s.offsetTop,s.offsetHeight,r.scrollTop,r.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new nb(this,e)}_scrollStrategyFactory=d(o1);_panelOpen=!1;_compareWith=(e,i)=>e===i;_uid=this._idGenerator.getId("mat-select-");_triggerAriaLabelledBy=null;_previousControl;_destroy=new C;_errorStateTracker;stateChanges=new C;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId("mat-select-value-");_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||"";get focused(){return this._focused||this._panelOpen}_focused=!1;controlType="mat-select";trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=F(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(vs.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}_value;ariaLabel="";ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<"u"?this._defaultOptions.panelWidth:"auto";canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=_r(()=>{let e=this.options;return e?e.changes.pipe(kt(e),Qe(()=>$t(...e.map(i=>i.onSelectionChange)))):this._initialized.pipe(Qe(()=>this.optionSelectionChanges))});openedChange=new A;_openedStream=this.openedChange.pipe(ge(e=>e),ee(()=>{}));_closedStream=this.openedChange.pipe(ge(e=>!e),ee(()=>{}));selectionChange=new A;valueChange=new A;constructor(){let e=d(lf),i=d(El,{optional:!0}),r=d(xl,{optional:!0}),o=d(new Yi("tabindex"),{optional:!0}),s=d(Al,{optional:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new ys(e,this.ngControl,r,i,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=o==null?0:parseInt(o)||0,this._popoverLocation=s?.usePopover===!1?null:"inline",this.id=this.id}ngOnInit(){this._selectionModel=new Sl(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(me(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(me(this._destroy)).subscribe(e=>{e.added.forEach(i=>i.select()),e.removed.forEach(i=>i.deselect())}),this.options.changes.pipe(kt(null),me(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),i=this.ngControl;if(e!==this._triggerAriaLabelledBy){let r=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?r.setAttribute("aria-labelledby",e):r.removeAttribute("aria-labelledby")}i&&(this._previousControl!==i.control&&(this._previousControl!==void 0&&i.disabled!==null&&i.disabled!==this.disabled&&(this.disabled=i.disabled),this._previousControl=i.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete(),this._clearFromModal()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._applyModalPanelOwnership(),this._panelOpen=!0,this._overlayDir.positionChange.pipe(Tt(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}_trackedModal=null;_applyModalPanelOwnership(){let e=this._elementRef.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');if(!e)return;let i=`${this.id}-panel`;this._trackedModal&&Hu(this._trackedModal,"aria-owns",i),mv(e,"aria-owns",i),this._trackedModal=e}_clearFromModal(){if(!this._trackedModal)return;let e=`${this.id}-panel`;Hu(this._trackedModal,"aria-owns",e),this._trackedModal=null}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?"rtl":"ltr"),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{i(),clearTimeout(r),this._cleanupDetach=void 0};let e=this.panel.nativeElement,i=this._renderer.listen(e,"animationend",o=>{o.animationName==="_mat-select-exit"&&(this._cleanupDetach?.(),this._detachOverlay())}),r=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);e.classList.add("mat-select-panel-exit")}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return"";if(this._multiple){let e=this._selectionModel.selected.map(i=>i.viewValue);return this._isRtl()&&e.reverse(),e.join(", ")}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value==="rtl":!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let i=e.keyCode,r=i===40||i===38||i===37||i===39,o=i===13||i===32,s=this._keyManager;if(!s.isTyping()&&o&&!Ut(e)||(this.multiple||e.altKey)&&r)e.preventDefault(),this.open();else if(!this.multiple){let a=this.selected;s.onKeydown(e);let l=this.selected;l&&a!==l&&this._liveAnnouncer.announce(l.viewValue,1e4)}}_handleOpenKeydown(e){let i=this._keyManager,r=e.keyCode,o=r===40||r===38,s=i.isTyping();if(o&&e.altKey)e.preventDefault(),this.close();else if(!s&&(r===13||r===32)&&i.activeItem&&!Ut(e))e.preventDefault(),i.activeItem._selectViaInteraction();else if(!s&&this._multiple&&r===65&&e.ctrlKey){e.preventDefault();let a=this.options.some(l=>!l.disabled&&!l.selected);this.options.forEach(l=>{l.disabled||(a?l.select():l.deselect())})}else{let a=i.activeItemIndex;i.onKeydown(e),this._multiple&&o&&e.shiftKey&&i.activeItem&&i.activeItemIndex!==a&&i.activeItem._selectViaInteraction()}}_handleOverlayKeydown(e){e.keyCode===27&&!Ut(e)&&(e.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(i=>i.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)Array.isArray(e),e.forEach(i=>this._selectOptionByValue(i)),this._sortValues();else{let i=this._selectOptionByValue(e);i?this._keyManager.updateActiveItem(i):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let i=this.options.find(r=>{if(this._selectionModel.isSelected(r))return!1;try{return(r.value!=null||this.canSelectNullableOptions)&&this._compareWith(r.value,e)}catch{return!1}});return i&&this._selectionModel.select(i),i}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_skipPredicate=e=>this.panelOpen?!1:e.disabled;_getOverlayWidth(e){return this.panelWidth==="auto"?(e instanceof Ts?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?"":this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new fl(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?"rtl":"ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=$t(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(me(e)).subscribe(i=>{this._onSelect(i.source,i.isUserInput),i.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),$t(...this.options.map(i=>i._stateChanges)).pipe(me(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,i){let r=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(r!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),i&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),i&&this.focus())),r!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((i,r)=>this.sortComparator?this.sortComparator(i,r,e):e.indexOf(i)-e.indexOf(r)),this.stateChanges.next()}}_propagateChanges(e){let i;this.multiple?i=this.selected.map(r=>r.value):i=this.selected?this.selected.value:e,this._value=i,this.valueChange.emit(i),this._onChange(i),this.selectionChange.emit(this._getChangeEvent(i)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let i=0;i<this.options.length;i++)if(!this.options.get(i).disabled){e=i;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,i=e?e+" ":"";return this.ariaLabelledby?i+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||"";return this.ariaLabelledby&&(e+=" "+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let i=this._elementRef.nativeElement;e.length?i.setAttribute("aria-describedby",e.join(" ")):i.removeAttribute("aria-describedby")}onContainerClick(e){let i=yt(e);i&&(i.tagName==="MAT-OPTION"||i.classList.contains("cdk-overlay-backdrop")||i.closest(".mat-mdc-select-panel"))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=E({type:t,selectors:[["mat-select"]],contentQueries:function(i,r,o){if(i&1&&_t(o,a1,5)(o,sr,5)(o,eb,5),i&2){let s;L(s=j())&&(r.customTrigger=s.first),L(s=j())&&(r.options=s),L(s=j())&&(r.optionGroups=s)}},viewQuery:function(i,r){if(i&1&&Ue(QP,5)(KP,5)(Df,5),i&2){let o;L(o=j())&&(r.trigger=o.first),L(o=j())&&(r.panel=o.first),L(o=j())&&(r._overlayDir=o.first)}},hostAttrs:["role","combobox","aria-haspopup","listbox",1,"mat-mdc-select"],hostVars:21,hostBindings:function(i,r){i&1&&N("keydown",function(s){return r._handleKeydown(s)})("focus",function(){return r._onFocus()})("blur",function(){return r._onBlur()}),i&2&&(ue("id",r.id)("tabindex",r.disabled?-1:r.tabIndex)("aria-controls",r.panelOpen?r.id+"-panel":null)("aria-expanded",r.panelOpen)("aria-label",r.ariaLabel||null)("aria-required",r.required.toString())("aria-disabled",r.disabled.toString())("aria-invalid",r.errorState)("aria-activedescendant",r._getAriaActiveDescendant()),z("mat-mdc-select-disabled",r.disabled)("mat-mdc-select-invalid",r.errorState)("mat-mdc-select-required",r.required)("mat-mdc-select-empty",r.empty)("mat-mdc-select-multiple",r.multiple)("mat-select-open",r.panelOpen))},inputs:{userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],panelClass:"panelClass",disabled:[2,"disabled","disabled",K],disableRipple:[2,"disableRipple","disableRipple",K],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:Qn(e)],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",K],placeholder:"placeholder",required:[2,"required","required",K],multiple:[2,"multiple","multiple",K],disableOptionCentering:[2,"disableOptionCentering","disableOptionCentering",K],compareWith:"compareWith",value:"value",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],errorStateMatcher:"errorStateMatcher",typeaheadDebounceInterval:[2,"typeaheadDebounceInterval","typeaheadDebounceInterval",Qn],sortComparator:"sortComparator",id:"id",panelWidth:"panelWidth",canSelectNullableOptions:[2,"canSelectNullableOptions","canSelectNullableOptions",K]},outputs:{openedChange:"openedChange",_openedStream:"opened",_closedStream:"closed",selectionChange:"selectionChange",valueChange:"valueChange"},exportAs:["matSelect"],features:[Re([{provide:vl,useExisting:t},{provide:Jv,useExisting:t}]),He],ngContentSelectors:JP,decls:11,vars:10,consts:[["fallbackOverlayOrigin","cdkOverlayOrigin","trigger",""],["panel",""],["cdk-overlay-origin","",1,"mat-mdc-select-trigger",3,"click"],[1,"mat-mdc-select-value"],[1,"mat-mdc-select-placeholder","mat-mdc-select-min-line"],[1,"mat-mdc-select-value-text"],[1,"mat-mdc-select-arrow-wrapper"],[1,"mat-mdc-select-arrow"],["viewBox","0 0 24 24","width","24px","height","24px","focusable","false","aria-hidden","true"],["d","M7 10l5 5 5-5z"],["cdk-connected-overlay","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"detach","backdropClick","overlayKeydown","cdkConnectedOverlayDisableClose","cdkConnectedOverlayPanelClass","cdkConnectedOverlayScrollStrategy","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayWidth","cdkConnectedOverlayFlexibleDimensions","cdkConnectedOverlayUsePopover"],[1,"mat-mdc-select-min-line"],["role","listbox","tabindex","-1",1,"mat-mdc-select-panel","mdc-menu-surface","mdc-menu-surface--open",3,"keydown"]],template:function(i,r){if(i&1&&(Ie(XP),p(0,"div",2,0),N("click",function(){return r.open()}),p(3,"div",3),oe(4,e1,2,1,"span",4)(5,i1,3,1,"span",5),g(),p(6,"div",6)(7,"div",7),fa(),p(8,"svg",8),ne(9,"path",9),g()()()(),Bt(10,r1,3,16,"ng-template",10),N("detach",function(){return r.close()})("backdropClick",function(){return r.close()})("overlayKeydown",function(s){return r._handleOverlayKeydown(s)})),i&2){let o=cn(1);w(3),ue("id",r._valueId),w(),se(r.empty?4:5),w(6),Z("cdkConnectedOverlayDisableClose",!0)("cdkConnectedOverlayPanelClass",r._overlayPanelClass)("cdkConnectedOverlayScrollStrategy",r._scrollStrategy)("cdkConnectedOverlayOrigin",r._preferredOverlayOrigin||o)("cdkConnectedOverlayPositions",r._positions)("cdkConnectedOverlayWidth",r._overlayWidth)("cdkConnectedOverlayFlexibleDimensions",!0)("cdkConnectedOverlayUsePopover",r._popoverLocation)}},dependencies:[Ts,Df],styles:[`@keyframes _mat-select-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-select-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-select {
  display: inline-block;
  width: 100%;
  outline: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--mat-select-enabled-trigger-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-select-trigger-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-select-trigger-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-select-trigger-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-select-trigger-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-select-trigger-text-tracking, var(--mat-sys-body-large-tracking));
}

div.mat-mdc-select-panel {
  box-shadow: var(--mat-select-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}

.mat-mdc-select-disabled {
  color: var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-select-disabled .mat-mdc-select-placeholder {
  color: var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-select-trigger {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  width: 100%;
}
.mat-mdc-select-disabled .mat-mdc-select-trigger {
  -webkit-user-select: none;
  user-select: none;
  cursor: default;
}

.mat-mdc-select-value {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.mat-mdc-select-value-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.mat-mdc-select-arrow-wrapper {
  height: 24px;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
}
.mat-form-field-appearance-fill .mdc-text-field--no-label .mat-mdc-select-arrow-wrapper {
  transform: none;
}

.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-invalid .mat-mdc-select-arrow,
.mat-form-field-invalid:not(.mat-form-field-disabled) .mat-mdc-form-field-infix::after {
  color: var(--mat-select-invalid-arrow-color, var(--mat-sys-error));
}

.mat-mdc-select-arrow {
  width: 10px;
  height: 5px;
  position: relative;
  color: var(--mat-select-enabled-arrow-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-form-field.mat-focused .mat-mdc-select-arrow {
  color: var(--mat-select-focused-arrow-color, var(--mat-sys-primary));
}
.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-disabled .mat-mdc-select-arrow {
  color: var(--mat-select-disabled-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-select-open .mat-mdc-select-arrow {
  transform: rotate(180deg);
}
.mat-form-field-animations-enabled .mat-mdc-select-arrow {
  transition: transform 80ms linear;
}
.mat-mdc-select-arrow svg {
  fill: currentColor;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
@media (forced-colors: active) {
  .mat-mdc-select-arrow svg {
    fill: CanvasText;
  }
  .mat-mdc-select-disabled .mat-mdc-select-arrow svg {
    fill: GrayText;
  }
}

div.mat-mdc-select-panel {
  width: 100%;
  max-height: 275px;
  outline: 0;
  overflow: auto;
  padding: 8px 0;
  border-radius: 4px;
  box-sizing: border-box;
  position: relative;
  background-color: var(--mat-select-panel-background-color, var(--mat-sys-surface-container));
}
@media (forced-colors: active) {
  div.mat-mdc-select-panel {
    outline: solid 1px;
  }
}
.cdk-overlay-pane:not(.mat-mdc-select-panel-above) div.mat-mdc-select-panel {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  transform-origin: top center;
}
.mat-mdc-select-panel-above div.mat-mdc-select-panel {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  transform-origin: bottom center;
}

.mat-select-panel-animations-enabled {
  animation: _mat-select-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-select-panel-animations-enabled.mat-select-panel-exit {
  animation: _mat-select-exit 100ms linear;
}

.mat-mdc-select-placeholder {
  transition: color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);
  color: var(--mat-select-placeholder-text-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-form-field:not(.mat-form-field-animations-enabled) .mat-mdc-select-placeholder, ._mat-animation-noopable .mat-mdc-select-placeholder {
  transition: none;
}
.mat-form-field-hide-placeholder .mat-mdc-select-placeholder {
  color: transparent;
  -webkit-text-fill-color: transparent;
  transition: none;
  display: block;
}

.mat-mdc-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper {
  cursor: pointer;
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label {
  max-width: calc(100% - 18px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above {
  max-width: calc(100% / 0.75 - 24px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch {
  max-width: calc(100% - 60px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch {
  max-width: calc(100% - 24px);
}

.mat-mdc-select-min-line:empty::before {
  content: " ";
  white-space: pre;
  width: 1px;
  display: inline-block;
  visibility: hidden;
}

.mat-form-field-appearance-fill .mat-mdc-select-arrow-wrapper {
  transform: var(--mat-select-arrow-transform, translateY(-8px));
}
`],encapsulation:2,changeDetection:0})}return t})();var If=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=U({type:t});static \u0275inj=H({imports:[ks,tb,he,ri,en,tb]})}return t})();var l1=(t,n)=>n.value;function c1(t,n){if(t&1&&(p(0,"span"),D(1),g()),t&2){let e=q();w(),De(e.statusLabels[e.currentStatus])}}function d1(t,n){if(t&1&&(p(0,"mat-option",3),D(1),g()),t&2){let e=n.$implicit;Z("value",e.value),w(),De(e.label)}}function u1(t,n){if(t&1){let e=bt();p(0,"mat-form-field",0)(1,"mat-select",2),N("selectionChange",function(r){Be(e);let o=q();return Ve(o.onStatusChange(r.value))}),Dn(2,d1,2,2,"mat-option",3,l1),g()()}if(t&2){let e=q();w(),Z("value",e.currentStatus),w(),En(e.statusOptions)}}function f1(t,n){if(t&1&&(p(0,"p",1),D(1),g()),t&2){let e=q();w(),De(e.errorMessage)}}var As=class t{childSignal=Ne.required();disabled=yi();errorMessage="";statusOptions=[{value:"NOT_SET",label:"\u2014"},{value:"CHECKED_IN",label:"Incheckad"},{value:"CHECKED_OUT",label:"Utcheckad"},{value:"LEAVE",label:"Ledig"},{value:"ABSENT",label:"Fr\xE5nvarande"}];statusLabels=Object.fromEntries(this.statusOptions.map(n=>[n.value,n.label]));attendanceService=d(Ss);get currentStatus(){return this.attendanceService.getSignal(this.childSignal().id,oi())()??"NOT_SET"}constructor(){Yt(()=>{let n=this.childSignal();if(!n)return;let e=this.attendanceService.getSignal(n.id,oi());e()===null&&e.set(n.status??"NOT_SET")})}onStatusChange(n){let e=this.attendanceService.getSignal(this.childSignal().id,oi()),i=e();e.set(n),this.attendanceService.setAttendance(this.childSignal().id,oi(),n).subscribe({next:r=>e.set(r.status),error:r=>{console.error("Kunde inte spara",r),e.set(i),this.errorMessage="Misslyckades att spara till databasen.",setTimeout(()=>this.errorMessage="",2e3)}}),this.wsUpdateAttendance(n)}attendanceChangeEvent=new A;wsUpdateAttendance(n){let e={childId:this.childSignal().id,status:n};this.attendanceChangeEvent.emit(e)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=E({type:t,selectors:[["attendance-box"]],inputs:{childSignal:[1,"childSignal"],disabled:[1,"disabled"]},outputs:{childSignal:"childSignalChange",attendanceChangeEvent:"attendanceChangeEvent"},decls:4,vars:2,consts:[["appearance","outline","subscriptSizing","dynamic"],[1,"error-text"],[3,"selectionChange","value"],[3,"value"]],template:function(e,i){e&1&&(p(0,"div"),oe(1,c1,2,1,"span")(2,u1,4,1,"mat-form-field",0),oe(3,f1,2,1,"p",1),g()),e&2&&(w(),se(i.disabled()?1:2),w(2),se(i.errorMessage?3:-1))},dependencies:[If,ni,xf,sr,en],styles:[".error-text[_ngcontent-%COMP%]{color:red;font-size:16px;position:absolute}mat-form-field[_ngcontent-%COMP%]{--mat-form-field-container-height: 32px;--mat-form-field-container-vertical-padding: 6px}"]})};var Mf=class t{childSignal=Ne.required();months=["Januari","Februari","Mars","April","Maj","Juni","Juli","Augusti","September","Oktober","November","December"];days=["S\xF6ndag","M\xE5ndag","Tisdag","Onsdag","Torsdag","Fredag","L\xF6rdag"];attendanceChangeEvent=new A;wsUpdateAttendance(n){this.attendanceChangeEvent.emit(n)}getDate(){let n=new Date;return`${this.days[n.getDay()]} ${n.getDate()} ${this.months[n.getMonth()]} ${n.getFullYear()}`}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=E({type:t,selectors:[["child-display"]],inputs:{childSignal:[1,"childSignal"]},outputs:{childSignal:"childSignalChange",attendanceChangeEvent:"attendanceChangeEvent"},decls:6,vars:2,consts:[[1,"columnise"],[1,"rowise"],[3,"attendanceChangeEvent","childSignal"]],template:function(e,i){e&1&&(p(0,"div",0)(1,"p"),D(2),g(),p(3,"div",1),D(4," N\xE4rvaro: "),p(5,"attendance-box",2),N("attendanceChangeEvent",function(o){return i.wsUpdateAttendance(o)}),g()()()),e&2&&(w(2),De(i.getDate()),w(3),Z("childSignal",i.childSignal()))},dependencies:[As],styles:[".columnise[_ngcontent-%COMP%]{font:var(--mat-sys-label-large);display:flex;flex-direction:column;padding-left:16px}.rowise[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:baseline;gap:12px}"]})};var m1=["*"];var h1=["unscopedContent"],p1=["text"],g1=[[["","matListItemAvatar",""],["","matListItemIcon",""]],[["","matListItemTitle",""]],[["","matListItemLine",""]],"*",[["","matListItemMeta",""]],[["mat-divider"]]],v1=["[matListItemAvatar],[matListItemIcon]","[matListItemTitle]","[matListItemLine]","*","[matListItemMeta]","mat-divider"];var b1=new v("ListOption"),rb=(()=>{class t{_elementRef=d(R);constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275dir=M({type:t,selectors:[["","matListItemTitle",""]],hostAttrs:[1,"mat-mdc-list-item-title","mdc-list-item__primary-text"]})}return t})(),_1=(()=>{class t{_elementRef=d(R);constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275dir=M({type:t,selectors:[["","matListItemLine",""]],hostAttrs:[1,"mat-mdc-list-item-line","mdc-list-item__secondary-text"]})}return t})(),ob=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=M({type:t,selectors:[["","matListItemMeta",""]],hostAttrs:[1,"mat-mdc-list-item-meta","mdc-list-item__end"]})}return t})(),Rx=(()=>{class t{_listOption=d(b1,{optional:!0});constructor(){}_isAlignedAtStart(){return!this._listOption||this._listOption?._getTogglePosition()==="after"}static \u0275fac=function(i){return new(i||t)};static \u0275dir=M({type:t,hostVars:4,hostBindings:function(i,r){i&2&&z("mdc-list-item__start",r._isAlignedAtStart())("mdc-list-item__end",!r._isAlignedAtStart())}})}return t})(),y1=(()=>{class t extends Rx{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ge(t)))(r||t)}})();static \u0275dir=M({type:t,selectors:[["","matListItemAvatar",""]],hostAttrs:[1,"mat-mdc-list-item-avatar"],features:[be]})}return t})(),w1=(()=>{class t extends Rx{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ge(t)))(r||t)}})();static \u0275dir=M({type:t,selectors:[["","matListItemIcon",""]],hostAttrs:[1,"mat-mdc-list-item-icon"],features:[be]})}return t})(),C1=new v("MAT_LIST_CONFIG"),ib=(()=>{class t{_isNonInteractive=!0;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=ft(e)}_disableRipple=!1;get disabled(){return this._disabled()}set disabled(e){this._disabled.set(ft(e))}_disabled=F(!1);_defaultOptions=d(C1,{optional:!0});static \u0275fac=function(i){return new(i||t)};static \u0275dir=M({type:t,hostVars:1,hostBindings:function(i,r){i&2&&ue("aria-disabled",r.disabled)},inputs:{disableRipple:"disableRipple",disabled:"disabled"}})}return t})(),D1=(()=>{class t{_elementRef=d(R);_ngZone=d(k);_listBase=d(ib,{optional:!0});_platform=d(fe);_hostElement;_isButtonElement;_noopAnimations=Fe();_avatars;_icons;set lines(e){this._explicitLines=ti(e,null),this._updateItemLines(!1)}_explicitLines=null;get disableRipple(){return this.disabled||this._disableRipple||this._noopAnimations||!!this._listBase?.disableRipple}set disableRipple(e){this._disableRipple=ft(e)}_disableRipple=!1;get disabled(){return this._disabled()||!!this._listBase?.disabled}set disabled(e){this._disabled.set(ft(e))}_disabled=F(!1);_subscriptions=new ae;_rippleRenderer=null;_hasUnscopedTextContent=!1;rippleConfig;get rippleDisabled(){return this.disableRipple||!!this.rippleConfig.disabled}constructor(){d(ut).load(er);let e=d(ds,{optional:!0});this.rippleConfig=e||{},this._hostElement=this._elementRef.nativeElement,this._isButtonElement=this._hostElement.nodeName.toLowerCase()==="button",this._listBase&&!this._listBase._isNonInteractive&&this._initInteractiveListItem(),this._isButtonElement&&!this._hostElement.hasAttribute("type")&&this._hostElement.setAttribute("type","button")}ngAfterViewInit(){this._monitorProjectedLinesAndTitle(),this._updateItemLines(!0)}ngOnDestroy(){this._subscriptions.unsubscribe(),this._rippleRenderer!==null&&this._rippleRenderer._removeTriggerEvents()}_hasIconOrAvatar(){return!!(this._avatars.length||this._icons.length)}_initInteractiveListItem(){this._hostElement.classList.add("mat-mdc-list-item-interactive"),this._rippleRenderer=new Jr(this,this._ngZone,this._hostElement,this._platform,d(W)),this._rippleRenderer.setupTriggerEvents(this._hostElement)}_monitorProjectedLinesAndTitle(){this._ngZone.runOutsideAngular(()=>{this._subscriptions.add($t(this._lines.changes,this._titles.changes).subscribe(()=>this._updateItemLines(!1)))})}_updateItemLines(e){if(!this._lines||!this._titles||!this._unscopedContent)return;e&&this._checkDomForUnscopedTextContent();let i=this._explicitLines??this._inferLinesFromContent(),r=this._unscopedContent.nativeElement;if(this._hostElement.classList.toggle("mat-mdc-list-item-single-line",i<=1),this._hostElement.classList.toggle("mdc-list-item--with-one-line",i<=1),this._hostElement.classList.toggle("mdc-list-item--with-two-lines",i===2),this._hostElement.classList.toggle("mdc-list-item--with-three-lines",i===3),this._hasUnscopedTextContent){let o=this._titles.length===0&&i===1;r.classList.toggle("mdc-list-item__primary-text",o),r.classList.toggle("mdc-list-item__secondary-text",!o)}else r.classList.remove("mdc-list-item__primary-text"),r.classList.remove("mdc-list-item__secondary-text")}_inferLinesFromContent(){let e=this._titles.length+this._lines.length;return this._hasUnscopedTextContent&&(e+=1),e}_checkDomForUnscopedTextContent(){this._hasUnscopedTextContent=Array.from(this._unscopedContent.nativeElement.childNodes).filter(e=>e.nodeType!==e.COMMENT_NODE).some(e=>!!(e.textContent&&e.textContent.trim()))}static \u0275fac=function(i){return new(i||t)};static \u0275dir=M({type:t,contentQueries:function(i,r,o){if(i&1&&_t(o,y1,4)(o,w1,4),i&2){let s;L(s=j())&&(r._avatars=s),L(s=j())&&(r._icons=s)}},hostVars:4,hostBindings:function(i,r){i&2&&(ue("aria-disabled",r.disabled)("disabled",r._isButtonElement&&r.disabled||null),z("mdc-list-item--disabled",r.disabled))},inputs:{lines:"lines",disableRipple:"disableRipple",disabled:"disabled"}})}return t})();var Nx=(()=>{class t extends ib{_isNonInteractive=!1;static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ge(t)))(r||t)}})();static \u0275cmp=E({type:t,selectors:[["mat-action-list"]],hostAttrs:["role","group",1,"mat-mdc-action-list","mat-mdc-list-base","mdc-list"],exportAs:["matActionList"],features:[Re([{provide:ib,useExisting:t}]),be],ngContentSelectors:m1,decls:1,vars:0,template:function(i,r){i&1&&(Ie(),Q(0))},styles:[`.mdc-list {
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
`],encapsulation:2,changeDetection:0})}return t})();var Ox=(()=>{class t extends D1{_lines;_titles;_meta;_unscopedContent;_itemText;get activated(){return this._activated}set activated(e){this._activated=ft(e)}_activated=!1;_getAriaCurrent(){return this._hostElement.nodeName==="A"&&this._activated?"page":null}_hasBothLeadingAndTrailing(){return this._meta.length!==0&&(this._avatars.length!==0||this._icons.length!==0)}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ge(t)))(r||t)}})();static \u0275cmp=E({type:t,selectors:[["mat-list-item"],["a","mat-list-item",""],["button","mat-list-item",""]],contentQueries:function(i,r,o){if(i&1&&_t(o,_1,5)(o,rb,5)(o,ob,5),i&2){let s;L(s=j())&&(r._lines=s),L(s=j())&&(r._titles=s),L(s=j())&&(r._meta=s)}},viewQuery:function(i,r){if(i&1&&Ue(h1,5)(p1,5),i&2){let o;L(o=j())&&(r._unscopedContent=o.first),L(o=j())&&(r._itemText=o.first)}},hostAttrs:[1,"mat-mdc-list-item","mdc-list-item"],hostVars:13,hostBindings:function(i,r){i&2&&(ue("aria-current",r._getAriaCurrent()),z("mdc-list-item--activated",r.activated)("mdc-list-item--with-leading-avatar",r._avatars.length!==0)("mdc-list-item--with-leading-icon",r._icons.length!==0)("mdc-list-item--with-trailing-meta",r._meta.length!==0)("mat-mdc-list-item-both-leading-and-trailing",r._hasBothLeadingAndTrailing())("_mat-animation-noopable",r._noopAnimations))},inputs:{activated:"activated"},exportAs:["matListItem"],features:[be],ngContentSelectors:v1,decls:10,vars:0,consts:[["unscopedContent",""],[1,"mdc-list-item__content"],[1,"mat-mdc-list-item-unscoped-content",3,"cdkObserveContent"],[1,"mat-focus-indicator"]],template:function(i,r){i&1&&(Ie(g1),Q(0),p(1,"span",1),Q(2,1),Q(3,2),p(4,"span",2,0),N("cdkObserveContent",function(){return r._updateItemLines(!0)}),Q(6,3),g()(),Q(7,4),Q(8,5),ne(9,"div",3))},dependencies:[Lu],encapsulation:2,changeDetection:0})}return t})();var Fx=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=U({type:t});static \u0275inj=H({imports:[ss,us,Ef,he,Ms]})}return t})();var Sf=class t{url=`${St.apiUrl}/api/children/attendance`;urlPerGroup=`${St.apiUrl}/api/children/attendance/group`;http=d(xt);getChildren(){return this.http.get(this.url)}getChildrenByGroup(n,e){let i=new Ft().set("groupId",n);return e&&(i=i.set("date",e)),this.http.get(this.urlPerGroup,{params:i})}static \u0275fac=function(e){return new(e||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})};var x1=["tooltip"],I1=20;var M1=new v("mat-tooltip-scroll-strategy",{providedIn:"root",factory:()=>{let t=d(W);return()=>oo(t,{scrollThrottle:I1})}}),S1=new v("mat-tooltip-default-options",{providedIn:"root",factory:()=>({showDelay:0,hideDelay:0,touchendHideDelay:1500})});var Px="tooltip-panel",T1={passive:!0},k1=8,A1=8,R1=24,N1=200,sb=(()=>{class t{_elementRef=d(R);_ngZone=d(k);_platform=d(fe);_ariaDescriber=d(KD);_focusMonitor=d(Zr);_dir=d(Mt);_injector=d(W);_viewContainerRef=d(lt);_mediaMatcher=d(os);_document=d(V);_renderer=d(ke);_animationsDisabled=Fe();_defaultOptions=d(S1,{optional:!0});_overlayRef=null;_tooltipInstance=null;_overlayPanelClass;_portal;_position="below";_positionAtOrigin=!1;_disabled=!1;_tooltipClass;_viewInitialized=!1;_pointerExitEventsInitialized=!1;_tooltipComponent=Lx;_viewportMargin=8;_currentPosition;_cssClassPrefix="mat-mdc";_ariaDescriptionPending=!1;_dirSubscribed=!1;get position(){return this._position}set position(e){e!==this._position&&(this._position=e,this._overlayRef&&(this._updatePosition(this._overlayRef),this._tooltipInstance?.show(0),this._overlayRef.updatePosition()))}get positionAtOrigin(){return this._positionAtOrigin}set positionAtOrigin(e){this._positionAtOrigin=ft(e),this._detach(),this._overlayRef=null}get disabled(){return this._disabled}set disabled(e){let i=ft(e);this._disabled!==i&&(this._disabled=i,i?this.hide(0):this._setupPointerEnterEventsIfNeeded(),this._syncAriaDescription(this.message))}get showDelay(){return this._showDelay}set showDelay(e){this._showDelay=ti(e)}_showDelay;get hideDelay(){return this._hideDelay}set hideDelay(e){this._hideDelay=ti(e),this._tooltipInstance&&(this._tooltipInstance._mouseLeaveHideDelay=this._hideDelay)}_hideDelay;touchGestures="auto";get message(){return this._message}set message(e){let i=this._message;this._message=e!=null?String(e).trim():"",!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage()),this._syncAriaDescription(i)}_message="";get tooltipClass(){return this._tooltipClass}set tooltipClass(e){this._tooltipClass=e,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass)}_eventCleanups=[];_touchstartTimeout=null;_destroyed=new C;_isDestroyed=!1;constructor(){let e=this._defaultOptions;e&&(this._showDelay=e.showDelay,this._hideDelay=e.hideDelay,e.position&&(this.position=e.position),e.positionAtOrigin&&(this.positionAtOrigin=e.positionAtOrigin),e.touchGestures&&(this.touchGestures=e.touchGestures),e.tooltipClass&&(this.tooltipClass=e.tooltipClass)),this._viewportMargin=k1}ngAfterViewInit(){this._viewInitialized=!0,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe(me(this._destroyed)).subscribe(e=>{e?e==="keyboard"&&this._ngZone.run(()=>this.show()):this._ngZone.run(()=>this.hide(0))})}ngOnDestroy(){let e=this._elementRef.nativeElement;this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),this._eventCleanups.forEach(i=>i()),this._eventCleanups.length=0,this._destroyed.next(),this._destroyed.complete(),this._isDestroyed=!0,this._ariaDescriber.removeDescription(e,this.message,"tooltip"),this._focusMonitor.stopMonitoring(e)}show(e=this.showDelay,i){if(this.disabled||!this.message||this._isTooltipVisible()){this._tooltipInstance?._cancelPendingAnimations();return}let r=this._createOverlay(i);this._detach(),this._portal=this._portal||new rr(this._tooltipComponent,this._viewContainerRef);let o=this._tooltipInstance=r.attach(this._portal).instance;o._triggerElement=this._elementRef.nativeElement,o._mouseLeaveHideDelay=this._hideDelay,o.afterHidden().pipe(me(this._destroyed)).subscribe(()=>this._detach()),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),o.show(e)}hide(e=this.hideDelay){let i=this._tooltipInstance;i&&(i.isVisible()?i.hide(e):(i._cancelPendingAnimations(),this._detach()))}toggle(e){this._isTooltipVisible()?this.hide():this.show(void 0,e)}_isTooltipVisible(){return!!this._tooltipInstance&&this._tooltipInstance.isVisible()}_createOverlay(e){if(this._overlayRef){let s=this._overlayRef.getConfig().positionStrategy;if((!this.positionAtOrigin||!e)&&s._origin instanceof R)return this._overlayRef;this._detach()}let i=this._injector.get(or).getAncestorScrollContainers(this._elementRef),r=`${this._cssClassPrefix}-${Px}`,o=kl(this._injector,this.positionAtOrigin?e||this._elementRef:this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(!1).withViewportMargin(this._viewportMargin).withScrollableContainers(i).withPopoverLocation("global");return o.positionChanges.pipe(me(this._destroyed)).subscribe(s=>{this._updateCurrentPositionClass(s.connectionPair),this._tooltipInstance&&s.scrollableViewProperties.isOverlayClipped&&this._tooltipInstance.isVisible()&&this._ngZone.run(()=>this.hide(0))}),this._overlayRef=so(this._injector,{direction:this._dir,positionStrategy:o,panelClass:this._overlayPanelClass?[...this._overlayPanelClass,r]:r,scrollStrategy:this._injector.get(M1)(),disableAnimations:this._animationsDisabled,eventPredicate:this._overlayEventPredicate}),this._updatePosition(this._overlayRef),this._overlayRef.detachments().pipe(me(this._destroyed)).subscribe(()=>this._detach()),this._overlayRef.outsidePointerEvents().pipe(me(this._destroyed)).subscribe(()=>this._tooltipInstance?._handleBodyInteraction()),this._overlayRef.keydownEvents().pipe(me(this._destroyed)).subscribe(s=>{s.preventDefault(),s.stopPropagation(),this._ngZone.run(()=>this.hide(0))}),this._defaultOptions?.disableTooltipInteractivity&&this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`),this._dirSubscribed||(this._dirSubscribed=!0,this._dir.change.pipe(me(this._destroyed)).subscribe(()=>{this._overlayRef&&this._updatePosition(this._overlayRef)})),this._overlayRef}_detach(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null}_updatePosition(e){let i=e.getConfig().positionStrategy,r=this._getOrigin(),o=this._getOverlayPosition();i.withPositions([this._addOffset(_(_({},r.main),o.main)),this._addOffset(_(_({},r.fallback),o.fallback))])}_addOffset(e){let i=A1,r=!this._dir||this._dir.value=="ltr";return e.originY==="top"?e.offsetY=-i:e.originY==="bottom"?e.offsetY=i:e.originX==="start"?e.offsetX=r?-i:i:e.originX==="end"&&(e.offsetX=r?i:-i),e}_getOrigin(){let e=!this._dir||this._dir.value=="ltr",i=this.position,r;i=="above"||i=="below"?r={originX:"center",originY:i=="above"?"top":"bottom"}:i=="before"||i=="left"&&e||i=="right"&&!e?r={originX:"start",originY:"center"}:(i=="after"||i=="right"&&e||i=="left"&&!e)&&(r={originX:"end",originY:"center"});let{x:o,y:s}=this._invertPosition(r.originX,r.originY);return{main:r,fallback:{originX:o,originY:s}}}_getOverlayPosition(){let e=!this._dir||this._dir.value=="ltr",i=this.position,r;i=="above"?r={overlayX:"center",overlayY:"bottom"}:i=="below"?r={overlayX:"center",overlayY:"top"}:i=="before"||i=="left"&&e||i=="right"&&!e?r={overlayX:"end",overlayY:"center"}:(i=="after"||i=="right"&&e||i=="left"&&!e)&&(r={overlayX:"start",overlayY:"center"});let{x:o,y:s}=this._invertPosition(r.overlayX,r.overlayY);return{main:r,fallback:{overlayX:o,overlayY:s}}}_updateTooltipMessage(){this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),Xe(()=>{this._tooltipInstance&&this._overlayRef.updatePosition()},{injector:this._injector}))}_setTooltipClass(e){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=e instanceof Set?Array.from(e):e,this._tooltipInstance._markForCheck())}_invertPosition(e,i){return this.position==="above"||this.position==="below"?i==="top"?i="bottom":i==="bottom"&&(i="top"):e==="end"?e="start":e==="start"&&(e="end"),{x:e,y:i}}_updateCurrentPositionClass(e){let{overlayY:i,originX:r,originY:o}=e,s;if(i==="center"?this._dir&&this._dir.value==="rtl"?s=r==="end"?"left":"right":s=r==="start"?"left":"right":s=i==="bottom"&&o==="top"?"above":"below",s!==this._currentPosition){let a=this._overlayRef;if(a){let l=`${this._cssClassPrefix}-${Px}-`;a.removePanelClass(l+this._currentPosition),a.addPanelClass(l+s)}this._currentPosition=s}}_setupPointerEnterEventsIfNeeded(){this._disabled||!this.message||!this._viewInitialized||this._eventCleanups.length||(this._isTouchPlatform()?this.touchGestures!=="off"&&(this._disableNativeGesturesIfNecessary(),this._addListener("touchstart",e=>{let i=e.targetTouches?.[0],r=i?{x:i.clientX,y:i.clientY}:void 0;this._setupPointerExitEventsIfNeeded(),this._touchstartTimeout&&clearTimeout(this._touchstartTimeout);let o=500;this._touchstartTimeout=setTimeout(()=>{this._touchstartTimeout=null,this.show(void 0,r)},this._defaultOptions?.touchLongPressShowDelay??o)})):this._addListener("mouseenter",e=>{this._setupPointerExitEventsIfNeeded();let i;e.x!==void 0&&e.y!==void 0&&(i=e),this.show(void 0,i)}))}_setupPointerExitEventsIfNeeded(){if(!this._pointerExitEventsInitialized){if(this._pointerExitEventsInitialized=!0,!this._isTouchPlatform())this._addListener("mouseleave",e=>{let i=e.relatedTarget;(!i||!this._overlayRef?.overlayElement.contains(i))&&this.hide()}),this._addListener("wheel",e=>{if(this._isTooltipVisible()){let i=this._document.elementFromPoint(e.clientX,e.clientY),r=this._elementRef.nativeElement;i!==r&&!r.contains(i)&&this.hide()}});else if(this.touchGestures!=="off"){this._disableNativeGesturesIfNecessary();let e=()=>{this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this.hide(this._defaultOptions?.touchendHideDelay)};this._addListener("touchend",e),this._addListener("touchcancel",e)}}}_addListener(e,i){this._eventCleanups.push(this._renderer.listen(this._elementRef.nativeElement,e,i,T1))}_isTouchPlatform(){let e=this._defaultOptions?.detectHoverCapability;return typeof e=="function"?!e():this._platform.IOS||this._platform.ANDROID?!0:this._platform.isBrowser?!!e&&this._mediaMatcher.matchMedia("(any-hover: none)").matches:!1}_disableNativeGesturesIfNecessary(){let e=this.touchGestures;if(e!=="off"){let i=this._elementRef.nativeElement,r=i.style;(e==="on"||i.nodeName!=="INPUT"&&i.nodeName!=="TEXTAREA")&&(r.userSelect=r.msUserSelect=r.webkitUserSelect=r.MozUserSelect="none"),(e==="on"||!i.draggable)&&(r.webkitUserDrag="none"),r.touchAction="none",r.webkitTapHighlightColor="transparent"}}_syncAriaDescription(e){this._ariaDescriptionPending||(this._ariaDescriptionPending=!0,this._ariaDescriber.removeDescription(this._elementRef.nativeElement,e,"tooltip"),this._isDestroyed||Xe({write:()=>{this._ariaDescriptionPending=!1,this.message&&!this.disabled&&this._ariaDescriber.describe(this._elementRef.nativeElement,this.message,"tooltip")}},{injector:this._injector}))}_overlayEventPredicate=e=>e.type==="keydown"?this._isTooltipVisible()&&e.keyCode===27&&!Ut(e):!0;static \u0275fac=function(i){return new(i||t)};static \u0275dir=M({type:t,selectors:[["","matTooltip",""]],hostAttrs:[1,"mat-mdc-tooltip-trigger"],hostVars:2,hostBindings:function(i,r){i&2&&z("mat-mdc-tooltip-disabled",r.disabled)},inputs:{position:[0,"matTooltipPosition","position"],positionAtOrigin:[0,"matTooltipPositionAtOrigin","positionAtOrigin"],disabled:[0,"matTooltipDisabled","disabled"],showDelay:[0,"matTooltipShowDelay","showDelay"],hideDelay:[0,"matTooltipHideDelay","hideDelay"],touchGestures:[0,"matTooltipTouchGestures","touchGestures"],message:[0,"matTooltip","message"],tooltipClass:[0,"matTooltipClass","tooltipClass"]},exportAs:["matTooltip"]})}return t})(),Lx=(()=>{class t{_changeDetectorRef=d(Oe);_elementRef=d(R);_isMultiline=!1;message;tooltipClass;_showTimeoutId;_hideTimeoutId;_triggerElement;_mouseLeaveHideDelay;_animationsDisabled=Fe();_tooltip;_closeOnInteraction=!1;_isVisible=!1;_onHide=new C;_showAnimation="mat-mdc-tooltip-show";_hideAnimation="mat-mdc-tooltip-hide";constructor(){}show(e){this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=setTimeout(()=>{this._toggleVisibility(!0),this._showTimeoutId=void 0},e)}hide(e){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId=setTimeout(()=>{this._toggleVisibility(!1),this._hideTimeoutId=void 0},e)}afterHidden(){return this._onHide}isVisible(){return this._isVisible}ngOnDestroy(){this._cancelPendingAnimations(),this._onHide.complete(),this._triggerElement=null}_handleBodyInteraction(){this._closeOnInteraction&&this.hide(0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_handleMouseLeave({relatedTarget:e}){(!e||!this._triggerElement.contains(e))&&(this.isVisible()?this.hide(this._mouseLeaveHideDelay):this._finalizeAnimation(!1))}_onShow(){this._isMultiline=this._isTooltipMultiline(),this._markForCheck()}_isTooltipMultiline(){let e=this._elementRef.nativeElement.getBoundingClientRect();return e.height>R1&&e.width>=N1}_handleAnimationEnd({animationName:e}){(e===this._showAnimation||e===this._hideAnimation)&&this._finalizeAnimation(e===this._showAnimation)}_cancelPendingAnimations(){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=this._hideTimeoutId=void 0}_finalizeAnimation(e){e?this._closeOnInteraction=!0:this.isVisible()||this._onHide.next()}_toggleVisibility(e){let i=this._tooltip.nativeElement,r=this._showAnimation,o=this._hideAnimation;if(i.classList.remove(e?o:r),i.classList.add(e?r:o),this._isVisible!==e&&(this._isVisible=e,this._changeDetectorRef.markForCheck()),e&&!this._animationsDisabled&&typeof getComputedStyle=="function"){let s=getComputedStyle(i);(s.getPropertyValue("animation-duration")==="0s"||s.getPropertyValue("animation-name")==="none")&&(this._animationsDisabled=!0)}e&&this._onShow(),this._animationsDisabled&&(i.classList.add("_mat-animation-noopable"),this._finalizeAnimation(e))}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=E({type:t,selectors:[["mat-tooltip-component"]],viewQuery:function(i,r){if(i&1&&Ue(x1,7),i&2){let o;L(o=j())&&(r._tooltip=o.first)}},hostAttrs:["aria-hidden","true"],hostBindings:function(i,r){i&1&&N("mouseleave",function(s){return r._handleMouseLeave(s)})},decls:4,vars:5,consts:[["tooltip",""],[1,"mdc-tooltip","mat-mdc-tooltip",3,"animationend"],[1,"mat-mdc-tooltip-surface","mdc-tooltip__surface"]],template:function(i,r){i&1&&(Vt(0,"div",1,0),Pd("animationend",function(s){return r._handleAnimationEnd(s)}),Vt(2,"div",2),D(3),Qt()()),i&2&&(Ot(r.tooltipClass),z("mdc-tooltip--multiline",r._isMultiline),w(3),De(r.message))},styles:[`.mat-mdc-tooltip {
  position: relative;
  transform: scale(0);
  display: inline-flex;
}
.mat-mdc-tooltip::before {
  content: "";
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  position: absolute;
}
.mat-mdc-tooltip-panel-below .mat-mdc-tooltip::before {
  top: -8px;
}
.mat-mdc-tooltip-panel-above .mat-mdc-tooltip::before {
  bottom: -8px;
}
.mat-mdc-tooltip-panel-right .mat-mdc-tooltip::before {
  left: -8px;
}
.mat-mdc-tooltip-panel-left .mat-mdc-tooltip::before {
  right: -8px;
}
.mat-mdc-tooltip._mat-animation-noopable {
  animation: none;
  transform: scale(1);
}

.mat-mdc-tooltip-surface {
  word-break: normal;
  overflow-wrap: anywhere;
  padding: 4px 8px;
  min-width: 40px;
  max-width: 200px;
  min-height: 24px;
  max-height: 40vh;
  box-sizing: border-box;
  overflow: hidden;
  text-align: center;
  will-change: transform, opacity;
  background-color: var(--mat-tooltip-container-color, var(--mat-sys-inverse-surface));
  color: var(--mat-tooltip-supporting-text-color, var(--mat-sys-inverse-on-surface));
  border-radius: var(--mat-tooltip-container-shape, var(--mat-sys-corner-extra-small));
  font-family: var(--mat-tooltip-supporting-text-font, var(--mat-sys-body-small-font));
  font-size: var(--mat-tooltip-supporting-text-size, var(--mat-sys-body-small-size));
  font-weight: var(--mat-tooltip-supporting-text-weight, var(--mat-sys-body-small-weight));
  line-height: var(--mat-tooltip-supporting-text-line-height, var(--mat-sys-body-small-line-height));
  letter-spacing: var(--mat-tooltip-supporting-text-tracking, var(--mat-sys-body-small-tracking));
}
.mat-mdc-tooltip-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
.mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: left;
}
[dir=rtl] .mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: right;
}

.mat-mdc-tooltip-panel {
  line-height: normal;
}
.mat-mdc-tooltip-panel.mat-mdc-tooltip-panel-non-interactive {
  pointer-events: none;
}

@keyframes mat-mdc-tooltip-show {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes mat-mdc-tooltip-hide {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.8);
  }
}
.mat-mdc-tooltip-show {
  animation: mat-mdc-tooltip-show 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}

.mat-mdc-tooltip-hide {
  animation: mat-mdc-tooltip-hide 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}
`],encapsulation:2,changeDetection:0})}return t})();var jx=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=U({type:t});static \u0275inj=H({imports:[av,ks,he,ri]})}return t})();var Tf=class t{teacher=yi.required();static \u0275fac=function(e){return new(e||t)};static \u0275cmp=E({type:t,selectors:[["main-presence-indicator"]],inputs:{teacher:[1,"teacher"]},decls:3,vars:5,consts:[["tooltip","matTooltip"],[3,"matTooltip"]],template:function(e,i){e&1&&(p(0,"p",1,0),D(2,"\u2B24"),g()),e&2&&(Hp(Up("color: ",i.teacher().color)),Z("matTooltip",Zn(i.teacher().name)))},dependencies:[jx,sb],styles:["p[_ngcontent-%COMP%]{display:flex;margin:0;padding:0;cursor:pointer;text-align:center;-webkit-user-select:none;user-select:none}"]})};var Rs=!0;var ar=class t{observedSocket=new An(1);connectedSocket=null;mailboxes={attendanceMessages:new C,presenceMessages:new C,journalMessages:new C};rooms={attendance:"",journal:"",chat:""};deliverMessage(n){switch(n.type){case"ATTENDANCE":this.mailboxes.attendanceMessages.next(n);break;case"DOC_OPERATION":this.mailboxes.journalMessages.next(n);break;case"PRESENCE_JOIN":case"PRESENCE_LEAVE":case"PRESENCE_STATE":this.mailboxes.presenceMessages.next(n)}}connect(n){this.observedSocket=new An(1);let e=sessionStorage.getItem("token"),i=new WebSocket(`${n}?token=${e}`);i.onmessage=r=>{let o=JSON.parse(r.data);Rs&&console.log("[Websocket] - Received:",o),this.deliverMessage(o)},i.onclose=r=>{Rs&&console.log("[Websocket] - Disconnected",r.code,r.reason)},i.onopen=()=>{Rs&&console.log("[Websocket] - Connected"),this.observedSocket.next(i),this.connectedSocket=i}}disconnect(){if(this.connectedSocket==null){console.error("[Websocket] - Tried disconnecting an unconnected websocket.");return}for(let n of Object.values(this.rooms))n!==""&&this.connectedSocket.send(JSON.stringify({type:"unsubscribe",room:n}));this.connectedSocket.close(),this.observedSocket.complete()}async ensureConnected(){return new Promise(n=>{this.observedSocket.subscribe(()=>{n()})})}setRoom(n,e){if(this.connectedSocket==null){console.error("[Websocket] - Attempted to set room of an unconnected socket");return}this.rooms[n]!==""&&this.leaveRoom(n),this.rooms[n]=e,this.connectedSocket.readyState==this.connectedSocket.OPEN&&(Rs&&console.log("[Websocket] - Subscribing:",JSON.stringify({type:"subscribe",room:e})),this.connectedSocket.send(JSON.stringify({type:"subscribe",room:e})))}setAttendanceRoom(n){this.setRoom("attendance",n)}setJournalRoom(n){this.setRoom("journal",n)}leaveRoom(n){if(this.connectedSocket==null){console.error("[Websocket] - Tried to leave room on unconnected socket.");return}this.rooms[n]!=""&&(Rs&&console.log("[Websocket] - Unsubscribing:",JSON.stringify({type:"unsubscribe",room:this.rooms[n]})),this.connectedSocket.send(JSON.stringify({type:"unsubscribe",room:this.rooms[n]})),this.rooms[n]="")}leaveAttendanceRoom(){this.leaveRoom("attendance")}leaveJournalRoom(){this.leaveRoom("journal")}sendMessage(n,e){if(this.connectedSocket==null){console.error("[Websocket] - Tried to send message on unconnected socket.");return}e.room=this.rooms[n=="ATTENDANCE"?"attendance":n=="CHAT"?"chat":"journal"],e.type=n;let i=JSON.stringify(_({},e));Rs&&console.log("[Websocket] - Sending off: ",i),this.connectedSocket.send(i)}sendAttendanceUpdate(n){this.sendMessage("ATTENDANCE",n)}sendJournalUpdate(n){this.sendMessage("DOC_OPERATION",n)}getMessages(n){return this.mailboxes[n].asObservable()}static \u0275fac=function(e){return new(e||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})};var lr=class t{socketService=lm(ar);connectedTeachers=F([]);_teacherUpdates=new C;teacherUpdates=this._teacherUpdates.asObservable();async init(){await this.socketService.ensureConnected(),this.socketService.getMessages("presenceMessages").subscribe(n=>{this.handleMessage(n)})}spoofTeacherUpdate(){console.log("Spoofing teacher"),this._teacherUpdates.next({name:"Spoof",userId:-1,room:"Spoof",color:"#ffffff"})}handleMessage(n){switch(n.type){case"PRESENCE_STATE":this.handleStateMessage(n);break;case"PRESENCE_JOIN":this.handleJoinMessage(n);break;case"PRESENCE_LEAVE":this.handleLeaveMessage(n);break;default:console.error("WsPresenceChangeMessage with incorrect type in presence service")}}handleLeaveMessage(n){n.room||console.error("Incorrectly formatted leave message in presence service: ",n);let e={userId:n.userId,name:n.name,room:n.room,color:n.color},i=this.connectedTeachers().filter(r=>r.userId!=n.userId);this.connectedTeachers.set(i),console.log("Someone left, new status: ",this.connectedTeachers()),this._teacherUpdates.next(e)}handleJoinMessage(n){n.room||console.error("Incorrectly formatted join message in presence service: ",n);let e=this.connectedTeachers().findIndex(r=>r.userId==n.userId),i={userId:n.userId,name:n.name,room:n.room,color:n.color};if(e==-1){let r=this.connectedTeachers();r.push(i),this.connectedTeachers.set(r)}else{let r=this.connectedTeachers();r[e].room=n.room,this.connectedTeachers.set(r)}console.log("Someone joined, new status: ",this.connectedTeachers()),this._teacherUpdates.next(i)}handleStateMessage(n){if(n.users){let e=n.users.map(i=>_({},i));this.connectedTeachers.set(e)}else console.error("[Presence] - State message received without user array")}static \u0275fac=function(e){return new(e||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})};var F1=(t,n)=>n.id;function P1(t,n){if(t&1&&ne(0,"main-presence-indicator",1),t&2){let e=n.$implicit;Z("teacher",e)}}var Ns=class t{presence=d(lr);filter=yi.required();isGroup=yi("");teachers=F([]);ngOnInit(){this.presence.teacherUpdates.subscribe(()=>{this.teachers.set(this.presence.connectedTeachers().filter(n=>{let e=this.isGroup()==""?"child:"+this.filter():"group:"+this.filter();return n.room.includes(e)}))}),this.teachers.set(this.presence.connectedTeachers().filter(n=>{let e=this.isGroup()==""?"child:"+this.filter():"group:"+this.filter();return n.room.includes(e)}))}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=E({type:t,selectors:[["main-presence-container"]],inputs:{filter:[1,"filter"],isGroup:[1,"isGroup"]},decls:3,vars:0,consts:[[1,"container"],[3,"teacher"]],template:function(e,i){e&1&&(p(0,"mat-card",0),Dn(1,P1,1,1,"main-presence-indicator",1,F1),g()),e&2&&(w(),En(i.teachers()))},dependencies:[Tf,mn],styles:["[_nghost-%COMP%]{height:fit-content;width:fit-content}.container[_ngcontent-%COMP%]{display:flex;flex-direction:row;padding-left:1em;padding-right:1em}.container[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{margin-left:.1em;margin-right:.1em}"]})};var L1=()=>({name:"alla",id:0}),Vx=(t,n)=>n.id;function j1(t,n){if(t&1){let e=bt();p(0,"mat-option",5),N("click",function(){let r=Be(e).$implicit,o=q();return Ve(o.handleSelection(r))}),D(1),g()}if(t&2){let e=n.$implicit;Z("value",e),w(),Et(" ",e.name," ")}}function B1(t,n){t&1&&ne(0,"mat-divider")}function V1(t,n){if(t&1){let e=bt();p(0,"button",11),N("click",function(){let r=Be(e).$implicit,o=q();return Ve(o.onSelectChild(r))}),p(1,"div",12),ne(2,"main-presence-container",13),g(),p(3,"span",14),D(4),g(),p(5,"div",12),ne(6,"attendance-box",15),g()(),oe(7,B1,1,0,"mat-divider")}if(t&2){let e=n.$implicit,i=n.$index,r=n.$count;w(2),Z("filter",Zn(e.id)),w(2),Et("",e.name," "),w(2),Z("disabled",!0)("childSignal",e),w(),se(i!==r-1?7:-1)}}var Os=class t{children=F([]);childSignal=Ne.required();searchQuery=F("");groupSignal=Ne.required();contentSignal=Ne.required();allGroups=Ne.required();stupidFix=F(0);searchedChildren=Je(()=>{this.stupidFix();let n=this.searchQuery();return this.children().filter(e=>e.name.toLowerCase().includes(n))});groupAttendance=Je(()=>this.searchedChildren().filter(n=>n.status==="CHECKED_IN").length);groupAbsent=Je(()=>this.searchedChildren().length-this.groupAttendance());attendanceService=d(Ss);childService=d(Sf);constructor(){this.attendanceService.getAttendanceChanges.subscribe(n=>{let e=this.children().find(i=>i.id===n.childId);e!=null&&(e.status=n.status,this.stupidFix.update(i=>i+1))}),Yt(()=>{this.groupSignal().id!==0&&this.loadChildren()})}onSearchUpdated(n){this.searchQuery.set(n)}onSelectChild(n){this.childSignal.set(n),this.contentSignal.set("childView")}loadChildren(){this.childService.getChildrenByGroup(this.groupSignal().id).subscribe({next:n=>{this.children.set(n)}})}showAllChildren(){this.childService.getChildren().subscribe({next:n=>{this.children.set(n)}})}handleSelection(n){if(console.log(n),n.name==="alla"){this.contentSignal.set("homeView"),this.showAllChildren();return}this.groupSignal.set(n),this.contentSignal.set("groupView")}handleWebsocketMessage(n){let e=this.children().find(r=>r.id===n.childId);if(!e){console.error("Attendance message received from other group. Child not found.");return}this.attendanceService.getSignal(e.id,oi()).set(n.status),e.status=n.status,this.stupidFix.update(r=>r+1)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=E({type:t,selectors:[["main-child-list"]],inputs:{childSignal:[1,"childSignal"],groupSignal:[1,"groupSignal"],contentSignal:[1,"contentSignal"],allGroups:[1,"allGroups"]},outputs:{childSignal:"childSignalChange",groupSignal:"groupSignalChange",contentSignal:"contentSignalChange",allGroups:"allGroupsChange"},decls:30,vars:5,consts:[["searchQuery",""],[1,"child-list-container"],[1,"list-topper"],["subscriptSizing","dynamic",1,"pick-class"],[3,"value"],[3,"click","value"],[1,"stats"],[1,"stats-text"],["subscriptSizing","dynamic"],["matInput","","type","search",3,"input"],[1,"list-class"],["mat-list-item","",3,"click"],["matListItemMeta","",1,"meta-container"],[3,"filter"],["matListItemTitle",""],[3,"disabled","childSignal"]],template:function(e,i){if(e&1){let r=bt();p(0,"div",1)(1,"mat-card",2)(2,"mat-form-field",3)(3,"mat-label")(4,"mat-icon"),D(5,"groups"),g(),D(6," V\xE4lj klass"),g(),p(7,"mat-select"),Dn(8,j1,2,2,"mat-option",4,Vx),p(10,"mat-option",5),N("click",function(){return i.handleSelection({name:"alla",id:0})}),D(11,"Alla elever"),g()()(),p(12,"mat-card-content",6)(13,"p",7),D(14),g(),p(15,"p",7),D(16),g(),p(17,"p",7),D(18),g()()(),ne(19,"mat-divider"),p(20,"mat-form-field",8)(21,"mat-label"),D(22,"S\xF6k"),p(23,"mat-icon"),D(24,"search"),g()(),p(25,"input",9,0),N("input",function(){Be(r);let s=cn(26);return Ve(i.onSearchUpdated(s.value.toLowerCase()))}),g()(),p(27,"mat-action-list",10),Dn(28,V1,8,6,null,null,Vx),g()()}e&2&&(w(8),En(i.allGroups()),w(2),Z("value",zp(4,L1)),w(4),Et("N\xE4rvarande: ",i.groupAttendance()),w(2),Et("Icke n\xE4rvarande: ",i.groupAbsent()),w(2),Et("Antal elever: ",i.children().length),w(10),En(i.searchedChildren()))},dependencies:[Fx,Nx,Ox,Yv,rb,ob,ev,Ms,As,en,ni,eo,ws,ir,hs,ms,Nu,mn,ei,If,xf,sr,Ns],styles:['[_nghost-%COMP%]{background-color:var(--mat-sys-primary-container);width:100%;border:1px solid var(--mat-sys-outline-variant);color:var(--mat-sys-on-primary-container);box-sizing:border-box;border-radius:5px;flex:1;display:flex;flex-direction:column;min-height:0;height:100%;overflow:hidden}.mat-mdc-action-list[_ngcontent-%COMP%]{padding:0;border-radius:5px;height:100%}.mdc-list-item[_ngcontent-%COMP%]{color:var(--mat-sys-on-primary-container);background-color:var(--mat-sys-primary-container);box-shadow:var(--mat-sys-level1)}.child-list-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%}.list-class[_ngcontent-%COMP%]{flex:1;overflow-y:auto}.list-topper[_ngcontent-%COMP%]{display:flex;flex-direction:column;border-bottom-left-radius:0!important;border-bottom-right-radius:0!important}.stats[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;background-color:var(--mat-sys-surface-variant);color:var(--mat-sys-on-surface-variant);flex:1;padding:.5em}.stats[_ngcontent-%COMP%]:after{content:""}.stats[_ngcontent-%COMP%]:before{content:""}.stats[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{padding:0;margin:.1em}.pick-class[_ngcontent-%COMP%]{width:100%}.stats-text[_ngcontent-%COMP%]{margin:1em;font:var(--mat-sys-title-small);color:var(--mat-sys-on-secondary-container)}mat-form-field[_ngcontent-%COMP%]{width:100%}']})};var kf=class{getDiff(n,e,i){let r=n.length-e.length,o=this.surroundingMatch(n,e,i,r)?r>0?"DELETE":"INSERT":"REPLACEMENT",s={operation:o,idx:i,value:"",length:0};switch(o){case"DELETE":s.length=r;break;case"INSERT":s.idx=i+r,s.value=e.substring(i+r,i);break;case"REPLACEMENT":{let a=this.findFirstDiff(n,e),l=this.findLastDiff(n,e);switch(l){case"prevOutOfBounds":s.idx=0,s.value=e.substring(0,0-r),s.operation="INSERT";break;case"newOutOfBounds":s.idx=0,s.length=r,s.operation="DELETE";break;default:s.value=e.substring(a,l),s.length=r+s.value.length,s.idx=a;break}}}return s}surroundingMatch(n,e,i,r){switch(r<0){case!0:return n.substring(0,i+r)===e.substring(0,i+r)&&n.substring(i+r)===e.substring(i);case!1:return n.substring(0,i)===e.substring(0,i)&&n.substring(i+r)===e.substring(i)}}findFirstDiff(n,e){let i=0;for(;;)if(n.charAt(i)===e.charAt(i))i++;else return i}findLastDiff(n,e){let i=1;for(;;){if(i>n.length)return"prevOutOfBounds";if(i>e.length)return"newOutOfBounds";if(n.charAt(n.length-i)===e.charAt(e.length-i))i++;else return e.length-i+1}}};var Af=class{transformClient(n,e){switch(n.type){case"INSERT":return this.transformInsert(n,e);case"DELETE":return this.transformDelete(n,e)}}transformInsert(n,e){let i=n;switch(e.type){case"INSERT":e.position<=n.position&&(i.position+=e.text.length);break;case"DELETE":e.position<n.position&&(i.position=Math.max(e.position,i.position-=e.length));break}return i}transformDelete(n,e){let i=n;switch(e.type){case"INSERT":e.position<=i.position?i.position+=e.text.length:e.position<i.position+i.length&&(i.length+=e.text.length);break;case"DELETE":let r=e.position+e.length;if(r<=i.position)i.position-=e.length;else if(!(e.position>=i.position+i.length)){let o=Math.max(i.position,e.position),s=Math.min(i.position+i.length,r);i.length=Math.max(0,i.length-(s-o)),i.position=Math.min(i.position,e.position)}break}return i}};var Rf=class t{baseUrl=`${St.apiUrl}/api/journal`;http=d(xt);getJournal(n,e,i){let r=new Ft;if(i==="childView")r=r.set("childId",n);else if(i==="groupView")r=r.set("groupId",e);else return console.error(`Attempted to fetch journal with unknown view: ${i}`),vr(()=>new Error("Invalid view type provided to JournalService"));return this.http.get(this.baseUrl,{params:r})}static \u0275fac=function(e){return new(e||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})};var H1=["journalContent"],Nf=class t{journalSocket=d(ar);differ=new kf;operationalTransformer=new Af;journalService=d(Rf);textArea=xn.required("journalContent");childSignal=Ne.required();contentSignal=Ne.required();groupSignal=Ne.required();reportTitle=Je(()=>{switch(this.contentSignal()){case"childView":return this.childSignal().name+"s dagsrapport";case"groupView":return this.groupSignal().name+"s dagsrapport";default:return"ERROR"}});async ngOnInit(){await this.journalSocket.ensureConnected(),this.journalSocket.getMessages("journalMessages").subscribe(n=>{let e=n,i=e.operation;if(this.isMyOwnAck(e))this.inFlight.shift();else{for(let r of this.inFlight)i=this.operationalTransformer.transformClient(i,r);this.applyToLocalContent(i)}this.serverRevision=e.serverRevision}),this.loadJournal()}ngOnChanges(){let n=this.getRoom();this.journalSocket.setJournalRoom(n),this.loadJournal()}text=F("");prevText="";serverRevision=0;sequence=0;inFlight=[];getRoom(){return this.contentSignal()==="childView"?"journal:child:"+this.childSignal().id+":"+oi():"journal:group:"+this.groupSignal().id+":"+oi()}isMyOwnAck(n){return n.userId.toString()===sessionStorage.getItem("UserId")&&this.inFlight.length>0}loadJournal(){this.journalService.getJournal(this.childSignal().id,this.groupSignal().id,this.contentSignal()).subscribe({next:n=>{this.text.set(n.content),this.serverRevision=n.serverRevision,this.sequence=0,this.inFlight=[]}})}applyToLocalContent(n){let e=n.position;switch(n.type){case"INSERT":this.textArea().nativeElement.setRangeText(n.text,e,e,"preserve");break;case"DELETE":this.textArea().nativeElement.setRangeText("",e,e+n.length,"preserve");break}this.text.set(this.textArea().nativeElement.value),this.prevText=this.text()}ngOnDestroy(){this.journalSocket.leaveJournalRoom()}onInput(n){this.sequence++;let e=n.target,i=e.value;this.prevText=this.text();let r=e.selectionStart,o=this.differ.getDiff(this.prevText,i,r);this.text.set(i);let s;switch(o.operation){case"DELETE":s={type:"DELETE",position:o.idx,length:o.length};break;case"INSERT":s={type:"INSERT",position:o.idx,text:o.value};break;case"REPLACEMENT":s={type:"DELETE",position:o.idx,length:o.length},this.sendOperation(s),this.sequence++,s={type:"INSERT",position:o.idx,text:o.value};break}this.sendOperation(s)}sendOperation(n){let e={clientRevision:this.serverRevision,operation:n,sequence:this.sequence};this.inFlight.push(n),this.journalSocket.sendJournalUpdate(e)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=E({type:t,selectors:[["main-live-journal"]],viewQuery:function(e,i){e&1&&qn(i.textArea,H1,5),e&2&&Yn()},inputs:{childSignal:[1,"childSignal"],contentSignal:[1,"contentSignal"],groupSignal:[1,"groupSignal"]},outputs:{childSignal:"childSignalChange",contentSignal:"contentSignalChange",groupSignal:"groupSignalChange"},features:[He],decls:6,vars:3,consts:[["journalContent",""],["mat-stretch-tabs","false","mat-align-tabs","start"],[3,"label"],["matInput","",3,"input","ngModel"],["label","Historik",1,"main-journal-historik"]],template:function(e,i){e&1&&(p(0,"mat-tab-group",1)(1,"mat-tab",2)(2,"mat-form-field")(3,"textarea",3,0),N("input",function(o){return i.onInput(o)}),g()()(),ne(5,"mat-tab",4),g()),e&2&&(w(),Z("label",Zn(i.reportTitle())),w(2),Z("ngModel",i.text()))},dependencies:[ni,ir,uf,Ml,_s,nr,bs,no],styles:["mat-tab-group[_ngcontent-%COMP%]{height:100%}mat-tab-group[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{height:100%}mat-mdc-tab-body-wrapper[_ngcontent-%COMP%]{height:100%}  .mat-mdc-form-field-flex{height:100%}  .mat-mdc-form-field-infix{height:100%}mat-form-field[_ngcontent-%COMP%]{width:100%;box-sizing:border-box;height:100%}textarea[_ngcontent-%COMP%]{width:100%;height:100%!important;min-height:20vh;margin-bottom:1em;padding:0;box-sizing:content-box;resize:none;overflow-y:scroll}"]})};var Of=class t{url=`${St.apiUrl}/api/group`;http=d(xt);getGroups(){return this.http.get(this.url)}static \u0275fac=function(e){return new(e||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})};var Ff=class t{url=`${St.apiUrl}/api/user/teacher`;colorUrl=`${St.apiUrl}/api/user/color`;http=d(xt);getUser(n){let e=new Ft().set("teacherId",n);return this.http.get(this.url,{params:e})}updateColor(n){return this.http.patch(this.colorUrl,{color:n})}static \u0275fac=function(e){return new(e||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})};function U1(t,n){if(t&1){let e=bt();p(0,"div",1)(1,"button",2),N("click",function(){Be(e);let r=q();return Ve(r.action())}),D(2),g()()}if(t&2){let e=q();w(2),Et(" ",e.data.action," ")}}var z1=["label"];function $1(t,n){}var W1=Math.pow(2,31)-1,Rl=class{_overlayRef;instance;containerInstance;_afterDismissed=new C;_afterOpened=new C;_onAction=new C;_durationTimeoutId;_dismissedByAction=!1;constructor(n,e){this._overlayRef=e,this.containerInstance=n,n._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(n){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(n,W1))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}},Hx=new v("MatSnackBarData"),Fs=class{politeness="polite";announcementMessage="";viewContainerRef;duration=0;panelClass;direction;data=null;horizontalPosition="center";verticalPosition="bottom"},G1=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=M({type:t,selectors:[["","matSnackBarLabel",""]],hostAttrs:[1,"mat-mdc-snack-bar-label","mdc-snackbar__label"]})}return t})(),q1=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=M({type:t,selectors:[["","matSnackBarActions",""]],hostAttrs:[1,"mat-mdc-snack-bar-actions","mdc-snackbar__actions"]})}return t})(),Y1=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=M({type:t,selectors:[["","matSnackBarAction",""]],hostAttrs:[1,"mat-mdc-snack-bar-action","mdc-snackbar__action"]})}return t})(),Z1=(()=>{class t{snackBarRef=d(Rl);data=d(Hx);constructor(){}action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=E({type:t,selectors:[["simple-snack-bar"]],hostAttrs:[1,"mat-mdc-simple-snack-bar"],exportAs:["matSnackBar"],decls:3,vars:2,consts:[["matSnackBarLabel",""],["matSnackBarActions",""],["matButton","","matSnackBarAction","",3,"click"]],template:function(i,r){i&1&&(p(0,"div",0),D(1),g(),oe(2,U1,3,1,"div",1)),i&2&&(w(),Et(" ",r.data.message,`
`),w(),se(r.hasAction?2:-1))},dependencies:[fs,G1,q1,Y1],styles:[`.mat-mdc-simple-snack-bar {
  display: flex;
}
.mat-mdc-simple-snack-bar .mat-mdc-snack-bar-label {
  max-height: 50vh;
  overflow: auto;
}
`],encapsulation:2,changeDetection:0})}return t})(),ab="_mat-snack-bar-enter",lb="_mat-snack-bar-exit",Q1=(()=>{class t extends Cs{_ngZone=d(k);_elementRef=d(R);_changeDetectorRef=d(Oe);_platform=d(fe);_animationsDisabled=Fe();snackBarConfig=d(Fs);_document=d(V);_trackedModals=new Set;_enterFallback;_exitFallback;_injector=d(W);_announceDelay=150;_announceTimeoutId;_destroyed=!1;_portalOutlet;_onAnnounce=new C;_onExit=new C;_onEnter=new C;_animationState="void";_live;_label;_role;_liveElementId=d(rt).getId("mat-snack-bar-container-live-");constructor(){super();let e=this.snackBarConfig;e.politeness==="assertive"&&!e.announcementMessage?this._live="assertive":e.politeness==="off"?this._live="off":this._live="polite",this._platform.FIREFOX&&(this._live==="polite"&&(this._role="status"),this._live==="assertive"&&(this._role="alert"))}attachComponentPortal(e){this._assertNotAttached();let i=this._portalOutlet.attachComponentPortal(e);return this._afterPortalAttached(),i}attachTemplatePortal(e){this._assertNotAttached();let i=this._portalOutlet.attachTemplatePortal(e);return this._afterPortalAttached(),i}attachDomPortal=e=>{this._assertNotAttached();let i=this._portalOutlet.attachDomPortal(e);return this._afterPortalAttached(),i};onAnimationEnd(e){e===lb?this._completeExit():e===ab&&(clearTimeout(this._enterFallback),this._ngZone.run(()=>{this._onEnter.next(),this._onEnter.complete()}))}enter(){this._destroyed||(this._animationState="visible",this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce(),this._animationsDisabled?Xe(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(ab)))},{injector:this._injector}):(clearTimeout(this._enterFallback),this._enterFallback=setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-snack-bar-fallback-visible"),this.onAnimationEnd(ab)},200)))}exit(){return this._destroyed?B(void 0):(this._ngZone.run(()=>{this._animationState="hidden",this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.setAttribute("mat-exit",""),clearTimeout(this._announceTimeoutId),this._animationsDisabled?Xe(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(lb)))},{injector:this._injector}):(clearTimeout(this._exitFallback),this._exitFallback=setTimeout(()=>this.onAnimationEnd(lb),200))}),this._onExit)}ngOnDestroy(){this._destroyed=!0,this._clearFromModals(),this._completeExit()}_completeExit(){clearTimeout(this._exitFallback),queueMicrotask(()=>{this._onExit.next(),this._onExit.complete()})}_afterPortalAttached(){let e=this._elementRef.nativeElement,i=this.snackBarConfig.panelClass;i&&(Array.isArray(i)?i.forEach(s=>e.classList.add(s)):e.classList.add(i)),this._exposeToModals();let r=this._label.nativeElement,o="mdc-snackbar__label";r.classList.toggle(o,!r.querySelector(`.${o}`))}_exposeToModals(){let e=this._liveElementId,i=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let r=0;r<i.length;r++){let o=i[r],s=o.getAttribute("aria-owns");this._trackedModals.add(o),s?s.indexOf(e)===-1&&o.setAttribute("aria-owns",s+" "+e):o.setAttribute("aria-owns",e)}}_clearFromModals(){this._trackedModals.forEach(e=>{let i=e.getAttribute("aria-owns");if(i){let r=i.replace(this._liveElementId,"").trim();r.length>0?e.setAttribute("aria-owns",r):e.removeAttribute("aria-owns")}}),this._trackedModals.clear()}_assertNotAttached(){this._portalOutlet.hasAttached()}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{if(this._destroyed)return;let e=this._elementRef.nativeElement,i=e.querySelector("[aria-hidden]"),r=e.querySelector("[aria-live]");if(i&&r){let o=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&i.contains(document.activeElement)&&(o=document.activeElement),i.removeAttribute("aria-hidden"),r.appendChild(i),o?.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=E({type:t,selectors:[["mat-snack-bar-container"]],viewQuery:function(i,r){if(i&1&&Ue(Ds,7)(z1,7),i&2){let o;L(o=j())&&(r._portalOutlet=o.first),L(o=j())&&(r._label=o.first)}},hostAttrs:[1,"mdc-snackbar","mat-mdc-snack-bar-container"],hostVars:6,hostBindings:function(i,r){i&1&&N("animationend",function(s){return r.onAnimationEnd(s.animationName)})("animationcancel",function(s){return r.onAnimationEnd(s.animationName)}),i&2&&z("mat-snack-bar-container-enter",r._animationState==="visible")("mat-snack-bar-container-exit",r._animationState==="hidden")("mat-snack-bar-container-animations-enabled",!r._animationsDisabled)},features:[be],decls:6,vars:3,consts:[["label",""],[1,"mdc-snackbar__surface","mat-mdc-snackbar-surface"],[1,"mat-mdc-snack-bar-label"],["aria-hidden","true"],["cdkPortalOutlet",""]],template:function(i,r){i&1&&(p(0,"div",1)(1,"div",2,0)(3,"div",3),Bt(4,$1,0,0,"ng-template",4),g(),ne(5,"div"),g()()),i&2&&(w(5),ue("aria-live",r._live)("role",r._role)("id",r._liveElementId))},dependencies:[Ds],styles:[`@keyframes _mat-snack-bar-enter {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes _mat-snack-bar-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-snack-bar-container {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  margin: 8px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snack-bar-container {
  width: 100vw;
}

.mat-snack-bar-container-animations-enabled {
  opacity: 0;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-fallback-visible {
  opacity: 1;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-enter {
  animation: _mat-snack-bar-enter 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-exit {
  animation: _mat-snack-bar-exit 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}

.mat-mdc-snackbar-surface {
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  padding-left: 0;
  padding-right: 8px;
}
[dir=rtl] .mat-mdc-snackbar-surface {
  padding-right: 0;
  padding-left: 8px;
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  min-width: 344px;
  max-width: 672px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snackbar-surface {
  width: 100%;
  min-width: 0;
}
@media (forced-colors: active) {
  .mat-mdc-snackbar-surface {
    outline: solid 1px;
  }
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  color: var(--mat-snack-bar-supporting-text-color, var(--mat-sys-inverse-on-surface));
  border-radius: var(--mat-snack-bar-container-shape, var(--mat-sys-corner-extra-small));
  background-color: var(--mat-snack-bar-container-color, var(--mat-sys-inverse-surface));
}

.mdc-snackbar__label {
  width: 100%;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  padding: 14px 8px 14px 16px;
}
[dir=rtl] .mdc-snackbar__label {
  padding-left: 8px;
  padding-right: 16px;
}
.mat-mdc-snack-bar-container .mdc-snackbar__label {
  font-family: var(--mat-snack-bar-supporting-text-font, var(--mat-sys-body-medium-font));
  font-size: var(--mat-snack-bar-supporting-text-size, var(--mat-sys-body-medium-size));
  font-weight: var(--mat-snack-bar-supporting-text-weight, var(--mat-sys-body-medium-weight));
  line-height: var(--mat-snack-bar-supporting-text-line-height, var(--mat-sys-body-medium-line-height));
}

.mat-mdc-snack-bar-actions {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  box-sizing: border-box;
}

.mat-mdc-snack-bar-handset,
.mat-mdc-snack-bar-container,
.mat-mdc-snack-bar-label {
  flex: 1 1 auto;
}

.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled).mat-unthemed {
  color: var(--mat-snack-bar-button-color, var(--mat-sys-inverse-primary));
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) {
  --mat-button-text-state-layer-color: currentColor;
  --mat-button-text-ripple-color: currentColor;
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) .mat-ripple-element {
  opacity: 0.1;
}
`],encapsulation:2})}return t})(),K1=new v("mat-snack-bar-default-options",{providedIn:"root",factory:()=>new Fs}),Ux=(()=>{class t{_live=d(ul);_injector=d(W);_breakpointObserver=d(dl);_parentSnackBar=d(t,{optional:!0,skipSelf:!0});_defaultConfig=d(K1);_animationsDisabled=Fe();_snackBarRefAtThisLevel=null;simpleSnackBarComponent=Z1;snackBarContainerComponent=Q1;handsetCssClass="mat-mdc-snack-bar-handset";get _openedSnackBarRef(){let e=this._parentSnackBar;return e?e._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(e){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=e:this._snackBarRefAtThisLevel=e}constructor(){}openFromComponent(e,i){return this._attach(e,i)}openFromTemplate(e,i){return this._attach(e,i)}open(e,i="",r){let o=_(_({},this._defaultConfig),r);return o.data={message:e,action:i},o.announcementMessage===e&&(o.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,o)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(e,i){let r=i&&i.viewContainerRef&&i.viewContainerRef.injector,o=W.create({parent:r||this._injector,providers:[{provide:Fs,useValue:i}]}),s=new rr(this.snackBarContainerComponent,i.viewContainerRef,o),a=e.attach(s);return a.instance.snackBarConfig=i,a.instance}_attach(e,i){let r=_(_(_({},new Fs),this._defaultConfig),i),o=this._createOverlay(r),s=this._attachSnackBarContainer(o,r),a=new Rl(s,o);if(e instanceof gt){let l=new ii(e,null,{$implicit:r.data,snackBarRef:a});a.instance=s.attachTemplatePortal(l)}else{let l=this._createInjector(r,a),c=new rr(e,void 0,l),u=s.attachComponentPortal(c);a.instance=u.instance}return this._breakpointObserver.observe(JD.HandsetPortrait).pipe(me(o.detachments())).subscribe(l=>{o.overlayElement.classList.toggle(this.handsetCssClass,l.matches)}),r.announcementMessage&&s._onAnnounce.subscribe(()=>{this._live.announce(r.announcementMessage,r.politeness)}),this._animateSnackBar(a,r),this._openedSnackBarRef=a,this._openedSnackBarRef}_animateSnackBar(e,i){e.afterDismissed().subscribe(()=>{this._openedSnackBarRef==e&&(this._openedSnackBarRef=null),i.announcementMessage&&this._live.clear()}),i.duration&&i.duration>0&&e.afterOpened().subscribe(()=>e._dismissAfter(i.duration)),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{e.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):e.containerInstance.enter()}_createOverlay(e){let i=new ro;i.direction=e.direction;let r=Cf(this._injector),o=e.direction==="rtl",s=e.horizontalPosition==="left"||e.horizontalPosition==="start"&&!o||e.horizontalPosition==="end"&&o,a=!s&&e.horizontalPosition!=="center";return s?r.left("0"):a?r.right("0"):r.centerHorizontally(),e.verticalPosition==="top"?r.top("0"):r.bottom("0"),i.positionStrategy=r,i.disableAnimations=this._animationsDisabled,so(this._injector,i)}_createInjector(e,i){let r=e&&e.viewContainerRef&&e.viewContainerRef.injector;return W.create({parent:r||this._injector,providers:[{provide:Rl,useValue:i},{provide:Hx,useValue:e.data}]})}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Pf=class t{_snackBar=d(Ux);userService=d(Ff);teacherColor=Ne("#ffffff");userDataObservable=this.userService.getUser(Number(sessionStorage.getItem("UserId")));currentUser=this.userDataObservable.pipe();ngOnInit(){this.userDataObservable.subscribe(n=>{this.teacherColor.set(n.color)})}updateColor(){console.log("From updatecolor",this.teacherColor()),this.userService.updateColor(this.teacherColor()).subscribe(()=>{this._snackBar.open("Din f\xE4rg uppdateras n\xE4sta g\xE5ng du loggar in.","St\xE4ng",{duration:2500,verticalPosition:"top"})})}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=E({type:t,selectors:[["account-page"]],inputs:{teacherColor:[1,"teacherColor"]},outputs:{teacherColor:"teacherColorChange"},decls:32,vars:10,consts:[["appearance","outlined"],[1,"card-header-segment","card-header-left"],["mat-card-avatar","",1,"icon-display"],[1,"card-header-segment","card-header-right"],["type","color","matInput","","matNativeControl","","name","name",3,"input","ngModelChange","ngModel"]],template:function(e,i){if(e&1&&(p(0,"mat-card",0)(1,"mat-card-header")(2,"div",1)(3,"div",2)(4,"mat-icon"),D(5,"person"),g()(),p(6,"mat-card-title"),D(7),Aa(8,"async"),g(),p(9,"mat-card-subtitle"),D(10),Aa(11,"async"),g()(),p(12,"div",3)(13,"h2"),D(14,"Din f\xE4rg"),g(),p(15,"input",4),N("input",function(){return i.updateColor()}),dt("ngModelChange",function(o){return Ae(i.teacherColor,o)||(i.teacherColor=o),o}),g()()(),p(16,"mat-card-content")(17,"p"),D(18),Aa(19,"async"),g(),p(20,"p"),D(21,"Exempeltext"),g(),p(22,"p"),D(23,"Exempeltext"),g(),p(24,"p"),D(25,"Exempeltext"),g(),p(26,"p"),D(27,"Exempeltext"),g(),p(28,"p"),D(29,"Exempeltext"),g(),p(30,"p"),D(31,"Exempeltext"),g()()()),e&2){let r,o,s;w(7),De((r=Ra(8,4,i.currentUser))==null?null:r.name),w(3),De((o=Ra(11,6,i.currentUser))==null?null:o.role),w(5),ct("ngModel",i.teacherColor),w(3),Et("Mejladress: ",(s=Ra(19,8,i.currentUser))==null?null:s.email)}},dependencies:[Nu,mn,xD,ei,Xi,ED,Ru,hs,ms,en,ws,ir,_s,nr,bs,no,tg],styles:[".icon-display[_ngcontent-%COMP%]{transform:scale(2);display:flex;align-items:center;justify-content:center;overflow:hidden}p[_ngcontent-%COMP%]{font:var(--mat-sys-body-large)}mat-card[_ngcontent-%COMP%]{margin-top:7em;height:100%}mat-card-header[_ngcontent-%COMP%]{width:100%;display:flex}.card-header-left[_ngcontent-%COMP%]{flex:2}.card-header-right[_ngcontent-%COMP%]{flex:1;display:flex;align-items:center;justify-content:center;flex-direction:column;font-family:var(--mat-sys-label-large)}"]})};function X1(t,n){if(t&1){let e=bt();p(0,"mat-card-header",4)(1,"span"),D(2),g(),ne(3,"main-presence-container",5),g(),p(4,"div",6)(5,"child-display",7),N("attendanceChangeEvent",function(r){Be(e);let o=q();return Ve(o.wsUpdateAttendance(r))}),dt("childSignalChange",function(r){Be(e);let o=q();return Ae(o.childSignal,r)||(o.childSignal=r),Ve(r)}),g()(),ne(6,"main-live-journal",8)}if(t&2){let e=q();w(2),De(e.childSignal().name),w(),Z("filter",Zn(e.childSignal().id)),w(2),ct("childSignal",e.childSignal),w(),Z("childSignal",e.childSignal())("groupSignal",e.groupSignal())("contentSignal",e.contentSignal())}}function J1(t,n){if(t&1&&(p(0,"mat-card-header",4)(1,"span"),D(2),g(),ne(3,"main-presence-container",9),g(),ne(4,"main-live-journal",8)),t&2){let e=q();w(2),De(e.groupSignal().name),w(),Z("filter",Zn(e.groupSignal().id)),w(),Z("childSignal",e.childSignal())("groupSignal",e.groupSignal())("contentSignal",e.contentSignal())}}function eL(t,n){t&1&&ne(0,"account-page")}function tL(t,n){t&1&&(p(0,"h1"),D(1,"Hej och v\xE4lkommen till KindGuard"),g(),p(2,"p"),D(3,"Skola"),g(),p(4,"p"),D(5,"kalender?"),g(),p(6,"p"),D(7,"HomepageM\xF6g"),g(),p(8,"p"),D(9,"Oklart"),g())}var Ps=class t{presence=d(lr);childSignal=F({name:"",id:0,date:"",status:"NOT_SET"});contentSignal=Ne.required();groupSignal=F({name:"",id:0});allGroups=F([]);groupService=d(Of);childList=xn.required(Os);teachers=[{}];ngOnInit(){this.loadGroups()}loadGroups(){this.groupService.getGroups().subscribe({next:n=>{this.allGroups.set(n)}})}handleWebsocketMessage(n){this.childList().handleWebsocketMessage(n)}attendanceChangeEvent=new A;wsUpdateAttendance(n){this.attendanceChangeEvent.emit(n)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=E({type:t,selectors:[["main-panel"]],viewQuery:function(e,i){e&1&&qn(i.childList,Os,5),e&2&&Yn()},inputs:{contentSignal:[1,"contentSignal"]},outputs:{contentSignal:"contentSignalChange",attendanceChangeEvent:"attendanceChangeEvent"},decls:10,vars:8,consts:[[1,"main-card-content"],[1,"main-card-left"],[1,"main-card-right"],[3,"groupSignalChange","childSignalChange","contentSignalChange","allGroupsChange","groupSignal","childSignal","contentSignal","allGroups"],[1,"title"],[3,"filter"],[1,"childDisplay"],[3,"attendanceChangeEvent","childSignalChange","childSignal"],[3,"childSignal","groupSignal","contentSignal"],["isGroup","yes",3,"filter"]],template:function(e,i){e&1&&(p(0,"mat-card")(1,"mat-card-content",0)(2,"div",1),oe(3,X1,7,7),oe(4,J1,5,6),oe(5,eL,1,0,"account-page"),oe(6,tL,10,0),g(),p(7,"mat-card",2)(8,"div",2)(9,"main-child-list",3),dt("groupSignalChange",function(o){return Ae(i.groupSignal,o)||(i.groupSignal=o),o})("childSignalChange",function(o){return Ae(i.childSignal,o)||(i.childSignal=o),o})("contentSignalChange",function(o){return Ae(i.contentSignal,o)||(i.contentSignal=o),o})("allGroupsChange",function(o){return Ae(i.allGroups,o)||(i.allGroups=o),o}),g()()()()()),e&2&&(w(3),se(i.contentSignal()==="childView"?3:-1),w(),se(i.contentSignal()==="groupView"?4:-1),w(),se(i.contentSignal()==="teacherView"?5:-1),w(),se(i.contentSignal()==="homeView"?6:-1),w(3),ct("groupSignal",i.groupSignal)("childSignal",i.childSignal)("contentSignal",i.contentSignal)("allGroups",i.allGroups))},dependencies:[Os,Ms,Mf,mn,Xi,ei,Nf,Pf,Ns],styles:["[_nghost-%COMP%]{display:block;margin:0 auto;border-radius:12px;box-sizing:border-box;width:100%;height:100%}mat-card-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font:var(--mat-sys-headline-medium)}h2[_ngcontent-%COMP%]{margin-bottom:16px}mat-card[_ngcontent-%COMP%]{width:100%;height:100%}.main-card-content[_ngcontent-%COMP%]{display:flex;flex-direction:row;box-sizing:border-box;height:100%}.main-card-left[_ngcontent-%COMP%]{width:100%;height:100%;padding-right:5%;overflow-y:hidden;display:flex;flex-direction:column;flex:1.5}.main-card-right[_ngcontent-%COMP%]{width:100%;height:100%;overflow-y:hidden;min-width:fit-content;overflow-x:auto;display:flex;flex:1;min-width:30%}mat-card-header[_ngcontent-%COMP%]{flex:.15}.childDisplay[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex:.9;background-color:var(--mat-sys-primary-container);color:var(--mat-sys-on-primary-container);border-radius:12px;height:auto;flex:1}main-live-journal[_ngcontent-%COMP%]{flex:4}.spacer[_ngcontent-%COMP%]{flex:1 1 auto}  .mat-mdc-form-field-subscript-wrapper{display:none}.title[_ngcontent-%COMP%]{margin-bottom:1em;align-items:center}main-presence-container[_ngcontent-%COMP%]{margin-left:1em}"]})};var nL=["*",[["mat-toolbar-row"]]],iL=["*","mat-toolbar-row"],rL=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=M({type:t,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return t})(),zx=(()=>{class t{_elementRef=d(R);_platform=d(fe);_document=d(V);color;_toolbarRows;constructor(){}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=E({type:t,selectors:[["mat-toolbar"]],contentQueries:function(i,r,o){if(i&1&&_t(o,rL,5),i&2){let s;L(s=j())&&(r._toolbarRows=s)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(i,r){i&2&&(Ot(r.color?"mat-"+r.color:""),z("mat-toolbar-multiple-rows",r._toolbarRows.length>0)("mat-toolbar-single-row",r._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:iL,decls:2,vars:0,template:function(i,r){i&1&&(Ie(nL),Q(0),Q(1,1))},styles:[`.mat-toolbar {
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
`],encapsulation:2,changeDetection:0})}return t})();var $x=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=U({type:t});static \u0275inj=H({imports:[he]})}return t})();var Wx=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=U({type:t});static \u0275inj=H({imports:[ri,he,ri]})}return t})();var Lf=class t{groupSignal=F({name:"",id:0});allGroups=F([]);contentSignal=F("");router=d(Ht);presence=d(lr);socketService=d(ar);mainPanel=xn.required(Ps);async ngOnInit(){this.contentSignal.set("homeView"),this.socketService.connect(`${St.wsUrl}/ws`),await this.socketService.ensureConnected(),this.socketService.setAttendanceRoom("group=Nyckelpigorna"),this.presence.init(),this.socketService.getMessages("attendanceMessages").subscribe(n=>{if(!("childId"in n)){console.error("Attendance message with incorrect body!");return}console.log(n),this.handleWebsocketMessage(n)})}ngOnDestroy(){this.socketService.leaveJournalRoom()}handleWebsocketMessage(n){this.mainPanel().handleWebsocketMessage(n)}wsUpdateAttendance(n){this.socketService.sendAttendanceUpdate(n)}onTabChange(n){let e=n.index,i=this.allGroups()[e];this.contentSignal.set("groupView"),this.groupSignal.set(i),this.presence.spoofTeacherUpdate()}logout(){document.cookie='jwtToken=""',sessionStorage.removeItem("token"),sessionStorage.removeItem("UserId"),this.socketService.disconnect(),window.location.reload()}minaSidor(){this.contentSignal.set("teacherView")}hem(){this.contentSignal.set("homeView")}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=E({type:t,selectors:[["main-page"]],viewQuery:function(e,i){e&1&&qn(i.mainPanel,Ps,5),e&2&&Yn()},decls:14,vars:1,consts:[[1,"main-nav"],["color","mat-sys-primary"],["matButton","tonal",1,"mina-sidor-button",3,"click"],["matButton","tonal",3,"click"],[1,"example-spacer"],["matButton","tonal",1,"logout-button",3,"click"],[1,"main-body"],[1,"main-panel-container"],[3,"attendanceChangeEvent","contentSignalChange","contentSignal"]],template:function(e,i){e&1&&(p(0,"div",0)(1,"mat-toolbar",1)(2,"span"),D(3,"K\xEEndGuard"),g(),p(4,"button",2),N("click",function(){return i.minaSidor()}),D(5,"Mina sidor"),g(),p(6,"button",3),N("click",function(){return i.hem()}),D(7,"Hem"),g(),ne(8,"span",4),p(9,"button",5),N("click",function(){return i.logout()}),D(10,"Logout"),g()()(),p(11,"div",6)(12,"div",7)(13,"main-panel",8),N("attendanceChangeEvent",function(o){return i.wsUpdateAttendance(o)}),dt("contentSignalChange",function(o){return Ae(i.contentSignal,o)||(i.contentSignal=o),o}),g()()()),e&2&&(w(13),ct("contentSignal",i.contentSignal))},dependencies:[$x,zx,Ps,Wx,gl,fs],styles:["[_nghost-%COMP%]{background-color:var(--mat-sys-surface);width:100%;height:100%;display:flex}mat-toolbar[_ngcontent-%COMP%]{background:linear-gradient(90deg,var(--mat-sys-primary) 30%,var(--mat-sys-tertiary) 100%);color:var(--mat-sys-primary-on-surface);display:flex;align-items:center;position:fixed}mat-tab-group[_ngcontent-%COMP%]{height:100%}mat-tab[_ngcontent-%COMP%]{height:100%}.example-spacer[_ngcontent-%COMP%]{flex:1 1 auto}  .mat-mdc-tab{background-color:var(--mat-sys-surface-container);border-radius:5px;box-shadow:var(--mat-sys-level1)}  .mdc-tab--active{background-color:var(--mat-sys-surface-container);border-radius:5px;box-shadow:var(--mat-sys-level3)}  .mat-mdc-tab-body-wrapper{height:100%}.main-body[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:100%;width:100%}.main-panel-container[_ngcontent-%COMP%]{width:85%;height:80%}.mina-sidor-button[_ngcontent-%COMP%]{margin:2em}"]})};var cb=async t=>{let n=t.url.join(""),e=d(Ht),r=await d(Is).isAuthorized();switch(n){case"":return r?e.parseUrl("/app"):!0;case"app":return r?!0:e.parseUrl("/");default:return!1}};var jf=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=E({type:t,selectors:[["admin-page"]],decls:5,vars:0,consts:[[1,"container"]],template:function(e,i){e&1&&(p(0,"mat-card",0)(1,"mat-card-header"),D(2," H\xE4r \xE4r en header "),g(),p(3,"mat-card-content"),D(4," H\xE4r \xE4r content "),g()())},dependencies:[mn,Xi,ei],styles:["[_nghost-%COMP%]{display:flex;justify-content:center;align-items:center;width:100vw;height:100vh;overflow-y:scroll}.container[_ngcontent-%COMP%]{width:85%;height:80%;background-color:--var(mat-sys-surface-container)}"]})};var Gx=[{canActivate:[cb],path:"",component:mf},{canActivate:[cb],path:"app",component:Lf},{path:"admin",component:jf}];var Bf=class t{intercept(n,e){let i=sessionStorage.getItem("token");if(!i)return e.handle(n);let r=n.clone({setHeaders:X(_({},i?{Authorization:`Bearer ${i}`}:{}),{"ngrok-skip-browser-warning":"true"})});return e.handle(r)}static \u0275fac=function(e){return new(e||t)};static \u0275prov=b({token:t,factory:t.\u0275fac})};var qx={providers:[hh(),Xg(Gx),yg(wg()),{provide:iu,useClass:Bf,multi:!0}]};var Vf=class t{title=F("frontend");static \u0275fac=function(e){return new(e||t)};static \u0275cmp=E({type:t,selectors:[["app-root"]],decls:1,vars:0,template:function(e,i){e&1&&ne(0,"router-outlet")},dependencies:[el],encapsulation:2})};fg(Vf,qx).catch(t=>console.error(t));
