var DI=Object.defineProperty,xI=Object.defineProperties;var EI=Object.getOwnPropertyDescriptors;var k_=Object.getOwnPropertySymbols;var II=Object.prototype.hasOwnProperty,MI=Object.prototype.propertyIsEnumerable;var A_=(t,n,e)=>n in t?DI(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e,y=(t,n)=>{for(var e in n||={})II.call(n,e)&&A_(t,e,n[e]);if(k_)for(var e of k_(n))MI.call(n,e)&&A_(t,e,n[e]);return t},K=(t,n)=>xI(t,EI(n));var Tt=null,Wl=!1,om=1,SI=null,Xe=Symbol("SIGNAL");function q(t){let n=Tt;return Tt=t,n}function Zl(){return Tt}var Cr={version:0,lastCleanEpoch:0,dirty:!1,producers:void 0,producersTail:void 0,consumers:void 0,consumersTail:void 0,recomputing:!1,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,kind:"unknown",producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function ji(t){if(Wl)throw new Error("");if(Tt===null)return;Tt.consumerOnSignalRead(t);let n=Tt.producersTail;if(n!==void 0&&n.producer===t)return;let e,i=Tt.recomputing;if(i&&(e=n!==void 0?n.nextProducer:Tt.producers,e!==void 0&&e.producer===t)){Tt.producersTail=e,e.lastReadVersion=t.version;return}let r=t.consumersTail;if(r!==void 0&&r.consumer===Tt&&(!i||kI(r,Tt)))return;let o=yo(Tt),a={producer:t,consumer:Tt,nextProducer:e,prevConsumer:r,lastReadVersion:t.version,nextConsumer:void 0};Tt.producersTail=a,n!==void 0?n.nextProducer=a:Tt.producers=a,o&&P_(t,a)}function R_(){om++}function Ql(t){if(!(yo(t)&&!t.dirty)&&!(!t.dirty&&t.lastCleanEpoch===om)){if(!t.producerMustRecompute(t)&&!bo(t)){Yl(t);return}t.producerRecomputeValue(t),Yl(t)}}function am(t){if(t.consumers===void 0)return;let n=Wl;Wl=!0;try{for(let e=t.consumers;e!==void 0;e=e.nextConsumer){let i=e.consumer;i.dirty||TI(i)}}finally{Wl=n}}function sm(){return Tt?.consumerAllowSignalWrites!==!1}function TI(t){t.dirty=!0,am(t),t.consumerMarkedDirty?.(t)}function Yl(t){t.dirty=!1,t.lastCleanEpoch=om}function Bi(t){return t&&O_(t),q(t)}function O_(t){t.producersTail=void 0,t.recomputing=!0}function Dr(t,n){q(n),t&&N_(t)}function N_(t){t.recomputing=!1;let n=t.producersTail,e=n!==void 0?n.nextProducer:t.producers;if(e!==void 0){if(yo(t))do e=lm(e);while(e!==void 0);n!==void 0?n.nextProducer=void 0:t.producers=void 0}}function bo(t){for(let n=t.producers;n!==void 0;n=n.nextProducer){let e=n.producer,i=n.lastReadVersion;if(i!==e.version||(Ql(e),i!==e.version))return!0}return!1}function Vi(t){if(yo(t)){let n=t.producers;for(;n!==void 0;)n=lm(n)}t.producers=void 0,t.producersTail=void 0,t.consumers=void 0,t.consumersTail=void 0}function P_(t,n){let e=t.consumersTail,i=yo(t);if(e!==void 0?(n.nextConsumer=e.nextConsumer,e.nextConsumer=n):(n.nextConsumer=void 0,t.consumers=n),n.prevConsumer=e,t.consumersTail=n,!i)for(let r=t.producers;r!==void 0;r=r.nextProducer)P_(r.producer,r)}function lm(t){let n=t.producer,e=t.nextProducer,i=t.nextConsumer,r=t.prevConsumer;if(t.nextConsumer=void 0,t.prevConsumer=void 0,i!==void 0?i.prevConsumer=r:n.consumersTail=r,r!==void 0)r.nextConsumer=i;else if(n.consumers=i,!yo(n)){let o=n.producers;for(;o!==void 0;)o=lm(o)}return e}function yo(t){return t.consumerIsAlwaysLive||t.consumers!==void 0}function Kl(t){SI?.(t)}function kI(t,n){let e=n.producersTail;if(e!==void 0){let i=n.producers;do{if(i===t)return!0;if(i===e)break;i=i.nextProducer}while(i!==void 0)}return!1}function Xl(t,n){return Object.is(t,n)}function Ka(t,n){let e=Object.create(AI);e.computation=t,n!==void 0&&(e.equal=n);let i=()=>{if(Ql(e),ji(e),e.value===Qa)throw e.error;return e.value};return i[Xe]=e,Kl(e),i}var Gl=Symbol("UNSET"),ql=Symbol("COMPUTING"),Qa=Symbol("ERRORED"),AI=K(y({},Cr),{value:Gl,dirty:!0,error:null,equal:Xl,kind:"computed",producerMustRecompute(t){return t.value===Gl||t.value===ql},producerRecomputeValue(t){if(t.value===ql)throw new Error("");let n=t.value;t.value=ql;let e=Bi(t),i,r=!1;try{i=t.computation(),q(null),r=n!==Gl&&n!==Qa&&i!==Qa&&t.equal(n,i)}catch(o){i=Qa,t.error=o}finally{Dr(t,e)}if(r){t.value=n;return}t.value=i,t.version++}});function RI(){throw new Error}var F_=RI;function L_(t){F_(t)}function cm(t){F_=t}var OI=null;function dm(t,n){let e=Object.create(Xa);e.value=t,n!==void 0&&(e.equal=n);let i=()=>j_(e);return i[Xe]=e,Kl(e),[i,a=>xr(e,a),a=>um(e,a)]}function j_(t){return ji(t),t.value}function xr(t,n){sm()||L_(t),t.equal(t.value,n)||(t.value=n,NI(t))}function um(t,n){sm()||L_(t),xr(t,n(t.value))}var Xa=K(y({},Cr),{equal:Xl,value:void 0,kind:"signal"});function NI(t){t.version++,R_(),am(t),OI?.(t)}var fm=K(y({},Cr),{consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!0,dirty:!0,kind:"effect"});function mm(t){if(t.dirty=!1,t.version>0&&!bo(t))return;t.version++;let n=Bi(t);try{t.cleanup(),t.fn()}finally{Dr(t,n)}}function se(t){return typeof t=="function"}function wo(t){let e=t(i=>{Error.call(i),i.stack=new Error().stack});return e.prototype=Object.create(Error.prototype),e.prototype.constructor=e,e}var Jl=wo(t=>function(e){t(this),this.message=e?`${e.length} errors occurred during unsubscription:
${e.map((i,r)=>`${r+1}) ${i.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=e});function Er(t,n){if(t){let e=t.indexOf(n);0<=e&&t.splice(e,1)}}var le=class t{constructor(n){this.initialTeardown=n,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let n;if(!this.closed){this.closed=!0;let{_parentage:e}=this;if(e)if(this._parentage=null,Array.isArray(e))for(let o of e)o.remove(this);else e.remove(this);let{initialTeardown:i}=this;if(se(i))try{i()}catch(o){n=o instanceof Jl?o.errors:[o]}let{_finalizers:r}=this;if(r){this._finalizers=null;for(let o of r)try{B_(o)}catch(a){n=n??[],a instanceof Jl?n=[...n,...a.errors]:n.push(a)}}if(n)throw new Jl(n)}}add(n){var e;if(n&&n!==this)if(this.closed)B_(n);else{if(n instanceof t){if(n.closed||n._hasParent(this))return;n._addParent(this)}(this._finalizers=(e=this._finalizers)!==null&&e!==void 0?e:[]).push(n)}}_hasParent(n){let{_parentage:e}=this;return e===n||Array.isArray(e)&&e.includes(n)}_addParent(n){let{_parentage:e}=this;this._parentage=Array.isArray(e)?(e.push(n),e):e?[e,n]:n}_removeParent(n){let{_parentage:e}=this;e===n?this._parentage=null:Array.isArray(e)&&Er(e,n)}remove(n){let{_finalizers:e}=this;e&&Er(e,n),n instanceof t&&n._removeParent(this)}};le.EMPTY=(()=>{let t=new le;return t.closed=!0,t})();var hm=le.EMPTY;function ec(t){return t instanceof le||t&&"closed"in t&&se(t.remove)&&se(t.add)&&se(t.unsubscribe)}function B_(t){se(t)?t():t.unsubscribe()}var Cn={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var Co={setTimeout(t,n,...e){let{delegate:i}=Co;return i?.setTimeout?i.setTimeout(t,n,...e):setTimeout(t,n,...e)},clearTimeout(t){let{delegate:n}=Co;return(n?.clearTimeout||clearTimeout)(t)},delegate:void 0};function tc(t){Co.setTimeout(()=>{let{onUnhandledError:n}=Cn;if(n)n(t);else throw t})}function Ja(){}var V_=pm("C",void 0,void 0);function H_(t){return pm("E",void 0,t)}function U_(t){return pm("N",t,void 0)}function pm(t,n,e){return{kind:t,value:n,error:e}}var Ir=null;function Do(t){if(Cn.useDeprecatedSynchronousErrorHandling){let n=!Ir;if(n&&(Ir={errorThrown:!1,error:null}),t(),n){let{errorThrown:e,error:i}=Ir;if(Ir=null,e)throw i}}else t()}function z_(t){Cn.useDeprecatedSynchronousErrorHandling&&Ir&&(Ir.errorThrown=!0,Ir.error=t)}var Mr=class extends le{constructor(n){super(),this.isStopped=!1,n?(this.destination=n,ec(n)&&n.add(this)):this.destination=LI}static create(n,e,i){return new hi(n,e,i)}next(n){this.isStopped?vm(U_(n),this):this._next(n)}error(n){this.isStopped?vm(H_(n),this):(this.isStopped=!0,this._error(n))}complete(){this.isStopped?vm(V_,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(n){this.destination.next(n)}_error(n){try{this.destination.error(n)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},PI=Function.prototype.bind;function gm(t,n){return PI.call(t,n)}var _m=class{constructor(n){this.partialObserver=n}next(n){let{partialObserver:e}=this;if(e.next)try{e.next(n)}catch(i){nc(i)}}error(n){let{partialObserver:e}=this;if(e.error)try{e.error(n)}catch(i){nc(i)}else nc(n)}complete(){let{partialObserver:n}=this;if(n.complete)try{n.complete()}catch(e){nc(e)}}},hi=class extends Mr{constructor(n,e,i){super();let r;if(se(n)||!n)r={next:n??void 0,error:e??void 0,complete:i??void 0};else{let o;this&&Cn.useDeprecatedNextContext?(o=Object.create(n),o.unsubscribe=()=>this.unsubscribe(),r={next:n.next&&gm(n.next,o),error:n.error&&gm(n.error,o),complete:n.complete&&gm(n.complete,o)}):r=n}this.destination=new _m(r)}};function nc(t){Cn.useDeprecatedSynchronousErrorHandling?z_(t):tc(t)}function FI(t){throw t}function vm(t,n){let{onStoppedNotification:e}=Cn;e&&Co.setTimeout(()=>e(t,n))}var LI={closed:!0,next:Ja,error:FI,complete:Ja};var xo=typeof Symbol=="function"&&Symbol.observable||"@@observable";function Gt(t){return t}function bm(...t){return ym(t)}function ym(t){return t.length===0?Gt:t.length===1?t[0]:function(e){return t.reduce((i,r)=>r(i),e)}}var ee=(()=>{class t{constructor(e){e&&(this._subscribe=e)}lift(e){let i=new t;return i.source=this,i.operator=e,i}subscribe(e,i,r){let o=BI(e)?e:new hi(e,i,r);return Do(()=>{let{operator:a,source:s}=this;o.add(a?a.call(o,s):s?this._subscribe(o):this._trySubscribe(o))}),o}_trySubscribe(e){try{return this._subscribe(e)}catch(i){e.error(i)}}forEach(e,i){return i=$_(i),new i((r,o)=>{let a=new hi({next:s=>{try{e(s)}catch(l){o(l),a.unsubscribe()}},error:o,complete:r});this.subscribe(a)})}_subscribe(e){var i;return(i=this.source)===null||i===void 0?void 0:i.subscribe(e)}[xo](){return this}pipe(...e){return ym(e)(this)}toPromise(e){return e=$_(e),new e((i,r)=>{let o;this.subscribe(a=>o=a,a=>r(a),()=>i(o))})}}return t.create=n=>new t(n),t})();function $_(t){var n;return(n=t??Cn.Promise)!==null&&n!==void 0?n:Promise}function jI(t){return t&&se(t.next)&&se(t.error)&&se(t.complete)}function BI(t){return t&&t instanceof Mr||jI(t)&&ec(t)}function VI(t){return se(t?.lift)}function ce(t){return n=>{if(VI(n))return n.lift(function(e){try{return t(e,this)}catch(i){this.error(i)}});throw new TypeError("Unable to lift unknown Observable type")}}function de(t,n,e,i,r){return new wm(t,n,e,i,r)}var wm=class extends Mr{constructor(n,e,i,r,o,a){super(n),this.onFinalize=o,this.shouldUnsubscribe=a,this._next=e?function(s){try{e(s)}catch(l){n.error(l)}}:super._next,this._error=r?function(s){try{r(s)}catch(l){n.error(l)}finally{this.unsubscribe()}}:super._error,this._complete=i?function(){try{i()}catch(s){n.error(s)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var n;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:e}=this;super.unsubscribe(),!e&&((n=this.onFinalize)===null||n===void 0||n.call(this))}}};var W_=wo(t=>function(){t(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var D=(()=>{class t extends ee{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(e){let i=new ic(this,this);return i.operator=e,i}_throwIfClosed(){if(this.closed)throw new W_}next(e){Do(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let i of this.currentObservers)i.next(e)}})}error(e){Do(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=e;let{observers:i}=this;for(;i.length;)i.shift().error(e)}})}complete(){Do(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:e}=this;for(;e.length;)e.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var e;return((e=this.observers)===null||e===void 0?void 0:e.length)>0}_trySubscribe(e){return this._throwIfClosed(),super._trySubscribe(e)}_subscribe(e){return this._throwIfClosed(),this._checkFinalizedStatuses(e),this._innerSubscribe(e)}_innerSubscribe(e){let{hasError:i,isStopped:r,observers:o}=this;return i||r?hm:(this.currentObservers=null,o.push(e),new le(()=>{this.currentObservers=null,Er(o,e)}))}_checkFinalizedStatuses(e){let{hasError:i,thrownError:r,isStopped:o}=this;i?e.error(r):o&&e.complete()}asObservable(){let e=new ee;return e.source=this,e}}return t.create=(n,e)=>new ic(n,e),t})(),ic=class extends D{constructor(n,e){super(),this.destination=n,this.source=e}next(n){var e,i;(i=(e=this.destination)===null||e===void 0?void 0:e.next)===null||i===void 0||i.call(e,n)}error(n){var e,i;(i=(e=this.destination)===null||e===void 0?void 0:e.error)===null||i===void 0||i.call(e,n)}complete(){var n,e;(e=(n=this.destination)===null||n===void 0?void 0:n.complete)===null||e===void 0||e.call(n)}_subscribe(n){var e,i;return(i=(e=this.source)===null||e===void 0?void 0:e.subscribe(n))!==null&&i!==void 0?i:hm}};var Je=class extends D{constructor(n){super(),this._value=n}get value(){return this.getValue()}_subscribe(n){let e=super._subscribe(n);return!e.closed&&n.next(this._value),e}getValue(){let{hasError:n,thrownError:e,_value:i}=this;if(n)throw e;return this._throwIfClosed(),i}next(n){super.next(this._value=n)}};var es={now(){return(es.delegate||Date).now()},delegate:void 0};var qt=class extends D{constructor(n=1/0,e=1/0,i=es){super(),this._bufferSize=n,this._windowTime=e,this._timestampProvider=i,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=e===1/0,this._bufferSize=Math.max(1,n),this._windowTime=Math.max(1,e)}next(n){let{isStopped:e,_buffer:i,_infiniteTimeWindow:r,_timestampProvider:o,_windowTime:a}=this;e||(i.push(n),!r&&i.push(o.now()+a)),this._trimBuffer(),super.next(n)}_subscribe(n){this._throwIfClosed(),this._trimBuffer();let e=this._innerSubscribe(n),{_infiniteTimeWindow:i,_buffer:r}=this,o=r.slice();for(let a=0;a<o.length&&!n.closed;a+=i?1:2)n.next(o[a]);return this._checkFinalizedStatuses(n),e}_trimBuffer(){let{_bufferSize:n,_timestampProvider:e,_buffer:i,_infiniteTimeWindow:r}=this,o=(r?1:2)*n;if(n<1/0&&o<i.length&&i.splice(0,i.length-o),!r){let a=e.now(),s=0;for(let l=1;l<i.length&&i[l]<=a;l+=2)s=l;s&&i.splice(0,s+1)}}};var rc=class extends le{constructor(n,e){super()}schedule(n,e=0){return this}};var ts={setInterval(t,n,...e){let{delegate:i}=ts;return i?.setInterval?i.setInterval(t,n,...e):setInterval(t,n,...e)},clearInterval(t){let{delegate:n}=ts;return(n?.clearInterval||clearInterval)(t)},delegate:void 0};var oc=class extends rc{constructor(n,e){super(n,e),this.scheduler=n,this.work=e,this.pending=!1}schedule(n,e=0){var i;if(this.closed)return this;this.state=n;let r=this.id,o=this.scheduler;return r!=null&&(this.id=this.recycleAsyncId(o,r,e)),this.pending=!0,this.delay=e,this.id=(i=this.id)!==null&&i!==void 0?i:this.requestAsyncId(o,this.id,e),this}requestAsyncId(n,e,i=0){return ts.setInterval(n.flush.bind(n,this),i)}recycleAsyncId(n,e,i=0){if(i!=null&&this.delay===i&&this.pending===!1)return e;e!=null&&ts.clearInterval(e)}execute(n,e){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;let i=this._execute(n,e);if(i)return i;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(n,e){let i=!1,r;try{this.work(n)}catch(o){i=!0,r=o||new Error("Scheduled action threw falsy error")}if(i)return this.unsubscribe(),r}unsubscribe(){if(!this.closed){let{id:n,scheduler:e}=this,{actions:i}=e;this.work=this.state=this.scheduler=null,this.pending=!1,Er(i,this),n!=null&&(this.id=this.recycleAsyncId(e,n,null)),this.delay=null,super.unsubscribe()}}};var Eo=class t{constructor(n,e=t.now){this.schedulerActionCtor=n,this.now=e}schedule(n,e=0,i){return new this.schedulerActionCtor(this,n).schedule(i,e)}};Eo.now=es.now;var ac=class extends Eo{constructor(n,e=Eo.now){super(n,e),this.actions=[],this._active=!1}flush(n){let{actions:e}=this;if(this._active){e.push(n);return}let i;this._active=!0;do if(i=n.execute(n.state,n.delay))break;while(n=e.shift());if(this._active=!1,i){for(;n=e.shift();)n.unsubscribe();throw i}}};var ns=new ac(oc),G_=ns;var je=new ee(t=>t.complete());function sc(t){return t&&se(t.schedule)}function Cm(t){return t[t.length-1]}function lc(t){return se(Cm(t))?t.pop():void 0}function Bn(t){return sc(Cm(t))?t.pop():void 0}function q_(t,n){return typeof Cm(t)=="number"?t.pop():n}function Z_(t,n,e,i){function r(o){return o instanceof e?o:new e(function(a){a(o)})}return new(e||(e=Promise))(function(o,a){function s(u){try{c(i.next(u))}catch(f){a(f)}}function l(u){try{c(i.throw(u))}catch(f){a(f)}}function c(u){u.done?o(u.value):r(u.value).then(s,l)}c((i=i.apply(t,n||[])).next())})}function Y_(t){var n=typeof Symbol=="function"&&Symbol.iterator,e=n&&t[n],i=0;if(e)return e.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&i>=t.length&&(t=void 0),{value:t&&t[i++],done:!t}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}function Sr(t){return this instanceof Sr?(this.v=t,this):new Sr(t)}function Q_(t,n,e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=e.apply(t,n||[]),r,o=[];return r=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),s("next"),s("throw"),s("return",a),r[Symbol.asyncIterator]=function(){return this},r;function a(g){return function(C){return Promise.resolve(C).then(g,f)}}function s(g,C){i[g]&&(r[g]=function(I){return new Promise(function(k,H){o.push([g,I,k,H])>1||l(g,I)})},C&&(r[g]=C(r[g])))}function l(g,C){try{c(i[g](C))}catch(I){p(o[0][3],I)}}function c(g){g.value instanceof Sr?Promise.resolve(g.value.v).then(u,f):p(o[0][2],g)}function u(g){l("next",g)}function f(g){l("throw",g)}function p(g,C){g(C),o.shift(),o.length&&l(o[0][0],o[0][1])}}function K_(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n=t[Symbol.asyncIterator],e;return n?n.call(t):(t=typeof Y_=="function"?Y_(t):t[Symbol.iterator](),e={},i("next"),i("throw"),i("return"),e[Symbol.asyncIterator]=function(){return this},e);function i(o){e[o]=t[o]&&function(a){return new Promise(function(s,l){a=t[o](a),r(s,l,a.done,a.value)})}}function r(o,a,s,l){Promise.resolve(l).then(function(c){o({value:c,done:s})},a)}}var cc=t=>t&&typeof t.length=="number"&&typeof t!="function";function dc(t){return se(t?.then)}function uc(t){return se(t[xo])}function fc(t){return Symbol.asyncIterator&&se(t?.[Symbol.asyncIterator])}function mc(t){return new TypeError(`You provided ${t!==null&&typeof t=="object"?"an invalid object":`'${t}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function HI(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var hc=HI();function pc(t){return se(t?.[hc])}function gc(t){return Q_(this,arguments,function*(){let e=t.getReader();try{for(;;){let{value:i,done:r}=yield Sr(e.read());if(r)return yield Sr(void 0);yield yield Sr(i)}}finally{e.releaseLock()}})}function vc(t){return se(t?.getReader)}function Se(t){if(t instanceof ee)return t;if(t!=null){if(uc(t))return UI(t);if(cc(t))return zI(t);if(dc(t))return $I(t);if(fc(t))return X_(t);if(pc(t))return WI(t);if(vc(t))return GI(t)}throw mc(t)}function UI(t){return new ee(n=>{let e=t[xo]();if(se(e.subscribe))return e.subscribe(n);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function zI(t){return new ee(n=>{for(let e=0;e<t.length&&!n.closed;e++)n.next(t[e]);n.complete()})}function $I(t){return new ee(n=>{t.then(e=>{n.closed||(n.next(e),n.complete())},e=>n.error(e)).then(null,tc)})}function WI(t){return new ee(n=>{for(let e of t)if(n.next(e),n.closed)return;n.complete()})}function X_(t){return new ee(n=>{qI(t,n).catch(e=>n.error(e))})}function GI(t){return X_(gc(t))}function qI(t,n){var e,i,r,o;return Z_(this,void 0,void 0,function*(){try{for(e=K_(t);i=yield e.next(),!i.done;){let a=i.value;if(n.next(a),n.closed)return}}catch(a){r={error:a}}finally{try{i&&!i.done&&(o=e.return)&&(yield o.call(e))}finally{if(r)throw r.error}}n.complete()})}function Wt(t,n,e,i=0,r=!1){let o=n.schedule(function(){e(),r?t.add(this.schedule(null,i)):this.unsubscribe()},i);if(t.add(o),!r)return o}function _c(t,n=0){return ce((e,i)=>{e.subscribe(de(i,r=>Wt(i,t,()=>i.next(r),n),()=>Wt(i,t,()=>i.complete(),n),r=>Wt(i,t,()=>i.error(r),n)))})}function bc(t,n=0){return ce((e,i)=>{i.add(t.schedule(()=>e.subscribe(i),n))})}function J_(t,n){return Se(t).pipe(bc(n),_c(n))}function eb(t,n){return Se(t).pipe(bc(n),_c(n))}function tb(t,n){return new ee(e=>{let i=0;return n.schedule(function(){i===t.length?e.complete():(e.next(t[i++]),e.closed||this.schedule())})})}function nb(t,n){return new ee(e=>{let i;return Wt(e,n,()=>{i=t[hc](),Wt(e,n,()=>{let r,o;try{({value:r,done:o}=i.next())}catch(a){e.error(a);return}o?e.complete():e.next(r)},0,!0)}),()=>se(i?.return)&&i.return()})}function yc(t,n){if(!t)throw new Error("Iterable cannot be null");return new ee(e=>{Wt(e,n,()=>{let i=t[Symbol.asyncIterator]();Wt(e,n,()=>{i.next().then(r=>{r.done?e.complete():e.next(r.value)})},0,!0)})})}function ib(t,n){return yc(gc(t),n)}function rb(t,n){if(t!=null){if(uc(t))return J_(t,n);if(cc(t))return tb(t,n);if(dc(t))return eb(t,n);if(fc(t))return yc(t,n);if(pc(t))return nb(t,n);if(vc(t))return ib(t,n)}throw mc(t)}function Te(t,n){return n?rb(t,n):Se(t)}function $(...t){let n=Bn(t);return Te(t,n)}function Tr(t,n){let e=se(t)?t:()=>t,i=r=>r.error(e());return new ee(n?r=>n.schedule(i,0,r):i)}function is(t){return!!t&&(t instanceof ee||se(t.lift)&&se(t.subscribe))}var kr=wo(t=>function(){t(this),this.name="EmptyError",this.message="no elements in sequence"});function ob(t){return t instanceof Date&&!isNaN(t)}function te(t,n){return ce((e,i)=>{let r=0;e.subscribe(de(i,o=>{i.next(t.call(n,o,r++))}))})}var{isArray:YI}=Array;function ZI(t,n){return YI(n)?t(...n):t(n)}function wc(t){return te(n=>ZI(t,n))}var{isArray:QI}=Array,{getPrototypeOf:KI,prototype:XI,keys:JI}=Object;function Cc(t){if(t.length===1){let n=t[0];if(QI(n))return{args:n,keys:null};if(eM(n)){let e=JI(n);return{args:e.map(i=>n[i]),keys:e}}}return{args:t,keys:null}}function eM(t){return t&&typeof t=="object"&&KI(t)===XI}function Dc(t,n){return t.reduce((e,i,r)=>(e[i]=n[r],e),{})}function Io(...t){let n=Bn(t),e=lc(t),{args:i,keys:r}=Cc(t);if(i.length===0)return Te([],n);let o=new ee(tM(i,n,r?a=>Dc(r,a):Gt));return e?o.pipe(wc(e)):o}function tM(t,n,e=Gt){return i=>{ab(n,()=>{let{length:r}=t,o=new Array(r),a=r,s=r;for(let l=0;l<r;l++)ab(n,()=>{let c=Te(t[l],n),u=!1;c.subscribe(de(i,f=>{o[l]=f,u||(u=!0,s--),s||i.next(e(o.slice()))},()=>{--a||i.complete()}))},i)},i)}}function ab(t,n,e){t?Wt(e,t,n):n()}function sb(t,n,e,i,r,o,a,s){let l=[],c=0,u=0,f=!1,p=()=>{f&&!l.length&&!c&&n.complete()},g=I=>c<i?C(I):l.push(I),C=I=>{o&&n.next(I),c++;let k=!1;Se(e(I,u++)).subscribe(de(n,H=>{r?.(H),o?g(H):n.next(H)},()=>{k=!0},void 0,()=>{if(k)try{for(c--;l.length&&c<i;){let H=l.shift();a?Wt(n,a,()=>C(H)):C(H)}p()}catch(H){n.error(H)}}))};return t.subscribe(de(n,g,()=>{f=!0,p()})),()=>{s?.()}}function wt(t,n,e=1/0){return se(n)?wt((i,r)=>te((o,a)=>n(i,o,r,a))(Se(t(i,r))),e):(typeof n=="number"&&(e=n),ce((i,r)=>sb(i,r,t,e)))}function Hi(t=1/0){return wt(Gt,t)}function lb(){return Hi(1)}function Ui(...t){return lb()(Te(t,Bn(t)))}function Dn(t){return new ee(n=>{Se(t()).subscribe(n)})}function rs(...t){let n=lc(t),{args:e,keys:i}=Cc(t),r=new ee(o=>{let{length:a}=e;if(!a){o.complete();return}let s=new Array(a),l=a,c=a;for(let u=0;u<a;u++){let f=!1;Se(e[u]).subscribe(de(o,p=>{f||(f=!0,c--),s[u]=p},()=>l--,void 0,()=>{(!l||!f)&&(c||o.next(i?Dc(i,s):s),o.complete())}))}});return n?r.pipe(wc(n)):r}function os(t=0,n,e=G_){let i=-1;return n!=null&&(sc(n)?e=n:i=n),new ee(r=>{let o=ob(t)?+t-e.now():t;o<0&&(o=0);let a=0;return e.schedule(function(){r.closed||(r.next(a++),0<=i?this.schedule(void 0,i):r.complete())},o)})}function Lt(...t){let n=Bn(t),e=q_(t,1/0),i=t;return i.length?i.length===1?Se(i[0]):Hi(e)(Te(i,n)):je}function me(t,n){return ce((e,i)=>{let r=0;e.subscribe(de(i,o=>t.call(n,o,r++)&&i.next(o)))})}function cb(t){return ce((n,e)=>{let i=!1,r=null,o=null,a=!1,s=()=>{if(o?.unsubscribe(),o=null,i){i=!1;let c=r;r=null,e.next(c)}a&&e.complete()},l=()=>{o=null,a&&e.complete()};n.subscribe(de(e,c=>{i=!0,r=c,o||Se(t(c)).subscribe(o=de(e,s,l))},()=>{a=!0,(!i||!o||o.closed)&&e.complete()}))})}function xc(t,n=ns){return cb(()=>os(t,n))}function zi(t){return ce((n,e)=>{let i=null,r=!1,o;i=n.subscribe(de(e,void 0,void 0,a=>{o=Se(t(a,zi(t)(n))),i?(i.unsubscribe(),i=null,o.subscribe(e)):r=!0})),r&&(i.unsubscribe(),i=null,o.subscribe(e))})}function $i(t,n){return se(n)?wt(t,n,1):wt(t,1)}function pi(t,n=ns){return ce((e,i)=>{let r=null,o=null,a=null,s=()=>{if(r){r.unsubscribe(),r=null;let c=o;o=null,i.next(c)}};function l(){let c=a+t,u=n.now();if(u<c){r=this.schedule(void 0,c-u),i.add(r);return}s()}e.subscribe(de(i,c=>{o=c,a=n.now(),r||(r=n.schedule(l,t),i.add(r))},()=>{s(),i.complete()},void 0,()=>{o=r=null}))})}function db(t){return ce((n,e)=>{let i=!1;n.subscribe(de(e,r=>{i=!0,e.next(r)},()=>{i||e.next(t),e.complete()}))})}function Ye(t){return t<=0?()=>je:ce((n,e)=>{let i=0;n.subscribe(de(e,r=>{++i<=t&&(e.next(r),t<=i&&e.complete())}))})}function Ec(t,n=Gt){return t=t??nM,ce((e,i)=>{let r,o=!0;e.subscribe(de(i,a=>{let s=n(a);(o||!t(r,s))&&(o=!1,r=s,i.next(a))}))})}function nM(t,n){return t===n}function ub(t=iM){return ce((n,e)=>{let i=!1;n.subscribe(de(e,r=>{i=!0,e.next(r)},()=>i?e.complete():e.error(t())))})}function iM(){return new kr}function Wi(t){return ce((n,e)=>{try{n.subscribe(e)}finally{e.add(t)}})}function gi(t,n){let e=arguments.length>=2;return i=>i.pipe(t?me((r,o)=>t(r,o,i)):Gt,Ye(1),e?db(n):ub(()=>new kr))}function Ic(t){return t<=0?()=>je:ce((n,e)=>{let i=[];n.subscribe(de(e,r=>{i.push(r),t<i.length&&i.shift()},()=>{for(let r of i)e.next(r);e.complete()},void 0,()=>{i=null}))})}function Mc(){return ce((t,n)=>{let e,i=!1;t.subscribe(de(n,r=>{let o=e;e=r,i&&n.next([o,r]),i=!0}))})}function as(t={}){let{connector:n=()=>new D,resetOnError:e=!0,resetOnComplete:i=!0,resetOnRefCountZero:r=!0}=t;return o=>{let a,s,l,c=0,u=!1,f=!1,p=()=>{s?.unsubscribe(),s=void 0},g=()=>{p(),a=l=void 0,u=f=!1},C=()=>{let I=a;g(),I?.unsubscribe()};return ce((I,k)=>{c++,!f&&!u&&p();let H=l=l??n();k.add(()=>{c--,c===0&&!f&&!u&&(s=Dm(C,r))}),H.subscribe(k),!a&&c>0&&(a=new hi({next:be=>H.next(be),error:be=>{f=!0,p(),s=Dm(g,e,be),H.error(be)},complete:()=>{u=!0,p(),s=Dm(g,i),H.complete()}}),Se(I).subscribe(a))})(o)}}function Dm(t,n,...e){if(n===!0){t();return}if(n===!1)return;let i=new hi({next:()=>{i.unsubscribe(),t()}});return Se(n(...e)).subscribe(i)}function Sc(t,n,e){let i,r=!1;return t&&typeof t=="object"?{bufferSize:i=1/0,windowTime:n=1/0,refCount:r=!1,scheduler:e}=t:i=t??1/0,as({connector:()=>new qt(i,n,e),resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:r})}function Ar(t){return me((n,e)=>t<=e)}function rt(...t){let n=Bn(t);return ce((e,i)=>{(n?Ui(t,e,n):Ui(t,e)).subscribe(i)})}function et(t,n){return ce((e,i)=>{let r=null,o=0,a=!1,s=()=>a&&!r&&i.complete();e.subscribe(de(i,l=>{r?.unsubscribe();let c=0,u=o++;Se(t(l,u)).subscribe(r=de(i,f=>i.next(n?n(l,f,u,c++):f),()=>{r=null,s()}))},()=>{a=!0,s()}))})}function pe(t){return ce((n,e)=>{Se(t).subscribe(de(e,()=>e.complete(),Ja)),!e.closed&&n.subscribe(e)})}function xm(t,n=!1){return ce((e,i)=>{let r=0;e.subscribe(de(i,o=>{let a=t(o,r++);(a||n)&&i.next(o),!a&&i.complete()}))})}function Ze(t,n,e){let i=se(t)||n||e?{next:t,error:n,complete:e}:t;return i?ce((r,o)=>{var a;(a=i.subscribe)===null||a===void 0||a.call(i);let s=!0;r.subscribe(de(o,l=>{var c;(c=i.next)===null||c===void 0||c.call(i,l),o.next(l)},()=>{var l;s=!1,(l=i.complete)===null||l===void 0||l.call(i),o.complete()},l=>{var c;s=!1,(c=i.error)===null||c===void 0||c.call(i,l),o.error(l)},()=>{var l,c;s&&((l=i.unsubscribe)===null||l===void 0||l.call(i)),(c=i.finalize)===null||c===void 0||c.call(i)}))}):Gt}var Em;function ss(){return Em}function Vn(t){let n=Em;return Em=t,n}function Im(t,n){let e=ss();if(!e)throw new Error("Current injector is not set.");if(!t.\u0275prov)throw new Error("Token is not an injectable");return e.retrieve(t,n)}var fb=Symbol("NotFound");function Mo(t){return t===fb||t?.name==="\u0275NotFound"}function mb(t){let n=q(null);try{return t()}finally{q(n)}}var Pc="https://angular.dev/best-practices/security#preventing-cross-site-scripting-xss",M=class extends Error{code;constructor(n,e){super(on(n,e)),this.code=n}};function rM(t){return`NG0${Math.abs(t)}`}function on(t,n){return`${rM(t)}${n?": "+n:""}`}var To=globalThis;function we(t){for(let n in t)if(t[n]===we)return n;throw Error("")}function _b(t,n){for(let e in n)n.hasOwnProperty(e)&&!t.hasOwnProperty(e)&&(t[e]=n[e])}function hs(t){if(typeof t=="string")return t;if(Array.isArray(t))return`[${t.map(hs).join(", ")}]`;if(t==null)return""+t;let n=t.overriddenName||t.name;if(n)return`${n}`;let e=t.toString();if(e==null)return""+e;let i=e.indexOf(`
`);return i>=0?e.slice(0,i):e}function Fc(t,n){return t?n?`${t} ${n}`:t:n||""}var oM=we({__forward_ref__:we});function xn(t){return t.__forward_ref__=xn,t}function Ct(t){return Bm(t)?t():t}function Bm(t){return typeof t=="function"&&t.hasOwnProperty(oM)&&t.__forward_ref__===xn}function b(t){return{token:t.token,providedIn:t.providedIn||null,factory:t.factory,value:void 0}}function L(t){return{providers:t.providers||[],imports:t.imports||[]}}function ps(t){return aM(t,Lc)}function Vm(t){return ps(t)!==null}function aM(t,n){return t.hasOwnProperty(n)&&t[n]||null}function sM(t){let n=t?.[Lc]??null;return n||null}function Sm(t){return t&&t.hasOwnProperty(kc)?t[kc]:null}var Lc=we({\u0275prov:we}),kc=we({\u0275inj:we}),_=class{_desc;ngMetadataName="InjectionToken";\u0275prov;constructor(n,e){this._desc=n,this.\u0275prov=void 0,typeof e=="number"?this.__NG_ELEMENT_ID__=e:e!==void 0&&(this.\u0275prov=b({token:this,providedIn:e.providedIn||"root",factory:e.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};function Hm(t){return t&&!!t.\u0275providers}var Um=we({\u0275cmp:we}),zm=we({\u0275dir:we}),$m=we({\u0275pipe:we}),Wm=we({\u0275mod:we}),cs=we({\u0275fac:we}),Fr=we({__NG_ELEMENT_ID__:we}),hb=we({__NG_ENV_ID__:we});function Gm(t){return jc(t,"@NgModule"),t[Wm]||null}function Un(t){return jc(t,"@Component"),t[Um]||null}function qm(t){return jc(t,"@Directive"),t[zm]||null}function bb(t){return jc(t,"@Pipe"),t[$m]||null}function jc(t,n){if(t==null)throw new M(-919,!1)}function Bc(t){return typeof t=="string"?t:t==null?"":String(t)}var yb=we({ngErrorCode:we}),lM=we({ngErrorMessage:we}),cM=we({ngTokenPath:we});function Ym(t,n){return wb("",-200,n)}function Vc(t,n){throw new M(-201,!1)}function wb(t,n,e){let i=new M(n,t);return i[yb]=n,i[lM]=t,e&&(i[cM]=e),i}function dM(t){return t[yb]}var Tm;function Cb(){return Tm}function jt(t){let n=Tm;return Tm=t,n}function Zm(t,n,e){let i=ps(t);if(i&&i.providedIn=="root")return i.value===void 0?i.value=i.factory():i.value;if(e&8)return null;if(n!==void 0)return n;Vc(t,"")}var uM={},Rr=uM,fM="__NG_DI_FLAG__",km=class{injector;constructor(n){this.injector=n}retrieve(n,e){let i=Or(e)||0;try{return this.injector.get(n,i&8?null:Rr,i)}catch(r){if(Mo(r))return r;throw r}}};function mM(t,n=0){let e=ss();if(e===void 0)throw new M(-203,!1);if(e===null)return Zm(t,void 0,n);{let i=hM(n),r=e.retrieve(t,i);if(Mo(r)){if(i.optional)return null;throw r}return r}}function P(t,n=0){return(Cb()||mM)(Ct(t),n)}function d(t,n){return P(t,Or(n))}function Or(t){return typeof t>"u"||typeof t=="number"?t:0|(t.optional&&8)|(t.host&&1)|(t.self&&2)|(t.skipSelf&&4)}function hM(t){return{optional:!!(t&8),host:!!(t&1),self:!!(t&2),skipSelf:!!(t&4)}}function Am(t){let n=[];for(let e=0;e<t.length;e++){let i=Ct(t[e]);if(Array.isArray(i)){if(i.length===0)throw new M(900,!1);let r,o=0;for(let a=0;a<i.length;a++){let s=i[a],l=pM(s);typeof l=="number"?l===-1?r=s.token:o|=l:r=s}n.push(P(r,o))}else n.push(P(i))}return n}function pM(t){return t[fM]}function Gi(t,n){let e=t.hasOwnProperty(cs);return e?t[cs]:null}function Db(t,n,e){if(t.length!==n.length)return!1;for(let i=0;i<t.length;i++){let r=t[i],o=n[i];if(e&&(r=e(r),o=e(o)),o!==r)return!1}return!0}function xb(t){return t.flat(Number.POSITIVE_INFINITY)}function Hc(t,n){t.forEach(e=>Array.isArray(e)?Hc(e,n):n(e))}function Qm(t,n,e){n>=t.length?t.push(e):t.splice(n,0,e)}function gs(t,n){return n>=t.length-1?t.pop():t.splice(n,1)[0]}function Eb(t,n){let e=[];for(let i=0;i<t;i++)e.push(n);return e}function Ib(t,n,e,i){let r=t.length;if(r==n)t.push(e,i);else if(r===1)t.push(i,t[0]),t[0]=e;else{for(r--,t.push(t[r-1],t[r]);r>n;){let o=r-2;t[r]=t[o],r--}t[n]=e,t[n+1]=i}}function vs(t,n,e){let i=ko(t,n);return i>=0?t[i|1]=e:(i=~i,Ib(t,i,n,e)),i}function Uc(t,n){let e=ko(t,n);if(e>=0)return t[e|1]}function ko(t,n){return gM(t,n,1)}function gM(t,n,e){let i=0,r=t.length>>e;for(;r!==i;){let o=i+(r-i>>1),a=t[o<<e];if(n===a)return o<<e;a>n?r=o:i=o+1}return~(r<<e)}var Zi={},kt=[],Qi=new _(""),Km=new _("",-1),Xm=new _(""),ds=class{get(n,e=Rr){if(e===Rr){let r=wb("",-201);throw r.name="\u0275NotFound",r}return e}};function zn(t){return{\u0275providers:t}}function Mb(t){return zn([{provide:Qi,multi:!0,useValue:t}])}function Sb(...t){return{\u0275providers:Jm(!0,t),\u0275fromNgModule:!0}}function Jm(t,...n){let e=[],i=new Set,r,o=a=>{e.push(a)};return Hc(n,a=>{let s=a;Ac(s,o,[],i)&&(r||=[],r.push(s))}),r!==void 0&&Tb(r,o),e}function Tb(t,n){for(let e=0;e<t.length;e++){let{ngModule:i,providers:r}=t[e];eh(r,o=>{n(o,i)})}}function Ac(t,n,e,i){if(t=Ct(t),!t)return!1;let r=null,o=Sm(t),a=!o&&Un(t);if(!o&&!a){let l=t.ngModule;if(o=Sm(l),o)r=l;else return!1}else{if(a&&!a.standalone)return!1;r=t}let s=i.has(r);if(a){if(s)return!1;if(i.add(r),a.dependencies){let l=typeof a.dependencies=="function"?a.dependencies():a.dependencies;for(let c of l)Ac(c,n,e,i)}}else if(o){if(o.imports!=null&&!s){i.add(r);let c;Hc(o.imports,u=>{Ac(u,n,e,i)&&(c||=[],c.push(u))}),c!==void 0&&Tb(c,n)}if(!s){let c=Gi(r)||(()=>new r);n({provide:r,useFactory:c,deps:kt},r),n({provide:Xm,useValue:r,multi:!0},r),n({provide:Qi,useValue:()=>P(r),multi:!0},r)}let l=o.providers;if(l!=null&&!s){let c=t;eh(l,u=>{n(u,c)})}}else return!1;return r!==t&&t.providers!==void 0}function eh(t,n){for(let e of t)Hm(e)&&(e=e.\u0275providers),Array.isArray(e)?eh(e,n):n(e)}var vM=we({provide:String,useValue:we});function kb(t){return t!==null&&typeof t=="object"&&vM in t}function _M(t){return!!(t&&t.useExisting)}function bM(t){return!!(t&&t.useFactory)}function Nr(t){return typeof t=="function"}function Ab(t){return!!t.useClass}var _s=new _(""),Tc={},pb={},Mm;function Ao(){return Mm===void 0&&(Mm=new ds),Mm}var Ce=class{},Pr=class extends Ce{parent;source;scopes;records=new Map;_ngOnDestroyHooks=new Set;_onDestroyHooks=[];get destroyed(){return this._destroyed}_destroyed=!1;injectorDefTypes;constructor(n,e,i,r){super(),this.parent=e,this.source=i,this.scopes=r,Om(n,a=>this.processProvider(a)),this.records.set(Km,So(void 0,this)),r.has("environment")&&this.records.set(Ce,So(void 0,this));let o=this.records.get(_s);o!=null&&typeof o.value=="string"&&this.scopes.add(o.value),this.injectorDefTypes=new Set(this.get(Xm,kt,{self:!0}))}retrieve(n,e){let i=Or(e)||0;try{return this.get(n,Rr,i)}catch(r){if(Mo(r))return r;throw r}}destroy(){ls(this),this._destroyed=!0;let n=q(null);try{for(let i of this._ngOnDestroyHooks)i.ngOnDestroy();let e=this._onDestroyHooks;this._onDestroyHooks=[];for(let i of e)i()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),q(n)}}onDestroy(n){return ls(this),this._onDestroyHooks.push(n),()=>this.removeOnDestroy(n)}runInContext(n){ls(this);let e=Vn(this),i=jt(void 0),r;try{return n()}finally{Vn(e),jt(i)}}get(n,e=Rr,i){if(ls(this),n.hasOwnProperty(hb))return n[hb](this);let r=Or(i),o,a=Vn(this),s=jt(void 0);try{if(!(r&4)){let c=this.records.get(n);if(c===void 0){let u=xM(n)&&ps(n);u&&this.injectableDefInScope(u)?c=So(Rm(n),Tc):c=null,this.records.set(n,c)}if(c!=null)return this.hydrate(n,c,r)}let l=r&2?Ao():this.parent;return e=r&8&&e===Rr?null:e,l.get(n,e)}catch(l){let c=dM(l);throw c===-200||c===-201?new M(c,null):l}finally{jt(s),Vn(a)}}resolveInjectorInitializers(){let n=q(null),e=Vn(this),i=jt(void 0),r;try{let o=this.get(Qi,kt,{self:!0});for(let a of o)a()}finally{Vn(e),jt(i),q(n)}}toString(){return"R3Injector[...]"}processProvider(n){n=Ct(n);let e=Nr(n)?n:Ct(n&&n.provide),i=wM(n);if(!Nr(n)&&n.multi===!0){let r=this.records.get(e);r||(r=So(void 0,Tc,!0),r.factory=()=>Am(r.multi),this.records.set(e,r)),e=n,r.multi.push(n)}this.records.set(e,i)}hydrate(n,e,i){let r=q(null);try{if(e.value===pb)throw Ym("");return e.value===Tc&&(e.value=pb,e.value=e.factory(void 0,i)),typeof e.value=="object"&&e.value&&DM(e.value)&&this._ngOnDestroyHooks.add(e.value),e.value}finally{q(r)}}injectableDefInScope(n){if(!n.providedIn)return!1;let e=Ct(n.providedIn);return typeof e=="string"?e==="any"||this.scopes.has(e):this.injectorDefTypes.has(e)}removeOnDestroy(n){let e=this._onDestroyHooks.indexOf(n);e!==-1&&this._onDestroyHooks.splice(e,1)}};function Rm(t){let n=ps(t),e=n!==null?n.factory:Gi(t);if(e!==null)return e;if(t instanceof _)throw new M(-204,!1);if(t instanceof Function)return yM(t);throw new M(-204,!1)}function yM(t){if(t.length>0)throw new M(-204,!1);let e=sM(t);return e!==null?()=>e.factory(t):()=>new t}function wM(t){if(kb(t))return So(void 0,t.useValue);{let n=th(t);return So(n,Tc)}}function th(t,n,e){let i;if(Nr(t)){let r=Ct(t);return Gi(r)||Rm(r)}else if(kb(t))i=()=>Ct(t.useValue);else if(bM(t))i=()=>t.useFactory(...Am(t.deps||[]));else if(_M(t))i=(r,o)=>P(Ct(t.useExisting),o!==void 0&&o&8?8:void 0);else{let r=Ct(t&&(t.useClass||t.provide));if(CM(t))i=()=>new r(...Am(t.deps));else return Gi(r)||Rm(r)}return i}function ls(t){if(t.destroyed)throw new M(-205,!1)}function So(t,n,e=!1){return{factory:t,value:n,multi:e?[]:void 0}}function CM(t){return!!t.deps}function DM(t){return t!==null&&typeof t=="object"&&typeof t.ngOnDestroy=="function"}function xM(t){return typeof t=="function"||typeof t=="object"&&t.ngMetadataName==="InjectionToken"}function Om(t,n){for(let e of t)Array.isArray(e)?Om(e,n):e&&Hm(e)?Om(e.\u0275providers,n):n(e)}function at(t,n){let e;t instanceof Pr?(ls(t),e=t):e=new km(t);let i,r=Vn(e),o=jt(void 0);try{return n()}finally{Vn(r),jt(o)}}function Rb(){return Cb()!==void 0||ss()!=null}var En=0,Y=1,ne=2,ot=3,an=4,Bt=5,Lr=6,Ro=7,Qe=8,_i=9,$n=10,xe=11,Oo=12,nh=13,jr=14,Vt=15,Ki=16,Br=17,Wn=18,bi=19,ih=20,vi=21,zc=22,qi=23,Yt=24,Vr=25,Xi=26,Be=27,Ob=1,rh=6,Ji=7,bs=8,Hr=9,We=10;function yi(t){return Array.isArray(t)&&typeof t[Ob]=="object"}function In(t){return Array.isArray(t)&&t[Ob]===!0}function oh(t){return(t.flags&4)!==0}function Gn(t){return t.componentOffset>-1}function ys(t){return(t.flags&1)===1}function qn(t){return!!t.template}function No(t){return(t[ne]&512)!==0}function Ur(t){return(t[ne]&256)===256}var ah="svg",Nb="math";function sn(t){for(;Array.isArray(t);)t=t[En];return t}function sh(t,n){return sn(n[t])}function ln(t,n){return sn(n[t.index])}function $c(t,n){return t.data[n]}function lh(t,n){return t[n]}function ch(t,n,e,i){e>=t.data.length&&(t.data[e]=null,t.blueprint[e]=null),n[e]=i}function cn(t,n){let e=n[t];return yi(e)?e:e[En]}function Pb(t){return(t[ne]&4)===4}function Wc(t){return(t[ne]&128)===128}function Fb(t){return In(t[ot])}function Zt(t,n){return n==null?null:t[n]}function dh(t){t[Br]=0}function uh(t){t[ne]&1024||(t[ne]|=1024,Wc(t)&&zr(t))}function Lb(t,n){for(;t>0;)n=n[jr],t--;return n}function ws(t){return!!(t[ne]&9216||t[Yt]?.dirty)}function Gc(t){t[$n].changeDetectionScheduler?.notify(8),t[ne]&64&&(t[ne]|=1024),ws(t)&&zr(t)}function zr(t){t[$n].changeDetectionScheduler?.notify(0);let n=Yi(t);for(;n!==null&&!(n[ne]&8192||(n[ne]|=8192,!Wc(n)));)n=Yi(n)}function fh(t,n){if(Ur(t))throw new M(911,!1);t[vi]===null&&(t[vi]=[]),t[vi].push(n)}function jb(t,n){if(t[vi]===null)return;let e=t[vi].indexOf(n);e!==-1&&t[vi].splice(e,1)}function Yi(t){let n=t[ot];return In(n)?n[ot]:n}function mh(t){return t[Ro]??=[]}function hh(t){return t.cleanup??=[]}function Bb(t,n,e,i){let r=mh(n);r.push(e),t.firstCreatePass&&hh(t).push(i,r.length-1)}var fe={lFrame:Qb(null),bindingsEnabled:!0,skipHydrationRootTNode:null};var Nm=!1;function Vb(){return fe.lFrame.elementDepthCount}function Hb(){fe.lFrame.elementDepthCount++}function ph(){fe.lFrame.elementDepthCount--}function gh(){return fe.bindingsEnabled}function vh(){return fe.skipHydrationRootTNode!==null}function _h(t){return fe.skipHydrationRootTNode===t}function bh(){fe.skipHydrationRootTNode=null}function Z(){return fe.lFrame.lView}function Re(){return fe.lFrame.tView}function Ve(t){return fe.lFrame.contextLView=t,t[Qe]}function He(t){return fe.lFrame.contextLView=null,t}function mt(){let t=yh();for(;t!==null&&t.type===64;)t=t.parent;return t}function yh(){return fe.lFrame.currentTNode}function Ub(){let t=fe.lFrame,n=t.currentTNode;return t.isParent?n:n.parent}function Po(t,n){let e=fe.lFrame;e.currentTNode=t,e.isParent=n}function wh(){return fe.lFrame.isParent}function Ch(){fe.lFrame.isParent=!1}function zb(){return fe.lFrame.contextLView}function Dh(){return Nm}function us(t){let n=Nm;return Nm=t,n}function qc(){let t=fe.lFrame,n=t.bindingRootIndex;return n===-1&&(n=t.bindingRootIndex=t.tView.bindingStartIndex),n}function $b(t){return fe.lFrame.bindingIndex=t}function Yn(){return fe.lFrame.bindingIndex++}function xh(t){let n=fe.lFrame,e=n.bindingIndex;return n.bindingIndex=n.bindingIndex+t,e}function Wb(){return fe.lFrame.inI18n}function Gb(t,n){let e=fe.lFrame;e.bindingIndex=e.bindingRootIndex=t,Yc(n)}function qb(){return fe.lFrame.currentDirectiveIndex}function Yc(t){fe.lFrame.currentDirectiveIndex=t}function Yb(t){let n=fe.lFrame.currentDirectiveIndex;return n===-1?null:t[n]}function Zc(){return fe.lFrame.currentQueryIndex}function Cs(t){fe.lFrame.currentQueryIndex=t}function EM(t){let n=t[Y];return n.type===2?n.declTNode:n.type===1?t[Bt]:null}function Eh(t,n,e){if(e&4){let r=n,o=t;for(;r=r.parent,r===null&&!(e&1);)if(r=EM(o),r===null||(o=o[jr],r.type&10))break;if(r===null)return!1;n=r,t=o}let i=fe.lFrame=Zb();return i.currentTNode=n,i.lView=t,!0}function Qc(t){let n=Zb(),e=t[Y];fe.lFrame=n,n.currentTNode=e.firstChild,n.lView=t,n.tView=e,n.contextLView=t,n.bindingIndex=e.bindingStartIndex,n.inI18n=!1}function Zb(){let t=fe.lFrame,n=t===null?null:t.child;return n===null?Qb(t):n}function Qb(t){let n={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:t,child:null,inI18n:!1};return t!==null&&(t.child=n),n}function Kb(){let t=fe.lFrame;return fe.lFrame=t.parent,t.currentTNode=null,t.lView=null,t}var Ih=Kb;function Kc(){let t=Kb();t.isParent=!0,t.tView=null,t.selectedIndex=-1,t.contextLView=null,t.elementDepthCount=0,t.currentDirectiveIndex=-1,t.currentNamespace=null,t.bindingRootIndex=-1,t.bindingIndex=-1,t.currentQueryIndex=0}function Xb(t){return(fe.lFrame.contextLView=Lb(t,fe.lFrame.contextLView))[Qe]}function wi(){return fe.lFrame.selectedIndex}function er(t){fe.lFrame.selectedIndex=t}function Fo(){let t=fe.lFrame;return $c(t.tView,t.selectedIndex)}function Ds(){fe.lFrame.currentNamespace=ah}function Jb(){return fe.lFrame.currentNamespace}var ey=!0;function Xc(){return ey}function Jc(t){ey=t}function Pm(t,n=null,e=null,i){let r=Mh(t,n,e,i);return r.resolveInjectorInitializers(),r}function Mh(t,n=null,e=null,i,r=new Set){let o=[e||kt,Sb(t)],a;return new Pr(o,n||Ao(),a||null,r)}var F=class t{static THROW_IF_NOT_FOUND=Rr;static NULL=new ds;static create(n,e){if(Array.isArray(n))return Pm({name:""},e,n,"");{let i=n.name??"";return Pm({name:i},n.parent,n.providers,i)}}static \u0275prov=b({token:t,providedIn:"any",factory:()=>P(Km)});static __NG_ELEMENT_ID__=-1},j=new _(""),Dt=(()=>{class t{static __NG_ELEMENT_ID__=IM;static __NG_ENV_ID__=e=>e}return t})(),Rc=class extends Dt{_lView;constructor(n){super(),this._lView=n}get destroyed(){return Ur(this._lView)}onDestroy(n){let e=this._lView;return fh(e,n),()=>jb(e,n)}};function IM(){return new Rc(Z())}var ty=!1,ny=new _(""),Ci=(()=>{class t{taskId=0;pendingTasks=new Set;destroyed=!1;pendingTask=new Je(!1);debugTaskTracker=d(ny,{optional:!0});get hasPendingTasks(){return this.destroyed?!1:this.pendingTask.value}get hasPendingTasksObservable(){return this.destroyed?new ee(e=>{e.next(!1),e.complete()}):this.pendingTask}add(){!this.hasPendingTasks&&!this.destroyed&&this.pendingTask.next(!0);let e=this.taskId++;return this.pendingTasks.add(e),this.debugTaskTracker?.add(e),e}has(e){return this.pendingTasks.has(e)}remove(e){this.pendingTasks.delete(e),this.debugTaskTracker?.remove(e),this.pendingTasks.size===0&&this.hasPendingTasks&&this.pendingTask.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this.hasPendingTasks&&this.pendingTask.next(!1),this.destroyed=!0,this.pendingTask.unsubscribe()}static \u0275prov=b({token:t,providedIn:"root",factory:()=>new t})}return t})(),Fm=class extends D{__isAsync;destroyRef=void 0;pendingTasks=void 0;constructor(n=!1){super(),this.__isAsync=n,Rb()&&(this.destroyRef=d(Dt,{optional:!0})??void 0,this.pendingTasks=d(Ci,{optional:!0})??void 0)}emit(n){let e=q(null);try{super.next(n)}finally{q(e)}}subscribe(n,e,i){let r=n,o=e||(()=>null),a=i;if(n&&typeof n=="object"){let l=n;r=l.next?.bind(l),o=l.error?.bind(l),a=l.complete?.bind(l)}this.__isAsync&&(o=this.wrapInTimeout(o),r&&(r=this.wrapInTimeout(r)),a&&(a=this.wrapInTimeout(a)));let s=super.subscribe({next:r,error:o,complete:a});return n instanceof le&&n.add(s),s}wrapInTimeout(n){return e=>{let i=this.pendingTasks?.add();setTimeout(()=>{try{n(e)}finally{i!==void 0&&this.pendingTasks?.remove(i)}})}}},A=Fm;function Oc(...t){}function Sh(t){let n,e;function i(){t=Oc;try{e!==void 0&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(e),n!==void 0&&clearTimeout(n)}catch{}}return n=setTimeout(()=>{t(),i()}),typeof requestAnimationFrame=="function"&&(e=requestAnimationFrame(()=>{t(),i()})),()=>i()}function iy(t){return queueMicrotask(()=>t()),()=>{t=Oc}}var Th="isAngularZone",fs=Th+"_ID",MM=0,R=class t{hasPendingMacrotasks=!1;hasPendingMicrotasks=!1;isStable=!0;onUnstable=new A(!1);onMicrotaskEmpty=new A(!1);onStable=new A(!1);onError=new A(!1);constructor(n){let{enableLongStackTrace:e=!1,shouldCoalesceEventChangeDetection:i=!1,shouldCoalesceRunChangeDetection:r=!1,scheduleInRootZone:o=ty}=n;if(typeof Zone>"u")throw new M(908,!1);Zone.assertZonePatched();let a=this;a._nesting=0,a._outer=a._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(a._inner=a._inner.fork(new Zone.TaskTrackingZoneSpec)),e&&Zone.longStackTraceZoneSpec&&(a._inner=a._inner.fork(Zone.longStackTraceZoneSpec)),a.shouldCoalesceEventChangeDetection=!r&&i,a.shouldCoalesceRunChangeDetection=r,a.callbackScheduled=!1,a.scheduleInRootZone=o,kM(a)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get(Th)===!0}static assertInAngularZone(){if(!t.isInAngularZone())throw new M(909,!1)}static assertNotInAngularZone(){if(t.isInAngularZone())throw new M(909,!1)}run(n,e,i){return this._inner.run(n,e,i)}runTask(n,e,i,r){let o=this._inner,a=o.scheduleEventTask("NgZoneEvent: "+r,n,SM,Oc,Oc);try{return o.runTask(a,e,i)}finally{o.cancelTask(a)}}runGuarded(n,e,i){return this._inner.runGuarded(n,e,i)}runOutsideAngular(n){return this._outer.run(n)}},SM={};function kh(t){if(t._nesting==0&&!t.hasPendingMicrotasks&&!t.isStable)try{t._nesting++,t.onMicrotaskEmpty.emit(null)}finally{if(t._nesting--,!t.hasPendingMicrotasks)try{t.runOutsideAngular(()=>t.onStable.emit(null))}finally{t.isStable=!0}}}function TM(t){if(t.isCheckStableRunning||t.callbackScheduled)return;t.callbackScheduled=!0;function n(){Sh(()=>{t.callbackScheduled=!1,Lm(t),t.isCheckStableRunning=!0,kh(t),t.isCheckStableRunning=!1})}t.scheduleInRootZone?Zone.root.run(()=>{n()}):t._outer.run(()=>{n()}),Lm(t)}function kM(t){let n=()=>{TM(t)},e=MM++;t._inner=t._inner.fork({name:"angular",properties:{[Th]:!0,[fs]:e,[fs+e]:!0},onInvokeTask:(i,r,o,a,s,l)=>{if(AM(l))return i.invokeTask(o,a,s,l);try{return gb(t),i.invokeTask(o,a,s,l)}finally{(t.shouldCoalesceEventChangeDetection&&a.type==="eventTask"||t.shouldCoalesceRunChangeDetection)&&n(),vb(t)}},onInvoke:(i,r,o,a,s,l,c)=>{try{return gb(t),i.invoke(o,a,s,l,c)}finally{t.shouldCoalesceRunChangeDetection&&!t.callbackScheduled&&!RM(l)&&n(),vb(t)}},onHasTask:(i,r,o,a)=>{i.hasTask(o,a),r===o&&(a.change=="microTask"?(t._hasPendingMicrotasks=a.microTask,Lm(t),kh(t)):a.change=="macroTask"&&(t.hasPendingMacrotasks=a.macroTask))},onHandleError:(i,r,o,a)=>(i.handleError(o,a),t.runOutsideAngular(()=>t.onError.emit(a)),!1)})}function Lm(t){t._hasPendingMicrotasks||(t.shouldCoalesceEventChangeDetection||t.shouldCoalesceRunChangeDetection)&&t.callbackScheduled===!0?t.hasPendingMicrotasks=!0:t.hasPendingMicrotasks=!1}function gb(t){t._nesting++,t.isStable&&(t.isStable=!1,t.onUnstable.emit(null))}function vb(t){t._nesting--,kh(t)}var ms=class{hasPendingMicrotasks=!1;hasPendingMacrotasks=!1;isStable=!0;onUnstable=new A;onMicrotaskEmpty=new A;onStable=new A;onError=new A;run(n,e,i){return n.apply(e,i)}runGuarded(n,e,i){return n.apply(e,i)}runOutsideAngular(n){return n()}runTask(n,e,i,r){return n.apply(e,i)}};function AM(t){return ry(t,"__ignore_ng_zone__")}function RM(t){return ry(t,"__scheduler_tick__")}function ry(t,n){return!Array.isArray(t)||t.length!==1?!1:t[0]?.data?.[n]===!0}var At=class{_console=console;handleError(n){this._console.error("ERROR",n)}},Qt=new _("",{factory:()=>{let t=d(R),n=d(Ce),e;return i=>{t.runOutsideAngular(()=>{n.destroyed&&!e?setTimeout(()=>{throw i}):(e??=n.get(At),e.handleError(i))})}}}),oy={provide:Qi,useValue:()=>{let t=d(At,{optional:!0})},multi:!0},OM=new _("",{factory:()=>{let t=d(j).defaultView;if(!t)return;let n=d(Qt),e=o=>{n(o.reason),o.preventDefault()},i=o=>{o.error?n(o.error):n(new Error(o.message,{cause:o})),o.preventDefault()},r=()=>{t.addEventListener("unhandledrejection",e),t.addEventListener("error",i)};typeof Zone<"u"?Zone.root.run(r):r(),d(Dt).onDestroy(()=>{t.removeEventListener("error",i),t.removeEventListener("unhandledrejection",e)})}});function Ah(){return zn([Mb(()=>{d(OM)})])}function N(t,n){let[e,i,r]=dm(t,n?.equal),o=e,a=o[Xe];return o.set=i,o.update=r,o.asReadonly=ed.bind(o),o}function ed(){let t=this[Xe];if(t.readonlyFn===void 0){let n=()=>this();n[Xe]=t,t.readonlyFn=n}return t.readonlyFn}var Lo=(()=>{class t{view;node;constructor(e,i){this.view=e,this.node=i}static __NG_ELEMENT_ID__=NM}return t})();function NM(){return new Lo(Z(),mt())}var Hn=class{},xs=new _("",{factory:()=>!0});var Rh=new _(""),jo=(()=>{class t{internalPendingTasks=d(Ci);scheduler=d(Hn);errorHandler=d(Qt);add(){let e=this.internalPendingTasks.add();return()=>{this.internalPendingTasks.has(e)&&(this.scheduler.notify(11),this.internalPendingTasks.remove(e))}}run(e){let i=this.add();e().catch(this.errorHandler).finally(i)}static \u0275prov=b({token:t,providedIn:"root",factory:()=>new t})}return t})(),td=(()=>{class t{static \u0275prov=b({token:t,providedIn:"root",factory:()=>new jm})}return t})(),jm=class{dirtyEffectCount=0;queues=new Map;add(n){this.enqueue(n),this.schedule(n)}schedule(n){n.dirty&&this.dirtyEffectCount++}remove(n){let e=n.zone,i=this.queues.get(e);i.has(n)&&(i.delete(n),n.dirty&&this.dirtyEffectCount--)}enqueue(n){let e=n.zone;this.queues.has(e)||this.queues.set(e,new Set);let i=this.queues.get(e);i.has(n)||i.add(n)}flush(){for(;this.dirtyEffectCount>0;){let n=!1;for(let[e,i]of this.queues)e===null?n||=this.flushQueue(i):n||=e.run(()=>this.flushQueue(i));n||(this.dirtyEffectCount=0)}}flushQueue(n){let e=!1;for(let i of n)i.dirty&&(this.dirtyEffectCount--,e=!0,i.run());return e}},Nc=class{[Xe];constructor(n){this[Xe]=n}destroy(){this[Xe].destroy()}};function Kt(t,n){let e=n?.injector??d(F),i=n?.manualCleanup!==!0?e.get(Dt):null,r,o=e.get(Lo,null,{optional:!0}),a=e.get(Hn);return o!==null?(r=LM(o.view,a,t),i instanceof Rc&&i._lView===o.view&&(i=null)):r=jM(t,e.get(td),a),r.injector=e,i!==null&&(r.onDestroyFns=[i.onDestroy(()=>r.destroy())]),new Nc(r)}var ay=K(y({},fm),{cleanupFns:void 0,zone:null,onDestroyFns:null,run(){let t=us(!1);try{mm(this)}finally{us(t)}},cleanup(){if(!this.cleanupFns?.length)return;let t=q(null);try{for(;this.cleanupFns.length;)this.cleanupFns.pop()()}finally{this.cleanupFns=[],q(t)}}}),PM=K(y({},ay),{consumerMarkedDirty(){this.scheduler.schedule(this),this.notifier.notify(12)},destroy(){if(Vi(this),this.onDestroyFns!==null)for(let t of this.onDestroyFns)t();this.cleanup(),this.scheduler.remove(this)}}),FM=K(y({},ay),{consumerMarkedDirty(){this.view[ne]|=8192,zr(this.view),this.notifier.notify(13)},destroy(){if(Vi(this),this.onDestroyFns!==null)for(let t of this.onDestroyFns)t();this.cleanup(),this.view[qi]?.delete(this)}});function LM(t,n,e){let i=Object.create(FM);return i.view=t,i.zone=typeof Zone<"u"?Zone.current:null,i.notifier=n,i.fn=sy(i,e),t[qi]??=new Set,t[qi].add(i),i.consumerMarkedDirty(i),i}function jM(t,n,e){let i=Object.create(PM);return i.fn=sy(i,t),i.scheduler=n,i.notifier=e,i.zone=typeof Zone<"u"?Zone.current:null,i.scheduler.add(i),i.notifier.notify(12),i}function sy(t,n){return()=>{n(e=>(t.cleanupFns??=[]).push(e))}}function Ns(t){return{toString:t}.toString()}function $M(t){return typeof t=="function"}function Uy(t,n,e,i){n!==null?n.applyValueToInputSignal(n,i):t[e]=i}var dd=class{previousValue;currentValue;firstChange;constructor(n,e,i){this.previousValue=n,this.currentValue=e,this.firstChange=i}isFirstChange(){return this.firstChange}},Ue=(()=>{let t=()=>zy;return t.ngInherit=!0,t})();function zy(t){return t.type.prototype.ngOnChanges&&(t.setInput=GM),WM}function WM(){let t=Wy(this),n=t?.current;if(n){let e=t.previous;if(e===Zi)t.previous=n;else for(let i in n)e[i]=n[i];t.current=null,this.ngOnChanges(n)}}function GM(t,n,e,i,r){let o=this.declaredInputs[i],a=Wy(t)||qM(t,{previous:Zi,current:null}),s=a.current||(a.current={}),l=a.previous,c=l[o];s[o]=new dd(c&&c.currentValue,e,l===Zi),Uy(t,n,r,e)}var $y="__ngSimpleChanges__";function Wy(t){return t[$y]||null}function qM(t,n){return t[$y]=n}var ly=[];var De=function(t,n=null,e){for(let i=0;i<ly.length;i++){let r=ly[i];r(t,n,e)}},ve=(function(t){return t[t.TemplateCreateStart=0]="TemplateCreateStart",t[t.TemplateCreateEnd=1]="TemplateCreateEnd",t[t.TemplateUpdateStart=2]="TemplateUpdateStart",t[t.TemplateUpdateEnd=3]="TemplateUpdateEnd",t[t.LifecycleHookStart=4]="LifecycleHookStart",t[t.LifecycleHookEnd=5]="LifecycleHookEnd",t[t.OutputStart=6]="OutputStart",t[t.OutputEnd=7]="OutputEnd",t[t.BootstrapApplicationStart=8]="BootstrapApplicationStart",t[t.BootstrapApplicationEnd=9]="BootstrapApplicationEnd",t[t.BootstrapComponentStart=10]="BootstrapComponentStart",t[t.BootstrapComponentEnd=11]="BootstrapComponentEnd",t[t.ChangeDetectionStart=12]="ChangeDetectionStart",t[t.ChangeDetectionEnd=13]="ChangeDetectionEnd",t[t.ChangeDetectionSyncStart=14]="ChangeDetectionSyncStart",t[t.ChangeDetectionSyncEnd=15]="ChangeDetectionSyncEnd",t[t.AfterRenderHooksStart=16]="AfterRenderHooksStart",t[t.AfterRenderHooksEnd=17]="AfterRenderHooksEnd",t[t.ComponentStart=18]="ComponentStart",t[t.ComponentEnd=19]="ComponentEnd",t[t.DeferBlockStateStart=20]="DeferBlockStateStart",t[t.DeferBlockStateEnd=21]="DeferBlockStateEnd",t[t.DynamicComponentStart=22]="DynamicComponentStart",t[t.DynamicComponentEnd=23]="DynamicComponentEnd",t[t.HostBindingsUpdateStart=24]="HostBindingsUpdateStart",t[t.HostBindingsUpdateEnd=25]="HostBindingsUpdateEnd",t})(ve||{});function YM(t,n,e){let{ngOnChanges:i,ngOnInit:r,ngDoCheck:o}=n.type.prototype;if(i){let a=zy(n);(e.preOrderHooks??=[]).push(t,a),(e.preOrderCheckHooks??=[]).push(t,a)}r&&(e.preOrderHooks??=[]).push(0-t,r),o&&((e.preOrderHooks??=[]).push(t,o),(e.preOrderCheckHooks??=[]).push(t,o))}function Gy(t,n){for(let e=n.directiveStart,i=n.directiveEnd;e<i;e++){let o=t.data[e].type.prototype,{ngAfterContentInit:a,ngAfterContentChecked:s,ngAfterViewInit:l,ngAfterViewChecked:c,ngOnDestroy:u}=o;a&&(t.contentHooks??=[]).push(-e,a),s&&((t.contentHooks??=[]).push(e,s),(t.contentCheckHooks??=[]).push(e,s)),l&&(t.viewHooks??=[]).push(-e,l),c&&((t.viewHooks??=[]).push(e,c),(t.viewCheckHooks??=[]).push(e,c)),u!=null&&(t.destroyHooks??=[]).push(e,u)}}function od(t,n,e){qy(t,n,3,e)}function ad(t,n,e,i){(t[ne]&3)===e&&qy(t,n,e,i)}function Oh(t,n){let e=t[ne];(e&3)===n&&(e&=16383,e+=1,t[ne]=e)}function qy(t,n,e,i){let r=i!==void 0?t[Br]&65535:0,o=i??-1,a=n.length-1,s=0;for(let l=r;l<a;l++)if(typeof n[l+1]=="number"){if(s=n[l],i!=null&&s>=i)break}else n[l]<0&&(t[Br]+=65536),(s<o||o==-1)&&(ZM(t,e,n,l),t[Br]=(t[Br]&4294901760)+l+2),l++}function cy(t,n){De(ve.LifecycleHookStart,t,n);let e=q(null);try{n.call(t)}finally{q(e),De(ve.LifecycleHookEnd,t,n)}}function ZM(t,n,e,i){let r=e[i]<0,o=e[i+1],a=r?-e[i]:e[i],s=t[a];r?t[ne]>>14<t[Br]>>16&&(t[ne]&3)===n&&(t[ne]+=16384,cy(s,o)):cy(s,o)}var Vo=-1,Wr=class{factory;name;injectImpl;resolving=!1;canSeeViewProviders;multi;componentProviders;index;providerFactory;constructor(n,e,i,r){this.factory=n,this.name=r,this.canSeeViewProviders=e,this.injectImpl=i}};function QM(t){return(t.flags&8)!==0}function KM(t){return(t.flags&16)!==0}function XM(t,n,e){let i=0;for(;i<e.length;){let r=e[i];if(typeof r=="number"){if(r!==0)break;i++;let o=e[i++],a=e[i++],s=e[i++];t.setAttribute(n,a,s,o)}else{let o=r,a=e[++i];JM(o)?t.setProperty(n,o,a):t.setAttribute(n,o,a),i++}}return i}function Yy(t){return t===3||t===4||t===6}function JM(t){return t.charCodeAt(0)===64}function Ho(t,n){if(!(n===null||n.length===0))if(t===null||t.length===0)t=n.slice();else{let e=-1;for(let i=0;i<n.length;i++){let r=n[i];typeof r=="number"?e=r:e===0||(e===-1||e===2?dy(t,e,r,null,n[++i]):dy(t,e,r,null,null))}}return t}function dy(t,n,e,i,r){let o=0,a=t.length;if(n===-1)a=-1;else for(;o<t.length;){let s=t[o++];if(typeof s=="number"){if(s===n){a=-1;break}else if(s>n){a=o-1;break}}}for(;o<t.length;){let s=t[o];if(typeof s=="number")break;if(s===e){r!==null&&(t[o+1]=r);return}o++,r!==null&&o++}a!==-1&&(t.splice(a,0,n),o=a+1),t.splice(o++,0,e),r!==null&&t.splice(o++,0,r)}function Zy(t){return t!==Vo}function ud(t){return t&32767}function eS(t){return t>>16}function fd(t,n){let e=eS(t),i=n;for(;e>0;)i=i[jr],e--;return i}var zh=!0;function md(t){let n=zh;return zh=t,n}var tS=256,Qy=tS-1,Ky=5,nS=0,Zn={};function iS(t,n,e){let i;typeof e=="string"?i=e.charCodeAt(0)||0:e.hasOwnProperty(Fr)&&(i=e[Fr]),i==null&&(i=e[Fr]=nS++);let r=i&Qy,o=1<<r;n.data[t+(r>>Ky)]|=o}function hd(t,n){let e=Xy(t,n);if(e!==-1)return e;let i=n[Y];i.firstCreatePass&&(t.injectorIndex=n.length,Nh(i.data,t),Nh(n,null),Nh(i.blueprint,null));let r=Ep(t,n),o=t.injectorIndex;if(Zy(r)){let a=ud(r),s=fd(r,n),l=s[Y].data;for(let c=0;c<8;c++)n[o+c]=s[a+c]|l[a+c]}return n[o+8]=r,o}function Nh(t,n){t.push(0,0,0,0,0,0,0,0,n)}function Xy(t,n){return t.injectorIndex===-1||t.parent&&t.parent.injectorIndex===t.injectorIndex||n[t.injectorIndex+8]===null?-1:t.injectorIndex}function Ep(t,n){if(t.parent&&t.parent.injectorIndex!==-1)return t.parent.injectorIndex;let e=0,i=null,r=n;for(;r!==null;){if(i=i0(r),i===null)return Vo;if(e++,r=r[jr],i.injectorIndex!==-1)return i.injectorIndex|e<<16}return Vo}function $h(t,n,e){iS(t,n,e)}function rS(t,n){if(n==="class")return t.classes;if(n==="style")return t.styles;let e=t.attrs;if(e){let i=e.length,r=0;for(;r<i;){let o=e[r];if(Yy(o))break;if(o===0)r=r+2;else if(typeof o=="number")for(r++;r<i&&typeof e[r]=="string";)r++;else{if(o===n)return e[r+1];r=r+2}}}return null}function Jy(t,n,e){if(e&8||t!==void 0)return t;Vc(n,"NodeInjector")}function e0(t,n,e,i){if(e&8&&i===void 0&&(i=null),(e&3)===0){let r=t[_i],o=jt(void 0);try{return r?r.get(n,i,e&8):Zm(n,i,e&8)}finally{jt(o)}}return Jy(i,n,e)}function t0(t,n,e,i=0,r){if(t!==null){if(n[ne]&2048&&!(i&2)){let a=lS(t,n,e,i,Zn);if(a!==Zn)return a}let o=n0(t,n,e,i,Zn);if(o!==Zn)return o}return e0(n,e,i,r)}function n0(t,n,e,i,r){let o=aS(e);if(typeof o=="function"){if(!Eh(n,t,i))return i&1?Jy(r,e,i):e0(n,e,i,r);try{let a;if(a=o(i),a==null&&!(i&8))Vc(e);else return a}finally{Ih()}}else if(typeof o=="number"){let a=null,s=Xy(t,n),l=Vo,c=i&1?n[Vt][Bt]:null;for((s===-1||i&4)&&(l=s===-1?Ep(t,n):n[s+8],l===Vo||!fy(i,!1)?s=-1:(a=n[Y],s=ud(l),n=fd(l,n)));s!==-1;){let u=n[Y];if(uy(o,s,u.data)){let f=oS(s,n,e,a,i,c);if(f!==Zn)return f}l=n[s+8],l!==Vo&&fy(i,n[Y].data[s+8]===c)&&uy(o,s,n)?(a=u,s=ud(l),n=fd(l,n)):s=-1}}return r}function oS(t,n,e,i,r,o){let a=n[Y],s=a.data[t+8],l=i==null?Gn(s)&&zh:i!=a&&(s.type&3)!==0,c=r&1&&o===s,u=sd(s,a,e,l,c);return u!==null?Ss(n,a,u,s,r):Zn}function sd(t,n,e,i,r){let o=t.providerIndexes,a=n.data,s=o&1048575,l=t.directiveStart,c=t.directiveEnd,u=o>>20,f=i?s:s+u,p=r?s+u:c;for(let g=f;g<p;g++){let C=a[g];if(g<l&&e===C||g>=l&&C.type===e)return g}if(r){let g=a[l];if(g&&qn(g)&&g.type===e)return l}return null}function Ss(t,n,e,i,r){let o=t[e],a=n.data;if(o instanceof Wr){let s=o;if(s.resolving)throw Ym("");let l=md(s.canSeeViewProviders);s.resolving=!0;let c=a[e].type||a[e],u,f=s.injectImpl?jt(s.injectImpl):null,p=Eh(t,i,0);try{o=t[e]=s.factory(void 0,r,a,t,i),n.firstCreatePass&&e>=i.directiveStart&&YM(e,a[e],n)}finally{f!==null&&jt(f),md(l),s.resolving=!1,Ih()}}return o}function aS(t){if(typeof t=="string")return t.charCodeAt(0)||0;let n=t.hasOwnProperty(Fr)?t[Fr]:void 0;return typeof n=="number"?n>=0?n&Qy:sS:n}function uy(t,n,e){let i=1<<t;return!!(e[n+(t>>Ky)]&i)}function fy(t,n){return!(t&2)&&!(t&1&&n)}var $r=class{_tNode;_lView;constructor(n,e){this._tNode=n,this._lView=e}get(n,e,i){return t0(this._tNode,this._lView,n,Or(i),e)}};function sS(){return new $r(mt(),Z())}function ze(t){return Ns(()=>{let n=t.prototype.constructor,e=n[cs]||Wh(n),i=Object.prototype,r=Object.getPrototypeOf(t.prototype).constructor;for(;r&&r!==i;){let o=r[cs]||Wh(r);if(o&&o!==e)return o;r=Object.getPrototypeOf(r)}return o=>new o})}function Wh(t){return Bm(t)?()=>{let n=Wh(Ct(t));return n&&n()}:Gi(t)}function lS(t,n,e,i,r){let o=t,a=n;for(;o!==null&&a!==null&&a[ne]&2048&&!No(a);){let s=n0(o,a,e,i|2,Zn);if(s!==Zn)return s;let l=o.parent;if(!l){let c=a[ih];if(c){let u=c.get(e,Zn,i&-5);if(u!==Zn)return u}l=i0(a),a=a[jr]}o=l}return r}function i0(t){let n=t[Y],e=n.type;return e===2?n.declTNode:e===1?t[Bt]:null}function Md(t){return rS(mt(),t)}function cS(){return qo(mt(),Z())}function qo(t,n){return new O(ln(t,n))}var O=(()=>{class t{nativeElement;constructor(e){this.nativeElement=e}static __NG_ELEMENT_ID__=cS}return t})();function r0(t){return t instanceof O?t.nativeElement:t}function dS(){return this._results[Symbol.iterator]()}var Di=class{_emitDistinctChangesOnly;dirty=!0;_onDirty=void 0;_results=[];_changesDetected=!1;_changes=void 0;length=0;first=void 0;last=void 0;get changes(){return this._changes??=new D}constructor(n=!1){this._emitDistinctChangesOnly=n}get(n){return this._results[n]}map(n){return this._results.map(n)}filter(n){return this._results.filter(n)}find(n){return this._results.find(n)}reduce(n,e){return this._results.reduce(n,e)}forEach(n){this._results.forEach(n)}some(n){return this._results.some(n)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(n,e){this.dirty=!1;let i=xb(n);(this._changesDetected=!Db(this._results,i,e))&&(this._results=i,this.length=i.length,this.last=i[this.length-1],this.first=i[0])}notifyOnChanges(){this._changes!==void 0&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.next(this)}onDirty(n){this._onDirty=n}setDirty(){this.dirty=!0,this._onDirty?.()}destroy(){this._changes!==void 0&&(this._changes.complete(),this._changes.unsubscribe())}[Symbol.iterator]=dS};function o0(t){return(t.flags&128)===128}var Ip=(function(t){return t[t.OnPush=0]="OnPush",t[t.Eager=1]="Eager",t[t.Default=1]="Default",t})(Ip||{}),a0=new Map,uS=0;function fS(){return uS++}function mS(t){a0.set(t[bi],t)}function Gh(t){a0.delete(t[bi])}var my="__ngContext__";function Uo(t,n){yi(n)?(t[my]=n[bi],mS(n)):t[my]=n}function s0(t){return c0(t[Oo])}function l0(t){return c0(t[an])}function c0(t){for(;t!==null&&!In(t);)t=t[an];return t}var hS;function Mp(t){hS=t}var ir=new _("",{factory:()=>pS}),pS="ng";var Sd=new _(""),Yr=new _("",{providedIn:"platform",factory:()=>"unknown"}),Ps=new _(""),Yo=new _("",{factory:()=>d(j).body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});var d0="r";var u0="di";var f0=!1,m0=new _("",{factory:()=>f0});var Td=new _("");var gS=(t,n,e,i)=>{};function vS(t,n,e,i){gS(t,n,e,i)}function kd(t){return(t.flags&32)===32}var _S=()=>null;function h0(t,n,e=!1){return _S(t,n,e)}function p0(t,n){let e=t.contentQueries;if(e!==null){let i=q(null);try{for(let r=0;r<e.length;r+=2){let o=e[r],a=e[r+1];if(a!==-1){let s=t.data[a];Cs(o),s.contentQueries(2,n[a],a)}}}finally{q(i)}}}function qh(t,n,e){Cs(0);let i=q(null);try{n(t,e)}finally{q(i)}}function g0(t,n,e){if(oh(n)){let i=q(null);try{let r=n.directiveStart,o=n.directiveEnd;for(let a=r;a<o;a++){let s=t.data[a];if(s.contentQueries){let l=e[a];s.contentQueries(1,l,a)}}}finally{q(i)}}}var Sn=(function(t){return t[t.Emulated=0]="Emulated",t[t.None=2]="None",t[t.ShadowDom=3]="ShadowDom",t[t.ExperimentalIsolatedShadowDom=4]="ExperimentalIsolatedShadowDom",t})(Sn||{});var nd;function bS(){if(nd===void 0&&(nd=null,To.trustedTypes))try{nd=To.trustedTypes.createPolicy("angular",{createHTML:t=>t,createScript:t=>t,createScriptURL:t=>t})}catch{}return nd}function Ad(t){return bS()?.createHTML(t)||t}var xi=class{changingThisBreaksApplicationSecurity;constructor(n){this.changingThisBreaksApplicationSecurity=n}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${Pc})`}},Yh=class extends xi{getTypeName(){return"HTML"}},Zh=class extends xi{getTypeName(){return"Style"}},Qh=class extends xi{getTypeName(){return"Script"}},Kh=class extends xi{getTypeName(){return"URL"}},Xh=class extends xi{getTypeName(){return"ResourceURL"}};function Tn(t){return t instanceof xi?t.changingThisBreaksApplicationSecurity:t}function Zr(t,n){let e=v0(t);if(e!=null&&e!==n){if(e==="ResourceURL"&&n==="URL")return!0;throw new Error(`Required a safe ${n}, got a ${e} (see ${Pc})`)}return e===n}function v0(t){return t instanceof xi&&t.getTypeName()||null}function Sp(t){return new Yh(t)}function Tp(t){return new Zh(t)}function kp(t){return new Qh(t)}function Ap(t){return new Kh(t)}function Rp(t){return new Xh(t)}function yS(t){let n=new ep(t);return wS()?new Jh(n):n}var Jh=class{inertDocumentHelper;constructor(n){this.inertDocumentHelper=n}getInertBodyElement(n){n="<body><remove></remove>"+n;try{let e=new window.DOMParser().parseFromString(Ad(n),"text/html").body;return e===null?this.inertDocumentHelper.getInertBodyElement(n):(e.firstChild?.remove(),e)}catch{return null}}},ep=class{defaultDoc;inertDocument;constructor(n){this.defaultDoc=n,this.inertDocument=this.defaultDoc.implementation.createHTMLDocument("sanitization-inert")}getInertBodyElement(n){let e=this.inertDocument.createElement("template");return e.innerHTML=Ad(n),e}};function wS(){try{return!!new window.DOMParser().parseFromString(Ad(""),"text/html")}catch{return!1}}var CS=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;function Rd(t){return t=String(t),t.match(CS)?t:"unsafe:"+t}function Ei(t){let n={};for(let e of t.split(","))n[e]=!0;return n}function Fs(...t){let n={};for(let e of t)for(let i in e)e.hasOwnProperty(i)&&(n[i]=!0);return n}var _0=Ei("area,br,col,hr,img,wbr"),b0=Ei("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),y0=Ei("rp,rt"),DS=Fs(y0,b0),xS=Fs(b0,Ei("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")),ES=Fs(y0,Ei("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")),hy=Fs(_0,xS,ES,DS),w0=Ei("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),IS=Ei("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,srcset,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"),MS=Ei("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext"),SS=Fs(w0,IS,MS),TS=Ei("script,style,template");var tp=class{sanitizedSomething=!1;buf=[];sanitizeChildren(n){let e=n.firstChild,i=!0,r=[];for(;e;){if(e.nodeType===Node.ELEMENT_NODE?i=this.startElement(e):e.nodeType===Node.TEXT_NODE?this.chars(e.nodeValue):this.sanitizedSomething=!0,i&&e.firstChild){r.push(e),e=RS(e);continue}for(;e;){e.nodeType===Node.ELEMENT_NODE&&this.endElement(e);let o=AS(e);if(o){e=o;break}e=r.pop()}}return this.buf.join("")}startElement(n){let e=py(n).toLowerCase();if(!hy.hasOwnProperty(e))return this.sanitizedSomething=!0,!TS.hasOwnProperty(e);this.buf.push("<"),this.buf.push(e);let i=n.attributes;for(let r=0;r<i.length;r++){let o=i.item(r),a=o.name,s=a.toLowerCase();if(!SS.hasOwnProperty(s)){this.sanitizedSomething=!0;continue}let l=o.value;w0[s]&&(l=Rd(l)),this.buf.push(" ",a,'="',gy(l),'"')}return this.buf.push(">"),!0}endElement(n){let e=py(n).toLowerCase();hy.hasOwnProperty(e)&&!_0.hasOwnProperty(e)&&(this.buf.push("</"),this.buf.push(e),this.buf.push(">"))}chars(n){this.buf.push(gy(n))}};function kS(t,n){return(t.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY)!==Node.DOCUMENT_POSITION_CONTAINED_BY}function AS(t){let n=t.nextSibling;if(n&&t!==n.previousSibling)throw C0(n);return n}function RS(t){let n=t.firstChild;if(n&&kS(t,n))throw C0(n);return n}function py(t){let n=t.nodeName;return typeof n=="string"?n:"FORM"}function C0(t){return new Error(`Failed to sanitize html because the element is clobbered: ${t.outerHTML}`)}var OS=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,NS=/([^\#-~ |!])/g;function gy(t){return t.replace(/&/g,"&amp;").replace(OS,function(n){let e=n.charCodeAt(0),i=n.charCodeAt(1);return"&#"+((e-55296)*1024+(i-56320)+65536)+";"}).replace(NS,function(n){return"&#"+n.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}var id;function Op(t,n){let e=null;try{id=id||yS(t);let i=n?String(n):"";e=id.getInertBodyElement(i);let r=5,o=i;do{if(r===0)throw new Error("Failed to sanitize html because the input is unstable");r--,i=o,o=e.innerHTML,e=id.getInertBodyElement(i)}while(i!==o);let s=new tp().sanitizeChildren(vy(e)||e);return Ad(s)}finally{if(e){let i=vy(e)||e;for(;i.firstChild;)i.firstChild.remove()}}}function vy(t){return"content"in t&&PS(t)?t.content:null}function PS(t){return t.nodeType===Node.ELEMENT_NODE&&t.nodeName==="TEMPLATE"}function FS(t,n){return t.createText(n)}function LS(t,n,e){t.setValue(n,e)}function D0(t,n,e){return t.createElement(n,e)}function pd(t,n,e,i,r){t.insertBefore(n,e,i,r)}function x0(t,n,e){t.appendChild(n,e)}function _y(t,n,e,i,r){i!==null?pd(t,n,e,i,r):x0(t,n,e)}function E0(t,n,e,i){t.removeChild(null,n,e,i)}function jS(t,n,e){t.setAttribute(n,"style",e)}function BS(t,n,e){e===""?t.removeAttribute(n,"class"):t.setAttribute(n,"class",e)}function I0(t,n,e){let{mergedAttrs:i,classes:r,styles:o}=e;i!==null&&XM(t,n,i),r!==null&&BS(t,n,r),o!==null&&jS(t,n,o)}var xt=(function(t){return t[t.NONE=0]="NONE",t[t.HTML=1]="HTML",t[t.STYLE=2]="STYLE",t[t.SCRIPT=3]="SCRIPT",t[t.URL=4]="URL",t[t.RESOURCE_URL=5]="RESOURCE_URL",t})(xt||{});function M0(t){return t instanceof Function?t():t}function VS(t,n,e){let i=t.length;for(;;){let r=t.indexOf(n,e);if(r===-1)return r;if(r===0||t.charCodeAt(r-1)<=32){let o=n.length;if(r+o===i||t.charCodeAt(r+o)<=32)return r}e=r+1}}var S0="ng-template";function HS(t,n,e,i){let r=0;if(i){for(;r<n.length&&typeof n[r]=="string";r+=2)if(n[r]==="class"&&VS(n[r+1].toLowerCase(),e,0)!==-1)return!0}else if(Np(t))return!1;if(r=n.indexOf(1,r),r>-1){let o;for(;++r<n.length&&typeof(o=n[r])=="string";)if(o.toLowerCase()===e)return!0}return!1}function Np(t){return t.type===4&&t.value!==S0}function US(t,n,e){let i=t.type===4&&!e?S0:t.value;return n===i}function zS(t,n,e){let i=4,r=t.attrs,o=r!==null?GS(r):0,a=!1;for(let s=0;s<n.length;s++){let l=n[s];if(typeof l=="number"){if(!a&&!Mn(i)&&!Mn(l))return!1;if(a&&Mn(l))continue;a=!1,i=l|i&1;continue}if(!a)if(i&4){if(i=2|i&1,l!==""&&!US(t,l,e)||l===""&&n.length===1){if(Mn(i))return!1;a=!0}}else if(i&8){if(r===null||!HS(t,r,l,e)){if(Mn(i))return!1;a=!0}}else{let c=n[++s],u=$S(l,r,Np(t),e);if(u===-1){if(Mn(i))return!1;a=!0;continue}if(c!==""){let f;if(u>o?f="":f=r[u+1].toLowerCase(),i&2&&c!==f){if(Mn(i))return!1;a=!0}}}}return Mn(i)||a}function Mn(t){return(t&1)===0}function $S(t,n,e,i){if(n===null)return-1;let r=0;if(i||!e){let o=!1;for(;r<n.length;){let a=n[r];if(a===t)return r;if(a===3||a===6)o=!0;else if(a===1||a===2){let s=n[++r];for(;typeof s=="string";)s=n[++r];continue}else{if(a===4)break;if(a===0){r+=4;continue}}r+=o?1:2}return-1}else return qS(n,t)}function T0(t,n,e=!1){for(let i=0;i<n.length;i++)if(zS(t,n[i],e))return!0;return!1}function WS(t){let n=t.attrs;if(n!=null){let e=n.indexOf(5);if((e&1)===0)return n[e+1]}return null}function GS(t){for(let n=0;n<t.length;n++){let e=t[n];if(Yy(e))return n}return t.length}function qS(t,n){let e=t.indexOf(4);if(e>-1)for(e++;e<t.length;){let i=t[e];if(typeof i=="number")return-1;if(i===n)return e;e++}return-1}function YS(t,n){e:for(let e=0;e<n.length;e++){let i=n[e];if(t.length===i.length){for(let r=0;r<t.length;r++)if(t[r]!==i[r])continue e;return!0}}return!1}function by(t,n){return t?":not("+n.trim()+")":n}function ZS(t){let n=t[0],e=1,i=2,r="",o=!1;for(;e<t.length;){let a=t[e];if(typeof a=="string")if(i&2){let s=t[++e];r+="["+a+(s.length>0?'="'+s+'"':"")+"]"}else i&8?r+="."+a:i&4&&(r+=" "+a);else r!==""&&!Mn(a)&&(n+=by(o,r),r=""),i=a,o=o||!Mn(i);e++}return r!==""&&(n+=by(o,r)),n}function QS(t){return t.map(ZS).join(",")}function KS(t){let n=[],e=[],i=1,r=2;for(;i<t.length;){let o=t[i];if(typeof o=="string")r===2?o!==""&&n.push(o,t[++i]):r===8&&e.push(o);else{if(!Mn(r))break;r=o}i++}return e.length&&n.push(1,...e),n}var Ht={};function Pp(t,n,e,i,r,o,a,s,l,c,u){let f=Be+i,p=f+r,g=XS(f,p),C=typeof c=="function"?c():c;return g[Y]={type:t,blueprint:g,template:e,queries:null,viewQuery:s,declTNode:n,data:g.slice().fill(null,f),bindingStartIndex:f,expandoStartIndex:p,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof o=="function"?o():o,pipeRegistry:typeof a=="function"?a():a,firstChild:null,schemas:l,consts:C,incompleteFirstPass:!1,ssrId:u}}function XS(t,n){let e=[];for(let i=0;i<n;i++)e.push(i<t?null:Ht);return e}function JS(t){let n=t.tView;return n===null||n.incompleteFirstPass?t.tView=Pp(1,null,t.template,t.decls,t.vars,t.directiveDefs,t.pipeDefs,t.viewQuery,t.schemas,t.consts,t.id):n}function Fp(t,n,e,i,r,o,a,s,l,c,u){let f=n.blueprint.slice();return f[En]=r,f[ne]=i|4|128|8|64|1024,(c!==null||t&&t[ne]&2048)&&(f[ne]|=2048),dh(f),f[ot]=f[jr]=t,f[Qe]=e,f[$n]=a||t&&t[$n],f[xe]=s||t&&t[xe],f[_i]=l||t&&t[_i]||null,f[Bt]=o,f[bi]=fS(),f[Lr]=u,f[ih]=c,f[Vt]=n.type==2?t[Vt]:f,f}function eT(t,n,e){let i=ln(n,t),r=JS(e),o=t[$n].rendererFactory,a=Lp(t,Fp(t,r,null,k0(e),i,n,null,o.createRenderer(i,e),null,null,null));return t[n.index]=a}function k0(t){let n=16;return t.signals?n=4096:t.onPush&&(n=64),n}function A0(t,n,e,i){if(e===0)return-1;let r=n.length;for(let o=0;o<e;o++)n.push(i),t.blueprint.push(i),t.data.push(null);return r}function Lp(t,n){return t[Oo]?t[nh][an]=n:t[Oo]=n,t[nh]=n,n}function w(t=1){R0(Re(),Z(),wi()+t,!1)}function R0(t,n,e,i){if(!i)if((n[ne]&3)===3){let o=t.preOrderCheckHooks;o!==null&&od(n,o,e)}else{let o=t.preOrderHooks;o!==null&&ad(n,o,0,e)}er(e)}var Od=(function(t){return t[t.None=0]="None",t[t.SignalBased=1]="SignalBased",t[t.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",t})(Od||{});function np(t,n,e,i){let r=q(null);try{let[o,a,s]=t.inputs[e],l=null;(a&Od.SignalBased)!==0&&(l=n[o][Xe]),l!==null&&l.transformFn!==void 0?i=l.transformFn(i):s!==null&&(i=s.call(n,i)),t.setInput!==null?t.setInput(n,l,i,e,o):Uy(n,l,o,i)}finally{q(r)}}var Qn=(function(t){return t[t.Important=1]="Important",t[t.DashCase=2]="DashCase",t})(Qn||{}),tT;function jp(t,n){return tT(t,n)}var y3=typeof document<"u"&&typeof document?.documentElement?.getAnimations=="function";var ip=new WeakMap,Es=new WeakSet;function nT(t,n){let e=ip.get(t);if(!e||e.length===0)return;let i=n.parentNode,r=n.previousSibling;for(let o=e.length-1;o>=0;o--){let a=e[o],s=a.parentNode;a===n?(e.splice(o,1),Es.add(a),a.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}}))):(r&&a===r||s&&i&&s!==i)&&(e.splice(o,1),a.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}})),a.parentNode?.removeChild(a))}}function iT(t,n){let e=ip.get(t);e?e.includes(n)||e.push(n):ip.set(t,[n])}var Gr=new Set,Nd=(function(t){return t[t.CHANGE_DETECTION=0]="CHANGE_DETECTION",t[t.AFTER_NEXT_RENDER=1]="AFTER_NEXT_RENDER",t})(Nd||{}),kn=new _(""),yy=new Set;function Xn(t){yy.has(t)||(yy.add(t),performance?.mark?.("mark_feature_usage",{detail:{feature:t}}))}var Pd=(()=>{class t{impl=null;execute(){this.impl?.execute()}static \u0275prov=b({token:t,providedIn:"root",factory:()=>new t})}return t})(),Bp=[0,1,2,3],Vp=(()=>{class t{ngZone=d(R);scheduler=d(Hn);errorHandler=d(At,{optional:!0});sequences=new Set;deferredRegistrations=new Set;executing=!1;constructor(){d(kn,{optional:!0})}execute(){let e=this.sequences.size>0;e&&De(ve.AfterRenderHooksStart),this.executing=!0;for(let i of Bp)for(let r of this.sequences)if(!(r.erroredOrDestroyed||!r.hooks[i]))try{r.pipelinedValue=this.ngZone.runOutsideAngular(()=>this.maybeTrace(()=>{let o=r.hooks[i];return o(r.pipelinedValue)},r.snapshot))}catch(o){r.erroredOrDestroyed=!0,this.errorHandler?.handleError(o)}this.executing=!1;for(let i of this.sequences)i.afterRun(),i.once&&(this.sequences.delete(i),i.destroy());for(let i of this.deferredRegistrations)this.sequences.add(i);this.deferredRegistrations.size>0&&this.scheduler.notify(7),this.deferredRegistrations.clear(),e&&De(ve.AfterRenderHooksEnd)}register(e){let{view:i}=e;i!==void 0?((i[Vr]??=[]).push(e),zr(i),i[ne]|=8192):this.executing?this.deferredRegistrations.add(e):this.addSequence(e)}addSequence(e){this.sequences.add(e),this.scheduler.notify(7)}unregister(e){this.executing&&this.sequences.has(e)?(e.erroredOrDestroyed=!0,e.pipelinedValue=void 0,e.once=!0):(this.sequences.delete(e),this.deferredRegistrations.delete(e))}maybeTrace(e,i){return i?i.run(Nd.AFTER_NEXT_RENDER,e):e()}static \u0275prov=b({token:t,providedIn:"root",factory:()=>new t})}return t})(),Ts=class{impl;hooks;view;once;snapshot;erroredOrDestroyed=!1;pipelinedValue=void 0;unregisterOnDestroy;constructor(n,e,i,r,o,a=null){this.impl=n,this.hooks=e,this.view=i,this.once=r,this.snapshot=a,this.unregisterOnDestroy=o?.onDestroy(()=>this.destroy())}afterRun(){this.erroredOrDestroyed=!1,this.pipelinedValue=void 0,this.snapshot?.dispose(),this.snapshot=null}destroy(){this.impl.unregister(this),this.unregisterOnDestroy?.();let n=this.view?.[Vr];n&&(this.view[Vr]=n.filter(e=>e!==this))}};function $e(t,n){let e=n?.injector??d(F);return Xn("NgAfterNextRender"),oT(t,e,n,!0)}function rT(t){return t instanceof Function?[void 0,void 0,t,void 0]:[t.earlyRead,t.write,t.mixedReadWrite,t.read]}function oT(t,n,e,i){let r=n.get(Pd);r.impl??=n.get(Vp);let o=n.get(kn,null,{optional:!0}),a=e?.manualCleanup!==!0?n.get(Dt):null,s=n.get(Lo,null,{optional:!0}),l=new Ts(r.impl,rT(t),s?.view,i,a,o?.snapshot(null));return r.impl.register(l),l}var O0=new _("",{factory:()=>({queue:new Set,isScheduled:!1,scheduler:null,injector:d(Ce)})});function N0(t,n,e){let i=t.get(O0);if(Array.isArray(n))for(let r of n)i.queue.add(r),e?.detachedLeaveAnimationFns?.push(r);else i.queue.add(n),e?.detachedLeaveAnimationFns?.push(n);i.scheduler&&i.scheduler(t)}function aT(t,n){let e=t.get(O0);if(n.detachedLeaveAnimationFns){for(let i of n.detachedLeaveAnimationFns)e.queue.delete(i);n.detachedLeaveAnimationFns=void 0}}function sT(t,n){for(let[e,i]of n)N0(t,i.animateFns)}function wy(t,n,e,i){let r=t?.[Xi]?.enter;n!==null&&r&&r.has(e.index)&&sT(i,r)}function Bo(t,n,e,i,r,o,a,s){if(r!=null){let l,c=!1;In(r)?l=r:yi(r)&&(c=!0,r=r[En]);let u=sn(r);t===0&&i!==null?(wy(s,i,o,e),a==null?x0(n,i,u):pd(n,i,u,a||null,!0)):t===1&&i!==null?(wy(s,i,o,e),pd(n,i,u,a||null,!0),nT(o,u)):t===2?(s?.[Xi]?.leave?.has(o.index)&&iT(o,u),Es.delete(u),Cy(s,o,e,f=>{if(Es.has(u)){Es.delete(u);return}E0(n,u,c,f)})):t===3&&(Es.delete(u),Cy(s,o,e,()=>{n.destroyNode(u)})),l!=null&&_T(n,t,e,l,o,i,a)}}function lT(t,n){P0(t,n),n[En]=null,n[Bt]=null}function cT(t,n,e,i,r,o){i[En]=r,i[Bt]=n,Ld(t,i,e,1,r,o)}function P0(t,n){n[$n].changeDetectionScheduler?.notify(9),Ld(t,n,n[xe],2,null,null)}function dT(t){let n=t[Oo];if(!n)return Ph(t[Y],t);for(;n;){let e=null;if(yi(n))e=n[Oo];else{let i=n[We];i&&(e=i)}if(!e){for(;n&&!n[an]&&n!==t;)yi(n)&&Ph(n[Y],n),n=n[ot];n===null&&(n=t),yi(n)&&Ph(n[Y],n),e=n&&n[an]}n=e}}function Hp(t,n){let e=t[Hr],i=e.indexOf(n);e.splice(i,1)}function Fd(t,n){if(Ur(n))return;let e=n[xe];e.destroyNode&&Ld(t,n,e,3,null,null),dT(n)}function Ph(t,n){if(Ur(n))return;let e=q(null);try{n[ne]&=-129,n[ne]|=256,n[Yt]&&Vi(n[Yt]),mT(t,n),fT(t,n),n[Y].type===1&&n[xe].destroy();let i=n[Ki];if(i!==null&&In(n[ot])){i!==n[ot]&&Hp(i,n);let r=n[Wn];r!==null&&r.detachView(t)}Gh(n)}finally{q(e)}}function Cy(t,n,e,i){let r=t?.[Xi];if(r==null||r.leave==null||!r.leave.has(n.index))return i(!1);t&&Gr.add(t[bi]),N0(e,()=>{if(r.leave&&r.leave.has(n.index)){let a=r.leave.get(n.index),s=[];if(a){for(let l=0;l<a.animateFns.length;l++){let c=a.animateFns[l],{promise:u}=c();s.push(u)}r.detachedLeaveAnimationFns=void 0}r.running=Promise.allSettled(s),uT(t,i)}else t&&Gr.delete(t[bi]),i(!1)},r)}function uT(t,n){let e=t[Xi]?.running;if(e){e.then(()=>{t[Xi].running=void 0,Gr.delete(t[bi]),n(!0)});return}n(!1)}function fT(t,n){let e=t.cleanup,i=n[Ro];if(e!==null)for(let a=0;a<e.length-1;a+=2)if(typeof e[a]=="string"){let s=e[a+3];s>=0?i[s]():i[-s].unsubscribe(),a+=2}else{let s=i[e[a+1]];e[a].call(s)}i!==null&&(n[Ro]=null);let r=n[vi];if(r!==null){n[vi]=null;for(let a=0;a<r.length;a++){let s=r[a];s()}}let o=n[qi];if(o!==null){n[qi]=null;for(let a of o)a.destroy()}}function mT(t,n){let e;if(t!=null&&(e=t.destroyHooks)!=null)for(let i=0;i<e.length;i+=2){let r=n[e[i]];if(!(r instanceof Wr)){let o=e[i+1];if(Array.isArray(o))for(let a=0;a<o.length;a+=2){let s=r[o[a]],l=o[a+1];De(ve.LifecycleHookStart,s,l);try{l.call(s)}finally{De(ve.LifecycleHookEnd,s,l)}}else{De(ve.LifecycleHookStart,r,o);try{o.call(r)}finally{De(ve.LifecycleHookEnd,r,o)}}}}}function F0(t,n,e){return hT(t,n.parent,e)}function hT(t,n,e){let i=n;for(;i!==null&&i.type&168;)n=i,i=n.parent;if(i===null)return e[En];if(Gn(i)){let{encapsulation:r}=t.data[i.directiveStart+i.componentOffset];if(r===Sn.None||r===Sn.Emulated)return null}return ln(i,e)}function L0(t,n,e){return gT(t,n,e)}function pT(t,n,e){return t.type&40?ln(t,e):null}var gT=pT,Dy;function Up(t,n,e,i){let r=F0(t,i,n),o=n[xe],a=i.parent||n[Bt],s=L0(a,i,n);if(r!=null)if(Array.isArray(e))for(let l=0;l<e.length;l++)_y(o,r,e[l],s,!1);else _y(o,r,e,s,!1);Dy!==void 0&&Dy(o,i,n,e,r)}function Is(t,n){if(n!==null){let e=n.type;if(e&3)return ln(n,t);if(e&4)return rp(-1,t[n.index]);if(e&8){let i=n.child;if(i!==null)return Is(t,i);{let r=t[n.index];return In(r)?rp(-1,r):sn(r)}}else{if(e&128)return Is(t,n.next);if(e&32)return jp(n,t)()||sn(t[n.index]);{let i=j0(t,n);if(i!==null){if(Array.isArray(i))return i[0];let r=Yi(t[Vt]);return Is(r,i)}else return Is(t,n.next)}}}return null}function j0(t,n){if(n!==null){let i=t[Vt][Bt],r=n.projection;return i.projection[r]}return null}function rp(t,n){let e=We+t+1;if(e<n.length){let i=n[e],r=i[Y].firstChild;if(r!==null)return Is(i,r)}return n[Ji]}function zp(t,n,e,i,r,o,a){for(;e!=null;){let s=i[_i];if(e.type===128){e=e.next;continue}let l=i[e.index],c=e.type;if(a&&n===0&&(l&&Uo(sn(l),i),e.flags|=2),!kd(e))if(c&8)zp(t,n,e.child,i,r,o,!1),Bo(n,t,s,r,l,e,o,i);else if(c&32){let u=jp(e,i),f;for(;f=u();)Bo(n,t,s,r,f,e,o,i);Bo(n,t,s,r,l,e,o,i)}else c&16?B0(t,n,i,e,r,o):Bo(n,t,s,r,l,e,o,i);e=a?e.projectionNext:e.next}}function Ld(t,n,e,i,r,o){zp(e,i,t.firstChild,n,r,o,!1)}function vT(t,n,e){let i=n[xe],r=F0(t,e,n),o=e.parent||n[Bt],a=L0(o,e,n);B0(i,0,n,e,r,a)}function B0(t,n,e,i,r,o){let a=e[Vt],l=a[Bt].projection[i.projection];if(Array.isArray(l))for(let c=0;c<l.length;c++){let u=l[c];Bo(n,t,e[_i],r,u,i,o,e)}else{let c=l,u=a[ot];o0(i)&&(c.flags|=128),zp(t,n,c,u,r,o,!0)}}function _T(t,n,e,i,r,o,a){let s=i[Ji],l=sn(i);s!==l&&Bo(n,t,e,o,s,r,a);for(let c=We;c<i.length;c++){let u=i[c];Ld(u[Y],u,t,n,o,s)}}function bT(t,n,e,i,r){if(n)r?t.addClass(e,i):t.removeClass(e,i);else{let o=i.indexOf("-")===-1?void 0:Qn.DashCase;r==null?t.removeStyle(e,i,o):(typeof r=="string"&&r.endsWith("!important")&&(r=r.slice(0,-10),o|=Qn.Important),t.setStyle(e,i,r,o))}}function V0(t,n,e,i,r){let o=wi(),a=i&2;try{er(-1),a&&n.length>Be&&R0(t,n,Be,!1);let s=a?ve.TemplateUpdateStart:ve.TemplateCreateStart;De(s,r,e),e(i,r)}finally{er(o);let s=a?ve.TemplateUpdateEnd:ve.TemplateCreateEnd;De(s,r,e)}}function $p(t,n,e){xT(t,n,e),(e.flags&64)===64&&ET(t,n,e)}function jd(t,n,e=ln){let i=n.localNames;if(i!==null){let r=n.index+1;for(let o=0;o<i.length;o+=2){let a=i[o+1],s=a===-1?e(n,t):t[a];t[r++]=s}}}function yT(t,n,e,i){let o=i.get(m0,f0)||e===Sn.ShadowDom||e===Sn.ExperimentalIsolatedShadowDom,a=t.selectRootElement(n,o);return wT(a),a}function wT(t){CT(t)}var CT=()=>null;function DT(t){return t==="class"?"className":t==="for"?"htmlFor":t==="formaction"?"formAction":t==="innerHtml"?"innerHTML":t==="readonly"?"readOnly":t==="tabindex"?"tabIndex":t}function H0(t,n,e,i,r,o){let a=n[Y];if(Bd(t,a,n,e,i)){Gn(t)&&z0(n,t.index);return}t.type&3&&(e=DT(e)),U0(t,n,e,i,r,o)}function U0(t,n,e,i,r,o){if(t.type&3){let a=ln(t,n);i=o!=null?o(i,t.value||"",e):i,r.setProperty(a,e,i)}else t.type&12}function z0(t,n){let e=cn(n,t);e[ne]&16||(e[ne]|=64)}function xT(t,n,e){let i=e.directiveStart,r=e.directiveEnd;Gn(e)&&eT(n,e,t.data[i+e.componentOffset]),t.firstCreatePass||hd(e,n);let o=e.initialInputs;for(let a=i;a<r;a++){let s=t.data[a],l=Ss(n,t,a,e);if(Uo(l,n),o!==null&&ST(n,a-i,l,s,e,o),qn(s)){let c=cn(e.index,n);c[Qe]=Ss(n,t,a,e)}}}function ET(t,n,e){let i=e.directiveStart,r=e.directiveEnd,o=e.index,a=qb();try{er(o);for(let s=i;s<r;s++){let l=t.data[s],c=n[s];Yc(s),(l.hostBindings!==null||l.hostVars!==0||l.hostAttrs!==null)&&IT(l,c)}}finally{er(-1),Yc(a)}}function IT(t,n){t.hostBindings!==null&&t.hostBindings(1,n)}function $0(t,n){let e=t.directiveRegistry,i=null;if(e)for(let r=0;r<e.length;r++){let o=e[r];T0(n,o.selectors,!1)&&(i??=[],qn(o)?i.unshift(o):i.push(o))}return i}function MT(t,n,e,i,r,o){let a=ln(t,n);W0(n[xe],a,o,t.value,e,i,r)}function W0(t,n,e,i,r,o,a){if(o==null)t.removeAttribute(n,r,e);else{let s=a==null?Bc(o):a(o,i||"",r);t.setAttribute(n,r,s,e)}}function ST(t,n,e,i,r,o){let a=o[n];if(a!==null)for(let s=0;s<a.length;s+=2){let l=a[s],c=a[s+1];np(i,e,l,c)}}function G0(t,n,e,i,r){let o=Be+e,a=n[Y],s=r(a,n,t,i,e);n[o]=s,Po(t,!0);let l=t.type===2;return l?(I0(n[xe],s,t),(Vb()===0||ys(t))&&Uo(s,n),Hb()):Uo(s,n),Xc()&&(!l||!kd(t))&&Up(a,n,s,t),t}function q0(t){let n=t;return wh()?Ch():(n=n.parent,Po(n,!1)),n}function TT(t,n){let e=t[_i];if(!e)return;let i;try{i=e.get(Qt,null)}catch{i=null}i?.(n)}function Bd(t,n,e,i,r){let o=t.inputs?.[i],a=t.hostDirectiveInputs?.[i],s=!1;if(a)for(let l=0;l<a.length;l+=2){let c=a[l],u=a[l+1],f=n.data[c];np(f,e[c],u,r),s=!0}if(o)for(let l of o){let c=e[l],u=n.data[l];np(u,c,i,r),s=!0}return s}function kT(t,n){let e=cn(n,t),i=e[Y];AT(i,e);let r=e[En];r!==null&&e[Lr]===null&&(e[Lr]=h0(r,e[_i])),De(ve.ComponentStart);try{Wp(i,e,e[Qe])}finally{De(ve.ComponentEnd,e[Qe])}}function AT(t,n){for(let e=n.length;e<t.blueprint.length;e++)n.push(t.blueprint[e])}function Wp(t,n,e){Qc(n);try{let i=t.viewQuery;i!==null&&qh(1,i,e);let r=t.template;r!==null&&V0(t,n,r,1,e),t.firstCreatePass&&(t.firstCreatePass=!1),n[Wn]?.finishViewCreation(t),t.staticContentQueries&&p0(t,n),t.staticViewQueries&&qh(2,t.viewQuery,e);let o=t.components;o!==null&&RT(n,o)}catch(i){throw t.firstCreatePass&&(t.incompleteFirstPass=!0,t.firstCreatePass=!1),i}finally{n[ne]&=-5,Kc()}}function RT(t,n){for(let e=0;e<n.length;e++)kT(t,n[e])}function Ls(t,n,e,i){let r=q(null);try{let o=n.tView,s=t[ne]&4096?4096:16,l=Fp(t,o,e,s,null,n,null,null,i?.injector??null,i?.embeddedViewInjector??null,i?.dehydratedView??null),c=t[n.index];l[Ki]=c;let u=t[Wn];return u!==null&&(l[Wn]=u.createEmbeddedView(o)),Wp(o,l,e),l}finally{q(r)}}function zo(t,n){return!n||n.firstChild===null||o0(t)}function ks(t,n,e,i,r=!1){for(;e!==null;){if(e.type===128){e=r?e.projectionNext:e.next;continue}let o=n[e.index];o!==null&&i.push(sn(o)),In(o)&&Y0(o,i);let a=e.type;if(a&8)ks(t,n,e.child,i);else if(a&32){let s=jp(e,n),l;for(;l=s();)i.push(l)}else if(a&16){let s=j0(n,e);if(Array.isArray(s))i.push(...s);else{let l=Yi(n[Vt]);ks(l[Y],l,s,i,!0)}}e=r?e.projectionNext:e.next}return i}function Y0(t,n){for(let e=We;e<t.length;e++){let i=t[e],r=i[Y].firstChild;r!==null&&ks(i[Y],i,r,n)}t[Ji]!==t[En]&&n.push(t[Ji])}function Z0(t){if(t[Vr]!==null){for(let n of t[Vr])n.impl.addSequence(n);t[Vr].length=0}}var Q0=[];function OT(t){return t[Yt]??NT(t)}function NT(t){let n=Q0.pop()??Object.create(FT);return n.lView=t,n}function PT(t){t.lView[Yt]!==t&&(t.lView=null,Q0.push(t))}var FT=K(y({},Cr),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:t=>{zr(t.lView)},consumerOnSignalRead(){this.lView[Yt]=this}});function LT(t){let n=t[Yt]??Object.create(jT);return n.lView=t,n}var jT=K(y({},Cr),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:t=>{let n=Yi(t.lView);for(;n&&!K0(n[Y]);)n=Yi(n);n&&uh(n)},consumerOnSignalRead(){this.lView[Yt]=this}});function K0(t){return t.type!==2}function X0(t){if(t[qi]===null)return;let n=!0;for(;n;){let e=!1;for(let i of t[qi])i.dirty&&(e=!0,i.zone===null||Zone.current===i.zone?i.run():i.zone.run(()=>i.run()));n=e&&!!(t[ne]&8192)}}var BT=100;function J0(t,n=0){let i=t[$n].rendererFactory,r=!1;r||i.begin?.();try{VT(t,n)}finally{r||i.end?.()}}function VT(t,n){let e=Dh();try{us(!0),op(t,n);let i=0;for(;ws(t);){if(i===BT)throw new M(103,!1);i++,op(t,1)}}finally{us(e)}}function HT(t,n,e,i){if(Ur(n))return;let r=n[ne],o=!1,a=!1;Qc(n);let s=!0,l=null,c=null;o||(K0(t)?(c=OT(n),l=Bi(c)):Zl()===null?(s=!1,c=LT(n),l=Bi(c)):n[Yt]&&(Vi(n[Yt]),n[Yt]=null));try{dh(n),$b(t.bindingStartIndex),e!==null&&V0(t,n,e,2,i);let u=(r&3)===3;if(!o)if(u){let g=t.preOrderCheckHooks;g!==null&&od(n,g,null)}else{let g=t.preOrderHooks;g!==null&&ad(n,g,0,null),Oh(n,0)}if(a||UT(n),X0(n),ew(n,0),t.contentQueries!==null&&p0(t,n),!o)if(u){let g=t.contentCheckHooks;g!==null&&od(n,g)}else{let g=t.contentHooks;g!==null&&ad(n,g,1),Oh(n,1)}$T(t,n);let f=t.components;f!==null&&nw(n,f,0);let p=t.viewQuery;if(p!==null&&qh(2,p,i),!o)if(u){let g=t.viewCheckHooks;g!==null&&od(n,g)}else{let g=t.viewHooks;g!==null&&ad(n,g,2),Oh(n,2)}if(t.firstUpdatePass===!0&&(t.firstUpdatePass=!1),n[zc]){for(let g of n[zc])g();n[zc]=null}o||(Z0(n),n[ne]&=-73)}catch(u){throw o||zr(n),u}finally{c!==null&&(Dr(c,l),s&&PT(c)),Kc()}}function ew(t,n){for(let e=s0(t);e!==null;e=l0(e))for(let i=We;i<e.length;i++){let r=e[i];tw(r,n)}}function UT(t){for(let n=s0(t);n!==null;n=l0(n)){if(!(n[ne]&2))continue;let e=n[Hr];for(let i=0;i<e.length;i++){let r=e[i];uh(r)}}}function zT(t,n,e){De(ve.ComponentStart);let i=cn(n,t);try{tw(i,e)}finally{De(ve.ComponentEnd,i[Qe])}}function tw(t,n){Wc(t)&&op(t,n)}function op(t,n){let i=t[Y],r=t[ne],o=t[Yt],a=!!(n===0&&r&16);if(a||=!!(r&64&&n===0),a||=!!(r&1024),a||=!!(o?.dirty&&bo(o)),a||=!1,o&&(o.dirty=!1),t[ne]&=-9217,a)HT(i,t,i.template,t[Qe]);else if(r&8192){let s=q(null);try{X0(t),ew(t,1);let l=i.components;l!==null&&nw(t,l,1),Z0(t)}finally{q(s)}}}function nw(t,n,e){for(let i=0;i<n.length;i++)zT(t,n[i],e)}function $T(t,n){let e=t.hostBindingOpCodes;if(e!==null)try{for(let i=0;i<e.length;i++){let r=e[i];if(r<0)er(~r);else{let o=r,a=e[++i],s=e[++i];Gb(a,o);let l=n[o];De(ve.HostBindingsUpdateStart,l);try{s(2,l)}finally{De(ve.HostBindingsUpdateEnd,l)}}}}finally{er(-1)}}function Gp(t,n){let e=Dh()?64:1088;for(t[$n].changeDetectionScheduler?.notify(n);t;){t[ne]|=e;let i=Yi(t);if(No(t)&&!i)return t;t=i}return null}function iw(t,n,e,i){return[t,!0,0,n,null,i,null,e,null,null]}function rw(t,n){let e=We+n;if(e<t.length)return t[e]}function js(t,n,e,i=!0){let r=n[Y];if(WT(r,n,t,e),i){let a=rp(e,t),s=n[xe],l=s.parentNode(t[Ji]);l!==null&&cT(r,t[Bt],s,n,l,a)}let o=n[Lr];o!==null&&o.firstChild!==null&&(o.firstChild=null)}function ow(t,n){let e=As(t,n);return e!==void 0&&Fd(e[Y],e),e}function As(t,n){if(t.length<=We)return;let e=We+n,i=t[e];if(i){let r=i[Ki];r!==null&&r!==t&&Hp(r,i),n>0&&(t[e-1][an]=i[an]);let o=gs(t,We+n);lT(i[Y],i);let a=o[Wn];a!==null&&a.detachView(o[Y]),i[ot]=null,i[an]=null,i[ne]&=-129}return i}function WT(t,n,e,i){let r=We+i,o=e.length;i>0&&(e[r-1][an]=n),i<o-We?(n[an]=e[r],Qm(e,We+i,n)):(e.push(n),n[an]=null),n[ot]=e;let a=n[Ki];a!==null&&e!==a&&aw(a,n);let s=n[Wn];s!==null&&s.insertView(t),Gc(n),n[ne]|=128}function aw(t,n){let e=t[Hr],i=n[ot];if(yi(i))t[ne]|=2;else{let r=i[ot][Vt];n[Vt]!==r&&(t[ne]|=2)}e===null?t[Hr]=[n]:e.push(n)}var tr=class{_lView;_cdRefInjectingView;_appRef=null;_attachedToViewContainer=!1;exhaustive;get rootNodes(){let n=this._lView,e=n[Y];return ks(e,n,e.firstChild,[])}constructor(n,e){this._lView=n,this._cdRefInjectingView=e}get context(){return this._lView[Qe]}set context(n){this._lView[Qe]=n}get destroyed(){return Ur(this._lView)}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let n=this._lView[ot];if(In(n)){let e=n[bs],i=e?e.indexOf(this):-1;i>-1&&(As(n,i),gs(e,i))}this._attachedToViewContainer=!1}Fd(this._lView[Y],this._lView)}onDestroy(n){fh(this._lView,n)}markForCheck(){Gp(this._cdRefInjectingView||this._lView,4)}detach(){this._lView[ne]&=-129}reattach(){Gc(this._lView),this._lView[ne]|=128}detectChanges(){this._lView[ne]|=1024,J0(this._lView)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new M(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null;let n=No(this._lView),e=this._lView[Ki];e!==null&&!n&&Hp(e,this._lView),P0(this._lView[Y],this._lView)}attachToAppRef(n){if(this._attachedToViewContainer)throw new M(902,!1);this._appRef=n;let e=No(this._lView),i=this._lView[Ki];i!==null&&!e&&aw(i,this._lView),Gc(this._lView)}};var lt=(()=>{class t{_declarationLView;_declarationTContainer;elementRef;static __NG_ELEMENT_ID__=GT;constructor(e,i,r){this._declarationLView=e,this._declarationTContainer=i,this.elementRef=r}get ssrId(){return this._declarationTContainer.tView?.ssrId||null}createEmbeddedView(e,i){return this.createEmbeddedViewImpl(e,i)}createEmbeddedViewImpl(e,i,r){let o=Ls(this._declarationLView,this._declarationTContainer,e,{embeddedViewInjector:i,dehydratedView:r});return new tr(o)}}return t})();function GT(){return Vd(mt(),Z())}function Vd(t,n){return t.type&4?new lt(n,t,qo(t,n)):null}function Zo(t,n,e,i,r){let o=t.data[n];if(o===null)o=qT(t,n,e,i,r),Wb()&&(o.flags|=32);else if(o.type&64){o.type=e,o.value=i,o.attrs=r;let a=Ub();o.injectorIndex=a===null?-1:a.injectorIndex}return Po(o,!0),o}function qT(t,n,e,i,r){let o=yh(),a=wh(),s=a?o:o&&o.parent,l=t.data[n]=ZT(t,s,e,n,i,r);return YT(t,l,o,a),l}function YT(t,n,e,i){t.firstChild===null&&(t.firstChild=n),e!==null&&(i?e.child==null&&n.parent!==null&&(e.child=n):e.next===null&&(e.next=n,n.prev=e))}function ZT(t,n,e,i,r,o){let a=n?n.injectorIndex:-1,s=0;return vh()&&(s|=128),{type:e,index:i,insertBeforeIndex:null,injectorIndex:a,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,controlDirectiveIndex:-1,customControlIndex:-1,propertyBindings:null,flags:s,providerIndexes:0,value:r,attrs:o,mergedAttrs:null,localNames:null,initialInputs:null,inputs:null,hostDirectiveInputs:null,outputs:null,hostDirectiveOutputs:null,directiveToIndex:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:n,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}function QT(t){let n=t[rh]??[],i=t[ot][xe],r=[];for(let o of n)o.data[u0]!==void 0?r.push(o):KT(o,i);t[rh]=r}function KT(t,n){let e=0,i=t.firstChild;if(i){let r=t.data[d0];for(;e<r;){let o=i.nextSibling;E0(n,i,!1),i=o,e++}}}var XT=()=>null,JT=()=>null;function gd(t,n){return XT(t,n)}function sw(t,n,e){return JT(t,n,e)}var lw=class{},Hd=class{},ap=class{resolveComponentFactory(n){throw new M(917,!1)}},Bs=class{static NULL=new ap},tt=class{},Ee=(()=>{class t{destroyNode=null;static __NG_ELEMENT_ID__=()=>ek()}return t})();function ek(){let t=Z(),n=mt(),e=cn(n.index,t);return(yi(e)?e:t)[xe]}var cw=(()=>{class t{static \u0275prov=b({token:t,providedIn:"root",factory:()=>null})}return t})();var ld={},sp=class{injector;parentInjector;constructor(n,e){this.injector=n,this.parentInjector=e}get(n,e,i){let r=this.injector.get(n,ld,i);return r!==ld||e===ld?r:this.parentInjector.get(n,e,i)}};function vd(t,n,e){let i=e?t.styles:null,r=e?t.classes:null,o=0;if(n!==null)for(let a=0;a<n.length;a++){let s=n[a];if(typeof s=="number")o=s;else if(o==1)r=Fc(r,s);else if(o==2){let l=s,c=n[++a];i=Fc(i,l+": "+c+";")}}e?t.styles=i:t.stylesWithoutHost=i,e?t.classes=r:t.classesWithoutHost=r}function Ie(t,n=0){let e=Z();if(e===null)return P(t,n);let i=mt();return t0(i,e,Ct(t),n)}function qp(){let t="invalid";throw new Error(t)}function dw(t,n,e,i,r){let o=i===null?null:{"":-1},a=r(t,e);if(a!==null){let s=a,l=null,c=null;for(let u of a)if(u.resolveHostDirectives!==null){[s,l,c]=u.resolveHostDirectives(a);break}ik(t,n,e,s,o,l,c)}o!==null&&i!==null&&tk(e,i,o)}function tk(t,n,e){let i=t.localNames=[];for(let r=0;r<n.length;r+=2){let o=e[n[r+1]];if(o==null)throw new M(-301,!1);i.push(n[r],o)}}function nk(t,n,e){n.componentOffset=e,(t.components??=[]).push(n.index)}function ik(t,n,e,i,r,o,a){let s=i.length,l=null;for(let p=0;p<s;p++){let g=i[p];l===null&&qn(g)&&(l=g,nk(t,e,p)),$h(hd(e,n),t,g.type)}ck(e,t.data.length,s),l?.viewProvidersResolver&&l.viewProvidersResolver(l);for(let p=0;p<s;p++){let g=i[p];g.providersResolver&&g.providersResolver(g)}let c=!1,u=!1,f=A0(t,n,s,null);s>0&&(e.directiveToIndex=new Map);for(let p=0;p<s;p++){let g=i[p];if(e.mergedAttrs=Ho(e.mergedAttrs,g.hostAttrs),ok(t,e,n,f,g),lk(f,g,r),a!==null&&a.has(g)){let[I,k]=a.get(g);e.directiveToIndex.set(g.type,[f,I+e.directiveStart,k+e.directiveStart])}else(o===null||!o.has(g))&&e.directiveToIndex.set(g.type,f);g.contentQueries!==null&&(e.flags|=4),(g.hostBindings!==null||g.hostAttrs!==null||g.hostVars!==0)&&(e.flags|=64);let C=g.type.prototype;!c&&(C.ngOnChanges||C.ngOnInit||C.ngDoCheck)&&((t.preOrderHooks??=[]).push(e.index),c=!0),!u&&(C.ngOnChanges||C.ngDoCheck)&&((t.preOrderCheckHooks??=[]).push(e.index),u=!0),f++}rk(t,e,o)}function rk(t,n,e){for(let i=n.directiveStart;i<n.directiveEnd;i++){let r=t.data[i];if(e===null||!e.has(r))xy(0,n,r,i),xy(1,n,r,i),Iy(n,i,!1);else{let o=e.get(r);Ey(0,n,o,i),Ey(1,n,o,i),Iy(n,i,!0)}}}function xy(t,n,e,i){let r=t===0?e.inputs:e.outputs;for(let o in r)if(r.hasOwnProperty(o)){let a;t===0?a=n.inputs??={}:a=n.outputs??={},a[o]??=[],a[o].push(i),uw(n,o)}}function Ey(t,n,e,i){let r=t===0?e.inputs:e.outputs;for(let o in r)if(r.hasOwnProperty(o)){let a=r[o],s;t===0?s=n.hostDirectiveInputs??={}:s=n.hostDirectiveOutputs??={},s[a]??=[],s[a].push(i,o),uw(n,a)}}function uw(t,n){n==="class"?t.flags|=8:n==="style"&&(t.flags|=16)}function Iy(t,n,e){let{attrs:i,inputs:r,hostDirectiveInputs:o}=t;if(i===null||!e&&r===null||e&&o===null||Np(t)){t.initialInputs??=[],t.initialInputs.push(null);return}let a=null,s=0;for(;s<i.length;){let l=i[s];if(l===0){s+=4;continue}else if(l===5){s+=2;continue}else if(typeof l=="number")break;if(!e&&r.hasOwnProperty(l)){let c=r[l];for(let u of c)if(u===n){a??=[],a.push(l,i[s+1]);break}}else if(e&&o.hasOwnProperty(l)){let c=o[l];for(let u=0;u<c.length;u+=2)if(c[u]===n){a??=[],a.push(c[u+1],i[s+1]);break}}s+=2}t.initialInputs??=[],t.initialInputs.push(a)}function ok(t,n,e,i,r){t.data[i]=r;let o=r.factory||(r.factory=Gi(r.type,!0)),a=new Wr(o,qn(r),Ie,null);t.blueprint[i]=a,e[i]=a,ak(t,n,i,A0(t,e,r.hostVars,Ht),r)}function ak(t,n,e,i,r){let o=r.hostBindings;if(o){let a=t.hostBindingOpCodes;a===null&&(a=t.hostBindingOpCodes=[]);let s=~n.index;sk(a)!=s&&a.push(s),a.push(e,i,o)}}function sk(t){let n=t.length;for(;n>0;){let e=t[--n];if(typeof e=="number"&&e<0)return e}return 0}function lk(t,n,e){if(e){if(n.exportAs)for(let i=0;i<n.exportAs.length;i++)e[n.exportAs[i]]=t;qn(n)&&(e[""]=t)}}function ck(t,n,e){t.flags|=1,t.directiveStart=n,t.directiveEnd=n+e,t.providerIndexes=n}function fw(t,n,e,i,r,o,a,s){let l=n[Y],c=l.consts,u=Zt(c,a),f=Zo(l,t,e,i,u);return o&&dw(l,n,f,Zt(c,s),r),f.mergedAttrs=Ho(f.mergedAttrs,f.attrs),f.attrs!==null&&vd(f,f.attrs,!1),f.mergedAttrs!==null&&vd(f,f.mergedAttrs,!0),l.queries!==null&&l.queries.elementStart(l,f),f}function mw(t,n){Gy(t,n),oh(n)&&t.queries.elementEnd(n)}function dk(t,n,e,i,r,o){let a=n.consts,s=Zt(a,r),l=Zo(n,t,e,i,s);if(l.mergedAttrs=Ho(l.mergedAttrs,l.attrs),o!=null){let c=Zt(a,o);l.localNames=[];for(let u=0;u<c.length;u+=2)l.localNames.push(c[u],-1)}return l.attrs!==null&&vd(l,l.attrs,!1),l.mergedAttrs!==null&&vd(l,l.mergedAttrs,!0),n.queries!==null&&n.queries.elementStart(n,l),l}function Yp(t,n,e){return t[n]=e}function hw(t,n){return t[n]}function dn(t,n,e){if(e===Ht)return!1;let i=t[n];return Object.is(i,e)?!1:(t[n]=e,!0)}function cd(t,n,e){return function i(r){let o=Gn(t)?cn(t.index,n):n;Gp(o,5);let a=n[Qe],s=My(n,a,e,r),l=i.__ngNextListenerFn__;for(;l;)s=My(n,a,l,r)&&s,l=l.__ngNextListenerFn__;return s}}function My(t,n,e,i){let r=q(null);try{return De(ve.OutputStart,n,e),e(i)!==!1}catch(o){return TT(t,o),!1}finally{De(ve.OutputEnd,n,e),q(r)}}function pw(t,n,e,i,r,o,a,s){let l=ys(t),c=!1,u=null;if(!i&&l&&(u=fk(n,e,o,t.index)),u!==null){let f=u.__ngLastListenerFn__||u;f.__ngNextListenerFn__=a,u.__ngLastListenerFn__=a,c=!0}else{let f=ln(t,e),p=i?i(f):f;vS(e,p,o,s);let g=r.listen(p,o,s);if(!uk(o)){let C=i?I=>i(sn(I[t.index])):t.index;gw(C,n,e,o,s,g,!1)}}return c}function uk(t){return t.startsWith("animation")||t.startsWith("transition")}function fk(t,n,e,i){let r=t.cleanup;if(r!=null)for(let o=0;o<r.length-1;o+=2){let a=r[o];if(a===e&&r[o+1]===i){let s=n[Ro],l=r[o+2];return s&&s.length>l?s[l]:null}typeof a=="string"&&(o+=2)}return null}function gw(t,n,e,i,r,o,a){let s=n.firstCreatePass?hh(n):null,l=mh(e),c=l.length;l.push(r,o),s&&s.push(i,t,c,(c+1)*(a?-1:1))}function Sy(t,n,e,i,r,o){let a=n[e],s=n[Y],c=s.data[e].outputs[i],f=a[c].subscribe(o);gw(t.index,s,n,r,o,f,!0)}var lp=Symbol("BINDING");function vw(t){return t.debugInfo?.className||t.type.name||null}var _d=class extends Bs{ngModule;constructor(n){super(),this.ngModule=n}resolveComponentFactory(n){let e=Un(n);return new nr(e,this.ngModule)}};function mk(t){return Object.keys(t).map(n=>{let[e,i,r]=t[n],o={propName:e,templateName:n,isSignal:(i&Od.SignalBased)!==0};return r&&(o.transform=r),o})}function hk(t){return Object.keys(t).map(n=>({propName:t[n],templateName:n}))}function pk(t,n,e){let i=n instanceof Ce?n:n?.injector;return i&&t.getStandaloneInjector!==null&&(i=t.getStandaloneInjector(i)||i),i?new sp(e,i):e}function gk(t){let n=t.get(tt,null);if(n===null)throw new M(407,!1);let e=t.get(cw,null),i=t.get(Hn,null),r=t.get(kn,null,{optional:!0});return{rendererFactory:n,sanitizer:e,changeDetectionScheduler:i,ngReflect:!1,tracingService:r}}function vk(t,n){let e=_w(t);return D0(n,e,e==="svg"?ah:e==="math"?Nb:null)}function _w(t){return(t.selectors[0][0]||"div").toLowerCase()}var nr=class extends Hd{componentDef;ngModule;selector;componentType;ngContentSelectors;isBoundToModule;cachedInputs=null;cachedOutputs=null;get inputs(){return this.cachedInputs??=mk(this.componentDef.inputs),this.cachedInputs}get outputs(){return this.cachedOutputs??=hk(this.componentDef.outputs),this.cachedOutputs}constructor(n,e){super(),this.componentDef=n,this.ngModule=e,this.componentType=n.type,this.selector=QS(n.selectors),this.ngContentSelectors=n.ngContentSelectors??[],this.isBoundToModule=!!e}create(n,e,i,r,o,a){De(ve.DynamicComponentStart);let s=q(null);try{let l=this.componentDef,c=pk(l,r||this.ngModule,n),u=gk(c),f=u.tracingService;return f&&f.componentCreate?f.componentCreate(vw(l),()=>this.createComponentRef(u,c,e,i,o,a)):this.createComponentRef(u,c,e,i,o,a)}finally{q(s)}}createComponentRef(n,e,i,r,o,a){let s=this.componentDef,l=_k(r,s,a,o),c=n.rendererFactory.createRenderer(null,s),u=r?yT(c,r,s.encapsulation,e):vk(s,c),f=a?.some(Ty)||o?.some(C=>typeof C!="function"&&C.bindings.some(Ty)),p=Fp(null,l,null,512|k0(s),null,null,n,c,e,null,h0(u,e,!0));p[Be]=u,Qc(p);let g=null;try{let C=fw(Be,p,2,"#host",()=>l.directiveRegistry,!0,0);I0(c,u,C),Uo(u,p),$p(l,p,C),g0(l,C,p),mw(l,C),i!==void 0&&yk(C,this.ngContentSelectors,i),g=cn(C.index,p),p[Qe]=g[Qe],Wp(l,p,null)}catch(C){throw g!==null&&Gh(g),Gh(p),C}finally{De(ve.DynamicComponentEnd),Kc()}return new bd(this.componentType,p,!!f)}};function _k(t,n,e,i){let r=t?["ng-version","21.2.7"]:KS(n.selectors[0]),o=null,a=null,s=0;if(e)for(let u of e)s+=u[lp].requiredVars,u.create&&(u.targetIdx=0,(o??=[]).push(u)),u.update&&(u.targetIdx=0,(a??=[]).push(u));if(i)for(let u=0;u<i.length;u++){let f=i[u];if(typeof f!="function")for(let p of f.bindings){s+=p[lp].requiredVars;let g=u+1;p.create&&(p.targetIdx=g,(o??=[]).push(p)),p.update&&(p.targetIdx=g,(a??=[]).push(p))}}let l=[n];if(i)for(let u of i){let f=typeof u=="function"?u:u.type,p=qm(f);l.push(p)}return Pp(0,null,bk(o,a),1,s,l,null,null,null,[r],null)}function bk(t,n){return!t&&!n?null:e=>{if(e&1&&t)for(let i of t)i.create();if(e&2&&n)for(let i of n)i.update()}}function Ty(t){let n=t[lp].kind;return n==="input"||n==="twoWay"}var bd=class extends lw{_rootLView;_hasInputBindings;instance;hostView;changeDetectorRef;componentType;location;previousInputValues=null;_tNode;constructor(n,e,i){super(),this._rootLView=e,this._hasInputBindings=i,this._tNode=$c(e[Y],Be),this.location=qo(this._tNode,e),this.instance=cn(this._tNode.index,e)[Qe],this.hostView=this.changeDetectorRef=new tr(e,void 0),this.componentType=n}setInput(n,e){this._hasInputBindings;let i=this._tNode;if(this.previousInputValues??=new Map,this.previousInputValues.has(n)&&Object.is(this.previousInputValues.get(n),e))return;let r=this._rootLView,o=Bd(i,r[Y],r,n,e);this.previousInputValues.set(n,e);let a=cn(i.index,r);Gp(a,1)}get injector(){return new $r(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(n){this.hostView.onDestroy(n)}};function yk(t,n,e){let i=t.projection=[];for(let r=0;r<n.length;r++){let o=e[r];i.push(o!=null&&o.length?Array.from(o):null)}}var ht=(()=>{class t{static __NG_ELEMENT_ID__=wk}return t})();function wk(){let t=mt();return bw(t,Z())}var cp=class t extends ht{_lContainer;_hostTNode;_hostLView;constructor(n,e,i){super(),this._lContainer=n,this._hostTNode=e,this._hostLView=i}get element(){return qo(this._hostTNode,this._hostLView)}get injector(){return new $r(this._hostTNode,this._hostLView)}get parentInjector(){let n=Ep(this._hostTNode,this._hostLView);if(Zy(n)){let e=fd(n,this._hostLView),i=ud(n),r=e[Y].data[i+8];return new $r(r,e)}else return new $r(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(n){let e=ky(this._lContainer);return e!==null&&e[n]||null}get length(){return this._lContainer.length-We}createEmbeddedView(n,e,i){let r,o;typeof i=="number"?r=i:i!=null&&(r=i.index,o=i.injector);let a=gd(this._lContainer,n.ssrId),s=n.createEmbeddedViewImpl(e||{},o,a);return this.insertImpl(s,r,zo(this._hostTNode,a)),s}createComponent(n,e,i,r,o,a,s){let l=n&&!$M(n),c;if(l)c=e;else{let k=e||{};c=k.index,i=k.injector,r=k.projectableNodes,o=k.environmentInjector||k.ngModuleRef,a=k.directives,s=k.bindings}let u=l?n:new nr(Un(n)),f=i||this.parentInjector;if(!o&&u.ngModule==null){let H=(l?f:this.parentInjector).get(Ce,null);H&&(o=H)}let p=Un(u.componentType??{}),g=gd(this._lContainer,p?.id??null),C=g?.firstChild??null,I=u.create(f,r,C,o,a,s);return this.insertImpl(I.hostView,c,zo(this._hostTNode,g)),I}insert(n,e){return this.insertImpl(n,e,!0)}insertImpl(n,e,i){let r=n._lView;if(Fb(r)){let s=this.indexOf(n);if(s!==-1)this.detach(s);else{let l=r[ot],c=new t(l,l[Bt],l[ot]);c.detach(c.indexOf(n))}}let o=this._adjustIndex(e),a=this._lContainer;return js(a,r,o,i),n.attachToViewContainerRef(),Qm(Fh(a),o,n),n}move(n,e){return this.insert(n,e)}indexOf(n){let e=ky(this._lContainer);return e!==null?e.indexOf(n):-1}remove(n){let e=this._adjustIndex(n,-1),i=As(this._lContainer,e);i&&(gs(Fh(this._lContainer),e),Fd(i[Y],i))}detach(n){let e=this._adjustIndex(n,-1),i=As(this._lContainer,e);return i&&gs(Fh(this._lContainer),e)!=null?new tr(i):null}_adjustIndex(n,e=0){return n??this.length+e}};function ky(t){return t[bs]}function Fh(t){return t[bs]||(t[bs]=[])}function bw(t,n){let e,i=n[t.index];return In(i)?e=i:(e=iw(i,n,null,t),n[t.index]=e,Lp(n,e)),Dk(e,n,t,i),new cp(e,t,n)}function Ck(t,n){let e=t[xe],i=e.createComment(""),r=ln(n,t),o=e.parentNode(r);return pd(e,o,i,e.nextSibling(r),!1),i}var Dk=Ik,xk=()=>!1;function Ek(t,n,e){return xk(t,n,e)}function Ik(t,n,e,i){if(t[Ji])return;let r;e.type&8?r=sn(i):r=Ck(n,e),t[Ji]=r}var dp=class t{queryList;matches=null;constructor(n){this.queryList=n}clone(){return new t(this.queryList)}setDirty(){this.queryList.setDirty()}},up=class t{queries;constructor(n=[]){this.queries=n}createEmbeddedView(n){let e=n.queries;if(e!==null){let i=n.contentQueries!==null?n.contentQueries[0]:e.length,r=[];for(let o=0;o<i;o++){let a=e.getByIndex(o),s=this.queries[a.indexInDeclarationView];r.push(s.clone())}return new t(r)}return null}insertView(n){this.dirtyQueriesWithMatches(n)}detachView(n){this.dirtyQueriesWithMatches(n)}finishViewCreation(n){this.dirtyQueriesWithMatches(n)}dirtyQueriesWithMatches(n){for(let e=0;e<this.queries.length;e++)Qp(n,e).matches!==null&&this.queries[e].setDirty()}},yd=class{flags;read;predicate;constructor(n,e,i=null){this.flags=e,this.read=i,typeof n=="string"?this.predicate=Ak(n):this.predicate=n}},fp=class t{queries;constructor(n=[]){this.queries=n}elementStart(n,e){for(let i=0;i<this.queries.length;i++)this.queries[i].elementStart(n,e)}elementEnd(n){for(let e=0;e<this.queries.length;e++)this.queries[e].elementEnd(n)}embeddedTView(n){let e=null;for(let i=0;i<this.length;i++){let r=e!==null?e.length:0,o=this.getByIndex(i).embeddedTView(n,r);o&&(o.indexInDeclarationView=i,e!==null?e.push(o):e=[o])}return e!==null?new t(e):null}template(n,e){for(let i=0;i<this.queries.length;i++)this.queries[i].template(n,e)}getByIndex(n){return this.queries[n]}get length(){return this.queries.length}track(n){this.queries.push(n)}},mp=class t{metadata;matches=null;indexInDeclarationView=-1;crossesNgTemplate=!1;_declarationNodeIndex;_appliesToNextNode=!0;constructor(n,e=-1){this.metadata=n,this._declarationNodeIndex=e}elementStart(n,e){this.isApplyingToNode(e)&&this.matchTNode(n,e)}elementEnd(n){this._declarationNodeIndex===n.index&&(this._appliesToNextNode=!1)}template(n,e){this.elementStart(n,e)}embeddedTView(n,e){return this.isApplyingToNode(n)?(this.crossesNgTemplate=!0,this.addMatch(-n.index,e),new t(this.metadata)):null}isApplyingToNode(n){if(this._appliesToNextNode&&(this.metadata.flags&1)!==1){let e=this._declarationNodeIndex,i=n.parent;for(;i!==null&&i.type&8&&i.index!==e;)i=i.parent;return e===(i!==null?i.index:-1)}return this._appliesToNextNode}matchTNode(n,e){let i=this.metadata.predicate;if(Array.isArray(i))for(let r=0;r<i.length;r++){let o=i[r];this.matchTNodeWithReadOption(n,e,Mk(e,o)),this.matchTNodeWithReadOption(n,e,sd(e,n,o,!1,!1))}else i===lt?e.type&4&&this.matchTNodeWithReadOption(n,e,-1):this.matchTNodeWithReadOption(n,e,sd(e,n,i,!1,!1))}matchTNodeWithReadOption(n,e,i){if(i!==null){let r=this.metadata.read;if(r!==null)if(r===O||r===ht||r===lt&&e.type&4)this.addMatch(e.index,-2);else{let o=sd(e,n,r,!1,!1);o!==null&&this.addMatch(e.index,o)}else this.addMatch(e.index,i)}}addMatch(n,e){this.matches===null?this.matches=[n,e]:this.matches.push(n,e)}};function Mk(t,n){let e=t.localNames;if(e!==null){for(let i=0;i<e.length;i+=2)if(e[i]===n)return e[i+1]}return null}function Sk(t,n){return t.type&11?qo(t,n):t.type&4?Vd(t,n):null}function Tk(t,n,e,i){return e===-1?Sk(n,t):e===-2?kk(t,n,i):Ss(t,t[Y],e,n)}function kk(t,n,e){if(e===O)return qo(n,t);if(e===lt)return Vd(n,t);if(e===ht)return bw(n,t)}function yw(t,n,e,i){let r=n[Wn].queries[i];if(r.matches===null){let o=t.data,a=e.matches,s=[];for(let l=0;a!==null&&l<a.length;l+=2){let c=a[l];if(c<0)s.push(null);else{let u=o[c];s.push(Tk(n,u,a[l+1],e.metadata.read))}}r.matches=s}return r.matches}function hp(t,n,e,i){let r=t.queries.getByIndex(e),o=r.matches;if(o!==null){let a=yw(t,n,r,e);for(let s=0;s<o.length;s+=2){let l=o[s];if(l>0)i.push(a[s/2]);else{let c=o[s+1],u=n[-l];for(let f=We;f<u.length;f++){let p=u[f];p[Ki]===p[ot]&&hp(p[Y],p,c,i)}if(u[Hr]!==null){let f=u[Hr];for(let p=0;p<f.length;p++){let g=f[p];hp(g[Y],g,c,i)}}}}}return i}function Zp(t,n){return t[Wn].queries[n].queryList}function ww(t,n,e){let i=new Di((e&4)===4);return Bb(t,n,i,i.destroy),(n[Wn]??=new up).queries.push(new dp(i))-1}function Cw(t,n,e){let i=Re();return i.firstCreatePass&&(xw(i,new yd(t,n,e),-1),(n&2)===2&&(i.staticViewQueries=!0)),ww(i,Z(),n)}function Dw(t,n,e,i){let r=Re();if(r.firstCreatePass){let o=mt();xw(r,new yd(n,e,i),o.index),Rk(r,t),(e&2)===2&&(r.staticContentQueries=!0)}return ww(r,Z(),e)}function Ak(t){return t.split(",").map(n=>n.trim())}function xw(t,n,e){t.queries===null&&(t.queries=new fp),t.queries.track(new mp(n,e))}function Rk(t,n){let e=t.contentQueries||(t.contentQueries=[]),i=e.length?e[e.length-1]:-1;n!==i&&e.push(t.queries.length-1,n)}function Qp(t,n){return t.queries.getByIndex(n)}function Ew(t,n){let e=t[Y],i=Qp(e,n);return i.crossesNgTemplate?hp(e,t,n,[]):yw(e,t,i,n)}function Iw(t,n,e){let i,r=Ka(()=>{i._dirtyCounter();let o=Ok(i,t);if(n&&o===void 0)throw new M(-951,!1);return o});return i=r[Xe],i._dirtyCounter=N(0),i._flatValue=void 0,r}function Kp(t){return Iw(!0,!1,t)}function Xp(t){return Iw(!0,!0,t)}function Mw(t,n){let e=t[Xe];e._lView=Z(),e._queryIndex=n,e._queryList=Zp(e._lView,n),e._queryList.onDirty(()=>e._dirtyCounter.update(i=>i+1))}function Ok(t,n){let e=t._lView,i=t._queryIndex;if(e===void 0||i===void 0||e[ne]&4)return n?void 0:kt;let r=Zp(e,i),o=Ew(e,i);return r.reset(o,r0),n?r.first:r._changesDetected||t._flatValue===void 0?t._flatValue=r.toArray():t._flatValue}var Kn=class{},Ud=class{};var wd=class extends Kn{ngModuleType;_parent;_bootstrapComponents=[];_r3Injector;instance;destroyCbs=[];componentFactoryResolver=new _d(this);constructor(n,e,i,r=!0){super(),this.ngModuleType=n,this._parent=e;let o=Gm(n);this._bootstrapComponents=M0(o.bootstrap),this._r3Injector=Mh(n,e,[{provide:Kn,useValue:this},{provide:Bs,useValue:this.componentFactoryResolver},...i],hs(n),new Set(["environment"])),r&&this.resolveInjectorInitializers()}resolveInjectorInitializers(){this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(this.ngModuleType)}get injector(){return this._r3Injector}destroy(){let n=this._r3Injector;!n.destroyed&&n.destroy(),this.destroyCbs.forEach(e=>e()),this.destroyCbs=null}onDestroy(n){this.destroyCbs.push(n)}},Cd=class extends Ud{moduleType;constructor(n){super(),this.moduleType=n}create(n){return new wd(this.moduleType,n,[])}};var Rs=class extends Kn{injector;componentFactoryResolver=new _d(this);instance=null;constructor(n){super();let e=new Pr([...n.providers,{provide:Kn,useValue:this},{provide:Bs,useValue:this.componentFactoryResolver}],n.parent||Ao(),n.debugName,new Set(["environment"]));this.injector=e,n.runEnvironmentInitializers&&e.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(n){this.injector.onDestroy(n)}};function Qo(t,n,e=null){return new Rs({providers:t,parent:n,debugName:e,runEnvironmentInitializers:!0}).injector}var Nk=(()=>{class t{_injector;cachedInjectors=new Map;constructor(e){this._injector=e}getOrCreateStandaloneInjector(e){if(!e.standalone)return null;if(!this.cachedInjectors.has(e)){let i=Jm(!1,e.type),r=i.length>0?Qo([i],this._injector,""):null;this.cachedInjectors.set(e,r)}return this.cachedInjectors.get(e)}ngOnDestroy(){try{for(let e of this.cachedInjectors.values())e!==null&&e.destroy()}finally{this.cachedInjectors.clear()}}static \u0275prov=b({token:t,providedIn:"environment",factory:()=>new t(P(Ce))})}return t})();function x(t){return Ns(()=>{let n=Sw(t),e=K(y({},n),{decls:t.decls,vars:t.vars,template:t.template,consts:t.consts||null,ngContentSelectors:t.ngContentSelectors,onPush:t.changeDetection===Ip.OnPush,directiveDefs:null,pipeDefs:null,dependencies:n.standalone&&t.dependencies||null,getStandaloneInjector:n.standalone?r=>r.get(Nk).getOrCreateStandaloneInjector(e):null,getExternalStyles:null,signals:t.signals??!1,data:t.data||{},encapsulation:t.encapsulation||Sn.Emulated,styles:t.styles||kt,_:null,schemas:t.schemas||null,tView:null,id:""});n.standalone&&Xn("NgStandalone"),Tw(e);let i=t.dependencies;return e.directiveDefs=Ay(i,Pk),e.pipeDefs=Ay(i,bb),e.id=jk(e),e})}function Pk(t){return Un(t)||qm(t)}function U(t){return Ns(()=>({type:t.type,bootstrap:t.bootstrap||kt,declarations:t.declarations||kt,imports:t.imports||kt,exports:t.exports||kt,transitiveCompileScopes:null,schemas:t.schemas||null,id:t.id||null}))}function Fk(t,n){if(t==null)return Zi;let e={};for(let i in t)if(t.hasOwnProperty(i)){let r=t[i],o,a,s,l;Array.isArray(r)?(s=r[0],o=r[1],a=r[2]??o,l=r[3]||null):(o=r,a=r,s=Od.None,l=null),e[o]=[i,s,l],n[o]=a}return e}function Lk(t){if(t==null)return Zi;let n={};for(let e in t)t.hasOwnProperty(e)&&(n[t[e]]=e);return n}function S(t){return Ns(()=>{let n=Sw(t);return Tw(n),n})}function Jp(t){return{type:t.type,name:t.name,factory:null,pure:t.pure!==!1,standalone:t.standalone??!0,onDestroy:t.type.prototype.ngOnDestroy||null}}function Sw(t){let n={};return{type:t.type,providersResolver:null,viewProvidersResolver:null,factory:null,hostBindings:t.hostBindings||null,hostVars:t.hostVars||0,hostAttrs:t.hostAttrs||null,contentQueries:t.contentQueries||null,declaredInputs:n,inputConfig:t.inputs||Zi,exportAs:t.exportAs||null,standalone:t.standalone??!0,signals:t.signals===!0,selectors:t.selectors||kt,viewQuery:t.viewQuery||null,features:t.features||null,setInput:null,resolveHostDirectives:null,hostDirectives:null,controlDef:null,inputs:Fk(t.inputs,n),outputs:Lk(t.outputs),debugInfo:null}}function Tw(t){t.features?.forEach(n=>n(t))}function Ay(t,n){return t?()=>{let e=typeof t=="function"?t():t,i=[];for(let r of e){let o=n(r);o!==null&&i.push(o)}return i}:null}function jk(t){let n=0,e=typeof t.consts=="function"?"":t.consts,i=[t.selectors,t.ngContentSelectors,t.hostVars,t.hostAttrs,e,t.vars,t.decls,t.encapsulation,t.standalone,t.signals,t.exportAs,JSON.stringify(t.inputs),JSON.stringify(t.outputs),Object.getOwnPropertyNames(t.type.prototype),!!t.contentQueries,!!t.viewQuery];for(let o of i.join("|"))n=Math.imul(31,n)+o.charCodeAt(0)<<0;return n+=2147483648,"c"+n}function Bk(t){return Object.getPrototypeOf(t.prototype).constructor}function ge(t){let n=Bk(t.type),e=!0,i=[t];for(;n;){let r;if(qn(t))r=n.\u0275cmp||n.\u0275dir;else{if(n.\u0275cmp)throw new M(903,!1);r=n.\u0275dir}if(r){if(e){i.push(r);let a=t;a.inputs=Lh(t.inputs),a.declaredInputs=Lh(t.declaredInputs),a.outputs=Lh(t.outputs);let s=r.hostBindings;s&&$k(t,s);let l=r.viewQuery,c=r.contentQueries;if(l&&Uk(t,l),c&&zk(t,c),Vk(t,r),_b(t.outputs,r.outputs),qn(r)&&r.data.animation){let u=t.data;u.animation=(u.animation||[]).concat(r.data.animation)}}let o=r.features;if(o)for(let a=0;a<o.length;a++){let s=o[a];s&&s.ngInherit&&s(t),s===ge&&(e=!1)}}n=Object.getPrototypeOf(n)}Hk(i)}function Vk(t,n){for(let e in n.inputs){if(!n.inputs.hasOwnProperty(e)||t.inputs.hasOwnProperty(e))continue;let i=n.inputs[e];i!==void 0&&(t.inputs[e]=i,t.declaredInputs[e]=n.declaredInputs[e])}}function Hk(t){let n=0,e=null;for(let i=t.length-1;i>=0;i--){let r=t[i];r.hostVars=n+=r.hostVars,r.hostAttrs=Ho(r.hostAttrs,e=Ho(e,r.hostAttrs))}}function Lh(t){return t===Zi?{}:t===kt?[]:t}function Uk(t,n){let e=t.viewQuery;e?t.viewQuery=(i,r)=>{n(i,r),e(i,r)}:t.viewQuery=n}function zk(t,n){let e=t.contentQueries;e?t.contentQueries=(i,r,o)=>{n(i,r,o),e(i,r,o)}:t.contentQueries=n}function $k(t,n){let e=t.hostBindings;e?t.hostBindings=(i,r)=>{n(i,r),e(i,r)}:t.hostBindings=n}function kw(t,n,e,i,r,o,a,s){if(e.firstCreatePass){t.mergedAttrs=Ho(t.mergedAttrs,t.attrs);let u=t.tView=Pp(2,t,r,o,a,e.directiveRegistry,e.pipeRegistry,null,e.schemas,e.consts,null);e.queries!==null&&(e.queries.template(e,t),u.queries=e.queries.embeddedTView(t))}s&&(t.flags|=s),Po(t,!1);let l=Gk(e,n,t,i);Xc()&&Up(e,n,l,t),Uo(l,n);let c=iw(l,n,l,t);n[i+Be]=c,Lp(n,c),Ek(c,t,n)}function Wk(t,n,e,i,r,o,a,s,l,c,u){let f=e+Be,p;return n.firstCreatePass?(p=Zo(n,f,4,a||null,s||null),gh()&&dw(n,t,p,Zt(n.consts,c),$0),Gy(n,p)):p=n.data[f],kw(p,t,n,e,i,r,o,l),ys(p)&&$p(n,t,p),c!=null&&jd(t,p,u),p}function $o(t,n,e,i,r,o,a,s,l,c,u){let f=e+Be,p;if(n.firstCreatePass){if(p=Zo(n,f,4,a||null,s||null),c!=null){let g=Zt(n.consts,c);p.localNames=[];for(let C=0;C<g.length;C+=2)p.localNames.push(g[C],-1)}}else p=n.data[f];return kw(p,t,n,e,i,r,o,l),c!=null&&jd(t,p,u),p}function pt(t,n,e,i,r,o,a,s){let l=Z(),c=Re(),u=Zt(c.consts,o);return Wk(l,c,t,n,e,i,r,u,void 0,a,s),pt}function zd(t,n,e,i,r,o,a,s){let l=Z(),c=Re(),u=Zt(c.consts,o);return $o(l,c,t,n,e,i,r,u,void 0,a,s),zd}var Gk=qk;function qk(t,n,e,i){return Jc(!0),n[xe].createComment("")}var $d=(()=>{class t{log(e){console.log(e)}warn(e){console.warn(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"platform"})}return t})();function Jn(t){return typeof t=="function"&&t[Xe]!==void 0}function eg(t){return Jn(t)&&typeof t.set=="function"}var tg=new _("");function Ii(t){return!!t&&typeof t.then=="function"}function Wd(t){return!!t&&typeof t.subscribe=="function"}var ng=new _("");function Gd(t){return zn([{provide:ng,multi:!0,useValue:t}])}var ig=(()=>{class t{resolve;reject;initialized=!1;done=!1;donePromise=new Promise((e,i)=>{this.resolve=e,this.reject=i});appInits=d(ng,{optional:!0})??[];injector=d(F);constructor(){}runInitializers(){if(this.initialized)return;let e=[];for(let r of this.appInits){let o=at(this.injector,r);if(Ii(o))e.push(o);else if(Wd(o)){let a=new Promise((s,l)=>{o.subscribe({complete:s,error:l})});e.push(a)}}let i=()=>{this.done=!0,this.resolve()};Promise.all(e).then(()=>{i()}).catch(r=>{this.reject(r)}),e.length===0&&i(),this.initialized=!0}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Vs=new _("");function Aw(){cm(()=>{let t="";throw new M(600,t)})}function Rw(t){return t.isBoundToModule}var Yk=10;var Xt=(()=>{class t{_runningTick=!1;_destroyed=!1;_destroyListeners=[];_views=[];internalErrorHandler=d(Qt);afterRenderManager=d(Pd);zonelessEnabled=d(xs);rootEffectScheduler=d(td);dirtyFlags=0;tracingSnapshot=null;allTestViews=new Set;autoDetectTestViews=new Set;includeAllTestViews=!1;afterTick=new D;get allViews(){return[...(this.includeAllTestViews?this.allTestViews:this.autoDetectTestViews).keys(),...this._views]}get destroyed(){return this._destroyed}componentTypes=[];components=[];internalPendingTask=d(Ci);get isStable(){return this.internalPendingTask.hasPendingTasksObservable.pipe(te(e=>!e))}constructor(){d(kn,{optional:!0})}whenStable(){let e;return new Promise(i=>{e=this.isStable.subscribe({next:r=>{r&&i()}})}).finally(()=>{e.unsubscribe()})}_injector=d(Ce);_rendererFactory=null;get injector(){return this._injector}bootstrap(e,i){return this.bootstrapImpl(e,i)}bootstrapImpl(e,i,r=F.NULL){return this._injector.get(R).run(()=>{De(ve.BootstrapComponentStart);let a=e instanceof Hd;if(!this._injector.get(ig).done){let C="";throw new M(405,C)}let l;a?l=e:l=this._injector.get(Bs).resolveComponentFactory(e),this.componentTypes.push(l.componentType);let c=Rw(l)?void 0:this._injector.get(Kn),u=i||l.selector,f=l.create(r,[],u,c),p=f.location.nativeElement,g=f.injector.get(tg,null);return g?.registerApplication(p),f.onDestroy(()=>{this.detachView(f.hostView),Ms(this.components,f),g?.unregisterApplication(p)}),this._loadComponent(f),De(ve.BootstrapComponentEnd,f),f})}tick(){this.zonelessEnabled||(this.dirtyFlags|=1),this._tick()}_tick(){De(ve.ChangeDetectionStart),this.tracingSnapshot!==null?this.tracingSnapshot.run(Nd.CHANGE_DETECTION,this.tickImpl):this.tickImpl()}tickImpl=()=>{if(this._runningTick)throw De(ve.ChangeDetectionEnd),new M(101,!1);let e=q(null);try{this._runningTick=!0,this.synchronize()}finally{this._runningTick=!1,this.tracingSnapshot?.dispose(),this.tracingSnapshot=null,q(e),this.afterTick.next(),De(ve.ChangeDetectionEnd)}};synchronize(){this._rendererFactory===null&&!this._injector.destroyed&&(this._rendererFactory=this._injector.get(tt,null,{optional:!0}));let e=0;for(;this.dirtyFlags!==0&&e++<Yk;){De(ve.ChangeDetectionSyncStart);try{this.synchronizeOnce()}finally{De(ve.ChangeDetectionSyncEnd)}}}synchronizeOnce(){this.dirtyFlags&16&&(this.dirtyFlags&=-17,this.rootEffectScheduler.flush());let e=!1;if(this.dirtyFlags&7){let i=!!(this.dirtyFlags&1);this.dirtyFlags&=-8,this.dirtyFlags|=8;for(let{_lView:r}of this.allViews){if(!i&&!ws(r))continue;let o=i&&!this.zonelessEnabled?0:1;J0(r,o),e=!0}if(this.dirtyFlags&=-5,this.syncDirtyFlagsWithViews(),this.dirtyFlags&23)return}e||(this._rendererFactory?.begin?.(),this._rendererFactory?.end?.()),this.dirtyFlags&8&&(this.dirtyFlags&=-9,this.afterRenderManager.execute()),this.syncDirtyFlagsWithViews()}syncDirtyFlagsWithViews(){if(this.allViews.some(({_lView:e})=>ws(e))){this.dirtyFlags|=2;return}else this.dirtyFlags&=-8}attachView(e){let i=e;this._views.push(i),i.attachToAppRef(this)}detachView(e){let i=e;Ms(this._views,i),i.detachFromAppRef()}_loadComponent(e){this.attachView(e.hostView);try{this.tick()}catch(r){this.internalErrorHandler(r)}this.components.push(e),this._injector.get(Vs,[]).forEach(r=>r(e))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(e=>e()),this._views.slice().forEach(e=>e.destroy())}finally{this._destroyed=!0,this._views=[],this._destroyListeners=[]}}onDestroy(e){return this._destroyListeners.push(e),()=>Ms(this._destroyListeners,e)}destroy(){if(this._destroyed)throw new M(406,!1);let e=this._injector;e.destroy&&!e.destroyed&&e.destroy()}get viewCount(){return this._views.length}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Ms(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}function qd(t,n){let e=Z(),i=Yn();if(dn(e,i,n)){let r=Re(),o=Fo();if(Bd(o,r,e,t,n))Gn(o)&&z0(e,o.index);else{let s=ln(o,e);W0(e[xe],s,null,o.value,t,n,null)}}return qd}function oe(t,n,e,i){let r=Z(),o=Yn();if(dn(r,o,n)){let a=Re(),s=Fo();MT(s,r,t,n,e,i)}return oe}var pp=class{destroy(n){}updateValue(n,e){}swap(n,e){let i=Math.min(n,e),r=Math.max(n,e),o=this.detach(r);if(r-i>1){let a=this.detach(i);this.attach(i,o),this.attach(r,a)}else this.attach(i,o)}move(n,e){this.attach(e,this.detach(n))}};function jh(t,n,e,i,r){return t===e&&Object.is(n,i)?1:Object.is(r(t,n),r(e,i))?-1:0}function Zk(t,n,e,i){let r,o,a=0,s=t.length-1,l=void 0;if(Array.isArray(n)){q(i);let c=n.length-1;for(q(null);a<=s&&a<=c;){let u=t.at(a),f=n[a],p=jh(a,u,a,f,e);if(p!==0){p<0&&t.updateValue(a,f),a++;continue}let g=t.at(s),C=n[c],I=jh(s,g,c,C,e);if(I!==0){I<0&&t.updateValue(s,C),s--,c--;continue}let k=e(a,u),H=e(s,g),be=e(a,f);if(Object.is(be,H)){let ut=e(c,C);Object.is(ut,k)?(t.swap(a,s),t.updateValue(s,C),c--,s--):t.move(s,a),t.updateValue(a,f),a++;continue}if(r??=new Dd,o??=Oy(t,a,s,e),gp(t,r,a,be))t.updateValue(a,f),a++,s++;else if(o.has(be))r.set(k,t.detach(a)),s--;else{let ut=t.create(a,n[a]);t.attach(a,ut),a++,s++}}for(;a<=c;)Ry(t,r,e,a,n[a]),a++}else if(n!=null){q(i);let c=n[Symbol.iterator]();q(null);let u=c.next();for(;!u.done&&a<=s;){let f=t.at(a),p=u.value,g=jh(a,f,a,p,e);if(g!==0)g<0&&t.updateValue(a,p),a++,u=c.next();else{r??=new Dd,o??=Oy(t,a,s,e);let C=e(a,p);if(gp(t,r,a,C))t.updateValue(a,p),a++,s++,u=c.next();else if(!o.has(C))t.attach(a,t.create(a,p)),a++,s++,u=c.next();else{let I=e(a,f);r.set(I,t.detach(a)),s--}}}for(;!u.done;)Ry(t,r,e,t.length,u.value),u=c.next()}for(;a<=s;)t.destroy(t.detach(s--));r?.forEach(c=>{t.destroy(c)})}function gp(t,n,e,i){return n!==void 0&&n.has(i)?(t.attach(e,n.get(i)),n.delete(i),!0):!1}function Ry(t,n,e,i,r){if(gp(t,n,i,e(i,r)))t.updateValue(i,r);else{let o=t.create(i,r);t.attach(i,o)}}function Oy(t,n,e,i){let r=new Set;for(let o=n;o<=e;o++)r.add(i(o,t.at(o)));return r}var Dd=class{kvMap=new Map;_vMap=void 0;has(n){return this.kvMap.has(n)}delete(n){if(!this.has(n))return!1;let e=this.kvMap.get(n);return this._vMap!==void 0&&this._vMap.has(e)?(this.kvMap.set(n,this._vMap.get(e)),this._vMap.delete(e)):this.kvMap.delete(n),!0}get(n){return this.kvMap.get(n)}set(n,e){if(this.kvMap.has(n)){let i=this.kvMap.get(n);this._vMap===void 0&&(this._vMap=new Map);let r=this._vMap;for(;r.has(i);)i=r.get(i);r.set(i,e)}else this.kvMap.set(n,e)}forEach(n){for(let[e,i]of this.kvMap)if(n(i,e),this._vMap!==void 0){let r=this._vMap;for(;r.has(i);)i=r.get(i),n(i,e)}}};function ie(t,n,e,i,r,o,a,s){Xn("NgControlFlow");let l=Z(),c=Re(),u=Zt(c.consts,o);return $o(l,c,t,n,e,i,r,u,256,a,s),rg}function rg(t,n,e,i,r,o,a,s){Xn("NgControlFlow");let l=Z(),c=Re(),u=Zt(c.consts,o);return $o(l,c,t,n,e,i,r,u,512,a,s),rg}function re(t,n){Xn("NgControlFlow");let e=Z(),i=Yn(),r=e[i]!==Ht?e[i]:-1,o=r!==-1?xd(e,Be+r):void 0,a=0;if(dn(e,i,t)){let s=q(null);try{if(o!==void 0&&ow(o,a),t!==-1){let l=Be+t,c=xd(e,l),u=yp(e[Y],l),f=sw(c,u,e),p=Ls(e,u,n,{dehydratedView:f});js(c,p,a,zo(u,f))}}finally{q(s)}}else if(o!==void 0){let s=rw(o,a);s!==void 0&&(s[Qe]=n)}}var vp=class{lContainer;$implicit;$index;constructor(n,e,i){this.lContainer=n,this.$implicit=e,this.$index=i}get $count(){return this.lContainer.length-We}};function Yd(t,n){return n}var _p=class{hasEmptyBlock;trackByFn;liveCollection;constructor(n,e,i){this.hasEmptyBlock=n,this.trackByFn=e,this.liveCollection=i}};function un(t,n,e,i,r,o,a,s,l,c,u,f,p){Xn("NgControlFlow");let g=Z(),C=Re(),I=l!==void 0,k=Z(),H=s?a.bind(k[Vt][Qe]):a,be=new _p(I,H);k[Be+t]=be,$o(g,C,t+1,n,e,i,r,Zt(C.consts,o),256),I&&$o(g,C,t+2,l,c,u,f,Zt(C.consts,p),512)}var bp=class extends pp{lContainer;hostLView;templateTNode;operationsCounter=void 0;needsIndexUpdate=!1;constructor(n,e,i){super(),this.lContainer=n,this.hostLView=e,this.templateTNode=i}get length(){return this.lContainer.length-We}at(n){return this.getLView(n)[Qe].$implicit}attach(n,e){let i=e[Lr];this.needsIndexUpdate||=n!==this.length,js(this.lContainer,e,n,zo(this.templateTNode,i)),Qk(this.lContainer,n)}detach(n){return this.needsIndexUpdate||=n!==this.length-1,Kk(this.lContainer,n),Xk(this.lContainer,n)}create(n,e){let i=gd(this.lContainer,this.templateTNode.tView.ssrId);return Ls(this.hostLView,this.templateTNode,new vp(this.lContainer,e,n),{dehydratedView:i})}destroy(n){Fd(n[Y],n)}updateValue(n,e){this.getLView(n)[Qe].$implicit=e}reset(){this.needsIndexUpdate=!1}updateIndexes(){if(this.needsIndexUpdate)for(let n=0;n<this.length;n++)this.getLView(n)[Qe].$index=n}getLView(n){return Jk(this.lContainer,n)}};function fn(t){let n=q(null),e=wi();try{let i=Z(),r=i[Y],o=i[e],a=e+1,s=xd(i,a);if(o.liveCollection===void 0){let c=yp(r,a);o.liveCollection=new bp(s,i,c)}else o.liveCollection.reset();let l=o.liveCollection;if(Zk(l,t,o.trackByFn,n),l.updateIndexes(),o.hasEmptyBlock){let c=Yn(),u=l.length===0;if(dn(i,c,u)){let f=e+2,p=xd(i,f);if(u){let g=yp(r,f),C=sw(p,g,i),I=Ls(i,g,void 0,{dehydratedView:C});js(p,I,0,zo(g,C))}else r.firstUpdatePass&&QT(p),ow(p,0)}}}finally{q(n)}}function xd(t,n){return t[n]}function Qk(t,n){if(t.length<=We)return;let e=We+n,i=t[e],r=i?i[Xi]:void 0;if(i&&r&&r.detachedLeaveAnimationFns&&r.detachedLeaveAnimationFns.length>0){let o=i[_i];aT(o,r),Gr.delete(i[bi]),r.detachedLeaveAnimationFns=void 0}}function Kk(t,n){if(t.length<=We)return;let e=We+n,i=t[e],r=i?i[Xi]:void 0;r&&r.leave&&r.leave.size>0&&(r.detachedLeaveAnimationFns=[])}function Xk(t,n){return As(t,n)}function Jk(t,n){return rw(t,n)}function yp(t,n){return $c(t,n)}function Q(t,n,e){let i=Z(),r=Yn();if(dn(i,r,n)){let o=Re(),a=Fo();H0(a,i,t,n,i[xe],e)}return Q}function wp(t,n,e,i,r){Bd(n,t,e,r?"class":"style",i)}function m(t,n,e,i){let r=Z(),o=r[Y],a=t+Be,s=o.firstCreatePass?fw(a,r,2,n,$0,gh(),e,i):o.data[a];if(Gn(s)){let l=r[$n].tracingService;if(l&&l.componentCreate){let c=o.data[s.directiveStart+s.componentOffset];return l.componentCreate(vw(c),()=>(Ny(t,n,r,s,i),m))}}return Ny(t,n,r,s,i),m}function Ny(t,n,e,i,r){if(G0(i,e,t,n,Ow),ys(i)){let o=e[Y];$p(o,e,i),g0(o,i,e)}r!=null&&jd(e,i)}function h(){let t=Re(),n=mt(),e=q0(n);return t.firstCreatePass&&mw(t,e),_h(e)&&bh(),ph(),e.classesWithoutHost!=null&&QM(e)&&wp(t,e,Z(),e.classesWithoutHost,!0),e.stylesWithoutHost!=null&&KM(e)&&wp(t,e,Z(),e.stylesWithoutHost,!1),h}function z(t,n,e,i){return m(t,n,e,i),h(),z}function gt(t,n,e,i){let r=Z(),o=r[Y],a=t+Be,s=o.firstCreatePass?dk(a,o,2,n,e,i):o.data[a];return G0(s,r,t,n,Ow),i!=null&&jd(r,s),gt}function Et(){let t=mt(),n=q0(t);return _h(n)&&bh(),ph(),Et}function mn(t,n,e,i){return gt(t,n,e,i),Et(),mn}var Ow=(t,n,e,i,r)=>(Jc(!0),D0(n[xe],i,Jb()));function It(){return Z()}function ei(t,n,e){let i=Z(),r=Yn();if(dn(i,r,n)){let o=Re(),a=Fo();U0(a,i,t,n,i[xe],e)}return ei}var Hs="en-US";var eA=Hs;function Nw(t){typeof t=="string"&&(eA=t.toLowerCase().replace(/_/g,"-"))}function T(t,n,e){let i=Z(),r=Re(),o=mt();return Pw(r,i,i[xe],o,t,n,e),T}function Qr(t,n,e){let i=Z(),r=Re(),o=mt();return(o.type&3||e)&&pw(o,r,i,e,i[xe],t,n,cd(o,i,n)),Qr}function Pw(t,n,e,i,r,o,a){let s=!0,l=null;if((i.type&3||a)&&(l??=cd(i,n,o),pw(i,t,n,a,e,r,o,l)&&(s=!1)),s){let c=i.outputs?.[r],u=i.hostDirectiveOutputs?.[r];if(u&&u.length)for(let f=0;f<u.length;f+=2){let p=u[f],g=u[f+1];l??=cd(i,n,o),Sy(i,n,p,g,r,l)}if(c&&c.length)for(let f of c)l??=cd(i,n,o),Sy(i,n,f,r,r,l)}}function G(t=1){return Xb(t)}function tA(t,n){let e=null,i=WS(t);for(let r=0;r<n.length;r++){let o=n[r];if(o==="*"){e=r;continue}if(i===null?T0(t,o,!0):YS(i,o))return r}return e}function Me(t){let n=Z()[Vt][Bt];if(!n.projection){let e=t?t.length:1,i=n.projection=Eb(e,null),r=i.slice(),o=n.child;for(;o!==null;){if(o.type!==128){let a=t?tA(o,t):0;a!==null&&(r[a]?r[a].projectionNext=o:i[a]=o,r[a]=o)}o=o.next}}}function X(t,n=0,e,i,r,o){let a=Z(),s=Re(),l=i?t+1:null;l!==null&&$o(a,s,l,i,r,o,null,e);let c=Zo(s,Be+t,16,null,e||null);c.projection===null&&(c.projection=n),Ch();let f=!a[Lr]||vh();a[Vt][Bt].projection[c.projection]===null&&l!==null?nA(a,s,l):f&&!kd(c)&&vT(s,a,c)}function nA(t,n,e){let i=Be+e,r=n.data[i],o=t[i],a=gd(o,r.tView.ssrId),s=Ls(t,r,void 0,{dehydratedView:a});js(o,s,0,zo(r,a))}function Mt(t,n,e,i){return Dw(t,n,e,i),Mt}function Fe(t,n,e){return Cw(t,n,e),Fe}function B(t){let n=Z(),e=Re(),i=Zc();Cs(i+1);let r=Qp(e,i);if(t.dirty&&Pb(n)===((r.metadata.flags&2)===2)){if(r.matches===null)t.reset([]);else{let o=Ew(n,i);t.reset(o,r0),t.notifyOnChanges()}return!0}return!1}function V(){return Zp(Z(),Zc())}function Zd(t,n,e,i,r){return Mw(n,Dw(t,e,i,r)),Zd}function ti(t,n,e,i){return Mw(t,Cw(n,e,i)),ti}function ni(t=1){Cs(Zc()+t)}function hn(t){let n=zb();return lh(n,Be+t)}function rd(t,n){return t<<17|n<<2}function qr(t){return t>>17&32767}function iA(t){return(t&2)==2}function rA(t,n){return t&131071|n<<17}function Cp(t){return t|2}function Wo(t){return(t&131068)>>2}function Bh(t,n){return t&-131069|n<<2}function oA(t){return(t&1)===1}function Dp(t){return t|1}function aA(t,n,e,i,r,o){let a=o?n.classBindings:n.styleBindings,s=qr(a),l=Wo(a);t[i]=e;let c=!1,u;if(Array.isArray(e)){let f=e;u=f[1],(u===null||ko(f,u)>0)&&(c=!0)}else u=e;if(r)if(l!==0){let p=qr(t[s+1]);t[i+1]=rd(p,s),p!==0&&(t[p+1]=Bh(t[p+1],i)),t[s+1]=rA(t[s+1],i)}else t[i+1]=rd(s,0),s!==0&&(t[s+1]=Bh(t[s+1],i)),s=i;else t[i+1]=rd(l,0),s===0?s=i:t[l+1]=Bh(t[l+1],i),l=i;c&&(t[i+1]=Cp(t[i+1])),Py(t,u,i,!0),Py(t,u,i,!1),sA(n,u,t,i,o),a=rd(s,l),o?n.classBindings=a:n.styleBindings=a}function sA(t,n,e,i,r){let o=r?t.residualClasses:t.residualStyles;o!=null&&typeof n=="string"&&ko(o,n)>=0&&(e[i+1]=Dp(e[i+1]))}function Py(t,n,e,i){let r=t[e+1],o=n===null,a=i?qr(r):Wo(r),s=!1;for(;a!==0&&(s===!1||o);){let l=t[a],c=t[a+1];lA(l,n)&&(s=!0,t[a+1]=i?Dp(c):Cp(c)),a=i?qr(c):Wo(c)}s&&(t[e+1]=i?Cp(r):Dp(r))}function lA(t,n){return t===null||n==null||(Array.isArray(t)?t[1]:t)===n?!0:Array.isArray(t)&&typeof n=="string"?ko(t,n)>=0:!1}var st={textEnd:0,key:0,keyEnd:0,value:0,valueEnd:0};function Fw(t){return t.substring(st.key,st.keyEnd)}function cA(t){return t.substring(st.value,st.valueEnd)}function dA(t){return Bw(t),Lw(t,Go(t,0,st.textEnd))}function Lw(t,n){let e=st.textEnd;return e===n?-1:(n=st.keyEnd=fA(t,st.key=n,e),Go(t,n,e))}function uA(t){return Bw(t),jw(t,Go(t,0,st.textEnd))}function jw(t,n){let e=st.textEnd,i=st.key=Go(t,n,e);return e===i?-1:(i=st.keyEnd=mA(t,i,e),i=Fy(t,i,e,58),i=st.value=Go(t,i,e),i=st.valueEnd=hA(t,i,e),Fy(t,i,e,59))}function Bw(t){st.key=0,st.keyEnd=0,st.value=0,st.valueEnd=0,st.textEnd=t.length}function Go(t,n,e){for(;n<e&&t.charCodeAt(n)<=32;)n++;return n}function fA(t,n,e){for(;n<e&&t.charCodeAt(n)>32;)n++;return n}function mA(t,n,e){let i;for(;n<e&&((i=t.charCodeAt(n))===45||i===95||(i&-33)>=65&&(i&-33)<=90||i>=48&&i<=57);)n++;return n}function Fy(t,n,e,i){return n=Go(t,n,e),n<e&&n++,n}function hA(t,n,e){let i=-1,r=-1,o=-1,a=n,s=a;for(;a<e;){let l=t.charCodeAt(a++);if(l===59)return s;l===34||l===39?s=a=Ly(t,l,a,e):n===a-4&&o===85&&r===82&&i===76&&l===40?s=a=Ly(t,41,a,e):l>32&&(s=a),o=r,r=i,i=l&-33}return s}function Ly(t,n,e,i){let r=-1,o=e;for(;o<i;){let a=t.charCodeAt(o++);if(a==n&&r!==92)return o;a==92&&r===92?r=0:r=a}throw new Error}function Ko(t,n,e){return Vw(t,n,e,!1),Ko}function W(t,n){return Vw(t,n,null,!0),W}function og(t){Hw($w,pA,t,!1)}function pA(t,n){for(let e=uA(n);e>=0;e=jw(n,e))$w(t,Fw(n),cA(n))}function Ut(t){Hw(CA,gA,t,!0)}function gA(t,n){for(let e=dA(n);e>=0;e=Lw(n,e))vs(t,Fw(n),!0)}function Vw(t,n,e,i){let r=Z(),o=Re(),a=xh(2);if(o.firstUpdatePass&&zw(o,t,a,i),n!==Ht&&dn(r,a,n)){let s=o.data[wi()];Ww(o,s,r,r[xe],t,r[a+1]=xA(n,e),i,a)}}function Hw(t,n,e,i){let r=Re(),o=xh(2);r.firstUpdatePass&&zw(r,null,o,i);let a=Z();if(e!==Ht&&dn(a,o,e)){let s=r.data[wi()];if(Gw(s,i)&&!Uw(r,o)){let l=i?s.classesWithoutHost:s.stylesWithoutHost;l!==null&&(e=Fc(l,e||"")),wp(r,s,a,e,i)}else DA(r,s,a,a[xe],a[o+1],a[o+1]=wA(t,n,e),i,o)}}function Uw(t,n){return n>=t.expandoStartIndex}function zw(t,n,e,i){let r=t.data;if(r[e+1]===null){let o=r[wi()],a=Uw(t,e);Gw(o,i)&&n===null&&!a&&(n=!1),n=vA(r,o,n,i),aA(r,o,n,e,a,i)}}function vA(t,n,e,i){let r=Yb(t),o=i?n.residualClasses:n.residualStyles;if(r===null)(i?n.classBindings:n.styleBindings)===0&&(e=Vh(null,t,n,e,i),e=Os(e,n.attrs,i),o=null);else{let a=n.directiveStylingLast;if(a===-1||t[a]!==r)if(e=Vh(r,t,n,e,i),o===null){let l=_A(t,n,i);l!==void 0&&Array.isArray(l)&&(l=Vh(null,t,n,l[1],i),l=Os(l,n.attrs,i),bA(t,n,i,l))}else o=yA(t,n,i)}return o!==void 0&&(i?n.residualClasses=o:n.residualStyles=o),e}function _A(t,n,e){let i=e?n.classBindings:n.styleBindings;if(Wo(i)!==0)return t[qr(i)]}function bA(t,n,e,i){let r=e?n.classBindings:n.styleBindings;t[qr(r)]=i}function yA(t,n,e){let i,r=n.directiveEnd;for(let o=1+n.directiveStylingLast;o<r;o++){let a=t[o].hostAttrs;i=Os(i,a,e)}return Os(i,n.attrs,e)}function Vh(t,n,e,i,r){let o=null,a=e.directiveEnd,s=e.directiveStylingLast;for(s===-1?s=e.directiveStart:s++;s<a&&(o=n[s],i=Os(i,o.hostAttrs,r),o!==t);)s++;return t!==null&&(e.directiveStylingLast=s),i}function Os(t,n,e){let i=e?1:2,r=-1;if(n!==null)for(let o=0;o<n.length;o++){let a=n[o];typeof a=="number"?r=a:r===i&&(Array.isArray(t)||(t=t===void 0?[]:["",t]),vs(t,a,e?!0:n[++o]))}return t===void 0?null:t}function wA(t,n,e){if(e==null||e==="")return kt;let i=[],r=Tn(e);if(Array.isArray(r))for(let o=0;o<r.length;o++)t(i,r[o],!0);else if(r instanceof Set)for(let o of r)t(i,o,!0);else if(typeof r=="object")for(let o in r)r.hasOwnProperty(o)&&t(i,o,r[o]);else typeof r=="string"&&n(i,r);return i}function $w(t,n,e){vs(t,n,Tn(e))}function CA(t,n,e){let i=String(n);i!==""&&!i.includes(" ")&&vs(t,i,e)}function DA(t,n,e,i,r,o,a,s){r===Ht&&(r=kt);let l=0,c=0,u=0<r.length?r[0]:null,f=0<o.length?o[0]:null;for(;u!==null||f!==null;){let p=l<r.length?r[l+1]:void 0,g=c<o.length?o[c+1]:void 0,C=null,I;u===f?(l+=2,c+=2,p!==g&&(C=f,I=g)):f===null||u!==null&&u<f?(l+=2,C=u):(c+=2,C=f,I=g),C!==null&&Ww(t,n,e,i,C,I,a,s),u=l<r.length?r[l]:null,f=c<o.length?o[c]:null}}function Ww(t,n,e,i,r,o,a,s){if(!(n.type&3))return;let l=t.data,c=l[s+1],u=oA(c)?jy(l,n,e,r,Wo(c),a):void 0;if(!Ed(u)){Ed(o)||iA(c)&&(o=jy(l,null,e,r,s,a));let f=sh(wi(),e);bT(i,a,f,r,o)}}function jy(t,n,e,i,r,o){let a=n===null,s;for(;r>0;){let l=t[r],c=Array.isArray(l),u=c?l[1]:l,f=u===null,p=e[r+1];p===Ht&&(p=f?kt:void 0);let g=f?Uc(p,i):u===i?p:void 0;if(c&&!Ed(g)&&(g=Uc(l,i)),Ed(g)&&(s=g,a))return s;let C=t[r+1];r=a?qr(C):Wo(C)}if(n!==null){let l=o?n.residualClasses:n.residualStyles;l!=null&&(s=Uc(l,i))}return s}function Ed(t){return t!==void 0}function xA(t,n){return t==null||t===""||(typeof n=="string"?t=t+n:typeof t=="object"&&(t=hs(Tn(t)))),t}function Gw(t,n){return(t.flags&(n?8:16))!==0}function v(t,n=""){let e=Z(),i=Re(),r=t+Be,o=i.firstCreatePass?Zo(i,r,1,n,null):i.data[r],a=EA(i,e,o,n);e[r]=a,Xc()&&Up(i,e,a,o),Po(o,!1)}var EA=(t,n,e,i)=>(Jc(!0),FS(n[xe],i));function qw(t,n,e,i=""){return dn(t,Yn(),e)?n+Bc(e)+i:Ht}function _e(t){return Le("",t),_e}function Le(t,n,e){let i=Z(),r=qw(i,t,n,e);return r!==Ht&&IA(i,wi(),r),Le}function IA(t,n,e){let i=sh(n,t);LS(t[xe],i,e)}function vt(t,n,e){eg(n)&&(n=n());let i=Z(),r=Yn();if(dn(i,r,n)){let o=Re(),a=Fo();H0(a,i,t,n,i[xe],e)}return vt}function Oe(t,n){let e=eg(t);return e&&t.set(n),e}function _t(t,n){let e=Z(),i=Re(),r=mt();return Pw(i,e,e[xe],r,t,n),_t}function ii(t){return dn(Z(),Yn(),t)?Bc(t):Ht}function ag(t,n,e=""){return qw(Z(),t,n,e)}function sg(t,n,e){let i=qc()+t,r=Z();return r[i]===Ht?Yp(r,i,n(e,r)):hw(r,i)}function By(t,n,e){let i=Re();i.firstCreatePass&&Yw(n,i.data,i.blueprint,qn(t),e)}function Yw(t,n,e,i,r){if(t=Ct(t),Array.isArray(t))for(let o=0;o<t.length;o++)Yw(t[o],n,e,i,r);else{let o=Re(),a=Z(),s=mt(),l=Nr(t)?t:Ct(t.provide),c=th(t),u=s.providerIndexes&1048575,f=s.directiveStart,p=s.providerIndexes>>20;if(Nr(t)||!t.multi){let g=new Wr(c,r,Ie,null),C=Uh(l,n,r?u:u+p,f);C===-1?($h(hd(s,a),o,l),Hh(o,t,n.length),n.push(l),s.directiveStart++,s.directiveEnd++,r&&(s.providerIndexes+=1048576),e.push(g),a.push(g)):(e[C]=g,a[C]=g)}else{let g=Uh(l,n,u+p,f),C=Uh(l,n,u,u+p),I=g>=0&&e[g],k=C>=0&&e[C];if(r&&!k||!r&&!I){$h(hd(s,a),o,l);let H=TA(r?SA:MA,e.length,r,i,c,t);!r&&k&&(e[C].providerFactory=H),Hh(o,t,n.length,0),n.push(l),s.directiveStart++,s.directiveEnd++,r&&(s.providerIndexes+=1048576),e.push(H),a.push(H)}else{let H=Zw(e[r?C:g],c,!r&&i);Hh(o,t,g>-1?g:C,H)}!r&&i&&k&&e[C].componentProviders++}}}function Hh(t,n,e,i){let r=Nr(n),o=Ab(n);if(r||o){let l=(o?Ct(n.useClass):n).prototype.ngOnDestroy;if(l){let c=t.destroyHooks||(t.destroyHooks=[]);if(!r&&n.multi){let u=c.indexOf(e);u===-1?c.push(e,[i,l]):c[u+1].push(i,l)}else c.push(e,l)}}}function Zw(t,n,e){return e&&t.componentProviders++,t.multi.push(n)-1}function Uh(t,n,e,i){for(let r=e;r<i;r++)if(n[r]===t)return r;return-1}function MA(t,n,e,i,r){return xp(this.multi,[])}function SA(t,n,e,i,r){let o=this.multi,a;if(this.providerFactory){let s=this.providerFactory.componentProviders,l=Ss(i,i[Y],this.providerFactory.index,r);a=l.slice(0,s),xp(o,a);for(let c=s;c<l.length;c++)a.push(l[c])}else a=[],xp(o,a);return a}function xp(t,n){for(let e=0;e<t.length;e++){let i=t[e];n.push(i())}return n}function TA(t,n,e,i,r,o){let a=new Wr(t,e,Ie,null);return a.multi=[],a.index=n,a.componentProviders=0,Zw(a,r,i&&!e),a}function Pe(t,n){return e=>{e.providersResolver=(i,r)=>By(i,r?r(t):t,!1),n&&(e.viewProvidersResolver=(i,r)=>By(i,r?r(n):n,!0))}}function lg(t,n){let e=qc()+t,i=Z();return i[e]===Ht?Yp(i,e,n()):hw(i,e)}function kA(t,n){let e=t[n];return e===Ht?void 0:e}function AA(t,n,e,i,r,o){let a=n+e;return dn(t,a,r)?Yp(t,a+1,o?i.call(o,r):i(r)):kA(t,a+1)}function Us(t,n){let e=Re(),i,r=t+Be;e.firstCreatePass?(i=RA(n,e.pipeRegistry),e.data[r]=i,i.onDestroy&&(e.destroyHooks??=[]).push(r,i.onDestroy)):i=e.data[r];let o=i.factory||(i.factory=Gi(i.type,!0)),a,s=jt(Ie);try{let l=md(!1),c=o();return md(l),ch(e,Z(),r,c),c}finally{jt(s)}}function RA(t,n){if(n)for(let e=n.length-1;e>=0;e--){let i=n[e];if(t===i.name)return i}}function zs(t,n,e){let i=t+Be,r=Z(),o=lh(r,i);return OA(r,i)?AA(r,qc(),n,o.transform,e,o):o.transform(e)}function OA(t,n){return t[Y].data[n].pure}function Qd(t,n){return Vd(t,n)}var Id=class{ngModuleFactory;componentFactories;constructor(n,e){this.ngModuleFactory=n,this.componentFactories=e}},cg=(()=>{class t{compileModuleSync(e){return new Cd(e)}compileModuleAsync(e){return Promise.resolve(this.compileModuleSync(e))}compileModuleAndAllComponentsSync(e){let i=this.compileModuleSync(e),r=Gm(e),o=M0(r.declarations).reduce((a,s)=>{let l=Un(s);return l&&a.push(new nr(l)),a},[]);return new Id(i,o)}compileModuleAndAllComponentsAsync(e){return Promise.resolve(this.compileModuleAndAllComponentsSync(e))}clearCache(){}clearCacheFor(e){}getModuleId(e){}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Qw=(()=>{class t{applicationErrorHandler=d(Qt);appRef=d(Xt);taskService=d(Ci);ngZone=d(R);zonelessEnabled=d(xs);tracing=d(kn,{optional:!0});zoneIsDefined=typeof Zone<"u"&&!!Zone.root.run;schedulerTickApplyArgs=[{data:{__scheduler_tick__:!0}}];subscriptions=new le;angularZoneId=this.zoneIsDefined?this.ngZone._inner?.get(fs):null;scheduleInRootZone=!this.zonelessEnabled&&this.zoneIsDefined&&(d(Rh,{optional:!0})??!1);cancelScheduledCallback=null;useMicrotaskScheduler=!1;runningTick=!1;pendingRenderTaskId=null;constructor(){this.subscriptions.add(this.appRef.afterTick.subscribe(()=>{let e=this.taskService.add();if(!this.runningTick&&(this.cleanup(),!this.zonelessEnabled||this.appRef.includeAllTestViews)){this.taskService.remove(e);return}this.switchToMicrotaskScheduler(),this.taskService.remove(e)})),this.subscriptions.add(this.ngZone.onUnstable.subscribe(()=>{this.runningTick||this.cleanup()}))}switchToMicrotaskScheduler(){this.ngZone.runOutsideAngular(()=>{let e=this.taskService.add();this.useMicrotaskScheduler=!0,queueMicrotask(()=>{this.useMicrotaskScheduler=!1,this.taskService.remove(e)})})}notify(e){if(!this.zonelessEnabled&&e===5)return;switch(e){case 0:{this.appRef.dirtyFlags|=2;break}case 3:case 2:case 4:case 5:case 1:{this.appRef.dirtyFlags|=4;break}case 6:{this.appRef.dirtyFlags|=2;break}case 12:{this.appRef.dirtyFlags|=16;break}case 13:{this.appRef.dirtyFlags|=2;break}case 11:break;default:this.appRef.dirtyFlags|=8}if(this.appRef.tracingSnapshot=this.tracing?.snapshot(this.appRef.tracingSnapshot)??null,!this.shouldScheduleTick())return;let i=this.useMicrotaskScheduler?iy:Sh;this.pendingRenderTaskId=this.taskService.add(),this.scheduleInRootZone?this.cancelScheduledCallback=Zone.root.run(()=>i(()=>this.tick())):this.cancelScheduledCallback=this.ngZone.runOutsideAngular(()=>i(()=>this.tick()))}shouldScheduleTick(){return!(this.appRef.destroyed||this.pendingRenderTaskId!==null||this.runningTick||this.appRef._runningTick||!this.zonelessEnabled&&this.zoneIsDefined&&Zone.current.get(fs+this.angularZoneId))}tick(){if(this.runningTick||this.appRef.destroyed)return;if(this.appRef.dirtyFlags===0){this.cleanup();return}!this.zonelessEnabled&&this.appRef.dirtyFlags&7&&(this.appRef.dirtyFlags|=1);let e=this.taskService.add();try{this.ngZone.run(()=>{this.runningTick=!0,this.appRef._tick()},void 0,this.schedulerTickApplyArgs)}catch(i){this.applicationErrorHandler(i)}finally{this.taskService.remove(e),this.cleanup()}}ngOnDestroy(){this.subscriptions.unsubscribe(),this.cleanup()}cleanup(){if(this.runningTick=!1,this.cancelScheduledCallback?.(),this.cancelScheduledCallback=null,this.pendingRenderTaskId!==null){let e=this.pendingRenderTaskId;this.pendingRenderTaskId=null,this.taskService.remove(e)}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Kw(){return[{provide:Hn,useExisting:Qw},{provide:R,useClass:ms},{provide:xs,useValue:!0}]}function NA(){return typeof $localize<"u"&&$localize.locale||Hs}var Kd=new _("",{factory:()=>d(Kd,{optional:!0,skipSelf:!0})||NA()});var Xd=class{destroyed=!1;listeners=null;errorHandler=d(At,{optional:!0});destroyRef=d(Dt);constructor(){this.destroyRef.onDestroy(()=>{this.destroyed=!0,this.listeners=null})}subscribe(n){if(this.destroyed)throw new M(953,!1);return(this.listeners??=[]).push(n),{unsubscribe:()=>{let e=this.listeners?.indexOf(n);e!==void 0&&e!==-1&&this.listeners?.splice(e,1)}}}emit(n){if(this.destroyed){console.warn(on(953,!1));return}if(this.listeners===null)return;let e=q(null);try{for(let i of this.listeners)try{i(n)}catch(r){this.errorHandler?.handleError(r)}}finally{q(e)}}};function Ge(t){return mb(t)}function nt(t,n){return Ka(t,n?.equal)}var eu=Symbol("InputSignalNode#UNSET"),rC=K(y({},Xa),{transformFn:void 0,applyValueToInputSignal(t,n){xr(t,n)}});function oC(t,n){let e=Object.create(rC);e.value=t,e.transformFn=n?.transform;function i(){if(ji(e),e.value===eu){let r=null;throw new M(-950,r)}return e.value}return i[Xe]=e,i}var rr=class{attributeName;constructor(n){this.attributeName=n}__NG_ELEMENT_ID__=()=>Md(this.attributeName);toString(){return`HostAttributeToken ${this.attributeName}`}};function Xw(t,n){return oC(t,n)}function XA(t){return oC(eu,t)}var Mi=(Xw.required=XA,Xw);function Jw(t,n){return Kp(n)}function JA(t,n){return Xp(n)}var An=(Jw.required=JA,Jw);function eC(t,n){return Kp(n)}function eR(t,n){return Xp(n)}var aC=(eC.required=eR,eC);function sC(t,n){let e=Object.create(rC),i=new Xd;e.value=t;function r(){return ji(e),tC(e.value),e.value}return r[Xe]=e,r.asReadonly=ed.bind(r),r.set=o=>{e.equal(e.value,o)||(xr(e,o),i.emit(o))},r.update=o=>{tC(e.value),r.set(o(e.value))},r.subscribe=i.subscribe.bind(i),r.destroyRef=i.destroyRef,r}function tC(t){if(t===eu)throw new M(952,!1)}function nC(t,n){return sC(t,n)}function tR(t){return sC(eu,t)}var ke=(nC.required=tR,nC);var ug=new _(""),nR=new _("");function $s(t){return!t.moduleRef}function iR(t){let n=$s(t)?t.r3Injector:t.moduleRef.injector,e=n.get(R);return e.run(()=>{$s(t)?t.r3Injector.resolveInjectorInitializers():t.moduleRef.resolveInjectorInitializers();let i=n.get(Qt),r;if(e.runOutsideAngular(()=>{r=e.onError.subscribe({next:i})}),$s(t)){let o=()=>n.destroy(),a=t.platformInjector.get(ug);a.add(o),n.onDestroy(()=>{r.unsubscribe(),a.delete(o)})}else{let o=()=>t.moduleRef.destroy(),a=t.platformInjector.get(ug);a.add(o),t.moduleRef.onDestroy(()=>{Ms(t.allPlatformModules,t.moduleRef),r.unsubscribe(),a.delete(o)})}return oR(i,e,()=>{let o=n.get(Ci),a=o.add(),s=n.get(ig);return s.runInitializers(),s.donePromise.then(()=>{let l=n.get(Kd,Hs);if(Nw(l||Hs),!n.get(nR,!0))return $s(t)?n.get(Xt):(t.allPlatformModules.push(t.moduleRef),t.moduleRef);if($s(t)){let u=n.get(Xt);return t.rootComponent!==void 0&&u.bootstrap(t.rootComponent),u}else return rR?.(t.moduleRef,t.allPlatformModules),t.moduleRef}).finally(()=>{o.remove(a)})})})}var rR;function oR(t,n,e){try{let i=e();return Ii(i)?i.catch(r=>{throw n.runOutsideAngular(()=>t(r)),r}):i}catch(i){throw n.runOutsideAngular(()=>t(i)),i}}var Jd=null;function aR(t=[],n){return F.create({name:n,providers:[{provide:_s,useValue:"platform"},{provide:ug,useValue:new Set([()=>Jd=null])},...t]})}function sR(t=[]){if(Jd)return Jd;let n=aR(t);return Jd=n,Aw(),lR(n),n}function lR(t){let n=t.get(Sd,null);at(t,()=>{n?.forEach(e=>e())})}var cR=1e4;var _q=cR-1e3;var Ne=(()=>{class t{static __NG_ELEMENT_ID__=dR}return t})();function dR(t){return uR(mt(),Z(),(t&16)===16)}function uR(t,n,e){if(Gn(t)&&!e){let i=cn(t.index,n);return new tr(i,i)}else if(t.type&175){let i=n[Vt];return new tr(i,n)}return null}function lC(t){let{rootComponent:n,appProviders:e,platformProviders:i,platformRef:r}=t;De(ve.BootstrapApplicationStart);try{let o=r?.injector??sR(i),a=[Kw(),oy,...e||[]],s=new Rs({providers:a,parent:o,debugName:"",runEnvironmentInitializers:!1});return iR({r3Injector:s.injector,platformInjector:o,rootComponent:n})}catch(o){return Promise.reject(o)}finally{De(ve.BootstrapApplicationEnd)}}function J(t){return typeof t=="boolean"?t:t!=null&&t!=="false"}function ri(t,n=NaN){return!isNaN(parseFloat(t))&&!isNaN(Number(t))?Number(t):n}var dg=Symbol("NOT_SET"),cC=new Set,fR=K(y({},Xa),{kind:"afterRenderEffectPhase",consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!0,value:dg,cleanup:null,consumerMarkedDirty(){if(this.sequence.impl.executing){if(this.sequence.lastPhase===null||this.sequence.lastPhase<this.phase)return;this.sequence.erroredOrDestroyed=!0}this.sequence.scheduler.notify(7)},phaseFn(t){if(this.sequence.lastPhase=this.phase,!this.dirty)return this.signal;if(this.dirty=!1,this.value!==dg&&!bo(this))return this.signal;try{for(let r of this.cleanup??cC)r()}finally{this.cleanup?.clear()}let n=[];t!==void 0&&n.push(t),n.push(this.registerCleanupFn);let e=Bi(this),i;try{i=this.userFn.apply(null,n)}finally{Dr(this,e)}return(this.value===dg||!this.equal(this.value,i))&&(this.value=i,this.version++),this.signal}}),fg=class extends Ts{scheduler;lastPhase=null;nodes=[void 0,void 0,void 0,void 0];onDestroyFns=null;constructor(n,e,i,r,o,a=null){super(n,[void 0,void 0,void 0,void 0],i,!1,o.get(Dt),a),this.scheduler=r;for(let s of Bp){let l=e[s];if(l===void 0)continue;let c=Object.create(fR);c.sequence=this,c.phase=s,c.userFn=l,c.dirty=!0,c.signal=()=>(ji(c),c.value),c.signal[Xe]=c,c.registerCleanupFn=u=>(c.cleanup??=new Set).add(u),this.nodes[s]=c,this.hooks[s]=u=>c.phaseFn(u)}}afterRun(){super.afterRun(),this.lastPhase=null}destroy(){if(this.onDestroyFns!==null)for(let n of this.onDestroyFns)n();super.destroy();for(let n of this.nodes)if(n)try{for(let e of n.cleanup??cC)e()}finally{Vi(n)}}};function dC(t,n){let e=n?.injector??d(F),i=e.get(Hn),r=e.get(Pd),o=e.get(kn,null,{optional:!0});r.impl??=e.get(Vp);let a=t;typeof a=="function"&&(a={mixedReadWrite:t});let s=e.get(Lo,null,{optional:!0}),l=new fg(r.impl,[a.earlyRead,a.write,a.mixedReadWrite,a.read],s?.view,i,e,o?.snapshot(null));return r.impl.register(l),l}function tu(t,n){let e=Un(t),i=n.elementInjector||Ao();return new nr(e).create(i,n.projectableNodes,n.hostElement,n.environmentInjector,n.directives,n.bindings)}function uC(t){let n=Un(t);if(!n)return null;let e=new nr(n);return{get selector(){return e.selector},get type(){return e.componentType},get inputs(){return e.inputs},get outputs(){return e.outputs},get ngContentSelectors(){return e.ngContentSelectors},get isStandalone(){return n.standalone},get isSignal(){return n.signals}}}var fC=null;function pn(){return fC}function hg(t){fC??=t}var Ws=class{},Si=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:()=>d(mC),providedIn:"platform"})}return t})(),pg=new _(""),mC=(()=>{class t extends Si{_location;_history;_doc=d(j);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return pn().getBaseHref(this._doc)}onPopState(e){let i=pn().getGlobalEventTarget(this._doc,"window");return i.addEventListener("popstate",e,!1),()=>i.removeEventListener("popstate",e)}onHashChange(e){let i=pn().getGlobalEventTarget(this._doc,"window");return i.addEventListener("hashchange",e,!1),()=>i.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,i,r){this._history.pushState(e,i,r)}replaceState(e,i,r){this._history.replaceState(e,i,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:()=>new t,providedIn:"platform"})}return t})();function nu(t,n){return t?n?t.endsWith("/")?n.startsWith("/")?t+n.slice(1):t+n:n.startsWith("/")?t+n:`${t}/${n}`:t:n}function hC(t){let n=t.search(/#|\?|$/);return t[n-1]==="/"?t.slice(0,n-1)+t.slice(n):t}function Rn(t){return t&&t[0]!=="?"?`?${t}`:t}var Ti=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:()=>d(ru),providedIn:"root"})}return t})(),iu=new _(""),ru=(()=>{class t extends Ti{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,i){super(),this._platformLocation=e,this._baseHref=i??this._platformLocation.getBaseHrefFromDOM()??d(j).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return nu(this._baseHref,e)}path(e=!1){let i=this._platformLocation.pathname+Rn(this._platformLocation.search),r=this._platformLocation.hash;return r&&e?`${i}${r}`:i}pushState(e,i,r,o){let a=this.prepareExternalUrl(r+Rn(o));this._platformLocation.pushState(e,i,a)}replaceState(e,i,r,o){let a=this.prepareExternalUrl(r+Rn(o));this._platformLocation.replaceState(e,i,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(i){return new(i||t)(P(Si),P(iu,8))};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var oi=(()=>{class t{_subject=new D;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let i=this._locationStrategy.getBaseHref();this._basePath=pR(hC(pC(i))),this._locationStrategy.onPopState(r=>{this._subject.next({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,i=""){return this.path()==this.normalize(e+Rn(i))}normalize(e){return t.stripTrailingSlash(hR(this._basePath,pC(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,i="",r=null){this._locationStrategy.pushState(r,"",e,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+Rn(i)),r)}replaceState(e,i="",r=null){this._locationStrategy.replaceState(r,"",e,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+Rn(i)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(i=>{this._notifyUrlChangeListeners(i.url,i.state)}),()=>{let i=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(i,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",i){this._urlChangeListeners.forEach(r=>r(e,i))}subscribe(e,i,r){return this._subject.subscribe({next:e,error:i??void 0,complete:r??void 0})}static normalizeQueryParams=Rn;static joinWithSlash=nu;static stripTrailingSlash=hC;static \u0275fac=function(i){return new(i||t)(P(Ti))};static \u0275prov=b({token:t,factory:()=>mR(),providedIn:"root"})}return t})();function mR(){return new oi(P(Ti))}function hR(t,n){if(!t||!n.startsWith(t))return n;let e=n.substring(t.length);return e===""||["/",";","?","#"].includes(e[0])?e:n}function pC(t){return t.replace(/\/index.html$/,"")}function pR(t){if(new RegExp("^(https?:)?//").test(t)){let[,e]=t.split(/\/\/[^\/]+/);return e}return t}var _g=(()=>{class t extends Ti{_platformLocation;_baseHref="";_removeListenerFns=[];constructor(e,i){super(),this._platformLocation=e,i!=null&&(this._baseHref=i)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}path(e=!1){let i=this._platformLocation.hash??"#";return i.length>0?i.substring(1):i}prepareExternalUrl(e){let i=nu(this._baseHref,e);return i.length>0?"#"+i:i}pushState(e,i,r,o){let a=this.prepareExternalUrl(r+Rn(o))||this._platformLocation.pathname;this._platformLocation.pushState(e,i,a)}replaceState(e,i,r,o){let a=this.prepareExternalUrl(r+Rn(o))||this._platformLocation.pathname;this._platformLocation.replaceState(e,i,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(i){return new(i||t)(P(Si),P(iu,8))};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})();var bg=(()=>{class t{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;injector=d(F);constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let i=this._viewContainerRef;if(this._viewRef&&i.remove(i.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let r=this._createContextForwardProxy();this._viewRef=i.createEmbeddedView(this.ngTemplateOutlet,r,{injector:this._getInjector()})}}_getInjector(){return this.ngTemplateOutletInjector==="outlet"?this.injector:this.ngTemplateOutletInjector??void 0}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,i,r)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,i,r):!1,get:(e,i,r)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,i,r)}})}static \u0275fac=function(i){return new(i||t)(Ie(ht))};static \u0275dir=S({type:t,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[Ue]})}return t})();function vR(t,n){return new M(2100,!1)}var gg=class{createSubscription(n,e,i){return Ge(()=>n.subscribe({next:e,error:i}))}dispose(n){Ge(()=>n.unsubscribe())}},vg=class{createSubscription(n,e,i){return n.then(r=>e?.(r),r=>i?.(r)),{unsubscribe:()=>{e=null,i=null}}}dispose(n){n.unsubscribe()}},_R=new vg,bR=new gg,yg=(()=>{class t{_ref;_latestValue=null;markForCheckOnValueUpdate=!0;_subscription=null;_obj=null;_strategy=null;applicationErrorHandler=d(Qt);constructor(e){this._ref=e}ngOnDestroy(){this._subscription&&this._dispose(),this._ref=null}transform(e){if(!this._obj){if(e)try{this.markForCheckOnValueUpdate=!1,this._subscribe(e)}finally{this.markForCheckOnValueUpdate=!0}return this._latestValue}return e!==this._obj?(this._dispose(),this.transform(e)):this._latestValue}_subscribe(e){this._obj=e,this._strategy=this._selectStrategy(e),this._subscription=this._strategy.createSubscription(e,i=>this._updateLatestValue(e,i),i=>this.applicationErrorHandler(i))}_selectStrategy(e){if(Ii(e))return _R;if(Wd(e))return bR;throw vR(t,e)}_dispose(){this._strategy.dispose(this._subscription),this._latestValue=null,this._subscription=null,this._obj=null}_updateLatestValue(e,i){e===this._obj&&(this._latestValue=i,this.markForCheckOnValueUpdate&&this._ref?.markForCheck())}static \u0275fac=function(i){return new(i||t)(Ie(Ne,16))};static \u0275pipe=Jp({name:"async",type:t,pure:!1})}return t})();function Gs(t,n){n=encodeURIComponent(n);for(let e of t.split(";")){let i=e.indexOf("="),[r,o]=i==-1?[e,""]:[e.slice(0,i),e.slice(i+1)];if(r.trim()===n)return decodeURIComponent(o)}return null}var Kr=class{};var Cg="browser";function gC(t){return t===Cg}var Dg=(()=>{class t{static \u0275prov=b({token:t,providedIn:"root",factory:()=>new wg(d(j),window)})}return t})(),wg=class{document;window;offset=()=>[0,0];constructor(n,e){this.document=n,this.window=e}setOffset(n){Array.isArray(n)?this.offset=()=>n:this.offset=n}getScrollPosition(){return[this.window.scrollX,this.window.scrollY]}scrollToPosition(n,e){this.window.scrollTo(K(y({},e),{left:n[0],top:n[1]}))}scrollToAnchor(n,e){let i=CR(this.document,n);i&&(this.scrollToElement(i,e),i.focus())}setHistoryScrollRestoration(n){try{this.window.history.scrollRestoration=n}catch{console.warn(on(2400,!1))}}scrollToElement(n,e){let i=n.getBoundingClientRect(),r=i.left+this.window.pageXOffset,o=i.top+this.window.pageYOffset,a=this.offset();this.window.scrollTo(K(y({},e),{left:r-a[0],top:o-a[1]}))}};function CR(t,n){let e=t.getElementById(n)||t.getElementsByName(n)[0];if(e)return e;if(typeof t.createTreeWalker=="function"&&t.body&&typeof t.body.attachShadow=="function"){let i=t.createTreeWalker(t.body,NodeFilter.SHOW_ELEMENT),r=i.currentNode;for(;r;){let o=r.shadowRoot;if(o){let a=o.getElementById(n)||o.querySelector(`[name="${n}"]`);if(a)return a}r=i.nextNode()}}return null}var qs=class{_doc;constructor(n){this._doc=n}manager},ou=(()=>{class t extends qs{constructor(e){super(e)}supports(e){return!0}addEventListener(e,i,r,o){return e.addEventListener(i,r,o),()=>this.removeEventListener(e,i,r,o)}removeEventListener(e,i,r,o){return e.removeEventListener(i,r,o)}static \u0275fac=function(i){return new(i||t)(P(j))};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})(),lu=new _(""),Mg=(()=>{class t{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,i){this._zone=i,e.forEach(a=>{a.manager=this});let r=e.filter(a=>!(a instanceof ou));this._plugins=r.slice().reverse();let o=e.find(a=>a instanceof ou);o&&this._plugins.push(o)}addEventListener(e,i,r,o){return this._findPluginFor(i).addEventListener(e,i,r,o)}getZone(){return this._zone}_findPluginFor(e){let i=this._eventNameToPlugin.get(e);if(i)return i;if(i=this._plugins.find(o=>o.supports(e)),!i)throw new M(5101,!1);return this._eventNameToPlugin.set(e,i),i}static \u0275fac=function(i){return new(i||t)(P(lu),P(R))};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})(),xg="ng-app-id";function vC(t){for(let n of t)n.remove()}function _C(t,n){let e=n.createElement("style");return e.textContent=t,e}function DR(t,n,e,i){let r=t.head?.querySelectorAll(`style[${xg}="${n}"],link[${xg}="${n}"]`);if(r)for(let o of r)o.removeAttribute(xg),o instanceof HTMLLinkElement?i.set(o.href.slice(o.href.lastIndexOf("/")+1),{usage:0,elements:[o]}):o.textContent&&e.set(o.textContent,{usage:0,elements:[o]})}function Ig(t,n){let e=n.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",t),e}var Sg=(()=>{class t{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(e,i,r,o={}){this.doc=e,this.appId=i,this.nonce=r,DR(e,i,this.inline,this.external),this.hosts.add(e.head)}addStyles(e,i){for(let r of e)this.addUsage(r,this.inline,_C);i?.forEach(r=>this.addUsage(r,this.external,Ig))}removeStyles(e,i){for(let r of e)this.removeUsage(r,this.inline);i?.forEach(r=>this.removeUsage(r,this.external))}addUsage(e,i,r){let o=i.get(e);o?o.usage++:i.set(e,{usage:1,elements:[...this.hosts].map(a=>this.addElement(a,r(e,this.doc)))})}removeUsage(e,i){let r=i.get(e);r&&(r.usage--,r.usage<=0&&(vC(r.elements),i.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])vC(e);this.hosts.clear()}addHost(e){this.hosts.add(e);for(let[i,{elements:r}]of this.inline)r.push(this.addElement(e,_C(i,this.doc)));for(let[i,{elements:r}]of this.external)r.push(this.addElement(e,Ig(i,this.doc)))}removeHost(e){this.hosts.delete(e)}addElement(e,i){return this.nonce&&i.setAttribute("nonce",this.nonce),e.appendChild(i)}static \u0275fac=function(i){return new(i||t)(P(j),P(ir),P(Yo,8),P(Yr))};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})(),Eg={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},Tg=/%COMP%/g;var yC="%COMP%",xR=`_nghost-${yC}`,ER=`_ngcontent-${yC}`,IR=!0,MR=new _("",{factory:()=>IR});function SR(t){return ER.replace(Tg,t)}function TR(t){return xR.replace(Tg,t)}function wC(t,n){return n.map(e=>e.replace(Tg,t))}var kg=(()=>{class t{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;constructor(e,i,r,o,a,s,l=null,c=null){this.eventManager=e,this.sharedStylesHost=i,this.appId=r,this.removeStylesOnCompDestroy=o,this.doc=a,this.ngZone=s,this.nonce=l,this.tracingService=c,this.defaultRenderer=new Ys(e,a,s,this.tracingService)}createRenderer(e,i){if(!e||!i)return this.defaultRenderer;let r=this.getOrCreateRenderer(e,i);return r instanceof su?r.applyToHost(e):r instanceof Zs&&r.applyStyles(),r}getOrCreateRenderer(e,i){let r=this.rendererByCompId,o=r.get(i.id);if(!o){let a=this.doc,s=this.ngZone,l=this.eventManager,c=this.sharedStylesHost,u=this.removeStylesOnCompDestroy,f=this.tracingService;switch(i.encapsulation){case Sn.Emulated:o=new su(l,c,i,this.appId,u,a,s,f);break;case Sn.ShadowDom:return new au(l,e,i,a,s,this.nonce,f,c);case Sn.ExperimentalIsolatedShadowDom:return new au(l,e,i,a,s,this.nonce,f);default:o=new Zs(l,c,i,u,a,s,f);break}r.set(i.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(i){return new(i||t)(P(Mg),P(Sg),P(ir),P(MR),P(j),P(R),P(Yo),P(kn,8))};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})(),Ys=class{eventManager;doc;ngZone;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(n,e,i,r){this.eventManager=n,this.doc=e,this.ngZone=i,this.tracingService=r}destroy(){}destroyNode=null;createElement(n,e){return e?this.doc.createElementNS(Eg[e]||e,n):this.doc.createElement(n)}createComment(n){return this.doc.createComment(n)}createText(n){return this.doc.createTextNode(n)}appendChild(n,e){(bC(n)?n.content:n).appendChild(e)}insertBefore(n,e,i){n&&(bC(n)?n.content:n).insertBefore(e,i)}removeChild(n,e){e.remove()}selectRootElement(n,e){let i=typeof n=="string"?this.doc.querySelector(n):n;if(!i)throw new M(-5104,!1);return e||(i.textContent=""),i}parentNode(n){return n.parentNode}nextSibling(n){return n.nextSibling}setAttribute(n,e,i,r){if(r){e=r+":"+e;let o=Eg[r];o?n.setAttributeNS(o,e,i):n.setAttribute(e,i)}else n.setAttribute(e,i)}removeAttribute(n,e,i){if(i){let r=Eg[i];r?n.removeAttributeNS(r,e):n.removeAttribute(`${i}:${e}`)}else n.removeAttribute(e)}addClass(n,e){n.classList.add(e)}removeClass(n,e){n.classList.remove(e)}setStyle(n,e,i,r){r&(Qn.DashCase|Qn.Important)?n.style.setProperty(e,i,r&Qn.Important?"important":""):n.style[e]=i}removeStyle(n,e,i){i&Qn.DashCase?n.style.removeProperty(e):n.style[e]=""}setProperty(n,e,i){n!=null&&(n[e]=i)}setValue(n,e){n.nodeValue=e}listen(n,e,i,r){if(typeof n=="string"&&(n=pn().getGlobalEventTarget(this.doc,n),!n))throw new M(5102,!1);let o=this.decoratePreventDefault(i);return this.tracingService?.wrapEventListener&&(o=this.tracingService.wrapEventListener(n,e,o)),this.eventManager.addEventListener(n,e,o,r)}decoratePreventDefault(n){return e=>{if(e==="__ngUnwrap__")return n;n(e)===!1&&e.preventDefault()}}};function bC(t){return t.tagName==="TEMPLATE"&&t.content!==void 0}var au=class extends Ys{hostEl;sharedStylesHost;shadowRoot;constructor(n,e,i,r,o,a,s,l){super(n,r,o,s),this.hostEl=e,this.sharedStylesHost=l,this.shadowRoot=e.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let c=i.styles;c=wC(i.id,c);for(let f of c){let p=document.createElement("style");a&&p.setAttribute("nonce",a),p.textContent=f,this.shadowRoot.appendChild(p)}let u=i.getExternalStyles?.();if(u)for(let f of u){let p=Ig(f,r);a&&p.setAttribute("nonce",a),this.shadowRoot.appendChild(p)}}nodeOrShadowRoot(n){return n===this.hostEl?this.shadowRoot:n}appendChild(n,e){return super.appendChild(this.nodeOrShadowRoot(n),e)}insertBefore(n,e,i){return super.insertBefore(this.nodeOrShadowRoot(n),e,i)}removeChild(n,e){return super.removeChild(null,e)}parentNode(n){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(n)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},Zs=class extends Ys{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(n,e,i,r,o,a,s,l){super(n,o,a,s),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=r;let c=i.styles;this.styles=l?wC(l,c):c,this.styleUrls=i.getExternalStyles?.(l)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&Gr.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},su=class extends Zs{contentAttr;hostAttr;constructor(n,e,i,r,o,a,s,l){let c=r+"-"+i.id;super(n,e,i,o,a,s,l,c),this.contentAttr=SR(c),this.hostAttr=TR(c)}applyToHost(n){this.applyStyles(),this.setAttribute(n,this.hostAttr,"")}createElement(n,e){let i=super.createElement(n,e);return super.setAttribute(i,this.contentAttr,""),i}};var cu=class t extends Ws{supportsDOMEvents=!0;static makeCurrent(){hg(new t)}onAndCancel(n,e,i,r){return n.addEventListener(e,i,r),()=>{n.removeEventListener(e,i,r)}}dispatchEvent(n,e){n.dispatchEvent(e)}remove(n){n.remove()}createElement(n,e){return e=e||this.getDefaultDocument(),e.createElement(n)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(n){return n.nodeType===Node.ELEMENT_NODE}isShadowRoot(n){return n instanceof DocumentFragment}getGlobalEventTarget(n,e){return e==="window"?window:e==="document"?n:e==="body"?n.body:null}getBaseHref(n){let e=kR();return e==null?null:AR(e)}resetBaseElement(){Qs=null}getUserAgent(){return window.navigator.userAgent}getCookie(n){return Gs(document.cookie,n)}},Qs=null;function kR(){return Qs=Qs||document.head.querySelector("base"),Qs?Qs.getAttribute("href"):null}function AR(t){return new URL(t,document.baseURI).pathname}var RR=(()=>{class t{build(){return new XMLHttpRequest}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})(),CC=["alt","control","meta","shift"],OR={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},NR={alt:t=>t.altKey,control:t=>t.ctrlKey,meta:t=>t.metaKey,shift:t=>t.shiftKey},DC=(()=>{class t extends qs{constructor(e){super(e)}supports(e){return t.parseEventName(e)!=null}addEventListener(e,i,r,o){let a=t.parseEventName(i),s=t.eventCallback(a.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>pn().onAndCancel(e,a.domEventName,s,o))}static parseEventName(e){let i=e.toLowerCase().split("."),r=i.shift();if(i.length===0||!(r==="keydown"||r==="keyup"))return null;let o=t._normalizeKey(i.pop()),a="",s=i.indexOf("code");if(s>-1&&(i.splice(s,1),a="code."),CC.forEach(c=>{let u=i.indexOf(c);u>-1&&(i.splice(u,1),a+=c+".")}),a+=o,i.length!=0||o.length===0)return null;let l={};return l.domEventName=r,l.fullKey=a,l}static matchEventFullKeyCode(e,i){let r=OR[e.key]||e.key,o="";return i.indexOf("code.")>-1&&(r=e.code,o="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),CC.forEach(a=>{if(a!==r){let s=NR[a];s(e)&&(o+=a+".")}}),o+=r,o===i)}static eventCallback(e,i,r){return o=>{t.matchEventFullKeyCode(o,e)&&r.runGuarded(()=>i(o))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(i){return new(i||t)(P(j))};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})();async function Ag(t,n,e){let i=y({rootComponent:t},PR(n,e));return lC(i)}function PR(t,n){return{platformRef:n?.platformRef,appProviders:[...VR,...t?.providers??[]],platformProviders:BR}}function FR(){cu.makeCurrent()}function LR(){return new At}function jR(){return Mp(document),document}var BR=[{provide:Yr,useValue:Cg},{provide:Sd,useValue:FR,multi:!0},{provide:j,useFactory:jR}];var VR=[{provide:_s,useValue:"root"},{provide:At,useFactory:LR},{provide:lu,useClass:ou,multi:!0},{provide:lu,useClass:DC,multi:!0},kg,Sg,Mg,{provide:tt,useExisting:kg},{provide:Kr,useClass:RR},[]];var or=class t{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(n){n?typeof n=="string"?this.lazyInit=()=>{this.headers=new Map,n.split(`
`).forEach(e=>{let i=e.indexOf(":");if(i>0){let r=e.slice(0,i),o=e.slice(i+1).trim();this.addHeaderEntry(r,o)}})}:typeof Headers<"u"&&n instanceof Headers?(this.headers=new Map,n.forEach((e,i)=>{this.addHeaderEntry(i,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(n).forEach(([e,i])=>{this.setHeaderEntries(e,i)})}:this.headers=new Map}has(n){return this.init(),this.headers.has(n.toLowerCase())}get(n){this.init();let e=this.headers.get(n.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(n){return this.init(),this.headers.get(n.toLowerCase())||null}append(n,e){return this.clone({name:n,value:e,op:"a"})}set(n,e){return this.clone({name:n,value:e,op:"s"})}delete(n,e){return this.clone({name:n,value:e,op:"d"})}maybeSetNormalizedName(n,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,n)}init(){this.lazyInit&&(this.lazyInit instanceof t?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(n=>this.applyUpdate(n)),this.lazyUpdate=null))}copyFrom(n){n.init(),Array.from(n.headers.keys()).forEach(e=>{this.headers.set(e,n.headers.get(e)),this.normalizedNames.set(e,n.normalizedNames.get(e))})}clone(n){let e=new t;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof t?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([n]),e}applyUpdate(n){let e=n.name.toLowerCase();switch(n.op){case"a":case"s":let i=n.value;if(typeof i=="string"&&(i=[i]),i.length===0)return;this.maybeSetNormalizedName(n.name,e);let r=(n.op==="a"?this.headers.get(e):void 0)||[];r.push(...i),this.headers.set(e,r);break;case"d":let o=n.value;if(!o)this.headers.delete(e),this.normalizedNames.delete(e);else{let a=this.headers.get(e);if(!a)return;a=a.filter(s=>o.indexOf(s)===-1),a.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,a)}break}}addHeaderEntry(n,e){let i=n.toLowerCase();this.maybeSetNormalizedName(n,i),this.headers.has(i)?this.headers.get(i).push(e):this.headers.set(i,[e])}setHeaderEntries(n,e){let i=(Array.isArray(e)?e:[e]).map(o=>o.toString()),r=n.toLowerCase();this.headers.set(r,i),this.maybeSetNormalizedName(n,r)}forEach(n){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>n(this.normalizedNames.get(e),this.headers.get(e)))}};var uu=class{map=new Map;set(n,e){return this.map.set(n,e),this}get(n){return this.map.has(n)||this.map.set(n,n.defaultValue()),this.map.get(n)}delete(n){return this.map.delete(n),this}has(n){return this.map.has(n)}keys(){return this.map.keys()}},fu=class{encodeKey(n){return xC(n)}encodeValue(n){return xC(n)}decodeKey(n){return decodeURIComponent(n)}decodeValue(n){return decodeURIComponent(n)}};function HR(t,n){let e=new Map;return t.length>0&&t.replace(/^\?/,"").split("&").forEach(r=>{let o=r.indexOf("="),[a,s]=o==-1?[n.decodeKey(r),""]:[n.decodeKey(r.slice(0,o)),n.decodeValue(r.slice(o+1))],l=e.get(a)||[];l.push(s),e.set(a,l)}),e}var UR=/%(\d[a-f0-9])/gi,zR={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function xC(t){return encodeURIComponent(t).replace(UR,(n,e)=>zR[e]??n)}function du(t){return`${t}`}var zt=class t{map;encoder;updates=null;cloneFrom=null;constructor(n={}){if(this.encoder=n.encoder||new fu,n.fromString){if(n.fromObject)throw new M(2805,!1);this.map=HR(n.fromString,this.encoder)}else n.fromObject?(this.map=new Map,Object.keys(n.fromObject).forEach(e=>{let i=n.fromObject[e],r=Array.isArray(i)?i.map(du):[du(i)];this.map.set(e,r)})):this.map=null}has(n){return this.init(),this.map.has(n)}get(n){this.init();let e=this.map.get(n);return e?e[0]:null}getAll(n){return this.init(),this.map.get(n)||null}keys(){return this.init(),Array.from(this.map.keys())}append(n,e){return this.clone({param:n,value:e,op:"a"})}appendAll(n){let e=[];return Object.keys(n).forEach(i=>{let r=n[i];Array.isArray(r)?r.forEach(o=>{e.push({param:i,value:o,op:"a"})}):e.push({param:i,value:r,op:"a"})}),this.clone(e)}set(n,e){return this.clone({param:n,value:e,op:"s"})}delete(n,e){return this.clone({param:n,value:e,op:"d"})}toString(){return this.init(),this.keys().map(n=>{let e=this.encoder.encodeKey(n);return this.map.get(n).map(i=>e+"="+this.encoder.encodeValue(i)).join("&")}).filter(n=>n!=="").join("&")}clone(n){let e=new t({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(n),e}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(n=>this.map.set(n,this.cloneFrom.map.get(n))),this.updates.forEach(n=>{switch(n.op){case"a":case"s":let e=(n.op==="a"?this.map.get(n.param):void 0)||[];e.push(du(n.value)),this.map.set(n.param,e);break;case"d":if(n.value!==void 0){let i=this.map.get(n.param)||[],r=i.indexOf(du(n.value));r!==-1&&i.splice(r,1),i.length>0?this.map.set(n.param,i):this.map.delete(n.param)}else{this.map.delete(n.param);break}}}),this.cloneFrom=this.updates=null)}};function $R(t){switch(t){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function EC(t){return typeof ArrayBuffer<"u"&&t instanceof ArrayBuffer}function IC(t){return typeof Blob<"u"&&t instanceof Blob}function MC(t){return typeof FormData<"u"&&t instanceof FormData}function WR(t){return typeof URLSearchParams<"u"&&t instanceof URLSearchParams}var SC="Content-Type",TC="Accept",AC="text/plain",RC="application/json",GR=`${RC}, ${AC}, */*`,Xo=class t{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(n,e,i,r){this.url=e,this.method=n.toUpperCase();let o;if($R(this.method)||r?(this.body=i!==void 0?i:null,o=r):o=i,o){if(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,this.keepalive=!!o.keepalive,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),o.priority&&(this.priority=o.priority),o.cache&&(this.cache=o.cache),o.credentials&&(this.credentials=o.credentials),typeof o.timeout=="number"){if(o.timeout<1||!Number.isInteger(o.timeout))throw new M(2822,"");this.timeout=o.timeout}o.mode&&(this.mode=o.mode),o.redirect&&(this.redirect=o.redirect),o.integrity&&(this.integrity=o.integrity),o.referrer&&(this.referrer=o.referrer),o.referrerPolicy&&(this.referrerPolicy=o.referrerPolicy),this.transferCache=o.transferCache}if(this.headers??=new or,this.context??=new uu,!this.params)this.params=new zt,this.urlWithParams=e;else{let a=this.params.toString();if(a.length===0)this.urlWithParams=e;else{let s=e.indexOf("?"),l=s===-1?"?":s<e.length-1?"&":"";this.urlWithParams=e+l+a}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||EC(this.body)||IC(this.body)||MC(this.body)||WR(this.body)?this.body:this.body instanceof zt?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||MC(this.body)?null:IC(this.body)?this.body.type||null:EC(this.body)?null:typeof this.body=="string"?AC:this.body instanceof zt?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?RC:null}clone(n={}){let e=n.method||this.method,i=n.url||this.url,r=n.responseType||this.responseType,o=n.keepalive??this.keepalive,a=n.priority||this.priority,s=n.cache||this.cache,l=n.mode||this.mode,c=n.redirect||this.redirect,u=n.credentials||this.credentials,f=n.referrer||this.referrer,p=n.integrity||this.integrity,g=n.referrerPolicy||this.referrerPolicy,C=n.transferCache??this.transferCache,I=n.timeout??this.timeout,k=n.body!==void 0?n.body:this.body,H=n.withCredentials??this.withCredentials,be=n.reportProgress??this.reportProgress,ut=n.headers||this.headers,ft=n.params||this.params,Ya=n.context??this.context;return n.setHeaders!==void 0&&(ut=Object.keys(n.setHeaders).reduce((Za,wr)=>Za.set(wr,n.setHeaders[wr]),ut)),n.setParams&&(ft=Object.keys(n.setParams).reduce((Za,wr)=>Za.set(wr,n.setParams[wr]),ft)),new t(e,i,k,{params:ft,headers:ut,context:Ya,reportProgress:be,responseType:r,withCredentials:H,transferCache:C,keepalive:o,cache:s,priority:a,timeout:I,mode:l,redirect:c,credentials:u,referrer:f,integrity:p,referrerPolicy:g})}},Xr=(function(t){return t[t.Sent=0]="Sent",t[t.UploadProgress=1]="UploadProgress",t[t.ResponseHeader=2]="ResponseHeader",t[t.DownloadProgress=3]="DownloadProgress",t[t.Response=4]="Response",t[t.User=5]="User",t})(Xr||{}),ea=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(n,e=200,i="OK"){this.headers=n.headers||new or,this.status=n.status!==void 0?n.status:e,this.statusText=n.statusText||i,this.url=n.url||null,this.redirected=n.redirected,this.responseType=n.responseType,this.ok=this.status>=200&&this.status<300}},mu=class t extends ea{constructor(n={}){super(n)}type=Xr.ResponseHeader;clone(n={}){return new t({headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0})}},Ks=class t extends ea{body;constructor(n={}){super(n),this.body=n.body!==void 0?n.body:null}type=Xr.Response;clone(n={}){return new t({body:n.body!==void 0?n.body:this.body,headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0,redirected:n.redirected??this.redirected,responseType:n.responseType??this.responseType})}},Jo=class extends ea{name="HttpErrorResponse";message;error;ok=!1;constructor(n){super(n,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${n.url||"(unknown url)"}`:this.message=`Http failure response for ${n.url||"(unknown url)"}: ${n.status} ${n.statusText}`,this.error=n.error||null}},qR=200,YR=204;var ZR=new _("");var QR=/^\)\]\}',?\n/;var Og=(()=>{class t{xhrFactory;tracingService=d(kn,{optional:!0});constructor(e){this.xhrFactory=e}maybePropagateTrace(e){return this.tracingService?.propagate?this.tracingService.propagate(e):e}handle(e){if(e.method==="JSONP")throw new M(-2800,!1);let i=this.xhrFactory;return $(null).pipe(et(()=>new ee(o=>{let a=i.build();if(a.open(e.method,e.urlWithParams),e.withCredentials&&(a.withCredentials=!0),e.headers.forEach((k,H)=>a.setRequestHeader(k,H.join(","))),e.headers.has(TC)||a.setRequestHeader(TC,GR),!e.headers.has(SC)){let k=e.detectContentTypeHeader();k!==null&&a.setRequestHeader(SC,k)}if(e.timeout&&(a.timeout=e.timeout),e.responseType){let k=e.responseType.toLowerCase();a.responseType=k!=="json"?k:"text"}let s=e.serializeBody(),l=null,c=()=>{if(l!==null)return l;let k=a.statusText||"OK",H=new or(a.getAllResponseHeaders()),be=a.responseURL||e.url;return l=new mu({headers:H,status:a.status,statusText:k,url:be}),l},u=this.maybePropagateTrace(()=>{let{headers:k,status:H,statusText:be,url:ut}=c(),ft=null;H!==YR&&(ft=typeof a.response>"u"?a.responseText:a.response),H===0&&(H=ft?qR:0);let Ya=H>=200&&H<300;if(e.responseType==="json"&&typeof ft=="string"){let Za=ft;ft=ft.replace(QR,"");try{ft=ft!==""?JSON.parse(ft):null}catch(wr){ft=Za,Ya&&(Ya=!1,ft={error:wr,text:ft})}}Ya?(o.next(new Ks({body:ft,headers:k,status:H,statusText:be,url:ut||void 0})),o.complete()):o.error(new Jo({error:ft,headers:k,status:H,statusText:be,url:ut||void 0}))}),f=this.maybePropagateTrace(k=>{let{url:H}=c(),be=new Jo({error:k,status:a.status||0,statusText:a.statusText||"Unknown Error",url:H||void 0});o.error(be)}),p=f;e.timeout&&(p=this.maybePropagateTrace(k=>{let{url:H}=c(),be=new Jo({error:new DOMException("Request timed out","TimeoutError"),status:a.status||0,statusText:a.statusText||"Request timeout",url:H||void 0});o.error(be)}));let g=!1,C=this.maybePropagateTrace(k=>{g||(o.next(c()),g=!0);let H={type:Xr.DownloadProgress,loaded:k.loaded};k.lengthComputable&&(H.total=k.total),e.responseType==="text"&&a.responseText&&(H.partialText=a.responseText),o.next(H)}),I=this.maybePropagateTrace(k=>{let H={type:Xr.UploadProgress,loaded:k.loaded};k.lengthComputable&&(H.total=k.total),o.next(H)});return a.addEventListener("load",u),a.addEventListener("error",f),a.addEventListener("timeout",p),a.addEventListener("abort",f),e.reportProgress&&(a.addEventListener("progress",C),s!==null&&a.upload&&a.upload.addEventListener("progress",I)),a.send(s),o.next({type:Xr.Sent}),()=>{a.removeEventListener("error",f),a.removeEventListener("abort",f),a.removeEventListener("load",u),a.removeEventListener("timeout",p),e.reportProgress&&(a.removeEventListener("progress",C),s!==null&&a.upload&&a.upload.removeEventListener("progress",I)),a.readyState!==a.DONE&&a.abort()}})))}static \u0275fac=function(i){return new(i||t)(P(Kr))};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function OC(t,n){return n(t)}function KR(t,n){return(e,i)=>n.intercept(e,{handle:r=>t(r,i)})}function XR(t,n,e){return(i,r)=>at(e,()=>n(i,o=>t(o,r)))}var pu=new _(""),Ng=new _("",{factory:()=>[]}),NC=new _(""),Pg=new _("",{factory:()=>!0});function JR(){let t=null;return(n,e)=>{t===null&&(t=(d(pu,{optional:!0})??[]).reduceRight(KR,OC));let i=d(jo);if(d(Pg)){let o=i.add();return t(n,e).pipe(Wi(o))}else return t(n,e)}}var Fg=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=P(Og),r},providedIn:"root"})}return t})();var hu=(()=>{class t{backend;injector;chain=null;pendingTasks=d(jo);contributeToStability=d(Pg);constructor(e,i){this.backend=e,this.injector=i}handle(e){if(this.chain===null){let i=Array.from(new Set([...this.injector.get(Ng),...this.injector.get(NC,[])]));this.chain=i.reduceRight((r,o)=>XR(r,o,this.injector),OC)}if(this.contributeToStability){let i=this.pendingTasks.add();return this.chain(e,r=>this.backend.handle(r)).pipe(Wi(i))}else return this.chain(e,i=>this.backend.handle(i))}static \u0275fac=function(i){return new(i||t)(P(Fg),P(Ce))};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Lg=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=P(hu),r},providedIn:"root"})}return t})();function Rg(t,n){return{body:n,headers:t.headers,context:t.context,observe:t.observe,params:t.params,reportProgress:t.reportProgress,responseType:t.responseType,withCredentials:t.withCredentials,credentials:t.credentials,transferCache:t.transferCache,timeout:t.timeout,keepalive:t.keepalive,priority:t.priority,cache:t.cache,mode:t.mode,redirect:t.redirect,integrity:t.integrity,referrer:t.referrer,referrerPolicy:t.referrerPolicy}}var Ot=(()=>{class t{handler;constructor(e){this.handler=e}request(e,i,r={}){let o;if(e instanceof Xo)o=e;else{let l;r.headers instanceof or?l=r.headers:l=new or(r.headers);let c;r.params&&(r.params instanceof zt?c=r.params:c=new zt({fromObject:r.params})),o=new Xo(e,i,r.body!==void 0?r.body:null,{headers:l,context:r.context,params:c,reportProgress:r.reportProgress,responseType:r.responseType||"json",withCredentials:r.withCredentials,transferCache:r.transferCache,keepalive:r.keepalive,priority:r.priority,cache:r.cache,mode:r.mode,redirect:r.redirect,credentials:r.credentials,referrer:r.referrer,referrerPolicy:r.referrerPolicy,integrity:r.integrity,timeout:r.timeout})}let a=$(o).pipe($i(l=>this.handler.handle(l)));if(e instanceof Xo||r.observe==="events")return a;let s=a.pipe(me(l=>l instanceof Ks));switch(r.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return s.pipe(te(l=>{if(l.body!==null&&!(l.body instanceof ArrayBuffer))throw new M(2806,!1);return l.body}));case"blob":return s.pipe(te(l=>{if(l.body!==null&&!(l.body instanceof Blob))throw new M(2807,!1);return l.body}));case"text":return s.pipe(te(l=>{if(l.body!==null&&typeof l.body!="string")throw new M(2808,!1);return l.body}));default:return s.pipe(te(l=>l.body))}case"response":return s;default:throw new M(2809,!1)}}delete(e,i={}){return this.request("DELETE",e,i)}get(e,i={}){return this.request("GET",e,i)}head(e,i={}){return this.request("HEAD",e,i)}jsonp(e,i){return this.request("JSONP",e,{params:new zt().append(i,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,i={}){return this.request("OPTIONS",e,i)}patch(e,i,r={}){return this.request("PATCH",e,Rg(r,i))}post(e,i,r={}){return this.request("POST",e,Rg(r,i))}put(e,i,r={}){return this.request("PUT",e,Rg(r,i))}static \u0275fac=function(i){return new(i||t)(P(Lg))};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var eO=new _("",{factory:()=>!0}),tO="XSRF-TOKEN",nO=new _("",{factory:()=>tO}),iO="X-XSRF-TOKEN",rO=new _("",{factory:()=>iO}),oO=(()=>{class t{cookieName=d(nO);doc=d(j);lastCookieString="";lastToken=null;parseCount=0;getToken(){let e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=Gs(e,this.cookieName),this.lastCookieString=e),this.lastToken}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),PC=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=P(oO),r},providedIn:"root"})}return t})();function aO(t,n){if(!d(eO)||t.method==="GET"||t.method==="HEAD")return n(t);try{let r=d(Si).href,{origin:o}=new URL(r),{origin:a}=new URL(t.url,o);if(o!==a)return n(t)}catch{return n(t)}let e=d(PC).getToken(),i=d(rO);return e!=null&&!t.headers.has(i)&&(t=t.clone({headers:t.headers.set(i,e)})),n(t)}var jg=(function(t){return t[t.Interceptors=0]="Interceptors",t[t.LegacyInterceptors=1]="LegacyInterceptors",t[t.CustomXsrfConfiguration=2]="CustomXsrfConfiguration",t[t.NoXsrfProtection=3]="NoXsrfProtection",t[t.JsonpSupport=4]="JsonpSupport",t[t.RequestsMadeViaParent=5]="RequestsMadeViaParent",t[t.Fetch=6]="Fetch",t})(jg||{});function sO(t,n){return{\u0275kind:t,\u0275providers:n}}function Bg(...t){let n=[Ot,hu,{provide:Lg,useExisting:hu},{provide:Fg,useFactory:()=>d(ZR,{optional:!0})??d(Og)},{provide:Ng,useValue:aO,multi:!0}];for(let e of t)n.push(...e.\u0275providers);return zn(n)}var kC=new _("");function Vg(){return sO(jg.LegacyInterceptors,[{provide:kC,useFactory:JR},{provide:Ng,useExisting:kC,multi:!0}])}var FC=(()=>{class t{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(i){return new(i||t)(P(j))};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Xs=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=P(cO),r},providedIn:"root"})}return t})(),cO=(()=>{class t extends Xs{_doc;constructor(e){super(),this._doc=e}sanitize(e,i){if(i==null)return null;switch(e){case xt.NONE:return i;case xt.HTML:return Zr(i,"HTML")?Tn(i):Op(this._doc,String(i)).toString();case xt.STYLE:return Zr(i,"Style")?Tn(i):i;case xt.SCRIPT:if(Zr(i,"Script"))return Tn(i);throw new M(5200,!1);case xt.URL:return Zr(i,"URL")?Tn(i):Rd(String(i));case xt.RESOURCE_URL:if(Zr(i,"ResourceURL"))return Tn(i);throw new M(5201,!1);default:throw new M(5202,!1)}}bypassSecurityTrustHtml(e){return Sp(e)}bypassSecurityTrustStyle(e){return Tp(e)}bypassSecurityTrustScript(e){return kp(e)}bypassSecurityTrustUrl(e){return Ap(e)}bypassSecurityTrustResourceUrl(e){return Rp(e)}static \u0275fac=function(i){return new(i||t)(P(j))};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var ae="primary",dl=Symbol("RouteTitle"),Wg=class{params;constructor(n){this.params=n||{}}has(n){return Object.prototype.hasOwnProperty.call(this.params,n)}get(n){if(this.has(n)){let e=this.params[n];return Array.isArray(e)?e[0]:e}return null}getAll(n){if(this.has(n)){let e=this.params[n];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function eo(t){return new Wg(t)}function Hg(t,n,e){for(let i=0;i<t.length;i++){let r=t[i],o=n[i];if(r[0]===":")e[r.substring(1)]=o;else if(r!==o.path)return!1}return!0}function WC(t,n,e){let i=e.path.split("/"),r=i.indexOf("**");if(r===-1){if(i.length>t.length||e.pathMatch==="full"&&(n.hasChildren()||i.length<t.length))return null;let l={},c=t.slice(0,i.length);return Hg(i,c,l)?{consumed:c,posParams:l}:null}if(r!==i.lastIndexOf("**"))return null;let o=i.slice(0,r),a=i.slice(r+1);if(o.length+a.length>t.length||e.pathMatch==="full"&&n.hasChildren()&&e.path!=="**")return null;let s={};return!Hg(o,t.slice(0,o.length),s)||!Hg(a,t.slice(t.length-a.length),s)?null:{consumed:t,posParams:s}}function wu(t){return new Promise((n,e)=>{t.pipe(gi()).subscribe({next:i=>n(i),error:i=>e(i)})})}function dO(t,n){if(t.length!==n.length)return!1;for(let e=0;e<t.length;++e)if(!ai(t[e],n[e]))return!1;return!0}function ai(t,n){let e=t?Gg(t):void 0,i=n?Gg(n):void 0;if(!e||!i||e.length!=i.length)return!1;let r;for(let o=0;o<e.length;o++)if(r=e[o],!GC(t[r],n[r]))return!1;return!0}function Gg(t){return[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function GC(t,n){if(Array.isArray(t)&&Array.isArray(n)){if(t.length!==n.length)return!1;let e=[...t].sort(),i=[...n].sort();return e.every((r,o)=>i[o]===r)}else return t===n}function uO(t){return t.length>0?t[t.length-1]:null}function no(t){return is(t)?t:Ii(t)?Te(Promise.resolve(t)):$(t)}function qC(t){return is(t)?wu(t):Promise.resolve(t)}var fO={exact:QC,subset:KC},YC={exact:mO,subset:hO,ignored:()=>!0},ZC={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},qg={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};function jC(t,n,e){return fO[e.paths](t.root,n.root,e.matrixParams)&&YC[e.queryParams](t.queryParams,n.queryParams)&&!(e.fragment==="exact"&&t.fragment!==n.fragment)}function mO(t,n){return ai(t,n)}function QC(t,n,e){if(!Jr(t.segments,n.segments)||!_u(t.segments,n.segments,e)||t.numberOfChildren!==n.numberOfChildren)return!1;for(let i in n.children)if(!t.children[i]||!QC(t.children[i],n.children[i],e))return!1;return!0}function hO(t,n){return Object.keys(n).length<=Object.keys(t).length&&Object.keys(n).every(e=>GC(t[e],n[e]))}function KC(t,n,e){return XC(t,n,n.segments,e)}function XC(t,n,e,i){if(t.segments.length>e.length){let r=t.segments.slice(0,e.length);return!(!Jr(r,e)||n.hasChildren()||!_u(r,e,i))}else if(t.segments.length===e.length){if(!Jr(t.segments,e)||!_u(t.segments,e,i))return!1;for(let r in n.children)if(!t.children[r]||!KC(t.children[r],n.children[r],i))return!1;return!0}else{let r=e.slice(0,t.segments.length),o=e.slice(t.segments.length);return!Jr(t.segments,r)||!_u(t.segments,r,i)||!t.children[ae]?!1:XC(t.children[ae],n,o,i)}}function _u(t,n,e){return n.every((i,r)=>YC[e](t[r].parameters,i.parameters))}var vn=class{root;queryParams;fragment;_queryParamMap;constructor(n=new ye([],{}),e={},i=null){this.root=n,this.queryParams=e,this.fragment=i}get queryParamMap(){return this._queryParamMap??=eo(this.queryParams),this._queryParamMap}toString(){return vO.serialize(this)}},ye=class{segments;children;parent=null;constructor(n,e){this.segments=n,this.children=e,Object.values(e).forEach(i=>i.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return bu(this)}},ar=class{path;parameters;_parameterMap;constructor(n,e){this.path=n,this.parameters=e}get parameterMap(){return this._parameterMap??=eo(this.parameters),this._parameterMap}toString(){return eD(this)}};function pO(t,n){return Jr(t,n)&&t.every((e,i)=>ai(e.parameters,n[i].parameters))}function Jr(t,n){return t.length!==n.length?!1:t.every((e,i)=>e.path===n[i].path)}function gO(t,n){let e=[];return Object.entries(t.children).forEach(([i,r])=>{i===ae&&(e=e.concat(n(r,i)))}),Object.entries(t.children).forEach(([i,r])=>{i!==ae&&(e=e.concat(n(r,i)))}),e}var io=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:()=>new Ai,providedIn:"root"})}return t})(),Ai=class{parse(n){let e=new Zg(n);return new vn(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(n){let e=`/${Js(n.root,!0)}`,i=yO(n.queryParams),r=typeof n.fragment=="string"?`#${_O(n.fragment)}`:"";return`${e}${i}${r}`}},vO=new Ai;function bu(t){return t.segments.map(n=>eD(n)).join("/")}function Js(t,n){if(!t.hasChildren())return bu(t);if(n){let e=t.children[ae]?Js(t.children[ae],!1):"",i=[];return Object.entries(t.children).forEach(([r,o])=>{r!==ae&&i.push(`${r}:${Js(o,!1)}`)}),i.length>0?`${e}(${i.join("//")})`:e}else{let e=gO(t,(i,r)=>r===ae?[Js(t.children[ae],!1)]:[`${r}:${Js(i,!1)}`]);return Object.keys(t.children).length===1&&t.children[ae]!=null?`${bu(t)}/${e[0]}`:`${bu(t)}/(${e.join("//")})`}}function JC(t){return encodeURIComponent(t).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function gu(t){return JC(t).replace(/%3B/gi,";")}function _O(t){return encodeURI(t)}function Yg(t){return JC(t).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function yu(t){return decodeURIComponent(t)}function BC(t){return yu(t.replace(/\+/g,"%20"))}function eD(t){return`${Yg(t.path)}${bO(t.parameters)}`}function bO(t){return Object.entries(t).map(([n,e])=>`;${Yg(n)}=${Yg(e)}`).join("")}function yO(t){let n=Object.entries(t).map(([e,i])=>Array.isArray(i)?i.map(r=>`${gu(e)}=${gu(r)}`).join("&"):`${gu(e)}=${gu(i)}`).filter(e=>e);return n.length?`?${n.join("&")}`:""}var wO=/^[^\/()?;#]+/;function Ug(t){let n=t.match(wO);return n?n[0]:""}var CO=/^[^\/()?;=#]+/;function DO(t){let n=t.match(CO);return n?n[0]:""}var xO=/^[^=?&#]+/;function EO(t){let n=t.match(xO);return n?n[0]:""}var IO=/^[^&#]+/;function MO(t){let n=t.match(IO);return n?n[0]:""}var Zg=class{url;remaining;constructor(n){this.url=n,this.remaining=n}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new ye([],{}):new ye([],this.parseChildren())}parseQueryParams(){let n={};if(this.consumeOptional("?"))do this.parseQueryParam(n);while(this.consumeOptional("&"));return n}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(n=0){if(n>50)throw new M(4010,!1);if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let i={};this.peekStartsWith("/(")&&(this.capture("/"),i=this.parseParens(!0,n));let r={};return this.peekStartsWith("(")&&(r=this.parseParens(!1,n)),(e.length>0||Object.keys(i).length>0)&&(r[ae]=new ye(e,i)),r}parseSegment(){let n=Ug(this.remaining);if(n===""&&this.peekStartsWith(";"))throw new M(4009,!1);return this.capture(n),new ar(yu(n),this.parseMatrixParams())}parseMatrixParams(){let n={};for(;this.consumeOptional(";");)this.parseParam(n);return n}parseParam(n){let e=DO(this.remaining);if(!e)return;this.capture(e);let i="";if(this.consumeOptional("=")){let r=Ug(this.remaining);r&&(i=r,this.capture(i))}n[yu(e)]=yu(i)}parseQueryParam(n){let e=EO(this.remaining);if(!e)return;this.capture(e);let i="";if(this.consumeOptional("=")){let a=MO(this.remaining);a&&(i=a,this.capture(i))}let r=BC(e),o=BC(i);if(n.hasOwnProperty(r)){let a=n[r];Array.isArray(a)||(a=[a],n[r]=a),a.push(o)}else n[r]=o}parseParens(n,e){let i={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let r=Ug(this.remaining),o=this.remaining[r.length];if(o!=="/"&&o!==")"&&o!==";")throw new M(4010,!1);let a;r.indexOf(":")>-1?(a=r.slice(0,r.indexOf(":")),this.capture(a),this.capture(":")):n&&(a=ae);let s=this.parseChildren(e+1);i[a??ae]=Object.keys(s).length===1&&s[ae]?s[ae]:new ye([],s),this.consumeOptional("//")}return i}peekStartsWith(n){return this.remaining.startsWith(n)}consumeOptional(n){return this.peekStartsWith(n)?(this.remaining=this.remaining.substring(n.length),!0):!1}capture(n){if(!this.consumeOptional(n))throw new M(4011,!1)}};function tD(t){return t.segments.length>0?new ye([],{[ae]:t}):t}function nD(t){let n={};for(let[i,r]of Object.entries(t.children)){let o=nD(r);if(i===ae&&o.segments.length===0&&o.hasChildren())for(let[a,s]of Object.entries(o.children))n[a]=s;else(o.segments.length>0||o.hasChildren())&&(n[i]=o)}let e=new ye(t.segments,n);return SO(e)}function SO(t){if(t.numberOfChildren===1&&t.children[ae]){let n=t.children[ae];return new ye(t.segments.concat(n.segments),n.children)}return t}function oa(t){return t instanceof vn}function iD(t,n,e=null,i=null,r=new Ai){let o=rD(t);return oD(o,n,e,i,r)}function rD(t){let n;function e(o){let a={};for(let l of o.children){let c=e(l);a[l.outlet]=c}let s=new ye(o.url,a);return o===t&&(n=s),s}let i=e(t.root),r=tD(i);return n??r}function oD(t,n,e,i,r){let o=t;for(;o.parent;)o=o.parent;if(n.length===0)return zg(o,o,o,e,i,r);let a=TO(n);if(a.toRoot())return zg(o,o,new ye([],{}),e,i,r);let s=kO(a,o,t),l=s.processChildren?tl(s.segmentGroup,s.index,a.commands):sD(s.segmentGroup,s.index,a.commands);return zg(o,s.segmentGroup,l,e,i,r)}function Cu(t){return typeof t=="object"&&t!=null&&!t.outlets&&!t.segmentPath}function il(t){return typeof t=="object"&&t!=null&&t.outlets}function VC(t,n,e){t||="\u0275";let i=new vn;return i.queryParams={[t]:n},e.parse(e.serialize(i)).queryParams[t]}function zg(t,n,e,i,r,o){let a={};for(let[c,u]of Object.entries(i??{}))a[c]=Array.isArray(u)?u.map(f=>VC(c,f,o)):VC(c,u,o);let s;t===n?s=e:s=aD(t,n,e);let l=tD(nD(s));return new vn(l,a,r)}function aD(t,n,e){let i={};return Object.entries(t.children).forEach(([r,o])=>{o===n?i[r]=e:i[r]=aD(o,n,e)}),new ye(t.segments,i)}var Du=class{isAbsolute;numberOfDoubleDots;commands;constructor(n,e,i){if(this.isAbsolute=n,this.numberOfDoubleDots=e,this.commands=i,n&&i.length>0&&Cu(i[0]))throw new M(4003,!1);let r=i.find(il);if(r&&r!==uO(i))throw new M(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function TO(t){if(typeof t[0]=="string"&&t.length===1&&t[0]==="/")return new Du(!0,0,t);let n=0,e=!1,i=t.reduce((r,o,a)=>{if(typeof o=="object"&&o!=null){if(o.outlets){let s={};return Object.entries(o.outlets).forEach(([l,c])=>{s[l]=typeof c=="string"?c.split("/"):c}),[...r,{outlets:s}]}if(o.segmentPath)return[...r,o.segmentPath]}return typeof o!="string"?[...r,o]:a===0?(o.split("/").forEach((s,l)=>{l==0&&s==="."||(l==0&&s===""?e=!0:s===".."?n++:s!=""&&r.push(s))}),r):[...r,o]},[]);return new Du(e,n,i)}var na=class{segmentGroup;processChildren;index;constructor(n,e,i){this.segmentGroup=n,this.processChildren=e,this.index=i}};function kO(t,n,e){if(t.isAbsolute)return new na(n,!0,0);if(!e)return new na(n,!1,NaN);if(e.parent===null)return new na(e,!0,0);let i=Cu(t.commands[0])?0:1,r=e.segments.length-1+i;return AO(e,r,t.numberOfDoubleDots)}function AO(t,n,e){let i=t,r=n,o=e;for(;o>r;){if(o-=r,i=i.parent,!i)throw new M(4005,!1);r=i.segments.length}return new na(i,!1,r-o)}function RO(t){return il(t[0])?t[0].outlets:{[ae]:t}}function sD(t,n,e){if(t??=new ye([],{}),t.segments.length===0&&t.hasChildren())return tl(t,n,e);let i=OO(t,n,e),r=e.slice(i.commandIndex);if(i.match&&i.pathIndex<t.segments.length){let o=new ye(t.segments.slice(0,i.pathIndex),{});return o.children[ae]=new ye(t.segments.slice(i.pathIndex),t.children),tl(o,0,r)}else return i.match&&r.length===0?new ye(t.segments,{}):i.match&&!t.hasChildren()?Qg(t,n,e):i.match?tl(t,0,r):Qg(t,n,e)}function tl(t,n,e){if(e.length===0)return new ye(t.segments,{});{let i=RO(e),r={};if(Object.keys(i).some(o=>o!==ae)&&t.children[ae]&&t.numberOfChildren===1&&t.children[ae].segments.length===0){let o=tl(t.children[ae],n,e);return new ye(t.segments,o.children)}return Object.entries(i).forEach(([o,a])=>{typeof a=="string"&&(a=[a]),a!==null&&(r[o]=sD(t.children[o],n,a))}),Object.entries(t.children).forEach(([o,a])=>{i[o]===void 0&&(r[o]=a)}),new ye(t.segments,r)}}function OO(t,n,e){let i=0,r=n,o={match:!1,pathIndex:0,commandIndex:0};for(;r<t.segments.length;){if(i>=e.length)return o;let a=t.segments[r],s=e[i];if(il(s))break;let l=`${s}`,c=i<e.length-1?e[i+1]:null;if(r>0&&l===void 0)break;if(l&&c&&typeof c=="object"&&c.outlets===void 0){if(!UC(l,c,a))return o;i+=2}else{if(!UC(l,{},a))return o;i++}r++}return{match:!0,pathIndex:r,commandIndex:i}}function Qg(t,n,e){let i=t.segments.slice(0,n),r=0;for(;r<e.length;){let o=e[r];if(il(o)){let l=NO(o.outlets);return new ye(i,l)}if(r===0&&Cu(e[0])){let l=t.segments[n];i.push(new ar(l.path,HC(e[0]))),r++;continue}let a=il(o)?o.outlets[ae]:`${o}`,s=r<e.length-1?e[r+1]:null;a&&s&&Cu(s)?(i.push(new ar(a,HC(s))),r+=2):(i.push(new ar(a,{})),r++)}return new ye(i,{})}function NO(t){let n={};return Object.entries(t).forEach(([e,i])=>{typeof i=="string"&&(i=[i]),i!==null&&(n[e]=Qg(new ye([],{}),0,i))}),n}function HC(t){let n={};return Object.entries(t).forEach(([e,i])=>n[e]=`${i}`),n}function UC(t,n,e){return t==e.path&&ai(n,e.parameters)}var ia="imperative",ct=(function(t){return t[t.NavigationStart=0]="NavigationStart",t[t.NavigationEnd=1]="NavigationEnd",t[t.NavigationCancel=2]="NavigationCancel",t[t.NavigationError=3]="NavigationError",t[t.RoutesRecognized=4]="RoutesRecognized",t[t.ResolveStart=5]="ResolveStart",t[t.ResolveEnd=6]="ResolveEnd",t[t.GuardsCheckStart=7]="GuardsCheckStart",t[t.GuardsCheckEnd=8]="GuardsCheckEnd",t[t.RouteConfigLoadStart=9]="RouteConfigLoadStart",t[t.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",t[t.ChildActivationStart=11]="ChildActivationStart",t[t.ChildActivationEnd=12]="ChildActivationEnd",t[t.ActivationStart=13]="ActivationStart",t[t.ActivationEnd=14]="ActivationEnd",t[t.Scroll=15]="Scroll",t[t.NavigationSkipped=16]="NavigationSkipped",t})(ct||{}),en=class{id;url;constructor(n,e){this.id=n,this.url=e}},sr=class extends en{type=ct.NavigationStart;navigationTrigger;restoredState;constructor(n,e,i="imperative",r=null){super(n,e),this.navigationTrigger=i,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},Nn=class extends en{urlAfterRedirects;type=ct.NavigationEnd;constructor(n,e,i){super(n,e),this.urlAfterRedirects=i}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},Nt=(function(t){return t[t.Redirect=0]="Redirect",t[t.SupersededByNewNavigation=1]="SupersededByNewNavigation",t[t.NoDataFromResolver=2]="NoDataFromResolver",t[t.GuardRejected=3]="GuardRejected",t[t.Aborted=4]="Aborted",t})(Nt||{}),aa=(function(t){return t[t.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",t[t.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",t})(aa||{}),gn=class extends en{reason;code;type=ct.NavigationCancel;constructor(n,e,i,r){super(n,e),this.reason=i,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function lD(t){return t instanceof gn&&(t.code===Nt.Redirect||t.code===Nt.SupersededByNewNavigation)}var si=class extends en{reason;code;type=ct.NavigationSkipped;constructor(n,e,i,r){super(n,e),this.reason=i,this.code=r}},to=class extends en{error;target;type=ct.NavigationError;constructor(n,e,i,r){super(n,e),this.error=i,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},rl=class extends en{urlAfterRedirects;state;type=ct.RoutesRecognized;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},xu=class extends en{urlAfterRedirects;state;type=ct.GuardsCheckStart;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Eu=class extends en{urlAfterRedirects;state;shouldActivate;type=ct.GuardsCheckEnd;constructor(n,e,i,r,o){super(n,e),this.urlAfterRedirects=i,this.state=r,this.shouldActivate=o}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},Iu=class extends en{urlAfterRedirects;state;type=ct.ResolveStart;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Mu=class extends en{urlAfterRedirects;state;type=ct.ResolveEnd;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Su=class{route;type=ct.RouteConfigLoadStart;constructor(n){this.route=n}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},Tu=class{route;type=ct.RouteConfigLoadEnd;constructor(n){this.route=n}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},ku=class{snapshot;type=ct.ChildActivationStart;constructor(n){this.snapshot=n}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Au=class{snapshot;type=ct.ChildActivationEnd;constructor(n){this.snapshot=n}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Ru=class{snapshot;type=ct.ActivationStart;constructor(n){this.snapshot=n}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Ou=class{snapshot;type=ct.ActivationEnd;constructor(n){this.snapshot=n}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},sa=class{routerEvent;position;anchor;scrollBehavior;type=ct.Scroll;constructor(n,e,i,r){this.routerEvent=n,this.position=e,this.anchor=i,this.scrollBehavior=r}toString(){let n=this.position?`${this.position[0]}, ${this.position[1]}`:null;return`Scroll(anchor: '${this.anchor}', position: '${n}')`}},la=class{},ol=class{},ca=class{url;navigationBehaviorOptions;constructor(n,e){this.url=n,this.navigationBehaviorOptions=e}};function PO(t){return!(t instanceof la)&&!(t instanceof ca)&&!(t instanceof ol)}var Nu=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(n){this.rootInjector=n,this.children=new ro(this.rootInjector)}},ro=(()=>{class t{rootInjector;contexts=new Map;constructor(e){this.rootInjector=e}onChildOutletCreated(e,i){let r=this.getOrCreateContext(e);r.outlet=i,this.contexts.set(e,r)}onChildOutletDestroyed(e){let i=this.getContext(e);i&&(i.outlet=null,i.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let i=this.getContext(e);return i||(i=new Nu(this.rootInjector),this.contexts.set(e,i)),i}getContext(e){return this.contexts.get(e)||null}static \u0275fac=function(i){return new(i||t)(P(Ce))};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Pu=class{_root;constructor(n){this._root=n}get root(){return this._root.value}parent(n){let e=this.pathFromRoot(n);return e.length>1?e[e.length-2]:null}children(n){let e=Kg(n,this._root);return e?e.children.map(i=>i.value):[]}firstChild(n){let e=Kg(n,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(n){let e=Xg(n,this._root);return e.length<2?[]:e[e.length-2].children.map(r=>r.value).filter(r=>r!==n)}pathFromRoot(n){return Xg(n,this._root).map(e=>e.value)}};function Kg(t,n){if(t===n.value)return n;for(let e of n.children){let i=Kg(t,e);if(i)return i}return null}function Xg(t,n){if(t===n.value)return[n];for(let e of n.children){let i=Xg(t,e);if(i.length)return i.unshift(n),i}return[]}var Jt=class{value;children;constructor(n,e){this.value=n,this.children=e}toString(){return`TreeNode(${this.value})`}};function ta(t){let n={};return t&&t.children.forEach(e=>n[e.value.outlet]=e),n}var al=class extends Pu{snapshot;constructor(n,e){super(n),this.snapshot=e,sv(this,n)}toString(){return this.snapshot.toString()}};function cD(t,n){let e=FO(t,n),i=new Je([new ar("",{})]),r=new Je({}),o=new Je({}),a=new Je({}),s=new Je(""),l=new Ri(i,r,a,s,o,ae,t,e.root);return l.snapshot=e.root,new al(new Jt(l,[]),e)}function FO(t,n){let e={},i={},r={},a=new da([],e,r,"",i,ae,t,null,{},n);return new sl("",new Jt(a,[]))}var Ri=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(n,e,i,r,o,a,s,l){this.urlSubject=n,this.paramsSubject=e,this.queryParamsSubject=i,this.fragmentSubject=r,this.dataSubject=o,this.outlet=a,this.component=s,this._futureSnapshot=l,this.title=this.dataSubject?.pipe(te(c=>c[dl]))??$(void 0),this.url=n,this.params=e,this.queryParams=i,this.fragment=r,this.data=o}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(te(n=>eo(n))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(te(n=>eo(n))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function av(t,n,e="emptyOnly"){let i,{routeConfig:r}=t;return n!==null&&(e==="always"||r?.path===""||!n.component&&!n.routeConfig?.loadComponent)?i={params:y(y({},n.params),t.params),data:y(y({},n.data),t.data),resolve:y(y(y(y({},t.data),n.data),r?.data),t._resolvedData)}:i={params:y({},t.params),data:y({},t.data),resolve:y(y({},t.data),t._resolvedData??{})},r&&uD(r)&&(i.resolve[dl]=r.title),i}var da=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;get title(){return this.data?.[dl]}constructor(n,e,i,r,o,a,s,l,c,u){this.url=n,this.params=e,this.queryParams=i,this.fragment=r,this.data=o,this.outlet=a,this.component=s,this.routeConfig=l,this._resolve=c,this._environmentInjector=u}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=eo(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=eo(this.queryParams),this._queryParamMap}toString(){let n=this.url.map(i=>i.toString()).join("/"),e=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${n}', path:'${e}')`}},sl=class extends Pu{url;constructor(n,e){super(e),this.url=n,sv(this,e)}toString(){return dD(this._root)}};function sv(t,n){n.value._routerState=t,n.children.forEach(e=>sv(t,e))}function dD(t){let n=t.children.length>0?` { ${t.children.map(dD).join(", ")} } `:"";return`${t.value}${n}`}function $g(t){if(t.snapshot){let n=t.snapshot,e=t._futureSnapshot;t.snapshot=e,ai(n.queryParams,e.queryParams)||t.queryParamsSubject.next(e.queryParams),n.fragment!==e.fragment&&t.fragmentSubject.next(e.fragment),ai(n.params,e.params)||t.paramsSubject.next(e.params),dO(n.url,e.url)||t.urlSubject.next(e.url),ai(n.data,e.data)||t.dataSubject.next(e.data)}else t.snapshot=t._futureSnapshot,t.dataSubject.next(t._futureSnapshot.data)}function Jg(t,n){let e=ai(t.params,n.params)&&pO(t.url,n.url),i=!t.parent!=!n.parent;return e&&!i&&(!t.parent||Jg(t.parent,n.parent))}function uD(t){return typeof t.title=="string"||t.title===null}var fD=new _(""),ul=(()=>{class t{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=ae;activateEvents=new A;deactivateEvents=new A;attachEvents=new A;detachEvents=new A;routerOutletData=Mi();parentContexts=d(ro);location=d(ht);changeDetector=d(Ne);inputBinder=d(fl,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(e){if(e.name){let{firstChange:i,previousValue:r}=e.name;if(i)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new M(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new M(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new M(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,i){this.activated=e,this._activatedRoute=i,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,i){if(this.isActivated)throw new M(4013,!1);this._activatedRoute=e;let r=this.location,a=e.snapshot.component,s=this.parentContexts.getOrCreateContext(this.name).children,l=new ev(e,s,r.injector,this.routerOutletData);this.activated=r.createComponent(a,{index:r.length,injector:l,environmentInjector:i}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(i){return new(i||t)};static \u0275dir=S({type:t,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[Ue]})}return t})(),ev=class{route;childContexts;parent;outletData;constructor(n,e,i,r){this.route=n,this.childContexts=e,this.parent=i,this.outletData=r}get(n,e){return n===Ri?this.route:n===ro?this.childContexts:n===fD?this.outletData:this.parent.get(n,e)}},fl=new _(""),lv=(()=>{class t{outletDataSubscriptions=new Map;bindActivatedRouteToOutletComponent(e){this.unsubscribeFromRouteData(e),this.subscribeToRouteData(e)}unsubscribeFromRouteData(e){this.outletDataSubscriptions.get(e)?.unsubscribe(),this.outletDataSubscriptions.delete(e)}subscribeToRouteData(e){let{activatedRoute:i}=e,r=Io([i.queryParams,i.params,i.data]).pipe(et(([o,a,s],l)=>(s=y(y(y({},o),a),s),l===0?$(s):Promise.resolve(s)))).subscribe(o=>{if(!e.isActivated||!e.activatedComponentRef||e.activatedRoute!==i||i.component===null){this.unsubscribeFromRouteData(e);return}let a=uC(i.component);if(!a){this.unsubscribeFromRouteData(e);return}for(let{templateName:s}of a.inputs)e.activatedComponentRef.setInput(s,o[s])});this.outletDataSubscriptions.set(e,r)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})(),cv=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=x({type:t,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(i,r){i&1&&z(0,"router-outlet")},dependencies:[ul],encapsulation:2})}return t})();function dv(t){let n=t.children&&t.children.map(dv),e=n?K(y({},t),{children:n}):y({},t);return!e.component&&!e.loadComponent&&(n||e.loadChildren)&&e.outlet&&e.outlet!==ae&&(e.component=cv),e}function LO(t,n,e){let i=ll(t,n._root,e?e._root:void 0);return new al(i,n)}function ll(t,n,e){if(e&&t.shouldReuseRoute(n.value,e.value.snapshot)){let i=e.value;i._futureSnapshot=n.value;let r=jO(t,n,e);return new Jt(i,r)}else{if(t.shouldAttach(n.value)){let o=t.retrieve(n.value);if(o!==null){let a=o.route;return a.value._futureSnapshot=n.value,a.children=n.children.map(s=>ll(t,s)),a}}let i=BO(n.value),r=n.children.map(o=>ll(t,o));return new Jt(i,r)}}function jO(t,n,e){return n.children.map(i=>{for(let r of e.children)if(t.shouldReuseRoute(i.value,r.value.snapshot))return ll(t,i,r);return ll(t,i)})}function BO(t){return new Ri(new Je(t.url),new Je(t.params),new Je(t.queryParams),new Je(t.fragment),new Je(t.data),t.outlet,t.component,t)}var ua=class{redirectTo;navigationBehaviorOptions;constructor(n,e){this.redirectTo=n,this.navigationBehaviorOptions=e}},mD="ngNavigationCancelingError";function Fu(t,n){let{redirectTo:e,navigationBehaviorOptions:i}=oa(n)?{redirectTo:n,navigationBehaviorOptions:void 0}:n,r=hD(!1,Nt.Redirect);return r.url=e,r.navigationBehaviorOptions=i,r}function hD(t,n){let e=new Error(`NavigationCancelingError: ${t||""}`);return e[mD]=!0,e.cancellationCode=n,e}function VO(t){return pD(t)&&oa(t.url)}function pD(t){return!!t&&t[mD]}var tv=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(n,e,i,r,o){this.routeReuseStrategy=n,this.futureState=e,this.currState=i,this.forwardEvent=r,this.inputBindingEnabled=o}activate(n){let e=this.futureState._root,i=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,i,n),$g(this.futureState.root),this.activateChildRoutes(e,i,n)}deactivateChildRoutes(n,e,i){let r=ta(e);n.children.forEach(o=>{let a=o.value.outlet;this.deactivateRoutes(o,r[a],i),delete r[a]}),Object.values(r).forEach(o=>{this.deactivateRouteAndItsChildren(o,i)})}deactivateRoutes(n,e,i){let r=n.value,o=e?e.value:null;if(r===o)if(r.component){let a=i.getContext(r.outlet);a&&this.deactivateChildRoutes(n,e,a.children)}else this.deactivateChildRoutes(n,e,i);else o&&this.deactivateRouteAndItsChildren(e,i)}deactivateRouteAndItsChildren(n,e){n.value.component&&this.routeReuseStrategy.shouldDetach(n.value.snapshot)?this.detachAndStoreRouteSubtree(n,e):this.deactivateRouteAndOutlet(n,e)}detachAndStoreRouteSubtree(n,e){let i=e.getContext(n.value.outlet),r=i&&n.value.component?i.children:e,o=ta(n);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,r);if(i&&i.outlet){let a=i.outlet.detach(),s=i.children.onOutletDeactivated();this.routeReuseStrategy.store(n.value.snapshot,{componentRef:a,route:n,contexts:s})}}deactivateRouteAndOutlet(n,e){let i=e.getContext(n.value.outlet),r=i&&n.value.component?i.children:e,o=ta(n);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,r);i&&(i.outlet&&(i.outlet.deactivate(),i.children.onOutletDeactivated()),i.attachRef=null,i.route=null)}activateChildRoutes(n,e,i){let r=ta(e);n.children.forEach(o=>{this.activateRoutes(o,r[o.value.outlet],i),this.forwardEvent(new Ou(o.value.snapshot))}),n.children.length&&this.forwardEvent(new Au(n.value.snapshot))}activateRoutes(n,e,i){let r=n.value,o=e?e.value:null;if($g(r),r===o)if(r.component){let a=i.getOrCreateContext(r.outlet);this.activateChildRoutes(n,e,a.children)}else this.activateChildRoutes(n,e,i);else if(r.component){let a=i.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let s=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),a.children.onOutletReAttached(s.contexts),a.attachRef=s.componentRef,a.route=s.route.value,a.outlet&&a.outlet.attach(s.componentRef,s.route.value),$g(s.route.value),this.activateChildRoutes(n,null,a.children)}else a.attachRef=null,a.route=r,a.outlet&&a.outlet.activateWith(r,a.injector),this.activateChildRoutes(n,null,a.children)}else this.activateChildRoutes(n,null,i)}},Lu=class{path;route;constructor(n){this.path=n,this.route=this.path[this.path.length-1]}},ra=class{component;route;constructor(n,e){this.component=n,this.route=e}};function HO(t,n,e){let i=t._root,r=n?n._root:null;return el(i,r,e,[i.value])}function UO(t){let n=t.routeConfig?t.routeConfig.canActivateChild:null;return!n||n.length===0?null:{node:t,guards:n}}function ma(t,n){let e=Symbol(),i=n.get(t,e);return i===e?typeof t=="function"&&!Vm(t)?t:n.get(t):i}function el(t,n,e,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=ta(n);return t.children.forEach(a=>{zO(a,o[a.value.outlet],e,i.concat([a.value]),r),delete o[a.value.outlet]}),Object.entries(o).forEach(([a,s])=>nl(s,e.getContext(a),r)),r}function zO(t,n,e,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=t.value,a=n?n.value:null,s=e?e.getContext(t.value.outlet):null;if(a&&o.routeConfig===a.routeConfig){let l=$O(a,o,o.routeConfig.runGuardsAndResolvers);l?r.canActivateChecks.push(new Lu(i)):(o.data=a.data,o._resolvedData=a._resolvedData),o.component?el(t,n,s?s.children:null,i,r):el(t,n,e,i,r),l&&s&&s.outlet&&s.outlet.isActivated&&r.canDeactivateChecks.push(new ra(s.outlet.component,a))}else a&&nl(n,s,r),r.canActivateChecks.push(new Lu(i)),o.component?el(t,null,s?s.children:null,i,r):el(t,null,e,i,r);return r}function $O(t,n,e){if(typeof e=="function")return at(n._environmentInjector,()=>e(t,n));switch(e){case"pathParamsChange":return!Jr(t.url,n.url);case"pathParamsOrQueryParamsChange":return!Jr(t.url,n.url)||!ai(t.queryParams,n.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!Jg(t,n)||!ai(t.queryParams,n.queryParams);default:return!Jg(t,n)}}function nl(t,n,e){let i=ta(t),r=t.value;Object.entries(i).forEach(([o,a])=>{r.component?n?nl(a,n.children.getContext(o),e):nl(a,null,e):nl(a,n,e)}),r.component?n&&n.outlet&&n.outlet.isActivated?e.canDeactivateChecks.push(new ra(n.outlet.component,r)):e.canDeactivateChecks.push(new ra(null,r)):e.canDeactivateChecks.push(new ra(null,r))}function ml(t){return typeof t=="function"}function WO(t){return typeof t=="boolean"}function GO(t){return t&&ml(t.canLoad)}function qO(t){return t&&ml(t.canActivate)}function YO(t){return t&&ml(t.canActivateChild)}function ZO(t){return t&&ml(t.canDeactivate)}function QO(t){return t&&ml(t.canMatch)}function gD(t){return t instanceof kr||t?.name==="EmptyError"}var vu=Symbol("INITIAL_VALUE");function fa(){return et(t=>Io(t.map(n=>n.pipe(Ye(1),rt(vu)))).pipe(te(n=>{for(let e of n)if(e!==!0){if(e===vu)return vu;if(e===!1||KO(e))return e}return!0}),me(n=>n!==vu),Ye(1)))}function KO(t){return oa(t)||t instanceof ua}function vD(t){return t.aborted?$(void 0).pipe(Ye(1)):new ee(n=>{let e=()=>{n.next(),n.complete()};return t.addEventListener("abort",e),()=>t.removeEventListener("abort",e)})}function _D(t){return pe(vD(t))}function XO(t){return wt(n=>{let{targetSnapshot:e,currentSnapshot:i,guards:{canActivateChecks:r,canDeactivateChecks:o}}=n;return o.length===0&&r.length===0?$(K(y({},n),{guardsResult:!0})):JO(o,e,i).pipe(wt(a=>a&&WO(a)?eN(e,r,t):$(a)),te(a=>K(y({},n),{guardsResult:a})))})}function JO(t,n,e){return Te(t).pipe(wt(i=>oN(i.component,i.route,e,n)),gi(i=>i!==!0,!0))}function eN(t,n,e){return Te(n).pipe($i(i=>Ui(nN(i.route.parent,e),tN(i.route,e),rN(t,i.path),iN(t,i.route))),gi(i=>i!==!0,!0))}function tN(t,n){return t!==null&&n&&n(new Ru(t)),$(!0)}function nN(t,n){return t!==null&&n&&n(new ku(t)),$(!0)}function iN(t,n){let e=n.routeConfig?n.routeConfig.canActivate:null;if(!e||e.length===0)return $(!0);let i=e.map(r=>Dn(()=>{let o=n._environmentInjector,a=ma(r,o),s=qO(a)?a.canActivate(n,t):at(o,()=>a(n,t));return no(s).pipe(gi())}));return $(i).pipe(fa())}function rN(t,n){let e=n[n.length-1],r=n.slice(0,n.length-1).reverse().map(o=>UO(o)).filter(o=>o!==null).map(o=>Dn(()=>{let a=o.guards.map(s=>{let l=o.node._environmentInjector,c=ma(s,l),u=YO(c)?c.canActivateChild(e,t):at(l,()=>c(e,t));return no(u).pipe(gi())});return $(a).pipe(fa())}));return $(r).pipe(fa())}function oN(t,n,e,i){let r=n&&n.routeConfig?n.routeConfig.canDeactivate:null;if(!r||r.length===0)return $(!0);let o=r.map(a=>{let s=n._environmentInjector,l=ma(a,s),c=ZO(l)?l.canDeactivate(t,n,e,i):at(s,()=>l(t,n,e,i));return no(c).pipe(gi())});return $(o).pipe(fa())}function aN(t,n,e,i,r){let o=n.canLoad;if(o===void 0||o.length===0)return $(!0);let a=o.map(s=>{let l=ma(s,t),c=GO(l)?l.canLoad(n,e):at(t,()=>l(n,e)),u=no(c);return r?u.pipe(_D(r)):u});return $(a).pipe(fa(),bD(i))}function bD(t){return bm(Ze(n=>{if(typeof n!="boolean")throw Fu(t,n)}),te(n=>n===!0))}function sN(t,n,e,i,r,o){let a=n.canMatch;if(!a||a.length===0)return $(!0);let s=a.map(l=>{let c=ma(l,t),u=QO(c)?c.canMatch(n,e,r):at(t,()=>c(n,e,r));return no(u).pipe(_D(o))});return $(s).pipe(fa(),bD(i))}var ki=class t extends Error{segmentGroup;constructor(n){super(),this.segmentGroup=n||null,Object.setPrototypeOf(this,t.prototype)}},cl=class t extends Error{urlTree;constructor(n){super(),this.urlTree=n,Object.setPrototypeOf(this,t.prototype)}};function lN(t){throw new M(4e3,!1)}function cN(t){throw hD(!1,Nt.GuardRejected)}var nv=class{urlSerializer;urlTree;constructor(n,e){this.urlSerializer=n,this.urlTree=e}async lineralizeSegments(n,e){let i=[],r=e.root;for(;;){if(i=i.concat(r.segments),r.numberOfChildren===0)return i;if(r.numberOfChildren>1||!r.children[ae])throw lN(`${n.redirectTo}`);r=r.children[ae]}}async applyRedirectCommands(n,e,i,r,o){let a=await dN(e,r,o);if(a instanceof vn)throw new cl(a);let s=this.applyRedirectCreateUrlTree(a,this.urlSerializer.parse(a),n,i);if(a[0]==="/")throw new cl(s);return s}applyRedirectCreateUrlTree(n,e,i,r){let o=this.createSegmentGroup(n,e.root,i,r);return new vn(o,this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(n,e){let i={};return Object.entries(n).forEach(([r,o])=>{if(typeof o=="string"&&o[0]===":"){let s=o.substring(1);i[r]=e[s]}else i[r]=o}),i}createSegmentGroup(n,e,i,r){let o=this.createSegments(n,e.segments,i,r),a={};return Object.entries(e.children).forEach(([s,l])=>{a[s]=this.createSegmentGroup(n,l,i,r)}),new ye(o,a)}createSegments(n,e,i,r){return e.map(o=>o.path[0]===":"?this.findPosParam(n,o,r):this.findOrReturn(o,i))}findPosParam(n,e,i){let r=i[e.path.substring(1)];if(!r)throw new M(4001,!1);return r}findOrReturn(n,e){let i=0;for(let r of e){if(r.path===n.path)return e.splice(i),r;i++}return n}};function dN(t,n,e){if(typeof t=="string")return Promise.resolve(t);let i=t;return wu(no(at(e,()=>i(n))))}function uN(t,n){return t.providers&&!t._injector&&(t._injector=Qo(t.providers,n,`Route: ${t.path}`)),t._injector??n}function On(t){return t.outlet||ae}function fN(t,n){let e=t.filter(i=>On(i)===n);return e.push(...t.filter(i=>On(i)!==n)),e}var iv={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function yD(t){return{routeConfig:t.routeConfig,url:t.url,params:t.params,queryParams:t.queryParams,fragment:t.fragment,data:t.data,outlet:t.outlet,title:t.title,paramMap:t.paramMap,queryParamMap:t.queryParamMap}}function mN(t,n,e,i,r,o,a){let s=wD(t,n,e);if(!s.matched)return $(s);let l=yD(o(s));return i=uN(n,i),sN(i,n,e,r,l,a).pipe(te(c=>c===!0?s:y({},iv)))}function wD(t,n,e){if(n.path==="")return n.pathMatch==="full"&&(t.hasChildren()||e.length>0)?y({},iv):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let r=(n.matcher||WC)(e,t,n);if(!r)return y({},iv);let o={};Object.entries(r.posParams??{}).forEach(([s,l])=>{o[s]=l.path});let a=r.consumed.length>0?y(y({},o),r.consumed[r.consumed.length-1].parameters):o;return{matched:!0,consumedSegments:r.consumed,remainingSegments:e.slice(r.consumed.length),parameters:a,positionalParamSegments:r.posParams??{}}}function zC(t,n,e,i,r){return e.length>0&&gN(t,e,i,r)?{segmentGroup:new ye(n,pN(i,new ye(e,t.children))),slicedSegments:[]}:e.length===0&&vN(t,e,i)?{segmentGroup:new ye(t.segments,hN(t,e,i,t.children)),slicedSegments:e}:{segmentGroup:new ye(t.segments,t.children),slicedSegments:e}}function hN(t,n,e,i){let r={};for(let o of e)if(Bu(t,n,o)&&!i[On(o)]){let a=new ye([],{});r[On(o)]=a}return y(y({},i),r)}function pN(t,n){let e={};e[ae]=n;for(let i of t)if(i.path===""&&On(i)!==ae){let r=new ye([],{});e[On(i)]=r}return e}function gN(t,n,e,i){return e.some(r=>!Bu(t,n,r)||!(On(r)!==ae)?!1:!(i!==void 0&&On(r)===i))}function vN(t,n,e){return e.some(i=>Bu(t,n,i))}function Bu(t,n,e){return(t.hasChildren()||n.length>0)&&e.pathMatch==="full"?!1:e.path===""}function _N(t,n,e){return n.length===0&&!t.children[e]}var rv=class{};async function bN(t,n,e,i,r,o,a="emptyOnly",s){return new ov(t,n,e,i,r,a,o,s).recognize()}var yN=31,ov=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(n,e,i,r,o,a,s,l){this.injector=n,this.configLoader=e,this.rootComponentType=i,this.config=r,this.urlTree=o,this.paramsInheritanceStrategy=a,this.urlSerializer=s,this.abortSignal=l,this.applyRedirects=new nv(this.urlSerializer,this.urlTree)}noMatchError(n){return new M(4002,`'${n.segmentGroup}'`)}async recognize(){let n=zC(this.urlTree.root,[],[],this.config).segmentGroup,{children:e,rootSnapshot:i}=await this.match(n),r=new Jt(i,e),o=new sl("",r),a=iD(i,[],this.urlTree.queryParams,this.urlTree.fragment);return a.queryParams=this.urlTree.queryParams,o.url=this.urlSerializer.serialize(a),{state:o,tree:a}}async match(n){let e=new da([],Object.freeze({}),Object.freeze(y({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),ae,this.rootComponentType,null,{},this.injector);try{return{children:await this.processSegmentGroup(this.injector,this.config,n,ae,e),rootSnapshot:e}}catch(i){if(i instanceof cl)return this.urlTree=i.urlTree,this.match(i.urlTree.root);throw i instanceof ki?this.noMatchError(i):i}}async processSegmentGroup(n,e,i,r,o){if(i.segments.length===0&&i.hasChildren())return this.processChildren(n,e,i,o);let a=await this.processSegment(n,e,i,i.segments,r,!0,o);return a instanceof Jt?[a]:[]}async processChildren(n,e,i,r){let o=[];for(let l of Object.keys(i.children))l==="primary"?o.unshift(l):o.push(l);let a=[];for(let l of o){let c=i.children[l],u=fN(e,l),f=await this.processSegmentGroup(n,u,c,l,r);a.push(...f)}let s=CD(a);return wN(s),s}async processSegment(n,e,i,r,o,a,s){for(let l of e)try{return await this.processSegmentAgainstRoute(l._injector??n,e,l,i,r,o,a,s)}catch(c){if(c instanceof ki||gD(c))continue;throw c}if(_N(i,r,o))return new rv;throw new ki(i)}async processSegmentAgainstRoute(n,e,i,r,o,a,s,l){if(On(i)!==a&&(a===ae||!Bu(r,o,i)))throw new ki(r);if(i.redirectTo===void 0)return this.matchSegmentAgainstRoute(n,r,i,o,a,l);if(this.allowRedirects&&s)return this.expandSegmentAgainstRouteUsingRedirect(n,r,e,i,o,a,l);throw new ki(r)}async expandSegmentAgainstRouteUsingRedirect(n,e,i,r,o,a,s){let{matched:l,parameters:c,consumedSegments:u,positionalParamSegments:f,remainingSegments:p}=wD(e,r,o);if(!l)throw new ki(e);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>yN&&(this.allowRedirects=!1));let g=this.createSnapshot(n,r,o,c,s);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let C=await this.applyRedirects.applyRedirectCommands(u,r.redirectTo,f,yD(g),n),I=await this.applyRedirects.lineralizeSegments(r,C);return this.processSegment(n,i,e,I.concat(p),a,!1,s)}createSnapshot(n,e,i,r,o){let a=new da(i,r,Object.freeze(y({},this.urlTree.queryParams)),this.urlTree.fragment,DN(e),On(e),e.component??e._loadedComponent??null,e,xN(e),n),s=av(a,o,this.paramsInheritanceStrategy);return a.params=Object.freeze(s.params),a.data=Object.freeze(s.data),a}async matchSegmentAgainstRoute(n,e,i,r,o,a){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let s=ut=>this.createSnapshot(n,i,ut.consumedSegments,ut.parameters,a),l=await wu(mN(e,i,r,n,this.urlSerializer,s,this.abortSignal));if(i.path==="**"&&(e.children={}),!l?.matched)throw new ki(e);n=i._injector??n;let{routes:c}=await this.getChildConfig(n,i,r),u=i._loadedInjector??n,{parameters:f,consumedSegments:p,remainingSegments:g}=l,C=this.createSnapshot(n,i,p,f,a),{segmentGroup:I,slicedSegments:k}=zC(e,p,g,c,o);if(k.length===0&&I.hasChildren()){let ut=await this.processChildren(u,c,I,C);return new Jt(C,ut)}if(c.length===0&&k.length===0)return new Jt(C,[]);let H=On(i)===o,be=await this.processSegment(u,c,I,k,H?ae:o,!0,C);return new Jt(C,be instanceof Jt?[be]:[])}async getChildConfig(n,e,i){if(e.children)return{routes:e.children,injector:n};if(e.loadChildren){if(e._loadedRoutes!==void 0){let o=e._loadedNgModuleFactory;return o&&!e._loadedInjector&&(e._loadedInjector=o.create(n).injector),{routes:e._loadedRoutes,injector:e._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(await wu(aN(n,e,i,this.urlSerializer,this.abortSignal))){let o=await this.configLoader.loadChildren(n,e);return e._loadedRoutes=o.routes,e._loadedInjector=o.injector,e._loadedNgModuleFactory=o.factory,o}throw cN(e)}return{routes:[],injector:n}}};function wN(t){t.sort((n,e)=>n.value.outlet===ae?-1:e.value.outlet===ae?1:n.value.outlet.localeCompare(e.value.outlet))}function CN(t){let n=t.value.routeConfig;return n&&n.path===""}function CD(t){let n=[],e=new Set;for(let i of t){if(!CN(i)){n.push(i);continue}let r=n.find(o=>i.value.routeConfig===o.value.routeConfig);r!==void 0?(r.children.push(...i.children),e.add(r)):n.push(i)}for(let i of e){let r=CD(i.children);n.push(new Jt(i.value,r))}return n.filter(i=>!e.has(i))}function DN(t){return t.data||{}}function xN(t){return t.resolve||{}}function EN(t,n,e,i,r,o,a){return wt(async s=>{let{state:l,tree:c}=await bN(t,n,e,i,s.extractedUrl,r,o,a);return K(y({},s),{targetSnapshot:l,urlAfterRedirects:c})})}function IN(t){return wt(n=>{let{targetSnapshot:e,guards:{canActivateChecks:i}}=n;if(!i.length)return $(n);let r=new Set(i.map(s=>s.route)),o=new Set;for(let s of r)if(!o.has(s))for(let l of DD(s))o.add(l);let a=0;return Te(o).pipe($i(s=>r.has(s)?MN(s,e,t):(s.data=av(s,s.parent,t).resolve,$(void 0))),Ze(()=>a++),Ic(1),wt(s=>a===o.size?$(n):je))})}function DD(t){let n=t.children.map(e=>DD(e)).flat();return[t,...n]}function MN(t,n,e){let i=t.routeConfig,r=t._resolve;return i?.title!==void 0&&!uD(i)&&(r[dl]=i.title),Dn(()=>(t.data=av(t,t.parent,e).resolve,SN(r,t,n).pipe(te(o=>(t._resolvedData=o,t.data=y(y({},t.data),o),null)))))}function SN(t,n,e){let i=Gg(t);if(i.length===0)return $({});let r={};return Te(i).pipe(wt(o=>TN(t[o],n,e).pipe(gi(),Ze(a=>{if(a instanceof ua)throw Fu(new Ai,a);r[o]=a}))),Ic(1),te(()=>r),zi(o=>gD(o)?je:Tr(o)))}function TN(t,n,e){let i=n._environmentInjector,r=ma(t,i),o=r.resolve?r.resolve(n,e):at(i,()=>r(n,e));return no(o)}function $C(t){return et(n=>{let e=t(n);return e?Te(e).pipe(te(()=>n)):$(n)})}var uv=(()=>{class t{buildTitle(e){let i,r=e.root;for(;r!==void 0;)i=this.getResolvedTitleForRoute(r)??i,r=r.children.find(o=>o.outlet===ae);return i}getResolvedTitleForRoute(e){return e.data[dl]}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:()=>d(xD),providedIn:"root"})}return t})(),xD=(()=>{class t extends uv{title;constructor(e){super(),this.title=e}updateTitle(e){let i=this.buildTitle(e);i!==void 0&&this.title.setTitle(i)}static \u0275fac=function(i){return new(i||t)(P(FC))};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),oo=new _("",{factory:()=>({})}),ao=new _(""),Vu=(()=>{class t{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=d(cg);async loadComponent(e,i){if(this.componentLoaders.get(i))return this.componentLoaders.get(i);if(i._loadedComponent)return Promise.resolve(i._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(i);let r=(async()=>{try{let o=await qC(at(e,()=>i.loadComponent())),a=await MD(ID(o));return this.onLoadEndListener&&this.onLoadEndListener(i),i._loadedComponent=a,a}finally{this.componentLoaders.delete(i)}})();return this.componentLoaders.set(i,r),r}loadChildren(e,i){if(this.childrenLoaders.get(i))return this.childrenLoaders.get(i);if(i._loadedRoutes)return Promise.resolve({routes:i._loadedRoutes,injector:i._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(i);let r=(async()=>{try{let o=await ED(i,this.compiler,e,this.onLoadEndListener);return i._loadedRoutes=o.routes,i._loadedInjector=o.injector,i._loadedNgModuleFactory=o.factory,o}finally{this.childrenLoaders.delete(i)}})();return this.childrenLoaders.set(i,r),r}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();async function ED(t,n,e,i){let r=await qC(at(e,()=>t.loadChildren())),o=await MD(ID(r)),a;o instanceof Ud||Array.isArray(o)?a=o:a=await n.compileModuleAsync(o),i&&i(t);let s,l,c=!1,u;return Array.isArray(a)?(l=a,c=!0):(s=a.create(e).injector,u=a,l=s.get(ao,[],{optional:!0,self:!0}).flat()),{routes:l.map(dv),injector:s,factory:u}}function kN(t){return t&&typeof t=="object"&&"default"in t}function ID(t){return kN(t)?t.default:t}async function MD(t){return t}var Hu=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:()=>d(AN),providedIn:"root"})}return t})(),AN=(()=>{class t{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,i){return e}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),fv=new _(""),mv=new _("");function SD(t,n,e){let i=t.get(mv),r=t.get(j);if(!r.startViewTransition||i.skipNextTransition)return i.skipNextTransition=!1,new Promise(c=>setTimeout(c));let o,a=new Promise(c=>{o=c}),s=r.startViewTransition(()=>(o(),RN(t)));s.updateCallbackDone.catch(c=>{}),s.ready.catch(c=>{}),s.finished.catch(c=>{});let{onViewTransitionCreated:l}=i;return l&&at(t,()=>l({transition:s,from:n,to:e})),a}function RN(t){return new Promise(n=>{$e({read:()=>setTimeout(n)},{injector:t})})}var ON=()=>{},hv=new _(""),Uu=(()=>{class t{currentNavigation=N(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=N(null);events=new D;transitionAbortWithErrorSubject=new D;configLoader=d(Vu);environmentInjector=d(Ce);destroyRef=d(Dt);urlSerializer=d(io);rootContexts=d(ro);location=d(oi);inputBindingEnabled=d(fl,{optional:!0})!==null;titleStrategy=d(uv);options=d(oo,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=d(Hu);createViewTransition=d(fv,{optional:!0});navigationErrorHandler=d(hv,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>$(void 0);rootComponentType=null;destroyed=!1;constructor(){let e=r=>this.events.next(new Su(r)),i=r=>this.events.next(new Tu(r));this.configLoader.onLoadEndListener=i,this.configLoader.onLoadStartListener=e,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(e){let i=++this.navigationId;Ge(()=>{this.transitions?.next(K(y({},e),{extractedUrl:this.urlHandlingStrategy.extract(e.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:i,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(e){return this.transitions=new Je(null),this.transitions.pipe(me(i=>i!==null),et(i=>{let r=!1,o=new AbortController,a=()=>!r&&this.currentTransition?.id===i.id;return $(i).pipe(et(s=>{if(this.navigationId>i.id)return this.cancelNavigationTransition(i,"",Nt.SupersededByNewNavigation),je;this.currentTransition=i;let l=this.lastSuccessfulNavigation();this.currentNavigation.set({id:s.id,initialUrl:s.rawUrl,extractedUrl:s.extractedUrl,targetBrowserUrl:typeof s.extras.browserUrl=="string"?this.urlSerializer.parse(s.extras.browserUrl):s.extras.browserUrl,trigger:s.source,extras:s.extras,previousNavigation:l?K(y({},l),{previousNavigation:null}):null,abort:()=>o.abort(),routesRecognizeHandler:s.routesRecognizeHandler,beforeActivateHandler:s.beforeActivateHandler});let c=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),u=s.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!c&&u!=="reload")return this.events.next(new si(s.id,this.urlSerializer.serialize(s.rawUrl),"",aa.IgnoredSameUrlNavigation)),s.resolve(!1),je;if(this.urlHandlingStrategy.shouldProcessUrl(s.rawUrl))return $(s).pipe(et(f=>(this.events.next(new sr(f.id,this.urlSerializer.serialize(f.extractedUrl),f.source,f.restoredState)),f.id!==this.navigationId?je:Promise.resolve(f))),EN(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy,o.signal),Ze(f=>{i.targetSnapshot=f.targetSnapshot,i.urlAfterRedirects=f.urlAfterRedirects,this.currentNavigation.update(p=>(p.finalUrl=f.urlAfterRedirects,p)),this.events.next(new ol)}),et(f=>Te(i.routesRecognizeHandler.deferredHandle??$(void 0)).pipe(te(()=>f))),Ze(()=>{let f=new rl(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(f)}));if(c&&this.urlHandlingStrategy.shouldProcessUrl(s.currentRawUrl)){let{id:f,extractedUrl:p,source:g,restoredState:C,extras:I}=s,k=new sr(f,this.urlSerializer.serialize(p),g,C);this.events.next(k);let H=cD(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=i=K(y({},s),{targetSnapshot:H,urlAfterRedirects:p,extras:K(y({},I),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(be=>(be.finalUrl=p,be)),$(i)}else return this.events.next(new si(s.id,this.urlSerializer.serialize(s.extractedUrl),"",aa.IgnoredByUrlHandlingStrategy)),s.resolve(!1),je}),te(s=>{let l=new xu(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);return this.events.next(l),this.currentTransition=i=K(y({},s),{guards:HO(s.targetSnapshot,s.currentSnapshot,this.rootContexts)}),i}),XO(s=>this.events.next(s)),et(s=>{if(i.guardsResult=s.guardsResult,s.guardsResult&&typeof s.guardsResult!="boolean")throw Fu(this.urlSerializer,s.guardsResult);let l=new Eu(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot,!!s.guardsResult);if(this.events.next(l),!a())return je;if(!s.guardsResult)return this.cancelNavigationTransition(s,"",Nt.GuardRejected),je;if(s.guards.canActivateChecks.length===0)return $(s);let c=new Iu(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);if(this.events.next(c),!a())return je;let u=!1;return $(s).pipe(IN(this.paramsInheritanceStrategy),Ze({next:()=>{u=!0;let f=new Mu(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(f)},complete:()=>{u||this.cancelNavigationTransition(s,"",Nt.NoDataFromResolver)}}))}),$C(s=>{let l=u=>{let f=[];if(u.routeConfig?._loadedComponent)u.component=u.routeConfig?._loadedComponent;else if(u.routeConfig?.loadComponent){let p=u._environmentInjector;f.push(this.configLoader.loadComponent(p,u.routeConfig).then(g=>{u.component=g}))}for(let p of u.children)f.push(...l(p));return f},c=l(s.targetSnapshot.root);return c.length===0?$(s):Te(Promise.all(c).then(()=>s))}),$C(()=>this.afterPreactivation()),et(()=>{let{currentSnapshot:s,targetSnapshot:l}=i,c=this.createViewTransition?.(this.environmentInjector,s.root,l.root);return c?Te(c).pipe(te(()=>i)):$(i)}),Ye(1),et(s=>{let l=LO(e.routeReuseStrategy,s.targetSnapshot,s.currentRouterState);this.currentTransition=i=s=K(y({},s),{targetRouterState:l}),this.currentNavigation.update(u=>(u.targetRouterState=l,u)),this.events.next(new la);let c=i.beforeActivateHandler.deferredHandle;return c?Te(c.then(()=>s)):$(s)}),Ze(s=>{new tv(e.routeReuseStrategy,i.targetRouterState,i.currentRouterState,l=>this.events.next(l),this.inputBindingEnabled).activate(this.rootContexts),a()&&(r=!0,this.currentNavigation.update(l=>(l.abort=ON,l)),this.lastSuccessfulNavigation.set(Ge(this.currentNavigation)),this.events.next(new Nn(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects))),this.titleStrategy?.updateTitle(s.targetRouterState.snapshot),s.resolve(!0))}),pe(vD(o.signal).pipe(me(()=>!r&&!i.targetRouterState),Ze(()=>{this.cancelNavigationTransition(i,o.signal.reason+"",Nt.Aborted)}))),Ze({complete:()=>{r=!0}}),pe(this.transitionAbortWithErrorSubject.pipe(Ze(s=>{throw s}))),Wi(()=>{o.abort(),r||this.cancelNavigationTransition(i,"",Nt.SupersededByNewNavigation),this.currentTransition?.id===i.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),zi(s=>{if(r=!0,this.destroyed)return i.resolve(!1),je;if(pD(s))this.events.next(new gn(i.id,this.urlSerializer.serialize(i.extractedUrl),s.message,s.cancellationCode)),VO(s)?this.events.next(new ca(s.url,s.navigationBehaviorOptions)):i.resolve(!1);else{let l=new to(i.id,this.urlSerializer.serialize(i.extractedUrl),s,i.targetSnapshot??void 0);try{let c=at(this.environmentInjector,()=>this.navigationErrorHandler?.(l));if(c instanceof ua){let{message:u,cancellationCode:f}=Fu(this.urlSerializer,c);this.events.next(new gn(i.id,this.urlSerializer.serialize(i.extractedUrl),u,f)),this.events.next(new ca(c.redirectTo,c.navigationBehaviorOptions))}else throw this.events.next(l),s}catch(c){this.options.resolveNavigationPromiseOnError?i.resolve(!1):i.reject(c)}}return je}))}))}cancelNavigationTransition(e,i,r){let o=new gn(e.id,this.urlSerializer.serialize(e.extractedUrl),i,r);this.events.next(o),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),i=Ge(this.currentNavigation),r=i?.targetBrowserUrl??i?.extractedUrl;return e.toString()!==r?.toString()&&!i?.extras.skipLocationChange}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function NN(t){return t!==ia}var TD=new _("");var kD=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:()=>d(PN),providedIn:"root"})}return t})(),ju=class{shouldDetach(n){return!1}store(n,e){}shouldAttach(n){return!1}retrieve(n){return null}shouldReuseRoute(n,e){return n.routeConfig===e.routeConfig}shouldDestroyInjector(n){return!0}},PN=(()=>{class t extends ju{static \u0275fac=(()=>{let e;return function(r){return(e||(e=ze(t)))(r||t)}})();static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),pv=(()=>{class t{urlSerializer=d(io);options=d(oo,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=d(oi);urlHandlingStrategy=d(Hu);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new vn;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:e,initialUrl:i,targetBrowserUrl:r}){let o=e!==void 0?this.urlHandlingStrategy.merge(e,i):i,a=r??o;return a instanceof vn?this.urlSerializer.serialize(a):a}commitTransition({targetRouterState:e,finalUrl:i,initialUrl:r}){i&&e?(this.currentUrlTree=i,this.rawUrlTree=this.urlHandlingStrategy.merge(i,r),this.routerState=e):this.rawUrlTree=r}routerState=cD(null,d(Ce));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:()=>d(FN),providedIn:"root"})}return t})(),FN=(()=>{class t extends pv{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(i=>{i.type==="popstate"&&setTimeout(()=>{e(i.url,i.state,"popstate",{replaceUrl:!0})})})}handleRouterEvent(e,i){e instanceof sr?this.updateStateMemento():e instanceof si?this.commitTransition(i):e instanceof rl?this.urlUpdateStrategy==="eager"&&(i.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(i),i)):e instanceof la?(this.commitTransition(i),this.urlUpdateStrategy==="deferred"&&!i.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(i),i)):e instanceof gn&&!lD(e)?this.restoreHistory(i):e instanceof to?this.restoreHistory(i,!0):e instanceof Nn&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,{extras:i,id:r}){let{replaceUrl:o,state:a}=i;if(this.location.isCurrentPathEqualTo(e)||o){let s=this.browserPageId,l=y(y({},a),this.generateNgRouterState(r,s));this.location.replaceState(e,"",l)}else{let s=y(y({},a),this.generateNgRouterState(r,this.browserPageId+1));this.location.go(e,"",s)}}restoreHistory(e,i=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,o=this.currentPageId-r;o!==0?this.location.historyGo(o):this.getCurrentUrlTree()===e.finalUrl&&o===0&&(this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(i&&this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:e}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,i){return this.canceledNavigationResolution==="computed"?{navigationId:e,\u0275routerPageId:i}:{navigationId:e}}static \u0275fac=(()=>{let e;return function(r){return(e||(e=ze(t)))(r||t)}})();static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function zu(t,n){t.events.pipe(me(e=>e instanceof Nn||e instanceof gn||e instanceof to||e instanceof si),te(e=>e instanceof Nn||e instanceof si?0:(e instanceof gn?e.code===Nt.Redirect||e.code===Nt.SupersededByNewNavigation:!1)?2:1),me(e=>e!==2),Ye(1)).subscribe(()=>{n()})}var _n=(()=>{class t{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=d($d);stateManager=d(pv);options=d(oo,{optional:!0})||{};pendingTasks=d(Ci);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=d(Uu);urlSerializer=d(io);location=d(oi);urlHandlingStrategy=d(Hu);injector=d(Ce);_events=new D;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=d(kD);injectorCleanup=d(TD,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=d(ao,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!d(fl,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:e=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new le;subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(i=>{try{let r=this.navigationTransitions.currentTransition,o=Ge(this.navigationTransitions.currentNavigation);if(r!==null&&o!==null){if(this.stateManager.handleRouterEvent(i,o),i instanceof gn&&i.code!==Nt.Redirect&&i.code!==Nt.SupersededByNewNavigation)this.navigated=!0;else if(i instanceof Nn)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(i instanceof ca){let a=i.navigationBehaviorOptions,s=this.urlHandlingStrategy.merge(i.url,r.currentRawUrl),l=y({scroll:r.extras.scroll,browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||NN(r.source)},a);this.scheduleNavigation(s,ia,null,l,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}PO(i)&&this._events.next(i)}catch(r){this.navigationTransitions.transitionAbortWithErrorSubject.next(r)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),ia,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,i,r,o)=>{this.navigateToSyncWithBrowser(e,r,i,o)})}navigateToSyncWithBrowser(e,i,r,o){let a=r?.navigationId?r:null;if(r){let l=y({},r);delete l.navigationId,delete l.\u0275routerPageId,Object.keys(l).length!==0&&(o.state=l)}let s=this.parseUrl(e);this.scheduleNavigation(s,i,a,o).catch(l=>{this.disposed||this.injector.get(Qt)(l)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return Ge(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map(dv),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,i={}){let{relativeTo:r,queryParams:o,fragment:a,queryParamsHandling:s,preserveFragment:l}=i,c=l?this.currentUrlTree.fragment:a,u=null;switch(s??this.options.defaultQueryParamsHandling){case"merge":u=y(y({},this.currentUrlTree.queryParams),o);break;case"preserve":u=this.currentUrlTree.queryParams;break;default:u=o||null}u!==null&&(u=this.removeEmptyProps(u));let f;try{let p=r?r.snapshot:this.routerState.snapshot.root;f=rD(p)}catch{(typeof e[0]!="string"||e[0][0]!=="/")&&(e=[]),f=this.currentUrlTree.root}return oD(f,e,u,c??null,this.urlSerializer)}navigateByUrl(e,i={skipLocationChange:!1}){let r=oa(e)?e:this.parseUrl(e),o=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(o,ia,null,i)}navigate(e,i={skipLocationChange:!1}){return LN(e),this.navigateByUrl(this.createUrlTree(e,i),i)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch{return this.console.warn(on(4018,!1)),this.urlSerializer.parse("/")}}isActive(e,i){let r;if(i===!0?r=y({},ZC):i===!1?r=y({},qg):r=y(y({},qg),i),oa(e))return jC(this.currentUrlTree,e,r);let o=this.parseUrl(e);return jC(this.currentUrlTree,o,r)}removeEmptyProps(e){return Object.entries(e).reduce((i,[r,o])=>(o!=null&&(i[r]=o),i),{})}scheduleNavigation(e,i,r,o,a){if(this.disposed)return Promise.resolve(!1);let s,l,c;a?(s=a.resolve,l=a.reject,c=a.promise):c=new Promise((f,p)=>{s=f,l=p});let u=this.pendingTasks.add();return zu(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(u))}),this.navigationTransitions.handleNavigationRequest({source:i,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:o,resolve:s,reject:l,promise:c,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),c.catch(Promise.reject.bind(Promise))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function LN(t){for(let n=0;n<t.length;n++)if(t[n]==null)throw new M(4008,!1)}var hl=class{};var AD=(()=>{class t{router;injector;preloadingStrategy;loader;subscription;constructor(e,i,r,o){this.router=e,this.injector=i,this.preloadingStrategy=r,this.loader=o}setUpPreloading(){this.subscription=this.router.events.pipe(me(e=>e instanceof Nn),$i(()=>this.preload())).subscribe(()=>{})}preload(){return this.processRoutes(this.injector,this.router.config)}ngOnDestroy(){this.subscription?.unsubscribe()}processRoutes(e,i){let r=[];for(let o of i){o.providers&&!o._injector&&(o._injector=Qo(o.providers,e,""));let a=o._injector??e;o._loadedNgModuleFactory&&!o._loadedInjector&&(o._loadedInjector=o._loadedNgModuleFactory.create(a).injector);let s=o._loadedInjector??a;(o.loadChildren&&!o._loadedRoutes&&o.canLoad===void 0||o.loadComponent&&!o._loadedComponent)&&r.push(this.preloadConfig(a,o)),(o.children||o._loadedRoutes)&&r.push(this.processRoutes(s,o.children??o._loadedRoutes))}return Te(r).pipe(Hi())}preloadConfig(e,i){return this.preloadingStrategy.preload(i,()=>{if(e.destroyed)return $(null);let r;i.loadChildren&&i.canLoad===void 0?r=Te(this.loader.loadChildren(e,i)):r=$(null);let o=r.pipe(wt(a=>a===null?$(void 0):(i._loadedRoutes=a.routes,i._loadedInjector=a.injector,i._loadedNgModuleFactory=a.factory,this.processRoutes(a.injector??e,a.routes))));if(i.loadComponent&&!i._loadedComponent){let a=this.loader.loadComponent(e,i);return Te([o,a]).pipe(Hi())}else return o})}static \u0275fac=function(i){return new(i||t)(P(_n),P(Ce),P(hl),P(Vu))};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),RD=new _(""),BN=(()=>{class t{options;routerEventsSubscription;scrollEventsSubscription;lastId=0;lastSource=ia;restoredId=0;store={};urlSerializer=d(io);zone=d(R);viewportScroller=d(Dg);transitions=d(Uu);constructor(e){this.options=e,this.options.scrollPositionRestoration||="disabled",this.options.anchorScrolling||="disabled"}init(){this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.setHistoryScrollRestoration("manual"),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.transitions.events.subscribe(e=>{e instanceof sr?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=e.navigationTrigger,this.restoredId=e.restoredState?e.restoredState.navigationId:0):e instanceof Nn?(this.lastId=e.id,this.scheduleScrollEvent(e,this.urlSerializer.parse(e.urlAfterRedirects).fragment)):e instanceof si&&e.code===aa.IgnoredSameUrlNavigation&&(this.lastSource=void 0,this.restoredId=0,this.scheduleScrollEvent(e,this.urlSerializer.parse(e.url).fragment))})}consumeScrollEvents(){return this.transitions.events.subscribe(e=>{if(!(e instanceof sa)||e.scrollBehavior==="manual")return;let i={behavior:"instant"};e.position?this.options.scrollPositionRestoration==="top"?this.viewportScroller.scrollToPosition([0,0],i):this.options.scrollPositionRestoration==="enabled"&&this.viewportScroller.scrollToPosition(e.position,i):e.anchor&&this.options.anchorScrolling==="enabled"?this.viewportScroller.scrollToAnchor(e.anchor):this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.scrollToPosition([0,0])})}scheduleScrollEvent(e,i){let r=Ge(this.transitions.currentNavigation)?.extras.scroll;this.zone.runOutsideAngular(async()=>{await new Promise(o=>{setTimeout(o),typeof requestAnimationFrame<"u"&&requestAnimationFrame(o)}),this.zone.run(()=>{this.transitions.events.next(new sa(e,this.lastSource==="popstate"?this.store[this.restoredId]:null,i,r))})})}ngOnDestroy(){this.routerEventsSubscription?.unsubscribe(),this.scrollEventsSubscription?.unsubscribe()}static \u0275fac=function(i){qp()};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})();function vv(t,...n){return zn([{provide:ao,multi:!0,useValue:t},[],{provide:Ri,useFactory:OD},{provide:Vs,multi:!0,useFactory:ND},n.map(e=>e.\u0275providers)])}function OD(){return d(_n).routerState.root}function pl(t,n){return{\u0275kind:t,\u0275providers:n}}function ND(){let t=d(F);return n=>{let e=t.get(Xt);if(n!==e.components[0])return;let i=t.get(_n),r=t.get(PD);t.get(_v)===1&&i.initialNavigation(),t.get(jD,null,{optional:!0})?.setUpPreloading(),t.get(RD,null,{optional:!0})?.init(),i.resetRootComponentType(e.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var PD=new _("",{factory:()=>new D}),_v=new _("",{factory:()=>1});function FD(){let t=[{provide:Td,useValue:!0},{provide:_v,useValue:0},Gd(()=>{let n=d(F);return n.get(pg,Promise.resolve()).then(()=>new Promise(i=>{let r=n.get(_n),o=n.get(PD);zu(r,()=>{i(!0)}),n.get(Uu).afterPreactivation=()=>(i(!0),o.closed?$(void 0):o),r.initialNavigation()}))})];return pl(2,t)}function LD(){let t=[Gd(()=>{d(_n).setUpLocationChangeListener()}),{provide:_v,useValue:2}];return pl(3,t)}var jD=new _("");function BD(t){return pl(0,[{provide:jD,useExisting:AD},{provide:hl,useExisting:t}])}function VD(){return pl(8,[lv,{provide:fl,useExisting:lv}])}function HD(t){Xn("NgRouterViewTransitions");let n=[{provide:fv,useValue:SD},{provide:mv,useValue:y({skipNextTransition:!!t?.skipInitialTransition},t)}];return pl(9,n)}var UD=[oi,{provide:io,useClass:Ai},_n,ro,{provide:Ri,useFactory:OD},Vu,[]],bv=(()=>{class t{constructor(){}static forRoot(e,i){return{ngModule:t,providers:[UD,[],{provide:ao,multi:!0,useValue:e},[],i?.errorHandler?{provide:hv,useValue:i.errorHandler}:[],{provide:oo,useValue:i||{}},i?.useHash?HN():UN(),VN(),i?.preloadingStrategy?BD(i.preloadingStrategy).\u0275providers:[],i?.initialNavigation?zN(i):[],i?.bindToComponentInputs?VD().\u0275providers:[],i?.enableViewTransitions?HD().\u0275providers:[],$N()]}}static forChild(e){return{ngModule:t,providers:[{provide:ao,multi:!0,useValue:e}]}}static \u0275fac=function(i){return new(i||t)};static \u0275mod=U({type:t});static \u0275inj=L({})}return t})();function VN(){return{provide:RD,useFactory:()=>{let t=d(Dg),n=d(oo);return n.scrollOffset&&t.setOffset(n.scrollOffset),new BN(n)}}}function HN(){return{provide:Ti,useClass:_g}}function UN(){return{provide:Ti,useClass:ru}}function zN(t){return[t.initialNavigation==="disabled"?LD().\u0275providers:[],t.initialNavigation==="enabledBlocking"?FD().\u0275providers:[]]}var gv=new _("");function $N(){return[{provide:gv,useFactory:ND},{provide:Vs,multi:!0,useExisting:gv}]}var GN=new _("cdk-dir-doc",{providedIn:"root",factory:()=>d(j)}),qN=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function zD(t){let n=t?.toLowerCase()||"";return n==="auto"&&typeof navigator<"u"&&navigator?.language?qN.test(navigator.language)?"rtl":"ltr":n==="rtl"?"rtl":"ltr"}var dt=(()=>{class t{get value(){return this.valueSignal()}valueSignal=N("ltr");change=new A;constructor(){let e=d(GN,{optional:!0});if(e){let i=e.body?e.body.dir:null,r=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(zD(i||r||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var he=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=U({type:t});static \u0275inj=L({})}return t})();var YN=["*"];var ZN=[[["","mat-card-avatar",""],["","matCardAvatar",""]],[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],"*"],QN=["[mat-card-avatar], [matCardAvatar]",`mat-card-title, mat-card-subtitle,
      [mat-card-title], [mat-card-subtitle],
      [matCardTitle], [matCardSubtitle]`,"*"],KN=new _("MAT_CARD_CONFIG"),Pt=(()=>{class t{appearance;constructor(){let e=d(KN,{optional:!0});this.appearance=e?.appearance||"raised"}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=x({type:t,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(i,r){i&2&&W("mat-mdc-card-outlined",r.appearance==="outlined")("mdc-card--outlined",r.appearance==="outlined")("mat-mdc-card-filled",r.appearance==="filled")("mdc-card--filled",r.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:YN,decls:1,vars:0,template:function(i,r){i&1&&(Me(),X(0))},styles:[`.mat-mdc-card {
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
`],encapsulation:2,changeDetection:0})}return t})(),$D=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=S({type:t,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-mdc-card-title"]})}return t})();var bn=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=S({type:t,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"]})}return t})(),WD=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=S({type:t,selectors:[["mat-card-subtitle"],["","mat-card-subtitle",""],["","matCardSubtitle",""]],hostAttrs:[1,"mat-mdc-card-subtitle"]})}return t})();var li=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=x({type:t,selectors:[["mat-card-header"]],hostAttrs:[1,"mat-mdc-card-header"],ngContentSelectors:QN,decls:4,vars:0,consts:[[1,"mat-mdc-card-header-text"]],template:function(i,r){i&1&&(Me(ZN),X(0),gt(1,"div",0),X(2,1),Et(),X(3,2))},encapsulation:2,changeDetection:0})}return t})();var GD=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=S({type:t,selectors:[["","mat-card-avatar",""],["","matCardAvatar",""]],hostAttrs:[1,"mat-mdc-card-avatar"]})}return t})();var $u=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=U({type:t});static \u0275inj=L({imports:[he]})}return t})();function gl(t){return t.buttons===0||t.detail===0}function vl(t){let n=t.touches&&t.touches[0]||t.changedTouches&&t.changedTouches[0];return!!n&&n.identifier===-1&&(n.radiusX==null||n.radiusX===1)&&(n.radiusY==null||n.radiusY===1)}var yv;function YD(){if(yv==null){let t=typeof document<"u"?document.head:null;yv=!!(t&&(t.createShadowRoot||t.attachShadow))}return yv}function wv(t){if(YD()){let n=t.getRootNode?t.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&n instanceof ShadowRoot)return n}return null}function ha(){let t=typeof document<"u"&&document?document.activeElement:null;for(;t&&t.shadowRoot;){let n=t.shadowRoot.activeElement;if(n===t)break;t=n}return t}function St(t){return t.composedPath?t.composedPath()[0]:t.target}var Cv;try{Cv=typeof Intl<"u"&&Intl.v8BreakIterator}catch{Cv=!1}var ue=(()=>{class t{_platformId=d(Yr);isBrowser=this._platformId?gC(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||Cv)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var _l;function ZD(){if(_l==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>_l=!0}))}finally{_l=_l||!1}return _l}function pa(t){return ZD()?t:!!t.capture}function tn(t,n=0){return QD(t)?Number(t):arguments.length===2?n:0}function QD(t){return!isNaN(parseFloat(t))&&!isNaN(Number(t))}function $t(t){return t instanceof O?t.nativeElement:t}var KD=new _("cdk-input-modality-detector-options"),XD={ignoreKeys:[18,17,224,91,16]},JD=650,Dv={passive:!0,capture:!0},ex=(()=>{class t{_platform=d(ue);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new Je(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(i=>i===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=St(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<JD||(this._modality.next(gl(e)?"keyboard":"mouse"),this._mostRecentTarget=St(e))};_onTouchstart=e=>{if(vl(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=St(e)};constructor(){let e=d(R),i=d(j),r=d(KD,{optional:!0});if(this._options=y(y({},XD),r),this.modalityDetected=this._modality.pipe(Ar(1)),this.modalityChanged=this.modalityDetected.pipe(Ec()),this._platform.isBrowser){let o=d(tt).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[o.listen(i,"keydown",this._onKeydown,Dv),o.listen(i,"mousedown",this._onMousedown,Dv),o.listen(i,"touchstart",this._onTouchstart,Dv)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),bl=(function(t){return t[t.IMMEDIATE=0]="IMMEDIATE",t[t.EVENTUAL=1]="EVENTUAL",t})(bl||{}),tx=new _("cdk-focus-monitor-default-options"),Wu=pa({passive:!0,capture:!0}),Oi=(()=>{class t{_ngZone=d(R);_platform=d(ue);_inputModalityDetector=d(ex);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=d(j);_stopInputModalityDetector=new D;constructor(){let e=d(tx,{optional:!0});this._detectionMode=e?.detectionMode||bl.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let i=St(e);for(let r=i;r;r=r.parentElement)e.type==="focus"?this._onFocus(e,r):this._onBlur(e,r)};monitor(e,i=!1){let r=$t(e);if(!this._platform.isBrowser||r.nodeType!==1)return $();let o=wv(r)||this._document,a=this._elementInfo.get(r);if(a)return i&&(a.checkChildren=!0),a.subject;let s={checkChildren:i,subject:new D,rootNode:o};return this._elementInfo.set(r,s),this._registerGlobalListeners(s),s.subject}stopMonitoring(e){let i=$t(e),r=this._elementInfo.get(i);r&&(r.subject.complete(),this._setClasses(i),this._elementInfo.delete(i),this._removeGlobalListeners(r))}focusVia(e,i,r){let o=$t(e),a=this._document.activeElement;o===a?this._getClosestElementsInfo(o).forEach(([s,l])=>this._originChanged(s,i,l)):(this._setOrigin(i),typeof o.focus=="function"&&o.focus(r))}ngOnDestroy(){this._elementInfo.forEach((e,i)=>this.stopMonitoring(i))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===bl.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,i){e.classList.toggle("cdk-focused",!!i),e.classList.toggle("cdk-touch-focused",i==="touch"),e.classList.toggle("cdk-keyboard-focused",i==="keyboard"),e.classList.toggle("cdk-mouse-focused",i==="mouse"),e.classList.toggle("cdk-program-focused",i==="program")}_setOrigin(e,i=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&i,this._detectionMode===bl.IMMEDIATE){clearTimeout(this._originTimeoutId);let r=this._originFromTouchInteraction?JD:1;this._originTimeoutId=setTimeout(()=>this._origin=null,r)}})}_onFocus(e,i){let r=this._elementInfo.get(i),o=St(e);!r||!r.checkChildren&&i!==o||this._originChanged(i,this._getFocusOrigin(o),r)}_onBlur(e,i){let r=this._elementInfo.get(i);!r||r.checkChildren&&e.relatedTarget instanceof Node&&i.contains(e.relatedTarget)||(this._setClasses(i),this._emitOrigin(r,null))}_emitOrigin(e,i){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(i))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let i=e.rootNode,r=this._rootNodeFocusListenerCount.get(i)||0;r||this._ngZone.runOutsideAngular(()=>{i.addEventListener("focus",this._rootNodeFocusAndBlurListener,Wu),i.addEventListener("blur",this._rootNodeFocusAndBlurListener,Wu)}),this._rootNodeFocusListenerCount.set(i,r+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(pe(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(e){let i=e.rootNode;if(this._rootNodeFocusListenerCount.has(i)){let r=this._rootNodeFocusListenerCount.get(i);r>1?this._rootNodeFocusListenerCount.set(i,r-1):(i.removeEventListener("focus",this._rootNodeFocusAndBlurListener,Wu),i.removeEventListener("blur",this._rootNodeFocusAndBlurListener,Wu),this._rootNodeFocusListenerCount.delete(i))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,i,r){this._setClasses(e,i),this._emitOrigin(r,i),this._lastFocusOrigin=i}_getClosestElementsInfo(e){let i=[];return this._elementInfo.forEach((r,o)=>{(o===e||r.checkChildren&&o.contains(e))&&i.push([o,r])}),i}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:i,mostRecentModality:r}=this._inputModalityDetector;if(r!=="mouse"||!i||i===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let o=e.labels;if(o){for(let a=0;a<o.length;a++)if(o[a].contains(i))return!0}return!1}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),xv=(()=>{class t{_elementRef=d(O);_focusMonitor=d(Oi);_monitorSubscription;_focusOrigin=null;cdkFocusChange=new A;constructor(){}get focusOrigin(){return this._focusOrigin}ngAfterViewInit(){let e=this._elementRef.nativeElement;this._monitorSubscription=this._focusMonitor.monitor(e,e.nodeType===1&&e.hasAttribute("cdkMonitorSubtreeFocus")).subscribe(i=>{this._focusOrigin=i,this.cdkFocusChange.emit(i)})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._monitorSubscription?.unsubscribe()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=S({type:t,selectors:[["","cdkMonitorElementFocus",""],["","cdkMonitorSubtreeFocus",""]],outputs:{cdkFocusChange:"cdkFocusChange"},exportAs:["cdkMonitorFocus"]})}return t})();var Gu=new WeakMap,it=(()=>{class t{_appRef;_injector=d(F);_environmentInjector=d(Ce);load(e){let i=this._appRef=this._appRef||this._injector.get(Xt),r=Gu.get(i);r||(r={loaders:new Set,refs:[]},Gu.set(i,r),i.onDestroy(()=>{Gu.get(i)?.refs.forEach(o=>o.destroy()),Gu.delete(i)})),r.loaders.has(e)||(r.loaders.add(e),r.refs.push(tu(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var ga=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=x({type:t,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(i,r){},styles:[`.cdk-visually-hidden {
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
`],encapsulation:2,changeDetection:0})}return t})(),qu;function XN(){if(qu===void 0&&(qu=null,typeof window<"u")){let t=window;t.trustedTypes!==void 0&&(qu=t.trustedTypes.createPolicy("angular#components",{createHTML:n=>n}))}return qu}function so(t){return XN()?.createHTML(t)||t}function nx(t,n,e){let i=e.sanitize(xt.HTML,n);t.innerHTML=so(i||"")}function va(t){return Array.isArray(t)?t:[t]}var ix=new Set,lo,_a=(()=>{class t{_platform=d(ue);_nonce=d(Yo,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):e1}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&JN(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function JN(t,n){if(!ix.has(t))try{lo||(lo=document.createElement("style"),n&&lo.setAttribute("nonce",n),lo.setAttribute("type","text/css"),document.head.appendChild(lo)),lo.sheet&&(lo.sheet.insertRule(`@media ${t} {body{ }}`,0),ix.add(t))}catch(e){console.error(e)}}function e1(t){return{matches:t==="all"||t==="",media:t,addListener:()=>{},removeListener:()=>{}}}var yl=(()=>{class t{_mediaMatcher=d(_a);_zone=d(R);_queries=new Map;_destroySubject=new D;constructor(){}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return rx(va(e)).some(r=>this._registerQuery(r).mql.matches)}observe(e){let r=rx(va(e)).map(a=>this._registerQuery(a).observable),o=Io(r);return o=Ui(o.pipe(Ye(1)),o.pipe(Ar(1),pi(0))),o.pipe(te(a=>{let s={matches:!1,breakpoints:{}};return a.forEach(({matches:l,query:c})=>{s.matches=s.matches||l,s.breakpoints[c]=l}),s}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);let i=this._mediaMatcher.matchMedia(e),o={observable:new ee(a=>{let s=l=>this._zone.run(()=>a.next(l));return i.addListener(s),()=>{i.removeListener(s)}}).pipe(rt(i),te(({matches:a})=>({query:e,matches:a})),pe(this._destroySubject)),mql:i};return this._queries.set(e,o),o}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function rx(t){return t.map(n=>n.split(",")).reduce((n,e)=>n.concat(e)).map(n=>n.trim())}function t1(t){if(t.type==="characterData"&&t.target instanceof Comment)return!0;if(t.type==="childList"){for(let n=0;n<t.addedNodes.length;n++)if(!(t.addedNodes[n]instanceof Comment))return!1;for(let n=0;n<t.removedNodes.length;n++)if(!(t.removedNodes[n]instanceof Comment))return!1;return!0}return!1}var ox=(()=>{class t{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),ax=(()=>{class t{_mutationObserverFactory=d(ox);_observedElements=new Map;_ngZone=d(R);constructor(){}ngOnDestroy(){this._observedElements.forEach((e,i)=>this._cleanupObserver(i))}observe(e){let i=$t(e);return new ee(r=>{let a=this._observeElement(i).pipe(te(s=>s.filter(l=>!t1(l))),me(s=>!!s.length)).subscribe(s=>{this._ngZone.run(()=>{r.next(s)})});return()=>{a.unsubscribe(),this._unobserveElement(i)}})}_observeElement(e){return this._ngZone.runOutsideAngular(()=>{if(this._observedElements.has(e))this._observedElements.get(e).count++;else{let i=new D,r=this._mutationObserverFactory.create(o=>i.next(o));r&&r.observe(e,{characterData:!0,childList:!0,subtree:!0}),this._observedElements.set(e,{observer:r,stream:i,count:1})}return this._observedElements.get(e).stream})}_unobserveElement(e){this._observedElements.has(e)&&(this._observedElements.get(e).count--,this._observedElements.get(e).count||this._cleanupObserver(e))}_cleanupObserver(e){if(this._observedElements.has(e)){let{observer:i,stream:r}=this._observedElements.get(e);i&&i.disconnect(),r.complete(),this._observedElements.delete(e)}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Yu=(()=>{class t{_contentObserver=d(ax);_elementRef=d(O);event=new A;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._disabled?this._unsubscribe():this._subscribe()}_disabled=!1;get debounce(){return this._debounce}set debounce(e){this._debounce=tn(e),this._subscribe()}_debounce;_currentSubscription=null;constructor(){}ngAfterContentInit(){!this._currentSubscription&&!this.disabled&&this._subscribe()}ngOnDestroy(){this._unsubscribe()}_subscribe(){this._unsubscribe();let e=this._contentObserver.observe(this._elementRef);this._currentSubscription=(this.debounce?e.pipe(pi(this.debounce)):e).subscribe(this.event)}_unsubscribe(){this._currentSubscription?.unsubscribe()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=S({type:t,selectors:[["","cdkObserveContent",""]],inputs:{disabled:[2,"cdkObserveContentDisabled","disabled",J],debounce:"debounce"},outputs:{event:"cdkObserveContent"},exportAs:["cdkObserveContent"]})}return t})(),ba=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=U({type:t});static \u0275inj=L({providers:[ox]})}return t})();var Mv=(()=>{class t{_platform=d(ue);constructor(){}isDisabled(e){return e.hasAttribute("disabled")}isVisible(e){return i1(e)&&getComputedStyle(e).visibility==="visible"}isTabbable(e){if(!this._platform.isBrowser)return!1;let i=n1(u1(e));if(i&&(sx(i)===-1||!this.isVisible(i)))return!1;let r=e.nodeName.toLowerCase(),o=sx(e);return e.hasAttribute("contenteditable")?o!==-1:r==="iframe"||r==="object"||this._platform.WEBKIT&&this._platform.IOS&&!c1(e)?!1:r==="audio"?e.hasAttribute("controls")?o!==-1:!1:r==="video"?o===-1?!1:o!==null?!0:this._platform.FIREFOX||e.hasAttribute("controls"):e.tabIndex>=0}isFocusable(e,i){return d1(e)&&!this.isDisabled(e)&&(i?.ignoreVisibility||this.isVisible(e))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function n1(t){try{return t.frameElement}catch{return null}}function i1(t){return!!(t.offsetWidth||t.offsetHeight||typeof t.getClientRects=="function"&&t.getClientRects().length)}function r1(t){let n=t.nodeName.toLowerCase();return n==="input"||n==="select"||n==="button"||n==="textarea"}function o1(t){return s1(t)&&t.type=="hidden"}function a1(t){return l1(t)&&t.hasAttribute("href")}function s1(t){return t.nodeName.toLowerCase()=="input"}function l1(t){return t.nodeName.toLowerCase()=="a"}function dx(t){if(!t.hasAttribute("tabindex")||t.tabIndex===void 0)return!1;let n=t.getAttribute("tabindex");return!!(n&&!isNaN(parseInt(n,10)))}function sx(t){if(!dx(t))return null;let n=parseInt(t.getAttribute("tabindex")||"",10);return isNaN(n)?-1:n}function c1(t){let n=t.nodeName.toLowerCase(),e=n==="input"&&t.type;return e==="text"||e==="password"||n==="select"||n==="textarea"}function d1(t){return o1(t)?!1:r1(t)||a1(t)||t.hasAttribute("contenteditable")||dx(t)}function u1(t){return t.ownerDocument&&t.ownerDocument.defaultView||window}var Iv=class{_element;_checker;_ngZone;_document;_injector;_startAnchor=null;_endAnchor=null;_hasAttached=!1;startAnchorListener=()=>this.focusLastTabbableElement();endAnchorListener=()=>this.focusFirstTabbableElement();get enabled(){return this._enabled}set enabled(n){this._enabled=n,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(n,this._startAnchor),this._toggleAnchorTabIndex(n,this._endAnchor))}_enabled=!0;constructor(n,e,i,r,o=!1,a){this._element=n,this._checker=e,this._ngZone=i,this._document=r,this._injector=a,o||this.attachAnchors()}destroy(){let n=this._startAnchor,e=this._endAnchor;n&&(n.removeEventListener("focus",this.startAnchorListener),n.remove()),e&&(e.removeEventListener("focus",this.endAnchorListener),e.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener("focus",this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener("focus",this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusInitialElement(n)))})}focusFirstTabbableElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusFirstTabbableElement(n)))})}focusLastTabbableElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusLastTabbableElement(n)))})}_getRegionBoundary(n){let e=this._element.querySelectorAll(`[cdk-focus-region-${n}], [cdkFocusRegion${n}], [cdk-focus-${n}]`);return n=="start"?e.length?e[0]:this._getFirstTabbableElement(this._element):e.length?e[e.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(n){let e=this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");if(e){if(!this._checker.isFocusable(e)){let i=this._getFirstTabbableElement(e);return i?.focus(n),!!i}return e.focus(n),!0}return this.focusFirstTabbableElement(n)}focusFirstTabbableElement(n){let e=this._getRegionBoundary("start");return e&&e.focus(n),!!e}focusLastTabbableElement(n){let e=this._getRegionBoundary("end");return e&&e.focus(n),!!e}hasAttached(){return this._hasAttached}_getFirstTabbableElement(n){if(this._checker.isFocusable(n)&&this._checker.isTabbable(n))return n;let e=n.children;for(let i=0;i<e.length;i++){let r=e[i].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(e[i]):null;if(r)return r}return null}_getLastTabbableElement(n){if(this._checker.isFocusable(n)&&this._checker.isTabbable(n))return n;let e=n.children;for(let i=e.length-1;i>=0;i--){let r=e[i].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(e[i]):null;if(r)return r}return null}_createAnchor(){let n=this._document.createElement("div");return this._toggleAnchorTabIndex(this._enabled,n),n.classList.add("cdk-visually-hidden"),n.classList.add("cdk-focus-trap-anchor"),n.setAttribute("aria-hidden","true"),n}_toggleAnchorTabIndex(n,e){n?e.setAttribute("tabindex","0"):e.removeAttribute("tabindex")}toggleAnchors(n){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(n,this._startAnchor),this._toggleAnchorTabIndex(n,this._endAnchor))}_executeOnStable(n){this._injector?$e(n,{injector:this._injector}):setTimeout(n)}},Sv=(()=>{class t{_checker=d(Mv);_ngZone=d(R);_document=d(j);_injector=d(F);constructor(){d(it).load(ga)}create(e,i=!1){return new Iv(e,this._checker,this._ngZone,this._document,i,this._injector)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var ux=new _("liveAnnouncerElement",{providedIn:"root",factory:()=>null}),fx=new _("LIVE_ANNOUNCER_DEFAULT_OPTIONS"),f1=0,wl=(()=>{class t{_ngZone=d(R);_defaultOptions=d(fx,{optional:!0});_liveElement;_document=d(j);_sanitizer=d(Xs);_previousTimeout;_currentPromise;_currentResolve;constructor(){let e=d(ux,{optional:!0});this._liveElement=e||this._createLiveElement()}announce(e,...i){let r=this._defaultOptions,o,a;return i.length===1&&typeof i[0]=="number"?a=i[0]:[o,a]=i,this.clear(),clearTimeout(this._previousTimeout),o||(o=r&&r.politeness?r.politeness:"polite"),a==null&&r&&(a=r.duration),this._liveElement.setAttribute("aria-live",o),this._liveElement.id&&this._exposeAnnouncerToModals(this._liveElement.id),this._ngZone.runOutsideAngular(()=>(this._currentPromise||(this._currentPromise=new Promise(s=>this._currentResolve=s)),clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{!e||typeof e=="string"?this._liveElement.textContent=e:nx(this._liveElement,e,this._sanitizer),typeof a=="number"&&(this._previousTimeout=setTimeout(()=>this.clear(),a)),this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0},100),this._currentPromise))}clear(){this._liveElement&&(this._liveElement.textContent="")}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement?.remove(),this._liveElement=null,this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0}_createLiveElement(){let e="cdk-live-announcer-element",i=this._document.getElementsByClassName(e),r=this._document.createElement("div");for(let o=0;o<i.length;o++)i[o].remove();return r.classList.add(e),r.classList.add("cdk-visually-hidden"),r.setAttribute("aria-atomic","true"),r.setAttribute("aria-live","polite"),r.id=`cdk-live-announcer-${f1++}`,this._document.body.appendChild(r),r}_exposeAnnouncerToModals(e){let i=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let r=0;r<i.length;r++){let o=i[r],a=o.getAttribute("aria-owns");a?a.indexOf(e)===-1&&o.setAttribute("aria-owns",a+" "+e):o.setAttribute("aria-owns",e)}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var lr=(function(t){return t[t.NONE=0]="NONE",t[t.BLACK_ON_WHITE=1]="BLACK_ON_WHITE",t[t.WHITE_ON_BLACK=2]="WHITE_ON_BLACK",t})(lr||{}),lx="cdk-high-contrast-black-on-white",cx="cdk-high-contrast-white-on-black",Ev="cdk-high-contrast-active",mx=(()=>{class t{_platform=d(ue);_hasCheckedHighContrastMode=!1;_document=d(j);_breakpointSubscription;constructor(){this._breakpointSubscription=d(yl).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return lr.NONE;let e=this._document.createElement("div");e.style.backgroundColor="rgb(1,2,3)",e.style.position="absolute",this._document.body.appendChild(e);let i=this._document.defaultView||window,r=i&&i.getComputedStyle?i.getComputedStyle(e):null,o=(r&&r.backgroundColor||"").replace(/ /g,"");switch(e.remove(),o){case"rgb(0,0,0)":case"rgb(45,50,54)":case"rgb(32,32,32)":return lr.WHITE_ON_BLACK;case"rgb(255,255,255)":case"rgb(255,250,239)":return lr.BLACK_ON_WHITE}return lr.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let e=this._document.body.classList;e.remove(Ev,lx,cx),this._hasCheckedHighContrastMode=!0;let i=this.getHighContrastMode();i===lr.BLACK_ON_WHITE?e.add(Ev,lx):i===lr.WHITE_ON_BLACK&&e.add(Ev,cx)}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Cl=(()=>{class t{constructor(){d(mx)._applyBodyHighContrastModeCssClasses()}static \u0275fac=function(i){return new(i||t)};static \u0275mod=U({type:t});static \u0275inj=L({imports:[ba]})}return t})();var m1=200,Zu=class{_letterKeyStream=new D;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new D;selectedItem=this._selectedItem;constructor(n,e){let i=typeof e?.debounceInterval=="number"?e.debounceInterval:m1;e?.skipPredicate&&(this._skipPredicateFn=e.skipPredicate),this.setItems(n),this._setupKeyHandler(i)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(n){this._selectedItemIndex=n}setItems(n){this._items=n}handleKey(n){let e=n.keyCode;n.key&&n.key.length===1?this._letterKeyStream.next(n.key.toLocaleUpperCase()):(e>=65&&e<=90||e>=48&&e<=57)&&this._letterKeyStream.next(String.fromCharCode(e))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(n){this._letterKeyStream.pipe(Ze(e=>this._pressedLetters.push(e)),pi(n),me(()=>this._pressedLetters.length>0),te(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(e=>{for(let i=1;i<this._items.length+1;i++){let r=(this._selectedItemIndex+i)%this._items.length,o=this._items[r];if(!this._skipPredicateFn?.(o)&&o.getLabel?.().toLocaleUpperCase().trim().indexOf(e)===0){this._selectedItem.next(o);break}}this._pressedLetters=[]})}};function bt(t,...n){return n.length?n.some(e=>t[e]):t.altKey||t.shiftKey||t.ctrlKey||t.metaKey}var ya=class{_items;_activeItemIndex=N(-1);_activeItem=N(null);_wrap=!1;_typeaheadSubscription=le.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=n=>n.disabled;constructor(n,e){this._items=n,n instanceof Di?this._itemChangesSubscription=n.changes.subscribe(i=>this._itemsChanged(i.toArray())):Jn(n)&&(this._effectRef=Kt(()=>this._itemsChanged(n()),{injector:e}))}tabOut=new D;change=new D;skipPredicate(n){return this._skipPredicateFn=n,this}withWrap(n=!0){return this._wrap=n,this}withVerticalOrientation(n=!0){return this._vertical=n,this}withHorizontalOrientation(n){return this._horizontal=n,this}withAllowedModifierKeys(n){return this._allowedModifierKeys=n,this}withTypeAhead(n=200){this._typeaheadSubscription.unsubscribe();let e=this._getItemsArray();return this._typeahead=new Zu(e,{debounceInterval:typeof n=="number"?n:void 0,skipPredicate:i=>this._skipPredicateFn(i)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(i=>{this.setActiveItem(i)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(n=!0){return this._homeAndEnd=n,this}withPageUpDown(n=!0,e=10){return this._pageUpAndDown={enabled:n,delta:e},this}setActiveItem(n){let e=this._activeItem();this.updateActiveItem(n),this._activeItem()!==e&&this.change.next(this._activeItemIndex())}onKeydown(n){let e=n.keyCode,r=["altKey","ctrlKey","metaKey","shiftKey"].every(o=>!n[o]||this._allowedModifierKeys.indexOf(o)>-1);switch(e){case 9:this.tabOut.next();return;case 40:if(this._vertical&&r){this.setNextItemActive();break}else return;case 38:if(this._vertical&&r){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&r){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&r){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&r){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&r){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(o>0?o:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()+this._pageUpAndDown.delta,a=this._getItemsArray().length;this._setActiveItemByIndex(o<a?o:a-1,-1);break}else return;default:(r||bt(n,"shiftKey"))&&this._typeahead?.handleKey(n);return}this._typeahead?.reset(),n.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(n){let e=this._getItemsArray(),i=typeof n=="number"?n:e.indexOf(n),r=e[i];this._activeItem.set(r??null),this._activeItemIndex.set(i),this._typeahead?.setCurrentSelectedItemIndex(i)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(n){this._wrap?this._setActiveInWrapMode(n):this._setActiveInDefaultMode(n)}_setActiveInWrapMode(n){let e=this._getItemsArray();for(let i=1;i<=e.length;i++){let r=(this._activeItemIndex()+n*i+e.length)%e.length,o=e[r];if(!this._skipPredicateFn(o)){this.setActiveItem(r);return}}}_setActiveInDefaultMode(n){this._setActiveItemByIndex(this._activeItemIndex()+n,n)}_setActiveItemByIndex(n,e){let i=this._getItemsArray();if(i[n]){for(;this._skipPredicateFn(i[n]);)if(n+=e,!i[n])return;this.setActiveItem(n)}}_getItemsArray(){return Jn(this._items)?this._items():this._items instanceof Di?this._items.toArray():this._items}_itemsChanged(n){this._typeahead?.setItems(n);let e=this._activeItem();if(e){let i=n.indexOf(e);i>-1&&i!==this._activeItemIndex()&&(this._activeItemIndex.set(i),this._typeahead?.setCurrentSelectedItemIndex(i))}}};var Dl=class extends ya{setActiveItem(n){this.activeItem&&this.activeItem.setInactiveStyles(),super.setActiveItem(n),this.activeItem&&this.activeItem.setActiveStyles()}};var xl=class extends ya{_origin="program";setFocusOrigin(n){return this._origin=n,this}setActiveItem(n){super.setActiveItem(n),this.activeItem&&this.activeItem.focus(this._origin)}};var Av={},qe=class t{_appId=d(ir);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(n,e=!1){return this._appId!=="ng"&&(n+=this._appId),Av.hasOwnProperty(n)||(Av[n]=0),`${n}${e?t._infix+"-":""}${Av[n]++}`}static \u0275fac=function(e){return new(e||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})};var _x=" ";function Nv(t,n,e){let i=Ku(t,n);e=e.trim(),!i.some(r=>r.trim()===e)&&(i.push(e),t.setAttribute(n,i.join(_x)))}function Xu(t,n,e){let i=Ku(t,n);e=e.trim();let r=i.filter(o=>o!==e);r.length?t.setAttribute(n,r.join(_x)):t.removeAttribute(n)}function Ku(t,n){return t.getAttribute(n)?.match(/\S+/g)??[]}var bx="cdk-describedby-message",Qu="cdk-describedby-host",Ov=0,yx=(()=>{class t{_platform=d(ue);_document=d(j);_messageRegistry=new Map;_messagesContainer=null;_id=`${Ov++}`;constructor(){d(it).load(ga),this._id=d(ir)+"-"+Ov++}describe(e,i,r){if(!this._canBeDescribed(e,i))return;let o=Rv(i,r);typeof i!="string"?(vx(i,this._id),this._messageRegistry.set(o,{messageElement:i,referenceCount:0})):this._messageRegistry.has(o)||this._createMessageElement(i,r),this._isElementDescribedByMessage(e,o)||this._addMessageReference(e,o)}removeDescription(e,i,r){if(!i||!this._isElementNode(e))return;let o=Rv(i,r);if(this._isElementDescribedByMessage(e,o)&&this._removeMessageReference(e,o),typeof i=="string"){let a=this._messageRegistry.get(o);a&&a.referenceCount===0&&this._deleteMessageElement(o)}this._messagesContainer?.childNodes.length===0&&(this._messagesContainer.remove(),this._messagesContainer=null)}ngOnDestroy(){let e=this._document.querySelectorAll(`[${Qu}="${this._id}"]`);for(let i=0;i<e.length;i++)this._removeCdkDescribedByReferenceIds(e[i]),e[i].removeAttribute(Qu);this._messagesContainer?.remove(),this._messagesContainer=null,this._messageRegistry.clear()}_createMessageElement(e,i){let r=this._document.createElement("div");vx(r,this._id),r.textContent=e,i&&r.setAttribute("role",i),this._createMessagesContainer(),this._messagesContainer.appendChild(r),this._messageRegistry.set(Rv(e,i),{messageElement:r,referenceCount:0})}_deleteMessageElement(e){this._messageRegistry.get(e)?.messageElement?.remove(),this._messageRegistry.delete(e)}_createMessagesContainer(){if(this._messagesContainer)return;let e="cdk-describedby-message-container",i=this._document.querySelectorAll(`.${e}[platform="server"]`);for(let o=0;o<i.length;o++)i[o].remove();let r=this._document.createElement("div");r.style.visibility="hidden",r.classList.add(e),r.classList.add("cdk-visually-hidden"),this._platform.isBrowser||r.setAttribute("platform","server"),this._document.body.appendChild(r),this._messagesContainer=r}_removeCdkDescribedByReferenceIds(e){let i=Ku(e,"aria-describedby").filter(r=>r.indexOf(bx)!=0);e.setAttribute("aria-describedby",i.join(" "))}_addMessageReference(e,i){let r=this._messageRegistry.get(i);Nv(e,"aria-describedby",r.messageElement.id),e.setAttribute(Qu,this._id),r.referenceCount++}_removeMessageReference(e,i){let r=this._messageRegistry.get(i);r.referenceCount--,Xu(e,"aria-describedby",r.messageElement.id),e.removeAttribute(Qu)}_isElementDescribedByMessage(e,i){let r=Ku(e,"aria-describedby"),o=this._messageRegistry.get(i),a=o&&o.messageElement.id;return!!a&&r.indexOf(a)!=-1}_canBeDescribed(e,i){if(!this._isElementNode(e))return!1;if(i&&typeof i=="object")return!0;let r=i==null?"":`${i}`.trim(),o=e.getAttribute("aria-label");return r?!o||o.trim()!==r:!1}_isElementNode(e){return e.nodeType===this._document.ELEMENT_NODE}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Rv(t,n){return typeof t=="string"?`${n||""}/${t}`:t}function vx(t,n){t.id||(t.id=`${bx}-${n}-${Ov++}`)}var Pn=(function(t){return t[t.NORMAL=0]="NORMAL",t[t.NEGATED=1]="NEGATED",t[t.INVERTED=2]="INVERTED",t})(Pn||{}),Ju,co;function ef(){if(co==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return co=!1,co;if(document.documentElement?.style&&"scrollBehavior"in document.documentElement.style)co=!0;else{let t=Element.prototype.scrollTo;t?co=!/\{\s*\[native code\]\s*\}/.test(t.toString()):co=!1}}return co}function wa(){if(typeof document!="object"||!document)return Pn.NORMAL;if(Ju==null){let t=document.createElement("div"),n=t.style;t.dir="rtl",n.width="1px",n.overflow="auto",n.visibility="hidden",n.pointerEvents="none",n.position="absolute";let e=document.createElement("div"),i=e.style;i.width="2px",i.height="1px",t.appendChild(e),document.body.appendChild(t),Ju=Pn.NORMAL,t.scrollLeft===0&&(t.scrollLeft=1,Ju=t.scrollLeft===0?Pn.NEGATED:Pn.INVERTED),t.remove()}return Ju}function Pv(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}var Ca,wx=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function Fv(){if(Ca)return Ca;if(typeof document!="object"||!document)return Ca=new Set(wx),Ca;let t=document.createElement("input");return Ca=new Set(wx.filter(n=>(t.setAttribute("type",n),t.type===n))),Ca}var Cx={XSmall:"(max-width: 599.98px)",Small:"(min-width: 600px) and (max-width: 959.98px)",Medium:"(min-width: 960px) and (max-width: 1279.98px)",Large:"(min-width: 1280px) and (max-width: 1919.98px)",XLarge:"(min-width: 1920px)",Handset:"(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)",Tablet:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",Web:"(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)",HandsetPortrait:"(max-width: 599.98px) and (orientation: portrait)",TabletPortrait:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)",WebPortrait:"(min-width: 840px) and (orientation: portrait)",HandsetLandscape:"(max-width: 959.98px) and (orientation: landscape)",TabletLandscape:"(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",WebLandscape:"(min-width: 1280px) and (orientation: landscape)"};var h1=new _("MATERIAL_ANIMATIONS"),Dx=null;function p1(){return d(h1,{optional:!0})?.animationsDisabled||d(Ps,{optional:!0})==="NoopAnimations"?"di-disabled":(Dx??=d(_a).matchMedia("(prefers-reduced-motion)").matches,Dx?"reduced-motion":"enabled")}function Ae(){return p1()!=="enabled"}function Ke(t){return t==null?"":typeof t=="string"?t:`${t}px`}function yt(t){return t!=null&&`${t}`!="false"}var yn=(function(t){return t[t.FADING_IN=0]="FADING_IN",t[t.VISIBLE=1]="VISIBLE",t[t.FADING_OUT=2]="FADING_OUT",t[t.HIDDEN=3]="HIDDEN",t})(yn||{}),Lv=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=yn.HIDDEN;constructor(n,e,i,r=!1){this._renderer=n,this.element=e,this.config=i,this._animationForciblyDisabledThroughCss=r}fadeOut(){this._renderer.fadeOutRipple(this)}},xx=pa({passive:!0,capture:!0}),jv=class{_events=new Map;addHandler(n,e,i,r){let o=this._events.get(e);if(o){let a=o.get(i);a?a.add(r):o.set(i,new Set([r]))}else this._events.set(e,new Map([[i,new Set([r])]])),n.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,xx)})}removeHandler(n,e,i){let r=this._events.get(n);if(!r)return;let o=r.get(e);o&&(o.delete(i),o.size===0&&r.delete(e),r.size===0&&(this._events.delete(n),document.removeEventListener(n,this._delegateEventHandler,xx)))}_delegateEventHandler=n=>{let e=St(n);e&&this._events.get(n.type)?.forEach((i,r)=>{(r===e||r.contains(e))&&i.forEach(o=>o.handleEvent(n))})}},El={enterDuration:225,exitDuration:150},g1=800,Ex=pa({passive:!0,capture:!0}),Ix=["mousedown","touchstart"],Mx=["mouseup","mouseleave","touchend","touchcancel"],v1=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=x({type:t,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(i,r){},styles:[`.mat-ripple {
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
`],encapsulation:2,changeDetection:0})}return t})(),uo=class t{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new jv;constructor(n,e,i,r,o){this._target=n,this._ngZone=e,this._platform=r,r.isBrowser&&(this._containerElement=$t(i)),o&&o.get(it).load(v1)}fadeInRipple(n,e,i={}){let r=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=y(y({},El),i.animation);i.centered&&(n=r.left+r.width/2,e=r.top+r.height/2);let a=i.radius||_1(n,e,r),s=n-r.left,l=e-r.top,c=o.enterDuration,u=document.createElement("div");u.classList.add("mat-ripple-element"),u.style.left=`${s-a}px`,u.style.top=`${l-a}px`,u.style.height=`${a*2}px`,u.style.width=`${a*2}px`,i.color!=null&&(u.style.backgroundColor=i.color),u.style.transitionDuration=`${c}ms`,this._containerElement.appendChild(u);let f=window.getComputedStyle(u),p=f.transitionProperty,g=f.transitionDuration,C=p==="none"||g==="0s"||g==="0s, 0s"||r.width===0&&r.height===0,I=new Lv(this,u,i,C);u.style.transform="scale3d(1, 1, 1)",I.state=yn.FADING_IN,i.persistent||(this._mostRecentTransientRipple=I);let k=null;return!C&&(c||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let H=()=>{k&&(k.fallbackTimer=null),clearTimeout(ut),this._finishRippleTransition(I)},be=()=>this._destroyRipple(I),ut=setTimeout(be,c+100);u.addEventListener("transitionend",H),u.addEventListener("transitioncancel",be),k={onTransitionEnd:H,onTransitionCancel:be,fallbackTimer:ut}}),this._activeRipples.set(I,k),(C||!c)&&this._finishRippleTransition(I),I}fadeOutRipple(n){if(n.state===yn.FADING_OUT||n.state===yn.HIDDEN)return;let e=n.element,i=y(y({},El),n.config.animation);e.style.transitionDuration=`${i.exitDuration}ms`,e.style.opacity="0",n.state=yn.FADING_OUT,(n._animationForciblyDisabledThroughCss||!i.exitDuration)&&this._finishRippleTransition(n)}fadeOutAll(){this._getActiveRipples().forEach(n=>n.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(n=>{n.config.persistent||n.fadeOut()})}setupTriggerEvents(n){let e=$t(n);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,Ix.forEach(i=>{t._eventManager.addHandler(this._ngZone,i,e,this)}))}handleEvent(n){n.type==="mousedown"?this._onMousedown(n):n.type==="touchstart"?this._onTouchStart(n):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{Mx.forEach(e=>{this._triggerElement.addEventListener(e,this,Ex)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(n){n.state===yn.FADING_IN?this._startFadeOutTransition(n):n.state===yn.FADING_OUT&&this._destroyRipple(n)}_startFadeOutTransition(n){let e=n===this._mostRecentTransientRipple,{persistent:i}=n.config;n.state=yn.VISIBLE,!i&&(!e||!this._isPointerDown)&&n.fadeOut()}_destroyRipple(n){let e=this._activeRipples.get(n)??null;this._activeRipples.delete(n),this._activeRipples.size||(this._containerRect=null),n===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),n.state=yn.HIDDEN,e!==null&&(n.element.removeEventListener("transitionend",e.onTransitionEnd),n.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),n.element.remove()}_onMousedown(n){let e=gl(n),i=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+g1;!this._target.rippleDisabled&&!e&&!i&&(this._isPointerDown=!0,this.fadeInRipple(n.clientX,n.clientY,this._target.rippleConfig))}_onTouchStart(n){if(!this._target.rippleDisabled&&!vl(n)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=n.changedTouches;if(e)for(let i=0;i<e.length;i++)this.fadeInRipple(e[i].clientX,e[i].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(n=>{let e=n.state===yn.VISIBLE||n.config.terminateOnPointerUp&&n.state===yn.FADING_IN;!n.config.persistent&&e&&n.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let n=this._triggerElement;n&&(Ix.forEach(e=>t._eventManager.removeHandler(e,n,this)),this._pointerUpEventsRegistered&&(Mx.forEach(e=>n.removeEventListener(e,this,Ex)),this._pointerUpEventsRegistered=!1))}};function _1(t,n,e){let i=Math.max(Math.abs(t-e.left),Math.abs(t-e.right)),r=Math.max(Math.abs(n-e.top),Math.abs(n-e.bottom));return Math.sqrt(i*i+r*r)}var Da=new _("mat-ripple-global-options"),Il=(()=>{class t{_elementRef=d(O);_animationsDisabled=Ae();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=d(R),i=d(ue),r=d(Da,{optional:!0}),o=d(F);this._globalOptions=r||{},this._rippleRenderer=new uo(this,e,this._elementRef,i,o)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:y(y(y({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,i=0,r){return typeof e=="number"?this._rippleRenderer.fadeInRipple(e,i,y(y({},this.rippleConfig),r)):this._rippleRenderer.fadeInRipple(0,0,y(y({},this.rippleConfig),e))}static \u0275fac=function(i){return new(i||t)};static \u0275dir=S({type:t,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(i,r){i&2&&W("mat-ripple-unbounded",r.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return t})();var b1={capture:!0},y1=["focus","mousedown","mouseenter","touchstart"],Bv="mat-ripple-loader-uninitialized",Vv="mat-ripple-loader-class-name",Sx="mat-ripple-loader-centered",tf="mat-ripple-loader-disabled",Tx=(()=>{class t{_document=d(j);_animationsDisabled=Ae();_globalRippleOptions=d(Da,{optional:!0});_platform=d(ue);_ngZone=d(R);_injector=d(F);_eventCleanups;_hosts=new Map;constructor(){let e=d(tt).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>y1.map(i=>e.listen(this._document,i,this._onInteraction,b1)))}ngOnDestroy(){let e=this._hosts.keys();for(let i of e)this.destroyRipple(i);this._eventCleanups.forEach(i=>i())}configureRipple(e,i){e.setAttribute(Bv,this._globalRippleOptions?.namespace??""),(i.className||!e.hasAttribute(Vv))&&e.setAttribute(Vv,i.className||""),i.centered&&e.setAttribute(Sx,""),i.disabled&&e.setAttribute(tf,"")}setDisabled(e,i){let r=this._hosts.get(e);r?(r.target.rippleDisabled=i,!i&&!r.hasSetUpEvents&&(r.hasSetUpEvents=!0,r.renderer.setupTriggerEvents(e))):i?e.setAttribute(tf,""):e.removeAttribute(tf)}_onInteraction=e=>{let i=St(e);if(i instanceof HTMLElement){let r=i.closest(`[${Bv}="${this._globalRippleOptions?.namespace??""}"]`);r&&this._createRipple(r)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let i=this._document.createElement("span");i.classList.add("mat-ripple",e.getAttribute(Vv)),e.append(i);let r=this._globalRippleOptions,o=this._animationsDisabled?0:r?.animation?.enterDuration??El.enterDuration,a=this._animationsDisabled?0:r?.animation?.exitDuration??El.exitDuration,s={rippleDisabled:this._animationsDisabled||r?.disabled||e.hasAttribute(tf),rippleConfig:{centered:e.hasAttribute(Sx),terminateOnPointerUp:r?.terminateOnPointerUp,animation:{enterDuration:o,exitDuration:a}}},l=new uo(s,this._ngZone,i,this._platform,this._injector),c=!s.rippleDisabled;c&&l.setupTriggerEvents(e),this._hosts.set(e,{target:s,renderer:l,hasSetUpEvents:c}),e.removeAttribute(Bv)}destroyRipple(e){let i=this._hosts.get(e);i&&(i.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var cr=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=x({type:t,selectors:[["structural-styles"]],decls:0,vars:0,template:function(i,r){},styles:[`.mat-focus-indicator {
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
`],encapsulation:2,changeDetection:0})}return t})();var w1=["mat-icon-button",""],C1=["*"],D1=new _("MAT_BUTTON_CONFIG");function kx(t){return t==null?void 0:ri(t)}var Hv=(()=>{class t{_elementRef=d(O);_ngZone=d(R);_animationsDisabled=Ae();_config=d(D1,{optional:!0});_focusMonitor=d(Oi);_cleanupClick;_renderer=d(Ee);_rippleLoader=d(Tx);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}constructor(){d(it).load(cr);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e="program",i){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,i):this._elementRef.nativeElement.focus(i)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static \u0275fac=function(i){return new(i||t)};static \u0275dir=S({type:t,hostAttrs:[1,"mat-mdc-button-base"],hostVars:13,hostBindings:function(i,r){i&2&&(oe("disabled",r._getDisabledAttribute())("aria-disabled",r._getAriaDisabled())("tabindex",r._getTabIndex()),Ut(r.color?"mat-"+r.color:""),W("mat-mdc-button-disabled",r.disabled)("mat-mdc-button-disabled-interactive",r.disabledInteractive)("mat-unthemed",!r.color)("_mat-animation-noopable",r._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",J],disabled:[2,"disabled","disabled",J],ariaDisabled:[2,"aria-disabled","ariaDisabled",J],disabledInteractive:[2,"disabledInteractive","disabledInteractive",J],tabIndex:[2,"tabIndex","tabIndex",kx],_tabindex:[2,"tabindex","_tabindex",kx]}})}return t})(),Uv=(()=>{class t extends Hv{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=x({type:t,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[ge],attrs:w1,ngContentSelectors:C1,decls:4,vars:0,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(i,r){i&1&&(Me(),mn(0,"span",0),X(1),mn(2,"span",1)(3,"span",2))},styles:[`.mat-mdc-icon-button {
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
`],encapsulation:2,changeDetection:0})}return t})();var xa=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=U({type:t});static \u0275inj=L({imports:[he]})}return t})();var x1=["matButton",""],E1=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]]],I1=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"];var Ax=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),Ea=(()=>{class t extends Hv{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let e=M1(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let i=this._elementRef.nativeElement.classList,r=this._appearance?Ax.get(this._appearance):null,o=Ax.get(e);r&&i.remove(...r),i.add(...o),this._appearance=e}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=x({type:t,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[ge],attrs:x1,ngContentSelectors:I1,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(i,r){i&1&&(Me(E1),mn(0,"span",0),X(1),gt(2,"span",1),X(3,1),Et(),X(4,2),mn(5,"span",2)(6,"span",3)),i&2&&W("mdc-button__ripple",!r._isFab)("mdc-fab__ripple",r._isFab)},styles:[`.mat-mdc-button-base {
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
`],encapsulation:2,changeDetection:0})}return t})();function M1(t){return t.hasAttribute("mat-raised-button")?"elevated":t.hasAttribute("mat-stroked-button")?"outlined":t.hasAttribute("mat-flat-button")?"filled":t.hasAttribute("mat-button")?"text":null}var fo=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=U({type:t});static \u0275inj=L({imports:[xa,he]})}return t})();var zv=class{_box;_destroyed=new D;_resizeSubject=new D;_resizeObserver;_elementObservables=new Map;constructor(n){this._box=n,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(n){return this._elementObservables.has(n)||this._elementObservables.set(n,new ee(e=>{let i=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(n,{box:this._box}),()=>{this._resizeObserver?.unobserve(n),i.unsubscribe(),this._elementObservables.delete(n)}}).pipe(me(e=>e.some(i=>i.target===n)),Sc({bufferSize:1,refCount:!0}),pe(this._destroyed))),this._elementObservables.get(n)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},nf=(()=>{class t{_cleanupErrorListener;_observers=new Map;_ngZone=d(R);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,i){let r=i?.box||"content-box";return this._observers.has(r)||this._observers.set(r,new zv(r)),this._observers.get(r).observe(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var S1=["notch"],T1=["matFormFieldNotchedOutline",""],k1=["*"],Ox=["iconPrefixContainer"],Nx=["textPrefixContainer"],Px=["iconSuffixContainer"],Fx=["textSuffixContainer"],A1=["textField"],R1=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],O1=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function N1(t,n){t&1&&z(0,"span",21)}function P1(t,n){if(t&1&&(m(0,"label",20),X(1,1),ie(2,N1,1,0,"span",21),h()),t&2){let e=G(2);Q("floating",e._shouldLabelFloat())("monitorResize",e._hasOutline())("id",e._labelId),oe("for",e._control.disableAutomaticLabeling?null:e._control.id),w(2),re(!e.hideRequiredMarker&&e._control.required?2:-1)}}function F1(t,n){if(t&1&&ie(0,P1,3,5,"label",20),t&2){let e=G();re(e._hasFloatingLabel()?0:-1)}}function L1(t,n){t&1&&z(0,"div",7)}function j1(t,n){}function B1(t,n){if(t&1&&pt(0,j1,0,0,"ng-template",13),t&2){G(2);let e=hn(1);Q("ngTemplateOutlet",e)}}function V1(t,n){if(t&1&&(m(0,"div",9),ie(1,B1,1,1,null,13),h()),t&2){let e=G();Q("matFormFieldNotchedOutlineOpen",e._shouldLabelFloat()),w(),re(e._forceDisplayInfixLabel()?-1:1)}}function H1(t,n){t&1&&(m(0,"div",10,2),X(2,2),h())}function U1(t,n){t&1&&(m(0,"div",11,3),X(2,3),h())}function z1(t,n){}function $1(t,n){if(t&1&&pt(0,z1,0,0,"ng-template",13),t&2){G();let e=hn(1);Q("ngTemplateOutlet",e)}}function W1(t,n){t&1&&(m(0,"div",14,4),X(2,4),h())}function G1(t,n){t&1&&(m(0,"div",15,5),X(2,5),h())}function q1(t,n){t&1&&z(0,"div",16)}function Y1(t,n){t&1&&(m(0,"div",18),X(1,6),h())}function Z1(t,n){if(t&1&&(m(0,"mat-hint",22),v(1),h()),t&2){let e=G(2);Q("id",e._hintLabelId),w(),_e(e.hintLabel)}}function Q1(t,n){if(t&1&&(m(0,"div",19),ie(1,Z1,2,2,"mat-hint",22),X(2,7),z(3,"div",23),X(4,8),h()),t&2){let e=G();w(),re(e.hintLabel?1:-1)}}var dr=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=S({type:t,selectors:[["mat-label"]]})}return t})(),K1=new _("MatError");var of=(()=>{class t{align="start";id=d(qe).getId("mat-mdc-hint-");static \u0275fac=function(i){return new(i||t)};static \u0275dir=S({type:t,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(i,r){i&2&&(ei("id",r.id),oe("align",null),W("mat-mdc-form-field-hint-end",r.align==="end"))},inputs:{align:"align",id:"id"}})}return t})(),zx=new _("MatPrefix"),af=(()=>{class t{set _isTextSelector(e){this._isText=!0}_isText=!1;static \u0275fac=function(i){return new(i||t)};static \u0275dir=S({type:t,selectors:[["","matPrefix",""],["","matIconPrefix",""],["","matTextPrefix",""]],inputs:{_isTextSelector:[0,"matTextPrefix","_isTextSelector"]},features:[Pe([{provide:zx,useExisting:t}])]})}return t})(),$x=new _("MatSuffix"),sf=(()=>{class t{set _isTextSelector(e){this._isText=!0}_isText=!1;static \u0275fac=function(i){return new(i||t)};static \u0275dir=S({type:t,selectors:[["","matSuffix",""],["","matIconSuffix",""],["","matTextSuffix",""]],inputs:{_isTextSelector:[0,"matTextSuffix","_isTextSelector"]},features:[Pe([{provide:$x,useExisting:t}])]})}return t})(),Wx=new _("FloatingLabelParent"),Lx=(()=>{class t{_elementRef=d(O);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=d(nf);_ngZone=d(R);_parent=d(Wx);_resizeSubscription=new le;constructor(){}ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return X1(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(i){return new(i||t)};static \u0275dir=S({type:t,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(i,r){i&2&&W("mdc-floating-label--float-above",r.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return t})();function X1(t){let n=t;if(n.offsetParent!==null)return n.scrollWidth;let e=n.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let i=e.scrollWidth;return e.remove(),i}var jx="mdc-line-ripple--active",rf="mdc-line-ripple--deactivating",Bx=(()=>{class t{_elementRef=d(O);_cleanupTransitionEnd;constructor(){let e=d(R),i=d(Ee);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=i.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(rf),e.add(jx)}deactivate(){this._elementRef.nativeElement.classList.add(rf)}_handleTransitionEnd=e=>{let i=this._elementRef.nativeElement.classList,r=i.contains(rf);e.propertyName==="opacity"&&r&&i.remove(jx,rf)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=S({type:t,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return t})(),Vx=(()=>{class t{_elementRef=d(O);_ngZone=d(R);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,i=e.querySelector(".mdc-floating-label");i?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(i.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>i.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){let i=this._notch.nativeElement;!this.open||!e?i.style.width="":i.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=x({type:t,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(i,r){if(i&1&&Fe(S1,5),i&2){let o;B(o=V())&&(r._notch=o.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(i,r){i&2&&W("mdc-notched-outline--notched",r.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},attrs:T1,ngContentSelectors:k1,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(i,r){i&1&&(Me(),mn(0,"div",1),gt(1,"div",2,0),X(3),Et(),mn(4,"div",3))},encapsulation:2,changeDetection:0})}return t})(),Ml=(()=>{class t{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(i){return new(i||t)};static \u0275dir=S({type:t})}return t})();var Sl=new _("MatFormField"),J1=new _("MAT_FORM_FIELD_DEFAULT_OPTIONS"),Hx="fill",eP="auto",Ux="fixed",tP="translateY(-50%)",nn=(()=>{class t{_elementRef=d(O);_changeDetectorRef=d(Ne);_platform=d(ue);_idGenerator=d(qe);_ngZone=d(R);_defaults=d(J1,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=An("iconPrefixContainer");_textPrefixContainerSignal=An("textPrefixContainer");_iconSuffixContainerSignal=An("iconSuffixContainer");_textSuffixContainerSignal=An("textSuffixContainer");_prefixSuffixContainers=nt(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=aC(dr);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=yt(e)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||eP}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let i=e||this._defaults?.appearance||Hx;this._appearanceSignal.set(i)}_appearanceSignal=N(Hx);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||Ux}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||Ux}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new D;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=Ae();constructor(){let e=this._defaults,i=d(dt);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),Kt(()=>this._currentDirection=i.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=nt(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){let i=this._control,r="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(r+e.controlType),i.controlType&&this._elementRef.nativeElement.classList.add(r+i.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=i.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=i.stateChanges.pipe(rt([void 0,void 0]),te(()=>[i.errorState,i.userAriaDescribedBy]),Mc(),me(([[o,a],[s,l]])=>o!==s||a!==l)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),i.ngControl&&i.ngControl.valueChanges&&(this._valueChanges=i.ngControl.valueChanges.pipe(pe(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),Lt(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){dC({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=nt(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let i=this._control?this._control.ngControl:null;return i&&i[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let o=this._hintChildren?this._hintChildren.find(s=>s.align==="start"):null,a=this._hintChildren?this._hintChildren.find(s=>s.align==="end"):null;o?e.push(o.id):this._hintLabel&&e.push(this._hintLabelId),a&&e.push(a.id)}else this._errorChildren&&e.push(...this._errorChildren.map(o=>o.id));let i=this._control.describedByIds,r;if(i){let o=this._describedByIds||e;r=e.concat(i.filter(a=>a&&!o.includes(a)))}else r=e;this._control.setDescribedByIds(r),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,i=this._textPrefixContainer?.nativeElement,r=this._iconSuffixContainer?.nativeElement,o=this._textSuffixContainer?.nativeElement,a=e?.getBoundingClientRect().width??0,s=i?.getBoundingClientRect().width??0,l=r?.getBoundingClientRect().width??0,c=o?.getBoundingClientRect().width??0,u=this._currentDirection==="rtl"?"-1":"1",f=`${a+s}px`,g=`calc(${u} * (${f} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,C=`var(--mat-mdc-form-field-label-transform, ${tP} translateX(${g}))`,I=a+s+l+c;return[C,I]}_writeOutlinedLabelStyles(e){if(e!==null){let[i,r]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=i),r!==null&&this._notchedOutline?._setMaxWidth(r)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let i=e.getRootNode();return i&&i!==e}return document.documentElement.contains(e)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=x({type:t,selectors:[["mat-form-field"]],contentQueries:function(i,r,o){if(i&1&&(Zd(o,r._labelChild,dr,5),Mt(o,Ml,5)(o,zx,5)(o,$x,5)(o,K1,5)(o,of,5)),i&2){ni();let a;B(a=V())&&(r._formFieldControl=a.first),B(a=V())&&(r._prefixChildren=a),B(a=V())&&(r._suffixChildren=a),B(a=V())&&(r._errorChildren=a),B(a=V())&&(r._hintChildren=a)}},viewQuery:function(i,r){if(i&1&&(ti(r._iconPrefixContainerSignal,Ox,5)(r._textPrefixContainerSignal,Nx,5)(r._iconSuffixContainerSignal,Px,5)(r._textSuffixContainerSignal,Fx,5),Fe(A1,5)(Ox,5)(Nx,5)(Px,5)(Fx,5)(Lx,5)(Vx,5)(Bx,5)),i&2){ni(4);let o;B(o=V())&&(r._textField=o.first),B(o=V())&&(r._iconPrefixContainer=o.first),B(o=V())&&(r._textPrefixContainer=o.first),B(o=V())&&(r._iconSuffixContainer=o.first),B(o=V())&&(r._textSuffixContainer=o.first),B(o=V())&&(r._floatingLabel=o.first),B(o=V())&&(r._notchedOutline=o.first),B(o=V())&&(r._lineRipple=o.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(i,r){i&2&&W("mat-mdc-form-field-label-always-float",r._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",r._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",r._hasIconSuffix)("mat-form-field-invalid",r._control.errorState)("mat-form-field-disabled",r._control.disabled)("mat-form-field-autofilled",r._control.autofilled)("mat-form-field-appearance-fill",r.appearance=="fill")("mat-form-field-appearance-outline",r.appearance=="outline")("mat-form-field-hide-placeholder",r._hasFloatingLabel()&&!r._shouldLabelFloat())("mat-primary",r.color!=="accent"&&r.color!=="warn")("mat-accent",r.color==="accent")("mat-warn",r.color==="warn")("ng-untouched",r._shouldForward("untouched"))("ng-touched",r._shouldForward("touched"))("ng-pristine",r._shouldForward("pristine"))("ng-dirty",r._shouldForward("dirty"))("ng-valid",r._shouldForward("valid"))("ng-invalid",r._shouldForward("invalid"))("ng-pending",r._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[Pe([{provide:Sl,useExisting:t},{provide:Wx,useExisting:t}])],ngContentSelectors:O1,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(i,r){if(i&1&&(Me(R1),pt(0,F1,1,1,"ng-template",null,0,Qd),m(2,"div",6,1),T("click",function(a){return r._control.onContainerClick(a)}),ie(4,L1,1,0,"div",7),m(5,"div",8),ie(6,V1,2,2,"div",9),ie(7,H1,3,0,"div",10),ie(8,U1,3,0,"div",11),m(9,"div",12),ie(10,$1,1,1,null,13),X(11),h(),ie(12,W1,3,0,"div",14),ie(13,G1,3,0,"div",15),h(),ie(14,q1,1,0,"div",16),h(),m(15,"div",17),ie(16,Y1,2,0,"div",18)(17,Q1,5,1,"div",19),h()),i&2){let o;w(2),W("mdc-text-field--filled",!r._hasOutline())("mdc-text-field--outlined",r._hasOutline())("mdc-text-field--no-label",!r._hasFloatingLabel())("mdc-text-field--disabled",r._control.disabled)("mdc-text-field--invalid",r._control.errorState),w(2),re(!r._hasOutline()&&!r._control.disabled?4:-1),w(2),re(r._hasOutline()?6:-1),w(),re(r._hasIconPrefix?7:-1),w(),re(r._hasTextPrefix?8:-1),w(2),re(!r._hasOutline()||r._forceDisplayInfixLabel()?10:-1),w(2),re(r._hasTextSuffix?12:-1),w(),re(r._hasIconSuffix?13:-1),w(),re(r._hasOutline()?-1:14),w(),W("mat-mdc-form-field-subscript-dynamic-size",r.subscriptSizing==="dynamic");let a=r._getSubscriptMessageType();w(),re((o=a)==="error"?16:o==="hint"?17:-1)}},dependencies:[Lx,Vx,bg,Bx,of],styles:[`.mdc-text-field {
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
`],encapsulation:2,changeDetection:0})}return t})();var rn=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=U({type:t});static \u0275inj=L({imports:[ba,nn,he]})}return t})();function Gx(t){return Error(`Unable to find icon with the name "${t}"`)}function iP(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function qx(t){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${t}".`)}function Yx(t){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${t}".`)}var Ni=class{url;svgText;options;svgElement=null;constructor(n,e,i){this.url=n,this.svgText=e,this.options=i}},Qx=(()=>{class t{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(e,i,r,o){this._httpClient=e,this._sanitizer=i,this._errorHandler=o,this._document=r}addSvgIcon(e,i,r){return this.addSvgIconInNamespace("",e,i,r)}addSvgIconLiteral(e,i,r){return this.addSvgIconLiteralInNamespace("",e,i,r)}addSvgIconInNamespace(e,i,r,o){return this._addSvgIconConfig(e,i,new Ni(r,null,o))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,i,r,o){let a=this._sanitizer.sanitize(xt.HTML,r);if(!a)throw Yx(r);let s=so(a);return this._addSvgIconConfig(e,i,new Ni("",s,o))}addSvgIconSet(e,i){return this.addSvgIconSetInNamespace("",e,i)}addSvgIconSetLiteral(e,i){return this.addSvgIconSetLiteralInNamespace("",e,i)}addSvgIconSetInNamespace(e,i,r){return this._addSvgIconSetConfig(e,new Ni(i,null,r))}addSvgIconSetLiteralInNamespace(e,i,r){let o=this._sanitizer.sanitize(xt.HTML,i);if(!o)throw Yx(i);let a=so(o);return this._addSvgIconSetConfig(e,new Ni("",a,r))}registerFontClassAlias(e,i=e){return this._fontCssClassesByAlias.set(e,i),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(e){let i=this._sanitizer.sanitize(xt.RESOURCE_URL,e);if(!i)throw qx(e);let r=this._cachedIconsByUrl.get(i);return r?$(lf(r)):this._loadSvgIconFromConfig(new Ni(e,null)).pipe(Ze(o=>this._cachedIconsByUrl.set(i,o)),te(o=>lf(o)))}getNamedSvgIcon(e,i=""){let r=Zx(i,e),o=this._svgIconConfigs.get(r);if(o)return this._getSvgFromConfig(o);if(o=this._getIconConfigFromResolvers(i,e),o)return this._svgIconConfigs.set(r,o),this._getSvgFromConfig(o);let a=this._iconSetConfigs.get(i);return a?this._getSvgFromIconSetConfigs(e,a):Tr(Gx(r))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?$(lf(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe(te(i=>lf(i)))}_getSvgFromIconSetConfigs(e,i){let r=this._extractIconWithNameFromAnySet(e,i);if(r)return $(r);let o=i.filter(a=>!a.svgText).map(a=>this._loadSvgIconSetFromConfig(a).pipe(zi(s=>{let c=`Loading icon set URL: ${this._sanitizer.sanitize(xt.RESOURCE_URL,a.url)} failed: ${s.message}`;return this._errorHandler.handleError(new Error(c)),$(null)})));return rs(o).pipe(te(()=>{let a=this._extractIconWithNameFromAnySet(e,i);if(!a)throw Gx(e);return a}))}_extractIconWithNameFromAnySet(e,i){for(let r=i.length-1;r>=0;r--){let o=i[r];if(o.svgText&&o.svgText.toString().indexOf(e)>-1){let a=this._svgElementFromConfig(o),s=this._extractSvgIconFromSet(a,e,o.options);if(s)return s}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe(Ze(i=>e.svgText=i),te(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?$(null):this._fetchIcon(e).pipe(Ze(i=>e.svgText=i))}_extractSvgIconFromSet(e,i,r){let o=e.querySelector(`[id="${i}"]`);if(!o)return null;let a=o.cloneNode(!0);if(a.removeAttribute("id"),a.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(a,r);if(a.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(a),r);let s=this._svgElementFromString(so("<svg></svg>"));return s.appendChild(a),this._setSvgAttributes(s,r)}_svgElementFromString(e){let i=this._document.createElement("DIV");i.innerHTML=e;let r=i.querySelector("svg");if(!r)throw Error("<svg> tag not found");return r}_toSvgElement(e){let i=this._svgElementFromString(so("<svg></svg>")),r=e.attributes;for(let o=0;o<r.length;o++){let{name:a,value:s}=r[o];a!=="id"&&i.setAttribute(a,s)}for(let o=0;o<e.childNodes.length;o++)e.childNodes[o].nodeType===this._document.ELEMENT_NODE&&i.appendChild(e.childNodes[o].cloneNode(!0));return i}_setSvgAttributes(e,i){return e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),i&&i.viewBox&&e.setAttribute("viewBox",i.viewBox),e}_fetchIcon(e){let{url:i,options:r}=e,o=r?.withCredentials??!1;if(!this._httpClient)throw iP();if(i==null)throw Error(`Cannot fetch icon from URL "${i}".`);let a=this._sanitizer.sanitize(xt.RESOURCE_URL,i);if(!a)throw qx(i);let s=this._inProgressUrlFetches.get(a);if(s)return s;let l=this._httpClient.get(a,{responseType:"text",withCredentials:o}).pipe(te(c=>so(c)),Wi(()=>this._inProgressUrlFetches.delete(a)),as());return this._inProgressUrlFetches.set(a,l),l}_addSvgIconConfig(e,i,r){return this._svgIconConfigs.set(Zx(e,i),r),this}_addSvgIconSetConfig(e,i){let r=this._iconSetConfigs.get(e);return r?r.push(i):this._iconSetConfigs.set(e,[i]),this}_svgElementFromConfig(e){if(!e.svgElement){let i=this._svgElementFromString(e.svgText);this._setSvgAttributes(i,e.options),e.svgElement=i}return e.svgElement}_getIconConfigFromResolvers(e,i){for(let r=0;r<this._resolvers.length;r++){let o=this._resolvers[r](i,e);if(o)return rP(o)?new Ni(o.url,null,o.options):new Ni(o,null)}}static \u0275fac=function(i){return new(i||t)(P(Ot,8),P(Xs),P(j,8),P(At))};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function lf(t){return t.cloneNode(!0)}function Zx(t,n){return t+":"+n}function rP(t){return!!(t.url&&t.options)}var oP=["*"],aP=new _("MAT_ICON_DEFAULT_OPTIONS"),sP=new _("mat-icon-location",{providedIn:"root",factory:()=>{let t=d(j),n=t?t.location:null;return{getPathname:()=>n?n.pathname+n.search:""}}}),Kx=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],lP=Kx.map(t=>`[${t}]`).join(", "),cP=/^url\(['"]?#(.*?)['"]?\)$/,ci=(()=>{class t{_elementRef=d(O);_iconRegistry=d(Qx);_location=d(sP);_errorHandler=d(At);_defaultColor;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(e){let i=this._cleanupFontValue(e);i!==this._fontSet&&(this._fontSet=i,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(e){let i=this._cleanupFontValue(e);i!==this._fontIcon&&(this._fontIcon=i,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=le.EMPTY;constructor(){let e=d(new rr("aria-hidden"),{optional:!0}),i=d(aP,{optional:!0});i&&(i.color&&(this.color=this._defaultColor=i.color),i.fontSet&&(this.fontSet=i.fontSet)),e||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(e){if(!e)return["",""];let i=e.split(":");switch(i.length){case 1:return["",i[0]];case 2:return i;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let i=this._location.getPathname();i!==this._previousPath&&(this._previousPath=i,this._prependPathToReferences(i))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();let i=this._location.getPathname();this._previousPath=i,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(i),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){let e=this._elementRef.nativeElement,i=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();i--;){let r=e.childNodes[i];(r.nodeType!==1||r.nodeName.toLowerCase()==="svg")&&r.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,i=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(r=>r.length>0);this._previousFontSetClass.forEach(r=>e.classList.remove(r)),i.forEach(r=>e.classList.add(r)),this._previousFontSetClass=i,this.fontIcon!==this._previousFontIconClass&&!i.includes("mat-ligature-font")&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return typeof e=="string"?e.trim().split(" ")[0]:e}_prependPathToReferences(e){let i=this._elementsWithExternalReferences;i&&i.forEach((r,o)=>{r.forEach(a=>{o.setAttribute(a.name,`url('${e}#${a.value}')`)})})}_cacheChildrenWithExternalReferences(e){let i=e.querySelectorAll(lP),r=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let o=0;o<i.length;o++)Kx.forEach(a=>{let s=i[o],l=s.getAttribute(a),c=l?l.match(cP):null;if(c){let u=r.get(s);u||(u=[],r.set(s,u)),u.push({name:a,value:c[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[i,r]=this._splitIconName(e);i&&(this._svgNamespace=i),r&&(this._svgName=r),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(r,i).pipe(Ye(1)).subscribe(o=>this._setSvgElement(o),o=>{let a=`Error retrieving icon ${i}:${r}! ${o.message}`;this._errorHandler.handleError(new Error(a))})}}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=x({type:t,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(i,r){i&2&&(oe("data-mat-icon-type",r._usingFontIcon()?"font":"svg")("data-mat-icon-name",r._svgName||r.fontIcon)("data-mat-icon-namespace",r._svgNamespace||r.fontSet)("fontIcon",r._usingFontIcon()?r.fontIcon:null),Ut(r.color?"mat-"+r.color:""),W("mat-icon-inline",r.inline)("mat-icon-no-color",r.color!=="primary"&&r.color!=="accent"&&r.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",J],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:oP,decls:1,vars:0,template:function(i,r){i&1&&(Me(),X(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
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
`],encapsulation:2,changeDetection:0})}return t})(),Ia=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=U({type:t});static \u0275inj=L({imports:[he]})}return t})();var dP=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=x({type:t,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(i,r){},styles:[`textarea.cdk-textarea-autosize {
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
`],encapsulation:2,changeDetection:0})}return t})(),uP={passive:!0},Xx=(()=>{class t{_platform=d(ue);_ngZone=d(R);_renderer=d(tt).createRenderer(null,null);_styleLoader=d(it);_monitoredElements=new Map;constructor(){}monitor(e){if(!this._platform.isBrowser)return je;this._styleLoader.load(dP);let i=$t(e),r=this._monitoredElements.get(i);if(r)return r.subject;let o=new D,a="cdk-text-field-autofilled",s=c=>{c.animationName==="cdk-text-field-autofill-start"&&!i.classList.contains(a)?(i.classList.add(a),this._ngZone.run(()=>o.next({target:c.target,isAutofilled:!0}))):c.animationName==="cdk-text-field-autofill-end"&&i.classList.contains(a)&&(i.classList.remove(a),this._ngZone.run(()=>o.next({target:c.target,isAutofilled:!1})))},l=this._ngZone.runOutsideAngular(()=>(i.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(i,"animationstart",s,uP)));return this._monitoredElements.set(i,{subject:o,unlisten:l}),o}stopMonitoring(e){let i=$t(e),r=this._monitoredElements.get(i);r&&(r.unlisten(),r.subject.complete(),i.classList.remove("cdk-text-field-autofill-monitored"),i.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(i))}ngOnDestroy(){this._monitoredElements.forEach((e,i)=>this.stopMonitoring(i))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Jx=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=U({type:t});static \u0275inj=L({})}return t})();var sE=(()=>{class t{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,i){this._renderer=e,this._elementRef=i}setProperty(e,i){this._renderer.setProperty(this._elementRef.nativeElement,e,i)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(i){return new(i||t)(Ie(Ee),Ie(O))};static \u0275dir=S({type:t})}return t})(),fP=(()=>{class t extends sE{static \u0275fac=(()=>{let e;return function(r){return(e||(e=ze(t)))(r||t)}})();static \u0275dir=S({type:t,features:[ge]})}return t})(),lE=new _("");var mP={provide:lE,useExisting:xn(()=>fr),multi:!0};function hP(){let t=pn()?pn().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var pP=new _(""),fr=(()=>{class t extends sE{_compositionMode;_composing=!1;constructor(e,i,r){super(e,i),this._compositionMode=r,this._compositionMode==null&&(this._compositionMode=!hP())}writeValue(e){let i=e??"";this.setProperty("value",i)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(i){return new(i||t)(Ie(Ee),Ie(O),Ie(pP,8))};static \u0275dir=S({type:t,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(i,r){i&1&&T("input",function(a){return r._handleInput(a.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(a){return r._compositionEnd(a.target.value)})},standalone:!1,features:[Pe([mP]),ge]})}return t})();function Yv(t){return t==null||Zv(t)===0}function Zv(t){return t==null?null:Array.isArray(t)||typeof t=="string"?t.length:t instanceof Set?t.size:null}var Qv=new _(""),Kv=new _(""),gP=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,Ta=class{static min(n){return vP(n)}static max(n){return _P(n)}static required(n){return bP(n)}static requiredTrue(n){return yP(n)}static email(n){return wP(n)}static minLength(n){return CP(n)}static maxLength(n){return DP(n)}static pattern(n){return xP(n)}static nullValidator(n){return cE()}static compose(n){return pE(n)}static composeAsync(n){return gE(n)}};function vP(t){return n=>{if(n.value==null||t==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e<t?{min:{min:t,actual:n.value}}:null}}function _P(t){return n=>{if(n.value==null||t==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e>t?{max:{max:t,actual:n.value}}:null}}function bP(t){return Yv(t.value)?{required:!0}:null}function yP(t){return t.value===!0?null:{required:!0}}function wP(t){return Yv(t.value)||gP.test(t.value)?null:{email:!0}}function CP(t){return n=>{let e=n.value?.length??Zv(n.value);return e===null||e===0?null:e<t?{minlength:{requiredLength:t,actualLength:e}}:null}}function DP(t){return n=>{let e=n.value?.length??Zv(n.value);return e!==null&&e>t?{maxlength:{requiredLength:t,actualLength:e}}:null}}function xP(t){if(!t)return cE;let n,e;return typeof t=="string"?(e="",t.charAt(0)!=="^"&&(e+="^"),e+=t,t.charAt(t.length-1)!=="$"&&(e+="$"),n=new RegExp(e)):(e=t.toString(),n=t),i=>{if(Yv(i.value))return null;let r=i.value;return n.test(r)?null:{pattern:{requiredPattern:e,actualValue:r}}}}function cE(t){return null}function dE(t){return t!=null}function uE(t){return Ii(t)?Te(t):t}function fE(t){let n={};return t.forEach(e=>{n=e!=null?y(y({},n),e):n}),Object.keys(n).length===0?null:n}function mE(t,n){return n.map(e=>e(t))}function EP(t){return!t.validate}function hE(t){return t.map(n=>EP(n)?n:e=>n.validate(e))}function pE(t){if(!t)return null;let n=t.filter(dE);return n.length==0?null:function(e){return fE(mE(e,n))}}function Xv(t){return t!=null?pE(hE(t)):null}function gE(t){if(!t)return null;let n=t.filter(dE);return n.length==0?null:function(e){let i=mE(e,n).map(uE);return rs(i).pipe(te(fE))}}function Jv(t){return t!=null?gE(hE(t)):null}function eE(t,n){return t===null?[n]:Array.isArray(t)?[...t,n]:[t,n]}function vE(t){return t._rawValidators}function _E(t){return t._rawAsyncValidators}function Gv(t){return t?Array.isArray(t)?t:[t]:[]}function df(t,n){return Array.isArray(t)?t.includes(n):t===n}function tE(t,n){let e=Gv(n);return Gv(t).forEach(r=>{df(e,r)||e.push(r)}),e}function nE(t,n){return Gv(n).filter(e=>!df(t,e))}var uf=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(n){this._rawValidators=n||[],this._composedValidatorFn=Xv(this._rawValidators)}_setAsyncValidators(n){this._rawAsyncValidators=n||[],this._composedAsyncValidatorFn=Jv(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(n){this._onDestroyCallbacks.push(n)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(n=>n()),this._onDestroyCallbacks=[]}reset(n=void 0){this.control?.reset(n)}hasError(n,e){return this.control?this.control.hasError(n,e):!1}getError(n,e){return this.control?this.control.getError(n,e):null}},mo=class extends uf{name;get formDirective(){return null}get path(){return null}},Pi=class extends uf{_parent=null;name=null;valueAccessor=null},qv=class{_cd;constructor(n){this._cd=n}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var ka=(()=>{class t extends qv{constructor(e){super(e)}static \u0275fac=function(i){return new(i||t)(Ie(Pi,2))};static \u0275dir=S({type:t,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(i,r){i&2&&W("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},standalone:!1,features:[ge]})}return t})();var Tl="VALID",cf="INVALID",Ma="PENDING",kl="DISABLED",ur=class{},ff=class extends ur{value;source;constructor(n,e){super(),this.value=n,this.source=e}},Rl=class extends ur{pristine;source;constructor(n,e){super(),this.pristine=n,this.source=e}},Ol=class extends ur{touched;source;constructor(n,e){super(),this.touched=n,this.source=e}},Sa=class extends ur{status;source;constructor(n,e){super(),this.status=n,this.source=e}},mf=class extends ur{source;constructor(n){super(),this.source=n}},hf=class extends ur{source;constructor(n){super(),this.source=n}};function bE(t){return(yf(t)?t.validators:t)||null}function IP(t){return Array.isArray(t)?Xv(t):t||null}function yE(t,n){return(yf(n)?n.asyncValidators:t)||null}function MP(t){return Array.isArray(t)?Jv(t):t||null}function yf(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function SP(t,n,e){let i=t.controls;if(!(n?Object.keys(i):i).length)throw new M(1e3,"");if(!i[e])throw new M(1001,"")}function TP(t,n,e){t._forEachChild((i,r)=>{if(e[r]===void 0)throw new M(1002,"")})}var pf=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(n,e){this._assignValidators(n),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(n){this._rawValidators=this._composedValidatorFn=n}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(n){this._rawAsyncValidators=this._composedAsyncValidatorFn=n}get parent(){return this._parent}get status(){return Ge(this.statusReactive)}set status(n){Ge(()=>this.statusReactive.set(n))}_status=nt(()=>this.statusReactive());statusReactive=N(void 0);get valid(){return this.status===Tl}get invalid(){return this.status===cf}get pending(){return this.status===Ma}get disabled(){return this.status===kl}get enabled(){return this.status!==kl}errors;get pristine(){return Ge(this.pristineReactive)}set pristine(n){Ge(()=>this.pristineReactive.set(n))}_pristine=nt(()=>this.pristineReactive());pristineReactive=N(!0);get dirty(){return!this.pristine}get touched(){return Ge(this.touchedReactive)}set touched(n){Ge(()=>this.touchedReactive.set(n))}_touched=nt(()=>this.touchedReactive());touchedReactive=N(!1);get untouched(){return!this.touched}_events=new D;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(n){this._assignValidators(n)}setAsyncValidators(n){this._assignAsyncValidators(n)}addValidators(n){this.setValidators(tE(n,this._rawValidators))}addAsyncValidators(n){this.setAsyncValidators(tE(n,this._rawAsyncValidators))}removeValidators(n){this.setValidators(nE(n,this._rawValidators))}removeAsyncValidators(n){this.setAsyncValidators(nE(n,this._rawAsyncValidators))}hasValidator(n){return df(this._rawValidators,n)}hasAsyncValidator(n){return df(this._rawAsyncValidators,n)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(n={}){let e=this.touched===!1;this.touched=!0;let i=n.sourceControl??this;n.onlySelf||this._parent?.markAsTouched(K(y({},n),{sourceControl:i})),e&&n.emitEvent!==!1&&this._events.next(new Ol(!0,i))}markAllAsDirty(n={}){this.markAsDirty({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(n))}markAllAsTouched(n={}){this.markAsTouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(n))}markAsUntouched(n={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let i=n.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:i})}),n.onlySelf||this._parent?._updateTouched(n,i),e&&n.emitEvent!==!1&&this._events.next(new Ol(!1,i))}markAsDirty(n={}){let e=this.pristine===!0;this.pristine=!1;let i=n.sourceControl??this;n.onlySelf||this._parent?.markAsDirty(K(y({},n),{sourceControl:i})),e&&n.emitEvent!==!1&&this._events.next(new Rl(!1,i))}markAsPristine(n={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let i=n.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:n.emitEvent})}),n.onlySelf||this._parent?._updatePristine(n,i),e&&n.emitEvent!==!1&&this._events.next(new Rl(!0,i))}markAsPending(n={}){this.status=Ma;let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new Sa(this.status,e)),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.markAsPending(K(y({},n),{sourceControl:e}))}disable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=kl,this.errors=null,this._forEachChild(r=>{r.disable(K(y({},n),{onlySelf:!0}))}),this._updateValue();let i=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new ff(this.value,i)),this._events.next(new Sa(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(K(y({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=Tl,this._forEachChild(i=>{i.enable(K(y({},n),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent}),this._updateAncestors(K(y({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(n,e){n.onlySelf||(this._parent?.updateValueAndValidity(n),n.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(n){this._parent=n}getRawValue(){return this.value}updateValueAndValidity(n={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Tl||this.status===Ma)&&this._runAsyncValidator(i,n.emitEvent)}let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new ff(this.value,e)),this._events.next(new Sa(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.updateValueAndValidity(K(y({},n),{sourceControl:e}))}_updateTreeValidity(n={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(n)),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?kl:Tl}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(n,e){if(this.asyncValidator){this.status=Ma,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:n!==!1};let i=uE(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:e,shouldHaveEmitted:n})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let n=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,n}return!1}setErrors(n,e={}){this.errors=n,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(n){let e=n;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((i,r)=>i&&i._find(r),this)}getError(n,e){let i=e?this.get(e):this;return i?.errors?i.errors[n]:null}hasError(n,e){return!!this.getError(n,e)}get root(){let n=this;for(;n._parent;)n=n._parent;return n}_updateControlsErrors(n,e,i){this.status=this._calculateStatus(),n&&this.statusChanges.emit(this.status),(n||i)&&this._events.next(new Sa(this.status,e)),this._parent&&this._parent._updateControlsErrors(n,e,i)}_initObservables(){this.valueChanges=new A,this.statusChanges=new A}_calculateStatus(){return this._allControlsDisabled()?kl:this.errors?cf:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(Ma)?Ma:this._anyControlsHaveStatus(cf)?cf:Tl}_anyControlsHaveStatus(n){return this._anyControls(e=>e.status===n)}_anyControlsDirty(){return this._anyControls(n=>n.dirty)}_anyControlsTouched(){return this._anyControls(n=>n.touched)}_updatePristine(n,e){let i=!this._anyControlsDirty(),r=this.pristine!==i;this.pristine=i,n.onlySelf||this._parent?._updatePristine(n,e),r&&this._events.next(new Rl(this.pristine,e))}_updateTouched(n={},e){this.touched=this._anyControlsTouched(),this._events.next(new Ol(this.touched,e)),n.onlySelf||this._parent?._updateTouched(n,e)}_onDisabledChange=[];_registerOnCollectionChange(n){this._onCollectionChange=n}_setUpdateStrategy(n){yf(n)&&n.updateOn!=null&&(this._updateOn=n.updateOn)}_parentMarkedDirty(n){return!n&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(n){return null}_assignValidators(n){this._rawValidators=Array.isArray(n)?n.slice():n,this._composedValidatorFn=IP(this._rawValidators)}_assignAsyncValidators(n){this._rawAsyncValidators=Array.isArray(n)?n.slice():n,this._composedAsyncValidatorFn=MP(this._rawAsyncValidators)}},gf=class extends pf{constructor(n,e,i){super(bE(e),yE(i,e)),this.controls=n,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(n,e){return this.controls[n]?this.controls[n]:(this.controls[n]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(n,e,i={}){this.registerControl(n,e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(n,e={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(n,e,i={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],e&&this.registerControl(n,e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(n){return this.controls.hasOwnProperty(n)&&this.controls[n].enabled}setValue(n,e={}){TP(this,!0,n),Object.keys(n).forEach(i=>{SP(this,!0,i),this.controls[i].setValue(n[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(n,e={}){n!=null&&(Object.keys(n).forEach(i=>{let r=this.controls[i];r&&r.patchValue(n[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(n={},e={}){this._forEachChild((i,r)=>{i.reset(n?n[r]:null,K(y({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new hf(this))}getRawValue(){return this._reduceChildren({},(n,e,i)=>(n[i]=e.getRawValue(),n))}_syncPendingControls(){let n=this._reduceChildren(!1,(e,i)=>i._syncPendingControls()?!0:e);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){Object.keys(this.controls).forEach(e=>{let i=this.controls[e];i&&n(i,e)})}_setUpControls(){this._forEachChild(n=>{n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(n){for(let[e,i]of Object.entries(this.controls))if(this.contains(e)&&n(i))return!0;return!1}_reduceValue(){let n={};return this._reduceChildren(n,(e,i,r)=>((i.enabled||this.disabled)&&(e[r]=i.value),e))}_reduceChildren(n,e){let i=n;return this._forEachChild((r,o)=>{i=e(i,r,o)}),i}_allControlsDisabled(){for(let n of Object.keys(this.controls))if(this.controls[n].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(n){return this.controls.hasOwnProperty(n)?this.controls[n]:null}};var wf=new _("",{factory:()=>e_}),e_="always";function kP(t,n){return[...n.path,t]}function vf(t,n,e=e_){t_(t,n),n.valueAccessor.writeValue(t.value),(t.disabled||e==="always")&&n.valueAccessor.setDisabledState?.(t.disabled),RP(t,n),NP(t,n),OP(t,n),AP(t,n)}function iE(t,n,e=!0){let i=()=>{};n?.valueAccessor?.registerOnChange(i),n?.valueAccessor?.registerOnTouched(i),bf(t,n),t&&(n._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function _f(t,n){t.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(n)})}function AP(t,n){if(n.valueAccessor.setDisabledState){let e=i=>{n.valueAccessor.setDisabledState(i)};t.registerOnDisabledChange(e),n._registerOnDestroy(()=>{t._unregisterOnDisabledChange(e)})}}function t_(t,n){let e=vE(t);n.validator!==null?t.setValidators(eE(e,n.validator)):typeof e=="function"&&t.setValidators([e]);let i=_E(t);n.asyncValidator!==null?t.setAsyncValidators(eE(i,n.asyncValidator)):typeof i=="function"&&t.setAsyncValidators([i]);let r=()=>t.updateValueAndValidity();_f(n._rawValidators,r),_f(n._rawAsyncValidators,r)}function bf(t,n){let e=!1;if(t!==null){if(n.validator!==null){let r=vE(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==n.validator);o.length!==r.length&&(e=!0,t.setValidators(o))}}if(n.asyncValidator!==null){let r=_E(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==n.asyncValidator);o.length!==r.length&&(e=!0,t.setAsyncValidators(o))}}}let i=()=>{};return _f(n._rawValidators,i),_f(n._rawAsyncValidators,i),e}function RP(t,n){n.valueAccessor.registerOnChange(e=>{t._pendingValue=e,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&wE(t,n)})}function OP(t,n){n.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&wE(t,n),t.updateOn!=="submit"&&t.markAsTouched()})}function wE(t,n){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),n.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function NP(t,n){let e=(i,r)=>{n.valueAccessor.writeValue(i),r&&n.viewToModelUpdate(i)};t.registerOnChange(e),n._registerOnDestroy(()=>{t._unregisterOnChange(e)})}function CE(t,n){t==null,t_(t,n)}function PP(t,n){return bf(t,n)}function FP(t,n){if(!t.hasOwnProperty("model"))return!1;let e=t.model;return e.isFirstChange()?!0:!Object.is(n,e.currentValue)}function LP(t){return Object.getPrototypeOf(t.constructor)===fP}function DE(t,n){t._syncPendingControls(),n.forEach(e=>{let i=e.control;i.updateOn==="submit"&&i._pendingChange&&(e.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function jP(t,n){if(!n)return null;Array.isArray(n);let e,i,r;return n.forEach(o=>{o.constructor===fr?e=o:LP(o)?i=o:r=o}),r||i||e||null}function BP(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}var VP={provide:mo,useExisting:xn(()=>Nl)},Al=Promise.resolve(),Nl=(()=>{class t extends mo{callSetDisabledState;get submitted(){return Ge(this.submittedReactive)}_submitted=nt(()=>this.submittedReactive());submittedReactive=N(!1);_directives=new Set;form;ngSubmit=new A;options;constructor(e,i,r){super(),this.callSetDisabledState=r,this.form=new gf({},Xv(e),Jv(i))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){Al.then(()=>{let i=this._findContainer(e.path);e.control=i.registerControl(e.name,e.control),vf(e.control,e,this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){Al.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){Al.then(()=>{let i=this._findContainer(e.path),r=new gf({});CE(r,e),i.registerControl(e.name,r),r.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){Al.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,i){Al.then(()=>{this.form.get(e.path).setValue(i)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),DE(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new mf(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static \u0275fac=function(i){return new(i||t)(Ie(Qv,10),Ie(Kv,10),Ie(wf,8))};static \u0275dir=S({type:t,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(i,r){i&1&&T("submit",function(a){return r.onSubmit(a)})("reset",function(){return r.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[Pe([VP]),ge]})}return t})();function rE(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}function oE(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var xE=class extends pf{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(n=null,e,i){super(bE(e),yE(i,e)),this._applyFormState(n),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),yf(e)&&(e.nonNullable||e.initialValueIsDefault)&&(oE(n)?this.defaultValue=n.value:this.defaultValue=n)}setValue(n,e={}){this.value=this._pendingValue=n,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(n,e={}){this.setValue(n,e)}reset(n=this.defaultValue,e={}){this._applyFormState(n),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new hf(this))}_updateValue(){}_anyControls(n){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(n){this._onChange.push(n)}_unregisterOnChange(n){rE(this._onChange,n)}registerOnDisabledChange(n){this._onDisabledChange.push(n)}_unregisterOnDisabledChange(n){rE(this._onDisabledChange,n)}_forEachChild(n){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(n){oE(n)?(this.value=this._pendingValue=n.value,n.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=n}};var HP=t=>t instanceof xE;var UP={provide:Pi,useExisting:xn(()=>ho)},aE=Promise.resolve(),ho=(()=>{class t extends Pi{_changeDetectorRef;callSetDisabledState;control=new xE;static ngAcceptInputType_isDisabled;_registered=!1;viewModel;name="";isDisabled;model;options;update=new A;constructor(e,i,r,o,a,s){super(),this._changeDetectorRef=a,this.callSetDisabledState=s,this._parent=e,this._setValidators(i),this._setAsyncValidators(r),this.valueAccessor=jP(this,o)}ngOnChanges(e){if(this._checkForErrors(),!this._registered||"name"in e){if(this._registered&&(this._checkName(),this.formDirective)){let i=e.name.previousValue;this.formDirective.removeControl({name:i,path:this._getPath(i)})}this._setUpControl()}"isDisabled"in e&&this._updateDisabled(e),FP(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective?.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){vf(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._checkName()}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(e){aE.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(e){let i=e.isDisabled.currentValue,r=i!==0&&J(i);aE.then(()=>{r&&!this.control.disabled?this.control.disable():!r&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(e){return this._parent?kP(e,this._parent):[e]}static \u0275fac=function(i){return new(i||t)(Ie(mo,9),Ie(Qv,10),Ie(Kv,10),Ie(lE,10),Ie(Ne,8),Ie(wf,8))};static \u0275dir=S({type:t,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[Pe([UP]),ge,Ue]})}return t})();var zP=(()=>{class t extends mo{callSetDisabledState;get submitted(){return Ge(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=nt(()=>this._submittedReactive());_submittedReactive=N(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,i,r){super(),this.callSetDisabledState=r,this._setValidators(e),this._setAsyncValidators(i)}ngOnChanges(e){this.onChanges(e)}ngOnDestroy(){this.onDestroy()}onChanges(e){this._checkFormPresent(),e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(bf(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(e){let i=this.form.get(e.path);return vf(i,e,this.callSetDisabledState),i.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),i}getControl(e){return this.form.get(e.path)}removeControl(e){iE(e.control||null,e,!1),BP(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}updateModel(e,i){this.form.get(e.path).setValue(i)}onReset(){this.resetForm()}resetForm(e=void 0,i={}){this.form.reset(e,i),this._submittedReactive.set(!1)}onSubmit(e){return this.submitted=!0,DE(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new mf(this.control)),e?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(e=>{let i=e.control,r=this.form.get(e.path);i!==r&&(iE(i||null,e),HP(r)&&(vf(r,e,this.callSetDisabledState),e.control=r))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let i=this.form.get(e.path);CE(i,e),i.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){let i=this.form?.get(e.path);i&&PP(i,e)&&i.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){t_(this.form,this),this._oldForm&&bf(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(i){return new(i||t)(Ie(Qv,10),Ie(Kv,10),Ie(wf,8))};static \u0275dir=S({type:t,features:[ge,Ue]})}return t})();var $P={provide:mo,useExisting:xn(()=>Pl)},Pl=(()=>{class t extends zP{form=null;ngSubmit=new A;get control(){return this.form}static \u0275fac=(()=>{let e;return function(r){return(e||(e=ze(t)))(r||t)}})();static \u0275dir=S({type:t,selectors:[["","formGroup",""]],hostBindings:function(i,r){i&1&&T("submit",function(a){return r.onSubmit(a)})("reset",function(){return r.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[Pe([$P]),ge]})}return t})();var WP=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=U({type:t});static \u0275inj=L({})}return t})();var Aa=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:wf,useValue:e.callSetDisabledState??e_}]}}static \u0275fac=function(i){return new(i||t)};static \u0275mod=U({type:t});static \u0275inj=L({imports:[WP]})}return t})();var EE=new _("MAT_INPUT_VALUE_ACCESSOR");var Cf=(()=>{class t{isErrorState(e,i){return!!(e&&e.invalid&&(e.touched||i&&i.submitted))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Ra=class{_defaultMatcher;ngControl;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;constructor(n,e,i,r,o){this._defaultMatcher=n,this.ngControl=e,this._parentFormGroup=i,this._parentForm=r,this._stateChanges=o}updateErrorState(){let n=this.errorState,e=this._parentFormGroup||this._parentForm,i=this.matcher||this._defaultMatcher,r=this.ngControl?this.ngControl.control:null,o=i?.isErrorState(r,e)??!1;o!==n&&(this.errorState=o,this._stateChanges.next())}};var GP=["button","checkbox","file","hidden","image","radio","range","reset","submit"],qP=new _("MAT_INPUT_CONFIG"),di=(()=>{class t{_elementRef=d(O);_platform=d(ue);ngControl=d(Pi,{optional:!0,self:!0});_autofillMonitor=d(Xx);_ngZone=d(R);_formField=d(Sl,{optional:!0});_renderer=d(Ee);_uid=d(qe).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=d(qP,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new D;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=yt(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(Ta.required)??!1}set required(e){this._required=yt(e)}_required;get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&Fv().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=yt(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(e=>Fv().has(e));constructor(){let e=d(Nl,{optional:!0}),i=d(Pl,{optional:!0}),r=d(Cf),o=d(EE,{optional:!0,self:!0}),a=this._elementRef.nativeElement,s=a.nodeName.toLowerCase();o?Jn(o.value)?this._signalBasedValueAccessor=o:this._inputValueAccessor=o:this._inputValueAccessor=a,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(a,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new Ra(r,this.ngControl,i,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=s==="select",this._isTextarea=s==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=a.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&Kt(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let i=this._elementRef.nativeElement;i.type==="number"?(i.type="text",i.setSelectionRange(0,0),i.type="number"):i.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let i=this._elementRef.nativeElement;this._previousPlaceholder=e,e?i.setAttribute("placeholder",e):i.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){GP.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,i=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&i&&i.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let i=this._elementRef.nativeElement;e.length?i.setAttribute("aria-describedby",e.join(" ")):i.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let i=e.target;!i.value&&i.selectionStart===0&&i.selectionEnd===0&&(i.setSelectionRange(1,1),i.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(i){return new(i||t)};static \u0275dir=S({type:t,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(i,r){i&1&&T("focus",function(){return r._focusChanged(!0)})("blur",function(){return r._focusChanged(!1)})("input",function(){return r._onInput()}),i&2&&(ei("id",r.id)("disabled",r.disabled&&!r.disabledInteractive)("required",r.required),oe("name",r.name||null)("readonly",r._getReadonlyAttribute())("aria-disabled",r.disabled&&r.disabledInteractive?"true":null)("aria-invalid",r.empty&&r.required?null:r.errorState)("aria-required",r.required)("id",r.id),W("mat-input-server",r._isServer)("mat-mdc-form-field-textarea-control",r._isInFormField&&r._isTextarea)("mat-mdc-form-field-input-control",r._isInFormField)("mat-mdc-input-disabled-interactive",r.disabledInteractive)("mdc-text-field__input",r._isInFormField)("mat-mdc-native-select-inline",r._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",J]},exportAs:["matInput"],features:[Pe([{provide:Ml,useExisting:t}]),Ue]})}return t})(),Oa=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=U({type:t});static \u0275inj=L({imports:[rn,rn,Jx,he]})}return t})();var Fl=class{_attachedHost=null;attach(n){return this._attachedHost=n,n.attach(this)}detach(){let n=this._attachedHost;n!=null&&(this._attachedHost=null,n.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(n){this._attachedHost=n}},Fn=class extends Fl{component;viewContainerRef;injector;projectableNodes;bindings;constructor(n,e,i,r,o){super(),this.component=n,this.viewContainerRef=e,this.injector=i,this.projectableNodes=r,this.bindings=o||null}},wn=class extends Fl{templateRef;viewContainerRef;context;injector;constructor(n,e,i,r){super(),this.templateRef=n,this.viewContainerRef=e,this.context=i,this.injector=r}get origin(){return this.templateRef.elementRef}attach(n,e=this.context){return this.context=e,super.attach(n)}detach(){return this.context=void 0,super.detach()}},r_=class extends Fl{element;constructor(n){super(),this.element=n instanceof O?n.nativeElement:n}},mr=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(n){if(n instanceof Fn)return this._attachedPortal=n,this.attachComponentPortal(n);if(n instanceof wn)return this._attachedPortal=n,this.attachTemplatePortal(n);if(this.attachDomPortal&&n instanceof r_)return this._attachedPortal=n,this.attachDomPortal(n)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(n){this._disposeFn=n}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}},Df=class extends mr{outletElement;_appRef;_defaultInjector;constructor(n,e,i){super(),this.outletElement=n,this._appRef=e,this._defaultInjector=i}attachComponentPortal(n){let e;if(n.viewContainerRef){let i=n.injector||n.viewContainerRef.injector,r=i.get(Kn,null,{optional:!0})||void 0;e=n.viewContainerRef.createComponent(n.component,{index:n.viewContainerRef.length,injector:i,ngModuleRef:r,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0}),this.setDisposeFn(()=>e.destroy())}else{let i=this._appRef,r=n.injector||this._defaultInjector||F.NULL,o=r.get(Ce,i.injector);e=tu(n.component,{elementInjector:r,environmentInjector:o,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0}),i.attachView(e.hostView),this.setDisposeFn(()=>{i.viewCount>0&&i.detachView(e.hostView),e.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=n,e}attachTemplatePortal(n){let e=n.viewContainerRef,i=e.createEmbeddedView(n.templateRef,n.context,{injector:n.injector});return i.rootNodes.forEach(r=>this.outletElement.appendChild(r)),i.detectChanges(),this.setDisposeFn(()=>{let r=e.indexOf(i);r!==-1&&e.remove(r)}),this._attachedPortal=n,i}attachDomPortal=n=>{let e=n.element;e.parentNode;let i=this.outletElement.ownerDocument.createComment("dom-portal");e.parentNode.insertBefore(i,e),this.outletElement.appendChild(e),this._attachedPortal=n,super.setDisposeFn(()=>{i.parentNode&&i.parentNode.replaceChild(e,i)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(n){return n.hostView.rootNodes[0]}},IE=(()=>{class t extends wn{constructor(){let e=d(lt),i=d(ht);super(e,i)}static \u0275fac=function(i){return new(i||t)};static \u0275dir=S({type:t,selectors:[["","cdkPortal",""]],exportAs:["cdkPortal"],features:[ge]})}return t})(),Ln=(()=>{class t extends mr{_moduleRef=d(Kn,{optional:!0});_document=d(j);_viewContainerRef=d(ht);_isInitialized=!1;_attachedRef=null;constructor(){super()}get portal(){return this._attachedPortal}set portal(e){this.hasAttached()&&!e&&!this._isInitialized||(this.hasAttached()&&super.detach(),e&&super.attach(e),this._attachedPortal=e||null)}attached=new A;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(e){e.setAttachedHost(this);let i=e.viewContainerRef!=null?e.viewContainerRef:this._viewContainerRef,r=i.createComponent(e.component,{index:i.length,injector:e.injector||i.injector,projectableNodes:e.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:e.bindings||void 0});return i!==this._viewContainerRef&&this._getRootNode().appendChild(r.hostView.rootNodes[0]),super.setDisposeFn(()=>r.destroy()),this._attachedPortal=e,this._attachedRef=r,this.attached.emit(r),r}attachTemplatePortal(e){e.setAttachedHost(this);let i=this._viewContainerRef.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=e,this._attachedRef=i,this.attached.emit(i),i}attachDomPortal=e=>{let i=e.element;i.parentNode;let r=this._document.createComment("dom-portal");e.setAttachedHost(this),i.parentNode.insertBefore(r,i),this._getRootNode().appendChild(i),this._attachedPortal=e,super.setDisposeFn(()=>{r.parentNode&&r.parentNode.replaceChild(i,r)})};_getRootNode(){let e=this._viewContainerRef.element.nativeElement;return e.nodeType===e.ELEMENT_NODE?e:e.parentNode}static \u0275fac=function(i){return new(i||t)};static \u0275dir=S({type:t,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:[0,"cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[ge]})}return t})(),hr=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=U({type:t});static \u0275inj=L({})}return t})();var YP=20,pr=(()=>{class t{_ngZone=d(R);_platform=d(ue);_renderer=d(tt).createRenderer(null,null);_cleanupGlobalListener;constructor(){}_scrolled=new D;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let i=this.scrollContainers.get(e);i&&(i.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=YP){return this._platform.isBrowser?new ee(i=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let r=e>0?this._scrolled.pipe(xc(e)).subscribe(i):this._scrolled.subscribe(i);return this._scrolledCount++,()=>{r.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):$()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,i)=>this.deregister(i)),this._scrolled.complete()}ancestorScrolled(e,i){let r=this.getAncestorScrollContainers(e);return this.scrolled(i).pipe(me(o=>!o||r.indexOf(o)>-1))}getAncestorScrollContainers(e){let i=[];return this.scrollContainers.forEach((r,o)=>{this._scrollableContainsElement(o,e)&&i.push(o)}),i}_scrollableContainsElement(e,i){let r=$t(i),o=e.getElementRef().nativeElement;do if(r==o)return!0;while(r=r.parentElement);return!1}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),xf=(()=>{class t{elementRef=d(O);scrollDispatcher=d(pr);ngZone=d(R);dir=d(dt,{optional:!0});_scrollElement=this.elementRef.nativeElement;_destroyed=new D;_renderer=d(Ee);_cleanupScroll;_elementScrolled=new D;constructor(){}ngOnInit(){this._cleanupScroll=this.ngZone.runOutsideAngular(()=>this._renderer.listen(this._scrollElement,"scroll",e=>this._elementScrolled.next(e))),this.scrollDispatcher.register(this)}ngOnDestroy(){this._cleanupScroll?.(),this._elementScrolled.complete(),this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(e){let i=this.elementRef.nativeElement,r=this.dir&&this.dir.value=="rtl";e.left==null&&(e.left=r?e.end:e.start),e.right==null&&(e.right=r?e.start:e.end),e.bottom!=null&&(e.top=i.scrollHeight-i.clientHeight-e.bottom),r&&wa()!=Pn.NORMAL?(e.left!=null&&(e.right=i.scrollWidth-i.clientWidth-e.left),wa()==Pn.INVERTED?e.left=e.right:wa()==Pn.NEGATED&&(e.left=e.right?-e.right:e.right)):e.right!=null&&(e.left=i.scrollWidth-i.clientWidth-e.right),this._applyScrollToOptions(e)}_applyScrollToOptions(e){let i=this.elementRef.nativeElement;ef()?i.scrollTo(e):(e.top!=null&&(i.scrollTop=e.top),e.left!=null&&(i.scrollLeft=e.left))}measureScrollOffset(e){let i="left",r="right",o=this.elementRef.nativeElement;if(e=="top")return o.scrollTop;if(e=="bottom")return o.scrollHeight-o.clientHeight-o.scrollTop;let a=this.dir&&this.dir.value=="rtl";return e=="start"?e=a?r:i:e=="end"&&(e=a?i:r),a&&wa()==Pn.INVERTED?e==i?o.scrollWidth-o.clientWidth-o.scrollLeft:o.scrollLeft:a&&wa()==Pn.NEGATED?e==i?o.scrollLeft+o.scrollWidth-o.clientWidth:-o.scrollLeft:e==i?o.scrollLeft:o.scrollWidth-o.clientWidth-o.scrollLeft}static \u0275fac=function(i){return new(i||t)};static \u0275dir=S({type:t,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]]})}return t})(),ZP=20,jn=(()=>{class t{_platform=d(ue);_listeners;_viewportSize=null;_change=new D;_document=d(j);constructor(){let e=d(R),i=d(tt).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let r=o=>this._change.next(o);this._listeners=[i.listen("window","resize",r),i.listen("window","orientationchange",r)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:i,height:r}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+r,right:e.left+i,height:r,width:i}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,i=this._getWindow(),r=e.documentElement,o=r.getBoundingClientRect(),a=-o.top||e.body?.scrollTop||i.scrollY||r.scrollTop||0,s=-o.left||e.body?.scrollLeft||i.scrollX||r.scrollLeft||0;return{top:a,left:s}}change(e=ZP){return e>0?this._change.pipe(xc(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var ui=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=U({type:t});static \u0275inj=L({})}return t})(),o_=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=U({type:t});static \u0275inj=L({imports:[he,ui,he,ui]})}return t})();var d_=["*"];function QP(t,n){t&1&&X(0)}var KP=["tabListContainer"],XP=["tabList"],JP=["tabListInner"],eF=["nextPaginator"],tF=["previousPaginator"],nF=["content"];function iF(t,n){}var rF=["tabBodyWrapper"],oF=["tabHeader"];function aF(t,n){}function sF(t,n){if(t&1&&pt(0,aF,0,0,"ng-template",12),t&2){let e=G().$implicit;Q("cdkPortalOutlet",e.templateLabel)}}function lF(t,n){if(t&1&&v(0),t&2){let e=G().$implicit;_e(e.textLabel)}}function cF(t,n){if(t&1){let e=It();m(0,"div",7,2),T("click",function(){let r=Ve(e),o=r.$implicit,a=r.$index,s=G(),l=hn(1);return He(s._handleClick(o,l,a))})("cdkFocusChange",function(r){let o=Ve(e).$index,a=G();return He(a._tabFocusChanged(r,o))}),z(2,"span",8)(3,"div",9),m(4,"span",10)(5,"span",11),ie(6,sF,1,1,null,12)(7,lF,1,1),h()()()}if(t&2){let e=n.$implicit,i=n.$index,r=hn(1),o=G();Ut(e.labelClass),W("mdc-tab--active",o.selectedIndex===i),Q("id",o._getTabLabelId(e,i))("disabled",e.disabled)("fitInkBarToContent",o.fitInkBarToContent),oe("tabIndex",o._getTabIndex(i))("aria-posinset",i+1)("aria-setsize",o._tabs.length)("aria-controls",o._getTabContentId(i))("aria-selected",o.selectedIndex===i)("aria-label",e.ariaLabel||null)("aria-labelledby",!e.ariaLabel&&e.ariaLabelledby?e.ariaLabelledby:null),w(3),Q("matRippleTrigger",r)("matRippleDisabled",e.disabled||o.disableRipple),w(3),re(e.templateLabel?6:7)}}function dF(t,n){t&1&&X(0)}function uF(t,n){if(t&1){let e=It();m(0,"mat-tab-body",13),T("_onCentered",function(){Ve(e);let r=G();return He(r._removeTabBodyWrapperHeight())})("_onCentering",function(r){Ve(e);let o=G();return He(o._setTabBodyWrapperHeight(r))})("_beforeCentering",function(r){Ve(e);let o=G();return He(o._bodyCentered(r))}),h()}if(t&2){let e=n.$implicit,i=n.$index,r=G();Ut(e.bodyClass),Q("id",r._getTabContentId(i))("content",e.content)("position",e.position)("animationDuration",r.animationDuration)("preserveContent",r.preserveContent),oe("tabindex",r.contentTabIndex!=null&&r.selectedIndex===i?r.contentTabIndex:null)("aria-labelledby",r._getTabLabelId(e,i))("aria-hidden",r.selectedIndex!==i)}}var fF=new _("MatTabContent"),mF=(()=>{class t{template=d(lt);constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275dir=S({type:t,selectors:[["","matTabContent",""]],features:[Pe([{provide:fF,useExisting:t}])]})}return t})(),hF=new _("MatTabLabel"),kE=new _("MAT_TAB"),pF=(()=>{class t extends IE{_closestTab=d(kE,{optional:!0});static \u0275fac=(()=>{let e;return function(r){return(e||(e=ze(t)))(r||t)}})();static \u0275dir=S({type:t,selectors:[["","mat-tab-label",""],["","matTabLabel",""]],features:[Pe([{provide:hF,useExisting:t}]),ge]})}return t})(),AE=new _("MAT_TAB_GROUP"),Ll=(()=>{class t{_viewContainerRef=d(ht);_closestTabGroup=d(AE,{optional:!0});disabled=!1;get templateLabel(){return this._templateLabel}set templateLabel(e){this._setTemplateLabelInput(e)}_templateLabel;_explicitContent=void 0;_implicitContent;textLabel="";ariaLabel;ariaLabelledby;labelClass;bodyClass;id=null;_contentPortal=null;get content(){return this._contentPortal}_stateChanges=new D;position=null;origin=null;isActive=!1;constructor(){d(it).load(cr)}ngOnChanges(e){(e.hasOwnProperty("textLabel")||e.hasOwnProperty("disabled"))&&this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}ngOnInit(){this._contentPortal=new wn(this._explicitContent||this._implicitContent,this._viewContainerRef)}_setTemplateLabelInput(e){e&&e._closestTab===this&&(this._templateLabel=e)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=x({type:t,selectors:[["mat-tab"]],contentQueries:function(i,r,o){if(i&1&&Mt(o,pF,5)(o,mF,7,lt),i&2){let a;B(a=V())&&(r.templateLabel=a.first),B(a=V())&&(r._explicitContent=a.first)}},viewQuery:function(i,r){if(i&1&&Fe(lt,7),i&2){let o;B(o=V())&&(r._implicitContent=o.first)}},hostAttrs:["hidden",""],hostVars:1,hostBindings:function(i,r){i&2&&oe("id",null)},inputs:{disabled:[2,"disabled","disabled",J],textLabel:[0,"label","textLabel"],ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],labelClass:"labelClass",bodyClass:"bodyClass",id:"id"},exportAs:["matTab"],features:[Pe([{provide:kE,useExisting:t}]),Ue],ngContentSelectors:d_,decls:1,vars:0,template:function(i,r){i&1&&(Me(),zd(0,QP,1,0,"ng-template"))},encapsulation:2})}return t})(),a_="mdc-tab-indicator--active",ME="mdc-tab-indicator--no-transition",s_=class{_items;_currentItem;constructor(n){this._items=n}hide(){this._items.forEach(n=>n.deactivateInkBar()),this._currentItem=void 0}alignToElement(n){let e=this._items.find(r=>r.elementRef.nativeElement===n),i=this._currentItem;if(e!==i&&(i?.deactivateInkBar(),e)){let r=i?.elementRef.nativeElement.getBoundingClientRect?.();e.activateInkBar(r),this._currentItem=e}}},gF=(()=>{class t{_elementRef=d(O);_inkBarElement=null;_inkBarContentElement=null;_fitToContent=!1;get fitInkBarToContent(){return this._fitToContent}set fitInkBarToContent(e){this._fitToContent!==e&&(this._fitToContent=e,this._inkBarElement&&this._appendInkBarElement())}activateInkBar(e){let i=this._elementRef.nativeElement;if(!e||!i.getBoundingClientRect||!this._inkBarContentElement){i.classList.add(a_);return}let r=i.getBoundingClientRect(),o=e.width/r.width,a=e.left-r.left;i.classList.add(ME),this._inkBarContentElement.style.setProperty("transform",`translateX(${a}px) scaleX(${o})`),i.getBoundingClientRect(),i.classList.remove(ME),i.classList.add(a_),this._inkBarContentElement.style.setProperty("transform","")}deactivateInkBar(){this._elementRef.nativeElement.classList.remove(a_)}ngOnInit(){this._createInkBarElement()}ngOnDestroy(){this._inkBarElement?.remove(),this._inkBarElement=this._inkBarContentElement=null}_createInkBarElement(){let e=this._elementRef.nativeElement.ownerDocument||document,i=this._inkBarElement=e.createElement("span"),r=this._inkBarContentElement=e.createElement("span");i.className="mdc-tab-indicator",r.className="mdc-tab-indicator__content mdc-tab-indicator__content--underline",i.appendChild(this._inkBarContentElement),this._appendInkBarElement()}_appendInkBarElement(){this._inkBarElement;let e=this._fitToContent?this._elementRef.nativeElement.querySelector(".mdc-tab__content"):this._elementRef.nativeElement;e.appendChild(this._inkBarElement)}static \u0275fac=function(i){return new(i||t)};static \u0275dir=S({type:t,inputs:{fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",J]}})}return t})();var RE=(()=>{class t extends gF{elementRef=d(O);disabled=!1;focus(){this.elementRef.nativeElement.focus()}getOffsetLeft(){return this.elementRef.nativeElement.offsetLeft}getOffsetWidth(){return this.elementRef.nativeElement.offsetWidth}static \u0275fac=(()=>{let e;return function(r){return(e||(e=ze(t)))(r||t)}})();static \u0275dir=S({type:t,selectors:[["","matTabLabelWrapper",""]],hostVars:3,hostBindings:function(i,r){i&2&&(oe("aria-disabled",!!r.disabled),W("mat-mdc-tab-disabled",r.disabled))},inputs:{disabled:[2,"disabled","disabled",J]},features:[ge]})}return t})(),SE={passive:!0},vF=650,_F=100,bF=(()=>{class t{_elementRef=d(O);_changeDetectorRef=d(Ne);_viewportRuler=d(jn);_dir=d(dt,{optional:!0});_ngZone=d(R);_platform=d(ue);_sharedResizeObserver=d(nf);_injector=d(F);_renderer=d(Ee);_animationsDisabled=Ae();_eventCleanups;_scrollDistance=0;_selectedIndexChanged=!1;_destroyed=new D;_showPaginationControls=!1;_disableScrollAfter=!0;_disableScrollBefore=!0;_tabLabelCount;_scrollDistanceChanged=!1;_keyManager;_currentTextContent;_stopScrolling=new D;disablePagination=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){let i=isNaN(e)?0:e;this._selectedIndex!=i&&(this._selectedIndexChanged=!0,this._selectedIndex=i,this._keyManager&&this._keyManager.updateActiveItem(i))}_selectedIndex=0;selectFocusedIndex=new A;indexFocused=new A;constructor(){this._eventCleanups=this._ngZone.runOutsideAngular(()=>[this._renderer.listen(this._elementRef.nativeElement,"mouseleave",()=>this._stopInterval())])}ngAfterViewInit(){this._eventCleanups.push(this._renderer.listen(this._previousPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("before"),SE),this._renderer.listen(this._nextPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("after"),SE))}ngAfterContentInit(){let e=this._dir?this._dir.change:$("ltr"),i=this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe(pi(32),pe(this._destroyed)),r=this._viewportRuler.change(150).pipe(pe(this._destroyed)),o=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new xl(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(()=>!1),this._keyManager.updateActiveItem(Math.max(this._selectedIndex,0)),$e(o,{injector:this._injector}),Lt(e,r,i,this._items.changes,this._itemsResized()).pipe(pe(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>{Promise.resolve().then(()=>{this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),this._scrollDistance)),o()})}),this._keyManager?.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.subscribe(a=>{this.indexFocused.emit(a),this._setTabFocus(a)})}_itemsResized(){return typeof ResizeObserver!="function"?je:this._items.changes.pipe(rt(this._items),et(e=>new ee(i=>this._ngZone.runOutsideAngular(()=>{let r=new ResizeObserver(o=>i.next(o));return e.forEach(o=>r.observe(o.elementRef.nativeElement)),()=>{r.disconnect()}}))),Ar(1),me(e=>e.some(i=>i.contentRect.width>0&&i.contentRect.height>0)))}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._keyManager?.destroy(),this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(e){if(!bt(e))switch(e.keyCode){case 13:case 32:if(this.focusIndex!==this.selectedIndex){let i=this._items.get(this.focusIndex);i&&!i.disabled&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(e))}break;default:this._keyManager?.onKeydown(e)}}_onContentChanges(){let e=this._elementRef.nativeElement.textContent;e!==this._currentTextContent&&(this._currentTextContent=e||"",this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(e){!this._isValidIndex(e)||this.focusIndex===e||!this._keyManager||this._keyManager.setActiveItem(e)}_isValidIndex(e){return this._items?!!this._items.toArray()[e]:!0}_setTabFocus(e){if(this._showPaginationControls&&this._scrollToLabel(e),this._items&&this._items.length){this._items.toArray()[e].focus();let i=this._tabListContainer.nativeElement;this._getLayoutDirection()=="ltr"?i.scrollLeft=0:i.scrollLeft=i.scrollWidth-i.offsetWidth}}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_updateTabScrollPosition(){if(this.disablePagination)return;let e=this.scrollDistance,i=this._getLayoutDirection()==="ltr"?-e:e;this._tabList.nativeElement.style.transform=`translateX(${Math.round(i)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(e){this._scrollTo(e)}_scrollHeader(e){let i=this._tabListContainer.nativeElement.offsetWidth,r=(e=="before"?-1:1)*i/3;return this._scrollTo(this._scrollDistance+r)}_handlePaginatorClick(e){this._stopInterval(),this._scrollHeader(e)}_scrollToLabel(e){if(this.disablePagination)return;let i=this._items?this._items.toArray()[e]:null;if(!i)return;let r=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:o,offsetWidth:a}=i.elementRef.nativeElement,s,l;this._getLayoutDirection()=="ltr"?(s=o,l=s+a):(l=this._tabListInner.nativeElement.offsetWidth-o,s=l-a);let c=this.scrollDistance,u=this.scrollDistance+r;s<c?this.scrollDistance-=c-s:l>u&&(this.scrollDistance+=Math.min(l-u,s-c))}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{let e=this._tabListInner.nativeElement.scrollWidth,i=this._elementRef.nativeElement.offsetWidth,r=e-i>=5;r||(this.scrollDistance=0),r!==this._showPaginationControls&&(this._showPaginationControls=r,this._changeDetectorRef.markForCheck())}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=this.scrollDistance==0,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){let e=this._tabListInner.nativeElement.scrollWidth,i=this._tabListContainer.nativeElement.offsetWidth;return e-i||0}_alignInkBarToSelectedTab(){let e=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,i=e?e.elementRef.nativeElement:null;i?this._inkBar.alignToElement(i):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(e,i){i&&i.button!=null&&i.button!==0||(this._stopInterval(),os(vF,_F).pipe(pe(Lt(this._stopScrolling,this._destroyed))).subscribe(()=>{let{maxScrollDistance:r,distance:o}=this._scrollHeader(e);(o===0||o>=r)&&this._stopInterval()}))}_scrollTo(e){if(this.disablePagination)return{maxScrollDistance:0,distance:0};let i=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(i,e)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:i,distance:this._scrollDistance}}static \u0275fac=function(i){return new(i||t)};static \u0275dir=S({type:t,inputs:{disablePagination:[2,"disablePagination","disablePagination",J],selectedIndex:[2,"selectedIndex","selectedIndex",ri]},outputs:{selectFocusedIndex:"selectFocusedIndex",indexFocused:"indexFocused"}})}return t})(),yF=(()=>{class t extends bF{_items;_tabListContainer;_tabList;_tabListInner;_nextPaginator;_previousPaginator;_inkBar;ariaLabel;ariaLabelledby;disableRipple=!1;ngAfterContentInit(){this._inkBar=new s_(this._items),super.ngAfterContentInit()}_itemSelected(e){e.preventDefault()}static \u0275fac=(()=>{let e;return function(r){return(e||(e=ze(t)))(r||t)}})();static \u0275cmp=x({type:t,selectors:[["mat-tab-header"]],contentQueries:function(i,r,o){if(i&1&&Mt(o,RE,4),i&2){let a;B(a=V())&&(r._items=a)}},viewQuery:function(i,r){if(i&1&&Fe(KP,7)(XP,7)(JP,7)(eF,5)(tF,5),i&2){let o;B(o=V())&&(r._tabListContainer=o.first),B(o=V())&&(r._tabList=o.first),B(o=V())&&(r._tabListInner=o.first),B(o=V())&&(r._nextPaginator=o.first),B(o=V())&&(r._previousPaginator=o.first)}},hostAttrs:[1,"mat-mdc-tab-header"],hostVars:4,hostBindings:function(i,r){i&2&&W("mat-mdc-tab-header-pagination-controls-enabled",r._showPaginationControls)("mat-mdc-tab-header-rtl",r._getLayoutDirection()=="rtl")},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],disableRipple:[2,"disableRipple","disableRipple",J]},features:[ge],ngContentSelectors:d_,decls:13,vars:10,consts:[["previousPaginator",""],["tabListContainer",""],["tabList",""],["tabListInner",""],["nextPaginator",""],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-before",3,"click","mousedown","touchend","matRippleDisabled"],[1,"mat-mdc-tab-header-pagination-chevron"],[1,"mat-mdc-tab-label-container",3,"keydown"],["role","tablist",1,"mat-mdc-tab-list",3,"cdkObserveContent"],[1,"mat-mdc-tab-labels"],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-after",3,"mousedown","click","touchend","matRippleDisabled"]],template:function(i,r){i&1&&(Me(),m(0,"div",5,0),T("click",function(){return r._handlePaginatorClick("before")})("mousedown",function(a){return r._handlePaginatorPress("before",a)})("touchend",function(){return r._stopInterval()}),z(2,"div",6),h(),m(3,"div",7,1),T("keydown",function(a){return r._handleKeydown(a)}),m(5,"div",8,2),T("cdkObserveContent",function(){return r._onContentChanges()}),m(7,"div",9,3),X(9),h()()(),m(10,"div",10,4),T("mousedown",function(a){return r._handlePaginatorPress("after",a)})("click",function(){return r._handlePaginatorClick("after")})("touchend",function(){return r._stopInterval()}),z(12,"div",6),h()),i&2&&(W("mat-mdc-tab-header-pagination-disabled",r._disableScrollBefore),Q("matRippleDisabled",r._disableScrollBefore||r.disableRipple),w(3),W("_mat-animation-noopable",r._animationsDisabled),w(2),oe("aria-label",r.ariaLabel||null)("aria-labelledby",r.ariaLabelledby||null),w(5),W("mat-mdc-tab-header-pagination-disabled",r._disableScrollAfter),Q("matRippleDisabled",r._disableScrollAfter||r.disableRipple))},dependencies:[Il,Yu],styles:[`.mat-mdc-tab-header {
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
`],encapsulation:2})}return t})(),wF=new _("MAT_TABS_CONFIG"),TE=(()=>{class t extends Ln{_host=d(l_);_ngZone=d(R);_centeringSub=le.EMPTY;_leavingSub=le.EMPTY;constructor(){super()}ngOnInit(){super.ngOnInit(),this._centeringSub=this._host._beforeCentering.pipe(rt(this._host._isCenterPosition())).subscribe(e=>{this._host._content&&e&&!this.hasAttached()&&this._ngZone.run(()=>{Promise.resolve().then(),this.attach(this._host._content)})}),this._leavingSub=this._host._afterLeavingCenter.subscribe(()=>{this._host.preserveContent||this._ngZone.run(()=>this.detach())})}ngOnDestroy(){super.ngOnDestroy(),this._centeringSub.unsubscribe(),this._leavingSub.unsubscribe()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=S({type:t,selectors:[["","matTabBodyHost",""]],features:[ge]})}return t})(),l_=(()=>{class t{_elementRef=d(O);_dir=d(dt,{optional:!0});_ngZone=d(R);_injector=d(F);_renderer=d(Ee);_diAnimationsDisabled=Ae();_eventCleanups;_initialized=!1;_fallbackTimer;_positionIndex;_dirChangeSubscription=le.EMPTY;_position;_previousPosition;_onCentering=new A;_beforeCentering=new A;_afterLeavingCenter=new A;_onCentered=new A(!0);_portalHost;_contentElement;_content;animationDuration="500ms";preserveContent=!1;set position(e){this._positionIndex=e,this._computePositionAnimationState()}constructor(){if(this._dir){let e=d(Ne);this._dirChangeSubscription=this._dir.change.subscribe(i=>{this._computePositionAnimationState(i),e.markForCheck()})}}ngOnInit(){this._bindTransitionEvents(),this._position==="center"&&(this._setActiveClass(!0),$e(()=>this._onCentering.emit(this._elementRef.nativeElement.clientHeight),{injector:this._injector})),this._initialized=!0}ngOnDestroy(){clearTimeout(this._fallbackTimer),this._eventCleanups?.forEach(e=>e()),this._dirChangeSubscription.unsubscribe()}_bindTransitionEvents(){this._ngZone.runOutsideAngular(()=>{let e=this._elementRef.nativeElement,i=r=>{r.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.remove("mat-tab-body-animating"),r.type==="transitionend"&&this._transitionDone())};this._eventCleanups=[this._renderer.listen(e,"transitionstart",r=>{r.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.add("mat-tab-body-animating"),this._transitionStarted())}),this._renderer.listen(e,"transitionend",i),this._renderer.listen(e,"transitioncancel",i)]})}_transitionStarted(){clearTimeout(this._fallbackTimer);let e=this._position==="center";this._beforeCentering.emit(e),e&&this._onCentering.emit(this._elementRef.nativeElement.clientHeight)}_transitionDone(){this._position==="center"?this._onCentered.emit():this._previousPosition==="center"&&this._afterLeavingCenter.emit()}_setActiveClass(e){this._elementRef.nativeElement.classList.toggle("mat-mdc-tab-body-active",e)}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_isCenterPosition(){return this._positionIndex===0}_computePositionAnimationState(e=this._getLayoutDirection()){this._previousPosition=this._position,this._positionIndex<0?this._position=e=="ltr"?"left":"right":this._positionIndex>0?this._position=e=="ltr"?"right":"left":this._position="center",this._animationsDisabled()?this._simulateTransitionEvents():this._initialized&&(this._position==="center"||this._previousPosition==="center")&&(clearTimeout(this._fallbackTimer),this._fallbackTimer=this._ngZone.runOutsideAngular(()=>setTimeout(()=>this._simulateTransitionEvents(),100)))}_simulateTransitionEvents(){this._transitionStarted(),$e(()=>this._transitionDone(),{injector:this._injector})}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0ms"||this.animationDuration==="0s"}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=x({type:t,selectors:[["mat-tab-body"]],viewQuery:function(i,r){if(i&1&&Fe(TE,5)(nF,5),i&2){let o;B(o=V())&&(r._portalHost=o.first),B(o=V())&&(r._contentElement=o.first)}},hostAttrs:[1,"mat-mdc-tab-body"],hostVars:1,hostBindings:function(i,r){i&2&&oe("inert",r._position==="center"?null:"")},inputs:{_content:[0,"content","_content"],animationDuration:"animationDuration",preserveContent:"preserveContent",position:"position"},outputs:{_onCentering:"_onCentering",_beforeCentering:"_beforeCentering",_onCentered:"_onCentered"},decls:3,vars:6,consts:[["content",""],["cdkScrollable","",1,"mat-mdc-tab-body-content"],["matTabBodyHost",""]],template:function(i,r){i&1&&(m(0,"div",1,0),pt(2,iF,0,0,"ng-template",2),h()),i&2&&W("mat-tab-body-content-left",r._position==="left")("mat-tab-body-content-right",r._position==="right")("mat-tab-body-content-can-animate",r._position==="center"||r._previousPosition==="center")},dependencies:[TE,xf],styles:[`.mat-mdc-tab-body {
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
`],encapsulation:2})}return t})(),Ef=(()=>{class t{_elementRef=d(O);_changeDetectorRef=d(Ne);_ngZone=d(R);_tabsSubscription=le.EMPTY;_tabLabelSubscription=le.EMPTY;_tabBodySubscription=le.EMPTY;_diAnimationsDisabled=Ae();_allTabs;_tabBodies;_tabBodyWrapper;_tabHeader;_tabs=new Di;_indexToSelect=0;_lastFocusedTabIndex=null;_tabBodyWrapperHeight=0;color;get fitInkBarToContent(){return this._fitInkBarToContent}set fitInkBarToContent(e){this._fitInkBarToContent=e,this._changeDetectorRef.markForCheck()}_fitInkBarToContent=!1;stretchTabs=!0;alignTabs=null;dynamicHeight=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){this._indexToSelect=isNaN(e)?null:e}_selectedIndex=null;headerPosition="above";get animationDuration(){return this._animationDuration}set animationDuration(e){let i=e+"";this._animationDuration=/^\d+$/.test(i)?e+"ms":i}_animationDuration;get contentTabIndex(){return this._contentTabIndex}set contentTabIndex(e){this._contentTabIndex=isNaN(e)?null:e}_contentTabIndex=null;disablePagination=!1;disableRipple=!1;preserveContent=!1;get backgroundColor(){return this._backgroundColor}set backgroundColor(e){let i=this._elementRef.nativeElement.classList;i.remove("mat-tabs-with-background",`mat-background-${this.backgroundColor}`),e&&i.add("mat-tabs-with-background",`mat-background-${e}`),this._backgroundColor=e}_backgroundColor;ariaLabel;ariaLabelledby;selectedIndexChange=new A;focusChange=new A;animationDone=new A;selectedTabChange=new A(!0);_groupId;_isServer=!d(ue).isBrowser;constructor(){let e=d(wF,{optional:!0});this._groupId=d(qe).getId("mat-tab-group-"),this.animationDuration=e&&e.animationDuration?e.animationDuration:"500ms",this.disablePagination=e&&e.disablePagination!=null?e.disablePagination:!1,this.dynamicHeight=e&&e.dynamicHeight!=null?e.dynamicHeight:!1,e?.contentTabIndex!=null&&(this.contentTabIndex=e.contentTabIndex),this.preserveContent=!!e?.preserveContent,this.fitInkBarToContent=e&&e.fitInkBarToContent!=null?e.fitInkBarToContent:!1,this.stretchTabs=e&&e.stretchTabs!=null?e.stretchTabs:!0,this.alignTabs=e&&e.alignTabs!=null?e.alignTabs:null}ngAfterContentChecked(){let e=this._indexToSelect=this._clampTabIndex(this._indexToSelect);if(this._selectedIndex!=e){let i=this._selectedIndex==null;if(!i){this.selectedTabChange.emit(this._createChangeEvent(e));let r=this._tabBodyWrapper.nativeElement;r.style.minHeight=r.clientHeight+"px"}Promise.resolve().then(()=>{this._tabs.forEach((r,o)=>r.isActive=o===e),i||(this.selectedIndexChange.emit(e),this._tabBodyWrapper.nativeElement.style.minHeight="")})}this._tabs.forEach((i,r)=>{i.position=r-e,this._selectedIndex!=null&&i.position==0&&!i.origin&&(i.origin=e-this._selectedIndex)}),this._selectedIndex!==e&&(this._selectedIndex=e,this._lastFocusedTabIndex=null,this._changeDetectorRef.markForCheck())}ngAfterContentInit(){this._subscribeToAllTabChanges(),this._subscribeToTabLabels(),this._tabsSubscription=this._tabs.changes.subscribe(()=>{let e=this._clampTabIndex(this._indexToSelect);if(e===this._selectedIndex){let i=this._tabs.toArray(),r;for(let o=0;o<i.length;o++)if(i[o].isActive){this._indexToSelect=this._selectedIndex=o,this._lastFocusedTabIndex=null,r=i[o];break}!r&&i[e]&&Promise.resolve().then(()=>{i[e].isActive=!0,this.selectedTabChange.emit(this._createChangeEvent(e))})}this._changeDetectorRef.markForCheck()})}ngAfterViewInit(){this._tabBodySubscription=this._tabBodies.changes.subscribe(()=>this._bodyCentered(!0))}_subscribeToAllTabChanges(){this._allTabs.changes.pipe(rt(this._allTabs)).subscribe(e=>{this._tabs.reset(e.filter(i=>i._closestTabGroup===this||!i._closestTabGroup)),this._tabs.notifyOnChanges()})}ngOnDestroy(){this._tabs.destroy(),this._tabsSubscription.unsubscribe(),this._tabLabelSubscription.unsubscribe(),this._tabBodySubscription.unsubscribe()}realignInkBar(){this._tabHeader&&this._tabHeader._alignInkBarToSelectedTab()}updatePagination(){this._tabHeader&&this._tabHeader.updatePagination()}focusTab(e){let i=this._tabHeader;i&&(i.focusIndex=e)}_focusChanged(e){this._lastFocusedTabIndex=e,this.focusChange.emit(this._createChangeEvent(e))}_createChangeEvent(e){let i=new c_;return i.index=e,this._tabs&&this._tabs.length&&(i.tab=this._tabs.toArray()[e]),i}_subscribeToTabLabels(){this._tabLabelSubscription&&this._tabLabelSubscription.unsubscribe(),this._tabLabelSubscription=Lt(...this._tabs.map(e=>e._stateChanges)).subscribe(()=>this._changeDetectorRef.markForCheck())}_clampTabIndex(e){return Math.min(this._tabs.length-1,Math.max(e||0,0))}_getTabLabelId(e,i){return e.id||`${this._groupId}-label-${i}`}_getTabContentId(e){return`${this._groupId}-content-${e}`}_setTabBodyWrapperHeight(e){if(!this.dynamicHeight||!this._tabBodyWrapperHeight){this._tabBodyWrapperHeight=e;return}let i=this._tabBodyWrapper.nativeElement;i.style.height=this._tabBodyWrapperHeight+"px",this._tabBodyWrapper.nativeElement.offsetHeight&&(i.style.height=e+"px")}_removeTabBodyWrapperHeight(){let e=this._tabBodyWrapper.nativeElement;this._tabBodyWrapperHeight=e.clientHeight,e.style.height="",this._ngZone.run(()=>this.animationDone.emit())}_handleClick(e,i,r){i.focusIndex=r,e.disabled||(this.selectedIndex=r)}_getTabIndex(e){let i=this._lastFocusedTabIndex??this.selectedIndex;return e===i?0:-1}_tabFocusChanged(e,i){e&&e!=="mouse"&&e!=="touch"&&(this._tabHeader.focusIndex=i)}_bodyCentered(e){e&&this._tabBodies?.forEach((i,r)=>i._setActiveClass(r===this._selectedIndex))}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0"||this.animationDuration==="0ms"}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=x({type:t,selectors:[["mat-tab-group"]],contentQueries:function(i,r,o){if(i&1&&Mt(o,Ll,5),i&2){let a;B(a=V())&&(r._allTabs=a)}},viewQuery:function(i,r){if(i&1&&Fe(rF,5)(oF,5)(l_,5),i&2){let o;B(o=V())&&(r._tabBodyWrapper=o.first),B(o=V())&&(r._tabHeader=o.first),B(o=V())&&(r._tabBodies=o)}},hostAttrs:[1,"mat-mdc-tab-group"],hostVars:11,hostBindings:function(i,r){i&2&&(oe("mat-align-tabs",r.alignTabs),Ut("mat-"+(r.color||"primary")),Ko("--mat-tab-animation-duration",r.animationDuration),W("mat-mdc-tab-group-dynamic-height",r.dynamicHeight)("mat-mdc-tab-group-inverted-header",r.headerPosition==="below")("mat-mdc-tab-group-stretch-tabs",r.stretchTabs))},inputs:{color:"color",fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",J],stretchTabs:[2,"mat-stretch-tabs","stretchTabs",J],alignTabs:[0,"mat-align-tabs","alignTabs"],dynamicHeight:[2,"dynamicHeight","dynamicHeight",J],selectedIndex:[2,"selectedIndex","selectedIndex",ri],headerPosition:"headerPosition",animationDuration:"animationDuration",contentTabIndex:[2,"contentTabIndex","contentTabIndex",ri],disablePagination:[2,"disablePagination","disablePagination",J],disableRipple:[2,"disableRipple","disableRipple",J],preserveContent:[2,"preserveContent","preserveContent",J],backgroundColor:"backgroundColor",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"]},outputs:{selectedIndexChange:"selectedIndexChange",focusChange:"focusChange",animationDone:"animationDone",selectedTabChange:"selectedTabChange"},exportAs:["matTabGroup"],features:[Pe([{provide:AE,useExisting:t}])],ngContentSelectors:d_,decls:9,vars:8,consts:[["tabHeader",""],["tabBodyWrapper",""],["tabNode",""],[3,"indexFocused","selectFocusedIndex","selectedIndex","disableRipple","disablePagination","aria-label","aria-labelledby"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"id","mdc-tab--active","class","disabled","fitInkBarToContent"],[1,"mat-mdc-tab-body-wrapper"],["role","tabpanel",3,"id","class","content","position","animationDuration","preserveContent"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"click","cdkFocusChange","id","disabled","fitInkBarToContent"],[1,"mdc-tab__ripple"],["mat-ripple","",1,"mat-mdc-tab-ripple",3,"matRippleTrigger","matRippleDisabled"],[1,"mdc-tab__content"],[1,"mdc-tab__text-label"],[3,"cdkPortalOutlet"],["role","tabpanel",3,"_onCentered","_onCentering","_beforeCentering","id","content","position","animationDuration","preserveContent"]],template:function(i,r){i&1&&(Me(),m(0,"mat-tab-header",3,0),T("indexFocused",function(a){return r._focusChanged(a)})("selectFocusedIndex",function(a){return r.selectedIndex=a}),un(2,cF,8,17,"div",4,Yd),h(),ie(4,dF,1,0),m(5,"div",5,1),un(7,uF,1,10,"mat-tab-body",6,Yd),h()),i&2&&(Q("selectedIndex",r.selectedIndex||0)("disableRipple",r.disableRipple)("disablePagination",r.disablePagination),qd("aria-label",r.ariaLabel)("aria-labelledby",r.ariaLabelledby),w(2),fn(r._tabs),w(2),re(r._isServer?4:-1),w(),W("_mat-animation-noopable",r._animationsDisabled()),w(2),fn(r._tabs))},dependencies:[yF,RE,xv,Il,Ln,l_],styles:[`.mdc-tab {
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
`],encapsulation:2})}return t})(),c_=class{index;tab};var OE=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=U({type:t});static \u0275inj=L({imports:[he]})}return t})();function CF(t,n){if(t&1&&(m(0,"div",15)(1,"mat-icon"),v(2,"error_outline"),h(),m(3,"span"),v(4),h()()),t&2){let e=G();w(4),_e(e.errorMessage())}}function DF(t,n){if(t&1&&(m(0,"div",15)(1,"mat-icon"),v(2,"error_outline"),h(),m(3,"span"),v(4),h()()),t&2){let e=G();w(4),_e(e.errorMessage())}}function xF(t,n){if(t&1&&(m(0,"div",24)(1,"mat-icon"),v(2,"check_circle_outline"),h(),m(3,"span"),v(4),h()()),t&2){let e=G();w(4),_e(e.successMessage())}}var If=class t{email=ke.required();password=ke.required();name=ke.required();lastName=ke.required();errorMessage=ke.required();successMessage=ke.required();hide=N(!0);clickEvent(n){this.hide.set(!this.hide()),n.stopPropagation()}clearError(){this.errorMessage.set(""),this.successMessage.set("")}loginSubmitEvent=new A;submitLogin(){this.loginSubmitEvent.emit()}registerSubmitEvent=new A;submitRegister(){this.registerSubmitEvent.emit()}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=x({type:t,selectors:[["login-container"]],inputs:{email:[1,"email"],password:[1,"password"],name:[1,"name"],lastName:[1,"lastName"],errorMessage:[1,"errorMessage"],successMessage:[1,"successMessage"]},outputs:{email:"emailChange",password:"passwordChange",name:"nameChange",lastName:"lastNameChange",errorMessage:"errorMessageChange",successMessage:"successMessageChange",loginSubmitEvent:"loginSubmitEvent",registerSubmitEvent:"registerSubmitEvent"},decls:78,vars:17,consts:[["appearance","outlined",1,"login-card"],["mat-stretch-tabs","false","mat-align-tabs","center","dynamicHeight","","animationDuration","200ms",3,"selectedIndexChange"],["label","Logga in"],[1,"tab-content"],[1,"tab-header"],[1,"tab-icon-wrap"],[1,"tab-icon"],[1,"tab-title"],[1,"tab-subtitle"],[1,"form-fields"],["appearance","outline",1,"full-width"],["matPrefix","",1,"field-prefix-icon"],["matInput","","type","email","autocomplete","email",3,"ngModelChange","keydown.enter","ngModel"],["matInput","","autocomplete","current-password",3,"ngModelChange","keydown.enter","ngModel","type"],["matIconButton","","matSuffix","",3,"click"],["role","alert",1,"form-message","form-message--error"],["mat-flat-button","",1,"submit-button",3,"click"],["iconPositionEnd",""],["label","Registrera"],[1,"name-row"],["appearance","outline"],["matInput","","autocomplete","given-name",3,"ngModelChange","keydown.enter","ngModel"],["matInput","","autocomplete","family-name",3,"ngModelChange","keydown.enter","ngModel"],["matInput","","autocomplete","new-password",3,"ngModelChange","keydown.enter","ngModel","type"],["role","status",1,"form-message","form-message--success"]],template:function(e,i){e&1&&(m(0,"mat-card",0)(1,"mat-tab-group",1),T("selectedIndexChange",function(){return i.clearError()}),m(2,"mat-tab",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"mat-icon",6),v(7,"login"),h()(),m(8,"h2",7),v(9,"V\xE4lkommen tillbaka"),h(),m(10,"p",8),v(11,"Logga in p\xE5 "),m(12,"strong"),v(13,"K\xEEndGuard"),h()()(),m(14,"div",9)(15,"mat-form-field",10)(16,"mat-label"),v(17,"E-postadress"),h(),m(18,"mat-icon",11),v(19,"mail_outline"),h(),m(20,"input",12),_t("ngModelChange",function(o){return Oe(i.email,o)||(i.email=o),o}),T("keydown.enter",function(){return i.submitLogin()}),h()(),m(21,"mat-form-field",10)(22,"mat-label"),v(23,"L\xF6senord"),h(),m(24,"mat-icon",11),v(25,"lock_outline"),h(),m(26,"input",13),_t("ngModelChange",function(o){return Oe(i.password,o)||(i.password=o),o}),T("keydown.enter",function(){return i.submitLogin()}),h(),m(27,"button",14),T("click",function(o){return i.clickEvent(o)}),m(28,"mat-icon"),v(29),h()()()(),ie(30,CF,5,1,"div",15),m(31,"button",16),T("click",function(){return i.submitLogin()}),v(32," Logga in "),m(33,"mat-icon",17),v(34,"arrow_forward"),h()()()(),m(35,"mat-tab",18)(36,"div",3)(37,"div",4)(38,"div",5)(39,"mat-icon",6),v(40,"person_add"),h()(),m(41,"h2",7),v(42,"Skapa konto"),h(),m(43,"p",8),v(44,"Kom ig\xE5ng med "),m(45,"strong"),v(46,"K\xEEndGuard"),h()()(),m(47,"div",9)(48,"div",19)(49,"mat-form-field",20)(50,"mat-label"),v(51,"F\xF6rnamn"),h(),m(52,"input",21),_t("ngModelChange",function(o){return Oe(i.name,o)||(i.name=o),o}),T("keydown.enter",function(){return i.submitRegister()}),h()(),m(53,"mat-form-field",20)(54,"mat-label"),v(55,"Efternamn"),h(),m(56,"input",22),_t("ngModelChange",function(o){return Oe(i.lastName,o)||(i.lastName=o),o}),T("keydown.enter",function(){return i.submitRegister()}),h()()(),m(57,"mat-form-field",10)(58,"mat-label"),v(59,"E-postadress"),h(),m(60,"mat-icon",11),v(61,"mail_outline"),h(),m(62,"input",12),_t("ngModelChange",function(o){return Oe(i.email,o)||(i.email=o),o}),T("keydown.enter",function(){return i.submitRegister()}),h()(),m(63,"mat-form-field",10)(64,"mat-label"),v(65,"L\xF6senord"),h(),m(66,"mat-icon",11),v(67,"lock_outline"),h(),m(68,"input",23),_t("ngModelChange",function(o){return Oe(i.password,o)||(i.password=o),o}),T("keydown.enter",function(){return i.submitRegister()}),h(),m(69,"button",14),T("click",function(o){return i.clickEvent(o)}),m(70,"mat-icon"),v(71),h()()()(),ie(72,DF,5,1,"div",15),ie(73,xF,5,1,"div",24),m(74,"button",16),T("click",function(){return i.submitRegister()}),v(75," Registrera konto "),m(76,"mat-icon",17),v(77,"arrow_forward"),h()()()()()()),e&2&&(w(20),vt("ngModel",i.email),w(6),vt("ngModel",i.password),Q("type",i.hide()?"password":"text"),w(),oe("aria-label","Visa/d\xF6lj l\xF6senord")("aria-pressed",i.hide()),w(2),_e(i.hide()?"visibility_off":"visibility"),w(),re(i.errorMessage()!==""?30:-1),w(22),vt("ngModel",i.name),w(4),vt("ngModel",i.lastName),w(6),vt("ngModel",i.email),w(6),vt("ngModel",i.password),Q("type",i.hide()?"password":"text"),w(),oe("aria-label","Visa/d\xF6lj l\xF6senord")("aria-pressed",i.hide()),w(2),_e(i.hide()?"visibility_off":"visibility"),w(),re(i.errorMessage()!==""?72:-1),w(),re(i.successMessage()!==""?73:-1))},dependencies:[Aa,fr,ka,ho,rn,nn,dr,af,sf,Oa,di,fo,Ea,Uv,Ia,ci,Pt,Ef,Ll],styles:["[_nghost-%COMP%]{width:100%;max-width:460px}.login-card[_ngcontent-%COMP%]{width:100%;border-radius:20px;box-shadow:var(--mat-sys-level2);overflow:hidden}.tab-content[_ngcontent-%COMP%]{padding:2rem 2rem 2.5rem;display:flex;flex-direction:column;gap:1.5rem}.tab-header[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;text-align:center;gap:.4rem;padding-top:.25rem}.tab-icon-wrap[_ngcontent-%COMP%]{width:56px;height:56px;border-radius:50%;background:var(--mat-sys-primary-container);display:flex;align-items:center;justify-content:center;margin-bottom:.5rem}.tab-icon[_ngcontent-%COMP%]{color:var(--mat-sys-on-primary-container);font-size:1.75rem;width:1.75rem;height:1.75rem}.tab-title[_ngcontent-%COMP%]{font:var(--mat-sys-headline-small);margin:0}.tab-subtitle[_ngcontent-%COMP%]{margin:0}.tab-subtitle[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:var(--mat-sys-primary);font-weight:700}.form-fields[_ngcontent-%COMP%]{display:flex;flex-direction:column}.full-width[_ngcontent-%COMP%]{width:100%}.name-row[_ngcontent-%COMP%]{display:flex;gap:.75rem}.field-prefix-icon[_ngcontent-%COMP%]{color:var(--mat-sys-on-surface-variant);font-size:1.1rem;width:1.1rem;height:1.1rem}.form-message[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.6rem;padding:.75rem 1rem;border-radius:10px;font:var(--mat-sys-body-small)}.form-message[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:1.15rem;width:1.15rem;height:1.15rem;flex-shrink:0}.form-message--error[_ngcontent-%COMP%]{background:var(--mat-sys-error-container);color:var(--mat-sys-on-error-container)}.form-message--success[_ngcontent-%COMP%]{background:var(--mat-sys-tertiary-container);color:var(--mat-sys-on-tertiary-container)}.submit-button[_ngcontent-%COMP%]{width:100%;height:48px;border-radius:12px}"]})};var Ft={apiUrl:"https://salad-dramatize-customary.ngrok-free.dev",wsUrl:"wss://salad-dramatize-customary.ngrok-free.dev"};var Fa=class t{baseUrl=`${Ft.apiUrl}/api/auth`;http=d(Ot);login(n,e){let i={email:n,password:e};return this.http.post(`${this.baseUrl}/login`,i).pipe(Ze(r=>{sessionStorage.setItem("token",r.token),sessionStorage.setItem("UserId",r.id.toString()),sessionStorage.setItem("role",r.role)}))}register(n,e,i){let r={name:n,email:e,password:i};return this.http.post(`${this.baseUrl}/register`,r)}getRole(){return sessionStorage.getItem("role")}static \u0275fac=function(e){return new(e||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})};var Mf=class t{email=N("");password=N("");name=N("");lastName=N("");errorMessage=N("");successMessage=N("");router=d(_n);authService=d(Fa);onLoginSubmit(){this.authService.login(this.email(),this.password()).subscribe({error:n=>{this.errorMessage.set(n.error.error)},next:n=>{switch(n.role){case"ADMIN":this.router.navigate(["/admin"]);break;case"TEACHER":this.router.navigate(["/app"]);break;default:this.router.navigate(["/"])}}})}onRegisterSubmit(){let n=this.name()+" "+this.lastName(),e=this.email().trim(),i=this.password();this.authService.register(n,e,i).subscribe({error:r=>{this.successMessage.set(""),this.errorMessage.set(r.error.error)},next:r=>{this.errorMessage.set(""),this.successMessage.set(r.message)}})}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=x({type:t,selectors:[["login-page"]],decls:32,vars:6,consts:[[1,"login-page-wrapper"],[1,"login-page-left-panel"],[1,"blob","blob--1"],[1,"blob","blob--2"],[1,"content"],["width","auto","height","120px","alt","KindGuard logo","src","Kindguardlogo.png"],[1,"headline"],[1,"body"],[1,"badge-divider"],[1,"badges"],[1,"badge"],[1,"login-page-form"],["id","login-page-banner"],["id","banner-logo","alt","KindGuard logo","src","Kindguardlogo.png"],[1,"blob","blob--3"],[1,"blob","blob--4"],[1,"login-page-container",3,"emailChange","passwordChange","nameChange","lastNameChange","errorMessageChange","successMessageChange","loginSubmitEvent","registerSubmitEvent","email","password","name","lastName","errorMessage","successMessage"]],template:function(e,i){e&1&&(m(0,"div",0)(1,"div",1),z(2,"div",2)(3,"div",3),m(4,"div",4),z(5,"img",5),m(6,"h1",6),v(7,"Skapa tillsammans,"),z(8,"br"),v(9,"helt utan gr\xE4nser."),h(),m(10,"p",7),v(11,"Gl\xF6m l\xE5sta filer och versionskaos. Se \xE4ndringar direkt n\xE4r de sker, s\xE5 att fokus hamnar p\xE5 l\xE4randet i st\xE4llet f\xF6r tekniken."),h(),z(12,"div",8),m(13,"div",9)(14,"span",10)(15,"mat-icon"),v(16,"groups"),h(),v(17," Kollaborativ journalskrivning "),h(),m(18,"span",10)(19,"mat-icon"),v(20,"history"),h(),v(21," Optimistisk versionshantering "),h(),m(22,"span",10)(23,"mat-icon"),v(24,"psychology_alt"),h(),v(25," Flexibelt l\xE4rande "),h()()()(),m(26,"div",11)(27,"div",12),z(28,"img",13)(29,"div",14)(30,"div",15),h(),m(31,"login-container",16),_t("emailChange",function(o){return Oe(i.email,o)||(i.email=o),o})("passwordChange",function(o){return Oe(i.password,o)||(i.password=o),o})("nameChange",function(o){return Oe(i.name,o)||(i.name=o),o})("lastNameChange",function(o){return Oe(i.lastName,o)||(i.lastName=o),o})("errorMessageChange",function(o){return Oe(i.errorMessage,o)||(i.errorMessage=o),o})("successMessageChange",function(o){return Oe(i.successMessage,o)||(i.successMessage=o),o}),T("loginSubmitEvent",function(){return i.onLoginSubmit()})("registerSubmitEvent",function(){return i.onRegisterSubmit()}),h()()()),e&2&&(w(31),vt("email",i.email)("password",i.password)("name",i.name)("lastName",i.lastName)("errorMessage",i.errorMessage)("successMessage",i.successMessage))},dependencies:[If,ci],styles:["[_nghost-%COMP%]{display:block;width:100%;height:100%}.login-page-wrapper[_ngcontent-%COMP%]{display:flex;width:100%;min-height:100vh}.login-page-left-panel[_ngcontent-%COMP%]{flex:1.1;background:var(--mat-sys-primary);display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden;padding:3rem}#login-page-banner[_ngcontent-%COMP%]{background:var(--mat-sys-primary);box-sizing:border-box;align-items:center;justify-content:center;position:fixed;padding:4.5rem;display:none;width:100%;top:0;left:0;height:7em;min-height:fit-content}#login-page-banner[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{filter:brightness(0) invert(1);opacity:.95;width:auto;min-height:5rem;max-height:8rem}@media(max-width:1050px){.login-page-left-panel[_ngcontent-%COMP%]{display:none}#login-page-banner[_ngcontent-%COMP%]{display:flex}}.blob[_ngcontent-%COMP%]{position:absolute;border-radius:50%;background:var(--mat-sys-on-primary);opacity:.06}.blob--1[_ngcontent-%COMP%]{width:480px;height:480px;bottom:-140px;right:-100px}.blob--2[_ngcontent-%COMP%]{width:260px;height:260px;top:-60px;left:-60px}.blob--3[_ngcontent-%COMP%]{width:260px;height:260px;right:0;bottom:0}.blob--4[_ngcontent-%COMP%]{width:130px;height:130px;left:0;top:0}.content[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start;gap:1.5rem}.content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{filter:brightness(0) invert(1);opacity:.95;margin-left:-11px}.headline[_ngcontent-%COMP%]{font:var(--mat-sys-display-small);color:var(--mat-sys-on-primary);margin:0;line-height:1.15}.body[_ngcontent-%COMP%]{font:var(--mat-sys-body-large);color:var(--mat-sys-on-primary);opacity:.82;margin:0;max-width:320px;line-height:1.6}.badge-divider[_ngcontent-%COMP%]{width:40px;height:3px;background:var(--mat-sys-on-primary);opacity:.35}.badges[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.6rem}.badge[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem;font:var(--mat-sys-label-large);color:var(--mat-sys-on-primary);opacity:.75}.badge[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:1.1rem;width:1.1rem;height:1.1rem}.login-page-form[_ngcontent-%COMP%]{flex:1;display:flex;justify-content:center;align-items:center;background:var(--mat-sys-surface);padding:2rem}"]})};var po=(()=>{class t{get vertical(){return this._vertical}set vertical(e){this._vertical=yt(e)}_vertical=!1;get inset(){return this._inset}set inset(e){this._inset=yt(e)}_inset=!1;static \u0275fac=function(i){return new(i||t)};static \u0275cmp=x({type:t,selectors:[["mat-divider"]],hostAttrs:["role","separator",1,"mat-divider"],hostVars:7,hostBindings:function(i,r){i&2&&(oe("aria-orientation",r.vertical?"vertical":"horizontal"),W("mat-divider-vertical",r.vertical)("mat-divider-horizontal",!r.vertical)("mat-divider-inset",r.inset))},inputs:{vertical:"vertical",inset:"inset"},decls:0,vars:0,template:function(i,r){},styles:[`.mat-divider {
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
`],encapsulation:2,changeDetection:0})}return t})(),La=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=U({type:t});static \u0275inj=L({imports:[he]})}return t})();var ja=class t{url=`${Ft.apiUrl}/api/attendance`;attendanceSignals=new Map;attendanceChanges=new qt;http=d(Ot);getAttendanceChanges=this.attendanceChanges.asObservable();getSignal(n,e){let i=`${n}_${e}`;return this.attendanceSignals.has(i)||this.attendanceSignals.set(i,N(null)),this.attendanceSignals.get(i)}setAttendance(n,e,i){let r={childId:n,date:e,status:i};return this.attendanceChanges.next(r),this.http.put(this.url,r)}static \u0275fac=function(e){return new(e||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})};function fi(){let t=new Date;return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`}var jl=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new D;constructor(n=!1,e,i=!0,r){this._multiple=n,this._emitChanges=i,this.compareWith=r,e&&e.length&&(n?e.forEach(o=>this._markSelected(o)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...n){this._verifyValueAssignment(n),n.forEach(i=>this._markSelected(i));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}deselect(...n){this._verifyValueAssignment(n),n.forEach(i=>this._unmarkSelected(i));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}setSelection(...n){this._verifyValueAssignment(n);let e=this.selected,i=new Set(n.map(o=>this._getConcreteValue(o)));n.forEach(o=>this._markSelected(o)),e.filter(o=>!i.has(this._getConcreteValue(o,i))).forEach(o=>this._unmarkSelected(o));let r=this._hasQueuedChanges();return this._emitChangeEvent(),r}toggle(n){return this.isSelected(n)?this.deselect(n):this.select(n)}clear(n=!0){this._unmarkAll();let e=this._hasQueuedChanges();return n&&this._emitChangeEvent(),e}isSelected(n){return this._selection.has(this._getConcreteValue(n))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(n){this._multiple&&this.selected&&this._selected.sort(n)}isMultipleSelection(){return this._multiple}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(n){n=this._getConcreteValue(n),this.isSelected(n)||(this._multiple||this._unmarkAll(),this.isSelected(n)||this._selection.add(n),this._emitChanges&&this._selectedToEmit.push(n))}_unmarkSelected(n){n=this._getConcreteValue(n),this.isSelected(n)&&(this._selection.delete(n),this._emitChanges&&this._deselectedToEmit.push(n))}_unmarkAll(){this.isEmpty()||this._selection.forEach(n=>this._unmarkSelected(n))}_verifyValueAssignment(n){n.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(n,e){if(this.compareWith){e=e??this._selection;for(let i of e)if(this.compareWith(n,i))return i;return n}else return n}};var NE=ef();function Ha(t){return new Sf(t.get(jn),t.get(j))}var Sf=class{_viewportRuler;_previousHTMLStyles={top:"",left:""};_previousScrollPosition;_isEnabled=!1;_document;constructor(n,e){this._viewportRuler=n,this._document=e}attach(){}enable(){if(this._canBeEnabled()){let n=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=n.style.left||"",this._previousHTMLStyles.top=n.style.top||"",n.style.left=Ke(-this._previousScrollPosition.left),n.style.top=Ke(-this._previousScrollPosition.top),n.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){let n=this._document.documentElement,e=this._document.body,i=n.style,r=e.style,o=i.scrollBehavior||"",a=r.scrollBehavior||"";this._isEnabled=!1,i.left=this._previousHTMLStyles.left,i.top=this._previousHTMLStyles.top,n.classList.remove("cdk-global-scrollblock"),NE&&(i.scrollBehavior=r.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),NE&&(i.scrollBehavior=o,r.scrollBehavior=a)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;let e=this._document.documentElement,i=this._viewportRuler.getViewportSize();return e.scrollHeight>i.height||e.scrollWidth>i.width}};function HE(t,n){return new Tf(t.get(pr),t.get(R),t.get(jn),n)}var Tf=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(n,e,i,r){this._scrollDispatcher=n,this._ngZone=e,this._viewportRuler=i,this._config=r}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(this._scrollSubscription)return;let n=this._scrollDispatcher.scrolled(0).pipe(me(e=>!e||!this._overlayRef.overlayElement.contains(e.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=n.subscribe(()=>{let e=this._viewportRuler.getViewportScrollPosition().top;Math.abs(e-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=n.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var Bl=class{enable(){}disable(){}attach(){}};function u_(t,n){return n.some(e=>{let i=t.bottom<e.top,r=t.top>e.bottom,o=t.right<e.left,a=t.left>e.right;return i||r||o||a})}function PE(t,n){return n.some(e=>{let i=t.top<e.top,r=t.bottom>e.bottom,o=t.left<e.left,a=t.right>e.right;return i||r||o||a})}function _o(t,n){return new kf(t.get(pr),t.get(jn),t.get(R),n)}var kf=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(n,e,i,r){this._scrollDispatcher=n,this._viewportRuler=e,this._ngZone=i,this._config=r}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(!this._scrollSubscription){let n=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(n).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:i,height:r}=this._viewportRuler.getViewportSize();u_(e,[{width:i,height:r,bottom:r,right:i,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},UE=(()=>{class t{_injector=d(F);constructor(){}noop=()=>new Bl;close=e=>HE(this._injector,e);block=()=>Ha(this._injector);reposition=e=>_o(this._injector,e);static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Fi=class{positionStrategy;scrollStrategy=new Bl;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(n){if(n){let e=Object.keys(n);for(let i of e)n[i]!==void 0&&(this[i]=n[i])}}};var Af=class{connectionPair;scrollableViewProperties;constructor(n,e){this.connectionPair=n,this.scrollableViewProperties=e}};var zE=(()=>{class t{_attachedOverlays=[];_document=d(j);_isAttached=!1;constructor(){}ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let i=this._attachedOverlays.indexOf(e);i>-1&&this._attachedOverlays.splice(i,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(e,i,r){return r.observers.length<1?!1:e.eventPredicate?e.eventPredicate(i):!0}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),$E=(()=>{class t extends zE{_ngZone=d(R);_renderer=d(tt).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=e=>{let i=this._attachedOverlays;for(let r=i.length-1;r>-1;r--){let o=i[r];if(this.canReceiveEvent(o,e,o._keydownEvents)){this._ngZone.run(()=>o._keydownEvents.next(e));break}}};static \u0275fac=(()=>{let e;return function(r){return(e||(e=ze(t)))(r||t)}})();static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),WE=(()=>{class t extends zE{_platform=d(ue);_ngZone=d(R);_renderer=d(tt).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let i=this._document.body,r={capture:!0},o=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[o.listen(i,"pointerdown",this._pointerDownListener,r),o.listen(i,"click",this._clickListener,r),o.listen(i,"auxclick",this._clickListener,r),o.listen(i,"contextmenu",this._clickListener,r)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=i.style.cursor,i.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=e=>{this._pointerDownEventTarget=St(e)};_clickListener=e=>{let i=St(e),r=e.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:i;this._pointerDownEventTarget=null;let o=this._attachedOverlays.slice();for(let a=o.length-1;a>-1;a--){let s=o[a],l=s._outsidePointerEvents;if(!(!s.hasAttached()||!this.canReceiveEvent(s,e,l))){if(FE(s.overlayElement,i)||FE(s.overlayElement,r))break;this._ngZone?this._ngZone.run(()=>l.next(e)):l.next(e)}}};static \u0275fac=(()=>{let e;return function(r){return(e||(e=ze(t)))(r||t)}})();static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function FE(t,n){let e=typeof ShadowRoot<"u"&&ShadowRoot,i=n;for(;i;){if(i===t)return!0;i=e&&i instanceof ShadowRoot?i.host:i.parentNode}return!1}var GE=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=x({type:t,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(i,r){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
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
`],encapsulation:2,changeDetection:0})}return t})(),Nf=(()=>{class t{_platform=d(ue);_containerElement;_document=d(j);_styleLoader=d(it);constructor(){}ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e="cdk-overlay-container";if(this._platform.isBrowser||Pv()){let r=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let o=0;o<r.length;o++)r[o].remove()}let i=this._document.createElement("div");i.classList.add(e),Pv()?i.setAttribute("platform","test"):this._platform.isBrowser||i.setAttribute("platform","server"),this._document.body.appendChild(i),this._containerElement=i}_loadStyles(){this._styleLoader.load(GE)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),f_=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(n,e,i,r){this._renderer=e,this._ngZone=i,this.element=n.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=e.listen(this.element,"click",r)}detach(){this._ngZone.runOutsideAngular(()=>{let n=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(n,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),n.style.pointerEvents="none",n.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function m_(t){return t&&t.nodeType===1}var Ba=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new D;_attachments=new D;_detachments=new D;_positionStrategy;_scrollStrategy;_locationChanges=le.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new D;_outsidePointerEvents=new D;_afterNextRenderRef;constructor(n,e,i,r,o,a,s,l,c,u=!1,f,p){this._portalOutlet=n,this._host=e,this._pane=i,this._config=r,this._ngZone=o,this._keyboardDispatcher=a,this._document=s,this._location=l,this._outsideClickDispatcher=c,this._animationsDisabled=u,this._injector=f,this._renderer=p,r.scrollStrategy&&(this._scrollStrategy=r.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=r.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(n){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(n);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=$e(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof e?.onDestroy=="function"&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let n=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),n}dispose(){if(this._disposed)return;let n=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,n&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(n){n!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=n,this.hasAttached()&&(n.attach(this),this.updatePosition()))}updateSize(n){this._config=y(y({},this._config),n),this._updateElementSize()}setDirection(n){this._config=K(y({},this._config),{direction:n}),this._updateElementDirection()}addPanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!0)}removePanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!1)}getDirection(){let n=this._config.direction;return n?typeof n=="string"?n:n.value:"ltr"}updateScrollStrategy(n){n!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=n,this.hasAttached()&&(n.attach(this),n.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let n=this._pane.style;n.width=Ke(this._config.width),n.height=Ke(this._config.height),n.minWidth=Ke(this._config.minWidth),n.minHeight=Ke(this._config.minHeight),n.maxWidth=Ke(this._config.maxWidth),n.maxHeight=Ke(this._config.maxHeight)}_togglePointerEvents(n){this._pane.style.pointerEvents=n?"":"none"}_attachHost(){if(!this._host.parentElement){let n=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;m_(n)?n.after(this._host):n?.type==="parent"?n.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let n="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new f_(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(n))}):this._backdropRef.element.classList.add(n)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(n,e,i){let r=va(e||[]).filter(o=>!!o);r.length&&(i?n.classList.add(...r):n.classList.remove(...r))}_detachContentWhenEmpty(){let n=!1;try{this._detachContentAfterRenderRef=$e(()=>{n=!0,this._detachContent()},{injector:this._injector})}catch(e){if(n)throw e;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let n=this._scrollStrategy;n?.disable(),n?.detach?.()}},LE="cdk-overlay-connected-position-bounding-box",EF=/([A-Za-z%]+)$/;function Vl(t,n){return new Rf(n,t.get(jn),t.get(j),t.get(ue),t.get(Nf))}var Rf=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new D;_resizeSubscription=le.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(n,e,i,r,o){this._viewportRuler=e,this._document=i,this._platform=r,this._overlayContainer=o,this.setOrigin(n)}attach(n){this._overlayRef&&this._overlayRef,this._validatePositions(),n.hostElement.classList.add(LE),this._overlayRef=n,this._boundingBox=n.hostElement,this._pane=n.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let n=this._originRect,e=this._overlayRect,i=this._viewportRect,r=this._containerRect,o=[],a;for(let s of this._preferredPositions){let l=this._getOriginPoint(n,r,s),c=this._getOverlayPoint(l,e,s),u=this._getOverlayFit(c,e,i,s);if(u.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(s,l);return}if(this._canFitWithFlexibleDimensions(u,c,i)){o.push({position:s,origin:l,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(l,s)});continue}(!a||a.overlayFit.visibleArea<u.visibleArea)&&(a={overlayFit:u,overlayPoint:c,originPoint:l,position:s,overlayRect:e})}if(o.length){let s=null,l=-1;for(let c of o){let u=c.boundingBoxRect.width*c.boundingBoxRect.height*(c.position.weight||1);u>l&&(l=u,s=c)}this._isPushed=!1,this._applyPosition(s.position,s.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(a.position,a.originPoint);return}this._applyPosition(a.position,a.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&go(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(LE),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let n=this._lastPosition;n?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(n,this._getOriginPoint(this._originRect,this._containerRect,n))):this.apply()}withScrollableContainers(n){return this._scrollables=n,this}withPositions(n){return this._preferredPositions=n,n.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(n){return this._viewportMargin=n,this}withFlexibleDimensions(n=!0){return this._hasFlexibleDimensions=n,this}withGrowAfterOpen(n=!0){return this._growAfterOpen=n,this}withPush(n=!0){return this._canPush=n,this}withLockedPosition(n=!0){return this._positionLocked=n,this}setOrigin(n){return this._origin=n,this}withDefaultOffsetX(n){return this._offsetX=n,this}withDefaultOffsetY(n){return this._offsetY=n,this}withTransformOriginOn(n){return this._transformOriginSelector=n,this}withPopoverLocation(n){return this._popoverLocation=n,this}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof O?this._origin.nativeElement:m_(this._origin)?this._origin:null}_getOriginPoint(n,e,i){let r;if(i.originX=="center")r=n.left+n.width/2;else{let a=this._isRtl()?n.right:n.left,s=this._isRtl()?n.left:n.right;r=i.originX=="start"?a:s}e.left<0&&(r-=e.left);let o;return i.originY=="center"?o=n.top+n.height/2:o=i.originY=="top"?n.top:n.bottom,e.top<0&&(o-=e.top),{x:r,y:o}}_getOverlayPoint(n,e,i){let r;i.overlayX=="center"?r=-e.width/2:i.overlayX==="start"?r=this._isRtl()?-e.width:0:r=this._isRtl()?0:-e.width;let o;return i.overlayY=="center"?o=-e.height/2:o=i.overlayY=="top"?0:-e.height,{x:n.x+r,y:n.y+o}}_getOverlayFit(n,e,i,r){let o=BE(e),{x:a,y:s}=n,l=this._getOffset(r,"x"),c=this._getOffset(r,"y");l&&(a+=l),c&&(s+=c);let u=0-a,f=a+o.width-i.width,p=0-s,g=s+o.height-i.height,C=this._subtractOverflows(o.width,u,f),I=this._subtractOverflows(o.height,p,g),k=C*I;return{visibleArea:k,isCompletelyWithinViewport:o.width*o.height===k,fitsInViewportVertically:I===o.height,fitsInViewportHorizontally:C==o.width}}_canFitWithFlexibleDimensions(n,e,i){if(this._hasFlexibleDimensions){let r=i.bottom-e.y,o=i.right-e.x,a=jE(this._overlayRef.getConfig().minHeight),s=jE(this._overlayRef.getConfig().minWidth),l=n.fitsInViewportVertically||a!=null&&a<=r,c=n.fitsInViewportHorizontally||s!=null&&s<=o;return l&&c}return!1}_pushOverlayOnScreen(n,e,i){if(this._previousPushAmount&&this._positionLocked)return{x:n.x+this._previousPushAmount.x,y:n.y+this._previousPushAmount.y};let r=BE(e),o=this._viewportRect,a=Math.max(n.x+r.width-o.width,0),s=Math.max(n.y+r.height-o.height,0),l=Math.max(o.top-i.top-n.y,0),c=Math.max(o.left-i.left-n.x,0),u=0,f=0;return r.width<=o.width?u=c||-a:u=n.x<this._getViewportMarginStart()?o.left-i.left-n.x:0,r.height<=o.height?f=l||-s:f=n.y<this._getViewportMarginTop()?o.top-i.top-n.y:0,this._previousPushAmount={x:u,y:f},{x:n.x+u,y:n.y+f}}_applyPosition(n,e){if(this._setTransformOrigin(n),this._setOverlayElementStyles(e,n),this._setBoundingBoxStyles(e,n),n.panelClass&&this._addPanelClasses(n.panelClass),this._positionChanges.observers.length){let i=this._getScrollVisibility();if(n!==this._lastPosition||!this._lastScrollVisibility||!IF(this._lastScrollVisibility,i)){let r=new Af(n,i);this._positionChanges.next(r)}this._lastScrollVisibility=i}this._lastPosition=n,this._isInitialRender=!1}_setTransformOrigin(n){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),i,r=n.overlayY;n.overlayX==="center"?i="center":this._isRtl()?i=n.overlayX==="start"?"right":"left":i=n.overlayX==="start"?"left":"right";for(let o=0;o<e.length;o++)e[o].style.transformOrigin=`${i} ${r}`}_calculateBoundingBoxRect(n,e){let i=this._viewportRect,r=this._isRtl(),o,a,s;if(e.overlayY==="top")a=n.y,o=i.height-a+this._getViewportMarginBottom();else if(e.overlayY==="bottom")s=i.height-n.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),o=i.height-s+this._getViewportMarginTop();else{let g=Math.min(i.bottom-n.y+i.top,n.y),C=this._lastBoundingBoxSize.height;o=g*2,a=n.y-g,o>C&&!this._isInitialRender&&!this._growAfterOpen&&(a=n.y-C/2)}let l=e.overlayX==="start"&&!r||e.overlayX==="end"&&r,c=e.overlayX==="end"&&!r||e.overlayX==="start"&&r,u,f,p;if(c)p=i.width-n.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),u=n.x-this._getViewportMarginStart();else if(l)f=n.x,u=i.right-n.x-this._getViewportMarginEnd();else{let g=Math.min(i.right-n.x+i.left,n.x),C=this._lastBoundingBoxSize.width;u=g*2,f=n.x-g,u>C&&!this._isInitialRender&&!this._growAfterOpen&&(f=n.x-C/2)}return{top:a,left:f,bottom:s,right:p,width:u,height:o}}_setBoundingBoxStyles(n,e){let i=this._calculateBoundingBoxRect(n,e);!this._isInitialRender&&!this._growAfterOpen&&(i.height=Math.min(i.height,this._lastBoundingBoxSize.height),i.width=Math.min(i.width,this._lastBoundingBoxSize.width));let r={};if(this._hasExactPosition())r.top=r.left="0",r.bottom=r.right="auto",r.maxHeight=r.maxWidth="",r.width=r.height="100%";else{let o=this._overlayRef.getConfig().maxHeight,a=this._overlayRef.getConfig().maxWidth;r.width=Ke(i.width),r.height=Ke(i.height),r.top=Ke(i.top)||"auto",r.bottom=Ke(i.bottom)||"auto",r.left=Ke(i.left)||"auto",r.right=Ke(i.right)||"auto",e.overlayX==="center"?r.alignItems="center":r.alignItems=e.overlayX==="end"?"flex-end":"flex-start",e.overlayY==="center"?r.justifyContent="center":r.justifyContent=e.overlayY==="bottom"?"flex-end":"flex-start",o&&(r.maxHeight=Ke(o)),a&&(r.maxWidth=Ke(a))}this._lastBoundingBoxSize=i,go(this._boundingBox.style,r)}_resetBoundingBoxStyles(){go(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){go(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(n,e){let i={},r=this._hasExactPosition(),o=this._hasFlexibleDimensions,a=this._overlayRef.getConfig();if(r){let u=this._viewportRuler.getViewportScrollPosition();go(i,this._getExactOverlayY(e,n,u)),go(i,this._getExactOverlayX(e,n,u))}else i.position="static";let s="",l=this._getOffset(e,"x"),c=this._getOffset(e,"y");l&&(s+=`translateX(${l}px) `),c&&(s+=`translateY(${c}px)`),i.transform=s.trim(),a.maxHeight&&(r?i.maxHeight=Ke(a.maxHeight):o&&(i.maxHeight="")),a.maxWidth&&(r?i.maxWidth=Ke(a.maxWidth):o&&(i.maxWidth="")),go(this._pane.style,i)}_getExactOverlayY(n,e,i){let r={top:"",bottom:""},o=this._getOverlayPoint(e,this._overlayRect,n);if(this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,i)),n.overlayY==="bottom"){let a=this._document.documentElement.clientHeight;r.bottom=`${a-(o.y+this._overlayRect.height)}px`}else r.top=Ke(o.y);return r}_getExactOverlayX(n,e,i){let r={left:"",right:""},o=this._getOverlayPoint(e,this._overlayRect,n);this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,i));let a;if(this._isRtl()?a=n.overlayX==="end"?"left":"right":a=n.overlayX==="end"?"right":"left",a==="right"){let s=this._document.documentElement.clientWidth;r.right=`${s-(o.x+this._overlayRect.width)}px`}else r.left=Ke(o.x);return r}_getScrollVisibility(){let n=this._getOriginRect(),e=this._pane.getBoundingClientRect(),i=this._scrollables.map(r=>r.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:PE(n,i),isOriginOutsideView:u_(n,i),isOverlayClipped:PE(e,i),isOverlayOutsideView:u_(e,i)}}_subtractOverflows(n,...e){return e.reduce((i,r)=>i-Math.max(r,0),n)}_getNarrowedViewportRect(){let n=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,i=this._viewportRuler.getViewportScrollPosition();return{top:i.top+this._getViewportMarginTop(),left:i.left+this._getViewportMarginStart(),right:i.left+n-this._getViewportMarginEnd(),bottom:i.top+e-this._getViewportMarginBottom(),width:n-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:e-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(n,e){return e==="x"?n.offsetX==null?this._offsetX:n.offsetX:n.offsetY==null?this._offsetY:n.offsetY}_validatePositions(){}_addPanelClasses(n){this._pane&&va(n).forEach(e=>{e!==""&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(n=>{this._pane.classList.remove(n)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let n=this._origin;if(n instanceof O)return n.nativeElement.getBoundingClientRect();if(n instanceof Element)return n.getBoundingClientRect();let e=n.width||0,i=n.height||0;return{top:n.y,bottom:n.y+i,left:n.x,right:n.x+e,height:i,width:e}}_getContainerRect(){let n=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",e=this._overlayContainer.getContainerElement();n&&(e.style.display="block");let i=e.getBoundingClientRect();return n&&(e.style.display=""),i}};function go(t,n){for(let e in n)n.hasOwnProperty(e)&&(t[e]=n[e]);return t}function jE(t){if(typeof t!="number"&&t!=null){let[n,e]=t.split(EF);return!e||e==="px"?parseFloat(n):null}return t||null}function BE(t){return{top:Math.floor(t.top),right:Math.floor(t.right),bottom:Math.floor(t.bottom),left:Math.floor(t.left),width:Math.floor(t.width),height:Math.floor(t.height)}}function IF(t,n){return t===n?!0:t.isOriginClipped===n.isOriginClipped&&t.isOriginOutsideView===n.isOriginOutsideView&&t.isOverlayClipped===n.isOverlayClipped&&t.isOverlayOutsideView===n.isOverlayOutsideView}var VE="cdk-global-overlay-wrapper";function gr(t){return new Of}var Of=class{_overlayRef;_cssPosition="static";_topOffset="";_bottomOffset="";_alignItems="";_xPosition="";_xOffset="";_width="";_height="";_isDisposed=!1;attach(n){let e=n.getConfig();this._overlayRef=n,this._width&&!e.width&&n.updateSize({width:this._width}),this._height&&!e.height&&n.updateSize({height:this._height}),n.hostElement.classList.add(VE),this._isDisposed=!1}top(n=""){return this._bottomOffset="",this._topOffset=n,this._alignItems="flex-start",this}left(n=""){return this._xOffset=n,this._xPosition="left",this}bottom(n=""){return this._topOffset="",this._bottomOffset=n,this._alignItems="flex-end",this}right(n=""){return this._xOffset=n,this._xPosition="right",this}start(n=""){return this._xOffset=n,this._xPosition="start",this}end(n=""){return this._xOffset=n,this._xPosition="end",this}width(n=""){return this._overlayRef?this._overlayRef.updateSize({width:n}):this._width=n,this}height(n=""){return this._overlayRef?this._overlayRef.updateSize({height:n}):this._height=n,this}centerHorizontally(n=""){return this.left(n),this._xPosition="center",this}centerVertically(n=""){return this.top(n),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let n=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,i=this._overlayRef.getConfig(),{width:r,height:o,maxWidth:a,maxHeight:s}=i,l=(r==="100%"||r==="100vw")&&(!a||a==="100%"||a==="100vw"),c=(o==="100%"||o==="100vh")&&(!s||s==="100%"||s==="100vh"),u=this._xPosition,f=this._xOffset,p=this._overlayRef.getConfig().direction==="rtl",g="",C="",I="";l?I="flex-start":u==="center"?(I="center",p?C=f:g=f):p?u==="left"||u==="end"?(I="flex-end",g=f):(u==="right"||u==="start")&&(I="flex-start",C=f):u==="left"||u==="start"?(I="flex-start",g=f):(u==="right"||u==="end")&&(I="flex-end",C=f),n.position=this._cssPosition,n.marginLeft=l?"0":g,n.marginTop=c?"0":this._topOffset,n.marginBottom=this._bottomOffset,n.marginRight=l?"0":C,e.justifyContent=I,e.alignItems=c?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let n=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,i=e.style;e.classList.remove(VE),i.justifyContent=i.alignItems=n.marginTop=n.marginBottom=n.marginLeft=n.marginRight=n.position="",this._overlayRef=null,this._isDisposed=!0}},qE=(()=>{class t{_injector=d(F);constructor(){}global(){return gr()}flexibleConnectedTo(e){return Vl(this._injector,e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Hl=new _("OVERLAY_DEFAULT_CONFIG");function Li(t,n){t.get(it).load(GE);let e=t.get(Nf),i=t.get(j),r=t.get(qe),o=t.get(Xt),a=t.get(dt),s=t.get(Ee,null,{optional:!0})||t.get(tt).createRenderer(null,null),l=new Fi(n),c=t.get(Hl,null,{optional:!0})?.usePopover??!0;l.direction=l.direction||a.value,"showPopover"in i.body?l.usePopover=n?.usePopover??c:l.usePopover=!1;let u=i.createElement("div"),f=i.createElement("div");u.id=r.getId("cdk-overlay-"),u.classList.add("cdk-overlay-pane"),f.appendChild(u),l.usePopover&&(f.setAttribute("popover","manual"),f.classList.add("cdk-overlay-popover"));let p=l.usePopover?l.positionStrategy?.getPopoverInsertionPoint?.():null;return m_(p)?p.after(f):p?.type==="parent"?p.element.appendChild(f):e.getContainerElement().appendChild(f),new Ba(new Df(u,o,t),f,u,l,t.get(R),t.get($E),i,t.get(oi),t.get(WE),n?.disableAnimations??t.get(Ps,null,{optional:!0})==="NoopAnimations",t.get(Ce),s)}var YE=(()=>{class t{scrollStrategies=d(UE);_positionBuilder=d(qE);_injector=d(F);constructor(){}create(e){return Li(this._injector,e)}position(){return this._positionBuilder}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),MF=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],SF=new _("cdk-connected-overlay-scroll-strategy",{providedIn:"root",factory:()=>{let t=d(F);return()=>_o(t)}}),Va=(()=>{class t{elementRef=d(O);constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275dir=S({type:t,selectors:[["","cdk-overlay-origin",""],["","overlay-origin",""],["","cdkOverlayOrigin",""]],exportAs:["cdkOverlayOrigin"]})}return t})(),ZE=new _("cdk-connected-overlay-default-config"),Pf=(()=>{class t{_dir=d(dt,{optional:!0});_injector=d(F);_overlayRef;_templatePortal;_backdropSubscription=le.EMPTY;_attachSubscription=le.EMPTY;_detachSubscription=le.EMPTY;_positionSubscription=le.EMPTY;_offsetX;_offsetY;_position;_scrollStrategyFactory=d(SF);_ngZone=d(R);origin;positions;positionStrategy;get offsetX(){return this._offsetX}set offsetX(e){this._offsetX=e,this._position&&this._updatePositionStrategy(this._position)}get offsetY(){return this._offsetY}set offsetY(e){this._offsetY=e,this._position&&this._updatePositionStrategy(this._position)}width;height;minWidth;minHeight;backdropClass;panelClass;viewportMargin=0;scrollStrategy;open=!1;disableClose=!1;transformOriginSelector;hasBackdrop=!1;lockPosition=!1;flexibleDimensions=!1;growAfterOpen=!1;push=!1;disposeOnNavigation=!1;usePopover;matchWidth=!1;set _config(e){typeof e!="string"&&this._assignConfig(e)}backdropClick=new A;positionChange=new A;attach=new A;detach=new A;overlayKeydown=new A;overlayOutsideClick=new A;constructor(){let e=d(lt),i=d(ht),r=d(ZE,{optional:!0}),o=d(Hl,{optional:!0});this.usePopover=o?.usePopover===!1?null:"global",this._templatePortal=new wn(e,i),this.scrollStrategy=this._scrollStrategyFactory(),r&&this._assignConfig(r)}get overlayRef(){return this._overlayRef}get dir(){return this._dir?this._dir.value:"ltr"}ngOnDestroy(){this._attachSubscription.unsubscribe(),this._detachSubscription.unsubscribe(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this._overlayRef?.dispose()}ngOnChanges(e){this._position&&(this._updatePositionStrategy(this._position),this._overlayRef?.updateSize({width:this._getWidth(),minWidth:this.minWidth,height:this.height,minHeight:this.minHeight}),e.origin&&this.open&&this._position.apply()),e.open&&(this.open?this.attachOverlay():this.detachOverlay())}_createOverlay(){(!this.positions||!this.positions.length)&&(this.positions=MF);let e=this._overlayRef=Li(this._injector,this._buildConfig());this._attachSubscription=e.attachments().subscribe(()=>this.attach.emit()),this._detachSubscription=e.detachments().subscribe(()=>this.detach.emit()),e.keydownEvents().subscribe(i=>{this.overlayKeydown.next(i),i.keyCode===27&&!this.disableClose&&!bt(i)&&(i.preventDefault(),this.detachOverlay())}),this._overlayRef.outsidePointerEvents().subscribe(i=>{let r=this._getOriginElement(),o=St(i);(!r||r!==o&&!r.contains(o))&&this.overlayOutsideClick.next(i)})}_buildConfig(){let e=this._position=this.positionStrategy||this._createPositionStrategy(),i=new Fi({direction:this._dir||"ltr",positionStrategy:e,scrollStrategy:this.scrollStrategy,hasBackdrop:this.hasBackdrop,disposeOnNavigation:this.disposeOnNavigation,usePopover:!!this.usePopover});return(this.height||this.height===0)&&(i.height=this.height),(this.minWidth||this.minWidth===0)&&(i.minWidth=this.minWidth),(this.minHeight||this.minHeight===0)&&(i.minHeight=this.minHeight),this.backdropClass&&(i.backdropClass=this.backdropClass),this.panelClass&&(i.panelClass=this.panelClass),i}_updatePositionStrategy(e){let i=this.positions.map(r=>({originX:r.originX,originY:r.originY,overlayX:r.overlayX,overlayY:r.overlayY,offsetX:r.offsetX||this.offsetX,offsetY:r.offsetY||this.offsetY,panelClass:r.panelClass||void 0}));return e.setOrigin(this._getOrigin()).withPositions(i).withFlexibleDimensions(this.flexibleDimensions).withPush(this.push).withGrowAfterOpen(this.growAfterOpen).withViewportMargin(this.viewportMargin).withLockedPosition(this.lockPosition).withTransformOriginOn(this.transformOriginSelector).withPopoverLocation(this.usePopover===null?"global":this.usePopover)}_createPositionStrategy(){let e=Vl(this._injector,this._getOrigin());return this._updatePositionStrategy(e),e}_getOrigin(){return this.origin instanceof Va?this.origin.elementRef:this.origin}_getOriginElement(){return this.origin instanceof Va?this.origin.elementRef.nativeElement:this.origin instanceof O?this.origin.nativeElement:typeof Element<"u"&&this.origin instanceof Element?this.origin:null}_getWidth(){return this.width?this.width:this.matchWidth?this._getOriginElement()?.getBoundingClientRect?.().width:void 0}attachOverlay(){this._overlayRef||this._createOverlay();let e=this._overlayRef;e.getConfig().hasBackdrop=this.hasBackdrop,e.updateSize({width:this._getWidth()}),e.hasAttached()||e.attach(this._templatePortal),this.hasBackdrop?this._backdropSubscription=e.backdropClick().subscribe(i=>this.backdropClick.emit(i)):this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.positionChange.observers.length>0&&(this._positionSubscription=this._position.positionChanges.pipe(xm(()=>this.positionChange.observers.length>0)).subscribe(i=>{this._ngZone.run(()=>this.positionChange.emit(i)),this.positionChange.observers.length===0&&this._positionSubscription.unsubscribe()})),this.open=!0}detachOverlay(){this._overlayRef?.detach(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.open=!1}_assignConfig(e){this.origin=e.origin??this.origin,this.positions=e.positions??this.positions,this.positionStrategy=e.positionStrategy??this.positionStrategy,this.offsetX=e.offsetX??this.offsetX,this.offsetY=e.offsetY??this.offsetY,this.width=e.width??this.width,this.height=e.height??this.height,this.minWidth=e.minWidth??this.minWidth,this.minHeight=e.minHeight??this.minHeight,this.backdropClass=e.backdropClass??this.backdropClass,this.panelClass=e.panelClass??this.panelClass,this.viewportMargin=e.viewportMargin??this.viewportMargin,this.scrollStrategy=e.scrollStrategy??this.scrollStrategy,this.disableClose=e.disableClose??this.disableClose,this.transformOriginSelector=e.transformOriginSelector??this.transformOriginSelector,this.hasBackdrop=e.hasBackdrop??this.hasBackdrop,this.lockPosition=e.lockPosition??this.lockPosition,this.flexibleDimensions=e.flexibleDimensions??this.flexibleDimensions,this.growAfterOpen=e.growAfterOpen??this.growAfterOpen,this.push=e.push??this.push,this.disposeOnNavigation=e.disposeOnNavigation??this.disposeOnNavigation,this.usePopover=e.usePopover??this.usePopover,this.matchWidth=e.matchWidth??this.matchWidth}static \u0275fac=function(i){return new(i||t)};static \u0275dir=S({type:t,selectors:[["","cdk-connected-overlay",""],["","connected-overlay",""],["","cdkConnectedOverlay",""]],inputs:{origin:[0,"cdkConnectedOverlayOrigin","origin"],positions:[0,"cdkConnectedOverlayPositions","positions"],positionStrategy:[0,"cdkConnectedOverlayPositionStrategy","positionStrategy"],offsetX:[0,"cdkConnectedOverlayOffsetX","offsetX"],offsetY:[0,"cdkConnectedOverlayOffsetY","offsetY"],width:[0,"cdkConnectedOverlayWidth","width"],height:[0,"cdkConnectedOverlayHeight","height"],minWidth:[0,"cdkConnectedOverlayMinWidth","minWidth"],minHeight:[0,"cdkConnectedOverlayMinHeight","minHeight"],backdropClass:[0,"cdkConnectedOverlayBackdropClass","backdropClass"],panelClass:[0,"cdkConnectedOverlayPanelClass","panelClass"],viewportMargin:[0,"cdkConnectedOverlayViewportMargin","viewportMargin"],scrollStrategy:[0,"cdkConnectedOverlayScrollStrategy","scrollStrategy"],open:[0,"cdkConnectedOverlayOpen","open"],disableClose:[0,"cdkConnectedOverlayDisableClose","disableClose"],transformOriginSelector:[0,"cdkConnectedOverlayTransformOriginOn","transformOriginSelector"],hasBackdrop:[2,"cdkConnectedOverlayHasBackdrop","hasBackdrop",J],lockPosition:[2,"cdkConnectedOverlayLockPosition","lockPosition",J],flexibleDimensions:[2,"cdkConnectedOverlayFlexibleDimensions","flexibleDimensions",J],growAfterOpen:[2,"cdkConnectedOverlayGrowAfterOpen","growAfterOpen",J],push:[2,"cdkConnectedOverlayPush","push",J],disposeOnNavigation:[2,"cdkConnectedOverlayDisposeOnNavigation","disposeOnNavigation",J],usePopover:[0,"cdkConnectedOverlayUsePopover","usePopover"],matchWidth:[2,"cdkConnectedOverlayMatchWidth","matchWidth",J],_config:[0,"cdkConnectedOverlay","_config"]},outputs:{backdropClick:"backdropClick",positionChange:"positionChange",attach:"attach",detach:"detach",overlayKeydown:"overlayKeydown",overlayOutsideClick:"overlayOutsideClick"},exportAs:["cdkConnectedOverlay"],features:[Ue]})}return t})(),mi=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=U({type:t});static \u0275inj=L({providers:[YE],imports:[he,hr,o_,o_]})}return t})();var QE=(()=>{class t{_animationsDisabled=Ae();state="unchecked";disabled=!1;appearance="full";constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=x({type:t,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(i,r){i&2&&W("mat-pseudo-checkbox-indeterminate",r.state==="indeterminate")("mat-pseudo-checkbox-checked",r.state==="checked")("mat-pseudo-checkbox-disabled",r.disabled)("mat-pseudo-checkbox-minimal",r.appearance==="minimal")("mat-pseudo-checkbox-full",r.appearance==="full")("_mat-animation-noopable",r._animationsDisabled)},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},decls:0,vars:0,template:function(i,r){},styles:[`.mat-pseudo-checkbox {
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
`],encapsulation:2,changeDetection:0})}return t})();var TF=["text"],kF=[[["mat-icon"]],"*"],AF=["mat-icon","*"];function RF(t,n){if(t&1&&z(0,"mat-pseudo-checkbox",1),t&2){let e=G();Q("disabled",e.disabled)("state",e.selected?"checked":"unchecked")}}function OF(t,n){if(t&1&&z(0,"mat-pseudo-checkbox",3),t&2){let e=G();Q("disabled",e.disabled)}}function NF(t,n){if(t&1&&(m(0,"span",4),v(1),h()),t&2){let e=G();w(),Le("(",e.group.label,")")}}var p_=new _("MAT_OPTION_PARENT_COMPONENT"),g_=new _("MatOptgroup");var h_=class{source;isUserInput;constructor(n,e=!1){this.source=n,this.isUserInput=e}},vr=(()=>{class t{_element=d(O);_changeDetectorRef=d(Ne);_parent=d(p_,{optional:!0});group=d(g_,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue="";get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=d(qe).getId("mat-option-");get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=N(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new A;_text;_stateChanges=new D;constructor(){let e=d(it);e.load(cr),e.load(ga),this._signalDisableRipple=!!this._parent&&Jn(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||"").trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,i){let r=this._getHostElement();typeof r.focus=="function"&&r.focus(i)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!bt(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new h_(this,e))}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=x({type:t,selectors:[["mat-option"]],viewQuery:function(i,r){if(i&1&&Fe(TF,7),i&2){let o;B(o=V())&&(r._text=o.first)}},hostAttrs:["role","option",1,"mat-mdc-option","mdc-list-item"],hostVars:11,hostBindings:function(i,r){i&1&&T("click",function(){return r._selectViaInteraction()})("keydown",function(a){return r._handleKeydown(a)}),i&2&&(ei("id",r.id),oe("aria-selected",r.selected)("aria-disabled",r.disabled.toString()),W("mdc-list-item--selected",r.selected)("mat-mdc-option-multiple",r.multiple)("mat-mdc-option-active",r.active)("mdc-list-item--disabled",r.disabled))},inputs:{value:"value",id:"id",disabled:[2,"disabled","disabled",J]},outputs:{onSelectionChange:"onSelectionChange"},exportAs:["matOption"],ngContentSelectors:AF,decls:8,vars:5,consts:[["text",""],["aria-hidden","true",1,"mat-mdc-option-pseudo-checkbox",3,"disabled","state"],[1,"mdc-list-item__primary-text"],["state","checked","aria-hidden","true","appearance","minimal",1,"mat-mdc-option-pseudo-checkbox",3,"disabled"],[1,"cdk-visually-hidden"],["aria-hidden","true","mat-ripple","",1,"mat-mdc-option-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"]],template:function(i,r){i&1&&(Me(kF),ie(0,RF,1,2,"mat-pseudo-checkbox",1),X(1),m(2,"span",2,0),X(4,1),h(),ie(5,OF,1,1,"mat-pseudo-checkbox",3),ie(6,NF,2,1,"span",4),z(7,"div",5)),i&2&&(re(r.multiple?0:-1),w(5),re(!r.multiple&&r.selected&&!r.hideSingleSelectionIndicator?5:-1),w(),re(r.group&&r.group._inert?6:-1),w(),Q("matRippleTrigger",r._getHostElement())("matRippleDisabled",r.disabled||r.disableRipple))},dependencies:[QE,Il],styles:[`.mat-mdc-option {
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
`],encapsulation:2,changeDetection:0})}return t})();function KE(t,n,e){if(e.length){let i=n.toArray(),r=e.toArray(),o=0;for(let a=0;a<t+1;a++)i[a].group&&i[a].group===r[o]&&o++;return o}return 0}function XE(t,n,e,i){return t<e?t:t+n>e+i?Math.max(0,t-i+n):e}var Ff=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=U({type:t});static \u0275inj=L({imports:[he]})}return t})();var v_=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=U({type:t});static \u0275inj=L({imports:[xa,Ff,vr,he]})}return t})();var PF=["trigger"],FF=["panel"],LF=[[["mat-select-trigger"]],"*"],jF=["mat-select-trigger","*"];function BF(t,n){if(t&1&&(m(0,"span",4),v(1),h()),t&2){let e=G();w(),_e(e.placeholder)}}function VF(t,n){t&1&&X(0)}function HF(t,n){if(t&1&&(m(0,"span",11),v(1),h()),t&2){let e=G(2);w(),_e(e.triggerValue)}}function UF(t,n){if(t&1&&(m(0,"span",5),ie(1,VF,1,0)(2,HF,2,1,"span",11),h()),t&2){let e=G();w(),re(e.customTrigger?1:2)}}function zF(t,n){if(t&1){let e=It();m(0,"div",12,1),T("keydown",function(r){Ve(e);let o=G();return He(o._handleKeydown(r))}),X(2,1),h()}if(t&2){let e=G();Ut(e.panelClass),W("mat-select-panel-animations-enabled",!e._animationsDisabled)("mat-primary",(e._parentFormField==null?null:e._parentFormField.color)==="primary")("mat-accent",(e._parentFormField==null?null:e._parentFormField.color)==="accent")("mat-warn",(e._parentFormField==null?null:e._parentFormField.color)==="warn")("mat-undefined",!(e._parentFormField!=null&&e._parentFormField.color)),oe("id",e.id+"-panel")("aria-multiselectable",e.multiple)("aria-label",e.ariaLabel||null)("aria-labelledby",e._getPanelAriaLabelledby())}}var $F=new _("mat-select-scroll-strategy",{providedIn:"root",factory:()=>{let t=d(F);return()=>_o(t)}}),WF=new _("MAT_SELECT_CONFIG"),GF=new _("MatSelectTrigger"),__=class{source;value;constructor(n,e){this.source=n,this.value=e}},Lf=(()=>{class t{_viewportRuler=d(jn);_changeDetectorRef=d(Ne);_elementRef=d(O);_dir=d(dt,{optional:!0});_idGenerator=d(qe);_renderer=d(Ee);_parentFormField=d(Sl,{optional:!0});ngControl=d(Pi,{self:!0,optional:!0});_liveAnnouncer=d(wl);_defaultOptions=d(WF,{optional:!0});_animationsDisabled=Ae();_popoverLocation;_initialized=new D;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"}];_scrollOptionIntoView(e){let i=this.options.toArray()[e];if(i){let r=this.panel.nativeElement,o=KE(e,this.options,this.optionGroups),a=i._getHostElement();e===0&&o===1?r.scrollTop=0:r.scrollTop=XE(a.offsetTop,a.offsetHeight,r.scrollTop,r.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new __(this,e)}_scrollStrategyFactory=d($F);_panelOpen=!1;_compareWith=(e,i)=>e===i;_uid=this._idGenerator.getId("mat-select-");_triggerAriaLabelledBy=null;_previousControl;_destroy=new D;_errorStateTracker;stateChanges=new D;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId("mat-select-value-");_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||"";get focused(){return this._focused||this._panelOpen}_focused=!1;controlType="mat-select";trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=N(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(Ta.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}_value;ariaLabel="";ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<"u"?this._defaultOptions.panelWidth:"auto";canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=Dn(()=>{let e=this.options;return e?e.changes.pipe(rt(e),et(()=>Lt(...e.map(i=>i.onSelectionChange)))):this._initialized.pipe(et(()=>this.optionSelectionChanges))});openedChange=new A;_openedStream=this.openedChange.pipe(me(e=>e),te(()=>{}));_closedStream=this.openedChange.pipe(me(e=>!e),te(()=>{}));selectionChange=new A;valueChange=new A;constructor(){let e=d(Cf),i=d(Nl,{optional:!0}),r=d(Pl,{optional:!0}),o=d(new rr("tabindex"),{optional:!0}),a=d(Hl,{optional:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new Ra(e,this.ngControl,r,i,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=o==null?0:parseInt(o)||0,this._popoverLocation=a?.usePopover===!1?null:"inline",this.id=this.id}ngOnInit(){this._selectionModel=new jl(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(pe(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(pe(this._destroy)).subscribe(e=>{e.added.forEach(i=>i.select()),e.removed.forEach(i=>i.deselect())}),this.options.changes.pipe(rt(null),pe(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),i=this.ngControl;if(e!==this._triggerAriaLabelledBy){let r=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?r.setAttribute("aria-labelledby",e):r.removeAttribute("aria-labelledby")}i&&(this._previousControl!==i.control&&(this._previousControl!==void 0&&i.disabled!==null&&i.disabled!==this.disabled&&(this.disabled=i.disabled),this._previousControl=i.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete(),this._clearFromModal()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._applyModalPanelOwnership(),this._panelOpen=!0,this._overlayDir.positionChange.pipe(Ye(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}_trackedModal=null;_applyModalPanelOwnership(){let e=this._elementRef.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');if(!e)return;let i=`${this.id}-panel`;this._trackedModal&&Xu(this._trackedModal,"aria-owns",i),Nv(e,"aria-owns",i),this._trackedModal=e}_clearFromModal(){if(!this._trackedModal)return;let e=`${this.id}-panel`;Xu(this._trackedModal,"aria-owns",e),this._trackedModal=null}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?"rtl":"ltr"),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{i(),clearTimeout(r),this._cleanupDetach=void 0};let e=this.panel.nativeElement,i=this._renderer.listen(e,"animationend",o=>{o.animationName==="_mat-select-exit"&&(this._cleanupDetach?.(),this._detachOverlay())}),r=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);e.classList.add("mat-select-panel-exit")}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return"";if(this._multiple){let e=this._selectionModel.selected.map(i=>i.viewValue);return this._isRtl()&&e.reverse(),e.join(", ")}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value==="rtl":!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let i=e.keyCode,r=i===40||i===38||i===37||i===39,o=i===13||i===32,a=this._keyManager;if(!a.isTyping()&&o&&!bt(e)||(this.multiple||e.altKey)&&r)e.preventDefault(),this.open();else if(!this.multiple){let s=this.selected;a.onKeydown(e);let l=this.selected;l&&s!==l&&this._liveAnnouncer.announce(l.viewValue,1e4)}}_handleOpenKeydown(e){let i=this._keyManager,r=e.keyCode,o=r===40||r===38,a=i.isTyping();if(o&&e.altKey)e.preventDefault(),this.close();else if(!a&&(r===13||r===32)&&i.activeItem&&!bt(e))e.preventDefault(),i.activeItem._selectViaInteraction();else if(!a&&this._multiple&&r===65&&e.ctrlKey){e.preventDefault();let s=this.options.some(l=>!l.disabled&&!l.selected);this.options.forEach(l=>{l.disabled||(s?l.select():l.deselect())})}else{let s=i.activeItemIndex;i.onKeydown(e),this._multiple&&o&&e.shiftKey&&i.activeItem&&i.activeItemIndex!==s&&i.activeItem._selectViaInteraction()}}_handleOverlayKeydown(e){e.keyCode===27&&!bt(e)&&(e.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(i=>i.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)Array.isArray(e),e.forEach(i=>this._selectOptionByValue(i)),this._sortValues();else{let i=this._selectOptionByValue(e);i?this._keyManager.updateActiveItem(i):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let i=this.options.find(r=>{if(this._selectionModel.isSelected(r))return!1;try{return(r.value!=null||this.canSelectNullableOptions)&&this._compareWith(r.value,e)}catch{return!1}});return i&&this._selectionModel.select(i),i}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_skipPredicate=e=>this.panelOpen?!1:e.disabled;_getOverlayWidth(e){return this.panelWidth==="auto"?(e instanceof Va?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?"":this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new Dl(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?"rtl":"ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=Lt(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(pe(e)).subscribe(i=>{this._onSelect(i.source,i.isUserInput),i.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),Lt(...this.options.map(i=>i._stateChanges)).pipe(pe(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,i){let r=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(r!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),i&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),i&&this.focus())),r!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((i,r)=>this.sortComparator?this.sortComparator(i,r,e):e.indexOf(i)-e.indexOf(r)),this.stateChanges.next()}}_propagateChanges(e){let i;this.multiple?i=this.selected.map(r=>r.value):i=this.selected?this.selected.value:e,this._value=i,this.valueChange.emit(i),this._onChange(i),this.selectionChange.emit(this._getChangeEvent(i)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let i=0;i<this.options.length;i++)if(!this.options.get(i).disabled){e=i;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,i=e?e+" ":"";return this.ariaLabelledby?i+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||"";return this.ariaLabelledby&&(e+=" "+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let i=this._elementRef.nativeElement;e.length?i.setAttribute("aria-describedby",e.join(" ")):i.removeAttribute("aria-describedby")}onContainerClick(e){let i=St(e);i&&(i.tagName==="MAT-OPTION"||i.classList.contains("cdk-overlay-backdrop")||i.closest(".mat-mdc-select-panel"))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=x({type:t,selectors:[["mat-select"]],contentQueries:function(i,r,o){if(i&1&&Mt(o,GF,5)(o,vr,5)(o,g_,5),i&2){let a;B(a=V())&&(r.customTrigger=a.first),B(a=V())&&(r.options=a),B(a=V())&&(r.optionGroups=a)}},viewQuery:function(i,r){if(i&1&&Fe(PF,5)(FF,5)(Pf,5),i&2){let o;B(o=V())&&(r.trigger=o.first),B(o=V())&&(r.panel=o.first),B(o=V())&&(r._overlayDir=o.first)}},hostAttrs:["role","combobox","aria-haspopup","listbox",1,"mat-mdc-select"],hostVars:21,hostBindings:function(i,r){i&1&&T("keydown",function(a){return r._handleKeydown(a)})("focus",function(){return r._onFocus()})("blur",function(){return r._onBlur()}),i&2&&(oe("id",r.id)("tabindex",r.disabled?-1:r.tabIndex)("aria-controls",r.panelOpen?r.id+"-panel":null)("aria-expanded",r.panelOpen)("aria-label",r.ariaLabel||null)("aria-required",r.required.toString())("aria-disabled",r.disabled.toString())("aria-invalid",r.errorState)("aria-activedescendant",r._getAriaActiveDescendant()),W("mat-mdc-select-disabled",r.disabled)("mat-mdc-select-invalid",r.errorState)("mat-mdc-select-required",r.required)("mat-mdc-select-empty",r.empty)("mat-mdc-select-multiple",r.multiple)("mat-select-open",r.panelOpen))},inputs:{userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],panelClass:"panelClass",disabled:[2,"disabled","disabled",J],disableRipple:[2,"disableRipple","disableRipple",J],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:ri(e)],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",J],placeholder:"placeholder",required:[2,"required","required",J],multiple:[2,"multiple","multiple",J],disableOptionCentering:[2,"disableOptionCentering","disableOptionCentering",J],compareWith:"compareWith",value:"value",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],errorStateMatcher:"errorStateMatcher",typeaheadDebounceInterval:[2,"typeaheadDebounceInterval","typeaheadDebounceInterval",ri],sortComparator:"sortComparator",id:"id",panelWidth:"panelWidth",canSelectNullableOptions:[2,"canSelectNullableOptions","canSelectNullableOptions",J]},outputs:{openedChange:"openedChange",_openedStream:"opened",_closedStream:"closed",selectionChange:"selectionChange",valueChange:"valueChange"},exportAs:["matSelect"],features:[Pe([{provide:Ml,useExisting:t},{provide:p_,useExisting:t}]),Ue],ngContentSelectors:jF,decls:11,vars:10,consts:[["fallbackOverlayOrigin","cdkOverlayOrigin","trigger",""],["panel",""],["cdk-overlay-origin","",1,"mat-mdc-select-trigger",3,"click"],[1,"mat-mdc-select-value"],[1,"mat-mdc-select-placeholder","mat-mdc-select-min-line"],[1,"mat-mdc-select-value-text"],[1,"mat-mdc-select-arrow-wrapper"],[1,"mat-mdc-select-arrow"],["viewBox","0 0 24 24","width","24px","height","24px","focusable","false","aria-hidden","true"],["d","M7 10l5 5 5-5z"],["cdk-connected-overlay","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"detach","backdropClick","overlayKeydown","cdkConnectedOverlayDisableClose","cdkConnectedOverlayPanelClass","cdkConnectedOverlayScrollStrategy","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayWidth","cdkConnectedOverlayFlexibleDimensions","cdkConnectedOverlayUsePopover"],[1,"mat-mdc-select-min-line"],["role","listbox","tabindex","-1",1,"mat-mdc-select-panel","mdc-menu-surface","mdc-menu-surface--open",3,"keydown"]],template:function(i,r){if(i&1&&(Me(LF),m(0,"div",2,0),T("click",function(){return r.open()}),m(3,"div",3),ie(4,BF,2,1,"span",4)(5,UF,3,1,"span",5),h(),m(6,"div",6)(7,"div",7),Ds(),m(8,"svg",8),z(9,"path",9),h()()()(),pt(10,zF,3,16,"ng-template",10),T("detach",function(){return r.close()})("backdropClick",function(){return r.close()})("overlayKeydown",function(a){return r._handleOverlayKeydown(a)})),i&2){let o=hn(1);w(3),oe("id",r._valueId),w(),re(r.empty?4:5),w(6),Q("cdkConnectedOverlayDisableClose",!0)("cdkConnectedOverlayPanelClass",r._overlayPanelClass)("cdkConnectedOverlayScrollStrategy",r._scrollStrategy)("cdkConnectedOverlayOrigin",r._preferredOverlayOrigin||o)("cdkConnectedOverlayPositions",r._positions)("cdkConnectedOverlayWidth",r._overlayWidth)("cdkConnectedOverlayFlexibleDimensions",!0)("cdkConnectedOverlayUsePopover",r._popoverLocation)}},dependencies:[Va,Pf],styles:[`@keyframes _mat-select-enter {
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
`],encapsulation:2,changeDetection:0})}return t})();var jf=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=U({type:t});static \u0275inj=L({imports:[mi,v_,he,ui,rn,v_]})}return t})();function qF(t,n){}var _r=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;positionStrategy;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;scrollStrategy;closeOnNavigation=!0;closeOnDestroy=!0;closeOnOverlayDetachments=!0;disableAnimations=!1;providers;container;templateContext};var y_=(()=>{class t extends mr{_elementRef=d(O);_focusTrapFactory=d(Sv);_config;_interactivityChecker=d(Mv);_ngZone=d(R);_focusMonitor=d(Oi);_renderer=d(Ee);_changeDetectorRef=d(Ne);_injector=d(F);_platform=d(ue);_document=d(j);_portalOutlet;_focusTrapped=new D;_focusTrap=null;_elementFocusedBeforeDialogWasOpened=null;_closeInteractionType=null;_ariaLabelledByQueue=[];_isDestroyed=!1;constructor(){super(),this._config=d(_r,{optional:!0})||new _r,this._config.ariaLabelledBy&&this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)}_addAriaLabelledBy(e){this._ariaLabelledByQueue.push(e),this._changeDetectorRef.markForCheck()}_removeAriaLabelledBy(e){let i=this._ariaLabelledByQueue.indexOf(e);i>-1&&(this._ariaLabelledByQueue.splice(i,1),this._changeDetectorRef.markForCheck())}_contentAttached(){this._initializeFocusTrap(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._focusTrapped.complete(),this._isDestroyed=!0,this._restoreFocus()}attachComponentPortal(e){this._portalOutlet.hasAttached();let i=this._portalOutlet.attachComponentPortal(e);return this._contentAttached(),i}attachTemplatePortal(e){this._portalOutlet.hasAttached();let i=this._portalOutlet.attachTemplatePortal(e);return this._contentAttached(),i}attachDomPortal=e=>{this._portalOutlet.hasAttached();let i=this._portalOutlet.attachDomPortal(e);return this._contentAttached(),i};_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(e,i){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let r=()=>{o(),a(),e.removeAttribute("tabindex")},o=this._renderer.listen(e,"blur",r),a=this._renderer.listen(e,"mousedown",r)})),e.focus(i)}_focusByCssSelector(e,i){let r=this._elementRef.nativeElement.querySelector(e);r&&this._forceFocus(r,i)}_trapFocus(e){this._isDestroyed||$e(()=>{let i=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case"dialog":this._containsFocus()||i.focus(e);break;case!0:case"first-tabbable":this._focusTrap?.focusInitialElement(e)||this._focusDialogContainer(e);break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]',e);break;default:this._focusByCssSelector(this._config.autoFocus,e);break}this._focusTrapped.next()},{injector:this._injector})}_restoreFocus(){let e=this._config.restoreFocus,i=null;if(typeof e=="string"?i=this._document.querySelector(e):typeof e=="boolean"?i=e?this._elementFocusedBeforeDialogWasOpened:null:e&&(i=e),this._config.restoreFocus&&i&&typeof i.focus=="function"){let r=ha(),o=this._elementRef.nativeElement;(!r||r===this._document.body||r===o||o.contains(r))&&(this._focusMonitor?(this._focusMonitor.focusVia(i,this._closeInteractionType),this._closeInteractionType=null):i.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(e){this._elementRef.nativeElement.focus?.(e)}_containsFocus(){let e=this._elementRef.nativeElement,i=ha();return e===i||e.contains(i)}_initializeFocusTrap(){this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=ha()))}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=x({type:t,selectors:[["cdk-dialog-container"]],viewQuery:function(i,r){if(i&1&&Fe(Ln,7),i&2){let o;B(o=V())&&(r._portalOutlet=o.first)}},hostAttrs:["tabindex","-1",1,"cdk-dialog-container"],hostVars:6,hostBindings:function(i,r){i&2&&oe("id",r._config.id||null)("role",r._config.role)("aria-modal",r._config.ariaModal)("aria-labelledby",r._config.ariaLabel?null:r._ariaLabelledByQueue[0])("aria-label",r._config.ariaLabel)("aria-describedby",r._config.ariaDescribedBy||null)},features:[ge],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(i,r){i&1&&pt(0,qF,0,0,"ng-template",0)},dependencies:[Ln],styles:[`.cdk-dialog-container {
  display: block;
  width: 100%;
  height: 100%;
  min-height: inherit;
  max-height: inherit;
}
`],encapsulation:2})}return t})(),Ul=class{overlayRef;config;componentInstance=null;componentRef=null;containerInstance;disableClose;closed=new D;backdropClick;keydownEvents;outsidePointerEvents;id;_detachSubscription;constructor(n,e){this.overlayRef=n,this.config=e,this.disableClose=e.disableClose,this.backdropClick=n.backdropClick(),this.keydownEvents=n.keydownEvents(),this.outsidePointerEvents=n.outsidePointerEvents(),this.id=e.id,this.keydownEvents.subscribe(i=>{i.keyCode===27&&!this.disableClose&&!bt(i)&&(i.preventDefault(),this.close(void 0,{focusOrigin:"keyboard"}))}),this.backdropClick.subscribe(()=>{!this.disableClose&&this._canClose()?this.close(void 0,{focusOrigin:"mouse"}):this.containerInstance._recaptureFocus?.()}),this._detachSubscription=n.detachments().subscribe(()=>{e.closeOnOverlayDetachments!==!1&&this.close()})}close(n,e){if(this._canClose(n)){let i=this.closed;this.containerInstance._closeInteractionType=e?.focusOrigin||"program",this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),i.next(n),i.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(n="",e=""){return this.overlayRef.updateSize({width:n,height:e}),this}addPanelClass(n){return this.overlayRef.addPanelClass(n),this}removePanelClass(n){return this.overlayRef.removePanelClass(n),this}_canClose(n){let e=this.config;return!!this.containerInstance&&(!e.closePredicate||e.closePredicate(n,e,this.componentInstance))}},YF=new _("DialogScrollStrategy",{providedIn:"root",factory:()=>{let t=d(F);return()=>Ha(t)}}),ZF=new _("DialogData"),QF=new _("DefaultDialogConfig");function KF(t){let n=N(t),e=new A;return{valueSignal:n,get value(){return n()},change:e,ngOnDestroy(){e.complete()}}}var w_=(()=>{class t{_injector=d(F);_defaultOptions=d(QF,{optional:!0});_parentDialog=d(t,{optional:!0,skipSelf:!0});_overlayContainer=d(Nf);_idGenerator=d(qe);_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new D;_afterOpenedAtThisLevel=new D;_ariaHiddenElements=new Map;_scrollStrategy=d(YF);get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}afterAllClosed=Dn(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(rt(void 0)));constructor(){}open(e,i){let r=this._defaultOptions||new _r;i=y(y({},r),i),i.id=i.id||this._idGenerator.getId("cdk-dialog-"),i.id&&this.getDialogById(i.id);let o=this._getOverlayConfig(i),a=Li(this._injector,o),s=new Ul(a,i),l=this._attachContainer(a,s,i);if(s.containerInstance=l,!this.openDialogs.length){let c=this._overlayContainer.getContainerElement();l._focusTrapped?l._focusTrapped.pipe(Ye(1)).subscribe(()=>{this._hideNonDialogContentFromAssistiveTechnology(c)}):this._hideNonDialogContentFromAssistiveTechnology(c)}return this._attachDialogContent(e,s,l,i),this.openDialogs.push(s),s.closed.subscribe(()=>this._removeOpenDialog(s,!0)),this.afterOpened.next(s),s}closeAll(){b_(this.openDialogs,e=>e.close())}getDialogById(e){return this.openDialogs.find(i=>i.id===e)}ngOnDestroy(){b_(this._openDialogsAtThisLevel,e=>{e.config.closeOnDestroy===!1&&this._removeOpenDialog(e,!1)}),b_(this._openDialogsAtThisLevel,e=>e.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(e){let i=new Fi({positionStrategy:e.positionStrategy||gr().centerHorizontally().centerVertically(),scrollStrategy:e.scrollStrategy||this._scrollStrategy(),panelClass:e.panelClass,hasBackdrop:e.hasBackdrop,direction:e.direction,minWidth:e.minWidth,minHeight:e.minHeight,maxWidth:e.maxWidth,maxHeight:e.maxHeight,width:e.width,height:e.height,disposeOnNavigation:e.closeOnNavigation,disableAnimations:e.disableAnimations});return e.backdropClass&&(i.backdropClass=e.backdropClass),i}_attachContainer(e,i,r){let o=r.injector||r.viewContainerRef?.injector,a=[{provide:_r,useValue:r},{provide:Ul,useValue:i},{provide:Ba,useValue:e}],s;r.container?typeof r.container=="function"?s=r.container:(s=r.container.type,a.push(...r.container.providers(r))):s=y_;let l=new Fn(s,r.viewContainerRef,F.create({parent:o||this._injector,providers:a}));return e.attach(l).instance}_attachDialogContent(e,i,r,o){if(e instanceof lt){let a=this._createInjector(o,i,r,void 0),s={$implicit:o.data,dialogRef:i};o.templateContext&&(s=y(y({},s),typeof o.templateContext=="function"?o.templateContext():o.templateContext)),r.attachTemplatePortal(new wn(e,null,s,a))}else{let a=this._createInjector(o,i,r,this._injector),s=r.attachComponentPortal(new Fn(e,o.viewContainerRef,a));i.componentRef=s,i.componentInstance=s.instance}}_createInjector(e,i,r,o){let a=e.injector||e.viewContainerRef?.injector,s=[{provide:ZF,useValue:e.data},{provide:Ul,useValue:i}];return e.providers&&(typeof e.providers=="function"?s.push(...e.providers(i,e,r)):s.push(...e.providers)),e.direction&&(!a||!a.get(dt,null,{optional:!0}))&&s.push({provide:dt,useValue:KF(e.direction)}),F.create({parent:a||o,providers:s})}_removeOpenDialog(e,i){let r=this.openDialogs.indexOf(e);r>-1&&(this.openDialogs.splice(r,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((o,a)=>{o?a.setAttribute("aria-hidden",o):a.removeAttribute("aria-hidden")}),this._ariaHiddenElements.clear(),i&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(e){if(e.parentElement){let i=e.parentElement.children;for(let r=i.length-1;r>-1;r--){let o=i[r];o!==e&&o.nodeName!=="SCRIPT"&&o.nodeName!=="STYLE"&&!o.hasAttribute("aria-live")&&!o.hasAttribute("popover")&&(this._ariaHiddenElements.set(o,o.getAttribute("aria-hidden")),o.setAttribute("aria-hidden","true"))}}}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function b_(t,n){let e=t.length;for(;e--;)n(t[e])}var eI=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=U({type:t});static \u0275inj=L({providers:[w_],imports:[mi,hr,Cl,hr]})}return t})();function XF(t,n){}var Vf=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;position;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;delayFocusTrap=!0;scrollStrategy;closeOnNavigation=!0;enterAnimationDuration;exitAnimationDuration},C_="mdc-dialog--open",tI="mdc-dialog--opening",nI="mdc-dialog--closing",JF=150,eL=75,tL=(()=>{class t extends y_{_animationStateChanged=new A;_animationsEnabled=!Ae();_actionSectionCount=0;_hostElement=this._elementRef.nativeElement;_enterAnimationDuration=this._animationsEnabled?rI(this._config.enterAnimationDuration)??JF:0;_exitAnimationDuration=this._animationsEnabled?rI(this._config.exitAnimationDuration)??eL:0;_animationTimer=null;_contentAttached(){super._contentAttached(),this._startOpenAnimation()}_startOpenAnimation(){this._animationStateChanged.emit({state:"opening",totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(iI,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(tI,C_)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(C_),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:"closing",totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(C_),this._animationsEnabled?(this._hostElement.style.setProperty(iI,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(nI)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_updateActionSectionCount(e){this._actionSectionCount+=e,this._changeDetectorRef.markForCheck()}_finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration)};_finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:"closed",totalTime:this._exitAnimationDuration})};_clearAnimationClasses(){this._hostElement.classList.remove(tI,nI)}_waitForAnimationToComplete(e,i){this._animationTimer!==null&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(i,e)}_requestAnimationFrame(e){this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame=="function"?requestAnimationFrame(e):e()})}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(e){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:"opened",totalTime:e})}ngOnDestroy(){super.ngOnDestroy(),this._animationTimer!==null&&clearTimeout(this._animationTimer)}attachComponentPortal(e){let i=super.attachComponentPortal(e);return i.location.nativeElement.classList.add("mat-mdc-dialog-component-host"),i}static \u0275fac=(()=>{let e;return function(r){return(e||(e=ze(t)))(r||t)}})();static \u0275cmp=x({type:t,selectors:[["mat-dialog-container"]],hostAttrs:["tabindex","-1",1,"mat-mdc-dialog-container","mdc-dialog"],hostVars:10,hostBindings:function(i,r){i&2&&(ei("id",r._config.id),oe("aria-modal",r._config.ariaModal)("role",r._config.role)("aria-labelledby",r._config.ariaLabel?null:r._ariaLabelledByQueue[0])("aria-label",r._config.ariaLabel)("aria-describedby",r._config.ariaDescribedBy||null),W("_mat-animation-noopable",!r._animationsEnabled)("mat-mdc-dialog-container-with-actions",r._actionSectionCount>0))},features:[ge],decls:3,vars:0,consts:[[1,"mat-mdc-dialog-inner-container","mdc-dialog__container"],[1,"mat-mdc-dialog-surface","mdc-dialog__surface"],["cdkPortalOutlet",""]],template:function(i,r){i&1&&(m(0,"div",0)(1,"div",1),pt(2,XF,0,0,"ng-template",2),h()())},dependencies:[Ln],styles:[`.mat-mdc-dialog-container {
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
`],encapsulation:2})}return t})(),iI="--mat-dialog-transition-duration";function rI(t){return t==null?null:typeof t=="number"?t:t.endsWith("ms")?tn(t.substring(0,t.length-2)):t.endsWith("s")?tn(t.substring(0,t.length-1))*1e3:t==="0"?0:null}var Bf=(function(t){return t[t.OPEN=0]="OPEN",t[t.CLOSING=1]="CLOSING",t[t.CLOSED=2]="CLOSED",t})(Bf||{}),zl=class{_ref;_config;_containerInstance;componentInstance;componentRef=null;disableClose;id;_afterOpened=new qt(1);_beforeClosed=new qt(1);_result;_closeFallbackTimeout;_state=Bf.OPEN;_closeInteractionType;constructor(n,e,i){this._ref=n,this._config=e,this._containerInstance=i,this.disableClose=e.disableClose,this.id=n.id,n.addPanelClass("mat-mdc-dialog-panel"),i._animationStateChanged.pipe(me(r=>r.state==="opened"),Ye(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),i._animationStateChanged.pipe(me(r=>r.state==="closed"),Ye(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),n.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),Lt(this.backdropClick(),this.keydownEvents().pipe(me(r=>r.keyCode===27&&!this.disableClose&&!bt(r)))).subscribe(r=>{this.disableClose||(r.preventDefault(),nL(this,r.type==="keydown"?"keyboard":"mouse"))})}close(n){let e=this._config.closePredicate;e&&!e(n,this._config,this.componentInstance)||(this._result=n,this._containerInstance._animationStateChanged.pipe(me(i=>i.state==="closing"),Ye(1)).subscribe(i=>{this._beforeClosed.next(n),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),i.totalTime+100)}),this._state=Bf.CLOSING,this._containerInstance._startExitAnimation())}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(n){let e=this._ref.config.positionStrategy;return n&&(n.left||n.right)?n.left?e.left(n.left):e.right(n.right):e.centerHorizontally(),n&&(n.top||n.bottom)?n.top?e.top(n.top):e.bottom(n.bottom):e.centerVertically(),this._ref.updatePosition(),this}updateSize(n="",e=""){return this._ref.updateSize(n,e),this}addPanelClass(n){return this._ref.addPanelClass(n),this}removePanelClass(n){return this._ref.removePanelClass(n),this}getState(){return this._state}_finishDialogClose(){this._state=Bf.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}};function nL(t,n,e){return t._closeInteractionType=n,t.close(e)}var iL=new _("MatMdcDialogData"),rL=new _("mat-mdc-dialog-default-options"),oL=new _("mat-mdc-dialog-scroll-strategy",{providedIn:"root",factory:()=>{let t=d(F);return()=>Ha(t)}}),D_=(()=>{class t{_defaultOptions=d(rL,{optional:!0});_scrollStrategy=d(oL);_parentDialog=d(t,{optional:!0,skipSelf:!0});_idGenerator=d(qe);_injector=d(F);_dialog=d(w_);_animationsDisabled=Ae();_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new D;_afterOpenedAtThisLevel=new D;dialogConfigClass=Vf;_dialogRefConstructor;_dialogContainerType;_dialogDataToken;get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}afterAllClosed=Dn(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(rt(void 0)));constructor(){this._dialogRefConstructor=zl,this._dialogContainerType=tL,this._dialogDataToken=iL}open(e,i){let r;i=y(y({},this._defaultOptions||new Vf),i),i.id=i.id||this._idGenerator.getId("mat-mdc-dialog-"),i.scrollStrategy=i.scrollStrategy||this._scrollStrategy();let o=this._dialog.open(e,K(y({},i),{positionStrategy:gr(this._injector).centerHorizontally().centerVertically(),disableClose:!0,closePredicate:void 0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,disableAnimations:this._animationsDisabled||i.enterAnimationDuration?.toLocaleString()==="0"||i.exitAnimationDuration?.toString()==="0",container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:i},{provide:_r,useValue:i}]},templateContext:()=>({dialogRef:r}),providers:(a,s,l)=>(r=new this._dialogRefConstructor(a,i,l),r.updatePosition(i?.position),[{provide:this._dialogContainerType,useValue:l},{provide:this._dialogDataToken,useValue:s.data},{provide:this._dialogRefConstructor,useValue:r}])}));return r.componentRef=o.componentRef,r.componentInstance=o.componentInstance,this.openDialogs.push(r),this.afterOpened.next(r),r.afterClosed().subscribe(()=>{let a=this.openDialogs.indexOf(r);a>-1&&(this.openDialogs.splice(a,1),this.openDialogs.length||this._getAfterAllClosed().next())}),r}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(e){return this.openDialogs.find(i=>i.id===e)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(e){let i=e.length;for(;i--;)e[i].close()}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var oI=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=U({type:t});static \u0275inj=L({providers:[D_],imports:[eI,mi,hr,he]})}return t})();var Hf=class t{dialogRef=d(zl);onConfirm(){this.dialogRef.close(!0)}onDeny(){this.dialogRef.close(!1)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=x({type:t,selectors:[["confirmation-dialog"]],decls:8,vars:0,consts:[[1,"flex-with-style"],[1,"top-text"],[1,"button-group"],[1,"button",3,"click"]],template:function(e,i){e&1&&(gt(0,"div",0)(1,"p",1),v(2," \xC4r du s\xE4ker att du vill avregistrera n\xE4rvaro? "),Et(),gt(3,"li",2)(4,"button",3),Qr("click",function(){return i.onConfirm()}),v(5," Ja "),Et(),gt(6,"button",3),Qr("click",function(){return i.onDeny()}),v(7," Nej "),Et()()())},dependencies:[oI,fo],styles:["[_nghost-%COMP%]{display:block;text-align:center;padding:8px}.top-text[_ngcontent-%COMP%]{font:var(--mat-sys-title-medium)}.button-group[_ngcontent-%COMP%]{display:flex;justify-content:center;gap:32px}.button[_ngcontent-%COMP%]{padding:8px 32px;font:var(--mat-sys-label-small);font-weight:700;cursor:pointer;border-radius:4px;transition:all .2s ease-in-out;background-color:var(--mat-sys-primary);color:var(--mat-sys-on-primary);border:1px solid}button[_ngcontent-%COMP%]:hover{background-color:var(--mat-sys-primary-fixed-dim)}"]})};var aI=(t,n)=>n.value,aL=(t,n)=>e=>e.value!="CHECKED_OUT";function sL(t,n){if(t&1&&(m(0,"span"),v(1),h()),t&2){let e=G();w(),_e(e.statusLabels[e.currentStatus])}}function lL(t,n){if(t&1&&(m(0,"mat-option",3),v(1),h()),t&2){let e=n.$implicit;Q("value",e.value),w(),_e(e.label)}}function cL(t,n){if(t&1&&un(0,lL,2,2,"mat-option",3,aI),t&2){let e=G(2);fn(e.statusOptions)}}function dL(t,n){if(t&1&&(m(0,"mat-option",3),v(1),h()),t&2){let e=n.$implicit;Q("value",e.value),w(),_e(e.label)}}function uL(t,n){if(t&1&&un(0,dL,2,2,"mat-option",3,aI),t&2){let e=G(2);fn(e.statusOptions.filter(sg(0,aL,n)))}}function fL(t,n){if(t&1){let e=It();m(0,"mat-form-field",0)(1,"mat-select",2),T("selectionChange",function(r){Ve(e);let o=G();return He(o.onStatusChange(r.value))}),ie(2,cL,2,0)(3,uL,2,1),h()()}if(t&2){let e=G();w(),Q("value",e.currentStatus),w(),re(e.currentStatus==="CHECKED_IN"?2:3)}}function mL(t,n){if(t&1&&(m(0,"p",1),v(1),h()),t&2){let e=G();w(),_e(e.errorMessage)}}var Ua=class t{childSignal=ke.required();disabled=Mi();errorMessage="";showConfirmation=!1;dialog=d(D_);statusOptions=[{value:"NOT_SET",label:"\u2014"},{value:"CHECKED_IN",label:"Incheckad"},{value:"CHECKED_OUT",label:"Utcheckad"},{value:"LEAVE",label:"Ledig"},{value:"ABSENT",label:"Fr\xE5nvarande"}];statusLabels=Object.fromEntries(this.statusOptions.map(n=>[n.value,n.label]));attendanceService=d(ja);get currentStatus(){return this.attendanceService.getSignal(this.childSignal().id,fi())()??"NOT_SET"}constructor(){Kt(()=>{let n=this.childSignal();if(!n)return;let e=this.attendanceService.getSignal(n.id,fi());e()===null&&e.set(n.status??"NOT_SET")})}onStatusChange(n){let e=this.attendanceService.getSignal(this.childSignal().id,fi()),i=e();e.set(n),i==="CHECKED_IN"&&n==="CHECKED_OUT"&&this.dialog.open(Hf).afterClosed().subscribe(o=>{if(!o){e.set(i);return}}),this.attendanceService.setAttendance(this.childSignal().id,fi(),n).subscribe({next:r=>e.set(r.status),error:r=>{console.error("Kunde inte spara",r),e.set(i),this.errorMessage="Misslyckades att spara till databasen.",setTimeout(()=>this.errorMessage="",2e3)}}),this.wsUpdateAttendance(n)}attendanceChangeEvent=new A;wsUpdateAttendance(n){let e={childId:this.childSignal().id,status:n};this.attendanceChangeEvent.emit(e)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=x({type:t,selectors:[["attendance-box"]],inputs:{childSignal:[1,"childSignal"],disabled:[1,"disabled"]},outputs:{childSignal:"childSignalChange",attendanceChangeEvent:"attendanceChangeEvent"},decls:4,vars:2,consts:[["appearance","outline","subscriptSizing","dynamic"],[1,"error-text"],[3,"selectionChange","value"],[3,"value"]],template:function(e,i){e&1&&(m(0,"div"),ie(1,sL,2,1,"span")(2,fL,4,2,"mat-form-field",0),ie(3,mL,2,1,"p",1),h()),e&2&&(w(),re(i.disabled()?1:2),w(2),re(i.errorMessage?3:-1))},dependencies:[jf,nn,Lf,vr,rn],styles:[".error-text[_ngcontent-%COMP%]{color:red;font-size:16px;position:absolute}mat-form-field[_ngcontent-%COMP%]{--mat-form-field-container-height: 32px;--mat-form-field-container-vertical-padding: 6px;background-color:var(--mat-sys-surface-variant)}"]})};var Uf=class t{childSignal=ke.required();dateSignal=ke.required();attendanceChangeEvent=new A;wsUpdateAttendance(n){this.attendanceChangeEvent.emit(n)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=x({type:t,selectors:[["child-display"]],inputs:{childSignal:[1,"childSignal"],dateSignal:[1,"dateSignal"]},outputs:{childSignal:"childSignalChange",dateSignal:"dateSignalChange",attendanceChangeEvent:"attendanceChangeEvent"},decls:7,vars:2,consts:[[1,"rowise"],[1,"attendance-box",3,"attendanceChangeEvent","childSignal"]],template:function(e,i){e&1&&(m(0,"p")(1,"b"),v(2),h()(),m(3,"div",0)(4,"p"),v(5,"N\xE4rvaro:"),h(),m(6,"attendance-box",1),T("attendanceChangeEvent",function(o){return i.wsUpdateAttendance(o)}),h()()),e&2&&(w(2),_e(i.dateSignal()),w(4),Q("childSignal",i.childSignal()))},dependencies:[Ua],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;width:fit-content;height:100%;max-width:fit-content}.rowise[_ngcontent-%COMP%]{display:flex;flex:1;gap:1em;margin:1em;align-items:center}p[_ngcontent-%COMP%]{font:var(--mat-sys-body-large);margin-bottom:0;margin-left:1em}"]})};var hL=["*"];var pL=["unscopedContent"],gL=["text"],vL=[[["","matListItemAvatar",""],["","matListItemIcon",""]],[["","matListItemTitle",""]],[["","matListItemLine",""]],"*",[["","matListItemMeta",""]],[["mat-divider"]]],_L=["[matListItemAvatar],[matListItemIcon]","[matListItemTitle]","[matListItemLine]","*","[matListItemMeta]","mat-divider"];var bL=new _("ListOption"),E_=(()=>{class t{_elementRef=d(O);constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275dir=S({type:t,selectors:[["","matListItemTitle",""]],hostAttrs:[1,"mat-mdc-list-item-title","mdc-list-item__primary-text"]})}return t})(),yL=(()=>{class t{_elementRef=d(O);constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275dir=S({type:t,selectors:[["","matListItemLine",""]],hostAttrs:[1,"mat-mdc-list-item-line","mdc-list-item__secondary-text"]})}return t})(),I_=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=S({type:t,selectors:[["","matListItemMeta",""]],hostAttrs:[1,"mat-mdc-list-item-meta","mdc-list-item__end"]})}return t})(),sI=(()=>{class t{_listOption=d(bL,{optional:!0});constructor(){}_isAlignedAtStart(){return!this._listOption||this._listOption?._getTogglePosition()==="after"}static \u0275fac=function(i){return new(i||t)};static \u0275dir=S({type:t,hostVars:4,hostBindings:function(i,r){i&2&&W("mdc-list-item__start",r._isAlignedAtStart())("mdc-list-item__end",!r._isAlignedAtStart())}})}return t})(),wL=(()=>{class t extends sI{static \u0275fac=(()=>{let e;return function(r){return(e||(e=ze(t)))(r||t)}})();static \u0275dir=S({type:t,selectors:[["","matListItemAvatar",""]],hostAttrs:[1,"mat-mdc-list-item-avatar"],features:[ge]})}return t})(),CL=(()=>{class t extends sI{static \u0275fac=(()=>{let e;return function(r){return(e||(e=ze(t)))(r||t)}})();static \u0275dir=S({type:t,selectors:[["","matListItemIcon",""]],hostAttrs:[1,"mat-mdc-list-item-icon"],features:[ge]})}return t})(),DL=new _("MAT_LIST_CONFIG"),x_=(()=>{class t{_isNonInteractive=!0;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=yt(e)}_disableRipple=!1;get disabled(){return this._disabled()}set disabled(e){this._disabled.set(yt(e))}_disabled=N(!1);_defaultOptions=d(DL,{optional:!0});static \u0275fac=function(i){return new(i||t)};static \u0275dir=S({type:t,hostVars:1,hostBindings:function(i,r){i&2&&oe("aria-disabled",r.disabled)},inputs:{disableRipple:"disableRipple",disabled:"disabled"}})}return t})(),xL=(()=>{class t{_elementRef=d(O);_ngZone=d(R);_listBase=d(x_,{optional:!0});_platform=d(ue);_hostElement;_isButtonElement;_noopAnimations=Ae();_avatars;_icons;set lines(e){this._explicitLines=tn(e,null),this._updateItemLines(!1)}_explicitLines=null;get disableRipple(){return this.disabled||this._disableRipple||this._noopAnimations||!!this._listBase?.disableRipple}set disableRipple(e){this._disableRipple=yt(e)}_disableRipple=!1;get disabled(){return this._disabled()||!!this._listBase?.disabled}set disabled(e){this._disabled.set(yt(e))}_disabled=N(!1);_subscriptions=new le;_rippleRenderer=null;_hasUnscopedTextContent=!1;rippleConfig;get rippleDisabled(){return this.disableRipple||!!this.rippleConfig.disabled}constructor(){d(it).load(cr);let e=d(Da,{optional:!0});this.rippleConfig=e||{},this._hostElement=this._elementRef.nativeElement,this._isButtonElement=this._hostElement.nodeName.toLowerCase()==="button",this._listBase&&!this._listBase._isNonInteractive&&this._initInteractiveListItem(),this._isButtonElement&&!this._hostElement.hasAttribute("type")&&this._hostElement.setAttribute("type","button")}ngAfterViewInit(){this._monitorProjectedLinesAndTitle(),this._updateItemLines(!0)}ngOnDestroy(){this._subscriptions.unsubscribe(),this._rippleRenderer!==null&&this._rippleRenderer._removeTriggerEvents()}_hasIconOrAvatar(){return!!(this._avatars.length||this._icons.length)}_initInteractiveListItem(){this._hostElement.classList.add("mat-mdc-list-item-interactive"),this._rippleRenderer=new uo(this,this._ngZone,this._hostElement,this._platform,d(F)),this._rippleRenderer.setupTriggerEvents(this._hostElement)}_monitorProjectedLinesAndTitle(){this._ngZone.runOutsideAngular(()=>{this._subscriptions.add(Lt(this._lines.changes,this._titles.changes).subscribe(()=>this._updateItemLines(!1)))})}_updateItemLines(e){if(!this._lines||!this._titles||!this._unscopedContent)return;e&&this._checkDomForUnscopedTextContent();let i=this._explicitLines??this._inferLinesFromContent(),r=this._unscopedContent.nativeElement;if(this._hostElement.classList.toggle("mat-mdc-list-item-single-line",i<=1),this._hostElement.classList.toggle("mdc-list-item--with-one-line",i<=1),this._hostElement.classList.toggle("mdc-list-item--with-two-lines",i===2),this._hostElement.classList.toggle("mdc-list-item--with-three-lines",i===3),this._hasUnscopedTextContent){let o=this._titles.length===0&&i===1;r.classList.toggle("mdc-list-item__primary-text",o),r.classList.toggle("mdc-list-item__secondary-text",!o)}else r.classList.remove("mdc-list-item__primary-text"),r.classList.remove("mdc-list-item__secondary-text")}_inferLinesFromContent(){let e=this._titles.length+this._lines.length;return this._hasUnscopedTextContent&&(e+=1),e}_checkDomForUnscopedTextContent(){this._hasUnscopedTextContent=Array.from(this._unscopedContent.nativeElement.childNodes).filter(e=>e.nodeType!==e.COMMENT_NODE).some(e=>!!(e.textContent&&e.textContent.trim()))}static \u0275fac=function(i){return new(i||t)};static \u0275dir=S({type:t,contentQueries:function(i,r,o){if(i&1&&Mt(o,wL,4)(o,CL,4),i&2){let a;B(a=V())&&(r._avatars=a),B(a=V())&&(r._icons=a)}},hostVars:4,hostBindings:function(i,r){i&2&&(oe("aria-disabled",r.disabled)("disabled",r._isButtonElement&&r.disabled||null),W("mdc-list-item--disabled",r.disabled))},inputs:{lines:"lines",disableRipple:"disableRipple",disabled:"disabled"}})}return t})();var lI=(()=>{class t extends x_{_isNonInteractive=!1;static \u0275fac=(()=>{let e;return function(r){return(e||(e=ze(t)))(r||t)}})();static \u0275cmp=x({type:t,selectors:[["mat-action-list"]],hostAttrs:["role","group",1,"mat-mdc-action-list","mat-mdc-list-base","mdc-list"],exportAs:["matActionList"],features:[Pe([{provide:x_,useExisting:t}]),ge],ngContentSelectors:hL,decls:1,vars:0,template:function(i,r){i&1&&(Me(),X(0))},styles:[`.mdc-list {
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
`],encapsulation:2,changeDetection:0})}return t})();var cI=(()=>{class t extends xL{_lines;_titles;_meta;_unscopedContent;_itemText;get activated(){return this._activated}set activated(e){this._activated=yt(e)}_activated=!1;_getAriaCurrent(){return this._hostElement.nodeName==="A"&&this._activated?"page":null}_hasBothLeadingAndTrailing(){return this._meta.length!==0&&(this._avatars.length!==0||this._icons.length!==0)}static \u0275fac=(()=>{let e;return function(r){return(e||(e=ze(t)))(r||t)}})();static \u0275cmp=x({type:t,selectors:[["mat-list-item"],["a","mat-list-item",""],["button","mat-list-item",""]],contentQueries:function(i,r,o){if(i&1&&Mt(o,yL,5)(o,E_,5)(o,I_,5),i&2){let a;B(a=V())&&(r._lines=a),B(a=V())&&(r._titles=a),B(a=V())&&(r._meta=a)}},viewQuery:function(i,r){if(i&1&&Fe(pL,5)(gL,5),i&2){let o;B(o=V())&&(r._unscopedContent=o.first),B(o=V())&&(r._itemText=o.first)}},hostAttrs:[1,"mat-mdc-list-item","mdc-list-item"],hostVars:13,hostBindings:function(i,r){i&2&&(oe("aria-current",r._getAriaCurrent()),W("mdc-list-item--activated",r.activated)("mdc-list-item--with-leading-avatar",r._avatars.length!==0)("mdc-list-item--with-leading-icon",r._icons.length!==0)("mdc-list-item--with-trailing-meta",r._meta.length!==0)("mat-mdc-list-item-both-leading-and-trailing",r._hasBothLeadingAndTrailing())("_mat-animation-noopable",r._noopAnimations))},inputs:{activated:"activated"},exportAs:["matListItem"],features:[ge],ngContentSelectors:_L,decls:10,vars:0,consts:[["unscopedContent",""],[1,"mdc-list-item__content"],[1,"mat-mdc-list-item-unscoped-content",3,"cdkObserveContent"],[1,"mat-focus-indicator"]],template:function(i,r){i&1&&(Me(vL),X(0),m(1,"span",1),X(2,1),X(3,2),m(4,"span",2,0),T("cdkObserveContent",function(){return r._updateItemLines(!0)}),X(6,3),h()(),X(7,4),X(8,5),z(9,"div",3))},dependencies:[Yu],encapsulation:2,changeDetection:0})}return t})();var dI=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=U({type:t});static \u0275inj=L({imports:[ba,xa,Ff,he,La]})}return t})();var zf=class t{url=`${Ft.apiUrl}/api/children/attendance`;urlPerGroup=`${Ft.apiUrl}/api/children/attendance/group`;http=d(Ot);getChildren(){return this.http.get(this.url)}getChildrenByGroup(n,e){let i=new zt().set("groupId",n);return e&&(i=i.set("date",e)),this.http.get(this.urlPerGroup,{params:i})}static \u0275fac=function(e){return new(e||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})};var IL=["tooltip"],ML=20;var SL=new _("mat-tooltip-scroll-strategy",{providedIn:"root",factory:()=>{let t=d(F);return()=>_o(t,{scrollThrottle:ML})}}),TL=new _("mat-tooltip-default-options",{providedIn:"root",factory:()=>({showDelay:0,hideDelay:0,touchendHideDelay:1500})});var uI="tooltip-panel",kL={passive:!0},AL=8,RL=8,OL=24,NL=200,M_=(()=>{class t{_elementRef=d(O);_ngZone=d(R);_platform=d(ue);_ariaDescriber=d(yx);_focusMonitor=d(Oi);_dir=d(dt);_injector=d(F);_viewContainerRef=d(ht);_mediaMatcher=d(_a);_document=d(j);_renderer=d(Ee);_animationsDisabled=Ae();_defaultOptions=d(TL,{optional:!0});_overlayRef=null;_tooltipInstance=null;_overlayPanelClass;_portal;_position="below";_positionAtOrigin=!1;_disabled=!1;_tooltipClass;_viewInitialized=!1;_pointerExitEventsInitialized=!1;_tooltipComponent=fI;_viewportMargin=8;_currentPosition;_cssClassPrefix="mat-mdc";_ariaDescriptionPending=!1;_dirSubscribed=!1;get position(){return this._position}set position(e){e!==this._position&&(this._position=e,this._overlayRef&&(this._updatePosition(this._overlayRef),this._tooltipInstance?.show(0),this._overlayRef.updatePosition()))}get positionAtOrigin(){return this._positionAtOrigin}set positionAtOrigin(e){this._positionAtOrigin=yt(e),this._detach(),this._overlayRef=null}get disabled(){return this._disabled}set disabled(e){let i=yt(e);this._disabled!==i&&(this._disabled=i,i?this.hide(0):this._setupPointerEnterEventsIfNeeded(),this._syncAriaDescription(this.message))}get showDelay(){return this._showDelay}set showDelay(e){this._showDelay=tn(e)}_showDelay;get hideDelay(){return this._hideDelay}set hideDelay(e){this._hideDelay=tn(e),this._tooltipInstance&&(this._tooltipInstance._mouseLeaveHideDelay=this._hideDelay)}_hideDelay;touchGestures="auto";get message(){return this._message}set message(e){let i=this._message;this._message=e!=null?String(e).trim():"",!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage()),this._syncAriaDescription(i)}_message="";get tooltipClass(){return this._tooltipClass}set tooltipClass(e){this._tooltipClass=e,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass)}_eventCleanups=[];_touchstartTimeout=null;_destroyed=new D;_isDestroyed=!1;constructor(){let e=this._defaultOptions;e&&(this._showDelay=e.showDelay,this._hideDelay=e.hideDelay,e.position&&(this.position=e.position),e.positionAtOrigin&&(this.positionAtOrigin=e.positionAtOrigin),e.touchGestures&&(this.touchGestures=e.touchGestures),e.tooltipClass&&(this.tooltipClass=e.tooltipClass)),this._viewportMargin=AL}ngAfterViewInit(){this._viewInitialized=!0,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe(pe(this._destroyed)).subscribe(e=>{e?e==="keyboard"&&this._ngZone.run(()=>this.show()):this._ngZone.run(()=>this.hide(0))})}ngOnDestroy(){let e=this._elementRef.nativeElement;this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),this._eventCleanups.forEach(i=>i()),this._eventCleanups.length=0,this._destroyed.next(),this._destroyed.complete(),this._isDestroyed=!0,this._ariaDescriber.removeDescription(e,this.message,"tooltip"),this._focusMonitor.stopMonitoring(e)}show(e=this.showDelay,i){if(this.disabled||!this.message||this._isTooltipVisible()){this._tooltipInstance?._cancelPendingAnimations();return}let r=this._createOverlay(i);this._detach(),this._portal=this._portal||new Fn(this._tooltipComponent,this._viewContainerRef);let o=this._tooltipInstance=r.attach(this._portal).instance;o._triggerElement=this._elementRef.nativeElement,o._mouseLeaveHideDelay=this._hideDelay,o.afterHidden().pipe(pe(this._destroyed)).subscribe(()=>this._detach()),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),o.show(e)}hide(e=this.hideDelay){let i=this._tooltipInstance;i&&(i.isVisible()?i.hide(e):(i._cancelPendingAnimations(),this._detach()))}toggle(e){this._isTooltipVisible()?this.hide():this.show(void 0,e)}_isTooltipVisible(){return!!this._tooltipInstance&&this._tooltipInstance.isVisible()}_createOverlay(e){if(this._overlayRef){let a=this._overlayRef.getConfig().positionStrategy;if((!this.positionAtOrigin||!e)&&a._origin instanceof O)return this._overlayRef;this._detach()}let i=this._injector.get(pr).getAncestorScrollContainers(this._elementRef),r=`${this._cssClassPrefix}-${uI}`,o=Vl(this._injector,this.positionAtOrigin?e||this._elementRef:this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(!1).withViewportMargin(this._viewportMargin).withScrollableContainers(i).withPopoverLocation("global");return o.positionChanges.pipe(pe(this._destroyed)).subscribe(a=>{this._updateCurrentPositionClass(a.connectionPair),this._tooltipInstance&&a.scrollableViewProperties.isOverlayClipped&&this._tooltipInstance.isVisible()&&this._ngZone.run(()=>this.hide(0))}),this._overlayRef=Li(this._injector,{direction:this._dir,positionStrategy:o,panelClass:this._overlayPanelClass?[...this._overlayPanelClass,r]:r,scrollStrategy:this._injector.get(SL)(),disableAnimations:this._animationsDisabled,eventPredicate:this._overlayEventPredicate}),this._updatePosition(this._overlayRef),this._overlayRef.detachments().pipe(pe(this._destroyed)).subscribe(()=>this._detach()),this._overlayRef.outsidePointerEvents().pipe(pe(this._destroyed)).subscribe(()=>this._tooltipInstance?._handleBodyInteraction()),this._overlayRef.keydownEvents().pipe(pe(this._destroyed)).subscribe(a=>{a.preventDefault(),a.stopPropagation(),this._ngZone.run(()=>this.hide(0))}),this._defaultOptions?.disableTooltipInteractivity&&this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`),this._dirSubscribed||(this._dirSubscribed=!0,this._dir.change.pipe(pe(this._destroyed)).subscribe(()=>{this._overlayRef&&this._updatePosition(this._overlayRef)})),this._overlayRef}_detach(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null}_updatePosition(e){let i=e.getConfig().positionStrategy,r=this._getOrigin(),o=this._getOverlayPosition();i.withPositions([this._addOffset(y(y({},r.main),o.main)),this._addOffset(y(y({},r.fallback),o.fallback))])}_addOffset(e){let i=RL,r=!this._dir||this._dir.value=="ltr";return e.originY==="top"?e.offsetY=-i:e.originY==="bottom"?e.offsetY=i:e.originX==="start"?e.offsetX=r?-i:i:e.originX==="end"&&(e.offsetX=r?i:-i),e}_getOrigin(){let e=!this._dir||this._dir.value=="ltr",i=this.position,r;i=="above"||i=="below"?r={originX:"center",originY:i=="above"?"top":"bottom"}:i=="before"||i=="left"&&e||i=="right"&&!e?r={originX:"start",originY:"center"}:(i=="after"||i=="right"&&e||i=="left"&&!e)&&(r={originX:"end",originY:"center"});let{x:o,y:a}=this._invertPosition(r.originX,r.originY);return{main:r,fallback:{originX:o,originY:a}}}_getOverlayPosition(){let e=!this._dir||this._dir.value=="ltr",i=this.position,r;i=="above"?r={overlayX:"center",overlayY:"bottom"}:i=="below"?r={overlayX:"center",overlayY:"top"}:i=="before"||i=="left"&&e||i=="right"&&!e?r={overlayX:"end",overlayY:"center"}:(i=="after"||i=="right"&&e||i=="left"&&!e)&&(r={overlayX:"start",overlayY:"center"});let{x:o,y:a}=this._invertPosition(r.overlayX,r.overlayY);return{main:r,fallback:{overlayX:o,overlayY:a}}}_updateTooltipMessage(){this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),$e(()=>{this._tooltipInstance&&this._overlayRef.updatePosition()},{injector:this._injector}))}_setTooltipClass(e){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=e instanceof Set?Array.from(e):e,this._tooltipInstance._markForCheck())}_invertPosition(e,i){return this.position==="above"||this.position==="below"?i==="top"?i="bottom":i==="bottom"&&(i="top"):e==="end"?e="start":e==="start"&&(e="end"),{x:e,y:i}}_updateCurrentPositionClass(e){let{overlayY:i,originX:r,originY:o}=e,a;if(i==="center"?this._dir&&this._dir.value==="rtl"?a=r==="end"?"left":"right":a=r==="start"?"left":"right":a=i==="bottom"&&o==="top"?"above":"below",a!==this._currentPosition){let s=this._overlayRef;if(s){let l=`${this._cssClassPrefix}-${uI}-`;s.removePanelClass(l+this._currentPosition),s.addPanelClass(l+a)}this._currentPosition=a}}_setupPointerEnterEventsIfNeeded(){this._disabled||!this.message||!this._viewInitialized||this._eventCleanups.length||(this._isTouchPlatform()?this.touchGestures!=="off"&&(this._disableNativeGesturesIfNecessary(),this._addListener("touchstart",e=>{let i=e.targetTouches?.[0],r=i?{x:i.clientX,y:i.clientY}:void 0;this._setupPointerExitEventsIfNeeded(),this._touchstartTimeout&&clearTimeout(this._touchstartTimeout);let o=500;this._touchstartTimeout=setTimeout(()=>{this._touchstartTimeout=null,this.show(void 0,r)},this._defaultOptions?.touchLongPressShowDelay??o)})):this._addListener("mouseenter",e=>{this._setupPointerExitEventsIfNeeded();let i;e.x!==void 0&&e.y!==void 0&&(i=e),this.show(void 0,i)}))}_setupPointerExitEventsIfNeeded(){if(!this._pointerExitEventsInitialized){if(this._pointerExitEventsInitialized=!0,!this._isTouchPlatform())this._addListener("mouseleave",e=>{let i=e.relatedTarget;(!i||!this._overlayRef?.overlayElement.contains(i))&&this.hide()}),this._addListener("wheel",e=>{if(this._isTooltipVisible()){let i=this._document.elementFromPoint(e.clientX,e.clientY),r=this._elementRef.nativeElement;i!==r&&!r.contains(i)&&this.hide()}});else if(this.touchGestures!=="off"){this._disableNativeGesturesIfNecessary();let e=()=>{this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this.hide(this._defaultOptions?.touchendHideDelay)};this._addListener("touchend",e),this._addListener("touchcancel",e)}}}_addListener(e,i){this._eventCleanups.push(this._renderer.listen(this._elementRef.nativeElement,e,i,kL))}_isTouchPlatform(){let e=this._defaultOptions?.detectHoverCapability;return typeof e=="function"?!e():this._platform.IOS||this._platform.ANDROID?!0:this._platform.isBrowser?!!e&&this._mediaMatcher.matchMedia("(any-hover: none)").matches:!1}_disableNativeGesturesIfNecessary(){let e=this.touchGestures;if(e!=="off"){let i=this._elementRef.nativeElement,r=i.style;(e==="on"||i.nodeName!=="INPUT"&&i.nodeName!=="TEXTAREA")&&(r.userSelect=r.msUserSelect=r.webkitUserSelect=r.MozUserSelect="none"),(e==="on"||!i.draggable)&&(r.webkitUserDrag="none"),r.touchAction="none",r.webkitTapHighlightColor="transparent"}}_syncAriaDescription(e){this._ariaDescriptionPending||(this._ariaDescriptionPending=!0,this._ariaDescriber.removeDescription(this._elementRef.nativeElement,e,"tooltip"),this._isDestroyed||$e({write:()=>{this._ariaDescriptionPending=!1,this.message&&!this.disabled&&this._ariaDescriber.describe(this._elementRef.nativeElement,this.message,"tooltip")}},{injector:this._injector}))}_overlayEventPredicate=e=>e.type==="keydown"?this._isTooltipVisible()&&e.keyCode===27&&!bt(e):!0;static \u0275fac=function(i){return new(i||t)};static \u0275dir=S({type:t,selectors:[["","matTooltip",""]],hostAttrs:[1,"mat-mdc-tooltip-trigger"],hostVars:2,hostBindings:function(i,r){i&2&&W("mat-mdc-tooltip-disabled",r.disabled)},inputs:{position:[0,"matTooltipPosition","position"],positionAtOrigin:[0,"matTooltipPositionAtOrigin","positionAtOrigin"],disabled:[0,"matTooltipDisabled","disabled"],showDelay:[0,"matTooltipShowDelay","showDelay"],hideDelay:[0,"matTooltipHideDelay","hideDelay"],touchGestures:[0,"matTooltipTouchGestures","touchGestures"],message:[0,"matTooltip","message"],tooltipClass:[0,"matTooltipClass","tooltipClass"]},exportAs:["matTooltip"]})}return t})(),fI=(()=>{class t{_changeDetectorRef=d(Ne);_elementRef=d(O);_isMultiline=!1;message;tooltipClass;_showTimeoutId;_hideTimeoutId;_triggerElement;_mouseLeaveHideDelay;_animationsDisabled=Ae();_tooltip;_closeOnInteraction=!1;_isVisible=!1;_onHide=new D;_showAnimation="mat-mdc-tooltip-show";_hideAnimation="mat-mdc-tooltip-hide";constructor(){}show(e){this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=setTimeout(()=>{this._toggleVisibility(!0),this._showTimeoutId=void 0},e)}hide(e){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId=setTimeout(()=>{this._toggleVisibility(!1),this._hideTimeoutId=void 0},e)}afterHidden(){return this._onHide}isVisible(){return this._isVisible}ngOnDestroy(){this._cancelPendingAnimations(),this._onHide.complete(),this._triggerElement=null}_handleBodyInteraction(){this._closeOnInteraction&&this.hide(0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_handleMouseLeave({relatedTarget:e}){(!e||!this._triggerElement.contains(e))&&(this.isVisible()?this.hide(this._mouseLeaveHideDelay):this._finalizeAnimation(!1))}_onShow(){this._isMultiline=this._isTooltipMultiline(),this._markForCheck()}_isTooltipMultiline(){let e=this._elementRef.nativeElement.getBoundingClientRect();return e.height>OL&&e.width>=NL}_handleAnimationEnd({animationName:e}){(e===this._showAnimation||e===this._hideAnimation)&&this._finalizeAnimation(e===this._showAnimation)}_cancelPendingAnimations(){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=this._hideTimeoutId=void 0}_finalizeAnimation(e){e?this._closeOnInteraction=!0:this.isVisible()||this._onHide.next()}_toggleVisibility(e){let i=this._tooltip.nativeElement,r=this._showAnimation,o=this._hideAnimation;if(i.classList.remove(e?o:r),i.classList.add(e?r:o),this._isVisible!==e&&(this._isVisible=e,this._changeDetectorRef.markForCheck()),e&&!this._animationsDisabled&&typeof getComputedStyle=="function"){let a=getComputedStyle(i);(a.getPropertyValue("animation-duration")==="0s"||a.getPropertyValue("animation-name")==="none")&&(this._animationsDisabled=!0)}e&&this._onShow(),this._animationsDisabled&&(i.classList.add("_mat-animation-noopable"),this._finalizeAnimation(e))}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=x({type:t,selectors:[["mat-tooltip-component"]],viewQuery:function(i,r){if(i&1&&Fe(IL,7),i&2){let o;B(o=V())&&(r._tooltip=o.first)}},hostAttrs:["aria-hidden","true"],hostBindings:function(i,r){i&1&&T("mouseleave",function(a){return r._handleMouseLeave(a)})},decls:4,vars:5,consts:[["tooltip",""],[1,"mdc-tooltip","mat-mdc-tooltip",3,"animationend"],[1,"mat-mdc-tooltip-surface","mdc-tooltip__surface"]],template:function(i,r){i&1&&(gt(0,"div",1,0),Qr("animationend",function(a){return r._handleAnimationEnd(a)}),gt(2,"div",2),v(3),Et()()),i&2&&(Ut(r.tooltipClass),W("mdc-tooltip--multiline",r._isMultiline),w(3),_e(r.message))},styles:[`.mat-mdc-tooltip {
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
`],encapsulation:2,changeDetection:0})}return t})();var mI=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=U({type:t});static \u0275inj=L({imports:[Cl,mi,he,ui]})}return t})();var $f=class t{teacher=Mi.required();static \u0275fac=function(e){return new(e||t)};static \u0275cmp=x({type:t,selectors:[["main-presence-indicator"]],inputs:{teacher:[1,"teacher"]},decls:3,vars:5,consts:[["tooltip","matTooltip"],[3,"matTooltip"]],template:function(e,i){e&1&&(m(0,"p",1,0),v(2,"\u2B24"),h()),e&2&&(og(ag("color: ",i.teacher().color)),Q("matTooltip",ii(i.teacher().name)))},dependencies:[mI,M_],styles:["p[_ngcontent-%COMP%]{display:flex;margin:0;padding:0;cursor:pointer;text-align:center;-webkit-user-select:none;user-select:none}"]})};var za=!0;var br=class t{observedSocket=new qt(1);connectedSocket=null;mailboxes={attendanceMessages:new D,presenceMessages:new D,journalMessages:new D};rooms={attendance:"",journal:"",chat:""};deliverMessage(n){switch(n.type){case"ATTENDANCE":this.mailboxes.attendanceMessages.next(n);break;case"DOC_OPERATION":this.mailboxes.journalMessages.next(n);break;case"PRESENCE_JOIN":case"PRESENCE_LEAVE":case"PRESENCE_STATE":this.mailboxes.presenceMessages.next(n)}}connect(n){this.observedSocket=new qt(1);let e=sessionStorage.getItem("token"),i=new WebSocket(`${n}?token=${e}`);i.onmessage=r=>{let o=JSON.parse(r.data);za&&console.log("[Websocket] - Received:",o),this.deliverMessage(o)},i.onclose=r=>{za&&console.log("[Websocket] - Disconnected",r.code,r.reason)},i.onopen=()=>{za&&console.log("[Websocket] - Connected"),this.observedSocket.next(i),this.connectedSocket=i}}disconnect(){if(this.connectedSocket==null){console.error("[Websocket] - Tried disconnecting an unconnected websocket.");return}for(let n of Object.values(this.rooms))n!==""&&this.connectedSocket.send(JSON.stringify({type:"unsubscribe",room:n}));this.connectedSocket.close(),this.observedSocket.complete()}async ensureConnected(){return new Promise(n=>{this.observedSocket.subscribe(()=>{n()})})}setRoom(n,e){if(this.connectedSocket==null){console.error("[Websocket] - Attempted to set room of an unconnected socket");return}this.rooms[n]!==""&&this.leaveRoom(n),this.rooms[n]=e,this.connectedSocket.readyState==this.connectedSocket.OPEN&&(za&&console.log("[Websocket] - Subscribing:",JSON.stringify({type:"subscribe",room:e})),this.connectedSocket.send(JSON.stringify({type:"subscribe",room:e})))}setAttendanceRoom(n){this.setRoom("attendance",n)}setJournalRoom(n){this.setRoom("journal",n)}leaveRoom(n){if(this.connectedSocket==null){console.error("[Websocket] - Tried to leave room on unconnected socket.");return}this.rooms[n]!=""&&(za&&console.log("[Websocket] - Unsubscribing:",JSON.stringify({type:"unsubscribe",room:this.rooms[n]})),this.connectedSocket.send(JSON.stringify({type:"unsubscribe",room:this.rooms[n]})),this.rooms[n]="")}leaveAttendanceRoom(){this.leaveRoom("attendance")}leaveJournalRoom(){this.leaveRoom("journal")}sendMessage(n,e){if(this.connectedSocket==null){console.error("[Websocket] - Tried to send message on unconnected socket.");return}e.room=this.rooms[n=="ATTENDANCE"?"attendance":n=="CHAT"?"chat":"journal"],e.type=n;let i=JSON.stringify(y({},e));za&&console.log("[Websocket] - Sending off: ",i),this.connectedSocket.send(i)}sendAttendanceUpdate(n){this.sendMessage("ATTENDANCE",n)}sendJournalUpdate(n){this.sendMessage("DOC_OPERATION",n)}getMessages(n){return this.mailboxes[n].asObservable()}static \u0275fac=function(e){return new(e||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})};var yr=class t{socketService=Im(br);connectedTeachers=N([]);_teacherUpdates=new D;teacherUpdates=this._teacherUpdates.asObservable();async init(){await this.socketService.ensureConnected(),this.socketService.getMessages("presenceMessages").subscribe(n=>{this.handleMessage(n)})}spoofTeacherUpdate(){console.log("Spoofing teacher"),this._teacherUpdates.next({name:"Spoof",userId:-1,room:"Spoof",color:"#ffffff"})}handleMessage(n){switch(n.type){case"PRESENCE_STATE":this.handleStateMessage(n);break;case"PRESENCE_JOIN":this.handleJoinMessage(n);break;case"PRESENCE_LEAVE":this.handleLeaveMessage(n);break;default:console.error("WsPresenceChangeMessage with incorrect type in presence service")}}handleLeaveMessage(n){n.room||console.error("Incorrectly formatted leave message in presence service: ",n);let e={userId:n.userId,name:n.name,room:n.room,color:n.color},i=this.connectedTeachers().filter(r=>r.userId!=n.userId);this.connectedTeachers.set(i),console.log("Someone left, new status: ",this.connectedTeachers()),this._teacherUpdates.next(e)}handleJoinMessage(n){n.room||console.error("Incorrectly formatted join message in presence service: ",n);let e=this.connectedTeachers().findIndex(r=>r.userId==n.userId),i={userId:n.userId,name:n.name,room:n.room,color:n.color};if(e==-1){let r=this.connectedTeachers();r.push(i),this.connectedTeachers.set(r)}else{let r=this.connectedTeachers();r[e].room=n.room,this.connectedTeachers.set(r)}console.log("Someone joined, new status: ",this.connectedTeachers()),this._teacherUpdates.next(i)}handleStateMessage(n){if(n.users){let e=n.users.map(i=>y({},i));this.connectedTeachers.set(e)}else console.error("[Presence] - State message received without user array")}static \u0275fac=function(e){return new(e||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})};var FL=(t,n)=>n.id;function LL(t,n){if(t&1&&z(0,"main-presence-indicator",1),t&2){let e=n.$implicit;Q("teacher",e)}}var $a=class t{presence=d(yr);filter=Mi.required();isGroup=Mi("");teachers=N([]);ngOnInit(){this.presence.teacherUpdates.subscribe(()=>{this.teachers.set(this.presence.connectedTeachers().filter(n=>{let e=n.room.split(":"),i=e[1],r=e[2];return(this.isGroup()!==""&&i==="group"||this.isGroup()===""&&i==="child")&&r===this.filter()}))}),this.teachers.set(this.presence.connectedTeachers().filter(n=>{let e=this.isGroup()==""?"child:"+this.filter():"group:"+this.filter();return n.room.includes(e)}))}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=x({type:t,selectors:[["main-presence-container"]],inputs:{filter:[1,"filter"],isGroup:[1,"isGroup"]},decls:3,vars:0,consts:[[1,"container"],[3,"teacher"]],template:function(e,i){e&1&&(m(0,"mat-card",0),un(1,LL,1,1,"main-presence-indicator",1,FL),h()),e&2&&(w(),fn(i.teachers()))},dependencies:[$f,Pt],styles:["[_nghost-%COMP%]{height:fit-content;width:fit-content}.container[_ngcontent-%COMP%]{display:flex;flex-direction:row;padding-left:1em;padding-right:1em}.container[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{margin-left:.1em;margin-right:.1em}"]})};var jL=()=>({name:"alla",id:0}),pI=(t,n)=>n.id;function BL(t,n){if(t&1){let e=It();m(0,"mat-option",7),T("click",function(){let r=Ve(e).$implicit,o=G();return He(o.handleSelection(r))}),v(1),h()}if(t&2){let e=n.$implicit;Q("value",e),w(),Le(" ",e.name," ")}}function VL(t,n){t&1&&z(0,"mat-divider")}function HL(t,n){if(t&1){let e=It();m(0,"button",12),T("click",function(){let r=Ve(e).$implicit,o=G();return He(o.onSelectChild(r))}),m(1,"div",13),z(2,"main-presence-container",14),h(),m(3,"span",15),v(4),h(),m(5,"div",13),z(6,"attendance-box",16),h()(),ie(7,VL,1,0,"mat-divider")}if(t&2){let e=n.$implicit,i=n.$index,r=n.$count;w(2),Q("filter",ii(e.id)),w(2),Le("",e.name," "),w(2),Q("disabled",!0)("childSignal",e),w(),re(i!==r-1?7:-1)}}var Wa=class t{children=N([]);childSignal=ke.required();searchQuery=N("");groupSignal=ke.required();contentSignal=ke.required();allGroups=ke.required();stupidFix=N(0);searchedChildren=nt(()=>{this.stupidFix();let n=this.searchQuery();return this.children().filter(e=>e.name.toLowerCase().includes(n)).sort()});groupAttendance=nt(()=>this.searchedChildren().filter(n=>n.status==="CHECKED_IN").length);groupAbsent=nt(()=>this.searchedChildren().length-this.groupAttendance());attendanceService=d(ja);childService=d(zf);constructor(){this.attendanceService.getAttendanceChanges.subscribe(n=>{let e=this.children().find(i=>i.id===n.childId);e!=null&&(e.status=n.status,this.stupidFix.update(i=>i+1))}),Kt(()=>{this.groupSignal().id!==0&&this.loadChildren()})}onSearchUpdated(n){this.searchQuery.set(n)}onSelectChild(n){this.childSignal.set(n),this.contentSignal.set("childView")}loadChildren(){this.childService.getChildrenByGroup(this.groupSignal().id).subscribe({next:n=>{this.children.set(n)}})}showAllChildren(){this.childService.getChildren().subscribe({next:n=>{this.children.set(n)}})}handleSelection(n){if(n.name==="alla"){this.contentSignal.set("homeView"),this.groupSignal.set({name:"",id:0}),this.showAllChildren();return}this.groupSignal.set(n),this.contentSignal.set("groupView")}handleWebsocketMessage(n){let e=this.children().find(r=>r.id===n.childId);if(!e){console.error("Attendance message received from other group. Child not found.");return}this.attendanceService.getSignal(e.id,fi()).set(n.status),e.status=n.status,this.stupidFix.update(r=>r+1)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=x({type:t,selectors:[["main-child-list"]],inputs:{childSignal:[1,"childSignal"],groupSignal:[1,"groupSignal"],contentSignal:[1,"contentSignal"],allGroups:[1,"allGroups"]},outputs:{childSignal:"childSignalChange",groupSignal:"groupSignalChange",contentSignal:"contentSignalChange",allGroups:"allGroupsChange"},decls:31,vars:5,consts:[["searchQuery",""],[1,"child-list-container"],[1,"list-topper"],["subscriptSizing","dynamic",1,"search"],["matInput","","type","search",3,"input"],["subscriptSizing","dynamic",1,"pick-class"],[3,"value"],[3,"click","value"],[1,"list-class"],[1,"stats-card"],[1,"stats"],[1,"stats-text"],["mat-list-item","",3,"click"],["matListItemMeta","",1,"meta-container"],[3,"filter"],["matListItemTitle",""],[3,"disabled","childSignal"]],template:function(e,i){if(e&1){let r=It();m(0,"div",1)(1,"mat-card",2)(2,"mat-form-field",3)(3,"mat-label")(4,"mat-icon"),v(5,"search"),h(),v(6,"S\xF6k"),h(),m(7,"input",4,0),T("input",function(){Ve(r);let a=hn(8);return He(i.onSearchUpdated(a.value.toLowerCase()))}),h()(),m(9,"mat-form-field",5)(10,"mat-label")(11,"mat-icon"),v(12,"groups"),h(),v(13," V\xE4lj klass"),h(),m(14,"mat-select"),un(15,BL,2,2,"mat-option",6,pI),m(17,"mat-option",7),T("click",function(){return i.handleSelection({name:"alla",id:0})}),v(18,"Alla elever"),h()()()(),m(19,"mat-action-list",8),un(20,HL,8,6,null,null,pI),h(),z(22,"mat-divider"),m(23,"mat-card",9)(24,"mat-card-content",10)(25,"p",11),v(26),h(),m(27,"p",11),v(28),h(),m(29,"p",11),v(30),h()()()()}e&2&&(w(15),fn(i.allGroups()),w(2),Q("value",lg(4,jL)),w(3),fn(i.searchedChildren()),w(6),Le("N\xE4rvarande: ",i.groupAttendance()),w(2),Le("Icke n\xE4rvarande: ",i.groupAbsent()),w(2),Le("Antal elever: ",i.children().length))},dependencies:[dI,lI,cI,po,E_,I_,bv,La,Ua,rn,nn,dr,Oa,di,Ia,ci,$u,Pt,bn,jf,Lf,vr,$a],styles:['[_nghost-%COMP%]{background-color:var(--mat-sys-primary-container);width:100%;border:1px solid var(--mat-sys-outline-variant);color:var(--mat-sys-on-primary-container);box-sizing:border-box;border-radius:5px;flex:1;display:flex;flex-direction:column;min-height:0;height:100%;overflow:hidden}.mat-mdc-action-list[_ngcontent-%COMP%]{padding:0;border-radius:5px;height:100%}.mdc-list-item[_ngcontent-%COMP%]{color:var(--mat-sys-on-primary-container);background-color:var(--mat-sys-surface-variant);box-shadow:var(--mat-sys-level1)}.child-list-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%}.list-class[_ngcontent-%COMP%]{background-color:var(--mat-sys-surface-dim);flex:1;overflow-y:auto}[_nghost-%COMP%]     .child-list-container .pick-class .mdc-notched-outline__leading, [_nghost-%COMP%]     .child-list-container .pick-class .mdc-notched-outline__notch, [_nghost-%COMP%]     .child-list-container .pick-class .mdc-notched-outline__trailing{border-color:var(--mat-sys-inverse-primary)!important}[_nghost-%COMP%]     .child-list-container .pick-class .mat-mdc-text-field-wrapper{background-color:var(--mat-sys-inverse-primary)!important}[_nghost-%COMP%]     .child-list-container mat-form-field:not(.pick-class) .mdc-notched-outline__leading, [_nghost-%COMP%]     .child-list-container mat-form-field:not(.pick-class) .mdc-notched-outline__notch, [_nghost-%COMP%]     .child-list-container mat-form-field:not(.pick-class) .mdc-notched-outline__trailing{border-color:var(--mat-sys-inverse-primary)!important}[_nghost-%COMP%]     .child-list-container mat-form-field:not(.pick-class) .mat-mdc-text-field-wrapper{background-color:var(--mat-sys-inverse-primary)!important}.list-topper[_ngcontent-%COMP%]{display:flex;flex-direction:row;border-bottom-left-radius:0!important;border-bottom-right-radius:0!important}.stats[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;gap:1em;background:var(--mat-sys-inverse-primary);flex:1;padding:.5em}.stats[_ngcontent-%COMP%]:after{content:""}.stats[_ngcontent-%COMP%]:before{content:""}.stats[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-weight:500;padding:0;margin:.1em}.pick-class[_ngcontent-%COMP%]{flex:.5}.search[_ngcontent-%COMP%]{flex:1}.stats-text[_ngcontent-%COMP%]{margin:1em;font:var(--mat-sys-title-small);color:var(--mat-sys-on-secondary-container)}.cornerize[_ngcontent-%COMP%]{border-top-right-radius:0%!important;border-top-left-radius:0%!important}  mat-card>mat-form-field>div:nth-child(1){border-top-right-radius:0;border-top-left-radius:0}']})};var Wf=class{getDiff(n,e,i){let r=n.length-e.length,o=this.surroundingMatch(n,e,i,r)?r>0?"DELETE":"INSERT":"REPLACEMENT",a={operation:o,idx:i,value:"",length:0};switch(o){case"DELETE":a.length=r;break;case"INSERT":a.idx=i+r,a.value=e.substring(i+r,i);break;case"REPLACEMENT":{let s=this.findFirstDiff(n,e),l=this.findLastDiff(n,e);switch(l){case"prevOutOfBounds":a.idx=0,a.value=e.substring(0,0-r),a.operation="INSERT";break;case"newOutOfBounds":a.idx=0,a.length=r,a.operation="DELETE";break;default:a.value=e.substring(s,l),a.length=r+a.value.length,a.idx=s;break}}}return a}surroundingMatch(n,e,i,r){switch(r<0){case!0:return n.substring(0,i+r)===e.substring(0,i+r)&&n.substring(i+r)===e.substring(i);case!1:return n.substring(0,i)===e.substring(0,i)&&n.substring(i+r)===e.substring(i)}}findFirstDiff(n,e){let i=0;for(;;)if(n.charAt(i)===e.charAt(i))i++;else return i}findLastDiff(n,e){let i=1;for(;;){if(i>n.length)return"prevOutOfBounds";if(i>e.length)return"newOutOfBounds";if(n.charAt(n.length-i)===e.charAt(e.length-i))i++;else return e.length-i+1}}};var Gf=class{transformClient(n,e){switch(n.type){case"INSERT":return this.transformInsert(n,e);case"DELETE":return this.transformDelete(n,e)}}transformInsert(n,e){let i=n;switch(e.type){case"INSERT":e.position<=n.position&&(i.position+=e.text.length);break;case"DELETE":e.position<n.position&&(i.position=Math.max(e.position,i.position-=e.length));break}return i}transformDelete(n,e){let i=n;switch(e.type){case"INSERT":e.position<=i.position?i.position+=e.text.length:e.position<i.position+i.length&&(i.length+=e.text.length);break;case"DELETE":let r=e.position+e.length;if(r<=i.position)i.position-=e.length;else if(!(e.position>=i.position+i.length)){let o=Math.max(i.position,e.position),a=Math.min(i.position+i.length,r);i.length=Math.max(0,i.length-(a-o)),i.position=Math.min(i.position,e.position)}break}return i}};var qf=class t{baseUrl=`${Ft.apiUrl}/api/journal`;http=d(Ot);getJournal(n,e,i){let r=new zt;if(i==="childView")r=r.set("childId",n);else if(i==="groupView")r=r.set("groupId",e);else return console.error(`Attempted to fetch journal with unknown view: ${i}`),Tr(()=>new Error("Invalid view type provided to JournalService"));return this.http.get(this.baseUrl,{params:r})}static \u0275fac=function(e){return new(e||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})};var UL=["journalContent"],Yf=class t{journalSocket=d(br);differ=new Wf;operationalTransformer=new Gf;journalService=d(qf);textArea=An.required("journalContent");childSignal=ke.required();contentSignal=ke.required();groupSignal=ke.required();async ngOnInit(){await this.journalSocket.ensureConnected(),this.journalSocket.getMessages("journalMessages").subscribe(n=>{let e=n,i=e.operation;if(this.isMyOwnAck(e))this.inFlight.shift();else{for(let r of this.inFlight)i=this.operationalTransformer.transformClient(i,r);this.applyToLocalContent(i)}this.serverRevision=e.serverRevision}),this.loadJournal()}ngOnChanges(){let n=this.getRoom();this.journalSocket.setJournalRoom(n),this.loadJournal()}text=N("");prevText="";serverRevision=0;sequence=0;inFlight=[];getRoom(){return this.contentSignal()==="childView"?"journal:child:"+this.childSignal().id+":"+fi():"journal:group:"+this.groupSignal().id+":"+fi()}isMyOwnAck(n){return n.userId.toString()===sessionStorage.getItem("UserId")&&this.inFlight.length>0}loadJournal(){this.journalService.getJournal(this.childSignal().id,this.groupSignal().id,this.contentSignal()).subscribe({next:n=>{this.text.set(n.content),this.serverRevision=n.serverRevision,this.sequence=0,this.inFlight=[]}})}applyToLocalContent(n){let e=n.position;switch(n.type){case"INSERT":this.textArea().nativeElement.setRangeText(n.text,e,e,"preserve");break;case"DELETE":this.textArea().nativeElement.setRangeText("",e,e+n.length,"preserve");break}this.text.set(this.textArea().nativeElement.value),this.prevText=this.text()}ngOnDestroy(){this.journalSocket.leaveJournalRoom()}onInput(n){this.sequence++;let e=n.target,i=e.value;this.prevText=this.text();let r=e.selectionStart,o=this.differ.getDiff(this.prevText,i,r);this.text.set(i);let a;switch(o.operation){case"DELETE":a={type:"DELETE",position:o.idx,length:o.length};break;case"INSERT":a={type:"INSERT",position:o.idx,text:o.value};break;case"REPLACEMENT":a={type:"DELETE",position:o.idx,length:o.length},this.sendOperation(a),this.sequence++,a={type:"INSERT",position:o.idx,text:o.value};break}this.sendOperation(a)}sendOperation(n){let e={clientRevision:this.serverRevision,operation:n,sequence:this.sequence};this.inFlight.push(n),this.journalSocket.sendJournalUpdate(e)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=x({type:t,selectors:[["main-live-journal"]],viewQuery:function(e,i){e&1&&ti(i.textArea,UL,5),e&2&&ni()},inputs:{childSignal:[1,"childSignal"],contentSignal:[1,"contentSignal"],groupSignal:[1,"groupSignal"]},outputs:{childSignal:"childSignalChange",contentSignal:"contentSignalChange",groupSignal:"groupSignalChange"},features:[Ue],decls:3,vars:1,consts:[["journalContent",""],["matInput","",3,"input","ngModel"]],template:function(e,i){e&1&&(m(0,"mat-form-field")(1,"textarea",1,0),T("input",function(o){return i.onInput(o)}),h()()),e&2&&(w(),Q("ngModel",i.text()))},dependencies:[nn,di,Aa,fr,ka,ho],styles:["mat-tab-group[_ngcontent-%COMP%]{height:100%}mat-tab-group[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{height:100%}mat-mdc-tab-body-wrapper[_ngcontent-%COMP%]{height:100%}  .mat-mdc-form-field-flex{height:100%}  .mat-mdc-form-field-infix{height:100%}mat-form-field[_ngcontent-%COMP%]{width:100%;box-sizing:border-box;height:100%}textarea[_ngcontent-%COMP%]{width:100%;height:100%!important;min-height:20vh;margin-bottom:1em;padding:0;box-sizing:content-box;resize:none;overflow-y:scroll}"]})};var Zf=class t{url=`${Ft.apiUrl}/api/group`;http=d(Ot);getGroups(){return this.http.get(this.url)}static \u0275fac=function(e){return new(e||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})};var Qf=class t{url=`${Ft.apiUrl}/api/user/teacher`;colorUrl=`${Ft.apiUrl}/api/user/color`;http=d(Ot);getUser(n){let e=new zt().set("teacherId",n);return this.http.get(this.url,{params:e})}updateColor(n){return this.http.patch(this.colorUrl,{color:n})}static \u0275fac=function(e){return new(e||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})};function zL(t,n){if(t&1){let e=It();m(0,"div",1)(1,"button",2),T("click",function(){Ve(e);let r=G();return He(r.action())}),v(2),h()()}if(t&2){let e=G();w(2),Le(" ",e.data.action," ")}}var $L=["label"];function WL(t,n){}var GL=Math.pow(2,31)-1,$l=class{_overlayRef;instance;containerInstance;_afterDismissed=new D;_afterOpened=new D;_onAction=new D;_durationTimeoutId;_dismissedByAction=!1;constructor(n,e){this._overlayRef=e,this.containerInstance=n,n._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(n){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(n,GL))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}},gI=new _("MatSnackBarData"),Ga=class{politeness="polite";announcementMessage="";viewContainerRef;duration=0;panelClass;direction;data=null;horizontalPosition="center";verticalPosition="bottom"},qL=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=S({type:t,selectors:[["","matSnackBarLabel",""]],hostAttrs:[1,"mat-mdc-snack-bar-label","mdc-snackbar__label"]})}return t})(),YL=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=S({type:t,selectors:[["","matSnackBarActions",""]],hostAttrs:[1,"mat-mdc-snack-bar-actions","mdc-snackbar__actions"]})}return t})(),ZL=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=S({type:t,selectors:[["","matSnackBarAction",""]],hostAttrs:[1,"mat-mdc-snack-bar-action","mdc-snackbar__action"]})}return t})(),QL=(()=>{class t{snackBarRef=d($l);data=d(gI);constructor(){}action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=x({type:t,selectors:[["simple-snack-bar"]],hostAttrs:[1,"mat-mdc-simple-snack-bar"],exportAs:["matSnackBar"],decls:3,vars:2,consts:[["matSnackBarLabel",""],["matSnackBarActions",""],["matButton","","matSnackBarAction","",3,"click"]],template:function(i,r){i&1&&(m(0,"div",0),v(1),h(),ie(2,zL,3,1,"div",1)),i&2&&(w(),Le(" ",r.data.message,`
`),w(),re(r.hasAction?2:-1))},dependencies:[Ea,qL,YL,ZL],styles:[`.mat-mdc-simple-snack-bar {
  display: flex;
}
.mat-mdc-simple-snack-bar .mat-mdc-snack-bar-label {
  max-height: 50vh;
  overflow: auto;
}
`],encapsulation:2,changeDetection:0})}return t})(),S_="_mat-snack-bar-enter",T_="_mat-snack-bar-exit",KL=(()=>{class t extends mr{_ngZone=d(R);_elementRef=d(O);_changeDetectorRef=d(Ne);_platform=d(ue);_animationsDisabled=Ae();snackBarConfig=d(Ga);_document=d(j);_trackedModals=new Set;_enterFallback;_exitFallback;_injector=d(F);_announceDelay=150;_announceTimeoutId;_destroyed=!1;_portalOutlet;_onAnnounce=new D;_onExit=new D;_onEnter=new D;_animationState="void";_live;_label;_role;_liveElementId=d(qe).getId("mat-snack-bar-container-live-");constructor(){super();let e=this.snackBarConfig;e.politeness==="assertive"&&!e.announcementMessage?this._live="assertive":e.politeness==="off"?this._live="off":this._live="polite",this._platform.FIREFOX&&(this._live==="polite"&&(this._role="status"),this._live==="assertive"&&(this._role="alert"))}attachComponentPortal(e){this._assertNotAttached();let i=this._portalOutlet.attachComponentPortal(e);return this._afterPortalAttached(),i}attachTemplatePortal(e){this._assertNotAttached();let i=this._portalOutlet.attachTemplatePortal(e);return this._afterPortalAttached(),i}attachDomPortal=e=>{this._assertNotAttached();let i=this._portalOutlet.attachDomPortal(e);return this._afterPortalAttached(),i};onAnimationEnd(e){e===T_?this._completeExit():e===S_&&(clearTimeout(this._enterFallback),this._ngZone.run(()=>{this._onEnter.next(),this._onEnter.complete()}))}enter(){this._destroyed||(this._animationState="visible",this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce(),this._animationsDisabled?$e(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(S_)))},{injector:this._injector}):(clearTimeout(this._enterFallback),this._enterFallback=setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-snack-bar-fallback-visible"),this.onAnimationEnd(S_)},200)))}exit(){return this._destroyed?$(void 0):(this._ngZone.run(()=>{this._animationState="hidden",this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.setAttribute("mat-exit",""),clearTimeout(this._announceTimeoutId),this._animationsDisabled?$e(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(T_)))},{injector:this._injector}):(clearTimeout(this._exitFallback),this._exitFallback=setTimeout(()=>this.onAnimationEnd(T_),200))}),this._onExit)}ngOnDestroy(){this._destroyed=!0,this._clearFromModals(),this._completeExit()}_completeExit(){clearTimeout(this._exitFallback),queueMicrotask(()=>{this._onExit.next(),this._onExit.complete()})}_afterPortalAttached(){let e=this._elementRef.nativeElement,i=this.snackBarConfig.panelClass;i&&(Array.isArray(i)?i.forEach(a=>e.classList.add(a)):e.classList.add(i)),this._exposeToModals();let r=this._label.nativeElement,o="mdc-snackbar__label";r.classList.toggle(o,!r.querySelector(`.${o}`))}_exposeToModals(){let e=this._liveElementId,i=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let r=0;r<i.length;r++){let o=i[r],a=o.getAttribute("aria-owns");this._trackedModals.add(o),a?a.indexOf(e)===-1&&o.setAttribute("aria-owns",a+" "+e):o.setAttribute("aria-owns",e)}}_clearFromModals(){this._trackedModals.forEach(e=>{let i=e.getAttribute("aria-owns");if(i){let r=i.replace(this._liveElementId,"").trim();r.length>0?e.setAttribute("aria-owns",r):e.removeAttribute("aria-owns")}}),this._trackedModals.clear()}_assertNotAttached(){this._portalOutlet.hasAttached()}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{if(this._destroyed)return;let e=this._elementRef.nativeElement,i=e.querySelector("[aria-hidden]"),r=e.querySelector("[aria-live]");if(i&&r){let o=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&i.contains(document.activeElement)&&(o=document.activeElement),i.removeAttribute("aria-hidden"),r.appendChild(i),o?.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=x({type:t,selectors:[["mat-snack-bar-container"]],viewQuery:function(i,r){if(i&1&&Fe(Ln,7)($L,7),i&2){let o;B(o=V())&&(r._portalOutlet=o.first),B(o=V())&&(r._label=o.first)}},hostAttrs:[1,"mdc-snackbar","mat-mdc-snack-bar-container"],hostVars:6,hostBindings:function(i,r){i&1&&T("animationend",function(a){return r.onAnimationEnd(a.animationName)})("animationcancel",function(a){return r.onAnimationEnd(a.animationName)}),i&2&&W("mat-snack-bar-container-enter",r._animationState==="visible")("mat-snack-bar-container-exit",r._animationState==="hidden")("mat-snack-bar-container-animations-enabled",!r._animationsDisabled)},features:[ge],decls:6,vars:3,consts:[["label",""],[1,"mdc-snackbar__surface","mat-mdc-snackbar-surface"],[1,"mat-mdc-snack-bar-label"],["aria-hidden","true"],["cdkPortalOutlet",""]],template:function(i,r){i&1&&(m(0,"div",1)(1,"div",2,0)(3,"div",3),pt(4,WL,0,0,"ng-template",4),h(),z(5,"div"),h()()),i&2&&(w(5),oe("aria-live",r._live)("role",r._role)("id",r._liveElementId))},dependencies:[Ln],styles:[`@keyframes _mat-snack-bar-enter {
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
`],encapsulation:2})}return t})(),XL=new _("mat-snack-bar-default-options",{providedIn:"root",factory:()=>new Ga}),vI=(()=>{class t{_live=d(wl);_injector=d(F);_breakpointObserver=d(yl);_parentSnackBar=d(t,{optional:!0,skipSelf:!0});_defaultConfig=d(XL);_animationsDisabled=Ae();_snackBarRefAtThisLevel=null;simpleSnackBarComponent=QL;snackBarContainerComponent=KL;handsetCssClass="mat-mdc-snack-bar-handset";get _openedSnackBarRef(){let e=this._parentSnackBar;return e?e._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(e){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=e:this._snackBarRefAtThisLevel=e}constructor(){}openFromComponent(e,i){return this._attach(e,i)}openFromTemplate(e,i){return this._attach(e,i)}open(e,i="",r){let o=y(y({},this._defaultConfig),r);return o.data={message:e,action:i},o.announcementMessage===e&&(o.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,o)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(e,i){let r=i&&i.viewContainerRef&&i.viewContainerRef.injector,o=F.create({parent:r||this._injector,providers:[{provide:Ga,useValue:i}]}),a=new Fn(this.snackBarContainerComponent,i.viewContainerRef,o),s=e.attach(a);return s.instance.snackBarConfig=i,s.instance}_attach(e,i){let r=y(y(y({},new Ga),this._defaultConfig),i),o=this._createOverlay(r),a=this._attachSnackBarContainer(o,r),s=new $l(a,o);if(e instanceof lt){let l=new wn(e,null,{$implicit:r.data,snackBarRef:s});s.instance=a.attachTemplatePortal(l)}else{let l=this._createInjector(r,s),c=new Fn(e,void 0,l),u=a.attachComponentPortal(c);s.instance=u.instance}return this._breakpointObserver.observe(Cx.HandsetPortrait).pipe(pe(o.detachments())).subscribe(l=>{o.overlayElement.classList.toggle(this.handsetCssClass,l.matches)}),r.announcementMessage&&a._onAnnounce.subscribe(()=>{this._live.announce(r.announcementMessage,r.politeness)}),this._animateSnackBar(s,r),this._openedSnackBarRef=s,this._openedSnackBarRef}_animateSnackBar(e,i){e.afterDismissed().subscribe(()=>{this._openedSnackBarRef==e&&(this._openedSnackBarRef=null),i.announcementMessage&&this._live.clear()}),i.duration&&i.duration>0&&e.afterOpened().subscribe(()=>e._dismissAfter(i.duration)),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{e.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):e.containerInstance.enter()}_createOverlay(e){let i=new Fi;i.direction=e.direction;let r=gr(this._injector),o=e.direction==="rtl",a=e.horizontalPosition==="left"||e.horizontalPosition==="start"&&!o||e.horizontalPosition==="end"&&o,s=!a&&e.horizontalPosition!=="center";return a?r.left("0"):s?r.right("0"):r.centerHorizontally(),e.verticalPosition==="top"?r.top("0"):r.bottom("0"),i.positionStrategy=r,i.disableAnimations=this._animationsDisabled,Li(this._injector,i)}_createInjector(e,i){let r=e&&e.viewContainerRef&&e.viewContainerRef.injector;return F.create({parent:r||this._injector,providers:[{provide:$l,useValue:i},{provide:gI,useValue:e.data}]})}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Kf=class t{_snackBar=d(vI);userService=d(Qf);teacherColor=ke("#ffffff");userDataObservable=this.userService.getUser(Number(sessionStorage.getItem("UserId")));currentUser=this.userDataObservable.pipe();ngOnInit(){this.userDataObservable.subscribe(n=>{this.teacherColor.set(n.color)})}updateColor(){console.log("From updatecolor",this.teacherColor()),this.userService.updateColor(this.teacherColor()).subscribe(()=>{this._snackBar.open("Din f\xE4rg uppdateras n\xE4sta g\xE5ng du loggar in.","St\xE4ng",{duration:2500,verticalPosition:"top"})})}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=x({type:t,selectors:[["account-page"]],inputs:{teacherColor:[1,"teacherColor"]},outputs:{teacherColor:"teacherColorChange"},decls:33,vars:10,consts:[["appearance","outlined"],[1,"card-header-segment","card-header-left"],["mat-card-avatar","",1,"icon-display"],[1,"hamburger"],[1,"card-header-segment","card-header-right"],["type","color","matInput","","matNativeControl","","name","name",3,"input","ngModelChange","ngModel"]],template:function(e,i){if(e&1&&(m(0,"mat-card",0)(1,"mat-card-header")(2,"div",1)(3,"div",2)(4,"mat-icon"),v(5,"person"),h()(),m(6,"div",3)(7,"mat-card-title"),v(8),Us(9,"async"),h(),m(10,"mat-card-subtitle"),v(11),Us(12,"async"),h()()(),m(13,"div",4)(14,"h2"),v(15,"Din f\xE4rg"),h(),m(16,"input",5),T("input",function(){return i.updateColor()}),_t("ngModelChange",function(o){return Oe(i.teacherColor,o)||(i.teacherColor=o),o}),h()()(),m(17,"mat-card-content")(18,"p"),v(19),Us(20,"async"),h(),m(21,"p"),v(22,"Exempeltext"),h(),m(23,"p"),v(24,"Exempeltext"),h(),m(25,"p"),v(26,"Exempeltext"),h(),m(27,"p"),v(28,"Exempeltext"),h(),m(29,"p"),v(30,"Exempeltext"),h(),m(31,"p"),v(32,"Exempeltext"),h()()()),e&2){let r,o,a;w(8),_e((r=zs(9,4,i.currentUser))==null?null:r.name),w(3),_e((o=zs(12,6,i.currentUser))==null?null:o.role),w(5),vt("ngModel",i.teacherColor),w(3),Le("Mejladress: ",(a=zs(20,8,i.currentUser))==null?null:a.email)}},dependencies:[$u,Pt,GD,bn,li,WD,$D,Ia,ci,rn,Oa,di,Aa,fr,ka,ho,yg],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;overflow:hidden;box-sizing:border-box}.icon-display[_ngcontent-%COMP%]{transform:scale(2);display:flex;align-items:center;justify-content:center;overflow:hidden}p[_ngcontent-%COMP%]{font:var(--mat-sys-body-large)}mat-card[_ngcontent-%COMP%]{margin-top:7em;box-sizing:border-box;flex:1;box-shadow:var(--mat-sys-level2);background:var(--mat-sys-surface-variant)}mat-card-header[_ngcontent-%COMP%]{width:100%;display:flex}.card-header-left[_ngcontent-%COMP%]{flex:2;display:flex;flex-direction:row;justify-content:flex-start;align-items:center;gap:2em}.hamburger[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:flex-start}.card-header-right[_ngcontent-%COMP%]{flex:1;display:flex;align-items:center;justify-content:center;flex-direction:column;font-family:var(--mat-sys-label-large)}"]})};var Xf=class t{childSignal=ke.required();static \u0275fac=function(e){return new(e||t)};static \u0275cmp=x({type:t,selectors:[["information"]],inputs:{childSignal:[1,"childSignal"]},outputs:{childSignal:"childSignalChange"},decls:34,vars:1,consts:[["journalContent",""],[1,"subrow"],["id","left-card"],[1,"header-text"],["matInput",""],[1,"color"],["cdkScrollable","",1,"subcard"],[1,"gap"],[1,"kontakt"]],template:function(e,i){e&1&&(m(0,"div",1)(1,"mat-card",2)(2,"mat-card-header",3),v(3),h(),m(4,"mat-form-field"),z(5,"textarea",4,0),h()(),m(7,"mat-card",5)(8,"mat-card-header",3),v(9," Kontaktinformation "),h(),m(10,"mat-card",6)(11,"mat-card-content",7)(12,"p",8),v(13,"Kontakt 1"),h(),m(14,"p"),v(15,"Namn: V\xE5rdnadshavare Exempelsson"),h(),z(16,"mat-divider"),m(17,"p"),v(18,"Telefonnummer: 072-555-83-34"),h(),z(19,"mat-divider"),m(20,"p"),v(21,"Mejl: V\xE5rdnadshavare.Exempelsson@outlook.se"),h(),z(22,"mat-divider"),m(23,"p",8),v(24,"Kontakt 2"),h(),m(25,"p"),v(26,"Namn: V\xE5rdnadnadshavare Exempelsson"),h(),z(27,"mat-divider"),m(28,"p"),v(29,"Telefonnummer: 072-365-555-34"),h(),z(30,"mat-divider"),m(31,"p"),v(32,"Mejl: V\xE5rdnadshavare.Exempelsson@outlook.se"),h(),z(33,"mat-divider"),h()()()()),e&2&&(w(3),Le(" Specialbehov ",i.childSignal().name," "))},dependencies:[OE,Pt,di,nn,li,bn,po],styles:["[_nghost-%COMP%]{display:flex}.subrow[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex:1;justify-content:center;height:100%;gap:1em}.subrow[_ngcontent-%COMP%] > mat-card[_ngcontent-%COMP%]{margin-bottom:.5em;max-height:calc(100% - 3em)}.subrow[_ngcontent-%COMP%] > mat-card[_ngcontent-%COMP%] > mat-card[_ngcontent-%COMP%]{overflow-y:scroll}mat-card-header[_ngcontent-%COMP%]{display:flex;justify-content:center;border:2px;font:var(--mat-sys-headline-small)}mat-form-field[_ngcontent-%COMP%]{flex:1;margin:1em;box-shadow:var(--mat-sys-level2)}textarea[_ngcontent-%COMP%]{min-height:20vh;resize:none;overflow-y:auto}mat-card[_ngcontent-%COMP%]{box-shadow:var(--mat-sys-level2);flex:1;gap:.5em}.color[_ngcontent-%COMP%]{background:var(--mat-sys-inverse-primary)}.subcard[_ngcontent-%COMP%]{box-shadow:var(--mat-sys-level2);background-color:var(--mat-sys-surface-variant);flex:1;margin:1em;border-radius:0%}.info-subcard[_ngcontent-%COMP%]{box-shadow:var(--mat-sys-level2);background-color:var(--mat-sys-surface-variant);flex:1;margin:1em;flex-direction:row;justify-content:center}.flex-div[_ngcontent-%COMP%]{flex:1}.kontakt[_ngcontent-%COMP%]{font:var(--mat-sys-label-large);justify-self:center}.header-text[_ngcontent-%COMP%]{font-weight:400}#left-card[_ngcontent-%COMP%]{background:var(--mat-sys-inverse-primary);border-top-left-radius:0%}"]})};var Jf=class t{fakeNews="Finally, one I can answer! I literally have never been able to answer any askreddit question in my entire life,and have never posted anything on reddit until this exact moment that is happening right now. Writing this on mobile,sorry for bad formatting, also english is my 6th language so there might be one wrong word, TLDR at the bottom. ";fakeNewsLong="Finally, one I can answer! I literally have never been able to answer any askreddit question in my entire life,and have never posted anything on reddit until this exact moment that is happening right now. Writing this on mobile,sorry for bad formatting, also english is my 6th language so there might be one wrong word, TLDR at the bottom. Finally, one I can answer! I literally have never been able to answer any askreddit question in my entire life,and have never posted anything on reddit until this exact moment that is happening right now. Writing this on mobile,sorry for bad formatting, also english is my 6th language so there might be one wrong word, TLDR at the bottom. ";static \u0275fac=function(e){return new(e||t)};static \u0275cmp=x({type:t,selectors:[["homepage"]],decls:86,vars:5,consts:[[1,"main-card"],[1,"school-title"],[1,"main-body"],[1,"news"],[1,"news-header"],[1,"news-content"],[1,"mock-news-boxes"],[1,"news-text"],[1,"news-title"],[1,"staff"],[1,"mock-teachers"],[1,"namn"]],template:function(e,i){e&1&&(m(0,"mat-card",0)(1,"mat-card-header",1)(2,"p"),v(3,"K\xE4ndpersonsnamn F\xF6rskola"),h()(),m(4,"mat-card-content",2)(5,"mat-card",3)(6,"mat-card-header",4)(7,"p")(8,"mat-icon"),v(9,"newspaper"),h(),v(10," Nyheter "),h()(),z(11,"mat-divider"),m(12,"mat-card-content",5)(13,"mat-card",6)(14,"p",7)(15,"span",8),v(16,"CLICKBAIT TITEL"),h(),v(17),h()(),m(18,"mat-card",6)(19,"p",7)(20,"span",8),v(21,"CLICKBAIT TITEL"),h(),v(22),h()(),m(23,"mat-card",6)(24,"p",7)(25,"span",8),v(26,"CLICKBAIT TITEL"),h(),v(27),h()(),m(28,"mat-card",6)(29,"p",7)(30,"span",8),v(31,"CLICKBAIT TITEL"),h(),v(32),h()(),m(33,"mat-card",6)(34,"p",7)(35,"span",8),v(36,"CLICKBAIT TITEL"),h(),v(37),h()()()(),m(38,"mat-card",9)(39,"mat-card-header",4)(40,"p")(41,"mat-icon"),v(42,"diversity_3"),h(),v(43," Personal "),h()(),z(44,"mat-divider"),m(45,"mat-card-content",5)(46,"mat-card",10)(47,"mat-icon"),v(48,"face"),h(),m(49,"p",11),v(50,"L\xE4rare L\xE4rarsson"),h()(),m(51,"mat-card",10)(52,"mat-icon"),v(53,"face"),h(),m(54,"p",11),v(55,"L\xE4rare L\xE4rarsson"),h()(),m(56,"mat-card",10)(57,"mat-icon"),v(58,"face"),h(),m(59,"p",11),v(60,"L\xE4rare L\xE4rarsson"),h()(),m(61,"mat-card",10)(62,"mat-icon"),v(63,"face"),h(),m(64,"p",11),v(65,"L\xE4rare L\xE4rarsson"),h()(),m(66,"mat-card",10)(67,"mat-icon"),v(68,"face"),h(),m(69,"p",11),v(70,"L\xE4rare L\xE4rarsson"),h()(),m(71,"mat-card",10)(72,"mat-icon"),v(73,"face"),h(),m(74,"p",11),v(75,"L\xE4rare L\xE4rarsson"),h()(),m(76,"mat-card",10)(77,"mat-icon"),v(78,"face"),h(),m(79,"p",11),v(80,"L\xE4rare L\xE4rarsson"),h()(),m(81,"mat-card",10)(82,"mat-icon"),v(83,"face"),h(),m(84,"p",11),v(85,"L\xE4rare L\xE4rarsson"),h()()()()()()),e&2&&(w(17),Le(" ",i.fakeNews," "),w(5),Le(" ",i.fakeNewsLong," "),w(5),Le(" ",i.fakeNews," "),w(5),Le(" ",i.fakeNews," "),w(5),Le(" ",i.fakeNewsLong," "))},dependencies:[Pt,li,bn,po,ci],styles:["[_nghost-%COMP%]{display:flex;flex:1;height:100%;min-height:0;width:100%}.main-card[_ngcontent-%COMP%]{box-shadow:var(--mat-sys-level1);display:flex;flex-direction:column;flex:1;min-height:0;width:100%;overflow:hidden}.school-title[_ngcontent-%COMP%]{background:var(--mat-sys-inverse-primary);font:var(--mat-sys-title-large);font-weight:400;font-size:xx-large;display:flex;justify-content:center}.main-body[_ngcontent-%COMP%]{display:flex;flex-direction:row;background-color:var(--mat-sys-surface-dim);gap:1em;flex:1;min-height:0}mat-card[_ngcontent-%COMP%]{box-shadow:var(--mat-sys-level2)}.news[_ngcontent-%COMP%]{display:flex;margin-top:1em;flex:1;flex-direction:column;min-height:0;overflow:hidden}.staff[_ngcontent-%COMP%]{display:flex;margin-top:1em;flex:.5;flex-direction:column;min-height:0;overflow:hidden}.news-header[_ngcontent-%COMP%]{flex-shrink:0;justify-content:center;align-items:center;display:flex;background:var(--mat-sys-surface-variant);font-weight:400!important;font-size:x-large}.mock-news-boxes[_ngcontent-%COMP%]{margin:.8em;background-color:var(--mat-sys-surface-variant)}.news-text[_ngcontent-%COMP%]{margin:.3em}.news-title[_ngcontent-%COMP%]{font-size:medium;font-weight:700}.news-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex:1;min-height:0;overflow-y:auto;margin:0 0 1em;padding:0 .5em}mat-icon[_ngcontent-%COMP%]{margin-left:.5em}.mock-teachers[_ngcontent-%COMP%]{margin:.8em;display:flex;flex-direction:row;gap:.3em;align-items:center;justify-content:flex-start;background-color:var(--mat-sys-surface-variant)}.namn[_ngcontent-%COMP%]{font:var(--mat-sys-body-large)}"]})};function JL(t,n){if(t&1&&(m(0,"p",8),v(1),h()),t&2){let e=G(2);w(),_e(e.groupSignal().name)}}function ej(t,n){if(t&1){let e=It();m(0,"div",6)(1,"mat-card-header",7)(2,"span"),v(3),h(),ie(4,JL,2,1,"p",8),z(5,"main-presence-container",9),h(),m(6,"div",10)(7,"child-display",11),T("attendanceChangeEvent",function(r){Ve(e);let o=G();return He(o.wsUpdateAttendance(r))}),_t("childSignalChange",function(r){Ve(e);let o=G();return Oe(o.childSignal,r)||(o.childSignal=r),He(r)})("dateSignalChange",function(r){Ve(e);let o=G();return Oe(o.dateSignal,r)||(o.dateSignal=r),He(r)}),h()()(),m(8,"mat-tab-group",12)(9,"mat-tab",13),z(10,"information",14),h(),m(11,"mat-tab",15),z(12,"main-live-journal",16),h()()}if(t&2){let e=G();w(3),_e(e.childSignal().name),w(),re(e.groupSignal().name!=="alla"?4:-1),w(),Q("filter",ii(e.childSignal().id)),w(2),vt("childSignal",e.childSignal)("dateSignal",e.dateSignal),w(3),Q("childSignal",e.childSignal()),w(),Q("label",ii(e.reportTitle())),w(),Q("childSignal",e.childSignal())("groupSignal",e.groupSignal())("contentSignal",e.contentSignal())}}function tj(t,n){if(t&1&&(m(0,"mat-card-header",7)(1,"span"),v(2),h(),m(3,"p",8),v(4),h(),z(5,"main-presence-container",17),h(),m(6,"mat-tab-group",12)(7,"mat-tab",15),z(8,"main-live-journal",16),h()()),t&2){let e=G();w(2),_e(e.groupSignal().name),w(2),_e(e.dateSignal()),w(),Q("filter",ii(e.groupSignal().id)),w(2),Q("label",ii(e.reportTitle())),w(),Q("childSignal",e.childSignal())("groupSignal",e.groupSignal())("contentSignal",e.contentSignal())}}function nj(t,n){t&1&&z(0,"account-page",2)}function ij(t,n){t&1&&z(0,"homepage",3)}var qa=class t{presence=d(yr);childSignal=N({name:"",id:0,date:"",status:"NOT_SET"});contentSignal=ke.required();groupSignal=N({name:"",id:0});allGroups=N([]);groupService=d(Zf);childList=An.required(Wa);teachers=[{}];dateSignal=N("");months=["Januari","Februari","Mars","April","Maj","Juni","Juli","Augusti","September","Oktober","November","December"];days=["S\xF6ndag","M\xE5ndag","Tisdag","Onsdag","Torsdag","Fredag","L\xF6rdag"];ngOnInit(){this.dateSignal.set(this.getDate()),this.loadGroups()}reportTitle=nt(()=>{switch(this.contentSignal()){case"childView":return this.childSignal().name+"s dagsrapport";case"groupView":return this.groupSignal().name+"s dagsrapport";default:return"ERROR"}});getDate(){let n=new Date;return`${this.days[n.getDay()]} ${n.getDate()} ${this.months[n.getMonth()]} ${n.getFullYear()}`}loadGroups(){this.groupService.getGroups().subscribe({next:n=>{this.allGroups.set(n)}})}handleWebsocketMessage(n){this.childList().handleWebsocketMessage(n)}attendanceChangeEvent=new A;wsUpdateAttendance(n){this.attendanceChangeEvent.emit(n)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=x({type:t,selectors:[["main-panel"]],viewQuery:function(e,i){e&1&&ti(i.childList,Wa,5),e&2&&ni()},inputs:{contentSignal:[1,"contentSignal"]},outputs:{contentSignal:"contentSignalChange",attendanceChangeEvent:"attendanceChangeEvent"},decls:10,vars:8,consts:[[1,"main-card-content"],[1,"main-card-left"],[1,"account-page"],[1,"home-card"],[1,"main-card-right"],[3,"groupSignalChange","childSignalChange","contentSignalChange","allGroupsChange","groupSignal","childSignal","contentSignal","allGroups"],[1,"sub-row"],[1,"title"],[1,"mini-spacer"],[3,"filter"],[1,"childDisplay"],[3,"attendanceChangeEvent","childSignalChange","dateSignalChange","childSignal","dateSignal"],["mat-stretch-tabs","false","mat-align-tabs","start"],["label","Information"],[3,"childSignal"],[3,"label"],[3,"childSignal","groupSignal","contentSignal"],["isGroup","yes",3,"filter"]],template:function(e,i){e&1&&(m(0,"mat-card")(1,"mat-card-content",0)(2,"div",1),ie(3,ej,13,12),ie(4,tj,9,9),ie(5,nj,1,0,"account-page",2),ie(6,ij,1,0,"homepage",3),h(),m(7,"mat-card",4)(8,"div",4)(9,"main-child-list",5),_t("groupSignalChange",function(o){return Oe(i.groupSignal,o)||(i.groupSignal=o),o})("childSignalChange",function(o){return Oe(i.childSignal,o)||(i.childSignal=o),o})("contentSignalChange",function(o){return Oe(i.contentSignal,o)||(i.contentSignal=o),o})("allGroupsChange",function(o){return Oe(i.allGroups,o)||(i.allGroups=o),o}),h()()()()()),e&2&&(w(3),re(i.contentSignal()==="childView"?3:-1),w(),re(i.contentSignal()==="groupView"?4:-1),w(),re(i.contentSignal()==="teacherView"?5:-1),w(),re(i.contentSignal()==="homeView"?6:-1),w(3),vt("groupSignal",i.groupSignal)("childSignal",i.childSignal)("contentSignal",i.contentSignal)("allGroups",i.allGroups))},dependencies:[Wa,La,Uf,Pt,li,bn,Yf,Kf,$a,Ll,Ef,Xf,Jf],styles:["[_nghost-%COMP%]{display:block;margin:0 auto;border-radius:12px;box-sizing:border-box;width:100%;height:100%}mat-card-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font:var(--mat-sys-headline-medium)}h2[_ngcontent-%COMP%]{margin-bottom:16px}mat-card[_ngcontent-%COMP%]{width:100%;height:100%}.main-card-content[_ngcontent-%COMP%]{display:flex;flex-direction:row;box-sizing:border-box;height:100%}.main-card-left[_ngcontent-%COMP%]{width:100%;height:100%;padding-right:2%;overflow:hidden;display:flex;flex-direction:column;flex:1.5}.main-card-right[_ngcontent-%COMP%]{width:100%;height:100%;overflow-y:hidden;min-width:fit-content;overflow-x:auto;display:flex;flex:1;min-width:30%}mat-card-header[_ngcontent-%COMP%]{flex:.15}.childDisplay[_ngcontent-%COMP%]{box-shadow:var(--mat-sys-level1);display:flex;flex-direction:row;justify-content:center;align-items:center;background:var(--mat-sys-inverse-primary);border-radius:12px;max-width:fit-content}mat-tab-group[_ngcontent-%COMP%]{height:100%}mat-tab-group[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{height:100%}mat-mdc-tab-body-wrapper[_ngcontent-%COMP%]{height:100%}  .mat-mdc-form-field-flex{height:100%}  .mat-mdc-form-field-infix{height:100%}main-live-journal[_ngcontent-%COMP%]{flex:4}.spacer[_ngcontent-%COMP%]{flex:1 1 auto}  .mat-mdc-form-field-subscript-wrapper{display:none}.title[_ngcontent-%COMP%]{text-wrap:nowrap;margin-bottom:1em}main-presence-container[_ngcontent-%COMP%]{margin-left:1em}.mini-spacer[_ngcontent-%COMP%]{margin:1em}.sub-row[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;align-items:center}.home-card[_ngcontent-%COMP%]{display:flex;flex:1}.account-page[_ngcontent-%COMP%]{flex:1}"]})};var rj=["*",[["mat-toolbar-row"]]],oj=["*","mat-toolbar-row"],aj=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=S({type:t,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return t})(),_I=(()=>{class t{_elementRef=d(O);_platform=d(ue);_document=d(j);color;_toolbarRows;constructor(){}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=x({type:t,selectors:[["mat-toolbar"]],contentQueries:function(i,r,o){if(i&1&&Mt(o,aj,5),i&2){let a;B(a=V())&&(r._toolbarRows=a)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(i,r){i&2&&(Ut(r.color?"mat-"+r.color:""),W("mat-toolbar-multiple-rows",r._toolbarRows.length>0)("mat-toolbar-single-row",r._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:oj,decls:2,vars:0,template:function(i,r){i&1&&(Me(rj),X(0),X(1,1))},styles:[`.mat-toolbar {
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
`],encapsulation:2,changeDetection:0})}return t})();var bI=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=U({type:t});static \u0275inj=L({imports:[he]})}return t})();var yI=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=U({type:t});static \u0275inj=L({imports:[ui,he,ui]})}return t})();var em=class t{groupSignal=N({name:"",id:0});allGroups=N([]);contentSignal=N("");presence=d(yr);socketService=d(br);mainPanel=An.required(qa);async ngOnInit(){this.contentSignal.set("homeView"),this.socketService.connect(`${Ft.wsUrl}/ws`),await this.socketService.ensureConnected(),this.presence.init(),this.socketService.setAttendanceRoom("ALL"),this.socketService.getMessages("attendanceMessages").subscribe(n=>{if(!("childId"in n)){console.error("Attendance message with incorrect body!");return}console.log(n),this.handleWebsocketMessage(n)})}ngOnDestroy(){this.socketService.leaveJournalRoom()}handleWebsocketMessage(n){this.mainPanel().handleWebsocketMessage(n)}wsUpdateAttendance(n){this.socketService.sendAttendanceUpdate(n)}onTabChange(n){let e=n.index,i=this.allGroups()[e];this.contentSignal.set("groupView"),this.groupSignal.set(i),this.presence.spoofTeacherUpdate()}logout(){document.cookie='jwtToken=""',sessionStorage.removeItem("token"),sessionStorage.removeItem("UserId"),sessionStorage.removeItem("role"),this.socketService.disconnect(),window.location.reload()}minaSidor(){this.contentSignal.set("teacherView")}hem(){this.contentSignal.set("homeView")}hover(n){console.log(n)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=x({type:t,selectors:[["main-page"]],viewQuery:function(e,i){e&1&&ti(i.mainPanel,qa,5),e&2&&ni()},decls:15,vars:1,consts:[[1,"main-nav"],["color","mat-sys-primary"],["role","button",1,"button-19"],["matButton","tonal",1,"mina-sidor-button",3,"click"],["matButton","tonal",3,"click"],[1,"example-spacer"],["matButton","tonal",1,"logout-button",3,"click"],[1,"main-body"],[1,"main-panel-container"],[3,"attendanceChangeEvent","contentSignalChange","contentSignal"]],template:function(e,i){e&1&&(m(0,"div",0)(1,"mat-toolbar",1)(2,"span"),v(3,"K\xEEndGuard"),h(),m(4,"div",2)(5,"button",3),T("click",function(){return i.minaSidor()}),v(6,"Mina sidor"),h()(),m(7,"button",4),T("click",function(){return i.hem()}),v(8,"Hem"),h(),z(9,"span",5),m(10,"button",6),T("click",function(){return i.logout()}),v(11,"Logout"),h()()(),m(12,"div",7)(13,"div",8)(14,"main-panel",9),T("attendanceChangeEvent",function(o){return i.wsUpdateAttendance(o)}),_t("contentSignalChange",function(o){return Oe(i.contentSignal,o)||(i.contentSignal=o),o}),h()()()),e&2&&(w(14),vt("contentSignal",i.contentSignal))},dependencies:[bI,_I,qa,yI,fo,Ea],styles:["[_nghost-%COMP%]{background-color:var(--mat-sys-surface);width:100%;height:100%;display:flex}mat-toolbar[_ngcontent-%COMP%]{background:linear-gradient(90deg,var(--mat-sys-inverse-primary) 30%,var(--mat-sys-tertiary) 100%);color:var(--mat-sys-primary-on-surface);display:flex;align-items:center;position:fixed}mat-tab-group[_ngcontent-%COMP%]{height:100%}mat-tab[_ngcontent-%COMP%]{height:100%}.example-spacer[_ngcontent-%COMP%]{flex:1 1 auto}  .mat-mdc-tab{background-color:var(--mat-sys-surface-container);border-radius:5px;box-shadow:var(--mat-sys-level1)}  .mdc-tab--active{background-color:var(--mat-sys-surface-container);border-radius:5px;box-shadow:var(--mat-sys-level3)}  .mat-mdc-tab-body-wrapper{height:100%}.main-body[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:100%;width:100%}.main-panel-container[_ngcontent-%COMP%]{width:85%;height:80%}.mina-sidor-button[_ngcontent-%COMP%]{margin:2em}"]})};var tm=t=>{let n=t.url.join(""),e=d(_n),r=d(Fa).getRole();switch(n){case"":return r?r==="ADMIN"?e.parseUrl("/admin"):e.parseUrl("/app"):!0;case"app":return r?r==="ADMIN"?e.parseUrl("/admin"):!0:e.parseUrl("/");case"admin":return r?r!=="ADMIN"?e.parseUrl("/app"):!0:e.parseUrl("/");default:return!1}};var nm=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=x({type:t,selectors:[["admin-page"]],decls:5,vars:0,consts:[[1,"container"]],template:function(e,i){e&1&&(m(0,"mat-card",0)(1,"mat-card-header"),v(2," H\xE4r \xE4r en header "),h(),m(3,"mat-card-content"),v(4," H\xE4r \xE4r content "),h()())},dependencies:[Pt,li,bn],styles:["[_nghost-%COMP%]{display:flex;justify-content:center;align-items:center;width:100vw;height:100vh;overflow-y:scroll}.container[_ngcontent-%COMP%]{width:85%;height:80%;background-color:--var(mat-sys-surface-container)}"]})};var wI=[{canActivate:[tm],path:"",component:Mf},{canActivate:[tm],path:"app",component:em},{canActivate:[tm],path:"admin",component:nm}];var im=class t{intercept(n,e){let i=sessionStorage.getItem("token");if(!i)return e.handle(n);let r=n.clone({setHeaders:K(y({},i?{Authorization:`Bearer ${i}`}:{}),{"ngrok-skip-browser-warning":"true"})});return e.handle(r)}static \u0275fac=function(e){return new(e||t)};static \u0275prov=b({token:t,factory:t.\u0275fac})};var CI={providers:[Ah(),vv(wI),Bg(Vg()),{provide:pu,useClass:im,multi:!0}]};var rm=class t{title=N("frontend");static \u0275fac=function(e){return new(e||t)};static \u0275cmp=x({type:t,selectors:[["app-root"]],decls:1,vars:0,template:function(e,i){e&1&&z(0,"router-outlet")},dependencies:[ul],encapsulation:2})};Ag(rm,CI).catch(t=>console.error(t));
