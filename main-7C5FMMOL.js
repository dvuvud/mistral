var nI=Object.defineProperty,iI=Object.defineProperties;var rI=Object.getOwnPropertyDescriptors;var Yb=Object.getOwnPropertySymbols;var oI=Object.prototype.hasOwnProperty,aI=Object.prototype.propertyIsEnumerable;var Qb=(t,n,e)=>n in t?nI(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e,C=(t,n)=>{for(var e in n||={})oI.call(n,e)&&Qb(t,e,n[e]);if(Yb)for(var e of Yb(n))aI.call(n,e)&&Qb(t,e,n[e]);return t},X=(t,n)=>iI(t,rI(n));var $t=null,Kc=!1,kh=1,sI=null,mt=Symbol("SIGNAL");function K(t){let n=$t;return $t=t,n}function td(){return $t}var io={version:0,lastCleanEpoch:0,dirty:!1,producers:void 0,producersTail:void 0,consumers:void 0,consumersTail:void 0,recomputing:!1,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,kind:"unknown",producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function yr(t){if(Kc)throw new Error("");if($t===null)return;$t.consumerOnSignalRead(t);let n=$t.producersTail;if(n!==void 0&&n.producer===t)return;let e,i=$t.recomputing;if(i&&(e=n!==void 0?n.nextProducer:$t.producers,e!==void 0&&e.producer===t)){$t.producersTail=e,e.lastReadVersion=t.version;return}let r=t.consumersTail;if(r!==void 0&&r.consumer===$t&&(!i||cI(r,$t)))return;let o=aa($t),a={producer:t,consumer:$t,nextProducer:e,prevConsumer:r,lastReadVersion:t.version,nextConsumer:void 0};$t.producersTail=a,n!==void 0?n.nextProducer=a:$t.producers=a,o&&Jb(t,a)}function Zb(){kh++}function nd(t){if(!(aa(t)&&!t.dirty)&&!(!t.dirty&&t.lastCleanEpoch===kh)){if(!t.producerMustRecompute(t)&&!oa(t)){ed(t);return}t.producerRecomputeValue(t),ed(t)}}function Ah(t){if(t.consumers===void 0)return;let n=Kc;Kc=!0;try{for(let e=t.consumers;e!==void 0;e=e.nextConsumer){let i=e.consumer;i.dirty||lI(i)}}finally{Kc=n}}function Rh(){return $t?.consumerAllowSignalWrites!==!1}function lI(t){t.dirty=!0,Ah(t),t.consumerMarkedDirty?.(t)}function ed(t){t.dirty=!1,t.lastCleanEpoch=kh}function Cr(t){return t&&Kb(t),K(t)}function Kb(t){t.producersTail=void 0,t.recomputing=!0}function ro(t,n){K(n),t&&Xb(t)}function Xb(t){t.recomputing=!1;let n=t.producersTail,e=n!==void 0?n.nextProducer:t.producers;if(e!==void 0){if(aa(t))do e=Oh(e);while(e!==void 0);n!==void 0?n.nextProducer=void 0:t.producers=void 0}}function oa(t){for(let n=t.producers;n!==void 0;n=n.nextProducer){let e=n.producer,i=n.lastReadVersion;if(i!==e.version||(nd(e),i!==e.version))return!0}return!1}function wr(t){if(aa(t)){let n=t.producers;for(;n!==void 0;)n=Oh(n)}t.producers=void 0,t.producersTail=void 0,t.consumers=void 0,t.consumersTail=void 0}function Jb(t,n){let e=t.consumersTail,i=aa(t);if(e!==void 0?(n.nextConsumer=e.nextConsumer,e.nextConsumer=n):(n.nextConsumer=void 0,t.consumers=n),n.prevConsumer=e,t.consumersTail=n,!i)for(let r=t.producers;r!==void 0;r=r.nextProducer)Jb(r.producer,r)}function Oh(t){let n=t.producer,e=t.nextProducer,i=t.nextConsumer,r=t.prevConsumer;if(t.nextConsumer=void 0,t.prevConsumer=void 0,i!==void 0?i.prevConsumer=r:n.consumersTail=r,r!==void 0)r.nextConsumer=i;else if(n.consumers=i,!aa(n)){let o=n.producers;for(;o!==void 0;)o=Oh(o)}return e}function aa(t){return t.consumerIsAlwaysLive||t.consumers!==void 0}function id(t){sI?.(t)}function cI(t,n){let e=n.producersTail;if(e!==void 0){let i=n.producers;do{if(i===t)return!0;if(i===e)break;i=i.nextProducer}while(i!==void 0)}return!1}function rd(t,n){return Object.is(t,n)}function Us(t,n){let e=Object.create(dI);e.computation=t,n!==void 0&&(e.equal=n);let i=()=>{if(nd(e),yr(e),e.value===Hs)throw e.error;return e.value};return i[mt]=e,id(e),i}var Xc=Symbol("UNSET"),Jc=Symbol("COMPUTING"),Hs=Symbol("ERRORED"),dI=X(C({},io),{value:Xc,dirty:!0,error:null,equal:rd,kind:"computed",producerMustRecompute(t){return t.value===Xc||t.value===Jc},producerRecomputeValue(t){if(t.value===Jc)throw new Error("");let n=t.value;t.value=Jc;let e=Cr(t),i,r=!1;try{i=t.computation(),K(null),r=n!==Xc&&n!==Hs&&i!==Hs&&t.equal(n,i)}catch(o){i=Hs,t.error=o}finally{ro(t,e)}if(r){t.value=n;return}t.value=i,t.version++}});function uI(){throw new Error}var ey=uI;function ty(t){ey(t)}function Nh(t){ey=t}var mI=null;function Fh(t,n){let e=Object.create(zs);e.value=t,n!==void 0&&(e.equal=n);let i=()=>ny(e);return i[mt]=e,id(e),[i,a=>oo(e,a),a=>Ph(e,a)]}function ny(t){return yr(t),t.value}function oo(t,n){Rh()||ty(t),t.equal(t.value,n)||(t.value=n,fI(t))}function Ph(t,n){Rh()||ty(t),oo(t,n(t.value))}var zs=X(C({},io),{equal:rd,value:void 0,kind:"signal"});function fI(t){t.version++,Zb(),Ah(t),mI?.(t)}var Lh=X(C({},io),{consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!0,dirty:!0,kind:"effect"});function Vh(t){if(t.dirty=!1,t.version>0&&!oa(t))return;t.version++;let n=Cr(t);try{t.cleanup(),t.fn()}finally{ro(t,n)}}function me(t){return typeof t=="function"}function sa(t){let e=t(i=>{Error.call(i),i.stack=new Error().stack});return e.prototype=Object.create(Error.prototype),e.prototype.constructor=e,e}var od=sa(t=>function(e){t(this),this.message=e?`${e.length} errors occurred during unsubscription:
${e.map((i,r)=>`${r+1}) ${i.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=e});function ao(t,n){if(t){let e=t.indexOf(n);0<=e&&t.splice(e,1)}}var oe=class t{constructor(n){this.initialTeardown=n,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let n;if(!this.closed){this.closed=!0;let{_parentage:e}=this;if(e)if(this._parentage=null,Array.isArray(e))for(let o of e)o.remove(this);else e.remove(this);let{initialTeardown:i}=this;if(me(i))try{i()}catch(o){n=o instanceof od?o.errors:[o]}let{_finalizers:r}=this;if(r){this._finalizers=null;for(let o of r)try{iy(o)}catch(a){n=n??[],a instanceof od?n=[...n,...a.errors]:n.push(a)}}if(n)throw new od(n)}}add(n){var e;if(n&&n!==this)if(this.closed)iy(n);else{if(n instanceof t){if(n.closed||n._hasParent(this))return;n._addParent(this)}(this._finalizers=(e=this._finalizers)!==null&&e!==void 0?e:[]).push(n)}}_hasParent(n){let{_parentage:e}=this;return e===n||Array.isArray(e)&&e.includes(n)}_addParent(n){let{_parentage:e}=this;this._parentage=Array.isArray(e)?(e.push(n),e):e?[e,n]:n}_removeParent(n){let{_parentage:e}=this;e===n?this._parentage=null:Array.isArray(e)&&ao(e,n)}remove(n){let{_finalizers:e}=this;e&&ao(e,n),n instanceof t&&n._removeParent(this)}};oe.EMPTY=(()=>{let t=new oe;return t.closed=!0,t})();var Bh=oe.EMPTY;function ad(t){return t instanceof oe||t&&"closed"in t&&me(t.remove)&&me(t.add)&&me(t.unsubscribe)}function iy(t){me(t)?t():t.unsubscribe()}var Qn={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var la={setTimeout(t,n,...e){let{delegate:i}=la;return i?.setTimeout?i.setTimeout(t,n,...e):setTimeout(t,n,...e)},clearTimeout(t){let{delegate:n}=la;return(n?.clearTimeout||clearTimeout)(t)},delegate:void 0};function sd(t){la.setTimeout(()=>{let{onUnhandledError:n}=Qn;if(n)n(t);else throw t})}function $s(){}var ry=jh("C",void 0,void 0);function oy(t){return jh("E",void 0,t)}function ay(t){return jh("N",t,void 0)}function jh(t,n,e){return{kind:t,value:n,error:e}}var so=null;function ca(t){if(Qn.useDeprecatedSynchronousErrorHandling){let n=!so;if(n&&(so={errorThrown:!1,error:null}),t(),n){let{errorThrown:e,error:i}=so;if(so=null,e)throw i}}else t()}function sy(t){Qn.useDeprecatedSynchronousErrorHandling&&so&&(so.errorThrown=!0,so.error=t)}var lo=class extends oe{constructor(n){super(),this.isStopped=!1,n?(this.destination=n,ad(n)&&n.add(this)):this.destination=gI}static create(n,e,i){return new qi(n,e,i)}next(n){this.isStopped?Uh(ay(n),this):this._next(n)}error(n){this.isStopped?Uh(oy(n),this):(this.isStopped=!0,this._error(n))}complete(){this.isStopped?Uh(ry,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(n){this.destination.next(n)}_error(n){try{this.destination.error(n)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},hI=Function.prototype.bind;function Hh(t,n){return hI.call(t,n)}var zh=class{constructor(n){this.partialObserver=n}next(n){let{partialObserver:e}=this;if(e.next)try{e.next(n)}catch(i){ld(i)}}error(n){let{partialObserver:e}=this;if(e.error)try{e.error(n)}catch(i){ld(i)}else ld(n)}complete(){let{partialObserver:n}=this;if(n.complete)try{n.complete()}catch(e){ld(e)}}},qi=class extends lo{constructor(n,e,i){super();let r;if(me(n)||!n)r={next:n??void 0,error:e??void 0,complete:i??void 0};else{let o;this&&Qn.useDeprecatedNextContext?(o=Object.create(n),o.unsubscribe=()=>this.unsubscribe(),r={next:n.next&&Hh(n.next,o),error:n.error&&Hh(n.error,o),complete:n.complete&&Hh(n.complete,o)}):r=n}this.destination=new zh(r)}};function ld(t){Qn.useDeprecatedSynchronousErrorHandling?sy(t):sd(t)}function pI(t){throw t}function Uh(t,n){let{onStoppedNotification:e}=Qn;e&&la.setTimeout(()=>e(t,n))}var gI={closed:!0,next:$s,error:pI,complete:$s};var da=typeof Symbol=="function"&&Symbol.observable||"@@observable";function hn(t){return t}function $h(...t){return Wh(t)}function Wh(t){return t.length===0?hn:t.length===1?t[0]:function(e){return t.reduce((i,r)=>r(i),e)}}var se=(()=>{class t{constructor(e){e&&(this._subscribe=e)}lift(e){let i=new t;return i.source=this,i.operator=e,i}subscribe(e,i,r){let o=vI(e)?e:new qi(e,i,r);return ca(()=>{let{operator:a,source:s}=this;o.add(a?a.call(o,s):s?this._subscribe(o):this._trySubscribe(o))}),o}_trySubscribe(e){try{return this._subscribe(e)}catch(i){e.error(i)}}forEach(e,i){return i=ly(i),new i((r,o)=>{let a=new qi({next:s=>{try{e(s)}catch(l){o(l),a.unsubscribe()}},error:o,complete:r});this.subscribe(a)})}_subscribe(e){var i;return(i=this.source)===null||i===void 0?void 0:i.subscribe(e)}[da](){return this}pipe(...e){return Wh(e)(this)}toPromise(e){return e=ly(e),new e((i,r)=>{let o;this.subscribe(a=>o=a,a=>r(a),()=>i(o))})}}return t.create=n=>new t(n),t})();function ly(t){var n;return(n=t??Qn.Promise)!==null&&n!==void 0?n:Promise}function _I(t){return t&&me(t.next)&&me(t.error)&&me(t.complete)}function vI(t){return t&&t instanceof lo||_I(t)&&ad(t)}function bI(t){return me(t?.lift)}function he(t){return n=>{if(bI(n))return n.lift(function(e){try{return t(e,this)}catch(i){this.error(i)}});throw new TypeError("Unable to lift unknown Observable type")}}function ge(t,n,e,i,r){return new Gh(t,n,e,i,r)}var Gh=class extends lo{constructor(n,e,i,r,o,a){super(n),this.onFinalize=o,this.shouldUnsubscribe=a,this._next=e?function(s){try{e(s)}catch(l){n.error(l)}}:super._next,this._error=r?function(s){try{r(s)}catch(l){n.error(l)}finally{this.unsubscribe()}}:super._error,this._complete=i?function(){try{i()}catch(s){n.error(s)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var n;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:e}=this;super.unsubscribe(),!e&&((n=this.onFinalize)===null||n===void 0||n.call(this))}}};var cy=sa(t=>function(){t(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var S=(()=>{class t extends se{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(e){let i=new cd(this,this);return i.operator=e,i}_throwIfClosed(){if(this.closed)throw new cy}next(e){ca(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let i of this.currentObservers)i.next(e)}})}error(e){ca(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=e;let{observers:i}=this;for(;i.length;)i.shift().error(e)}})}complete(){ca(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:e}=this;for(;e.length;)e.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var e;return((e=this.observers)===null||e===void 0?void 0:e.length)>0}_trySubscribe(e){return this._throwIfClosed(),super._trySubscribe(e)}_subscribe(e){return this._throwIfClosed(),this._checkFinalizedStatuses(e),this._innerSubscribe(e)}_innerSubscribe(e){let{hasError:i,isStopped:r,observers:o}=this;return i||r?Bh:(this.currentObservers=null,o.push(e),new oe(()=>{this.currentObservers=null,ao(o,e)}))}_checkFinalizedStatuses(e){let{hasError:i,thrownError:r,isStopped:o}=this;i?e.error(r):o&&e.complete()}asObservable(){let e=new se;return e.source=this,e}}return t.create=(n,e)=>new cd(n,e),t})(),cd=class extends S{constructor(n,e){super(),this.destination=n,this.source=e}next(n){var e,i;(i=(e=this.destination)===null||e===void 0?void 0:e.next)===null||i===void 0||i.call(e,n)}error(n){var e,i;(i=(e=this.destination)===null||e===void 0?void 0:e.error)===null||i===void 0||i.call(e,n)}complete(){var n,e;(e=(n=this.destination)===null||n===void 0?void 0:n.complete)===null||e===void 0||e.call(n)}_subscribe(n){var e,i;return(i=(e=this.source)===null||e===void 0?void 0:e.subscribe(n))!==null&&i!==void 0?i:Bh}};var ft=class extends S{constructor(n){super(),this._value=n}get value(){return this.getValue()}_subscribe(n){let e=super._subscribe(n);return!e.closed&&n.next(this._value),e}getValue(){let{hasError:n,thrownError:e,_value:i}=this;if(n)throw e;return this._throwIfClosed(),i}next(n){super.next(this._value=n)}};var Ws={now(){return(Ws.delegate||Date).now()},delegate:void 0};var pn=class extends S{constructor(n=1/0,e=1/0,i=Ws){super(),this._bufferSize=n,this._windowTime=e,this._timestampProvider=i,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=e===1/0,this._bufferSize=Math.max(1,n),this._windowTime=Math.max(1,e)}next(n){let{isStopped:e,_buffer:i,_infiniteTimeWindow:r,_timestampProvider:o,_windowTime:a}=this;e||(i.push(n),!r&&i.push(o.now()+a)),this._trimBuffer(),super.next(n)}_subscribe(n){this._throwIfClosed(),this._trimBuffer();let e=this._innerSubscribe(n),{_infiniteTimeWindow:i,_buffer:r}=this,o=r.slice();for(let a=0;a<o.length&&!n.closed;a+=i?1:2)n.next(o[a]);return this._checkFinalizedStatuses(n),e}_trimBuffer(){let{_bufferSize:n,_timestampProvider:e,_buffer:i,_infiniteTimeWindow:r}=this,o=(r?1:2)*n;if(n<1/0&&o<i.length&&i.splice(0,i.length-o),!r){let a=e.now(),s=0;for(let l=1;l<i.length&&i[l]<=a;l+=2)s=l;s&&i.splice(0,s+1)}}};var dd=class extends oe{constructor(n,e){super()}schedule(n,e=0){return this}};var Gs={setInterval(t,n,...e){let{delegate:i}=Gs;return i?.setInterval?i.setInterval(t,n,...e):setInterval(t,n,...e)},clearInterval(t){let{delegate:n}=Gs;return(n?.clearInterval||clearInterval)(t)},delegate:void 0};var ud=class extends dd{constructor(n,e){super(n,e),this.scheduler=n,this.work=e,this.pending=!1}schedule(n,e=0){var i;if(this.closed)return this;this.state=n;let r=this.id,o=this.scheduler;return r!=null&&(this.id=this.recycleAsyncId(o,r,e)),this.pending=!0,this.delay=e,this.id=(i=this.id)!==null&&i!==void 0?i:this.requestAsyncId(o,this.id,e),this}requestAsyncId(n,e,i=0){return Gs.setInterval(n.flush.bind(n,this),i)}recycleAsyncId(n,e,i=0){if(i!=null&&this.delay===i&&this.pending===!1)return e;e!=null&&Gs.clearInterval(e)}execute(n,e){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;let i=this._execute(n,e);if(i)return i;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(n,e){let i=!1,r;try{this.work(n)}catch(o){i=!0,r=o||new Error("Scheduled action threw falsy error")}if(i)return this.unsubscribe(),r}unsubscribe(){if(!this.closed){let{id:n,scheduler:e}=this,{actions:i}=e;this.work=this.state=this.scheduler=null,this.pending=!1,ao(i,this),n!=null&&(this.id=this.recycleAsyncId(e,n,null)),this.delay=null,super.unsubscribe()}}};var ua=class t{constructor(n,e=t.now){this.schedulerActionCtor=n,this.now=e}schedule(n,e=0,i){return new this.schedulerActionCtor(this,n).schedule(i,e)}};ua.now=Ws.now;var md=class extends ua{constructor(n,e=ua.now){super(n,e),this.actions=[],this._active=!1}flush(n){let{actions:e}=this;if(this._active){e.push(n);return}let i;this._active=!0;do if(i=n.execute(n.state,n.delay))break;while(n=e.shift());if(this._active=!1,i){for(;n=e.shift();)n.unsubscribe();throw i}}};var qs=new md(ud),dy=qs;var Xe=new se(t=>t.complete());function fd(t){return t&&me(t.schedule)}function qh(t){return t[t.length-1]}function hd(t){return me(qh(t))?t.pop():void 0}function mi(t){return fd(qh(t))?t.pop():void 0}function uy(t,n){return typeof qh(t)=="number"?t.pop():n}function fy(t,n,e,i){function r(o){return o instanceof e?o:new e(function(a){a(o)})}return new(e||(e=Promise))(function(o,a){function s(u){try{d(i.next(u))}catch(h){a(h)}}function l(u){try{d(i.throw(u))}catch(h){a(h)}}function d(u){u.done?o(u.value):r(u.value).then(s,l)}d((i=i.apply(t,n||[])).next())})}function my(t){var n=typeof Symbol=="function"&&Symbol.iterator,e=n&&t[n],i=0;if(e)return e.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&i>=t.length&&(t=void 0),{value:t&&t[i++],done:!t}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}function co(t){return this instanceof co?(this.v=t,this):new co(t)}function hy(t,n,e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=e.apply(t,n||[]),r,o=[];return r=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),s("next"),s("throw"),s("return",a),r[Symbol.asyncIterator]=function(){return this},r;function a(v){return function(w){return Promise.resolve(w).then(v,h)}}function s(v,w){i[v]&&(r[v]=function(F){return new Promise(function(U,Q){o.push([v,F,U,Q])>1||l(v,F)})},w&&(r[v]=w(r[v])))}function l(v,w){try{d(i[v](w))}catch(F){_(o[0][3],F)}}function d(v){v.value instanceof co?Promise.resolve(v.value.v).then(u,h):_(o[0][2],v)}function u(v){l("next",v)}function h(v){l("throw",v)}function _(v,w){v(w),o.shift(),o.length&&l(o[0][0],o[0][1])}}function py(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n=t[Symbol.asyncIterator],e;return n?n.call(t):(t=typeof my=="function"?my(t):t[Symbol.iterator](),e={},i("next"),i("throw"),i("return"),e[Symbol.asyncIterator]=function(){return this},e);function i(o){e[o]=t[o]&&function(a){return new Promise(function(s,l){a=t[o](a),r(s,l,a.done,a.value)})}}function r(o,a,s,l){Promise.resolve(l).then(function(d){o({value:d,done:s})},a)}}var pd=t=>t&&typeof t.length=="number"&&typeof t!="function";function gd(t){return me(t?.then)}function _d(t){return me(t[da])}function vd(t){return Symbol.asyncIterator&&me(t?.[Symbol.asyncIterator])}function bd(t){return new TypeError(`You provided ${t!==null&&typeof t=="object"?"an invalid object":`'${t}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function yI(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var yd=yI();function Cd(t){return me(t?.[yd])}function wd(t){return hy(this,arguments,function*(){let e=t.getReader();try{for(;;){let{value:i,done:r}=yield co(e.read());if(r)return yield co(void 0);yield yield co(i)}}finally{e.releaseLock()}})}function Dd(t){return me(t?.getReader)}function ze(t){if(t instanceof se)return t;if(t!=null){if(_d(t))return CI(t);if(pd(t))return wI(t);if(gd(t))return DI(t);if(vd(t))return gy(t);if(Cd(t))return xI(t);if(Dd(t))return EI(t)}throw bd(t)}function CI(t){return new se(n=>{let e=t[da]();if(me(e.subscribe))return e.subscribe(n);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function wI(t){return new se(n=>{for(let e=0;e<t.length&&!n.closed;e++)n.next(t[e]);n.complete()})}function DI(t){return new se(n=>{t.then(e=>{n.closed||(n.next(e),n.complete())},e=>n.error(e)).then(null,sd)})}function xI(t){return new se(n=>{for(let e of t)if(n.next(e),n.closed)return;n.complete()})}function gy(t){return new se(n=>{MI(t,n).catch(e=>n.error(e))})}function EI(t){return gy(wd(t))}function MI(t,n){var e,i,r,o;return fy(this,void 0,void 0,function*(){try{for(e=py(t);i=yield e.next(),!i.done;){let a=i.value;if(n.next(a),n.closed)return}}catch(a){r={error:a}}finally{try{i&&!i.done&&(o=e.return)&&(yield o.call(e))}finally{if(r)throw r.error}}n.complete()})}function nn(t,n,e,i=0,r=!1){let o=n.schedule(function(){e(),r?t.add(this.schedule(null,i)):this.unsubscribe()},i);if(t.add(o),!r)return o}function xd(t,n=0){return he((e,i)=>{e.subscribe(ge(i,r=>nn(i,t,()=>i.next(r),n),()=>nn(i,t,()=>i.complete(),n),r=>nn(i,t,()=>i.error(r),n)))})}function Ed(t,n=0){return he((e,i)=>{i.add(t.schedule(()=>e.subscribe(i),n))})}function _y(t,n){return ze(t).pipe(Ed(n),xd(n))}function vy(t,n){return ze(t).pipe(Ed(n),xd(n))}function by(t,n){return new se(e=>{let i=0;return n.schedule(function(){i===t.length?e.complete():(e.next(t[i++]),e.closed||this.schedule())})})}function yy(t,n){return new se(e=>{let i;return nn(e,n,()=>{i=t[yd](),nn(e,n,()=>{let r,o;try{({value:r,done:o}=i.next())}catch(a){e.error(a);return}o?e.complete():e.next(r)},0,!0)}),()=>me(i?.return)&&i.return()})}function Md(t,n){if(!t)throw new Error("Iterable cannot be null");return new se(e=>{nn(e,n,()=>{let i=t[Symbol.asyncIterator]();nn(e,n,()=>{i.next().then(r=>{r.done?e.complete():e.next(r.value)})},0,!0)})})}function Cy(t,n){return Md(wd(t),n)}function wy(t,n){if(t!=null){if(_d(t))return _y(t,n);if(pd(t))return by(t,n);if(gd(t))return vy(t,n);if(vd(t))return Md(t,n);if(Cd(t))return yy(t,n);if(Dd(t))return Cy(t,n)}throw bd(t)}function $e(t,n){return n?wy(t,n):ze(t)}function q(...t){let n=mi(t);return $e(t,n)}function uo(t,n){let e=me(t)?t:()=>t,i=r=>r.error(e());return new se(n?r=>n.schedule(i,0,r):i)}function Ys(t){return!!t&&(t instanceof se||me(t.lift)&&me(t.subscribe))}var mo=sa(t=>function(){t(this),this.name="EmptyError",this.message="no elements in sequence"});function Dy(t){return t instanceof Date&&!isNaN(t)}function le(t,n){return he((e,i)=>{let r=0;e.subscribe(ge(i,o=>{i.next(t.call(n,o,r++))}))})}var{isArray:SI}=Array;function II(t,n){return SI(n)?t(...n):t(n)}function Sd(t){return le(n=>II(t,n))}var{isArray:TI}=Array,{getPrototypeOf:kI,prototype:AI,keys:RI}=Object;function Id(t){if(t.length===1){let n=t[0];if(TI(n))return{args:n,keys:null};if(OI(n)){let e=RI(n);return{args:e.map(i=>n[i]),keys:e}}}return{args:t,keys:null}}function OI(t){return t&&typeof t=="object"&&kI(t)===AI}function Td(t,n){return t.reduce((e,i,r)=>(e[i]=n[r],e),{})}function ma(...t){let n=mi(t),e=hd(t),{args:i,keys:r}=Id(t);if(i.length===0)return $e([],n);let o=new se(NI(i,n,r?a=>Td(r,a):hn));return e?o.pipe(Sd(e)):o}function NI(t,n,e=hn){return i=>{xy(n,()=>{let{length:r}=t,o=new Array(r),a=r,s=r;for(let l=0;l<r;l++)xy(n,()=>{let d=$e(t[l],n),u=!1;d.subscribe(ge(i,h=>{o[l]=h,u||(u=!0,s--),s||i.next(e(o.slice()))},()=>{--a||i.complete()}))},i)},i)}}function xy(t,n,e){t?nn(e,t,n):n()}function Ey(t,n,e,i,r,o,a,s){let l=[],d=0,u=0,h=!1,_=()=>{h&&!l.length&&!d&&n.complete()},v=F=>d<i?w(F):l.push(F),w=F=>{o&&n.next(F),d++;let U=!1;ze(e(F,u++)).subscribe(ge(n,Q=>{r?.(Q),o?v(Q):n.next(Q)},()=>{U=!0},void 0,()=>{if(U)try{for(d--;l.length&&d<i;){let Q=l.shift();a?nn(n,a,()=>w(Q)):w(Q)}_()}catch(Q){n.error(Q)}}))};return t.subscribe(ge(n,v,()=>{h=!0,_()})),()=>{s?.()}}function Lt(t,n,e=1/0){return me(n)?Lt((i,r)=>le((o,a)=>n(i,o,r,a))(ze(t(i,r))),e):(typeof n=="number"&&(e=n),he((i,r)=>Ey(i,r,t,e)))}function Dr(t=1/0){return Lt(hn,t)}function My(){return Dr(1)}function xr(...t){return My()($e(t,mi(t)))}function Zn(t){return new se(n=>{ze(t()).subscribe(n)})}function Qs(...t){let n=hd(t),{args:e,keys:i}=Id(t),r=new se(o=>{let{length:a}=e;if(!a){o.complete();return}let s=new Array(a),l=a,d=a;for(let u=0;u<a;u++){let h=!1;ze(e[u]).subscribe(ge(o,_=>{h||(h=!0,d--),s[u]=_},()=>l--,void 0,()=>{(!l||!h)&&(d||o.next(i?Td(i,s):s),o.complete())}))}});return n?r.pipe(Sd(n)):r}function Zs(t=0,n,e=dy){let i=-1;return n!=null&&(fd(n)?e=n:i=n),new se(r=>{let o=Dy(t)?+t-e.now():t;o<0&&(o=0);let a=0;return e.schedule(function(){r.closed||(r.next(a++),0<=i?this.schedule(void 0,i):r.complete())},o)})}function Ot(...t){let n=mi(t),e=uy(t,1/0),i=t;return i.length?i.length===1?ze(i[0]):Dr(e)($e(i,n)):Xe}function be(t,n){return he((e,i)=>{let r=0;e.subscribe(ge(i,o=>t.call(n,o,r++)&&i.next(o)))})}function Sy(t){return he((n,e)=>{let i=!1,r=null,o=null,a=!1,s=()=>{if(o?.unsubscribe(),o=null,i){i=!1;let d=r;r=null,e.next(d)}a&&e.complete()},l=()=>{o=null,a&&e.complete()};n.subscribe(ge(e,d=>{i=!0,r=d,o||ze(t(d)).subscribe(o=ge(e,s,l))},()=>{a=!0,(!i||!o||o.closed)&&e.complete()}))})}function kd(t,n=qs){return Sy(()=>Zs(t,n))}function Er(t){return he((n,e)=>{let i=null,r=!1,o;i=n.subscribe(ge(e,void 0,void 0,a=>{o=ze(t(a,Er(t)(n))),i?(i.unsubscribe(),i=null,o.subscribe(e)):r=!0})),r&&(i.unsubscribe(),i=null,o.subscribe(e))})}function Mr(t,n){return me(n)?Lt(t,n,1):Lt(t,1)}function Yi(t,n=qs){return he((e,i)=>{let r=null,o=null,a=null,s=()=>{if(r){r.unsubscribe(),r=null;let d=o;o=null,i.next(d)}};function l(){let d=a+t,u=n.now();if(u<d){r=this.schedule(void 0,d-u),i.add(r);return}s()}e.subscribe(ge(i,d=>{o=d,a=n.now(),r||(r=n.schedule(l,t),i.add(r))},()=>{s(),i.complete()},void 0,()=>{o=r=null}))})}function Iy(t){return he((n,e)=>{let i=!1;n.subscribe(ge(e,r=>{i=!0,e.next(r)},()=>{i||e.next(t),e.complete()}))})}function it(t){return t<=0?()=>Xe:he((n,e)=>{let i=0;n.subscribe(ge(e,r=>{++i<=t&&(e.next(r),t<=i&&e.complete())}))})}function Ad(t,n=hn){return t=t??FI,he((e,i)=>{let r,o=!0;e.subscribe(ge(i,a=>{let s=n(a);(o||!t(r,s))&&(o=!1,r=s,i.next(a))}))})}function FI(t,n){return t===n}function Ty(t=PI){return he((n,e)=>{let i=!1;n.subscribe(ge(e,r=>{i=!0,e.next(r)},()=>i?e.complete():e.error(t())))})}function PI(){return new mo}function Sr(t){return he((n,e)=>{try{n.subscribe(e)}finally{e.add(t)}})}function Qi(t,n){let e=arguments.length>=2;return i=>i.pipe(t?be((r,o)=>t(r,o,i)):hn,it(1),e?Iy(n):Ty(()=>new mo))}function Rd(t){return t<=0?()=>Xe:he((n,e)=>{let i=[];n.subscribe(ge(e,r=>{i.push(r),t<i.length&&i.shift()},()=>{for(let r of i)e.next(r);e.complete()},void 0,()=>{i=null}))})}function Od(){return he((t,n)=>{let e,i=!1;t.subscribe(ge(n,r=>{let o=e;e=r,i&&n.next([o,r]),i=!0}))})}function Ks(t={}){let{connector:n=()=>new S,resetOnError:e=!0,resetOnComplete:i=!0,resetOnRefCountZero:r=!0}=t;return o=>{let a,s,l,d=0,u=!1,h=!1,_=()=>{s?.unsubscribe(),s=void 0},v=()=>{_(),a=l=void 0,u=h=!1},w=()=>{let F=a;v(),F?.unsubscribe()};return he((F,U)=>{d++,!h&&!u&&_();let Q=l=l??n();U.add(()=>{d--,d===0&&!h&&!u&&(s=Yh(w,r))}),Q.subscribe(U),!a&&d>0&&(a=new qi({next:Ie=>Q.next(Ie),error:Ie=>{h=!0,_(),s=Yh(v,e,Ie),Q.error(Ie)},complete:()=>{u=!0,_(),s=Yh(v,i),Q.complete()}}),ze(F).subscribe(a))})(o)}}function Yh(t,n,...e){if(n===!0){t();return}if(n===!1)return;let i=new qi({next:()=>{i.unsubscribe(),t()}});return ze(n(...e)).subscribe(i)}function Nd(t,n,e){let i,r=!1;return t&&typeof t=="object"?{bufferSize:i=1/0,windowTime:n=1/0,refCount:r=!1,scheduler:e}=t:i=t??1/0,Ks({connector:()=>new pn(i,n,e),resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:r})}function fo(t){return be((n,e)=>t<=e)}function Je(...t){let n=mi(t);return he((e,i)=>{(n?xr(t,e,n):xr(t,e)).subscribe(i)})}function ht(t,n){return he((e,i)=>{let r=null,o=0,a=!1,s=()=>a&&!r&&i.complete();e.subscribe(ge(i,l=>{r?.unsubscribe();let d=0,u=o++;ze(t(l,u)).subscribe(r=ge(i,h=>i.next(n?n(l,h,u,d++):h),()=>{r=null,s()}))},()=>{a=!0,s()}))})}function ye(t){return he((n,e)=>{ze(t).subscribe(ge(e,()=>e.complete(),$s)),!e.closed&&n.subscribe(e)})}function Qh(t,n=!1){return he((e,i)=>{let r=0;e.subscribe(ge(i,o=>{let a=t(o,r++);(a||n)&&i.next(o),!a&&i.complete()}))})}function st(t,n,e){let i=me(t)||n||e?{next:t,error:n,complete:e}:t;return i?he((r,o)=>{var a;(a=i.subscribe)===null||a===void 0||a.call(i);let s=!0;r.subscribe(ge(o,l=>{var d;(d=i.next)===null||d===void 0||d.call(i,l),o.next(l)},()=>{var l;s=!1,(l=i.complete)===null||l===void 0||l.call(i),o.complete()},l=>{var d;s=!1,(d=i.error)===null||d===void 0||d.call(i,l),o.error(l)},()=>{var l,d;s&&((l=i.unsubscribe)===null||l===void 0||l.call(i)),(d=i.finalize)===null||d===void 0||d.call(i)}))}):hn}var Zh;function Xs(){return Zh}function fi(t){let n=Zh;return Zh=t,n}function Kh(t,n){let e=Xs();if(!e)throw new Error("Current injector is not set.");if(!t.\u0275prov)throw new Error("Token is not an injectable");return e.retrieve(t,n)}var ky=Symbol("NotFound");function fa(t){return t===ky||t?.name==="\u0275NotFound"}function Ay(t){let n=K(null);try{return t()}finally{K(n)}}var Hd="https://angular.dev/best-practices/security#preventing-cross-site-scripting-xss",P=class extends Error{code;constructor(n,e){super(An(n,e)),this.code=n}};function LI(t){return`NG0${Math.abs(t)}`}function An(t,n){return`${LI(t)}${n?": "+n:""}`}var pa=globalThis;function Oe(t){for(let n in t)if(t[n]===Oe)return n;throw Error("")}function Py(t,n){for(let e in n)n.hasOwnProperty(e)&&!t.hasOwnProperty(e)&&(t[e]=n[e])}function ol(t){if(typeof t=="string")return t;if(Array.isArray(t))return`[${t.map(ol).join(", ")}]`;if(t==null)return""+t;let n=t.overriddenName||t.name;if(n)return`${n}`;let e=t.toString();if(e==null)return""+e;let i=e.indexOf(`
`);return i>=0?e.slice(0,i):e}function Ud(t,n){return t?n?`${t} ${n}`:t:n||""}var VI=Oe({__forward_ref__:Oe});function gn(t){return t.__forward_ref__=gn,t}function Vt(t){return dp(t)?t():t}function dp(t){return typeof t=="function"&&t.hasOwnProperty(VI)&&t.__forward_ref__===gn}function b(t){return{token:t.token,providedIn:t.providedIn||null,factory:t.factory,value:void 0}}function z(t){return{providers:t.providers||[],imports:t.imports||[]}}function al(t){return BI(t,zd)}function up(t){return al(t)!==null}function BI(t,n){return t.hasOwnProperty(n)&&t[n]||null}function jI(t){let n=t?.[zd]??null;return n||null}function Jh(t){return t&&t.hasOwnProperty(Pd)?t[Pd]:null}var zd=Oe({\u0275prov:Oe}),Pd=Oe({\u0275inj:Oe}),y=class{_desc;ngMetadataName="InjectionToken";\u0275prov;constructor(n,e){this._desc=n,this.\u0275prov=void 0,typeof e=="number"?this.__NG_ELEMENT_ID__=e:e!==void 0&&(this.\u0275prov=b({token:this,providedIn:e.providedIn||"root",factory:e.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};function mp(t){return t&&!!t.\u0275providers}var fp=Oe({\u0275cmp:Oe}),hp=Oe({\u0275dir:Oe}),pp=Oe({\u0275pipe:Oe}),gp=Oe({\u0275mod:Oe}),el=Oe({\u0275fac:Oe}),vo=Oe({__NG_ELEMENT_ID__:Oe}),Ry=Oe({__NG_ENV_ID__:Oe});function _p(t){return $d(t,"@NgModule"),t[gp]||null}function pi(t){return $d(t,"@Component"),t[fp]||null}function vp(t){return $d(t,"@Directive"),t[hp]||null}function Ly(t){return $d(t,"@Pipe"),t[pp]||null}function $d(t,n){if(t==null)throw new P(-919,!1)}function ga(t){return typeof t=="string"?t:t==null?"":String(t)}var Vy=Oe({ngErrorCode:Oe}),HI=Oe({ngErrorMessage:Oe}),UI=Oe({ngTokenPath:Oe});function bp(t,n){return By("",-200,n)}function Wd(t,n){throw new P(-201,!1)}function By(t,n,e){let i=new P(n,t);return i[Vy]=n,i[HI]=t,e&&(i[UI]=e),i}function zI(t){return t[Vy]}var ep;function jy(){return ep}function Zt(t){let n=ep;return ep=t,n}function yp(t,n,e){let i=al(t);if(i&&i.providedIn=="root")return i.value===void 0?i.value=i.factory():i.value;if(e&8)return null;if(n!==void 0)return n;Wd(t,"")}var $I={},ho=$I,WI="__NG_DI_FLAG__",tp=class{injector;constructor(n){this.injector=n}retrieve(n,e){let i=po(e)||0;try{return this.injector.get(n,i&8?null:ho,i)}catch(r){if(fa(r))return r;throw r}}};function GI(t,n=0){let e=Xs();if(e===void 0)throw new P(-203,!1);if(e===null)return yp(t,void 0,n);{let i=qI(n),r=e.retrieve(t,i);if(fa(r)){if(i.optional)return null;throw r}return r}}function W(t,n=0){return(jy()||GI)(Vt(t),n)}function c(t,n){return W(t,po(n))}function po(t){return typeof t>"u"||typeof t=="number"?t:0|(t.optional&&8)|(t.host&&1)|(t.self&&2)|(t.skipSelf&&4)}function qI(t){return{optional:!!(t&8),host:!!(t&1),self:!!(t&2),skipSelf:!!(t&4)}}function np(t){let n=[];for(let e=0;e<t.length;e++){let i=Vt(t[e]);if(Array.isArray(i)){if(i.length===0)throw new P(900,!1);let r,o=0;for(let a=0;a<i.length;a++){let s=i[a],l=YI(s);typeof l=="number"?l===-1?r=s.token:o|=l:r=s}n.push(W(r,o))}else n.push(W(i))}return n}function YI(t){return t[WI]}function Ir(t,n){let e=t.hasOwnProperty(el);return e?t[el]:null}function Hy(t,n,e){if(t.length!==n.length)return!1;for(let i=0;i<t.length;i++){let r=t[i],o=n[i];if(e&&(r=e(r),o=e(o)),o!==r)return!1}return!0}function Uy(t){return t.flat(Number.POSITIVE_INFINITY)}function Gd(t,n){t.forEach(e=>Array.isArray(e)?Gd(e,n):n(e))}function Cp(t,n,e){n>=t.length?t.push(e):t.splice(n,0,e)}function sl(t,n){return n>=t.length-1?t.pop():t.splice(n,1)[0]}function zy(t,n){let e=[];for(let i=0;i<t;i++)e.push(n);return e}function $y(t,n,e,i){let r=t.length;if(r==n)t.push(e,i);else if(r===1)t.push(i,t[0]),t[0]=e;else{for(r--,t.push(t[r-1],t[r]);r>n;){let o=r-2;t[r]=t[o],r--}t[n]=e,t[n+1]=i}}function ll(t,n,e){let i=_a(t,n);return i>=0?t[i|1]=e:(i=~i,$y(t,i,n,e)),i}function qd(t,n){let e=_a(t,n);if(e>=0)return t[e|1]}function _a(t,n){return QI(t,n,1)}function QI(t,n,e){let i=0,r=t.length>>e;for(;r!==i;){let o=i+(r-i>>1),a=t[o<<e];if(n===a)return o<<e;a>n?r=o:i=o+1}return~(r<<e)}var Ar={},Wt=[],Rr=new y(""),wp=new y("",-1),Dp=new y(""),tl=class{get(n,e=ho){if(e===ho){let r=By("",-201);throw r.name="\u0275NotFound",r}return e}};function gi(t){return{\u0275providers:t}}function Wy(t){return gi([{provide:Rr,multi:!0,useValue:t}])}function Gy(...t){return{\u0275providers:xp(!0,t),\u0275fromNgModule:!0}}function xp(t,...n){let e=[],i=new Set,r,o=a=>{e.push(a)};return Gd(n,a=>{let s=a;Ld(s,o,[],i)&&(r||=[],r.push(s))}),r!==void 0&&qy(r,o),e}function qy(t,n){for(let e=0;e<t.length;e++){let{ngModule:i,providers:r}=t[e];Ep(r,o=>{n(o,i)})}}function Ld(t,n,e,i){if(t=Vt(t),!t)return!1;let r=null,o=Jh(t),a=!o&&pi(t);if(!o&&!a){let l=t.ngModule;if(o=Jh(l),o)r=l;else return!1}else{if(a&&!a.standalone)return!1;r=t}let s=i.has(r);if(a){if(s)return!1;if(i.add(r),a.dependencies){let l=typeof a.dependencies=="function"?a.dependencies():a.dependencies;for(let d of l)Ld(d,n,e,i)}}else if(o){if(o.imports!=null&&!s){i.add(r);let d;Gd(o.imports,u=>{Ld(u,n,e,i)&&(d||=[],d.push(u))}),d!==void 0&&qy(d,n)}if(!s){let d=Ir(r)||(()=>new r);n({provide:r,useFactory:d,deps:Wt},r),n({provide:Dp,useValue:r,multi:!0},r),n({provide:Rr,useValue:()=>W(r),multi:!0},r)}let l=o.providers;if(l!=null&&!s){let d=t;Ep(l,u=>{n(u,d)})}}else return!1;return r!==t&&t.providers!==void 0}function Ep(t,n){for(let e of t)mp(e)&&(e=e.\u0275providers),Array.isArray(e)?Ep(e,n):n(e)}var ZI=Oe({provide:String,useValue:Oe});function Yy(t){return t!==null&&typeof t=="object"&&ZI in t}function KI(t){return!!(t&&t.useExisting)}function XI(t){return!!(t&&t.useFactory)}function go(t){return typeof t=="function"}function Qy(t){return!!t.useClass}var cl=new y(""),Fd={},Oy={},Xh;function va(){return Xh===void 0&&(Xh=new tl),Xh}var Ne=class{},_o=class extends Ne{parent;source;scopes;records=new Map;_ngOnDestroyHooks=new Set;_onDestroyHooks=[];get destroyed(){return this._destroyed}_destroyed=!1;injectorDefTypes;constructor(n,e,i,r){super(),this.parent=e,this.source=i,this.scopes=r,rp(n,a=>this.processProvider(a)),this.records.set(wp,ha(void 0,this)),r.has("environment")&&this.records.set(Ne,ha(void 0,this));let o=this.records.get(cl);o!=null&&typeof o.value=="string"&&this.scopes.add(o.value),this.injectorDefTypes=new Set(this.get(Dp,Wt,{self:!0}))}retrieve(n,e){let i=po(e)||0;try{return this.get(n,ho,i)}catch(r){if(fa(r))return r;throw r}}destroy(){Js(this),this._destroyed=!0;let n=K(null);try{for(let i of this._ngOnDestroyHooks)i.ngOnDestroy();let e=this._onDestroyHooks;this._onDestroyHooks=[];for(let i of e)i()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),K(n)}}onDestroy(n){return Js(this),this._onDestroyHooks.push(n),()=>this.removeOnDestroy(n)}runInContext(n){Js(this);let e=fi(this),i=Zt(void 0),r;try{return n()}finally{fi(e),Zt(i)}}get(n,e=ho,i){if(Js(this),n.hasOwnProperty(Ry))return n[Ry](this);let r=po(i),o,a=fi(this),s=Zt(void 0);try{if(!(r&4)){let d=this.records.get(n);if(d===void 0){let u=iT(n)&&al(n);u&&this.injectableDefInScope(u)?d=ha(ip(n),Fd):d=null,this.records.set(n,d)}if(d!=null)return this.hydrate(n,d,r)}let l=r&2?va():this.parent;return e=r&8&&e===ho?null:e,l.get(n,e)}catch(l){let d=zI(l);throw d===-200||d===-201?new P(d,null):l}finally{Zt(s),fi(a)}}resolveInjectorInitializers(){let n=K(null),e=fi(this),i=Zt(void 0),r;try{let o=this.get(Rr,Wt,{self:!0});for(let a of o)a()}finally{fi(e),Zt(i),K(n)}}toString(){return"R3Injector[...]"}processProvider(n){n=Vt(n);let e=go(n)?n:Vt(n&&n.provide),i=eT(n);if(!go(n)&&n.multi===!0){let r=this.records.get(e);r||(r=ha(void 0,Fd,!0),r.factory=()=>np(r.multi),this.records.set(e,r)),e=n,r.multi.push(n)}this.records.set(e,i)}hydrate(n,e,i){let r=K(null);try{if(e.value===Oy)throw bp("");return e.value===Fd&&(e.value=Oy,e.value=e.factory(void 0,i)),typeof e.value=="object"&&e.value&&nT(e.value)&&this._ngOnDestroyHooks.add(e.value),e.value}finally{K(r)}}injectableDefInScope(n){if(!n.providedIn)return!1;let e=Vt(n.providedIn);return typeof e=="string"?e==="any"||this.scopes.has(e):this.injectorDefTypes.has(e)}removeOnDestroy(n){let e=this._onDestroyHooks.indexOf(n);e!==-1&&this._onDestroyHooks.splice(e,1)}};function ip(t){let n=al(t),e=n!==null?n.factory:Ir(t);if(e!==null)return e;if(t instanceof y)throw new P(-204,!1);if(t instanceof Function)return JI(t);throw new P(-204,!1)}function JI(t){if(t.length>0)throw new P(-204,!1);let e=jI(t);return e!==null?()=>e.factory(t):()=>new t}function eT(t){if(Yy(t))return ha(void 0,t.useValue);{let n=Mp(t);return ha(n,Fd)}}function Mp(t,n,e){let i;if(go(t)){let r=Vt(t);return Ir(r)||ip(r)}else if(Yy(t))i=()=>Vt(t.useValue);else if(XI(t))i=()=>t.useFactory(...np(t.deps||[]));else if(KI(t))i=(r,o)=>W(Vt(t.useExisting),o!==void 0&&o&8?8:void 0);else{let r=Vt(t&&(t.useClass||t.provide));if(tT(t))i=()=>new r(...np(t.deps));else return Ir(r)||ip(r)}return i}function Js(t){if(t.destroyed)throw new P(-205,!1)}function ha(t,n,e=!1){return{factory:t,value:n,multi:e?[]:void 0}}function tT(t){return!!t.deps}function nT(t){return t!==null&&typeof t=="object"&&typeof t.ngOnDestroy=="function"}function iT(t){return typeof t=="function"||typeof t=="object"&&t.ngMetadataName==="InjectionToken"}function rp(t,n){for(let e of t)Array.isArray(e)?rp(e,n):e&&mp(e)?rp(e.\u0275providers,n):n(e)}function wt(t,n){let e;t instanceof _o?(Js(t),e=t):e=new tp(t);let i,r=fi(e),o=Zt(void 0);try{return n()}finally{fi(r),Zt(o)}}function Zy(){return jy()!==void 0||Xs()!=null}var Kn=0,ne=1,ce=2,Ct=3,Rn=4,Kt=5,bo=6,ba=7,lt=8,_n=9,_i=10,Ve=11,ya=12,Sp=13,yo=14,Xt=15,Or=16,Co=17,vi=18,Ki=19,Ip=20,Zi=21,Yd=22,Tr=23,vn=24,wo=25,Xi=26,et=27,Ky=1,Tp=6,Nr=7,dl=8,Do=9,rt=10;function Ji(t){return Array.isArray(t)&&typeof t[Ky]=="object"}function Xn(t){return Array.isArray(t)&&t[Ky]===!0}function kp(t){return(t.flags&4)!==0}function bi(t){return t.componentOffset>-1}function ul(t){return(t.flags&1)===1}function yi(t){return!!t.template}function Ca(t){return(t[ce]&512)!==0}function xo(t){return(t[ce]&256)===256}var Ap="svg",Xy="math";function On(t){for(;Array.isArray(t);)t=t[Kn];return t}function Rp(t,n){return On(n[t])}function bn(t,n){return On(n[t.index])}function Qd(t,n){return t.data[n]}function Op(t,n){return t[n]}function Np(t,n,e,i){e>=t.data.length&&(t.data[e]=null,t.blueprint[e]=null),n[e]=i}function Nn(t,n){let e=n[t];return Ji(e)?e:e[Kn]}function Jy(t){return(t[ce]&4)===4}function Zd(t){return(t[ce]&128)===128}function e0(t){return Xn(t[Ct])}function yn(t,n){return n==null?null:t[n]}function Fp(t){t[Co]=0}function Pp(t){t[ce]&1024||(t[ce]|=1024,Zd(t)&&Eo(t))}function t0(t,n){for(;t>0;)n=n[yo],t--;return n}function ml(t){return!!(t[ce]&9216||t[vn]?.dirty)}function Kd(t){t[_i].changeDetectionScheduler?.notify(8),t[ce]&64&&(t[ce]|=1024),ml(t)&&Eo(t)}function Eo(t){t[_i].changeDetectionScheduler?.notify(0);let n=kr(t);for(;n!==null&&!(n[ce]&8192||(n[ce]|=8192,!Zd(n)));)n=kr(n)}function Lp(t,n){if(xo(t))throw new P(911,!1);t[Zi]===null&&(t[Zi]=[]),t[Zi].push(n)}function n0(t,n){if(t[Zi]===null)return;let e=t[Zi].indexOf(n);e!==-1&&t[Zi].splice(e,1)}function kr(t){let n=t[Ct];return Xn(n)?n[Ct]:n}function Vp(t){return t[ba]??=[]}function Bp(t){return t.cleanup??=[]}function i0(t,n,e,i){let r=Vp(n);r.push(e),t.firstCreatePass&&Bp(t).push(i,r.length-1)}var pe={lFrame:p0(null),bindingsEnabled:!0,skipHydrationRootTNode:null};var op=!1;function r0(){return pe.lFrame.elementDepthCount}function o0(){pe.lFrame.elementDepthCount++}function jp(){pe.lFrame.elementDepthCount--}function Hp(){return pe.bindingsEnabled}function Up(){return pe.skipHydrationRootTNode!==null}function zp(t){return pe.skipHydrationRootTNode===t}function $p(){pe.skipHydrationRootTNode=null}function J(){return pe.lFrame.lView}function We(){return pe.lFrame.tView}function ie(t){return pe.lFrame.contextLView=t,t[lt]}function re(t){return pe.lFrame.contextLView=null,t}function Dt(){let t=Wp();for(;t!==null&&t.type===64;)t=t.parent;return t}function Wp(){return pe.lFrame.currentTNode}function a0(){let t=pe.lFrame,n=t.currentTNode;return t.isParent?n:n.parent}function wa(t,n){let e=pe.lFrame;e.currentTNode=t,e.isParent=n}function Gp(){return pe.lFrame.isParent}function qp(){pe.lFrame.isParent=!1}function s0(){return pe.lFrame.contextLView}function Yp(){return op}function nl(t){let n=op;return op=t,n}function Xd(){let t=pe.lFrame,n=t.bindingRootIndex;return n===-1&&(n=t.bindingRootIndex=t.tView.bindingStartIndex),n}function l0(){return pe.lFrame.bindingIndex}function c0(t){return pe.lFrame.bindingIndex=t}function Ci(){return pe.lFrame.bindingIndex++}function Jd(t){let n=pe.lFrame,e=n.bindingIndex;return n.bindingIndex=n.bindingIndex+t,e}function d0(){return pe.lFrame.inI18n}function u0(t,n){let e=pe.lFrame;e.bindingIndex=e.bindingRootIndex=t,eu(n)}function m0(){return pe.lFrame.currentDirectiveIndex}function eu(t){pe.lFrame.currentDirectiveIndex=t}function f0(t){let n=pe.lFrame.currentDirectiveIndex;return n===-1?null:t[n]}function tu(){return pe.lFrame.currentQueryIndex}function fl(t){pe.lFrame.currentQueryIndex=t}function rT(t){let n=t[ne];return n.type===2?n.declTNode:n.type===1?t[Kt]:null}function Qp(t,n,e){if(e&4){let r=n,o=t;for(;r=r.parent,r===null&&!(e&1);)if(r=rT(o),r===null||(o=o[yo],r.type&10))break;if(r===null)return!1;n=r,t=o}let i=pe.lFrame=h0();return i.currentTNode=n,i.lView=t,!0}function nu(t){let n=h0(),e=t[ne];pe.lFrame=n,n.currentTNode=e.firstChild,n.lView=t,n.tView=e,n.contextLView=t,n.bindingIndex=e.bindingStartIndex,n.inI18n=!1}function h0(){let t=pe.lFrame,n=t===null?null:t.child;return n===null?p0(t):n}function p0(t){let n={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:t,child:null,inI18n:!1};return t!==null&&(t.child=n),n}function g0(){let t=pe.lFrame;return pe.lFrame=t.parent,t.currentTNode=null,t.lView=null,t}var Zp=g0;function iu(){let t=g0();t.isParent=!0,t.tView=null,t.selectedIndex=-1,t.contextLView=null,t.elementDepthCount=0,t.currentDirectiveIndex=-1,t.currentNamespace=null,t.bindingRootIndex=-1,t.bindingIndex=-1,t.currentQueryIndex=0}function _0(t){return(pe.lFrame.contextLView=t0(t,pe.lFrame.contextLView))[lt]}function wi(){return pe.lFrame.selectedIndex}function Fr(t){pe.lFrame.selectedIndex=t}function Da(){let t=pe.lFrame;return Qd(t.tView,t.selectedIndex)}function Di(){pe.lFrame.currentNamespace=Ap}function xa(){oT()}function oT(){pe.lFrame.currentNamespace=null}function v0(){return pe.lFrame.currentNamespace}var b0=!0;function ru(){return b0}function ou(t){b0=t}function ap(t,n=null,e=null,i){let r=Kp(t,n,e,i);return r.resolveInjectorInitializers(),r}function Kp(t,n=null,e=null,i,r=new Set){let o=[e||Wt,Gy(t)],a;return new _o(o,n||va(),a||null,r)}var G=class t{static THROW_IF_NOT_FOUND=ho;static NULL=new tl;static create(n,e){if(Array.isArray(n))return ap({name:""},e,n,"");{let i=n.name??"";return ap({name:i},n.parent,n.providers,i)}}static \u0275prov=b({token:t,providedIn:"any",factory:()=>W(wp)});static __NG_ELEMENT_ID__=-1},Y=new y(""),Bt=(()=>{class t{static __NG_ELEMENT_ID__=aT;static __NG_ENV_ID__=e=>e}return t})(),Vd=class extends Bt{_lView;constructor(n){super(),this._lView=n}get destroyed(){return xo(this._lView)}onDestroy(n){let e=this._lView;return Lp(e,n),()=>n0(e,n)}};function aT(){return new Vd(J())}var y0=!1,C0=new y(""),er=(()=>{class t{taskId=0;pendingTasks=new Set;destroyed=!1;pendingTask=new ft(!1);debugTaskTracker=c(C0,{optional:!0});get hasPendingTasks(){return this.destroyed?!1:this.pendingTask.value}get hasPendingTasksObservable(){return this.destroyed?new se(e=>{e.next(!1),e.complete()}):this.pendingTask}add(){!this.hasPendingTasks&&!this.destroyed&&this.pendingTask.next(!0);let e=this.taskId++;return this.pendingTasks.add(e),this.debugTaskTracker?.add(e),e}has(e){return this.pendingTasks.has(e)}remove(e){this.pendingTasks.delete(e),this.debugTaskTracker?.remove(e),this.pendingTasks.size===0&&this.hasPendingTasks&&this.pendingTask.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this.hasPendingTasks&&this.pendingTask.next(!1),this.destroyed=!0,this.pendingTask.unsubscribe()}static \u0275prov=b({token:t,providedIn:"root",factory:()=>new t})}return t})(),sp=class extends S{__isAsync;destroyRef=void 0;pendingTasks=void 0;constructor(n=!1){super(),this.__isAsync=n,Zy()&&(this.destroyRef=c(Bt,{optional:!0})??void 0,this.pendingTasks=c(er,{optional:!0})??void 0)}emit(n){let e=K(null);try{super.next(n)}finally{K(e)}}subscribe(n,e,i){let r=n,o=e||(()=>null),a=i;if(n&&typeof n=="object"){let l=n;r=l.next?.bind(l),o=l.error?.bind(l),a=l.complete?.bind(l)}this.__isAsync&&(o=this.wrapInTimeout(o),r&&(r=this.wrapInTimeout(r)),a&&(a=this.wrapInTimeout(a)));let s=super.subscribe({next:r,error:o,complete:a});return n instanceof oe&&n.add(s),s}wrapInTimeout(n){return e=>{let i=this.pendingTasks?.add();setTimeout(()=>{try{n(e)}finally{i!==void 0&&this.pendingTasks?.remove(i)}})}}},I=sp;function Bd(...t){}function Xp(t){let n,e;function i(){t=Bd;try{e!==void 0&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(e),n!==void 0&&clearTimeout(n)}catch{}}return n=setTimeout(()=>{t(),i()}),typeof requestAnimationFrame=="function"&&(e=requestAnimationFrame(()=>{t(),i()})),()=>i()}function w0(t){return queueMicrotask(()=>t()),()=>{t=Bd}}var Jp="isAngularZone",il=Jp+"_ID",sT=0,V=class t{hasPendingMacrotasks=!1;hasPendingMicrotasks=!1;isStable=!0;onUnstable=new I(!1);onMicrotaskEmpty=new I(!1);onStable=new I(!1);onError=new I(!1);constructor(n){let{enableLongStackTrace:e=!1,shouldCoalesceEventChangeDetection:i=!1,shouldCoalesceRunChangeDetection:r=!1,scheduleInRootZone:o=y0}=n;if(typeof Zone>"u")throw new P(908,!1);Zone.assertZonePatched();let a=this;a._nesting=0,a._outer=a._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(a._inner=a._inner.fork(new Zone.TaskTrackingZoneSpec)),e&&Zone.longStackTraceZoneSpec&&(a._inner=a._inner.fork(Zone.longStackTraceZoneSpec)),a.shouldCoalesceEventChangeDetection=!r&&i,a.shouldCoalesceRunChangeDetection=r,a.callbackScheduled=!1,a.scheduleInRootZone=o,dT(a)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get(Jp)===!0}static assertInAngularZone(){if(!t.isInAngularZone())throw new P(909,!1)}static assertNotInAngularZone(){if(t.isInAngularZone())throw new P(909,!1)}run(n,e,i){return this._inner.run(n,e,i)}runTask(n,e,i,r){let o=this._inner,a=o.scheduleEventTask("NgZoneEvent: "+r,n,lT,Bd,Bd);try{return o.runTask(a,e,i)}finally{o.cancelTask(a)}}runGuarded(n,e,i){return this._inner.runGuarded(n,e,i)}runOutsideAngular(n){return this._outer.run(n)}},lT={};function eg(t){if(t._nesting==0&&!t.hasPendingMicrotasks&&!t.isStable)try{t._nesting++,t.onMicrotaskEmpty.emit(null)}finally{if(t._nesting--,!t.hasPendingMicrotasks)try{t.runOutsideAngular(()=>t.onStable.emit(null))}finally{t.isStable=!0}}}function cT(t){if(t.isCheckStableRunning||t.callbackScheduled)return;t.callbackScheduled=!0;function n(){Xp(()=>{t.callbackScheduled=!1,lp(t),t.isCheckStableRunning=!0,eg(t),t.isCheckStableRunning=!1})}t.scheduleInRootZone?Zone.root.run(()=>{n()}):t._outer.run(()=>{n()}),lp(t)}function dT(t){let n=()=>{cT(t)},e=sT++;t._inner=t._inner.fork({name:"angular",properties:{[Jp]:!0,[il]:e,[il+e]:!0},onInvokeTask:(i,r,o,a,s,l)=>{if(uT(l))return i.invokeTask(o,a,s,l);try{return Ny(t),i.invokeTask(o,a,s,l)}finally{(t.shouldCoalesceEventChangeDetection&&a.type==="eventTask"||t.shouldCoalesceRunChangeDetection)&&n(),Fy(t)}},onInvoke:(i,r,o,a,s,l,d)=>{try{return Ny(t),i.invoke(o,a,s,l,d)}finally{t.shouldCoalesceRunChangeDetection&&!t.callbackScheduled&&!mT(l)&&n(),Fy(t)}},onHasTask:(i,r,o,a)=>{i.hasTask(o,a),r===o&&(a.change=="microTask"?(t._hasPendingMicrotasks=a.microTask,lp(t),eg(t)):a.change=="macroTask"&&(t.hasPendingMacrotasks=a.macroTask))},onHandleError:(i,r,o,a)=>(i.handleError(o,a),t.runOutsideAngular(()=>t.onError.emit(a)),!1)})}function lp(t){t._hasPendingMicrotasks||(t.shouldCoalesceEventChangeDetection||t.shouldCoalesceRunChangeDetection)&&t.callbackScheduled===!0?t.hasPendingMicrotasks=!0:t.hasPendingMicrotasks=!1}function Ny(t){t._nesting++,t.isStable&&(t.isStable=!1,t.onUnstable.emit(null))}function Fy(t){t._nesting--,eg(t)}var rl=class{hasPendingMicrotasks=!1;hasPendingMacrotasks=!1;isStable=!0;onUnstable=new I;onMicrotaskEmpty=new I;onStable=new I;onError=new I;run(n,e,i){return n.apply(e,i)}runGuarded(n,e,i){return n.apply(e,i)}runOutsideAngular(n){return n()}runTask(n,e,i,r){return n.apply(e,i)}};function uT(t){return D0(t,"__ignore_ng_zone__")}function mT(t){return D0(t,"__scheduler_tick__")}function D0(t,n){return!Array.isArray(t)||t.length!==1?!1:t[0]?.data?.[n]===!0}var Gt=class{_console=console;handleError(n){this._console.error("ERROR",n)}},Cn=new y("",{factory:()=>{let t=c(V),n=c(Ne),e;return i=>{t.runOutsideAngular(()=>{n.destroyed&&!e?setTimeout(()=>{throw i}):(e??=n.get(Gt),e.handleError(i))})}}}),x0={provide:Rr,useValue:()=>{let t=c(Gt,{optional:!0})},multi:!0},fT=new y("",{factory:()=>{let t=c(Y).defaultView;if(!t)return;let n=c(Cn),e=o=>{n(o.reason),o.preventDefault()},i=o=>{o.error?n(o.error):n(new Error(o.message,{cause:o})),o.preventDefault()},r=()=>{t.addEventListener("unhandledrejection",e),t.addEventListener("error",i)};typeof Zone<"u"?Zone.root.run(r):r(),c(Bt).onDestroy(()=>{t.removeEventListener("error",i),t.removeEventListener("unhandledrejection",e)})}});function tg(){return gi([Wy(()=>{c(fT)})])}function E(t,n){let[e,i,r]=Fh(t,n?.equal),o=e,a=o[mt];return o.set=i,o.update=r,o.asReadonly=au.bind(o),o}function au(){let t=this[mt];if(t.readonlyFn===void 0){let n=()=>this();n[mt]=t,t.readonlyFn=n}return t.readonlyFn}var Ea=(()=>{class t{view;node;constructor(e,i){this.view=e,this.node=i}static __NG_ELEMENT_ID__=hT}return t})();function hT(){return new Ea(J(),Dt())}var hi=class{},hl=new y("",{factory:()=>!0});var ng=new y(""),Ma=(()=>{class t{internalPendingTasks=c(er);scheduler=c(hi);errorHandler=c(Cn);add(){let e=this.internalPendingTasks.add();return()=>{this.internalPendingTasks.has(e)&&(this.scheduler.notify(11),this.internalPendingTasks.remove(e))}}run(e){let i=this.add();e().catch(this.errorHandler).finally(i)}static \u0275prov=b({token:t,providedIn:"root",factory:()=>new t})}return t})(),su=(()=>{class t{static \u0275prov=b({token:t,providedIn:"root",factory:()=>new cp})}return t})(),cp=class{dirtyEffectCount=0;queues=new Map;add(n){this.enqueue(n),this.schedule(n)}schedule(n){n.dirty&&this.dirtyEffectCount++}remove(n){let e=n.zone,i=this.queues.get(e);i.has(n)&&(i.delete(n),n.dirty&&this.dirtyEffectCount--)}enqueue(n){let e=n.zone;this.queues.has(e)||this.queues.set(e,new Set);let i=this.queues.get(e);i.has(n)||i.add(n)}flush(){for(;this.dirtyEffectCount>0;){let n=!1;for(let[e,i]of this.queues)e===null?n||=this.flushQueue(i):n||=e.run(()=>this.flushQueue(i));n||(this.dirtyEffectCount=0)}}flushQueue(n){let e=!1;for(let i of n)i.dirty&&(this.dirtyEffectCount--,e=!0,i.run());return e}},jd=class{[mt];constructor(n){this[mt]=n}destroy(){this[mt].destroy()}};function Jt(t,n){let e=n?.injector??c(G),i=n?.manualCleanup!==!0?e.get(Bt):null,r,o=e.get(Ea,null,{optional:!0}),a=e.get(hi);return o!==null?(r=_T(o.view,a,t),i instanceof Vd&&i._lView===o.view&&(i=null)):r=vT(t,e.get(su),a),r.injector=e,i!==null&&(r.onDestroyFns=[i.onDestroy(()=>r.destroy())]),new jd(r)}var E0=X(C({},Lh),{cleanupFns:void 0,zone:null,onDestroyFns:null,run(){let t=nl(!1);try{Vh(this)}finally{nl(t)}},cleanup(){if(!this.cleanupFns?.length)return;let t=K(null);try{for(;this.cleanupFns.length;)this.cleanupFns.pop()()}finally{this.cleanupFns=[],K(t)}}}),pT=X(C({},E0),{consumerMarkedDirty(){this.scheduler.schedule(this),this.notifier.notify(12)},destroy(){if(wr(this),this.onDestroyFns!==null)for(let t of this.onDestroyFns)t();this.cleanup(),this.scheduler.remove(this)}}),gT=X(C({},E0),{consumerMarkedDirty(){this.view[ce]|=8192,Eo(this.view),this.notifier.notify(13)},destroy(){if(wr(this),this.onDestroyFns!==null)for(let t of this.onDestroyFns)t();this.cleanup(),this.view[Tr]?.delete(this)}});function _T(t,n,e){let i=Object.create(gT);return i.view=t,i.zone=typeof Zone<"u"?Zone.current:null,i.notifier=n,i.fn=M0(i,e),t[Tr]??=new Set,t[Tr].add(i),i.consumerMarkedDirty(i),i}function vT(t,n,e){let i=Object.create(pT);return i.fn=M0(i,t),i.scheduler=n,i.notifier=e,i.zone=typeof Zone<"u"?Zone.current:null,i.scheduler.add(i),i.notifier.notify(12),i}function M0(t,n){return()=>{n(e=>(t.cleanupFns??=[]).push(e))}}function El(t){return{toString:t}.toString()}function xT(t){return typeof t=="function"}function sC(t,n,e,i){n!==null?n.applyValueToInputSignal(n,i):t[e]=i}var gu=class{previousValue;currentValue;firstChange;constructor(n,e,i){this.previousValue=n,this.currentValue=e,this.firstChange=i}isFirstChange(){return this.firstChange}},Pe=(()=>{let t=()=>lC;return t.ngInherit=!0,t})();function lC(t){return t.type.prototype.ngOnChanges&&(t.setInput=MT),ET}function ET(){let t=dC(this),n=t?.current;if(n){let e=t.previous;if(e===Ar)t.previous=n;else for(let i in n)e[i]=n[i];t.current=null,this.ngOnChanges(n)}}function MT(t,n,e,i,r){let o=this.declaredInputs[i],a=dC(t)||ST(t,{previous:Ar,current:null}),s=a.current||(a.current={}),l=a.previous,d=l[o];s[o]=new gu(d&&d.currentValue,e,l===Ar),sC(t,n,r,e)}var cC="__ngSimpleChanges__";function dC(t){return t[cC]||null}function ST(t,n){return t[cC]=n}var S0=[];var Fe=function(t,n=null,e){for(let i=0;i<S0.length;i++){let r=S0[i];r(t,n,e)}},xe=(function(t){return t[t.TemplateCreateStart=0]="TemplateCreateStart",t[t.TemplateCreateEnd=1]="TemplateCreateEnd",t[t.TemplateUpdateStart=2]="TemplateUpdateStart",t[t.TemplateUpdateEnd=3]="TemplateUpdateEnd",t[t.LifecycleHookStart=4]="LifecycleHookStart",t[t.LifecycleHookEnd=5]="LifecycleHookEnd",t[t.OutputStart=6]="OutputStart",t[t.OutputEnd=7]="OutputEnd",t[t.BootstrapApplicationStart=8]="BootstrapApplicationStart",t[t.BootstrapApplicationEnd=9]="BootstrapApplicationEnd",t[t.BootstrapComponentStart=10]="BootstrapComponentStart",t[t.BootstrapComponentEnd=11]="BootstrapComponentEnd",t[t.ChangeDetectionStart=12]="ChangeDetectionStart",t[t.ChangeDetectionEnd=13]="ChangeDetectionEnd",t[t.ChangeDetectionSyncStart=14]="ChangeDetectionSyncStart",t[t.ChangeDetectionSyncEnd=15]="ChangeDetectionSyncEnd",t[t.AfterRenderHooksStart=16]="AfterRenderHooksStart",t[t.AfterRenderHooksEnd=17]="AfterRenderHooksEnd",t[t.ComponentStart=18]="ComponentStart",t[t.ComponentEnd=19]="ComponentEnd",t[t.DeferBlockStateStart=20]="DeferBlockStateStart",t[t.DeferBlockStateEnd=21]="DeferBlockStateEnd",t[t.DynamicComponentStart=22]="DynamicComponentStart",t[t.DynamicComponentEnd=23]="DynamicComponentEnd",t[t.HostBindingsUpdateStart=24]="HostBindingsUpdateStart",t[t.HostBindingsUpdateEnd=25]="HostBindingsUpdateEnd",t})(xe||{});function IT(t,n,e){let{ngOnChanges:i,ngOnInit:r,ngDoCheck:o}=n.type.prototype;if(i){let a=lC(n);(e.preOrderHooks??=[]).push(t,a),(e.preOrderCheckHooks??=[]).push(t,a)}r&&(e.preOrderHooks??=[]).push(0-t,r),o&&((e.preOrderHooks??=[]).push(t,o),(e.preOrderCheckHooks??=[]).push(t,o))}function uC(t,n){for(let e=n.directiveStart,i=n.directiveEnd;e<i;e++){let o=t.data[e].type.prototype,{ngAfterContentInit:a,ngAfterContentChecked:s,ngAfterViewInit:l,ngAfterViewChecked:d,ngOnDestroy:u}=o;a&&(t.contentHooks??=[]).push(-e,a),s&&((t.contentHooks??=[]).push(e,s),(t.contentCheckHooks??=[]).push(e,s)),l&&(t.viewHooks??=[]).push(-e,l),d&&((t.viewHooks??=[]).push(e,d),(t.viewCheckHooks??=[]).push(e,d)),u!=null&&(t.destroyHooks??=[]).push(e,u)}}function uu(t,n,e){mC(t,n,3,e)}function mu(t,n,e,i){(t[ce]&3)===e&&mC(t,n,e,i)}function ig(t,n){let e=t[ce];(e&3)===n&&(e&=16383,e+=1,t[ce]=e)}function mC(t,n,e,i){let r=i!==void 0?t[Co]&65535:0,o=i??-1,a=n.length-1,s=0;for(let l=r;l<a;l++)if(typeof n[l+1]=="number"){if(s=n[l],i!=null&&s>=i)break}else n[l]<0&&(t[Co]+=65536),(s<o||o==-1)&&(TT(t,e,n,l),t[Co]=(t[Co]&4294901760)+l+2),l++}function I0(t,n){Fe(xe.LifecycleHookStart,t,n);let e=K(null);try{n.call(t)}finally{K(e),Fe(xe.LifecycleHookEnd,t,n)}}function TT(t,n,e,i){let r=e[i]<0,o=e[i+1],a=r?-e[i]:e[i],s=t[a];r?t[ce]>>14<t[Co]>>16&&(t[ce]&3)===n&&(t[ce]+=16384,I0(s,o)):I0(s,o)}var Ia=-1,Io=class{factory;name;injectImpl;resolving=!1;canSeeViewProviders;multi;componentProviders;index;providerFactory;constructor(n,e,i,r){this.factory=n,this.name=r,this.canSeeViewProviders=e,this.injectImpl=i}};function kT(t){return(t.flags&8)!==0}function AT(t){return(t.flags&16)!==0}function RT(t,n,e){let i=0;for(;i<e.length;){let r=e[i];if(typeof r=="number"){if(r!==0)break;i++;let o=e[i++],a=e[i++],s=e[i++];t.setAttribute(n,a,s,o)}else{let o=r,a=e[++i];OT(o)?t.setProperty(n,o,a):t.setAttribute(n,o,a),i++}}return i}function fC(t){return t===3||t===4||t===6}function OT(t){return t.charCodeAt(0)===64}function ka(t,n){if(!(n===null||n.length===0))if(t===null||t.length===0)t=n.slice();else{let e=-1;for(let i=0;i<n.length;i++){let r=n[i];typeof r=="number"?e=r:e===0||(e===-1||e===2?T0(t,e,r,null,n[++i]):T0(t,e,r,null,null))}}return t}function T0(t,n,e,i,r){let o=0,a=t.length;if(n===-1)a=-1;else for(;o<t.length;){let s=t[o++];if(typeof s=="number"){if(s===n){a=-1;break}else if(s>n){a=o-1;break}}}for(;o<t.length;){let s=t[o];if(typeof s=="number")break;if(s===e){r!==null&&(t[o+1]=r);return}o++,r!==null&&o++}a!==-1&&(t.splice(a,0,n),o=a+1),t.splice(o++,0,e),r!==null&&t.splice(o++,0,r)}function hC(t){return t!==Ia}function _u(t){return t&32767}function NT(t){return t>>16}function vu(t,n){let e=NT(t),i=n;for(;e>0;)i=i[yo],e--;return i}var fg=!0;function bu(t){let n=fg;return fg=t,n}var FT=256,pC=FT-1,gC=5,PT=0,xi={};function LT(t,n,e){let i;typeof e=="string"?i=e.charCodeAt(0)||0:e.hasOwnProperty(vo)&&(i=e[vo]),i==null&&(i=e[vo]=PT++);let r=i&pC,o=1<<r;n.data[t+(r>>gC)]|=o}function yu(t,n){let e=_C(t,n);if(e!==-1)return e;let i=n[ne];i.firstCreatePass&&(t.injectorIndex=n.length,rg(i.data,t),rg(n,null),rg(i.blueprint,null));let r=Qg(t,n),o=t.injectorIndex;if(hC(r)){let a=_u(r),s=vu(r,n),l=s[ne].data;for(let d=0;d<8;d++)n[o+d]=s[a+d]|l[a+d]}return n[o+8]=r,o}function rg(t,n){t.push(0,0,0,0,0,0,0,0,n)}function _C(t,n){return t.injectorIndex===-1||t.parent&&t.parent.injectorIndex===t.injectorIndex||n[t.injectorIndex+8]===null?-1:t.injectorIndex}function Qg(t,n){if(t.parent&&t.parent.injectorIndex!==-1)return t.parent.injectorIndex;let e=0,i=null,r=n;for(;r!==null;){if(i=wC(r),i===null)return Ia;if(e++,r=r[yo],i.injectorIndex!==-1)return i.injectorIndex|e<<16}return Ia}function hg(t,n,e){LT(t,n,e)}function VT(t,n){if(n==="class")return t.classes;if(n==="style")return t.styles;let e=t.attrs;if(e){let i=e.length,r=0;for(;r<i;){let o=e[r];if(fC(o))break;if(o===0)r=r+2;else if(typeof o=="number")for(r++;r<i&&typeof e[r]=="string";)r++;else{if(o===n)return e[r+1];r=r+2}}}return null}function vC(t,n,e){if(e&8||t!==void 0)return t;Wd(n,"NodeInjector")}function bC(t,n,e,i){if(e&8&&i===void 0&&(i=null),(e&3)===0){let r=t[_n],o=Zt(void 0);try{return r?r.get(n,i,e&8):yp(n,i,e&8)}finally{Zt(o)}}return vC(i,n,e)}function yC(t,n,e,i=0,r){if(t!==null){if(n[ce]&2048&&!(i&2)){let a=UT(t,n,e,i,xi);if(a!==xi)return a}let o=CC(t,n,e,i,xi);if(o!==xi)return o}return bC(n,e,i,r)}function CC(t,n,e,i,r){let o=jT(e);if(typeof o=="function"){if(!Qp(n,t,i))return i&1?vC(r,e,i):bC(n,e,i,r);try{let a;if(a=o(i),a==null&&!(i&8))Wd(e);else return a}finally{Zp()}}else if(typeof o=="number"){let a=null,s=_C(t,n),l=Ia,d=i&1?n[Xt][Kt]:null;for((s===-1||i&4)&&(l=s===-1?Qg(t,n):n[s+8],l===Ia||!A0(i,!1)?s=-1:(a=n[ne],s=_u(l),n=vu(l,n)));s!==-1;){let u=n[ne];if(k0(o,s,u.data)){let h=BT(s,n,e,a,i,d);if(h!==xi)return h}l=n[s+8],l!==Ia&&A0(i,n[ne].data[s+8]===d)&&k0(o,s,n)?(a=u,s=_u(l),n=vu(l,n)):s=-1}}return r}function BT(t,n,e,i,r,o){let a=n[ne],s=a.data[t+8],l=i==null?bi(s)&&fg:i!=a&&(s.type&3)!==0,d=r&1&&o===s,u=fu(s,a,e,l,d);return u!==null?vl(n,a,u,s,r):xi}function fu(t,n,e,i,r){let o=t.providerIndexes,a=n.data,s=o&1048575,l=t.directiveStart,d=t.directiveEnd,u=o>>20,h=i?s:s+u,_=r?s+u:d;for(let v=h;v<_;v++){let w=a[v];if(v<l&&e===w||v>=l&&w.type===e)return v}if(r){let v=a[l];if(v&&yi(v)&&v.type===e)return l}return null}function vl(t,n,e,i,r){let o=t[e],a=n.data;if(o instanceof Io){let s=o;if(s.resolving)throw bp("");let l=bu(s.canSeeViewProviders);s.resolving=!0;let d=a[e].type||a[e],u,h=s.injectImpl?Zt(s.injectImpl):null,_=Qp(t,i,0);try{o=t[e]=s.factory(void 0,r,a,t,i),n.firstCreatePass&&e>=i.directiveStart&&IT(e,a[e],n)}finally{h!==null&&Zt(h),bu(l),s.resolving=!1,Zp()}}return o}function jT(t){if(typeof t=="string")return t.charCodeAt(0)||0;let n=t.hasOwnProperty(vo)?t[vo]:void 0;return typeof n=="number"?n>=0?n&pC:HT:n}function k0(t,n,e){let i=1<<t;return!!(e[n+(t>>gC)]&i)}function A0(t,n){return!(t&2)&&!(t&1&&n)}var So=class{_tNode;_lView;constructor(n,e){this._tNode=n,this._lView=e}get(n,e,i){return yC(this._tNode,this._lView,n,po(i),e)}};function HT(){return new So(Dt(),J())}function qe(t){return El(()=>{let n=t.prototype.constructor,e=n[el]||pg(n),i=Object.prototype,r=Object.getPrototypeOf(t.prototype).constructor;for(;r&&r!==i;){let o=r[el]||pg(r);if(o&&o!==e)return o;r=Object.getPrototypeOf(r)}return o=>new o})}function pg(t){return dp(t)?()=>{let n=pg(Vt(t));return n&&n()}:Ir(t)}function UT(t,n,e,i,r){let o=t,a=n;for(;o!==null&&a!==null&&a[ce]&2048&&!Ca(a);){let s=CC(o,a,e,i|2,xi);if(s!==xi)return s;let l=o.parent;if(!l){let d=a[Ip];if(d){let u=d.get(e,xi,i&-5);if(u!==xi)return u}l=wC(a),a=a[yo]}o=l}return r}function wC(t){let n=t[ne],e=n.type;return e===2?n.declTNode:e===1?t[Kt]:null}function Pu(t){return VT(Dt(),t)}function zT(){return Pa(Dt(),J())}function Pa(t,n){return new B(bn(t,n))}var B=(()=>{class t{nativeElement;constructor(e){this.nativeElement=e}static __NG_ELEMENT_ID__=zT}return t})();function DC(t){return t instanceof B?t.nativeElement:t}function $T(){return this._results[Symbol.iterator]()}var tr=class{_emitDistinctChangesOnly;dirty=!0;_onDirty=void 0;_results=[];_changesDetected=!1;_changes=void 0;length=0;first=void 0;last=void 0;get changes(){return this._changes??=new S}constructor(n=!1){this._emitDistinctChangesOnly=n}get(n){return this._results[n]}map(n){return this._results.map(n)}filter(n){return this._results.filter(n)}find(n){return this._results.find(n)}reduce(n,e){return this._results.reduce(n,e)}forEach(n){this._results.forEach(n)}some(n){return this._results.some(n)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(n,e){this.dirty=!1;let i=Uy(n);(this._changesDetected=!Hy(this._results,i,e))&&(this._results=i,this.length=i.length,this.last=i[this.length-1],this.first=i[0])}notifyOnChanges(){this._changes!==void 0&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.next(this)}onDirty(n){this._onDirty=n}setDirty(){this.dirty=!0,this._onDirty?.()}destroy(){this._changes!==void 0&&(this._changes.complete(),this._changes.unsubscribe())}[Symbol.iterator]=$T};function xC(t){return(t.flags&128)===128}var Zg=(function(t){return t[t.OnPush=0]="OnPush",t[t.Eager=1]="Eager",t[t.Default=1]="Default",t})(Zg||{}),EC=new Map,WT=0;function GT(){return WT++}function qT(t){EC.set(t[Ki],t)}function gg(t){EC.delete(t[Ki])}var R0="__ngContext__";function Aa(t,n){Ji(n)?(t[R0]=n[Ki],qT(n)):t[R0]=n}function MC(t){return IC(t[ya])}function SC(t){return IC(t[Rn])}function IC(t){for(;t!==null&&!Xn(t);)t=t[Rn];return t}var YT;function Kg(t){YT=t}var Vr=new y("",{factory:()=>QT}),QT="ng";var Lu=new y(""),Ao=new y("",{providedIn:"platform",factory:()=>"unknown"}),Ml=new y(""),La=new y("",{factory:()=>c(Y).body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});var TC="r";var kC="di";var AC=!1,RC=new y("",{factory:()=>AC});var Vu=new y("");var ZT=(t,n,e,i)=>{};function KT(t,n,e,i){ZT(t,n,e,i)}function Bu(t){return(t.flags&32)===32}var XT=()=>null;function OC(t,n,e=!1){return XT(t,n,e)}function NC(t,n){let e=t.contentQueries;if(e!==null){let i=K(null);try{for(let r=0;r<e.length;r+=2){let o=e[r],a=e[r+1];if(a!==-1){let s=t.data[a];fl(o),s.contentQueries(2,n[a],a)}}}finally{K(i)}}}function _g(t,n,e){fl(0);let i=K(null);try{n(t,e)}finally{K(i)}}function FC(t,n,e){if(kp(n)){let i=K(null);try{let r=n.directiveStart,o=n.directiveEnd;for(let a=r;a<o;a++){let s=t.data[a];if(s.contentQueries){let l=e[a];s.contentQueries(1,l,a)}}}finally{K(i)}}}var ei=(function(t){return t[t.Emulated=0]="Emulated",t[t.None=2]="None",t[t.ShadowDom=3]="ShadowDom",t[t.ExperimentalIsolatedShadowDom=4]="ExperimentalIsolatedShadowDom",t})(ei||{});var lu;function JT(){if(lu===void 0&&(lu=null,pa.trustedTypes))try{lu=pa.trustedTypes.createPolicy("angular",{createHTML:t=>t,createScript:t=>t,createScriptURL:t=>t})}catch{}return lu}function ju(t){return JT()?.createHTML(t)||t}var nr=class{changingThisBreaksApplicationSecurity;constructor(n){this.changingThisBreaksApplicationSecurity=n}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${Hd})`}},vg=class extends nr{getTypeName(){return"HTML"}},bg=class extends nr{getTypeName(){return"Style"}},yg=class extends nr{getTypeName(){return"Script"}},Cg=class extends nr{getTypeName(){return"URL"}},wg=class extends nr{getTypeName(){return"ResourceURL"}};function ti(t){return t instanceof nr?t.changingThisBreaksApplicationSecurity:t}function Ro(t,n){let e=PC(t);if(e!=null&&e!==n){if(e==="ResourceURL"&&n==="URL")return!0;throw new Error(`Required a safe ${n}, got a ${e} (see ${Hd})`)}return e===n}function PC(t){return t instanceof nr&&t.getTypeName()||null}function Xg(t){return new vg(t)}function Jg(t){return new bg(t)}function e_(t){return new yg(t)}function t_(t){return new Cg(t)}function n_(t){return new wg(t)}function ek(t){let n=new xg(t);return tk()?new Dg(n):n}var Dg=class{inertDocumentHelper;constructor(n){this.inertDocumentHelper=n}getInertBodyElement(n){n="<body><remove></remove>"+n;try{let e=new window.DOMParser().parseFromString(ju(n),"text/html").body;return e===null?this.inertDocumentHelper.getInertBodyElement(n):(e.firstChild?.remove(),e)}catch{return null}}},xg=class{defaultDoc;inertDocument;constructor(n){this.defaultDoc=n,this.inertDocument=this.defaultDoc.implementation.createHTMLDocument("sanitization-inert")}getInertBodyElement(n){let e=this.inertDocument.createElement("template");return e.innerHTML=ju(n),e}};function tk(){try{return!!new window.DOMParser().parseFromString(ju(""),"text/html")}catch{return!1}}var nk=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;function Hu(t){return t=String(t),t.match(nk)?t:"unsafe:"+t}function ir(t){let n={};for(let e of t.split(","))n[e]=!0;return n}function Sl(...t){let n={};for(let e of t)for(let i in e)e.hasOwnProperty(i)&&(n[i]=!0);return n}var LC=ir("area,br,col,hr,img,wbr"),VC=ir("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),BC=ir("rp,rt"),ik=Sl(BC,VC),rk=Sl(VC,ir("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")),ok=Sl(BC,ir("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")),O0=Sl(LC,rk,ok,ik),jC=ir("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),ak=ir("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,srcset,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"),sk=ir("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext"),lk=Sl(jC,ak,sk),ck=ir("script,style,template");var Eg=class{sanitizedSomething=!1;buf=[];sanitizeChildren(n){let e=n.firstChild,i=!0,r=[];for(;e;){if(e.nodeType===Node.ELEMENT_NODE?i=this.startElement(e):e.nodeType===Node.TEXT_NODE?this.chars(e.nodeValue):this.sanitizedSomething=!0,i&&e.firstChild){r.push(e),e=mk(e);continue}for(;e;){e.nodeType===Node.ELEMENT_NODE&&this.endElement(e);let o=uk(e);if(o){e=o;break}e=r.pop()}}return this.buf.join("")}startElement(n){let e=N0(n).toLowerCase();if(!O0.hasOwnProperty(e))return this.sanitizedSomething=!0,!ck.hasOwnProperty(e);this.buf.push("<"),this.buf.push(e);let i=n.attributes;for(let r=0;r<i.length;r++){let o=i.item(r),a=o.name,s=a.toLowerCase();if(!lk.hasOwnProperty(s)){this.sanitizedSomething=!0;continue}let l=o.value;jC[s]&&(l=Hu(l)),this.buf.push(" ",a,'="',F0(l),'"')}return this.buf.push(">"),!0}endElement(n){let e=N0(n).toLowerCase();O0.hasOwnProperty(e)&&!LC.hasOwnProperty(e)&&(this.buf.push("</"),this.buf.push(e),this.buf.push(">"))}chars(n){this.buf.push(F0(n))}};function dk(t,n){return(t.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY)!==Node.DOCUMENT_POSITION_CONTAINED_BY}function uk(t){let n=t.nextSibling;if(n&&t!==n.previousSibling)throw HC(n);return n}function mk(t){let n=t.firstChild;if(n&&dk(t,n))throw HC(n);return n}function N0(t){let n=t.nodeName;return typeof n=="string"?n:"FORM"}function HC(t){return new Error(`Failed to sanitize html because the element is clobbered: ${t.outerHTML}`)}var fk=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,hk=/([^\#-~ |!])/g;function F0(t){return t.replace(/&/g,"&amp;").replace(fk,function(n){let e=n.charCodeAt(0),i=n.charCodeAt(1);return"&#"+((e-55296)*1024+(i-56320)+65536)+";"}).replace(hk,function(n){return"&#"+n.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}var cu;function i_(t,n){let e=null;try{cu=cu||ek(t);let i=n?String(n):"";e=cu.getInertBodyElement(i);let r=5,o=i;do{if(r===0)throw new Error("Failed to sanitize html because the input is unstable");r--,i=o,o=e.innerHTML,e=cu.getInertBodyElement(i)}while(i!==o);let s=new Eg().sanitizeChildren(P0(e)||e);return ju(s)}finally{if(e){let i=P0(e)||e;for(;i.firstChild;)i.firstChild.remove()}}}function P0(t){return"content"in t&&pk(t)?t.content:null}function pk(t){return t.nodeType===Node.ELEMENT_NODE&&t.nodeName==="TEMPLATE"}function gk(t,n){return t.createText(n)}function _k(t,n,e){t.setValue(n,e)}function UC(t,n,e){return t.createElement(n,e)}function Cu(t,n,e,i,r){t.insertBefore(n,e,i,r)}function zC(t,n,e){t.appendChild(n,e)}function L0(t,n,e,i,r){i!==null?Cu(t,n,e,i,r):zC(t,n,e)}function $C(t,n,e,i){t.removeChild(null,n,e,i)}function vk(t,n,e){t.setAttribute(n,"style",e)}function bk(t,n,e){e===""?t.removeAttribute(n,"class"):t.setAttribute(n,"class",e)}function WC(t,n,e){let{mergedAttrs:i,classes:r,styles:o}=e;i!==null&&RT(t,n,i),r!==null&&bk(t,n,r),o!==null&&vk(t,n,o)}var jt=(function(t){return t[t.NONE=0]="NONE",t[t.HTML=1]="HTML",t[t.STYLE=2]="STYLE",t[t.SCRIPT=3]="SCRIPT",t[t.URL=4]="URL",t[t.RESOURCE_URL=5]="RESOURCE_URL",t})(jt||{});function GC(t){return t instanceof Function?t():t}function yk(t,n,e){let i=t.length;for(;;){let r=t.indexOf(n,e);if(r===-1)return r;if(r===0||t.charCodeAt(r-1)<=32){let o=n.length;if(r+o===i||t.charCodeAt(r+o)<=32)return r}e=r+1}}var qC="ng-template";function Ck(t,n,e,i){let r=0;if(i){for(;r<n.length&&typeof n[r]=="string";r+=2)if(n[r]==="class"&&yk(n[r+1].toLowerCase(),e,0)!==-1)return!0}else if(r_(t))return!1;if(r=n.indexOf(1,r),r>-1){let o;for(;++r<n.length&&typeof(o=n[r])=="string";)if(o.toLowerCase()===e)return!0}return!1}function r_(t){return t.type===4&&t.value!==qC}function wk(t,n,e){let i=t.type===4&&!e?qC:t.value;return n===i}function Dk(t,n,e){let i=4,r=t.attrs,o=r!==null?Mk(r):0,a=!1;for(let s=0;s<n.length;s++){let l=n[s];if(typeof l=="number"){if(!a&&!Jn(i)&&!Jn(l))return!1;if(a&&Jn(l))continue;a=!1,i=l|i&1;continue}if(!a)if(i&4){if(i=2|i&1,l!==""&&!wk(t,l,e)||l===""&&n.length===1){if(Jn(i))return!1;a=!0}}else if(i&8){if(r===null||!Ck(t,r,l,e)){if(Jn(i))return!1;a=!0}}else{let d=n[++s],u=xk(l,r,r_(t),e);if(u===-1){if(Jn(i))return!1;a=!0;continue}if(d!==""){let h;if(u>o?h="":h=r[u+1].toLowerCase(),i&2&&d!==h){if(Jn(i))return!1;a=!0}}}}return Jn(i)||a}function Jn(t){return(t&1)===0}function xk(t,n,e,i){if(n===null)return-1;let r=0;if(i||!e){let o=!1;for(;r<n.length;){let a=n[r];if(a===t)return r;if(a===3||a===6)o=!0;else if(a===1||a===2){let s=n[++r];for(;typeof s=="string";)s=n[++r];continue}else{if(a===4)break;if(a===0){r+=4;continue}}r+=o?1:2}return-1}else return Sk(n,t)}function YC(t,n,e=!1){for(let i=0;i<n.length;i++)if(Dk(t,n[i],e))return!0;return!1}function Ek(t){let n=t.attrs;if(n!=null){let e=n.indexOf(5);if((e&1)===0)return n[e+1]}return null}function Mk(t){for(let n=0;n<t.length;n++){let e=t[n];if(fC(e))return n}return t.length}function Sk(t,n){let e=t.indexOf(4);if(e>-1)for(e++;e<t.length;){let i=t[e];if(typeof i=="number")return-1;if(i===n)return e;e++}return-1}function Ik(t,n){e:for(let e=0;e<n.length;e++){let i=n[e];if(t.length===i.length){for(let r=0;r<t.length;r++)if(t[r]!==i[r])continue e;return!0}}return!1}function V0(t,n){return t?":not("+n.trim()+")":n}function Tk(t){let n=t[0],e=1,i=2,r="",o=!1;for(;e<t.length;){let a=t[e];if(typeof a=="string")if(i&2){let s=t[++e];r+="["+a+(s.length>0?'="'+s+'"':"")+"]"}else i&8?r+="."+a:i&4&&(r+=" "+a);else r!==""&&!Jn(a)&&(n+=V0(o,r),r=""),i=a,o=o||!Jn(i);e++}return r!==""&&(n+=V0(o,r)),n}function kk(t){return t.map(Tk).join(",")}function Ak(t){let n=[],e=[],i=1,r=2;for(;i<t.length;){let o=t[i];if(typeof o=="string")r===2?o!==""&&n.push(o,t[++i]):r===8&&e.push(o);else{if(!Jn(r))break;r=o}i++}return e.length&&n.push(1,...e),n}var Ht={};function o_(t,n,e,i,r,o,a,s,l,d,u){let h=et+i,_=h+r,v=Rk(h,_),w=typeof d=="function"?d():d;return v[ne]={type:t,blueprint:v,template:e,queries:null,viewQuery:s,declTNode:n,data:v.slice().fill(null,h),bindingStartIndex:h,expandoStartIndex:_,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof o=="function"?o():o,pipeRegistry:typeof a=="function"?a():a,firstChild:null,schemas:l,consts:w,incompleteFirstPass:!1,ssrId:u}}function Rk(t,n){let e=[];for(let i=0;i<n;i++)e.push(i<t?null:Ht);return e}function Ok(t){let n=t.tView;return n===null||n.incompleteFirstPass?t.tView=o_(1,null,t.template,t.decls,t.vars,t.directiveDefs,t.pipeDefs,t.viewQuery,t.schemas,t.consts,t.id):n}function a_(t,n,e,i,r,o,a,s,l,d,u){let h=n.blueprint.slice();return h[Kn]=r,h[ce]=i|4|128|8|64|1024,(d!==null||t&&t[ce]&2048)&&(h[ce]|=2048),Fp(h),h[Ct]=h[yo]=t,h[lt]=e,h[_i]=a||t&&t[_i],h[Ve]=s||t&&t[Ve],h[_n]=l||t&&t[_n]||null,h[Kt]=o,h[Ki]=GT(),h[bo]=u,h[Ip]=d,h[Xt]=n.type==2?t[Xt]:h,h}function Nk(t,n,e){let i=bn(n,t),r=Ok(e),o=t[_i].rendererFactory,a=s_(t,a_(t,r,null,QC(e),i,n,null,o.createRenderer(i,e),null,null,null));return t[n.index]=a}function QC(t){let n=16;return t.signals?n=4096:t.onPush&&(n=64),n}function ZC(t,n,e,i){if(e===0)return-1;let r=n.length;for(let o=0;o<e;o++)n.push(i),t.blueprint.push(i),t.data.push(null);return r}function s_(t,n){return t[ya]?t[Sp][Rn]=n:t[ya]=n,t[Sp]=n,n}function p(t=1){KC(We(),J(),wi()+t,!1)}function KC(t,n,e,i){if(!i)if((n[ce]&3)===3){let o=t.preOrderCheckHooks;o!==null&&uu(n,o,e)}else{let o=t.preOrderHooks;o!==null&&mu(n,o,0,e)}Fr(e)}var Uu=(function(t){return t[t.None=0]="None",t[t.SignalBased=1]="SignalBased",t[t.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",t})(Uu||{});function Mg(t,n,e,i){let r=K(null);try{let[o,a,s]=t.inputs[e],l=null;(a&Uu.SignalBased)!==0&&(l=n[o][mt]),l!==null&&l.transformFn!==void 0?i=l.transformFn(i):s!==null&&(i=s.call(n,i)),t.setInput!==null?t.setInput(n,l,i,e,o):sC(n,l,o,i)}finally{K(r)}}var Ei=(function(t){return t[t.Important=1]="Important",t[t.DashCase=2]="DashCase",t})(Ei||{}),Fk;function l_(t,n){return Fk(t,n)}var XC=new y("",{factory:()=>!1});var Pk=!1,JC=typeof document<"u"&&typeof document?.documentElement?.getAnimations=="function";function Lk(t){return t[_n].get(XC,Pk)}function Vk(t,n,e){let i=bl.get(t);if(i){for(let r of n)i.classList.push(r);for(let r of e)i.cleanupFns.push(r)}else bl.set(t,{classList:n,cleanupFns:e})}function ew(t){let n=bl.get(t);if(n){for(let e of n.cleanupFns)e();bl.delete(t)}wu.delete(t)}var bl=new WeakMap,wu=new WeakMap,Sg=new WeakMap,pl=new WeakSet;function Bk(t,n){let e=Sg.get(t);if(!e||e.length===0)return;let i=n.parentNode,r=n.previousSibling;for(let o=e.length-1;o>=0;o--){let a=e[o],s=a.parentNode;a===n?(e.splice(o,1),pl.add(a),a.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}}))):(r&&a===r||s&&i&&s!==i)&&(e.splice(o,1),a.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}})),a.parentNode?.removeChild(a))}}function jk(t,n){let e=Sg.get(t);e?e.includes(n)||e.push(n):Sg.set(t,[n])}function B0(t){let n=t[Xi]??={};return n.enter??=new Map}function Hk(t){let n=typeof t=="function"?t():t,e=Array.isArray(n)?n:null;return typeof n=="string"&&(e=n.trim().split(/\s+/).filter(i=>i)),e}function Du(t){return t.composedPath?t.composedPath()[0]:t.target}function tw(t,n){let e=wu.get(n);return e===void 0?!0:n===Du(t)&&(e.animationName!==void 0&&t.animationName===e.animationName||e.propertyName!==void 0&&(e.propertyName==="all"||t.propertyName===e.propertyName))}function Uk(t,n,e){let i=t.get(n.index)??{animateFns:[]};i.animateFns.push(e),t.set(n.index,i)}function xu(t){if(!t)return 0;let n=t.toLowerCase().indexOf("ms")>-1?1:1e3;return parseFloat(t)*n}function Mo(t,n){return t.getPropertyValue(n).split(",").map(i=>i.trim())}function zk(t){let n=Mo(t,"transition-property"),e=Mo(t,"transition-duration"),i=Mo(t,"transition-delay"),r={propertyName:"",duration:0,animationName:void 0};for(let o=0;o<n.length;o++){let a=xu(i[o])+xu(e[o]);a>r.duration&&(r.propertyName=n[o],r.duration=a)}return r}function $k(t){let n=Mo(t,"animation-name"),e=Mo(t,"animation-delay"),i=Mo(t,"animation-duration"),r=Mo(t,"animation-iteration-count"),o={animationName:"",propertyName:void 0,duration:0};for(let a=0;a<n.length;a++){let s=xu(e[a])+xu(i[a]),l=r[a];s>o.duration&&l!=="infinite"&&(o.animationName=n[a],o.duration=s)}return o}function nw(t,n){return t!==void 0&&t.duration>n.duration}function iw(t){return(t.animationName!=null||t.propertyName!=null)&&t.duration>0}function Wk(t,n){let e=getComputedStyle(t),i=$k(e),r=zk(e),o=i.duration>r.duration?i:r;nw(n.get(t),o)||iw(o)&&n.set(t,o)}function Gk(t,n,e){if(!e)return;let i=t.getAnimations();return i.length===0?Wk(t,n):qk(t,n,i)}function qk(t,n,e){let i={animationName:void 0,propertyName:void 0,duration:0};for(let r of e){let o=r.effect?.getTiming();if(o?.iterations===1/0)continue;let a=typeof o?.duration=="number"?o.duration:0,s=(o?.delay??0)+a,l=r.playbackRate;l!==void 0&&l!==0&&l!==1&&(s/=Math.abs(l));let d,u;r.animationName?u=r.animationName:d=r.transitionProperty,s>=i.duration&&(i={animationName:u,propertyName:d,duration:s})}nw(n.get(t),i)||iw(i)&&n.set(t,i)}var To=new Set,zu=(function(t){return t[t.CHANGE_DETECTION=0]="CHANGE_DETECTION",t[t.AFTER_NEXT_RENDER=1]="AFTER_NEXT_RENDER",t})(zu||{}),ni=new y(""),j0=new Set;function ii(t){j0.has(t)||(j0.add(t),performance?.mark?.("mark_feature_usage",{detail:{feature:t}}))}var $u=(()=>{class t{impl=null;execute(){this.impl?.execute()}static \u0275prov=b({token:t,providedIn:"root",factory:()=>new t})}return t})(),c_=[0,1,2,3],d_=(()=>{class t{ngZone=c(V);scheduler=c(hi);errorHandler=c(Gt,{optional:!0});sequences=new Set;deferredRegistrations=new Set;executing=!1;constructor(){c(ni,{optional:!0})}execute(){let e=this.sequences.size>0;e&&Fe(xe.AfterRenderHooksStart),this.executing=!0;for(let i of c_)for(let r of this.sequences)if(!(r.erroredOrDestroyed||!r.hooks[i]))try{r.pipelinedValue=this.ngZone.runOutsideAngular(()=>this.maybeTrace(()=>{let o=r.hooks[i];return o(r.pipelinedValue)},r.snapshot))}catch(o){r.erroredOrDestroyed=!0,this.errorHandler?.handleError(o)}this.executing=!1;for(let i of this.sequences)i.afterRun(),i.once&&(this.sequences.delete(i),i.destroy());for(let i of this.deferredRegistrations)this.sequences.add(i);this.deferredRegistrations.size>0&&this.scheduler.notify(7),this.deferredRegistrations.clear(),e&&Fe(xe.AfterRenderHooksEnd)}register(e){let{view:i}=e;i!==void 0?((i[wo]??=[]).push(e),Eo(i),i[ce]|=8192):this.executing?this.deferredRegistrations.add(e):this.addSequence(e)}addSequence(e){this.sequences.add(e),this.scheduler.notify(7)}unregister(e){this.executing&&this.sequences.has(e)?(e.erroredOrDestroyed=!0,e.pipelinedValue=void 0,e.once=!0):(this.sequences.delete(e),this.deferredRegistrations.delete(e))}maybeTrace(e,i){return i?i.run(zu.AFTER_NEXT_RENDER,e):e()}static \u0275prov=b({token:t,providedIn:"root",factory:()=>new t})}return t})(),yl=class{impl;hooks;view;once;snapshot;erroredOrDestroyed=!1;pipelinedValue=void 0;unregisterOnDestroy;constructor(n,e,i,r,o,a=null){this.impl=n,this.hooks=e,this.view=i,this.once=r,this.snapshot=a,this.unregisterOnDestroy=o?.onDestroy(()=>this.destroy())}afterRun(){this.erroredOrDestroyed=!1,this.pipelinedValue=void 0,this.snapshot?.dispose(),this.snapshot=null}destroy(){this.impl.unregister(this),this.unregisterOnDestroy?.();let n=this.view?.[wo];n&&(this.view[wo]=n.filter(e=>e!==this))}};function Ge(t,n){let e=n?.injector??c(G);return ii("NgAfterNextRender"),Qk(t,e,n,!0)}function Yk(t){return t instanceof Function?[void 0,void 0,t,void 0]:[t.earlyRead,t.write,t.mixedReadWrite,t.read]}function Qk(t,n,e,i){let r=n.get($u);r.impl??=n.get(d_);let o=n.get(ni,null,{optional:!0}),a=e?.manualCleanup!==!0?n.get(Bt):null,s=n.get(Ea,null,{optional:!0}),l=new yl(r.impl,Yk(t),s?.view,i,a,o?.snapshot(null));return r.impl.register(l),l}var Wu=new y("",{factory:()=>({queue:new Set,isScheduled:!1,scheduler:null,injector:c(Ne)})});function rw(t,n,e){let i=t.get(Wu);if(Array.isArray(n))for(let r of n)i.queue.add(r),e?.detachedLeaveAnimationFns?.push(r);else i.queue.add(n),e?.detachedLeaveAnimationFns?.push(n);i.scheduler&&i.scheduler(t)}function Zk(t,n){let e=t.get(Wu);if(n.detachedLeaveAnimationFns){for(let i of n.detachedLeaveAnimationFns)e.queue.delete(i);n.detachedLeaveAnimationFns=void 0}}function Kk(t){let n=t.get(Wu);n.isScheduled||(Ge(()=>{n.isScheduled=!1;for(let e of n.queue)e();n.queue.clear()},{injector:n.injector}),n.isScheduled=!0)}function Xk(t){let n=t.get(Wu);n.scheduler=Kk,n.scheduler(t)}function ow(t,n){for(let[e,i]of n)rw(t,i.animateFns)}function H0(t,n,e,i){let r=t?.[Xi]?.enter;n!==null&&r&&r.has(e.index)&&ow(i,r)}function Sa(t,n,e,i,r,o,a,s){if(r!=null){let l,d=!1;Xn(r)?l=r:Ji(r)&&(d=!0,r=r[Kn]);let u=On(r);t===0&&i!==null?(H0(s,i,o,e),a==null?zC(n,i,u):Cu(n,i,u,a||null,!0)):t===1&&i!==null?(H0(s,i,o,e),Cu(n,i,u,a||null,!0),Bk(o,u)):t===2?(s?.[Xi]?.leave?.has(o.index)&&jk(o,u),pl.delete(u),U0(s,o,e,h=>{if(pl.has(u)){pl.delete(u);return}$C(n,u,d,h)})):t===3&&(pl.delete(u),U0(s,o,e,()=>{n.destroyNode(u)})),l!=null&&cA(n,t,e,l,o,i,a)}}function Jk(t,n){aw(t,n),n[Kn]=null,n[Kt]=null}function eA(t,n,e,i,r,o){i[Kn]=r,i[Kt]=n,qu(t,i,e,1,r,o)}function aw(t,n){n[_i].changeDetectionScheduler?.notify(9),qu(t,n,n[Ve],2,null,null)}function tA(t){let n=t[ya];if(!n)return og(t[ne],t);for(;n;){let e=null;if(Ji(n))e=n[ya];else{let i=n[rt];i&&(e=i)}if(!e){for(;n&&!n[Rn]&&n!==t;)Ji(n)&&og(n[ne],n),n=n[Ct];n===null&&(n=t),Ji(n)&&og(n[ne],n),e=n&&n[Rn]}n=e}}function u_(t,n){let e=t[Do],i=e.indexOf(n);e.splice(i,1)}function Gu(t,n){if(xo(n))return;let e=n[Ve];e.destroyNode&&qu(t,n,e,3,null,null),tA(n)}function og(t,n){if(xo(n))return;let e=K(null);try{n[ce]&=-129,n[ce]|=256,n[vn]&&wr(n[vn]),rA(t,n),iA(t,n),n[ne].type===1&&n[Ve].destroy();let i=n[Or];if(i!==null&&Xn(n[Ct])){i!==n[Ct]&&u_(i,n);let r=n[vi];r!==null&&r.detachView(t)}gg(n)}finally{K(e)}}function U0(t,n,e,i){let r=t?.[Xi];if(r==null||r.leave==null||!r.leave.has(n.index))return i(!1);t&&To.add(t[Ki]),rw(e,()=>{if(r.leave&&r.leave.has(n.index)){let a=r.leave.get(n.index),s=[];if(a){for(let l=0;l<a.animateFns.length;l++){let d=a.animateFns[l],{promise:u}=d();s.push(u)}r.detachedLeaveAnimationFns=void 0}r.running=Promise.allSettled(s),nA(t,i)}else t&&To.delete(t[Ki]),i(!1)},r)}function nA(t,n){let e=t[Xi]?.running;if(e){e.then(()=>{t[Xi].running=void 0,To.delete(t[Ki]),n(!0)});return}n(!1)}function iA(t,n){let e=t.cleanup,i=n[ba];if(e!==null)for(let a=0;a<e.length-1;a+=2)if(typeof e[a]=="string"){let s=e[a+3];s>=0?i[s]():i[-s].unsubscribe(),a+=2}else{let s=i[e[a+1]];e[a].call(s)}i!==null&&(n[ba]=null);let r=n[Zi];if(r!==null){n[Zi]=null;for(let a=0;a<r.length;a++){let s=r[a];s()}}let o=n[Tr];if(o!==null){n[Tr]=null;for(let a of o)a.destroy()}}function rA(t,n){let e;if(t!=null&&(e=t.destroyHooks)!=null)for(let i=0;i<e.length;i+=2){let r=n[e[i]];if(!(r instanceof Io)){let o=e[i+1];if(Array.isArray(o))for(let a=0;a<o.length;a+=2){let s=r[o[a]],l=o[a+1];Fe(xe.LifecycleHookStart,s,l);try{l.call(s)}finally{Fe(xe.LifecycleHookEnd,s,l)}}else{Fe(xe.LifecycleHookStart,r,o);try{o.call(r)}finally{Fe(xe.LifecycleHookEnd,r,o)}}}}}function sw(t,n,e){return oA(t,n.parent,e)}function oA(t,n,e){let i=n;for(;i!==null&&i.type&168;)n=i,i=n.parent;if(i===null)return e[Kn];if(bi(i)){let{encapsulation:r}=t.data[i.directiveStart+i.componentOffset];if(r===ei.None||r===ei.Emulated)return null}return bn(i,e)}function lw(t,n,e){return sA(t,n,e)}function aA(t,n,e){return t.type&40?bn(t,e):null}var sA=aA,z0;function m_(t,n,e,i){let r=sw(t,i,n),o=n[Ve],a=i.parent||n[Kt],s=lw(a,i,n);if(r!=null)if(Array.isArray(e))for(let l=0;l<e.length;l++)L0(o,r,e[l],s,!1);else L0(o,r,e,s,!1);z0!==void 0&&z0(o,i,n,e,r)}function gl(t,n){if(n!==null){let e=n.type;if(e&3)return bn(n,t);if(e&4)return Ig(-1,t[n.index]);if(e&8){let i=n.child;if(i!==null)return gl(t,i);{let r=t[n.index];return Xn(r)?Ig(-1,r):On(r)}}else{if(e&128)return gl(t,n.next);if(e&32)return l_(n,t)()||On(t[n.index]);{let i=cw(t,n);if(i!==null){if(Array.isArray(i))return i[0];let r=kr(t[Xt]);return gl(r,i)}else return gl(t,n.next)}}}return null}function cw(t,n){if(n!==null){let i=t[Xt][Kt],r=n.projection;return i.projection[r]}return null}function Ig(t,n){let e=rt+t+1;if(e<n.length){let i=n[e],r=i[ne].firstChild;if(r!==null)return gl(i,r)}return n[Nr]}function f_(t,n,e,i,r,o,a){for(;e!=null;){let s=i[_n];if(e.type===128){e=e.next;continue}let l=i[e.index],d=e.type;if(a&&n===0&&(l&&Aa(On(l),i),e.flags|=2),!Bu(e))if(d&8)f_(t,n,e.child,i,r,o,!1),Sa(n,t,s,r,l,e,o,i);else if(d&32){let u=l_(e,i),h;for(;h=u();)Sa(n,t,s,r,h,e,o,i);Sa(n,t,s,r,l,e,o,i)}else d&16?dw(t,n,i,e,r,o):Sa(n,t,s,r,l,e,o,i);e=a?e.projectionNext:e.next}}function qu(t,n,e,i,r,o){f_(e,i,t.firstChild,n,r,o,!1)}function lA(t,n,e){let i=n[Ve],r=sw(t,e,n),o=e.parent||n[Kt],a=lw(o,e,n);dw(i,0,n,e,r,a)}function dw(t,n,e,i,r,o){let a=e[Xt],l=a[Kt].projection[i.projection];if(Array.isArray(l))for(let d=0;d<l.length;d++){let u=l[d];Sa(n,t,e[_n],r,u,i,o,e)}else{let d=l,u=a[Ct];xC(i)&&(d.flags|=128),f_(t,n,d,u,r,o,!0)}}function cA(t,n,e,i,r,o,a){let s=i[Nr],l=On(i);s!==l&&Sa(n,t,e,o,s,r,a);for(let d=rt;d<i.length;d++){let u=i[d];qu(u[ne],u,t,n,o,s)}}function dA(t,n,e,i,r){if(n)r?t.addClass(e,i):t.removeClass(e,i);else{let o=i.indexOf("-")===-1?void 0:Ei.DashCase;r==null?t.removeStyle(e,i,o):(typeof r=="string"&&r.endsWith("!important")&&(r=r.slice(0,-10),o|=Ei.Important),t.setStyle(e,i,r,o))}}function uw(t,n,e,i,r){let o=wi(),a=i&2;try{Fr(-1),a&&n.length>et&&KC(t,n,et,!1);let s=a?xe.TemplateUpdateStart:xe.TemplateCreateStart;Fe(s,r,e),e(i,r)}finally{Fr(o);let s=a?xe.TemplateUpdateEnd:xe.TemplateCreateEnd;Fe(s,r,e)}}function h_(t,n,e){pA(t,n,e),(e.flags&64)===64&&gA(t,n,e)}function Yu(t,n,e=bn){let i=n.localNames;if(i!==null){let r=n.index+1;for(let o=0;o<i.length;o+=2){let a=i[o+1],s=a===-1?e(n,t):t[a];t[r++]=s}}}function uA(t,n,e,i){let o=i.get(RC,AC)||e===ei.ShadowDom||e===ei.ExperimentalIsolatedShadowDom,a=t.selectRootElement(n,o);return mA(a),a}function mA(t){fA(t)}var fA=()=>null;function hA(t){return t==="class"?"className":t==="for"?"htmlFor":t==="formaction"?"formAction":t==="innerHtml"?"innerHTML":t==="readonly"?"readOnly":t==="tabindex"?"tabIndex":t}function mw(t,n,e,i,r,o){let a=n[ne];if(Qu(t,a,n,e,i)){bi(t)&&hw(n,t.index);return}t.type&3&&(e=hA(e)),fw(t,n,e,i,r,o)}function fw(t,n,e,i,r,o){if(t.type&3){let a=bn(t,n);i=o!=null?o(i,t.value||"",e):i,r.setProperty(a,e,i)}else t.type&12}function hw(t,n){let e=Nn(n,t);e[ce]&16||(e[ce]|=64)}function pA(t,n,e){let i=e.directiveStart,r=e.directiveEnd;bi(e)&&Nk(n,e,t.data[i+e.componentOffset]),t.firstCreatePass||yu(e,n);let o=e.initialInputs;for(let a=i;a<r;a++){let s=t.data[a],l=vl(n,t,a,e);if(Aa(l,n),o!==null&&bA(n,a-i,l,s,e,o),yi(s)){let d=Nn(e.index,n);d[lt]=vl(n,t,a,e)}}}function gA(t,n,e){let i=e.directiveStart,r=e.directiveEnd,o=e.index,a=m0();try{Fr(o);for(let s=i;s<r;s++){let l=t.data[s],d=n[s];eu(s),(l.hostBindings!==null||l.hostVars!==0||l.hostAttrs!==null)&&_A(l,d)}}finally{Fr(-1),eu(a)}}function _A(t,n){t.hostBindings!==null&&t.hostBindings(1,n)}function pw(t,n){let e=t.directiveRegistry,i=null;if(e)for(let r=0;r<e.length;r++){let o=e[r];YC(n,o.selectors,!1)&&(i??=[],yi(o)?i.unshift(o):i.push(o))}return i}function vA(t,n,e,i,r,o){let a=bn(t,n);gw(n[Ve],a,o,t.value,e,i,r)}function gw(t,n,e,i,r,o,a){if(o==null)t.removeAttribute(n,r,e);else{let s=a==null?ga(o):a(o,i||"",r);t.setAttribute(n,r,s,e)}}function bA(t,n,e,i,r,o){let a=o[n];if(a!==null)for(let s=0;s<a.length;s+=2){let l=a[s],d=a[s+1];Mg(i,e,l,d)}}function _w(t,n,e,i,r){let o=et+e,a=n[ne],s=r(a,n,t,i,e);n[o]=s,wa(t,!0);let l=t.type===2;return l?(WC(n[Ve],s,t),(r0()===0||ul(t))&&Aa(s,n),o0()):Aa(s,n),ru()&&(!l||!Bu(t))&&m_(a,n,s,t),t}function vw(t){let n=t;return Gp()?qp():(n=n.parent,wa(n,!1)),n}function yA(t,n){let e=t[_n];if(!e)return;let i;try{i=e.get(Cn,null)}catch{i=null}i?.(n)}function Qu(t,n,e,i,r){let o=t.inputs?.[i],a=t.hostDirectiveInputs?.[i],s=!1;if(a)for(let l=0;l<a.length;l+=2){let d=a[l],u=a[l+1],h=n.data[d];Mg(h,e[d],u,r),s=!0}if(o)for(let l of o){let d=e[l],u=n.data[l];Mg(u,d,i,r),s=!0}return s}function CA(t,n){let e=Nn(n,t),i=e[ne];wA(i,e);let r=e[Kn];r!==null&&e[bo]===null&&(e[bo]=OC(r,e[_n])),Fe(xe.ComponentStart);try{p_(i,e,e[lt])}finally{Fe(xe.ComponentEnd,e[lt])}}function wA(t,n){for(let e=n.length;e<t.blueprint.length;e++)n.push(t.blueprint[e])}function p_(t,n,e){nu(n);try{let i=t.viewQuery;i!==null&&_g(1,i,e);let r=t.template;r!==null&&uw(t,n,r,1,e),t.firstCreatePass&&(t.firstCreatePass=!1),n[vi]?.finishViewCreation(t),t.staticContentQueries&&NC(t,n),t.staticViewQueries&&_g(2,t.viewQuery,e);let o=t.components;o!==null&&DA(n,o)}catch(i){throw t.firstCreatePass&&(t.incompleteFirstPass=!0,t.firstCreatePass=!1),i}finally{n[ce]&=-5,iu()}}function DA(t,n){for(let e=0;e<n.length;e++)CA(t,n[e])}function Il(t,n,e,i){let r=K(null);try{let o=n.tView,s=t[ce]&4096?4096:16,l=a_(t,o,e,s,null,n,null,null,i?.injector??null,i?.embeddedViewInjector??null,i?.dehydratedView??null),d=t[n.index];l[Or]=d;let u=t[vi];return u!==null&&(l[vi]=u.createEmbeddedView(o)),p_(o,l,e),l}finally{K(r)}}function Ra(t,n){return!n||n.firstChild===null||xC(t)}function Cl(t,n,e,i,r=!1){for(;e!==null;){if(e.type===128){e=r?e.projectionNext:e.next;continue}let o=n[e.index];o!==null&&i.push(On(o)),Xn(o)&&bw(o,i);let a=e.type;if(a&8)Cl(t,n,e.child,i);else if(a&32){let s=l_(e,n),l;for(;l=s();)i.push(l)}else if(a&16){let s=cw(n,e);if(Array.isArray(s))i.push(...s);else{let l=kr(n[Xt]);Cl(l[ne],l,s,i,!0)}}e=r?e.projectionNext:e.next}return i}function bw(t,n){for(let e=rt;e<t.length;e++){let i=t[e],r=i[ne].firstChild;r!==null&&Cl(i[ne],i,r,n)}t[Nr]!==t[Kn]&&n.push(t[Nr])}function yw(t){if(t[wo]!==null){for(let n of t[wo])n.impl.addSequence(n);t[wo].length=0}}var Cw=[];function xA(t){return t[vn]??EA(t)}function EA(t){let n=Cw.pop()??Object.create(SA);return n.lView=t,n}function MA(t){t.lView[vn]!==t&&(t.lView=null,Cw.push(t))}var SA=X(C({},io),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:t=>{Eo(t.lView)},consumerOnSignalRead(){this.lView[vn]=this}});function IA(t){let n=t[vn]??Object.create(TA);return n.lView=t,n}var TA=X(C({},io),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:t=>{let n=kr(t.lView);for(;n&&!ww(n[ne]);)n=kr(n);n&&Pp(n)},consumerOnSignalRead(){this.lView[vn]=this}});function ww(t){return t.type!==2}function Dw(t){if(t[Tr]===null)return;let n=!0;for(;n;){let e=!1;for(let i of t[Tr])i.dirty&&(e=!0,i.zone===null||Zone.current===i.zone?i.run():i.zone.run(()=>i.run()));n=e&&!!(t[ce]&8192)}}var kA=100;function xw(t,n=0){let i=t[_i].rendererFactory,r=!1;r||i.begin?.();try{AA(t,n)}finally{r||i.end?.()}}function AA(t,n){let e=Yp();try{nl(!0),Tg(t,n);let i=0;for(;ml(t);){if(i===kA)throw new P(103,!1);i++,Tg(t,1)}}finally{nl(e)}}function RA(t,n,e,i){if(xo(n))return;let r=n[ce],o=!1,a=!1;nu(n);let s=!0,l=null,d=null;o||(ww(t)?(d=xA(n),l=Cr(d)):td()===null?(s=!1,d=IA(n),l=Cr(d)):n[vn]&&(wr(n[vn]),n[vn]=null));try{Fp(n),c0(t.bindingStartIndex),e!==null&&uw(t,n,e,2,i);let u=(r&3)===3;if(!o)if(u){let v=t.preOrderCheckHooks;v!==null&&uu(n,v,null)}else{let v=t.preOrderHooks;v!==null&&mu(n,v,0,null),ig(n,0)}if(a||OA(n),Dw(n),Ew(n,0),t.contentQueries!==null&&NC(t,n),!o)if(u){let v=t.contentCheckHooks;v!==null&&uu(n,v)}else{let v=t.contentHooks;v!==null&&mu(n,v,1),ig(n,1)}FA(t,n);let h=t.components;h!==null&&Sw(n,h,0);let _=t.viewQuery;if(_!==null&&_g(2,_,i),!o)if(u){let v=t.viewCheckHooks;v!==null&&uu(n,v)}else{let v=t.viewHooks;v!==null&&mu(n,v,2),ig(n,2)}if(t.firstUpdatePass===!0&&(t.firstUpdatePass=!1),n[Yd]){for(let v of n[Yd])v();n[Yd]=null}o||(yw(n),n[ce]&=-73)}catch(u){throw o||Eo(n),u}finally{d!==null&&(ro(d,l),s&&MA(d)),iu()}}function Ew(t,n){for(let e=MC(t);e!==null;e=SC(e))for(let i=rt;i<e.length;i++){let r=e[i];Mw(r,n)}}function OA(t){for(let n=MC(t);n!==null;n=SC(n)){if(!(n[ce]&2))continue;let e=n[Do];for(let i=0;i<e.length;i++){let r=e[i];Pp(r)}}}function NA(t,n,e){Fe(xe.ComponentStart);let i=Nn(n,t);try{Mw(i,e)}finally{Fe(xe.ComponentEnd,i[lt])}}function Mw(t,n){Zd(t)&&Tg(t,n)}function Tg(t,n){let i=t[ne],r=t[ce],o=t[vn],a=!!(n===0&&r&16);if(a||=!!(r&64&&n===0),a||=!!(r&1024),a||=!!(o?.dirty&&oa(o)),a||=!1,o&&(o.dirty=!1),t[ce]&=-9217,a)RA(i,t,i.template,t[lt]);else if(r&8192){let s=K(null);try{Dw(t),Ew(t,1);let l=i.components;l!==null&&Sw(t,l,1),yw(t)}finally{K(s)}}}function Sw(t,n,e){for(let i=0;i<n.length;i++)NA(t,n[i],e)}function FA(t,n){let e=t.hostBindingOpCodes;if(e!==null)try{for(let i=0;i<e.length;i++){let r=e[i];if(r<0)Fr(~r);else{let o=r,a=e[++i],s=e[++i];u0(a,o);let l=n[o];Fe(xe.HostBindingsUpdateStart,l);try{s(2,l)}finally{Fe(xe.HostBindingsUpdateEnd,l)}}}}finally{Fr(-1)}}function g_(t,n){let e=Yp()?64:1088;for(t[_i].changeDetectionScheduler?.notify(n);t;){t[ce]|=e;let i=kr(t);if(Ca(t)&&!i)return t;t=i}return null}function Iw(t,n,e,i){return[t,!0,0,n,null,i,null,e,null,null]}function Tw(t,n){let e=rt+n;if(e<t.length)return t[e]}function Tl(t,n,e,i=!0){let r=n[ne];if(PA(r,n,t,e),i){let a=Ig(e,t),s=n[Ve],l=s.parentNode(t[Nr]);l!==null&&eA(r,t[Kt],s,n,l,a)}let o=n[bo];o!==null&&o.firstChild!==null&&(o.firstChild=null)}function kw(t,n){let e=wl(t,n);return e!==void 0&&Gu(e[ne],e),e}function wl(t,n){if(t.length<=rt)return;let e=rt+n,i=t[e];if(i){let r=i[Or];r!==null&&r!==t&&u_(r,i),n>0&&(t[e-1][Rn]=i[Rn]);let o=sl(t,rt+n);Jk(i[ne],i);let a=o[vi];a!==null&&a.detachView(o[ne]),i[Ct]=null,i[Rn]=null,i[ce]&=-129}return i}function PA(t,n,e,i){let r=rt+i,o=e.length;i>0&&(e[r-1][Rn]=n),i<o-rt?(n[Rn]=e[r],Cp(e,rt+i,n)):(e.push(n),n[Rn]=null),n[Ct]=e;let a=n[Or];a!==null&&e!==a&&Aw(a,n);let s=n[vi];s!==null&&s.insertView(t),Kd(n),n[ce]|=128}function Aw(t,n){let e=t[Do],i=n[Ct];if(Ji(i))t[ce]|=2;else{let r=i[Ct][Xt];n[Xt]!==r&&(t[ce]|=2)}e===null?t[Do]=[n]:e.push(n)}var Pr=class{_lView;_cdRefInjectingView;_appRef=null;_attachedToViewContainer=!1;exhaustive;get rootNodes(){let n=this._lView,e=n[ne];return Cl(e,n,e.firstChild,[])}constructor(n,e){this._lView=n,this._cdRefInjectingView=e}get context(){return this._lView[lt]}set context(n){this._lView[lt]=n}get destroyed(){return xo(this._lView)}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let n=this._lView[Ct];if(Xn(n)){let e=n[dl],i=e?e.indexOf(this):-1;i>-1&&(wl(n,i),sl(e,i))}this._attachedToViewContainer=!1}Gu(this._lView[ne],this._lView)}onDestroy(n){Lp(this._lView,n)}markForCheck(){g_(this._cdRefInjectingView||this._lView,4)}detach(){this._lView[ce]&=-129}reattach(){Kd(this._lView),this._lView[ce]|=128}detectChanges(){this._lView[ce]|=1024,xw(this._lView)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new P(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null;let n=Ca(this._lView),e=this._lView[Or];e!==null&&!n&&u_(e,this._lView),aw(this._lView[ne],this._lView)}attachToAppRef(n){if(this._attachedToViewContainer)throw new P(902,!1);this._appRef=n;let e=Ca(this._lView),i=this._lView[Or];i!==null&&!e&&Aw(i,this._lView),Kd(this._lView)}};var pt=(()=>{class t{_declarationLView;_declarationTContainer;elementRef;static __NG_ELEMENT_ID__=LA;constructor(e,i,r){this._declarationLView=e,this._declarationTContainer=i,this.elementRef=r}get ssrId(){return this._declarationTContainer.tView?.ssrId||null}createEmbeddedView(e,i){return this.createEmbeddedViewImpl(e,i)}createEmbeddedViewImpl(e,i,r){let o=Il(this._declarationLView,this._declarationTContainer,e,{embeddedViewInjector:i,dehydratedView:r});return new Pr(o)}}return t})();function LA(){return Zu(Dt(),J())}function Zu(t,n){return t.type&4?new pt(n,t,Pa(t,n)):null}function Va(t,n,e,i,r){let o=t.data[n];if(o===null)o=VA(t,n,e,i,r),d0()&&(o.flags|=32);else if(o.type&64){o.type=e,o.value=i,o.attrs=r;let a=a0();o.injectorIndex=a===null?-1:a.injectorIndex}return wa(o,!0),o}function VA(t,n,e,i,r){let o=Wp(),a=Gp(),s=a?o:o&&o.parent,l=t.data[n]=jA(t,s,e,n,i,r);return BA(t,l,o,a),l}function BA(t,n,e,i){t.firstChild===null&&(t.firstChild=n),e!==null&&(i?e.child==null&&n.parent!==null&&(e.child=n):e.next===null&&(e.next=n,n.prev=e))}function jA(t,n,e,i,r,o){let a=n?n.injectorIndex:-1,s=0;return Up()&&(s|=128),{type:e,index:i,insertBeforeIndex:null,injectorIndex:a,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,controlDirectiveIndex:-1,customControlIndex:-1,propertyBindings:null,flags:s,providerIndexes:0,value:r,attrs:o,mergedAttrs:null,localNames:null,initialInputs:null,inputs:null,hostDirectiveInputs:null,outputs:null,hostDirectiveOutputs:null,directiveToIndex:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:n,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}function HA(t){let n=t[Tp]??[],i=t[Ct][Ve],r=[];for(let o of n)o.data[kC]!==void 0?r.push(o):UA(o,i);t[Tp]=r}function UA(t,n){let e=0,i=t.firstChild;if(i){let r=t.data[TC];for(;e<r;){let o=i.nextSibling;$C(n,i,!1),i=o,e++}}}var zA=()=>null,$A=()=>null;function Eu(t,n){return zA(t,n)}function Rw(t,n,e){return $A(t,n,e)}var Ow=class{},Ku=class{},kg=class{resolveComponentFactory(n){throw new P(917,!1)}},kl=class{static NULL=new kg},gt=class{},Te=(()=>{class t{destroyNode=null;static __NG_ELEMENT_ID__=()=>WA()}return t})();function WA(){let t=J(),n=Dt(),e=Nn(n.index,t);return(Ji(e)?e:t)[Ve]}var Nw=(()=>{class t{static \u0275prov=b({token:t,providedIn:"root",factory:()=>null})}return t})();var hu={},Ag=class{injector;parentInjector;constructor(n,e){this.injector=n,this.parentInjector=e}get(n,e,i){let r=this.injector.get(n,hu,i);return r!==hu||e===hu?r:this.parentInjector.get(n,e,i)}};function Mu(t,n,e){let i=e?t.styles:null,r=e?t.classes:null,o=0;if(n!==null)for(let a=0;a<n.length;a++){let s=n[a];if(typeof s=="number")o=s;else if(o==1)r=Ud(r,s);else if(o==2){let l=s,d=n[++a];i=Ud(i,l+": "+d+";")}}e?t.styles=i:t.stylesWithoutHost=i,e?t.classes=r:t.classesWithoutHost=r}function we(t,n=0){let e=J();if(e===null)return W(t,n);let i=Dt();return yC(i,e,Vt(t),n)}function Al(){let t="invalid";throw new Error(t)}function Fw(t,n,e,i,r){let o=i===null?null:{"":-1},a=r(t,e);if(a!==null){let s=a,l=null,d=null;for(let u of a)if(u.resolveHostDirectives!==null){[s,l,d]=u.resolveHostDirectives(a);break}YA(t,n,e,s,o,l,d)}o!==null&&i!==null&&GA(e,i,o)}function GA(t,n,e){let i=t.localNames=[];for(let r=0;r<n.length;r+=2){let o=e[n[r+1]];if(o==null)throw new P(-301,!1);i.push(n[r],o)}}function qA(t,n,e){n.componentOffset=e,(t.components??=[]).push(n.index)}function YA(t,n,e,i,r,o,a){let s=i.length,l=null;for(let _=0;_<s;_++){let v=i[_];l===null&&yi(v)&&(l=v,qA(t,e,_)),hg(yu(e,n),t,v.type)}eR(e,t.data.length,s),l?.viewProvidersResolver&&l.viewProvidersResolver(l);for(let _=0;_<s;_++){let v=i[_];v.providersResolver&&v.providersResolver(v)}let d=!1,u=!1,h=ZC(t,n,s,null);s>0&&(e.directiveToIndex=new Map);for(let _=0;_<s;_++){let v=i[_];if(e.mergedAttrs=ka(e.mergedAttrs,v.hostAttrs),ZA(t,e,n,h,v),JA(h,v,r),a!==null&&a.has(v)){let[F,U]=a.get(v);e.directiveToIndex.set(v.type,[h,F+e.directiveStart,U+e.directiveStart])}else(o===null||!o.has(v))&&e.directiveToIndex.set(v.type,h);v.contentQueries!==null&&(e.flags|=4),(v.hostBindings!==null||v.hostAttrs!==null||v.hostVars!==0)&&(e.flags|=64);let w=v.type.prototype;!d&&(w.ngOnChanges||w.ngOnInit||w.ngDoCheck)&&((t.preOrderHooks??=[]).push(e.index),d=!0),!u&&(w.ngOnChanges||w.ngDoCheck)&&((t.preOrderCheckHooks??=[]).push(e.index),u=!0),h++}QA(t,e,o)}function QA(t,n,e){for(let i=n.directiveStart;i<n.directiveEnd;i++){let r=t.data[i];if(e===null||!e.has(r))$0(0,n,r,i),$0(1,n,r,i),G0(n,i,!1);else{let o=e.get(r);W0(0,n,o,i),W0(1,n,o,i),G0(n,i,!0)}}}function $0(t,n,e,i){let r=t===0?e.inputs:e.outputs;for(let o in r)if(r.hasOwnProperty(o)){let a;t===0?a=n.inputs??={}:a=n.outputs??={},a[o]??=[],a[o].push(i),Pw(n,o)}}function W0(t,n,e,i){let r=t===0?e.inputs:e.outputs;for(let o in r)if(r.hasOwnProperty(o)){let a=r[o],s;t===0?s=n.hostDirectiveInputs??={}:s=n.hostDirectiveOutputs??={},s[a]??=[],s[a].push(i,o),Pw(n,a)}}function Pw(t,n){n==="class"?t.flags|=8:n==="style"&&(t.flags|=16)}function G0(t,n,e){let{attrs:i,inputs:r,hostDirectiveInputs:o}=t;if(i===null||!e&&r===null||e&&o===null||r_(t)){t.initialInputs??=[],t.initialInputs.push(null);return}let a=null,s=0;for(;s<i.length;){let l=i[s];if(l===0){s+=4;continue}else if(l===5){s+=2;continue}else if(typeof l=="number")break;if(!e&&r.hasOwnProperty(l)){let d=r[l];for(let u of d)if(u===n){a??=[],a.push(l,i[s+1]);break}}else if(e&&o.hasOwnProperty(l)){let d=o[l];for(let u=0;u<d.length;u+=2)if(d[u]===n){a??=[],a.push(d[u+1],i[s+1]);break}}s+=2}t.initialInputs??=[],t.initialInputs.push(a)}function ZA(t,n,e,i,r){t.data[i]=r;let o=r.factory||(r.factory=Ir(r.type,!0)),a=new Io(o,yi(r),we,null);t.blueprint[i]=a,e[i]=a,KA(t,n,i,ZC(t,e,r.hostVars,Ht),r)}function KA(t,n,e,i,r){let o=r.hostBindings;if(o){let a=t.hostBindingOpCodes;a===null&&(a=t.hostBindingOpCodes=[]);let s=~n.index;XA(a)!=s&&a.push(s),a.push(e,i,o)}}function XA(t){let n=t.length;for(;n>0;){let e=t[--n];if(typeof e=="number"&&e<0)return e}return 0}function JA(t,n,e){if(e){if(n.exportAs)for(let i=0;i<n.exportAs.length;i++)e[n.exportAs[i]]=t;yi(n)&&(e[""]=t)}}function eR(t,n,e){t.flags|=1,t.directiveStart=n,t.directiveEnd=n+e,t.providerIndexes=n}function Lw(t,n,e,i,r,o,a,s){let l=n[ne],d=l.consts,u=yn(d,a),h=Va(l,t,e,i,u);return o&&Fw(l,n,h,yn(d,s),r),h.mergedAttrs=ka(h.mergedAttrs,h.attrs),h.attrs!==null&&Mu(h,h.attrs,!1),h.mergedAttrs!==null&&Mu(h,h.mergedAttrs,!0),l.queries!==null&&l.queries.elementStart(l,h),h}function Vw(t,n){uC(t,n),kp(n)&&t.queries.elementEnd(n)}function tR(t,n,e,i,r,o){let a=n.consts,s=yn(a,r),l=Va(n,t,e,i,s);if(l.mergedAttrs=ka(l.mergedAttrs,l.attrs),o!=null){let d=yn(a,o);l.localNames=[];for(let u=0;u<d.length;u+=2)l.localNames.push(d[u],-1)}return l.attrs!==null&&Mu(l,l.attrs,!1),l.mergedAttrs!==null&&Mu(l,l.mergedAttrs,!0),n.queries!==null&&n.queries.elementStart(n,l),l}function __(t,n,e){return t[n]=e}function Bw(t,n){return t[n]}function rn(t,n,e){if(e===Ht)return!1;let i=t[n];return Object.is(i,e)?!1:(t[n]=e,!0)}function nR(t,n,e,i){let r=rn(t,n,e);return rn(t,n+1,i)||r}function pu(t,n,e){return function i(r){let o=bi(t)?Nn(t.index,n):n;g_(o,5);let a=n[lt],s=q0(n,a,e,r),l=i.__ngNextListenerFn__;for(;l;)s=q0(n,a,l,r)&&s,l=l.__ngNextListenerFn__;return s}}function q0(t,n,e,i){let r=K(null);try{return Fe(xe.OutputStart,n,e),e(i)!==!1}catch(o){return yA(t,o),!1}finally{Fe(xe.OutputEnd,n,e),K(r)}}function jw(t,n,e,i,r,o,a,s){let l=ul(t),d=!1,u=null;if(!i&&l&&(u=rR(n,e,o,t.index)),u!==null){let h=u.__ngLastListenerFn__||u;h.__ngNextListenerFn__=a,u.__ngLastListenerFn__=a,d=!0}else{let h=bn(t,e),_=i?i(h):h;KT(e,_,o,s);let v=r.listen(_,o,s);if(!iR(o)){let w=i?F=>i(On(F[t.index])):t.index;Hw(w,n,e,o,s,v,!1)}}return d}function iR(t){return t.startsWith("animation")||t.startsWith("transition")}function rR(t,n,e,i){let r=t.cleanup;if(r!=null)for(let o=0;o<r.length-1;o+=2){let a=r[o];if(a===e&&r[o+1]===i){let s=n[ba],l=r[o+2];return s&&s.length>l?s[l]:null}typeof a=="string"&&(o+=2)}return null}function Hw(t,n,e,i,r,o,a){let s=n.firstCreatePass?Bp(n):null,l=Vp(e),d=l.length;l.push(r,o),s&&s.push(i,t,d,(d+1)*(a?-1:1))}function Y0(t,n,e,i,r,o){let a=n[e],s=n[ne],d=s.data[e].outputs[i],h=a[d].subscribe(o);Hw(t.index,s,n,r,o,h,!0)}var Rg=Symbol("BINDING");function Uw(t){return t.debugInfo?.className||t.type.name||null}var Su=class extends kl{ngModule;constructor(n){super(),this.ngModule=n}resolveComponentFactory(n){let e=pi(n);return new Lr(e,this.ngModule)}};function oR(t){return Object.keys(t).map(n=>{let[e,i,r]=t[n],o={propName:e,templateName:n,isSignal:(i&Uu.SignalBased)!==0};return r&&(o.transform=r),o})}function aR(t){return Object.keys(t).map(n=>({propName:t[n],templateName:n}))}function sR(t,n,e){let i=n instanceof Ne?n:n?.injector;return i&&t.getStandaloneInjector!==null&&(i=t.getStandaloneInjector(i)||i),i?new Ag(e,i):e}function lR(t){let n=t.get(gt,null);if(n===null)throw new P(407,!1);let e=t.get(Nw,null),i=t.get(hi,null),r=t.get(ni,null,{optional:!0});return{rendererFactory:n,sanitizer:e,changeDetectionScheduler:i,ngReflect:!1,tracingService:r}}function cR(t,n){let e=zw(t);return UC(n,e,e==="svg"?Ap:e==="math"?Xy:null)}function zw(t){return(t.selectors[0][0]||"div").toLowerCase()}var Lr=class extends Ku{componentDef;ngModule;selector;componentType;ngContentSelectors;isBoundToModule;cachedInputs=null;cachedOutputs=null;get inputs(){return this.cachedInputs??=oR(this.componentDef.inputs),this.cachedInputs}get outputs(){return this.cachedOutputs??=aR(this.componentDef.outputs),this.cachedOutputs}constructor(n,e){super(),this.componentDef=n,this.ngModule=e,this.componentType=n.type,this.selector=kk(n.selectors),this.ngContentSelectors=n.ngContentSelectors??[],this.isBoundToModule=!!e}create(n,e,i,r,o,a){Fe(xe.DynamicComponentStart);let s=K(null);try{let l=this.componentDef,d=sR(l,r||this.ngModule,n),u=lR(d),h=u.tracingService;return h&&h.componentCreate?h.componentCreate(Uw(l),()=>this.createComponentRef(u,d,e,i,o,a)):this.createComponentRef(u,d,e,i,o,a)}finally{K(s)}}createComponentRef(n,e,i,r,o,a){let s=this.componentDef,l=dR(r,s,a,o),d=n.rendererFactory.createRenderer(null,s),u=r?uA(d,r,s.encapsulation,e):cR(s,d),h=a?.some(Q0)||o?.some(w=>typeof w!="function"&&w.bindings.some(Q0)),_=a_(null,l,null,512|QC(s),null,null,n,d,e,null,OC(u,e,!0));_[et]=u,nu(_);let v=null;try{let w=Lw(et,_,2,"#host",()=>l.directiveRegistry,!0,0);WC(d,u,w),Aa(u,_),h_(l,_,w),FC(l,w,_),Vw(l,w),i!==void 0&&mR(w,this.ngContentSelectors,i),v=Nn(w.index,_),_[lt]=v[lt],p_(l,_,null)}catch(w){throw v!==null&&gg(v),gg(_),w}finally{Fe(xe.DynamicComponentEnd),iu()}return new Iu(this.componentType,_,!!h)}};function dR(t,n,e,i){let r=t?["ng-version","21.2.7"]:Ak(n.selectors[0]),o=null,a=null,s=0;if(e)for(let u of e)s+=u[Rg].requiredVars,u.create&&(u.targetIdx=0,(o??=[]).push(u)),u.update&&(u.targetIdx=0,(a??=[]).push(u));if(i)for(let u=0;u<i.length;u++){let h=i[u];if(typeof h!="function")for(let _ of h.bindings){s+=_[Rg].requiredVars;let v=u+1;_.create&&(_.targetIdx=v,(o??=[]).push(_)),_.update&&(_.targetIdx=v,(a??=[]).push(_))}}let l=[n];if(i)for(let u of i){let h=typeof u=="function"?u:u.type,_=vp(h);l.push(_)}return o_(0,null,uR(o,a),1,s,l,null,null,null,[r],null)}function uR(t,n){return!t&&!n?null:e=>{if(e&1&&t)for(let i of t)i.create();if(e&2&&n)for(let i of n)i.update()}}function Q0(t){let n=t[Rg].kind;return n==="input"||n==="twoWay"}var Iu=class extends Ow{_rootLView;_hasInputBindings;instance;hostView;changeDetectorRef;componentType;location;previousInputValues=null;_tNode;constructor(n,e,i){super(),this._rootLView=e,this._hasInputBindings=i,this._tNode=Qd(e[ne],et),this.location=Pa(this._tNode,e),this.instance=Nn(this._tNode.index,e)[lt],this.hostView=this.changeDetectorRef=new Pr(e,void 0),this.componentType=n}setInput(n,e){this._hasInputBindings;let i=this._tNode;if(this.previousInputValues??=new Map,this.previousInputValues.has(n)&&Object.is(this.previousInputValues.get(n),e))return;let r=this._rootLView,o=Qu(i,r[ne],r,n,e);this.previousInputValues.set(n,e);let a=Nn(i.index,r);g_(a,1)}get injector(){return new So(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(n){this.hostView.onDestroy(n)}};function mR(t,n,e){let i=t.projection=[];for(let r=0;r<n.length;r++){let o=e[r];i.push(o!=null&&o.length?Array.from(o):null)}}var Et=(()=>{class t{static __NG_ELEMENT_ID__=fR}return t})();function fR(){let t=Dt();return $w(t,J())}var Og=class t extends Et{_lContainer;_hostTNode;_hostLView;constructor(n,e,i){super(),this._lContainer=n,this._hostTNode=e,this._hostLView=i}get element(){return Pa(this._hostTNode,this._hostLView)}get injector(){return new So(this._hostTNode,this._hostLView)}get parentInjector(){let n=Qg(this._hostTNode,this._hostLView);if(hC(n)){let e=vu(n,this._hostLView),i=_u(n),r=e[ne].data[i+8];return new So(r,e)}else return new So(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(n){let e=Z0(this._lContainer);return e!==null&&e[n]||null}get length(){return this._lContainer.length-rt}createEmbeddedView(n,e,i){let r,o;typeof i=="number"?r=i:i!=null&&(r=i.index,o=i.injector);let a=Eu(this._lContainer,n.ssrId),s=n.createEmbeddedViewImpl(e||{},o,a);return this.insertImpl(s,r,Ra(this._hostTNode,a)),s}createComponent(n,e,i,r,o,a,s){let l=n&&!xT(n),d;if(l)d=e;else{let U=e||{};d=U.index,i=U.injector,r=U.projectableNodes,o=U.environmentInjector||U.ngModuleRef,a=U.directives,s=U.bindings}let u=l?n:new Lr(pi(n)),h=i||this.parentInjector;if(!o&&u.ngModule==null){let Q=(l?h:this.parentInjector).get(Ne,null);Q&&(o=Q)}let _=pi(u.componentType??{}),v=Eu(this._lContainer,_?.id??null),w=v?.firstChild??null,F=u.create(h,r,w,o,a,s);return this.insertImpl(F.hostView,d,Ra(this._hostTNode,v)),F}insert(n,e){return this.insertImpl(n,e,!0)}insertImpl(n,e,i){let r=n._lView;if(e0(r)){let s=this.indexOf(n);if(s!==-1)this.detach(s);else{let l=r[Ct],d=new t(l,l[Kt],l[Ct]);d.detach(d.indexOf(n))}}let o=this._adjustIndex(e),a=this._lContainer;return Tl(a,r,o,i),n.attachToViewContainerRef(),Cp(ag(a),o,n),n}move(n,e){return this.insert(n,e)}indexOf(n){let e=Z0(this._lContainer);return e!==null?e.indexOf(n):-1}remove(n){let e=this._adjustIndex(n,-1),i=wl(this._lContainer,e);i&&(sl(ag(this._lContainer),e),Gu(i[ne],i))}detach(n){let e=this._adjustIndex(n,-1),i=wl(this._lContainer,e);return i&&sl(ag(this._lContainer),e)!=null?new Pr(i):null}_adjustIndex(n,e=0){return n??this.length+e}};function Z0(t){return t[dl]}function ag(t){return t[dl]||(t[dl]=[])}function $w(t,n){let e,i=n[t.index];return Xn(i)?e=i:(e=Iw(i,n,null,t),n[t.index]=e,s_(n,e)),pR(e,n,t,i),new Og(e,t,n)}function hR(t,n){let e=t[Ve],i=e.createComment(""),r=bn(n,t),o=e.parentNode(r);return Cu(e,o,i,e.nextSibling(r),!1),i}var pR=vR,gR=()=>!1;function _R(t,n,e){return gR(t,n,e)}function vR(t,n,e,i){if(t[Nr])return;let r;e.type&8?r=On(i):r=hR(n,e),t[Nr]=r}var Ng=class t{queryList;matches=null;constructor(n){this.queryList=n}clone(){return new t(this.queryList)}setDirty(){this.queryList.setDirty()}},Fg=class t{queries;constructor(n=[]){this.queries=n}createEmbeddedView(n){let e=n.queries;if(e!==null){let i=n.contentQueries!==null?n.contentQueries[0]:e.length,r=[];for(let o=0;o<i;o++){let a=e.getByIndex(o),s=this.queries[a.indexInDeclarationView];r.push(s.clone())}return new t(r)}return null}insertView(n){this.dirtyQueriesWithMatches(n)}detachView(n){this.dirtyQueriesWithMatches(n)}finishViewCreation(n){this.dirtyQueriesWithMatches(n)}dirtyQueriesWithMatches(n){for(let e=0;e<this.queries.length;e++)b_(n,e).matches!==null&&this.queries[e].setDirty()}},Tu=class{flags;read;predicate;constructor(n,e,i=null){this.flags=e,this.read=i,typeof n=="string"?this.predicate=DR(n):this.predicate=n}},Pg=class t{queries;constructor(n=[]){this.queries=n}elementStart(n,e){for(let i=0;i<this.queries.length;i++)this.queries[i].elementStart(n,e)}elementEnd(n){for(let e=0;e<this.queries.length;e++)this.queries[e].elementEnd(n)}embeddedTView(n){let e=null;for(let i=0;i<this.length;i++){let r=e!==null?e.length:0,o=this.getByIndex(i).embeddedTView(n,r);o&&(o.indexInDeclarationView=i,e!==null?e.push(o):e=[o])}return e!==null?new t(e):null}template(n,e){for(let i=0;i<this.queries.length;i++)this.queries[i].template(n,e)}getByIndex(n){return this.queries[n]}get length(){return this.queries.length}track(n){this.queries.push(n)}},Lg=class t{metadata;matches=null;indexInDeclarationView=-1;crossesNgTemplate=!1;_declarationNodeIndex;_appliesToNextNode=!0;constructor(n,e=-1){this.metadata=n,this._declarationNodeIndex=e}elementStart(n,e){this.isApplyingToNode(e)&&this.matchTNode(n,e)}elementEnd(n){this._declarationNodeIndex===n.index&&(this._appliesToNextNode=!1)}template(n,e){this.elementStart(n,e)}embeddedTView(n,e){return this.isApplyingToNode(n)?(this.crossesNgTemplate=!0,this.addMatch(-n.index,e),new t(this.metadata)):null}isApplyingToNode(n){if(this._appliesToNextNode&&(this.metadata.flags&1)!==1){let e=this._declarationNodeIndex,i=n.parent;for(;i!==null&&i.type&8&&i.index!==e;)i=i.parent;return e===(i!==null?i.index:-1)}return this._appliesToNextNode}matchTNode(n,e){let i=this.metadata.predicate;if(Array.isArray(i))for(let r=0;r<i.length;r++){let o=i[r];this.matchTNodeWithReadOption(n,e,bR(e,o)),this.matchTNodeWithReadOption(n,e,fu(e,n,o,!1,!1))}else i===pt?e.type&4&&this.matchTNodeWithReadOption(n,e,-1):this.matchTNodeWithReadOption(n,e,fu(e,n,i,!1,!1))}matchTNodeWithReadOption(n,e,i){if(i!==null){let r=this.metadata.read;if(r!==null)if(r===B||r===Et||r===pt&&e.type&4)this.addMatch(e.index,-2);else{let o=fu(e,n,r,!1,!1);o!==null&&this.addMatch(e.index,o)}else this.addMatch(e.index,i)}}addMatch(n,e){this.matches===null?this.matches=[n,e]:this.matches.push(n,e)}};function bR(t,n){let e=t.localNames;if(e!==null){for(let i=0;i<e.length;i+=2)if(e[i]===n)return e[i+1]}return null}function yR(t,n){return t.type&11?Pa(t,n):t.type&4?Zu(t,n):null}function CR(t,n,e,i){return e===-1?yR(n,t):e===-2?wR(t,n,i):vl(t,t[ne],e,n)}function wR(t,n,e){if(e===B)return Pa(n,t);if(e===pt)return Zu(n,t);if(e===Et)return $w(n,t)}function Ww(t,n,e,i){let r=n[vi].queries[i];if(r.matches===null){let o=t.data,a=e.matches,s=[];for(let l=0;a!==null&&l<a.length;l+=2){let d=a[l];if(d<0)s.push(null);else{let u=o[d];s.push(CR(n,u,a[l+1],e.metadata.read))}}r.matches=s}return r.matches}function Vg(t,n,e,i){let r=t.queries.getByIndex(e),o=r.matches;if(o!==null){let a=Ww(t,n,r,e);for(let s=0;s<o.length;s+=2){let l=o[s];if(l>0)i.push(a[s/2]);else{let d=o[s+1],u=n[-l];for(let h=rt;h<u.length;h++){let _=u[h];_[Or]===_[Ct]&&Vg(_[ne],_,d,i)}if(u[Do]!==null){let h=u[Do];for(let _=0;_<h.length;_++){let v=h[_];Vg(v[ne],v,d,i)}}}}}return i}function v_(t,n){return t[vi].queries[n].queryList}function Gw(t,n,e){let i=new tr((e&4)===4);return i0(t,n,i,i.destroy),(n[vi]??=new Fg).queries.push(new Ng(i))-1}function qw(t,n,e){let i=We();return i.firstCreatePass&&(Qw(i,new Tu(t,n,e),-1),(n&2)===2&&(i.staticViewQueries=!0)),Gw(i,J(),n)}function Yw(t,n,e,i){let r=We();if(r.firstCreatePass){let o=Dt();Qw(r,new Tu(n,e,i),o.index),xR(r,t),(e&2)===2&&(r.staticContentQueries=!0)}return Gw(r,J(),e)}function DR(t){return t.split(",").map(n=>n.trim())}function Qw(t,n,e){t.queries===null&&(t.queries=new Pg),t.queries.track(new Lg(n,e))}function xR(t,n){let e=t.contentQueries||(t.contentQueries=[]),i=e.length?e[e.length-1]:-1;n!==i&&e.push(t.queries.length-1,n)}function b_(t,n){return t.queries.getByIndex(n)}function Zw(t,n){let e=t[ne],i=b_(e,n);return i.crossesNgTemplate?Vg(e,t,n,[]):Ww(e,t,i,n)}function Kw(t,n,e){let i,r=Us(()=>{i._dirtyCounter();let o=ER(i,t);if(n&&o===void 0)throw new P(-951,!1);return o});return i=r[mt],i._dirtyCounter=E(0),i._flatValue=void 0,r}function y_(t){return Kw(!0,!1,t)}function C_(t){return Kw(!0,!0,t)}function Xw(t,n){let e=t[mt];e._lView=J(),e._queryIndex=n,e._queryList=v_(e._lView,n),e._queryList.onDirty(()=>e._dirtyCounter.update(i=>i+1))}function ER(t,n){let e=t._lView,i=t._queryIndex;if(e===void 0||i===void 0||e[ce]&4)return n?void 0:Wt;let r=v_(e,i),o=Zw(e,i);return r.reset(o,DC),n?r.first:r._changesDetected||t._flatValue===void 0?t._flatValue=r.toArray():t._flatValue}var Mi=class{},Xu=class{};var ku=class extends Mi{ngModuleType;_parent;_bootstrapComponents=[];_r3Injector;instance;destroyCbs=[];componentFactoryResolver=new Su(this);constructor(n,e,i,r=!0){super(),this.ngModuleType=n,this._parent=e;let o=_p(n);this._bootstrapComponents=GC(o.bootstrap),this._r3Injector=Kp(n,e,[{provide:Mi,useValue:this},{provide:kl,useValue:this.componentFactoryResolver},...i],ol(n),new Set(["environment"])),r&&this.resolveInjectorInitializers()}resolveInjectorInitializers(){this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(this.ngModuleType)}get injector(){return this._r3Injector}destroy(){let n=this._r3Injector;!n.destroyed&&n.destroy(),this.destroyCbs.forEach(e=>e()),this.destroyCbs=null}onDestroy(n){this.destroyCbs.push(n)}},Au=class extends Xu{moduleType;constructor(n){super(),this.moduleType=n}create(n){return new ku(this.moduleType,n,[])}};var Dl=class extends Mi{injector;componentFactoryResolver=new Su(this);instance=null;constructor(n){super();let e=new _o([...n.providers,{provide:Mi,useValue:this},{provide:kl,useValue:this.componentFactoryResolver}],n.parent||va(),n.debugName,new Set(["environment"]));this.injector=e,n.runEnvironmentInitializers&&e.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(n){this.injector.onDestroy(n)}};function Ba(t,n,e=null){return new Dl({providers:t,parent:n,debugName:e,runEnvironmentInitializers:!0}).injector}var MR=(()=>{class t{_injector;cachedInjectors=new Map;constructor(e){this._injector=e}getOrCreateStandaloneInjector(e){if(!e.standalone)return null;if(!this.cachedInjectors.has(e)){let i=xp(!1,e.type),r=i.length>0?Ba([i],this._injector,""):null;this.cachedInjectors.set(e,r)}return this.cachedInjectors.get(e)}ngOnDestroy(){try{for(let e of this.cachedInjectors.values())e!==null&&e.destroy()}finally{this.cachedInjectors.clear()}}static \u0275prov=b({token:t,providedIn:"environment",factory:()=>new t(W(Ne))})}return t})();function x(t){return El(()=>{let n=Jw(t),e=X(C({},n),{decls:t.decls,vars:t.vars,template:t.template,consts:t.consts||null,ngContentSelectors:t.ngContentSelectors,onPush:t.changeDetection===Zg.OnPush,directiveDefs:null,pipeDefs:null,dependencies:n.standalone&&t.dependencies||null,getStandaloneInjector:n.standalone?r=>r.get(MR).getOrCreateStandaloneInjector(e):null,getExternalStyles:null,signals:t.signals??!1,data:t.data||{},encapsulation:t.encapsulation||ei.Emulated,styles:t.styles||Wt,_:null,schemas:t.schemas||null,tView:null,id:""});n.standalone&&ii("NgStandalone"),eD(e);let i=t.dependencies;return e.directiveDefs=K0(i,SR),e.pipeDefs=K0(i,Ly),e.id=kR(e),e})}function SR(t){return pi(t)||vp(t)}function $(t){return El(()=>({type:t.type,bootstrap:t.bootstrap||Wt,declarations:t.declarations||Wt,imports:t.imports||Wt,exports:t.exports||Wt,transitiveCompileScopes:null,schemas:t.schemas||null,id:t.id||null}))}function IR(t,n){if(t==null)return Ar;let e={};for(let i in t)if(t.hasOwnProperty(i)){let r=t[i],o,a,s,l;Array.isArray(r)?(s=r[0],o=r[1],a=r[2]??o,l=r[3]||null):(o=r,a=r,s=Uu.None,l=null),e[o]=[i,s,l],n[o]=a}return e}function TR(t){if(t==null)return Ar;let n={};for(let e in t)t.hasOwnProperty(e)&&(n[t[e]]=e);return n}function A(t){return El(()=>{let n=Jw(t);return eD(n),n})}function w_(t){return{type:t.type,name:t.name,factory:null,pure:t.pure!==!1,standalone:t.standalone??!0,onDestroy:t.type.prototype.ngOnDestroy||null}}function Jw(t){let n={};return{type:t.type,providersResolver:null,viewProvidersResolver:null,factory:null,hostBindings:t.hostBindings||null,hostVars:t.hostVars||0,hostAttrs:t.hostAttrs||null,contentQueries:t.contentQueries||null,declaredInputs:n,inputConfig:t.inputs||Ar,exportAs:t.exportAs||null,standalone:t.standalone??!0,signals:t.signals===!0,selectors:t.selectors||Wt,viewQuery:t.viewQuery||null,features:t.features||null,setInput:null,resolveHostDirectives:null,hostDirectives:null,controlDef:null,inputs:IR(t.inputs,n),outputs:TR(t.outputs),debugInfo:null}}function eD(t){t.features?.forEach(n=>n(t))}function K0(t,n){return t?()=>{let e=typeof t=="function"?t():t,i=[];for(let r of e){let o=n(r);o!==null&&i.push(o)}return i}:null}function kR(t){let n=0,e=typeof t.consts=="function"?"":t.consts,i=[t.selectors,t.ngContentSelectors,t.hostVars,t.hostAttrs,e,t.vars,t.decls,t.encapsulation,t.standalone,t.signals,t.exportAs,JSON.stringify(t.inputs),JSON.stringify(t.outputs),Object.getOwnPropertyNames(t.type.prototype),!!t.contentQueries,!!t.viewQuery];for(let o of i.join("|"))n=Math.imul(31,n)+o.charCodeAt(0)<<0;return n+=2147483648,"c"+n}function AR(t){return Object.getPrototypeOf(t.prototype).constructor}function _e(t){let n=AR(t.type),e=!0,i=[t];for(;n;){let r;if(yi(t))r=n.\u0275cmp||n.\u0275dir;else{if(n.\u0275cmp)throw new P(903,!1);r=n.\u0275dir}if(r){if(e){i.push(r);let a=t;a.inputs=sg(t.inputs),a.declaredInputs=sg(t.declaredInputs),a.outputs=sg(t.outputs);let s=r.hostBindings;s&&PR(t,s);let l=r.viewQuery,d=r.contentQueries;if(l&&NR(t,l),d&&FR(t,d),RR(t,r),Py(t.outputs,r.outputs),yi(r)&&r.data.animation){let u=t.data;u.animation=(u.animation||[]).concat(r.data.animation)}}let o=r.features;if(o)for(let a=0;a<o.length;a++){let s=o[a];s&&s.ngInherit&&s(t),s===_e&&(e=!1)}}n=Object.getPrototypeOf(n)}OR(i)}function RR(t,n){for(let e in n.inputs){if(!n.inputs.hasOwnProperty(e)||t.inputs.hasOwnProperty(e))continue;let i=n.inputs[e];i!==void 0&&(t.inputs[e]=i,t.declaredInputs[e]=n.declaredInputs[e])}}function OR(t){let n=0,e=null;for(let i=t.length-1;i>=0;i--){let r=t[i];r.hostVars=n+=r.hostVars,r.hostAttrs=ka(r.hostAttrs,e=ka(e,r.hostAttrs))}}function sg(t){return t===Ar?{}:t===Wt?[]:t}function NR(t,n){let e=t.viewQuery;e?t.viewQuery=(i,r)=>{n(i,r),e(i,r)}:t.viewQuery=n}function FR(t,n){let e=t.contentQueries;e?t.contentQueries=(i,r,o)=>{n(i,r,o),e(i,r,o)}:t.contentQueries=n}function PR(t,n){let e=t.hostBindings;e?t.hostBindings=(i,r)=>{n(i,r),e(i,r)}:t.hostBindings=n}function tD(t,n,e,i,r,o,a,s){if(e.firstCreatePass){t.mergedAttrs=ka(t.mergedAttrs,t.attrs);let u=t.tView=o_(2,t,r,o,a,e.directiveRegistry,e.pipeRegistry,null,e.schemas,e.consts,null);e.queries!==null&&(e.queries.template(e,t),u.queries=e.queries.embeddedTView(t))}s&&(t.flags|=s),wa(t,!1);let l=VR(e,n,t,i);ru()&&m_(e,n,l,t),Aa(l,n);let d=Iw(l,n,l,t);n[i+et]=d,s_(n,d),_R(d,t,n)}function LR(t,n,e,i,r,o,a,s,l,d,u){let h=e+et,_;return n.firstCreatePass?(_=Va(n,h,4,a||null,s||null),Hp()&&Fw(n,t,_,yn(n.consts,d),pw),uC(n,_)):_=n.data[h],tD(_,t,n,e,i,r,o,l),ul(_)&&h_(n,t,_),d!=null&&Yu(t,_,u),_}function Oa(t,n,e,i,r,o,a,s,l,d,u){let h=e+et,_;if(n.firstCreatePass){if(_=Va(n,h,4,a||null,s||null),d!=null){let v=yn(n.consts,d);_.localNames=[];for(let w=0;w<v.length;w+=2)_.localNames.push(v[w],-1)}}else _=n.data[h];return tD(_,t,n,e,i,r,o,l),d!=null&&Yu(t,_,u),_}function ct(t,n,e,i,r,o,a,s){let l=J(),d=We(),u=yn(d.consts,o);return LR(l,d,t,n,e,i,r,u,void 0,a,s),ct}function Rl(t,n,e,i,r,o,a,s){let l=J(),d=We(),u=yn(d.consts,o);return Oa(l,d,t,n,e,i,r,u,void 0,a,s),Rl}var VR=BR;function BR(t,n,e,i){return ou(!0),n[Ve].createComment("")}var Ju=(()=>{class t{log(e){console.log(e)}warn(e){console.warn(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"platform"})}return t})();function Si(t){return typeof t=="function"&&t[mt]!==void 0}function D_(t){return Si(t)&&typeof t.set=="function"}var x_=new y("");function rr(t){return!!t&&typeof t.then=="function"}function em(t){return!!t&&typeof t.subscribe=="function"}var E_=new y("");function tm(t){return gi([{provide:E_,multi:!0,useValue:t}])}var M_=(()=>{class t{resolve;reject;initialized=!1;done=!1;donePromise=new Promise((e,i)=>{this.resolve=e,this.reject=i});appInits=c(E_,{optional:!0})??[];injector=c(G);constructor(){}runInitializers(){if(this.initialized)return;let e=[];for(let r of this.appInits){let o=wt(this.injector,r);if(rr(o))e.push(o);else if(em(o)){let a=new Promise((s,l)=>{o.subscribe({complete:s,error:l})});e.push(a)}}let i=()=>{this.done=!0,this.resolve()};Promise.all(e).then(()=>{i()}).catch(r=>{this.reject(r)}),e.length===0&&i(),this.initialized=!0}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Ol=new y("");function nD(){Nh(()=>{let t="";throw new P(600,t)})}function iD(t){return t.isBoundToModule}var jR=10;var wn=(()=>{class t{_runningTick=!1;_destroyed=!1;_destroyListeners=[];_views=[];internalErrorHandler=c(Cn);afterRenderManager=c($u);zonelessEnabled=c(hl);rootEffectScheduler=c(su);dirtyFlags=0;tracingSnapshot=null;allTestViews=new Set;autoDetectTestViews=new Set;includeAllTestViews=!1;afterTick=new S;get allViews(){return[...(this.includeAllTestViews?this.allTestViews:this.autoDetectTestViews).keys(),...this._views]}get destroyed(){return this._destroyed}componentTypes=[];components=[];internalPendingTask=c(er);get isStable(){return this.internalPendingTask.hasPendingTasksObservable.pipe(le(e=>!e))}constructor(){c(ni,{optional:!0})}whenStable(){let e;return new Promise(i=>{e=this.isStable.subscribe({next:r=>{r&&i()}})}).finally(()=>{e.unsubscribe()})}_injector=c(Ne);_rendererFactory=null;get injector(){return this._injector}bootstrap(e,i){return this.bootstrapImpl(e,i)}bootstrapImpl(e,i,r=G.NULL){return this._injector.get(V).run(()=>{Fe(xe.BootstrapComponentStart);let a=e instanceof Ku;if(!this._injector.get(M_).done){let w="";throw new P(405,w)}let l;a?l=e:l=this._injector.get(kl).resolveComponentFactory(e),this.componentTypes.push(l.componentType);let d=iD(l)?void 0:this._injector.get(Mi),u=i||l.selector,h=l.create(r,[],u,d),_=h.location.nativeElement,v=h.injector.get(x_,null);return v?.registerApplication(_),h.onDestroy(()=>{this.detachView(h.hostView),_l(this.components,h),v?.unregisterApplication(_)}),this._loadComponent(h),Fe(xe.BootstrapComponentEnd,h),h})}tick(){this.zonelessEnabled||(this.dirtyFlags|=1),this._tick()}_tick(){Fe(xe.ChangeDetectionStart),this.tracingSnapshot!==null?this.tracingSnapshot.run(zu.CHANGE_DETECTION,this.tickImpl):this.tickImpl()}tickImpl=()=>{if(this._runningTick)throw Fe(xe.ChangeDetectionEnd),new P(101,!1);let e=K(null);try{this._runningTick=!0,this.synchronize()}finally{this._runningTick=!1,this.tracingSnapshot?.dispose(),this.tracingSnapshot=null,K(e),this.afterTick.next(),Fe(xe.ChangeDetectionEnd)}};synchronize(){this._rendererFactory===null&&!this._injector.destroyed&&(this._rendererFactory=this._injector.get(gt,null,{optional:!0}));let e=0;for(;this.dirtyFlags!==0&&e++<jR;){Fe(xe.ChangeDetectionSyncStart);try{this.synchronizeOnce()}finally{Fe(xe.ChangeDetectionSyncEnd)}}}synchronizeOnce(){this.dirtyFlags&16&&(this.dirtyFlags&=-17,this.rootEffectScheduler.flush());let e=!1;if(this.dirtyFlags&7){let i=!!(this.dirtyFlags&1);this.dirtyFlags&=-8,this.dirtyFlags|=8;for(let{_lView:r}of this.allViews){if(!i&&!ml(r))continue;let o=i&&!this.zonelessEnabled?0:1;xw(r,o),e=!0}if(this.dirtyFlags&=-5,this.syncDirtyFlagsWithViews(),this.dirtyFlags&23)return}e||(this._rendererFactory?.begin?.(),this._rendererFactory?.end?.()),this.dirtyFlags&8&&(this.dirtyFlags&=-9,this.afterRenderManager.execute()),this.syncDirtyFlagsWithViews()}syncDirtyFlagsWithViews(){if(this.allViews.some(({_lView:e})=>ml(e))){this.dirtyFlags|=2;return}else this.dirtyFlags&=-8}attachView(e){let i=e;this._views.push(i),i.attachToAppRef(this)}detachView(e){let i=e;_l(this._views,i),i.detachFromAppRef()}_loadComponent(e){this.attachView(e.hostView);try{this.tick()}catch(r){this.internalErrorHandler(r)}this.components.push(e),this._injector.get(Ol,[]).forEach(r=>r(e))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(e=>e()),this._views.slice().forEach(e=>e.destroy())}finally{this._destroyed=!0,this._views=[],this._destroyListeners=[]}}onDestroy(e){return this._destroyListeners.push(e),()=>_l(this._destroyListeners,e)}destroy(){if(this._destroyed)throw new P(406,!1);let e=this._injector;e.destroy&&!e.destroyed&&e.destroy()}get viewCount(){return this._views.length}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function _l(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}function nm(t,n){let e=J(),i=Ci();if(rn(e,i,n)){let r=We(),o=Da();if(Qu(o,r,e,t,n))bi(o)&&hw(e,o.index);else{let s=bn(o,e);gw(e[Ve],s,null,o.value,t,n,null)}}return nm}function Z(t,n,e,i){let r=J(),o=Ci();if(rn(r,o,n)){let a=We(),s=Da();vA(s,r,t,n,e,i)}return Z}function Ta(t){if(ii("NgAnimateEnter"),!JC)return Ta;let n=J();if(Lk(n))return Ta;let e=Dt(),i=n[_n].get(V);return Uk(B0(n),e,()=>HR(n,e,t,i)),Xk(n[_n]),ow(n[_n],B0(n)),Ta}function HR(t,n,e,i){let r=bn(n,t),o=t[Ve],a=Hk(e),s=[],l=!1,d=h=>{if(Du(h)!==r)return;let _=h instanceof AnimationEvent?"animationend":"transitionend";i.runOutsideAngular(()=>{o.listen(r,_,u)})},u=h=>{Du(h)===r&&(tw(h,r)&&(l=!0),UR(h,r,o))};if(a&&a.length>0){i.runOutsideAngular(()=>{s.push(o.listen(r,"animationstart",d)),s.push(o.listen(r,"transitionstart",d))}),Vk(r,a,s);for(let h of a)o.addClass(r,h);i.runOutsideAngular(()=>{requestAnimationFrame(()=>{if(!l&&(Gk(r,wu,JC),!wu.has(r))){for(let h of a)o.removeClass(r,h);ew(r)}})})}}function UR(t,n,e){let i=bl.get(n);if(!(Du(t)!==n||!i)&&tw(t,n)){t.stopPropagation();for(let r of i.classList)e.removeClass(n,r);ew(n)}}var Bg=class{destroy(n){}updateValue(n,e){}swap(n,e){let i=Math.min(n,e),r=Math.max(n,e),o=this.detach(r);if(r-i>1){let a=this.detach(i);this.attach(i,o),this.attach(r,a)}else this.attach(i,o)}move(n,e){this.attach(e,this.detach(n))}};function lg(t,n,e,i,r){return t===e&&Object.is(n,i)?1:Object.is(r(t,n),r(e,i))?-1:0}function zR(t,n,e,i){let r,o,a=0,s=t.length-1,l=void 0;if(Array.isArray(n)){K(i);let d=n.length-1;for(K(null);a<=s&&a<=d;){let u=t.at(a),h=n[a],_=lg(a,u,a,h,e);if(_!==0){_<0&&t.updateValue(a,h),a++;continue}let v=t.at(s),w=n[d],F=lg(s,v,d,w,e);if(F!==0){F<0&&t.updateValue(s,w),s--,d--;continue}let U=e(a,u),Q=e(s,v),Ie=e(a,h);if(Object.is(Ie,Q)){let At=e(d,w);Object.is(At,U)?(t.swap(a,s),t.updateValue(s,w),d--,s--):t.move(s,a),t.updateValue(a,h),a++;continue}if(r??=new Ru,o??=J0(t,a,s,e),jg(t,r,a,Ie))t.updateValue(a,h),a++,s++;else if(o.has(Ie))r.set(U,t.detach(a)),s--;else{let At=t.create(a,n[a]);t.attach(a,At),a++,s++}}for(;a<=d;)X0(t,r,e,a,n[a]),a++}else if(n!=null){K(i);let d=n[Symbol.iterator]();K(null);let u=d.next();for(;!u.done&&a<=s;){let h=t.at(a),_=u.value,v=lg(a,h,a,_,e);if(v!==0)v<0&&t.updateValue(a,_),a++,u=d.next();else{r??=new Ru,o??=J0(t,a,s,e);let w=e(a,_);if(jg(t,r,a,w))t.updateValue(a,_),a++,s++,u=d.next();else if(!o.has(w))t.attach(a,t.create(a,_)),a++,s++,u=d.next();else{let F=e(a,h);r.set(F,t.detach(a)),s--}}}for(;!u.done;)X0(t,r,e,t.length,u.value),u=d.next()}for(;a<=s;)t.destroy(t.detach(s--));r?.forEach(d=>{t.destroy(d)})}function jg(t,n,e,i){return n!==void 0&&n.has(i)?(t.attach(e,n.get(i)),n.delete(i),!0):!1}function X0(t,n,e,i,r){if(jg(t,n,i,e(i,r)))t.updateValue(i,r);else{let o=t.create(i,r);t.attach(i,o)}}function J0(t,n,e,i){let r=new Set;for(let o=n;o<=e;o++)r.add(i(o,t.at(o)));return r}var Ru=class{kvMap=new Map;_vMap=void 0;has(n){return this.kvMap.has(n)}delete(n){if(!this.has(n))return!1;let e=this.kvMap.get(n);return this._vMap!==void 0&&this._vMap.has(e)?(this.kvMap.set(n,this._vMap.get(e)),this._vMap.delete(e)):this.kvMap.delete(n),!0}get(n){return this.kvMap.get(n)}set(n,e){if(this.kvMap.has(n)){let i=this.kvMap.get(n);this._vMap===void 0&&(this._vMap=new Map);let r=this._vMap;for(;r.has(i);)i=r.get(i);r.set(i,e)}else this.kvMap.set(n,e)}forEach(n){for(let[e,i]of this.kvMap)if(n(i,e),this._vMap!==void 0){let r=this._vMap;for(;r.has(i);)i=r.get(i),n(i,e)}}};function j(t,n,e,i,r,o,a,s){ii("NgControlFlow");let l=J(),d=We(),u=yn(d.consts,o);return Oa(l,d,t,n,e,i,r,u,256,a,s),S_}function S_(t,n,e,i,r,o,a,s){ii("NgControlFlow");let l=J(),d=We(),u=yn(d.consts,o);return Oa(l,d,t,n,e,i,r,u,512,a,s),S_}function H(t,n){ii("NgControlFlow");let e=J(),i=Ci(),r=e[i]!==Ht?e[i]:-1,o=r!==-1?Ou(e,et+r):void 0,a=0;if(rn(e,i,t)){let s=K(null);try{if(o!==void 0&&kw(o,a),t!==-1){let l=et+t,d=Ou(e,l),u=$g(e[ne],l),h=Rw(d,u,e),_=Il(e,u,n,{dehydratedView:h});Tl(d,_,a,Ra(u,h))}}finally{K(s)}}else if(o!==void 0){let s=Tw(o,a);s!==void 0&&(s[lt]=n)}}var Hg=class{lContainer;$implicit;$index;constructor(n,e,i){this.lContainer=n,this.$implicit=e,this.$index=i}get $count(){return this.lContainer.length-rt}};function im(t,n){return n}var Ug=class{hasEmptyBlock;trackByFn;liveCollection;constructor(n,e,i){this.hasEmptyBlock=n,this.trackByFn=e,this.liveCollection=i}};function He(t,n,e,i,r,o,a,s,l,d,u,h,_){ii("NgControlFlow");let v=J(),w=We(),F=l!==void 0,U=J(),Q=s?a.bind(U[Xt][lt]):a,Ie=new Ug(F,Q);U[et+t]=Ie,Oa(v,w,t+1,n,e,i,r,yn(w.consts,o),256),F&&Oa(v,w,t+2,l,d,u,h,yn(w.consts,_),512)}var zg=class extends Bg{lContainer;hostLView;templateTNode;operationsCounter=void 0;needsIndexUpdate=!1;constructor(n,e,i){super(),this.lContainer=n,this.hostLView=e,this.templateTNode=i}get length(){return this.lContainer.length-rt}at(n){return this.getLView(n)[lt].$implicit}attach(n,e){let i=e[bo];this.needsIndexUpdate||=n!==this.length,Tl(this.lContainer,e,n,Ra(this.templateTNode,i)),$R(this.lContainer,n)}detach(n){return this.needsIndexUpdate||=n!==this.length-1,WR(this.lContainer,n),GR(this.lContainer,n)}create(n,e){let i=Eu(this.lContainer,this.templateTNode.tView.ssrId);return Il(this.hostLView,this.templateTNode,new Hg(this.lContainer,e,n),{dehydratedView:i})}destroy(n){Gu(n[ne],n)}updateValue(n,e){this.getLView(n)[lt].$implicit=e}reset(){this.needsIndexUpdate=!1}updateIndexes(){if(this.needsIndexUpdate)for(let n=0;n<this.length;n++)this.getLView(n)[lt].$index=n}getLView(n){return qR(this.lContainer,n)}};function Ue(t){let n=K(null),e=wi();try{let i=J(),r=i[ne],o=i[e],a=e+1,s=Ou(i,a);if(o.liveCollection===void 0){let d=$g(r,a);o.liveCollection=new zg(s,i,d)}else o.liveCollection.reset();let l=o.liveCollection;if(zR(l,t,o.trackByFn,n),l.updateIndexes(),o.hasEmptyBlock){let d=Ci(),u=l.length===0;if(rn(i,d,u)){let h=e+2,_=Ou(i,h);if(u){let v=$g(r,h),w=Rw(_,v,i),F=Il(i,v,void 0,{dehydratedView:w});Tl(_,F,0,Ra(v,w))}else r.firstUpdatePass&&HA(_),kw(_,0)}}}finally{K(n)}}function Ou(t,n){return t[n]}function $R(t,n){if(t.length<=rt)return;let e=rt+n,i=t[e],r=i?i[Xi]:void 0;if(i&&r&&r.detachedLeaveAnimationFns&&r.detachedLeaveAnimationFns.length>0){let o=i[_n];Zk(o,r),To.delete(i[Ki]),r.detachedLeaveAnimationFns=void 0}}function WR(t,n){if(t.length<=rt)return;let e=rt+n,i=t[e],r=i?i[Xi]:void 0;r&&r.leave&&r.leave.size>0&&(r.detachedLeaveAnimationFns=[])}function GR(t,n){return wl(t,n)}function qR(t,n){return Tw(t,n)}function $g(t,n){return Qd(t,n)}function R(t,n,e){let i=J(),r=Ci();if(rn(i,r,n)){let o=We(),a=Da();mw(a,i,t,n,i[Ve],e)}return R}function Wg(t,n,e,i,r){Qu(n,t,e,r?"class":"style",i)}function m(t,n,e,i){let r=J(),o=r[ne],a=t+et,s=o.firstCreatePass?Lw(a,r,2,n,pw,Hp(),e,i):o.data[a];if(bi(s)){let l=r[_i].tracingService;if(l&&l.componentCreate){let d=o.data[s.directiveStart+s.componentOffset];return l.componentCreate(Uw(d),()=>(eC(t,n,r,s,i),m))}}return eC(t,n,r,s,i),m}function eC(t,n,e,i,r){if(_w(i,e,t,n,rD),ul(i)){let o=e[ne];h_(o,e,i),FC(o,i,e)}r!=null&&Yu(e,i)}function f(){let t=We(),n=Dt(),e=vw(n);return t.firstCreatePass&&Vw(t,e),zp(e)&&$p(),jp(),e.classesWithoutHost!=null&&kT(e)&&Wg(t,e,J(),e.classesWithoutHost,!0),e.stylesWithoutHost!=null&&AT(e)&&Wg(t,e,J(),e.stylesWithoutHost,!1),f}function T(t,n,e,i){return m(t,n,e,i),f(),T}function Me(t,n,e,i){let r=J(),o=r[ne],a=t+et,s=o.firstCreatePass?tR(a,o,2,n,e,i):o.data[a];return _w(s,r,t,n,rD),i!=null&&Yu(r,s),Me}function ke(){let t=Dt(),n=vw(t);return zp(n)&&$p(),jp(),ke}function on(t,n,e,i){return Me(t,n,e,i),ke(),on}var rD=(t,n,e,i,r)=>(ou(!0),UC(n[Ve],i,v0()));function Le(){return J()}function qt(t,n,e){let i=J(),r=Ci();if(rn(i,r,n)){let o=We(),a=Da();fw(a,i,t,n,i[Ve],e)}return qt}var Nl="en-US";var YR=Nl;function oD(t){typeof t=="string"&&(YR=t.toLowerCase().replace(/_/g,"-"))}function M(t,n,e){let i=J(),r=We(),o=Dt();return aD(r,i,i[Ve],o,t,n,e),M}function Fn(t,n,e){let i=J(),r=We(),o=Dt();return(o.type&3||e)&&jw(o,r,i,e,i[Ve],t,n,pu(o,i,n)),Fn}function aD(t,n,e,i,r,o,a){let s=!0,l=null;if((i.type&3||a)&&(l??=pu(i,n,o),jw(i,t,n,a,e,r,o,l)&&(s=!1)),s){let d=i.outputs?.[r],u=i.hostDirectiveOutputs?.[r];if(u&&u.length)for(let h=0;h<u.length;h+=2){let _=u[h],v=u[h+1];l??=pu(i,n,o),Y0(i,n,_,v,r,l)}if(d&&d.length)for(let h of d)l??=pu(i,n,o),Y0(i,n,h,r,r,l)}}function D(t=1){return _0(t)}function QR(t,n){let e=null,i=Ek(t);for(let r=0;r<n.length;r++){let o=n[r];if(o==="*"){e=r;continue}if(i===null?YC(t,o,!0):Ik(i,o))return r}return e}function Se(t){let n=J()[Xt][Kt];if(!n.projection){let e=t?t.length:1,i=n.projection=zy(e,null),r=i.slice(),o=n.child;for(;o!==null;){if(o.type!==128){let a=t?QR(o,t):0;a!==null&&(r[a]?r[a].projectionNext=o:i[a]=o,r[a]=o)}o=o.next}}}function ee(t,n=0,e,i,r,o){let a=J(),s=We(),l=i?t+1:null;l!==null&&Oa(a,s,l,i,r,o,null,e);let d=Va(s,et+t,16,null,e||null);d.projection===null&&(d.projection=n),qp();let h=!a[bo]||Up();a[Xt][Kt].projection[d.projection]===null&&l!==null?ZR(a,s,l):h&&!Bu(d)&&lA(s,a,d)}function ZR(t,n,e){let i=et+e,r=n.data[i],o=t[i],a=Eu(o,r.tView.ssrId),s=Il(t,r,void 0,{dehydratedView:a});Tl(o,s,0,Ra(r,a))}function Mt(t,n,e,i){return Yw(t,n,e,i),Mt}function Ce(t,n,e){return qw(t,n,e),Ce}function O(t){let n=J(),e=We(),i=tu();fl(i+1);let r=b_(e,i);if(t.dirty&&Jy(n)===((r.metadata.flags&2)===2)){if(r.matches===null)t.reset([]);else{let o=Zw(n,i);t.reset(o,DC),t.notifyOnChanges()}return!0}return!1}function N(){return v_(J(),tu())}function rm(t,n,e,i,r){return Xw(n,Yw(t,e,i,r)),rm}function Ii(t,n,e,i){return Xw(t,qw(n,e,i)),Ii}function Ti(t=1){fl(tu()+t)}function an(t){let n=s0();return Op(n,et+t)}function du(t,n){return t<<17|n<<2}function ko(t){return t>>17&32767}function KR(t){return(t&2)==2}function XR(t,n){return t&131071|n<<17}function Gg(t){return t|2}function Na(t){return(t&131068)>>2}function cg(t,n){return t&-131069|n<<2}function JR(t){return(t&1)===1}function qg(t){return t|1}function eO(t,n,e,i,r,o){let a=o?n.classBindings:n.styleBindings,s=ko(a),l=Na(a);t[i]=e;let d=!1,u;if(Array.isArray(e)){let h=e;u=h[1],(u===null||_a(h,u)>0)&&(d=!0)}else u=e;if(r)if(l!==0){let _=ko(t[s+1]);t[i+1]=du(_,s),_!==0&&(t[_+1]=cg(t[_+1],i)),t[s+1]=XR(t[s+1],i)}else t[i+1]=du(s,0),s!==0&&(t[s+1]=cg(t[s+1],i)),s=i;else t[i+1]=du(l,0),s===0?s=i:t[l+1]=cg(t[l+1],i),l=i;d&&(t[i+1]=Gg(t[i+1])),tC(t,u,i,!0),tC(t,u,i,!1),tO(n,u,t,i,o),a=du(s,l),o?n.classBindings=a:n.styleBindings=a}function tO(t,n,e,i,r){let o=r?t.residualClasses:t.residualStyles;o!=null&&typeof n=="string"&&_a(o,n)>=0&&(e[i+1]=qg(e[i+1]))}function tC(t,n,e,i){let r=t[e+1],o=n===null,a=i?ko(r):Na(r),s=!1;for(;a!==0&&(s===!1||o);){let l=t[a],d=t[a+1];nO(l,n)&&(s=!0,t[a+1]=i?qg(d):Gg(d)),a=i?ko(d):Na(d)}s&&(t[e+1]=i?Gg(r):qg(r))}function nO(t,n){return t===null||n==null||(Array.isArray(t)?t[1]:t)===n?!0:Array.isArray(t)&&typeof n=="string"?_a(t,n)>=0:!1}var xt={textEnd:0,key:0,keyEnd:0,value:0,valueEnd:0};function sD(t){return t.substring(xt.key,xt.keyEnd)}function iO(t){return t.substring(xt.value,xt.valueEnd)}function rO(t){return dD(t),lD(t,Fa(t,0,xt.textEnd))}function lD(t,n){let e=xt.textEnd;return e===n?-1:(n=xt.keyEnd=aO(t,xt.key=n,e),Fa(t,n,e))}function oO(t){return dD(t),cD(t,Fa(t,0,xt.textEnd))}function cD(t,n){let e=xt.textEnd,i=xt.key=Fa(t,n,e);return e===i?-1:(i=xt.keyEnd=sO(t,i,e),i=nC(t,i,e,58),i=xt.value=Fa(t,i,e),i=xt.valueEnd=lO(t,i,e),nC(t,i,e,59))}function dD(t){xt.key=0,xt.keyEnd=0,xt.value=0,xt.valueEnd=0,xt.textEnd=t.length}function Fa(t,n,e){for(;n<e&&t.charCodeAt(n)<=32;)n++;return n}function aO(t,n,e){for(;n<e&&t.charCodeAt(n)>32;)n++;return n}function sO(t,n,e){let i;for(;n<e&&((i=t.charCodeAt(n))===45||i===95||(i&-33)>=65&&(i&-33)<=90||i>=48&&i<=57);)n++;return n}function nC(t,n,e,i){return n=Fa(t,n,e),n<e&&n++,n}function lO(t,n,e){let i=-1,r=-1,o=-1,a=n,s=a;for(;a<e;){let l=t.charCodeAt(a++);if(l===59)return s;l===34||l===39?s=a=iC(t,l,a,e):n===a-4&&o===85&&r===82&&i===76&&l===40?s=a=iC(t,41,a,e):l>32&&(s=a),o=r,r=i,i=l&-33}return s}function iC(t,n,e,i){let r=-1,o=e;for(;o<i;){let a=t.charCodeAt(o++);if(a==n&&r!==92)return o;a==92&&r===92?r=0:r=a}throw new Error}function ki(t,n,e){return uD(t,n,e,!1),ki}function L(t,n){return uD(t,n,null,!0),L}function Fl(t){mD(pD,cO,t,!1)}function cO(t,n){for(let e=oO(n);e>=0;e=cD(n,e))pD(t,sD(n),iO(n))}function St(t){mD(gO,dO,t,!0)}function dO(t,n){for(let e=rO(n);e>=0;e=lD(n,e))ll(t,sD(n),!0)}function uD(t,n,e,i){let r=J(),o=We(),a=Jd(2);if(o.firstUpdatePass&&hD(o,t,a,i),n!==Ht&&rn(r,a,n)){let s=o.data[wi()];gD(o,s,r,r[Ve],t,r[a+1]=vO(n,e),i,a)}}function mD(t,n,e,i){let r=We(),o=Jd(2);r.firstUpdatePass&&hD(r,null,o,i);let a=J();if(e!==Ht&&rn(a,o,e)){let s=r.data[wi()];if(_D(s,i)&&!fD(r,o)){let l=i?s.classesWithoutHost:s.stylesWithoutHost;l!==null&&(e=Ud(l,e||"")),Wg(r,s,a,e,i)}else _O(r,s,a,a[Ve],a[o+1],a[o+1]=pO(t,n,e),i,o)}}function fD(t,n){return n>=t.expandoStartIndex}function hD(t,n,e,i){let r=t.data;if(r[e+1]===null){let o=r[wi()],a=fD(t,e);_D(o,i)&&n===null&&!a&&(n=!1),n=uO(r,o,n,i),eO(r,o,n,e,a,i)}}function uO(t,n,e,i){let r=f0(t),o=i?n.residualClasses:n.residualStyles;if(r===null)(i?n.classBindings:n.styleBindings)===0&&(e=dg(null,t,n,e,i),e=xl(e,n.attrs,i),o=null);else{let a=n.directiveStylingLast;if(a===-1||t[a]!==r)if(e=dg(r,t,n,e,i),o===null){let l=mO(t,n,i);l!==void 0&&Array.isArray(l)&&(l=dg(null,t,n,l[1],i),l=xl(l,n.attrs,i),fO(t,n,i,l))}else o=hO(t,n,i)}return o!==void 0&&(i?n.residualClasses=o:n.residualStyles=o),e}function mO(t,n,e){let i=e?n.classBindings:n.styleBindings;if(Na(i)!==0)return t[ko(i)]}function fO(t,n,e,i){let r=e?n.classBindings:n.styleBindings;t[ko(r)]=i}function hO(t,n,e){let i,r=n.directiveEnd;for(let o=1+n.directiveStylingLast;o<r;o++){let a=t[o].hostAttrs;i=xl(i,a,e)}return xl(i,n.attrs,e)}function dg(t,n,e,i,r){let o=null,a=e.directiveEnd,s=e.directiveStylingLast;for(s===-1?s=e.directiveStart:s++;s<a&&(o=n[s],i=xl(i,o.hostAttrs,r),o!==t);)s++;return t!==null&&(e.directiveStylingLast=s),i}function xl(t,n,e){let i=e?1:2,r=-1;if(n!==null)for(let o=0;o<n.length;o++){let a=n[o];typeof a=="number"?r=a:r===i&&(Array.isArray(t)||(t=t===void 0?[]:["",t]),ll(t,a,e?!0:n[++o]))}return t===void 0?null:t}function pO(t,n,e){if(e==null||e==="")return Wt;let i=[],r=ti(e);if(Array.isArray(r))for(let o=0;o<r.length;o++)t(i,r[o],!0);else if(r instanceof Set)for(let o of r)t(i,o,!0);else if(typeof r=="object")for(let o in r)r.hasOwnProperty(o)&&t(i,o,r[o]);else typeof r=="string"&&n(i,r);return i}function pD(t,n,e){ll(t,n,ti(e))}function gO(t,n,e){let i=String(n);i!==""&&!i.includes(" ")&&ll(t,i,e)}function _O(t,n,e,i,r,o,a,s){r===Ht&&(r=Wt);let l=0,d=0,u=0<r.length?r[0]:null,h=0<o.length?o[0]:null;for(;u!==null||h!==null;){let _=l<r.length?r[l+1]:void 0,v=d<o.length?o[d+1]:void 0,w=null,F;u===h?(l+=2,d+=2,_!==v&&(w=h,F=v)):h===null||u!==null&&u<h?(l+=2,w=u):(d+=2,w=h,F=v),w!==null&&gD(t,n,e,i,w,F,a,s),u=l<r.length?r[l]:null,h=d<o.length?o[d]:null}}function gD(t,n,e,i,r,o,a,s){if(!(n.type&3))return;let l=t.data,d=l[s+1],u=JR(d)?rC(l,n,e,r,Na(d),a):void 0;if(!Nu(u)){Nu(o)||KR(d)&&(o=rC(l,null,e,r,s,a));let h=Rp(wi(),e);dA(i,a,h,r,o)}}function rC(t,n,e,i,r,o){let a=n===null,s;for(;r>0;){let l=t[r],d=Array.isArray(l),u=d?l[1]:l,h=u===null,_=e[r+1];_===Ht&&(_=h?Wt:void 0);let v=h?qd(_,i):u===i?_:void 0;if(d&&!Nu(v)&&(v=qd(l,i)),Nu(v)&&(s=v,a))return s;let w=t[r+1];r=a?ko(w):Na(w)}if(n!==null){let l=o?n.residualClasses:n.residualStyles;l!=null&&(s=qd(l,i))}return s}function Nu(t){return t!==void 0}function vO(t,n){return t==null||t===""||(typeof n=="string"?t=t+n:typeof t=="object"&&(t=ol(ti(t)))),t}function _D(t,n){return(t.flags&(n?8:16))!==0}function g(t,n=""){let e=J(),i=We(),r=t+et,o=i.firstCreatePass?Va(i,r,1,n,null):i.data[r],a=bO(i,e,o,n);e[r]=a,ru()&&m_(i,e,a,o),wa(o,!1)}var bO=(t,n,e,i)=>(ou(!0),gk(n[Ve],i));function vD(t,n,e,i=""){return rn(t,Ci(),e)?n+ga(e)+i:Ht}function yO(t,n,e,i,r,o=""){let a=l0(),s=nR(t,a,e,r);return Jd(2),s?n+ga(e)+i+ga(r)+o:Ht}function ae(t){return fe("",t),ae}function fe(t,n,e){let i=J(),r=vD(i,t,n,e);return r!==Ht&&bD(i,wi(),r),fe}function or(t,n,e,i,r){let o=J(),a=yO(o,t,n,e,i,r);return a!==Ht&&bD(o,wi(),a),or}function bD(t,n,e){let i=Rp(n,t);_k(t[Ve],i,e)}function Ye(t,n,e){D_(n)&&(n=n());let i=J(),r=Ci();if(rn(i,r,n)){let o=We(),a=Da();mw(a,i,t,n,i[Ve],e)}return Ye}function Ee(t,n){let e=D_(t);return e&&t.set(n),e}function Qe(t,n){let e=J(),i=We(),r=Dt();return aD(i,e,e[Ve],r,t,n),Qe}function Ai(t){return rn(J(),Ci(),t)?ga(t):Ht}function Pl(t,n,e=""){return vD(J(),t,n,e)}function I_(t,n,e){let i=Xd()+t,r=J();return r[i]===Ht?__(r,i,n(e,r)):Bw(r,i)}function oC(t,n,e){let i=We();i.firstCreatePass&&yD(n,i.data,i.blueprint,yi(t),e)}function yD(t,n,e,i,r){if(t=Vt(t),Array.isArray(t))for(let o=0;o<t.length;o++)yD(t[o],n,e,i,r);else{let o=We(),a=J(),s=Dt(),l=go(t)?t:Vt(t.provide),d=Mp(t),u=s.providerIndexes&1048575,h=s.directiveStart,_=s.providerIndexes>>20;if(go(t)||!t.multi){let v=new Io(d,r,we,null),w=mg(l,n,r?u:u+_,h);w===-1?(hg(yu(s,a),o,l),ug(o,t,n.length),n.push(l),s.directiveStart++,s.directiveEnd++,r&&(s.providerIndexes+=1048576),e.push(v),a.push(v)):(e[w]=v,a[w]=v)}else{let v=mg(l,n,u+_,h),w=mg(l,n,u,u+_),F=v>=0&&e[v],U=w>=0&&e[w];if(r&&!U||!r&&!F){hg(yu(s,a),o,l);let Q=DO(r?wO:CO,e.length,r,i,d,t);!r&&U&&(e[w].providerFactory=Q),ug(o,t,n.length,0),n.push(l),s.directiveStart++,s.directiveEnd++,r&&(s.providerIndexes+=1048576),e.push(Q),a.push(Q)}else{let Q=CD(e[r?w:v],d,!r&&i);ug(o,t,v>-1?v:w,Q)}!r&&i&&U&&e[w].componentProviders++}}}function ug(t,n,e,i){let r=go(n),o=Qy(n);if(r||o){let l=(o?Vt(n.useClass):n).prototype.ngOnDestroy;if(l){let d=t.destroyHooks||(t.destroyHooks=[]);if(!r&&n.multi){let u=d.indexOf(e);u===-1?d.push(e,[i,l]):d[u+1].push(i,l)}else d.push(e,l)}}}function CD(t,n,e){return e&&t.componentProviders++,t.multi.push(n)-1}function mg(t,n,e,i){for(let r=e;r<i;r++)if(n[r]===t)return r;return-1}function CO(t,n,e,i,r){return Yg(this.multi,[])}function wO(t,n,e,i,r){let o=this.multi,a;if(this.providerFactory){let s=this.providerFactory.componentProviders,l=vl(i,i[ne],this.providerFactory.index,r);a=l.slice(0,s),Yg(o,a);for(let d=s;d<l.length;d++)a.push(l[d])}else a=[],Yg(o,a);return a}function Yg(t,n){for(let e=0;e<t.length;e++){let i=t[e];n.push(i())}return n}function DO(t,n,e,i,r,o){let a=new Io(t,e,we,null);return a.multi=[],a.index=n,a.componentProviders=0,CD(a,r,i&&!e),a}function Be(t,n){return e=>{e.providersResolver=(i,r)=>oC(i,r?r(t):t,!1),n&&(e.viewProvidersResolver=(i,r)=>oC(i,r?r(n):n,!0))}}function T_(t,n){let e=Xd()+t,i=J();return i[e]===Ht?__(i,e,n()):Bw(i,e)}function xO(t,n){let e=t[n];return e===Ht?void 0:e}function EO(t,n,e,i,r,o){let a=n+e;return rn(t,a,r)?__(t,a+1,o?i.call(o,r):i(r)):xO(t,a+1)}function Ll(t,n){let e=We(),i,r=t+et;e.firstCreatePass?(i=MO(n,e.pipeRegistry),e.data[r]=i,i.onDestroy&&(e.destroyHooks??=[]).push(r,i.onDestroy)):i=e.data[r];let o=i.factory||(i.factory=Ir(i.type,!0)),a,s=Zt(we);try{let l=bu(!1),d=o();return bu(l),Np(e,J(),r,d),d}finally{Zt(s)}}function MO(t,n){if(n)for(let e=n.length-1;e>=0;e--){let i=n[e];if(t===i.name)return i}}function Vl(t,n,e){let i=t+et,r=J(),o=Op(r,i);return SO(r,i)?EO(r,Xd(),n,o.transform,e,o):o.transform(e)}function SO(t,n){return t[ne].data[n].pure}function om(t,n){return Zu(t,n)}var Fu=class{ngModuleFactory;componentFactories;constructor(n,e){this.ngModuleFactory=n,this.componentFactories=e}},k_=(()=>{class t{compileModuleSync(e){return new Au(e)}compileModuleAsync(e){return Promise.resolve(this.compileModuleSync(e))}compileModuleAndAllComponentsSync(e){let i=this.compileModuleSync(e),r=_p(e),o=GC(r.declarations).reduce((a,s)=>{let l=pi(s);return l&&a.push(new Lr(l)),a},[]);return new Fu(i,o)}compileModuleAndAllComponentsAsync(e){return Promise.resolve(this.compileModuleAndAllComponentsSync(e))}clearCache(){}clearCacheFor(e){}getModuleId(e){}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var wD=(()=>{class t{applicationErrorHandler=c(Cn);appRef=c(wn);taskService=c(er);ngZone=c(V);zonelessEnabled=c(hl);tracing=c(ni,{optional:!0});zoneIsDefined=typeof Zone<"u"&&!!Zone.root.run;schedulerTickApplyArgs=[{data:{__scheduler_tick__:!0}}];subscriptions=new oe;angularZoneId=this.zoneIsDefined?this.ngZone._inner?.get(il):null;scheduleInRootZone=!this.zonelessEnabled&&this.zoneIsDefined&&(c(ng,{optional:!0})??!1);cancelScheduledCallback=null;useMicrotaskScheduler=!1;runningTick=!1;pendingRenderTaskId=null;constructor(){this.subscriptions.add(this.appRef.afterTick.subscribe(()=>{let e=this.taskService.add();if(!this.runningTick&&(this.cleanup(),!this.zonelessEnabled||this.appRef.includeAllTestViews)){this.taskService.remove(e);return}this.switchToMicrotaskScheduler(),this.taskService.remove(e)})),this.subscriptions.add(this.ngZone.onUnstable.subscribe(()=>{this.runningTick||this.cleanup()}))}switchToMicrotaskScheduler(){this.ngZone.runOutsideAngular(()=>{let e=this.taskService.add();this.useMicrotaskScheduler=!0,queueMicrotask(()=>{this.useMicrotaskScheduler=!1,this.taskService.remove(e)})})}notify(e){if(!this.zonelessEnabled&&e===5)return;switch(e){case 0:{this.appRef.dirtyFlags|=2;break}case 3:case 2:case 4:case 5:case 1:{this.appRef.dirtyFlags|=4;break}case 6:{this.appRef.dirtyFlags|=2;break}case 12:{this.appRef.dirtyFlags|=16;break}case 13:{this.appRef.dirtyFlags|=2;break}case 11:break;default:this.appRef.dirtyFlags|=8}if(this.appRef.tracingSnapshot=this.tracing?.snapshot(this.appRef.tracingSnapshot)??null,!this.shouldScheduleTick())return;let i=this.useMicrotaskScheduler?w0:Xp;this.pendingRenderTaskId=this.taskService.add(),this.scheduleInRootZone?this.cancelScheduledCallback=Zone.root.run(()=>i(()=>this.tick())):this.cancelScheduledCallback=this.ngZone.runOutsideAngular(()=>i(()=>this.tick()))}shouldScheduleTick(){return!(this.appRef.destroyed||this.pendingRenderTaskId!==null||this.runningTick||this.appRef._runningTick||!this.zonelessEnabled&&this.zoneIsDefined&&Zone.current.get(il+this.angularZoneId))}tick(){if(this.runningTick||this.appRef.destroyed)return;if(this.appRef.dirtyFlags===0){this.cleanup();return}!this.zonelessEnabled&&this.appRef.dirtyFlags&7&&(this.appRef.dirtyFlags|=1);let e=this.taskService.add();try{this.ngZone.run(()=>{this.runningTick=!0,this.appRef._tick()},void 0,this.schedulerTickApplyArgs)}catch(i){this.applicationErrorHandler(i)}finally{this.taskService.remove(e),this.cleanup()}}ngOnDestroy(){this.subscriptions.unsubscribe(),this.cleanup()}cleanup(){if(this.runningTick=!1,this.cancelScheduledCallback?.(),this.cancelScheduledCallback=null,this.pendingRenderTaskId!==null){let e=this.pendingRenderTaskId;this.pendingRenderTaskId=null,this.taskService.remove(e)}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function DD(){return[{provide:hi,useExisting:wD},{provide:V,useClass:rl},{provide:hl,useValue:!0}]}function IO(){return typeof $localize<"u"&&$localize.locale||Nl}var ja=new y("",{factory:()=>c(ja,{optional:!0,skipSelf:!0})||IO()});var am=class{destroyed=!1;listeners=null;errorHandler=c(Gt,{optional:!0});destroyRef=c(Bt);constructor(){this.destroyRef.onDestroy(()=>{this.destroyed=!0,this.listeners=null})}subscribe(n){if(this.destroyed)throw new P(953,!1);return(this.listeners??=[]).push(n),{unsubscribe:()=>{let e=this.listeners?.indexOf(n);e!==void 0&&e!==-1&&this.listeners?.splice(e,1)}}}emit(n){if(this.destroyed){console.warn(An(953,!1));return}if(this.listeners===null)return;let e=K(null);try{for(let i of this.listeners)try{i(n)}catch(r){this.errorHandler?.handleError(r)}}finally{K(e)}}};function ot(t){return Ay(t)}function _t(t,n){return Us(t,n?.equal)}var cm=Symbol("InputSignalNode#UNSET"),kD=X(C({},zs),{transformFn:void 0,applyValueToInputSignal(t,n){oo(t,n)}});function AD(t,n){let e=Object.create(kD);e.value=t,e.transformFn=n?.transform;function i(){if(yr(e),e.value===cm){let r=null;throw new P(-950,r)}return e.value}return i[mt]=e,i}var Ri=class{attributeName;constructor(n){this.attributeName=n}__NG_ELEMENT_ID__=()=>Pu(this.attributeName);toString(){return`HostAttributeToken ${this.attributeName}`}};function xD(t,n){return AD(t,n)}function GO(t){return AD(cm,t)}var ar=(xD.required=GO,xD);function ED(t,n){return y_(n)}function qO(t,n){return C_(n)}var ri=(ED.required=qO,ED);function MD(t,n){return y_(n)}function YO(t,n){return C_(n)}var RD=(MD.required=YO,MD);function OD(t,n){let e=Object.create(kD),i=new am;e.value=t;function r(){return yr(e),SD(e.value),e.value}return r[mt]=e,r.asReadonly=au.bind(r),r.set=o=>{e.equal(e.value,o)||(oo(e,o),i.emit(o))},r.update=o=>{SD(e.value),r.set(o(e.value))},r.subscribe=i.subscribe.bind(i),r.destroyRef=i.destroyRef,r}function SD(t){if(t===cm)throw new P(952,!1)}function ID(t,n){return OD(t,n)}function QO(t){return OD(cm,t)}var Ae=(ID.required=QO,ID);var R_=new y(""),ZO=new y("");function Bl(t){return!t.moduleRef}function KO(t){let n=Bl(t)?t.r3Injector:t.moduleRef.injector,e=n.get(V);return e.run(()=>{Bl(t)?t.r3Injector.resolveInjectorInitializers():t.moduleRef.resolveInjectorInitializers();let i=n.get(Cn),r;if(e.runOutsideAngular(()=>{r=e.onError.subscribe({next:i})}),Bl(t)){let o=()=>n.destroy(),a=t.platformInjector.get(R_);a.add(o),n.onDestroy(()=>{r.unsubscribe(),a.delete(o)})}else{let o=()=>t.moduleRef.destroy(),a=t.platformInjector.get(R_);a.add(o),t.moduleRef.onDestroy(()=>{_l(t.allPlatformModules,t.moduleRef),r.unsubscribe(),a.delete(o)})}return JO(i,e,()=>{let o=n.get(er),a=o.add(),s=n.get(M_);return s.runInitializers(),s.donePromise.then(()=>{let l=n.get(ja,Nl);if(oD(l||Nl),!n.get(ZO,!0))return Bl(t)?n.get(wn):(t.allPlatformModules.push(t.moduleRef),t.moduleRef);if(Bl(t)){let u=n.get(wn);return t.rootComponent!==void 0&&u.bootstrap(t.rootComponent),u}else return XO?.(t.moduleRef,t.allPlatformModules),t.moduleRef}).finally(()=>{o.remove(a)})})})}var XO;function JO(t,n,e){try{let i=e();return rr(i)?i.catch(r=>{throw n.runOutsideAngular(()=>t(r)),r}):i}catch(i){throw n.runOutsideAngular(()=>t(i)),i}}var sm=null;function e1(t=[],n){return G.create({name:n,providers:[{provide:cl,useValue:"platform"},{provide:R_,useValue:new Set([()=>sm=null])},...t]})}function t1(t=[]){if(sm)return sm;let n=e1(t);return sm=n,nD(),n1(n),n}function n1(t){let n=t.get(Lu,null);wt(t,()=>{n?.forEach(e=>e())})}var i1=1e4;var l9=i1-1e3;var De=(()=>{class t{static __NG_ELEMENT_ID__=r1}return t})();function r1(t){return o1(Dt(),J(),(t&16)===16)}function o1(t,n,e){if(bi(t)&&!e){let i=Nn(t.index,n);return new Pr(i,i)}else if(t.type&175){let i=n[Xt];return new Pr(i,n)}return null}function ND(t){let{rootComponent:n,appProviders:e,platformProviders:i,platformRef:r}=t;Fe(xe.BootstrapApplicationStart);try{let o=r?.injector??t1(i),a=[DD(),x0,...e||[]],s=new Dl({providers:a,parent:o,debugName:"",runEnvironmentInitializers:!1});return KO({r3Injector:s.injector,platformInjector:o,rootComponent:n})}catch(o){return Promise.reject(o)}finally{Fe(xe.BootstrapApplicationEnd)}}function te(t){return typeof t=="boolean"?t:t!=null&&t!=="false"}function Oi(t,n=NaN){return!isNaN(parseFloat(t))&&!isNaN(Number(t))?Number(t):n}var A_=Symbol("NOT_SET"),FD=new Set,a1=X(C({},zs),{kind:"afterRenderEffectPhase",consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!0,value:A_,cleanup:null,consumerMarkedDirty(){if(this.sequence.impl.executing){if(this.sequence.lastPhase===null||this.sequence.lastPhase<this.phase)return;this.sequence.erroredOrDestroyed=!0}this.sequence.scheduler.notify(7)},phaseFn(t){if(this.sequence.lastPhase=this.phase,!this.dirty)return this.signal;if(this.dirty=!1,this.value!==A_&&!oa(this))return this.signal;try{for(let r of this.cleanup??FD)r()}finally{this.cleanup?.clear()}let n=[];t!==void 0&&n.push(t),n.push(this.registerCleanupFn);let e=Cr(this),i;try{i=this.userFn.apply(null,n)}finally{ro(this,e)}return(this.value===A_||!this.equal(this.value,i))&&(this.value=i,this.version++),this.signal}}),O_=class extends yl{scheduler;lastPhase=null;nodes=[void 0,void 0,void 0,void 0];onDestroyFns=null;constructor(n,e,i,r,o,a=null){super(n,[void 0,void 0,void 0,void 0],i,!1,o.get(Bt),a),this.scheduler=r;for(let s of c_){let l=e[s];if(l===void 0)continue;let d=Object.create(a1);d.sequence=this,d.phase=s,d.userFn=l,d.dirty=!0,d.signal=()=>(yr(d),d.value),d.signal[mt]=d,d.registerCleanupFn=u=>(d.cleanup??=new Set).add(u),this.nodes[s]=d,this.hooks[s]=u=>d.phaseFn(u)}}afterRun(){super.afterRun(),this.lastPhase=null}destroy(){if(this.onDestroyFns!==null)for(let n of this.onDestroyFns)n();super.destroy();for(let n of this.nodes)if(n)try{for(let e of n.cleanup??FD)e()}finally{wr(n)}}};function PD(t,n){let e=n?.injector??c(G),i=e.get(hi),r=e.get($u),o=e.get(ni,null,{optional:!0});r.impl??=e.get(d_);let a=t;typeof a=="function"&&(a={mixedReadWrite:t});let s=e.get(Ea,null,{optional:!0}),l=new O_(r.impl,[a.earlyRead,a.write,a.mixedReadWrite,a.read],s?.view,i,e,o?.snapshot(null));return r.impl.register(l),l}function dm(t,n){let e=pi(t),i=n.elementInjector||va();return new Lr(e).create(i,n.projectableNodes,n.hostElement,n.environmentInjector,n.directives,n.bindings)}function LD(t){let n=pi(t);if(!n)return null;let e=new Lr(n);return{get selector(){return e.selector},get type(){return e.componentType},get inputs(){return e.inputs},get outputs(){return e.outputs},get ngContentSelectors(){return e.ngContentSelectors},get isStandalone(){return n.standalone},get isSignal(){return n.signals}}}var VD=null;function Pn(){return VD}function N_(t){VD??=t}var jl=class{},sr=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:()=>c(BD),providedIn:"platform"})}return t})(),F_=new y(""),BD=(()=>{class t extends sr{_location;_history;_doc=c(Y);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return Pn().getBaseHref(this._doc)}onPopState(e){let i=Pn().getGlobalEventTarget(this._doc,"window");return i.addEventListener("popstate",e,!1),()=>i.removeEventListener("popstate",e)}onHashChange(e){let i=Pn().getGlobalEventTarget(this._doc,"window");return i.addEventListener("hashchange",e,!1),()=>i.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,i,r){this._history.pushState(e,i,r)}replaceState(e,i,r){this._history.replaceState(e,i,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:()=>new t,providedIn:"platform"})}return t})();function um(t,n){return t?n?t.endsWith("/")?n.startsWith("/")?t+n.slice(1):t+n:n.startsWith("/")?t+n:`${t}/${n}`:t:n}function jD(t){let n=t.search(/#|\?|$/);return t[n-1]==="/"?t.slice(0,n-1)+t.slice(n):t}function oi(t){return t&&t[0]!=="?"?`?${t}`:t}var lr=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:()=>c(fm),providedIn:"root"})}return t})(),mm=new y(""),fm=(()=>{class t extends lr{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,i){super(),this._platformLocation=e,this._baseHref=i??this._platformLocation.getBaseHrefFromDOM()??c(Y).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return um(this._baseHref,e)}path(e=!1){let i=this._platformLocation.pathname+oi(this._platformLocation.search),r=this._platformLocation.hash;return r&&e?`${i}${r}`:i}pushState(e,i,r,o){let a=this.prepareExternalUrl(r+oi(o));this._platformLocation.pushState(e,i,a)}replaceState(e,i,r,o){let a=this.prepareExternalUrl(r+oi(o));this._platformLocation.replaceState(e,i,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(i){return new(i||t)(W(sr),W(mm,8))};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Ni=(()=>{class t{_subject=new S;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let i=this._locationStrategy.getBaseHref();this._basePath=c1(jD(HD(i))),this._locationStrategy.onPopState(r=>{this._subject.next({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,i=""){return this.path()==this.normalize(e+oi(i))}normalize(e){return t.stripTrailingSlash(l1(this._basePath,HD(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,i="",r=null){this._locationStrategy.pushState(r,"",e,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+oi(i)),r)}replaceState(e,i="",r=null){this._locationStrategy.replaceState(r,"",e,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+oi(i)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(i=>{this._notifyUrlChangeListeners(i.url,i.state)}),()=>{let i=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(i,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",i){this._urlChangeListeners.forEach(r=>r(e,i))}subscribe(e,i,r){return this._subject.subscribe({next:e,error:i??void 0,complete:r??void 0})}static normalizeQueryParams=oi;static joinWithSlash=um;static stripTrailingSlash=jD;static \u0275fac=function(i){return new(i||t)(W(lr))};static \u0275prov=b({token:t,factory:()=>s1(),providedIn:"root"})}return t})();function s1(){return new Ni(W(lr))}function l1(t,n){if(!t||!n.startsWith(t))return n;let e=n.substring(t.length);return e===""||["/",";","?","#"].includes(e[0])?e:n}function HD(t){return t.replace(/\/index.html$/,"")}function c1(t){if(new RegExp("^(https?:)?//").test(t)){let[,e]=t.split(/\/\/[^\/]+/);return e}return t}var V_=(()=>{class t extends lr{_platformLocation;_baseHref="";_removeListenerFns=[];constructor(e,i){super(),this._platformLocation=e,i!=null&&(this._baseHref=i)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}path(e=!1){let i=this._platformLocation.hash??"#";return i.length>0?i.substring(1):i}prepareExternalUrl(e){let i=um(this._baseHref,e);return i.length>0?"#"+i:i}pushState(e,i,r,o){let a=this.prepareExternalUrl(r+oi(o))||this._platformLocation.pathname;this._platformLocation.pushState(e,i,a)}replaceState(e,i,r,o){let a=this.prepareExternalUrl(r+oi(o))||this._platformLocation.pathname;this._platformLocation.replaceState(e,i,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(i){return new(i||t)(W(sr),W(mm,8))};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})();var B_=(()=>{class t{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;injector=c(G);constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let i=this._viewContainerRef;if(this._viewRef&&i.remove(i.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let r=this._createContextForwardProxy();this._viewRef=i.createEmbeddedView(this.ngTemplateOutlet,r,{injector:this._getInjector()})}}_getInjector(){return this.ngTemplateOutletInjector==="outlet"?this.injector:this.ngTemplateOutletInjector??void 0}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,i,r)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,i,r):!1,get:(e,i,r)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,i,r)}})}static \u0275fac=function(i){return new(i||t)(we(Et))};static \u0275dir=A({type:t,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[Pe]})}return t})();function u1(t,n){return new P(2100,!1)}var P_=class{createSubscription(n,e,i){return ot(()=>n.subscribe({next:e,error:i}))}dispose(n){ot(()=>n.unsubscribe())}},L_=class{createSubscription(n,e,i){return n.then(r=>e?.(r),r=>i?.(r)),{unsubscribe:()=>{e=null,i=null}}}dispose(n){n.unsubscribe()}},m1=new L_,f1=new P_,j_=(()=>{class t{_ref;_latestValue=null;markForCheckOnValueUpdate=!0;_subscription=null;_obj=null;_strategy=null;applicationErrorHandler=c(Cn);constructor(e){this._ref=e}ngOnDestroy(){this._subscription&&this._dispose(),this._ref=null}transform(e){if(!this._obj){if(e)try{this.markForCheckOnValueUpdate=!1,this._subscribe(e)}finally{this.markForCheckOnValueUpdate=!0}return this._latestValue}return e!==this._obj?(this._dispose(),this.transform(e)):this._latestValue}_subscribe(e){this._obj=e,this._strategy=this._selectStrategy(e),this._subscription=this._strategy.createSubscription(e,i=>this._updateLatestValue(e,i),i=>this.applicationErrorHandler(i))}_selectStrategy(e){if(rr(e))return m1;if(em(e))return f1;throw u1(t,e)}_dispose(){this._strategy.dispose(this._subscription),this._latestValue=null,this._subscription=null,this._obj=null}_updateLatestValue(e,i){e===this._obj&&(this._latestValue=i,this.markForCheckOnValueUpdate&&this._ref?.markForCheck())}static \u0275fac=function(i){return new(i||t)(we(De,16))};static \u0275pipe=w_({name:"async",type:t,pure:!1})}return t})();var Br=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=$({type:t});static \u0275inj=z({})}return t})();function Hl(t,n){n=encodeURIComponent(n);for(let e of t.split(";")){let i=e.indexOf("="),[r,o]=i==-1?[e,""]:[e.slice(0,i),e.slice(i+1)];if(r.trim()===n)return decodeURIComponent(o)}return null}var Oo=class{};var U_="browser";function UD(t){return t===U_}var z_=(()=>{class t{static \u0275prov=b({token:t,providedIn:"root",factory:()=>new H_(c(Y),window)})}return t})(),H_=class{document;window;offset=()=>[0,0];constructor(n,e){this.document=n,this.window=e}setOffset(n){Array.isArray(n)?this.offset=()=>n:this.offset=n}getScrollPosition(){return[this.window.scrollX,this.window.scrollY]}scrollToPosition(n,e){this.window.scrollTo(X(C({},e),{left:n[0],top:n[1]}))}scrollToAnchor(n,e){let i=p1(this.document,n);i&&(this.scrollToElement(i,e),i.focus())}setHistoryScrollRestoration(n){try{this.window.history.scrollRestoration=n}catch{console.warn(An(2400,!1))}}scrollToElement(n,e){let i=n.getBoundingClientRect(),r=i.left+this.window.pageXOffset,o=i.top+this.window.pageYOffset,a=this.offset();this.window.scrollTo(X(C({},e),{left:r-a[0],top:o-a[1]}))}};function p1(t,n){let e=t.getElementById(n)||t.getElementsByName(n)[0];if(e)return e;if(typeof t.createTreeWalker=="function"&&t.body&&typeof t.body.attachShadow=="function"){let i=t.createTreeWalker(t.body,NodeFilter.SHOW_ELEMENT),r=i.currentNode;for(;r;){let o=r.shadowRoot;if(o){let a=o.getElementById(n)||o.querySelector(`[name="${n}"]`);if(a)return a}r=i.nextNode()}}return null}var Ul=class{_doc;constructor(n){this._doc=n}manager},hm=(()=>{class t extends Ul{constructor(e){super(e)}supports(e){return!0}addEventListener(e,i,r,o){return e.addEventListener(i,r,o),()=>this.removeEventListener(e,i,r,o)}removeEventListener(e,i,r,o){return e.removeEventListener(i,r,o)}static \u0275fac=function(i){return new(i||t)(W(Y))};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})(),_m=new y(""),q_=(()=>{class t{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,i){this._zone=i,e.forEach(a=>{a.manager=this});let r=e.filter(a=>!(a instanceof hm));this._plugins=r.slice().reverse();let o=e.find(a=>a instanceof hm);o&&this._plugins.push(o)}addEventListener(e,i,r,o){return this._findPluginFor(i).addEventListener(e,i,r,o)}getZone(){return this._zone}_findPluginFor(e){let i=this._eventNameToPlugin.get(e);if(i)return i;if(i=this._plugins.find(o=>o.supports(e)),!i)throw new P(5101,!1);return this._eventNameToPlugin.set(e,i),i}static \u0275fac=function(i){return new(i||t)(W(_m),W(V))};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})(),$_="ng-app-id";function zD(t){for(let n of t)n.remove()}function $D(t,n){let e=n.createElement("style");return e.textContent=t,e}function g1(t,n,e,i){let r=t.head?.querySelectorAll(`style[${$_}="${n}"],link[${$_}="${n}"]`);if(r)for(let o of r)o.removeAttribute($_),o instanceof HTMLLinkElement?i.set(o.href.slice(o.href.lastIndexOf("/")+1),{usage:0,elements:[o]}):o.textContent&&e.set(o.textContent,{usage:0,elements:[o]})}function G_(t,n){let e=n.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",t),e}var Y_=(()=>{class t{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(e,i,r,o={}){this.doc=e,this.appId=i,this.nonce=r,g1(e,i,this.inline,this.external),this.hosts.add(e.head)}addStyles(e,i){for(let r of e)this.addUsage(r,this.inline,$D);i?.forEach(r=>this.addUsage(r,this.external,G_))}removeStyles(e,i){for(let r of e)this.removeUsage(r,this.inline);i?.forEach(r=>this.removeUsage(r,this.external))}addUsage(e,i,r){let o=i.get(e);o?o.usage++:i.set(e,{usage:1,elements:[...this.hosts].map(a=>this.addElement(a,r(e,this.doc)))})}removeUsage(e,i){let r=i.get(e);r&&(r.usage--,r.usage<=0&&(zD(r.elements),i.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])zD(e);this.hosts.clear()}addHost(e){this.hosts.add(e);for(let[i,{elements:r}]of this.inline)r.push(this.addElement(e,$D(i,this.doc)));for(let[i,{elements:r}]of this.external)r.push(this.addElement(e,G_(i,this.doc)))}removeHost(e){this.hosts.delete(e)}addElement(e,i){return this.nonce&&i.setAttribute("nonce",this.nonce),e.appendChild(i)}static \u0275fac=function(i){return new(i||t)(W(Y),W(Vr),W(La,8),W(Ao))};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})(),W_={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},Q_=/%COMP%/g;var GD="%COMP%",_1=`_nghost-${GD}`,v1=`_ngcontent-${GD}`,b1=!0,y1=new y("",{factory:()=>b1});function C1(t){return v1.replace(Q_,t)}function w1(t){return _1.replace(Q_,t)}function qD(t,n){return n.map(e=>e.replace(Q_,t))}var Z_=(()=>{class t{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;constructor(e,i,r,o,a,s,l=null,d=null){this.eventManager=e,this.sharedStylesHost=i,this.appId=r,this.removeStylesOnCompDestroy=o,this.doc=a,this.ngZone=s,this.nonce=l,this.tracingService=d,this.defaultRenderer=new zl(e,a,s,this.tracingService)}createRenderer(e,i){if(!e||!i)return this.defaultRenderer;let r=this.getOrCreateRenderer(e,i);return r instanceof gm?r.applyToHost(e):r instanceof $l&&r.applyStyles(),r}getOrCreateRenderer(e,i){let r=this.rendererByCompId,o=r.get(i.id);if(!o){let a=this.doc,s=this.ngZone,l=this.eventManager,d=this.sharedStylesHost,u=this.removeStylesOnCompDestroy,h=this.tracingService;switch(i.encapsulation){case ei.Emulated:o=new gm(l,d,i,this.appId,u,a,s,h);break;case ei.ShadowDom:return new pm(l,e,i,a,s,this.nonce,h,d);case ei.ExperimentalIsolatedShadowDom:return new pm(l,e,i,a,s,this.nonce,h);default:o=new $l(l,d,i,u,a,s,h);break}r.set(i.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(i){return new(i||t)(W(q_),W(Y_),W(Vr),W(y1),W(Y),W(V),W(La),W(ni,8))};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})(),zl=class{eventManager;doc;ngZone;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(n,e,i,r){this.eventManager=n,this.doc=e,this.ngZone=i,this.tracingService=r}destroy(){}destroyNode=null;createElement(n,e){return e?this.doc.createElementNS(W_[e]||e,n):this.doc.createElement(n)}createComment(n){return this.doc.createComment(n)}createText(n){return this.doc.createTextNode(n)}appendChild(n,e){(WD(n)?n.content:n).appendChild(e)}insertBefore(n,e,i){n&&(WD(n)?n.content:n).insertBefore(e,i)}removeChild(n,e){e.remove()}selectRootElement(n,e){let i=typeof n=="string"?this.doc.querySelector(n):n;if(!i)throw new P(-5104,!1);return e||(i.textContent=""),i}parentNode(n){return n.parentNode}nextSibling(n){return n.nextSibling}setAttribute(n,e,i,r){if(r){e=r+":"+e;let o=W_[r];o?n.setAttributeNS(o,e,i):n.setAttribute(e,i)}else n.setAttribute(e,i)}removeAttribute(n,e,i){if(i){let r=W_[i];r?n.removeAttributeNS(r,e):n.removeAttribute(`${i}:${e}`)}else n.removeAttribute(e)}addClass(n,e){n.classList.add(e)}removeClass(n,e){n.classList.remove(e)}setStyle(n,e,i,r){r&(Ei.DashCase|Ei.Important)?n.style.setProperty(e,i,r&Ei.Important?"important":""):n.style[e]=i}removeStyle(n,e,i){i&Ei.DashCase?n.style.removeProperty(e):n.style[e]=""}setProperty(n,e,i){n!=null&&(n[e]=i)}setValue(n,e){n.nodeValue=e}listen(n,e,i,r){if(typeof n=="string"&&(n=Pn().getGlobalEventTarget(this.doc,n),!n))throw new P(5102,!1);let o=this.decoratePreventDefault(i);return this.tracingService?.wrapEventListener&&(o=this.tracingService.wrapEventListener(n,e,o)),this.eventManager.addEventListener(n,e,o,r)}decoratePreventDefault(n){return e=>{if(e==="__ngUnwrap__")return n;n(e)===!1&&e.preventDefault()}}};function WD(t){return t.tagName==="TEMPLATE"&&t.content!==void 0}var pm=class extends zl{hostEl;sharedStylesHost;shadowRoot;constructor(n,e,i,r,o,a,s,l){super(n,r,o,s),this.hostEl=e,this.sharedStylesHost=l,this.shadowRoot=e.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let d=i.styles;d=qD(i.id,d);for(let h of d){let _=document.createElement("style");a&&_.setAttribute("nonce",a),_.textContent=h,this.shadowRoot.appendChild(_)}let u=i.getExternalStyles?.();if(u)for(let h of u){let _=G_(h,r);a&&_.setAttribute("nonce",a),this.shadowRoot.appendChild(_)}}nodeOrShadowRoot(n){return n===this.hostEl?this.shadowRoot:n}appendChild(n,e){return super.appendChild(this.nodeOrShadowRoot(n),e)}insertBefore(n,e,i){return super.insertBefore(this.nodeOrShadowRoot(n),e,i)}removeChild(n,e){return super.removeChild(null,e)}parentNode(n){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(n)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},$l=class extends zl{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(n,e,i,r,o,a,s,l){super(n,o,a,s),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=r;let d=i.styles;this.styles=l?qD(l,d):d,this.styleUrls=i.getExternalStyles?.(l)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&To.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},gm=class extends $l{contentAttr;hostAttr;constructor(n,e,i,r,o,a,s,l){let d=r+"-"+i.id;super(n,e,i,o,a,s,l,d),this.contentAttr=C1(d),this.hostAttr=w1(d)}applyToHost(n){this.applyStyles(),this.setAttribute(n,this.hostAttr,"")}createElement(n,e){let i=super.createElement(n,e);return super.setAttribute(i,this.contentAttr,""),i}};var vm=class t extends jl{supportsDOMEvents=!0;static makeCurrent(){N_(new t)}onAndCancel(n,e,i,r){return n.addEventListener(e,i,r),()=>{n.removeEventListener(e,i,r)}}dispatchEvent(n,e){n.dispatchEvent(e)}remove(n){n.remove()}createElement(n,e){return e=e||this.getDefaultDocument(),e.createElement(n)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(n){return n.nodeType===Node.ELEMENT_NODE}isShadowRoot(n){return n instanceof DocumentFragment}getGlobalEventTarget(n,e){return e==="window"?window:e==="document"?n:e==="body"?n.body:null}getBaseHref(n){let e=D1();return e==null?null:x1(e)}resetBaseElement(){Wl=null}getUserAgent(){return window.navigator.userAgent}getCookie(n){return Hl(document.cookie,n)}},Wl=null;function D1(){return Wl=Wl||document.head.querySelector("base"),Wl?Wl.getAttribute("href"):null}function x1(t){return new URL(t,document.baseURI).pathname}var E1=(()=>{class t{build(){return new XMLHttpRequest}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})(),YD=["alt","control","meta","shift"],M1={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},S1={alt:t=>t.altKey,control:t=>t.ctrlKey,meta:t=>t.metaKey,shift:t=>t.shiftKey},QD=(()=>{class t extends Ul{constructor(e){super(e)}supports(e){return t.parseEventName(e)!=null}addEventListener(e,i,r,o){let a=t.parseEventName(i),s=t.eventCallback(a.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Pn().onAndCancel(e,a.domEventName,s,o))}static parseEventName(e){let i=e.toLowerCase().split("."),r=i.shift();if(i.length===0||!(r==="keydown"||r==="keyup"))return null;let o=t._normalizeKey(i.pop()),a="",s=i.indexOf("code");if(s>-1&&(i.splice(s,1),a="code."),YD.forEach(d=>{let u=i.indexOf(d);u>-1&&(i.splice(u,1),a+=d+".")}),a+=o,i.length!=0||o.length===0)return null;let l={};return l.domEventName=r,l.fullKey=a,l}static matchEventFullKeyCode(e,i){let r=M1[e.key]||e.key,o="";return i.indexOf("code.")>-1&&(r=e.code,o="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),YD.forEach(a=>{if(a!==r){let s=S1[a];s(e)&&(o+=a+".")}}),o+=r,o===i)}static eventCallback(e,i,r){return o=>{t.matchEventFullKeyCode(o,e)&&r.runGuarded(()=>i(o))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(i){return new(i||t)(W(Y))};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})();async function K_(t,n,e){let i=C({rootComponent:t},I1(n,e));return ND(i)}function I1(t,n){return{platformRef:n?.platformRef,appProviders:[...O1,...t?.providers??[]],platformProviders:R1}}function T1(){vm.makeCurrent()}function k1(){return new Gt}function A1(){return Kg(document),document}var R1=[{provide:Ao,useValue:U_},{provide:Lu,useValue:T1,multi:!0},{provide:Y,useFactory:A1}];var O1=[{provide:cl,useValue:"root"},{provide:Gt,useFactory:k1},{provide:_m,useClass:hm,multi:!0},{provide:_m,useClass:QD,multi:!0},Z_,Y_,q_,{provide:gt,useExisting:Z_},{provide:Oo,useClass:E1},[]];var jr=class t{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(n){n?typeof n=="string"?this.lazyInit=()=>{this.headers=new Map,n.split(`
`).forEach(e=>{let i=e.indexOf(":");if(i>0){let r=e.slice(0,i),o=e.slice(i+1).trim();this.addHeaderEntry(r,o)}})}:typeof Headers<"u"&&n instanceof Headers?(this.headers=new Map,n.forEach((e,i)=>{this.addHeaderEntry(i,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(n).forEach(([e,i])=>{this.setHeaderEntries(e,i)})}:this.headers=new Map}has(n){return this.init(),this.headers.has(n.toLowerCase())}get(n){this.init();let e=this.headers.get(n.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(n){return this.init(),this.headers.get(n.toLowerCase())||null}append(n,e){return this.clone({name:n,value:e,op:"a"})}set(n,e){return this.clone({name:n,value:e,op:"s"})}delete(n,e){return this.clone({name:n,value:e,op:"d"})}maybeSetNormalizedName(n,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,n)}init(){this.lazyInit&&(this.lazyInit instanceof t?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(n=>this.applyUpdate(n)),this.lazyUpdate=null))}copyFrom(n){n.init(),Array.from(n.headers.keys()).forEach(e=>{this.headers.set(e,n.headers.get(e)),this.normalizedNames.set(e,n.normalizedNames.get(e))})}clone(n){let e=new t;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof t?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([n]),e}applyUpdate(n){let e=n.name.toLowerCase();switch(n.op){case"a":case"s":let i=n.value;if(typeof i=="string"&&(i=[i]),i.length===0)return;this.maybeSetNormalizedName(n.name,e);let r=(n.op==="a"?this.headers.get(e):void 0)||[];r.push(...i),this.headers.set(e,r);break;case"d":let o=n.value;if(!o)this.headers.delete(e),this.normalizedNames.delete(e);else{let a=this.headers.get(e);if(!a)return;a=a.filter(s=>o.indexOf(s)===-1),a.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,a)}break}}addHeaderEntry(n,e){let i=n.toLowerCase();this.maybeSetNormalizedName(n,i),this.headers.has(i)?this.headers.get(i).push(e):this.headers.set(i,[e])}setHeaderEntries(n,e){let i=(Array.isArray(e)?e:[e]).map(o=>o.toString()),r=n.toLowerCase();this.headers.set(r,i),this.maybeSetNormalizedName(n,r)}forEach(n){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>n(this.normalizedNames.get(e),this.headers.get(e)))}};var ym=class{map=new Map;set(n,e){return this.map.set(n,e),this}get(n){return this.map.has(n)||this.map.set(n,n.defaultValue()),this.map.get(n)}delete(n){return this.map.delete(n),this}has(n){return this.map.has(n)}keys(){return this.map.keys()}},Cm=class{encodeKey(n){return ZD(n)}encodeValue(n){return ZD(n)}decodeKey(n){return decodeURIComponent(n)}decodeValue(n){return decodeURIComponent(n)}};function N1(t,n){let e=new Map;return t.length>0&&t.replace(/^\?/,"").split("&").forEach(r=>{let o=r.indexOf("="),[a,s]=o==-1?[n.decodeKey(r),""]:[n.decodeKey(r.slice(0,o)),n.decodeValue(r.slice(o+1))],l=e.get(a)||[];l.push(s),e.set(a,l)}),e}var F1=/%(\d[a-f0-9])/gi,P1={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function ZD(t){return encodeURIComponent(t).replace(F1,(n,e)=>P1[e]??n)}function bm(t){return`${t}`}var Nt=class t{map;encoder;updates=null;cloneFrom=null;constructor(n={}){if(this.encoder=n.encoder||new Cm,n.fromString){if(n.fromObject)throw new P(2805,!1);this.map=N1(n.fromString,this.encoder)}else n.fromObject?(this.map=new Map,Object.keys(n.fromObject).forEach(e=>{let i=n.fromObject[e],r=Array.isArray(i)?i.map(bm):[bm(i)];this.map.set(e,r)})):this.map=null}has(n){return this.init(),this.map.has(n)}get(n){this.init();let e=this.map.get(n);return e?e[0]:null}getAll(n){return this.init(),this.map.get(n)||null}keys(){return this.init(),Array.from(this.map.keys())}append(n,e){return this.clone({param:n,value:e,op:"a"})}appendAll(n){let e=[];return Object.keys(n).forEach(i=>{let r=n[i];Array.isArray(r)?r.forEach(o=>{e.push({param:i,value:o,op:"a"})}):e.push({param:i,value:r,op:"a"})}),this.clone(e)}set(n,e){return this.clone({param:n,value:e,op:"s"})}delete(n,e){return this.clone({param:n,value:e,op:"d"})}toString(){return this.init(),this.keys().map(n=>{let e=this.encoder.encodeKey(n);return this.map.get(n).map(i=>e+"="+this.encoder.encodeValue(i)).join("&")}).filter(n=>n!=="").join("&")}clone(n){let e=new t({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(n),e}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(n=>this.map.set(n,this.cloneFrom.map.get(n))),this.updates.forEach(n=>{switch(n.op){case"a":case"s":let e=(n.op==="a"?this.map.get(n.param):void 0)||[];e.push(bm(n.value)),this.map.set(n.param,e);break;case"d":if(n.value!==void 0){let i=this.map.get(n.param)||[],r=i.indexOf(bm(n.value));r!==-1&&i.splice(r,1),i.length>0?this.map.set(n.param,i):this.map.delete(n.param)}else{this.map.delete(n.param);break}}}),this.cloneFrom=this.updates=null)}};function L1(t){switch(t){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function KD(t){return typeof ArrayBuffer<"u"&&t instanceof ArrayBuffer}function XD(t){return typeof Blob<"u"&&t instanceof Blob}function JD(t){return typeof FormData<"u"&&t instanceof FormData}function V1(t){return typeof URLSearchParams<"u"&&t instanceof URLSearchParams}var ex="Content-Type",tx="Accept",ix="text/plain",rx="application/json",B1=`${rx}, ${ix}, */*`,Ha=class t{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(n,e,i,r){this.url=e,this.method=n.toUpperCase();let o;if(L1(this.method)||r?(this.body=i!==void 0?i:null,o=r):o=i,o){if(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,this.keepalive=!!o.keepalive,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),o.priority&&(this.priority=o.priority),o.cache&&(this.cache=o.cache),o.credentials&&(this.credentials=o.credentials),typeof o.timeout=="number"){if(o.timeout<1||!Number.isInteger(o.timeout))throw new P(2822,"");this.timeout=o.timeout}o.mode&&(this.mode=o.mode),o.redirect&&(this.redirect=o.redirect),o.integrity&&(this.integrity=o.integrity),o.referrer&&(this.referrer=o.referrer),o.referrerPolicy&&(this.referrerPolicy=o.referrerPolicy),this.transferCache=o.transferCache}if(this.headers??=new jr,this.context??=new ym,!this.params)this.params=new Nt,this.urlWithParams=e;else{let a=this.params.toString();if(a.length===0)this.urlWithParams=e;else{let s=e.indexOf("?"),l=s===-1?"?":s<e.length-1?"&":"";this.urlWithParams=e+l+a}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||KD(this.body)||XD(this.body)||JD(this.body)||V1(this.body)?this.body:this.body instanceof Nt?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||JD(this.body)?null:XD(this.body)?this.body.type||null:KD(this.body)?null:typeof this.body=="string"?ix:this.body instanceof Nt?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?rx:null}clone(n={}){let e=n.method||this.method,i=n.url||this.url,r=n.responseType||this.responseType,o=n.keepalive??this.keepalive,a=n.priority||this.priority,s=n.cache||this.cache,l=n.mode||this.mode,d=n.redirect||this.redirect,u=n.credentials||this.credentials,h=n.referrer||this.referrer,_=n.integrity||this.integrity,v=n.referrerPolicy||this.referrerPolicy,w=n.transferCache??this.transferCache,F=n.timeout??this.timeout,U=n.body!==void 0?n.body:this.body,Q=n.withCredentials??this.withCredentials,Ie=n.reportProgress??this.reportProgress,At=n.headers||this.headers,Rt=n.params||this.params,Bs=n.context??this.context;return n.setHeaders!==void 0&&(At=Object.keys(n.setHeaders).reduce((js,no)=>js.set(no,n.setHeaders[no]),At)),n.setParams&&(Rt=Object.keys(n.setParams).reduce((js,no)=>js.set(no,n.setParams[no]),Rt)),new t(e,i,U,{params:Rt,headers:At,context:Bs,reportProgress:Ie,responseType:r,withCredentials:Q,transferCache:w,keepalive:o,cache:s,priority:a,timeout:F,mode:l,redirect:d,credentials:u,referrer:h,integrity:_,referrerPolicy:v})}},No=(function(t){return t[t.Sent=0]="Sent",t[t.UploadProgress=1]="UploadProgress",t[t.ResponseHeader=2]="ResponseHeader",t[t.DownloadProgress=3]="DownloadProgress",t[t.Response=4]="Response",t[t.User=5]="User",t})(No||{}),za=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(n,e=200,i="OK"){this.headers=n.headers||new jr,this.status=n.status!==void 0?n.status:e,this.statusText=n.statusText||i,this.url=n.url||null,this.redirected=n.redirected,this.responseType=n.responseType,this.ok=this.status>=200&&this.status<300}},wm=class t extends za{constructor(n={}){super(n)}type=No.ResponseHeader;clone(n={}){return new t({headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0})}},Gl=class t extends za{body;constructor(n={}){super(n),this.body=n.body!==void 0?n.body:null}type=No.Response;clone(n={}){return new t({body:n.body!==void 0?n.body:this.body,headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0,redirected:n.redirected??this.redirected,responseType:n.responseType??this.responseType})}},Ua=class extends za{name="HttpErrorResponse";message;error;ok=!1;constructor(n){super(n,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${n.url||"(unknown url)"}`:this.message=`Http failure response for ${n.url||"(unknown url)"}: ${n.status} ${n.statusText}`,this.error=n.error||null}},j1=200,H1=204;var U1=new y("");var z1=/^\)\]\}',?\n/;var J_=(()=>{class t{xhrFactory;tracingService=c(ni,{optional:!0});constructor(e){this.xhrFactory=e}maybePropagateTrace(e){return this.tracingService?.propagate?this.tracingService.propagate(e):e}handle(e){if(e.method==="JSONP")throw new P(-2800,!1);let i=this.xhrFactory;return q(null).pipe(ht(()=>new se(o=>{let a=i.build();if(a.open(e.method,e.urlWithParams),e.withCredentials&&(a.withCredentials=!0),e.headers.forEach((U,Q)=>a.setRequestHeader(U,Q.join(","))),e.headers.has(tx)||a.setRequestHeader(tx,B1),!e.headers.has(ex)){let U=e.detectContentTypeHeader();U!==null&&a.setRequestHeader(ex,U)}if(e.timeout&&(a.timeout=e.timeout),e.responseType){let U=e.responseType.toLowerCase();a.responseType=U!=="json"?U:"text"}let s=e.serializeBody(),l=null,d=()=>{if(l!==null)return l;let U=a.statusText||"OK",Q=new jr(a.getAllResponseHeaders()),Ie=a.responseURL||e.url;return l=new wm({headers:Q,status:a.status,statusText:U,url:Ie}),l},u=this.maybePropagateTrace(()=>{let{headers:U,status:Q,statusText:Ie,url:At}=d(),Rt=null;Q!==H1&&(Rt=typeof a.response>"u"?a.responseText:a.response),Q===0&&(Q=Rt?j1:0);let Bs=Q>=200&&Q<300;if(e.responseType==="json"&&typeof Rt=="string"){let js=Rt;Rt=Rt.replace(z1,"");try{Rt=Rt!==""?JSON.parse(Rt):null}catch(no){Rt=js,Bs&&(Bs=!1,Rt={error:no,text:Rt})}}Bs?(o.next(new Gl({body:Rt,headers:U,status:Q,statusText:Ie,url:At||void 0})),o.complete()):o.error(new Ua({error:Rt,headers:U,status:Q,statusText:Ie,url:At||void 0}))}),h=this.maybePropagateTrace(U=>{let{url:Q}=d(),Ie=new Ua({error:U,status:a.status||0,statusText:a.statusText||"Unknown Error",url:Q||void 0});o.error(Ie)}),_=h;e.timeout&&(_=this.maybePropagateTrace(U=>{let{url:Q}=d(),Ie=new Ua({error:new DOMException("Request timed out","TimeoutError"),status:a.status||0,statusText:a.statusText||"Request timeout",url:Q||void 0});o.error(Ie)}));let v=!1,w=this.maybePropagateTrace(U=>{v||(o.next(d()),v=!0);let Q={type:No.DownloadProgress,loaded:U.loaded};U.lengthComputable&&(Q.total=U.total),e.responseType==="text"&&a.responseText&&(Q.partialText=a.responseText),o.next(Q)}),F=this.maybePropagateTrace(U=>{let Q={type:No.UploadProgress,loaded:U.loaded};U.lengthComputable&&(Q.total=U.total),o.next(Q)});return a.addEventListener("load",u),a.addEventListener("error",h),a.addEventListener("timeout",_),a.addEventListener("abort",h),e.reportProgress&&(a.addEventListener("progress",w),s!==null&&a.upload&&a.upload.addEventListener("progress",F)),a.send(s),o.next({type:No.Sent}),()=>{a.removeEventListener("error",h),a.removeEventListener("abort",h),a.removeEventListener("load",u),a.removeEventListener("timeout",_),e.reportProgress&&(a.removeEventListener("progress",w),s!==null&&a.upload&&a.upload.removeEventListener("progress",F)),a.readyState!==a.DONE&&a.abort()}})))}static \u0275fac=function(i){return new(i||t)(W(Oo))};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function ox(t,n){return n(t)}function $1(t,n){return(e,i)=>n.intercept(e,{handle:r=>t(r,i)})}function W1(t,n,e){return(i,r)=>wt(e,()=>n(i,o=>t(o,r)))}var xm=new y(""),ev=new y("",{factory:()=>[]}),ax=new y(""),tv=new y("",{factory:()=>!0});function G1(){let t=null;return(n,e)=>{t===null&&(t=(c(xm,{optional:!0})??[]).reduceRight($1,ox));let i=c(Ma);if(c(tv)){let o=i.add();return t(n,e).pipe(Sr(o))}else return t(n,e)}}var nv=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=W(J_),r},providedIn:"root"})}return t})();var Dm=(()=>{class t{backend;injector;chain=null;pendingTasks=c(Ma);contributeToStability=c(tv);constructor(e,i){this.backend=e,this.injector=i}handle(e){if(this.chain===null){let i=Array.from(new Set([...this.injector.get(ev),...this.injector.get(ax,[])]));this.chain=i.reduceRight((r,o)=>W1(r,o,this.injector),ox)}if(this.contributeToStability){let i=this.pendingTasks.add();return this.chain(e,r=>this.backend.handle(r)).pipe(Sr(i))}else return this.chain(e,i=>this.backend.handle(i))}static \u0275fac=function(i){return new(i||t)(W(nv),W(Ne))};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),iv=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=W(Dm),r},providedIn:"root"})}return t})();function X_(t,n){return{body:n,headers:t.headers,context:t.context,observe:t.observe,params:t.params,reportProgress:t.reportProgress,responseType:t.responseType,withCredentials:t.withCredentials,credentials:t.credentials,transferCache:t.transferCache,timeout:t.timeout,keepalive:t.keepalive,priority:t.priority,cache:t.cache,mode:t.mode,redirect:t.redirect,integrity:t.integrity,referrer:t.referrer,referrerPolicy:t.referrerPolicy}}var vt=(()=>{class t{handler;constructor(e){this.handler=e}request(e,i,r={}){let o;if(e instanceof Ha)o=e;else{let l;r.headers instanceof jr?l=r.headers:l=new jr(r.headers);let d;r.params&&(r.params instanceof Nt?d=r.params:d=new Nt({fromObject:r.params})),o=new Ha(e,i,r.body!==void 0?r.body:null,{headers:l,context:r.context,params:d,reportProgress:r.reportProgress,responseType:r.responseType||"json",withCredentials:r.withCredentials,transferCache:r.transferCache,keepalive:r.keepalive,priority:r.priority,cache:r.cache,mode:r.mode,redirect:r.redirect,credentials:r.credentials,referrer:r.referrer,referrerPolicy:r.referrerPolicy,integrity:r.integrity,timeout:r.timeout})}let a=q(o).pipe(Mr(l=>this.handler.handle(l)));if(e instanceof Ha||r.observe==="events")return a;let s=a.pipe(be(l=>l instanceof Gl));switch(r.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return s.pipe(le(l=>{if(l.body!==null&&!(l.body instanceof ArrayBuffer))throw new P(2806,!1);return l.body}));case"blob":return s.pipe(le(l=>{if(l.body!==null&&!(l.body instanceof Blob))throw new P(2807,!1);return l.body}));case"text":return s.pipe(le(l=>{if(l.body!==null&&typeof l.body!="string")throw new P(2808,!1);return l.body}));default:return s.pipe(le(l=>l.body))}case"response":return s;default:throw new P(2809,!1)}}delete(e,i={}){return this.request("DELETE",e,i)}get(e,i={}){return this.request("GET",e,i)}head(e,i={}){return this.request("HEAD",e,i)}jsonp(e,i){return this.request("JSONP",e,{params:new Nt().append(i,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,i={}){return this.request("OPTIONS",e,i)}patch(e,i,r={}){return this.request("PATCH",e,X_(r,i))}post(e,i,r={}){return this.request("POST",e,X_(r,i))}put(e,i,r={}){return this.request("PUT",e,X_(r,i))}static \u0275fac=function(i){return new(i||t)(W(iv))};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var q1=new y("",{factory:()=>!0}),Y1="XSRF-TOKEN",Q1=new y("",{factory:()=>Y1}),Z1="X-XSRF-TOKEN",K1=new y("",{factory:()=>Z1}),X1=(()=>{class t{cookieName=c(Q1);doc=c(Y);lastCookieString="";lastToken=null;parseCount=0;getToken(){let e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=Hl(e,this.cookieName),this.lastCookieString=e),this.lastToken}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),sx=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=W(X1),r},providedIn:"root"})}return t})();function J1(t,n){if(!c(q1)||t.method==="GET"||t.method==="HEAD")return n(t);try{let r=c(sr).href,{origin:o}=new URL(r),{origin:a}=new URL(t.url,o);if(o!==a)return n(t)}catch{return n(t)}let e=c(sx).getToken(),i=c(K1);return e!=null&&!t.headers.has(i)&&(t=t.clone({headers:t.headers.set(i,e)})),n(t)}var rv=(function(t){return t[t.Interceptors=0]="Interceptors",t[t.LegacyInterceptors=1]="LegacyInterceptors",t[t.CustomXsrfConfiguration=2]="CustomXsrfConfiguration",t[t.NoXsrfProtection=3]="NoXsrfProtection",t[t.JsonpSupport=4]="JsonpSupport",t[t.RequestsMadeViaParent=5]="RequestsMadeViaParent",t[t.Fetch=6]="Fetch",t})(rv||{});function eN(t,n){return{\u0275kind:t,\u0275providers:n}}function ov(...t){let n=[vt,Dm,{provide:iv,useExisting:Dm},{provide:nv,useFactory:()=>c(U1,{optional:!0})??c(J_)},{provide:ev,useValue:J1,multi:!0}];for(let e of t)n.push(...e.\u0275providers);return gi(n)}var nx=new y("");function av(){return eN(rv.LegacyInterceptors,[{provide:nx,useFactory:G1},{provide:ev,useExisting:nx,multi:!0}])}var lx=(()=>{class t{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(i){return new(i||t)(W(Y))};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var ql=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=W(nN),r},providedIn:"root"})}return t})(),nN=(()=>{class t extends ql{_doc;constructor(e){super(),this._doc=e}sanitize(e,i){if(i==null)return null;switch(e){case jt.NONE:return i;case jt.HTML:return Ro(i,"HTML")?ti(i):i_(this._doc,String(i)).toString();case jt.STYLE:return Ro(i,"Style")?ti(i):i;case jt.SCRIPT:if(Ro(i,"Script"))return ti(i);throw new P(5200,!1);case jt.URL:return Ro(i,"URL")?ti(i):Hu(String(i));case jt.RESOURCE_URL:if(Ro(i,"ResourceURL"))return ti(i);throw new P(5201,!1);default:throw new P(5202,!1)}}bypassSecurityTrustHtml(e){return Xg(e)}bypassSecurityTrustStyle(e){return Jg(e)}bypassSecurityTrustScript(e){return e_(e)}bypassSecurityTrustUrl(e){return t_(e)}bypassSecurityTrustResourceUrl(e){return n_(e)}static \u0275fac=function(i){return new(i||t)(W(Y))};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var de="primary",oc=Symbol("RouteTitle"),uv=class{params;constructor(n){this.params=n||{}}has(n){return Object.prototype.hasOwnProperty.call(this.params,n)}get(n){if(this.has(n)){let e=this.params[n];return Array.isArray(e)?e[0]:e}return null}getAll(n){if(this.has(n)){let e=this.params[n];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function Po(t){return new uv(t)}function sv(t,n,e){for(let i=0;i<t.length;i++){let r=t[i],o=n[i];if(r[0]===":")e[r.substring(1)]=o;else if(r!==o.path)return!1}return!0}function _x(t,n,e){let i=e.path.split("/"),r=i.indexOf("**");if(r===-1){if(i.length>t.length||e.pathMatch==="full"&&(n.hasChildren()||i.length<t.length))return null;let l={},d=t.slice(0,i.length);return sv(i,d,l)?{consumed:d,posParams:l}:null}if(r!==i.lastIndexOf("**"))return null;let o=i.slice(0,r),a=i.slice(r+1);if(o.length+a.length>t.length||e.pathMatch==="full"&&n.hasChildren()&&e.path!=="**")return null;let s={};return!sv(o,t.slice(0,o.length),s)||!sv(a,t.slice(t.length-a.length),s)?null:{consumed:t,posParams:s}}function km(t){return new Promise((n,e)=>{t.pipe(Qi()).subscribe({next:i=>n(i),error:i=>e(i)})})}function iN(t,n){if(t.length!==n.length)return!1;for(let e=0;e<t.length;++e)if(!Fi(t[e],n[e]))return!1;return!0}function Fi(t,n){let e=t?mv(t):void 0,i=n?mv(n):void 0;if(!e||!i||e.length!=i.length)return!1;let r;for(let o=0;o<e.length;o++)if(r=e[o],!vx(t[r],n[r]))return!1;return!0}function mv(t){return[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function vx(t,n){if(Array.isArray(t)&&Array.isArray(n)){if(t.length!==n.length)return!1;let e=[...t].sort(),i=[...n].sort();return e.every((r,o)=>i[o]===r)}else return t===n}function rN(t){return t.length>0?t[t.length-1]:null}function Vo(t){return Ys(t)?t:rr(t)?$e(Promise.resolve(t)):q(t)}function bx(t){return Ys(t)?km(t):Promise.resolve(t)}var oN={exact:wx,subset:Dx},yx={exact:aN,subset:sN,ignored:()=>!0},Cx={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},fv={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};function dx(t,n,e){return oN[e.paths](t.root,n.root,e.matrixParams)&&yx[e.queryParams](t.queryParams,n.queryParams)&&!(e.fragment==="exact"&&t.fragment!==n.fragment)}function aN(t,n){return Fi(t,n)}function wx(t,n,e){if(!Fo(t.segments,n.segments)||!Sm(t.segments,n.segments,e)||t.numberOfChildren!==n.numberOfChildren)return!1;for(let i in n.children)if(!t.children[i]||!wx(t.children[i],n.children[i],e))return!1;return!0}function sN(t,n){return Object.keys(n).length<=Object.keys(t).length&&Object.keys(n).every(e=>vx(t[e],n[e]))}function Dx(t,n,e){return xx(t,n,n.segments,e)}function xx(t,n,e,i){if(t.segments.length>e.length){let r=t.segments.slice(0,e.length);return!(!Fo(r,e)||n.hasChildren()||!Sm(r,e,i))}else if(t.segments.length===e.length){if(!Fo(t.segments,e)||!Sm(t.segments,e,i))return!1;for(let r in n.children)if(!t.children[r]||!Dx(t.children[r],n.children[r],i))return!1;return!0}else{let r=e.slice(0,t.segments.length),o=e.slice(t.segments.length);return!Fo(t.segments,r)||!Sm(t.segments,r,i)||!t.children[de]?!1:xx(t.children[de],n,o,i)}}function Sm(t,n,e){return n.every((i,r)=>yx[e](t[r].parameters,i.parameters))}var Vn=class{root;queryParams;fragment;_queryParamMap;constructor(n=new Re([],{}),e={},i=null){this.root=n,this.queryParams=e,this.fragment=i}get queryParamMap(){return this._queryParamMap??=Po(this.queryParams),this._queryParamMap}toString(){return dN.serialize(this)}},Re=class{segments;children;parent=null;constructor(n,e){this.segments=n,this.children=e,Object.values(e).forEach(i=>i.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return Im(this)}},Hr=class{path;parameters;_parameterMap;constructor(n,e){this.path=n,this.parameters=e}get parameterMap(){return this._parameterMap??=Po(this.parameters),this._parameterMap}toString(){return Mx(this)}};function lN(t,n){return Fo(t,n)&&t.every((e,i)=>Fi(e.parameters,n[i].parameters))}function Fo(t,n){return t.length!==n.length?!1:t.every((e,i)=>e.path===n[i].path)}function cN(t,n){let e=[];return Object.entries(t.children).forEach(([i,r])=>{i===de&&(e=e.concat(n(r,i)))}),Object.entries(t.children).forEach(([i,r])=>{i!==de&&(e=e.concat(n(r,i)))}),e}var Bo=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:()=>new dr,providedIn:"root"})}return t})(),dr=class{parse(n){let e=new pv(n);return new Vn(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(n){let e=`/${Yl(n.root,!0)}`,i=fN(n.queryParams),r=typeof n.fragment=="string"?`#${uN(n.fragment)}`:"";return`${e}${i}${r}`}},dN=new dr;function Im(t){return t.segments.map(n=>Mx(n)).join("/")}function Yl(t,n){if(!t.hasChildren())return Im(t);if(n){let e=t.children[de]?Yl(t.children[de],!1):"",i=[];return Object.entries(t.children).forEach(([r,o])=>{r!==de&&i.push(`${r}:${Yl(o,!1)}`)}),i.length>0?`${e}(${i.join("//")})`:e}else{let e=cN(t,(i,r)=>r===de?[Yl(t.children[de],!1)]:[`${r}:${Yl(i,!1)}`]);return Object.keys(t.children).length===1&&t.children[de]!=null?`${Im(t)}/${e[0]}`:`${Im(t)}/(${e.join("//")})`}}function Ex(t){return encodeURIComponent(t).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function Em(t){return Ex(t).replace(/%3B/gi,";")}function uN(t){return encodeURI(t)}function hv(t){return Ex(t).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function Tm(t){return decodeURIComponent(t)}function ux(t){return Tm(t.replace(/\+/g,"%20"))}function Mx(t){return`${hv(t.path)}${mN(t.parameters)}`}function mN(t){return Object.entries(t).map(([n,e])=>`;${hv(n)}=${hv(e)}`).join("")}function fN(t){let n=Object.entries(t).map(([e,i])=>Array.isArray(i)?i.map(r=>`${Em(e)}=${Em(r)}`).join("&"):`${Em(e)}=${Em(i)}`).filter(e=>e);return n.length?`?${n.join("&")}`:""}var hN=/^[^\/()?;#]+/;function lv(t){let n=t.match(hN);return n?n[0]:""}var pN=/^[^\/()?;=#]+/;function gN(t){let n=t.match(pN);return n?n[0]:""}var _N=/^[^=?&#]+/;function vN(t){let n=t.match(_N);return n?n[0]:""}var bN=/^[^&#]+/;function yN(t){let n=t.match(bN);return n?n[0]:""}var pv=class{url;remaining;constructor(n){this.url=n,this.remaining=n}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new Re([],{}):new Re([],this.parseChildren())}parseQueryParams(){let n={};if(this.consumeOptional("?"))do this.parseQueryParam(n);while(this.consumeOptional("&"));return n}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(n=0){if(n>50)throw new P(4010,!1);if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let i={};this.peekStartsWith("/(")&&(this.capture("/"),i=this.parseParens(!0,n));let r={};return this.peekStartsWith("(")&&(r=this.parseParens(!1,n)),(e.length>0||Object.keys(i).length>0)&&(r[de]=new Re(e,i)),r}parseSegment(){let n=lv(this.remaining);if(n===""&&this.peekStartsWith(";"))throw new P(4009,!1);return this.capture(n),new Hr(Tm(n),this.parseMatrixParams())}parseMatrixParams(){let n={};for(;this.consumeOptional(";");)this.parseParam(n);return n}parseParam(n){let e=gN(this.remaining);if(!e)return;this.capture(e);let i="";if(this.consumeOptional("=")){let r=lv(this.remaining);r&&(i=r,this.capture(i))}n[Tm(e)]=Tm(i)}parseQueryParam(n){let e=vN(this.remaining);if(!e)return;this.capture(e);let i="";if(this.consumeOptional("=")){let a=yN(this.remaining);a&&(i=a,this.capture(i))}let r=ux(e),o=ux(i);if(n.hasOwnProperty(r)){let a=n[r];Array.isArray(a)||(a=[a],n[r]=a),a.push(o)}else n[r]=o}parseParens(n,e){let i={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let r=lv(this.remaining),o=this.remaining[r.length];if(o!=="/"&&o!==")"&&o!==";")throw new P(4010,!1);let a;r.indexOf(":")>-1?(a=r.slice(0,r.indexOf(":")),this.capture(a),this.capture(":")):n&&(a=de);let s=this.parseChildren(e+1);i[a??de]=Object.keys(s).length===1&&s[de]?s[de]:new Re([],s),this.consumeOptional("//")}return i}peekStartsWith(n){return this.remaining.startsWith(n)}consumeOptional(n){return this.peekStartsWith(n)?(this.remaining=this.remaining.substring(n.length),!0):!1}capture(n){if(!this.consumeOptional(n))throw new P(4011,!1)}};function Sx(t){return t.segments.length>0?new Re([],{[de]:t}):t}function Ix(t){let n={};for(let[i,r]of Object.entries(t.children)){let o=Ix(r);if(i===de&&o.segments.length===0&&o.hasChildren())for(let[a,s]of Object.entries(o.children))n[a]=s;else(o.segments.length>0||o.hasChildren())&&(n[i]=o)}let e=new Re(t.segments,n);return CN(e)}function CN(t){if(t.numberOfChildren===1&&t.children[de]){let n=t.children[de];return new Re(t.segments.concat(n.segments),n.children)}return t}function Ya(t){return t instanceof Vn}function Tx(t,n,e=null,i=null,r=new dr){let o=kx(t);return Ax(o,n,e,i,r)}function kx(t){let n;function e(o){let a={};for(let l of o.children){let d=e(l);a[l.outlet]=d}let s=new Re(o.url,a);return o===t&&(n=s),s}let i=e(t.root),r=Sx(i);return n??r}function Ax(t,n,e,i,r){let o=t;for(;o.parent;)o=o.parent;if(n.length===0)return cv(o,o,o,e,i,r);let a=wN(n);if(a.toRoot())return cv(o,o,new Re([],{}),e,i,r);let s=DN(a,o,t),l=s.processChildren?Zl(s.segmentGroup,s.index,a.commands):Ox(s.segmentGroup,s.index,a.commands);return cv(o,s.segmentGroup,l,e,i,r)}function Am(t){return typeof t=="object"&&t!=null&&!t.outlets&&!t.segmentPath}function Xl(t){return typeof t=="object"&&t!=null&&t.outlets}function mx(t,n,e){t||="\u0275";let i=new Vn;return i.queryParams={[t]:n},e.parse(e.serialize(i)).queryParams[t]}function cv(t,n,e,i,r,o){let a={};for(let[d,u]of Object.entries(i??{}))a[d]=Array.isArray(u)?u.map(h=>mx(d,h,o)):mx(d,u,o);let s;t===n?s=e:s=Rx(t,n,e);let l=Sx(Ix(s));return new Vn(l,a,r)}function Rx(t,n,e){let i={};return Object.entries(t.children).forEach(([r,o])=>{o===n?i[r]=e:i[r]=Rx(o,n,e)}),new Re(t.segments,i)}var Rm=class{isAbsolute;numberOfDoubleDots;commands;constructor(n,e,i){if(this.isAbsolute=n,this.numberOfDoubleDots=e,this.commands=i,n&&i.length>0&&Am(i[0]))throw new P(4003,!1);let r=i.find(Xl);if(r&&r!==rN(i))throw new P(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function wN(t){if(typeof t[0]=="string"&&t.length===1&&t[0]==="/")return new Rm(!0,0,t);let n=0,e=!1,i=t.reduce((r,o,a)=>{if(typeof o=="object"&&o!=null){if(o.outlets){let s={};return Object.entries(o.outlets).forEach(([l,d])=>{s[l]=typeof d=="string"?d.split("/"):d}),[...r,{outlets:s}]}if(o.segmentPath)return[...r,o.segmentPath]}return typeof o!="string"?[...r,o]:a===0?(o.split("/").forEach((s,l)=>{l==0&&s==="."||(l==0&&s===""?e=!0:s===".."?n++:s!=""&&r.push(s))}),r):[...r,o]},[]);return new Rm(e,n,i)}var Wa=class{segmentGroup;processChildren;index;constructor(n,e,i){this.segmentGroup=n,this.processChildren=e,this.index=i}};function DN(t,n,e){if(t.isAbsolute)return new Wa(n,!0,0);if(!e)return new Wa(n,!1,NaN);if(e.parent===null)return new Wa(e,!0,0);let i=Am(t.commands[0])?0:1,r=e.segments.length-1+i;return xN(e,r,t.numberOfDoubleDots)}function xN(t,n,e){let i=t,r=n,o=e;for(;o>r;){if(o-=r,i=i.parent,!i)throw new P(4005,!1);r=i.segments.length}return new Wa(i,!1,r-o)}function EN(t){return Xl(t[0])?t[0].outlets:{[de]:t}}function Ox(t,n,e){if(t??=new Re([],{}),t.segments.length===0&&t.hasChildren())return Zl(t,n,e);let i=MN(t,n,e),r=e.slice(i.commandIndex);if(i.match&&i.pathIndex<t.segments.length){let o=new Re(t.segments.slice(0,i.pathIndex),{});return o.children[de]=new Re(t.segments.slice(i.pathIndex),t.children),Zl(o,0,r)}else return i.match&&r.length===0?new Re(t.segments,{}):i.match&&!t.hasChildren()?gv(t,n,e):i.match?Zl(t,0,r):gv(t,n,e)}function Zl(t,n,e){if(e.length===0)return new Re(t.segments,{});{let i=EN(e),r={};if(Object.keys(i).some(o=>o!==de)&&t.children[de]&&t.numberOfChildren===1&&t.children[de].segments.length===0){let o=Zl(t.children[de],n,e);return new Re(t.segments,o.children)}return Object.entries(i).forEach(([o,a])=>{typeof a=="string"&&(a=[a]),a!==null&&(r[o]=Ox(t.children[o],n,a))}),Object.entries(t.children).forEach(([o,a])=>{i[o]===void 0&&(r[o]=a)}),new Re(t.segments,r)}}function MN(t,n,e){let i=0,r=n,o={match:!1,pathIndex:0,commandIndex:0};for(;r<t.segments.length;){if(i>=e.length)return o;let a=t.segments[r],s=e[i];if(Xl(s))break;let l=`${s}`,d=i<e.length-1?e[i+1]:null;if(r>0&&l===void 0)break;if(l&&d&&typeof d=="object"&&d.outlets===void 0){if(!hx(l,d,a))return o;i+=2}else{if(!hx(l,{},a))return o;i++}r++}return{match:!0,pathIndex:r,commandIndex:i}}function gv(t,n,e){let i=t.segments.slice(0,n),r=0;for(;r<e.length;){let o=e[r];if(Xl(o)){let l=SN(o.outlets);return new Re(i,l)}if(r===0&&Am(e[0])){let l=t.segments[n];i.push(new Hr(l.path,fx(e[0]))),r++;continue}let a=Xl(o)?o.outlets[de]:`${o}`,s=r<e.length-1?e[r+1]:null;a&&s&&Am(s)?(i.push(new Hr(a,fx(s))),r+=2):(i.push(new Hr(a,{})),r++)}return new Re(i,{})}function SN(t){let n={};return Object.entries(t).forEach(([e,i])=>{typeof i=="string"&&(i=[i]),i!==null&&(n[e]=gv(new Re([],{}),0,i))}),n}function fx(t){let n={};return Object.entries(t).forEach(([e,i])=>n[e]=`${i}`),n}function hx(t,n,e){return t==e.path&&Fi(n,e.parameters)}var Ga="imperative",It=(function(t){return t[t.NavigationStart=0]="NavigationStart",t[t.NavigationEnd=1]="NavigationEnd",t[t.NavigationCancel=2]="NavigationCancel",t[t.NavigationError=3]="NavigationError",t[t.RoutesRecognized=4]="RoutesRecognized",t[t.ResolveStart=5]="ResolveStart",t[t.ResolveEnd=6]="ResolveEnd",t[t.GuardsCheckStart=7]="GuardsCheckStart",t[t.GuardsCheckEnd=8]="GuardsCheckEnd",t[t.RouteConfigLoadStart=9]="RouteConfigLoadStart",t[t.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",t[t.ChildActivationStart=11]="ChildActivationStart",t[t.ChildActivationEnd=12]="ChildActivationEnd",t[t.ActivationStart=13]="ActivationStart",t[t.ActivationEnd=14]="ActivationEnd",t[t.Scroll=15]="Scroll",t[t.NavigationSkipped=16]="NavigationSkipped",t})(It||{}),xn=class{id;url;constructor(n,e){this.id=n,this.url=e}},Ur=class extends xn{type=It.NavigationStart;navigationTrigger;restoredState;constructor(n,e,i="imperative",r=null){super(n,e),this.navigationTrigger=i,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},si=class extends xn{urlAfterRedirects;type=It.NavigationEnd;constructor(n,e,i){super(n,e),this.urlAfterRedirects=i}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},Yt=(function(t){return t[t.Redirect=0]="Redirect",t[t.SupersededByNewNavigation=1]="SupersededByNewNavigation",t[t.NoDataFromResolver=2]="NoDataFromResolver",t[t.GuardRejected=3]="GuardRejected",t[t.Aborted=4]="Aborted",t})(Yt||{}),Qa=(function(t){return t[t.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",t[t.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",t})(Qa||{}),Ln=class extends xn{reason;code;type=It.NavigationCancel;constructor(n,e,i,r){super(n,e),this.reason=i,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function Nx(t){return t instanceof Ln&&(t.code===Yt.Redirect||t.code===Yt.SupersededByNewNavigation)}var Pi=class extends xn{reason;code;type=It.NavigationSkipped;constructor(n,e,i,r){super(n,e),this.reason=i,this.code=r}},Lo=class extends xn{error;target;type=It.NavigationError;constructor(n,e,i,r){super(n,e),this.error=i,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},Jl=class extends xn{urlAfterRedirects;state;type=It.RoutesRecognized;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Om=class extends xn{urlAfterRedirects;state;type=It.GuardsCheckStart;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Nm=class extends xn{urlAfterRedirects;state;shouldActivate;type=It.GuardsCheckEnd;constructor(n,e,i,r,o){super(n,e),this.urlAfterRedirects=i,this.state=r,this.shouldActivate=o}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},Fm=class extends xn{urlAfterRedirects;state;type=It.ResolveStart;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Pm=class extends xn{urlAfterRedirects;state;type=It.ResolveEnd;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Lm=class{route;type=It.RouteConfigLoadStart;constructor(n){this.route=n}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},Vm=class{route;type=It.RouteConfigLoadEnd;constructor(n){this.route=n}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},Bm=class{snapshot;type=It.ChildActivationStart;constructor(n){this.snapshot=n}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},jm=class{snapshot;type=It.ChildActivationEnd;constructor(n){this.snapshot=n}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Hm=class{snapshot;type=It.ActivationStart;constructor(n){this.snapshot=n}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Um=class{snapshot;type=It.ActivationEnd;constructor(n){this.snapshot=n}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Za=class{routerEvent;position;anchor;scrollBehavior;type=It.Scroll;constructor(n,e,i,r){this.routerEvent=n,this.position=e,this.anchor=i,this.scrollBehavior=r}toString(){let n=this.position?`${this.position[0]}, ${this.position[1]}`:null;return`Scroll(anchor: '${this.anchor}', position: '${n}')`}},Ka=class{},ec=class{},Xa=class{url;navigationBehaviorOptions;constructor(n,e){this.url=n,this.navigationBehaviorOptions=e}};function IN(t){return!(t instanceof Ka)&&!(t instanceof Xa)&&!(t instanceof ec)}var zm=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(n){this.rootInjector=n,this.children=new jo(this.rootInjector)}},jo=(()=>{class t{rootInjector;contexts=new Map;constructor(e){this.rootInjector=e}onChildOutletCreated(e,i){let r=this.getOrCreateContext(e);r.outlet=i,this.contexts.set(e,r)}onChildOutletDestroyed(e){let i=this.getContext(e);i&&(i.outlet=null,i.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let i=this.getContext(e);return i||(i=new zm(this.rootInjector),this.contexts.set(e,i)),i}getContext(e){return this.contexts.get(e)||null}static \u0275fac=function(i){return new(i||t)(W(Ne))};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),$m=class{_root;constructor(n){this._root=n}get root(){return this._root.value}parent(n){let e=this.pathFromRoot(n);return e.length>1?e[e.length-2]:null}children(n){let e=_v(n,this._root);return e?e.children.map(i=>i.value):[]}firstChild(n){let e=_v(n,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(n){let e=vv(n,this._root);return e.length<2?[]:e[e.length-2].children.map(r=>r.value).filter(r=>r!==n)}pathFromRoot(n){return vv(n,this._root).map(e=>e.value)}};function _v(t,n){if(t===n.value)return n;for(let e of n.children){let i=_v(t,e);if(i)return i}return null}function vv(t,n){if(t===n.value)return[n];for(let e of n.children){let i=vv(t,e);if(i.length)return i.unshift(n),i}return[]}var Dn=class{value;children;constructor(n,e){this.value=n,this.children=e}toString(){return`TreeNode(${this.value})`}};function $a(t){let n={};return t&&t.children.forEach(e=>n[e.value.outlet]=e),n}var tc=class extends $m{snapshot;constructor(n,e){super(n),this.snapshot=e,Sv(this,n)}toString(){return this.snapshot.toString()}};function Fx(t,n){let e=TN(t,n),i=new ft([new Hr("",{})]),r=new ft({}),o=new ft({}),a=new ft({}),s=new ft(""),l=new ur(i,r,a,s,o,de,t,e.root);return l.snapshot=e.root,new tc(new Dn(l,[]),e)}function TN(t,n){let e={},i={},r={},a=new Ja([],e,r,"",i,de,t,null,{},n);return new nc("",new Dn(a,[]))}var ur=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(n,e,i,r,o,a,s,l){this.urlSubject=n,this.paramsSubject=e,this.queryParamsSubject=i,this.fragmentSubject=r,this.dataSubject=o,this.outlet=a,this.component=s,this._futureSnapshot=l,this.title=this.dataSubject?.pipe(le(d=>d[oc]))??q(void 0),this.url=n,this.params=e,this.queryParams=i,this.fragment=r,this.data=o}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(le(n=>Po(n))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(le(n=>Po(n))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function Mv(t,n,e="emptyOnly"){let i,{routeConfig:r}=t;return n!==null&&(e==="always"||r?.path===""||!n.component&&!n.routeConfig?.loadComponent)?i={params:C(C({},n.params),t.params),data:C(C({},n.data),t.data),resolve:C(C(C(C({},t.data),n.data),r?.data),t._resolvedData)}:i={params:C({},t.params),data:C({},t.data),resolve:C(C({},t.data),t._resolvedData??{})},r&&Lx(r)&&(i.resolve[oc]=r.title),i}var Ja=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;get title(){return this.data?.[oc]}constructor(n,e,i,r,o,a,s,l,d,u){this.url=n,this.params=e,this.queryParams=i,this.fragment=r,this.data=o,this.outlet=a,this.component=s,this.routeConfig=l,this._resolve=d,this._environmentInjector=u}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=Po(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=Po(this.queryParams),this._queryParamMap}toString(){let n=this.url.map(i=>i.toString()).join("/"),e=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${n}', path:'${e}')`}},nc=class extends $m{url;constructor(n,e){super(e),this.url=n,Sv(this,e)}toString(){return Px(this._root)}};function Sv(t,n){n.value._routerState=t,n.children.forEach(e=>Sv(t,e))}function Px(t){let n=t.children.length>0?` { ${t.children.map(Px).join(", ")} } `:"";return`${t.value}${n}`}function dv(t){if(t.snapshot){let n=t.snapshot,e=t._futureSnapshot;t.snapshot=e,Fi(n.queryParams,e.queryParams)||t.queryParamsSubject.next(e.queryParams),n.fragment!==e.fragment&&t.fragmentSubject.next(e.fragment),Fi(n.params,e.params)||t.paramsSubject.next(e.params),iN(n.url,e.url)||t.urlSubject.next(e.url),Fi(n.data,e.data)||t.dataSubject.next(e.data)}else t.snapshot=t._futureSnapshot,t.dataSubject.next(t._futureSnapshot.data)}function bv(t,n){let e=Fi(t.params,n.params)&&lN(t.url,n.url),i=!t.parent!=!n.parent;return e&&!i&&(!t.parent||bv(t.parent,n.parent))}function Lx(t){return typeof t.title=="string"||t.title===null}var Vx=new y(""),ac=(()=>{class t{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=de;activateEvents=new I;deactivateEvents=new I;attachEvents=new I;detachEvents=new I;routerOutletData=ar();parentContexts=c(jo);location=c(Et);changeDetector=c(De);inputBinder=c(sc,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(e){if(e.name){let{firstChange:i,previousValue:r}=e.name;if(i)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new P(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new P(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new P(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,i){this.activated=e,this._activatedRoute=i,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,i){if(this.isActivated)throw new P(4013,!1);this._activatedRoute=e;let r=this.location,a=e.snapshot.component,s=this.parentContexts.getOrCreateContext(this.name).children,l=new yv(e,s,r.injector,this.routerOutletData);this.activated=r.createComponent(a,{index:r.length,injector:l,environmentInjector:i}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(i){return new(i||t)};static \u0275dir=A({type:t,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[Pe]})}return t})(),yv=class{route;childContexts;parent;outletData;constructor(n,e,i,r){this.route=n,this.childContexts=e,this.parent=i,this.outletData=r}get(n,e){return n===ur?this.route:n===jo?this.childContexts:n===Vx?this.outletData:this.parent.get(n,e)}},sc=new y(""),Iv=(()=>{class t{outletDataSubscriptions=new Map;bindActivatedRouteToOutletComponent(e){this.unsubscribeFromRouteData(e),this.subscribeToRouteData(e)}unsubscribeFromRouteData(e){this.outletDataSubscriptions.get(e)?.unsubscribe(),this.outletDataSubscriptions.delete(e)}subscribeToRouteData(e){let{activatedRoute:i}=e,r=ma([i.queryParams,i.params,i.data]).pipe(ht(([o,a,s],l)=>(s=C(C(C({},o),a),s),l===0?q(s):Promise.resolve(s)))).subscribe(o=>{if(!e.isActivated||!e.activatedComponentRef||e.activatedRoute!==i||i.component===null){this.unsubscribeFromRouteData(e);return}let a=LD(i.component);if(!a){this.unsubscribeFromRouteData(e);return}for(let{templateName:s}of a.inputs)e.activatedComponentRef.setInput(s,o[s])});this.outletDataSubscriptions.set(e,r)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})(),Tv=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=x({type:t,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(i,r){i&1&&T(0,"router-outlet")},dependencies:[ac],encapsulation:2})}return t})();function kv(t){let n=t.children&&t.children.map(kv),e=n?X(C({},t),{children:n}):C({},t);return!e.component&&!e.loadComponent&&(n||e.loadChildren)&&e.outlet&&e.outlet!==de&&(e.component=Tv),e}function kN(t,n,e){let i=ic(t,n._root,e?e._root:void 0);return new tc(i,n)}function ic(t,n,e){if(e&&t.shouldReuseRoute(n.value,e.value.snapshot)){let i=e.value;i._futureSnapshot=n.value;let r=AN(t,n,e);return new Dn(i,r)}else{if(t.shouldAttach(n.value)){let o=t.retrieve(n.value);if(o!==null){let a=o.route;return a.value._futureSnapshot=n.value,a.children=n.children.map(s=>ic(t,s)),a}}let i=RN(n.value),r=n.children.map(o=>ic(t,o));return new Dn(i,r)}}function AN(t,n,e){return n.children.map(i=>{for(let r of e.children)if(t.shouldReuseRoute(i.value,r.value.snapshot))return ic(t,i,r);return ic(t,i)})}function RN(t){return new ur(new ft(t.url),new ft(t.params),new ft(t.queryParams),new ft(t.fragment),new ft(t.data),t.outlet,t.component,t)}var es=class{redirectTo;navigationBehaviorOptions;constructor(n,e){this.redirectTo=n,this.navigationBehaviorOptions=e}},Bx="ngNavigationCancelingError";function Wm(t,n){let{redirectTo:e,navigationBehaviorOptions:i}=Ya(n)?{redirectTo:n,navigationBehaviorOptions:void 0}:n,r=jx(!1,Yt.Redirect);return r.url=e,r.navigationBehaviorOptions=i,r}function jx(t,n){let e=new Error(`NavigationCancelingError: ${t||""}`);return e[Bx]=!0,e.cancellationCode=n,e}function ON(t){return Hx(t)&&Ya(t.url)}function Hx(t){return!!t&&t[Bx]}var Cv=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(n,e,i,r,o){this.routeReuseStrategy=n,this.futureState=e,this.currState=i,this.forwardEvent=r,this.inputBindingEnabled=o}activate(n){let e=this.futureState._root,i=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,i,n),dv(this.futureState.root),this.activateChildRoutes(e,i,n)}deactivateChildRoutes(n,e,i){let r=$a(e);n.children.forEach(o=>{let a=o.value.outlet;this.deactivateRoutes(o,r[a],i),delete r[a]}),Object.values(r).forEach(o=>{this.deactivateRouteAndItsChildren(o,i)})}deactivateRoutes(n,e,i){let r=n.value,o=e?e.value:null;if(r===o)if(r.component){let a=i.getContext(r.outlet);a&&this.deactivateChildRoutes(n,e,a.children)}else this.deactivateChildRoutes(n,e,i);else o&&this.deactivateRouteAndItsChildren(e,i)}deactivateRouteAndItsChildren(n,e){n.value.component&&this.routeReuseStrategy.shouldDetach(n.value.snapshot)?this.detachAndStoreRouteSubtree(n,e):this.deactivateRouteAndOutlet(n,e)}detachAndStoreRouteSubtree(n,e){let i=e.getContext(n.value.outlet),r=i&&n.value.component?i.children:e,o=$a(n);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,r);if(i&&i.outlet){let a=i.outlet.detach(),s=i.children.onOutletDeactivated();this.routeReuseStrategy.store(n.value.snapshot,{componentRef:a,route:n,contexts:s})}}deactivateRouteAndOutlet(n,e){let i=e.getContext(n.value.outlet),r=i&&n.value.component?i.children:e,o=$a(n);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,r);i&&(i.outlet&&(i.outlet.deactivate(),i.children.onOutletDeactivated()),i.attachRef=null,i.route=null)}activateChildRoutes(n,e,i){let r=$a(e);n.children.forEach(o=>{this.activateRoutes(o,r[o.value.outlet],i),this.forwardEvent(new Um(o.value.snapshot))}),n.children.length&&this.forwardEvent(new jm(n.value.snapshot))}activateRoutes(n,e,i){let r=n.value,o=e?e.value:null;if(dv(r),r===o)if(r.component){let a=i.getOrCreateContext(r.outlet);this.activateChildRoutes(n,e,a.children)}else this.activateChildRoutes(n,e,i);else if(r.component){let a=i.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let s=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),a.children.onOutletReAttached(s.contexts),a.attachRef=s.componentRef,a.route=s.route.value,a.outlet&&a.outlet.attach(s.componentRef,s.route.value),dv(s.route.value),this.activateChildRoutes(n,null,a.children)}else a.attachRef=null,a.route=r,a.outlet&&a.outlet.activateWith(r,a.injector),this.activateChildRoutes(n,null,a.children)}else this.activateChildRoutes(n,null,i)}},Gm=class{path;route;constructor(n){this.path=n,this.route=this.path[this.path.length-1]}},qa=class{component;route;constructor(n,e){this.component=n,this.route=e}};function NN(t,n,e){let i=t._root,r=n?n._root:null;return Ql(i,r,e,[i.value])}function FN(t){let n=t.routeConfig?t.routeConfig.canActivateChild:null;return!n||n.length===0?null:{node:t,guards:n}}function ns(t,n){let e=Symbol(),i=n.get(t,e);return i===e?typeof t=="function"&&!up(t)?t:n.get(t):i}function Ql(t,n,e,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=$a(n);return t.children.forEach(a=>{PN(a,o[a.value.outlet],e,i.concat([a.value]),r),delete o[a.value.outlet]}),Object.entries(o).forEach(([a,s])=>Kl(s,e.getContext(a),r)),r}function PN(t,n,e,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=t.value,a=n?n.value:null,s=e?e.getContext(t.value.outlet):null;if(a&&o.routeConfig===a.routeConfig){let l=LN(a,o,o.routeConfig.runGuardsAndResolvers);l?r.canActivateChecks.push(new Gm(i)):(o.data=a.data,o._resolvedData=a._resolvedData),o.component?Ql(t,n,s?s.children:null,i,r):Ql(t,n,e,i,r),l&&s&&s.outlet&&s.outlet.isActivated&&r.canDeactivateChecks.push(new qa(s.outlet.component,a))}else a&&Kl(n,s,r),r.canActivateChecks.push(new Gm(i)),o.component?Ql(t,null,s?s.children:null,i,r):Ql(t,null,e,i,r);return r}function LN(t,n,e){if(typeof e=="function")return wt(n._environmentInjector,()=>e(t,n));switch(e){case"pathParamsChange":return!Fo(t.url,n.url);case"pathParamsOrQueryParamsChange":return!Fo(t.url,n.url)||!Fi(t.queryParams,n.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!bv(t,n)||!Fi(t.queryParams,n.queryParams);default:return!bv(t,n)}}function Kl(t,n,e){let i=$a(t),r=t.value;Object.entries(i).forEach(([o,a])=>{r.component?n?Kl(a,n.children.getContext(o),e):Kl(a,null,e):Kl(a,n,e)}),r.component?n&&n.outlet&&n.outlet.isActivated?e.canDeactivateChecks.push(new qa(n.outlet.component,r)):e.canDeactivateChecks.push(new qa(null,r)):e.canDeactivateChecks.push(new qa(null,r))}function lc(t){return typeof t=="function"}function VN(t){return typeof t=="boolean"}function BN(t){return t&&lc(t.canLoad)}function jN(t){return t&&lc(t.canActivate)}function HN(t){return t&&lc(t.canActivateChild)}function UN(t){return t&&lc(t.canDeactivate)}function zN(t){return t&&lc(t.canMatch)}function Ux(t){return t instanceof mo||t?.name==="EmptyError"}var Mm=Symbol("INITIAL_VALUE");function ts(){return ht(t=>ma(t.map(n=>n.pipe(it(1),Je(Mm)))).pipe(le(n=>{for(let e of n)if(e!==!0){if(e===Mm)return Mm;if(e===!1||$N(e))return e}return!0}),be(n=>n!==Mm),it(1)))}function $N(t){return Ya(t)||t instanceof es}function zx(t){return t.aborted?q(void 0).pipe(it(1)):new se(n=>{let e=()=>{n.next(),n.complete()};return t.addEventListener("abort",e),()=>t.removeEventListener("abort",e)})}function $x(t){return ye(zx(t))}function WN(t){return Lt(n=>{let{targetSnapshot:e,currentSnapshot:i,guards:{canActivateChecks:r,canDeactivateChecks:o}}=n;return o.length===0&&r.length===0?q(X(C({},n),{guardsResult:!0})):GN(o,e,i).pipe(Lt(a=>a&&VN(a)?qN(e,r,t):q(a)),le(a=>X(C({},n),{guardsResult:a})))})}function GN(t,n,e){return $e(t).pipe(Lt(i=>XN(i.component,i.route,e,n)),Qi(i=>i!==!0,!0))}function qN(t,n,e){return $e(n).pipe(Mr(i=>xr(QN(i.route.parent,e),YN(i.route,e),KN(t,i.path),ZN(t,i.route))),Qi(i=>i!==!0,!0))}function YN(t,n){return t!==null&&n&&n(new Hm(t)),q(!0)}function QN(t,n){return t!==null&&n&&n(new Bm(t)),q(!0)}function ZN(t,n){let e=n.routeConfig?n.routeConfig.canActivate:null;if(!e||e.length===0)return q(!0);let i=e.map(r=>Zn(()=>{let o=n._environmentInjector,a=ns(r,o),s=jN(a)?a.canActivate(n,t):wt(o,()=>a(n,t));return Vo(s).pipe(Qi())}));return q(i).pipe(ts())}function KN(t,n){let e=n[n.length-1],r=n.slice(0,n.length-1).reverse().map(o=>FN(o)).filter(o=>o!==null).map(o=>Zn(()=>{let a=o.guards.map(s=>{let l=o.node._environmentInjector,d=ns(s,l),u=HN(d)?d.canActivateChild(e,t):wt(l,()=>d(e,t));return Vo(u).pipe(Qi())});return q(a).pipe(ts())}));return q(r).pipe(ts())}function XN(t,n,e,i){let r=n&&n.routeConfig?n.routeConfig.canDeactivate:null;if(!r||r.length===0)return q(!0);let o=r.map(a=>{let s=n._environmentInjector,l=ns(a,s),d=UN(l)?l.canDeactivate(t,n,e,i):wt(s,()=>l(t,n,e,i));return Vo(d).pipe(Qi())});return q(o).pipe(ts())}function JN(t,n,e,i,r){let o=n.canLoad;if(o===void 0||o.length===0)return q(!0);let a=o.map(s=>{let l=ns(s,t),d=BN(l)?l.canLoad(n,e):wt(t,()=>l(n,e)),u=Vo(d);return r?u.pipe($x(r)):u});return q(a).pipe(ts(),Wx(i))}function Wx(t){return $h(st(n=>{if(typeof n!="boolean")throw Wm(t,n)}),le(n=>n===!0))}function eF(t,n,e,i,r,o){let a=n.canMatch;if(!a||a.length===0)return q(!0);let s=a.map(l=>{let d=ns(l,t),u=zN(d)?d.canMatch(n,e,r):wt(t,()=>d(n,e,r));return Vo(u).pipe($x(o))});return q(s).pipe(ts(),Wx(i))}var cr=class t extends Error{segmentGroup;constructor(n){super(),this.segmentGroup=n||null,Object.setPrototypeOf(this,t.prototype)}},rc=class t extends Error{urlTree;constructor(n){super(),this.urlTree=n,Object.setPrototypeOf(this,t.prototype)}};function tF(t){throw new P(4e3,!1)}function nF(t){throw jx(!1,Yt.GuardRejected)}var wv=class{urlSerializer;urlTree;constructor(n,e){this.urlSerializer=n,this.urlTree=e}async lineralizeSegments(n,e){let i=[],r=e.root;for(;;){if(i=i.concat(r.segments),r.numberOfChildren===0)return i;if(r.numberOfChildren>1||!r.children[de])throw tF(`${n.redirectTo}`);r=r.children[de]}}async applyRedirectCommands(n,e,i,r,o){let a=await iF(e,r,o);if(a instanceof Vn)throw new rc(a);let s=this.applyRedirectCreateUrlTree(a,this.urlSerializer.parse(a),n,i);if(a[0]==="/")throw new rc(s);return s}applyRedirectCreateUrlTree(n,e,i,r){let o=this.createSegmentGroup(n,e.root,i,r);return new Vn(o,this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(n,e){let i={};return Object.entries(n).forEach(([r,o])=>{if(typeof o=="string"&&o[0]===":"){let s=o.substring(1);i[r]=e[s]}else i[r]=o}),i}createSegmentGroup(n,e,i,r){let o=this.createSegments(n,e.segments,i,r),a={};return Object.entries(e.children).forEach(([s,l])=>{a[s]=this.createSegmentGroup(n,l,i,r)}),new Re(o,a)}createSegments(n,e,i,r){return e.map(o=>o.path[0]===":"?this.findPosParam(n,o,r):this.findOrReturn(o,i))}findPosParam(n,e,i){let r=i[e.path.substring(1)];if(!r)throw new P(4001,!1);return r}findOrReturn(n,e){let i=0;for(let r of e){if(r.path===n.path)return e.splice(i),r;i++}return n}};function iF(t,n,e){if(typeof t=="string")return Promise.resolve(t);let i=t;return km(Vo(wt(e,()=>i(n))))}function rF(t,n){return t.providers&&!t._injector&&(t._injector=Ba(t.providers,n,`Route: ${t.path}`)),t._injector??n}function ai(t){return t.outlet||de}function oF(t,n){let e=t.filter(i=>ai(i)===n);return e.push(...t.filter(i=>ai(i)!==n)),e}var Dv={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function Gx(t){return{routeConfig:t.routeConfig,url:t.url,params:t.params,queryParams:t.queryParams,fragment:t.fragment,data:t.data,outlet:t.outlet,title:t.title,paramMap:t.paramMap,queryParamMap:t.queryParamMap}}function aF(t,n,e,i,r,o,a){let s=qx(t,n,e);if(!s.matched)return q(s);let l=Gx(o(s));return i=rF(n,i),eF(i,n,e,r,l,a).pipe(le(d=>d===!0?s:C({},Dv)))}function qx(t,n,e){if(n.path==="")return n.pathMatch==="full"&&(t.hasChildren()||e.length>0)?C({},Dv):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let r=(n.matcher||_x)(e,t,n);if(!r)return C({},Dv);let o={};Object.entries(r.posParams??{}).forEach(([s,l])=>{o[s]=l.path});let a=r.consumed.length>0?C(C({},o),r.consumed[r.consumed.length-1].parameters):o;return{matched:!0,consumedSegments:r.consumed,remainingSegments:e.slice(r.consumed.length),parameters:a,positionalParamSegments:r.posParams??{}}}function px(t,n,e,i,r){return e.length>0&&cF(t,e,i,r)?{segmentGroup:new Re(n,lF(i,new Re(e,t.children))),slicedSegments:[]}:e.length===0&&dF(t,e,i)?{segmentGroup:new Re(t.segments,sF(t,e,i,t.children)),slicedSegments:e}:{segmentGroup:new Re(t.segments,t.children),slicedSegments:e}}function sF(t,n,e,i){let r={};for(let o of e)if(Ym(t,n,o)&&!i[ai(o)]){let a=new Re([],{});r[ai(o)]=a}return C(C({},i),r)}function lF(t,n){let e={};e[de]=n;for(let i of t)if(i.path===""&&ai(i)!==de){let r=new Re([],{});e[ai(i)]=r}return e}function cF(t,n,e,i){return e.some(r=>!Ym(t,n,r)||!(ai(r)!==de)?!1:!(i!==void 0&&ai(r)===i))}function dF(t,n,e){return e.some(i=>Ym(t,n,i))}function Ym(t,n,e){return(t.hasChildren()||n.length>0)&&e.pathMatch==="full"?!1:e.path===""}function uF(t,n,e){return n.length===0&&!t.children[e]}var xv=class{};async function mF(t,n,e,i,r,o,a="emptyOnly",s){return new Ev(t,n,e,i,r,a,o,s).recognize()}var fF=31,Ev=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(n,e,i,r,o,a,s,l){this.injector=n,this.configLoader=e,this.rootComponentType=i,this.config=r,this.urlTree=o,this.paramsInheritanceStrategy=a,this.urlSerializer=s,this.abortSignal=l,this.applyRedirects=new wv(this.urlSerializer,this.urlTree)}noMatchError(n){return new P(4002,`'${n.segmentGroup}'`)}async recognize(){let n=px(this.urlTree.root,[],[],this.config).segmentGroup,{children:e,rootSnapshot:i}=await this.match(n),r=new Dn(i,e),o=new nc("",r),a=Tx(i,[],this.urlTree.queryParams,this.urlTree.fragment);return a.queryParams=this.urlTree.queryParams,o.url=this.urlSerializer.serialize(a),{state:o,tree:a}}async match(n){let e=new Ja([],Object.freeze({}),Object.freeze(C({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),de,this.rootComponentType,null,{},this.injector);try{return{children:await this.processSegmentGroup(this.injector,this.config,n,de,e),rootSnapshot:e}}catch(i){if(i instanceof rc)return this.urlTree=i.urlTree,this.match(i.urlTree.root);throw i instanceof cr?this.noMatchError(i):i}}async processSegmentGroup(n,e,i,r,o){if(i.segments.length===0&&i.hasChildren())return this.processChildren(n,e,i,o);let a=await this.processSegment(n,e,i,i.segments,r,!0,o);return a instanceof Dn?[a]:[]}async processChildren(n,e,i,r){let o=[];for(let l of Object.keys(i.children))l==="primary"?o.unshift(l):o.push(l);let a=[];for(let l of o){let d=i.children[l],u=oF(e,l),h=await this.processSegmentGroup(n,u,d,l,r);a.push(...h)}let s=Yx(a);return hF(s),s}async processSegment(n,e,i,r,o,a,s){for(let l of e)try{return await this.processSegmentAgainstRoute(l._injector??n,e,l,i,r,o,a,s)}catch(d){if(d instanceof cr||Ux(d))continue;throw d}if(uF(i,r,o))return new xv;throw new cr(i)}async processSegmentAgainstRoute(n,e,i,r,o,a,s,l){if(ai(i)!==a&&(a===de||!Ym(r,o,i)))throw new cr(r);if(i.redirectTo===void 0)return this.matchSegmentAgainstRoute(n,r,i,o,a,l);if(this.allowRedirects&&s)return this.expandSegmentAgainstRouteUsingRedirect(n,r,e,i,o,a,l);throw new cr(r)}async expandSegmentAgainstRouteUsingRedirect(n,e,i,r,o,a,s){let{matched:l,parameters:d,consumedSegments:u,positionalParamSegments:h,remainingSegments:_}=qx(e,r,o);if(!l)throw new cr(e);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>fF&&(this.allowRedirects=!1));let v=this.createSnapshot(n,r,o,d,s);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let w=await this.applyRedirects.applyRedirectCommands(u,r.redirectTo,h,Gx(v),n),F=await this.applyRedirects.lineralizeSegments(r,w);return this.processSegment(n,i,e,F.concat(_),a,!1,s)}createSnapshot(n,e,i,r,o){let a=new Ja(i,r,Object.freeze(C({},this.urlTree.queryParams)),this.urlTree.fragment,gF(e),ai(e),e.component??e._loadedComponent??null,e,_F(e),n),s=Mv(a,o,this.paramsInheritanceStrategy);return a.params=Object.freeze(s.params),a.data=Object.freeze(s.data),a}async matchSegmentAgainstRoute(n,e,i,r,o,a){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let s=At=>this.createSnapshot(n,i,At.consumedSegments,At.parameters,a),l=await km(aF(e,i,r,n,this.urlSerializer,s,this.abortSignal));if(i.path==="**"&&(e.children={}),!l?.matched)throw new cr(e);n=i._injector??n;let{routes:d}=await this.getChildConfig(n,i,r),u=i._loadedInjector??n,{parameters:h,consumedSegments:_,remainingSegments:v}=l,w=this.createSnapshot(n,i,_,h,a),{segmentGroup:F,slicedSegments:U}=px(e,_,v,d,o);if(U.length===0&&F.hasChildren()){let At=await this.processChildren(u,d,F,w);return new Dn(w,At)}if(d.length===0&&U.length===0)return new Dn(w,[]);let Q=ai(i)===o,Ie=await this.processSegment(u,d,F,U,Q?de:o,!0,w);return new Dn(w,Ie instanceof Dn?[Ie]:[])}async getChildConfig(n,e,i){if(e.children)return{routes:e.children,injector:n};if(e.loadChildren){if(e._loadedRoutes!==void 0){let o=e._loadedNgModuleFactory;return o&&!e._loadedInjector&&(e._loadedInjector=o.create(n).injector),{routes:e._loadedRoutes,injector:e._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(await km(JN(n,e,i,this.urlSerializer,this.abortSignal))){let o=await this.configLoader.loadChildren(n,e);return e._loadedRoutes=o.routes,e._loadedInjector=o.injector,e._loadedNgModuleFactory=o.factory,o}throw nF(e)}return{routes:[],injector:n}}};function hF(t){t.sort((n,e)=>n.value.outlet===de?-1:e.value.outlet===de?1:n.value.outlet.localeCompare(e.value.outlet))}function pF(t){let n=t.value.routeConfig;return n&&n.path===""}function Yx(t){let n=[],e=new Set;for(let i of t){if(!pF(i)){n.push(i);continue}let r=n.find(o=>i.value.routeConfig===o.value.routeConfig);r!==void 0?(r.children.push(...i.children),e.add(r)):n.push(i)}for(let i of e){let r=Yx(i.children);n.push(new Dn(i.value,r))}return n.filter(i=>!e.has(i))}function gF(t){return t.data||{}}function _F(t){return t.resolve||{}}function vF(t,n,e,i,r,o,a){return Lt(async s=>{let{state:l,tree:d}=await mF(t,n,e,i,s.extractedUrl,r,o,a);return X(C({},s),{targetSnapshot:l,urlAfterRedirects:d})})}function bF(t){return Lt(n=>{let{targetSnapshot:e,guards:{canActivateChecks:i}}=n;if(!i.length)return q(n);let r=new Set(i.map(s=>s.route)),o=new Set;for(let s of r)if(!o.has(s))for(let l of Qx(s))o.add(l);let a=0;return $e(o).pipe(Mr(s=>r.has(s)?yF(s,e,t):(s.data=Mv(s,s.parent,t).resolve,q(void 0))),st(()=>a++),Rd(1),Lt(s=>a===o.size?q(n):Xe))})}function Qx(t){let n=t.children.map(e=>Qx(e)).flat();return[t,...n]}function yF(t,n,e){let i=t.routeConfig,r=t._resolve;return i?.title!==void 0&&!Lx(i)&&(r[oc]=i.title),Zn(()=>(t.data=Mv(t,t.parent,e).resolve,CF(r,t,n).pipe(le(o=>(t._resolvedData=o,t.data=C(C({},t.data),o),null)))))}function CF(t,n,e){let i=mv(t);if(i.length===0)return q({});let r={};return $e(i).pipe(Lt(o=>wF(t[o],n,e).pipe(Qi(),st(a=>{if(a instanceof es)throw Wm(new dr,a);r[o]=a}))),Rd(1),le(()=>r),Er(o=>Ux(o)?Xe:uo(o)))}function wF(t,n,e){let i=n._environmentInjector,r=ns(t,i),o=r.resolve?r.resolve(n,e):wt(i,()=>r(n,e));return Vo(o)}function gx(t){return ht(n=>{let e=t(n);return e?$e(e).pipe(le(()=>n)):q(n)})}var Av=(()=>{class t{buildTitle(e){let i,r=e.root;for(;r!==void 0;)i=this.getResolvedTitleForRoute(r)??i,r=r.children.find(o=>o.outlet===de);return i}getResolvedTitleForRoute(e){return e.data[oc]}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:()=>c(Zx),providedIn:"root"})}return t})(),Zx=(()=>{class t extends Av{title;constructor(e){super(),this.title=e}updateTitle(e){let i=this.buildTitle(e);i!==void 0&&this.title.setTitle(i)}static \u0275fac=function(i){return new(i||t)(W(lx))};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Ho=new y("",{factory:()=>({})}),Uo=new y(""),Qm=(()=>{class t{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=c(k_);async loadComponent(e,i){if(this.componentLoaders.get(i))return this.componentLoaders.get(i);if(i._loadedComponent)return Promise.resolve(i._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(i);let r=(async()=>{try{let o=await bx(wt(e,()=>i.loadComponent())),a=await Jx(Xx(o));return this.onLoadEndListener&&this.onLoadEndListener(i),i._loadedComponent=a,a}finally{this.componentLoaders.delete(i)}})();return this.componentLoaders.set(i,r),r}loadChildren(e,i){if(this.childrenLoaders.get(i))return this.childrenLoaders.get(i);if(i._loadedRoutes)return Promise.resolve({routes:i._loadedRoutes,injector:i._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(i);let r=(async()=>{try{let o=await Kx(i,this.compiler,e,this.onLoadEndListener);return i._loadedRoutes=o.routes,i._loadedInjector=o.injector,i._loadedNgModuleFactory=o.factory,o}finally{this.childrenLoaders.delete(i)}})();return this.childrenLoaders.set(i,r),r}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();async function Kx(t,n,e,i){let r=await bx(wt(e,()=>t.loadChildren())),o=await Jx(Xx(r)),a;o instanceof Xu||Array.isArray(o)?a=o:a=await n.compileModuleAsync(o),i&&i(t);let s,l,d=!1,u;return Array.isArray(a)?(l=a,d=!0):(s=a.create(e).injector,u=a,l=s.get(Uo,[],{optional:!0,self:!0}).flat()),{routes:l.map(kv),injector:s,factory:u}}function DF(t){return t&&typeof t=="object"&&"default"in t}function Xx(t){return DF(t)?t.default:t}async function Jx(t){return t}var Zm=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:()=>c(xF),providedIn:"root"})}return t})(),xF=(()=>{class t{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,i){return e}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Rv=new y(""),Ov=new y("");function eE(t,n,e){let i=t.get(Ov),r=t.get(Y);if(!r.startViewTransition||i.skipNextTransition)return i.skipNextTransition=!1,new Promise(d=>setTimeout(d));let o,a=new Promise(d=>{o=d}),s=r.startViewTransition(()=>(o(),EF(t)));s.updateCallbackDone.catch(d=>{}),s.ready.catch(d=>{}),s.finished.catch(d=>{});let{onViewTransitionCreated:l}=i;return l&&wt(t,()=>l({transition:s,from:n,to:e})),a}function EF(t){return new Promise(n=>{Ge({read:()=>setTimeout(n)},{injector:t})})}var MF=()=>{},Nv=new y(""),Km=(()=>{class t{currentNavigation=E(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=E(null);events=new S;transitionAbortWithErrorSubject=new S;configLoader=c(Qm);environmentInjector=c(Ne);destroyRef=c(Bt);urlSerializer=c(Bo);rootContexts=c(jo);location=c(Ni);inputBindingEnabled=c(sc,{optional:!0})!==null;titleStrategy=c(Av);options=c(Ho,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=c(Zm);createViewTransition=c(Rv,{optional:!0});navigationErrorHandler=c(Nv,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>q(void 0);rootComponentType=null;destroyed=!1;constructor(){let e=r=>this.events.next(new Lm(r)),i=r=>this.events.next(new Vm(r));this.configLoader.onLoadEndListener=i,this.configLoader.onLoadStartListener=e,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(e){let i=++this.navigationId;ot(()=>{this.transitions?.next(X(C({},e),{extractedUrl:this.urlHandlingStrategy.extract(e.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:i,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(e){return this.transitions=new ft(null),this.transitions.pipe(be(i=>i!==null),ht(i=>{let r=!1,o=new AbortController,a=()=>!r&&this.currentTransition?.id===i.id;return q(i).pipe(ht(s=>{if(this.navigationId>i.id)return this.cancelNavigationTransition(i,"",Yt.SupersededByNewNavigation),Xe;this.currentTransition=i;let l=this.lastSuccessfulNavigation();this.currentNavigation.set({id:s.id,initialUrl:s.rawUrl,extractedUrl:s.extractedUrl,targetBrowserUrl:typeof s.extras.browserUrl=="string"?this.urlSerializer.parse(s.extras.browserUrl):s.extras.browserUrl,trigger:s.source,extras:s.extras,previousNavigation:l?X(C({},l),{previousNavigation:null}):null,abort:()=>o.abort(),routesRecognizeHandler:s.routesRecognizeHandler,beforeActivateHandler:s.beforeActivateHandler});let d=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),u=s.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!d&&u!=="reload")return this.events.next(new Pi(s.id,this.urlSerializer.serialize(s.rawUrl),"",Qa.IgnoredSameUrlNavigation)),s.resolve(!1),Xe;if(this.urlHandlingStrategy.shouldProcessUrl(s.rawUrl))return q(s).pipe(ht(h=>(this.events.next(new Ur(h.id,this.urlSerializer.serialize(h.extractedUrl),h.source,h.restoredState)),h.id!==this.navigationId?Xe:Promise.resolve(h))),vF(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy,o.signal),st(h=>{i.targetSnapshot=h.targetSnapshot,i.urlAfterRedirects=h.urlAfterRedirects,this.currentNavigation.update(_=>(_.finalUrl=h.urlAfterRedirects,_)),this.events.next(new ec)}),ht(h=>$e(i.routesRecognizeHandler.deferredHandle??q(void 0)).pipe(le(()=>h))),st(()=>{let h=new Jl(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(h)}));if(d&&this.urlHandlingStrategy.shouldProcessUrl(s.currentRawUrl)){let{id:h,extractedUrl:_,source:v,restoredState:w,extras:F}=s,U=new Ur(h,this.urlSerializer.serialize(_),v,w);this.events.next(U);let Q=Fx(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=i=X(C({},s),{targetSnapshot:Q,urlAfterRedirects:_,extras:X(C({},F),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(Ie=>(Ie.finalUrl=_,Ie)),q(i)}else return this.events.next(new Pi(s.id,this.urlSerializer.serialize(s.extractedUrl),"",Qa.IgnoredByUrlHandlingStrategy)),s.resolve(!1),Xe}),le(s=>{let l=new Om(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);return this.events.next(l),this.currentTransition=i=X(C({},s),{guards:NN(s.targetSnapshot,s.currentSnapshot,this.rootContexts)}),i}),WN(s=>this.events.next(s)),ht(s=>{if(i.guardsResult=s.guardsResult,s.guardsResult&&typeof s.guardsResult!="boolean")throw Wm(this.urlSerializer,s.guardsResult);let l=new Nm(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot,!!s.guardsResult);if(this.events.next(l),!a())return Xe;if(!s.guardsResult)return this.cancelNavigationTransition(s,"",Yt.GuardRejected),Xe;if(s.guards.canActivateChecks.length===0)return q(s);let d=new Fm(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);if(this.events.next(d),!a())return Xe;let u=!1;return q(s).pipe(bF(this.paramsInheritanceStrategy),st({next:()=>{u=!0;let h=new Pm(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(h)},complete:()=>{u||this.cancelNavigationTransition(s,"",Yt.NoDataFromResolver)}}))}),gx(s=>{let l=u=>{let h=[];if(u.routeConfig?._loadedComponent)u.component=u.routeConfig?._loadedComponent;else if(u.routeConfig?.loadComponent){let _=u._environmentInjector;h.push(this.configLoader.loadComponent(_,u.routeConfig).then(v=>{u.component=v}))}for(let _ of u.children)h.push(...l(_));return h},d=l(s.targetSnapshot.root);return d.length===0?q(s):$e(Promise.all(d).then(()=>s))}),gx(()=>this.afterPreactivation()),ht(()=>{let{currentSnapshot:s,targetSnapshot:l}=i,d=this.createViewTransition?.(this.environmentInjector,s.root,l.root);return d?$e(d).pipe(le(()=>i)):q(i)}),it(1),ht(s=>{let l=kN(e.routeReuseStrategy,s.targetSnapshot,s.currentRouterState);this.currentTransition=i=s=X(C({},s),{targetRouterState:l}),this.currentNavigation.update(u=>(u.targetRouterState=l,u)),this.events.next(new Ka);let d=i.beforeActivateHandler.deferredHandle;return d?$e(d.then(()=>s)):q(s)}),st(s=>{new Cv(e.routeReuseStrategy,i.targetRouterState,i.currentRouterState,l=>this.events.next(l),this.inputBindingEnabled).activate(this.rootContexts),a()&&(r=!0,this.currentNavigation.update(l=>(l.abort=MF,l)),this.lastSuccessfulNavigation.set(ot(this.currentNavigation)),this.events.next(new si(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects))),this.titleStrategy?.updateTitle(s.targetRouterState.snapshot),s.resolve(!0))}),ye(zx(o.signal).pipe(be(()=>!r&&!i.targetRouterState),st(()=>{this.cancelNavigationTransition(i,o.signal.reason+"",Yt.Aborted)}))),st({complete:()=>{r=!0}}),ye(this.transitionAbortWithErrorSubject.pipe(st(s=>{throw s}))),Sr(()=>{o.abort(),r||this.cancelNavigationTransition(i,"",Yt.SupersededByNewNavigation),this.currentTransition?.id===i.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),Er(s=>{if(r=!0,this.destroyed)return i.resolve(!1),Xe;if(Hx(s))this.events.next(new Ln(i.id,this.urlSerializer.serialize(i.extractedUrl),s.message,s.cancellationCode)),ON(s)?this.events.next(new Xa(s.url,s.navigationBehaviorOptions)):i.resolve(!1);else{let l=new Lo(i.id,this.urlSerializer.serialize(i.extractedUrl),s,i.targetSnapshot??void 0);try{let d=wt(this.environmentInjector,()=>this.navigationErrorHandler?.(l));if(d instanceof es){let{message:u,cancellationCode:h}=Wm(this.urlSerializer,d);this.events.next(new Ln(i.id,this.urlSerializer.serialize(i.extractedUrl),u,h)),this.events.next(new Xa(d.redirectTo,d.navigationBehaviorOptions))}else throw this.events.next(l),s}catch(d){this.options.resolveNavigationPromiseOnError?i.resolve(!1):i.reject(d)}}return Xe}))}))}cancelNavigationTransition(e,i,r){let o=new Ln(e.id,this.urlSerializer.serialize(e.extractedUrl),i,r);this.events.next(o),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),i=ot(this.currentNavigation),r=i?.targetBrowserUrl??i?.extractedUrl;return e.toString()!==r?.toString()&&!i?.extras.skipLocationChange}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function SF(t){return t!==Ga}var tE=new y("");var nE=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:()=>c(IF),providedIn:"root"})}return t})(),qm=class{shouldDetach(n){return!1}store(n,e){}shouldAttach(n){return!1}retrieve(n){return null}shouldReuseRoute(n,e){return n.routeConfig===e.routeConfig}shouldDestroyInjector(n){return!0}},IF=(()=>{class t extends qm{static \u0275fac=(()=>{let e;return function(r){return(e||(e=qe(t)))(r||t)}})();static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Fv=(()=>{class t{urlSerializer=c(Bo);options=c(Ho,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=c(Ni);urlHandlingStrategy=c(Zm);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new Vn;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:e,initialUrl:i,targetBrowserUrl:r}){let o=e!==void 0?this.urlHandlingStrategy.merge(e,i):i,a=r??o;return a instanceof Vn?this.urlSerializer.serialize(a):a}commitTransition({targetRouterState:e,finalUrl:i,initialUrl:r}){i&&e?(this.currentUrlTree=i,this.rawUrlTree=this.urlHandlingStrategy.merge(i,r),this.routerState=e):this.rawUrlTree=r}routerState=Fx(null,c(Ne));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:()=>c(TF),providedIn:"root"})}return t})(),TF=(()=>{class t extends Fv{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(i=>{i.type==="popstate"&&setTimeout(()=>{e(i.url,i.state,"popstate",{replaceUrl:!0})})})}handleRouterEvent(e,i){e instanceof Ur?this.updateStateMemento():e instanceof Pi?this.commitTransition(i):e instanceof Jl?this.urlUpdateStrategy==="eager"&&(i.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(i),i)):e instanceof Ka?(this.commitTransition(i),this.urlUpdateStrategy==="deferred"&&!i.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(i),i)):e instanceof Ln&&!Nx(e)?this.restoreHistory(i):e instanceof Lo?this.restoreHistory(i,!0):e instanceof si&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,{extras:i,id:r}){let{replaceUrl:o,state:a}=i;if(this.location.isCurrentPathEqualTo(e)||o){let s=this.browserPageId,l=C(C({},a),this.generateNgRouterState(r,s));this.location.replaceState(e,"",l)}else{let s=C(C({},a),this.generateNgRouterState(r,this.browserPageId+1));this.location.go(e,"",s)}}restoreHistory(e,i=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,o=this.currentPageId-r;o!==0?this.location.historyGo(o):this.getCurrentUrlTree()===e.finalUrl&&o===0&&(this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(i&&this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:e}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,i){return this.canceledNavigationResolution==="computed"?{navigationId:e,\u0275routerPageId:i}:{navigationId:e}}static \u0275fac=(()=>{let e;return function(r){return(e||(e=qe(t)))(r||t)}})();static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Xm(t,n){t.events.pipe(be(e=>e instanceof si||e instanceof Ln||e instanceof Lo||e instanceof Pi),le(e=>e instanceof si||e instanceof Pi?0:(e instanceof Ln?e.code===Yt.Redirect||e.code===Yt.SupersededByNewNavigation:!1)?2:1),be(e=>e!==2),it(1)).subscribe(()=>{n()})}var sn=(()=>{class t{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=c(Ju);stateManager=c(Fv);options=c(Ho,{optional:!0})||{};pendingTasks=c(er);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=c(Km);urlSerializer=c(Bo);location=c(Ni);urlHandlingStrategy=c(Zm);injector=c(Ne);_events=new S;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=c(nE);injectorCleanup=c(tE,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=c(Uo,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!c(sc,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:e=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new oe;subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(i=>{try{let r=this.navigationTransitions.currentTransition,o=ot(this.navigationTransitions.currentNavigation);if(r!==null&&o!==null){if(this.stateManager.handleRouterEvent(i,o),i instanceof Ln&&i.code!==Yt.Redirect&&i.code!==Yt.SupersededByNewNavigation)this.navigated=!0;else if(i instanceof si)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(i instanceof Xa){let a=i.navigationBehaviorOptions,s=this.urlHandlingStrategy.merge(i.url,r.currentRawUrl),l=C({scroll:r.extras.scroll,browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||SF(r.source)},a);this.scheduleNavigation(s,Ga,null,l,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}IN(i)&&this._events.next(i)}catch(r){this.navigationTransitions.transitionAbortWithErrorSubject.next(r)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),Ga,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,i,r,o)=>{this.navigateToSyncWithBrowser(e,r,i,o)})}navigateToSyncWithBrowser(e,i,r,o){let a=r?.navigationId?r:null;if(r){let l=C({},r);delete l.navigationId,delete l.\u0275routerPageId,Object.keys(l).length!==0&&(o.state=l)}let s=this.parseUrl(e);this.scheduleNavigation(s,i,a,o).catch(l=>{this.disposed||this.injector.get(Cn)(l)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return ot(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map(kv),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,i={}){let{relativeTo:r,queryParams:o,fragment:a,queryParamsHandling:s,preserveFragment:l}=i,d=l?this.currentUrlTree.fragment:a,u=null;switch(s??this.options.defaultQueryParamsHandling){case"merge":u=C(C({},this.currentUrlTree.queryParams),o);break;case"preserve":u=this.currentUrlTree.queryParams;break;default:u=o||null}u!==null&&(u=this.removeEmptyProps(u));let h;try{let _=r?r.snapshot:this.routerState.snapshot.root;h=kx(_)}catch{(typeof e[0]!="string"||e[0][0]!=="/")&&(e=[]),h=this.currentUrlTree.root}return Ax(h,e,u,d??null,this.urlSerializer)}navigateByUrl(e,i={skipLocationChange:!1}){let r=Ya(e)?e:this.parseUrl(e),o=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(o,Ga,null,i)}navigate(e,i={skipLocationChange:!1}){return kF(e),this.navigateByUrl(this.createUrlTree(e,i),i)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch{return this.console.warn(An(4018,!1)),this.urlSerializer.parse("/")}}isActive(e,i){let r;if(i===!0?r=C({},Cx):i===!1?r=C({},fv):r=C(C({},fv),i),Ya(e))return dx(this.currentUrlTree,e,r);let o=this.parseUrl(e);return dx(this.currentUrlTree,o,r)}removeEmptyProps(e){return Object.entries(e).reduce((i,[r,o])=>(o!=null&&(i[r]=o),i),{})}scheduleNavigation(e,i,r,o,a){if(this.disposed)return Promise.resolve(!1);let s,l,d;a?(s=a.resolve,l=a.reject,d=a.promise):d=new Promise((h,_)=>{s=h,l=_});let u=this.pendingTasks.add();return Xm(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(u))}),this.navigationTransitions.handleNavigationRequest({source:i,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:o,resolve:s,reject:l,promise:d,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),d.catch(Promise.reject.bind(Promise))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function kF(t){for(let n=0;n<t.length;n++)if(t[n]==null)throw new P(4008,!1)}var cc=class{};var iE=(()=>{class t{router;injector;preloadingStrategy;loader;subscription;constructor(e,i,r,o){this.router=e,this.injector=i,this.preloadingStrategy=r,this.loader=o}setUpPreloading(){this.subscription=this.router.events.pipe(be(e=>e instanceof si),Mr(()=>this.preload())).subscribe(()=>{})}preload(){return this.processRoutes(this.injector,this.router.config)}ngOnDestroy(){this.subscription?.unsubscribe()}processRoutes(e,i){let r=[];for(let o of i){o.providers&&!o._injector&&(o._injector=Ba(o.providers,e,""));let a=o._injector??e;o._loadedNgModuleFactory&&!o._loadedInjector&&(o._loadedInjector=o._loadedNgModuleFactory.create(a).injector);let s=o._loadedInjector??a;(o.loadChildren&&!o._loadedRoutes&&o.canLoad===void 0||o.loadComponent&&!o._loadedComponent)&&r.push(this.preloadConfig(a,o)),(o.children||o._loadedRoutes)&&r.push(this.processRoutes(s,o.children??o._loadedRoutes))}return $e(r).pipe(Dr())}preloadConfig(e,i){return this.preloadingStrategy.preload(i,()=>{if(e.destroyed)return q(null);let r;i.loadChildren&&i.canLoad===void 0?r=$e(this.loader.loadChildren(e,i)):r=q(null);let o=r.pipe(Lt(a=>a===null?q(void 0):(i._loadedRoutes=a.routes,i._loadedInjector=a.injector,i._loadedNgModuleFactory=a.factory,this.processRoutes(a.injector??e,a.routes))));if(i.loadComponent&&!i._loadedComponent){let a=this.loader.loadComponent(e,i);return $e([o,a]).pipe(Dr())}else return o})}static \u0275fac=function(i){return new(i||t)(W(sn),W(Ne),W(cc),W(Qm))};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),rE=new y(""),RF=(()=>{class t{options;routerEventsSubscription;scrollEventsSubscription;lastId=0;lastSource=Ga;restoredId=0;store={};urlSerializer=c(Bo);zone=c(V);viewportScroller=c(z_);transitions=c(Km);constructor(e){this.options=e,this.options.scrollPositionRestoration||="disabled",this.options.anchorScrolling||="disabled"}init(){this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.setHistoryScrollRestoration("manual"),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.transitions.events.subscribe(e=>{e instanceof Ur?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=e.navigationTrigger,this.restoredId=e.restoredState?e.restoredState.navigationId:0):e instanceof si?(this.lastId=e.id,this.scheduleScrollEvent(e,this.urlSerializer.parse(e.urlAfterRedirects).fragment)):e instanceof Pi&&e.code===Qa.IgnoredSameUrlNavigation&&(this.lastSource=void 0,this.restoredId=0,this.scheduleScrollEvent(e,this.urlSerializer.parse(e.url).fragment))})}consumeScrollEvents(){return this.transitions.events.subscribe(e=>{if(!(e instanceof Za)||e.scrollBehavior==="manual")return;let i={behavior:"instant"};e.position?this.options.scrollPositionRestoration==="top"?this.viewportScroller.scrollToPosition([0,0],i):this.options.scrollPositionRestoration==="enabled"&&this.viewportScroller.scrollToPosition(e.position,i):e.anchor&&this.options.anchorScrolling==="enabled"?this.viewportScroller.scrollToAnchor(e.anchor):this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.scrollToPosition([0,0])})}scheduleScrollEvent(e,i){let r=ot(this.transitions.currentNavigation)?.extras.scroll;this.zone.runOutsideAngular(async()=>{await new Promise(o=>{setTimeout(o),typeof requestAnimationFrame<"u"&&requestAnimationFrame(o)}),this.zone.run(()=>{this.transitions.events.next(new Za(e,this.lastSource==="popstate"?this.store[this.restoredId]:null,i,r))})})}ngOnDestroy(){this.routerEventsSubscription?.unsubscribe(),this.scrollEventsSubscription?.unsubscribe()}static \u0275fac=function(i){Al()};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})();function Lv(t,...n){return gi([{provide:Uo,multi:!0,useValue:t},[],{provide:ur,useFactory:oE},{provide:Ol,multi:!0,useFactory:aE},n.map(e=>e.\u0275providers)])}function oE(){return c(sn).routerState.root}function dc(t,n){return{\u0275kind:t,\u0275providers:n}}function aE(){let t=c(G);return n=>{let e=t.get(wn);if(n!==e.components[0])return;let i=t.get(sn),r=t.get(sE);t.get(Vv)===1&&i.initialNavigation(),t.get(dE,null,{optional:!0})?.setUpPreloading(),t.get(rE,null,{optional:!0})?.init(),i.resetRootComponentType(e.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var sE=new y("",{factory:()=>new S}),Vv=new y("",{factory:()=>1});function lE(){let t=[{provide:Vu,useValue:!0},{provide:Vv,useValue:0},tm(()=>{let n=c(G);return n.get(F_,Promise.resolve()).then(()=>new Promise(i=>{let r=n.get(sn),o=n.get(sE);Xm(r,()=>{i(!0)}),n.get(Km).afterPreactivation=()=>(i(!0),o.closed?q(void 0):o),r.initialNavigation()}))})];return dc(2,t)}function cE(){let t=[tm(()=>{c(sn).setUpLocationChangeListener()}),{provide:Vv,useValue:2}];return dc(3,t)}var dE=new y("");function uE(t){return dc(0,[{provide:dE,useExisting:iE},{provide:cc,useExisting:t}])}function mE(){return dc(8,[Iv,{provide:sc,useExisting:Iv}])}function fE(t){ii("NgRouterViewTransitions");let n=[{provide:Rv,useValue:eE},{provide:Ov,useValue:C({skipNextTransition:!!t?.skipInitialTransition},t)}];return dc(9,n)}var hE=[Ni,{provide:Bo,useClass:dr},sn,jo,{provide:ur,useFactory:oE},Qm,[]],Bv=(()=>{class t{constructor(){}static forRoot(e,i){return{ngModule:t,providers:[hE,[],{provide:Uo,multi:!0,useValue:e},[],i?.errorHandler?{provide:Nv,useValue:i.errorHandler}:[],{provide:Ho,useValue:i||{}},i?.useHash?NF():FF(),OF(),i?.preloadingStrategy?uE(i.preloadingStrategy).\u0275providers:[],i?.initialNavigation?PF(i):[],i?.bindToComponentInputs?mE().\u0275providers:[],i?.enableViewTransitions?fE().\u0275providers:[],LF()]}}static forChild(e){return{ngModule:t,providers:[{provide:Uo,multi:!0,useValue:e}]}}static \u0275fac=function(i){return new(i||t)};static \u0275mod=$({type:t});static \u0275inj=z({})}return t})();function OF(){return{provide:rE,useFactory:()=>{let t=c(z_),n=c(Ho);return n.scrollOffset&&t.setOffset(n.scrollOffset),new RF(n)}}}function NF(){return{provide:lr,useClass:V_}}function FF(){return{provide:lr,useClass:fm}}function PF(t){return[t.initialNavigation==="disabled"?cE().\u0275providers:[],t.initialNavigation==="enabledBlocking"?lE().\u0275providers:[]]}var Pv=new y("");function LF(){return[{provide:Pv,useFactory:aE},{provide:Ol,multi:!0,useExisting:Pv}]}var BF=new y("cdk-dir-doc",{providedIn:"root",factory:()=>c(Y)}),jF=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function pE(t){let n=t?.toLowerCase()||"";return n==="auto"&&typeof navigator<"u"&&navigator?.language?jF.test(navigator.language)?"rtl":"ltr":n==="rtl"?"rtl":"ltr"}var nt=(()=>{class t{get value(){return this.valueSignal()}valueSignal=E("ltr");change=new I;constructor(){let e=c(BF,{optional:!0});if(e){let i=e.body?e.body.dir:null,r=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(pE(i||r||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var ve=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=$({type:t});static \u0275inj=z({})}return t})();var HF=["*"];var UF=[[["","mat-card-avatar",""],["","matCardAvatar",""]],[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],"*"],zF=["[mat-card-avatar], [matCardAvatar]",`mat-card-title, mat-card-subtitle,
      [mat-card-title], [mat-card-subtitle],
      [matCardTitle], [matCardSubtitle]`,"*"],$F=new y("MAT_CARD_CONFIG"),bt=(()=>{class t{appearance;constructor(){let e=c($F,{optional:!0});this.appearance=e?.appearance||"raised"}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=x({type:t,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(i,r){i&2&&L("mat-mdc-card-outlined",r.appearance==="outlined")("mdc-card--outlined",r.appearance==="outlined")("mat-mdc-card-filled",r.appearance==="filled")("mdc-card--filled",r.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:HF,decls:1,vars:0,template:function(i,r){i&1&&(Se(),ee(0))},styles:[`.mat-mdc-card {
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
`],encapsulation:2,changeDetection:0})}return t})(),is=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=A({type:t,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-mdc-card-title"]})}return t})();var ln=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=A({type:t,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"]})}return t})(),gE=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=A({type:t,selectors:[["mat-card-subtitle"],["","mat-card-subtitle",""],["","matCardSubtitle",""]],hostAttrs:[1,"mat-mdc-card-subtitle"]})}return t})();var cn=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=x({type:t,selectors:[["mat-card-header"]],hostAttrs:[1,"mat-mdc-card-header"],ngContentSelectors:zF,decls:4,vars:0,consts:[[1,"mat-mdc-card-header-text"]],template:function(i,r){i&1&&(Se(UF),ee(0),Me(1,"div",0),ee(2,1),ke(),ee(3,2))},encapsulation:2,changeDetection:0})}return t})();var _E=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=A({type:t,selectors:[["","mat-card-avatar",""],["","matCardAvatar",""]],hostAttrs:[1,"mat-mdc-card-avatar"]})}return t})();var Bn=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=$({type:t});static \u0275inj=z({imports:[ve]})}return t})();function mc(t){return t.buttons===0||t.detail===0}function fc(t){let n=t.touches&&t.touches[0]||t.changedTouches&&t.changedTouches[0];return!!n&&n.identifier===-1&&(n.radiusX==null||n.radiusX===1)&&(n.radiusY==null||n.radiusY===1)}var jv;function vE(){if(jv==null){let t=typeof document<"u"?document.head:null;jv=!!(t&&(t.createShadowRoot||t.attachShadow))}return jv}function Hv(t){if(vE()){let n=t.getRootNode?t.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&n instanceof ShadowRoot)return n}return null}function Li(){let t=typeof document<"u"&&document?document.activeElement:null;for(;t&&t.shadowRoot;){let n=t.shadowRoot.activeElement;if(n===t)break;t=n}return t}function Ut(t){return t.composedPath?t.composedPath()[0]:t.target}var Uv;try{Uv=typeof Intl<"u"&&Intl.v8BreakIterator}catch{Uv=!1}var ue=(()=>{class t{_platformId=c(Ao);isBrowser=this._platformId?UD(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||Uv)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var hc;function bE(){if(hc==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>hc=!0}))}finally{hc=hc||!1}return hc}function rs(t){return bE()?t:!!t.capture}function En(t,n=0){return yE(t)?Number(t):arguments.length===2?n:0}function yE(t){return!isNaN(parseFloat(t))&&!isNaN(Number(t))}function en(t){return t instanceof B?t.nativeElement:t}var CE=new y("cdk-input-modality-detector-options"),wE={ignoreKeys:[18,17,224,91,16]},DE=650,zv={passive:!0,capture:!0},xE=(()=>{class t{_platform=c(ue);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new ft(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(i=>i===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=Ut(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<DE||(this._modality.next(mc(e)?"keyboard":"mouse"),this._mostRecentTarget=Ut(e))};_onTouchstart=e=>{if(fc(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=Ut(e)};constructor(){let e=c(V),i=c(Y),r=c(CE,{optional:!0});if(this._options=C(C({},wE),r),this.modalityDetected=this._modality.pipe(fo(1)),this.modalityChanged=this.modalityDetected.pipe(Ad()),this._platform.isBrowser){let o=c(gt).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[o.listen(i,"keydown",this._onKeydown,zv),o.listen(i,"mousedown",this._onMousedown,zv),o.listen(i,"touchstart",this._onTouchstart,zv)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),pc=(function(t){return t[t.IMMEDIATE=0]="IMMEDIATE",t[t.EVENTUAL=1]="EVENTUAL",t})(pc||{}),EE=new y("cdk-focus-monitor-default-options"),Jm=rs({passive:!0,capture:!0}),mr=(()=>{class t{_ngZone=c(V);_platform=c(ue);_inputModalityDetector=c(xE);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=c(Y);_stopInputModalityDetector=new S;constructor(){let e=c(EE,{optional:!0});this._detectionMode=e?.detectionMode||pc.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let i=Ut(e);for(let r=i;r;r=r.parentElement)e.type==="focus"?this._onFocus(e,r):this._onBlur(e,r)};monitor(e,i=!1){let r=en(e);if(!this._platform.isBrowser||r.nodeType!==1)return q();let o=Hv(r)||this._document,a=this._elementInfo.get(r);if(a)return i&&(a.checkChildren=!0),a.subject;let s={checkChildren:i,subject:new S,rootNode:o};return this._elementInfo.set(r,s),this._registerGlobalListeners(s),s.subject}stopMonitoring(e){let i=en(e),r=this._elementInfo.get(i);r&&(r.subject.complete(),this._setClasses(i),this._elementInfo.delete(i),this._removeGlobalListeners(r))}focusVia(e,i,r){let o=en(e),a=this._document.activeElement;o===a?this._getClosestElementsInfo(o).forEach(([s,l])=>this._originChanged(s,i,l)):(this._setOrigin(i),typeof o.focus=="function"&&o.focus(r))}ngOnDestroy(){this._elementInfo.forEach((e,i)=>this.stopMonitoring(i))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===pc.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,i){e.classList.toggle("cdk-focused",!!i),e.classList.toggle("cdk-touch-focused",i==="touch"),e.classList.toggle("cdk-keyboard-focused",i==="keyboard"),e.classList.toggle("cdk-mouse-focused",i==="mouse"),e.classList.toggle("cdk-program-focused",i==="program")}_setOrigin(e,i=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&i,this._detectionMode===pc.IMMEDIATE){clearTimeout(this._originTimeoutId);let r=this._originFromTouchInteraction?DE:1;this._originTimeoutId=setTimeout(()=>this._origin=null,r)}})}_onFocus(e,i){let r=this._elementInfo.get(i),o=Ut(e);!r||!r.checkChildren&&i!==o||this._originChanged(i,this._getFocusOrigin(o),r)}_onBlur(e,i){let r=this._elementInfo.get(i);!r||r.checkChildren&&e.relatedTarget instanceof Node&&i.contains(e.relatedTarget)||(this._setClasses(i),this._emitOrigin(r,null))}_emitOrigin(e,i){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(i))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let i=e.rootNode,r=this._rootNodeFocusListenerCount.get(i)||0;r||this._ngZone.runOutsideAngular(()=>{i.addEventListener("focus",this._rootNodeFocusAndBlurListener,Jm),i.addEventListener("blur",this._rootNodeFocusAndBlurListener,Jm)}),this._rootNodeFocusListenerCount.set(i,r+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(ye(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(e){let i=e.rootNode;if(this._rootNodeFocusListenerCount.has(i)){let r=this._rootNodeFocusListenerCount.get(i);r>1?this._rootNodeFocusListenerCount.set(i,r-1):(i.removeEventListener("focus",this._rootNodeFocusAndBlurListener,Jm),i.removeEventListener("blur",this._rootNodeFocusAndBlurListener,Jm),this._rootNodeFocusListenerCount.delete(i))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,i,r){this._setClasses(e,i),this._emitOrigin(r,i),this._lastFocusOrigin=i}_getClosestElementsInfo(e){let i=[];return this._elementInfo.forEach((r,o)=>{(o===e||r.checkChildren&&o.contains(e))&&i.push([o,r])}),i}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:i,mostRecentModality:r}=this._inputModalityDetector;if(r!=="mouse"||!i||i===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let o=e.labels;if(o){for(let a=0;a<o.length;a++)if(o[a].contains(i))return!0}return!1}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),gc=(()=>{class t{_elementRef=c(B);_focusMonitor=c(mr);_monitorSubscription;_focusOrigin=null;cdkFocusChange=new I;constructor(){}get focusOrigin(){return this._focusOrigin}ngAfterViewInit(){let e=this._elementRef.nativeElement;this._monitorSubscription=this._focusMonitor.monitor(e,e.nodeType===1&&e.hasAttribute("cdkMonitorSubtreeFocus")).subscribe(i=>{this._focusOrigin=i,this.cdkFocusChange.emit(i)})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._monitorSubscription?.unsubscribe()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=A({type:t,selectors:[["","cdkMonitorElementFocus",""],["","cdkMonitorSubtreeFocus",""]],outputs:{cdkFocusChange:"cdkFocusChange"},exportAs:["cdkMonitorFocus"]})}return t})();var ef=new WeakMap,Ze=(()=>{class t{_appRef;_injector=c(G);_environmentInjector=c(Ne);load(e){let i=this._appRef=this._appRef||this._injector.get(wn),r=ef.get(i);r||(r={loaders:new Set,refs:[]},ef.set(i,r),i.onDestroy(()=>{ef.get(i)?.refs.forEach(o=>o.destroy()),ef.delete(i)})),r.loaders.has(e)||(r.loaders.add(e),r.refs.push(dm(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Vi=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=x({type:t,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(i,r){},styles:[`.cdk-visually-hidden {
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
`],encapsulation:2,changeDetection:0})}return t})(),tf;function WF(){if(tf===void 0&&(tf=null,typeof window<"u")){let t=window;t.trustedTypes!==void 0&&(tf=t.trustedTypes.createPolicy("angular#components",{createHTML:n=>n}))}return tf}function zo(t){return WF()?.createHTML(t)||t}function ME(t,n,e){let i=e.sanitize(jt.HTML,n);t.innerHTML=zo(i||"")}function os(t){return Array.isArray(t)?t:[t]}var SE=new Set,$o,as=(()=>{class t{_platform=c(ue);_nonce=c(La,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):qF}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&GF(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function GF(t,n){if(!SE.has(t))try{$o||($o=document.createElement("style"),n&&$o.setAttribute("nonce",n),$o.setAttribute("type","text/css"),document.head.appendChild($o)),$o.sheet&&($o.sheet.insertRule(`@media ${t} {body{ }}`,0),SE.add(t))}catch(e){console.error(e)}}function qF(t){return{matches:t==="all"||t==="",media:t,addListener:()=>{},removeListener:()=>{}}}var _c=(()=>{class t{_mediaMatcher=c(as);_zone=c(V);_queries=new Map;_destroySubject=new S;constructor(){}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return IE(os(e)).some(r=>this._registerQuery(r).mql.matches)}observe(e){let r=IE(os(e)).map(a=>this._registerQuery(a).observable),o=ma(r);return o=xr(o.pipe(it(1)),o.pipe(fo(1),Yi(0))),o.pipe(le(a=>{let s={matches:!1,breakpoints:{}};return a.forEach(({matches:l,query:d})=>{s.matches=s.matches||l,s.breakpoints[d]=l}),s}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);let i=this._mediaMatcher.matchMedia(e),o={observable:new se(a=>{let s=l=>this._zone.run(()=>a.next(l));return i.addListener(s),()=>{i.removeListener(s)}}).pipe(Je(i),le(({matches:a})=>({query:e,matches:a})),ye(this._destroySubject)),mql:i};return this._queries.set(e,o),o}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function IE(t){return t.map(n=>n.split(",")).reduce((n,e)=>n.concat(e)).map(n=>n.trim())}function YF(t){if(t.type==="characterData"&&t.target instanceof Comment)return!0;if(t.type==="childList"){for(let n=0;n<t.addedNodes.length;n++)if(!(t.addedNodes[n]instanceof Comment))return!1;for(let n=0;n<t.removedNodes.length;n++)if(!(t.removedNodes[n]instanceof Comment))return!1;return!0}return!1}var TE=(()=>{class t{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),kE=(()=>{class t{_mutationObserverFactory=c(TE);_observedElements=new Map;_ngZone=c(V);constructor(){}ngOnDestroy(){this._observedElements.forEach((e,i)=>this._cleanupObserver(i))}observe(e){let i=en(e);return new se(r=>{let a=this._observeElement(i).pipe(le(s=>s.filter(l=>!YF(l))),be(s=>!!s.length)).subscribe(s=>{this._ngZone.run(()=>{r.next(s)})});return()=>{a.unsubscribe(),this._unobserveElement(i)}})}_observeElement(e){return this._ngZone.runOutsideAngular(()=>{if(this._observedElements.has(e))this._observedElements.get(e).count++;else{let i=new S,r=this._mutationObserverFactory.create(o=>i.next(o));r&&r.observe(e,{characterData:!0,childList:!0,subtree:!0}),this._observedElements.set(e,{observer:r,stream:i,count:1})}return this._observedElements.get(e).stream})}_unobserveElement(e){this._observedElements.has(e)&&(this._observedElements.get(e).count--,this._observedElements.get(e).count||this._cleanupObserver(e))}_cleanupObserver(e){if(this._observedElements.has(e)){let{observer:i,stream:r}=this._observedElements.get(e);i&&i.disconnect(),r.complete(),this._observedElements.delete(e)}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),nf=(()=>{class t{_contentObserver=c(kE);_elementRef=c(B);event=new I;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._disabled?this._unsubscribe():this._subscribe()}_disabled=!1;get debounce(){return this._debounce}set debounce(e){this._debounce=En(e),this._subscribe()}_debounce;_currentSubscription=null;constructor(){}ngAfterContentInit(){!this._currentSubscription&&!this.disabled&&this._subscribe()}ngOnDestroy(){this._unsubscribe()}_subscribe(){this._unsubscribe();let e=this._contentObserver.observe(this._elementRef);this._currentSubscription=(this.debounce?e.pipe(Yi(this.debounce)):e).subscribe(this.event)}_unsubscribe(){this._currentSubscription?.unsubscribe()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=A({type:t,selectors:[["","cdkObserveContent",""]],inputs:{disabled:[2,"cdkObserveContentDisabled","disabled",te],debounce:"debounce"},outputs:{event:"cdkObserveContent"},exportAs:["cdkObserveContent"]})}return t})(),ss=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=$({type:t});static \u0275inj=z({providers:[TE]})}return t})();var Gv=(()=>{class t{_platform=c(ue);constructor(){}isDisabled(e){return e.hasAttribute("disabled")}isVisible(e){return ZF(e)&&getComputedStyle(e).visibility==="visible"}isTabbable(e){if(!this._platform.isBrowser)return!1;let i=QF(rP(e));if(i&&(AE(i)===-1||!this.isVisible(i)))return!1;let r=e.nodeName.toLowerCase(),o=AE(e);return e.hasAttribute("contenteditable")?o!==-1:r==="iframe"||r==="object"||this._platform.WEBKIT&&this._platform.IOS&&!nP(e)?!1:r==="audio"?e.hasAttribute("controls")?o!==-1:!1:r==="video"?o===-1?!1:o!==null?!0:this._platform.FIREFOX||e.hasAttribute("controls"):e.tabIndex>=0}isFocusable(e,i){return iP(e)&&!this.isDisabled(e)&&(i?.ignoreVisibility||this.isVisible(e))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function QF(t){try{return t.frameElement}catch{return null}}function ZF(t){return!!(t.offsetWidth||t.offsetHeight||typeof t.getClientRects=="function"&&t.getClientRects().length)}function KF(t){let n=t.nodeName.toLowerCase();return n==="input"||n==="select"||n==="button"||n==="textarea"}function XF(t){return eP(t)&&t.type=="hidden"}function JF(t){return tP(t)&&t.hasAttribute("href")}function eP(t){return t.nodeName.toLowerCase()=="input"}function tP(t){return t.nodeName.toLowerCase()=="a"}function NE(t){if(!t.hasAttribute("tabindex")||t.tabIndex===void 0)return!1;let n=t.getAttribute("tabindex");return!!(n&&!isNaN(parseInt(n,10)))}function AE(t){if(!NE(t))return null;let n=parseInt(t.getAttribute("tabindex")||"",10);return isNaN(n)?-1:n}function nP(t){let n=t.nodeName.toLowerCase(),e=n==="input"&&t.type;return e==="text"||e==="password"||n==="select"||n==="textarea"}function iP(t){return XF(t)?!1:KF(t)||JF(t)||t.hasAttribute("contenteditable")||NE(t)}function rP(t){return t.ownerDocument&&t.ownerDocument.defaultView||window}var Wv=class{_element;_checker;_ngZone;_document;_injector;_startAnchor=null;_endAnchor=null;_hasAttached=!1;startAnchorListener=()=>this.focusLastTabbableElement();endAnchorListener=()=>this.focusFirstTabbableElement();get enabled(){return this._enabled}set enabled(n){this._enabled=n,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(n,this._startAnchor),this._toggleAnchorTabIndex(n,this._endAnchor))}_enabled=!0;constructor(n,e,i,r,o=!1,a){this._element=n,this._checker=e,this._ngZone=i,this._document=r,this._injector=a,o||this.attachAnchors()}destroy(){let n=this._startAnchor,e=this._endAnchor;n&&(n.removeEventListener("focus",this.startAnchorListener),n.remove()),e&&(e.removeEventListener("focus",this.endAnchorListener),e.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener("focus",this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener("focus",this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusInitialElement(n)))})}focusFirstTabbableElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusFirstTabbableElement(n)))})}focusLastTabbableElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusLastTabbableElement(n)))})}_getRegionBoundary(n){let e=this._element.querySelectorAll(`[cdk-focus-region-${n}], [cdkFocusRegion${n}], [cdk-focus-${n}]`);return n=="start"?e.length?e[0]:this._getFirstTabbableElement(this._element):e.length?e[e.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(n){let e=this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");if(e){if(!this._checker.isFocusable(e)){let i=this._getFirstTabbableElement(e);return i?.focus(n),!!i}return e.focus(n),!0}return this.focusFirstTabbableElement(n)}focusFirstTabbableElement(n){let e=this._getRegionBoundary("start");return e&&e.focus(n),!!e}focusLastTabbableElement(n){let e=this._getRegionBoundary("end");return e&&e.focus(n),!!e}hasAttached(){return this._hasAttached}_getFirstTabbableElement(n){if(this._checker.isFocusable(n)&&this._checker.isTabbable(n))return n;let e=n.children;for(let i=0;i<e.length;i++){let r=e[i].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(e[i]):null;if(r)return r}return null}_getLastTabbableElement(n){if(this._checker.isFocusable(n)&&this._checker.isTabbable(n))return n;let e=n.children;for(let i=e.length-1;i>=0;i--){let r=e[i].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(e[i]):null;if(r)return r}return null}_createAnchor(){let n=this._document.createElement("div");return this._toggleAnchorTabIndex(this._enabled,n),n.classList.add("cdk-visually-hidden"),n.classList.add("cdk-focus-trap-anchor"),n.setAttribute("aria-hidden","true"),n}_toggleAnchorTabIndex(n,e){n?e.setAttribute("tabindex","0"):e.removeAttribute("tabindex")}toggleAnchors(n){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(n,this._startAnchor),this._toggleAnchorTabIndex(n,this._endAnchor))}_executeOnStable(n){this._injector?Ge(n,{injector:this._injector}):setTimeout(n)}},rf=(()=>{class t{_checker=c(Gv);_ngZone=c(V);_document=c(Y);_injector=c(G);constructor(){c(Ze).load(Vi)}create(e,i=!1){return new Wv(e,this._checker,this._ngZone,this._document,i,this._injector)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),qv=(()=>{class t{_elementRef=c(B);_focusTrapFactory=c(rf);focusTrap=void 0;_previouslyFocusedElement=null;get enabled(){return this.focusTrap?.enabled||!1}set enabled(e){this.focusTrap&&(this.focusTrap.enabled=e)}autoCapture=!1;constructor(){c(ue).isBrowser&&(this.focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement,!0))}ngOnDestroy(){this.focusTrap?.destroy(),this._previouslyFocusedElement&&(this._previouslyFocusedElement.focus(),this._previouslyFocusedElement=null)}ngAfterContentInit(){this.focusTrap?.attachAnchors(),this.autoCapture&&this._captureFocus()}ngDoCheck(){this.focusTrap&&!this.focusTrap.hasAttached()&&this.focusTrap.attachAnchors()}ngOnChanges(e){let i=e.autoCapture;i&&!i.firstChange&&this.autoCapture&&this.focusTrap?.hasAttached()&&this._captureFocus()}_captureFocus(){this._previouslyFocusedElement=Li(),this.focusTrap?.focusInitialElementWhenReady()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=A({type:t,selectors:[["","cdkTrapFocus",""]],inputs:{enabled:[2,"cdkTrapFocus","enabled",te],autoCapture:[2,"cdkTrapFocusAutoCapture","autoCapture",te]},exportAs:["cdkTrapFocus"],features:[Pe]})}return t})(),FE=new y("liveAnnouncerElement",{providedIn:"root",factory:()=>null}),PE=new y("LIVE_ANNOUNCER_DEFAULT_OPTIONS"),oP=0,vc=(()=>{class t{_ngZone=c(V);_defaultOptions=c(PE,{optional:!0});_liveElement;_document=c(Y);_sanitizer=c(ql);_previousTimeout;_currentPromise;_currentResolve;constructor(){let e=c(FE,{optional:!0});this._liveElement=e||this._createLiveElement()}announce(e,...i){let r=this._defaultOptions,o,a;return i.length===1&&typeof i[0]=="number"?a=i[0]:[o,a]=i,this.clear(),clearTimeout(this._previousTimeout),o||(o=r&&r.politeness?r.politeness:"polite"),a==null&&r&&(a=r.duration),this._liveElement.setAttribute("aria-live",o),this._liveElement.id&&this._exposeAnnouncerToModals(this._liveElement.id),this._ngZone.runOutsideAngular(()=>(this._currentPromise||(this._currentPromise=new Promise(s=>this._currentResolve=s)),clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{!e||typeof e=="string"?this._liveElement.textContent=e:ME(this._liveElement,e,this._sanitizer),typeof a=="number"&&(this._previousTimeout=setTimeout(()=>this.clear(),a)),this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0},100),this._currentPromise))}clear(){this._liveElement&&(this._liveElement.textContent="")}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement?.remove(),this._liveElement=null,this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0}_createLiveElement(){let e="cdk-live-announcer-element",i=this._document.getElementsByClassName(e),r=this._document.createElement("div");for(let o=0;o<i.length;o++)i[o].remove();return r.classList.add(e),r.classList.add("cdk-visually-hidden"),r.setAttribute("aria-atomic","true"),r.setAttribute("aria-live","polite"),r.id=`cdk-live-announcer-${oP++}`,this._document.body.appendChild(r),r}_exposeAnnouncerToModals(e){let i=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let r=0;r<i.length;r++){let o=i[r],a=o.getAttribute("aria-owns");a?a.indexOf(e)===-1&&o.setAttribute("aria-owns",a+" "+e):o.setAttribute("aria-owns",e)}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var zr=(function(t){return t[t.NONE=0]="NONE",t[t.BLACK_ON_WHITE=1]="BLACK_ON_WHITE",t[t.WHITE_ON_BLACK=2]="WHITE_ON_BLACK",t})(zr||{}),RE="cdk-high-contrast-black-on-white",OE="cdk-high-contrast-white-on-black",$v="cdk-high-contrast-active",LE=(()=>{class t{_platform=c(ue);_hasCheckedHighContrastMode=!1;_document=c(Y);_breakpointSubscription;constructor(){this._breakpointSubscription=c(_c).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return zr.NONE;let e=this._document.createElement("div");e.style.backgroundColor="rgb(1,2,3)",e.style.position="absolute",this._document.body.appendChild(e);let i=this._document.defaultView||window,r=i&&i.getComputedStyle?i.getComputedStyle(e):null,o=(r&&r.backgroundColor||"").replace(/ /g,"");switch(e.remove(),o){case"rgb(0,0,0)":case"rgb(45,50,54)":case"rgb(32,32,32)":return zr.WHITE_ON_BLACK;case"rgb(255,255,255)":case"rgb(255,250,239)":return zr.BLACK_ON_WHITE}return zr.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let e=this._document.body.classList;e.remove($v,RE,OE),this._hasCheckedHighContrastMode=!0;let i=this.getHighContrastMode();i===zr.BLACK_ON_WHITE?e.add($v,RE):i===zr.WHITE_ON_BLACK&&e.add($v,OE)}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Wo=(()=>{class t{constructor(){c(LE)._applyBodyHighContrastModeCssClasses()}static \u0275fac=function(i){return new(i||t)};static \u0275mod=$({type:t});static \u0275inj=z({imports:[ss]})}return t})();var aP=200,of=class{_letterKeyStream=new S;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new S;selectedItem=this._selectedItem;constructor(n,e){let i=typeof e?.debounceInterval=="number"?e.debounceInterval:aP;e?.skipPredicate&&(this._skipPredicateFn=e.skipPredicate),this.setItems(n),this._setupKeyHandler(i)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(n){this._selectedItemIndex=n}setItems(n){this._items=n}handleKey(n){let e=n.keyCode;n.key&&n.key.length===1?this._letterKeyStream.next(n.key.toLocaleUpperCase()):(e>=65&&e<=90||e>=48&&e<=57)&&this._letterKeyStream.next(String.fromCharCode(e))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(n){this._letterKeyStream.pipe(st(e=>this._pressedLetters.push(e)),Yi(n),be(()=>this._pressedLetters.length>0),le(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(e=>{for(let i=1;i<this._items.length+1;i++){let r=(this._selectedItemIndex+i)%this._items.length,o=this._items[r];if(!this._skipPredicateFn?.(o)&&o.getLabel?.().toLocaleUpperCase().trim().indexOf(e)===0){this._selectedItem.next(o);break}}this._pressedLetters=[]})}};function yt(t,...n){return n.length?n.some(e=>t[e]):t.altKey||t.shiftKey||t.ctrlKey||t.metaKey}var ls=class{_items;_activeItemIndex=E(-1);_activeItem=E(null);_wrap=!1;_typeaheadSubscription=oe.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=n=>n.disabled;constructor(n,e){this._items=n,n instanceof tr?this._itemChangesSubscription=n.changes.subscribe(i=>this._itemsChanged(i.toArray())):Si(n)&&(this._effectRef=Jt(()=>this._itemsChanged(n()),{injector:e}))}tabOut=new S;change=new S;skipPredicate(n){return this._skipPredicateFn=n,this}withWrap(n=!0){return this._wrap=n,this}withVerticalOrientation(n=!0){return this._vertical=n,this}withHorizontalOrientation(n){return this._horizontal=n,this}withAllowedModifierKeys(n){return this._allowedModifierKeys=n,this}withTypeAhead(n=200){this._typeaheadSubscription.unsubscribe();let e=this._getItemsArray();return this._typeahead=new of(e,{debounceInterval:typeof n=="number"?n:void 0,skipPredicate:i=>this._skipPredicateFn(i)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(i=>{this.setActiveItem(i)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(n=!0){return this._homeAndEnd=n,this}withPageUpDown(n=!0,e=10){return this._pageUpAndDown={enabled:n,delta:e},this}setActiveItem(n){let e=this._activeItem();this.updateActiveItem(n),this._activeItem()!==e&&this.change.next(this._activeItemIndex())}onKeydown(n){let e=n.keyCode,r=["altKey","ctrlKey","metaKey","shiftKey"].every(o=>!n[o]||this._allowedModifierKeys.indexOf(o)>-1);switch(e){case 9:this.tabOut.next();return;case 40:if(this._vertical&&r){this.setNextItemActive();break}else return;case 38:if(this._vertical&&r){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&r){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&r){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&r){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&r){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(o>0?o:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()+this._pageUpAndDown.delta,a=this._getItemsArray().length;this._setActiveItemByIndex(o<a?o:a-1,-1);break}else return;default:(r||yt(n,"shiftKey"))&&this._typeahead?.handleKey(n);return}this._typeahead?.reset(),n.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(n){let e=this._getItemsArray(),i=typeof n=="number"?n:e.indexOf(n),r=e[i];this._activeItem.set(r??null),this._activeItemIndex.set(i),this._typeahead?.setCurrentSelectedItemIndex(i)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(n){this._wrap?this._setActiveInWrapMode(n):this._setActiveInDefaultMode(n)}_setActiveInWrapMode(n){let e=this._getItemsArray();for(let i=1;i<=e.length;i++){let r=(this._activeItemIndex()+n*i+e.length)%e.length,o=e[r];if(!this._skipPredicateFn(o)){this.setActiveItem(r);return}}}_setActiveInDefaultMode(n){this._setActiveItemByIndex(this._activeItemIndex()+n,n)}_setActiveItemByIndex(n,e){let i=this._getItemsArray();if(i[n]){for(;this._skipPredicateFn(i[n]);)if(n+=e,!i[n])return;this.setActiveItem(n)}}_getItemsArray(){return Si(this._items)?this._items():this._items instanceof tr?this._items.toArray():this._items}_itemsChanged(n){this._typeahead?.setItems(n);let e=this._activeItem();if(e){let i=n.indexOf(e);i>-1&&i!==this._activeItemIndex()&&(this._activeItemIndex.set(i),this._typeahead?.setCurrentSelectedItemIndex(i))}}};var bc=class extends ls{setActiveItem(n){this.activeItem&&this.activeItem.setInactiveStyles(),super.setActiveItem(n),this.activeItem&&this.activeItem.setActiveStyles()}};var yc=class extends ls{_origin="program";setFocusOrigin(n){return this._origin=n,this}setActiveItem(n){super.setActiveItem(n),this.activeItem&&this.activeItem.focus(this._origin)}};var Yv={},Ke=class t{_appId=c(Vr);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(n,e=!1){return this._appId!=="ng"&&(n+=this._appId),Yv.hasOwnProperty(n)||(Yv[n]=0),`${n}${e?t._infix+"-":""}${Yv[n]++}`}static \u0275fac=function(e){return new(e||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})};var jE=" ";function Kv(t,n,e){let i=uf(t,n);e=e.trim(),!i.some(r=>r.trim()===e)&&(i.push(e),t.setAttribute(n,i.join(jE)))}function mf(t,n,e){let i=uf(t,n);e=e.trim();let r=i.filter(o=>o!==e);r.length?t.setAttribute(n,r.join(jE)):t.removeAttribute(n)}function uf(t,n){return t.getAttribute(n)?.match(/\S+/g)??[]}var HE="cdk-describedby-message",df="cdk-describedby-host",Zv=0,UE=(()=>{class t{_platform=c(ue);_document=c(Y);_messageRegistry=new Map;_messagesContainer=null;_id=`${Zv++}`;constructor(){c(Ze).load(Vi),this._id=c(Vr)+"-"+Zv++}describe(e,i,r){if(!this._canBeDescribed(e,i))return;let o=Qv(i,r);typeof i!="string"?(BE(i,this._id),this._messageRegistry.set(o,{messageElement:i,referenceCount:0})):this._messageRegistry.has(o)||this._createMessageElement(i,r),this._isElementDescribedByMessage(e,o)||this._addMessageReference(e,o)}removeDescription(e,i,r){if(!i||!this._isElementNode(e))return;let o=Qv(i,r);if(this._isElementDescribedByMessage(e,o)&&this._removeMessageReference(e,o),typeof i=="string"){let a=this._messageRegistry.get(o);a&&a.referenceCount===0&&this._deleteMessageElement(o)}this._messagesContainer?.childNodes.length===0&&(this._messagesContainer.remove(),this._messagesContainer=null)}ngOnDestroy(){let e=this._document.querySelectorAll(`[${df}="${this._id}"]`);for(let i=0;i<e.length;i++)this._removeCdkDescribedByReferenceIds(e[i]),e[i].removeAttribute(df);this._messagesContainer?.remove(),this._messagesContainer=null,this._messageRegistry.clear()}_createMessageElement(e,i){let r=this._document.createElement("div");BE(r,this._id),r.textContent=e,i&&r.setAttribute("role",i),this._createMessagesContainer(),this._messagesContainer.appendChild(r),this._messageRegistry.set(Qv(e,i),{messageElement:r,referenceCount:0})}_deleteMessageElement(e){this._messageRegistry.get(e)?.messageElement?.remove(),this._messageRegistry.delete(e)}_createMessagesContainer(){if(this._messagesContainer)return;let e="cdk-describedby-message-container",i=this._document.querySelectorAll(`.${e}[platform="server"]`);for(let o=0;o<i.length;o++)i[o].remove();let r=this._document.createElement("div");r.style.visibility="hidden",r.classList.add(e),r.classList.add("cdk-visually-hidden"),this._platform.isBrowser||r.setAttribute("platform","server"),this._document.body.appendChild(r),this._messagesContainer=r}_removeCdkDescribedByReferenceIds(e){let i=uf(e,"aria-describedby").filter(r=>r.indexOf(HE)!=0);e.setAttribute("aria-describedby",i.join(" "))}_addMessageReference(e,i){let r=this._messageRegistry.get(i);Kv(e,"aria-describedby",r.messageElement.id),e.setAttribute(df,this._id),r.referenceCount++}_removeMessageReference(e,i){let r=this._messageRegistry.get(i);r.referenceCount--,mf(e,"aria-describedby",r.messageElement.id),e.removeAttribute(df)}_isElementDescribedByMessage(e,i){let r=uf(e,"aria-describedby"),o=this._messageRegistry.get(i),a=o&&o.messageElement.id;return!!a&&r.indexOf(a)!=-1}_canBeDescribed(e,i){if(!this._isElementNode(e))return!1;if(i&&typeof i=="object")return!0;let r=i==null?"":`${i}`.trim(),o=e.getAttribute("aria-label");return r?!o||o.trim()!==r:!1}_isElementNode(e){return e.nodeType===this._document.ELEMENT_NODE}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Qv(t,n){return typeof t=="string"?`${n||""}/${t}`:t}function BE(t,n){t.id||(t.id=`${HE}-${n}-${Zv++}`)}var li=(function(t){return t[t.NORMAL=0]="NORMAL",t[t.NEGATED=1]="NEGATED",t[t.INVERTED=2]="INVERTED",t})(li||{}),ff,Yo;function hf(){if(Yo==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return Yo=!1,Yo;if(document.documentElement?.style&&"scrollBehavior"in document.documentElement.style)Yo=!0;else{let t=Element.prototype.scrollTo;t?Yo=!/\{\s*\[native code\]\s*\}/.test(t.toString()):Yo=!1}}return Yo}function us(){if(typeof document!="object"||!document)return li.NORMAL;if(ff==null){let t=document.createElement("div"),n=t.style;t.dir="rtl",n.width="1px",n.overflow="auto",n.visibility="hidden",n.pointerEvents="none",n.position="absolute";let e=document.createElement("div"),i=e.style;i.width="2px",i.height="1px",t.appendChild(e),document.body.appendChild(t),ff=li.NORMAL,t.scrollLeft===0&&(t.scrollLeft=1,ff=t.scrollLeft===0?li.NEGATED:li.INVERTED),t.remove()}return ff}function Xv(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}var ms,zE=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function Jv(){if(ms)return ms;if(typeof document!="object"||!document)return ms=new Set(zE),ms;let t=document.createElement("input");return ms=new Set(zE.filter(n=>(t.setAttribute("type",n),t.type===n))),ms}var $E={XSmall:"(max-width: 599.98px)",Small:"(min-width: 600px) and (max-width: 959.98px)",Medium:"(min-width: 960px) and (max-width: 1279.98px)",Large:"(min-width: 1280px) and (max-width: 1919.98px)",XLarge:"(min-width: 1920px)",Handset:"(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)",Tablet:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",Web:"(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)",HandsetPortrait:"(max-width: 599.98px) and (orientation: portrait)",TabletPortrait:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)",WebPortrait:"(min-width: 840px) and (orientation: portrait)",HandsetLandscape:"(max-width: 959.98px) and (orientation: landscape)",TabletLandscape:"(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",WebLandscape:"(min-width: 1280px) and (orientation: landscape)"};var sP=new y("MATERIAL_ANIMATIONS"),WE=null;function lP(){return c(sP,{optional:!0})?.animationsDisabled||c(Ml,{optional:!0})==="NoopAnimations"?"di-disabled":(WE??=c(as).matchMedia("(prefers-reduced-motion)").matches,WE?"reduced-motion":"enabled")}function je(){return lP()!=="enabled"}function dt(t){return t==null?"":typeof t=="string"?t:`${t}px`}function Ft(t){return t!=null&&`${t}`!="false"}var jn=(function(t){return t[t.FADING_IN=0]="FADING_IN",t[t.VISIBLE=1]="VISIBLE",t[t.FADING_OUT=2]="FADING_OUT",t[t.HIDDEN=3]="HIDDEN",t})(jn||{}),eb=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=jn.HIDDEN;constructor(n,e,i,r=!1){this._renderer=n,this.element=e,this.config=i,this._animationForciblyDisabledThroughCss=r}fadeOut(){this._renderer.fadeOutRipple(this)}},GE=rs({passive:!0,capture:!0}),tb=class{_events=new Map;addHandler(n,e,i,r){let o=this._events.get(e);if(o){let a=o.get(i);a?a.add(r):o.set(i,new Set([r]))}else this._events.set(e,new Map([[i,new Set([r])]])),n.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,GE)})}removeHandler(n,e,i){let r=this._events.get(n);if(!r)return;let o=r.get(e);o&&(o.delete(i),o.size===0&&r.delete(e),r.size===0&&(this._events.delete(n),document.removeEventListener(n,this._delegateEventHandler,GE)))}_delegateEventHandler=n=>{let e=Ut(n);e&&this._events.get(n.type)?.forEach((i,r)=>{(r===e||r.contains(e))&&i.forEach(o=>o.handleEvent(n))})}},Cc={enterDuration:225,exitDuration:150},cP=800,qE=rs({passive:!0,capture:!0}),YE=["mousedown","touchstart"],QE=["mouseup","mouseleave","touchend","touchcancel"],dP=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=x({type:t,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(i,r){},styles:[`.mat-ripple {
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
`],encapsulation:2,changeDetection:0})}return t})(),Qo=class t{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new tb;constructor(n,e,i,r,o){this._target=n,this._ngZone=e,this._platform=r,r.isBrowser&&(this._containerElement=en(i)),o&&o.get(Ze).load(dP)}fadeInRipple(n,e,i={}){let r=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=C(C({},Cc),i.animation);i.centered&&(n=r.left+r.width/2,e=r.top+r.height/2);let a=i.radius||uP(n,e,r),s=n-r.left,l=e-r.top,d=o.enterDuration,u=document.createElement("div");u.classList.add("mat-ripple-element"),u.style.left=`${s-a}px`,u.style.top=`${l-a}px`,u.style.height=`${a*2}px`,u.style.width=`${a*2}px`,i.color!=null&&(u.style.backgroundColor=i.color),u.style.transitionDuration=`${d}ms`,this._containerElement.appendChild(u);let h=window.getComputedStyle(u),_=h.transitionProperty,v=h.transitionDuration,w=_==="none"||v==="0s"||v==="0s, 0s"||r.width===0&&r.height===0,F=new eb(this,u,i,w);u.style.transform="scale3d(1, 1, 1)",F.state=jn.FADING_IN,i.persistent||(this._mostRecentTransientRipple=F);let U=null;return!w&&(d||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let Q=()=>{U&&(U.fallbackTimer=null),clearTimeout(At),this._finishRippleTransition(F)},Ie=()=>this._destroyRipple(F),At=setTimeout(Ie,d+100);u.addEventListener("transitionend",Q),u.addEventListener("transitioncancel",Ie),U={onTransitionEnd:Q,onTransitionCancel:Ie,fallbackTimer:At}}),this._activeRipples.set(F,U),(w||!d)&&this._finishRippleTransition(F),F}fadeOutRipple(n){if(n.state===jn.FADING_OUT||n.state===jn.HIDDEN)return;let e=n.element,i=C(C({},Cc),n.config.animation);e.style.transitionDuration=`${i.exitDuration}ms`,e.style.opacity="0",n.state=jn.FADING_OUT,(n._animationForciblyDisabledThroughCss||!i.exitDuration)&&this._finishRippleTransition(n)}fadeOutAll(){this._getActiveRipples().forEach(n=>n.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(n=>{n.config.persistent||n.fadeOut()})}setupTriggerEvents(n){let e=en(n);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,YE.forEach(i=>{t._eventManager.addHandler(this._ngZone,i,e,this)}))}handleEvent(n){n.type==="mousedown"?this._onMousedown(n):n.type==="touchstart"?this._onTouchStart(n):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{QE.forEach(e=>{this._triggerElement.addEventListener(e,this,qE)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(n){n.state===jn.FADING_IN?this._startFadeOutTransition(n):n.state===jn.FADING_OUT&&this._destroyRipple(n)}_startFadeOutTransition(n){let e=n===this._mostRecentTransientRipple,{persistent:i}=n.config;n.state=jn.VISIBLE,!i&&(!e||!this._isPointerDown)&&n.fadeOut()}_destroyRipple(n){let e=this._activeRipples.get(n)??null;this._activeRipples.delete(n),this._activeRipples.size||(this._containerRect=null),n===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),n.state=jn.HIDDEN,e!==null&&(n.element.removeEventListener("transitionend",e.onTransitionEnd),n.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),n.element.remove()}_onMousedown(n){let e=mc(n),i=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+cP;!this._target.rippleDisabled&&!e&&!i&&(this._isPointerDown=!0,this.fadeInRipple(n.clientX,n.clientY,this._target.rippleConfig))}_onTouchStart(n){if(!this._target.rippleDisabled&&!fc(n)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=n.changedTouches;if(e)for(let i=0;i<e.length;i++)this.fadeInRipple(e[i].clientX,e[i].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(n=>{let e=n.state===jn.VISIBLE||n.config.terminateOnPointerUp&&n.state===jn.FADING_IN;!n.config.persistent&&e&&n.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let n=this._triggerElement;n&&(YE.forEach(e=>t._eventManager.removeHandler(e,n,this)),this._pointerUpEventsRegistered&&(QE.forEach(e=>n.removeEventListener(e,this,qE)),this._pointerUpEventsRegistered=!1))}};function uP(t,n,e){let i=Math.max(Math.abs(t-e.left),Math.abs(t-e.right)),r=Math.max(Math.abs(n-e.top),Math.abs(n-e.bottom));return Math.sqrt(i*i+r*r)}var fs=new y("mat-ripple-global-options"),wc=(()=>{class t{_elementRef=c(B);_animationsDisabled=je();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=c(V),i=c(ue),r=c(fs,{optional:!0}),o=c(G);this._globalOptions=r||{},this._rippleRenderer=new Qo(this,e,this._elementRef,i,o)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:C(C(C({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,i=0,r){return typeof e=="number"?this._rippleRenderer.fadeInRipple(e,i,C(C({},this.rippleConfig),r)):this._rippleRenderer.fadeInRipple(0,0,C(C({},this.rippleConfig),e))}static \u0275fac=function(i){return new(i||t)};static \u0275dir=A({type:t,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(i,r){i&2&&L("mat-ripple-unbounded",r.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return t})();var mP={capture:!0},fP=["focus","mousedown","mouseenter","touchstart"],nb="mat-ripple-loader-uninitialized",ib="mat-ripple-loader-class-name",ZE="mat-ripple-loader-centered",pf="mat-ripple-loader-disabled",KE=(()=>{class t{_document=c(Y);_animationsDisabled=je();_globalRippleOptions=c(fs,{optional:!0});_platform=c(ue);_ngZone=c(V);_injector=c(G);_eventCleanups;_hosts=new Map;constructor(){let e=c(gt).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>fP.map(i=>e.listen(this._document,i,this._onInteraction,mP)))}ngOnDestroy(){let e=this._hosts.keys();for(let i of e)this.destroyRipple(i);this._eventCleanups.forEach(i=>i())}configureRipple(e,i){e.setAttribute(nb,this._globalRippleOptions?.namespace??""),(i.className||!e.hasAttribute(ib))&&e.setAttribute(ib,i.className||""),i.centered&&e.setAttribute(ZE,""),i.disabled&&e.setAttribute(pf,"")}setDisabled(e,i){let r=this._hosts.get(e);r?(r.target.rippleDisabled=i,!i&&!r.hasSetUpEvents&&(r.hasSetUpEvents=!0,r.renderer.setupTriggerEvents(e))):i?e.setAttribute(pf,""):e.removeAttribute(pf)}_onInteraction=e=>{let i=Ut(e);if(i instanceof HTMLElement){let r=i.closest(`[${nb}="${this._globalRippleOptions?.namespace??""}"]`);r&&this._createRipple(r)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let i=this._document.createElement("span");i.classList.add("mat-ripple",e.getAttribute(ib)),e.append(i);let r=this._globalRippleOptions,o=this._animationsDisabled?0:r?.animation?.enterDuration??Cc.enterDuration,a=this._animationsDisabled?0:r?.animation?.exitDuration??Cc.exitDuration,s={rippleDisabled:this._animationsDisabled||r?.disabled||e.hasAttribute(pf),rippleConfig:{centered:e.hasAttribute(ZE),terminateOnPointerUp:r?.terminateOnPointerUp,animation:{enterDuration:o,exitDuration:a}}},l=new Qo(s,this._ngZone,i,this._platform,this._injector),d=!s.rippleDisabled;d&&l.setupTriggerEvents(e),this._hosts.set(e,{target:s,renderer:l,hasSetUpEvents:d}),e.removeAttribute(nb)}destroyRipple(e){let i=this._hosts.get(e);i&&(i.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Bi=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=x({type:t,selectors:[["structural-styles"]],decls:0,vars:0,template:function(i,r){},styles:[`.mat-focus-indicator {
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
`],encapsulation:2,changeDetection:0})}return t})();var hP=["mat-icon-button",""],pP=["*"],gP=new y("MAT_BUTTON_CONFIG");function XE(t){return t==null?void 0:Oi(t)}var rb=(()=>{class t{_elementRef=c(B);_ngZone=c(V);_animationsDisabled=je();_config=c(gP,{optional:!0});_focusMonitor=c(mr);_cleanupClick;_renderer=c(Te);_rippleLoader=c(KE);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}constructor(){c(Ze).load(Bi);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e="program",i){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,i):this._elementRef.nativeElement.focus(i)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static \u0275fac=function(i){return new(i||t)};static \u0275dir=A({type:t,hostAttrs:[1,"mat-mdc-button-base"],hostVars:13,hostBindings:function(i,r){i&2&&(Z("disabled",r._getDisabledAttribute())("aria-disabled",r._getAriaDisabled())("tabindex",r._getTabIndex()),St(r.color?"mat-"+r.color:""),L("mat-mdc-button-disabled",r.disabled)("mat-mdc-button-disabled-interactive",r.disabledInteractive)("mat-unthemed",!r.color)("_mat-animation-noopable",r._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",te],disabled:[2,"disabled","disabled",te],ariaDisabled:[2,"aria-disabled","ariaDisabled",te],disabledInteractive:[2,"disabledInteractive","disabledInteractive",te],tabIndex:[2,"tabIndex","tabIndex",XE],_tabindex:[2,"tabindex","_tabindex",XE]}})}return t})(),ji=(()=>{class t extends rb{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=x({type:t,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[_e],attrs:hP,ngContentSelectors:pP,decls:4,vars:0,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(i,r){i&1&&(Se(),on(0,"span",0),ee(1),on(2,"span",1)(3,"span",2))},styles:[`.mat-mdc-icon-button {
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
`],encapsulation:2,changeDetection:0})}return t})();var hs=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=$({type:t});static \u0275inj=z({imports:[ve]})}return t})();var _P=["matButton",""],vP=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]]],bP=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"];var JE=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),zt=(()=>{class t extends rb{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let e=yP(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let i=this._elementRef.nativeElement.classList,r=this._appearance?JE.get(this._appearance):null,o=JE.get(e);r&&i.remove(...r),i.add(...o),this._appearance=e}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=x({type:t,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[_e],attrs:_P,ngContentSelectors:bP,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(i,r){i&1&&(Se(vP),on(0,"span",0),ee(1),Me(2,"span",1),ee(3,1),ke(),ee(4,2),on(5,"span",2)(6,"span",3)),i&2&&L("mdc-button__ripple",!r._isFab)("mdc-fab__ripple",r._isFab)},styles:[`.mat-mdc-button-base {
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
`],encapsulation:2,changeDetection:0})}return t})();function yP(t){return t.hasAttribute("mat-raised-button")?"elevated":t.hasAttribute("mat-stroked-button")?"outlined":t.hasAttribute("mat-flat-button")?"filled":t.hasAttribute("mat-button")?"text":null}var ut=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=$({type:t});static \u0275inj=z({imports:[hs,ve]})}return t})();var ob=class{_box;_destroyed=new S;_resizeSubject=new S;_resizeObserver;_elementObservables=new Map;constructor(n){this._box=n,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(n){return this._elementObservables.has(n)||this._elementObservables.set(n,new se(e=>{let i=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(n,{box:this._box}),()=>{this._resizeObserver?.unobserve(n),i.unsubscribe(),this._elementObservables.delete(n)}}).pipe(be(e=>e.some(i=>i.target===n)),Nd({bufferSize:1,refCount:!0}),ye(this._destroyed))),this._elementObservables.get(n)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},gf=(()=>{class t{_cleanupErrorListener;_observers=new Map;_ngZone=c(V);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,i){let r=i?.box||"content-box";return this._observers.has(r)||this._observers.set(r,new ob(r)),this._observers.get(r).observe(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var CP=["notch"],wP=["matFormFieldNotchedOutline",""],DP=["*"],eM=["iconPrefixContainer"],tM=["textPrefixContainer"],nM=["iconSuffixContainer"],iM=["textSuffixContainer"],xP=["textField"],EP=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],MP=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function SP(t,n){t&1&&T(0,"span",21)}function IP(t,n){if(t&1&&(m(0,"label",20),ee(1,1),j(2,SP,1,0,"span",21),f()),t&2){let e=D(2);R("floating",e._shouldLabelFloat())("monitorResize",e._hasOutline())("id",e._labelId),Z("for",e._control.disableAutomaticLabeling?null:e._control.id),p(2),H(!e.hideRequiredMarker&&e._control.required?2:-1)}}function TP(t,n){if(t&1&&j(0,IP,3,5,"label",20),t&2){let e=D();H(e._hasFloatingLabel()?0:-1)}}function kP(t,n){t&1&&T(0,"div",7)}function AP(t,n){}function RP(t,n){if(t&1&&ct(0,AP,0,0,"ng-template",13),t&2){D(2);let e=an(1);R("ngTemplateOutlet",e)}}function OP(t,n){if(t&1&&(m(0,"div",9),j(1,RP,1,1,null,13),f()),t&2){let e=D();R("matFormFieldNotchedOutlineOpen",e._shouldLabelFloat()),p(),H(e._forceDisplayInfixLabel()?-1:1)}}function NP(t,n){t&1&&(m(0,"div",10,2),ee(2,2),f())}function FP(t,n){t&1&&(m(0,"div",11,3),ee(2,3),f())}function PP(t,n){}function LP(t,n){if(t&1&&ct(0,PP,0,0,"ng-template",13),t&2){D();let e=an(1);R("ngTemplateOutlet",e)}}function VP(t,n){t&1&&(m(0,"div",14,4),ee(2,4),f())}function BP(t,n){t&1&&(m(0,"div",15,5),ee(2,5),f())}function jP(t,n){t&1&&T(0,"div",16)}function HP(t,n){t&1&&(m(0,"div",18),ee(1,6),f())}function UP(t,n){if(t&1&&(m(0,"mat-hint",22),g(1),f()),t&2){let e=D(2);R("id",e._hintLabelId),p(),ae(e.hintLabel)}}function zP(t,n){if(t&1&&(m(0,"div",19),j(1,UP,2,2,"mat-hint",22),ee(2,7),T(3,"div",23),ee(4,8),f()),t&2){let e=D();p(),H(e.hintLabel?1:-1)}}var Hn=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=A({type:t,selectors:[["mat-label"]]})}return t})(),$P=new y("MatError");var vf=(()=>{class t{align="start";id=c(Ke).getId("mat-mdc-hint-");static \u0275fac=function(i){return new(i||t)};static \u0275dir=A({type:t,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(i,r){i&2&&(qt("id",r.id),Z("align",null),L("mat-mdc-form-field-hint-end",r.align==="end"))},inputs:{align:"align",id:"id"}})}return t})(),dM=new y("MatPrefix"),bf=(()=>{class t{set _isTextSelector(e){this._isText=!0}_isText=!1;static \u0275fac=function(i){return new(i||t)};static \u0275dir=A({type:t,selectors:[["","matPrefix",""],["","matIconPrefix",""],["","matTextPrefix",""]],inputs:{_isTextSelector:[0,"matTextPrefix","_isTextSelector"]},features:[Be([{provide:dM,useExisting:t}])]})}return t})(),uM=new y("MatSuffix"),yf=(()=>{class t{set _isTextSelector(e){this._isText=!0}_isText=!1;static \u0275fac=function(i){return new(i||t)};static \u0275dir=A({type:t,selectors:[["","matSuffix",""],["","matIconSuffix",""],["","matTextSuffix",""]],inputs:{_isTextSelector:[0,"matTextSuffix","_isTextSelector"]},features:[Be([{provide:uM,useExisting:t}])]})}return t})(),mM=new y("FloatingLabelParent"),rM=(()=>{class t{_elementRef=c(B);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=c(gf);_ngZone=c(V);_parent=c(mM);_resizeSubscription=new oe;constructor(){}ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return WP(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(i){return new(i||t)};static \u0275dir=A({type:t,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(i,r){i&2&&L("mdc-floating-label--float-above",r.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return t})();function WP(t){let n=t;if(n.offsetParent!==null)return n.scrollWidth;let e=n.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let i=e.scrollWidth;return e.remove(),i}var oM="mdc-line-ripple--active",_f="mdc-line-ripple--deactivating",aM=(()=>{class t{_elementRef=c(B);_cleanupTransitionEnd;constructor(){let e=c(V),i=c(Te);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=i.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(_f),e.add(oM)}deactivate(){this._elementRef.nativeElement.classList.add(_f)}_handleTransitionEnd=e=>{let i=this._elementRef.nativeElement.classList,r=i.contains(_f);e.propertyName==="opacity"&&r&&i.remove(oM,_f)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=A({type:t,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return t})(),sM=(()=>{class t{_elementRef=c(B);_ngZone=c(V);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,i=e.querySelector(".mdc-floating-label");i?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(i.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>i.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){let i=this._notch.nativeElement;!this.open||!e?i.style.width="":i.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=x({type:t,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(i,r){if(i&1&&Ce(CP,5),i&2){let o;O(o=N())&&(r._notch=o.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(i,r){i&2&&L("mdc-notched-outline--notched",r.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},attrs:wP,ngContentSelectors:DP,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(i,r){i&1&&(Se(),on(0,"div",1),Me(1,"div",2,0),ee(3),ke(),on(4,"div",3))},encapsulation:2,changeDetection:0})}return t})(),Dc=(()=>{class t{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(i){return new(i||t)};static \u0275dir=A({type:t})}return t})();var xc=new y("MatFormField"),GP=new y("MAT_FORM_FIELD_DEFAULT_OPTIONS"),lM="fill",qP="auto",cM="fixed",YP="translateY(-50%)",Tt=(()=>{class t{_elementRef=c(B);_changeDetectorRef=c(De);_platform=c(ue);_idGenerator=c(Ke);_ngZone=c(V);_defaults=c(GP,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=ri("iconPrefixContainer");_textPrefixContainerSignal=ri("textPrefixContainer");_iconSuffixContainerSignal=ri("iconSuffixContainer");_textSuffixContainerSignal=ri("textSuffixContainer");_prefixSuffixContainers=_t(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=RD(Hn);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=Ft(e)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||qP}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let i=e||this._defaults?.appearance||lM;this._appearanceSignal.set(i)}_appearanceSignal=E(lM);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||cM}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||cM}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new S;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=je();constructor(){let e=this._defaults,i=c(nt);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),Jt(()=>this._currentDirection=i.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=_t(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){let i=this._control,r="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(r+e.controlType),i.controlType&&this._elementRef.nativeElement.classList.add(r+i.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=i.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=i.stateChanges.pipe(Je([void 0,void 0]),le(()=>[i.errorState,i.userAriaDescribedBy]),Od(),be(([[o,a],[s,l]])=>o!==s||a!==l)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),i.ngControl&&i.ngControl.valueChanges&&(this._valueChanges=i.ngControl.valueChanges.pipe(ye(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),Ot(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){PD({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=_t(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let i=this._control?this._control.ngControl:null;return i&&i[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let o=this._hintChildren?this._hintChildren.find(s=>s.align==="start"):null,a=this._hintChildren?this._hintChildren.find(s=>s.align==="end"):null;o?e.push(o.id):this._hintLabel&&e.push(this._hintLabelId),a&&e.push(a.id)}else this._errorChildren&&e.push(...this._errorChildren.map(o=>o.id));let i=this._control.describedByIds,r;if(i){let o=this._describedByIds||e;r=e.concat(i.filter(a=>a&&!o.includes(a)))}else r=e;this._control.setDescribedByIds(r),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,i=this._textPrefixContainer?.nativeElement,r=this._iconSuffixContainer?.nativeElement,o=this._textSuffixContainer?.nativeElement,a=e?.getBoundingClientRect().width??0,s=i?.getBoundingClientRect().width??0,l=r?.getBoundingClientRect().width??0,d=o?.getBoundingClientRect().width??0,u=this._currentDirection==="rtl"?"-1":"1",h=`${a+s}px`,v=`calc(${u} * (${h} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,w=`var(--mat-mdc-form-field-label-transform, ${YP} translateX(${v}))`,F=a+s+l+d;return[w,F]}_writeOutlinedLabelStyles(e){if(e!==null){let[i,r]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=i),r!==null&&this._notchedOutline?._setMaxWidth(r)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let i=e.getRootNode();return i&&i!==e}return document.documentElement.contains(e)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=x({type:t,selectors:[["mat-form-field"]],contentQueries:function(i,r,o){if(i&1&&(rm(o,r._labelChild,Hn,5),Mt(o,Dc,5)(o,dM,5)(o,uM,5)(o,$P,5)(o,vf,5)),i&2){Ti();let a;O(a=N())&&(r._formFieldControl=a.first),O(a=N())&&(r._prefixChildren=a),O(a=N())&&(r._suffixChildren=a),O(a=N())&&(r._errorChildren=a),O(a=N())&&(r._hintChildren=a)}},viewQuery:function(i,r){if(i&1&&(Ii(r._iconPrefixContainerSignal,eM,5)(r._textPrefixContainerSignal,tM,5)(r._iconSuffixContainerSignal,nM,5)(r._textSuffixContainerSignal,iM,5),Ce(xP,5)(eM,5)(tM,5)(nM,5)(iM,5)(rM,5)(sM,5)(aM,5)),i&2){Ti(4);let o;O(o=N())&&(r._textField=o.first),O(o=N())&&(r._iconPrefixContainer=o.first),O(o=N())&&(r._textPrefixContainer=o.first),O(o=N())&&(r._iconSuffixContainer=o.first),O(o=N())&&(r._textSuffixContainer=o.first),O(o=N())&&(r._floatingLabel=o.first),O(o=N())&&(r._notchedOutline=o.first),O(o=N())&&(r._lineRipple=o.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(i,r){i&2&&L("mat-mdc-form-field-label-always-float",r._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",r._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",r._hasIconSuffix)("mat-form-field-invalid",r._control.errorState)("mat-form-field-disabled",r._control.disabled)("mat-form-field-autofilled",r._control.autofilled)("mat-form-field-appearance-fill",r.appearance=="fill")("mat-form-field-appearance-outline",r.appearance=="outline")("mat-form-field-hide-placeholder",r._hasFloatingLabel()&&!r._shouldLabelFloat())("mat-primary",r.color!=="accent"&&r.color!=="warn")("mat-accent",r.color==="accent")("mat-warn",r.color==="warn")("ng-untouched",r._shouldForward("untouched"))("ng-touched",r._shouldForward("touched"))("ng-pristine",r._shouldForward("pristine"))("ng-dirty",r._shouldForward("dirty"))("ng-valid",r._shouldForward("valid"))("ng-invalid",r._shouldForward("invalid"))("ng-pending",r._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[Be([{provide:xc,useExisting:t},{provide:mM,useExisting:t}])],ngContentSelectors:MP,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(i,r){if(i&1&&(Se(EP),ct(0,TP,1,1,"ng-template",null,0,om),m(2,"div",6,1),M("click",function(a){return r._control.onContainerClick(a)}),j(4,kP,1,0,"div",7),m(5,"div",8),j(6,OP,2,2,"div",9),j(7,NP,3,0,"div",10),j(8,FP,3,0,"div",11),m(9,"div",12),j(10,LP,1,1,null,13),ee(11),f(),j(12,VP,3,0,"div",14),j(13,BP,3,0,"div",15),f(),j(14,jP,1,0,"div",16),f(),m(15,"div",17),j(16,HP,2,0,"div",18)(17,zP,5,1,"div",19),f()),i&2){let o;p(2),L("mdc-text-field--filled",!r._hasOutline())("mdc-text-field--outlined",r._hasOutline())("mdc-text-field--no-label",!r._hasFloatingLabel())("mdc-text-field--disabled",r._control.disabled)("mdc-text-field--invalid",r._control.errorState),p(2),H(!r._hasOutline()&&!r._control.disabled?4:-1),p(2),H(r._hasOutline()?6:-1),p(),H(r._hasIconPrefix?7:-1),p(),H(r._hasTextPrefix?8:-1),p(2),H(!r._hasOutline()||r._forceDisplayInfixLabel()?10:-1),p(2),H(r._hasTextSuffix?12:-1),p(),H(r._hasIconSuffix?13:-1),p(),H(r._hasOutline()?-1:14),p(),L("mat-mdc-form-field-subscript-dynamic-size",r.subscriptSizing==="dynamic");let a=r._getSubscriptMessageType();p(),H((o=a)==="error"?16:o==="hint"?17:-1)}},dependencies:[rM,sM,B_,aM,vf],styles:[`.mdc-text-field {
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
`],encapsulation:2,changeDetection:0})}return t})();var kt=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=$({type:t});static \u0275inj=z({imports:[ss,Tt,ve]})}return t})();function fM(t){return Error(`Unable to find icon with the name "${t}"`)}function ZP(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function hM(t){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${t}".`)}function pM(t){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${t}".`)}var fr=class{url;svgText;options;svgElement=null;constructor(n,e,i){this.url=n,this.svgText=e,this.options=i}},_M=(()=>{class t{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(e,i,r,o){this._httpClient=e,this._sanitizer=i,this._errorHandler=o,this._document=r}addSvgIcon(e,i,r){return this.addSvgIconInNamespace("",e,i,r)}addSvgIconLiteral(e,i,r){return this.addSvgIconLiteralInNamespace("",e,i,r)}addSvgIconInNamespace(e,i,r,o){return this._addSvgIconConfig(e,i,new fr(r,null,o))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,i,r,o){let a=this._sanitizer.sanitize(jt.HTML,r);if(!a)throw pM(r);let s=zo(a);return this._addSvgIconConfig(e,i,new fr("",s,o))}addSvgIconSet(e,i){return this.addSvgIconSetInNamespace("",e,i)}addSvgIconSetLiteral(e,i){return this.addSvgIconSetLiteralInNamespace("",e,i)}addSvgIconSetInNamespace(e,i,r){return this._addSvgIconSetConfig(e,new fr(i,null,r))}addSvgIconSetLiteralInNamespace(e,i,r){let o=this._sanitizer.sanitize(jt.HTML,i);if(!o)throw pM(i);let a=zo(o);return this._addSvgIconSetConfig(e,new fr("",a,r))}registerFontClassAlias(e,i=e){return this._fontCssClassesByAlias.set(e,i),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(e){let i=this._sanitizer.sanitize(jt.RESOURCE_URL,e);if(!i)throw hM(e);let r=this._cachedIconsByUrl.get(i);return r?q(Cf(r)):this._loadSvgIconFromConfig(new fr(e,null)).pipe(st(o=>this._cachedIconsByUrl.set(i,o)),le(o=>Cf(o)))}getNamedSvgIcon(e,i=""){let r=gM(i,e),o=this._svgIconConfigs.get(r);if(o)return this._getSvgFromConfig(o);if(o=this._getIconConfigFromResolvers(i,e),o)return this._svgIconConfigs.set(r,o),this._getSvgFromConfig(o);let a=this._iconSetConfigs.get(i);return a?this._getSvgFromIconSetConfigs(e,a):uo(fM(r))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?q(Cf(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe(le(i=>Cf(i)))}_getSvgFromIconSetConfigs(e,i){let r=this._extractIconWithNameFromAnySet(e,i);if(r)return q(r);let o=i.filter(a=>!a.svgText).map(a=>this._loadSvgIconSetFromConfig(a).pipe(Er(s=>{let d=`Loading icon set URL: ${this._sanitizer.sanitize(jt.RESOURCE_URL,a.url)} failed: ${s.message}`;return this._errorHandler.handleError(new Error(d)),q(null)})));return Qs(o).pipe(le(()=>{let a=this._extractIconWithNameFromAnySet(e,i);if(!a)throw fM(e);return a}))}_extractIconWithNameFromAnySet(e,i){for(let r=i.length-1;r>=0;r--){let o=i[r];if(o.svgText&&o.svgText.toString().indexOf(e)>-1){let a=this._svgElementFromConfig(o),s=this._extractSvgIconFromSet(a,e,o.options);if(s)return s}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe(st(i=>e.svgText=i),le(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?q(null):this._fetchIcon(e).pipe(st(i=>e.svgText=i))}_extractSvgIconFromSet(e,i,r){let o=e.querySelector(`[id="${i}"]`);if(!o)return null;let a=o.cloneNode(!0);if(a.removeAttribute("id"),a.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(a,r);if(a.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(a),r);let s=this._svgElementFromString(zo("<svg></svg>"));return s.appendChild(a),this._setSvgAttributes(s,r)}_svgElementFromString(e){let i=this._document.createElement("DIV");i.innerHTML=e;let r=i.querySelector("svg");if(!r)throw Error("<svg> tag not found");return r}_toSvgElement(e){let i=this._svgElementFromString(zo("<svg></svg>")),r=e.attributes;for(let o=0;o<r.length;o++){let{name:a,value:s}=r[o];a!=="id"&&i.setAttribute(a,s)}for(let o=0;o<e.childNodes.length;o++)e.childNodes[o].nodeType===this._document.ELEMENT_NODE&&i.appendChild(e.childNodes[o].cloneNode(!0));return i}_setSvgAttributes(e,i){return e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),i&&i.viewBox&&e.setAttribute("viewBox",i.viewBox),e}_fetchIcon(e){let{url:i,options:r}=e,o=r?.withCredentials??!1;if(!this._httpClient)throw ZP();if(i==null)throw Error(`Cannot fetch icon from URL "${i}".`);let a=this._sanitizer.sanitize(jt.RESOURCE_URL,i);if(!a)throw hM(i);let s=this._inProgressUrlFetches.get(a);if(s)return s;let l=this._httpClient.get(a,{responseType:"text",withCredentials:o}).pipe(le(d=>zo(d)),Sr(()=>this._inProgressUrlFetches.delete(a)),Ks());return this._inProgressUrlFetches.set(a,l),l}_addSvgIconConfig(e,i,r){return this._svgIconConfigs.set(gM(e,i),r),this}_addSvgIconSetConfig(e,i){let r=this._iconSetConfigs.get(e);return r?r.push(i):this._iconSetConfigs.set(e,[i]),this}_svgElementFromConfig(e){if(!e.svgElement){let i=this._svgElementFromString(e.svgText);this._setSvgAttributes(i,e.options),e.svgElement=i}return e.svgElement}_getIconConfigFromResolvers(e,i){for(let r=0;r<this._resolvers.length;r++){let o=this._resolvers[r](i,e);if(o)return KP(o)?new fr(o.url,null,o.options):new fr(o,null)}}static \u0275fac=function(i){return new(i||t)(W(vt,8),W(ql),W(Y,8),W(Gt))};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Cf(t){return t.cloneNode(!0)}function gM(t,n){return t+":"+n}function KP(t){return!!(t.url&&t.options)}var XP=["*"],JP=new y("MAT_ICON_DEFAULT_OPTIONS"),eL=new y("mat-icon-location",{providedIn:"root",factory:()=>{let t=c(Y),n=t?t.location:null;return{getPathname:()=>n?n.pathname+n.search:""}}}),vM=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],tL=vM.map(t=>`[${t}]`).join(", "),nL=/^url\(['"]?#(.*?)['"]?\)$/,Pt=(()=>{class t{_elementRef=c(B);_iconRegistry=c(_M);_location=c(eL);_errorHandler=c(Gt);_defaultColor;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(e){let i=this._cleanupFontValue(e);i!==this._fontSet&&(this._fontSet=i,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(e){let i=this._cleanupFontValue(e);i!==this._fontIcon&&(this._fontIcon=i,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=oe.EMPTY;constructor(){let e=c(new Ri("aria-hidden"),{optional:!0}),i=c(JP,{optional:!0});i&&(i.color&&(this.color=this._defaultColor=i.color),i.fontSet&&(this.fontSet=i.fontSet)),e||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(e){if(!e)return["",""];let i=e.split(":");switch(i.length){case 1:return["",i[0]];case 2:return i;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let i=this._location.getPathname();i!==this._previousPath&&(this._previousPath=i,this._prependPathToReferences(i))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();let i=this._location.getPathname();this._previousPath=i,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(i),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){let e=this._elementRef.nativeElement,i=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();i--;){let r=e.childNodes[i];(r.nodeType!==1||r.nodeName.toLowerCase()==="svg")&&r.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,i=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(r=>r.length>0);this._previousFontSetClass.forEach(r=>e.classList.remove(r)),i.forEach(r=>e.classList.add(r)),this._previousFontSetClass=i,this.fontIcon!==this._previousFontIconClass&&!i.includes("mat-ligature-font")&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return typeof e=="string"?e.trim().split(" ")[0]:e}_prependPathToReferences(e){let i=this._elementsWithExternalReferences;i&&i.forEach((r,o)=>{r.forEach(a=>{o.setAttribute(a.name,`url('${e}#${a.value}')`)})})}_cacheChildrenWithExternalReferences(e){let i=e.querySelectorAll(tL),r=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let o=0;o<i.length;o++)vM.forEach(a=>{let s=i[o],l=s.getAttribute(a),d=l?l.match(nL):null;if(d){let u=r.get(s);u||(u=[],r.set(s,u)),u.push({name:a,value:d[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[i,r]=this._splitIconName(e);i&&(this._svgNamespace=i),r&&(this._svgName=r),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(r,i).pipe(it(1)).subscribe(o=>this._setSvgElement(o),o=>{let a=`Error retrieving icon ${i}:${r}! ${o.message}`;this._errorHandler.handleError(new Error(a))})}}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=x({type:t,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(i,r){i&2&&(Z("data-mat-icon-type",r._usingFontIcon()?"font":"svg")("data-mat-icon-name",r._svgName||r.fontIcon)("data-mat-icon-namespace",r._svgNamespace||r.fontSet)("fontIcon",r._usingFontIcon()?r.fontIcon:null),St(r.color?"mat-"+r.color:""),L("mat-icon-inline",r.inline)("mat-icon-no-color",r.color!=="primary"&&r.color!=="accent"&&r.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",te],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:XP,decls:1,vars:0,template:function(i,r){i&1&&(Se(),ee(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
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
`],encapsulation:2,changeDetection:0})}return t})(),dn=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=$({type:t});static \u0275inj=z({imports:[ve]})}return t})();var iL=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=x({type:t,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(i,r){},styles:[`textarea.cdk-textarea-autosize {
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
`],encapsulation:2,changeDetection:0})}return t})(),rL={passive:!0},bM=(()=>{class t{_platform=c(ue);_ngZone=c(V);_renderer=c(gt).createRenderer(null,null);_styleLoader=c(Ze);_monitoredElements=new Map;constructor(){}monitor(e){if(!this._platform.isBrowser)return Xe;this._styleLoader.load(iL);let i=en(e),r=this._monitoredElements.get(i);if(r)return r.subject;let o=new S,a="cdk-text-field-autofilled",s=d=>{d.animationName==="cdk-text-field-autofill-start"&&!i.classList.contains(a)?(i.classList.add(a),this._ngZone.run(()=>o.next({target:d.target,isAutofilled:!0}))):d.animationName==="cdk-text-field-autofill-end"&&i.classList.contains(a)&&(i.classList.remove(a),this._ngZone.run(()=>o.next({target:d.target,isAutofilled:!1})))},l=this._ngZone.runOutsideAngular(()=>(i.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(i,"animationstart",s,rL)));return this._monitoredElements.set(i,{subject:o,unlisten:l}),o}stopMonitoring(e){let i=en(e),r=this._monitoredElements.get(i);r&&(r.unlisten(),r.subject.complete(),i.classList.remove("cdk-text-field-autofill-monitored"),i.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(i))}ngOnDestroy(){this._monitoredElements.forEach((e,i)=>this.stopMonitoring(i))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var yM=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=$({type:t});static \u0275inj=z({})}return t})();var TM=(()=>{class t{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,i){this._renderer=e,this._elementRef=i}setProperty(e,i){this._renderer.setProperty(this._elementRef.nativeElement,e,i)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(i){return new(i||t)(we(Te),we(B))};static \u0275dir=A({type:t})}return t})(),oL=(()=>{class t extends TM{static \u0275fac=(()=>{let e;return function(r){return(e||(e=qe(t)))(r||t)}})();static \u0275dir=A({type:t,features:[_e]})}return t})(),cb=new y("");var aL={provide:cb,useExisting:gn(()=>un),multi:!0};function sL(){let t=Pn()?Pn().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var lL=new y(""),un=(()=>{class t extends TM{_compositionMode;_composing=!1;constructor(e,i,r){super(e,i),this._compositionMode=r,this._compositionMode==null&&(this._compositionMode=!sL())}writeValue(e){let i=e??"";this.setProperty("value",i)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(i){return new(i||t)(we(Te),we(B),we(lL,8))};static \u0275dir=A({type:t,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(i,r){i&1&&M("input",function(a){return r._handleInput(a.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(a){return r._compositionEnd(a.target.value)})},standalone:!1,features:[Be([aL]),_e]})}return t})();function db(t){return t==null||ub(t)===0}function ub(t){return t==null?null:Array.isArray(t)||typeof t=="string"?t.length:t instanceof Set?t.size:null}var Af=new y(""),Rf=new y(""),cL=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,ci=class{static min(n){return dL(n)}static max(n){return uL(n)}static required(n){return mL(n)}static requiredTrue(n){return fL(n)}static email(n){return hL(n)}static minLength(n){return pL(n)}static maxLength(n){return gL(n)}static pattern(n){return _L(n)}static nullValidator(n){return kM()}static compose(n){return PM(n)}static composeAsync(n){return LM(n)}};function dL(t){return n=>{if(n.value==null||t==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e<t?{min:{min:t,actual:n.value}}:null}}function uL(t){return n=>{if(n.value==null||t==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e>t?{max:{max:t,actual:n.value}}:null}}function mL(t){return db(t.value)?{required:!0}:null}function fL(t){return t.value===!0?null:{required:!0}}function hL(t){return db(t.value)||cL.test(t.value)?null:{email:!0}}function pL(t){return n=>{let e=n.value?.length??ub(n.value);return e===null||e===0?null:e<t?{minlength:{requiredLength:t,actualLength:e}}:null}}function gL(t){return n=>{let e=n.value?.length??ub(n.value);return e!==null&&e>t?{maxlength:{requiredLength:t,actualLength:e}}:null}}function _L(t){if(!t)return kM;let n,e;return typeof t=="string"?(e="",t.charAt(0)!=="^"&&(e+="^"),e+=t,t.charAt(t.length-1)!=="$"&&(e+="$"),n=new RegExp(e)):(e=t.toString(),n=t),i=>{if(db(i.value))return null;let r=i.value;return n.test(r)?null:{pattern:{requiredPattern:e,actualValue:r}}}}function kM(t){return null}function AM(t){return t!=null}function RM(t){return rr(t)?$e(t):t}function OM(t){let n={};return t.forEach(e=>{n=e!=null?C(C({},n),e):n}),Object.keys(n).length===0?null:n}function NM(t,n){return n.map(e=>e(t))}function vL(t){return!t.validate}function FM(t){return t.map(n=>vL(n)?n:e=>n.validate(e))}function PM(t){if(!t)return null;let n=t.filter(AM);return n.length==0?null:function(e){return OM(NM(e,n))}}function mb(t){return t!=null?PM(FM(t)):null}function LM(t){if(!t)return null;let n=t.filter(AM);return n.length==0?null:function(e){let i=NM(e,n).map(RM);return Qs(i).pipe(le(OM))}}function fb(t){return t!=null?LM(FM(t)):null}function CM(t,n){return t===null?[n]:Array.isArray(t)?[...t,n]:[t,n]}function VM(t){return t._rawValidators}function BM(t){return t._rawAsyncValidators}function ab(t){return t?Array.isArray(t)?t:[t]:[]}function Df(t,n){return Array.isArray(t)?t.includes(n):t===n}function wM(t,n){let e=ab(n);return ab(t).forEach(r=>{Df(e,r)||e.push(r)}),e}function DM(t,n){return ab(n).filter(e=>!Df(t,e))}var xf=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(n){this._rawValidators=n||[],this._composedValidatorFn=mb(this._rawValidators)}_setAsyncValidators(n){this._rawAsyncValidators=n||[],this._composedAsyncValidatorFn=fb(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(n){this._onDestroyCallbacks.push(n)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(n=>n()),this._onDestroyCallbacks=[]}reset(n=void 0){this.control?.reset(n)}hasError(n,e){return this.control?this.control.hasError(n,e):!1}getError(n,e){return this.control?this.control.getError(n,e):null}},hr=class extends xf{name;get formDirective(){return null}get path(){return null}},di=class extends xf{_parent=null;name=null;valueAccessor=null},Ef=class{_cd;constructor(n){this._cd=n}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var Un=(()=>{class t extends Ef{constructor(e){super(e)}static \u0275fac=function(i){return new(i||t)(we(di,2))};static \u0275dir=A({type:t,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(i,r){i&2&&L("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},standalone:!1,features:[_e]})}return t})(),Of=(()=>{class t extends Ef{constructor(e){super(e)}static \u0275fac=function(i){return new(i||t)(we(hr,10))};static \u0275dir=A({type:t,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["","formArray",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(i,r){i&2&&L("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},standalone:!1,features:[_e]})}return t})();var Ec="VALID",wf="INVALID",gs="PENDING",Mc="DISABLED",$r=class{},Mf=class extends $r{value;source;constructor(n,e){super(),this.value=n,this.source=e}},Ic=class extends $r{pristine;source;constructor(n,e){super(),this.pristine=n,this.source=e}},Tc=class extends $r{touched;source;constructor(n,e){super(),this.touched=n,this.source=e}},_s=class extends $r{status;source;constructor(n,e){super(),this.status=n,this.source=e}},Sf=class extends $r{source;constructor(n){super(),this.source=n}},Ac=class extends $r{source;constructor(n){super(),this.source=n}};function hb(t){return(Nf(t)?t.validators:t)||null}function bL(t){return Array.isArray(t)?mb(t):t||null}function pb(t,n){return(Nf(n)?n.asyncValidators:t)||null}function yL(t){return Array.isArray(t)?fb(t):t||null}function Nf(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function jM(t,n,e){let i=t.controls;if(!(n?Object.keys(i):i).length)throw new P(1e3,"");if(!i[e])throw new P(1001,"")}function HM(t,n,e){t._forEachChild((i,r)=>{if(e[r]===void 0)throw new P(1002,"")})}var vs=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(n,e){this._assignValidators(n),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(n){this._rawValidators=this._composedValidatorFn=n}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(n){this._rawAsyncValidators=this._composedAsyncValidatorFn=n}get parent(){return this._parent}get status(){return ot(this.statusReactive)}set status(n){ot(()=>this.statusReactive.set(n))}_status=_t(()=>this.statusReactive());statusReactive=E(void 0);get valid(){return this.status===Ec}get invalid(){return this.status===wf}get pending(){return this.status===gs}get disabled(){return this.status===Mc}get enabled(){return this.status!==Mc}errors;get pristine(){return ot(this.pristineReactive)}set pristine(n){ot(()=>this.pristineReactive.set(n))}_pristine=_t(()=>this.pristineReactive());pristineReactive=E(!0);get dirty(){return!this.pristine}get touched(){return ot(this.touchedReactive)}set touched(n){ot(()=>this.touchedReactive.set(n))}_touched=_t(()=>this.touchedReactive());touchedReactive=E(!1);get untouched(){return!this.touched}_events=new S;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(n){this._assignValidators(n)}setAsyncValidators(n){this._assignAsyncValidators(n)}addValidators(n){this.setValidators(wM(n,this._rawValidators))}addAsyncValidators(n){this.setAsyncValidators(wM(n,this._rawAsyncValidators))}removeValidators(n){this.setValidators(DM(n,this._rawValidators))}removeAsyncValidators(n){this.setAsyncValidators(DM(n,this._rawAsyncValidators))}hasValidator(n){return Df(this._rawValidators,n)}hasAsyncValidator(n){return Df(this._rawAsyncValidators,n)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(n={}){let e=this.touched===!1;this.touched=!0;let i=n.sourceControl??this;n.onlySelf||this._parent?.markAsTouched(X(C({},n),{sourceControl:i})),e&&n.emitEvent!==!1&&this._events.next(new Tc(!0,i))}markAllAsDirty(n={}){this.markAsDirty({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(n))}markAllAsTouched(n={}){this.markAsTouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(n))}markAsUntouched(n={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let i=n.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:i})}),n.onlySelf||this._parent?._updateTouched(n,i),e&&n.emitEvent!==!1&&this._events.next(new Tc(!1,i))}markAsDirty(n={}){let e=this.pristine===!0;this.pristine=!1;let i=n.sourceControl??this;n.onlySelf||this._parent?.markAsDirty(X(C({},n),{sourceControl:i})),e&&n.emitEvent!==!1&&this._events.next(new Ic(!1,i))}markAsPristine(n={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let i=n.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:n.emitEvent})}),n.onlySelf||this._parent?._updatePristine(n,i),e&&n.emitEvent!==!1&&this._events.next(new Ic(!0,i))}markAsPending(n={}){this.status=gs;let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new _s(this.status,e)),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.markAsPending(X(C({},n),{sourceControl:e}))}disable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=Mc,this.errors=null,this._forEachChild(r=>{r.disable(X(C({},n),{onlySelf:!0}))}),this._updateValue();let i=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new Mf(this.value,i)),this._events.next(new _s(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(X(C({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=Ec,this._forEachChild(i=>{i.enable(X(C({},n),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent}),this._updateAncestors(X(C({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(n,e){n.onlySelf||(this._parent?.updateValueAndValidity(n),n.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(n){this._parent=n}getRawValue(){return this.value}updateValueAndValidity(n={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Ec||this.status===gs)&&this._runAsyncValidator(i,n.emitEvent)}let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new Mf(this.value,e)),this._events.next(new _s(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.updateValueAndValidity(X(C({},n),{sourceControl:e}))}_updateTreeValidity(n={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(n)),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Mc:Ec}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(n,e){if(this.asyncValidator){this.status=gs,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:n!==!1};let i=RM(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:e,shouldHaveEmitted:n})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let n=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,n}return!1}setErrors(n,e={}){this.errors=n,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(n){let e=n;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((i,r)=>i&&i._find(r),this)}getError(n,e){let i=e?this.get(e):this;return i?.errors?i.errors[n]:null}hasError(n,e){return!!this.getError(n,e)}get root(){let n=this;for(;n._parent;)n=n._parent;return n}_updateControlsErrors(n,e,i){this.status=this._calculateStatus(),n&&this.statusChanges.emit(this.status),(n||i)&&this._events.next(new _s(this.status,e)),this._parent&&this._parent._updateControlsErrors(n,e,i)}_initObservables(){this.valueChanges=new I,this.statusChanges=new I}_calculateStatus(){return this._allControlsDisabled()?Mc:this.errors?wf:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(gs)?gs:this._anyControlsHaveStatus(wf)?wf:Ec}_anyControlsHaveStatus(n){return this._anyControls(e=>e.status===n)}_anyControlsDirty(){return this._anyControls(n=>n.dirty)}_anyControlsTouched(){return this._anyControls(n=>n.touched)}_updatePristine(n,e){let i=!this._anyControlsDirty(),r=this.pristine!==i;this.pristine=i,n.onlySelf||this._parent?._updatePristine(n,e),r&&this._events.next(new Ic(this.pristine,e))}_updateTouched(n={},e){this.touched=this._anyControlsTouched(),this._events.next(new Tc(this.touched,e)),n.onlySelf||this._parent?._updateTouched(n,e)}_onDisabledChange=[];_registerOnCollectionChange(n){this._onCollectionChange=n}_setUpdateStrategy(n){Nf(n)&&n.updateOn!=null&&(this._updateOn=n.updateOn)}_parentMarkedDirty(n){return!n&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(n){return null}_assignValidators(n){this._rawValidators=Array.isArray(n)?n.slice():n,this._composedValidatorFn=bL(this._rawValidators)}_assignAsyncValidators(n){this._rawAsyncValidators=Array.isArray(n)?n.slice():n,this._composedAsyncValidatorFn=yL(this._rawAsyncValidators)}},bs=class extends vs{constructor(n,e,i){super(hb(e),pb(i,e)),this.controls=n,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(n,e){return this.controls[n]?this.controls[n]:(this.controls[n]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(n,e,i={}){this.registerControl(n,e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(n,e={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(n,e,i={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],e&&this.registerControl(n,e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(n){return this.controls.hasOwnProperty(n)&&this.controls[n].enabled}setValue(n,e={}){HM(this,!0,n),Object.keys(n).forEach(i=>{jM(this,!0,i),this.controls[i].setValue(n[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(n,e={}){n!=null&&(Object.keys(n).forEach(i=>{let r=this.controls[i];r&&r.patchValue(n[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(n={},e={}){this._forEachChild((i,r)=>{i.reset(n?n[r]:null,X(C({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new Ac(this))}getRawValue(){return this._reduceChildren({},(n,e,i)=>(n[i]=e.getRawValue(),n))}_syncPendingControls(){let n=this._reduceChildren(!1,(e,i)=>i._syncPendingControls()?!0:e);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){Object.keys(this.controls).forEach(e=>{let i=this.controls[e];i&&n(i,e)})}_setUpControls(){this._forEachChild(n=>{n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(n){for(let[e,i]of Object.entries(this.controls))if(this.contains(e)&&n(i))return!0;return!1}_reduceValue(){let n={};return this._reduceChildren(n,(e,i,r)=>((i.enabled||this.disabled)&&(e[r]=i.value),e))}_reduceChildren(n,e){let i=n;return this._forEachChild((r,o)=>{i=e(i,r,o)}),i}_allControlsDisabled(){for(let n of Object.keys(this.controls))if(this.controls[n].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(n){return this.controls.hasOwnProperty(n)?this.controls[n]:null}};var sb=class extends bs{};var Rc=new y("",{factory:()=>Ff}),Ff="always";function UM(t,n){return[...n.path,t]}function If(t,n,e=Ff){gb(t,n),n.valueAccessor.writeValue(t.value),(t.disabled||e==="always")&&n.valueAccessor.setDisabledState?.(t.disabled),wL(t,n),xL(t,n),DL(t,n),CL(t,n)}function xM(t,n,e=!0){let i=()=>{};n?.valueAccessor?.registerOnChange(i),n?.valueAccessor?.registerOnTouched(i),kf(t,n),t&&(n._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function Tf(t,n){t.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(n)})}function CL(t,n){if(n.valueAccessor.setDisabledState){let e=i=>{n.valueAccessor.setDisabledState(i)};t.registerOnDisabledChange(e),n._registerOnDestroy(()=>{t._unregisterOnDisabledChange(e)})}}function gb(t,n){let e=VM(t);n.validator!==null?t.setValidators(CM(e,n.validator)):typeof e=="function"&&t.setValidators([e]);let i=BM(t);n.asyncValidator!==null?t.setAsyncValidators(CM(i,n.asyncValidator)):typeof i=="function"&&t.setAsyncValidators([i]);let r=()=>t.updateValueAndValidity();Tf(n._rawValidators,r),Tf(n._rawAsyncValidators,r)}function kf(t,n){let e=!1;if(t!==null){if(n.validator!==null){let r=VM(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==n.validator);o.length!==r.length&&(e=!0,t.setValidators(o))}}if(n.asyncValidator!==null){let r=BM(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==n.asyncValidator);o.length!==r.length&&(e=!0,t.setAsyncValidators(o))}}}let i=()=>{};return Tf(n._rawValidators,i),Tf(n._rawAsyncValidators,i),e}function wL(t,n){n.valueAccessor.registerOnChange(e=>{t._pendingValue=e,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&zM(t,n)})}function DL(t,n){n.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&zM(t,n),t.updateOn!=="submit"&&t.markAsTouched()})}function zM(t,n){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),n.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function xL(t,n){let e=(i,r)=>{n.valueAccessor.writeValue(i),r&&n.viewToModelUpdate(i)};t.registerOnChange(e),n._registerOnDestroy(()=>{t._unregisterOnChange(e)})}function $M(t,n){t==null,gb(t,n)}function EL(t,n){return kf(t,n)}function WM(t,n){if(!t.hasOwnProperty("model"))return!1;let e=t.model;return e.isFirstChange()?!0:!Object.is(n,e.currentValue)}function ML(t){return Object.getPrototypeOf(t.constructor)===oL}function GM(t,n){t._syncPendingControls(),n.forEach(e=>{let i=e.control;i.updateOn==="submit"&&i._pendingChange&&(e.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function qM(t,n){if(!n)return null;Array.isArray(n);let e,i,r;return n.forEach(o=>{o.constructor===un?e=o:ML(o)?i=o:r=o}),r||i||e||null}function SL(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}var IL={provide:hr,useExisting:gn(()=>Oc)},Sc=Promise.resolve(),Oc=(()=>{class t extends hr{callSetDisabledState;get submitted(){return ot(this.submittedReactive)}_submitted=_t(()=>this.submittedReactive());submittedReactive=E(!1);_directives=new Set;form;ngSubmit=new I;options;constructor(e,i,r){super(),this.callSetDisabledState=r,this.form=new bs({},mb(e),fb(i))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){Sc.then(()=>{let i=this._findContainer(e.path);e.control=i.registerControl(e.name,e.control),If(e.control,e,this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){Sc.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){Sc.then(()=>{let i=this._findContainer(e.path),r=new bs({});$M(r,e),i.registerControl(e.name,r),r.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){Sc.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,i){Sc.then(()=>{this.form.get(e.path).setValue(i)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),GM(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new Sf(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static \u0275fac=function(i){return new(i||t)(we(Af,10),we(Rf,10),we(Rc,8))};static \u0275dir=A({type:t,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(i,r){i&1&&M("submit",function(a){return r.onSubmit(a)})("reset",function(){return r.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[Be([IL]),_e]})}return t})();function EM(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}function MM(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var kc=class extends vs{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(n=null,e,i){super(hb(e),pb(i,e)),this._applyFormState(n),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Nf(e)&&(e.nonNullable||e.initialValueIsDefault)&&(MM(n)?this.defaultValue=n.value:this.defaultValue=n)}setValue(n,e={}){this.value=this._pendingValue=n,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(n,e={}){this.setValue(n,e)}reset(n=this.defaultValue,e={}){this._applyFormState(n),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new Ac(this))}_updateValue(){}_anyControls(n){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(n){this._onChange.push(n)}_unregisterOnChange(n){EM(this._onChange,n)}registerOnDisabledChange(n){this._onDisabledChange.push(n)}_unregisterOnDisabledChange(n){EM(this._onDisabledChange,n)}_forEachChild(n){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(n){MM(n)?(this.value=this._pendingValue=n.value,n.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=n}};var TL=t=>t instanceof kc;var kL={provide:di,useExisting:gn(()=>pr)},SM=Promise.resolve(),pr=(()=>{class t extends di{_changeDetectorRef;callSetDisabledState;control=new kc;static ngAcceptInputType_isDisabled;_registered=!1;viewModel;name="";isDisabled;model;options;update=new I;constructor(e,i,r,o,a,s){super(),this._changeDetectorRef=a,this.callSetDisabledState=s,this._parent=e,this._setValidators(i),this._setAsyncValidators(r),this.valueAccessor=qM(this,o)}ngOnChanges(e){if(this._checkForErrors(),!this._registered||"name"in e){if(this._registered&&(this._checkName(),this.formDirective)){let i=e.name.previousValue;this.formDirective.removeControl({name:i,path:this._getPath(i)})}this._setUpControl()}"isDisabled"in e&&this._updateDisabled(e),WM(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective?.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){If(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._checkName()}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(e){SM.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(e){let i=e.isDisabled.currentValue,r=i!==0&&te(i);SM.then(()=>{r&&!this.control.disabled?this.control.disable():!r&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(e){return this._parent?UM(e,this._parent):[e]}static \u0275fac=function(i){return new(i||t)(we(hr,9),we(Af,10),we(Rf,10),we(cb,10),we(De,8),we(Rc,8))};static \u0275dir=A({type:t,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[Be([kL]),_e,Pe]})}return t})();var Pf=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=A({type:t,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return t})();var lb=class extends vs{constructor(n,e,i){super(hb(e),pb(i,e)),this.controls=n,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;at(n){return this.controls[this._adjustIndex(n)]}push(n,e={}){Array.isArray(n)?n.forEach(i=>{this.controls.push(i),this._registerControl(i)}):(this.controls.push(n),this._registerControl(n)),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}insert(n,e,i={}){this.controls.splice(n,0,e),this._registerControl(e),this.updateValueAndValidity({emitEvent:i.emitEvent})}removeAt(n,e={}){let i=this._adjustIndex(n);i<0&&(i=0),this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),this.controls.splice(i,1),this.updateValueAndValidity({emitEvent:e.emitEvent})}setControl(n,e,i={}){let r=this._adjustIndex(n);r<0&&(r=0),this.controls[r]&&this.controls[r]._registerOnCollectionChange(()=>{}),this.controls.splice(r,1),e&&(this.controls.splice(r,0,e),this._registerControl(e)),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(n,e={}){HM(this,!1,n),n.forEach((i,r)=>{jM(this,!1,r),this.at(r).setValue(i,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(n,e={}){n!=null&&(n.forEach((i,r)=>{this.at(r)&&this.at(r).patchValue(i,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(n=[],e={}){this._forEachChild((i,r)=>{i.reset(n[r],X(C({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new Ac(this))}getRawValue(){return this.controls.map(n=>n.getRawValue())}clear(n={}){this.controls.length<1||(this._forEachChild(e=>e._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:n.emitEvent}))}_adjustIndex(n){return n<0?n+this.length:n}_syncPendingControls(){let n=this.controls.reduce((e,i)=>i._syncPendingControls()?!0:e,!1);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){this.controls.forEach((e,i)=>{n(e,i)})}_updateValue(){this.value=this.controls.filter(n=>n.enabled||this.disabled).map(n=>n.value)}_anyControls(n){return this.controls.some(e=>e.enabled&&n(e))}_setUpControls(){this._forEachChild(n=>this._registerControl(n))}_allControlsDisabled(){for(let n of this.controls)if(n.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(n){n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)}_find(n){return this.at(n)??null}};var AL=(()=>{class t extends hr{callSetDisabledState;get submitted(){return ot(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=_t(()=>this._submittedReactive());_submittedReactive=E(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,i,r){super(),this.callSetDisabledState=r,this._setValidators(e),this._setAsyncValidators(i)}ngOnChanges(e){this.onChanges(e)}ngOnDestroy(){this.onDestroy()}onChanges(e){this._checkFormPresent(),e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(kf(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(e){let i=this.form.get(e.path);return If(i,e,this.callSetDisabledState),i.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),i}getControl(e){return this.form.get(e.path)}removeControl(e){xM(e.control||null,e,!1),SL(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}updateModel(e,i){this.form.get(e.path).setValue(i)}onReset(){this.resetForm()}resetForm(e=void 0,i={}){this.form.reset(e,i),this._submittedReactive.set(!1)}onSubmit(e){return this.submitted=!0,GM(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new Sf(this.control)),e?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(e=>{let i=e.control,r=this.form.get(e.path);i!==r&&(xM(i||null,e),TL(r)&&(If(r,e,this.callSetDisabledState),e.control=r))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let i=this.form.get(e.path);$M(i,e),i.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){let i=this.form?.get(e.path);i&&EL(i,e)&&i.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){gb(this.form,this),this._oldForm&&kf(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(i){return new(i||t)(we(Af,10),we(Rf,10),we(Rc,8))};static \u0275dir=A({type:t,features:[_e,Pe]})}return t})();var YM=new y("");var RL={provide:di,useExisting:gn(()=>Nc)},Nc=(()=>{class t extends di{_ngModelWarningConfig;_added=!1;viewModel;control;name=null;set isDisabled(e){}model;update=new I;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(e,i,r,o,a){super(),this._ngModelWarningConfig=a,this._parent=e,this._setValidators(i),this._setAsyncValidators(r),this.valueAccessor=qM(this,o)}ngOnChanges(e){this._added||this._setUpControl(),WM(e,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective?.removeControl(this)}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}get path(){return UM(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_setUpControl(){this.control=this.formDirective.addControl(this),this._added=!0}static \u0275fac=function(i){return new(i||t)(we(hr,13),we(Af,10),we(Rf,10),we(cb,10),we(YM,8))};static \u0275dir=A({type:t,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},standalone:!1,features:[Be([RL]),_e,Pe]})}return t})();var OL={provide:hr,useExisting:gn(()=>gr)},gr=(()=>{class t extends AL{form=null;ngSubmit=new I;get control(){return this.form}static \u0275fac=(()=>{let e;return function(r){return(e||(e=qe(t)))(r||t)}})();static \u0275dir=A({type:t,selectors:[["","formGroup",""]],hostBindings:function(i,r){i&1&&M("submit",function(a){return r.onSubmit(a)})("reset",function(){return r.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[Be([OL]),_e]})}return t})();var QM=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=$({type:t});static \u0275inj=z({})}return t})();function IM(t){return!!t&&(t.asyncValidators!==void 0||t.validators!==void 0||t.updateOn!==void 0)}var Lf=(()=>{class t{useNonNullable=!1;get nonNullable(){let e=new t;return e.useNonNullable=!0,e}group(e,i=null){let r=this._reduceControls(e),o={};return IM(i)?o=i:i!==null&&(o.validators=i.validator,o.asyncValidators=i.asyncValidator),new bs(r,o)}record(e,i=null){let r=this._reduceControls(e);return new sb(r,i)}control(e,i,r){let o={};return this.useNonNullable?(IM(i)?o=i:(o.validators=i,o.asyncValidators=r),new kc(e,X(C({},o),{nonNullable:!0}))):new kc(e,i,r)}array(e,i,r){let o=e.map(a=>this._createControl(a));return new lb(o,i,r)}_reduceControls(e){let i={};return Object.keys(e).forEach(r=>{i[r]=this._createControl(e[r])}),i}_createControl(e){if(e instanceof kc)return e;if(e instanceof vs)return e;if(Array.isArray(e)){let i=e[0],r=e.length>1?e[1]:null,o=e.length>2?e[2]:null;return this.control(i,r,o)}else return this.control(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Wr=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:Rc,useValue:e.callSetDisabledState??Ff}]}}static \u0275fac=function(i){return new(i||t)};static \u0275mod=$({type:t});static \u0275inj=z({imports:[QM]})}return t})(),Vf=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:YM,useValue:e.warnOnNgModelWithFormControl??"always"},{provide:Rc,useValue:e.callSetDisabledState??Ff}]}}static \u0275fac=function(i){return new(i||t)};static \u0275mod=$({type:t});static \u0275inj=z({imports:[QM]})}return t})();var ZM=new y("MAT_INPUT_VALUE_ACCESSOR");var Bf=(()=>{class t{isErrorState(e,i){return!!(e&&e.invalid&&(e.touched||i&&i.submitted))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Cs=class{_defaultMatcher;ngControl;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;constructor(n,e,i,r,o){this._defaultMatcher=n,this.ngControl=e,this._parentFormGroup=i,this._parentForm=r,this._stateChanges=o}updateErrorState(){let n=this.errorState,e=this._parentFormGroup||this._parentForm,i=this.matcher||this._defaultMatcher,r=this.ngControl?this.ngControl.control:null,o=i?.isErrorState(r,e)??!1;o!==n&&(this.errorState=o,this._stateChanges.next())}};var NL=["button","checkbox","file","hidden","image","radio","range","reset","submit"],FL=new y("MAT_INPUT_CONFIG"),Qt=(()=>{class t{_elementRef=c(B);_platform=c(ue);ngControl=c(di,{optional:!0,self:!0});_autofillMonitor=c(bM);_ngZone=c(V);_formField=c(xc,{optional:!0});_renderer=c(Te);_uid=c(Ke).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=c(FL,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new S;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=Ft(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(ci.required)??!1}set required(e){this._required=Ft(e)}_required;get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&Jv().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=Ft(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(e=>Jv().has(e));constructor(){let e=c(Oc,{optional:!0}),i=c(gr,{optional:!0}),r=c(Bf),o=c(ZM,{optional:!0,self:!0}),a=this._elementRef.nativeElement,s=a.nodeName.toLowerCase();o?Si(o.value)?this._signalBasedValueAccessor=o:this._inputValueAccessor=o:this._inputValueAccessor=a,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(a,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new Cs(r,this.ngControl,i,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=s==="select",this._isTextarea=s==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=a.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&Jt(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let i=this._elementRef.nativeElement;i.type==="number"?(i.type="text",i.setSelectionRange(0,0),i.type="number"):i.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let i=this._elementRef.nativeElement;this._previousPlaceholder=e,e?i.setAttribute("placeholder",e):i.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){NL.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,i=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&i&&i.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let i=this._elementRef.nativeElement;e.length?i.setAttribute("aria-describedby",e.join(" ")):i.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let i=e.target;!i.value&&i.selectionStart===0&&i.selectionEnd===0&&(i.setSelectionRange(1,1),i.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(i){return new(i||t)};static \u0275dir=A({type:t,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(i,r){i&1&&M("focus",function(){return r._focusChanged(!0)})("blur",function(){return r._focusChanged(!1)})("input",function(){return r._onInput()}),i&2&&(qt("id",r.id)("disabled",r.disabled&&!r.disabledInteractive)("required",r.required),Z("name",r.name||null)("readonly",r._getReadonlyAttribute())("aria-disabled",r.disabled&&r.disabledInteractive?"true":null)("aria-invalid",r.empty&&r.required?null:r.errorState)("aria-required",r.required)("id",r.id),L("mat-input-server",r._isServer)("mat-mdc-form-field-textarea-control",r._isInFormField&&r._isTextarea)("mat-mdc-form-field-input-control",r._isInFormField)("mat-mdc-input-disabled-interactive",r.disabledInteractive)("mdc-text-field__input",r._isInFormField)("mat-mdc-native-select-inline",r._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",te]},exportAs:["matInput"],features:[Be([{provide:Dc,useExisting:t}]),Pe]})}return t})(),zn=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=$({type:t});static \u0275inj=z({imports:[kt,kt,yM,ve]})}return t})();var Fc=class{_attachedHost=null;attach(n){return this._attachedHost=n,n.attach(this)}detach(){let n=this._attachedHost;n!=null&&(this._attachedHost=null,n.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(n){this._attachedHost=n}},Mn=class extends Fc{component;viewContainerRef;injector;projectableNodes;bindings;constructor(n,e,i,r,o){super(),this.component=n,this.viewContainerRef=e,this.injector=i,this.projectableNodes=r,this.bindings=o||null}},Sn=class extends Fc{templateRef;viewContainerRef;context;injector;constructor(n,e,i,r){super(),this.templateRef=n,this.viewContainerRef=e,this.context=i,this.injector=r}get origin(){return this.templateRef.elementRef}attach(n,e=this.context){return this.context=e,super.attach(n)}detach(){return this.context=void 0,super.detach()}},_b=class extends Fc{element;constructor(n){super(),this.element=n instanceof B?n.nativeElement:n}},Gr=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(n){if(n instanceof Mn)return this._attachedPortal=n,this.attachComponentPortal(n);if(n instanceof Sn)return this._attachedPortal=n,this.attachTemplatePortal(n);if(this.attachDomPortal&&n instanceof _b)return this._attachedPortal=n,this.attachDomPortal(n)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(n){this._disposeFn=n}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}},jf=class extends Gr{outletElement;_appRef;_defaultInjector;constructor(n,e,i){super(),this.outletElement=n,this._appRef=e,this._defaultInjector=i}attachComponentPortal(n){let e;if(n.viewContainerRef){let i=n.injector||n.viewContainerRef.injector,r=i.get(Mi,null,{optional:!0})||void 0;e=n.viewContainerRef.createComponent(n.component,{index:n.viewContainerRef.length,injector:i,ngModuleRef:r,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0}),this.setDisposeFn(()=>e.destroy())}else{let i=this._appRef,r=n.injector||this._defaultInjector||G.NULL,o=r.get(Ne,i.injector);e=dm(n.component,{elementInjector:r,environmentInjector:o,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0}),i.attachView(e.hostView),this.setDisposeFn(()=>{i.viewCount>0&&i.detachView(e.hostView),e.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=n,e}attachTemplatePortal(n){let e=n.viewContainerRef,i=e.createEmbeddedView(n.templateRef,n.context,{injector:n.injector});return i.rootNodes.forEach(r=>this.outletElement.appendChild(r)),i.detectChanges(),this.setDisposeFn(()=>{let r=e.indexOf(i);r!==-1&&e.remove(r)}),this._attachedPortal=n,i}attachDomPortal=n=>{let e=n.element;e.parentNode;let i=this.outletElement.ownerDocument.createComment("dom-portal");e.parentNode.insertBefore(i,e),this.outletElement.appendChild(e),this._attachedPortal=n,super.setDisposeFn(()=>{i.parentNode&&i.parentNode.replaceChild(e,i)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(n){return n.hostView.rootNodes[0]}},KM=(()=>{class t extends Sn{constructor(){let e=c(pt),i=c(Et);super(e,i)}static \u0275fac=function(i){return new(i||t)};static \u0275dir=A({type:t,selectors:[["","cdkPortal",""]],exportAs:["cdkPortal"],features:[_e]})}return t})(),mn=(()=>{class t extends Gr{_moduleRef=c(Mi,{optional:!0});_document=c(Y);_viewContainerRef=c(Et);_isInitialized=!1;_attachedRef=null;constructor(){super()}get portal(){return this._attachedPortal}set portal(e){this.hasAttached()&&!e&&!this._isInitialized||(this.hasAttached()&&super.detach(),e&&super.attach(e),this._attachedPortal=e||null)}attached=new I;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(e){e.setAttachedHost(this);let i=e.viewContainerRef!=null?e.viewContainerRef:this._viewContainerRef,r=i.createComponent(e.component,{index:i.length,injector:e.injector||i.injector,projectableNodes:e.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:e.bindings||void 0});return i!==this._viewContainerRef&&this._getRootNode().appendChild(r.hostView.rootNodes[0]),super.setDisposeFn(()=>r.destroy()),this._attachedPortal=e,this._attachedRef=r,this.attached.emit(r),r}attachTemplatePortal(e){e.setAttachedHost(this);let i=this._viewContainerRef.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=e,this._attachedRef=i,this.attached.emit(i),i}attachDomPortal=e=>{let i=e.element;i.parentNode;let r=this._document.createComment("dom-portal");e.setAttachedHost(this),i.parentNode.insertBefore(r,i),this._getRootNode().appendChild(i),this._attachedPortal=e,super.setDisposeFn(()=>{r.parentNode&&r.parentNode.replaceChild(i,r)})};_getRootNode(){let e=this._viewContainerRef.element.nativeElement;return e.nodeType===e.ELEMENT_NODE?e:e.parentNode}static \u0275fac=function(i){return new(i||t)};static \u0275dir=A({type:t,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:[0,"cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[_e]})}return t})(),Hi=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=$({type:t});static \u0275inj=z({})}return t})();var PL=20,qr=(()=>{class t{_ngZone=c(V);_platform=c(ue);_renderer=c(gt).createRenderer(null,null);_cleanupGlobalListener;constructor(){}_scrolled=new S;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let i=this.scrollContainers.get(e);i&&(i.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=PL){return this._platform.isBrowser?new se(i=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let r=e>0?this._scrolled.pipe(kd(e)).subscribe(i):this._scrolled.subscribe(i);return this._scrolledCount++,()=>{r.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):q()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,i)=>this.deregister(i)),this._scrolled.complete()}ancestorScrolled(e,i){let r=this.getAncestorScrollContainers(e);return this.scrolled(i).pipe(be(o=>!o||r.indexOf(o)>-1))}getAncestorScrollContainers(e){let i=[];return this.scrollContainers.forEach((r,o)=>{this._scrollableContainsElement(o,e)&&i.push(o)}),i}_scrollableContainsElement(e,i){let r=en(i),o=e.getElementRef().nativeElement;do if(r==o)return!0;while(r=r.parentElement);return!1}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Hf=(()=>{class t{elementRef=c(B);scrollDispatcher=c(qr);ngZone=c(V);dir=c(nt,{optional:!0});_scrollElement=this.elementRef.nativeElement;_destroyed=new S;_renderer=c(Te);_cleanupScroll;_elementScrolled=new S;constructor(){}ngOnInit(){this._cleanupScroll=this.ngZone.runOutsideAngular(()=>this._renderer.listen(this._scrollElement,"scroll",e=>this._elementScrolled.next(e))),this.scrollDispatcher.register(this)}ngOnDestroy(){this._cleanupScroll?.(),this._elementScrolled.complete(),this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(e){let i=this.elementRef.nativeElement,r=this.dir&&this.dir.value=="rtl";e.left==null&&(e.left=r?e.end:e.start),e.right==null&&(e.right=r?e.start:e.end),e.bottom!=null&&(e.top=i.scrollHeight-i.clientHeight-e.bottom),r&&us()!=li.NORMAL?(e.left!=null&&(e.right=i.scrollWidth-i.clientWidth-e.left),us()==li.INVERTED?e.left=e.right:us()==li.NEGATED&&(e.left=e.right?-e.right:e.right)):e.right!=null&&(e.left=i.scrollWidth-i.clientWidth-e.right),this._applyScrollToOptions(e)}_applyScrollToOptions(e){let i=this.elementRef.nativeElement;hf()?i.scrollTo(e):(e.top!=null&&(i.scrollTop=e.top),e.left!=null&&(i.scrollLeft=e.left))}measureScrollOffset(e){let i="left",r="right",o=this.elementRef.nativeElement;if(e=="top")return o.scrollTop;if(e=="bottom")return o.scrollHeight-o.clientHeight-o.scrollTop;let a=this.dir&&this.dir.value=="rtl";return e=="start"?e=a?r:i:e=="end"&&(e=a?i:r),a&&us()==li.INVERTED?e==i?o.scrollWidth-o.clientWidth-o.scrollLeft:o.scrollLeft:a&&us()==li.NEGATED?e==i?o.scrollLeft+o.scrollWidth-o.clientWidth:-o.scrollLeft:e==i?o.scrollLeft:o.scrollWidth-o.clientWidth-o.scrollLeft}static \u0275fac=function(i){return new(i||t)};static \u0275dir=A({type:t,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]]})}return t})(),LL=20,ui=(()=>{class t{_platform=c(ue);_listeners;_viewportSize=null;_change=new S;_document=c(Y);constructor(){let e=c(V),i=c(gt).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let r=o=>this._change.next(o);this._listeners=[i.listen("window","resize",r),i.listen("window","orientationchange",r)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:i,height:r}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+r,right:e.left+i,height:r,width:i}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,i=this._getWindow(),r=e.documentElement,o=r.getBoundingClientRect(),a=-o.top||e.body?.scrollTop||i.scrollY||r.scrollTop||0,s=-o.left||e.body?.scrollLeft||i.scrollX||r.scrollLeft||0;return{top:a,left:s}}change(e=LL){return e>0?this._change.pipe(kd(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var $n=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=$({type:t});static \u0275inj=z({})}return t})(),vb=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=$({type:t});static \u0275inj=z({imports:[ve,$n,ve,$n]})}return t})();var Db=["*"];function VL(t,n){t&1&&ee(0)}var BL=["tabListContainer"],jL=["tabList"],HL=["tabListInner"],UL=["nextPaginator"],zL=["previousPaginator"],$L=["content"];function WL(t,n){}var GL=["tabBodyWrapper"],qL=["tabHeader"];function YL(t,n){}function QL(t,n){if(t&1&&ct(0,YL,0,0,"ng-template",12),t&2){let e=D().$implicit;R("cdkPortalOutlet",e.templateLabel)}}function ZL(t,n){if(t&1&&g(0),t&2){let e=D().$implicit;ae(e.textLabel)}}function KL(t,n){if(t&1){let e=Le();m(0,"div",7,2),M("click",function(){let r=ie(e),o=r.$implicit,a=r.$index,s=D(),l=an(1);return re(s._handleClick(o,l,a))})("cdkFocusChange",function(r){let o=ie(e).$index,a=D();return re(a._tabFocusChanged(r,o))}),T(2,"span",8)(3,"div",9),m(4,"span",10)(5,"span",11),j(6,QL,1,1,null,12)(7,ZL,1,1),f()()()}if(t&2){let e=n.$implicit,i=n.$index,r=an(1),o=D();St(e.labelClass),L("mdc-tab--active",o.selectedIndex===i),R("id",o._getTabLabelId(e,i))("disabled",e.disabled)("fitInkBarToContent",o.fitInkBarToContent),Z("tabIndex",o._getTabIndex(i))("aria-posinset",i+1)("aria-setsize",o._tabs.length)("aria-controls",o._getTabContentId(i))("aria-selected",o.selectedIndex===i)("aria-label",e.ariaLabel||null)("aria-labelledby",!e.ariaLabel&&e.ariaLabelledby?e.ariaLabelledby:null),p(3),R("matRippleTrigger",r)("matRippleDisabled",e.disabled||o.disableRipple),p(3),H(e.templateLabel?6:7)}}function XL(t,n){t&1&&ee(0)}function JL(t,n){if(t&1){let e=Le();m(0,"mat-tab-body",13),M("_onCentered",function(){ie(e);let r=D();return re(r._removeTabBodyWrapperHeight())})("_onCentering",function(r){ie(e);let o=D();return re(o._setTabBodyWrapperHeight(r))})("_beforeCentering",function(r){ie(e);let o=D();return re(o._bodyCentered(r))}),f()}if(t&2){let e=n.$implicit,i=n.$index,r=D();St(e.bodyClass),R("id",r._getTabContentId(i))("content",e.content)("position",e.position)("animationDuration",r.animationDuration)("preserveContent",r.preserveContent),Z("tabindex",r.contentTabIndex!=null&&r.selectedIndex===i?r.contentTabIndex:null)("aria-labelledby",r._getTabLabelId(e,i))("aria-hidden",r.selectedIndex!==i)}}var eV=new y("MatTabContent"),tV=(()=>{class t{template=c(pt);constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275dir=A({type:t,selectors:[["","matTabContent",""]],features:[Be([{provide:eV,useExisting:t}])]})}return t})(),nV=new y("MatTabLabel"),tS=new y("MAT_TAB"),iV=(()=>{class t extends KM{_closestTab=c(tS,{optional:!0});static \u0275fac=(()=>{let e;return function(r){return(e||(e=qe(t)))(r||t)}})();static \u0275dir=A({type:t,selectors:[["","mat-tab-label",""],["","matTabLabel",""]],features:[Be([{provide:nV,useExisting:t}]),_e]})}return t})(),nS=new y("MAT_TAB_GROUP"),Pc=(()=>{class t{_viewContainerRef=c(Et);_closestTabGroup=c(nS,{optional:!0});disabled=!1;get templateLabel(){return this._templateLabel}set templateLabel(e){this._setTemplateLabelInput(e)}_templateLabel;_explicitContent=void 0;_implicitContent;textLabel="";ariaLabel;ariaLabelledby;labelClass;bodyClass;id=null;_contentPortal=null;get content(){return this._contentPortal}_stateChanges=new S;position=null;origin=null;isActive=!1;constructor(){c(Ze).load(Bi)}ngOnChanges(e){(e.hasOwnProperty("textLabel")||e.hasOwnProperty("disabled"))&&this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}ngOnInit(){this._contentPortal=new Sn(this._explicitContent||this._implicitContent,this._viewContainerRef)}_setTemplateLabelInput(e){e&&e._closestTab===this&&(this._templateLabel=e)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=x({type:t,selectors:[["mat-tab"]],contentQueries:function(i,r,o){if(i&1&&Mt(o,iV,5)(o,tV,7,pt),i&2){let a;O(a=N())&&(r.templateLabel=a.first),O(a=N())&&(r._explicitContent=a.first)}},viewQuery:function(i,r){if(i&1&&Ce(pt,7),i&2){let o;O(o=N())&&(r._implicitContent=o.first)}},hostAttrs:["hidden",""],hostVars:1,hostBindings:function(i,r){i&2&&Z("id",null)},inputs:{disabled:[2,"disabled","disabled",te],textLabel:[0,"label","textLabel"],ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],labelClass:"labelClass",bodyClass:"bodyClass",id:"id"},exportAs:["matTab"],features:[Be([{provide:tS,useExisting:t}]),Pe],ngContentSelectors:Db,decls:1,vars:0,template:function(i,r){i&1&&(Se(),Rl(0,VL,1,0,"ng-template"))},encapsulation:2})}return t})(),bb="mdc-tab-indicator--active",XM="mdc-tab-indicator--no-transition",yb=class{_items;_currentItem;constructor(n){this._items=n}hide(){this._items.forEach(n=>n.deactivateInkBar()),this._currentItem=void 0}alignToElement(n){let e=this._items.find(r=>r.elementRef.nativeElement===n),i=this._currentItem;if(e!==i&&(i?.deactivateInkBar(),e)){let r=i?.elementRef.nativeElement.getBoundingClientRect?.();e.activateInkBar(r),this._currentItem=e}}},rV=(()=>{class t{_elementRef=c(B);_inkBarElement=null;_inkBarContentElement=null;_fitToContent=!1;get fitInkBarToContent(){return this._fitToContent}set fitInkBarToContent(e){this._fitToContent!==e&&(this._fitToContent=e,this._inkBarElement&&this._appendInkBarElement())}activateInkBar(e){let i=this._elementRef.nativeElement;if(!e||!i.getBoundingClientRect||!this._inkBarContentElement){i.classList.add(bb);return}let r=i.getBoundingClientRect(),o=e.width/r.width,a=e.left-r.left;i.classList.add(XM),this._inkBarContentElement.style.setProperty("transform",`translateX(${a}px) scaleX(${o})`),i.getBoundingClientRect(),i.classList.remove(XM),i.classList.add(bb),this._inkBarContentElement.style.setProperty("transform","")}deactivateInkBar(){this._elementRef.nativeElement.classList.remove(bb)}ngOnInit(){this._createInkBarElement()}ngOnDestroy(){this._inkBarElement?.remove(),this._inkBarElement=this._inkBarContentElement=null}_createInkBarElement(){let e=this._elementRef.nativeElement.ownerDocument||document,i=this._inkBarElement=e.createElement("span"),r=this._inkBarContentElement=e.createElement("span");i.className="mdc-tab-indicator",r.className="mdc-tab-indicator__content mdc-tab-indicator__content--underline",i.appendChild(this._inkBarContentElement),this._appendInkBarElement()}_appendInkBarElement(){this._inkBarElement;let e=this._fitToContent?this._elementRef.nativeElement.querySelector(".mdc-tab__content"):this._elementRef.nativeElement;e.appendChild(this._inkBarElement)}static \u0275fac=function(i){return new(i||t)};static \u0275dir=A({type:t,inputs:{fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",te]}})}return t})();var iS=(()=>{class t extends rV{elementRef=c(B);disabled=!1;focus(){this.elementRef.nativeElement.focus()}getOffsetLeft(){return this.elementRef.nativeElement.offsetLeft}getOffsetWidth(){return this.elementRef.nativeElement.offsetWidth}static \u0275fac=(()=>{let e;return function(r){return(e||(e=qe(t)))(r||t)}})();static \u0275dir=A({type:t,selectors:[["","matTabLabelWrapper",""]],hostVars:3,hostBindings:function(i,r){i&2&&(Z("aria-disabled",!!r.disabled),L("mat-mdc-tab-disabled",r.disabled))},inputs:{disabled:[2,"disabled","disabled",te]},features:[_e]})}return t})(),JM={passive:!0},oV=650,aV=100,sV=(()=>{class t{_elementRef=c(B);_changeDetectorRef=c(De);_viewportRuler=c(ui);_dir=c(nt,{optional:!0});_ngZone=c(V);_platform=c(ue);_sharedResizeObserver=c(gf);_injector=c(G);_renderer=c(Te);_animationsDisabled=je();_eventCleanups;_scrollDistance=0;_selectedIndexChanged=!1;_destroyed=new S;_showPaginationControls=!1;_disableScrollAfter=!0;_disableScrollBefore=!0;_tabLabelCount;_scrollDistanceChanged=!1;_keyManager;_currentTextContent;_stopScrolling=new S;disablePagination=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){let i=isNaN(e)?0:e;this._selectedIndex!=i&&(this._selectedIndexChanged=!0,this._selectedIndex=i,this._keyManager&&this._keyManager.updateActiveItem(i))}_selectedIndex=0;selectFocusedIndex=new I;indexFocused=new I;constructor(){this._eventCleanups=this._ngZone.runOutsideAngular(()=>[this._renderer.listen(this._elementRef.nativeElement,"mouseleave",()=>this._stopInterval())])}ngAfterViewInit(){this._eventCleanups.push(this._renderer.listen(this._previousPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("before"),JM),this._renderer.listen(this._nextPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("after"),JM))}ngAfterContentInit(){let e=this._dir?this._dir.change:q("ltr"),i=this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe(Yi(32),ye(this._destroyed)),r=this._viewportRuler.change(150).pipe(ye(this._destroyed)),o=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new yc(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(()=>!1),this._keyManager.updateActiveItem(Math.max(this._selectedIndex,0)),Ge(o,{injector:this._injector}),Ot(e,r,i,this._items.changes,this._itemsResized()).pipe(ye(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>{Promise.resolve().then(()=>{this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),this._scrollDistance)),o()})}),this._keyManager?.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.subscribe(a=>{this.indexFocused.emit(a),this._setTabFocus(a)})}_itemsResized(){return typeof ResizeObserver!="function"?Xe:this._items.changes.pipe(Je(this._items),ht(e=>new se(i=>this._ngZone.runOutsideAngular(()=>{let r=new ResizeObserver(o=>i.next(o));return e.forEach(o=>r.observe(o.elementRef.nativeElement)),()=>{r.disconnect()}}))),fo(1),be(e=>e.some(i=>i.contentRect.width>0&&i.contentRect.height>0)))}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._keyManager?.destroy(),this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(e){if(!yt(e))switch(e.keyCode){case 13:case 32:if(this.focusIndex!==this.selectedIndex){let i=this._items.get(this.focusIndex);i&&!i.disabled&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(e))}break;default:this._keyManager?.onKeydown(e)}}_onContentChanges(){let e=this._elementRef.nativeElement.textContent;e!==this._currentTextContent&&(this._currentTextContent=e||"",this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(e){!this._isValidIndex(e)||this.focusIndex===e||!this._keyManager||this._keyManager.setActiveItem(e)}_isValidIndex(e){return this._items?!!this._items.toArray()[e]:!0}_setTabFocus(e){if(this._showPaginationControls&&this._scrollToLabel(e),this._items&&this._items.length){this._items.toArray()[e].focus();let i=this._tabListContainer.nativeElement;this._getLayoutDirection()=="ltr"?i.scrollLeft=0:i.scrollLeft=i.scrollWidth-i.offsetWidth}}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_updateTabScrollPosition(){if(this.disablePagination)return;let e=this.scrollDistance,i=this._getLayoutDirection()==="ltr"?-e:e;this._tabList.nativeElement.style.transform=`translateX(${Math.round(i)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(e){this._scrollTo(e)}_scrollHeader(e){let i=this._tabListContainer.nativeElement.offsetWidth,r=(e=="before"?-1:1)*i/3;return this._scrollTo(this._scrollDistance+r)}_handlePaginatorClick(e){this._stopInterval(),this._scrollHeader(e)}_scrollToLabel(e){if(this.disablePagination)return;let i=this._items?this._items.toArray()[e]:null;if(!i)return;let r=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:o,offsetWidth:a}=i.elementRef.nativeElement,s,l;this._getLayoutDirection()=="ltr"?(s=o,l=s+a):(l=this._tabListInner.nativeElement.offsetWidth-o,s=l-a);let d=this.scrollDistance,u=this.scrollDistance+r;s<d?this.scrollDistance-=d-s:l>u&&(this.scrollDistance+=Math.min(l-u,s-d))}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{let e=this._tabListInner.nativeElement.scrollWidth,i=this._elementRef.nativeElement.offsetWidth,r=e-i>=5;r||(this.scrollDistance=0),r!==this._showPaginationControls&&(this._showPaginationControls=r,this._changeDetectorRef.markForCheck())}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=this.scrollDistance==0,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){let e=this._tabListInner.nativeElement.scrollWidth,i=this._tabListContainer.nativeElement.offsetWidth;return e-i||0}_alignInkBarToSelectedTab(){let e=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,i=e?e.elementRef.nativeElement:null;i?this._inkBar.alignToElement(i):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(e,i){i&&i.button!=null&&i.button!==0||(this._stopInterval(),Zs(oV,aV).pipe(ye(Ot(this._stopScrolling,this._destroyed))).subscribe(()=>{let{maxScrollDistance:r,distance:o}=this._scrollHeader(e);(o===0||o>=r)&&this._stopInterval()}))}_scrollTo(e){if(this.disablePagination)return{maxScrollDistance:0,distance:0};let i=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(i,e)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:i,distance:this._scrollDistance}}static \u0275fac=function(i){return new(i||t)};static \u0275dir=A({type:t,inputs:{disablePagination:[2,"disablePagination","disablePagination",te],selectedIndex:[2,"selectedIndex","selectedIndex",Oi]},outputs:{selectFocusedIndex:"selectFocusedIndex",indexFocused:"indexFocused"}})}return t})(),lV=(()=>{class t extends sV{_items;_tabListContainer;_tabList;_tabListInner;_nextPaginator;_previousPaginator;_inkBar;ariaLabel;ariaLabelledby;disableRipple=!1;ngAfterContentInit(){this._inkBar=new yb(this._items),super.ngAfterContentInit()}_itemSelected(e){e.preventDefault()}static \u0275fac=(()=>{let e;return function(r){return(e||(e=qe(t)))(r||t)}})();static \u0275cmp=x({type:t,selectors:[["mat-tab-header"]],contentQueries:function(i,r,o){if(i&1&&Mt(o,iS,4),i&2){let a;O(a=N())&&(r._items=a)}},viewQuery:function(i,r){if(i&1&&Ce(BL,7)(jL,7)(HL,7)(UL,5)(zL,5),i&2){let o;O(o=N())&&(r._tabListContainer=o.first),O(o=N())&&(r._tabList=o.first),O(o=N())&&(r._tabListInner=o.first),O(o=N())&&(r._nextPaginator=o.first),O(o=N())&&(r._previousPaginator=o.first)}},hostAttrs:[1,"mat-mdc-tab-header"],hostVars:4,hostBindings:function(i,r){i&2&&L("mat-mdc-tab-header-pagination-controls-enabled",r._showPaginationControls)("mat-mdc-tab-header-rtl",r._getLayoutDirection()=="rtl")},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],disableRipple:[2,"disableRipple","disableRipple",te]},features:[_e],ngContentSelectors:Db,decls:13,vars:10,consts:[["previousPaginator",""],["tabListContainer",""],["tabList",""],["tabListInner",""],["nextPaginator",""],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-before",3,"click","mousedown","touchend","matRippleDisabled"],[1,"mat-mdc-tab-header-pagination-chevron"],[1,"mat-mdc-tab-label-container",3,"keydown"],["role","tablist",1,"mat-mdc-tab-list",3,"cdkObserveContent"],[1,"mat-mdc-tab-labels"],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-after",3,"mousedown","click","touchend","matRippleDisabled"]],template:function(i,r){i&1&&(Se(),m(0,"div",5,0),M("click",function(){return r._handlePaginatorClick("before")})("mousedown",function(a){return r._handlePaginatorPress("before",a)})("touchend",function(){return r._stopInterval()}),T(2,"div",6),f(),m(3,"div",7,1),M("keydown",function(a){return r._handleKeydown(a)}),m(5,"div",8,2),M("cdkObserveContent",function(){return r._onContentChanges()}),m(7,"div",9,3),ee(9),f()()(),m(10,"div",10,4),M("mousedown",function(a){return r._handlePaginatorPress("after",a)})("click",function(){return r._handlePaginatorClick("after")})("touchend",function(){return r._stopInterval()}),T(12,"div",6),f()),i&2&&(L("mat-mdc-tab-header-pagination-disabled",r._disableScrollBefore),R("matRippleDisabled",r._disableScrollBefore||r.disableRipple),p(3),L("_mat-animation-noopable",r._animationsDisabled),p(2),Z("aria-label",r.ariaLabel||null)("aria-labelledby",r.ariaLabelledby||null),p(5),L("mat-mdc-tab-header-pagination-disabled",r._disableScrollAfter),R("matRippleDisabled",r._disableScrollAfter||r.disableRipple))},dependencies:[wc,nf],styles:[`.mat-mdc-tab-header {
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
`],encapsulation:2})}return t})(),cV=new y("MAT_TABS_CONFIG"),eS=(()=>{class t extends mn{_host=c(Cb);_ngZone=c(V);_centeringSub=oe.EMPTY;_leavingSub=oe.EMPTY;constructor(){super()}ngOnInit(){super.ngOnInit(),this._centeringSub=this._host._beforeCentering.pipe(Je(this._host._isCenterPosition())).subscribe(e=>{this._host._content&&e&&!this.hasAttached()&&this._ngZone.run(()=>{Promise.resolve().then(),this.attach(this._host._content)})}),this._leavingSub=this._host._afterLeavingCenter.subscribe(()=>{this._host.preserveContent||this._ngZone.run(()=>this.detach())})}ngOnDestroy(){super.ngOnDestroy(),this._centeringSub.unsubscribe(),this._leavingSub.unsubscribe()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=A({type:t,selectors:[["","matTabBodyHost",""]],features:[_e]})}return t})(),Cb=(()=>{class t{_elementRef=c(B);_dir=c(nt,{optional:!0});_ngZone=c(V);_injector=c(G);_renderer=c(Te);_diAnimationsDisabled=je();_eventCleanups;_initialized=!1;_fallbackTimer;_positionIndex;_dirChangeSubscription=oe.EMPTY;_position;_previousPosition;_onCentering=new I;_beforeCentering=new I;_afterLeavingCenter=new I;_onCentered=new I(!0);_portalHost;_contentElement;_content;animationDuration="500ms";preserveContent=!1;set position(e){this._positionIndex=e,this._computePositionAnimationState()}constructor(){if(this._dir){let e=c(De);this._dirChangeSubscription=this._dir.change.subscribe(i=>{this._computePositionAnimationState(i),e.markForCheck()})}}ngOnInit(){this._bindTransitionEvents(),this._position==="center"&&(this._setActiveClass(!0),Ge(()=>this._onCentering.emit(this._elementRef.nativeElement.clientHeight),{injector:this._injector})),this._initialized=!0}ngOnDestroy(){clearTimeout(this._fallbackTimer),this._eventCleanups?.forEach(e=>e()),this._dirChangeSubscription.unsubscribe()}_bindTransitionEvents(){this._ngZone.runOutsideAngular(()=>{let e=this._elementRef.nativeElement,i=r=>{r.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.remove("mat-tab-body-animating"),r.type==="transitionend"&&this._transitionDone())};this._eventCleanups=[this._renderer.listen(e,"transitionstart",r=>{r.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.add("mat-tab-body-animating"),this._transitionStarted())}),this._renderer.listen(e,"transitionend",i),this._renderer.listen(e,"transitioncancel",i)]})}_transitionStarted(){clearTimeout(this._fallbackTimer);let e=this._position==="center";this._beforeCentering.emit(e),e&&this._onCentering.emit(this._elementRef.nativeElement.clientHeight)}_transitionDone(){this._position==="center"?this._onCentered.emit():this._previousPosition==="center"&&this._afterLeavingCenter.emit()}_setActiveClass(e){this._elementRef.nativeElement.classList.toggle("mat-mdc-tab-body-active",e)}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_isCenterPosition(){return this._positionIndex===0}_computePositionAnimationState(e=this._getLayoutDirection()){this._previousPosition=this._position,this._positionIndex<0?this._position=e=="ltr"?"left":"right":this._positionIndex>0?this._position=e=="ltr"?"right":"left":this._position="center",this._animationsDisabled()?this._simulateTransitionEvents():this._initialized&&(this._position==="center"||this._previousPosition==="center")&&(clearTimeout(this._fallbackTimer),this._fallbackTimer=this._ngZone.runOutsideAngular(()=>setTimeout(()=>this._simulateTransitionEvents(),100)))}_simulateTransitionEvents(){this._transitionStarted(),Ge(()=>this._transitionDone(),{injector:this._injector})}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0ms"||this.animationDuration==="0s"}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=x({type:t,selectors:[["mat-tab-body"]],viewQuery:function(i,r){if(i&1&&Ce(eS,5)($L,5),i&2){let o;O(o=N())&&(r._portalHost=o.first),O(o=N())&&(r._contentElement=o.first)}},hostAttrs:[1,"mat-mdc-tab-body"],hostVars:1,hostBindings:function(i,r){i&2&&Z("inert",r._position==="center"?null:"")},inputs:{_content:[0,"content","_content"],animationDuration:"animationDuration",preserveContent:"preserveContent",position:"position"},outputs:{_onCentering:"_onCentering",_beforeCentering:"_beforeCentering",_onCentered:"_onCentered"},decls:3,vars:6,consts:[["content",""],["cdkScrollable","",1,"mat-mdc-tab-body-content"],["matTabBodyHost",""]],template:function(i,r){i&1&&(m(0,"div",1,0),ct(2,WL,0,0,"ng-template",2),f()),i&2&&L("mat-tab-body-content-left",r._position==="left")("mat-tab-body-content-right",r._position==="right")("mat-tab-body-content-can-animate",r._position==="center"||r._previousPosition==="center")},dependencies:[eS,Hf],styles:[`.mat-mdc-tab-body {
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
`],encapsulation:2})}return t})(),Uf=(()=>{class t{_elementRef=c(B);_changeDetectorRef=c(De);_ngZone=c(V);_tabsSubscription=oe.EMPTY;_tabLabelSubscription=oe.EMPTY;_tabBodySubscription=oe.EMPTY;_diAnimationsDisabled=je();_allTabs;_tabBodies;_tabBodyWrapper;_tabHeader;_tabs=new tr;_indexToSelect=0;_lastFocusedTabIndex=null;_tabBodyWrapperHeight=0;color;get fitInkBarToContent(){return this._fitInkBarToContent}set fitInkBarToContent(e){this._fitInkBarToContent=e,this._changeDetectorRef.markForCheck()}_fitInkBarToContent=!1;stretchTabs=!0;alignTabs=null;dynamicHeight=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){this._indexToSelect=isNaN(e)?null:e}_selectedIndex=null;headerPosition="above";get animationDuration(){return this._animationDuration}set animationDuration(e){let i=e+"";this._animationDuration=/^\d+$/.test(i)?e+"ms":i}_animationDuration;get contentTabIndex(){return this._contentTabIndex}set contentTabIndex(e){this._contentTabIndex=isNaN(e)?null:e}_contentTabIndex=null;disablePagination=!1;disableRipple=!1;preserveContent=!1;get backgroundColor(){return this._backgroundColor}set backgroundColor(e){let i=this._elementRef.nativeElement.classList;i.remove("mat-tabs-with-background",`mat-background-${this.backgroundColor}`),e&&i.add("mat-tabs-with-background",`mat-background-${e}`),this._backgroundColor=e}_backgroundColor;ariaLabel;ariaLabelledby;selectedIndexChange=new I;focusChange=new I;animationDone=new I;selectedTabChange=new I(!0);_groupId;_isServer=!c(ue).isBrowser;constructor(){let e=c(cV,{optional:!0});this._groupId=c(Ke).getId("mat-tab-group-"),this.animationDuration=e&&e.animationDuration?e.animationDuration:"500ms",this.disablePagination=e&&e.disablePagination!=null?e.disablePagination:!1,this.dynamicHeight=e&&e.dynamicHeight!=null?e.dynamicHeight:!1,e?.contentTabIndex!=null&&(this.contentTabIndex=e.contentTabIndex),this.preserveContent=!!e?.preserveContent,this.fitInkBarToContent=e&&e.fitInkBarToContent!=null?e.fitInkBarToContent:!1,this.stretchTabs=e&&e.stretchTabs!=null?e.stretchTabs:!0,this.alignTabs=e&&e.alignTabs!=null?e.alignTabs:null}ngAfterContentChecked(){let e=this._indexToSelect=this._clampTabIndex(this._indexToSelect);if(this._selectedIndex!=e){let i=this._selectedIndex==null;if(!i){this.selectedTabChange.emit(this._createChangeEvent(e));let r=this._tabBodyWrapper.nativeElement;r.style.minHeight=r.clientHeight+"px"}Promise.resolve().then(()=>{this._tabs.forEach((r,o)=>r.isActive=o===e),i||(this.selectedIndexChange.emit(e),this._tabBodyWrapper.nativeElement.style.minHeight="")})}this._tabs.forEach((i,r)=>{i.position=r-e,this._selectedIndex!=null&&i.position==0&&!i.origin&&(i.origin=e-this._selectedIndex)}),this._selectedIndex!==e&&(this._selectedIndex=e,this._lastFocusedTabIndex=null,this._changeDetectorRef.markForCheck())}ngAfterContentInit(){this._subscribeToAllTabChanges(),this._subscribeToTabLabels(),this._tabsSubscription=this._tabs.changes.subscribe(()=>{let e=this._clampTabIndex(this._indexToSelect);if(e===this._selectedIndex){let i=this._tabs.toArray(),r;for(let o=0;o<i.length;o++)if(i[o].isActive){this._indexToSelect=this._selectedIndex=o,this._lastFocusedTabIndex=null,r=i[o];break}!r&&i[e]&&Promise.resolve().then(()=>{i[e].isActive=!0,this.selectedTabChange.emit(this._createChangeEvent(e))})}this._changeDetectorRef.markForCheck()})}ngAfterViewInit(){this._tabBodySubscription=this._tabBodies.changes.subscribe(()=>this._bodyCentered(!0))}_subscribeToAllTabChanges(){this._allTabs.changes.pipe(Je(this._allTabs)).subscribe(e=>{this._tabs.reset(e.filter(i=>i._closestTabGroup===this||!i._closestTabGroup)),this._tabs.notifyOnChanges()})}ngOnDestroy(){this._tabs.destroy(),this._tabsSubscription.unsubscribe(),this._tabLabelSubscription.unsubscribe(),this._tabBodySubscription.unsubscribe()}realignInkBar(){this._tabHeader&&this._tabHeader._alignInkBarToSelectedTab()}updatePagination(){this._tabHeader&&this._tabHeader.updatePagination()}focusTab(e){let i=this._tabHeader;i&&(i.focusIndex=e)}_focusChanged(e){this._lastFocusedTabIndex=e,this.focusChange.emit(this._createChangeEvent(e))}_createChangeEvent(e){let i=new wb;return i.index=e,this._tabs&&this._tabs.length&&(i.tab=this._tabs.toArray()[e]),i}_subscribeToTabLabels(){this._tabLabelSubscription&&this._tabLabelSubscription.unsubscribe(),this._tabLabelSubscription=Ot(...this._tabs.map(e=>e._stateChanges)).subscribe(()=>this._changeDetectorRef.markForCheck())}_clampTabIndex(e){return Math.min(this._tabs.length-1,Math.max(e||0,0))}_getTabLabelId(e,i){return e.id||`${this._groupId}-label-${i}`}_getTabContentId(e){return`${this._groupId}-content-${e}`}_setTabBodyWrapperHeight(e){if(!this.dynamicHeight||!this._tabBodyWrapperHeight){this._tabBodyWrapperHeight=e;return}let i=this._tabBodyWrapper.nativeElement;i.style.height=this._tabBodyWrapperHeight+"px",this._tabBodyWrapper.nativeElement.offsetHeight&&(i.style.height=e+"px")}_removeTabBodyWrapperHeight(){let e=this._tabBodyWrapper.nativeElement;this._tabBodyWrapperHeight=e.clientHeight,e.style.height="",this._ngZone.run(()=>this.animationDone.emit())}_handleClick(e,i,r){i.focusIndex=r,e.disabled||(this.selectedIndex=r)}_getTabIndex(e){let i=this._lastFocusedTabIndex??this.selectedIndex;return e===i?0:-1}_tabFocusChanged(e,i){e&&e!=="mouse"&&e!=="touch"&&(this._tabHeader.focusIndex=i)}_bodyCentered(e){e&&this._tabBodies?.forEach((i,r)=>i._setActiveClass(r===this._selectedIndex))}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0"||this.animationDuration==="0ms"}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=x({type:t,selectors:[["mat-tab-group"]],contentQueries:function(i,r,o){if(i&1&&Mt(o,Pc,5),i&2){let a;O(a=N())&&(r._allTabs=a)}},viewQuery:function(i,r){if(i&1&&Ce(GL,5)(qL,5)(Cb,5),i&2){let o;O(o=N())&&(r._tabBodyWrapper=o.first),O(o=N())&&(r._tabHeader=o.first),O(o=N())&&(r._tabBodies=o)}},hostAttrs:[1,"mat-mdc-tab-group"],hostVars:11,hostBindings:function(i,r){i&2&&(Z("mat-align-tabs",r.alignTabs),St("mat-"+(r.color||"primary")),ki("--mat-tab-animation-duration",r.animationDuration),L("mat-mdc-tab-group-dynamic-height",r.dynamicHeight)("mat-mdc-tab-group-inverted-header",r.headerPosition==="below")("mat-mdc-tab-group-stretch-tabs",r.stretchTabs))},inputs:{color:"color",fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",te],stretchTabs:[2,"mat-stretch-tabs","stretchTabs",te],alignTabs:[0,"mat-align-tabs","alignTabs"],dynamicHeight:[2,"dynamicHeight","dynamicHeight",te],selectedIndex:[2,"selectedIndex","selectedIndex",Oi],headerPosition:"headerPosition",animationDuration:"animationDuration",contentTabIndex:[2,"contentTabIndex","contentTabIndex",Oi],disablePagination:[2,"disablePagination","disablePagination",te],disableRipple:[2,"disableRipple","disableRipple",te],preserveContent:[2,"preserveContent","preserveContent",te],backgroundColor:"backgroundColor",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"]},outputs:{selectedIndexChange:"selectedIndexChange",focusChange:"focusChange",animationDone:"animationDone",selectedTabChange:"selectedTabChange"},exportAs:["matTabGroup"],features:[Be([{provide:nS,useExisting:t}])],ngContentSelectors:Db,decls:9,vars:8,consts:[["tabHeader",""],["tabBodyWrapper",""],["tabNode",""],[3,"indexFocused","selectFocusedIndex","selectedIndex","disableRipple","disablePagination","aria-label","aria-labelledby"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"id","mdc-tab--active","class","disabled","fitInkBarToContent"],[1,"mat-mdc-tab-body-wrapper"],["role","tabpanel",3,"id","class","content","position","animationDuration","preserveContent"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"click","cdkFocusChange","id","disabled","fitInkBarToContent"],[1,"mdc-tab__ripple"],["mat-ripple","",1,"mat-mdc-tab-ripple",3,"matRippleTrigger","matRippleDisabled"],[1,"mdc-tab__content"],[1,"mdc-tab__text-label"],[3,"cdkPortalOutlet"],["role","tabpanel",3,"_onCentered","_onCentering","_beforeCentering","id","content","position","animationDuration","preserveContent"]],template:function(i,r){i&1&&(Se(),m(0,"mat-tab-header",3,0),M("indexFocused",function(a){return r._focusChanged(a)})("selectFocusedIndex",function(a){return r.selectedIndex=a}),He(2,KL,8,17,"div",4,im),f(),j(4,XL,1,0),m(5,"div",5,1),He(7,JL,1,10,"mat-tab-body",6,im),f()),i&2&&(R("selectedIndex",r.selectedIndex||0)("disableRipple",r.disableRipple)("disablePagination",r.disablePagination),nm("aria-label",r.ariaLabel)("aria-labelledby",r.ariaLabelledby),p(2),Ue(r._tabs),p(2),H(r._isServer?4:-1),p(),L("_mat-animation-noopable",r._animationsDisabled()),p(2),Ue(r._tabs))},dependencies:[lV,iS,gc,wc,mn,Cb],styles:[`.mdc-tab {
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
`],encapsulation:2})}return t})(),wb=class{index;tab};var rS=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=$({type:t});static \u0275inj=z({imports:[ve]})}return t})();function dV(t,n){if(t&1&&(m(0,"div",15)(1,"mat-icon"),g(2,"error_outline"),f(),m(3,"span"),g(4),f()()),t&2){let e=D();p(4),ae(e.errorMessage())}}function uV(t,n){if(t&1&&(m(0,"div",15)(1,"mat-icon"),g(2,"error_outline"),f(),m(3,"span"),g(4),f()()),t&2){let e=D();p(4),ae(e.errorMessage())}}function mV(t,n){if(t&1&&(m(0,"div",24)(1,"mat-icon"),g(2,"check_circle_outline"),f(),m(3,"span"),g(4),f()()),t&2){let e=D();p(4),ae(e.successMessage())}}var zf=class t{email=Ae.required();password=Ae.required();name=Ae.required();lastName=Ae.required();errorMessage=Ae.required();successMessage=Ae.required();hide=E(!0);clickEvent(n){this.hide.set(!this.hide()),n.stopPropagation()}clearError(){this.errorMessage.set(""),this.successMessage.set("")}loginSubmitEvent=new I;submitLogin(){this.loginSubmitEvent.emit()}registerSubmitEvent=new I;submitRegister(){this.registerSubmitEvent.emit()}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=x({type:t,selectors:[["login-container"]],inputs:{email:[1,"email"],password:[1,"password"],name:[1,"name"],lastName:[1,"lastName"],errorMessage:[1,"errorMessage"],successMessage:[1,"successMessage"]},outputs:{email:"emailChange",password:"passwordChange",name:"nameChange",lastName:"lastNameChange",errorMessage:"errorMessageChange",successMessage:"successMessageChange",loginSubmitEvent:"loginSubmitEvent",registerSubmitEvent:"registerSubmitEvent"},decls:78,vars:17,consts:[["appearance","outlined",1,"login-card"],["mat-stretch-tabs","false","mat-align-tabs","center","dynamicHeight","","animationDuration","200ms",3,"selectedIndexChange"],["label","Logga in"],[1,"tab-content"],[1,"tab-header"],[1,"tab-icon-wrap"],[1,"tab-icon"],[1,"tab-title"],[1,"tab-subtitle"],[1,"form-fields"],["appearance","outline",1,"full-width"],["matPrefix","",1,"field-prefix-icon"],["matInput","","type","email","autocomplete","email",3,"ngModelChange","keydown.enter","ngModel"],["matInput","","autocomplete","current-password",3,"ngModelChange","keydown.enter","ngModel","type"],["matIconButton","","matSuffix","",3,"click"],["role","alert",1,"form-message","form-message--error"],["mat-flat-button","",1,"submit-button",3,"click"],["iconPositionEnd",""],["label","Registrera"],[1,"name-row"],["appearance","outline"],["matInput","","autocomplete","given-name",3,"ngModelChange","keydown.enter","ngModel"],["matInput","","autocomplete","family-name",3,"ngModelChange","keydown.enter","ngModel"],["matInput","","autocomplete","new-password",3,"ngModelChange","keydown.enter","ngModel","type"],["role","status",1,"form-message","form-message--success"]],template:function(e,i){e&1&&(m(0,"mat-card",0)(1,"mat-tab-group",1),M("selectedIndexChange",function(){return i.clearError()}),m(2,"mat-tab",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"mat-icon",6),g(7,"login"),f()(),m(8,"h2",7),g(9,"V\xE4lkommen tillbaka"),f(),m(10,"p",8),g(11,"Logga in p\xE5 "),m(12,"strong"),g(13,"K\xEEndGuard"),f()()(),m(14,"div",9)(15,"mat-form-field",10)(16,"mat-label"),g(17,"E-postadress"),f(),m(18,"mat-icon",11),g(19,"mail_outline"),f(),m(20,"input",12),Qe("ngModelChange",function(o){return Ee(i.email,o)||(i.email=o),o}),M("keydown.enter",function(){return i.submitLogin()}),f()(),m(21,"mat-form-field",10)(22,"mat-label"),g(23,"L\xF6senord"),f(),m(24,"mat-icon",11),g(25,"lock_outline"),f(),m(26,"input",13),Qe("ngModelChange",function(o){return Ee(i.password,o)||(i.password=o),o}),M("keydown.enter",function(){return i.submitLogin()}),f(),m(27,"button",14),M("click",function(o){return i.clickEvent(o)}),m(28,"mat-icon"),g(29),f()()()(),j(30,dV,5,1,"div",15),m(31,"button",16),M("click",function(){return i.submitLogin()}),g(32," Logga in "),m(33,"mat-icon",17),g(34,"arrow_forward"),f()()()(),m(35,"mat-tab",18)(36,"div",3)(37,"div",4)(38,"div",5)(39,"mat-icon",6),g(40,"person_add"),f()(),m(41,"h2",7),g(42,"Skapa konto"),f(),m(43,"p",8),g(44,"Kom ig\xE5ng med "),m(45,"strong"),g(46,"K\xEEndGuard"),f()()(),m(47,"div",9)(48,"div",19)(49,"mat-form-field",20)(50,"mat-label"),g(51,"F\xF6rnamn"),f(),m(52,"input",21),Qe("ngModelChange",function(o){return Ee(i.name,o)||(i.name=o),o}),M("keydown.enter",function(){return i.submitRegister()}),f()(),m(53,"mat-form-field",20)(54,"mat-label"),g(55,"Efternamn"),f(),m(56,"input",22),Qe("ngModelChange",function(o){return Ee(i.lastName,o)||(i.lastName=o),o}),M("keydown.enter",function(){return i.submitRegister()}),f()()(),m(57,"mat-form-field",10)(58,"mat-label"),g(59,"E-postadress"),f(),m(60,"mat-icon",11),g(61,"mail_outline"),f(),m(62,"input",12),Qe("ngModelChange",function(o){return Ee(i.email,o)||(i.email=o),o}),M("keydown.enter",function(){return i.submitRegister()}),f()(),m(63,"mat-form-field",10)(64,"mat-label"),g(65,"L\xF6senord"),f(),m(66,"mat-icon",11),g(67,"lock_outline"),f(),m(68,"input",23),Qe("ngModelChange",function(o){return Ee(i.password,o)||(i.password=o),o}),M("keydown.enter",function(){return i.submitRegister()}),f(),m(69,"button",14),M("click",function(o){return i.clickEvent(o)}),m(70,"mat-icon"),g(71),f()()()(),j(72,uV,5,1,"div",15),j(73,mV,5,1,"div",24),m(74,"button",16),M("click",function(){return i.submitRegister()}),g(75," Registrera konto "),m(76,"mat-icon",17),g(77,"arrow_forward"),f()()()()()()),e&2&&(p(20),Ye("ngModel",i.email),p(6),Ye("ngModel",i.password),R("type",i.hide()?"password":"text"),p(),Z("aria-label","Visa/d\xF6lj l\xF6senord")("aria-pressed",i.hide()),p(2),ae(i.hide()?"visibility_off":"visibility"),p(),H(i.errorMessage()!==""?30:-1),p(22),Ye("ngModel",i.name),p(4),Ye("ngModel",i.lastName),p(6),Ye("ngModel",i.email),p(6),Ye("ngModel",i.password),R("type",i.hide()?"password":"text"),p(),Z("aria-label","Visa/d\xF6lj l\xF6senord")("aria-pressed",i.hide()),p(2),ae(i.hide()?"visibility_off":"visibility"),p(),H(i.errorMessage()!==""?72:-1),p(),H(i.successMessage()!==""?73:-1))},dependencies:[Wr,un,Un,pr,kt,Tt,Hn,bf,yf,zn,Qt,ut,zt,ji,dn,Pt,bt,Uf,Pc],styles:["[_nghost-%COMP%]{width:100%;max-width:460px}.login-card[_ngcontent-%COMP%]{width:100%;border-radius:20px;box-shadow:var(--mat-sys-level2);overflow:hidden}.tab-content[_ngcontent-%COMP%]{padding:2rem 2rem 2.5rem;display:flex;flex-direction:column;gap:1.5rem}.tab-header[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;text-align:center;gap:.4rem;padding-top:.25rem}.tab-icon-wrap[_ngcontent-%COMP%]{width:56px;height:56px;border-radius:50%;background:var(--mat-sys-primary-container);display:flex;align-items:center;justify-content:center;margin-bottom:.5rem}.tab-icon[_ngcontent-%COMP%]{color:var(--mat-sys-on-primary-container);font-size:1.75rem;width:1.75rem;height:1.75rem}.tab-title[_ngcontent-%COMP%]{font:var(--mat-sys-headline-small);margin:0}.tab-subtitle[_ngcontent-%COMP%]{margin:0}.tab-subtitle[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:var(--mat-sys-primary);font-weight:700}.form-fields[_ngcontent-%COMP%]{display:flex;flex-direction:column}.full-width[_ngcontent-%COMP%]{width:100%}.name-row[_ngcontent-%COMP%]{display:flex;gap:.75rem}.field-prefix-icon[_ngcontent-%COMP%]{color:var(--mat-sys-on-surface-variant);font-size:1.1rem;width:1.1rem;height:1.1rem}.form-message[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.6rem;padding:.75rem 1rem;border-radius:10px;font:var(--mat-sys-body-small)}.form-message[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:1.15rem;width:1.15rem;height:1.15rem;flex-shrink:0}.form-message--error[_ngcontent-%COMP%]{background:var(--mat-sys-error-container);color:var(--mat-sys-on-error-container)}.form-message--success[_ngcontent-%COMP%]{background:var(--mat-sys-tertiary-container);color:var(--mat-sys-on-tertiary-container)}.submit-button[_ngcontent-%COMP%]{width:100%;height:48px;border-radius:12px}"]})};var at={apiUrl:"https://salad-dramatize-customary.ngrok-free.dev",wsUrl:"wss://salad-dramatize-customary.ngrok-free.dev"};var Ds=class t{baseUrl=`${at.apiUrl}/api/auth`;http=c(vt);login(n,e){let i={email:n,password:e};return this.http.post(`${this.baseUrl}/login`,i).pipe(st(r=>{sessionStorage.setItem("token",r.token),sessionStorage.setItem("UserId",r.id.toString()),sessionStorage.setItem("role",r.role)}))}register(n,e,i){let r={name:n,email:e,password:i};return this.http.post(`${this.baseUrl}/register`,r)}getRole(){return sessionStorage.getItem("role")}static \u0275fac=function(e){return new(e||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})};var $f=class t{email=E("");password=E("");name=E("");lastName=E("");errorMessage=E("");successMessage=E("");router=c(sn);authService=c(Ds);onLoginSubmit(){this.authService.login(this.email(),this.password()).subscribe({error:n=>{this.errorMessage.set(n.error.error)},next:n=>{switch(n.role){case"ADMIN":this.router.navigate(["/admin"]);break;case"TEACHER":this.router.navigate(["/app"]);break;default:this.router.navigate(["/"])}}})}onRegisterSubmit(){let n=this.name()+" "+this.lastName(),e=this.email().trim(),i=this.password();this.authService.register(n,e,i).subscribe({error:r=>{this.successMessage.set(""),this.errorMessage.set(r.error.error)},next:r=>{this.errorMessage.set(""),this.successMessage.set(r.message)}})}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=x({type:t,selectors:[["login-page"]],decls:32,vars:6,consts:[[1,"login-page-wrapper"],[1,"login-page-left-panel"],[1,"blob","blob--1"],[1,"blob","blob--2"],[1,"content"],["width","auto","height","120px","alt","KindGuard logo","src","Kindguardlogo.png"],[1,"headline"],[1,"body"],[1,"badge-divider"],[1,"badges"],[1,"badge"],[1,"login-page-form"],["id","login-page-banner"],["id","banner-logo","alt","KindGuard logo","src","Kindguardlogo.png"],[1,"blob","blob--3"],[1,"blob","blob--4"],[1,"login-page-container",3,"emailChange","passwordChange","nameChange","lastNameChange","errorMessageChange","successMessageChange","loginSubmitEvent","registerSubmitEvent","email","password","name","lastName","errorMessage","successMessage"]],template:function(e,i){e&1&&(m(0,"div",0)(1,"div",1),T(2,"div",2)(3,"div",3),m(4,"div",4),T(5,"img",5),m(6,"h1",6),g(7,"Skapa tillsammans,"),T(8,"br"),g(9,"helt utan gr\xE4nser."),f(),m(10,"p",7),g(11,"Gl\xF6m l\xE5sta filer och versionskaos. Se \xE4ndringar direkt n\xE4r de sker, s\xE5 att fokus hamnar p\xE5 l\xE4randet i st\xE4llet f\xF6r tekniken."),f(),T(12,"div",8),m(13,"div",9)(14,"span",10)(15,"mat-icon"),g(16,"groups"),f(),g(17," Kollaborativ journalskrivning "),f(),m(18,"span",10)(19,"mat-icon"),g(20,"history"),f(),g(21," Optimistisk versionshantering "),f(),m(22,"span",10)(23,"mat-icon"),g(24,"psychology_alt"),f(),g(25," Flexibelt l\xE4rande "),f()()()(),m(26,"div",11)(27,"div",12),T(28,"img",13)(29,"div",14)(30,"div",15),f(),m(31,"login-container",16),Qe("emailChange",function(o){return Ee(i.email,o)||(i.email=o),o})("passwordChange",function(o){return Ee(i.password,o)||(i.password=o),o})("nameChange",function(o){return Ee(i.name,o)||(i.name=o),o})("lastNameChange",function(o){return Ee(i.lastName,o)||(i.lastName=o),o})("errorMessageChange",function(o){return Ee(i.errorMessage,o)||(i.errorMessage=o),o})("successMessageChange",function(o){return Ee(i.successMessage,o)||(i.successMessage=o),o}),M("loginSubmitEvent",function(){return i.onLoginSubmit()})("registerSubmitEvent",function(){return i.onRegisterSubmit()}),f()()()),e&2&&(p(31),Ye("email",i.email)("password",i.password)("name",i.name)("lastName",i.lastName)("errorMessage",i.errorMessage)("successMessage",i.successMessage))},dependencies:[zf,Pt],styles:["[_nghost-%COMP%]{display:block;width:100%;height:100%}.login-page-wrapper[_ngcontent-%COMP%]{display:flex;width:100%;min-height:100vh}.login-page-left-panel[_ngcontent-%COMP%]{flex:1.1;background:var(--mat-sys-primary);display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden;padding:3rem}#login-page-banner[_ngcontent-%COMP%]{background:var(--mat-sys-primary);box-sizing:border-box;align-items:center;justify-content:center;position:fixed;padding:4.5rem;display:none;width:100%;top:0;left:0;height:7em;min-height:fit-content}#login-page-banner[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{filter:brightness(0) invert(1);opacity:.95;width:auto;min-height:5rem;max-height:8rem}@media(max-width:1050px){.login-page-left-panel[_ngcontent-%COMP%]{display:none}#login-page-banner[_ngcontent-%COMP%]{display:flex}}.blob[_ngcontent-%COMP%]{position:absolute;border-radius:50%;background:var(--mat-sys-on-primary);opacity:.06}.blob--1[_ngcontent-%COMP%]{width:480px;height:480px;bottom:-140px;right:-100px}.blob--2[_ngcontent-%COMP%]{width:260px;height:260px;top:-60px;left:-60px}.blob--3[_ngcontent-%COMP%]{width:260px;height:260px;right:0;bottom:0}.blob--4[_ngcontent-%COMP%]{width:130px;height:130px;left:0;top:0}.content[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start;gap:1.5rem}.content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{filter:brightness(0) invert(1);opacity:.95;margin-left:-11px}.headline[_ngcontent-%COMP%]{font:var(--mat-sys-display-small);color:var(--mat-sys-on-primary);margin:0;line-height:1.15}.body[_ngcontent-%COMP%]{font:var(--mat-sys-body-large);color:var(--mat-sys-on-primary);opacity:.82;margin:0;max-width:320px;line-height:1.6}.badge-divider[_ngcontent-%COMP%]{width:40px;height:3px;background:var(--mat-sys-on-primary);opacity:.35}.badges[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.6rem}.badge[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem;font:var(--mat-sys-label-large);color:var(--mat-sys-on-primary);opacity:.75}.badge[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:1.1rem;width:1.1rem;height:1.1rem}.login-page-form[_ngcontent-%COMP%]{flex:1;display:flex;justify-content:center;align-items:center;background:var(--mat-sys-surface);padding:2rem}"]})};var tn=(()=>{class t{get vertical(){return this._vertical}set vertical(e){this._vertical=Ft(e)}_vertical=!1;get inset(){return this._inset}set inset(e){this._inset=Ft(e)}_inset=!1;static \u0275fac=function(i){return new(i||t)};static \u0275cmp=x({type:t,selectors:[["mat-divider"]],hostAttrs:["role","separator",1,"mat-divider"],hostVars:7,hostBindings:function(i,r){i&2&&(Z("aria-orientation",r.vertical?"vertical":"horizontal"),L("mat-divider-vertical",r.vertical)("mat-divider-horizontal",!r.vertical)("mat-divider-inset",r.inset))},inputs:{vertical:"vertical",inset:"inset"},decls:0,vars:0,template:function(i,r){},styles:[`.mat-divider {
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
`],encapsulation:2,changeDetection:0})}return t})(),Ui=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=$({type:t});static \u0275inj=z({imports:[ve]})}return t})();var Yr=class t{url=`${at.apiUrl}/api/attendance`;attendanceSignals=new Map;attendanceChanges=new pn;http=c(vt);getAttendanceChanges=this.attendanceChanges.asObservable();getSignal(n,e){let i=`${n}_${e}`;return this.attendanceSignals.has(i)||this.attendanceSignals.set(i,E(null)),this.attendanceSignals.get(i)}setAttendance(n,e,i){let r={childId:n,date:e,status:i};return this.attendanceChanges.next(r),this.http.put(this.url,r)}static \u0275fac=function(e){return new(e||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})};function zi(){let t=new Date;return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`}var Lc=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new S;constructor(n=!1,e,i=!0,r){this._multiple=n,this._emitChanges=i,this.compareWith=r,e&&e.length&&(n?e.forEach(o=>this._markSelected(o)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...n){this._verifyValueAssignment(n),n.forEach(i=>this._markSelected(i));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}deselect(...n){this._verifyValueAssignment(n),n.forEach(i=>this._unmarkSelected(i));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}setSelection(...n){this._verifyValueAssignment(n);let e=this.selected,i=new Set(n.map(o=>this._getConcreteValue(o)));n.forEach(o=>this._markSelected(o)),e.filter(o=>!i.has(this._getConcreteValue(o,i))).forEach(o=>this._unmarkSelected(o));let r=this._hasQueuedChanges();return this._emitChangeEvent(),r}toggle(n){return this.isSelected(n)?this.deselect(n):this.select(n)}clear(n=!0){this._unmarkAll();let e=this._hasQueuedChanges();return n&&this._emitChangeEvent(),e}isSelected(n){return this._selection.has(this._getConcreteValue(n))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(n){this._multiple&&this.selected&&this._selected.sort(n)}isMultipleSelection(){return this._multiple}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(n){n=this._getConcreteValue(n),this.isSelected(n)||(this._multiple||this._unmarkAll(),this.isSelected(n)||this._selection.add(n),this._emitChanges&&this._selectedToEmit.push(n))}_unmarkSelected(n){n=this._getConcreteValue(n),this.isSelected(n)&&(this._selection.delete(n),this._emitChanges&&this._deselectedToEmit.push(n))}_unmarkAll(){this.isEmpty()||this._selection.forEach(n=>this._unmarkSelected(n))}_verifyValueAssignment(n){n.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(n,e){if(this.compareWith){e=e??this._selection;for(let i of e)if(this.compareWith(n,i))return i;return n}else return n}};var oS=hf();function Jo(t){return new Wf(t.get(ui),t.get(Y))}var Wf=class{_viewportRuler;_previousHTMLStyles={top:"",left:""};_previousScrollPosition;_isEnabled=!1;_document;constructor(n,e){this._viewportRuler=n,this._document=e}attach(){}enable(){if(this._canBeEnabled()){let n=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=n.style.left||"",this._previousHTMLStyles.top=n.style.top||"",n.style.left=dt(-this._previousScrollPosition.left),n.style.top=dt(-this._previousScrollPosition.top),n.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){let n=this._document.documentElement,e=this._document.body,i=n.style,r=e.style,o=i.scrollBehavior||"",a=r.scrollBehavior||"";this._isEnabled=!1,i.left=this._previousHTMLStyles.left,i.top=this._previousHTMLStyles.top,n.classList.remove("cdk-global-scrollblock"),oS&&(i.scrollBehavior=r.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),oS&&(i.scrollBehavior=o,r.scrollBehavior=a)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;let e=this._document.documentElement,i=this._viewportRuler.getViewportSize();return e.scrollHeight>i.height||e.scrollWidth>i.width}};function mS(t,n){return new Gf(t.get(qr),t.get(V),t.get(ui),n)}var Gf=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(n,e,i,r){this._scrollDispatcher=n,this._ngZone=e,this._viewportRuler=i,this._config=r}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(this._scrollSubscription)return;let n=this._scrollDispatcher.scrolled(0).pipe(be(e=>!e||!this._overlayRef.overlayElement.contains(e.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=n.subscribe(()=>{let e=this._viewportRuler.getViewportScrollPosition().top;Math.abs(e-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=n.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var Vc=class{enable(){}disable(){}attach(){}};function xb(t,n){return n.some(e=>{let i=t.bottom<e.top,r=t.top>e.bottom,o=t.right<e.left,a=t.left>e.right;return i||r||o||a})}function aS(t,n){return n.some(e=>{let i=t.top<e.top,r=t.bottom>e.bottom,o=t.left<e.left,a=t.right>e.right;return i||r||o||a})}function Qr(t,n){return new qf(t.get(qr),t.get(ui),t.get(V),n)}var qf=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(n,e,i,r){this._scrollDispatcher=n,this._viewportRuler=e,this._ngZone=i,this._config=r}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(!this._scrollSubscription){let n=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(n).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:i,height:r}=this._viewportRuler.getViewportSize();xb(e,[{width:i,height:r,bottom:r,right:i,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},fS=(()=>{class t{_injector=c(G);constructor(){}noop=()=>new Vc;close=e=>mS(this._injector,e);block=()=>Jo(this._injector);reposition=e=>Qr(this._injector,e);static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),$i=class{positionStrategy;scrollStrategy=new Vc;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(n){if(n){let e=Object.keys(n);for(let i of e)n[i]!==void 0&&(this[i]=n[i])}}};var Yf=class{connectionPair;scrollableViewProperties;constructor(n,e){this.connectionPair=n,this.scrollableViewProperties=e}};var hS=(()=>{class t{_attachedOverlays=[];_document=c(Y);_isAttached=!1;constructor(){}ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let i=this._attachedOverlays.indexOf(e);i>-1&&this._attachedOverlays.splice(i,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(e,i,r){return r.observers.length<1?!1:e.eventPredicate?e.eventPredicate(i):!0}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),pS=(()=>{class t extends hS{_ngZone=c(V);_renderer=c(gt).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=e=>{let i=this._attachedOverlays;for(let r=i.length-1;r>-1;r--){let o=i[r];if(this.canReceiveEvent(o,e,o._keydownEvents)){this._ngZone.run(()=>o._keydownEvents.next(e));break}}};static \u0275fac=(()=>{let e;return function(r){return(e||(e=qe(t)))(r||t)}})();static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),gS=(()=>{class t extends hS{_platform=c(ue);_ngZone=c(V);_renderer=c(gt).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let i=this._document.body,r={capture:!0},o=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[o.listen(i,"pointerdown",this._pointerDownListener,r),o.listen(i,"click",this._clickListener,r),o.listen(i,"auxclick",this._clickListener,r),o.listen(i,"contextmenu",this._clickListener,r)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=i.style.cursor,i.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=e=>{this._pointerDownEventTarget=Ut(e)};_clickListener=e=>{let i=Ut(e),r=e.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:i;this._pointerDownEventTarget=null;let o=this._attachedOverlays.slice();for(let a=o.length-1;a>-1;a--){let s=o[a],l=s._outsidePointerEvents;if(!(!s.hasAttached()||!this.canReceiveEvent(s,e,l))){if(sS(s.overlayElement,i)||sS(s.overlayElement,r))break;this._ngZone?this._ngZone.run(()=>l.next(e)):l.next(e)}}};static \u0275fac=(()=>{let e;return function(r){return(e||(e=qe(t)))(r||t)}})();static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function sS(t,n){let e=typeof ShadowRoot<"u"&&ShadowRoot,i=n;for(;i;){if(i===t)return!0;i=e&&i instanceof ShadowRoot?i.host:i.parentNode}return!1}var _S=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=x({type:t,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(i,r){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
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
`],encapsulation:2,changeDetection:0})}return t})(),Zf=(()=>{class t{_platform=c(ue);_containerElement;_document=c(Y);_styleLoader=c(Ze);constructor(){}ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e="cdk-overlay-container";if(this._platform.isBrowser||Xv()){let r=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let o=0;o<r.length;o++)r[o].remove()}let i=this._document.createElement("div");i.classList.add(e),Xv()?i.setAttribute("platform","test"):this._platform.isBrowser||i.setAttribute("platform","server"),this._document.body.appendChild(i),this._containerElement=i}_loadStyles(){this._styleLoader.load(_S)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Eb=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(n,e,i,r){this._renderer=e,this._ngZone=i,this.element=n.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=e.listen(this.element,"click",r)}detach(){this._ngZone.runOutsideAngular(()=>{let n=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(n,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),n.style.pointerEvents="none",n.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function Mb(t){return t&&t.nodeType===1}var xs=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new S;_attachments=new S;_detachments=new S;_positionStrategy;_scrollStrategy;_locationChanges=oe.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new S;_outsidePointerEvents=new S;_afterNextRenderRef;constructor(n,e,i,r,o,a,s,l,d,u=!1,h,_){this._portalOutlet=n,this._host=e,this._pane=i,this._config=r,this._ngZone=o,this._keyboardDispatcher=a,this._document=s,this._location=l,this._outsideClickDispatcher=d,this._animationsDisabled=u,this._injector=h,this._renderer=_,r.scrollStrategy&&(this._scrollStrategy=r.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=r.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(n){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(n);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=Ge(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof e?.onDestroy=="function"&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let n=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),n}dispose(){if(this._disposed)return;let n=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,n&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(n){n!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=n,this.hasAttached()&&(n.attach(this),this.updatePosition()))}updateSize(n){this._config=C(C({},this._config),n),this._updateElementSize()}setDirection(n){this._config=X(C({},this._config),{direction:n}),this._updateElementDirection()}addPanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!0)}removePanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!1)}getDirection(){let n=this._config.direction;return n?typeof n=="string"?n:n.value:"ltr"}updateScrollStrategy(n){n!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=n,this.hasAttached()&&(n.attach(this),n.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let n=this._pane.style;n.width=dt(this._config.width),n.height=dt(this._config.height),n.minWidth=dt(this._config.minWidth),n.minHeight=dt(this._config.minHeight),n.maxWidth=dt(this._config.maxWidth),n.maxHeight=dt(this._config.maxHeight)}_togglePointerEvents(n){this._pane.style.pointerEvents=n?"":"none"}_attachHost(){if(!this._host.parentElement){let n=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;Mb(n)?n.after(this._host):n?.type==="parent"?n.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let n="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new Eb(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(n))}):this._backdropRef.element.classList.add(n)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(n,e,i){let r=os(e||[]).filter(o=>!!o);r.length&&(i?n.classList.add(...r):n.classList.remove(...r))}_detachContentWhenEmpty(){let n=!1;try{this._detachContentAfterRenderRef=Ge(()=>{n=!0,this._detachContent()},{injector:this._injector})}catch(e){if(n)throw e;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let n=this._scrollStrategy;n?.disable(),n?.detach?.()}},lS="cdk-overlay-connected-position-bounding-box",fV=/([A-Za-z%]+)$/;function Ms(t,n){return new Bc(n,t.get(ui),t.get(Y),t.get(ue),t.get(Zf))}var Bc=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new S;_resizeSubscription=oe.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(n,e,i,r,o){this._viewportRuler=e,this._document=i,this._platform=r,this._overlayContainer=o,this.setOrigin(n)}attach(n){this._overlayRef&&this._overlayRef,this._validatePositions(),n.hostElement.classList.add(lS),this._overlayRef=n,this._boundingBox=n.hostElement,this._pane=n.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let n=this._originRect,e=this._overlayRect,i=this._viewportRect,r=this._containerRect,o=[],a;for(let s of this._preferredPositions){let l=this._getOriginPoint(n,r,s),d=this._getOverlayPoint(l,e,s),u=this._getOverlayFit(d,e,i,s);if(u.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(s,l);return}if(this._canFitWithFlexibleDimensions(u,d,i)){o.push({position:s,origin:l,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(l,s)});continue}(!a||a.overlayFit.visibleArea<u.visibleArea)&&(a={overlayFit:u,overlayPoint:d,originPoint:l,position:s,overlayRect:e})}if(o.length){let s=null,l=-1;for(let d of o){let u=d.boundingBoxRect.width*d.boundingBoxRect.height*(d.position.weight||1);u>l&&(l=u,s=d)}this._isPushed=!1,this._applyPosition(s.position,s.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(a.position,a.originPoint);return}this._applyPosition(a.position,a.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&Xo(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(lS),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let n=this._lastPosition;n?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(n,this._getOriginPoint(this._originRect,this._containerRect,n))):this.apply()}withScrollableContainers(n){return this._scrollables=n,this}withPositions(n){return this._preferredPositions=n,n.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(n){return this._viewportMargin=n,this}withFlexibleDimensions(n=!0){return this._hasFlexibleDimensions=n,this}withGrowAfterOpen(n=!0){return this._growAfterOpen=n,this}withPush(n=!0){return this._canPush=n,this}withLockedPosition(n=!0){return this._positionLocked=n,this}setOrigin(n){return this._origin=n,this}withDefaultOffsetX(n){return this._offsetX=n,this}withDefaultOffsetY(n){return this._offsetY=n,this}withTransformOriginOn(n){return this._transformOriginSelector=n,this}withPopoverLocation(n){return this._popoverLocation=n,this}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof B?this._origin.nativeElement:Mb(this._origin)?this._origin:null}_getOriginPoint(n,e,i){let r;if(i.originX=="center")r=n.left+n.width/2;else{let a=this._isRtl()?n.right:n.left,s=this._isRtl()?n.left:n.right;r=i.originX=="start"?a:s}e.left<0&&(r-=e.left);let o;return i.originY=="center"?o=n.top+n.height/2:o=i.originY=="top"?n.top:n.bottom,e.top<0&&(o-=e.top),{x:r,y:o}}_getOverlayPoint(n,e,i){let r;i.overlayX=="center"?r=-e.width/2:i.overlayX==="start"?r=this._isRtl()?-e.width:0:r=this._isRtl()?0:-e.width;let o;return i.overlayY=="center"?o=-e.height/2:o=i.overlayY=="top"?0:-e.height,{x:n.x+r,y:n.y+o}}_getOverlayFit(n,e,i,r){let o=dS(e),{x:a,y:s}=n,l=this._getOffset(r,"x"),d=this._getOffset(r,"y");l&&(a+=l),d&&(s+=d);let u=0-a,h=a+o.width-i.width,_=0-s,v=s+o.height-i.height,w=this._subtractOverflows(o.width,u,h),F=this._subtractOverflows(o.height,_,v),U=w*F;return{visibleArea:U,isCompletelyWithinViewport:o.width*o.height===U,fitsInViewportVertically:F===o.height,fitsInViewportHorizontally:w==o.width}}_canFitWithFlexibleDimensions(n,e,i){if(this._hasFlexibleDimensions){let r=i.bottom-e.y,o=i.right-e.x,a=cS(this._overlayRef.getConfig().minHeight),s=cS(this._overlayRef.getConfig().minWidth),l=n.fitsInViewportVertically||a!=null&&a<=r,d=n.fitsInViewportHorizontally||s!=null&&s<=o;return l&&d}return!1}_pushOverlayOnScreen(n,e,i){if(this._previousPushAmount&&this._positionLocked)return{x:n.x+this._previousPushAmount.x,y:n.y+this._previousPushAmount.y};let r=dS(e),o=this._viewportRect,a=Math.max(n.x+r.width-o.width,0),s=Math.max(n.y+r.height-o.height,0),l=Math.max(o.top-i.top-n.y,0),d=Math.max(o.left-i.left-n.x,0),u=0,h=0;return r.width<=o.width?u=d||-a:u=n.x<this._getViewportMarginStart()?o.left-i.left-n.x:0,r.height<=o.height?h=l||-s:h=n.y<this._getViewportMarginTop()?o.top-i.top-n.y:0,this._previousPushAmount={x:u,y:h},{x:n.x+u,y:n.y+h}}_applyPosition(n,e){if(this._setTransformOrigin(n),this._setOverlayElementStyles(e,n),this._setBoundingBoxStyles(e,n),n.panelClass&&this._addPanelClasses(n.panelClass),this._positionChanges.observers.length){let i=this._getScrollVisibility();if(n!==this._lastPosition||!this._lastScrollVisibility||!hV(this._lastScrollVisibility,i)){let r=new Yf(n,i);this._positionChanges.next(r)}this._lastScrollVisibility=i}this._lastPosition=n,this._isInitialRender=!1}_setTransformOrigin(n){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),i,r=n.overlayY;n.overlayX==="center"?i="center":this._isRtl()?i=n.overlayX==="start"?"right":"left":i=n.overlayX==="start"?"left":"right";for(let o=0;o<e.length;o++)e[o].style.transformOrigin=`${i} ${r}`}_calculateBoundingBoxRect(n,e){let i=this._viewportRect,r=this._isRtl(),o,a,s;if(e.overlayY==="top")a=n.y,o=i.height-a+this._getViewportMarginBottom();else if(e.overlayY==="bottom")s=i.height-n.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),o=i.height-s+this._getViewportMarginTop();else{let v=Math.min(i.bottom-n.y+i.top,n.y),w=this._lastBoundingBoxSize.height;o=v*2,a=n.y-v,o>w&&!this._isInitialRender&&!this._growAfterOpen&&(a=n.y-w/2)}let l=e.overlayX==="start"&&!r||e.overlayX==="end"&&r,d=e.overlayX==="end"&&!r||e.overlayX==="start"&&r,u,h,_;if(d)_=i.width-n.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),u=n.x-this._getViewportMarginStart();else if(l)h=n.x,u=i.right-n.x-this._getViewportMarginEnd();else{let v=Math.min(i.right-n.x+i.left,n.x),w=this._lastBoundingBoxSize.width;u=v*2,h=n.x-v,u>w&&!this._isInitialRender&&!this._growAfterOpen&&(h=n.x-w/2)}return{top:a,left:h,bottom:s,right:_,width:u,height:o}}_setBoundingBoxStyles(n,e){let i=this._calculateBoundingBoxRect(n,e);!this._isInitialRender&&!this._growAfterOpen&&(i.height=Math.min(i.height,this._lastBoundingBoxSize.height),i.width=Math.min(i.width,this._lastBoundingBoxSize.width));let r={};if(this._hasExactPosition())r.top=r.left="0",r.bottom=r.right="auto",r.maxHeight=r.maxWidth="",r.width=r.height="100%";else{let o=this._overlayRef.getConfig().maxHeight,a=this._overlayRef.getConfig().maxWidth;r.width=dt(i.width),r.height=dt(i.height),r.top=dt(i.top)||"auto",r.bottom=dt(i.bottom)||"auto",r.left=dt(i.left)||"auto",r.right=dt(i.right)||"auto",e.overlayX==="center"?r.alignItems="center":r.alignItems=e.overlayX==="end"?"flex-end":"flex-start",e.overlayY==="center"?r.justifyContent="center":r.justifyContent=e.overlayY==="bottom"?"flex-end":"flex-start",o&&(r.maxHeight=dt(o)),a&&(r.maxWidth=dt(a))}this._lastBoundingBoxSize=i,Xo(this._boundingBox.style,r)}_resetBoundingBoxStyles(){Xo(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){Xo(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(n,e){let i={},r=this._hasExactPosition(),o=this._hasFlexibleDimensions,a=this._overlayRef.getConfig();if(r){let u=this._viewportRuler.getViewportScrollPosition();Xo(i,this._getExactOverlayY(e,n,u)),Xo(i,this._getExactOverlayX(e,n,u))}else i.position="static";let s="",l=this._getOffset(e,"x"),d=this._getOffset(e,"y");l&&(s+=`translateX(${l}px) `),d&&(s+=`translateY(${d}px)`),i.transform=s.trim(),a.maxHeight&&(r?i.maxHeight=dt(a.maxHeight):o&&(i.maxHeight="")),a.maxWidth&&(r?i.maxWidth=dt(a.maxWidth):o&&(i.maxWidth="")),Xo(this._pane.style,i)}_getExactOverlayY(n,e,i){let r={top:"",bottom:""},o=this._getOverlayPoint(e,this._overlayRect,n);if(this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,i)),n.overlayY==="bottom"){let a=this._document.documentElement.clientHeight;r.bottom=`${a-(o.y+this._overlayRect.height)}px`}else r.top=dt(o.y);return r}_getExactOverlayX(n,e,i){let r={left:"",right:""},o=this._getOverlayPoint(e,this._overlayRect,n);this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,i));let a;if(this._isRtl()?a=n.overlayX==="end"?"left":"right":a=n.overlayX==="end"?"right":"left",a==="right"){let s=this._document.documentElement.clientWidth;r.right=`${s-(o.x+this._overlayRect.width)}px`}else r.left=dt(o.x);return r}_getScrollVisibility(){let n=this._getOriginRect(),e=this._pane.getBoundingClientRect(),i=this._scrollables.map(r=>r.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:aS(n,i),isOriginOutsideView:xb(n,i),isOverlayClipped:aS(e,i),isOverlayOutsideView:xb(e,i)}}_subtractOverflows(n,...e){return e.reduce((i,r)=>i-Math.max(r,0),n)}_getNarrowedViewportRect(){let n=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,i=this._viewportRuler.getViewportScrollPosition();return{top:i.top+this._getViewportMarginTop(),left:i.left+this._getViewportMarginStart(),right:i.left+n-this._getViewportMarginEnd(),bottom:i.top+e-this._getViewportMarginBottom(),width:n-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:e-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(n,e){return e==="x"?n.offsetX==null?this._offsetX:n.offsetX:n.offsetY==null?this._offsetY:n.offsetY}_validatePositions(){}_addPanelClasses(n){this._pane&&os(n).forEach(e=>{e!==""&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(n=>{this._pane.classList.remove(n)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let n=this._origin;if(n instanceof B)return n.nativeElement.getBoundingClientRect();if(n instanceof Element)return n.getBoundingClientRect();let e=n.width||0,i=n.height||0;return{top:n.y,bottom:n.y+i,left:n.x,right:n.x+e,height:i,width:e}}_getContainerRect(){let n=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",e=this._overlayContainer.getContainerElement();n&&(e.style.display="block");let i=e.getBoundingClientRect();return n&&(e.style.display=""),i}};function Xo(t,n){for(let e in n)n.hasOwnProperty(e)&&(t[e]=n[e]);return t}function cS(t){if(typeof t!="number"&&t!=null){let[n,e]=t.split(fV);return!e||e==="px"?parseFloat(n):null}return t||null}function dS(t){return{top:Math.floor(t.top),right:Math.floor(t.right),bottom:Math.floor(t.bottom),left:Math.floor(t.left),width:Math.floor(t.width),height:Math.floor(t.height)}}function hV(t,n){return t===n?!0:t.isOriginClipped===n.isOriginClipped&&t.isOriginOutsideView===n.isOriginOutsideView&&t.isOverlayClipped===n.isOverlayClipped&&t.isOverlayOutsideView===n.isOverlayOutsideView}var uS="cdk-global-overlay-wrapper";function vr(t){return new Qf}var Qf=class{_overlayRef;_cssPosition="static";_topOffset="";_bottomOffset="";_alignItems="";_xPosition="";_xOffset="";_width="";_height="";_isDisposed=!1;attach(n){let e=n.getConfig();this._overlayRef=n,this._width&&!e.width&&n.updateSize({width:this._width}),this._height&&!e.height&&n.updateSize({height:this._height}),n.hostElement.classList.add(uS),this._isDisposed=!1}top(n=""){return this._bottomOffset="",this._topOffset=n,this._alignItems="flex-start",this}left(n=""){return this._xOffset=n,this._xPosition="left",this}bottom(n=""){return this._topOffset="",this._bottomOffset=n,this._alignItems="flex-end",this}right(n=""){return this._xOffset=n,this._xPosition="right",this}start(n=""){return this._xOffset=n,this._xPosition="start",this}end(n=""){return this._xOffset=n,this._xPosition="end",this}width(n=""){return this._overlayRef?this._overlayRef.updateSize({width:n}):this._width=n,this}height(n=""){return this._overlayRef?this._overlayRef.updateSize({height:n}):this._height=n,this}centerHorizontally(n=""){return this.left(n),this._xPosition="center",this}centerVertically(n=""){return this.top(n),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let n=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,i=this._overlayRef.getConfig(),{width:r,height:o,maxWidth:a,maxHeight:s}=i,l=(r==="100%"||r==="100vw")&&(!a||a==="100%"||a==="100vw"),d=(o==="100%"||o==="100vh")&&(!s||s==="100%"||s==="100vh"),u=this._xPosition,h=this._xOffset,_=this._overlayRef.getConfig().direction==="rtl",v="",w="",F="";l?F="flex-start":u==="center"?(F="center",_?w=h:v=h):_?u==="left"||u==="end"?(F="flex-end",v=h):(u==="right"||u==="start")&&(F="flex-start",w=h):u==="left"||u==="start"?(F="flex-start",v=h):(u==="right"||u==="end")&&(F="flex-end",w=h),n.position=this._cssPosition,n.marginLeft=l?"0":v,n.marginTop=d?"0":this._topOffset,n.marginBottom=this._bottomOffset,n.marginRight=l?"0":w,e.justifyContent=F,e.alignItems=d?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let n=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,i=e.style;e.classList.remove(uS),i.justifyContent=i.alignItems=n.marginTop=n.marginBottom=n.marginLeft=n.marginRight=n.position="",this._overlayRef=null,this._isDisposed=!0}},vS=(()=>{class t{_injector=c(G);constructor(){}global(){return vr()}flexibleConnectedTo(e){return Ms(this._injector,e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),jc=new y("OVERLAY_DEFAULT_CONFIG");function Wi(t,n){t.get(Ze).load(_S);let e=t.get(Zf),i=t.get(Y),r=t.get(Ke),o=t.get(wn),a=t.get(nt),s=t.get(Te,null,{optional:!0})||t.get(gt).createRenderer(null,null),l=new $i(n),d=t.get(jc,null,{optional:!0})?.usePopover??!0;l.direction=l.direction||a.value,"showPopover"in i.body?l.usePopover=n?.usePopover??d:l.usePopover=!1;let u=i.createElement("div"),h=i.createElement("div");u.id=r.getId("cdk-overlay-"),u.classList.add("cdk-overlay-pane"),h.appendChild(u),l.usePopover&&(h.setAttribute("popover","manual"),h.classList.add("cdk-overlay-popover"));let _=l.usePopover?l.positionStrategy?.getPopoverInsertionPoint?.():null;return Mb(_)?_.after(h):_?.type==="parent"?_.element.appendChild(h):e.getContainerElement().appendChild(h),new xs(new jf(u,o,t),h,u,l,t.get(V),t.get(pS),i,t.get(Ni),t.get(gS),n?.disableAnimations??t.get(Ml,null,{optional:!0})==="NoopAnimations",t.get(Ne),s)}var bS=(()=>{class t{scrollStrategies=c(fS);_positionBuilder=c(vS);_injector=c(G);constructor(){}create(e){return Wi(this._injector,e)}position(){return this._positionBuilder}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),pV=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],gV=new y("cdk-connected-overlay-scroll-strategy",{providedIn:"root",factory:()=>{let t=c(G);return()=>Qr(t)}}),Es=(()=>{class t{elementRef=c(B);constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275dir=A({type:t,selectors:[["","cdk-overlay-origin",""],["","overlay-origin",""],["","cdkOverlayOrigin",""]],exportAs:["cdkOverlayOrigin"]})}return t})(),yS=new y("cdk-connected-overlay-default-config"),Kf=(()=>{class t{_dir=c(nt,{optional:!0});_injector=c(G);_overlayRef;_templatePortal;_backdropSubscription=oe.EMPTY;_attachSubscription=oe.EMPTY;_detachSubscription=oe.EMPTY;_positionSubscription=oe.EMPTY;_offsetX;_offsetY;_position;_scrollStrategyFactory=c(gV);_ngZone=c(V);origin;positions;positionStrategy;get offsetX(){return this._offsetX}set offsetX(e){this._offsetX=e,this._position&&this._updatePositionStrategy(this._position)}get offsetY(){return this._offsetY}set offsetY(e){this._offsetY=e,this._position&&this._updatePositionStrategy(this._position)}width;height;minWidth;minHeight;backdropClass;panelClass;viewportMargin=0;scrollStrategy;open=!1;disableClose=!1;transformOriginSelector;hasBackdrop=!1;lockPosition=!1;flexibleDimensions=!1;growAfterOpen=!1;push=!1;disposeOnNavigation=!1;usePopover;matchWidth=!1;set _config(e){typeof e!="string"&&this._assignConfig(e)}backdropClick=new I;positionChange=new I;attach=new I;detach=new I;overlayKeydown=new I;overlayOutsideClick=new I;constructor(){let e=c(pt),i=c(Et),r=c(yS,{optional:!0}),o=c(jc,{optional:!0});this.usePopover=o?.usePopover===!1?null:"global",this._templatePortal=new Sn(e,i),this.scrollStrategy=this._scrollStrategyFactory(),r&&this._assignConfig(r)}get overlayRef(){return this._overlayRef}get dir(){return this._dir?this._dir.value:"ltr"}ngOnDestroy(){this._attachSubscription.unsubscribe(),this._detachSubscription.unsubscribe(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this._overlayRef?.dispose()}ngOnChanges(e){this._position&&(this._updatePositionStrategy(this._position),this._overlayRef?.updateSize({width:this._getWidth(),minWidth:this.minWidth,height:this.height,minHeight:this.minHeight}),e.origin&&this.open&&this._position.apply()),e.open&&(this.open?this.attachOverlay():this.detachOverlay())}_createOverlay(){(!this.positions||!this.positions.length)&&(this.positions=pV);let e=this._overlayRef=Wi(this._injector,this._buildConfig());this._attachSubscription=e.attachments().subscribe(()=>this.attach.emit()),this._detachSubscription=e.detachments().subscribe(()=>this.detach.emit()),e.keydownEvents().subscribe(i=>{this.overlayKeydown.next(i),i.keyCode===27&&!this.disableClose&&!yt(i)&&(i.preventDefault(),this.detachOverlay())}),this._overlayRef.outsidePointerEvents().subscribe(i=>{let r=this._getOriginElement(),o=Ut(i);(!r||r!==o&&!r.contains(o))&&this.overlayOutsideClick.next(i)})}_buildConfig(){let e=this._position=this.positionStrategy||this._createPositionStrategy(),i=new $i({direction:this._dir||"ltr",positionStrategy:e,scrollStrategy:this.scrollStrategy,hasBackdrop:this.hasBackdrop,disposeOnNavigation:this.disposeOnNavigation,usePopover:!!this.usePopover});return(this.height||this.height===0)&&(i.height=this.height),(this.minWidth||this.minWidth===0)&&(i.minWidth=this.minWidth),(this.minHeight||this.minHeight===0)&&(i.minHeight=this.minHeight),this.backdropClass&&(i.backdropClass=this.backdropClass),this.panelClass&&(i.panelClass=this.panelClass),i}_updatePositionStrategy(e){let i=this.positions.map(r=>({originX:r.originX,originY:r.originY,overlayX:r.overlayX,overlayY:r.overlayY,offsetX:r.offsetX||this.offsetX,offsetY:r.offsetY||this.offsetY,panelClass:r.panelClass||void 0}));return e.setOrigin(this._getOrigin()).withPositions(i).withFlexibleDimensions(this.flexibleDimensions).withPush(this.push).withGrowAfterOpen(this.growAfterOpen).withViewportMargin(this.viewportMargin).withLockedPosition(this.lockPosition).withTransformOriginOn(this.transformOriginSelector).withPopoverLocation(this.usePopover===null?"global":this.usePopover)}_createPositionStrategy(){let e=Ms(this._injector,this._getOrigin());return this._updatePositionStrategy(e),e}_getOrigin(){return this.origin instanceof Es?this.origin.elementRef:this.origin}_getOriginElement(){return this.origin instanceof Es?this.origin.elementRef.nativeElement:this.origin instanceof B?this.origin.nativeElement:typeof Element<"u"&&this.origin instanceof Element?this.origin:null}_getWidth(){return this.width?this.width:this.matchWidth?this._getOriginElement()?.getBoundingClientRect?.().width:void 0}attachOverlay(){this._overlayRef||this._createOverlay();let e=this._overlayRef;e.getConfig().hasBackdrop=this.hasBackdrop,e.updateSize({width:this._getWidth()}),e.hasAttached()||e.attach(this._templatePortal),this.hasBackdrop?this._backdropSubscription=e.backdropClick().subscribe(i=>this.backdropClick.emit(i)):this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.positionChange.observers.length>0&&(this._positionSubscription=this._position.positionChanges.pipe(Qh(()=>this.positionChange.observers.length>0)).subscribe(i=>{this._ngZone.run(()=>this.positionChange.emit(i)),this.positionChange.observers.length===0&&this._positionSubscription.unsubscribe()})),this.open=!0}detachOverlay(){this._overlayRef?.detach(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.open=!1}_assignConfig(e){this.origin=e.origin??this.origin,this.positions=e.positions??this.positions,this.positionStrategy=e.positionStrategy??this.positionStrategy,this.offsetX=e.offsetX??this.offsetX,this.offsetY=e.offsetY??this.offsetY,this.width=e.width??this.width,this.height=e.height??this.height,this.minWidth=e.minWidth??this.minWidth,this.minHeight=e.minHeight??this.minHeight,this.backdropClass=e.backdropClass??this.backdropClass,this.panelClass=e.panelClass??this.panelClass,this.viewportMargin=e.viewportMargin??this.viewportMargin,this.scrollStrategy=e.scrollStrategy??this.scrollStrategy,this.disableClose=e.disableClose??this.disableClose,this.transformOriginSelector=e.transformOriginSelector??this.transformOriginSelector,this.hasBackdrop=e.hasBackdrop??this.hasBackdrop,this.lockPosition=e.lockPosition??this.lockPosition,this.flexibleDimensions=e.flexibleDimensions??this.flexibleDimensions,this.growAfterOpen=e.growAfterOpen??this.growAfterOpen,this.push=e.push??this.push,this.disposeOnNavigation=e.disposeOnNavigation??this.disposeOnNavigation,this.usePopover=e.usePopover??this.usePopover,this.matchWidth=e.matchWidth??this.matchWidth}static \u0275fac=function(i){return new(i||t)};static \u0275dir=A({type:t,selectors:[["","cdk-connected-overlay",""],["","connected-overlay",""],["","cdkConnectedOverlay",""]],inputs:{origin:[0,"cdkConnectedOverlayOrigin","origin"],positions:[0,"cdkConnectedOverlayPositions","positions"],positionStrategy:[0,"cdkConnectedOverlayPositionStrategy","positionStrategy"],offsetX:[0,"cdkConnectedOverlayOffsetX","offsetX"],offsetY:[0,"cdkConnectedOverlayOffsetY","offsetY"],width:[0,"cdkConnectedOverlayWidth","width"],height:[0,"cdkConnectedOverlayHeight","height"],minWidth:[0,"cdkConnectedOverlayMinWidth","minWidth"],minHeight:[0,"cdkConnectedOverlayMinHeight","minHeight"],backdropClass:[0,"cdkConnectedOverlayBackdropClass","backdropClass"],panelClass:[0,"cdkConnectedOverlayPanelClass","panelClass"],viewportMargin:[0,"cdkConnectedOverlayViewportMargin","viewportMargin"],scrollStrategy:[0,"cdkConnectedOverlayScrollStrategy","scrollStrategy"],open:[0,"cdkConnectedOverlayOpen","open"],disableClose:[0,"cdkConnectedOverlayDisableClose","disableClose"],transformOriginSelector:[0,"cdkConnectedOverlayTransformOriginOn","transformOriginSelector"],hasBackdrop:[2,"cdkConnectedOverlayHasBackdrop","hasBackdrop",te],lockPosition:[2,"cdkConnectedOverlayLockPosition","lockPosition",te],flexibleDimensions:[2,"cdkConnectedOverlayFlexibleDimensions","flexibleDimensions",te],growAfterOpen:[2,"cdkConnectedOverlayGrowAfterOpen","growAfterOpen",te],push:[2,"cdkConnectedOverlayPush","push",te],disposeOnNavigation:[2,"cdkConnectedOverlayDisposeOnNavigation","disposeOnNavigation",te],usePopover:[0,"cdkConnectedOverlayUsePopover","usePopover"],matchWidth:[2,"cdkConnectedOverlayMatchWidth","matchWidth",te],_config:[0,"cdkConnectedOverlay","_config"]},outputs:{backdropClick:"backdropClick",positionChange:"positionChange",attach:"attach",detach:"detach",overlayKeydown:"overlayKeydown",overlayOutsideClick:"overlayOutsideClick"},exportAs:["cdkConnectedOverlay"],features:[Pe]})}return t})(),Wn=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=$({type:t});static \u0275inj=z({providers:[bS],imports:[ve,Hi,vb,vb]})}return t})();var CS=(()=>{class t{_animationsDisabled=je();state="unchecked";disabled=!1;appearance="full";constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=x({type:t,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(i,r){i&2&&L("mat-pseudo-checkbox-indeterminate",r.state==="indeterminate")("mat-pseudo-checkbox-checked",r.state==="checked")("mat-pseudo-checkbox-disabled",r.disabled)("mat-pseudo-checkbox-minimal",r.appearance==="minimal")("mat-pseudo-checkbox-full",r.appearance==="full")("_mat-animation-noopable",r._animationsDisabled)},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},decls:0,vars:0,template:function(i,r){},styles:[`.mat-pseudo-checkbox {
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
`],encapsulation:2,changeDetection:0})}return t})();var _V=["text"],vV=[[["mat-icon"]],"*"],bV=["mat-icon","*"];function yV(t,n){if(t&1&&T(0,"mat-pseudo-checkbox",1),t&2){let e=D();R("disabled",e.disabled)("state",e.selected?"checked":"unchecked")}}function CV(t,n){if(t&1&&T(0,"mat-pseudo-checkbox",3),t&2){let e=D();R("disabled",e.disabled)}}function wV(t,n){if(t&1&&(m(0,"span",4),g(1),f()),t&2){let e=D();p(),fe("(",e.group.label,")")}}var Ib=new y("MAT_OPTION_PARENT_COMPONENT"),Tb=new y("MatOptgroup");var Sb=class{source;isUserInput;constructor(n,e=!1){this.source=n,this.isUserInput=e}},Gn=(()=>{class t{_element=c(B);_changeDetectorRef=c(De);_parent=c(Ib,{optional:!0});group=c(Tb,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue="";get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=c(Ke).getId("mat-option-");get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=E(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new I;_text;_stateChanges=new S;constructor(){let e=c(Ze);e.load(Bi),e.load(Vi),this._signalDisableRipple=!!this._parent&&Si(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||"").trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,i){let r=this._getHostElement();typeof r.focus=="function"&&r.focus(i)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!yt(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new Sb(this,e))}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=x({type:t,selectors:[["mat-option"]],viewQuery:function(i,r){if(i&1&&Ce(_V,7),i&2){let o;O(o=N())&&(r._text=o.first)}},hostAttrs:["role","option",1,"mat-mdc-option","mdc-list-item"],hostVars:11,hostBindings:function(i,r){i&1&&M("click",function(){return r._selectViaInteraction()})("keydown",function(a){return r._handleKeydown(a)}),i&2&&(qt("id",r.id),Z("aria-selected",r.selected)("aria-disabled",r.disabled.toString()),L("mdc-list-item--selected",r.selected)("mat-mdc-option-multiple",r.multiple)("mat-mdc-option-active",r.active)("mdc-list-item--disabled",r.disabled))},inputs:{value:"value",id:"id",disabled:[2,"disabled","disabled",te]},outputs:{onSelectionChange:"onSelectionChange"},exportAs:["matOption"],ngContentSelectors:bV,decls:8,vars:5,consts:[["text",""],["aria-hidden","true",1,"mat-mdc-option-pseudo-checkbox",3,"disabled","state"],[1,"mdc-list-item__primary-text"],["state","checked","aria-hidden","true","appearance","minimal",1,"mat-mdc-option-pseudo-checkbox",3,"disabled"],[1,"cdk-visually-hidden"],["aria-hidden","true","mat-ripple","",1,"mat-mdc-option-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"]],template:function(i,r){i&1&&(Se(vV),j(0,yV,1,2,"mat-pseudo-checkbox",1),ee(1),m(2,"span",2,0),ee(4,1),f(),j(5,CV,1,1,"mat-pseudo-checkbox",3),j(6,wV,2,1,"span",4),T(7,"div",5)),i&2&&(H(r.multiple?0:-1),p(5),H(!r.multiple&&r.selected&&!r.hideSingleSelectionIndicator?5:-1),p(),H(r.group&&r.group._inert?6:-1),p(),R("matRippleTrigger",r._getHostElement())("matRippleDisabled",r.disabled||r.disableRipple))},dependencies:[CS,wc],styles:[`.mat-mdc-option {
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
`],encapsulation:2,changeDetection:0})}return t})();function wS(t,n,e){if(e.length){let i=n.toArray(),r=e.toArray(),o=0;for(let a=0;a<t+1;a++)i[a].group&&i[a].group===r[o]&&o++;return o}return 0}function DS(t,n,e,i){return t<e?t:t+n>e+i?Math.max(0,t-i+n):e}var Xf=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=$({type:t});static \u0275inj=z({imports:[ve]})}return t})();var Ss=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=$({type:t});static \u0275inj=z({imports:[hs,Xf,Gn,ve]})}return t})();var DV=["trigger"],xV=["panel"],EV=[[["mat-select-trigger"]],"*"],MV=["mat-select-trigger","*"];function SV(t,n){if(t&1&&(m(0,"span",4),g(1),f()),t&2){let e=D();p(),ae(e.placeholder)}}function IV(t,n){t&1&&ee(0)}function TV(t,n){if(t&1&&(m(0,"span",11),g(1),f()),t&2){let e=D(2);p(),ae(e.triggerValue)}}function kV(t,n){if(t&1&&(m(0,"span",5),j(1,IV,1,0)(2,TV,2,1,"span",11),f()),t&2){let e=D();p(),H(e.customTrigger?1:2)}}function AV(t,n){if(t&1){let e=Le();m(0,"div",12,1),M("keydown",function(r){ie(e);let o=D();return re(o._handleKeydown(r))}),ee(2,1),f()}if(t&2){let e=D();St(e.panelClass),L("mat-select-panel-animations-enabled",!e._animationsDisabled)("mat-primary",(e._parentFormField==null?null:e._parentFormField.color)==="primary")("mat-accent",(e._parentFormField==null?null:e._parentFormField.color)==="accent")("mat-warn",(e._parentFormField==null?null:e._parentFormField.color)==="warn")("mat-undefined",!(e._parentFormField!=null&&e._parentFormField.color)),Z("id",e.id+"-panel")("aria-multiselectable",e.multiple)("aria-label",e.ariaLabel||null)("aria-labelledby",e._getPanelAriaLabelledby())}}var RV=new y("mat-select-scroll-strategy",{providedIn:"root",factory:()=>{let t=c(G);return()=>Qr(t)}}),OV=new y("MAT_SELECT_CONFIG"),NV=new y("MatSelectTrigger"),kb=class{source;value;constructor(n,e){this.source=n,this.value=e}},Zr=(()=>{class t{_viewportRuler=c(ui);_changeDetectorRef=c(De);_elementRef=c(B);_dir=c(nt,{optional:!0});_idGenerator=c(Ke);_renderer=c(Te);_parentFormField=c(xc,{optional:!0});ngControl=c(di,{self:!0,optional:!0});_liveAnnouncer=c(vc);_defaultOptions=c(OV,{optional:!0});_animationsDisabled=je();_popoverLocation;_initialized=new S;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"}];_scrollOptionIntoView(e){let i=this.options.toArray()[e];if(i){let r=this.panel.nativeElement,o=wS(e,this.options,this.optionGroups),a=i._getHostElement();e===0&&o===1?r.scrollTop=0:r.scrollTop=DS(a.offsetTop,a.offsetHeight,r.scrollTop,r.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new kb(this,e)}_scrollStrategyFactory=c(RV);_panelOpen=!1;_compareWith=(e,i)=>e===i;_uid=this._idGenerator.getId("mat-select-");_triggerAriaLabelledBy=null;_previousControl;_destroy=new S;_errorStateTracker;stateChanges=new S;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId("mat-select-value-");_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||"";get focused(){return this._focused||this._panelOpen}_focused=!1;controlType="mat-select";trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=E(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(ci.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}_value;ariaLabel="";ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<"u"?this._defaultOptions.panelWidth:"auto";canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=Zn(()=>{let e=this.options;return e?e.changes.pipe(Je(e),ht(()=>Ot(...e.map(i=>i.onSelectionChange)))):this._initialized.pipe(ht(()=>this.optionSelectionChanges))});openedChange=new I;_openedStream=this.openedChange.pipe(be(e=>e),le(()=>{}));_closedStream=this.openedChange.pipe(be(e=>!e),le(()=>{}));selectionChange=new I;valueChange=new I;constructor(){let e=c(Bf),i=c(Oc,{optional:!0}),r=c(gr,{optional:!0}),o=c(new Ri("tabindex"),{optional:!0}),a=c(jc,{optional:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new Cs(e,this.ngControl,r,i,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=o==null?0:parseInt(o)||0,this._popoverLocation=a?.usePopover===!1?null:"inline",this.id=this.id}ngOnInit(){this._selectionModel=new Lc(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(ye(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(ye(this._destroy)).subscribe(e=>{e.added.forEach(i=>i.select()),e.removed.forEach(i=>i.deselect())}),this.options.changes.pipe(Je(null),ye(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),i=this.ngControl;if(e!==this._triggerAriaLabelledBy){let r=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?r.setAttribute("aria-labelledby",e):r.removeAttribute("aria-labelledby")}i&&(this._previousControl!==i.control&&(this._previousControl!==void 0&&i.disabled!==null&&i.disabled!==this.disabled&&(this.disabled=i.disabled),this._previousControl=i.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete(),this._clearFromModal()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._applyModalPanelOwnership(),this._panelOpen=!0,this._overlayDir.positionChange.pipe(it(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}_trackedModal=null;_applyModalPanelOwnership(){let e=this._elementRef.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');if(!e)return;let i=`${this.id}-panel`;this._trackedModal&&mf(this._trackedModal,"aria-owns",i),Kv(e,"aria-owns",i),this._trackedModal=e}_clearFromModal(){if(!this._trackedModal)return;let e=`${this.id}-panel`;mf(this._trackedModal,"aria-owns",e),this._trackedModal=null}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?"rtl":"ltr"),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{i(),clearTimeout(r),this._cleanupDetach=void 0};let e=this.panel.nativeElement,i=this._renderer.listen(e,"animationend",o=>{o.animationName==="_mat-select-exit"&&(this._cleanupDetach?.(),this._detachOverlay())}),r=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);e.classList.add("mat-select-panel-exit")}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return"";if(this._multiple){let e=this._selectionModel.selected.map(i=>i.viewValue);return this._isRtl()&&e.reverse(),e.join(", ")}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value==="rtl":!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let i=e.keyCode,r=i===40||i===38||i===37||i===39,o=i===13||i===32,a=this._keyManager;if(!a.isTyping()&&o&&!yt(e)||(this.multiple||e.altKey)&&r)e.preventDefault(),this.open();else if(!this.multiple){let s=this.selected;a.onKeydown(e);let l=this.selected;l&&s!==l&&this._liveAnnouncer.announce(l.viewValue,1e4)}}_handleOpenKeydown(e){let i=this._keyManager,r=e.keyCode,o=r===40||r===38,a=i.isTyping();if(o&&e.altKey)e.preventDefault(),this.close();else if(!a&&(r===13||r===32)&&i.activeItem&&!yt(e))e.preventDefault(),i.activeItem._selectViaInteraction();else if(!a&&this._multiple&&r===65&&e.ctrlKey){e.preventDefault();let s=this.options.some(l=>!l.disabled&&!l.selected);this.options.forEach(l=>{l.disabled||(s?l.select():l.deselect())})}else{let s=i.activeItemIndex;i.onKeydown(e),this._multiple&&o&&e.shiftKey&&i.activeItem&&i.activeItemIndex!==s&&i.activeItem._selectViaInteraction()}}_handleOverlayKeydown(e){e.keyCode===27&&!yt(e)&&(e.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(i=>i.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)Array.isArray(e),e.forEach(i=>this._selectOptionByValue(i)),this._sortValues();else{let i=this._selectOptionByValue(e);i?this._keyManager.updateActiveItem(i):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let i=this.options.find(r=>{if(this._selectionModel.isSelected(r))return!1;try{return(r.value!=null||this.canSelectNullableOptions)&&this._compareWith(r.value,e)}catch{return!1}});return i&&this._selectionModel.select(i),i}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_skipPredicate=e=>this.panelOpen?!1:e.disabled;_getOverlayWidth(e){return this.panelWidth==="auto"?(e instanceof Es?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?"":this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new bc(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?"rtl":"ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=Ot(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(ye(e)).subscribe(i=>{this._onSelect(i.source,i.isUserInput),i.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),Ot(...this.options.map(i=>i._stateChanges)).pipe(ye(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,i){let r=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(r!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),i&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),i&&this.focus())),r!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((i,r)=>this.sortComparator?this.sortComparator(i,r,e):e.indexOf(i)-e.indexOf(r)),this.stateChanges.next()}}_propagateChanges(e){let i;this.multiple?i=this.selected.map(r=>r.value):i=this.selected?this.selected.value:e,this._value=i,this.valueChange.emit(i),this._onChange(i),this.selectionChange.emit(this._getChangeEvent(i)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let i=0;i<this.options.length;i++)if(!this.options.get(i).disabled){e=i;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,i=e?e+" ":"";return this.ariaLabelledby?i+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||"";return this.ariaLabelledby&&(e+=" "+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let i=this._elementRef.nativeElement;e.length?i.setAttribute("aria-describedby",e.join(" ")):i.removeAttribute("aria-describedby")}onContainerClick(e){let i=Ut(e);i&&(i.tagName==="MAT-OPTION"||i.classList.contains("cdk-overlay-backdrop")||i.closest(".mat-mdc-select-panel"))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=x({type:t,selectors:[["mat-select"]],contentQueries:function(i,r,o){if(i&1&&Mt(o,NV,5)(o,Gn,5)(o,Tb,5),i&2){let a;O(a=N())&&(r.customTrigger=a.first),O(a=N())&&(r.options=a),O(a=N())&&(r.optionGroups=a)}},viewQuery:function(i,r){if(i&1&&Ce(DV,5)(xV,5)(Kf,5),i&2){let o;O(o=N())&&(r.trigger=o.first),O(o=N())&&(r.panel=o.first),O(o=N())&&(r._overlayDir=o.first)}},hostAttrs:["role","combobox","aria-haspopup","listbox",1,"mat-mdc-select"],hostVars:21,hostBindings:function(i,r){i&1&&M("keydown",function(a){return r._handleKeydown(a)})("focus",function(){return r._onFocus()})("blur",function(){return r._onBlur()}),i&2&&(Z("id",r.id)("tabindex",r.disabled?-1:r.tabIndex)("aria-controls",r.panelOpen?r.id+"-panel":null)("aria-expanded",r.panelOpen)("aria-label",r.ariaLabel||null)("aria-required",r.required.toString())("aria-disabled",r.disabled.toString())("aria-invalid",r.errorState)("aria-activedescendant",r._getAriaActiveDescendant()),L("mat-mdc-select-disabled",r.disabled)("mat-mdc-select-invalid",r.errorState)("mat-mdc-select-required",r.required)("mat-mdc-select-empty",r.empty)("mat-mdc-select-multiple",r.multiple)("mat-select-open",r.panelOpen))},inputs:{userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],panelClass:"panelClass",disabled:[2,"disabled","disabled",te],disableRipple:[2,"disableRipple","disableRipple",te],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:Oi(e)],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",te],placeholder:"placeholder",required:[2,"required","required",te],multiple:[2,"multiple","multiple",te],disableOptionCentering:[2,"disableOptionCentering","disableOptionCentering",te],compareWith:"compareWith",value:"value",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],errorStateMatcher:"errorStateMatcher",typeaheadDebounceInterval:[2,"typeaheadDebounceInterval","typeaheadDebounceInterval",Oi],sortComparator:"sortComparator",id:"id",panelWidth:"panelWidth",canSelectNullableOptions:[2,"canSelectNullableOptions","canSelectNullableOptions",te]},outputs:{openedChange:"openedChange",_openedStream:"opened",_closedStream:"closed",selectionChange:"selectionChange",valueChange:"valueChange"},exportAs:["matSelect"],features:[Be([{provide:Dc,useExisting:t},{provide:Ib,useExisting:t}]),Pe],ngContentSelectors:MV,decls:11,vars:10,consts:[["fallbackOverlayOrigin","cdkOverlayOrigin","trigger",""],["panel",""],["cdk-overlay-origin","",1,"mat-mdc-select-trigger",3,"click"],[1,"mat-mdc-select-value"],[1,"mat-mdc-select-placeholder","mat-mdc-select-min-line"],[1,"mat-mdc-select-value-text"],[1,"mat-mdc-select-arrow-wrapper"],[1,"mat-mdc-select-arrow"],["viewBox","0 0 24 24","width","24px","height","24px","focusable","false","aria-hidden","true"],["d","M7 10l5 5 5-5z"],["cdk-connected-overlay","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"detach","backdropClick","overlayKeydown","cdkConnectedOverlayDisableClose","cdkConnectedOverlayPanelClass","cdkConnectedOverlayScrollStrategy","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayWidth","cdkConnectedOverlayFlexibleDimensions","cdkConnectedOverlayUsePopover"],[1,"mat-mdc-select-min-line"],["role","listbox","tabindex","-1",1,"mat-mdc-select-panel","mdc-menu-surface","mdc-menu-surface--open",3,"keydown"]],template:function(i,r){if(i&1&&(Se(EV),m(0,"div",2,0),M("click",function(){return r.open()}),m(3,"div",3),j(4,SV,2,1,"span",4)(5,kV,3,1,"span",5),f(),m(6,"div",6)(7,"div",7),Di(),m(8,"svg",8),T(9,"path",9),f()()()(),ct(10,AV,3,16,"ng-template",10),M("detach",function(){return r.close()})("backdropClick",function(){return r.close()})("overlayKeydown",function(a){return r._handleOverlayKeydown(a)})),i&2){let o=an(1);p(3),Z("id",r._valueId),p(),H(r.empty?4:5),p(6),R("cdkConnectedOverlayDisableClose",!0)("cdkConnectedOverlayPanelClass",r._overlayPanelClass)("cdkConnectedOverlayScrollStrategy",r._scrollStrategy)("cdkConnectedOverlayOrigin",r._preferredOverlayOrigin||o)("cdkConnectedOverlayPositions",r._positions)("cdkConnectedOverlayWidth",r._overlayWidth)("cdkConnectedOverlayFlexibleDimensions",!0)("cdkConnectedOverlayUsePopover",r._popoverLocation)}},dependencies:[Es,Kf],styles:[`@keyframes _mat-select-enter {
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
`],encapsulation:2,changeDetection:0})}return t})();var Kr=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=$({type:t});static \u0275inj=z({imports:[Wn,Ss,ve,$n,kt,Ss]})}return t})();function FV(t,n){}var Xr=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;positionStrategy;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;scrollStrategy;closeOnNavigation=!0;closeOnDestroy=!0;closeOnOverlayDetachments=!0;disableAnimations=!1;providers;container;templateContext};var Rb=(()=>{class t extends Gr{_elementRef=c(B);_focusTrapFactory=c(rf);_config;_interactivityChecker=c(Gv);_ngZone=c(V);_focusMonitor=c(mr);_renderer=c(Te);_changeDetectorRef=c(De);_injector=c(G);_platform=c(ue);_document=c(Y);_portalOutlet;_focusTrapped=new S;_focusTrap=null;_elementFocusedBeforeDialogWasOpened=null;_closeInteractionType=null;_ariaLabelledByQueue=[];_isDestroyed=!1;constructor(){super(),this._config=c(Xr,{optional:!0})||new Xr,this._config.ariaLabelledBy&&this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)}_addAriaLabelledBy(e){this._ariaLabelledByQueue.push(e),this._changeDetectorRef.markForCheck()}_removeAriaLabelledBy(e){let i=this._ariaLabelledByQueue.indexOf(e);i>-1&&(this._ariaLabelledByQueue.splice(i,1),this._changeDetectorRef.markForCheck())}_contentAttached(){this._initializeFocusTrap(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._focusTrapped.complete(),this._isDestroyed=!0,this._restoreFocus()}attachComponentPortal(e){this._portalOutlet.hasAttached();let i=this._portalOutlet.attachComponentPortal(e);return this._contentAttached(),i}attachTemplatePortal(e){this._portalOutlet.hasAttached();let i=this._portalOutlet.attachTemplatePortal(e);return this._contentAttached(),i}attachDomPortal=e=>{this._portalOutlet.hasAttached();let i=this._portalOutlet.attachDomPortal(e);return this._contentAttached(),i};_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(e,i){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let r=()=>{o(),a(),e.removeAttribute("tabindex")},o=this._renderer.listen(e,"blur",r),a=this._renderer.listen(e,"mousedown",r)})),e.focus(i)}_focusByCssSelector(e,i){let r=this._elementRef.nativeElement.querySelector(e);r&&this._forceFocus(r,i)}_trapFocus(e){this._isDestroyed||Ge(()=>{let i=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case"dialog":this._containsFocus()||i.focus(e);break;case!0:case"first-tabbable":this._focusTrap?.focusInitialElement(e)||this._focusDialogContainer(e);break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]',e);break;default:this._focusByCssSelector(this._config.autoFocus,e);break}this._focusTrapped.next()},{injector:this._injector})}_restoreFocus(){let e=this._config.restoreFocus,i=null;if(typeof e=="string"?i=this._document.querySelector(e):typeof e=="boolean"?i=e?this._elementFocusedBeforeDialogWasOpened:null:e&&(i=e),this._config.restoreFocus&&i&&typeof i.focus=="function"){let r=Li(),o=this._elementRef.nativeElement;(!r||r===this._document.body||r===o||o.contains(r))&&(this._focusMonitor?(this._focusMonitor.focusVia(i,this._closeInteractionType),this._closeInteractionType=null):i.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(e){this._elementRef.nativeElement.focus?.(e)}_containsFocus(){let e=this._elementRef.nativeElement,i=Li();return e===i||e.contains(i)}_initializeFocusTrap(){this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=Li()))}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=x({type:t,selectors:[["cdk-dialog-container"]],viewQuery:function(i,r){if(i&1&&Ce(mn,7),i&2){let o;O(o=N())&&(r._portalOutlet=o.first)}},hostAttrs:["tabindex","-1",1,"cdk-dialog-container"],hostVars:6,hostBindings:function(i,r){i&2&&Z("id",r._config.id||null)("role",r._config.role)("aria-modal",r._config.ariaModal)("aria-labelledby",r._config.ariaLabel?null:r._ariaLabelledByQueue[0])("aria-label",r._config.ariaLabel)("aria-describedby",r._config.ariaDescribedBy||null)},features:[_e],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(i,r){i&1&&ct(0,FV,0,0,"ng-template",0)},dependencies:[mn],styles:[`.cdk-dialog-container {
  display: block;
  width: 100%;
  height: 100%;
  min-height: inherit;
  max-height: inherit;
}
`],encapsulation:2})}return t})(),Hc=class{overlayRef;config;componentInstance=null;componentRef=null;containerInstance;disableClose;closed=new S;backdropClick;keydownEvents;outsidePointerEvents;id;_detachSubscription;constructor(n,e){this.overlayRef=n,this.config=e,this.disableClose=e.disableClose,this.backdropClick=n.backdropClick(),this.keydownEvents=n.keydownEvents(),this.outsidePointerEvents=n.outsidePointerEvents(),this.id=e.id,this.keydownEvents.subscribe(i=>{i.keyCode===27&&!this.disableClose&&!yt(i)&&(i.preventDefault(),this.close(void 0,{focusOrigin:"keyboard"}))}),this.backdropClick.subscribe(()=>{!this.disableClose&&this._canClose()?this.close(void 0,{focusOrigin:"mouse"}):this.containerInstance._recaptureFocus?.()}),this._detachSubscription=n.detachments().subscribe(()=>{e.closeOnOverlayDetachments!==!1&&this.close()})}close(n,e){if(this._canClose(n)){let i=this.closed;this.containerInstance._closeInteractionType=e?.focusOrigin||"program",this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),i.next(n),i.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(n="",e=""){return this.overlayRef.updateSize({width:n,height:e}),this}addPanelClass(n){return this.overlayRef.addPanelClass(n),this}removePanelClass(n){return this.overlayRef.removePanelClass(n),this}_canClose(n){let e=this.config;return!!this.containerInstance&&(!e.closePredicate||e.closePredicate(n,e,this.componentInstance))}},PV=new y("DialogScrollStrategy",{providedIn:"root",factory:()=>{let t=c(G);return()=>Jo(t)}}),LV=new y("DialogData"),VV=new y("DefaultDialogConfig");function BV(t){let n=E(t),e=new I;return{valueSignal:n,get value(){return n()},change:e,ngOnDestroy(){e.complete()}}}var Ob=(()=>{class t{_injector=c(G);_defaultOptions=c(VV,{optional:!0});_parentDialog=c(t,{optional:!0,skipSelf:!0});_overlayContainer=c(Zf);_idGenerator=c(Ke);_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new S;_afterOpenedAtThisLevel=new S;_ariaHiddenElements=new Map;_scrollStrategy=c(PV);get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}afterAllClosed=Zn(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(Je(void 0)));constructor(){}open(e,i){let r=this._defaultOptions||new Xr;i=C(C({},r),i),i.id=i.id||this._idGenerator.getId("cdk-dialog-"),i.id&&this.getDialogById(i.id);let o=this._getOverlayConfig(i),a=Wi(this._injector,o),s=new Hc(a,i),l=this._attachContainer(a,s,i);if(s.containerInstance=l,!this.openDialogs.length){let d=this._overlayContainer.getContainerElement();l._focusTrapped?l._focusTrapped.pipe(it(1)).subscribe(()=>{this._hideNonDialogContentFromAssistiveTechnology(d)}):this._hideNonDialogContentFromAssistiveTechnology(d)}return this._attachDialogContent(e,s,l,i),this.openDialogs.push(s),s.closed.subscribe(()=>this._removeOpenDialog(s,!0)),this.afterOpened.next(s),s}closeAll(){Ab(this.openDialogs,e=>e.close())}getDialogById(e){return this.openDialogs.find(i=>i.id===e)}ngOnDestroy(){Ab(this._openDialogsAtThisLevel,e=>{e.config.closeOnDestroy===!1&&this._removeOpenDialog(e,!1)}),Ab(this._openDialogsAtThisLevel,e=>e.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(e){let i=new $i({positionStrategy:e.positionStrategy||vr().centerHorizontally().centerVertically(),scrollStrategy:e.scrollStrategy||this._scrollStrategy(),panelClass:e.panelClass,hasBackdrop:e.hasBackdrop,direction:e.direction,minWidth:e.minWidth,minHeight:e.minHeight,maxWidth:e.maxWidth,maxHeight:e.maxHeight,width:e.width,height:e.height,disposeOnNavigation:e.closeOnNavigation,disableAnimations:e.disableAnimations});return e.backdropClass&&(i.backdropClass=e.backdropClass),i}_attachContainer(e,i,r){let o=r.injector||r.viewContainerRef?.injector,a=[{provide:Xr,useValue:r},{provide:Hc,useValue:i},{provide:xs,useValue:e}],s;r.container?typeof r.container=="function"?s=r.container:(s=r.container.type,a.push(...r.container.providers(r))):s=Rb;let l=new Mn(s,r.viewContainerRef,G.create({parent:o||this._injector,providers:a}));return e.attach(l).instance}_attachDialogContent(e,i,r,o){if(e instanceof pt){let a=this._createInjector(o,i,r,void 0),s={$implicit:o.data,dialogRef:i};o.templateContext&&(s=C(C({},s),typeof o.templateContext=="function"?o.templateContext():o.templateContext)),r.attachTemplatePortal(new Sn(e,null,s,a))}else{let a=this._createInjector(o,i,r,this._injector),s=r.attachComponentPortal(new Mn(e,o.viewContainerRef,a));i.componentRef=s,i.componentInstance=s.instance}}_createInjector(e,i,r,o){let a=e.injector||e.viewContainerRef?.injector,s=[{provide:LV,useValue:e.data},{provide:Hc,useValue:i}];return e.providers&&(typeof e.providers=="function"?s.push(...e.providers(i,e,r)):s.push(...e.providers)),e.direction&&(!a||!a.get(nt,null,{optional:!0}))&&s.push({provide:nt,useValue:BV(e.direction)}),G.create({parent:a||o,providers:s})}_removeOpenDialog(e,i){let r=this.openDialogs.indexOf(e);r>-1&&(this.openDialogs.splice(r,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((o,a)=>{o?a.setAttribute("aria-hidden",o):a.removeAttribute("aria-hidden")}),this._ariaHiddenElements.clear(),i&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(e){if(e.parentElement){let i=e.parentElement.children;for(let r=i.length-1;r>-1;r--){let o=i[r];o!==e&&o.nodeName!=="SCRIPT"&&o.nodeName!=="STYLE"&&!o.hasAttribute("aria-live")&&!o.hasAttribute("popover")&&(this._ariaHiddenElements.set(o,o.getAttribute("aria-hidden")),o.setAttribute("aria-hidden","true"))}}}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Ab(t,n){let e=t.length;for(;e--;)n(t[e])}var xS=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=$({type:t});static \u0275inj=z({providers:[Ob],imports:[Wn,Hi,Wo,Hi]})}return t})();function jV(t,n){}var th=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;position;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;delayFocusTrap=!0;scrollStrategy;closeOnNavigation=!0;enterAnimationDuration;exitAnimationDuration},Nb="mdc-dialog--open",ES="mdc-dialog--opening",MS="mdc-dialog--closing",HV=150,UV=75,zV=(()=>{class t extends Rb{_animationStateChanged=new I;_animationsEnabled=!je();_actionSectionCount=0;_hostElement=this._elementRef.nativeElement;_enterAnimationDuration=this._animationsEnabled?IS(this._config.enterAnimationDuration)??HV:0;_exitAnimationDuration=this._animationsEnabled?IS(this._config.exitAnimationDuration)??UV:0;_animationTimer=null;_contentAttached(){super._contentAttached(),this._startOpenAnimation()}_startOpenAnimation(){this._animationStateChanged.emit({state:"opening",totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(SS,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(ES,Nb)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(Nb),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:"closing",totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(Nb),this._animationsEnabled?(this._hostElement.style.setProperty(SS,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(MS)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_updateActionSectionCount(e){this._actionSectionCount+=e,this._changeDetectorRef.markForCheck()}_finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration)};_finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:"closed",totalTime:this._exitAnimationDuration})};_clearAnimationClasses(){this._hostElement.classList.remove(ES,MS)}_waitForAnimationToComplete(e,i){this._animationTimer!==null&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(i,e)}_requestAnimationFrame(e){this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame=="function"?requestAnimationFrame(e):e()})}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(e){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:"opened",totalTime:e})}ngOnDestroy(){super.ngOnDestroy(),this._animationTimer!==null&&clearTimeout(this._animationTimer)}attachComponentPortal(e){let i=super.attachComponentPortal(e);return i.location.nativeElement.classList.add("mat-mdc-dialog-component-host"),i}static \u0275fac=(()=>{let e;return function(r){return(e||(e=qe(t)))(r||t)}})();static \u0275cmp=x({type:t,selectors:[["mat-dialog-container"]],hostAttrs:["tabindex","-1",1,"mat-mdc-dialog-container","mdc-dialog"],hostVars:10,hostBindings:function(i,r){i&2&&(qt("id",r._config.id),Z("aria-modal",r._config.ariaModal)("role",r._config.role)("aria-labelledby",r._config.ariaLabel?null:r._ariaLabelledByQueue[0])("aria-label",r._config.ariaLabel)("aria-describedby",r._config.ariaDescribedBy||null),L("_mat-animation-noopable",!r._animationsEnabled)("mat-mdc-dialog-container-with-actions",r._actionSectionCount>0))},features:[_e],decls:3,vars:0,consts:[[1,"mat-mdc-dialog-inner-container","mdc-dialog__container"],[1,"mat-mdc-dialog-surface","mdc-dialog__surface"],["cdkPortalOutlet",""]],template:function(i,r){i&1&&(m(0,"div",0)(1,"div",1),ct(2,jV,0,0,"ng-template",2),f()())},dependencies:[mn],styles:[`.mat-mdc-dialog-container {
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
`],encapsulation:2})}return t})(),SS="--mat-dialog-transition-duration";function IS(t){return t==null?null:typeof t=="number"?t:t.endsWith("ms")?En(t.substring(0,t.length-2)):t.endsWith("s")?En(t.substring(0,t.length-1))*1e3:t==="0"?0:null}var eh=(function(t){return t[t.OPEN=0]="OPEN",t[t.CLOSING=1]="CLOSING",t[t.CLOSED=2]="CLOSED",t})(eh||{}),ea=class{_ref;_config;_containerInstance;componentInstance;componentRef=null;disableClose;id;_afterOpened=new pn(1);_beforeClosed=new pn(1);_result;_closeFallbackTimeout;_state=eh.OPEN;_closeInteractionType;constructor(n,e,i){this._ref=n,this._config=e,this._containerInstance=i,this.disableClose=e.disableClose,this.id=n.id,n.addPanelClass("mat-mdc-dialog-panel"),i._animationStateChanged.pipe(be(r=>r.state==="opened"),it(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),i._animationStateChanged.pipe(be(r=>r.state==="closed"),it(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),n.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),Ot(this.backdropClick(),this.keydownEvents().pipe(be(r=>r.keyCode===27&&!this.disableClose&&!yt(r)))).subscribe(r=>{this.disableClose||(r.preventDefault(),$V(this,r.type==="keydown"?"keyboard":"mouse"))})}close(n){let e=this._config.closePredicate;e&&!e(n,this._config,this.componentInstance)||(this._result=n,this._containerInstance._animationStateChanged.pipe(be(i=>i.state==="closing"),it(1)).subscribe(i=>{this._beforeClosed.next(n),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),i.totalTime+100)}),this._state=eh.CLOSING,this._containerInstance._startExitAnimation())}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(n){let e=this._ref.config.positionStrategy;return n&&(n.left||n.right)?n.left?e.left(n.left):e.right(n.right):e.centerHorizontally(),n&&(n.top||n.bottom)?n.top?e.top(n.top):e.bottom(n.bottom):e.centerVertically(),this._ref.updatePosition(),this}updateSize(n="",e=""){return this._ref.updateSize(n,e),this}addPanelClass(n){return this._ref.addPanelClass(n),this}removePanelClass(n){return this._ref.removePanelClass(n),this}getState(){return this._state}_finishDialogClose(){this._state=eh.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}};function $V(t,n,e){return t._closeInteractionType=n,t.close(e)}var WV=new y("MatMdcDialogData"),GV=new y("mat-mdc-dialog-default-options"),qV=new y("mat-mdc-dialog-scroll-strategy",{providedIn:"root",factory:()=>{let t=c(G);return()=>Jo(t)}}),Uc=(()=>{class t{_defaultOptions=c(GV,{optional:!0});_scrollStrategy=c(qV);_parentDialog=c(t,{optional:!0,skipSelf:!0});_idGenerator=c(Ke);_injector=c(G);_dialog=c(Ob);_animationsDisabled=je();_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new S;_afterOpenedAtThisLevel=new S;dialogConfigClass=th;_dialogRefConstructor;_dialogContainerType;_dialogDataToken;get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}afterAllClosed=Zn(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(Je(void 0)));constructor(){this._dialogRefConstructor=ea,this._dialogContainerType=zV,this._dialogDataToken=WV}open(e,i){let r;i=C(C({},this._defaultOptions||new th),i),i.id=i.id||this._idGenerator.getId("mat-mdc-dialog-"),i.scrollStrategy=i.scrollStrategy||this._scrollStrategy();let o=this._dialog.open(e,X(C({},i),{positionStrategy:vr(this._injector).centerHorizontally().centerVertically(),disableClose:!0,closePredicate:void 0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,disableAnimations:this._animationsDisabled||i.enterAnimationDuration?.toLocaleString()==="0"||i.exitAnimationDuration?.toString()==="0",container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:i},{provide:Xr,useValue:i}]},templateContext:()=>({dialogRef:r}),providers:(a,s,l)=>(r=new this._dialogRefConstructor(a,i,l),r.updatePosition(i?.position),[{provide:this._dialogContainerType,useValue:l},{provide:this._dialogDataToken,useValue:s.data},{provide:this._dialogRefConstructor,useValue:r}])}));return r.componentRef=o.componentRef,r.componentInstance=o.componentInstance,this.openDialogs.push(r),this.afterOpened.next(r),r.afterClosed().subscribe(()=>{let a=this.openDialogs.indexOf(r);a>-1&&(this.openDialogs.splice(a,1),this.openDialogs.length||this._getAfterAllClosed().next())}),r}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(e){return this.openDialogs.find(i=>i.id===e)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(e){let i=e.length;for(;i--;)e[i].close()}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var nh=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=$({type:t});static \u0275inj=z({providers:[Uc],imports:[xS,Wn,Hi,ve]})}return t})();var ih=class t{dialogRef=c(ea);onConfirm(){this.dialogRef.close(!0)}onDeny(){this.dialogRef.close(!1)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=x({type:t,selectors:[["confirmation-dialog"]],decls:8,vars:0,consts:[[1,"flex-with-style"],[1,"top-text"],[1,"button-group"],[1,"button",3,"click"]],template:function(e,i){e&1&&(Me(0,"div",0)(1,"p",1),g(2," \xC4r du s\xE4ker att du vill avregistrera n\xE4rvaro? "),ke(),Me(3,"li",2)(4,"button",3),Fn("click",function(){return i.onConfirm()}),g(5," Ja "),ke(),Me(6,"button",3),Fn("click",function(){return i.onDeny()}),g(7," Nej "),ke()()())},dependencies:[nh,ut],styles:["[_nghost-%COMP%]{display:block;text-align:center;padding:8px}.top-text[_ngcontent-%COMP%]{font:var(--mat-sys-title-medium)}.button-group[_ngcontent-%COMP%]{display:flex;justify-content:center;gap:32px}.button[_ngcontent-%COMP%]{padding:8px 32px;font:var(--mat-sys-label-small);font-weight:700;cursor:pointer;border-radius:4px;transition:all .2s ease-in-out;background-color:var(--mat-sys-primary);color:var(--mat-sys-on-primary);border:1px solid}button[_ngcontent-%COMP%]:hover{background-color:var(--mat-sys-primary-fixed-dim)}"]})};var TS=(t,n)=>n.value,YV=(t,n)=>e=>e.value!="CHECKED_OUT";function QV(t,n){if(t&1&&(m(0,"span"),g(1),f()),t&2){let e=D();p(),ae(e.statusLabels[e.currentStatus])}}function ZV(t,n){if(t&1&&(m(0,"mat-option",3),g(1),f()),t&2){let e=n.$implicit;R("value",e.value),p(),ae(e.label)}}function KV(t,n){if(t&1&&He(0,ZV,2,2,"mat-option",3,TS),t&2){let e=D(2);Ue(e.statusOptions)}}function XV(t,n){if(t&1&&(m(0,"mat-option",3),g(1),f()),t&2){let e=n.$implicit;R("value",e.value),p(),ae(e.label)}}function JV(t,n){if(t&1&&He(0,XV,2,2,"mat-option",3,TS),t&2){let e=D(2);Ue(e.statusOptions.filter(I_(0,YV,n)))}}function e2(t,n){if(t&1){let e=Le();m(0,"mat-form-field",0)(1,"mat-select",2),M("selectionChange",function(r){ie(e);let o=D();return re(o.onStatusChange(r.value))}),j(2,KV,2,0)(3,JV,2,1),f()()}if(t&2){let e=D();p(),R("value",e.currentStatus),p(),H(e.currentStatus==="CHECKED_IN"?2:3)}}function t2(t,n){if(t&1&&(m(0,"p",1),g(1),f()),t&2){let e=D();p(),ae(e.errorMessage)}}var Is=class t{childSignal=Ae.required();disabled=ar();errorMessage="";showConfirmation=!1;dialog=c(Uc);statusOptions=[{value:"NOT_SET",label:"\u2014"},{value:"CHECKED_IN",label:"Incheckad"},{value:"CHECKED_OUT",label:"Utcheckad"},{value:"LEAVE",label:"Ledig"},{value:"ABSENT",label:"Fr\xE5nvarande"}];statusLabels=Object.fromEntries(this.statusOptions.map(n=>[n.value,n.label]));attendanceService=c(Yr);get currentStatus(){return this.attendanceService.getSignal(this.childSignal().id,zi())()??"NOT_SET"}constructor(){Jt(()=>{let n=this.childSignal();if(!n)return;let e=this.attendanceService.getSignal(n.id,zi());e()===null&&e.set(n.status??"NOT_SET")})}onStatusChange(n){let e=this.attendanceService.getSignal(this.childSignal().id,zi()),i=e();e.set(n),i==="CHECKED_IN"&&n==="CHECKED_OUT"&&this.dialog.open(ih).afterClosed().subscribe(o=>{if(!o){e.set(i);return}}),this.attendanceService.setAttendance(this.childSignal().id,zi(),n).subscribe({next:r=>e.set(r.status),error:r=>{console.error("Kunde inte spara",r),e.set(i),this.errorMessage="Misslyckades att spara till databasen.",setTimeout(()=>this.errorMessage="",2e3)}}),this.wsUpdateAttendance(n)}attendanceChangeEvent=new I;wsUpdateAttendance(n){let e={childId:this.childSignal().id,status:n};this.attendanceChangeEvent.emit(e)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=x({type:t,selectors:[["attendance-box"]],inputs:{childSignal:[1,"childSignal"],disabled:[1,"disabled"]},outputs:{childSignal:"childSignalChange",attendanceChangeEvent:"attendanceChangeEvent"},decls:4,vars:2,consts:[["appearance","outline","subscriptSizing","dynamic"],[1,"error-text"],[3,"selectionChange","value"],[3,"value"]],template:function(e,i){e&1&&(m(0,"div"),j(1,QV,2,1,"span")(2,e2,4,2,"mat-form-field",0),j(3,t2,2,1,"p",1),f()),e&2&&(p(),H(i.disabled()?1:2),p(2),H(i.errorMessage?3:-1))},dependencies:[Kr,Tt,Zr,Gn,kt],styles:[".error-text[_ngcontent-%COMP%]{color:red;font-size:16px;position:absolute}mat-form-field[_ngcontent-%COMP%]{--mat-form-field-container-height: 32px;--mat-form-field-container-vertical-padding: 6px;background-color:var(--mat-sys-surface-variant)}"]})};var rh=class t{childSignal=Ae.required();dateSignal=Ae.required();attendanceChangeEvent=new I;wsUpdateAttendance(n){this.attendanceChangeEvent.emit(n)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=x({type:t,selectors:[["child-display"]],inputs:{childSignal:[1,"childSignal"],dateSignal:[1,"dateSignal"]},outputs:{childSignal:"childSignalChange",dateSignal:"dateSignalChange",attendanceChangeEvent:"attendanceChangeEvent"},decls:6,vars:2,consts:[[1,"rowise"],[1,"attendance-box",3,"attendanceChangeEvent","childSignal"]],template:function(e,i){e&1&&(m(0,"p"),g(1),f(),m(2,"div",0)(3,"p"),g(4,"N\xE4rvaro:"),f(),m(5,"attendance-box",1),M("attendanceChangeEvent",function(o){return i.wsUpdateAttendance(o)}),f()()),e&2&&(p(),ae(i.dateSignal()),p(4),R("childSignal",i.childSignal()))},dependencies:[Is],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;width:fit-content;height:100%;max-width:fit-content}.rowise[_ngcontent-%COMP%]{display:flex;flex:1;gap:1em;margin:1em;align-items:baseline}p[_ngcontent-%COMP%]{font:var(--mat-sys-body-large);margin-bottom:0;margin-left:1em}"]})};var kS=["*"],n2=`.mdc-list {
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
`,i2=["unscopedContent"],r2=["text"],o2=[[["","matListItemAvatar",""],["","matListItemIcon",""]],[["","matListItemTitle",""]],[["","matListItemLine",""]],"*",[["","matListItemMeta",""]],[["mat-divider"]]],a2=["[matListItemAvatar],[matListItemIcon]","[matListItemTitle]","[matListItemLine]","*","[matListItemMeta]","mat-divider"];var s2=new y("ListOption"),br=(()=>{class t{_elementRef=c(B);constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275dir=A({type:t,selectors:[["","matListItemTitle",""]],hostAttrs:[1,"mat-mdc-list-item-title","mdc-list-item__primary-text"]})}return t})(),l2=(()=>{class t{_elementRef=c(B);constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275dir=A({type:t,selectors:[["","matListItemLine",""]],hostAttrs:[1,"mat-mdc-list-item-line","mdc-list-item__secondary-text"]})}return t})(),ta=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=A({type:t,selectors:[["","matListItemMeta",""]],hostAttrs:[1,"mat-mdc-list-item-meta","mdc-list-item__end"]})}return t})(),AS=(()=>{class t{_listOption=c(s2,{optional:!0});constructor(){}_isAlignedAtStart(){return!this._listOption||this._listOption?._getTogglePosition()==="after"}static \u0275fac=function(i){return new(i||t)};static \u0275dir=A({type:t,hostVars:4,hostBindings:function(i,r){i&2&&L("mdc-list-item__start",r._isAlignedAtStart())("mdc-list-item__end",!r._isAlignedAtStart())}})}return t})(),c2=(()=>{class t extends AS{static \u0275fac=(()=>{let e;return function(r){return(e||(e=qe(t)))(r||t)}})();static \u0275dir=A({type:t,selectors:[["","matListItemAvatar",""]],hostAttrs:[1,"mat-mdc-list-item-avatar"],features:[_e]})}return t})(),d2=(()=>{class t extends AS{static \u0275fac=(()=>{let e;return function(r){return(e||(e=qe(t)))(r||t)}})();static \u0275dir=A({type:t,selectors:[["","matListItemIcon",""]],hostAttrs:[1,"mat-mdc-list-item-icon"],features:[_e]})}return t})(),u2=new y("MAT_LIST_CONFIG"),zc=(()=>{class t{_isNonInteractive=!0;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=Ft(e)}_disableRipple=!1;get disabled(){return this._disabled()}set disabled(e){this._disabled.set(Ft(e))}_disabled=E(!1);_defaultOptions=c(u2,{optional:!0});static \u0275fac=function(i){return new(i||t)};static \u0275dir=A({type:t,hostVars:1,hostBindings:function(i,r){i&2&&Z("aria-disabled",r.disabled)},inputs:{disableRipple:"disableRipple",disabled:"disabled"}})}return t})(),m2=(()=>{class t{_elementRef=c(B);_ngZone=c(V);_listBase=c(zc,{optional:!0});_platform=c(ue);_hostElement;_isButtonElement;_noopAnimations=je();_avatars;_icons;set lines(e){this._explicitLines=En(e,null),this._updateItemLines(!1)}_explicitLines=null;get disableRipple(){return this.disabled||this._disableRipple||this._noopAnimations||!!this._listBase?.disableRipple}set disableRipple(e){this._disableRipple=Ft(e)}_disableRipple=!1;get disabled(){return this._disabled()||!!this._listBase?.disabled}set disabled(e){this._disabled.set(Ft(e))}_disabled=E(!1);_subscriptions=new oe;_rippleRenderer=null;_hasUnscopedTextContent=!1;rippleConfig;get rippleDisabled(){return this.disableRipple||!!this.rippleConfig.disabled}constructor(){c(Ze).load(Bi);let e=c(fs,{optional:!0});this.rippleConfig=e||{},this._hostElement=this._elementRef.nativeElement,this._isButtonElement=this._hostElement.nodeName.toLowerCase()==="button",this._listBase&&!this._listBase._isNonInteractive&&this._initInteractiveListItem(),this._isButtonElement&&!this._hostElement.hasAttribute("type")&&this._hostElement.setAttribute("type","button")}ngAfterViewInit(){this._monitorProjectedLinesAndTitle(),this._updateItemLines(!0)}ngOnDestroy(){this._subscriptions.unsubscribe(),this._rippleRenderer!==null&&this._rippleRenderer._removeTriggerEvents()}_hasIconOrAvatar(){return!!(this._avatars.length||this._icons.length)}_initInteractiveListItem(){this._hostElement.classList.add("mat-mdc-list-item-interactive"),this._rippleRenderer=new Qo(this,this._ngZone,this._hostElement,this._platform,c(G)),this._rippleRenderer.setupTriggerEvents(this._hostElement)}_monitorProjectedLinesAndTitle(){this._ngZone.runOutsideAngular(()=>{this._subscriptions.add(Ot(this._lines.changes,this._titles.changes).subscribe(()=>this._updateItemLines(!1)))})}_updateItemLines(e){if(!this._lines||!this._titles||!this._unscopedContent)return;e&&this._checkDomForUnscopedTextContent();let i=this._explicitLines??this._inferLinesFromContent(),r=this._unscopedContent.nativeElement;if(this._hostElement.classList.toggle("mat-mdc-list-item-single-line",i<=1),this._hostElement.classList.toggle("mdc-list-item--with-one-line",i<=1),this._hostElement.classList.toggle("mdc-list-item--with-two-lines",i===2),this._hostElement.classList.toggle("mdc-list-item--with-three-lines",i===3),this._hasUnscopedTextContent){let o=this._titles.length===0&&i===1;r.classList.toggle("mdc-list-item__primary-text",o),r.classList.toggle("mdc-list-item__secondary-text",!o)}else r.classList.remove("mdc-list-item__primary-text"),r.classList.remove("mdc-list-item__secondary-text")}_inferLinesFromContent(){let e=this._titles.length+this._lines.length;return this._hasUnscopedTextContent&&(e+=1),e}_checkDomForUnscopedTextContent(){this._hasUnscopedTextContent=Array.from(this._unscopedContent.nativeElement.childNodes).filter(e=>e.nodeType!==e.COMMENT_NODE).some(e=>!!(e.textContent&&e.textContent.trim()))}static \u0275fac=function(i){return new(i||t)};static \u0275dir=A({type:t,contentQueries:function(i,r,o){if(i&1&&Mt(o,c2,4)(o,d2,4),i&2){let a;O(a=N())&&(r._avatars=a),O(a=N())&&(r._icons=a)}},hostVars:4,hostBindings:function(i,r){i&2&&(Z("aria-disabled",r.disabled)("disabled",r._isButtonElement&&r.disabled||null),L("mdc-list-item--disabled",r.disabled))},inputs:{lines:"lines",disableRipple:"disableRipple",disabled:"disabled"}})}return t})();var oh=(()=>{class t extends zc{_isNonInteractive=!1;static \u0275fac=(()=>{let e;return function(r){return(e||(e=qe(t)))(r||t)}})();static \u0275cmp=x({type:t,selectors:[["mat-action-list"]],hostAttrs:["role","group",1,"mat-mdc-action-list","mat-mdc-list-base","mdc-list"],exportAs:["matActionList"],features:[Be([{provide:zc,useExisting:t}]),_e],ngContentSelectors:kS,decls:1,vars:0,template:function(i,r){i&1&&(Se(),ee(0))},styles:[`.mdc-list {
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
`],encapsulation:2,changeDetection:0})}return t})();var Ts=(()=>{class t extends zc{static \u0275fac=(()=>{let e;return function(r){return(e||(e=qe(t)))(r||t)}})();static \u0275cmp=x({type:t,selectors:[["mat-list"]],hostAttrs:[1,"mat-mdc-list","mat-mdc-list-base","mdc-list"],exportAs:["matList"],features:[Be([{provide:zc,useExisting:t}]),_e],ngContentSelectors:kS,decls:1,vars:0,template:function(i,r){i&1&&(Se(),ee(0))},styles:[n2],encapsulation:2,changeDetection:0})}return t})(),Jr=(()=>{class t extends m2{_lines;_titles;_meta;_unscopedContent;_itemText;get activated(){return this._activated}set activated(e){this._activated=Ft(e)}_activated=!1;_getAriaCurrent(){return this._hostElement.nodeName==="A"&&this._activated?"page":null}_hasBothLeadingAndTrailing(){return this._meta.length!==0&&(this._avatars.length!==0||this._icons.length!==0)}static \u0275fac=(()=>{let e;return function(r){return(e||(e=qe(t)))(r||t)}})();static \u0275cmp=x({type:t,selectors:[["mat-list-item"],["a","mat-list-item",""],["button","mat-list-item",""]],contentQueries:function(i,r,o){if(i&1&&Mt(o,l2,5)(o,br,5)(o,ta,5),i&2){let a;O(a=N())&&(r._lines=a),O(a=N())&&(r._titles=a),O(a=N())&&(r._meta=a)}},viewQuery:function(i,r){if(i&1&&Ce(i2,5)(r2,5),i&2){let o;O(o=N())&&(r._unscopedContent=o.first),O(o=N())&&(r._itemText=o.first)}},hostAttrs:[1,"mat-mdc-list-item","mdc-list-item"],hostVars:13,hostBindings:function(i,r){i&2&&(Z("aria-current",r._getAriaCurrent()),L("mdc-list-item--activated",r.activated)("mdc-list-item--with-leading-avatar",r._avatars.length!==0)("mdc-list-item--with-leading-icon",r._icons.length!==0)("mdc-list-item--with-trailing-meta",r._meta.length!==0)("mat-mdc-list-item-both-leading-and-trailing",r._hasBothLeadingAndTrailing())("_mat-animation-noopable",r._noopAnimations))},inputs:{activated:"activated"},exportAs:["matListItem"],features:[_e],ngContentSelectors:a2,decls:10,vars:0,consts:[["unscopedContent",""],[1,"mdc-list-item__content"],[1,"mat-mdc-list-item-unscoped-content",3,"cdkObserveContent"],[1,"mat-focus-indicator"]],template:function(i,r){i&1&&(Se(o2),ee(0),m(1,"span",1),ee(2,1),ee(3,2),m(4,"span",2,0),M("cdkObserveContent",function(){return r._updateItemLines(!0)}),ee(6,3),f()(),ee(7,4),ee(8,5),T(9,"div",3))},dependencies:[nf],encapsulation:2,changeDetection:0})}return t})();var eo=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=$({type:t});static \u0275inj=z({imports:[ss,hs,Xf,ve,Ui]})}return t})();var sh=class t{url=`${at.apiUrl}/api/children/attendance`;urlPerGroup=`${at.apiUrl}/api/children/attendance/group`;http=c(vt);getChildren(){return this.http.get(this.url)}getChildrenByGroup(n,e){let i=new Nt().set("groupId",n);return e&&(i=i.set("date",e)),this.http.get(this.urlPerGroup,{params:i})}static \u0275fac=function(e){return new(e||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})};var f2=["tooltip"],h2=20;var p2=new y("mat-tooltip-scroll-strategy",{providedIn:"root",factory:()=>{let t=c(G);return()=>Qr(t,{scrollThrottle:h2})}}),g2=new y("mat-tooltip-default-options",{providedIn:"root",factory:()=>({showDelay:0,hideDelay:0,touchendHideDelay:1500})});var RS="tooltip-panel",_2={passive:!0},v2=8,b2=8,y2=24,C2=200,na=(()=>{class t{_elementRef=c(B);_ngZone=c(V);_platform=c(ue);_ariaDescriber=c(UE);_focusMonitor=c(mr);_dir=c(nt);_injector=c(G);_viewContainerRef=c(Et);_mediaMatcher=c(as);_document=c(Y);_renderer=c(Te);_animationsDisabled=je();_defaultOptions=c(g2,{optional:!0});_overlayRef=null;_tooltipInstance=null;_overlayPanelClass;_portal;_position="below";_positionAtOrigin=!1;_disabled=!1;_tooltipClass;_viewInitialized=!1;_pointerExitEventsInitialized=!1;_tooltipComponent=OS;_viewportMargin=8;_currentPosition;_cssClassPrefix="mat-mdc";_ariaDescriptionPending=!1;_dirSubscribed=!1;get position(){return this._position}set position(e){e!==this._position&&(this._position=e,this._overlayRef&&(this._updatePosition(this._overlayRef),this._tooltipInstance?.show(0),this._overlayRef.updatePosition()))}get positionAtOrigin(){return this._positionAtOrigin}set positionAtOrigin(e){this._positionAtOrigin=Ft(e),this._detach(),this._overlayRef=null}get disabled(){return this._disabled}set disabled(e){let i=Ft(e);this._disabled!==i&&(this._disabled=i,i?this.hide(0):this._setupPointerEnterEventsIfNeeded(),this._syncAriaDescription(this.message))}get showDelay(){return this._showDelay}set showDelay(e){this._showDelay=En(e)}_showDelay;get hideDelay(){return this._hideDelay}set hideDelay(e){this._hideDelay=En(e),this._tooltipInstance&&(this._tooltipInstance._mouseLeaveHideDelay=this._hideDelay)}_hideDelay;touchGestures="auto";get message(){return this._message}set message(e){let i=this._message;this._message=e!=null?String(e).trim():"",!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage()),this._syncAriaDescription(i)}_message="";get tooltipClass(){return this._tooltipClass}set tooltipClass(e){this._tooltipClass=e,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass)}_eventCleanups=[];_touchstartTimeout=null;_destroyed=new S;_isDestroyed=!1;constructor(){let e=this._defaultOptions;e&&(this._showDelay=e.showDelay,this._hideDelay=e.hideDelay,e.position&&(this.position=e.position),e.positionAtOrigin&&(this.positionAtOrigin=e.positionAtOrigin),e.touchGestures&&(this.touchGestures=e.touchGestures),e.tooltipClass&&(this.tooltipClass=e.tooltipClass)),this._viewportMargin=v2}ngAfterViewInit(){this._viewInitialized=!0,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe(ye(this._destroyed)).subscribe(e=>{e?e==="keyboard"&&this._ngZone.run(()=>this.show()):this._ngZone.run(()=>this.hide(0))})}ngOnDestroy(){let e=this._elementRef.nativeElement;this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),this._eventCleanups.forEach(i=>i()),this._eventCleanups.length=0,this._destroyed.next(),this._destroyed.complete(),this._isDestroyed=!0,this._ariaDescriber.removeDescription(e,this.message,"tooltip"),this._focusMonitor.stopMonitoring(e)}show(e=this.showDelay,i){if(this.disabled||!this.message||this._isTooltipVisible()){this._tooltipInstance?._cancelPendingAnimations();return}let r=this._createOverlay(i);this._detach(),this._portal=this._portal||new Mn(this._tooltipComponent,this._viewContainerRef);let o=this._tooltipInstance=r.attach(this._portal).instance;o._triggerElement=this._elementRef.nativeElement,o._mouseLeaveHideDelay=this._hideDelay,o.afterHidden().pipe(ye(this._destroyed)).subscribe(()=>this._detach()),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),o.show(e)}hide(e=this.hideDelay){let i=this._tooltipInstance;i&&(i.isVisible()?i.hide(e):(i._cancelPendingAnimations(),this._detach()))}toggle(e){this._isTooltipVisible()?this.hide():this.show(void 0,e)}_isTooltipVisible(){return!!this._tooltipInstance&&this._tooltipInstance.isVisible()}_createOverlay(e){if(this._overlayRef){let a=this._overlayRef.getConfig().positionStrategy;if((!this.positionAtOrigin||!e)&&a._origin instanceof B)return this._overlayRef;this._detach()}let i=this._injector.get(qr).getAncestorScrollContainers(this._elementRef),r=`${this._cssClassPrefix}-${RS}`,o=Ms(this._injector,this.positionAtOrigin?e||this._elementRef:this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(!1).withViewportMargin(this._viewportMargin).withScrollableContainers(i).withPopoverLocation("global");return o.positionChanges.pipe(ye(this._destroyed)).subscribe(a=>{this._updateCurrentPositionClass(a.connectionPair),this._tooltipInstance&&a.scrollableViewProperties.isOverlayClipped&&this._tooltipInstance.isVisible()&&this._ngZone.run(()=>this.hide(0))}),this._overlayRef=Wi(this._injector,{direction:this._dir,positionStrategy:o,panelClass:this._overlayPanelClass?[...this._overlayPanelClass,r]:r,scrollStrategy:this._injector.get(p2)(),disableAnimations:this._animationsDisabled,eventPredicate:this._overlayEventPredicate}),this._updatePosition(this._overlayRef),this._overlayRef.detachments().pipe(ye(this._destroyed)).subscribe(()=>this._detach()),this._overlayRef.outsidePointerEvents().pipe(ye(this._destroyed)).subscribe(()=>this._tooltipInstance?._handleBodyInteraction()),this._overlayRef.keydownEvents().pipe(ye(this._destroyed)).subscribe(a=>{a.preventDefault(),a.stopPropagation(),this._ngZone.run(()=>this.hide(0))}),this._defaultOptions?.disableTooltipInteractivity&&this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`),this._dirSubscribed||(this._dirSubscribed=!0,this._dir.change.pipe(ye(this._destroyed)).subscribe(()=>{this._overlayRef&&this._updatePosition(this._overlayRef)})),this._overlayRef}_detach(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null}_updatePosition(e){let i=e.getConfig().positionStrategy,r=this._getOrigin(),o=this._getOverlayPosition();i.withPositions([this._addOffset(C(C({},r.main),o.main)),this._addOffset(C(C({},r.fallback),o.fallback))])}_addOffset(e){let i=b2,r=!this._dir||this._dir.value=="ltr";return e.originY==="top"?e.offsetY=-i:e.originY==="bottom"?e.offsetY=i:e.originX==="start"?e.offsetX=r?-i:i:e.originX==="end"&&(e.offsetX=r?i:-i),e}_getOrigin(){let e=!this._dir||this._dir.value=="ltr",i=this.position,r;i=="above"||i=="below"?r={originX:"center",originY:i=="above"?"top":"bottom"}:i=="before"||i=="left"&&e||i=="right"&&!e?r={originX:"start",originY:"center"}:(i=="after"||i=="right"&&e||i=="left"&&!e)&&(r={originX:"end",originY:"center"});let{x:o,y:a}=this._invertPosition(r.originX,r.originY);return{main:r,fallback:{originX:o,originY:a}}}_getOverlayPosition(){let e=!this._dir||this._dir.value=="ltr",i=this.position,r;i=="above"?r={overlayX:"center",overlayY:"bottom"}:i=="below"?r={overlayX:"center",overlayY:"top"}:i=="before"||i=="left"&&e||i=="right"&&!e?r={overlayX:"end",overlayY:"center"}:(i=="after"||i=="right"&&e||i=="left"&&!e)&&(r={overlayX:"start",overlayY:"center"});let{x:o,y:a}=this._invertPosition(r.overlayX,r.overlayY);return{main:r,fallback:{overlayX:o,overlayY:a}}}_updateTooltipMessage(){this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),Ge(()=>{this._tooltipInstance&&this._overlayRef.updatePosition()},{injector:this._injector}))}_setTooltipClass(e){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=e instanceof Set?Array.from(e):e,this._tooltipInstance._markForCheck())}_invertPosition(e,i){return this.position==="above"||this.position==="below"?i==="top"?i="bottom":i==="bottom"&&(i="top"):e==="end"?e="start":e==="start"&&(e="end"),{x:e,y:i}}_updateCurrentPositionClass(e){let{overlayY:i,originX:r,originY:o}=e,a;if(i==="center"?this._dir&&this._dir.value==="rtl"?a=r==="end"?"left":"right":a=r==="start"?"left":"right":a=i==="bottom"&&o==="top"?"above":"below",a!==this._currentPosition){let s=this._overlayRef;if(s){let l=`${this._cssClassPrefix}-${RS}-`;s.removePanelClass(l+this._currentPosition),s.addPanelClass(l+a)}this._currentPosition=a}}_setupPointerEnterEventsIfNeeded(){this._disabled||!this.message||!this._viewInitialized||this._eventCleanups.length||(this._isTouchPlatform()?this.touchGestures!=="off"&&(this._disableNativeGesturesIfNecessary(),this._addListener("touchstart",e=>{let i=e.targetTouches?.[0],r=i?{x:i.clientX,y:i.clientY}:void 0;this._setupPointerExitEventsIfNeeded(),this._touchstartTimeout&&clearTimeout(this._touchstartTimeout);let o=500;this._touchstartTimeout=setTimeout(()=>{this._touchstartTimeout=null,this.show(void 0,r)},this._defaultOptions?.touchLongPressShowDelay??o)})):this._addListener("mouseenter",e=>{this._setupPointerExitEventsIfNeeded();let i;e.x!==void 0&&e.y!==void 0&&(i=e),this.show(void 0,i)}))}_setupPointerExitEventsIfNeeded(){if(!this._pointerExitEventsInitialized){if(this._pointerExitEventsInitialized=!0,!this._isTouchPlatform())this._addListener("mouseleave",e=>{let i=e.relatedTarget;(!i||!this._overlayRef?.overlayElement.contains(i))&&this.hide()}),this._addListener("wheel",e=>{if(this._isTooltipVisible()){let i=this._document.elementFromPoint(e.clientX,e.clientY),r=this._elementRef.nativeElement;i!==r&&!r.contains(i)&&this.hide()}});else if(this.touchGestures!=="off"){this._disableNativeGesturesIfNecessary();let e=()=>{this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this.hide(this._defaultOptions?.touchendHideDelay)};this._addListener("touchend",e),this._addListener("touchcancel",e)}}}_addListener(e,i){this._eventCleanups.push(this._renderer.listen(this._elementRef.nativeElement,e,i,_2))}_isTouchPlatform(){let e=this._defaultOptions?.detectHoverCapability;return typeof e=="function"?!e():this._platform.IOS||this._platform.ANDROID?!0:this._platform.isBrowser?!!e&&this._mediaMatcher.matchMedia("(any-hover: none)").matches:!1}_disableNativeGesturesIfNecessary(){let e=this.touchGestures;if(e!=="off"){let i=this._elementRef.nativeElement,r=i.style;(e==="on"||i.nodeName!=="INPUT"&&i.nodeName!=="TEXTAREA")&&(r.userSelect=r.msUserSelect=r.webkitUserSelect=r.MozUserSelect="none"),(e==="on"||!i.draggable)&&(r.webkitUserDrag="none"),r.touchAction="none",r.webkitTapHighlightColor="transparent"}}_syncAriaDescription(e){this._ariaDescriptionPending||(this._ariaDescriptionPending=!0,this._ariaDescriber.removeDescription(this._elementRef.nativeElement,e,"tooltip"),this._isDestroyed||Ge({write:()=>{this._ariaDescriptionPending=!1,this.message&&!this.disabled&&this._ariaDescriber.describe(this._elementRef.nativeElement,this.message,"tooltip")}},{injector:this._injector}))}_overlayEventPredicate=e=>e.type==="keydown"?this._isTooltipVisible()&&e.keyCode===27&&!yt(e):!0;static \u0275fac=function(i){return new(i||t)};static \u0275dir=A({type:t,selectors:[["","matTooltip",""]],hostAttrs:[1,"mat-mdc-tooltip-trigger"],hostVars:2,hostBindings:function(i,r){i&2&&L("mat-mdc-tooltip-disabled",r.disabled)},inputs:{position:[0,"matTooltipPosition","position"],positionAtOrigin:[0,"matTooltipPositionAtOrigin","positionAtOrigin"],disabled:[0,"matTooltipDisabled","disabled"],showDelay:[0,"matTooltipShowDelay","showDelay"],hideDelay:[0,"matTooltipHideDelay","hideDelay"],touchGestures:[0,"matTooltipTouchGestures","touchGestures"],message:[0,"matTooltip","message"],tooltipClass:[0,"matTooltipClass","tooltipClass"]},exportAs:["matTooltip"]})}return t})(),OS=(()=>{class t{_changeDetectorRef=c(De);_elementRef=c(B);_isMultiline=!1;message;tooltipClass;_showTimeoutId;_hideTimeoutId;_triggerElement;_mouseLeaveHideDelay;_animationsDisabled=je();_tooltip;_closeOnInteraction=!1;_isVisible=!1;_onHide=new S;_showAnimation="mat-mdc-tooltip-show";_hideAnimation="mat-mdc-tooltip-hide";constructor(){}show(e){this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=setTimeout(()=>{this._toggleVisibility(!0),this._showTimeoutId=void 0},e)}hide(e){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId=setTimeout(()=>{this._toggleVisibility(!1),this._hideTimeoutId=void 0},e)}afterHidden(){return this._onHide}isVisible(){return this._isVisible}ngOnDestroy(){this._cancelPendingAnimations(),this._onHide.complete(),this._triggerElement=null}_handleBodyInteraction(){this._closeOnInteraction&&this.hide(0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_handleMouseLeave({relatedTarget:e}){(!e||!this._triggerElement.contains(e))&&(this.isVisible()?this.hide(this._mouseLeaveHideDelay):this._finalizeAnimation(!1))}_onShow(){this._isMultiline=this._isTooltipMultiline(),this._markForCheck()}_isTooltipMultiline(){let e=this._elementRef.nativeElement.getBoundingClientRect();return e.height>y2&&e.width>=C2}_handleAnimationEnd({animationName:e}){(e===this._showAnimation||e===this._hideAnimation)&&this._finalizeAnimation(e===this._showAnimation)}_cancelPendingAnimations(){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=this._hideTimeoutId=void 0}_finalizeAnimation(e){e?this._closeOnInteraction=!0:this.isVisible()||this._onHide.next()}_toggleVisibility(e){let i=this._tooltip.nativeElement,r=this._showAnimation,o=this._hideAnimation;if(i.classList.remove(e?o:r),i.classList.add(e?r:o),this._isVisible!==e&&(this._isVisible=e,this._changeDetectorRef.markForCheck()),e&&!this._animationsDisabled&&typeof getComputedStyle=="function"){let a=getComputedStyle(i);(a.getPropertyValue("animation-duration")==="0s"||a.getPropertyValue("animation-name")==="none")&&(this._animationsDisabled=!0)}e&&this._onShow(),this._animationsDisabled&&(i.classList.add("_mat-animation-noopable"),this._finalizeAnimation(e))}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=x({type:t,selectors:[["mat-tooltip-component"]],viewQuery:function(i,r){if(i&1&&Ce(f2,7),i&2){let o;O(o=N())&&(r._tooltip=o.first)}},hostAttrs:["aria-hidden","true"],hostBindings:function(i,r){i&1&&M("mouseleave",function(a){return r._handleMouseLeave(a)})},decls:4,vars:5,consts:[["tooltip",""],[1,"mdc-tooltip","mat-mdc-tooltip",3,"animationend"],[1,"mat-mdc-tooltip-surface","mdc-tooltip__surface"]],template:function(i,r){i&1&&(Me(0,"div",1,0),Fn("animationend",function(a){return r._handleAnimationEnd(a)}),Me(2,"div",2),g(3),ke()()),i&2&&(St(r.tooltipClass),L("mdc-tooltip--multiline",r._isMultiline),p(3),ae(r.message))},styles:[`.mat-mdc-tooltip {
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
`],encapsulation:2,changeDetection:0})}return t})();var lh=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=$({type:t});static \u0275inj=z({imports:[Wo,Wn,ve,$n]})}return t})();var ch=class t{teacher=ar.required();static \u0275fac=function(e){return new(e||t)};static \u0275cmp=x({type:t,selectors:[["main-presence-indicator"]],inputs:{teacher:[1,"teacher"]},decls:3,vars:5,consts:[["tooltip","matTooltip"],[3,"matTooltip"]],template:function(e,i){e&1&&(m(0,"p",1,0),g(2,"\u2B24"),f()),e&2&&(Fl(Pl("color: ",i.teacher().color)),R("matTooltip",Ai(i.teacher().name)))},dependencies:[lh,na],styles:["p[_ngcontent-%COMP%]{display:flex;margin:0;padding:0;cursor:pointer;text-align:center;-webkit-user-select:none;user-select:none}"]})};var ia=!0;var qn=class t{observedSocket=new pn(1);connectedSocket=null;mailboxes={attendanceMessages:new S,presenceMessages:new S,journalMessages:new S,chatMessages:new S,notifications:new S};rooms={attendance:"",journal:"",chat:""};toChatMessage(n){if(typeof n!="object"||n===null)return null;let e=n;return typeof e.senderId!="number"||typeof e.recipientId!="number"||typeof e.chatMessage!="string"||typeof e.timestamp!="string"?null:{senderId:e.senderId,recipientId:e.recipientId,chatMessage:e.chatMessage,timestamp:e.timestamp}}deliverMessage(n){let e=this.toChatMessage(n);if(e){this.mailboxes.chatMessages.next(e);return}switch(n.type){case"ATTENDANCE":this.mailboxes.attendanceMessages.next(n);break;case"DOC_OPERATION":this.mailboxes.journalMessages.next(n);break;case"PRESENCE_JOIN":case"PRESENCE_LEAVE":case"PRESENCE_STATE":this.mailboxes.presenceMessages.next(n);break;case"CHAT_MESSAGE":let i=this.toChatMessage(n.message);i&&this.mailboxes.chatMessages.next(i);break;case"NOTIFICATION":this.mailboxes.notifications.next(n);break}}connect(n){this.observedSocket=new pn(1);let e=sessionStorage.getItem("token"),i=new WebSocket(`${n}?token=${e}`);i.onmessage=r=>{let o=JSON.parse(r.data);ia&&console.log("[Websocket] - Received:",o),this.deliverMessage(o)},i.onclose=r=>{ia&&console.log("[Websocket] - Disconnected",r.code,r.reason)},i.onopen=()=>{ia&&console.log("[Websocket] - Connected"),this.observedSocket.next(i),this.connectedSocket=i}}disconnect(){if(this.connectedSocket==null){console.error("[Websocket] - Tried disconnecting an unconnected websocket.");return}for(let n of Object.values(this.rooms))n!==""&&this.connectedSocket.send(JSON.stringify({type:"unsubscribe",room:n}));this.connectedSocket.close(),this.observedSocket.complete()}async ensureConnected(){return new Promise(n=>{this.observedSocket.subscribe(()=>{n()})})}setRoom(n,e){if(this.connectedSocket==null){console.error("[Websocket] - Attempted to set room of an unconnected socket");return}this.rooms[n]!==""&&this.leaveRoom(n),this.rooms[n]=e,this.connectedSocket.readyState==this.connectedSocket.OPEN&&(ia&&console.log("[Websocket] - Subscribing:",JSON.stringify({type:"subscribe",room:e})),this.connectedSocket.send(JSON.stringify({type:"subscribe",room:e})))}setAttendanceRoom(n){this.setRoom("attendance",n)}setJournalRoom(n){this.setRoom("journal",n)}setChatRoom(n){this.setRoom("chat",n)}leaveRoom(n){if(this.connectedSocket==null){console.error("[Websocket] - Tried to leave room on unconnected socket.");return}this.rooms[n]!=""&&(ia&&console.log("[Websocket] - Unsubscribing:",JSON.stringify({type:"unsubscribe",room:this.rooms[n]})),this.connectedSocket.send(JSON.stringify({type:"unsubscribe",room:this.rooms[n]})),this.rooms[n]="")}leaveAttendanceRoom(){this.leaveRoom("attendance")}leaveJournalRoom(){this.leaveRoom("journal")}sendMessage(n,e){if(this.connectedSocket==null){console.error("[Websocket] - Tried to send message on unconnected socket.");return}e.room=this.rooms[n=="ATTENDANCE"?"attendance":n=="CHAT_MESSAGE"?"chat":"journal"],e.type=n;let i=JSON.stringify(C({},e));ia&&console.log("[Websocket] - Sending off: ",i),this.connectedSocket.send(i)}sendAttendanceUpdate(n){this.sendMessage("ATTENDANCE",n)}sendJournalUpdate(n){this.sendMessage("DOC_OPERATION",n)}sendChatMessage(n){let e=JSON.stringify({type:"CHAT_MESSAGE",room:this.rooms.chat,message:n});ia&&console.log("[Websocket] - Sending off: ",e),this.connectedSocket?.send(e)}getMessages(n){return this.mailboxes[n].asObservable()}static \u0275fac=function(e){return new(e||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})};var to=class t{socketService=Kh(qn);connectedTeachers=E([]);_teacherUpdates=new S;teacherUpdates=this._teacherUpdates.asObservable();async init(){await this.socketService.ensureConnected(),this.socketService.getMessages("presenceMessages").subscribe(n=>{this.handleMessage(n)})}spoofTeacherUpdate(){console.log("Spoofing teacher"),this._teacherUpdates.next({name:"Spoof",userId:-1,room:"Spoof",color:"#ffffff"})}handleMessage(n){switch(n.type){case"PRESENCE_STATE":this.handleStateMessage(n);break;case"PRESENCE_JOIN":this.handleJoinMessage(n);break;case"PRESENCE_LEAVE":this.handleLeaveMessage(n);break;default:console.error("WsPresenceChangeMessage with incorrect type in presence service")}}handleLeaveMessage(n){n.room||console.error("Incorrectly formatted leave message in presence service: ",n);let e={userId:n.userId,name:n.name,room:n.room,color:n.color},i=this.connectedTeachers().filter(r=>r.userId!=n.userId);this.connectedTeachers.set(i),console.log("Someone left, new status: ",this.connectedTeachers()),this._teacherUpdates.next(e)}handleJoinMessage(n){n.room||console.error("Incorrectly formatted join message in presence service: ",n);let e=this.connectedTeachers().findIndex(r=>r.userId==n.userId),i={userId:n.userId,name:n.name,room:n.room,color:n.color};if(e==-1){let r=this.connectedTeachers();r.push(i),this.connectedTeachers.set(r)}else{let r=this.connectedTeachers();r[e].room=n.room,this.connectedTeachers.set(r)}console.log("Someone joined, new status: ",this.connectedTeachers()),this._teacherUpdates.next(i)}handleStateMessage(n){if(n.users){let e=n.users.map(i=>C({},i));this.connectedTeachers.set(e)}else console.error("[Presence] - State message received without user array")}static \u0275fac=function(e){return new(e||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})};var w2=(t,n)=>n.id;function D2(t,n){if(t&1&&T(0,"main-presence-indicator",1),t&2){let e=n.$implicit;R("teacher",e)}}var ks=class t{presence=c(to);filter=ar.required();isGroup=ar("");teachers=E([]);ngOnInit(){this.presence.teacherUpdates.subscribe(()=>{this.teachers.set(this.presence.connectedTeachers().filter(n=>{let e=n.room.split(":"),i=e[1],r=e[2];return(this.isGroup()!==""&&i==="group"||this.isGroup()===""&&i==="child")&&r===this.filter()}))}),this.teachers.set(this.presence.connectedTeachers().filter(n=>{let e=this.isGroup()==""?"child:"+this.filter():"group:"+this.filter();return n.room.includes(e)}))}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=x({type:t,selectors:[["main-presence-container"]],inputs:{filter:[1,"filter"],isGroup:[1,"isGroup"]},decls:3,vars:0,consts:[[1,"container"],[3,"teacher"]],template:function(e,i){e&1&&(m(0,"mat-card",0),He(1,D2,1,1,"main-presence-indicator",1,w2),f()),e&2&&(p(),Ue(i.teachers()))},dependencies:[ch,bt],styles:["[_nghost-%COMP%]{height:fit-content;width:fit-content}.container[_ngcontent-%COMP%]{display:flex;flex-direction:row;padding-left:1em;padding-right:1em}.container[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{margin-left:.1em;margin-right:.1em}"]})};var x2=()=>({name:"alla",id:0}),FS=(t,n)=>n.id;function E2(t,n){if(t&1){let e=Le();m(0,"mat-option",8),M("click",function(){let r=ie(e).$implicit,o=D();return re(o.handleSelection(r))}),g(1),f()}if(t&2){let e=n.$implicit;R("value",e),p(),fe(" ",e.name," ")}}function M2(t,n){t&1&&T(0,"mat-divider")}function S2(t,n){if(t&1){let e=Le();m(0,"button",13),M("click",function(){let r=ie(e).$implicit,o=D();return re(o.onSelectChild(r))}),m(1,"div",14),T(2,"main-presence-container",15),f(),m(3,"span",16),g(4),f(),m(5,"div",14),T(6,"attendance-box",17),f()(),j(7,M2,1,0,"mat-divider")}if(t&2){let e=n.$implicit,i=n.$index,r=n.$count;p(2),R("filter",Ai(e.id)),p(2),fe("",e.name," "),p(2),R("disabled",!0)("childSignal",e),p(),H(i!==r-1?7:-1)}}var As=class t{children=E([]);childSignal=Ae.required();searchQuery=E("");groupSignal=Ae.required();contentSignal=Ae.required();allGroups=Ae.required();stupidFix=E(0);searchedChildren=_t(()=>{this.stupidFix();let n=this.searchQuery();return this.children().filter(e=>e.name.toLowerCase().includes(n)).sort()});groupAttendance=_t(()=>this.searchedChildren().filter(n=>n.status==="CHECKED_IN").length);groupAbsent=_t(()=>this.searchedChildren().length-this.groupAttendance());attendanceService=c(Yr);childService=c(sh);constructor(){this.attendanceService.getAttendanceChanges.subscribe(n=>{let e=this.children().find(i=>i.id===n.childId);e!=null&&(e.status=n.status,this.stupidFix.update(i=>i+1))}),Jt(()=>{this.groupSignal().id!==0&&this.loadChildren()})}onSearchUpdated(n){this.searchQuery.set(n)}onSelectChild(n){this.childSignal.set(n),this.contentSignal.set("childView")}loadChildren(){this.childService.getChildrenByGroup(this.groupSignal().id).subscribe({next:n=>{this.children.set(n)}})}showAllChildren(){this.childService.getChildren().subscribe({next:n=>{this.children.set(n)}})}handleSelection(n){if(n.name==="alla"){this.contentSignal.set("homeView"),this.groupSignal.set({name:"",id:0}),this.showAllChildren();return}this.groupSignal.set(n),this.contentSignal.set("groupView")}handleWebsocketMessage(n){let e=this.children().find(r=>r.id===n.childId);if(!e){console.error("Attendance message received from other group. Child not found.");return}this.attendanceService.getSignal(e.id,zi()).set(n.status),e.status=n.status,this.stupidFix.update(r=>r+1)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=x({type:t,selectors:[["main-child-list"]],inputs:{childSignal:[1,"childSignal"],groupSignal:[1,"groupSignal"],contentSignal:[1,"contentSignal"],allGroups:[1,"allGroups"]},outputs:{childSignal:"childSignalChange",groupSignal:"groupSignalChange",contentSignal:"contentSignalChange",allGroups:"allGroupsChange"},decls:31,vars:5,consts:[["searchQuery",""],[1,"child-list-container"],[1,"list-topper"],["subscriptSizing","dynamic",1,"search"],[1,"badge"],["matInput","","type","search",3,"input"],["subscriptSizing","dynamic",1,"pick-class"],[3,"value"],[3,"click","value"],[1,"list-class"],[1,"stats-card"],[1,"stats"],[1,"stats-text"],["mat-list-item","",3,"click"],["matListItemMeta","",1,"meta-container"],[3,"filter"],["matListItemTitle",""],[3,"disabled","childSignal"]],template:function(e,i){if(e&1){let r=Le();m(0,"div",1)(1,"mat-card",2)(2,"mat-form-field",3)(3,"mat-label",4)(4,"mat-icon"),g(5,"search"),f(),g(6,"S\xF6k"),f(),m(7,"input",5,0),M("input",function(){ie(r);let a=an(8);return re(i.onSearchUpdated(a.value.toLowerCase()))}),f()(),m(9,"mat-form-field",6)(10,"mat-label",4)(11,"mat-icon"),g(12,"groups"),f(),g(13," V\xE4lj klass"),f(),m(14,"mat-select"),He(15,E2,2,2,"mat-option",7,FS),m(17,"mat-option",8),M("click",function(){return i.handleSelection({name:"alla",id:0})}),g(18,"Alla elever"),f()()()(),m(19,"mat-action-list",9),He(20,S2,8,6,null,null,FS),f(),T(22,"mat-divider"),m(23,"mat-card",10)(24,"mat-card-content",11)(25,"p",12),g(26),f(),m(27,"p",12),g(28),f(),m(29,"p",12),g(30),f()()()()}e&2&&(p(15),Ue(i.allGroups()),p(2),R("value",T_(4,x2)),p(3),Ue(i.searchedChildren()),p(6),fe("N\xE4rvarande: ",i.groupAttendance()),p(2),fe("Icke n\xE4rvarande: ",i.groupAbsent()),p(2),fe("Antal elever: ",i.children().length))},dependencies:[eo,oh,Jr,tn,br,ta,Bv,Ui,Is,kt,Tt,Hn,zn,Qt,dn,Pt,Bn,bt,ln,Kr,Zr,Gn,ks],styles:['[_nghost-%COMP%]{background-color:var(--mat-sys-primary-container);width:100%;border:1px solid var(--mat-sys-outline-variant);color:var(--mat-sys-on-primary-container);box-sizing:border-box;border-radius:5px;flex:1;display:flex;flex-direction:column;min-height:0;height:100%;overflow:hidden}.mat-mdc-action-list[_ngcontent-%COMP%]{padding:0;border-radius:5px;height:100%}.mdc-list-item[_ngcontent-%COMP%]{color:var(--mat-sys-on-primary-container);background-color:var(--mat-sys-surface-variant);box-shadow:var(--mat-sys-level1)}.child-list-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%}.list-class[_ngcontent-%COMP%]{background-color:var(--mat-sys-surface-dim);flex:1;overflow-y:auto}.badge[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem;font:var(--mat-sys-label-large);opacity:.75}.badge[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:1.1rem;width:1.1rem;height:1.1rem}[_nghost-%COMP%]     .child-list-container .pick-class .mdc-notched-outline__leading, [_nghost-%COMP%]     .child-list-container .pick-class .mdc-notched-outline__notch, [_nghost-%COMP%]     .child-list-container .pick-class .mdc-notched-outline__trailing{border-color:var(--mat-sys-inverse-primary)!important}[_nghost-%COMP%]     .child-list-container .pick-class .mat-mdc-text-field-wrapper{background-color:var(--mat-sys-inverse-primary)!important}[_nghost-%COMP%]     .child-list-container mat-form-field:not(.pick-class) .mdc-notched-outline__leading, [_nghost-%COMP%]     .child-list-container mat-form-field:not(.pick-class) .mdc-notched-outline__notch, [_nghost-%COMP%]     .child-list-container mat-form-field:not(.pick-class) .mdc-notched-outline__trailing{border-color:var(--mat-sys-inverse-primary)!important}[_nghost-%COMP%]     .child-list-container mat-form-field:not(.pick-class) .mat-mdc-text-field-wrapper{background-color:var(--mat-sys-inverse-primary)!important}.list-topper[_ngcontent-%COMP%]{display:flex;flex-direction:row;border-bottom-left-radius:0!important;border-bottom-right-radius:0!important}.stats[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;gap:1em;background:var(--mat-sys-inverse-primary);flex:1;padding:.5em}.stats[_ngcontent-%COMP%]:after{content:""}.stats[_ngcontent-%COMP%]:before{content:""}.stats[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-weight:500;padding:0;margin:.1em}.pick-class[_ngcontent-%COMP%]{flex:.5}.search[_ngcontent-%COMP%]{flex:1}.stats-text[_ngcontent-%COMP%]{margin:1em;font:var(--mat-sys-title-small);color:var(--mat-sys-on-secondary-container)}.cornerize[_ngcontent-%COMP%]{border-top-right-radius:0%!important;border-top-left-radius:0%!important}  mat-card>mat-form-field>div:nth-child(1){border-top-right-radius:0;border-top-left-radius:0}']})};var dh=class{getDiff(n,e,i){let r=n.length-e.length,o=this.surroundingMatch(n,e,i,r)?r>0?"DELETE":"INSERT":"REPLACEMENT",a={operation:o,idx:i,value:"",length:0};switch(o){case"DELETE":a.length=r;break;case"INSERT":a.idx=i+r,a.value=e.substring(i+r,i);break;case"REPLACEMENT":{let s=this.findFirstDiff(n,e),l=this.findLastDiff(n,e);switch(l){case"prevOutOfBounds":a.idx=0,a.value=e.substring(0,0-r),a.operation="INSERT";break;case"newOutOfBounds":a.idx=0,a.length=r,a.operation="DELETE";break;default:a.value=e.substring(s,l),a.length=r+a.value.length,a.idx=s;break}}}return a}surroundingMatch(n,e,i,r){switch(r<0){case!0:return n.substring(0,i+r)===e.substring(0,i+r)&&n.substring(i+r)===e.substring(i);case!1:return n.substring(0,i)===e.substring(0,i)&&n.substring(i+r)===e.substring(i)}}findFirstDiff(n,e){let i=0;for(;;)if(n.charAt(i)===e.charAt(i))i++;else return i}findLastDiff(n,e){let i=1;for(;;){if(i>n.length)return"prevOutOfBounds";if(i>e.length)return"newOutOfBounds";if(n.charAt(n.length-i)===e.charAt(e.length-i))i++;else return e.length-i+1}}};var uh=class{transformClient(n,e){switch(n.type){case"INSERT":return this.transformInsert(n,e);case"DELETE":return this.transformDelete(n,e)}}transformInsert(n,e){let i=n;switch(e.type){case"INSERT":e.position<=n.position&&(i.position+=e.text.length);break;case"DELETE":e.position<n.position&&(i.position=Math.max(e.position,i.position-=e.length));break}return i}transformDelete(n,e){let i=n;switch(e.type){case"INSERT":e.position<=i.position?i.position+=e.text.length:e.position<i.position+i.length&&(i.length+=e.text.length);break;case"DELETE":let r=e.position+e.length;if(r<=i.position)i.position-=e.length;else if(!(e.position>=i.position+i.length)){let o=Math.max(i.position,e.position),a=Math.min(i.position+i.length,r);i.length=Math.max(0,i.length-(a-o)),i.position=Math.min(i.position,e.position)}break}return i}};var Rs=class t{baseUrl=`${at.apiUrl}/api/journal`;http=c(vt);getJournal(n,e,i){let r=new Nt;if(i==="childView")r=r.set("childId",n);else if(i==="groupView")r=r.set("groupId",e);else return console.error(`Attempted to fetch journal with unknown view: ${i}`),uo(()=>new Error("Invalid view type provided to JournalService"));return this.http.get(this.baseUrl,{params:r})}getJournalByDate(n,e){let i=new Nt;return i=i.set("childId",n),i=i.set("date",e),this.http.get(this.baseUrl,{params:i})}static \u0275fac=function(e){return new(e||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})};var I2=["journalContent"],mh=class t{journalSocket=c(qn);differ=new dh;operationalTransformer=new uh;journalService=c(Rs);textArea=ri.required("journalContent");childSignal=Ae.required();contentSignal=Ae.required();groupSignal=Ae.required();async ngOnInit(){await this.journalSocket.ensureConnected(),this.journalSocket.getMessages("journalMessages").subscribe(n=>{let e=n,i=e.operation;if(this.isMyOwnAck(e))this.inFlight.shift();else{for(let r of this.inFlight)i=this.operationalTransformer.transformClient(i,r);this.applyToLocalContent(i)}this.serverRevision=e.serverRevision}),this.loadJournal()}ngOnChanges(){let n=this.getRoom();this.journalSocket.setJournalRoom(n),this.loadJournal()}text=E("");prevText="";serverRevision=0;sequence=0;inFlight=[];getRoom(){return this.contentSignal()==="childView"?"journal:child:"+this.childSignal().id+":"+zi():"journal:group:"+this.groupSignal().id+":"+zi()}isMyOwnAck(n){return n.userId.toString()===sessionStorage.getItem("UserId")&&this.inFlight.length>0}loadJournal(){this.journalService.getJournal(this.childSignal().id,this.groupSignal().id,this.contentSignal()).subscribe({next:n=>{this.text.set(n.content),this.serverRevision=n.serverRevision,this.sequence=0,this.inFlight=[]}})}applyToLocalContent(n){let e=n.position;switch(n.type){case"INSERT":this.textArea().nativeElement.setRangeText(n.text,e,e,"preserve");break;case"DELETE":this.textArea().nativeElement.setRangeText("",e,e+n.length,"preserve");break}this.text.set(this.textArea().nativeElement.value),this.prevText=this.text()}ngOnDestroy(){this.journalSocket.leaveJournalRoom()}onInput(n){this.sequence++;let e=n.target,i=e.value;this.prevText=this.text();let r=e.selectionStart,o=this.differ.getDiff(this.prevText,i,r);this.text.set(i);let a;switch(o.operation){case"DELETE":a={type:"DELETE",position:o.idx,length:o.length};break;case"INSERT":a={type:"INSERT",position:o.idx,text:o.value};break;case"REPLACEMENT":a={type:"DELETE",position:o.idx,length:o.length},this.sendOperation(a),this.sequence++,a={type:"INSERT",position:o.idx,text:o.value};break}this.sendOperation(a)}sendOperation(n){let e={clientRevision:this.serverRevision,operation:n,sequence:this.sequence};this.inFlight.push(n),this.journalSocket.sendJournalUpdate(e)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=x({type:t,selectors:[["main-live-journal"]],viewQuery:function(e,i){e&1&&Ii(i.textArea,I2,5),e&2&&Ti()},inputs:{childSignal:[1,"childSignal"],contentSignal:[1,"contentSignal"],groupSignal:[1,"groupSignal"]},outputs:{childSignal:"childSignalChange",contentSignal:"contentSignalChange",groupSignal:"groupSignalChange"},features:[Pe],decls:3,vars:1,consts:[["journalContent",""],["matInput","",3,"input","ngModel"]],template:function(e,i){e&1&&(m(0,"mat-form-field")(1,"textarea",1,0),M("input",function(o){return i.onInput(o)}),f()()),e&2&&(p(),R("ngModel",i.text()))},dependencies:[Tt,Qt,Wr,un,Un,pr],styles:["mat-tab-group[_ngcontent-%COMP%]{height:100%}mat-tab-group[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{height:100%}mat-mdc-tab-body-wrapper[_ngcontent-%COMP%]{height:100%}  .mat-mdc-form-field-flex{height:100%}  .mat-mdc-form-field-infix{height:100%}mat-form-field[_ngcontent-%COMP%]{width:100%;box-sizing:border-box;height:100%}textarea[_ngcontent-%COMP%]{width:100%;height:100%!important;min-height:20vh;margin-bottom:1em;padding:0;box-sizing:content-box;resize:none;overflow-y:scroll}"]})};var fh=class t{url=`${at.apiUrl}/api/group`;http=c(vt);getGroups(){return this.http.get(this.url)}static \u0275fac=function(e){return new(e||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})};var Os=class t{url=`${at.apiUrl}/api/user/teacher`;teachersUrl=`${at.apiUrl}/api/user/teachers`;colorUrl=`${at.apiUrl}/api/user/color`;http=c(vt);getUser(n){let e=new Nt().set("teacherId",n);return this.http.get(this.url,{params:e})}getUsers(){return this.http.get(this.teachersUrl)}updateColor(n){return this.http.patch(this.colorUrl,{color:n})}static \u0275fac=function(e){return new(e||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})};function T2(t,n){if(t&1){let e=Le();m(0,"div",1)(1,"button",2),M("click",function(){ie(e);let r=D();return re(r.action())}),g(2),f()()}if(t&2){let e=D();p(2),fe(" ",e.data.action," ")}}var k2=["label"];function A2(t,n){}var R2=Math.pow(2,31)-1,$c=class{_overlayRef;instance;containerInstance;_afterDismissed=new S;_afterOpened=new S;_onAction=new S;_durationTimeoutId;_dismissedByAction=!1;constructor(n,e){this._overlayRef=e,this.containerInstance=n,n._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(n){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(n,R2))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}},PS=new y("MatSnackBarData"),Ns=class{politeness="polite";announcementMessage="";viewContainerRef;duration=0;panelClass;direction;data=null;horizontalPosition="center";verticalPosition="bottom"},O2=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=A({type:t,selectors:[["","matSnackBarLabel",""]],hostAttrs:[1,"mat-mdc-snack-bar-label","mdc-snackbar__label"]})}return t})(),N2=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=A({type:t,selectors:[["","matSnackBarActions",""]],hostAttrs:[1,"mat-mdc-snack-bar-actions","mdc-snackbar__actions"]})}return t})(),F2=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=A({type:t,selectors:[["","matSnackBarAction",""]],hostAttrs:[1,"mat-mdc-snack-bar-action","mdc-snackbar__action"]})}return t})(),P2=(()=>{class t{snackBarRef=c($c);data=c(PS);constructor(){}action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=x({type:t,selectors:[["simple-snack-bar"]],hostAttrs:[1,"mat-mdc-simple-snack-bar"],exportAs:["matSnackBar"],decls:3,vars:2,consts:[["matSnackBarLabel",""],["matSnackBarActions",""],["matButton","","matSnackBarAction","",3,"click"]],template:function(i,r){i&1&&(m(0,"div",0),g(1),f(),j(2,T2,3,1,"div",1)),i&2&&(p(),fe(" ",r.data.message,`
`),p(),H(r.hasAction?2:-1))},dependencies:[zt,O2,N2,F2],styles:[`.mat-mdc-simple-snack-bar {
  display: flex;
}
.mat-mdc-simple-snack-bar .mat-mdc-snack-bar-label {
  max-height: 50vh;
  overflow: auto;
}
`],encapsulation:2,changeDetection:0})}return t})(),Pb="_mat-snack-bar-enter",Lb="_mat-snack-bar-exit",L2=(()=>{class t extends Gr{_ngZone=c(V);_elementRef=c(B);_changeDetectorRef=c(De);_platform=c(ue);_animationsDisabled=je();snackBarConfig=c(Ns);_document=c(Y);_trackedModals=new Set;_enterFallback;_exitFallback;_injector=c(G);_announceDelay=150;_announceTimeoutId;_destroyed=!1;_portalOutlet;_onAnnounce=new S;_onExit=new S;_onEnter=new S;_animationState="void";_live;_label;_role;_liveElementId=c(Ke).getId("mat-snack-bar-container-live-");constructor(){super();let e=this.snackBarConfig;e.politeness==="assertive"&&!e.announcementMessage?this._live="assertive":e.politeness==="off"?this._live="off":this._live="polite",this._platform.FIREFOX&&(this._live==="polite"&&(this._role="status"),this._live==="assertive"&&(this._role="alert"))}attachComponentPortal(e){this._assertNotAttached();let i=this._portalOutlet.attachComponentPortal(e);return this._afterPortalAttached(),i}attachTemplatePortal(e){this._assertNotAttached();let i=this._portalOutlet.attachTemplatePortal(e);return this._afterPortalAttached(),i}attachDomPortal=e=>{this._assertNotAttached();let i=this._portalOutlet.attachDomPortal(e);return this._afterPortalAttached(),i};onAnimationEnd(e){e===Lb?this._completeExit():e===Pb&&(clearTimeout(this._enterFallback),this._ngZone.run(()=>{this._onEnter.next(),this._onEnter.complete()}))}enter(){this._destroyed||(this._animationState="visible",this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce(),this._animationsDisabled?Ge(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(Pb)))},{injector:this._injector}):(clearTimeout(this._enterFallback),this._enterFallback=setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-snack-bar-fallback-visible"),this.onAnimationEnd(Pb)},200)))}exit(){return this._destroyed?q(void 0):(this._ngZone.run(()=>{this._animationState="hidden",this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.setAttribute("mat-exit",""),clearTimeout(this._announceTimeoutId),this._animationsDisabled?Ge(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(Lb)))},{injector:this._injector}):(clearTimeout(this._exitFallback),this._exitFallback=setTimeout(()=>this.onAnimationEnd(Lb),200))}),this._onExit)}ngOnDestroy(){this._destroyed=!0,this._clearFromModals(),this._completeExit()}_completeExit(){clearTimeout(this._exitFallback),queueMicrotask(()=>{this._onExit.next(),this._onExit.complete()})}_afterPortalAttached(){let e=this._elementRef.nativeElement,i=this.snackBarConfig.panelClass;i&&(Array.isArray(i)?i.forEach(a=>e.classList.add(a)):e.classList.add(i)),this._exposeToModals();let r=this._label.nativeElement,o="mdc-snackbar__label";r.classList.toggle(o,!r.querySelector(`.${o}`))}_exposeToModals(){let e=this._liveElementId,i=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let r=0;r<i.length;r++){let o=i[r],a=o.getAttribute("aria-owns");this._trackedModals.add(o),a?a.indexOf(e)===-1&&o.setAttribute("aria-owns",a+" "+e):o.setAttribute("aria-owns",e)}}_clearFromModals(){this._trackedModals.forEach(e=>{let i=e.getAttribute("aria-owns");if(i){let r=i.replace(this._liveElementId,"").trim();r.length>0?e.setAttribute("aria-owns",r):e.removeAttribute("aria-owns")}}),this._trackedModals.clear()}_assertNotAttached(){this._portalOutlet.hasAttached()}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{if(this._destroyed)return;let e=this._elementRef.nativeElement,i=e.querySelector("[aria-hidden]"),r=e.querySelector("[aria-live]");if(i&&r){let o=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&i.contains(document.activeElement)&&(o=document.activeElement),i.removeAttribute("aria-hidden"),r.appendChild(i),o?.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=x({type:t,selectors:[["mat-snack-bar-container"]],viewQuery:function(i,r){if(i&1&&Ce(mn,7)(k2,7),i&2){let o;O(o=N())&&(r._portalOutlet=o.first),O(o=N())&&(r._label=o.first)}},hostAttrs:[1,"mdc-snackbar","mat-mdc-snack-bar-container"],hostVars:6,hostBindings:function(i,r){i&1&&M("animationend",function(a){return r.onAnimationEnd(a.animationName)})("animationcancel",function(a){return r.onAnimationEnd(a.animationName)}),i&2&&L("mat-snack-bar-container-enter",r._animationState==="visible")("mat-snack-bar-container-exit",r._animationState==="hidden")("mat-snack-bar-container-animations-enabled",!r._animationsDisabled)},features:[_e],decls:6,vars:3,consts:[["label",""],[1,"mdc-snackbar__surface","mat-mdc-snackbar-surface"],[1,"mat-mdc-snack-bar-label"],["aria-hidden","true"],["cdkPortalOutlet",""]],template:function(i,r){i&1&&(m(0,"div",1)(1,"div",2,0)(3,"div",3),ct(4,A2,0,0,"ng-template",4),f(),T(5,"div"),f()()),i&2&&(p(5),Z("aria-live",r._live)("role",r._role)("id",r._liveElementId))},dependencies:[mn],styles:[`@keyframes _mat-snack-bar-enter {
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
`],encapsulation:2})}return t})(),V2=new y("mat-snack-bar-default-options",{providedIn:"root",factory:()=>new Ns}),LS=(()=>{class t{_live=c(vc);_injector=c(G);_breakpointObserver=c(_c);_parentSnackBar=c(t,{optional:!0,skipSelf:!0});_defaultConfig=c(V2);_animationsDisabled=je();_snackBarRefAtThisLevel=null;simpleSnackBarComponent=P2;snackBarContainerComponent=L2;handsetCssClass="mat-mdc-snack-bar-handset";get _openedSnackBarRef(){let e=this._parentSnackBar;return e?e._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(e){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=e:this._snackBarRefAtThisLevel=e}constructor(){}openFromComponent(e,i){return this._attach(e,i)}openFromTemplate(e,i){return this._attach(e,i)}open(e,i="",r){let o=C(C({},this._defaultConfig),r);return o.data={message:e,action:i},o.announcementMessage===e&&(o.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,o)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(e,i){let r=i&&i.viewContainerRef&&i.viewContainerRef.injector,o=G.create({parent:r||this._injector,providers:[{provide:Ns,useValue:i}]}),a=new Mn(this.snackBarContainerComponent,i.viewContainerRef,o),s=e.attach(a);return s.instance.snackBarConfig=i,s.instance}_attach(e,i){let r=C(C(C({},new Ns),this._defaultConfig),i),o=this._createOverlay(r),a=this._attachSnackBarContainer(o,r),s=new $c(a,o);if(e instanceof pt){let l=new Sn(e,null,{$implicit:r.data,snackBarRef:s});s.instance=a.attachTemplatePortal(l)}else{let l=this._createInjector(r,s),d=new Mn(e,void 0,l),u=a.attachComponentPortal(d);s.instance=u.instance}return this._breakpointObserver.observe($E.HandsetPortrait).pipe(ye(o.detachments())).subscribe(l=>{o.overlayElement.classList.toggle(this.handsetCssClass,l.matches)}),r.announcementMessage&&a._onAnnounce.subscribe(()=>{this._live.announce(r.announcementMessage,r.politeness)}),this._animateSnackBar(s,r),this._openedSnackBarRef=s,this._openedSnackBarRef}_animateSnackBar(e,i){e.afterDismissed().subscribe(()=>{this._openedSnackBarRef==e&&(this._openedSnackBarRef=null),i.announcementMessage&&this._live.clear()}),i.duration&&i.duration>0&&e.afterOpened().subscribe(()=>e._dismissAfter(i.duration)),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{e.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):e.containerInstance.enter()}_createOverlay(e){let i=new $i;i.direction=e.direction;let r=vr(this._injector),o=e.direction==="rtl",a=e.horizontalPosition==="left"||e.horizontalPosition==="start"&&!o||e.horizontalPosition==="end"&&o,s=!a&&e.horizontalPosition!=="center";return a?r.left("0"):s?r.right("0"):r.centerHorizontally(),e.verticalPosition==="top"?r.top("0"):r.bottom("0"),i.positionStrategy=r,i.disableAnimations=this._animationsDisabled,Wi(this._injector,i)}_createInjector(e,i){let r=e&&e.viewContainerRef&&e.viewContainerRef.injector;return G.create({parent:r||this._injector,providers:[{provide:$c,useValue:i},{provide:PS,useValue:e.data}]})}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var hh=class t{_snackBar=c(LS);userService=c(Os);teacherColor=Ae("#ffffff");userDataObservable=this.userService.getUser(Number(sessionStorage.getItem("UserId")));currentUser=this.userDataObservable.pipe();ngOnInit(){this.userDataObservable.subscribe(n=>{this.teacherColor.set(n.color)})}updateColor(){console.log("From updatecolor",this.teacherColor()),this.userService.updateColor(this.teacherColor()).subscribe(()=>{this._snackBar.open("Din f\xE4rg uppdateras n\xE4sta g\xE5ng du loggar in.","St\xE4ng",{duration:2500,verticalPosition:"top"})})}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=x({type:t,selectors:[["account-page"]],inputs:{teacherColor:[1,"teacherColor"]},outputs:{teacherColor:"teacherColorChange"},decls:33,vars:10,consts:[["appearance","outlined"],[1,"card-header-segment","card-header-left"],["mat-card-avatar","",1,"icon-display"],[1,"hamburger"],[1,"card-header-segment","card-header-right"],["type","color","matInput","","matNativeControl","","name","name",3,"input","ngModelChange","ngModel"]],template:function(e,i){if(e&1&&(m(0,"mat-card",0)(1,"mat-card-header")(2,"div",1)(3,"div",2)(4,"mat-icon"),g(5,"person"),f()(),m(6,"div",3)(7,"mat-card-title"),g(8),Ll(9,"async"),f(),m(10,"mat-card-subtitle"),g(11),Ll(12,"async"),f()()(),m(13,"div",4)(14,"h2"),g(15,"Din f\xE4rg"),f(),m(16,"input",5),M("input",function(){return i.updateColor()}),Qe("ngModelChange",function(o){return Ee(i.teacherColor,o)||(i.teacherColor=o),o}),f()()(),m(17,"mat-card-content")(18,"p"),g(19),Ll(20,"async"),f(),m(21,"p"),g(22,"Exempeltext"),f(),m(23,"p"),g(24,"Exempeltext"),f(),m(25,"p"),g(26,"Exempeltext"),f(),m(27,"p"),g(28,"Exempeltext"),f(),m(29,"p"),g(30,"Exempeltext"),f(),m(31,"p"),g(32,"Exempeltext"),f()()()),e&2){let r,o,a;p(8),ae((r=Vl(9,4,i.currentUser))==null?null:r.name),p(3),ae((o=Vl(12,6,i.currentUser))==null?null:o.role),p(5),Ye("ngModel",i.teacherColor),p(3),fe("Mejladress: ",(a=Vl(20,8,i.currentUser))==null?null:a.email)}},dependencies:[Bn,bt,_E,ln,cn,gE,is,dn,Pt,kt,zn,Qt,Wr,un,Un,pr,j_],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;overflow:hidden;box-sizing:border-box}.icon-display[_ngcontent-%COMP%]{transform:scale(2);display:flex;align-items:center;justify-content:center;overflow:hidden}p[_ngcontent-%COMP%]{font:var(--mat-sys-body-large)}mat-card[_ngcontent-%COMP%]{margin-top:7em;box-sizing:border-box;flex:1;box-shadow:var(--mat-sys-level2);background:var(--mat-sys-surface-variant)}mat-card-header[_ngcontent-%COMP%]{width:100%;display:flex}.card-header-left[_ngcontent-%COMP%]{flex:2;display:flex;flex-direction:row;justify-content:flex-start;align-items:center;gap:2em}.hamburger[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:flex-start}.card-header-right[_ngcontent-%COMP%]{flex:1;display:flex;align-items:center;justify-content:center;flex-direction:column;font-family:var(--mat-sys-label-large)}"]})};var ph=class t{childSignal=Ae.required();static \u0275fac=function(e){return new(e||t)};static \u0275cmp=x({type:t,selectors:[["information"]],inputs:{childSignal:[1,"childSignal"]},outputs:{childSignal:"childSignalChange"},decls:34,vars:1,consts:[["journalContent",""],[1,"subrow"],["id","left-card"],[1,"header-text"],["matInput",""],[1,"color"],["cdkScrollable","",1,"subcard"],[1,"gap"],[1,"kontakt"]],template:function(e,i){e&1&&(m(0,"div",1)(1,"mat-card",2)(2,"mat-card-header",3),g(3),f(),m(4,"mat-form-field"),T(5,"textarea",4,0),f()(),m(7,"mat-card",5)(8,"mat-card-header",3),g(9," Kontaktinformation "),f(),m(10,"mat-card",6)(11,"mat-card-content",7)(12,"p",8),g(13,"Kontakt 1"),f(),m(14,"p"),g(15,"Namn: V\xE5rdnadshavare Exempelsson"),f(),T(16,"mat-divider"),m(17,"p"),g(18,"Telefonnummer: 072-555-83-34"),f(),T(19,"mat-divider"),m(20,"p"),g(21,"Mejl: V\xE5rdnadshavare.Exempelsson@outlook.se"),f(),T(22,"mat-divider"),m(23,"p",8),g(24,"Kontakt 2"),f(),m(25,"p"),g(26,"Namn: V\xE5rdnadnadshavare Exempelsson"),f(),T(27,"mat-divider"),m(28,"p"),g(29,"Telefonnummer: 072-365-555-34"),f(),T(30,"mat-divider"),m(31,"p"),g(32,"Mejl: V\xE5rdnadshavare.Exempelsson@outlook.se"),f(),T(33,"mat-divider"),f()()()()),e&2&&(p(3),fe(" Specialbehov ",i.childSignal().name," "))},dependencies:[rS,bt,Qt,Tt,cn,ln,tn],styles:["[_nghost-%COMP%]{display:flex;height:100%}.subrow[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex:1;justify-content:center;height:100%;gap:1em}.subrow[_ngcontent-%COMP%] > mat-card[_ngcontent-%COMP%]{margin-bottom:.5em;max-height:100%}.subrow[_ngcontent-%COMP%] > mat-card[_ngcontent-%COMP%] > mat-card[_ngcontent-%COMP%]{overflow-y:scroll}mat-card-header[_ngcontent-%COMP%]{display:flex;justify-content:center;border:2px;font:var(--mat-sys-headline-small)}mat-form-field[_ngcontent-%COMP%]{flex:1;margin:1em;box-shadow:var(--mat-sys-level2)}textarea[_ngcontent-%COMP%]{min-height:20vh;resize:none;overflow-y:auto}mat-card[_ngcontent-%COMP%]{box-shadow:var(--mat-sys-level2);flex:1;gap:.5em}.color[_ngcontent-%COMP%]{background:var(--mat-sys-inverse-primary)}.subcard[_ngcontent-%COMP%]{box-shadow:var(--mat-sys-level2);background-color:var(--mat-sys-surface-variant);flex:1;margin:1em;border-radius:0%}.info-subcard[_ngcontent-%COMP%]{box-shadow:var(--mat-sys-level2);background-color:var(--mat-sys-surface-variant);flex:1;margin:1em;flex-direction:row;justify-content:center}.flex-div[_ngcontent-%COMP%]{flex:1}.kontakt[_ngcontent-%COMP%]{font:var(--mat-sys-label-large);justify-self:center}.header-text[_ngcontent-%COMP%]{font-weight:400}#left-card[_ngcontent-%COMP%]{background:var(--mat-sys-inverse-primary);border-top-left-radius:0%}"]})};var gh=class t{fakeNews="Finally, one I can answer! I literally have never been able to answer any askreddit question in my entire life,and have never posted anything on reddit until this exact moment that is happening right now. Writing this on mobile,sorry for bad formatting, also english is my 6th language so there might be one wrong word, TLDR at the bottom. ";fakeNewsLong="Finally, one I can answer! I literally have never been able to answer any askreddit question in my entire life,and have never posted anything on reddit until this exact moment that is happening right now. Writing this on mobile,sorry for bad formatting, also english is my 6th language so there might be one wrong word, TLDR at the bottom. Finally, one I can answer! I literally have never been able to answer any askreddit question in my entire life,and have never posted anything on reddit until this exact moment that is happening right now. Writing this on mobile,sorry for bad formatting, also english is my 6th language so there might be one wrong word, TLDR at the bottom. ";static \u0275fac=function(e){return new(e||t)};static \u0275cmp=x({type:t,selectors:[["homepage"]],decls:87,vars:5,consts:[[1,"main-card"],[1,"school-title"],[1,"main-body"],[1,"news"],[1,"news-header"],[1,"news-content"],[1,"mock-news-boxes"],[1,"news-text"],[1,"news-title"],[1,"staff"],[1,"mock-teachers"],[1,"namn"]],template:function(e,i){e&1&&(m(0,"mat-card",0)(1,"mat-card-header",1)(2,"p"),g(3,"K\xE4ndpersonsnamn F\xF6rskola"),f()(),T(4,"mat-divider"),m(5,"mat-card-content",2)(6,"mat-card",3)(7,"mat-card-header",4)(8,"p")(9,"mat-icon"),g(10,"newspaper"),f(),g(11," Nyheter "),f()(),T(12,"mat-divider"),m(13,"mat-card-content",5)(14,"mat-card",6)(15,"p",7)(16,"span",8),g(17,"CLICKBAIT TITEL"),f(),g(18),f()(),m(19,"mat-card",6)(20,"p",7)(21,"span",8),g(22,"CLICKBAIT TITEL"),f(),g(23),f()(),m(24,"mat-card",6)(25,"p",7)(26,"span",8),g(27,"CLICKBAIT TITEL"),f(),g(28),f()(),m(29,"mat-card",6)(30,"p",7)(31,"span",8),g(32,"CLICKBAIT TITEL"),f(),g(33),f()(),m(34,"mat-card",6)(35,"p",7)(36,"span",8),g(37,"CLICKBAIT TITEL"),f(),g(38),f()()()(),m(39,"mat-card",9)(40,"mat-card-header",4)(41,"p")(42,"mat-icon"),g(43,"diversity_3"),f(),g(44," Personal "),f()(),T(45,"mat-divider"),m(46,"mat-card-content",5)(47,"mat-card",10)(48,"mat-icon"),g(49,"face"),f(),m(50,"p",11),g(51,"L\xE4rare L\xE4rarsson"),f()(),m(52,"mat-card",10)(53,"mat-icon"),g(54,"face"),f(),m(55,"p",11),g(56,"L\xE4rare L\xE4rarsson"),f()(),m(57,"mat-card",10)(58,"mat-icon"),g(59,"face"),f(),m(60,"p",11),g(61,"L\xE4rare L\xE4rarsson"),f()(),m(62,"mat-card",10)(63,"mat-icon"),g(64,"face"),f(),m(65,"p",11),g(66,"L\xE4rare L\xE4rarsson"),f()(),m(67,"mat-card",10)(68,"mat-icon"),g(69,"face"),f(),m(70,"p",11),g(71,"L\xE4rare L\xE4rarsson"),f()(),m(72,"mat-card",10)(73,"mat-icon"),g(74,"face"),f(),m(75,"p",11),g(76,"L\xE4rare L\xE4rarsson"),f()(),m(77,"mat-card",10)(78,"mat-icon"),g(79,"face"),f(),m(80,"p",11),g(81,"L\xE4rare L\xE4rarsson"),f()(),m(82,"mat-card",10)(83,"mat-icon"),g(84,"face"),f(),m(85,"p",11),g(86,"L\xE4rare L\xE4rarsson"),f()()()()()()),e&2&&(p(18),fe(" ",i.fakeNews," "),p(5),fe(" ",i.fakeNewsLong," "),p(5),fe(" ",i.fakeNews," "),p(5),fe(" ",i.fakeNews," "),p(5),fe(" ",i.fakeNewsLong," "))},dependencies:[bt,cn,ln,tn,Pt],styles:["[_nghost-%COMP%]{display:flex;flex:1;height:100%;min-height:0;width:100%}.main-card[_ngcontent-%COMP%]{box-shadow:var(--mat-sys-level1);display:flex;flex-direction:column;flex:1;min-height:0;width:100%;overflow:hidden}.school-title[_ngcontent-%COMP%]{background:var(--mat-sys-inverse-primary);font:var(--mat-sys-title-large);font-weight:400;font-size:xx-large;display:flex;justify-content:center}.main-body[_ngcontent-%COMP%]{display:flex;flex-direction:row;background-color:var(--mat-sys-surface-dim);gap:1em;flex:1;min-height:0}mat-card[_ngcontent-%COMP%]{box-shadow:var(--mat-sys-level2)}.news[_ngcontent-%COMP%]{display:flex;margin-top:1em;flex:1;flex-direction:column;min-height:0;overflow:hidden}.staff[_ngcontent-%COMP%]{display:flex;margin-top:1em;flex:.5;flex-direction:column;min-height:0;overflow:hidden}.news-header[_ngcontent-%COMP%]{flex-shrink:0;justify-content:center;align-items:center;display:flex;background:var(--mat-sys-surface-variant);font-weight:400!important;font-size:x-large}.mock-news-boxes[_ngcontent-%COMP%]{margin:.8em;background-color:var(--mat-sys-surface-variant)}.news-text[_ngcontent-%COMP%]{margin:.3em}.news-title[_ngcontent-%COMP%]{font-size:medium;font-weight:700}.news-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex:1;min-height:0;overflow-y:auto;margin:0 0 1em;padding:0 .5em}mat-icon[_ngcontent-%COMP%]{margin-left:.5em}.mock-teachers[_ngcontent-%COMP%]{margin:.8em;display:flex;flex-direction:row;gap:.3em;align-items:center;justify-content:flex-start;background-color:var(--mat-sys-surface-variant)}.namn[_ngcontent-%COMP%]{font:var(--mat-sys-body-large)}"]})};var Vb=new y("MAT_DATE_LOCALE",{providedIn:"root",factory:()=>c(ja)}),Fs="Method not implemented",fn=class{locale;_localeChanges=new S;localeChanges=this._localeChanges;setTime(n,e,i,r){throw new Error(Fs)}getHours(n){throw new Error(Fs)}getMinutes(n){throw new Error(Fs)}getSeconds(n){throw new Error(Fs)}parseTime(n,e){throw new Error(Fs)}addSeconds(n,e){throw new Error(Fs)}getValidDateOrNull(n){return this.isDateInstance(n)&&this.isValid(n)?n:null}deserialize(n){return n==null||this.isDateInstance(n)&&this.isValid(n)?n:this.invalid()}setLocale(n){this.locale=n,this._localeChanges.next()}compareDate(n,e){return this.getYear(n)-this.getYear(e)||this.getMonth(n)-this.getMonth(e)||this.getDate(n)-this.getDate(e)}compareTime(n,e){return this.getHours(n)-this.getHours(e)||this.getMinutes(n)-this.getMinutes(e)||this.getSeconds(n)-this.getSeconds(e)}sameDate(n,e){if(n&&e){let i=this.isValid(n),r=this.isValid(e);return i&&r?!this.compareDate(n,e):i==r}return n==e}sameTime(n,e){if(n&&e){let i=this.isValid(n),r=this.isValid(e);return i&&r?!this.compareTime(n,e):i==r}return n==e}clampDate(n,e,i){return e&&this.compareDate(n,e)<0?e:i&&this.compareDate(n,i)>0?i:n}},ra=new y("mat-date-formats");var B2=["mat-calendar-body",""];function j2(t,n){return this._trackRow(n)}var zS=(t,n)=>n.id;function H2(t,n){if(t&1&&(Me(0,"tr",0)(1,"td",3),g(2),ke()()),t&2){let e=D();p(),ki("padding-top",e._cellPadding)("padding-bottom",e._cellPadding),Z("colspan",e.numCols),p(),fe(" ",e.label," ")}}function U2(t,n){if(t&1&&(Me(0,"td",3),g(1),ke()),t&2){let e=D(2);ki("padding-top",e._cellPadding)("padding-bottom",e._cellPadding),Z("colspan",e._firstRowOffset),p(),fe(" ",e._firstRowOffset>=e.labelMinRequiredCells?e.label:""," ")}}function z2(t,n){if(t&1){let e=Le();Me(0,"td",6)(1,"button",7),Fn("click",function(r){let o=ie(e).$implicit,a=D(2);return re(a._cellClicked(o,r))})("focus",function(r){let o=ie(e).$implicit,a=D(2);return re(a._emitActiveDateChange(o,r))}),Me(2,"span",8),g(3),ke(),on(4,"span",9),ke()()}if(t&2){let e=n.$implicit,i=n.$index,r=D().$index,o=D();ki("width",o._cellWidth)("padding-top",o._cellPadding)("padding-bottom",o._cellPadding),Z("data-mat-row",r)("data-mat-col",i),p(),St(e.cssClasses),L("mat-calendar-body-disabled",!e.enabled)("mat-calendar-body-active",o._isActiveCell(r,i))("mat-calendar-body-range-start",o._isRangeStart(e.compareValue))("mat-calendar-body-range-end",o._isRangeEnd(e.compareValue))("mat-calendar-body-in-range",o._isInRange(e.compareValue))("mat-calendar-body-comparison-bridge-start",o._isComparisonBridgeStart(e.compareValue,r,i))("mat-calendar-body-comparison-bridge-end",o._isComparisonBridgeEnd(e.compareValue,r,i))("mat-calendar-body-comparison-start",o._isComparisonStart(e.compareValue))("mat-calendar-body-comparison-end",o._isComparisonEnd(e.compareValue))("mat-calendar-body-in-comparison-range",o._isInComparisonRange(e.compareValue))("mat-calendar-body-preview-start",o._isPreviewStart(e.compareValue))("mat-calendar-body-preview-end",o._isPreviewEnd(e.compareValue))("mat-calendar-body-in-preview",o._isInPreview(e.compareValue)),qt("tabIndex",o._isActiveCell(r,i)?0:-1),Z("aria-label",e.ariaLabel)("aria-disabled",!e.enabled||null)("aria-pressed",o._isSelected(e.compareValue))("aria-current",o.todayValue===e.compareValue?"date":null)("aria-describedby",o._getDescribedby(e.compareValue)),p(),L("mat-calendar-body-selected",o._isSelected(e.compareValue))("mat-calendar-body-comparison-identical",o._isComparisonIdentical(e.compareValue))("mat-calendar-body-today",o.todayValue===e.compareValue),p(),fe(" ",e.displayValue," ")}}function $2(t,n){if(t&1&&(Me(0,"tr",1),j(1,U2,2,6,"td",4),He(2,z2,5,49,"td",5,zS),ke()),t&2){let e=n.$implicit,i=n.$index,r=D();p(),H(i===0&&r._firstRowOffset?1:-1),p(),Ue(e)}}function W2(t,n){if(t&1&&(m(0,"th",2)(1,"span",6),g(2),f(),m(3,"span",3),g(4),f()()),t&2){let e=n.$implicit;p(2),ae(e.long),p(2),ae(e.narrow)}}var G2=["*"];function q2(t,n){}function Y2(t,n){if(t&1){let e=Le();m(0,"mat-month-view",4),Qe("activeDateChange",function(r){ie(e);let o=D();return Ee(o.activeDate,r)||(o.activeDate=r),re(r)}),M("_userSelection",function(r){ie(e);let o=D();return re(o._dateSelected(r))})("dragStarted",function(r){ie(e);let o=D();return re(o._dragStarted(r))})("dragEnded",function(r){ie(e);let o=D();return re(o._dragEnded(r))}),f()}if(t&2){let e=D();Ye("activeDate",e.activeDate),R("selected",e.selected)("dateFilter",e.dateFilter)("maxDate",e.maxDate)("minDate",e.minDate)("dateClass",e.dateClass)("comparisonStart",e.comparisonStart)("comparisonEnd",e.comparisonEnd)("startDateAccessibleName",e.startDateAccessibleName)("endDateAccessibleName",e.endDateAccessibleName)("activeDrag",e._activeDrag)}}function Q2(t,n){if(t&1){let e=Le();m(0,"mat-year-view",5),Qe("activeDateChange",function(r){ie(e);let o=D();return Ee(o.activeDate,r)||(o.activeDate=r),re(r)}),M("monthSelected",function(r){ie(e);let o=D();return re(o._monthSelectedInYearView(r))})("selectedChange",function(r){ie(e);let o=D();return re(o._goToDateInView(r,"month"))}),f()}if(t&2){let e=D();Ye("activeDate",e.activeDate),R("selected",e.selected)("dateFilter",e.dateFilter)("maxDate",e.maxDate)("minDate",e.minDate)("dateClass",e.dateClass)}}function Z2(t,n){if(t&1){let e=Le();m(0,"mat-multi-year-view",6),Qe("activeDateChange",function(r){ie(e);let o=D();return Ee(o.activeDate,r)||(o.activeDate=r),re(r)}),M("yearSelected",function(r){ie(e);let o=D();return re(o._yearSelectedInMultiYearView(r))})("selectedChange",function(r){ie(e);let o=D();return re(o._goToDateInView(r,"year"))}),f()}if(t&2){let e=D();Ye("activeDate",e.activeDate),R("selected",e.selected)("dateFilter",e.dateFilter)("maxDate",e.maxDate)("minDate",e.minDate)("dateClass",e.dateClass)}}function K2(t,n){}var X2=["button"],J2=[[["","matDatepickerToggleIcon",""]]],eB=["[matDatepickerToggleIcon]"];function tB(t,n){t&1&&(Di(),m(0,"svg",2),T(1,"path",3),f())}var Ls=(()=>{class t{changes=new S;calendarLabel="Calendar";openCalendarLabel="Open calendar";closeCalendarLabel="Close calendar";prevMonthLabel="Previous month";nextMonthLabel="Next month";prevYearLabel="Previous year";nextYearLabel="Next year";prevMultiYearLabel="Previous 24 years";nextMultiYearLabel="Next 24 years";switchToMonthViewLabel="Choose date";switchToMultiYearViewLabel="Choose month and year";startDateLabel="Start date";endDateLabel="End date";comparisonDateLabel="Comparison range";formatYearRange(e,i){return`${e} \u2013 ${i}`}formatYearRangeLabel(e,i){return`${e} to ${i}`}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),nB=0,Gc=class{value;displayValue;ariaLabel;enabled;compareValue;rawValue;id=nB++;cssClasses;constructor(n,e,i,r,o,a=n,s){this.value=n,this.displayValue=e,this.ariaLabel=i,this.enabled=r,this.compareValue=a,this.rawValue=s,this.cssClasses=o instanceof Set?Array.from(o):o}},iB={passive:!1,capture:!0},_h={passive:!0,capture:!0},VS={passive:!0},Ps=(()=>{class t{_elementRef=c(B);_ngZone=c(V);_platform=c(ue);_intl=c(Ls);_eventCleanups;_skipNextFocus=!1;_focusActiveCellAfterViewChecked=!1;label;rows;todayValue;startValue;endValue;labelMinRequiredCells;numCols=7;activeCell=0;ngAfterViewChecked(){this._focusActiveCellAfterViewChecked&&(this._focusActiveCell(),this._focusActiveCellAfterViewChecked=!1)}isRange=!1;cellAspectRatio=1;comparisonStart=null;comparisonEnd=null;previewStart=null;previewEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;selectedValueChange=new I;previewChange=new I;activeDateChange=new I;dragStarted=new I;dragEnded=new I;_firstRowOffset;_cellPadding;_cellWidth;_startDateLabelId;_endDateLabelId;_comparisonStartDateLabelId;_comparisonEndDateLabelId;_didDragSinceMouseDown=!1;_injector=c(G);comparisonDateAccessibleName=this._intl.comparisonDateLabel;_trackRow=e=>e;constructor(){let e=c(Te),i=c(Ke);this._startDateLabelId=i.getId("mat-calendar-body-start-"),this._endDateLabelId=i.getId("mat-calendar-body-end-"),this._comparisonStartDateLabelId=i.getId("mat-calendar-body-comparison-start-"),this._comparisonEndDateLabelId=i.getId("mat-calendar-body-comparison-end-"),c(Ze).load(Bi),this._ngZone.runOutsideAngular(()=>{let r=this._elementRef.nativeElement,o=[e.listen(r,"touchmove",this._touchmoveHandler,iB),e.listen(r,"mouseenter",this._enterHandler,_h),e.listen(r,"focus",this._enterHandler,_h),e.listen(r,"mouseleave",this._leaveHandler,_h),e.listen(r,"blur",this._leaveHandler,_h),e.listen(r,"mousedown",this._mousedownHandler,VS),e.listen(r,"touchstart",this._mousedownHandler,VS)];this._platform.isBrowser&&o.push(e.listen("window","mouseup",this._mouseupHandler),e.listen("window","touchend",this._touchendHandler)),this._eventCleanups=o})}_cellClicked(e,i){this._didDragSinceMouseDown||e.enabled&&this.selectedValueChange.emit({value:e.value,event:i})}_emitActiveDateChange(e,i){e.enabled&&this.activeDateChange.emit({value:e.value,event:i})}_isSelected(e){return this.startValue===e||this.endValue===e}ngOnChanges(e){let i=e.numCols,{rows:r,numCols:o}=this;(e.rows||i)&&(this._firstRowOffset=r&&r.length&&r[0].length?o-r[0].length:0),(e.cellAspectRatio||i||!this._cellPadding)&&(this._cellPadding=`${50*this.cellAspectRatio/o}%`),(i||!this._cellWidth)&&(this._cellWidth=`${100/o}%`)}ngOnDestroy(){this._eventCleanups.forEach(e=>e())}_isActiveCell(e,i){let r=e*this.numCols+i;return e&&(r-=this._firstRowOffset),r==this.activeCell}_focusActiveCell(e=!0){Ge(()=>{setTimeout(()=>{let i=this._elementRef.nativeElement.querySelector(".mat-calendar-body-active");i&&(e||(this._skipNextFocus=!0),i.focus())})},{injector:this._injector})}_scheduleFocusActiveCellAfterViewChecked(){this._focusActiveCellAfterViewChecked=!0}_isRangeStart(e){return Hb(e,this.startValue,this.endValue)}_isRangeEnd(e){return Ub(e,this.startValue,this.endValue)}_isInRange(e){return zb(e,this.startValue,this.endValue,this.isRange)}_isComparisonStart(e){return Hb(e,this.comparisonStart,this.comparisonEnd)}_isComparisonBridgeStart(e,i,r){if(!this._isComparisonStart(e)||this._isRangeStart(e)||!this._isInRange(e))return!1;let o=this.rows[i][r-1];if(!o){let a=this.rows[i-1];o=a&&a[a.length-1]}return o&&!this._isRangeEnd(o.compareValue)}_isComparisonBridgeEnd(e,i,r){if(!this._isComparisonEnd(e)||this._isRangeEnd(e)||!this._isInRange(e))return!1;let o=this.rows[i][r+1];if(!o){let a=this.rows[i+1];o=a&&a[0]}return o&&!this._isRangeStart(o.compareValue)}_isComparisonEnd(e){return Ub(e,this.comparisonStart,this.comparisonEnd)}_isInComparisonRange(e){return zb(e,this.comparisonStart,this.comparisonEnd,this.isRange)}_isComparisonIdentical(e){return this.comparisonStart===this.comparisonEnd&&e===this.comparisonStart}_isPreviewStart(e){return Hb(e,this.previewStart,this.previewEnd)}_isPreviewEnd(e){return Ub(e,this.previewStart,this.previewEnd)}_isInPreview(e){return zb(e,this.previewStart,this.previewEnd,this.isRange)}_getDescribedby(e){if(!this.isRange)return null;if(this.startValue===e&&this.endValue===e)return`${this._startDateLabelId} ${this._endDateLabelId}`;if(this.startValue===e)return this._startDateLabelId;if(this.endValue===e)return this._endDateLabelId;if(this.comparisonStart!==null&&this.comparisonEnd!==null){if(e===this.comparisonStart&&e===this.comparisonEnd)return`${this._comparisonStartDateLabelId} ${this._comparisonEndDateLabelId}`;if(e===this.comparisonStart)return this._comparisonStartDateLabelId;if(e===this.comparisonEnd)return this._comparisonEndDateLabelId}return null}_enterHandler=e=>{if(this._skipNextFocus&&e.type==="focus"){this._skipNextFocus=!1;return}if(e.target&&this.isRange){let i=this._getCellFromElement(e.target);i&&this._ngZone.run(()=>this.previewChange.emit({value:i.enabled?i:null,event:e}))}};_touchmoveHandler=e=>{if(!this.isRange)return;let i=BS(e),r=i?this._getCellFromElement(i):null;i!==e.target&&(this._didDragSinceMouseDown=!0),jb(e.target)&&e.preventDefault(),this._ngZone.run(()=>this.previewChange.emit({value:r?.enabled?r:null,event:e}))};_leaveHandler=e=>{this.previewEnd!==null&&this.isRange&&(e.type!=="blur"&&(this._didDragSinceMouseDown=!0),e.target&&this._getCellFromElement(e.target)&&!(e.relatedTarget&&this._getCellFromElement(e.relatedTarget))&&this._ngZone.run(()=>this.previewChange.emit({value:null,event:e})))};_mousedownHandler=e=>{if(!this.isRange)return;this._didDragSinceMouseDown=!1;let i=e.target&&this._getCellFromElement(e.target);!i||!this._isInRange(i.compareValue)||this._ngZone.run(()=>{this.dragStarted.emit({value:i.rawValue,event:e})})};_mouseupHandler=e=>{if(!this.isRange)return;let i=jb(e.target);if(!i){this._ngZone.run(()=>{this.dragEnded.emit({value:null,event:e})});return}i.closest(".mat-calendar-body")===this._elementRef.nativeElement&&this._ngZone.run(()=>{let r=this._getCellFromElement(i);this.dragEnded.emit({value:r?.rawValue??null,event:e})})};_touchendHandler=e=>{let i=BS(e);i&&this._mouseupHandler({target:i})};_getCellFromElement(e){let i=jb(e);if(i){let r=i.getAttribute("data-mat-row"),o=i.getAttribute("data-mat-col");if(r&&o)return this.rows[parseInt(r)]?.[parseInt(o)]||null}return null}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=x({type:t,selectors:[["","mat-calendar-body",""]],hostAttrs:[1,"mat-calendar-body"],inputs:{label:"label",rows:"rows",todayValue:"todayValue",startValue:"startValue",endValue:"endValue",labelMinRequiredCells:"labelMinRequiredCells",numCols:"numCols",activeCell:"activeCell",isRange:"isRange",cellAspectRatio:"cellAspectRatio",comparisonStart:"comparisonStart",comparisonEnd:"comparisonEnd",previewStart:"previewStart",previewEnd:"previewEnd",startDateAccessibleName:"startDateAccessibleName",endDateAccessibleName:"endDateAccessibleName"},outputs:{selectedValueChange:"selectedValueChange",previewChange:"previewChange",activeDateChange:"activeDateChange",dragStarted:"dragStarted",dragEnded:"dragEnded"},exportAs:["matCalendarBody"],features:[Pe],attrs:B2,decls:11,vars:11,consts:[["aria-hidden","true"],["role","row"],[1,"mat-calendar-body-hidden-label",3,"id"],[1,"mat-calendar-body-label"],[1,"mat-calendar-body-label",3,"paddingTop","paddingBottom"],["role","gridcell",1,"mat-calendar-body-cell-container",3,"width","paddingTop","paddingBottom"],["role","gridcell",1,"mat-calendar-body-cell-container"],["type","button",1,"mat-calendar-body-cell",3,"click","focus","tabindex"],[1,"mat-calendar-body-cell-content","mat-focus-indicator"],["aria-hidden","true",1,"mat-calendar-body-cell-preview"]],template:function(i,r){i&1&&(j(0,H2,3,6,"tr",0),He(1,$2,4,1,"tr",1,j2,!0),Me(3,"span",2),g(4),ke(),Me(5,"span",2),g(6),ke(),Me(7,"span",2),g(8),ke(),Me(9,"span",2),g(10),ke()),i&2&&(H(r._firstRowOffset<r.labelMinRequiredCells?0:-1),p(),Ue(r.rows),p(2),qt("id",r._startDateLabelId),p(),fe(" ",r.startDateAccessibleName,`
`),p(),qt("id",r._endDateLabelId),p(),fe(" ",r.endDateAccessibleName,`
`),p(),qt("id",r._comparisonStartDateLabelId),p(),or(" ",r.comparisonDateAccessibleName," ",r.startDateAccessibleName,`
`),p(),qt("id",r._comparisonEndDateLabelId),p(),or(" ",r.comparisonDateAccessibleName," ",r.endDateAccessibleName,`
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
`],encapsulation:2,changeDetection:0})}return t})();function Bb(t){return t?.nodeName==="TD"}function jb(t){let n;return Bb(t)?n=t:Bb(t.parentNode)?n=t.parentNode:Bb(t.parentNode?.parentNode)&&(n=t.parentNode.parentNode),n?.getAttribute("data-mat-row")!=null?n:null}function Hb(t,n,e){return e!==null&&n!==e&&t<e&&t===n}function Ub(t,n,e){return n!==null&&n!==e&&t>=n&&t===e}function zb(t,n,e,i){return i&&n!==null&&e!==null&&n!==e&&t>=n&&t<=e}function BS(t){let n=t.changedTouches[0];return document.elementFromPoint(n.clientX,n.clientY)}var Yn=class{start;end;_disableStructuralEquivalency;constructor(n,e){this.start=n,this.end=e}},vh=(()=>{class t{selection;_adapter;_selectionChanged=new S;selectionChanged=this._selectionChanged;constructor(e,i){this.selection=e,this._adapter=i,this.selection=e}updateSelection(e,i){let r=this.selection;this.selection=e,this._selectionChanged.next({selection:e,source:i,oldValue:r})}ngOnDestroy(){this._selectionChanged.complete()}_isValidDateInstance(e){return this._adapter.isDateInstance(e)&&this._adapter.isValid(e)}static \u0275fac=function(i){Al()};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})(),rB=(()=>{class t extends vh{constructor(e){super(null,e)}add(e){super.updateSelection(e,this)}isValid(){return this.selection!=null&&this._isValidDateInstance(this.selection)}isComplete(){return this.selection!=null}clone(){let e=new t(this._adapter);return e.updateSelection(this.selection,this),e}static \u0275fac=function(i){return new(i||t)(W(fn))};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})();var oB={provide:vh,useFactory:()=>c(vh,{optional:!0,skipSelf:!0})||new rB(c(fn))};var $S=new y("MAT_DATE_RANGE_SELECTION_STRATEGY");var $b=7,aB=0,jS=(()=>{class t{_changeDetectorRef=c(De);_dateFormats=c(ra,{optional:!0});_dateAdapter=c(fn,{optional:!0});_dir=c(nt,{optional:!0});_rangeStrategy=c($S,{optional:!0});_rerenderSubscription=oe.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(e){let i=this._activeDate,r=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(r,this.minDate,this.maxDate),this._hasSameMonthAndYear(i,this._activeDate)||this._init()}_activeDate;get selected(){return this._selected}set selected(e){e instanceof Yn?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setRanges(this._selected)}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;activeDrag=null;selectedChange=new I;_userSelection=new I;dragStarted=new I;dragEnded=new I;activeDateChange=new I;_matCalendarBody;_monthLabel=E("");_weeks=E([]);_firstWeekOffset=E(0);_rangeStart=E(null);_rangeEnd=E(null);_comparisonRangeStart=E(null);_comparisonRangeEnd=E(null);_previewStart=E(null);_previewEnd=E(null);_isRange=E(!1);_todayDate=E(null);_weekdays=E([]);constructor(){c(Ze).load(Vi),this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(Je(null)).subscribe(()=>this._init())}ngOnChanges(e){let i=e.comparisonStart||e.comparisonEnd;i&&!i.firstChange&&this._setRanges(this.selected),e.activeDrag&&!this.activeDrag&&this._clearPreview()}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_dateSelected(e){let i=e.value,r=this._getDateFromDayOfMonth(i),o,a;this._selected instanceof Yn?(o=this._getDateInCurrentMonth(this._selected.start),a=this._getDateInCurrentMonth(this._selected.end)):o=a=this._getDateInCurrentMonth(this._selected),(o!==i||a!==i)&&this.selectedChange.emit(r),this._userSelection.emit({value:r,event:e.event}),this._clearPreview(),this._changeDetectorRef.markForCheck()}_updateActiveDate(e){let i=e.value,r=this._activeDate;this.activeDate=this._getDateFromDayOfMonth(i),this._dateAdapter.compareDate(r,this.activeDate)&&this.activeDateChange.emit(this._activeDate)}_handleCalendarBodyKeydown(e){let i=this._activeDate,r=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,r?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,r?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,-7);break;case 40:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,7);break;case 36:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,1-this._dateAdapter.getDate(this._activeDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,this._dateAdapter.getNumDaysInMonth(this._activeDate)-this._dateAdapter.getDate(this._activeDate));break;case 33:this.activeDate=e.altKey?this._dateAdapter.addCalendarYears(this._activeDate,-1):this._dateAdapter.addCalendarMonths(this._activeDate,-1);break;case 34:this.activeDate=e.altKey?this._dateAdapter.addCalendarYears(this._activeDate,1):this._dateAdapter.addCalendarMonths(this._activeDate,1);break;case 13:case 32:this._selectionKeyPressed=!0,this._canSelect(this._activeDate)&&e.preventDefault();return;case 27:this._previewEnd()!=null&&!yt(e)&&(this._clearPreview(),this.activeDrag?this.dragEnded.emit({value:null,event:e}):(this.selectedChange.emit(null),this._userSelection.emit({value:null,event:e})),e.preventDefault(),e.stopPropagation());return;default:return}this._dateAdapter.compareDate(i,this.activeDate)&&(this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked()),e.preventDefault()}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._canSelect(this._activeDate)&&this._dateSelected({value:this._dateAdapter.getDate(this._activeDate),event:e}),this._selectionKeyPressed=!1)}_init(){this._setRanges(this.selected),this._todayDate.set(this._getCellCompareValue(this._dateAdapter.today())),this._monthLabel.set(this._dateFormats.display.monthLabel?this._dateAdapter.format(this.activeDate,this._dateFormats.display.monthLabel):this._dateAdapter.getMonthNames("short")[this._dateAdapter.getMonth(this.activeDate)].toLocaleUpperCase());let e=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),1);this._firstWeekOffset.set(($b+this._dateAdapter.getDayOfWeek(e)-this._dateAdapter.getFirstDayOfWeek())%$b),this._initWeekdays(),this._createWeekCells(),this._changeDetectorRef.markForCheck()}_focusActiveCell(e){this._matCalendarBody._focusActiveCell(e)}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_previewChanged({event:e,value:i}){if(this._rangeStrategy){let r=i?i.rawValue:null,o=this._rangeStrategy.createPreview(r,this.selected,e);if(this._previewStart.set(this._getCellCompareValue(o.start)),this._previewEnd.set(this._getCellCompareValue(o.end)),this.activeDrag&&r){let a=this._rangeStrategy.createDrag?.(this.activeDrag.value,this.selected,r,e);a&&(this._previewStart.set(this._getCellCompareValue(a.start)),this._previewEnd.set(this._getCellCompareValue(a.end)))}}}_dragEnded(e){if(this.activeDrag)if(e.value){let i=this._rangeStrategy?.createDrag?.(this.activeDrag.value,this.selected,e.value,e.event);this.dragEnded.emit({value:i??null,event:e.event})}else this.dragEnded.emit({value:null,event:e.event})}_getDateFromDayOfMonth(e){return this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),e)}_initWeekdays(){let e=this._dateAdapter.getFirstDayOfWeek(),i=this._dateAdapter.getDayOfWeekNames("narrow"),o=this._dateAdapter.getDayOfWeekNames("long").map((a,s)=>({long:a,narrow:i[s],id:aB++}));this._weekdays.set(o.slice(e).concat(o.slice(0,e)))}_createWeekCells(){let e=this._dateAdapter.getNumDaysInMonth(this.activeDate),i=this._dateAdapter.getDateNames(),r=[[]];for(let o=0,a=this._firstWeekOffset();o<e;o++,a++){a==$b&&(r.push([]),a=0);let s=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),o+1),l=this._shouldEnableDate(s),d=this._dateAdapter.format(s,this._dateFormats.display.dateA11yLabel),u=this.dateClass?this.dateClass(s,"month"):void 0;r[r.length-1].push(new Gc(o+1,i[o],d,l,u,this._getCellCompareValue(s),s))}this._weeks.set(r)}_shouldEnableDate(e){return!!e&&(!this.minDate||this._dateAdapter.compareDate(e,this.minDate)>=0)&&(!this.maxDate||this._dateAdapter.compareDate(e,this.maxDate)<=0)&&(!this.dateFilter||this.dateFilter(e))}_getDateInCurrentMonth(e){return e&&this._hasSameMonthAndYear(e,this.activeDate)?this._dateAdapter.getDate(e):null}_hasSameMonthAndYear(e,i){return!!(e&&i&&this._dateAdapter.getMonth(e)==this._dateAdapter.getMonth(i)&&this._dateAdapter.getYear(e)==this._dateAdapter.getYear(i))}_getCellCompareValue(e){if(e){let i=this._dateAdapter.getYear(e),r=this._dateAdapter.getMonth(e),o=this._dateAdapter.getDate(e);return new Date(i,r,o).getTime()}return null}_isRtl(){return this._dir&&this._dir.value==="rtl"}_setRanges(e){e instanceof Yn?(this._rangeStart.set(this._getCellCompareValue(e.start)),this._rangeEnd.set(this._getCellCompareValue(e.end)),this._isRange.set(!0)):(this._rangeStart.set(this._getCellCompareValue(e)),this._rangeEnd.set(this._rangeStart()),this._isRange.set(!1)),this._comparisonRangeStart.set(this._getCellCompareValue(this.comparisonStart)),this._comparisonRangeEnd.set(this._getCellCompareValue(this.comparisonEnd))}_canSelect(e){return!this.dateFilter||this.dateFilter(e)}_clearPreview(){this._previewStart.set(null),this._previewEnd.set(null)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=x({type:t,selectors:[["mat-month-view"]],viewQuery:function(i,r){if(i&1&&Ce(Ps,5),i&2){let o;O(o=N())&&(r._matCalendarBody=o.first)}},inputs:{activeDate:"activeDate",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass",comparisonStart:"comparisonStart",comparisonEnd:"comparisonEnd",startDateAccessibleName:"startDateAccessibleName",endDateAccessibleName:"endDateAccessibleName",activeDrag:"activeDrag"},outputs:{selectedChange:"selectedChange",_userSelection:"_userSelection",dragStarted:"dragStarted",dragEnded:"dragEnded",activeDateChange:"activeDateChange"},exportAs:["matMonthView"],features:[Pe],decls:8,vars:14,consts:[["role","grid",1,"mat-calendar-table"],[1,"mat-calendar-table-header"],["scope","col"],["aria-hidden","true"],["colspan","7",1,"mat-calendar-table-header-divider"],["mat-calendar-body","",3,"selectedValueChange","activeDateChange","previewChange","dragStarted","dragEnded","keyup","keydown","label","rows","todayValue","startValue","endValue","comparisonStart","comparisonEnd","previewStart","previewEnd","isRange","labelMinRequiredCells","activeCell","startDateAccessibleName","endDateAccessibleName"],[1,"cdk-visually-hidden"]],template:function(i,r){i&1&&(m(0,"table",0)(1,"thead",1)(2,"tr"),He(3,W2,5,2,"th",2,zS),f(),m(5,"tr",3),T(6,"th",4),f()(),m(7,"tbody",5),M("selectedValueChange",function(a){return r._dateSelected(a)})("activeDateChange",function(a){return r._updateActiveDate(a)})("previewChange",function(a){return r._previewChanged(a)})("dragStarted",function(a){return r.dragStarted.emit(a)})("dragEnded",function(a){return r._dragEnded(a)})("keyup",function(a){return r._handleCalendarBodyKeyup(a)})("keydown",function(a){return r._handleCalendarBodyKeydown(a)}),f()()),i&2&&(p(3),Ue(r._weekdays()),p(4),R("label",r._monthLabel())("rows",r._weeks())("todayValue",r._todayDate())("startValue",r._rangeStart())("endValue",r._rangeEnd())("comparisonStart",r._comparisonRangeStart())("comparisonEnd",r._comparisonRangeEnd())("previewStart",r._previewStart())("previewEnd",r._previewEnd())("isRange",r._isRange())("labelMinRequiredCells",3)("activeCell",r._dateAdapter.getDate(r.activeDate)-1)("startDateAccessibleName",r.startDateAccessibleName)("endDateAccessibleName",r.endDateAccessibleName))},dependencies:[Ps],encapsulation:2,changeDetection:0})}return t})(),kn=24,Wb=4,HS=(()=>{class t{_changeDetectorRef=c(De);_dateAdapter=c(fn,{optional:!0});_dir=c(nt,{optional:!0});_rerenderSubscription=oe.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(e){let i=this._activeDate,r=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(r,this.minDate,this.maxDate),WS(this._dateAdapter,i,this._activeDate,this.minDate,this.maxDate)||this._init()}_activeDate;get selected(){return this._selected}set selected(e){e instanceof Yn?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setSelectedYear(e)}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;selectedChange=new I;yearSelected=new I;activeDateChange=new I;_matCalendarBody;_years=E([]);_todayYear=E(0);_selectedYear=E(null);constructor(){this._dateAdapter,this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(Je(null)).subscribe(()=>this._init())}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_init(){this._todayYear.set(this._dateAdapter.getYear(this._dateAdapter.today()));let i=this._dateAdapter.getYear(this._activeDate)-Wc(this._dateAdapter,this.activeDate,this.minDate,this.maxDate),r=[];for(let o=0,a=[];o<kn;o++)a.push(i+o),a.length==Wb&&(r.push(a.map(s=>this._createCellForYear(s))),a=[]);this._years.set(r),this._changeDetectorRef.markForCheck()}_yearSelected(e){let i=e.value,r=this._dateAdapter.createDate(i,0,1),o=this._getDateFromYear(i);this.yearSelected.emit(r),this.selectedChange.emit(o)}_updateActiveDate(e){let i=e.value,r=this._activeDate;this.activeDate=this._getDateFromYear(i),this._dateAdapter.compareDate(r,this.activeDate)&&this.activeDateChange.emit(this.activeDate)}_handleCalendarBodyKeydown(e){let i=this._activeDate,r=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,r?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,r?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,-Wb);break;case 40:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,Wb);break;case 36:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,-Wc(this._dateAdapter,this.activeDate,this.minDate,this.maxDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,kn-Wc(this._dateAdapter,this.activeDate,this.minDate,this.maxDate)-1);break;case 33:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?-kn*10:-kn);break;case 34:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?kn*10:kn);break;case 13:case 32:this._selectionKeyPressed=!0;break;default:return}this._dateAdapter.compareDate(i,this.activeDate)&&this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked(),e.preventDefault()}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._yearSelected({value:this._dateAdapter.getYear(this._activeDate),event:e}),this._selectionKeyPressed=!1)}_getActiveCell(){return Wc(this._dateAdapter,this.activeDate,this.minDate,this.maxDate)}_focusActiveCell(){this._matCalendarBody._focusActiveCell()}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_getDateFromYear(e){let i=this._dateAdapter.getMonth(this.activeDate),r=this._dateAdapter.getNumDaysInMonth(this._dateAdapter.createDate(e,i,1));return this._dateAdapter.createDate(e,i,Math.min(this._dateAdapter.getDate(this.activeDate),r))}_createCellForYear(e){let i=this._dateAdapter.createDate(e,0,1),r=this._dateAdapter.getYearName(i),o=this.dateClass?this.dateClass(i,"multi-year"):void 0;return new Gc(e,r,r,this._shouldEnableYear(e),o)}_shouldEnableYear(e){if(e==null||this.maxDate&&e>this._dateAdapter.getYear(this.maxDate)||this.minDate&&e<this._dateAdapter.getYear(this.minDate))return!1;if(!this.dateFilter)return!0;let i=this._dateAdapter.createDate(e,0,1);for(let r=i;this._dateAdapter.getYear(r)==e;r=this._dateAdapter.addCalendarDays(r,1))if(this.dateFilter(r))return!0;return!1}_isRtl(){return this._dir&&this._dir.value==="rtl"}_setSelectedYear(e){if(this._selectedYear.set(null),e instanceof Yn){let i=e.start||e.end;i&&this._selectedYear.set(this._dateAdapter.getYear(i))}else e&&this._selectedYear.set(this._dateAdapter.getYear(e))}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=x({type:t,selectors:[["mat-multi-year-view"]],viewQuery:function(i,r){if(i&1&&Ce(Ps,5),i&2){let o;O(o=N())&&(r._matCalendarBody=o.first)}},inputs:{activeDate:"activeDate",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass"},outputs:{selectedChange:"selectedChange",yearSelected:"yearSelected",activeDateChange:"activeDateChange"},exportAs:["matMultiYearView"],decls:5,vars:7,consts:[["role","grid",1,"mat-calendar-table"],["aria-hidden","true",1,"mat-calendar-table-header"],["colspan","4",1,"mat-calendar-table-header-divider"],["mat-calendar-body","",3,"selectedValueChange","activeDateChange","keyup","keydown","rows","todayValue","startValue","endValue","numCols","cellAspectRatio","activeCell"]],template:function(i,r){i&1&&(m(0,"table",0)(1,"thead",1)(2,"tr"),T(3,"th",2),f()(),m(4,"tbody",3),M("selectedValueChange",function(a){return r._yearSelected(a)})("activeDateChange",function(a){return r._updateActiveDate(a)})("keyup",function(a){return r._handleCalendarBodyKeyup(a)})("keydown",function(a){return r._handleCalendarBodyKeydown(a)}),f()()),i&2&&(p(4),R("rows",r._years())("todayValue",r._todayYear())("startValue",r._selectedYear())("endValue",r._selectedYear())("numCols",4)("cellAspectRatio",4/7)("activeCell",r._getActiveCell()))},dependencies:[Ps],encapsulation:2,changeDetection:0})}return t})();function WS(t,n,e,i,r){let o=t.getYear(n),a=t.getYear(e),s=GS(t,i,r);return Math.floor((o-s)/kn)===Math.floor((a-s)/kn)}function Wc(t,n,e,i){let r=t.getYear(n);return sB(r-GS(t,e,i),kn)}function GS(t,n,e){let i=0;return e?i=t.getYear(e)-kn+1:n&&(i=t.getYear(n)),i}function sB(t,n){return(t%n+n)%n}var US=(()=>{class t{_changeDetectorRef=c(De);_dateFormats=c(ra,{optional:!0});_dateAdapter=c(fn,{optional:!0});_dir=c(nt,{optional:!0});_rerenderSubscription=oe.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(e){let i=this._activeDate,r=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(r,this.minDate,this.maxDate),this._dateAdapter.getYear(i)!==this._dateAdapter.getYear(this._activeDate)&&this._init()}_activeDate;get selected(){return this._selected}set selected(e){e instanceof Yn?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setSelectedMonth(e)}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;selectedChange=new I;monthSelected=new I;activeDateChange=new I;_matCalendarBody;_months=E([]);_yearLabel=E("");_todayMonth=E(null);_selectedMonth=E(null);constructor(){this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(Je(null)).subscribe(()=>this._init())}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_monthSelected(e){let i=e.value,r=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),i,1);this.monthSelected.emit(r);let o=this._getDateFromMonth(i);this.selectedChange.emit(o)}_updateActiveDate(e){let i=e.value,r=this._activeDate;this.activeDate=this._getDateFromMonth(i),this._dateAdapter.compareDate(r,this.activeDate)&&this.activeDateChange.emit(this.activeDate)}_handleCalendarBodyKeydown(e){let i=this._activeDate,r=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,r?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,r?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,-4);break;case 40:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,4);break;case 36:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,-this._dateAdapter.getMonth(this._activeDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,11-this._dateAdapter.getMonth(this._activeDate));break;case 33:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?-10:-1);break;case 34:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?10:1);break;case 13:case 32:this._selectionKeyPressed=!0;break;default:return}this._dateAdapter.compareDate(i,this.activeDate)&&(this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked()),e.preventDefault()}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._monthSelected({value:this._dateAdapter.getMonth(this._activeDate),event:e}),this._selectionKeyPressed=!1)}_init(){this._setSelectedMonth(this.selected),this._todayMonth.set(this._getMonthInCurrentYear(this._dateAdapter.today())),this._yearLabel.set(this._dateAdapter.getYearName(this.activeDate));let e=this._dateAdapter.getMonthNames("short");this._months.set([[0,1,2,3],[4,5,6,7],[8,9,10,11]].map(i=>i.map(r=>this._createCellForMonth(r,e[r])))),this._changeDetectorRef.markForCheck()}_focusActiveCell(){this._matCalendarBody._focusActiveCell()}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_getMonthInCurrentYear(e){return e&&this._dateAdapter.getYear(e)==this._dateAdapter.getYear(this.activeDate)?this._dateAdapter.getMonth(e):null}_getDateFromMonth(e){let i=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,1),r=this._dateAdapter.getNumDaysInMonth(i);return this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,Math.min(this._dateAdapter.getDate(this.activeDate),r))}_createCellForMonth(e,i){let r=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,1),o=this._dateAdapter.format(r,this._dateFormats.display.monthYearA11yLabel),a=this.dateClass?this.dateClass(r,"year"):void 0;return new Gc(e,i.toLocaleUpperCase(),o,this._shouldEnableMonth(e),a)}_shouldEnableMonth(e){let i=this._dateAdapter.getYear(this.activeDate);if(e==null||this._isYearAndMonthAfterMaxDate(i,e)||this._isYearAndMonthBeforeMinDate(i,e))return!1;if(!this.dateFilter)return!0;let r=this._dateAdapter.createDate(i,e,1);for(let o=r;this._dateAdapter.getMonth(o)==e;o=this._dateAdapter.addCalendarDays(o,1))if(this.dateFilter(o))return!0;return!1}_isYearAndMonthAfterMaxDate(e,i){if(this.maxDate){let r=this._dateAdapter.getYear(this.maxDate),o=this._dateAdapter.getMonth(this.maxDate);return e>r||e===r&&i>o}return!1}_isYearAndMonthBeforeMinDate(e,i){if(this.minDate){let r=this._dateAdapter.getYear(this.minDate),o=this._dateAdapter.getMonth(this.minDate);return e<r||e===r&&i<o}return!1}_isRtl(){return this._dir&&this._dir.value==="rtl"}_setSelectedMonth(e){e instanceof Yn?this._selectedMonth.set(this._getMonthInCurrentYear(e.start)||this._getMonthInCurrentYear(e.end)):this._selectedMonth.set(this._getMonthInCurrentYear(e))}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=x({type:t,selectors:[["mat-year-view"]],viewQuery:function(i,r){if(i&1&&Ce(Ps,5),i&2){let o;O(o=N())&&(r._matCalendarBody=o.first)}},inputs:{activeDate:"activeDate",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass"},outputs:{selectedChange:"selectedChange",monthSelected:"monthSelected",activeDateChange:"activeDateChange"},exportAs:["matYearView"],decls:5,vars:9,consts:[["role","grid",1,"mat-calendar-table"],["aria-hidden","true",1,"mat-calendar-table-header"],["colspan","4",1,"mat-calendar-table-header-divider"],["mat-calendar-body","",3,"selectedValueChange","activeDateChange","keyup","keydown","label","rows","todayValue","startValue","endValue","labelMinRequiredCells","numCols","cellAspectRatio","activeCell"]],template:function(i,r){i&1&&(m(0,"table",0)(1,"thead",1)(2,"tr"),T(3,"th",2),f()(),m(4,"tbody",3),M("selectedValueChange",function(a){return r._monthSelected(a)})("activeDateChange",function(a){return r._updateActiveDate(a)})("keyup",function(a){return r._handleCalendarBodyKeyup(a)})("keydown",function(a){return r._handleCalendarBodyKeydown(a)}),f()()),i&2&&(p(4),R("label",r._yearLabel())("rows",r._months())("todayValue",r._todayMonth())("startValue",r._selectedMonth())("endValue",r._selectedMonth())("labelMinRequiredCells",2)("numCols",4)("cellAspectRatio",4/7)("activeCell",r._dateAdapter.getMonth(r.activeDate)))},dependencies:[Ps],encapsulation:2,changeDetection:0})}return t})(),qS=(()=>{class t{_intl=c(Ls);calendar=c(qc);_dateAdapter=c(fn,{optional:!0});_dateFormats=c(ra,{optional:!0});_periodButtonText;_periodButtonDescription;_periodButtonLabel;_prevButtonLabel;_nextButtonLabel;constructor(){c(Ze).load(Vi);let e=c(De);this._updateLabels(),this.calendar.stateChanges.subscribe(()=>{this._updateLabels(),e.markForCheck()})}get periodButtonText(){return this._periodButtonText}get periodButtonDescription(){return this._periodButtonDescription}get periodButtonLabel(){return this._periodButtonLabel}get prevButtonLabel(){return this._prevButtonLabel}get nextButtonLabel(){return this._nextButtonLabel}currentPeriodClicked(){this.calendar.currentView=this.calendar.currentView=="month"?"multi-year":"month"}previousClicked(){this.previousEnabled()&&(this.calendar.activeDate=this.calendar.currentView=="month"?this._dateAdapter.addCalendarMonths(this.calendar.activeDate,-1):this._dateAdapter.addCalendarYears(this.calendar.activeDate,this.calendar.currentView=="year"?-1:-kn))}nextClicked(){this.nextEnabled()&&(this.calendar.activeDate=this.calendar.currentView=="month"?this._dateAdapter.addCalendarMonths(this.calendar.activeDate,1):this._dateAdapter.addCalendarYears(this.calendar.activeDate,this.calendar.currentView=="year"?1:kn))}previousEnabled(){return this.calendar.minDate?!this.calendar.minDate||!this._isSameView(this.calendar.activeDate,this.calendar.minDate):!0}nextEnabled(){return!this.calendar.maxDate||!this._isSameView(this.calendar.activeDate,this.calendar.maxDate)}_updateLabels(){let e=this.calendar,i=this._intl,r=this._dateAdapter;e.currentView==="month"?(this._periodButtonText=r.format(e.activeDate,this._dateFormats.display.monthYearLabel).toLocaleUpperCase(),this._periodButtonDescription=r.format(e.activeDate,this._dateFormats.display.monthYearLabel).toLocaleUpperCase(),this._periodButtonLabel=i.switchToMultiYearViewLabel,this._prevButtonLabel=i.prevMonthLabel,this._nextButtonLabel=i.nextMonthLabel):e.currentView==="year"?(this._periodButtonText=r.getYearName(e.activeDate),this._periodButtonDescription=r.getYearName(e.activeDate),this._periodButtonLabel=i.switchToMonthViewLabel,this._prevButtonLabel=i.prevYearLabel,this._nextButtonLabel=i.nextYearLabel):(this._periodButtonText=i.formatYearRange(...this._formatMinAndMaxYearLabels()),this._periodButtonDescription=i.formatYearRangeLabel(...this._formatMinAndMaxYearLabels()),this._periodButtonLabel=i.switchToMonthViewLabel,this._prevButtonLabel=i.prevMultiYearLabel,this._nextButtonLabel=i.nextMultiYearLabel)}_isSameView(e,i){return this.calendar.currentView=="month"?this._dateAdapter.getYear(e)==this._dateAdapter.getYear(i)&&this._dateAdapter.getMonth(e)==this._dateAdapter.getMonth(i):this.calendar.currentView=="year"?this._dateAdapter.getYear(e)==this._dateAdapter.getYear(i):WS(this._dateAdapter,e,i,this.calendar.minDate,this.calendar.maxDate)}_formatMinAndMaxYearLabels(){let i=this._dateAdapter.getYear(this.calendar.activeDate)-Wc(this._dateAdapter,this.calendar.activeDate,this.calendar.minDate,this.calendar.maxDate),r=i+kn-1,o=this._dateAdapter.getYearName(this._dateAdapter.createDate(i,0,1)),a=this._dateAdapter.getYearName(this._dateAdapter.createDate(r,0,1));return[o,a]}_periodButtonLabelId=c(Ke).getId("mat-calendar-period-label-");static \u0275fac=function(i){return new(i||t)};static \u0275cmp=x({type:t,selectors:[["mat-calendar-header"]],exportAs:["matCalendarHeader"],ngContentSelectors:G2,decls:17,vars:13,consts:[[1,"mat-calendar-header"],[1,"mat-calendar-controls"],["aria-live","polite",1,"cdk-visually-hidden",3,"id"],["matButton","","type","button",1,"mat-calendar-period-button",3,"click"],["aria-hidden","true"],["viewBox","0 0 10 5","focusable","false","aria-hidden","true",1,"mat-calendar-arrow"],["points","0,0 5,5 10,0"],[1,"mat-calendar-spacer"],["matIconButton","","type","button","disabledInteractive","",1,"mat-calendar-previous-button",3,"click","disabled","matTooltip"],["viewBox","0 0 24 24","focusable","false","aria-hidden","true"],["d","M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"],["matIconButton","","type","button","disabledInteractive","",1,"mat-calendar-next-button",3,"click","disabled","matTooltip"],["d","M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"]],template:function(i,r){i&1&&(Se(),m(0,"div",0)(1,"div",1)(2,"span",2),g(3),f(),m(4,"button",3),M("click",function(){return r.currentPeriodClicked()}),m(5,"span",4),g(6),f(),Di(),m(7,"svg",5),T(8,"polygon",6),f()(),xa(),T(9,"div",7),ee(10),m(11,"button",8),M("click",function(){return r.previousClicked()}),Di(),m(12,"svg",9),T(13,"path",10),f()(),xa(),m(14,"button",11),M("click",function(){return r.nextClicked()}),Di(),m(15,"svg",9),T(16,"path",12),f()()()()),i&2&&(p(2),R("id",r._periodButtonLabelId),p(),ae(r.periodButtonDescription),p(),Z("aria-label",r.periodButtonLabel)("aria-describedby",r._periodButtonLabelId),p(2),ae(r.periodButtonText),p(),L("mat-calendar-invert",r.calendar.currentView!=="month"),p(4),R("disabled",!r.previousEnabled())("matTooltip",r.prevButtonLabel),Z("aria-label",r.prevButtonLabel),p(3),R("disabled",!r.nextEnabled())("matTooltip",r.nextButtonLabel),Z("aria-label",r.nextButtonLabel))},dependencies:[zt,ji,na],encapsulation:2,changeDetection:0})}return t})(),qc=(()=>{class t{_dateAdapter=c(fn,{optional:!0});_dateFormats=c(ra,{optional:!0});_changeDetectorRef=c(De);_elementRef=c(B);headerComponent;_calendarHeaderPortal;_intlChanges;_moveFocusOnNextTick=!1;get startAt(){return this._startAt}set startAt(e){this._startAt=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_startAt=null;startView="month";get selected(){return this._selected}set selected(e){e instanceof Yn?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;selectedChange=new I;yearSelected=new I;monthSelected=new I;viewChanged=new I(!0);_userSelection=new I;_userDragDrop=new I;monthView;yearView;multiYearView;get activeDate(){return this._clampedActiveDate}set activeDate(e){this._clampedActiveDate=this._dateAdapter.clampDate(e,this.minDate,this.maxDate),this.stateChanges.next(),this._changeDetectorRef.markForCheck()}_clampedActiveDate;get currentView(){return this._currentView}set currentView(e){let i=this._currentView!==e?e:null;this._currentView=e,this._moveFocusOnNextTick=!0,this._changeDetectorRef.markForCheck(),i&&(this.stateChanges.next(),this.viewChanged.emit(i))}_currentView;_activeDrag=null;stateChanges=new S;constructor(){this._intlChanges=c(Ls).changes.subscribe(()=>{this._changeDetectorRef.markForCheck(),this.stateChanges.next()})}ngAfterContentInit(){this._calendarHeaderPortal=new Mn(this.headerComponent||qS),this.activeDate=this.startAt||this._dateAdapter.today(),this._currentView=this.startView}ngAfterViewChecked(){this._moveFocusOnNextTick&&(this._moveFocusOnNextTick=!1,this.focusActiveCell())}ngOnDestroy(){this._intlChanges.unsubscribe(),this.stateChanges.complete()}ngOnChanges(e){let i=e.minDate&&!this._dateAdapter.sameDate(e.minDate.previousValue,e.minDate.currentValue)?e.minDate:void 0,r=e.maxDate&&!this._dateAdapter.sameDate(e.maxDate.previousValue,e.maxDate.currentValue)?e.maxDate:void 0,o=i||r||e.dateFilter;if(o&&!o.firstChange){let a=this._getCurrentViewComponent();a&&(this._elementRef.nativeElement.contains(Li())&&(this._moveFocusOnNextTick=!0),this._changeDetectorRef.detectChanges(),a._init())}this.stateChanges.next()}focusActiveCell(){this._getCurrentViewComponent()?._focusActiveCell(!1)}updateTodaysDate(){this._getCurrentViewComponent()?._init()}_dateSelected(e){let i=e.value;(this.selected instanceof Yn||i&&!this._dateAdapter.sameDate(i,this.selected))&&this.selectedChange.emit(i),this._userSelection.emit(e)}_yearSelectedInMultiYearView(e){this.yearSelected.emit(e)}_monthSelectedInYearView(e){this.monthSelected.emit(e)}_goToDateInView(e,i){this.activeDate=e,this.currentView=i}_dragStarted(e){this._activeDrag=e}_dragEnded(e){this._activeDrag&&(e.value&&this._userDragDrop.emit(e),this._activeDrag=null)}_getCurrentViewComponent(){return this.monthView||this.yearView||this.multiYearView}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=x({type:t,selectors:[["mat-calendar"]],viewQuery:function(i,r){if(i&1&&Ce(jS,5)(US,5)(HS,5),i&2){let o;O(o=N())&&(r.monthView=o.first),O(o=N())&&(r.yearView=o.first),O(o=N())&&(r.multiYearView=o.first)}},hostAttrs:[1,"mat-calendar"],inputs:{headerComponent:"headerComponent",startAt:"startAt",startView:"startView",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass",comparisonStart:"comparisonStart",comparisonEnd:"comparisonEnd",startDateAccessibleName:"startDateAccessibleName",endDateAccessibleName:"endDateAccessibleName"},outputs:{selectedChange:"selectedChange",yearSelected:"yearSelected",monthSelected:"monthSelected",viewChanged:"viewChanged",_userSelection:"_userSelection",_userDragDrop:"_userDragDrop"},exportAs:["matCalendar"],features:[Be([oB]),Pe],decls:5,vars:2,consts:[[3,"cdkPortalOutlet"],["cdkMonitorSubtreeFocus","","tabindex","-1",1,"mat-calendar-content"],[3,"activeDate","selected","dateFilter","maxDate","minDate","dateClass","comparisonStart","comparisonEnd","startDateAccessibleName","endDateAccessibleName","activeDrag"],[3,"activeDate","selected","dateFilter","maxDate","minDate","dateClass"],[3,"activeDateChange","_userSelection","dragStarted","dragEnded","activeDate","selected","dateFilter","maxDate","minDate","dateClass","comparisonStart","comparisonEnd","startDateAccessibleName","endDateAccessibleName","activeDrag"],[3,"activeDateChange","monthSelected","selectedChange","activeDate","selected","dateFilter","maxDate","minDate","dateClass"],[3,"activeDateChange","yearSelected","selectedChange","activeDate","selected","dateFilter","maxDate","minDate","dateClass"]],template:function(i,r){if(i&1&&(ct(0,q2,0,0,"ng-template",0),m(1,"div",1),j(2,Y2,1,11,"mat-month-view",2)(3,Q2,1,6,"mat-year-view",3)(4,Z2,1,6,"mat-multi-year-view",3),f()),i&2){let o;R("cdkPortalOutlet",r._calendarHeaderPortal),p(2),H((o=r.currentView)==="month"?2:o==="year"?3:o==="multi-year"?4:-1)}},dependencies:[mn,gc,jS,US,HS],styles:[`.mat-calendar {
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
`],encapsulation:2,changeDetection:0})}return t})();var lB=(()=>{class t{_elementRef=c(B);_animationsDisabled=je();_changeDetectorRef=c(De);_globalModel=c(vh);_dateAdapter=c(fn);_ngZone=c(V);_rangeSelectionStrategy=c($S,{optional:!0});_stateChanges;_model;_eventCleanups;_animationFallback;_calendar;color;datepicker;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;_isAbove=!1;_animationDone=new S;_isAnimating=!1;_closeButtonText;_closeButtonFocused=!1;_actionsPortal=null;_dialogLabelId=null;constructor(){if(c(Ze).load(Vi),this._closeButtonText=c(Ls).closeCalendarLabel,!this._animationsDisabled){let e=this._elementRef.nativeElement,i=c(Te);this._eventCleanups=this._ngZone.runOutsideAngular(()=>[i.listen(e,"animationstart",this._handleAnimationEvent),i.listen(e,"animationend",this._handleAnimationEvent),i.listen(e,"animationcancel",this._handleAnimationEvent)])}}ngAfterViewInit(){this._stateChanges=this.datepicker.stateChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()}),this._calendar.focusActiveCell()}ngOnDestroy(){clearTimeout(this._animationFallback),this._eventCleanups?.forEach(e=>e()),this._stateChanges?.unsubscribe(),this._animationDone.complete()}_handleUserSelection(e){let i=this._model.selection,r=e.value,o=i instanceof Yn;if(o&&this._rangeSelectionStrategy){let a=this._rangeSelectionStrategy.selectionFinished(r,i,e.event);this._model.updateSelection(a,this)}else r&&(o||!this._dateAdapter.sameDate(r,i))&&this._model.add(r);(!this._model||this._model.isComplete())&&!this._actionsPortal&&this.datepicker.close()}_handleUserDragDrop(e){this._model.updateSelection(e.value,this)}_startExitAnimation(){this._elementRef.nativeElement.classList.add("mat-datepicker-content-exit"),this._animationsDisabled?this._animationDone.next():(clearTimeout(this._animationFallback),this._animationFallback=setTimeout(()=>{this._isAnimating||this._animationDone.next()},200))}_handleAnimationEvent=e=>{let i=this._elementRef.nativeElement;e.target!==i||!e.animationName.startsWith("_mat-datepicker-content")||(clearTimeout(this._animationFallback),this._isAnimating=e.type==="animationstart",i.classList.toggle("mat-datepicker-content-animating",this._isAnimating),this._isAnimating||this._animationDone.next())};_getSelected(){return this._model.selection}_applyPendingSelection(){this._model!==this._globalModel&&this._globalModel.updateSelection(this._model.selection,this)}_assignActions(e,i){this._model=e?this._globalModel.clone():this._globalModel,this._actionsPortal=e,i&&this._changeDetectorRef.detectChanges()}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=x({type:t,selectors:[["mat-datepicker-content"]],viewQuery:function(i,r){if(i&1&&Ce(qc,5),i&2){let o;O(o=N())&&(r._calendar=o.first)}},hostAttrs:[1,"mat-datepicker-content"],hostVars:6,hostBindings:function(i,r){i&2&&(St(r.color?"mat-"+r.color:""),L("mat-datepicker-content-touch",r.datepicker.touchUi)("mat-datepicker-content-animations-enabled",!r._animationsDisabled))},inputs:{color:"color"},exportAs:["matDatepickerContent"],decls:5,vars:26,consts:[["cdkTrapFocus","","role","dialog",1,"mat-datepicker-content-container"],[3,"yearSelected","monthSelected","viewChanged","_userSelection","_userDragDrop","id","startAt","startView","minDate","maxDate","dateFilter","headerComponent","selected","dateClass","comparisonStart","comparisonEnd","startDateAccessibleName","endDateAccessibleName"],[3,"cdkPortalOutlet"],["type","button","matButton","elevated",1,"mat-datepicker-close-button",3,"focus","blur","click","color"]],template:function(i,r){i&1&&(m(0,"div",0)(1,"mat-calendar",1),M("yearSelected",function(a){return r.datepicker._selectYear(a)})("monthSelected",function(a){return r.datepicker._selectMonth(a)})("viewChanged",function(a){return r.datepicker._viewChanged(a)})("_userSelection",function(a){return r._handleUserSelection(a)})("_userDragDrop",function(a){return r._handleUserDragDrop(a)}),f(),ct(2,K2,0,0,"ng-template",2),m(3,"button",3),M("focus",function(){return r._closeButtonFocused=!0})("blur",function(){return r._closeButtonFocused=!1})("click",function(){return r.datepicker.close()}),g(4),f()()),i&2&&(L("mat-datepicker-content-container-with-custom-header",r.datepicker.calendarHeaderComponent)("mat-datepicker-content-container-with-actions",r._actionsPortal),Z("aria-modal",!0)("aria-labelledby",r._dialogLabelId??void 0),p(),St(r.datepicker.panelClass),R("id",r.datepicker.id)("startAt",r.datepicker.startAt)("startView",r.datepicker.startView)("minDate",r.datepicker._getMinDate())("maxDate",r.datepicker._getMaxDate())("dateFilter",r.datepicker._getDateFilter())("headerComponent",r.datepicker.calendarHeaderComponent)("selected",r._getSelected())("dateClass",r.datepicker.dateClass)("comparisonStart",r.comparisonStart)("comparisonEnd",r.comparisonEnd)("startDateAccessibleName",r.startDateAccessibleName)("endDateAccessibleName",r.endDateAccessibleName),p(),R("cdkPortalOutlet",r._actionsPortal),p(),L("cdk-visually-hidden",!r._closeButtonFocused),R("color",r.color||"primary"),p(),ae(r._closeButtonText))},dependencies:[qv,qc,mn,zt],styles:[`@keyframes _mat-datepicker-content-dropdown-enter {
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
`],encapsulation:2,changeDetection:0})}return t})();var cB=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=A({type:t,selectors:[["","matDatepickerToggleIcon",""]]})}return t})(),dB=(()=>{class t{_intl=c(Ls);_changeDetectorRef=c(De);_stateChanges=oe.EMPTY;datepicker;tabIndex=null;ariaLabel;get disabled(){return this._disabled===void 0&&this.datepicker?this.datepicker.disabled:!!this._disabled}set disabled(e){this._disabled=e}_disabled;disableRipple=!1;_customIcon;_button;constructor(){let e=c(new Ri("tabindex"),{optional:!0}),i=Number(e);this.tabIndex=i||i===0?i:null}ngOnChanges(e){e.datepicker&&this._watchStateChanges()}ngOnDestroy(){this._stateChanges.unsubscribe()}ngAfterContentInit(){this._watchStateChanges()}_open(e){this.datepicker&&!this.disabled&&(this.datepicker.open(),e.stopPropagation())}_watchStateChanges(){let e=this.datepicker?this.datepicker.stateChanges:q(),i=this.datepicker&&this.datepicker.datepickerInput?this.datepicker.datepickerInput.stateChanges:q(),r=this.datepicker?Ot(this.datepicker.openedStream,this.datepicker.closedStream):q();this._stateChanges.unsubscribe(),this._stateChanges=Ot(this._intl.changes,e,i,r).subscribe(()=>this._changeDetectorRef.markForCheck())}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=x({type:t,selectors:[["mat-datepicker-toggle"]],contentQueries:function(i,r,o){if(i&1&&Mt(o,cB,5),i&2){let a;O(a=N())&&(r._customIcon=a.first)}},viewQuery:function(i,r){if(i&1&&Ce(X2,5),i&2){let o;O(o=N())&&(r._button=o.first)}},hostAttrs:[1,"mat-datepicker-toggle"],hostVars:8,hostBindings:function(i,r){i&1&&M("click",function(a){return r._open(a)}),i&2&&(Z("tabindex",null)("data-mat-calendar",r.datepicker?r.datepicker.id:null),L("mat-datepicker-toggle-active",r.datepicker&&r.datepicker.opened)("mat-accent",r.datepicker&&r.datepicker.color==="accent")("mat-warn",r.datepicker&&r.datepicker.color==="warn"))},inputs:{datepicker:[0,"for","datepicker"],tabIndex:"tabIndex",ariaLabel:[0,"aria-label","ariaLabel"],disabled:[2,"disabled","disabled",te],disableRipple:"disableRipple"},exportAs:["matDatepickerToggle"],features:[Pe],ngContentSelectors:eB,decls:4,vars:7,consts:[["button",""],["matIconButton","","type","button",3,"tabIndex","disabled","disableRipple"],["viewBox","0 0 24 24","width","24px","height","24px","fill","currentColor","focusable","false","aria-hidden","true",1,"mat-datepicker-toggle-default-icon"],["d","M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"]],template:function(i,r){i&1&&(Se(J2),m(0,"button",1,0),j(2,tB,2,0,":svg:svg",2),ee(3),f()),i&2&&(R("tabIndex",r.disabled?-1:r.tabIndex)("disabled",r.disabled)("disableRipple",r.disableRipple),Z("aria-haspopup",r.datepicker?"dialog":null)("aria-label",r.ariaLabel||r._intl.openCalendarLabel)("aria-expanded",r.datepicker?r.datepicker.opened:null),p(2),H(r._customIcon?-1:2))},dependencies:[ji],styles:[`.mat-datepicker-toggle {
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
`],encapsulation:2,changeDetection:0})}return t})();var YS=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=$({type:t});static \u0275inj=z({providers:[Ls],imports:[ut,Wn,Wo,Hi,lB,dB,qS,ve,$n]})}return t})();var mB=/^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|(?:(?:\+|-)\d{2}:\d{2}))?)?$/,fB=/^(\d?\d)[:.](\d?\d)(?:[:.](\d?\d))?\s*(AM|PM)?$/i;function Gb(t,n){let e=Array(t);for(let i=0;i<t;i++)e[i]=n(i);return e}var hB=(()=>{class t extends fn{_matDateLocale=c(Vb,{optional:!0});constructor(){super();let e=c(Vb,{optional:!0});e!==void 0&&(this._matDateLocale=e),super.setLocale(this._matDateLocale)}getYear(e){return e.getFullYear()}getMonth(e){return e.getMonth()}getDate(e){return e.getDate()}getDayOfWeek(e){return e.getDay()}getMonthNames(e){let i=new Intl.DateTimeFormat(this.locale,{month:e,timeZone:"utc"});return Gb(12,r=>this._format(i,new Date(2017,r,1)))}getDateNames(){let e=new Intl.DateTimeFormat(this.locale,{day:"numeric",timeZone:"utc"});return Gb(31,i=>this._format(e,new Date(2017,0,i+1)))}getDayOfWeekNames(e){let i=new Intl.DateTimeFormat(this.locale,{weekday:e,timeZone:"utc"});return Gb(7,r=>this._format(i,new Date(2017,0,r+1)))}getYearName(e){let i=new Intl.DateTimeFormat(this.locale,{year:"numeric",timeZone:"utc"});return this._format(i,e)}getFirstDayOfWeek(){if(typeof Intl<"u"&&Intl.Locale){let e=new Intl.Locale(this.locale),i=(e.getWeekInfo?.()||e.weekInfo)?.firstDay??0;return i===7?0:i}return 0}getNumDaysInMonth(e){return this.getDate(this._createDateWithOverflow(this.getYear(e),this.getMonth(e)+1,0))}clone(e){return new Date(e.getTime())}createDate(e,i,r){let o=this._createDateWithOverflow(e,i,r);return o.getMonth()!=i,o}today(){return new Date}parse(e,i){return typeof e=="number"?new Date(e):e?new Date(Date.parse(e)):null}format(e,i){if(!this.isValid(e))throw Error("NativeDateAdapter: Cannot format invalid date.");let r=new Intl.DateTimeFormat(this.locale,X(C({},i),{timeZone:"utc"}));return this._format(r,e)}addCalendarYears(e,i){return this.addCalendarMonths(e,i*12)}addCalendarMonths(e,i){let r=this._createDateWithOverflow(this.getYear(e),this.getMonth(e)+i,this.getDate(e));return this.getMonth(r)!=((this.getMonth(e)+i)%12+12)%12&&(r=this._createDateWithOverflow(this.getYear(r),this.getMonth(r),0)),r}addCalendarDays(e,i){return this._createDateWithOverflow(this.getYear(e),this.getMonth(e),this.getDate(e)+i)}toIso8601(e){return[e.getUTCFullYear(),this._2digit(e.getUTCMonth()+1),this._2digit(e.getUTCDate())].join("-")}deserialize(e){if(typeof e=="string"){if(!e)return null;if(mB.test(e)){let i=new Date(e);if(this.isValid(i))return i}}return super.deserialize(e)}isDateInstance(e){return e instanceof Date}isValid(e){return!isNaN(e.getTime())}invalid(){return new Date(NaN)}setTime(e,i,r,o){let a=this.clone(e);return a.setHours(i,r,o,0),a}getHours(e){return e.getHours()}getMinutes(e){return e.getMinutes()}getSeconds(e){return e.getSeconds()}parseTime(e,i){if(typeof e!="string")return e instanceof Date?new Date(e.getTime()):null;let r=e.trim();if(r.length===0)return null;let o=this._parseTimeString(r);if(o===null){let a=r.replace(/[^0-9:(AM|PM)]/gi,"").trim();a.length>0&&(o=this._parseTimeString(a))}return o||this.invalid()}addSeconds(e,i){return new Date(e.getTime()+i*1e3)}_createDateWithOverflow(e,i,r){let o=new Date;return o.setFullYear(e,i,r),o.setHours(0,0,0,0),o}_2digit(e){return("00"+e).slice(-2)}_format(e,i){let r=new Date;return r.setUTCFullYear(i.getFullYear(),i.getMonth(),i.getDate()),r.setUTCHours(i.getHours(),i.getMinutes(),i.getSeconds(),i.getMilliseconds()),e.format(r)}_parseTimeString(e){let i=e.toUpperCase().match(fB);if(i){let r=parseInt(i[1]),o=parseInt(i[2]),a=i[3]==null?void 0:parseInt(i[3]),s=i[4];if(r===12?r=s==="AM"?0:r:s==="PM"&&(r+=12),qb(r,0,23)&&qb(o,0,59)&&(a==null||qb(a,0,59)))return this.setTime(this.today(),r,o,a||0)}return null}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})();function qb(t,n,e){return!isNaN(t)&&t>=n&&t<=e}var pB={parse:{dateInput:null,timeInput:null},display:{dateInput:{year:"numeric",month:"numeric",day:"numeric"},timeInput:{hour:"numeric",minute:"numeric"},monthYearLabel:{year:"numeric",month:"short"},dateA11yLabel:{year:"numeric",month:"long",day:"numeric"},monthYearA11yLabel:{year:"numeric",month:"long"},timeOptionLabel:{hour:"numeric",minute:"numeric"}}};var QS=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=$({type:t});static \u0275inj=z({providers:[gB()]})}return t})();function gB(t=pB){return[{provide:fn,useClass:hB},{provide:ra,useValue:t}]}function _B(t,n){if(t&1&&(m(0,"p",3),g(1),f(),m(2,"p",9),g(3),f()),t&2){let e=D();p(),fe(" Dagsrapport f\xF6r ",e.childSignal().name," "),p(2),fe(" ",e.dateLabel," ")}}function vB(t,n){t&1&&(m(0,"p",3),g(1," V\xE4lj datum f\xF6r att se n\xE4rvaro och journal "),f())}function bB(t,n){t&1&&g(0," V\xE4lj datum f\xF6r att se n\xE4rvaro och journal ")}function yB(t,n){if(t&1&&g(0),t&2){let e=D();fe(" N\xE4rvaro ",e.dateLabel," ")}}var bh=class t{childSignal=Ae.required();journalService=c(Rs);attendanceService=c(Yr);selected=E(null);currentJournal=E(null);currentChildAttendance="";dateLabel="";yesterday=new Date;statusOptions=[{value:"NOT_SET",label:"\u2014"},{value:"CHECKED_IN",label:"Incheckad"},{value:"CHECKED_OUT",label:"Utcheckad"},{value:"LEAVE",label:"Ledig"},{value:"ABSENT",label:"Fr\xE5nvarande"}];months=["Januari","Februari","Mars","April","Maj","Juni","Juli","Augusti","September","Oktober","November","December"];days=["S\xF6ndag","M\xE5ndag","Tisdag","Onsdag","Torsdag","Fredag","L\xF6rdag"];constructor(){this.yesterday.setDate(this.yesterday.getDate()-1),Jt(n=>{let e=this.selected(),i=this.childSignal().id;if(!e){this.currentJournal.set(null);return}this.dateLabel=`${this.days[e.getDay()]} ${e.getDate()} ${this.months[e.getMonth()]} ${e.getFullYear()}`;let r=e.getFullYear(),o=String(e.getMonth()+1).padStart(2,"0"),a=String(e.getDate()).padStart(2,"0"),s=`${r}-${o}-${a}`,l=this.attendanceService.getSignal(this.childSignal().id,s)()??"NOT_SET";this.currentChildAttendance=this.statusOptions.find(({value:u})=>u===l)?.label;let d=this.journalService.getJournalByDate(i,s).subscribe({next:u=>{this.currentJournal.set(u)}});n(()=>{d.unsubscribe()})})}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=x({type:t,selectors:[["history"]],inputs:{childSignal:[1,"childSignal"]},outputs:{childSignal:"childSignalChange"},decls:17,vars:8,consts:[[1,"outer-container"],[1,"journal-display"],[1,"journal-header"],[1,"journal-title"],[1,"text-area"],[1,"journal-text"],[1,"calendar-container"],[1,"calendar",3,"selectedChange","selected","maxDate"],[1,"attendance-info"],[1,"bold-label"]],template:function(e,i){if(e&1&&(m(0,"div",0)(1,"mat-card",1)(2,"mat-card-header",2),j(3,_B,4,2),j(4,vB,2,0,"p",3),f(),T(5,"mat-divider"),m(6,"mat-card-content",4)(7,"p",5),g(8),f()()(),m(9,"div",6)(10,"mat-card")(11,"mat-calendar",7),M("selectedChange",function(o){return i.selected.set(o)}),f()(),m(12,"p",8),j(13,bB,1,0),j(14,yB,1,1),m(15,"span",9),g(16),f()()()()),e&2){let r;p(3),H(i.selected()!==null?3:-1),p(),H(i.selected()===null?4:-1),p(4),ae((r=i.currentJournal())==null?null:r.content),p(3),R("selected",i.selected())("maxDate",i.yesterday),p(2),H(i.selected()===null?13:-1),p(),H(i.dateLabel!==""?14:-1),p(2),ae(i.currentChildAttendance)}},dependencies:[Bn,bt,ln,cn,YS,qc,QS,tn],styles:["[_nghost-%COMP%]{display:flex;min-height:0;width:100%;height:100%}.outer-container[_ngcontent-%COMP%]{background:var(--mat-sys-inverse-primary);display:flex;flex-direction:row;justify-content:center;min-height:0;overflow:hidden;flex:1;box-shadow:var(--mat-sys-level2);box-sizing:border-box;padding:1em;gap:1em}.journal-display[_ngcontent-%COMP%]{flex:1;min-height:0;box-shadow:var(--mat-sys-level2);display:flex;flex-direction:column;overflow:hidden}.text-area[_ngcontent-%COMP%]{background-color:var(--mat-sys-surface-variant);min-height:0;overflow-y:auto;border-radius:0% 0% 2% 2%;flex:1}.journal-header[_ngcontent-%COMP%]{display:flex;font-weight:400!important;font-size:large;min-height:11%;background:var(--mat-sys-surface-dim);flex-direction:row;justify-content:center;gap:1em}.calendar-container[_ngcontent-%COMP%]{width:33%;justify-content:center;height:fit-content;box-shadow:var(--mat-sys-level2);border-radius:3%;background:var(--mat-sys-surface-dim)}.attendance-info[_ngcontent-%COMP%]{display:flex;justify-content:center;font-weight:400;gap:1em}.bold-label[_ngcontent-%COMP%]{font-weight:500}.journal-text[_ngcontent-%COMP%]{font:var(--mat-sys-body-large);margin:.5em}"]})};function CB(t,n){if(t&1&&(m(0,"p",8),g(1),f()),t&2){let e=D(2);p(),ae(e.groupSignal().name)}}function wB(t,n){if(t&1){let e=Le();m(0,"div",6)(1,"mat-card-header",7)(2,"span"),g(3),f(),j(4,CB,2,1,"p",8),T(5,"main-presence-container",9),f(),m(6,"div",10)(7,"child-display",11),M("attendanceChangeEvent",function(r){ie(e);let o=D();return re(o.wsUpdateAttendance(r))}),Qe("childSignalChange",function(r){ie(e);let o=D();return Ee(o.childSignal,r)||(o.childSignal=r),re(r)})("dateSignalChange",function(r){ie(e);let o=D();return Ee(o.dateSignal,r)||(o.dateSignal=r),re(r)}),f()()(),m(8,"mat-tab-group",12)(9,"mat-tab",13),T(10,"information",14),f(),m(11,"mat-tab",15),T(12,"main-live-journal",16),f(),m(13,"mat-tab",17)(14,"history",18),Qe("childSignalChange",function(r){ie(e);let o=D();return Ee(o.childSignal,r)||(o.childSignal=r),re(r)}),f()()()}if(t&2){let e=D();p(3),ae(e.childSignal().name),p(),H(e.groupSignal().name!=="alla"?4:-1),p(),R("filter",Ai(e.childSignal().id)),p(2),Ye("childSignal",e.childSignal)("dateSignal",e.dateSignal),p(3),R("childSignal",e.childSignal()),p(),R("label",Ai(e.reportTitle())),p(),R("childSignal",e.childSignal())("groupSignal",e.groupSignal())("contentSignal",e.contentSignal()),p(2),Ye("childSignal",e.childSignal)}}function DB(t,n){if(t&1&&(m(0,"mat-card-header",7)(1,"span"),g(2),f(),m(3,"p",8),g(4),f(),T(5,"main-presence-container",19),f(),m(6,"mat-tab-group",12)(7,"mat-tab",15),T(8,"main-live-journal",16),f()()),t&2){let e=D();p(2),ae(e.groupSignal().name),p(2),ae(e.dateSignal()),p(),R("filter",Ai(e.groupSignal().id)),p(2),R("label",Ai(e.reportTitle())),p(),R("childSignal",e.childSignal())("groupSignal",e.groupSignal())("contentSignal",e.contentSignal())}}function xB(t,n){t&1&&T(0,"account-page",2)}function EB(t,n){t&1&&T(0,"homepage",3)}var Vs=class t{presence=c(to);childSignal=E({name:"",id:0,date:"",status:"NOT_SET",present:null});contentSignal=Ae.required();groupSignal=E({name:"",id:0});allGroups=E([]);groupService=c(fh);childList=ri.required(As);teachers=[{}];dateSignal=E("");months=["Januari","Februari","Mars","April","Maj","Juni","Juli","Augusti","September","Oktober","November","December"];days=["S\xF6ndag","M\xE5ndag","Tisdag","Onsdag","Torsdag","Fredag","L\xF6rdag"];ngOnInit(){this.dateSignal.set(this.getDate()),this.loadGroups()}reportTitle=_t(()=>{switch(this.contentSignal()){case"childView":return this.childSignal().name+"s dagsrapport";case"groupView":return this.groupSignal().name+"s dagsrapport";default:return"ERROR"}});getDate(){let n=new Date;return`${this.days[n.getDay()]} ${n.getDate()} ${this.months[n.getMonth()]} ${n.getFullYear()}`}loadGroups(){this.groupService.getGroups().subscribe({next:n=>{this.allGroups.set(n)}})}handleWebsocketMessage(n){this.childList().handleWebsocketMessage(n)}attendanceChangeEvent=new I;wsUpdateAttendance(n){this.attendanceChangeEvent.emit(n)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=x({type:t,selectors:[["main-panel"]],viewQuery:function(e,i){e&1&&Ii(i.childList,As,5),e&2&&Ti()},inputs:{contentSignal:[1,"contentSignal"]},outputs:{contentSignal:"contentSignalChange",attendanceChangeEvent:"attendanceChangeEvent"},decls:10,vars:8,consts:[[1,"main-card-content"],[1,"main-card-left"],[1,"account-page"],[1,"home-card"],[1,"main-card-right"],[3,"groupSignalChange","childSignalChange","contentSignalChange","allGroupsChange","groupSignal","childSignal","contentSignal","allGroups"],[1,"sub-row"],[1,"title"],[1,"mini-spacer"],[3,"filter"],[1,"childDisplay"],[3,"attendanceChangeEvent","childSignalChange","dateSignalChange","childSignal","dateSignal"],["mat-stretch-tabs","false","mat-align-tabs","start"],["label","Information"],[3,"childSignal"],[3,"label"],[3,"childSignal","groupSignal","contentSignal"],["label","Historik"],[3,"childSignalChange","childSignal"],["isGroup","yes",3,"filter"]],template:function(e,i){e&1&&(m(0,"mat-card")(1,"mat-card-content",0)(2,"div",1),j(3,wB,15,13),j(4,DB,9,9),j(5,xB,1,0,"account-page",2),j(6,EB,1,0,"homepage",3),f(),m(7,"mat-card",4)(8,"div",4)(9,"main-child-list",5),Qe("groupSignalChange",function(o){return Ee(i.groupSignal,o)||(i.groupSignal=o),o})("childSignalChange",function(o){return Ee(i.childSignal,o)||(i.childSignal=o),o})("contentSignalChange",function(o){return Ee(i.contentSignal,o)||(i.contentSignal=o),o})("allGroupsChange",function(o){return Ee(i.allGroups,o)||(i.allGroups=o),o}),f()()()()()),e&2&&(p(3),H(i.contentSignal()==="childView"?3:-1),p(),H(i.contentSignal()==="groupView"?4:-1),p(),H(i.contentSignal()==="teacherView"?5:-1),p(),H(i.contentSignal()==="homeView"?6:-1),p(3),Ye("groupSignal",i.groupSignal)("childSignal",i.childSignal)("contentSignal",i.contentSignal)("allGroups",i.allGroups))},dependencies:[As,Ui,rh,bt,cn,ln,mh,hh,ks,Pc,Uf,ph,gh,bh],styles:["[_nghost-%COMP%]{display:block;margin:0 auto;border-radius:12px;box-sizing:border-box;width:100%;height:100%}mat-card-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font:var(--mat-sys-headline-medium)}h2[_ngcontent-%COMP%]{margin-bottom:16px}mat-card[_ngcontent-%COMP%]{width:100%;height:100%}.main-card-content[_ngcontent-%COMP%]{display:flex;flex-direction:row;box-sizing:border-box;height:100%}.main-card-left[_ngcontent-%COMP%]{width:100%;height:100%;padding-right:2%;overflow:hidden;display:flex;flex-direction:column;flex:1.5}.main-card-right[_ngcontent-%COMP%]{width:100%;height:100%;overflow-y:hidden;min-width:fit-content;overflow-x:auto;display:flex;flex:1;min-width:30%}mat-card-header[_ngcontent-%COMP%]{flex:.15}.childDisplay[_ngcontent-%COMP%]{box-shadow:var(--mat-sys-level1);display:flex;flex-direction:row;justify-content:center;align-items:center;background:var(--mat-sys-inverse-primary);border-radius:12px;max-width:fit-content}mat-tab-group[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:column;min-height:0}  .mat-mdc-tab-body-wrapper{flex:1;min-height:0}  .mat-mdc-tab-body-content{height:100%;overflow:hidden}  .mat-mdc-form-field-flex{height:100%}  .mat-mdc-form-field-infix{height:100%}main-live-journal[_ngcontent-%COMP%]{flex:4}.spacer[_ngcontent-%COMP%]{flex:1 1 auto}  .mat-mdc-form-field-subscript-wrapper{display:none}.title[_ngcontent-%COMP%]{text-wrap:nowrap;margin-bottom:1em}main-presence-container[_ngcontent-%COMP%]{margin-left:1em}.mini-spacer[_ngcontent-%COMP%]{margin:1em}.sub-row[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;align-items:center}.home-card[_ngcontent-%COMP%]{display:flex;flex:1}.account-page[_ngcontent-%COMP%]{flex:1}"]})};var MB=["*",[["mat-toolbar-row"]]],SB=["*","mat-toolbar-row"],IB=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=A({type:t,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return t})(),yh=(()=>{class t{_elementRef=c(B);_platform=c(ue);_document=c(Y);color;_toolbarRows;constructor(){}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=x({type:t,selectors:[["mat-toolbar"]],contentQueries:function(i,r,o){if(i&1&&Mt(o,IB,5),i&2){let a;O(a=N())&&(r._toolbarRows=a)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(i,r){i&2&&(St(r.color?"mat-"+r.color:""),L("mat-toolbar-multiple-rows",r._toolbarRows.length>0)("mat-toolbar-single-row",r._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:SB,decls:2,vars:0,template:function(i,r){i&1&&(Se(MB),ee(0),ee(1,1))},styles:[`.mat-toolbar {
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
`],encapsulation:2,changeDetection:0})}return t})();var ZS=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=$({type:t});static \u0275inj=z({imports:[ve]})}return t})();var KS=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=$({type:t});static \u0275inj=z({imports:[$n,ve,$n]})}return t})();var Ch=class t{baseUrl=`${at.apiUrl}/api/chat`;historyUrl=`${this.baseUrl}/history`;http=c(vt);socketService=c(qn);getHistory(n,e){let i=new Nt().set("senderId",n).set("recipientId",e);return this.http.get(this.historyUrl,{params:i})}createChatRoomId(n,e){let i=Math.min(n,e),r=Math.max(n,e);return`chat:${i}:${r}`}createLocalDateTime(){return new Date().toISOString().replace("Z","")}static \u0275fac=function(e){return new(e||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})};var kB=["chatViewDisplay"],AB=(t,n)=>n.name,RB=(t,n)=>n.timestamp;function OB(t,n){t&1&&(m(0,"mat-icon"),g(1,"arrow_forward_ios"),f())}function NB(t,n){t&1&&(m(0,"mat-icon"),g(1,"chat"),f())}function FB(t,n){if(t&1&&(m(0,"span",11)(1,"b"),g(2),f()()),t&2){let e=D(2).$implicit;p(2),ae(e.name)}}function PB(t,n){if(t&1&&(m(0,"span",11),g(1),f()),t&2){let e=D(2).$implicit;p(),fe(" ",e.name," ")}}function LB(t,n){if(t&1){let e=Le();m(0,"button",9),M("click",function(){ie(e);let r=D().$implicit,o=D(2);return re(o.onSelectTeacher(r))}),m(1,"div",10),g(2),f(),j(3,FB,3,1,"span",11)(4,PB,2,1,"span",11),f()}if(t&2){let e=D().$implicit,i=D(2);p(),Fl(Pl("background-color: ",e.color)),p(),fe(" ",e.name.substring(0,1)," "),p(),H(i.inUnread(e.id)?3:4)}}function VB(t,n){if(t&1&&j(0,LB,5,5,"button",8),t&2){let e=n.$implicit,i=D(2);H(e.id!==i.userId?0:-1)}}function BB(t,n){if(t&1&&(m(0,"mat-action-list",6),He(1,VB,1,1,null,null,AB),f()),t&2){let e=D();p(),Ue(e.users())}}function jB(t,n){if(t&1&&(m(0,"span",27),g(1),f()),t&2){let e,i=D().$implicit,r=D(2);L("msgSelf",i.senderId===r.userId),p(),ae(i.senderId===r.userId?"Du":(e=r.selectedTeacher())==null?null:e.name)}}function HB(t,n){if(t&1&&(m(0,"span",28),g(1),f()),t&2){let e=D().$implicit,i=D(2);L("msgSelf",e.senderId===i.userId),p(),ae(i.convertDate(e.timestamp))}}function UB(t,n){if(t&1&&(m(0,"div",23),j(1,jB,2,3,"span",24),j(2,HB,2,3,"span",25),m(3,"div",26),g(4),f()()),t&2){let e=n.$implicit,i=n.$index,r=D(2);L("msgSelf",e.senderId===r.userId),p(),H(i===0||i>0&&r.messages()[i-1].senderId!==e.senderId?1:-1),p(),H(i===0||i>0&&r.messages()[i-1].senderId!==e.senderId||i>0&&r.deltaTimeMinutes(e.timestamp,r.messages()[i-1].timestamp)>r.minutesBeforeNewDate?2:-1),p(),L("msgSelf",e.senderId===r.userId),p(),fe(" ",e.chatMessage," ")}}function zB(t,n){if(t&1){let e=Le();m(0,"mat-card",7),Ta(function(){ie(e);let r=D();return re(r.enterClass())}),m(1,"mat-card-header",12)(2,"mat-card-title")(3,"div",13)(4,"button",14),M("click",function(){ie(e);let r=D();return re(r.returnToOverview())}),m(5,"mat-icon"),g(6,"keyboard_return"),f()()(),m(7,"div",15),g(8),f(),T(9,"div",16),f()(),m(10,"div",17,1),He(12,UB,5,7,"div",18,RB),T(14,"div",19),f(),m(15,"mat-card",20)(16,"mat-form-field")(17,"input",21),Qe("ngModelChange",function(r){ie(e);let o=D();return Ee(o.newMessage,r)||(o.newMessage=r),re(r)}),M("keyup.enter",function(){ie(e);let r=D();return re(r.submitMessage())}),f()(),m(18,"button",22),M("click",function(){ie(e);let r=D();return re(r.submitMessage())}),m(19,"mat-icon"),g(20,"send"),f()()()()}if(t&2){let e,i=D();p(4),R("matTooltip","Kontaktlista"),p(4),fe(" ",(e=i.selectedTeacher())==null?null:e.name," "),p(4),Ue(i.messages()),p(5),Ye("ngModel",i.newMessage),p(),R("matTooltip","Skicka meddelande")}}var XS=!1,wh=class t{chatService=c(Ch);websocketService=c(qn);userService=c(Os);subs=new oe;userId=Number(sessionStorage.getItem("UserId"));users=E([]);selectedTeacher=E(null);messages=E([]);newMessage=Ae("");minutesBeforeNewDate=3;viewState=E("overview");unread=[];chatView=null;set content(n){console.log(n),this.chatView=n,this.chatView.nativeElement.scrollTop=this.chatView.nativeElement.scrollHeight}messageNotificationSound=new Audio("message.ogg");enterClass=E("enter-animation");chatVisible=E(!1);doShakeAnimation=E(!1);async ngOnInit(){this.messageNotificationSound.load(),await this.websocketService.ensureConnected(),this.subs.add(this.userService.getUsers().subscribe(n=>{this.users.set(n)})),this.subs.add(this.websocketService.getMessages("chatMessages").subscribe(n=>{this.handleMessage(n)})),this.subs.add(this.websocketService.getMessages("notifications").subscribe(n=>{this.handleNotification(n)}))}ngOnDestroy(){this.subs.unsubscribe()}onSelectTeacher(n){this.selectedTeacher.set(n),this.viewState.set("chat");let e=n.id??n.userId;this.messages.set([]),this.subs.add(this.chatService.getHistory(this.userId,e).subscribe({next:i=>this.messages.set(i),error:()=>this.messages.set([])})),this.websocketService.setChatRoom(this.chatService.createChatRoomId(this.userId,e)),this.newMessage.set(this.selectedTeacher()?.storedMessage??""),this.unread=this.unread.filter(i=>i.senderId!==e),this.chatView!=null&&(this.chatView.nativeElement.scrollTop=this.chatView.nativeElement.scrollHeight),XS&&console.log(n)}onSelectAll(){this.viewState.set("chat")}returnToOverview(){this.viewState.set("overview"),this.selectedTeacher()!=null&&this.selectedTeacher.update(n=>(n.storedMessage=this.newMessage(),n)),this.selectedTeacher.set(null)}submitMessage(){let n=this.selectedTeacher();if(n==null||n==null||this.newMessage()=="")return;let e={senderId:this.userId,recipientId:n.id??n.userId,chatMessage:this.newMessage(),timestamp:this.chatService.createLocalDateTime()};this.websocketService.sendChatMessage(e),this.messages.update(i=>[...i,e]),this.newMessage.set("")}handleMessage(n){this.messages.update(e=>[...e,n]),XS&&console.log(n)}handleNotification(n){console.log(n.senderId,this.selectedTeacher()?.id),n.senderId!==this.selectedTeacher()?.id?(this.unread.push(n),this.doShakeAnimation.set(!0),console.log("SHOULD ANIMATE"),this.messageNotificationSound.play()):this.messageNotificationSound.play()}convertDate(n){let e=new Date(n);return new Date(e.getTime()-new Date().getTimezoneOffset()*6e4).toLocaleString("sv-SE",{timeZone:Intl.DateTimeFormat().resolvedOptions().timeZone,hour:"2-digit",minute:"2-digit",day:"2-digit",month:"2-digit",year:"numeric"})}deltaTimeMinutes(n,e){let i=new Date(n),r=new Date(e);return Math.abs((r.getTime()-i.getTime())/6e4)}inUnread(n){return console.log("InUnread",n,this.unread),console.log(this.unread.find(e=>e.senderId==n)!=null),this.unread.find(e=>e.senderId==n)!=null}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=x({type:t,selectors:[["main-chat-hub"]],viewQuery:function(e,i){if(e&1&&Ce(kB,5),e&2){let r;O(r=N())&&(i.content=r.first)}},hostVars:2,hostBindings:function(e,i){e&2&&L("chat-visible",i.chatVisible())},inputs:{newMessage:[1,"newMessage"]},outputs:{newMessage:"newMessageChange"},decls:13,vars:5,consts:[["tooltip","matTooltip"],["chatViewDisplay",""],["tabindex","0",1,"chat-hide-button",3,"animationend","click","keydown.space","keydown.enter","matTooltip"],["appearance","outlined"],["id","chatHubHeader",1,"cardHeader"],[2,"width","0.5em"],[1,"list-class"],["id","chatView"],["mat-list-item","",1,"teacherSelector"],["mat-list-item","",1,"teacherSelector",3,"click"],[1,"chatAvatar"],["matListItemTitle",""],["id","chatViewHeader",1,"cardHeader"],["id","chatViewTitleLeft"],["matIconButton","button",3,"click","matTooltip"],["id","chatViewTitleRight"],["id","chatViewTitleSpacer"],["id","chatViewDisplay"],[1,"chatMessageContainer",3,"msgSelf"],["id","scrollAnchor"],["id","chatViewFooter"],["matInput","","type","text",3,"ngModelChange","keyup.enter","ngModel"],["matInput","","type","button","matIconButton","button",3,"click","matTooltip"],[1,"chatMessageContainer"],[1,"chatMessageHeader",3,"msgSelf"],[1,"chatMessageDate",2,"font-size","0.8em","font-weight","normal",3,"msgSelf"],[1,"chatMessage"],[1,"chatMessageHeader"],[1,"chatMessageDate",2,"font-size","0.8em","font-weight","normal"]],template:function(e,i){e&1&&(m(0,"div",2,0),M("animationend",function(){return i.doShakeAnimation.set(!1)})("click",function(){return i.chatVisible.set(!i.chatVisible())})("keydown.space",function(){return i.chatVisible.set(!i.chatVisible())})("keydown.enter",function(){return i.chatVisible.set(!i.chatVisible())}),j(2,OB,2,0,"mat-icon")(3,NB,2,0,"mat-icon"),f(),m(4,"mat-card",3)(5,"mat-card-header",4)(6,"mat-card-title")(7,"mat-icon"),g(8,"chat"),f(),T(9,"span",5),g(10,"Chatt"),f()(),j(11,BB,3,0,"mat-action-list",6)(12,zB,21,4,"mat-card",7),f()),e&2&&(L("animShake",i.doShakeAnimation()),R("matTooltip",i.chatVisible()?"D\xF6lj chatt":"Visa chatt"),p(2),H(i.chatVisible()?2:3),p(9),H(i.viewState()==="overview"?11:i.viewState()==="chat"?12:-1))},dependencies:[oh,ji,zn,Qt,Tt,Wr,un,Un,pr,kt,Bn,bt,cn,is,dn,Pt,lh,na],styles:["[_nghost-%COMP%]{position:fixed;display:flex;flex-direction:column;background-color:#0000;width:30vw;height:fit-content;min-height:30vh;right:-30vw;bottom:2vh;z-index:1000;transition:right .4s}.chat-visible[_nghost-%COMP%]{right:1vw}mat-card[_ngcontent-%COMP%]{width:100%;height:100%;display:inherit;bottom:0;flex:3;transition:height 1s}mat-action-list[_ngcontent-%COMP%]{width:100%;height:100%;min-height:30vh;max-height:50vh;overflow-y:scroll;transition:height 1s;background-color:var(--mat-sys-surface);box-shadow:0;padding:0;border-radius:var(--mat-sys-corner-medium)}mat-action-list[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]{width:100%;padding:.5em;color:var(--mat-sys-on-surface);border-bottom:2px solid var(--mat-sys-surface-container-highest);cursor:pointer;box-sizing:border-box}mat-action-list[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]:last-child{border-bottom:0}input[_ngcontent-%COMP%]{height:1em}.chatAvatar[_ngcontent-%COMP%]{padding:.5em;width:1em;height:1em;text-align:center;vertical-align:top;border-radius:var(--mat-sys-corner-full);color:var(--mat-sys-on-primary);margin-right:1em;display:flex;align-items:center;justify-content:center}.teacherSelector[_ngcontent-%COMP%]{display:flex;flex-direction:row;vertical-align:middle;align-items:center}button[_ngcontent-%COMP%]:hover{font-weight:700}#chatView[_ngcontent-%COMP%]{display:flex;width:100%;flex-direction:column}#chatView[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]{margin:0}#chatViewTitleLeft[_ngcontent-%COMP%], #chatViewTitleSpacer[_ngcontent-%COMP%]{flex:1;height:100%;width:100%;font-size:.5rem;display:flex;padding:.2em}#chatViewTitleRight[_ngcontent-%COMP%]{flex:5;height:100%;width:100%;display:flex;justify-content:center;font-size:1rem;text-wrap:nowrap}.cardHeader[_ngcontent-%COMP%]{padding-bottom:16px}.cardHeader[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center}#chatHubHeader[_ngcontent-%COMP%]{background-color:var(--mat-sys-tertiary);color:var(--mat-sys-on-tertiary)}#chatViewHeader[_ngcontent-%COMP%]{flex:1;flex-direction:row;justify-content:center;padding:0;background-color:var(--mat-sys-surface-container-highest);margin:.1em}  #chatViewHeader>.mat-mdc-card-header-text{width:100%}#chatViewHeader[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%]{flex:1;flex-direction:row;justify-content:start;width:100%}#chatViewDisplay[_ngcontent-%COMP%]{flex:5;min-height:30vh;max-height:30vh;overflow-y:scroll}#chatViewFooter[_ngcontent-%COMP%]{display:flex;flex:2;flex-direction:row;overflow:clip;align-items:center}#chatViewFooter[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{border-radius:var(--mat-sys-corner-medium);flex:5;margin:.25em}#chatViewFooter[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border-radius:var(--mat-sys-corner-medium);width:100%;height:100%}#chatViewFooter[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{flex:1;height:100%;transition:.1s;display:flex;align-items:center;justify-content:center;border:1px solid var(--mat-sys-outline-variant)}#chatViewFooter[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:var(--mat-sys-tertiary-container)}  .mat-mdc-text-field-wrapper.mdc-text-field.mdc-text-field--filled.mdc-text-field--no-label{border-radius:var(--mat-sys-corner-small)}.chatMessageContainer[_ngcontent-%COMP%]{display:flex;flex-direction:column}.chatMessageContainer.msgSelf[_ngcontent-%COMP%]{align-items:end}.chatMessageHeader[_ngcontent-%COMP%]{font-family:var(--mat-sys-body-small);font-weight:500;margin-left:.75em;margin-top:.5em}.chatMessageHeader.msgSelf[_ngcontent-%COMP%]{font-weight:400;margin-left:0;margin-right:.75em;text-align:right}.chatMessageDate[_ngcontent-%COMP%]{font-family:var(--mat-sys-body-small);font-weight:300;margin-left:.75em;margin-top:0}.chatMessageDate.msgSelf[_ngcontent-%COMP%]{margin-left:0;margin-right:.75em;text-align:right}.chatMessage[_ngcontent-%COMP%]{background-color:var(--mat-sys-primary-container);margin-left:.5em;margin-right:2.5em;border-radius:var(--mat-sys-corner-medium);padding:.5em;box-sizing:border-box;margin-bottom:.5em;width:fit-content;max-width:80%;height:fit-content;text-wrap:wrap;word-wrap:break-word}.chatMessage.msgSelf[_ngcontent-%COMP%]{flex-direction:row-reverse;text-align:right;background-color:var(--mat-sys-tertiary-container);margin-right:.5em;margin-left:2.5em}#chatViewDisplay[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{overflow-anchor:none}#chatViewDisplay[_ngcontent-%COMP%]   #scrollAnchor[_ngcontent-%COMP%]{overflow-anchor:auto;height:1em}.chat-hide-button[_ngcontent-%COMP%]{position:absolute;z-index:1001;width:3rem;height:3rem;left:-4rem;top:3rem;background-color:var(--mat-sys-tertiary);color:var(--mat-sys-on-tertiary);border-radius:50%;display:flex;justify-content:center;align-items:center;cursor:pointer;box-shadow:var(--mat-sys-level3);border:0px solid var(--mat-sys-primary-fixed);box-sizing:border-box;transition:.1s}.chat-hide-button[_ngcontent-%COMP%]:hover{border:2px solid var(--mat-sys-primary-fixed)}.chat-hide-button[_ngcontent-%COMP%] > mat-icon[_ngcontent-%COMP%]{font-size:2rem;width:fit-content;height:fit-content}.enter-animation[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_slide-fade .2s}@keyframes _ngcontent-%COMP%_slide-fade{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}.animShake[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_shake .5s}@keyframes _ngcontent-%COMP%_shake{0%{transform:rotate(0) scale(1)}20%{transform:rotate(-20deg) scale(1.1)}40%{transform:rotate(20deg) scale(1.2)}60%{transform:rotate(-45deg) scale(1.1)}80%{transform:rotate(45deg) scale(1)}to{transform:rotate(0) scale(1)}}"]})};var Dh=class t{groupSignal=E({name:"",id:0});allGroups=E([]);contentSignal=E("");presence=c(to);socketService=c(qn);mainPanel=ri.required(Vs);async ngOnInit(){this.contentSignal.set("homeView"),this.socketService.connect(`${at.wsUrl}/ws`),await this.socketService.ensureConnected(),this.presence.init(),this.socketService.setAttendanceRoom("ALL"),this.socketService.getMessages("attendanceMessages").subscribe(n=>{if(!("childId"in n)){console.error("Attendance message with incorrect body!");return}console.log(n),this.handleWebsocketMessage(n)})}ngOnDestroy(){this.socketService.leaveJournalRoom()}handleWebsocketMessage(n){this.mainPanel().handleWebsocketMessage(n)}wsUpdateAttendance(n){this.socketService.sendAttendanceUpdate(n)}onTabChange(n){let e=n.index,i=this.allGroups()[e];this.contentSignal.set("groupView"),this.groupSignal.set(i),this.presence.spoofTeacherUpdate()}logout(){document.cookie='jwtToken=""',sessionStorage.removeItem("token"),sessionStorage.removeItem("UserId"),sessionStorage.removeItem("role"),this.socketService.disconnect(),window.location.reload()}minaSidor(){this.contentSignal.set("teacherView")}hem(){this.contentSignal.set("homeView")}hover(n){console.log(n)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=x({type:t,selectors:[["main-page"]],viewQuery:function(e,i){e&1&&Ii(i.mainPanel,Vs,5),e&2&&Ti()},decls:16,vars:1,consts:[[1,"main-nav"],["color","mat-sys-primary"],["role","button",1,"button-19"],["matButton","tonal",1,"mina-sidor-button",3,"click"],["matButton","tonal",3,"click"],[1,"example-spacer"],["matButton","tonal",1,"logout-button",3,"click"],[1,"main-body"],[1,"main-panel-container"],[3,"attendanceChangeEvent","contentSignalChange","contentSignal"]],template:function(e,i){e&1&&(m(0,"div",0)(1,"mat-toolbar",1)(2,"span"),g(3,"K\xEEndGuard"),f(),m(4,"div",2)(5,"button",3),M("click",function(){return i.minaSidor()}),g(6,"Mina sidor"),f()(),m(7,"button",4),M("click",function(){return i.hem()}),g(8,"Hem"),f(),T(9,"span",5),m(10,"button",6),M("click",function(){return i.logout()}),g(11,"Logout"),f()()(),m(12,"div",7),T(13,"main-chat-hub"),m(14,"div",8)(15,"main-panel",9),M("attendanceChangeEvent",function(o){return i.wsUpdateAttendance(o)}),Qe("contentSignalChange",function(o){return Ee(i.contentSignal,o)||(i.contentSignal=o),o}),f()()()),e&2&&(p(15),Ye("contentSignal",i.contentSignal))},dependencies:[ZS,yh,Vs,KS,ut,zt,wh],styles:["[_nghost-%COMP%]{background-color:var(--mat-sys-surface);width:100%;height:100%;display:flex}mat-toolbar[_ngcontent-%COMP%]{background:linear-gradient(90deg,var(--mat-sys-inverse-primary) 30%,var(--mat-sys-tertiary) 100%);color:var(--mat-sys-primary-on-surface);display:flex;align-items:center;position:fixed}mat-tab-group[_ngcontent-%COMP%]{height:100%}mat-tab[_ngcontent-%COMP%]{height:100%}.example-spacer[_ngcontent-%COMP%]{flex:1 1 auto}  .mat-mdc-tab{background-color:var(--mat-sys-surface-container);border-radius:5px;box-shadow:var(--mat-sys-level1)}  .mdc-tab--active{background-color:var(--mat-sys-surface-container);border-radius:5px;box-shadow:var(--mat-sys-level3)}  .mat-mdc-tab-body-wrapper{height:100%}.main-body[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:100%;width:100%}.main-panel-container[_ngcontent-%COMP%]{width:85%;height:80%}.mina-sidor-button[_ngcontent-%COMP%]{margin:2em}"]})};var xh=t=>{let n=t.url.join(""),e=c(sn),r=c(Ds).getRole();switch(n){case"":return r?r==="ADMIN"?e.parseUrl("/admin"):e.parseUrl("/app"):!0;case"app":return r?r==="ADMIN"?e.parseUrl("/admin"):!0:e.parseUrl("/");case"admin":return r?r!=="ADMIN"?e.parseUrl("/app"):!0:e.parseUrl("/");default:return!1}};var Gi=class t{adminUrl=`${at.apiUrl}/api/admin`;userUrl=`${at.apiUrl}/api/user`;http=c(vt);getChildren(){return this.http.get(`${this.adminUrl}/children`)}getGroups(){return this.http.get(`${this.adminUrl}/groups`)}createChild(n){return this.http.post(`${this.adminUrl}/child`,{name:n})}createGroup(n){return this.http.post(`${this.adminUrl}/group`,{name:n})}deleteChild(n){return this.http.delete(`${this.adminUrl}/child/${n}`)}assignChildToGroup(n,e){return this.http.put(`${this.adminUrl}/group/${n}/child/${e}`,{})}activateUser(n){return this.http.put(`${this.adminUrl}/user/${n}`,{})}inactivateUser(n){return this.http.put(`${this.adminUrl}/user/${n}/inactive`,{})}getInactiveUsers(){return this.http.get(`${this.adminUrl}/users/inactive`)}getAllTeachers(){return this.http.get(`${this.userUrl}/teachers`)}static \u0275fac=function(e){return new(e||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})};var $B=(t,n)=>n.id;function WB(t,n){if(t&1&&(m(0,"mat-option",4),g(1),f()),t&2){let e=n.$implicit;R("value",e.id),p(),ae(e.name)}}var Yc=class t{fb=c(Lf);adminService=c(Gi);groups=E([]);children=E([]);form=this.fb.group({firstName:["",ci.required],lastName:["",ci.required],groupId:[null]});childAdded=new I;ngOnInit(){this.loadGroups()}loadGroups(){this.adminService.getGroups().subscribe({next:n=>this.groups.set(n),error:n=>console.error(n)})}onSubmit(){if(this.form.valid){let n=`${this.form.value.firstName} ${this.form.value.lastName}`;this.adminService.createChild(n).subscribe({next:e=>{this.form.value.groupId?this.adminService.assignChildToGroup(this.form.value.groupId,e.id).subscribe({next:()=>{this.childAdded.emit(),this.form.reset()}}):(this.childAdded.emit(),this.form.reset())},error:e=>console.error(e)})}}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=x({type:t,selectors:[["add-child-form"]],outputs:{childAdded:"childAdded"},decls:17,vars:2,consts:[[1,"form-container",3,"ngSubmit","formGroup"],["matInput","","formControlName","firstName"],["matInput","","formControlName","lastName"],["formControlName","groupId"],[3,"value"],["mat-raised-button","","color","mat-sys-primary","type","submit",3,"disabled"]],template:function(e,i){e&1&&(m(0,"form",0),M("ngSubmit",function(){return i.onSubmit()}),m(1,"mat-form-field")(2,"mat-label"),g(3,"Namn"),f(),T(4,"input",1),f(),m(5,"mat-form-field")(6,"mat-label"),g(7,"Efternamn"),f(),T(8,"input",2),f(),m(9,"mat-form-field")(10,"mat-label"),g(11,"Grupp"),f(),m(12,"mat-select",3),He(13,WB,2,2,"mat-option",4,$B),f()(),m(15,"button",5),g(16," L\xE4gg till barn "),f()()),e&2&&(R("formGroup",i.form),p(13),Ue(i.groups()),p(2),R("disabled",i.form.invalid))},dependencies:[Vf,Pf,un,Un,Of,gr,Nc,kt,Tt,Hn,zn,Qt,ut,zt,Ss,Gn,Kr,Zr],styles:[".form-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;gap:8px}"]})};var Eh=class t{dialogRef=c(ea);onConfirm(){this.dialogRef.close(!0)}onDeny(){this.dialogRef.close(!1)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=x({type:t,selectors:[["delete-confirmation-dialog"]],decls:8,vars:0,consts:[[1,"flex-with-style"],[1,"top-text"],[1,"button-group"],[1,"button",3,"click"]],template:function(e,i){e&1&&(Me(0,"div",0)(1,"p",1),g(2," \xC4r du s\xE4ker p\xE5 att du vill ta bort barnet? "),ke(),Me(3,"li",2)(4,"button",3),Fn("click",function(){return i.onConfirm()}),g(5," Ja "),ke(),Me(6,"button",3),Fn("click",function(){return i.onDeny()}),g(7," Nej "),ke()()())},dependencies:[nh,ut],styles:["[_nghost-%COMP%]{display:block;text-align:center;padding:8px}.top-text[_ngcontent-%COMP%]{font:var(--mat-sys-title-medium)}.button-group[_ngcontent-%COMP%]{display:flex;justify-content:center;gap:32px}.button[_ngcontent-%COMP%]{padding:8px 32px;font:var(--mat-sys-label-small);font-weight:700;cursor:pointer;border-radius:4px;transition:all .2s ease-in-out;background-color:var(--mat-sys-primary);color:var(--mat-sys-on-primary);border:1px solid}button[_ngcontent-%COMP%]:hover{background-color:var(--mat-sys-primary-fixed-dim)}"]})};var JS=(t,n)=>n.id;function GB(t,n){if(t&1&&(m(0,"mat-option",6),g(1),f()),t&2){let e=n.$implicit;R("value",e.id),p(),ae(e.name)}}function qB(t,n){t&1&&T(0,"mat-divider")}function YB(t,n){if(t&1){let e=Le();m(0,"mat-list-item")(1,"span",3),g(2),f(),m(3,"div",4)(4,"mat-select",5,0),M("selectionChange",function(r){let o=ie(e).$implicit,a=an(5),s=D();return re(s.onMove(o,r.value,a))}),He(6,GB,2,2,"mat-option",6,JS),f(),m(8,"button",7),M("click",function(){let r=ie(e).$implicit,o=D();return re(o.onDelete(r))}),m(9,"mat-icon"),g(10,"cancel"),f()()()(),j(11,qB,1,0,"mat-divider")}if(t&2){let e=n.$implicit,i=n.$index,r=n.$count,o=D();p(2),or(" ",e.name," - ",(e.group==null?null:e.group.name)??"Ingen grupp"," "),p(4),Ue(o.groups()),p(5),H(i!==r-1?11:-1)}}var Qc=class t{adminService=c(Gi);dialog=c(Uc);groups=E([]);children=E([]);childGroupChanged=new I;childDeleted=new I;ngOnInit(){this.loadChildren(),this.loadGroups()}loadGroups(){this.adminService.getGroups().subscribe({next:n=>this.groups.set(n),error:n=>console.error(n)})}loadChildren(){this.adminService.getChildren().subscribe({next:n=>this.children.set([...n].sort((e,i)=>e.name.localeCompare(i.name))),error:n=>console.log("Error",n)})}onDelete(n){this.dialog.open(Eh).afterClosed().subscribe(i=>{i&&this.adminService.deleteChild(n.id).subscribe({next:()=>{this.children.set(this.children().filter(r=>r.id!==n.id)),this.loadChildren(),this.childDeleted.emit()},error:r=>console.error(r)})})}onMove(n,e,i){i.value=null,this.adminService.assignChildToGroup(e,n.id).subscribe({next:()=>{this.loadChildren(),i.value=null,this.childGroupChanged.emit()},error:r=>console.error(r)})}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=x({type:t,selectors:[["child-admin-list"]],outputs:{childGroupChanged:"childGroupChanged",childDeleted:"childDeleted"},decls:6,vars:1,consts:[["groupSelect","matSelect"],[1,"antal-barn"],[1,"child-admin-list-container"],["matListItemTitle",""],["matListItemMeta","",1,"move-container"],[1,"move-symbol",3,"selectionChange"],[3,"value"],["matListItemMeta","","mat-icon-button","","color","warn",3,"click"]],template:function(e,i){e&1&&(m(0,"span",1),g(1),f(),m(2,"div",2)(3,"mat-list"),He(4,YB,12,3,null,null,JS),f()()),e&2&&(p(),fe("Antal barn: ",i.children().length),p(3),Ue(i.children()))},dependencies:[Br,ut,ji,eo,Ts,Jr,tn,br,ta,dn,Pt,Kr,Zr,Gn],styles:[".child-admin-list-container[_ngcontent-%COMP%]{display:block;max-height:200px;overflow-y:auto;background:#f5f5f5;border-radius:12px}mat-list-item[_ngcontent-%COMP%]{height:auto!important}.example-spacer[_ngcontent-%COMP%]{flex:1 1 auto}.move-container[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px}.move-symbol[_ngcontent-%COMP%]{width:200px}.antal-barn[_ngcontent-%COMP%]{font-weight:500;font-size:20px}"]})};var QB=(t,n)=>n.id;function ZB(t,n){t&1&&T(0,"mat-divider")}function KB(t,n){if(t&1&&(m(0,"mat-list-item")(1,"span",4),g(2),f()(),j(3,ZB,1,0,"mat-divider")),t&2){let e=n.$implicit,i=n.$index,r=n.$count,o=D();p(2),or(" ",e.name," (",o.childCount(e.id)," barn)"),p(),H(i!==r-1?3:-1)}}var Zc=class t{adminService=c(Gi);fb=c(Lf);form=this.fb.group({groupName:["",ci.required]});groups=E([]);children=E([]);groupCreated=new I;ngOnInit(){this.loadGroups(),this.loadChildren()}loadGroups(){this.adminService.getGroups().subscribe({next:n=>this.groups.set(n),error:n=>console.error(n)})}loadChildren(){this.adminService.getChildren().subscribe({next:n=>this.children.set(n),error:n=>console.log("Error",n)})}childCount(n){return this.children().filter(e=>e.group?.id==n).length}onCreateGroup(){this.form.valid&&this.adminService.createGroup(this.form.value.groupName).subscribe({next:()=>{this.loadGroups(),this.groupCreated.emit(),this.form.reset()},error:n=>console.error(n)})}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=x({type:t,selectors:[["group"]],outputs:{groupCreated:"groupCreated"},decls:11,vars:2,consts:[[1,"group-container"],[3,"ngSubmit","formGroup"],["matInput","","formControlName","groupName"],["mat-raised-button","","color","mat-sys-primary","type","submit",3,"disabled"],["matListItemTitle",""]],template:function(e,i){e&1&&(m(0,"div",0)(1,"mat-list"),He(2,KB,4,3,null,null,QB),f()(),m(4,"form",1),M("ngSubmit",function(){return i.onCreateGroup()}),m(5,"mat-form-field")(6,"mat-label"),g(7,"Ny grupp"),f(),T(8,"input",2),f(),m(9,"button",3),g(10," Skapa ny grupp "),f()()),e&2&&(p(2),Ue(i.groups()),p(2),R("formGroup",i.form),p(5),R("disabled",i.form.invalid))},dependencies:[eo,Ts,Jr,tn,br,kt,Tt,Hn,zn,Qt,ut,zt,Vf,Pf,un,Un,Of,gr,Nc,Ui],styles:[".group-container[_ngcontent-%COMP%]{display:block;max-height:200px;overflow-y:auto;background:#f5f5f5;border-radius:12px}"]})};var XB=(t,n)=>n.id;function JB(t,n){if(t&1){let e=Le();m(0,"button",3),M("click",function(){ie(e);let r=D().$implicit,o=D();return re(o.inactivateUser(r.id))}),m(1,"mat-icon"),g(2,"cancel"),f(),g(3," Inaktivera "),f()}}function ej(t,n){if(t&1){let e=Le();m(0,"button",3),M("click",function(){ie(e);let r=D().$implicit,o=D();return re(o.activateUser(r.id))}),m(1,"mat-icon"),g(2,"check"),f(),g(3," Aktivera "),f()}}function tj(t,n){t&1&&T(0,"mat-divider")}function nj(t,n){if(t&1&&(m(0,"mat-list-item")(1,"span",1),g(2),f(),j(3,JB,4,0,"button",2),j(4,ej,4,0,"button",2),f(),j(5,tj,1,0,"mat-divider")),t&2){let e=n.$implicit,i=n.$index,r=n.$count;p(2),fe(" ",e.name," "),p(),H(e.active?3:-1),p(),H(e.active?-1:4),p(),H(i!==r-1?5:-1)}}var Mh=class t{allUsers=E([]);adminService=c(Gi);ngOnInit(){this.loadAllTeachers()}loadAllTeachers(){this.adminService.getAllTeachers().subscribe({next:n=>this.allUsers.set(n),error:n=>console.error(n)})}activateUser(n){this.adminService.activateUser(n).subscribe({next:()=>this.loadAllTeachers()})}inactivateUser(n){this.adminService.inactivateUser(n).subscribe({next:()=>this.loadAllTeachers()})}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=x({type:t,selectors:[["all-users"]],decls:4,vars:0,consts:[[1,"inactive-users-container"],["matListItemTitle",""],["matListItemMeta","","mat-raised-button","","color","mat-sys-primary"],["matListItemMeta","","mat-raised-button","","color","mat-sys-primary",3,"click"]],template:function(e,i){e&1&&(m(0,"div",0)(1,"mat-list"),He(2,nj,6,4,null,null,XB),f()()),e&2&&(p(2),Ue(i.allUsers()))},dependencies:[ut,zt,eo,Ts,Jr,tn,br,ta,Bn,Br,Ui,dn,Pt],styles:[".inactive-users-container[_ngcontent-%COMP%]{display:block;max-height:200px;overflow-y:auto;background:#f5f5f5;border-radius:12px}"]})};var Sh=class t{childForm;childList;group;onChildAdded(){this.childList.loadChildren(),this.group.loadChildren()}onChildDeleted(){this.group.loadChildren()}onChildGroupChanged(){this.group.loadChildren()}onGroupCreated(){this.childForm.loadGroups(),this.childList.loadGroups()}router=c(sn);logout(){document.cookie='jwtToken=""',sessionStorage.removeItem("token"),sessionStorage.removeItem("UserId"),sessionStorage.removeItem("role"),window.location.reload()}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=x({type:t,selectors:[["admin-page"]],viewQuery:function(e,i){if(e&1&&Ce(Yc,5)(Qc,5)(Zc,5),e&2){let r;O(r=N())&&(i.childForm=r.first),O(r=N())&&(i.childList=r.first),O(r=N())&&(i.group=r.first)}},decls:31,vars:0,consts:[[1,"admin-top"],[1,"mat-sys-primary"],[1,"example-spacer"],["mat-raised-button","",3,"click"],[1,"admin-container"],[1,"admin-header"],[3,"childAdded"],[3,"childGroupChanged","childDeleted"],[3,"groupCreated"]],template:function(e,i){e&1&&(m(0,"div",0)(1,"mat-toolbar",1)(2,"span"),g(3,"K\xEEndGuard"),f(),T(4,"span",2),m(5,"button",3),M("click",function(){return i.logout()}),g(6,"Logout"),f()()(),m(7,"div",4)(8,"h1",5)(9,"mat-icon"),g(10,"admin_panel_settings"),f(),g(11," Adminstration "),f(),m(12,"mat-card")(13,"mat-card-content")(14,"h2"),g(15,"Alla anv\xE4ndare"),f(),T(16,"all-users"),f()(),m(17,"h2"),g(18,"L\xE4gg till barn"),f(),m(19,"add-child-form",6),M("childAdded",function(){return i.onChildAdded()}),f(),m(20,"mat-card")(21,"mat-card-header"),T(22,"mat-card-title"),f(),m(23,"mat-card-content")(24,"child-admin-list",7),M("childGroupChanged",function(){return i.onChildGroupChanged()})("childDeleted",function(){return i.onChildDeleted()}),f()()(),m(25,"mat-card")(26,"mat-card-header")(27,"h2"),g(28,"Grupper"),f()(),m(29,"mat-card-content")(30,"group",8),M("groupCreated",function(){return i.onGroupCreated()}),f()()()())},dependencies:[bt,Yc,Qc,Zc,Mh,cn,ln,Bn,is,Br,yh,ut,zt,dn,Pt],styles:["[_nghost-%COMP%]{display:block;justify-content:center;align-items:center;width:100vw;height:100vh;overflow-y:scroll}.admin-top[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:100;height:100}.admin-container[_ngcontent-%COMP%]{flex:1;padding:24px;display:flex;flex-direction:column;max-width:1200px;gap:10px;overflow:auto;margin:0 auto}h1[_ngcontent-%COMP%]{margin:0 0 16px}.example-spacer[_ngcontent-%COMP%]{flex:1 1 auto}mat-toolbar[_ngcontent-%COMP%]{background:linear-gradient(90deg,var(--mat-sys-inverse-primary) 30%,var(--mat-sys-tertiary) 100%);display:flex;align-items:center;position:sticky;top:0;max-width:100%}mat-card-title[_ngcontent-%COMP%]{font-size:1.2rem;font-weight:400;line-height:1}mat-card[_ngcontent-%COMP%]{background-color:#fafafa}.admin-header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;color:#d32f2f;border-bottom:2px solid #d32f2f}"]})};var eI=[{canActivate:[xh],path:"",component:$f},{canActivate:[xh],path:"app",component:Dh},{canActivate:[xh],path:"admin",component:Sh}];var Ih=class t{intercept(n,e){let i=sessionStorage.getItem("token");if(!i)return e.handle(n);let r=n.clone({setHeaders:X(C({},i?{Authorization:`Bearer ${i}`}:{}),{"ngrok-skip-browser-warning":"true"})});return e.handle(r)}static \u0275fac=function(e){return new(e||t)};static \u0275prov=b({token:t,factory:t.\u0275fac})};var tI={providers:[tg(),Lv(eI),ov(av()),{provide:xm,useClass:Ih,multi:!0}]};var Th=class t{title=E("frontend");static \u0275fac=function(e){return new(e||t)};static \u0275cmp=x({type:t,selectors:[["app-root"]],decls:1,vars:0,template:function(e,i){e&1&&T(0,"router-outlet")},dependencies:[ac],encapsulation:2})};K_(Th,tI).catch(t=>console.error(t));
