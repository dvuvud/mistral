var _I=Object.defineProperty,vI=Object.defineProperties;var bI=Object.getOwnPropertyDescriptors;var ny=Object.getOwnPropertySymbols;var yI=Object.prototype.hasOwnProperty,CI=Object.prototype.propertyIsEnumerable;var iy=(t,i,e)=>i in t?_I(t,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[i]=e,C=(t,i)=>{for(var e in i||={})yI.call(i,e)&&iy(t,e,i[e]);if(ny)for(var e of ny(i))CI.call(i,e)&&iy(t,e,i[e]);return t},ne=(t,i)=>vI(t,bI(i));var Gt=null,id=!1,Lh=1,wI=null,pt=Symbol("SIGNAL");function ee(t){let i=Gt;return Gt=t,i}function sd(){return Gt}var uo={version:0,lastCleanEpoch:0,dirty:!1,producers:void 0,producersTail:void 0,consumers:void 0,consumersTail:void 0,recomputing:!1,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,kind:"unknown",producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function xr(t){if(id)throw new Error("");if(Gt===null)return;Gt.consumerOnSignalRead(t);let i=Gt.producersTail;if(i!==void 0&&i.producer===t)return;let e,n=Gt.recomputing;if(n&&(e=i!==void 0?i.nextProducer:Gt.producers,e!==void 0&&e.producer===t)){Gt.producersTail=e,e.lastReadVersion=t.version;return}let r=t.consumersTail;if(r!==void 0&&r.consumer===Gt&&(!n||xI(r,Gt)))return;let o=fa(Gt),a={producer:t,consumer:Gt,nextProducer:e,prevConsumer:r,lastReadVersion:t.version,nextConsumer:void 0};Gt.producersTail=a,i!==void 0?i.nextProducer=a:Gt.producers=a,o&&sy(t,a)}function ry(){Lh++}function ld(t){if(!(fa(t)&&!t.dirty)&&!(!t.dirty&&t.lastCleanEpoch===Lh)){if(!t.producerMustRecompute(t)&&!ma(t)){ad(t);return}t.producerRecomputeValue(t),ad(t)}}function Vh(t){if(t.consumers===void 0)return;let i=id;id=!0;try{for(let e=t.consumers;e!==void 0;e=e.nextConsumer){let n=e.consumer;n.dirty||DI(n)}}finally{id=i}}function Bh(){return Gt?.consumerAllowSignalWrites!==!1}function DI(t){t.dirty=!0,Vh(t),t.consumerMarkedDirty?.(t)}function ad(t){t.dirty=!1,t.lastCleanEpoch=Lh}function Er(t){return t&&oy(t),ee(t)}function oy(t){t.producersTail=void 0,t.recomputing=!0}function mo(t,i){ee(i),t&&ay(t)}function ay(t){t.recomputing=!1;let i=t.producersTail,e=i!==void 0?i.nextProducer:t.producers;if(e!==void 0){if(fa(t))do e=jh(e);while(e!==void 0);i!==void 0?i.nextProducer=void 0:t.producers=void 0}}function ma(t){for(let i=t.producers;i!==void 0;i=i.nextProducer){let e=i.producer,n=i.lastReadVersion;if(n!==e.version||(ld(e),n!==e.version))return!0}return!1}function Mr(t){if(fa(t)){let i=t.producers;for(;i!==void 0;)i=jh(i)}t.producers=void 0,t.producersTail=void 0,t.consumers=void 0,t.consumersTail=void 0}function sy(t,i){let e=t.consumersTail,n=fa(t);if(e!==void 0?(i.nextConsumer=e.nextConsumer,e.nextConsumer=i):(i.nextConsumer=void 0,t.consumers=i),i.prevConsumer=e,t.consumersTail=i,!n)for(let r=t.producers;r!==void 0;r=r.nextProducer)sy(r.producer,r)}function jh(t){let i=t.producer,e=t.nextProducer,n=t.nextConsumer,r=t.prevConsumer;if(t.nextConsumer=void 0,t.prevConsumer=void 0,n!==void 0?n.prevConsumer=r:i.consumersTail=r,r!==void 0)r.nextConsumer=n;else if(i.consumers=n,!fa(i)){let o=i.producers;for(;o!==void 0;)o=jh(o)}return e}function fa(t){return t.consumerIsAlwaysLive||t.consumers!==void 0}function cd(t){wI?.(t)}function xI(t,i){let e=i.producersTail;if(e!==void 0){let n=i.producers;do{if(n===t)return!0;if(n===e)break;n=n.nextProducer}while(n!==void 0)}return!1}function dd(t,i){return Object.is(t,i)}function Ys(t,i){let e=Object.create(EI);e.computation=t,i!==void 0&&(e.equal=i);let n=()=>{if(ld(e),xr(e),e.value===qs)throw e.error;return e.value};return n[pt]=e,cd(e),n}var rd=Symbol("UNSET"),od=Symbol("COMPUTING"),qs=Symbol("ERRORED"),EI=ne(C({},uo),{value:rd,dirty:!0,error:null,equal:dd,kind:"computed",producerMustRecompute(t){return t.value===rd||t.value===od},producerRecomputeValue(t){if(t.value===od)throw new Error("");let i=t.value;t.value=od;let e=Er(t),n,r=!1;try{n=t.computation(),ee(null),r=i!==rd&&i!==qs&&n!==qs&&t.equal(i,n)}catch(o){n=qs,t.error=o}finally{mo(t,e)}if(r){t.value=i;return}t.value=n,t.version++}});function MI(){throw new Error}var ly=MI;function cy(t){ly(t)}function Hh(t){ly=t}var SI=null;function Uh(t,i){let e=Object.create(Qs);e.value=t,i!==void 0&&(e.equal=i);let n=()=>dy(e);return n[pt]=e,cd(e),[n,a=>fo(e,a),a=>zh(e,a)]}function dy(t){return xr(t),t.value}function fo(t,i){Bh()||cy(t),t.equal(t.value,i)||(t.value=i,II(t))}function zh(t,i){Bh()||cy(t),fo(t,i(t.value))}var Qs=ne(C({},uo),{equal:dd,value:void 0,kind:"signal"});function II(t){t.version++,ry(),Vh(t),SI?.(t)}var $h=ne(C({},uo),{consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!0,dirty:!0,kind:"effect"});function Wh(t){if(t.dirty=!1,t.version>0&&!ma(t))return;t.version++;let i=Er(t);try{t.cleanup(),t.fn()}finally{mo(t,i)}}function fe(t){return typeof t=="function"}function ha(t){let e=t(n=>{Error.call(n),n.stack=new Error().stack});return e.prototype=Object.create(Error.prototype),e.prototype.constructor=e,e}var ud=ha(t=>function(e){t(this),this.message=e?`${e.length} errors occurred during unsubscription:
${e.map((n,r)=>`${r+1}) ${n.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=e});function ho(t,i){if(t){let e=t.indexOf(i);0<=e&&t.splice(e,1)}}var ae=class t{constructor(i){this.initialTeardown=i,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let i;if(!this.closed){this.closed=!0;let{_parentage:e}=this;if(e)if(this._parentage=null,Array.isArray(e))for(let o of e)o.remove(this);else e.remove(this);let{initialTeardown:n}=this;if(fe(n))try{n()}catch(o){i=o instanceof ud?o.errors:[o]}let{_finalizers:r}=this;if(r){this._finalizers=null;for(let o of r)try{uy(o)}catch(a){i=i??[],a instanceof ud?i=[...i,...a.errors]:i.push(a)}}if(i)throw new ud(i)}}add(i){var e;if(i&&i!==this)if(this.closed)uy(i);else{if(i instanceof t){if(i.closed||i._hasParent(this))return;i._addParent(this)}(this._finalizers=(e=this._finalizers)!==null&&e!==void 0?e:[]).push(i)}}_hasParent(i){let{_parentage:e}=this;return e===i||Array.isArray(e)&&e.includes(i)}_addParent(i){let{_parentage:e}=this;this._parentage=Array.isArray(e)?(e.push(i),e):e?[e,i]:i}_removeParent(i){let{_parentage:e}=this;e===i?this._parentage=null:Array.isArray(e)&&ho(e,i)}remove(i){let{_finalizers:e}=this;e&&ho(e,i),i instanceof t&&i._removeParent(this)}};ae.EMPTY=(()=>{let t=new ae;return t.closed=!0,t})();var Gh=ae.EMPTY;function md(t){return t instanceof ae||t&&"closed"in t&&fe(t.remove)&&fe(t.add)&&fe(t.unsubscribe)}function uy(t){fe(t)?t():t.unsubscribe()}var ei={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var pa={setTimeout(t,i,...e){let{delegate:n}=pa;return n?.setTimeout?n.setTimeout(t,i,...e):setTimeout(t,i,...e)},clearTimeout(t){let{delegate:i}=pa;return(i?.clearTimeout||clearTimeout)(t)},delegate:void 0};function fd(t){pa.setTimeout(()=>{let{onUnhandledError:i}=ei;if(i)i(t);else throw t})}function Zs(){}var my=qh("C",void 0,void 0);function fy(t){return qh("E",void 0,t)}function hy(t){return qh("N",t,void 0)}function qh(t,i,e){return{kind:t,value:i,error:e}}var po=null;function ga(t){if(ei.useDeprecatedSynchronousErrorHandling){let i=!po;if(i&&(po={errorThrown:!1,error:null}),t(),i){let{errorThrown:e,error:n}=po;if(po=null,e)throw n}}else t()}function py(t){ei.useDeprecatedSynchronousErrorHandling&&po&&(po.errorThrown=!0,po.error=t)}var go=class extends ae{constructor(i){super(),this.isStopped=!1,i?(this.destination=i,md(i)&&i.add(this)):this.destination=AI}static create(i,e,n){return new Ki(i,e,n)}next(i){this.isStopped?Qh(hy(i),this):this._next(i)}error(i){this.isStopped?Qh(fy(i),this):(this.isStopped=!0,this._error(i))}complete(){this.isStopped?Qh(my,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(i){this.destination.next(i)}_error(i){try{this.destination.error(i)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},TI=Function.prototype.bind;function Yh(t,i){return TI.call(t,i)}var Zh=class{constructor(i){this.partialObserver=i}next(i){let{partialObserver:e}=this;if(e.next)try{e.next(i)}catch(n){hd(n)}}error(i){let{partialObserver:e}=this;if(e.error)try{e.error(i)}catch(n){hd(n)}else hd(i)}complete(){let{partialObserver:i}=this;if(i.complete)try{i.complete()}catch(e){hd(e)}}},Ki=class extends go{constructor(i,e,n){super();let r;if(fe(i)||!i)r={next:i??void 0,error:e??void 0,complete:n??void 0};else{let o;this&&ei.useDeprecatedNextContext?(o=Object.create(i),o.unsubscribe=()=>this.unsubscribe(),r={next:i.next&&Yh(i.next,o),error:i.error&&Yh(i.error,o),complete:i.complete&&Yh(i.complete,o)}):r=i}this.destination=new Zh(r)}};function hd(t){ei.useDeprecatedSynchronousErrorHandling?py(t):fd(t)}function kI(t){throw t}function Qh(t,i){let{onStoppedNotification:e}=ei;e&&pa.setTimeout(()=>e(t,i))}var AI={closed:!0,next:Zs,error:kI,complete:Zs};var _a=typeof Symbol=="function"&&Symbol.observable||"@@observable";function vn(t){return t}function Kh(...t){return Xh(t)}function Xh(t){return t.length===0?vn:t.length===1?t[0]:function(e){return t.reduce((n,r)=>r(n),e)}}var se=(()=>{class t{constructor(e){e&&(this._subscribe=e)}lift(e){let n=new t;return n.source=this,n.operator=e,n}subscribe(e,n,r){let o=OI(e)?e:new Ki(e,n,r);return ga(()=>{let{operator:a,source:s}=this;o.add(a?a.call(o,s):s?this._subscribe(o):this._trySubscribe(o))}),o}_trySubscribe(e){try{return this._subscribe(e)}catch(n){e.error(n)}}forEach(e,n){return n=gy(n),new n((r,o)=>{let a=new Ki({next:s=>{try{e(s)}catch(l){o(l),a.unsubscribe()}},error:o,complete:r});this.subscribe(a)})}_subscribe(e){var n;return(n=this.source)===null||n===void 0?void 0:n.subscribe(e)}[_a](){return this}pipe(...e){return Xh(e)(this)}toPromise(e){return e=gy(e),new e((n,r)=>{let o;this.subscribe(a=>o=a,a=>r(a),()=>n(o))})}}return t.create=i=>new t(i),t})();function gy(t){var i;return(i=t??ei.Promise)!==null&&i!==void 0?i:Promise}function RI(t){return t&&fe(t.next)&&fe(t.error)&&fe(t.complete)}function OI(t){return t&&t instanceof go||RI(t)&&md(t)}function NI(t){return fe(t?.lift)}function he(t){return i=>{if(NI(i))return i.lift(function(e){try{return t(e,this)}catch(n){this.error(n)}});throw new TypeError("Unable to lift unknown Observable type")}}function ge(t,i,e,n,r){return new Jh(t,i,e,n,r)}var Jh=class extends go{constructor(i,e,n,r,o,a){super(i),this.onFinalize=o,this.shouldUnsubscribe=a,this._next=e?function(s){try{e(s)}catch(l){i.error(l)}}:super._next,this._error=r?function(s){try{r(s)}catch(l){i.error(l)}finally{this.unsubscribe()}}:super._error,this._complete=n?function(){try{n()}catch(s){i.error(s)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var i;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:e}=this;super.unsubscribe(),!e&&((i=this.onFinalize)===null||i===void 0||i.call(this))}}};var _y=ha(t=>function(){t(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var S=(()=>{class t extends se{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(e){let n=new pd(this,this);return n.operator=e,n}_throwIfClosed(){if(this.closed)throw new _y}next(e){ga(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let n of this.currentObservers)n.next(e)}})}error(e){ga(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=e;let{observers:n}=this;for(;n.length;)n.shift().error(e)}})}complete(){ga(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:e}=this;for(;e.length;)e.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var e;return((e=this.observers)===null||e===void 0?void 0:e.length)>0}_trySubscribe(e){return this._throwIfClosed(),super._trySubscribe(e)}_subscribe(e){return this._throwIfClosed(),this._checkFinalizedStatuses(e),this._innerSubscribe(e)}_innerSubscribe(e){let{hasError:n,isStopped:r,observers:o}=this;return n||r?Gh:(this.currentObservers=null,o.push(e),new ae(()=>{this.currentObservers=null,ho(o,e)}))}_checkFinalizedStatuses(e){let{hasError:n,thrownError:r,isStopped:o}=this;n?e.error(r):o&&e.complete()}asObservable(){let e=new se;return e.source=this,e}}return t.create=(i,e)=>new pd(i,e),t})(),pd=class extends S{constructor(i,e){super(),this.destination=i,this.source=e}next(i){var e,n;(n=(e=this.destination)===null||e===void 0?void 0:e.next)===null||n===void 0||n.call(e,i)}error(i){var e,n;(n=(e=this.destination)===null||e===void 0?void 0:e.error)===null||n===void 0||n.call(e,i)}complete(){var i,e;(e=(i=this.destination)===null||i===void 0?void 0:i.complete)===null||e===void 0||e.call(i)}_subscribe(i){var e,n;return(n=(e=this.source)===null||e===void 0?void 0:e.subscribe(i))!==null&&n!==void 0?n:Gh}};var lt=class extends S{constructor(i){super(),this._value=i}get value(){return this.getValue()}_subscribe(i){let e=super._subscribe(i);return!e.closed&&i.next(this._value),e}getValue(){let{hasError:i,thrownError:e,_value:n}=this;if(i)throw e;return this._throwIfClosed(),n}next(i){super.next(this._value=i)}};var Ks={now(){return(Ks.delegate||Date).now()},delegate:void 0};var bn=class extends S{constructor(i=1/0,e=1/0,n=Ks){super(),this._bufferSize=i,this._windowTime=e,this._timestampProvider=n,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=e===1/0,this._bufferSize=Math.max(1,i),this._windowTime=Math.max(1,e)}next(i){let{isStopped:e,_buffer:n,_infiniteTimeWindow:r,_timestampProvider:o,_windowTime:a}=this;e||(n.push(i),!r&&n.push(o.now()+a)),this._trimBuffer(),super.next(i)}_subscribe(i){this._throwIfClosed(),this._trimBuffer();let e=this._innerSubscribe(i),{_infiniteTimeWindow:n,_buffer:r}=this,o=r.slice();for(let a=0;a<o.length&&!i.closed;a+=n?1:2)i.next(o[a]);return this._checkFinalizedStatuses(i),e}_trimBuffer(){let{_bufferSize:i,_timestampProvider:e,_buffer:n,_infiniteTimeWindow:r}=this,o=(r?1:2)*i;if(i<1/0&&o<n.length&&n.splice(0,n.length-o),!r){let a=e.now(),s=0;for(let l=1;l<n.length&&n[l]<=a;l+=2)s=l;s&&n.splice(0,s+1)}}};var gd=class extends ae{constructor(i,e){super()}schedule(i,e=0){return this}};var Xs={setInterval(t,i,...e){let{delegate:n}=Xs;return n?.setInterval?n.setInterval(t,i,...e):setInterval(t,i,...e)},clearInterval(t){let{delegate:i}=Xs;return(i?.clearInterval||clearInterval)(t)},delegate:void 0};var _d=class extends gd{constructor(i,e){super(i,e),this.scheduler=i,this.work=e,this.pending=!1}schedule(i,e=0){var n;if(this.closed)return this;this.state=i;let r=this.id,o=this.scheduler;return r!=null&&(this.id=this.recycleAsyncId(o,r,e)),this.pending=!0,this.delay=e,this.id=(n=this.id)!==null&&n!==void 0?n:this.requestAsyncId(o,this.id,e),this}requestAsyncId(i,e,n=0){return Xs.setInterval(i.flush.bind(i,this),n)}recycleAsyncId(i,e,n=0){if(n!=null&&this.delay===n&&this.pending===!1)return e;e!=null&&Xs.clearInterval(e)}execute(i,e){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;let n=this._execute(i,e);if(n)return n;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(i,e){let n=!1,r;try{this.work(i)}catch(o){n=!0,r=o||new Error("Scheduled action threw falsy error")}if(n)return this.unsubscribe(),r}unsubscribe(){if(!this.closed){let{id:i,scheduler:e}=this,{actions:n}=e;this.work=this.state=this.scheduler=null,this.pending=!1,ho(n,this),i!=null&&(this.id=this.recycleAsyncId(e,i,null)),this.delay=null,super.unsubscribe()}}};var va=class t{constructor(i,e=t.now){this.schedulerActionCtor=i,this.now=e}schedule(i,e=0,n){return new this.schedulerActionCtor(this,i).schedule(n,e)}};va.now=Ks.now;var vd=class extends va{constructor(i,e=va.now){super(i,e),this.actions=[],this._active=!1}flush(i){let{actions:e}=this;if(this._active){e.push(i);return}let n;this._active=!0;do if(n=i.execute(i.state,i.delay))break;while(i=e.shift());if(this._active=!1,n){for(;i=e.shift();)i.unsubscribe();throw n}}};var Js=new vd(_d),vy=Js;var et=new se(t=>t.complete());function bd(t){return t&&fe(t.schedule)}function ep(t){return t[t.length-1]}function yd(t){return fe(ep(t))?t.pop():void 0}function Ci(t){return bd(ep(t))?t.pop():void 0}function by(t,i){return typeof ep(t)=="number"?t.pop():i}function Cy(t,i,e,n){function r(o){return o instanceof e?o:new e(function(a){a(o)})}return new(e||(e=Promise))(function(o,a){function s(u){try{d(n.next(u))}catch(f){a(f)}}function l(u){try{d(n.throw(u))}catch(f){a(f)}}function d(u){u.done?o(u.value):r(u.value).then(s,l)}d((n=n.apply(t,i||[])).next())})}function yy(t){var i=typeof Symbol=="function"&&Symbol.iterator,e=i&&t[i],n=0;if(e)return e.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}};throw new TypeError(i?"Object is not iterable.":"Symbol.iterator is not defined.")}function _o(t){return this instanceof _o?(this.v=t,this):new _o(t)}function wy(t,i,e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n=e.apply(t,i||[]),r,o=[];return r=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),s("next"),s("throw"),s("return",a),r[Symbol.asyncIterator]=function(){return this},r;function a(v){return function(w){return Promise.resolve(w).then(v,f)}}function s(v,w){n[v]&&(r[v]=function(F){return new Promise(function(U,Q){o.push([v,F,U,Q])>1||l(v,F)})},w&&(r[v]=w(r[v])))}function l(v,w){try{d(n[v](w))}catch(F){_(o[0][3],F)}}function d(v){v.value instanceof _o?Promise.resolve(v.value.v).then(u,f):_(o[0][2],v)}function u(v){l("next",v)}function f(v){l("throw",v)}function _(v,w){v(w),o.shift(),o.length&&l(o[0][0],o[0][1])}}function Dy(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=t[Symbol.asyncIterator],e;return i?i.call(t):(t=typeof yy=="function"?yy(t):t[Symbol.iterator](),e={},n("next"),n("throw"),n("return"),e[Symbol.asyncIterator]=function(){return this},e);function n(o){e[o]=t[o]&&function(a){return new Promise(function(s,l){a=t[o](a),r(s,l,a.done,a.value)})}}function r(o,a,s,l){Promise.resolve(l).then(function(d){o({value:d,done:s})},a)}}var Cd=t=>t&&typeof t.length=="number"&&typeof t!="function";function wd(t){return fe(t?.then)}function Dd(t){return fe(t[_a])}function xd(t){return Symbol.asyncIterator&&fe(t?.[Symbol.asyncIterator])}function Ed(t){return new TypeError(`You provided ${t!==null&&typeof t=="object"?"an invalid object":`'${t}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function PI(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var Md=PI();function Sd(t){return fe(t?.[Md])}function Id(t){return wy(this,arguments,function*(){let e=t.getReader();try{for(;;){let{value:n,done:r}=yield _o(e.read());if(r)return yield _o(void 0);yield yield _o(n)}}finally{e.releaseLock()}})}function Td(t){return fe(t?.getReader)}function ze(t){if(t instanceof se)return t;if(t!=null){if(Dd(t))return FI(t);if(Cd(t))return LI(t);if(wd(t))return VI(t);if(xd(t))return xy(t);if(Sd(t))return BI(t);if(Td(t))return jI(t)}throw Ed(t)}function FI(t){return new se(i=>{let e=t[_a]();if(fe(e.subscribe))return e.subscribe(i);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function LI(t){return new se(i=>{for(let e=0;e<t.length&&!i.closed;e++)i.next(t[e]);i.complete()})}function VI(t){return new se(i=>{t.then(e=>{i.closed||(i.next(e),i.complete())},e=>i.error(e)).then(null,fd)})}function BI(t){return new se(i=>{for(let e of t)if(i.next(e),i.closed)return;i.complete()})}function xy(t){return new se(i=>{HI(t,i).catch(e=>i.error(e))})}function jI(t){return xy(Id(t))}function HI(t,i){var e,n,r,o;return Cy(this,void 0,void 0,function*(){try{for(e=Dy(t);n=yield e.next(),!n.done;){let a=n.value;if(i.next(a),i.closed)return}}catch(a){r={error:a}}finally{try{n&&!n.done&&(o=e.return)&&(yield o.call(e))}finally{if(r)throw r.error}}i.complete()})}function sn(t,i,e,n=0,r=!1){let o=i.schedule(function(){e(),r?t.add(this.schedule(null,n)):this.unsubscribe()},n);if(t.add(o),!r)return o}function kd(t,i=0){return he((e,n)=>{e.subscribe(ge(n,r=>sn(n,t,()=>n.next(r),i),()=>sn(n,t,()=>n.complete(),i),r=>sn(n,t,()=>n.error(r),i)))})}function Ad(t,i=0){return he((e,n)=>{n.add(t.schedule(()=>e.subscribe(n),i))})}function Ey(t,i){return ze(t).pipe(Ad(i),kd(i))}function My(t,i){return ze(t).pipe(Ad(i),kd(i))}function Sy(t,i){return new se(e=>{let n=0;return i.schedule(function(){n===t.length?e.complete():(e.next(t[n++]),e.closed||this.schedule())})})}function Iy(t,i){return new se(e=>{let n;return sn(e,i,()=>{n=t[Md](),sn(e,i,()=>{let r,o;try{({value:r,done:o}=n.next())}catch(a){e.error(a);return}o?e.complete():e.next(r)},0,!0)}),()=>fe(n?.return)&&n.return()})}function Rd(t,i){if(!t)throw new Error("Iterable cannot be null");return new se(e=>{sn(e,i,()=>{let n=t[Symbol.asyncIterator]();sn(e,i,()=>{n.next().then(r=>{r.done?e.complete():e.next(r.value)})},0,!0)})})}function Ty(t,i){return Rd(Id(t),i)}function ky(t,i){if(t!=null){if(Dd(t))return Ey(t,i);if(Cd(t))return Sy(t,i);if(wd(t))return My(t,i);if(xd(t))return Rd(t,i);if(Sd(t))return Iy(t,i);if(Td(t))return Ty(t,i)}throw Ed(t)}function $e(t,i){return i?ky(t,i):ze(t)}function q(...t){let i=Ci(t);return $e(t,i)}function vo(t,i){let e=fe(t)?t:()=>t,n=r=>r.error(e());return new se(i?r=>i.schedule(n,0,r):n)}function el(t){return!!t&&(t instanceof se||fe(t.lift)&&fe(t.subscribe))}var bo=ha(t=>function(){t(this),this.name="EmptyError",this.message="no elements in sequence"});function Ay(t){return t instanceof Date&&!isNaN(t)}function le(t,i){return he((e,n)=>{let r=0;e.subscribe(ge(n,o=>{n.next(t.call(i,o,r++))}))})}var{isArray:UI}=Array;function zI(t,i){return UI(i)?t(...i):t(i)}function Od(t){return le(i=>zI(t,i))}var{isArray:$I}=Array,{getPrototypeOf:WI,prototype:GI,keys:qI}=Object;function Nd(t){if(t.length===1){let i=t[0];if($I(i))return{args:i,keys:null};if(YI(i)){let e=qI(i);return{args:e.map(n=>i[n]),keys:e}}}return{args:t,keys:null}}function YI(t){return t&&typeof t=="object"&&WI(t)===GI}function Pd(t,i){return t.reduce((e,n,r)=>(e[n]=i[r],e),{})}function ba(...t){let i=Ci(t),e=yd(t),{args:n,keys:r}=Nd(t);if(n.length===0)return $e([],i);let o=new se(QI(n,i,r?a=>Pd(r,a):vn));return e?o.pipe(Od(e)):o}function QI(t,i,e=vn){return n=>{Ry(i,()=>{let{length:r}=t,o=new Array(r),a=r,s=r;for(let l=0;l<r;l++)Ry(i,()=>{let d=$e(t[l],i),u=!1;d.subscribe(ge(n,f=>{o[l]=f,u||(u=!0,s--),s||n.next(e(o.slice()))},()=>{--a||n.complete()}))},n)},n)}}function Ry(t,i,e){t?sn(e,t,i):i()}function Oy(t,i,e,n,r,o,a,s){let l=[],d=0,u=0,f=!1,_=()=>{f&&!l.length&&!d&&i.complete()},v=F=>d<n?w(F):l.push(F),w=F=>{o&&i.next(F),d++;let U=!1;ze(e(F,u++)).subscribe(ge(i,Q=>{r?.(Q),o?v(Q):i.next(Q)},()=>{U=!0},void 0,()=>{if(U)try{for(d--;l.length&&d<n;){let Q=l.shift();a?sn(i,a,()=>w(Q)):w(Q)}_()}catch(Q){i.error(Q)}}))};return t.subscribe(ge(i,v,()=>{f=!0,_()})),()=>{s?.()}}function Bt(t,i,e=1/0){return fe(i)?Bt((n,r)=>le((o,a)=>i(n,o,r,a))(ze(t(n,r))),e):(typeof i=="number"&&(e=i),he((n,r)=>Oy(n,r,t,e)))}function Sr(t=1/0){return Bt(vn,t)}function Ny(){return Sr(1)}function Ir(...t){return Ny()($e(t,Ci(t)))}function ti(t){return new se(i=>{ze(t()).subscribe(i)})}function tl(...t){let i=yd(t),{args:e,keys:n}=Nd(t),r=new se(o=>{let{length:a}=e;if(!a){o.complete();return}let s=new Array(a),l=a,d=a;for(let u=0;u<a;u++){let f=!1;ze(e[u]).subscribe(ge(o,_=>{f||(f=!0,d--),s[u]=_},()=>l--,void 0,()=>{(!l||!f)&&(d||o.next(n?Pd(n,s):s),o.complete())}))}});return i?r.pipe(Od(i)):r}function nl(t=0,i,e=vy){let n=-1;return i!=null&&(bd(i)?e=i:n=i),new se(r=>{let o=Ay(t)?+t-e.now():t;o<0&&(o=0);let a=0;return e.schedule(function(){r.closed||(r.next(a++),0<=n?this.schedule(void 0,n):r.complete())},o)})}function Ft(...t){let i=Ci(t),e=by(t,1/0),n=t;return n.length?n.length===1?ze(n[0]):Sr(e)($e(n,i)):et}function be(t,i){return he((e,n)=>{let r=0;e.subscribe(ge(n,o=>t.call(i,o,r++)&&n.next(o)))})}function Py(t){return he((i,e)=>{let n=!1,r=null,o=null,a=!1,s=()=>{if(o?.unsubscribe(),o=null,n){n=!1;let d=r;r=null,e.next(d)}a&&e.complete()},l=()=>{o=null,a&&e.complete()};i.subscribe(ge(e,d=>{n=!0,r=d,o||ze(t(d)).subscribe(o=ge(e,s,l))},()=>{a=!0,(!n||!o||o.closed)&&e.complete()}))})}function Fd(t,i=Js){return Py(()=>nl(t,i))}function Tr(t){return he((i,e)=>{let n=null,r=!1,o;n=i.subscribe(ge(e,void 0,void 0,a=>{o=ze(t(a,Tr(t)(i))),n?(n.unsubscribe(),n=null,o.subscribe(e)):r=!0})),r&&(n.unsubscribe(),n=null,o.subscribe(e))})}function kr(t,i){return fe(i)?Bt(t,i,1):Bt(t,1)}function Xi(t,i=Js){return he((e,n)=>{let r=null,o=null,a=null,s=()=>{if(r){r.unsubscribe(),r=null;let d=o;o=null,n.next(d)}};function l(){let d=a+t,u=i.now();if(u<d){r=this.schedule(void 0,d-u),n.add(r);return}s()}e.subscribe(ge(n,d=>{o=d,a=i.now(),r||(r=i.schedule(l,t),n.add(r))},()=>{s(),n.complete()},void 0,()=>{o=r=null}))})}function Fy(t){return he((i,e)=>{let n=!1;i.subscribe(ge(e,r=>{n=!0,e.next(r)},()=>{n||e.next(t),e.complete()}))})}function rt(t){return t<=0?()=>et:he((i,e)=>{let n=0;i.subscribe(ge(e,r=>{++n<=t&&(e.next(r),t<=n&&e.complete())}))})}function Ld(t,i=vn){return t=t??ZI,he((e,n)=>{let r,o=!0;e.subscribe(ge(n,a=>{let s=i(a);(o||!t(r,s))&&(o=!1,r=s,n.next(a))}))})}function ZI(t,i){return t===i}function Ly(t=KI){return he((i,e)=>{let n=!1;i.subscribe(ge(e,r=>{n=!0,e.next(r)},()=>n?e.complete():e.error(t())))})}function KI(){return new bo}function Ar(t){return he((i,e)=>{try{i.subscribe(e)}finally{e.add(t)}})}function Ji(t,i){let e=arguments.length>=2;return n=>n.pipe(t?be((r,o)=>t(r,o,n)):vn,rt(1),e?Fy(i):Ly(()=>new bo))}function Vd(t){return t<=0?()=>et:he((i,e)=>{let n=[];i.subscribe(ge(e,r=>{n.push(r),t<n.length&&n.shift()},()=>{for(let r of n)e.next(r);e.complete()},void 0,()=>{n=null}))})}function Bd(){return he((t,i)=>{let e,n=!1;t.subscribe(ge(i,r=>{let o=e;e=r,n&&i.next([o,r]),n=!0}))})}function il(t={}){let{connector:i=()=>new S,resetOnError:e=!0,resetOnComplete:n=!0,resetOnRefCountZero:r=!0}=t;return o=>{let a,s,l,d=0,u=!1,f=!1,_=()=>{s?.unsubscribe(),s=void 0},v=()=>{_(),a=l=void 0,u=f=!1},w=()=>{let F=a;v(),F?.unsubscribe()};return he((F,U)=>{d++,!f&&!u&&_();let Q=l=l??i();U.add(()=>{d--,d===0&&!f&&!u&&(s=tp(w,r))}),Q.subscribe(U),!a&&d>0&&(a=new Ki({next:Re=>Q.next(Re),error:Re=>{f=!0,_(),s=tp(v,e,Re),Q.error(Re)},complete:()=>{u=!0,_(),s=tp(v,n),Q.complete()}}),ze(F).subscribe(a))})(o)}}function tp(t,i,...e){if(i===!0){t();return}if(i===!1)return;let n=new Ki({next:()=>{n.unsubscribe(),t()}});return ze(i(...e)).subscribe(n)}function jd(t,i,e){let n,r=!1;return t&&typeof t=="object"?{bufferSize:n=1/0,windowTime:i=1/0,refCount:r=!1,scheduler:e}=t:n=t??1/0,il({connector:()=>new bn(n,i,e),resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:r})}function yo(t){return be((i,e)=>t<=e)}function Qe(...t){let i=Ci(t);return he((e,n)=>{(i?Ir(t,e,i):Ir(t,e)).subscribe(n)})}function gt(t,i){return he((e,n)=>{let r=null,o=0,a=!1,s=()=>a&&!r&&n.complete();e.subscribe(ge(n,l=>{r?.unsubscribe();let d=0,u=o++;ze(t(l,u)).subscribe(r=ge(n,f=>n.next(i?i(l,f,u,d++):f),()=>{r=null,s()}))},()=>{a=!0,s()}))})}function ye(t){return he((i,e)=>{ze(t).subscribe(ge(e,()=>e.complete(),Zs)),!e.closed&&i.subscribe(e)})}function np(t,i=!1){return he((e,n)=>{let r=0;e.subscribe(ge(n,o=>{let a=t(o,r++);(a||i)&&n.next(o),!a&&n.complete()}))})}function ct(t,i,e){let n=fe(t)||i||e?{next:t,error:i,complete:e}:t;return n?he((r,o)=>{var a;(a=n.subscribe)===null||a===void 0||a.call(n);let s=!0;r.subscribe(ge(o,l=>{var d;(d=n.next)===null||d===void 0||d.call(n,l),o.next(l)},()=>{var l;s=!1,(l=n.complete)===null||l===void 0||l.call(n),o.complete()},l=>{var d;s=!1,(d=n.error)===null||d===void 0||d.call(n,l),o.error(l)},()=>{var l,d;s&&((l=n.unsubscribe)===null||l===void 0||l.call(n)),(d=n.finalize)===null||d===void 0||d.call(n)}))}):vn}var ip;function rl(){return ip}function wi(t){let i=ip;return ip=t,i}function rp(t,i){let e=rl();if(!e)throw new Error("Current injector is not set.");if(!t.\u0275prov)throw new Error("Token is not an injectable");return e.retrieve(t,i)}var Vy=Symbol("NotFound");function ya(t){return t===Vy||t?.name==="\u0275NotFound"}function By(t){let i=ee(null);try{return t()}finally{ee(i)}}var qd="https://angular.dev/best-practices/security#preventing-cross-site-scripting-xss",L=class extends Error{code;constructor(i,e){super(Nn(i,e)),this.code=i}};function XI(t){return`NG0${Math.abs(t)}`}function Nn(t,i){return`${XI(t)}${i?": "+i:""}`}var wa=globalThis;function Fe(t){for(let i in t)if(t[i]===Fe)return i;throw Error("")}function $y(t,i){for(let e in i)i.hasOwnProperty(e)&&!t.hasOwnProperty(e)&&(t[e]=i[e])}function ul(t){if(typeof t=="string")return t;if(Array.isArray(t))return`[${t.map(ul).join(", ")}]`;if(t==null)return""+t;let i=t.overriddenName||t.name;if(i)return`${i}`;let e=t.toString();if(e==null)return""+e;let n=e.indexOf(`
`);return n>=0?e.slice(0,n):e}function Yd(t,i){return t?i?`${t} ${i}`:t:i||""}var JI=Fe({__forward_ref__:Fe});function yn(t){return t.__forward_ref__=yn,t}function jt(t){return _p(t)?t():t}function _p(t){return typeof t=="function"&&t.hasOwnProperty(JI)&&t.__forward_ref__===yn}function b(t){return{token:t.token,providedIn:t.providedIn||null,factory:t.factory,value:void 0}}function z(t){return{providers:t.providers||[],imports:t.imports||[]}}function ml(t){return eT(t,Qd)}function vp(t){return ml(t)!==null}function eT(t,i){return t.hasOwnProperty(i)&&t[i]||null}function tT(t){let i=t?.[Qd]??null;return i||null}function ap(t){return t&&t.hasOwnProperty(Ud)?t[Ud]:null}var Qd=Fe({\u0275prov:Fe}),Ud=Fe({\u0275inj:Fe}),y=class{_desc;ngMetadataName="InjectionToken";\u0275prov;constructor(i,e){this._desc=i,this.\u0275prov=void 0,typeof e=="number"?this.__NG_ELEMENT_ID__=e:e!==void 0&&(this.\u0275prov=b({token:this,providedIn:e.providedIn||"root",factory:e.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};function bp(t){return t&&!!t.\u0275providers}var yp=Fe({\u0275cmp:Fe}),Cp=Fe({\u0275dir:Fe}),wp=Fe({\u0275pipe:Fe}),Dp=Fe({\u0275mod:Fe}),al=Fe({\u0275fac:Fe}),Eo=Fe({__NG_ELEMENT_ID__:Fe}),jy=Fe({__NG_ENV_ID__:Fe});function xp(t){return Zd(t,"@NgModule"),t[Dp]||null}function xi(t){return Zd(t,"@Component"),t[yp]||null}function Ep(t){return Zd(t,"@Directive"),t[Cp]||null}function Wy(t){return Zd(t,"@Pipe"),t[wp]||null}function Zd(t,i){if(t==null)throw new L(-919,!1)}function Da(t){return typeof t=="string"?t:t==null?"":String(t)}var Gy=Fe({ngErrorCode:Fe}),nT=Fe({ngErrorMessage:Fe}),iT=Fe({ngTokenPath:Fe});function Mp(t,i){return qy("",-200,i)}function Kd(t,i){throw new L(-201,!1)}function qy(t,i,e){let n=new L(i,t);return n[Gy]=i,n[nT]=t,e&&(n[iT]=e),n}function rT(t){return t[Gy]}var sp;function Yy(){return sp}function Jt(t){let i=sp;return sp=t,i}function Sp(t,i,e){let n=ml(t);if(n&&n.providedIn=="root")return n.value===void 0?n.value=n.factory():n.value;if(e&8)return null;if(i!==void 0)return i;Kd(t,"")}var oT={},Co=oT,aT="__NG_DI_FLAG__",lp=class{injector;constructor(i){this.injector=i}retrieve(i,e){let n=wo(e)||0;try{return this.injector.get(i,n&8?null:Co,n)}catch(r){if(ya(r))return r;throw r}}};function sT(t,i=0){let e=rl();if(e===void 0)throw new L(-203,!1);if(e===null)return Sp(t,void 0,i);{let n=lT(i),r=e.retrieve(t,n);if(ya(r)){if(n.optional)return null;throw r}return r}}function W(t,i=0){return(Yy()||sT)(jt(t),i)}function c(t,i){return W(t,wo(i))}function wo(t){return typeof t>"u"||typeof t=="number"?t:0|(t.optional&&8)|(t.host&&1)|(t.self&&2)|(t.skipSelf&&4)}function lT(t){return{optional:!!(t&8),host:!!(t&1),self:!!(t&2),skipSelf:!!(t&4)}}function cp(t){let i=[];for(let e=0;e<t.length;e++){let n=jt(t[e]);if(Array.isArray(n)){if(n.length===0)throw new L(900,!1);let r,o=0;for(let a=0;a<n.length;a++){let s=n[a],l=cT(s);typeof l=="number"?l===-1?r=s.token:o|=l:r=s}i.push(W(r,o))}else i.push(W(n))}return i}function cT(t){return t[aT]}function Rr(t,i){let e=t.hasOwnProperty(al);return e?t[al]:null}function Qy(t,i,e){if(t.length!==i.length)return!1;for(let n=0;n<t.length;n++){let r=t[n],o=i[n];if(e&&(r=e(r),o=e(o)),o!==r)return!1}return!0}function Zy(t){return t.flat(Number.POSITIVE_INFINITY)}function Xd(t,i){t.forEach(e=>Array.isArray(e)?Xd(e,i):i(e))}function Ip(t,i,e){i>=t.length?t.push(e):t.splice(i,0,e)}function fl(t,i){return i>=t.length-1?t.pop():t.splice(i,1)[0]}function Ky(t,i){let e=[];for(let n=0;n<t;n++)e.push(i);return e}function Xy(t,i,e,n){let r=t.length;if(r==i)t.push(e,n);else if(r===1)t.push(n,t[0]),t[0]=e;else{for(r--,t.push(t[r-1],t[r]);r>i;){let o=r-2;t[r]=t[o],r--}t[i]=e,t[i+1]=n}}function hl(t,i,e){let n=xa(t,i);return n>=0?t[n|1]=e:(n=~n,Xy(t,n,i,e)),n}function Jd(t,i){let e=xa(t,i);if(e>=0)return t[e|1]}function xa(t,i){return dT(t,i,1)}function dT(t,i,e){let n=0,r=t.length>>e;for(;r!==n;){let o=n+(r-n>>1),a=t[o<<e];if(i===a)return o<<e;a>i?r=o:n=o+1}return~(r<<e)}var Pr={},qt=[],Fr=new y(""),Tp=new y("",-1),kp=new y(""),sl=class{get(i,e=Co){if(e===Co){let r=qy("",-201);throw r.name="\u0275NotFound",r}return e}};function Ei(t){return{\u0275providers:t}}function Jy(t){return Ei([{provide:Fr,multi:!0,useValue:t}])}function e0(...t){return{\u0275providers:Ap(!0,t),\u0275fromNgModule:!0}}function Ap(t,...i){let e=[],n=new Set,r,o=a=>{e.push(a)};return Xd(i,a=>{let s=a;zd(s,o,[],n)&&(r||=[],r.push(s))}),r!==void 0&&t0(r,o),e}function t0(t,i){for(let e=0;e<t.length;e++){let{ngModule:n,providers:r}=t[e];Rp(r,o=>{i(o,n)})}}function zd(t,i,e,n){if(t=jt(t),!t)return!1;let r=null,o=ap(t),a=!o&&xi(t);if(!o&&!a){let l=t.ngModule;if(o=ap(l),o)r=l;else return!1}else{if(a&&!a.standalone)return!1;r=t}let s=n.has(r);if(a){if(s)return!1;if(n.add(r),a.dependencies){let l=typeof a.dependencies=="function"?a.dependencies():a.dependencies;for(let d of l)zd(d,i,e,n)}}else if(o){if(o.imports!=null&&!s){n.add(r);let d;Xd(o.imports,u=>{zd(u,i,e,n)&&(d||=[],d.push(u))}),d!==void 0&&t0(d,i)}if(!s){let d=Rr(r)||(()=>new r);i({provide:r,useFactory:d,deps:qt},r),i({provide:kp,useValue:r,multi:!0},r),i({provide:Fr,useValue:()=>W(r),multi:!0},r)}let l=o.providers;if(l!=null&&!s){let d=t;Rp(l,u=>{i(u,d)})}}else return!1;return r!==t&&t.providers!==void 0}function Rp(t,i){for(let e of t)bp(e)&&(e=e.\u0275providers),Array.isArray(e)?Rp(e,i):i(e)}var uT=Fe({provide:String,useValue:Fe});function n0(t){return t!==null&&typeof t=="object"&&uT in t}function mT(t){return!!(t&&t.useExisting)}function fT(t){return!!(t&&t.useFactory)}function Do(t){return typeof t=="function"}function i0(t){return!!t.useClass}var pl=new y(""),Hd={},Hy={},op;function Ea(){return op===void 0&&(op=new sl),op}var Le=class{},xo=class extends Le{parent;source;scopes;records=new Map;_ngOnDestroyHooks=new Set;_onDestroyHooks=[];get destroyed(){return this._destroyed}_destroyed=!1;injectorDefTypes;constructor(i,e,n,r){super(),this.parent=e,this.source=n,this.scopes=r,up(i,a=>this.processProvider(a)),this.records.set(Tp,Ca(void 0,this)),r.has("environment")&&this.records.set(Le,Ca(void 0,this));let o=this.records.get(pl);o!=null&&typeof o.value=="string"&&this.scopes.add(o.value),this.injectorDefTypes=new Set(this.get(kp,qt,{self:!0}))}retrieve(i,e){let n=wo(e)||0;try{return this.get(i,Co,n)}catch(r){if(ya(r))return r;throw r}}destroy(){ol(this),this._destroyed=!0;let i=ee(null);try{for(let n of this._ngOnDestroyHooks)n.ngOnDestroy();let e=this._onDestroyHooks;this._onDestroyHooks=[];for(let n of e)n()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),ee(i)}}onDestroy(i){return ol(this),this._onDestroyHooks.push(i),()=>this.removeOnDestroy(i)}runInContext(i){ol(this);let e=wi(this),n=Jt(void 0),r;try{return i()}finally{wi(e),Jt(n)}}get(i,e=Co,n){if(ol(this),i.hasOwnProperty(jy))return i[jy](this);let r=wo(n),o,a=wi(this),s=Jt(void 0);try{if(!(r&4)){let d=this.records.get(i);if(d===void 0){let u=vT(i)&&ml(i);u&&this.injectableDefInScope(u)?d=Ca(dp(i),Hd):d=null,this.records.set(i,d)}if(d!=null)return this.hydrate(i,d,r)}let l=r&2?Ea():this.parent;return e=r&8&&e===Co?null:e,l.get(i,e)}catch(l){let d=rT(l);throw d===-200||d===-201?new L(d,null):l}finally{Jt(s),wi(a)}}resolveInjectorInitializers(){let i=ee(null),e=wi(this),n=Jt(void 0),r;try{let o=this.get(Fr,qt,{self:!0});for(let a of o)a()}finally{wi(e),Jt(n),ee(i)}}toString(){return"R3Injector[...]"}processProvider(i){i=jt(i);let e=Do(i)?i:jt(i&&i.provide),n=pT(i);if(!Do(i)&&i.multi===!0){let r=this.records.get(e);r||(r=Ca(void 0,Hd,!0),r.factory=()=>cp(r.multi),this.records.set(e,r)),e=i,r.multi.push(i)}this.records.set(e,n)}hydrate(i,e,n){let r=ee(null);try{if(e.value===Hy)throw Mp("");return e.value===Hd&&(e.value=Hy,e.value=e.factory(void 0,n)),typeof e.value=="object"&&e.value&&_T(e.value)&&this._ngOnDestroyHooks.add(e.value),e.value}finally{ee(r)}}injectableDefInScope(i){if(!i.providedIn)return!1;let e=jt(i.providedIn);return typeof e=="string"?e==="any"||this.scopes.has(e):this.injectorDefTypes.has(e)}removeOnDestroy(i){let e=this._onDestroyHooks.indexOf(i);e!==-1&&this._onDestroyHooks.splice(e,1)}};function dp(t){let i=ml(t),e=i!==null?i.factory:Rr(t);if(e!==null)return e;if(t instanceof y)throw new L(-204,!1);if(t instanceof Function)return hT(t);throw new L(-204,!1)}function hT(t){if(t.length>0)throw new L(-204,!1);let e=tT(t);return e!==null?()=>e.factory(t):()=>new t}function pT(t){if(n0(t))return Ca(void 0,t.useValue);{let i=Op(t);return Ca(i,Hd)}}function Op(t,i,e){let n;if(Do(t)){let r=jt(t);return Rr(r)||dp(r)}else if(n0(t))n=()=>jt(t.useValue);else if(fT(t))n=()=>t.useFactory(...cp(t.deps||[]));else if(mT(t))n=(r,o)=>W(jt(t.useExisting),o!==void 0&&o&8?8:void 0);else{let r=jt(t&&(t.useClass||t.provide));if(gT(t))n=()=>new r(...cp(t.deps));else return Rr(r)||dp(r)}return n}function ol(t){if(t.destroyed)throw new L(-205,!1)}function Ca(t,i,e=!1){return{factory:t,value:i,multi:e?[]:void 0}}function gT(t){return!!t.deps}function _T(t){return t!==null&&typeof t=="object"&&typeof t.ngOnDestroy=="function"}function vT(t){return typeof t=="function"||typeof t=="object"&&t.ngMetadataName==="InjectionToken"}function up(t,i){for(let e of t)Array.isArray(e)?up(e,i):e&&bp(e)?up(e.\u0275providers,i):i(e)}function Et(t,i){let e;t instanceof xo?(ol(t),e=t):e=new lp(t);let n,r=wi(e),o=Jt(void 0);try{return i()}finally{wi(r),Jt(o)}}function r0(){return Yy()!==void 0||rl()!=null}var ni=0,re=1,ce=2,xt=3,Pn=4,en=5,Mo=6,Ma=7,dt=8,Cn=9,Mi=10,He=11,Sa=12,Np=13,So=14,tn=15,Lr=16,Io=17,Si=18,tr=19,Pp=20,er=21,eu=22,Or=23,wn=24,To=25,nr=26,tt=27,o0=1,Fp=6,Vr=7,gl=8,ko=9,ot=10;function ir(t){return Array.isArray(t)&&typeof t[o0]=="object"}function ii(t){return Array.isArray(t)&&t[o0]===!0}function Lp(t){return(t.flags&4)!==0}function Ii(t){return t.componentOffset>-1}function _l(t){return(t.flags&1)===1}function Ti(t){return!!t.template}function Ia(t){return(t[ce]&512)!==0}function Ao(t){return(t[ce]&256)===256}var Vp="svg",a0="math";function Fn(t){for(;Array.isArray(t);)t=t[ni];return t}function Bp(t,i){return Fn(i[t])}function Dn(t,i){return Fn(i[t.index])}function tu(t,i){return t.data[i]}function jp(t,i){return t[i]}function Hp(t,i,e,n){e>=t.data.length&&(t.data[e]=null,t.blueprint[e]=null),i[e]=n}function Ln(t,i){let e=i[t];return ir(e)?e:e[ni]}function s0(t){return(t[ce]&4)===4}function nu(t){return(t[ce]&128)===128}function l0(t){return ii(t[xt])}function xn(t,i){return i==null?null:t[i]}function Up(t){t[Io]=0}function zp(t){t[ce]&1024||(t[ce]|=1024,nu(t)&&Ro(t))}function c0(t,i){for(;t>0;)i=i[So],t--;return i}function vl(t){return!!(t[ce]&9216||t[wn]?.dirty)}function iu(t){t[Mi].changeDetectionScheduler?.notify(8),t[ce]&64&&(t[ce]|=1024),vl(t)&&Ro(t)}function Ro(t){t[Mi].changeDetectionScheduler?.notify(0);let i=Nr(t);for(;i!==null&&!(i[ce]&8192||(i[ce]|=8192,!nu(i)));)i=Nr(i)}function $p(t,i){if(Ao(t))throw new L(911,!1);t[er]===null&&(t[er]=[]),t[er].push(i)}function d0(t,i){if(t[er]===null)return;let e=t[er].indexOf(i);e!==-1&&t[er].splice(e,1)}function Nr(t){let i=t[xt];return ii(i)?i[xt]:i}function Wp(t){return t[Ma]??=[]}function Gp(t){return t.cleanup??=[]}function u0(t,i,e,n){let r=Wp(i);r.push(e),t.firstCreatePass&&Gp(t).push(n,r.length-1)}var pe={lFrame:D0(null),bindingsEnabled:!0,skipHydrationRootTNode:null};var mp=!1;function m0(){return pe.lFrame.elementDepthCount}function f0(){pe.lFrame.elementDepthCount++}function qp(){pe.lFrame.elementDepthCount--}function Yp(){return pe.bindingsEnabled}function Qp(){return pe.skipHydrationRootTNode!==null}function Zp(t){return pe.skipHydrationRootTNode===t}function Kp(){pe.skipHydrationRootTNode=null}function ie(){return pe.lFrame.lView}function We(){return pe.lFrame.tView}function X(t){return pe.lFrame.contextLView=t,t[dt]}function J(t){return pe.lFrame.contextLView=null,t}function Mt(){let t=Xp();for(;t!==null&&t.type===64;)t=t.parent;return t}function Xp(){return pe.lFrame.currentTNode}function h0(){let t=pe.lFrame,i=t.currentTNode;return t.isParent?i:i.parent}function Ta(t,i){let e=pe.lFrame;e.currentTNode=t,e.isParent=i}function Jp(){return pe.lFrame.isParent}function eg(){pe.lFrame.isParent=!1}function p0(){return pe.lFrame.contextLView}function tg(){return mp}function ll(t){let i=mp;return mp=t,i}function ru(){let t=pe.lFrame,i=t.bindingRootIndex;return i===-1&&(i=t.bindingRootIndex=t.tView.bindingStartIndex),i}function g0(){return pe.lFrame.bindingIndex}function _0(t){return pe.lFrame.bindingIndex=t}function ki(){return pe.lFrame.bindingIndex++}function ou(t){let i=pe.lFrame,e=i.bindingIndex;return i.bindingIndex=i.bindingIndex+t,e}function v0(){return pe.lFrame.inI18n}function b0(t,i){let e=pe.lFrame;e.bindingIndex=e.bindingRootIndex=t,au(i)}function y0(){return pe.lFrame.currentDirectiveIndex}function au(t){pe.lFrame.currentDirectiveIndex=t}function C0(t){let i=pe.lFrame.currentDirectiveIndex;return i===-1?null:t[i]}function su(){return pe.lFrame.currentQueryIndex}function bl(t){pe.lFrame.currentQueryIndex=t}function bT(t){let i=t[re];return i.type===2?i.declTNode:i.type===1?t[en]:null}function ng(t,i,e){if(e&4){let r=i,o=t;for(;r=r.parent,r===null&&!(e&1);)if(r=bT(o),r===null||(o=o[So],r.type&10))break;if(r===null)return!1;i=r,t=o}let n=pe.lFrame=w0();return n.currentTNode=i,n.lView=t,!0}function lu(t){let i=w0(),e=t[re];pe.lFrame=i,i.currentTNode=e.firstChild,i.lView=t,i.tView=e,i.contextLView=t,i.bindingIndex=e.bindingStartIndex,i.inI18n=!1}function w0(){let t=pe.lFrame,i=t===null?null:t.child;return i===null?D0(t):i}function D0(t){let i={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:t,child:null,inI18n:!1};return t!==null&&(t.child=i),i}function x0(){let t=pe.lFrame;return pe.lFrame=t.parent,t.currentTNode=null,t.lView=null,t}var ig=x0;function cu(){let t=x0();t.isParent=!0,t.tView=null,t.selectedIndex=-1,t.contextLView=null,t.elementDepthCount=0,t.currentDirectiveIndex=-1,t.currentNamespace=null,t.bindingRootIndex=-1,t.bindingIndex=-1,t.currentQueryIndex=0}function E0(t){return(pe.lFrame.contextLView=c0(t,pe.lFrame.contextLView))[dt]}function Ai(){return pe.lFrame.selectedIndex}function Br(t){pe.lFrame.selectedIndex=t}function ka(){let t=pe.lFrame;return tu(t.tView,t.selectedIndex)}function Ri(){pe.lFrame.currentNamespace=Vp}function Aa(){yT()}function yT(){pe.lFrame.currentNamespace=null}function M0(){return pe.lFrame.currentNamespace}var S0=!0;function du(){return S0}function uu(t){S0=t}function fp(t,i=null,e=null,n){let r=rg(t,i,e,n);return r.resolveInjectorInitializers(),r}function rg(t,i=null,e=null,n,r=new Set){let o=[e||qt,e0(t)],a;return new xo(o,i||Ea(),a||null,r)}var G=class t{static THROW_IF_NOT_FOUND=Co;static NULL=new sl;static create(i,e){if(Array.isArray(i))return fp({name:""},e,i,"");{let n=i.name??"";return fp({name:n},i.parent,i.providers,n)}}static \u0275prov=b({token:t,providedIn:"any",factory:()=>W(Tp)});static __NG_ELEMENT_ID__=-1},Y=new y(""),Ht=(()=>{class t{static __NG_ELEMENT_ID__=CT;static __NG_ENV_ID__=e=>e}return t})(),$d=class extends Ht{_lView;constructor(i){super(),this._lView=i}get destroyed(){return Ao(this._lView)}onDestroy(i){let e=this._lView;return $p(e,i),()=>d0(e,i)}};function CT(){return new $d(ie())}var I0=!1,T0=new y(""),rr=(()=>{class t{taskId=0;pendingTasks=new Set;destroyed=!1;pendingTask=new lt(!1);debugTaskTracker=c(T0,{optional:!0});get hasPendingTasks(){return this.destroyed?!1:this.pendingTask.value}get hasPendingTasksObservable(){return this.destroyed?new se(e=>{e.next(!1),e.complete()}):this.pendingTask}add(){!this.hasPendingTasks&&!this.destroyed&&this.pendingTask.next(!0);let e=this.taskId++;return this.pendingTasks.add(e),this.debugTaskTracker?.add(e),e}has(e){return this.pendingTasks.has(e)}remove(e){this.pendingTasks.delete(e),this.debugTaskTracker?.remove(e),this.pendingTasks.size===0&&this.hasPendingTasks&&this.pendingTask.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this.hasPendingTasks&&this.pendingTask.next(!1),this.destroyed=!0,this.pendingTask.unsubscribe()}static \u0275prov=b({token:t,providedIn:"root",factory:()=>new t})}return t})(),hp=class extends S{__isAsync;destroyRef=void 0;pendingTasks=void 0;constructor(i=!1){super(),this.__isAsync=i,r0()&&(this.destroyRef=c(Ht,{optional:!0})??void 0,this.pendingTasks=c(rr,{optional:!0})??void 0)}emit(i){let e=ee(null);try{super.next(i)}finally{ee(e)}}subscribe(i,e,n){let r=i,o=e||(()=>null),a=n;if(i&&typeof i=="object"){let l=i;r=l.next?.bind(l),o=l.error?.bind(l),a=l.complete?.bind(l)}this.__isAsync&&(o=this.wrapInTimeout(o),r&&(r=this.wrapInTimeout(r)),a&&(a=this.wrapInTimeout(a)));let s=super.subscribe({next:r,error:o,complete:a});return i instanceof ae&&i.add(s),s}wrapInTimeout(i){return e=>{let n=this.pendingTasks?.add();setTimeout(()=>{try{i(e)}finally{n!==void 0&&this.pendingTasks?.remove(n)}})}}},I=hp;function Wd(...t){}function og(t){let i,e;function n(){t=Wd;try{e!==void 0&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(e),i!==void 0&&clearTimeout(i)}catch{}}return i=setTimeout(()=>{t(),n()}),typeof requestAnimationFrame=="function"&&(e=requestAnimationFrame(()=>{t(),n()})),()=>n()}function k0(t){return queueMicrotask(()=>t()),()=>{t=Wd}}var ag="isAngularZone",cl=ag+"_ID",wT=0,V=class t{hasPendingMacrotasks=!1;hasPendingMicrotasks=!1;isStable=!0;onUnstable=new I(!1);onMicrotaskEmpty=new I(!1);onStable=new I(!1);onError=new I(!1);constructor(i){let{enableLongStackTrace:e=!1,shouldCoalesceEventChangeDetection:n=!1,shouldCoalesceRunChangeDetection:r=!1,scheduleInRootZone:o=I0}=i;if(typeof Zone>"u")throw new L(908,!1);Zone.assertZonePatched();let a=this;a._nesting=0,a._outer=a._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(a._inner=a._inner.fork(new Zone.TaskTrackingZoneSpec)),e&&Zone.longStackTraceZoneSpec&&(a._inner=a._inner.fork(Zone.longStackTraceZoneSpec)),a.shouldCoalesceEventChangeDetection=!r&&n,a.shouldCoalesceRunChangeDetection=r,a.callbackScheduled=!1,a.scheduleInRootZone=o,ET(a)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get(ag)===!0}static assertInAngularZone(){if(!t.isInAngularZone())throw new L(909,!1)}static assertNotInAngularZone(){if(t.isInAngularZone())throw new L(909,!1)}run(i,e,n){return this._inner.run(i,e,n)}runTask(i,e,n,r){let o=this._inner,a=o.scheduleEventTask("NgZoneEvent: "+r,i,DT,Wd,Wd);try{return o.runTask(a,e,n)}finally{o.cancelTask(a)}}runGuarded(i,e,n){return this._inner.runGuarded(i,e,n)}runOutsideAngular(i){return this._outer.run(i)}},DT={};function sg(t){if(t._nesting==0&&!t.hasPendingMicrotasks&&!t.isStable)try{t._nesting++,t.onMicrotaskEmpty.emit(null)}finally{if(t._nesting--,!t.hasPendingMicrotasks)try{t.runOutsideAngular(()=>t.onStable.emit(null))}finally{t.isStable=!0}}}function xT(t){if(t.isCheckStableRunning||t.callbackScheduled)return;t.callbackScheduled=!0;function i(){og(()=>{t.callbackScheduled=!1,pp(t),t.isCheckStableRunning=!0,sg(t),t.isCheckStableRunning=!1})}t.scheduleInRootZone?Zone.root.run(()=>{i()}):t._outer.run(()=>{i()}),pp(t)}function ET(t){let i=()=>{xT(t)},e=wT++;t._inner=t._inner.fork({name:"angular",properties:{[ag]:!0,[cl]:e,[cl+e]:!0},onInvokeTask:(n,r,o,a,s,l)=>{if(MT(l))return n.invokeTask(o,a,s,l);try{return Uy(t),n.invokeTask(o,a,s,l)}finally{(t.shouldCoalesceEventChangeDetection&&a.type==="eventTask"||t.shouldCoalesceRunChangeDetection)&&i(),zy(t)}},onInvoke:(n,r,o,a,s,l,d)=>{try{return Uy(t),n.invoke(o,a,s,l,d)}finally{t.shouldCoalesceRunChangeDetection&&!t.callbackScheduled&&!ST(l)&&i(),zy(t)}},onHasTask:(n,r,o,a)=>{n.hasTask(o,a),r===o&&(a.change=="microTask"?(t._hasPendingMicrotasks=a.microTask,pp(t),sg(t)):a.change=="macroTask"&&(t.hasPendingMacrotasks=a.macroTask))},onHandleError:(n,r,o,a)=>(n.handleError(o,a),t.runOutsideAngular(()=>t.onError.emit(a)),!1)})}function pp(t){t._hasPendingMicrotasks||(t.shouldCoalesceEventChangeDetection||t.shouldCoalesceRunChangeDetection)&&t.callbackScheduled===!0?t.hasPendingMicrotasks=!0:t.hasPendingMicrotasks=!1}function Uy(t){t._nesting++,t.isStable&&(t.isStable=!1,t.onUnstable.emit(null))}function zy(t){t._nesting--,sg(t)}var dl=class{hasPendingMicrotasks=!1;hasPendingMacrotasks=!1;isStable=!0;onUnstable=new I;onMicrotaskEmpty=new I;onStable=new I;onError=new I;run(i,e,n){return i.apply(e,n)}runGuarded(i,e,n){return i.apply(e,n)}runOutsideAngular(i){return i()}runTask(i,e,n,r){return i.apply(e,n)}};function MT(t){return A0(t,"__ignore_ng_zone__")}function ST(t){return A0(t,"__scheduler_tick__")}function A0(t,i){return!Array.isArray(t)||t.length!==1?!1:t[0]?.data?.[i]===!0}var Yt=class{_console=console;handleError(i){this._console.error("ERROR",i)}},En=new y("",{factory:()=>{let t=c(V),i=c(Le),e;return n=>{t.runOutsideAngular(()=>{i.destroyed&&!e?setTimeout(()=>{throw n}):(e??=i.get(Yt),e.handleError(n))})}}}),R0={provide:Fr,useValue:()=>{let t=c(Yt,{optional:!0})},multi:!0},IT=new y("",{factory:()=>{let t=c(Y).defaultView;if(!t)return;let i=c(En),e=o=>{i(o.reason),o.preventDefault()},n=o=>{o.error?i(o.error):i(new Error(o.message,{cause:o})),o.preventDefault()},r=()=>{t.addEventListener("unhandledrejection",e),t.addEventListener("error",n)};typeof Zone<"u"?Zone.root.run(r):r(),c(Ht).onDestroy(()=>{t.removeEventListener("error",n),t.removeEventListener("unhandledrejection",e)})}});function lg(){return Ei([Jy(()=>{c(IT)})])}function D(t,i){let[e,n,r]=Uh(t,i?.equal),o=e,a=o[pt];return o.set=n,o.update=r,o.asReadonly=mu.bind(o),o}function mu(){let t=this[pt];if(t.readonlyFn===void 0){let i=()=>this();i[pt]=t,t.readonlyFn=i}return t.readonlyFn}var Ra=(()=>{class t{view;node;constructor(e,n){this.view=e,this.node=n}static __NG_ELEMENT_ID__=TT}return t})();function TT(){return new Ra(ie(),Mt())}var Di=class{},yl=new y("",{factory:()=>!0});var cg=new y(""),Oa=(()=>{class t{internalPendingTasks=c(rr);scheduler=c(Di);errorHandler=c(En);add(){let e=this.internalPendingTasks.add();return()=>{this.internalPendingTasks.has(e)&&(this.scheduler.notify(11),this.internalPendingTasks.remove(e))}}run(e){let n=this.add();e().catch(this.errorHandler).finally(n)}static \u0275prov=b({token:t,providedIn:"root",factory:()=>new t})}return t})(),fu=(()=>{class t{static \u0275prov=b({token:t,providedIn:"root",factory:()=>new gp})}return t})(),gp=class{dirtyEffectCount=0;queues=new Map;add(i){this.enqueue(i),this.schedule(i)}schedule(i){i.dirty&&this.dirtyEffectCount++}remove(i){let e=i.zone,n=this.queues.get(e);n.has(i)&&(n.delete(i),i.dirty&&this.dirtyEffectCount--)}enqueue(i){let e=i.zone;this.queues.has(e)||this.queues.set(e,new Set);let n=this.queues.get(e);n.has(i)||n.add(i)}flush(){for(;this.dirtyEffectCount>0;){let i=!1;for(let[e,n]of this.queues)e===null?i||=this.flushQueue(n):i||=e.run(()=>this.flushQueue(n));i||(this.dirtyEffectCount=0)}}flushQueue(i){let e=!1;for(let n of i)n.dirty&&(this.dirtyEffectCount--,e=!0,n.run());return e}},Gd=class{[pt];constructor(i){this[pt]=i}destroy(){this[pt].destroy()}};function nt(t,i){let e=i?.injector??c(G),n=i?.manualCleanup!==!0?e.get(Ht):null,r,o=e.get(Ra,null,{optional:!0}),a=e.get(Di);return o!==null?(r=RT(o.view,a,t),n instanceof $d&&n._lView===o.view&&(n=null)):r=OT(t,e.get(fu),a),r.injector=e,n!==null&&(r.onDestroyFns=[n.onDestroy(()=>r.destroy())]),new Gd(r)}var O0=ne(C({},$h),{cleanupFns:void 0,zone:null,onDestroyFns:null,run(){let t=ll(!1);try{Wh(this)}finally{ll(t)}},cleanup(){if(!this.cleanupFns?.length)return;let t=ee(null);try{for(;this.cleanupFns.length;)this.cleanupFns.pop()()}finally{this.cleanupFns=[],ee(t)}}}),kT=ne(C({},O0),{consumerMarkedDirty(){this.scheduler.schedule(this),this.notifier.notify(12)},destroy(){if(Mr(this),this.onDestroyFns!==null)for(let t of this.onDestroyFns)t();this.cleanup(),this.scheduler.remove(this)}}),AT=ne(C({},O0),{consumerMarkedDirty(){this.view[ce]|=8192,Ro(this.view),this.notifier.notify(13)},destroy(){if(Mr(this),this.onDestroyFns!==null)for(let t of this.onDestroyFns)t();this.cleanup(),this.view[Or]?.delete(this)}});function RT(t,i,e){let n=Object.create(AT);return n.view=t,n.zone=typeof Zone<"u"?Zone.current:null,n.notifier=i,n.fn=N0(n,e),t[Or]??=new Set,t[Or].add(n),n.consumerMarkedDirty(n),n}function OT(t,i,e){let n=Object.create(kT);return n.fn=N0(n,t),n.scheduler=i,n.notifier=e,n.zone=typeof Zone<"u"?Zone.current:null,n.scheduler.add(n),n.notifier.notify(12),n}function N0(t,i){return()=>{i(e=>(t.cleanupFns??=[]).push(e))}}function Al(t){return{toString:t}.toString()}function BT(t){return typeof t=="function"}function pC(t,i,e,n){i!==null?i.applyValueToInputSignal(i,n):t[e]=n}var wu=class{previousValue;currentValue;firstChange;constructor(i,e,n){this.previousValue=i,this.currentValue=e,this.firstChange=n}isFirstChange(){return this.firstChange}},Be=(()=>{let t=()=>gC;return t.ngInherit=!0,t})();function gC(t){return t.type.prototype.ngOnChanges&&(t.setInput=HT),jT}function jT(){let t=vC(this),i=t?.current;if(i){let e=t.previous;if(e===Pr)t.previous=i;else for(let n in i)e[n]=i[n];t.current=null,this.ngOnChanges(i)}}function HT(t,i,e,n,r){let o=this.declaredInputs[n],a=vC(t)||UT(t,{previous:Pr,current:null}),s=a.current||(a.current={}),l=a.previous,d=l[o];s[o]=new wu(d&&d.currentValue,e,l===Pr),pC(t,i,r,e)}var _C="__ngSimpleChanges__";function vC(t){return t[_C]||null}function UT(t,i){return t[_C]=i}var P0=[];var Ve=function(t,i=null,e){for(let n=0;n<P0.length;n++){let r=P0[n];r(t,i,e)}},Te=(function(t){return t[t.TemplateCreateStart=0]="TemplateCreateStart",t[t.TemplateCreateEnd=1]="TemplateCreateEnd",t[t.TemplateUpdateStart=2]="TemplateUpdateStart",t[t.TemplateUpdateEnd=3]="TemplateUpdateEnd",t[t.LifecycleHookStart=4]="LifecycleHookStart",t[t.LifecycleHookEnd=5]="LifecycleHookEnd",t[t.OutputStart=6]="OutputStart",t[t.OutputEnd=7]="OutputEnd",t[t.BootstrapApplicationStart=8]="BootstrapApplicationStart",t[t.BootstrapApplicationEnd=9]="BootstrapApplicationEnd",t[t.BootstrapComponentStart=10]="BootstrapComponentStart",t[t.BootstrapComponentEnd=11]="BootstrapComponentEnd",t[t.ChangeDetectionStart=12]="ChangeDetectionStart",t[t.ChangeDetectionEnd=13]="ChangeDetectionEnd",t[t.ChangeDetectionSyncStart=14]="ChangeDetectionSyncStart",t[t.ChangeDetectionSyncEnd=15]="ChangeDetectionSyncEnd",t[t.AfterRenderHooksStart=16]="AfterRenderHooksStart",t[t.AfterRenderHooksEnd=17]="AfterRenderHooksEnd",t[t.ComponentStart=18]="ComponentStart",t[t.ComponentEnd=19]="ComponentEnd",t[t.DeferBlockStateStart=20]="DeferBlockStateStart",t[t.DeferBlockStateEnd=21]="DeferBlockStateEnd",t[t.DynamicComponentStart=22]="DynamicComponentStart",t[t.DynamicComponentEnd=23]="DynamicComponentEnd",t[t.HostBindingsUpdateStart=24]="HostBindingsUpdateStart",t[t.HostBindingsUpdateEnd=25]="HostBindingsUpdateEnd",t})(Te||{});function zT(t,i,e){let{ngOnChanges:n,ngOnInit:r,ngDoCheck:o}=i.type.prototype;if(n){let a=gC(i);(e.preOrderHooks??=[]).push(t,a),(e.preOrderCheckHooks??=[]).push(t,a)}r&&(e.preOrderHooks??=[]).push(0-t,r),o&&((e.preOrderHooks??=[]).push(t,o),(e.preOrderCheckHooks??=[]).push(t,o))}function bC(t,i){for(let e=i.directiveStart,n=i.directiveEnd;e<n;e++){let o=t.data[e].type.prototype,{ngAfterContentInit:a,ngAfterContentChecked:s,ngAfterViewInit:l,ngAfterViewChecked:d,ngOnDestroy:u}=o;a&&(t.contentHooks??=[]).push(-e,a),s&&((t.contentHooks??=[]).push(e,s),(t.contentCheckHooks??=[]).push(e,s)),l&&(t.viewHooks??=[]).push(-e,l),d&&((t.viewHooks??=[]).push(e,d),(t.viewCheckHooks??=[]).push(e,d)),u!=null&&(t.destroyHooks??=[]).push(e,u)}}function _u(t,i,e){yC(t,i,3,e)}function vu(t,i,e,n){(t[ce]&3)===e&&yC(t,i,e,n)}function dg(t,i){let e=t[ce];(e&3)===i&&(e&=16383,e+=1,t[ce]=e)}function yC(t,i,e,n){let r=n!==void 0?t[Io]&65535:0,o=n??-1,a=i.length-1,s=0;for(let l=r;l<a;l++)if(typeof i[l+1]=="number"){if(s=i[l],n!=null&&s>=n)break}else i[l]<0&&(t[Io]+=65536),(s<o||o==-1)&&($T(t,e,i,l),t[Io]=(t[Io]&4294901760)+l+2),l++}function F0(t,i){Ve(Te.LifecycleHookStart,t,i);let e=ee(null);try{i.call(t)}finally{ee(e),Ve(Te.LifecycleHookEnd,t,i)}}function $T(t,i,e,n){let r=e[n]<0,o=e[n+1],a=r?-e[n]:e[n],s=t[a];r?t[ce]>>14<t[Io]>>16&&(t[ce]&3)===i&&(t[ce]+=16384,F0(s,o)):F0(s,o)}var Pa=-1,Po=class{factory;name;injectImpl;resolving=!1;canSeeViewProviders;multi;componentProviders;index;providerFactory;constructor(i,e,n,r){this.factory=i,this.name=r,this.canSeeViewProviders=e,this.injectImpl=n}};function WT(t){return(t.flags&8)!==0}function GT(t){return(t.flags&16)!==0}function qT(t,i,e){let n=0;for(;n<e.length;){let r=e[n];if(typeof r=="number"){if(r!==0)break;n++;let o=e[n++],a=e[n++],s=e[n++];t.setAttribute(i,a,s,o)}else{let o=r,a=e[++n];YT(o)?t.setProperty(i,o,a):t.setAttribute(i,o,a),n++}}return n}function CC(t){return t===3||t===4||t===6}function YT(t){return t.charCodeAt(0)===64}function La(t,i){if(!(i===null||i.length===0))if(t===null||t.length===0)t=i.slice();else{let e=-1;for(let n=0;n<i.length;n++){let r=i[n];typeof r=="number"?e=r:e===0||(e===-1||e===2?L0(t,e,r,null,i[++n]):L0(t,e,r,null,null))}}return t}function L0(t,i,e,n,r){let o=0,a=t.length;if(i===-1)a=-1;else for(;o<t.length;){let s=t[o++];if(typeof s=="number"){if(s===i){a=-1;break}else if(s>i){a=o-1;break}}}for(;o<t.length;){let s=t[o];if(typeof s=="number")break;if(s===e){r!==null&&(t[o+1]=r);return}o++,r!==null&&o++}a!==-1&&(t.splice(a,0,i),o=a+1),t.splice(o++,0,e),r!==null&&t.splice(o++,0,r)}function wC(t){return t!==Pa}function Du(t){return t&32767}function QT(t){return t>>16}function xu(t,i){let e=QT(t),n=i;for(;e>0;)n=n[So],e--;return n}var yg=!0;function Eu(t){let i=yg;return yg=t,i}var ZT=256,DC=ZT-1,xC=5,KT=0,Oi={};function XT(t,i,e){let n;typeof e=="string"?n=e.charCodeAt(0)||0:e.hasOwnProperty(Eo)&&(n=e[Eo]),n==null&&(n=e[Eo]=KT++);let r=n&DC,o=1<<r;i.data[t+(r>>xC)]|=o}function Mu(t,i){let e=EC(t,i);if(e!==-1)return e;let n=i[re];n.firstCreatePass&&(t.injectorIndex=i.length,ug(n.data,t),ug(i,null),ug(n.blueprint,null));let r=n_(t,i),o=t.injectorIndex;if(wC(r)){let a=Du(r),s=xu(r,i),l=s[re].data;for(let d=0;d<8;d++)i[o+d]=s[a+d]|l[a+d]}return i[o+8]=r,o}function ug(t,i){t.push(0,0,0,0,0,0,0,0,i)}function EC(t,i){return t.injectorIndex===-1||t.parent&&t.parent.injectorIndex===t.injectorIndex||i[t.injectorIndex+8]===null?-1:t.injectorIndex}function n_(t,i){if(t.parent&&t.parent.injectorIndex!==-1)return t.parent.injectorIndex;let e=0,n=null,r=i;for(;r!==null;){if(n=kC(r),n===null)return Pa;if(e++,r=r[So],n.injectorIndex!==-1)return n.injectorIndex|e<<16}return Pa}function Cg(t,i,e){XT(t,i,e)}function JT(t,i){if(i==="class")return t.classes;if(i==="style")return t.styles;let e=t.attrs;if(e){let n=e.length,r=0;for(;r<n;){let o=e[r];if(CC(o))break;if(o===0)r=r+2;else if(typeof o=="number")for(r++;r<n&&typeof e[r]=="string";)r++;else{if(o===i)return e[r+1];r=r+2}}}return null}function MC(t,i,e){if(e&8||t!==void 0)return t;Kd(i,"NodeInjector")}function SC(t,i,e,n){if(e&8&&n===void 0&&(n=null),(e&3)===0){let r=t[Cn],o=Jt(void 0);try{return r?r.get(i,n,e&8):Sp(i,n,e&8)}finally{Jt(o)}}return MC(n,i,e)}function IC(t,i,e,n=0,r){if(t!==null){if(i[ce]&2048&&!(n&2)){let a=ik(t,i,e,n,Oi);if(a!==Oi)return a}let o=TC(t,i,e,n,Oi);if(o!==Oi)return o}return SC(i,e,n,r)}function TC(t,i,e,n,r){let o=tk(e);if(typeof o=="function"){if(!ng(i,t,n))return n&1?MC(r,e,n):SC(i,e,n,r);try{let a;if(a=o(n),a==null&&!(n&8))Kd(e);else return a}finally{ig()}}else if(typeof o=="number"){let a=null,s=EC(t,i),l=Pa,d=n&1?i[tn][en]:null;for((s===-1||n&4)&&(l=s===-1?n_(t,i):i[s+8],l===Pa||!B0(n,!1)?s=-1:(a=i[re],s=Du(l),i=xu(l,i)));s!==-1;){let u=i[re];if(V0(o,s,u.data)){let f=ek(s,i,e,a,n,d);if(f!==Oi)return f}l=i[s+8],l!==Pa&&B0(n,i[re].data[s+8]===d)&&V0(o,s,i)?(a=u,s=Du(l),i=xu(l,i)):s=-1}}return r}function ek(t,i,e,n,r,o){let a=i[re],s=a.data[t+8],l=n==null?Ii(s)&&yg:n!=a&&(s.type&3)!==0,d=r&1&&o===s,u=bu(s,a,e,l,d);return u!==null?xl(i,a,u,s,r):Oi}function bu(t,i,e,n,r){let o=t.providerIndexes,a=i.data,s=o&1048575,l=t.directiveStart,d=t.directiveEnd,u=o>>20,f=n?s:s+u,_=r?s+u:d;for(let v=f;v<_;v++){let w=a[v];if(v<l&&e===w||v>=l&&w.type===e)return v}if(r){let v=a[l];if(v&&Ti(v)&&v.type===e)return l}return null}function xl(t,i,e,n,r){let o=t[e],a=i.data;if(o instanceof Po){let s=o;if(s.resolving)throw Mp("");let l=Eu(s.canSeeViewProviders);s.resolving=!0;let d=a[e].type||a[e],u,f=s.injectImpl?Jt(s.injectImpl):null,_=ng(t,n,0);try{o=t[e]=s.factory(void 0,r,a,t,n),i.firstCreatePass&&e>=n.directiveStart&&zT(e,a[e],i)}finally{f!==null&&Jt(f),Eu(l),s.resolving=!1,ig()}}return o}function tk(t){if(typeof t=="string")return t.charCodeAt(0)||0;let i=t.hasOwnProperty(Eo)?t[Eo]:void 0;return typeof i=="number"?i>=0?i&DC:nk:i}function V0(t,i,e){let n=1<<t;return!!(e[i+(t>>xC)]&n)}function B0(t,i){return!(t&2)&&!(t&1&&i)}var No=class{_tNode;_lView;constructor(i,e){this._tNode=i,this._lView=e}get(i,e,n){return IC(this._tNode,this._lView,i,wo(n),e)}};function nk(){return new No(Mt(),ie())}function Ze(t){return Al(()=>{let i=t.prototype.constructor,e=i[al]||wg(i),n=Object.prototype,r=Object.getPrototypeOf(t.prototype).constructor;for(;r&&r!==n;){let o=r[al]||wg(r);if(o&&o!==e)return o;r=Object.getPrototypeOf(r)}return o=>new o})}function wg(t){return _p(t)?()=>{let i=wg(jt(t));return i&&i()}:Rr(t)}function ik(t,i,e,n,r){let o=t,a=i;for(;o!==null&&a!==null&&a[ce]&2048&&!Ia(a);){let s=TC(o,a,e,n|2,Oi);if(s!==Oi)return s;let l=o.parent;if(!l){let d=a[Pp];if(d){let u=d.get(e,Oi,n&-5);if(u!==Oi)return u}l=kC(a),a=a[So]}o=l}return r}function kC(t){let i=t[re],e=i.type;return e===2?i.declTNode:e===1?t[en]:null}function Uu(t){return JT(Mt(),t)}function rk(){return za(Mt(),ie())}function za(t,i){return new B(Dn(t,i))}var B=(()=>{class t{nativeElement;constructor(e){this.nativeElement=e}static __NG_ELEMENT_ID__=rk}return t})();function AC(t){return t instanceof B?t.nativeElement:t}function ok(){return this._results[Symbol.iterator]()}var or=class{_emitDistinctChangesOnly;dirty=!0;_onDirty=void 0;_results=[];_changesDetected=!1;_changes=void 0;length=0;first=void 0;last=void 0;get changes(){return this._changes??=new S}constructor(i=!1){this._emitDistinctChangesOnly=i}get(i){return this._results[i]}map(i){return this._results.map(i)}filter(i){return this._results.filter(i)}find(i){return this._results.find(i)}reduce(i,e){return this._results.reduce(i,e)}forEach(i){this._results.forEach(i)}some(i){return this._results.some(i)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(i,e){this.dirty=!1;let n=Zy(i);(this._changesDetected=!Qy(this._results,n,e))&&(this._results=n,this.length=n.length,this.last=n[this.length-1],this.first=n[0])}notifyOnChanges(){this._changes!==void 0&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.next(this)}onDirty(i){this._onDirty=i}setDirty(){this.dirty=!0,this._onDirty?.()}destroy(){this._changes!==void 0&&(this._changes.complete(),this._changes.unsubscribe())}[Symbol.iterator]=ok};function RC(t){return(t.flags&128)===128}var i_=(function(t){return t[t.OnPush=0]="OnPush",t[t.Eager=1]="Eager",t[t.Default=1]="Default",t})(i_||{}),OC=new Map,ak=0;function sk(){return ak++}function lk(t){OC.set(t[tr],t)}function Dg(t){OC.delete(t[tr])}var j0="__ngContext__";function Va(t,i){ir(i)?(t[j0]=i[tr],lk(i)):t[j0]=i}function NC(t){return FC(t[Sa])}function PC(t){return FC(t[Pn])}function FC(t){for(;t!==null&&!ii(t);)t=t[Pn];return t}var ck;function r_(t){ck=t}var Ur=new y("",{factory:()=>dk}),dk="ng";var zu=new y(""),Vo=new y("",{providedIn:"platform",factory:()=>"unknown"}),Rl=new y(""),$a=new y("",{factory:()=>c(Y).body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});var LC="r";var VC="di";var BC=!1,jC=new y("",{factory:()=>BC});var $u=new y("");var uk=(t,i,e,n)=>{};function mk(t,i,e,n){uk(t,i,e,n)}function Wu(t){return(t.flags&32)===32}var fk=()=>null;function HC(t,i,e=!1){return fk(t,i,e)}function UC(t,i){let e=t.contentQueries;if(e!==null){let n=ee(null);try{for(let r=0;r<e.length;r+=2){let o=e[r],a=e[r+1];if(a!==-1){let s=t.data[a];bl(o),s.contentQueries(2,i[a],a)}}}finally{ee(n)}}}function xg(t,i,e){bl(0);let n=ee(null);try{i(t,e)}finally{ee(n)}}function zC(t,i,e){if(Lp(i)){let n=ee(null);try{let r=i.directiveStart,o=i.directiveEnd;for(let a=r;a<o;a++){let s=t.data[a];if(s.contentQueries){let l=e[a];s.contentQueries(1,l,a)}}}finally{ee(n)}}}var oi=(function(t){return t[t.Emulated=0]="Emulated",t[t.None=2]="None",t[t.ShadowDom=3]="ShadowDom",t[t.ExperimentalIsolatedShadowDom=4]="ExperimentalIsolatedShadowDom",t})(oi||{});var hu;function hk(){if(hu===void 0&&(hu=null,wa.trustedTypes))try{hu=wa.trustedTypes.createPolicy("angular",{createHTML:t=>t,createScript:t=>t,createScriptURL:t=>t})}catch{}return hu}function Gu(t){return hk()?.createHTML(t)||t}var ar=class{changingThisBreaksApplicationSecurity;constructor(i){this.changingThisBreaksApplicationSecurity=i}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${qd})`}},Eg=class extends ar{getTypeName(){return"HTML"}},Mg=class extends ar{getTypeName(){return"Style"}},Sg=class extends ar{getTypeName(){return"Script"}},Ig=class extends ar{getTypeName(){return"URL"}},Tg=class extends ar{getTypeName(){return"ResourceURL"}};function ai(t){return t instanceof ar?t.changingThisBreaksApplicationSecurity:t}function Bo(t,i){let e=$C(t);if(e!=null&&e!==i){if(e==="ResourceURL"&&i==="URL")return!0;throw new Error(`Required a safe ${i}, got a ${e} (see ${qd})`)}return e===i}function $C(t){return t instanceof ar&&t.getTypeName()||null}function o_(t){return new Eg(t)}function a_(t){return new Mg(t)}function s_(t){return new Sg(t)}function l_(t){return new Ig(t)}function c_(t){return new Tg(t)}function pk(t){let i=new Ag(t);return gk()?new kg(i):i}var kg=class{inertDocumentHelper;constructor(i){this.inertDocumentHelper=i}getInertBodyElement(i){i="<body><remove></remove>"+i;try{let e=new window.DOMParser().parseFromString(Gu(i),"text/html").body;return e===null?this.inertDocumentHelper.getInertBodyElement(i):(e.firstChild?.remove(),e)}catch{return null}}},Ag=class{defaultDoc;inertDocument;constructor(i){this.defaultDoc=i,this.inertDocument=this.defaultDoc.implementation.createHTMLDocument("sanitization-inert")}getInertBodyElement(i){let e=this.inertDocument.createElement("template");return e.innerHTML=Gu(i),e}};function gk(){try{return!!new window.DOMParser().parseFromString(Gu(""),"text/html")}catch{return!1}}var _k=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;function qu(t){return t=String(t),t.match(_k)?t:"unsafe:"+t}function sr(t){let i={};for(let e of t.split(","))i[e]=!0;return i}function Ol(...t){let i={};for(let e of t)for(let n in e)e.hasOwnProperty(n)&&(i[n]=!0);return i}var WC=sr("area,br,col,hr,img,wbr"),GC=sr("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),qC=sr("rp,rt"),vk=Ol(qC,GC),bk=Ol(GC,sr("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")),yk=Ol(qC,sr("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")),H0=Ol(WC,bk,yk,vk),YC=sr("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),Ck=sr("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,srcset,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"),wk=sr("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext"),Dk=Ol(YC,Ck,wk),xk=sr("script,style,template");var Rg=class{sanitizedSomething=!1;buf=[];sanitizeChildren(i){let e=i.firstChild,n=!0,r=[];for(;e;){if(e.nodeType===Node.ELEMENT_NODE?n=this.startElement(e):e.nodeType===Node.TEXT_NODE?this.chars(e.nodeValue):this.sanitizedSomething=!0,n&&e.firstChild){r.push(e),e=Sk(e);continue}for(;e;){e.nodeType===Node.ELEMENT_NODE&&this.endElement(e);let o=Mk(e);if(o){e=o;break}e=r.pop()}}return this.buf.join("")}startElement(i){let e=U0(i).toLowerCase();if(!H0.hasOwnProperty(e))return this.sanitizedSomething=!0,!xk.hasOwnProperty(e);this.buf.push("<"),this.buf.push(e);let n=i.attributes;for(let r=0;r<n.length;r++){let o=n.item(r),a=o.name,s=a.toLowerCase();if(!Dk.hasOwnProperty(s)){this.sanitizedSomething=!0;continue}let l=o.value;YC[s]&&(l=qu(l)),this.buf.push(" ",a,'="',z0(l),'"')}return this.buf.push(">"),!0}endElement(i){let e=U0(i).toLowerCase();H0.hasOwnProperty(e)&&!WC.hasOwnProperty(e)&&(this.buf.push("</"),this.buf.push(e),this.buf.push(">"))}chars(i){this.buf.push(z0(i))}};function Ek(t,i){return(t.compareDocumentPosition(i)&Node.DOCUMENT_POSITION_CONTAINED_BY)!==Node.DOCUMENT_POSITION_CONTAINED_BY}function Mk(t){let i=t.nextSibling;if(i&&t!==i.previousSibling)throw QC(i);return i}function Sk(t){let i=t.firstChild;if(i&&Ek(t,i))throw QC(i);return i}function U0(t){let i=t.nodeName;return typeof i=="string"?i:"FORM"}function QC(t){return new Error(`Failed to sanitize html because the element is clobbered: ${t.outerHTML}`)}var Ik=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,Tk=/([^\#-~ |!])/g;function z0(t){return t.replace(/&/g,"&amp;").replace(Ik,function(i){let e=i.charCodeAt(0),n=i.charCodeAt(1);return"&#"+((e-55296)*1024+(n-56320)+65536)+";"}).replace(Tk,function(i){return"&#"+i.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}var pu;function d_(t,i){let e=null;try{pu=pu||pk(t);let n=i?String(i):"";e=pu.getInertBodyElement(n);let r=5,o=n;do{if(r===0)throw new Error("Failed to sanitize html because the input is unstable");r--,n=o,o=e.innerHTML,e=pu.getInertBodyElement(n)}while(n!==o);let s=new Rg().sanitizeChildren($0(e)||e);return Gu(s)}finally{if(e){let n=$0(e)||e;for(;n.firstChild;)n.firstChild.remove()}}}function $0(t){return"content"in t&&kk(t)?t.content:null}function kk(t){return t.nodeType===Node.ELEMENT_NODE&&t.nodeName==="TEMPLATE"}function Ak(t,i){return t.createText(i)}function Rk(t,i,e){t.setValue(i,e)}function ZC(t,i,e){return t.createElement(i,e)}function Su(t,i,e,n,r){t.insertBefore(i,e,n,r)}function KC(t,i,e){t.appendChild(i,e)}function W0(t,i,e,n,r){n!==null?Su(t,i,e,n,r):KC(t,i,e)}function XC(t,i,e,n){t.removeChild(null,i,e,n)}function Ok(t,i,e){t.setAttribute(i,"style",e)}function Nk(t,i,e){e===""?t.removeAttribute(i,"class"):t.setAttribute(i,"class",e)}function JC(t,i,e){let{mergedAttrs:n,classes:r,styles:o}=e;n!==null&&qT(t,i,n),r!==null&&Nk(t,i,r),o!==null&&Ok(t,i,o)}var Ut=(function(t){return t[t.NONE=0]="NONE",t[t.HTML=1]="HTML",t[t.STYLE=2]="STYLE",t[t.SCRIPT=3]="SCRIPT",t[t.URL=4]="URL",t[t.RESOURCE_URL=5]="RESOURCE_URL",t})(Ut||{});function u_(t){return t.ownerDocument.defaultView}function ew(t){return t instanceof Function?t():t}function Pk(t,i,e){let n=t.length;for(;;){let r=t.indexOf(i,e);if(r===-1)return r;if(r===0||t.charCodeAt(r-1)<=32){let o=i.length;if(r+o===n||t.charCodeAt(r+o)<=32)return r}e=r+1}}var tw="ng-template";function Fk(t,i,e,n){let r=0;if(n){for(;r<i.length&&typeof i[r]=="string";r+=2)if(i[r]==="class"&&Pk(i[r+1].toLowerCase(),e,0)!==-1)return!0}else if(m_(t))return!1;if(r=i.indexOf(1,r),r>-1){let o;for(;++r<i.length&&typeof(o=i[r])=="string";)if(o.toLowerCase()===e)return!0}return!1}function m_(t){return t.type===4&&t.value!==tw}function Lk(t,i,e){let n=t.type===4&&!e?tw:t.value;return i===n}function Vk(t,i,e){let n=4,r=t.attrs,o=r!==null?Hk(r):0,a=!1;for(let s=0;s<i.length;s++){let l=i[s];if(typeof l=="number"){if(!a&&!ri(n)&&!ri(l))return!1;if(a&&ri(l))continue;a=!1,n=l|n&1;continue}if(!a)if(n&4){if(n=2|n&1,l!==""&&!Lk(t,l,e)||l===""&&i.length===1){if(ri(n))return!1;a=!0}}else if(n&8){if(r===null||!Fk(t,r,l,e)){if(ri(n))return!1;a=!0}}else{let d=i[++s],u=Bk(l,r,m_(t),e);if(u===-1){if(ri(n))return!1;a=!0;continue}if(d!==""){let f;if(u>o?f="":f=r[u+1].toLowerCase(),n&2&&d!==f){if(ri(n))return!1;a=!0}}}}return ri(n)||a}function ri(t){return(t&1)===0}function Bk(t,i,e,n){if(i===null)return-1;let r=0;if(n||!e){let o=!1;for(;r<i.length;){let a=i[r];if(a===t)return r;if(a===3||a===6)o=!0;else if(a===1||a===2){let s=i[++r];for(;typeof s=="string";)s=i[++r];continue}else{if(a===4)break;if(a===0){r+=4;continue}}r+=o?1:2}return-1}else return Uk(i,t)}function nw(t,i,e=!1){for(let n=0;n<i.length;n++)if(Vk(t,i[n],e))return!0;return!1}function jk(t){let i=t.attrs;if(i!=null){let e=i.indexOf(5);if((e&1)===0)return i[e+1]}return null}function Hk(t){for(let i=0;i<t.length;i++){let e=t[i];if(CC(e))return i}return t.length}function Uk(t,i){let e=t.indexOf(4);if(e>-1)for(e++;e<t.length;){let n=t[e];if(typeof n=="number")return-1;if(n===i)return e;e++}return-1}function zk(t,i){e:for(let e=0;e<i.length;e++){let n=i[e];if(t.length===n.length){for(let r=0;r<t.length;r++)if(t[r]!==n[r])continue e;return!0}}return!1}function G0(t,i){return t?":not("+i.trim()+")":i}function $k(t){let i=t[0],e=1,n=2,r="",o=!1;for(;e<t.length;){let a=t[e];if(typeof a=="string")if(n&2){let s=t[++e];r+="["+a+(s.length>0?'="'+s+'"':"")+"]"}else n&8?r+="."+a:n&4&&(r+=" "+a);else r!==""&&!ri(a)&&(i+=G0(o,r),r=""),n=a,o=o||!ri(n);e++}return r!==""&&(i+=G0(o,r)),i}function Wk(t){return t.map($k).join(",")}function Gk(t){let i=[],e=[],n=1,r=2;for(;n<t.length;){let o=t[n];if(typeof o=="string")r===2?o!==""&&i.push(o,t[++n]):r===8&&e.push(o);else{if(!ri(r))break;r=o}n++}return e.length&&i.push(1,...e),i}var zt={};function f_(t,i,e,n,r,o,a,s,l,d,u){let f=tt+n,_=f+r,v=qk(f,_),w=typeof d=="function"?d():d;return v[re]={type:t,blueprint:v,template:e,queries:null,viewQuery:s,declTNode:i,data:v.slice().fill(null,f),bindingStartIndex:f,expandoStartIndex:_,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof o=="function"?o():o,pipeRegistry:typeof a=="function"?a():a,firstChild:null,schemas:l,consts:w,incompleteFirstPass:!1,ssrId:u}}function qk(t,i){let e=[];for(let n=0;n<i;n++)e.push(n<t?null:zt);return e}function Yk(t){let i=t.tView;return i===null||i.incompleteFirstPass?t.tView=f_(1,null,t.template,t.decls,t.vars,t.directiveDefs,t.pipeDefs,t.viewQuery,t.schemas,t.consts,t.id):i}function h_(t,i,e,n,r,o,a,s,l,d,u){let f=i.blueprint.slice();return f[ni]=r,f[ce]=n|4|128|8|64|1024,(d!==null||t&&t[ce]&2048)&&(f[ce]|=2048),Up(f),f[xt]=f[So]=t,f[dt]=e,f[Mi]=a||t&&t[Mi],f[He]=s||t&&t[He],f[Cn]=l||t&&t[Cn]||null,f[en]=o,f[tr]=sk(),f[Mo]=u,f[Pp]=d,f[tn]=i.type==2?t[tn]:f,f}function Qk(t,i,e){let n=Dn(i,t),r=Yk(e),o=t[Mi].rendererFactory,a=p_(t,h_(t,r,null,iw(e),n,i,null,o.createRenderer(n,e),null,null,null));return t[i.index]=a}function iw(t){let i=16;return t.signals?i=4096:t.onPush&&(i=64),i}function rw(t,i,e,n){if(e===0)return-1;let r=i.length;for(let o=0;o<e;o++)i.push(n),t.blueprint.push(n),t.data.push(null);return r}function p_(t,i){return t[Sa]?t[Np][Pn]=i:t[Sa]=i,t[Np]=i,i}function p(t=1){ow(We(),ie(),Ai()+t,!1)}function ow(t,i,e,n){if(!n)if((i[ce]&3)===3){let o=t.preOrderCheckHooks;o!==null&&_u(i,o,e)}else{let o=t.preOrderHooks;o!==null&&vu(i,o,0,e)}Br(e)}var Yu=(function(t){return t[t.None=0]="None",t[t.SignalBased=1]="SignalBased",t[t.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",t})(Yu||{});function Og(t,i,e,n){let r=ee(null);try{let[o,a,s]=t.inputs[e],l=null;(a&Yu.SignalBased)!==0&&(l=i[o][pt]),l!==null&&l.transformFn!==void 0?n=l.transformFn(n):s!==null&&(n=s.call(i,n)),t.setInput!==null?t.setInput(i,l,n,e,o):pC(i,l,o,n)}finally{ee(r)}}var Ni=(function(t){return t[t.Important=1]="Important",t[t.DashCase=2]="DashCase",t})(Ni||{}),Zk;function g_(t,i){return Zk(t,i)}var aw=new y("",{factory:()=>!1});var Kk=!1,sw=typeof document<"u"&&typeof document?.documentElement?.getAnimations=="function";function Xk(t){return t[Cn].get(aw,Kk)}function Jk(t,i,e){let n=El.get(t);if(n){for(let r of i)n.classList.push(r);for(let r of e)n.cleanupFns.push(r)}else El.set(t,{classList:i,cleanupFns:e})}function lw(t){let i=El.get(t);if(i){for(let e of i.cleanupFns)e();El.delete(t)}Iu.delete(t)}var El=new WeakMap,Iu=new WeakMap,Ng=new WeakMap,Cl=new WeakSet;function eA(t,i){let e=Ng.get(t);if(!e||e.length===0)return;let n=i.parentNode,r=i.previousSibling;for(let o=e.length-1;o>=0;o--){let a=e[o],s=a.parentNode;a===i?(e.splice(o,1),Cl.add(a),a.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}}))):(r&&a===r||s&&n&&s!==n)&&(e.splice(o,1),a.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}})),a.parentNode?.removeChild(a))}}function tA(t,i){let e=Ng.get(t);e?e.includes(i)||e.push(i):Ng.set(t,[i])}function q0(t){let i=t[nr]??={};return i.enter??=new Map}function nA(t){let i=typeof t=="function"?t():t,e=Array.isArray(i)?i:null;return typeof i=="string"&&(e=i.trim().split(/\s+/).filter(n=>n)),e}function Tu(t){return t.composedPath?t.composedPath()[0]:t.target}function cw(t,i){let e=Iu.get(i);return e===void 0?!0:i===Tu(t)&&(e.animationName!==void 0&&t.animationName===e.animationName||e.propertyName!==void 0&&(e.propertyName==="all"||t.propertyName===e.propertyName))}function iA(t,i,e){let n=t.get(i.index)??{animateFns:[]};n.animateFns.push(e),t.set(i.index,n)}function ku(t){if(!t)return 0;let i=t.toLowerCase().indexOf("ms")>-1?1:1e3;return parseFloat(t)*i}function Oo(t,i){return t.getPropertyValue(i).split(",").map(n=>n.trim())}function rA(t){let i=Oo(t,"transition-property"),e=Oo(t,"transition-duration"),n=Oo(t,"transition-delay"),r={propertyName:"",duration:0,animationName:void 0};for(let o=0;o<i.length;o++){let a=ku(n[o])+ku(e[o]);a>r.duration&&(r.propertyName=i[o],r.duration=a)}return r}function oA(t){let i=Oo(t,"animation-name"),e=Oo(t,"animation-delay"),n=Oo(t,"animation-duration"),r=Oo(t,"animation-iteration-count"),o={animationName:"",propertyName:void 0,duration:0};for(let a=0;a<i.length;a++){let s=ku(e[a])+ku(n[a]),l=r[a];s>o.duration&&l!=="infinite"&&(o.animationName=i[a],o.duration=s)}return o}function dw(t,i){return t!==void 0&&t.duration>i.duration}function uw(t){return(t.animationName!=null||t.propertyName!=null)&&t.duration>0}function aA(t,i){let e=getComputedStyle(t),n=oA(e),r=rA(e),o=n.duration>r.duration?n:r;dw(i.get(t),o)||uw(o)&&i.set(t,o)}function sA(t,i,e){if(!e)return;let n=t.getAnimations();return n.length===0?aA(t,i):lA(t,i,n)}function lA(t,i,e){let n={animationName:void 0,propertyName:void 0,duration:0};for(let r of e){let o=r.effect?.getTiming();if(o?.iterations===1/0)continue;let a=typeof o?.duration=="number"?o.duration:0,s=(o?.delay??0)+a,l=r.playbackRate;l!==void 0&&l!==0&&l!==1&&(s/=Math.abs(l));let d,u;r.animationName?u=r.animationName:d=r.transitionProperty,s>=n.duration&&(n={animationName:u,propertyName:d,duration:s})}dw(i.get(t),n)||uw(n)&&i.set(t,n)}var Fo=new Set,Qu=(function(t){return t[t.CHANGE_DETECTION=0]="CHANGE_DETECTION",t[t.AFTER_NEXT_RENDER=1]="AFTER_NEXT_RENDER",t})(Qu||{}),si=new y(""),Y0=new Set;function li(t){Y0.has(t)||(Y0.add(t),performance?.mark?.("mark_feature_usage",{detail:{feature:t}}))}var Zu=(()=>{class t{impl=null;execute(){this.impl?.execute()}static \u0275prov=b({token:t,providedIn:"root",factory:()=>new t})}return t})(),__=[0,1,2,3],v_=(()=>{class t{ngZone=c(V);scheduler=c(Di);errorHandler=c(Yt,{optional:!0});sequences=new Set;deferredRegistrations=new Set;executing=!1;constructor(){c(si,{optional:!0})}execute(){let e=this.sequences.size>0;e&&Ve(Te.AfterRenderHooksStart),this.executing=!0;for(let n of __)for(let r of this.sequences)if(!(r.erroredOrDestroyed||!r.hooks[n]))try{r.pipelinedValue=this.ngZone.runOutsideAngular(()=>this.maybeTrace(()=>{let o=r.hooks[n];return o(r.pipelinedValue)},r.snapshot))}catch(o){r.erroredOrDestroyed=!0,this.errorHandler?.handleError(o)}this.executing=!1;for(let n of this.sequences)n.afterRun(),n.once&&(this.sequences.delete(n),n.destroy());for(let n of this.deferredRegistrations)this.sequences.add(n);this.deferredRegistrations.size>0&&this.scheduler.notify(7),this.deferredRegistrations.clear(),e&&Ve(Te.AfterRenderHooksEnd)}register(e){let{view:n}=e;n!==void 0?((n[To]??=[]).push(e),Ro(n),n[ce]|=8192):this.executing?this.deferredRegistrations.add(e):this.addSequence(e)}addSequence(e){this.sequences.add(e),this.scheduler.notify(7)}unregister(e){this.executing&&this.sequences.has(e)?(e.erroredOrDestroyed=!0,e.pipelinedValue=void 0,e.once=!0):(this.sequences.delete(e),this.deferredRegistrations.delete(e))}maybeTrace(e,n){return n?n.run(Qu.AFTER_NEXT_RENDER,e):e()}static \u0275prov=b({token:t,providedIn:"root",factory:()=>new t})}return t})(),Ml=class{impl;hooks;view;once;snapshot;erroredOrDestroyed=!1;pipelinedValue=void 0;unregisterOnDestroy;constructor(i,e,n,r,o,a=null){this.impl=i,this.hooks=e,this.view=n,this.once=r,this.snapshot=a,this.unregisterOnDestroy=o?.onDestroy(()=>this.destroy())}afterRun(){this.erroredOrDestroyed=!1,this.pipelinedValue=void 0,this.snapshot?.dispose(),this.snapshot=null}destroy(){this.impl.unregister(this),this.unregisterOnDestroy?.();let i=this.view?.[To];i&&(this.view[To]=i.filter(e=>e!==this))}};function Ge(t,i){let e=i?.injector??c(G);return li("NgAfterNextRender"),dA(t,e,i,!0)}function cA(t){return t instanceof Function?[void 0,void 0,t,void 0]:[t.earlyRead,t.write,t.mixedReadWrite,t.read]}function dA(t,i,e,n){let r=i.get(Zu);r.impl??=i.get(v_);let o=i.get(si,null,{optional:!0}),a=e?.manualCleanup!==!0?i.get(Ht):null,s=i.get(Ra,null,{optional:!0}),l=new Ml(r.impl,cA(t),s?.view,n,a,o?.snapshot(null));return r.impl.register(l),l}var Ku=new y("",{factory:()=>({queue:new Set,isScheduled:!1,scheduler:null,injector:c(Le)})});function mw(t,i,e){let n=t.get(Ku);if(Array.isArray(i))for(let r of i)n.queue.add(r),e?.detachedLeaveAnimationFns?.push(r);else n.queue.add(i),e?.detachedLeaveAnimationFns?.push(i);n.scheduler&&n.scheduler(t)}function uA(t,i){let e=t.get(Ku);if(i.detachedLeaveAnimationFns){for(let n of i.detachedLeaveAnimationFns)e.queue.delete(n);i.detachedLeaveAnimationFns=void 0}}function mA(t){let i=t.get(Ku);i.isScheduled||(Ge(()=>{i.isScheduled=!1;for(let e of i.queue)e();i.queue.clear()},{injector:i.injector}),i.isScheduled=!0)}function fA(t){let i=t.get(Ku);i.scheduler=mA,i.scheduler(t)}function fw(t,i){for(let[e,n]of i)mw(t,n.animateFns)}function Q0(t,i,e,n){let r=t?.[nr]?.enter;i!==null&&r&&r.has(e.index)&&fw(n,r)}function Na(t,i,e,n,r,o,a,s){if(r!=null){let l,d=!1;ii(r)?l=r:ir(r)&&(d=!0,r=r[ni]);let u=Fn(r);t===0&&n!==null?(Q0(s,n,o,e),a==null?KC(i,n,u):Su(i,n,u,a||null,!0)):t===1&&n!==null?(Q0(s,n,o,e),Su(i,n,u,a||null,!0),eA(o,u)):t===2?(s?.[nr]?.leave?.has(o.index)&&tA(o,u),Cl.delete(u),Z0(s,o,e,f=>{if(Cl.has(u)){Cl.delete(u);return}XC(i,u,d,f)})):t===3&&(Cl.delete(u),Z0(s,o,e,()=>{i.destroyNode(u)})),l!=null&&xA(i,t,e,l,o,n,a)}}function hA(t,i){hw(t,i),i[ni]=null,i[en]=null}function pA(t,i,e,n,r,o){n[ni]=r,n[en]=i,Ju(t,n,e,1,r,o)}function hw(t,i){i[Mi].changeDetectionScheduler?.notify(9),Ju(t,i,i[He],2,null,null)}function gA(t){let i=t[Sa];if(!i)return mg(t[re],t);for(;i;){let e=null;if(ir(i))e=i[Sa];else{let n=i[ot];n&&(e=n)}if(!e){for(;i&&!i[Pn]&&i!==t;)ir(i)&&mg(i[re],i),i=i[xt];i===null&&(i=t),ir(i)&&mg(i[re],i),e=i&&i[Pn]}i=e}}function b_(t,i){let e=t[ko],n=e.indexOf(i);e.splice(n,1)}function Xu(t,i){if(Ao(i))return;let e=i[He];e.destroyNode&&Ju(t,i,e,3,null,null),gA(i)}function mg(t,i){if(Ao(i))return;let e=ee(null);try{i[ce]&=-129,i[ce]|=256,i[wn]&&Mr(i[wn]),bA(t,i),vA(t,i),i[re].type===1&&i[He].destroy();let n=i[Lr];if(n!==null&&ii(i[xt])){n!==i[xt]&&b_(n,i);let r=i[Si];r!==null&&r.detachView(t)}Dg(i)}finally{ee(e)}}function Z0(t,i,e,n){let r=t?.[nr];if(r==null||r.leave==null||!r.leave.has(i.index))return n(!1);t&&Fo.add(t[tr]),mw(e,()=>{if(r.leave&&r.leave.has(i.index)){let a=r.leave.get(i.index),s=[];if(a){for(let l=0;l<a.animateFns.length;l++){let d=a.animateFns[l],{promise:u}=d();s.push(u)}r.detachedLeaveAnimationFns=void 0}r.running=Promise.allSettled(s),_A(t,n)}else t&&Fo.delete(t[tr]),n(!1)},r)}function _A(t,i){let e=t[nr]?.running;if(e){e.then(()=>{t[nr].running=void 0,Fo.delete(t[tr]),i(!0)});return}i(!1)}function vA(t,i){let e=t.cleanup,n=i[Ma];if(e!==null)for(let a=0;a<e.length-1;a+=2)if(typeof e[a]=="string"){let s=e[a+3];s>=0?n[s]():n[-s].unsubscribe(),a+=2}else{let s=n[e[a+1]];e[a].call(s)}n!==null&&(i[Ma]=null);let r=i[er];if(r!==null){i[er]=null;for(let a=0;a<r.length;a++){let s=r[a];s()}}let o=i[Or];if(o!==null){i[Or]=null;for(let a of o)a.destroy()}}function bA(t,i){let e;if(t!=null&&(e=t.destroyHooks)!=null)for(let n=0;n<e.length;n+=2){let r=i[e[n]];if(!(r instanceof Po)){let o=e[n+1];if(Array.isArray(o))for(let a=0;a<o.length;a+=2){let s=r[o[a]],l=o[a+1];Ve(Te.LifecycleHookStart,s,l);try{l.call(s)}finally{Ve(Te.LifecycleHookEnd,s,l)}}else{Ve(Te.LifecycleHookStart,r,o);try{o.call(r)}finally{Ve(Te.LifecycleHookEnd,r,o)}}}}}function pw(t,i,e){return yA(t,i.parent,e)}function yA(t,i,e){let n=i;for(;n!==null&&n.type&168;)i=n,n=i.parent;if(n===null)return e[ni];if(Ii(n)){let{encapsulation:r}=t.data[n.directiveStart+n.componentOffset];if(r===oi.None||r===oi.Emulated)return null}return Dn(n,e)}function gw(t,i,e){return wA(t,i,e)}function CA(t,i,e){return t.type&40?Dn(t,e):null}var wA=CA,K0;function y_(t,i,e,n){let r=pw(t,n,i),o=i[He],a=n.parent||i[en],s=gw(a,n,i);if(r!=null)if(Array.isArray(e))for(let l=0;l<e.length;l++)W0(o,r,e[l],s,!1);else W0(o,r,e,s,!1);K0!==void 0&&K0(o,n,i,e,r)}function wl(t,i){if(i!==null){let e=i.type;if(e&3)return Dn(i,t);if(e&4)return Pg(-1,t[i.index]);if(e&8){let n=i.child;if(n!==null)return wl(t,n);{let r=t[i.index];return ii(r)?Pg(-1,r):Fn(r)}}else{if(e&128)return wl(t,i.next);if(e&32)return g_(i,t)()||Fn(t[i.index]);{let n=_w(t,i);if(n!==null){if(Array.isArray(n))return n[0];let r=Nr(t[tn]);return wl(r,n)}else return wl(t,i.next)}}}return null}function _w(t,i){if(i!==null){let n=t[tn][en],r=i.projection;return n.projection[r]}return null}function Pg(t,i){let e=ot+t+1;if(e<i.length){let n=i[e],r=n[re].firstChild;if(r!==null)return wl(n,r)}return i[Vr]}function C_(t,i,e,n,r,o,a){for(;e!=null;){let s=n[Cn];if(e.type===128){e=e.next;continue}let l=n[e.index],d=e.type;if(a&&i===0&&(l&&Va(Fn(l),n),e.flags|=2),!Wu(e))if(d&8)C_(t,i,e.child,n,r,o,!1),Na(i,t,s,r,l,e,o,n);else if(d&32){let u=g_(e,n),f;for(;f=u();)Na(i,t,s,r,f,e,o,n);Na(i,t,s,r,l,e,o,n)}else d&16?vw(t,i,n,e,r,o):Na(i,t,s,r,l,e,o,n);e=a?e.projectionNext:e.next}}function Ju(t,i,e,n,r,o){C_(e,n,t.firstChild,i,r,o,!1)}function DA(t,i,e){let n=i[He],r=pw(t,e,i),o=e.parent||i[en],a=gw(o,e,i);vw(n,0,i,e,r,a)}function vw(t,i,e,n,r,o){let a=e[tn],l=a[en].projection[n.projection];if(Array.isArray(l))for(let d=0;d<l.length;d++){let u=l[d];Na(i,t,e[Cn],r,u,n,o,e)}else{let d=l,u=a[xt];RC(n)&&(d.flags|=128),C_(t,i,d,u,r,o,!0)}}function xA(t,i,e,n,r,o,a){let s=n[Vr],l=Fn(n);s!==l&&Na(i,t,e,o,s,r,a);for(let d=ot;d<n.length;d++){let u=n[d];Ju(u[re],u,t,i,o,s)}}function EA(t,i,e,n,r){if(i)r?t.addClass(e,n):t.removeClass(e,n);else{let o=n.indexOf("-")===-1?void 0:Ni.DashCase;r==null?t.removeStyle(e,n,o):(typeof r=="string"&&r.endsWith("!important")&&(r=r.slice(0,-10),o|=Ni.Important),t.setStyle(e,n,r,o))}}function bw(t,i,e,n,r){let o=Ai(),a=n&2;try{Br(-1),a&&i.length>tt&&ow(t,i,tt,!1);let s=a?Te.TemplateUpdateStart:Te.TemplateCreateStart;Ve(s,r,e),e(n,r)}finally{Br(o);let s=a?Te.TemplateUpdateEnd:Te.TemplateCreateEnd;Ve(s,r,e)}}function w_(t,i,e){kA(t,i,e),(e.flags&64)===64&&AA(t,i,e)}function em(t,i,e=Dn){let n=i.localNames;if(n!==null){let r=i.index+1;for(let o=0;o<n.length;o+=2){let a=n[o+1],s=a===-1?e(i,t):t[a];t[r++]=s}}}function MA(t,i,e,n){let o=n.get(jC,BC)||e===oi.ShadowDom||e===oi.ExperimentalIsolatedShadowDom,a=t.selectRootElement(i,o);return SA(a),a}function SA(t){IA(t)}var IA=()=>null;function TA(t){return t==="class"?"className":t==="for"?"htmlFor":t==="formaction"?"formAction":t==="innerHtml"?"innerHTML":t==="readonly"?"readOnly":t==="tabindex"?"tabIndex":t}function yw(t,i,e,n,r,o){let a=i[re];if(tm(t,a,i,e,n)){Ii(t)&&ww(i,t.index);return}t.type&3&&(e=TA(e)),Cw(t,i,e,n,r,o)}function Cw(t,i,e,n,r,o){if(t.type&3){let a=Dn(t,i);n=o!=null?o(n,t.value||"",e):n,r.setProperty(a,e,n)}else t.type&12}function ww(t,i){let e=Ln(i,t);e[ce]&16||(e[ce]|=64)}function kA(t,i,e){let n=e.directiveStart,r=e.directiveEnd;Ii(e)&&Qk(i,e,t.data[n+e.componentOffset]),t.firstCreatePass||Mu(e,i);let o=e.initialInputs;for(let a=n;a<r;a++){let s=t.data[a],l=xl(i,t,a,e);if(Va(l,i),o!==null&&NA(i,a-n,l,s,e,o),Ti(s)){let d=Ln(e.index,i);d[dt]=xl(i,t,a,e)}}}function AA(t,i,e){let n=e.directiveStart,r=e.directiveEnd,o=e.index,a=y0();try{Br(o);for(let s=n;s<r;s++){let l=t.data[s],d=i[s];au(s),(l.hostBindings!==null||l.hostVars!==0||l.hostAttrs!==null)&&RA(l,d)}}finally{Br(-1),au(a)}}function RA(t,i){t.hostBindings!==null&&t.hostBindings(1,i)}function Dw(t,i){let e=t.directiveRegistry,n=null;if(e)for(let r=0;r<e.length;r++){let o=e[r];nw(i,o.selectors,!1)&&(n??=[],Ti(o)?n.unshift(o):n.push(o))}return n}function OA(t,i,e,n,r,o){let a=Dn(t,i);xw(i[He],a,o,t.value,e,n,r)}function xw(t,i,e,n,r,o,a){if(o==null)t.removeAttribute(i,r,e);else{let s=a==null?Da(o):a(o,n||"",r);t.setAttribute(i,r,s,e)}}function NA(t,i,e,n,r,o){let a=o[i];if(a!==null)for(let s=0;s<a.length;s+=2){let l=a[s],d=a[s+1];Og(n,e,l,d)}}function Ew(t,i,e,n,r){let o=tt+e,a=i[re],s=r(a,i,t,n,e);i[o]=s,Ta(t,!0);let l=t.type===2;return l?(JC(i[He],s,t),(m0()===0||_l(t))&&Va(s,i),f0()):Va(s,i),du()&&(!l||!Wu(t))&&y_(a,i,s,t),t}function Mw(t){let i=t;return Jp()?eg():(i=i.parent,Ta(i,!1)),i}function PA(t,i){let e=t[Cn];if(!e)return;let n;try{n=e.get(En,null)}catch{n=null}n?.(i)}function tm(t,i,e,n,r){let o=t.inputs?.[n],a=t.hostDirectiveInputs?.[n],s=!1;if(a)for(let l=0;l<a.length;l+=2){let d=a[l],u=a[l+1],f=i.data[d];Og(f,e[d],u,r),s=!0}if(o)for(let l of o){let d=e[l],u=i.data[l];Og(u,d,n,r),s=!0}return s}function FA(t,i){let e=Ln(i,t),n=e[re];LA(n,e);let r=e[ni];r!==null&&e[Mo]===null&&(e[Mo]=HC(r,e[Cn])),Ve(Te.ComponentStart);try{D_(n,e,e[dt])}finally{Ve(Te.ComponentEnd,e[dt])}}function LA(t,i){for(let e=i.length;e<t.blueprint.length;e++)i.push(t.blueprint[e])}function D_(t,i,e){lu(i);try{let n=t.viewQuery;n!==null&&xg(1,n,e);let r=t.template;r!==null&&bw(t,i,r,1,e),t.firstCreatePass&&(t.firstCreatePass=!1),i[Si]?.finishViewCreation(t),t.staticContentQueries&&UC(t,i),t.staticViewQueries&&xg(2,t.viewQuery,e);let o=t.components;o!==null&&VA(i,o)}catch(n){throw t.firstCreatePass&&(t.incompleteFirstPass=!0,t.firstCreatePass=!1),n}finally{i[ce]&=-5,cu()}}function VA(t,i){for(let e=0;e<i.length;e++)FA(t,i[e])}function Nl(t,i,e,n){let r=ee(null);try{let o=i.tView,s=t[ce]&4096?4096:16,l=h_(t,o,e,s,null,i,null,null,n?.injector??null,n?.embeddedViewInjector??null,n?.dehydratedView??null),d=t[i.index];l[Lr]=d;let u=t[Si];return u!==null&&(l[Si]=u.createEmbeddedView(o)),D_(o,l,e),l}finally{ee(r)}}function Ba(t,i){return!i||i.firstChild===null||RC(t)}function Sl(t,i,e,n,r=!1){for(;e!==null;){if(e.type===128){e=r?e.projectionNext:e.next;continue}let o=i[e.index];o!==null&&n.push(Fn(o)),ii(o)&&Sw(o,n);let a=e.type;if(a&8)Sl(t,i,e.child,n);else if(a&32){let s=g_(e,i),l;for(;l=s();)n.push(l)}else if(a&16){let s=_w(i,e);if(Array.isArray(s))n.push(...s);else{let l=Nr(i[tn]);Sl(l[re],l,s,n,!0)}}e=r?e.projectionNext:e.next}return n}function Sw(t,i){for(let e=ot;e<t.length;e++){let n=t[e],r=n[re].firstChild;r!==null&&Sl(n[re],n,r,i)}t[Vr]!==t[ni]&&i.push(t[Vr])}function Iw(t){if(t[To]!==null){for(let i of t[To])i.impl.addSequence(i);t[To].length=0}}var Tw=[];function BA(t){return t[wn]??jA(t)}function jA(t){let i=Tw.pop()??Object.create(UA);return i.lView=t,i}function HA(t){t.lView[wn]!==t&&(t.lView=null,Tw.push(t))}var UA=ne(C({},uo),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:t=>{Ro(t.lView)},consumerOnSignalRead(){this.lView[wn]=this}});function zA(t){let i=t[wn]??Object.create($A);return i.lView=t,i}var $A=ne(C({},uo),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:t=>{let i=Nr(t.lView);for(;i&&!kw(i[re]);)i=Nr(i);i&&zp(i)},consumerOnSignalRead(){this.lView[wn]=this}});function kw(t){return t.type!==2}function Aw(t){if(t[Or]===null)return;let i=!0;for(;i;){let e=!1;for(let n of t[Or])n.dirty&&(e=!0,n.zone===null||Zone.current===n.zone?n.run():n.zone.run(()=>n.run()));i=e&&!!(t[ce]&8192)}}var WA=100;function Rw(t,i=0){let n=t[Mi].rendererFactory,r=!1;r||n.begin?.();try{GA(t,i)}finally{r||n.end?.()}}function GA(t,i){let e=tg();try{ll(!0),Fg(t,i);let n=0;for(;vl(t);){if(n===WA)throw new L(103,!1);n++,Fg(t,1)}}finally{ll(e)}}function qA(t,i,e,n){if(Ao(i))return;let r=i[ce],o=!1,a=!1;lu(i);let s=!0,l=null,d=null;o||(kw(t)?(d=BA(i),l=Er(d)):sd()===null?(s=!1,d=zA(i),l=Er(d)):i[wn]&&(Mr(i[wn]),i[wn]=null));try{Up(i),_0(t.bindingStartIndex),e!==null&&bw(t,i,e,2,n);let u=(r&3)===3;if(!o)if(u){let v=t.preOrderCheckHooks;v!==null&&_u(i,v,null)}else{let v=t.preOrderHooks;v!==null&&vu(i,v,0,null),dg(i,0)}if(a||YA(i),Aw(i),Ow(i,0),t.contentQueries!==null&&UC(t,i),!o)if(u){let v=t.contentCheckHooks;v!==null&&_u(i,v)}else{let v=t.contentHooks;v!==null&&vu(i,v,1),dg(i,1)}ZA(t,i);let f=t.components;f!==null&&Pw(i,f,0);let _=t.viewQuery;if(_!==null&&xg(2,_,n),!o)if(u){let v=t.viewCheckHooks;v!==null&&_u(i,v)}else{let v=t.viewHooks;v!==null&&vu(i,v,2),dg(i,2)}if(t.firstUpdatePass===!0&&(t.firstUpdatePass=!1),i[eu]){for(let v of i[eu])v();i[eu]=null}o||(Iw(i),i[ce]&=-73)}catch(u){throw o||Ro(i),u}finally{d!==null&&(mo(d,l),s&&HA(d)),cu()}}function Ow(t,i){for(let e=NC(t);e!==null;e=PC(e))for(let n=ot;n<e.length;n++){let r=e[n];Nw(r,i)}}function YA(t){for(let i=NC(t);i!==null;i=PC(i)){if(!(i[ce]&2))continue;let e=i[ko];for(let n=0;n<e.length;n++){let r=e[n];zp(r)}}}function QA(t,i,e){Ve(Te.ComponentStart);let n=Ln(i,t);try{Nw(n,e)}finally{Ve(Te.ComponentEnd,n[dt])}}function Nw(t,i){nu(t)&&Fg(t,i)}function Fg(t,i){let n=t[re],r=t[ce],o=t[wn],a=!!(i===0&&r&16);if(a||=!!(r&64&&i===0),a||=!!(r&1024),a||=!!(o?.dirty&&ma(o)),a||=!1,o&&(o.dirty=!1),t[ce]&=-9217,a)qA(n,t,n.template,t[dt]);else if(r&8192){let s=ee(null);try{Aw(t),Ow(t,1);let l=n.components;l!==null&&Pw(t,l,1),Iw(t)}finally{ee(s)}}}function Pw(t,i,e){for(let n=0;n<i.length;n++)QA(t,i[n],e)}function ZA(t,i){let e=t.hostBindingOpCodes;if(e!==null)try{for(let n=0;n<e.length;n++){let r=e[n];if(r<0)Br(~r);else{let o=r,a=e[++n],s=e[++n];b0(a,o);let l=i[o];Ve(Te.HostBindingsUpdateStart,l);try{s(2,l)}finally{Ve(Te.HostBindingsUpdateEnd,l)}}}}finally{Br(-1)}}function x_(t,i){let e=tg()?64:1088;for(t[Mi].changeDetectionScheduler?.notify(i);t;){t[ce]|=e;let n=Nr(t);if(Ia(t)&&!n)return t;t=n}return null}function Fw(t,i,e,n){return[t,!0,0,i,null,n,null,e,null,null]}function Lw(t,i){let e=ot+i;if(e<t.length)return t[e]}function Pl(t,i,e,n=!0){let r=i[re];if(KA(r,i,t,e),n){let a=Pg(e,t),s=i[He],l=s.parentNode(t[Vr]);l!==null&&pA(r,t[en],s,i,l,a)}let o=i[Mo];o!==null&&o.firstChild!==null&&(o.firstChild=null)}function Vw(t,i){let e=Il(t,i);return e!==void 0&&Xu(e[re],e),e}function Il(t,i){if(t.length<=ot)return;let e=ot+i,n=t[e];if(n){let r=n[Lr];r!==null&&r!==t&&b_(r,n),i>0&&(t[e-1][Pn]=n[Pn]);let o=fl(t,ot+i);hA(n[re],n);let a=o[Si];a!==null&&a.detachView(o[re]),n[xt]=null,n[Pn]=null,n[ce]&=-129}return n}function KA(t,i,e,n){let r=ot+n,o=e.length;n>0&&(e[r-1][Pn]=i),n<o-ot?(i[Pn]=e[r],Ip(e,ot+n,i)):(e.push(i),i[Pn]=null),i[xt]=e;let a=i[Lr];a!==null&&e!==a&&Bw(a,i);let s=i[Si];s!==null&&s.insertView(t),iu(i),i[ce]|=128}function Bw(t,i){let e=t[ko],n=i[xt];if(ir(n))t[ce]|=2;else{let r=n[xt][tn];i[tn]!==r&&(t[ce]|=2)}e===null?t[ko]=[i]:e.push(i)}var jr=class{_lView;_cdRefInjectingView;_appRef=null;_attachedToViewContainer=!1;exhaustive;get rootNodes(){let i=this._lView,e=i[re];return Sl(e,i,e.firstChild,[])}constructor(i,e){this._lView=i,this._cdRefInjectingView=e}get context(){return this._lView[dt]}set context(i){this._lView[dt]=i}get destroyed(){return Ao(this._lView)}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let i=this._lView[xt];if(ii(i)){let e=i[gl],n=e?e.indexOf(this):-1;n>-1&&(Il(i,n),fl(e,n))}this._attachedToViewContainer=!1}Xu(this._lView[re],this._lView)}onDestroy(i){$p(this._lView,i)}markForCheck(){x_(this._cdRefInjectingView||this._lView,4)}detach(){this._lView[ce]&=-129}reattach(){iu(this._lView),this._lView[ce]|=128}detectChanges(){this._lView[ce]|=1024,Rw(this._lView)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new L(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null;let i=Ia(this._lView),e=this._lView[Lr];e!==null&&!i&&b_(e,this._lView),hw(this._lView[re],this._lView)}attachToAppRef(i){if(this._attachedToViewContainer)throw new L(902,!1);this._appRef=i;let e=Ia(this._lView),n=this._lView[Lr];n!==null&&!e&&Bw(n,this._lView),iu(this._lView)}};var _t=(()=>{class t{_declarationLView;_declarationTContainer;elementRef;static __NG_ELEMENT_ID__=XA;constructor(e,n,r){this._declarationLView=e,this._declarationTContainer=n,this.elementRef=r}get ssrId(){return this._declarationTContainer.tView?.ssrId||null}createEmbeddedView(e,n){return this.createEmbeddedViewImpl(e,n)}createEmbeddedViewImpl(e,n,r){let o=Nl(this._declarationLView,this._declarationTContainer,e,{embeddedViewInjector:n,dehydratedView:r});return new jr(o)}}return t})();function XA(){return nm(Mt(),ie())}function nm(t,i){return t.type&4?new _t(i,t,za(t,i)):null}function Wa(t,i,e,n,r){let o=t.data[i];if(o===null)o=JA(t,i,e,n,r),v0()&&(o.flags|=32);else if(o.type&64){o.type=e,o.value=n,o.attrs=r;let a=h0();o.injectorIndex=a===null?-1:a.injectorIndex}return Ta(o,!0),o}function JA(t,i,e,n,r){let o=Xp(),a=Jp(),s=a?o:o&&o.parent,l=t.data[i]=tR(t,s,e,i,n,r);return eR(t,l,o,a),l}function eR(t,i,e,n){t.firstChild===null&&(t.firstChild=i),e!==null&&(n?e.child==null&&i.parent!==null&&(e.child=i):e.next===null&&(e.next=i,i.prev=e))}function tR(t,i,e,n,r,o){let a=i?i.injectorIndex:-1,s=0;return Qp()&&(s|=128),{type:e,index:n,insertBeforeIndex:null,injectorIndex:a,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,controlDirectiveIndex:-1,customControlIndex:-1,propertyBindings:null,flags:s,providerIndexes:0,value:r,attrs:o,mergedAttrs:null,localNames:null,initialInputs:null,inputs:null,hostDirectiveInputs:null,outputs:null,hostDirectiveOutputs:null,directiveToIndex:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:i,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}function nR(t){let i=t[Fp]??[],n=t[xt][He],r=[];for(let o of i)o.data[VC]!==void 0?r.push(o):iR(o,n);t[Fp]=r}function iR(t,i){let e=0,n=t.firstChild;if(n){let r=t.data[LC];for(;e<r;){let o=n.nextSibling;XC(i,n,!1),n=o,e++}}}var rR=()=>null,oR=()=>null;function Au(t,i){return rR(t,i)}function jw(t,i,e){return oR(t,i,e)}var Hw=class{},im=class{},Lg=class{resolveComponentFactory(i){throw new L(917,!1)}},Fl=class{static NULL=new Lg},vt=class{},Oe=(()=>{class t{destroyNode=null;static __NG_ELEMENT_ID__=()=>aR()}return t})();function aR(){let t=ie(),i=Mt(),e=Ln(i.index,t);return(ir(e)?e:t)[He]}var Uw=(()=>{class t{static \u0275prov=b({token:t,providedIn:"root",factory:()=>null})}return t})();var yu={},Vg=class{injector;parentInjector;constructor(i,e){this.injector=i,this.parentInjector=e}get(i,e,n){let r=this.injector.get(i,yu,n);return r!==yu||e===yu?r:this.parentInjector.get(i,e,n)}};function Ru(t,i,e){let n=e?t.styles:null,r=e?t.classes:null,o=0;if(i!==null)for(let a=0;a<i.length;a++){let s=i[a];if(typeof s=="number")o=s;else if(o==1)r=Yd(r,s);else if(o==2){let l=s,d=i[++a];n=Yd(n,l+": "+d+";")}}e?t.styles=n:t.stylesWithoutHost=n,e?t.classes=r:t.classesWithoutHost=r}function Ee(t,i=0){let e=ie();if(e===null)return W(t,i);let n=Mt();return IC(n,e,jt(t),i)}function Ll(){let t="invalid";throw new Error(t)}function zw(t,i,e,n,r){let o=n===null?null:{"":-1},a=r(t,e);if(a!==null){let s=a,l=null,d=null;for(let u of a)if(u.resolveHostDirectives!==null){[s,l,d]=u.resolveHostDirectives(a);break}cR(t,i,e,s,o,l,d)}o!==null&&n!==null&&sR(e,n,o)}function sR(t,i,e){let n=t.localNames=[];for(let r=0;r<i.length;r+=2){let o=e[i[r+1]];if(o==null)throw new L(-301,!1);n.push(i[r],o)}}function lR(t,i,e){i.componentOffset=e,(t.components??=[]).push(i.index)}function cR(t,i,e,n,r,o,a){let s=n.length,l=null;for(let _=0;_<s;_++){let v=n[_];l===null&&Ti(v)&&(l=v,lR(t,e,_)),Cg(Mu(e,i),t,v.type)}pR(e,t.data.length,s),l?.viewProvidersResolver&&l.viewProvidersResolver(l);for(let _=0;_<s;_++){let v=n[_];v.providersResolver&&v.providersResolver(v)}let d=!1,u=!1,f=rw(t,i,s,null);s>0&&(e.directiveToIndex=new Map);for(let _=0;_<s;_++){let v=n[_];if(e.mergedAttrs=La(e.mergedAttrs,v.hostAttrs),uR(t,e,i,f,v),hR(f,v,r),a!==null&&a.has(v)){let[F,U]=a.get(v);e.directiveToIndex.set(v.type,[f,F+e.directiveStart,U+e.directiveStart])}else(o===null||!o.has(v))&&e.directiveToIndex.set(v.type,f);v.contentQueries!==null&&(e.flags|=4),(v.hostBindings!==null||v.hostAttrs!==null||v.hostVars!==0)&&(e.flags|=64);let w=v.type.prototype;!d&&(w.ngOnChanges||w.ngOnInit||w.ngDoCheck)&&((t.preOrderHooks??=[]).push(e.index),d=!0),!u&&(w.ngOnChanges||w.ngDoCheck)&&((t.preOrderCheckHooks??=[]).push(e.index),u=!0),f++}dR(t,e,o)}function dR(t,i,e){for(let n=i.directiveStart;n<i.directiveEnd;n++){let r=t.data[n];if(e===null||!e.has(r))X0(0,i,r,n),X0(1,i,r,n),eC(i,n,!1);else{let o=e.get(r);J0(0,i,o,n),J0(1,i,o,n),eC(i,n,!0)}}}function X0(t,i,e,n){let r=t===0?e.inputs:e.outputs;for(let o in r)if(r.hasOwnProperty(o)){let a;t===0?a=i.inputs??={}:a=i.outputs??={},a[o]??=[],a[o].push(n),$w(i,o)}}function J0(t,i,e,n){let r=t===0?e.inputs:e.outputs;for(let o in r)if(r.hasOwnProperty(o)){let a=r[o],s;t===0?s=i.hostDirectiveInputs??={}:s=i.hostDirectiveOutputs??={},s[a]??=[],s[a].push(n,o),$w(i,a)}}function $w(t,i){i==="class"?t.flags|=8:i==="style"&&(t.flags|=16)}function eC(t,i,e){let{attrs:n,inputs:r,hostDirectiveInputs:o}=t;if(n===null||!e&&r===null||e&&o===null||m_(t)){t.initialInputs??=[],t.initialInputs.push(null);return}let a=null,s=0;for(;s<n.length;){let l=n[s];if(l===0){s+=4;continue}else if(l===5){s+=2;continue}else if(typeof l=="number")break;if(!e&&r.hasOwnProperty(l)){let d=r[l];for(let u of d)if(u===i){a??=[],a.push(l,n[s+1]);break}}else if(e&&o.hasOwnProperty(l)){let d=o[l];for(let u=0;u<d.length;u+=2)if(d[u]===i){a??=[],a.push(d[u+1],n[s+1]);break}}s+=2}t.initialInputs??=[],t.initialInputs.push(a)}function uR(t,i,e,n,r){t.data[n]=r;let o=r.factory||(r.factory=Rr(r.type,!0)),a=new Po(o,Ti(r),Ee,null);t.blueprint[n]=a,e[n]=a,mR(t,i,n,rw(t,e,r.hostVars,zt),r)}function mR(t,i,e,n,r){let o=r.hostBindings;if(o){let a=t.hostBindingOpCodes;a===null&&(a=t.hostBindingOpCodes=[]);let s=~i.index;fR(a)!=s&&a.push(s),a.push(e,n,o)}}function fR(t){let i=t.length;for(;i>0;){let e=t[--i];if(typeof e=="number"&&e<0)return e}return 0}function hR(t,i,e){if(e){if(i.exportAs)for(let n=0;n<i.exportAs.length;n++)e[i.exportAs[n]]=t;Ti(i)&&(e[""]=t)}}function pR(t,i,e){t.flags|=1,t.directiveStart=i,t.directiveEnd=i+e,t.providerIndexes=i}function Ww(t,i,e,n,r,o,a,s){let l=i[re],d=l.consts,u=xn(d,a),f=Wa(l,t,e,n,u);return o&&zw(l,i,f,xn(d,s),r),f.mergedAttrs=La(f.mergedAttrs,f.attrs),f.attrs!==null&&Ru(f,f.attrs,!1),f.mergedAttrs!==null&&Ru(f,f.mergedAttrs,!0),l.queries!==null&&l.queries.elementStart(l,f),f}function Gw(t,i){bC(t,i),Lp(i)&&t.queries.elementEnd(i)}function gR(t,i,e,n,r,o){let a=i.consts,s=xn(a,r),l=Wa(i,t,e,n,s);if(l.mergedAttrs=La(l.mergedAttrs,l.attrs),o!=null){let d=xn(a,o);l.localNames=[];for(let u=0;u<d.length;u+=2)l.localNames.push(d[u],-1)}return l.attrs!==null&&Ru(l,l.attrs,!1),l.mergedAttrs!==null&&Ru(l,l.mergedAttrs,!0),i.queries!==null&&i.queries.elementStart(i,l),l}function E_(t,i,e){return t[i]=e}function qw(t,i){return t[i]}function ln(t,i,e){if(e===zt)return!1;let n=t[i];return Object.is(n,e)?!1:(t[i]=e,!0)}function _R(t,i,e,n){let r=ln(t,i,e);return ln(t,i+1,n)||r}function Cu(t,i,e){return function n(r){let o=Ii(t)?Ln(t.index,i):i;x_(o,5);let a=i[dt],s=tC(i,a,e,r),l=n.__ngNextListenerFn__;for(;l;)s=tC(i,a,l,r)&&s,l=l.__ngNextListenerFn__;return s}}function tC(t,i,e,n){let r=ee(null);try{return Ve(Te.OutputStart,i,e),e(n)!==!1}catch(o){return PA(t,o),!1}finally{Ve(Te.OutputEnd,i,e),ee(r)}}function Yw(t,i,e,n,r,o,a,s){let l=_l(t),d=!1,u=null;if(!n&&l&&(u=bR(i,e,o,t.index)),u!==null){let f=u.__ngLastListenerFn__||u;f.__ngNextListenerFn__=a,u.__ngLastListenerFn__=a,d=!0}else{let f=Dn(t,e),_=n?n(f):f;mk(e,_,o,s);let v=r.listen(_,o,s);if(!vR(o)){let w=n?F=>n(Fn(F[t.index])):t.index;Qw(w,i,e,o,s,v,!1)}}return d}function vR(t){return t.startsWith("animation")||t.startsWith("transition")}function bR(t,i,e,n){let r=t.cleanup;if(r!=null)for(let o=0;o<r.length-1;o+=2){let a=r[o];if(a===e&&r[o+1]===n){let s=i[Ma],l=r[o+2];return s&&s.length>l?s[l]:null}typeof a=="string"&&(o+=2)}return null}function Qw(t,i,e,n,r,o,a){let s=i.firstCreatePass?Gp(i):null,l=Wp(e),d=l.length;l.push(r,o),s&&s.push(n,t,d,(d+1)*(a?-1:1))}function nC(t,i,e,n,r,o){let a=i[e],s=i[re],d=s.data[e].outputs[n],f=a[d].subscribe(o);Qw(t.index,s,i,r,o,f,!0)}var Bg=Symbol("BINDING");function Zw(t){return t.debugInfo?.className||t.type.name||null}var Ou=class extends Fl{ngModule;constructor(i){super(),this.ngModule=i}resolveComponentFactory(i){let e=xi(i);return new Hr(e,this.ngModule)}};function yR(t){return Object.keys(t).map(i=>{let[e,n,r]=t[i],o={propName:e,templateName:i,isSignal:(n&Yu.SignalBased)!==0};return r&&(o.transform=r),o})}function CR(t){return Object.keys(t).map(i=>({propName:t[i],templateName:i}))}function wR(t,i,e){let n=i instanceof Le?i:i?.injector;return n&&t.getStandaloneInjector!==null&&(n=t.getStandaloneInjector(n)||n),n?new Vg(e,n):e}function DR(t){let i=t.get(vt,null);if(i===null)throw new L(407,!1);let e=t.get(Uw,null),n=t.get(Di,null),r=t.get(si,null,{optional:!0});return{rendererFactory:i,sanitizer:e,changeDetectionScheduler:n,ngReflect:!1,tracingService:r}}function xR(t,i){let e=Kw(t);return ZC(i,e,e==="svg"?Vp:e==="math"?a0:null)}function Kw(t){return(t.selectors[0][0]||"div").toLowerCase()}var Hr=class extends im{componentDef;ngModule;selector;componentType;ngContentSelectors;isBoundToModule;cachedInputs=null;cachedOutputs=null;get inputs(){return this.cachedInputs??=yR(this.componentDef.inputs),this.cachedInputs}get outputs(){return this.cachedOutputs??=CR(this.componentDef.outputs),this.cachedOutputs}constructor(i,e){super(),this.componentDef=i,this.ngModule=e,this.componentType=i.type,this.selector=Wk(i.selectors),this.ngContentSelectors=i.ngContentSelectors??[],this.isBoundToModule=!!e}create(i,e,n,r,o,a){Ve(Te.DynamicComponentStart);let s=ee(null);try{let l=this.componentDef,d=wR(l,r||this.ngModule,i),u=DR(d),f=u.tracingService;return f&&f.componentCreate?f.componentCreate(Zw(l),()=>this.createComponentRef(u,d,e,n,o,a)):this.createComponentRef(u,d,e,n,o,a)}finally{ee(s)}}createComponentRef(i,e,n,r,o,a){let s=this.componentDef,l=ER(r,s,a,o),d=i.rendererFactory.createRenderer(null,s),u=r?MA(d,r,s.encapsulation,e):xR(s,d),f=a?.some(iC)||o?.some(w=>typeof w!="function"&&w.bindings.some(iC)),_=h_(null,l,null,512|iw(s),null,null,i,d,e,null,HC(u,e,!0));_[tt]=u,lu(_);let v=null;try{let w=Ww(tt,_,2,"#host",()=>l.directiveRegistry,!0,0);JC(d,u,w),Va(u,_),w_(l,_,w),zC(l,w,_),Gw(l,w),n!==void 0&&SR(w,this.ngContentSelectors,n),v=Ln(w.index,_),_[dt]=v[dt],D_(l,_,null)}catch(w){throw v!==null&&Dg(v),Dg(_),w}finally{Ve(Te.DynamicComponentEnd),cu()}return new Nu(this.componentType,_,!!f)}};function ER(t,i,e,n){let r=t?["ng-version","21.2.7"]:Gk(i.selectors[0]),o=null,a=null,s=0;if(e)for(let u of e)s+=u[Bg].requiredVars,u.create&&(u.targetIdx=0,(o??=[]).push(u)),u.update&&(u.targetIdx=0,(a??=[]).push(u));if(n)for(let u=0;u<n.length;u++){let f=n[u];if(typeof f!="function")for(let _ of f.bindings){s+=_[Bg].requiredVars;let v=u+1;_.create&&(_.targetIdx=v,(o??=[]).push(_)),_.update&&(_.targetIdx=v,(a??=[]).push(_))}}let l=[i];if(n)for(let u of n){let f=typeof u=="function"?u:u.type,_=Ep(f);l.push(_)}return f_(0,null,MR(o,a),1,s,l,null,null,null,[r],null)}function MR(t,i){return!t&&!i?null:e=>{if(e&1&&t)for(let n of t)n.create();if(e&2&&i)for(let n of i)n.update()}}function iC(t){let i=t[Bg].kind;return i==="input"||i==="twoWay"}var Nu=class extends Hw{_rootLView;_hasInputBindings;instance;hostView;changeDetectorRef;componentType;location;previousInputValues=null;_tNode;constructor(i,e,n){super(),this._rootLView=e,this._hasInputBindings=n,this._tNode=tu(e[re],tt),this.location=za(this._tNode,e),this.instance=Ln(this._tNode.index,e)[dt],this.hostView=this.changeDetectorRef=new jr(e,void 0),this.componentType=i}setInput(i,e){this._hasInputBindings;let n=this._tNode;if(this.previousInputValues??=new Map,this.previousInputValues.has(i)&&Object.is(this.previousInputValues.get(i),e))return;let r=this._rootLView,o=tm(n,r[re],r,i,e);this.previousInputValues.set(i,e);let a=Ln(n.index,r);x_(a,1)}get injector(){return new No(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(i){this.hostView.onDestroy(i)}};function SR(t,i,e){let n=t.projection=[];for(let r=0;r<i.length;r++){let o=e[r];n.push(o!=null&&o.length?Array.from(o):null)}}var It=(()=>{class t{static __NG_ELEMENT_ID__=IR}return t})();function IR(){let t=Mt();return Xw(t,ie())}var jg=class t extends It{_lContainer;_hostTNode;_hostLView;constructor(i,e,n){super(),this._lContainer=i,this._hostTNode=e,this._hostLView=n}get element(){return za(this._hostTNode,this._hostLView)}get injector(){return new No(this._hostTNode,this._hostLView)}get parentInjector(){let i=n_(this._hostTNode,this._hostLView);if(wC(i)){let e=xu(i,this._hostLView),n=Du(i),r=e[re].data[n+8];return new No(r,e)}else return new No(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(i){let e=rC(this._lContainer);return e!==null&&e[i]||null}get length(){return this._lContainer.length-ot}createEmbeddedView(i,e,n){let r,o;typeof n=="number"?r=n:n!=null&&(r=n.index,o=n.injector);let a=Au(this._lContainer,i.ssrId),s=i.createEmbeddedViewImpl(e||{},o,a);return this.insertImpl(s,r,Ba(this._hostTNode,a)),s}createComponent(i,e,n,r,o,a,s){let l=i&&!BT(i),d;if(l)d=e;else{let U=e||{};d=U.index,n=U.injector,r=U.projectableNodes,o=U.environmentInjector||U.ngModuleRef,a=U.directives,s=U.bindings}let u=l?i:new Hr(xi(i)),f=n||this.parentInjector;if(!o&&u.ngModule==null){let Q=(l?f:this.parentInjector).get(Le,null);Q&&(o=Q)}let _=xi(u.componentType??{}),v=Au(this._lContainer,_?.id??null),w=v?.firstChild??null,F=u.create(f,r,w,o,a,s);return this.insertImpl(F.hostView,d,Ba(this._hostTNode,v)),F}insert(i,e){return this.insertImpl(i,e,!0)}insertImpl(i,e,n){let r=i._lView;if(l0(r)){let s=this.indexOf(i);if(s!==-1)this.detach(s);else{let l=r[xt],d=new t(l,l[en],l[xt]);d.detach(d.indexOf(i))}}let o=this._adjustIndex(e),a=this._lContainer;return Pl(a,r,o,n),i.attachToViewContainerRef(),Ip(fg(a),o,i),i}move(i,e){return this.insert(i,e)}indexOf(i){let e=rC(this._lContainer);return e!==null?e.indexOf(i):-1}remove(i){let e=this._adjustIndex(i,-1),n=Il(this._lContainer,e);n&&(fl(fg(this._lContainer),e),Xu(n[re],n))}detach(i){let e=this._adjustIndex(i,-1),n=Il(this._lContainer,e);return n&&fl(fg(this._lContainer),e)!=null?new jr(n):null}_adjustIndex(i,e=0){return i??this.length+e}};function rC(t){return t[gl]}function fg(t){return t[gl]||(t[gl]=[])}function Xw(t,i){let e,n=i[t.index];return ii(n)?e=n:(e=Fw(n,i,null,t),i[t.index]=e,p_(i,e)),kR(e,i,t,n),new jg(e,t,i)}function TR(t,i){let e=t[He],n=e.createComment(""),r=Dn(i,t),o=e.parentNode(r);return Su(e,o,n,e.nextSibling(r),!1),n}var kR=OR,AR=()=>!1;function RR(t,i,e){return AR(t,i,e)}function OR(t,i,e,n){if(t[Vr])return;let r;e.type&8?r=Fn(n):r=TR(i,e),t[Vr]=r}var Hg=class t{queryList;matches=null;constructor(i){this.queryList=i}clone(){return new t(this.queryList)}setDirty(){this.queryList.setDirty()}},Ug=class t{queries;constructor(i=[]){this.queries=i}createEmbeddedView(i){let e=i.queries;if(e!==null){let n=i.contentQueries!==null?i.contentQueries[0]:e.length,r=[];for(let o=0;o<n;o++){let a=e.getByIndex(o),s=this.queries[a.indexInDeclarationView];r.push(s.clone())}return new t(r)}return null}insertView(i){this.dirtyQueriesWithMatches(i)}detachView(i){this.dirtyQueriesWithMatches(i)}finishViewCreation(i){this.dirtyQueriesWithMatches(i)}dirtyQueriesWithMatches(i){for(let e=0;e<this.queries.length;e++)S_(i,e).matches!==null&&this.queries[e].setDirty()}},Pu=class{flags;read;predicate;constructor(i,e,n=null){this.flags=e,this.read=n,typeof i=="string"?this.predicate=VR(i):this.predicate=i}},zg=class t{queries;constructor(i=[]){this.queries=i}elementStart(i,e){for(let n=0;n<this.queries.length;n++)this.queries[n].elementStart(i,e)}elementEnd(i){for(let e=0;e<this.queries.length;e++)this.queries[e].elementEnd(i)}embeddedTView(i){let e=null;for(let n=0;n<this.length;n++){let r=e!==null?e.length:0,o=this.getByIndex(n).embeddedTView(i,r);o&&(o.indexInDeclarationView=n,e!==null?e.push(o):e=[o])}return e!==null?new t(e):null}template(i,e){for(let n=0;n<this.queries.length;n++)this.queries[n].template(i,e)}getByIndex(i){return this.queries[i]}get length(){return this.queries.length}track(i){this.queries.push(i)}},$g=class t{metadata;matches=null;indexInDeclarationView=-1;crossesNgTemplate=!1;_declarationNodeIndex;_appliesToNextNode=!0;constructor(i,e=-1){this.metadata=i,this._declarationNodeIndex=e}elementStart(i,e){this.isApplyingToNode(e)&&this.matchTNode(i,e)}elementEnd(i){this._declarationNodeIndex===i.index&&(this._appliesToNextNode=!1)}template(i,e){this.elementStart(i,e)}embeddedTView(i,e){return this.isApplyingToNode(i)?(this.crossesNgTemplate=!0,this.addMatch(-i.index,e),new t(this.metadata)):null}isApplyingToNode(i){if(this._appliesToNextNode&&(this.metadata.flags&1)!==1){let e=this._declarationNodeIndex,n=i.parent;for(;n!==null&&n.type&8&&n.index!==e;)n=n.parent;return e===(n!==null?n.index:-1)}return this._appliesToNextNode}matchTNode(i,e){let n=this.metadata.predicate;if(Array.isArray(n))for(let r=0;r<n.length;r++){let o=n[r];this.matchTNodeWithReadOption(i,e,NR(e,o)),this.matchTNodeWithReadOption(i,e,bu(e,i,o,!1,!1))}else n===_t?e.type&4&&this.matchTNodeWithReadOption(i,e,-1):this.matchTNodeWithReadOption(i,e,bu(e,i,n,!1,!1))}matchTNodeWithReadOption(i,e,n){if(n!==null){let r=this.metadata.read;if(r!==null)if(r===B||r===It||r===_t&&e.type&4)this.addMatch(e.index,-2);else{let o=bu(e,i,r,!1,!1);o!==null&&this.addMatch(e.index,o)}else this.addMatch(e.index,n)}}addMatch(i,e){this.matches===null?this.matches=[i,e]:this.matches.push(i,e)}};function NR(t,i){let e=t.localNames;if(e!==null){for(let n=0;n<e.length;n+=2)if(e[n]===i)return e[n+1]}return null}function PR(t,i){return t.type&11?za(t,i):t.type&4?nm(t,i):null}function FR(t,i,e,n){return e===-1?PR(i,t):e===-2?LR(t,i,n):xl(t,t[re],e,i)}function LR(t,i,e){if(e===B)return za(i,t);if(e===_t)return nm(i,t);if(e===It)return Xw(i,t)}function Jw(t,i,e,n){let r=i[Si].queries[n];if(r.matches===null){let o=t.data,a=e.matches,s=[];for(let l=0;a!==null&&l<a.length;l+=2){let d=a[l];if(d<0)s.push(null);else{let u=o[d];s.push(FR(i,u,a[l+1],e.metadata.read))}}r.matches=s}return r.matches}function Wg(t,i,e,n){let r=t.queries.getByIndex(e),o=r.matches;if(o!==null){let a=Jw(t,i,r,e);for(let s=0;s<o.length;s+=2){let l=o[s];if(l>0)n.push(a[s/2]);else{let d=o[s+1],u=i[-l];for(let f=ot;f<u.length;f++){let _=u[f];_[Lr]===_[xt]&&Wg(_[re],_,d,n)}if(u[ko]!==null){let f=u[ko];for(let _=0;_<f.length;_++){let v=f[_];Wg(v[re],v,d,n)}}}}}return n}function M_(t,i){return t[Si].queries[i].queryList}function eD(t,i,e){let n=new or((e&4)===4);return u0(t,i,n,n.destroy),(i[Si]??=new Ug).queries.push(new Hg(n))-1}function tD(t,i,e){let n=We();return n.firstCreatePass&&(iD(n,new Pu(t,i,e),-1),(i&2)===2&&(n.staticViewQueries=!0)),eD(n,ie(),i)}function nD(t,i,e,n){let r=We();if(r.firstCreatePass){let o=Mt();iD(r,new Pu(i,e,n),o.index),BR(r,t),(e&2)===2&&(r.staticContentQueries=!0)}return eD(r,ie(),e)}function VR(t){return t.split(",").map(i=>i.trim())}function iD(t,i,e){t.queries===null&&(t.queries=new zg),t.queries.track(new $g(i,e))}function BR(t,i){let e=t.contentQueries||(t.contentQueries=[]),n=e.length?e[e.length-1]:-1;i!==n&&e.push(t.queries.length-1,i)}function S_(t,i){return t.queries.getByIndex(i)}function rD(t,i){let e=t[re],n=S_(e,i);return n.crossesNgTemplate?Wg(e,t,i,[]):Jw(e,t,n,i)}function I_(t,i,e){let n,r=Ys(()=>{n._dirtyCounter();let o=jR(n,t);if(i&&o===void 0)throw new L(-951,!1);return o});return n=r[pt],n._dirtyCounter=D(0),n._flatValue=void 0,r}function T_(t){return I_(!0,!1,t)}function k_(t){return I_(!0,!0,t)}function oD(t){return I_(!1,!1,t)}function aD(t,i){let e=t[pt];e._lView=ie(),e._queryIndex=i,e._queryList=M_(e._lView,i),e._queryList.onDirty(()=>e._dirtyCounter.update(n=>n+1))}function jR(t,i){let e=t._lView,n=t._queryIndex;if(e===void 0||n===void 0||e[ce]&4)return i?void 0:qt;let r=M_(e,n),o=rD(e,n);return r.reset(o,AC),i?r.first:r._changesDetected||t._flatValue===void 0?t._flatValue=r.toArray():t._flatValue}var Pi=class{},rm=class{};var Fu=class extends Pi{ngModuleType;_parent;_bootstrapComponents=[];_r3Injector;instance;destroyCbs=[];componentFactoryResolver=new Ou(this);constructor(i,e,n,r=!0){super(),this.ngModuleType=i,this._parent=e;let o=xp(i);this._bootstrapComponents=ew(o.bootstrap),this._r3Injector=rg(i,e,[{provide:Pi,useValue:this},{provide:Fl,useValue:this.componentFactoryResolver},...n],ul(i),new Set(["environment"])),r&&this.resolveInjectorInitializers()}resolveInjectorInitializers(){this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(this.ngModuleType)}get injector(){return this._r3Injector}destroy(){let i=this._r3Injector;!i.destroyed&&i.destroy(),this.destroyCbs.forEach(e=>e()),this.destroyCbs=null}onDestroy(i){this.destroyCbs.push(i)}},Lu=class extends rm{moduleType;constructor(i){super(),this.moduleType=i}create(i){return new Fu(this.moduleType,i,[])}};var Tl=class extends Pi{injector;componentFactoryResolver=new Ou(this);instance=null;constructor(i){super();let e=new xo([...i.providers,{provide:Pi,useValue:this},{provide:Fl,useValue:this.componentFactoryResolver}],i.parent||Ea(),i.debugName,new Set(["environment"]));this.injector=e,i.runEnvironmentInitializers&&e.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(i){this.injector.onDestroy(i)}};function Ga(t,i,e=null){return new Tl({providers:t,parent:i,debugName:e,runEnvironmentInitializers:!0}).injector}var HR=(()=>{class t{_injector;cachedInjectors=new Map;constructor(e){this._injector=e}getOrCreateStandaloneInjector(e){if(!e.standalone)return null;if(!this.cachedInjectors.has(e)){let n=Ap(!1,e.type),r=n.length>0?Ga([n],this._injector,""):null;this.cachedInjectors.set(e,r)}return this.cachedInjectors.get(e)}ngOnDestroy(){try{for(let e of this.cachedInjectors.values())e!==null&&e.destroy()}finally{this.cachedInjectors.clear()}}static \u0275prov=b({token:t,providedIn:"environment",factory:()=>new t(W(Le))})}return t})();function E(t){return Al(()=>{let i=sD(t),e=ne(C({},i),{decls:t.decls,vars:t.vars,template:t.template,consts:t.consts||null,ngContentSelectors:t.ngContentSelectors,onPush:t.changeDetection===i_.OnPush,directiveDefs:null,pipeDefs:null,dependencies:i.standalone&&t.dependencies||null,getStandaloneInjector:i.standalone?r=>r.get(HR).getOrCreateStandaloneInjector(e):null,getExternalStyles:null,signals:t.signals??!1,data:t.data||{},encapsulation:t.encapsulation||oi.Emulated,styles:t.styles||qt,_:null,schemas:t.schemas||null,tView:null,id:""});i.standalone&&li("NgStandalone"),lD(e);let n=t.dependencies;return e.directiveDefs=oC(n,UR),e.pipeDefs=oC(n,Wy),e.id=WR(e),e})}function UR(t){return xi(t)||Ep(t)}function $(t){return Al(()=>({type:t.type,bootstrap:t.bootstrap||qt,declarations:t.declarations||qt,imports:t.imports||qt,exports:t.exports||qt,transitiveCompileScopes:null,schemas:t.schemas||null,id:t.id||null}))}function zR(t,i){if(t==null)return Pr;let e={};for(let n in t)if(t.hasOwnProperty(n)){let r=t[n],o,a,s,l;Array.isArray(r)?(s=r[0],o=r[1],a=r[2]??o,l=r[3]||null):(o=r,a=r,s=Yu.None,l=null),e[o]=[n,s,l],i[o]=a}return e}function $R(t){if(t==null)return Pr;let i={};for(let e in t)t.hasOwnProperty(e)&&(i[t[e]]=e);return i}function N(t){return Al(()=>{let i=sD(t);return lD(i),i})}function A_(t){return{type:t.type,name:t.name,factory:null,pure:t.pure!==!1,standalone:t.standalone??!0,onDestroy:t.type.prototype.ngOnDestroy||null}}function sD(t){let i={};return{type:t.type,providersResolver:null,viewProvidersResolver:null,factory:null,hostBindings:t.hostBindings||null,hostVars:t.hostVars||0,hostAttrs:t.hostAttrs||null,contentQueries:t.contentQueries||null,declaredInputs:i,inputConfig:t.inputs||Pr,exportAs:t.exportAs||null,standalone:t.standalone??!0,signals:t.signals===!0,selectors:t.selectors||qt,viewQuery:t.viewQuery||null,features:t.features||null,setInput:null,resolveHostDirectives:null,hostDirectives:null,controlDef:null,inputs:zR(t.inputs,i),outputs:$R(t.outputs),debugInfo:null}}function lD(t){t.features?.forEach(i=>i(t))}function oC(t,i){return t?()=>{let e=typeof t=="function"?t():t,n=[];for(let r of e){let o=i(r);o!==null&&n.push(o)}return n}:null}function WR(t){let i=0,e=typeof t.consts=="function"?"":t.consts,n=[t.selectors,t.ngContentSelectors,t.hostVars,t.hostAttrs,e,t.vars,t.decls,t.encapsulation,t.standalone,t.signals,t.exportAs,JSON.stringify(t.inputs),JSON.stringify(t.outputs),Object.getOwnPropertyNames(t.type.prototype),!!t.contentQueries,!!t.viewQuery];for(let o of n.join("|"))i=Math.imul(31,i)+o.charCodeAt(0)<<0;return i+=2147483648,"c"+i}function GR(t){return Object.getPrototypeOf(t.prototype).constructor}function _e(t){let i=GR(t.type),e=!0,n=[t];for(;i;){let r;if(Ti(t))r=i.\u0275cmp||i.\u0275dir;else{if(i.\u0275cmp)throw new L(903,!1);r=i.\u0275dir}if(r){if(e){n.push(r);let a=t;a.inputs=hg(t.inputs),a.declaredInputs=hg(t.declaredInputs),a.outputs=hg(t.outputs);let s=r.hostBindings;s&&KR(t,s);let l=r.viewQuery,d=r.contentQueries;if(l&&QR(t,l),d&&ZR(t,d),qR(t,r),$y(t.outputs,r.outputs),Ti(r)&&r.data.animation){let u=t.data;u.animation=(u.animation||[]).concat(r.data.animation)}}let o=r.features;if(o)for(let a=0;a<o.length;a++){let s=o[a];s&&s.ngInherit&&s(t),s===_e&&(e=!1)}}i=Object.getPrototypeOf(i)}YR(n)}function qR(t,i){for(let e in i.inputs){if(!i.inputs.hasOwnProperty(e)||t.inputs.hasOwnProperty(e))continue;let n=i.inputs[e];n!==void 0&&(t.inputs[e]=n,t.declaredInputs[e]=i.declaredInputs[e])}}function YR(t){let i=0,e=null;for(let n=t.length-1;n>=0;n--){let r=t[n];r.hostVars=i+=r.hostVars,r.hostAttrs=La(r.hostAttrs,e=La(e,r.hostAttrs))}}function hg(t){return t===Pr?{}:t===qt?[]:t}function QR(t,i){let e=t.viewQuery;e?t.viewQuery=(n,r)=>{i(n,r),e(n,r)}:t.viewQuery=i}function ZR(t,i){let e=t.contentQueries;e?t.contentQueries=(n,r,o)=>{i(n,r,o),e(n,r,o)}:t.contentQueries=i}function KR(t,i){let e=t.hostBindings;e?t.hostBindings=(n,r)=>{i(n,r),e(n,r)}:t.hostBindings=i}function cD(t,i,e,n,r,o,a,s){if(e.firstCreatePass){t.mergedAttrs=La(t.mergedAttrs,t.attrs);let u=t.tView=f_(2,t,r,o,a,e.directiveRegistry,e.pipeRegistry,null,e.schemas,e.consts,null);e.queries!==null&&(e.queries.template(e,t),u.queries=e.queries.embeddedTView(t))}s&&(t.flags|=s),Ta(t,!1);let l=JR(e,i,t,n);du()&&y_(e,i,l,t),Va(l,i);let d=Fw(l,i,l,t);i[n+tt]=d,p_(i,d),RR(d,t,i)}function XR(t,i,e,n,r,o,a,s,l,d,u){let f=e+tt,_;return i.firstCreatePass?(_=Wa(i,f,4,a||null,s||null),Yp()&&zw(i,t,_,xn(i.consts,d),Dw),bC(i,_)):_=i.data[f],cD(_,t,i,e,n,r,o,l),_l(_)&&w_(i,t,_),d!=null&&em(t,_,u),_}function ja(t,i,e,n,r,o,a,s,l,d,u){let f=e+tt,_;if(i.firstCreatePass){if(_=Wa(i,f,4,a||null,s||null),d!=null){let v=xn(i.consts,d);_.localNames=[];for(let w=0;w<v.length;w+=2)_.localNames.push(v[w],-1)}}else _=i.data[f];return cD(_,t,i,e,n,r,o,l),d!=null&&em(t,_,u),_}function ut(t,i,e,n,r,o,a,s){let l=ie(),d=We(),u=xn(d.consts,o);return XR(l,d,t,i,e,n,r,u,void 0,a,s),ut}function Vl(t,i,e,n,r,o,a,s){let l=ie(),d=We(),u=xn(d.consts,o);return ja(l,d,t,i,e,n,r,u,void 0,a,s),Vl}var JR=eO;function eO(t,i,e,n){return uu(!0),i[He].createComment("")}var om=(()=>{class t{log(e){console.log(e)}warn(e){console.warn(e)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"platform"})}return t})();function Fi(t){return typeof t=="function"&&t[pt]!==void 0}function R_(t){return Fi(t)&&typeof t.set=="function"}var O_=new y("");function lr(t){return!!t&&typeof t.then=="function"}function am(t){return!!t&&typeof t.subscribe=="function"}var N_=new y("");function sm(t){return Ei([{provide:N_,multi:!0,useValue:t}])}var P_=(()=>{class t{resolve;reject;initialized=!1;done=!1;donePromise=new Promise((e,n)=>{this.resolve=e,this.reject=n});appInits=c(N_,{optional:!0})??[];injector=c(G);constructor(){}runInitializers(){if(this.initialized)return;let e=[];for(let r of this.appInits){let o=Et(this.injector,r);if(lr(o))e.push(o);else if(am(o)){let a=new Promise((s,l)=>{o.subscribe({complete:s,error:l})});e.push(a)}}let n=()=>{this.done=!0,this.resolve()};Promise.all(e).then(()=>{n()}).catch(r=>{this.reject(r)}),e.length===0&&n(),this.initialized=!0}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Bl=new y("");function dD(){Hh(()=>{let t="";throw new L(600,t)})}function uD(t){return t.isBoundToModule}var tO=10;var Mn=(()=>{class t{_runningTick=!1;_destroyed=!1;_destroyListeners=[];_views=[];internalErrorHandler=c(En);afterRenderManager=c(Zu);zonelessEnabled=c(yl);rootEffectScheduler=c(fu);dirtyFlags=0;tracingSnapshot=null;allTestViews=new Set;autoDetectTestViews=new Set;includeAllTestViews=!1;afterTick=new S;get allViews(){return[...(this.includeAllTestViews?this.allTestViews:this.autoDetectTestViews).keys(),...this._views]}get destroyed(){return this._destroyed}componentTypes=[];components=[];internalPendingTask=c(rr);get isStable(){return this.internalPendingTask.hasPendingTasksObservable.pipe(le(e=>!e))}constructor(){c(si,{optional:!0})}whenStable(){let e;return new Promise(n=>{e=this.isStable.subscribe({next:r=>{r&&n()}})}).finally(()=>{e.unsubscribe()})}_injector=c(Le);_rendererFactory=null;get injector(){return this._injector}bootstrap(e,n){return this.bootstrapImpl(e,n)}bootstrapImpl(e,n,r=G.NULL){return this._injector.get(V).run(()=>{Ve(Te.BootstrapComponentStart);let a=e instanceof im;if(!this._injector.get(P_).done){let w="";throw new L(405,w)}let l;a?l=e:l=this._injector.get(Fl).resolveComponentFactory(e),this.componentTypes.push(l.componentType);let d=uD(l)?void 0:this._injector.get(Pi),u=n||l.selector,f=l.create(r,[],u,d),_=f.location.nativeElement,v=f.injector.get(O_,null);return v?.registerApplication(_),f.onDestroy(()=>{this.detachView(f.hostView),Dl(this.components,f),v?.unregisterApplication(_)}),this._loadComponent(f),Ve(Te.BootstrapComponentEnd,f),f})}tick(){this.zonelessEnabled||(this.dirtyFlags|=1),this._tick()}_tick(){Ve(Te.ChangeDetectionStart),this.tracingSnapshot!==null?this.tracingSnapshot.run(Qu.CHANGE_DETECTION,this.tickImpl):this.tickImpl()}tickImpl=()=>{if(this._runningTick)throw Ve(Te.ChangeDetectionEnd),new L(101,!1);let e=ee(null);try{this._runningTick=!0,this.synchronize()}finally{this._runningTick=!1,this.tracingSnapshot?.dispose(),this.tracingSnapshot=null,ee(e),this.afterTick.next(),Ve(Te.ChangeDetectionEnd)}};synchronize(){this._rendererFactory===null&&!this._injector.destroyed&&(this._rendererFactory=this._injector.get(vt,null,{optional:!0}));let e=0;for(;this.dirtyFlags!==0&&e++<tO;){Ve(Te.ChangeDetectionSyncStart);try{this.synchronizeOnce()}finally{Ve(Te.ChangeDetectionSyncEnd)}}}synchronizeOnce(){this.dirtyFlags&16&&(this.dirtyFlags&=-17,this.rootEffectScheduler.flush());let e=!1;if(this.dirtyFlags&7){let n=!!(this.dirtyFlags&1);this.dirtyFlags&=-8,this.dirtyFlags|=8;for(let{_lView:r}of this.allViews){if(!n&&!vl(r))continue;let o=n&&!this.zonelessEnabled?0:1;Rw(r,o),e=!0}if(this.dirtyFlags&=-5,this.syncDirtyFlagsWithViews(),this.dirtyFlags&23)return}e||(this._rendererFactory?.begin?.(),this._rendererFactory?.end?.()),this.dirtyFlags&8&&(this.dirtyFlags&=-9,this.afterRenderManager.execute()),this.syncDirtyFlagsWithViews()}syncDirtyFlagsWithViews(){if(this.allViews.some(({_lView:e})=>vl(e))){this.dirtyFlags|=2;return}else this.dirtyFlags&=-8}attachView(e){let n=e;this._views.push(n),n.attachToAppRef(this)}detachView(e){let n=e;Dl(this._views,n),n.detachFromAppRef()}_loadComponent(e){this.attachView(e.hostView);try{this.tick()}catch(r){this.internalErrorHandler(r)}this.components.push(e),this._injector.get(Bl,[]).forEach(r=>r(e))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(e=>e()),this._views.slice().forEach(e=>e.destroy())}finally{this._destroyed=!0,this._views=[],this._destroyListeners=[]}}onDestroy(e){return this._destroyListeners.push(e),()=>Dl(this._destroyListeners,e)}destroy(){if(this._destroyed)throw new L(406,!1);let e=this._injector;e.destroy&&!e.destroyed&&e.destroy()}get viewCount(){return this._views.length}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Dl(t,i){let e=t.indexOf(i);e>-1&&t.splice(e,1)}function lm(t,i){let e=ie(),n=ki();if(ln(e,n,i)){let r=We(),o=ka();if(tm(o,r,e,t,i))Ii(o)&&ww(e,o.index);else{let s=Dn(o,e);xw(e[He],s,null,o.value,t,i,null)}}return lm}function K(t,i,e,n){let r=ie(),o=ki();if(ln(r,o,i)){let a=We(),s=ka();OA(s,r,t,i,e,n)}return K}function Fa(t){if(li("NgAnimateEnter"),!sw)return Fa;let i=ie();if(Xk(i))return Fa;let e=Mt(),n=i[Cn].get(V);return iA(q0(i),e,()=>nO(i,e,t,n)),fA(i[Cn]),fw(i[Cn],q0(i)),Fa}function nO(t,i,e,n){let r=Dn(i,t),o=t[He],a=nA(e),s=[],l=!1,d=f=>{if(Tu(f)!==r)return;let _=f instanceof AnimationEvent?"animationend":"transitionend";n.runOutsideAngular(()=>{o.listen(r,_,u)})},u=f=>{Tu(f)===r&&(cw(f,r)&&(l=!0),iO(f,r,o))};if(a&&a.length>0){n.runOutsideAngular(()=>{s.push(o.listen(r,"animationstart",d)),s.push(o.listen(r,"transitionstart",d))}),Jk(r,a,s);for(let f of a)o.addClass(r,f);n.runOutsideAngular(()=>{requestAnimationFrame(()=>{if(!l&&(sA(r,Iu,sw),!Iu.has(r))){for(let f of a)o.removeClass(r,f);lw(r)}})})}}function iO(t,i,e){let n=El.get(i);if(!(Tu(t)!==i||!n)&&cw(t,i)){t.stopPropagation();for(let r of n.classList)e.removeClass(i,r);lw(i)}}var Gg=class{destroy(i){}updateValue(i,e){}swap(i,e){let n=Math.min(i,e),r=Math.max(i,e),o=this.detach(r);if(r-n>1){let a=this.detach(n);this.attach(n,o),this.attach(r,a)}else this.attach(n,o)}move(i,e){this.attach(e,this.detach(i))}};function pg(t,i,e,n,r){return t===e&&Object.is(i,n)?1:Object.is(r(t,i),r(e,n))?-1:0}function rO(t,i,e,n){let r,o,a=0,s=t.length-1,l=void 0;if(Array.isArray(i)){ee(n);let d=i.length-1;for(ee(null);a<=s&&a<=d;){let u=t.at(a),f=i[a],_=pg(a,u,a,f,e);if(_!==0){_<0&&t.updateValue(a,f),a++;continue}let v=t.at(s),w=i[d],F=pg(s,v,d,w,e);if(F!==0){F<0&&t.updateValue(s,w),s--,d--;continue}let U=e(a,u),Q=e(s,v),Re=e(a,f);if(Object.is(Re,Q)){let Nt=e(d,w);Object.is(Nt,U)?(t.swap(a,s),t.updateValue(s,w),d--,s--):t.move(s,a),t.updateValue(a,f),a++;continue}if(r??=new Vu,o??=sC(t,a,s,e),qg(t,r,a,Re))t.updateValue(a,f),a++,s++;else if(o.has(Re))r.set(U,t.detach(a)),s--;else{let Nt=t.create(a,i[a]);t.attach(a,Nt),a++,s++}}for(;a<=d;)aC(t,r,e,a,i[a]),a++}else if(i!=null){ee(n);let d=i[Symbol.iterator]();ee(null);let u=d.next();for(;!u.done&&a<=s;){let f=t.at(a),_=u.value,v=pg(a,f,a,_,e);if(v!==0)v<0&&t.updateValue(a,_),a++,u=d.next();else{r??=new Vu,o??=sC(t,a,s,e);let w=e(a,_);if(qg(t,r,a,w))t.updateValue(a,_),a++,s++,u=d.next();else if(!o.has(w))t.attach(a,t.create(a,_)),a++,s++,u=d.next();else{let F=e(a,f);r.set(F,t.detach(a)),s--}}}for(;!u.done;)aC(t,r,e,t.length,u.value),u=d.next()}for(;a<=s;)t.destroy(t.detach(s--));r?.forEach(d=>{t.destroy(d)})}function qg(t,i,e,n){return i!==void 0&&i.has(n)?(t.attach(e,i.get(n)),i.delete(n),!0):!1}function aC(t,i,e,n,r){if(qg(t,i,n,e(n,r)))t.updateValue(n,r);else{let o=t.create(n,r);t.attach(n,o)}}function sC(t,i,e,n){let r=new Set;for(let o=i;o<=e;o++)r.add(n(o,t.at(o)));return r}var Vu=class{kvMap=new Map;_vMap=void 0;has(i){return this.kvMap.has(i)}delete(i){if(!this.has(i))return!1;let e=this.kvMap.get(i);return this._vMap!==void 0&&this._vMap.has(e)?(this.kvMap.set(i,this._vMap.get(e)),this._vMap.delete(e)):this.kvMap.delete(i),!0}get(i){return this.kvMap.get(i)}set(i,e){if(this.kvMap.has(i)){let n=this.kvMap.get(i);this._vMap===void 0&&(this._vMap=new Map);let r=this._vMap;for(;r.has(n);)n=r.get(n);r.set(n,e)}else this.kvMap.set(i,e)}forEach(i){for(let[e,n]of this.kvMap)if(i(n,e),this._vMap!==void 0){let r=this._vMap;for(;r.has(n);)n=r.get(n),i(n,e)}}};function j(t,i,e,n,r,o,a,s){li("NgControlFlow");let l=ie(),d=We(),u=xn(d.consts,o);return ja(l,d,t,i,e,n,r,u,256,a,s),F_}function F_(t,i,e,n,r,o,a,s){li("NgControlFlow");let l=ie(),d=We(),u=xn(d.consts,o);return ja(l,d,t,i,e,n,r,u,512,a,s),F_}function H(t,i){li("NgControlFlow");let e=ie(),n=ki(),r=e[n]!==zt?e[n]:-1,o=r!==-1?Bu(e,tt+r):void 0,a=0;if(ln(e,n,t)){let s=ee(null);try{if(o!==void 0&&Vw(o,a),t!==-1){let l=tt+t,d=Bu(e,l),u=Kg(e[re],l),f=jw(d,u,e),_=Nl(e,u,i,{dehydratedView:f});Pl(d,_,a,Ba(u,f))}}finally{ee(s)}}else if(o!==void 0){let s=Lw(o,a);s!==void 0&&(s[dt]=i)}}var Yg=class{lContainer;$implicit;$index;constructor(i,e,n){this.lContainer=i,this.$implicit=e,this.$index=n}get $count(){return this.lContainer.length-ot}};function zr(t,i){return i}var Qg=class{hasEmptyBlock;trackByFn;liveCollection;constructor(i,e,n){this.hasEmptyBlock=i,this.trackByFn=e,this.liveCollection=n}};function De(t,i,e,n,r,o,a,s,l,d,u,f,_){li("NgControlFlow");let v=ie(),w=We(),F=l!==void 0,U=ie(),Q=s?a.bind(U[tn][dt]):a,Re=new Qg(F,Q);U[tt+t]=Re,ja(v,w,t+1,i,e,n,r,xn(w.consts,o),256),F&&ja(v,w,t+2,l,d,u,f,xn(w.consts,_),512)}var Zg=class extends Gg{lContainer;hostLView;templateTNode;operationsCounter=void 0;needsIndexUpdate=!1;constructor(i,e,n){super(),this.lContainer=i,this.hostLView=e,this.templateTNode=n}get length(){return this.lContainer.length-ot}at(i){return this.getLView(i)[dt].$implicit}attach(i,e){let n=e[Mo];this.needsIndexUpdate||=i!==this.length,Pl(this.lContainer,e,i,Ba(this.templateTNode,n)),oO(this.lContainer,i)}detach(i){return this.needsIndexUpdate||=i!==this.length-1,aO(this.lContainer,i),sO(this.lContainer,i)}create(i,e){let n=Au(this.lContainer,this.templateTNode.tView.ssrId);return Nl(this.hostLView,this.templateTNode,new Yg(this.lContainer,e,i),{dehydratedView:n})}destroy(i){Xu(i[re],i)}updateValue(i,e){this.getLView(i)[dt].$implicit=e}reset(){this.needsIndexUpdate=!1}updateIndexes(){if(this.needsIndexUpdate)for(let i=0;i<this.length;i++)this.getLView(i)[dt].$index=i}getLView(i){return lO(this.lContainer,i)}};function xe(t){let i=ee(null),e=Ai();try{let n=ie(),r=n[re],o=n[e],a=e+1,s=Bu(n,a);if(o.liveCollection===void 0){let d=Kg(r,a);o.liveCollection=new Zg(s,n,d)}else o.liveCollection.reset();let l=o.liveCollection;if(rO(l,t,o.trackByFn,i),l.updateIndexes(),o.hasEmptyBlock){let d=ki(),u=l.length===0;if(ln(n,d,u)){let f=e+2,_=Bu(n,f);if(u){let v=Kg(r,f),w=jw(_,v,n),F=Nl(n,v,void 0,{dehydratedView:w});Pl(_,F,0,Ba(v,w))}else r.firstUpdatePass&&nR(_),Vw(_,0)}}}finally{ee(i)}}function Bu(t,i){return t[i]}function oO(t,i){if(t.length<=ot)return;let e=ot+i,n=t[e],r=n?n[nr]:void 0;if(n&&r&&r.detachedLeaveAnimationFns&&r.detachedLeaveAnimationFns.length>0){let o=n[Cn];uA(o,r),Fo.delete(n[tr]),r.detachedLeaveAnimationFns=void 0}}function aO(t,i){if(t.length<=ot)return;let e=ot+i,n=t[e],r=n?n[nr]:void 0;r&&r.leave&&r.leave.size>0&&(r.detachedLeaveAnimationFns=[])}function sO(t,i){return Il(t,i)}function lO(t,i){return Lw(t,i)}function Kg(t,i){return tu(t,i)}function A(t,i,e){let n=ie(),r=ki();if(ln(n,r,i)){let o=We(),a=ka();yw(a,n,t,i,n[He],e)}return A}function Xg(t,i,e,n,r){tm(i,t,e,r?"class":"style",n)}function m(t,i,e,n){let r=ie(),o=r[re],a=t+tt,s=o.firstCreatePass?Ww(a,r,2,i,Dw,Yp(),e,n):o.data[a];if(Ii(s)){let l=r[Mi].tracingService;if(l&&l.componentCreate){let d=o.data[s.directiveStart+s.componentOffset];return l.componentCreate(Zw(d),()=>(lC(t,i,r,s,n),m))}}return lC(t,i,r,s,n),m}function lC(t,i,e,n,r){if(Ew(n,e,t,i,mD),_l(n)){let o=e[re];w_(o,e,n),zC(o,n,e)}r!=null&&em(e,n)}function h(){let t=We(),i=Mt(),e=Mw(i);return t.firstCreatePass&&Gw(t,e),Zp(e)&&Kp(),qp(),e.classesWithoutHost!=null&&WT(e)&&Xg(t,e,ie(),e.classesWithoutHost,!0),e.stylesWithoutHost!=null&&GT(e)&&Xg(t,e,ie(),e.stylesWithoutHost,!1),h}function T(t,i,e,n){return m(t,i,e,n),h(),T}function Ce(t,i,e,n){let r=ie(),o=r[re],a=t+tt,s=o.firstCreatePass?gR(a,o,2,i,e,n):o.data[a];return Ew(s,r,t,i,mD),n!=null&&em(r,s),Ce}function Me(){let t=Mt(),i=Mw(t);return Zp(i)&&Kp(),qp(),Me}function Qt(t,i,e,n){return Ce(t,i,e,n),Me(),Qt}var mD=(t,i,e,n,r)=>(uu(!0),ZC(i[He],n,M0()));function Ae(){return ie()}function Tt(t,i,e){let n=ie(),r=ki();if(ln(n,r,i)){let o=We(),a=ka();Cw(a,n,t,i,n[He],e)}return Tt}var jl="en-US";var cO=jl;function fD(t){typeof t=="string"&&(cO=t.toLowerCase().replace(/_/g,"-"))}function M(t,i,e){let n=ie(),r=We(),o=Mt();return hD(r,n,n[He],o,t,i,e),M}function Vn(t,i,e){let n=ie(),r=We(),o=Mt();return(o.type&3||e)&&Yw(o,r,n,e,n[He],t,i,Cu(o,n,i)),Vn}function hD(t,i,e,n,r,o,a){let s=!0,l=null;if((n.type&3||a)&&(l??=Cu(n,i,o),Yw(n,t,i,a,e,r,o,l)&&(s=!1)),s){let d=n.outputs?.[r],u=n.hostDirectiveOutputs?.[r];if(u&&u.length)for(let f=0;f<u.length;f+=2){let _=u[f],v=u[f+1];l??=Cu(n,i,o),nC(n,i,_,v,r,l)}if(d&&d.length)for(let f of d)l??=Cu(n,i,o),nC(n,i,f,r,r,l)}}function x(t=1){return E0(t)}function dO(t,i){let e=null,n=jk(t);for(let r=0;r<i.length;r++){let o=i[r];if(o==="*"){e=r;continue}if(n===null?nw(t,o,!0):zk(n,o))return r}return e}function Se(t){let i=ie()[tn][en];if(!i.projection){let e=t?t.length:1,n=i.projection=Ky(e,null),r=n.slice(),o=i.child;for(;o!==null;){if(o.type!==128){let a=t?dO(o,t):0;a!==null&&(r[a]?r[a].projectionNext=o:n[a]=o,r[a]=o)}o=o.next}}}function te(t,i=0,e,n,r,o){let a=ie(),s=We(),l=n?t+1:null;l!==null&&ja(a,s,l,n,r,o,null,e);let d=Wa(s,tt+t,16,null,e||null);d.projection===null&&(d.projection=i),eg();let f=!a[Mo]||Qp();a[tn][en].projection[d.projection]===null&&l!==null?uO(a,s,l):f&&!Wu(d)&&DA(s,a,d)}function uO(t,i,e){let n=tt+e,r=i.data[n],o=t[n],a=Au(o,r.tView.ssrId),s=Nl(t,r,void 0,{dehydratedView:a});Pl(o,s,0,Ba(r,a))}function bt(t,i,e,n){return nD(t,i,e,n),bt}function we(t,i,e){return tD(t,i,e),we}function R(t){let i=ie(),e=We(),n=su();bl(n+1);let r=S_(e,n);if(t.dirty&&s0(i)===((r.metadata.flags&2)===2)){if(r.matches===null)t.reset([]);else{let o=rD(i,n);t.reset(o,AC),t.notifyOnChanges()}return!0}return!1}function O(){return M_(ie(),su())}function cm(t,i,e,n,r){return aD(i,nD(t,e,n,r)),cm}function Bn(t,i,e,n){return aD(t,tD(i,e,n)),Bn}function jn(t=1){bl(su()+t)}function cn(t){let i=p0();return jp(i,tt+t)}function gu(t,i){return t<<17|i<<2}function Lo(t){return t>>17&32767}function mO(t){return(t&2)==2}function fO(t,i){return t&131071|i<<17}function Jg(t){return t|2}function Ha(t){return(t&131068)>>2}function gg(t,i){return t&-131069|i<<2}function hO(t){return(t&1)===1}function e_(t){return t|1}function pO(t,i,e,n,r,o){let a=o?i.classBindings:i.styleBindings,s=Lo(a),l=Ha(a);t[n]=e;let d=!1,u;if(Array.isArray(e)){let f=e;u=f[1],(u===null||xa(f,u)>0)&&(d=!0)}else u=e;if(r)if(l!==0){let _=Lo(t[s+1]);t[n+1]=gu(_,s),_!==0&&(t[_+1]=gg(t[_+1],n)),t[s+1]=fO(t[s+1],n)}else t[n+1]=gu(s,0),s!==0&&(t[s+1]=gg(t[s+1],n)),s=n;else t[n+1]=gu(l,0),s===0?s=n:t[l+1]=gg(t[l+1],n),l=n;d&&(t[n+1]=Jg(t[n+1])),cC(t,u,n,!0),cC(t,u,n,!1),gO(i,u,t,n,o),a=gu(s,l),o?i.classBindings=a:i.styleBindings=a}function gO(t,i,e,n,r){let o=r?t.residualClasses:t.residualStyles;o!=null&&typeof i=="string"&&xa(o,i)>=0&&(e[n+1]=e_(e[n+1]))}function cC(t,i,e,n){let r=t[e+1],o=i===null,a=n?Lo(r):Ha(r),s=!1;for(;a!==0&&(s===!1||o);){let l=t[a],d=t[a+1];_O(l,i)&&(s=!0,t[a+1]=n?e_(d):Jg(d)),a=n?Lo(d):Ha(d)}s&&(t[e+1]=n?Jg(r):e_(r))}function _O(t,i){return t===null||i==null||(Array.isArray(t)?t[1]:t)===i?!0:Array.isArray(t)&&typeof i=="string"?xa(t,i)>=0:!1}var St={textEnd:0,key:0,keyEnd:0,value:0,valueEnd:0};function pD(t){return t.substring(St.key,St.keyEnd)}function vO(t){return t.substring(St.value,St.valueEnd)}function bO(t){return vD(t),gD(t,Ua(t,0,St.textEnd))}function gD(t,i){let e=St.textEnd;return e===i?-1:(i=St.keyEnd=CO(t,St.key=i,e),Ua(t,i,e))}function yO(t){return vD(t),_D(t,Ua(t,0,St.textEnd))}function _D(t,i){let e=St.textEnd,n=St.key=Ua(t,i,e);return e===n?-1:(n=St.keyEnd=wO(t,n,e),n=dC(t,n,e,58),n=St.value=Ua(t,n,e),n=St.valueEnd=DO(t,n,e),dC(t,n,e,59))}function vD(t){St.key=0,St.keyEnd=0,St.value=0,St.valueEnd=0,St.textEnd=t.length}function Ua(t,i,e){for(;i<e&&t.charCodeAt(i)<=32;)i++;return i}function CO(t,i,e){for(;i<e&&t.charCodeAt(i)>32;)i++;return i}function wO(t,i,e){let n;for(;i<e&&((n=t.charCodeAt(i))===45||n===95||(n&-33)>=65&&(n&-33)<=90||n>=48&&n<=57);)i++;return i}function dC(t,i,e,n){return i=Ua(t,i,e),i<e&&i++,i}function DO(t,i,e){let n=-1,r=-1,o=-1,a=i,s=a;for(;a<e;){let l=t.charCodeAt(a++);if(l===59)return s;l===34||l===39?s=a=uC(t,l,a,e):i===a-4&&o===85&&r===82&&n===76&&l===40?s=a=uC(t,41,a,e):l>32&&(s=a),o=r,r=n,n=l&-33}return s}function uC(t,i,e,n){let r=-1,o=e;for(;o<n;){let a=t.charCodeAt(o++);if(a==i&&r!==92)return o;a==92&&r===92?r=0:r=a}throw new Error}function ci(t,i,e){return bD(t,i,e,!1),ci}function P(t,i){return bD(t,i,null,!0),P}function di(t){yD(DD,xO,t,!1)}function xO(t,i){for(let e=yO(i);e>=0;e=_D(i,e))DD(t,pD(i),vO(i))}function kt(t){yD(AO,EO,t,!0)}function EO(t,i){for(let e=bO(i);e>=0;e=gD(i,e))hl(t,pD(i),!0)}function bD(t,i,e,n){let r=ie(),o=We(),a=ou(2);if(o.firstUpdatePass&&wD(o,t,a,n),i!==zt&&ln(r,a,i)){let s=o.data[Ai()];xD(o,s,r,r[He],t,r[a+1]=OO(i,e),n,a)}}function yD(t,i,e,n){let r=We(),o=ou(2);r.firstUpdatePass&&wD(r,null,o,n);let a=ie();if(e!==zt&&ln(a,o,e)){let s=r.data[Ai()];if(ED(s,n)&&!CD(r,o)){let l=n?s.classesWithoutHost:s.stylesWithoutHost;l!==null&&(e=Yd(l,e||"")),Xg(r,s,a,e,n)}else RO(r,s,a,a[He],a[o+1],a[o+1]=kO(t,i,e),n,o)}}function CD(t,i){return i>=t.expandoStartIndex}function wD(t,i,e,n){let r=t.data;if(r[e+1]===null){let o=r[Ai()],a=CD(t,e);ED(o,n)&&i===null&&!a&&(i=!1),i=MO(r,o,i,n),pO(r,o,i,e,a,n)}}function MO(t,i,e,n){let r=C0(t),o=n?i.residualClasses:i.residualStyles;if(r===null)(n?i.classBindings:i.styleBindings)===0&&(e=_g(null,t,i,e,n),e=kl(e,i.attrs,n),o=null);else{let a=i.directiveStylingLast;if(a===-1||t[a]!==r)if(e=_g(r,t,i,e,n),o===null){let l=SO(t,i,n);l!==void 0&&Array.isArray(l)&&(l=_g(null,t,i,l[1],n),l=kl(l,i.attrs,n),IO(t,i,n,l))}else o=TO(t,i,n)}return o!==void 0&&(n?i.residualClasses=o:i.residualStyles=o),e}function SO(t,i,e){let n=e?i.classBindings:i.styleBindings;if(Ha(n)!==0)return t[Lo(n)]}function IO(t,i,e,n){let r=e?i.classBindings:i.styleBindings;t[Lo(r)]=n}function TO(t,i,e){let n,r=i.directiveEnd;for(let o=1+i.directiveStylingLast;o<r;o++){let a=t[o].hostAttrs;n=kl(n,a,e)}return kl(n,i.attrs,e)}function _g(t,i,e,n,r){let o=null,a=e.directiveEnd,s=e.directiveStylingLast;for(s===-1?s=e.directiveStart:s++;s<a&&(o=i[s],n=kl(n,o.hostAttrs,r),o!==t);)s++;return t!==null&&(e.directiveStylingLast=s),n}function kl(t,i,e){let n=e?1:2,r=-1;if(i!==null)for(let o=0;o<i.length;o++){let a=i[o];typeof a=="number"?r=a:r===n&&(Array.isArray(t)||(t=t===void 0?[]:["",t]),hl(t,a,e?!0:i[++o]))}return t===void 0?null:t}function kO(t,i,e){if(e==null||e==="")return qt;let n=[],r=ai(e);if(Array.isArray(r))for(let o=0;o<r.length;o++)t(n,r[o],!0);else if(r instanceof Set)for(let o of r)t(n,o,!0);else if(typeof r=="object")for(let o in r)r.hasOwnProperty(o)&&t(n,o,r[o]);else typeof r=="string"&&i(n,r);return n}function DD(t,i,e){hl(t,i,ai(e))}function AO(t,i,e){let n=String(i);n!==""&&!n.includes(" ")&&hl(t,n,e)}function RO(t,i,e,n,r,o,a,s){r===zt&&(r=qt);let l=0,d=0,u=0<r.length?r[0]:null,f=0<o.length?o[0]:null;for(;u!==null||f!==null;){let _=l<r.length?r[l+1]:void 0,v=d<o.length?o[d+1]:void 0,w=null,F;u===f?(l+=2,d+=2,_!==v&&(w=f,F=v)):f===null||u!==null&&u<f?(l+=2,w=u):(d+=2,w=f,F=v),w!==null&&xD(t,i,e,n,w,F,a,s),u=l<r.length?r[l]:null,f=d<o.length?o[d]:null}}function xD(t,i,e,n,r,o,a,s){if(!(i.type&3))return;let l=t.data,d=l[s+1],u=hO(d)?mC(l,i,e,r,Ha(d),a):void 0;if(!ju(u)){ju(o)||mO(d)&&(o=mC(l,null,e,r,s,a));let f=Bp(Ai(),e);EA(n,a,f,r,o)}}function mC(t,i,e,n,r,o){let a=i===null,s;for(;r>0;){let l=t[r],d=Array.isArray(l),u=d?l[1]:l,f=u===null,_=e[r+1];_===zt&&(_=f?qt:void 0);let v=f?Jd(_,n):u===n?_:void 0;if(d&&!ju(v)&&(v=Jd(l,n)),ju(v)&&(s=v,a))return s;let w=t[r+1];r=a?Lo(w):Ha(w)}if(i!==null){let l=o?i.residualClasses:i.residualStyles;l!=null&&(s=Jd(l,n))}return s}function ju(t){return t!==void 0}function OO(t,i){return t==null||t===""||(typeof i=="string"?t=t+i:typeof t=="object"&&(t=ul(ai(t)))),t}function ED(t,i){return(t.flags&(i?8:16))!==0}function g(t,i=""){let e=ie(),n=We(),r=t+tt,o=n.firstCreatePass?Wa(n,r,1,i,null):n.data[r],a=NO(n,e,o,i);e[r]=a,du()&&y_(n,e,a,o),Ta(o,!1)}var NO=(t,i,e,n)=>(uu(!0),Ak(i[He],n));function MD(t,i,e,n=""){return ln(t,ki(),e)?i+Da(e)+n:zt}function PO(t,i,e,n,r,o=""){let a=g0(),s=_R(t,a,e,r);return ou(2),s?i+Da(e)+n+Da(r)+o:zt}function oe(t){return de("",t),oe}function de(t,i,e){let n=ie(),r=MD(n,t,i,e);return r!==zt&&SD(n,Ai(),r),de}function cr(t,i,e,n,r){let o=ie(),a=PO(o,t,i,e,n,r);return a!==zt&&SD(o,Ai(),a),cr}function SD(t,i,e){let n=Bp(i,t);Rk(t[He],n,e)}function Ke(t,i,e){R_(i)&&(i=i());let n=ie(),r=ki();if(ln(n,r,i)){let o=We(),a=ka();yw(a,n,t,i,n[He],e)}return Ke}function ke(t,i){let e=R_(t);return e&&t.set(i),e}function Xe(t,i){let e=ie(),n=We(),r=Mt();return hD(n,e,e[He],r,t,i),Xe}function dr(t){return ln(ie(),ki(),t)?Da(t):zt}function Hn(t,i,e=""){return MD(ie(),t,i,e)}function L_(t,i,e){let n=ru()+t,r=ie();return r[n]===zt?E_(r,n,i(e,r)):qw(r,n)}function fC(t,i,e){let n=We();n.firstCreatePass&&ID(i,n.data,n.blueprint,Ti(t),e)}function ID(t,i,e,n,r){if(t=jt(t),Array.isArray(t))for(let o=0;o<t.length;o++)ID(t[o],i,e,n,r);else{let o=We(),a=ie(),s=Mt(),l=Do(t)?t:jt(t.provide),d=Op(t),u=s.providerIndexes&1048575,f=s.directiveStart,_=s.providerIndexes>>20;if(Do(t)||!t.multi){let v=new Po(d,r,Ee,null),w=bg(l,i,r?u:u+_,f);w===-1?(Cg(Mu(s,a),o,l),vg(o,t,i.length),i.push(l),s.directiveStart++,s.directiveEnd++,r&&(s.providerIndexes+=1048576),e.push(v),a.push(v)):(e[w]=v,a[w]=v)}else{let v=bg(l,i,u+_,f),w=bg(l,i,u,u+_),F=v>=0&&e[v],U=w>=0&&e[w];if(r&&!U||!r&&!F){Cg(Mu(s,a),o,l);let Q=VO(r?LO:FO,e.length,r,n,d,t);!r&&U&&(e[w].providerFactory=Q),vg(o,t,i.length,0),i.push(l),s.directiveStart++,s.directiveEnd++,r&&(s.providerIndexes+=1048576),e.push(Q),a.push(Q)}else{let Q=TD(e[r?w:v],d,!r&&n);vg(o,t,v>-1?v:w,Q)}!r&&n&&U&&e[w].componentProviders++}}}function vg(t,i,e,n){let r=Do(i),o=i0(i);if(r||o){let l=(o?jt(i.useClass):i).prototype.ngOnDestroy;if(l){let d=t.destroyHooks||(t.destroyHooks=[]);if(!r&&i.multi){let u=d.indexOf(e);u===-1?d.push(e,[n,l]):d[u+1].push(n,l)}else d.push(e,l)}}}function TD(t,i,e){return e&&t.componentProviders++,t.multi.push(i)-1}function bg(t,i,e,n){for(let r=e;r<n;r++)if(i[r]===t)return r;return-1}function FO(t,i,e,n,r){return t_(this.multi,[])}function LO(t,i,e,n,r){let o=this.multi,a;if(this.providerFactory){let s=this.providerFactory.componentProviders,l=xl(n,n[re],this.providerFactory.index,r);a=l.slice(0,s),t_(o,a);for(let d=s;d<l.length;d++)a.push(l[d])}else a=[],t_(o,a);return a}function t_(t,i){for(let e=0;e<t.length;e++){let n=t[e];i.push(n())}return i}function VO(t,i,e,n,r,o){let a=new Po(t,e,Ee,null);return a.multi=[],a.index=i,a.componentProviders=0,TD(a,r,n&&!e),a}function Ue(t,i){return e=>{e.providersResolver=(n,r)=>fC(n,r?r(t):t,!1),i&&(e.viewProvidersResolver=(n,r)=>fC(n,r?r(i):i,!0))}}function Hl(t,i){let e=ru()+t,n=ie();return n[e]===zt?E_(n,e,i()):qw(n,e)}function BO(t,i){let e=t[i];return e===zt?void 0:e}function jO(t,i,e,n,r,o){let a=i+e;return ln(t,a,r)?E_(t,a+1,o?n.call(o,r):n(r)):BO(t,a+1)}function Ul(t,i){let e=We(),n,r=t+tt;e.firstCreatePass?(n=HO(i,e.pipeRegistry),e.data[r]=n,n.onDestroy&&(e.destroyHooks??=[]).push(r,n.onDestroy)):n=e.data[r];let o=n.factory||(n.factory=Rr(n.type,!0)),a,s=Jt(Ee);try{let l=Eu(!1),d=o();return Eu(l),Hp(e,ie(),r,d),d}finally{Jt(s)}}function HO(t,i){if(i)for(let e=i.length-1;e>=0;e--){let n=i[e];if(t===n.name)return n}}function zl(t,i,e){let n=t+tt,r=ie(),o=jp(r,n);return UO(r,n)?jO(r,ru(),i,o.transform,e,o):o.transform(e)}function UO(t,i){return t[re].data[i].pure}function dm(t,i){return nm(t,i)}var Hu=class{ngModuleFactory;componentFactories;constructor(i,e){this.ngModuleFactory=i,this.componentFactories=e}},V_=(()=>{class t{compileModuleSync(e){return new Lu(e)}compileModuleAsync(e){return Promise.resolve(this.compileModuleSync(e))}compileModuleAndAllComponentsSync(e){let n=this.compileModuleSync(e),r=xp(e),o=ew(r.declarations).reduce((a,s)=>{let l=xi(s);return l&&a.push(new Hr(l)),a},[]);return new Hu(n,o)}compileModuleAndAllComponentsAsync(e){return Promise.resolve(this.compileModuleAndAllComponentsSync(e))}clearCache(){}clearCacheFor(e){}getModuleId(e){}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var kD=(()=>{class t{applicationErrorHandler=c(En);appRef=c(Mn);taskService=c(rr);ngZone=c(V);zonelessEnabled=c(yl);tracing=c(si,{optional:!0});zoneIsDefined=typeof Zone<"u"&&!!Zone.root.run;schedulerTickApplyArgs=[{data:{__scheduler_tick__:!0}}];subscriptions=new ae;angularZoneId=this.zoneIsDefined?this.ngZone._inner?.get(cl):null;scheduleInRootZone=!this.zonelessEnabled&&this.zoneIsDefined&&(c(cg,{optional:!0})??!1);cancelScheduledCallback=null;useMicrotaskScheduler=!1;runningTick=!1;pendingRenderTaskId=null;constructor(){this.subscriptions.add(this.appRef.afterTick.subscribe(()=>{let e=this.taskService.add();if(!this.runningTick&&(this.cleanup(),!this.zonelessEnabled||this.appRef.includeAllTestViews)){this.taskService.remove(e);return}this.switchToMicrotaskScheduler(),this.taskService.remove(e)})),this.subscriptions.add(this.ngZone.onUnstable.subscribe(()=>{this.runningTick||this.cleanup()}))}switchToMicrotaskScheduler(){this.ngZone.runOutsideAngular(()=>{let e=this.taskService.add();this.useMicrotaskScheduler=!0,queueMicrotask(()=>{this.useMicrotaskScheduler=!1,this.taskService.remove(e)})})}notify(e){if(!this.zonelessEnabled&&e===5)return;switch(e){case 0:{this.appRef.dirtyFlags|=2;break}case 3:case 2:case 4:case 5:case 1:{this.appRef.dirtyFlags|=4;break}case 6:{this.appRef.dirtyFlags|=2;break}case 12:{this.appRef.dirtyFlags|=16;break}case 13:{this.appRef.dirtyFlags|=2;break}case 11:break;default:this.appRef.dirtyFlags|=8}if(this.appRef.tracingSnapshot=this.tracing?.snapshot(this.appRef.tracingSnapshot)??null,!this.shouldScheduleTick())return;let n=this.useMicrotaskScheduler?k0:og;this.pendingRenderTaskId=this.taskService.add(),this.scheduleInRootZone?this.cancelScheduledCallback=Zone.root.run(()=>n(()=>this.tick())):this.cancelScheduledCallback=this.ngZone.runOutsideAngular(()=>n(()=>this.tick()))}shouldScheduleTick(){return!(this.appRef.destroyed||this.pendingRenderTaskId!==null||this.runningTick||this.appRef._runningTick||!this.zonelessEnabled&&this.zoneIsDefined&&Zone.current.get(cl+this.angularZoneId))}tick(){if(this.runningTick||this.appRef.destroyed)return;if(this.appRef.dirtyFlags===0){this.cleanup();return}!this.zonelessEnabled&&this.appRef.dirtyFlags&7&&(this.appRef.dirtyFlags|=1);let e=this.taskService.add();try{this.ngZone.run(()=>{this.runningTick=!0,this.appRef._tick()},void 0,this.schedulerTickApplyArgs)}catch(n){this.applicationErrorHandler(n)}finally{this.taskService.remove(e),this.cleanup()}}ngOnDestroy(){this.subscriptions.unsubscribe(),this.cleanup()}cleanup(){if(this.runningTick=!1,this.cancelScheduledCallback?.(),this.cancelScheduledCallback=null,this.pendingRenderTaskId!==null){let e=this.pendingRenderTaskId;this.pendingRenderTaskId=null,this.taskService.remove(e)}}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function AD(){return[{provide:Di,useExisting:kD},{provide:V,useClass:dl},{provide:yl,useValue:!0}]}function zO(){return typeof $localize<"u"&&$localize.locale||jl}var qa=new y("",{factory:()=>c(qa,{optional:!0,skipSelf:!0})||zO()});var um=class{destroyed=!1;listeners=null;errorHandler=c(Yt,{optional:!0});destroyRef=c(Ht);constructor(){this.destroyRef.onDestroy(()=>{this.destroyed=!0,this.listeners=null})}subscribe(i){if(this.destroyed)throw new L(953,!1);return(this.listeners??=[]).push(i),{unsubscribe:()=>{let e=this.listeners?.indexOf(i);e!==void 0&&e!==-1&&this.listeners?.splice(e,1)}}}emit(i){if(this.destroyed){console.warn(Nn(953,!1));return}if(this.listeners===null)return;let e=ee(null);try{for(let n of this.listeners)try{n(i)}catch(r){this.errorHandler?.handleError(r)}}finally{ee(e)}}};function at(t){return By(t)}function mt(t,i){return Ys(t,i?.equal)}var hm=Symbol("InputSignalNode#UNSET"),VD=ne(C({},Qs),{transformFn:void 0,applyValueToInputSignal(t,i){fo(t,i)}});function BD(t,i){let e=Object.create(VD);e.value=t,e.transformFn=i?.transform;function n(){if(xr(e),e.value===hm){let r=null;throw new L(-950,r)}return e.value}return n[pt]=e,n}var ui=class{attributeName;constructor(i){this.attributeName=i}__NG_ELEMENT_ID__=()=>Uu(this.attributeName);toString(){return`HostAttributeToken ${this.attributeName}`}};function RD(t,i){return BD(t,i)}function s1(t){return BD(hm,t)}var Sn=(RD.required=s1,RD);function OD(t,i){return T_(i)}function l1(t,i){return k_(i)}var nn=(OD.required=l1,OD);function jD(t,i){return oD(i)}function ND(t,i){return T_(i)}function c1(t,i){return k_(i)}var HD=(ND.required=c1,ND);function UD(t,i){let e=Object.create(VD),n=new um;e.value=t;function r(){return xr(e),PD(e.value),e.value}return r[pt]=e,r.asReadonly=mu.bind(r),r.set=o=>{e.equal(e.value,o)||(fo(e,o),n.emit(o))},r.update=o=>{PD(e.value),r.set(o(e.value))},r.subscribe=n.subscribe.bind(n),r.destroyRef=n.destroyRef,r}function PD(t){if(t===hm)throw new L(952,!1)}function FD(t,i){return UD(t,i)}function d1(t){return UD(hm,t)}var Ne=(FD.required=d1,FD);var j_=new y(""),u1=new y("");function $l(t){return!t.moduleRef}function m1(t){let i=$l(t)?t.r3Injector:t.moduleRef.injector,e=i.get(V);return e.run(()=>{$l(t)?t.r3Injector.resolveInjectorInitializers():t.moduleRef.resolveInjectorInitializers();let n=i.get(En),r;if(e.runOutsideAngular(()=>{r=e.onError.subscribe({next:n})}),$l(t)){let o=()=>i.destroy(),a=t.platformInjector.get(j_);a.add(o),i.onDestroy(()=>{r.unsubscribe(),a.delete(o)})}else{let o=()=>t.moduleRef.destroy(),a=t.platformInjector.get(j_);a.add(o),t.moduleRef.onDestroy(()=>{Dl(t.allPlatformModules,t.moduleRef),r.unsubscribe(),a.delete(o)})}return h1(n,e,()=>{let o=i.get(rr),a=o.add(),s=i.get(P_);return s.runInitializers(),s.donePromise.then(()=>{let l=i.get(qa,jl);if(fD(l||jl),!i.get(u1,!0))return $l(t)?i.get(Mn):(t.allPlatformModules.push(t.moduleRef),t.moduleRef);if($l(t)){let u=i.get(Mn);return t.rootComponent!==void 0&&u.bootstrap(t.rootComponent),u}else return f1?.(t.moduleRef,t.allPlatformModules),t.moduleRef}).finally(()=>{o.remove(a)})})})}var f1;function h1(t,i,e){try{let n=e();return lr(n)?n.catch(r=>{throw i.runOutsideAngular(()=>t(r)),r}):n}catch(n){throw i.runOutsideAngular(()=>t(n)),n}}var mm=null;function p1(t=[],i){return G.create({name:i,providers:[{provide:pl,useValue:"platform"},{provide:j_,useValue:new Set([()=>mm=null])},...t]})}function g1(t=[]){if(mm)return mm;let i=p1(t);return mm=i,dD(),_1(i),i}function _1(t){let i=t.get(zu,null);Et(t,()=>{i?.forEach(e=>e())})}var v1=1e4;var T9=v1-1e3;var Ie=(()=>{class t{static __NG_ELEMENT_ID__=b1}return t})();function b1(t){return y1(Mt(),ie(),(t&16)===16)}function y1(t,i,e){if(Ii(t)&&!e){let n=Ln(t.index,i);return new jr(n,n)}else if(t.type&175){let n=i[tn];return new jr(n,i)}return null}function zD(t){let{rootComponent:i,appProviders:e,platformProviders:n,platformRef:r}=t;Ve(Te.BootstrapApplicationStart);try{let o=r?.injector??g1(n),a=[AD(),R0,...e||[]],s=new Tl({providers:a,parent:o,debugName:"",runEnvironmentInitializers:!1});return m1({r3Injector:s.injector,platformInjector:o,rootComponent:i})}catch(o){return Promise.reject(o)}finally{Ve(Te.BootstrapApplicationEnd)}}function Z(t){return typeof t=="boolean"?t:t!=null&&t!=="false"}function mi(t,i=NaN){return!isNaN(parseFloat(t))&&!isNaN(Number(t))?Number(t):i}var B_=Symbol("NOT_SET"),$D=new Set,C1=ne(C({},Qs),{kind:"afterRenderEffectPhase",consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!0,value:B_,cleanup:null,consumerMarkedDirty(){if(this.sequence.impl.executing){if(this.sequence.lastPhase===null||this.sequence.lastPhase<this.phase)return;this.sequence.erroredOrDestroyed=!0}this.sequence.scheduler.notify(7)},phaseFn(t){if(this.sequence.lastPhase=this.phase,!this.dirty)return this.signal;if(this.dirty=!1,this.value!==B_&&!ma(this))return this.signal;try{for(let r of this.cleanup??$D)r()}finally{this.cleanup?.clear()}let i=[];t!==void 0&&i.push(t),i.push(this.registerCleanupFn);let e=Er(this),n;try{n=this.userFn.apply(null,i)}finally{mo(this,e)}return(this.value===B_||!this.equal(this.value,n))&&(this.value=n,this.version++),this.signal}}),H_=class extends Ml{scheduler;lastPhase=null;nodes=[void 0,void 0,void 0,void 0];onDestroyFns=null;constructor(i,e,n,r,o,a=null){super(i,[void 0,void 0,void 0,void 0],n,!1,o.get(Ht),a),this.scheduler=r;for(let s of __){let l=e[s];if(l===void 0)continue;let d=Object.create(C1);d.sequence=this,d.phase=s,d.userFn=l,d.dirty=!0,d.signal=()=>(xr(d),d.value),d.signal[pt]=d,d.registerCleanupFn=u=>(d.cleanup??=new Set).add(u),this.nodes[s]=d,this.hooks[s]=u=>d.phaseFn(u)}}afterRun(){super.afterRun(),this.lastPhase=null}destroy(){if(this.onDestroyFns!==null)for(let i of this.onDestroyFns)i();super.destroy();for(let i of this.nodes)if(i)try{for(let e of i.cleanup??$D)e()}finally{Mr(i)}}};function WD(t,i){let e=i?.injector??c(G),n=e.get(Di),r=e.get(Zu),o=e.get(si,null,{optional:!0});r.impl??=e.get(v_);let a=t;typeof a=="function"&&(a={mixedReadWrite:t});let s=e.get(Ra,null,{optional:!0}),l=new H_(r.impl,[a.earlyRead,a.write,a.mixedReadWrite,a.read],s?.view,n,e,o?.snapshot(null));return r.impl.register(l),l}function pm(t,i){let e=xi(t),n=i.elementInjector||Ea();return new Hr(e).create(n,i.projectableNodes,i.hostElement,i.environmentInjector,i.directives,i.bindings)}function GD(t){let i=xi(t);if(!i)return null;let e=new Hr(i);return{get selector(){return e.selector},get type(){return e.componentType},get inputs(){return e.inputs},get outputs(){return e.outputs},get ngContentSelectors(){return e.ngContentSelectors},get isStandalone(){return i.standalone},get isSignal(){return i.signals}}}var qD=null;function Un(){return qD}function U_(t){qD??=t}var Wl=class{},ur=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:()=>c(YD),providedIn:"platform"})}return t})(),z_=new y(""),YD=(()=>{class t extends ur{_location;_history;_doc=c(Y);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return Un().getBaseHref(this._doc)}onPopState(e){let n=Un().getGlobalEventTarget(this._doc,"window");return n.addEventListener("popstate",e,!1),()=>n.removeEventListener("popstate",e)}onHashChange(e){let n=Un().getGlobalEventTarget(this._doc,"window");return n.addEventListener("hashchange",e,!1),()=>n.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,n,r){this._history.pushState(e,n,r)}replaceState(e,n,r){this._history.replaceState(e,n,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:()=>new t,providedIn:"platform"})}return t})();function gm(t,i){return t?i?t.endsWith("/")?i.startsWith("/")?t+i.slice(1):t+i:i.startsWith("/")?t+i:`${t}/${i}`:t:i}function QD(t){let i=t.search(/#|\?|$/);return t[i-1]==="/"?t.slice(0,i-1)+t.slice(i):t}function fi(t){return t&&t[0]!=="?"?`?${t}`:t}var mr=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:()=>c(vm),providedIn:"root"})}return t})(),_m=new y(""),vm=(()=>{class t extends mr{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,n){super(),this._platformLocation=e,this._baseHref=n??this._platformLocation.getBaseHrefFromDOM()??c(Y).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return gm(this._baseHref,e)}path(e=!1){let n=this._platformLocation.pathname+fi(this._platformLocation.search),r=this._platformLocation.hash;return r&&e?`${n}${r}`:n}pushState(e,n,r,o){let a=this.prepareExternalUrl(r+fi(o));this._platformLocation.pushState(e,n,a)}replaceState(e,n,r,o){let a=this.prepareExternalUrl(r+fi(o));this._platformLocation.replaceState(e,n,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(n){return new(n||t)(W(ur),W(_m,8))};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Li=(()=>{class t{_subject=new S;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let n=this._locationStrategy.getBaseHref();this._basePath=x1(QD(ZD(n))),this._locationStrategy.onPopState(r=>{this._subject.next({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,n=""){return this.path()==this.normalize(e+fi(n))}normalize(e){return t.stripTrailingSlash(D1(this._basePath,ZD(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,n="",r=null){this._locationStrategy.pushState(r,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+fi(n)),r)}replaceState(e,n="",r=null){this._locationStrategy.replaceState(r,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+fi(n)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(n=>{this._notifyUrlChangeListeners(n.url,n.state)}),()=>{let n=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(n,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",n){this._urlChangeListeners.forEach(r=>r(e,n))}subscribe(e,n,r){return this._subject.subscribe({next:e,error:n??void 0,complete:r??void 0})}static normalizeQueryParams=fi;static joinWithSlash=gm;static stripTrailingSlash=QD;static \u0275fac=function(n){return new(n||t)(W(mr))};static \u0275prov=b({token:t,factory:()=>w1(),providedIn:"root"})}return t})();function w1(){return new Li(W(mr))}function D1(t,i){if(!t||!i.startsWith(t))return i;let e=i.substring(t.length);return e===""||["/",";","?","#"].includes(e[0])?e:i}function ZD(t){return t.replace(/\/index.html$/,"")}function x1(t){if(new RegExp("^(https?:)?//").test(t)){let[,e]=t.split(/\/\/[^\/]+/);return e}return t}var G_=(()=>{class t extends mr{_platformLocation;_baseHref="";_removeListenerFns=[];constructor(e,n){super(),this._platformLocation=e,n!=null&&(this._baseHref=n)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}path(e=!1){let n=this._platformLocation.hash??"#";return n.length>0?n.substring(1):n}prepareExternalUrl(e){let n=gm(this._baseHref,e);return n.length>0?"#"+n:n}pushState(e,n,r,o){let a=this.prepareExternalUrl(r+fi(o))||this._platformLocation.pathname;this._platformLocation.pushState(e,n,a)}replaceState(e,n,r,o){let a=this.prepareExternalUrl(r+fi(o))||this._platformLocation.pathname;this._platformLocation.replaceState(e,n,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(n){return new(n||t)(W(ur),W(_m,8))};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})();var q_=(()=>{class t{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;injector=c(G);constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let n=this._viewContainerRef;if(this._viewRef&&n.remove(n.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let r=this._createContextForwardProxy();this._viewRef=n.createEmbeddedView(this.ngTemplateOutlet,r,{injector:this._getInjector()})}}_getInjector(){return this.ngTemplateOutletInjector==="outlet"?this.injector:this.ngTemplateOutletInjector??void 0}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,n,r)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,n,r):!1,get:(e,n,r)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,n,r)}})}static \u0275fac=function(n){return new(n||t)(Ee(It))};static \u0275dir=N({type:t,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[Be]})}return t})();function M1(t,i){return new L(2100,!1)}var $_=class{createSubscription(i,e,n){return at(()=>i.subscribe({next:e,error:n}))}dispose(i){at(()=>i.unsubscribe())}},W_=class{createSubscription(i,e,n){return i.then(r=>e?.(r),r=>n?.(r)),{unsubscribe:()=>{e=null,n=null}}}dispose(i){i.unsubscribe()}},S1=new W_,I1=new $_,Y_=(()=>{class t{_ref;_latestValue=null;markForCheckOnValueUpdate=!0;_subscription=null;_obj=null;_strategy=null;applicationErrorHandler=c(En);constructor(e){this._ref=e}ngOnDestroy(){this._subscription&&this._dispose(),this._ref=null}transform(e){if(!this._obj){if(e)try{this.markForCheckOnValueUpdate=!1,this._subscribe(e)}finally{this.markForCheckOnValueUpdate=!0}return this._latestValue}return e!==this._obj?(this._dispose(),this.transform(e)):this._latestValue}_subscribe(e){this._obj=e,this._strategy=this._selectStrategy(e),this._subscription=this._strategy.createSubscription(e,n=>this._updateLatestValue(e,n),n=>this.applicationErrorHandler(n))}_selectStrategy(e){if(lr(e))return S1;if(am(e))return I1;throw M1(t,e)}_dispose(){this._strategy.dispose(this._subscription),this._latestValue=null,this._subscription=null,this._obj=null}_updateLatestValue(e,n){e===this._obj&&(this._latestValue=n,this.markForCheckOnValueUpdate&&this._ref?.markForCheck())}static \u0275fac=function(n){return new(n||t)(Ee(Ie,16))};static \u0275pipe=A_({name:"async",type:t,pure:!1})}return t})();var $r=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=$({type:t});static \u0275inj=z({})}return t})();function Gl(t,i){i=encodeURIComponent(i);for(let e of t.split(";")){let n=e.indexOf("="),[r,o]=n==-1?[e,""]:[e.slice(0,n),e.slice(n+1)];if(r.trim()===i)return decodeURIComponent(o)}return null}var jo=class{};var Z_="browser";function KD(t){return t===Z_}var K_=(()=>{class t{static \u0275prov=b({token:t,providedIn:"root",factory:()=>new Q_(c(Y),window)})}return t})(),Q_=class{document;window;offset=()=>[0,0];constructor(i,e){this.document=i,this.window=e}setOffset(i){Array.isArray(i)?this.offset=()=>i:this.offset=i}getScrollPosition(){return[this.window.scrollX,this.window.scrollY]}scrollToPosition(i,e){this.window.scrollTo(ne(C({},e),{left:i[0],top:i[1]}))}scrollToAnchor(i,e){let n=k1(this.document,i);n&&(this.scrollToElement(n,e),n.focus())}setHistoryScrollRestoration(i){try{this.window.history.scrollRestoration=i}catch{console.warn(Nn(2400,!1))}}scrollToElement(i,e){let n=i.getBoundingClientRect(),r=n.left+this.window.pageXOffset,o=n.top+this.window.pageYOffset,a=this.offset();this.window.scrollTo(ne(C({},e),{left:r-a[0],top:o-a[1]}))}};function k1(t,i){let e=t.getElementById(i)||t.getElementsByName(i)[0];if(e)return e;if(typeof t.createTreeWalker=="function"&&t.body&&typeof t.body.attachShadow=="function"){let n=t.createTreeWalker(t.body,NodeFilter.SHOW_ELEMENT),r=n.currentNode;for(;r;){let o=r.shadowRoot;if(o){let a=o.getElementById(i)||o.querySelector(`[name="${i}"]`);if(a)return a}r=n.nextNode()}}return null}var ql=class{_doc;constructor(i){this._doc=i}manager},bm=(()=>{class t extends ql{constructor(e){super(e)}supports(e){return!0}addEventListener(e,n,r,o){return e.addEventListener(n,r,o),()=>this.removeEventListener(e,n,r,o)}removeEventListener(e,n,r,o){return e.removeEventListener(n,r,o)}static \u0275fac=function(n){return new(n||t)(W(Y))};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})(),wm=new y(""),tv=(()=>{class t{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,n){this._zone=n,e.forEach(a=>{a.manager=this});let r=e.filter(a=>!(a instanceof bm));this._plugins=r.slice().reverse();let o=e.find(a=>a instanceof bm);o&&this._plugins.push(o)}addEventListener(e,n,r,o){return this._findPluginFor(n).addEventListener(e,n,r,o)}getZone(){return this._zone}_findPluginFor(e){let n=this._eventNameToPlugin.get(e);if(n)return n;if(n=this._plugins.find(o=>o.supports(e)),!n)throw new L(5101,!1);return this._eventNameToPlugin.set(e,n),n}static \u0275fac=function(n){return new(n||t)(W(wm),W(V))};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})(),X_="ng-app-id";function XD(t){for(let i of t)i.remove()}function JD(t,i){let e=i.createElement("style");return e.textContent=t,e}function A1(t,i,e,n){let r=t.head?.querySelectorAll(`style[${X_}="${i}"],link[${X_}="${i}"]`);if(r)for(let o of r)o.removeAttribute(X_),o instanceof HTMLLinkElement?n.set(o.href.slice(o.href.lastIndexOf("/")+1),{usage:0,elements:[o]}):o.textContent&&e.set(o.textContent,{usage:0,elements:[o]})}function ev(t,i){let e=i.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",t),e}var nv=(()=>{class t{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(e,n,r,o={}){this.doc=e,this.appId=n,this.nonce=r,A1(e,n,this.inline,this.external),this.hosts.add(e.head)}addStyles(e,n){for(let r of e)this.addUsage(r,this.inline,JD);n?.forEach(r=>this.addUsage(r,this.external,ev))}removeStyles(e,n){for(let r of e)this.removeUsage(r,this.inline);n?.forEach(r=>this.removeUsage(r,this.external))}addUsage(e,n,r){let o=n.get(e);o?o.usage++:n.set(e,{usage:1,elements:[...this.hosts].map(a=>this.addElement(a,r(e,this.doc)))})}removeUsage(e,n){let r=n.get(e);r&&(r.usage--,r.usage<=0&&(XD(r.elements),n.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])XD(e);this.hosts.clear()}addHost(e){this.hosts.add(e);for(let[n,{elements:r}]of this.inline)r.push(this.addElement(e,JD(n,this.doc)));for(let[n,{elements:r}]of this.external)r.push(this.addElement(e,ev(n,this.doc)))}removeHost(e){this.hosts.delete(e)}addElement(e,n){return this.nonce&&n.setAttribute("nonce",this.nonce),e.appendChild(n)}static \u0275fac=function(n){return new(n||t)(W(Y),W(Ur),W($a,8),W(Vo))};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})(),J_={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},iv=/%COMP%/g;var tx="%COMP%",R1=`_nghost-${tx}`,O1=`_ngcontent-${tx}`,N1=!0,P1=new y("",{factory:()=>N1});function F1(t){return O1.replace(iv,t)}function L1(t){return R1.replace(iv,t)}function nx(t,i){return i.map(e=>e.replace(iv,t))}var rv=(()=>{class t{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;constructor(e,n,r,o,a,s,l=null,d=null){this.eventManager=e,this.sharedStylesHost=n,this.appId=r,this.removeStylesOnCompDestroy=o,this.doc=a,this.ngZone=s,this.nonce=l,this.tracingService=d,this.defaultRenderer=new Yl(e,a,s,this.tracingService)}createRenderer(e,n){if(!e||!n)return this.defaultRenderer;let r=this.getOrCreateRenderer(e,n);return r instanceof Cm?r.applyToHost(e):r instanceof Ql&&r.applyStyles(),r}getOrCreateRenderer(e,n){let r=this.rendererByCompId,o=r.get(n.id);if(!o){let a=this.doc,s=this.ngZone,l=this.eventManager,d=this.sharedStylesHost,u=this.removeStylesOnCompDestroy,f=this.tracingService;switch(n.encapsulation){case oi.Emulated:o=new Cm(l,d,n,this.appId,u,a,s,f);break;case oi.ShadowDom:return new ym(l,e,n,a,s,this.nonce,f,d);case oi.ExperimentalIsolatedShadowDom:return new ym(l,e,n,a,s,this.nonce,f);default:o=new Ql(l,d,n,u,a,s,f);break}r.set(n.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(n){return new(n||t)(W(tv),W(nv),W(Ur),W(P1),W(Y),W(V),W($a),W(si,8))};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})(),Yl=class{eventManager;doc;ngZone;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(i,e,n,r){this.eventManager=i,this.doc=e,this.ngZone=n,this.tracingService=r}destroy(){}destroyNode=null;createElement(i,e){return e?this.doc.createElementNS(J_[e]||e,i):this.doc.createElement(i)}createComment(i){return this.doc.createComment(i)}createText(i){return this.doc.createTextNode(i)}appendChild(i,e){(ex(i)?i.content:i).appendChild(e)}insertBefore(i,e,n){i&&(ex(i)?i.content:i).insertBefore(e,n)}removeChild(i,e){e.remove()}selectRootElement(i,e){let n=typeof i=="string"?this.doc.querySelector(i):i;if(!n)throw new L(-5104,!1);return e||(n.textContent=""),n}parentNode(i){return i.parentNode}nextSibling(i){return i.nextSibling}setAttribute(i,e,n,r){if(r){e=r+":"+e;let o=J_[r];o?i.setAttributeNS(o,e,n):i.setAttribute(e,n)}else i.setAttribute(e,n)}removeAttribute(i,e,n){if(n){let r=J_[n];r?i.removeAttributeNS(r,e):i.removeAttribute(`${n}:${e}`)}else i.removeAttribute(e)}addClass(i,e){i.classList.add(e)}removeClass(i,e){i.classList.remove(e)}setStyle(i,e,n,r){r&(Ni.DashCase|Ni.Important)?i.style.setProperty(e,n,r&Ni.Important?"important":""):i.style[e]=n}removeStyle(i,e,n){n&Ni.DashCase?i.style.removeProperty(e):i.style[e]=""}setProperty(i,e,n){i!=null&&(i[e]=n)}setValue(i,e){i.nodeValue=e}listen(i,e,n,r){if(typeof i=="string"&&(i=Un().getGlobalEventTarget(this.doc,i),!i))throw new L(5102,!1);let o=this.decoratePreventDefault(n);return this.tracingService?.wrapEventListener&&(o=this.tracingService.wrapEventListener(i,e,o)),this.eventManager.addEventListener(i,e,o,r)}decoratePreventDefault(i){return e=>{if(e==="__ngUnwrap__")return i;i(e)===!1&&e.preventDefault()}}};function ex(t){return t.tagName==="TEMPLATE"&&t.content!==void 0}var ym=class extends Yl{hostEl;sharedStylesHost;shadowRoot;constructor(i,e,n,r,o,a,s,l){super(i,r,o,s),this.hostEl=e,this.sharedStylesHost=l,this.shadowRoot=e.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let d=n.styles;d=nx(n.id,d);for(let f of d){let _=document.createElement("style");a&&_.setAttribute("nonce",a),_.textContent=f,this.shadowRoot.appendChild(_)}let u=n.getExternalStyles?.();if(u)for(let f of u){let _=ev(f,r);a&&_.setAttribute("nonce",a),this.shadowRoot.appendChild(_)}}nodeOrShadowRoot(i){return i===this.hostEl?this.shadowRoot:i}appendChild(i,e){return super.appendChild(this.nodeOrShadowRoot(i),e)}insertBefore(i,e,n){return super.insertBefore(this.nodeOrShadowRoot(i),e,n)}removeChild(i,e){return super.removeChild(null,e)}parentNode(i){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(i)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},Ql=class extends Yl{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(i,e,n,r,o,a,s,l){super(i,o,a,s),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=r;let d=n.styles;this.styles=l?nx(l,d):d,this.styleUrls=n.getExternalStyles?.(l)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&Fo.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},Cm=class extends Ql{contentAttr;hostAttr;constructor(i,e,n,r,o,a,s,l){let d=r+"-"+n.id;super(i,e,n,o,a,s,l,d),this.contentAttr=F1(d),this.hostAttr=L1(d)}applyToHost(i){this.applyStyles(),this.setAttribute(i,this.hostAttr,"")}createElement(i,e){let n=super.createElement(i,e);return super.setAttribute(n,this.contentAttr,""),n}};var Dm=class t extends Wl{supportsDOMEvents=!0;static makeCurrent(){U_(new t)}onAndCancel(i,e,n,r){return i.addEventListener(e,n,r),()=>{i.removeEventListener(e,n,r)}}dispatchEvent(i,e){i.dispatchEvent(e)}remove(i){i.remove()}createElement(i,e){return e=e||this.getDefaultDocument(),e.createElement(i)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(i){return i.nodeType===Node.ELEMENT_NODE}isShadowRoot(i){return i instanceof DocumentFragment}getGlobalEventTarget(i,e){return e==="window"?window:e==="document"?i:e==="body"?i.body:null}getBaseHref(i){let e=V1();return e==null?null:B1(e)}resetBaseElement(){Zl=null}getUserAgent(){return window.navigator.userAgent}getCookie(i){return Gl(document.cookie,i)}},Zl=null;function V1(){return Zl=Zl||document.head.querySelector("base"),Zl?Zl.getAttribute("href"):null}function B1(t){return new URL(t,document.baseURI).pathname}var j1=(()=>{class t{build(){return new XMLHttpRequest}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})(),ix=["alt","control","meta","shift"],H1={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},U1={alt:t=>t.altKey,control:t=>t.ctrlKey,meta:t=>t.metaKey,shift:t=>t.shiftKey},rx=(()=>{class t extends ql{constructor(e){super(e)}supports(e){return t.parseEventName(e)!=null}addEventListener(e,n,r,o){let a=t.parseEventName(n),s=t.eventCallback(a.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Un().onAndCancel(e,a.domEventName,s,o))}static parseEventName(e){let n=e.toLowerCase().split("."),r=n.shift();if(n.length===0||!(r==="keydown"||r==="keyup"))return null;let o=t._normalizeKey(n.pop()),a="",s=n.indexOf("code");if(s>-1&&(n.splice(s,1),a="code."),ix.forEach(d=>{let u=n.indexOf(d);u>-1&&(n.splice(u,1),a+=d+".")}),a+=o,n.length!=0||o.length===0)return null;let l={};return l.domEventName=r,l.fullKey=a,l}static matchEventFullKeyCode(e,n){let r=H1[e.key]||e.key,o="";return n.indexOf("code.")>-1&&(r=e.code,o="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),ix.forEach(a=>{if(a!==r){let s=U1[a];s(e)&&(o+=a+".")}}),o+=r,o===n)}static eventCallback(e,n,r){return o=>{t.matchEventFullKeyCode(o,e)&&r.runGuarded(()=>n(o))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(n){return new(n||t)(W(Y))};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})();async function ov(t,i,e){let n=C({rootComponent:t},z1(i,e));return zD(n)}function z1(t,i){return{platformRef:i?.platformRef,appProviders:[...Y1,...t?.providers??[]],platformProviders:q1}}function $1(){Dm.makeCurrent()}function W1(){return new Yt}function G1(){return r_(document),document}var q1=[{provide:Vo,useValue:Z_},{provide:zu,useValue:$1,multi:!0},{provide:Y,useFactory:G1}];var Y1=[{provide:pl,useValue:"root"},{provide:Yt,useFactory:W1},{provide:wm,useClass:bm,multi:!0},{provide:wm,useClass:rx,multi:!0},rv,nv,tv,{provide:vt,useExisting:rv},{provide:jo,useClass:j1},[]];var Wr=class t{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(i){i?typeof i=="string"?this.lazyInit=()=>{this.headers=new Map,i.split(`
`).forEach(e=>{let n=e.indexOf(":");if(n>0){let r=e.slice(0,n),o=e.slice(n+1).trim();this.addHeaderEntry(r,o)}})}:typeof Headers<"u"&&i instanceof Headers?(this.headers=new Map,i.forEach((e,n)=>{this.addHeaderEntry(n,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(i).forEach(([e,n])=>{this.setHeaderEntries(e,n)})}:this.headers=new Map}has(i){return this.init(),this.headers.has(i.toLowerCase())}get(i){this.init();let e=this.headers.get(i.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(i){return this.init(),this.headers.get(i.toLowerCase())||null}append(i,e){return this.clone({name:i,value:e,op:"a"})}set(i,e){return this.clone({name:i,value:e,op:"s"})}delete(i,e){return this.clone({name:i,value:e,op:"d"})}maybeSetNormalizedName(i,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,i)}init(){this.lazyInit&&(this.lazyInit instanceof t?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(i=>this.applyUpdate(i)),this.lazyUpdate=null))}copyFrom(i){i.init(),Array.from(i.headers.keys()).forEach(e=>{this.headers.set(e,i.headers.get(e)),this.normalizedNames.set(e,i.normalizedNames.get(e))})}clone(i){let e=new t;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof t?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([i]),e}applyUpdate(i){let e=i.name.toLowerCase();switch(i.op){case"a":case"s":let n=i.value;if(typeof n=="string"&&(n=[n]),n.length===0)return;this.maybeSetNormalizedName(i.name,e);let r=(i.op==="a"?this.headers.get(e):void 0)||[];r.push(...n),this.headers.set(e,r);break;case"d":let o=i.value;if(!o)this.headers.delete(e),this.normalizedNames.delete(e);else{let a=this.headers.get(e);if(!a)return;a=a.filter(s=>o.indexOf(s)===-1),a.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,a)}break}}addHeaderEntry(i,e){let n=i.toLowerCase();this.maybeSetNormalizedName(i,n),this.headers.has(n)?this.headers.get(n).push(e):this.headers.set(n,[e])}setHeaderEntries(i,e){let n=(Array.isArray(e)?e:[e]).map(o=>o.toString()),r=i.toLowerCase();this.headers.set(r,n),this.maybeSetNormalizedName(i,r)}forEach(i){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>i(this.normalizedNames.get(e),this.headers.get(e)))}};var Em=class{map=new Map;set(i,e){return this.map.set(i,e),this}get(i){return this.map.has(i)||this.map.set(i,i.defaultValue()),this.map.get(i)}delete(i){return this.map.delete(i),this}has(i){return this.map.has(i)}keys(){return this.map.keys()}},Mm=class{encodeKey(i){return ox(i)}encodeValue(i){return ox(i)}decodeKey(i){return decodeURIComponent(i)}decodeValue(i){return decodeURIComponent(i)}};function Q1(t,i){let e=new Map;return t.length>0&&t.replace(/^\?/,"").split("&").forEach(r=>{let o=r.indexOf("="),[a,s]=o==-1?[i.decodeKey(r),""]:[i.decodeKey(r.slice(0,o)),i.decodeValue(r.slice(o+1))],l=e.get(a)||[];l.push(s),e.set(a,l)}),e}var Z1=/%(\d[a-f0-9])/gi,K1={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function ox(t){return encodeURIComponent(t).replace(Z1,(i,e)=>K1[e]??i)}function xm(t){return`${t}`}var Lt=class t{map;encoder;updates=null;cloneFrom=null;constructor(i={}){if(this.encoder=i.encoder||new Mm,i.fromString){if(i.fromObject)throw new L(2805,!1);this.map=Q1(i.fromString,this.encoder)}else i.fromObject?(this.map=new Map,Object.keys(i.fromObject).forEach(e=>{let n=i.fromObject[e],r=Array.isArray(n)?n.map(xm):[xm(n)];this.map.set(e,r)})):this.map=null}has(i){return this.init(),this.map.has(i)}get(i){this.init();let e=this.map.get(i);return e?e[0]:null}getAll(i){return this.init(),this.map.get(i)||null}keys(){return this.init(),Array.from(this.map.keys())}append(i,e){return this.clone({param:i,value:e,op:"a"})}appendAll(i){let e=[];return Object.keys(i).forEach(n=>{let r=i[n];Array.isArray(r)?r.forEach(o=>{e.push({param:n,value:o,op:"a"})}):e.push({param:n,value:r,op:"a"})}),this.clone(e)}set(i,e){return this.clone({param:i,value:e,op:"s"})}delete(i,e){return this.clone({param:i,value:e,op:"d"})}toString(){return this.init(),this.keys().map(i=>{let e=this.encoder.encodeKey(i);return this.map.get(i).map(n=>e+"="+this.encoder.encodeValue(n)).join("&")}).filter(i=>i!=="").join("&")}clone(i){let e=new t({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(i),e}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(i=>this.map.set(i,this.cloneFrom.map.get(i))),this.updates.forEach(i=>{switch(i.op){case"a":case"s":let e=(i.op==="a"?this.map.get(i.param):void 0)||[];e.push(xm(i.value)),this.map.set(i.param,e);break;case"d":if(i.value!==void 0){let n=this.map.get(i.param)||[],r=n.indexOf(xm(i.value));r!==-1&&n.splice(r,1),n.length>0?this.map.set(i.param,n):this.map.delete(i.param)}else{this.map.delete(i.param);break}}}),this.cloneFrom=this.updates=null)}};function X1(t){switch(t){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function ax(t){return typeof ArrayBuffer<"u"&&t instanceof ArrayBuffer}function sx(t){return typeof Blob<"u"&&t instanceof Blob}function lx(t){return typeof FormData<"u"&&t instanceof FormData}function J1(t){return typeof URLSearchParams<"u"&&t instanceof URLSearchParams}var cx="Content-Type",dx="Accept",mx="text/plain",fx="application/json",eN=`${fx}, ${mx}, */*`,Ya=class t{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(i,e,n,r){this.url=e,this.method=i.toUpperCase();let o;if(X1(this.method)||r?(this.body=n!==void 0?n:null,o=r):o=n,o){if(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,this.keepalive=!!o.keepalive,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),o.priority&&(this.priority=o.priority),o.cache&&(this.cache=o.cache),o.credentials&&(this.credentials=o.credentials),typeof o.timeout=="number"){if(o.timeout<1||!Number.isInteger(o.timeout))throw new L(2822,"");this.timeout=o.timeout}o.mode&&(this.mode=o.mode),o.redirect&&(this.redirect=o.redirect),o.integrity&&(this.integrity=o.integrity),o.referrer&&(this.referrer=o.referrer),o.referrerPolicy&&(this.referrerPolicy=o.referrerPolicy),this.transferCache=o.transferCache}if(this.headers??=new Wr,this.context??=new Em,!this.params)this.params=new Lt,this.urlWithParams=e;else{let a=this.params.toString();if(a.length===0)this.urlWithParams=e;else{let s=e.indexOf("?"),l=s===-1?"?":s<e.length-1?"&":"";this.urlWithParams=e+l+a}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||ax(this.body)||sx(this.body)||lx(this.body)||J1(this.body)?this.body:this.body instanceof Lt?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||lx(this.body)?null:sx(this.body)?this.body.type||null:ax(this.body)?null:typeof this.body=="string"?mx:this.body instanceof Lt?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?fx:null}clone(i={}){let e=i.method||this.method,n=i.url||this.url,r=i.responseType||this.responseType,o=i.keepalive??this.keepalive,a=i.priority||this.priority,s=i.cache||this.cache,l=i.mode||this.mode,d=i.redirect||this.redirect,u=i.credentials||this.credentials,f=i.referrer||this.referrer,_=i.integrity||this.integrity,v=i.referrerPolicy||this.referrerPolicy,w=i.transferCache??this.transferCache,F=i.timeout??this.timeout,U=i.body!==void 0?i.body:this.body,Q=i.withCredentials??this.withCredentials,Re=i.reportProgress??this.reportProgress,Nt=i.headers||this.headers,Pt=i.params||this.params,Ws=i.context??this.context;return i.setHeaders!==void 0&&(Nt=Object.keys(i.setHeaders).reduce((Gs,co)=>Gs.set(co,i.setHeaders[co]),Nt)),i.setParams&&(Pt=Object.keys(i.setParams).reduce((Gs,co)=>Gs.set(co,i.setParams[co]),Pt)),new t(e,n,U,{params:Pt,headers:Nt,context:Ws,reportProgress:Re,responseType:r,withCredentials:Q,transferCache:w,keepalive:o,cache:s,priority:a,timeout:F,mode:l,redirect:d,credentials:u,referrer:f,integrity:_,referrerPolicy:v})}},Ho=(function(t){return t[t.Sent=0]="Sent",t[t.UploadProgress=1]="UploadProgress",t[t.ResponseHeader=2]="ResponseHeader",t[t.DownloadProgress=3]="DownloadProgress",t[t.Response=4]="Response",t[t.User=5]="User",t})(Ho||{}),Za=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(i,e=200,n="OK"){this.headers=i.headers||new Wr,this.status=i.status!==void 0?i.status:e,this.statusText=i.statusText||n,this.url=i.url||null,this.redirected=i.redirected,this.responseType=i.responseType,this.ok=this.status>=200&&this.status<300}},Sm=class t extends Za{constructor(i={}){super(i)}type=Ho.ResponseHeader;clone(i={}){return new t({headers:i.headers||this.headers,status:i.status!==void 0?i.status:this.status,statusText:i.statusText||this.statusText,url:i.url||this.url||void 0})}},Kl=class t extends Za{body;constructor(i={}){super(i),this.body=i.body!==void 0?i.body:null}type=Ho.Response;clone(i={}){return new t({body:i.body!==void 0?i.body:this.body,headers:i.headers||this.headers,status:i.status!==void 0?i.status:this.status,statusText:i.statusText||this.statusText,url:i.url||this.url||void 0,redirected:i.redirected??this.redirected,responseType:i.responseType??this.responseType})}},Qa=class extends Za{name="HttpErrorResponse";message;error;ok=!1;constructor(i){super(i,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${i.url||"(unknown url)"}`:this.message=`Http failure response for ${i.url||"(unknown url)"}: ${i.status} ${i.statusText}`,this.error=i.error||null}},tN=200,nN=204;var iN=new y("");var rN=/^\)\]\}',?\n/;var sv=(()=>{class t{xhrFactory;tracingService=c(si,{optional:!0});constructor(e){this.xhrFactory=e}maybePropagateTrace(e){return this.tracingService?.propagate?this.tracingService.propagate(e):e}handle(e){if(e.method==="JSONP")throw new L(-2800,!1);let n=this.xhrFactory;return q(null).pipe(gt(()=>new se(o=>{let a=n.build();if(a.open(e.method,e.urlWithParams),e.withCredentials&&(a.withCredentials=!0),e.headers.forEach((U,Q)=>a.setRequestHeader(U,Q.join(","))),e.headers.has(dx)||a.setRequestHeader(dx,eN),!e.headers.has(cx)){let U=e.detectContentTypeHeader();U!==null&&a.setRequestHeader(cx,U)}if(e.timeout&&(a.timeout=e.timeout),e.responseType){let U=e.responseType.toLowerCase();a.responseType=U!=="json"?U:"text"}let s=e.serializeBody(),l=null,d=()=>{if(l!==null)return l;let U=a.statusText||"OK",Q=new Wr(a.getAllResponseHeaders()),Re=a.responseURL||e.url;return l=new Sm({headers:Q,status:a.status,statusText:U,url:Re}),l},u=this.maybePropagateTrace(()=>{let{headers:U,status:Q,statusText:Re,url:Nt}=d(),Pt=null;Q!==nN&&(Pt=typeof a.response>"u"?a.responseText:a.response),Q===0&&(Q=Pt?tN:0);let Ws=Q>=200&&Q<300;if(e.responseType==="json"&&typeof Pt=="string"){let Gs=Pt;Pt=Pt.replace(rN,"");try{Pt=Pt!==""?JSON.parse(Pt):null}catch(co){Pt=Gs,Ws&&(Ws=!1,Pt={error:co,text:Pt})}}Ws?(o.next(new Kl({body:Pt,headers:U,status:Q,statusText:Re,url:Nt||void 0})),o.complete()):o.error(new Qa({error:Pt,headers:U,status:Q,statusText:Re,url:Nt||void 0}))}),f=this.maybePropagateTrace(U=>{let{url:Q}=d(),Re=new Qa({error:U,status:a.status||0,statusText:a.statusText||"Unknown Error",url:Q||void 0});o.error(Re)}),_=f;e.timeout&&(_=this.maybePropagateTrace(U=>{let{url:Q}=d(),Re=new Qa({error:new DOMException("Request timed out","TimeoutError"),status:a.status||0,statusText:a.statusText||"Request timeout",url:Q||void 0});o.error(Re)}));let v=!1,w=this.maybePropagateTrace(U=>{v||(o.next(d()),v=!0);let Q={type:Ho.DownloadProgress,loaded:U.loaded};U.lengthComputable&&(Q.total=U.total),e.responseType==="text"&&a.responseText&&(Q.partialText=a.responseText),o.next(Q)}),F=this.maybePropagateTrace(U=>{let Q={type:Ho.UploadProgress,loaded:U.loaded};U.lengthComputable&&(Q.total=U.total),o.next(Q)});return a.addEventListener("load",u),a.addEventListener("error",f),a.addEventListener("timeout",_),a.addEventListener("abort",f),e.reportProgress&&(a.addEventListener("progress",w),s!==null&&a.upload&&a.upload.addEventListener("progress",F)),a.send(s),o.next({type:Ho.Sent}),()=>{a.removeEventListener("error",f),a.removeEventListener("abort",f),a.removeEventListener("load",u),a.removeEventListener("timeout",_),e.reportProgress&&(a.removeEventListener("progress",w),s!==null&&a.upload&&a.upload.removeEventListener("progress",F)),a.readyState!==a.DONE&&a.abort()}})))}static \u0275fac=function(n){return new(n||t)(W(jo))};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function hx(t,i){return i(t)}function oN(t,i){return(e,n)=>i.intercept(e,{handle:r=>t(r,n)})}function aN(t,i,e){return(n,r)=>Et(e,()=>i(n,o=>t(o,r)))}var Tm=new y(""),lv=new y("",{factory:()=>[]}),px=new y(""),cv=new y("",{factory:()=>!0});function sN(){let t=null;return(i,e)=>{t===null&&(t=(c(Tm,{optional:!0})??[]).reduceRight(oN,hx));let n=c(Oa);if(c(cv)){let o=n.add();return t(i,e).pipe(Ar(o))}else return t(i,e)}}var dv=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:function(n){let r=null;return n?r=new(n||t):r=W(sv),r},providedIn:"root"})}return t})();var Im=(()=>{class t{backend;injector;chain=null;pendingTasks=c(Oa);contributeToStability=c(cv);constructor(e,n){this.backend=e,this.injector=n}handle(e){if(this.chain===null){let n=Array.from(new Set([...this.injector.get(lv),...this.injector.get(px,[])]));this.chain=n.reduceRight((r,o)=>aN(r,o,this.injector),hx)}if(this.contributeToStability){let n=this.pendingTasks.add();return this.chain(e,r=>this.backend.handle(r)).pipe(Ar(n))}else return this.chain(e,n=>this.backend.handle(n))}static \u0275fac=function(n){return new(n||t)(W(dv),W(Le))};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),uv=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:function(n){let r=null;return n?r=new(n||t):r=W(Im),r},providedIn:"root"})}return t})();function av(t,i){return{body:i,headers:t.headers,context:t.context,observe:t.observe,params:t.params,reportProgress:t.reportProgress,responseType:t.responseType,withCredentials:t.withCredentials,credentials:t.credentials,transferCache:t.transferCache,timeout:t.timeout,keepalive:t.keepalive,priority:t.priority,cache:t.cache,mode:t.mode,redirect:t.redirect,integrity:t.integrity,referrer:t.referrer,referrerPolicy:t.referrerPolicy}}var yt=(()=>{class t{handler;constructor(e){this.handler=e}request(e,n,r={}){let o;if(e instanceof Ya)o=e;else{let l;r.headers instanceof Wr?l=r.headers:l=new Wr(r.headers);let d;r.params&&(r.params instanceof Lt?d=r.params:d=new Lt({fromObject:r.params})),o=new Ya(e,n,r.body!==void 0?r.body:null,{headers:l,context:r.context,params:d,reportProgress:r.reportProgress,responseType:r.responseType||"json",withCredentials:r.withCredentials,transferCache:r.transferCache,keepalive:r.keepalive,priority:r.priority,cache:r.cache,mode:r.mode,redirect:r.redirect,credentials:r.credentials,referrer:r.referrer,referrerPolicy:r.referrerPolicy,integrity:r.integrity,timeout:r.timeout})}let a=q(o).pipe(kr(l=>this.handler.handle(l)));if(e instanceof Ya||r.observe==="events")return a;let s=a.pipe(be(l=>l instanceof Kl));switch(r.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return s.pipe(le(l=>{if(l.body!==null&&!(l.body instanceof ArrayBuffer))throw new L(2806,!1);return l.body}));case"blob":return s.pipe(le(l=>{if(l.body!==null&&!(l.body instanceof Blob))throw new L(2807,!1);return l.body}));case"text":return s.pipe(le(l=>{if(l.body!==null&&typeof l.body!="string")throw new L(2808,!1);return l.body}));default:return s.pipe(le(l=>l.body))}case"response":return s;default:throw new L(2809,!1)}}delete(e,n={}){return this.request("DELETE",e,n)}get(e,n={}){return this.request("GET",e,n)}head(e,n={}){return this.request("HEAD",e,n)}jsonp(e,n){return this.request("JSONP",e,{params:new Lt().append(n,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,n={}){return this.request("OPTIONS",e,n)}patch(e,n,r={}){return this.request("PATCH",e,av(r,n))}post(e,n,r={}){return this.request("POST",e,av(r,n))}put(e,n,r={}){return this.request("PUT",e,av(r,n))}static \u0275fac=function(n){return new(n||t)(W(uv))};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var lN=new y("",{factory:()=>!0}),cN="XSRF-TOKEN",dN=new y("",{factory:()=>cN}),uN="X-XSRF-TOKEN",mN=new y("",{factory:()=>uN}),fN=(()=>{class t{cookieName=c(dN);doc=c(Y);lastCookieString="";lastToken=null;parseCount=0;getToken(){let e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=Gl(e,this.cookieName),this.lastCookieString=e),this.lastToken}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),gx=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:function(n){let r=null;return n?r=new(n||t):r=W(fN),r},providedIn:"root"})}return t})();function hN(t,i){if(!c(lN)||t.method==="GET"||t.method==="HEAD")return i(t);try{let r=c(ur).href,{origin:o}=new URL(r),{origin:a}=new URL(t.url,o);if(o!==a)return i(t)}catch{return i(t)}let e=c(gx).getToken(),n=c(mN);return e!=null&&!t.headers.has(n)&&(t=t.clone({headers:t.headers.set(n,e)})),i(t)}var mv=(function(t){return t[t.Interceptors=0]="Interceptors",t[t.LegacyInterceptors=1]="LegacyInterceptors",t[t.CustomXsrfConfiguration=2]="CustomXsrfConfiguration",t[t.NoXsrfProtection=3]="NoXsrfProtection",t[t.JsonpSupport=4]="JsonpSupport",t[t.RequestsMadeViaParent=5]="RequestsMadeViaParent",t[t.Fetch=6]="Fetch",t})(mv||{});function pN(t,i){return{\u0275kind:t,\u0275providers:i}}function fv(...t){let i=[yt,Im,{provide:uv,useExisting:Im},{provide:dv,useFactory:()=>c(iN,{optional:!0})??c(sv)},{provide:lv,useValue:hN,multi:!0}];for(let e of t)i.push(...e.\u0275providers);return Ei(i)}var ux=new y("");function hv(){return pN(mv.LegacyInterceptors,[{provide:ux,useFactory:sN},{provide:lv,useExisting:ux,multi:!0}])}var _x=(()=>{class t{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(n){return new(n||t)(W(Y))};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Xl=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:function(n){let r=null;return n?r=new(n||t):r=W(_N),r},providedIn:"root"})}return t})(),_N=(()=>{class t extends Xl{_doc;constructor(e){super(),this._doc=e}sanitize(e,n){if(n==null)return null;switch(e){case Ut.NONE:return n;case Ut.HTML:return Bo(n,"HTML")?ai(n):d_(this._doc,String(n)).toString();case Ut.STYLE:return Bo(n,"Style")?ai(n):n;case Ut.SCRIPT:if(Bo(n,"Script"))return ai(n);throw new L(5200,!1);case Ut.URL:return Bo(n,"URL")?ai(n):qu(String(n));case Ut.RESOURCE_URL:if(Bo(n,"ResourceURL"))return ai(n);throw new L(5201,!1);default:throw new L(5202,!1)}}bypassSecurityTrustHtml(e){return o_(e)}bypassSecurityTrustStyle(e){return a_(e)}bypassSecurityTrustScript(e){return s_(e)}bypassSecurityTrustUrl(e){return l_(e)}bypassSecurityTrustResourceUrl(e){return c_(e)}static \u0275fac=function(n){return new(n||t)(W(Y))};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var ue="primary",dc=Symbol("RouteTitle"),bv=class{params;constructor(i){this.params=i||{}}has(i){return Object.prototype.hasOwnProperty.call(this.params,i)}get(i){if(this.has(i)){let e=this.params[i];return Array.isArray(e)?e[0]:e}return null}getAll(i){if(this.has(i)){let e=this.params[i];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function zo(t){return new bv(t)}function pv(t,i,e){for(let n=0;n<t.length;n++){let r=t[n],o=i[n];if(r[0]===":")e[r.substring(1)]=o;else if(r!==o.path)return!1}return!0}function Mx(t,i,e){let n=e.path.split("/"),r=n.indexOf("**");if(r===-1){if(n.length>t.length||e.pathMatch==="full"&&(i.hasChildren()||n.length<t.length))return null;let l={},d=t.slice(0,n.length);return pv(n,d,l)?{consumed:d,posParams:l}:null}if(r!==n.lastIndexOf("**"))return null;let o=n.slice(0,r),a=n.slice(r+1);if(o.length+a.length>t.length||e.pathMatch==="full"&&i.hasChildren()&&e.path!=="**")return null;let s={};return!pv(o,t.slice(0,o.length),s)||!pv(a,t.slice(t.length-a.length),s)?null:{consumed:t,posParams:s}}function Pm(t){return new Promise((i,e)=>{t.pipe(Ji()).subscribe({next:n=>i(n),error:n=>e(n)})})}function vN(t,i){if(t.length!==i.length)return!1;for(let e=0;e<t.length;++e)if(!Vi(t[e],i[e]))return!1;return!0}function Vi(t,i){let e=t?yv(t):void 0,n=i?yv(i):void 0;if(!e||!n||e.length!=n.length)return!1;let r;for(let o=0;o<e.length;o++)if(r=e[o],!Sx(t[r],i[r]))return!1;return!0}function yv(t){return[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function Sx(t,i){if(Array.isArray(t)&&Array.isArray(i)){if(t.length!==i.length)return!1;let e=[...t].sort(),n=[...i].sort();return e.every((r,o)=>n[o]===r)}else return t===i}function bN(t){return t.length>0?t[t.length-1]:null}function Wo(t){return el(t)?t:lr(t)?$e(Promise.resolve(t)):q(t)}function Ix(t){return el(t)?Pm(t):Promise.resolve(t)}var yN={exact:Ax,subset:Rx},Tx={exact:CN,subset:wN,ignored:()=>!0},kx={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},Cv={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};function bx(t,i,e){return yN[e.paths](t.root,i.root,e.matrixParams)&&Tx[e.queryParams](t.queryParams,i.queryParams)&&!(e.fragment==="exact"&&t.fragment!==i.fragment)}function CN(t,i){return Vi(t,i)}function Ax(t,i,e){if(!Uo(t.segments,i.segments)||!Rm(t.segments,i.segments,e)||t.numberOfChildren!==i.numberOfChildren)return!1;for(let n in i.children)if(!t.children[n]||!Ax(t.children[n],i.children[n],e))return!1;return!0}function wN(t,i){return Object.keys(i).length<=Object.keys(t).length&&Object.keys(i).every(e=>Sx(t[e],i[e]))}function Rx(t,i,e){return Ox(t,i,i.segments,e)}function Ox(t,i,e,n){if(t.segments.length>e.length){let r=t.segments.slice(0,e.length);return!(!Uo(r,e)||i.hasChildren()||!Rm(r,e,n))}else if(t.segments.length===e.length){if(!Uo(t.segments,e)||!Rm(t.segments,e,n))return!1;for(let r in i.children)if(!t.children[r]||!Rx(t.children[r],i.children[r],n))return!1;return!0}else{let r=e.slice(0,t.segments.length),o=e.slice(t.segments.length);return!Uo(t.segments,r)||!Rm(t.segments,r,n)||!t.children[ue]?!1:Ox(t.children[ue],i,o,n)}}function Rm(t,i,e){return i.every((n,r)=>Tx[e](t[r].parameters,n.parameters))}var $n=class{root;queryParams;fragment;_queryParamMap;constructor(i=new Pe([],{}),e={},n=null){this.root=i,this.queryParams=e,this.fragment=n}get queryParamMap(){return this._queryParamMap??=zo(this.queryParams),this._queryParamMap}toString(){return EN.serialize(this)}},Pe=class{segments;children;parent=null;constructor(i,e){this.segments=i,this.children=e,Object.values(e).forEach(n=>n.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return Om(this)}},Gr=class{path;parameters;_parameterMap;constructor(i,e){this.path=i,this.parameters=e}get parameterMap(){return this._parameterMap??=zo(this.parameters),this._parameterMap}toString(){return Px(this)}};function DN(t,i){return Uo(t,i)&&t.every((e,n)=>Vi(e.parameters,i[n].parameters))}function Uo(t,i){return t.length!==i.length?!1:t.every((e,n)=>e.path===i[n].path)}function xN(t,i){let e=[];return Object.entries(t.children).forEach(([n,r])=>{n===ue&&(e=e.concat(i(r,n)))}),Object.entries(t.children).forEach(([n,r])=>{n!==ue&&(e=e.concat(i(r,n)))}),e}var Go=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:()=>new hr,providedIn:"root"})}return t})(),hr=class{parse(i){let e=new Dv(i);return new $n(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(i){let e=`/${Jl(i.root,!0)}`,n=IN(i.queryParams),r=typeof i.fragment=="string"?`#${MN(i.fragment)}`:"";return`${e}${n}${r}`}},EN=new hr;function Om(t){return t.segments.map(i=>Px(i)).join("/")}function Jl(t,i){if(!t.hasChildren())return Om(t);if(i){let e=t.children[ue]?Jl(t.children[ue],!1):"",n=[];return Object.entries(t.children).forEach(([r,o])=>{r!==ue&&n.push(`${r}:${Jl(o,!1)}`)}),n.length>0?`${e}(${n.join("//")})`:e}else{let e=xN(t,(n,r)=>r===ue?[Jl(t.children[ue],!1)]:[`${r}:${Jl(n,!1)}`]);return Object.keys(t.children).length===1&&t.children[ue]!=null?`${Om(t)}/${e[0]}`:`${Om(t)}/(${e.join("//")})`}}function Nx(t){return encodeURIComponent(t).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function km(t){return Nx(t).replace(/%3B/gi,";")}function MN(t){return encodeURI(t)}function wv(t){return Nx(t).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function Nm(t){return decodeURIComponent(t)}function yx(t){return Nm(t.replace(/\+/g,"%20"))}function Px(t){return`${wv(t.path)}${SN(t.parameters)}`}function SN(t){return Object.entries(t).map(([i,e])=>`;${wv(i)}=${wv(e)}`).join("")}function IN(t){let i=Object.entries(t).map(([e,n])=>Array.isArray(n)?n.map(r=>`${km(e)}=${km(r)}`).join("&"):`${km(e)}=${km(n)}`).filter(e=>e);return i.length?`?${i.join("&")}`:""}var TN=/^[^\/()?;#]+/;function gv(t){let i=t.match(TN);return i?i[0]:""}var kN=/^[^\/()?;=#]+/;function AN(t){let i=t.match(kN);return i?i[0]:""}var RN=/^[^=?&#]+/;function ON(t){let i=t.match(RN);return i?i[0]:""}var NN=/^[^&#]+/;function PN(t){let i=t.match(NN);return i?i[0]:""}var Dv=class{url;remaining;constructor(i){this.url=i,this.remaining=i}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new Pe([],{}):new Pe([],this.parseChildren())}parseQueryParams(){let i={};if(this.consumeOptional("?"))do this.parseQueryParam(i);while(this.consumeOptional("&"));return i}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(i=0){if(i>50)throw new L(4010,!1);if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let n={};this.peekStartsWith("/(")&&(this.capture("/"),n=this.parseParens(!0,i));let r={};return this.peekStartsWith("(")&&(r=this.parseParens(!1,i)),(e.length>0||Object.keys(n).length>0)&&(r[ue]=new Pe(e,n)),r}parseSegment(){let i=gv(this.remaining);if(i===""&&this.peekStartsWith(";"))throw new L(4009,!1);return this.capture(i),new Gr(Nm(i),this.parseMatrixParams())}parseMatrixParams(){let i={};for(;this.consumeOptional(";");)this.parseParam(i);return i}parseParam(i){let e=AN(this.remaining);if(!e)return;this.capture(e);let n="";if(this.consumeOptional("=")){let r=gv(this.remaining);r&&(n=r,this.capture(n))}i[Nm(e)]=Nm(n)}parseQueryParam(i){let e=ON(this.remaining);if(!e)return;this.capture(e);let n="";if(this.consumeOptional("=")){let a=PN(this.remaining);a&&(n=a,this.capture(n))}let r=yx(e),o=yx(n);if(i.hasOwnProperty(r)){let a=i[r];Array.isArray(a)||(a=[a],i[r]=a),a.push(o)}else i[r]=o}parseParens(i,e){let n={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let r=gv(this.remaining),o=this.remaining[r.length];if(o!=="/"&&o!==")"&&o!==";")throw new L(4010,!1);let a;r.indexOf(":")>-1?(a=r.slice(0,r.indexOf(":")),this.capture(a),this.capture(":")):i&&(a=ue);let s=this.parseChildren(e+1);n[a??ue]=Object.keys(s).length===1&&s[ue]?s[ue]:new Pe([],s),this.consumeOptional("//")}return n}peekStartsWith(i){return this.remaining.startsWith(i)}consumeOptional(i){return this.peekStartsWith(i)?(this.remaining=this.remaining.substring(i.length),!0):!1}capture(i){if(!this.consumeOptional(i))throw new L(4011,!1)}};function Fx(t){return t.segments.length>0?new Pe([],{[ue]:t}):t}function Lx(t){let i={};for(let[n,r]of Object.entries(t.children)){let o=Lx(r);if(n===ue&&o.segments.length===0&&o.hasChildren())for(let[a,s]of Object.entries(o.children))i[a]=s;else(o.segments.length>0||o.hasChildren())&&(i[n]=o)}let e=new Pe(t.segments,i);return FN(e)}function FN(t){if(t.numberOfChildren===1&&t.children[ue]){let i=t.children[ue];return new Pe(t.segments.concat(i.segments),i.children)}return t}function ts(t){return t instanceof $n}function Vx(t,i,e=null,n=null,r=new hr){let o=Bx(t);return jx(o,i,e,n,r)}function Bx(t){let i;function e(o){let a={};for(let l of o.children){let d=e(l);a[l.outlet]=d}let s=new Pe(o.url,a);return o===t&&(i=s),s}let n=e(t.root),r=Fx(n);return i??r}function jx(t,i,e,n,r){let o=t;for(;o.parent;)o=o.parent;if(i.length===0)return _v(o,o,o,e,n,r);let a=LN(i);if(a.toRoot())return _v(o,o,new Pe([],{}),e,n,r);let s=VN(a,o,t),l=s.processChildren?tc(s.segmentGroup,s.index,a.commands):Ux(s.segmentGroup,s.index,a.commands);return _v(o,s.segmentGroup,l,e,n,r)}function Fm(t){return typeof t=="object"&&t!=null&&!t.outlets&&!t.segmentPath}function ic(t){return typeof t=="object"&&t!=null&&t.outlets}function Cx(t,i,e){t||="\u0275";let n=new $n;return n.queryParams={[t]:i},e.parse(e.serialize(n)).queryParams[t]}function _v(t,i,e,n,r,o){let a={};for(let[d,u]of Object.entries(n??{}))a[d]=Array.isArray(u)?u.map(f=>Cx(d,f,o)):Cx(d,u,o);let s;t===i?s=e:s=Hx(t,i,e);let l=Fx(Lx(s));return new $n(l,a,r)}function Hx(t,i,e){let n={};return Object.entries(t.children).forEach(([r,o])=>{o===i?n[r]=e:n[r]=Hx(o,i,e)}),new Pe(t.segments,n)}var Lm=class{isAbsolute;numberOfDoubleDots;commands;constructor(i,e,n){if(this.isAbsolute=i,this.numberOfDoubleDots=e,this.commands=n,i&&n.length>0&&Fm(n[0]))throw new L(4003,!1);let r=n.find(ic);if(r&&r!==bN(n))throw new L(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function LN(t){if(typeof t[0]=="string"&&t.length===1&&t[0]==="/")return new Lm(!0,0,t);let i=0,e=!1,n=t.reduce((r,o,a)=>{if(typeof o=="object"&&o!=null){if(o.outlets){let s={};return Object.entries(o.outlets).forEach(([l,d])=>{s[l]=typeof d=="string"?d.split("/"):d}),[...r,{outlets:s}]}if(o.segmentPath)return[...r,o.segmentPath]}return typeof o!="string"?[...r,o]:a===0?(o.split("/").forEach((s,l)=>{l==0&&s==="."||(l==0&&s===""?e=!0:s===".."?i++:s!=""&&r.push(s))}),r):[...r,o]},[]);return new Lm(e,i,n)}var Xa=class{segmentGroup;processChildren;index;constructor(i,e,n){this.segmentGroup=i,this.processChildren=e,this.index=n}};function VN(t,i,e){if(t.isAbsolute)return new Xa(i,!0,0);if(!e)return new Xa(i,!1,NaN);if(e.parent===null)return new Xa(e,!0,0);let n=Fm(t.commands[0])?0:1,r=e.segments.length-1+n;return BN(e,r,t.numberOfDoubleDots)}function BN(t,i,e){let n=t,r=i,o=e;for(;o>r;){if(o-=r,n=n.parent,!n)throw new L(4005,!1);r=n.segments.length}return new Xa(n,!1,r-o)}function jN(t){return ic(t[0])?t[0].outlets:{[ue]:t}}function Ux(t,i,e){if(t??=new Pe([],{}),t.segments.length===0&&t.hasChildren())return tc(t,i,e);let n=HN(t,i,e),r=e.slice(n.commandIndex);if(n.match&&n.pathIndex<t.segments.length){let o=new Pe(t.segments.slice(0,n.pathIndex),{});return o.children[ue]=new Pe(t.segments.slice(n.pathIndex),t.children),tc(o,0,r)}else return n.match&&r.length===0?new Pe(t.segments,{}):n.match&&!t.hasChildren()?xv(t,i,e):n.match?tc(t,0,r):xv(t,i,e)}function tc(t,i,e){if(e.length===0)return new Pe(t.segments,{});{let n=jN(e),r={};if(Object.keys(n).some(o=>o!==ue)&&t.children[ue]&&t.numberOfChildren===1&&t.children[ue].segments.length===0){let o=tc(t.children[ue],i,e);return new Pe(t.segments,o.children)}return Object.entries(n).forEach(([o,a])=>{typeof a=="string"&&(a=[a]),a!==null&&(r[o]=Ux(t.children[o],i,a))}),Object.entries(t.children).forEach(([o,a])=>{n[o]===void 0&&(r[o]=a)}),new Pe(t.segments,r)}}function HN(t,i,e){let n=0,r=i,o={match:!1,pathIndex:0,commandIndex:0};for(;r<t.segments.length;){if(n>=e.length)return o;let a=t.segments[r],s=e[n];if(ic(s))break;let l=`${s}`,d=n<e.length-1?e[n+1]:null;if(r>0&&l===void 0)break;if(l&&d&&typeof d=="object"&&d.outlets===void 0){if(!Dx(l,d,a))return o;n+=2}else{if(!Dx(l,{},a))return o;n++}r++}return{match:!0,pathIndex:r,commandIndex:n}}function xv(t,i,e){let n=t.segments.slice(0,i),r=0;for(;r<e.length;){let o=e[r];if(ic(o)){let l=UN(o.outlets);return new Pe(n,l)}if(r===0&&Fm(e[0])){let l=t.segments[i];n.push(new Gr(l.path,wx(e[0]))),r++;continue}let a=ic(o)?o.outlets[ue]:`${o}`,s=r<e.length-1?e[r+1]:null;a&&s&&Fm(s)?(n.push(new Gr(a,wx(s))),r+=2):(n.push(new Gr(a,{})),r++)}return new Pe(n,{})}function UN(t){let i={};return Object.entries(t).forEach(([e,n])=>{typeof n=="string"&&(n=[n]),n!==null&&(i[e]=xv(new Pe([],{}),0,n))}),i}function wx(t){let i={};return Object.entries(t).forEach(([e,n])=>i[e]=`${n}`),i}function Dx(t,i,e){return t==e.path&&Vi(i,e.parameters)}var Ja="imperative",At=(function(t){return t[t.NavigationStart=0]="NavigationStart",t[t.NavigationEnd=1]="NavigationEnd",t[t.NavigationCancel=2]="NavigationCancel",t[t.NavigationError=3]="NavigationError",t[t.RoutesRecognized=4]="RoutesRecognized",t[t.ResolveStart=5]="ResolveStart",t[t.ResolveEnd=6]="ResolveEnd",t[t.GuardsCheckStart=7]="GuardsCheckStart",t[t.GuardsCheckEnd=8]="GuardsCheckEnd",t[t.RouteConfigLoadStart=9]="RouteConfigLoadStart",t[t.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",t[t.ChildActivationStart=11]="ChildActivationStart",t[t.ChildActivationEnd=12]="ChildActivationEnd",t[t.ActivationStart=13]="ActivationStart",t[t.ActivationEnd=14]="ActivationEnd",t[t.Scroll=15]="Scroll",t[t.NavigationSkipped=16]="NavigationSkipped",t})(At||{}),Tn=class{id;url;constructor(i,e){this.id=i,this.url=e}},qr=class extends Tn{type=At.NavigationStart;navigationTrigger;restoredState;constructor(i,e,n="imperative",r=null){super(i,e),this.navigationTrigger=n,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},pi=class extends Tn{urlAfterRedirects;type=At.NavigationEnd;constructor(i,e,n){super(i,e),this.urlAfterRedirects=n}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},Zt=(function(t){return t[t.Redirect=0]="Redirect",t[t.SupersededByNewNavigation=1]="SupersededByNewNavigation",t[t.NoDataFromResolver=2]="NoDataFromResolver",t[t.GuardRejected=3]="GuardRejected",t[t.Aborted=4]="Aborted",t})(Zt||{}),ns=(function(t){return t[t.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",t[t.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",t})(ns||{}),zn=class extends Tn{reason;code;type=At.NavigationCancel;constructor(i,e,n,r){super(i,e),this.reason=n,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function zx(t){return t instanceof zn&&(t.code===Zt.Redirect||t.code===Zt.SupersededByNewNavigation)}var Bi=class extends Tn{reason;code;type=At.NavigationSkipped;constructor(i,e,n,r){super(i,e),this.reason=n,this.code=r}},$o=class extends Tn{error;target;type=At.NavigationError;constructor(i,e,n,r){super(i,e),this.error=n,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},rc=class extends Tn{urlAfterRedirects;state;type=At.RoutesRecognized;constructor(i,e,n,r){super(i,e),this.urlAfterRedirects=n,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Vm=class extends Tn{urlAfterRedirects;state;type=At.GuardsCheckStart;constructor(i,e,n,r){super(i,e),this.urlAfterRedirects=n,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Bm=class extends Tn{urlAfterRedirects;state;shouldActivate;type=At.GuardsCheckEnd;constructor(i,e,n,r,o){super(i,e),this.urlAfterRedirects=n,this.state=r,this.shouldActivate=o}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},jm=class extends Tn{urlAfterRedirects;state;type=At.ResolveStart;constructor(i,e,n,r){super(i,e),this.urlAfterRedirects=n,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Hm=class extends Tn{urlAfterRedirects;state;type=At.ResolveEnd;constructor(i,e,n,r){super(i,e),this.urlAfterRedirects=n,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Um=class{route;type=At.RouteConfigLoadStart;constructor(i){this.route=i}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},zm=class{route;type=At.RouteConfigLoadEnd;constructor(i){this.route=i}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},$m=class{snapshot;type=At.ChildActivationStart;constructor(i){this.snapshot=i}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Wm=class{snapshot;type=At.ChildActivationEnd;constructor(i){this.snapshot=i}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Gm=class{snapshot;type=At.ActivationStart;constructor(i){this.snapshot=i}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},qm=class{snapshot;type=At.ActivationEnd;constructor(i){this.snapshot=i}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},is=class{routerEvent;position;anchor;scrollBehavior;type=At.Scroll;constructor(i,e,n,r){this.routerEvent=i,this.position=e,this.anchor=n,this.scrollBehavior=r}toString(){let i=this.position?`${this.position[0]}, ${this.position[1]}`:null;return`Scroll(anchor: '${this.anchor}', position: '${i}')`}},rs=class{},oc=class{},os=class{url;navigationBehaviorOptions;constructor(i,e){this.url=i,this.navigationBehaviorOptions=e}};function zN(t){return!(t instanceof rs)&&!(t instanceof os)&&!(t instanceof oc)}var Ym=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(i){this.rootInjector=i,this.children=new qo(this.rootInjector)}},qo=(()=>{class t{rootInjector;contexts=new Map;constructor(e){this.rootInjector=e}onChildOutletCreated(e,n){let r=this.getOrCreateContext(e);r.outlet=n,this.contexts.set(e,r)}onChildOutletDestroyed(e){let n=this.getContext(e);n&&(n.outlet=null,n.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let n=this.getContext(e);return n||(n=new Ym(this.rootInjector),this.contexts.set(e,n)),n}getContext(e){return this.contexts.get(e)||null}static \u0275fac=function(n){return new(n||t)(W(Le))};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Qm=class{_root;constructor(i){this._root=i}get root(){return this._root.value}parent(i){let e=this.pathFromRoot(i);return e.length>1?e[e.length-2]:null}children(i){let e=Ev(i,this._root);return e?e.children.map(n=>n.value):[]}firstChild(i){let e=Ev(i,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(i){let e=Mv(i,this._root);return e.length<2?[]:e[e.length-2].children.map(r=>r.value).filter(r=>r!==i)}pathFromRoot(i){return Mv(i,this._root).map(e=>e.value)}};function Ev(t,i){if(t===i.value)return i;for(let e of i.children){let n=Ev(t,e);if(n)return n}return null}function Mv(t,i){if(t===i.value)return[i];for(let e of i.children){let n=Mv(t,e);if(n.length)return n.unshift(i),n}return[]}var In=class{value;children;constructor(i,e){this.value=i,this.children=e}toString(){return`TreeNode(${this.value})`}};function Ka(t){let i={};return t&&t.children.forEach(e=>i[e.value.outlet]=e),i}var ac=class extends Qm{snapshot;constructor(i,e){super(i),this.snapshot=e,Pv(this,i)}toString(){return this.snapshot.toString()}};function $x(t,i){let e=$N(t,i),n=new lt([new Gr("",{})]),r=new lt({}),o=new lt({}),a=new lt({}),s=new lt(""),l=new pr(n,r,a,s,o,ue,t,e.root);return l.snapshot=e.root,new ac(new In(l,[]),e)}function $N(t,i){let e={},n={},r={},a=new as([],e,r,"",n,ue,t,null,{},i);return new sc("",new In(a,[]))}var pr=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(i,e,n,r,o,a,s,l){this.urlSubject=i,this.paramsSubject=e,this.queryParamsSubject=n,this.fragmentSubject=r,this.dataSubject=o,this.outlet=a,this.component=s,this._futureSnapshot=l,this.title=this.dataSubject?.pipe(le(d=>d[dc]))??q(void 0),this.url=i,this.params=e,this.queryParams=n,this.fragment=r,this.data=o}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(le(i=>zo(i))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(le(i=>zo(i))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function Nv(t,i,e="emptyOnly"){let n,{routeConfig:r}=t;return i!==null&&(e==="always"||r?.path===""||!i.component&&!i.routeConfig?.loadComponent)?n={params:C(C({},i.params),t.params),data:C(C({},i.data),t.data),resolve:C(C(C(C({},t.data),i.data),r?.data),t._resolvedData)}:n={params:C({},t.params),data:C({},t.data),resolve:C(C({},t.data),t._resolvedData??{})},r&&Gx(r)&&(n.resolve[dc]=r.title),n}var as=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;get title(){return this.data?.[dc]}constructor(i,e,n,r,o,a,s,l,d,u){this.url=i,this.params=e,this.queryParams=n,this.fragment=r,this.data=o,this.outlet=a,this.component=s,this.routeConfig=l,this._resolve=d,this._environmentInjector=u}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=zo(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=zo(this.queryParams),this._queryParamMap}toString(){let i=this.url.map(n=>n.toString()).join("/"),e=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${i}', path:'${e}')`}},sc=class extends Qm{url;constructor(i,e){super(e),this.url=i,Pv(this,e)}toString(){return Wx(this._root)}};function Pv(t,i){i.value._routerState=t,i.children.forEach(e=>Pv(t,e))}function Wx(t){let i=t.children.length>0?` { ${t.children.map(Wx).join(", ")} } `:"";return`${t.value}${i}`}function vv(t){if(t.snapshot){let i=t.snapshot,e=t._futureSnapshot;t.snapshot=e,Vi(i.queryParams,e.queryParams)||t.queryParamsSubject.next(e.queryParams),i.fragment!==e.fragment&&t.fragmentSubject.next(e.fragment),Vi(i.params,e.params)||t.paramsSubject.next(e.params),vN(i.url,e.url)||t.urlSubject.next(e.url),Vi(i.data,e.data)||t.dataSubject.next(e.data)}else t.snapshot=t._futureSnapshot,t.dataSubject.next(t._futureSnapshot.data)}function Sv(t,i){let e=Vi(t.params,i.params)&&DN(t.url,i.url),n=!t.parent!=!i.parent;return e&&!n&&(!t.parent||Sv(t.parent,i.parent))}function Gx(t){return typeof t.title=="string"||t.title===null}var qx=new y(""),uc=(()=>{class t{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=ue;activateEvents=new I;deactivateEvents=new I;attachEvents=new I;detachEvents=new I;routerOutletData=Sn();parentContexts=c(qo);location=c(It);changeDetector=c(Ie);inputBinder=c(mc,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(e){if(e.name){let{firstChange:n,previousValue:r}=e.name;if(n)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new L(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new L(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new L(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,n){this.activated=e,this._activatedRoute=n,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,n){if(this.isActivated)throw new L(4013,!1);this._activatedRoute=e;let r=this.location,a=e.snapshot.component,s=this.parentContexts.getOrCreateContext(this.name).children,l=new Iv(e,s,r.injector,this.routerOutletData);this.activated=r.createComponent(a,{index:r.length,injector:l,environmentInjector:n}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(n){return new(n||t)};static \u0275dir=N({type:t,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[Be]})}return t})(),Iv=class{route;childContexts;parent;outletData;constructor(i,e,n,r){this.route=i,this.childContexts=e,this.parent=n,this.outletData=r}get(i,e){return i===pr?this.route:i===qo?this.childContexts:i===qx?this.outletData:this.parent.get(i,e)}},mc=new y(""),Fv=(()=>{class t{outletDataSubscriptions=new Map;bindActivatedRouteToOutletComponent(e){this.unsubscribeFromRouteData(e),this.subscribeToRouteData(e)}unsubscribeFromRouteData(e){this.outletDataSubscriptions.get(e)?.unsubscribe(),this.outletDataSubscriptions.delete(e)}subscribeToRouteData(e){let{activatedRoute:n}=e,r=ba([n.queryParams,n.params,n.data]).pipe(gt(([o,a,s],l)=>(s=C(C(C({},o),a),s),l===0?q(s):Promise.resolve(s)))).subscribe(o=>{if(!e.isActivated||!e.activatedComponentRef||e.activatedRoute!==n||n.component===null){this.unsubscribeFromRouteData(e);return}let a=GD(n.component);if(!a){this.unsubscribeFromRouteData(e);return}for(let{templateName:s}of a.inputs)e.activatedComponentRef.setInput(s,o[s])});this.outletDataSubscriptions.set(e,r)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})(),Lv=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=E({type:t,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(n,r){n&1&&T(0,"router-outlet")},dependencies:[uc],encapsulation:2})}return t})();function Vv(t){let i=t.children&&t.children.map(Vv),e=i?ne(C({},t),{children:i}):C({},t);return!e.component&&!e.loadComponent&&(i||e.loadChildren)&&e.outlet&&e.outlet!==ue&&(e.component=Lv),e}function WN(t,i,e){let n=lc(t,i._root,e?e._root:void 0);return new ac(n,i)}function lc(t,i,e){if(e&&t.shouldReuseRoute(i.value,e.value.snapshot)){let n=e.value;n._futureSnapshot=i.value;let r=GN(t,i,e);return new In(n,r)}else{if(t.shouldAttach(i.value)){let o=t.retrieve(i.value);if(o!==null){let a=o.route;return a.value._futureSnapshot=i.value,a.children=i.children.map(s=>lc(t,s)),a}}let n=qN(i.value),r=i.children.map(o=>lc(t,o));return new In(n,r)}}function GN(t,i,e){return i.children.map(n=>{for(let r of e.children)if(t.shouldReuseRoute(n.value,r.value.snapshot))return lc(t,n,r);return lc(t,n)})}function qN(t){return new pr(new lt(t.url),new lt(t.params),new lt(t.queryParams),new lt(t.fragment),new lt(t.data),t.outlet,t.component,t)}var ss=class{redirectTo;navigationBehaviorOptions;constructor(i,e){this.redirectTo=i,this.navigationBehaviorOptions=e}},Yx="ngNavigationCancelingError";function Zm(t,i){let{redirectTo:e,navigationBehaviorOptions:n}=ts(i)?{redirectTo:i,navigationBehaviorOptions:void 0}:i,r=Qx(!1,Zt.Redirect);return r.url=e,r.navigationBehaviorOptions=n,r}function Qx(t,i){let e=new Error(`NavigationCancelingError: ${t||""}`);return e[Yx]=!0,e.cancellationCode=i,e}function YN(t){return Zx(t)&&ts(t.url)}function Zx(t){return!!t&&t[Yx]}var Tv=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(i,e,n,r,o){this.routeReuseStrategy=i,this.futureState=e,this.currState=n,this.forwardEvent=r,this.inputBindingEnabled=o}activate(i){let e=this.futureState._root,n=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,n,i),vv(this.futureState.root),this.activateChildRoutes(e,n,i)}deactivateChildRoutes(i,e,n){let r=Ka(e);i.children.forEach(o=>{let a=o.value.outlet;this.deactivateRoutes(o,r[a],n),delete r[a]}),Object.values(r).forEach(o=>{this.deactivateRouteAndItsChildren(o,n)})}deactivateRoutes(i,e,n){let r=i.value,o=e?e.value:null;if(r===o)if(r.component){let a=n.getContext(r.outlet);a&&this.deactivateChildRoutes(i,e,a.children)}else this.deactivateChildRoutes(i,e,n);else o&&this.deactivateRouteAndItsChildren(e,n)}deactivateRouteAndItsChildren(i,e){i.value.component&&this.routeReuseStrategy.shouldDetach(i.value.snapshot)?this.detachAndStoreRouteSubtree(i,e):this.deactivateRouteAndOutlet(i,e)}detachAndStoreRouteSubtree(i,e){let n=e.getContext(i.value.outlet),r=n&&i.value.component?n.children:e,o=Ka(i);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,r);if(n&&n.outlet){let a=n.outlet.detach(),s=n.children.onOutletDeactivated();this.routeReuseStrategy.store(i.value.snapshot,{componentRef:a,route:i,contexts:s})}}deactivateRouteAndOutlet(i,e){let n=e.getContext(i.value.outlet),r=n&&i.value.component?n.children:e,o=Ka(i);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,r);n&&(n.outlet&&(n.outlet.deactivate(),n.children.onOutletDeactivated()),n.attachRef=null,n.route=null)}activateChildRoutes(i,e,n){let r=Ka(e);i.children.forEach(o=>{this.activateRoutes(o,r[o.value.outlet],n),this.forwardEvent(new qm(o.value.snapshot))}),i.children.length&&this.forwardEvent(new Wm(i.value.snapshot))}activateRoutes(i,e,n){let r=i.value,o=e?e.value:null;if(vv(r),r===o)if(r.component){let a=n.getOrCreateContext(r.outlet);this.activateChildRoutes(i,e,a.children)}else this.activateChildRoutes(i,e,n);else if(r.component){let a=n.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let s=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),a.children.onOutletReAttached(s.contexts),a.attachRef=s.componentRef,a.route=s.route.value,a.outlet&&a.outlet.attach(s.componentRef,s.route.value),vv(s.route.value),this.activateChildRoutes(i,null,a.children)}else a.attachRef=null,a.route=r,a.outlet&&a.outlet.activateWith(r,a.injector),this.activateChildRoutes(i,null,a.children)}else this.activateChildRoutes(i,null,n)}},Km=class{path;route;constructor(i){this.path=i,this.route=this.path[this.path.length-1]}},es=class{component;route;constructor(i,e){this.component=i,this.route=e}};function QN(t,i,e){let n=t._root,r=i?i._root:null;return ec(n,r,e,[n.value])}function ZN(t){let i=t.routeConfig?t.routeConfig.canActivateChild:null;return!i||i.length===0?null:{node:t,guards:i}}function cs(t,i){let e=Symbol(),n=i.get(t,e);return n===e?typeof t=="function"&&!vp(t)?t:i.get(t):n}function ec(t,i,e,n,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=Ka(i);return t.children.forEach(a=>{KN(a,o[a.value.outlet],e,n.concat([a.value]),r),delete o[a.value.outlet]}),Object.entries(o).forEach(([a,s])=>nc(s,e.getContext(a),r)),r}function KN(t,i,e,n,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=t.value,a=i?i.value:null,s=e?e.getContext(t.value.outlet):null;if(a&&o.routeConfig===a.routeConfig){let l=XN(a,o,o.routeConfig.runGuardsAndResolvers);l?r.canActivateChecks.push(new Km(n)):(o.data=a.data,o._resolvedData=a._resolvedData),o.component?ec(t,i,s?s.children:null,n,r):ec(t,i,e,n,r),l&&s&&s.outlet&&s.outlet.isActivated&&r.canDeactivateChecks.push(new es(s.outlet.component,a))}else a&&nc(i,s,r),r.canActivateChecks.push(new Km(n)),o.component?ec(t,null,s?s.children:null,n,r):ec(t,null,e,n,r);return r}function XN(t,i,e){if(typeof e=="function")return Et(i._environmentInjector,()=>e(t,i));switch(e){case"pathParamsChange":return!Uo(t.url,i.url);case"pathParamsOrQueryParamsChange":return!Uo(t.url,i.url)||!Vi(t.queryParams,i.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!Sv(t,i)||!Vi(t.queryParams,i.queryParams);default:return!Sv(t,i)}}function nc(t,i,e){let n=Ka(t),r=t.value;Object.entries(n).forEach(([o,a])=>{r.component?i?nc(a,i.children.getContext(o),e):nc(a,null,e):nc(a,i,e)}),r.component?i&&i.outlet&&i.outlet.isActivated?e.canDeactivateChecks.push(new es(i.outlet.component,r)):e.canDeactivateChecks.push(new es(null,r)):e.canDeactivateChecks.push(new es(null,r))}function fc(t){return typeof t=="function"}function JN(t){return typeof t=="boolean"}function eP(t){return t&&fc(t.canLoad)}function tP(t){return t&&fc(t.canActivate)}function nP(t){return t&&fc(t.canActivateChild)}function iP(t){return t&&fc(t.canDeactivate)}function rP(t){return t&&fc(t.canMatch)}function Kx(t){return t instanceof bo||t?.name==="EmptyError"}var Am=Symbol("INITIAL_VALUE");function ls(){return gt(t=>ba(t.map(i=>i.pipe(rt(1),Qe(Am)))).pipe(le(i=>{for(let e of i)if(e!==!0){if(e===Am)return Am;if(e===!1||oP(e))return e}return!0}),be(i=>i!==Am),rt(1)))}function oP(t){return ts(t)||t instanceof ss}function Xx(t){return t.aborted?q(void 0).pipe(rt(1)):new se(i=>{let e=()=>{i.next(),i.complete()};return t.addEventListener("abort",e),()=>t.removeEventListener("abort",e)})}function Jx(t){return ye(Xx(t))}function aP(t){return Bt(i=>{let{targetSnapshot:e,currentSnapshot:n,guards:{canActivateChecks:r,canDeactivateChecks:o}}=i;return o.length===0&&r.length===0?q(ne(C({},i),{guardsResult:!0})):sP(o,e,n).pipe(Bt(a=>a&&JN(a)?lP(e,r,t):q(a)),le(a=>ne(C({},i),{guardsResult:a})))})}function sP(t,i,e){return $e(t).pipe(Bt(n=>fP(n.component,n.route,e,i)),Ji(n=>n!==!0,!0))}function lP(t,i,e){return $e(i).pipe(kr(n=>Ir(dP(n.route.parent,e),cP(n.route,e),mP(t,n.path),uP(t,n.route))),Ji(n=>n!==!0,!0))}function cP(t,i){return t!==null&&i&&i(new Gm(t)),q(!0)}function dP(t,i){return t!==null&&i&&i(new $m(t)),q(!0)}function uP(t,i){let e=i.routeConfig?i.routeConfig.canActivate:null;if(!e||e.length===0)return q(!0);let n=e.map(r=>ti(()=>{let o=i._environmentInjector,a=cs(r,o),s=tP(a)?a.canActivate(i,t):Et(o,()=>a(i,t));return Wo(s).pipe(Ji())}));return q(n).pipe(ls())}function mP(t,i){let e=i[i.length-1],r=i.slice(0,i.length-1).reverse().map(o=>ZN(o)).filter(o=>o!==null).map(o=>ti(()=>{let a=o.guards.map(s=>{let l=o.node._environmentInjector,d=cs(s,l),u=nP(d)?d.canActivateChild(e,t):Et(l,()=>d(e,t));return Wo(u).pipe(Ji())});return q(a).pipe(ls())}));return q(r).pipe(ls())}function fP(t,i,e,n){let r=i&&i.routeConfig?i.routeConfig.canDeactivate:null;if(!r||r.length===0)return q(!0);let o=r.map(a=>{let s=i._environmentInjector,l=cs(a,s),d=iP(l)?l.canDeactivate(t,i,e,n):Et(s,()=>l(t,i,e,n));return Wo(d).pipe(Ji())});return q(o).pipe(ls())}function hP(t,i,e,n,r){let o=i.canLoad;if(o===void 0||o.length===0)return q(!0);let a=o.map(s=>{let l=cs(s,t),d=eP(l)?l.canLoad(i,e):Et(t,()=>l(i,e)),u=Wo(d);return r?u.pipe(Jx(r)):u});return q(a).pipe(ls(),eE(n))}function eE(t){return Kh(ct(i=>{if(typeof i!="boolean")throw Zm(t,i)}),le(i=>i===!0))}function pP(t,i,e,n,r,o){let a=i.canMatch;if(!a||a.length===0)return q(!0);let s=a.map(l=>{let d=cs(l,t),u=rP(d)?d.canMatch(i,e,r):Et(t,()=>d(i,e,r));return Wo(u).pipe(Jx(o))});return q(s).pipe(ls(),eE(n))}var fr=class t extends Error{segmentGroup;constructor(i){super(),this.segmentGroup=i||null,Object.setPrototypeOf(this,t.prototype)}},cc=class t extends Error{urlTree;constructor(i){super(),this.urlTree=i,Object.setPrototypeOf(this,t.prototype)}};function gP(t){throw new L(4e3,!1)}function _P(t){throw Qx(!1,Zt.GuardRejected)}var kv=class{urlSerializer;urlTree;constructor(i,e){this.urlSerializer=i,this.urlTree=e}async lineralizeSegments(i,e){let n=[],r=e.root;for(;;){if(n=n.concat(r.segments),r.numberOfChildren===0)return n;if(r.numberOfChildren>1||!r.children[ue])throw gP(`${i.redirectTo}`);r=r.children[ue]}}async applyRedirectCommands(i,e,n,r,o){let a=await vP(e,r,o);if(a instanceof $n)throw new cc(a);let s=this.applyRedirectCreateUrlTree(a,this.urlSerializer.parse(a),i,n);if(a[0]==="/")throw new cc(s);return s}applyRedirectCreateUrlTree(i,e,n,r){let o=this.createSegmentGroup(i,e.root,n,r);return new $n(o,this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(i,e){let n={};return Object.entries(i).forEach(([r,o])=>{if(typeof o=="string"&&o[0]===":"){let s=o.substring(1);n[r]=e[s]}else n[r]=o}),n}createSegmentGroup(i,e,n,r){let o=this.createSegments(i,e.segments,n,r),a={};return Object.entries(e.children).forEach(([s,l])=>{a[s]=this.createSegmentGroup(i,l,n,r)}),new Pe(o,a)}createSegments(i,e,n,r){return e.map(o=>o.path[0]===":"?this.findPosParam(i,o,r):this.findOrReturn(o,n))}findPosParam(i,e,n){let r=n[e.path.substring(1)];if(!r)throw new L(4001,!1);return r}findOrReturn(i,e){let n=0;for(let r of e){if(r.path===i.path)return e.splice(n),r;n++}return i}};function vP(t,i,e){if(typeof t=="string")return Promise.resolve(t);let n=t;return Pm(Wo(Et(e,()=>n(i))))}function bP(t,i){return t.providers&&!t._injector&&(t._injector=Ga(t.providers,i,`Route: ${t.path}`)),t._injector??i}function hi(t){return t.outlet||ue}function yP(t,i){let e=t.filter(n=>hi(n)===i);return e.push(...t.filter(n=>hi(n)!==i)),e}var Av={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function tE(t){return{routeConfig:t.routeConfig,url:t.url,params:t.params,queryParams:t.queryParams,fragment:t.fragment,data:t.data,outlet:t.outlet,title:t.title,paramMap:t.paramMap,queryParamMap:t.queryParamMap}}function CP(t,i,e,n,r,o,a){let s=nE(t,i,e);if(!s.matched)return q(s);let l=tE(o(s));return n=bP(i,n),pP(n,i,e,r,l,a).pipe(le(d=>d===!0?s:C({},Av)))}function nE(t,i,e){if(i.path==="")return i.pathMatch==="full"&&(t.hasChildren()||e.length>0)?C({},Av):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let r=(i.matcher||Mx)(e,t,i);if(!r)return C({},Av);let o={};Object.entries(r.posParams??{}).forEach(([s,l])=>{o[s]=l.path});let a=r.consumed.length>0?C(C({},o),r.consumed[r.consumed.length-1].parameters):o;return{matched:!0,consumedSegments:r.consumed,remainingSegments:e.slice(r.consumed.length),parameters:a,positionalParamSegments:r.posParams??{}}}function xx(t,i,e,n,r){return e.length>0&&xP(t,e,n,r)?{segmentGroup:new Pe(i,DP(n,new Pe(e,t.children))),slicedSegments:[]}:e.length===0&&EP(t,e,n)?{segmentGroup:new Pe(t.segments,wP(t,e,n,t.children)),slicedSegments:e}:{segmentGroup:new Pe(t.segments,t.children),slicedSegments:e}}function wP(t,i,e,n){let r={};for(let o of e)if(Jm(t,i,o)&&!n[hi(o)]){let a=new Pe([],{});r[hi(o)]=a}return C(C({},n),r)}function DP(t,i){let e={};e[ue]=i;for(let n of t)if(n.path===""&&hi(n)!==ue){let r=new Pe([],{});e[hi(n)]=r}return e}function xP(t,i,e,n){return e.some(r=>!Jm(t,i,r)||!(hi(r)!==ue)?!1:!(n!==void 0&&hi(r)===n))}function EP(t,i,e){return e.some(n=>Jm(t,i,n))}function Jm(t,i,e){return(t.hasChildren()||i.length>0)&&e.pathMatch==="full"?!1:e.path===""}function MP(t,i,e){return i.length===0&&!t.children[e]}var Rv=class{};async function SP(t,i,e,n,r,o,a="emptyOnly",s){return new Ov(t,i,e,n,r,a,o,s).recognize()}var IP=31,Ov=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(i,e,n,r,o,a,s,l){this.injector=i,this.configLoader=e,this.rootComponentType=n,this.config=r,this.urlTree=o,this.paramsInheritanceStrategy=a,this.urlSerializer=s,this.abortSignal=l,this.applyRedirects=new kv(this.urlSerializer,this.urlTree)}noMatchError(i){return new L(4002,`'${i.segmentGroup}'`)}async recognize(){let i=xx(this.urlTree.root,[],[],this.config).segmentGroup,{children:e,rootSnapshot:n}=await this.match(i),r=new In(n,e),o=new sc("",r),a=Vx(n,[],this.urlTree.queryParams,this.urlTree.fragment);return a.queryParams=this.urlTree.queryParams,o.url=this.urlSerializer.serialize(a),{state:o,tree:a}}async match(i){let e=new as([],Object.freeze({}),Object.freeze(C({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),ue,this.rootComponentType,null,{},this.injector);try{return{children:await this.processSegmentGroup(this.injector,this.config,i,ue,e),rootSnapshot:e}}catch(n){if(n instanceof cc)return this.urlTree=n.urlTree,this.match(n.urlTree.root);throw n instanceof fr?this.noMatchError(n):n}}async processSegmentGroup(i,e,n,r,o){if(n.segments.length===0&&n.hasChildren())return this.processChildren(i,e,n,o);let a=await this.processSegment(i,e,n,n.segments,r,!0,o);return a instanceof In?[a]:[]}async processChildren(i,e,n,r){let o=[];for(let l of Object.keys(n.children))l==="primary"?o.unshift(l):o.push(l);let a=[];for(let l of o){let d=n.children[l],u=yP(e,l),f=await this.processSegmentGroup(i,u,d,l,r);a.push(...f)}let s=iE(a);return TP(s),s}async processSegment(i,e,n,r,o,a,s){for(let l of e)try{return await this.processSegmentAgainstRoute(l._injector??i,e,l,n,r,o,a,s)}catch(d){if(d instanceof fr||Kx(d))continue;throw d}if(MP(n,r,o))return new Rv;throw new fr(n)}async processSegmentAgainstRoute(i,e,n,r,o,a,s,l){if(hi(n)!==a&&(a===ue||!Jm(r,o,n)))throw new fr(r);if(n.redirectTo===void 0)return this.matchSegmentAgainstRoute(i,r,n,o,a,l);if(this.allowRedirects&&s)return this.expandSegmentAgainstRouteUsingRedirect(i,r,e,n,o,a,l);throw new fr(r)}async expandSegmentAgainstRouteUsingRedirect(i,e,n,r,o,a,s){let{matched:l,parameters:d,consumedSegments:u,positionalParamSegments:f,remainingSegments:_}=nE(e,r,o);if(!l)throw new fr(e);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>IP&&(this.allowRedirects=!1));let v=this.createSnapshot(i,r,o,d,s);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let w=await this.applyRedirects.applyRedirectCommands(u,r.redirectTo,f,tE(v),i),F=await this.applyRedirects.lineralizeSegments(r,w);return this.processSegment(i,n,e,F.concat(_),a,!1,s)}createSnapshot(i,e,n,r,o){let a=new as(n,r,Object.freeze(C({},this.urlTree.queryParams)),this.urlTree.fragment,AP(e),hi(e),e.component??e._loadedComponent??null,e,RP(e),i),s=Nv(a,o,this.paramsInheritanceStrategy);return a.params=Object.freeze(s.params),a.data=Object.freeze(s.data),a}async matchSegmentAgainstRoute(i,e,n,r,o,a){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let s=Nt=>this.createSnapshot(i,n,Nt.consumedSegments,Nt.parameters,a),l=await Pm(CP(e,n,r,i,this.urlSerializer,s,this.abortSignal));if(n.path==="**"&&(e.children={}),!l?.matched)throw new fr(e);i=n._injector??i;let{routes:d}=await this.getChildConfig(i,n,r),u=n._loadedInjector??i,{parameters:f,consumedSegments:_,remainingSegments:v}=l,w=this.createSnapshot(i,n,_,f,a),{segmentGroup:F,slicedSegments:U}=xx(e,_,v,d,o);if(U.length===0&&F.hasChildren()){let Nt=await this.processChildren(u,d,F,w);return new In(w,Nt)}if(d.length===0&&U.length===0)return new In(w,[]);let Q=hi(n)===o,Re=await this.processSegment(u,d,F,U,Q?ue:o,!0,w);return new In(w,Re instanceof In?[Re]:[])}async getChildConfig(i,e,n){if(e.children)return{routes:e.children,injector:i};if(e.loadChildren){if(e._loadedRoutes!==void 0){let o=e._loadedNgModuleFactory;return o&&!e._loadedInjector&&(e._loadedInjector=o.create(i).injector),{routes:e._loadedRoutes,injector:e._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(await Pm(hP(i,e,n,this.urlSerializer,this.abortSignal))){let o=await this.configLoader.loadChildren(i,e);return e._loadedRoutes=o.routes,e._loadedInjector=o.injector,e._loadedNgModuleFactory=o.factory,o}throw _P(e)}return{routes:[],injector:i}}};function TP(t){t.sort((i,e)=>i.value.outlet===ue?-1:e.value.outlet===ue?1:i.value.outlet.localeCompare(e.value.outlet))}function kP(t){let i=t.value.routeConfig;return i&&i.path===""}function iE(t){let i=[],e=new Set;for(let n of t){if(!kP(n)){i.push(n);continue}let r=i.find(o=>n.value.routeConfig===o.value.routeConfig);r!==void 0?(r.children.push(...n.children),e.add(r)):i.push(n)}for(let n of e){let r=iE(n.children);i.push(new In(n.value,r))}return i.filter(n=>!e.has(n))}function AP(t){return t.data||{}}function RP(t){return t.resolve||{}}function OP(t,i,e,n,r,o,a){return Bt(async s=>{let{state:l,tree:d}=await SP(t,i,e,n,s.extractedUrl,r,o,a);return ne(C({},s),{targetSnapshot:l,urlAfterRedirects:d})})}function NP(t){return Bt(i=>{let{targetSnapshot:e,guards:{canActivateChecks:n}}=i;if(!n.length)return q(i);let r=new Set(n.map(s=>s.route)),o=new Set;for(let s of r)if(!o.has(s))for(let l of rE(s))o.add(l);let a=0;return $e(o).pipe(kr(s=>r.has(s)?PP(s,e,t):(s.data=Nv(s,s.parent,t).resolve,q(void 0))),ct(()=>a++),Vd(1),Bt(s=>a===o.size?q(i):et))})}function rE(t){let i=t.children.map(e=>rE(e)).flat();return[t,...i]}function PP(t,i,e){let n=t.routeConfig,r=t._resolve;return n?.title!==void 0&&!Gx(n)&&(r[dc]=n.title),ti(()=>(t.data=Nv(t,t.parent,e).resolve,FP(r,t,i).pipe(le(o=>(t._resolvedData=o,t.data=C(C({},t.data),o),null)))))}function FP(t,i,e){let n=yv(t);if(n.length===0)return q({});let r={};return $e(n).pipe(Bt(o=>LP(t[o],i,e).pipe(Ji(),ct(a=>{if(a instanceof ss)throw Zm(new hr,a);r[o]=a}))),Vd(1),le(()=>r),Tr(o=>Kx(o)?et:vo(o)))}function LP(t,i,e){let n=i._environmentInjector,r=cs(t,n),o=r.resolve?r.resolve(i,e):Et(n,()=>r(i,e));return Wo(o)}function Ex(t){return gt(i=>{let e=t(i);return e?$e(e).pipe(le(()=>i)):q(i)})}var Bv=(()=>{class t{buildTitle(e){let n,r=e.root;for(;r!==void 0;)n=this.getResolvedTitleForRoute(r)??n,r=r.children.find(o=>o.outlet===ue);return n}getResolvedTitleForRoute(e){return e.data[dc]}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:()=>c(oE),providedIn:"root"})}return t})(),oE=(()=>{class t extends Bv{title;constructor(e){super(),this.title=e}updateTitle(e){let n=this.buildTitle(e);n!==void 0&&this.title.setTitle(n)}static \u0275fac=function(n){return new(n||t)(W(_x))};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Yo=new y("",{factory:()=>({})}),Qo=new y(""),ef=(()=>{class t{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=c(V_);async loadComponent(e,n){if(this.componentLoaders.get(n))return this.componentLoaders.get(n);if(n._loadedComponent)return Promise.resolve(n._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(n);let r=(async()=>{try{let o=await Ix(Et(e,()=>n.loadComponent())),a=await lE(sE(o));return this.onLoadEndListener&&this.onLoadEndListener(n),n._loadedComponent=a,a}finally{this.componentLoaders.delete(n)}})();return this.componentLoaders.set(n,r),r}loadChildren(e,n){if(this.childrenLoaders.get(n))return this.childrenLoaders.get(n);if(n._loadedRoutes)return Promise.resolve({routes:n._loadedRoutes,injector:n._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(n);let r=(async()=>{try{let o=await aE(n,this.compiler,e,this.onLoadEndListener);return n._loadedRoutes=o.routes,n._loadedInjector=o.injector,n._loadedNgModuleFactory=o.factory,o}finally{this.childrenLoaders.delete(n)}})();return this.childrenLoaders.set(n,r),r}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();async function aE(t,i,e,n){let r=await Ix(Et(e,()=>t.loadChildren())),o=await lE(sE(r)),a;o instanceof rm||Array.isArray(o)?a=o:a=await i.compileModuleAsync(o),n&&n(t);let s,l,d=!1,u;return Array.isArray(a)?(l=a,d=!0):(s=a.create(e).injector,u=a,l=s.get(Qo,[],{optional:!0,self:!0}).flat()),{routes:l.map(Vv),injector:s,factory:u}}function VP(t){return t&&typeof t=="object"&&"default"in t}function sE(t){return VP(t)?t.default:t}async function lE(t){return t}var tf=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:()=>c(BP),providedIn:"root"})}return t})(),BP=(()=>{class t{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,n){return e}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),jv=new y(""),Hv=new y("");function cE(t,i,e){let n=t.get(Hv),r=t.get(Y);if(!r.startViewTransition||n.skipNextTransition)return n.skipNextTransition=!1,new Promise(d=>setTimeout(d));let o,a=new Promise(d=>{o=d}),s=r.startViewTransition(()=>(o(),jP(t)));s.updateCallbackDone.catch(d=>{}),s.ready.catch(d=>{}),s.finished.catch(d=>{});let{onViewTransitionCreated:l}=n;return l&&Et(t,()=>l({transition:s,from:i,to:e})),a}function jP(t){return new Promise(i=>{Ge({read:()=>setTimeout(i)},{injector:t})})}var HP=()=>{},Uv=new y(""),nf=(()=>{class t{currentNavigation=D(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=D(null);events=new S;transitionAbortWithErrorSubject=new S;configLoader=c(ef);environmentInjector=c(Le);destroyRef=c(Ht);urlSerializer=c(Go);rootContexts=c(qo);location=c(Li);inputBindingEnabled=c(mc,{optional:!0})!==null;titleStrategy=c(Bv);options=c(Yo,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=c(tf);createViewTransition=c(jv,{optional:!0});navigationErrorHandler=c(Uv,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>q(void 0);rootComponentType=null;destroyed=!1;constructor(){let e=r=>this.events.next(new Um(r)),n=r=>this.events.next(new zm(r));this.configLoader.onLoadEndListener=n,this.configLoader.onLoadStartListener=e,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(e){let n=++this.navigationId;at(()=>{this.transitions?.next(ne(C({},e),{extractedUrl:this.urlHandlingStrategy.extract(e.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:n,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(e){return this.transitions=new lt(null),this.transitions.pipe(be(n=>n!==null),gt(n=>{let r=!1,o=new AbortController,a=()=>!r&&this.currentTransition?.id===n.id;return q(n).pipe(gt(s=>{if(this.navigationId>n.id)return this.cancelNavigationTransition(n,"",Zt.SupersededByNewNavigation),et;this.currentTransition=n;let l=this.lastSuccessfulNavigation();this.currentNavigation.set({id:s.id,initialUrl:s.rawUrl,extractedUrl:s.extractedUrl,targetBrowserUrl:typeof s.extras.browserUrl=="string"?this.urlSerializer.parse(s.extras.browserUrl):s.extras.browserUrl,trigger:s.source,extras:s.extras,previousNavigation:l?ne(C({},l),{previousNavigation:null}):null,abort:()=>o.abort(),routesRecognizeHandler:s.routesRecognizeHandler,beforeActivateHandler:s.beforeActivateHandler});let d=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),u=s.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!d&&u!=="reload")return this.events.next(new Bi(s.id,this.urlSerializer.serialize(s.rawUrl),"",ns.IgnoredSameUrlNavigation)),s.resolve(!1),et;if(this.urlHandlingStrategy.shouldProcessUrl(s.rawUrl))return q(s).pipe(gt(f=>(this.events.next(new qr(f.id,this.urlSerializer.serialize(f.extractedUrl),f.source,f.restoredState)),f.id!==this.navigationId?et:Promise.resolve(f))),OP(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy,o.signal),ct(f=>{n.targetSnapshot=f.targetSnapshot,n.urlAfterRedirects=f.urlAfterRedirects,this.currentNavigation.update(_=>(_.finalUrl=f.urlAfterRedirects,_)),this.events.next(new oc)}),gt(f=>$e(n.routesRecognizeHandler.deferredHandle??q(void 0)).pipe(le(()=>f))),ct(()=>{let f=new rc(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(f)}));if(d&&this.urlHandlingStrategy.shouldProcessUrl(s.currentRawUrl)){let{id:f,extractedUrl:_,source:v,restoredState:w,extras:F}=s,U=new qr(f,this.urlSerializer.serialize(_),v,w);this.events.next(U);let Q=$x(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=n=ne(C({},s),{targetSnapshot:Q,urlAfterRedirects:_,extras:ne(C({},F),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(Re=>(Re.finalUrl=_,Re)),q(n)}else return this.events.next(new Bi(s.id,this.urlSerializer.serialize(s.extractedUrl),"",ns.IgnoredByUrlHandlingStrategy)),s.resolve(!1),et}),le(s=>{let l=new Vm(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);return this.events.next(l),this.currentTransition=n=ne(C({},s),{guards:QN(s.targetSnapshot,s.currentSnapshot,this.rootContexts)}),n}),aP(s=>this.events.next(s)),gt(s=>{if(n.guardsResult=s.guardsResult,s.guardsResult&&typeof s.guardsResult!="boolean")throw Zm(this.urlSerializer,s.guardsResult);let l=new Bm(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot,!!s.guardsResult);if(this.events.next(l),!a())return et;if(!s.guardsResult)return this.cancelNavigationTransition(s,"",Zt.GuardRejected),et;if(s.guards.canActivateChecks.length===0)return q(s);let d=new jm(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);if(this.events.next(d),!a())return et;let u=!1;return q(s).pipe(NP(this.paramsInheritanceStrategy),ct({next:()=>{u=!0;let f=new Hm(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(f)},complete:()=>{u||this.cancelNavigationTransition(s,"",Zt.NoDataFromResolver)}}))}),Ex(s=>{let l=u=>{let f=[];if(u.routeConfig?._loadedComponent)u.component=u.routeConfig?._loadedComponent;else if(u.routeConfig?.loadComponent){let _=u._environmentInjector;f.push(this.configLoader.loadComponent(_,u.routeConfig).then(v=>{u.component=v}))}for(let _ of u.children)f.push(...l(_));return f},d=l(s.targetSnapshot.root);return d.length===0?q(s):$e(Promise.all(d).then(()=>s))}),Ex(()=>this.afterPreactivation()),gt(()=>{let{currentSnapshot:s,targetSnapshot:l}=n,d=this.createViewTransition?.(this.environmentInjector,s.root,l.root);return d?$e(d).pipe(le(()=>n)):q(n)}),rt(1),gt(s=>{let l=WN(e.routeReuseStrategy,s.targetSnapshot,s.currentRouterState);this.currentTransition=n=s=ne(C({},s),{targetRouterState:l}),this.currentNavigation.update(u=>(u.targetRouterState=l,u)),this.events.next(new rs);let d=n.beforeActivateHandler.deferredHandle;return d?$e(d.then(()=>s)):q(s)}),ct(s=>{new Tv(e.routeReuseStrategy,n.targetRouterState,n.currentRouterState,l=>this.events.next(l),this.inputBindingEnabled).activate(this.rootContexts),a()&&(r=!0,this.currentNavigation.update(l=>(l.abort=HP,l)),this.lastSuccessfulNavigation.set(at(this.currentNavigation)),this.events.next(new pi(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects))),this.titleStrategy?.updateTitle(s.targetRouterState.snapshot),s.resolve(!0))}),ye(Xx(o.signal).pipe(be(()=>!r&&!n.targetRouterState),ct(()=>{this.cancelNavigationTransition(n,o.signal.reason+"",Zt.Aborted)}))),ct({complete:()=>{r=!0}}),ye(this.transitionAbortWithErrorSubject.pipe(ct(s=>{throw s}))),Ar(()=>{o.abort(),r||this.cancelNavigationTransition(n,"",Zt.SupersededByNewNavigation),this.currentTransition?.id===n.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),Tr(s=>{if(r=!0,this.destroyed)return n.resolve(!1),et;if(Zx(s))this.events.next(new zn(n.id,this.urlSerializer.serialize(n.extractedUrl),s.message,s.cancellationCode)),YN(s)?this.events.next(new os(s.url,s.navigationBehaviorOptions)):n.resolve(!1);else{let l=new $o(n.id,this.urlSerializer.serialize(n.extractedUrl),s,n.targetSnapshot??void 0);try{let d=Et(this.environmentInjector,()=>this.navigationErrorHandler?.(l));if(d instanceof ss){let{message:u,cancellationCode:f}=Zm(this.urlSerializer,d);this.events.next(new zn(n.id,this.urlSerializer.serialize(n.extractedUrl),u,f)),this.events.next(new os(d.redirectTo,d.navigationBehaviorOptions))}else throw this.events.next(l),s}catch(d){this.options.resolveNavigationPromiseOnError?n.resolve(!1):n.reject(d)}}return et}))}))}cancelNavigationTransition(e,n,r){let o=new zn(e.id,this.urlSerializer.serialize(e.extractedUrl),n,r);this.events.next(o),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),n=at(this.currentNavigation),r=n?.targetBrowserUrl??n?.extractedUrl;return e.toString()!==r?.toString()&&!n?.extras.skipLocationChange}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function UP(t){return t!==Ja}var dE=new y("");var uE=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:()=>c(zP),providedIn:"root"})}return t})(),Xm=class{shouldDetach(i){return!1}store(i,e){}shouldAttach(i){return!1}retrieve(i){return null}shouldReuseRoute(i,e){return i.routeConfig===e.routeConfig}shouldDestroyInjector(i){return!0}},zP=(()=>{class t extends Xm{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ze(t)))(r||t)}})();static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),zv=(()=>{class t{urlSerializer=c(Go);options=c(Yo,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=c(Li);urlHandlingStrategy=c(tf);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new $n;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:e,initialUrl:n,targetBrowserUrl:r}){let o=e!==void 0?this.urlHandlingStrategy.merge(e,n):n,a=r??o;return a instanceof $n?this.urlSerializer.serialize(a):a}commitTransition({targetRouterState:e,finalUrl:n,initialUrl:r}){n&&e?(this.currentUrlTree=n,this.rawUrlTree=this.urlHandlingStrategy.merge(n,r),this.routerState=e):this.rawUrlTree=r}routerState=$x(null,c(Le));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:()=>c($P),providedIn:"root"})}return t})(),$P=(()=>{class t extends zv{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(n=>{n.type==="popstate"&&setTimeout(()=>{e(n.url,n.state,"popstate",{replaceUrl:!0})})})}handleRouterEvent(e,n){e instanceof qr?this.updateStateMemento():e instanceof Bi?this.commitTransition(n):e instanceof rc?this.urlUpdateStrategy==="eager"&&(n.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(n),n)):e instanceof rs?(this.commitTransition(n),this.urlUpdateStrategy==="deferred"&&!n.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(n),n)):e instanceof zn&&!zx(e)?this.restoreHistory(n):e instanceof $o?this.restoreHistory(n,!0):e instanceof pi&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,{extras:n,id:r}){let{replaceUrl:o,state:a}=n;if(this.location.isCurrentPathEqualTo(e)||o){let s=this.browserPageId,l=C(C({},a),this.generateNgRouterState(r,s));this.location.replaceState(e,"",l)}else{let s=C(C({},a),this.generateNgRouterState(r,this.browserPageId+1));this.location.go(e,"",s)}}restoreHistory(e,n=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,o=this.currentPageId-r;o!==0?this.location.historyGo(o):this.getCurrentUrlTree()===e.finalUrl&&o===0&&(this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(n&&this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:e}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,n){return this.canceledNavigationResolution==="computed"?{navigationId:e,\u0275routerPageId:n}:{navigationId:e}}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ze(t)))(r||t)}})();static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function rf(t,i){t.events.pipe(be(e=>e instanceof pi||e instanceof zn||e instanceof $o||e instanceof Bi),le(e=>e instanceof pi||e instanceof Bi?0:(e instanceof zn?e.code===Zt.Redirect||e.code===Zt.SupersededByNewNavigation:!1)?2:1),be(e=>e!==2),rt(1)).subscribe(()=>{i()})}var dn=(()=>{class t{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=c(om);stateManager=c(zv);options=c(Yo,{optional:!0})||{};pendingTasks=c(rr);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=c(nf);urlSerializer=c(Go);location=c(Li);urlHandlingStrategy=c(tf);injector=c(Le);_events=new S;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=c(uE);injectorCleanup=c(dE,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=c(Qo,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!c(mc,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:e=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new ae;subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(n=>{try{let r=this.navigationTransitions.currentTransition,o=at(this.navigationTransitions.currentNavigation);if(r!==null&&o!==null){if(this.stateManager.handleRouterEvent(n,o),n instanceof zn&&n.code!==Zt.Redirect&&n.code!==Zt.SupersededByNewNavigation)this.navigated=!0;else if(n instanceof pi)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(n instanceof os){let a=n.navigationBehaviorOptions,s=this.urlHandlingStrategy.merge(n.url,r.currentRawUrl),l=C({scroll:r.extras.scroll,browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||UP(r.source)},a);this.scheduleNavigation(s,Ja,null,l,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}zN(n)&&this._events.next(n)}catch(r){this.navigationTransitions.transitionAbortWithErrorSubject.next(r)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),Ja,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,n,r,o)=>{this.navigateToSyncWithBrowser(e,r,n,o)})}navigateToSyncWithBrowser(e,n,r,o){let a=r?.navigationId?r:null;if(r){let l=C({},r);delete l.navigationId,delete l.\u0275routerPageId,Object.keys(l).length!==0&&(o.state=l)}let s=this.parseUrl(e);this.scheduleNavigation(s,n,a,o).catch(l=>{this.disposed||this.injector.get(En)(l)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return at(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map(Vv),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,n={}){let{relativeTo:r,queryParams:o,fragment:a,queryParamsHandling:s,preserveFragment:l}=n,d=l?this.currentUrlTree.fragment:a,u=null;switch(s??this.options.defaultQueryParamsHandling){case"merge":u=C(C({},this.currentUrlTree.queryParams),o);break;case"preserve":u=this.currentUrlTree.queryParams;break;default:u=o||null}u!==null&&(u=this.removeEmptyProps(u));let f;try{let _=r?r.snapshot:this.routerState.snapshot.root;f=Bx(_)}catch{(typeof e[0]!="string"||e[0][0]!=="/")&&(e=[]),f=this.currentUrlTree.root}return jx(f,e,u,d??null,this.urlSerializer)}navigateByUrl(e,n={skipLocationChange:!1}){let r=ts(e)?e:this.parseUrl(e),o=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(o,Ja,null,n)}navigate(e,n={skipLocationChange:!1}){return WP(e),this.navigateByUrl(this.createUrlTree(e,n),n)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch{return this.console.warn(Nn(4018,!1)),this.urlSerializer.parse("/")}}isActive(e,n){let r;if(n===!0?r=C({},kx):n===!1?r=C({},Cv):r=C(C({},Cv),n),ts(e))return bx(this.currentUrlTree,e,r);let o=this.parseUrl(e);return bx(this.currentUrlTree,o,r)}removeEmptyProps(e){return Object.entries(e).reduce((n,[r,o])=>(o!=null&&(n[r]=o),n),{})}scheduleNavigation(e,n,r,o,a){if(this.disposed)return Promise.resolve(!1);let s,l,d;a?(s=a.resolve,l=a.reject,d=a.promise):d=new Promise((f,_)=>{s=f,l=_});let u=this.pendingTasks.add();return rf(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(u))}),this.navigationTransitions.handleNavigationRequest({source:n,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:o,resolve:s,reject:l,promise:d,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),d.catch(Promise.reject.bind(Promise))}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function WP(t){for(let i=0;i<t.length;i++)if(t[i]==null)throw new L(4008,!1)}var hc=class{};var mE=(()=>{class t{router;injector;preloadingStrategy;loader;subscription;constructor(e,n,r,o){this.router=e,this.injector=n,this.preloadingStrategy=r,this.loader=o}setUpPreloading(){this.subscription=this.router.events.pipe(be(e=>e instanceof pi),kr(()=>this.preload())).subscribe(()=>{})}preload(){return this.processRoutes(this.injector,this.router.config)}ngOnDestroy(){this.subscription?.unsubscribe()}processRoutes(e,n){let r=[];for(let o of n){o.providers&&!o._injector&&(o._injector=Ga(o.providers,e,""));let a=o._injector??e;o._loadedNgModuleFactory&&!o._loadedInjector&&(o._loadedInjector=o._loadedNgModuleFactory.create(a).injector);let s=o._loadedInjector??a;(o.loadChildren&&!o._loadedRoutes&&o.canLoad===void 0||o.loadComponent&&!o._loadedComponent)&&r.push(this.preloadConfig(a,o)),(o.children||o._loadedRoutes)&&r.push(this.processRoutes(s,o.children??o._loadedRoutes))}return $e(r).pipe(Sr())}preloadConfig(e,n){return this.preloadingStrategy.preload(n,()=>{if(e.destroyed)return q(null);let r;n.loadChildren&&n.canLoad===void 0?r=$e(this.loader.loadChildren(e,n)):r=q(null);let o=r.pipe(Bt(a=>a===null?q(void 0):(n._loadedRoutes=a.routes,n._loadedInjector=a.injector,n._loadedNgModuleFactory=a.factory,this.processRoutes(a.injector??e,a.routes))));if(n.loadComponent&&!n._loadedComponent){let a=this.loader.loadComponent(e,n);return $e([o,a]).pipe(Sr())}else return o})}static \u0275fac=function(n){return new(n||t)(W(dn),W(Le),W(hc),W(ef))};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),fE=new y(""),qP=(()=>{class t{options;routerEventsSubscription;scrollEventsSubscription;lastId=0;lastSource=Ja;restoredId=0;store={};urlSerializer=c(Go);zone=c(V);viewportScroller=c(K_);transitions=c(nf);constructor(e){this.options=e,this.options.scrollPositionRestoration||="disabled",this.options.anchorScrolling||="disabled"}init(){this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.setHistoryScrollRestoration("manual"),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.transitions.events.subscribe(e=>{e instanceof qr?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=e.navigationTrigger,this.restoredId=e.restoredState?e.restoredState.navigationId:0):e instanceof pi?(this.lastId=e.id,this.scheduleScrollEvent(e,this.urlSerializer.parse(e.urlAfterRedirects).fragment)):e instanceof Bi&&e.code===ns.IgnoredSameUrlNavigation&&(this.lastSource=void 0,this.restoredId=0,this.scheduleScrollEvent(e,this.urlSerializer.parse(e.url).fragment))})}consumeScrollEvents(){return this.transitions.events.subscribe(e=>{if(!(e instanceof is)||e.scrollBehavior==="manual")return;let n={behavior:"instant"};e.position?this.options.scrollPositionRestoration==="top"?this.viewportScroller.scrollToPosition([0,0],n):this.options.scrollPositionRestoration==="enabled"&&this.viewportScroller.scrollToPosition(e.position,n):e.anchor&&this.options.anchorScrolling==="enabled"?this.viewportScroller.scrollToAnchor(e.anchor):this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.scrollToPosition([0,0])})}scheduleScrollEvent(e,n){let r=at(this.transitions.currentNavigation)?.extras.scroll;this.zone.runOutsideAngular(async()=>{await new Promise(o=>{setTimeout(o),typeof requestAnimationFrame<"u"&&requestAnimationFrame(o)}),this.zone.run(()=>{this.transitions.events.next(new is(e,this.lastSource==="popstate"?this.store[this.restoredId]:null,n,r))})})}ngOnDestroy(){this.routerEventsSubscription?.unsubscribe(),this.scrollEventsSubscription?.unsubscribe()}static \u0275fac=function(n){Ll()};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})();function Wv(t,...i){return Ei([{provide:Qo,multi:!0,useValue:t},[],{provide:pr,useFactory:hE},{provide:Bl,multi:!0,useFactory:pE},i.map(e=>e.\u0275providers)])}function hE(){return c(dn).routerState.root}function pc(t,i){return{\u0275kind:t,\u0275providers:i}}function pE(){let t=c(G);return i=>{let e=t.get(Mn);if(i!==e.components[0])return;let n=t.get(dn),r=t.get(gE);t.get(Gv)===1&&n.initialNavigation(),t.get(bE,null,{optional:!0})?.setUpPreloading(),t.get(fE,null,{optional:!0})?.init(),n.resetRootComponentType(e.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var gE=new y("",{factory:()=>new S}),Gv=new y("",{factory:()=>1});function _E(){let t=[{provide:$u,useValue:!0},{provide:Gv,useValue:0},sm(()=>{let i=c(G);return i.get(z_,Promise.resolve()).then(()=>new Promise(n=>{let r=i.get(dn),o=i.get(gE);rf(r,()=>{n(!0)}),i.get(nf).afterPreactivation=()=>(n(!0),o.closed?q(void 0):o),r.initialNavigation()}))})];return pc(2,t)}function vE(){let t=[sm(()=>{c(dn).setUpLocationChangeListener()}),{provide:Gv,useValue:2}];return pc(3,t)}var bE=new y("");function yE(t){return pc(0,[{provide:bE,useExisting:mE},{provide:hc,useExisting:t}])}function CE(){return pc(8,[Fv,{provide:mc,useExisting:Fv}])}function wE(t){li("NgRouterViewTransitions");let i=[{provide:jv,useValue:cE},{provide:Hv,useValue:C({skipNextTransition:!!t?.skipInitialTransition},t)}];return pc(9,i)}var DE=[Li,{provide:Go,useClass:hr},dn,qo,{provide:pr,useFactory:hE},ef,[]],qv=(()=>{class t{constructor(){}static forRoot(e,n){return{ngModule:t,providers:[DE,[],{provide:Qo,multi:!0,useValue:e},[],n?.errorHandler?{provide:Uv,useValue:n.errorHandler}:[],{provide:Yo,useValue:n||{}},n?.useHash?QP():ZP(),YP(),n?.preloadingStrategy?yE(n.preloadingStrategy).\u0275providers:[],n?.initialNavigation?KP(n):[],n?.bindToComponentInputs?CE().\u0275providers:[],n?.enableViewTransitions?wE().\u0275providers:[],XP()]}}static forChild(e){return{ngModule:t,providers:[{provide:Qo,multi:!0,useValue:e}]}}static \u0275fac=function(n){return new(n||t)};static \u0275mod=$({type:t});static \u0275inj=z({})}return t})();function YP(){return{provide:fE,useFactory:()=>{let t=c(K_),i=c(Yo);return i.scrollOffset&&t.setOffset(i.scrollOffset),new qP(i)}}}function QP(){return{provide:mr,useClass:G_}}function ZP(){return{provide:mr,useClass:vm}}function KP(t){return[t.initialNavigation==="disabled"?vE().\u0275providers:[],t.initialNavigation==="enabledBlocking"?_E().\u0275providers:[]]}var $v=new y("");function XP(){return[{provide:$v,useFactory:pE},{provide:Bl,multi:!0,useExisting:$v}]}var eF=new y("cdk-dir-doc",{providedIn:"root",factory:()=>c(Y)}),tF=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function xE(t){let i=t?.toLowerCase()||"";return i==="auto"&&typeof navigator<"u"&&navigator?.language?tF.test(navigator.language)?"rtl":"ltr":i==="rtl"?"rtl":"ltr"}var it=(()=>{class t{get value(){return this.valueSignal()}valueSignal=D("ltr");change=new I;constructor(){let e=c(eF,{optional:!0});if(e){let n=e.body?e.body.dir:null,r=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(xE(n||r||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var ve=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=$({type:t});static \u0275inj=z({})}return t})();var nF=["*"];var iF=[[["","mat-card-avatar",""],["","matCardAvatar",""]],[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],"*"],rF=["[mat-card-avatar], [matCardAvatar]",`mat-card-title, mat-card-subtitle,
      [mat-card-title], [mat-card-subtitle],
      [matCardTitle], [matCardSubtitle]`,"*"],oF=new y("MAT_CARD_CONFIG"),Ct=(()=>{class t{appearance;constructor(){let e=c(oF,{optional:!0});this.appearance=e?.appearance||"raised"}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=E({type:t,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(n,r){n&2&&P("mat-mdc-card-outlined",r.appearance==="outlined")("mdc-card--outlined",r.appearance==="outlined")("mat-mdc-card-filled",r.appearance==="filled")("mdc-card--filled",r.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:nF,decls:1,vars:0,template:function(n,r){n&1&&(Se(),te(0))},styles:[`.mat-mdc-card {
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
`],encapsulation:2,changeDetection:0})}return t})(),ds=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=N({type:t,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-mdc-card-title"]})}return t})();var un=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=N({type:t,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"]})}return t})(),EE=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=N({type:t,selectors:[["mat-card-subtitle"],["","mat-card-subtitle",""],["","matCardSubtitle",""]],hostAttrs:[1,"mat-mdc-card-subtitle"]})}return t})();var mn=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=E({type:t,selectors:[["mat-card-header"]],hostAttrs:[1,"mat-mdc-card-header"],ngContentSelectors:rF,decls:4,vars:0,consts:[[1,"mat-mdc-card-header-text"]],template:function(n,r){n&1&&(Se(iF),te(0),Ce(1,"div",0),te(2,1),Me(),te(3,2))},encapsulation:2,changeDetection:0})}return t})();var ME=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=N({type:t,selectors:[["","mat-card-avatar",""],["","matCardAvatar",""]],hostAttrs:[1,"mat-mdc-card-avatar"]})}return t})();var Wn=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=$({type:t});static \u0275inj=z({imports:[ve]})}return t})();function _c(t){return t.buttons===0||t.detail===0}function vc(t){let i=t.touches&&t.touches[0]||t.changedTouches&&t.changedTouches[0];return!!i&&i.identifier===-1&&(i.radiusX==null||i.radiusX===1)&&(i.radiusY==null||i.radiusY===1)}var Yv;function SE(){if(Yv==null){let t=typeof document<"u"?document.head:null;Yv=!!(t&&(t.createShadowRoot||t.attachShadow))}return Yv}function Qv(t){if(SE()){let i=t.getRootNode?t.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&i instanceof ShadowRoot)return i}return null}function ji(){let t=typeof document<"u"&&document?document.activeElement:null;for(;t&&t.shadowRoot;){let i=t.shadowRoot.activeElement;if(i===t)break;t=i}return t}function $t(t){return t.composedPath?t.composedPath()[0]:t.target}var Zv;try{Zv=typeof Intl<"u"&&Intl.v8BreakIterator}catch{Zv=!1}var me=(()=>{class t{_platformId=c(Vo);isBrowser=this._platformId?KD(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||Zv)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var bc;function IE(){if(bc==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>bc=!0}))}finally{bc=bc||!1}return bc}function us(t){return IE()?t:!!t.capture}function kn(t,i=0){return TE(t)?Number(t):arguments.length===2?i:0}function TE(t){return!isNaN(parseFloat(t))&&!isNaN(Number(t))}function rn(t){return t instanceof B?t.nativeElement:t}var kE=new y("cdk-input-modality-detector-options"),AE={ignoreKeys:[18,17,224,91,16]},RE=650,Kv={passive:!0,capture:!0},OE=(()=>{class t{_platform=c(me);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new lt(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(n=>n===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=$t(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<RE||(this._modality.next(_c(e)?"keyboard":"mouse"),this._mostRecentTarget=$t(e))};_onTouchstart=e=>{if(vc(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=$t(e)};constructor(){let e=c(V),n=c(Y),r=c(kE,{optional:!0});if(this._options=C(C({},AE),r),this.modalityDetected=this._modality.pipe(yo(1)),this.modalityChanged=this.modalityDetected.pipe(Ld()),this._platform.isBrowser){let o=c(vt).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[o.listen(n,"keydown",this._onKeydown,Kv),o.listen(n,"mousedown",this._onMousedown,Kv),o.listen(n,"touchstart",this._onTouchstart,Kv)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),yc=(function(t){return t[t.IMMEDIATE=0]="IMMEDIATE",t[t.EVENTUAL=1]="EVENTUAL",t})(yc||{}),NE=new y("cdk-focus-monitor-default-options"),of=us({passive:!0,capture:!0}),Hi=(()=>{class t{_ngZone=c(V);_platform=c(me);_inputModalityDetector=c(OE);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=c(Y);_stopInputModalityDetector=new S;constructor(){let e=c(NE,{optional:!0});this._detectionMode=e?.detectionMode||yc.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let n=$t(e);for(let r=n;r;r=r.parentElement)e.type==="focus"?this._onFocus(e,r):this._onBlur(e,r)};monitor(e,n=!1){let r=rn(e);if(!this._platform.isBrowser||r.nodeType!==1)return q();let o=Qv(r)||this._document,a=this._elementInfo.get(r);if(a)return n&&(a.checkChildren=!0),a.subject;let s={checkChildren:n,subject:new S,rootNode:o};return this._elementInfo.set(r,s),this._registerGlobalListeners(s),s.subject}stopMonitoring(e){let n=rn(e),r=this._elementInfo.get(n);r&&(r.subject.complete(),this._setClasses(n),this._elementInfo.delete(n),this._removeGlobalListeners(r))}focusVia(e,n,r){let o=rn(e),a=this._document.activeElement;o===a?this._getClosestElementsInfo(o).forEach(([s,l])=>this._originChanged(s,n,l)):(this._setOrigin(n),typeof o.focus=="function"&&o.focus(r))}ngOnDestroy(){this._elementInfo.forEach((e,n)=>this.stopMonitoring(n))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===yc.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,n){e.classList.toggle("cdk-focused",!!n),e.classList.toggle("cdk-touch-focused",n==="touch"),e.classList.toggle("cdk-keyboard-focused",n==="keyboard"),e.classList.toggle("cdk-mouse-focused",n==="mouse"),e.classList.toggle("cdk-program-focused",n==="program")}_setOrigin(e,n=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&n,this._detectionMode===yc.IMMEDIATE){clearTimeout(this._originTimeoutId);let r=this._originFromTouchInteraction?RE:1;this._originTimeoutId=setTimeout(()=>this._origin=null,r)}})}_onFocus(e,n){let r=this._elementInfo.get(n),o=$t(e);!r||!r.checkChildren&&n!==o||this._originChanged(n,this._getFocusOrigin(o),r)}_onBlur(e,n){let r=this._elementInfo.get(n);!r||r.checkChildren&&e.relatedTarget instanceof Node&&n.contains(e.relatedTarget)||(this._setClasses(n),this._emitOrigin(r,null))}_emitOrigin(e,n){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(n))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let n=e.rootNode,r=this._rootNodeFocusListenerCount.get(n)||0;r||this._ngZone.runOutsideAngular(()=>{n.addEventListener("focus",this._rootNodeFocusAndBlurListener,of),n.addEventListener("blur",this._rootNodeFocusAndBlurListener,of)}),this._rootNodeFocusListenerCount.set(n,r+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(ye(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(e){let n=e.rootNode;if(this._rootNodeFocusListenerCount.has(n)){let r=this._rootNodeFocusListenerCount.get(n);r>1?this._rootNodeFocusListenerCount.set(n,r-1):(n.removeEventListener("focus",this._rootNodeFocusAndBlurListener,of),n.removeEventListener("blur",this._rootNodeFocusAndBlurListener,of),this._rootNodeFocusListenerCount.delete(n))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,n,r){this._setClasses(e,n),this._emitOrigin(r,n),this._lastFocusOrigin=n}_getClosestElementsInfo(e){let n=[];return this._elementInfo.forEach((r,o)=>{(o===e||r.checkChildren&&o.contains(e))&&n.push([o,r])}),n}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:n,mostRecentModality:r}=this._inputModalityDetector;if(r!=="mouse"||!n||n===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let o=e.labels;if(o){for(let a=0;a<o.length;a++)if(o[a].contains(n))return!0}return!1}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Cc=(()=>{class t{_elementRef=c(B);_focusMonitor=c(Hi);_monitorSubscription;_focusOrigin=null;cdkFocusChange=new I;constructor(){}get focusOrigin(){return this._focusOrigin}ngAfterViewInit(){let e=this._elementRef.nativeElement;this._monitorSubscription=this._focusMonitor.monitor(e,e.nodeType===1&&e.hasAttribute("cdkMonitorSubtreeFocus")).subscribe(n=>{this._focusOrigin=n,this.cdkFocusChange.emit(n)})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._monitorSubscription?.unsubscribe()}static \u0275fac=function(n){return new(n||t)};static \u0275dir=N({type:t,selectors:[["","cdkMonitorElementFocus",""],["","cdkMonitorSubtreeFocus",""]],outputs:{cdkFocusChange:"cdkFocusChange"},exportAs:["cdkMonitorFocus"]})}return t})();var af=new WeakMap,qe=(()=>{class t{_appRef;_injector=c(G);_environmentInjector=c(Le);load(e){let n=this._appRef=this._appRef||this._injector.get(Mn),r=af.get(n);r||(r={loaders:new Set,refs:[]},af.set(n,r),n.onDestroy(()=>{af.get(n)?.refs.forEach(o=>o.destroy()),af.delete(n)})),r.loaders.has(e)||(r.loaders.add(e),r.refs.push(pm(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Ui=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=E({type:t,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(n,r){},styles:[`.cdk-visually-hidden {
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
`],encapsulation:2,changeDetection:0})}return t})(),sf;function aF(){if(sf===void 0&&(sf=null,typeof window<"u")){let t=window;t.trustedTypes!==void 0&&(sf=t.trustedTypes.createPolicy("angular#components",{createHTML:i=>i}))}return sf}function Zo(t){return aF()?.createHTML(t)||t}function PE(t,i,e){let n=e.sanitize(Ut.HTML,i);t.innerHTML=Zo(n||"")}function ms(t){return Array.isArray(t)?t:[t]}var FE=new Set,Ko,fs=(()=>{class t{_platform=c(me);_nonce=c($a,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):lF}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&sF(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function sF(t,i){if(!FE.has(t))try{Ko||(Ko=document.createElement("style"),i&&Ko.setAttribute("nonce",i),Ko.setAttribute("type","text/css"),document.head.appendChild(Ko)),Ko.sheet&&(Ko.sheet.insertRule(`@media ${t} {body{ }}`,0),FE.add(t))}catch(e){console.error(e)}}function lF(t){return{matches:t==="all"||t==="",media:t,addListener:()=>{},removeListener:()=>{}}}var wc=(()=>{class t{_mediaMatcher=c(fs);_zone=c(V);_queries=new Map;_destroySubject=new S;constructor(){}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return LE(ms(e)).some(r=>this._registerQuery(r).mql.matches)}observe(e){let r=LE(ms(e)).map(a=>this._registerQuery(a).observable),o=ba(r);return o=Ir(o.pipe(rt(1)),o.pipe(yo(1),Xi(0))),o.pipe(le(a=>{let s={matches:!1,breakpoints:{}};return a.forEach(({matches:l,query:d})=>{s.matches=s.matches||l,s.breakpoints[d]=l}),s}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);let n=this._mediaMatcher.matchMedia(e),o={observable:new se(a=>{let s=l=>this._zone.run(()=>a.next(l));return n.addListener(s),()=>{n.removeListener(s)}}).pipe(Qe(n),le(({matches:a})=>({query:e,matches:a})),ye(this._destroySubject)),mql:n};return this._queries.set(e,o),o}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function LE(t){return t.map(i=>i.split(",")).reduce((i,e)=>i.concat(e)).map(i=>i.trim())}function cF(t){if(t.type==="characterData"&&t.target instanceof Comment)return!0;if(t.type==="childList"){for(let i=0;i<t.addedNodes.length;i++)if(!(t.addedNodes[i]instanceof Comment))return!1;for(let i=0;i<t.removedNodes.length;i++)if(!(t.removedNodes[i]instanceof Comment))return!1;return!0}return!1}var VE=(()=>{class t{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),BE=(()=>{class t{_mutationObserverFactory=c(VE);_observedElements=new Map;_ngZone=c(V);constructor(){}ngOnDestroy(){this._observedElements.forEach((e,n)=>this._cleanupObserver(n))}observe(e){let n=rn(e);return new se(r=>{let a=this._observeElement(n).pipe(le(s=>s.filter(l=>!cF(l))),be(s=>!!s.length)).subscribe(s=>{this._ngZone.run(()=>{r.next(s)})});return()=>{a.unsubscribe(),this._unobserveElement(n)}})}_observeElement(e){return this._ngZone.runOutsideAngular(()=>{if(this._observedElements.has(e))this._observedElements.get(e).count++;else{let n=new S,r=this._mutationObserverFactory.create(o=>n.next(o));r&&r.observe(e,{characterData:!0,childList:!0,subtree:!0}),this._observedElements.set(e,{observer:r,stream:n,count:1})}return this._observedElements.get(e).stream})}_unobserveElement(e){this._observedElements.has(e)&&(this._observedElements.get(e).count--,this._observedElements.get(e).count||this._cleanupObserver(e))}_cleanupObserver(e){if(this._observedElements.has(e)){let{observer:n,stream:r}=this._observedElements.get(e);n&&n.disconnect(),r.complete(),this._observedElements.delete(e)}}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Dc=(()=>{class t{_contentObserver=c(BE);_elementRef=c(B);event=new I;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._disabled?this._unsubscribe():this._subscribe()}_disabled=!1;get debounce(){return this._debounce}set debounce(e){this._debounce=kn(e),this._subscribe()}_debounce;_currentSubscription=null;constructor(){}ngAfterContentInit(){!this._currentSubscription&&!this.disabled&&this._subscribe()}ngOnDestroy(){this._unsubscribe()}_subscribe(){this._unsubscribe();let e=this._contentObserver.observe(this._elementRef);this._currentSubscription=(this.debounce?e.pipe(Xi(this.debounce)):e).subscribe(this.event)}_unsubscribe(){this._currentSubscription?.unsubscribe()}static \u0275fac=function(n){return new(n||t)};static \u0275dir=N({type:t,selectors:[["","cdkObserveContent",""]],inputs:{disabled:[2,"cdkObserveContentDisabled","disabled",Z],debounce:"debounce"},outputs:{event:"cdkObserveContent"},exportAs:["cdkObserveContent"]})}return t})(),hs=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=$({type:t});static \u0275inj=z({providers:[VE]})}return t})();var eb=(()=>{class t{_platform=c(me);constructor(){}isDisabled(e){return e.hasAttribute("disabled")}isVisible(e){return uF(e)&&getComputedStyle(e).visibility==="visible"}isTabbable(e){if(!this._platform.isBrowser)return!1;let n=dF(bF(e));if(n&&(jE(n)===-1||!this.isVisible(n)))return!1;let r=e.nodeName.toLowerCase(),o=jE(e);return e.hasAttribute("contenteditable")?o!==-1:r==="iframe"||r==="object"||this._platform.WEBKIT&&this._platform.IOS&&!_F(e)?!1:r==="audio"?e.hasAttribute("controls")?o!==-1:!1:r==="video"?o===-1?!1:o!==null?!0:this._platform.FIREFOX||e.hasAttribute("controls"):e.tabIndex>=0}isFocusable(e,n){return vF(e)&&!this.isDisabled(e)&&(n?.ignoreVisibility||this.isVisible(e))}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function dF(t){try{return t.frameElement}catch{return null}}function uF(t){return!!(t.offsetWidth||t.offsetHeight||typeof t.getClientRects=="function"&&t.getClientRects().length)}function mF(t){let i=t.nodeName.toLowerCase();return i==="input"||i==="select"||i==="button"||i==="textarea"}function fF(t){return pF(t)&&t.type=="hidden"}function hF(t){return gF(t)&&t.hasAttribute("href")}function pF(t){return t.nodeName.toLowerCase()=="input"}function gF(t){return t.nodeName.toLowerCase()=="a"}function zE(t){if(!t.hasAttribute("tabindex")||t.tabIndex===void 0)return!1;let i=t.getAttribute("tabindex");return!!(i&&!isNaN(parseInt(i,10)))}function jE(t){if(!zE(t))return null;let i=parseInt(t.getAttribute("tabindex")||"",10);return isNaN(i)?-1:i}function _F(t){let i=t.nodeName.toLowerCase(),e=i==="input"&&t.type;return e==="text"||e==="password"||i==="select"||i==="textarea"}function vF(t){return fF(t)?!1:mF(t)||hF(t)||t.hasAttribute("contenteditable")||zE(t)}function bF(t){return t.ownerDocument&&t.ownerDocument.defaultView||window}var Jv=class{_element;_checker;_ngZone;_document;_injector;_startAnchor=null;_endAnchor=null;_hasAttached=!1;startAnchorListener=()=>this.focusLastTabbableElement();endAnchorListener=()=>this.focusFirstTabbableElement();get enabled(){return this._enabled}set enabled(i){this._enabled=i,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(i,this._startAnchor),this._toggleAnchorTabIndex(i,this._endAnchor))}_enabled=!0;constructor(i,e,n,r,o=!1,a){this._element=i,this._checker=e,this._ngZone=n,this._document=r,this._injector=a,o||this.attachAnchors()}destroy(){let i=this._startAnchor,e=this._endAnchor;i&&(i.removeEventListener("focus",this.startAnchorListener),i.remove()),e&&(e.removeEventListener("focus",this.endAnchorListener),e.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener("focus",this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener("focus",this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(i){return new Promise(e=>{this._executeOnStable(()=>e(this.focusInitialElement(i)))})}focusFirstTabbableElementWhenReady(i){return new Promise(e=>{this._executeOnStable(()=>e(this.focusFirstTabbableElement(i)))})}focusLastTabbableElementWhenReady(i){return new Promise(e=>{this._executeOnStable(()=>e(this.focusLastTabbableElement(i)))})}_getRegionBoundary(i){let e=this._element.querySelectorAll(`[cdk-focus-region-${i}], [cdkFocusRegion${i}], [cdk-focus-${i}]`);return i=="start"?e.length?e[0]:this._getFirstTabbableElement(this._element):e.length?e[e.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(i){let e=this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");if(e){if(!this._checker.isFocusable(e)){let n=this._getFirstTabbableElement(e);return n?.focus(i),!!n}return e.focus(i),!0}return this.focusFirstTabbableElement(i)}focusFirstTabbableElement(i){let e=this._getRegionBoundary("start");return e&&e.focus(i),!!e}focusLastTabbableElement(i){let e=this._getRegionBoundary("end");return e&&e.focus(i),!!e}hasAttached(){return this._hasAttached}_getFirstTabbableElement(i){if(this._checker.isFocusable(i)&&this._checker.isTabbable(i))return i;let e=i.children;for(let n=0;n<e.length;n++){let r=e[n].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(e[n]):null;if(r)return r}return null}_getLastTabbableElement(i){if(this._checker.isFocusable(i)&&this._checker.isTabbable(i))return i;let e=i.children;for(let n=e.length-1;n>=0;n--){let r=e[n].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(e[n]):null;if(r)return r}return null}_createAnchor(){let i=this._document.createElement("div");return this._toggleAnchorTabIndex(this._enabled,i),i.classList.add("cdk-visually-hidden"),i.classList.add("cdk-focus-trap-anchor"),i.setAttribute("aria-hidden","true"),i}_toggleAnchorTabIndex(i,e){i?e.setAttribute("tabindex","0"):e.removeAttribute("tabindex")}toggleAnchors(i){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(i,this._startAnchor),this._toggleAnchorTabIndex(i,this._endAnchor))}_executeOnStable(i){this._injector?Ge(i,{injector:this._injector}):setTimeout(i)}},lf=(()=>{class t{_checker=c(eb);_ngZone=c(V);_document=c(Y);_injector=c(G);constructor(){c(qe).load(Ui)}create(e,n=!1){return new Jv(e,this._checker,this._ngZone,this._document,n,this._injector)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),tb=(()=>{class t{_elementRef=c(B);_focusTrapFactory=c(lf);focusTrap=void 0;_previouslyFocusedElement=null;get enabled(){return this.focusTrap?.enabled||!1}set enabled(e){this.focusTrap&&(this.focusTrap.enabled=e)}autoCapture=!1;constructor(){c(me).isBrowser&&(this.focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement,!0))}ngOnDestroy(){this.focusTrap?.destroy(),this._previouslyFocusedElement&&(this._previouslyFocusedElement.focus(),this._previouslyFocusedElement=null)}ngAfterContentInit(){this.focusTrap?.attachAnchors(),this.autoCapture&&this._captureFocus()}ngDoCheck(){this.focusTrap&&!this.focusTrap.hasAttached()&&this.focusTrap.attachAnchors()}ngOnChanges(e){let n=e.autoCapture;n&&!n.firstChange&&this.autoCapture&&this.focusTrap?.hasAttached()&&this._captureFocus()}_captureFocus(){this._previouslyFocusedElement=ji(),this.focusTrap?.focusInitialElementWhenReady()}static \u0275fac=function(n){return new(n||t)};static \u0275dir=N({type:t,selectors:[["","cdkTrapFocus",""]],inputs:{enabled:[2,"cdkTrapFocus","enabled",Z],autoCapture:[2,"cdkTrapFocusAutoCapture","autoCapture",Z]},exportAs:["cdkTrapFocus"],features:[Be]})}return t})(),$E=new y("liveAnnouncerElement",{providedIn:"root",factory:()=>null}),WE=new y("LIVE_ANNOUNCER_DEFAULT_OPTIONS"),yF=0,xc=(()=>{class t{_ngZone=c(V);_defaultOptions=c(WE,{optional:!0});_liveElement;_document=c(Y);_sanitizer=c(Xl);_previousTimeout;_currentPromise;_currentResolve;constructor(){let e=c($E,{optional:!0});this._liveElement=e||this._createLiveElement()}announce(e,...n){let r=this._defaultOptions,o,a;return n.length===1&&typeof n[0]=="number"?a=n[0]:[o,a]=n,this.clear(),clearTimeout(this._previousTimeout),o||(o=r&&r.politeness?r.politeness:"polite"),a==null&&r&&(a=r.duration),this._liveElement.setAttribute("aria-live",o),this._liveElement.id&&this._exposeAnnouncerToModals(this._liveElement.id),this._ngZone.runOutsideAngular(()=>(this._currentPromise||(this._currentPromise=new Promise(s=>this._currentResolve=s)),clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{!e||typeof e=="string"?this._liveElement.textContent=e:PE(this._liveElement,e,this._sanitizer),typeof a=="number"&&(this._previousTimeout=setTimeout(()=>this.clear(),a)),this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0},100),this._currentPromise))}clear(){this._liveElement&&(this._liveElement.textContent="")}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement?.remove(),this._liveElement=null,this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0}_createLiveElement(){let e="cdk-live-announcer-element",n=this._document.getElementsByClassName(e),r=this._document.createElement("div");for(let o=0;o<n.length;o++)n[o].remove();return r.classList.add(e),r.classList.add("cdk-visually-hidden"),r.setAttribute("aria-atomic","true"),r.setAttribute("aria-live","polite"),r.id=`cdk-live-announcer-${yF++}`,this._document.body.appendChild(r),r}_exposeAnnouncerToModals(e){let n=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let r=0;r<n.length;r++){let o=n[r],a=o.getAttribute("aria-owns");a?a.indexOf(e)===-1&&o.setAttribute("aria-owns",a+" "+e):o.setAttribute("aria-owns",e)}}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Yr=(function(t){return t[t.NONE=0]="NONE",t[t.BLACK_ON_WHITE=1]="BLACK_ON_WHITE",t[t.WHITE_ON_BLACK=2]="WHITE_ON_BLACK",t})(Yr||{}),HE="cdk-high-contrast-black-on-white",UE="cdk-high-contrast-white-on-black",Xv="cdk-high-contrast-active",GE=(()=>{class t{_platform=c(me);_hasCheckedHighContrastMode=!1;_document=c(Y);_breakpointSubscription;constructor(){this._breakpointSubscription=c(wc).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return Yr.NONE;let e=this._document.createElement("div");e.style.backgroundColor="rgb(1,2,3)",e.style.position="absolute",this._document.body.appendChild(e);let n=this._document.defaultView||window,r=n&&n.getComputedStyle?n.getComputedStyle(e):null,o=(r&&r.backgroundColor||"").replace(/ /g,"");switch(e.remove(),o){case"rgb(0,0,0)":case"rgb(45,50,54)":case"rgb(32,32,32)":return Yr.WHITE_ON_BLACK;case"rgb(255,255,255)":case"rgb(255,250,239)":return Yr.BLACK_ON_WHITE}return Yr.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let e=this._document.body.classList;e.remove(Xv,HE,UE),this._hasCheckedHighContrastMode=!0;let n=this.getHighContrastMode();n===Yr.BLACK_ON_WHITE?e.add(Xv,HE):n===Yr.WHITE_ON_BLACK&&e.add(Xv,UE)}}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Xo=(()=>{class t{constructor(){c(GE)._applyBodyHighContrastModeCssClasses()}static \u0275fac=function(n){return new(n||t)};static \u0275mod=$({type:t});static \u0275inj=z({imports:[hs]})}return t})();var CF=200,cf=class{_letterKeyStream=new S;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new S;selectedItem=this._selectedItem;constructor(i,e){let n=typeof e?.debounceInterval=="number"?e.debounceInterval:CF;e?.skipPredicate&&(this._skipPredicateFn=e.skipPredicate),this.setItems(i),this._setupKeyHandler(n)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(i){this._selectedItemIndex=i}setItems(i){this._items=i}handleKey(i){let e=i.keyCode;i.key&&i.key.length===1?this._letterKeyStream.next(i.key.toLocaleUpperCase()):(e>=65&&e<=90||e>=48&&e<=57)&&this._letterKeyStream.next(String.fromCharCode(e))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(i){this._letterKeyStream.pipe(ct(e=>this._pressedLetters.push(e)),Xi(i),be(()=>this._pressedLetters.length>0),le(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(e=>{for(let n=1;n<this._items.length+1;n++){let r=(this._selectedItemIndex+n)%this._items.length,o=this._items[r];if(!this._skipPredicateFn?.(o)&&o.getLabel?.().toLocaleUpperCase().trim().indexOf(e)===0){this._selectedItem.next(o);break}}this._pressedLetters=[]})}};function wt(t,...i){return i.length?i.some(e=>t[e]):t.altKey||t.shiftKey||t.ctrlKey||t.metaKey}var ps=class{_items;_activeItemIndex=D(-1);_activeItem=D(null);_wrap=!1;_typeaheadSubscription=ae.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=i=>i.disabled;constructor(i,e){this._items=i,i instanceof or?this._itemChangesSubscription=i.changes.subscribe(n=>this._itemsChanged(n.toArray())):Fi(i)&&(this._effectRef=nt(()=>this._itemsChanged(i()),{injector:e}))}tabOut=new S;change=new S;skipPredicate(i){return this._skipPredicateFn=i,this}withWrap(i=!0){return this._wrap=i,this}withVerticalOrientation(i=!0){return this._vertical=i,this}withHorizontalOrientation(i){return this._horizontal=i,this}withAllowedModifierKeys(i){return this._allowedModifierKeys=i,this}withTypeAhead(i=200){this._typeaheadSubscription.unsubscribe();let e=this._getItemsArray();return this._typeahead=new cf(e,{debounceInterval:typeof i=="number"?i:void 0,skipPredicate:n=>this._skipPredicateFn(n)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(n=>{this.setActiveItem(n)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(i=!0){return this._homeAndEnd=i,this}withPageUpDown(i=!0,e=10){return this._pageUpAndDown={enabled:i,delta:e},this}setActiveItem(i){let e=this._activeItem();this.updateActiveItem(i),this._activeItem()!==e&&this.change.next(this._activeItemIndex())}onKeydown(i){let e=i.keyCode,r=["altKey","ctrlKey","metaKey","shiftKey"].every(o=>!i[o]||this._allowedModifierKeys.indexOf(o)>-1);switch(e){case 9:this.tabOut.next();return;case 40:if(this._vertical&&r){this.setNextItemActive();break}else return;case 38:if(this._vertical&&r){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&r){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&r){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&r){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&r){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(o>0?o:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()+this._pageUpAndDown.delta,a=this._getItemsArray().length;this._setActiveItemByIndex(o<a?o:a-1,-1);break}else return;default:(r||wt(i,"shiftKey"))&&this._typeahead?.handleKey(i);return}this._typeahead?.reset(),i.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(i){let e=this._getItemsArray(),n=typeof i=="number"?i:e.indexOf(i),r=e[n];this._activeItem.set(r??null),this._activeItemIndex.set(n),this._typeahead?.setCurrentSelectedItemIndex(n)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(i){this._wrap?this._setActiveInWrapMode(i):this._setActiveInDefaultMode(i)}_setActiveInWrapMode(i){let e=this._getItemsArray();for(let n=1;n<=e.length;n++){let r=(this._activeItemIndex()+i*n+e.length)%e.length,o=e[r];if(!this._skipPredicateFn(o)){this.setActiveItem(r);return}}}_setActiveInDefaultMode(i){this._setActiveItemByIndex(this._activeItemIndex()+i,i)}_setActiveItemByIndex(i,e){let n=this._getItemsArray();if(n[i]){for(;this._skipPredicateFn(n[i]);)if(i+=e,!n[i])return;this.setActiveItem(i)}}_getItemsArray(){return Fi(this._items)?this._items():this._items instanceof or?this._items.toArray():this._items}_itemsChanged(i){this._typeahead?.setItems(i);let e=this._activeItem();if(e){let n=i.indexOf(e);n>-1&&n!==this._activeItemIndex()&&(this._activeItemIndex.set(n),this._typeahead?.setCurrentSelectedItemIndex(n))}}};var Ec=class extends ps{setActiveItem(i){this.activeItem&&this.activeItem.setInactiveStyles(),super.setActiveItem(i),this.activeItem&&this.activeItem.setActiveStyles()}};var Mc=class extends ps{_origin="program";setFocusOrigin(i){return this._origin=i,this}setActiveItem(i){super.setActiveItem(i),this.activeItem&&this.activeItem.focus(this._origin)}};var nb={},Ye=class t{_appId=c(Ur);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(i,e=!1){return this._appId!=="ng"&&(i+=this._appId),nb.hasOwnProperty(i)||(nb[i]=0),`${i}${e?t._infix+"-":""}${nb[i]++}`}static \u0275fac=function(e){return new(e||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})};var QE=" ";function ob(t,i,e){let n=pf(t,i);e=e.trim(),!n.some(r=>r.trim()===e)&&(n.push(e),t.setAttribute(i,n.join(QE)))}function gf(t,i,e){let n=pf(t,i);e=e.trim();let r=n.filter(o=>o!==e);r.length?t.setAttribute(i,r.join(QE)):t.removeAttribute(i)}function pf(t,i){return t.getAttribute(i)?.match(/\S+/g)??[]}var ZE="cdk-describedby-message",hf="cdk-describedby-host",rb=0,KE=(()=>{class t{_platform=c(me);_document=c(Y);_messageRegistry=new Map;_messagesContainer=null;_id=`${rb++}`;constructor(){c(qe).load(Ui),this._id=c(Ur)+"-"+rb++}describe(e,n,r){if(!this._canBeDescribed(e,n))return;let o=ib(n,r);typeof n!="string"?(YE(n,this._id),this._messageRegistry.set(o,{messageElement:n,referenceCount:0})):this._messageRegistry.has(o)||this._createMessageElement(n,r),this._isElementDescribedByMessage(e,o)||this._addMessageReference(e,o)}removeDescription(e,n,r){if(!n||!this._isElementNode(e))return;let o=ib(n,r);if(this._isElementDescribedByMessage(e,o)&&this._removeMessageReference(e,o),typeof n=="string"){let a=this._messageRegistry.get(o);a&&a.referenceCount===0&&this._deleteMessageElement(o)}this._messagesContainer?.childNodes.length===0&&(this._messagesContainer.remove(),this._messagesContainer=null)}ngOnDestroy(){let e=this._document.querySelectorAll(`[${hf}="${this._id}"]`);for(let n=0;n<e.length;n++)this._removeCdkDescribedByReferenceIds(e[n]),e[n].removeAttribute(hf);this._messagesContainer?.remove(),this._messagesContainer=null,this._messageRegistry.clear()}_createMessageElement(e,n){let r=this._document.createElement("div");YE(r,this._id),r.textContent=e,n&&r.setAttribute("role",n),this._createMessagesContainer(),this._messagesContainer.appendChild(r),this._messageRegistry.set(ib(e,n),{messageElement:r,referenceCount:0})}_deleteMessageElement(e){this._messageRegistry.get(e)?.messageElement?.remove(),this._messageRegistry.delete(e)}_createMessagesContainer(){if(this._messagesContainer)return;let e="cdk-describedby-message-container",n=this._document.querySelectorAll(`.${e}[platform="server"]`);for(let o=0;o<n.length;o++)n[o].remove();let r=this._document.createElement("div");r.style.visibility="hidden",r.classList.add(e),r.classList.add("cdk-visually-hidden"),this._platform.isBrowser||r.setAttribute("platform","server"),this._document.body.appendChild(r),this._messagesContainer=r}_removeCdkDescribedByReferenceIds(e){let n=pf(e,"aria-describedby").filter(r=>r.indexOf(ZE)!=0);e.setAttribute("aria-describedby",n.join(" "))}_addMessageReference(e,n){let r=this._messageRegistry.get(n);ob(e,"aria-describedby",r.messageElement.id),e.setAttribute(hf,this._id),r.referenceCount++}_removeMessageReference(e,n){let r=this._messageRegistry.get(n);r.referenceCount--,gf(e,"aria-describedby",r.messageElement.id),e.removeAttribute(hf)}_isElementDescribedByMessage(e,n){let r=pf(e,"aria-describedby"),o=this._messageRegistry.get(n),a=o&&o.messageElement.id;return!!a&&r.indexOf(a)!=-1}_canBeDescribed(e,n){if(!this._isElementNode(e))return!1;if(n&&typeof n=="object")return!0;let r=n==null?"":`${n}`.trim(),o=e.getAttribute("aria-label");return r?!o||o.trim()!==r:!1}_isElementNode(e){return e.nodeType===this._document.ELEMENT_NODE}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function ib(t,i){return typeof t=="string"?`${i||""}/${t}`:t}function YE(t,i){t.id||(t.id=`${ZE}-${i}-${rb++}`)}var gi=(function(t){return t[t.NORMAL=0]="NORMAL",t[t.NEGATED=1]="NEGATED",t[t.INVERTED=2]="INVERTED",t})(gi||{}),_f,ta;function vf(){if(ta==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return ta=!1,ta;if(document.documentElement?.style&&"scrollBehavior"in document.documentElement.style)ta=!0;else{let t=Element.prototype.scrollTo;t?ta=!/\{\s*\[native code\]\s*\}/.test(t.toString()):ta=!1}}return ta}function vs(){if(typeof document!="object"||!document)return gi.NORMAL;if(_f==null){let t=document.createElement("div"),i=t.style;t.dir="rtl",i.width="1px",i.overflow="auto",i.visibility="hidden",i.pointerEvents="none",i.position="absolute";let e=document.createElement("div"),n=e.style;n.width="2px",n.height="1px",t.appendChild(e),document.body.appendChild(t),_f=gi.NORMAL,t.scrollLeft===0&&(t.scrollLeft=1,_f=t.scrollLeft===0?gi.NEGATED:gi.INVERTED),t.remove()}return _f}function ab(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}var bs,XE=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function sb(){if(bs)return bs;if(typeof document!="object"||!document)return bs=new Set(XE),bs;let t=document.createElement("input");return bs=new Set(XE.filter(i=>(t.setAttribute("type",i),t.type===i))),bs}var JE={XSmall:"(max-width: 599.98px)",Small:"(min-width: 600px) and (max-width: 959.98px)",Medium:"(min-width: 960px) and (max-width: 1279.98px)",Large:"(min-width: 1280px) and (max-width: 1919.98px)",XLarge:"(min-width: 1920px)",Handset:"(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)",Tablet:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",Web:"(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)",HandsetPortrait:"(max-width: 599.98px) and (orientation: portrait)",TabletPortrait:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)",WebPortrait:"(min-width: 840px) and (orientation: portrait)",HandsetLandscape:"(max-width: 959.98px) and (orientation: landscape)",TabletLandscape:"(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",WebLandscape:"(min-width: 1280px) and (orientation: landscape)"};var wF=new y("MATERIAL_ANIMATIONS"),eM=null;function DF(){return c(wF,{optional:!0})?.animationsDisabled||c(Rl,{optional:!0})==="NoopAnimations"?"di-disabled":(eM??=c(fs).matchMedia("(prefers-reduced-motion)").matches,eM?"reduced-motion":"enabled")}function je(){return DF()!=="enabled"}function ft(t){return t==null?"":typeof t=="string"?t:`${t}px`}function Vt(t){return t!=null&&`${t}`!="false"}var Gn=(function(t){return t[t.FADING_IN=0]="FADING_IN",t[t.VISIBLE=1]="VISIBLE",t[t.FADING_OUT=2]="FADING_OUT",t[t.HIDDEN=3]="HIDDEN",t})(Gn||{}),lb=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=Gn.HIDDEN;constructor(i,e,n,r=!1){this._renderer=i,this.element=e,this.config=n,this._animationForciblyDisabledThroughCss=r}fadeOut(){this._renderer.fadeOutRipple(this)}},tM=us({passive:!0,capture:!0}),cb=class{_events=new Map;addHandler(i,e,n,r){let o=this._events.get(e);if(o){let a=o.get(n);a?a.add(r):o.set(n,new Set([r]))}else this._events.set(e,new Map([[n,new Set([r])]])),i.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,tM)})}removeHandler(i,e,n){let r=this._events.get(i);if(!r)return;let o=r.get(e);o&&(o.delete(n),o.size===0&&r.delete(e),r.size===0&&(this._events.delete(i),document.removeEventListener(i,this._delegateEventHandler,tM)))}_delegateEventHandler=i=>{let e=$t(i);e&&this._events.get(i.type)?.forEach((n,r)=>{(r===e||r.contains(e))&&n.forEach(o=>o.handleEvent(i))})}},Sc={enterDuration:225,exitDuration:150},xF=800,nM=us({passive:!0,capture:!0}),iM=["mousedown","touchstart"],rM=["mouseup","mouseleave","touchend","touchcancel"],EF=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=E({type:t,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(n,r){},styles:[`.mat-ripple {
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
`],encapsulation:2,changeDetection:0})}return t})(),na=class t{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new cb;constructor(i,e,n,r,o){this._target=i,this._ngZone=e,this._platform=r,r.isBrowser&&(this._containerElement=rn(n)),o&&o.get(qe).load(EF)}fadeInRipple(i,e,n={}){let r=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=C(C({},Sc),n.animation);n.centered&&(i=r.left+r.width/2,e=r.top+r.height/2);let a=n.radius||MF(i,e,r),s=i-r.left,l=e-r.top,d=o.enterDuration,u=document.createElement("div");u.classList.add("mat-ripple-element"),u.style.left=`${s-a}px`,u.style.top=`${l-a}px`,u.style.height=`${a*2}px`,u.style.width=`${a*2}px`,n.color!=null&&(u.style.backgroundColor=n.color),u.style.transitionDuration=`${d}ms`,this._containerElement.appendChild(u);let f=window.getComputedStyle(u),_=f.transitionProperty,v=f.transitionDuration,w=_==="none"||v==="0s"||v==="0s, 0s"||r.width===0&&r.height===0,F=new lb(this,u,n,w);u.style.transform="scale3d(1, 1, 1)",F.state=Gn.FADING_IN,n.persistent||(this._mostRecentTransientRipple=F);let U=null;return!w&&(d||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let Q=()=>{U&&(U.fallbackTimer=null),clearTimeout(Nt),this._finishRippleTransition(F)},Re=()=>this._destroyRipple(F),Nt=setTimeout(Re,d+100);u.addEventListener("transitionend",Q),u.addEventListener("transitioncancel",Re),U={onTransitionEnd:Q,onTransitionCancel:Re,fallbackTimer:Nt}}),this._activeRipples.set(F,U),(w||!d)&&this._finishRippleTransition(F),F}fadeOutRipple(i){if(i.state===Gn.FADING_OUT||i.state===Gn.HIDDEN)return;let e=i.element,n=C(C({},Sc),i.config.animation);e.style.transitionDuration=`${n.exitDuration}ms`,e.style.opacity="0",i.state=Gn.FADING_OUT,(i._animationForciblyDisabledThroughCss||!n.exitDuration)&&this._finishRippleTransition(i)}fadeOutAll(){this._getActiveRipples().forEach(i=>i.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(i=>{i.config.persistent||i.fadeOut()})}setupTriggerEvents(i){let e=rn(i);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,iM.forEach(n=>{t._eventManager.addHandler(this._ngZone,n,e,this)}))}handleEvent(i){i.type==="mousedown"?this._onMousedown(i):i.type==="touchstart"?this._onTouchStart(i):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{rM.forEach(e=>{this._triggerElement.addEventListener(e,this,nM)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(i){i.state===Gn.FADING_IN?this._startFadeOutTransition(i):i.state===Gn.FADING_OUT&&this._destroyRipple(i)}_startFadeOutTransition(i){let e=i===this._mostRecentTransientRipple,{persistent:n}=i.config;i.state=Gn.VISIBLE,!n&&(!e||!this._isPointerDown)&&i.fadeOut()}_destroyRipple(i){let e=this._activeRipples.get(i)??null;this._activeRipples.delete(i),this._activeRipples.size||(this._containerRect=null),i===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),i.state=Gn.HIDDEN,e!==null&&(i.element.removeEventListener("transitionend",e.onTransitionEnd),i.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),i.element.remove()}_onMousedown(i){let e=_c(i),n=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+xF;!this._target.rippleDisabled&&!e&&!n&&(this._isPointerDown=!0,this.fadeInRipple(i.clientX,i.clientY,this._target.rippleConfig))}_onTouchStart(i){if(!this._target.rippleDisabled&&!vc(i)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=i.changedTouches;if(e)for(let n=0;n<e.length;n++)this.fadeInRipple(e[n].clientX,e[n].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(i=>{let e=i.state===Gn.VISIBLE||i.config.terminateOnPointerUp&&i.state===Gn.FADING_IN;!i.config.persistent&&e&&i.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let i=this._triggerElement;i&&(iM.forEach(e=>t._eventManager.removeHandler(e,i,this)),this._pointerUpEventsRegistered&&(rM.forEach(e=>i.removeEventListener(e,this,nM)),this._pointerUpEventsRegistered=!1))}};function MF(t,i,e){let n=Math.max(Math.abs(t-e.left),Math.abs(t-e.right)),r=Math.max(Math.abs(i-e.top),Math.abs(i-e.bottom));return Math.sqrt(n*n+r*r)}var ia=new y("mat-ripple-global-options"),ra=(()=>{class t{_elementRef=c(B);_animationsDisabled=je();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=c(V),n=c(me),r=c(ia,{optional:!0}),o=c(G);this._globalOptions=r||{},this._rippleRenderer=new na(this,e,this._elementRef,n,o)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:C(C(C({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,n=0,r){return typeof e=="number"?this._rippleRenderer.fadeInRipple(e,n,C(C({},this.rippleConfig),r)):this._rippleRenderer.fadeInRipple(0,0,C(C({},this.rippleConfig),e))}static \u0275fac=function(n){return new(n||t)};static \u0275dir=N({type:t,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(n,r){n&2&&P("mat-ripple-unbounded",r.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return t})();var SF={capture:!0},IF=["focus","mousedown","mouseenter","touchstart"],db="mat-ripple-loader-uninitialized",ub="mat-ripple-loader-class-name",oM="mat-ripple-loader-centered",bf="mat-ripple-loader-disabled",aM=(()=>{class t{_document=c(Y);_animationsDisabled=je();_globalRippleOptions=c(ia,{optional:!0});_platform=c(me);_ngZone=c(V);_injector=c(G);_eventCleanups;_hosts=new Map;constructor(){let e=c(vt).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>IF.map(n=>e.listen(this._document,n,this._onInteraction,SF)))}ngOnDestroy(){let e=this._hosts.keys();for(let n of e)this.destroyRipple(n);this._eventCleanups.forEach(n=>n())}configureRipple(e,n){e.setAttribute(db,this._globalRippleOptions?.namespace??""),(n.className||!e.hasAttribute(ub))&&e.setAttribute(ub,n.className||""),n.centered&&e.setAttribute(oM,""),n.disabled&&e.setAttribute(bf,"")}setDisabled(e,n){let r=this._hosts.get(e);r?(r.target.rippleDisabled=n,!n&&!r.hasSetUpEvents&&(r.hasSetUpEvents=!0,r.renderer.setupTriggerEvents(e))):n?e.setAttribute(bf,""):e.removeAttribute(bf)}_onInteraction=e=>{let n=$t(e);if(n instanceof HTMLElement){let r=n.closest(`[${db}="${this._globalRippleOptions?.namespace??""}"]`);r&&this._createRipple(r)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let n=this._document.createElement("span");n.classList.add("mat-ripple",e.getAttribute(ub)),e.append(n);let r=this._globalRippleOptions,o=this._animationsDisabled?0:r?.animation?.enterDuration??Sc.enterDuration,a=this._animationsDisabled?0:r?.animation?.exitDuration??Sc.exitDuration,s={rippleDisabled:this._animationsDisabled||r?.disabled||e.hasAttribute(bf),rippleConfig:{centered:e.hasAttribute(oM),terminateOnPointerUp:r?.terminateOnPointerUp,animation:{enterDuration:o,exitDuration:a}}},l=new na(s,this._ngZone,n,this._platform,this._injector),d=!s.rippleDisabled;d&&l.setupTriggerEvents(e),this._hosts.set(e,{target:s,renderer:l,hasSetUpEvents:d}),e.removeAttribute(db)}destroyRipple(e){let n=this._hosts.get(e);n&&(n.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var _i=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=E({type:t,selectors:[["structural-styles"]],decls:0,vars:0,template:function(n,r){},styles:[`.mat-focus-indicator {
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
`],encapsulation:2,changeDetection:0})}return t})();var TF=["mat-icon-button",""],kF=["*"],AF=new y("MAT_BUTTON_CONFIG");function sM(t){return t==null?void 0:mi(t)}var mb=(()=>{class t{_elementRef=c(B);_ngZone=c(V);_animationsDisabled=je();_config=c(AF,{optional:!0});_focusMonitor=c(Hi);_cleanupClick;_renderer=c(Oe);_rippleLoader=c(aM);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}constructor(){c(qe).load(_i);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e="program",n){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,n):this._elementRef.nativeElement.focus(n)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static \u0275fac=function(n){return new(n||t)};static \u0275dir=N({type:t,hostAttrs:[1,"mat-mdc-button-base"],hostVars:13,hostBindings:function(n,r){n&2&&(K("disabled",r._getDisabledAttribute())("aria-disabled",r._getAriaDisabled())("tabindex",r._getTabIndex()),kt(r.color?"mat-"+r.color:""),P("mat-mdc-button-disabled",r.disabled)("mat-mdc-button-disabled-interactive",r.disabledInteractive)("mat-unthemed",!r.color)("_mat-animation-noopable",r._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",Z],disabled:[2,"disabled","disabled",Z],ariaDisabled:[2,"aria-disabled","ariaDisabled",Z],disabledInteractive:[2,"disabledInteractive","disabledInteractive",Z],tabIndex:[2,"tabIndex","tabIndex",sM],_tabindex:[2,"tabindex","_tabindex",sM]}})}return t})(),zi=(()=>{class t extends mb{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=E({type:t,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[_e],attrs:TF,ngContentSelectors:kF,decls:4,vars:0,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(n,r){n&1&&(Se(),Qt(0,"span",0),te(1),Qt(2,"span",1)(3,"span",2))},styles:[`.mat-mdc-icon-button {
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
`],encapsulation:2,changeDetection:0})}return t})();var ys=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=$({type:t});static \u0275inj=z({imports:[ve]})}return t})();var RF=["matButton",""],OF=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]]],NF=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"];var lM=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),Wt=(()=>{class t extends mb{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let e=PF(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let n=this._elementRef.nativeElement.classList,r=this._appearance?lM.get(this._appearance):null,o=lM.get(e);r&&n.remove(...r),n.add(...o),this._appearance=e}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=E({type:t,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[_e],attrs:RF,ngContentSelectors:NF,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(n,r){n&1&&(Se(OF),Qt(0,"span",0),te(1),Ce(2,"span",1),te(3,1),Me(),te(4,2),Qt(5,"span",2)(6,"span",3)),n&2&&P("mdc-button__ripple",!r._isFab)("mdc-fab__ripple",r._isFab)},styles:[`.mat-mdc-button-base {
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
`],encapsulation:2,changeDetection:0})}return t})();function PF(t){return t.hasAttribute("mat-raised-button")?"elevated":t.hasAttribute("mat-stroked-button")?"outlined":t.hasAttribute("mat-flat-button")?"filled":t.hasAttribute("mat-button")?"text":null}var ht=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=$({type:t});static \u0275inj=z({imports:[ys,ve]})}return t})();var fb=class{_box;_destroyed=new S;_resizeSubject=new S;_resizeObserver;_elementObservables=new Map;constructor(i){this._box=i,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(i){return this._elementObservables.has(i)||this._elementObservables.set(i,new se(e=>{let n=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(i,{box:this._box}),()=>{this._resizeObserver?.unobserve(i),n.unsubscribe(),this._elementObservables.delete(i)}}).pipe(be(e=>e.some(n=>n.target===i)),jd({bufferSize:1,refCount:!0}),ye(this._destroyed))),this._elementObservables.get(i)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},yf=(()=>{class t{_cleanupErrorListener;_observers=new Map;_ngZone=c(V);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,n){let r=n?.box||"content-box";return this._observers.has(r)||this._observers.set(r,new fb(r)),this._observers.get(r).observe(e)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var FF=["notch"],LF=["matFormFieldNotchedOutline",""],VF=["*"],cM=["iconPrefixContainer"],dM=["textPrefixContainer"],uM=["iconSuffixContainer"],mM=["textSuffixContainer"],BF=["textField"],jF=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],HF=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function UF(t,i){t&1&&T(0,"span",21)}function zF(t,i){if(t&1&&(m(0,"label",20),te(1,1),j(2,UF,1,0,"span",21),h()),t&2){let e=x(2);A("floating",e._shouldLabelFloat())("monitorResize",e._hasOutline())("id",e._labelId),K("for",e._control.disableAutomaticLabeling?null:e._control.id),p(2),H(!e.hideRequiredMarker&&e._control.required?2:-1)}}function $F(t,i){if(t&1&&j(0,zF,3,5,"label",20),t&2){let e=x();H(e._hasFloatingLabel()?0:-1)}}function WF(t,i){t&1&&T(0,"div",7)}function GF(t,i){}function qF(t,i){if(t&1&&ut(0,GF,0,0,"ng-template",13),t&2){x(2);let e=cn(1);A("ngTemplateOutlet",e)}}function YF(t,i){if(t&1&&(m(0,"div",9),j(1,qF,1,1,null,13),h()),t&2){let e=x();A("matFormFieldNotchedOutlineOpen",e._shouldLabelFloat()),p(),H(e._forceDisplayInfixLabel()?-1:1)}}function QF(t,i){t&1&&(m(0,"div",10,2),te(2,2),h())}function ZF(t,i){t&1&&(m(0,"div",11,3),te(2,3),h())}function KF(t,i){}function XF(t,i){if(t&1&&ut(0,KF,0,0,"ng-template",13),t&2){x();let e=cn(1);A("ngTemplateOutlet",e)}}function JF(t,i){t&1&&(m(0,"div",14,4),te(2,4),h())}function eL(t,i){t&1&&(m(0,"div",15,5),te(2,5),h())}function tL(t,i){t&1&&T(0,"div",16)}function nL(t,i){t&1&&(m(0,"div",18),te(1,6),h())}function iL(t,i){if(t&1&&(m(0,"mat-hint",22),g(1),h()),t&2){let e=x(2);A("id",e._hintLabelId),p(),oe(e.hintLabel)}}function rL(t,i){if(t&1&&(m(0,"div",19),j(1,iL,2,2,"mat-hint",22),te(2,7),T(3,"div",23),te(4,8),h()),t&2){let e=x();p(),H(e.hintLabel?1:-1)}}var qn=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=N({type:t,selectors:[["mat-label"]]})}return t})(),oL=new y("MatError");var wf=(()=>{class t{align="start";id=c(Ye).getId("mat-mdc-hint-");static \u0275fac=function(n){return new(n||t)};static \u0275dir=N({type:t,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(n,r){n&2&&(Tt("id",r.id),K("align",null),P("mat-mdc-form-field-hint-end",r.align==="end"))},inputs:{align:"align",id:"id"}})}return t})(),bM=new y("MatPrefix"),Df=(()=>{class t{set _isTextSelector(e){this._isText=!0}_isText=!1;static \u0275fac=function(n){return new(n||t)};static \u0275dir=N({type:t,selectors:[["","matPrefix",""],["","matIconPrefix",""],["","matTextPrefix",""]],inputs:{_isTextSelector:[0,"matTextPrefix","_isTextSelector"]},features:[Ue([{provide:bM,useExisting:t}])]})}return t})(),yM=new y("MatSuffix"),xf=(()=>{class t{set _isTextSelector(e){this._isText=!0}_isText=!1;static \u0275fac=function(n){return new(n||t)};static \u0275dir=N({type:t,selectors:[["","matSuffix",""],["","matIconSuffix",""],["","matTextSuffix",""]],inputs:{_isTextSelector:[0,"matTextSuffix","_isTextSelector"]},features:[Ue([{provide:yM,useExisting:t}])]})}return t})(),CM=new y("FloatingLabelParent"),fM=(()=>{class t{_elementRef=c(B);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=c(yf);_ngZone=c(V);_parent=c(CM);_resizeSubscription=new ae;constructor(){}ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return aL(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(n){return new(n||t)};static \u0275dir=N({type:t,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(n,r){n&2&&P("mdc-floating-label--float-above",r.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return t})();function aL(t){let i=t;if(i.offsetParent!==null)return i.scrollWidth;let e=i.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let n=e.scrollWidth;return e.remove(),n}var hM="mdc-line-ripple--active",Cf="mdc-line-ripple--deactivating",pM=(()=>{class t{_elementRef=c(B);_cleanupTransitionEnd;constructor(){let e=c(V),n=c(Oe);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=n.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(Cf),e.add(hM)}deactivate(){this._elementRef.nativeElement.classList.add(Cf)}_handleTransitionEnd=e=>{let n=this._elementRef.nativeElement.classList,r=n.contains(Cf);e.propertyName==="opacity"&&r&&n.remove(hM,Cf)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(n){return new(n||t)};static \u0275dir=N({type:t,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return t})(),gM=(()=>{class t{_elementRef=c(B);_ngZone=c(V);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,n=e.querySelector(".mdc-floating-label");n?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(n.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>n.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){let n=this._notch.nativeElement;!this.open||!e?n.style.width="":n.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=E({type:t,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(n,r){if(n&1&&we(FF,5),n&2){let o;R(o=O())&&(r._notch=o.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(n,r){n&2&&P("mdc-notched-outline--notched",r.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},attrs:LF,ngContentSelectors:VF,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(n,r){n&1&&(Se(),Qt(0,"div",1),Ce(1,"div",2,0),te(3),Me(),Qt(4,"div",3))},encapsulation:2,changeDetection:0})}return t})(),Ic=(()=>{class t{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(n){return new(n||t)};static \u0275dir=N({type:t})}return t})();var Tc=new y("MatFormField"),sL=new y("MAT_FORM_FIELD_DEFAULT_OPTIONS"),_M="fill",lL="auto",vM="fixed",cL="translateY(-50%)",Rt=(()=>{class t{_elementRef=c(B);_changeDetectorRef=c(Ie);_platform=c(me);_idGenerator=c(Ye);_ngZone=c(V);_defaults=c(sL,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=nn("iconPrefixContainer");_textPrefixContainerSignal=nn("textPrefixContainer");_iconSuffixContainerSignal=nn("iconSuffixContainer");_textSuffixContainerSignal=nn("textSuffixContainer");_prefixSuffixContainers=mt(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=HD(qn);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=Vt(e)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||lL}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let n=e||this._defaults?.appearance||_M;this._appearanceSignal.set(n)}_appearanceSignal=D(_M);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||vM}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||vM}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new S;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=je();constructor(){let e=this._defaults,n=c(it);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),nt(()=>this._currentDirection=n.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=mt(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){let n=this._control,r="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(r+e.controlType),n.controlType&&this._elementRef.nativeElement.classList.add(r+n.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=n.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=n.stateChanges.pipe(Qe([void 0,void 0]),le(()=>[n.errorState,n.userAriaDescribedBy]),Bd(),be(([[o,a],[s,l]])=>o!==s||a!==l)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),n.ngControl&&n.ngControl.valueChanges&&(this._valueChanges=n.ngControl.valueChanges.pipe(ye(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),Ft(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){WD({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=mt(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let n=this._control?this._control.ngControl:null;return n&&n[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let o=this._hintChildren?this._hintChildren.find(s=>s.align==="start"):null,a=this._hintChildren?this._hintChildren.find(s=>s.align==="end"):null;o?e.push(o.id):this._hintLabel&&e.push(this._hintLabelId),a&&e.push(a.id)}else this._errorChildren&&e.push(...this._errorChildren.map(o=>o.id));let n=this._control.describedByIds,r;if(n){let o=this._describedByIds||e;r=e.concat(n.filter(a=>a&&!o.includes(a)))}else r=e;this._control.setDescribedByIds(r),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,n=this._textPrefixContainer?.nativeElement,r=this._iconSuffixContainer?.nativeElement,o=this._textSuffixContainer?.nativeElement,a=e?.getBoundingClientRect().width??0,s=n?.getBoundingClientRect().width??0,l=r?.getBoundingClientRect().width??0,d=o?.getBoundingClientRect().width??0,u=this._currentDirection==="rtl"?"-1":"1",f=`${a+s}px`,v=`calc(${u} * (${f} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,w=`var(--mat-mdc-form-field-label-transform, ${cL} translateX(${v}))`,F=a+s+l+d;return[w,F]}_writeOutlinedLabelStyles(e){if(e!==null){let[n,r]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=n),r!==null&&this._notchedOutline?._setMaxWidth(r)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let n=e.getRootNode();return n&&n!==e}return document.documentElement.contains(e)}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=E({type:t,selectors:[["mat-form-field"]],contentQueries:function(n,r,o){if(n&1&&(cm(o,r._labelChild,qn,5),bt(o,Ic,5)(o,bM,5)(o,yM,5)(o,oL,5)(o,wf,5)),n&2){jn();let a;R(a=O())&&(r._formFieldControl=a.first),R(a=O())&&(r._prefixChildren=a),R(a=O())&&(r._suffixChildren=a),R(a=O())&&(r._errorChildren=a),R(a=O())&&(r._hintChildren=a)}},viewQuery:function(n,r){if(n&1&&(Bn(r._iconPrefixContainerSignal,cM,5)(r._textPrefixContainerSignal,dM,5)(r._iconSuffixContainerSignal,uM,5)(r._textSuffixContainerSignal,mM,5),we(BF,5)(cM,5)(dM,5)(uM,5)(mM,5)(fM,5)(gM,5)(pM,5)),n&2){jn(4);let o;R(o=O())&&(r._textField=o.first),R(o=O())&&(r._iconPrefixContainer=o.first),R(o=O())&&(r._textPrefixContainer=o.first),R(o=O())&&(r._iconSuffixContainer=o.first),R(o=O())&&(r._textSuffixContainer=o.first),R(o=O())&&(r._floatingLabel=o.first),R(o=O())&&(r._notchedOutline=o.first),R(o=O())&&(r._lineRipple=o.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(n,r){n&2&&P("mat-mdc-form-field-label-always-float",r._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",r._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",r._hasIconSuffix)("mat-form-field-invalid",r._control.errorState)("mat-form-field-disabled",r._control.disabled)("mat-form-field-autofilled",r._control.autofilled)("mat-form-field-appearance-fill",r.appearance=="fill")("mat-form-field-appearance-outline",r.appearance=="outline")("mat-form-field-hide-placeholder",r._hasFloatingLabel()&&!r._shouldLabelFloat())("mat-primary",r.color!=="accent"&&r.color!=="warn")("mat-accent",r.color==="accent")("mat-warn",r.color==="warn")("ng-untouched",r._shouldForward("untouched"))("ng-touched",r._shouldForward("touched"))("ng-pristine",r._shouldForward("pristine"))("ng-dirty",r._shouldForward("dirty"))("ng-valid",r._shouldForward("valid"))("ng-invalid",r._shouldForward("invalid"))("ng-pending",r._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[Ue([{provide:Tc,useExisting:t},{provide:CM,useExisting:t}])],ngContentSelectors:HF,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(n,r){if(n&1&&(Se(jF),ut(0,$F,1,1,"ng-template",null,0,dm),m(2,"div",6,1),M("click",function(a){return r._control.onContainerClick(a)}),j(4,WF,1,0,"div",7),m(5,"div",8),j(6,YF,2,2,"div",9),j(7,QF,3,0,"div",10),j(8,ZF,3,0,"div",11),m(9,"div",12),j(10,XF,1,1,null,13),te(11),h(),j(12,JF,3,0,"div",14),j(13,eL,3,0,"div",15),h(),j(14,tL,1,0,"div",16),h(),m(15,"div",17),j(16,nL,2,0,"div",18)(17,rL,5,1,"div",19),h()),n&2){let o;p(2),P("mdc-text-field--filled",!r._hasOutline())("mdc-text-field--outlined",r._hasOutline())("mdc-text-field--no-label",!r._hasFloatingLabel())("mdc-text-field--disabled",r._control.disabled)("mdc-text-field--invalid",r._control.errorState),p(2),H(!r._hasOutline()&&!r._control.disabled?4:-1),p(2),H(r._hasOutline()?6:-1),p(),H(r._hasIconPrefix?7:-1),p(),H(r._hasTextPrefix?8:-1),p(2),H(!r._hasOutline()||r._forceDisplayInfixLabel()?10:-1),p(2),H(r._hasTextSuffix?12:-1),p(),H(r._hasIconSuffix?13:-1),p(),H(r._hasOutline()?-1:14),p(),P("mat-mdc-form-field-subscript-dynamic-size",r.subscriptSizing==="dynamic");let a=r._getSubscriptMessageType();p(),H((o=a)==="error"?16:o==="hint"?17:-1)}},dependencies:[fM,gM,q_,pM,wf],styles:[`.mdc-text-field {
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
`],encapsulation:2,changeDetection:0})}return t})();var Ot=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=$({type:t});static \u0275inj=z({imports:[hs,Rt,ve]})}return t})();function wM(t){return Error(`Unable to find icon with the name "${t}"`)}function uL(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function DM(t){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${t}".`)}function xM(t){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${t}".`)}var gr=class{url;svgText;options;svgElement=null;constructor(i,e,n){this.url=i,this.svgText=e,this.options=n}},MM=(()=>{class t{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(e,n,r,o){this._httpClient=e,this._sanitizer=n,this._errorHandler=o,this._document=r}addSvgIcon(e,n,r){return this.addSvgIconInNamespace("",e,n,r)}addSvgIconLiteral(e,n,r){return this.addSvgIconLiteralInNamespace("",e,n,r)}addSvgIconInNamespace(e,n,r,o){return this._addSvgIconConfig(e,n,new gr(r,null,o))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,n,r,o){let a=this._sanitizer.sanitize(Ut.HTML,r);if(!a)throw xM(r);let s=Zo(a);return this._addSvgIconConfig(e,n,new gr("",s,o))}addSvgIconSet(e,n){return this.addSvgIconSetInNamespace("",e,n)}addSvgIconSetLiteral(e,n){return this.addSvgIconSetLiteralInNamespace("",e,n)}addSvgIconSetInNamespace(e,n,r){return this._addSvgIconSetConfig(e,new gr(n,null,r))}addSvgIconSetLiteralInNamespace(e,n,r){let o=this._sanitizer.sanitize(Ut.HTML,n);if(!o)throw xM(n);let a=Zo(o);return this._addSvgIconSetConfig(e,new gr("",a,r))}registerFontClassAlias(e,n=e){return this._fontCssClassesByAlias.set(e,n),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(e){let n=this._sanitizer.sanitize(Ut.RESOURCE_URL,e);if(!n)throw DM(e);let r=this._cachedIconsByUrl.get(n);return r?q(Ef(r)):this._loadSvgIconFromConfig(new gr(e,null)).pipe(ct(o=>this._cachedIconsByUrl.set(n,o)),le(o=>Ef(o)))}getNamedSvgIcon(e,n=""){let r=EM(n,e),o=this._svgIconConfigs.get(r);if(o)return this._getSvgFromConfig(o);if(o=this._getIconConfigFromResolvers(n,e),o)return this._svgIconConfigs.set(r,o),this._getSvgFromConfig(o);let a=this._iconSetConfigs.get(n);return a?this._getSvgFromIconSetConfigs(e,a):vo(wM(r))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?q(Ef(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe(le(n=>Ef(n)))}_getSvgFromIconSetConfigs(e,n){let r=this._extractIconWithNameFromAnySet(e,n);if(r)return q(r);let o=n.filter(a=>!a.svgText).map(a=>this._loadSvgIconSetFromConfig(a).pipe(Tr(s=>{let d=`Loading icon set URL: ${this._sanitizer.sanitize(Ut.RESOURCE_URL,a.url)} failed: ${s.message}`;return this._errorHandler.handleError(new Error(d)),q(null)})));return tl(o).pipe(le(()=>{let a=this._extractIconWithNameFromAnySet(e,n);if(!a)throw wM(e);return a}))}_extractIconWithNameFromAnySet(e,n){for(let r=n.length-1;r>=0;r--){let o=n[r];if(o.svgText&&o.svgText.toString().indexOf(e)>-1){let a=this._svgElementFromConfig(o),s=this._extractSvgIconFromSet(a,e,o.options);if(s)return s}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe(ct(n=>e.svgText=n),le(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?q(null):this._fetchIcon(e).pipe(ct(n=>e.svgText=n))}_extractSvgIconFromSet(e,n,r){let o=e.querySelector(`[id="${n}"]`);if(!o)return null;let a=o.cloneNode(!0);if(a.removeAttribute("id"),a.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(a,r);if(a.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(a),r);let s=this._svgElementFromString(Zo("<svg></svg>"));return s.appendChild(a),this._setSvgAttributes(s,r)}_svgElementFromString(e){let n=this._document.createElement("DIV");n.innerHTML=e;let r=n.querySelector("svg");if(!r)throw Error("<svg> tag not found");return r}_toSvgElement(e){let n=this._svgElementFromString(Zo("<svg></svg>")),r=e.attributes;for(let o=0;o<r.length;o++){let{name:a,value:s}=r[o];a!=="id"&&n.setAttribute(a,s)}for(let o=0;o<e.childNodes.length;o++)e.childNodes[o].nodeType===this._document.ELEMENT_NODE&&n.appendChild(e.childNodes[o].cloneNode(!0));return n}_setSvgAttributes(e,n){return e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),n&&n.viewBox&&e.setAttribute("viewBox",n.viewBox),e}_fetchIcon(e){let{url:n,options:r}=e,o=r?.withCredentials??!1;if(!this._httpClient)throw uL();if(n==null)throw Error(`Cannot fetch icon from URL "${n}".`);let a=this._sanitizer.sanitize(Ut.RESOURCE_URL,n);if(!a)throw DM(n);let s=this._inProgressUrlFetches.get(a);if(s)return s;let l=this._httpClient.get(a,{responseType:"text",withCredentials:o}).pipe(le(d=>Zo(d)),Ar(()=>this._inProgressUrlFetches.delete(a)),il());return this._inProgressUrlFetches.set(a,l),l}_addSvgIconConfig(e,n,r){return this._svgIconConfigs.set(EM(e,n),r),this}_addSvgIconSetConfig(e,n){let r=this._iconSetConfigs.get(e);return r?r.push(n):this._iconSetConfigs.set(e,[n]),this}_svgElementFromConfig(e){if(!e.svgElement){let n=this._svgElementFromString(e.svgText);this._setSvgAttributes(n,e.options),e.svgElement=n}return e.svgElement}_getIconConfigFromResolvers(e,n){for(let r=0;r<this._resolvers.length;r++){let o=this._resolvers[r](n,e);if(o)return mL(o)?new gr(o.url,null,o.options):new gr(o,null)}}static \u0275fac=function(n){return new(n||t)(W(yt,8),W(Xl),W(Y,8),W(Yt))};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Ef(t){return t.cloneNode(!0)}function EM(t,i){return t+":"+i}function mL(t){return!!(t.url&&t.options)}var fL=["*"],hL=new y("MAT_ICON_DEFAULT_OPTIONS"),pL=new y("mat-icon-location",{providedIn:"root",factory:()=>{let t=c(Y),i=t?t.location:null;return{getPathname:()=>i?i.pathname+i.search:""}}}),SM=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],gL=SM.map(t=>`[${t}]`).join(", "),_L=/^url\(['"]?#(.*?)['"]?\)$/,Dt=(()=>{class t{_elementRef=c(B);_iconRegistry=c(MM);_location=c(pL);_errorHandler=c(Yt);_defaultColor;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(e){let n=this._cleanupFontValue(e);n!==this._fontSet&&(this._fontSet=n,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(e){let n=this._cleanupFontValue(e);n!==this._fontIcon&&(this._fontIcon=n,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=ae.EMPTY;constructor(){let e=c(new ui("aria-hidden"),{optional:!0}),n=c(hL,{optional:!0});n&&(n.color&&(this.color=this._defaultColor=n.color),n.fontSet&&(this.fontSet=n.fontSet)),e||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(e){if(!e)return["",""];let n=e.split(":");switch(n.length){case 1:return["",n[0]];case 2:return n;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let n=this._location.getPathname();n!==this._previousPath&&(this._previousPath=n,this._prependPathToReferences(n))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();let n=this._location.getPathname();this._previousPath=n,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(n),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){let e=this._elementRef.nativeElement,n=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();n--;){let r=e.childNodes[n];(r.nodeType!==1||r.nodeName.toLowerCase()==="svg")&&r.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,n=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(r=>r.length>0);this._previousFontSetClass.forEach(r=>e.classList.remove(r)),n.forEach(r=>e.classList.add(r)),this._previousFontSetClass=n,this.fontIcon!==this._previousFontIconClass&&!n.includes("mat-ligature-font")&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return typeof e=="string"?e.trim().split(" ")[0]:e}_prependPathToReferences(e){let n=this._elementsWithExternalReferences;n&&n.forEach((r,o)=>{r.forEach(a=>{o.setAttribute(a.name,`url('${e}#${a.value}')`)})})}_cacheChildrenWithExternalReferences(e){let n=e.querySelectorAll(gL),r=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let o=0;o<n.length;o++)SM.forEach(a=>{let s=n[o],l=s.getAttribute(a),d=l?l.match(_L):null;if(d){let u=r.get(s);u||(u=[],r.set(s,u)),u.push({name:a,value:d[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[n,r]=this._splitIconName(e);n&&(this._svgNamespace=n),r&&(this._svgName=r),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(r,n).pipe(rt(1)).subscribe(o=>this._setSvgElement(o),o=>{let a=`Error retrieving icon ${n}:${r}! ${o.message}`;this._errorHandler.handleError(new Error(a))})}}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=E({type:t,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(n,r){n&2&&(K("data-mat-icon-type",r._usingFontIcon()?"font":"svg")("data-mat-icon-name",r._svgName||r.fontIcon)("data-mat-icon-namespace",r._svgNamespace||r.fontSet)("fontIcon",r._usingFontIcon()?r.fontIcon:null),kt(r.color?"mat-"+r.color:""),P("mat-icon-inline",r.inline)("mat-icon-no-color",r.color!=="primary"&&r.color!=="accent"&&r.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",Z],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:fL,decls:1,vars:0,template:function(n,r){n&1&&(Se(),te(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
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
`],encapsulation:2,changeDetection:0})}return t})(),Kt=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=$({type:t});static \u0275inj=z({imports:[ve]})}return t})();var vL=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=E({type:t,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(n,r){},styles:[`textarea.cdk-textarea-autosize {
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
`],encapsulation:2,changeDetection:0})}return t})(),bL={passive:!0},IM=(()=>{class t{_platform=c(me);_ngZone=c(V);_renderer=c(vt).createRenderer(null,null);_styleLoader=c(qe);_monitoredElements=new Map;constructor(){}monitor(e){if(!this._platform.isBrowser)return et;this._styleLoader.load(vL);let n=rn(e),r=this._monitoredElements.get(n);if(r)return r.subject;let o=new S,a="cdk-text-field-autofilled",s=d=>{d.animationName==="cdk-text-field-autofill-start"&&!n.classList.contains(a)?(n.classList.add(a),this._ngZone.run(()=>o.next({target:d.target,isAutofilled:!0}))):d.animationName==="cdk-text-field-autofill-end"&&n.classList.contains(a)&&(n.classList.remove(a),this._ngZone.run(()=>o.next({target:d.target,isAutofilled:!1})))},l=this._ngZone.runOutsideAngular(()=>(n.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(n,"animationstart",s,bL)));return this._monitoredElements.set(n,{subject:o,unlisten:l}),o}stopMonitoring(e){let n=rn(e),r=this._monitoredElements.get(n);r&&(r.unlisten(),r.subject.complete(),n.classList.remove("cdk-text-field-autofill-monitored"),n.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(n))}ngOnDestroy(){this._monitoredElements.forEach((e,n)=>this.stopMonitoring(n))}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var TM=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=$({type:t});static \u0275inj=z({})}return t})();var VM=(()=>{class t{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,n){this._renderer=e,this._elementRef=n}setProperty(e,n){this._renderer.setProperty(this._elementRef.nativeElement,e,n)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(n){return new(n||t)(Ee(Oe),Ee(B))};static \u0275dir=N({type:t})}return t})(),yL=(()=>{class t extends VM{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ze(t)))(r||t)}})();static \u0275dir=N({type:t,features:[_e]})}return t})(),_b=new y("");var CL={provide:_b,useExisting:yn(()=>fn),multi:!0};function wL(){let t=Un()?Un().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var DL=new y(""),fn=(()=>{class t extends VM{_compositionMode;_composing=!1;constructor(e,n,r){super(e,n),this._compositionMode=r,this._compositionMode==null&&(this._compositionMode=!wL())}writeValue(e){let n=e??"";this.setProperty("value",n)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(n){return new(n||t)(Ee(Oe),Ee(B),Ee(DL,8))};static \u0275dir=N({type:t,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(n,r){n&1&&M("input",function(a){return r._handleInput(a.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(a){return r._compositionEnd(a.target.value)})},standalone:!1,features:[Ue([CL]),_e]})}return t})();function vb(t){return t==null||bb(t)===0}function bb(t){return t==null?null:Array.isArray(t)||typeof t=="string"?t.length:t instanceof Set?t.size:null}var Pf=new y(""),Ff=new y(""),xL=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,vi=class{static min(i){return EL(i)}static max(i){return ML(i)}static required(i){return SL(i)}static requiredTrue(i){return IL(i)}static email(i){return TL(i)}static minLength(i){return kL(i)}static maxLength(i){return AL(i)}static pattern(i){return RL(i)}static nullValidator(i){return BM()}static compose(i){return WM(i)}static composeAsync(i){return GM(i)}};function EL(t){return i=>{if(i.value==null||t==null)return null;let e=parseFloat(i.value);return!isNaN(e)&&e<t?{min:{min:t,actual:i.value}}:null}}function ML(t){return i=>{if(i.value==null||t==null)return null;let e=parseFloat(i.value);return!isNaN(e)&&e>t?{max:{max:t,actual:i.value}}:null}}function SL(t){return vb(t.value)?{required:!0}:null}function IL(t){return t.value===!0?null:{required:!0}}function TL(t){return vb(t.value)||xL.test(t.value)?null:{email:!0}}function kL(t){return i=>{let e=i.value?.length??bb(i.value);return e===null||e===0?null:e<t?{minlength:{requiredLength:t,actualLength:e}}:null}}function AL(t){return i=>{let e=i.value?.length??bb(i.value);return e!==null&&e>t?{maxlength:{requiredLength:t,actualLength:e}}:null}}function RL(t){if(!t)return BM;let i,e;return typeof t=="string"?(e="",t.charAt(0)!=="^"&&(e+="^"),e+=t,t.charAt(t.length-1)!=="$"&&(e+="$"),i=new RegExp(e)):(e=t.toString(),i=t),n=>{if(vb(n.value))return null;let r=n.value;return i.test(r)?null:{pattern:{requiredPattern:e,actualValue:r}}}}function BM(t){return null}function jM(t){return t!=null}function HM(t){return lr(t)?$e(t):t}function UM(t){let i={};return t.forEach(e=>{i=e!=null?C(C({},i),e):i}),Object.keys(i).length===0?null:i}function zM(t,i){return i.map(e=>e(t))}function OL(t){return!t.validate}function $M(t){return t.map(i=>OL(i)?i:e=>i.validate(e))}function WM(t){if(!t)return null;let i=t.filter(jM);return i.length==0?null:function(e){return UM(zM(e,i))}}function yb(t){return t!=null?WM($M(t)):null}function GM(t){if(!t)return null;let i=t.filter(jM);return i.length==0?null:function(e){let n=zM(e,i).map(HM);return tl(n).pipe(le(UM))}}function Cb(t){return t!=null?GM($M(t)):null}function kM(t,i){return t===null?[i]:Array.isArray(t)?[...t,i]:[t,i]}function qM(t){return t._rawValidators}function YM(t){return t._rawAsyncValidators}function hb(t){return t?Array.isArray(t)?t:[t]:[]}function Sf(t,i){return Array.isArray(t)?t.includes(i):t===i}function AM(t,i){let e=hb(i);return hb(t).forEach(r=>{Sf(e,r)||e.push(r)}),e}function RM(t,i){return hb(i).filter(e=>!Sf(t,e))}var If=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(i){this._rawValidators=i||[],this._composedValidatorFn=yb(this._rawValidators)}_setAsyncValidators(i){this._rawAsyncValidators=i||[],this._composedAsyncValidatorFn=Cb(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(i){this._onDestroyCallbacks.push(i)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(i=>i()),this._onDestroyCallbacks=[]}reset(i=void 0){this.control?.reset(i)}hasError(i,e){return this.control?this.control.hasError(i,e):!1}getError(i,e){return this.control?this.control.getError(i,e):null}},_r=class extends If{name;get formDirective(){return null}get path(){return null}},bi=class extends If{_parent=null;name=null;valueAccessor=null},Tf=class{_cd;constructor(i){this._cd=i}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var Yn=(()=>{class t extends Tf{constructor(e){super(e)}static \u0275fac=function(n){return new(n||t)(Ee(bi,2))};static \u0275dir=N({type:t,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(n,r){n&2&&P("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},standalone:!1,features:[_e]})}return t})(),Lf=(()=>{class t extends Tf{constructor(e){super(e)}static \u0275fac=function(n){return new(n||t)(Ee(_r,10))};static \u0275dir=N({type:t,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["","formArray",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(n,r){n&2&&P("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},standalone:!1,features:[_e]})}return t})();var kc="VALID",Mf="INVALID",ws="PENDING",Ac="DISABLED",Zr=class{},kf=class extends Zr{value;source;constructor(i,e){super(),this.value=i,this.source=e}},Oc=class extends Zr{pristine;source;constructor(i,e){super(),this.pristine=i,this.source=e}},Nc=class extends Zr{touched;source;constructor(i,e){super(),this.touched=i,this.source=e}},Ds=class extends Zr{status;source;constructor(i,e){super(),this.status=i,this.source=e}},Af=class extends Zr{source;constructor(i){super(),this.source=i}},Fc=class extends Zr{source;constructor(i){super(),this.source=i}};function wb(t){return(Vf(t)?t.validators:t)||null}function NL(t){return Array.isArray(t)?yb(t):t||null}function Db(t,i){return(Vf(i)?i.asyncValidators:t)||null}function PL(t){return Array.isArray(t)?Cb(t):t||null}function Vf(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function QM(t,i,e){let n=t.controls;if(!(i?Object.keys(n):n).length)throw new L(1e3,"");if(!n[e])throw new L(1001,"")}function ZM(t,i,e){t._forEachChild((n,r)=>{if(e[r]===void 0)throw new L(1002,"")})}var xs=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(i,e){this._assignValidators(i),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(i){this._rawValidators=this._composedValidatorFn=i}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(i){this._rawAsyncValidators=this._composedAsyncValidatorFn=i}get parent(){return this._parent}get status(){return at(this.statusReactive)}set status(i){at(()=>this.statusReactive.set(i))}_status=mt(()=>this.statusReactive());statusReactive=D(void 0);get valid(){return this.status===kc}get invalid(){return this.status===Mf}get pending(){return this.status===ws}get disabled(){return this.status===Ac}get enabled(){return this.status!==Ac}errors;get pristine(){return at(this.pristineReactive)}set pristine(i){at(()=>this.pristineReactive.set(i))}_pristine=mt(()=>this.pristineReactive());pristineReactive=D(!0);get dirty(){return!this.pristine}get touched(){return at(this.touchedReactive)}set touched(i){at(()=>this.touchedReactive.set(i))}_touched=mt(()=>this.touchedReactive());touchedReactive=D(!1);get untouched(){return!this.touched}_events=new S;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(i){this._assignValidators(i)}setAsyncValidators(i){this._assignAsyncValidators(i)}addValidators(i){this.setValidators(AM(i,this._rawValidators))}addAsyncValidators(i){this.setAsyncValidators(AM(i,this._rawAsyncValidators))}removeValidators(i){this.setValidators(RM(i,this._rawValidators))}removeAsyncValidators(i){this.setAsyncValidators(RM(i,this._rawAsyncValidators))}hasValidator(i){return Sf(this._rawValidators,i)}hasAsyncValidator(i){return Sf(this._rawAsyncValidators,i)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(i={}){let e=this.touched===!1;this.touched=!0;let n=i.sourceControl??this;i.onlySelf||this._parent?.markAsTouched(ne(C({},i),{sourceControl:n})),e&&i.emitEvent!==!1&&this._events.next(new Nc(!0,n))}markAllAsDirty(i={}){this.markAsDirty({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(i))}markAllAsTouched(i={}){this.markAsTouched({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(i))}markAsUntouched(i={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let n=i.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:n})}),i.onlySelf||this._parent?._updateTouched(i,n),e&&i.emitEvent!==!1&&this._events.next(new Nc(!1,n))}markAsDirty(i={}){let e=this.pristine===!0;this.pristine=!1;let n=i.sourceControl??this;i.onlySelf||this._parent?.markAsDirty(ne(C({},i),{sourceControl:n})),e&&i.emitEvent!==!1&&this._events.next(new Oc(!1,n))}markAsPristine(i={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let n=i.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:i.emitEvent})}),i.onlySelf||this._parent?._updatePristine(i,n),e&&i.emitEvent!==!1&&this._events.next(new Oc(!0,n))}markAsPending(i={}){this.status=ws;let e=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new Ds(this.status,e)),this.statusChanges.emit(this.status)),i.onlySelf||this._parent?.markAsPending(ne(C({},i),{sourceControl:e}))}disable(i={}){let e=this._parentMarkedDirty(i.onlySelf);this.status=Ac,this.errors=null,this._forEachChild(r=>{r.disable(ne(C({},i),{onlySelf:!0}))}),this._updateValue();let n=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new kf(this.value,n)),this._events.next(new Ds(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(ne(C({},i),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(i={}){let e=this._parentMarkedDirty(i.onlySelf);this.status=kc,this._forEachChild(n=>{n.enable(ne(C({},i),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:i.emitEvent}),this._updateAncestors(ne(C({},i),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(i,e){i.onlySelf||(this._parent?.updateValueAndValidity(i),i.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(i){this._parent=i}getRawValue(){return this.value}updateValueAndValidity(i={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let n=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===kc||this.status===ws)&&this._runAsyncValidator(n,i.emitEvent)}let e=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new kf(this.value,e)),this._events.next(new Ds(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),i.onlySelf||this._parent?.updateValueAndValidity(ne(C({},i),{sourceControl:e}))}_updateTreeValidity(i={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(i)),this.updateValueAndValidity({onlySelf:!0,emitEvent:i.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Ac:kc}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(i,e){if(this.asyncValidator){this.status=ws,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:i!==!1};let n=HM(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:e,shouldHaveEmitted:i})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let i=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,i}return!1}setErrors(i,e={}){this.errors=i,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(i){let e=i;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((n,r)=>n&&n._find(r),this)}getError(i,e){let n=e?this.get(e):this;return n?.errors?n.errors[i]:null}hasError(i,e){return!!this.getError(i,e)}get root(){let i=this;for(;i._parent;)i=i._parent;return i}_updateControlsErrors(i,e,n){this.status=this._calculateStatus(),i&&this.statusChanges.emit(this.status),(i||n)&&this._events.next(new Ds(this.status,e)),this._parent&&this._parent._updateControlsErrors(i,e,n)}_initObservables(){this.valueChanges=new I,this.statusChanges=new I}_calculateStatus(){return this._allControlsDisabled()?Ac:this.errors?Mf:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(ws)?ws:this._anyControlsHaveStatus(Mf)?Mf:kc}_anyControlsHaveStatus(i){return this._anyControls(e=>e.status===i)}_anyControlsDirty(){return this._anyControls(i=>i.dirty)}_anyControlsTouched(){return this._anyControls(i=>i.touched)}_updatePristine(i,e){let n=!this._anyControlsDirty(),r=this.pristine!==n;this.pristine=n,i.onlySelf||this._parent?._updatePristine(i,e),r&&this._events.next(new Oc(this.pristine,e))}_updateTouched(i={},e){this.touched=this._anyControlsTouched(),this._events.next(new Nc(this.touched,e)),i.onlySelf||this._parent?._updateTouched(i,e)}_onDisabledChange=[];_registerOnCollectionChange(i){this._onCollectionChange=i}_setUpdateStrategy(i){Vf(i)&&i.updateOn!=null&&(this._updateOn=i.updateOn)}_parentMarkedDirty(i){return!i&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(i){return null}_assignValidators(i){this._rawValidators=Array.isArray(i)?i.slice():i,this._composedValidatorFn=NL(this._rawValidators)}_assignAsyncValidators(i){this._rawAsyncValidators=Array.isArray(i)?i.slice():i,this._composedAsyncValidatorFn=PL(this._rawAsyncValidators)}},Es=class extends xs{constructor(i,e,n){super(wb(e),Db(n,e)),this.controls=i,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(i,e){return this.controls[i]?this.controls[i]:(this.controls[i]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(i,e,n={}){this.registerControl(i,e),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}removeControl(i,e={}){this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),delete this.controls[i],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(i,e,n={}){this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),delete this.controls[i],e&&this.registerControl(i,e),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}contains(i){return this.controls.hasOwnProperty(i)&&this.controls[i].enabled}setValue(i,e={}){ZM(this,!0,i),Object.keys(i).forEach(n=>{QM(this,!0,n),this.controls[n].setValue(i[n],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(i,e={}){i!=null&&(Object.keys(i).forEach(n=>{let r=this.controls[n];r&&r.patchValue(i[n],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(i={},e={}){this._forEachChild((n,r)=>{n.reset(i?i[r]:null,ne(C({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new Fc(this))}getRawValue(){return this._reduceChildren({},(i,e,n)=>(i[n]=e.getRawValue(),i))}_syncPendingControls(){let i=this._reduceChildren(!1,(e,n)=>n._syncPendingControls()?!0:e);return i&&this.updateValueAndValidity({onlySelf:!0}),i}_forEachChild(i){Object.keys(this.controls).forEach(e=>{let n=this.controls[e];n&&i(n,e)})}_setUpControls(){this._forEachChild(i=>{i.setParent(this),i._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(i){for(let[e,n]of Object.entries(this.controls))if(this.contains(e)&&i(n))return!0;return!1}_reduceValue(){let i={};return this._reduceChildren(i,(e,n,r)=>((n.enabled||this.disabled)&&(e[r]=n.value),e))}_reduceChildren(i,e){let n=i;return this._forEachChild((r,o)=>{n=e(n,r,o)}),n}_allControlsDisabled(){for(let i of Object.keys(this.controls))if(this.controls[i].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(i){return this.controls.hasOwnProperty(i)?this.controls[i]:null}};var pb=class extends Es{};var Lc=new y("",{factory:()=>Bf}),Bf="always";function KM(t,i){return[...i.path,t]}function Rf(t,i,e=Bf){xb(t,i),i.valueAccessor.writeValue(t.value),(t.disabled||e==="always")&&i.valueAccessor.setDisabledState?.(t.disabled),LL(t,i),BL(t,i),VL(t,i),FL(t,i)}function OM(t,i,e=!0){let n=()=>{};i?.valueAccessor?.registerOnChange(n),i?.valueAccessor?.registerOnTouched(n),Nf(t,i),t&&(i._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function Of(t,i){t.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(i)})}function FL(t,i){if(i.valueAccessor.setDisabledState){let e=n=>{i.valueAccessor.setDisabledState(n)};t.registerOnDisabledChange(e),i._registerOnDestroy(()=>{t._unregisterOnDisabledChange(e)})}}function xb(t,i){let e=qM(t);i.validator!==null?t.setValidators(kM(e,i.validator)):typeof e=="function"&&t.setValidators([e]);let n=YM(t);i.asyncValidator!==null?t.setAsyncValidators(kM(n,i.asyncValidator)):typeof n=="function"&&t.setAsyncValidators([n]);let r=()=>t.updateValueAndValidity();Of(i._rawValidators,r),Of(i._rawAsyncValidators,r)}function Nf(t,i){let e=!1;if(t!==null){if(i.validator!==null){let r=qM(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==i.validator);o.length!==r.length&&(e=!0,t.setValidators(o))}}if(i.asyncValidator!==null){let r=YM(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==i.asyncValidator);o.length!==r.length&&(e=!0,t.setAsyncValidators(o))}}}let n=()=>{};return Of(i._rawValidators,n),Of(i._rawAsyncValidators,n),e}function LL(t,i){i.valueAccessor.registerOnChange(e=>{t._pendingValue=e,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&XM(t,i)})}function VL(t,i){i.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&XM(t,i),t.updateOn!=="submit"&&t.markAsTouched()})}function XM(t,i){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),i.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function BL(t,i){let e=(n,r)=>{i.valueAccessor.writeValue(n),r&&i.viewToModelUpdate(n)};t.registerOnChange(e),i._registerOnDestroy(()=>{t._unregisterOnChange(e)})}function JM(t,i){t==null,xb(t,i)}function jL(t,i){return Nf(t,i)}function eS(t,i){if(!t.hasOwnProperty("model"))return!1;let e=t.model;return e.isFirstChange()?!0:!Object.is(i,e.currentValue)}function HL(t){return Object.getPrototypeOf(t.constructor)===yL}function tS(t,i){t._syncPendingControls(),i.forEach(e=>{let n=e.control;n.updateOn==="submit"&&n._pendingChange&&(e.viewToModelUpdate(n._pendingValue),n._pendingChange=!1)})}function nS(t,i){if(!i)return null;Array.isArray(i);let e,n,r;return i.forEach(o=>{o.constructor===fn?e=o:HL(o)?n=o:r=o}),r||n||e||null}function UL(t,i){let e=t.indexOf(i);e>-1&&t.splice(e,1)}var zL={provide:_r,useExisting:yn(()=>Vc)},Rc=Promise.resolve(),Vc=(()=>{class t extends _r{callSetDisabledState;get submitted(){return at(this.submittedReactive)}_submitted=mt(()=>this.submittedReactive());submittedReactive=D(!1);_directives=new Set;form;ngSubmit=new I;options;constructor(e,n,r){super(),this.callSetDisabledState=r,this.form=new Es({},yb(e),Cb(n))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){Rc.then(()=>{let n=this._findContainer(e.path);e.control=n.registerControl(e.name,e.control),Rf(e.control,e,this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){Rc.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){Rc.then(()=>{let n=this._findContainer(e.path),r=new Es({});JM(r,e),n.registerControl(e.name,r),r.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){Rc.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,n){Rc.then(()=>{this.form.get(e.path).setValue(n)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),tS(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new Af(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static \u0275fac=function(n){return new(n||t)(Ee(Pf,10),Ee(Ff,10),Ee(Lc,8))};static \u0275dir=N({type:t,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(n,r){n&1&&M("submit",function(a){return r.onSubmit(a)})("reset",function(){return r.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[Ue([zL]),_e]})}return t})();function NM(t,i){let e=t.indexOf(i);e>-1&&t.splice(e,1)}function PM(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var Pc=class extends xs{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(i=null,e,n){super(wb(e),Db(n,e)),this._applyFormState(i),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Vf(e)&&(e.nonNullable||e.initialValueIsDefault)&&(PM(i)?this.defaultValue=i.value:this.defaultValue=i)}setValue(i,e={}){this.value=this._pendingValue=i,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(i,e={}){this.setValue(i,e)}reset(i=this.defaultValue,e={}){this._applyFormState(i),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new Fc(this))}_updateValue(){}_anyControls(i){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(i){this._onChange.push(i)}_unregisterOnChange(i){NM(this._onChange,i)}registerOnDisabledChange(i){this._onDisabledChange.push(i)}_unregisterOnDisabledChange(i){NM(this._onDisabledChange,i)}_forEachChild(i){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(i){PM(i)?(this.value=this._pendingValue=i.value,i.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=i}};var $L=t=>t instanceof Pc;var WL={provide:bi,useExisting:yn(()=>vr)},FM=Promise.resolve(),vr=(()=>{class t extends bi{_changeDetectorRef;callSetDisabledState;control=new Pc;static ngAcceptInputType_isDisabled;_registered=!1;viewModel;name="";isDisabled;model;options;update=new I;constructor(e,n,r,o,a,s){super(),this._changeDetectorRef=a,this.callSetDisabledState=s,this._parent=e,this._setValidators(n),this._setAsyncValidators(r),this.valueAccessor=nS(this,o)}ngOnChanges(e){if(this._checkForErrors(),!this._registered||"name"in e){if(this._registered&&(this._checkName(),this.formDirective)){let n=e.name.previousValue;this.formDirective.removeControl({name:n,path:this._getPath(n)})}this._setUpControl()}"isDisabled"in e&&this._updateDisabled(e),eS(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective?.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){Rf(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._checkName()}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(e){FM.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(e){let n=e.isDisabled.currentValue,r=n!==0&&Z(n);FM.then(()=>{r&&!this.control.disabled?this.control.disable():!r&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(e){return this._parent?KM(e,this._parent):[e]}static \u0275fac=function(n){return new(n||t)(Ee(_r,9),Ee(Pf,10),Ee(Ff,10),Ee(_b,10),Ee(Ie,8),Ee(Lc,8))};static \u0275dir=N({type:t,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[Ue([WL]),_e,Be]})}return t})();var jf=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=N({type:t,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return t})();var gb=class extends xs{constructor(i,e,n){super(wb(e),Db(n,e)),this.controls=i,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;at(i){return this.controls[this._adjustIndex(i)]}push(i,e={}){Array.isArray(i)?i.forEach(n=>{this.controls.push(n),this._registerControl(n)}):(this.controls.push(i),this._registerControl(i)),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}insert(i,e,n={}){this.controls.splice(i,0,e),this._registerControl(e),this.updateValueAndValidity({emitEvent:n.emitEvent})}removeAt(i,e={}){let n=this._adjustIndex(i);n<0&&(n=0),this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),this.controls.splice(n,1),this.updateValueAndValidity({emitEvent:e.emitEvent})}setControl(i,e,n={}){let r=this._adjustIndex(i);r<0&&(r=0),this.controls[r]&&this.controls[r]._registerOnCollectionChange(()=>{}),this.controls.splice(r,1),e&&(this.controls.splice(r,0,e),this._registerControl(e)),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(i,e={}){ZM(this,!1,i),i.forEach((n,r)=>{QM(this,!1,r),this.at(r).setValue(n,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(i,e={}){i!=null&&(i.forEach((n,r)=>{this.at(r)&&this.at(r).patchValue(n,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(i=[],e={}){this._forEachChild((n,r)=>{n.reset(i[r],ne(C({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new Fc(this))}getRawValue(){return this.controls.map(i=>i.getRawValue())}clear(i={}){this.controls.length<1||(this._forEachChild(e=>e._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:i.emitEvent}))}_adjustIndex(i){return i<0?i+this.length:i}_syncPendingControls(){let i=this.controls.reduce((e,n)=>n._syncPendingControls()?!0:e,!1);return i&&this.updateValueAndValidity({onlySelf:!0}),i}_forEachChild(i){this.controls.forEach((e,n)=>{i(e,n)})}_updateValue(){this.value=this.controls.filter(i=>i.enabled||this.disabled).map(i=>i.value)}_anyControls(i){return this.controls.some(e=>e.enabled&&i(e))}_setUpControls(){this._forEachChild(i=>this._registerControl(i))}_allControlsDisabled(){for(let i of this.controls)if(i.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(i){i.setParent(this),i._registerOnCollectionChange(this._onCollectionChange)}_find(i){return this.at(i)??null}};var GL=(()=>{class t extends _r{callSetDisabledState;get submitted(){return at(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=mt(()=>this._submittedReactive());_submittedReactive=D(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,n,r){super(),this.callSetDisabledState=r,this._setValidators(e),this._setAsyncValidators(n)}ngOnChanges(e){this.onChanges(e)}ngOnDestroy(){this.onDestroy()}onChanges(e){this._checkFormPresent(),e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(Nf(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(e){let n=this.form.get(e.path);return Rf(n,e,this.callSetDisabledState),n.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),n}getControl(e){return this.form.get(e.path)}removeControl(e){OM(e.control||null,e,!1),UL(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}updateModel(e,n){this.form.get(e.path).setValue(n)}onReset(){this.resetForm()}resetForm(e=void 0,n={}){this.form.reset(e,n),this._submittedReactive.set(!1)}onSubmit(e){return this.submitted=!0,tS(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new Af(this.control)),e?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(e=>{let n=e.control,r=this.form.get(e.path);n!==r&&(OM(n||null,e),$L(r)&&(Rf(r,e,this.callSetDisabledState),e.control=r))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let n=this.form.get(e.path);JM(n,e),n.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){let n=this.form?.get(e.path);n&&jL(n,e)&&n.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){xb(this.form,this),this._oldForm&&Nf(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(n){return new(n||t)(Ee(Pf,10),Ee(Ff,10),Ee(Lc,8))};static \u0275dir=N({type:t,features:[_e,Be]})}return t})();var iS=new y("");var qL={provide:bi,useExisting:yn(()=>Bc)},Bc=(()=>{class t extends bi{_ngModelWarningConfig;_added=!1;viewModel;control;name=null;set isDisabled(e){}model;update=new I;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(e,n,r,o,a){super(),this._ngModelWarningConfig=a,this._parent=e,this._setValidators(n),this._setAsyncValidators(r),this.valueAccessor=nS(this,o)}ngOnChanges(e){this._added||this._setUpControl(),eS(e,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective?.removeControl(this)}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}get path(){return KM(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_setUpControl(){this.control=this.formDirective.addControl(this),this._added=!0}static \u0275fac=function(n){return new(n||t)(Ee(_r,13),Ee(Pf,10),Ee(Ff,10),Ee(_b,10),Ee(iS,8))};static \u0275dir=N({type:t,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},standalone:!1,features:[Ue([qL]),_e,Be]})}return t})();var YL={provide:_r,useExisting:yn(()=>br)},br=(()=>{class t extends GL{form=null;ngSubmit=new I;get control(){return this.form}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ze(t)))(r||t)}})();static \u0275dir=N({type:t,selectors:[["","formGroup",""]],hostBindings:function(n,r){n&1&&M("submit",function(a){return r.onSubmit(a)})("reset",function(){return r.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[Ue([YL]),_e]})}return t})();var rS=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=$({type:t});static \u0275inj=z({})}return t})();function LM(t){return!!t&&(t.asyncValidators!==void 0||t.validators!==void 0||t.updateOn!==void 0)}var Hf=(()=>{class t{useNonNullable=!1;get nonNullable(){let e=new t;return e.useNonNullable=!0,e}group(e,n=null){let r=this._reduceControls(e),o={};return LM(n)?o=n:n!==null&&(o.validators=n.validator,o.asyncValidators=n.asyncValidator),new Es(r,o)}record(e,n=null){let r=this._reduceControls(e);return new pb(r,n)}control(e,n,r){let o={};return this.useNonNullable?(LM(n)?o=n:(o.validators=n,o.asyncValidators=r),new Pc(e,ne(C({},o),{nonNullable:!0}))):new Pc(e,n,r)}array(e,n,r){let o=e.map(a=>this._createControl(a));return new gb(o,n,r)}_reduceControls(e){let n={};return Object.keys(e).forEach(r=>{n[r]=this._createControl(e[r])}),n}_createControl(e){if(e instanceof Pc)return e;if(e instanceof xs)return e;if(Array.isArray(e)){let n=e[0],r=e.length>1?e[1]:null,o=e.length>2?e[2]:null;return this.control(n,r,o)}else return this.control(e)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Kr=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:Lc,useValue:e.callSetDisabledState??Bf}]}}static \u0275fac=function(n){return new(n||t)};static \u0275mod=$({type:t});static \u0275inj=z({imports:[rS]})}return t})(),Uf=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:iS,useValue:e.warnOnNgModelWithFormControl??"always"},{provide:Lc,useValue:e.callSetDisabledState??Bf}]}}static \u0275fac=function(n){return new(n||t)};static \u0275mod=$({type:t});static \u0275inj=z({imports:[rS]})}return t})();var oS=new y("MAT_INPUT_VALUE_ACCESSOR");var zf=(()=>{class t{isErrorState(e,n){return!!(e&&e.invalid&&(e.touched||n&&n.submitted))}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Ss=class{_defaultMatcher;ngControl;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;constructor(i,e,n,r,o){this._defaultMatcher=i,this.ngControl=e,this._parentFormGroup=n,this._parentForm=r,this._stateChanges=o}updateErrorState(){let i=this.errorState,e=this._parentFormGroup||this._parentForm,n=this.matcher||this._defaultMatcher,r=this.ngControl?this.ngControl.control:null,o=n?.isErrorState(r,e)??!1;o!==i&&(this.errorState=o,this._stateChanges.next())}};var QL=["button","checkbox","file","hidden","image","radio","range","reset","submit"],ZL=new y("MAT_INPUT_CONFIG"),Xt=(()=>{class t{_elementRef=c(B);_platform=c(me);ngControl=c(bi,{optional:!0,self:!0});_autofillMonitor=c(IM);_ngZone=c(V);_formField=c(Tc,{optional:!0});_renderer=c(Oe);_uid=c(Ye).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=c(ZL,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new S;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=Vt(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(vi.required)??!1}set required(e){this._required=Vt(e)}_required;get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&sb().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=Vt(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(e=>sb().has(e));constructor(){let e=c(Vc,{optional:!0}),n=c(br,{optional:!0}),r=c(zf),o=c(oS,{optional:!0,self:!0}),a=this._elementRef.nativeElement,s=a.nodeName.toLowerCase();o?Fi(o.value)?this._signalBasedValueAccessor=o:this._inputValueAccessor=o:this._inputValueAccessor=a,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(a,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new Ss(r,this.ngControl,n,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=s==="select",this._isTextarea=s==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=a.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&nt(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let n=this._elementRef.nativeElement;n.type==="number"?(n.type="text",n.setSelectionRange(0,0),n.type="number"):n.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let n=this._elementRef.nativeElement;this._previousPlaceholder=e,e?n.setAttribute("placeholder",e):n.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){QL.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,n=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&n&&n.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let n=this._elementRef.nativeElement;e.length?n.setAttribute("aria-describedby",e.join(" ")):n.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let n=e.target;!n.value&&n.selectionStart===0&&n.selectionEnd===0&&(n.setSelectionRange(1,1),n.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(n){return new(n||t)};static \u0275dir=N({type:t,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(n,r){n&1&&M("focus",function(){return r._focusChanged(!0)})("blur",function(){return r._focusChanged(!1)})("input",function(){return r._onInput()}),n&2&&(Tt("id",r.id)("disabled",r.disabled&&!r.disabledInteractive)("required",r.required),K("name",r.name||null)("readonly",r._getReadonlyAttribute())("aria-disabled",r.disabled&&r.disabledInteractive?"true":null)("aria-invalid",r.empty&&r.required?null:r.errorState)("aria-required",r.required)("id",r.id),P("mat-input-server",r._isServer)("mat-mdc-form-field-textarea-control",r._isInFormField&&r._isTextarea)("mat-mdc-form-field-input-control",r._isInFormField)("mat-mdc-input-disabled-interactive",r.disabledInteractive)("mdc-text-field__input",r._isInFormField)("mat-mdc-native-select-inline",r._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",Z]},exportAs:["matInput"],features:[Ue([{provide:Ic,useExisting:t}]),Be]})}return t})(),Qn=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=$({type:t});static \u0275inj=z({imports:[Ot,Ot,TM,ve]})}return t})();var jc=class{_attachedHost=null;attach(i){return this._attachedHost=i,i.attach(this)}detach(){let i=this._attachedHost;i!=null&&(this._attachedHost=null,i.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(i){this._attachedHost=i}},An=class extends jc{component;viewContainerRef;injector;projectableNodes;bindings;constructor(i,e,n,r,o){super(),this.component=i,this.viewContainerRef=e,this.injector=n,this.projectableNodes=r,this.bindings=o||null}},Rn=class extends jc{templateRef;viewContainerRef;context;injector;constructor(i,e,n,r){super(),this.templateRef=i,this.viewContainerRef=e,this.context=n,this.injector=r}get origin(){return this.templateRef.elementRef}attach(i,e=this.context){return this.context=e,super.attach(i)}detach(){return this.context=void 0,super.detach()}},Eb=class extends jc{element;constructor(i){super(),this.element=i instanceof B?i.nativeElement:i}},Xr=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(i){if(i instanceof An)return this._attachedPortal=i,this.attachComponentPortal(i);if(i instanceof Rn)return this._attachedPortal=i,this.attachTemplatePortal(i);if(this.attachDomPortal&&i instanceof Eb)return this._attachedPortal=i,this.attachDomPortal(i)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(i){this._disposeFn=i}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}},$f=class extends Xr{outletElement;_appRef;_defaultInjector;constructor(i,e,n){super(),this.outletElement=i,this._appRef=e,this._defaultInjector=n}attachComponentPortal(i){let e;if(i.viewContainerRef){let n=i.injector||i.viewContainerRef.injector,r=n.get(Pi,null,{optional:!0})||void 0;e=i.viewContainerRef.createComponent(i.component,{index:i.viewContainerRef.length,injector:n,ngModuleRef:r,projectableNodes:i.projectableNodes||void 0,bindings:i.bindings||void 0}),this.setDisposeFn(()=>e.destroy())}else{let n=this._appRef,r=i.injector||this._defaultInjector||G.NULL,o=r.get(Le,n.injector);e=pm(i.component,{elementInjector:r,environmentInjector:o,projectableNodes:i.projectableNodes||void 0,bindings:i.bindings||void 0}),n.attachView(e.hostView),this.setDisposeFn(()=>{n.viewCount>0&&n.detachView(e.hostView),e.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=i,e}attachTemplatePortal(i){let e=i.viewContainerRef,n=e.createEmbeddedView(i.templateRef,i.context,{injector:i.injector});return n.rootNodes.forEach(r=>this.outletElement.appendChild(r)),n.detectChanges(),this.setDisposeFn(()=>{let r=e.indexOf(n);r!==-1&&e.remove(r)}),this._attachedPortal=i,n}attachDomPortal=i=>{let e=i.element;e.parentNode;let n=this.outletElement.ownerDocument.createComment("dom-portal");e.parentNode.insertBefore(n,e),this.outletElement.appendChild(e),this._attachedPortal=i,super.setDisposeFn(()=>{n.parentNode&&n.parentNode.replaceChild(e,n)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(i){return i.hostView.rootNodes[0]}},aS=(()=>{class t extends Rn{constructor(){let e=c(_t),n=c(It);super(e,n)}static \u0275fac=function(n){return new(n||t)};static \u0275dir=N({type:t,selectors:[["","cdkPortal",""]],exportAs:["cdkPortal"],features:[_e]})}return t})(),hn=(()=>{class t extends Xr{_moduleRef=c(Pi,{optional:!0});_document=c(Y);_viewContainerRef=c(It);_isInitialized=!1;_attachedRef=null;constructor(){super()}get portal(){return this._attachedPortal}set portal(e){this.hasAttached()&&!e&&!this._isInitialized||(this.hasAttached()&&super.detach(),e&&super.attach(e),this._attachedPortal=e||null)}attached=new I;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(e){e.setAttachedHost(this);let n=e.viewContainerRef!=null?e.viewContainerRef:this._viewContainerRef,r=n.createComponent(e.component,{index:n.length,injector:e.injector||n.injector,projectableNodes:e.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:e.bindings||void 0});return n!==this._viewContainerRef&&this._getRootNode().appendChild(r.hostView.rootNodes[0]),super.setDisposeFn(()=>r.destroy()),this._attachedPortal=e,this._attachedRef=r,this.attached.emit(r),r}attachTemplatePortal(e){e.setAttachedHost(this);let n=this._viewContainerRef.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=e,this._attachedRef=n,this.attached.emit(n),n}attachDomPortal=e=>{let n=e.element;n.parentNode;let r=this._document.createComment("dom-portal");e.setAttachedHost(this),n.parentNode.insertBefore(r,n),this._getRootNode().appendChild(n),this._attachedPortal=e,super.setDisposeFn(()=>{r.parentNode&&r.parentNode.replaceChild(n,r)})};_getRootNode(){let e=this._viewContainerRef.element.nativeElement;return e.nodeType===e.ELEMENT_NODE?e:e.parentNode}static \u0275fac=function(n){return new(n||t)};static \u0275dir=N({type:t,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:[0,"cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[_e]})}return t})(),$i=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=$({type:t});static \u0275inj=z({})}return t})();var KL=20,Jr=(()=>{class t{_ngZone=c(V);_platform=c(me);_renderer=c(vt).createRenderer(null,null);_cleanupGlobalListener;constructor(){}_scrolled=new S;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let n=this.scrollContainers.get(e);n&&(n.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=KL){return this._platform.isBrowser?new se(n=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let r=e>0?this._scrolled.pipe(Fd(e)).subscribe(n):this._scrolled.subscribe(n);return this._scrolledCount++,()=>{r.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):q()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,n)=>this.deregister(n)),this._scrolled.complete()}ancestorScrolled(e,n){let r=this.getAncestorScrollContainers(e);return this.scrolled(n).pipe(be(o=>!o||r.indexOf(o)>-1))}getAncestorScrollContainers(e){let n=[];return this.scrollContainers.forEach((r,o)=>{this._scrollableContainsElement(o,e)&&n.push(o)}),n}_scrollableContainsElement(e,n){let r=rn(n),o=e.getElementRef().nativeElement;do if(r==o)return!0;while(r=r.parentElement);return!1}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Wf=(()=>{class t{elementRef=c(B);scrollDispatcher=c(Jr);ngZone=c(V);dir=c(it,{optional:!0});_scrollElement=this.elementRef.nativeElement;_destroyed=new S;_renderer=c(Oe);_cleanupScroll;_elementScrolled=new S;constructor(){}ngOnInit(){this._cleanupScroll=this.ngZone.runOutsideAngular(()=>this._renderer.listen(this._scrollElement,"scroll",e=>this._elementScrolled.next(e))),this.scrollDispatcher.register(this)}ngOnDestroy(){this._cleanupScroll?.(),this._elementScrolled.complete(),this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(e){let n=this.elementRef.nativeElement,r=this.dir&&this.dir.value=="rtl";e.left==null&&(e.left=r?e.end:e.start),e.right==null&&(e.right=r?e.start:e.end),e.bottom!=null&&(e.top=n.scrollHeight-n.clientHeight-e.bottom),r&&vs()!=gi.NORMAL?(e.left!=null&&(e.right=n.scrollWidth-n.clientWidth-e.left),vs()==gi.INVERTED?e.left=e.right:vs()==gi.NEGATED&&(e.left=e.right?-e.right:e.right)):e.right!=null&&(e.left=n.scrollWidth-n.clientWidth-e.right),this._applyScrollToOptions(e)}_applyScrollToOptions(e){let n=this.elementRef.nativeElement;vf()?n.scrollTo(e):(e.top!=null&&(n.scrollTop=e.top),e.left!=null&&(n.scrollLeft=e.left))}measureScrollOffset(e){let n="left",r="right",o=this.elementRef.nativeElement;if(e=="top")return o.scrollTop;if(e=="bottom")return o.scrollHeight-o.clientHeight-o.scrollTop;let a=this.dir&&this.dir.value=="rtl";return e=="start"?e=a?r:n:e=="end"&&(e=a?n:r),a&&vs()==gi.INVERTED?e==n?o.scrollWidth-o.clientWidth-o.scrollLeft:o.scrollLeft:a&&vs()==gi.NEGATED?e==n?o.scrollLeft+o.scrollWidth-o.clientWidth:-o.scrollLeft:e==n?o.scrollLeft:o.scrollWidth-o.clientWidth-o.scrollLeft}static \u0275fac=function(n){return new(n||t)};static \u0275dir=N({type:t,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]]})}return t})(),XL=20,yi=(()=>{class t{_platform=c(me);_listeners;_viewportSize=null;_change=new S;_document=c(Y);constructor(){let e=c(V),n=c(vt).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let r=o=>this._change.next(o);this._listeners=[n.listen("window","resize",r),n.listen("window","orientationchange",r)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:n,height:r}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+r,right:e.left+n,height:r,width:n}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,n=this._getWindow(),r=e.documentElement,o=r.getBoundingClientRect(),a=-o.top||e.body?.scrollTop||n.scrollY||r.scrollTop||0,s=-o.left||e.body?.scrollLeft||n.scrollX||r.scrollLeft||0;return{top:a,left:s}}change(e=XL){return e>0?this._change.pipe(Fd(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Zn=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=$({type:t});static \u0275inj=z({})}return t})(),Mb=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=$({type:t});static \u0275inj=z({imports:[ve,Zn,ve,Zn]})}return t})();var Hc=["*"];function JL(t,i){t&1&&te(0)}var dS=["tabListContainer"],uS=["tabList"],mS=["tabListInner"],fS=["nextPaginator"],hS=["previousPaginator"],eV=["content"];function tV(t,i){}var nV=["tabBodyWrapper"],iV=["tabHeader"];function rV(t,i){}function oV(t,i){if(t&1&&ut(0,rV,0,0,"ng-template",12),t&2){let e=x().$implicit;A("cdkPortalOutlet",e.templateLabel)}}function aV(t,i){if(t&1&&g(0),t&2){let e=x().$implicit;oe(e.textLabel)}}function sV(t,i){if(t&1){let e=Ae();m(0,"div",7,2),M("click",function(){let r=X(e),o=r.$implicit,a=r.$index,s=x(),l=cn(1);return J(s._handleClick(o,l,a))})("cdkFocusChange",function(r){let o=X(e).$index,a=x();return J(a._tabFocusChanged(r,o))}),T(2,"span",8)(3,"div",9),m(4,"span",10)(5,"span",11),j(6,oV,1,1,null,12)(7,aV,1,1),h()()()}if(t&2){let e=i.$implicit,n=i.$index,r=cn(1),o=x();kt(e.labelClass),P("mdc-tab--active",o.selectedIndex===n),A("id",o._getTabLabelId(e,n))("disabled",e.disabled)("fitInkBarToContent",o.fitInkBarToContent),K("tabIndex",o._getTabIndex(n))("aria-posinset",n+1)("aria-setsize",o._tabs.length)("aria-controls",o._getTabContentId(n))("aria-selected",o.selectedIndex===n)("aria-label",e.ariaLabel||null)("aria-labelledby",!e.ariaLabel&&e.ariaLabelledby?e.ariaLabelledby:null),p(3),A("matRippleTrigger",r)("matRippleDisabled",e.disabled||o.disableRipple),p(3),H(e.templateLabel?6:7)}}function lV(t,i){t&1&&te(0)}function cV(t,i){if(t&1){let e=Ae();m(0,"mat-tab-body",13),M("_onCentered",function(){X(e);let r=x();return J(r._removeTabBodyWrapperHeight())})("_onCentering",function(r){X(e);let o=x();return J(o._setTabBodyWrapperHeight(r))})("_beforeCentering",function(r){X(e);let o=x();return J(o._bodyCentered(r))}),h()}if(t&2){let e=i.$implicit,n=i.$index,r=x();kt(e.bodyClass),A("id",r._getTabContentId(n))("content",e.content)("position",e.position)("animationDuration",r.animationDuration)("preserveContent",r.preserveContent),K("tabindex",r.contentTabIndex!=null&&r.selectedIndex===n?r.contentTabIndex:null)("aria-labelledby",r._getTabLabelId(e,n))("aria-hidden",r.selectedIndex!==n)}}var dV=["mat-tab-nav-bar",""],uV=["mat-tab-link",""],mV=new y("MatTabContent"),fV=(()=>{class t{template=c(_t);constructor(){}static \u0275fac=function(n){return new(n||t)};static \u0275dir=N({type:t,selectors:[["","matTabContent",""]],features:[Ue([{provide:mV,useExisting:t}])]})}return t})(),hV=new y("MatTabLabel"),pS=new y("MAT_TAB"),pV=(()=>{class t extends aS{_closestTab=c(pS,{optional:!0});static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ze(t)))(r||t)}})();static \u0275dir=N({type:t,selectors:[["","mat-tab-label",""],["","matTabLabel",""]],features:[Ue([{provide:hV,useExisting:t}]),_e]})}return t})(),gS=new y("MAT_TAB_GROUP"),Uc=(()=>{class t{_viewContainerRef=c(It);_closestTabGroup=c(gS,{optional:!0});disabled=!1;get templateLabel(){return this._templateLabel}set templateLabel(e){this._setTemplateLabelInput(e)}_templateLabel;_explicitContent=void 0;_implicitContent;textLabel="";ariaLabel;ariaLabelledby;labelClass;bodyClass;id=null;_contentPortal=null;get content(){return this._contentPortal}_stateChanges=new S;position=null;origin=null;isActive=!1;constructor(){c(qe).load(_i)}ngOnChanges(e){(e.hasOwnProperty("textLabel")||e.hasOwnProperty("disabled"))&&this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}ngOnInit(){this._contentPortal=new Rn(this._explicitContent||this._implicitContent,this._viewContainerRef)}_setTemplateLabelInput(e){e&&e._closestTab===this&&(this._templateLabel=e)}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=E({type:t,selectors:[["mat-tab"]],contentQueries:function(n,r,o){if(n&1&&bt(o,pV,5)(o,fV,7,_t),n&2){let a;R(a=O())&&(r.templateLabel=a.first),R(a=O())&&(r._explicitContent=a.first)}},viewQuery:function(n,r){if(n&1&&we(_t,7),n&2){let o;R(o=O())&&(r._implicitContent=o.first)}},hostAttrs:["hidden",""],hostVars:1,hostBindings:function(n,r){n&2&&K("id",null)},inputs:{disabled:[2,"disabled","disabled",Z],textLabel:[0,"label","textLabel"],ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],labelClass:"labelClass",bodyClass:"bodyClass",id:"id"},exportAs:["matTab"],features:[Ue([{provide:pS,useExisting:t}]),Be],ngContentSelectors:Hc,decls:1,vars:0,template:function(n,r){n&1&&(Se(),Vl(0,JL,1,0,"ng-template"))},encapsulation:2})}return t})(),Sb="mdc-tab-indicator--active",sS="mdc-tab-indicator--no-transition",Gf=class{_items;_currentItem;constructor(i){this._items=i}hide(){this._items.forEach(i=>i.deactivateInkBar()),this._currentItem=void 0}alignToElement(i){let e=this._items.find(r=>r.elementRef.nativeElement===i),n=this._currentItem;if(e!==n&&(n?.deactivateInkBar(),e)){let r=n?.elementRef.nativeElement.getBoundingClientRect?.();e.activateInkBar(r),this._currentItem=e}}},_S=(()=>{class t{_elementRef=c(B);_inkBarElement=null;_inkBarContentElement=null;_fitToContent=!1;get fitInkBarToContent(){return this._fitToContent}set fitInkBarToContent(e){this._fitToContent!==e&&(this._fitToContent=e,this._inkBarElement&&this._appendInkBarElement())}activateInkBar(e){let n=this._elementRef.nativeElement;if(!e||!n.getBoundingClientRect||!this._inkBarContentElement){n.classList.add(Sb);return}let r=n.getBoundingClientRect(),o=e.width/r.width,a=e.left-r.left;n.classList.add(sS),this._inkBarContentElement.style.setProperty("transform",`translateX(${a}px) scaleX(${o})`),n.getBoundingClientRect(),n.classList.remove(sS),n.classList.add(Sb),this._inkBarContentElement.style.setProperty("transform","")}deactivateInkBar(){this._elementRef.nativeElement.classList.remove(Sb)}ngOnInit(){this._createInkBarElement()}ngOnDestroy(){this._inkBarElement?.remove(),this._inkBarElement=this._inkBarContentElement=null}_createInkBarElement(){let e=this._elementRef.nativeElement.ownerDocument||document,n=this._inkBarElement=e.createElement("span"),r=this._inkBarContentElement=e.createElement("span");n.className="mdc-tab-indicator",r.className="mdc-tab-indicator__content mdc-tab-indicator__content--underline",n.appendChild(this._inkBarContentElement),this._appendInkBarElement()}_appendInkBarElement(){this._inkBarElement;let e=this._fitToContent?this._elementRef.nativeElement.querySelector(".mdc-tab__content"):this._elementRef.nativeElement;e.appendChild(this._inkBarElement)}static \u0275fac=function(n){return new(n||t)};static \u0275dir=N({type:t,inputs:{fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",Z]}})}return t})();var vS=(()=>{class t extends _S{elementRef=c(B);disabled=!1;focus(){this.elementRef.nativeElement.focus()}getOffsetLeft(){return this.elementRef.nativeElement.offsetLeft}getOffsetWidth(){return this.elementRef.nativeElement.offsetWidth}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ze(t)))(r||t)}})();static \u0275dir=N({type:t,selectors:[["","matTabLabelWrapper",""]],hostVars:3,hostBindings:function(n,r){n&2&&(K("aria-disabled",!!r.disabled),P("mat-mdc-tab-disabled",r.disabled))},inputs:{disabled:[2,"disabled","disabled",Z]},features:[_e]})}return t})(),lS={passive:!0},gV=650,_V=100,bS=(()=>{class t{_elementRef=c(B);_changeDetectorRef=c(Ie);_viewportRuler=c(yi);_dir=c(it,{optional:!0});_ngZone=c(V);_platform=c(me);_sharedResizeObserver=c(yf);_injector=c(G);_renderer=c(Oe);_animationsDisabled=je();_eventCleanups;_scrollDistance=0;_selectedIndexChanged=!1;_destroyed=new S;_showPaginationControls=!1;_disableScrollAfter=!0;_disableScrollBefore=!0;_tabLabelCount;_scrollDistanceChanged=!1;_keyManager;_currentTextContent;_stopScrolling=new S;disablePagination=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){let n=isNaN(e)?0:e;this._selectedIndex!=n&&(this._selectedIndexChanged=!0,this._selectedIndex=n,this._keyManager&&this._keyManager.updateActiveItem(n))}_selectedIndex=0;selectFocusedIndex=new I;indexFocused=new I;constructor(){this._eventCleanups=this._ngZone.runOutsideAngular(()=>[this._renderer.listen(this._elementRef.nativeElement,"mouseleave",()=>this._stopInterval())])}ngAfterViewInit(){this._eventCleanups.push(this._renderer.listen(this._previousPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("before"),lS),this._renderer.listen(this._nextPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("after"),lS))}ngAfterContentInit(){let e=this._dir?this._dir.change:q("ltr"),n=this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe(Xi(32),ye(this._destroyed)),r=this._viewportRuler.change(150).pipe(ye(this._destroyed)),o=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new Mc(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(()=>!1),this._keyManager.updateActiveItem(Math.max(this._selectedIndex,0)),Ge(o,{injector:this._injector}),Ft(e,r,n,this._items.changes,this._itemsResized()).pipe(ye(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>{Promise.resolve().then(()=>{this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),this._scrollDistance)),o()})}),this._keyManager?.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.subscribe(a=>{this.indexFocused.emit(a),this._setTabFocus(a)})}_itemsResized(){return typeof ResizeObserver!="function"?et:this._items.changes.pipe(Qe(this._items),gt(e=>new se(n=>this._ngZone.runOutsideAngular(()=>{let r=new ResizeObserver(o=>n.next(o));return e.forEach(o=>r.observe(o.elementRef.nativeElement)),()=>{r.disconnect()}}))),yo(1),be(e=>e.some(n=>n.contentRect.width>0&&n.contentRect.height>0)))}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._keyManager?.destroy(),this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(e){if(!wt(e))switch(e.keyCode){case 13:case 32:if(this.focusIndex!==this.selectedIndex){let n=this._items.get(this.focusIndex);n&&!n.disabled&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(e))}break;default:this._keyManager?.onKeydown(e)}}_onContentChanges(){let e=this._elementRef.nativeElement.textContent;e!==this._currentTextContent&&(this._currentTextContent=e||"",this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(e){!this._isValidIndex(e)||this.focusIndex===e||!this._keyManager||this._keyManager.setActiveItem(e)}_isValidIndex(e){return this._items?!!this._items.toArray()[e]:!0}_setTabFocus(e){if(this._showPaginationControls&&this._scrollToLabel(e),this._items&&this._items.length){this._items.toArray()[e].focus();let n=this._tabListContainer.nativeElement;this._getLayoutDirection()=="ltr"?n.scrollLeft=0:n.scrollLeft=n.scrollWidth-n.offsetWidth}}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_updateTabScrollPosition(){if(this.disablePagination)return;let e=this.scrollDistance,n=this._getLayoutDirection()==="ltr"?-e:e;this._tabList.nativeElement.style.transform=`translateX(${Math.round(n)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(e){this._scrollTo(e)}_scrollHeader(e){let n=this._tabListContainer.nativeElement.offsetWidth,r=(e=="before"?-1:1)*n/3;return this._scrollTo(this._scrollDistance+r)}_handlePaginatorClick(e){this._stopInterval(),this._scrollHeader(e)}_scrollToLabel(e){if(this.disablePagination)return;let n=this._items?this._items.toArray()[e]:null;if(!n)return;let r=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:o,offsetWidth:a}=n.elementRef.nativeElement,s,l;this._getLayoutDirection()=="ltr"?(s=o,l=s+a):(l=this._tabListInner.nativeElement.offsetWidth-o,s=l-a);let d=this.scrollDistance,u=this.scrollDistance+r;s<d?this.scrollDistance-=d-s:l>u&&(this.scrollDistance+=Math.min(l-u,s-d))}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{let e=this._tabListInner.nativeElement.scrollWidth,n=this._elementRef.nativeElement.offsetWidth,r=e-n>=5;r||(this.scrollDistance=0),r!==this._showPaginationControls&&(this._showPaginationControls=r,this._changeDetectorRef.markForCheck())}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=this.scrollDistance==0,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){let e=this._tabListInner.nativeElement.scrollWidth,n=this._tabListContainer.nativeElement.offsetWidth;return e-n||0}_alignInkBarToSelectedTab(){let e=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,n=e?e.elementRef.nativeElement:null;n?this._inkBar.alignToElement(n):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(e,n){n&&n.button!=null&&n.button!==0||(this._stopInterval(),nl(gV,_V).pipe(ye(Ft(this._stopScrolling,this._destroyed))).subscribe(()=>{let{maxScrollDistance:r,distance:o}=this._scrollHeader(e);(o===0||o>=r)&&this._stopInterval()}))}_scrollTo(e){if(this.disablePagination)return{maxScrollDistance:0,distance:0};let n=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(n,e)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:n,distance:this._scrollDistance}}static \u0275fac=function(n){return new(n||t)};static \u0275dir=N({type:t,inputs:{disablePagination:[2,"disablePagination","disablePagination",Z],selectedIndex:[2,"selectedIndex","selectedIndex",mi]},outputs:{selectFocusedIndex:"selectFocusedIndex",indexFocused:"indexFocused"}})}return t})(),vV=(()=>{class t extends bS{_items;_tabListContainer;_tabList;_tabListInner;_nextPaginator;_previousPaginator;_inkBar;ariaLabel;ariaLabelledby;disableRipple=!1;ngAfterContentInit(){this._inkBar=new Gf(this._items),super.ngAfterContentInit()}_itemSelected(e){e.preventDefault()}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ze(t)))(r||t)}})();static \u0275cmp=E({type:t,selectors:[["mat-tab-header"]],contentQueries:function(n,r,o){if(n&1&&bt(o,vS,4),n&2){let a;R(a=O())&&(r._items=a)}},viewQuery:function(n,r){if(n&1&&we(dS,7)(uS,7)(mS,7)(fS,5)(hS,5),n&2){let o;R(o=O())&&(r._tabListContainer=o.first),R(o=O())&&(r._tabList=o.first),R(o=O())&&(r._tabListInner=o.first),R(o=O())&&(r._nextPaginator=o.first),R(o=O())&&(r._previousPaginator=o.first)}},hostAttrs:[1,"mat-mdc-tab-header"],hostVars:4,hostBindings:function(n,r){n&2&&P("mat-mdc-tab-header-pagination-controls-enabled",r._showPaginationControls)("mat-mdc-tab-header-rtl",r._getLayoutDirection()=="rtl")},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],disableRipple:[2,"disableRipple","disableRipple",Z]},features:[_e],ngContentSelectors:Hc,decls:13,vars:10,consts:[["previousPaginator",""],["tabListContainer",""],["tabList",""],["tabListInner",""],["nextPaginator",""],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-before",3,"click","mousedown","touchend","matRippleDisabled"],[1,"mat-mdc-tab-header-pagination-chevron"],[1,"mat-mdc-tab-label-container",3,"keydown"],["role","tablist",1,"mat-mdc-tab-list",3,"cdkObserveContent"],[1,"mat-mdc-tab-labels"],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-after",3,"mousedown","click","touchend","matRippleDisabled"]],template:function(n,r){n&1&&(Se(),m(0,"div",5,0),M("click",function(){return r._handlePaginatorClick("before")})("mousedown",function(a){return r._handlePaginatorPress("before",a)})("touchend",function(){return r._stopInterval()}),T(2,"div",6),h(),m(3,"div",7,1),M("keydown",function(a){return r._handleKeydown(a)}),m(5,"div",8,2),M("cdkObserveContent",function(){return r._onContentChanges()}),m(7,"div",9,3),te(9),h()()(),m(10,"div",10,4),M("mousedown",function(a){return r._handlePaginatorPress("after",a)})("click",function(){return r._handlePaginatorClick("after")})("touchend",function(){return r._stopInterval()}),T(12,"div",6),h()),n&2&&(P("mat-mdc-tab-header-pagination-disabled",r._disableScrollBefore),A("matRippleDisabled",r._disableScrollBefore||r.disableRipple),p(3),P("_mat-animation-noopable",r._animationsDisabled),p(2),K("aria-label",r.ariaLabel||null)("aria-labelledby",r.ariaLabelledby||null),p(5),P("mat-mdc-tab-header-pagination-disabled",r._disableScrollAfter),A("matRippleDisabled",r._disableScrollAfter||r.disableRipple))},dependencies:[ra,Dc],styles:[`.mat-mdc-tab-header {
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
`],encapsulation:2})}return t})(),yS=new y("MAT_TABS_CONFIG"),cS=(()=>{class t extends hn{_host=c(Ib);_ngZone=c(V);_centeringSub=ae.EMPTY;_leavingSub=ae.EMPTY;constructor(){super()}ngOnInit(){super.ngOnInit(),this._centeringSub=this._host._beforeCentering.pipe(Qe(this._host._isCenterPosition())).subscribe(e=>{this._host._content&&e&&!this.hasAttached()&&this._ngZone.run(()=>{Promise.resolve().then(),this.attach(this._host._content)})}),this._leavingSub=this._host._afterLeavingCenter.subscribe(()=>{this._host.preserveContent||this._ngZone.run(()=>this.detach())})}ngOnDestroy(){super.ngOnDestroy(),this._centeringSub.unsubscribe(),this._leavingSub.unsubscribe()}static \u0275fac=function(n){return new(n||t)};static \u0275dir=N({type:t,selectors:[["","matTabBodyHost",""]],features:[_e]})}return t})(),Ib=(()=>{class t{_elementRef=c(B);_dir=c(it,{optional:!0});_ngZone=c(V);_injector=c(G);_renderer=c(Oe);_diAnimationsDisabled=je();_eventCleanups;_initialized=!1;_fallbackTimer;_positionIndex;_dirChangeSubscription=ae.EMPTY;_position;_previousPosition;_onCentering=new I;_beforeCentering=new I;_afterLeavingCenter=new I;_onCentered=new I(!0);_portalHost;_contentElement;_content;animationDuration="500ms";preserveContent=!1;set position(e){this._positionIndex=e,this._computePositionAnimationState()}constructor(){if(this._dir){let e=c(Ie);this._dirChangeSubscription=this._dir.change.subscribe(n=>{this._computePositionAnimationState(n),e.markForCheck()})}}ngOnInit(){this._bindTransitionEvents(),this._position==="center"&&(this._setActiveClass(!0),Ge(()=>this._onCentering.emit(this._elementRef.nativeElement.clientHeight),{injector:this._injector})),this._initialized=!0}ngOnDestroy(){clearTimeout(this._fallbackTimer),this._eventCleanups?.forEach(e=>e()),this._dirChangeSubscription.unsubscribe()}_bindTransitionEvents(){this._ngZone.runOutsideAngular(()=>{let e=this._elementRef.nativeElement,n=r=>{r.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.remove("mat-tab-body-animating"),r.type==="transitionend"&&this._transitionDone())};this._eventCleanups=[this._renderer.listen(e,"transitionstart",r=>{r.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.add("mat-tab-body-animating"),this._transitionStarted())}),this._renderer.listen(e,"transitionend",n),this._renderer.listen(e,"transitioncancel",n)]})}_transitionStarted(){clearTimeout(this._fallbackTimer);let e=this._position==="center";this._beforeCentering.emit(e),e&&this._onCentering.emit(this._elementRef.nativeElement.clientHeight)}_transitionDone(){this._position==="center"?this._onCentered.emit():this._previousPosition==="center"&&this._afterLeavingCenter.emit()}_setActiveClass(e){this._elementRef.nativeElement.classList.toggle("mat-mdc-tab-body-active",e)}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_isCenterPosition(){return this._positionIndex===0}_computePositionAnimationState(e=this._getLayoutDirection()){this._previousPosition=this._position,this._positionIndex<0?this._position=e=="ltr"?"left":"right":this._positionIndex>0?this._position=e=="ltr"?"right":"left":this._position="center",this._animationsDisabled()?this._simulateTransitionEvents():this._initialized&&(this._position==="center"||this._previousPosition==="center")&&(clearTimeout(this._fallbackTimer),this._fallbackTimer=this._ngZone.runOutsideAngular(()=>setTimeout(()=>this._simulateTransitionEvents(),100)))}_simulateTransitionEvents(){this._transitionStarted(),Ge(()=>this._transitionDone(),{injector:this._injector})}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0ms"||this.animationDuration==="0s"}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=E({type:t,selectors:[["mat-tab-body"]],viewQuery:function(n,r){if(n&1&&we(cS,5)(eV,5),n&2){let o;R(o=O())&&(r._portalHost=o.first),R(o=O())&&(r._contentElement=o.first)}},hostAttrs:[1,"mat-mdc-tab-body"],hostVars:1,hostBindings:function(n,r){n&2&&K("inert",r._position==="center"?null:"")},inputs:{_content:[0,"content","_content"],animationDuration:"animationDuration",preserveContent:"preserveContent",position:"position"},outputs:{_onCentering:"_onCentering",_beforeCentering:"_beforeCentering",_onCentered:"_onCentered"},decls:3,vars:6,consts:[["content",""],["cdkScrollable","",1,"mat-mdc-tab-body-content"],["matTabBodyHost",""]],template:function(n,r){n&1&&(m(0,"div",1,0),ut(2,tV,0,0,"ng-template",2),h()),n&2&&P("mat-tab-body-content-left",r._position==="left")("mat-tab-body-content-right",r._position==="right")("mat-tab-body-content-can-animate",r._position==="center"||r._previousPosition==="center")},dependencies:[cS,Wf],styles:[`.mat-mdc-tab-body {
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
`],encapsulation:2})}return t})(),qf=(()=>{class t{_elementRef=c(B);_changeDetectorRef=c(Ie);_ngZone=c(V);_tabsSubscription=ae.EMPTY;_tabLabelSubscription=ae.EMPTY;_tabBodySubscription=ae.EMPTY;_diAnimationsDisabled=je();_allTabs;_tabBodies;_tabBodyWrapper;_tabHeader;_tabs=new or;_indexToSelect=0;_lastFocusedTabIndex=null;_tabBodyWrapperHeight=0;color;get fitInkBarToContent(){return this._fitInkBarToContent}set fitInkBarToContent(e){this._fitInkBarToContent=e,this._changeDetectorRef.markForCheck()}_fitInkBarToContent=!1;stretchTabs=!0;alignTabs=null;dynamicHeight=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){this._indexToSelect=isNaN(e)?null:e}_selectedIndex=null;headerPosition="above";get animationDuration(){return this._animationDuration}set animationDuration(e){let n=e+"";this._animationDuration=/^\d+$/.test(n)?e+"ms":n}_animationDuration;get contentTabIndex(){return this._contentTabIndex}set contentTabIndex(e){this._contentTabIndex=isNaN(e)?null:e}_contentTabIndex=null;disablePagination=!1;disableRipple=!1;preserveContent=!1;get backgroundColor(){return this._backgroundColor}set backgroundColor(e){let n=this._elementRef.nativeElement.classList;n.remove("mat-tabs-with-background",`mat-background-${this.backgroundColor}`),e&&n.add("mat-tabs-with-background",`mat-background-${e}`),this._backgroundColor=e}_backgroundColor;ariaLabel;ariaLabelledby;selectedIndexChange=new I;focusChange=new I;animationDone=new I;selectedTabChange=new I(!0);_groupId;_isServer=!c(me).isBrowser;constructor(){let e=c(yS,{optional:!0});this._groupId=c(Ye).getId("mat-tab-group-"),this.animationDuration=e&&e.animationDuration?e.animationDuration:"500ms",this.disablePagination=e&&e.disablePagination!=null?e.disablePagination:!1,this.dynamicHeight=e&&e.dynamicHeight!=null?e.dynamicHeight:!1,e?.contentTabIndex!=null&&(this.contentTabIndex=e.contentTabIndex),this.preserveContent=!!e?.preserveContent,this.fitInkBarToContent=e&&e.fitInkBarToContent!=null?e.fitInkBarToContent:!1,this.stretchTabs=e&&e.stretchTabs!=null?e.stretchTabs:!0,this.alignTabs=e&&e.alignTabs!=null?e.alignTabs:null}ngAfterContentChecked(){let e=this._indexToSelect=this._clampTabIndex(this._indexToSelect);if(this._selectedIndex!=e){let n=this._selectedIndex==null;if(!n){this.selectedTabChange.emit(this._createChangeEvent(e));let r=this._tabBodyWrapper.nativeElement;r.style.minHeight=r.clientHeight+"px"}Promise.resolve().then(()=>{this._tabs.forEach((r,o)=>r.isActive=o===e),n||(this.selectedIndexChange.emit(e),this._tabBodyWrapper.nativeElement.style.minHeight="")})}this._tabs.forEach((n,r)=>{n.position=r-e,this._selectedIndex!=null&&n.position==0&&!n.origin&&(n.origin=e-this._selectedIndex)}),this._selectedIndex!==e&&(this._selectedIndex=e,this._lastFocusedTabIndex=null,this._changeDetectorRef.markForCheck())}ngAfterContentInit(){this._subscribeToAllTabChanges(),this._subscribeToTabLabels(),this._tabsSubscription=this._tabs.changes.subscribe(()=>{let e=this._clampTabIndex(this._indexToSelect);if(e===this._selectedIndex){let n=this._tabs.toArray(),r;for(let o=0;o<n.length;o++)if(n[o].isActive){this._indexToSelect=this._selectedIndex=o,this._lastFocusedTabIndex=null,r=n[o];break}!r&&n[e]&&Promise.resolve().then(()=>{n[e].isActive=!0,this.selectedTabChange.emit(this._createChangeEvent(e))})}this._changeDetectorRef.markForCheck()})}ngAfterViewInit(){this._tabBodySubscription=this._tabBodies.changes.subscribe(()=>this._bodyCentered(!0))}_subscribeToAllTabChanges(){this._allTabs.changes.pipe(Qe(this._allTabs)).subscribe(e=>{this._tabs.reset(e.filter(n=>n._closestTabGroup===this||!n._closestTabGroup)),this._tabs.notifyOnChanges()})}ngOnDestroy(){this._tabs.destroy(),this._tabsSubscription.unsubscribe(),this._tabLabelSubscription.unsubscribe(),this._tabBodySubscription.unsubscribe()}realignInkBar(){this._tabHeader&&this._tabHeader._alignInkBarToSelectedTab()}updatePagination(){this._tabHeader&&this._tabHeader.updatePagination()}focusTab(e){let n=this._tabHeader;n&&(n.focusIndex=e)}_focusChanged(e){this._lastFocusedTabIndex=e,this.focusChange.emit(this._createChangeEvent(e))}_createChangeEvent(e){let n=new Tb;return n.index=e,this._tabs&&this._tabs.length&&(n.tab=this._tabs.toArray()[e]),n}_subscribeToTabLabels(){this._tabLabelSubscription&&this._tabLabelSubscription.unsubscribe(),this._tabLabelSubscription=Ft(...this._tabs.map(e=>e._stateChanges)).subscribe(()=>this._changeDetectorRef.markForCheck())}_clampTabIndex(e){return Math.min(this._tabs.length-1,Math.max(e||0,0))}_getTabLabelId(e,n){return e.id||`${this._groupId}-label-${n}`}_getTabContentId(e){return`${this._groupId}-content-${e}`}_setTabBodyWrapperHeight(e){if(!this.dynamicHeight||!this._tabBodyWrapperHeight){this._tabBodyWrapperHeight=e;return}let n=this._tabBodyWrapper.nativeElement;n.style.height=this._tabBodyWrapperHeight+"px",this._tabBodyWrapper.nativeElement.offsetHeight&&(n.style.height=e+"px")}_removeTabBodyWrapperHeight(){let e=this._tabBodyWrapper.nativeElement;this._tabBodyWrapperHeight=e.clientHeight,e.style.height="",this._ngZone.run(()=>this.animationDone.emit())}_handleClick(e,n,r){n.focusIndex=r,e.disabled||(this.selectedIndex=r)}_getTabIndex(e){let n=this._lastFocusedTabIndex??this.selectedIndex;return e===n?0:-1}_tabFocusChanged(e,n){e&&e!=="mouse"&&e!=="touch"&&(this._tabHeader.focusIndex=n)}_bodyCentered(e){e&&this._tabBodies?.forEach((n,r)=>n._setActiveClass(r===this._selectedIndex))}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0"||this.animationDuration==="0ms"}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=E({type:t,selectors:[["mat-tab-group"]],contentQueries:function(n,r,o){if(n&1&&bt(o,Uc,5),n&2){let a;R(a=O())&&(r._allTabs=a)}},viewQuery:function(n,r){if(n&1&&we(nV,5)(iV,5)(Ib,5),n&2){let o;R(o=O())&&(r._tabBodyWrapper=o.first),R(o=O())&&(r._tabHeader=o.first),R(o=O())&&(r._tabBodies=o)}},hostAttrs:[1,"mat-mdc-tab-group"],hostVars:11,hostBindings:function(n,r){n&2&&(K("mat-align-tabs",r.alignTabs),kt("mat-"+(r.color||"primary")),ci("--mat-tab-animation-duration",r.animationDuration),P("mat-mdc-tab-group-dynamic-height",r.dynamicHeight)("mat-mdc-tab-group-inverted-header",r.headerPosition==="below")("mat-mdc-tab-group-stretch-tabs",r.stretchTabs))},inputs:{color:"color",fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",Z],stretchTabs:[2,"mat-stretch-tabs","stretchTabs",Z],alignTabs:[0,"mat-align-tabs","alignTabs"],dynamicHeight:[2,"dynamicHeight","dynamicHeight",Z],selectedIndex:[2,"selectedIndex","selectedIndex",mi],headerPosition:"headerPosition",animationDuration:"animationDuration",contentTabIndex:[2,"contentTabIndex","contentTabIndex",mi],disablePagination:[2,"disablePagination","disablePagination",Z],disableRipple:[2,"disableRipple","disableRipple",Z],preserveContent:[2,"preserveContent","preserveContent",Z],backgroundColor:"backgroundColor",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"]},outputs:{selectedIndexChange:"selectedIndexChange",focusChange:"focusChange",animationDone:"animationDone",selectedTabChange:"selectedTabChange"},exportAs:["matTabGroup"],features:[Ue([{provide:gS,useExisting:t}])],ngContentSelectors:Hc,decls:9,vars:8,consts:[["tabHeader",""],["tabBodyWrapper",""],["tabNode",""],[3,"indexFocused","selectFocusedIndex","selectedIndex","disableRipple","disablePagination","aria-label","aria-labelledby"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"id","mdc-tab--active","class","disabled","fitInkBarToContent"],[1,"mat-mdc-tab-body-wrapper"],["role","tabpanel",3,"id","class","content","position","animationDuration","preserveContent"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"click","cdkFocusChange","id","disabled","fitInkBarToContent"],[1,"mdc-tab__ripple"],["mat-ripple","",1,"mat-mdc-tab-ripple",3,"matRippleTrigger","matRippleDisabled"],[1,"mdc-tab__content"],[1,"mdc-tab__text-label"],[3,"cdkPortalOutlet"],["role","tabpanel",3,"_onCentered","_onCentering","_beforeCentering","id","content","position","animationDuration","preserveContent"]],template:function(n,r){n&1&&(Se(),m(0,"mat-tab-header",3,0),M("indexFocused",function(a){return r._focusChanged(a)})("selectFocusedIndex",function(a){return r.selectedIndex=a}),De(2,sV,8,17,"div",4,zr),h(),j(4,lV,1,0),m(5,"div",5,1),De(7,cV,1,10,"mat-tab-body",6,zr),h()),n&2&&(A("selectedIndex",r.selectedIndex||0)("disableRipple",r.disableRipple)("disablePagination",r.disablePagination),lm("aria-label",r.ariaLabel)("aria-labelledby",r.ariaLabelledby),p(2),xe(r._tabs),p(2),H(r._isServer?4:-1),p(),P("_mat-animation-noopable",r._animationsDisabled()),p(2),xe(r._tabs))},dependencies:[vV,vS,Cc,ra,hn,Ib],styles:[`.mdc-tab {
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
`],encapsulation:2})}return t})(),Tb=class{index;tab},kb=(()=>{class t extends bS{_focusedItem=D(null);get fitInkBarToContent(){return this._fitInkBarToContent.value}set fitInkBarToContent(e){this._fitInkBarToContent.next(e),this._changeDetectorRef.markForCheck()}_fitInkBarToContent=new lt(!1);stretchTabs=!0;get animationDuration(){return this._animationDuration}set animationDuration(e){let n=e+"";this._animationDuration=/^\d+$/.test(n)?e+"ms":n}_animationDuration;_items;get backgroundColor(){return this._backgroundColor}set backgroundColor(e){let n=this._elementRef.nativeElement.classList;n.remove("mat-tabs-with-background",`mat-background-${this.backgroundColor}`),e&&n.add("mat-tabs-with-background",`mat-background-${e}`),this._backgroundColor=e}_backgroundColor;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=D(!1);color="primary";tabPanel;_tabListContainer;_tabList;_tabListInner;_nextPaginator;_previousPaginator;_inkBar;constructor(){let e=c(yS,{optional:!0});super(),this.disablePagination=e&&e.disablePagination!=null?e.disablePagination:!1,this.fitInkBarToContent=e&&e.fitInkBarToContent!=null?e.fitInkBarToContent:!1,this.stretchTabs=e&&e.stretchTabs!=null?e.stretchTabs:!0}_itemSelected(){}ngAfterContentInit(){this._inkBar=new Gf(this._items),this._items.changes.pipe(Qe(null),ye(this._destroyed)).subscribe(()=>this.updateActiveLink()),super.ngAfterContentInit(),this._keyManager.change.pipe(Qe(null),ye(this._destroyed)).subscribe(()=>this._focusedItem.set(this._keyManager?.activeItem||null))}ngAfterViewInit(){this.tabPanel,super.ngAfterViewInit()}updateActiveLink(){if(!this._items)return;let e=this._items.toArray();for(let n=0;n<e.length;n++)if(e[n].active){this.selectedIndex=n,this.tabPanel&&(this.tabPanel._activeTabId=e[n].id),this._focusedItem.set(e[n]),this._changeDetectorRef.markForCheck();return}this.selectedIndex=-1}_getRole(){return this.tabPanel?"tablist":this._elementRef.nativeElement.getAttribute("role")}_hasFocus(e){return this._keyManager?.activeItem===e}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=E({type:t,selectors:[["","mat-tab-nav-bar",""]],contentQueries:function(n,r,o){if(n&1&&bt(o,Ab,5),n&2){let a;R(a=O())&&(r._items=a)}},viewQuery:function(n,r){if(n&1&&we(dS,7)(uS,7)(mS,7)(fS,5)(hS,5),n&2){let o;R(o=O())&&(r._tabListContainer=o.first),R(o=O())&&(r._tabList=o.first),R(o=O())&&(r._tabListInner=o.first),R(o=O())&&(r._nextPaginator=o.first),R(o=O())&&(r._previousPaginator=o.first)}},hostAttrs:[1,"mat-mdc-tab-nav-bar","mat-mdc-tab-header"],hostVars:17,hostBindings:function(n,r){n&2&&(K("role",r._getRole()),ci("--mat-tab-animation-duration",r.animationDuration),P("mat-mdc-tab-header-pagination-controls-enabled",r._showPaginationControls)("mat-mdc-tab-header-rtl",r._getLayoutDirection()=="rtl")("mat-mdc-tab-nav-bar-stretch-tabs",r.stretchTabs)("mat-primary",r.color!=="warn"&&r.color!=="accent")("mat-accent",r.color==="accent")("mat-warn",r.color==="warn")("_mat-animation-noopable",r._animationsDisabled))},inputs:{fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",Z],stretchTabs:[2,"mat-stretch-tabs","stretchTabs",Z],animationDuration:"animationDuration",backgroundColor:"backgroundColor",disableRipple:[2,"disableRipple","disableRipple",Z],color:"color",tabPanel:"tabPanel"},exportAs:["matTabNavBar","matTabNav"],features:[_e],attrs:dV,ngContentSelectors:Hc,decls:13,vars:6,consts:[["previousPaginator",""],["tabListContainer",""],["tabList",""],["tabListInner",""],["nextPaginator",""],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-before",3,"click","mousedown","touchend","matRippleDisabled"],[1,"mat-mdc-tab-header-pagination-chevron"],[1,"mat-mdc-tab-link-container",3,"keydown"],[1,"mat-mdc-tab-list",3,"cdkObserveContent"],[1,"mat-mdc-tab-links"],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-after",3,"mousedown","click","touchend","matRippleDisabled"]],template:function(n,r){n&1&&(Se(),m(0,"div",5,0),M("click",function(){return r._handlePaginatorClick("before")})("mousedown",function(a){return r._handlePaginatorPress("before",a)})("touchend",function(){return r._stopInterval()}),T(2,"div",6),h(),m(3,"div",7,1),M("keydown",function(a){return r._handleKeydown(a)}),m(5,"div",8,2),M("cdkObserveContent",function(){return r._onContentChanges()}),m(7,"div",9,3),te(9),h()()(),m(10,"div",10,4),M("mousedown",function(a){return r._handlePaginatorPress("after",a)})("click",function(){return r._handlePaginatorClick("after")})("touchend",function(){return r._stopInterval()}),T(12,"div",6),h()),n&2&&(P("mat-mdc-tab-header-pagination-disabled",r._disableScrollBefore),A("matRippleDisabled",r._disableScrollBefore||r.disableRipple),p(10),P("mat-mdc-tab-header-pagination-disabled",r._disableScrollAfter),A("matRippleDisabled",r._disableScrollAfter||r.disableRipple))},dependencies:[ra,Dc],styles:[`.mdc-tab {
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

.mat-mdc-tab-header {
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

.mat-mdc-tab-links {
  display: flex;
  flex: 1 0 auto;
}
[mat-align-tabs=center] > .mat-mdc-tab-link-container .mat-mdc-tab-links {
  justify-content: center;
}
[mat-align-tabs=end] > .mat-mdc-tab-link-container .mat-mdc-tab-links {
  justify-content: flex-end;
}
.cdk-drop-list .mat-mdc-tab-links, .mat-mdc-tab-links.cdk-drop-list {
  min-height: var(--mat-tab-container-height, 48px);
}

.mat-mdc-tab-link-container {
  display: flex;
  flex-grow: 1;
  overflow: hidden;
  z-index: 1;
  border-bottom-style: solid;
  border-bottom-width: var(--mat-tab-divider-height, 1px);
  border-bottom-color: var(--mat-tab-divider-color, var(--mat-sys-surface-variant));
}

.mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-link-container, .mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-header-pagination {
  background-color: var(--mat-tab-background-color);
}
.mat-mdc-tab-nav-bar.mat-tabs-with-background.mat-primary > .mat-mdc-tab-link-container .mat-mdc-tab-link .mdc-tab__text-label {
  color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-nav-bar.mat-tabs-with-background.mat-primary > .mat-mdc-tab-link-container .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-nav-bar.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-link-container .mat-mdc-tab-link:not(.mdc-tab--active) .mdc-tab__text-label {
  color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-nav-bar.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-link-container .mat-mdc-tab-link:not(.mdc-tab--active) .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-link-container .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-link-container .mat-focus-indicator::before, .mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-focus-indicator::before {
  border-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-link-container .mat-ripple-element, .mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-link-container .mdc-tab__ripple::before, .mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-ripple-element, .mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mdc-tab__ripple::before {
  background-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-link-container .mat-mdc-tab-header-pagination-chevron, .mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron {
  color: var(--mat-tab-foreground-color);
}
`],encapsulation:2})}return t})(),Ab=(()=>{class t extends _S{_tabNavBar=c(kb);elementRef=c(B);_focusMonitor=c(Hi);_destroyed=new S;_isActive=!1;_tabIndex=mt(()=>this._tabNavBar._focusedItem()===this?this.tabIndex:-1);get active(){return this._isActive}set active(e){e!==this._isActive&&(this._isActive=e,this._tabNavBar.updateActiveLink())}disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=D(!1);tabIndex=0;rippleConfig;get rippleDisabled(){return this.disabled||this.disableRipple||this._tabNavBar.disableRipple||!!this.rippleConfig.disabled}id=c(Ye).getId("mat-tab-link-");constructor(){super(),c(qe).load(_i);let e=c(ia,{optional:!0}),n=c(new ui("tabindex"),{optional:!0});this.rippleConfig=e||{},this.tabIndex=n==null?0:parseInt(n)||0,je()&&(this.rippleConfig.animation={enterDuration:0,exitDuration:0}),this._tabNavBar._fitInkBarToContent.pipe(ye(this._destroyed)).subscribe(r=>{this.fitInkBarToContent=r})}focus(){this.elementRef.nativeElement.focus()}ngAfterViewInit(){this._focusMonitor.monitor(this.elementRef)}ngOnDestroy(){this._destroyed.next(),this._destroyed.complete(),super.ngOnDestroy(),this._focusMonitor.stopMonitoring(this.elementRef)}_handleFocus(){this._tabNavBar.focusIndex=this._tabNavBar._items.toArray().indexOf(this)}_handleKeydown(e){(e.keyCode===32||e.keyCode===13)&&(this.disabled?e.preventDefault():this._tabNavBar.tabPanel&&(e.keyCode===32&&e.preventDefault(),this.elementRef.nativeElement.click()))}_getAriaControls(){return this._tabNavBar.tabPanel?this._tabNavBar.tabPanel?.id:this.elementRef.nativeElement.getAttribute("aria-controls")}_getAriaSelected(){return this._tabNavBar.tabPanel?this.active?"true":"false":this.elementRef.nativeElement.getAttribute("aria-selected")}_getAriaCurrent(){return this.active&&!this._tabNavBar.tabPanel?"page":null}_getRole(){return this._tabNavBar.tabPanel?"tab":this.elementRef.nativeElement.getAttribute("role")}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=E({type:t,selectors:[["","mat-tab-link",""],["","matTabLink",""]],hostAttrs:[1,"mdc-tab","mat-mdc-tab-link","mat-focus-indicator"],hostVars:11,hostBindings:function(n,r){n&1&&M("focus",function(){return r._handleFocus()})("keydown",function(a){return r._handleKeydown(a)}),n&2&&(K("aria-controls",r._getAriaControls())("aria-current",r._getAriaCurrent())("aria-disabled",r.disabled)("aria-selected",r._getAriaSelected())("id",r.id)("tabIndex",r._tabIndex())("role",r._getRole()),P("mat-mdc-tab-disabled",r.disabled)("mdc-tab--active",r.active))},inputs:{active:[2,"active","active",Z],disabled:[2,"disabled","disabled",Z],disableRipple:[2,"disableRipple","disableRipple",Z],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:mi(e)],id:"id"},exportAs:["matTabLink"],features:[_e],attrs:uV,ngContentSelectors:Hc,decls:5,vars:2,consts:[[1,"mdc-tab__ripple"],["mat-ripple","",1,"mat-mdc-tab-ripple",3,"matRippleTrigger","matRippleDisabled"],[1,"mdc-tab__content"],[1,"mdc-tab__text-label"]],template:function(n,r){n&1&&(Se(),T(0,"span",0)(1,"div",1),m(2,"span",2)(3,"span",3),te(4),h()()),n&2&&(p(),A("matRippleTrigger",r.elementRef.nativeElement)("matRippleDisabled",r.rippleDisabled))},dependencies:[ra],styles:[`.mat-mdc-tab-link {
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
.mat-mdc-tab-link.mdc-tab {
  flex-grow: 0;
}
.mat-mdc-tab-link .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-active-indicator-color, var(--mat-sys-primary));
  border-top-width: var(--mat-tab-active-indicator-height, 2px);
  border-radius: var(--mat-tab-active-indicator-shape, 0);
}
.mat-mdc-tab-link:hover .mdc-tab__text-label {
  color: var(--mat-tab-inactive-hover-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab-link:focus .mdc-tab__text-label {
  color: var(--mat-tab-inactive-focus-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab-link.mdc-tab--active .mdc-tab__text-label {
  color: var(--mat-tab-active-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab-link.mdc-tab--active .mdc-tab__ripple::before,
.mat-mdc-tab-link.mdc-tab--active .mat-ripple-element {
  background-color: var(--mat-tab-active-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab-link.mdc-tab--active:hover .mdc-tab__text-label {
  color: var(--mat-tab-active-hover-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab-link.mdc-tab--active:hover .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-active-hover-indicator-color, var(--mat-sys-primary));
}
.mat-mdc-tab-link.mdc-tab--active:focus .mdc-tab__text-label {
  color: var(--mat-tab-active-focus-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab-link.mdc-tab--active:focus .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-active-focus-indicator-color, var(--mat-sys-primary));
}
.mat-mdc-tab-link.mat-mdc-tab-disabled {
  opacity: 0.4;
  pointer-events: none;
}
.mat-mdc-tab-link.mat-mdc-tab-disabled .mdc-tab__content {
  pointer-events: none;
}
.mat-mdc-tab-link.mat-mdc-tab-disabled .mdc-tab__ripple::before,
.mat-mdc-tab-link.mat-mdc-tab-disabled .mat-ripple-element {
  background-color: var(--mat-tab-disabled-ripple-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-tab-link .mdc-tab__ripple::before {
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
.mat-mdc-tab-link .mdc-tab__text-label {
  color: var(--mat-tab-inactive-label-text-color, var(--mat-sys-on-surface));
  display: inline-flex;
  align-items: center;
}
.mat-mdc-tab-link .mdc-tab__content {
  position: relative;
  pointer-events: auto;
}
.mat-mdc-tab-link:hover .mdc-tab__ripple::before {
  opacity: 0.04;
}
.mat-mdc-tab-link.cdk-program-focused .mdc-tab__ripple::before, .mat-mdc-tab-link.cdk-keyboard-focused .mdc-tab__ripple::before {
  opacity: 0.12;
}
.mat-mdc-tab-link .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab-header.mat-mdc-tab-nav-bar-stretch-tabs .mat-mdc-tab-link {
  flex-grow: 1;
}
.mat-mdc-tab-link::before {
  margin: 5px;
}

@media (max-width: 599px) {
  .mat-mdc-tab-link {
    min-width: 72px;
  }
}
`],encapsulation:2,changeDetection:0})}return t})();var Yf=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=$({type:t});static \u0275inj=z({imports:[ve]})}return t})();function yV(t,i){if(t&1&&(m(0,"div",15)(1,"mat-icon"),g(2,"error_outline"),h(),m(3,"span"),g(4),h()()),t&2){let e=x();p(4),oe(e.errorMessage())}}function CV(t,i){if(t&1&&(m(0,"div",15)(1,"mat-icon"),g(2,"error_outline"),h(),m(3,"span"),g(4),h()()),t&2){let e=x();p(4),oe(e.errorMessage())}}function wV(t,i){if(t&1&&(m(0,"div",24)(1,"mat-icon"),g(2,"check_circle_outline"),h(),m(3,"span"),g(4),h()()),t&2){let e=x();p(4),oe(e.successMessage())}}var Qf=class t{email=Ne.required();password=Ne.required();name=Ne.required();lastName=Ne.required();errorMessage=Ne.required();successMessage=Ne.required();hide=D(!0);clickEvent(i){this.hide.set(!this.hide()),i.stopPropagation()}clearError(){this.errorMessage.set(""),this.successMessage.set("")}loginSubmitEvent=new I;submitLogin(){this.loginSubmitEvent.emit()}registerSubmitEvent=new I;submitRegister(){this.registerSubmitEvent.emit()}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=E({type:t,selectors:[["login-container"]],inputs:{email:[1,"email"],password:[1,"password"],name:[1,"name"],lastName:[1,"lastName"],errorMessage:[1,"errorMessage"],successMessage:[1,"successMessage"]},outputs:{email:"emailChange",password:"passwordChange",name:"nameChange",lastName:"lastNameChange",errorMessage:"errorMessageChange",successMessage:"successMessageChange",loginSubmitEvent:"loginSubmitEvent",registerSubmitEvent:"registerSubmitEvent"},decls:78,vars:17,consts:[["appearance","outlined",1,"login-card"],["mat-stretch-tabs","false","mat-align-tabs","center","dynamicHeight","","animationDuration","200ms",3,"selectedIndexChange"],["label","Logga in"],[1,"tab-content"],[1,"tab-header"],[1,"tab-icon-wrap"],[1,"tab-icon"],[1,"tab-title"],[1,"tab-subtitle"],[1,"form-fields"],["appearance","outline",1,"full-width"],["matPrefix","",1,"field-prefix-icon"],["matInput","","type","email","autocomplete","email",3,"ngModelChange","keydown.enter","ngModel"],["matInput","","autocomplete","current-password",3,"ngModelChange","keydown.enter","ngModel","type"],["matIconButton","","matSuffix","",3,"click"],["role","alert",1,"form-message","form-message--error"],["mat-flat-button","",1,"submit-button",3,"click"],["iconPositionEnd",""],["label","Registrera"],[1,"name-row"],["appearance","outline"],["matInput","","autocomplete","given-name",3,"ngModelChange","keydown.enter","ngModel"],["matInput","","autocomplete","family-name",3,"ngModelChange","keydown.enter","ngModel"],["matInput","","autocomplete","new-password",3,"ngModelChange","keydown.enter","ngModel","type"],["role","status",1,"form-message","form-message--success"]],template:function(e,n){e&1&&(m(0,"mat-card",0)(1,"mat-tab-group",1),M("selectedIndexChange",function(){return n.clearError()}),m(2,"mat-tab",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"mat-icon",6),g(7,"login"),h()(),m(8,"h2",7),g(9,"V\xE4lkommen tillbaka"),h(),m(10,"p",8),g(11,"Logga in p\xE5 "),m(12,"strong"),g(13,"K\xEEndGuard"),h()()(),m(14,"div",9)(15,"mat-form-field",10)(16,"mat-label"),g(17,"E-postadress"),h(),m(18,"mat-icon",11),g(19,"mail_outline"),h(),m(20,"input",12),Xe("ngModelChange",function(o){return ke(n.email,o)||(n.email=o),o}),M("keydown.enter",function(){return n.submitLogin()}),h()(),m(21,"mat-form-field",10)(22,"mat-label"),g(23,"L\xF6senord"),h(),m(24,"mat-icon",11),g(25,"lock_outline"),h(),m(26,"input",13),Xe("ngModelChange",function(o){return ke(n.password,o)||(n.password=o),o}),M("keydown.enter",function(){return n.submitLogin()}),h(),m(27,"button",14),M("click",function(o){return n.clickEvent(o)}),m(28,"mat-icon"),g(29),h()()()(),j(30,yV,5,1,"div",15),m(31,"button",16),M("click",function(){return n.submitLogin()}),g(32," Logga in "),m(33,"mat-icon",17),g(34,"arrow_forward"),h()()()(),m(35,"mat-tab",18)(36,"div",3)(37,"div",4)(38,"div",5)(39,"mat-icon",6),g(40,"person_add"),h()(),m(41,"h2",7),g(42,"Skapa konto"),h(),m(43,"p",8),g(44,"Kom ig\xE5ng med "),m(45,"strong"),g(46,"K\xEEndGuard"),h()()(),m(47,"div",9)(48,"div",19)(49,"mat-form-field",20)(50,"mat-label"),g(51,"F\xF6rnamn"),h(),m(52,"input",21),Xe("ngModelChange",function(o){return ke(n.name,o)||(n.name=o),o}),M("keydown.enter",function(){return n.submitRegister()}),h()(),m(53,"mat-form-field",20)(54,"mat-label"),g(55,"Efternamn"),h(),m(56,"input",22),Xe("ngModelChange",function(o){return ke(n.lastName,o)||(n.lastName=o),o}),M("keydown.enter",function(){return n.submitRegister()}),h()()(),m(57,"mat-form-field",10)(58,"mat-label"),g(59,"E-postadress"),h(),m(60,"mat-icon",11),g(61,"mail_outline"),h(),m(62,"input",12),Xe("ngModelChange",function(o){return ke(n.email,o)||(n.email=o),o}),M("keydown.enter",function(){return n.submitRegister()}),h()(),m(63,"mat-form-field",10)(64,"mat-label"),g(65,"L\xF6senord"),h(),m(66,"mat-icon",11),g(67,"lock_outline"),h(),m(68,"input",23),Xe("ngModelChange",function(o){return ke(n.password,o)||(n.password=o),o}),M("keydown.enter",function(){return n.submitRegister()}),h(),m(69,"button",14),M("click",function(o){return n.clickEvent(o)}),m(70,"mat-icon"),g(71),h()()()(),j(72,CV,5,1,"div",15),j(73,wV,5,1,"div",24),m(74,"button",16),M("click",function(){return n.submitRegister()}),g(75," Registrera konto "),m(76,"mat-icon",17),g(77,"arrow_forward"),h()()()()()()),e&2&&(p(20),Ke("ngModel",n.email),p(6),Ke("ngModel",n.password),A("type",n.hide()?"password":"text"),p(),K("aria-label","Visa/d\xF6lj l\xF6senord")("aria-pressed",n.hide()),p(2),oe(n.hide()?"visibility_off":"visibility"),p(),H(n.errorMessage()!==""?30:-1),p(22),Ke("ngModel",n.name),p(4),Ke("ngModel",n.lastName),p(6),Ke("ngModel",n.email),p(6),Ke("ngModel",n.password),A("type",n.hide()?"password":"text"),p(),K("aria-label","Visa/d\xF6lj l\xF6senord")("aria-pressed",n.hide()),p(2),oe(n.hide()?"visibility_off":"visibility"),p(),H(n.errorMessage()!==""?72:-1),p(),H(n.successMessage()!==""?73:-1))},dependencies:[Kr,fn,Yn,vr,Ot,Rt,qn,Df,xf,Qn,Xt,ht,Wt,zi,Kt,Dt,Ct,qf,Uc],styles:["[_nghost-%COMP%]{width:100%;max-width:460px}.login-card[_ngcontent-%COMP%]{width:100%;border-radius:20px;box-shadow:var(--mat-sys-level2);overflow:hidden}.tab-content[_ngcontent-%COMP%]{padding:2rem 2rem 2.5rem;display:flex;flex-direction:column;gap:1.5rem}.tab-header[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;text-align:center;gap:.4rem;padding-top:.25rem}.tab-icon-wrap[_ngcontent-%COMP%]{width:56px;height:56px;border-radius:50%;background:var(--mat-sys-primary-container);display:flex;align-items:center;justify-content:center;margin-bottom:.5rem}.tab-icon[_ngcontent-%COMP%]{color:var(--mat-sys-on-primary-container);font-size:1.75rem;width:1.75rem;height:1.75rem}.tab-title[_ngcontent-%COMP%]{font:var(--mat-sys-headline-small);margin:0}.tab-subtitle[_ngcontent-%COMP%]{margin:0}.tab-subtitle[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:var(--mat-sys-primary);font-weight:700}.form-fields[_ngcontent-%COMP%]{display:flex;flex-direction:column}.full-width[_ngcontent-%COMP%]{width:100%}.name-row[_ngcontent-%COMP%]{display:flex;gap:.75rem}.field-prefix-icon[_ngcontent-%COMP%]{color:var(--mat-sys-on-surface-variant);font-size:1.1rem;width:1.1rem;height:1.1rem}.form-message[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.6rem;padding:.75rem 1rem;border-radius:10px;font:var(--mat-sys-body-small)}.form-message[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:1.15rem;width:1.15rem;height:1.15rem;flex-shrink:0}.form-message--error[_ngcontent-%COMP%]{background:var(--mat-sys-error-container);color:var(--mat-sys-on-error-container)}.form-message--success[_ngcontent-%COMP%]{background:var(--mat-sys-tertiary-container);color:var(--mat-sys-on-tertiary-container)}.submit-button[_ngcontent-%COMP%]{width:100%;height:48px;border-radius:12px}"]})};var st={apiUrl:"https://salad-dramatize-customary.ngrok-free.dev",wsUrl:"wss://salad-dramatize-customary.ngrok-free.dev"};var Ts=class t{baseUrl=`${st.apiUrl}/api/auth`;http=c(yt);login(i,e){let n={email:i,password:e};return this.http.post(`${this.baseUrl}/login`,n).pipe(ct(r=>{sessionStorage.setItem("token",r.token),sessionStorage.setItem("UserId",r.id.toString()),sessionStorage.setItem("role",r.role)}))}register(i,e,n){let r={name:i,email:e,password:n};return this.http.post(`${this.baseUrl}/register`,r)}getRole(){return sessionStorage.getItem("role")}static \u0275fac=function(e){return new(e||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})};var Zf=class t{email=D("");password=D("");name=D("");lastName=D("");errorMessage=D("");successMessage=D("");router=c(dn);authService=c(Ts);onLoginSubmit(){this.authService.login(this.email(),this.password()).subscribe({error:i=>{this.errorMessage.set(i.error.error)},next:i=>{switch(i.role){case"ADMIN":this.router.navigate(["/admin"]);break;case"TEACHER":this.router.navigate(["/app"]);break;default:this.router.navigate(["/"])}}})}onRegisterSubmit(){let i=this.name()+" "+this.lastName(),e=this.email().trim(),n=this.password();this.authService.register(i,e,n).subscribe({error:r=>{this.successMessage.set(""),this.errorMessage.set(r.error.error)},next:r=>{this.errorMessage.set(""),this.successMessage.set(r.message)}})}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=E({type:t,selectors:[["login-page"]],decls:32,vars:6,consts:[[1,"login-page-wrapper"],[1,"login-page-left-panel"],[1,"blob","blob--1"],[1,"blob","blob--2"],[1,"content"],["width","auto","height","120px","alt","KindGuard logo","src","Kindguardlogo.png"],[1,"headline"],[1,"body"],[1,"badge-divider"],[1,"badges"],[1,"badge"],[1,"login-page-form"],["id","login-page-banner"],["id","banner-logo","alt","KindGuard logo","src","Kindguardlogo.png"],[1,"blob","blob--3"],[1,"blob","blob--4"],[1,"login-page-container",3,"emailChange","passwordChange","nameChange","lastNameChange","errorMessageChange","successMessageChange","loginSubmitEvent","registerSubmitEvent","email","password","name","lastName","errorMessage","successMessage"]],template:function(e,n){e&1&&(m(0,"div",0)(1,"div",1),T(2,"div",2)(3,"div",3),m(4,"div",4),T(5,"img",5),m(6,"h1",6),g(7,"Skapa tillsammans,"),T(8,"br"),g(9,"helt utan gr\xE4nser."),h(),m(10,"p",7),g(11,"Gl\xF6m l\xE5sta filer och versionskaos. Se \xE4ndringar direkt n\xE4r de sker, s\xE5 att fokus hamnar p\xE5 l\xE4randet i st\xE4llet f\xF6r tekniken."),h(),T(12,"div",8),m(13,"div",9)(14,"span",10)(15,"mat-icon"),g(16,"groups"),h(),g(17," Kollaborativ journalskrivning "),h(),m(18,"span",10)(19,"mat-icon"),g(20,"history"),h(),g(21," Optimistisk versionshantering "),h(),m(22,"span",10)(23,"mat-icon"),g(24,"psychology_alt"),h(),g(25," Flexibelt l\xE4rande "),h()()()(),m(26,"div",11)(27,"div",12),T(28,"img",13)(29,"div",14)(30,"div",15),h(),m(31,"login-container",16),Xe("emailChange",function(o){return ke(n.email,o)||(n.email=o),o})("passwordChange",function(o){return ke(n.password,o)||(n.password=o),o})("nameChange",function(o){return ke(n.name,o)||(n.name=o),o})("lastNameChange",function(o){return ke(n.lastName,o)||(n.lastName=o),o})("errorMessageChange",function(o){return ke(n.errorMessage,o)||(n.errorMessage=o),o})("successMessageChange",function(o){return ke(n.successMessage,o)||(n.successMessage=o),o}),M("loginSubmitEvent",function(){return n.onLoginSubmit()})("registerSubmitEvent",function(){return n.onRegisterSubmit()}),h()()()),e&2&&(p(31),Ke("email",n.email)("password",n.password)("name",n.name)("lastName",n.lastName)("errorMessage",n.errorMessage)("successMessage",n.successMessage))},dependencies:[Qf,Dt],styles:["[_nghost-%COMP%]{display:block;width:100%;height:100%}.login-page-wrapper[_ngcontent-%COMP%]{display:flex;width:100%;min-height:100vh}.login-page-left-panel[_ngcontent-%COMP%]{flex:1.1;background:var(--mat-sys-primary);display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden;padding:3rem}#login-page-banner[_ngcontent-%COMP%]{background:var(--mat-sys-primary);box-sizing:border-box;justify-content:center;position:absolute;display:none;width:100%;top:0;left:0;height:7em;min-height:fit-content}#login-page-banner[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{filter:brightness(0) invert(1);opacity:.95;width:auto;min-height:5rem;max-height:8rem;max-width:100%}@media(max-width:1050px){.login-page-left-panel[_ngcontent-%COMP%]{display:none}#login-page-banner[_ngcontent-%COMP%]{display:flex}}.blob[_ngcontent-%COMP%]{position:absolute;border-radius:50%;background:var(--mat-sys-on-primary);opacity:.06}.blob--1[_ngcontent-%COMP%]{width:480px;height:480px;bottom:-140px;right:-100px}.blob--2[_ngcontent-%COMP%]{width:260px;height:260px;top:-60px;left:-60px}.blob--3[_ngcontent-%COMP%]{width:260px;height:260px;right:0;bottom:0}.blob--4[_ngcontent-%COMP%]{width:130px;height:130px;left:0;top:0}.content[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start;gap:1.5rem}.content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{filter:brightness(0) invert(1);opacity:.95;margin-left:-11px}.headline[_ngcontent-%COMP%]{font:var(--mat-sys-display-small);color:var(--mat-sys-on-primary);margin:0;line-height:1.15}.body[_ngcontent-%COMP%]{font:var(--mat-sys-body-large);color:var(--mat-sys-on-primary);opacity:.82;margin:0;max-width:320px;line-height:1.6}.badge-divider[_ngcontent-%COMP%]{width:40px;height:3px;background:var(--mat-sys-on-primary);opacity:.35}.badges[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.6rem}.badge[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem;font:var(--mat-sys-label-large);color:var(--mat-sys-on-primary);opacity:.75}.badge[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:1.1rem;width:1.1rem;height:1.1rem}.login-page-form[_ngcontent-%COMP%]{flex:1;display:flex;justify-content:center;align-items:center;background:var(--mat-sys-surface);padding:2rem}"]})};var an=(()=>{class t{get vertical(){return this._vertical}set vertical(e){this._vertical=Vt(e)}_vertical=!1;get inset(){return this._inset}set inset(e){this._inset=Vt(e)}_inset=!1;static \u0275fac=function(n){return new(n||t)};static \u0275cmp=E({type:t,selectors:[["mat-divider"]],hostAttrs:["role","separator",1,"mat-divider"],hostVars:7,hostBindings:function(n,r){n&2&&(K("aria-orientation",r.vertical?"vertical":"horizontal"),P("mat-divider-vertical",r.vertical)("mat-divider-horizontal",!r.vertical)("mat-divider-inset",r.inset))},inputs:{vertical:"vertical",inset:"inset"},decls:0,vars:0,template:function(n,r){},styles:[`.mat-divider {
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
`],encapsulation:2,changeDetection:0})}return t})(),Wi=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=$({type:t});static \u0275inj=z({imports:[ve]})}return t})();var eo=class t{url=`${st.apiUrl}/api/attendance`;attendanceSignals=new Map;attendanceChanges=new bn;http=c(yt);getAttendanceChanges=this.attendanceChanges.asObservable();getSignal(i,e){let n=`${i}_${e}`;return this.attendanceSignals.has(n)||this.attendanceSignals.set(n,D(null)),this.attendanceSignals.get(n)}setAttendance(i,e,n){let r={childId:i,date:e,status:n};return this.attendanceChanges.next(r),this.http.put(this.url,r)}static \u0275fac=function(e){return new(e||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})};function Gi(){let t=new Date;return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`}var zc=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new S;constructor(i=!1,e,n=!0,r){this._multiple=i,this._emitChanges=n,this.compareWith=r,e&&e.length&&(i?e.forEach(o=>this._markSelected(o)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...i){this._verifyValueAssignment(i),i.forEach(n=>this._markSelected(n));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}deselect(...i){this._verifyValueAssignment(i),i.forEach(n=>this._unmarkSelected(n));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}setSelection(...i){this._verifyValueAssignment(i);let e=this.selected,n=new Set(i.map(o=>this._getConcreteValue(o)));i.forEach(o=>this._markSelected(o)),e.filter(o=>!n.has(this._getConcreteValue(o,n))).forEach(o=>this._unmarkSelected(o));let r=this._hasQueuedChanges();return this._emitChangeEvent(),r}toggle(i){return this.isSelected(i)?this.deselect(i):this.select(i)}clear(i=!0){this._unmarkAll();let e=this._hasQueuedChanges();return i&&this._emitChangeEvent(),e}isSelected(i){return this._selection.has(this._getConcreteValue(i))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(i){this._multiple&&this.selected&&this._selected.sort(i)}isMultipleSelection(){return this._multiple}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(i){i=this._getConcreteValue(i),this.isSelected(i)||(this._multiple||this._unmarkAll(),this.isSelected(i)||this._selection.add(i),this._emitChanges&&this._selectedToEmit.push(i))}_unmarkSelected(i){i=this._getConcreteValue(i),this.isSelected(i)&&(this._selection.delete(i),this._emitChanges&&this._deselectedToEmit.push(i))}_unmarkAll(){this.isEmpty()||this._selection.forEach(i=>this._unmarkSelected(i))}_verifyValueAssignment(i){i.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(i,e){if(this.compareWith){e=e??this._selection;for(let n of e)if(this.compareWith(i,n))return n;return i}else return i}};var CS=vf();function sa(t){return new Kf(t.get(yi),t.get(Y))}var Kf=class{_viewportRuler;_previousHTMLStyles={top:"",left:""};_previousScrollPosition;_isEnabled=!1;_document;constructor(i,e){this._viewportRuler=i,this._document=e}attach(){}enable(){if(this._canBeEnabled()){let i=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=i.style.left||"",this._previousHTMLStyles.top=i.style.top||"",i.style.left=ft(-this._previousScrollPosition.left),i.style.top=ft(-this._previousScrollPosition.top),i.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){let i=this._document.documentElement,e=this._document.body,n=i.style,r=e.style,o=n.scrollBehavior||"",a=r.scrollBehavior||"";this._isEnabled=!1,n.left=this._previousHTMLStyles.left,n.top=this._previousHTMLStyles.top,i.classList.remove("cdk-global-scrollblock"),CS&&(n.scrollBehavior=r.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),CS&&(n.scrollBehavior=o,r.scrollBehavior=a)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;let e=this._document.documentElement,n=this._viewportRuler.getViewportSize();return e.scrollHeight>n.height||e.scrollWidth>n.width}};function IS(t,i){return new Xf(t.get(Jr),t.get(V),t.get(yi),i)}var Xf=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(i,e,n,r){this._scrollDispatcher=i,this._ngZone=e,this._viewportRuler=n,this._config=r}attach(i){this._overlayRef,this._overlayRef=i}enable(){if(this._scrollSubscription)return;let i=this._scrollDispatcher.scrolled(0).pipe(be(e=>!e||!this._overlayRef.overlayElement.contains(e.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=i.subscribe(()=>{let e=this._viewportRuler.getViewportScrollPosition().top;Math.abs(e-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=i.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var $c=class{enable(){}disable(){}attach(){}};function Rb(t,i){return i.some(e=>{let n=t.bottom<e.top,r=t.top>e.bottom,o=t.right<e.left,a=t.left>e.right;return n||r||o||a})}function wS(t,i){return i.some(e=>{let n=t.top<e.top,r=t.bottom>e.bottom,o=t.left<e.left,a=t.right>e.right;return n||r||o||a})}function to(t,i){return new Jf(t.get(Jr),t.get(yi),t.get(V),i)}var Jf=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(i,e,n,r){this._scrollDispatcher=i,this._viewportRuler=e,this._ngZone=n,this._config=r}attach(i){this._overlayRef,this._overlayRef=i}enable(){if(!this._scrollSubscription){let i=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(i).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:n,height:r}=this._viewportRuler.getViewportSize();Rb(e,[{width:n,height:r,bottom:r,right:n,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},TS=(()=>{class t{_injector=c(G);constructor(){}noop=()=>new $c;close=e=>IS(this._injector,e);block=()=>sa(this._injector);reposition=e=>to(this._injector,e);static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),qi=class{positionStrategy;scrollStrategy=new $c;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(i){if(i){let e=Object.keys(i);for(let n of e)i[n]!==void 0&&(this[n]=i[n])}}};var eh=class{connectionPair;scrollableViewProperties;constructor(i,e){this.connectionPair=i,this.scrollableViewProperties=e}};var kS=(()=>{class t{_attachedOverlays=[];_document=c(Y);_isAttached=!1;constructor(){}ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let n=this._attachedOverlays.indexOf(e);n>-1&&this._attachedOverlays.splice(n,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(e,n,r){return r.observers.length<1?!1:e.eventPredicate?e.eventPredicate(n):!0}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),AS=(()=>{class t extends kS{_ngZone=c(V);_renderer=c(vt).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=e=>{let n=this._attachedOverlays;for(let r=n.length-1;r>-1;r--){let o=n[r];if(this.canReceiveEvent(o,e,o._keydownEvents)){this._ngZone.run(()=>o._keydownEvents.next(e));break}}};static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ze(t)))(r||t)}})();static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),RS=(()=>{class t extends kS{_platform=c(me);_ngZone=c(V);_renderer=c(vt).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let n=this._document.body,r={capture:!0},o=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[o.listen(n,"pointerdown",this._pointerDownListener,r),o.listen(n,"click",this._clickListener,r),o.listen(n,"auxclick",this._clickListener,r),o.listen(n,"contextmenu",this._clickListener,r)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=n.style.cursor,n.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=e=>{this._pointerDownEventTarget=$t(e)};_clickListener=e=>{let n=$t(e),r=e.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:n;this._pointerDownEventTarget=null;let o=this._attachedOverlays.slice();for(let a=o.length-1;a>-1;a--){let s=o[a],l=s._outsidePointerEvents;if(!(!s.hasAttached()||!this.canReceiveEvent(s,e,l))){if(DS(s.overlayElement,n)||DS(s.overlayElement,r))break;this._ngZone?this._ngZone.run(()=>l.next(e)):l.next(e)}}};static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ze(t)))(r||t)}})();static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function DS(t,i){let e=typeof ShadowRoot<"u"&&ShadowRoot,n=i;for(;n;){if(n===t)return!0;n=e&&n instanceof ShadowRoot?n.host:n.parentNode}return!1}var OS=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=E({type:t,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(n,r){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
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
`],encapsulation:2,changeDetection:0})}return t})(),nh=(()=>{class t{_platform=c(me);_containerElement;_document=c(Y);_styleLoader=c(qe);constructor(){}ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e="cdk-overlay-container";if(this._platform.isBrowser||ab()){let r=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let o=0;o<r.length;o++)r[o].remove()}let n=this._document.createElement("div");n.classList.add(e),ab()?n.setAttribute("platform","test"):this._platform.isBrowser||n.setAttribute("platform","server"),this._document.body.appendChild(n),this._containerElement=n}_loadStyles(){this._styleLoader.load(OS)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Ob=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(i,e,n,r){this._renderer=e,this._ngZone=n,this.element=i.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=e.listen(this.element,"click",r)}detach(){this._ngZone.runOutsideAngular(()=>{let i=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(i,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),i.style.pointerEvents="none",i.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function Nb(t){return t&&t.nodeType===1}var ks=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new S;_attachments=new S;_detachments=new S;_positionStrategy;_scrollStrategy;_locationChanges=ae.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new S;_outsidePointerEvents=new S;_afterNextRenderRef;constructor(i,e,n,r,o,a,s,l,d,u=!1,f,_){this._portalOutlet=i,this._host=e,this._pane=n,this._config=r,this._ngZone=o,this._keyboardDispatcher=a,this._document=s,this._location=l,this._outsideClickDispatcher=d,this._animationsDisabled=u,this._injector=f,this._renderer=_,r.scrollStrategy&&(this._scrollStrategy=r.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=r.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(i){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(i);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=Ge(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof e?.onDestroy=="function"&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let i=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),i}dispose(){if(this._disposed)return;let i=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,i&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(i){i!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=i,this.hasAttached()&&(i.attach(this),this.updatePosition()))}updateSize(i){this._config=C(C({},this._config),i),this._updateElementSize()}setDirection(i){this._config=ne(C({},this._config),{direction:i}),this._updateElementDirection()}addPanelClass(i){this._pane&&this._toggleClasses(this._pane,i,!0)}removePanelClass(i){this._pane&&this._toggleClasses(this._pane,i,!1)}getDirection(){let i=this._config.direction;return i?typeof i=="string"?i:i.value:"ltr"}updateScrollStrategy(i){i!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=i,this.hasAttached()&&(i.attach(this),i.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let i=this._pane.style;i.width=ft(this._config.width),i.height=ft(this._config.height),i.minWidth=ft(this._config.minWidth),i.minHeight=ft(this._config.minHeight),i.maxWidth=ft(this._config.maxWidth),i.maxHeight=ft(this._config.maxHeight)}_togglePointerEvents(i){this._pane.style.pointerEvents=i?"":"none"}_attachHost(){if(!this._host.parentElement){let i=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;Nb(i)?i.after(this._host):i?.type==="parent"?i.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let i="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new Ob(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(i))}):this._backdropRef.element.classList.add(i)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(i,e,n){let r=ms(e||[]).filter(o=>!!o);r.length&&(n?i.classList.add(...r):i.classList.remove(...r))}_detachContentWhenEmpty(){let i=!1;try{this._detachContentAfterRenderRef=Ge(()=>{i=!0,this._detachContent()},{injector:this._injector})}catch(e){if(i)throw e;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let i=this._scrollStrategy;i?.disable(),i?.detach?.()}},xS="cdk-overlay-connected-position-bounding-box",DV=/([A-Za-z%]+)$/;function Rs(t,i){return new Wc(i,t.get(yi),t.get(Y),t.get(me),t.get(nh))}var Wc=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new S;_resizeSubscription=ae.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(i,e,n,r,o){this._viewportRuler=e,this._document=n,this._platform=r,this._overlayContainer=o,this.setOrigin(i)}attach(i){this._overlayRef&&this._overlayRef,this._validatePositions(),i.hostElement.classList.add(xS),this._overlayRef=i,this._boundingBox=i.hostElement,this._pane=i.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let i=this._originRect,e=this._overlayRect,n=this._viewportRect,r=this._containerRect,o=[],a;for(let s of this._preferredPositions){let l=this._getOriginPoint(i,r,s),d=this._getOverlayPoint(l,e,s),u=this._getOverlayFit(d,e,n,s);if(u.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(s,l);return}if(this._canFitWithFlexibleDimensions(u,d,n)){o.push({position:s,origin:l,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(l,s)});continue}(!a||a.overlayFit.visibleArea<u.visibleArea)&&(a={overlayFit:u,overlayPoint:d,originPoint:l,position:s,overlayRect:e})}if(o.length){let s=null,l=-1;for(let d of o){let u=d.boundingBoxRect.width*d.boundingBoxRect.height*(d.position.weight||1);u>l&&(l=u,s=d)}this._isPushed=!1,this._applyPosition(s.position,s.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(a.position,a.originPoint);return}this._applyPosition(a.position,a.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&aa(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(xS),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let i=this._lastPosition;i?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(i,this._getOriginPoint(this._originRect,this._containerRect,i))):this.apply()}withScrollableContainers(i){return this._scrollables=i,this}withPositions(i){return this._preferredPositions=i,i.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(i){return this._viewportMargin=i,this}withFlexibleDimensions(i=!0){return this._hasFlexibleDimensions=i,this}withGrowAfterOpen(i=!0){return this._growAfterOpen=i,this}withPush(i=!0){return this._canPush=i,this}withLockedPosition(i=!0){return this._positionLocked=i,this}setOrigin(i){return this._origin=i,this}withDefaultOffsetX(i){return this._offsetX=i,this}withDefaultOffsetY(i){return this._offsetY=i,this}withTransformOriginOn(i){return this._transformOriginSelector=i,this}withPopoverLocation(i){return this._popoverLocation=i,this}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof B?this._origin.nativeElement:Nb(this._origin)?this._origin:null}_getOriginPoint(i,e,n){let r;if(n.originX=="center")r=i.left+i.width/2;else{let a=this._isRtl()?i.right:i.left,s=this._isRtl()?i.left:i.right;r=n.originX=="start"?a:s}e.left<0&&(r-=e.left);let o;return n.originY=="center"?o=i.top+i.height/2:o=n.originY=="top"?i.top:i.bottom,e.top<0&&(o-=e.top),{x:r,y:o}}_getOverlayPoint(i,e,n){let r;n.overlayX=="center"?r=-e.width/2:n.overlayX==="start"?r=this._isRtl()?-e.width:0:r=this._isRtl()?0:-e.width;let o;return n.overlayY=="center"?o=-e.height/2:o=n.overlayY=="top"?0:-e.height,{x:i.x+r,y:i.y+o}}_getOverlayFit(i,e,n,r){let o=MS(e),{x:a,y:s}=i,l=this._getOffset(r,"x"),d=this._getOffset(r,"y");l&&(a+=l),d&&(s+=d);let u=0-a,f=a+o.width-n.width,_=0-s,v=s+o.height-n.height,w=this._subtractOverflows(o.width,u,f),F=this._subtractOverflows(o.height,_,v),U=w*F;return{visibleArea:U,isCompletelyWithinViewport:o.width*o.height===U,fitsInViewportVertically:F===o.height,fitsInViewportHorizontally:w==o.width}}_canFitWithFlexibleDimensions(i,e,n){if(this._hasFlexibleDimensions){let r=n.bottom-e.y,o=n.right-e.x,a=ES(this._overlayRef.getConfig().minHeight),s=ES(this._overlayRef.getConfig().minWidth),l=i.fitsInViewportVertically||a!=null&&a<=r,d=i.fitsInViewportHorizontally||s!=null&&s<=o;return l&&d}return!1}_pushOverlayOnScreen(i,e,n){if(this._previousPushAmount&&this._positionLocked)return{x:i.x+this._previousPushAmount.x,y:i.y+this._previousPushAmount.y};let r=MS(e),o=this._viewportRect,a=Math.max(i.x+r.width-o.width,0),s=Math.max(i.y+r.height-o.height,0),l=Math.max(o.top-n.top-i.y,0),d=Math.max(o.left-n.left-i.x,0),u=0,f=0;return r.width<=o.width?u=d||-a:u=i.x<this._getViewportMarginStart()?o.left-n.left-i.x:0,r.height<=o.height?f=l||-s:f=i.y<this._getViewportMarginTop()?o.top-n.top-i.y:0,this._previousPushAmount={x:u,y:f},{x:i.x+u,y:i.y+f}}_applyPosition(i,e){if(this._setTransformOrigin(i),this._setOverlayElementStyles(e,i),this._setBoundingBoxStyles(e,i),i.panelClass&&this._addPanelClasses(i.panelClass),this._positionChanges.observers.length){let n=this._getScrollVisibility();if(i!==this._lastPosition||!this._lastScrollVisibility||!xV(this._lastScrollVisibility,n)){let r=new eh(i,n);this._positionChanges.next(r)}this._lastScrollVisibility=n}this._lastPosition=i,this._isInitialRender=!1}_setTransformOrigin(i){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),n,r=i.overlayY;i.overlayX==="center"?n="center":this._isRtl()?n=i.overlayX==="start"?"right":"left":n=i.overlayX==="start"?"left":"right";for(let o=0;o<e.length;o++)e[o].style.transformOrigin=`${n} ${r}`}_calculateBoundingBoxRect(i,e){let n=this._viewportRect,r=this._isRtl(),o,a,s;if(e.overlayY==="top")a=i.y,o=n.height-a+this._getViewportMarginBottom();else if(e.overlayY==="bottom")s=n.height-i.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),o=n.height-s+this._getViewportMarginTop();else{let v=Math.min(n.bottom-i.y+n.top,i.y),w=this._lastBoundingBoxSize.height;o=v*2,a=i.y-v,o>w&&!this._isInitialRender&&!this._growAfterOpen&&(a=i.y-w/2)}let l=e.overlayX==="start"&&!r||e.overlayX==="end"&&r,d=e.overlayX==="end"&&!r||e.overlayX==="start"&&r,u,f,_;if(d)_=n.width-i.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),u=i.x-this._getViewportMarginStart();else if(l)f=i.x,u=n.right-i.x-this._getViewportMarginEnd();else{let v=Math.min(n.right-i.x+n.left,i.x),w=this._lastBoundingBoxSize.width;u=v*2,f=i.x-v,u>w&&!this._isInitialRender&&!this._growAfterOpen&&(f=i.x-w/2)}return{top:a,left:f,bottom:s,right:_,width:u,height:o}}_setBoundingBoxStyles(i,e){let n=this._calculateBoundingBoxRect(i,e);!this._isInitialRender&&!this._growAfterOpen&&(n.height=Math.min(n.height,this._lastBoundingBoxSize.height),n.width=Math.min(n.width,this._lastBoundingBoxSize.width));let r={};if(this._hasExactPosition())r.top=r.left="0",r.bottom=r.right="auto",r.maxHeight=r.maxWidth="",r.width=r.height="100%";else{let o=this._overlayRef.getConfig().maxHeight,a=this._overlayRef.getConfig().maxWidth;r.width=ft(n.width),r.height=ft(n.height),r.top=ft(n.top)||"auto",r.bottom=ft(n.bottom)||"auto",r.left=ft(n.left)||"auto",r.right=ft(n.right)||"auto",e.overlayX==="center"?r.alignItems="center":r.alignItems=e.overlayX==="end"?"flex-end":"flex-start",e.overlayY==="center"?r.justifyContent="center":r.justifyContent=e.overlayY==="bottom"?"flex-end":"flex-start",o&&(r.maxHeight=ft(o)),a&&(r.maxWidth=ft(a))}this._lastBoundingBoxSize=n,aa(this._boundingBox.style,r)}_resetBoundingBoxStyles(){aa(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){aa(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(i,e){let n={},r=this._hasExactPosition(),o=this._hasFlexibleDimensions,a=this._overlayRef.getConfig();if(r){let u=this._viewportRuler.getViewportScrollPosition();aa(n,this._getExactOverlayY(e,i,u)),aa(n,this._getExactOverlayX(e,i,u))}else n.position="static";let s="",l=this._getOffset(e,"x"),d=this._getOffset(e,"y");l&&(s+=`translateX(${l}px) `),d&&(s+=`translateY(${d}px)`),n.transform=s.trim(),a.maxHeight&&(r?n.maxHeight=ft(a.maxHeight):o&&(n.maxHeight="")),a.maxWidth&&(r?n.maxWidth=ft(a.maxWidth):o&&(n.maxWidth="")),aa(this._pane.style,n)}_getExactOverlayY(i,e,n){let r={top:"",bottom:""},o=this._getOverlayPoint(e,this._overlayRect,i);if(this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,n)),i.overlayY==="bottom"){let a=this._document.documentElement.clientHeight;r.bottom=`${a-(o.y+this._overlayRect.height)}px`}else r.top=ft(o.y);return r}_getExactOverlayX(i,e,n){let r={left:"",right:""},o=this._getOverlayPoint(e,this._overlayRect,i);this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,n));let a;if(this._isRtl()?a=i.overlayX==="end"?"left":"right":a=i.overlayX==="end"?"right":"left",a==="right"){let s=this._document.documentElement.clientWidth;r.right=`${s-(o.x+this._overlayRect.width)}px`}else r.left=ft(o.x);return r}_getScrollVisibility(){let i=this._getOriginRect(),e=this._pane.getBoundingClientRect(),n=this._scrollables.map(r=>r.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:wS(i,n),isOriginOutsideView:Rb(i,n),isOverlayClipped:wS(e,n),isOverlayOutsideView:Rb(e,n)}}_subtractOverflows(i,...e){return e.reduce((n,r)=>n-Math.max(r,0),i)}_getNarrowedViewportRect(){let i=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,n=this._viewportRuler.getViewportScrollPosition();return{top:n.top+this._getViewportMarginTop(),left:n.left+this._getViewportMarginStart(),right:n.left+i-this._getViewportMarginEnd(),bottom:n.top+e-this._getViewportMarginBottom(),width:i-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:e-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(i,e){return e==="x"?i.offsetX==null?this._offsetX:i.offsetX:i.offsetY==null?this._offsetY:i.offsetY}_validatePositions(){}_addPanelClasses(i){this._pane&&ms(i).forEach(e=>{e!==""&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(i=>{this._pane.classList.remove(i)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let i=this._origin;if(i instanceof B)return i.nativeElement.getBoundingClientRect();if(i instanceof Element)return i.getBoundingClientRect();let e=i.width||0,n=i.height||0;return{top:i.y,bottom:i.y+n,left:i.x,right:i.x+e,height:n,width:e}}_getContainerRect(){let i=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",e=this._overlayContainer.getContainerElement();i&&(e.style.display="block");let n=e.getBoundingClientRect();return i&&(e.style.display=""),n}};function aa(t,i){for(let e in i)i.hasOwnProperty(e)&&(t[e]=i[e]);return t}function ES(t){if(typeof t!="number"&&t!=null){let[i,e]=t.split(DV);return!e||e==="px"?parseFloat(i):null}return t||null}function MS(t){return{top:Math.floor(t.top),right:Math.floor(t.right),bottom:Math.floor(t.bottom),left:Math.floor(t.left),width:Math.floor(t.width),height:Math.floor(t.height)}}function xV(t,i){return t===i?!0:t.isOriginClipped===i.isOriginClipped&&t.isOriginOutsideView===i.isOriginOutsideView&&t.isOverlayClipped===i.isOverlayClipped&&t.isOverlayOutsideView===i.isOverlayOutsideView}var SS="cdk-global-overlay-wrapper";function Cr(t){return new th}var th=class{_overlayRef;_cssPosition="static";_topOffset="";_bottomOffset="";_alignItems="";_xPosition="";_xOffset="";_width="";_height="";_isDisposed=!1;attach(i){let e=i.getConfig();this._overlayRef=i,this._width&&!e.width&&i.updateSize({width:this._width}),this._height&&!e.height&&i.updateSize({height:this._height}),i.hostElement.classList.add(SS),this._isDisposed=!1}top(i=""){return this._bottomOffset="",this._topOffset=i,this._alignItems="flex-start",this}left(i=""){return this._xOffset=i,this._xPosition="left",this}bottom(i=""){return this._topOffset="",this._bottomOffset=i,this._alignItems="flex-end",this}right(i=""){return this._xOffset=i,this._xPosition="right",this}start(i=""){return this._xOffset=i,this._xPosition="start",this}end(i=""){return this._xOffset=i,this._xPosition="end",this}width(i=""){return this._overlayRef?this._overlayRef.updateSize({width:i}):this._width=i,this}height(i=""){return this._overlayRef?this._overlayRef.updateSize({height:i}):this._height=i,this}centerHorizontally(i=""){return this.left(i),this._xPosition="center",this}centerVertically(i=""){return this.top(i),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let i=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,n=this._overlayRef.getConfig(),{width:r,height:o,maxWidth:a,maxHeight:s}=n,l=(r==="100%"||r==="100vw")&&(!a||a==="100%"||a==="100vw"),d=(o==="100%"||o==="100vh")&&(!s||s==="100%"||s==="100vh"),u=this._xPosition,f=this._xOffset,_=this._overlayRef.getConfig().direction==="rtl",v="",w="",F="";l?F="flex-start":u==="center"?(F="center",_?w=f:v=f):_?u==="left"||u==="end"?(F="flex-end",v=f):(u==="right"||u==="start")&&(F="flex-start",w=f):u==="left"||u==="start"?(F="flex-start",v=f):(u==="right"||u==="end")&&(F="flex-end",w=f),i.position=this._cssPosition,i.marginLeft=l?"0":v,i.marginTop=d?"0":this._topOffset,i.marginBottom=this._bottomOffset,i.marginRight=l?"0":w,e.justifyContent=F,e.alignItems=d?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let i=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,n=e.style;e.classList.remove(SS),n.justifyContent=n.alignItems=i.marginTop=i.marginBottom=i.marginLeft=i.marginRight=i.position="",this._overlayRef=null,this._isDisposed=!0}},NS=(()=>{class t{_injector=c(G);constructor(){}global(){return Cr()}flexibleConnectedTo(e){return Rs(this._injector,e)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Gc=new y("OVERLAY_DEFAULT_CONFIG");function Yi(t,i){t.get(qe).load(OS);let e=t.get(nh),n=t.get(Y),r=t.get(Ye),o=t.get(Mn),a=t.get(it),s=t.get(Oe,null,{optional:!0})||t.get(vt).createRenderer(null,null),l=new qi(i),d=t.get(Gc,null,{optional:!0})?.usePopover??!0;l.direction=l.direction||a.value,"showPopover"in n.body?l.usePopover=i?.usePopover??d:l.usePopover=!1;let u=n.createElement("div"),f=n.createElement("div");u.id=r.getId("cdk-overlay-"),u.classList.add("cdk-overlay-pane"),f.appendChild(u),l.usePopover&&(f.setAttribute("popover","manual"),f.classList.add("cdk-overlay-popover"));let _=l.usePopover?l.positionStrategy?.getPopoverInsertionPoint?.():null;return Nb(_)?_.after(f):_?.type==="parent"?_.element.appendChild(f):e.getContainerElement().appendChild(f),new ks(new $f(u,o,t),f,u,l,t.get(V),t.get(AS),n,t.get(Li),t.get(RS),i?.disableAnimations??t.get(Rl,null,{optional:!0})==="NoopAnimations",t.get(Le),s)}var PS=(()=>{class t{scrollStrategies=c(TS);_positionBuilder=c(NS);_injector=c(G);constructor(){}create(e){return Yi(this._injector,e)}position(){return this._positionBuilder}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),EV=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],MV=new y("cdk-connected-overlay-scroll-strategy",{providedIn:"root",factory:()=>{let t=c(G);return()=>to(t)}}),As=(()=>{class t{elementRef=c(B);constructor(){}static \u0275fac=function(n){return new(n||t)};static \u0275dir=N({type:t,selectors:[["","cdk-overlay-origin",""],["","overlay-origin",""],["","cdkOverlayOrigin",""]],exportAs:["cdkOverlayOrigin"]})}return t})(),FS=new y("cdk-connected-overlay-default-config"),ih=(()=>{class t{_dir=c(it,{optional:!0});_injector=c(G);_overlayRef;_templatePortal;_backdropSubscription=ae.EMPTY;_attachSubscription=ae.EMPTY;_detachSubscription=ae.EMPTY;_positionSubscription=ae.EMPTY;_offsetX;_offsetY;_position;_scrollStrategyFactory=c(MV);_ngZone=c(V);origin;positions;positionStrategy;get offsetX(){return this._offsetX}set offsetX(e){this._offsetX=e,this._position&&this._updatePositionStrategy(this._position)}get offsetY(){return this._offsetY}set offsetY(e){this._offsetY=e,this._position&&this._updatePositionStrategy(this._position)}width;height;minWidth;minHeight;backdropClass;panelClass;viewportMargin=0;scrollStrategy;open=!1;disableClose=!1;transformOriginSelector;hasBackdrop=!1;lockPosition=!1;flexibleDimensions=!1;growAfterOpen=!1;push=!1;disposeOnNavigation=!1;usePopover;matchWidth=!1;set _config(e){typeof e!="string"&&this._assignConfig(e)}backdropClick=new I;positionChange=new I;attach=new I;detach=new I;overlayKeydown=new I;overlayOutsideClick=new I;constructor(){let e=c(_t),n=c(It),r=c(FS,{optional:!0}),o=c(Gc,{optional:!0});this.usePopover=o?.usePopover===!1?null:"global",this._templatePortal=new Rn(e,n),this.scrollStrategy=this._scrollStrategyFactory(),r&&this._assignConfig(r)}get overlayRef(){return this._overlayRef}get dir(){return this._dir?this._dir.value:"ltr"}ngOnDestroy(){this._attachSubscription.unsubscribe(),this._detachSubscription.unsubscribe(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this._overlayRef?.dispose()}ngOnChanges(e){this._position&&(this._updatePositionStrategy(this._position),this._overlayRef?.updateSize({width:this._getWidth(),minWidth:this.minWidth,height:this.height,minHeight:this.minHeight}),e.origin&&this.open&&this._position.apply()),e.open&&(this.open?this.attachOverlay():this.detachOverlay())}_createOverlay(){(!this.positions||!this.positions.length)&&(this.positions=EV);let e=this._overlayRef=Yi(this._injector,this._buildConfig());this._attachSubscription=e.attachments().subscribe(()=>this.attach.emit()),this._detachSubscription=e.detachments().subscribe(()=>this.detach.emit()),e.keydownEvents().subscribe(n=>{this.overlayKeydown.next(n),n.keyCode===27&&!this.disableClose&&!wt(n)&&(n.preventDefault(),this.detachOverlay())}),this._overlayRef.outsidePointerEvents().subscribe(n=>{let r=this._getOriginElement(),o=$t(n);(!r||r!==o&&!r.contains(o))&&this.overlayOutsideClick.next(n)})}_buildConfig(){let e=this._position=this.positionStrategy||this._createPositionStrategy(),n=new qi({direction:this._dir||"ltr",positionStrategy:e,scrollStrategy:this.scrollStrategy,hasBackdrop:this.hasBackdrop,disposeOnNavigation:this.disposeOnNavigation,usePopover:!!this.usePopover});return(this.height||this.height===0)&&(n.height=this.height),(this.minWidth||this.minWidth===0)&&(n.minWidth=this.minWidth),(this.minHeight||this.minHeight===0)&&(n.minHeight=this.minHeight),this.backdropClass&&(n.backdropClass=this.backdropClass),this.panelClass&&(n.panelClass=this.panelClass),n}_updatePositionStrategy(e){let n=this.positions.map(r=>({originX:r.originX,originY:r.originY,overlayX:r.overlayX,overlayY:r.overlayY,offsetX:r.offsetX||this.offsetX,offsetY:r.offsetY||this.offsetY,panelClass:r.panelClass||void 0}));return e.setOrigin(this._getOrigin()).withPositions(n).withFlexibleDimensions(this.flexibleDimensions).withPush(this.push).withGrowAfterOpen(this.growAfterOpen).withViewportMargin(this.viewportMargin).withLockedPosition(this.lockPosition).withTransformOriginOn(this.transformOriginSelector).withPopoverLocation(this.usePopover===null?"global":this.usePopover)}_createPositionStrategy(){let e=Rs(this._injector,this._getOrigin());return this._updatePositionStrategy(e),e}_getOrigin(){return this.origin instanceof As?this.origin.elementRef:this.origin}_getOriginElement(){return this.origin instanceof As?this.origin.elementRef.nativeElement:this.origin instanceof B?this.origin.nativeElement:typeof Element<"u"&&this.origin instanceof Element?this.origin:null}_getWidth(){return this.width?this.width:this.matchWidth?this._getOriginElement()?.getBoundingClientRect?.().width:void 0}attachOverlay(){this._overlayRef||this._createOverlay();let e=this._overlayRef;e.getConfig().hasBackdrop=this.hasBackdrop,e.updateSize({width:this._getWidth()}),e.hasAttached()||e.attach(this._templatePortal),this.hasBackdrop?this._backdropSubscription=e.backdropClick().subscribe(n=>this.backdropClick.emit(n)):this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.positionChange.observers.length>0&&(this._positionSubscription=this._position.positionChanges.pipe(np(()=>this.positionChange.observers.length>0)).subscribe(n=>{this._ngZone.run(()=>this.positionChange.emit(n)),this.positionChange.observers.length===0&&this._positionSubscription.unsubscribe()})),this.open=!0}detachOverlay(){this._overlayRef?.detach(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.open=!1}_assignConfig(e){this.origin=e.origin??this.origin,this.positions=e.positions??this.positions,this.positionStrategy=e.positionStrategy??this.positionStrategy,this.offsetX=e.offsetX??this.offsetX,this.offsetY=e.offsetY??this.offsetY,this.width=e.width??this.width,this.height=e.height??this.height,this.minWidth=e.minWidth??this.minWidth,this.minHeight=e.minHeight??this.minHeight,this.backdropClass=e.backdropClass??this.backdropClass,this.panelClass=e.panelClass??this.panelClass,this.viewportMargin=e.viewportMargin??this.viewportMargin,this.scrollStrategy=e.scrollStrategy??this.scrollStrategy,this.disableClose=e.disableClose??this.disableClose,this.transformOriginSelector=e.transformOriginSelector??this.transformOriginSelector,this.hasBackdrop=e.hasBackdrop??this.hasBackdrop,this.lockPosition=e.lockPosition??this.lockPosition,this.flexibleDimensions=e.flexibleDimensions??this.flexibleDimensions,this.growAfterOpen=e.growAfterOpen??this.growAfterOpen,this.push=e.push??this.push,this.disposeOnNavigation=e.disposeOnNavigation??this.disposeOnNavigation,this.usePopover=e.usePopover??this.usePopover,this.matchWidth=e.matchWidth??this.matchWidth}static \u0275fac=function(n){return new(n||t)};static \u0275dir=N({type:t,selectors:[["","cdk-connected-overlay",""],["","connected-overlay",""],["","cdkConnectedOverlay",""]],inputs:{origin:[0,"cdkConnectedOverlayOrigin","origin"],positions:[0,"cdkConnectedOverlayPositions","positions"],positionStrategy:[0,"cdkConnectedOverlayPositionStrategy","positionStrategy"],offsetX:[0,"cdkConnectedOverlayOffsetX","offsetX"],offsetY:[0,"cdkConnectedOverlayOffsetY","offsetY"],width:[0,"cdkConnectedOverlayWidth","width"],height:[0,"cdkConnectedOverlayHeight","height"],minWidth:[0,"cdkConnectedOverlayMinWidth","minWidth"],minHeight:[0,"cdkConnectedOverlayMinHeight","minHeight"],backdropClass:[0,"cdkConnectedOverlayBackdropClass","backdropClass"],panelClass:[0,"cdkConnectedOverlayPanelClass","panelClass"],viewportMargin:[0,"cdkConnectedOverlayViewportMargin","viewportMargin"],scrollStrategy:[0,"cdkConnectedOverlayScrollStrategy","scrollStrategy"],open:[0,"cdkConnectedOverlayOpen","open"],disableClose:[0,"cdkConnectedOverlayDisableClose","disableClose"],transformOriginSelector:[0,"cdkConnectedOverlayTransformOriginOn","transformOriginSelector"],hasBackdrop:[2,"cdkConnectedOverlayHasBackdrop","hasBackdrop",Z],lockPosition:[2,"cdkConnectedOverlayLockPosition","lockPosition",Z],flexibleDimensions:[2,"cdkConnectedOverlayFlexibleDimensions","flexibleDimensions",Z],growAfterOpen:[2,"cdkConnectedOverlayGrowAfterOpen","growAfterOpen",Z],push:[2,"cdkConnectedOverlayPush","push",Z],disposeOnNavigation:[2,"cdkConnectedOverlayDisposeOnNavigation","disposeOnNavigation",Z],usePopover:[0,"cdkConnectedOverlayUsePopover","usePopover"],matchWidth:[2,"cdkConnectedOverlayMatchWidth","matchWidth",Z],_config:[0,"cdkConnectedOverlay","_config"]},outputs:{backdropClick:"backdropClick",positionChange:"positionChange",attach:"attach",detach:"detach",overlayKeydown:"overlayKeydown",overlayOutsideClick:"overlayOutsideClick"},exportAs:["cdkConnectedOverlay"],features:[Be]})}return t})(),Kn=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=$({type:t});static \u0275inj=z({providers:[PS],imports:[ve,$i,Mb,Mb]})}return t})();var LS=(()=>{class t{_animationsDisabled=je();state="unchecked";disabled=!1;appearance="full";constructor(){}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=E({type:t,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(n,r){n&2&&P("mat-pseudo-checkbox-indeterminate",r.state==="indeterminate")("mat-pseudo-checkbox-checked",r.state==="checked")("mat-pseudo-checkbox-disabled",r.disabled)("mat-pseudo-checkbox-minimal",r.appearance==="minimal")("mat-pseudo-checkbox-full",r.appearance==="full")("_mat-animation-noopable",r._animationsDisabled)},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},decls:0,vars:0,template:function(n,r){},styles:[`.mat-pseudo-checkbox {
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
`],encapsulation:2,changeDetection:0})}return t})();var SV=["text"],IV=[[["mat-icon"]],"*"],TV=["mat-icon","*"];function kV(t,i){if(t&1&&T(0,"mat-pseudo-checkbox",1),t&2){let e=x();A("disabled",e.disabled)("state",e.selected?"checked":"unchecked")}}function AV(t,i){if(t&1&&T(0,"mat-pseudo-checkbox",3),t&2){let e=x();A("disabled",e.disabled)}}function RV(t,i){if(t&1&&(m(0,"span",4),g(1),h()),t&2){let e=x();p(),de("(",e.group.label,")")}}var Fb=new y("MAT_OPTION_PARENT_COMPONENT"),Lb=new y("MatOptgroup");var Pb=class{source;isUserInput;constructor(i,e=!1){this.source=i,this.isUserInput=e}},Xn=(()=>{class t{_element=c(B);_changeDetectorRef=c(Ie);_parent=c(Fb,{optional:!0});group=c(Lb,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue="";get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=c(Ye).getId("mat-option-");get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=D(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new I;_text;_stateChanges=new S;constructor(){let e=c(qe);e.load(_i),e.load(Ui),this._signalDisableRipple=!!this._parent&&Fi(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||"").trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,n){let r=this._getHostElement();typeof r.focus=="function"&&r.focus(n)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!wt(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new Pb(this,e))}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=E({type:t,selectors:[["mat-option"]],viewQuery:function(n,r){if(n&1&&we(SV,7),n&2){let o;R(o=O())&&(r._text=o.first)}},hostAttrs:["role","option",1,"mat-mdc-option","mdc-list-item"],hostVars:11,hostBindings:function(n,r){n&1&&M("click",function(){return r._selectViaInteraction()})("keydown",function(a){return r._handleKeydown(a)}),n&2&&(Tt("id",r.id),K("aria-selected",r.selected)("aria-disabled",r.disabled.toString()),P("mdc-list-item--selected",r.selected)("mat-mdc-option-multiple",r.multiple)("mat-mdc-option-active",r.active)("mdc-list-item--disabled",r.disabled))},inputs:{value:"value",id:"id",disabled:[2,"disabled","disabled",Z]},outputs:{onSelectionChange:"onSelectionChange"},exportAs:["matOption"],ngContentSelectors:TV,decls:8,vars:5,consts:[["text",""],["aria-hidden","true",1,"mat-mdc-option-pseudo-checkbox",3,"disabled","state"],[1,"mdc-list-item__primary-text"],["state","checked","aria-hidden","true","appearance","minimal",1,"mat-mdc-option-pseudo-checkbox",3,"disabled"],[1,"cdk-visually-hidden"],["aria-hidden","true","mat-ripple","",1,"mat-mdc-option-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"]],template:function(n,r){n&1&&(Se(IV),j(0,kV,1,2,"mat-pseudo-checkbox",1),te(1),m(2,"span",2,0),te(4,1),h(),j(5,AV,1,1,"mat-pseudo-checkbox",3),j(6,RV,2,1,"span",4),T(7,"div",5)),n&2&&(H(r.multiple?0:-1),p(5),H(!r.multiple&&r.selected&&!r.hideSingleSelectionIndicator?5:-1),p(),H(r.group&&r.group._inert?6:-1),p(),A("matRippleTrigger",r._getHostElement())("matRippleDisabled",r.disabled||r.disableRipple))},dependencies:[LS,ra],styles:[`.mat-mdc-option {
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
`],encapsulation:2,changeDetection:0})}return t})();function VS(t,i,e){if(e.length){let n=i.toArray(),r=e.toArray(),o=0;for(let a=0;a<t+1;a++)n[a].group&&n[a].group===r[o]&&o++;return o}return 0}function BS(t,i,e,n){return t<e?t:t+i>e+n?Math.max(0,t-n+i):e}var rh=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=$({type:t});static \u0275inj=z({imports:[ve]})}return t})();var Os=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=$({type:t});static \u0275inj=z({imports:[ys,rh,Xn,ve]})}return t})();var OV=["trigger"],NV=["panel"],PV=[[["mat-select-trigger"]],"*"],FV=["mat-select-trigger","*"];function LV(t,i){if(t&1&&(m(0,"span",4),g(1),h()),t&2){let e=x();p(),oe(e.placeholder)}}function VV(t,i){t&1&&te(0)}function BV(t,i){if(t&1&&(m(0,"span",11),g(1),h()),t&2){let e=x(2);p(),oe(e.triggerValue)}}function jV(t,i){if(t&1&&(m(0,"span",5),j(1,VV,1,0)(2,BV,2,1,"span",11),h()),t&2){let e=x();p(),H(e.customTrigger?1:2)}}function HV(t,i){if(t&1){let e=Ae();m(0,"div",12,1),M("keydown",function(r){X(e);let o=x();return J(o._handleKeydown(r))}),te(2,1),h()}if(t&2){let e=x();kt(e.panelClass),P("mat-select-panel-animations-enabled",!e._animationsDisabled)("mat-primary",(e._parentFormField==null?null:e._parentFormField.color)==="primary")("mat-accent",(e._parentFormField==null?null:e._parentFormField.color)==="accent")("mat-warn",(e._parentFormField==null?null:e._parentFormField.color)==="warn")("mat-undefined",!(e._parentFormField!=null&&e._parentFormField.color)),K("id",e.id+"-panel")("aria-multiselectable",e.multiple)("aria-label",e.ariaLabel||null)("aria-labelledby",e._getPanelAriaLabelledby())}}var UV=new y("mat-select-scroll-strategy",{providedIn:"root",factory:()=>{let t=c(G);return()=>to(t)}}),zV=new y("MAT_SELECT_CONFIG"),$V=new y("MatSelectTrigger"),Vb=class{source;value;constructor(i,e){this.source=i,this.value=e}},no=(()=>{class t{_viewportRuler=c(yi);_changeDetectorRef=c(Ie);_elementRef=c(B);_dir=c(it,{optional:!0});_idGenerator=c(Ye);_renderer=c(Oe);_parentFormField=c(Tc,{optional:!0});ngControl=c(bi,{self:!0,optional:!0});_liveAnnouncer=c(xc);_defaultOptions=c(zV,{optional:!0});_animationsDisabled=je();_popoverLocation;_initialized=new S;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"}];_scrollOptionIntoView(e){let n=this.options.toArray()[e];if(n){let r=this.panel.nativeElement,o=VS(e,this.options,this.optionGroups),a=n._getHostElement();e===0&&o===1?r.scrollTop=0:r.scrollTop=BS(a.offsetTop,a.offsetHeight,r.scrollTop,r.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new Vb(this,e)}_scrollStrategyFactory=c(UV);_panelOpen=!1;_compareWith=(e,n)=>e===n;_uid=this._idGenerator.getId("mat-select-");_triggerAriaLabelledBy=null;_previousControl;_destroy=new S;_errorStateTracker;stateChanges=new S;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId("mat-select-value-");_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||"";get focused(){return this._focused||this._panelOpen}_focused=!1;controlType="mat-select";trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=D(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(vi.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}_value;ariaLabel="";ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<"u"?this._defaultOptions.panelWidth:"auto";canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=ti(()=>{let e=this.options;return e?e.changes.pipe(Qe(e),gt(()=>Ft(...e.map(n=>n.onSelectionChange)))):this._initialized.pipe(gt(()=>this.optionSelectionChanges))});openedChange=new I;_openedStream=this.openedChange.pipe(be(e=>e),le(()=>{}));_closedStream=this.openedChange.pipe(be(e=>!e),le(()=>{}));selectionChange=new I;valueChange=new I;constructor(){let e=c(zf),n=c(Vc,{optional:!0}),r=c(br,{optional:!0}),o=c(new ui("tabindex"),{optional:!0}),a=c(Gc,{optional:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new Ss(e,this.ngControl,r,n,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=o==null?0:parseInt(o)||0,this._popoverLocation=a?.usePopover===!1?null:"inline",this.id=this.id}ngOnInit(){this._selectionModel=new zc(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(ye(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(ye(this._destroy)).subscribe(e=>{e.added.forEach(n=>n.select()),e.removed.forEach(n=>n.deselect())}),this.options.changes.pipe(Qe(null),ye(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),n=this.ngControl;if(e!==this._triggerAriaLabelledBy){let r=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?r.setAttribute("aria-labelledby",e):r.removeAttribute("aria-labelledby")}n&&(this._previousControl!==n.control&&(this._previousControl!==void 0&&n.disabled!==null&&n.disabled!==this.disabled&&(this.disabled=n.disabled),this._previousControl=n.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete(),this._clearFromModal()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._applyModalPanelOwnership(),this._panelOpen=!0,this._overlayDir.positionChange.pipe(rt(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}_trackedModal=null;_applyModalPanelOwnership(){let e=this._elementRef.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');if(!e)return;let n=`${this.id}-panel`;this._trackedModal&&gf(this._trackedModal,"aria-owns",n),ob(e,"aria-owns",n),this._trackedModal=e}_clearFromModal(){if(!this._trackedModal)return;let e=`${this.id}-panel`;gf(this._trackedModal,"aria-owns",e),this._trackedModal=null}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?"rtl":"ltr"),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{n(),clearTimeout(r),this._cleanupDetach=void 0};let e=this.panel.nativeElement,n=this._renderer.listen(e,"animationend",o=>{o.animationName==="_mat-select-exit"&&(this._cleanupDetach?.(),this._detachOverlay())}),r=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);e.classList.add("mat-select-panel-exit")}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return"";if(this._multiple){let e=this._selectionModel.selected.map(n=>n.viewValue);return this._isRtl()&&e.reverse(),e.join(", ")}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value==="rtl":!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let n=e.keyCode,r=n===40||n===38||n===37||n===39,o=n===13||n===32,a=this._keyManager;if(!a.isTyping()&&o&&!wt(e)||(this.multiple||e.altKey)&&r)e.preventDefault(),this.open();else if(!this.multiple){let s=this.selected;a.onKeydown(e);let l=this.selected;l&&s!==l&&this._liveAnnouncer.announce(l.viewValue,1e4)}}_handleOpenKeydown(e){let n=this._keyManager,r=e.keyCode,o=r===40||r===38,a=n.isTyping();if(o&&e.altKey)e.preventDefault(),this.close();else if(!a&&(r===13||r===32)&&n.activeItem&&!wt(e))e.preventDefault(),n.activeItem._selectViaInteraction();else if(!a&&this._multiple&&r===65&&e.ctrlKey){e.preventDefault();let s=this.options.some(l=>!l.disabled&&!l.selected);this.options.forEach(l=>{l.disabled||(s?l.select():l.deselect())})}else{let s=n.activeItemIndex;n.onKeydown(e),this._multiple&&o&&e.shiftKey&&n.activeItem&&n.activeItemIndex!==s&&n.activeItem._selectViaInteraction()}}_handleOverlayKeydown(e){e.keyCode===27&&!wt(e)&&(e.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(n=>n.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)Array.isArray(e),e.forEach(n=>this._selectOptionByValue(n)),this._sortValues();else{let n=this._selectOptionByValue(e);n?this._keyManager.updateActiveItem(n):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let n=this.options.find(r=>{if(this._selectionModel.isSelected(r))return!1;try{return(r.value!=null||this.canSelectNullableOptions)&&this._compareWith(r.value,e)}catch{return!1}});return n&&this._selectionModel.select(n),n}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_skipPredicate=e=>this.panelOpen?!1:e.disabled;_getOverlayWidth(e){return this.panelWidth==="auto"?(e instanceof As?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?"":this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new Ec(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?"rtl":"ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=Ft(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(ye(e)).subscribe(n=>{this._onSelect(n.source,n.isUserInput),n.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),Ft(...this.options.map(n=>n._stateChanges)).pipe(ye(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,n){let r=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(r!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),n&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),n&&this.focus())),r!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((n,r)=>this.sortComparator?this.sortComparator(n,r,e):e.indexOf(n)-e.indexOf(r)),this.stateChanges.next()}}_propagateChanges(e){let n;this.multiple?n=this.selected.map(r=>r.value):n=this.selected?this.selected.value:e,this._value=n,this.valueChange.emit(n),this._onChange(n),this.selectionChange.emit(this._getChangeEvent(n)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let n=0;n<this.options.length;n++)if(!this.options.get(n).disabled){e=n;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,n=e?e+" ":"";return this.ariaLabelledby?n+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||"";return this.ariaLabelledby&&(e+=" "+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let n=this._elementRef.nativeElement;e.length?n.setAttribute("aria-describedby",e.join(" ")):n.removeAttribute("aria-describedby")}onContainerClick(e){let n=$t(e);n&&(n.tagName==="MAT-OPTION"||n.classList.contains("cdk-overlay-backdrop")||n.closest(".mat-mdc-select-panel"))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=E({type:t,selectors:[["mat-select"]],contentQueries:function(n,r,o){if(n&1&&bt(o,$V,5)(o,Xn,5)(o,Lb,5),n&2){let a;R(a=O())&&(r.customTrigger=a.first),R(a=O())&&(r.options=a),R(a=O())&&(r.optionGroups=a)}},viewQuery:function(n,r){if(n&1&&we(OV,5)(NV,5)(ih,5),n&2){let o;R(o=O())&&(r.trigger=o.first),R(o=O())&&(r.panel=o.first),R(o=O())&&(r._overlayDir=o.first)}},hostAttrs:["role","combobox","aria-haspopup","listbox",1,"mat-mdc-select"],hostVars:21,hostBindings:function(n,r){n&1&&M("keydown",function(a){return r._handleKeydown(a)})("focus",function(){return r._onFocus()})("blur",function(){return r._onBlur()}),n&2&&(K("id",r.id)("tabindex",r.disabled?-1:r.tabIndex)("aria-controls",r.panelOpen?r.id+"-panel":null)("aria-expanded",r.panelOpen)("aria-label",r.ariaLabel||null)("aria-required",r.required.toString())("aria-disabled",r.disabled.toString())("aria-invalid",r.errorState)("aria-activedescendant",r._getAriaActiveDescendant()),P("mat-mdc-select-disabled",r.disabled)("mat-mdc-select-invalid",r.errorState)("mat-mdc-select-required",r.required)("mat-mdc-select-empty",r.empty)("mat-mdc-select-multiple",r.multiple)("mat-select-open",r.panelOpen))},inputs:{userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],panelClass:"panelClass",disabled:[2,"disabled","disabled",Z],disableRipple:[2,"disableRipple","disableRipple",Z],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:mi(e)],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",Z],placeholder:"placeholder",required:[2,"required","required",Z],multiple:[2,"multiple","multiple",Z],disableOptionCentering:[2,"disableOptionCentering","disableOptionCentering",Z],compareWith:"compareWith",value:"value",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],errorStateMatcher:"errorStateMatcher",typeaheadDebounceInterval:[2,"typeaheadDebounceInterval","typeaheadDebounceInterval",mi],sortComparator:"sortComparator",id:"id",panelWidth:"panelWidth",canSelectNullableOptions:[2,"canSelectNullableOptions","canSelectNullableOptions",Z]},outputs:{openedChange:"openedChange",_openedStream:"opened",_closedStream:"closed",selectionChange:"selectionChange",valueChange:"valueChange"},exportAs:["matSelect"],features:[Ue([{provide:Ic,useExisting:t},{provide:Fb,useExisting:t}]),Be],ngContentSelectors:FV,decls:11,vars:10,consts:[["fallbackOverlayOrigin","cdkOverlayOrigin","trigger",""],["panel",""],["cdk-overlay-origin","",1,"mat-mdc-select-trigger",3,"click"],[1,"mat-mdc-select-value"],[1,"mat-mdc-select-placeholder","mat-mdc-select-min-line"],[1,"mat-mdc-select-value-text"],[1,"mat-mdc-select-arrow-wrapper"],[1,"mat-mdc-select-arrow"],["viewBox","0 0 24 24","width","24px","height","24px","focusable","false","aria-hidden","true"],["d","M7 10l5 5 5-5z"],["cdk-connected-overlay","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"detach","backdropClick","overlayKeydown","cdkConnectedOverlayDisableClose","cdkConnectedOverlayPanelClass","cdkConnectedOverlayScrollStrategy","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayWidth","cdkConnectedOverlayFlexibleDimensions","cdkConnectedOverlayUsePopover"],[1,"mat-mdc-select-min-line"],["role","listbox","tabindex","-1",1,"mat-mdc-select-panel","mdc-menu-surface","mdc-menu-surface--open",3,"keydown"]],template:function(n,r){if(n&1&&(Se(PV),m(0,"div",2,0),M("click",function(){return r.open()}),m(3,"div",3),j(4,LV,2,1,"span",4)(5,jV,3,1,"span",5),h(),m(6,"div",6)(7,"div",7),Ri(),m(8,"svg",8),T(9,"path",9),h()()()(),ut(10,HV,3,16,"ng-template",10),M("detach",function(){return r.close()})("backdropClick",function(){return r.close()})("overlayKeydown",function(a){return r._handleOverlayKeydown(a)})),n&2){let o=cn(1);p(3),K("id",r._valueId),p(),H(r.empty?4:5),p(6),A("cdkConnectedOverlayDisableClose",!0)("cdkConnectedOverlayPanelClass",r._overlayPanelClass)("cdkConnectedOverlayScrollStrategy",r._scrollStrategy)("cdkConnectedOverlayOrigin",r._preferredOverlayOrigin||o)("cdkConnectedOverlayPositions",r._positions)("cdkConnectedOverlayWidth",r._overlayWidth)("cdkConnectedOverlayFlexibleDimensions",!0)("cdkConnectedOverlayUsePopover",r._popoverLocation)}},dependencies:[As,ih],styles:[`@keyframes _mat-select-enter {
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
`],encapsulation:2,changeDetection:0})}return t})();var io=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=$({type:t});static \u0275inj=z({imports:[Kn,Os,ve,Zn,Ot,Os]})}return t})();function WV(t,i){}var ro=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;positionStrategy;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;scrollStrategy;closeOnNavigation=!0;closeOnDestroy=!0;closeOnOverlayDetachments=!0;disableAnimations=!1;providers;container;templateContext};var jb=(()=>{class t extends Xr{_elementRef=c(B);_focusTrapFactory=c(lf);_config;_interactivityChecker=c(eb);_ngZone=c(V);_focusMonitor=c(Hi);_renderer=c(Oe);_changeDetectorRef=c(Ie);_injector=c(G);_platform=c(me);_document=c(Y);_portalOutlet;_focusTrapped=new S;_focusTrap=null;_elementFocusedBeforeDialogWasOpened=null;_closeInteractionType=null;_ariaLabelledByQueue=[];_isDestroyed=!1;constructor(){super(),this._config=c(ro,{optional:!0})||new ro,this._config.ariaLabelledBy&&this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)}_addAriaLabelledBy(e){this._ariaLabelledByQueue.push(e),this._changeDetectorRef.markForCheck()}_removeAriaLabelledBy(e){let n=this._ariaLabelledByQueue.indexOf(e);n>-1&&(this._ariaLabelledByQueue.splice(n,1),this._changeDetectorRef.markForCheck())}_contentAttached(){this._initializeFocusTrap(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._focusTrapped.complete(),this._isDestroyed=!0,this._restoreFocus()}attachComponentPortal(e){this._portalOutlet.hasAttached();let n=this._portalOutlet.attachComponentPortal(e);return this._contentAttached(),n}attachTemplatePortal(e){this._portalOutlet.hasAttached();let n=this._portalOutlet.attachTemplatePortal(e);return this._contentAttached(),n}attachDomPortal=e=>{this._portalOutlet.hasAttached();let n=this._portalOutlet.attachDomPortal(e);return this._contentAttached(),n};_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(e,n){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let r=()=>{o(),a(),e.removeAttribute("tabindex")},o=this._renderer.listen(e,"blur",r),a=this._renderer.listen(e,"mousedown",r)})),e.focus(n)}_focusByCssSelector(e,n){let r=this._elementRef.nativeElement.querySelector(e);r&&this._forceFocus(r,n)}_trapFocus(e){this._isDestroyed||Ge(()=>{let n=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case"dialog":this._containsFocus()||n.focus(e);break;case!0:case"first-tabbable":this._focusTrap?.focusInitialElement(e)||this._focusDialogContainer(e);break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]',e);break;default:this._focusByCssSelector(this._config.autoFocus,e);break}this._focusTrapped.next()},{injector:this._injector})}_restoreFocus(){let e=this._config.restoreFocus,n=null;if(typeof e=="string"?n=this._document.querySelector(e):typeof e=="boolean"?n=e?this._elementFocusedBeforeDialogWasOpened:null:e&&(n=e),this._config.restoreFocus&&n&&typeof n.focus=="function"){let r=ji(),o=this._elementRef.nativeElement;(!r||r===this._document.body||r===o||o.contains(r))&&(this._focusMonitor?(this._focusMonitor.focusVia(n,this._closeInteractionType),this._closeInteractionType=null):n.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(e){this._elementRef.nativeElement.focus?.(e)}_containsFocus(){let e=this._elementRef.nativeElement,n=ji();return e===n||e.contains(n)}_initializeFocusTrap(){this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=ji()))}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=E({type:t,selectors:[["cdk-dialog-container"]],viewQuery:function(n,r){if(n&1&&we(hn,7),n&2){let o;R(o=O())&&(r._portalOutlet=o.first)}},hostAttrs:["tabindex","-1",1,"cdk-dialog-container"],hostVars:6,hostBindings:function(n,r){n&2&&K("id",r._config.id||null)("role",r._config.role)("aria-modal",r._config.ariaModal)("aria-labelledby",r._config.ariaLabel?null:r._ariaLabelledByQueue[0])("aria-label",r._config.ariaLabel)("aria-describedby",r._config.ariaDescribedBy||null)},features:[_e],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(n,r){n&1&&ut(0,WV,0,0,"ng-template",0)},dependencies:[hn],styles:[`.cdk-dialog-container {
  display: block;
  width: 100%;
  height: 100%;
  min-height: inherit;
  max-height: inherit;
}
`],encapsulation:2})}return t})(),qc=class{overlayRef;config;componentInstance=null;componentRef=null;containerInstance;disableClose;closed=new S;backdropClick;keydownEvents;outsidePointerEvents;id;_detachSubscription;constructor(i,e){this.overlayRef=i,this.config=e,this.disableClose=e.disableClose,this.backdropClick=i.backdropClick(),this.keydownEvents=i.keydownEvents(),this.outsidePointerEvents=i.outsidePointerEvents(),this.id=e.id,this.keydownEvents.subscribe(n=>{n.keyCode===27&&!this.disableClose&&!wt(n)&&(n.preventDefault(),this.close(void 0,{focusOrigin:"keyboard"}))}),this.backdropClick.subscribe(()=>{!this.disableClose&&this._canClose()?this.close(void 0,{focusOrigin:"mouse"}):this.containerInstance._recaptureFocus?.()}),this._detachSubscription=i.detachments().subscribe(()=>{e.closeOnOverlayDetachments!==!1&&this.close()})}close(i,e){if(this._canClose(i)){let n=this.closed;this.containerInstance._closeInteractionType=e?.focusOrigin||"program",this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),n.next(i),n.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(i="",e=""){return this.overlayRef.updateSize({width:i,height:e}),this}addPanelClass(i){return this.overlayRef.addPanelClass(i),this}removePanelClass(i){return this.overlayRef.removePanelClass(i),this}_canClose(i){let e=this.config;return!!this.containerInstance&&(!e.closePredicate||e.closePredicate(i,e,this.componentInstance))}},GV=new y("DialogScrollStrategy",{providedIn:"root",factory:()=>{let t=c(G);return()=>sa(t)}}),qV=new y("DialogData"),YV=new y("DefaultDialogConfig");function QV(t){let i=D(t),e=new I;return{valueSignal:i,get value(){return i()},change:e,ngOnDestroy(){e.complete()}}}var Hb=(()=>{class t{_injector=c(G);_defaultOptions=c(YV,{optional:!0});_parentDialog=c(t,{optional:!0,skipSelf:!0});_overlayContainer=c(nh);_idGenerator=c(Ye);_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new S;_afterOpenedAtThisLevel=new S;_ariaHiddenElements=new Map;_scrollStrategy=c(GV);get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}afterAllClosed=ti(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(Qe(void 0)));constructor(){}open(e,n){let r=this._defaultOptions||new ro;n=C(C({},r),n),n.id=n.id||this._idGenerator.getId("cdk-dialog-"),n.id&&this.getDialogById(n.id);let o=this._getOverlayConfig(n),a=Yi(this._injector,o),s=new qc(a,n),l=this._attachContainer(a,s,n);if(s.containerInstance=l,!this.openDialogs.length){let d=this._overlayContainer.getContainerElement();l._focusTrapped?l._focusTrapped.pipe(rt(1)).subscribe(()=>{this._hideNonDialogContentFromAssistiveTechnology(d)}):this._hideNonDialogContentFromAssistiveTechnology(d)}return this._attachDialogContent(e,s,l,n),this.openDialogs.push(s),s.closed.subscribe(()=>this._removeOpenDialog(s,!0)),this.afterOpened.next(s),s}closeAll(){Bb(this.openDialogs,e=>e.close())}getDialogById(e){return this.openDialogs.find(n=>n.id===e)}ngOnDestroy(){Bb(this._openDialogsAtThisLevel,e=>{e.config.closeOnDestroy===!1&&this._removeOpenDialog(e,!1)}),Bb(this._openDialogsAtThisLevel,e=>e.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(e){let n=new qi({positionStrategy:e.positionStrategy||Cr().centerHorizontally().centerVertically(),scrollStrategy:e.scrollStrategy||this._scrollStrategy(),panelClass:e.panelClass,hasBackdrop:e.hasBackdrop,direction:e.direction,minWidth:e.minWidth,minHeight:e.minHeight,maxWidth:e.maxWidth,maxHeight:e.maxHeight,width:e.width,height:e.height,disposeOnNavigation:e.closeOnNavigation,disableAnimations:e.disableAnimations});return e.backdropClass&&(n.backdropClass=e.backdropClass),n}_attachContainer(e,n,r){let o=r.injector||r.viewContainerRef?.injector,a=[{provide:ro,useValue:r},{provide:qc,useValue:n},{provide:ks,useValue:e}],s;r.container?typeof r.container=="function"?s=r.container:(s=r.container.type,a.push(...r.container.providers(r))):s=jb;let l=new An(s,r.viewContainerRef,G.create({parent:o||this._injector,providers:a}));return e.attach(l).instance}_attachDialogContent(e,n,r,o){if(e instanceof _t){let a=this._createInjector(o,n,r,void 0),s={$implicit:o.data,dialogRef:n};o.templateContext&&(s=C(C({},s),typeof o.templateContext=="function"?o.templateContext():o.templateContext)),r.attachTemplatePortal(new Rn(e,null,s,a))}else{let a=this._createInjector(o,n,r,this._injector),s=r.attachComponentPortal(new An(e,o.viewContainerRef,a));n.componentRef=s,n.componentInstance=s.instance}}_createInjector(e,n,r,o){let a=e.injector||e.viewContainerRef?.injector,s=[{provide:qV,useValue:e.data},{provide:qc,useValue:n}];return e.providers&&(typeof e.providers=="function"?s.push(...e.providers(n,e,r)):s.push(...e.providers)),e.direction&&(!a||!a.get(it,null,{optional:!0}))&&s.push({provide:it,useValue:QV(e.direction)}),G.create({parent:a||o,providers:s})}_removeOpenDialog(e,n){let r=this.openDialogs.indexOf(e);r>-1&&(this.openDialogs.splice(r,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((o,a)=>{o?a.setAttribute("aria-hidden",o):a.removeAttribute("aria-hidden")}),this._ariaHiddenElements.clear(),n&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(e){if(e.parentElement){let n=e.parentElement.children;for(let r=n.length-1;r>-1;r--){let o=n[r];o!==e&&o.nodeName!=="SCRIPT"&&o.nodeName!=="STYLE"&&!o.hasAttribute("aria-live")&&!o.hasAttribute("popover")&&(this._ariaHiddenElements.set(o,o.getAttribute("aria-hidden")),o.setAttribute("aria-hidden","true"))}}}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Bb(t,i){let e=t.length;for(;e--;)i(t[e])}var jS=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=$({type:t});static \u0275inj=z({providers:[Hb],imports:[Kn,$i,Xo,$i]})}return t})();function ZV(t,i){}var sh=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;position;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;delayFocusTrap=!0;scrollStrategy;closeOnNavigation=!0;enterAnimationDuration;exitAnimationDuration},Ub="mdc-dialog--open",HS="mdc-dialog--opening",US="mdc-dialog--closing",KV=150,XV=75,JV=(()=>{class t extends jb{_animationStateChanged=new I;_animationsEnabled=!je();_actionSectionCount=0;_hostElement=this._elementRef.nativeElement;_enterAnimationDuration=this._animationsEnabled?$S(this._config.enterAnimationDuration)??KV:0;_exitAnimationDuration=this._animationsEnabled?$S(this._config.exitAnimationDuration)??XV:0;_animationTimer=null;_contentAttached(){super._contentAttached(),this._startOpenAnimation()}_startOpenAnimation(){this._animationStateChanged.emit({state:"opening",totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(zS,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(HS,Ub)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(Ub),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:"closing",totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(Ub),this._animationsEnabled?(this._hostElement.style.setProperty(zS,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(US)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_updateActionSectionCount(e){this._actionSectionCount+=e,this._changeDetectorRef.markForCheck()}_finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration)};_finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:"closed",totalTime:this._exitAnimationDuration})};_clearAnimationClasses(){this._hostElement.classList.remove(HS,US)}_waitForAnimationToComplete(e,n){this._animationTimer!==null&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(n,e)}_requestAnimationFrame(e){this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame=="function"?requestAnimationFrame(e):e()})}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(e){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:"opened",totalTime:e})}ngOnDestroy(){super.ngOnDestroy(),this._animationTimer!==null&&clearTimeout(this._animationTimer)}attachComponentPortal(e){let n=super.attachComponentPortal(e);return n.location.nativeElement.classList.add("mat-mdc-dialog-component-host"),n}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ze(t)))(r||t)}})();static \u0275cmp=E({type:t,selectors:[["mat-dialog-container"]],hostAttrs:["tabindex","-1",1,"mat-mdc-dialog-container","mdc-dialog"],hostVars:10,hostBindings:function(n,r){n&2&&(Tt("id",r._config.id),K("aria-modal",r._config.ariaModal)("role",r._config.role)("aria-labelledby",r._config.ariaLabel?null:r._ariaLabelledByQueue[0])("aria-label",r._config.ariaLabel)("aria-describedby",r._config.ariaDescribedBy||null),P("_mat-animation-noopable",!r._animationsEnabled)("mat-mdc-dialog-container-with-actions",r._actionSectionCount>0))},features:[_e],decls:3,vars:0,consts:[[1,"mat-mdc-dialog-inner-container","mdc-dialog__container"],[1,"mat-mdc-dialog-surface","mdc-dialog__surface"],["cdkPortalOutlet",""]],template:function(n,r){n&1&&(m(0,"div",0)(1,"div",1),ut(2,ZV,0,0,"ng-template",2),h()())},dependencies:[hn],styles:[`.mat-mdc-dialog-container {
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
`],encapsulation:2})}return t})(),zS="--mat-dialog-transition-duration";function $S(t){return t==null?null:typeof t=="number"?t:t.endsWith("ms")?kn(t.substring(0,t.length-2)):t.endsWith("s")?kn(t.substring(0,t.length-1))*1e3:t==="0"?0:null}var ah=(function(t){return t[t.OPEN=0]="OPEN",t[t.CLOSING=1]="CLOSING",t[t.CLOSED=2]="CLOSED",t})(ah||{}),la=class{_ref;_config;_containerInstance;componentInstance;componentRef=null;disableClose;id;_afterOpened=new bn(1);_beforeClosed=new bn(1);_result;_closeFallbackTimeout;_state=ah.OPEN;_closeInteractionType;constructor(i,e,n){this._ref=i,this._config=e,this._containerInstance=n,this.disableClose=e.disableClose,this.id=i.id,i.addPanelClass("mat-mdc-dialog-panel"),n._animationStateChanged.pipe(be(r=>r.state==="opened"),rt(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),n._animationStateChanged.pipe(be(r=>r.state==="closed"),rt(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),i.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),Ft(this.backdropClick(),this.keydownEvents().pipe(be(r=>r.keyCode===27&&!this.disableClose&&!wt(r)))).subscribe(r=>{this.disableClose||(r.preventDefault(),e2(this,r.type==="keydown"?"keyboard":"mouse"))})}close(i){let e=this._config.closePredicate;e&&!e(i,this._config,this.componentInstance)||(this._result=i,this._containerInstance._animationStateChanged.pipe(be(n=>n.state==="closing"),rt(1)).subscribe(n=>{this._beforeClosed.next(i),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),n.totalTime+100)}),this._state=ah.CLOSING,this._containerInstance._startExitAnimation())}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(i){let e=this._ref.config.positionStrategy;return i&&(i.left||i.right)?i.left?e.left(i.left):e.right(i.right):e.centerHorizontally(),i&&(i.top||i.bottom)?i.top?e.top(i.top):e.bottom(i.bottom):e.centerVertically(),this._ref.updatePosition(),this}updateSize(i="",e=""){return this._ref.updateSize(i,e),this}addPanelClass(i){return this._ref.addPanelClass(i),this}removePanelClass(i){return this._ref.removePanelClass(i),this}getState(){return this._state}_finishDialogClose(){this._state=ah.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}};function e2(t,i,e){return t._closeInteractionType=i,t.close(e)}var t2=new y("MatMdcDialogData"),n2=new y("mat-mdc-dialog-default-options"),i2=new y("mat-mdc-dialog-scroll-strategy",{providedIn:"root",factory:()=>{let t=c(G);return()=>sa(t)}}),Yc=(()=>{class t{_defaultOptions=c(n2,{optional:!0});_scrollStrategy=c(i2);_parentDialog=c(t,{optional:!0,skipSelf:!0});_idGenerator=c(Ye);_injector=c(G);_dialog=c(Hb);_animationsDisabled=je();_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new S;_afterOpenedAtThisLevel=new S;dialogConfigClass=sh;_dialogRefConstructor;_dialogContainerType;_dialogDataToken;get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}afterAllClosed=ti(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(Qe(void 0)));constructor(){this._dialogRefConstructor=la,this._dialogContainerType=JV,this._dialogDataToken=t2}open(e,n){let r;n=C(C({},this._defaultOptions||new sh),n),n.id=n.id||this._idGenerator.getId("mat-mdc-dialog-"),n.scrollStrategy=n.scrollStrategy||this._scrollStrategy();let o=this._dialog.open(e,ne(C({},n),{positionStrategy:Cr(this._injector).centerHorizontally().centerVertically(),disableClose:!0,closePredicate:void 0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,disableAnimations:this._animationsDisabled||n.enterAnimationDuration?.toLocaleString()==="0"||n.exitAnimationDuration?.toString()==="0",container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:n},{provide:ro,useValue:n}]},templateContext:()=>({dialogRef:r}),providers:(a,s,l)=>(r=new this._dialogRefConstructor(a,n,l),r.updatePosition(n?.position),[{provide:this._dialogContainerType,useValue:l},{provide:this._dialogDataToken,useValue:s.data},{provide:this._dialogRefConstructor,useValue:r}])}));return r.componentRef=o.componentRef,r.componentInstance=o.componentInstance,this.openDialogs.push(r),this.afterOpened.next(r),r.afterClosed().subscribe(()=>{let a=this.openDialogs.indexOf(r);a>-1&&(this.openDialogs.splice(a,1),this.openDialogs.length||this._getAfterAllClosed().next())}),r}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(e){return this.openDialogs.find(n=>n.id===e)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(e){let n=e.length;for(;n--;)e[n].close()}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var lh=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=$({type:t});static \u0275inj=z({providers:[Yc],imports:[jS,Kn,$i,ve]})}return t})();var ch=class t{dialogRef=c(la);onConfirm(){this.dialogRef.close(!0)}onDeny(){this.dialogRef.close(!1)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=E({type:t,selectors:[["confirmation-dialog"]],decls:8,vars:0,consts:[[1,"flex-with-style"],[1,"top-text"],[1,"button-group"],[1,"button",3,"click"]],template:function(e,n){e&1&&(Ce(0,"div",0)(1,"p",1),g(2," \xC4r du s\xE4ker att du vill avregistrera n\xE4rvaro? "),Me(),Ce(3,"li",2)(4,"button",3),Vn("click",function(){return n.onConfirm()}),g(5," Ja "),Me(),Ce(6,"button",3),Vn("click",function(){return n.onDeny()}),g(7," Nej "),Me()()())},dependencies:[lh,ht],styles:["[_nghost-%COMP%]{display:block;text-align:center;padding:8px}.top-text[_ngcontent-%COMP%]{font:var(--mat-sys-title-medium)}.button-group[_ngcontent-%COMP%]{display:flex;justify-content:center;gap:32px}.button[_ngcontent-%COMP%]{padding:8px 32px;font:var(--mat-sys-label-small);font-weight:700;cursor:pointer;border-radius:4px;transition:all .2s ease-in-out;background-color:var(--mat-sys-primary);color:var(--mat-sys-on-primary);border:1px solid}button[_ngcontent-%COMP%]:hover{background-color:var(--mat-sys-primary-fixed-dim)}"]})};var WS=(t,i)=>i.value,r2=(t,i)=>e=>e.value!="CHECKED_OUT";function o2(t,i){if(t&1&&(m(0,"span"),g(1),h()),t&2){let e=x();p(),oe(e.statusLabels[e.currentStatus])}}function a2(t,i){if(t&1&&(m(0,"mat-option",3),g(1),h()),t&2){let e=i.$implicit;A("value",e.value),p(),oe(e.label)}}function s2(t,i){if(t&1&&De(0,a2,2,2,"mat-option",3,WS),t&2){let e=x(2);xe(e.statusOptions)}}function l2(t,i){if(t&1&&(m(0,"mat-option",3),g(1),h()),t&2){let e=i.$implicit;A("value",e.value),p(),oe(e.label)}}function c2(t,i){if(t&1&&De(0,l2,2,2,"mat-option",3,WS),t&2){let e=x(2);xe(e.statusOptions.filter(L_(0,r2,i)))}}function d2(t,i){if(t&1){let e=Ae();m(0,"mat-form-field",0)(1,"mat-select",2),M("selectionChange",function(r){X(e);let o=x();return J(o.onStatusChange(r.value))}),j(2,s2,2,0)(3,c2,2,1),h()()}if(t&2){let e=x();p(),A("value",e.currentStatus),p(),H(e.currentStatus==="CHECKED_IN"?2:3)}}function u2(t,i){if(t&1&&(m(0,"p",1),g(1),h()),t&2){let e=x();p(),oe(e.errorMessage)}}var Ns=class t{childSignal=Ne.required();disabled=Sn();errorMessage="";showConfirmation=!1;dialog=c(Yc);statusOptions=[{value:"NOT_SET",label:"\u2014"},{value:"CHECKED_IN",label:"Incheckad"},{value:"CHECKED_OUT",label:"Utcheckad"},{value:"LEAVE",label:"Ledig"},{value:"ABSENT",label:"Fr\xE5nvarande"}];statusLabels=Object.fromEntries(this.statusOptions.map(i=>[i.value,i.label]));attendanceService=c(eo);get currentStatus(){return this.attendanceService.getSignal(this.childSignal().id,Gi())()??"NOT_SET"}constructor(){nt(()=>{let i=this.childSignal();if(!i)return;let e=this.attendanceService.getSignal(i.id,Gi());e()===null&&e.set(i.status??"NOT_SET")})}onStatusChange(i){let e=this.attendanceService.getSignal(this.childSignal().id,Gi()),n=e();e.set(i),n==="CHECKED_IN"&&i==="CHECKED_OUT"&&this.dialog.open(ch).afterClosed().subscribe(o=>{if(!o){e.set(n);return}}),this.attendanceService.setAttendance(this.childSignal().id,Gi(),i).subscribe({next:r=>e.set(r.status),error:r=>{console.error("Kunde inte spara",r),e.set(n),this.errorMessage="Misslyckades att spara till databasen.",setTimeout(()=>this.errorMessage="",2e3)}}),this.wsUpdateAttendance(i)}attendanceChangeEvent=new I;wsUpdateAttendance(i){let e={childId:this.childSignal().id,status:i};this.attendanceChangeEvent.emit(e)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=E({type:t,selectors:[["attendance-box"]],inputs:{childSignal:[1,"childSignal"],disabled:[1,"disabled"]},outputs:{childSignal:"childSignalChange",attendanceChangeEvent:"attendanceChangeEvent"},decls:4,vars:2,consts:[["appearance","outline","subscriptSizing","dynamic"],[1,"error-text"],[3,"selectionChange","value"],[3,"value"]],template:function(e,n){e&1&&(m(0,"div"),j(1,o2,2,1,"span")(2,d2,4,2,"mat-form-field",0),j(3,u2,2,1,"p",1),h()),e&2&&(p(),H(n.disabled()?1:2),p(2),H(n.errorMessage?3:-1))},dependencies:[io,Rt,no,Xn,Ot],styles:[".error-text[_ngcontent-%COMP%]{color:red;font-size:16px;position:absolute}mat-form-field[_ngcontent-%COMP%]{--mat-form-field-container-height: 32px;--mat-form-field-container-vertical-padding: 6px;background-color:var(--mat-sys-surface-variant)}"]})};var dh=class t{childSignal=Ne.required();dateSignal=Ne.required();attendanceChangeEvent=new I;wsUpdateAttendance(i){this.attendanceChangeEvent.emit(i)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=E({type:t,selectors:[["child-display"]],inputs:{childSignal:[1,"childSignal"],dateSignal:[1,"dateSignal"]},outputs:{childSignal:"childSignalChange",dateSignal:"dateSignalChange",attendanceChangeEvent:"attendanceChangeEvent"},decls:6,vars:2,consts:[[1,"rowise"],[1,"attendance-box",3,"attendanceChangeEvent","childSignal"]],template:function(e,n){e&1&&(m(0,"p"),g(1),h(),m(2,"div",0)(3,"p"),g(4,"N\xE4rvaro:"),h(),m(5,"attendance-box",1),M("attendanceChangeEvent",function(o){return n.wsUpdateAttendance(o)}),h()()),e&2&&(p(),oe(n.dateSignal()),p(4),A("childSignal",n.childSignal()))},dependencies:[Ns],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;width:fit-content;height:100%;max-width:fit-content}.rowise[_ngcontent-%COMP%]{display:flex;flex:1;gap:1em;margin:1em;align-items:baseline}p[_ngcontent-%COMP%]{font:var(--mat-sys-body-large);margin-bottom:0;margin-left:1em}"]})};var GS=["*"],m2=`.mdc-list {
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
`,f2=["unscopedContent"],h2=["text"],p2=[[["","matListItemAvatar",""],["","matListItemIcon",""]],[["","matListItemTitle",""]],[["","matListItemLine",""]],"*",[["","matListItemMeta",""]],[["mat-divider"]]],g2=["[matListItemAvatar],[matListItemIcon]","[matListItemTitle]","[matListItemLine]","*","[matListItemMeta]","mat-divider"];var _2=new y("ListOption"),wr=(()=>{class t{_elementRef=c(B);constructor(){}static \u0275fac=function(n){return new(n||t)};static \u0275dir=N({type:t,selectors:[["","matListItemTitle",""]],hostAttrs:[1,"mat-mdc-list-item-title","mdc-list-item__primary-text"]})}return t})(),v2=(()=>{class t{_elementRef=c(B);constructor(){}static \u0275fac=function(n){return new(n||t)};static \u0275dir=N({type:t,selectors:[["","matListItemLine",""]],hostAttrs:[1,"mat-mdc-list-item-line","mdc-list-item__secondary-text"]})}return t})(),ca=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=N({type:t,selectors:[["","matListItemMeta",""]],hostAttrs:[1,"mat-mdc-list-item-meta","mdc-list-item__end"]})}return t})(),qS=(()=>{class t{_listOption=c(_2,{optional:!0});constructor(){}_isAlignedAtStart(){return!this._listOption||this._listOption?._getTogglePosition()==="after"}static \u0275fac=function(n){return new(n||t)};static \u0275dir=N({type:t,hostVars:4,hostBindings:function(n,r){n&2&&P("mdc-list-item__start",r._isAlignedAtStart())("mdc-list-item__end",!r._isAlignedAtStart())}})}return t})(),b2=(()=>{class t extends qS{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ze(t)))(r||t)}})();static \u0275dir=N({type:t,selectors:[["","matListItemAvatar",""]],hostAttrs:[1,"mat-mdc-list-item-avatar"],features:[_e]})}return t})(),y2=(()=>{class t extends qS{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ze(t)))(r||t)}})();static \u0275dir=N({type:t,selectors:[["","matListItemIcon",""]],hostAttrs:[1,"mat-mdc-list-item-icon"],features:[_e]})}return t})(),C2=new y("MAT_LIST_CONFIG"),Qc=(()=>{class t{_isNonInteractive=!0;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=Vt(e)}_disableRipple=!1;get disabled(){return this._disabled()}set disabled(e){this._disabled.set(Vt(e))}_disabled=D(!1);_defaultOptions=c(C2,{optional:!0});static \u0275fac=function(n){return new(n||t)};static \u0275dir=N({type:t,hostVars:1,hostBindings:function(n,r){n&2&&K("aria-disabled",r.disabled)},inputs:{disableRipple:"disableRipple",disabled:"disabled"}})}return t})(),w2=(()=>{class t{_elementRef=c(B);_ngZone=c(V);_listBase=c(Qc,{optional:!0});_platform=c(me);_hostElement;_isButtonElement;_noopAnimations=je();_avatars;_icons;set lines(e){this._explicitLines=kn(e,null),this._updateItemLines(!1)}_explicitLines=null;get disableRipple(){return this.disabled||this._disableRipple||this._noopAnimations||!!this._listBase?.disableRipple}set disableRipple(e){this._disableRipple=Vt(e)}_disableRipple=!1;get disabled(){return this._disabled()||!!this._listBase?.disabled}set disabled(e){this._disabled.set(Vt(e))}_disabled=D(!1);_subscriptions=new ae;_rippleRenderer=null;_hasUnscopedTextContent=!1;rippleConfig;get rippleDisabled(){return this.disableRipple||!!this.rippleConfig.disabled}constructor(){c(qe).load(_i);let e=c(ia,{optional:!0});this.rippleConfig=e||{},this._hostElement=this._elementRef.nativeElement,this._isButtonElement=this._hostElement.nodeName.toLowerCase()==="button",this._listBase&&!this._listBase._isNonInteractive&&this._initInteractiveListItem(),this._isButtonElement&&!this._hostElement.hasAttribute("type")&&this._hostElement.setAttribute("type","button")}ngAfterViewInit(){this._monitorProjectedLinesAndTitle(),this._updateItemLines(!0)}ngOnDestroy(){this._subscriptions.unsubscribe(),this._rippleRenderer!==null&&this._rippleRenderer._removeTriggerEvents()}_hasIconOrAvatar(){return!!(this._avatars.length||this._icons.length)}_initInteractiveListItem(){this._hostElement.classList.add("mat-mdc-list-item-interactive"),this._rippleRenderer=new na(this,this._ngZone,this._hostElement,this._platform,c(G)),this._rippleRenderer.setupTriggerEvents(this._hostElement)}_monitorProjectedLinesAndTitle(){this._ngZone.runOutsideAngular(()=>{this._subscriptions.add(Ft(this._lines.changes,this._titles.changes).subscribe(()=>this._updateItemLines(!1)))})}_updateItemLines(e){if(!this._lines||!this._titles||!this._unscopedContent)return;e&&this._checkDomForUnscopedTextContent();let n=this._explicitLines??this._inferLinesFromContent(),r=this._unscopedContent.nativeElement;if(this._hostElement.classList.toggle("mat-mdc-list-item-single-line",n<=1),this._hostElement.classList.toggle("mdc-list-item--with-one-line",n<=1),this._hostElement.classList.toggle("mdc-list-item--with-two-lines",n===2),this._hostElement.classList.toggle("mdc-list-item--with-three-lines",n===3),this._hasUnscopedTextContent){let o=this._titles.length===0&&n===1;r.classList.toggle("mdc-list-item__primary-text",o),r.classList.toggle("mdc-list-item__secondary-text",!o)}else r.classList.remove("mdc-list-item__primary-text"),r.classList.remove("mdc-list-item__secondary-text")}_inferLinesFromContent(){let e=this._titles.length+this._lines.length;return this._hasUnscopedTextContent&&(e+=1),e}_checkDomForUnscopedTextContent(){this._hasUnscopedTextContent=Array.from(this._unscopedContent.nativeElement.childNodes).filter(e=>e.nodeType!==e.COMMENT_NODE).some(e=>!!(e.textContent&&e.textContent.trim()))}static \u0275fac=function(n){return new(n||t)};static \u0275dir=N({type:t,contentQueries:function(n,r,o){if(n&1&&bt(o,b2,4)(o,y2,4),n&2){let a;R(a=O())&&(r._avatars=a),R(a=O())&&(r._icons=a)}},hostVars:4,hostBindings:function(n,r){n&2&&(K("aria-disabled",r.disabled)("disabled",r._isButtonElement&&r.disabled||null),P("mdc-list-item--disabled",r.disabled))},inputs:{lines:"lines",disableRipple:"disableRipple",disabled:"disabled"}})}return t})();var uh=(()=>{class t extends Qc{_isNonInteractive=!1;static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ze(t)))(r||t)}})();static \u0275cmp=E({type:t,selectors:[["mat-action-list"]],hostAttrs:["role","group",1,"mat-mdc-action-list","mat-mdc-list-base","mdc-list"],exportAs:["matActionList"],features:[Ue([{provide:Qc,useExisting:t}]),_e],ngContentSelectors:GS,decls:1,vars:0,template:function(n,r){n&1&&(Se(),te(0))},styles:[`.mdc-list {
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
`],encapsulation:2,changeDetection:0})}return t})();var Ps=(()=>{class t extends Qc{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ze(t)))(r||t)}})();static \u0275cmp=E({type:t,selectors:[["mat-list"]],hostAttrs:[1,"mat-mdc-list","mat-mdc-list-base","mdc-list"],exportAs:["matList"],features:[Ue([{provide:Qc,useExisting:t}]),_e],ngContentSelectors:GS,decls:1,vars:0,template:function(n,r){n&1&&(Se(),te(0))},styles:[m2],encapsulation:2,changeDetection:0})}return t})(),oo=(()=>{class t extends w2{_lines;_titles;_meta;_unscopedContent;_itemText;get activated(){return this._activated}set activated(e){this._activated=Vt(e)}_activated=!1;_getAriaCurrent(){return this._hostElement.nodeName==="A"&&this._activated?"page":null}_hasBothLeadingAndTrailing(){return this._meta.length!==0&&(this._avatars.length!==0||this._icons.length!==0)}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ze(t)))(r||t)}})();static \u0275cmp=E({type:t,selectors:[["mat-list-item"],["a","mat-list-item",""],["button","mat-list-item",""]],contentQueries:function(n,r,o){if(n&1&&bt(o,v2,5)(o,wr,5)(o,ca,5),n&2){let a;R(a=O())&&(r._lines=a),R(a=O())&&(r._titles=a),R(a=O())&&(r._meta=a)}},viewQuery:function(n,r){if(n&1&&we(f2,5)(h2,5),n&2){let o;R(o=O())&&(r._unscopedContent=o.first),R(o=O())&&(r._itemText=o.first)}},hostAttrs:[1,"mat-mdc-list-item","mdc-list-item"],hostVars:13,hostBindings:function(n,r){n&2&&(K("aria-current",r._getAriaCurrent()),P("mdc-list-item--activated",r.activated)("mdc-list-item--with-leading-avatar",r._avatars.length!==0)("mdc-list-item--with-leading-icon",r._icons.length!==0)("mdc-list-item--with-trailing-meta",r._meta.length!==0)("mat-mdc-list-item-both-leading-and-trailing",r._hasBothLeadingAndTrailing())("_mat-animation-noopable",r._noopAnimations))},inputs:{activated:"activated"},exportAs:["matListItem"],features:[_e],ngContentSelectors:g2,decls:10,vars:0,consts:[["unscopedContent",""],[1,"mdc-list-item__content"],[1,"mat-mdc-list-item-unscoped-content",3,"cdkObserveContent"],[1,"mat-focus-indicator"]],template:function(n,r){n&1&&(Se(p2),te(0),m(1,"span",1),te(2,1),te(3,2),m(4,"span",2,0),M("cdkObserveContent",function(){return r._updateItemLines(!0)}),te(6,3),h()(),te(7,4),te(8,5),T(9,"div",3))},dependencies:[Dc],encapsulation:2,changeDetection:0})}return t})();var ao=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=$({type:t});static \u0275inj=z({imports:[hs,ys,rh,ve,Wi]})}return t})();var fh=class t{url=`${st.apiUrl}/api/children/attendance`;urlPerGroup=`${st.apiUrl}/api/children/attendance/group`;http=c(yt);getChildren(){return this.http.get(this.url)}getChildrenByGroup(i,e){let n=new Lt().set("groupId",i);return e&&(n=n.set("date",e)),this.http.get(this.urlPerGroup,{params:n})}static \u0275fac=function(e){return new(e||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})};var D2=["tooltip"],x2=20;var E2=new y("mat-tooltip-scroll-strategy",{providedIn:"root",factory:()=>{let t=c(G);return()=>to(t,{scrollThrottle:x2})}}),M2=new y("mat-tooltip-default-options",{providedIn:"root",factory:()=>({showDelay:0,hideDelay:0,touchendHideDelay:1500})});var YS="tooltip-panel",S2={passive:!0},I2=8,T2=8,k2=24,A2=200,Dr=(()=>{class t{_elementRef=c(B);_ngZone=c(V);_platform=c(me);_ariaDescriber=c(KE);_focusMonitor=c(Hi);_dir=c(it);_injector=c(G);_viewContainerRef=c(It);_mediaMatcher=c(fs);_document=c(Y);_renderer=c(Oe);_animationsDisabled=je();_defaultOptions=c(M2,{optional:!0});_overlayRef=null;_tooltipInstance=null;_overlayPanelClass;_portal;_position="below";_positionAtOrigin=!1;_disabled=!1;_tooltipClass;_viewInitialized=!1;_pointerExitEventsInitialized=!1;_tooltipComponent=QS;_viewportMargin=8;_currentPosition;_cssClassPrefix="mat-mdc";_ariaDescriptionPending=!1;_dirSubscribed=!1;get position(){return this._position}set position(e){e!==this._position&&(this._position=e,this._overlayRef&&(this._updatePosition(this._overlayRef),this._tooltipInstance?.show(0),this._overlayRef.updatePosition()))}get positionAtOrigin(){return this._positionAtOrigin}set positionAtOrigin(e){this._positionAtOrigin=Vt(e),this._detach(),this._overlayRef=null}get disabled(){return this._disabled}set disabled(e){let n=Vt(e);this._disabled!==n&&(this._disabled=n,n?this.hide(0):this._setupPointerEnterEventsIfNeeded(),this._syncAriaDescription(this.message))}get showDelay(){return this._showDelay}set showDelay(e){this._showDelay=kn(e)}_showDelay;get hideDelay(){return this._hideDelay}set hideDelay(e){this._hideDelay=kn(e),this._tooltipInstance&&(this._tooltipInstance._mouseLeaveHideDelay=this._hideDelay)}_hideDelay;touchGestures="auto";get message(){return this._message}set message(e){let n=this._message;this._message=e!=null?String(e).trim():"",!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage()),this._syncAriaDescription(n)}_message="";get tooltipClass(){return this._tooltipClass}set tooltipClass(e){this._tooltipClass=e,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass)}_eventCleanups=[];_touchstartTimeout=null;_destroyed=new S;_isDestroyed=!1;constructor(){let e=this._defaultOptions;e&&(this._showDelay=e.showDelay,this._hideDelay=e.hideDelay,e.position&&(this.position=e.position),e.positionAtOrigin&&(this.positionAtOrigin=e.positionAtOrigin),e.touchGestures&&(this.touchGestures=e.touchGestures),e.tooltipClass&&(this.tooltipClass=e.tooltipClass)),this._viewportMargin=I2}ngAfterViewInit(){this._viewInitialized=!0,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe(ye(this._destroyed)).subscribe(e=>{e?e==="keyboard"&&this._ngZone.run(()=>this.show()):this._ngZone.run(()=>this.hide(0))})}ngOnDestroy(){let e=this._elementRef.nativeElement;this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),this._eventCleanups.forEach(n=>n()),this._eventCleanups.length=0,this._destroyed.next(),this._destroyed.complete(),this._isDestroyed=!0,this._ariaDescriber.removeDescription(e,this.message,"tooltip"),this._focusMonitor.stopMonitoring(e)}show(e=this.showDelay,n){if(this.disabled||!this.message||this._isTooltipVisible()){this._tooltipInstance?._cancelPendingAnimations();return}let r=this._createOverlay(n);this._detach(),this._portal=this._portal||new An(this._tooltipComponent,this._viewContainerRef);let o=this._tooltipInstance=r.attach(this._portal).instance;o._triggerElement=this._elementRef.nativeElement,o._mouseLeaveHideDelay=this._hideDelay,o.afterHidden().pipe(ye(this._destroyed)).subscribe(()=>this._detach()),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),o.show(e)}hide(e=this.hideDelay){let n=this._tooltipInstance;n&&(n.isVisible()?n.hide(e):(n._cancelPendingAnimations(),this._detach()))}toggle(e){this._isTooltipVisible()?this.hide():this.show(void 0,e)}_isTooltipVisible(){return!!this._tooltipInstance&&this._tooltipInstance.isVisible()}_createOverlay(e){if(this._overlayRef){let a=this._overlayRef.getConfig().positionStrategy;if((!this.positionAtOrigin||!e)&&a._origin instanceof B)return this._overlayRef;this._detach()}let n=this._injector.get(Jr).getAncestorScrollContainers(this._elementRef),r=`${this._cssClassPrefix}-${YS}`,o=Rs(this._injector,this.positionAtOrigin?e||this._elementRef:this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(!1).withViewportMargin(this._viewportMargin).withScrollableContainers(n).withPopoverLocation("global");return o.positionChanges.pipe(ye(this._destroyed)).subscribe(a=>{this._updateCurrentPositionClass(a.connectionPair),this._tooltipInstance&&a.scrollableViewProperties.isOverlayClipped&&this._tooltipInstance.isVisible()&&this._ngZone.run(()=>this.hide(0))}),this._overlayRef=Yi(this._injector,{direction:this._dir,positionStrategy:o,panelClass:this._overlayPanelClass?[...this._overlayPanelClass,r]:r,scrollStrategy:this._injector.get(E2)(),disableAnimations:this._animationsDisabled,eventPredicate:this._overlayEventPredicate}),this._updatePosition(this._overlayRef),this._overlayRef.detachments().pipe(ye(this._destroyed)).subscribe(()=>this._detach()),this._overlayRef.outsidePointerEvents().pipe(ye(this._destroyed)).subscribe(()=>this._tooltipInstance?._handleBodyInteraction()),this._overlayRef.keydownEvents().pipe(ye(this._destroyed)).subscribe(a=>{a.preventDefault(),a.stopPropagation(),this._ngZone.run(()=>this.hide(0))}),this._defaultOptions?.disableTooltipInteractivity&&this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`),this._dirSubscribed||(this._dirSubscribed=!0,this._dir.change.pipe(ye(this._destroyed)).subscribe(()=>{this._overlayRef&&this._updatePosition(this._overlayRef)})),this._overlayRef}_detach(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null}_updatePosition(e){let n=e.getConfig().positionStrategy,r=this._getOrigin(),o=this._getOverlayPosition();n.withPositions([this._addOffset(C(C({},r.main),o.main)),this._addOffset(C(C({},r.fallback),o.fallback))])}_addOffset(e){let n=T2,r=!this._dir||this._dir.value=="ltr";return e.originY==="top"?e.offsetY=-n:e.originY==="bottom"?e.offsetY=n:e.originX==="start"?e.offsetX=r?-n:n:e.originX==="end"&&(e.offsetX=r?n:-n),e}_getOrigin(){let e=!this._dir||this._dir.value=="ltr",n=this.position,r;n=="above"||n=="below"?r={originX:"center",originY:n=="above"?"top":"bottom"}:n=="before"||n=="left"&&e||n=="right"&&!e?r={originX:"start",originY:"center"}:(n=="after"||n=="right"&&e||n=="left"&&!e)&&(r={originX:"end",originY:"center"});let{x:o,y:a}=this._invertPosition(r.originX,r.originY);return{main:r,fallback:{originX:o,originY:a}}}_getOverlayPosition(){let e=!this._dir||this._dir.value=="ltr",n=this.position,r;n=="above"?r={overlayX:"center",overlayY:"bottom"}:n=="below"?r={overlayX:"center",overlayY:"top"}:n=="before"||n=="left"&&e||n=="right"&&!e?r={overlayX:"end",overlayY:"center"}:(n=="after"||n=="right"&&e||n=="left"&&!e)&&(r={overlayX:"start",overlayY:"center"});let{x:o,y:a}=this._invertPosition(r.overlayX,r.overlayY);return{main:r,fallback:{overlayX:o,overlayY:a}}}_updateTooltipMessage(){this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),Ge(()=>{this._tooltipInstance&&this._overlayRef.updatePosition()},{injector:this._injector}))}_setTooltipClass(e){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=e instanceof Set?Array.from(e):e,this._tooltipInstance._markForCheck())}_invertPosition(e,n){return this.position==="above"||this.position==="below"?n==="top"?n="bottom":n==="bottom"&&(n="top"):e==="end"?e="start":e==="start"&&(e="end"),{x:e,y:n}}_updateCurrentPositionClass(e){let{overlayY:n,originX:r,originY:o}=e,a;if(n==="center"?this._dir&&this._dir.value==="rtl"?a=r==="end"?"left":"right":a=r==="start"?"left":"right":a=n==="bottom"&&o==="top"?"above":"below",a!==this._currentPosition){let s=this._overlayRef;if(s){let l=`${this._cssClassPrefix}-${YS}-`;s.removePanelClass(l+this._currentPosition),s.addPanelClass(l+a)}this._currentPosition=a}}_setupPointerEnterEventsIfNeeded(){this._disabled||!this.message||!this._viewInitialized||this._eventCleanups.length||(this._isTouchPlatform()?this.touchGestures!=="off"&&(this._disableNativeGesturesIfNecessary(),this._addListener("touchstart",e=>{let n=e.targetTouches?.[0],r=n?{x:n.clientX,y:n.clientY}:void 0;this._setupPointerExitEventsIfNeeded(),this._touchstartTimeout&&clearTimeout(this._touchstartTimeout);let o=500;this._touchstartTimeout=setTimeout(()=>{this._touchstartTimeout=null,this.show(void 0,r)},this._defaultOptions?.touchLongPressShowDelay??o)})):this._addListener("mouseenter",e=>{this._setupPointerExitEventsIfNeeded();let n;e.x!==void 0&&e.y!==void 0&&(n=e),this.show(void 0,n)}))}_setupPointerExitEventsIfNeeded(){if(!this._pointerExitEventsInitialized){if(this._pointerExitEventsInitialized=!0,!this._isTouchPlatform())this._addListener("mouseleave",e=>{let n=e.relatedTarget;(!n||!this._overlayRef?.overlayElement.contains(n))&&this.hide()}),this._addListener("wheel",e=>{if(this._isTooltipVisible()){let n=this._document.elementFromPoint(e.clientX,e.clientY),r=this._elementRef.nativeElement;n!==r&&!r.contains(n)&&this.hide()}});else if(this.touchGestures!=="off"){this._disableNativeGesturesIfNecessary();let e=()=>{this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this.hide(this._defaultOptions?.touchendHideDelay)};this._addListener("touchend",e),this._addListener("touchcancel",e)}}}_addListener(e,n){this._eventCleanups.push(this._renderer.listen(this._elementRef.nativeElement,e,n,S2))}_isTouchPlatform(){let e=this._defaultOptions?.detectHoverCapability;return typeof e=="function"?!e():this._platform.IOS||this._platform.ANDROID?!0:this._platform.isBrowser?!!e&&this._mediaMatcher.matchMedia("(any-hover: none)").matches:!1}_disableNativeGesturesIfNecessary(){let e=this.touchGestures;if(e!=="off"){let n=this._elementRef.nativeElement,r=n.style;(e==="on"||n.nodeName!=="INPUT"&&n.nodeName!=="TEXTAREA")&&(r.userSelect=r.msUserSelect=r.webkitUserSelect=r.MozUserSelect="none"),(e==="on"||!n.draggable)&&(r.webkitUserDrag="none"),r.touchAction="none",r.webkitTapHighlightColor="transparent"}}_syncAriaDescription(e){this._ariaDescriptionPending||(this._ariaDescriptionPending=!0,this._ariaDescriber.removeDescription(this._elementRef.nativeElement,e,"tooltip"),this._isDestroyed||Ge({write:()=>{this._ariaDescriptionPending=!1,this.message&&!this.disabled&&this._ariaDescriber.describe(this._elementRef.nativeElement,this.message,"tooltip")}},{injector:this._injector}))}_overlayEventPredicate=e=>e.type==="keydown"?this._isTooltipVisible()&&e.keyCode===27&&!wt(e):!0;static \u0275fac=function(n){return new(n||t)};static \u0275dir=N({type:t,selectors:[["","matTooltip",""]],hostAttrs:[1,"mat-mdc-tooltip-trigger"],hostVars:2,hostBindings:function(n,r){n&2&&P("mat-mdc-tooltip-disabled",r.disabled)},inputs:{position:[0,"matTooltipPosition","position"],positionAtOrigin:[0,"matTooltipPositionAtOrigin","positionAtOrigin"],disabled:[0,"matTooltipDisabled","disabled"],showDelay:[0,"matTooltipShowDelay","showDelay"],hideDelay:[0,"matTooltipHideDelay","hideDelay"],touchGestures:[0,"matTooltipTouchGestures","touchGestures"],message:[0,"matTooltip","message"],tooltipClass:[0,"matTooltipClass","tooltipClass"]},exportAs:["matTooltip"]})}return t})(),QS=(()=>{class t{_changeDetectorRef=c(Ie);_elementRef=c(B);_isMultiline=!1;message;tooltipClass;_showTimeoutId;_hideTimeoutId;_triggerElement;_mouseLeaveHideDelay;_animationsDisabled=je();_tooltip;_closeOnInteraction=!1;_isVisible=!1;_onHide=new S;_showAnimation="mat-mdc-tooltip-show";_hideAnimation="mat-mdc-tooltip-hide";constructor(){}show(e){this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=setTimeout(()=>{this._toggleVisibility(!0),this._showTimeoutId=void 0},e)}hide(e){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId=setTimeout(()=>{this._toggleVisibility(!1),this._hideTimeoutId=void 0},e)}afterHidden(){return this._onHide}isVisible(){return this._isVisible}ngOnDestroy(){this._cancelPendingAnimations(),this._onHide.complete(),this._triggerElement=null}_handleBodyInteraction(){this._closeOnInteraction&&this.hide(0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_handleMouseLeave({relatedTarget:e}){(!e||!this._triggerElement.contains(e))&&(this.isVisible()?this.hide(this._mouseLeaveHideDelay):this._finalizeAnimation(!1))}_onShow(){this._isMultiline=this._isTooltipMultiline(),this._markForCheck()}_isTooltipMultiline(){let e=this._elementRef.nativeElement.getBoundingClientRect();return e.height>k2&&e.width>=A2}_handleAnimationEnd({animationName:e}){(e===this._showAnimation||e===this._hideAnimation)&&this._finalizeAnimation(e===this._showAnimation)}_cancelPendingAnimations(){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=this._hideTimeoutId=void 0}_finalizeAnimation(e){e?this._closeOnInteraction=!0:this.isVisible()||this._onHide.next()}_toggleVisibility(e){let n=this._tooltip.nativeElement,r=this._showAnimation,o=this._hideAnimation;if(n.classList.remove(e?o:r),n.classList.add(e?r:o),this._isVisible!==e&&(this._isVisible=e,this._changeDetectorRef.markForCheck()),e&&!this._animationsDisabled&&typeof getComputedStyle=="function"){let a=getComputedStyle(n);(a.getPropertyValue("animation-duration")==="0s"||a.getPropertyValue("animation-name")==="none")&&(this._animationsDisabled=!0)}e&&this._onShow(),this._animationsDisabled&&(n.classList.add("_mat-animation-noopable"),this._finalizeAnimation(e))}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=E({type:t,selectors:[["mat-tooltip-component"]],viewQuery:function(n,r){if(n&1&&we(D2,7),n&2){let o;R(o=O())&&(r._tooltip=o.first)}},hostAttrs:["aria-hidden","true"],hostBindings:function(n,r){n&1&&M("mouseleave",function(a){return r._handleMouseLeave(a)})},decls:4,vars:5,consts:[["tooltip",""],[1,"mdc-tooltip","mat-mdc-tooltip",3,"animationend"],[1,"mat-mdc-tooltip-surface","mdc-tooltip__surface"]],template:function(n,r){n&1&&(Ce(0,"div",1,0),Vn("animationend",function(a){return r._handleAnimationEnd(a)}),Ce(2,"div",2),g(3),Me()()),n&2&&(kt(r.tooltipClass),P("mdc-tooltip--multiline",r._isMultiline),p(3),oe(r.message))},styles:[`.mat-mdc-tooltip {
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
`],encapsulation:2,changeDetection:0})}return t})();var Fs=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=$({type:t});static \u0275inj=z({imports:[Xo,Kn,ve,Zn]})}return t})();var hh=class t{teacher=Sn.required();static \u0275fac=function(e){return new(e||t)};static \u0275cmp=E({type:t,selectors:[["main-presence-indicator"]],inputs:{teacher:[1,"teacher"]},decls:3,vars:5,consts:[["tooltip","matTooltip"],[3,"matTooltip"]],template:function(e,n){e&1&&(m(0,"p",1,0),g(2,"\u2B24"),h()),e&2&&(di(Hn("color: ",n.teacher().color)),A("matTooltip",dr(n.teacher().name)))},dependencies:[Fs,Dr],styles:["p[_ngcontent-%COMP%]{display:flex;margin:0;padding:0;cursor:pointer;text-align:center;-webkit-user-select:none;user-select:none}"]})};var da=!0;var gn=class t{observedSocket=new bn(1);connectedSocket=null;mailboxes={attendanceMessages:new S,presenceMessages:new S,journalMessages:new S,chatMessages:new S,notifications:new S};rooms={attendance:"",journal:"",chat:""};toChatMessage(i){if(typeof i!="object"||i===null)return null;let e=i;return typeof e.senderId!="number"||typeof e.recipientId!="number"||typeof e.chatMessage!="string"||typeof e.timestamp!="string"?null:{senderId:e.senderId,recipientId:e.recipientId,chatMessage:e.chatMessage,timestamp:e.timestamp}}deliverMessage(i){let e=this.toChatMessage(i);if(e){this.mailboxes.chatMessages.next(e);return}switch(i.type){case"ATTENDANCE":this.mailboxes.attendanceMessages.next(i);break;case"DOC_OPERATION":this.mailboxes.journalMessages.next(i);break;case"PRESENCE_JOIN":case"PRESENCE_LEAVE":case"PRESENCE_STATE":this.mailboxes.presenceMessages.next(i);break;case"CHAT_MESSAGE":let n=this.toChatMessage(i.message);n&&this.mailboxes.chatMessages.next(n);break;case"NOTIFICATION":this.mailboxes.notifications.next(i);break}}connect(i){this.observedSocket=new bn(1);let e=sessionStorage.getItem("token"),n=new WebSocket(`${i}?token=${e}`);n.onmessage=r=>{let o=JSON.parse(r.data);da&&console.log("[Websocket] - Received:",o),this.deliverMessage(o)},n.onclose=r=>{da&&console.log("[Websocket] - Disconnected",r.code,r.reason)},n.onopen=()=>{da&&console.log("[Websocket] - Connected"),this.observedSocket.next(n),this.connectedSocket=n}}disconnect(){if(this.connectedSocket==null){console.error("[Websocket] - Tried disconnecting an unconnected websocket.");return}for(let i of Object.values(this.rooms))i!==""&&this.connectedSocket.send(JSON.stringify({type:"unsubscribe",room:i}));this.connectedSocket.close(),this.observedSocket.complete()}async ensureConnected(){return new Promise(i=>{this.observedSocket.subscribe(()=>{i()})})}setRoom(i,e){if(this.connectedSocket==null){console.error("[Websocket] - Attempted to set room of an unconnected socket");return}this.rooms[i]!==""&&this.leaveRoom(i),this.rooms[i]=e,this.connectedSocket.readyState==this.connectedSocket.OPEN&&(da&&console.log("[Websocket] - Subscribing:",JSON.stringify({type:"subscribe",room:e})),this.connectedSocket.send(JSON.stringify({type:"subscribe",room:e})))}setAttendanceRoom(i){this.setRoom("attendance",i)}setJournalRoom(i){this.setRoom("journal",i)}setChatRoom(i){this.setRoom("chat",i)}leaveRoom(i){if(this.connectedSocket==null){console.error("[Websocket] - Tried to leave room on unconnected socket.");return}this.rooms[i]!=""&&(da&&console.log("[Websocket] - Unsubscribing:",JSON.stringify({type:"unsubscribe",room:this.rooms[i]})),this.connectedSocket.send(JSON.stringify({type:"unsubscribe",room:this.rooms[i]})),this.rooms[i]="")}leaveAttendanceRoom(){this.leaveRoom("attendance")}leaveJournalRoom(){this.leaveRoom("journal")}sendMessage(i,e){if(this.connectedSocket==null){console.error("[Websocket] - Tried to send message on unconnected socket.");return}e.room=this.rooms[i=="ATTENDANCE"?"attendance":i=="CHAT_MESSAGE"?"chat":"journal"],e.type=i;let n=JSON.stringify(C({},e));da&&console.log("[Websocket] - Sending off: ",n),this.connectedSocket.send(n)}sendAttendanceUpdate(i){this.sendMessage("ATTENDANCE",i)}sendJournalUpdate(i){this.sendMessage("DOC_OPERATION",i)}sendChatMessage(i){let e=JSON.stringify({type:"CHAT_MESSAGE",room:this.rooms.chat,message:i});da&&console.log("[Websocket] - Sending off: ",e),this.connectedSocket?.send(e)}getMessages(i){return this.mailboxes[i].asObservable()}static \u0275fac=function(e){return new(e||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})};var Qi=class t{socketService=rp(gn);connectedTeachers=D([]);_teacherUpdates=new S;teacherUpdates=this._teacherUpdates.asObservable();async init(){await this.socketService.ensureConnected(),this.socketService.getMessages("presenceMessages").subscribe(i=>{this.handleMessage(i)})}spoofTeacherUpdate(){console.log("Spoofing teacher"),this._teacherUpdates.next({name:"Spoof",userId:-1,room:"Spoof",color:"#ffffff"})}handleMessage(i){switch(i.type){case"PRESENCE_STATE":this.handleStateMessage(i);break;case"PRESENCE_JOIN":this.handleJoinMessage(i);break;case"PRESENCE_LEAVE":this.handleLeaveMessage(i);break;default:console.error("WsPresenceChangeMessage with incorrect type in presence service")}}handleLeaveMessage(i){i.room||console.error("Incorrectly formatted leave message in presence service: ",i);let e={userId:i.userId,name:i.name,room:i.room,color:i.color},n=this.connectedTeachers().filter(r=>r.userId!=i.userId);this.connectedTeachers.set(n),console.log("Someone left, new status: ",this.connectedTeachers()),this._teacherUpdates.next(e)}handleJoinMessage(i){i.room||console.error("Incorrectly formatted join message in presence service: ",i);let e=this.connectedTeachers().findIndex(r=>r.userId==i.userId),n={userId:i.userId,name:i.name,room:i.room,color:i.color};if(e==-1){let r=this.connectedTeachers();r.push(n),this.connectedTeachers.set(r)}else{let r=this.connectedTeachers();r[e].room=i.room,this.connectedTeachers.set(r)}console.log("Someone joined, new status: ",this.connectedTeachers()),this._teacherUpdates.next(n)}handleStateMessage(i){if(i.users){let e=i.users.map(n=>C({},n));this.connectedTeachers.set(e)}else console.error("[Presence] - State message received without user array")}static \u0275fac=function(e){return new(e||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})};var R2=(t,i)=>i.id;function O2(t,i){if(t&1&&T(0,"main-presence-indicator",1),t&2){let e=i.$implicit;A("teacher",e)}}var Ls=class t{presence=c(Qi);filter=Sn.required();isGroup=Sn("");teachers=D([]);ngOnInit(){this.presence.teacherUpdates.subscribe(()=>{this.teachers.set(this.presence.connectedTeachers().filter(i=>{let e=i.room.split(":"),n=e[1],r=e[2];return(this.isGroup()!==""&&n==="group"||this.isGroup()===""&&n==="child")&&r===this.filter()}))}),this.teachers.set(this.presence.connectedTeachers().filter(i=>{let e=this.isGroup()==""?"child:"+this.filter():"group:"+this.filter();return i.room.includes(e)}))}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=E({type:t,selectors:[["main-presence-container"]],inputs:{filter:[1,"filter"],isGroup:[1,"isGroup"]},decls:3,vars:0,consts:[[1,"container"],[3,"teacher"]],template:function(e,n){e&1&&(m(0,"mat-card",0),De(1,O2,1,1,"main-presence-indicator",1,R2),h()),e&2&&(p(),xe(n.teachers()))},dependencies:[hh,Ct],styles:["[_nghost-%COMP%]{height:fit-content;width:fit-content}.container[_ngcontent-%COMP%]{display:flex;flex-direction:row;padding-left:1em;padding-right:1em}.container[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{margin-left:.1em;margin-right:.1em}"]})};var N2=()=>({name:"alla",id:0}),ZS=(t,i)=>i.id;function P2(t,i){if(t&1){let e=Ae();m(0,"mat-option",8),M("click",function(){let r=X(e).$implicit,o=x();return J(o.handleSelection(r))}),g(1),h()}if(t&2){let e=i.$implicit;A("value",e),p(),de(" ",e.name," ")}}function F2(t,i){t&1&&T(0,"mat-divider")}function L2(t,i){if(t&1){let e=Ae();m(0,"button",13),M("click",function(){let r=X(e).$implicit,o=x();return J(o.onSelectChild(r))}),m(1,"div",14),T(2,"main-presence-container",15),h(),m(3,"span",16),g(4),h(),m(5,"div",14),T(6,"attendance-box",17),h()(),j(7,F2,1,0,"mat-divider")}if(t&2){let e=i.$implicit,n=i.$index,r=i.$count;p(2),A("filter",dr(e.id)),p(2),de("",e.name," "),p(2),A("disabled",!0)("childSignal",e),p(),H(n!==r-1?7:-1)}}var Vs=class t{children=D([]);childSignal=Ne.required();searchQuery=D("");groupSignal=Ne.required();contentSignal=Ne.required();allGroups=Ne.required();stupidFix=D(0);searchedChildren=mt(()=>{this.stupidFix();let i=this.searchQuery();return this.children().filter(e=>e.name.toLowerCase().includes(i)).sort()});groupAttendance=mt(()=>this.searchedChildren().filter(i=>i.status==="CHECKED_IN").length);groupAbsent=mt(()=>this.searchedChildren().length-this.groupAttendance());attendanceService=c(eo);childService=c(fh);constructor(){this.attendanceService.getAttendanceChanges.subscribe(i=>{let e=this.children().find(n=>n.id===i.childId);e!=null&&(e.status=i.status,this.stupidFix.update(n=>n+1))}),nt(()=>{this.groupSignal().id!==0&&this.loadChildren()})}onSearchUpdated(i){this.searchQuery.set(i)}onSelectChild(i){this.childSignal.set(i),this.contentSignal.set("childView")}loadChildren(){this.childService.getChildrenByGroup(this.groupSignal().id).subscribe({next:i=>{this.children.set(i)}})}showAllChildren(){this.childService.getChildren().subscribe({next:i=>{this.children.set(i)}})}handleSelection(i){if(i.name==="alla"){this.contentSignal.set("homeView"),this.groupSignal.set({name:"",id:0}),this.showAllChildren();return}this.groupSignal.set(i),this.contentSignal.set("groupView")}handleWebsocketMessage(i){let e=this.children().find(r=>r.id===i.childId);if(!e){console.error("Attendance message received from other group. Child not found.");return}this.attendanceService.getSignal(e.id,Gi()).set(i.status),e.status=i.status,this.stupidFix.update(r=>r+1)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=E({type:t,selectors:[["main-child-list"]],inputs:{childSignal:[1,"childSignal"],groupSignal:[1,"groupSignal"],contentSignal:[1,"contentSignal"],allGroups:[1,"allGroups"]},outputs:{childSignal:"childSignalChange",groupSignal:"groupSignalChange",contentSignal:"contentSignalChange",allGroups:"allGroupsChange"},decls:31,vars:5,consts:[["searchQuery",""],[1,"child-list-container"],[1,"list-topper"],["subscriptSizing","dynamic",1,"search"],[1,"badge"],["matInput","","type","search",3,"input"],["subscriptSizing","dynamic",1,"pick-class"],[3,"value"],[3,"click","value"],[1,"list-class"],[1,"stats-card"],[1,"stats"],[1,"stats-text"],["mat-list-item","",3,"click"],["matListItemMeta","",1,"meta-container"],[3,"filter"],["matListItemTitle",""],[3,"disabled","childSignal"]],template:function(e,n){if(e&1){let r=Ae();m(0,"div",1)(1,"mat-card",2)(2,"mat-form-field",3)(3,"mat-label",4)(4,"mat-icon"),g(5,"search"),h(),g(6,"S\xF6k"),h(),m(7,"input",5,0),M("input",function(){X(r);let a=cn(8);return J(n.onSearchUpdated(a.value.toLowerCase()))}),h()(),m(9,"mat-form-field",6)(10,"mat-label",4)(11,"mat-icon"),g(12,"groups"),h(),g(13," V\xE4lj klass"),h(),m(14,"mat-select"),De(15,P2,2,2,"mat-option",7,ZS),m(17,"mat-option",8),M("click",function(){return n.handleSelection({name:"alla",id:0})}),g(18,"Alla elever"),h()()()(),m(19,"mat-action-list",9),De(20,L2,8,6,null,null,ZS),h(),T(22,"mat-divider"),m(23,"mat-card",10)(24,"mat-card-content",11)(25,"p",12),g(26),h(),m(27,"p",12),g(28),h(),m(29,"p",12),g(30),h()()()()}e&2&&(p(15),xe(n.allGroups()),p(2),A("value",Hl(4,N2)),p(3),xe(n.searchedChildren()),p(6),de("N\xE4rvarande: ",n.groupAttendance()),p(2),de("Icke n\xE4rvarande: ",n.groupAbsent()),p(2),de("Antal elever: ",n.children().length))},dependencies:[ao,uh,oo,an,wr,ca,qv,Wi,Ns,Ot,Rt,qn,Qn,Xt,Kt,Dt,Wn,Ct,un,io,no,Xn,Ls],styles:['[_nghost-%COMP%]{background-color:var(--mat-sys-primary-container);width:100%;border:1px solid var(--mat-sys-outline-variant);color:var(--mat-sys-on-primary-container);box-sizing:border-box;border-radius:5px;flex:1;display:flex;flex-direction:column;min-height:0;height:100%;overflow:hidden}.mat-mdc-action-list[_ngcontent-%COMP%]{padding:0;border-radius:5px;height:100%}.mdc-list-item[_ngcontent-%COMP%]{color:var(--mat-sys-on-primary-container);background-color:var(--mat-sys-surface-variant);box-shadow:var(--mat-sys-level1)}.child-list-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%}.list-class[_ngcontent-%COMP%]{background-color:var(--mat-sys-surface-dim);flex:1;overflow-y:auto}.badge[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem;font:var(--mat-sys-label-large);opacity:.75}.badge[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:1.1rem;width:1.1rem;height:1.1rem}[_nghost-%COMP%]     .child-list-container .pick-class .mdc-notched-outline__leading, [_nghost-%COMP%]     .child-list-container .pick-class .mdc-notched-outline__notch, [_nghost-%COMP%]     .child-list-container .pick-class .mdc-notched-outline__trailing{border-color:var(--mat-sys-inverse-primary)!important}[_nghost-%COMP%]     .child-list-container .pick-class .mat-mdc-text-field-wrapper{background-color:var(--mat-sys-inverse-primary)!important}[_nghost-%COMP%]     .child-list-container mat-form-field:not(.pick-class) .mdc-notched-outline__leading, [_nghost-%COMP%]     .child-list-container mat-form-field:not(.pick-class) .mdc-notched-outline__notch, [_nghost-%COMP%]     .child-list-container mat-form-field:not(.pick-class) .mdc-notched-outline__trailing{border-color:var(--mat-sys-inverse-primary)!important}[_nghost-%COMP%]     .child-list-container mat-form-field:not(.pick-class) .mat-mdc-text-field-wrapper{background-color:var(--mat-sys-inverse-primary)!important}.list-topper[_ngcontent-%COMP%]{display:flex;flex-direction:row;border-bottom-left-radius:0!important;border-bottom-right-radius:0!important}.stats[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;gap:1em;background:var(--mat-sys-inverse-primary);flex:1;padding:.5em}.stats[_ngcontent-%COMP%]:after{content:""}.stats[_ngcontent-%COMP%]:before{content:""}.stats[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-weight:500;padding:0;margin:.1em}.pick-class[_ngcontent-%COMP%]{flex:.5}.search[_ngcontent-%COMP%]{flex:1}.stats-text[_ngcontent-%COMP%]{margin:1em;font:var(--mat-sys-title-small);color:var(--mat-sys-on-secondary-container)}.cornerize[_ngcontent-%COMP%]{border-top-right-radius:0%!important;border-top-left-radius:0%!important}  mat-card>mat-form-field>div:nth-child(1){border-top-right-radius:0;border-top-left-radius:0}']})};var gh=class{getDiff(i,e,n){let r=i.length-e.length,o=this.surroundingMatch(i,e,n,r)?r>0?"DELETE":"INSERT":"REPLACEMENT",a={operation:o,idx:n,value:"",length:0};switch(o){case"DELETE":a.length=r;break;case"INSERT":a.idx=n+r,a.value=e.substring(n+r,n);break;case"REPLACEMENT":{let s=this.findFirstDiff(i,e),l=this.findLastDiff(i,e);switch(l){case"prevOutOfBounds":a.idx=0,a.value=e.substring(0,0-r),a.operation="INSERT";break;case"newOutOfBounds":a.idx=0,a.length=r,a.operation="DELETE";break;default:a.value=e.substring(s,l),a.length=r+a.value.length,a.idx=s;break}}}return a}surroundingMatch(i,e,n,r){switch(r<0){case!0:return i.substring(0,n+r)===e.substring(0,n+r)&&i.substring(n+r)===e.substring(n);case!1:return i.substring(0,n)===e.substring(0,n)&&i.substring(n+r)===e.substring(n)}}findFirstDiff(i,e){let n=0;for(;;)if(i.charAt(n)===e.charAt(n))n++;else return n}findLastDiff(i,e){let n=1;for(;;){if(n>i.length)return"prevOutOfBounds";if(n>e.length)return"newOutOfBounds";if(i.charAt(i.length-n)===e.charAt(e.length-n))n++;else return e.length-n+1}}};var _h=class{transformClient(i,e){switch(i.type){case"INSERT":return this.transformInsert(i,e);case"DELETE":return this.transformDelete(i,e)}}transformInsert(i,e){let n=i;switch(e.type){case"INSERT":e.position<=i.position&&(n.position+=e.text.length);break;case"DELETE":e.position<i.position&&(n.position=Math.max(e.position,n.position-=e.length));break}return n}transformDelete(i,e){let n=i;switch(e.type){case"INSERT":e.position<=n.position?n.position+=e.text.length:e.position<n.position+n.length&&(n.length+=e.text.length);break;case"DELETE":let r=e.position+e.length;if(r<=n.position)n.position-=e.length;else if(!(e.position>=n.position+n.length)){let o=Math.max(n.position,e.position),a=Math.min(n.position+n.length,r);n.length=Math.max(0,n.length-(a-o)),n.position=Math.min(n.position,e.position)}break}return n}};var Bs=class t{baseUrl=`${st.apiUrl}/api/journal`;http=c(yt);getJournal(i,e,n){let r=new Lt;if(n==="childView")r=r.set("childId",i);else if(n==="groupView")r=r.set("groupId",e);else return console.error(`Attempted to fetch journal with unknown view: ${n}`),vo(()=>new Error("Invalid view type provided to JournalService"));return this.http.get(this.baseUrl,{params:r})}getJournalByDate(i,e){let n=new Lt;return n=n.set("childId",i),n=n.set("date",e),this.http.get(this.baseUrl,{params:n})}static \u0275fac=function(e){return new(e||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})};var V2=["hiddenContainer"],B2=["hiddenDivs"],j2=["canvas"],H2=(t,i)=>i[1].usr.name;function U2(t,i){if(t&1&&(Ce(0,"div",5,2),g(2),Ce(3,"span",7,3),g(5),Me()()),t&2){let e=i.$implicit,n=x();Tt("id",Hn("caret-",e[1].usr.userId)),p(2),de(" ",e[1].preSpan()," "),p(),di(Hn("background-color:",e[1].usr.color)),Tt("scrollTop",n.journalScrollTop()),p(2),de(" ",e[1].postSpan()," ")}}var so=!1,vh=class t{socketService=c(gn);presenceService=c(Qi);hiddenContainer=nn.required("hiddenContainer");hidden=jD("hiddenDivs");canvasElement=nn.required("canvas");journalScrollTop=Sn.required();presentTeachers=D(new Map);em=12;isGroup=Sn("");filter=Sn.required();constructor(){nt(()=>{this.journalScrollTop(),this.hiddenContainer()&&(this.hiddenContainer().nativeElement.scrollTop=this.journalScrollTop())}),nt(()=>{this.presenceService.connectedTeachers(),this.initTeachers()})}ngOnInit(){this.socketService.getMessages("journalMessages").subscribe(i=>{this.handleIncomingChange(i)}),this.socketService.getMessages("presenceMessages").subscribe(i=>{let e=i;e.type=="PRESENCE_JOIN"||e.type=="PRESENCE_STATE"?this.initTeachers():i.type=="PRESENCE_LEAVE"&&this.presentTeachers.update(n=>(n.delete(e.userId),n))}),this.initTeachers(),setInterval(()=>{this.refitCarets()},1e3)}initTeachers(){so&&console.log("InitTeachers called");let i=this.presenceService.connectedTeachers();so&&console.log(this.presenceService.connectedTeachers());let e=this.presentTeachers();i.forEach(n=>{if(e.get(n.userId)!==void 0){this.isInRoom(n)||e.delete(n.userId);return}e.set(n.userId,this.createCaretContext(n))}),this.presentTeachers.set(e),so&&console.log(this.presenceService.connectedTeachers()),so&&console.log(this.presentTeachers())}isInRoom(i){let e=i.room.split(":"),n=e[1],r=parseInt(e[2]),o=this.isGroup()!==""&&n==="group"||this.isGroup()===""&&n==="child",a=this.filter();return o&&r==a}createCaretContext(i){return{usr:i,rect:{x:0,y:0,width:0,height:0},preSpan:D(""),postSpan:D("")}}handleIncomingChange(i){so&&console.log(i.userId)}drawCarets(){let i=this.canvasElement().nativeElement;i.width=i.getBoundingClientRect().width,i.height=i.getBoundingClientRect().height;let e=i.getContext("2d");if(e===null){console.error("Draw: Could not get canvasElement context");return}e.reset(),so&&console.log("From draw",this.presentTeachers());let n=.8,r=5,o=5;e.font=this.em*n+"px Roboto";for(let a of this.presentTeachers()){let s=a[1],l=s.usr.name,d=e.measureText(l);e.fillStyle=s.usr.color;let u=s.rect.x,f,_;s.rect.y-this.em<0?(f=s.rect.y+this.em,_=s.rect.y+this.em*1.8):(f=s.rect.y-this.em,_=s.rect.y-o),s.rect.x-r<0&&(u=s.rect.x+(s.rect.x-r*-1)),s.rect.x+d.width+r*2>e.canvas.width&&(u=e.canvas.width-d.width-r*2),e.fillRect(u-r,f,d.width+r*2,this.em),e.fillStyle="white",e.fillText(l,u,_)}}updateCaret(i,e,n){let r=e.substring(0,n),o=e.substring(n),a=this.presentTeachers().get(i);if(a===void 0){console.error("Couldn't find caret context for that user id ("+i+"), Local: ["+this.presentTeachers()+"] | Global:"),so&&console.log(this.presenceService.connectedTeachers());return}a.preSpan.set(r),a.postSpan.set(o),this.refitCaret(i),this.drawCarets()}updateCanvasEm(i){this.em=parseFloat(getComputedStyle(i).fontSize)}updateCarets(i,e){for(let n of this.presentTeachers())this.updateCaret(n[0],i,e.selectionStart);this.drawCarets()}refitCaret(i){let e=this.presentTeachers().get(i);if(e===void 0){console.error("Refit: Couldn't find UserCaretContext for that caret id");return}let n=this.hidden().find(o=>parseInt(o.nativeElement.id.split("-")[1])==i);if(!n){console.error("Refit: Couldn't find nativeElement for that caret id");return}let r=n.nativeElement.firstElementChild;e.rect={x:r.offsetLeft,y:r.offsetTop-this.journalScrollTop(),width:3,height:this.em},so&&console.log("From refit: ",r,e.rect),this.presentTeachers.update(o=>(o.set(i,e),o))}refitCarets(){for(let i of this.presentTeachers())this.refitCaret(i[0]);this.drawCarets()}clearAndReset(){this.canvasElement().nativeElement.getContext("2d").reset(),this.presentTeachers.set(new Map),this.drawCarets()}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=E({type:t,selectors:[["main-caret-tracker"]],viewQuery:function(e,n){e&1&&Bn(n.hiddenContainer,V2,5)(n.hidden,B2,5)(n.canvasElement,j2,5),e&2&&jn(3)},inputs:{journalScrollTop:[1,"journalScrollTop"],isGroup:[1,"isGroup"],filter:[1,"filter"]},decls:6,vars:0,consts:[["hiddenContainer",""],["canvas",""],["hiddenDivs",""],["hiddenSpan",""],["id","hiddenContainer"],[1,"ghost-text-area",3,"id"],["id","canvas"],[1,"caret-span",3,"scrollTop"]],template:function(e,n){e&1&&(Ce(0,"div",4,0),De(2,U2,6,8,"div",5,H2),Me(),Qt(4,"canvas",6,1)),e&2&&(p(2),xe(n.presentTeachers()))},styles:["[_nghost-%COMP%]{height:100%;width:100%;display:flex;position:absolute;pointer-events:none}.ghost-text-area[_ngcontent-%COMP%]{position:absolute;width:100%;height:100%;white-space:pre-line;overflow-wrap:anywhere;overflow-y:scroll;margin-bottom:1em;visibility:hidden}#hidden[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{background-color:red}#hiddenContainer[_ngcontent-%COMP%]{position:absolute;width:100%;height:100%}span.caret-span[_ngcontent-%COMP%]{background-color:red!important}.caret[_ngcontent-%COMP%]{height:1em;position:fixed;width:.2em;background-color:#00f}#canvas[_ngcontent-%COMP%]{width:100%;height:100%;position:absolute;pointer-events:none}"]})};var z2=["journalContent"],$2=["tracker"],bh=class t{journalSocket=c(gn);differ=new gh;operationalTransformer=new _h;journalService=c(Bs);textArea=nn.required("journalContent");caretTracker=nn.required("tracker");childSignal=Ne.required();contentSignal=Ne.required();groupSignal=Ne.required();journalScrollTop=D(0);async ngOnInit(){await this.journalSocket.ensureConnected(),this.journalSocket.getMessages("journalMessages").subscribe(i=>{let e=i,n=e.operation;if(this.isMyOwnAck(e))this.inFlight.shift(),this.caretTracker().updateCaret(e.userId,this.text(),n.position);else{for(let r of this.inFlight)n=this.operationalTransformer.transformClient(n,r);this.applyToLocalContent(n),this.caretTracker().updateCaret(e.userId,this.text(),n.position)}this.serverRevision=e.serverRevision}),this.loadJournal()}ngOnChanges(){let i=this.getRoom();this.journalSocket.setJournalRoom(i),this.loadJournal()}ngAfterViewInit(){this.caretTracker().updateCanvasEm(this.textArea().nativeElement)}text=D("");prevText="";serverRevision=0;sequence=0;inFlight=[];getRoom(){return this.contentSignal()==="childView"?"journal:child:"+this.childSignal().id+":"+Gi():"journal:group:"+this.groupSignal().id+":"+Gi()}isMyOwnAck(i){return i.userId.toString()===sessionStorage.getItem("UserId")&&this.inFlight.length>0}loadJournal(){this.journalService.getJournal(this.childSignal().id,this.groupSignal().id,this.contentSignal()).subscribe({next:i=>{this.text.set(i.content),this.serverRevision=i.serverRevision,this.sequence=0,this.inFlight=[]}})}applyToLocalContent(i){let e=i.position;switch(i.type){case"INSERT":this.textArea().nativeElement.setRangeText(i.text,e,e,"preserve");break;case"DELETE":this.textArea().nativeElement.setRangeText("",e,e+i.length,"preserve");break}this.text.set(this.textArea().nativeElement.value),this.prevText=this.text()}ngOnDestroy(){this.journalSocket.leaveJournalRoom()}onInput(i){this.sequence++;let e=i.target,n=e.value;this.prevText=this.text();let r=e.selectionStart,o=this.differ.getDiff(this.prevText,n,r);this.text.set(n);let a;switch(o.operation){case"DELETE":a={type:"DELETE",position:o.idx,length:o.length};break;case"INSERT":a={type:"INSERT",position:o.idx,text:o.value};break;case"REPLACEMENT":a={type:"DELETE",position:o.idx,length:o.length},this.sendOperation(a),this.sequence++,a={type:"INSERT",position:o.idx,text:o.value};break}this.sendOperation(a),this.caretTracker().updateCaret(parseInt(sessionStorage.getItem("UserId")),this.text(),this.textArea().nativeElement.selectionStart)}sendOperation(i){let e={clientRevision:this.serverRevision,operation:i,sequence:this.sequence};this.inFlight.push(i),this.journalSocket.sendJournalUpdate(e)}onScroll(){this.journalScrollTop.set(this.textArea().nativeElement.scrollTop),console.log(this.journalScrollTop()),this.caretTracker().refitCarets()}onResize(){console.log("Resize"),this.caretTracker().updateCanvasEm(this.textArea().nativeElement),this.caretTracker().refitCarets()}constructor(){nt(()=>{this.text(),this.onScroll()})}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=E({type:t,selectors:[["main-live-journal"]],viewQuery:function(e,n){e&1&&Bn(n.textArea,z2,5)(n.caretTracker,$2,5),e&2&&jn(2)},inputs:{childSignal:[1,"childSignal"],contentSignal:[1,"contentSignal"],groupSignal:[1,"groupSignal"]},outputs:{childSignal:"childSignalChange",contentSignal:"contentSignalChange",groupSignal:"groupSignalChange"},features:[Be],decls:5,vars:4,consts:[["tracker",""],["journalContent",""],[3,"filter","isGroup","journalScrollTop"],["matInput","",3,"scroll","resize","input","ngModel"]],template:function(e,n){e&1&&(m(0,"mat-form-field"),T(1,"main-caret-tracker",2,0),m(3,"textarea",3,1),M("scroll",function(){return n.onScroll()})("resize",function(){return n.onResize()},u_)("input",function(o){return n.onInput(o)}),h()()),e&2&&(p(),A("filter",n.contentSignal()==="groupView"?n.groupSignal().id:n.childSignal().id)("isGroup",n.contentSignal()==="groupView"?"yes":"")("journalScrollTop",n.journalScrollTop()),p(2),A("ngModel",n.text()))},dependencies:[Rt,Xt,Kr,fn,Yn,vr,vh],styles:["mat-tab-group[_ngcontent-%COMP%]{height:100%}mat-tab-group[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{height:100%}mat-mdc-tab-body-wrapper[_ngcontent-%COMP%]{height:100%}  .mat-mdc-form-field-flex{height:100%}  .mat-mdc-form-field-infix{height:100%}mat-form-field[_ngcontent-%COMP%]{width:100%;box-sizing:border-box;height:100%}textarea[_ngcontent-%COMP%]{width:100%;height:100%!important;min-height:20vh;padding:0;box-sizing:content-box;resize:none;overflow-y:scroll;overscroll-behavior:none}"]})};var yh=class t{url=`${st.apiUrl}/api/group`;http=c(yt);getGroups(){return this.http.get(this.url)}static \u0275fac=function(e){return new(e||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})};var lo=class t{url=`${st.apiUrl}/api/user/teacher`;teachersUrl=`${st.apiUrl}/api/user/teachers`;colorUrl=`${st.apiUrl}/api/user/color`;http=c(yt);getUser(i){let e=new Lt().set("teacherId",i);return this.http.get(this.url,{params:e})}getUsers(){return this.http.get(this.teachersUrl)}updateColor(i){return this.http.patch(this.colorUrl,{color:i})}static \u0275fac=function(e){return new(e||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})};function W2(t,i){if(t&1){let e=Ae();m(0,"div",1)(1,"button",2),M("click",function(){X(e);let r=x();return J(r.action())}),g(2),h()()}if(t&2){let e=x();p(2),de(" ",e.data.action," ")}}var G2=["label"];function q2(t,i){}var Y2=Math.pow(2,31)-1,Zc=class{_overlayRef;instance;containerInstance;_afterDismissed=new S;_afterOpened=new S;_onAction=new S;_durationTimeoutId;_dismissedByAction=!1;constructor(i,e){this._overlayRef=e,this.containerInstance=i,i._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(i){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(i,Y2))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}},KS=new y("MatSnackBarData"),js=class{politeness="polite";announcementMessage="";viewContainerRef;duration=0;panelClass;direction;data=null;horizontalPosition="center";verticalPosition="bottom"},Q2=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=N({type:t,selectors:[["","matSnackBarLabel",""]],hostAttrs:[1,"mat-mdc-snack-bar-label","mdc-snackbar__label"]})}return t})(),Z2=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=N({type:t,selectors:[["","matSnackBarActions",""]],hostAttrs:[1,"mat-mdc-snack-bar-actions","mdc-snackbar__actions"]})}return t})(),K2=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=N({type:t,selectors:[["","matSnackBarAction",""]],hostAttrs:[1,"mat-mdc-snack-bar-action","mdc-snackbar__action"]})}return t})(),X2=(()=>{class t{snackBarRef=c(Zc);data=c(KS);constructor(){}action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=E({type:t,selectors:[["simple-snack-bar"]],hostAttrs:[1,"mat-mdc-simple-snack-bar"],exportAs:["matSnackBar"],decls:3,vars:2,consts:[["matSnackBarLabel",""],["matSnackBarActions",""],["matButton","","matSnackBarAction","",3,"click"]],template:function(n,r){n&1&&(m(0,"div",0),g(1),h(),j(2,W2,3,1,"div",1)),n&2&&(p(),de(" ",r.data.message,`
`),p(),H(r.hasAction?2:-1))},dependencies:[Wt,Q2,Z2,K2],styles:[`.mat-mdc-simple-snack-bar {
  display: flex;
}
.mat-mdc-simple-snack-bar .mat-mdc-snack-bar-label {
  max-height: 50vh;
  overflow: auto;
}
`],encapsulation:2,changeDetection:0})}return t})(),$b="_mat-snack-bar-enter",Wb="_mat-snack-bar-exit",J2=(()=>{class t extends Xr{_ngZone=c(V);_elementRef=c(B);_changeDetectorRef=c(Ie);_platform=c(me);_animationsDisabled=je();snackBarConfig=c(js);_document=c(Y);_trackedModals=new Set;_enterFallback;_exitFallback;_injector=c(G);_announceDelay=150;_announceTimeoutId;_destroyed=!1;_portalOutlet;_onAnnounce=new S;_onExit=new S;_onEnter=new S;_animationState="void";_live;_label;_role;_liveElementId=c(Ye).getId("mat-snack-bar-container-live-");constructor(){super();let e=this.snackBarConfig;e.politeness==="assertive"&&!e.announcementMessage?this._live="assertive":e.politeness==="off"?this._live="off":this._live="polite",this._platform.FIREFOX&&(this._live==="polite"&&(this._role="status"),this._live==="assertive"&&(this._role="alert"))}attachComponentPortal(e){this._assertNotAttached();let n=this._portalOutlet.attachComponentPortal(e);return this._afterPortalAttached(),n}attachTemplatePortal(e){this._assertNotAttached();let n=this._portalOutlet.attachTemplatePortal(e);return this._afterPortalAttached(),n}attachDomPortal=e=>{this._assertNotAttached();let n=this._portalOutlet.attachDomPortal(e);return this._afterPortalAttached(),n};onAnimationEnd(e){e===Wb?this._completeExit():e===$b&&(clearTimeout(this._enterFallback),this._ngZone.run(()=>{this._onEnter.next(),this._onEnter.complete()}))}enter(){this._destroyed||(this._animationState="visible",this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce(),this._animationsDisabled?Ge(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd($b)))},{injector:this._injector}):(clearTimeout(this._enterFallback),this._enterFallback=setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-snack-bar-fallback-visible"),this.onAnimationEnd($b)},200)))}exit(){return this._destroyed?q(void 0):(this._ngZone.run(()=>{this._animationState="hidden",this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.setAttribute("mat-exit",""),clearTimeout(this._announceTimeoutId),this._animationsDisabled?Ge(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(Wb)))},{injector:this._injector}):(clearTimeout(this._exitFallback),this._exitFallback=setTimeout(()=>this.onAnimationEnd(Wb),200))}),this._onExit)}ngOnDestroy(){this._destroyed=!0,this._clearFromModals(),this._completeExit()}_completeExit(){clearTimeout(this._exitFallback),queueMicrotask(()=>{this._onExit.next(),this._onExit.complete()})}_afterPortalAttached(){let e=this._elementRef.nativeElement,n=this.snackBarConfig.panelClass;n&&(Array.isArray(n)?n.forEach(a=>e.classList.add(a)):e.classList.add(n)),this._exposeToModals();let r=this._label.nativeElement,o="mdc-snackbar__label";r.classList.toggle(o,!r.querySelector(`.${o}`))}_exposeToModals(){let e=this._liveElementId,n=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let r=0;r<n.length;r++){let o=n[r],a=o.getAttribute("aria-owns");this._trackedModals.add(o),a?a.indexOf(e)===-1&&o.setAttribute("aria-owns",a+" "+e):o.setAttribute("aria-owns",e)}}_clearFromModals(){this._trackedModals.forEach(e=>{let n=e.getAttribute("aria-owns");if(n){let r=n.replace(this._liveElementId,"").trim();r.length>0?e.setAttribute("aria-owns",r):e.removeAttribute("aria-owns")}}),this._trackedModals.clear()}_assertNotAttached(){this._portalOutlet.hasAttached()}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{if(this._destroyed)return;let e=this._elementRef.nativeElement,n=e.querySelector("[aria-hidden]"),r=e.querySelector("[aria-live]");if(n&&r){let o=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&n.contains(document.activeElement)&&(o=document.activeElement),n.removeAttribute("aria-hidden"),r.appendChild(n),o?.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=E({type:t,selectors:[["mat-snack-bar-container"]],viewQuery:function(n,r){if(n&1&&we(hn,7)(G2,7),n&2){let o;R(o=O())&&(r._portalOutlet=o.first),R(o=O())&&(r._label=o.first)}},hostAttrs:[1,"mdc-snackbar","mat-mdc-snack-bar-container"],hostVars:6,hostBindings:function(n,r){n&1&&M("animationend",function(a){return r.onAnimationEnd(a.animationName)})("animationcancel",function(a){return r.onAnimationEnd(a.animationName)}),n&2&&P("mat-snack-bar-container-enter",r._animationState==="visible")("mat-snack-bar-container-exit",r._animationState==="hidden")("mat-snack-bar-container-animations-enabled",!r._animationsDisabled)},features:[_e],decls:6,vars:3,consts:[["label",""],[1,"mdc-snackbar__surface","mat-mdc-snackbar-surface"],[1,"mat-mdc-snack-bar-label"],["aria-hidden","true"],["cdkPortalOutlet",""]],template:function(n,r){n&1&&(m(0,"div",1)(1,"div",2,0)(3,"div",3),ut(4,q2,0,0,"ng-template",4),h(),T(5,"div"),h()()),n&2&&(p(5),K("aria-live",r._live)("role",r._role)("id",r._liveElementId))},dependencies:[hn],styles:[`@keyframes _mat-snack-bar-enter {
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
`],encapsulation:2})}return t})(),eB=new y("mat-snack-bar-default-options",{providedIn:"root",factory:()=>new js}),XS=(()=>{class t{_live=c(xc);_injector=c(G);_breakpointObserver=c(wc);_parentSnackBar=c(t,{optional:!0,skipSelf:!0});_defaultConfig=c(eB);_animationsDisabled=je();_snackBarRefAtThisLevel=null;simpleSnackBarComponent=X2;snackBarContainerComponent=J2;handsetCssClass="mat-mdc-snack-bar-handset";get _openedSnackBarRef(){let e=this._parentSnackBar;return e?e._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(e){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=e:this._snackBarRefAtThisLevel=e}constructor(){}openFromComponent(e,n){return this._attach(e,n)}openFromTemplate(e,n){return this._attach(e,n)}open(e,n="",r){let o=C(C({},this._defaultConfig),r);return o.data={message:e,action:n},o.announcementMessage===e&&(o.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,o)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(e,n){let r=n&&n.viewContainerRef&&n.viewContainerRef.injector,o=G.create({parent:r||this._injector,providers:[{provide:js,useValue:n}]}),a=new An(this.snackBarContainerComponent,n.viewContainerRef,o),s=e.attach(a);return s.instance.snackBarConfig=n,s.instance}_attach(e,n){let r=C(C(C({},new js),this._defaultConfig),n),o=this._createOverlay(r),a=this._attachSnackBarContainer(o,r),s=new Zc(a,o);if(e instanceof _t){let l=new Rn(e,null,{$implicit:r.data,snackBarRef:s});s.instance=a.attachTemplatePortal(l)}else{let l=this._createInjector(r,s),d=new An(e,void 0,l),u=a.attachComponentPortal(d);s.instance=u.instance}return this._breakpointObserver.observe(JE.HandsetPortrait).pipe(ye(o.detachments())).subscribe(l=>{o.overlayElement.classList.toggle(this.handsetCssClass,l.matches)}),r.announcementMessage&&a._onAnnounce.subscribe(()=>{this._live.announce(r.announcementMessage,r.politeness)}),this._animateSnackBar(s,r),this._openedSnackBarRef=s,this._openedSnackBarRef}_animateSnackBar(e,n){e.afterDismissed().subscribe(()=>{this._openedSnackBarRef==e&&(this._openedSnackBarRef=null),n.announcementMessage&&this._live.clear()}),n.duration&&n.duration>0&&e.afterOpened().subscribe(()=>e._dismissAfter(n.duration)),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{e.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):e.containerInstance.enter()}_createOverlay(e){let n=new qi;n.direction=e.direction;let r=Cr(this._injector),o=e.direction==="rtl",a=e.horizontalPosition==="left"||e.horizontalPosition==="start"&&!o||e.horizontalPosition==="end"&&o,s=!a&&e.horizontalPosition!=="center";return a?r.left("0"):s?r.right("0"):r.centerHorizontally(),e.verticalPosition==="top"?r.top("0"):r.bottom("0"),n.positionStrategy=r,n.disableAnimations=this._animationsDisabled,Yi(this._injector,n)}_createInjector(e,n){let r=e&&e.viewContainerRef&&e.viewContainerRef.injector;return G.create({parent:r||this._injector,providers:[{provide:Zc,useValue:n},{provide:KS,useValue:e.data}]})}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Ch=class t{_snackBar=c(XS);userService=c(lo);teacherColor=Ne("#ffffff");userDataObservable=this.userService.getUser(Number(sessionStorage.getItem("UserId")));currentUser=this.userDataObservable.pipe();ngOnInit(){this.userDataObservable.subscribe(i=>{this.teacherColor.set(i.color)})}updateColor(){console.log("From updatecolor",this.teacherColor()),this.userService.updateColor(this.teacherColor()).subscribe(()=>{this._snackBar.open("Din f\xE4rg uppdateras n\xE4sta g\xE5ng du loggar in.","St\xE4ng",{duration:2500,verticalPosition:"top"})})}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=E({type:t,selectors:[["account-page"]],inputs:{teacherColor:[1,"teacherColor"]},outputs:{teacherColor:"teacherColorChange"},decls:33,vars:10,consts:[["appearance","outlined"],[1,"card-header-segment","card-header-left"],["mat-card-avatar","",1,"icon-display"],[1,"hamburger"],[1,"card-header-segment","card-header-right"],["type","color","matInput","","matNativeControl","","name","name",3,"input","ngModelChange","ngModel"]],template:function(e,n){if(e&1&&(m(0,"mat-card",0)(1,"mat-card-header")(2,"div",1)(3,"div",2)(4,"mat-icon"),g(5,"person"),h()(),m(6,"div",3)(7,"mat-card-title"),g(8),Ul(9,"async"),h(),m(10,"mat-card-subtitle"),g(11),Ul(12,"async"),h()()(),m(13,"div",4)(14,"h2"),g(15,"Din f\xE4rg"),h(),m(16,"input",5),M("input",function(){return n.updateColor()}),Xe("ngModelChange",function(o){return ke(n.teacherColor,o)||(n.teacherColor=o),o}),h()()(),m(17,"mat-card-content")(18,"p"),g(19),Ul(20,"async"),h(),m(21,"p"),g(22,"Exempeltext"),h(),m(23,"p"),g(24,"Exempeltext"),h(),m(25,"p"),g(26,"Exempeltext"),h(),m(27,"p"),g(28,"Exempeltext"),h(),m(29,"p"),g(30,"Exempeltext"),h(),m(31,"p"),g(32,"Exempeltext"),h()()()),e&2){let r,o,a;p(8),oe((r=zl(9,4,n.currentUser))==null?null:r.name),p(3),oe((o=zl(12,6,n.currentUser))==null?null:o.role),p(5),Ke("ngModel",n.teacherColor),p(3),de("Mejladress: ",(a=zl(20,8,n.currentUser))==null?null:a.email)}},dependencies:[Wn,Ct,ME,un,mn,EE,ds,Kt,Dt,Ot,Qn,Xt,Kr,fn,Yn,vr,Y_],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;overflow:hidden;box-sizing:border-box}.icon-display[_ngcontent-%COMP%]{transform:scale(2);display:flex;align-items:center;justify-content:center;overflow:hidden}p[_ngcontent-%COMP%]{font:var(--mat-sys-body-large)}mat-card[_ngcontent-%COMP%]{margin-top:7em;box-sizing:border-box;flex:1;box-shadow:var(--mat-sys-level2);background:var(--mat-sys-surface-variant)}mat-card-header[_ngcontent-%COMP%]{width:100%;display:flex}.card-header-left[_ngcontent-%COMP%]{flex:2;display:flex;flex-direction:row;justify-content:flex-start;align-items:center;gap:2em}.hamburger[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:flex-start}.card-header-right[_ngcontent-%COMP%]{flex:1;display:flex;align-items:center;justify-content:center;flex-direction:column;font-family:var(--mat-sys-label-large)}"]})};var Gb=new y("MAT_DATE_LOCALE",{providedIn:"root",factory:()=>c(qa)}),Hs="Method not implemented",_n=class{locale;_localeChanges=new S;localeChanges=this._localeChanges;setTime(i,e,n,r){throw new Error(Hs)}getHours(i){throw new Error(Hs)}getMinutes(i){throw new Error(Hs)}getSeconds(i){throw new Error(Hs)}parseTime(i,e){throw new Error(Hs)}addSeconds(i,e){throw new Error(Hs)}getValidDateOrNull(i){return this.isDateInstance(i)&&this.isValid(i)?i:null}deserialize(i){return i==null||this.isDateInstance(i)&&this.isValid(i)?i:this.invalid()}setLocale(i){this.locale=i,this._localeChanges.next()}compareDate(i,e){return this.getYear(i)-this.getYear(e)||this.getMonth(i)-this.getMonth(e)||this.getDate(i)-this.getDate(e)}compareTime(i,e){return this.getHours(i)-this.getHours(e)||this.getMinutes(i)-this.getMinutes(e)||this.getSeconds(i)-this.getSeconds(e)}sameDate(i,e){if(i&&e){let n=this.isValid(i),r=this.isValid(e);return n&&r?!this.compareDate(i,e):n==r}return i==e}sameTime(i,e){if(i&&e){let n=this.isValid(i),r=this.isValid(e);return n&&r?!this.compareTime(i,e):n==r}return i==e}clampDate(i,e,n){return e&&this.compareDate(i,e)<0?e:n&&this.compareDate(i,n)>0?n:i}},ua=new y("mat-date-formats");var tB=["mat-calendar-body",""];function nB(t,i){return this._trackRow(i)}var rI=(t,i)=>i.id;function iB(t,i){if(t&1&&(Ce(0,"tr",0)(1,"td",3),g(2),Me()()),t&2){let e=x();p(),ci("padding-top",e._cellPadding)("padding-bottom",e._cellPadding),K("colspan",e.numCols),p(),de(" ",e.label," ")}}function rB(t,i){if(t&1&&(Ce(0,"td",3),g(1),Me()),t&2){let e=x(2);ci("padding-top",e._cellPadding)("padding-bottom",e._cellPadding),K("colspan",e._firstRowOffset),p(),de(" ",e._firstRowOffset>=e.labelMinRequiredCells?e.label:""," ")}}function oB(t,i){if(t&1){let e=Ae();Ce(0,"td",6)(1,"button",7),Vn("click",function(r){let o=X(e).$implicit,a=x(2);return J(a._cellClicked(o,r))})("focus",function(r){let o=X(e).$implicit,a=x(2);return J(a._emitActiveDateChange(o,r))}),Ce(2,"span",8),g(3),Me(),Qt(4,"span",9),Me()()}if(t&2){let e=i.$implicit,n=i.$index,r=x().$index,o=x();ci("width",o._cellWidth)("padding-top",o._cellPadding)("padding-bottom",o._cellPadding),K("data-mat-row",r)("data-mat-col",n),p(),kt(e.cssClasses),P("mat-calendar-body-disabled",!e.enabled)("mat-calendar-body-active",o._isActiveCell(r,n))("mat-calendar-body-range-start",o._isRangeStart(e.compareValue))("mat-calendar-body-range-end",o._isRangeEnd(e.compareValue))("mat-calendar-body-in-range",o._isInRange(e.compareValue))("mat-calendar-body-comparison-bridge-start",o._isComparisonBridgeStart(e.compareValue,r,n))("mat-calendar-body-comparison-bridge-end",o._isComparisonBridgeEnd(e.compareValue,r,n))("mat-calendar-body-comparison-start",o._isComparisonStart(e.compareValue))("mat-calendar-body-comparison-end",o._isComparisonEnd(e.compareValue))("mat-calendar-body-in-comparison-range",o._isInComparisonRange(e.compareValue))("mat-calendar-body-preview-start",o._isPreviewStart(e.compareValue))("mat-calendar-body-preview-end",o._isPreviewEnd(e.compareValue))("mat-calendar-body-in-preview",o._isInPreview(e.compareValue)),Tt("tabIndex",o._isActiveCell(r,n)?0:-1),K("aria-label",e.ariaLabel)("aria-disabled",!e.enabled||null)("aria-pressed",o._isSelected(e.compareValue))("aria-current",o.todayValue===e.compareValue?"date":null)("aria-describedby",o._getDescribedby(e.compareValue)),p(),P("mat-calendar-body-selected",o._isSelected(e.compareValue))("mat-calendar-body-comparison-identical",o._isComparisonIdentical(e.compareValue))("mat-calendar-body-today",o.todayValue===e.compareValue),p(),de(" ",e.displayValue," ")}}function aB(t,i){if(t&1&&(Ce(0,"tr",1),j(1,rB,2,6,"td",4),De(2,oB,5,49,"td",5,rI),Me()),t&2){let e=i.$implicit,n=i.$index,r=x();p(),H(n===0&&r._firstRowOffset?1:-1),p(),xe(e)}}function sB(t,i){if(t&1&&(m(0,"th",2)(1,"span",6),g(2),h(),m(3,"span",3),g(4),h()()),t&2){let e=i.$implicit;p(2),oe(e.long),p(2),oe(e.narrow)}}var lB=["*"];function cB(t,i){}function dB(t,i){if(t&1){let e=Ae();m(0,"mat-month-view",4),Xe("activeDateChange",function(r){X(e);let o=x();return ke(o.activeDate,r)||(o.activeDate=r),J(r)}),M("_userSelection",function(r){X(e);let o=x();return J(o._dateSelected(r))})("dragStarted",function(r){X(e);let o=x();return J(o._dragStarted(r))})("dragEnded",function(r){X(e);let o=x();return J(o._dragEnded(r))}),h()}if(t&2){let e=x();Ke("activeDate",e.activeDate),A("selected",e.selected)("dateFilter",e.dateFilter)("maxDate",e.maxDate)("minDate",e.minDate)("dateClass",e.dateClass)("comparisonStart",e.comparisonStart)("comparisonEnd",e.comparisonEnd)("startDateAccessibleName",e.startDateAccessibleName)("endDateAccessibleName",e.endDateAccessibleName)("activeDrag",e._activeDrag)}}function uB(t,i){if(t&1){let e=Ae();m(0,"mat-year-view",5),Xe("activeDateChange",function(r){X(e);let o=x();return ke(o.activeDate,r)||(o.activeDate=r),J(r)}),M("monthSelected",function(r){X(e);let o=x();return J(o._monthSelectedInYearView(r))})("selectedChange",function(r){X(e);let o=x();return J(o._goToDateInView(r,"month"))}),h()}if(t&2){let e=x();Ke("activeDate",e.activeDate),A("selected",e.selected)("dateFilter",e.dateFilter)("maxDate",e.maxDate)("minDate",e.minDate)("dateClass",e.dateClass)}}function mB(t,i){if(t&1){let e=Ae();m(0,"mat-multi-year-view",6),Xe("activeDateChange",function(r){X(e);let o=x();return ke(o.activeDate,r)||(o.activeDate=r),J(r)}),M("yearSelected",function(r){X(e);let o=x();return J(o._yearSelectedInMultiYearView(r))})("selectedChange",function(r){X(e);let o=x();return J(o._goToDateInView(r,"year"))}),h()}if(t&2){let e=x();Ke("activeDate",e.activeDate),A("selected",e.selected)("dateFilter",e.dateFilter)("maxDate",e.maxDate)("minDate",e.minDate)("dateClass",e.dateClass)}}function fB(t,i){}var hB=["button"],pB=[[["","matDatepickerToggleIcon",""]]],gB=["[matDatepickerToggleIcon]"];function _B(t,i){t&1&&(Ri(),m(0,"svg",2),T(1,"path",3),h())}var zs=(()=>{class t{changes=new S;calendarLabel="Calendar";openCalendarLabel="Open calendar";closeCalendarLabel="Close calendar";prevMonthLabel="Previous month";nextMonthLabel="Next month";prevYearLabel="Previous year";nextYearLabel="Next year";prevMultiYearLabel="Previous 24 years";nextMultiYearLabel="Next 24 years";switchToMonthViewLabel="Choose date";switchToMultiYearViewLabel="Choose month and year";startDateLabel="Start date";endDateLabel="End date";comparisonDateLabel="Comparison range";formatYearRange(e,n){return`${e} \u2013 ${n}`}formatYearRangeLabel(e,n){return`${e} to ${n}`}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),vB=0,Xc=class{value;displayValue;ariaLabel;enabled;compareValue;rawValue;id=vB++;cssClasses;constructor(i,e,n,r,o,a=i,s){this.value=i,this.displayValue=e,this.ariaLabel=n,this.enabled=r,this.compareValue=a,this.rawValue=s,this.cssClasses=o instanceof Set?Array.from(o):o}},bB={passive:!1,capture:!0},wh={passive:!0,capture:!0},JS={passive:!0},Us=(()=>{class t{_elementRef=c(B);_ngZone=c(V);_platform=c(me);_intl=c(zs);_eventCleanups;_skipNextFocus=!1;_focusActiveCellAfterViewChecked=!1;label;rows;todayValue;startValue;endValue;labelMinRequiredCells;numCols=7;activeCell=0;ngAfterViewChecked(){this._focusActiveCellAfterViewChecked&&(this._focusActiveCell(),this._focusActiveCellAfterViewChecked=!1)}isRange=!1;cellAspectRatio=1;comparisonStart=null;comparisonEnd=null;previewStart=null;previewEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;selectedValueChange=new I;previewChange=new I;activeDateChange=new I;dragStarted=new I;dragEnded=new I;_firstRowOffset;_cellPadding;_cellWidth;_startDateLabelId;_endDateLabelId;_comparisonStartDateLabelId;_comparisonEndDateLabelId;_didDragSinceMouseDown=!1;_injector=c(G);comparisonDateAccessibleName=this._intl.comparisonDateLabel;_trackRow=e=>e;constructor(){let e=c(Oe),n=c(Ye);this._startDateLabelId=n.getId("mat-calendar-body-start-"),this._endDateLabelId=n.getId("mat-calendar-body-end-"),this._comparisonStartDateLabelId=n.getId("mat-calendar-body-comparison-start-"),this._comparisonEndDateLabelId=n.getId("mat-calendar-body-comparison-end-"),c(qe).load(_i),this._ngZone.runOutsideAngular(()=>{let r=this._elementRef.nativeElement,o=[e.listen(r,"touchmove",this._touchmoveHandler,bB),e.listen(r,"mouseenter",this._enterHandler,wh),e.listen(r,"focus",this._enterHandler,wh),e.listen(r,"mouseleave",this._leaveHandler,wh),e.listen(r,"blur",this._leaveHandler,wh),e.listen(r,"mousedown",this._mousedownHandler,JS),e.listen(r,"touchstart",this._mousedownHandler,JS)];this._platform.isBrowser&&o.push(e.listen("window","mouseup",this._mouseupHandler),e.listen("window","touchend",this._touchendHandler)),this._eventCleanups=o})}_cellClicked(e,n){this._didDragSinceMouseDown||e.enabled&&this.selectedValueChange.emit({value:e.value,event:n})}_emitActiveDateChange(e,n){e.enabled&&this.activeDateChange.emit({value:e.value,event:n})}_isSelected(e){return this.startValue===e||this.endValue===e}ngOnChanges(e){let n=e.numCols,{rows:r,numCols:o}=this;(e.rows||n)&&(this._firstRowOffset=r&&r.length&&r[0].length?o-r[0].length:0),(e.cellAspectRatio||n||!this._cellPadding)&&(this._cellPadding=`${50*this.cellAspectRatio/o}%`),(n||!this._cellWidth)&&(this._cellWidth=`${100/o}%`)}ngOnDestroy(){this._eventCleanups.forEach(e=>e())}_isActiveCell(e,n){let r=e*this.numCols+n;return e&&(r-=this._firstRowOffset),r==this.activeCell}_focusActiveCell(e=!0){Ge(()=>{setTimeout(()=>{let n=this._elementRef.nativeElement.querySelector(".mat-calendar-body-active");n&&(e||(this._skipNextFocus=!0),n.focus())})},{injector:this._injector})}_scheduleFocusActiveCellAfterViewChecked(){this._focusActiveCellAfterViewChecked=!0}_isRangeStart(e){return Qb(e,this.startValue,this.endValue)}_isRangeEnd(e){return Zb(e,this.startValue,this.endValue)}_isInRange(e){return Kb(e,this.startValue,this.endValue,this.isRange)}_isComparisonStart(e){return Qb(e,this.comparisonStart,this.comparisonEnd)}_isComparisonBridgeStart(e,n,r){if(!this._isComparisonStart(e)||this._isRangeStart(e)||!this._isInRange(e))return!1;let o=this.rows[n][r-1];if(!o){let a=this.rows[n-1];o=a&&a[a.length-1]}return o&&!this._isRangeEnd(o.compareValue)}_isComparisonBridgeEnd(e,n,r){if(!this._isComparisonEnd(e)||this._isRangeEnd(e)||!this._isInRange(e))return!1;let o=this.rows[n][r+1];if(!o){let a=this.rows[n+1];o=a&&a[0]}return o&&!this._isRangeStart(o.compareValue)}_isComparisonEnd(e){return Zb(e,this.comparisonStart,this.comparisonEnd)}_isInComparisonRange(e){return Kb(e,this.comparisonStart,this.comparisonEnd,this.isRange)}_isComparisonIdentical(e){return this.comparisonStart===this.comparisonEnd&&e===this.comparisonStart}_isPreviewStart(e){return Qb(e,this.previewStart,this.previewEnd)}_isPreviewEnd(e){return Zb(e,this.previewStart,this.previewEnd)}_isInPreview(e){return Kb(e,this.previewStart,this.previewEnd,this.isRange)}_getDescribedby(e){if(!this.isRange)return null;if(this.startValue===e&&this.endValue===e)return`${this._startDateLabelId} ${this._endDateLabelId}`;if(this.startValue===e)return this._startDateLabelId;if(this.endValue===e)return this._endDateLabelId;if(this.comparisonStart!==null&&this.comparisonEnd!==null){if(e===this.comparisonStart&&e===this.comparisonEnd)return`${this._comparisonStartDateLabelId} ${this._comparisonEndDateLabelId}`;if(e===this.comparisonStart)return this._comparisonStartDateLabelId;if(e===this.comparisonEnd)return this._comparisonEndDateLabelId}return null}_enterHandler=e=>{if(this._skipNextFocus&&e.type==="focus"){this._skipNextFocus=!1;return}if(e.target&&this.isRange){let n=this._getCellFromElement(e.target);n&&this._ngZone.run(()=>this.previewChange.emit({value:n.enabled?n:null,event:e}))}};_touchmoveHandler=e=>{if(!this.isRange)return;let n=eI(e),r=n?this._getCellFromElement(n):null;n!==e.target&&(this._didDragSinceMouseDown=!0),Yb(e.target)&&e.preventDefault(),this._ngZone.run(()=>this.previewChange.emit({value:r?.enabled?r:null,event:e}))};_leaveHandler=e=>{this.previewEnd!==null&&this.isRange&&(e.type!=="blur"&&(this._didDragSinceMouseDown=!0),e.target&&this._getCellFromElement(e.target)&&!(e.relatedTarget&&this._getCellFromElement(e.relatedTarget))&&this._ngZone.run(()=>this.previewChange.emit({value:null,event:e})))};_mousedownHandler=e=>{if(!this.isRange)return;this._didDragSinceMouseDown=!1;let n=e.target&&this._getCellFromElement(e.target);!n||!this._isInRange(n.compareValue)||this._ngZone.run(()=>{this.dragStarted.emit({value:n.rawValue,event:e})})};_mouseupHandler=e=>{if(!this.isRange)return;let n=Yb(e.target);if(!n){this._ngZone.run(()=>{this.dragEnded.emit({value:null,event:e})});return}n.closest(".mat-calendar-body")===this._elementRef.nativeElement&&this._ngZone.run(()=>{let r=this._getCellFromElement(n);this.dragEnded.emit({value:r?.rawValue??null,event:e})})};_touchendHandler=e=>{let n=eI(e);n&&this._mouseupHandler({target:n})};_getCellFromElement(e){let n=Yb(e);if(n){let r=n.getAttribute("data-mat-row"),o=n.getAttribute("data-mat-col");if(r&&o)return this.rows[parseInt(r)]?.[parseInt(o)]||null}return null}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=E({type:t,selectors:[["","mat-calendar-body",""]],hostAttrs:[1,"mat-calendar-body"],inputs:{label:"label",rows:"rows",todayValue:"todayValue",startValue:"startValue",endValue:"endValue",labelMinRequiredCells:"labelMinRequiredCells",numCols:"numCols",activeCell:"activeCell",isRange:"isRange",cellAspectRatio:"cellAspectRatio",comparisonStart:"comparisonStart",comparisonEnd:"comparisonEnd",previewStart:"previewStart",previewEnd:"previewEnd",startDateAccessibleName:"startDateAccessibleName",endDateAccessibleName:"endDateAccessibleName"},outputs:{selectedValueChange:"selectedValueChange",previewChange:"previewChange",activeDateChange:"activeDateChange",dragStarted:"dragStarted",dragEnded:"dragEnded"},exportAs:["matCalendarBody"],features:[Be],attrs:tB,decls:11,vars:11,consts:[["aria-hidden","true"],["role","row"],[1,"mat-calendar-body-hidden-label",3,"id"],[1,"mat-calendar-body-label"],[1,"mat-calendar-body-label",3,"paddingTop","paddingBottom"],["role","gridcell",1,"mat-calendar-body-cell-container",3,"width","paddingTop","paddingBottom"],["role","gridcell",1,"mat-calendar-body-cell-container"],["type","button",1,"mat-calendar-body-cell",3,"click","focus","tabindex"],[1,"mat-calendar-body-cell-content","mat-focus-indicator"],["aria-hidden","true",1,"mat-calendar-body-cell-preview"]],template:function(n,r){n&1&&(j(0,iB,3,6,"tr",0),De(1,aB,4,1,"tr",1,nB,!0),Ce(3,"span",2),g(4),Me(),Ce(5,"span",2),g(6),Me(),Ce(7,"span",2),g(8),Me(),Ce(9,"span",2),g(10),Me()),n&2&&(H(r._firstRowOffset<r.labelMinRequiredCells?0:-1),p(),xe(r.rows),p(2),Tt("id",r._startDateLabelId),p(),de(" ",r.startDateAccessibleName,`
`),p(),Tt("id",r._endDateLabelId),p(),de(" ",r.endDateAccessibleName,`
`),p(),Tt("id",r._comparisonStartDateLabelId),p(),cr(" ",r.comparisonDateAccessibleName," ",r.startDateAccessibleName,`
`),p(),Tt("id",r._comparisonEndDateLabelId),p(),cr(" ",r.comparisonDateAccessibleName," ",r.endDateAccessibleName,`
`))},styles:[`.mat-calendar-body {
  min-width: 224px;
}

.mat-calendar-body-today:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  border-color: var(--mat-datepicker-calendar-date-today-outline-color, var(--mat-sys-primary));
}

.mat-calendar-body-label {
  height: 0;
  line-height: 0;
  text-align: start;
  padding-left: 4.7142857143%;
  padding-right: 4.7142857143%;
  font-size: var(--mat-datepicker-calendar-body-label-text-size, var(--mat-sys-title-small-size));
  font-weight: var(--mat-datepicker-calendar-body-label-text-weight, var(--mat-sys-title-small-weight));
  color: var(--mat-datepicker-calendar-body-label-text-color, var(--mat-sys-on-surface));
}

.mat-calendar-body-hidden-label {
  display: none;
}

.mat-calendar-body-cell-container {
  position: relative;
  height: 0;
  line-height: 0;
}

.mat-calendar-body-cell {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: none;
  text-align: center;
  outline: none;
  margin: 0;
  font-family: var(--mat-datepicker-calendar-text-font, var(--mat-sys-body-medium-font));
  font-size: var(--mat-datepicker-calendar-text-size, var(--mat-sys-body-medium-size));
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
  outline: none;
  border: none;
  -webkit-tap-highlight-color: transparent;
}
.mat-calendar-body-cell::-moz-focus-inner {
  border: 0;
}

.mat-calendar-body-cell::before,
.mat-calendar-body-cell::after,
.mat-calendar-body-cell-preview {
  content: "";
  position: absolute;
  top: 5%;
  left: 0;
  z-index: 0;
  box-sizing: border-box;
  display: block;
  height: 90%;
  width: 100%;
}

.mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,
.mat-calendar-body-range-start::after,
.mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,
.mat-calendar-body-comparison-start::after,
.mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  left: 5%;
  width: 95%;
  border-top-left-radius: 999px;
  border-bottom-left-radius: 999px;
}
[dir=rtl] .mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,
[dir=rtl] .mat-calendar-body-range-start::after,
[dir=rtl] .mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,
[dir=rtl] .mat-calendar-body-comparison-start::after,
[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  left: 0;
  border-radius: 0;
  border-top-right-radius: 999px;
  border-bottom-right-radius: 999px;
}

.mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,
.mat-calendar-body-range-end::after,
.mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,
.mat-calendar-body-comparison-end::after,
.mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  width: 95%;
  border-top-right-radius: 999px;
  border-bottom-right-radius: 999px;
}
[dir=rtl] .mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,
[dir=rtl] .mat-calendar-body-range-end::after,
[dir=rtl] .mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,
[dir=rtl] .mat-calendar-body-comparison-end::after,
[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  left: 5%;
  border-radius: 0;
  border-top-left-radius: 999px;
  border-bottom-left-radius: 999px;
}

[dir=rtl] .mat-calendar-body-comparison-bridge-start.mat-calendar-body-range-end::after,
[dir=rtl] .mat-calendar-body-comparison-bridge-end.mat-calendar-body-range-start::after {
  width: 95%;
  border-top-right-radius: 999px;
  border-bottom-right-radius: 999px;
}

.mat-calendar-body-comparison-start.mat-calendar-body-range-end::after, [dir=rtl] .mat-calendar-body-comparison-start.mat-calendar-body-range-end::after,
.mat-calendar-body-comparison-end.mat-calendar-body-range-start::after,
[dir=rtl] .mat-calendar-body-comparison-end.mat-calendar-body-range-start::after {
  width: 90%;
}

.mat-calendar-body-in-preview {
  color: var(--mat-datepicker-calendar-date-preview-state-outline-color, var(--mat-sys-primary));
}
.mat-calendar-body-in-preview .mat-calendar-body-cell-preview {
  border-top: dashed 1px;
  border-bottom: dashed 1px;
}

.mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  border-left: dashed 1px;
}
[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  border-left: 0;
  border-right: dashed 1px;
}

.mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  border-right: dashed 1px;
}
[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  border-right: 0;
  border-left: dashed 1px;
}

.mat-calendar-body-disabled {
  cursor: default;
}
.mat-calendar-body-disabled > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  color: var(--mat-datepicker-calendar-date-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-calendar-body-disabled > .mat-calendar-body-today:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  border-color: var(--mat-datepicker-calendar-date-today-disabled-state-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mat-calendar-body-disabled {
    opacity: 0.5;
  }
}

.mat-calendar-body-cell-content {
  top: 5%;
  left: 5%;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 90%;
  height: 90%;
  line-height: 1;
  border-width: 1px;
  border-style: solid;
  border-radius: 999px;
  color: var(--mat-datepicker-calendar-date-text-color, var(--mat-sys-on-surface));
  border-color: var(--mat-datepicker-calendar-date-outline-color, transparent);
}
.mat-calendar-body-cell-content.mat-focus-indicator {
  position: absolute;
}
@media (forced-colors: active) {
  .mat-calendar-body-cell-content {
    border: none;
  }
}

.cdk-keyboard-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical), .cdk-program-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  background-color: var(--mat-datepicker-calendar-date-focus-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
}

@media (hover: hover) {
  .mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
    background-color: var(--mat-datepicker-calendar-date-hover-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
  }
}
.mat-calendar-body-selected {
  background-color: var(--mat-datepicker-calendar-date-selected-state-background-color, var(--mat-sys-primary));
  color: var(--mat-datepicker-calendar-date-selected-state-text-color, var(--mat-sys-on-primary));
}
.mat-calendar-body-disabled > .mat-calendar-body-selected {
  background-color: var(--mat-datepicker-calendar-date-selected-disabled-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-calendar-body-selected.mat-calendar-body-today {
  box-shadow: inset 0 0 0 1px var(--mat-datepicker-calendar-date-today-selected-state-outline-color, var(--mat-sys-primary));
}

.mat-calendar-body-in-range::before {
  background: var(--mat-datepicker-calendar-date-in-range-state-background-color, var(--mat-sys-primary-container));
}

.mat-calendar-body-comparison-identical,
.mat-calendar-body-in-comparison-range::before {
  background: var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--mat-sys-tertiary-container));
}

.mat-calendar-body-comparison-identical,
.mat-calendar-body-in-comparison-range::before {
  background: var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--mat-sys-tertiary-container));
}

.mat-calendar-body-comparison-bridge-start::before,
[dir=rtl] .mat-calendar-body-comparison-bridge-end::before {
  background: linear-gradient(to right, var(--mat-datepicker-calendar-date-in-range-state-background-color, var(--mat-sys-primary-container)) 50%, var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--mat-sys-tertiary-container)) 50%);
}

.mat-calendar-body-comparison-bridge-end::before,
[dir=rtl] .mat-calendar-body-comparison-bridge-start::before {
  background: linear-gradient(to left, var(--mat-datepicker-calendar-date-in-range-state-background-color, var(--mat-sys-primary-container)) 50%, var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--mat-sys-tertiary-container)) 50%);
}

.mat-calendar-body-in-range > .mat-calendar-body-comparison-identical,
.mat-calendar-body-in-comparison-range.mat-calendar-body-in-range::after {
  background: var(--mat-datepicker-calendar-date-in-overlap-range-state-background-color, var(--mat-sys-secondary-container));
}

.mat-calendar-body-comparison-identical.mat-calendar-body-selected,
.mat-calendar-body-in-comparison-range > .mat-calendar-body-selected {
  background: var(--mat-datepicker-calendar-date-in-overlap-range-selected-state-background-color, var(--mat-sys-secondary));
}

@media (forced-colors: active) {
  .mat-datepicker-popup:not(:empty),
  .mat-calendar-body-cell:not(.mat-calendar-body-in-range) .mat-calendar-body-selected {
    outline: solid 1px;
  }
  .mat-calendar-body-today {
    outline: dotted 1px;
  }
  .mat-calendar-body-cell::before,
  .mat-calendar-body-cell::after,
  .mat-calendar-body-selected {
    background: none;
  }
  .mat-calendar-body-in-range::before,
  .mat-calendar-body-comparison-bridge-start::before,
  .mat-calendar-body-comparison-bridge-end::before {
    border-top: solid 1px;
    border-bottom: solid 1px;
  }
  .mat-calendar-body-range-start::before {
    border-left: solid 1px;
  }
  [dir=rtl] .mat-calendar-body-range-start::before {
    border-left: 0;
    border-right: solid 1px;
  }
  .mat-calendar-body-range-end::before {
    border-right: solid 1px;
  }
  [dir=rtl] .mat-calendar-body-range-end::before {
    border-right: 0;
    border-left: solid 1px;
  }
  .mat-calendar-body-in-comparison-range::before {
    border-top: dashed 1px;
    border-bottom: dashed 1px;
  }
  .mat-calendar-body-comparison-start::before {
    border-left: dashed 1px;
  }
  [dir=rtl] .mat-calendar-body-comparison-start::before {
    border-left: 0;
    border-right: dashed 1px;
  }
  .mat-calendar-body-comparison-end::before {
    border-right: dashed 1px;
  }
  [dir=rtl] .mat-calendar-body-comparison-end::before {
    border-right: 0;
    border-left: dashed 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return t})();function qb(t){return t?.nodeName==="TD"}function Yb(t){let i;return qb(t)?i=t:qb(t.parentNode)?i=t.parentNode:qb(t.parentNode?.parentNode)&&(i=t.parentNode.parentNode),i?.getAttribute("data-mat-row")!=null?i:null}function Qb(t,i,e){return e!==null&&i!==e&&t<e&&t===i}function Zb(t,i,e){return i!==null&&i!==e&&t>=i&&t===e}function Kb(t,i,e,n){return n&&i!==null&&e!==null&&i!==e&&t>=i&&t<=e}function eI(t){let i=t.changedTouches[0];return document.elementFromPoint(i.clientX,i.clientY)}var Jn=class{start;end;_disableStructuralEquivalency;constructor(i,e){this.start=i,this.end=e}},Dh=(()=>{class t{selection;_adapter;_selectionChanged=new S;selectionChanged=this._selectionChanged;constructor(e,n){this.selection=e,this._adapter=n,this.selection=e}updateSelection(e,n){let r=this.selection;this.selection=e,this._selectionChanged.next({selection:e,source:n,oldValue:r})}ngOnDestroy(){this._selectionChanged.complete()}_isValidDateInstance(e){return this._adapter.isDateInstance(e)&&this._adapter.isValid(e)}static \u0275fac=function(n){Ll()};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})(),yB=(()=>{class t extends Dh{constructor(e){super(null,e)}add(e){super.updateSelection(e,this)}isValid(){return this.selection!=null&&this._isValidDateInstance(this.selection)}isComplete(){return this.selection!=null}clone(){let e=new t(this._adapter);return e.updateSelection(this.selection,this),e}static \u0275fac=function(n){return new(n||t)(W(_n))};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})();var CB={provide:Dh,useFactory:()=>c(Dh,{optional:!0,skipSelf:!0})||new yB(c(_n))};var oI=new y("MAT_DATE_RANGE_SELECTION_STRATEGY");var Xb=7,wB=0,tI=(()=>{class t{_changeDetectorRef=c(Ie);_dateFormats=c(ua,{optional:!0});_dateAdapter=c(_n,{optional:!0});_dir=c(it,{optional:!0});_rangeStrategy=c(oI,{optional:!0});_rerenderSubscription=ae.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(e){let n=this._activeDate,r=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(r,this.minDate,this.maxDate),this._hasSameMonthAndYear(n,this._activeDate)||this._init()}_activeDate;get selected(){return this._selected}set selected(e){e instanceof Jn?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setRanges(this._selected)}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;activeDrag=null;selectedChange=new I;_userSelection=new I;dragStarted=new I;dragEnded=new I;activeDateChange=new I;_matCalendarBody;_monthLabel=D("");_weeks=D([]);_firstWeekOffset=D(0);_rangeStart=D(null);_rangeEnd=D(null);_comparisonRangeStart=D(null);_comparisonRangeEnd=D(null);_previewStart=D(null);_previewEnd=D(null);_isRange=D(!1);_todayDate=D(null);_weekdays=D([]);constructor(){c(qe).load(Ui),this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(Qe(null)).subscribe(()=>this._init())}ngOnChanges(e){let n=e.comparisonStart||e.comparisonEnd;n&&!n.firstChange&&this._setRanges(this.selected),e.activeDrag&&!this.activeDrag&&this._clearPreview()}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_dateSelected(e){let n=e.value,r=this._getDateFromDayOfMonth(n),o,a;this._selected instanceof Jn?(o=this._getDateInCurrentMonth(this._selected.start),a=this._getDateInCurrentMonth(this._selected.end)):o=a=this._getDateInCurrentMonth(this._selected),(o!==n||a!==n)&&this.selectedChange.emit(r),this._userSelection.emit({value:r,event:e.event}),this._clearPreview(),this._changeDetectorRef.markForCheck()}_updateActiveDate(e){let n=e.value,r=this._activeDate;this.activeDate=this._getDateFromDayOfMonth(n),this._dateAdapter.compareDate(r,this.activeDate)&&this.activeDateChange.emit(this._activeDate)}_handleCalendarBodyKeydown(e){let n=this._activeDate,r=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,r?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,r?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,-7);break;case 40:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,7);break;case 36:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,1-this._dateAdapter.getDate(this._activeDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,this._dateAdapter.getNumDaysInMonth(this._activeDate)-this._dateAdapter.getDate(this._activeDate));break;case 33:this.activeDate=e.altKey?this._dateAdapter.addCalendarYears(this._activeDate,-1):this._dateAdapter.addCalendarMonths(this._activeDate,-1);break;case 34:this.activeDate=e.altKey?this._dateAdapter.addCalendarYears(this._activeDate,1):this._dateAdapter.addCalendarMonths(this._activeDate,1);break;case 13:case 32:this._selectionKeyPressed=!0,this._canSelect(this._activeDate)&&e.preventDefault();return;case 27:this._previewEnd()!=null&&!wt(e)&&(this._clearPreview(),this.activeDrag?this.dragEnded.emit({value:null,event:e}):(this.selectedChange.emit(null),this._userSelection.emit({value:null,event:e})),e.preventDefault(),e.stopPropagation());return;default:return}this._dateAdapter.compareDate(n,this.activeDate)&&(this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked()),e.preventDefault()}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._canSelect(this._activeDate)&&this._dateSelected({value:this._dateAdapter.getDate(this._activeDate),event:e}),this._selectionKeyPressed=!1)}_init(){this._setRanges(this.selected),this._todayDate.set(this._getCellCompareValue(this._dateAdapter.today())),this._monthLabel.set(this._dateFormats.display.monthLabel?this._dateAdapter.format(this.activeDate,this._dateFormats.display.monthLabel):this._dateAdapter.getMonthNames("short")[this._dateAdapter.getMonth(this.activeDate)].toLocaleUpperCase());let e=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),1);this._firstWeekOffset.set((Xb+this._dateAdapter.getDayOfWeek(e)-this._dateAdapter.getFirstDayOfWeek())%Xb),this._initWeekdays(),this._createWeekCells(),this._changeDetectorRef.markForCheck()}_focusActiveCell(e){this._matCalendarBody._focusActiveCell(e)}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_previewChanged({event:e,value:n}){if(this._rangeStrategy){let r=n?n.rawValue:null,o=this._rangeStrategy.createPreview(r,this.selected,e);if(this._previewStart.set(this._getCellCompareValue(o.start)),this._previewEnd.set(this._getCellCompareValue(o.end)),this.activeDrag&&r){let a=this._rangeStrategy.createDrag?.(this.activeDrag.value,this.selected,r,e);a&&(this._previewStart.set(this._getCellCompareValue(a.start)),this._previewEnd.set(this._getCellCompareValue(a.end)))}}}_dragEnded(e){if(this.activeDrag)if(e.value){let n=this._rangeStrategy?.createDrag?.(this.activeDrag.value,this.selected,e.value,e.event);this.dragEnded.emit({value:n??null,event:e.event})}else this.dragEnded.emit({value:null,event:e.event})}_getDateFromDayOfMonth(e){return this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),e)}_initWeekdays(){let e=this._dateAdapter.getFirstDayOfWeek(),n=this._dateAdapter.getDayOfWeekNames("narrow"),o=this._dateAdapter.getDayOfWeekNames("long").map((a,s)=>({long:a,narrow:n[s],id:wB++}));this._weekdays.set(o.slice(e).concat(o.slice(0,e)))}_createWeekCells(){let e=this._dateAdapter.getNumDaysInMonth(this.activeDate),n=this._dateAdapter.getDateNames(),r=[[]];for(let o=0,a=this._firstWeekOffset();o<e;o++,a++){a==Xb&&(r.push([]),a=0);let s=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),o+1),l=this._shouldEnableDate(s),d=this._dateAdapter.format(s,this._dateFormats.display.dateA11yLabel),u=this.dateClass?this.dateClass(s,"month"):void 0;r[r.length-1].push(new Xc(o+1,n[o],d,l,u,this._getCellCompareValue(s),s))}this._weeks.set(r)}_shouldEnableDate(e){return!!e&&(!this.minDate||this._dateAdapter.compareDate(e,this.minDate)>=0)&&(!this.maxDate||this._dateAdapter.compareDate(e,this.maxDate)<=0)&&(!this.dateFilter||this.dateFilter(e))}_getDateInCurrentMonth(e){return e&&this._hasSameMonthAndYear(e,this.activeDate)?this._dateAdapter.getDate(e):null}_hasSameMonthAndYear(e,n){return!!(e&&n&&this._dateAdapter.getMonth(e)==this._dateAdapter.getMonth(n)&&this._dateAdapter.getYear(e)==this._dateAdapter.getYear(n))}_getCellCompareValue(e){if(e){let n=this._dateAdapter.getYear(e),r=this._dateAdapter.getMonth(e),o=this._dateAdapter.getDate(e);return new Date(n,r,o).getTime()}return null}_isRtl(){return this._dir&&this._dir.value==="rtl"}_setRanges(e){e instanceof Jn?(this._rangeStart.set(this._getCellCompareValue(e.start)),this._rangeEnd.set(this._getCellCompareValue(e.end)),this._isRange.set(!0)):(this._rangeStart.set(this._getCellCompareValue(e)),this._rangeEnd.set(this._rangeStart()),this._isRange.set(!1)),this._comparisonRangeStart.set(this._getCellCompareValue(this.comparisonStart)),this._comparisonRangeEnd.set(this._getCellCompareValue(this.comparisonEnd))}_canSelect(e){return!this.dateFilter||this.dateFilter(e)}_clearPreview(){this._previewStart.set(null),this._previewEnd.set(null)}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=E({type:t,selectors:[["mat-month-view"]],viewQuery:function(n,r){if(n&1&&we(Us,5),n&2){let o;R(o=O())&&(r._matCalendarBody=o.first)}},inputs:{activeDate:"activeDate",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass",comparisonStart:"comparisonStart",comparisonEnd:"comparisonEnd",startDateAccessibleName:"startDateAccessibleName",endDateAccessibleName:"endDateAccessibleName",activeDrag:"activeDrag"},outputs:{selectedChange:"selectedChange",_userSelection:"_userSelection",dragStarted:"dragStarted",dragEnded:"dragEnded",activeDateChange:"activeDateChange"},exportAs:["matMonthView"],features:[Be],decls:8,vars:14,consts:[["role","grid",1,"mat-calendar-table"],[1,"mat-calendar-table-header"],["scope","col"],["aria-hidden","true"],["colspan","7",1,"mat-calendar-table-header-divider"],["mat-calendar-body","",3,"selectedValueChange","activeDateChange","previewChange","dragStarted","dragEnded","keyup","keydown","label","rows","todayValue","startValue","endValue","comparisonStart","comparisonEnd","previewStart","previewEnd","isRange","labelMinRequiredCells","activeCell","startDateAccessibleName","endDateAccessibleName"],[1,"cdk-visually-hidden"]],template:function(n,r){n&1&&(m(0,"table",0)(1,"thead",1)(2,"tr"),De(3,sB,5,2,"th",2,rI),h(),m(5,"tr",3),T(6,"th",4),h()(),m(7,"tbody",5),M("selectedValueChange",function(a){return r._dateSelected(a)})("activeDateChange",function(a){return r._updateActiveDate(a)})("previewChange",function(a){return r._previewChanged(a)})("dragStarted",function(a){return r.dragStarted.emit(a)})("dragEnded",function(a){return r._dragEnded(a)})("keyup",function(a){return r._handleCalendarBodyKeyup(a)})("keydown",function(a){return r._handleCalendarBodyKeydown(a)}),h()()),n&2&&(p(3),xe(r._weekdays()),p(4),A("label",r._monthLabel())("rows",r._weeks())("todayValue",r._todayDate())("startValue",r._rangeStart())("endValue",r._rangeEnd())("comparisonStart",r._comparisonRangeStart())("comparisonEnd",r._comparisonRangeEnd())("previewStart",r._previewStart())("previewEnd",r._previewEnd())("isRange",r._isRange())("labelMinRequiredCells",3)("activeCell",r._dateAdapter.getDate(r.activeDate)-1)("startDateAccessibleName",r.startDateAccessibleName)("endDateAccessibleName",r.endDateAccessibleName))},dependencies:[Us],encapsulation:2,changeDetection:0})}return t})(),On=24,Jb=4,nI=(()=>{class t{_changeDetectorRef=c(Ie);_dateAdapter=c(_n,{optional:!0});_dir=c(it,{optional:!0});_rerenderSubscription=ae.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(e){let n=this._activeDate,r=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(r,this.minDate,this.maxDate),aI(this._dateAdapter,n,this._activeDate,this.minDate,this.maxDate)||this._init()}_activeDate;get selected(){return this._selected}set selected(e){e instanceof Jn?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setSelectedYear(e)}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;selectedChange=new I;yearSelected=new I;activeDateChange=new I;_matCalendarBody;_years=D([]);_todayYear=D(0);_selectedYear=D(null);constructor(){this._dateAdapter,this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(Qe(null)).subscribe(()=>this._init())}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_init(){this._todayYear.set(this._dateAdapter.getYear(this._dateAdapter.today()));let n=this._dateAdapter.getYear(this._activeDate)-Kc(this._dateAdapter,this.activeDate,this.minDate,this.maxDate),r=[];for(let o=0,a=[];o<On;o++)a.push(n+o),a.length==Jb&&(r.push(a.map(s=>this._createCellForYear(s))),a=[]);this._years.set(r),this._changeDetectorRef.markForCheck()}_yearSelected(e){let n=e.value,r=this._dateAdapter.createDate(n,0,1),o=this._getDateFromYear(n);this.yearSelected.emit(r),this.selectedChange.emit(o)}_updateActiveDate(e){let n=e.value,r=this._activeDate;this.activeDate=this._getDateFromYear(n),this._dateAdapter.compareDate(r,this.activeDate)&&this.activeDateChange.emit(this.activeDate)}_handleCalendarBodyKeydown(e){let n=this._activeDate,r=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,r?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,r?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,-Jb);break;case 40:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,Jb);break;case 36:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,-Kc(this._dateAdapter,this.activeDate,this.minDate,this.maxDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,On-Kc(this._dateAdapter,this.activeDate,this.minDate,this.maxDate)-1);break;case 33:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?-On*10:-On);break;case 34:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?On*10:On);break;case 13:case 32:this._selectionKeyPressed=!0;break;default:return}this._dateAdapter.compareDate(n,this.activeDate)&&this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked(),e.preventDefault()}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._yearSelected({value:this._dateAdapter.getYear(this._activeDate),event:e}),this._selectionKeyPressed=!1)}_getActiveCell(){return Kc(this._dateAdapter,this.activeDate,this.minDate,this.maxDate)}_focusActiveCell(){this._matCalendarBody._focusActiveCell()}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_getDateFromYear(e){let n=this._dateAdapter.getMonth(this.activeDate),r=this._dateAdapter.getNumDaysInMonth(this._dateAdapter.createDate(e,n,1));return this._dateAdapter.createDate(e,n,Math.min(this._dateAdapter.getDate(this.activeDate),r))}_createCellForYear(e){let n=this._dateAdapter.createDate(e,0,1),r=this._dateAdapter.getYearName(n),o=this.dateClass?this.dateClass(n,"multi-year"):void 0;return new Xc(e,r,r,this._shouldEnableYear(e),o)}_shouldEnableYear(e){if(e==null||this.maxDate&&e>this._dateAdapter.getYear(this.maxDate)||this.minDate&&e<this._dateAdapter.getYear(this.minDate))return!1;if(!this.dateFilter)return!0;let n=this._dateAdapter.createDate(e,0,1);for(let r=n;this._dateAdapter.getYear(r)==e;r=this._dateAdapter.addCalendarDays(r,1))if(this.dateFilter(r))return!0;return!1}_isRtl(){return this._dir&&this._dir.value==="rtl"}_setSelectedYear(e){if(this._selectedYear.set(null),e instanceof Jn){let n=e.start||e.end;n&&this._selectedYear.set(this._dateAdapter.getYear(n))}else e&&this._selectedYear.set(this._dateAdapter.getYear(e))}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=E({type:t,selectors:[["mat-multi-year-view"]],viewQuery:function(n,r){if(n&1&&we(Us,5),n&2){let o;R(o=O())&&(r._matCalendarBody=o.first)}},inputs:{activeDate:"activeDate",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass"},outputs:{selectedChange:"selectedChange",yearSelected:"yearSelected",activeDateChange:"activeDateChange"},exportAs:["matMultiYearView"],decls:5,vars:7,consts:[["role","grid",1,"mat-calendar-table"],["aria-hidden","true",1,"mat-calendar-table-header"],["colspan","4",1,"mat-calendar-table-header-divider"],["mat-calendar-body","",3,"selectedValueChange","activeDateChange","keyup","keydown","rows","todayValue","startValue","endValue","numCols","cellAspectRatio","activeCell"]],template:function(n,r){n&1&&(m(0,"table",0)(1,"thead",1)(2,"tr"),T(3,"th",2),h()(),m(4,"tbody",3),M("selectedValueChange",function(a){return r._yearSelected(a)})("activeDateChange",function(a){return r._updateActiveDate(a)})("keyup",function(a){return r._handleCalendarBodyKeyup(a)})("keydown",function(a){return r._handleCalendarBodyKeydown(a)}),h()()),n&2&&(p(4),A("rows",r._years())("todayValue",r._todayYear())("startValue",r._selectedYear())("endValue",r._selectedYear())("numCols",4)("cellAspectRatio",4/7)("activeCell",r._getActiveCell()))},dependencies:[Us],encapsulation:2,changeDetection:0})}return t})();function aI(t,i,e,n,r){let o=t.getYear(i),a=t.getYear(e),s=sI(t,n,r);return Math.floor((o-s)/On)===Math.floor((a-s)/On)}function Kc(t,i,e,n){let r=t.getYear(i);return DB(r-sI(t,e,n),On)}function sI(t,i,e){let n=0;return e?n=t.getYear(e)-On+1:i&&(n=t.getYear(i)),n}function DB(t,i){return(t%i+i)%i}var iI=(()=>{class t{_changeDetectorRef=c(Ie);_dateFormats=c(ua,{optional:!0});_dateAdapter=c(_n,{optional:!0});_dir=c(it,{optional:!0});_rerenderSubscription=ae.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(e){let n=this._activeDate,r=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(r,this.minDate,this.maxDate),this._dateAdapter.getYear(n)!==this._dateAdapter.getYear(this._activeDate)&&this._init()}_activeDate;get selected(){return this._selected}set selected(e){e instanceof Jn?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setSelectedMonth(e)}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;selectedChange=new I;monthSelected=new I;activeDateChange=new I;_matCalendarBody;_months=D([]);_yearLabel=D("");_todayMonth=D(null);_selectedMonth=D(null);constructor(){this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(Qe(null)).subscribe(()=>this._init())}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_monthSelected(e){let n=e.value,r=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),n,1);this.monthSelected.emit(r);let o=this._getDateFromMonth(n);this.selectedChange.emit(o)}_updateActiveDate(e){let n=e.value,r=this._activeDate;this.activeDate=this._getDateFromMonth(n),this._dateAdapter.compareDate(r,this.activeDate)&&this.activeDateChange.emit(this.activeDate)}_handleCalendarBodyKeydown(e){let n=this._activeDate,r=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,r?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,r?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,-4);break;case 40:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,4);break;case 36:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,-this._dateAdapter.getMonth(this._activeDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,11-this._dateAdapter.getMonth(this._activeDate));break;case 33:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?-10:-1);break;case 34:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?10:1);break;case 13:case 32:this._selectionKeyPressed=!0;break;default:return}this._dateAdapter.compareDate(n,this.activeDate)&&(this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked()),e.preventDefault()}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._monthSelected({value:this._dateAdapter.getMonth(this._activeDate),event:e}),this._selectionKeyPressed=!1)}_init(){this._setSelectedMonth(this.selected),this._todayMonth.set(this._getMonthInCurrentYear(this._dateAdapter.today())),this._yearLabel.set(this._dateAdapter.getYearName(this.activeDate));let e=this._dateAdapter.getMonthNames("short");this._months.set([[0,1,2,3],[4,5,6,7],[8,9,10,11]].map(n=>n.map(r=>this._createCellForMonth(r,e[r])))),this._changeDetectorRef.markForCheck()}_focusActiveCell(){this._matCalendarBody._focusActiveCell()}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_getMonthInCurrentYear(e){return e&&this._dateAdapter.getYear(e)==this._dateAdapter.getYear(this.activeDate)?this._dateAdapter.getMonth(e):null}_getDateFromMonth(e){let n=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,1),r=this._dateAdapter.getNumDaysInMonth(n);return this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,Math.min(this._dateAdapter.getDate(this.activeDate),r))}_createCellForMonth(e,n){let r=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,1),o=this._dateAdapter.format(r,this._dateFormats.display.monthYearA11yLabel),a=this.dateClass?this.dateClass(r,"year"):void 0;return new Xc(e,n.toLocaleUpperCase(),o,this._shouldEnableMonth(e),a)}_shouldEnableMonth(e){let n=this._dateAdapter.getYear(this.activeDate);if(e==null||this._isYearAndMonthAfterMaxDate(n,e)||this._isYearAndMonthBeforeMinDate(n,e))return!1;if(!this.dateFilter)return!0;let r=this._dateAdapter.createDate(n,e,1);for(let o=r;this._dateAdapter.getMonth(o)==e;o=this._dateAdapter.addCalendarDays(o,1))if(this.dateFilter(o))return!0;return!1}_isYearAndMonthAfterMaxDate(e,n){if(this.maxDate){let r=this._dateAdapter.getYear(this.maxDate),o=this._dateAdapter.getMonth(this.maxDate);return e>r||e===r&&n>o}return!1}_isYearAndMonthBeforeMinDate(e,n){if(this.minDate){let r=this._dateAdapter.getYear(this.minDate),o=this._dateAdapter.getMonth(this.minDate);return e<r||e===r&&n<o}return!1}_isRtl(){return this._dir&&this._dir.value==="rtl"}_setSelectedMonth(e){e instanceof Jn?this._selectedMonth.set(this._getMonthInCurrentYear(e.start)||this._getMonthInCurrentYear(e.end)):this._selectedMonth.set(this._getMonthInCurrentYear(e))}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=E({type:t,selectors:[["mat-year-view"]],viewQuery:function(n,r){if(n&1&&we(Us,5),n&2){let o;R(o=O())&&(r._matCalendarBody=o.first)}},inputs:{activeDate:"activeDate",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass"},outputs:{selectedChange:"selectedChange",monthSelected:"monthSelected",activeDateChange:"activeDateChange"},exportAs:["matYearView"],decls:5,vars:9,consts:[["role","grid",1,"mat-calendar-table"],["aria-hidden","true",1,"mat-calendar-table-header"],["colspan","4",1,"mat-calendar-table-header-divider"],["mat-calendar-body","",3,"selectedValueChange","activeDateChange","keyup","keydown","label","rows","todayValue","startValue","endValue","labelMinRequiredCells","numCols","cellAspectRatio","activeCell"]],template:function(n,r){n&1&&(m(0,"table",0)(1,"thead",1)(2,"tr"),T(3,"th",2),h()(),m(4,"tbody",3),M("selectedValueChange",function(a){return r._monthSelected(a)})("activeDateChange",function(a){return r._updateActiveDate(a)})("keyup",function(a){return r._handleCalendarBodyKeyup(a)})("keydown",function(a){return r._handleCalendarBodyKeydown(a)}),h()()),n&2&&(p(4),A("label",r._yearLabel())("rows",r._months())("todayValue",r._todayMonth())("startValue",r._selectedMonth())("endValue",r._selectedMonth())("labelMinRequiredCells",2)("numCols",4)("cellAspectRatio",4/7)("activeCell",r._dateAdapter.getMonth(r.activeDate)))},dependencies:[Us],encapsulation:2,changeDetection:0})}return t})(),lI=(()=>{class t{_intl=c(zs);calendar=c(Jc);_dateAdapter=c(_n,{optional:!0});_dateFormats=c(ua,{optional:!0});_periodButtonText;_periodButtonDescription;_periodButtonLabel;_prevButtonLabel;_nextButtonLabel;constructor(){c(qe).load(Ui);let e=c(Ie);this._updateLabels(),this.calendar.stateChanges.subscribe(()=>{this._updateLabels(),e.markForCheck()})}get periodButtonText(){return this._periodButtonText}get periodButtonDescription(){return this._periodButtonDescription}get periodButtonLabel(){return this._periodButtonLabel}get prevButtonLabel(){return this._prevButtonLabel}get nextButtonLabel(){return this._nextButtonLabel}currentPeriodClicked(){this.calendar.currentView=this.calendar.currentView=="month"?"multi-year":"month"}previousClicked(){this.previousEnabled()&&(this.calendar.activeDate=this.calendar.currentView=="month"?this._dateAdapter.addCalendarMonths(this.calendar.activeDate,-1):this._dateAdapter.addCalendarYears(this.calendar.activeDate,this.calendar.currentView=="year"?-1:-On))}nextClicked(){this.nextEnabled()&&(this.calendar.activeDate=this.calendar.currentView=="month"?this._dateAdapter.addCalendarMonths(this.calendar.activeDate,1):this._dateAdapter.addCalendarYears(this.calendar.activeDate,this.calendar.currentView=="year"?1:On))}previousEnabled(){return this.calendar.minDate?!this.calendar.minDate||!this._isSameView(this.calendar.activeDate,this.calendar.minDate):!0}nextEnabled(){return!this.calendar.maxDate||!this._isSameView(this.calendar.activeDate,this.calendar.maxDate)}_updateLabels(){let e=this.calendar,n=this._intl,r=this._dateAdapter;e.currentView==="month"?(this._periodButtonText=r.format(e.activeDate,this._dateFormats.display.monthYearLabel).toLocaleUpperCase(),this._periodButtonDescription=r.format(e.activeDate,this._dateFormats.display.monthYearLabel).toLocaleUpperCase(),this._periodButtonLabel=n.switchToMultiYearViewLabel,this._prevButtonLabel=n.prevMonthLabel,this._nextButtonLabel=n.nextMonthLabel):e.currentView==="year"?(this._periodButtonText=r.getYearName(e.activeDate),this._periodButtonDescription=r.getYearName(e.activeDate),this._periodButtonLabel=n.switchToMonthViewLabel,this._prevButtonLabel=n.prevYearLabel,this._nextButtonLabel=n.nextYearLabel):(this._periodButtonText=n.formatYearRange(...this._formatMinAndMaxYearLabels()),this._periodButtonDescription=n.formatYearRangeLabel(...this._formatMinAndMaxYearLabels()),this._periodButtonLabel=n.switchToMonthViewLabel,this._prevButtonLabel=n.prevMultiYearLabel,this._nextButtonLabel=n.nextMultiYearLabel)}_isSameView(e,n){return this.calendar.currentView=="month"?this._dateAdapter.getYear(e)==this._dateAdapter.getYear(n)&&this._dateAdapter.getMonth(e)==this._dateAdapter.getMonth(n):this.calendar.currentView=="year"?this._dateAdapter.getYear(e)==this._dateAdapter.getYear(n):aI(this._dateAdapter,e,n,this.calendar.minDate,this.calendar.maxDate)}_formatMinAndMaxYearLabels(){let n=this._dateAdapter.getYear(this.calendar.activeDate)-Kc(this._dateAdapter,this.calendar.activeDate,this.calendar.minDate,this.calendar.maxDate),r=n+On-1,o=this._dateAdapter.getYearName(this._dateAdapter.createDate(n,0,1)),a=this._dateAdapter.getYearName(this._dateAdapter.createDate(r,0,1));return[o,a]}_periodButtonLabelId=c(Ye).getId("mat-calendar-period-label-");static \u0275fac=function(n){return new(n||t)};static \u0275cmp=E({type:t,selectors:[["mat-calendar-header"]],exportAs:["matCalendarHeader"],ngContentSelectors:lB,decls:17,vars:13,consts:[[1,"mat-calendar-header"],[1,"mat-calendar-controls"],["aria-live","polite",1,"cdk-visually-hidden",3,"id"],["matButton","","type","button",1,"mat-calendar-period-button",3,"click"],["aria-hidden","true"],["viewBox","0 0 10 5","focusable","false","aria-hidden","true",1,"mat-calendar-arrow"],["points","0,0 5,5 10,0"],[1,"mat-calendar-spacer"],["matIconButton","","type","button","disabledInteractive","",1,"mat-calendar-previous-button",3,"click","disabled","matTooltip"],["viewBox","0 0 24 24","focusable","false","aria-hidden","true"],["d","M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"],["matIconButton","","type","button","disabledInteractive","",1,"mat-calendar-next-button",3,"click","disabled","matTooltip"],["d","M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"]],template:function(n,r){n&1&&(Se(),m(0,"div",0)(1,"div",1)(2,"span",2),g(3),h(),m(4,"button",3),M("click",function(){return r.currentPeriodClicked()}),m(5,"span",4),g(6),h(),Ri(),m(7,"svg",5),T(8,"polygon",6),h()(),Aa(),T(9,"div",7),te(10),m(11,"button",8),M("click",function(){return r.previousClicked()}),Ri(),m(12,"svg",9),T(13,"path",10),h()(),Aa(),m(14,"button",11),M("click",function(){return r.nextClicked()}),Ri(),m(15,"svg",9),T(16,"path",12),h()()()()),n&2&&(p(2),A("id",r._periodButtonLabelId),p(),oe(r.periodButtonDescription),p(),K("aria-label",r.periodButtonLabel)("aria-describedby",r._periodButtonLabelId),p(2),oe(r.periodButtonText),p(),P("mat-calendar-invert",r.calendar.currentView!=="month"),p(4),A("disabled",!r.previousEnabled())("matTooltip",r.prevButtonLabel),K("aria-label",r.prevButtonLabel),p(3),A("disabled",!r.nextEnabled())("matTooltip",r.nextButtonLabel),K("aria-label",r.nextButtonLabel))},dependencies:[Wt,zi,Dr],encapsulation:2,changeDetection:0})}return t})(),Jc=(()=>{class t{_dateAdapter=c(_n,{optional:!0});_dateFormats=c(ua,{optional:!0});_changeDetectorRef=c(Ie);_elementRef=c(B);headerComponent;_calendarHeaderPortal;_intlChanges;_moveFocusOnNextTick=!1;get startAt(){return this._startAt}set startAt(e){this._startAt=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_startAt=null;startView="month";get selected(){return this._selected}set selected(e){e instanceof Jn?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;selectedChange=new I;yearSelected=new I;monthSelected=new I;viewChanged=new I(!0);_userSelection=new I;_userDragDrop=new I;monthView;yearView;multiYearView;get activeDate(){return this._clampedActiveDate}set activeDate(e){this._clampedActiveDate=this._dateAdapter.clampDate(e,this.minDate,this.maxDate),this.stateChanges.next(),this._changeDetectorRef.markForCheck()}_clampedActiveDate;get currentView(){return this._currentView}set currentView(e){let n=this._currentView!==e?e:null;this._currentView=e,this._moveFocusOnNextTick=!0,this._changeDetectorRef.markForCheck(),n&&(this.stateChanges.next(),this.viewChanged.emit(n))}_currentView;_activeDrag=null;stateChanges=new S;constructor(){this._intlChanges=c(zs).changes.subscribe(()=>{this._changeDetectorRef.markForCheck(),this.stateChanges.next()})}ngAfterContentInit(){this._calendarHeaderPortal=new An(this.headerComponent||lI),this.activeDate=this.startAt||this._dateAdapter.today(),this._currentView=this.startView}ngAfterViewChecked(){this._moveFocusOnNextTick&&(this._moveFocusOnNextTick=!1,this.focusActiveCell())}ngOnDestroy(){this._intlChanges.unsubscribe(),this.stateChanges.complete()}ngOnChanges(e){let n=e.minDate&&!this._dateAdapter.sameDate(e.minDate.previousValue,e.minDate.currentValue)?e.minDate:void 0,r=e.maxDate&&!this._dateAdapter.sameDate(e.maxDate.previousValue,e.maxDate.currentValue)?e.maxDate:void 0,o=n||r||e.dateFilter;if(o&&!o.firstChange){let a=this._getCurrentViewComponent();a&&(this._elementRef.nativeElement.contains(ji())&&(this._moveFocusOnNextTick=!0),this._changeDetectorRef.detectChanges(),a._init())}this.stateChanges.next()}focusActiveCell(){this._getCurrentViewComponent()?._focusActiveCell(!1)}updateTodaysDate(){this._getCurrentViewComponent()?._init()}_dateSelected(e){let n=e.value;(this.selected instanceof Jn||n&&!this._dateAdapter.sameDate(n,this.selected))&&this.selectedChange.emit(n),this._userSelection.emit(e)}_yearSelectedInMultiYearView(e){this.yearSelected.emit(e)}_monthSelectedInYearView(e){this.monthSelected.emit(e)}_goToDateInView(e,n){this.activeDate=e,this.currentView=n}_dragStarted(e){this._activeDrag=e}_dragEnded(e){this._activeDrag&&(e.value&&this._userDragDrop.emit(e),this._activeDrag=null)}_getCurrentViewComponent(){return this.monthView||this.yearView||this.multiYearView}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=E({type:t,selectors:[["mat-calendar"]],viewQuery:function(n,r){if(n&1&&we(tI,5)(iI,5)(nI,5),n&2){let o;R(o=O())&&(r.monthView=o.first),R(o=O())&&(r.yearView=o.first),R(o=O())&&(r.multiYearView=o.first)}},hostAttrs:[1,"mat-calendar"],inputs:{headerComponent:"headerComponent",startAt:"startAt",startView:"startView",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass",comparisonStart:"comparisonStart",comparisonEnd:"comparisonEnd",startDateAccessibleName:"startDateAccessibleName",endDateAccessibleName:"endDateAccessibleName"},outputs:{selectedChange:"selectedChange",yearSelected:"yearSelected",monthSelected:"monthSelected",viewChanged:"viewChanged",_userSelection:"_userSelection",_userDragDrop:"_userDragDrop"},exportAs:["matCalendar"],features:[Ue([CB]),Be],decls:5,vars:2,consts:[[3,"cdkPortalOutlet"],["cdkMonitorSubtreeFocus","","tabindex","-1",1,"mat-calendar-content"],[3,"activeDate","selected","dateFilter","maxDate","minDate","dateClass","comparisonStart","comparisonEnd","startDateAccessibleName","endDateAccessibleName","activeDrag"],[3,"activeDate","selected","dateFilter","maxDate","minDate","dateClass"],[3,"activeDateChange","_userSelection","dragStarted","dragEnded","activeDate","selected","dateFilter","maxDate","minDate","dateClass","comparisonStart","comparisonEnd","startDateAccessibleName","endDateAccessibleName","activeDrag"],[3,"activeDateChange","monthSelected","selectedChange","activeDate","selected","dateFilter","maxDate","minDate","dateClass"],[3,"activeDateChange","yearSelected","selectedChange","activeDate","selected","dateFilter","maxDate","minDate","dateClass"]],template:function(n,r){if(n&1&&(ut(0,cB,0,0,"ng-template",0),m(1,"div",1),j(2,dB,1,11,"mat-month-view",2)(3,uB,1,6,"mat-year-view",3)(4,mB,1,6,"mat-multi-year-view",3),h()),n&2){let o;A("cdkPortalOutlet",r._calendarHeaderPortal),p(2),H((o=r.currentView)==="month"?2:o==="year"?3:o==="multi-year"?4:-1)}},dependencies:[hn,Cc,tI,iI,nI],styles:[`.mat-calendar {
  display: block;
  line-height: normal;
  font-family: var(--mat-datepicker-calendar-text-font, var(--mat-sys-body-medium-font));
  font-size: var(--mat-datepicker-calendar-text-size, var(--mat-sys-body-medium-size));
}

.mat-calendar-header {
  padding: 8px 8px 0 8px;
}

.mat-calendar-content {
  padding: 0 8px 8px 8px;
  outline: none;
}

.mat-calendar-controls {
  display: flex;
  align-items: center;
  margin: 5% calc(4.7142857143% - 16px);
}

.mat-calendar-spacer {
  flex: 1 1 auto;
}

.mat-calendar-period-button {
  min-width: 0;
  margin: 0 8px;
  font-size: var(--mat-datepicker-calendar-period-button-text-size, var(--mat-sys-title-small-size));
  font-weight: var(--mat-datepicker-calendar-period-button-text-weight, var(--mat-sys-title-small-weight));
  --mat-button-text-label-text-color: var(--mat-datepicker-calendar-period-button-text-color, var(--mat-sys-on-surface-variant));
}

.mat-calendar-arrow {
  display: inline-block;
  width: 10px;
  height: 5px;
  margin: 0 0 0 5px;
  vertical-align: middle;
  fill: var(--mat-datepicker-calendar-period-button-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-calendar-arrow.mat-calendar-invert {
  transform: rotate(180deg);
}
[dir=rtl] .mat-calendar-arrow {
  margin: 0 5px 0 0;
}
@media (forced-colors: active) {
  .mat-calendar-arrow {
    fill: CanvasText;
  }
}

.mat-datepicker-content .mat-calendar-previous-button:not(.mat-mdc-button-disabled),
.mat-datepicker-content .mat-calendar-next-button:not(.mat-mdc-button-disabled) {
  color: var(--mat-datepicker-calendar-navigation-button-icon-color, var(--mat-sys-on-surface-variant));
}
[dir=rtl] .mat-calendar-previous-button,
[dir=rtl] .mat-calendar-next-button {
  transform: rotate(180deg);
}

.mat-calendar-table {
  border-spacing: 0;
  border-collapse: collapse;
  width: 100%;
}

.mat-calendar-table-header th {
  text-align: center;
  padding: 0 0 8px 0;
  color: var(--mat-datepicker-calendar-header-text-color, var(--mat-sys-on-surface-variant));
  font-size: var(--mat-datepicker-calendar-header-text-size, var(--mat-sys-title-small-size));
  font-weight: var(--mat-datepicker-calendar-header-text-weight, var(--mat-sys-title-small-weight));
}

.mat-calendar-table-header-divider {
  position: relative;
  height: 1px;
}
.mat-calendar-table-header-divider::after {
  content: "";
  position: absolute;
  top: 0;
  left: -8px;
  right: -8px;
  height: 1px;
  background: var(--mat-datepicker-calendar-header-divider-color, transparent);
}

.mat-calendar-body-cell-content::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1);
}

.mat-calendar-body-cell:focus-visible .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2,changeDetection:0})}return t})();var xB=(()=>{class t{_elementRef=c(B);_animationsDisabled=je();_changeDetectorRef=c(Ie);_globalModel=c(Dh);_dateAdapter=c(_n);_ngZone=c(V);_rangeSelectionStrategy=c(oI,{optional:!0});_stateChanges;_model;_eventCleanups;_animationFallback;_calendar;color;datepicker;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;_isAbove=!1;_animationDone=new S;_isAnimating=!1;_closeButtonText;_closeButtonFocused=!1;_actionsPortal=null;_dialogLabelId=null;constructor(){if(c(qe).load(Ui),this._closeButtonText=c(zs).closeCalendarLabel,!this._animationsDisabled){let e=this._elementRef.nativeElement,n=c(Oe);this._eventCleanups=this._ngZone.runOutsideAngular(()=>[n.listen(e,"animationstart",this._handleAnimationEvent),n.listen(e,"animationend",this._handleAnimationEvent),n.listen(e,"animationcancel",this._handleAnimationEvent)])}}ngAfterViewInit(){this._stateChanges=this.datepicker.stateChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()}),this._calendar.focusActiveCell()}ngOnDestroy(){clearTimeout(this._animationFallback),this._eventCleanups?.forEach(e=>e()),this._stateChanges?.unsubscribe(),this._animationDone.complete()}_handleUserSelection(e){let n=this._model.selection,r=e.value,o=n instanceof Jn;if(o&&this._rangeSelectionStrategy){let a=this._rangeSelectionStrategy.selectionFinished(r,n,e.event);this._model.updateSelection(a,this)}else r&&(o||!this._dateAdapter.sameDate(r,n))&&this._model.add(r);(!this._model||this._model.isComplete())&&!this._actionsPortal&&this.datepicker.close()}_handleUserDragDrop(e){this._model.updateSelection(e.value,this)}_startExitAnimation(){this._elementRef.nativeElement.classList.add("mat-datepicker-content-exit"),this._animationsDisabled?this._animationDone.next():(clearTimeout(this._animationFallback),this._animationFallback=setTimeout(()=>{this._isAnimating||this._animationDone.next()},200))}_handleAnimationEvent=e=>{let n=this._elementRef.nativeElement;e.target!==n||!e.animationName.startsWith("_mat-datepicker-content")||(clearTimeout(this._animationFallback),this._isAnimating=e.type==="animationstart",n.classList.toggle("mat-datepicker-content-animating",this._isAnimating),this._isAnimating||this._animationDone.next())};_getSelected(){return this._model.selection}_applyPendingSelection(){this._model!==this._globalModel&&this._globalModel.updateSelection(this._model.selection,this)}_assignActions(e,n){this._model=e?this._globalModel.clone():this._globalModel,this._actionsPortal=e,n&&this._changeDetectorRef.detectChanges()}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=E({type:t,selectors:[["mat-datepicker-content"]],viewQuery:function(n,r){if(n&1&&we(Jc,5),n&2){let o;R(o=O())&&(r._calendar=o.first)}},hostAttrs:[1,"mat-datepicker-content"],hostVars:6,hostBindings:function(n,r){n&2&&(kt(r.color?"mat-"+r.color:""),P("mat-datepicker-content-touch",r.datepicker.touchUi)("mat-datepicker-content-animations-enabled",!r._animationsDisabled))},inputs:{color:"color"},exportAs:["matDatepickerContent"],decls:5,vars:26,consts:[["cdkTrapFocus","","role","dialog",1,"mat-datepicker-content-container"],[3,"yearSelected","monthSelected","viewChanged","_userSelection","_userDragDrop","id","startAt","startView","minDate","maxDate","dateFilter","headerComponent","selected","dateClass","comparisonStart","comparisonEnd","startDateAccessibleName","endDateAccessibleName"],[3,"cdkPortalOutlet"],["type","button","matButton","elevated",1,"mat-datepicker-close-button",3,"focus","blur","click","color"]],template:function(n,r){n&1&&(m(0,"div",0)(1,"mat-calendar",1),M("yearSelected",function(a){return r.datepicker._selectYear(a)})("monthSelected",function(a){return r.datepicker._selectMonth(a)})("viewChanged",function(a){return r.datepicker._viewChanged(a)})("_userSelection",function(a){return r._handleUserSelection(a)})("_userDragDrop",function(a){return r._handleUserDragDrop(a)}),h(),ut(2,fB,0,0,"ng-template",2),m(3,"button",3),M("focus",function(){return r._closeButtonFocused=!0})("blur",function(){return r._closeButtonFocused=!1})("click",function(){return r.datepicker.close()}),g(4),h()()),n&2&&(P("mat-datepicker-content-container-with-custom-header",r.datepicker.calendarHeaderComponent)("mat-datepicker-content-container-with-actions",r._actionsPortal),K("aria-modal",!0)("aria-labelledby",r._dialogLabelId??void 0),p(),kt(r.datepicker.panelClass),A("id",r.datepicker.id)("startAt",r.datepicker.startAt)("startView",r.datepicker.startView)("minDate",r.datepicker._getMinDate())("maxDate",r.datepicker._getMaxDate())("dateFilter",r.datepicker._getDateFilter())("headerComponent",r.datepicker.calendarHeaderComponent)("selected",r._getSelected())("dateClass",r.datepicker.dateClass)("comparisonStart",r.comparisonStart)("comparisonEnd",r.comparisonEnd)("startDateAccessibleName",r.startDateAccessibleName)("endDateAccessibleName",r.endDateAccessibleName),p(),A("cdkPortalOutlet",r._actionsPortal),p(),P("cdk-visually-hidden",!r._closeButtonFocused),A("color",r.color||"primary"),p(),oe(r._closeButtonText))},dependencies:[tb,Jc,hn,Wt],styles:[`@keyframes _mat-datepicker-content-dropdown-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-datepicker-content-dialog-enter {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-datepicker-content-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-datepicker-content {
  display: block;
  background-color: var(--mat-datepicker-calendar-container-background-color, var(--mat-sys-surface-container-high));
  color: var(--mat-datepicker-calendar-container-text-color, var(--mat-sys-on-surface));
  box-shadow: var(--mat-datepicker-calendar-container-elevation-shadow, 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12));
  border-radius: var(--mat-datepicker-calendar-container-shape, var(--mat-sys-corner-large));
}
.mat-datepicker-content.mat-datepicker-content-animations-enabled {
  animation: _mat-datepicker-content-dropdown-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-datepicker-content .mat-calendar {
  width: 296px;
  height: 354px;
}
.mat-datepicker-content .mat-datepicker-content-container-with-custom-header .mat-calendar {
  height: auto;
}
.mat-datepicker-content .mat-datepicker-close-button {
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 8px;
}
.mat-datepicker-content-animating .mat-datepicker-content .mat-datepicker-close-button {
  display: none;
}

.mat-datepicker-content-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.mat-datepicker-content-touch {
  display: block;
  max-height: 80vh;
  box-shadow: var(--mat-datepicker-calendar-container-touch-elevation-shadow, 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12));
  border-radius: var(--mat-datepicker-calendar-container-touch-shape, var(--mat-sys-corner-extra-large));
  position: relative;
  overflow: visible;
}
.mat-datepicker-content-touch.mat-datepicker-content-animations-enabled {
  animation: _mat-datepicker-content-dialog-enter 150ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-datepicker-content-touch .mat-datepicker-content-container {
  min-height: 312px;
  max-height: 788px;
  min-width: 250px;
  max-width: 750px;
}
.mat-datepicker-content-touch .mat-calendar {
  width: 100%;
  height: auto;
}

.mat-datepicker-content-exit.mat-datepicker-content-animations-enabled {
  animation: _mat-datepicker-content-exit 100ms linear;
}

@media all and (orientation: landscape) {
  .mat-datepicker-content-touch .mat-datepicker-content-container {
    width: 64vh;
    height: 80vh;
  }
}
@media all and (orientation: portrait) {
  .mat-datepicker-content-touch .mat-datepicker-content-container {
    width: 80vw;
    height: 100vw;
  }
  .mat-datepicker-content-touch .mat-datepicker-content-container-with-actions {
    height: 115vw;
  }
}
`],encapsulation:2,changeDetection:0})}return t})();var EB=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=N({type:t,selectors:[["","matDatepickerToggleIcon",""]]})}return t})(),MB=(()=>{class t{_intl=c(zs);_changeDetectorRef=c(Ie);_stateChanges=ae.EMPTY;datepicker;tabIndex=null;ariaLabel;get disabled(){return this._disabled===void 0&&this.datepicker?this.datepicker.disabled:!!this._disabled}set disabled(e){this._disabled=e}_disabled;disableRipple=!1;_customIcon;_button;constructor(){let e=c(new ui("tabindex"),{optional:!0}),n=Number(e);this.tabIndex=n||n===0?n:null}ngOnChanges(e){e.datepicker&&this._watchStateChanges()}ngOnDestroy(){this._stateChanges.unsubscribe()}ngAfterContentInit(){this._watchStateChanges()}_open(e){this.datepicker&&!this.disabled&&(this.datepicker.open(),e.stopPropagation())}_watchStateChanges(){let e=this.datepicker?this.datepicker.stateChanges:q(),n=this.datepicker&&this.datepicker.datepickerInput?this.datepicker.datepickerInput.stateChanges:q(),r=this.datepicker?Ft(this.datepicker.openedStream,this.datepicker.closedStream):q();this._stateChanges.unsubscribe(),this._stateChanges=Ft(this._intl.changes,e,n,r).subscribe(()=>this._changeDetectorRef.markForCheck())}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=E({type:t,selectors:[["mat-datepicker-toggle"]],contentQueries:function(n,r,o){if(n&1&&bt(o,EB,5),n&2){let a;R(a=O())&&(r._customIcon=a.first)}},viewQuery:function(n,r){if(n&1&&we(hB,5),n&2){let o;R(o=O())&&(r._button=o.first)}},hostAttrs:[1,"mat-datepicker-toggle"],hostVars:8,hostBindings:function(n,r){n&1&&M("click",function(a){return r._open(a)}),n&2&&(K("tabindex",null)("data-mat-calendar",r.datepicker?r.datepicker.id:null),P("mat-datepicker-toggle-active",r.datepicker&&r.datepicker.opened)("mat-accent",r.datepicker&&r.datepicker.color==="accent")("mat-warn",r.datepicker&&r.datepicker.color==="warn"))},inputs:{datepicker:[0,"for","datepicker"],tabIndex:"tabIndex",ariaLabel:[0,"aria-label","ariaLabel"],disabled:[2,"disabled","disabled",Z],disableRipple:"disableRipple"},exportAs:["matDatepickerToggle"],features:[Be],ngContentSelectors:gB,decls:4,vars:7,consts:[["button",""],["matIconButton","","type","button",3,"tabIndex","disabled","disableRipple"],["viewBox","0 0 24 24","width","24px","height","24px","fill","currentColor","focusable","false","aria-hidden","true",1,"mat-datepicker-toggle-default-icon"],["d","M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"]],template:function(n,r){n&1&&(Se(pB),m(0,"button",1,0),j(2,_B,2,0,":svg:svg",2),te(3),h()),n&2&&(A("tabIndex",r.disabled?-1:r.tabIndex)("disabled",r.disabled)("disableRipple",r.disableRipple),K("aria-haspopup",r.datepicker?"dialog":null)("aria-label",r.ariaLabel||r._intl.openCalendarLabel)("aria-expanded",r.datepicker?r.datepicker.opened:null),p(2),H(r._customIcon?-1:2))},dependencies:[zi],styles:[`.mat-datepicker-toggle {
  pointer-events: auto;
  color: var(--mat-datepicker-toggle-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-datepicker-toggle button {
  color: inherit;
}

.mat-datepicker-toggle-active {
  color: var(--mat-datepicker-toggle-active-state-icon-color, var(--mat-sys-primary));
}

@media (forced-colors: active) {
  .mat-datepicker-toggle-default-icon {
    color: CanvasText;
  }
}
`],encapsulation:2,changeDetection:0})}return t})();var cI=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=$({type:t});static \u0275inj=z({providers:[zs],imports:[ht,Kn,Xo,$i,xB,MB,lI,ve,Zn]})}return t})();var IB=/^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|(?:(?:\+|-)\d{2}:\d{2}))?)?$/,TB=/^(\d?\d)[:.](\d?\d)(?:[:.](\d?\d))?\s*(AM|PM)?$/i;function ey(t,i){let e=Array(t);for(let n=0;n<t;n++)e[n]=i(n);return e}var kB=(()=>{class t extends _n{_matDateLocale=c(Gb,{optional:!0});constructor(){super();let e=c(Gb,{optional:!0});e!==void 0&&(this._matDateLocale=e),super.setLocale(this._matDateLocale)}getYear(e){return e.getFullYear()}getMonth(e){return e.getMonth()}getDate(e){return e.getDate()}getDayOfWeek(e){return e.getDay()}getMonthNames(e){let n=new Intl.DateTimeFormat(this.locale,{month:e,timeZone:"utc"});return ey(12,r=>this._format(n,new Date(2017,r,1)))}getDateNames(){let e=new Intl.DateTimeFormat(this.locale,{day:"numeric",timeZone:"utc"});return ey(31,n=>this._format(e,new Date(2017,0,n+1)))}getDayOfWeekNames(e){let n=new Intl.DateTimeFormat(this.locale,{weekday:e,timeZone:"utc"});return ey(7,r=>this._format(n,new Date(2017,0,r+1)))}getYearName(e){let n=new Intl.DateTimeFormat(this.locale,{year:"numeric",timeZone:"utc"});return this._format(n,e)}getFirstDayOfWeek(){if(typeof Intl<"u"&&Intl.Locale){let e=new Intl.Locale(this.locale),n=(e.getWeekInfo?.()||e.weekInfo)?.firstDay??0;return n===7?0:n}return 0}getNumDaysInMonth(e){return this.getDate(this._createDateWithOverflow(this.getYear(e),this.getMonth(e)+1,0))}clone(e){return new Date(e.getTime())}createDate(e,n,r){let o=this._createDateWithOverflow(e,n,r);return o.getMonth()!=n,o}today(){return new Date}parse(e,n){return typeof e=="number"?new Date(e):e?new Date(Date.parse(e)):null}format(e,n){if(!this.isValid(e))throw Error("NativeDateAdapter: Cannot format invalid date.");let r=new Intl.DateTimeFormat(this.locale,ne(C({},n),{timeZone:"utc"}));return this._format(r,e)}addCalendarYears(e,n){return this.addCalendarMonths(e,n*12)}addCalendarMonths(e,n){let r=this._createDateWithOverflow(this.getYear(e),this.getMonth(e)+n,this.getDate(e));return this.getMonth(r)!=((this.getMonth(e)+n)%12+12)%12&&(r=this._createDateWithOverflow(this.getYear(r),this.getMonth(r),0)),r}addCalendarDays(e,n){return this._createDateWithOverflow(this.getYear(e),this.getMonth(e),this.getDate(e)+n)}toIso8601(e){return[e.getUTCFullYear(),this._2digit(e.getUTCMonth()+1),this._2digit(e.getUTCDate())].join("-")}deserialize(e){if(typeof e=="string"){if(!e)return null;if(IB.test(e)){let n=new Date(e);if(this.isValid(n))return n}}return super.deserialize(e)}isDateInstance(e){return e instanceof Date}isValid(e){return!isNaN(e.getTime())}invalid(){return new Date(NaN)}setTime(e,n,r,o){let a=this.clone(e);return a.setHours(n,r,o,0),a}getHours(e){return e.getHours()}getMinutes(e){return e.getMinutes()}getSeconds(e){return e.getSeconds()}parseTime(e,n){if(typeof e!="string")return e instanceof Date?new Date(e.getTime()):null;let r=e.trim();if(r.length===0)return null;let o=this._parseTimeString(r);if(o===null){let a=r.replace(/[^0-9:(AM|PM)]/gi,"").trim();a.length>0&&(o=this._parseTimeString(a))}return o||this.invalid()}addSeconds(e,n){return new Date(e.getTime()+n*1e3)}_createDateWithOverflow(e,n,r){let o=new Date;return o.setFullYear(e,n,r),o.setHours(0,0,0,0),o}_2digit(e){return("00"+e).slice(-2)}_format(e,n){let r=new Date;return r.setUTCFullYear(n.getFullYear(),n.getMonth(),n.getDate()),r.setUTCHours(n.getHours(),n.getMinutes(),n.getSeconds(),n.getMilliseconds()),e.format(r)}_parseTimeString(e){let n=e.toUpperCase().match(TB);if(n){let r=parseInt(n[1]),o=parseInt(n[2]),a=n[3]==null?void 0:parseInt(n[3]),s=n[4];if(r===12?r=s==="AM"?0:r:s==="PM"&&(r+=12),ty(r,0,23)&&ty(o,0,59)&&(a==null||ty(a,0,59)))return this.setTime(this.today(),r,o,a||0)}return null}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})();function ty(t,i,e){return!isNaN(t)&&t>=i&&t<=e}var AB={parse:{dateInput:null,timeInput:null},display:{dateInput:{year:"numeric",month:"numeric",day:"numeric"},timeInput:{hour:"numeric",minute:"numeric"},monthYearLabel:{year:"numeric",month:"short"},dateA11yLabel:{year:"numeric",month:"long",day:"numeric"},monthYearA11yLabel:{year:"numeric",month:"long"},timeOptionLabel:{hour:"numeric",minute:"numeric"}}};var dI=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=$({type:t});static \u0275inj=z({providers:[RB()]})}return t})();function RB(t=AB){return[{provide:_n,useClass:kB},{provide:ua,useValue:t}]}function OB(t,i){if(t&1&&(m(0,"p",3),g(1),h(),m(2,"p",9),g(3),h()),t&2){let e=x();p(),de(" Dagsrapport f\xF6r ",e.childSignal().name," "),p(2),de(" ",e.dateLabel," ")}}function NB(t,i){t&1&&(m(0,"p",3),g(1," V\xE4lj datum f\xF6r att se n\xE4rvaro och journal "),h())}function PB(t,i){t&1&&g(0," V\xE4lj datum f\xF6r att se n\xE4rvaro och journal ")}function FB(t,i){if(t&1&&g(0),t&2){let e=x();de(" N\xE4rvaro ",e.dateLabel," ")}}var xh=class t{childSignal=Ne.required();journalService=c(Bs);attendanceService=c(eo);selected=D(null);currentJournal=D(null);currentChildAttendance="";dateLabel="";yesterday=new Date;statusOptions=[{value:"NOT_SET",label:"\u2014"},{value:"CHECKED_IN",label:"Incheckad"},{value:"CHECKED_OUT",label:"Utcheckad"},{value:"LEAVE",label:"Ledig"},{value:"ABSENT",label:"Fr\xE5nvarande"}];months=["Januari","Februari","Mars","April","Maj","Juni","Juli","Augusti","September","Oktober","November","December"];days=["S\xF6ndag","M\xE5ndag","Tisdag","Onsdag","Torsdag","Fredag","L\xF6rdag"];constructor(){this.yesterday.setDate(this.yesterday.getDate()-1),nt(i=>{let e=this.selected(),n=this.childSignal().id;if(!e){this.currentJournal.set(null);return}this.dateLabel=`${this.days[e.getDay()]} ${e.getDate()} ${this.months[e.getMonth()]} ${e.getFullYear()}`;let r=e.getFullYear(),o=String(e.getMonth()+1).padStart(2,"0"),a=String(e.getDate()).padStart(2,"0"),s=`${r}-${o}-${a}`,l=this.attendanceService.getSignal(this.childSignal().id,s)()??"NOT_SET";this.currentChildAttendance=this.statusOptions.find(({value:u})=>u===l)?.label;let d=this.journalService.getJournalByDate(n,s).subscribe({next:u=>{this.currentJournal.set(u)}});i(()=>{d.unsubscribe()})})}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=E({type:t,selectors:[["history"]],inputs:{childSignal:[1,"childSignal"]},outputs:{childSignal:"childSignalChange"},decls:17,vars:8,consts:[[1,"outer-container"],[1,"journal-display"],[1,"journal-header"],[1,"journal-title"],[1,"text-area"],[1,"journal-text"],[1,"calendar-container"],[1,"calendar",3,"selectedChange","selected","maxDate"],[1,"attendance-info"],[1,"bold-label"]],template:function(e,n){if(e&1&&(m(0,"div",0)(1,"mat-card",1)(2,"mat-card-header",2),j(3,OB,4,2),j(4,NB,2,0,"p",3),h(),T(5,"mat-divider"),m(6,"mat-card-content",4)(7,"p",5),g(8),h()()(),m(9,"div",6)(10,"mat-card")(11,"mat-calendar",7),M("selectedChange",function(o){return n.selected.set(o)}),h()(),m(12,"p",8),j(13,PB,1,0),j(14,FB,1,1),m(15,"span",9),g(16),h()()()()),e&2){let r;p(3),H(n.selected()!==null?3:-1),p(),H(n.selected()===null?4:-1),p(4),oe((r=n.currentJournal())==null?null:r.content),p(3),A("selected",n.selected())("maxDate",n.yesterday),p(2),H(n.selected()===null?13:-1),p(),H(n.dateLabel!==""?14:-1),p(2),oe(n.currentChildAttendance)}},dependencies:[Wn,Ct,un,mn,cI,Jc,dI,an],styles:["[_nghost-%COMP%]{display:flex;min-height:0;width:100%;height:100%}.outer-container[_ngcontent-%COMP%]{background:var(--mat-sys-inverse-primary);display:flex;flex-direction:row;justify-content:center;min-height:0;overflow:hidden;flex:1;box-shadow:var(--mat-sys-level2);box-sizing:border-box;padding:1em;gap:1em}.journal-display[_ngcontent-%COMP%]{flex:1;min-height:0;box-shadow:var(--mat-sys-level2);display:flex;flex-direction:column;overflow:hidden}.text-area[_ngcontent-%COMP%]{background-color:var(--mat-sys-surface-variant);min-height:0;overflow-y:auto;border-radius:0% 0% 2% 2%;flex:1}.journal-header[_ngcontent-%COMP%]{display:flex;font-weight:400!important;font-size:large;min-height:11%;background:var(--mat-sys-surface-dim);flex-direction:row;justify-content:center;gap:1em}.calendar-container[_ngcontent-%COMP%]{width:33%;justify-content:center;height:fit-content;box-shadow:var(--mat-sys-level2);border-radius:3%;background:var(--mat-sys-surface-dim)}.attendance-info[_ngcontent-%COMP%]{display:flex;justify-content:center;font-weight:400;gap:1em}.bold-label[_ngcontent-%COMP%]{font-weight:500}.journal-text[_ngcontent-%COMP%]{font:var(--mat-sys-body-large);margin:.5em}.outer-container[_ngcontent-%COMP%]{display:flex}"]})};var Eh=class t{childSignal=Ne.required();static \u0275fac=function(e){return new(e||t)};static \u0275cmp=E({type:t,selectors:[["information"]],inputs:{childSignal:[1,"childSignal"]},outputs:{childSignal:"childSignalChange"},decls:34,vars:1,consts:[["journalContent",""],[1,"subrow"],["id","left-card"],[1,"header-text"],["matInput",""],[1,"color"],["cdkScrollable","",1,"subcard"],[1,"gap"],[1,"kontakt"]],template:function(e,n){e&1&&(m(0,"div",1)(1,"mat-card",2)(2,"mat-card-header",3),g(3),h(),m(4,"mat-form-field"),T(5,"textarea",4,0),h()(),m(7,"mat-card",5)(8,"mat-card-header",3),g(9," Kontaktinformation "),h(),m(10,"mat-card",6)(11,"mat-card-content",7)(12,"p",8),g(13,"Kontakt 1"),h(),m(14,"p"),g(15,"Namn: V\xE5rdnadshavare Exempelsson"),h(),T(16,"mat-divider"),m(17,"p"),g(18,"Telefonnummer: 072-555-83-34"),h(),T(19,"mat-divider"),m(20,"p"),g(21,"Mejl: V\xE5rdnadshavare.Exempelsson@outlook.se"),h(),T(22,"mat-divider"),m(23,"p",8),g(24,"Kontakt 2"),h(),m(25,"p"),g(26,"Namn: V\xE5rdnadnadshavare Exempelsson"),h(),T(27,"mat-divider"),m(28,"p"),g(29,"Telefonnummer: 072-365-555-34"),h(),T(30,"mat-divider"),m(31,"p"),g(32,"Mejl: V\xE5rdnadshavare.Exempelsson@outlook.se"),h(),T(33,"mat-divider"),h()()()()),e&2&&(p(3),de(" Specialbehov ",n.childSignal().name," "))},dependencies:[Yf,Ct,Xt,Rt,mn,un,an],styles:["[_nghost-%COMP%]{display:flex;width:100%;height:100%}.subrow[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex:1;justify-content:center;height:100%;gap:1em}.subrow[_ngcontent-%COMP%] > mat-card[_ngcontent-%COMP%]{margin-bottom:.5em;max-height:100%}.subrow[_ngcontent-%COMP%] > mat-card[_ngcontent-%COMP%] > mat-card[_ngcontent-%COMP%]{overflow-y:scroll;flex:1}.subrow[_ngcontent-%COMP%] > mat-card[_ngcontent-%COMP%] > mat-card[_ngcontent-%COMP%]{overflow-y:scroll}mat-card-header[_ngcontent-%COMP%]{display:flex;justify-content:center;border:2px;font:var(--mat-sys-headline-small)}mat-form-field[_ngcontent-%COMP%]{flex:1;margin:1em;box-shadow:var(--mat-sys-level2)}textarea[_ngcontent-%COMP%]{min-height:20vh;resize:none;overflow-y:auto}mat-card[_ngcontent-%COMP%]{box-shadow:var(--mat-sys-level2);flex:1;gap:.5em}.color[_ngcontent-%COMP%]{background:var(--mat-sys-inverse-primary)}.subcard[_ngcontent-%COMP%]{box-shadow:var(--mat-sys-level2);background-color:var(--mat-sys-surface-variant);flex:1;margin:1em;border-radius:0%;overflow-y:scroll}.gap[_ngcontent-%COMP%]{position:absolute}.gap[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{display:flex}.kontakt[_ngcontent-%COMP%]{font:var(--mat-sys-label-large);justify-self:center}.header-text[_ngcontent-%COMP%]{font-weight:400}#left-card[_ngcontent-%COMP%]{background:var(--mat-sys-inverse-primary);border-top-left-radius:0%}"]})};var LB=()=>[1,2,3,4,5],VB=(t,i)=>i.id;function BB(t,i){if(t&1&&(m(0,"mat-card",6)(1,"p",9)(2,"span",10),g(3,"CLICKBAIT TITEL"),h(),g(4),h()()),t&2){let e=i.$implicit,n=x();p(4),de(" ",e===1||e===4?n.fakeNewsLong:n.fakeNews," ")}}function jB(t,i){if(t&1&&(m(0,"mat-card",8)(1,"mat-icon"),g(2,"face"),h(),m(3,"p",11),g(4),h()()),t&2){let e=i.$implicit;p(4),oe(e.name)}}var Mh=class t{fakeNews="Finally, one I can answer! I literally have never been able to answer any askreddit question in my entire life,and have never posted anything on reddit until this exact moment that is happening right now. Writing this on mobile,sorry for bad formatting, also english is my 6th language so there might be one wrong word, TLDR at the bottom. ";fakeNewsLong="Finally, one I can answer! I literally have never been able to answer any askreddit question in my entire life,and have never posted anything on reddit until this exact moment that is happening right now. Writing this on mobile,sorry for bad formatting, also english is my 6th language so there might be one wrong word, TLDR at the bottom. Finally, one I can answer! I literally have never been able to answer any askreddit question in my entire life,and have never posted anything on reddit until this exact moment that is happening right now. Writing this on mobile,sorry for bad formatting, also english is my 6th language so there might be one wrong word, TLDR at the bottom. ";users=D([]);userService=c(lo);async ngOnInit(){await new Promise(i=>{this.userService.getUsers().subscribe(e=>{this.users.set(e),i()})})}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=E({type:t,selectors:[["homepage"]],decls:26,vars:1,consts:[[1,"main-card"],[1,"school-title"],[1,"main-body"],[1,"news"],[1,"news-header"],[1,"news-content"],[1,"mock-news-boxes"],[1,"staff"],[1,"mock-teachers"],[1,"news-text"],[1,"news-title"],[1,"namn"]],template:function(e,n){e&1&&(m(0,"mat-card",0)(1,"mat-card-header",1)(2,"p"),g(3,"K\xE4ndpersonsnamn F\xF6rskola"),h()(),T(4,"mat-divider"),m(5,"mat-card-content",2)(6,"mat-card",3)(7,"mat-card-header",4)(8,"p")(9,"mat-icon"),g(10,"newspaper"),h(),g(11," Nyheter "),h()(),T(12,"mat-divider"),m(13,"mat-card-content",5),De(14,BB,5,1,"mat-card",6,zr),h()(),m(16,"mat-card",7)(17,"mat-card-header",4)(18,"p")(19,"mat-icon"),g(20,"diversity_3"),h(),g(21," Personal "),h()(),T(22,"mat-divider"),m(23,"mat-card-content",5),De(24,jB,5,1,"mat-card",8,VB),h()()()()),e&2&&(p(14),xe(Hl(0,LB)),p(10),xe(n.users()))},dependencies:[Ct,mn,un,an,Dt],styles:["[_nghost-%COMP%]{display:flex;flex:1;height:100%;min-height:0;width:100%}.main-card[_ngcontent-%COMP%]{box-shadow:var(--mat-sys-level1);display:flex;flex-direction:column;flex:1;min-height:0;width:100%;overflow:hidden}.school-title[_ngcontent-%COMP%]{background:var(--mat-sys-inverse-primary);font:var(--mat-sys-title-large);font-weight:400;font-size:xx-large;display:flex;justify-content:center}.main-body[_ngcontent-%COMP%]{display:flex;flex-direction:row;background-color:var(--mat-sys-surface-dim);gap:1em;flex:1;min-height:0}mat-card[_ngcontent-%COMP%]{box-shadow:var(--mat-sys-level2)}.news[_ngcontent-%COMP%]{display:flex;margin-top:1em;flex:1;flex-direction:column;min-height:0;overflow:hidden}.staff[_ngcontent-%COMP%]{display:flex;margin-top:1em;flex:.5;flex-direction:column;min-height:0;overflow:hidden}@media(max-width:740px){.staff[_ngcontent-%COMP%]{flex:1}}.staff[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]:last-child{margin-bottom:1em}.news-header[_ngcontent-%COMP%]{flex-shrink:0;justify-content:center;align-items:center;display:flex;background:var(--mat-sys-surface-variant);font-weight:400!important;font-size:x-large}.mock-news-boxes[_ngcontent-%COMP%]{margin:.8em;background-color:var(--mat-sys-surface-variant)}.news-text[_ngcontent-%COMP%]{margin:.3em}.news-title[_ngcontent-%COMP%]{font-size:medium;font-weight:700}.news-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex:1;min-height:0;overflow-y:auto;margin:0 0 1em;padding:0 .5em}.news-content[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]:last-child{margin-bottom:1em}mat-icon[_ngcontent-%COMP%]{margin-left:.5em}.mock-teachers[_ngcontent-%COMP%]{margin:.8em;display:flex;flex-direction:row;gap:.3em;align-items:center;justify-content:flex-start;background-color:var(--mat-sys-surface-variant)}.namn[_ngcontent-%COMP%]{font:var(--mat-sys-body-large)}"]})};function HB(t,i){if(t&1&&(m(0,"p",10),g(1),h()),t&2){let e=x(2);p(),oe(e.groupSignal().name)}}function UB(t,i){if(t&1){let e=Ae();m(0,"a",20),M("click",function(){let r=X(e).$implicit,o=x(2);return J(o.activeLink.set(r))})("keypress.enter",function(){let r=X(e).$implicit,o=x(2);return J(o.activeLink.set(r))}),g(1),h()}if(t&2){let e=i.$implicit,n=x(2);A("active",n.activeLink()===e),p(),de(" ",e," ")}}function zB(t,i){if(t&1){let e=Ae();m(0,"div",8)(1,"mat-card-header",9)(2,"span"),g(3),h(),j(4,HB,2,1,"p",10),T(5,"main-presence-container",11),h(),m(6,"div",12)(7,"child-display",13),M("attendanceChangeEvent",function(r){X(e);let o=x();return J(o.wsUpdateAttendance(r))}),Xe("childSignalChange",function(r){X(e);let o=x();return ke(o.childSignal,r)||(o.childSignal=r),J(r)})("dateSignalChange",function(r){X(e);let o=x();return ke(o.dateSignal,r)||(o.dateSignal=r),J(r)}),h()()(),m(8,"nav",14),De(9,UB,2,2,"a",15,zr),h(),m(11,"div",16),T(12,"information",17)(13,"main-live-journal",18),m(14,"history",19),Xe("childSignalChange",function(r){X(e);let o=x();return ke(o.childSignal,r)||(o.childSignal=r),J(r)}),h()()}if(t&2){let e=x();p(3),oe(e.childSignal().name),p(),H(e.groupSignal().name!=="alla"?4:-1),p(),A("filter",dr(e.childSignal().id)),p(2),Ke("childSignal",e.childSignal)("dateSignal",e.dateSignal),p(2),xe(e.links()),p(3),di(Hn("display:",e.activeLink()===e.links()[0]?"flex":"none")),A("childSignal",e.childSignal()),p(),di(Hn("display:",e.activeLink()===e.links()[1]?"flex":"none")),A("childSignal",e.childSignal())("groupSignal",e.groupSignal())("contentSignal",e.contentSignal()),p(),di(Hn("display:",e.activeLink()===e.links()[2]?"flex":"none")),Ke("childSignal",e.childSignal)}}function $B(t,i){if(t&1&&(m(0,"mat-card-header",9)(1,"span"),g(2),h(),m(3,"p",10),g(4),h(),T(5,"main-presence-container",21),h(),m(6,"mat-tab-group",22)(7,"mat-tab",23),T(8,"main-live-journal",18),h()()),t&2){let e=x();p(2),oe(e.groupSignal().name),p(2),oe(e.dateSignal()),p(),A("filter",dr(e.groupSignal().id)),p(2),A("label",dr(e.reportTitle())),p(),A("childSignal",e.childSignal())("groupSignal",e.groupSignal())("contentSignal",e.contentSignal())}}function WB(t,i){t&1&&T(0,"account-page",3)}function GB(t,i){t&1&&T(0,"homepage",4)}function qB(t,i){t&1&&(m(0,"mat-icon"),g(1,"arrow_forward_ios"),h())}function YB(t,i){t&1&&(m(0,"mat-icon"),g(1,"format_list_bulleted"),h())}var $s=class t{presence=c(Qi);childSignal=D({name:"",id:0,date:"",status:"NOT_SET",present:null});contentSignal=Ne.required();groupSignal=D({name:"",id:0});allGroups=D([]);groupService=c(yh);childList=nn.required(Vs);teachers=[{}];dateSignal=D("");activeLink=D("Information");links=D(["Information",this.childSignal().name+(this.childSignal().name.endsWith("s")?"":"s")+"dagsrapport","Historik"]);detachedListVisible=D(!1);viewportWidth=D(window.innerWidth);months=["Januari","Februari","Mars","April","Maj","Juni","Juli","Augusti","September","Oktober","November","December"];days=["S\xF6ndag","M\xE5ndag","Tisdag","Onsdag","Torsdag","Fredag","L\xF6rdag"];ngOnInit(){this.dateSignal.set(this.getDate()),this.loadGroups()}constructor(){nt(()=>{this.links.set(["Information",this.childSignal().name+(this.childSignal().name.endsWith("s")?"":"s")+" dagsrapport","Historik"])}),nt(()=>{this.contentSignal(),this.childSignal(),this.groupSignal(),this.activeLink.set("Information")})}reportTitle=mt(()=>{switch(this.contentSignal()){case"childView":return this.childSignal().name+"s dagsrapport";case"groupView":return this.groupSignal().name+"s dagsrapport";default:return"ERROR"}});getDate(){let i=new Date;return`${this.days[i.getDay()]} ${i.getDate()} ${this.months[i.getMonth()]} ${i.getFullYear()}`}loadGroups(){this.groupService.getGroups().subscribe({next:i=>{this.allGroups.set(i)}})}handleWebsocketMessage(i){this.childList().handleWebsocketMessage(i)}attendanceChangeEvent=new I;wsUpdateAttendance(i){this.attendanceChangeEvent.emit(i)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=E({type:t,selectors:[["main-panel"]],viewQuery:function(e,n){e&1&&Bn(n.childList,Vs,5),e&2&&jn()},inputs:{contentSignal:[1,"contentSignal"]},outputs:{contentSignal:"contentSignalChange",attendanceChangeEvent:"attendanceChangeEvent"},decls:13,vars:12,consts:[["tooltip","matTooltip"],[1,"main-card-content"],[1,"main-card-left"],[1,"account-page"],[1,"home-card"],[1,"main-card-right"],["tabindex","0",1,"main-card-right-hide-button",3,"click","keypress.enter","matTooltip"],[3,"groupSignalChange","childSignalChange","contentSignalChange","allGroupsChange","groupSignal","childSignal","contentSignal","allGroups"],[1,"sub-row"],[1,"title"],[1,"mini-spacer"],[3,"filter"],[1,"childDisplay"],[3,"attendanceChangeEvent","childSignalChange","dateSignalChange","childSignal","dateSignal"],["mat-tab-nav-bar","","mat-stretch-tabs","false","mat-align-tabs","start"],["mat-tab-link","","tabindex","0",3,"active"],["id","child-tab-content"],[3,"childSignal"],[3,"childSignal","groupSignal","contentSignal"],[3,"childSignalChange","childSignal"],["mat-tab-link","","tabindex","0",3,"click","keypress.enter","active"],["isGroup","yes",3,"filter"],["mat-stretch-tabs","false","mat-align-tabs","start"],[3,"label"]],template:function(e,n){if(e&1){let r=Ae();m(0,"mat-card")(1,"mat-card-content",1)(2,"div",2),j(3,zB,15,20),j(4,$B,9,9),j(5,WB,1,0,"account-page",3),j(6,GB,1,0,"homepage",4),h(),m(7,"mat-card",5)(8,"div",6,0),M("click",function(){return n.detachedListVisible.set(!n.detachedListVisible())})("keypress.enter",function(){return n.detachedListVisible.set(!n.detachedListVisible())}),j(10,qB,2,0,"mat-icon")(11,YB,2,0,"mat-icon"),h(),m(12,"main-child-list",7),Xe("groupSignalChange",function(a){return X(r),ke(n.groupSignal,a)||(n.groupSignal=a),J(a)})("childSignalChange",function(a){return X(r),ke(n.childSignal,a)||(n.childSignal=a),J(a)})("contentSignalChange",function(a){return X(r),ke(n.contentSignal,a)||(n.contentSignal=a),J(a)})("allGroupsChange",function(a){return X(r),ke(n.allGroups,a)||(n.allGroups=a),J(a)}),h()()()()}e&2&&(p(3),H(n.contentSignal()==="childView"?3:-1),p(),H(n.contentSignal()==="groupView"?4:-1),p(),H(n.contentSignal()==="teacherView"?5:-1),p(),H(n.contentSignal()==="homeView"?6:-1),p(),P("right-card-visible",n.detachedListVisible()),p(),A("matTooltip",n.detachedListVisible()?"G\xF6m n\xE4rvarolista":"Visa n\xE4rvarolista"),p(2),H(n.detachedListVisible()?10:11),p(2),Ke("groupSignal",n.groupSignal)("childSignal",n.childSignal)("contentSignal",n.contentSignal)("allGroups",n.allGroups))},dependencies:[Vs,Wi,dh,Ct,mn,un,bh,Ch,Ls,Uc,qf,Eh,Mh,xh,Yf,kb,Ab,Kt,Dt,Fs,Dr],styles:["[_nghost-%COMP%]{display:block;margin:0 auto;border-radius:12px;box-sizing:border-box;width:100%;height:100%}mat-card-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font:var(--mat-sys-headline-medium)}h2[_ngcontent-%COMP%]{margin-bottom:16px}mat-card[_ngcontent-%COMP%]{width:100%;height:100%}.main-card-content[_ngcontent-%COMP%]{display:flex;flex-direction:row;box-sizing:border-box;height:100%}.main-card-left[_ngcontent-%COMP%]{width:100%;height:100%;padding-right:2%;display:flex;flex-direction:column;flex:1.5}.main-card-right[_ngcontent-%COMP%]{width:100%;height:100%;min-width:fit-content;overflow-x:auto;display:flex;flex:1;min-width:30%;transition:.5s;overflow-x:visible}.main-card-right-hide-button[_ngcontent-%COMP%]{position:absolute;z-index:1001;width:3rem;height:3rem;left:-4rem;top:3rem;background-color:var(--mat-sys-primary-fixed-dim);color:var(--mat-sys-on-primary);border-radius:50%;display:flex;justify-content:center;align-items:center;display:none;cursor:pointer;box-shadow:var(--mat-sys-level3);border:0px solid var(--mat-sys-primary-fixed);box-sizing:border-box;transition:.1s}.main-card-right-hide-button[_ngcontent-%COMP%]:hover{border:2px solid var(--mat-sys-primary-fixed)}.main-card-right-hide-button[_ngcontent-%COMP%] > mat-icon[_ngcontent-%COMP%]{font-size:2rem;width:fit-content;height:fit-content}@media(max-width:1250px){.main-card-right[_ngcontent-%COMP%]{height:90%;top:5%;position:fixed;right:-30rem;width:30rem;box-sizing:border-box;z-index:1000;box-shadow:var(--mat-sys-level3);border-radius:1em}.right-card-visible[_ngcontent-%COMP%]{right:0}.main-card-right-hide-button[_ngcontent-%COMP%]{display:flex}.main-card-left[_ngcontent-%COMP%]{padding-right:0}}mat-card-header[_ngcontent-%COMP%]{flex:.15}.childDisplay[_ngcontent-%COMP%]{box-shadow:var(--mat-sys-level1);display:flex;flex-direction:row;justify-content:center;align-items:center;background:var(--mat-sys-inverse-primary);border-radius:12px;max-width:fit-content}mat-tab-group[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:column;min-height:0}  .mat-mdc-tab-body-wrapper{flex:1;min-height:0}  .mat-mdc-tab-body-content{height:100%;overflow:hidden}  .mat-mdc-form-field-flex{height:100%}  .mat-mdc-form-field-infix{height:100%}main-live-journal[_ngcontent-%COMP%]{flex:4}.spacer[_ngcontent-%COMP%]{flex:1 1 auto}  .mat-mdc-form-field-subscript-wrapper{display:none}.title[_ngcontent-%COMP%]{text-wrap:nowrap;margin-bottom:1em}main-presence-container[_ngcontent-%COMP%]{margin-left:1em}.mini-spacer[_ngcontent-%COMP%]{margin:1em}.sub-row[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;align-items:center}@media(max-width:1250px){.sub-row[_ngcontent-%COMP%]{flex-direction:column;align-items:start}}.home-card[_ngcontent-%COMP%]{display:flex;flex:1}.account-page[_ngcontent-%COMP%]{flex:1}#child-tab-content[_ngcontent-%COMP%]{width:100%;height:100%;display:flex}.main-card-left[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{box-shadow:var(--mat-sys-level1)}"]})};var QB=["*",[["mat-toolbar-row"]]],ZB=["*","mat-toolbar-row"],KB=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=N({type:t,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return t})(),Sh=(()=>{class t{_elementRef=c(B);_platform=c(me);_document=c(Y);color;_toolbarRows;constructor(){}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=E({type:t,selectors:[["mat-toolbar"]],contentQueries:function(n,r,o){if(n&1&&bt(o,KB,5),n&2){let a;R(a=O())&&(r._toolbarRows=a)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(n,r){n&2&&(kt(r.color?"mat-"+r.color:""),P("mat-toolbar-multiple-rows",r._toolbarRows.length>0)("mat-toolbar-single-row",r._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:ZB,decls:2,vars:0,template:function(n,r){n&1&&(Se(QB),te(0),te(1,1))},styles:[`.mat-toolbar {
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
`],encapsulation:2,changeDetection:0})}return t})();var uI=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=$({type:t});static \u0275inj=z({imports:[ve]})}return t})();var mI=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=$({type:t});static \u0275inj=z({imports:[Zn,ve,Zn]})}return t})();var Ih=class t{baseUrl=`${st.apiUrl}/api/chat`;historyUrl=`${this.baseUrl}/history`;http=c(yt);socketService=c(gn);getHistory(i,e){let n=new Lt().set("senderId",i).set("recipientId",e);return this.http.get(this.historyUrl,{params:n})}createChatRoomId(i,e){let n=Math.min(i,e),r=Math.max(i,e);return`chat:${n}:${r}`}createLocalDateTime(){return new Date().toISOString().replace("Z","")}static \u0275fac=function(e){return new(e||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})};var JB=["chatViewDisplay"],ej=(t,i)=>i.name,tj=(t,i)=>i.timestamp;function nj(t,i){t&1&&(m(0,"mat-icon"),g(1,"arrow_forward_ios"),h())}function ij(t,i){t&1&&(m(0,"mat-icon"),g(1,"chat"),h())}function rj(t,i){if(t&1&&(m(0,"span",11)(1,"b"),g(2),h()()),t&2){let e=x(2).$implicit;p(2),oe(e.name)}}function oj(t,i){if(t&1&&(m(0,"span",11),g(1),h()),t&2){let e=x(2).$implicit;p(),de(" ",e.name," ")}}function aj(t,i){if(t&1){let e=Ae();m(0,"button",9),M("click",function(){X(e);let r=x().$implicit,o=x(2);return J(o.onSelectTeacher(r))}),m(1,"div",10),g(2),h(),j(3,rj,3,1,"span",11)(4,oj,2,1,"span",11),h()}if(t&2){let e=x().$implicit,n=x(2);p(),di(Hn("background-color: ",e.color)),p(),de(" ",e.name.substring(0,1)," "),p(),H(n.inUnread(e.id)?3:4)}}function sj(t,i){if(t&1&&j(0,aj,5,5,"button",8),t&2){let e=i.$implicit,n=x(2);H(e.id!==n.userId?0:-1)}}function lj(t,i){if(t&1&&(m(0,"mat-action-list",6),De(1,sj,1,1,null,null,ej),h()),t&2){let e=x();p(),xe(e.users())}}function cj(t,i){if(t&1&&(m(0,"span",27),g(1),h()),t&2){let e,n=x().$implicit,r=x(2);P("msgSelf",n.senderId===r.userId),p(),oe(n.senderId===r.userId?"Du":(e=r.selectedTeacher())==null?null:e.name)}}function dj(t,i){if(t&1&&(m(0,"span",28),g(1),h()),t&2){let e=x().$implicit,n=x(2);P("msgSelf",e.senderId===n.userId),p(),oe(n.convertDate(e.timestamp))}}function uj(t,i){if(t&1&&(m(0,"div",23),j(1,cj,2,3,"span",24),j(2,dj,2,3,"span",25),m(3,"div",26),g(4),h()()),t&2){let e=i.$implicit,n=i.$index,r=x(2);P("msgSelf",e.senderId===r.userId),p(),H(n===0||n>0&&r.messages()[n-1].senderId!==e.senderId?1:-1),p(),H(n===0||n>0&&r.messages()[n-1].senderId!==e.senderId||n>0&&r.deltaTimeMinutes(e.timestamp,r.messages()[n-1].timestamp)>r.minutesBeforeNewDate?2:-1),p(),P("msgSelf",e.senderId===r.userId),p(),de(" ",e.chatMessage," ")}}function mj(t,i){if(t&1){let e=Ae();m(0,"mat-card",7),Fa(function(){X(e);let r=x();return J(r.enterClass())}),m(1,"mat-card-header",12)(2,"mat-card-title")(3,"div",13)(4,"button",14),M("click",function(){X(e);let r=x();return J(r.returnToOverview())}),m(5,"mat-icon"),g(6,"keyboard_return"),h()()(),m(7,"div",15),g(8),h(),T(9,"div",16),h()(),m(10,"div",17,1),De(12,uj,5,7,"div",18,tj),T(14,"div",19),h(),m(15,"mat-card",20)(16,"mat-form-field")(17,"input",21),Xe("ngModelChange",function(r){X(e);let o=x();return ke(o.newMessage,r)||(o.newMessage=r),J(r)}),M("keyup.enter",function(){X(e);let r=x();return J(r.submitMessage())}),h()(),m(18,"button",22),M("click",function(){X(e);let r=x();return J(r.submitMessage())}),m(19,"mat-icon"),g(20,"send"),h()()()()}if(t&2){let e,n=x();p(4),A("matTooltip","Kontaktlista"),p(4),de(" ",(e=n.selectedTeacher())==null?null:e.name," "),p(4),xe(n.messages()),p(5),Ke("ngModel",n.newMessage),p(),A("matTooltip","Skicka meddelande")}}var fI=!1,Th=class t{chatService=c(Ih);websocketService=c(gn);userService=c(lo);subs=new ae;userId=Number(sessionStorage.getItem("UserId"));users=D([]);selectedTeacher=D(null);messages=D([]);newMessage=Ne("");minutesBeforeNewDate=3;viewState=D("overview");unread=[];chatView=null;set content(i){console.log(i),this.chatView=i,this.chatView&&(this.chatView.nativeElement.scrollTop=this.chatView.nativeElement.scrollHeight)}messageNotificationSound=new Audio("message.ogg");enterClass=D("enter-animation");chatVisible=D(!1);doShakeAnimation=D(!1);async ngOnInit(){this.messageNotificationSound.load(),await this.websocketService.ensureConnected(),this.subs.add(this.userService.getUsers().subscribe(i=>{this.users.set(i)})),this.subs.add(this.websocketService.getMessages("chatMessages").subscribe(i=>{this.handleMessage(i)})),this.subs.add(this.websocketService.getMessages("notifications").subscribe(i=>{this.handleNotification(i)}))}ngOnDestroy(){this.subs.unsubscribe()}onSelectTeacher(i){this.selectedTeacher.set(i),this.viewState.set("chat");let e=i.id??i.userId;this.messages.set([]),this.subs.add(this.chatService.getHistory(this.userId,e).subscribe({next:n=>this.messages.set(n),error:()=>this.messages.set([])})),this.websocketService.setChatRoom(this.chatService.createChatRoomId(this.userId,e)),this.newMessage.set(this.selectedTeacher()?.storedMessage??""),this.unread=this.unread.filter(n=>n.senderId!==e),this.chatView!=null&&(this.chatView.nativeElement.scrollTop=this.chatView.nativeElement.scrollHeight),fI&&console.log(i)}onSelectAll(){this.viewState.set("chat")}returnToOverview(){this.viewState.set("overview"),this.selectedTeacher()!=null&&this.selectedTeacher.update(i=>(i.storedMessage=this.newMessage(),i)),this.selectedTeacher.set(null)}submitMessage(){let i=this.selectedTeacher();if(i==null||i==null||this.newMessage()=="")return;let e={senderId:this.userId,recipientId:i.id??i.userId,chatMessage:this.newMessage(),timestamp:this.chatService.createLocalDateTime()};this.websocketService.sendChatMessage(e),this.messages.update(n=>[...n,e]),this.newMessage.set("")}handleMessage(i){this.messages.update(e=>[...e,i]),fI&&console.log(i)}handleNotification(i){console.log(i.senderId,this.selectedTeacher()?.id),i.senderId!==this.selectedTeacher()?.id?(this.unread.push(i),this.doShakeAnimation.set(!0),console.log("SHOULD ANIMATE"),this.messageNotificationSound.play()):this.messageNotificationSound.play()}convertDate(i){let e=new Date(i);return new Date(e.getTime()-new Date().getTimezoneOffset()*6e4).toLocaleString("sv-SE",{timeZone:Intl.DateTimeFormat().resolvedOptions().timeZone,hour:"2-digit",minute:"2-digit",day:"2-digit",month:"2-digit",year:"numeric"})}deltaTimeMinutes(i,e){let n=new Date(i),r=new Date(e);return Math.abs((r.getTime()-n.getTime())/6e4)}inUnread(i){return console.log("InUnread",i,this.unread),console.log(this.unread.find(e=>e.senderId==i)!=null),this.unread.find(e=>e.senderId==i)!=null}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=E({type:t,selectors:[["main-chat-hub"]],viewQuery:function(e,n){if(e&1&&we(JB,5),e&2){let r;R(r=O())&&(n.content=r.first)}},hostVars:2,hostBindings:function(e,n){e&2&&P("chat-visible",n.chatVisible())},inputs:{newMessage:[1,"newMessage"]},outputs:{newMessage:"newMessageChange"},decls:13,vars:5,consts:[["tooltip","matTooltip"],["chatViewDisplay",""],["tabindex","0",1,"chat-hide-button",3,"animationend","click","keydown.space","keydown.enter","matTooltip"],["appearance","outlined"],["id","chatHubHeader",1,"cardHeader"],[2,"width","0.5em"],[1,"list-class"],["id","chatView"],["mat-list-item","",1,"teacherSelector"],["mat-list-item","",1,"teacherSelector",3,"click"],[1,"chatAvatar"],["matListItemTitle",""],["id","chatViewHeader",1,"cardHeader"],["id","chatViewTitleLeft"],["matIconButton","button",3,"click","matTooltip"],["id","chatViewTitleRight"],["id","chatViewTitleSpacer"],["id","chatViewDisplay"],[1,"chatMessageContainer",3,"msgSelf"],["id","scrollAnchor"],["id","chatViewFooter"],["matInput","","type","text",3,"ngModelChange","keyup.enter","ngModel"],["matInput","","type","button","matIconButton","button",3,"click","matTooltip"],[1,"chatMessageContainer"],[1,"chatMessageHeader",3,"msgSelf"],[1,"chatMessageDate",2,"font-size","0.8em","font-weight","normal",3,"msgSelf"],[1,"chatMessage"],[1,"chatMessageHeader"],[1,"chatMessageDate",2,"font-size","0.8em","font-weight","normal"]],template:function(e,n){e&1&&(m(0,"div",2,0),M("animationend",function(){return n.doShakeAnimation.set(!1)})("click",function(){return n.chatVisible.set(!n.chatVisible())})("keydown.space",function(){return n.chatVisible.set(!n.chatVisible())})("keydown.enter",function(){return n.chatVisible.set(!n.chatVisible())}),j(2,nj,2,0,"mat-icon")(3,ij,2,0,"mat-icon"),h(),m(4,"mat-card",3)(5,"mat-card-header",4)(6,"mat-card-title")(7,"mat-icon"),g(8,"chat"),h(),T(9,"span",5),g(10,"Chatt"),h()(),j(11,lj,3,0,"mat-action-list",6)(12,mj,21,4,"mat-card",7),h()),e&2&&(P("animShake",n.doShakeAnimation()),A("matTooltip",n.chatVisible()?"D\xF6lj chatt":"Visa chatt"),p(2),H(n.chatVisible()?2:3),p(9),H(n.viewState()==="overview"?11:n.viewState()==="chat"?12:-1))},dependencies:[uh,zi,Qn,Xt,Rt,Kr,fn,Yn,vr,Ot,Wn,Ct,mn,ds,Kt,Dt,Fs,Dr],styles:["[_nghost-%COMP%]{position:fixed;display:flex;flex-direction:column;background-color:#0000;width:30vw;max-height:60vh;min-height:30vh;right:-30vw;bottom:2vh;z-index:1000;transition:right .4s,width .4s}@media(max-width:850px){[_nghost-%COMP%]{width:50vw;right:-50vw}}.chat-visible[_nghost-%COMP%]{right:1vw}mat-card[_ngcontent-%COMP%]{width:100%;height:100%;display:inherit;min-height:0;bottom:0;flex:3;transition:height 1s}mat-action-list[_ngcontent-%COMP%]{width:100%;height:100%;min-height:30vh;max-height:50vh;overflow-y:scroll;transition:height 1s;background-color:var(--mat-sys-surface);box-shadow:0;padding:0;border-radius:var(--mat-sys-corner-medium)}mat-action-list[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]{width:100%;padding:.5em;color:var(--mat-sys-on-surface);border-bottom:2px solid var(--mat-sys-surface-container-highest);cursor:pointer;box-sizing:border-box}mat-action-list[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]:last-child{border-bottom:0}input[_ngcontent-%COMP%]{height:1em}.chatAvatar[_ngcontent-%COMP%]{padding:.5em;width:1em;height:1em;text-align:center;vertical-align:top;border-radius:var(--mat-sys-corner-full);color:var(--mat-sys-on-primary);margin-right:1em;display:flex;align-items:center;justify-content:center}.teacherSelector[_ngcontent-%COMP%]{display:flex;flex-direction:row;vertical-align:middle;align-items:center}button[_ngcontent-%COMP%]:hover{font-weight:700}#chatView[_ngcontent-%COMP%]{display:flex;width:100%;flex-direction:column}#chatView[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]{margin:0}#chatViewTitleLeft[_ngcontent-%COMP%], #chatViewTitleSpacer[_ngcontent-%COMP%]{flex:1;height:100%;width:100%;font-size:.5rem;display:flex;padding:.2em}#chatViewTitleRight[_ngcontent-%COMP%]{flex:5;height:100%;width:100%;display:flex;justify-content:center;font-size:1rem;text-wrap:nowrap}.cardHeader[_ngcontent-%COMP%]{padding-bottom:16px}.cardHeader[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center}#chatHubHeader[_ngcontent-%COMP%]{background-color:var(--mat-sys-tertiary);color:var(--mat-sys-on-tertiary)}#chatViewHeader[_ngcontent-%COMP%]{flex:1;flex-direction:row;justify-content:center;padding:0;background-color:var(--mat-sys-surface-container-highest);margin:.1em}  #chatViewHeader>.mat-mdc-card-header-text{width:100%}#chatViewHeader[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%]{flex:1;flex-direction:row;justify-content:start;width:100%}#chatViewDisplay[_ngcontent-%COMP%]{flex:5;min-height:30vh;max-height:30vh;overflow-y:scroll}#chatViewFooter[_ngcontent-%COMP%]{display:flex;flex:2;flex-direction:row;overflow:clip;align-items:center}#chatViewFooter[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{border-radius:var(--mat-sys-corner-medium);flex:5;margin:.25em}#chatViewFooter[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border-radius:var(--mat-sys-corner-medium);width:100%;height:100%}#chatViewFooter[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{flex:1;height:100%;transition:.1s;display:flex;align-items:center;justify-content:center;border:1px solid var(--mat-sys-outline-variant)}#chatViewFooter[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:var(--mat-sys-tertiary-container)}  .mat-mdc-text-field-wrapper.mdc-text-field.mdc-text-field--filled.mdc-text-field--no-label{border-radius:var(--mat-sys-corner-small)}.chatMessageContainer[_ngcontent-%COMP%]{display:flex;flex-direction:column}.chatMessageContainer.msgSelf[_ngcontent-%COMP%]{align-items:end}.chatMessageHeader[_ngcontent-%COMP%]{font-family:var(--mat-sys-body-small);font-weight:500;margin-left:.75em;margin-top:.5em}.chatMessageHeader.msgSelf[_ngcontent-%COMP%]{font-weight:400;margin-left:0;margin-right:.75em;text-align:right}.chatMessageDate[_ngcontent-%COMP%]{font-family:var(--mat-sys-body-small);font-weight:300;margin-left:.75em;margin-top:0}.chatMessageDate.msgSelf[_ngcontent-%COMP%]{margin-left:0;margin-right:.75em;text-align:right}.chatMessage[_ngcontent-%COMP%]{background-color:var(--mat-sys-primary-container);margin-left:.5em;margin-right:2.5em;border-radius:var(--mat-sys-corner-medium);padding:.5em;box-sizing:border-box;margin-bottom:.5em;width:fit-content;max-width:80%;height:fit-content;text-wrap:wrap;word-wrap:break-word}.chatMessage.msgSelf[_ngcontent-%COMP%]{flex-direction:row-reverse;text-align:right;background-color:var(--mat-sys-tertiary-container);margin-right:.5em;margin-left:2.5em}#chatViewDisplay[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{overflow-anchor:none}#chatViewDisplay[_ngcontent-%COMP%]   #scrollAnchor[_ngcontent-%COMP%]{overflow-anchor:auto;height:1em}.chat-hide-button[_ngcontent-%COMP%]{position:absolute;z-index:1001;width:3rem;height:3rem;left:-4rem;top:3rem;background-color:var(--mat-sys-tertiary);color:var(--mat-sys-on-tertiary);border-radius:50%;display:flex;justify-content:center;align-items:center;cursor:pointer;box-shadow:var(--mat-sys-level3);border:0px solid var(--mat-sys-primary-fixed);box-sizing:border-box;transition:.1s}.chat-hide-button[_ngcontent-%COMP%]:hover{border:2px solid var(--mat-sys-primary-fixed)}.chat-hide-button[_ngcontent-%COMP%] > mat-icon[_ngcontent-%COMP%]{font-size:2rem;width:fit-content;height:fit-content}.enter-animation[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_slide-fade .2s}@keyframes _ngcontent-%COMP%_slide-fade{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}.animShake[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_shake .5s}@keyframes _ngcontent-%COMP%_shake{0%{transform:rotate(0) scale(1)}20%{transform:rotate(-20deg) scale(1.1)}40%{transform:rotate(20deg) scale(1.2)}60%{transform:rotate(-45deg) scale(1.1)}80%{transform:rotate(45deg) scale(1)}to{transform:rotate(0) scale(1)}}"]})};var kh=class t{groupSignal=D({name:"",id:0});allGroups=D([]);contentSignal=D("");presence=c(Qi);socketService=c(gn);mainPanel=nn.required($s);async ngOnInit(){this.contentSignal.set("homeView"),this.socketService.connect(`${st.wsUrl}/ws`),await this.socketService.ensureConnected(),this.presence.init(),this.socketService.setAttendanceRoom("ALL"),this.socketService.getMessages("attendanceMessages").subscribe(i=>{if(!("childId"in i)){console.error("Attendance message with incorrect body!");return}console.log(i),this.handleWebsocketMessage(i)})}ngOnDestroy(){this.socketService.leaveJournalRoom()}handleWebsocketMessage(i){this.mainPanel().handleWebsocketMessage(i)}wsUpdateAttendance(i){this.socketService.sendAttendanceUpdate(i)}onTabChange(i){let e=i.index,n=this.allGroups()[e];this.contentSignal.set("groupView"),this.groupSignal.set(n),this.presence.spoofTeacherUpdate()}logout(){document.cookie='jwtToken=""',sessionStorage.removeItem("token"),sessionStorage.removeItem("UserId"),sessionStorage.removeItem("role"),this.socketService.disconnect(),window.location.reload()}minaSidor(){this.contentSignal.set("teacherView")}hem(){this.contentSignal.set("homeView")}hover(i){console.log(i)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=E({type:t,selectors:[["main-page"]],viewQuery:function(e,n){e&1&&Bn(n.mainPanel,$s,5),e&2&&jn()},decls:15,vars:1,consts:[[1,"main-nav"],["color","mat-sys-primary"],["id","navLogo","src","Kindguardlogo.png","alt","Logo"],["role","button",1,"button-19"],["matButton","tonal",1,"mina-sidor-button",3,"click"],["matButton","tonal",3,"click"],[1,"example-spacer"],["matButton","tonal",1,"logout-button",3,"click"],[1,"main-body"],[1,"main-panel-container"],[3,"attendanceChangeEvent","contentSignalChange","contentSignal"]],template:function(e,n){e&1&&(m(0,"div",0)(1,"mat-toolbar",1),T(2,"img",2),m(3,"div",3)(4,"button",4),M("click",function(){return n.minaSidor()}),g(5,"Mina sidor"),h()(),m(6,"button",5),M("click",function(){return n.hem()}),g(7,"Hem"),h(),T(8,"span",6),m(9,"button",7),M("click",function(){return n.logout()}),g(10,"Logout"),h()()(),m(11,"div",8),T(12,"main-chat-hub"),m(13,"div",9)(14,"main-panel",10),M("attendanceChangeEvent",function(o){return n.wsUpdateAttendance(o)}),Xe("contentSignalChange",function(o){return ke(n.contentSignal,o)||(n.contentSignal=o),o}),h()()()),e&2&&(p(14),Ke("contentSignal",n.contentSignal))},dependencies:[uI,Sh,$s,mI,ht,Wt,Th],styles:["[_nghost-%COMP%]{background-color:var(--mat-sys-surface);width:100%;height:100%;display:flex}mat-toolbar[_ngcontent-%COMP%]{background:linear-gradient(90deg,var(--mat-sys-inverse-primary) 30%,var(--mat-sys-tertiary) 100%);color:var(--mat-sys-primary-on-surface);display:flex;align-items:center;position:fixed}mat-tab-group[_ngcontent-%COMP%]{height:100%}mat-tab[_ngcontent-%COMP%]{height:100%}.example-spacer[_ngcontent-%COMP%]{flex:1 1 auto}  .mat-mdc-tab{background-color:var(--mat-sys-surface-container);border-radius:5px;box-shadow:var(--mat-sys-level1)}  .mdc-tab--active{background-color:var(--mat-sys-surface-container);border-radius:5px;box-shadow:var(--mat-sys-level3)}  .mat-mdc-tab-body-wrapper{height:100%}.main-body[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:100%;width:100%}.main-panel-container[_ngcontent-%COMP%]{width:85%;height:80%}.mina-sidor-button[_ngcontent-%COMP%]{margin:2em}#navLogo[_ngcontent-%COMP%]{width:8em;height:auto}"]})};var Ah=t=>{let i=t.url.join(""),e=c(dn),r=c(Ts).getRole();switch(i){case"":return r?r==="ADMIN"?e.parseUrl("/admin"):e.parseUrl("/app"):!0;case"app":return r?r==="ADMIN"?e.parseUrl("/admin"):!0:e.parseUrl("/");case"admin":return r?r!=="ADMIN"?e.parseUrl("/app"):!0:e.parseUrl("/");default:return!1}};var Zi=class t{adminUrl=`${st.apiUrl}/api/admin`;userUrl=`${st.apiUrl}/api/user`;http=c(yt);getChildren(){return this.http.get(`${this.adminUrl}/children`)}getGroups(){return this.http.get(`${this.adminUrl}/groups`)}createChild(i){return this.http.post(`${this.adminUrl}/child`,{name:i})}createGroup(i){return this.http.post(`${this.adminUrl}/group`,{name:i})}deleteChild(i){return this.http.delete(`${this.adminUrl}/child/${i}`)}assignChildToGroup(i,e){return this.http.put(`${this.adminUrl}/group/${i}/child/${e}`,{})}activateUser(i){return this.http.put(`${this.adminUrl}/user/${i}`,{})}inactivateUser(i){return this.http.put(`${this.adminUrl}/user/${i}/inactive`,{})}getInactiveUsers(){return this.http.get(`${this.adminUrl}/users/inactive`)}getAllTeachers(){return this.http.get(`${this.userUrl}/teachers`)}static \u0275fac=function(e){return new(e||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})};var fj=(t,i)=>i.id;function hj(t,i){if(t&1&&(m(0,"mat-option",4),g(1),h()),t&2){let e=i.$implicit;A("value",e.id),p(),oe(e.name)}}var ed=class t{fb=c(Hf);adminService=c(Zi);groups=D([]);children=D([]);form=this.fb.group({firstName:["",vi.required],lastName:["",vi.required],groupId:[null]});childAdded=new I;ngOnInit(){this.loadGroups()}loadGroups(){this.adminService.getGroups().subscribe({next:i=>this.groups.set(i),error:i=>console.error(i)})}onSubmit(){if(this.form.valid){let i=`${this.form.value.firstName} ${this.form.value.lastName}`;this.adminService.createChild(i).subscribe({next:e=>{this.form.value.groupId?this.adminService.assignChildToGroup(this.form.value.groupId,e.id).subscribe({next:()=>{this.childAdded.emit(),this.form.reset()}}):(this.childAdded.emit(),this.form.reset())},error:e=>console.error(e)})}}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=E({type:t,selectors:[["add-child-form"]],outputs:{childAdded:"childAdded"},decls:17,vars:2,consts:[[1,"form-container",3,"ngSubmit","formGroup"],["matInput","","formControlName","firstName"],["matInput","","formControlName","lastName"],["formControlName","groupId"],[3,"value"],["mat-raised-button","","color","mat-sys-primary","type","submit",3,"disabled"]],template:function(e,n){e&1&&(m(0,"form",0),M("ngSubmit",function(){return n.onSubmit()}),m(1,"mat-form-field")(2,"mat-label"),g(3,"Namn"),h(),T(4,"input",1),h(),m(5,"mat-form-field")(6,"mat-label"),g(7,"Efternamn"),h(),T(8,"input",2),h(),m(9,"mat-form-field")(10,"mat-label"),g(11,"Grupp"),h(),m(12,"mat-select",3),De(13,hj,2,2,"mat-option",4,fj),h()(),m(15,"button",5),g(16," L\xE4gg till barn "),h()()),e&2&&(A("formGroup",n.form),p(13),xe(n.groups()),p(2),A("disabled",n.form.invalid))},dependencies:[Uf,jf,fn,Yn,Lf,br,Bc,Ot,Rt,qn,Qn,Xt,ht,Wt,Os,Xn,io,no],styles:[".form-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;gap:8px}"]})};var Rh=class t{dialogRef=c(la);onConfirm(){this.dialogRef.close(!0)}onDeny(){this.dialogRef.close(!1)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=E({type:t,selectors:[["delete-confirmation-dialog"]],decls:8,vars:0,consts:[[1,"flex-with-style"],[1,"top-text"],[1,"button-group"],[1,"button",3,"click"]],template:function(e,n){e&1&&(Ce(0,"div",0)(1,"p",1),g(2," \xC4r du s\xE4ker p\xE5 att du vill ta bort barnet? "),Me(),Ce(3,"li",2)(4,"button",3),Vn("click",function(){return n.onConfirm()}),g(5," Ja "),Me(),Ce(6,"button",3),Vn("click",function(){return n.onDeny()}),g(7," Nej "),Me()()())},dependencies:[lh,ht],styles:["[_nghost-%COMP%]{display:block;text-align:center;padding:8px}.top-text[_ngcontent-%COMP%]{font:var(--mat-sys-title-medium)}.button-group[_ngcontent-%COMP%]{display:flex;justify-content:center;gap:32px}.button[_ngcontent-%COMP%]{padding:8px 32px;font:var(--mat-sys-label-small);font-weight:700;cursor:pointer;border-radius:4px;transition:all .2s ease-in-out;background-color:var(--mat-sys-primary);color:var(--mat-sys-on-primary);border:1px solid}button[_ngcontent-%COMP%]:hover{background-color:var(--mat-sys-primary-fixed-dim)}"]})};var hI=(t,i)=>i.id;function pj(t,i){if(t&1&&(m(0,"mat-option",6),g(1),h()),t&2){let e=i.$implicit;A("value",e.id),p(),oe(e.name)}}function gj(t,i){t&1&&T(0,"mat-divider")}function _j(t,i){if(t&1){let e=Ae();m(0,"mat-list-item")(1,"span",3),g(2),h(),m(3,"div",4)(4,"mat-select",5,0),M("selectionChange",function(r){let o=X(e).$implicit,a=cn(5),s=x();return J(s.onMove(o,r.value,a))}),De(6,pj,2,2,"mat-option",6,hI),h(),m(8,"button",7),M("click",function(){let r=X(e).$implicit,o=x();return J(o.onDelete(r))}),m(9,"mat-icon"),g(10,"cancel"),h()()()(),j(11,gj,1,0,"mat-divider")}if(t&2){let e=i.$implicit,n=i.$index,r=i.$count,o=x();p(2),cr(" ",e.name," - ",(e.group==null?null:e.group.name)??"Ingen grupp"," "),p(4),xe(o.groups()),p(5),H(n!==r-1?11:-1)}}var td=class t{adminService=c(Zi);dialog=c(Yc);groups=D([]);children=D([]);childGroupChanged=new I;childDeleted=new I;ngOnInit(){this.loadChildren(),this.loadGroups()}loadGroups(){this.adminService.getGroups().subscribe({next:i=>this.groups.set(i),error:i=>console.error(i)})}loadChildren(){this.adminService.getChildren().subscribe({next:i=>this.children.set([...i].sort((e,n)=>e.name.localeCompare(n.name))),error:i=>console.log("Error",i)})}onDelete(i){this.dialog.open(Rh).afterClosed().subscribe(n=>{n&&this.adminService.deleteChild(i.id).subscribe({next:()=>{this.children.set(this.children().filter(r=>r.id!==i.id)),this.loadChildren(),this.childDeleted.emit()},error:r=>console.error(r)})})}onMove(i,e,n){n.value=null,this.adminService.assignChildToGroup(e,i.id).subscribe({next:()=>{this.loadChildren(),n.value=null,this.childGroupChanged.emit()},error:r=>console.error(r)})}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=E({type:t,selectors:[["child-admin-list"]],outputs:{childGroupChanged:"childGroupChanged",childDeleted:"childDeleted"},decls:6,vars:1,consts:[["groupSelect","matSelect"],[1,"antal-barn"],[1,"child-admin-list-container"],["matListItemTitle",""],["matListItemMeta","",1,"move-container"],[1,"move-symbol",3,"selectionChange"],[3,"value"],["matListItemMeta","","mat-icon-button","","color","warn",3,"click"]],template:function(e,n){e&1&&(m(0,"span",1),g(1),h(),m(2,"div",2)(3,"mat-list"),De(4,_j,12,3,null,null,hI),h()()),e&2&&(p(),de("Antal barn: ",n.children().length),p(3),xe(n.children()))},dependencies:[$r,ht,zi,ao,Ps,oo,an,wr,ca,Kt,Dt,io,no,Xn],styles:[".child-admin-list-container[_ngcontent-%COMP%]{display:block;max-height:200px;overflow-y:auto;background:#f5f5f5;border-radius:12px}mat-list-item[_ngcontent-%COMP%]{height:auto!important}.example-spacer[_ngcontent-%COMP%]{flex:1 1 auto}.move-container[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px}.move-symbol[_ngcontent-%COMP%]{width:200px}.antal-barn[_ngcontent-%COMP%]{font-weight:500;font-size:20px}"]})};var vj=(t,i)=>i.id;function bj(t,i){t&1&&T(0,"mat-divider")}function yj(t,i){if(t&1&&(m(0,"mat-list-item")(1,"span",4),g(2),h()(),j(3,bj,1,0,"mat-divider")),t&2){let e=i.$implicit,n=i.$index,r=i.$count,o=x();p(2),cr(" ",e.name," (",o.childCount(e.id)," barn)"),p(),H(n!==r-1?3:-1)}}var nd=class t{adminService=c(Zi);fb=c(Hf);form=this.fb.group({groupName:["",vi.required]});groups=D([]);children=D([]);groupCreated=new I;ngOnInit(){this.loadGroups(),this.loadChildren()}loadGroups(){this.adminService.getGroups().subscribe({next:i=>this.groups.set(i),error:i=>console.error(i)})}loadChildren(){this.adminService.getChildren().subscribe({next:i=>this.children.set(i),error:i=>console.log("Error",i)})}childCount(i){return this.children().filter(e=>e.group?.id==i).length}onCreateGroup(){this.form.valid&&this.adminService.createGroup(this.form.value.groupName).subscribe({next:()=>{this.loadGroups(),this.groupCreated.emit(),this.form.reset()},error:i=>console.error(i)})}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=E({type:t,selectors:[["group"]],outputs:{groupCreated:"groupCreated"},decls:11,vars:2,consts:[[1,"group-container"],[3,"ngSubmit","formGroup"],["matInput","","formControlName","groupName"],["mat-raised-button","","color","mat-sys-primary","type","submit",3,"disabled"],["matListItemTitle",""]],template:function(e,n){e&1&&(m(0,"div",0)(1,"mat-list"),De(2,yj,4,3,null,null,vj),h()(),m(4,"form",1),M("ngSubmit",function(){return n.onCreateGroup()}),m(5,"mat-form-field")(6,"mat-label"),g(7,"Ny grupp"),h(),T(8,"input",2),h(),m(9,"button",3),g(10," Skapa ny grupp "),h()()),e&2&&(p(2),xe(n.groups()),p(2),A("formGroup",n.form),p(5),A("disabled",n.form.invalid))},dependencies:[ao,Ps,oo,an,wr,Ot,Rt,qn,Qn,Xt,ht,Wt,Uf,jf,fn,Yn,Lf,br,Bc,Wi],styles:[".group-container[_ngcontent-%COMP%]{display:block;max-height:200px;overflow-y:auto;background:#f5f5f5;border-radius:12px}"]})};var Cj=(t,i)=>i.id;function wj(t,i){if(t&1){let e=Ae();m(0,"button",3),M("click",function(){X(e);let r=x().$implicit,o=x();return J(o.inactivateUser(r.id))}),m(1,"mat-icon"),g(2,"cancel"),h(),g(3," Inaktivera "),h()}}function Dj(t,i){if(t&1){let e=Ae();m(0,"button",3),M("click",function(){X(e);let r=x().$implicit,o=x();return J(o.activateUser(r.id))}),m(1,"mat-icon"),g(2,"check"),h(),g(3," Aktivera "),h()}}function xj(t,i){t&1&&T(0,"mat-divider")}function Ej(t,i){if(t&1&&(m(0,"mat-list-item")(1,"span",1),g(2),h(),j(3,wj,4,0,"button",2),j(4,Dj,4,0,"button",2),h(),j(5,xj,1,0,"mat-divider")),t&2){let e=i.$implicit,n=i.$index,r=i.$count;p(2),de(" ",e.name," "),p(),H(e.active?3:-1),p(),H(e.active?-1:4),p(),H(n!==r-1?5:-1)}}var Oh=class t{allUsers=D([]);adminService=c(Zi);ngOnInit(){this.loadAllTeachers()}loadAllTeachers(){this.adminService.getAllTeachers().subscribe({next:i=>this.allUsers.set(i),error:i=>console.error(i)})}activateUser(i){this.adminService.activateUser(i).subscribe({next:()=>this.loadAllTeachers()})}inactivateUser(i){this.adminService.inactivateUser(i).subscribe({next:()=>this.loadAllTeachers()})}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=E({type:t,selectors:[["all-users"]],decls:4,vars:0,consts:[[1,"inactive-users-container"],["matListItemTitle",""],["matListItemMeta","","mat-raised-button","","color","mat-sys-primary"],["matListItemMeta","","mat-raised-button","","color","mat-sys-primary",3,"click"]],template:function(e,n){e&1&&(m(0,"div",0)(1,"mat-list"),De(2,Ej,6,4,null,null,Cj),h()()),e&2&&(p(2),xe(n.allUsers()))},dependencies:[ht,Wt,ao,Ps,oo,an,wr,ca,Wn,$r,Wi,Kt,Dt],styles:[".inactive-users-container[_ngcontent-%COMP%]{display:block;max-height:200px;overflow-y:auto;background:#f5f5f5;border-radius:12px}"]})};var Nh=class t{childForm;childList;group;onChildAdded(){this.childList.loadChildren(),this.group.loadChildren()}onChildDeleted(){this.group.loadChildren()}onChildGroupChanged(){this.group.loadChildren()}onGroupCreated(){this.childForm.loadGroups(),this.childList.loadGroups()}router=c(dn);logout(){document.cookie='jwtToken=""',sessionStorage.removeItem("token"),sessionStorage.removeItem("UserId"),sessionStorage.removeItem("role"),window.location.reload()}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=E({type:t,selectors:[["admin-page"]],viewQuery:function(e,n){if(e&1&&we(ed,5)(td,5)(nd,5),e&2){let r;R(r=O())&&(n.childForm=r.first),R(r=O())&&(n.childList=r.first),R(r=O())&&(n.group=r.first)}},decls:31,vars:0,consts:[[1,"admin-top"],[1,"mat-sys-primary"],[1,"example-spacer"],["mat-raised-button","",3,"click"],[1,"admin-container"],[1,"admin-header"],[3,"childAdded"],[3,"childGroupChanged","childDeleted"],[3,"groupCreated"]],template:function(e,n){e&1&&(m(0,"div",0)(1,"mat-toolbar",1)(2,"span"),g(3,"K\xEEndGuard"),h(),T(4,"span",2),m(5,"button",3),M("click",function(){return n.logout()}),g(6,"Logout"),h()()(),m(7,"div",4)(8,"h1",5)(9,"mat-icon"),g(10,"admin_panel_settings"),h(),g(11," Adminstration "),h(),m(12,"mat-card")(13,"mat-card-content")(14,"h2"),g(15,"Alla anv\xE4ndare"),h(),T(16,"all-users"),h()(),m(17,"h2"),g(18,"L\xE4gg till barn"),h(),m(19,"add-child-form",6),M("childAdded",function(){return n.onChildAdded()}),h(),m(20,"mat-card")(21,"mat-card-header"),T(22,"mat-card-title"),h(),m(23,"mat-card-content")(24,"child-admin-list",7),M("childGroupChanged",function(){return n.onChildGroupChanged()})("childDeleted",function(){return n.onChildDeleted()}),h()()(),m(25,"mat-card")(26,"mat-card-header")(27,"h2"),g(28,"Grupper"),h()(),m(29,"mat-card-content")(30,"group",8),M("groupCreated",function(){return n.onGroupCreated()}),h()()()())},dependencies:[Ct,ed,td,nd,Oh,mn,un,Wn,ds,$r,Sh,ht,Wt,Kt,Dt],styles:["[_nghost-%COMP%]{display:block;justify-content:center;align-items:center;width:100vw;height:100vh;overflow-y:scroll}.admin-top[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:100;height:100}.admin-container[_ngcontent-%COMP%]{flex:1;padding:24px;display:flex;flex-direction:column;max-width:1200px;gap:10px;overflow:auto;margin:0 auto}h1[_ngcontent-%COMP%]{margin:0 0 16px}.example-spacer[_ngcontent-%COMP%]{flex:1 1 auto}mat-toolbar[_ngcontent-%COMP%]{background:linear-gradient(90deg,var(--mat-sys-inverse-primary) 30%,var(--mat-sys-tertiary) 100%);display:flex;align-items:center;position:sticky;top:0;max-width:100%}mat-card-title[_ngcontent-%COMP%]{font-size:1.2rem;font-weight:400;line-height:1}mat-card[_ngcontent-%COMP%]{background-color:#fafafa}.admin-header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;color:#d32f2f;border-bottom:2px solid #d32f2f}"]})};var pI=[{canActivate:[Ah],path:"",component:Zf},{canActivate:[Ah],path:"app",component:kh},{canActivate:[Ah],path:"admin",component:Nh}];var Ph=class t{intercept(i,e){let n=sessionStorage.getItem("token");if(!n)return e.handle(i);let r=i.clone({setHeaders:ne(C({},n?{Authorization:`Bearer ${n}`}:{}),{"ngrok-skip-browser-warning":"true"})});return e.handle(r)}static \u0275fac=function(e){return new(e||t)};static \u0275prov=b({token:t,factory:t.\u0275fac})};var gI={providers:[lg(),Wv(pI),fv(hv()),{provide:Tm,useClass:Ph,multi:!0}]};var Fh=class t{title=D("frontend");static \u0275fac=function(e){return new(e||t)};static \u0275cmp=E({type:t,selectors:[["app-root"]],decls:1,vars:0,template:function(e,n){e&1&&T(0,"router-outlet")},dependencies:[uc],encapsulation:2})};ov(Fh,gI).catch(t=>console.error(t));
