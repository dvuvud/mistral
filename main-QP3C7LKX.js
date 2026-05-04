var Gx=Object.defineProperty,qx=Object.defineProperties;var Zx=Object.getOwnPropertyDescriptors;var wb=Object.getOwnPropertySymbols;var Qx=Object.prototype.hasOwnProperty,Yx=Object.prototype.propertyIsEnumerable;var Cb=(t,n,e)=>n in t?Gx(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e,v=(t,n)=>{for(var e in n||={})Qx.call(n,e)&&Cb(t,e,n[e]);if(wb)for(var e of wb(n))Yx.call(n,e)&&Cb(t,e,n[e]);return t},W=(t,n)=>qx(t,Zx(n));var st=null,oc=!1,df=1,Kx=null,je=Symbol("SIGNAL");function F(t){let n=st;return st=t,n}function lc(){return st}var Qi={version:0,lastCleanEpoch:0,dirty:!1,producers:void 0,producersTail:void 0,consumers:void 0,consumersTail:void 0,recomputing:!1,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,kind:"unknown",producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function gi(t){if(oc)throw new Error("");if(st===null)return;st.consumerOnSignalRead(t);let n=st.producersTail;if(n!==void 0&&n.producer===t)return;let e,i=st.recomputing;if(i&&(e=n!==void 0?n.nextProducer:st.producers,e!==void 0&&e.producer===t)){st.producersTail=e,e.lastReadVersion=t.version;return}let r=t.consumersTail;if(r!==void 0&&r.consumer===st&&(!i||Jx(r,st)))return;let o=Wr(st),a={producer:t,consumer:st,nextProducer:e,prevConsumer:r,lastReadVersion:t.version,nextConsumer:void 0};st.producersTail=a,n!==void 0?n.nextProducer=a:st.producers=a,o&&Ib(t,a)}function Db(){df++}function dc(t){if(!(Wr(t)&&!t.dirty)&&!(!t.dirty&&t.lastCleanEpoch===df)){if(!t.producerMustRecompute(t)&&!$r(t)){cc(t);return}t.producerRecomputeValue(t),cc(t)}}function uf(t){if(t.consumers===void 0)return;let n=oc;oc=!0;try{for(let e=t.consumers;e!==void 0;e=e.nextConsumer){let i=e.consumer;i.dirty||Xx(i)}}finally{oc=n}}function ff(){return st?.consumerAllowSignalWrites!==!1}function Xx(t){t.dirty=!0,uf(t),t.consumerMarkedDirty?.(t)}function cc(t){t.dirty=!1,t.lastCleanEpoch=df}function bi(t){return t&&xb(t),F(t)}function xb(t){t.producersTail=void 0,t.recomputing=!0}function Yi(t,n){F(n),t&&Eb(t)}function Eb(t){t.recomputing=!1;let n=t.producersTail,e=n!==void 0?n.nextProducer:t.producers;if(e!==void 0){if(Wr(t))do e=mf(e);while(e!==void 0);n!==void 0?n.nextProducer=void 0:t.producers=void 0}}function $r(t){for(let n=t.producers;n!==void 0;n=n.nextProducer){let e=n.producer,i=n.lastReadVersion;if(i!==e.version||(dc(e),i!==e.version))return!0}return!1}function vi(t){if(Wr(t)){let n=t.producers;for(;n!==void 0;)n=mf(n)}t.producers=void 0,t.producersTail=void 0,t.consumers=void 0,t.consumersTail=void 0}function Ib(t,n){let e=t.consumersTail,i=Wr(t);if(e!==void 0?(n.nextConsumer=e.nextConsumer,e.nextConsumer=n):(n.nextConsumer=void 0,t.consumers=n),n.prevConsumer=e,t.consumersTail=n,!i)for(let r=t.producers;r!==void 0;r=r.nextProducer)Ib(r.producer,r)}function mf(t){let n=t.producer,e=t.nextProducer,i=t.nextConsumer,r=t.prevConsumer;if(t.nextConsumer=void 0,t.prevConsumer=void 0,i!==void 0?i.prevConsumer=r:n.consumersTail=r,r!==void 0)r.nextConsumer=i;else if(n.consumers=i,!Wr(n)){let o=n.producers;for(;o!==void 0;)o=mf(o)}return e}function Wr(t){return t.consumerIsAlwaysLive||t.consumers!==void 0}function uc(t){Kx?.(t)}function Jx(t,n){let e=n.producersTail;if(e!==void 0){let i=n.producers;do{if(i===t)return!0;if(i===e)break;i=i.nextProducer}while(i!==void 0)}return!1}function fc(t,n){return Object.is(t,n)}function wa(t,n){let e=Object.create(eE);e.computation=t,n!==void 0&&(e.equal=n);let i=()=>{if(dc(e),gi(e),e.value===ya)throw e.error;return e.value};return i[je]=e,uc(e),i}var ac=Symbol("UNSET"),sc=Symbol("COMPUTING"),ya=Symbol("ERRORED"),eE=W(v({},Qi),{value:ac,dirty:!0,error:null,equal:fc,kind:"computed",producerMustRecompute(t){return t.value===ac||t.value===sc},producerRecomputeValue(t){if(t.value===sc)throw new Error("");let n=t.value;t.value=sc;let e=bi(t),i,r=!1;try{i=t.computation(),F(null),r=n!==ac&&n!==ya&&i!==ya&&t.equal(n,i)}catch(o){i=ya,t.error=o}finally{Yi(t,e)}if(r){t.value=n;return}t.value=i,t.version++}});function tE(){throw new Error}var Mb=tE;function Sb(t){Mb(t)}function hf(t){Mb=t}var nE=null;function pf(t,n){let e=Object.create(Ca);e.value=t,n!==void 0&&(e.equal=n);let i=()=>kb(e);return i[je]=e,uc(e),[i,a=>Ki(e,a),a=>gf(e,a)]}function kb(t){return gi(t),t.value}function Ki(t,n){ff()||Sb(t),t.equal(t.value,n)||(t.value=n,iE(t))}function gf(t,n){ff()||Sb(t),Ki(t,n(t.value))}var Ca=W(v({},Qi),{equal:fc,value:void 0,kind:"signal"});function iE(t){t.version++,Db(),uf(t),nE?.(t)}var bf=W(v({},Qi),{consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!0,dirty:!0,kind:"effect"});function vf(t){if(t.dirty=!1,t.version>0&&!$r(t))return;t.version++;let n=bi(t);try{t.cleanup(),t.fn()}finally{Yi(t,n)}}function ee(t){return typeof t=="function"}function Gr(t){let e=t(i=>{Error.call(i),i.stack=new Error().stack});return e.prototype=Object.create(Error.prototype),e.prototype.constructor=e,e}var mc=Gr(t=>function(e){t(this),this.message=e?`${e.length} errors occurred during unsubscription:
${e.map((i,r)=>`${r+1}) ${i.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=e});function Xi(t,n){if(t){let e=t.indexOf(n);0<=e&&t.splice(e,1)}}var ae=class t{constructor(n){this.initialTeardown=n,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let n;if(!this.closed){this.closed=!0;let{_parentage:e}=this;if(e)if(this._parentage=null,Array.isArray(e))for(let o of e)o.remove(this);else e.remove(this);let{initialTeardown:i}=this;if(ee(i))try{i()}catch(o){n=o instanceof mc?o.errors:[o]}let{_finalizers:r}=this;if(r){this._finalizers=null;for(let o of r)try{Tb(o)}catch(a){n=n??[],a instanceof mc?n=[...n,...a.errors]:n.push(a)}}if(n)throw new mc(n)}}add(n){var e;if(n&&n!==this)if(this.closed)Tb(n);else{if(n instanceof t){if(n.closed||n._hasParent(this))return;n._addParent(this)}(this._finalizers=(e=this._finalizers)!==null&&e!==void 0?e:[]).push(n)}}_hasParent(n){let{_parentage:e}=this;return e===n||Array.isArray(e)&&e.includes(n)}_addParent(n){let{_parentage:e}=this;this._parentage=Array.isArray(e)?(e.push(n),e):e?[e,n]:n}_removeParent(n){let{_parentage:e}=this;e===n?this._parentage=null:Array.isArray(e)&&Xi(e,n)}remove(n){let{_finalizers:e}=this;e&&Xi(e,n),n instanceof t&&n._removeParent(this)}};ae.EMPTY=(()=>{let t=new ae;return t.closed=!0,t})();var _f=ae.EMPTY;function hc(t){return t instanceof ae||t&&"closed"in t&&ee(t.remove)&&ee(t.add)&&ee(t.unsubscribe)}function Tb(t){ee(t)?t():t.unsubscribe()}var on={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var qr={setTimeout(t,n,...e){let{delegate:i}=qr;return i?.setTimeout?i.setTimeout(t,n,...e):setTimeout(t,n,...e)},clearTimeout(t){let{delegate:n}=qr;return(n?.clearTimeout||clearTimeout)(t)},delegate:void 0};function pc(t){qr.setTimeout(()=>{let{onUnhandledError:n}=on;if(n)n(t);else throw t})}function Da(){}var Ab=yf("C",void 0,void 0);function Rb(t){return yf("E",void 0,t)}function Nb(t){return yf("N",t,void 0)}function yf(t,n,e){return{kind:t,value:n,error:e}}var Ji=null;function Zr(t){if(on.useDeprecatedSynchronousErrorHandling){let n=!Ji;if(n&&(Ji={errorThrown:!1,error:null}),t(),n){let{errorThrown:e,error:i}=Ji;if(Ji=null,e)throw i}}else t()}function Ob(t){on.useDeprecatedSynchronousErrorHandling&&Ji&&(Ji.errorThrown=!0,Ji.error=t)}var er=class extends ae{constructor(n){super(),this.isStopped=!1,n?(this.destination=n,hc(n)&&n.add(this)):this.destination=aE}static create(n,e,i){return new an(n,e,i)}next(n){this.isStopped?Cf(Nb(n),this):this._next(n)}error(n){this.isStopped?Cf(Rb(n),this):(this.isStopped=!0,this._error(n))}complete(){this.isStopped?Cf(Ab,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(n){this.destination.next(n)}_error(n){try{this.destination.error(n)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},rE=Function.prototype.bind;function wf(t,n){return rE.call(t,n)}var Df=class{constructor(n){this.partialObserver=n}next(n){let{partialObserver:e}=this;if(e.next)try{e.next(n)}catch(i){gc(i)}}error(n){let{partialObserver:e}=this;if(e.error)try{e.error(n)}catch(i){gc(i)}else gc(n)}complete(){let{partialObserver:n}=this;if(n.complete)try{n.complete()}catch(e){gc(e)}}},an=class extends er{constructor(n,e,i){super();let r;if(ee(n)||!n)r={next:n??void 0,error:e??void 0,complete:i??void 0};else{let o;this&&on.useDeprecatedNextContext?(o=Object.create(n),o.unsubscribe=()=>this.unsubscribe(),r={next:n.next&&wf(n.next,o),error:n.error&&wf(n.error,o),complete:n.complete&&wf(n.complete,o)}):r=n}this.destination=new Df(r)}};function gc(t){on.useDeprecatedSynchronousErrorHandling?Ob(t):pc(t)}function oE(t){throw t}function Cf(t,n){let{onStoppedNotification:e}=on;e&&qr.setTimeout(()=>e(t,n))}var aE={closed:!0,next:Da,error:oE,complete:Da};var Qr=typeof Symbol=="function"&&Symbol.observable||"@@observable";function Ft(t){return t}function xf(...t){return Ef(t)}function Ef(t){return t.length===0?Ft:t.length===1?t[0]:function(e){return t.reduce((i,r)=>r(i),e)}}var q=(()=>{class t{constructor(e){e&&(this._subscribe=e)}lift(e){let i=new t;return i.source=this,i.operator=e,i}subscribe(e,i,r){let o=cE(e)?e:new an(e,i,r);return Zr(()=>{let{operator:a,source:s}=this;o.add(a?a.call(o,s):s?this._subscribe(o):this._trySubscribe(o))}),o}_trySubscribe(e){try{return this._subscribe(e)}catch(i){e.error(i)}}forEach(e,i){return i=Fb(i),new i((r,o)=>{let a=new an({next:s=>{try{e(s)}catch(c){o(c),a.unsubscribe()}},error:o,complete:r});this.subscribe(a)})}_subscribe(e){var i;return(i=this.source)===null||i===void 0?void 0:i.subscribe(e)}[Qr](){return this}pipe(...e){return Ef(e)(this)}toPromise(e){return e=Fb(e),new e((i,r)=>{let o;this.subscribe(a=>o=a,a=>r(a),()=>i(o))})}}return t.create=n=>new t(n),t})();function Fb(t){var n;return(n=t??on.Promise)!==null&&n!==void 0?n:Promise}function sE(t){return t&&ee(t.next)&&ee(t.error)&&ee(t.complete)}function cE(t){return t&&t instanceof er||sE(t)&&hc(t)}function lE(t){return ee(t?.lift)}function te(t){return n=>{if(lE(n))return n.lift(function(e){try{return t(e,this)}catch(i){this.error(i)}});throw new TypeError("Unable to lift unknown Observable type")}}function ie(t,n,e,i,r){return new If(t,n,e,i,r)}var If=class extends er{constructor(n,e,i,r,o,a){super(n),this.onFinalize=o,this.shouldUnsubscribe=a,this._next=e?function(s){try{e(s)}catch(c){n.error(c)}}:super._next,this._error=r?function(s){try{r(s)}catch(c){n.error(c)}finally{this.unsubscribe()}}:super._error,this._complete=i?function(){try{i()}catch(s){n.error(s)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var n;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:e}=this;super.unsubscribe(),!e&&((n=this.onFinalize)===null||n===void 0||n.call(this))}}};var Pb=Gr(t=>function(){t(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var x=(()=>{class t extends q{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(e){let i=new bc(this,this);return i.operator=e,i}_throwIfClosed(){if(this.closed)throw new Pb}next(e){Zr(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let i of this.currentObservers)i.next(e)}})}error(e){Zr(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=e;let{observers:i}=this;for(;i.length;)i.shift().error(e)}})}complete(){Zr(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:e}=this;for(;e.length;)e.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var e;return((e=this.observers)===null||e===void 0?void 0:e.length)>0}_trySubscribe(e){return this._throwIfClosed(),super._trySubscribe(e)}_subscribe(e){return this._throwIfClosed(),this._checkFinalizedStatuses(e),this._innerSubscribe(e)}_innerSubscribe(e){let{hasError:i,isStopped:r,observers:o}=this;return i||r?_f:(this.currentObservers=null,o.push(e),new ae(()=>{this.currentObservers=null,Xi(o,e)}))}_checkFinalizedStatuses(e){let{hasError:i,thrownError:r,isStopped:o}=this;i?e.error(r):o&&e.complete()}asObservable(){let e=new q;return e.source=this,e}}return t.create=(n,e)=>new bc(n,e),t})(),bc=class extends x{constructor(n,e){super(),this.destination=n,this.source=e}next(n){var e,i;(i=(e=this.destination)===null||e===void 0?void 0:e.next)===null||i===void 0||i.call(e,n)}error(n){var e,i;(i=(e=this.destination)===null||e===void 0?void 0:e.error)===null||i===void 0||i.call(e,n)}complete(){var n,e;(e=(n=this.destination)===null||n===void 0?void 0:n.complete)===null||e===void 0||e.call(n)}_subscribe(n){var e,i;return(i=(e=this.source)===null||e===void 0?void 0:e.subscribe(n))!==null&&i!==void 0?i:_f}};var Be=class extends x{constructor(n){super(),this._value=n}get value(){return this.getValue()}_subscribe(n){let e=super._subscribe(n);return!e.closed&&n.next(this._value),e}getValue(){let{hasError:n,thrownError:e,_value:i}=this;if(n)throw e;return this._throwIfClosed(),i}next(n){super.next(this._value=n)}};var xa={now(){return(xa.delegate||Date).now()},delegate:void 0};var _i=class extends x{constructor(n=1/0,e=1/0,i=xa){super(),this._bufferSize=n,this._windowTime=e,this._timestampProvider=i,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=e===1/0,this._bufferSize=Math.max(1,n),this._windowTime=Math.max(1,e)}next(n){let{isStopped:e,_buffer:i,_infiniteTimeWindow:r,_timestampProvider:o,_windowTime:a}=this;e||(i.push(n),!r&&i.push(o.now()+a)),this._trimBuffer(),super.next(n)}_subscribe(n){this._throwIfClosed(),this._trimBuffer();let e=this._innerSubscribe(n),{_infiniteTimeWindow:i,_buffer:r}=this,o=r.slice();for(let a=0;a<o.length&&!n.closed;a+=i?1:2)n.next(o[a]);return this._checkFinalizedStatuses(n),e}_trimBuffer(){let{_bufferSize:n,_timestampProvider:e,_buffer:i,_infiniteTimeWindow:r}=this,o=(r?1:2)*n;if(n<1/0&&o<i.length&&i.splice(0,i.length-o),!r){let a=e.now(),s=0;for(let c=1;c<i.length&&i[c]<=a;c+=2)s=c;s&&i.splice(0,s+1)}}};var vc=class extends ae{constructor(n,e){super()}schedule(n,e=0){return this}};var Ea={setInterval(t,n,...e){let{delegate:i}=Ea;return i?.setInterval?i.setInterval(t,n,...e):setInterval(t,n,...e)},clearInterval(t){let{delegate:n}=Ea;return(n?.clearInterval||clearInterval)(t)},delegate:void 0};var _c=class extends vc{constructor(n,e){super(n,e),this.scheduler=n,this.work=e,this.pending=!1}schedule(n,e=0){var i;if(this.closed)return this;this.state=n;let r=this.id,o=this.scheduler;return r!=null&&(this.id=this.recycleAsyncId(o,r,e)),this.pending=!0,this.delay=e,this.id=(i=this.id)!==null&&i!==void 0?i:this.requestAsyncId(o,this.id,e),this}requestAsyncId(n,e,i=0){return Ea.setInterval(n.flush.bind(n,this),i)}recycleAsyncId(n,e,i=0){if(i!=null&&this.delay===i&&this.pending===!1)return e;e!=null&&Ea.clearInterval(e)}execute(n,e){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;let i=this._execute(n,e);if(i)return i;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(n,e){let i=!1,r;try{this.work(n)}catch(o){i=!0,r=o||new Error("Scheduled action threw falsy error")}if(i)return this.unsubscribe(),r}unsubscribe(){if(!this.closed){let{id:n,scheduler:e}=this,{actions:i}=e;this.work=this.state=this.scheduler=null,this.pending=!1,Xi(i,this),n!=null&&(this.id=this.recycleAsyncId(e,n,null)),this.delay=null,super.unsubscribe()}}};var Yr=class t{constructor(n,e=t.now){this.schedulerActionCtor=n,this.now=e}schedule(n,e=0,i){return new this.schedulerActionCtor(this,n).schedule(i,e)}};Yr.now=xa.now;var yc=class extends Yr{constructor(n,e=Yr.now){super(n,e),this.actions=[],this._active=!1}flush(n){let{actions:e}=this;if(this._active){e.push(n);return}let i;this._active=!0;do if(i=n.execute(n.state,n.delay))break;while(n=e.shift());if(this._active=!1,i){for(;n=e.shift();)n.unsubscribe();throw i}}};var Ia=new yc(_c),Lb=Ia;var Te=new q(t=>t.complete());function wc(t){return t&&ee(t.schedule)}function Mf(t){return t[t.length-1]}function Cc(t){return ee(Mf(t))?t.pop():void 0}function xn(t){return wc(Mf(t))?t.pop():void 0}function jb(t,n){return typeof Mf(t)=="number"?t.pop():n}function Vb(t,n,e,i){function r(o){return o instanceof e?o:new e(function(a){a(o)})}return new(e||(e=Promise))(function(o,a){function s(u){try{l(i.next(u))}catch(f){a(f)}}function c(u){try{l(i.throw(u))}catch(f){a(f)}}function l(u){u.done?o(u.value):r(u.value).then(s,c)}l((i=i.apply(t,n||[])).next())})}function Bb(t){var n=typeof Symbol=="function"&&Symbol.iterator,e=n&&t[n],i=0;if(e)return e.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&i>=t.length&&(t=void 0),{value:t&&t[i++],done:!t}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}function tr(t){return this instanceof tr?(this.v=t,this):new tr(t)}function Hb(t,n,e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=e.apply(t,n||[]),r,o=[];return r=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),s("next"),s("throw"),s("return",a),r[Symbol.asyncIterator]=function(){return this},r;function a(h){return function(b){return Promise.resolve(b).then(h,f)}}function s(h,b){i[h]&&(r[h]=function(w){return new Promise(function(I,A){o.push([h,w,I,A])>1||c(h,w)})},b&&(r[h]=b(r[h])))}function c(h,b){try{l(i[h](b))}catch(w){m(o[0][3],w)}}function l(h){h.value instanceof tr?Promise.resolve(h.value.v).then(u,f):m(o[0][2],h)}function u(h){c("next",h)}function f(h){c("throw",h)}function m(h,b){h(b),o.shift(),o.length&&c(o[0][0],o[0][1])}}function Ub(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n=t[Symbol.asyncIterator],e;return n?n.call(t):(t=typeof Bb=="function"?Bb(t):t[Symbol.iterator](),e={},i("next"),i("throw"),i("return"),e[Symbol.asyncIterator]=function(){return this},e);function i(o){e[o]=t[o]&&function(a){return new Promise(function(s,c){a=t[o](a),r(s,c,a.done,a.value)})}}function r(o,a,s,c){Promise.resolve(c).then(function(l){o({value:l,done:s})},a)}}var Dc=t=>t&&typeof t.length=="number"&&typeof t!="function";function xc(t){return ee(t?.then)}function Ec(t){return ee(t[Qr])}function Ic(t){return Symbol.asyncIterator&&ee(t?.[Symbol.asyncIterator])}function Mc(t){return new TypeError(`You provided ${t!==null&&typeof t=="object"?"an invalid object":`'${t}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function dE(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var Sc=dE();function kc(t){return ee(t?.[Sc])}function Tc(t){return Hb(this,arguments,function*(){let e=t.getReader();try{for(;;){let{value:i,done:r}=yield tr(e.read());if(r)return yield tr(void 0);yield yield tr(i)}}finally{e.releaseLock()}})}function Ac(t){return ee(t?.getReader)}function xe(t){if(t instanceof q)return t;if(t!=null){if(Ec(t))return uE(t);if(Dc(t))return fE(t);if(xc(t))return mE(t);if(Ic(t))return zb(t);if(kc(t))return hE(t);if(Ac(t))return pE(t)}throw Mc(t)}function uE(t){return new q(n=>{let e=t[Qr]();if(ee(e.subscribe))return e.subscribe(n);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function fE(t){return new q(n=>{for(let e=0;e<t.length&&!n.closed;e++)n.next(t[e]);n.complete()})}function mE(t){return new q(n=>{t.then(e=>{n.closed||(n.next(e),n.complete())},e=>n.error(e)).then(null,pc)})}function hE(t){return new q(n=>{for(let e of t)if(n.next(e),n.closed)return;n.complete()})}function zb(t){return new q(n=>{gE(t,n).catch(e=>n.error(e))})}function pE(t){return zb(Tc(t))}function gE(t,n){var e,i,r,o;return Vb(this,void 0,void 0,function*(){try{for(e=Ub(t);i=yield e.next(),!i.done;){let a=i.value;if(n.next(a),n.closed)return}}catch(a){r={error:a}}finally{try{i&&!i.done&&(o=e.return)&&(yield o.call(e))}finally{if(r)throw r.error}}n.complete()})}function Mt(t,n,e,i=0,r=!1){let o=n.schedule(function(){e(),r?t.add(this.schedule(null,i)):this.unsubscribe()},i);if(t.add(o),!r)return o}function Rc(t,n=0){return te((e,i)=>{e.subscribe(ie(i,r=>Mt(i,t,()=>i.next(r),n),()=>Mt(i,t,()=>i.complete(),n),r=>Mt(i,t,()=>i.error(r),n)))})}function Nc(t,n=0){return te((e,i)=>{i.add(t.schedule(()=>e.subscribe(i),n))})}function $b(t,n){return xe(t).pipe(Nc(n),Rc(n))}function Wb(t,n){return xe(t).pipe(Nc(n),Rc(n))}function Gb(t,n){return new q(e=>{let i=0;return n.schedule(function(){i===t.length?e.complete():(e.next(t[i++]),e.closed||this.schedule())})})}function qb(t,n){return new q(e=>{let i;return Mt(e,n,()=>{i=t[Sc](),Mt(e,n,()=>{let r,o;try{({value:r,done:o}=i.next())}catch(a){e.error(a);return}o?e.complete():e.next(r)},0,!0)}),()=>ee(i?.return)&&i.return()})}function Oc(t,n){if(!t)throw new Error("Iterable cannot be null");return new q(e=>{Mt(e,n,()=>{let i=t[Symbol.asyncIterator]();Mt(e,n,()=>{i.next().then(r=>{r.done?e.complete():e.next(r.value)})},0,!0)})})}function Zb(t,n){return Oc(Tc(t),n)}function Qb(t,n){if(t!=null){if(Ec(t))return $b(t,n);if(Dc(t))return Gb(t,n);if(xc(t))return Wb(t,n);if(Ic(t))return Oc(t,n);if(kc(t))return qb(t,n);if(Ac(t))return Zb(t,n)}throw Mc(t)}function Ee(t,n){return n?Qb(t,n):xe(t)}function N(...t){let n=xn(t);return Ee(t,n)}function Ma(t,n){let e=ee(t)?t:()=>t,i=r=>r.error(e());return new q(n?r=>n.schedule(i,0,r):i)}function Sa(t){return!!t&&(t instanceof q||ee(t.lift)&&ee(t.subscribe))}var Gn=Gr(t=>function(){t(this),this.name="EmptyError",this.message="no elements in sequence"});function Sf(t,n){let e=typeof n=="object";return new Promise((i,r)=>{let o=new an({next:a=>{i(a),o.unsubscribe()},error:r,complete:()=>{e?i(n.defaultValue):r(new Gn)}});t.subscribe(o)})}function Yb(t){return t instanceof Date&&!isNaN(t)}function X(t,n){return te((e,i)=>{let r=0;e.subscribe(ie(i,o=>{i.next(t.call(n,o,r++))}))})}var{isArray:bE}=Array;function vE(t,n){return bE(n)?t(...n):t(n)}function Fc(t){return X(n=>vE(t,n))}var{isArray:_E}=Array,{getPrototypeOf:yE,prototype:wE,keys:CE}=Object;function Pc(t){if(t.length===1){let n=t[0];if(_E(n))return{args:n,keys:null};if(DE(n)){let e=CE(n);return{args:e.map(i=>n[i]),keys:e}}}return{args:t,keys:null}}function DE(t){return t&&typeof t=="object"&&yE(t)===wE}function Lc(t,n){return t.reduce((e,i,r)=>(e[i]=n[r],e),{})}function Kr(...t){let n=xn(t),e=Cc(t),{args:i,keys:r}=Pc(t);if(i.length===0)return Ee([],n);let o=new q(xE(i,n,r?a=>Lc(r,a):Ft));return e?o.pipe(Fc(e)):o}function xE(t,n,e=Ft){return i=>{Kb(n,()=>{let{length:r}=t,o=new Array(r),a=r,s=r;for(let c=0;c<r;c++)Kb(n,()=>{let l=Ee(t[c],n),u=!1;l.subscribe(ie(i,f=>{o[c]=f,u||(u=!0,s--),s||i.next(e(o.slice()))},()=>{--a||i.complete()}))},i)},i)}}function Kb(t,n,e){t?Mt(e,t,n):n()}function Xb(t,n,e,i,r,o,a,s){let c=[],l=0,u=0,f=!1,m=()=>{f&&!c.length&&!l&&n.complete()},h=w=>l<i?b(w):c.push(w),b=w=>{o&&n.next(w),l++;let I=!1;xe(e(w,u++)).subscribe(ie(n,A=>{r?.(A),o?h(A):n.next(A)},()=>{I=!0},void 0,()=>{if(I)try{for(l--;c.length&&l<i;){let A=c.shift();a?Mt(n,a,()=>b(A)):b(A)}m()}catch(A){n.error(A)}}))};return t.subscribe(ie(n,h,()=>{f=!0,m()})),()=>{s?.()}}function nt(t,n,e=1/0){return ee(n)?nt((i,r)=>X((o,a)=>n(i,o,r,a))(xe(t(i,r))),e):(typeof n=="number"&&(e=n),te((i,r)=>Xb(i,r,t,e)))}function yi(t=1/0){return nt(Ft,t)}function Jb(){return yi(1)}function wi(...t){return Jb()(Ee(t,xn(t)))}function qn(t){return new q(n=>{xe(t()).subscribe(n)})}function ka(...t){let n=Cc(t),{args:e,keys:i}=Pc(t),r=new q(o=>{let{length:a}=e;if(!a){o.complete();return}let s=new Array(a),c=a,l=a;for(let u=0;u<a;u++){let f=!1;xe(e[u]).subscribe(ie(o,m=>{f||(f=!0,l--),s[u]=m},()=>c--,void 0,()=>{(!c||!f)&&(l||o.next(i?Lc(i,s):s),o.complete())}))}});return n?r.pipe(Fc(n)):r}function Ta(t=0,n,e=Lb){let i=-1;return n!=null&&(wc(n)?e=n:i=n),new q(r=>{let o=Yb(t)?+t-e.now():t;o<0&&(o=0);let a=0;return e.schedule(function(){r.closed||(r.next(a++),0<=i?this.schedule(void 0,i):r.complete())},o)})}function sn(...t){let n=xn(t),e=jb(t,1/0),i=t;return i.length?i.length===1?xe(i[0]):yi(e)(Ee(i,n)):Te}function le(t,n){return te((e,i)=>{let r=0;e.subscribe(ie(i,o=>t.call(n,o,r++)&&i.next(o)))})}function ev(t){return te((n,e)=>{let i=!1,r=null,o=null,a=!1,s=()=>{if(o?.unsubscribe(),o=null,i){i=!1;let l=r;r=null,e.next(l)}a&&e.complete()},c=()=>{o=null,a&&e.complete()};n.subscribe(ie(e,l=>{i=!0,r=l,o||xe(t(l)).subscribe(o=ie(e,s,c))},()=>{a=!0,(!i||!o||o.closed)&&e.complete()}))})}function jc(t,n=Ia){return ev(()=>Ta(t,n))}function Ci(t){return te((n,e)=>{let i=null,r=!1,o;i=n.subscribe(ie(e,void 0,void 0,a=>{o=xe(t(a,Ci(t)(n))),i?(i.unsubscribe(),i=null,o.subscribe(e)):r=!0})),r&&(i.unsubscribe(),i=null,o.subscribe(e))})}function Di(t,n){return ee(n)?nt(t,n,1):nt(t,1)}function Zn(t,n=Ia){return te((e,i)=>{let r=null,o=null,a=null,s=()=>{if(r){r.unsubscribe(),r=null;let l=o;o=null,i.next(l)}};function c(){let l=a+t,u=n.now();if(u<l){r=this.schedule(void 0,l-u),i.add(r);return}s()}e.subscribe(ie(i,l=>{o=l,a=n.now(),r||(r=n.schedule(c,t),i.add(r))},()=>{s(),i.complete()},void 0,()=>{o=r=null}))})}function tv(t){return te((n,e)=>{let i=!1;n.subscribe(ie(e,r=>{i=!0,e.next(r)},()=>{i||e.next(t),e.complete()}))})}function ze(t){return t<=0?()=>Te:te((n,e)=>{let i=0;n.subscribe(ie(e,r=>{++i<=t&&(e.next(r),t<=i&&e.complete())}))})}function Bc(t,n=Ft){return t=t??EE,te((e,i)=>{let r,o=!0;e.subscribe(ie(i,a=>{let s=n(a);(o||!t(r,s))&&(o=!1,r=s,i.next(a))}))})}function EE(t,n){return t===n}function nv(t=IE){return te((n,e)=>{let i=!1;n.subscribe(ie(e,r=>{i=!0,e.next(r)},()=>i?e.complete():e.error(t())))})}function IE(){return new Gn}function xi(t){return te((n,e)=>{try{n.subscribe(e)}finally{e.add(t)}})}function Qn(t,n){let e=arguments.length>=2;return i=>i.pipe(t?le((r,o)=>t(r,o,i)):Ft,ze(1),e?tv(n):nv(()=>new Gn))}function Vc(t){return t<=0?()=>Te:te((n,e)=>{let i=[];n.subscribe(ie(e,r=>{i.push(r),t<i.length&&i.shift()},()=>{for(let r of i)e.next(r);e.complete()},void 0,()=>{i=null}))})}function Hc(){return te((t,n)=>{let e,i=!1;t.subscribe(ie(n,r=>{let o=e;e=r,i&&n.next([o,r]),i=!0}))})}function Aa(t={}){let{connector:n=()=>new x,resetOnError:e=!0,resetOnComplete:i=!0,resetOnRefCountZero:r=!0}=t;return o=>{let a,s,c,l=0,u=!1,f=!1,m=()=>{s?.unsubscribe(),s=void 0},h=()=>{m(),a=c=void 0,u=f=!1},b=()=>{let w=a;h(),w?.unsubscribe()};return te((w,I)=>{l++,!f&&!u&&m();let A=c=c??n();I.add(()=>{l--,l===0&&!f&&!u&&(s=kf(b,r))}),A.subscribe(I),!a&&l>0&&(a=new an({next:he=>A.next(he),error:he=>{f=!0,m(),s=kf(h,e,he),A.error(he)},complete:()=>{u=!0,m(),s=kf(h,i),A.complete()}}),xe(w).subscribe(a))})(o)}}function kf(t,n,...e){if(n===!0){t();return}if(n===!1)return;let i=new an({next:()=>{i.unsubscribe(),t()}});return xe(n(...e)).subscribe(i)}function Uc(t,n,e){let i,r=!1;return t&&typeof t=="object"?{bufferSize:i=1/0,windowTime:n=1/0,refCount:r=!1,scheduler:e}=t:i=t??1/0,Aa({connector:()=>new _i(i,n,e),resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:r})}function nr(t){return le((n,e)=>t<=e)}function ct(...t){let n=xn(t);return te((e,i)=>{(n?wi(t,e,n):wi(t,e)).subscribe(i)})}function it(t,n){return te((e,i)=>{let r=null,o=0,a=!1,s=()=>a&&!r&&i.complete();e.subscribe(ie(i,c=>{r?.unsubscribe();let l=0,u=o++;xe(t(c,u)).subscribe(r=ie(i,f=>i.next(n?n(c,f,u,l++):f),()=>{r=null,s()}))},()=>{a=!0,s()}))})}function $e(t){return te((n,e)=>{xe(t).subscribe(ie(e,()=>e.complete(),Da)),!e.closed&&n.subscribe(e)})}function Oe(t,n,e){let i=ee(t)||n||e?{next:t,error:n,complete:e}:t;return i?te((r,o)=>{var a;(a=i.subscribe)===null||a===void 0||a.call(i);let s=!0;r.subscribe(ie(o,c=>{var l;(l=i.next)===null||l===void 0||l.call(i,c),o.next(c)},()=>{var c;s=!1,(c=i.complete)===null||c===void 0||c.call(i),o.complete()},c=>{var l;s=!1,(l=i.error)===null||l===void 0||l.call(i,c),o.error(c)},()=>{var c,l;s&&((c=i.unsubscribe)===null||c===void 0||c.call(i)),(l=i.finalize)===null||l===void 0||l.call(i)}))}):Ft}var Tf;function zc(){return Tf}function En(t){let n=Tf;return Tf=t,n}var iv=Symbol("NotFound");function Xr(t){return t===iv||t?.name==="\u0275NotFound"}function rv(t){let n=F(null);try{return t()}finally{F(n)}}var Yc="https://angular.dev/best-practices/security#preventing-cross-site-scripting-xss",D=class extends Error{code;constructor(n,e){super($t(n,e)),this.code=n}};function ME(t){return`NG0${Math.abs(t)}`}function $t(t,n){return`${ME(t)}${n?": "+n:""}`}var eo=globalThis;function ge(t){for(let n in t)if(t[n]===ge)return n;throw Error("")}function lv(t,n){for(let e in n)n.hasOwnProperty(e)&&!t.hasOwnProperty(e)&&(t[e]=n[e])}function ja(t){if(typeof t=="string")return t;if(Array.isArray(t))return`[${t.map(ja).join(", ")}]`;if(t==null)return""+t;let n=t.overriddenName||t.name;if(n)return`${n}`;let e=t.toString();if(e==null)return""+e;let i=e.indexOf(`
`);return i>=0?e.slice(0,i):e}function Kc(t,n){return t?n?`${t} ${n}`:t:n||""}var SE=ge({__forward_ref__:ge});function Lt(t){return t.__forward_ref__=Lt,t}function rt(t){return zf(t)?t():t}function zf(t){return typeof t=="function"&&t.hasOwnProperty(SE)&&t.__forward_ref__===Lt}function p(t){return{token:t.token,providedIn:t.providedIn||null,factory:t.factory,value:void 0}}function P(t){return{providers:t.providers||[],imports:t.imports||[]}}function Ba(t){return kE(t,Xc)}function $f(t){return Ba(t)!==null}function kE(t,n){return t.hasOwnProperty(n)&&t[n]||null}function TE(t){let n=t?.[Xc]??null;return n||null}function Rf(t){return t&&t.hasOwnProperty(Wc)?t[Wc]:null}var Xc=ge({\u0275prov:ge}),Wc=ge({\u0275inj:ge}),g=class{_desc;ngMetadataName="InjectionToken";\u0275prov;constructor(n,e){this._desc=n,this.\u0275prov=void 0,typeof e=="number"?this.__NG_ELEMENT_ID__=e:e!==void 0&&(this.\u0275prov=p({token:this,providedIn:e.providedIn||"root",factory:e.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};function Wf(t){return t&&!!t.\u0275providers}var Gf=ge({\u0275cmp:ge}),qf=ge({\u0275dir:ge}),Zf=ge({\u0275pipe:ge}),Qf=ge({\u0275mod:ge}),Na=ge({\u0275fac:ge}),cr=ge({__NG_ELEMENT_ID__:ge}),ov=ge({__NG_ENV_ID__:ge});function Yf(t){return Jc(t,"@NgModule"),t[Qf]||null}function Mn(t){return Jc(t,"@Component"),t[Gf]||null}function Kf(t){return Jc(t,"@Directive"),t[qf]||null}function dv(t){return Jc(t,"@Pipe"),t[Zf]||null}function Jc(t,n){if(t==null)throw new D(-919,!1)}function Xf(t){return typeof t=="string"?t:t==null?"":String(t)}var uv=ge({ngErrorCode:ge}),AE=ge({ngErrorMessage:ge}),RE=ge({ngTokenPath:ge});function Jf(t,n){return fv("",-200,n)}function el(t,n){throw new D(-201,!1)}function fv(t,n,e){let i=new D(n,t);return i[uv]=n,i[AE]=t,e&&(i[RE]=e),i}function NE(t){return t[uv]}var Nf;function mv(){return Nf}function Pt(t){let n=Nf;return Nf=t,n}function em(t,n,e){let i=Ba(t);if(i&&i.providedIn=="root")return i.value===void 0?i.value=i.factory():i.value;if(e&8)return null;if(n!==void 0)return n;el(t,"")}var OE={},ir=OE,FE="__NG_DI_FLAG__",Of=class{injector;constructor(n){this.injector=n}retrieve(n,e){let i=rr(e)||0;try{return this.injector.get(n,i&8?null:ir,i)}catch(r){if(Xr(r))return r;throw r}}};function PE(t,n=0){let e=zc();if(e===void 0)throw new D(-203,!1);if(e===null)return em(t,void 0,n);{let i=LE(n),r=e.retrieve(t,i);if(Xr(r)){if(i.optional)return null;throw r}return r}}function T(t,n=0){return(mv()||PE)(rt(t),n)}function d(t,n){return T(t,rr(n))}function rr(t){return typeof t>"u"||typeof t=="number"?t:0|(t.optional&&8)|(t.host&&1)|(t.self&&2)|(t.skipSelf&&4)}function LE(t){return{optional:!!(t&8),host:!!(t&1),self:!!(t&2),skipSelf:!!(t&4)}}function Ff(t){let n=[];for(let e=0;e<t.length;e++){let i=rt(t[e]);if(Array.isArray(i)){if(i.length===0)throw new D(900,!1);let r,o=0;for(let a=0;a<i.length;a++){let s=i[a],c=jE(s);typeof c=="number"?c===-1?r=s.token:o|=c:r=s}n.push(T(r,o))}else n.push(T(i))}return n}function jE(t){return t[FE]}function or(t,n){let e=t.hasOwnProperty(Na);return e?t[Na]:null}function hv(t,n,e){if(t.length!==n.length)return!1;for(let i=0;i<t.length;i++){let r=t[i],o=n[i];if(e&&(r=e(r),o=e(o)),o!==r)return!1}return!0}function pv(t){return t.flat(Number.POSITIVE_INFINITY)}function tl(t,n){t.forEach(e=>Array.isArray(e)?tl(e,n):n(e))}function tm(t,n,e){n>=t.length?t.push(e):t.splice(n,0,e)}function Va(t,n){return n>=t.length-1?t.pop():t.splice(n,1)[0]}function gv(t,n){let e=[];for(let i=0;i<t;i++)e.push(n);return e}function bv(t,n,e,i){let r=t.length;if(r==n)t.push(e,i);else if(r===1)t.push(i,t[0]),t[0]=e;else{for(r--,t.push(t[r-1],t[r]);r>n;){let o=r-2;t[r]=t[o],r--}t[n]=e,t[n+1]=i}}function nl(t,n,e){let i=to(t,n);return i>=0?t[i|1]=e:(i=~i,bv(t,i,n,e)),i}function il(t,n){let e=to(t,n);if(e>=0)return t[e|1]}function to(t,n){return BE(t,n,1)}function BE(t,n,e){let i=0,r=t.length>>e;for(;r!==i;){let o=i+(r-i>>1),a=t[o<<e];if(n===a)return o<<e;a>n?r=o:i=o+1}return~(r<<e)}var Mi={},lt=[],Si=new g(""),nm=new g("",-1),im=new g(""),Oa=class{get(n,e=ir){if(e===ir){let r=fv("",-201);throw r.name="\u0275NotFound",r}return e}};function Sn(t){return{\u0275providers:t}}function vv(t){return Sn([{provide:Si,multi:!0,useValue:t}])}function _v(...t){return{\u0275providers:rm(!0,t),\u0275fromNgModule:!0}}function rm(t,...n){let e=[],i=new Set,r,o=a=>{e.push(a)};return tl(n,a=>{let s=a;Gc(s,o,[],i)&&(r||=[],r.push(s))}),r!==void 0&&yv(r,o),e}function yv(t,n){for(let e=0;e<t.length;e++){let{ngModule:i,providers:r}=t[e];om(r,o=>{n(o,i)})}}function Gc(t,n,e,i){if(t=rt(t),!t)return!1;let r=null,o=Rf(t),a=!o&&Mn(t);if(!o&&!a){let c=t.ngModule;if(o=Rf(c),o)r=c;else return!1}else{if(a&&!a.standalone)return!1;r=t}let s=i.has(r);if(a){if(s)return!1;if(i.add(r),a.dependencies){let c=typeof a.dependencies=="function"?a.dependencies():a.dependencies;for(let l of c)Gc(l,n,e,i)}}else if(o){if(o.imports!=null&&!s){i.add(r);let l;tl(o.imports,u=>{Gc(u,n,e,i)&&(l||=[],l.push(u))}),l!==void 0&&yv(l,n)}if(!s){let l=or(r)||(()=>new r);n({provide:r,useFactory:l,deps:lt},r),n({provide:im,useValue:r,multi:!0},r),n({provide:Si,useValue:()=>T(r),multi:!0},r)}let c=o.providers;if(c!=null&&!s){let l=t;om(c,u=>{n(u,l)})}}else return!1;return r!==t&&t.providers!==void 0}function om(t,n){for(let e of t)Wf(e)&&(e=e.\u0275providers),Array.isArray(e)?om(e,n):n(e)}var VE=ge({provide:String,useValue:ge});function wv(t){return t!==null&&typeof t=="object"&&VE in t}function HE(t){return!!(t&&t.useExisting)}function UE(t){return!!(t&&t.useFactory)}function ar(t){return typeof t=="function"}function Cv(t){return!!t.useClass}var Ha=new g(""),$c={},av={},Af;function no(){return Af===void 0&&(Af=new Oa),Af}var be=class{},sr=class extends be{parent;source;scopes;records=new Map;_ngOnDestroyHooks=new Set;_onDestroyHooks=[];get destroyed(){return this._destroyed}_destroyed=!1;injectorDefTypes;constructor(n,e,i,r){super(),this.parent=e,this.source=i,this.scopes=r,Lf(n,a=>this.processProvider(a)),this.records.set(nm,Jr(void 0,this)),r.has("environment")&&this.records.set(be,Jr(void 0,this));let o=this.records.get(Ha);o!=null&&typeof o.value=="string"&&this.scopes.add(o.value),this.injectorDefTypes=new Set(this.get(im,lt,{self:!0}))}retrieve(n,e){let i=rr(e)||0;try{return this.get(n,ir,i)}catch(r){if(Xr(r))return r;throw r}}destroy(){Ra(this),this._destroyed=!0;let n=F(null);try{for(let i of this._ngOnDestroyHooks)i.ngOnDestroy();let e=this._onDestroyHooks;this._onDestroyHooks=[];for(let i of e)i()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),F(n)}}onDestroy(n){return Ra(this),this._onDestroyHooks.push(n),()=>this.removeOnDestroy(n)}runInContext(n){Ra(this);let e=En(this),i=Pt(void 0),r;try{return n()}finally{En(e),Pt(i)}}get(n,e=ir,i){if(Ra(this),n.hasOwnProperty(ov))return n[ov](this);let r=rr(i),o,a=En(this),s=Pt(void 0);try{if(!(r&4)){let l=this.records.get(n);if(l===void 0){let u=qE(n)&&Ba(n);u&&this.injectableDefInScope(u)?l=Jr(Pf(n),$c):l=null,this.records.set(n,l)}if(l!=null)return this.hydrate(n,l,r)}let c=r&2?no():this.parent;return e=r&8&&e===ir?null:e,c.get(n,e)}catch(c){let l=NE(c);throw l===-200||l===-201?new D(l,null):c}finally{Pt(s),En(a)}}resolveInjectorInitializers(){let n=F(null),e=En(this),i=Pt(void 0),r;try{let o=this.get(Si,lt,{self:!0});for(let a of o)a()}finally{En(e),Pt(i),F(n)}}toString(){return"R3Injector[...]"}processProvider(n){n=rt(n);let e=ar(n)?n:rt(n&&n.provide),i=$E(n);if(!ar(n)&&n.multi===!0){let r=this.records.get(e);r||(r=Jr(void 0,$c,!0),r.factory=()=>Ff(r.multi),this.records.set(e,r)),e=n,r.multi.push(n)}this.records.set(e,i)}hydrate(n,e,i){let r=F(null);try{if(e.value===av)throw Jf("");return e.value===$c&&(e.value=av,e.value=e.factory(void 0,i)),typeof e.value=="object"&&e.value&&GE(e.value)&&this._ngOnDestroyHooks.add(e.value),e.value}finally{F(r)}}injectableDefInScope(n){if(!n.providedIn)return!1;let e=rt(n.providedIn);return typeof e=="string"?e==="any"||this.scopes.has(e):this.injectorDefTypes.has(e)}removeOnDestroy(n){let e=this._onDestroyHooks.indexOf(n);e!==-1&&this._onDestroyHooks.splice(e,1)}};function Pf(t){let n=Ba(t),e=n!==null?n.factory:or(t);if(e!==null)return e;if(t instanceof g)throw new D(-204,!1);if(t instanceof Function)return zE(t);throw new D(-204,!1)}function zE(t){if(t.length>0)throw new D(-204,!1);let e=TE(t);return e!==null?()=>e.factory(t):()=>new t}function $E(t){if(wv(t))return Jr(void 0,t.useValue);{let n=am(t);return Jr(n,$c)}}function am(t,n,e){let i;if(ar(t)){let r=rt(t);return or(r)||Pf(r)}else if(wv(t))i=()=>rt(t.useValue);else if(UE(t))i=()=>t.useFactory(...Ff(t.deps||[]));else if(HE(t))i=(r,o)=>T(rt(t.useExisting),o!==void 0&&o&8?8:void 0);else{let r=rt(t&&(t.useClass||t.provide));if(WE(t))i=()=>new r(...Ff(t.deps));else return or(r)||Pf(r)}return i}function Ra(t){if(t.destroyed)throw new D(-205,!1)}function Jr(t,n,e=!1){return{factory:t,value:n,multi:e?[]:void 0}}function WE(t){return!!t.deps}function GE(t){return t!==null&&typeof t=="object"&&typeof t.ngOnDestroy=="function"}function qE(t){return typeof t=="function"||typeof t=="object"&&t.ngMetadataName==="InjectionToken"}function Lf(t,n){for(let e of t)Array.isArray(e)?Lf(e,n):e&&Wf(e)?Lf(e.\u0275providers,n):n(e)}function Ge(t,n){let e;t instanceof sr?(Ra(t),e=t):e=new Of(t);let i,r=En(e),o=Pt(void 0);try{return n()}finally{En(r),Pt(o)}}function Dv(){return mv()!==void 0||zc()!=null}var cn=0,B=1,Z=2,We=3,Wt=4,bt=5,lr=6,io=7,Fe=8,Kn=9,kn=10,Ce=11,ro=12,sm=13,dr=14,vt=15,ki=16,ur=17,Tn=18,Xn=19,cm=20,Yn=21,rl=22,Ei=23,jt=24,fr=25,Ti=26,Pe=27,xv=1,lm=6,Ai=7,Ua=8,mr=9,Re=10;function Jn(t){return Array.isArray(t)&&typeof t[xv]=="object"}function ln(t){return Array.isArray(t)&&t[xv]===!0}function dm(t){return(t.flags&4)!==0}function An(t){return t.componentOffset>-1}function za(t){return(t.flags&1)===1}function Rn(t){return!!t.template}function oo(t){return(t[Z]&512)!==0}function hr(t){return(t[Z]&256)===256}var um="svg",Ev="math";function Gt(t){for(;Array.isArray(t);)t=t[cn];return t}function fm(t,n){return Gt(n[t])}function qt(t,n){return Gt(n[t.index])}function ol(t,n){return t.data[n]}function Iv(t,n){return t[n]}function Zt(t,n){let e=n[t];return Jn(e)?e:e[cn]}function Mv(t){return(t[Z]&4)===4}function al(t){return(t[Z]&128)===128}function Sv(t){return ln(t[We])}function Bt(t,n){return n==null?null:t[n]}function mm(t){t[ur]=0}function hm(t){t[Z]&1024||(t[Z]|=1024,al(t)&&pr(t))}function kv(t,n){for(;t>0;)n=n[dr],t--;return n}function $a(t){return!!(t[Z]&9216||t[jt]?.dirty)}function sl(t){t[kn].changeDetectionScheduler?.notify(8),t[Z]&64&&(t[Z]|=1024),$a(t)&&pr(t)}function pr(t){t[kn].changeDetectionScheduler?.notify(0);let n=Ii(t);for(;n!==null&&!(n[Z]&8192||(n[Z]|=8192,!al(n)));)n=Ii(n)}function pm(t,n){if(hr(t))throw new D(911,!1);t[Yn]===null&&(t[Yn]=[]),t[Yn].push(n)}function Tv(t,n){if(t[Yn]===null)return;let e=t[Yn].indexOf(n);e!==-1&&t[Yn].splice(e,1)}function Ii(t){let n=t[We];return ln(n)?n[We]:n}function gm(t){return t[io]??=[]}function bm(t){return t.cleanup??=[]}function Av(t,n,e,i){let r=gm(n);r.push(e),t.firstCreatePass&&bm(t).push(i,r.length-1)}var ne={lFrame:Uv(null),bindingsEnabled:!0,skipHydrationRootTNode:null};var jf=!1;function Rv(){return ne.lFrame.elementDepthCount}function Nv(){ne.lFrame.elementDepthCount++}function vm(){ne.lFrame.elementDepthCount--}function _m(){return ne.bindingsEnabled}function ym(){return ne.skipHydrationRootTNode!==null}function wm(t){return ne.skipHydrationRootTNode===t}function Cm(){ne.skipHydrationRootTNode=null}function K(){return ne.lFrame.lView}function Me(){return ne.lFrame.tView}function _t(t){return ne.lFrame.contextLView=t,t[Fe]}function yt(t){return ne.lFrame.contextLView=null,t}function Je(){let t=Dm();for(;t!==null&&t.type===64;)t=t.parent;return t}function Dm(){return ne.lFrame.currentTNode}function Ov(){let t=ne.lFrame,n=t.currentTNode;return t.isParent?n:n.parent}function ao(t,n){let e=ne.lFrame;e.currentTNode=t,e.isParent=n}function xm(){return ne.lFrame.isParent}function Em(){ne.lFrame.isParent=!1}function Fv(){return ne.lFrame.contextLView}function Im(){return jf}function Fa(t){let n=jf;return jf=t,n}function Pv(t){return ne.lFrame.bindingIndex=t}function ei(){return ne.lFrame.bindingIndex++}function Mm(t){let n=ne.lFrame,e=n.bindingIndex;return n.bindingIndex=n.bindingIndex+t,e}function Lv(){return ne.lFrame.inI18n}function jv(t,n){let e=ne.lFrame;e.bindingIndex=e.bindingRootIndex=t,cl(n)}function Bv(){return ne.lFrame.currentDirectiveIndex}function cl(t){ne.lFrame.currentDirectiveIndex=t}function Vv(t){let n=ne.lFrame.currentDirectiveIndex;return n===-1?null:t[n]}function ll(){return ne.lFrame.currentQueryIndex}function Wa(t){ne.lFrame.currentQueryIndex=t}function ZE(t){let n=t[B];return n.type===2?n.declTNode:n.type===1?t[bt]:null}function Sm(t,n,e){if(e&4){let r=n,o=t;for(;r=r.parent,r===null&&!(e&1);)if(r=ZE(o),r===null||(o=o[dr],r.type&10))break;if(r===null)return!1;n=r,t=o}let i=ne.lFrame=Hv();return i.currentTNode=n,i.lView=t,!0}function dl(t){let n=Hv(),e=t[B];ne.lFrame=n,n.currentTNode=e.firstChild,n.lView=t,n.tView=e,n.contextLView=t,n.bindingIndex=e.bindingStartIndex,n.inI18n=!1}function Hv(){let t=ne.lFrame,n=t===null?null:t.child;return n===null?Uv(t):n}function Uv(t){let n={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:t,child:null,inI18n:!1};return t!==null&&(t.child=n),n}function zv(){let t=ne.lFrame;return ne.lFrame=t.parent,t.currentTNode=null,t.lView=null,t}var km=zv;function ul(){let t=zv();t.isParent=!0,t.tView=null,t.selectedIndex=-1,t.contextLView=null,t.elementDepthCount=0,t.currentDirectiveIndex=-1,t.currentNamespace=null,t.bindingRootIndex=-1,t.bindingIndex=-1,t.currentQueryIndex=0}function $v(t){return(ne.lFrame.contextLView=kv(t,ne.lFrame.contextLView))[Fe]}function ti(){return ne.lFrame.selectedIndex}function Ri(t){ne.lFrame.selectedIndex=t}function so(){let t=ne.lFrame;return ol(t.tView,t.selectedIndex)}function Ga(){ne.lFrame.currentNamespace=um}function qa(){QE()}function QE(){ne.lFrame.currentNamespace=null}function Wv(){return ne.lFrame.currentNamespace}var Gv=!0;function fl(){return Gv}function ml(t){Gv=t}function Bf(t,n=null,e=null,i){let r=Tm(t,n,e,i);return r.resolveInjectorInitializers(),r}function Tm(t,n=null,e=null,i,r=new Set){let o=[e||lt,_v(t)],a;return new sr(o,n||no(),a||null,r)}var G=class t{static THROW_IF_NOT_FOUND=ir;static NULL=new Oa;static create(n,e){if(Array.isArray(n))return Bf({name:""},e,n,"");{let i=n.name??"";return Bf({name:i},n.parent,n.providers,i)}}static \u0275prov=p({token:t,providedIn:"any",factory:()=>T(nm)});static __NG_ELEMENT_ID__=-1},L=new g(""),ot=(()=>{class t{static __NG_ELEMENT_ID__=YE;static __NG_ENV_ID__=e=>e}return t})(),qc=class extends ot{_lView;constructor(n){super(),this._lView=n}get destroyed(){return hr(this._lView)}onDestroy(n){let e=this._lView;return pm(e,n),()=>Tv(e,n)}};function YE(){return new qc(K())}var qv=!1,Zv=new g(""),ni=(()=>{class t{taskId=0;pendingTasks=new Set;destroyed=!1;pendingTask=new Be(!1);debugTaskTracker=d(Zv,{optional:!0});get hasPendingTasks(){return this.destroyed?!1:this.pendingTask.value}get hasPendingTasksObservable(){return this.destroyed?new q(e=>{e.next(!1),e.complete()}):this.pendingTask}add(){!this.hasPendingTasks&&!this.destroyed&&this.pendingTask.next(!0);let e=this.taskId++;return this.pendingTasks.add(e),this.debugTaskTracker?.add(e),e}has(e){return this.pendingTasks.has(e)}remove(e){this.pendingTasks.delete(e),this.debugTaskTracker?.remove(e),this.pendingTasks.size===0&&this.hasPendingTasks&&this.pendingTask.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this.hasPendingTasks&&this.pendingTask.next(!1),this.destroyed=!0,this.pendingTask.unsubscribe()}static \u0275prov=p({token:t,providedIn:"root",factory:()=>new t})}return t})(),Vf=class extends x{__isAsync;destroyRef=void 0;pendingTasks=void 0;constructor(n=!1){super(),this.__isAsync=n,Dv()&&(this.destroyRef=d(ot,{optional:!0})??void 0,this.pendingTasks=d(ni,{optional:!0})??void 0)}emit(n){let e=F(null);try{super.next(n)}finally{F(e)}}subscribe(n,e,i){let r=n,o=e||(()=>null),a=i;if(n&&typeof n=="object"){let c=n;r=c.next?.bind(c),o=c.error?.bind(c),a=c.complete?.bind(c)}this.__isAsync&&(o=this.wrapInTimeout(o),r&&(r=this.wrapInTimeout(r)),a&&(a=this.wrapInTimeout(a)));let s=super.subscribe({next:r,error:o,complete:a});return n instanceof ae&&n.add(s),s}wrapInTimeout(n){return e=>{let i=this.pendingTasks?.add();setTimeout(()=>{try{n(e)}finally{i!==void 0&&this.pendingTasks?.remove(i)}})}}},R=Vf;function Zc(...t){}function Am(t){let n,e;function i(){t=Zc;try{e!==void 0&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(e),n!==void 0&&clearTimeout(n)}catch{}}return n=setTimeout(()=>{t(),i()}),typeof requestAnimationFrame=="function"&&(e=requestAnimationFrame(()=>{t(),i()})),()=>i()}function Qv(t){return queueMicrotask(()=>t()),()=>{t=Zc}}var Rm="isAngularZone",Pa=Rm+"_ID",KE=0,k=class t{hasPendingMacrotasks=!1;hasPendingMicrotasks=!1;isStable=!0;onUnstable=new R(!1);onMicrotaskEmpty=new R(!1);onStable=new R(!1);onError=new R(!1);constructor(n){let{enableLongStackTrace:e=!1,shouldCoalesceEventChangeDetection:i=!1,shouldCoalesceRunChangeDetection:r=!1,scheduleInRootZone:o=qv}=n;if(typeof Zone>"u")throw new D(908,!1);Zone.assertZonePatched();let a=this;a._nesting=0,a._outer=a._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(a._inner=a._inner.fork(new Zone.TaskTrackingZoneSpec)),e&&Zone.longStackTraceZoneSpec&&(a._inner=a._inner.fork(Zone.longStackTraceZoneSpec)),a.shouldCoalesceEventChangeDetection=!r&&i,a.shouldCoalesceRunChangeDetection=r,a.callbackScheduled=!1,a.scheduleInRootZone=o,eI(a)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get(Rm)===!0}static assertInAngularZone(){if(!t.isInAngularZone())throw new D(909,!1)}static assertNotInAngularZone(){if(t.isInAngularZone())throw new D(909,!1)}run(n,e,i){return this._inner.run(n,e,i)}runTask(n,e,i,r){let o=this._inner,a=o.scheduleEventTask("NgZoneEvent: "+r,n,XE,Zc,Zc);try{return o.runTask(a,e,i)}finally{o.cancelTask(a)}}runGuarded(n,e,i){return this._inner.runGuarded(n,e,i)}runOutsideAngular(n){return this._outer.run(n)}},XE={};function Nm(t){if(t._nesting==0&&!t.hasPendingMicrotasks&&!t.isStable)try{t._nesting++,t.onMicrotaskEmpty.emit(null)}finally{if(t._nesting--,!t.hasPendingMicrotasks)try{t.runOutsideAngular(()=>t.onStable.emit(null))}finally{t.isStable=!0}}}function JE(t){if(t.isCheckStableRunning||t.callbackScheduled)return;t.callbackScheduled=!0;function n(){Am(()=>{t.callbackScheduled=!1,Hf(t),t.isCheckStableRunning=!0,Nm(t),t.isCheckStableRunning=!1})}t.scheduleInRootZone?Zone.root.run(()=>{n()}):t._outer.run(()=>{n()}),Hf(t)}function eI(t){let n=()=>{JE(t)},e=KE++;t._inner=t._inner.fork({name:"angular",properties:{[Rm]:!0,[Pa]:e,[Pa+e]:!0},onInvokeTask:(i,r,o,a,s,c)=>{if(tI(c))return i.invokeTask(o,a,s,c);try{return sv(t),i.invokeTask(o,a,s,c)}finally{(t.shouldCoalesceEventChangeDetection&&a.type==="eventTask"||t.shouldCoalesceRunChangeDetection)&&n(),cv(t)}},onInvoke:(i,r,o,a,s,c,l)=>{try{return sv(t),i.invoke(o,a,s,c,l)}finally{t.shouldCoalesceRunChangeDetection&&!t.callbackScheduled&&!nI(c)&&n(),cv(t)}},onHasTask:(i,r,o,a)=>{i.hasTask(o,a),r===o&&(a.change=="microTask"?(t._hasPendingMicrotasks=a.microTask,Hf(t),Nm(t)):a.change=="macroTask"&&(t.hasPendingMacrotasks=a.macroTask))},onHandleError:(i,r,o,a)=>(i.handleError(o,a),t.runOutsideAngular(()=>t.onError.emit(a)),!1)})}function Hf(t){t._hasPendingMicrotasks||(t.shouldCoalesceEventChangeDetection||t.shouldCoalesceRunChangeDetection)&&t.callbackScheduled===!0?t.hasPendingMicrotasks=!0:t.hasPendingMicrotasks=!1}function sv(t){t._nesting++,t.isStable&&(t.isStable=!1,t.onUnstable.emit(null))}function cv(t){t._nesting--,Nm(t)}var La=class{hasPendingMicrotasks=!1;hasPendingMacrotasks=!1;isStable=!0;onUnstable=new R;onMicrotaskEmpty=new R;onStable=new R;onError=new R;run(n,e,i){return n.apply(e,i)}runGuarded(n,e,i){return n.apply(e,i)}runOutsideAngular(n){return n()}runTask(n,e,i,r){return n.apply(e,i)}};function tI(t){return Yv(t,"__ignore_ng_zone__")}function nI(t){return Yv(t,"__scheduler_tick__")}function Yv(t,n){return!Array.isArray(t)||t.length!==1?!1:t[0]?.data?.[n]===!0}var dt=class{_console=console;handleError(n){this._console.error("ERROR",n)}},Qt=new g("",{factory:()=>{let t=d(k),n=d(be),e;return i=>{t.runOutsideAngular(()=>{n.destroyed&&!e?setTimeout(()=>{throw i}):(e??=n.get(dt),e.handleError(i))})}}}),Kv={provide:Si,useValue:()=>{let t=d(dt,{optional:!0})},multi:!0},iI=new g("",{factory:()=>{let t=d(L).defaultView;if(!t)return;let n=d(Qt),e=o=>{n(o.reason),o.preventDefault()},i=o=>{o.error?n(o.error):n(new Error(o.message,{cause:o})),o.preventDefault()},r=()=>{t.addEventListener("unhandledrejection",e),t.addEventListener("error",i)};typeof Zone<"u"?Zone.root.run(r):r(),d(ot).onDestroy(()=>{t.removeEventListener("error",i),t.removeEventListener("unhandledrejection",e)})}});function Om(){return Sn([vv(()=>{d(iI)})])}function V(t,n){let[e,i,r]=pf(t,n?.equal),o=e,a=o[je];return o.set=i,o.update=r,o.asReadonly=hl.bind(o),o}function hl(){let t=this[je];if(t.readonlyFn===void 0){let n=()=>this();n[je]=t,t.readonlyFn=n}return t.readonlyFn}var co=(()=>{class t{view;node;constructor(e,i){this.view=e,this.node=i}static __NG_ELEMENT_ID__=rI}return t})();function rI(){return new co(K(),Je())}var In=class{},Za=new g("",{factory:()=>!0});var Fm=new g(""),lo=(()=>{class t{internalPendingTasks=d(ni);scheduler=d(In);errorHandler=d(Qt);add(){let e=this.internalPendingTasks.add();return()=>{this.internalPendingTasks.has(e)&&(this.scheduler.notify(11),this.internalPendingTasks.remove(e))}}run(e){let i=this.add();e().catch(this.errorHandler).finally(i)}static \u0275prov=p({token:t,providedIn:"root",factory:()=>new t})}return t})(),pl=(()=>{class t{static \u0275prov=p({token:t,providedIn:"root",factory:()=>new Uf})}return t})(),Uf=class{dirtyEffectCount=0;queues=new Map;add(n){this.enqueue(n),this.schedule(n)}schedule(n){n.dirty&&this.dirtyEffectCount++}remove(n){let e=n.zone,i=this.queues.get(e);i.has(n)&&(i.delete(n),n.dirty&&this.dirtyEffectCount--)}enqueue(n){let e=n.zone;this.queues.has(e)||this.queues.set(e,new Set);let i=this.queues.get(e);i.has(n)||i.add(n)}flush(){for(;this.dirtyEffectCount>0;){let n=!1;for(let[e,i]of this.queues)e===null?n||=this.flushQueue(i):n||=e.run(()=>this.flushQueue(i));n||(this.dirtyEffectCount=0)}}flushQueue(n){let e=!1;for(let i of n)i.dirty&&(this.dirtyEffectCount--,e=!0,i.run());return e}},Qc=class{[je];constructor(n){this[je]=n}destroy(){this[je].destroy()}};function dn(t,n){let e=n?.injector??d(G),i=n?.manualCleanup!==!0?e.get(ot):null,r,o=e.get(co,null,{optional:!0}),a=e.get(In);return o!==null?(r=sI(o.view,a,t),i instanceof qc&&i._lView===o.view&&(i=null)):r=cI(t,e.get(pl),a),r.injector=e,i!==null&&(r.onDestroyFns=[i.onDestroy(()=>r.destroy())]),new Qc(r)}var Xv=W(v({},bf),{cleanupFns:void 0,zone:null,onDestroyFns:null,run(){let t=Fa(!1);try{vf(this)}finally{Fa(t)}},cleanup(){if(!this.cleanupFns?.length)return;let t=F(null);try{for(;this.cleanupFns.length;)this.cleanupFns.pop()()}finally{this.cleanupFns=[],F(t)}}}),oI=W(v({},Xv),{consumerMarkedDirty(){this.scheduler.schedule(this),this.notifier.notify(12)},destroy(){if(vi(this),this.onDestroyFns!==null)for(let t of this.onDestroyFns)t();this.cleanup(),this.scheduler.remove(this)}}),aI=W(v({},Xv),{consumerMarkedDirty(){this.view[Z]|=8192,pr(this.view),this.notifier.notify(13)},destroy(){if(vi(this),this.onDestroyFns!==null)for(let t of this.onDestroyFns)t();this.cleanup(),this.view[Ei]?.delete(this)}});function sI(t,n,e){let i=Object.create(aI);return i.view=t,i.zone=typeof Zone<"u"?Zone.current:null,i.notifier=n,i.fn=Jv(i,e),t[Ei]??=new Set,t[Ei].add(i),i.consumerMarkedDirty(i),i}function cI(t,n,e){let i=Object.create(oI);return i.fn=Jv(i,t),i.scheduler=n,i.notifier=e,i.zone=typeof Zone<"u"?Zone.current:null,i.scheduler.add(i),i.notifier.notify(12),i}function Jv(t,n){return()=>{n(e=>(t.cleanupFns??=[]).push(e))}}function rs(t){return{toString:t}.toString()}function pI(t){return typeof t=="function"}function R_(t,n,e,i){n!==null?n.applyValueToInputSignal(n,i):t[e]=i}var xl=class{previousValue;currentValue;firstChange;constructor(n,e,i){this.previousValue=n,this.currentValue=e,this.firstChange=i}isFirstChange(){return this.firstChange}},Ne=(()=>{let t=()=>N_;return t.ngInherit=!0,t})();function N_(t){return t.type.prototype.ngOnChanges&&(t.setInput=bI),gI}function gI(){let t=F_(this),n=t?.current;if(n){let e=t.previous;if(e===Mi)t.previous=n;else for(let i in n)e[i]=n[i];t.current=null,this.ngOnChanges(n)}}function bI(t,n,e,i,r){let o=this.declaredInputs[i],a=F_(t)||vI(t,{previous:Mi,current:null}),s=a.current||(a.current={}),c=a.previous,l=c[o];s[o]=new xl(l&&l.currentValue,e,c===Mi),R_(t,n,r,e)}var O_="__ngSimpleChanges__";function F_(t){return t[O_]||null}function vI(t,n){return t[O_]=n}var e_=[];var ve=function(t,n=null,e){for(let i=0;i<e_.length;i++){let r=e_[i];r(t,n,e)}},de=(function(t){return t[t.TemplateCreateStart=0]="TemplateCreateStart",t[t.TemplateCreateEnd=1]="TemplateCreateEnd",t[t.TemplateUpdateStart=2]="TemplateUpdateStart",t[t.TemplateUpdateEnd=3]="TemplateUpdateEnd",t[t.LifecycleHookStart=4]="LifecycleHookStart",t[t.LifecycleHookEnd=5]="LifecycleHookEnd",t[t.OutputStart=6]="OutputStart",t[t.OutputEnd=7]="OutputEnd",t[t.BootstrapApplicationStart=8]="BootstrapApplicationStart",t[t.BootstrapApplicationEnd=9]="BootstrapApplicationEnd",t[t.BootstrapComponentStart=10]="BootstrapComponentStart",t[t.BootstrapComponentEnd=11]="BootstrapComponentEnd",t[t.ChangeDetectionStart=12]="ChangeDetectionStart",t[t.ChangeDetectionEnd=13]="ChangeDetectionEnd",t[t.ChangeDetectionSyncStart=14]="ChangeDetectionSyncStart",t[t.ChangeDetectionSyncEnd=15]="ChangeDetectionSyncEnd",t[t.AfterRenderHooksStart=16]="AfterRenderHooksStart",t[t.AfterRenderHooksEnd=17]="AfterRenderHooksEnd",t[t.ComponentStart=18]="ComponentStart",t[t.ComponentEnd=19]="ComponentEnd",t[t.DeferBlockStateStart=20]="DeferBlockStateStart",t[t.DeferBlockStateEnd=21]="DeferBlockStateEnd",t[t.DynamicComponentStart=22]="DynamicComponentStart",t[t.DynamicComponentEnd=23]="DynamicComponentEnd",t[t.HostBindingsUpdateStart=24]="HostBindingsUpdateStart",t[t.HostBindingsUpdateEnd=25]="HostBindingsUpdateEnd",t})(de||{});function _I(t,n,e){let{ngOnChanges:i,ngOnInit:r,ngDoCheck:o}=n.type.prototype;if(i){let a=N_(n);(e.preOrderHooks??=[]).push(t,a),(e.preOrderCheckHooks??=[]).push(t,a)}r&&(e.preOrderHooks??=[]).push(0-t,r),o&&((e.preOrderHooks??=[]).push(t,o),(e.preOrderCheckHooks??=[]).push(t,o))}function P_(t,n){for(let e=n.directiveStart,i=n.directiveEnd;e<i;e++){let o=t.data[e].type.prototype,{ngAfterContentInit:a,ngAfterContentChecked:s,ngAfterViewInit:c,ngAfterViewChecked:l,ngOnDestroy:u}=o;a&&(t.contentHooks??=[]).push(-e,a),s&&((t.contentHooks??=[]).push(e,s),(t.contentCheckHooks??=[]).push(e,s)),c&&(t.viewHooks??=[]).push(-e,c),l&&((t.viewHooks??=[]).push(e,l),(t.viewCheckHooks??=[]).push(e,l)),u!=null&&(t.destroyHooks??=[]).push(e,u)}}function _l(t,n,e){L_(t,n,3,e)}function yl(t,n,e,i){(t[Z]&3)===e&&L_(t,n,e,i)}function Pm(t,n){let e=t[Z];(e&3)===n&&(e&=16383,e+=1,t[Z]=e)}function L_(t,n,e,i){let r=i!==void 0?t[ur]&65535:0,o=i??-1,a=n.length-1,s=0;for(let c=r;c<a;c++)if(typeof n[c+1]=="number"){if(s=n[c],i!=null&&s>=i)break}else n[c]<0&&(t[ur]+=65536),(s<o||o==-1)&&(yI(t,e,n,c),t[ur]=(t[ur]&4294901760)+c+2),c++}function t_(t,n){ve(de.LifecycleHookStart,t,n);let e=F(null);try{n.call(t)}finally{F(e),ve(de.LifecycleHookEnd,t,n)}}function yI(t,n,e,i){let r=e[i]<0,o=e[i+1],a=r?-e[i]:e[i],s=t[a];r?t[Z]>>14<t[ur]>>16&&(t[Z]&3)===n&&(t[Z]+=16384,t_(s,o)):t_(s,o)}var fo=-1,br=class{factory;name;injectImpl;resolving=!1;canSeeViewProviders;multi;componentProviders;index;providerFactory;constructor(n,e,i,r){this.factory=n,this.name=r,this.canSeeViewProviders=e,this.injectImpl=i}};function wI(t){return(t.flags&8)!==0}function CI(t){return(t.flags&16)!==0}function DI(t,n,e){let i=0;for(;i<e.length;){let r=e[i];if(typeof r=="number"){if(r!==0)break;i++;let o=e[i++],a=e[i++],s=e[i++];t.setAttribute(n,a,s,o)}else{let o=r,a=e[++i];xI(o)?t.setProperty(n,o,a):t.setAttribute(n,o,a),i++}}return i}function j_(t){return t===3||t===4||t===6}function xI(t){return t.charCodeAt(0)===64}function mo(t,n){if(!(n===null||n.length===0))if(t===null||t.length===0)t=n.slice();else{let e=-1;for(let i=0;i<n.length;i++){let r=n[i];typeof r=="number"?e=r:e===0||(e===-1||e===2?n_(t,e,r,null,n[++i]):n_(t,e,r,null,null))}}return t}function n_(t,n,e,i,r){let o=0,a=t.length;if(n===-1)a=-1;else for(;o<t.length;){let s=t[o++];if(typeof s=="number"){if(s===n){a=-1;break}else if(s>n){a=o-1;break}}}for(;o<t.length;){let s=t[o];if(typeof s=="number")break;if(s===e){r!==null&&(t[o+1]=r);return}o++,r!==null&&o++}a!==-1&&(t.splice(a,0,n),o=a+1),t.splice(o++,0,e),r!==null&&t.splice(o++,0,r)}function B_(t){return t!==fo}function El(t){return t&32767}function EI(t){return t>>16}function Il(t,n){let e=EI(t),i=n;for(;e>0;)i=i[dr],e--;return i}var Gm=!0;function i_(t){let n=Gm;return Gm=t,n}var II=256,V_=II-1,H_=5,MI=0,Nn={};function SI(t,n,e){let i;typeof e=="string"?i=e.charCodeAt(0)||0:e.hasOwnProperty(cr)&&(i=e[cr]),i==null&&(i=e[cr]=MI++);let r=i&V_,o=1<<r;n.data[t+(r>>H_)]|=o}function Ml(t,n){let e=U_(t,n);if(e!==-1)return e;let i=n[B];i.firstCreatePass&&(t.injectorIndex=n.length,Lm(i.data,t),Lm(n,null),Lm(i.blueprint,null));let r=Sh(t,n),o=t.injectorIndex;if(B_(r)){let a=El(r),s=Il(r,n),c=s[B].data;for(let l=0;l<8;l++)n[o+l]=s[a+l]|c[a+l]}return n[o+8]=r,o}function Lm(t,n){t.push(0,0,0,0,0,0,0,0,n)}function U_(t,n){return t.injectorIndex===-1||t.parent&&t.parent.injectorIndex===t.injectorIndex||n[t.injectorIndex+8]===null?-1:t.injectorIndex}function Sh(t,n){if(t.parent&&t.parent.injectorIndex!==-1)return t.parent.injectorIndex;let e=0,i=null,r=n;for(;r!==null;){if(i=q_(r),i===null)return fo;if(e++,r=r[dr],i.injectorIndex!==-1)return i.injectorIndex|e<<16}return fo}function qm(t,n,e){SI(t,n,e)}function kI(t,n){if(n==="class")return t.classes;if(n==="style")return t.styles;let e=t.attrs;if(e){let i=e.length,r=0;for(;r<i;){let o=e[r];if(j_(o))break;if(o===0)r=r+2;else if(typeof o=="number")for(r++;r<i&&typeof e[r]=="string";)r++;else{if(o===n)return e[r+1];r=r+2}}}return null}function z_(t,n,e){if(e&8||t!==void 0)return t;el(n,"NodeInjector")}function $_(t,n,e,i){if(e&8&&i===void 0&&(i=null),(e&3)===0){let r=t[Kn],o=Pt(void 0);try{return r?r.get(n,i,e&8):em(n,i,e&8)}finally{Pt(o)}}return z_(i,n,e)}function W_(t,n,e,i=0,r){if(t!==null){if(n[Z]&2048&&!(i&2)){let a=NI(t,n,e,i,Nn);if(a!==Nn)return a}let o=G_(t,n,e,i,Nn);if(o!==Nn)return o}return $_(n,e,i,r)}function G_(t,n,e,i,r){let o=AI(e);if(typeof o=="function"){if(!Sm(n,t,i))return i&1?z_(r,e,i):$_(n,e,i,r);try{let a;if(a=o(i),a==null&&!(i&8))el(e);else return a}finally{km()}}else if(typeof o=="number"){let a=null,s=U_(t,n),c=fo,l=i&1?n[vt][bt]:null;for((s===-1||i&4)&&(c=s===-1?Sh(t,n):n[s+8],c===fo||!o_(i,!1)?s=-1:(a=n[B],s=El(c),n=Il(c,n)));s!==-1;){let u=n[B];if(r_(o,s,u.data)){let f=TI(s,n,e,a,i,l);if(f!==Nn)return f}c=n[s+8],c!==fo&&o_(i,n[B].data[s+8]===l)&&r_(o,s,n)?(a=u,s=El(c),n=Il(c,n)):s=-1}}return r}function TI(t,n,e,i,r,o){let a=n[B],s=a.data[t+8],c=i==null?An(s)&&Gm:i!=a&&(s.type&3)!==0,l=r&1&&o===s,u=wl(s,a,e,c,l);return u!==null?Xa(n,a,u,s,r):Nn}function wl(t,n,e,i,r){let o=t.providerIndexes,a=n.data,s=o&1048575,c=t.directiveStart,l=t.directiveEnd,u=o>>20,f=i?s:s+u,m=r?s+u:l;for(let h=f;h<m;h++){let b=a[h];if(h<c&&e===b||h>=c&&b.type===e)return h}if(r){let h=a[c];if(h&&Rn(h)&&h.type===e)return c}return null}function Xa(t,n,e,i,r){let o=t[e],a=n.data;if(o instanceof br){let s=o;if(s.resolving)throw Jf("");let c=i_(s.canSeeViewProviders);s.resolving=!0;let l=a[e].type||a[e],u,f=s.injectImpl?Pt(s.injectImpl):null,m=Sm(t,i,0);try{o=t[e]=s.factory(void 0,r,a,t,i),n.firstCreatePass&&e>=i.directiveStart&&_I(e,a[e],n)}finally{f!==null&&Pt(f),i_(c),s.resolving=!1,km()}}return o}function AI(t){if(typeof t=="string")return t.charCodeAt(0)||0;let n=t.hasOwnProperty(cr)?t[cr]:void 0;return typeof n=="number"?n>=0?n&V_:RI:n}function r_(t,n,e){let i=1<<t;return!!(e[n+(t>>H_)]&i)}function o_(t,n){return!(t&2)&&!(t&1&&n)}var gr=class{_tNode;_lView;constructor(n,e){this._tNode=n,this._lView=e}get(n,e,i){return W_(this._tNode,this._lView,n,rr(i),e)}};function RI(){return new gr(Je(),K())}function Ae(t){return rs(()=>{let n=t.prototype.constructor,e=n[Na]||Zm(n),i=Object.prototype,r=Object.getPrototypeOf(t.prototype).constructor;for(;r&&r!==i;){let o=r[Na]||Zm(r);if(o&&o!==e)return o;r=Object.getPrototypeOf(r)}return o=>new o})}function Zm(t){return zf(t)?()=>{let n=Zm(rt(t));return n&&n()}:or(t)}function NI(t,n,e,i,r){let o=t,a=n;for(;o!==null&&a!==null&&a[Z]&2048&&!oo(a);){let s=G_(o,a,e,i|2,Nn);if(s!==Nn)return s;let c=o.parent;if(!c){let l=a[cm];if(l){let u=l.get(e,Nn,i&-5);if(u!==Nn)return u}c=q_(a),a=a[dr]}o=c}return r}function q_(t){let n=t[B],e=n.type;return e===2?n.declTNode:e===1?t[bt]:null}function Vl(t){return kI(Je(),t)}function OI(){return vo(Je(),K())}function vo(t,n){return new O(qt(t,n))}var O=(()=>{class t{nativeElement;constructor(e){this.nativeElement=e}static __NG_ELEMENT_ID__=OI}return t})();function Z_(t){return t instanceof O?t.nativeElement:t}function FI(){return this._results[Symbol.iterator]()}var ii=class{_emitDistinctChangesOnly;dirty=!0;_onDirty=void 0;_results=[];_changesDetected=!1;_changes=void 0;length=0;first=void 0;last=void 0;get changes(){return this._changes??=new x}constructor(n=!1){this._emitDistinctChangesOnly=n}get(n){return this._results[n]}map(n){return this._results.map(n)}filter(n){return this._results.filter(n)}find(n){return this._results.find(n)}reduce(n,e){return this._results.reduce(n,e)}forEach(n){this._results.forEach(n)}some(n){return this._results.some(n)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(n,e){this.dirty=!1;let i=pv(n);(this._changesDetected=!hv(this._results,i,e))&&(this._results=i,this.length=i.length,this.last=i[this.length-1],this.first=i[0])}notifyOnChanges(){this._changes!==void 0&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.next(this)}onDirty(n){this._onDirty=n}setDirty(){this.dirty=!0,this._onDirty?.()}destroy(){this._changes!==void 0&&(this._changes.complete(),this._changes.unsubscribe())}[Symbol.iterator]=FI};function Q_(t){return(t.flags&128)===128}var kh=(function(t){return t[t.OnPush=0]="OnPush",t[t.Eager=1]="Eager",t[t.Default=1]="Default",t})(kh||{}),Y_=new Map,PI=0;function LI(){return PI++}function jI(t){Y_.set(t[Xn],t)}function Qm(t){Y_.delete(t[Xn])}var a_="__ngContext__";function ho(t,n){Jn(n)?(t[a_]=n[Xn],jI(n)):t[a_]=n}function K_(t){return J_(t[ro])}function X_(t){return J_(t[Wt])}function J_(t){for(;t!==null&&!ln(t);)t=t[Wt];return t}var BI;function Th(t){BI=t}var _o=new g("",{factory:()=>VI}),VI="ng";var Hl=new g(""),yr=new g("",{providedIn:"platform",factory:()=>"unknown"}),os=new g(""),yo=new g("",{factory:()=>d(L).body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});var ey="r";var ty="di";var ny=!1,iy=new g("",{factory:()=>ny});var Ul=new g("");var HI=(t,n,e,i)=>{};function UI(t,n,e,i){HI(t,n,e,i)}function zl(t){return(t.flags&32)===32}var zI=()=>null;function ry(t,n,e=!1){return zI(t,n,e)}function oy(t,n){let e=t.contentQueries;if(e!==null){let i=F(null);try{for(let r=0;r<e.length;r+=2){let o=e[r],a=e[r+1];if(a!==-1){let s=t.data[a];Wa(o),s.contentQueries(2,n[a],a)}}}finally{F(i)}}}function Ym(t,n,e){Wa(0);let i=F(null);try{n(t,e)}finally{F(i)}}function ay(t,n,e){if(dm(n)){let i=F(null);try{let r=n.directiveStart,o=n.directiveEnd;for(let a=r;a<o;a++){let s=t.data[a];if(s.contentQueries){let c=e[a];s.contentQueries(1,c,a)}}}finally{F(i)}}}var mn=(function(t){return t[t.Emulated=0]="Emulated",t[t.None=2]="None",t[t.ShadowDom=3]="ShadowDom",t[t.ExperimentalIsolatedShadowDom=4]="ExperimentalIsolatedShadowDom",t})(mn||{});var gl;function $I(){if(gl===void 0&&(gl=null,eo.trustedTypes))try{gl=eo.trustedTypes.createPolicy("angular",{createHTML:t=>t,createScript:t=>t,createScriptURL:t=>t})}catch{}return gl}function $l(t){return $I()?.createHTML(t)||t}var ri=class{changingThisBreaksApplicationSecurity;constructor(n){this.changingThisBreaksApplicationSecurity=n}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${Yc})`}},Km=class extends ri{getTypeName(){return"HTML"}},Xm=class extends ri{getTypeName(){return"Style"}},Jm=class extends ri{getTypeName(){return"Script"}},eh=class extends ri{getTypeName(){return"URL"}},th=class extends ri{getTypeName(){return"ResourceURL"}};function Pn(t){return t instanceof ri?t.changingThisBreaksApplicationSecurity:t}function wr(t,n){let e=sy(t);if(e!=null&&e!==n){if(e==="ResourceURL"&&n==="URL")return!0;throw new Error(`Required a safe ${n}, got a ${e} (see ${Yc})`)}return e===n}function sy(t){return t instanceof ri&&t.getTypeName()||null}function Ah(t){return new Km(t)}function Rh(t){return new Xm(t)}function Nh(t){return new Jm(t)}function Oh(t){return new eh(t)}function Fh(t){return new th(t)}function WI(t){let n=new ih(t);return GI()?new nh(n):n}var nh=class{inertDocumentHelper;constructor(n){this.inertDocumentHelper=n}getInertBodyElement(n){n="<body><remove></remove>"+n;try{let e=new window.DOMParser().parseFromString($l(n),"text/html").body;return e===null?this.inertDocumentHelper.getInertBodyElement(n):(e.firstChild?.remove(),e)}catch{return null}}},ih=class{defaultDoc;inertDocument;constructor(n){this.defaultDoc=n,this.inertDocument=this.defaultDoc.implementation.createHTMLDocument("sanitization-inert")}getInertBodyElement(n){let e=this.inertDocument.createElement("template");return e.innerHTML=$l(n),e}};function GI(){try{return!!new window.DOMParser().parseFromString($l(""),"text/html")}catch{return!1}}var qI=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;function Wl(t){return t=String(t),t.match(qI)?t:"unsafe:"+t}function oi(t){let n={};for(let e of t.split(","))n[e]=!0;return n}function as(...t){let n={};for(let e of t)for(let i in e)e.hasOwnProperty(i)&&(n[i]=!0);return n}var cy=oi("area,br,col,hr,img,wbr"),ly=oi("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),dy=oi("rp,rt"),ZI=as(dy,ly),QI=as(ly,oi("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")),YI=as(dy,oi("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")),s_=as(cy,QI,YI,ZI),uy=oi("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),KI=oi("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,srcset,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"),XI=oi("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext"),JI=as(uy,KI,XI),eM=oi("script,style,template");var rh=class{sanitizedSomething=!1;buf=[];sanitizeChildren(n){let e=n.firstChild,i=!0,r=[];for(;e;){if(e.nodeType===Node.ELEMENT_NODE?i=this.startElement(e):e.nodeType===Node.TEXT_NODE?this.chars(e.nodeValue):this.sanitizedSomething=!0,i&&e.firstChild){r.push(e),e=iM(e);continue}for(;e;){e.nodeType===Node.ELEMENT_NODE&&this.endElement(e);let o=nM(e);if(o){e=o;break}e=r.pop()}}return this.buf.join("")}startElement(n){let e=c_(n).toLowerCase();if(!s_.hasOwnProperty(e))return this.sanitizedSomething=!0,!eM.hasOwnProperty(e);this.buf.push("<"),this.buf.push(e);let i=n.attributes;for(let r=0;r<i.length;r++){let o=i.item(r),a=o.name,s=a.toLowerCase();if(!JI.hasOwnProperty(s)){this.sanitizedSomething=!0;continue}let c=o.value;uy[s]&&(c=Wl(c)),this.buf.push(" ",a,'="',l_(c),'"')}return this.buf.push(">"),!0}endElement(n){let e=c_(n).toLowerCase();s_.hasOwnProperty(e)&&!cy.hasOwnProperty(e)&&(this.buf.push("</"),this.buf.push(e),this.buf.push(">"))}chars(n){this.buf.push(l_(n))}};function tM(t,n){return(t.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY)!==Node.DOCUMENT_POSITION_CONTAINED_BY}function nM(t){let n=t.nextSibling;if(n&&t!==n.previousSibling)throw fy(n);return n}function iM(t){let n=t.firstChild;if(n&&tM(t,n))throw fy(n);return n}function c_(t){let n=t.nodeName;return typeof n=="string"?n:"FORM"}function fy(t){return new Error(`Failed to sanitize html because the element is clobbered: ${t.outerHTML}`)}var rM=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,oM=/([^\#-~ |!])/g;function l_(t){return t.replace(/&/g,"&amp;").replace(rM,function(n){let e=n.charCodeAt(0),i=n.charCodeAt(1);return"&#"+((e-55296)*1024+(i-56320)+65536)+";"}).replace(oM,function(n){return"&#"+n.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}var bl;function Ph(t,n){let e=null;try{bl=bl||WI(t);let i=n?String(n):"";e=bl.getInertBodyElement(i);let r=5,o=i;do{if(r===0)throw new Error("Failed to sanitize html because the input is unstable");r--,i=o,o=e.innerHTML,e=bl.getInertBodyElement(i)}while(i!==o);let s=new rh().sanitizeChildren(d_(e)||e);return $l(s)}finally{if(e){let i=d_(e)||e;for(;i.firstChild;)i.firstChild.remove()}}}function d_(t){return"content"in t&&aM(t)?t.content:null}function aM(t){return t.nodeType===Node.ELEMENT_NODE&&t.nodeName==="TEMPLATE"}function sM(t,n){return t.createText(n)}function cM(t,n,e){t.setValue(n,e)}function my(t,n,e){return t.createElement(n,e)}function Sl(t,n,e,i,r){t.insertBefore(n,e,i,r)}function hy(t,n,e){t.appendChild(n,e)}function u_(t,n,e,i,r){i!==null?Sl(t,n,e,i,r):hy(t,n,e)}function py(t,n,e,i){t.removeChild(null,n,e,i)}function lM(t,n,e){t.setAttribute(n,"style",e)}function dM(t,n,e){e===""?t.removeAttribute(n,"class"):t.setAttribute(n,"class",e)}function gy(t,n,e){let{mergedAttrs:i,classes:r,styles:o}=e;i!==null&&DI(t,n,i),r!==null&&dM(t,n,r),o!==null&&lM(t,n,o)}var wt=(function(t){return t[t.NONE=0]="NONE",t[t.HTML=1]="HTML",t[t.STYLE=2]="STYLE",t[t.SCRIPT=3]="SCRIPT",t[t.URL=4]="URL",t[t.RESOURCE_URL=5]="RESOURCE_URL",t})(wt||{});function by(t){return t instanceof Function?t():t}function uM(t,n,e){let i=t.length;for(;;){let r=t.indexOf(n,e);if(r===-1)return r;if(r===0||t.charCodeAt(r-1)<=32){let o=n.length;if(r+o===i||t.charCodeAt(r+o)<=32)return r}e=r+1}}var vy="ng-template";function fM(t,n,e,i){let r=0;if(i){for(;r<n.length&&typeof n[r]=="string";r+=2)if(n[r]==="class"&&uM(n[r+1].toLowerCase(),e,0)!==-1)return!0}else if(Lh(t))return!1;if(r=n.indexOf(1,r),r>-1){let o;for(;++r<n.length&&typeof(o=n[r])=="string";)if(o.toLowerCase()===e)return!0}return!1}function Lh(t){return t.type===4&&t.value!==vy}function mM(t,n,e){let i=t.type===4&&!e?vy:t.value;return n===i}function hM(t,n,e){let i=4,r=t.attrs,o=r!==null?bM(r):0,a=!1;for(let s=0;s<n.length;s++){let c=n[s];if(typeof c=="number"){if(!a&&!un(i)&&!un(c))return!1;if(a&&un(c))continue;a=!1,i=c|i&1;continue}if(!a)if(i&4){if(i=2|i&1,c!==""&&!mM(t,c,e)||c===""&&n.length===1){if(un(i))return!1;a=!0}}else if(i&8){if(r===null||!fM(t,r,c,e)){if(un(i))return!1;a=!0}}else{let l=n[++s],u=pM(c,r,Lh(t),e);if(u===-1){if(un(i))return!1;a=!0;continue}if(l!==""){let f;if(u>o?f="":f=r[u+1].toLowerCase(),i&2&&l!==f){if(un(i))return!1;a=!0}}}}return un(i)||a}function un(t){return(t&1)===0}function pM(t,n,e,i){if(n===null)return-1;let r=0;if(i||!e){let o=!1;for(;r<n.length;){let a=n[r];if(a===t)return r;if(a===3||a===6)o=!0;else if(a===1||a===2){let s=n[++r];for(;typeof s=="string";)s=n[++r];continue}else{if(a===4)break;if(a===0){r+=4;continue}}r+=o?1:2}return-1}else return vM(n,t)}function _y(t,n,e=!1){for(let i=0;i<n.length;i++)if(hM(t,n[i],e))return!0;return!1}function gM(t){let n=t.attrs;if(n!=null){let e=n.indexOf(5);if((e&1)===0)return n[e+1]}return null}function bM(t){for(let n=0;n<t.length;n++){let e=t[n];if(j_(e))return n}return t.length}function vM(t,n){let e=t.indexOf(4);if(e>-1)for(e++;e<t.length;){let i=t[e];if(typeof i=="number")return-1;if(i===n)return e;e++}return-1}function _M(t,n){e:for(let e=0;e<n.length;e++){let i=n[e];if(t.length===i.length){for(let r=0;r<t.length;r++)if(t[r]!==i[r])continue e;return!0}}return!1}function f_(t,n){return t?":not("+n.trim()+")":n}function yM(t){let n=t[0],e=1,i=2,r="",o=!1;for(;e<t.length;){let a=t[e];if(typeof a=="string")if(i&2){let s=t[++e];r+="["+a+(s.length>0?'="'+s+'"':"")+"]"}else i&8?r+="."+a:i&4&&(r+=" "+a);else r!==""&&!un(a)&&(n+=f_(o,r),r=""),i=a,o=o||!un(i);e++}return r!==""&&(n+=f_(o,r)),n}function wM(t){return t.map(yM).join(",")}function CM(t){let n=[],e=[],i=1,r=2;for(;i<t.length;){let o=t[i];if(typeof o=="string")r===2?o!==""&&n.push(o,t[++i]):r===8&&e.push(o);else{if(!un(r))break;r=o}i++}return e.length&&n.push(1,...e),n}var hn={};function jh(t,n,e,i,r,o,a,s,c,l,u){let f=Pe+i,m=f+r,h=DM(f,m),b=typeof l=="function"?l():l;return h[B]={type:t,blueprint:h,template:e,queries:null,viewQuery:s,declTNode:n,data:h.slice().fill(null,f),bindingStartIndex:f,expandoStartIndex:m,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof o=="function"?o():o,pipeRegistry:typeof a=="function"?a():a,firstChild:null,schemas:c,consts:b,incompleteFirstPass:!1,ssrId:u}}function DM(t,n){let e=[];for(let i=0;i<n;i++)e.push(i<t?null:hn);return e}function xM(t){let n=t.tView;return n===null||n.incompleteFirstPass?t.tView=jh(1,null,t.template,t.decls,t.vars,t.directiveDefs,t.pipeDefs,t.viewQuery,t.schemas,t.consts,t.id):n}function Bh(t,n,e,i,r,o,a,s,c,l,u){let f=n.blueprint.slice();return f[cn]=r,f[Z]=i|4|128|8|64|1024,(l!==null||t&&t[Z]&2048)&&(f[Z]|=2048),mm(f),f[We]=f[dr]=t,f[Fe]=e,f[kn]=a||t&&t[kn],f[Ce]=s||t&&t[Ce],f[Kn]=c||t&&t[Kn]||null,f[bt]=o,f[Xn]=LI(),f[lr]=u,f[cm]=l,f[vt]=n.type==2?t[vt]:f,f}function EM(t,n,e){let i=qt(n,t),r=xM(e),o=t[kn].rendererFactory,a=Vh(t,Bh(t,r,null,yy(e),i,n,null,o.createRenderer(i,e),null,null,null));return t[n.index]=a}function yy(t){let n=16;return t.signals?n=4096:t.onPush&&(n=64),n}function wy(t,n,e,i){if(e===0)return-1;let r=n.length;for(let o=0;o<e;o++)n.push(i),t.blueprint.push(i),t.data.push(null);return r}function Vh(t,n){return t[ro]?t[sm][Wt]=n:t[ro]=n,t[sm]=n,n}function C(t=1){Cy(Me(),K(),ti()+t,!1)}function Cy(t,n,e,i){if(!i)if((n[Z]&3)===3){let o=t.preOrderCheckHooks;o!==null&&_l(n,o,e)}else{let o=t.preOrderHooks;o!==null&&yl(n,o,0,e)}Ri(e)}var Gl=(function(t){return t[t.None=0]="None",t[t.SignalBased=1]="SignalBased",t[t.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",t})(Gl||{});function oh(t,n,e,i){let r=F(null);try{let[o,a,s]=t.inputs[e],c=null;(a&Gl.SignalBased)!==0&&(c=n[o][je]),c!==null&&c.transformFn!==void 0?i=c.transformFn(i):s!==null&&(i=s.call(n,i)),t.setInput!==null?t.setInput(n,c,i,e,o):R_(n,c,o,i)}finally{F(r)}}var On=(function(t){return t[t.Important=1]="Important",t[t.DashCase=2]="DashCase",t})(On||{}),IM;function Hh(t,n){return IM(t,n)}var ZU=typeof document<"u"&&typeof document?.documentElement?.getAnimations=="function";var ah=new WeakMap,Qa=new WeakSet;function MM(t,n){let e=ah.get(t);if(!e||e.length===0)return;let i=n.parentNode,r=n.previousSibling;for(let o=e.length-1;o>=0;o--){let a=e[o],s=a.parentNode;a===n?(e.splice(o,1),Qa.add(a),a.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}}))):(r&&a===r||s&&i&&s!==i)&&(e.splice(o,1),a.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}})),a.parentNode?.removeChild(a))}}function SM(t,n){let e=ah.get(t);e?e.includes(n)||e.push(n):ah.set(t,[n])}var vr=new Set,ql=(function(t){return t[t.CHANGE_DETECTION=0]="CHANGE_DETECTION",t[t.AFTER_NEXT_RENDER=1]="AFTER_NEXT_RENDER",t})(ql||{}),pn=new g(""),m_=new Set;function Ln(t){m_.has(t)||(m_.add(t),performance?.mark?.("mark_feature_usage",{detail:{feature:t}}))}var Zl=(()=>{class t{impl=null;execute(){this.impl?.execute()}static \u0275prov=p({token:t,providedIn:"root",factory:()=>new t})}return t})(),Uh=[0,1,2,3],zh=(()=>{class t{ngZone=d(k);scheduler=d(In);errorHandler=d(dt,{optional:!0});sequences=new Set;deferredRegistrations=new Set;executing=!1;constructor(){d(pn,{optional:!0})}execute(){let e=this.sequences.size>0;e&&ve(de.AfterRenderHooksStart),this.executing=!0;for(let i of Uh)for(let r of this.sequences)if(!(r.erroredOrDestroyed||!r.hooks[i]))try{r.pipelinedValue=this.ngZone.runOutsideAngular(()=>this.maybeTrace(()=>{let o=r.hooks[i];return o(r.pipelinedValue)},r.snapshot))}catch(o){r.erroredOrDestroyed=!0,this.errorHandler?.handleError(o)}this.executing=!1;for(let i of this.sequences)i.afterRun(),i.once&&(this.sequences.delete(i),i.destroy());for(let i of this.deferredRegistrations)this.sequences.add(i);this.deferredRegistrations.size>0&&this.scheduler.notify(7),this.deferredRegistrations.clear(),e&&ve(de.AfterRenderHooksEnd)}register(e){let{view:i}=e;i!==void 0?((i[fr]??=[]).push(e),pr(i),i[Z]|=8192):this.executing?this.deferredRegistrations.add(e):this.addSequence(e)}addSequence(e){this.sequences.add(e),this.scheduler.notify(7)}unregister(e){this.executing&&this.sequences.has(e)?(e.erroredOrDestroyed=!0,e.pipelinedValue=void 0,e.once=!0):(this.sequences.delete(e),this.deferredRegistrations.delete(e))}maybeTrace(e,i){return i?i.run(ql.AFTER_NEXT_RENDER,e):e()}static \u0275prov=p({token:t,providedIn:"root",factory:()=>new t})}return t})(),Ja=class{impl;hooks;view;once;snapshot;erroredOrDestroyed=!1;pipelinedValue=void 0;unregisterOnDestroy;constructor(n,e,i,r,o,a=null){this.impl=n,this.hooks=e,this.view=i,this.once=r,this.snapshot=a,this.unregisterOnDestroy=o?.onDestroy(()=>this.destroy())}afterRun(){this.erroredOrDestroyed=!1,this.pipelinedValue=void 0,this.snapshot?.dispose(),this.snapshot=null}destroy(){this.impl.unregister(this),this.unregisterOnDestroy?.();let n=this.view?.[fr];n&&(this.view[fr]=n.filter(e=>e!==this))}};function at(t,n){let e=n?.injector??d(G);return Ln("NgAfterNextRender"),TM(t,e,n,!0)}function kM(t){return t instanceof Function?[void 0,void 0,t,void 0]:[t.earlyRead,t.write,t.mixedReadWrite,t.read]}function TM(t,n,e,i){let r=n.get(Zl);r.impl??=n.get(zh);let o=n.get(pn,null,{optional:!0}),a=e?.manualCleanup!==!0?n.get(ot):null,s=n.get(co,null,{optional:!0}),c=new Ja(r.impl,kM(t),s?.view,i,a,o?.snapshot(null));return r.impl.register(c),c}var Dy=new g("",{factory:()=>({queue:new Set,isScheduled:!1,scheduler:null,injector:d(be)})});function xy(t,n,e){let i=t.get(Dy);if(Array.isArray(n))for(let r of n)i.queue.add(r),e?.detachedLeaveAnimationFns?.push(r);else i.queue.add(n),e?.detachedLeaveAnimationFns?.push(n);i.scheduler&&i.scheduler(t)}function AM(t,n){let e=t.get(Dy);if(n.detachedLeaveAnimationFns){for(let i of n.detachedLeaveAnimationFns)e.queue.delete(i);n.detachedLeaveAnimationFns=void 0}}function RM(t,n){for(let[e,i]of n)xy(t,i.animateFns)}function h_(t,n,e,i){let r=t?.[Ti]?.enter;n!==null&&r&&r.has(e.index)&&RM(i,r)}function uo(t,n,e,i,r,o,a,s){if(r!=null){let c,l=!1;ln(r)?c=r:Jn(r)&&(l=!0,r=r[cn]);let u=Gt(r);t===0&&i!==null?(h_(s,i,o,e),a==null?hy(n,i,u):Sl(n,i,u,a||null,!0)):t===1&&i!==null?(h_(s,i,o,e),Sl(n,i,u,a||null,!0),MM(o,u)):t===2?(s?.[Ti]?.leave?.has(o.index)&&SM(o,u),Qa.delete(u),p_(s,o,e,f=>{if(Qa.has(u)){Qa.delete(u);return}py(n,u,l,f)})):t===3&&(Qa.delete(u),p_(s,o,e,()=>{n.destroyNode(u)})),c!=null&&zM(n,t,e,c,o,i,a)}}function NM(t,n){Ey(t,n),n[cn]=null,n[bt]=null}function OM(t,n,e,i,r,o){i[cn]=r,i[bt]=n,Yl(t,i,e,1,r,o)}function Ey(t,n){n[kn].changeDetectionScheduler?.notify(9),Yl(t,n,n[Ce],2,null,null)}function FM(t){let n=t[ro];if(!n)return jm(t[B],t);for(;n;){let e=null;if(Jn(n))e=n[ro];else{let i=n[Re];i&&(e=i)}if(!e){for(;n&&!n[Wt]&&n!==t;)Jn(n)&&jm(n[B],n),n=n[We];n===null&&(n=t),Jn(n)&&jm(n[B],n),e=n&&n[Wt]}n=e}}function $h(t,n){let e=t[mr],i=e.indexOf(n);e.splice(i,1)}function Ql(t,n){if(hr(n))return;let e=n[Ce];e.destroyNode&&Yl(t,n,e,3,null,null),FM(n)}function jm(t,n){if(hr(n))return;let e=F(null);try{n[Z]&=-129,n[Z]|=256,n[jt]&&vi(n[jt]),jM(t,n),LM(t,n),n[B].type===1&&n[Ce].destroy();let i=n[ki];if(i!==null&&ln(n[We])){i!==n[We]&&$h(i,n);let r=n[Tn];r!==null&&r.detachView(t)}Qm(n)}finally{F(e)}}function p_(t,n,e,i){let r=t?.[Ti];if(r==null||r.leave==null||!r.leave.has(n.index))return i(!1);t&&vr.add(t[Xn]),xy(e,()=>{if(r.leave&&r.leave.has(n.index)){let a=r.leave.get(n.index),s=[];if(a){for(let c=0;c<a.animateFns.length;c++){let l=a.animateFns[c],{promise:u}=l();s.push(u)}r.detachedLeaveAnimationFns=void 0}r.running=Promise.allSettled(s),PM(t,i)}else t&&vr.delete(t[Xn]),i(!1)},r)}function PM(t,n){let e=t[Ti]?.running;if(e){e.then(()=>{t[Ti].running=void 0,vr.delete(t[Xn]),n(!0)});return}n(!1)}function LM(t,n){let e=t.cleanup,i=n[io];if(e!==null)for(let a=0;a<e.length-1;a+=2)if(typeof e[a]=="string"){let s=e[a+3];s>=0?i[s]():i[-s].unsubscribe(),a+=2}else{let s=i[e[a+1]];e[a].call(s)}i!==null&&(n[io]=null);let r=n[Yn];if(r!==null){n[Yn]=null;for(let a=0;a<r.length;a++){let s=r[a];s()}}let o=n[Ei];if(o!==null){n[Ei]=null;for(let a of o)a.destroy()}}function jM(t,n){let e;if(t!=null&&(e=t.destroyHooks)!=null)for(let i=0;i<e.length;i+=2){let r=n[e[i]];if(!(r instanceof br)){let o=e[i+1];if(Array.isArray(o))for(let a=0;a<o.length;a+=2){let s=r[o[a]],c=o[a+1];ve(de.LifecycleHookStart,s,c);try{c.call(s)}finally{ve(de.LifecycleHookEnd,s,c)}}else{ve(de.LifecycleHookStart,r,o);try{o.call(r)}finally{ve(de.LifecycleHookEnd,r,o)}}}}}function Iy(t,n,e){return BM(t,n.parent,e)}function BM(t,n,e){let i=n;for(;i!==null&&i.type&168;)n=i,i=n.parent;if(i===null)return e[cn];if(An(i)){let{encapsulation:r}=t.data[i.directiveStart+i.componentOffset];if(r===mn.None||r===mn.Emulated)return null}return qt(i,e)}function My(t,n,e){return HM(t,n,e)}function VM(t,n,e){return t.type&40?qt(t,e):null}var HM=VM,g_;function Wh(t,n,e,i){let r=Iy(t,i,n),o=n[Ce],a=i.parent||n[bt],s=My(a,i,n);if(r!=null)if(Array.isArray(e))for(let c=0;c<e.length;c++)u_(o,r,e[c],s,!1);else u_(o,r,e,s,!1);g_!==void 0&&g_(o,i,n,e,r)}function Ya(t,n){if(n!==null){let e=n.type;if(e&3)return qt(n,t);if(e&4)return sh(-1,t[n.index]);if(e&8){let i=n.child;if(i!==null)return Ya(t,i);{let r=t[n.index];return ln(r)?sh(-1,r):Gt(r)}}else{if(e&128)return Ya(t,n.next);if(e&32)return Hh(n,t)()||Gt(t[n.index]);{let i=Sy(t,n);if(i!==null){if(Array.isArray(i))return i[0];let r=Ii(t[vt]);return Ya(r,i)}else return Ya(t,n.next)}}}return null}function Sy(t,n){if(n!==null){let i=t[vt][bt],r=n.projection;return i.projection[r]}return null}function sh(t,n){let e=Re+t+1;if(e<n.length){let i=n[e],r=i[B].firstChild;if(r!==null)return Ya(i,r)}return n[Ai]}function Gh(t,n,e,i,r,o,a){for(;e!=null;){let s=i[Kn];if(e.type===128){e=e.next;continue}let c=i[e.index],l=e.type;if(a&&n===0&&(c&&ho(Gt(c),i),e.flags|=2),!zl(e))if(l&8)Gh(t,n,e.child,i,r,o,!1),uo(n,t,s,r,c,e,o,i);else if(l&32){let u=Hh(e,i),f;for(;f=u();)uo(n,t,s,r,f,e,o,i);uo(n,t,s,r,c,e,o,i)}else l&16?ky(t,n,i,e,r,o):uo(n,t,s,r,c,e,o,i);e=a?e.projectionNext:e.next}}function Yl(t,n,e,i,r,o){Gh(e,i,t.firstChild,n,r,o,!1)}function UM(t,n,e){let i=n[Ce],r=Iy(t,e,n),o=e.parent||n[bt],a=My(o,e,n);ky(i,0,n,e,r,a)}function ky(t,n,e,i,r,o){let a=e[vt],c=a[bt].projection[i.projection];if(Array.isArray(c))for(let l=0;l<c.length;l++){let u=c[l];uo(n,t,e[Kn],r,u,i,o,e)}else{let l=c,u=a[We];Q_(i)&&(l.flags|=128),Gh(t,n,l,u,r,o,!0)}}function zM(t,n,e,i,r,o,a){let s=i[Ai],c=Gt(i);s!==c&&uo(n,t,e,o,s,r,a);for(let l=Re;l<i.length;l++){let u=i[l];Yl(u[B],u,t,n,o,s)}}function $M(t,n,e,i,r){if(n)r?t.addClass(e,i):t.removeClass(e,i);else{let o=i.indexOf("-")===-1?void 0:On.DashCase;r==null?t.removeStyle(e,i,o):(typeof r=="string"&&r.endsWith("!important")&&(r=r.slice(0,-10),o|=On.Important),t.setStyle(e,i,r,o))}}function Ty(t,n,e,i,r){let o=ti(),a=i&2;try{Ri(-1),a&&n.length>Pe&&Cy(t,n,Pe,!1);let s=a?de.TemplateUpdateStart:de.TemplateCreateStart;ve(s,r,e),e(i,r)}finally{Ri(o);let s=a?de.TemplateUpdateEnd:de.TemplateCreateEnd;ve(s,r,e)}}function qh(t,n,e){QM(t,n,e),(e.flags&64)===64&&YM(t,n,e)}function Kl(t,n,e=qt){let i=n.localNames;if(i!==null){let r=n.index+1;for(let o=0;o<i.length;o+=2){let a=i[o+1],s=a===-1?e(n,t):t[a];t[r++]=s}}}function WM(t,n,e,i){let o=i.get(iy,ny)||e===mn.ShadowDom||e===mn.ExperimentalIsolatedShadowDom,a=t.selectRootElement(n,o);return GM(a),a}function GM(t){qM(t)}var qM=()=>null;function ZM(t){return t==="class"?"className":t==="for"?"htmlFor":t==="formaction"?"formAction":t==="innerHtml"?"innerHTML":t==="readonly"?"readOnly":t==="tabindex"?"tabIndex":t}function Ay(t,n,e,i,r,o){let a=n[B];if(Xl(t,a,n,e,i)){An(t)&&Ny(n,t.index);return}t.type&3&&(e=ZM(e)),Ry(t,n,e,i,r,o)}function Ry(t,n,e,i,r,o){if(t.type&3){let a=qt(t,n);i=o!=null?o(i,t.value||"",e):i,r.setProperty(a,e,i)}else t.type&12}function Ny(t,n){let e=Zt(n,t);e[Z]&16||(e[Z]|=64)}function QM(t,n,e){let i=e.directiveStart,r=e.directiveEnd;An(e)&&EM(n,e,t.data[i+e.componentOffset]),t.firstCreatePass||Ml(e,n);let o=e.initialInputs;for(let a=i;a<r;a++){let s=t.data[a],c=Xa(n,t,a,e);if(ho(c,n),o!==null&&JM(n,a-i,c,s,e,o),Rn(s)){let l=Zt(e.index,n);l[Fe]=Xa(n,t,a,e)}}}function YM(t,n,e){let i=e.directiveStart,r=e.directiveEnd,o=e.index,a=Bv();try{Ri(o);for(let s=i;s<r;s++){let c=t.data[s],l=n[s];cl(s),(c.hostBindings!==null||c.hostVars!==0||c.hostAttrs!==null)&&KM(c,l)}}finally{Ri(-1),cl(a)}}function KM(t,n){t.hostBindings!==null&&t.hostBindings(1,n)}function Oy(t,n){let e=t.directiveRegistry,i=null;if(e)for(let r=0;r<e.length;r++){let o=e[r];_y(n,o.selectors,!1)&&(i??=[],Rn(o)?i.unshift(o):i.push(o))}return i}function XM(t,n,e,i,r,o){let a=qt(t,n);Fy(n[Ce],a,o,t.value,e,i,r)}function Fy(t,n,e,i,r,o,a){if(o==null)t.removeAttribute(n,r,e);else{let s=a==null?Xf(o):a(o,i||"",r);t.setAttribute(n,r,s,e)}}function JM(t,n,e,i,r,o){let a=o[n];if(a!==null)for(let s=0;s<a.length;s+=2){let c=a[s],l=a[s+1];oh(i,e,c,l)}}function Py(t,n,e,i,r){let o=Pe+e,a=n[B],s=r(a,n,t,i,e);n[o]=s,ao(t,!0);let c=t.type===2;return c?(gy(n[Ce],s,t),(Rv()===0||za(t))&&ho(s,n),Nv()):ho(s,n),fl()&&(!c||!zl(t))&&Wh(a,n,s,t),t}function Ly(t){let n=t;return xm()?Em():(n=n.parent,ao(n,!1)),n}function eS(t,n){let e=t[Kn];if(!e)return;let i;try{i=e.get(Qt,null)}catch{i=null}i?.(n)}function Xl(t,n,e,i,r){let o=t.inputs?.[i],a=t.hostDirectiveInputs?.[i],s=!1;if(a)for(let c=0;c<a.length;c+=2){let l=a[c],u=a[c+1],f=n.data[l];oh(f,e[l],u,r),s=!0}if(o)for(let c of o){let l=e[c],u=n.data[c];oh(u,l,i,r),s=!0}return s}function tS(t,n){let e=Zt(n,t),i=e[B];nS(i,e);let r=e[cn];r!==null&&e[lr]===null&&(e[lr]=ry(r,e[Kn])),ve(de.ComponentStart);try{Zh(i,e,e[Fe])}finally{ve(de.ComponentEnd,e[Fe])}}function nS(t,n){for(let e=n.length;e<t.blueprint.length;e++)n.push(t.blueprint[e])}function Zh(t,n,e){dl(n);try{let i=t.viewQuery;i!==null&&Ym(1,i,e);let r=t.template;r!==null&&Ty(t,n,r,1,e),t.firstCreatePass&&(t.firstCreatePass=!1),n[Tn]?.finishViewCreation(t),t.staticContentQueries&&oy(t,n),t.staticViewQueries&&Ym(2,t.viewQuery,e);let o=t.components;o!==null&&iS(n,o)}catch(i){throw t.firstCreatePass&&(t.incompleteFirstPass=!0,t.firstCreatePass=!1),i}finally{n[Z]&=-5,ul()}}function iS(t,n){for(let e=0;e<n.length;e++)tS(t,n[e])}function ss(t,n,e,i){let r=F(null);try{let o=n.tView,s=t[Z]&4096?4096:16,c=Bh(t,o,e,s,null,n,null,null,i?.injector??null,i?.embeddedViewInjector??null,i?.dehydratedView??null),l=t[n.index];c[ki]=l;let u=t[Tn];return u!==null&&(c[Tn]=u.createEmbeddedView(o)),Zh(o,c,e),c}finally{F(r)}}function po(t,n){return!n||n.firstChild===null||Q_(t)}function es(t,n,e,i,r=!1){for(;e!==null;){if(e.type===128){e=r?e.projectionNext:e.next;continue}let o=n[e.index];o!==null&&i.push(Gt(o)),ln(o)&&jy(o,i);let a=e.type;if(a&8)es(t,n,e.child,i);else if(a&32){let s=Hh(e,n),c;for(;c=s();)i.push(c)}else if(a&16){let s=Sy(n,e);if(Array.isArray(s))i.push(...s);else{let c=Ii(n[vt]);es(c[B],c,s,i,!0)}}e=r?e.projectionNext:e.next}return i}function jy(t,n){for(let e=Re;e<t.length;e++){let i=t[e],r=i[B].firstChild;r!==null&&es(i[B],i,r,n)}t[Ai]!==t[cn]&&n.push(t[Ai])}function By(t){if(t[fr]!==null){for(let n of t[fr])n.impl.addSequence(n);t[fr].length=0}}var Vy=[];function rS(t){return t[jt]??oS(t)}function oS(t){let n=Vy.pop()??Object.create(sS);return n.lView=t,n}function aS(t){t.lView[jt]!==t&&(t.lView=null,Vy.push(t))}var sS=W(v({},Qi),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:t=>{pr(t.lView)},consumerOnSignalRead(){this.lView[jt]=this}});function cS(t){let n=t[jt]??Object.create(lS);return n.lView=t,n}var lS=W(v({},Qi),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:t=>{let n=Ii(t.lView);for(;n&&!Hy(n[B]);)n=Ii(n);n&&hm(n)},consumerOnSignalRead(){this.lView[jt]=this}});function Hy(t){return t.type!==2}function Uy(t){if(t[Ei]===null)return;let n=!0;for(;n;){let e=!1;for(let i of t[Ei])i.dirty&&(e=!0,i.zone===null||Zone.current===i.zone?i.run():i.zone.run(()=>i.run()));n=e&&!!(t[Z]&8192)}}var dS=100;function zy(t,n=0){let i=t[kn].rendererFactory,r=!1;r||i.begin?.();try{uS(t,n)}finally{r||i.end?.()}}function uS(t,n){let e=Im();try{Fa(!0),ch(t,n);let i=0;for(;$a(t);){if(i===dS)throw new D(103,!1);i++,ch(t,1)}}finally{Fa(e)}}function fS(t,n,e,i){if(hr(n))return;let r=n[Z],o=!1,a=!1;dl(n);let s=!0,c=null,l=null;o||(Hy(t)?(l=rS(n),c=bi(l)):lc()===null?(s=!1,l=cS(n),c=bi(l)):n[jt]&&(vi(n[jt]),n[jt]=null));try{mm(n),Pv(t.bindingStartIndex),e!==null&&Ty(t,n,e,2,i);let u=(r&3)===3;if(!o)if(u){let h=t.preOrderCheckHooks;h!==null&&_l(n,h,null)}else{let h=t.preOrderHooks;h!==null&&yl(n,h,0,null),Pm(n,0)}if(a||mS(n),Uy(n),$y(n,0),t.contentQueries!==null&&oy(t,n),!o)if(u){let h=t.contentCheckHooks;h!==null&&_l(n,h)}else{let h=t.contentHooks;h!==null&&yl(n,h,1),Pm(n,1)}pS(t,n);let f=t.components;f!==null&&Gy(n,f,0);let m=t.viewQuery;if(m!==null&&Ym(2,m,i),!o)if(u){let h=t.viewCheckHooks;h!==null&&_l(n,h)}else{let h=t.viewHooks;h!==null&&yl(n,h,2),Pm(n,2)}if(t.firstUpdatePass===!0&&(t.firstUpdatePass=!1),n[rl]){for(let h of n[rl])h();n[rl]=null}o||(By(n),n[Z]&=-73)}catch(u){throw o||pr(n),u}finally{l!==null&&(Yi(l,c),s&&aS(l)),ul()}}function $y(t,n){for(let e=K_(t);e!==null;e=X_(e))for(let i=Re;i<e.length;i++){let r=e[i];Wy(r,n)}}function mS(t){for(let n=K_(t);n!==null;n=X_(n)){if(!(n[Z]&2))continue;let e=n[mr];for(let i=0;i<e.length;i++){let r=e[i];hm(r)}}}function hS(t,n,e){ve(de.ComponentStart);let i=Zt(n,t);try{Wy(i,e)}finally{ve(de.ComponentEnd,i[Fe])}}function Wy(t,n){al(t)&&ch(t,n)}function ch(t,n){let i=t[B],r=t[Z],o=t[jt],a=!!(n===0&&r&16);if(a||=!!(r&64&&n===0),a||=!!(r&1024),a||=!!(o?.dirty&&$r(o)),a||=!1,o&&(o.dirty=!1),t[Z]&=-9217,a)fS(i,t,i.template,t[Fe]);else if(r&8192){let s=F(null);try{Uy(t),$y(t,1);let c=i.components;c!==null&&Gy(t,c,1),By(t)}finally{F(s)}}}function Gy(t,n,e){for(let i=0;i<n.length;i++)hS(t,n[i],e)}function pS(t,n){let e=t.hostBindingOpCodes;if(e!==null)try{for(let i=0;i<e.length;i++){let r=e[i];if(r<0)Ri(~r);else{let o=r,a=e[++i],s=e[++i];jv(a,o);let c=n[o];ve(de.HostBindingsUpdateStart,c);try{s(2,c)}finally{ve(de.HostBindingsUpdateEnd,c)}}}}finally{Ri(-1)}}function Qh(t,n){let e=Im()?64:1088;for(t[kn].changeDetectionScheduler?.notify(n);t;){t[Z]|=e;let i=Ii(t);if(oo(t)&&!i)return t;t=i}return null}function qy(t,n,e,i){return[t,!0,0,n,null,i,null,e,null,null]}function Zy(t,n){let e=Re+n;if(e<t.length)return t[e]}function cs(t,n,e,i=!0){let r=n[B];if(gS(r,n,t,e),i){let a=sh(e,t),s=n[Ce],c=s.parentNode(t[Ai]);c!==null&&OM(r,t[bt],s,n,c,a)}let o=n[lr];o!==null&&o.firstChild!==null&&(o.firstChild=null)}function Qy(t,n){let e=ts(t,n);return e!==void 0&&Ql(e[B],e),e}function ts(t,n){if(t.length<=Re)return;let e=Re+n,i=t[e];if(i){let r=i[ki];r!==null&&r!==t&&$h(r,i),n>0&&(t[e-1][Wt]=i[Wt]);let o=Va(t,Re+n);NM(i[B],i);let a=o[Tn];a!==null&&a.detachView(o[B]),i[We]=null,i[Wt]=null,i[Z]&=-129}return i}function gS(t,n,e,i){let r=Re+i,o=e.length;i>0&&(e[r-1][Wt]=n),i<o-Re?(n[Wt]=e[r],tm(e,Re+i,n)):(e.push(n),n[Wt]=null),n[We]=e;let a=n[ki];a!==null&&e!==a&&Yy(a,n);let s=n[Tn];s!==null&&s.insertView(t),sl(n),n[Z]|=128}function Yy(t,n){let e=t[mr],i=n[We];if(Jn(i))t[Z]|=2;else{let r=i[We][vt];n[vt]!==r&&(t[Z]|=2)}e===null?t[mr]=[n]:e.push(n)}var Ni=class{_lView;_cdRefInjectingView;_appRef=null;_attachedToViewContainer=!1;exhaustive;get rootNodes(){let n=this._lView,e=n[B];return es(e,n,e.firstChild,[])}constructor(n,e){this._lView=n,this._cdRefInjectingView=e}get context(){return this._lView[Fe]}set context(n){this._lView[Fe]=n}get destroyed(){return hr(this._lView)}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let n=this._lView[We];if(ln(n)){let e=n[Ua],i=e?e.indexOf(this):-1;i>-1&&(ts(n,i),Va(e,i))}this._attachedToViewContainer=!1}Ql(this._lView[B],this._lView)}onDestroy(n){pm(this._lView,n)}markForCheck(){Qh(this._cdRefInjectingView||this._lView,4)}detach(){this._lView[Z]&=-129}reattach(){sl(this._lView),this._lView[Z]|=128}detectChanges(){this._lView[Z]|=1024,zy(this._lView)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new D(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null;let n=oo(this._lView),e=this._lView[ki];e!==null&&!n&&$h(e,this._lView),Ey(this._lView[B],this._lView)}attachToAppRef(n){if(this._attachedToViewContainer)throw new D(902,!1);this._appRef=n;let e=oo(this._lView),i=this._lView[ki];i!==null&&!e&&Yy(i,this._lView),sl(this._lView)}};var ut=(()=>{class t{_declarationLView;_declarationTContainer;elementRef;static __NG_ELEMENT_ID__=bS;constructor(e,i,r){this._declarationLView=e,this._declarationTContainer=i,this.elementRef=r}get ssrId(){return this._declarationTContainer.tView?.ssrId||null}createEmbeddedView(e,i){return this.createEmbeddedViewImpl(e,i)}createEmbeddedViewImpl(e,i,r){let o=ss(this._declarationLView,this._declarationTContainer,e,{embeddedViewInjector:i,dehydratedView:r});return new Ni(o)}}return t})();function bS(){return Jl(Je(),K())}function Jl(t,n){return t.type&4?new ut(n,t,vo(t,n)):null}function wo(t,n,e,i,r){let o=t.data[n];if(o===null)o=vS(t,n,e,i,r),Lv()&&(o.flags|=32);else if(o.type&64){o.type=e,o.value=i,o.attrs=r;let a=Ov();o.injectorIndex=a===null?-1:a.injectorIndex}return ao(o,!0),o}function vS(t,n,e,i,r){let o=Dm(),a=xm(),s=a?o:o&&o.parent,c=t.data[n]=yS(t,s,e,n,i,r);return _S(t,c,o,a),c}function _S(t,n,e,i){t.firstChild===null&&(t.firstChild=n),e!==null&&(i?e.child==null&&n.parent!==null&&(e.child=n):e.next===null&&(e.next=n,n.prev=e))}function yS(t,n,e,i,r,o){let a=n?n.injectorIndex:-1,s=0;return ym()&&(s|=128),{type:e,index:i,insertBeforeIndex:null,injectorIndex:a,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,controlDirectiveIndex:-1,customControlIndex:-1,propertyBindings:null,flags:s,providerIndexes:0,value:r,attrs:o,mergedAttrs:null,localNames:null,initialInputs:null,inputs:null,hostDirectiveInputs:null,outputs:null,hostDirectiveOutputs:null,directiveToIndex:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:n,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}function wS(t){let n=t[lm]??[],i=t[We][Ce],r=[];for(let o of n)o.data[ty]!==void 0?r.push(o):CS(o,i);t[lm]=r}function CS(t,n){let e=0,i=t.firstChild;if(i){let r=t.data[ey];for(;e<r;){let o=i.nextSibling;py(n,i,!1),i=o,e++}}}var DS=()=>null,xS=()=>null;function kl(t,n){return DS(t,n)}function Ky(t,n,e){return xS(t,n,e)}var Xy=class{},ed=class{},lh=class{resolveComponentFactory(n){throw new D(917,!1)}},ls=class{static NULL=new lh},Ve=class{},Se=(()=>{class t{destroyNode=null;static __NG_ELEMENT_ID__=()=>ES()}return t})();function ES(){let t=K(),n=Je(),e=Zt(n.index,t);return(Jn(e)?e:t)[Ce]}var Jy=(()=>{class t{static \u0275prov=p({token:t,providedIn:"root",factory:()=>null})}return t})();var Cl={},dh=class{injector;parentInjector;constructor(n,e){this.injector=n,this.parentInjector=e}get(n,e,i){let r=this.injector.get(n,Cl,i);return r!==Cl||e===Cl?r:this.parentInjector.get(n,e,i)}};function Tl(t,n,e){let i=e?t.styles:null,r=e?t.classes:null,o=0;if(n!==null)for(let a=0;a<n.length;a++){let s=n[a];if(typeof s=="number")o=s;else if(o==1)r=Kc(r,s);else if(o==2){let c=s,l=n[++a];i=Kc(i,c+": "+l+";")}}e?t.styles=i:t.stylesWithoutHost=i,e?t.classes=r:t.classesWithoutHost=r}function Ie(t,n=0){let e=K();if(e===null)return T(t,n);let i=Je();return W_(i,e,rt(t),n)}function Yh(){let t="invalid";throw new Error(t)}function ew(t,n,e,i,r){let o=i===null?null:{"":-1},a=r(t,e);if(a!==null){let s=a,c=null,l=null;for(let u of a)if(u.resolveHostDirectives!==null){[s,c,l]=u.resolveHostDirectives(a);break}SS(t,n,e,s,o,c,l)}o!==null&&i!==null&&IS(e,i,o)}function IS(t,n,e){let i=t.localNames=[];for(let r=0;r<n.length;r+=2){let o=e[n[r+1]];if(o==null)throw new D(-301,!1);i.push(n[r],o)}}function MS(t,n,e){n.componentOffset=e,(t.components??=[]).push(n.index)}function SS(t,n,e,i,r,o,a){let s=i.length,c=null;for(let m=0;m<s;m++){let h=i[m];c===null&&Rn(h)&&(c=h,MS(t,e,m)),qm(Ml(e,n),t,h.type)}OS(e,t.data.length,s),c?.viewProvidersResolver&&c.viewProvidersResolver(c);for(let m=0;m<s;m++){let h=i[m];h.providersResolver&&h.providersResolver(h)}let l=!1,u=!1,f=wy(t,n,s,null);s>0&&(e.directiveToIndex=new Map);for(let m=0;m<s;m++){let h=i[m];if(e.mergedAttrs=mo(e.mergedAttrs,h.hostAttrs),TS(t,e,n,f,h),NS(f,h,r),a!==null&&a.has(h)){let[w,I]=a.get(h);e.directiveToIndex.set(h.type,[f,w+e.directiveStart,I+e.directiveStart])}else(o===null||!o.has(h))&&e.directiveToIndex.set(h.type,f);h.contentQueries!==null&&(e.flags|=4),(h.hostBindings!==null||h.hostAttrs!==null||h.hostVars!==0)&&(e.flags|=64);let b=h.type.prototype;!l&&(b.ngOnChanges||b.ngOnInit||b.ngDoCheck)&&((t.preOrderHooks??=[]).push(e.index),l=!0),!u&&(b.ngOnChanges||b.ngDoCheck)&&((t.preOrderCheckHooks??=[]).push(e.index),u=!0),f++}kS(t,e,o)}function kS(t,n,e){for(let i=n.directiveStart;i<n.directiveEnd;i++){let r=t.data[i];if(e===null||!e.has(r))b_(0,n,r,i),b_(1,n,r,i),__(n,i,!1);else{let o=e.get(r);v_(0,n,o,i),v_(1,n,o,i),__(n,i,!0)}}}function b_(t,n,e,i){let r=t===0?e.inputs:e.outputs;for(let o in r)if(r.hasOwnProperty(o)){let a;t===0?a=n.inputs??={}:a=n.outputs??={},a[o]??=[],a[o].push(i),tw(n,o)}}function v_(t,n,e,i){let r=t===0?e.inputs:e.outputs;for(let o in r)if(r.hasOwnProperty(o)){let a=r[o],s;t===0?s=n.hostDirectiveInputs??={}:s=n.hostDirectiveOutputs??={},s[a]??=[],s[a].push(i,o),tw(n,a)}}function tw(t,n){n==="class"?t.flags|=8:n==="style"&&(t.flags|=16)}function __(t,n,e){let{attrs:i,inputs:r,hostDirectiveInputs:o}=t;if(i===null||!e&&r===null||e&&o===null||Lh(t)){t.initialInputs??=[],t.initialInputs.push(null);return}let a=null,s=0;for(;s<i.length;){let c=i[s];if(c===0){s+=4;continue}else if(c===5){s+=2;continue}else if(typeof c=="number")break;if(!e&&r.hasOwnProperty(c)){let l=r[c];for(let u of l)if(u===n){a??=[],a.push(c,i[s+1]);break}}else if(e&&o.hasOwnProperty(c)){let l=o[c];for(let u=0;u<l.length;u+=2)if(l[u]===n){a??=[],a.push(l[u+1],i[s+1]);break}}s+=2}t.initialInputs??=[],t.initialInputs.push(a)}function TS(t,n,e,i,r){t.data[i]=r;let o=r.factory||(r.factory=or(r.type,!0)),a=new br(o,Rn(r),Ie,null);t.blueprint[i]=a,e[i]=a,AS(t,n,i,wy(t,e,r.hostVars,hn),r)}function AS(t,n,e,i,r){let o=r.hostBindings;if(o){let a=t.hostBindingOpCodes;a===null&&(a=t.hostBindingOpCodes=[]);let s=~n.index;RS(a)!=s&&a.push(s),a.push(e,i,o)}}function RS(t){let n=t.length;for(;n>0;){let e=t[--n];if(typeof e=="number"&&e<0)return e}return 0}function NS(t,n,e){if(e){if(n.exportAs)for(let i=0;i<n.exportAs.length;i++)e[n.exportAs[i]]=t;Rn(n)&&(e[""]=t)}}function OS(t,n,e){t.flags|=1,t.directiveStart=n,t.directiveEnd=n+e,t.providerIndexes=n}function nw(t,n,e,i,r,o,a,s){let c=n[B],l=c.consts,u=Bt(l,a),f=wo(c,t,e,i,u);return o&&ew(c,n,f,Bt(l,s),r),f.mergedAttrs=mo(f.mergedAttrs,f.attrs),f.attrs!==null&&Tl(f,f.attrs,!1),f.mergedAttrs!==null&&Tl(f,f.mergedAttrs,!0),c.queries!==null&&c.queries.elementStart(c,f),f}function iw(t,n){P_(t,n),dm(n)&&t.queries.elementEnd(n)}function FS(t,n,e,i,r,o){let a=n.consts,s=Bt(a,r),c=wo(n,t,e,i,s);if(c.mergedAttrs=mo(c.mergedAttrs,c.attrs),o!=null){let l=Bt(a,o);c.localNames=[];for(let u=0;u<l.length;u+=2)c.localNames.push(l[u],-1)}return c.attrs!==null&&Tl(c,c.attrs,!1),c.mergedAttrs!==null&&Tl(c,c.mergedAttrs,!0),n.queries!==null&&n.queries.elementStart(n,c),c}function jn(t,n,e){if(e===hn)return!1;let i=t[n];return Object.is(i,e)?!1:(t[n]=e,!0)}function Dl(t,n,e){return function i(r){let o=An(t)?Zt(t.index,n):n;Qh(o,5);let a=n[Fe],s=y_(n,a,e,r),c=i.__ngNextListenerFn__;for(;c;)s=y_(n,a,c,r)&&s,c=c.__ngNextListenerFn__;return s}}function y_(t,n,e,i){let r=F(null);try{return ve(de.OutputStart,n,e),e(i)!==!1}catch(o){return eS(t,o),!1}finally{ve(de.OutputEnd,n,e),F(r)}}function rw(t,n,e,i,r,o,a,s){let c=za(t),l=!1,u=null;if(!i&&c&&(u=LS(n,e,o,t.index)),u!==null){let f=u.__ngLastListenerFn__||u;f.__ngNextListenerFn__=a,u.__ngLastListenerFn__=a,l=!0}else{let f=qt(t,e),m=i?i(f):f;UI(e,m,o,s);let h=r.listen(m,o,s);if(!PS(o)){let b=i?w=>i(Gt(w[t.index])):t.index;ow(b,n,e,o,s,h,!1)}}return l}function PS(t){return t.startsWith("animation")||t.startsWith("transition")}function LS(t,n,e,i){let r=t.cleanup;if(r!=null)for(let o=0;o<r.length-1;o+=2){let a=r[o];if(a===e&&r[o+1]===i){let s=n[io],c=r[o+2];return s&&s.length>c?s[c]:null}typeof a=="string"&&(o+=2)}return null}function ow(t,n,e,i,r,o,a){let s=n.firstCreatePass?bm(n):null,c=gm(e),l=c.length;c.push(r,o),s&&s.push(i,t,l,(l+1)*(a?-1:1))}function w_(t,n,e,i,r,o){let a=n[e],s=n[B],l=s.data[e].outputs[i],f=a[l].subscribe(o);ow(t.index,s,n,r,o,f,!0)}var uh=Symbol("BINDING");function aw(t){return t.debugInfo?.className||t.type.name||null}var Al=class extends ls{ngModule;constructor(n){super(),this.ngModule=n}resolveComponentFactory(n){let e=Mn(n);return new Oi(e,this.ngModule)}};function jS(t){return Object.keys(t).map(n=>{let[e,i,r]=t[n],o={propName:e,templateName:n,isSignal:(i&Gl.SignalBased)!==0};return r&&(o.transform=r),o})}function BS(t){return Object.keys(t).map(n=>({propName:t[n],templateName:n}))}function VS(t,n,e){let i=n instanceof be?n:n?.injector;return i&&t.getStandaloneInjector!==null&&(i=t.getStandaloneInjector(i)||i),i?new dh(e,i):e}function HS(t){let n=t.get(Ve,null);if(n===null)throw new D(407,!1);let e=t.get(Jy,null),i=t.get(In,null),r=t.get(pn,null,{optional:!0});return{rendererFactory:n,sanitizer:e,changeDetectionScheduler:i,ngReflect:!1,tracingService:r}}function US(t,n){let e=sw(t);return my(n,e,e==="svg"?um:e==="math"?Ev:null)}function sw(t){return(t.selectors[0][0]||"div").toLowerCase()}var Oi=class extends ed{componentDef;ngModule;selector;componentType;ngContentSelectors;isBoundToModule;cachedInputs=null;cachedOutputs=null;get inputs(){return this.cachedInputs??=jS(this.componentDef.inputs),this.cachedInputs}get outputs(){return this.cachedOutputs??=BS(this.componentDef.outputs),this.cachedOutputs}constructor(n,e){super(),this.componentDef=n,this.ngModule=e,this.componentType=n.type,this.selector=wM(n.selectors),this.ngContentSelectors=n.ngContentSelectors??[],this.isBoundToModule=!!e}create(n,e,i,r,o,a){ve(de.DynamicComponentStart);let s=F(null);try{let c=this.componentDef,l=VS(c,r||this.ngModule,n),u=HS(l),f=u.tracingService;return f&&f.componentCreate?f.componentCreate(aw(c),()=>this.createComponentRef(u,l,e,i,o,a)):this.createComponentRef(u,l,e,i,o,a)}finally{F(s)}}createComponentRef(n,e,i,r,o,a){let s=this.componentDef,c=zS(r,s,a,o),l=n.rendererFactory.createRenderer(null,s),u=r?WM(l,r,s.encapsulation,e):US(s,l),f=a?.some(C_)||o?.some(b=>typeof b!="function"&&b.bindings.some(C_)),m=Bh(null,c,null,512|yy(s),null,null,n,l,e,null,ry(u,e,!0));m[Pe]=u,dl(m);let h=null;try{let b=nw(Pe,m,2,"#host",()=>c.directiveRegistry,!0,0);gy(l,u,b),ho(u,m),qh(c,m,b),ay(c,b,m),iw(c,b),i!==void 0&&WS(b,this.ngContentSelectors,i),h=Zt(b.index,m),m[Fe]=h[Fe],Zh(c,m,null)}catch(b){throw h!==null&&Qm(h),Qm(m),b}finally{ve(de.DynamicComponentEnd),ul()}return new Rl(this.componentType,m,!!f)}};function zS(t,n,e,i){let r=t?["ng-version","21.2.7"]:CM(n.selectors[0]),o=null,a=null,s=0;if(e)for(let u of e)s+=u[uh].requiredVars,u.create&&(u.targetIdx=0,(o??=[]).push(u)),u.update&&(u.targetIdx=0,(a??=[]).push(u));if(i)for(let u=0;u<i.length;u++){let f=i[u];if(typeof f!="function")for(let m of f.bindings){s+=m[uh].requiredVars;let h=u+1;m.create&&(m.targetIdx=h,(o??=[]).push(m)),m.update&&(m.targetIdx=h,(a??=[]).push(m))}}let c=[n];if(i)for(let u of i){let f=typeof u=="function"?u:u.type,m=Kf(f);c.push(m)}return jh(0,null,$S(o,a),1,s,c,null,null,null,[r],null)}function $S(t,n){return!t&&!n?null:e=>{if(e&1&&t)for(let i of t)i.create();if(e&2&&n)for(let i of n)i.update()}}function C_(t){let n=t[uh].kind;return n==="input"||n==="twoWay"}var Rl=class extends Xy{_rootLView;_hasInputBindings;instance;hostView;changeDetectorRef;componentType;location;previousInputValues=null;_tNode;constructor(n,e,i){super(),this._rootLView=e,this._hasInputBindings=i,this._tNode=ol(e[B],Pe),this.location=vo(this._tNode,e),this.instance=Zt(this._tNode.index,e)[Fe],this.hostView=this.changeDetectorRef=new Ni(e,void 0),this.componentType=n}setInput(n,e){this._hasInputBindings;let i=this._tNode;if(this.previousInputValues??=new Map,this.previousInputValues.has(n)&&Object.is(this.previousInputValues.get(n),e))return;let r=this._rootLView,o=Xl(i,r[B],r,n,e);this.previousInputValues.set(n,e);let a=Zt(i.index,r);Qh(a,1)}get injector(){return new gr(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(n){this.hostView.onDestroy(n)}};function WS(t,n,e){let i=t.projection=[];for(let r=0;r<n.length;r++){let o=e[r];i.push(o!=null&&o.length?Array.from(o):null)}}var Ct=(()=>{class t{static __NG_ELEMENT_ID__=GS}return t})();function GS(){let t=Je();return cw(t,K())}var fh=class t extends Ct{_lContainer;_hostTNode;_hostLView;constructor(n,e,i){super(),this._lContainer=n,this._hostTNode=e,this._hostLView=i}get element(){return vo(this._hostTNode,this._hostLView)}get injector(){return new gr(this._hostTNode,this._hostLView)}get parentInjector(){let n=Sh(this._hostTNode,this._hostLView);if(B_(n)){let e=Il(n,this._hostLView),i=El(n),r=e[B].data[i+8];return new gr(r,e)}else return new gr(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(n){let e=D_(this._lContainer);return e!==null&&e[n]||null}get length(){return this._lContainer.length-Re}createEmbeddedView(n,e,i){let r,o;typeof i=="number"?r=i:i!=null&&(r=i.index,o=i.injector);let a=kl(this._lContainer,n.ssrId),s=n.createEmbeddedViewImpl(e||{},o,a);return this.insertImpl(s,r,po(this._hostTNode,a)),s}createComponent(n,e,i,r,o,a,s){let c=n&&!pI(n),l;if(c)l=e;else{let I=e||{};l=I.index,i=I.injector,r=I.projectableNodes,o=I.environmentInjector||I.ngModuleRef,a=I.directives,s=I.bindings}let u=c?n:new Oi(Mn(n)),f=i||this.parentInjector;if(!o&&u.ngModule==null){let A=(c?f:this.parentInjector).get(be,null);A&&(o=A)}let m=Mn(u.componentType??{}),h=kl(this._lContainer,m?.id??null),b=h?.firstChild??null,w=u.create(f,r,b,o,a,s);return this.insertImpl(w.hostView,l,po(this._hostTNode,h)),w}insert(n,e){return this.insertImpl(n,e,!0)}insertImpl(n,e,i){let r=n._lView;if(Sv(r)){let s=this.indexOf(n);if(s!==-1)this.detach(s);else{let c=r[We],l=new t(c,c[bt],c[We]);l.detach(l.indexOf(n))}}let o=this._adjustIndex(e),a=this._lContainer;return cs(a,r,o,i),n.attachToViewContainerRef(),tm(Bm(a),o,n),n}move(n,e){return this.insert(n,e)}indexOf(n){let e=D_(this._lContainer);return e!==null?e.indexOf(n):-1}remove(n){let e=this._adjustIndex(n,-1),i=ts(this._lContainer,e);i&&(Va(Bm(this._lContainer),e),Ql(i[B],i))}detach(n){let e=this._adjustIndex(n,-1),i=ts(this._lContainer,e);return i&&Va(Bm(this._lContainer),e)!=null?new Ni(i):null}_adjustIndex(n,e=0){return n??this.length+e}};function D_(t){return t[Ua]}function Bm(t){return t[Ua]||(t[Ua]=[])}function cw(t,n){let e,i=n[t.index];return ln(i)?e=i:(e=qy(i,n,null,t),n[t.index]=e,Vh(n,e)),ZS(e,n,t,i),new fh(e,t,n)}function qS(t,n){let e=t[Ce],i=e.createComment(""),r=qt(n,t),o=e.parentNode(r);return Sl(e,o,i,e.nextSibling(r),!1),i}var ZS=KS,QS=()=>!1;function YS(t,n,e){return QS(t,n,e)}function KS(t,n,e,i){if(t[Ai])return;let r;e.type&8?r=Gt(i):r=qS(n,e),t[Ai]=r}var mh=class t{queryList;matches=null;constructor(n){this.queryList=n}clone(){return new t(this.queryList)}setDirty(){this.queryList.setDirty()}},hh=class t{queries;constructor(n=[]){this.queries=n}createEmbeddedView(n){let e=n.queries;if(e!==null){let i=n.contentQueries!==null?n.contentQueries[0]:e.length,r=[];for(let o=0;o<i;o++){let a=e.getByIndex(o),s=this.queries[a.indexInDeclarationView];r.push(s.clone())}return new t(r)}return null}insertView(n){this.dirtyQueriesWithMatches(n)}detachView(n){this.dirtyQueriesWithMatches(n)}finishViewCreation(n){this.dirtyQueriesWithMatches(n)}dirtyQueriesWithMatches(n){for(let e=0;e<this.queries.length;e++)Xh(n,e).matches!==null&&this.queries[e].setDirty()}},Nl=class{flags;read;predicate;constructor(n,e,i=null){this.flags=e,this.read=i,typeof n=="string"?this.predicate=nk(n):this.predicate=n}},ph=class t{queries;constructor(n=[]){this.queries=n}elementStart(n,e){for(let i=0;i<this.queries.length;i++)this.queries[i].elementStart(n,e)}elementEnd(n){for(let e=0;e<this.queries.length;e++)this.queries[e].elementEnd(n)}embeddedTView(n){let e=null;for(let i=0;i<this.length;i++){let r=e!==null?e.length:0,o=this.getByIndex(i).embeddedTView(n,r);o&&(o.indexInDeclarationView=i,e!==null?e.push(o):e=[o])}return e!==null?new t(e):null}template(n,e){for(let i=0;i<this.queries.length;i++)this.queries[i].template(n,e)}getByIndex(n){return this.queries[n]}get length(){return this.queries.length}track(n){this.queries.push(n)}},gh=class t{metadata;matches=null;indexInDeclarationView=-1;crossesNgTemplate=!1;_declarationNodeIndex;_appliesToNextNode=!0;constructor(n,e=-1){this.metadata=n,this._declarationNodeIndex=e}elementStart(n,e){this.isApplyingToNode(e)&&this.matchTNode(n,e)}elementEnd(n){this._declarationNodeIndex===n.index&&(this._appliesToNextNode=!1)}template(n,e){this.elementStart(n,e)}embeddedTView(n,e){return this.isApplyingToNode(n)?(this.crossesNgTemplate=!0,this.addMatch(-n.index,e),new t(this.metadata)):null}isApplyingToNode(n){if(this._appliesToNextNode&&(this.metadata.flags&1)!==1){let e=this._declarationNodeIndex,i=n.parent;for(;i!==null&&i.type&8&&i.index!==e;)i=i.parent;return e===(i!==null?i.index:-1)}return this._appliesToNextNode}matchTNode(n,e){let i=this.metadata.predicate;if(Array.isArray(i))for(let r=0;r<i.length;r++){let o=i[r];this.matchTNodeWithReadOption(n,e,XS(e,o)),this.matchTNodeWithReadOption(n,e,wl(e,n,o,!1,!1))}else i===ut?e.type&4&&this.matchTNodeWithReadOption(n,e,-1):this.matchTNodeWithReadOption(n,e,wl(e,n,i,!1,!1))}matchTNodeWithReadOption(n,e,i){if(i!==null){let r=this.metadata.read;if(r!==null)if(r===O||r===Ct||r===ut&&e.type&4)this.addMatch(e.index,-2);else{let o=wl(e,n,r,!1,!1);o!==null&&this.addMatch(e.index,o)}else this.addMatch(e.index,i)}}addMatch(n,e){this.matches===null?this.matches=[n,e]:this.matches.push(n,e)}};function XS(t,n){let e=t.localNames;if(e!==null){for(let i=0;i<e.length;i+=2)if(e[i]===n)return e[i+1]}return null}function JS(t,n){return t.type&11?vo(t,n):t.type&4?Jl(t,n):null}function ek(t,n,e,i){return e===-1?JS(n,t):e===-2?tk(t,n,i):Xa(t,t[B],e,n)}function tk(t,n,e){if(e===O)return vo(n,t);if(e===ut)return Jl(n,t);if(e===Ct)return cw(n,t)}function lw(t,n,e,i){let r=n[Tn].queries[i];if(r.matches===null){let o=t.data,a=e.matches,s=[];for(let c=0;a!==null&&c<a.length;c+=2){let l=a[c];if(l<0)s.push(null);else{let u=o[l];s.push(ek(n,u,a[c+1],e.metadata.read))}}r.matches=s}return r.matches}function bh(t,n,e,i){let r=t.queries.getByIndex(e),o=r.matches;if(o!==null){let a=lw(t,n,r,e);for(let s=0;s<o.length;s+=2){let c=o[s];if(c>0)i.push(a[s/2]);else{let l=o[s+1],u=n[-c];for(let f=Re;f<u.length;f++){let m=u[f];m[ki]===m[We]&&bh(m[B],m,l,i)}if(u[mr]!==null){let f=u[mr];for(let m=0;m<f.length;m++){let h=f[m];bh(h[B],h,l,i)}}}}}return i}function Kh(t,n){return t[Tn].queries[n].queryList}function dw(t,n,e){let i=new ii((e&4)===4);return Av(t,n,i,i.destroy),(n[Tn]??=new hh).queries.push(new mh(i))-1}function uw(t,n,e){let i=Me();return i.firstCreatePass&&(mw(i,new Nl(t,n,e),-1),(n&2)===2&&(i.staticViewQueries=!0)),dw(i,K(),n)}function fw(t,n,e,i){let r=Me();if(r.firstCreatePass){let o=Je();mw(r,new Nl(n,e,i),o.index),ik(r,t),(e&2)===2&&(r.staticContentQueries=!0)}return dw(r,K(),e)}function nk(t){return t.split(",").map(n=>n.trim())}function mw(t,n,e){t.queries===null&&(t.queries=new ph),t.queries.track(new gh(n,e))}function ik(t,n){let e=t.contentQueries||(t.contentQueries=[]),i=e.length?e[e.length-1]:-1;n!==i&&e.push(t.queries.length-1,n)}function Xh(t,n){return t.queries.getByIndex(n)}function hw(t,n){let e=t[B],i=Xh(e,n);return i.crossesNgTemplate?bh(e,t,n,[]):lw(e,t,i,n)}function pw(t,n,e){let i,r=wa(()=>{i._dirtyCounter();let o=rk(i,t);if(n&&o===void 0)throw new D(-951,!1);return o});return i=r[je],i._dirtyCounter=V(0),i._flatValue=void 0,r}function Jh(t){return pw(!0,!1,t)}function ep(t){return pw(!0,!0,t)}function gw(t,n){let e=t[je];e._lView=K(),e._queryIndex=n,e._queryList=Kh(e._lView,n),e._queryList.onDirty(()=>e._dirtyCounter.update(i=>i+1))}function rk(t,n){let e=t._lView,i=t._queryIndex;if(e===void 0||i===void 0||e[Z]&4)return n?void 0:lt;let r=Kh(e,i),o=hw(e,i);return r.reset(o,Z_),n?r.first:r._changesDetected||t._flatValue===void 0?t._flatValue=r.toArray():t._flatValue}var Fn=class{},td=class{};var Ol=class extends Fn{ngModuleType;_parent;_bootstrapComponents=[];_r3Injector;instance;destroyCbs=[];componentFactoryResolver=new Al(this);constructor(n,e,i,r=!0){super(),this.ngModuleType=n,this._parent=e;let o=Yf(n);this._bootstrapComponents=by(o.bootstrap),this._r3Injector=Tm(n,e,[{provide:Fn,useValue:this},{provide:ls,useValue:this.componentFactoryResolver},...i],ja(n),new Set(["environment"])),r&&this.resolveInjectorInitializers()}resolveInjectorInitializers(){this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(this.ngModuleType)}get injector(){return this._r3Injector}destroy(){let n=this._r3Injector;!n.destroyed&&n.destroy(),this.destroyCbs.forEach(e=>e()),this.destroyCbs=null}onDestroy(n){this.destroyCbs.push(n)}},Fl=class extends td{moduleType;constructor(n){super(),this.moduleType=n}create(n){return new Ol(this.moduleType,n,[])}};var ns=class extends Fn{injector;componentFactoryResolver=new Al(this);instance=null;constructor(n){super();let e=new sr([...n.providers,{provide:Fn,useValue:this},{provide:ls,useValue:this.componentFactoryResolver}],n.parent||no(),n.debugName,new Set(["environment"]));this.injector=e,n.runEnvironmentInitializers&&e.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(n){this.injector.onDestroy(n)}};function Co(t,n,e=null){return new ns({providers:t,parent:n,debugName:e,runEnvironmentInitializers:!0}).injector}var ok=(()=>{class t{_injector;cachedInjectors=new Map;constructor(e){this._injector=e}getOrCreateStandaloneInjector(e){if(!e.standalone)return null;if(!this.cachedInjectors.has(e)){let i=rm(!1,e.type),r=i.length>0?Co([i],this._injector,""):null;this.cachedInjectors.set(e,r)}return this.cachedInjectors.get(e)}ngOnDestroy(){try{for(let e of this.cachedInjectors.values())e!==null&&e.destroy()}finally{this.cachedInjectors.clear()}}static \u0275prov=p({token:t,providedIn:"environment",factory:()=>new t(T(be))})}return t})();function E(t){return rs(()=>{let n=bw(t),e=W(v({},n),{decls:t.decls,vars:t.vars,template:t.template,consts:t.consts||null,ngContentSelectors:t.ngContentSelectors,onPush:t.changeDetection===kh.OnPush,directiveDefs:null,pipeDefs:null,dependencies:n.standalone&&t.dependencies||null,getStandaloneInjector:n.standalone?r=>r.get(ok).getOrCreateStandaloneInjector(e):null,getExternalStyles:null,signals:t.signals??!1,data:t.data||{},encapsulation:t.encapsulation||mn.Emulated,styles:t.styles||lt,_:null,schemas:t.schemas||null,tView:null,id:""});n.standalone&&Ln("NgStandalone"),vw(e);let i=t.dependencies;return e.directiveDefs=x_(i,ak),e.pipeDefs=x_(i,dv),e.id=lk(e),e})}function ak(t){return Mn(t)||Kf(t)}function j(t){return rs(()=>({type:t.type,bootstrap:t.bootstrap||lt,declarations:t.declarations||lt,imports:t.imports||lt,exports:t.exports||lt,transitiveCompileScopes:null,schemas:t.schemas||null,id:t.id||null}))}function sk(t,n){if(t==null)return Mi;let e={};for(let i in t)if(t.hasOwnProperty(i)){let r=t[i],o,a,s,c;Array.isArray(r)?(s=r[0],o=r[1],a=r[2]??o,c=r[3]||null):(o=r,a=r,s=Gl.None,c=null),e[o]=[i,s,c],n[o]=a}return e}function ck(t){if(t==null)return Mi;let n={};for(let e in t)t.hasOwnProperty(e)&&(n[t[e]]=e);return n}function S(t){return rs(()=>{let n=bw(t);return vw(n),n})}function bw(t){let n={};return{type:t.type,providersResolver:null,viewProvidersResolver:null,factory:null,hostBindings:t.hostBindings||null,hostVars:t.hostVars||0,hostAttrs:t.hostAttrs||null,contentQueries:t.contentQueries||null,declaredInputs:n,inputConfig:t.inputs||Mi,exportAs:t.exportAs||null,standalone:t.standalone??!0,signals:t.signals===!0,selectors:t.selectors||lt,viewQuery:t.viewQuery||null,features:t.features||null,setInput:null,resolveHostDirectives:null,hostDirectives:null,controlDef:null,inputs:sk(t.inputs,n),outputs:ck(t.outputs),debugInfo:null}}function vw(t){t.features?.forEach(n=>n(t))}function x_(t,n){return t?()=>{let e=typeof t=="function"?t():t,i=[];for(let r of e){let o=n(r);o!==null&&i.push(o)}return i}:null}function lk(t){let n=0,e=typeof t.consts=="function"?"":t.consts,i=[t.selectors,t.ngContentSelectors,t.hostVars,t.hostAttrs,e,t.vars,t.decls,t.encapsulation,t.standalone,t.signals,t.exportAs,JSON.stringify(t.inputs),JSON.stringify(t.outputs),Object.getOwnPropertyNames(t.type.prototype),!!t.contentQueries,!!t.viewQuery];for(let o of i.join("|"))n=Math.imul(31,n)+o.charCodeAt(0)<<0;return n+=2147483648,"c"+n}function dk(t){return Object.getPrototypeOf(t.prototype).constructor}function ue(t){let n=dk(t.type),e=!0,i=[t];for(;n;){let r;if(Rn(t))r=n.\u0275cmp||n.\u0275dir;else{if(n.\u0275cmp)throw new D(903,!1);r=n.\u0275dir}if(r){if(e){i.push(r);let a=t;a.inputs=Vm(t.inputs),a.declaredInputs=Vm(t.declaredInputs),a.outputs=Vm(t.outputs);let s=r.hostBindings;s&&pk(t,s);let c=r.viewQuery,l=r.contentQueries;if(c&&mk(t,c),l&&hk(t,l),uk(t,r),lv(t.outputs,r.outputs),Rn(r)&&r.data.animation){let u=t.data;u.animation=(u.animation||[]).concat(r.data.animation)}}let o=r.features;if(o)for(let a=0;a<o.length;a++){let s=o[a];s&&s.ngInherit&&s(t),s===ue&&(e=!1)}}n=Object.getPrototypeOf(n)}fk(i)}function uk(t,n){for(let e in n.inputs){if(!n.inputs.hasOwnProperty(e)||t.inputs.hasOwnProperty(e))continue;let i=n.inputs[e];i!==void 0&&(t.inputs[e]=i,t.declaredInputs[e]=n.declaredInputs[e])}}function fk(t){let n=0,e=null;for(let i=t.length-1;i>=0;i--){let r=t[i];r.hostVars=n+=r.hostVars,r.hostAttrs=mo(r.hostAttrs,e=mo(e,r.hostAttrs))}}function Vm(t){return t===Mi?{}:t===lt?[]:t}function mk(t,n){let e=t.viewQuery;e?t.viewQuery=(i,r)=>{n(i,r),e(i,r)}:t.viewQuery=n}function hk(t,n){let e=t.contentQueries;e?t.contentQueries=(i,r,o)=>{n(i,r,o),e(i,r,o)}:t.contentQueries=n}function pk(t,n){let e=t.hostBindings;e?t.hostBindings=(i,r)=>{n(i,r),e(i,r)}:t.hostBindings=n}function _w(t,n,e,i,r,o,a,s){if(e.firstCreatePass){t.mergedAttrs=mo(t.mergedAttrs,t.attrs);let u=t.tView=jh(2,t,r,o,a,e.directiveRegistry,e.pipeRegistry,null,e.schemas,e.consts,null);e.queries!==null&&(e.queries.template(e,t),u.queries=e.queries.embeddedTView(t))}s&&(t.flags|=s),ao(t,!1);let c=bk(e,n,t,i);fl()&&Wh(e,n,c,t),ho(c,n);let l=qy(c,n,c,t);n[i+Pe]=l,Vh(n,l),YS(l,t,n)}function gk(t,n,e,i,r,o,a,s,c,l,u){let f=e+Pe,m;return n.firstCreatePass?(m=wo(n,f,4,a||null,s||null),_m()&&ew(n,t,m,Bt(n.consts,l),Oy),P_(n,m)):m=n.data[f],_w(m,t,n,e,i,r,o,c),za(m)&&qh(n,t,m),l!=null&&Kl(t,m,u),m}function go(t,n,e,i,r,o,a,s,c,l,u){let f=e+Pe,m;if(n.firstCreatePass){if(m=wo(n,f,4,a||null,s||null),l!=null){let h=Bt(n.consts,l);m.localNames=[];for(let b=0;b<h.length;b+=2)m.localNames.push(h[b],-1)}}else m=n.data[f];return _w(m,t,n,e,i,r,o,c),l!=null&&Kl(t,m,u),m}function St(t,n,e,i,r,o,a,s){let c=K(),l=Me(),u=Bt(l.consts,o);return gk(c,l,t,n,e,i,r,u,void 0,a,s),St}function nd(t,n,e,i,r,o,a,s){let c=K(),l=Me(),u=Bt(l.consts,o);return go(c,l,t,n,e,i,r,u,void 0,a,s),nd}var bk=vk;function vk(t,n,e,i){return ml(!0),n[Ce].createComment("")}var id=(()=>{class t{log(e){console.log(e)}warn(e){console.warn(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"platform"})}return t})();function Fi(t){return typeof t=="function"&&t[je]!==void 0}function tp(t){return Fi(t)&&typeof t.set=="function"}var np=new g("");function Pi(t){return!!t&&typeof t.then=="function"}function ip(t){return!!t&&typeof t.subscribe=="function"}var rp=new g("");function rd(t){return Sn([{provide:rp,multi:!0,useValue:t}])}var op=(()=>{class t{resolve;reject;initialized=!1;done=!1;donePromise=new Promise((e,i)=>{this.resolve=e,this.reject=i});appInits=d(rp,{optional:!0})??[];injector=d(G);constructor(){}runInitializers(){if(this.initialized)return;let e=[];for(let r of this.appInits){let o=Ge(this.injector,r);if(Pi(o))e.push(o);else if(ip(o)){let a=new Promise((s,c)=>{o.subscribe({complete:s,error:c})});e.push(a)}}let i=()=>{this.done=!0,this.resolve()};Promise.all(e).then(()=>{i()}).catch(r=>{this.reject(r)}),e.length===0&&i(),this.initialized=!0}static \u0275fac=function(i){return new(i||t)};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),ds=new g("");function yw(){hf(()=>{let t="";throw new D(600,t)})}function ww(t){return t.isBoundToModule}var _k=10;var Vt=(()=>{class t{_runningTick=!1;_destroyed=!1;_destroyListeners=[];_views=[];internalErrorHandler=d(Qt);afterRenderManager=d(Zl);zonelessEnabled=d(Za);rootEffectScheduler=d(pl);dirtyFlags=0;tracingSnapshot=null;allTestViews=new Set;autoDetectTestViews=new Set;includeAllTestViews=!1;afterTick=new x;get allViews(){return[...(this.includeAllTestViews?this.allTestViews:this.autoDetectTestViews).keys(),...this._views]}get destroyed(){return this._destroyed}componentTypes=[];components=[];internalPendingTask=d(ni);get isStable(){return this.internalPendingTask.hasPendingTasksObservable.pipe(X(e=>!e))}constructor(){d(pn,{optional:!0})}whenStable(){let e;return new Promise(i=>{e=this.isStable.subscribe({next:r=>{r&&i()}})}).finally(()=>{e.unsubscribe()})}_injector=d(be);_rendererFactory=null;get injector(){return this._injector}bootstrap(e,i){return this.bootstrapImpl(e,i)}bootstrapImpl(e,i,r=G.NULL){return this._injector.get(k).run(()=>{ve(de.BootstrapComponentStart);let a=e instanceof ed;if(!this._injector.get(op).done){let b="";throw new D(405,b)}let c;a?c=e:c=this._injector.get(ls).resolveComponentFactory(e),this.componentTypes.push(c.componentType);let l=ww(c)?void 0:this._injector.get(Fn),u=i||c.selector,f=c.create(r,[],u,l),m=f.location.nativeElement,h=f.injector.get(np,null);return h?.registerApplication(m),f.onDestroy(()=>{this.detachView(f.hostView),Ka(this.components,f),h?.unregisterApplication(m)}),this._loadComponent(f),ve(de.BootstrapComponentEnd,f),f})}tick(){this.zonelessEnabled||(this.dirtyFlags|=1),this._tick()}_tick(){ve(de.ChangeDetectionStart),this.tracingSnapshot!==null?this.tracingSnapshot.run(ql.CHANGE_DETECTION,this.tickImpl):this.tickImpl()}tickImpl=()=>{if(this._runningTick)throw ve(de.ChangeDetectionEnd),new D(101,!1);let e=F(null);try{this._runningTick=!0,this.synchronize()}finally{this._runningTick=!1,this.tracingSnapshot?.dispose(),this.tracingSnapshot=null,F(e),this.afterTick.next(),ve(de.ChangeDetectionEnd)}};synchronize(){this._rendererFactory===null&&!this._injector.destroyed&&(this._rendererFactory=this._injector.get(Ve,null,{optional:!0}));let e=0;for(;this.dirtyFlags!==0&&e++<_k;){ve(de.ChangeDetectionSyncStart);try{this.synchronizeOnce()}finally{ve(de.ChangeDetectionSyncEnd)}}}synchronizeOnce(){this.dirtyFlags&16&&(this.dirtyFlags&=-17,this.rootEffectScheduler.flush());let e=!1;if(this.dirtyFlags&7){let i=!!(this.dirtyFlags&1);this.dirtyFlags&=-8,this.dirtyFlags|=8;for(let{_lView:r}of this.allViews){if(!i&&!$a(r))continue;let o=i&&!this.zonelessEnabled?0:1;zy(r,o),e=!0}if(this.dirtyFlags&=-5,this.syncDirtyFlagsWithViews(),this.dirtyFlags&23)return}e||(this._rendererFactory?.begin?.(),this._rendererFactory?.end?.()),this.dirtyFlags&8&&(this.dirtyFlags&=-9,this.afterRenderManager.execute()),this.syncDirtyFlagsWithViews()}syncDirtyFlagsWithViews(){if(this.allViews.some(({_lView:e})=>$a(e))){this.dirtyFlags|=2;return}else this.dirtyFlags&=-8}attachView(e){let i=e;this._views.push(i),i.attachToAppRef(this)}detachView(e){let i=e;Ka(this._views,i),i.detachFromAppRef()}_loadComponent(e){this.attachView(e.hostView);try{this.tick()}catch(r){this.internalErrorHandler(r)}this.components.push(e),this._injector.get(ds,[]).forEach(r=>r(e))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(e=>e()),this._views.slice().forEach(e=>e.destroy())}finally{this._destroyed=!0,this._views=[],this._destroyListeners=[]}}onDestroy(e){return this._destroyListeners.push(e),()=>Ka(this._destroyListeners,e)}destroy(){if(this._destroyed)throw new D(406,!1);let e=this._injector;e.destroy&&!e.destroyed&&e.destroy()}get viewCount(){return this._views.length}static \u0275fac=function(i){return new(i||t)};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Ka(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}function od(t,n){let e=K(),i=ei();if(jn(e,i,n)){let r=Me(),o=so();if(Xl(o,r,e,t,n))An(o)&&Ny(e,o.index);else{let s=qt(o,e);Fy(e[Ce],s,null,o.value,t,n,null)}}return od}function re(t,n,e,i){let r=K(),o=ei();if(jn(r,o,n)){let a=Me(),s=so();XM(s,r,t,n,e,i)}return re}var vh=class{destroy(n){}updateValue(n,e){}swap(n,e){let i=Math.min(n,e),r=Math.max(n,e),o=this.detach(r);if(r-i>1){let a=this.detach(i);this.attach(i,o),this.attach(r,a)}else this.attach(i,o)}move(n,e){this.attach(e,this.detach(n))}};function Hm(t,n,e,i,r){return t===e&&Object.is(n,i)?1:Object.is(r(t,n),r(e,i))?-1:0}function yk(t,n,e,i){let r,o,a=0,s=t.length-1,c=void 0;if(Array.isArray(n)){F(i);let l=n.length-1;for(F(null);a<=s&&a<=l;){let u=t.at(a),f=n[a],m=Hm(a,u,a,f,e);if(m!==0){m<0&&t.updateValue(a,f),a++;continue}let h=t.at(s),b=n[l],w=Hm(s,h,l,b,e);if(w!==0){w<0&&t.updateValue(s,b),s--,l--;continue}let I=e(a,u),A=e(s,h),he=e(a,f);if(Object.is(he,A)){let Ke=e(l,b);Object.is(Ke,I)?(t.swap(a,s),t.updateValue(s,b),l--,s--):t.move(s,a),t.updateValue(a,f),a++;continue}if(r??=new Pl,o??=I_(t,a,s,e),_h(t,r,a,he))t.updateValue(a,f),a++,s++;else if(o.has(he))r.set(I,t.detach(a)),s--;else{let Ke=t.create(a,n[a]);t.attach(a,Ke),a++,s++}}for(;a<=l;)E_(t,r,e,a,n[a]),a++}else if(n!=null){F(i);let l=n[Symbol.iterator]();F(null);let u=l.next();for(;!u.done&&a<=s;){let f=t.at(a),m=u.value,h=Hm(a,f,a,m,e);if(h!==0)h<0&&t.updateValue(a,m),a++,u=l.next();else{r??=new Pl,o??=I_(t,a,s,e);let b=e(a,m);if(_h(t,r,a,b))t.updateValue(a,m),a++,s++,u=l.next();else if(!o.has(b))t.attach(a,t.create(a,m)),a++,s++,u=l.next();else{let w=e(a,f);r.set(w,t.detach(a)),s--}}}for(;!u.done;)E_(t,r,e,t.length,u.value),u=l.next()}for(;a<=s;)t.destroy(t.detach(s--));r?.forEach(l=>{t.destroy(l)})}function _h(t,n,e,i){return n!==void 0&&n.has(i)?(t.attach(e,n.get(i)),n.delete(i),!0):!1}function E_(t,n,e,i,r){if(_h(t,n,i,e(i,r)))t.updateValue(i,r);else{let o=t.create(i,r);t.attach(i,o)}}function I_(t,n,e,i){let r=new Set;for(let o=n;o<=e;o++)r.add(i(o,t.at(o)));return r}var Pl=class{kvMap=new Map;_vMap=void 0;has(n){return this.kvMap.has(n)}delete(n){if(!this.has(n))return!1;let e=this.kvMap.get(n);return this._vMap!==void 0&&this._vMap.has(e)?(this.kvMap.set(n,this._vMap.get(e)),this._vMap.delete(e)):this.kvMap.delete(n),!0}get(n){return this.kvMap.get(n)}set(n,e){if(this.kvMap.has(n)){let i=this.kvMap.get(n);this._vMap===void 0&&(this._vMap=new Map);let r=this._vMap;for(;r.has(i);)i=r.get(i);r.set(i,e)}else this.kvMap.set(n,e)}forEach(n){for(let[e,i]of this.kvMap)if(n(i,e),this._vMap!==void 0){let r=this._vMap;for(;r.has(i);)i=r.get(i),n(i,e)}}};function _e(t,n,e,i,r,o,a,s){Ln("NgControlFlow");let c=K(),l=Me(),u=Bt(l.consts,o);return go(c,l,t,n,e,i,r,u,256,a,s),ap}function ap(t,n,e,i,r,o,a,s){Ln("NgControlFlow");let c=K(),l=Me(),u=Bt(l.consts,o);return go(c,l,t,n,e,i,r,u,512,a,s),ap}function ye(t,n){Ln("NgControlFlow");let e=K(),i=ei(),r=e[i]!==hn?e[i]:-1,o=r!==-1?Ll(e,Pe+r):void 0,a=0;if(jn(e,i,t)){let s=F(null);try{if(o!==void 0&&Qy(o,a),t!==-1){let c=Pe+t,l=Ll(e,c),u=Dh(e[B],c),f=Ky(l,u,e),m=ss(e,u,n,{dehydratedView:f});cs(l,m,a,po(u,f))}}finally{F(s)}}else if(o!==void 0){let s=Zy(o,a);s!==void 0&&(s[Fe]=n)}}var yh=class{lContainer;$implicit;$index;constructor(n,e,i){this.lContainer=n,this.$implicit=e,this.$index=i}get $count(){return this.lContainer.length-Re}};function ad(t,n){return n}var wh=class{hasEmptyBlock;trackByFn;liveCollection;constructor(n,e,i){this.hasEmptyBlock=n,this.trackByFn=e,this.liveCollection=i}};function Do(t,n,e,i,r,o,a,s,c,l,u,f,m){Ln("NgControlFlow");let h=K(),b=Me(),w=c!==void 0,I=K(),A=s?a.bind(I[vt][Fe]):a,he=new wh(w,A);I[Pe+t]=he,go(h,b,t+1,n,e,i,r,Bt(b.consts,o),256),w&&go(h,b,t+2,c,l,u,f,Bt(b.consts,m),512)}var Ch=class extends vh{lContainer;hostLView;templateTNode;operationsCounter=void 0;needsIndexUpdate=!1;constructor(n,e,i){super(),this.lContainer=n,this.hostLView=e,this.templateTNode=i}get length(){return this.lContainer.length-Re}at(n){return this.getLView(n)[Fe].$implicit}attach(n,e){let i=e[lr];this.needsIndexUpdate||=n!==this.length,cs(this.lContainer,e,n,po(this.templateTNode,i)),wk(this.lContainer,n)}detach(n){return this.needsIndexUpdate||=n!==this.length-1,Ck(this.lContainer,n),Dk(this.lContainer,n)}create(n,e){let i=kl(this.lContainer,this.templateTNode.tView.ssrId);return ss(this.hostLView,this.templateTNode,new yh(this.lContainer,e,n),{dehydratedView:i})}destroy(n){Ql(n[B],n)}updateValue(n,e){this.getLView(n)[Fe].$implicit=e}reset(){this.needsIndexUpdate=!1}updateIndexes(){if(this.needsIndexUpdate)for(let n=0;n<this.length;n++)this.getLView(n)[Fe].$index=n}getLView(n){return xk(this.lContainer,n)}};function xo(t){let n=F(null),e=ti();try{let i=K(),r=i[B],o=i[e],a=e+1,s=Ll(i,a);if(o.liveCollection===void 0){let l=Dh(r,a);o.liveCollection=new Ch(s,i,l)}else o.liveCollection.reset();let c=o.liveCollection;if(yk(c,t,o.trackByFn,n),c.updateIndexes(),o.hasEmptyBlock){let l=ei(),u=c.length===0;if(jn(i,l,u)){let f=e+2,m=Ll(i,f);if(u){let h=Dh(r,f),b=Ky(m,h,i),w=ss(i,h,void 0,{dehydratedView:b});cs(m,w,0,po(h,b))}else r.firstUpdatePass&&wS(m),Qy(m,0)}}}finally{F(n)}}function Ll(t,n){return t[n]}function wk(t,n){if(t.length<=Re)return;let e=Re+n,i=t[e],r=i?i[Ti]:void 0;if(i&&r&&r.detachedLeaveAnimationFns&&r.detachedLeaveAnimationFns.length>0){let o=i[Kn];AM(o,r),vr.delete(i[Xn]),r.detachedLeaveAnimationFns=void 0}}function Ck(t,n){if(t.length<=Re)return;let e=Re+n,i=t[e],r=i?i[Ti]:void 0;r&&r.leave&&r.leave.size>0&&(r.detachedLeaveAnimationFns=[])}function Dk(t,n){return ts(t,n)}function xk(t,n){return Zy(t,n)}function Dh(t,n){return ol(t,n)}function se(t,n,e){let i=K(),r=ei();if(jn(i,r,n)){let o=Me(),a=so();Ay(a,i,t,n,i[Ce],e)}return se}function xh(t,n,e,i,r){Xl(n,t,e,r?"class":"style",i)}function _(t,n,e,i){let r=K(),o=r[B],a=t+Pe,s=o.firstCreatePass?nw(a,r,2,n,Oy,_m(),e,i):o.data[a];if(An(s)){let c=r[kn].tracingService;if(c&&c.componentCreate){let l=o.data[s.directiveStart+s.componentOffset];return c.componentCreate(aw(l),()=>(M_(t,n,r,s,i),_))}}return M_(t,n,r,s,i),_}function M_(t,n,e,i,r){if(Py(i,e,t,n,Cw),za(i)){let o=e[B];qh(o,e,i),ay(o,i,e)}r!=null&&Kl(e,i)}function y(){let t=Me(),n=Je(),e=Ly(n);return t.firstCreatePass&&iw(t,e),wm(e)&&Cm(),vm(),e.classesWithoutHost!=null&&wI(e)&&xh(t,e,K(),e.classesWithoutHost,!0),e.stylesWithoutHost!=null&&CI(e)&&xh(t,e,K(),e.stylesWithoutHost,!1),y}function fe(t,n,e,i){return _(t,n,e,i),y(),fe}function kt(t,n,e,i){let r=K(),o=r[B],a=t+Pe,s=o.firstCreatePass?FS(a,o,2,n,e,i):o.data[a];return Py(s,r,t,n,Cw),i!=null&&Kl(r,s),kt}function Tt(){let t=Je(),n=Ly(t);return wm(n)&&Cm(),vm(),Tt}function Yt(t,n,e,i){return kt(t,n,e,i),Tt(),Yt}var Cw=(t,n,e,i,r)=>(ml(!0),my(n[Ce],i,Wv()));function Bn(){return K()}function gn(t,n,e){let i=K(),r=ei();if(jn(i,r,n)){let o=Me(),a=so();Ry(a,i,t,n,i[Ce],e)}return gn}var us="en-US";var Ek=us;function Dw(t){typeof t=="string"&&(Ek=t.toLowerCase().replace(/_/g,"-"))}function H(t,n,e){let i=K(),r=Me(),o=Je();return xw(r,i,i[Ce],o,t,n,e),H}function fs(t,n,e){let i=K(),r=Me(),o=Je();return(o.type&3||e)&&rw(o,r,i,e,i[Ce],t,n,Dl(o,i,n)),fs}function xw(t,n,e,i,r,o,a){let s=!0,c=null;if((i.type&3||a)&&(c??=Dl(i,n,o),rw(i,t,n,a,e,r,o,c)&&(s=!1)),s){let l=i.outputs?.[r],u=i.hostDirectiveOutputs?.[r];if(u&&u.length)for(let f=0;f<u.length;f+=2){let m=u[f],h=u[f+1];c??=Dl(i,n,o),w_(i,n,m,h,r,c)}if(l&&l.length)for(let f of l)c??=Dl(i,n,o),w_(i,n,f,r,r,c)}}function me(t=1){return $v(t)}function Ik(t,n){let e=null,i=gM(t);for(let r=0;r<n.length;r++){let o=n[r];if(o==="*"){e=r;continue}if(i===null?_y(t,o,!0):_M(i,o))return r}return e}function De(t){let n=K()[vt][bt];if(!n.projection){let e=t?t.length:1,i=n.projection=gv(e,null),r=i.slice(),o=n.child;for(;o!==null;){if(o.type!==128){let a=t?Ik(o,t):0;a!==null&&(r[a]?r[a].projectionNext=o:i[a]=o,r[a]=o)}o=o.next}}}function Q(t,n=0,e,i,r,o){let a=K(),s=Me(),c=i?t+1:null;c!==null&&go(a,s,c,i,r,o,null,e);let l=wo(s,Pe+t,16,null,e||null);l.projection===null&&(l.projection=n),Em();let f=!a[lr]||ym();a[vt][bt].projection[l.projection]===null&&c!==null?Mk(a,s,c):f&&!zl(l)&&UM(s,a,l)}function Mk(t,n,e){let i=Pe+e,r=n.data[i],o=t[i],a=kl(o,r.tView.ssrId),s=ss(t,r,void 0,{dehydratedView:a});cs(o,s,0,po(r,a))}function Dt(t,n,e,i){return fw(t,n,e,i),Dt}function et(t,n,e){return uw(t,n,e),et}function U(t){let n=K(),e=Me(),i=ll();Wa(i+1);let r=Xh(e,i);if(t.dirty&&Mv(n)===((r.metadata.flags&2)===2)){if(r.matches===null)t.reset([]);else{let o=hw(n,i);t.reset(o,Z_),t.notifyOnChanges()}return!0}return!1}function z(){return Kh(K(),ll())}function sd(t,n,e,i,r){return gw(n,fw(t,e,i,r)),sd}function Vn(t,n,e,i){return gw(t,uw(n,e,i)),Vn}function Hn(t=1){Wa(ll()+t)}function Kt(t){let n=Fv();return Iv(n,Pe+t)}function vl(t,n){return t<<17|n<<2}function _r(t){return t>>17&32767}function Sk(t){return(t&2)==2}function kk(t,n){return t&131071|n<<17}function Eh(t){return t|2}function bo(t){return(t&131068)>>2}function Um(t,n){return t&-131069|n<<2}function Tk(t){return(t&1)===1}function Ih(t){return t|1}function Ak(t,n,e,i,r,o){let a=o?n.classBindings:n.styleBindings,s=_r(a),c=bo(a);t[i]=e;let l=!1,u;if(Array.isArray(e)){let f=e;u=f[1],(u===null||to(f,u)>0)&&(l=!0)}else u=e;if(r)if(c!==0){let m=_r(t[s+1]);t[i+1]=vl(m,s),m!==0&&(t[m+1]=Um(t[m+1],i)),t[s+1]=kk(t[s+1],i)}else t[i+1]=vl(s,0),s!==0&&(t[s+1]=Um(t[s+1],i)),s=i;else t[i+1]=vl(c,0),s===0?s=i:t[c+1]=Um(t[c+1],i),c=i;l&&(t[i+1]=Eh(t[i+1])),S_(t,u,i,!0),S_(t,u,i,!1),Rk(n,u,t,i,o),a=vl(s,c),o?n.classBindings=a:n.styleBindings=a}function Rk(t,n,e,i,r){let o=r?t.residualClasses:t.residualStyles;o!=null&&typeof n=="string"&&to(o,n)>=0&&(e[i+1]=Ih(e[i+1]))}function S_(t,n,e,i){let r=t[e+1],o=n===null,a=i?_r(r):bo(r),s=!1;for(;a!==0&&(s===!1||o);){let c=t[a],l=t[a+1];Nk(c,n)&&(s=!0,t[a+1]=i?Ih(l):Eh(l)),a=i?_r(l):bo(l)}s&&(t[e+1]=i?Eh(r):Ih(r))}function Nk(t,n){return t===null||n==null||(Array.isArray(t)?t[1]:t)===n?!0:Array.isArray(t)&&typeof n=="string"?to(t,n)>=0:!1}var fn={textEnd:0,key:0,keyEnd:0,value:0,valueEnd:0};function Ok(t){return t.substring(fn.key,fn.keyEnd)}function Fk(t){return Pk(t),Ew(t,Iw(t,0,fn.textEnd))}function Ew(t,n){let e=fn.textEnd;return e===n?-1:(n=fn.keyEnd=Lk(t,fn.key=n,e),Iw(t,n,e))}function Pk(t){fn.key=0,fn.keyEnd=0,fn.value=0,fn.valueEnd=0,fn.textEnd=t.length}function Iw(t,n,e){for(;n<e&&t.charCodeAt(n)<=32;)n++;return n}function Lk(t,n,e){for(;n<e&&t.charCodeAt(n)>32;)n++;return n}function Eo(t,n,e){return Mw(t,n,e,!1),Eo}function $(t,n){return Mw(t,n,null,!0),$}function Ht(t){Bk(Wk,jk,t,!0)}function jk(t,n){for(let e=Fk(n);e>=0;e=Ew(n,e))nl(t,Ok(n),!0)}function Mw(t,n,e,i){let r=K(),o=Me(),a=Mm(2);if(o.firstUpdatePass&&kw(o,t,a,i),n!==hn&&jn(r,a,n)){let s=o.data[ti()];Tw(o,s,r,r[Ce],t,r[a+1]=qk(n,e),i,a)}}function Bk(t,n,e,i){let r=Me(),o=Mm(2);r.firstUpdatePass&&kw(r,null,o,i);let a=K();if(e!==hn&&jn(a,o,e)){let s=r.data[ti()];if(Aw(s,i)&&!Sw(r,o)){let c=i?s.classesWithoutHost:s.stylesWithoutHost;c!==null&&(e=Kc(c,e||"")),xh(r,s,a,e,i)}else Gk(r,s,a,a[Ce],a[o+1],a[o+1]=$k(t,n,e),i,o)}}function Sw(t,n){return n>=t.expandoStartIndex}function kw(t,n,e,i){let r=t.data;if(r[e+1]===null){let o=r[ti()],a=Sw(t,e);Aw(o,i)&&n===null&&!a&&(n=!1),n=Vk(r,o,n,i),Ak(r,o,n,e,a,i)}}function Vk(t,n,e,i){let r=Vv(t),o=i?n.residualClasses:n.residualStyles;if(r===null)(i?n.classBindings:n.styleBindings)===0&&(e=zm(null,t,n,e,i),e=is(e,n.attrs,i),o=null);else{let a=n.directiveStylingLast;if(a===-1||t[a]!==r)if(e=zm(r,t,n,e,i),o===null){let c=Hk(t,n,i);c!==void 0&&Array.isArray(c)&&(c=zm(null,t,n,c[1],i),c=is(c,n.attrs,i),Uk(t,n,i,c))}else o=zk(t,n,i)}return o!==void 0&&(i?n.residualClasses=o:n.residualStyles=o),e}function Hk(t,n,e){let i=e?n.classBindings:n.styleBindings;if(bo(i)!==0)return t[_r(i)]}function Uk(t,n,e,i){let r=e?n.classBindings:n.styleBindings;t[_r(r)]=i}function zk(t,n,e){let i,r=n.directiveEnd;for(let o=1+n.directiveStylingLast;o<r;o++){let a=t[o].hostAttrs;i=is(i,a,e)}return is(i,n.attrs,e)}function zm(t,n,e,i,r){let o=null,a=e.directiveEnd,s=e.directiveStylingLast;for(s===-1?s=e.directiveStart:s++;s<a&&(o=n[s],i=is(i,o.hostAttrs,r),o!==t);)s++;return t!==null&&(e.directiveStylingLast=s),i}function is(t,n,e){let i=e?1:2,r=-1;if(n!==null)for(let o=0;o<n.length;o++){let a=n[o];typeof a=="number"?r=a:r===i&&(Array.isArray(t)||(t=t===void 0?[]:["",t]),nl(t,a,e?!0:n[++o]))}return t===void 0?null:t}function $k(t,n,e){if(e==null||e==="")return lt;let i=[],r=Pn(e);if(Array.isArray(r))for(let o=0;o<r.length;o++)t(i,r[o],!0);else if(r instanceof Set)for(let o of r)t(i,o,!0);else if(typeof r=="object")for(let o in r)r.hasOwnProperty(o)&&t(i,o,r[o]);else typeof r=="string"&&n(i,r);return i}function Wk(t,n,e){let i=String(n);i!==""&&!i.includes(" ")&&nl(t,i,e)}function Gk(t,n,e,i,r,o,a,s){r===hn&&(r=lt);let c=0,l=0,u=0<r.length?r[0]:null,f=0<o.length?o[0]:null;for(;u!==null||f!==null;){let m=c<r.length?r[c+1]:void 0,h=l<o.length?o[l+1]:void 0,b=null,w;u===f?(c+=2,l+=2,m!==h&&(b=f,w=h)):f===null||u!==null&&u<f?(c+=2,b=u):(l+=2,b=f,w=h),b!==null&&Tw(t,n,e,i,b,w,a,s),u=c<r.length?r[c]:null,f=l<o.length?o[l]:null}}function Tw(t,n,e,i,r,o,a,s){if(!(n.type&3))return;let c=t.data,l=c[s+1],u=Tk(l)?k_(c,n,e,r,bo(l),a):void 0;if(!jl(u)){jl(o)||Sk(l)&&(o=k_(c,null,e,r,s,a));let f=fm(ti(),e);$M(i,a,f,r,o)}}function k_(t,n,e,i,r,o){let a=n===null,s;for(;r>0;){let c=t[r],l=Array.isArray(c),u=l?c[1]:c,f=u===null,m=e[r+1];m===hn&&(m=f?lt:void 0);let h=f?il(m,i):u===i?m:void 0;if(l&&!jl(h)&&(h=il(c,i)),jl(h)&&(s=h,a))return s;let b=t[r+1];r=a?_r(b):bo(b)}if(n!==null){let c=o?n.residualClasses:n.residualStyles;c!=null&&(s=il(c,i))}return s}function jl(t){return t!==void 0}function qk(t,n){return t==null||t===""||(typeof n=="string"?t=t+n:typeof t=="object"&&(t=ja(Pn(t)))),t}function Aw(t,n){return(t.flags&(n?8:16))!==0}function Y(t,n=""){let e=K(),i=Me(),r=t+Pe,o=i.firstCreatePass?wo(i,r,1,n,null):i.data[r],a=Zk(i,e,o,n);e[r]=a,fl()&&Wh(i,e,a,o),ao(o,!1)}var Zk=(t,n,e,i)=>(ml(!0),sM(n[Ce],i));function Qk(t,n,e,i=""){return jn(t,ei(),e)?n+Xf(e)+i:hn}function At(t){return ai("",t),At}function ai(t,n,e){let i=K(),r=Qk(i,t,n,e);return r!==hn&&Yk(i,ti(),r),ai}function Yk(t,n,e){let i=fm(n,t);cM(t[Ce],i,e)}function ft(t,n,e){tp(n)&&(n=n());let i=K(),r=ei();if(jn(i,r,n)){let o=Me(),a=so();Ay(a,i,t,n,i[Ce],e)}return ft}function He(t,n){let e=tp(t);return e&&t.set(n),e}function mt(t,n){let e=K(),i=Me(),r=Je();return xw(i,e,e[Ce],r,t,n),mt}function T_(t,n,e){let i=Me();i.firstCreatePass&&Rw(n,i.data,i.blueprint,Rn(t),e)}function Rw(t,n,e,i,r){if(t=rt(t),Array.isArray(t))for(let o=0;o<t.length;o++)Rw(t[o],n,e,i,r);else{let o=Me(),a=K(),s=Je(),c=ar(t)?t:rt(t.provide),l=am(t),u=s.providerIndexes&1048575,f=s.directiveStart,m=s.providerIndexes>>20;if(ar(t)||!t.multi){let h=new br(l,r,Ie,null),b=Wm(c,n,r?u:u+m,f);b===-1?(qm(Ml(s,a),o,c),$m(o,t,n.length),n.push(c),s.directiveStart++,s.directiveEnd++,r&&(s.providerIndexes+=1048576),e.push(h),a.push(h)):(e[b]=h,a[b]=h)}else{let h=Wm(c,n,u+m,f),b=Wm(c,n,u,u+m),w=h>=0&&e[h],I=b>=0&&e[b];if(r&&!I||!r&&!w){qm(Ml(s,a),o,c);let A=Jk(r?Xk:Kk,e.length,r,i,l,t);!r&&I&&(e[b].providerFactory=A),$m(o,t,n.length,0),n.push(c),s.directiveStart++,s.directiveEnd++,r&&(s.providerIndexes+=1048576),e.push(A),a.push(A)}else{let A=Nw(e[r?b:h],l,!r&&i);$m(o,t,h>-1?h:b,A)}!r&&i&&I&&e[b].componentProviders++}}}function $m(t,n,e,i){let r=ar(n),o=Cv(n);if(r||o){let c=(o?rt(n.useClass):n).prototype.ngOnDestroy;if(c){let l=t.destroyHooks||(t.destroyHooks=[]);if(!r&&n.multi){let u=l.indexOf(e);u===-1?l.push(e,[i,c]):l[u+1].push(i,c)}else l.push(e,c)}}}function Nw(t,n,e){return e&&t.componentProviders++,t.multi.push(n)-1}function Wm(t,n,e,i){for(let r=e;r<i;r++)if(n[r]===t)return r;return-1}function Kk(t,n,e,i,r){return Mh(this.multi,[])}function Xk(t,n,e,i,r){let o=this.multi,a;if(this.providerFactory){let s=this.providerFactory.componentProviders,c=Xa(i,i[B],this.providerFactory.index,r);a=c.slice(0,s),Mh(o,a);for(let l=s;l<c.length;l++)a.push(c[l])}else a=[],Mh(o,a);return a}function Mh(t,n){for(let e=0;e<t.length;e++){let i=t[e];n.push(i())}return n}function Jk(t,n,e,i,r,o){let a=new br(t,e,Ie,null);return a.multi=[],a.index=n,a.componentProviders=0,Nw(a,r,i&&!e),a}function ke(t,n){return e=>{e.providersResolver=(i,r)=>T_(i,r?r(t):t,!1),n&&(e.viewProvidersResolver=(i,r)=>T_(i,r?r(n):n,!0))}}function cd(t,n){return Jl(t,n)}var Bl=class{ngModuleFactory;componentFactories;constructor(n,e){this.ngModuleFactory=n,this.componentFactories=e}},sp=(()=>{class t{compileModuleSync(e){return new Fl(e)}compileModuleAsync(e){return Promise.resolve(this.compileModuleSync(e))}compileModuleAndAllComponentsSync(e){let i=this.compileModuleSync(e),r=Yf(e),o=by(r.declarations).reduce((a,s)=>{let c=Mn(s);return c&&a.push(new Oi(c)),a},[]);return new Bl(i,o)}compileModuleAndAllComponentsAsync(e){return Promise.resolve(this.compileModuleAndAllComponentsSync(e))}clearCache(){}clearCacheFor(e){}getModuleId(e){}static \u0275fac=function(i){return new(i||t)};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Ow=(()=>{class t{applicationErrorHandler=d(Qt);appRef=d(Vt);taskService=d(ni);ngZone=d(k);zonelessEnabled=d(Za);tracing=d(pn,{optional:!0});zoneIsDefined=typeof Zone<"u"&&!!Zone.root.run;schedulerTickApplyArgs=[{data:{__scheduler_tick__:!0}}];subscriptions=new ae;angularZoneId=this.zoneIsDefined?this.ngZone._inner?.get(Pa):null;scheduleInRootZone=!this.zonelessEnabled&&this.zoneIsDefined&&(d(Fm,{optional:!0})??!1);cancelScheduledCallback=null;useMicrotaskScheduler=!1;runningTick=!1;pendingRenderTaskId=null;constructor(){this.subscriptions.add(this.appRef.afterTick.subscribe(()=>{let e=this.taskService.add();if(!this.runningTick&&(this.cleanup(),!this.zonelessEnabled||this.appRef.includeAllTestViews)){this.taskService.remove(e);return}this.switchToMicrotaskScheduler(),this.taskService.remove(e)})),this.subscriptions.add(this.ngZone.onUnstable.subscribe(()=>{this.runningTick||this.cleanup()}))}switchToMicrotaskScheduler(){this.ngZone.runOutsideAngular(()=>{let e=this.taskService.add();this.useMicrotaskScheduler=!0,queueMicrotask(()=>{this.useMicrotaskScheduler=!1,this.taskService.remove(e)})})}notify(e){if(!this.zonelessEnabled&&e===5)return;switch(e){case 0:{this.appRef.dirtyFlags|=2;break}case 3:case 2:case 4:case 5:case 1:{this.appRef.dirtyFlags|=4;break}case 6:{this.appRef.dirtyFlags|=2;break}case 12:{this.appRef.dirtyFlags|=16;break}case 13:{this.appRef.dirtyFlags|=2;break}case 11:break;default:this.appRef.dirtyFlags|=8}if(this.appRef.tracingSnapshot=this.tracing?.snapshot(this.appRef.tracingSnapshot)??null,!this.shouldScheduleTick())return;let i=this.useMicrotaskScheduler?Qv:Am;this.pendingRenderTaskId=this.taskService.add(),this.scheduleInRootZone?this.cancelScheduledCallback=Zone.root.run(()=>i(()=>this.tick())):this.cancelScheduledCallback=this.ngZone.runOutsideAngular(()=>i(()=>this.tick()))}shouldScheduleTick(){return!(this.appRef.destroyed||this.pendingRenderTaskId!==null||this.runningTick||this.appRef._runningTick||!this.zonelessEnabled&&this.zoneIsDefined&&Zone.current.get(Pa+this.angularZoneId))}tick(){if(this.runningTick||this.appRef.destroyed)return;if(this.appRef.dirtyFlags===0){this.cleanup();return}!this.zonelessEnabled&&this.appRef.dirtyFlags&7&&(this.appRef.dirtyFlags|=1);let e=this.taskService.add();try{this.ngZone.run(()=>{this.runningTick=!0,this.appRef._tick()},void 0,this.schedulerTickApplyArgs)}catch(i){this.applicationErrorHandler(i)}finally{this.taskService.remove(e),this.cleanup()}}ngOnDestroy(){this.subscriptions.unsubscribe(),this.cleanup()}cleanup(){if(this.runningTick=!1,this.cancelScheduledCallback?.(),this.cancelScheduledCallback=null,this.pendingRenderTaskId!==null){let e=this.pendingRenderTaskId;this.pendingRenderTaskId=null,this.taskService.remove(e)}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Fw(){return[{provide:In,useExisting:Ow},{provide:k,useClass:La},{provide:Za,useValue:!0}]}function eT(){return typeof $localize<"u"&&$localize.locale||us}var ld=new g("",{factory:()=>d(ld,{optional:!0,skipSelf:!0})||eT()});var dd=class{destroyed=!1;listeners=null;errorHandler=d(dt,{optional:!0});destroyRef=d(ot);constructor(){this.destroyRef.onDestroy(()=>{this.destroyed=!0,this.listeners=null})}subscribe(n){if(this.destroyed)throw new D(953,!1);return(this.listeners??=[]).push(n),{unsubscribe:()=>{let e=this.listeners?.indexOf(n);e!==void 0&&e!==-1&&this.listeners?.splice(e,1)}}}emit(n){if(this.destroyed){console.warn($t(953,!1));return}if(this.listeners===null)return;let e=F(null);try{for(let i of this.listeners)try{i(n)}catch(r){this.errorHandler?.handleError(r)}}finally{F(e)}}};function Ue(t){return rv(t)}function ht(t,n){return wa(t,n?.equal)}var fd=Symbol("InputSignalNode#UNSET"),Uw=W(v({},Ca),{transformFn:void 0,applyValueToInputSignal(t,n){Ki(t,n)}});function zw(t,n){let e=Object.create(Uw);e.value=t,e.transformFn=n?.transform;function i(){if(gi(e),e.value===fd){let r=null;throw new D(-950,r)}return e.value}return i[je]=e,i}var Li=class{attributeName;constructor(n){this.attributeName=n}__NG_ELEMENT_ID__=()=>Vl(this.attributeName);toString(){return`HostAttributeToken ${this.attributeName}`}};function Pw(t,n){return zw(t,n)}function _T(t){return zw(fd,t)}var md=(Pw.required=_T,Pw);function Lw(t,n){return Jh(n)}function yT(t,n){return ep(n)}var vn=(Lw.required=yT,Lw);function jw(t,n){return Jh(n)}function wT(t,n){return ep(n)}var $w=(jw.required=wT,jw);function Ww(t,n){let e=Object.create(Uw),i=new dd;e.value=t;function r(){return gi(e),Bw(e.value),e.value}return r[je]=e,r.asReadonly=hl.bind(r),r.set=o=>{e.equal(e.value,o)||(Ki(e,o),i.emit(o))},r.update=o=>{Bw(e.value),r.set(o(e.value))},r.subscribe=i.subscribe.bind(i),r.destroyRef=i.destroyRef,r}function Bw(t){if(t===fd)throw new D(952,!1)}function Vw(t,n){return Ww(t,n)}function CT(t){return Ww(fd,t)}var xt=(Vw.required=CT,Vw);var lp=new g(""),DT=new g("");function ms(t){return!t.moduleRef}function xT(t){let n=ms(t)?t.r3Injector:t.moduleRef.injector,e=n.get(k);return e.run(()=>{ms(t)?t.r3Injector.resolveInjectorInitializers():t.moduleRef.resolveInjectorInitializers();let i=n.get(Qt),r;if(e.runOutsideAngular(()=>{r=e.onError.subscribe({next:i})}),ms(t)){let o=()=>n.destroy(),a=t.platformInjector.get(lp);a.add(o),n.onDestroy(()=>{r.unsubscribe(),a.delete(o)})}else{let o=()=>t.moduleRef.destroy(),a=t.platformInjector.get(lp);a.add(o),t.moduleRef.onDestroy(()=>{Ka(t.allPlatformModules,t.moduleRef),r.unsubscribe(),a.delete(o)})}return IT(i,e,()=>{let o=n.get(ni),a=o.add(),s=n.get(op);return s.runInitializers(),s.donePromise.then(()=>{let c=n.get(ld,us);if(Dw(c||us),!n.get(DT,!0))return ms(t)?n.get(Vt):(t.allPlatformModules.push(t.moduleRef),t.moduleRef);if(ms(t)){let u=n.get(Vt);return t.rootComponent!==void 0&&u.bootstrap(t.rootComponent),u}else return ET?.(t.moduleRef,t.allPlatformModules),t.moduleRef}).finally(()=>{o.remove(a)})})})}var ET;function IT(t,n,e){try{let i=e();return Pi(i)?i.catch(r=>{throw n.runOutsideAngular(()=>t(r)),r}):i}catch(i){throw n.runOutsideAngular(()=>t(i)),i}}var ud=null;function MT(t=[],n){return G.create({name:n,providers:[{provide:Ha,useValue:"platform"},{provide:lp,useValue:new Set([()=>ud=null])},...t]})}function ST(t=[]){if(ud)return ud;let n=MT(t);return ud=n,yw(),kT(n),n}function kT(t){let n=t.get(Hl,null);Ge(t,()=>{n?.forEach(e=>e())})}var TT=1e4;var J4=TT-1e3;var qe=(()=>{class t{static __NG_ELEMENT_ID__=AT}return t})();function AT(t){return RT(Je(),K(),(t&16)===16)}function RT(t,n,e){if(An(t)&&!e){let i=Zt(t.index,n);return new Ni(i,i)}else if(t.type&175){let i=n[vt];return new Ni(i,n)}return null}function Gw(t){let{rootComponent:n,appProviders:e,platformProviders:i,platformRef:r}=t;ve(de.BootstrapApplicationStart);try{let o=r?.injector??ST(i),a=[Fw(),Kv,...e||[]],s=new ns({providers:a,parent:o,debugName:"",runEnvironmentInitializers:!1});return xT({r3Injector:s.injector,platformInjector:o,rootComponent:n})}catch(o){return Promise.reject(o)}finally{ve(de.BootstrapApplicationEnd)}}function oe(t){return typeof t=="boolean"?t:t!=null&&t!=="false"}function si(t,n=NaN){return!isNaN(parseFloat(t))&&!isNaN(Number(t))?Number(t):n}var cp=Symbol("NOT_SET"),qw=new Set,NT=W(v({},Ca),{kind:"afterRenderEffectPhase",consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!0,value:cp,cleanup:null,consumerMarkedDirty(){if(this.sequence.impl.executing){if(this.sequence.lastPhase===null||this.sequence.lastPhase<this.phase)return;this.sequence.erroredOrDestroyed=!0}this.sequence.scheduler.notify(7)},phaseFn(t){if(this.sequence.lastPhase=this.phase,!this.dirty)return this.signal;if(this.dirty=!1,this.value!==cp&&!$r(this))return this.signal;try{for(let r of this.cleanup??qw)r()}finally{this.cleanup?.clear()}let n=[];t!==void 0&&n.push(t),n.push(this.registerCleanupFn);let e=bi(this),i;try{i=this.userFn.apply(null,n)}finally{Yi(this,e)}return(this.value===cp||!this.equal(this.value,i))&&(this.value=i,this.version++),this.signal}}),dp=class extends Ja{scheduler;lastPhase=null;nodes=[void 0,void 0,void 0,void 0];onDestroyFns=null;constructor(n,e,i,r,o,a=null){super(n,[void 0,void 0,void 0,void 0],i,!1,o.get(ot),a),this.scheduler=r;for(let s of Uh){let c=e[s];if(c===void 0)continue;let l=Object.create(NT);l.sequence=this,l.phase=s,l.userFn=c,l.dirty=!0,l.signal=()=>(gi(l),l.value),l.signal[je]=l,l.registerCleanupFn=u=>(l.cleanup??=new Set).add(u),this.nodes[s]=l,this.hooks[s]=u=>l.phaseFn(u)}}afterRun(){super.afterRun(),this.lastPhase=null}destroy(){if(this.onDestroyFns!==null)for(let n of this.onDestroyFns)n();super.destroy();for(let n of this.nodes)if(n)try{for(let e of n.cleanup??qw)e()}finally{vi(n)}}};function Zw(t,n){let e=n?.injector??d(G),i=e.get(In),r=e.get(Zl),o=e.get(pn,null,{optional:!0});r.impl??=e.get(zh);let a=t;typeof a=="function"&&(a={mixedReadWrite:t});let s=e.get(co,null,{optional:!0}),c=new dp(r.impl,[a.earlyRead,a.write,a.mixedReadWrite,a.read],s?.view,i,e,o?.snapshot(null));return r.impl.register(c),c}function hd(t,n){let e=Mn(t),i=n.elementInjector||no();return new Oi(e).create(i,n.projectableNodes,n.hostElement,n.environmentInjector,n.directives,n.bindings)}function Qw(t){let n=Mn(t);if(!n)return null;let e=new Oi(n);return{get selector(){return e.selector},get type(){return e.componentType},get inputs(){return e.inputs},get outputs(){return e.outputs},get ngContentSelectors(){return e.ngContentSelectors},get isStandalone(){return n.standalone},get isSignal(){return n.signals}}}var Yw=null;function Xt(){return Yw}function fp(t){Yw??=t}var hs=class{},ci=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(i){return new(i||t)};static \u0275prov=p({token:t,factory:()=>d(Kw),providedIn:"platform"})}return t})(),mp=new g(""),Kw=(()=>{class t extends ci{_location;_history;_doc=d(L);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return Xt().getBaseHref(this._doc)}onPopState(e){let i=Xt().getGlobalEventTarget(this._doc,"window");return i.addEventListener("popstate",e,!1),()=>i.removeEventListener("popstate",e)}onHashChange(e){let i=Xt().getGlobalEventTarget(this._doc,"window");return i.addEventListener("hashchange",e,!1),()=>i.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,i,r){this._history.pushState(e,i,r)}replaceState(e,i,r){this._history.replaceState(e,i,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(i){return new(i||t)};static \u0275prov=p({token:t,factory:()=>new t,providedIn:"platform"})}return t})();function pd(t,n){return t?n?t.endsWith("/")?n.startsWith("/")?t+n.slice(1):t+n:n.startsWith("/")?t+n:`${t}/${n}`:t:n}function Xw(t){let n=t.search(/#|\?|$/);return t[n-1]==="/"?t.slice(0,n-1)+t.slice(n):t}function _n(t){return t&&t[0]!=="?"?`?${t}`:t}var li=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(i){return new(i||t)};static \u0275prov=p({token:t,factory:()=>d(bd),providedIn:"root"})}return t})(),gd=new g(""),bd=(()=>{class t extends li{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,i){super(),this._platformLocation=e,this._baseHref=i??this._platformLocation.getBaseHrefFromDOM()??d(L).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return pd(this._baseHref,e)}path(e=!1){let i=this._platformLocation.pathname+_n(this._platformLocation.search),r=this._platformLocation.hash;return r&&e?`${i}${r}`:i}pushState(e,i,r,o){let a=this.prepareExternalUrl(r+_n(o));this._platformLocation.pushState(e,i,a)}replaceState(e,i,r,o){let a=this.prepareExternalUrl(r+_n(o));this._platformLocation.replaceState(e,i,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(i){return new(i||t)(T(ci),T(gd,8))};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Un=(()=>{class t{_subject=new x;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let i=this._locationStrategy.getBaseHref();this._basePath=PT(Xw(Jw(i))),this._locationStrategy.onPopState(r=>{this._subject.next({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,i=""){return this.path()==this.normalize(e+_n(i))}normalize(e){return t.stripTrailingSlash(FT(this._basePath,Jw(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,i="",r=null){this._locationStrategy.pushState(r,"",e,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+_n(i)),r)}replaceState(e,i="",r=null){this._locationStrategy.replaceState(r,"",e,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+_n(i)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(i=>{this._notifyUrlChangeListeners(i.url,i.state)}),()=>{let i=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(i,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",i){this._urlChangeListeners.forEach(r=>r(e,i))}subscribe(e,i,r){return this._subject.subscribe({next:e,error:i??void 0,complete:r??void 0})}static normalizeQueryParams=_n;static joinWithSlash=pd;static stripTrailingSlash=Xw;static \u0275fac=function(i){return new(i||t)(T(li))};static \u0275prov=p({token:t,factory:()=>OT(),providedIn:"root"})}return t})();function OT(){return new Un(T(li))}function FT(t,n){if(!t||!n.startsWith(t))return n;let e=n.substring(t.length);return e===""||["/",";","?","#"].includes(e[0])?e:n}function Jw(t){return t.replace(/\/index.html$/,"")}function PT(t){if(new RegExp("^(https?:)?//").test(t)){let[,e]=t.split(/\/\/[^\/]+/);return e}return t}var hp=(()=>{class t extends li{_platformLocation;_baseHref="";_removeListenerFns=[];constructor(e,i){super(),this._platformLocation=e,i!=null&&(this._baseHref=i)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}path(e=!1){let i=this._platformLocation.hash??"#";return i.length>0?i.substring(1):i}prepareExternalUrl(e){let i=pd(this._baseHref,e);return i.length>0?"#"+i:i}pushState(e,i,r,o){let a=this.prepareExternalUrl(r+_n(o))||this._platformLocation.pathname;this._platformLocation.pushState(e,i,a)}replaceState(e,i,r,o){let a=this.prepareExternalUrl(r+_n(o))||this._platformLocation.pathname;this._platformLocation.replaceState(e,i,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(i){return new(i||t)(T(ci),T(gd,8))};static \u0275prov=p({token:t,factory:t.\u0275fac})}return t})();var pp=(()=>{class t{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;injector=d(G);constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let i=this._viewContainerRef;if(this._viewRef&&i.remove(i.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let r=this._createContextForwardProxy();this._viewRef=i.createEmbeddedView(this.ngTemplateOutlet,r,{injector:this._getInjector()})}}_getInjector(){return this.ngTemplateOutletInjector==="outlet"?this.injector:this.ngTemplateOutletInjector??void 0}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,i,r)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,i,r):!1,get:(e,i,r)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,i,r)}})}static \u0275fac=function(i){return new(i||t)(Ie(Ct))};static \u0275dir=S({type:t,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[Ne]})}return t})();function ps(t,n){n=encodeURIComponent(n);for(let e of t.split(";")){let i=e.indexOf("="),[r,o]=i==-1?[e,""]:[e.slice(0,i),e.slice(i+1)];if(r.trim()===n)return decodeURIComponent(o)}return null}var Cr=class{};var bp="browser";function eC(t){return t===bp}var vp=(()=>{class t{static \u0275prov=p({token:t,providedIn:"root",factory:()=>new gp(d(L),window)})}return t})(),gp=class{document;window;offset=()=>[0,0];constructor(n,e){this.document=n,this.window=e}setOffset(n){Array.isArray(n)?this.offset=()=>n:this.offset=n}getScrollPosition(){return[this.window.scrollX,this.window.scrollY]}scrollToPosition(n,e){this.window.scrollTo(W(v({},e),{left:n[0],top:n[1]}))}scrollToAnchor(n,e){let i=VT(this.document,n);i&&(this.scrollToElement(i,e),i.focus())}setHistoryScrollRestoration(n){try{this.window.history.scrollRestoration=n}catch{console.warn($t(2400,!1))}}scrollToElement(n,e){let i=n.getBoundingClientRect(),r=i.left+this.window.pageXOffset,o=i.top+this.window.pageYOffset,a=this.offset();this.window.scrollTo(W(v({},e),{left:r-a[0],top:o-a[1]}))}};function VT(t,n){let e=t.getElementById(n)||t.getElementsByName(n)[0];if(e)return e;if(typeof t.createTreeWalker=="function"&&t.body&&typeof t.body.attachShadow=="function"){let i=t.createTreeWalker(t.body,NodeFilter.SHOW_ELEMENT),r=i.currentNode;for(;r;){let o=r.shadowRoot;if(o){let a=o.getElementById(n)||o.querySelector(`[name="${n}"]`);if(a)return a}r=i.nextNode()}}return null}var gs=class{_doc;constructor(n){this._doc=n}manager},vd=(()=>{class t extends gs{constructor(e){super(e)}supports(e){return!0}addEventListener(e,i,r,o){return e.addEventListener(i,r,o),()=>this.removeEventListener(e,i,r,o)}removeEventListener(e,i,r,o){return e.removeEventListener(i,r,o)}static \u0275fac=function(i){return new(i||t)(T(L))};static \u0275prov=p({token:t,factory:t.\u0275fac})}return t})(),wd=new g(""),Cp=(()=>{class t{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,i){this._zone=i,e.forEach(a=>{a.manager=this});let r=e.filter(a=>!(a instanceof vd));this._plugins=r.slice().reverse();let o=e.find(a=>a instanceof vd);o&&this._plugins.push(o)}addEventListener(e,i,r,o){return this._findPluginFor(i).addEventListener(e,i,r,o)}getZone(){return this._zone}_findPluginFor(e){let i=this._eventNameToPlugin.get(e);if(i)return i;if(i=this._plugins.find(o=>o.supports(e)),!i)throw new D(5101,!1);return this._eventNameToPlugin.set(e,i),i}static \u0275fac=function(i){return new(i||t)(T(wd),T(k))};static \u0275prov=p({token:t,factory:t.\u0275fac})}return t})(),_p="ng-app-id";function tC(t){for(let n of t)n.remove()}function nC(t,n){let e=n.createElement("style");return e.textContent=t,e}function HT(t,n,e,i){let r=t.head?.querySelectorAll(`style[${_p}="${n}"],link[${_p}="${n}"]`);if(r)for(let o of r)o.removeAttribute(_p),o instanceof HTMLLinkElement?i.set(o.href.slice(o.href.lastIndexOf("/")+1),{usage:0,elements:[o]}):o.textContent&&e.set(o.textContent,{usage:0,elements:[o]})}function wp(t,n){let e=n.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",t),e}var Dp=(()=>{class t{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(e,i,r,o={}){this.doc=e,this.appId=i,this.nonce=r,HT(e,i,this.inline,this.external),this.hosts.add(e.head)}addStyles(e,i){for(let r of e)this.addUsage(r,this.inline,nC);i?.forEach(r=>this.addUsage(r,this.external,wp))}removeStyles(e,i){for(let r of e)this.removeUsage(r,this.inline);i?.forEach(r=>this.removeUsage(r,this.external))}addUsage(e,i,r){let o=i.get(e);o?o.usage++:i.set(e,{usage:1,elements:[...this.hosts].map(a=>this.addElement(a,r(e,this.doc)))})}removeUsage(e,i){let r=i.get(e);r&&(r.usage--,r.usage<=0&&(tC(r.elements),i.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])tC(e);this.hosts.clear()}addHost(e){this.hosts.add(e);for(let[i,{elements:r}]of this.inline)r.push(this.addElement(e,nC(i,this.doc)));for(let[i,{elements:r}]of this.external)r.push(this.addElement(e,wp(i,this.doc)))}removeHost(e){this.hosts.delete(e)}addElement(e,i){return this.nonce&&i.setAttribute("nonce",this.nonce),e.appendChild(i)}static \u0275fac=function(i){return new(i||t)(T(L),T(_o),T(yo,8),T(yr))};static \u0275prov=p({token:t,factory:t.\u0275fac})}return t})(),yp={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},xp=/%COMP%/g;var rC="%COMP%",UT=`_nghost-${rC}`,zT=`_ngcontent-${rC}`,$T=!0,WT=new g("",{factory:()=>$T});function GT(t){return zT.replace(xp,t)}function qT(t){return UT.replace(xp,t)}function oC(t,n){return n.map(e=>e.replace(xp,t))}var Ep=(()=>{class t{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;constructor(e,i,r,o,a,s,c=null,l=null){this.eventManager=e,this.sharedStylesHost=i,this.appId=r,this.removeStylesOnCompDestroy=o,this.doc=a,this.ngZone=s,this.nonce=c,this.tracingService=l,this.defaultRenderer=new bs(e,a,s,this.tracingService)}createRenderer(e,i){if(!e||!i)return this.defaultRenderer;let r=this.getOrCreateRenderer(e,i);return r instanceof yd?r.applyToHost(e):r instanceof vs&&r.applyStyles(),r}getOrCreateRenderer(e,i){let r=this.rendererByCompId,o=r.get(i.id);if(!o){let a=this.doc,s=this.ngZone,c=this.eventManager,l=this.sharedStylesHost,u=this.removeStylesOnCompDestroy,f=this.tracingService;switch(i.encapsulation){case mn.Emulated:o=new yd(c,l,i,this.appId,u,a,s,f);break;case mn.ShadowDom:return new _d(c,e,i,a,s,this.nonce,f,l);case mn.ExperimentalIsolatedShadowDom:return new _d(c,e,i,a,s,this.nonce,f);default:o=new vs(c,l,i,u,a,s,f);break}r.set(i.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(i){return new(i||t)(T(Cp),T(Dp),T(_o),T(WT),T(L),T(k),T(yo),T(pn,8))};static \u0275prov=p({token:t,factory:t.\u0275fac})}return t})(),bs=class{eventManager;doc;ngZone;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(n,e,i,r){this.eventManager=n,this.doc=e,this.ngZone=i,this.tracingService=r}destroy(){}destroyNode=null;createElement(n,e){return e?this.doc.createElementNS(yp[e]||e,n):this.doc.createElement(n)}createComment(n){return this.doc.createComment(n)}createText(n){return this.doc.createTextNode(n)}appendChild(n,e){(iC(n)?n.content:n).appendChild(e)}insertBefore(n,e,i){n&&(iC(n)?n.content:n).insertBefore(e,i)}removeChild(n,e){e.remove()}selectRootElement(n,e){let i=typeof n=="string"?this.doc.querySelector(n):n;if(!i)throw new D(-5104,!1);return e||(i.textContent=""),i}parentNode(n){return n.parentNode}nextSibling(n){return n.nextSibling}setAttribute(n,e,i,r){if(r){e=r+":"+e;let o=yp[r];o?n.setAttributeNS(o,e,i):n.setAttribute(e,i)}else n.setAttribute(e,i)}removeAttribute(n,e,i){if(i){let r=yp[i];r?n.removeAttributeNS(r,e):n.removeAttribute(`${i}:${e}`)}else n.removeAttribute(e)}addClass(n,e){n.classList.add(e)}removeClass(n,e){n.classList.remove(e)}setStyle(n,e,i,r){r&(On.DashCase|On.Important)?n.style.setProperty(e,i,r&On.Important?"important":""):n.style[e]=i}removeStyle(n,e,i){i&On.DashCase?n.style.removeProperty(e):n.style[e]=""}setProperty(n,e,i){n!=null&&(n[e]=i)}setValue(n,e){n.nodeValue=e}listen(n,e,i,r){if(typeof n=="string"&&(n=Xt().getGlobalEventTarget(this.doc,n),!n))throw new D(5102,!1);let o=this.decoratePreventDefault(i);return this.tracingService?.wrapEventListener&&(o=this.tracingService.wrapEventListener(n,e,o)),this.eventManager.addEventListener(n,e,o,r)}decoratePreventDefault(n){return e=>{if(e==="__ngUnwrap__")return n;n(e)===!1&&e.preventDefault()}}};function iC(t){return t.tagName==="TEMPLATE"&&t.content!==void 0}var _d=class extends bs{hostEl;sharedStylesHost;shadowRoot;constructor(n,e,i,r,o,a,s,c){super(n,r,o,s),this.hostEl=e,this.sharedStylesHost=c,this.shadowRoot=e.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let l=i.styles;l=oC(i.id,l);for(let f of l){let m=document.createElement("style");a&&m.setAttribute("nonce",a),m.textContent=f,this.shadowRoot.appendChild(m)}let u=i.getExternalStyles?.();if(u)for(let f of u){let m=wp(f,r);a&&m.setAttribute("nonce",a),this.shadowRoot.appendChild(m)}}nodeOrShadowRoot(n){return n===this.hostEl?this.shadowRoot:n}appendChild(n,e){return super.appendChild(this.nodeOrShadowRoot(n),e)}insertBefore(n,e,i){return super.insertBefore(this.nodeOrShadowRoot(n),e,i)}removeChild(n,e){return super.removeChild(null,e)}parentNode(n){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(n)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},vs=class extends bs{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(n,e,i,r,o,a,s,c){super(n,o,a,s),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=r;let l=i.styles;this.styles=c?oC(c,l):l,this.styleUrls=i.getExternalStyles?.(c)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&vr.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},yd=class extends vs{contentAttr;hostAttr;constructor(n,e,i,r,o,a,s,c){let l=r+"-"+i.id;super(n,e,i,o,a,s,c,l),this.contentAttr=GT(l),this.hostAttr=qT(l)}applyToHost(n){this.applyStyles(),this.setAttribute(n,this.hostAttr,"")}createElement(n,e){let i=super.createElement(n,e);return super.setAttribute(i,this.contentAttr,""),i}};var Cd=class t extends hs{supportsDOMEvents=!0;static makeCurrent(){fp(new t)}onAndCancel(n,e,i,r){return n.addEventListener(e,i,r),()=>{n.removeEventListener(e,i,r)}}dispatchEvent(n,e){n.dispatchEvent(e)}remove(n){n.remove()}createElement(n,e){return e=e||this.getDefaultDocument(),e.createElement(n)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(n){return n.nodeType===Node.ELEMENT_NODE}isShadowRoot(n){return n instanceof DocumentFragment}getGlobalEventTarget(n,e){return e==="window"?window:e==="document"?n:e==="body"?n.body:null}getBaseHref(n){let e=ZT();return e==null?null:QT(e)}resetBaseElement(){_s=null}getUserAgent(){return window.navigator.userAgent}getCookie(n){return ps(document.cookie,n)}},_s=null;function ZT(){return _s=_s||document.head.querySelector("base"),_s?_s.getAttribute("href"):null}function QT(t){return new URL(t,document.baseURI).pathname}var YT=(()=>{class t{build(){return new XMLHttpRequest}static \u0275fac=function(i){return new(i||t)};static \u0275prov=p({token:t,factory:t.\u0275fac})}return t})(),aC=["alt","control","meta","shift"],KT={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},XT={alt:t=>t.altKey,control:t=>t.ctrlKey,meta:t=>t.metaKey,shift:t=>t.shiftKey},sC=(()=>{class t extends gs{constructor(e){super(e)}supports(e){return t.parseEventName(e)!=null}addEventListener(e,i,r,o){let a=t.parseEventName(i),s=t.eventCallback(a.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Xt().onAndCancel(e,a.domEventName,s,o))}static parseEventName(e){let i=e.toLowerCase().split("."),r=i.shift();if(i.length===0||!(r==="keydown"||r==="keyup"))return null;let o=t._normalizeKey(i.pop()),a="",s=i.indexOf("code");if(s>-1&&(i.splice(s,1),a="code."),aC.forEach(l=>{let u=i.indexOf(l);u>-1&&(i.splice(u,1),a+=l+".")}),a+=o,i.length!=0||o.length===0)return null;let c={};return c.domEventName=r,c.fullKey=a,c}static matchEventFullKeyCode(e,i){let r=KT[e.key]||e.key,o="";return i.indexOf("code.")>-1&&(r=e.code,o="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),aC.forEach(a=>{if(a!==r){let s=XT[a];s(e)&&(o+=a+".")}}),o+=r,o===i)}static eventCallback(e,i,r){return o=>{t.matchEventFullKeyCode(o,e)&&r.runGuarded(()=>i(o))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(i){return new(i||t)(T(L))};static \u0275prov=p({token:t,factory:t.\u0275fac})}return t})();async function Ip(t,n,e){let i=v({rootComponent:t},JT(n,e));return Gw(i)}function JT(t,n){return{platformRef:n?.platformRef,appProviders:[...rA,...t?.providers??[]],platformProviders:iA}}function eA(){Cd.makeCurrent()}function tA(){return new dt}function nA(){return Th(document),document}var iA=[{provide:yr,useValue:bp},{provide:Hl,useValue:eA,multi:!0},{provide:L,useFactory:nA}];var rA=[{provide:Ha,useValue:"root"},{provide:dt,useFactory:tA},{provide:wd,useClass:vd,multi:!0},{provide:wd,useClass:sC,multi:!0},Ep,Dp,Cp,{provide:Ve,useExisting:Ep},{provide:Cr,useClass:YT},[]];var ji=class t{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(n){n?typeof n=="string"?this.lazyInit=()=>{this.headers=new Map,n.split(`
`).forEach(e=>{let i=e.indexOf(":");if(i>0){let r=e.slice(0,i),o=e.slice(i+1).trim();this.addHeaderEntry(r,o)}})}:typeof Headers<"u"&&n instanceof Headers?(this.headers=new Map,n.forEach((e,i)=>{this.addHeaderEntry(i,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(n).forEach(([e,i])=>{this.setHeaderEntries(e,i)})}:this.headers=new Map}has(n){return this.init(),this.headers.has(n.toLowerCase())}get(n){this.init();let e=this.headers.get(n.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(n){return this.init(),this.headers.get(n.toLowerCase())||null}append(n,e){return this.clone({name:n,value:e,op:"a"})}set(n,e){return this.clone({name:n,value:e,op:"s"})}delete(n,e){return this.clone({name:n,value:e,op:"d"})}maybeSetNormalizedName(n,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,n)}init(){this.lazyInit&&(this.lazyInit instanceof t?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(n=>this.applyUpdate(n)),this.lazyUpdate=null))}copyFrom(n){n.init(),Array.from(n.headers.keys()).forEach(e=>{this.headers.set(e,n.headers.get(e)),this.normalizedNames.set(e,n.normalizedNames.get(e))})}clone(n){let e=new t;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof t?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([n]),e}applyUpdate(n){let e=n.name.toLowerCase();switch(n.op){case"a":case"s":let i=n.value;if(typeof i=="string"&&(i=[i]),i.length===0)return;this.maybeSetNormalizedName(n.name,e);let r=(n.op==="a"?this.headers.get(e):void 0)||[];r.push(...i),this.headers.set(e,r);break;case"d":let o=n.value;if(!o)this.headers.delete(e),this.normalizedNames.delete(e);else{let a=this.headers.get(e);if(!a)return;a=a.filter(s=>o.indexOf(s)===-1),a.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,a)}break}}addHeaderEntry(n,e){let i=n.toLowerCase();this.maybeSetNormalizedName(n,i),this.headers.has(i)?this.headers.get(i).push(e):this.headers.set(i,[e])}setHeaderEntries(n,e){let i=(Array.isArray(e)?e:[e]).map(o=>o.toString()),r=n.toLowerCase();this.headers.set(r,i),this.maybeSetNormalizedName(n,r)}forEach(n){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>n(this.normalizedNames.get(e),this.headers.get(e)))}};var xd=class{map=new Map;set(n,e){return this.map.set(n,e),this}get(n){return this.map.has(n)||this.map.set(n,n.defaultValue()),this.map.get(n)}delete(n){return this.map.delete(n),this}has(n){return this.map.has(n)}keys(){return this.map.keys()}},Ed=class{encodeKey(n){return cC(n)}encodeValue(n){return cC(n)}decodeKey(n){return decodeURIComponent(n)}decodeValue(n){return decodeURIComponent(n)}};function oA(t,n){let e=new Map;return t.length>0&&t.replace(/^\?/,"").split("&").forEach(r=>{let o=r.indexOf("="),[a,s]=o==-1?[n.decodeKey(r),""]:[n.decodeKey(r.slice(0,o)),n.decodeValue(r.slice(o+1))],c=e.get(a)||[];c.push(s),e.set(a,c)}),e}var aA=/%(\d[a-f0-9])/gi,sA={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function cC(t){return encodeURIComponent(t).replace(aA,(n,e)=>sA[e]??n)}function Dd(t){return`${t}`}var di=class t{map;encoder;updates=null;cloneFrom=null;constructor(n={}){if(this.encoder=n.encoder||new Ed,n.fromString){if(n.fromObject)throw new D(2805,!1);this.map=oA(n.fromString,this.encoder)}else n.fromObject?(this.map=new Map,Object.keys(n.fromObject).forEach(e=>{let i=n.fromObject[e],r=Array.isArray(i)?i.map(Dd):[Dd(i)];this.map.set(e,r)})):this.map=null}has(n){return this.init(),this.map.has(n)}get(n){this.init();let e=this.map.get(n);return e?e[0]:null}getAll(n){return this.init(),this.map.get(n)||null}keys(){return this.init(),Array.from(this.map.keys())}append(n,e){return this.clone({param:n,value:e,op:"a"})}appendAll(n){let e=[];return Object.keys(n).forEach(i=>{let r=n[i];Array.isArray(r)?r.forEach(o=>{e.push({param:i,value:o,op:"a"})}):e.push({param:i,value:r,op:"a"})}),this.clone(e)}set(n,e){return this.clone({param:n,value:e,op:"s"})}delete(n,e){return this.clone({param:n,value:e,op:"d"})}toString(){return this.init(),this.keys().map(n=>{let e=this.encoder.encodeKey(n);return this.map.get(n).map(i=>e+"="+this.encoder.encodeValue(i)).join("&")}).filter(n=>n!=="").join("&")}clone(n){let e=new t({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(n),e}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(n=>this.map.set(n,this.cloneFrom.map.get(n))),this.updates.forEach(n=>{switch(n.op){case"a":case"s":let e=(n.op==="a"?this.map.get(n.param):void 0)||[];e.push(Dd(n.value)),this.map.set(n.param,e);break;case"d":if(n.value!==void 0){let i=this.map.get(n.param)||[],r=i.indexOf(Dd(n.value));r!==-1&&i.splice(r,1),i.length>0?this.map.set(n.param,i):this.map.delete(n.param)}else{this.map.delete(n.param);break}}}),this.cloneFrom=this.updates=null)}};function cA(t){switch(t){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function lC(t){return typeof ArrayBuffer<"u"&&t instanceof ArrayBuffer}function dC(t){return typeof Blob<"u"&&t instanceof Blob}function uC(t){return typeof FormData<"u"&&t instanceof FormData}function lA(t){return typeof URLSearchParams<"u"&&t instanceof URLSearchParams}var fC="Content-Type",mC="Accept",pC="text/plain",gC="application/json",dA=`${gC}, ${pC}, */*`,Io=class t{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(n,e,i,r){this.url=e,this.method=n.toUpperCase();let o;if(cA(this.method)||r?(this.body=i!==void 0?i:null,o=r):o=i,o){if(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,this.keepalive=!!o.keepalive,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),o.priority&&(this.priority=o.priority),o.cache&&(this.cache=o.cache),o.credentials&&(this.credentials=o.credentials),typeof o.timeout=="number"){if(o.timeout<1||!Number.isInteger(o.timeout))throw new D(2822,"");this.timeout=o.timeout}o.mode&&(this.mode=o.mode),o.redirect&&(this.redirect=o.redirect),o.integrity&&(this.integrity=o.integrity),o.referrer&&(this.referrer=o.referrer),o.referrerPolicy&&(this.referrerPolicy=o.referrerPolicy),this.transferCache=o.transferCache}if(this.headers??=new ji,this.context??=new xd,!this.params)this.params=new di,this.urlWithParams=e;else{let a=this.params.toString();if(a.length===0)this.urlWithParams=e;else{let s=e.indexOf("?"),c=s===-1?"?":s<e.length-1?"&":"";this.urlWithParams=e+c+a}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||lC(this.body)||dC(this.body)||uC(this.body)||lA(this.body)?this.body:this.body instanceof di?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||uC(this.body)?null:dC(this.body)?this.body.type||null:lC(this.body)?null:typeof this.body=="string"?pC:this.body instanceof di?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?gC:null}clone(n={}){let e=n.method||this.method,i=n.url||this.url,r=n.responseType||this.responseType,o=n.keepalive??this.keepalive,a=n.priority||this.priority,s=n.cache||this.cache,c=n.mode||this.mode,l=n.redirect||this.redirect,u=n.credentials||this.credentials,f=n.referrer||this.referrer,m=n.integrity||this.integrity,h=n.referrerPolicy||this.referrerPolicy,b=n.transferCache??this.transferCache,w=n.timeout??this.timeout,I=n.body!==void 0?n.body:this.body,A=n.withCredentials??this.withCredentials,he=n.reportProgress??this.reportProgress,Ke=n.headers||this.headers,Xe=n.params||this.params,va=n.context??this.context;return n.setHeaders!==void 0&&(Ke=Object.keys(n.setHeaders).reduce((_a,Zi)=>_a.set(Zi,n.setHeaders[Zi]),Ke)),n.setParams&&(Xe=Object.keys(n.setParams).reduce((_a,Zi)=>_a.set(Zi,n.setParams[Zi]),Xe)),new t(e,i,I,{params:Xe,headers:Ke,context:va,reportProgress:he,responseType:r,withCredentials:A,transferCache:b,keepalive:o,cache:s,priority:a,timeout:w,mode:c,redirect:l,credentials:u,referrer:f,integrity:m,referrerPolicy:h})}},Dr=(function(t){return t[t.Sent=0]="Sent",t[t.UploadProgress=1]="UploadProgress",t[t.ResponseHeader=2]="ResponseHeader",t[t.DownloadProgress=3]="DownloadProgress",t[t.Response=4]="Response",t[t.User=5]="User",t})(Dr||{}),So=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(n,e=200,i="OK"){this.headers=n.headers||new ji,this.status=n.status!==void 0?n.status:e,this.statusText=n.statusText||i,this.url=n.url||null,this.redirected=n.redirected,this.responseType=n.responseType,this.ok=this.status>=200&&this.status<300}},Id=class t extends So{constructor(n={}){super(n)}type=Dr.ResponseHeader;clone(n={}){return new t({headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0})}},ys=class t extends So{body;constructor(n={}){super(n),this.body=n.body!==void 0?n.body:null}type=Dr.Response;clone(n={}){return new t({body:n.body!==void 0?n.body:this.body,headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0,redirected:n.redirected??this.redirected,responseType:n.responseType??this.responseType})}},Mo=class extends So{name="HttpErrorResponse";message;error;ok=!1;constructor(n){super(n,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${n.url||"(unknown url)"}`:this.message=`Http failure response for ${n.url||"(unknown url)"}: ${n.status} ${n.statusText}`,this.error=n.error||null}},uA=200,fA=204;var mA=new g("");var hA=/^\)\]\}',?\n/;var Sp=(()=>{class t{xhrFactory;tracingService=d(pn,{optional:!0});constructor(e){this.xhrFactory=e}maybePropagateTrace(e){return this.tracingService?.propagate?this.tracingService.propagate(e):e}handle(e){if(e.method==="JSONP")throw new D(-2800,!1);let i=this.xhrFactory;return N(null).pipe(it(()=>new q(o=>{let a=i.build();if(a.open(e.method,e.urlWithParams),e.withCredentials&&(a.withCredentials=!0),e.headers.forEach((I,A)=>a.setRequestHeader(I,A.join(","))),e.headers.has(mC)||a.setRequestHeader(mC,dA),!e.headers.has(fC)){let I=e.detectContentTypeHeader();I!==null&&a.setRequestHeader(fC,I)}if(e.timeout&&(a.timeout=e.timeout),e.responseType){let I=e.responseType.toLowerCase();a.responseType=I!=="json"?I:"text"}let s=e.serializeBody(),c=null,l=()=>{if(c!==null)return c;let I=a.statusText||"OK",A=new ji(a.getAllResponseHeaders()),he=a.responseURL||e.url;return c=new Id({headers:A,status:a.status,statusText:I,url:he}),c},u=this.maybePropagateTrace(()=>{let{headers:I,status:A,statusText:he,url:Ke}=l(),Xe=null;A!==fA&&(Xe=typeof a.response>"u"?a.responseText:a.response),A===0&&(A=Xe?uA:0);let va=A>=200&&A<300;if(e.responseType==="json"&&typeof Xe=="string"){let _a=Xe;Xe=Xe.replace(hA,"");try{Xe=Xe!==""?JSON.parse(Xe):null}catch(Zi){Xe=_a,va&&(va=!1,Xe={error:Zi,text:Xe})}}va?(o.next(new ys({body:Xe,headers:I,status:A,statusText:he,url:Ke||void 0})),o.complete()):o.error(new Mo({error:Xe,headers:I,status:A,statusText:he,url:Ke||void 0}))}),f=this.maybePropagateTrace(I=>{let{url:A}=l(),he=new Mo({error:I,status:a.status||0,statusText:a.statusText||"Unknown Error",url:A||void 0});o.error(he)}),m=f;e.timeout&&(m=this.maybePropagateTrace(I=>{let{url:A}=l(),he=new Mo({error:new DOMException("Request timed out","TimeoutError"),status:a.status||0,statusText:a.statusText||"Request timeout",url:A||void 0});o.error(he)}));let h=!1,b=this.maybePropagateTrace(I=>{h||(o.next(l()),h=!0);let A={type:Dr.DownloadProgress,loaded:I.loaded};I.lengthComputable&&(A.total=I.total),e.responseType==="text"&&a.responseText&&(A.partialText=a.responseText),o.next(A)}),w=this.maybePropagateTrace(I=>{let A={type:Dr.UploadProgress,loaded:I.loaded};I.lengthComputable&&(A.total=I.total),o.next(A)});return a.addEventListener("load",u),a.addEventListener("error",f),a.addEventListener("timeout",m),a.addEventListener("abort",f),e.reportProgress&&(a.addEventListener("progress",b),s!==null&&a.upload&&a.upload.addEventListener("progress",w)),a.send(s),o.next({type:Dr.Sent}),()=>{a.removeEventListener("error",f),a.removeEventListener("abort",f),a.removeEventListener("load",u),a.removeEventListener("timeout",m),e.reportProgress&&(a.removeEventListener("progress",b),s!==null&&a.upload&&a.upload.removeEventListener("progress",w)),a.readyState!==a.DONE&&a.abort()}})))}static \u0275fac=function(i){return new(i||t)(T(Cr))};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function bC(t,n){return n(t)}function pA(t,n){return(e,i)=>n.intercept(e,{handle:r=>t(r,i)})}function gA(t,n,e){return(i,r)=>Ge(e,()=>n(i,o=>t(o,r)))}var Sd=new g(""),kp=new g("",{factory:()=>[]}),vC=new g(""),Tp=new g("",{factory:()=>!0});function bA(){let t=null;return(n,e)=>{t===null&&(t=(d(Sd,{optional:!0})??[]).reduceRight(pA,bC));let i=d(lo);if(d(Tp)){let o=i.add();return t(n,e).pipe(xi(o))}else return t(n,e)}}var Ap=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=p({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=T(Sp),r},providedIn:"root"})}return t})();var Md=(()=>{class t{backend;injector;chain=null;pendingTasks=d(lo);contributeToStability=d(Tp);constructor(e,i){this.backend=e,this.injector=i}handle(e){if(this.chain===null){let i=Array.from(new Set([...this.injector.get(kp),...this.injector.get(vC,[])]));this.chain=i.reduceRight((r,o)=>gA(r,o,this.injector),bC)}if(this.contributeToStability){let i=this.pendingTasks.add();return this.chain(e,r=>this.backend.handle(r)).pipe(xi(i))}else return this.chain(e,i=>this.backend.handle(i))}static \u0275fac=function(i){return new(i||t)(T(Ap),T(be))};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Rp=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=p({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=T(Md),r},providedIn:"root"})}return t})();function Mp(t,n){return{body:n,headers:t.headers,context:t.context,observe:t.observe,params:t.params,reportProgress:t.reportProgress,responseType:t.responseType,withCredentials:t.withCredentials,credentials:t.credentials,transferCache:t.transferCache,timeout:t.timeout,keepalive:t.keepalive,priority:t.priority,cache:t.cache,mode:t.mode,redirect:t.redirect,integrity:t.integrity,referrer:t.referrer,referrerPolicy:t.referrerPolicy}}var Jt=(()=>{class t{handler;constructor(e){this.handler=e}request(e,i,r={}){let o;if(e instanceof Io)o=e;else{let c;r.headers instanceof ji?c=r.headers:c=new ji(r.headers);let l;r.params&&(r.params instanceof di?l=r.params:l=new di({fromObject:r.params})),o=new Io(e,i,r.body!==void 0?r.body:null,{headers:c,context:r.context,params:l,reportProgress:r.reportProgress,responseType:r.responseType||"json",withCredentials:r.withCredentials,transferCache:r.transferCache,keepalive:r.keepalive,priority:r.priority,cache:r.cache,mode:r.mode,redirect:r.redirect,credentials:r.credentials,referrer:r.referrer,referrerPolicy:r.referrerPolicy,integrity:r.integrity,timeout:r.timeout})}let a=N(o).pipe(Di(c=>this.handler.handle(c)));if(e instanceof Io||r.observe==="events")return a;let s=a.pipe(le(c=>c instanceof ys));switch(r.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return s.pipe(X(c=>{if(c.body!==null&&!(c.body instanceof ArrayBuffer))throw new D(2806,!1);return c.body}));case"blob":return s.pipe(X(c=>{if(c.body!==null&&!(c.body instanceof Blob))throw new D(2807,!1);return c.body}));case"text":return s.pipe(X(c=>{if(c.body!==null&&typeof c.body!="string")throw new D(2808,!1);return c.body}));default:return s.pipe(X(c=>c.body))}case"response":return s;default:throw new D(2809,!1)}}delete(e,i={}){return this.request("DELETE",e,i)}get(e,i={}){return this.request("GET",e,i)}head(e,i={}){return this.request("HEAD",e,i)}jsonp(e,i){return this.request("JSONP",e,{params:new di().append(i,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,i={}){return this.request("OPTIONS",e,i)}patch(e,i,r={}){return this.request("PATCH",e,Mp(r,i))}post(e,i,r={}){return this.request("POST",e,Mp(r,i))}put(e,i,r={}){return this.request("PUT",e,Mp(r,i))}static \u0275fac=function(i){return new(i||t)(T(Rp))};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var vA=new g("",{factory:()=>!0}),_A="XSRF-TOKEN",yA=new g("",{factory:()=>_A}),wA="X-XSRF-TOKEN",CA=new g("",{factory:()=>wA}),DA=(()=>{class t{cookieName=d(yA);doc=d(L);lastCookieString="";lastToken=null;parseCount=0;getToken(){let e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=ps(e,this.cookieName),this.lastCookieString=e),this.lastToken}static \u0275fac=function(i){return new(i||t)};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),_C=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=p({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=T(DA),r},providedIn:"root"})}return t})();function xA(t,n){if(!d(vA)||t.method==="GET"||t.method==="HEAD")return n(t);try{let r=d(ci).href,{origin:o}=new URL(r),{origin:a}=new URL(t.url,o);if(o!==a)return n(t)}catch{return n(t)}let e=d(_C).getToken(),i=d(CA);return e!=null&&!t.headers.has(i)&&(t=t.clone({headers:t.headers.set(i,e)})),n(t)}var Np=(function(t){return t[t.Interceptors=0]="Interceptors",t[t.LegacyInterceptors=1]="LegacyInterceptors",t[t.CustomXsrfConfiguration=2]="CustomXsrfConfiguration",t[t.NoXsrfProtection=3]="NoXsrfProtection",t[t.JsonpSupport=4]="JsonpSupport",t[t.RequestsMadeViaParent=5]="RequestsMadeViaParent",t[t.Fetch=6]="Fetch",t})(Np||{});function EA(t,n){return{\u0275kind:t,\u0275providers:n}}function Op(...t){let n=[Jt,Md,{provide:Rp,useExisting:Md},{provide:Ap,useFactory:()=>d(mA,{optional:!0})??d(Sp)},{provide:kp,useValue:xA,multi:!0}];for(let e of t)n.push(...e.\u0275providers);return Sn(n)}var hC=new g("");function Fp(){return EA(Np.LegacyInterceptors,[{provide:hC,useFactory:bA},{provide:kp,useExisting:hC,multi:!0}])}var yC=(()=>{class t{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(i){return new(i||t)(T(L))};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Pp=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=p({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=T(MA),r},providedIn:"root"})}return t})(),MA=(()=>{class t extends Pp{_doc;constructor(e){super(),this._doc=e}sanitize(e,i){if(i==null)return null;switch(e){case wt.NONE:return i;case wt.HTML:return wr(i,"HTML")?Pn(i):Ph(this._doc,String(i)).toString();case wt.STYLE:return wr(i,"Style")?Pn(i):i;case wt.SCRIPT:if(wr(i,"Script"))return Pn(i);throw new D(5200,!1);case wt.URL:return wr(i,"URL")?Pn(i):Wl(String(i));case wt.RESOURCE_URL:if(wr(i,"ResourceURL"))return Pn(i);throw new D(5201,!1);default:throw new D(5202,!1)}}bypassSecurityTrustHtml(e){return Ah(e)}bypassSecurityTrustStyle(e){return Rh(e)}bypassSecurityTrustScript(e){return Nh(e)}bypassSecurityTrustUrl(e){return Oh(e)}bypassSecurityTrustResourceUrl(e){return Fh(e)}static \u0275fac=function(i){return new(i||t)(T(L))};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var J="primary",Rs=Symbol("RouteTitle"),Hp=class{params;constructor(n){this.params=n||{}}has(n){return Object.prototype.hasOwnProperty.call(this.params,n)}get(n){if(this.has(n)){let e=this.params[n];return Array.isArray(e)?e[0]:e}return null}getAll(n){if(this.has(n)){let e=this.params[n];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function Er(t){return new Hp(t)}function Lp(t,n,e){for(let i=0;i<t.length;i++){let r=t[i],o=n[i];if(r[0]===":")e[r.substring(1)]=o;else if(r!==o.path)return!1}return!0}function kC(t,n,e){let i=e.path.split("/"),r=i.indexOf("**");if(r===-1){if(i.length>t.length||e.pathMatch==="full"&&(n.hasChildren()||i.length<t.length))return null;let c={},l=t.slice(0,i.length);return Lp(i,l,c)?{consumed:l,posParams:c}:null}if(r!==i.lastIndexOf("**"))return null;let o=i.slice(0,r),a=i.slice(r+1);if(o.length+a.length>t.length||e.pathMatch==="full"&&n.hasChildren()&&e.path!=="**")return null;let s={};return!Lp(o,t.slice(0,o.length),s)||!Lp(a,t.slice(t.length-a.length),s)?null:{consumed:t,posParams:s}}function Od(t){return new Promise((n,e)=>{t.pipe(Qn()).subscribe({next:i=>n(i),error:i=>e(i)})})}function SA(t,n){if(t.length!==n.length)return!1;for(let e=0;e<t.length;++e)if(!zn(t[e],n[e]))return!1;return!0}function zn(t,n){let e=t?Up(t):void 0,i=n?Up(n):void 0;if(!e||!i||e.length!=i.length)return!1;let r;for(let o=0;o<e.length;o++)if(r=e[o],!TC(t[r],n[r]))return!1;return!0}function Up(t){return[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function TC(t,n){if(Array.isArray(t)&&Array.isArray(n)){if(t.length!==n.length)return!1;let e=[...t].sort(),i=[...n].sort();return e.every((r,o)=>i[o]===r)}else return t===n}function kA(t){return t.length>0?t[t.length-1]:null}function Mr(t){return Sa(t)?t:Pi(t)?Ee(Promise.resolve(t)):N(t)}function AC(t){return Sa(t)?Od(t):Promise.resolve(t)}var TA={exact:OC,subset:FC},RC={exact:AA,subset:RA,ignored:()=>!0},NC={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},zp={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};function CC(t,n,e){return TA[e.paths](t.root,n.root,e.matrixParams)&&RC[e.queryParams](t.queryParams,n.queryParams)&&!(e.fragment==="exact"&&t.fragment!==n.fragment)}function AA(t,n){return zn(t,n)}function OC(t,n,e){if(!xr(t.segments,n.segments)||!Ad(t.segments,n.segments,e)||t.numberOfChildren!==n.numberOfChildren)return!1;for(let i in n.children)if(!t.children[i]||!OC(t.children[i],n.children[i],e))return!1;return!0}function RA(t,n){return Object.keys(n).length<=Object.keys(t).length&&Object.keys(n).every(e=>TC(t[e],n[e]))}function FC(t,n,e){return PC(t,n,n.segments,e)}function PC(t,n,e,i){if(t.segments.length>e.length){let r=t.segments.slice(0,e.length);return!(!xr(r,e)||n.hasChildren()||!Ad(r,e,i))}else if(t.segments.length===e.length){if(!xr(t.segments,e)||!Ad(t.segments,e,i))return!1;for(let r in n.children)if(!t.children[r]||!FC(t.children[r],n.children[r],i))return!1;return!0}else{let r=e.slice(0,t.segments.length),o=e.slice(t.segments.length);return!xr(t.segments,r)||!Ad(t.segments,r,i)||!t.children[J]?!1:PC(t.children[J],n,o,i)}}function Ad(t,n,e){return n.every((i,r)=>RC[e](t[r].parameters,i.parameters))}var tn=class{root;queryParams;fragment;_queryParamMap;constructor(n=new pe([],{}),e={},i=null){this.root=n,this.queryParams=e,this.fragment=i}get queryParamMap(){return this._queryParamMap??=Er(this.queryParams),this._queryParamMap}toString(){return FA.serialize(this)}},pe=class{segments;children;parent=null;constructor(n,e){this.segments=n,this.children=e,Object.values(e).forEach(i=>i.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return Rd(this)}},Bi=class{path;parameters;_parameterMap;constructor(n,e){this.path=n,this.parameters=e}get parameterMap(){return this._parameterMap??=Er(this.parameters),this._parameterMap}toString(){return jC(this)}};function NA(t,n){return xr(t,n)&&t.every((e,i)=>zn(e.parameters,n[i].parameters))}function xr(t,n){return t.length!==n.length?!1:t.every((e,i)=>e.path===n[i].path)}function OA(t,n){let e=[];return Object.entries(t.children).forEach(([i,r])=>{i===J&&(e=e.concat(n(r,i)))}),Object.entries(t.children).forEach(([i,r])=>{i!==J&&(e=e.concat(n(r,i)))}),e}var Sr=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=p({token:t,factory:()=>new fi,providedIn:"root"})}return t})(),fi=class{parse(n){let e=new Wp(n);return new tn(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(n){let e=`/${ws(n.root,!0)}`,i=jA(n.queryParams),r=typeof n.fragment=="string"?`#${PA(n.fragment)}`:"";return`${e}${i}${r}`}},FA=new fi;function Rd(t){return t.segments.map(n=>jC(n)).join("/")}function ws(t,n){if(!t.hasChildren())return Rd(t);if(n){let e=t.children[J]?ws(t.children[J],!1):"",i=[];return Object.entries(t.children).forEach(([r,o])=>{r!==J&&i.push(`${r}:${ws(o,!1)}`)}),i.length>0?`${e}(${i.join("//")})`:e}else{let e=OA(t,(i,r)=>r===J?[ws(t.children[J],!1)]:[`${r}:${ws(i,!1)}`]);return Object.keys(t.children).length===1&&t.children[J]!=null?`${Rd(t)}/${e[0]}`:`${Rd(t)}/(${e.join("//")})`}}function LC(t){return encodeURIComponent(t).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function kd(t){return LC(t).replace(/%3B/gi,";")}function PA(t){return encodeURI(t)}function $p(t){return LC(t).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function Nd(t){return decodeURIComponent(t)}function DC(t){return Nd(t.replace(/\+/g,"%20"))}function jC(t){return`${$p(t.path)}${LA(t.parameters)}`}function LA(t){return Object.entries(t).map(([n,e])=>`;${$p(n)}=${$p(e)}`).join("")}function jA(t){let n=Object.entries(t).map(([e,i])=>Array.isArray(i)?i.map(r=>`${kd(e)}=${kd(r)}`).join("&"):`${kd(e)}=${kd(i)}`).filter(e=>e);return n.length?`?${n.join("&")}`:""}var BA=/^[^\/()?;#]+/;function jp(t){let n=t.match(BA);return n?n[0]:""}var VA=/^[^\/()?;=#]+/;function HA(t){let n=t.match(VA);return n?n[0]:""}var UA=/^[^=?&#]+/;function zA(t){let n=t.match(UA);return n?n[0]:""}var $A=/^[^&#]+/;function WA(t){let n=t.match($A);return n?n[0]:""}var Wp=class{url;remaining;constructor(n){this.url=n,this.remaining=n}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new pe([],{}):new pe([],this.parseChildren())}parseQueryParams(){let n={};if(this.consumeOptional("?"))do this.parseQueryParam(n);while(this.consumeOptional("&"));return n}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(n=0){if(n>50)throw new D(4010,!1);if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let i={};this.peekStartsWith("/(")&&(this.capture("/"),i=this.parseParens(!0,n));let r={};return this.peekStartsWith("(")&&(r=this.parseParens(!1,n)),(e.length>0||Object.keys(i).length>0)&&(r[J]=new pe(e,i)),r}parseSegment(){let n=jp(this.remaining);if(n===""&&this.peekStartsWith(";"))throw new D(4009,!1);return this.capture(n),new Bi(Nd(n),this.parseMatrixParams())}parseMatrixParams(){let n={};for(;this.consumeOptional(";");)this.parseParam(n);return n}parseParam(n){let e=HA(this.remaining);if(!e)return;this.capture(e);let i="";if(this.consumeOptional("=")){let r=jp(this.remaining);r&&(i=r,this.capture(i))}n[Nd(e)]=Nd(i)}parseQueryParam(n){let e=zA(this.remaining);if(!e)return;this.capture(e);let i="";if(this.consumeOptional("=")){let a=WA(this.remaining);a&&(i=a,this.capture(i))}let r=DC(e),o=DC(i);if(n.hasOwnProperty(r)){let a=n[r];Array.isArray(a)||(a=[a],n[r]=a),a.push(o)}else n[r]=o}parseParens(n,e){let i={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let r=jp(this.remaining),o=this.remaining[r.length];if(o!=="/"&&o!==")"&&o!==";")throw new D(4010,!1);let a;r.indexOf(":")>-1?(a=r.slice(0,r.indexOf(":")),this.capture(a),this.capture(":")):n&&(a=J);let s=this.parseChildren(e+1);i[a??J]=Object.keys(s).length===1&&s[J]?s[J]:new pe([],s),this.consumeOptional("//")}return i}peekStartsWith(n){return this.remaining.startsWith(n)}consumeOptional(n){return this.peekStartsWith(n)?(this.remaining=this.remaining.substring(n.length),!0):!1}capture(n){if(!this.consumeOptional(n))throw new D(4011,!1)}};function BC(t){return t.segments.length>0?new pe([],{[J]:t}):t}function VC(t){let n={};for(let[i,r]of Object.entries(t.children)){let o=VC(r);if(i===J&&o.segments.length===0&&o.hasChildren())for(let[a,s]of Object.entries(o.children))n[a]=s;else(o.segments.length>0||o.hasChildren())&&(n[i]=o)}let e=new pe(t.segments,n);return GA(e)}function GA(t){if(t.numberOfChildren===1&&t.children[J]){let n=t.children[J];return new pe(t.segments.concat(n.segments),n.children)}return t}function No(t){return t instanceof tn}function HC(t,n,e=null,i=null,r=new fi){let o=UC(t);return zC(o,n,e,i,r)}function UC(t){let n;function e(o){let a={};for(let c of o.children){let l=e(c);a[c.outlet]=l}let s=new pe(o.url,a);return o===t&&(n=s),s}let i=e(t.root),r=BC(i);return n??r}function zC(t,n,e,i,r){let o=t;for(;o.parent;)o=o.parent;if(n.length===0)return Bp(o,o,o,e,i,r);let a=qA(n);if(a.toRoot())return Bp(o,o,new pe([],{}),e,i,r);let s=ZA(a,o,t),c=s.processChildren?Ds(s.segmentGroup,s.index,a.commands):WC(s.segmentGroup,s.index,a.commands);return Bp(o,s.segmentGroup,c,e,i,r)}function Fd(t){return typeof t=="object"&&t!=null&&!t.outlets&&!t.segmentPath}function Es(t){return typeof t=="object"&&t!=null&&t.outlets}function xC(t,n,e){t||="\u0275";let i=new tn;return i.queryParams={[t]:n},e.parse(e.serialize(i)).queryParams[t]}function Bp(t,n,e,i,r,o){let a={};for(let[l,u]of Object.entries(i??{}))a[l]=Array.isArray(u)?u.map(f=>xC(l,f,o)):xC(l,u,o);let s;t===n?s=e:s=$C(t,n,e);let c=BC(VC(s));return new tn(c,a,r)}function $C(t,n,e){let i={};return Object.entries(t.children).forEach(([r,o])=>{o===n?i[r]=e:i[r]=$C(o,n,e)}),new pe(t.segments,i)}var Pd=class{isAbsolute;numberOfDoubleDots;commands;constructor(n,e,i){if(this.isAbsolute=n,this.numberOfDoubleDots=e,this.commands=i,n&&i.length>0&&Fd(i[0]))throw new D(4003,!1);let r=i.find(Es);if(r&&r!==kA(i))throw new D(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function qA(t){if(typeof t[0]=="string"&&t.length===1&&t[0]==="/")return new Pd(!0,0,t);let n=0,e=!1,i=t.reduce((r,o,a)=>{if(typeof o=="object"&&o!=null){if(o.outlets){let s={};return Object.entries(o.outlets).forEach(([c,l])=>{s[c]=typeof l=="string"?l.split("/"):l}),[...r,{outlets:s}]}if(o.segmentPath)return[...r,o.segmentPath]}return typeof o!="string"?[...r,o]:a===0?(o.split("/").forEach((s,c)=>{c==0&&s==="."||(c==0&&s===""?e=!0:s===".."?n++:s!=""&&r.push(s))}),r):[...r,o]},[]);return new Pd(e,n,i)}var To=class{segmentGroup;processChildren;index;constructor(n,e,i){this.segmentGroup=n,this.processChildren=e,this.index=i}};function ZA(t,n,e){if(t.isAbsolute)return new To(n,!0,0);if(!e)return new To(n,!1,NaN);if(e.parent===null)return new To(e,!0,0);let i=Fd(t.commands[0])?0:1,r=e.segments.length-1+i;return QA(e,r,t.numberOfDoubleDots)}function QA(t,n,e){let i=t,r=n,o=e;for(;o>r;){if(o-=r,i=i.parent,!i)throw new D(4005,!1);r=i.segments.length}return new To(i,!1,r-o)}function YA(t){return Es(t[0])?t[0].outlets:{[J]:t}}function WC(t,n,e){if(t??=new pe([],{}),t.segments.length===0&&t.hasChildren())return Ds(t,n,e);let i=KA(t,n,e),r=e.slice(i.commandIndex);if(i.match&&i.pathIndex<t.segments.length){let o=new pe(t.segments.slice(0,i.pathIndex),{});return o.children[J]=new pe(t.segments.slice(i.pathIndex),t.children),Ds(o,0,r)}else return i.match&&r.length===0?new pe(t.segments,{}):i.match&&!t.hasChildren()?Gp(t,n,e):i.match?Ds(t,0,r):Gp(t,n,e)}function Ds(t,n,e){if(e.length===0)return new pe(t.segments,{});{let i=YA(e),r={};if(Object.keys(i).some(o=>o!==J)&&t.children[J]&&t.numberOfChildren===1&&t.children[J].segments.length===0){let o=Ds(t.children[J],n,e);return new pe(t.segments,o.children)}return Object.entries(i).forEach(([o,a])=>{typeof a=="string"&&(a=[a]),a!==null&&(r[o]=WC(t.children[o],n,a))}),Object.entries(t.children).forEach(([o,a])=>{i[o]===void 0&&(r[o]=a)}),new pe(t.segments,r)}}function KA(t,n,e){let i=0,r=n,o={match:!1,pathIndex:0,commandIndex:0};for(;r<t.segments.length;){if(i>=e.length)return o;let a=t.segments[r],s=e[i];if(Es(s))break;let c=`${s}`,l=i<e.length-1?e[i+1]:null;if(r>0&&c===void 0)break;if(c&&l&&typeof l=="object"&&l.outlets===void 0){if(!IC(c,l,a))return o;i+=2}else{if(!IC(c,{},a))return o;i++}r++}return{match:!0,pathIndex:r,commandIndex:i}}function Gp(t,n,e){let i=t.segments.slice(0,n),r=0;for(;r<e.length;){let o=e[r];if(Es(o)){let c=XA(o.outlets);return new pe(i,c)}if(r===0&&Fd(e[0])){let c=t.segments[n];i.push(new Bi(c.path,EC(e[0]))),r++;continue}let a=Es(o)?o.outlets[J]:`${o}`,s=r<e.length-1?e[r+1]:null;a&&s&&Fd(s)?(i.push(new Bi(a,EC(s))),r+=2):(i.push(new Bi(a,{})),r++)}return new pe(i,{})}function XA(t){let n={};return Object.entries(t).forEach(([e,i])=>{typeof i=="string"&&(i=[i]),i!==null&&(n[e]=Gp(new pe([],{}),0,i))}),n}function EC(t){let n={};return Object.entries(t).forEach(([e,i])=>n[e]=`${i}`),n}function IC(t,n,e){return t==e.path&&zn(n,e.parameters)}var Ao="imperative",Ze=(function(t){return t[t.NavigationStart=0]="NavigationStart",t[t.NavigationEnd=1]="NavigationEnd",t[t.NavigationCancel=2]="NavigationCancel",t[t.NavigationError=3]="NavigationError",t[t.RoutesRecognized=4]="RoutesRecognized",t[t.ResolveStart=5]="ResolveStart",t[t.ResolveEnd=6]="ResolveEnd",t[t.GuardsCheckStart=7]="GuardsCheckStart",t[t.GuardsCheckEnd=8]="GuardsCheckEnd",t[t.RouteConfigLoadStart=9]="RouteConfigLoadStart",t[t.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",t[t.ChildActivationStart=11]="ChildActivationStart",t[t.ChildActivationEnd=12]="ChildActivationEnd",t[t.ActivationStart=13]="ActivationStart",t[t.ActivationEnd=14]="ActivationEnd",t[t.Scroll=15]="Scroll",t[t.NavigationSkipped=16]="NavigationSkipped",t})(Ze||{}),zt=class{id;url;constructor(n,e){this.id=n,this.url=e}},Vi=class extends zt{type=Ze.NavigationStart;navigationTrigger;restoredState;constructor(n,e,i="imperative",r=null){super(n,e),this.navigationTrigger=i,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},wn=class extends zt{urlAfterRedirects;type=Ze.NavigationEnd;constructor(n,e,i){super(n,e),this.urlAfterRedirects=i}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},pt=(function(t){return t[t.Redirect=0]="Redirect",t[t.SupersededByNewNavigation=1]="SupersededByNewNavigation",t[t.NoDataFromResolver=2]="NoDataFromResolver",t[t.GuardRejected=3]="GuardRejected",t[t.Aborted=4]="Aborted",t})(pt||{}),Oo=(function(t){return t[t.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",t[t.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",t})(Oo||{}),en=class extends zt{reason;code;type=Ze.NavigationCancel;constructor(n,e,i,r){super(n,e),this.reason=i,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function GC(t){return t instanceof en&&(t.code===pt.Redirect||t.code===pt.SupersededByNewNavigation)}var $n=class extends zt{reason;code;type=Ze.NavigationSkipped;constructor(n,e,i,r){super(n,e),this.reason=i,this.code=r}},Ir=class extends zt{error;target;type=Ze.NavigationError;constructor(n,e,i,r){super(n,e),this.error=i,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},Is=class extends zt{urlAfterRedirects;state;type=Ze.RoutesRecognized;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Ld=class extends zt{urlAfterRedirects;state;type=Ze.GuardsCheckStart;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},jd=class extends zt{urlAfterRedirects;state;shouldActivate;type=Ze.GuardsCheckEnd;constructor(n,e,i,r,o){super(n,e),this.urlAfterRedirects=i,this.state=r,this.shouldActivate=o}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},Bd=class extends zt{urlAfterRedirects;state;type=Ze.ResolveStart;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Vd=class extends zt{urlAfterRedirects;state;type=Ze.ResolveEnd;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Hd=class{route;type=Ze.RouteConfigLoadStart;constructor(n){this.route=n}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},Ud=class{route;type=Ze.RouteConfigLoadEnd;constructor(n){this.route=n}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},zd=class{snapshot;type=Ze.ChildActivationStart;constructor(n){this.snapshot=n}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},$d=class{snapshot;type=Ze.ChildActivationEnd;constructor(n){this.snapshot=n}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Wd=class{snapshot;type=Ze.ActivationStart;constructor(n){this.snapshot=n}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Gd=class{snapshot;type=Ze.ActivationEnd;constructor(n){this.snapshot=n}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Fo=class{routerEvent;position;anchor;scrollBehavior;type=Ze.Scroll;constructor(n,e,i,r){this.routerEvent=n,this.position=e,this.anchor=i,this.scrollBehavior=r}toString(){let n=this.position?`${this.position[0]}, ${this.position[1]}`:null;return`Scroll(anchor: '${this.anchor}', position: '${n}')`}},Po=class{},Ms=class{},Lo=class{url;navigationBehaviorOptions;constructor(n,e){this.url=n,this.navigationBehaviorOptions=e}};function JA(t){return!(t instanceof Po)&&!(t instanceof Lo)&&!(t instanceof Ms)}var qd=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(n){this.rootInjector=n,this.children=new kr(this.rootInjector)}},kr=(()=>{class t{rootInjector;contexts=new Map;constructor(e){this.rootInjector=e}onChildOutletCreated(e,i){let r=this.getOrCreateContext(e);r.outlet=i,this.contexts.set(e,r)}onChildOutletDestroyed(e){let i=this.getContext(e);i&&(i.outlet=null,i.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let i=this.getContext(e);return i||(i=new qd(this.rootInjector),this.contexts.set(e,i)),i}getContext(e){return this.contexts.get(e)||null}static \u0275fac=function(i){return new(i||t)(T(be))};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Zd=class{_root;constructor(n){this._root=n}get root(){return this._root.value}parent(n){let e=this.pathFromRoot(n);return e.length>1?e[e.length-2]:null}children(n){let e=qp(n,this._root);return e?e.children.map(i=>i.value):[]}firstChild(n){let e=qp(n,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(n){let e=Zp(n,this._root);return e.length<2?[]:e[e.length-2].children.map(r=>r.value).filter(r=>r!==n)}pathFromRoot(n){return Zp(n,this._root).map(e=>e.value)}};function qp(t,n){if(t===n.value)return n;for(let e of n.children){let i=qp(t,e);if(i)return i}return null}function Zp(t,n){if(t===n.value)return[n];for(let e of n.children){let i=Zp(t,e);if(i.length)return i.unshift(n),i}return[]}var Ut=class{value;children;constructor(n,e){this.value=n,this.children=e}toString(){return`TreeNode(${this.value})`}};function ko(t){let n={};return t&&t.children.forEach(e=>n[e.value.outlet]=e),n}var Ss=class extends Zd{snapshot;constructor(n,e){super(n),this.snapshot=e,ig(this,n)}toString(){return this.snapshot.toString()}};function qC(t,n){let e=eR(t,n),i=new Be([new Bi("",{})]),r=new Be({}),o=new Be({}),a=new Be({}),s=new Be(""),c=new mi(i,r,a,s,o,J,t,e.root);return c.snapshot=e.root,new Ss(new Ut(c,[]),e)}function eR(t,n){let e={},i={},r={},a=new jo([],e,r,"",i,J,t,null,{},n);return new ks("",new Ut(a,[]))}var mi=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(n,e,i,r,o,a,s,c){this.urlSubject=n,this.paramsSubject=e,this.queryParamsSubject=i,this.fragmentSubject=r,this.dataSubject=o,this.outlet=a,this.component=s,this._futureSnapshot=c,this.title=this.dataSubject?.pipe(X(l=>l[Rs]))??N(void 0),this.url=n,this.params=e,this.queryParams=i,this.fragment=r,this.data=o}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(X(n=>Er(n))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(X(n=>Er(n))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function ng(t,n,e="emptyOnly"){let i,{routeConfig:r}=t;return n!==null&&(e==="always"||r?.path===""||!n.component&&!n.routeConfig?.loadComponent)?i={params:v(v({},n.params),t.params),data:v(v({},n.data),t.data),resolve:v(v(v(v({},t.data),n.data),r?.data),t._resolvedData)}:i={params:v({},t.params),data:v({},t.data),resolve:v(v({},t.data),t._resolvedData??{})},r&&QC(r)&&(i.resolve[Rs]=r.title),i}var jo=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;get title(){return this.data?.[Rs]}constructor(n,e,i,r,o,a,s,c,l,u){this.url=n,this.params=e,this.queryParams=i,this.fragment=r,this.data=o,this.outlet=a,this.component=s,this.routeConfig=c,this._resolve=l,this._environmentInjector=u}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=Er(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=Er(this.queryParams),this._queryParamMap}toString(){let n=this.url.map(i=>i.toString()).join("/"),e=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${n}', path:'${e}')`}},ks=class extends Zd{url;constructor(n,e){super(e),this.url=n,ig(this,e)}toString(){return ZC(this._root)}};function ig(t,n){n.value._routerState=t,n.children.forEach(e=>ig(t,e))}function ZC(t){let n=t.children.length>0?` { ${t.children.map(ZC).join(", ")} } `:"";return`${t.value}${n}`}function Vp(t){if(t.snapshot){let n=t.snapshot,e=t._futureSnapshot;t.snapshot=e,zn(n.queryParams,e.queryParams)||t.queryParamsSubject.next(e.queryParams),n.fragment!==e.fragment&&t.fragmentSubject.next(e.fragment),zn(n.params,e.params)||t.paramsSubject.next(e.params),SA(n.url,e.url)||t.urlSubject.next(e.url),zn(n.data,e.data)||t.dataSubject.next(e.data)}else t.snapshot=t._futureSnapshot,t.dataSubject.next(t._futureSnapshot.data)}function Qp(t,n){let e=zn(t.params,n.params)&&NA(t.url,n.url),i=!t.parent!=!n.parent;return e&&!i&&(!t.parent||Qp(t.parent,n.parent))}function QC(t){return typeof t.title=="string"||t.title===null}var YC=new g(""),Ns=(()=>{class t{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=J;activateEvents=new R;deactivateEvents=new R;attachEvents=new R;detachEvents=new R;routerOutletData=md();parentContexts=d(kr);location=d(Ct);changeDetector=d(qe);inputBinder=d(Os,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(e){if(e.name){let{firstChange:i,previousValue:r}=e.name;if(i)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new D(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new D(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new D(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,i){this.activated=e,this._activatedRoute=i,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,i){if(this.isActivated)throw new D(4013,!1);this._activatedRoute=e;let r=this.location,a=e.snapshot.component,s=this.parentContexts.getOrCreateContext(this.name).children,c=new Yp(e,s,r.injector,this.routerOutletData);this.activated=r.createComponent(a,{index:r.length,injector:c,environmentInjector:i}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(i){return new(i||t)};static \u0275dir=S({type:t,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[Ne]})}return t})(),Yp=class{route;childContexts;parent;outletData;constructor(n,e,i,r){this.route=n,this.childContexts=e,this.parent=i,this.outletData=r}get(n,e){return n===mi?this.route:n===kr?this.childContexts:n===YC?this.outletData:this.parent.get(n,e)}},Os=new g(""),rg=(()=>{class t{outletDataSubscriptions=new Map;bindActivatedRouteToOutletComponent(e){this.unsubscribeFromRouteData(e),this.subscribeToRouteData(e)}unsubscribeFromRouteData(e){this.outletDataSubscriptions.get(e)?.unsubscribe(),this.outletDataSubscriptions.delete(e)}subscribeToRouteData(e){let{activatedRoute:i}=e,r=Kr([i.queryParams,i.params,i.data]).pipe(it(([o,a,s],c)=>(s=v(v(v({},o),a),s),c===0?N(s):Promise.resolve(s)))).subscribe(o=>{if(!e.isActivated||!e.activatedComponentRef||e.activatedRoute!==i||i.component===null){this.unsubscribeFromRouteData(e);return}let a=Qw(i.component);if(!a){this.unsubscribeFromRouteData(e);return}for(let{templateName:s}of a.inputs)e.activatedComponentRef.setInput(s,o[s])});this.outletDataSubscriptions.set(e,r)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=p({token:t,factory:t.\u0275fac})}return t})(),og=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=E({type:t,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(i,r){i&1&&fe(0,"router-outlet")},dependencies:[Ns],encapsulation:2})}return t})();function ag(t){let n=t.children&&t.children.map(ag),e=n?W(v({},t),{children:n}):v({},t);return!e.component&&!e.loadComponent&&(n||e.loadChildren)&&e.outlet&&e.outlet!==J&&(e.component=og),e}function tR(t,n,e){let i=Ts(t,n._root,e?e._root:void 0);return new Ss(i,n)}function Ts(t,n,e){if(e&&t.shouldReuseRoute(n.value,e.value.snapshot)){let i=e.value;i._futureSnapshot=n.value;let r=nR(t,n,e);return new Ut(i,r)}else{if(t.shouldAttach(n.value)){let o=t.retrieve(n.value);if(o!==null){let a=o.route;return a.value._futureSnapshot=n.value,a.children=n.children.map(s=>Ts(t,s)),a}}let i=iR(n.value),r=n.children.map(o=>Ts(t,o));return new Ut(i,r)}}function nR(t,n,e){return n.children.map(i=>{for(let r of e.children)if(t.shouldReuseRoute(i.value,r.value.snapshot))return Ts(t,i,r);return Ts(t,i)})}function iR(t){return new mi(new Be(t.url),new Be(t.params),new Be(t.queryParams),new Be(t.fragment),new Be(t.data),t.outlet,t.component,t)}var Bo=class{redirectTo;navigationBehaviorOptions;constructor(n,e){this.redirectTo=n,this.navigationBehaviorOptions=e}},KC="ngNavigationCancelingError";function Qd(t,n){let{redirectTo:e,navigationBehaviorOptions:i}=No(n)?{redirectTo:n,navigationBehaviorOptions:void 0}:n,r=XC(!1,pt.Redirect);return r.url=e,r.navigationBehaviorOptions=i,r}function XC(t,n){let e=new Error(`NavigationCancelingError: ${t||""}`);return e[KC]=!0,e.cancellationCode=n,e}function rR(t){return JC(t)&&No(t.url)}function JC(t){return!!t&&t[KC]}var Kp=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(n,e,i,r,o){this.routeReuseStrategy=n,this.futureState=e,this.currState=i,this.forwardEvent=r,this.inputBindingEnabled=o}activate(n){let e=this.futureState._root,i=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,i,n),Vp(this.futureState.root),this.activateChildRoutes(e,i,n)}deactivateChildRoutes(n,e,i){let r=ko(e);n.children.forEach(o=>{let a=o.value.outlet;this.deactivateRoutes(o,r[a],i),delete r[a]}),Object.values(r).forEach(o=>{this.deactivateRouteAndItsChildren(o,i)})}deactivateRoutes(n,e,i){let r=n.value,o=e?e.value:null;if(r===o)if(r.component){let a=i.getContext(r.outlet);a&&this.deactivateChildRoutes(n,e,a.children)}else this.deactivateChildRoutes(n,e,i);else o&&this.deactivateRouteAndItsChildren(e,i)}deactivateRouteAndItsChildren(n,e){n.value.component&&this.routeReuseStrategy.shouldDetach(n.value.snapshot)?this.detachAndStoreRouteSubtree(n,e):this.deactivateRouteAndOutlet(n,e)}detachAndStoreRouteSubtree(n,e){let i=e.getContext(n.value.outlet),r=i&&n.value.component?i.children:e,o=ko(n);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,r);if(i&&i.outlet){let a=i.outlet.detach(),s=i.children.onOutletDeactivated();this.routeReuseStrategy.store(n.value.snapshot,{componentRef:a,route:n,contexts:s})}}deactivateRouteAndOutlet(n,e){let i=e.getContext(n.value.outlet),r=i&&n.value.component?i.children:e,o=ko(n);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,r);i&&(i.outlet&&(i.outlet.deactivate(),i.children.onOutletDeactivated()),i.attachRef=null,i.route=null)}activateChildRoutes(n,e,i){let r=ko(e);n.children.forEach(o=>{this.activateRoutes(o,r[o.value.outlet],i),this.forwardEvent(new Gd(o.value.snapshot))}),n.children.length&&this.forwardEvent(new $d(n.value.snapshot))}activateRoutes(n,e,i){let r=n.value,o=e?e.value:null;if(Vp(r),r===o)if(r.component){let a=i.getOrCreateContext(r.outlet);this.activateChildRoutes(n,e,a.children)}else this.activateChildRoutes(n,e,i);else if(r.component){let a=i.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let s=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),a.children.onOutletReAttached(s.contexts),a.attachRef=s.componentRef,a.route=s.route.value,a.outlet&&a.outlet.attach(s.componentRef,s.route.value),Vp(s.route.value),this.activateChildRoutes(n,null,a.children)}else a.attachRef=null,a.route=r,a.outlet&&a.outlet.activateWith(r,a.injector),this.activateChildRoutes(n,null,a.children)}else this.activateChildRoutes(n,null,i)}},Yd=class{path;route;constructor(n){this.path=n,this.route=this.path[this.path.length-1]}},Ro=class{component;route;constructor(n,e){this.component=n,this.route=e}};function oR(t,n,e){let i=t._root,r=n?n._root:null;return Cs(i,r,e,[i.value])}function aR(t){let n=t.routeConfig?t.routeConfig.canActivateChild:null;return!n||n.length===0?null:{node:t,guards:n}}function Ho(t,n){let e=Symbol(),i=n.get(t,e);return i===e?typeof t=="function"&&!$f(t)?t:n.get(t):i}function Cs(t,n,e,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=ko(n);return t.children.forEach(a=>{sR(a,o[a.value.outlet],e,i.concat([a.value]),r),delete o[a.value.outlet]}),Object.entries(o).forEach(([a,s])=>xs(s,e.getContext(a),r)),r}function sR(t,n,e,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=t.value,a=n?n.value:null,s=e?e.getContext(t.value.outlet):null;if(a&&o.routeConfig===a.routeConfig){let c=cR(a,o,o.routeConfig.runGuardsAndResolvers);c?r.canActivateChecks.push(new Yd(i)):(o.data=a.data,o._resolvedData=a._resolvedData),o.component?Cs(t,n,s?s.children:null,i,r):Cs(t,n,e,i,r),c&&s&&s.outlet&&s.outlet.isActivated&&r.canDeactivateChecks.push(new Ro(s.outlet.component,a))}else a&&xs(n,s,r),r.canActivateChecks.push(new Yd(i)),o.component?Cs(t,null,s?s.children:null,i,r):Cs(t,null,e,i,r);return r}function cR(t,n,e){if(typeof e=="function")return Ge(n._environmentInjector,()=>e(t,n));switch(e){case"pathParamsChange":return!xr(t.url,n.url);case"pathParamsOrQueryParamsChange":return!xr(t.url,n.url)||!zn(t.queryParams,n.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!Qp(t,n)||!zn(t.queryParams,n.queryParams);default:return!Qp(t,n)}}function xs(t,n,e){let i=ko(t),r=t.value;Object.entries(i).forEach(([o,a])=>{r.component?n?xs(a,n.children.getContext(o),e):xs(a,null,e):xs(a,n,e)}),r.component?n&&n.outlet&&n.outlet.isActivated?e.canDeactivateChecks.push(new Ro(n.outlet.component,r)):e.canDeactivateChecks.push(new Ro(null,r)):e.canDeactivateChecks.push(new Ro(null,r))}function Fs(t){return typeof t=="function"}function lR(t){return typeof t=="boolean"}function dR(t){return t&&Fs(t.canLoad)}function uR(t){return t&&Fs(t.canActivate)}function fR(t){return t&&Fs(t.canActivateChild)}function mR(t){return t&&Fs(t.canDeactivate)}function hR(t){return t&&Fs(t.canMatch)}function e0(t){return t instanceof Gn||t?.name==="EmptyError"}var Td=Symbol("INITIAL_VALUE");function Vo(){return it(t=>Kr(t.map(n=>n.pipe(ze(1),ct(Td)))).pipe(X(n=>{for(let e of n)if(e!==!0){if(e===Td)return Td;if(e===!1||pR(e))return e}return!0}),le(n=>n!==Td),ze(1)))}function pR(t){return No(t)||t instanceof Bo}function t0(t){return t.aborted?N(void 0).pipe(ze(1)):new q(n=>{let e=()=>{n.next(),n.complete()};return t.addEventListener("abort",e),()=>t.removeEventListener("abort",e)})}function n0(t){return $e(t0(t))}function gR(t){return nt(n=>{let{targetSnapshot:e,currentSnapshot:i,guards:{canActivateChecks:r,canDeactivateChecks:o}}=n;return o.length===0&&r.length===0?N(W(v({},n),{guardsResult:!0})):bR(o,e,i).pipe(nt(a=>a&&lR(a)?vR(e,r,t):N(a)),X(a=>W(v({},n),{guardsResult:a})))})}function bR(t,n,e){return Ee(t).pipe(nt(i=>DR(i.component,i.route,e,n)),Qn(i=>i!==!0,!0))}function vR(t,n,e){return Ee(n).pipe(Di(i=>wi(yR(i.route.parent,e),_R(i.route,e),CR(t,i.path),wR(t,i.route))),Qn(i=>i!==!0,!0))}function _R(t,n){return t!==null&&n&&n(new Wd(t)),N(!0)}function yR(t,n){return t!==null&&n&&n(new zd(t)),N(!0)}function wR(t,n){let e=n.routeConfig?n.routeConfig.canActivate:null;if(!e||e.length===0)return N(!0);let i=e.map(r=>qn(()=>{let o=n._environmentInjector,a=Ho(r,o),s=uR(a)?a.canActivate(n,t):Ge(o,()=>a(n,t));return Mr(s).pipe(Qn())}));return N(i).pipe(Vo())}function CR(t,n){let e=n[n.length-1],r=n.slice(0,n.length-1).reverse().map(o=>aR(o)).filter(o=>o!==null).map(o=>qn(()=>{let a=o.guards.map(s=>{let c=o.node._environmentInjector,l=Ho(s,c),u=fR(l)?l.canActivateChild(e,t):Ge(c,()=>l(e,t));return Mr(u).pipe(Qn())});return N(a).pipe(Vo())}));return N(r).pipe(Vo())}function DR(t,n,e,i){let r=n&&n.routeConfig?n.routeConfig.canDeactivate:null;if(!r||r.length===0)return N(!0);let o=r.map(a=>{let s=n._environmentInjector,c=Ho(a,s),l=mR(c)?c.canDeactivate(t,n,e,i):Ge(s,()=>c(t,n,e,i));return Mr(l).pipe(Qn())});return N(o).pipe(Vo())}function xR(t,n,e,i,r){let o=n.canLoad;if(o===void 0||o.length===0)return N(!0);let a=o.map(s=>{let c=Ho(s,t),l=dR(c)?c.canLoad(n,e):Ge(t,()=>c(n,e)),u=Mr(l);return r?u.pipe(n0(r)):u});return N(a).pipe(Vo(),i0(i))}function i0(t){return xf(Oe(n=>{if(typeof n!="boolean")throw Qd(t,n)}),X(n=>n===!0))}function ER(t,n,e,i,r,o){let a=n.canMatch;if(!a||a.length===0)return N(!0);let s=a.map(c=>{let l=Ho(c,t),u=hR(l)?l.canMatch(n,e,r):Ge(t,()=>l(n,e,r));return Mr(u).pipe(n0(o))});return N(s).pipe(Vo(),i0(i))}var ui=class t extends Error{segmentGroup;constructor(n){super(),this.segmentGroup=n||null,Object.setPrototypeOf(this,t.prototype)}},As=class t extends Error{urlTree;constructor(n){super(),this.urlTree=n,Object.setPrototypeOf(this,t.prototype)}};function IR(t){throw new D(4e3,!1)}function MR(t){throw XC(!1,pt.GuardRejected)}var Xp=class{urlSerializer;urlTree;constructor(n,e){this.urlSerializer=n,this.urlTree=e}async lineralizeSegments(n,e){let i=[],r=e.root;for(;;){if(i=i.concat(r.segments),r.numberOfChildren===0)return i;if(r.numberOfChildren>1||!r.children[J])throw IR(`${n.redirectTo}`);r=r.children[J]}}async applyRedirectCommands(n,e,i,r,o){let a=await SR(e,r,o);if(a instanceof tn)throw new As(a);let s=this.applyRedirectCreateUrlTree(a,this.urlSerializer.parse(a),n,i);if(a[0]==="/")throw new As(s);return s}applyRedirectCreateUrlTree(n,e,i,r){let o=this.createSegmentGroup(n,e.root,i,r);return new tn(o,this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(n,e){let i={};return Object.entries(n).forEach(([r,o])=>{if(typeof o=="string"&&o[0]===":"){let s=o.substring(1);i[r]=e[s]}else i[r]=o}),i}createSegmentGroup(n,e,i,r){let o=this.createSegments(n,e.segments,i,r),a={};return Object.entries(e.children).forEach(([s,c])=>{a[s]=this.createSegmentGroup(n,c,i,r)}),new pe(o,a)}createSegments(n,e,i,r){return e.map(o=>o.path[0]===":"?this.findPosParam(n,o,r):this.findOrReturn(o,i))}findPosParam(n,e,i){let r=i[e.path.substring(1)];if(!r)throw new D(4001,!1);return r}findOrReturn(n,e){let i=0;for(let r of e){if(r.path===n.path)return e.splice(i),r;i++}return n}};function SR(t,n,e){if(typeof t=="string")return Promise.resolve(t);let i=t;return Od(Mr(Ge(e,()=>i(n))))}function kR(t,n){return t.providers&&!t._injector&&(t._injector=Co(t.providers,n,`Route: ${t.path}`)),t._injector??n}function yn(t){return t.outlet||J}function TR(t,n){let e=t.filter(i=>yn(i)===n);return e.push(...t.filter(i=>yn(i)!==n)),e}var Jp={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function r0(t){return{routeConfig:t.routeConfig,url:t.url,params:t.params,queryParams:t.queryParams,fragment:t.fragment,data:t.data,outlet:t.outlet,title:t.title,paramMap:t.paramMap,queryParamMap:t.queryParamMap}}function AR(t,n,e,i,r,o,a){let s=o0(t,n,e);if(!s.matched)return N(s);let c=r0(o(s));return i=kR(n,i),ER(i,n,e,r,c,a).pipe(X(l=>l===!0?s:v({},Jp)))}function o0(t,n,e){if(n.path==="")return n.pathMatch==="full"&&(t.hasChildren()||e.length>0)?v({},Jp):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let r=(n.matcher||kC)(e,t,n);if(!r)return v({},Jp);let o={};Object.entries(r.posParams??{}).forEach(([s,c])=>{o[s]=c.path});let a=r.consumed.length>0?v(v({},o),r.consumed[r.consumed.length-1].parameters):o;return{matched:!0,consumedSegments:r.consumed,remainingSegments:e.slice(r.consumed.length),parameters:a,positionalParamSegments:r.posParams??{}}}function MC(t,n,e,i,r){return e.length>0&&OR(t,e,i,r)?{segmentGroup:new pe(n,NR(i,new pe(e,t.children))),slicedSegments:[]}:e.length===0&&FR(t,e,i)?{segmentGroup:new pe(t.segments,RR(t,e,i,t.children)),slicedSegments:e}:{segmentGroup:new pe(t.segments,t.children),slicedSegments:e}}function RR(t,n,e,i){let r={};for(let o of e)if(Xd(t,n,o)&&!i[yn(o)]){let a=new pe([],{});r[yn(o)]=a}return v(v({},i),r)}function NR(t,n){let e={};e[J]=n;for(let i of t)if(i.path===""&&yn(i)!==J){let r=new pe([],{});e[yn(i)]=r}return e}function OR(t,n,e,i){return e.some(r=>!Xd(t,n,r)||!(yn(r)!==J)?!1:!(i!==void 0&&yn(r)===i))}function FR(t,n,e){return e.some(i=>Xd(t,n,i))}function Xd(t,n,e){return(t.hasChildren()||n.length>0)&&e.pathMatch==="full"?!1:e.path===""}function PR(t,n,e){return n.length===0&&!t.children[e]}var eg=class{};async function LR(t,n,e,i,r,o,a="emptyOnly",s){return new tg(t,n,e,i,r,a,o,s).recognize()}var jR=31,tg=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(n,e,i,r,o,a,s,c){this.injector=n,this.configLoader=e,this.rootComponentType=i,this.config=r,this.urlTree=o,this.paramsInheritanceStrategy=a,this.urlSerializer=s,this.abortSignal=c,this.applyRedirects=new Xp(this.urlSerializer,this.urlTree)}noMatchError(n){return new D(4002,`'${n.segmentGroup}'`)}async recognize(){let n=MC(this.urlTree.root,[],[],this.config).segmentGroup,{children:e,rootSnapshot:i}=await this.match(n),r=new Ut(i,e),o=new ks("",r),a=HC(i,[],this.urlTree.queryParams,this.urlTree.fragment);return a.queryParams=this.urlTree.queryParams,o.url=this.urlSerializer.serialize(a),{state:o,tree:a}}async match(n){let e=new jo([],Object.freeze({}),Object.freeze(v({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),J,this.rootComponentType,null,{},this.injector);try{return{children:await this.processSegmentGroup(this.injector,this.config,n,J,e),rootSnapshot:e}}catch(i){if(i instanceof As)return this.urlTree=i.urlTree,this.match(i.urlTree.root);throw i instanceof ui?this.noMatchError(i):i}}async processSegmentGroup(n,e,i,r,o){if(i.segments.length===0&&i.hasChildren())return this.processChildren(n,e,i,o);let a=await this.processSegment(n,e,i,i.segments,r,!0,o);return a instanceof Ut?[a]:[]}async processChildren(n,e,i,r){let o=[];for(let c of Object.keys(i.children))c==="primary"?o.unshift(c):o.push(c);let a=[];for(let c of o){let l=i.children[c],u=TR(e,c),f=await this.processSegmentGroup(n,u,l,c,r);a.push(...f)}let s=a0(a);return BR(s),s}async processSegment(n,e,i,r,o,a,s){for(let c of e)try{return await this.processSegmentAgainstRoute(c._injector??n,e,c,i,r,o,a,s)}catch(l){if(l instanceof ui||e0(l))continue;throw l}if(PR(i,r,o))return new eg;throw new ui(i)}async processSegmentAgainstRoute(n,e,i,r,o,a,s,c){if(yn(i)!==a&&(a===J||!Xd(r,o,i)))throw new ui(r);if(i.redirectTo===void 0)return this.matchSegmentAgainstRoute(n,r,i,o,a,c);if(this.allowRedirects&&s)return this.expandSegmentAgainstRouteUsingRedirect(n,r,e,i,o,a,c);throw new ui(r)}async expandSegmentAgainstRouteUsingRedirect(n,e,i,r,o,a,s){let{matched:c,parameters:l,consumedSegments:u,positionalParamSegments:f,remainingSegments:m}=o0(e,r,o);if(!c)throw new ui(e);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>jR&&(this.allowRedirects=!1));let h=this.createSnapshot(n,r,o,l,s);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let b=await this.applyRedirects.applyRedirectCommands(u,r.redirectTo,f,r0(h),n),w=await this.applyRedirects.lineralizeSegments(r,b);return this.processSegment(n,i,e,w.concat(m),a,!1,s)}createSnapshot(n,e,i,r,o){let a=new jo(i,r,Object.freeze(v({},this.urlTree.queryParams)),this.urlTree.fragment,HR(e),yn(e),e.component??e._loadedComponent??null,e,UR(e),n),s=ng(a,o,this.paramsInheritanceStrategy);return a.params=Object.freeze(s.params),a.data=Object.freeze(s.data),a}async matchSegmentAgainstRoute(n,e,i,r,o,a){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let s=Ke=>this.createSnapshot(n,i,Ke.consumedSegments,Ke.parameters,a),c=await Od(AR(e,i,r,n,this.urlSerializer,s,this.abortSignal));if(i.path==="**"&&(e.children={}),!c?.matched)throw new ui(e);n=i._injector??n;let{routes:l}=await this.getChildConfig(n,i,r),u=i._loadedInjector??n,{parameters:f,consumedSegments:m,remainingSegments:h}=c,b=this.createSnapshot(n,i,m,f,a),{segmentGroup:w,slicedSegments:I}=MC(e,m,h,l,o);if(I.length===0&&w.hasChildren()){let Ke=await this.processChildren(u,l,w,b);return new Ut(b,Ke)}if(l.length===0&&I.length===0)return new Ut(b,[]);let A=yn(i)===o,he=await this.processSegment(u,l,w,I,A?J:o,!0,b);return new Ut(b,he instanceof Ut?[he]:[])}async getChildConfig(n,e,i){if(e.children)return{routes:e.children,injector:n};if(e.loadChildren){if(e._loadedRoutes!==void 0){let o=e._loadedNgModuleFactory;return o&&!e._loadedInjector&&(e._loadedInjector=o.create(n).injector),{routes:e._loadedRoutes,injector:e._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(await Od(xR(n,e,i,this.urlSerializer,this.abortSignal))){let o=await this.configLoader.loadChildren(n,e);return e._loadedRoutes=o.routes,e._loadedInjector=o.injector,e._loadedNgModuleFactory=o.factory,o}throw MR(e)}return{routes:[],injector:n}}};function BR(t){t.sort((n,e)=>n.value.outlet===J?-1:e.value.outlet===J?1:n.value.outlet.localeCompare(e.value.outlet))}function VR(t){let n=t.value.routeConfig;return n&&n.path===""}function a0(t){let n=[],e=new Set;for(let i of t){if(!VR(i)){n.push(i);continue}let r=n.find(o=>i.value.routeConfig===o.value.routeConfig);r!==void 0?(r.children.push(...i.children),e.add(r)):n.push(i)}for(let i of e){let r=a0(i.children);n.push(new Ut(i.value,r))}return n.filter(i=>!e.has(i))}function HR(t){return t.data||{}}function UR(t){return t.resolve||{}}function zR(t,n,e,i,r,o,a){return nt(async s=>{let{state:c,tree:l}=await LR(t,n,e,i,s.extractedUrl,r,o,a);return W(v({},s),{targetSnapshot:c,urlAfterRedirects:l})})}function $R(t){return nt(n=>{let{targetSnapshot:e,guards:{canActivateChecks:i}}=n;if(!i.length)return N(n);let r=new Set(i.map(s=>s.route)),o=new Set;for(let s of r)if(!o.has(s))for(let c of s0(s))o.add(c);let a=0;return Ee(o).pipe(Di(s=>r.has(s)?WR(s,e,t):(s.data=ng(s,s.parent,t).resolve,N(void 0))),Oe(()=>a++),Vc(1),nt(s=>a===o.size?N(n):Te))})}function s0(t){let n=t.children.map(e=>s0(e)).flat();return[t,...n]}function WR(t,n,e){let i=t.routeConfig,r=t._resolve;return i?.title!==void 0&&!QC(i)&&(r[Rs]=i.title),qn(()=>(t.data=ng(t,t.parent,e).resolve,GR(r,t,n).pipe(X(o=>(t._resolvedData=o,t.data=v(v({},t.data),o),null)))))}function GR(t,n,e){let i=Up(t);if(i.length===0)return N({});let r={};return Ee(i).pipe(nt(o=>qR(t[o],n,e).pipe(Qn(),Oe(a=>{if(a instanceof Bo)throw Qd(new fi,a);r[o]=a}))),Vc(1),X(()=>r),Ci(o=>e0(o)?Te:Ma(o)))}function qR(t,n,e){let i=n._environmentInjector,r=Ho(t,i),o=r.resolve?r.resolve(n,e):Ge(i,()=>r(n,e));return Mr(o)}function SC(t){return it(n=>{let e=t(n);return e?Ee(e).pipe(X(()=>n)):N(n)})}var sg=(()=>{class t{buildTitle(e){let i,r=e.root;for(;r!==void 0;)i=this.getResolvedTitleForRoute(r)??i,r=r.children.find(o=>o.outlet===J);return i}getResolvedTitleForRoute(e){return e.data[Rs]}static \u0275fac=function(i){return new(i||t)};static \u0275prov=p({token:t,factory:()=>d(c0),providedIn:"root"})}return t})(),c0=(()=>{class t extends sg{title;constructor(e){super(),this.title=e}updateTitle(e){let i=this.buildTitle(e);i!==void 0&&this.title.setTitle(i)}static \u0275fac=function(i){return new(i||t)(T(yC))};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Tr=new g("",{factory:()=>({})}),Ar=new g(""),Jd=(()=>{class t{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=d(sp);async loadComponent(e,i){if(this.componentLoaders.get(i))return this.componentLoaders.get(i);if(i._loadedComponent)return Promise.resolve(i._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(i);let r=(async()=>{try{let o=await AC(Ge(e,()=>i.loadComponent())),a=await u0(d0(o));return this.onLoadEndListener&&this.onLoadEndListener(i),i._loadedComponent=a,a}finally{this.componentLoaders.delete(i)}})();return this.componentLoaders.set(i,r),r}loadChildren(e,i){if(this.childrenLoaders.get(i))return this.childrenLoaders.get(i);if(i._loadedRoutes)return Promise.resolve({routes:i._loadedRoutes,injector:i._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(i);let r=(async()=>{try{let o=await l0(i,this.compiler,e,this.onLoadEndListener);return i._loadedRoutes=o.routes,i._loadedInjector=o.injector,i._loadedNgModuleFactory=o.factory,o}finally{this.childrenLoaders.delete(i)}})();return this.childrenLoaders.set(i,r),r}static \u0275fac=function(i){return new(i||t)};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();async function l0(t,n,e,i){let r=await AC(Ge(e,()=>t.loadChildren())),o=await u0(d0(r)),a;o instanceof td||Array.isArray(o)?a=o:a=await n.compileModuleAsync(o),i&&i(t);let s,c,l=!1,u;return Array.isArray(a)?(c=a,l=!0):(s=a.create(e).injector,u=a,c=s.get(Ar,[],{optional:!0,self:!0}).flat()),{routes:c.map(ag),injector:s,factory:u}}function ZR(t){return t&&typeof t=="object"&&"default"in t}function d0(t){return ZR(t)?t.default:t}async function u0(t){return t}var eu=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=p({token:t,factory:()=>d(QR),providedIn:"root"})}return t})(),QR=(()=>{class t{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,i){return e}static \u0275fac=function(i){return new(i||t)};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),cg=new g(""),lg=new g("");function f0(t,n,e){let i=t.get(lg),r=t.get(L);if(!r.startViewTransition||i.skipNextTransition)return i.skipNextTransition=!1,new Promise(l=>setTimeout(l));let o,a=new Promise(l=>{o=l}),s=r.startViewTransition(()=>(o(),YR(t)));s.updateCallbackDone.catch(l=>{}),s.ready.catch(l=>{}),s.finished.catch(l=>{});let{onViewTransitionCreated:c}=i;return c&&Ge(t,()=>c({transition:s,from:n,to:e})),a}function YR(t){return new Promise(n=>{at({read:()=>setTimeout(n)},{injector:t})})}var KR=()=>{},dg=new g(""),tu=(()=>{class t{currentNavigation=V(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=V(null);events=new x;transitionAbortWithErrorSubject=new x;configLoader=d(Jd);environmentInjector=d(be);destroyRef=d(ot);urlSerializer=d(Sr);rootContexts=d(kr);location=d(Un);inputBindingEnabled=d(Os,{optional:!0})!==null;titleStrategy=d(sg);options=d(Tr,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=d(eu);createViewTransition=d(cg,{optional:!0});navigationErrorHandler=d(dg,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>N(void 0);rootComponentType=null;destroyed=!1;constructor(){let e=r=>this.events.next(new Hd(r)),i=r=>this.events.next(new Ud(r));this.configLoader.onLoadEndListener=i,this.configLoader.onLoadStartListener=e,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(e){let i=++this.navigationId;Ue(()=>{this.transitions?.next(W(v({},e),{extractedUrl:this.urlHandlingStrategy.extract(e.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:i,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(e){return this.transitions=new Be(null),this.transitions.pipe(le(i=>i!==null),it(i=>{let r=!1,o=new AbortController,a=()=>!r&&this.currentTransition?.id===i.id;return N(i).pipe(it(s=>{if(this.navigationId>i.id)return this.cancelNavigationTransition(i,"",pt.SupersededByNewNavigation),Te;this.currentTransition=i;let c=this.lastSuccessfulNavigation();this.currentNavigation.set({id:s.id,initialUrl:s.rawUrl,extractedUrl:s.extractedUrl,targetBrowserUrl:typeof s.extras.browserUrl=="string"?this.urlSerializer.parse(s.extras.browserUrl):s.extras.browserUrl,trigger:s.source,extras:s.extras,previousNavigation:c?W(v({},c),{previousNavigation:null}):null,abort:()=>o.abort(),routesRecognizeHandler:s.routesRecognizeHandler,beforeActivateHandler:s.beforeActivateHandler});let l=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),u=s.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!l&&u!=="reload")return this.events.next(new $n(s.id,this.urlSerializer.serialize(s.rawUrl),"",Oo.IgnoredSameUrlNavigation)),s.resolve(!1),Te;if(this.urlHandlingStrategy.shouldProcessUrl(s.rawUrl))return N(s).pipe(it(f=>(this.events.next(new Vi(f.id,this.urlSerializer.serialize(f.extractedUrl),f.source,f.restoredState)),f.id!==this.navigationId?Te:Promise.resolve(f))),zR(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy,o.signal),Oe(f=>{i.targetSnapshot=f.targetSnapshot,i.urlAfterRedirects=f.urlAfterRedirects,this.currentNavigation.update(m=>(m.finalUrl=f.urlAfterRedirects,m)),this.events.next(new Ms)}),it(f=>Ee(i.routesRecognizeHandler.deferredHandle??N(void 0)).pipe(X(()=>f))),Oe(()=>{let f=new Is(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(f)}));if(l&&this.urlHandlingStrategy.shouldProcessUrl(s.currentRawUrl)){let{id:f,extractedUrl:m,source:h,restoredState:b,extras:w}=s,I=new Vi(f,this.urlSerializer.serialize(m),h,b);this.events.next(I);let A=qC(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=i=W(v({},s),{targetSnapshot:A,urlAfterRedirects:m,extras:W(v({},w),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(he=>(he.finalUrl=m,he)),N(i)}else return this.events.next(new $n(s.id,this.urlSerializer.serialize(s.extractedUrl),"",Oo.IgnoredByUrlHandlingStrategy)),s.resolve(!1),Te}),X(s=>{let c=new Ld(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);return this.events.next(c),this.currentTransition=i=W(v({},s),{guards:oR(s.targetSnapshot,s.currentSnapshot,this.rootContexts)}),i}),gR(s=>this.events.next(s)),it(s=>{if(i.guardsResult=s.guardsResult,s.guardsResult&&typeof s.guardsResult!="boolean")throw Qd(this.urlSerializer,s.guardsResult);let c=new jd(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot,!!s.guardsResult);if(this.events.next(c),!a())return Te;if(!s.guardsResult)return this.cancelNavigationTransition(s,"",pt.GuardRejected),Te;if(s.guards.canActivateChecks.length===0)return N(s);let l=new Bd(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);if(this.events.next(l),!a())return Te;let u=!1;return N(s).pipe($R(this.paramsInheritanceStrategy),Oe({next:()=>{u=!0;let f=new Vd(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(f)},complete:()=>{u||this.cancelNavigationTransition(s,"",pt.NoDataFromResolver)}}))}),SC(s=>{let c=u=>{let f=[];if(u.routeConfig?._loadedComponent)u.component=u.routeConfig?._loadedComponent;else if(u.routeConfig?.loadComponent){let m=u._environmentInjector;f.push(this.configLoader.loadComponent(m,u.routeConfig).then(h=>{u.component=h}))}for(let m of u.children)f.push(...c(m));return f},l=c(s.targetSnapshot.root);return l.length===0?N(s):Ee(Promise.all(l).then(()=>s))}),SC(()=>this.afterPreactivation()),it(()=>{let{currentSnapshot:s,targetSnapshot:c}=i,l=this.createViewTransition?.(this.environmentInjector,s.root,c.root);return l?Ee(l).pipe(X(()=>i)):N(i)}),ze(1),it(s=>{let c=tR(e.routeReuseStrategy,s.targetSnapshot,s.currentRouterState);this.currentTransition=i=s=W(v({},s),{targetRouterState:c}),this.currentNavigation.update(u=>(u.targetRouterState=c,u)),this.events.next(new Po);let l=i.beforeActivateHandler.deferredHandle;return l?Ee(l.then(()=>s)):N(s)}),Oe(s=>{new Kp(e.routeReuseStrategy,i.targetRouterState,i.currentRouterState,c=>this.events.next(c),this.inputBindingEnabled).activate(this.rootContexts),a()&&(r=!0,this.currentNavigation.update(c=>(c.abort=KR,c)),this.lastSuccessfulNavigation.set(Ue(this.currentNavigation)),this.events.next(new wn(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects))),this.titleStrategy?.updateTitle(s.targetRouterState.snapshot),s.resolve(!0))}),$e(t0(o.signal).pipe(le(()=>!r&&!i.targetRouterState),Oe(()=>{this.cancelNavigationTransition(i,o.signal.reason+"",pt.Aborted)}))),Oe({complete:()=>{r=!0}}),$e(this.transitionAbortWithErrorSubject.pipe(Oe(s=>{throw s}))),xi(()=>{o.abort(),r||this.cancelNavigationTransition(i,"",pt.SupersededByNewNavigation),this.currentTransition?.id===i.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),Ci(s=>{if(r=!0,this.destroyed)return i.resolve(!1),Te;if(JC(s))this.events.next(new en(i.id,this.urlSerializer.serialize(i.extractedUrl),s.message,s.cancellationCode)),rR(s)?this.events.next(new Lo(s.url,s.navigationBehaviorOptions)):i.resolve(!1);else{let c=new Ir(i.id,this.urlSerializer.serialize(i.extractedUrl),s,i.targetSnapshot??void 0);try{let l=Ge(this.environmentInjector,()=>this.navigationErrorHandler?.(c));if(l instanceof Bo){let{message:u,cancellationCode:f}=Qd(this.urlSerializer,l);this.events.next(new en(i.id,this.urlSerializer.serialize(i.extractedUrl),u,f)),this.events.next(new Lo(l.redirectTo,l.navigationBehaviorOptions))}else throw this.events.next(c),s}catch(l){this.options.resolveNavigationPromiseOnError?i.resolve(!1):i.reject(l)}}return Te}))}))}cancelNavigationTransition(e,i,r){let o=new en(e.id,this.urlSerializer.serialize(e.extractedUrl),i,r);this.events.next(o),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),i=Ue(this.currentNavigation),r=i?.targetBrowserUrl??i?.extractedUrl;return e.toString()!==r?.toString()&&!i?.extras.skipLocationChange}static \u0275fac=function(i){return new(i||t)};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function XR(t){return t!==Ao}var m0=new g("");var h0=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=p({token:t,factory:()=>d(JR),providedIn:"root"})}return t})(),Kd=class{shouldDetach(n){return!1}store(n,e){}shouldAttach(n){return!1}retrieve(n){return null}shouldReuseRoute(n,e){return n.routeConfig===e.routeConfig}shouldDestroyInjector(n){return!0}},JR=(()=>{class t extends Kd{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ae(t)))(r||t)}})();static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),ug=(()=>{class t{urlSerializer=d(Sr);options=d(Tr,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=d(Un);urlHandlingStrategy=d(eu);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new tn;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:e,initialUrl:i,targetBrowserUrl:r}){let o=e!==void 0?this.urlHandlingStrategy.merge(e,i):i,a=r??o;return a instanceof tn?this.urlSerializer.serialize(a):a}commitTransition({targetRouterState:e,finalUrl:i,initialUrl:r}){i&&e?(this.currentUrlTree=i,this.rawUrlTree=this.urlHandlingStrategy.merge(i,r),this.routerState=e):this.rawUrlTree=r}routerState=qC(null,d(be));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static \u0275fac=function(i){return new(i||t)};static \u0275prov=p({token:t,factory:()=>d(eN),providedIn:"root"})}return t})(),eN=(()=>{class t extends ug{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(i=>{i.type==="popstate"&&setTimeout(()=>{e(i.url,i.state,"popstate",{replaceUrl:!0})})})}handleRouterEvent(e,i){e instanceof Vi?this.updateStateMemento():e instanceof $n?this.commitTransition(i):e instanceof Is?this.urlUpdateStrategy==="eager"&&(i.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(i),i)):e instanceof Po?(this.commitTransition(i),this.urlUpdateStrategy==="deferred"&&!i.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(i),i)):e instanceof en&&!GC(e)?this.restoreHistory(i):e instanceof Ir?this.restoreHistory(i,!0):e instanceof wn&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,{extras:i,id:r}){let{replaceUrl:o,state:a}=i;if(this.location.isCurrentPathEqualTo(e)||o){let s=this.browserPageId,c=v(v({},a),this.generateNgRouterState(r,s));this.location.replaceState(e,"",c)}else{let s=v(v({},a),this.generateNgRouterState(r,this.browserPageId+1));this.location.go(e,"",s)}}restoreHistory(e,i=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,o=this.currentPageId-r;o!==0?this.location.historyGo(o):this.getCurrentUrlTree()===e.finalUrl&&o===0&&(this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(i&&this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:e}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,i){return this.canceledNavigationResolution==="computed"?{navigationId:e,\u0275routerPageId:i}:{navigationId:e}}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ae(t)))(r||t)}})();static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function nu(t,n){t.events.pipe(le(e=>e instanceof wn||e instanceof en||e instanceof Ir||e instanceof $n),X(e=>e instanceof wn||e instanceof $n?0:(e instanceof en?e.code===pt.Redirect||e.code===pt.SupersededByNewNavigation:!1)?2:1),le(e=>e!==2),ze(1)).subscribe(()=>{n()})}var Rt=(()=>{class t{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=d(id);stateManager=d(ug);options=d(Tr,{optional:!0})||{};pendingTasks=d(ni);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=d(tu);urlSerializer=d(Sr);location=d(Un);urlHandlingStrategy=d(eu);injector=d(be);_events=new x;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=d(h0);injectorCleanup=d(m0,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=d(Ar,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!d(Os,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:e=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new ae;subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(i=>{try{let r=this.navigationTransitions.currentTransition,o=Ue(this.navigationTransitions.currentNavigation);if(r!==null&&o!==null){if(this.stateManager.handleRouterEvent(i,o),i instanceof en&&i.code!==pt.Redirect&&i.code!==pt.SupersededByNewNavigation)this.navigated=!0;else if(i instanceof wn)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(i instanceof Lo){let a=i.navigationBehaviorOptions,s=this.urlHandlingStrategy.merge(i.url,r.currentRawUrl),c=v({scroll:r.extras.scroll,browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||XR(r.source)},a);this.scheduleNavigation(s,Ao,null,c,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}JA(i)&&this._events.next(i)}catch(r){this.navigationTransitions.transitionAbortWithErrorSubject.next(r)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),Ao,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,i,r,o)=>{this.navigateToSyncWithBrowser(e,r,i,o)})}navigateToSyncWithBrowser(e,i,r,o){let a=r?.navigationId?r:null;if(r){let c=v({},r);delete c.navigationId,delete c.\u0275routerPageId,Object.keys(c).length!==0&&(o.state=c)}let s=this.parseUrl(e);this.scheduleNavigation(s,i,a,o).catch(c=>{this.disposed||this.injector.get(Qt)(c)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return Ue(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map(ag),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,i={}){let{relativeTo:r,queryParams:o,fragment:a,queryParamsHandling:s,preserveFragment:c}=i,l=c?this.currentUrlTree.fragment:a,u=null;switch(s??this.options.defaultQueryParamsHandling){case"merge":u=v(v({},this.currentUrlTree.queryParams),o);break;case"preserve":u=this.currentUrlTree.queryParams;break;default:u=o||null}u!==null&&(u=this.removeEmptyProps(u));let f;try{let m=r?r.snapshot:this.routerState.snapshot.root;f=UC(m)}catch{(typeof e[0]!="string"||e[0][0]!=="/")&&(e=[]),f=this.currentUrlTree.root}return zC(f,e,u,l??null,this.urlSerializer)}navigateByUrl(e,i={skipLocationChange:!1}){let r=No(e)?e:this.parseUrl(e),o=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(o,Ao,null,i)}navigate(e,i={skipLocationChange:!1}){return tN(e),this.navigateByUrl(this.createUrlTree(e,i),i)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch{return this.console.warn($t(4018,!1)),this.urlSerializer.parse("/")}}isActive(e,i){let r;if(i===!0?r=v({},NC):i===!1?r=v({},zp):r=v(v({},zp),i),No(e))return CC(this.currentUrlTree,e,r);let o=this.parseUrl(e);return CC(this.currentUrlTree,o,r)}removeEmptyProps(e){return Object.entries(e).reduce((i,[r,o])=>(o!=null&&(i[r]=o),i),{})}scheduleNavigation(e,i,r,o,a){if(this.disposed)return Promise.resolve(!1);let s,c,l;a?(s=a.resolve,c=a.reject,l=a.promise):l=new Promise((f,m)=>{s=f,c=m});let u=this.pendingTasks.add();return nu(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(u))}),this.navigationTransitions.handleNavigationRequest({source:i,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:o,resolve:s,reject:c,promise:l,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),l.catch(Promise.reject.bind(Promise))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function tN(t){for(let n=0;n<t.length;n++)if(t[n]==null)throw new D(4008,!1)}var Ps=class{};var p0=(()=>{class t{router;injector;preloadingStrategy;loader;subscription;constructor(e,i,r,o){this.router=e,this.injector=i,this.preloadingStrategy=r,this.loader=o}setUpPreloading(){this.subscription=this.router.events.pipe(le(e=>e instanceof wn),Di(()=>this.preload())).subscribe(()=>{})}preload(){return this.processRoutes(this.injector,this.router.config)}ngOnDestroy(){this.subscription?.unsubscribe()}processRoutes(e,i){let r=[];for(let o of i){o.providers&&!o._injector&&(o._injector=Co(o.providers,e,""));let a=o._injector??e;o._loadedNgModuleFactory&&!o._loadedInjector&&(o._loadedInjector=o._loadedNgModuleFactory.create(a).injector);let s=o._loadedInjector??a;(o.loadChildren&&!o._loadedRoutes&&o.canLoad===void 0||o.loadComponent&&!o._loadedComponent)&&r.push(this.preloadConfig(a,o)),(o.children||o._loadedRoutes)&&r.push(this.processRoutes(s,o.children??o._loadedRoutes))}return Ee(r).pipe(yi())}preloadConfig(e,i){return this.preloadingStrategy.preload(i,()=>{if(e.destroyed)return N(null);let r;i.loadChildren&&i.canLoad===void 0?r=Ee(this.loader.loadChildren(e,i)):r=N(null);let o=r.pipe(nt(a=>a===null?N(void 0):(i._loadedRoutes=a.routes,i._loadedInjector=a.injector,i._loadedNgModuleFactory=a.factory,this.processRoutes(a.injector??e,a.routes))));if(i.loadComponent&&!i._loadedComponent){let a=this.loader.loadComponent(e,i);return Ee([o,a]).pipe(yi())}else return o})}static \u0275fac=function(i){return new(i||t)(T(Rt),T(be),T(Ps),T(Jd))};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),g0=new g(""),iN=(()=>{class t{options;routerEventsSubscription;scrollEventsSubscription;lastId=0;lastSource=Ao;restoredId=0;store={};urlSerializer=d(Sr);zone=d(k);viewportScroller=d(vp);transitions=d(tu);constructor(e){this.options=e,this.options.scrollPositionRestoration||="disabled",this.options.anchorScrolling||="disabled"}init(){this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.setHistoryScrollRestoration("manual"),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.transitions.events.subscribe(e=>{e instanceof Vi?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=e.navigationTrigger,this.restoredId=e.restoredState?e.restoredState.navigationId:0):e instanceof wn?(this.lastId=e.id,this.scheduleScrollEvent(e,this.urlSerializer.parse(e.urlAfterRedirects).fragment)):e instanceof $n&&e.code===Oo.IgnoredSameUrlNavigation&&(this.lastSource=void 0,this.restoredId=0,this.scheduleScrollEvent(e,this.urlSerializer.parse(e.url).fragment))})}consumeScrollEvents(){return this.transitions.events.subscribe(e=>{if(!(e instanceof Fo)||e.scrollBehavior==="manual")return;let i={behavior:"instant"};e.position?this.options.scrollPositionRestoration==="top"?this.viewportScroller.scrollToPosition([0,0],i):this.options.scrollPositionRestoration==="enabled"&&this.viewportScroller.scrollToPosition(e.position,i):e.anchor&&this.options.anchorScrolling==="enabled"?this.viewportScroller.scrollToAnchor(e.anchor):this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.scrollToPosition([0,0])})}scheduleScrollEvent(e,i){let r=Ue(this.transitions.currentNavigation)?.extras.scroll;this.zone.runOutsideAngular(async()=>{await new Promise(o=>{setTimeout(o),typeof requestAnimationFrame<"u"&&requestAnimationFrame(o)}),this.zone.run(()=>{this.transitions.events.next(new Fo(e,this.lastSource==="popstate"?this.store[this.restoredId]:null,i,r))})})}ngOnDestroy(){this.routerEventsSubscription?.unsubscribe(),this.scrollEventsSubscription?.unsubscribe()}static \u0275fac=function(i){Yh()};static \u0275prov=p({token:t,factory:t.\u0275fac})}return t})();function mg(t,...n){return Sn([{provide:Ar,multi:!0,useValue:t},[],{provide:mi,useFactory:b0},{provide:ds,multi:!0,useFactory:v0},n.map(e=>e.\u0275providers)])}function b0(){return d(Rt).routerState.root}function Ls(t,n){return{\u0275kind:t,\u0275providers:n}}function v0(){let t=d(G);return n=>{let e=t.get(Vt);if(n!==e.components[0])return;let i=t.get(Rt),r=t.get(_0);t.get(hg)===1&&i.initialNavigation(),t.get(C0,null,{optional:!0})?.setUpPreloading(),t.get(g0,null,{optional:!0})?.init(),i.resetRootComponentType(e.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var _0=new g("",{factory:()=>new x}),hg=new g("",{factory:()=>1});function y0(){let t=[{provide:Ul,useValue:!0},{provide:hg,useValue:0},rd(()=>{let n=d(G);return n.get(mp,Promise.resolve()).then(()=>new Promise(i=>{let r=n.get(Rt),o=n.get(_0);nu(r,()=>{i(!0)}),n.get(tu).afterPreactivation=()=>(i(!0),o.closed?N(void 0):o),r.initialNavigation()}))})];return Ls(2,t)}function w0(){let t=[rd(()=>{d(Rt).setUpLocationChangeListener()}),{provide:hg,useValue:2}];return Ls(3,t)}var C0=new g("");function D0(t){return Ls(0,[{provide:C0,useExisting:p0},{provide:Ps,useExisting:t}])}function x0(){return Ls(8,[rg,{provide:Os,useExisting:rg}])}function E0(t){Ln("NgRouterViewTransitions");let n=[{provide:cg,useValue:f0},{provide:lg,useValue:v({skipNextTransition:!!t?.skipInitialTransition},t)}];return Ls(9,n)}var I0=[Un,{provide:Sr,useClass:fi},Rt,kr,{provide:mi,useFactory:b0},Jd,[]],pg=(()=>{class t{constructor(){}static forRoot(e,i){return{ngModule:t,providers:[I0,[],{provide:Ar,multi:!0,useValue:e},[],i?.errorHandler?{provide:dg,useValue:i.errorHandler}:[],{provide:Tr,useValue:i||{}},i?.useHash?oN():aN(),rN(),i?.preloadingStrategy?D0(i.preloadingStrategy).\u0275providers:[],i?.initialNavigation?sN(i):[],i?.bindToComponentInputs?x0().\u0275providers:[],i?.enableViewTransitions?E0().\u0275providers:[],cN()]}}static forChild(e){return{ngModule:t,providers:[{provide:Ar,multi:!0,useValue:e}]}}static \u0275fac=function(i){return new(i||t)};static \u0275mod=j({type:t});static \u0275inj=P({})}return t})();function rN(){return{provide:g0,useFactory:()=>{let t=d(vp),n=d(Tr);return n.scrollOffset&&t.setOffset(n.scrollOffset),new iN(n)}}}function oN(){return{provide:li,useClass:hp}}function aN(){return{provide:li,useClass:bd}}function sN(t){return[t.initialNavigation==="disabled"?w0().\u0275providers:[],t.initialNavigation==="enabledBlocking"?y0().\u0275providers:[]]}var fg=new g("");function cN(){return[{provide:fg,useFactory:v0},{provide:ds,multi:!0,useExisting:fg}]}var dN=new g("cdk-dir-doc",{providedIn:"root",factory:()=>d(L)}),uN=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function M0(t){let n=t?.toLowerCase()||"";return n==="auto"&&typeof navigator<"u"&&navigator?.language?uN.test(navigator.language)?"rtl":"ltr":n==="rtl"?"rtl":"ltr"}var Nt=(()=>{class t{get value(){return this.valueSignal()}valueSignal=V("ltr");change=new R;constructor(){let e=d(dN,{optional:!0});if(e){let i=e.body?e.body.dir:null,r=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(M0(i||r||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(i){return new(i||t)};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var we=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=j({type:t});static \u0275inj=P({})}return t})();var fN=["*"];var mN=[[["","mat-card-avatar",""],["","matCardAvatar",""]],[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],"*"],hN=["[mat-card-avatar], [matCardAvatar]",`mat-card-title, mat-card-subtitle,
      [mat-card-title], [mat-card-subtitle],
      [matCardTitle], [matCardSubtitle]`,"*"],pN=new g("MAT_CARD_CONFIG"),Uo=(()=>{class t{appearance;constructor(){let e=d(pN,{optional:!0});this.appearance=e?.appearance||"raised"}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=E({type:t,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(i,r){i&2&&$("mat-mdc-card-outlined",r.appearance==="outlined")("mdc-card--outlined",r.appearance==="outlined")("mat-mdc-card-filled",r.appearance==="filled")("mdc-card--filled",r.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:fN,decls:1,vars:0,template:function(i,r){i&1&&(De(),Q(0))},styles:[`.mat-mdc-card {
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
`],encapsulation:2,changeDetection:0})}return t})(),S0=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=S({type:t,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-mdc-card-title"]})}return t})();var zo=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=S({type:t,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"]})}return t})();var $o=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=E({type:t,selectors:[["mat-card-header"]],hostAttrs:[1,"mat-mdc-card-header"],ngContentSelectors:hN,decls:4,vars:0,consts:[[1,"mat-mdc-card-header-text"]],template:function(i,r){i&1&&(De(mN),Q(0),kt(1,"div",0),Q(2,1),Tt(),Q(3,2))},encapsulation:2,changeDetection:0})}return t})();function js(t){return t.buttons===0||t.detail===0}function Bs(t){let n=t.touches&&t.touches[0]||t.changedTouches&&t.changedTouches[0];return!!n&&n.identifier===-1&&(n.radiusX==null||n.radiusX===1)&&(n.radiusY==null||n.radiusY===1)}var gg;function k0(){if(gg==null){let t=typeof document<"u"?document.head:null;gg=!!(t&&(t.createShadowRoot||t.attachShadow))}return gg}function bg(t){if(k0()){let n=t.getRootNode?t.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&n instanceof ShadowRoot)return n}return null}function Wo(){let t=typeof document<"u"&&document?document.activeElement:null;for(;t&&t.shadowRoot;){let n=t.shadowRoot.activeElement;if(n===t)break;t=n}return t}function Ot(t){return t.composedPath?t.composedPath()[0]:t.target}var vg;try{vg=typeof Intl<"u"&&Intl.v8BreakIterator}catch{vg=!1}var ce=(()=>{class t{_platformId=d(yr);isBrowser=this._platformId?eC(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||vg)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Vs;function T0(){if(Vs==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>Vs=!0}))}finally{Vs=Vs||!1}return Vs}function Go(t){return T0()?t:!!t.capture}function Wn(t,n=0){return A0(t)?Number(t):arguments.length===2?n:0}function A0(t){return!isNaN(parseFloat(t))&&!isNaN(Number(t))}function Et(t){return t instanceof O?t.nativeElement:t}var R0=new g("cdk-input-modality-detector-options"),N0={ignoreKeys:[18,17,224,91,16]},O0=650,_g={passive:!0,capture:!0},F0=(()=>{class t{_platform=d(ce);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new Be(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(i=>i===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=Ot(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<O0||(this._modality.next(js(e)?"keyboard":"mouse"),this._mostRecentTarget=Ot(e))};_onTouchstart=e=>{if(Bs(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=Ot(e)};constructor(){let e=d(k),i=d(L),r=d(R0,{optional:!0});if(this._options=v(v({},N0),r),this.modalityDetected=this._modality.pipe(nr(1)),this.modalityChanged=this.modalityDetected.pipe(Bc()),this._platform.isBrowser){let o=d(Ve).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[o.listen(i,"keydown",this._onKeydown,_g),o.listen(i,"mousedown",this._onMousedown,_g),o.listen(i,"touchstart",this._onTouchstart,_g)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static \u0275fac=function(i){return new(i||t)};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Hs=(function(t){return t[t.IMMEDIATE=0]="IMMEDIATE",t[t.EVENTUAL=1]="EVENTUAL",t})(Hs||{}),P0=new g("cdk-focus-monitor-default-options"),iu=Go({passive:!0,capture:!0}),Rr=(()=>{class t{_ngZone=d(k);_platform=d(ce);_inputModalityDetector=d(F0);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=d(L);_stopInputModalityDetector=new x;constructor(){let e=d(P0,{optional:!0});this._detectionMode=e?.detectionMode||Hs.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let i=Ot(e);for(let r=i;r;r=r.parentElement)e.type==="focus"?this._onFocus(e,r):this._onBlur(e,r)};monitor(e,i=!1){let r=Et(e);if(!this._platform.isBrowser||r.nodeType!==1)return N();let o=bg(r)||this._document,a=this._elementInfo.get(r);if(a)return i&&(a.checkChildren=!0),a.subject;let s={checkChildren:i,subject:new x,rootNode:o};return this._elementInfo.set(r,s),this._registerGlobalListeners(s),s.subject}stopMonitoring(e){let i=Et(e),r=this._elementInfo.get(i);r&&(r.subject.complete(),this._setClasses(i),this._elementInfo.delete(i),this._removeGlobalListeners(r))}focusVia(e,i,r){let o=Et(e),a=this._document.activeElement;o===a?this._getClosestElementsInfo(o).forEach(([s,c])=>this._originChanged(s,i,c)):(this._setOrigin(i),typeof o.focus=="function"&&o.focus(r))}ngOnDestroy(){this._elementInfo.forEach((e,i)=>this.stopMonitoring(i))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===Hs.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,i){e.classList.toggle("cdk-focused",!!i),e.classList.toggle("cdk-touch-focused",i==="touch"),e.classList.toggle("cdk-keyboard-focused",i==="keyboard"),e.classList.toggle("cdk-mouse-focused",i==="mouse"),e.classList.toggle("cdk-program-focused",i==="program")}_setOrigin(e,i=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&i,this._detectionMode===Hs.IMMEDIATE){clearTimeout(this._originTimeoutId);let r=this._originFromTouchInteraction?O0:1;this._originTimeoutId=setTimeout(()=>this._origin=null,r)}})}_onFocus(e,i){let r=this._elementInfo.get(i),o=Ot(e);!r||!r.checkChildren&&i!==o||this._originChanged(i,this._getFocusOrigin(o),r)}_onBlur(e,i){let r=this._elementInfo.get(i);!r||r.checkChildren&&e.relatedTarget instanceof Node&&i.contains(e.relatedTarget)||(this._setClasses(i),this._emitOrigin(r,null))}_emitOrigin(e,i){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(i))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let i=e.rootNode,r=this._rootNodeFocusListenerCount.get(i)||0;r||this._ngZone.runOutsideAngular(()=>{i.addEventListener("focus",this._rootNodeFocusAndBlurListener,iu),i.addEventListener("blur",this._rootNodeFocusAndBlurListener,iu)}),this._rootNodeFocusListenerCount.set(i,r+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe($e(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(e){let i=e.rootNode;if(this._rootNodeFocusListenerCount.has(i)){let r=this._rootNodeFocusListenerCount.get(i);r>1?this._rootNodeFocusListenerCount.set(i,r-1):(i.removeEventListener("focus",this._rootNodeFocusAndBlurListener,iu),i.removeEventListener("blur",this._rootNodeFocusAndBlurListener,iu),this._rootNodeFocusListenerCount.delete(i))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,i,r){this._setClasses(e,i),this._emitOrigin(r,i),this._lastFocusOrigin=i}_getClosestElementsInfo(e){let i=[];return this._elementInfo.forEach((r,o)=>{(o===e||r.checkChildren&&o.contains(e))&&i.push([o,r])}),i}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:i,mostRecentModality:r}=this._inputModalityDetector;if(r!=="mouse"||!i||i===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let o=e.labels;if(o){for(let a=0;a<o.length;a++)if(o[a].contains(i))return!0}return!1}static \u0275fac=function(i){return new(i||t)};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),yg=(()=>{class t{_elementRef=d(O);_focusMonitor=d(Rr);_monitorSubscription;_focusOrigin=null;cdkFocusChange=new R;constructor(){}get focusOrigin(){return this._focusOrigin}ngAfterViewInit(){let e=this._elementRef.nativeElement;this._monitorSubscription=this._focusMonitor.monitor(e,e.nodeType===1&&e.hasAttribute("cdkMonitorSubtreeFocus")).subscribe(i=>{this._focusOrigin=i,this.cdkFocusChange.emit(i)})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._monitorSubscription?.unsubscribe()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=S({type:t,selectors:[["","cdkMonitorElementFocus",""],["","cdkMonitorSubtreeFocus",""]],outputs:{cdkFocusChange:"cdkFocusChange"},exportAs:["cdkMonitorFocus"]})}return t})();var ru=new WeakMap,tt=(()=>{class t{_appRef;_injector=d(G);_environmentInjector=d(be);load(e){let i=this._appRef=this._appRef||this._injector.get(Vt),r=ru.get(i);r||(r={loaders:new Set,refs:[]},ru.set(i,r),i.onDestroy(()=>{ru.get(i)?.refs.forEach(o=>o.destroy()),ru.delete(i)})),r.loaders.has(e)||(r.loaders.add(e),r.refs.push(hd(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var L0=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=E({type:t,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(i,r){},styles:[`.cdk-visually-hidden {
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
`],encapsulation:2,changeDetection:0})}return t})(),ou;function gN(){if(ou===void 0&&(ou=null,typeof window<"u")){let t=window;t.trustedTypes!==void 0&&(ou=t.trustedTypes.createPolicy("angular#components",{createHTML:n=>n}))}return ou}function qo(t){return gN()?.createHTML(t)||t}function Zo(t){return Array.isArray(t)?t:[t]}var j0=new Set,Nr,au=(()=>{class t{_platform=d(ce);_nonce=d(yo,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):vN}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&bN(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function bN(t,n){if(!j0.has(t))try{Nr||(Nr=document.createElement("style"),n&&Nr.setAttribute("nonce",n),Nr.setAttribute("type","text/css"),document.head.appendChild(Nr)),Nr.sheet&&(Nr.sheet.insertRule(`@media ${t} {body{ }}`,0),j0.add(t))}catch(e){console.error(e)}}function vN(t){return{matches:t==="all"||t==="",media:t,addListener:()=>{},removeListener:()=>{}}}var wg=(()=>{class t{_mediaMatcher=d(au);_zone=d(k);_queries=new Map;_destroySubject=new x;constructor(){}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return B0(Zo(e)).some(r=>this._registerQuery(r).mql.matches)}observe(e){let r=B0(Zo(e)).map(a=>this._registerQuery(a).observable),o=Kr(r);return o=wi(o.pipe(ze(1)),o.pipe(nr(1),Zn(0))),o.pipe(X(a=>{let s={matches:!1,breakpoints:{}};return a.forEach(({matches:c,query:l})=>{s.matches=s.matches||c,s.breakpoints[l]=c}),s}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);let i=this._mediaMatcher.matchMedia(e),o={observable:new q(a=>{let s=c=>this._zone.run(()=>a.next(c));return i.addListener(s),()=>{i.removeListener(s)}}).pipe(ct(i),X(({matches:a})=>({query:e,matches:a})),$e(this._destroySubject)),mql:i};return this._queries.set(e,o),o}static \u0275fac=function(i){return new(i||t)};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function B0(t){return t.map(n=>n.split(",")).reduce((n,e)=>n.concat(e)).map(n=>n.trim())}function _N(t){if(t.type==="characterData"&&t.target instanceof Comment)return!0;if(t.type==="childList"){for(let n=0;n<t.addedNodes.length;n++)if(!(t.addedNodes[n]instanceof Comment))return!1;for(let n=0;n<t.removedNodes.length;n++)if(!(t.removedNodes[n]instanceof Comment))return!1;return!0}return!1}var V0=(()=>{class t{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),H0=(()=>{class t{_mutationObserverFactory=d(V0);_observedElements=new Map;_ngZone=d(k);constructor(){}ngOnDestroy(){this._observedElements.forEach((e,i)=>this._cleanupObserver(i))}observe(e){let i=Et(e);return new q(r=>{let a=this._observeElement(i).pipe(X(s=>s.filter(c=>!_N(c))),le(s=>!!s.length)).subscribe(s=>{this._ngZone.run(()=>{r.next(s)})});return()=>{a.unsubscribe(),this._unobserveElement(i)}})}_observeElement(e){return this._ngZone.runOutsideAngular(()=>{if(this._observedElements.has(e))this._observedElements.get(e).count++;else{let i=new x,r=this._mutationObserverFactory.create(o=>i.next(o));r&&r.observe(e,{characterData:!0,childList:!0,subtree:!0}),this._observedElements.set(e,{observer:r,stream:i,count:1})}return this._observedElements.get(e).stream})}_unobserveElement(e){this._observedElements.has(e)&&(this._observedElements.get(e).count--,this._observedElements.get(e).count||this._cleanupObserver(e))}_cleanupObserver(e){if(this._observedElements.has(e)){let{observer:i,stream:r}=this._observedElements.get(e);i&&i.disconnect(),r.complete(),this._observedElements.delete(e)}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),su=(()=>{class t{_contentObserver=d(H0);_elementRef=d(O);event=new R;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._disabled?this._unsubscribe():this._subscribe()}_disabled=!1;get debounce(){return this._debounce}set debounce(e){this._debounce=Wn(e),this._subscribe()}_debounce;_currentSubscription=null;constructor(){}ngAfterContentInit(){!this._currentSubscription&&!this.disabled&&this._subscribe()}ngOnDestroy(){this._unsubscribe()}_subscribe(){this._unsubscribe();let e=this._contentObserver.observe(this._elementRef);this._currentSubscription=(this.debounce?e.pipe(Zn(this.debounce)):e).subscribe(this.event)}_unsubscribe(){this._currentSubscription?.unsubscribe()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=S({type:t,selectors:[["","cdkObserveContent",""]],inputs:{disabled:[2,"cdkObserveContentDisabled","disabled",oe],debounce:"debounce"},outputs:{event:"cdkObserveContent"},exportAs:["cdkObserveContent"]})}return t})(),Qo=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=j({type:t});static \u0275inj=P({providers:[V0]})}return t})();var xg=(()=>{class t{_platform=d(ce);constructor(){}isDisabled(e){return e.hasAttribute("disabled")}isVisible(e){return wN(e)&&getComputedStyle(e).visibility==="visible"}isTabbable(e){if(!this._platform.isBrowser)return!1;let i=yN(kN(e));if(i&&(U0(i)===-1||!this.isVisible(i)))return!1;let r=e.nodeName.toLowerCase(),o=U0(e);return e.hasAttribute("contenteditable")?o!==-1:r==="iframe"||r==="object"||this._platform.WEBKIT&&this._platform.IOS&&!MN(e)?!1:r==="audio"?e.hasAttribute("controls")?o!==-1:!1:r==="video"?o===-1?!1:o!==null?!0:this._platform.FIREFOX||e.hasAttribute("controls"):e.tabIndex>=0}isFocusable(e,i){return SN(e)&&!this.isDisabled(e)&&(i?.ignoreVisibility||this.isVisible(e))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function yN(t){try{return t.frameElement}catch{return null}}function wN(t){return!!(t.offsetWidth||t.offsetHeight||typeof t.getClientRects=="function"&&t.getClientRects().length)}function CN(t){let n=t.nodeName.toLowerCase();return n==="input"||n==="select"||n==="button"||n==="textarea"}function DN(t){return EN(t)&&t.type=="hidden"}function xN(t){return IN(t)&&t.hasAttribute("href")}function EN(t){return t.nodeName.toLowerCase()=="input"}function IN(t){return t.nodeName.toLowerCase()=="a"}function W0(t){if(!t.hasAttribute("tabindex")||t.tabIndex===void 0)return!1;let n=t.getAttribute("tabindex");return!!(n&&!isNaN(parseInt(n,10)))}function U0(t){if(!W0(t))return null;let n=parseInt(t.getAttribute("tabindex")||"",10);return isNaN(n)?-1:n}function MN(t){let n=t.nodeName.toLowerCase(),e=n==="input"&&t.type;return e==="text"||e==="password"||n==="select"||n==="textarea"}function SN(t){return DN(t)?!1:CN(t)||xN(t)||t.hasAttribute("contenteditable")||W0(t)}function kN(t){return t.ownerDocument&&t.ownerDocument.defaultView||window}var Dg=class{_element;_checker;_ngZone;_document;_injector;_startAnchor=null;_endAnchor=null;_hasAttached=!1;startAnchorListener=()=>this.focusLastTabbableElement();endAnchorListener=()=>this.focusFirstTabbableElement();get enabled(){return this._enabled}set enabled(n){this._enabled=n,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(n,this._startAnchor),this._toggleAnchorTabIndex(n,this._endAnchor))}_enabled=!0;constructor(n,e,i,r,o=!1,a){this._element=n,this._checker=e,this._ngZone=i,this._document=r,this._injector=a,o||this.attachAnchors()}destroy(){let n=this._startAnchor,e=this._endAnchor;n&&(n.removeEventListener("focus",this.startAnchorListener),n.remove()),e&&(e.removeEventListener("focus",this.endAnchorListener),e.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener("focus",this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener("focus",this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusInitialElement(n)))})}focusFirstTabbableElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusFirstTabbableElement(n)))})}focusLastTabbableElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusLastTabbableElement(n)))})}_getRegionBoundary(n){let e=this._element.querySelectorAll(`[cdk-focus-region-${n}], [cdkFocusRegion${n}], [cdk-focus-${n}]`);return n=="start"?e.length?e[0]:this._getFirstTabbableElement(this._element):e.length?e[e.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(n){let e=this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");if(e){if(!this._checker.isFocusable(e)){let i=this._getFirstTabbableElement(e);return i?.focus(n),!!i}return e.focus(n),!0}return this.focusFirstTabbableElement(n)}focusFirstTabbableElement(n){let e=this._getRegionBoundary("start");return e&&e.focus(n),!!e}focusLastTabbableElement(n){let e=this._getRegionBoundary("end");return e&&e.focus(n),!!e}hasAttached(){return this._hasAttached}_getFirstTabbableElement(n){if(this._checker.isFocusable(n)&&this._checker.isTabbable(n))return n;let e=n.children;for(let i=0;i<e.length;i++){let r=e[i].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(e[i]):null;if(r)return r}return null}_getLastTabbableElement(n){if(this._checker.isFocusable(n)&&this._checker.isTabbable(n))return n;let e=n.children;for(let i=e.length-1;i>=0;i--){let r=e[i].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(e[i]):null;if(r)return r}return null}_createAnchor(){let n=this._document.createElement("div");return this._toggleAnchorTabIndex(this._enabled,n),n.classList.add("cdk-visually-hidden"),n.classList.add("cdk-focus-trap-anchor"),n.setAttribute("aria-hidden","true"),n}_toggleAnchorTabIndex(n,e){n?e.setAttribute("tabindex","0"):e.removeAttribute("tabindex")}toggleAnchors(n){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(n,this._startAnchor),this._toggleAnchorTabIndex(n,this._endAnchor))}_executeOnStable(n){this._injector?at(n,{injector:this._injector}):setTimeout(n)}},G0=(()=>{class t{_checker=d(xg);_ngZone=d(k);_document=d(L);_injector=d(G);constructor(){d(tt).load(L0)}create(e,i=!1){return new Dg(e,this._checker,this._ngZone,this._document,i,this._injector)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Or=(function(t){return t[t.NONE=0]="NONE",t[t.BLACK_ON_WHITE=1]="BLACK_ON_WHITE",t[t.WHITE_ON_BLACK=2]="WHITE_ON_BLACK",t})(Or||{}),z0="cdk-high-contrast-black-on-white",$0="cdk-high-contrast-white-on-black",Cg="cdk-high-contrast-active",TN=(()=>{class t{_platform=d(ce);_hasCheckedHighContrastMode=!1;_document=d(L);_breakpointSubscription;constructor(){this._breakpointSubscription=d(wg).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return Or.NONE;let e=this._document.createElement("div");e.style.backgroundColor="rgb(1,2,3)",e.style.position="absolute",this._document.body.appendChild(e);let i=this._document.defaultView||window,r=i&&i.getComputedStyle?i.getComputedStyle(e):null,o=(r&&r.backgroundColor||"").replace(/ /g,"");switch(e.remove(),o){case"rgb(0,0,0)":case"rgb(45,50,54)":case"rgb(32,32,32)":return Or.WHITE_ON_BLACK;case"rgb(255,255,255)":case"rgb(255,250,239)":return Or.BLACK_ON_WHITE}return Or.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let e=this._document.body.classList;e.remove(Cg,z0,$0),this._hasCheckedHighContrastMode=!0;let i=this.getHighContrastMode();i===Or.BLACK_ON_WHITE?e.add(Cg,z0):i===Or.WHITE_ON_BLACK&&e.add(Cg,$0)}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),q0=(()=>{class t{constructor(){d(TN)._applyBodyHighContrastModeCssClasses()}static \u0275fac=function(i){return new(i||t)};static \u0275mod=j({type:t});static \u0275inj=P({imports:[Qo]})}return t})();var AN=200,cu=class{_letterKeyStream=new x;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new x;selectedItem=this._selectedItem;constructor(n,e){let i=typeof e?.debounceInterval=="number"?e.debounceInterval:AN;e?.skipPredicate&&(this._skipPredicateFn=e.skipPredicate),this.setItems(n),this._setupKeyHandler(i)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(n){this._selectedItemIndex=n}setItems(n){this._items=n}handleKey(n){let e=n.keyCode;n.key&&n.key.length===1?this._letterKeyStream.next(n.key.toLocaleUpperCase()):(e>=65&&e<=90||e>=48&&e<=57)&&this._letterKeyStream.next(String.fromCharCode(e))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(n){this._letterKeyStream.pipe(Oe(e=>this._pressedLetters.push(e)),Zn(n),le(()=>this._pressedLetters.length>0),X(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(e=>{for(let i=1;i<this._items.length+1;i++){let r=(this._selectedItemIndex+i)%this._items.length,o=this._items[r];if(!this._skipPredicateFn?.(o)&&o.getLabel?.().toLocaleUpperCase().trim().indexOf(e)===0){this._selectedItem.next(o);break}}this._pressedLetters=[]})}};function Hi(t,...n){return n.length?n.some(e=>t[e]):t.altKey||t.shiftKey||t.ctrlKey||t.metaKey}var lu=class{_items;_activeItemIndex=V(-1);_activeItem=V(null);_wrap=!1;_typeaheadSubscription=ae.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=n=>n.disabled;constructor(n,e){this._items=n,n instanceof ii?this._itemChangesSubscription=n.changes.subscribe(i=>this._itemsChanged(i.toArray())):Fi(n)&&(this._effectRef=dn(()=>this._itemsChanged(n()),{injector:e}))}tabOut=new x;change=new x;skipPredicate(n){return this._skipPredicateFn=n,this}withWrap(n=!0){return this._wrap=n,this}withVerticalOrientation(n=!0){return this._vertical=n,this}withHorizontalOrientation(n){return this._horizontal=n,this}withAllowedModifierKeys(n){return this._allowedModifierKeys=n,this}withTypeAhead(n=200){this._typeaheadSubscription.unsubscribe();let e=this._getItemsArray();return this._typeahead=new cu(e,{debounceInterval:typeof n=="number"?n:void 0,skipPredicate:i=>this._skipPredicateFn(i)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(i=>{this.setActiveItem(i)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(n=!0){return this._homeAndEnd=n,this}withPageUpDown(n=!0,e=10){return this._pageUpAndDown={enabled:n,delta:e},this}setActiveItem(n){let e=this._activeItem();this.updateActiveItem(n),this._activeItem()!==e&&this.change.next(this._activeItemIndex())}onKeydown(n){let e=n.keyCode,r=["altKey","ctrlKey","metaKey","shiftKey"].every(o=>!n[o]||this._allowedModifierKeys.indexOf(o)>-1);switch(e){case 9:this.tabOut.next();return;case 40:if(this._vertical&&r){this.setNextItemActive();break}else return;case 38:if(this._vertical&&r){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&r){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&r){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&r){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&r){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(o>0?o:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()+this._pageUpAndDown.delta,a=this._getItemsArray().length;this._setActiveItemByIndex(o<a?o:a-1,-1);break}else return;default:(r||Hi(n,"shiftKey"))&&this._typeahead?.handleKey(n);return}this._typeahead?.reset(),n.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(n){let e=this._getItemsArray(),i=typeof n=="number"?n:e.indexOf(n),r=e[i];this._activeItem.set(r??null),this._activeItemIndex.set(i),this._typeahead?.setCurrentSelectedItemIndex(i)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(n){this._wrap?this._setActiveInWrapMode(n):this._setActiveInDefaultMode(n)}_setActiveInWrapMode(n){let e=this._getItemsArray();for(let i=1;i<=e.length;i++){let r=(this._activeItemIndex()+n*i+e.length)%e.length,o=e[r];if(!this._skipPredicateFn(o)){this.setActiveItem(r);return}}}_setActiveInDefaultMode(n){this._setActiveItemByIndex(this._activeItemIndex()+n,n)}_setActiveItemByIndex(n,e){let i=this._getItemsArray();if(i[n]){for(;this._skipPredicateFn(i[n]);)if(n+=e,!i[n])return;this.setActiveItem(n)}}_getItemsArray(){return Fi(this._items)?this._items():this._items instanceof ii?this._items.toArray():this._items}_itemsChanged(n){this._typeahead?.setItems(n);let e=this._activeItem();if(e){let i=n.indexOf(e);i>-1&&i!==this._activeItemIndex()&&(this._activeItemIndex.set(i),this._typeahead?.setCurrentSelectedItemIndex(i))}}};var Us=class extends lu{_origin="program";setFocusOrigin(n){return this._origin=n,this}setActiveItem(n){super.setActiveItem(n),this.activeItem&&this.activeItem.focus(this._origin)}};var Eg={},Qe=class t{_appId=d(_o);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(n,e=!1){return this._appId!=="ng"&&(n+=this._appId),Eg.hasOwnProperty(n)||(Eg[n]=0),`${n}${e?t._infix+"-":""}${Eg[n]++}`}static \u0275fac=function(e){return new(e||t)};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})};var Cn=(function(t){return t[t.NORMAL=0]="NORMAL",t[t.NEGATED=1]="NEGATED",t[t.INVERTED=2]="INVERTED",t})(Cn||{}),du,Fr;function uu(){if(Fr==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return Fr=!1,Fr;if(document.documentElement?.style&&"scrollBehavior"in document.documentElement.style)Fr=!0;else{let t=Element.prototype.scrollTo;t?Fr=!/\{\s*\[native code\]\s*\}/.test(t.toString()):Fr=!1}}return Fr}function Yo(){if(typeof document!="object"||!document)return Cn.NORMAL;if(du==null){let t=document.createElement("div"),n=t.style;t.dir="rtl",n.width="1px",n.overflow="auto",n.visibility="hidden",n.pointerEvents="none",n.position="absolute";let e=document.createElement("div"),i=e.style;i.width="2px",i.height="1px",t.appendChild(e),document.body.appendChild(t),du=Cn.NORMAL,t.scrollLeft===0&&(t.scrollLeft=1,du=t.scrollLeft===0?Cn.NEGATED:Cn.INVERTED),t.remove()}return du}function Ig(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}var Ko,Z0=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function Mg(){if(Ko)return Ko;if(typeof document!="object"||!document)return Ko=new Set(Z0),Ko;let t=document.createElement("input");return Ko=new Set(Z0.filter(n=>(t.setAttribute("type",n),t.type===n))),Ko}var RN=new g("MATERIAL_ANIMATIONS"),Q0=null;function NN(){return d(RN,{optional:!0})?.animationsDisabled||d(os,{optional:!0})==="NoopAnimations"?"di-disabled":(Q0??=d(au).matchMedia("(prefers-reduced-motion)").matches,Q0?"reduced-motion":"enabled")}function Ye(){return NN()!=="enabled"}function Le(t){return t==null?"":typeof t=="string"?t:`${t}px`}function It(t){return t!=null&&`${t}`!="false"}var nn=(function(t){return t[t.FADING_IN=0]="FADING_IN",t[t.VISIBLE=1]="VISIBLE",t[t.FADING_OUT=2]="FADING_OUT",t[t.HIDDEN=3]="HIDDEN",t})(nn||{}),Sg=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=nn.HIDDEN;constructor(n,e,i,r=!1){this._renderer=n,this.element=e,this.config=i,this._animationForciblyDisabledThroughCss=r}fadeOut(){this._renderer.fadeOutRipple(this)}},Y0=Go({passive:!0,capture:!0}),kg=class{_events=new Map;addHandler(n,e,i,r){let o=this._events.get(e);if(o){let a=o.get(i);a?a.add(r):o.set(i,new Set([r]))}else this._events.set(e,new Map([[i,new Set([r])]])),n.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,Y0)})}removeHandler(n,e,i){let r=this._events.get(n);if(!r)return;let o=r.get(e);o&&(o.delete(i),o.size===0&&r.delete(e),r.size===0&&(this._events.delete(n),document.removeEventListener(n,this._delegateEventHandler,Y0)))}_delegateEventHandler=n=>{let e=Ot(n);e&&this._events.get(n.type)?.forEach((i,r)=>{(r===e||r.contains(e))&&i.forEach(o=>o.handleEvent(n))})}},zs={enterDuration:225,exitDuration:150},ON=800,K0=Go({passive:!0,capture:!0}),X0=["mousedown","touchstart"],J0=["mouseup","mouseleave","touchend","touchcancel"],FN=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=E({type:t,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(i,r){},styles:[`.mat-ripple {
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
`],encapsulation:2,changeDetection:0})}return t})(),Pr=class t{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new kg;constructor(n,e,i,r,o){this._target=n,this._ngZone=e,this._platform=r,r.isBrowser&&(this._containerElement=Et(i)),o&&o.get(tt).load(FN)}fadeInRipple(n,e,i={}){let r=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=v(v({},zs),i.animation);i.centered&&(n=r.left+r.width/2,e=r.top+r.height/2);let a=i.radius||PN(n,e,r),s=n-r.left,c=e-r.top,l=o.enterDuration,u=document.createElement("div");u.classList.add("mat-ripple-element"),u.style.left=`${s-a}px`,u.style.top=`${c-a}px`,u.style.height=`${a*2}px`,u.style.width=`${a*2}px`,i.color!=null&&(u.style.backgroundColor=i.color),u.style.transitionDuration=`${l}ms`,this._containerElement.appendChild(u);let f=window.getComputedStyle(u),m=f.transitionProperty,h=f.transitionDuration,b=m==="none"||h==="0s"||h==="0s, 0s"||r.width===0&&r.height===0,w=new Sg(this,u,i,b);u.style.transform="scale3d(1, 1, 1)",w.state=nn.FADING_IN,i.persistent||(this._mostRecentTransientRipple=w);let I=null;return!b&&(l||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let A=()=>{I&&(I.fallbackTimer=null),clearTimeout(Ke),this._finishRippleTransition(w)},he=()=>this._destroyRipple(w),Ke=setTimeout(he,l+100);u.addEventListener("transitionend",A),u.addEventListener("transitioncancel",he),I={onTransitionEnd:A,onTransitionCancel:he,fallbackTimer:Ke}}),this._activeRipples.set(w,I),(b||!l)&&this._finishRippleTransition(w),w}fadeOutRipple(n){if(n.state===nn.FADING_OUT||n.state===nn.HIDDEN)return;let e=n.element,i=v(v({},zs),n.config.animation);e.style.transitionDuration=`${i.exitDuration}ms`,e.style.opacity="0",n.state=nn.FADING_OUT,(n._animationForciblyDisabledThroughCss||!i.exitDuration)&&this._finishRippleTransition(n)}fadeOutAll(){this._getActiveRipples().forEach(n=>n.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(n=>{n.config.persistent||n.fadeOut()})}setupTriggerEvents(n){let e=Et(n);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,X0.forEach(i=>{t._eventManager.addHandler(this._ngZone,i,e,this)}))}handleEvent(n){n.type==="mousedown"?this._onMousedown(n):n.type==="touchstart"?this._onTouchStart(n):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{J0.forEach(e=>{this._triggerElement.addEventListener(e,this,K0)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(n){n.state===nn.FADING_IN?this._startFadeOutTransition(n):n.state===nn.FADING_OUT&&this._destroyRipple(n)}_startFadeOutTransition(n){let e=n===this._mostRecentTransientRipple,{persistent:i}=n.config;n.state=nn.VISIBLE,!i&&(!e||!this._isPointerDown)&&n.fadeOut()}_destroyRipple(n){let e=this._activeRipples.get(n)??null;this._activeRipples.delete(n),this._activeRipples.size||(this._containerRect=null),n===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),n.state=nn.HIDDEN,e!==null&&(n.element.removeEventListener("transitionend",e.onTransitionEnd),n.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),n.element.remove()}_onMousedown(n){let e=js(n),i=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+ON;!this._target.rippleDisabled&&!e&&!i&&(this._isPointerDown=!0,this.fadeInRipple(n.clientX,n.clientY,this._target.rippleConfig))}_onTouchStart(n){if(!this._target.rippleDisabled&&!Bs(n)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=n.changedTouches;if(e)for(let i=0;i<e.length;i++)this.fadeInRipple(e[i].clientX,e[i].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(n=>{let e=n.state===nn.VISIBLE||n.config.terminateOnPointerUp&&n.state===nn.FADING_IN;!n.config.persistent&&e&&n.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let n=this._triggerElement;n&&(X0.forEach(e=>t._eventManager.removeHandler(e,n,this)),this._pointerUpEventsRegistered&&(J0.forEach(e=>n.removeEventListener(e,this,K0)),this._pointerUpEventsRegistered=!1))}};function PN(t,n,e){let i=Math.max(Math.abs(t-e.left),Math.abs(t-e.right)),r=Math.max(Math.abs(n-e.top),Math.abs(n-e.bottom));return Math.sqrt(i*i+r*r)}var Xo=new g("mat-ripple-global-options"),$s=(()=>{class t{_elementRef=d(O);_animationsDisabled=Ye();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=d(k),i=d(ce),r=d(Xo,{optional:!0}),o=d(G);this._globalOptions=r||{},this._rippleRenderer=new Pr(this,e,this._elementRef,i,o)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:v(v(v({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,i=0,r){return typeof e=="number"?this._rippleRenderer.fadeInRipple(e,i,v(v({},this.rippleConfig),r)):this._rippleRenderer.fadeInRipple(0,0,v(v({},this.rippleConfig),e))}static \u0275fac=function(i){return new(i||t)};static \u0275dir=S({type:t,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(i,r){i&2&&$("mat-ripple-unbounded",r.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return t})();var LN={capture:!0},jN=["focus","mousedown","mouseenter","touchstart"],Tg="mat-ripple-loader-uninitialized",Ag="mat-ripple-loader-class-name",eD="mat-ripple-loader-centered",fu="mat-ripple-loader-disabled",tD=(()=>{class t{_document=d(L);_animationsDisabled=Ye();_globalRippleOptions=d(Xo,{optional:!0});_platform=d(ce);_ngZone=d(k);_injector=d(G);_eventCleanups;_hosts=new Map;constructor(){let e=d(Ve).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>jN.map(i=>e.listen(this._document,i,this._onInteraction,LN)))}ngOnDestroy(){let e=this._hosts.keys();for(let i of e)this.destroyRipple(i);this._eventCleanups.forEach(i=>i())}configureRipple(e,i){e.setAttribute(Tg,this._globalRippleOptions?.namespace??""),(i.className||!e.hasAttribute(Ag))&&e.setAttribute(Ag,i.className||""),i.centered&&e.setAttribute(eD,""),i.disabled&&e.setAttribute(fu,"")}setDisabled(e,i){let r=this._hosts.get(e);r?(r.target.rippleDisabled=i,!i&&!r.hasSetUpEvents&&(r.hasSetUpEvents=!0,r.renderer.setupTriggerEvents(e))):i?e.setAttribute(fu,""):e.removeAttribute(fu)}_onInteraction=e=>{let i=Ot(e);if(i instanceof HTMLElement){let r=i.closest(`[${Tg}="${this._globalRippleOptions?.namespace??""}"]`);r&&this._createRipple(r)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let i=this._document.createElement("span");i.classList.add("mat-ripple",e.getAttribute(Ag)),e.append(i);let r=this._globalRippleOptions,o=this._animationsDisabled?0:r?.animation?.enterDuration??zs.enterDuration,a=this._animationsDisabled?0:r?.animation?.exitDuration??zs.exitDuration,s={rippleDisabled:this._animationsDisabled||r?.disabled||e.hasAttribute(fu),rippleConfig:{centered:e.hasAttribute(eD),terminateOnPointerUp:r?.terminateOnPointerUp,animation:{enterDuration:o,exitDuration:a}}},c=new Pr(s,this._ngZone,i,this._platform,this._injector),l=!s.rippleDisabled;l&&c.setupTriggerEvents(e),this._hosts.set(e,{target:s,renderer:c,hasSetUpEvents:l}),e.removeAttribute(Tg)}destroyRipple(e){let i=this._hosts.get(e);i&&(i.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Ui=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=E({type:t,selectors:[["structural-styles"]],decls:0,vars:0,template:function(i,r){},styles:[`.mat-focus-indicator {
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
`],encapsulation:2,changeDetection:0})}return t})();var BN=["mat-icon-button",""],VN=["*"],HN=new g("MAT_BUTTON_CONFIG");function nD(t){return t==null?void 0:si(t)}var Rg=(()=>{class t{_elementRef=d(O);_ngZone=d(k);_animationsDisabled=Ye();_config=d(HN,{optional:!0});_focusMonitor=d(Rr);_cleanupClick;_renderer=d(Se);_rippleLoader=d(tD);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}constructor(){d(tt).load(Ui);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e="program",i){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,i):this._elementRef.nativeElement.focus(i)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static \u0275fac=function(i){return new(i||t)};static \u0275dir=S({type:t,hostAttrs:[1,"mat-mdc-button-base"],hostVars:13,hostBindings:function(i,r){i&2&&(re("disabled",r._getDisabledAttribute())("aria-disabled",r._getAriaDisabled())("tabindex",r._getTabIndex()),Ht(r.color?"mat-"+r.color:""),$("mat-mdc-button-disabled",r.disabled)("mat-mdc-button-disabled-interactive",r.disabledInteractive)("mat-unthemed",!r.color)("_mat-animation-noopable",r._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",oe],disabled:[2,"disabled","disabled",oe],ariaDisabled:[2,"aria-disabled","ariaDisabled",oe],disabledInteractive:[2,"disabledInteractive","disabledInteractive",oe],tabIndex:[2,"tabIndex","tabIndex",nD],_tabindex:[2,"tabindex","_tabindex",nD]}})}return t})(),Ng=(()=>{class t extends Rg{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=E({type:t,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[ue],attrs:BN,ngContentSelectors:VN,decls:4,vars:0,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(i,r){i&1&&(De(),Yt(0,"span",0),Q(1),Yt(2,"span",1)(3,"span",2))},styles:[`.mat-mdc-icon-button {
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
`],encapsulation:2,changeDetection:0})}return t})();var mu=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=j({type:t});static \u0275inj=P({imports:[we]})}return t})();var UN=["matButton",""],zN=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]]],$N=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"];var iD=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),hu=(()=>{class t extends Rg{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let e=WN(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let i=this._elementRef.nativeElement.classList,r=this._appearance?iD.get(this._appearance):null,o=iD.get(e);r&&i.remove(...r),i.add(...o),this._appearance=e}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=E({type:t,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[ue],attrs:UN,ngContentSelectors:$N,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(i,r){i&1&&(De(zN),Yt(0,"span",0),Q(1),kt(2,"span",1),Q(3,1),Tt(),Q(4,2),Yt(5,"span",2)(6,"span",3)),i&2&&$("mdc-button__ripple",!r._isFab)("mdc-fab__ripple",r._isFab)},styles:[`.mat-mdc-button-base {
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
`],encapsulation:2,changeDetection:0})}return t})();function WN(t){return t.hasAttribute("mat-raised-button")?"elevated":t.hasAttribute("mat-stroked-button")?"outlined":t.hasAttribute("mat-flat-button")?"filled":t.hasAttribute("mat-button")?"text":null}var Jo=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=j({type:t});static \u0275inj=P({imports:[mu,we]})}return t})();var Og=class{_box;_destroyed=new x;_resizeSubject=new x;_resizeObserver;_elementObservables=new Map;constructor(n){this._box=n,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(n){return this._elementObservables.has(n)||this._elementObservables.set(n,new q(e=>{let i=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(n,{box:this._box}),()=>{this._resizeObserver?.unobserve(n),i.unsubscribe(),this._elementObservables.delete(n)}}).pipe(le(e=>e.some(i=>i.target===n)),Uc({bufferSize:1,refCount:!0}),$e(this._destroyed))),this._elementObservables.get(n)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},pu=(()=>{class t{_cleanupErrorListener;_observers=new Map;_ngZone=d(k);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,i){let r=i?.box||"content-box";return this._observers.has(r)||this._observers.set(r,new Og(r)),this._observers.get(r).observe(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var GN=["notch"],qN=["matFormFieldNotchedOutline",""],ZN=["*"],oD=["iconPrefixContainer"],aD=["textPrefixContainer"],sD=["iconSuffixContainer"],cD=["textSuffixContainer"],QN=["textField"],YN=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],KN=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function XN(t,n){t&1&&fe(0,"span",21)}function JN(t,n){if(t&1&&(_(0,"label",20),Q(1,1),_e(2,XN,1,0,"span",21),y()),t&2){let e=me(2);se("floating",e._shouldLabelFloat())("monitorResize",e._hasOutline())("id",e._labelId),re("for",e._control.disableAutomaticLabeling?null:e._control.id),C(2),ye(!e.hideRequiredMarker&&e._control.required?2:-1)}}function eO(t,n){if(t&1&&_e(0,JN,3,5,"label",20),t&2){let e=me();ye(e._hasFloatingLabel()?0:-1)}}function tO(t,n){t&1&&fe(0,"div",7)}function nO(t,n){}function iO(t,n){if(t&1&&St(0,nO,0,0,"ng-template",13),t&2){me(2);let e=Kt(1);se("ngTemplateOutlet",e)}}function rO(t,n){if(t&1&&(_(0,"div",9),_e(1,iO,1,1,null,13),y()),t&2){let e=me();se("matFormFieldNotchedOutlineOpen",e._shouldLabelFloat()),C(),ye(e._forceDisplayInfixLabel()?-1:1)}}function oO(t,n){t&1&&(_(0,"div",10,2),Q(2,2),y())}function aO(t,n){t&1&&(_(0,"div",11,3),Q(2,3),y())}function sO(t,n){}function cO(t,n){if(t&1&&St(0,sO,0,0,"ng-template",13),t&2){me();let e=Kt(1);se("ngTemplateOutlet",e)}}function lO(t,n){t&1&&(_(0,"div",14,4),Q(2,4),y())}function dO(t,n){t&1&&(_(0,"div",15,5),Q(2,5),y())}function uO(t,n){t&1&&fe(0,"div",16)}function fO(t,n){t&1&&(_(0,"div",18),Q(1,6),y())}function mO(t,n){if(t&1&&(_(0,"mat-hint",22),Y(1),y()),t&2){let e=me(2);se("id",e._hintLabelId),C(),At(e.hintLabel)}}function hO(t,n){if(t&1&&(_(0,"div",19),_e(1,mO,2,2,"mat-hint",22),Q(2,7),fe(3,"div",23),Q(4,8),y()),t&2){let e=me();C(),ye(e.hintLabel?1:-1)}}var Lr=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=S({type:t,selectors:[["mat-label"]]})}return t})(),pD=new g("MatError"),Pg=(()=>{class t{id=d(Qe).getId("mat-mdc-error-");constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275dir=S({type:t,selectors:[["mat-error"],["","matError",""]],hostAttrs:[1,"mat-mdc-form-field-error","mat-mdc-form-field-bottom-align"],hostVars:1,hostBindings:function(i,r){i&2&&gn("id",r.id)},inputs:{id:"id"},features:[ke([{provide:pD,useExisting:t}])]})}return t})(),Fg=(()=>{class t{align="start";id=d(Qe).getId("mat-mdc-hint-");static \u0275fac=function(i){return new(i||t)};static \u0275dir=S({type:t,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(i,r){i&2&&(gn("id",r.id),re("align",null),$("mat-mdc-form-field-hint-end",r.align==="end"))},inputs:{align:"align",id:"id"}})}return t})(),pO=new g("MatPrefix");var gD=new g("MatSuffix"),Lg=(()=>{class t{set _isTextSelector(e){this._isText=!0}_isText=!1;static \u0275fac=function(i){return new(i||t)};static \u0275dir=S({type:t,selectors:[["","matSuffix",""],["","matIconSuffix",""],["","matTextSuffix",""]],inputs:{_isTextSelector:[0,"matTextSuffix","_isTextSelector"]},features:[ke([{provide:gD,useExisting:t}])]})}return t})(),bD=new g("FloatingLabelParent"),lD=(()=>{class t{_elementRef=d(O);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=d(pu);_ngZone=d(k);_parent=d(bD);_resizeSubscription=new ae;constructor(){}ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return gO(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(i){return new(i||t)};static \u0275dir=S({type:t,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(i,r){i&2&&$("mdc-floating-label--float-above",r.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return t})();function gO(t){let n=t;if(n.offsetParent!==null)return n.scrollWidth;let e=n.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let i=e.scrollWidth;return e.remove(),i}var dD="mdc-line-ripple--active",gu="mdc-line-ripple--deactivating",uD=(()=>{class t{_elementRef=d(O);_cleanupTransitionEnd;constructor(){let e=d(k),i=d(Se);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=i.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(gu),e.add(dD)}deactivate(){this._elementRef.nativeElement.classList.add(gu)}_handleTransitionEnd=e=>{let i=this._elementRef.nativeElement.classList,r=i.contains(gu);e.propertyName==="opacity"&&r&&i.remove(dD,gu)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=S({type:t,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return t})(),fD=(()=>{class t{_elementRef=d(O);_ngZone=d(k);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,i=e.querySelector(".mdc-floating-label");i?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(i.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>i.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){let i=this._notch.nativeElement;!this.open||!e?i.style.width="":i.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=E({type:t,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(i,r){if(i&1&&et(GN,5),i&2){let o;U(o=z())&&(r._notch=o.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(i,r){i&2&&$("mdc-notched-outline--notched",r.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},attrs:qN,ngContentSelectors:ZN,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(i,r){i&1&&(De(),Yt(0,"div",1),kt(1,"div",2,0),Q(3),Tt(),Yt(4,"div",3))},encapsulation:2,changeDetection:0})}return t})(),jg=(()=>{class t{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(i){return new(i||t)};static \u0275dir=S({type:t})}return t})();var Bg=new g("MatFormField"),bO=new g("MAT_FORM_FIELD_DEFAULT_OPTIONS"),mD="fill",vO="auto",hD="fixed",_O="translateY(-50%)",zi=(()=>{class t{_elementRef=d(O);_changeDetectorRef=d(qe);_platform=d(ce);_idGenerator=d(Qe);_ngZone=d(k);_defaults=d(bO,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=vn("iconPrefixContainer");_textPrefixContainerSignal=vn("textPrefixContainer");_iconSuffixContainerSignal=vn("iconSuffixContainer");_textSuffixContainerSignal=vn("textSuffixContainer");_prefixSuffixContainers=ht(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=$w(Lr);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=It(e)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||vO}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let i=e||this._defaults?.appearance||mD;this._appearanceSignal.set(i)}_appearanceSignal=V(mD);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||hD}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||hD}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new x;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=Ye();constructor(){let e=this._defaults,i=d(Nt);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),dn(()=>this._currentDirection=i.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=ht(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){let i=this._control,r="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(r+e.controlType),i.controlType&&this._elementRef.nativeElement.classList.add(r+i.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=i.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=i.stateChanges.pipe(ct([void 0,void 0]),X(()=>[i.errorState,i.userAriaDescribedBy]),Hc(),le(([[o,a],[s,c]])=>o!==s||a!==c)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),i.ngControl&&i.ngControl.valueChanges&&(this._valueChanges=i.ngControl.valueChanges.pipe($e(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),sn(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){Zw({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=ht(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let i=this._control?this._control.ngControl:null;return i&&i[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let o=this._hintChildren?this._hintChildren.find(s=>s.align==="start"):null,a=this._hintChildren?this._hintChildren.find(s=>s.align==="end"):null;o?e.push(o.id):this._hintLabel&&e.push(this._hintLabelId),a&&e.push(a.id)}else this._errorChildren&&e.push(...this._errorChildren.map(o=>o.id));let i=this._control.describedByIds,r;if(i){let o=this._describedByIds||e;r=e.concat(i.filter(a=>a&&!o.includes(a)))}else r=e;this._control.setDescribedByIds(r),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,i=this._textPrefixContainer?.nativeElement,r=this._iconSuffixContainer?.nativeElement,o=this._textSuffixContainer?.nativeElement,a=e?.getBoundingClientRect().width??0,s=i?.getBoundingClientRect().width??0,c=r?.getBoundingClientRect().width??0,l=o?.getBoundingClientRect().width??0,u=this._currentDirection==="rtl"?"-1":"1",f=`${a+s}px`,h=`calc(${u} * (${f} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,b=`var(--mat-mdc-form-field-label-transform, ${_O} translateX(${h}))`,w=a+s+c+l;return[b,w]}_writeOutlinedLabelStyles(e){if(e!==null){let[i,r]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=i),r!==null&&this._notchedOutline?._setMaxWidth(r)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let i=e.getRootNode();return i&&i!==e}return document.documentElement.contains(e)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=E({type:t,selectors:[["mat-form-field"]],contentQueries:function(i,r,o){if(i&1&&(sd(o,r._labelChild,Lr,5),Dt(o,jg,5)(o,pO,5)(o,gD,5)(o,pD,5)(o,Fg,5)),i&2){Hn();let a;U(a=z())&&(r._formFieldControl=a.first),U(a=z())&&(r._prefixChildren=a),U(a=z())&&(r._suffixChildren=a),U(a=z())&&(r._errorChildren=a),U(a=z())&&(r._hintChildren=a)}},viewQuery:function(i,r){if(i&1&&(Vn(r._iconPrefixContainerSignal,oD,5)(r._textPrefixContainerSignal,aD,5)(r._iconSuffixContainerSignal,sD,5)(r._textSuffixContainerSignal,cD,5),et(QN,5)(oD,5)(aD,5)(sD,5)(cD,5)(lD,5)(fD,5)(uD,5)),i&2){Hn(4);let o;U(o=z())&&(r._textField=o.first),U(o=z())&&(r._iconPrefixContainer=o.first),U(o=z())&&(r._textPrefixContainer=o.first),U(o=z())&&(r._iconSuffixContainer=o.first),U(o=z())&&(r._textSuffixContainer=o.first),U(o=z())&&(r._floatingLabel=o.first),U(o=z())&&(r._notchedOutline=o.first),U(o=z())&&(r._lineRipple=o.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(i,r){i&2&&$("mat-mdc-form-field-label-always-float",r._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",r._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",r._hasIconSuffix)("mat-form-field-invalid",r._control.errorState)("mat-form-field-disabled",r._control.disabled)("mat-form-field-autofilled",r._control.autofilled)("mat-form-field-appearance-fill",r.appearance=="fill")("mat-form-field-appearance-outline",r.appearance=="outline")("mat-form-field-hide-placeholder",r._hasFloatingLabel()&&!r._shouldLabelFloat())("mat-primary",r.color!=="accent"&&r.color!=="warn")("mat-accent",r.color==="accent")("mat-warn",r.color==="warn")("ng-untouched",r._shouldForward("untouched"))("ng-touched",r._shouldForward("touched"))("ng-pristine",r._shouldForward("pristine"))("ng-dirty",r._shouldForward("dirty"))("ng-valid",r._shouldForward("valid"))("ng-invalid",r._shouldForward("invalid"))("ng-pending",r._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[ke([{provide:Bg,useExisting:t},{provide:bD,useExisting:t}])],ngContentSelectors:KN,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(i,r){if(i&1&&(De(YN),St(0,eO,1,1,"ng-template",null,0,cd),_(2,"div",6,1),H("click",function(a){return r._control.onContainerClick(a)}),_e(4,tO,1,0,"div",7),_(5,"div",8),_e(6,rO,2,2,"div",9),_e(7,oO,3,0,"div",10),_e(8,aO,3,0,"div",11),_(9,"div",12),_e(10,cO,1,1,null,13),Q(11),y(),_e(12,lO,3,0,"div",14),_e(13,dO,3,0,"div",15),y(),_e(14,uO,1,0,"div",16),y(),_(15,"div",17),_e(16,fO,2,0,"div",18)(17,hO,5,1,"div",19),y()),i&2){let o;C(2),$("mdc-text-field--filled",!r._hasOutline())("mdc-text-field--outlined",r._hasOutline())("mdc-text-field--no-label",!r._hasFloatingLabel())("mdc-text-field--disabled",r._control.disabled)("mdc-text-field--invalid",r._control.errorState),C(2),ye(!r._hasOutline()&&!r._control.disabled?4:-1),C(2),ye(r._hasOutline()?6:-1),C(),ye(r._hasIconPrefix?7:-1),C(),ye(r._hasTextPrefix?8:-1),C(2),ye(!r._hasOutline()||r._forceDisplayInfixLabel()?10:-1),C(2),ye(r._hasTextSuffix?12:-1),C(),ye(r._hasIconSuffix?13:-1),C(),ye(r._hasOutline()?-1:14),C(),$("mat-mdc-form-field-subscript-dynamic-size",r.subscriptSizing==="dynamic");let a=r._getSubscriptMessageType();C(),ye((o=a)==="error"?16:o==="hint"?17:-1)}},dependencies:[lD,fD,pp,uD,Fg],styles:[`.mdc-text-field {
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
`],encapsulation:2,changeDetection:0})}return t})();var jr=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=j({type:t});static \u0275inj=P({imports:[Qo,zi,we]})}return t})();function _D(t){return Error(`Unable to find icon with the name "${t}"`)}function yO(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function yD(t){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${t}".`)}function wD(t){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${t}".`)}var hi=class{url;svgText;options;svgElement=null;constructor(n,e,i){this.url=n,this.svgText=e,this.options=i}},DD=(()=>{class t{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(e,i,r,o){this._httpClient=e,this._sanitizer=i,this._errorHandler=o,this._document=r}addSvgIcon(e,i,r){return this.addSvgIconInNamespace("",e,i,r)}addSvgIconLiteral(e,i,r){return this.addSvgIconLiteralInNamespace("",e,i,r)}addSvgIconInNamespace(e,i,r,o){return this._addSvgIconConfig(e,i,new hi(r,null,o))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,i,r,o){let a=this._sanitizer.sanitize(wt.HTML,r);if(!a)throw wD(r);let s=qo(a);return this._addSvgIconConfig(e,i,new hi("",s,o))}addSvgIconSet(e,i){return this.addSvgIconSetInNamespace("",e,i)}addSvgIconSetLiteral(e,i){return this.addSvgIconSetLiteralInNamespace("",e,i)}addSvgIconSetInNamespace(e,i,r){return this._addSvgIconSetConfig(e,new hi(i,null,r))}addSvgIconSetLiteralInNamespace(e,i,r){let o=this._sanitizer.sanitize(wt.HTML,i);if(!o)throw wD(i);let a=qo(o);return this._addSvgIconSetConfig(e,new hi("",a,r))}registerFontClassAlias(e,i=e){return this._fontCssClassesByAlias.set(e,i),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(e){let i=this._sanitizer.sanitize(wt.RESOURCE_URL,e);if(!i)throw yD(e);let r=this._cachedIconsByUrl.get(i);return r?N(bu(r)):this._loadSvgIconFromConfig(new hi(e,null)).pipe(Oe(o=>this._cachedIconsByUrl.set(i,o)),X(o=>bu(o)))}getNamedSvgIcon(e,i=""){let r=CD(i,e),o=this._svgIconConfigs.get(r);if(o)return this._getSvgFromConfig(o);if(o=this._getIconConfigFromResolvers(i,e),o)return this._svgIconConfigs.set(r,o),this._getSvgFromConfig(o);let a=this._iconSetConfigs.get(i);return a?this._getSvgFromIconSetConfigs(e,a):Ma(_D(r))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?N(bu(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe(X(i=>bu(i)))}_getSvgFromIconSetConfigs(e,i){let r=this._extractIconWithNameFromAnySet(e,i);if(r)return N(r);let o=i.filter(a=>!a.svgText).map(a=>this._loadSvgIconSetFromConfig(a).pipe(Ci(s=>{let l=`Loading icon set URL: ${this._sanitizer.sanitize(wt.RESOURCE_URL,a.url)} failed: ${s.message}`;return this._errorHandler.handleError(new Error(l)),N(null)})));return ka(o).pipe(X(()=>{let a=this._extractIconWithNameFromAnySet(e,i);if(!a)throw _D(e);return a}))}_extractIconWithNameFromAnySet(e,i){for(let r=i.length-1;r>=0;r--){let o=i[r];if(o.svgText&&o.svgText.toString().indexOf(e)>-1){let a=this._svgElementFromConfig(o),s=this._extractSvgIconFromSet(a,e,o.options);if(s)return s}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe(Oe(i=>e.svgText=i),X(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?N(null):this._fetchIcon(e).pipe(Oe(i=>e.svgText=i))}_extractSvgIconFromSet(e,i,r){let o=e.querySelector(`[id="${i}"]`);if(!o)return null;let a=o.cloneNode(!0);if(a.removeAttribute("id"),a.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(a,r);if(a.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(a),r);let s=this._svgElementFromString(qo("<svg></svg>"));return s.appendChild(a),this._setSvgAttributes(s,r)}_svgElementFromString(e){let i=this._document.createElement("DIV");i.innerHTML=e;let r=i.querySelector("svg");if(!r)throw Error("<svg> tag not found");return r}_toSvgElement(e){let i=this._svgElementFromString(qo("<svg></svg>")),r=e.attributes;for(let o=0;o<r.length;o++){let{name:a,value:s}=r[o];a!=="id"&&i.setAttribute(a,s)}for(let o=0;o<e.childNodes.length;o++)e.childNodes[o].nodeType===this._document.ELEMENT_NODE&&i.appendChild(e.childNodes[o].cloneNode(!0));return i}_setSvgAttributes(e,i){return e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),i&&i.viewBox&&e.setAttribute("viewBox",i.viewBox),e}_fetchIcon(e){let{url:i,options:r}=e,o=r?.withCredentials??!1;if(!this._httpClient)throw yO();if(i==null)throw Error(`Cannot fetch icon from URL "${i}".`);let a=this._sanitizer.sanitize(wt.RESOURCE_URL,i);if(!a)throw yD(i);let s=this._inProgressUrlFetches.get(a);if(s)return s;let c=this._httpClient.get(a,{responseType:"text",withCredentials:o}).pipe(X(l=>qo(l)),xi(()=>this._inProgressUrlFetches.delete(a)),Aa());return this._inProgressUrlFetches.set(a,c),c}_addSvgIconConfig(e,i,r){return this._svgIconConfigs.set(CD(e,i),r),this}_addSvgIconSetConfig(e,i){let r=this._iconSetConfigs.get(e);return r?r.push(i):this._iconSetConfigs.set(e,[i]),this}_svgElementFromConfig(e){if(!e.svgElement){let i=this._svgElementFromString(e.svgText);this._setSvgAttributes(i,e.options),e.svgElement=i}return e.svgElement}_getIconConfigFromResolvers(e,i){for(let r=0;r<this._resolvers.length;r++){let o=this._resolvers[r](i,e);if(o)return wO(o)?new hi(o.url,null,o.options):new hi(o,null)}}static \u0275fac=function(i){return new(i||t)(T(Jt,8),T(Pp),T(L,8),T(dt))};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function bu(t){return t.cloneNode(!0)}function CD(t,n){return t+":"+n}function wO(t){return!!(t.url&&t.options)}var CO=["*"],DO=new g("MAT_ICON_DEFAULT_OPTIONS"),xO=new g("mat-icon-location",{providedIn:"root",factory:()=>{let t=d(L),n=t?t.location:null;return{getPathname:()=>n?n.pathname+n.search:""}}}),xD=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],EO=xD.map(t=>`[${t}]`).join(", "),IO=/^url\(['"]?#(.*?)['"]?\)$/,vu=(()=>{class t{_elementRef=d(O);_iconRegistry=d(DD);_location=d(xO);_errorHandler=d(dt);_defaultColor;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(e){let i=this._cleanupFontValue(e);i!==this._fontSet&&(this._fontSet=i,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(e){let i=this._cleanupFontValue(e);i!==this._fontIcon&&(this._fontIcon=i,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=ae.EMPTY;constructor(){let e=d(new Li("aria-hidden"),{optional:!0}),i=d(DO,{optional:!0});i&&(i.color&&(this.color=this._defaultColor=i.color),i.fontSet&&(this.fontSet=i.fontSet)),e||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(e){if(!e)return["",""];let i=e.split(":");switch(i.length){case 1:return["",i[0]];case 2:return i;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let i=this._location.getPathname();i!==this._previousPath&&(this._previousPath=i,this._prependPathToReferences(i))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();let i=this._location.getPathname();this._previousPath=i,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(i),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){let e=this._elementRef.nativeElement,i=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();i--;){let r=e.childNodes[i];(r.nodeType!==1||r.nodeName.toLowerCase()==="svg")&&r.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,i=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(r=>r.length>0);this._previousFontSetClass.forEach(r=>e.classList.remove(r)),i.forEach(r=>e.classList.add(r)),this._previousFontSetClass=i,this.fontIcon!==this._previousFontIconClass&&!i.includes("mat-ligature-font")&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return typeof e=="string"?e.trim().split(" ")[0]:e}_prependPathToReferences(e){let i=this._elementsWithExternalReferences;i&&i.forEach((r,o)=>{r.forEach(a=>{o.setAttribute(a.name,`url('${e}#${a.value}')`)})})}_cacheChildrenWithExternalReferences(e){let i=e.querySelectorAll(EO),r=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let o=0;o<i.length;o++)xD.forEach(a=>{let s=i[o],c=s.getAttribute(a),l=c?c.match(IO):null;if(l){let u=r.get(s);u||(u=[],r.set(s,u)),u.push({name:a,value:l[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[i,r]=this._splitIconName(e);i&&(this._svgNamespace=i),r&&(this._svgName=r),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(r,i).pipe(ze(1)).subscribe(o=>this._setSvgElement(o),o=>{let a=`Error retrieving icon ${i}:${r}! ${o.message}`;this._errorHandler.handleError(new Error(a))})}}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=E({type:t,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(i,r){i&2&&(re("data-mat-icon-type",r._usingFontIcon()?"font":"svg")("data-mat-icon-name",r._svgName||r.fontIcon)("data-mat-icon-namespace",r._svgNamespace||r.fontSet)("fontIcon",r._usingFontIcon()?r.fontIcon:null),Ht(r.color?"mat-"+r.color:""),$("mat-icon-inline",r.inline)("mat-icon-no-color",r.color!=="primary"&&r.color!=="accent"&&r.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",oe],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:CO,decls:1,vars:0,template:function(i,r){i&1&&(De(),Q(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
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
`],encapsulation:2,changeDetection:0})}return t})(),_u=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=j({type:t});static \u0275inj=P({imports:[we]})}return t})();var MO=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=E({type:t,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(i,r){},styles:[`textarea.cdk-textarea-autosize {
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
`],encapsulation:2,changeDetection:0})}return t})(),SO={passive:!0},ID=(()=>{class t{_platform=d(ce);_ngZone=d(k);_renderer=d(Ve).createRenderer(null,null);_styleLoader=d(tt);_monitoredElements=new Map;constructor(){}monitor(e){if(!this._platform.isBrowser)return Te;this._styleLoader.load(MO);let i=Et(e),r=this._monitoredElements.get(i);if(r)return r.subject;let o=new x,a="cdk-text-field-autofilled",s=l=>{l.animationName==="cdk-text-field-autofill-start"&&!i.classList.contains(a)?(i.classList.add(a),this._ngZone.run(()=>o.next({target:l.target,isAutofilled:!0}))):l.animationName==="cdk-text-field-autofill-end"&&i.classList.contains(a)&&(i.classList.remove(a),this._ngZone.run(()=>o.next({target:l.target,isAutofilled:!1})))},c=this._ngZone.runOutsideAngular(()=>(i.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(i,"animationstart",s,SO)));return this._monitoredElements.set(i,{subject:o,unlisten:c}),o}stopMonitoring(e){let i=Et(e),r=this._monitoredElements.get(i);r&&(r.unlisten(),r.subject.complete(),i.classList.remove("cdk-text-field-autofill-monitored"),i.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(i))}ngOnDestroy(){this._monitoredElements.forEach((e,i)=>this.stopMonitoring(i))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var MD=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=j({type:t});static \u0275inj=P({})}return t})();var FD=(()=>{class t{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,i){this._renderer=e,this._elementRef=i}setProperty(e,i){this._renderer.setProperty(this._elementRef.nativeElement,e,i)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(i){return new(i||t)(Ie(Se),Ie(O))};static \u0275dir=S({type:t})}return t})(),kO=(()=>{class t extends FD{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ae(t)))(r||t)}})();static \u0275dir=S({type:t,features:[ue]})}return t})(),Ru=new g("");var TO={provide:Ru,useExisting:Lt(()=>na),multi:!0};function AO(){let t=Xt()?Xt().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var RO=new g(""),na=(()=>{class t extends FD{_compositionMode;_composing=!1;constructor(e,i,r){super(e,i),this._compositionMode=r,this._compositionMode==null&&(this._compositionMode=!AO())}writeValue(e){let i=e??"";this.setProperty("value",i)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(i){return new(i||t)(Ie(Se),Ie(O),Ie(RO,8))};static \u0275dir=S({type:t,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(i,r){i&1&&H("input",function(a){return r._handleInput(a.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(a){return r._compositionEnd(a.target.value)})},standalone:!1,features:[ke([TO]),ue]})}return t})();function Ug(t){return t==null||zg(t)===0}function zg(t){return t==null?null:Array.isArray(t)||typeof t=="string"?t.length:t instanceof Set?t.size:null}var Ys=new g(""),$g=new g(""),NO=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,wu=class{static min(n){return OO(n)}static max(n){return FO(n)}static required(n){return PO(n)}static requiredTrue(n){return LO(n)}static email(n){return jO(n)}static minLength(n){return BO(n)}static maxLength(n){return VO(n)}static pattern(n){return HO(n)}static nullValidator(n){return PD()}static compose(n){return UD(n)}static composeAsync(n){return zD(n)}};function OO(t){return n=>{if(n.value==null||t==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e<t?{min:{min:t,actual:n.value}}:null}}function FO(t){return n=>{if(n.value==null||t==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e>t?{max:{max:t,actual:n.value}}:null}}function PO(t){return Ug(t.value)?{required:!0}:null}function LO(t){return t.value===!0?null:{required:!0}}function jO(t){return Ug(t.value)||NO.test(t.value)?null:{email:!0}}function BO(t){return n=>{let e=n.value?.length??zg(n.value);return e===null||e===0?null:e<t?{minlength:{requiredLength:t,actualLength:e}}:null}}function VO(t){return n=>{let e=n.value?.length??zg(n.value);return e!==null&&e>t?{maxlength:{requiredLength:t,actualLength:e}}:null}}function HO(t){if(!t)return PD;let n,e;return typeof t=="string"?(e="",t.charAt(0)!=="^"&&(e+="^"),e+=t,t.charAt(t.length-1)!=="$"&&(e+="$"),n=new RegExp(e)):(e=t.toString(),n=t),i=>{if(Ug(i.value))return null;let r=i.value;return n.test(r)?null:{pattern:{requiredPattern:e,actualValue:r}}}}function PD(t){return null}function LD(t){return t!=null}function jD(t){return Pi(t)?Ee(t):t}function BD(t){let n={};return t.forEach(e=>{n=e!=null?v(v({},n),e):n}),Object.keys(n).length===0?null:n}function VD(t,n){return n.map(e=>e(t))}function UO(t){return!t.validate}function HD(t){return t.map(n=>UO(n)?n:e=>n.validate(e))}function UD(t){if(!t)return null;let n=t.filter(LD);return n.length==0?null:function(e){return BD(VD(e,n))}}function Wg(t){return t!=null?UD(HD(t)):null}function zD(t){if(!t)return null;let n=t.filter(LD);return n.length==0?null:function(e){let i=VD(e,n).map(jD);return ka(i).pipe(X(BD))}}function Gg(t){return t!=null?zD(HD(t)):null}function SD(t,n){return t===null?[n]:Array.isArray(t)?[...t,n]:[t,n]}function $D(t){return t._rawValidators}function WD(t){return t._rawAsyncValidators}function Vg(t){return t?Array.isArray(t)?t:[t]:[]}function Cu(t,n){return Array.isArray(t)?t.includes(n):t===n}function kD(t,n){let e=Vg(n);return Vg(t).forEach(r=>{Cu(e,r)||e.push(r)}),e}function TD(t,n){return Vg(n).filter(e=>!Cu(t,e))}var Du=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(n){this._rawValidators=n||[],this._composedValidatorFn=Wg(this._rawValidators)}_setAsyncValidators(n){this._rawAsyncValidators=n||[],this._composedAsyncValidatorFn=Gg(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(n){this._onDestroyCallbacks.push(n)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(n=>n()),this._onDestroyCallbacks=[]}reset(n=void 0){this.control?.reset(n)}hasError(n,e){return this.control?this.control.hasError(n,e):!1}getError(n,e){return this.control?this.control.getError(n,e):null}},Br=class extends Du{name;get formDirective(){return null}get path(){return null}},Vr=class extends Du{_parent=null;name=null;valueAccessor=null},Hg=class{_cd;constructor(n){this._cd=n}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var Nu=(()=>{class t extends Hg{constructor(e){super(e)}static \u0275fac=function(i){return new(i||t)(Ie(Vr,2))};static \u0275dir=S({type:t,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(i,r){i&2&&$("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},standalone:!1,features:[ue]})}return t})();var Ws="VALID",yu="INVALID",ea="PENDING",Gs="DISABLED",$i=class{},xu=class extends $i{value;source;constructor(n,e){super(),this.value=n,this.source=e}},Zs=class extends $i{pristine;source;constructor(n,e){super(),this.pristine=n,this.source=e}},Qs=class extends $i{touched;source;constructor(n,e){super(),this.touched=n,this.source=e}},ta=class extends $i{status;source;constructor(n,e){super(),this.status=n,this.source=e}},Eu=class extends $i{source;constructor(n){super(),this.source=n}},Iu=class extends $i{source;constructor(n){super(),this.source=n}};function GD(t){return(Ou(t)?t.validators:t)||null}function zO(t){return Array.isArray(t)?Wg(t):t||null}function qD(t,n){return(Ou(n)?n.asyncValidators:t)||null}function $O(t){return Array.isArray(t)?Gg(t):t||null}function Ou(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function WO(t,n,e){let i=t.controls;if(!(n?Object.keys(i):i).length)throw new D(1e3,"");if(!i[e])throw new D(1001,"")}function GO(t,n,e){t._forEachChild((i,r)=>{if(e[r]===void 0)throw new D(1002,"")})}var Mu=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(n,e){this._assignValidators(n),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(n){this._rawValidators=this._composedValidatorFn=n}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(n){this._rawAsyncValidators=this._composedAsyncValidatorFn=n}get parent(){return this._parent}get status(){return Ue(this.statusReactive)}set status(n){Ue(()=>this.statusReactive.set(n))}_status=ht(()=>this.statusReactive());statusReactive=V(void 0);get valid(){return this.status===Ws}get invalid(){return this.status===yu}get pending(){return this.status===ea}get disabled(){return this.status===Gs}get enabled(){return this.status!==Gs}errors;get pristine(){return Ue(this.pristineReactive)}set pristine(n){Ue(()=>this.pristineReactive.set(n))}_pristine=ht(()=>this.pristineReactive());pristineReactive=V(!0);get dirty(){return!this.pristine}get touched(){return Ue(this.touchedReactive)}set touched(n){Ue(()=>this.touchedReactive.set(n))}_touched=ht(()=>this.touchedReactive());touchedReactive=V(!1);get untouched(){return!this.touched}_events=new x;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(n){this._assignValidators(n)}setAsyncValidators(n){this._assignAsyncValidators(n)}addValidators(n){this.setValidators(kD(n,this._rawValidators))}addAsyncValidators(n){this.setAsyncValidators(kD(n,this._rawAsyncValidators))}removeValidators(n){this.setValidators(TD(n,this._rawValidators))}removeAsyncValidators(n){this.setAsyncValidators(TD(n,this._rawAsyncValidators))}hasValidator(n){return Cu(this._rawValidators,n)}hasAsyncValidator(n){return Cu(this._rawAsyncValidators,n)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(n={}){let e=this.touched===!1;this.touched=!0;let i=n.sourceControl??this;n.onlySelf||this._parent?.markAsTouched(W(v({},n),{sourceControl:i})),e&&n.emitEvent!==!1&&this._events.next(new Qs(!0,i))}markAllAsDirty(n={}){this.markAsDirty({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(n))}markAllAsTouched(n={}){this.markAsTouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(n))}markAsUntouched(n={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let i=n.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:i})}),n.onlySelf||this._parent?._updateTouched(n,i),e&&n.emitEvent!==!1&&this._events.next(new Qs(!1,i))}markAsDirty(n={}){let e=this.pristine===!0;this.pristine=!1;let i=n.sourceControl??this;n.onlySelf||this._parent?.markAsDirty(W(v({},n),{sourceControl:i})),e&&n.emitEvent!==!1&&this._events.next(new Zs(!1,i))}markAsPristine(n={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let i=n.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:n.emitEvent})}),n.onlySelf||this._parent?._updatePristine(n,i),e&&n.emitEvent!==!1&&this._events.next(new Zs(!0,i))}markAsPending(n={}){this.status=ea;let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new ta(this.status,e)),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.markAsPending(W(v({},n),{sourceControl:e}))}disable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=Gs,this.errors=null,this._forEachChild(r=>{r.disable(W(v({},n),{onlySelf:!0}))}),this._updateValue();let i=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new xu(this.value,i)),this._events.next(new ta(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(W(v({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=Ws,this._forEachChild(i=>{i.enable(W(v({},n),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent}),this._updateAncestors(W(v({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(n,e){n.onlySelf||(this._parent?.updateValueAndValidity(n),n.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(n){this._parent=n}getRawValue(){return this.value}updateValueAndValidity(n={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Ws||this.status===ea)&&this._runAsyncValidator(i,n.emitEvent)}let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new xu(this.value,e)),this._events.next(new ta(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.updateValueAndValidity(W(v({},n),{sourceControl:e}))}_updateTreeValidity(n={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(n)),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Gs:Ws}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(n,e){if(this.asyncValidator){this.status=ea,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:n!==!1};let i=jD(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:e,shouldHaveEmitted:n})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let n=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,n}return!1}setErrors(n,e={}){this.errors=n,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(n){let e=n;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((i,r)=>i&&i._find(r),this)}getError(n,e){let i=e?this.get(e):this;return i?.errors?i.errors[n]:null}hasError(n,e){return!!this.getError(n,e)}get root(){let n=this;for(;n._parent;)n=n._parent;return n}_updateControlsErrors(n,e,i){this.status=this._calculateStatus(),n&&this.statusChanges.emit(this.status),(n||i)&&this._events.next(new ta(this.status,e)),this._parent&&this._parent._updateControlsErrors(n,e,i)}_initObservables(){this.valueChanges=new R,this.statusChanges=new R}_calculateStatus(){return this._allControlsDisabled()?Gs:this.errors?yu:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(ea)?ea:this._anyControlsHaveStatus(yu)?yu:Ws}_anyControlsHaveStatus(n){return this._anyControls(e=>e.status===n)}_anyControlsDirty(){return this._anyControls(n=>n.dirty)}_anyControlsTouched(){return this._anyControls(n=>n.touched)}_updatePristine(n,e){let i=!this._anyControlsDirty(),r=this.pristine!==i;this.pristine=i,n.onlySelf||this._parent?._updatePristine(n,e),r&&this._events.next(new Zs(this.pristine,e))}_updateTouched(n={},e){this.touched=this._anyControlsTouched(),this._events.next(new Qs(this.touched,e)),n.onlySelf||this._parent?._updateTouched(n,e)}_onDisabledChange=[];_registerOnCollectionChange(n){this._onCollectionChange=n}_setUpdateStrategy(n){Ou(n)&&n.updateOn!=null&&(this._updateOn=n.updateOn)}_parentMarkedDirty(n){return!n&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(n){return null}_assignValidators(n){this._rawValidators=Array.isArray(n)?n.slice():n,this._composedValidatorFn=zO(this._rawValidators)}_assignAsyncValidators(n){this._rawAsyncValidators=Array.isArray(n)?n.slice():n,this._composedAsyncValidatorFn=$O(this._rawAsyncValidators)}},Su=class extends Mu{constructor(n,e,i){super(GD(e),qD(i,e)),this.controls=n,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(n,e){return this.controls[n]?this.controls[n]:(this.controls[n]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(n,e,i={}){this.registerControl(n,e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(n,e={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(n,e,i={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],e&&this.registerControl(n,e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(n){return this.controls.hasOwnProperty(n)&&this.controls[n].enabled}setValue(n,e={}){GO(this,!0,n),Object.keys(n).forEach(i=>{WO(this,!0,i),this.controls[i].setValue(n[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(n,e={}){n!=null&&(Object.keys(n).forEach(i=>{let r=this.controls[i];r&&r.patchValue(n[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(n={},e={}){this._forEachChild((i,r)=>{i.reset(n?n[r]:null,W(v({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new Iu(this))}getRawValue(){return this._reduceChildren({},(n,e,i)=>(n[i]=e.getRawValue(),n))}_syncPendingControls(){let n=this._reduceChildren(!1,(e,i)=>i._syncPendingControls()?!0:e);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){Object.keys(this.controls).forEach(e=>{let i=this.controls[e];i&&n(i,e)})}_setUpControls(){this._forEachChild(n=>{n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(n){for(let[e,i]of Object.entries(this.controls))if(this.contains(e)&&n(i))return!0;return!1}_reduceValue(){let n={};return this._reduceChildren(n,(e,i,r)=>((i.enabled||this.disabled)&&(e[r]=i.value),e))}_reduceChildren(n,e){let i=n;return this._forEachChild((r,o)=>{i=e(i,r,o)}),i}_allControlsDisabled(){for(let n of Object.keys(this.controls))if(this.controls[n].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(n){return this.controls.hasOwnProperty(n)?this.controls[n]:null}};var Fu=new g("",{factory:()=>qg}),qg="always";function qO(t,n){return[...n.path,t]}function ku(t,n,e=qg){Zg(t,n),n.valueAccessor.writeValue(t.value),(t.disabled||e==="always")&&n.valueAccessor.setDisabledState?.(t.disabled),QO(t,n),KO(t,n),YO(t,n),ZO(t,n)}function AD(t,n,e=!0){let i=()=>{};n?.valueAccessor?.registerOnChange(i),n?.valueAccessor?.registerOnTouched(i),Au(t,n),t&&(n._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function Tu(t,n){t.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(n)})}function ZO(t,n){if(n.valueAccessor.setDisabledState){let e=i=>{n.valueAccessor.setDisabledState(i)};t.registerOnDisabledChange(e),n._registerOnDestroy(()=>{t._unregisterOnDisabledChange(e)})}}function Zg(t,n){let e=$D(t);n.validator!==null?t.setValidators(SD(e,n.validator)):typeof e=="function"&&t.setValidators([e]);let i=WD(t);n.asyncValidator!==null?t.setAsyncValidators(SD(i,n.asyncValidator)):typeof i=="function"&&t.setAsyncValidators([i]);let r=()=>t.updateValueAndValidity();Tu(n._rawValidators,r),Tu(n._rawAsyncValidators,r)}function Au(t,n){let e=!1;if(t!==null){if(n.validator!==null){let r=$D(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==n.validator);o.length!==r.length&&(e=!0,t.setValidators(o))}}if(n.asyncValidator!==null){let r=WD(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==n.asyncValidator);o.length!==r.length&&(e=!0,t.setAsyncValidators(o))}}}let i=()=>{};return Tu(n._rawValidators,i),Tu(n._rawAsyncValidators,i),e}function QO(t,n){n.valueAccessor.registerOnChange(e=>{t._pendingValue=e,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&ZD(t,n)})}function YO(t,n){n.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&ZD(t,n),t.updateOn!=="submit"&&t.markAsTouched()})}function ZD(t,n){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),n.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function KO(t,n){let e=(i,r)=>{n.valueAccessor.writeValue(i),r&&n.viewToModelUpdate(i)};t.registerOnChange(e),n._registerOnDestroy(()=>{t._unregisterOnChange(e)})}function QD(t,n){t==null,Zg(t,n)}function XO(t,n){return Au(t,n)}function JO(t,n){if(!t.hasOwnProperty("model"))return!1;let e=t.model;return e.isFirstChange()?!0:!Object.is(n,e.currentValue)}function eF(t){return Object.getPrototypeOf(t.constructor)===kO}function YD(t,n){t._syncPendingControls(),n.forEach(e=>{let i=e.control;i.updateOn==="submit"&&i._pendingChange&&(e.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function tF(t,n){if(!n)return null;Array.isArray(n);let e,i,r;return n.forEach(o=>{o.constructor===na?e=o:eF(o)?i=o:r=o}),r||i||e||null}function nF(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}var iF={provide:Br,useExisting:Lt(()=>Qg)},qs=Promise.resolve(),Qg=(()=>{class t extends Br{callSetDisabledState;get submitted(){return Ue(this.submittedReactive)}_submitted=ht(()=>this.submittedReactive());submittedReactive=V(!1);_directives=new Set;form;ngSubmit=new R;options;constructor(e,i,r){super(),this.callSetDisabledState=r,this.form=new Su({},Wg(e),Gg(i))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){qs.then(()=>{let i=this._findContainer(e.path);e.control=i.registerControl(e.name,e.control),ku(e.control,e,this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){qs.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){qs.then(()=>{let i=this._findContainer(e.path),r=new Su({});QD(r,e),i.registerControl(e.name,r),r.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){qs.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,i){qs.then(()=>{this.form.get(e.path).setValue(i)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),YD(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new Eu(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static \u0275fac=function(i){return new(i||t)(Ie(Ys,10),Ie($g,10),Ie(Fu,8))};static \u0275dir=S({type:t,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(i,r){i&1&&H("submit",function(a){return r.onSubmit(a)})("reset",function(){return r.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[ke([iF]),ue]})}return t})();function RD(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}function ND(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var KD=class extends Mu{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(n=null,e,i){super(GD(e),qD(i,e)),this._applyFormState(n),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Ou(e)&&(e.nonNullable||e.initialValueIsDefault)&&(ND(n)?this.defaultValue=n.value:this.defaultValue=n)}setValue(n,e={}){this.value=this._pendingValue=n,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(n,e={}){this.setValue(n,e)}reset(n=this.defaultValue,e={}){this._applyFormState(n),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new Iu(this))}_updateValue(){}_anyControls(n){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(n){this._onChange.push(n)}_unregisterOnChange(n){RD(this._onChange,n)}registerOnDisabledChange(n){this._onDisabledChange.push(n)}_unregisterOnDisabledChange(n){RD(this._onDisabledChange,n)}_forEachChild(n){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(n){ND(n)?(this.value=this._pendingValue=n.value,n.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=n}};var rF=t=>t instanceof KD;var oF={provide:Vr,useExisting:Lt(()=>Ks)},OD=Promise.resolve(),Ks=(()=>{class t extends Vr{_changeDetectorRef;callSetDisabledState;control=new KD;static ngAcceptInputType_isDisabled;_registered=!1;viewModel;name="";isDisabled;model;options;update=new R;constructor(e,i,r,o,a,s){super(),this._changeDetectorRef=a,this.callSetDisabledState=s,this._parent=e,this._setValidators(i),this._setAsyncValidators(r),this.valueAccessor=tF(this,o)}ngOnChanges(e){if(this._checkForErrors(),!this._registered||"name"in e){if(this._registered&&(this._checkName(),this.formDirective)){let i=e.name.previousValue;this.formDirective.removeControl({name:i,path:this._getPath(i)})}this._setUpControl()}"isDisabled"in e&&this._updateDisabled(e),JO(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective?.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){ku(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._checkName()}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(e){OD.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(e){let i=e.isDisabled.currentValue,r=i!==0&&oe(i);OD.then(()=>{r&&!this.control.disabled?this.control.disable():!r&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(e){return this._parent?qO(e,this._parent):[e]}static \u0275fac=function(i){return new(i||t)(Ie(Br,9),Ie(Ys,10),Ie($g,10),Ie(Ru,10),Ie(qe,8),Ie(Fu,8))};static \u0275dir=S({type:t,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[ke([oF]),ue,Ne]})}return t})();var aF=(()=>{class t extends Br{callSetDisabledState;get submitted(){return Ue(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=ht(()=>this._submittedReactive());_submittedReactive=V(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,i,r){super(),this.callSetDisabledState=r,this._setValidators(e),this._setAsyncValidators(i)}ngOnChanges(e){this.onChanges(e)}ngOnDestroy(){this.onDestroy()}onChanges(e){this._checkFormPresent(),e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(Au(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(e){let i=this.form.get(e.path);return ku(i,e,this.callSetDisabledState),i.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),i}getControl(e){return this.form.get(e.path)}removeControl(e){AD(e.control||null,e,!1),nF(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}updateModel(e,i){this.form.get(e.path).setValue(i)}onReset(){this.resetForm()}resetForm(e=void 0,i={}){this.form.reset(e,i),this._submittedReactive.set(!1)}onSubmit(e){return this.submitted=!0,YD(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new Eu(this.control)),e?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(e=>{let i=e.control,r=this.form.get(e.path);i!==r&&(AD(i||null,e),rF(r)&&(ku(r,e,this.callSetDisabledState),e.control=r))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let i=this.form.get(e.path);QD(i,e),i.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){let i=this.form?.get(e.path);i&&XO(i,e)&&i.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){Zg(this.form,this),this._oldForm&&Au(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(i){return new(i||t)(Ie(Ys,10),Ie($g,10),Ie(Fu,8))};static \u0275dir=S({type:t,features:[ue,Ne]})}return t})();var sF={provide:Br,useExisting:Lt(()=>Yg)},Yg=(()=>{class t extends aF{form=null;ngSubmit=new R;get control(){return this.form}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ae(t)))(r||t)}})();static \u0275dir=S({type:t,selectors:[["","formGroup",""]],hostBindings:function(i,r){i&1&&H("submit",function(a){return r.onSubmit(a)})("reset",function(){return r.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[ke([sF]),ue]})}return t})();var cF=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=j({type:t});static \u0275inj=P({})}return t})();var Pu=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:Fu,useValue:e.callSetDisabledState??qg}]}}static \u0275fac=function(i){return new(i||t)};static \u0275mod=j({type:t});static \u0275inj=P({imports:[cF]})}return t})();var JD=new g("MAT_INPUT_VALUE_ACCESSOR");var ex=(()=>{class t{isErrorState(e,i){return!!(e&&e.invalid&&(e.touched||i&&i.submitted))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Lu=class{_defaultMatcher;ngControl;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;constructor(n,e,i,r,o){this._defaultMatcher=n,this.ngControl=e,this._parentFormGroup=i,this._parentForm=r,this._stateChanges=o}updateErrorState(){let n=this.errorState,e=this._parentFormGroup||this._parentForm,i=this.matcher||this._defaultMatcher,r=this.ngControl?this.ngControl.control:null,o=i?.isErrorState(r,e)??!1;o!==n&&(this.errorState=o,this._stateChanges.next())}};var lF=["button","checkbox","file","hidden","image","radio","range","reset","submit"],dF=new g("MAT_INPUT_CONFIG"),ia=(()=>{class t{_elementRef=d(O);_platform=d(ce);ngControl=d(Vr,{optional:!0,self:!0});_autofillMonitor=d(ID);_ngZone=d(k);_formField=d(Bg,{optional:!0});_renderer=d(Se);_uid=d(Qe).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=d(dF,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new x;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=It(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(wu.required)??!1}set required(e){this._required=It(e)}_required;get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&Mg().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=It(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(e=>Mg().has(e));constructor(){let e=d(Qg,{optional:!0}),i=d(Yg,{optional:!0}),r=d(ex),o=d(JD,{optional:!0,self:!0}),a=this._elementRef.nativeElement,s=a.nodeName.toLowerCase();o?Fi(o.value)?this._signalBasedValueAccessor=o:this._inputValueAccessor=o:this._inputValueAccessor=a,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(a,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new Lu(r,this.ngControl,i,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=s==="select",this._isTextarea=s==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=a.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&dn(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let i=this._elementRef.nativeElement;i.type==="number"?(i.type="text",i.setSelectionRange(0,0),i.type="number"):i.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let i=this._elementRef.nativeElement;this._previousPlaceholder=e,e?i.setAttribute("placeholder",e):i.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){lF.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,i=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&i&&i.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let i=this._elementRef.nativeElement;e.length?i.setAttribute("aria-describedby",e.join(" ")):i.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let i=e.target;!i.value&&i.selectionStart===0&&i.selectionEnd===0&&(i.setSelectionRange(1,1),i.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(i){return new(i||t)};static \u0275dir=S({type:t,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(i,r){i&1&&H("focus",function(){return r._focusChanged(!0)})("blur",function(){return r._focusChanged(!1)})("input",function(){return r._onInput()}),i&2&&(gn("id",r.id)("disabled",r.disabled&&!r.disabledInteractive)("required",r.required),re("name",r.name||null)("readonly",r._getReadonlyAttribute())("aria-disabled",r.disabled&&r.disabledInteractive?"true":null)("aria-invalid",r.empty&&r.required?null:r.errorState)("aria-required",r.required)("id",r.id),$("mat-input-server",r._isServer)("mat-mdc-form-field-textarea-control",r._isInFormField&&r._isTextarea)("mat-mdc-form-field-input-control",r._isInFormField)("mat-mdc-input-disabled-interactive",r.disabledInteractive)("mdc-text-field__input",r._isInFormField)("mat-mdc-native-select-inline",r._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",oe]},exportAs:["matInput"],features:[ke([{provide:jg,useExisting:t}]),Ne]})}return t})(),ju=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=j({type:t});static \u0275inj=P({imports:[jr,jr,MD,we]})}return t})();var Xs=class{_attachedHost=null;attach(n){return this._attachedHost=n,n.attach(this)}detach(){let n=this._attachedHost;n!=null&&(this._attachedHost=null,n.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(n){this._attachedHost=n}},ra=class extends Xs{component;viewContainerRef;injector;projectableNodes;bindings;constructor(n,e,i,r,o){super(),this.component=n,this.viewContainerRef=e,this.injector=i,this.projectableNodes=r,this.bindings=o||null}},pi=class extends Xs{templateRef;viewContainerRef;context;injector;constructor(n,e,i,r){super(),this.templateRef=n,this.viewContainerRef=e,this.context=i,this.injector=r}get origin(){return this.templateRef.elementRef}attach(n,e=this.context){return this.context=e,super.attach(n)}detach(){return this.context=void 0,super.detach()}},Kg=class extends Xs{element;constructor(n){super(),this.element=n instanceof O?n.nativeElement:n}},oa=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(n){if(n instanceof ra)return this._attachedPortal=n,this.attachComponentPortal(n);if(n instanceof pi)return this._attachedPortal=n,this.attachTemplatePortal(n);if(this.attachDomPortal&&n instanceof Kg)return this._attachedPortal=n,this.attachDomPortal(n)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(n){this._disposeFn=n}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}},Bu=class extends oa{outletElement;_appRef;_defaultInjector;constructor(n,e,i){super(),this.outletElement=n,this._appRef=e,this._defaultInjector=i}attachComponentPortal(n){let e;if(n.viewContainerRef){let i=n.injector||n.viewContainerRef.injector,r=i.get(Fn,null,{optional:!0})||void 0;e=n.viewContainerRef.createComponent(n.component,{index:n.viewContainerRef.length,injector:i,ngModuleRef:r,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0}),this.setDisposeFn(()=>e.destroy())}else{let i=this._appRef,r=n.injector||this._defaultInjector||G.NULL,o=r.get(be,i.injector);e=hd(n.component,{elementInjector:r,environmentInjector:o,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0}),i.attachView(e.hostView),this.setDisposeFn(()=>{i.viewCount>0&&i.detachView(e.hostView),e.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=n,e}attachTemplatePortal(n){let e=n.viewContainerRef,i=e.createEmbeddedView(n.templateRef,n.context,{injector:n.injector});return i.rootNodes.forEach(r=>this.outletElement.appendChild(r)),i.detectChanges(),this.setDisposeFn(()=>{let r=e.indexOf(i);r!==-1&&e.remove(r)}),this._attachedPortal=n,i}attachDomPortal=n=>{let e=n.element;e.parentNode;let i=this.outletElement.ownerDocument.createComment("dom-portal");e.parentNode.insertBefore(i,e),this.outletElement.appendChild(e),this._attachedPortal=n,super.setDisposeFn(()=>{i.parentNode&&i.parentNode.replaceChild(e,i)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(n){return n.hostView.rootNodes[0]}},nx=(()=>{class t extends pi{constructor(){let e=d(ut),i=d(Ct);super(e,i)}static \u0275fac=function(i){return new(i||t)};static \u0275dir=S({type:t,selectors:[["","cdkPortal",""]],exportAs:["cdkPortal"],features:[ue]})}return t})(),Wi=(()=>{class t extends oa{_moduleRef=d(Fn,{optional:!0});_document=d(L);_viewContainerRef=d(Ct);_isInitialized=!1;_attachedRef=null;constructor(){super()}get portal(){return this._attachedPortal}set portal(e){this.hasAttached()&&!e&&!this._isInitialized||(this.hasAttached()&&super.detach(),e&&super.attach(e),this._attachedPortal=e||null)}attached=new R;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(e){e.setAttachedHost(this);let i=e.viewContainerRef!=null?e.viewContainerRef:this._viewContainerRef,r=i.createComponent(e.component,{index:i.length,injector:e.injector||i.injector,projectableNodes:e.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:e.bindings||void 0});return i!==this._viewContainerRef&&this._getRootNode().appendChild(r.hostView.rootNodes[0]),super.setDisposeFn(()=>r.destroy()),this._attachedPortal=e,this._attachedRef=r,this.attached.emit(r),r}attachTemplatePortal(e){e.setAttachedHost(this);let i=this._viewContainerRef.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=e,this._attachedRef=i,this.attached.emit(i),i}attachDomPortal=e=>{let i=e.element;i.parentNode;let r=this._document.createComment("dom-portal");e.setAttachedHost(this),i.parentNode.insertBefore(r,i),this._getRootNode().appendChild(i),this._attachedPortal=e,super.setDisposeFn(()=>{r.parentNode&&r.parentNode.replaceChild(i,r)})};_getRootNode(){let e=this._viewContainerRef.element.nativeElement;return e.nodeType===e.ELEMENT_NODE?e:e.parentNode}static \u0275fac=function(i){return new(i||t)};static \u0275dir=S({type:t,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:[0,"cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[ue]})}return t})(),Hr=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=j({type:t});static \u0275inj=P({})}return t})();var uF=20,ec=(()=>{class t{_ngZone=d(k);_platform=d(ce);_renderer=d(Ve).createRenderer(null,null);_cleanupGlobalListener;constructor(){}_scrolled=new x;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let i=this.scrollContainers.get(e);i&&(i.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=uF){return this._platform.isBrowser?new q(i=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let r=e>0?this._scrolled.pipe(jc(e)).subscribe(i):this._scrolled.subscribe(i);return this._scrolledCount++,()=>{r.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):N()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,i)=>this.deregister(i)),this._scrolled.complete()}ancestorScrolled(e,i){let r=this.getAncestorScrollContainers(e);return this.scrolled(i).pipe(le(o=>!o||r.indexOf(o)>-1))}getAncestorScrollContainers(e){let i=[];return this.scrollContainers.forEach((r,o)=>{this._scrollableContainsElement(o,e)&&i.push(o)}),i}_scrollableContainsElement(e,i){let r=Et(i),o=e.getElementRef().nativeElement;do if(r==o)return!0;while(r=r.parentElement);return!1}static \u0275fac=function(i){return new(i||t)};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Xg=(()=>{class t{elementRef=d(O);scrollDispatcher=d(ec);ngZone=d(k);dir=d(Nt,{optional:!0});_scrollElement=this.elementRef.nativeElement;_destroyed=new x;_renderer=d(Se);_cleanupScroll;_elementScrolled=new x;constructor(){}ngOnInit(){this._cleanupScroll=this.ngZone.runOutsideAngular(()=>this._renderer.listen(this._scrollElement,"scroll",e=>this._elementScrolled.next(e))),this.scrollDispatcher.register(this)}ngOnDestroy(){this._cleanupScroll?.(),this._elementScrolled.complete(),this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(e){let i=this.elementRef.nativeElement,r=this.dir&&this.dir.value=="rtl";e.left==null&&(e.left=r?e.end:e.start),e.right==null&&(e.right=r?e.start:e.end),e.bottom!=null&&(e.top=i.scrollHeight-i.clientHeight-e.bottom),r&&Yo()!=Cn.NORMAL?(e.left!=null&&(e.right=i.scrollWidth-i.clientWidth-e.left),Yo()==Cn.INVERTED?e.left=e.right:Yo()==Cn.NEGATED&&(e.left=e.right?-e.right:e.right)):e.right!=null&&(e.left=i.scrollWidth-i.clientWidth-e.right),this._applyScrollToOptions(e)}_applyScrollToOptions(e){let i=this.elementRef.nativeElement;uu()?i.scrollTo(e):(e.top!=null&&(i.scrollTop=e.top),e.left!=null&&(i.scrollLeft=e.left))}measureScrollOffset(e){let i="left",r="right",o=this.elementRef.nativeElement;if(e=="top")return o.scrollTop;if(e=="bottom")return o.scrollHeight-o.clientHeight-o.scrollTop;let a=this.dir&&this.dir.value=="rtl";return e=="start"?e=a?r:i:e=="end"&&(e=a?i:r),a&&Yo()==Cn.INVERTED?e==i?o.scrollWidth-o.clientWidth-o.scrollLeft:o.scrollLeft:a&&Yo()==Cn.NEGATED?e==i?o.scrollLeft+o.scrollWidth-o.clientWidth:-o.scrollLeft:e==i?o.scrollLeft:o.scrollWidth-o.clientWidth-o.scrollLeft}static \u0275fac=function(i){return new(i||t)};static \u0275dir=S({type:t,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]]})}return t})(),fF=20,Gi=(()=>{class t{_platform=d(ce);_listeners;_viewportSize=null;_change=new x;_document=d(L);constructor(){let e=d(k),i=d(Ve).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let r=o=>this._change.next(o);this._listeners=[i.listen("window","resize",r),i.listen("window","orientationchange",r)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:i,height:r}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+r,right:e.left+i,height:r,width:i}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,i=this._getWindow(),r=e.documentElement,o=r.getBoundingClientRect(),a=-o.top||e.body?.scrollTop||i.scrollY||r.scrollTop||0,s=-o.left||e.body?.scrollLeft||i.scrollX||r.scrollLeft||0;return{top:a,left:s}}change(e=fF){return e>0?this._change.pipe(jc(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Js=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=j({type:t});static \u0275inj=P({})}return t})(),Jg=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=j({type:t});static \u0275inj=P({imports:[we,Js,we,Js]})}return t})();var rb=["*"];function pF(t,n){t&1&&Q(0)}var gF=["tabListContainer"],bF=["tabList"],vF=["tabListInner"],_F=["nextPaginator"],yF=["previousPaginator"],wF=["content"];function CF(t,n){}var DF=["tabBodyWrapper"],xF=["tabHeader"];function EF(t,n){}function IF(t,n){if(t&1&&St(0,EF,0,0,"ng-template",12),t&2){let e=me().$implicit;se("cdkPortalOutlet",e.templateLabel)}}function MF(t,n){if(t&1&&Y(0),t&2){let e=me().$implicit;At(e.textLabel)}}function SF(t,n){if(t&1){let e=Bn();_(0,"div",7,2),H("click",function(){let r=_t(e),o=r.$implicit,a=r.$index,s=me(),c=Kt(1);return yt(s._handleClick(o,c,a))})("cdkFocusChange",function(r){let o=_t(e).$index,a=me();return yt(a._tabFocusChanged(r,o))}),fe(2,"span",8)(3,"div",9),_(4,"span",10)(5,"span",11),_e(6,IF,1,1,null,12)(7,MF,1,1),y()()()}if(t&2){let e=n.$implicit,i=n.$index,r=Kt(1),o=me();Ht(e.labelClass),$("mdc-tab--active",o.selectedIndex===i),se("id",o._getTabLabelId(e,i))("disabled",e.disabled)("fitInkBarToContent",o.fitInkBarToContent),re("tabIndex",o._getTabIndex(i))("aria-posinset",i+1)("aria-setsize",o._tabs.length)("aria-controls",o._getTabContentId(i))("aria-selected",o.selectedIndex===i)("aria-label",e.ariaLabel||null)("aria-labelledby",!e.ariaLabel&&e.ariaLabelledby?e.ariaLabelledby:null),C(3),se("matRippleTrigger",r)("matRippleDisabled",e.disabled||o.disableRipple),C(3),ye(e.templateLabel?6:7)}}function kF(t,n){t&1&&Q(0)}function TF(t,n){if(t&1){let e=Bn();_(0,"mat-tab-body",13),H("_onCentered",function(){_t(e);let r=me();return yt(r._removeTabBodyWrapperHeight())})("_onCentering",function(r){_t(e);let o=me();return yt(o._setTabBodyWrapperHeight(r))})("_beforeCentering",function(r){_t(e);let o=me();return yt(o._bodyCentered(r))}),y()}if(t&2){let e=n.$implicit,i=n.$index,r=me();Ht(e.bodyClass),se("id",r._getTabContentId(i))("content",e.content)("position",e.position)("animationDuration",r.animationDuration)("preserveContent",r.preserveContent),re("tabindex",r.contentTabIndex!=null&&r.selectedIndex===i?r.contentTabIndex:null)("aria-labelledby",r._getTabLabelId(e,i))("aria-hidden",r.selectedIndex!==i)}}var AF=new g("MatTabContent"),RF=(()=>{class t{template=d(ut);constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275dir=S({type:t,selectors:[["","matTabContent",""]],features:[ke([{provide:AF,useExisting:t}])]})}return t})(),NF=new g("MatTabLabel"),ax=new g("MAT_TAB"),OF=(()=>{class t extends nx{_closestTab=d(ax,{optional:!0});static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ae(t)))(r||t)}})();static \u0275dir=S({type:t,selectors:[["","mat-tab-label",""],["","matTabLabel",""]],features:[ke([{provide:NF,useExisting:t}]),ue]})}return t})(),sx=new g("MAT_TAB_GROUP"),Ur=(()=>{class t{_viewContainerRef=d(Ct);_closestTabGroup=d(sx,{optional:!0});disabled=!1;get templateLabel(){return this._templateLabel}set templateLabel(e){this._setTemplateLabelInput(e)}_templateLabel;_explicitContent=void 0;_implicitContent;textLabel="";ariaLabel;ariaLabelledby;labelClass;bodyClass;id=null;_contentPortal=null;get content(){return this._contentPortal}_stateChanges=new x;position=null;origin=null;isActive=!1;constructor(){d(tt).load(Ui)}ngOnChanges(e){(e.hasOwnProperty("textLabel")||e.hasOwnProperty("disabled"))&&this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}ngOnInit(){this._contentPortal=new pi(this._explicitContent||this._implicitContent,this._viewContainerRef)}_setTemplateLabelInput(e){e&&e._closestTab===this&&(this._templateLabel=e)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=E({type:t,selectors:[["mat-tab"]],contentQueries:function(i,r,o){if(i&1&&Dt(o,OF,5)(o,RF,7,ut),i&2){let a;U(a=z())&&(r.templateLabel=a.first),U(a=z())&&(r._explicitContent=a.first)}},viewQuery:function(i,r){if(i&1&&et(ut,7),i&2){let o;U(o=z())&&(r._implicitContent=o.first)}},hostAttrs:["hidden",""],hostVars:1,hostBindings:function(i,r){i&2&&re("id",null)},inputs:{disabled:[2,"disabled","disabled",oe],textLabel:[0,"label","textLabel"],ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],labelClass:"labelClass",bodyClass:"bodyClass",id:"id"},exportAs:["matTab"],features:[ke([{provide:ax,useExisting:t}]),Ne],ngContentSelectors:rb,decls:1,vars:0,template:function(i,r){i&1&&(De(),nd(0,pF,1,0,"ng-template"))},encapsulation:2})}return t})(),eb="mdc-tab-indicator--active",ix="mdc-tab-indicator--no-transition",tb=class{_items;_currentItem;constructor(n){this._items=n}hide(){this._items.forEach(n=>n.deactivateInkBar()),this._currentItem=void 0}alignToElement(n){let e=this._items.find(r=>r.elementRef.nativeElement===n),i=this._currentItem;if(e!==i&&(i?.deactivateInkBar(),e)){let r=i?.elementRef.nativeElement.getBoundingClientRect?.();e.activateInkBar(r),this._currentItem=e}}},FF=(()=>{class t{_elementRef=d(O);_inkBarElement=null;_inkBarContentElement=null;_fitToContent=!1;get fitInkBarToContent(){return this._fitToContent}set fitInkBarToContent(e){this._fitToContent!==e&&(this._fitToContent=e,this._inkBarElement&&this._appendInkBarElement())}activateInkBar(e){let i=this._elementRef.nativeElement;if(!e||!i.getBoundingClientRect||!this._inkBarContentElement){i.classList.add(eb);return}let r=i.getBoundingClientRect(),o=e.width/r.width,a=e.left-r.left;i.classList.add(ix),this._inkBarContentElement.style.setProperty("transform",`translateX(${a}px) scaleX(${o})`),i.getBoundingClientRect(),i.classList.remove(ix),i.classList.add(eb),this._inkBarContentElement.style.setProperty("transform","")}deactivateInkBar(){this._elementRef.nativeElement.classList.remove(eb)}ngOnInit(){this._createInkBarElement()}ngOnDestroy(){this._inkBarElement?.remove(),this._inkBarElement=this._inkBarContentElement=null}_createInkBarElement(){let e=this._elementRef.nativeElement.ownerDocument||document,i=this._inkBarElement=e.createElement("span"),r=this._inkBarContentElement=e.createElement("span");i.className="mdc-tab-indicator",r.className="mdc-tab-indicator__content mdc-tab-indicator__content--underline",i.appendChild(this._inkBarContentElement),this._appendInkBarElement()}_appendInkBarElement(){this._inkBarElement;let e=this._fitToContent?this._elementRef.nativeElement.querySelector(".mdc-tab__content"):this._elementRef.nativeElement;e.appendChild(this._inkBarElement)}static \u0275fac=function(i){return new(i||t)};static \u0275dir=S({type:t,inputs:{fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",oe]}})}return t})();var cx=(()=>{class t extends FF{elementRef=d(O);disabled=!1;focus(){this.elementRef.nativeElement.focus()}getOffsetLeft(){return this.elementRef.nativeElement.offsetLeft}getOffsetWidth(){return this.elementRef.nativeElement.offsetWidth}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ae(t)))(r||t)}})();static \u0275dir=S({type:t,selectors:[["","matTabLabelWrapper",""]],hostVars:3,hostBindings:function(i,r){i&2&&(re("aria-disabled",!!r.disabled),$("mat-mdc-tab-disabled",r.disabled))},inputs:{disabled:[2,"disabled","disabled",oe]},features:[ue]})}return t})(),rx={passive:!0},PF=650,LF=100,jF=(()=>{class t{_elementRef=d(O);_changeDetectorRef=d(qe);_viewportRuler=d(Gi);_dir=d(Nt,{optional:!0});_ngZone=d(k);_platform=d(ce);_sharedResizeObserver=d(pu);_injector=d(G);_renderer=d(Se);_animationsDisabled=Ye();_eventCleanups;_scrollDistance=0;_selectedIndexChanged=!1;_destroyed=new x;_showPaginationControls=!1;_disableScrollAfter=!0;_disableScrollBefore=!0;_tabLabelCount;_scrollDistanceChanged=!1;_keyManager;_currentTextContent;_stopScrolling=new x;disablePagination=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){let i=isNaN(e)?0:e;this._selectedIndex!=i&&(this._selectedIndexChanged=!0,this._selectedIndex=i,this._keyManager&&this._keyManager.updateActiveItem(i))}_selectedIndex=0;selectFocusedIndex=new R;indexFocused=new R;constructor(){this._eventCleanups=this._ngZone.runOutsideAngular(()=>[this._renderer.listen(this._elementRef.nativeElement,"mouseleave",()=>this._stopInterval())])}ngAfterViewInit(){this._eventCleanups.push(this._renderer.listen(this._previousPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("before"),rx),this._renderer.listen(this._nextPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("after"),rx))}ngAfterContentInit(){let e=this._dir?this._dir.change:N("ltr"),i=this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe(Zn(32),$e(this._destroyed)),r=this._viewportRuler.change(150).pipe($e(this._destroyed)),o=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new Us(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(()=>!1),this._keyManager.updateActiveItem(Math.max(this._selectedIndex,0)),at(o,{injector:this._injector}),sn(e,r,i,this._items.changes,this._itemsResized()).pipe($e(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>{Promise.resolve().then(()=>{this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),this._scrollDistance)),o()})}),this._keyManager?.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.subscribe(a=>{this.indexFocused.emit(a),this._setTabFocus(a)})}_itemsResized(){return typeof ResizeObserver!="function"?Te:this._items.changes.pipe(ct(this._items),it(e=>new q(i=>this._ngZone.runOutsideAngular(()=>{let r=new ResizeObserver(o=>i.next(o));return e.forEach(o=>r.observe(o.elementRef.nativeElement)),()=>{r.disconnect()}}))),nr(1),le(e=>e.some(i=>i.contentRect.width>0&&i.contentRect.height>0)))}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._keyManager?.destroy(),this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(e){if(!Hi(e))switch(e.keyCode){case 13:case 32:if(this.focusIndex!==this.selectedIndex){let i=this._items.get(this.focusIndex);i&&!i.disabled&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(e))}break;default:this._keyManager?.onKeydown(e)}}_onContentChanges(){let e=this._elementRef.nativeElement.textContent;e!==this._currentTextContent&&(this._currentTextContent=e||"",this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(e){!this._isValidIndex(e)||this.focusIndex===e||!this._keyManager||this._keyManager.setActiveItem(e)}_isValidIndex(e){return this._items?!!this._items.toArray()[e]:!0}_setTabFocus(e){if(this._showPaginationControls&&this._scrollToLabel(e),this._items&&this._items.length){this._items.toArray()[e].focus();let i=this._tabListContainer.nativeElement;this._getLayoutDirection()=="ltr"?i.scrollLeft=0:i.scrollLeft=i.scrollWidth-i.offsetWidth}}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_updateTabScrollPosition(){if(this.disablePagination)return;let e=this.scrollDistance,i=this._getLayoutDirection()==="ltr"?-e:e;this._tabList.nativeElement.style.transform=`translateX(${Math.round(i)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(e){this._scrollTo(e)}_scrollHeader(e){let i=this._tabListContainer.nativeElement.offsetWidth,r=(e=="before"?-1:1)*i/3;return this._scrollTo(this._scrollDistance+r)}_handlePaginatorClick(e){this._stopInterval(),this._scrollHeader(e)}_scrollToLabel(e){if(this.disablePagination)return;let i=this._items?this._items.toArray()[e]:null;if(!i)return;let r=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:o,offsetWidth:a}=i.elementRef.nativeElement,s,c;this._getLayoutDirection()=="ltr"?(s=o,c=s+a):(c=this._tabListInner.nativeElement.offsetWidth-o,s=c-a);let l=this.scrollDistance,u=this.scrollDistance+r;s<l?this.scrollDistance-=l-s:c>u&&(this.scrollDistance+=Math.min(c-u,s-l))}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{let e=this._tabListInner.nativeElement.scrollWidth,i=this._elementRef.nativeElement.offsetWidth,r=e-i>=5;r||(this.scrollDistance=0),r!==this._showPaginationControls&&(this._showPaginationControls=r,this._changeDetectorRef.markForCheck())}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=this.scrollDistance==0,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){let e=this._tabListInner.nativeElement.scrollWidth,i=this._tabListContainer.nativeElement.offsetWidth;return e-i||0}_alignInkBarToSelectedTab(){let e=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,i=e?e.elementRef.nativeElement:null;i?this._inkBar.alignToElement(i):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(e,i){i&&i.button!=null&&i.button!==0||(this._stopInterval(),Ta(PF,LF).pipe($e(sn(this._stopScrolling,this._destroyed))).subscribe(()=>{let{maxScrollDistance:r,distance:o}=this._scrollHeader(e);(o===0||o>=r)&&this._stopInterval()}))}_scrollTo(e){if(this.disablePagination)return{maxScrollDistance:0,distance:0};let i=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(i,e)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:i,distance:this._scrollDistance}}static \u0275fac=function(i){return new(i||t)};static \u0275dir=S({type:t,inputs:{disablePagination:[2,"disablePagination","disablePagination",oe],selectedIndex:[2,"selectedIndex","selectedIndex",si]},outputs:{selectFocusedIndex:"selectFocusedIndex",indexFocused:"indexFocused"}})}return t})(),BF=(()=>{class t extends jF{_items;_tabListContainer;_tabList;_tabListInner;_nextPaginator;_previousPaginator;_inkBar;ariaLabel;ariaLabelledby;disableRipple=!1;ngAfterContentInit(){this._inkBar=new tb(this._items),super.ngAfterContentInit()}_itemSelected(e){e.preventDefault()}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ae(t)))(r||t)}})();static \u0275cmp=E({type:t,selectors:[["mat-tab-header"]],contentQueries:function(i,r,o){if(i&1&&Dt(o,cx,4),i&2){let a;U(a=z())&&(r._items=a)}},viewQuery:function(i,r){if(i&1&&et(gF,7)(bF,7)(vF,7)(_F,5)(yF,5),i&2){let o;U(o=z())&&(r._tabListContainer=o.first),U(o=z())&&(r._tabList=o.first),U(o=z())&&(r._tabListInner=o.first),U(o=z())&&(r._nextPaginator=o.first),U(o=z())&&(r._previousPaginator=o.first)}},hostAttrs:[1,"mat-mdc-tab-header"],hostVars:4,hostBindings:function(i,r){i&2&&$("mat-mdc-tab-header-pagination-controls-enabled",r._showPaginationControls)("mat-mdc-tab-header-rtl",r._getLayoutDirection()=="rtl")},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],disableRipple:[2,"disableRipple","disableRipple",oe]},features:[ue],ngContentSelectors:rb,decls:13,vars:10,consts:[["previousPaginator",""],["tabListContainer",""],["tabList",""],["tabListInner",""],["nextPaginator",""],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-before",3,"click","mousedown","touchend","matRippleDisabled"],[1,"mat-mdc-tab-header-pagination-chevron"],[1,"mat-mdc-tab-label-container",3,"keydown"],["role","tablist",1,"mat-mdc-tab-list",3,"cdkObserveContent"],[1,"mat-mdc-tab-labels"],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-after",3,"mousedown","click","touchend","matRippleDisabled"]],template:function(i,r){i&1&&(De(),_(0,"div",5,0),H("click",function(){return r._handlePaginatorClick("before")})("mousedown",function(a){return r._handlePaginatorPress("before",a)})("touchend",function(){return r._stopInterval()}),fe(2,"div",6),y(),_(3,"div",7,1),H("keydown",function(a){return r._handleKeydown(a)}),_(5,"div",8,2),H("cdkObserveContent",function(){return r._onContentChanges()}),_(7,"div",9,3),Q(9),y()()(),_(10,"div",10,4),H("mousedown",function(a){return r._handlePaginatorPress("after",a)})("click",function(){return r._handlePaginatorClick("after")})("touchend",function(){return r._stopInterval()}),fe(12,"div",6),y()),i&2&&($("mat-mdc-tab-header-pagination-disabled",r._disableScrollBefore),se("matRippleDisabled",r._disableScrollBefore||r.disableRipple),C(3),$("_mat-animation-noopable",r._animationsDisabled),C(2),re("aria-label",r.ariaLabel||null)("aria-labelledby",r.ariaLabelledby||null),C(5),$("mat-mdc-tab-header-pagination-disabled",r._disableScrollAfter),se("matRippleDisabled",r._disableScrollAfter||r.disableRipple))},dependencies:[$s,su],styles:[`.mat-mdc-tab-header {
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
`],encapsulation:2})}return t})(),VF=new g("MAT_TABS_CONFIG"),ox=(()=>{class t extends Wi{_host=d(nb);_ngZone=d(k);_centeringSub=ae.EMPTY;_leavingSub=ae.EMPTY;constructor(){super()}ngOnInit(){super.ngOnInit(),this._centeringSub=this._host._beforeCentering.pipe(ct(this._host._isCenterPosition())).subscribe(e=>{this._host._content&&e&&!this.hasAttached()&&this._ngZone.run(()=>{Promise.resolve().then(),this.attach(this._host._content)})}),this._leavingSub=this._host._afterLeavingCenter.subscribe(()=>{this._host.preserveContent||this._ngZone.run(()=>this.detach())})}ngOnDestroy(){super.ngOnDestroy(),this._centeringSub.unsubscribe(),this._leavingSub.unsubscribe()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=S({type:t,selectors:[["","matTabBodyHost",""]],features:[ue]})}return t})(),nb=(()=>{class t{_elementRef=d(O);_dir=d(Nt,{optional:!0});_ngZone=d(k);_injector=d(G);_renderer=d(Se);_diAnimationsDisabled=Ye();_eventCleanups;_initialized=!1;_fallbackTimer;_positionIndex;_dirChangeSubscription=ae.EMPTY;_position;_previousPosition;_onCentering=new R;_beforeCentering=new R;_afterLeavingCenter=new R;_onCentered=new R(!0);_portalHost;_contentElement;_content;animationDuration="500ms";preserveContent=!1;set position(e){this._positionIndex=e,this._computePositionAnimationState()}constructor(){if(this._dir){let e=d(qe);this._dirChangeSubscription=this._dir.change.subscribe(i=>{this._computePositionAnimationState(i),e.markForCheck()})}}ngOnInit(){this._bindTransitionEvents(),this._position==="center"&&(this._setActiveClass(!0),at(()=>this._onCentering.emit(this._elementRef.nativeElement.clientHeight),{injector:this._injector})),this._initialized=!0}ngOnDestroy(){clearTimeout(this._fallbackTimer),this._eventCleanups?.forEach(e=>e()),this._dirChangeSubscription.unsubscribe()}_bindTransitionEvents(){this._ngZone.runOutsideAngular(()=>{let e=this._elementRef.nativeElement,i=r=>{r.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.remove("mat-tab-body-animating"),r.type==="transitionend"&&this._transitionDone())};this._eventCleanups=[this._renderer.listen(e,"transitionstart",r=>{r.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.add("mat-tab-body-animating"),this._transitionStarted())}),this._renderer.listen(e,"transitionend",i),this._renderer.listen(e,"transitioncancel",i)]})}_transitionStarted(){clearTimeout(this._fallbackTimer);let e=this._position==="center";this._beforeCentering.emit(e),e&&this._onCentering.emit(this._elementRef.nativeElement.clientHeight)}_transitionDone(){this._position==="center"?this._onCentered.emit():this._previousPosition==="center"&&this._afterLeavingCenter.emit()}_setActiveClass(e){this._elementRef.nativeElement.classList.toggle("mat-mdc-tab-body-active",e)}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_isCenterPosition(){return this._positionIndex===0}_computePositionAnimationState(e=this._getLayoutDirection()){this._previousPosition=this._position,this._positionIndex<0?this._position=e=="ltr"?"left":"right":this._positionIndex>0?this._position=e=="ltr"?"right":"left":this._position="center",this._animationsDisabled()?this._simulateTransitionEvents():this._initialized&&(this._position==="center"||this._previousPosition==="center")&&(clearTimeout(this._fallbackTimer),this._fallbackTimer=this._ngZone.runOutsideAngular(()=>setTimeout(()=>this._simulateTransitionEvents(),100)))}_simulateTransitionEvents(){this._transitionStarted(),at(()=>this._transitionDone(),{injector:this._injector})}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0ms"||this.animationDuration==="0s"}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=E({type:t,selectors:[["mat-tab-body"]],viewQuery:function(i,r){if(i&1&&et(ox,5)(wF,5),i&2){let o;U(o=z())&&(r._portalHost=o.first),U(o=z())&&(r._contentElement=o.first)}},hostAttrs:[1,"mat-mdc-tab-body"],hostVars:1,hostBindings:function(i,r){i&2&&re("inert",r._position==="center"?null:"")},inputs:{_content:[0,"content","_content"],animationDuration:"animationDuration",preserveContent:"preserveContent",position:"position"},outputs:{_onCentering:"_onCentering",_beforeCentering:"_beforeCentering",_onCentered:"_onCentered"},decls:3,vars:6,consts:[["content",""],["cdkScrollable","",1,"mat-mdc-tab-body-content"],["matTabBodyHost",""]],template:function(i,r){i&1&&(_(0,"div",1,0),St(2,CF,0,0,"ng-template",2),y()),i&2&&$("mat-tab-body-content-left",r._position==="left")("mat-tab-body-content-right",r._position==="right")("mat-tab-body-content-can-animate",r._position==="center"||r._previousPosition==="center")},dependencies:[ox,Xg],styles:[`.mat-mdc-tab-body {
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
`],encapsulation:2})}return t})(),aa=(()=>{class t{_elementRef=d(O);_changeDetectorRef=d(qe);_ngZone=d(k);_tabsSubscription=ae.EMPTY;_tabLabelSubscription=ae.EMPTY;_tabBodySubscription=ae.EMPTY;_diAnimationsDisabled=Ye();_allTabs;_tabBodies;_tabBodyWrapper;_tabHeader;_tabs=new ii;_indexToSelect=0;_lastFocusedTabIndex=null;_tabBodyWrapperHeight=0;color;get fitInkBarToContent(){return this._fitInkBarToContent}set fitInkBarToContent(e){this._fitInkBarToContent=e,this._changeDetectorRef.markForCheck()}_fitInkBarToContent=!1;stretchTabs=!0;alignTabs=null;dynamicHeight=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){this._indexToSelect=isNaN(e)?null:e}_selectedIndex=null;headerPosition="above";get animationDuration(){return this._animationDuration}set animationDuration(e){let i=e+"";this._animationDuration=/^\d+$/.test(i)?e+"ms":i}_animationDuration;get contentTabIndex(){return this._contentTabIndex}set contentTabIndex(e){this._contentTabIndex=isNaN(e)?null:e}_contentTabIndex=null;disablePagination=!1;disableRipple=!1;preserveContent=!1;get backgroundColor(){return this._backgroundColor}set backgroundColor(e){let i=this._elementRef.nativeElement.classList;i.remove("mat-tabs-with-background",`mat-background-${this.backgroundColor}`),e&&i.add("mat-tabs-with-background",`mat-background-${e}`),this._backgroundColor=e}_backgroundColor;ariaLabel;ariaLabelledby;selectedIndexChange=new R;focusChange=new R;animationDone=new R;selectedTabChange=new R(!0);_groupId;_isServer=!d(ce).isBrowser;constructor(){let e=d(VF,{optional:!0});this._groupId=d(Qe).getId("mat-tab-group-"),this.animationDuration=e&&e.animationDuration?e.animationDuration:"500ms",this.disablePagination=e&&e.disablePagination!=null?e.disablePagination:!1,this.dynamicHeight=e&&e.dynamicHeight!=null?e.dynamicHeight:!1,e?.contentTabIndex!=null&&(this.contentTabIndex=e.contentTabIndex),this.preserveContent=!!e?.preserveContent,this.fitInkBarToContent=e&&e.fitInkBarToContent!=null?e.fitInkBarToContent:!1,this.stretchTabs=e&&e.stretchTabs!=null?e.stretchTabs:!0,this.alignTabs=e&&e.alignTabs!=null?e.alignTabs:null}ngAfterContentChecked(){let e=this._indexToSelect=this._clampTabIndex(this._indexToSelect);if(this._selectedIndex!=e){let i=this._selectedIndex==null;if(!i){this.selectedTabChange.emit(this._createChangeEvent(e));let r=this._tabBodyWrapper.nativeElement;r.style.minHeight=r.clientHeight+"px"}Promise.resolve().then(()=>{this._tabs.forEach((r,o)=>r.isActive=o===e),i||(this.selectedIndexChange.emit(e),this._tabBodyWrapper.nativeElement.style.minHeight="")})}this._tabs.forEach((i,r)=>{i.position=r-e,this._selectedIndex!=null&&i.position==0&&!i.origin&&(i.origin=e-this._selectedIndex)}),this._selectedIndex!==e&&(this._selectedIndex=e,this._lastFocusedTabIndex=null,this._changeDetectorRef.markForCheck())}ngAfterContentInit(){this._subscribeToAllTabChanges(),this._subscribeToTabLabels(),this._tabsSubscription=this._tabs.changes.subscribe(()=>{let e=this._clampTabIndex(this._indexToSelect);if(e===this._selectedIndex){let i=this._tabs.toArray(),r;for(let o=0;o<i.length;o++)if(i[o].isActive){this._indexToSelect=this._selectedIndex=o,this._lastFocusedTabIndex=null,r=i[o];break}!r&&i[e]&&Promise.resolve().then(()=>{i[e].isActive=!0,this.selectedTabChange.emit(this._createChangeEvent(e))})}this._changeDetectorRef.markForCheck()})}ngAfterViewInit(){this._tabBodySubscription=this._tabBodies.changes.subscribe(()=>this._bodyCentered(!0))}_subscribeToAllTabChanges(){this._allTabs.changes.pipe(ct(this._allTabs)).subscribe(e=>{this._tabs.reset(e.filter(i=>i._closestTabGroup===this||!i._closestTabGroup)),this._tabs.notifyOnChanges()})}ngOnDestroy(){this._tabs.destroy(),this._tabsSubscription.unsubscribe(),this._tabLabelSubscription.unsubscribe(),this._tabBodySubscription.unsubscribe()}realignInkBar(){this._tabHeader&&this._tabHeader._alignInkBarToSelectedTab()}updatePagination(){this._tabHeader&&this._tabHeader.updatePagination()}focusTab(e){let i=this._tabHeader;i&&(i.focusIndex=e)}_focusChanged(e){this._lastFocusedTabIndex=e,this.focusChange.emit(this._createChangeEvent(e))}_createChangeEvent(e){let i=new ib;return i.index=e,this._tabs&&this._tabs.length&&(i.tab=this._tabs.toArray()[e]),i}_subscribeToTabLabels(){this._tabLabelSubscription&&this._tabLabelSubscription.unsubscribe(),this._tabLabelSubscription=sn(...this._tabs.map(e=>e._stateChanges)).subscribe(()=>this._changeDetectorRef.markForCheck())}_clampTabIndex(e){return Math.min(this._tabs.length-1,Math.max(e||0,0))}_getTabLabelId(e,i){return e.id||`${this._groupId}-label-${i}`}_getTabContentId(e){return`${this._groupId}-content-${e}`}_setTabBodyWrapperHeight(e){if(!this.dynamicHeight||!this._tabBodyWrapperHeight){this._tabBodyWrapperHeight=e;return}let i=this._tabBodyWrapper.nativeElement;i.style.height=this._tabBodyWrapperHeight+"px",this._tabBodyWrapper.nativeElement.offsetHeight&&(i.style.height=e+"px")}_removeTabBodyWrapperHeight(){let e=this._tabBodyWrapper.nativeElement;this._tabBodyWrapperHeight=e.clientHeight,e.style.height="",this._ngZone.run(()=>this.animationDone.emit())}_handleClick(e,i,r){i.focusIndex=r,e.disabled||(this.selectedIndex=r)}_getTabIndex(e){let i=this._lastFocusedTabIndex??this.selectedIndex;return e===i?0:-1}_tabFocusChanged(e,i){e&&e!=="mouse"&&e!=="touch"&&(this._tabHeader.focusIndex=i)}_bodyCentered(e){e&&this._tabBodies?.forEach((i,r)=>i._setActiveClass(r===this._selectedIndex))}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0"||this.animationDuration==="0ms"}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=E({type:t,selectors:[["mat-tab-group"]],contentQueries:function(i,r,o){if(i&1&&Dt(o,Ur,5),i&2){let a;U(a=z())&&(r._allTabs=a)}},viewQuery:function(i,r){if(i&1&&et(DF,5)(xF,5)(nb,5),i&2){let o;U(o=z())&&(r._tabBodyWrapper=o.first),U(o=z())&&(r._tabHeader=o.first),U(o=z())&&(r._tabBodies=o)}},hostAttrs:[1,"mat-mdc-tab-group"],hostVars:11,hostBindings:function(i,r){i&2&&(re("mat-align-tabs",r.alignTabs),Ht("mat-"+(r.color||"primary")),Eo("--mat-tab-animation-duration",r.animationDuration),$("mat-mdc-tab-group-dynamic-height",r.dynamicHeight)("mat-mdc-tab-group-inverted-header",r.headerPosition==="below")("mat-mdc-tab-group-stretch-tabs",r.stretchTabs))},inputs:{color:"color",fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",oe],stretchTabs:[2,"mat-stretch-tabs","stretchTabs",oe],alignTabs:[0,"mat-align-tabs","alignTabs"],dynamicHeight:[2,"dynamicHeight","dynamicHeight",oe],selectedIndex:[2,"selectedIndex","selectedIndex",si],headerPosition:"headerPosition",animationDuration:"animationDuration",contentTabIndex:[2,"contentTabIndex","contentTabIndex",si],disablePagination:[2,"disablePagination","disablePagination",oe],disableRipple:[2,"disableRipple","disableRipple",oe],preserveContent:[2,"preserveContent","preserveContent",oe],backgroundColor:"backgroundColor",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"]},outputs:{selectedIndexChange:"selectedIndexChange",focusChange:"focusChange",animationDone:"animationDone",selectedTabChange:"selectedTabChange"},exportAs:["matTabGroup"],features:[ke([{provide:sx,useExisting:t}])],ngContentSelectors:rb,decls:9,vars:8,consts:[["tabHeader",""],["tabBodyWrapper",""],["tabNode",""],[3,"indexFocused","selectFocusedIndex","selectedIndex","disableRipple","disablePagination","aria-label","aria-labelledby"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"id","mdc-tab--active","class","disabled","fitInkBarToContent"],[1,"mat-mdc-tab-body-wrapper"],["role","tabpanel",3,"id","class","content","position","animationDuration","preserveContent"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"click","cdkFocusChange","id","disabled","fitInkBarToContent"],[1,"mdc-tab__ripple"],["mat-ripple","",1,"mat-mdc-tab-ripple",3,"matRippleTrigger","matRippleDisabled"],[1,"mdc-tab__content"],[1,"mdc-tab__text-label"],[3,"cdkPortalOutlet"],["role","tabpanel",3,"_onCentered","_onCentering","_beforeCentering","id","content","position","animationDuration","preserveContent"]],template:function(i,r){i&1&&(De(),_(0,"mat-tab-header",3,0),H("indexFocused",function(a){return r._focusChanged(a)})("selectFocusedIndex",function(a){return r.selectedIndex=a}),Do(2,SF,8,17,"div",4,ad),y(),_e(4,kF,1,0),_(5,"div",5,1),Do(7,TF,1,10,"mat-tab-body",6,ad),y()),i&2&&(se("selectedIndex",r.selectedIndex||0)("disableRipple",r.disableRipple)("disablePagination",r.disablePagination),od("aria-label",r.ariaLabel)("aria-labelledby",r.ariaLabelledby),C(2),xo(r._tabs),C(2),ye(r._isServer?4:-1),C(),$("_mat-animation-noopable",r._animationsDisabled()),C(2),xo(r._tabs))},dependencies:[BF,cx,yg,$s,Wi,nb],styles:[`.mdc-tab {
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
`],encapsulation:2})}return t})(),ib=class{index;tab};function HF(t,n){if(t&1&&(_(0,"div",10)(1,"mat-error"),Y(2),y()()),t&2){let e=me();C(2),At(e.errorMessage())}}function UF(t,n){if(t&1&&(_(0,"div",10)(1,"mat-error"),Y(2),y()()),t&2){let e=me();C(2),At(e.errorMessage())}}function zF(t,n){if(t&1&&(_(0,"div",14)(1,"p"),Y(2),y()()),t&2){let e=me();C(2),At(e.successMessage())}}var Vu=class t{email=xt.required();password=xt.required();name=xt.required();lastName=xt.required();errorMessage=xt.required();successMessage=xt.required();hide=V(!0);clickEvent(n){this.hide.set(!this.hide()),n.stopPropagation()}clearError(){this.errorMessage.set(""),this.successMessage.set("")}loginSubmitEvent=new R;submitLogin(){this.loginSubmitEvent.emit()}registerSubmitEvent=new R;submitRegister(){this.registerSubmitEvent.emit()}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=E({type:t,selectors:[["login-container"]],inputs:{email:[1,"email"],password:[1,"password"],name:[1,"name"],lastName:[1,"lastName"],errorMessage:[1,"errorMessage"],successMessage:[1,"successMessage"]},outputs:{email:"emailChange",password:"passwordChange",name:"nameChange",lastName:"lastNameChange",errorMessage:"errorMessageChange",successMessage:"successMessageChange",loginSubmitEvent:"loginSubmitEvent",registerSubmitEvent:"registerSubmitEvent"},decls:59,vars:17,consts:[[1,"login-container"],["id","logincard","appearance","outlined",1,"login-container-card"],["dynamicHeight","",3,"selectedIndexChange"],["label","Logga in"],[1,"login-container-header"],[1,"login-container-card-content"],[1,"login-container-fields"],["matInput","",3,"ngModelChange","ngModel"],["matInput","",3,"ngModelChange","ngModel","type"],["matIconButton","","matSuffix","",3,"click"],[1,"login-container-error"],[1,"login-container-buttons"],["matButton","elevated",1,"login-container-button",3,"click"],["label","Registrera anv\xE4ndare"],[1,"login-container-success"]],template:function(e,i){e&1&&(_(0,"div",0)(1,"mat-card",1)(2,"mat-tab-group",2),H("selectedIndexChange",function(){return i.clearError()}),_(3,"mat-tab",3)(4,"mat-card-header",4)(5,"mat-card-title"),Y(6,"V\xE4lkommen tillbaka till "),_(7,"b"),Y(8,"K\xEEndGuard"),y()()(),_(9,"mat-card-content",5)(10,"div",6)(11,"mat-form-field")(12,"mat-label"),Y(13,"E-post adress"),y(),_(14,"input",7),mt("ngModelChange",function(o){return He(i.email,o)||(i.email=o),o}),y()(),_(15,"mat-form-field")(16,"mat-label"),Y(17,"L\xF6senord"),y(),_(18,"input",8),mt("ngModelChange",function(o){return He(i.password,o)||(i.password=o),o}),y(),_(19,"button",9),H("click",function(o){return i.clickEvent(o)}),_(20,"mat-icon"),Y(21),y()()()(),_e(22,HF,3,1,"div",10),_(23,"div",11)(24,"button",12),H("click",function(){return i.submitLogin()}),Y(25," Logga in "),y()()()(),_(26,"mat-tab",13)(27,"mat-card-header",4)(28,"mat-card-title"),Y(29,"V\xE4lkommen till "),_(30,"b"),Y(31,"K\xEEndGuard"),y()()(),_(32,"mat-card-content",5)(33,"div",6)(34,"mat-form-field")(35,"mat-label"),Y(36,"F\xF6rnamn"),y(),_(37,"input",7),mt("ngModelChange",function(o){return He(i.name,o)||(i.name=o),o}),y()(),_(38,"mat-form-field")(39,"mat-label"),Y(40,"Efternamn"),y(),_(41,"input",7),mt("ngModelChange",function(o){return He(i.lastName,o)||(i.lastName=o),o}),y()()(),_(42,"div",6)(43,"mat-form-field")(44,"mat-label"),Y(45,"E-post adress"),y(),_(46,"input",7),mt("ngModelChange",function(o){return He(i.email,o)||(i.email=o),o}),y()(),_(47,"mat-form-field")(48,"mat-label"),Y(49,"L\xF6senord"),y(),_(50,"input",8),mt("ngModelChange",function(o){return He(i.password,o)||(i.password=o),o}),y(),_(51,"button",9),H("click",function(o){return i.clickEvent(o)}),_(52,"mat-icon"),Y(53),y()()()(),_e(54,UF,3,1,"div",10),_e(55,zF,3,1,"div",14),_(56,"div",11)(57,"button",12),H("click",function(){return i.submitRegister()}),Y(58," Registrera "),y()()()()()()()),e&2&&(C(14),ft("ngModel",i.email),C(4),ft("ngModel",i.password),se("type",i.hide()?"password":"text"),C(),re("aria-label","Hide password")("aria-pressed",i.hide()),C(2),At(i.hide()?"visibility_off":"visibility"),C(),ye(i.errorMessage()!==""?22:-1),C(15),ft("ngModel",i.name),C(4),ft("ngModel",i.lastName),C(5),ft("ngModel",i.email),C(4),ft("ngModel",i.password),se("type",i.hide()?"password":"text"),C(),re("aria-label","Hide password")("aria-pressed",i.hide()),C(2),At(i.hide()?"visibility_off":"visibility"),C(),ye(i.errorMessage()!==""?54:-1),C(),ye(i.successMessage()!==""?55:-1))},dependencies:[Pu,na,Nu,Ks,jr,zi,Lr,Pg,Lg,ju,ia,Jo,hu,Ng,_u,vu,Uo,zo,$o,S0,aa,Ur],styles:['[_nghost-%COMP%]{width:40%}.login-container[_ngcontent-%COMP%]{display:flex;flex:1;width:100%}.login-container-header[_ngcontent-%COMP%]{text-align:center;margin-bottom:1em}.login-container-card[_ngcontent-%COMP%]{width:100%}.login-container-card-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.login-container-fields[_ngcontent-%COMP%]{display:flex;width:100%;justify-content:space-between}.login-container-fields[_ngcontent-%COMP%]:after{content:""}.login-container-fields[_ngcontent-%COMP%]:before{content:""}.login-container-fields[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:33%}.login-container-buttons[_ngcontent-%COMP%]{display:flex;justify-content:center;width:100%}.login-container-buttons[_ngcontent-%COMP%]:after{content:""}.login-container-button[_ngcontent-%COMP%]:before{content:""}.login-container-error[_ngcontent-%COMP%]{margin-bottom:1em;text-align:center}.login-container-success[_ngcontent-%COMP%]{color:green;text-align:center;margin-bottom:1em}.login-container-button[_ngcontent-%COMP%]{width:auto;margin-left:1em;margin-right:1em}']})};var rn={apiUrl:"https://salad-dramatize-customary.ngrok-free.dev",wsUrl:"wss://salad-dramatize-customary.ngrok-free.dev"};var sa=class t{baseUrl=`${rn.apiUrl}/api/auth`;http=d(Jt);login(n,e){let i={email:n,password:e};return this.http.post(`${this.baseUrl}/login`,i).pipe(Oe(r=>{localStorage.setItem("token",r.token),localStorage.setItem("UserId",r.id.toString())}))}register(n,e,i){let r={name:n,email:e,password:i};return this.http.post(`${this.baseUrl}/register`,r)}async isAuthorized(){return await new Promise(i=>{this.http.get(`${this.baseUrl}/validate`,{}).subscribe({error:()=>i(!1),complete:()=>i(!0)})})}static \u0275fac=function(e){return new(e||t)};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})};var Hu=class t{email=V("");password=V("");name=V("");lastName=V("");errorMessage=V("");successMessage=V("");router=d(Rt);authService=d(sa);onLoginSubmit(){console.log(this.email(),this.password()),this.authService.login(this.email(),this.password()).subscribe({error:n=>{this.errorMessage.set(n.error.error)},next:()=>{this.router.navigate(["/app"])}})}onRegisterSubmit(){let n=this.name()+" "+this.lastName(),e=this.email().trim(),i=this.password();this.authService.register(n,e,i).subscribe({error:r=>{this.successMessage.set(""),this.errorMessage.set(r.error.error)},next:r=>{this.errorMessage.set(""),this.successMessage.set(r.message)}})}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=E({type:t,selectors:[["login-page"]],decls:3,vars:6,consts:[["width","auto","height","150px","alt","Kindguard logo","src","Kindguardlogo.png"],[1,"login-page-container",3,"emailChange","passwordChange","nameChange","lastNameChange","errorMessageChange","successMessageChange","loginSubmitEvent","registerSubmitEvent","email","password","name","lastName","errorMessage","successMessage"]],template:function(e,i){e&1&&(_(0,"div"),fe(1,"img",0),y(),_(2,"login-container",1),mt("emailChange",function(o){return He(i.email,o)||(i.email=o),o})("passwordChange",function(o){return He(i.password,o)||(i.password=o),o})("nameChange",function(o){return He(i.name,o)||(i.name=o),o})("lastNameChange",function(o){return He(i.lastName,o)||(i.lastName=o),o})("errorMessageChange",function(o){return He(i.errorMessage,o)||(i.errorMessage=o),o})("successMessageChange",function(o){return He(i.successMessage,o)||(i.successMessage=o),o}),H("loginSubmitEvent",function(){return i.onLoginSubmit()})("registerSubmitEvent",function(){return i.onRegisterSubmit()}),y()),e&2&&(C(2),ft("email",i.email)("password",i.password)("name",i.name)("lastName",i.lastName)("errorMessage",i.errorMessage)("successMessage",i.successMessage))},dependencies:[Vu],styles:["[_nghost-%COMP%]{display:flex;width:100%;height:80%;flex-direction:column;justify-content:center;align-items:center;gap:100px}"]})};var ob=(()=>{class t{get vertical(){return this._vertical}set vertical(e){this._vertical=It(e)}_vertical=!1;get inset(){return this._inset}set inset(e){this._inset=It(e)}_inset=!1;static \u0275fac=function(i){return new(i||t)};static \u0275cmp=E({type:t,selectors:[["mat-divider"]],hostAttrs:["role","separator",1,"mat-divider"],hostVars:7,hostBindings:function(i,r){i&2&&(re("aria-orientation",r.vertical?"vertical":"horizontal"),$("mat-divider-vertical",r.vertical)("mat-divider-horizontal",!r.vertical)("mat-divider-inset",r.inset))},inputs:{vertical:"vertical",inset:"inset"},decls:0,vars:0,template:function(i,r){},styles:[`.mat-divider {
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
`],encapsulation:2,changeDetection:0})}return t})(),ca=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=j({type:t});static \u0275inj=P({imports:[we]})}return t})();var $F=["mat-internal-form-field",""],WF=["*"],lx=(()=>{class t{labelPosition="after";static \u0275fac=function(i){return new(i||t)};static \u0275cmp=E({type:t,selectors:[["div","mat-internal-form-field",""]],hostAttrs:[1,"mdc-form-field","mat-internal-form-field"],hostVars:2,hostBindings:function(i,r){i&2&&$("mdc-form-field--align-end",r.labelPosition==="before")},inputs:{labelPosition:"labelPosition"},attrs:$F,ngContentSelectors:WF,decls:1,vars:0,template:function(i,r){i&1&&(De(),Q(0))},styles:[`.mat-internal-form-field {
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
`],encapsulation:2,changeDetection:0})}return t})();var GF=["input"],qF=["label"],ZF=["*"],ab={color:"accent",clickAction:"check-indeterminate",disabledInteractive:!1},QF=new g("mat-checkbox-default-options",{providedIn:"root",factory:()=>ab}),gt=(function(t){return t[t.Init=0]="Init",t[t.Checked=1]="Checked",t[t.Unchecked=2]="Unchecked",t[t.Indeterminate=3]="Indeterminate",t})(gt||{}),sb=class{source;checked},cb=(()=>{class t{_elementRef=d(O);_changeDetectorRef=d(qe);_ngZone=d(k);_animationsDisabled=Ye();_options=d(QF,{optional:!0});focus(){this._inputElement.nativeElement.focus()}_createChangeEvent(e){let i=new sb;return i.source=this,i.checked=e,i}_getAnimationTargetElement(){return this._inputElement?.nativeElement}_animationClasses={uncheckedToChecked:"mdc-checkbox--anim-unchecked-checked",uncheckedToIndeterminate:"mdc-checkbox--anim-unchecked-indeterminate",checkedToUnchecked:"mdc-checkbox--anim-checked-unchecked",checkedToIndeterminate:"mdc-checkbox--anim-checked-indeterminate",indeterminateToChecked:"mdc-checkbox--anim-indeterminate-checked",indeterminateToUnchecked:"mdc-checkbox--anim-indeterminate-unchecked"};ariaLabel="";ariaLabelledby=null;ariaDescribedby;ariaExpanded;ariaControls;ariaOwns;_uniqueId;id;get inputId(){return`${this.id||this._uniqueId}-input`}required=!1;labelPosition="after";name=null;change=new R;indeterminateChange=new R;value;disableRipple=!1;_inputElement;_labelElement;tabIndex;color;disabledInteractive;_onTouched=()=>{};_currentAnimationClass="";_currentCheckState=gt.Init;_controlValueAccessorChangeFn=()=>{};_validatorChangeFn=()=>{};constructor(){d(tt).load(Ui);let e=d(new Li("tabindex"),{optional:!0});this._options=this._options||ab,this.color=this._options.color||ab.color,this.tabIndex=e==null?0:parseInt(e)||0,this.id=this._uniqueId=d(Qe).getId("mat-mdc-checkbox-"),this.disabledInteractive=this._options?.disabledInteractive??!1}ngOnChanges(e){e.required&&this._validatorChangeFn()}ngAfterViewInit(){this._syncIndeterminate(this.indeterminate)}get checked(){return this._checked}set checked(e){e!=this.checked&&(this._checked=e,this._changeDetectorRef.markForCheck())}_checked=!1;get disabled(){return this._disabled}set disabled(e){e!==this.disabled&&(this._disabled=e,this._changeDetectorRef.markForCheck())}_disabled=!1;get indeterminate(){return this._indeterminate()}set indeterminate(e){let i=e!=this._indeterminate();this._indeterminate.set(e),i&&(e?this._transitionCheckState(gt.Indeterminate):this._transitionCheckState(this.checked?gt.Checked:gt.Unchecked),this.indeterminateChange.emit(e)),this._syncIndeterminate(e)}_indeterminate=V(!1);_isRippleDisabled(){return this.disableRipple||this.disabled}_onLabelTextChange(){this._changeDetectorRef.detectChanges()}writeValue(e){this.checked=!!e}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorChangeFn=e}_transitionCheckState(e){let i=this._currentCheckState,r=this._getAnimationTargetElement();if(!(i===e||!r)&&(this._currentAnimationClass&&r.classList.remove(this._currentAnimationClass),this._currentAnimationClass=this._getAnimationClassForCheckStateTransition(i,e),this._currentCheckState=e,this._currentAnimationClass.length>0)){r.classList.add(this._currentAnimationClass);let o=this._currentAnimationClass;this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{r.classList.remove(o)},1e3)})}}_emitChangeEvent(){this._controlValueAccessorChangeFn(this.checked),this.change.emit(this._createChangeEvent(this.checked)),this._inputElement&&(this._inputElement.nativeElement.checked=this.checked)}toggle(){this.checked=!this.checked,this._controlValueAccessorChangeFn(this.checked)}_handleInputClick(){let e=this._options?.clickAction;!this.disabled&&e!=="noop"?(this.indeterminate&&e!=="check"&&Promise.resolve().then(()=>{this._indeterminate.set(!1),this.indeterminateChange.emit(!1)}),this._checked=!this._checked,this._transitionCheckState(this._checked?gt.Checked:gt.Unchecked),this._emitChangeEvent()):(this.disabled&&this.disabledInteractive||!this.disabled&&e==="noop")&&(this._inputElement.nativeElement.checked=this.checked,this._inputElement.nativeElement.indeterminate=this.indeterminate)}_onInteractionEvent(e){e.stopPropagation()}_onBlur(){Promise.resolve().then(()=>{this._onTouched(),this._changeDetectorRef.markForCheck()})}_getAnimationClassForCheckStateTransition(e,i){if(this._animationsDisabled)return"";switch(e){case gt.Init:if(i===gt.Checked)return this._animationClasses.uncheckedToChecked;if(i==gt.Indeterminate)return this._checked?this._animationClasses.checkedToIndeterminate:this._animationClasses.uncheckedToIndeterminate;break;case gt.Unchecked:return i===gt.Checked?this._animationClasses.uncheckedToChecked:this._animationClasses.uncheckedToIndeterminate;case gt.Checked:return i===gt.Unchecked?this._animationClasses.checkedToUnchecked:this._animationClasses.checkedToIndeterminate;case gt.Indeterminate:return i===gt.Checked?this._animationClasses.indeterminateToChecked:this._animationClasses.indeterminateToUnchecked}return""}_syncIndeterminate(e){let i=this._inputElement;i&&(i.nativeElement.indeterminate=e)}_onInputClick(){this._handleInputClick()}_onTouchTargetClick(){this._handleInputClick(),this.disabled||this._inputElement.nativeElement.focus()}_preventBubblingFromLabel(e){e.target&&this._labelElement.nativeElement.contains(e.target)&&e.stopPropagation()}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=E({type:t,selectors:[["mat-checkbox"]],viewQuery:function(i,r){if(i&1&&et(GF,5)(qF,5),i&2){let o;U(o=z())&&(r._inputElement=o.first),U(o=z())&&(r._labelElement=o.first)}},hostAttrs:[1,"mat-mdc-checkbox"],hostVars:16,hostBindings:function(i,r){i&2&&(gn("id",r.id),re("tabindex",null)("aria-label",null)("aria-labelledby",null),Ht(r.color?"mat-"+r.color:"mat-accent"),$("_mat-animation-noopable",r._animationsDisabled)("mdc-checkbox--disabled",r.disabled)("mat-mdc-checkbox-disabled",r.disabled)("mat-mdc-checkbox-checked",r.checked)("mat-mdc-checkbox-disabled-interactive",r.disabledInteractive))},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],ariaExpanded:[2,"aria-expanded","ariaExpanded",oe],ariaControls:[0,"aria-controls","ariaControls"],ariaOwns:[0,"aria-owns","ariaOwns"],id:"id",required:[2,"required","required",oe],labelPosition:"labelPosition",name:"name",value:"value",disableRipple:[2,"disableRipple","disableRipple",oe],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?void 0:si(e)],color:"color",disabledInteractive:[2,"disabledInteractive","disabledInteractive",oe],checked:[2,"checked","checked",oe],disabled:[2,"disabled","disabled",oe],indeterminate:[2,"indeterminate","indeterminate",oe]},outputs:{change:"change",indeterminateChange:"indeterminateChange"},exportAs:["matCheckbox"],features:[ke([{provide:Ru,useExisting:Lt(()=>t),multi:!0},{provide:Ys,useExisting:t,multi:!0}]),Ne],ngContentSelectors:ZF,decls:15,vars:23,consts:[["checkbox",""],["input",""],["label",""],["mat-internal-form-field","",3,"click","labelPosition"],[1,"mdc-checkbox"],["aria-hidden","true",1,"mat-mdc-checkbox-touch-target",3,"click"],["type","checkbox",1,"mdc-checkbox__native-control",3,"blur","click","change","checked","indeterminate","disabled","id","required","tabIndex"],["aria-hidden","true",1,"mdc-checkbox__ripple"],["aria-hidden","true",1,"mdc-checkbox__background"],["focusable","false","viewBox","0 0 24 24",1,"mdc-checkbox__checkmark"],["fill","none","d","M1.73,12.91 8.1,19.28 22.79,4.59",1,"mdc-checkbox__checkmark-path"],[1,"mdc-checkbox__mixedmark"],["mat-ripple","","aria-hidden","true",1,"mat-mdc-checkbox-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-label",3,"for"]],template:function(i,r){if(i&1&&(De(),_(0,"div",3),H("click",function(a){return r._preventBubblingFromLabel(a)}),_(1,"div",4,0)(3,"div",5),H("click",function(){return r._onTouchTargetClick()}),y(),_(4,"input",6,1),H("blur",function(){return r._onBlur()})("click",function(){return r._onInputClick()})("change",function(a){return r._onInteractionEvent(a)}),y(),fe(6,"div",7),_(7,"div",8),Ga(),_(8,"svg",9),fe(9,"path",10),y(),qa(),fe(10,"div",11),y(),fe(11,"div",12),y(),_(12,"label",13,2),Q(14),y()()),i&2){let o=Kt(2);se("labelPosition",r.labelPosition),C(4),$("mdc-checkbox--selected",r.checked),se("checked",r.checked)("indeterminate",r.indeterminate)("disabled",r.disabled&&!r.disabledInteractive)("id",r.inputId)("required",r.required)("tabIndex",r.disabled&&!r.disabledInteractive?-1:r.tabIndex),re("aria-label",r.ariaLabel||null)("aria-labelledby",r.ariaLabelledby)("aria-describedby",r.ariaDescribedby)("aria-checked",r.indeterminate?"mixed":null)("aria-controls",r.ariaControls)("aria-disabled",r.disabled&&r.disabledInteractive?!0:null)("aria-expanded",r.ariaExpanded)("aria-owns",r.ariaOwns)("name",r.name)("value",r.value),C(7),se("matRippleTrigger",o)("matRippleDisabled",r.disableRipple||r.disabled)("matRippleCentered",!0),C(),se("for",r.inputId)}},dependencies:[$s,lx],styles:[`.mdc-checkbox {
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
`],encapsulation:2,changeDetection:0})}return t})(),dx=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=j({type:t});static \u0275inj=P({imports:[cb,we]})}return t})();var la=class t{url=`${rn.apiUrl}/api/attendance`;attendanceSignals=new Map;http=d(Jt);getSignal(n,e){let i=`${n}_${e}`;return this.attendanceSignals.has(i)||this.attendanceSignals.set(i,V(null)),this.attendanceSignals.get(i)}setAttendance(n,e,i){let r={childId:n,date:e,present:i};return this.http.put(this.url,r)}static \u0275fac=function(e){return new(e||t)};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})};var ux=uu();function fa(t){return new Uu(t.get(Gi),t.get(L))}var Uu=class{_viewportRuler;_previousHTMLStyles={top:"",left:""};_previousScrollPosition;_isEnabled=!1;_document;constructor(n,e){this._viewportRuler=n,this._document=e}attach(){}enable(){if(this._canBeEnabled()){let n=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=n.style.left||"",this._previousHTMLStyles.top=n.style.top||"",n.style.left=Le(-this._previousScrollPosition.left),n.style.top=Le(-this._previousScrollPosition.top),n.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){let n=this._document.documentElement,e=this._document.body,i=n.style,r=e.style,o=i.scrollBehavior||"",a=r.scrollBehavior||"";this._isEnabled=!1,i.left=this._previousHTMLStyles.left,i.top=this._previousHTMLStyles.top,n.classList.remove("cdk-global-scrollblock"),ux&&(i.scrollBehavior=r.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),ux&&(i.scrollBehavior=o,r.scrollBehavior=a)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;let e=this._document.documentElement,i=this._viewportRuler.getViewportSize();return e.scrollHeight>i.height||e.scrollWidth>i.width}};function vx(t,n){return new zu(t.get(ec),t.get(k),t.get(Gi),n)}var zu=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(n,e,i,r){this._scrollDispatcher=n,this._ngZone=e,this._viewportRuler=i,this._config=r}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(this._scrollSubscription)return;let n=this._scrollDispatcher.scrolled(0).pipe(le(e=>!e||!this._overlayRef.overlayElement.contains(e.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=n.subscribe(()=>{let e=this._viewportRuler.getViewportScrollPosition().top;Math.abs(e-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=n.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var tc=class{enable(){}disable(){}attach(){}};function lb(t,n){return n.some(e=>{let i=t.bottom<e.top,r=t.top>e.bottom,o=t.right<e.left,a=t.left>e.right;return i||r||o||a})}function fx(t,n){return n.some(e=>{let i=t.top<e.top,r=t.bottom>e.bottom,o=t.left<e.left,a=t.right>e.right;return i||r||o||a})}function _x(t,n){return new $u(t.get(ec),t.get(Gi),t.get(k),n)}var $u=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(n,e,i,r){this._scrollDispatcher=n,this._viewportRuler=e,this._ngZone=i,this._config=r}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(!this._scrollSubscription){let n=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(n).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:i,height:r}=this._viewportRuler.getViewportSize();lb(e,[{width:i,height:r,bottom:r,right:i,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},yx=(()=>{class t{_injector=d(G);constructor(){}noop=()=>new tc;close=e=>vx(this._injector,e);block=()=>fa(this._injector);reposition=e=>_x(this._injector,e);static \u0275fac=function(i){return new(i||t)};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),da=class{positionStrategy;scrollStrategy=new tc;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(n){if(n){let e=Object.keys(n);for(let i of e)n[i]!==void 0&&(this[i]=n[i])}}};var Wu=class{connectionPair;scrollableViewProperties;constructor(n,e){this.connectionPair=n,this.scrollableViewProperties=e}};var wx=(()=>{class t{_attachedOverlays=[];_document=d(L);_isAttached=!1;constructor(){}ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let i=this._attachedOverlays.indexOf(e);i>-1&&this._attachedOverlays.splice(i,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(e,i,r){return r.observers.length<1?!1:e.eventPredicate?e.eventPredicate(i):!0}static \u0275fac=function(i){return new(i||t)};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Cx=(()=>{class t extends wx{_ngZone=d(k);_renderer=d(Ve).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=e=>{let i=this._attachedOverlays;for(let r=i.length-1;r>-1;r--){let o=i[r];if(this.canReceiveEvent(o,e,o._keydownEvents)){this._ngZone.run(()=>o._keydownEvents.next(e));break}}};static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ae(t)))(r||t)}})();static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Dx=(()=>{class t extends wx{_platform=d(ce);_ngZone=d(k);_renderer=d(Ve).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let i=this._document.body,r={capture:!0},o=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[o.listen(i,"pointerdown",this._pointerDownListener,r),o.listen(i,"click",this._clickListener,r),o.listen(i,"auxclick",this._clickListener,r),o.listen(i,"contextmenu",this._clickListener,r)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=i.style.cursor,i.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=e=>{this._pointerDownEventTarget=Ot(e)};_clickListener=e=>{let i=Ot(e),r=e.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:i;this._pointerDownEventTarget=null;let o=this._attachedOverlays.slice();for(let a=o.length-1;a>-1;a--){let s=o[a],c=s._outsidePointerEvents;if(!(!s.hasAttached()||!this.canReceiveEvent(s,e,c))){if(mx(s.overlayElement,i)||mx(s.overlayElement,r))break;this._ngZone?this._ngZone.run(()=>c.next(e)):c.next(e)}}};static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ae(t)))(r||t)}})();static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function mx(t,n){let e=typeof ShadowRoot<"u"&&ShadowRoot,i=n;for(;i;){if(i===t)return!0;i=e&&i instanceof ShadowRoot?i.host:i.parentNode}return!1}var xx=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=E({type:t,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(i,r){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
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
`],encapsulation:2,changeDetection:0})}return t})(),Zu=(()=>{class t{_platform=d(ce);_containerElement;_document=d(L);_styleLoader=d(tt);constructor(){}ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e="cdk-overlay-container";if(this._platform.isBrowser||Ig()){let r=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let o=0;o<r.length;o++)r[o].remove()}let i=this._document.createElement("div");i.classList.add(e),Ig()?i.setAttribute("platform","test"):this._platform.isBrowser||i.setAttribute("platform","server"),this._document.body.appendChild(i),this._containerElement=i}_loadStyles(){this._styleLoader.load(xx)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),db=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(n,e,i,r){this._renderer=e,this._ngZone=i,this.element=n.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=e.listen(this.element,"click",r)}detach(){this._ngZone.runOutsideAngular(()=>{let n=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(n,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),n.style.pointerEvents="none",n.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function ub(t){return t&&t.nodeType===1}var ua=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new x;_attachments=new x;_detachments=new x;_positionStrategy;_scrollStrategy;_locationChanges=ae.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new x;_outsidePointerEvents=new x;_afterNextRenderRef;constructor(n,e,i,r,o,a,s,c,l,u=!1,f,m){this._portalOutlet=n,this._host=e,this._pane=i,this._config=r,this._ngZone=o,this._keyboardDispatcher=a,this._document=s,this._location=c,this._outsideClickDispatcher=l,this._animationsDisabled=u,this._injector=f,this._renderer=m,r.scrollStrategy&&(this._scrollStrategy=r.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=r.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(n){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(n);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=at(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof e?.onDestroy=="function"&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let n=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),n}dispose(){if(this._disposed)return;let n=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,n&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(n){n!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=n,this.hasAttached()&&(n.attach(this),this.updatePosition()))}updateSize(n){this._config=v(v({},this._config),n),this._updateElementSize()}setDirection(n){this._config=W(v({},this._config),{direction:n}),this._updateElementDirection()}addPanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!0)}removePanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!1)}getDirection(){let n=this._config.direction;return n?typeof n=="string"?n:n.value:"ltr"}updateScrollStrategy(n){n!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=n,this.hasAttached()&&(n.attach(this),n.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let n=this._pane.style;n.width=Le(this._config.width),n.height=Le(this._config.height),n.minWidth=Le(this._config.minWidth),n.minHeight=Le(this._config.minHeight),n.maxWidth=Le(this._config.maxWidth),n.maxHeight=Le(this._config.maxHeight)}_togglePointerEvents(n){this._pane.style.pointerEvents=n?"":"none"}_attachHost(){if(!this._host.parentElement){let n=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;ub(n)?n.after(this._host):n?.type==="parent"?n.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let n="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new db(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(n))}):this._backdropRef.element.classList.add(n)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(n,e,i){let r=Zo(e||[]).filter(o=>!!o);r.length&&(i?n.classList.add(...r):n.classList.remove(...r))}_detachContentWhenEmpty(){let n=!1;try{this._detachContentAfterRenderRef=at(()=>{n=!0,this._detachContent()},{injector:this._injector})}catch(e){if(n)throw e;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let n=this._scrollStrategy;n?.disable(),n?.detach?.()}},hx="cdk-overlay-connected-position-bounding-box",KF=/([A-Za-z%]+)$/;function Ex(t,n){return new Gu(n,t.get(Gi),t.get(L),t.get(ce),t.get(Zu))}var Gu=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new x;_resizeSubscription=ae.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(n,e,i,r,o){this._viewportRuler=e,this._document=i,this._platform=r,this._overlayContainer=o,this.setOrigin(n)}attach(n){this._overlayRef&&this._overlayRef,this._validatePositions(),n.hostElement.classList.add(hx),this._overlayRef=n,this._boundingBox=n.hostElement,this._pane=n.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let n=this._originRect,e=this._overlayRect,i=this._viewportRect,r=this._containerRect,o=[],a;for(let s of this._preferredPositions){let c=this._getOriginPoint(n,r,s),l=this._getOverlayPoint(c,e,s),u=this._getOverlayFit(l,e,i,s);if(u.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(s,c);return}if(this._canFitWithFlexibleDimensions(u,l,i)){o.push({position:s,origin:c,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(c,s)});continue}(!a||a.overlayFit.visibleArea<u.visibleArea)&&(a={overlayFit:u,overlayPoint:l,originPoint:c,position:s,overlayRect:e})}if(o.length){let s=null,c=-1;for(let l of o){let u=l.boundingBoxRect.width*l.boundingBoxRect.height*(l.position.weight||1);u>c&&(c=u,s=l)}this._isPushed=!1,this._applyPosition(s.position,s.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(a.position,a.originPoint);return}this._applyPosition(a.position,a.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&zr(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(hx),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let n=this._lastPosition;n?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(n,this._getOriginPoint(this._originRect,this._containerRect,n))):this.apply()}withScrollableContainers(n){return this._scrollables=n,this}withPositions(n){return this._preferredPositions=n,n.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(n){return this._viewportMargin=n,this}withFlexibleDimensions(n=!0){return this._hasFlexibleDimensions=n,this}withGrowAfterOpen(n=!0){return this._growAfterOpen=n,this}withPush(n=!0){return this._canPush=n,this}withLockedPosition(n=!0){return this._positionLocked=n,this}setOrigin(n){return this._origin=n,this}withDefaultOffsetX(n){return this._offsetX=n,this}withDefaultOffsetY(n){return this._offsetY=n,this}withTransformOriginOn(n){return this._transformOriginSelector=n,this}withPopoverLocation(n){return this._popoverLocation=n,this}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof O?this._origin.nativeElement:ub(this._origin)?this._origin:null}_getOriginPoint(n,e,i){let r;if(i.originX=="center")r=n.left+n.width/2;else{let a=this._isRtl()?n.right:n.left,s=this._isRtl()?n.left:n.right;r=i.originX=="start"?a:s}e.left<0&&(r-=e.left);let o;return i.originY=="center"?o=n.top+n.height/2:o=i.originY=="top"?n.top:n.bottom,e.top<0&&(o-=e.top),{x:r,y:o}}_getOverlayPoint(n,e,i){let r;i.overlayX=="center"?r=-e.width/2:i.overlayX==="start"?r=this._isRtl()?-e.width:0:r=this._isRtl()?0:-e.width;let o;return i.overlayY=="center"?o=-e.height/2:o=i.overlayY=="top"?0:-e.height,{x:n.x+r,y:n.y+o}}_getOverlayFit(n,e,i,r){let o=gx(e),{x:a,y:s}=n,c=this._getOffset(r,"x"),l=this._getOffset(r,"y");c&&(a+=c),l&&(s+=l);let u=0-a,f=a+o.width-i.width,m=0-s,h=s+o.height-i.height,b=this._subtractOverflows(o.width,u,f),w=this._subtractOverflows(o.height,m,h),I=b*w;return{visibleArea:I,isCompletelyWithinViewport:o.width*o.height===I,fitsInViewportVertically:w===o.height,fitsInViewportHorizontally:b==o.width}}_canFitWithFlexibleDimensions(n,e,i){if(this._hasFlexibleDimensions){let r=i.bottom-e.y,o=i.right-e.x,a=px(this._overlayRef.getConfig().minHeight),s=px(this._overlayRef.getConfig().minWidth),c=n.fitsInViewportVertically||a!=null&&a<=r,l=n.fitsInViewportHorizontally||s!=null&&s<=o;return c&&l}return!1}_pushOverlayOnScreen(n,e,i){if(this._previousPushAmount&&this._positionLocked)return{x:n.x+this._previousPushAmount.x,y:n.y+this._previousPushAmount.y};let r=gx(e),o=this._viewportRect,a=Math.max(n.x+r.width-o.width,0),s=Math.max(n.y+r.height-o.height,0),c=Math.max(o.top-i.top-n.y,0),l=Math.max(o.left-i.left-n.x,0),u=0,f=0;return r.width<=o.width?u=l||-a:u=n.x<this._getViewportMarginStart()?o.left-i.left-n.x:0,r.height<=o.height?f=c||-s:f=n.y<this._getViewportMarginTop()?o.top-i.top-n.y:0,this._previousPushAmount={x:u,y:f},{x:n.x+u,y:n.y+f}}_applyPosition(n,e){if(this._setTransformOrigin(n),this._setOverlayElementStyles(e,n),this._setBoundingBoxStyles(e,n),n.panelClass&&this._addPanelClasses(n.panelClass),this._positionChanges.observers.length){let i=this._getScrollVisibility();if(n!==this._lastPosition||!this._lastScrollVisibility||!XF(this._lastScrollVisibility,i)){let r=new Wu(n,i);this._positionChanges.next(r)}this._lastScrollVisibility=i}this._lastPosition=n,this._isInitialRender=!1}_setTransformOrigin(n){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),i,r=n.overlayY;n.overlayX==="center"?i="center":this._isRtl()?i=n.overlayX==="start"?"right":"left":i=n.overlayX==="start"?"left":"right";for(let o=0;o<e.length;o++)e[o].style.transformOrigin=`${i} ${r}`}_calculateBoundingBoxRect(n,e){let i=this._viewportRect,r=this._isRtl(),o,a,s;if(e.overlayY==="top")a=n.y,o=i.height-a+this._getViewportMarginBottom();else if(e.overlayY==="bottom")s=i.height-n.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),o=i.height-s+this._getViewportMarginTop();else{let h=Math.min(i.bottom-n.y+i.top,n.y),b=this._lastBoundingBoxSize.height;o=h*2,a=n.y-h,o>b&&!this._isInitialRender&&!this._growAfterOpen&&(a=n.y-b/2)}let c=e.overlayX==="start"&&!r||e.overlayX==="end"&&r,l=e.overlayX==="end"&&!r||e.overlayX==="start"&&r,u,f,m;if(l)m=i.width-n.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),u=n.x-this._getViewportMarginStart();else if(c)f=n.x,u=i.right-n.x-this._getViewportMarginEnd();else{let h=Math.min(i.right-n.x+i.left,n.x),b=this._lastBoundingBoxSize.width;u=h*2,f=n.x-h,u>b&&!this._isInitialRender&&!this._growAfterOpen&&(f=n.x-b/2)}return{top:a,left:f,bottom:s,right:m,width:u,height:o}}_setBoundingBoxStyles(n,e){let i=this._calculateBoundingBoxRect(n,e);!this._isInitialRender&&!this._growAfterOpen&&(i.height=Math.min(i.height,this._lastBoundingBoxSize.height),i.width=Math.min(i.width,this._lastBoundingBoxSize.width));let r={};if(this._hasExactPosition())r.top=r.left="0",r.bottom=r.right="auto",r.maxHeight=r.maxWidth="",r.width=r.height="100%";else{let o=this._overlayRef.getConfig().maxHeight,a=this._overlayRef.getConfig().maxWidth;r.width=Le(i.width),r.height=Le(i.height),r.top=Le(i.top)||"auto",r.bottom=Le(i.bottom)||"auto",r.left=Le(i.left)||"auto",r.right=Le(i.right)||"auto",e.overlayX==="center"?r.alignItems="center":r.alignItems=e.overlayX==="end"?"flex-end":"flex-start",e.overlayY==="center"?r.justifyContent="center":r.justifyContent=e.overlayY==="bottom"?"flex-end":"flex-start",o&&(r.maxHeight=Le(o)),a&&(r.maxWidth=Le(a))}this._lastBoundingBoxSize=i,zr(this._boundingBox.style,r)}_resetBoundingBoxStyles(){zr(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){zr(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(n,e){let i={},r=this._hasExactPosition(),o=this._hasFlexibleDimensions,a=this._overlayRef.getConfig();if(r){let u=this._viewportRuler.getViewportScrollPosition();zr(i,this._getExactOverlayY(e,n,u)),zr(i,this._getExactOverlayX(e,n,u))}else i.position="static";let s="",c=this._getOffset(e,"x"),l=this._getOffset(e,"y");c&&(s+=`translateX(${c}px) `),l&&(s+=`translateY(${l}px)`),i.transform=s.trim(),a.maxHeight&&(r?i.maxHeight=Le(a.maxHeight):o&&(i.maxHeight="")),a.maxWidth&&(r?i.maxWidth=Le(a.maxWidth):o&&(i.maxWidth="")),zr(this._pane.style,i)}_getExactOverlayY(n,e,i){let r={top:"",bottom:""},o=this._getOverlayPoint(e,this._overlayRect,n);if(this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,i)),n.overlayY==="bottom"){let a=this._document.documentElement.clientHeight;r.bottom=`${a-(o.y+this._overlayRect.height)}px`}else r.top=Le(o.y);return r}_getExactOverlayX(n,e,i){let r={left:"",right:""},o=this._getOverlayPoint(e,this._overlayRect,n);this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,i));let a;if(this._isRtl()?a=n.overlayX==="end"?"left":"right":a=n.overlayX==="end"?"right":"left",a==="right"){let s=this._document.documentElement.clientWidth;r.right=`${s-(o.x+this._overlayRect.width)}px`}else r.left=Le(o.x);return r}_getScrollVisibility(){let n=this._getOriginRect(),e=this._pane.getBoundingClientRect(),i=this._scrollables.map(r=>r.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:fx(n,i),isOriginOutsideView:lb(n,i),isOverlayClipped:fx(e,i),isOverlayOutsideView:lb(e,i)}}_subtractOverflows(n,...e){return e.reduce((i,r)=>i-Math.max(r,0),n)}_getNarrowedViewportRect(){let n=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,i=this._viewportRuler.getViewportScrollPosition();return{top:i.top+this._getViewportMarginTop(),left:i.left+this._getViewportMarginStart(),right:i.left+n-this._getViewportMarginEnd(),bottom:i.top+e-this._getViewportMarginBottom(),width:n-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:e-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(n,e){return e==="x"?n.offsetX==null?this._offsetX:n.offsetX:n.offsetY==null?this._offsetY:n.offsetY}_validatePositions(){}_addPanelClasses(n){this._pane&&Zo(n).forEach(e=>{e!==""&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(n=>{this._pane.classList.remove(n)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let n=this._origin;if(n instanceof O)return n.nativeElement.getBoundingClientRect();if(n instanceof Element)return n.getBoundingClientRect();let e=n.width||0,i=n.height||0;return{top:n.y,bottom:n.y+i,left:n.x,right:n.x+e,height:i,width:e}}_getContainerRect(){let n=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",e=this._overlayContainer.getContainerElement();n&&(e.style.display="block");let i=e.getBoundingClientRect();return n&&(e.style.display=""),i}};function zr(t,n){for(let e in n)n.hasOwnProperty(e)&&(t[e]=n[e]);return t}function px(t){if(typeof t!="number"&&t!=null){let[n,e]=t.split(KF);return!e||e==="px"?parseFloat(n):null}return t||null}function gx(t){return{top:Math.floor(t.top),right:Math.floor(t.right),bottom:Math.floor(t.bottom),left:Math.floor(t.left),width:Math.floor(t.width),height:Math.floor(t.height)}}function XF(t,n){return t===n?!0:t.isOriginClipped===n.isOriginClipped&&t.isOriginOutsideView===n.isOriginOutsideView&&t.isOverlayClipped===n.isOverlayClipped&&t.isOverlayOutsideView===n.isOverlayOutsideView}var bx="cdk-global-overlay-wrapper";function ma(t){return new qu}var qu=class{_overlayRef;_cssPosition="static";_topOffset="";_bottomOffset="";_alignItems="";_xPosition="";_xOffset="";_width="";_height="";_isDisposed=!1;attach(n){let e=n.getConfig();this._overlayRef=n,this._width&&!e.width&&n.updateSize({width:this._width}),this._height&&!e.height&&n.updateSize({height:this._height}),n.hostElement.classList.add(bx),this._isDisposed=!1}top(n=""){return this._bottomOffset="",this._topOffset=n,this._alignItems="flex-start",this}left(n=""){return this._xOffset=n,this._xPosition="left",this}bottom(n=""){return this._topOffset="",this._bottomOffset=n,this._alignItems="flex-end",this}right(n=""){return this._xOffset=n,this._xPosition="right",this}start(n=""){return this._xOffset=n,this._xPosition="start",this}end(n=""){return this._xOffset=n,this._xPosition="end",this}width(n=""){return this._overlayRef?this._overlayRef.updateSize({width:n}):this._width=n,this}height(n=""){return this._overlayRef?this._overlayRef.updateSize({height:n}):this._height=n,this}centerHorizontally(n=""){return this.left(n),this._xPosition="center",this}centerVertically(n=""){return this.top(n),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let n=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,i=this._overlayRef.getConfig(),{width:r,height:o,maxWidth:a,maxHeight:s}=i,c=(r==="100%"||r==="100vw")&&(!a||a==="100%"||a==="100vw"),l=(o==="100%"||o==="100vh")&&(!s||s==="100%"||s==="100vh"),u=this._xPosition,f=this._xOffset,m=this._overlayRef.getConfig().direction==="rtl",h="",b="",w="";c?w="flex-start":u==="center"?(w="center",m?b=f:h=f):m?u==="left"||u==="end"?(w="flex-end",h=f):(u==="right"||u==="start")&&(w="flex-start",b=f):u==="left"||u==="start"?(w="flex-start",h=f):(u==="right"||u==="end")&&(w="flex-end",b=f),n.position=this._cssPosition,n.marginLeft=c?"0":h,n.marginTop=l?"0":this._topOffset,n.marginBottom=this._bottomOffset,n.marginRight=c?"0":b,e.justifyContent=w,e.alignItems=l?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let n=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,i=e.style;e.classList.remove(bx),i.justifyContent=i.alignItems=n.marginTop=n.marginBottom=n.marginLeft=n.marginRight=n.position="",this._overlayRef=null,this._isDisposed=!0}},Ix=(()=>{class t{_injector=d(G);constructor(){}global(){return ma()}flexibleConnectedTo(e){return Ex(this._injector,e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Mx=new g("OVERLAY_DEFAULT_CONFIG");function Qu(t,n){t.get(tt).load(xx);let e=t.get(Zu),i=t.get(L),r=t.get(Qe),o=t.get(Vt),a=t.get(Nt),s=t.get(Se,null,{optional:!0})||t.get(Ve).createRenderer(null,null),c=new da(n),l=t.get(Mx,null,{optional:!0})?.usePopover??!0;c.direction=c.direction||a.value,"showPopover"in i.body?c.usePopover=n?.usePopover??l:c.usePopover=!1;let u=i.createElement("div"),f=i.createElement("div");u.id=r.getId("cdk-overlay-"),u.classList.add("cdk-overlay-pane"),f.appendChild(u),c.usePopover&&(f.setAttribute("popover","manual"),f.classList.add("cdk-overlay-popover"));let m=c.usePopover?c.positionStrategy?.getPopoverInsertionPoint?.():null;return ub(m)?m.after(f):m?.type==="parent"?m.element.appendChild(f):e.getContainerElement().appendChild(f),new ua(new Bu(u,o,t),f,u,c,t.get(k),t.get(Cx),i,t.get(Un),t.get(Dx),n?.disableAnimations??t.get(os,null,{optional:!0})==="NoopAnimations",t.get(be),s)}var Sx=(()=>{class t{scrollStrategies=d(yx);_positionBuilder=d(Ix);_injector=d(G);constructor(){}create(e){return Qu(this._injector,e)}position(){return this._positionBuilder}static \u0275fac=function(i){return new(i||t)};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var nc=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=j({type:t});static \u0275inj=P({providers:[Sx],imports:[we,Hr,Jg,Jg]})}return t})();function JF(t,n){}var qi=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;positionStrategy;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;scrollStrategy;closeOnNavigation=!0;closeOnDestroy=!0;closeOnOverlayDetachments=!0;disableAnimations=!1;providers;container;templateContext};var mb=(()=>{class t extends oa{_elementRef=d(O);_focusTrapFactory=d(G0);_config;_interactivityChecker=d(xg);_ngZone=d(k);_focusMonitor=d(Rr);_renderer=d(Se);_changeDetectorRef=d(qe);_injector=d(G);_platform=d(ce);_document=d(L);_portalOutlet;_focusTrapped=new x;_focusTrap=null;_elementFocusedBeforeDialogWasOpened=null;_closeInteractionType=null;_ariaLabelledByQueue=[];_isDestroyed=!1;constructor(){super(),this._config=d(qi,{optional:!0})||new qi,this._config.ariaLabelledBy&&this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)}_addAriaLabelledBy(e){this._ariaLabelledByQueue.push(e),this._changeDetectorRef.markForCheck()}_removeAriaLabelledBy(e){let i=this._ariaLabelledByQueue.indexOf(e);i>-1&&(this._ariaLabelledByQueue.splice(i,1),this._changeDetectorRef.markForCheck())}_contentAttached(){this._initializeFocusTrap(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._focusTrapped.complete(),this._isDestroyed=!0,this._restoreFocus()}attachComponentPortal(e){this._portalOutlet.hasAttached();let i=this._portalOutlet.attachComponentPortal(e);return this._contentAttached(),i}attachTemplatePortal(e){this._portalOutlet.hasAttached();let i=this._portalOutlet.attachTemplatePortal(e);return this._contentAttached(),i}attachDomPortal=e=>{this._portalOutlet.hasAttached();let i=this._portalOutlet.attachDomPortal(e);return this._contentAttached(),i};_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(e,i){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let r=()=>{o(),a(),e.removeAttribute("tabindex")},o=this._renderer.listen(e,"blur",r),a=this._renderer.listen(e,"mousedown",r)})),e.focus(i)}_focusByCssSelector(e,i){let r=this._elementRef.nativeElement.querySelector(e);r&&this._forceFocus(r,i)}_trapFocus(e){this._isDestroyed||at(()=>{let i=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case"dialog":this._containsFocus()||i.focus(e);break;case!0:case"first-tabbable":this._focusTrap?.focusInitialElement(e)||this._focusDialogContainer(e);break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]',e);break;default:this._focusByCssSelector(this._config.autoFocus,e);break}this._focusTrapped.next()},{injector:this._injector})}_restoreFocus(){let e=this._config.restoreFocus,i=null;if(typeof e=="string"?i=this._document.querySelector(e):typeof e=="boolean"?i=e?this._elementFocusedBeforeDialogWasOpened:null:e&&(i=e),this._config.restoreFocus&&i&&typeof i.focus=="function"){let r=Wo(),o=this._elementRef.nativeElement;(!r||r===this._document.body||r===o||o.contains(r))&&(this._focusMonitor?(this._focusMonitor.focusVia(i,this._closeInteractionType),this._closeInteractionType=null):i.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(e){this._elementRef.nativeElement.focus?.(e)}_containsFocus(){let e=this._elementRef.nativeElement,i=Wo();return e===i||e.contains(i)}_initializeFocusTrap(){this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=Wo()))}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=E({type:t,selectors:[["cdk-dialog-container"]],viewQuery:function(i,r){if(i&1&&et(Wi,7),i&2){let o;U(o=z())&&(r._portalOutlet=o.first)}},hostAttrs:["tabindex","-1",1,"cdk-dialog-container"],hostVars:6,hostBindings:function(i,r){i&2&&re("id",r._config.id||null)("role",r._config.role)("aria-modal",r._config.ariaModal)("aria-labelledby",r._config.ariaLabel?null:r._ariaLabelledByQueue[0])("aria-label",r._config.ariaLabel)("aria-describedby",r._config.ariaDescribedBy||null)},features:[ue],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(i,r){i&1&&St(0,JF,0,0,"ng-template",0)},dependencies:[Wi],styles:[`.cdk-dialog-container {
  display: block;
  width: 100%;
  height: 100%;
  min-height: inherit;
  max-height: inherit;
}
`],encapsulation:2})}return t})(),ic=class{overlayRef;config;componentInstance=null;componentRef=null;containerInstance;disableClose;closed=new x;backdropClick;keydownEvents;outsidePointerEvents;id;_detachSubscription;constructor(n,e){this.overlayRef=n,this.config=e,this.disableClose=e.disableClose,this.backdropClick=n.backdropClick(),this.keydownEvents=n.keydownEvents(),this.outsidePointerEvents=n.outsidePointerEvents(),this.id=e.id,this.keydownEvents.subscribe(i=>{i.keyCode===27&&!this.disableClose&&!Hi(i)&&(i.preventDefault(),this.close(void 0,{focusOrigin:"keyboard"}))}),this.backdropClick.subscribe(()=>{!this.disableClose&&this._canClose()?this.close(void 0,{focusOrigin:"mouse"}):this.containerInstance._recaptureFocus?.()}),this._detachSubscription=n.detachments().subscribe(()=>{e.closeOnOverlayDetachments!==!1&&this.close()})}close(n,e){if(this._canClose(n)){let i=this.closed;this.containerInstance._closeInteractionType=e?.focusOrigin||"program",this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),i.next(n),i.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(n="",e=""){return this.overlayRef.updateSize({width:n,height:e}),this}addPanelClass(n){return this.overlayRef.addPanelClass(n),this}removePanelClass(n){return this.overlayRef.removePanelClass(n),this}_canClose(n){let e=this.config;return!!this.containerInstance&&(!e.closePredicate||e.closePredicate(n,e,this.componentInstance))}},eP=new g("DialogScrollStrategy",{providedIn:"root",factory:()=>{let t=d(G);return()=>fa(t)}}),tP=new g("DialogData"),nP=new g("DefaultDialogConfig");function iP(t){let n=V(t),e=new R;return{valueSignal:n,get value(){return n()},change:e,ngOnDestroy(){e.complete()}}}var hb=(()=>{class t{_injector=d(G);_defaultOptions=d(nP,{optional:!0});_parentDialog=d(t,{optional:!0,skipSelf:!0});_overlayContainer=d(Zu);_idGenerator=d(Qe);_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new x;_afterOpenedAtThisLevel=new x;_ariaHiddenElements=new Map;_scrollStrategy=d(eP);get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}afterAllClosed=qn(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(ct(void 0)));constructor(){}open(e,i){let r=this._defaultOptions||new qi;i=v(v({},r),i),i.id=i.id||this._idGenerator.getId("cdk-dialog-"),i.id&&this.getDialogById(i.id);let o=this._getOverlayConfig(i),a=Qu(this._injector,o),s=new ic(a,i),c=this._attachContainer(a,s,i);if(s.containerInstance=c,!this.openDialogs.length){let l=this._overlayContainer.getContainerElement();c._focusTrapped?c._focusTrapped.pipe(ze(1)).subscribe(()=>{this._hideNonDialogContentFromAssistiveTechnology(l)}):this._hideNonDialogContentFromAssistiveTechnology(l)}return this._attachDialogContent(e,s,c,i),this.openDialogs.push(s),s.closed.subscribe(()=>this._removeOpenDialog(s,!0)),this.afterOpened.next(s),s}closeAll(){fb(this.openDialogs,e=>e.close())}getDialogById(e){return this.openDialogs.find(i=>i.id===e)}ngOnDestroy(){fb(this._openDialogsAtThisLevel,e=>{e.config.closeOnDestroy===!1&&this._removeOpenDialog(e,!1)}),fb(this._openDialogsAtThisLevel,e=>e.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(e){let i=new da({positionStrategy:e.positionStrategy||ma().centerHorizontally().centerVertically(),scrollStrategy:e.scrollStrategy||this._scrollStrategy(),panelClass:e.panelClass,hasBackdrop:e.hasBackdrop,direction:e.direction,minWidth:e.minWidth,minHeight:e.minHeight,maxWidth:e.maxWidth,maxHeight:e.maxHeight,width:e.width,height:e.height,disposeOnNavigation:e.closeOnNavigation,disableAnimations:e.disableAnimations});return e.backdropClass&&(i.backdropClass=e.backdropClass),i}_attachContainer(e,i,r){let o=r.injector||r.viewContainerRef?.injector,a=[{provide:qi,useValue:r},{provide:ic,useValue:i},{provide:ua,useValue:e}],s;r.container?typeof r.container=="function"?s=r.container:(s=r.container.type,a.push(...r.container.providers(r))):s=mb;let c=new ra(s,r.viewContainerRef,G.create({parent:o||this._injector,providers:a}));return e.attach(c).instance}_attachDialogContent(e,i,r,o){if(e instanceof ut){let a=this._createInjector(o,i,r,void 0),s={$implicit:o.data,dialogRef:i};o.templateContext&&(s=v(v({},s),typeof o.templateContext=="function"?o.templateContext():o.templateContext)),r.attachTemplatePortal(new pi(e,null,s,a))}else{let a=this._createInjector(o,i,r,this._injector),s=r.attachComponentPortal(new ra(e,o.viewContainerRef,a));i.componentRef=s,i.componentInstance=s.instance}}_createInjector(e,i,r,o){let a=e.injector||e.viewContainerRef?.injector,s=[{provide:tP,useValue:e.data},{provide:ic,useValue:i}];return e.providers&&(typeof e.providers=="function"?s.push(...e.providers(i,e,r)):s.push(...e.providers)),e.direction&&(!a||!a.get(Nt,null,{optional:!0}))&&s.push({provide:Nt,useValue:iP(e.direction)}),G.create({parent:a||o,providers:s})}_removeOpenDialog(e,i){let r=this.openDialogs.indexOf(e);r>-1&&(this.openDialogs.splice(r,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((o,a)=>{o?a.setAttribute("aria-hidden",o):a.removeAttribute("aria-hidden")}),this._ariaHiddenElements.clear(),i&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(e){if(e.parentElement){let i=e.parentElement.children;for(let r=i.length-1;r>-1;r--){let o=i[r];o!==e&&o.nodeName!=="SCRIPT"&&o.nodeName!=="STYLE"&&!o.hasAttribute("aria-live")&&!o.hasAttribute("popover")&&(this._ariaHiddenElements.set(o,o.getAttribute("aria-hidden")),o.setAttribute("aria-hidden","true"))}}}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}static \u0275fac=function(i){return new(i||t)};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function fb(t,n){let e=t.length;for(;e--;)n(t[e])}var Tx=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=j({type:t});static \u0275inj=P({providers:[hb],imports:[nc,Hr,q0,Hr]})}return t})();function rP(t,n){}var Ku=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;position;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;delayFocusTrap=!0;scrollStrategy;closeOnNavigation=!0;enterAnimationDuration;exitAnimationDuration},pb="mdc-dialog--open",Ax="mdc-dialog--opening",Rx="mdc-dialog--closing",oP=150,aP=75,sP=(()=>{class t extends mb{_animationStateChanged=new R;_animationsEnabled=!Ye();_actionSectionCount=0;_hostElement=this._elementRef.nativeElement;_enterAnimationDuration=this._animationsEnabled?Ox(this._config.enterAnimationDuration)??oP:0;_exitAnimationDuration=this._animationsEnabled?Ox(this._config.exitAnimationDuration)??aP:0;_animationTimer=null;_contentAttached(){super._contentAttached(),this._startOpenAnimation()}_startOpenAnimation(){this._animationStateChanged.emit({state:"opening",totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(Nx,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(Ax,pb)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(pb),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:"closing",totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(pb),this._animationsEnabled?(this._hostElement.style.setProperty(Nx,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(Rx)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_updateActionSectionCount(e){this._actionSectionCount+=e,this._changeDetectorRef.markForCheck()}_finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration)};_finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:"closed",totalTime:this._exitAnimationDuration})};_clearAnimationClasses(){this._hostElement.classList.remove(Ax,Rx)}_waitForAnimationToComplete(e,i){this._animationTimer!==null&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(i,e)}_requestAnimationFrame(e){this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame=="function"?requestAnimationFrame(e):e()})}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(e){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:"opened",totalTime:e})}ngOnDestroy(){super.ngOnDestroy(),this._animationTimer!==null&&clearTimeout(this._animationTimer)}attachComponentPortal(e){let i=super.attachComponentPortal(e);return i.location.nativeElement.classList.add("mat-mdc-dialog-component-host"),i}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ae(t)))(r||t)}})();static \u0275cmp=E({type:t,selectors:[["mat-dialog-container"]],hostAttrs:["tabindex","-1",1,"mat-mdc-dialog-container","mdc-dialog"],hostVars:10,hostBindings:function(i,r){i&2&&(gn("id",r._config.id),re("aria-modal",r._config.ariaModal)("role",r._config.role)("aria-labelledby",r._config.ariaLabel?null:r._ariaLabelledByQueue[0])("aria-label",r._config.ariaLabel)("aria-describedby",r._config.ariaDescribedBy||null),$("_mat-animation-noopable",!r._animationsEnabled)("mat-mdc-dialog-container-with-actions",r._actionSectionCount>0))},features:[ue],decls:3,vars:0,consts:[[1,"mat-mdc-dialog-inner-container","mdc-dialog__container"],[1,"mat-mdc-dialog-surface","mdc-dialog__surface"],["cdkPortalOutlet",""]],template:function(i,r){i&1&&(_(0,"div",0)(1,"div",1),St(2,rP,0,0,"ng-template",2),y()())},dependencies:[Wi],styles:[`.mat-mdc-dialog-container {
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
`],encapsulation:2})}return t})(),Nx="--mat-dialog-transition-duration";function Ox(t){return t==null?null:typeof t=="number"?t:t.endsWith("ms")?Wn(t.substring(0,t.length-2)):t.endsWith("s")?Wn(t.substring(0,t.length-1))*1e3:t==="0"?0:null}var Yu=(function(t){return t[t.OPEN=0]="OPEN",t[t.CLOSING=1]="CLOSING",t[t.CLOSED=2]="CLOSED",t})(Yu||{}),rc=class{_ref;_config;_containerInstance;componentInstance;componentRef=null;disableClose;id;_afterOpened=new _i(1);_beforeClosed=new _i(1);_result;_closeFallbackTimeout;_state=Yu.OPEN;_closeInteractionType;constructor(n,e,i){this._ref=n,this._config=e,this._containerInstance=i,this.disableClose=e.disableClose,this.id=n.id,n.addPanelClass("mat-mdc-dialog-panel"),i._animationStateChanged.pipe(le(r=>r.state==="opened"),ze(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),i._animationStateChanged.pipe(le(r=>r.state==="closed"),ze(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),n.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),sn(this.backdropClick(),this.keydownEvents().pipe(le(r=>r.keyCode===27&&!this.disableClose&&!Hi(r)))).subscribe(r=>{this.disableClose||(r.preventDefault(),cP(this,r.type==="keydown"?"keyboard":"mouse"))})}close(n){let e=this._config.closePredicate;e&&!e(n,this._config,this.componentInstance)||(this._result=n,this._containerInstance._animationStateChanged.pipe(le(i=>i.state==="closing"),ze(1)).subscribe(i=>{this._beforeClosed.next(n),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),i.totalTime+100)}),this._state=Yu.CLOSING,this._containerInstance._startExitAnimation())}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(n){let e=this._ref.config.positionStrategy;return n&&(n.left||n.right)?n.left?e.left(n.left):e.right(n.right):e.centerHorizontally(),n&&(n.top||n.bottom)?n.top?e.top(n.top):e.bottom(n.bottom):e.centerVertically(),this._ref.updatePosition(),this}updateSize(n="",e=""){return this._ref.updateSize(n,e),this}addPanelClass(n){return this._ref.addPanelClass(n),this}removePanelClass(n){return this._ref.removePanelClass(n),this}getState(){return this._state}_finishDialogClose(){this._state=Yu.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}};function cP(t,n,e){return t._closeInteractionType=n,t.close(e)}var lP=new g("MatMdcDialogData"),dP=new g("mat-mdc-dialog-default-options"),uP=new g("mat-mdc-dialog-scroll-strategy",{providedIn:"root",factory:()=>{let t=d(G);return()=>fa(t)}}),gb=(()=>{class t{_defaultOptions=d(dP,{optional:!0});_scrollStrategy=d(uP);_parentDialog=d(t,{optional:!0,skipSelf:!0});_idGenerator=d(Qe);_injector=d(G);_dialog=d(hb);_animationsDisabled=Ye();_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new x;_afterOpenedAtThisLevel=new x;dialogConfigClass=Ku;_dialogRefConstructor;_dialogContainerType;_dialogDataToken;get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}afterAllClosed=qn(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(ct(void 0)));constructor(){this._dialogRefConstructor=rc,this._dialogContainerType=sP,this._dialogDataToken=lP}open(e,i){let r;i=v(v({},this._defaultOptions||new Ku),i),i.id=i.id||this._idGenerator.getId("mat-mdc-dialog-"),i.scrollStrategy=i.scrollStrategy||this._scrollStrategy();let o=this._dialog.open(e,W(v({},i),{positionStrategy:ma(this._injector).centerHorizontally().centerVertically(),disableClose:!0,closePredicate:void 0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,disableAnimations:this._animationsDisabled||i.enterAnimationDuration?.toLocaleString()==="0"||i.exitAnimationDuration?.toString()==="0",container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:i},{provide:qi,useValue:i}]},templateContext:()=>({dialogRef:r}),providers:(a,s,c)=>(r=new this._dialogRefConstructor(a,i,c),r.updatePosition(i?.position),[{provide:this._dialogContainerType,useValue:c},{provide:this._dialogDataToken,useValue:s.data},{provide:this._dialogRefConstructor,useValue:r}])}));return r.componentRef=o.componentRef,r.componentInstance=o.componentInstance,this.openDialogs.push(r),this.afterOpened.next(r),r.afterClosed().subscribe(()=>{let a=this.openDialogs.indexOf(r);a>-1&&(this.openDialogs.splice(a,1),this.openDialogs.length||this._getAfterAllClosed().next())}),r}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(e){return this.openDialogs.find(i=>i.id===e)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(e){let i=e.length;for(;i--;)e[i].close()}static \u0275fac=function(i){return new(i||t)};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Fx=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=j({type:t});static \u0275inj=P({providers:[gb],imports:[Tx,nc,Hr,we]})}return t})();var Xu=class t{dialogRef=d(rc);onConfirm(){this.dialogRef.close(!0)}onDeny(){this.dialogRef.close(!1)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=E({type:t,selectors:[["confirmation-dialog"]],decls:8,vars:0,consts:[[1,"flex-with-style"],[1,"top-text"],[1,"button-group"],[1,"button",3,"click"]],template:function(e,i){e&1&&(kt(0,"div",0)(1,"p",1),Y(2," \xC4r du s\xE4ker att du vill avregistrera n\xE4rvaro? "),Tt(),kt(3,"li",2)(4,"button",3),fs("click",function(){return i.onConfirm()}),Y(5," Ja "),Tt(),kt(6,"button",3),fs("click",function(){return i.onDeny()}),Y(7," Nej "),Tt()()())},dependencies:[Fx,Jo],styles:["[_nghost-%COMP%]{display:block;text-align:center;padding:8px}.top-text[_ngcontent-%COMP%]{font:var(--mat-sys-title-medium)}.button-group[_ngcontent-%COMP%]{display:flex;justify-content:center;gap:32px}.button[_ngcontent-%COMP%]{padding:8px 32px;font:var(--mat-sys-label-small);font-weight:700;cursor:pointer;border-radius:4px;transition:all .2s ease-in-out;background-color:var(--mat-sys-primary);color:var(--mat-sys-on-primary);border:1px solid}button[_ngcontent-%COMP%]:hover{background-color:var(--mat-sys-primary-fixed-dim)}"]})};function Dn(){let t=new Date;return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`}function fP(t,n){if(t&1&&(_(0,"p",1),Y(1),y()),t&2){let e=me();C(),At(e.errorMessage)}}var ha=class t{childSignal=xt.required();disabled=md();errorMessage="";dialog=d(gb);get isChecked(){return this.attendanceService.getSignal(this.childSignal().id,Dn())()??!1}attendanceService=d(la);constructor(){dn(()=>{let n=this.childSignal();if(!n)return;let e=this.attendanceService.getSignal(n.id,Dn());e()===null&&(n.present===null?e.set(!1):e.set(n.present))})}async onCheckBox(n){let e=n.checked;if(e===!1&&(n.source.checked=!0,!await this.confirmation()))return;let i=this.attendanceService.getSignal(this.childSignal().id,Dn());i.set(e),this.attendanceService.setAttendance(this.childSignal().id,Dn(),e).subscribe({next:r=>i.set(r.present),error:r=>{console.error("Kunde inte spara",r),i.set(!e),n.source.checked=!e,this.errorMessage="Misslyckades att spara till databasen.",setTimeout(()=>this.errorMessage="",2e3)}}),this.wsUpdateAttendance(n.checked)}attendanceChangeEvent=new R;wsUpdateAttendance(n){let e={childId:this.childSignal().id,present:n};this.attendanceChangeEvent.emit(e)}async confirmation(){let n=this.dialog.open(Xu,{height:"120px",width:"400px"});return await Sf(n.afterClosed())}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=E({type:t,selectors:[["attendance-box"]],inputs:{childSignal:[1,"childSignal"],disabled:[1,"disabled"]},outputs:{childSignal:"childSignalChange",attendanceChangeEvent:"attendanceChangeEvent"},decls:3,vars:3,consts:[[3,"change","disabled","checked"],[1,"error-text"]],template:function(e,i){e&1&&(_(0,"div")(1,"mat-checkbox",0),H("change",function(o){return i.onCheckBox(o)}),y(),_e(2,fP,2,1,"p",1),y()),e&2&&(C(),se("disabled",i.disabled())("checked",i.isChecked),C(),ye(i.errorMessage?2:-1))},dependencies:[dx,cb],styles:[".error-text[_ngcontent-%COMP%]{color:red;font-size:16px;position:absolute}"]})};var Ju=class t{childSignal=xt.required();attendanceChangeEvent=new R;wsUpdateAttendance(n){this.attendanceChangeEvent.emit(n)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=E({type:t,selectors:[["child-display"]],inputs:{childSignal:[1,"childSignal"]},outputs:{childSignal:"childSignalChange",attendanceChangeEvent:"attendanceChangeEvent"},decls:6,vars:2,consts:[[1,"columnise"],[1,"rowise"],[3,"attendanceChangeEvent","childSignal"]],template:function(e,i){e&1&&(_(0,"div",0)(1,"p"),Y(2),y(),_(3,"div",1),Y(4," N\xE4rvaro: "),_(5,"attendance-box",2),H("attendanceChangeEvent",function(o){return i.wsUpdateAttendance(o)}),y()()()),e&2&&(C(2),ai("Elev: ",i.childSignal().name),C(3),se("childSignal",i.childSignal()))},dependencies:[ha],styles:[".columnise[_ngcontent-%COMP%]{font:var(--mat-sys-label-large);display:flex;flex-direction:column;padding-left:16px}.rowise[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:baseline}"]})};var Px=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=j({type:t});static \u0275inj=P({imports:[we]})}return t})();var mP=["*"];var hP=["unscopedContent"],pP=["text"],gP=[[["","matListItemAvatar",""],["","matListItemIcon",""]],[["","matListItemTitle",""]],[["","matListItemLine",""]],"*",[["","matListItemMeta",""]],[["mat-divider"]]],bP=["[matListItemAvatar],[matListItemIcon]","[matListItemTitle]","[matListItemLine]","*","[matListItemMeta]","mat-divider"];var vP=new g("ListOption"),vb=(()=>{class t{_elementRef=d(O);constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275dir=S({type:t,selectors:[["","matListItemTitle",""]],hostAttrs:[1,"mat-mdc-list-item-title","mdc-list-item__primary-text"]})}return t})(),_P=(()=>{class t{_elementRef=d(O);constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275dir=S({type:t,selectors:[["","matListItemLine",""]],hostAttrs:[1,"mat-mdc-list-item-line","mdc-list-item__secondary-text"]})}return t})(),_b=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=S({type:t,selectors:[["","matListItemMeta",""]],hostAttrs:[1,"mat-mdc-list-item-meta","mdc-list-item__end"]})}return t})(),Lx=(()=>{class t{_listOption=d(vP,{optional:!0});constructor(){}_isAlignedAtStart(){return!this._listOption||this._listOption?._getTogglePosition()==="after"}static \u0275fac=function(i){return new(i||t)};static \u0275dir=S({type:t,hostVars:4,hostBindings:function(i,r){i&2&&$("mdc-list-item__start",r._isAlignedAtStart())("mdc-list-item__end",!r._isAlignedAtStart())}})}return t})(),yP=(()=>{class t extends Lx{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ae(t)))(r||t)}})();static \u0275dir=S({type:t,selectors:[["","matListItemAvatar",""]],hostAttrs:[1,"mat-mdc-list-item-avatar"],features:[ue]})}return t})(),wP=(()=>{class t extends Lx{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ae(t)))(r||t)}})();static \u0275dir=S({type:t,selectors:[["","matListItemIcon",""]],hostAttrs:[1,"mat-mdc-list-item-icon"],features:[ue]})}return t})(),CP=new g("MAT_LIST_CONFIG"),bb=(()=>{class t{_isNonInteractive=!0;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=It(e)}_disableRipple=!1;get disabled(){return this._disabled()}set disabled(e){this._disabled.set(It(e))}_disabled=V(!1);_defaultOptions=d(CP,{optional:!0});static \u0275fac=function(i){return new(i||t)};static \u0275dir=S({type:t,hostVars:1,hostBindings:function(i,r){i&2&&re("aria-disabled",r.disabled)},inputs:{disableRipple:"disableRipple",disabled:"disabled"}})}return t})(),DP=(()=>{class t{_elementRef=d(O);_ngZone=d(k);_listBase=d(bb,{optional:!0});_platform=d(ce);_hostElement;_isButtonElement;_noopAnimations=Ye();_avatars;_icons;set lines(e){this._explicitLines=Wn(e,null),this._updateItemLines(!1)}_explicitLines=null;get disableRipple(){return this.disabled||this._disableRipple||this._noopAnimations||!!this._listBase?.disableRipple}set disableRipple(e){this._disableRipple=It(e)}_disableRipple=!1;get disabled(){return this._disabled()||!!this._listBase?.disabled}set disabled(e){this._disabled.set(It(e))}_disabled=V(!1);_subscriptions=new ae;_rippleRenderer=null;_hasUnscopedTextContent=!1;rippleConfig;get rippleDisabled(){return this.disableRipple||!!this.rippleConfig.disabled}constructor(){d(tt).load(Ui);let e=d(Xo,{optional:!0});this.rippleConfig=e||{},this._hostElement=this._elementRef.nativeElement,this._isButtonElement=this._hostElement.nodeName.toLowerCase()==="button",this._listBase&&!this._listBase._isNonInteractive&&this._initInteractiveListItem(),this._isButtonElement&&!this._hostElement.hasAttribute("type")&&this._hostElement.setAttribute("type","button")}ngAfterViewInit(){this._monitorProjectedLinesAndTitle(),this._updateItemLines(!0)}ngOnDestroy(){this._subscriptions.unsubscribe(),this._rippleRenderer!==null&&this._rippleRenderer._removeTriggerEvents()}_hasIconOrAvatar(){return!!(this._avatars.length||this._icons.length)}_initInteractiveListItem(){this._hostElement.classList.add("mat-mdc-list-item-interactive"),this._rippleRenderer=new Pr(this,this._ngZone,this._hostElement,this._platform,d(G)),this._rippleRenderer.setupTriggerEvents(this._hostElement)}_monitorProjectedLinesAndTitle(){this._ngZone.runOutsideAngular(()=>{this._subscriptions.add(sn(this._lines.changes,this._titles.changes).subscribe(()=>this._updateItemLines(!1)))})}_updateItemLines(e){if(!this._lines||!this._titles||!this._unscopedContent)return;e&&this._checkDomForUnscopedTextContent();let i=this._explicitLines??this._inferLinesFromContent(),r=this._unscopedContent.nativeElement;if(this._hostElement.classList.toggle("mat-mdc-list-item-single-line",i<=1),this._hostElement.classList.toggle("mdc-list-item--with-one-line",i<=1),this._hostElement.classList.toggle("mdc-list-item--with-two-lines",i===2),this._hostElement.classList.toggle("mdc-list-item--with-three-lines",i===3),this._hasUnscopedTextContent){let o=this._titles.length===0&&i===1;r.classList.toggle("mdc-list-item__primary-text",o),r.classList.toggle("mdc-list-item__secondary-text",!o)}else r.classList.remove("mdc-list-item__primary-text"),r.classList.remove("mdc-list-item__secondary-text")}_inferLinesFromContent(){let e=this._titles.length+this._lines.length;return this._hasUnscopedTextContent&&(e+=1),e}_checkDomForUnscopedTextContent(){this._hasUnscopedTextContent=Array.from(this._unscopedContent.nativeElement.childNodes).filter(e=>e.nodeType!==e.COMMENT_NODE).some(e=>!!(e.textContent&&e.textContent.trim()))}static \u0275fac=function(i){return new(i||t)};static \u0275dir=S({type:t,contentQueries:function(i,r,o){if(i&1&&Dt(o,yP,4)(o,wP,4),i&2){let a;U(a=z())&&(r._avatars=a),U(a=z())&&(r._icons=a)}},hostVars:4,hostBindings:function(i,r){i&2&&(re("aria-disabled",r.disabled)("disabled",r._isButtonElement&&r.disabled||null),$("mdc-list-item--disabled",r.disabled))},inputs:{lines:"lines",disableRipple:"disableRipple",disabled:"disabled"}})}return t})();var jx=(()=>{class t extends bb{_isNonInteractive=!1;static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ae(t)))(r||t)}})();static \u0275cmp=E({type:t,selectors:[["mat-action-list"]],hostAttrs:["role","group",1,"mat-mdc-action-list","mat-mdc-list-base","mdc-list"],exportAs:["matActionList"],features:[ke([{provide:bb,useExisting:t}]),ue],ngContentSelectors:mP,decls:1,vars:0,template:function(i,r){i&1&&(De(),Q(0))},styles:[`.mdc-list {
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
`],encapsulation:2,changeDetection:0})}return t})();var Bx=(()=>{class t extends DP{_lines;_titles;_meta;_unscopedContent;_itemText;get activated(){return this._activated}set activated(e){this._activated=It(e)}_activated=!1;_getAriaCurrent(){return this._hostElement.nodeName==="A"&&this._activated?"page":null}_hasBothLeadingAndTrailing(){return this._meta.length!==0&&(this._avatars.length!==0||this._icons.length!==0)}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ae(t)))(r||t)}})();static \u0275cmp=E({type:t,selectors:[["mat-list-item"],["a","mat-list-item",""],["button","mat-list-item",""]],contentQueries:function(i,r,o){if(i&1&&Dt(o,_P,5)(o,vb,5)(o,_b,5),i&2){let a;U(a=z())&&(r._lines=a),U(a=z())&&(r._titles=a),U(a=z())&&(r._meta=a)}},viewQuery:function(i,r){if(i&1&&et(hP,5)(pP,5),i&2){let o;U(o=z())&&(r._unscopedContent=o.first),U(o=z())&&(r._itemText=o.first)}},hostAttrs:[1,"mat-mdc-list-item","mdc-list-item"],hostVars:13,hostBindings:function(i,r){i&2&&(re("aria-current",r._getAriaCurrent()),$("mdc-list-item--activated",r.activated)("mdc-list-item--with-leading-avatar",r._avatars.length!==0)("mdc-list-item--with-leading-icon",r._icons.length!==0)("mdc-list-item--with-trailing-meta",r._meta.length!==0)("mat-mdc-list-item-both-leading-and-trailing",r._hasBothLeadingAndTrailing())("_mat-animation-noopable",r._noopAnimations))},inputs:{activated:"activated"},exportAs:["matListItem"],features:[ue],ngContentSelectors:bP,decls:10,vars:0,consts:[["unscopedContent",""],[1,"mdc-list-item__content"],[1,"mat-mdc-list-item-unscoped-content",3,"cdkObserveContent"],[1,"mat-focus-indicator"]],template:function(i,r){i&1&&(De(gP),Q(0),_(1,"span",1),Q(2,1),Q(3,2),_(4,"span",2,0),H("cdkObserveContent",function(){return r._updateItemLines(!0)}),Q(6,3),y()(),Q(7,4),Q(8,5),fe(9,"div",3))},dependencies:[su],encapsulation:2,changeDetection:0})}return t})();var Vx=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=j({type:t});static \u0275inj=P({imports:[Qo,mu,Px,we,ca]})}return t})();var ef=class t{url=`${rn.apiUrl}/api/children/attendance`;http=d(Jt);getChildren(){return this.http.get(this.url)}static \u0275fac=function(e){return new(e||t)};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})};var EP=(t,n)=>n.id;function IP(t,n){t&1&&fe(0,"mat-divider")}function MP(t,n){if(t&1){let e=Bn();_(0,"li")(1,"button",5),H("click",function(){let r=_t(e).$implicit,o=me();return yt(o.onSelectChild(r))}),_(2,"span",6),Y(3),y(),_(4,"div",7),fe(5,"attendance-box",8),y()()(),_e(6,IP,1,0,"mat-divider")}if(t&2){let e=n.$implicit,i=n.$index,r=n.$count;C(3),ai("",e.name," "),C(2),se("disabled",!0)("childSignal",e),C(),ye(i!==r-1?6:-1)}}var pa=class t{children=V([]);childSignal=xt.required();searchQuery=V("");searchedChildren=ht(()=>{let n=this.searchQuery();return this.children().filter(e=>e.name.toLowerCase().includes(n))});attendanceService=d(la);childService=d(ef);onSearchUpdated(n){this.searchQuery.set(n)}get isChecked(){return this.attendanceService.getSignal(this.childSignal().id,Dn())()??!1}ngOnInit(){this.loadChildren()}onSelectChild(n){this.childSignal().id==n.id?this.childSignal.set({name:"",id:0,date:"",present:!1}):this.childSignal.set(n)}loadChildren(){this.childService.getChildren().subscribe({next:n=>{this.children.set(n)}})}handleWebsocketMessage(n){let e=this.children().find(r=>r.id===n.childId);if(!e){alert("Child not found");return}this.attendanceService.getSignal(e.id,Dn()).set(n.present)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=E({type:t,selectors:[["main-child-list"]],inputs:{childSignal:[1,"childSignal"]},outputs:{childSignal:"childSignalChange"},decls:11,vars:0,consts:[["searchQuery",""],[1,"child-list-container"],["subscriptSizing","dynamic"],["matInput","","type","search",3,"input"],[1,"list-class"],["mat-list-item","",3,"click"],["matListItemTitle",""],["matListItemMeta","",1,"meta-container"],[3,"disabled","childSignal"]],template:function(e,i){if(e&1){let r=Bn();_(0,"div",1)(1,"mat-form-field",2)(2,"mat-label")(3,"mat-icon"),Y(4,"search"),y(),Y(5,"S\xF6k"),y(),_(6,"input",3,0),H("input",function(){_t(r);let a=Kt(7);return yt(i.onSearchUpdated(a.value.toLowerCase()))}),y()(),_(8,"mat-action-list",4),Do(9,MP,7,4,null,null,EP),y()()}e&2&&(C(9),xo(i.searchedChildren()))},dependencies:[Vx,jx,Bx,ob,vb,_b,pg,ca,ha,jr,zi,Lr,ju,ia,_u,vu],styles:["[_nghost-%COMP%]{width:100%}.child-list-container[_ngcontent-%COMP%]{background-color:var(--mat-sys-primary-fixed);width:100%;border:1px solid var(--mat-sys-outline-variant);flex:1;display:flex;flex-direction:column;min-height:0;height:100%}.mat-mdc-action-list[_ngcontent-%COMP%]{padding:0;border-radius:5px;height:100%}.mdc-list-item[_ngcontent-%COMP%]{color:var(--mat-sys-on-primary-container);background-color:var(--mat-sys-primary-container);box-shadow:var(--mat-sys-level1)}.list-class[_ngcontent-%COMP%]{overflow-y:scroll}"]})};var ga=class t{socket=null;messages=new x;roomName="";connect(n,e){let i=localStorage.getItem("token");this.socket=new WebSocket(`${n}?token=${i}`),this.roomName=e,this.socket.onopen=()=>{this.socket?.send(JSON.stringify({type:"subscribe",room:this.roomName})),console.log("[Websocket] - Connected")},this.socket.onmessage=r=>{let o=JSON.parse(r.data);console.log("[Websocket] - Received:",o),this.messages.next(o)},this.socket.onclose=r=>{console.log("[Websocket] - Disconnected",r.code,r.reason)}}disconnect(){this.socket&&(this.socket?.send(JSON.stringify({type:"unsubscribe",room:this.roomName})),this.socket.close(),this.socket=null)}changeRoom(n){this.socket?.send(JSON.stringify({type:"unsubscribe",room:this.roomName})),this.socket?.send(JSON.stringify({type:"subscribe",room:n})),this.roomName=n}sendMessage(n,e){let i=JSON.stringify(v({type:n,room:this.roomName},e));console.log("Sending off ",i),this.socket?.send(i)}sendAttendanceUpdate(n){this.sendMessage("ATTENDANCE",n)}sendJournalUpdate(n){this.sendMessage("DOC_OPERATION",n)}getMessages(){return this.messages.asObservable()}static \u0275fac=function(e){return new(e||t)};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})};var tf=class{getDiff(n,e){let i=n.length<e.length?"INSERT":"DELETE",r={operation:i,idx:0,value:""};switch(i){case"DELETE":r.idx=this.getDiffIdx(n,e),r.value=n.charAt(r.idx);break;case"INSERT":r.idx=this.getDiffIdx(n,e),r.value=e.charAt(r.idx);break}return r}getDiffIdx(n,e){let i=0;for(;n.charAt(i)==e.charAt(i)&&(i++,!(i>Math.max(n.length,e.length))););return i}};var nf=class{transformClient(n,e){switch(n.type){case"INSERT":return this.transformInsert(n,e);case"DELETE":return this.transformDelete(n,e)}}transformInsert(n,e){let i=n;switch(e.type){case"INSERT":e.position<n.position&&i.position++;break;case"DELETE":e.position<n.position&&i.position--;break}return i}transformDelete(n,e){let i=n;switch(e.type){case"INSERT":e.position<n.position&&i.position++;break;case"DELETE":e.position<n.position&&i.position--;break}return i}};var rf=class t{baseUrl=`${rn.apiUrl}/api/journal`;http=d(Jt);getJournal(n){return console.log(n),n!=0?this.http.get(this.baseUrl+`?childId=${n}`):this.http.get(this.baseUrl+"?groupId=1")}static \u0275fac=function(e){return new(e||t)};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})};var SP=["journalContent"],of=class t{child;journalSocket=new ga;differ=new tf;operationalTransformer=new nf;journalService=d(rf);textArea=vn.required("journalContent");text=V("");prevText="";serverRevision=0;sequence=0;inFlight=[];ngOnInit(){this.loadJournal();let n=this.getRoom();this.journalSocket.connect(`${rn.wsUrl}/ws`,n),this.journalSocket.getMessages().subscribe(e=>{console.log(this.inFlight),console.log("recieved: ",e);let i=e,r=i.operation;if(this.isMyOwnAck(i))this.inFlight.shift();else{for(let o of this.inFlight)r=this.operationalTransformer.transformClient(r,o);this.applyToLocalContent(r)}this.serverRevision=i.serverRevision})}getRoom(){return this.child.id!=0?"journal:child:"+this.child.id+":"+Dn():"journal:group:1:"+Dn()}isMyOwnAck(n){return n.userId.toString()===localStorage.getItem("UserId")&&this.inFlight.length>0}loadJournal(){this.journalService.getJournal(this.child.id).subscribe({next:n=>{console.log(n),this.text.set(n.content),this.serverRevision=n.serverRevision,this.sequence=0,this.inFlight=[]}})}applyToLocalContent(n){let e=n.position;switch(n.type){case"INSERT":this.textArea().nativeElement.setRangeText(n.text,e,e,"preserve");break;case"DELETE":this.textArea().nativeElement.setRangeText("",e,e+1,"preserve");break}this.text.set(this.textArea().nativeElement.value),this.prevText=this.text()}ngOnChanges(n){if(n.child&&!n.child.firstChange){this.loadJournal();let e=this.getRoom();console.log(e),this.journalSocket.changeRoom(e),this.prevText=""}}ngOnDestroy(){this.journalSocket.disconnect()}onInput(n){this.sequence++;let e=n.target.value;this.prevText=this.text();let i=this.differ.getDiff(this.prevText,e);this.text.set(e);let r;switch(i.operation){case"DELETE":r={type:"DELETE",position:i.idx,length:1};break;case"INSERT":r={type:"INSERT",position:i.idx,text:i.value};break}let o={clientRevision:this.serverRevision,operation:r,sequence:this.sequence};this.inFlight.push(r),this.journalSocket.sendJournalUpdate(o)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=E({type:t,selectors:[["main-live-journal"]],viewQuery:function(e,i){e&1&&Vn(i.textArea,SP,5),e&2&&Hn()},inputs:{child:"child"},features:[Ne],decls:6,vars:1,consts:[["journalContent",""],["mat-stretch-tabs","false","mat-align-tabs","start"],["label","Dagsrapport"],["matInput","",3,"input","ngModel"],["label","Historik",1,"main-journal-historik"]],template:function(e,i){e&1&&(_(0,"mat-tab-group",1)(1,"mat-tab",2)(2,"mat-form-field")(3,"textarea",3,0),H("input",function(o){return i.onInput(o)}),y()()(),fe(5,"mat-tab",4),y()),e&2&&(C(3),se("ngModel",i.text()))},dependencies:[zi,ia,aa,Ur,Pu,na,Nu,Ks],styles:["mat-tab-group[_ngcontent-%COMP%]{height:100%}mat-tab-group[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{height:100%}mat-mdc-tab-body-wrapper[_ngcontent-%COMP%]{height:100%}  .mat-mdc-form-field-flex{height:100%}  .mat-mdc-form-field-infix{height:100%}mat-form-field[_ngcontent-%COMP%]{width:100%;box-sizing:border-box;height:100%}textarea[_ngcontent-%COMP%]{width:100%;height:100%!important;min-height:20vh;margin-bottom:1em;padding:0;box-sizing:content-box;resize:none;overflow-y:scroll}"]})};function kP(t,n){if(t&1){let e=Bn();_(0,"div",3)(1,"child-display",7),H("attendanceChangeEvent",function(r){_t(e);let o=me();return yt(o.wsUpdateAttendance(r))}),mt("childSignalChange",function(r){_t(e);let o=me();return He(o.childSignal,r)||(o.childSignal=r),yt(r)}),y()()}if(t&2){let e=me();C(),ft("childSignal",e.childSignal)}}var ba=class t{months=["Januari","Februari","Mars","April","Maj","Juni","Juli","Augusti","September","Oktober","November","December"];days=["S\xF6ndag","M\xE5ndag","Tisdag","Onsdag","Torsdag","Fredag","L\xF6rdag"];childSignal=xt.required();getDate(){let n=new Date;return`${this.days[n.getDay()]} ${n.getDate()} ${this.months[n.getMonth()]} ${n.getFullYear()}`}childList=vn.required(pa);handleWebsocketMessage(n){this.childList().handleWebsocketMessage(n)}attendanceChangeEvent=new R;wsUpdateAttendance(n){this.attendanceChangeEvent.emit(n)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=E({type:t,selectors:[["main-panel"]],viewQuery:function(e,i){e&1&&Vn(i.childList,pa,5),e&2&&Hn()},inputs:{childSignal:[1,"childSignal"]},outputs:{childSignal:"childSignalChange",attendanceChangeEvent:"attendanceChangeEvent"},decls:10,vars:4,consts:[[1,"main-card-content"],[1,"main-card-left"],[1,"dagens-datumn"],[1,"childDisplay"],[3,"child"],[1,"main-card-right"],[3,"childSignalChange","childSignal"],[3,"attendanceChangeEvent","childSignalChange","childSignal"]],template:function(e,i){e&1&&(_(0,"mat-card")(1,"mat-card-content",0)(2,"div",1)(3,"mat-card-header")(4,"span",2),Y(5),y()(),_e(6,kP,2,1,"div",3),fe(7,"main-live-journal",4),y(),_(8,"div",5)(9,"main-child-list",6),mt("childSignalChange",function(o){return He(i.childSignal,o)||(i.childSignal=o),o}),y()()()()),e&2&&(C(5),ai("Idag: ",i.getDate()),C(),ye(i.childSignal().name!==""?6:-1),C(),se("child",i.childSignal()),C(2),ft("childSignal",i.childSignal))},dependencies:[pa,ca,Ju,Uo,$o,zo,of],styles:["[_nghost-%COMP%]{display:block;margin:0 auto;border-radius:12px;box-sizing:border-box;width:100%;height:100%}mat-card-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font:var(--mat-sys-headline-medium)}h2[_ngcontent-%COMP%]{margin-bottom:16px}mat-card[_ngcontent-%COMP%]{width:100%;height:100%}.main-card-content[_ngcontent-%COMP%]{display:flex;flex-direction:row;box-sizing:border-box;height:100%}.main-card-left[_ngcontent-%COMP%]{width:100%;height:100%;padding-right:5%;overflow-y:hidden;display:flex;flex-direction:column;flex:1.5}.main-card-right[_ngcontent-%COMP%]{width:100%;height:100%;overflow-y:hidden;min-width:fit-content;overflow-x:clip;display:flex;flex:1;min-width:30%}mat-card-header[_ngcontent-%COMP%]{flex:.5}.childDisplay[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex:.9;background-color:var(--mat-sys-primary-container);color:var(--mat-sys-on-primary-container);border-radius:12px;height:auto;flex:1}main-live-journal[_ngcontent-%COMP%]{flex:4}.spacer[_ngcontent-%COMP%]{flex:1 1 auto}  .mat-mdc-form-field-subscript-wrapper{display:none}"]})};var TP=["*",[["mat-toolbar-row"]]],AP=["*","mat-toolbar-row"],RP=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=S({type:t,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return t})(),Hx=(()=>{class t{_elementRef=d(O);_platform=d(ce);_document=d(L);color;_toolbarRows;constructor(){}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=E({type:t,selectors:[["mat-toolbar"]],contentQueries:function(i,r,o){if(i&1&&Dt(o,RP,5),i&2){let a;U(a=z())&&(r._toolbarRows=a)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(i,r){i&2&&(Ht(r.color?"mat-"+r.color:""),$("mat-toolbar-multiple-rows",r._toolbarRows.length>0)("mat-toolbar-single-row",r._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:AP,decls:2,vars:0,template:function(i,r){i&1&&(De(TP),Q(0),Q(1,1))},styles:[`.mat-toolbar {
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
`],encapsulation:2,changeDetection:0})}return t})();var Ux=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=j({type:t});static \u0275inj=P({imports:[we]})}return t})();var zx=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=j({type:t});static \u0275inj=P({imports:[Js,we,Js]})}return t})();var af=class t{childSignal=V({name:"",id:0,date:"",present:!1});router=d(Rt);socketService=d(ga);mainPanel=vn.required(ba);ngOnInit(){this.socketService.connect(`${rn.wsUrl}/ws`,"group=Nyckelpigorna"),this.socketService.getMessages().subscribe(n=>{if(!("childId"in n)){console.error("Attendance message with incorrect body!");return}let e=n;this.handleWebsocketMessage(e)})}ngOnDestroy(){this.socketService.disconnect()}handleWebsocketMessage(n){this.mainPanel().handleWebsocketMessage(n)}wsUpdateAttendance(n){this.socketService.sendAttendanceUpdate(n)}logout(){document.cookie='jwtToken=""',localStorage.removeItem("token"),this.router.navigateByUrl("/")}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=E({type:t,selectors:[["main-page"]],viewQuery:function(e,i){e&1&&Vn(i.mainPanel,ba,5),e&2&&Hn()},decls:16,vars:1,consts:[[1,"main-nav"],[1,"mat-sys-primary"],[1,"example-spacer"],["matButton","tonal",3,"click"],[1,"main-body"],[1,"main-panel-container"],["mat-stretch-tabs","false","mat-align-tabs","start","dynamicHeight",""],["label","Nyckelpigorna"],[3,"attendanceChangeEvent","childSignalChange","childSignal"],["label","Bj\xF6rnarna"],["label","Lejonen"]],template:function(e,i){e&1&&(_(0,"div",0)(1,"mat-toolbar",1)(2,"span"),Y(3,"K\xEEndGuard"),y(),fe(4,"span",2),_(5,"button",3),H("click",function(){return i.logout()}),Y(6,"Logout"),y()()(),_(7,"div",4)(8,"div",5)(9,"mat-tab-group",6)(10,"mat-tab",7)(11,"main-panel",8),H("attendanceChangeEvent",function(o){return i.wsUpdateAttendance(o)}),mt("childSignalChange",function(o){return He(i.childSignal,o)||(i.childSignal=o),o}),y()(),_(12,"mat-tab",9),Y(13," Content 2 "),y(),_(14,"mat-tab",10),Y(15," Content 3 "),y()()()()),e&2&&(C(11),ft("childSignal",i.childSignal))},dependencies:[Ux,Hx,ba,zx,Jo,hu,aa,Ur],styles:["[_nghost-%COMP%]{background-color:var(--mat-sys-surface);width:100%;height:100%;display:flex}mat-toolbar[_ngcontent-%COMP%]{background-color:var(--mat-sys-primary);color:var(--mat-sys-on-primary);display:flex;align-items:center;position:fixed}mat-tab-group[_ngcontent-%COMP%]{height:100%}mat-tab[_ngcontent-%COMP%]{height:100%}.example-spacer[_ngcontent-%COMP%]{flex:1 1 auto}  .mat-mdc-tab{background-color:var(--mat-sys-surface-container);border-radius:5px;box-shadow:var(--mat-sys-level1)}  .mdc-tab--active{background-color:var(--mat-sys-surface-container);border-radius:5px;box-shadow:var(--mat-sys-level3)}  .mat-mdc-tab-body-wrapper{height:100%}.main-body[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:100%;width:100%}.main-panel-container[_ngcontent-%COMP%]{width:85%;height:80%}"]})};var yb=async t=>{let n=t.url.join(""),e=d(Rt),r=await d(sa).isAuthorized();switch(n){case"":return r?e.parseUrl("/app"):!0;case"app":return r?!0:e.parseUrl("/");default:return!1}};var sf=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=E({type:t,selectors:[["admin-page"]],decls:5,vars:0,consts:[[1,"container"]],template:function(e,i){e&1&&(_(0,"mat-card",0)(1,"mat-card-header"),Y(2," H\xE4r \xE4r en header "),y(),_(3,"mat-card-content"),Y(4," H\xE4r \xE4r content "),y()())},dependencies:[Uo,$o,zo],styles:["[_nghost-%COMP%]{display:flex;justify-content:center;align-items:center;width:100vw;height:100vh;overflow-y:scroll}.container[_ngcontent-%COMP%]{width:85%;height:80%;background-color:--var(mat-sys-surface-container)}"]})};var $x=[{canActivate:[yb],path:"",component:Hu},{canActivate:[yb],path:"app",component:af},{path:"admin",component:sf}];var cf=class t{intercept(n,e){let i=localStorage.getItem("token");if(!i)return e.handle(n);let r=n.clone({setHeaders:W(v({},i?{Authorization:`Bearer ${i}`}:{}),{"ngrok-skip-browser-warning":"true"})});return e.handle(r)}static \u0275fac=function(e){return new(e||t)};static \u0275prov=p({token:t,factory:t.\u0275fac})};var Wx={providers:[Om(),mg($x),Op(Fp()),{provide:Sd,useClass:cf,multi:!0}]};var lf=class t{title=V("frontend");static \u0275fac=function(e){return new(e||t)};static \u0275cmp=E({type:t,selectors:[["app-root"]],decls:1,vars:0,template:function(e,i){e&1&&fe(0,"router-outlet")},dependencies:[Ns],encapsulation:2})};Ip(lf,Wx).catch(t=>console.error(t));
