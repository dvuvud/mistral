var VI=Object.defineProperty,BI=Object.defineProperties;var jI=Object.getOwnPropertyDescriptors;var Pb=Object.getOwnPropertySymbols;var HI=Object.prototype.hasOwnProperty,UI=Object.prototype.propertyIsEnumerable;var Lb=(t,i,e)=>i in t?VI(t,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[i]=e,C=(t,i)=>{for(var e in i||={})HI.call(i,e)&&Lb(t,e,i[e]);if(Pb)for(var e of Pb(i))UI.call(i,e)&&Lb(t,e,i[e]);return t},X=(t,i)=>BI(t,jI(i));var Ut=null,zc=!1,_h=1,zI=null,ut=Symbol("SIGNAL");function K(t){let i=Ut;return Ut=t,i}function qc(){return Ut}var to={version:0,lastCleanEpoch:0,dirty:!1,producers:void 0,producersTail:void 0,consumers:void 0,consumersTail:void 0,recomputing:!1,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,kind:"unknown",producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function gr(t){if(zc)throw new Error("");if(Ut===null)return;Ut.consumerOnSignalRead(t);let i=Ut.producersTail;if(i!==void 0&&i.producer===t)return;let e,n=Ut.recomputing;if(n&&(e=i!==void 0?i.nextProducer:Ut.producers,e!==void 0&&e.producer===t)){Ut.producersTail=e,e.lastReadVersion=t.version;return}let r=t.consumersTail;if(r!==void 0&&r.consumer===Ut&&(!n||WI(r,Ut)))return;let o=ta(Ut),a={producer:t,consumer:Ut,nextProducer:e,prevConsumer:r,lastReadVersion:t.version,nextConsumer:void 0};Ut.producersTail=a,i!==void 0?i.nextProducer=a:Ut.producers=a,o&&Hb(t,a)}function Vb(){_h++}function Yc(t){if(!(ta(t)&&!t.dirty)&&!(!t.dirty&&t.lastCleanEpoch===_h)){if(!t.producerMustRecompute(t)&&!ea(t)){Gc(t);return}t.producerRecomputeValue(t),Gc(t)}}function vh(t){if(t.consumers===void 0)return;let i=zc;zc=!0;try{for(let e=t.consumers;e!==void 0;e=e.nextConsumer){let n=e.consumer;n.dirty||$I(n)}}finally{zc=i}}function bh(){return Ut?.consumerAllowSignalWrites!==!1}function $I(t){t.dirty=!0,vh(t),t.consumerMarkedDirty?.(t)}function Gc(t){t.dirty=!1,t.lastCleanEpoch=_h}function _r(t){return t&&Bb(t),K(t)}function Bb(t){t.producersTail=void 0,t.recomputing=!0}function no(t,i){K(i),t&&jb(t)}function jb(t){t.recomputing=!1;let i=t.producersTail,e=i!==void 0?i.nextProducer:t.producers;if(e!==void 0){if(ta(t))do e=yh(e);while(e!==void 0);i!==void 0?i.nextProducer=void 0:t.producers=void 0}}function ea(t){for(let i=t.producers;i!==void 0;i=i.nextProducer){let e=i.producer,n=i.lastReadVersion;if(n!==e.version||(Yc(e),n!==e.version))return!0}return!1}function vr(t){if(ta(t)){let i=t.producers;for(;i!==void 0;)i=yh(i)}t.producers=void 0,t.producersTail=void 0,t.consumers=void 0,t.consumersTail=void 0}function Hb(t,i){let e=t.consumersTail,n=ta(t);if(e!==void 0?(i.nextConsumer=e.nextConsumer,e.nextConsumer=i):(i.nextConsumer=void 0,t.consumers=i),i.prevConsumer=e,t.consumersTail=i,!n)for(let r=t.producers;r!==void 0;r=r.nextProducer)Hb(r.producer,r)}function yh(t){let i=t.producer,e=t.nextProducer,n=t.nextConsumer,r=t.prevConsumer;if(t.nextConsumer=void 0,t.prevConsumer=void 0,n!==void 0?n.prevConsumer=r:i.consumersTail=r,r!==void 0)r.nextConsumer=n;else if(i.consumers=n,!ta(i)){let o=i.producers;for(;o!==void 0;)o=yh(o)}return e}function ta(t){return t.consumerIsAlwaysLive||t.consumers!==void 0}function Qc(t){zI?.(t)}function WI(t,i){let e=i.producersTail;if(e!==void 0){let n=i.producers;do{if(n===t)return!0;if(n===e)break;n=n.nextProducer}while(n!==void 0)}return!1}function Zc(t,i){return Object.is(t,i)}function Ns(t,i){let e=Object.create(GI);e.computation=t,i!==void 0&&(e.equal=i);let n=()=>{if(Yc(e),gr(e),e.value===Os)throw e.error;return e.value};return n[ut]=e,Qc(e),n}var $c=Symbol("UNSET"),Wc=Symbol("COMPUTING"),Os=Symbol("ERRORED"),GI=X(C({},to),{value:$c,dirty:!0,error:null,equal:Zc,kind:"computed",producerMustRecompute(t){return t.value===$c||t.value===Wc},producerRecomputeValue(t){if(t.value===Wc)throw new Error("");let i=t.value;t.value=Wc;let e=_r(t),n,r=!1;try{n=t.computation(),K(null),r=i!==$c&&i!==Os&&n!==Os&&t.equal(i,n)}catch(o){n=Os,t.error=o}finally{no(t,e)}if(r){t.value=i;return}t.value=n,t.version++}});function qI(){throw new Error}var Ub=qI;function zb(t){Ub(t)}function Ch(t){Ub=t}var YI=null;function wh(t,i){let e=Object.create(Fs);e.value=t,i!==void 0&&(e.equal=i);let n=()=>$b(e);return n[ut]=e,Qc(e),[n,a=>io(e,a),a=>Dh(e,a)]}function $b(t){return gr(t),t.value}function io(t,i){bh()||zb(t),t.equal(t.value,i)||(t.value=i,QI(t))}function Dh(t,i){bh()||zb(t),io(t,i(t.value))}var Fs=X(C({},to),{equal:Zc,value:void 0,kind:"signal"});function QI(t){t.version++,Vb(),vh(t),YI?.(t)}var xh=X(C({},to),{consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!0,dirty:!0,kind:"effect"});function Eh(t){if(t.dirty=!1,t.version>0&&!ea(t))return;t.version++;let i=_r(t);try{t.cleanup(),t.fn()}finally{no(t,i)}}function de(t){return typeof t=="function"}function na(t){let e=t(n=>{Error.call(n),n.stack=new Error().stack});return e.prototype=Object.create(Error.prototype),e.prototype.constructor=e,e}var Kc=na(t=>function(e){t(this),this.message=e?`${e.length} errors occurred during unsubscription:
${e.map((n,r)=>`${r+1}) ${n.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=e});function ro(t,i){if(t){let e=t.indexOf(i);0<=e&&t.splice(e,1)}}var ie=class t{constructor(i){this.initialTeardown=i,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let i;if(!this.closed){this.closed=!0;let{_parentage:e}=this;if(e)if(this._parentage=null,Array.isArray(e))for(let o of e)o.remove(this);else e.remove(this);let{initialTeardown:n}=this;if(de(n))try{n()}catch(o){i=o instanceof Kc?o.errors:[o]}let{_finalizers:r}=this;if(r){this._finalizers=null;for(let o of r)try{Wb(o)}catch(a){i=i??[],a instanceof Kc?i=[...i,...a.errors]:i.push(a)}}if(i)throw new Kc(i)}}add(i){var e;if(i&&i!==this)if(this.closed)Wb(i);else{if(i instanceof t){if(i.closed||i._hasParent(this))return;i._addParent(this)}(this._finalizers=(e=this._finalizers)!==null&&e!==void 0?e:[]).push(i)}}_hasParent(i){let{_parentage:e}=this;return e===i||Array.isArray(e)&&e.includes(i)}_addParent(i){let{_parentage:e}=this;this._parentage=Array.isArray(e)?(e.push(i),e):e?[e,i]:i}_removeParent(i){let{_parentage:e}=this;e===i?this._parentage=null:Array.isArray(e)&&ro(e,i)}remove(i){let{_finalizers:e}=this;e&&ro(e,i),i instanceof t&&i._removeParent(this)}};ie.EMPTY=(()=>{let t=new ie;return t.closed=!0,t})();var Mh=ie.EMPTY;function Xc(t){return t instanceof ie||t&&"closed"in t&&de(t.remove)&&de(t.add)&&de(t.unsubscribe)}function Wb(t){de(t)?t():t.unsubscribe()}var $n={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var ia={setTimeout(t,i,...e){let{delegate:n}=ia;return n?.setTimeout?n.setTimeout(t,i,...e):setTimeout(t,i,...e)},clearTimeout(t){let{delegate:i}=ia;return(i?.clearTimeout||clearTimeout)(t)},delegate:void 0};function Jc(t){ia.setTimeout(()=>{let{onUnhandledError:i}=$n;if(i)i(t);else throw t})}function Ps(){}var Gb=Ih("C",void 0,void 0);function qb(t){return Ih("E",void 0,t)}function Yb(t){return Ih("N",t,void 0)}function Ih(t,i,e){return{kind:t,value:i,error:e}}var oo=null;function ra(t){if($n.useDeprecatedSynchronousErrorHandling){let i=!oo;if(i&&(oo={errorThrown:!1,error:null}),t(),i){let{errorThrown:e,error:n}=oo;if(oo=null,e)throw n}}else t()}function Qb(t){$n.useDeprecatedSynchronousErrorHandling&&oo&&(oo.errorThrown=!0,oo.error=t)}var ao=class extends ie{constructor(i){super(),this.isStopped=!1,i?(this.destination=i,Xc(i)&&i.add(this)):this.destination=XI}static create(i,e,n){return new $i(i,e,n)}next(i){this.isStopped?Th(Yb(i),this):this._next(i)}error(i){this.isStopped?Th(qb(i),this):(this.isStopped=!0,this._error(i))}complete(){this.isStopped?Th(Gb,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(i){this.destination.next(i)}_error(i){try{this.destination.error(i)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},ZI=Function.prototype.bind;function Sh(t,i){return ZI.call(t,i)}var kh=class{constructor(i){this.partialObserver=i}next(i){let{partialObserver:e}=this;if(e.next)try{e.next(i)}catch(n){ed(n)}}error(i){let{partialObserver:e}=this;if(e.error)try{e.error(i)}catch(n){ed(n)}else ed(i)}complete(){let{partialObserver:i}=this;if(i.complete)try{i.complete()}catch(e){ed(e)}}},$i=class extends ao{constructor(i,e,n){super();let r;if(de(i)||!i)r={next:i??void 0,error:e??void 0,complete:n??void 0};else{let o;this&&$n.useDeprecatedNextContext?(o=Object.create(i),o.unsubscribe=()=>this.unsubscribe(),r={next:i.next&&Sh(i.next,o),error:i.error&&Sh(i.error,o),complete:i.complete&&Sh(i.complete,o)}):r=i}this.destination=new kh(r)}};function ed(t){$n.useDeprecatedSynchronousErrorHandling?Qb(t):Jc(t)}function KI(t){throw t}function Th(t,i){let{onStoppedNotification:e}=$n;e&&ia.setTimeout(()=>e(t,i))}var XI={closed:!0,next:Ps,error:KI,complete:Ps};var oa=typeof Symbol=="function"&&Symbol.observable||"@@observable";function un(t){return t}function Ah(...t){return Rh(t)}function Rh(t){return t.length===0?un:t.length===1?t[0]:function(e){return t.reduce((n,r)=>r(n),e)}}var re=(()=>{class t{constructor(e){e&&(this._subscribe=e)}lift(e){let n=new t;return n.source=this,n.operator=e,n}subscribe(e,n,r){let o=eS(e)?e:new $i(e,n,r);return ra(()=>{let{operator:a,source:s}=this;o.add(a?a.call(o,s):s?this._subscribe(o):this._trySubscribe(o))}),o}_trySubscribe(e){try{return this._subscribe(e)}catch(n){e.error(n)}}forEach(e,n){return n=Zb(n),new n((r,o)=>{let a=new $i({next:s=>{try{e(s)}catch(l){o(l),a.unsubscribe()}},error:o,complete:r});this.subscribe(a)})}_subscribe(e){var n;return(n=this.source)===null||n===void 0?void 0:n.subscribe(e)}[oa](){return this}pipe(...e){return Rh(e)(this)}toPromise(e){return e=Zb(e),new e((n,r)=>{let o;this.subscribe(a=>o=a,a=>r(a),()=>n(o))})}}return t.create=i=>new t(i),t})();function Zb(t){var i;return(i=t??$n.Promise)!==null&&i!==void 0?i:Promise}function JI(t){return t&&de(t.next)&&de(t.error)&&de(t.complete)}function eS(t){return t&&t instanceof ao||JI(t)&&Xc(t)}function tS(t){return de(t?.lift)}function fe(t){return i=>{if(tS(i))return i.lift(function(e){try{return t(e,this)}catch(n){this.error(n)}});throw new TypeError("Unable to lift unknown Observable type")}}function pe(t,i,e,n,r){return new Oh(t,i,e,n,r)}var Oh=class extends ao{constructor(i,e,n,r,o,a){super(i),this.onFinalize=o,this.shouldUnsubscribe=a,this._next=e?function(s){try{e(s)}catch(l){i.error(l)}}:super._next,this._error=r?function(s){try{r(s)}catch(l){i.error(l)}finally{this.unsubscribe()}}:super._error,this._complete=n?function(){try{n()}catch(s){i.error(s)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var i;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:e}=this;super.unsubscribe(),!e&&((i=this.onFinalize)===null||i===void 0||i.call(this))}}};var Kb=na(t=>function(){t(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var x=(()=>{class t extends re{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(e){let n=new td(this,this);return n.operator=e,n}_throwIfClosed(){if(this.closed)throw new Kb}next(e){ra(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let n of this.currentObservers)n.next(e)}})}error(e){ra(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=e;let{observers:n}=this;for(;n.length;)n.shift().error(e)}})}complete(){ra(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:e}=this;for(;e.length;)e.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var e;return((e=this.observers)===null||e===void 0?void 0:e.length)>0}_trySubscribe(e){return this._throwIfClosed(),super._trySubscribe(e)}_subscribe(e){return this._throwIfClosed(),this._checkFinalizedStatuses(e),this._innerSubscribe(e)}_innerSubscribe(e){let{hasError:n,isStopped:r,observers:o}=this;return n||r?Mh:(this.currentObservers=null,o.push(e),new ie(()=>{this.currentObservers=null,ro(o,e)}))}_checkFinalizedStatuses(e){let{hasError:n,thrownError:r,isStopped:o}=this;n?e.error(r):o&&e.complete()}asObservable(){let e=new re;return e.source=this,e}}return t.create=(i,e)=>new td(i,e),t})(),td=class extends x{constructor(i,e){super(),this.destination=i,this.source=e}next(i){var e,n;(n=(e=this.destination)===null||e===void 0?void 0:e.next)===null||n===void 0||n.call(e,i)}error(i){var e,n;(n=(e=this.destination)===null||e===void 0?void 0:e.error)===null||n===void 0||n.call(e,i)}complete(){var i,e;(e=(i=this.destination)===null||i===void 0?void 0:i.complete)===null||e===void 0||e.call(i)}_subscribe(i){var e,n;return(n=(e=this.source)===null||e===void 0?void 0:e.subscribe(i))!==null&&n!==void 0?n:Mh}};var mt=class extends x{constructor(i){super(),this._value=i}get value(){return this.getValue()}_subscribe(i){let e=super._subscribe(i);return!e.closed&&i.next(this._value),e}getValue(){let{hasError:i,thrownError:e,_value:n}=this;if(i)throw e;return this._throwIfClosed(),n}next(i){super.next(this._value=i)}};var Ls={now(){return(Ls.delegate||Date).now()},delegate:void 0};var mn=class extends x{constructor(i=1/0,e=1/0,n=Ls){super(),this._bufferSize=i,this._windowTime=e,this._timestampProvider=n,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=e===1/0,this._bufferSize=Math.max(1,i),this._windowTime=Math.max(1,e)}next(i){let{isStopped:e,_buffer:n,_infiniteTimeWindow:r,_timestampProvider:o,_windowTime:a}=this;e||(n.push(i),!r&&n.push(o.now()+a)),this._trimBuffer(),super.next(i)}_subscribe(i){this._throwIfClosed(),this._trimBuffer();let e=this._innerSubscribe(i),{_infiniteTimeWindow:n,_buffer:r}=this,o=r.slice();for(let a=0;a<o.length&&!i.closed;a+=n?1:2)i.next(o[a]);return this._checkFinalizedStatuses(i),e}_trimBuffer(){let{_bufferSize:i,_timestampProvider:e,_buffer:n,_infiniteTimeWindow:r}=this,o=(r?1:2)*i;if(i<1/0&&o<n.length&&n.splice(0,n.length-o),!r){let a=e.now(),s=0;for(let l=1;l<n.length&&n[l]<=a;l+=2)s=l;s&&n.splice(0,s+1)}}};var nd=class extends ie{constructor(i,e){super()}schedule(i,e=0){return this}};var Vs={setInterval(t,i,...e){let{delegate:n}=Vs;return n?.setInterval?n.setInterval(t,i,...e):setInterval(t,i,...e)},clearInterval(t){let{delegate:i}=Vs;return(i?.clearInterval||clearInterval)(t)},delegate:void 0};var id=class extends nd{constructor(i,e){super(i,e),this.scheduler=i,this.work=e,this.pending=!1}schedule(i,e=0){var n;if(this.closed)return this;this.state=i;let r=this.id,o=this.scheduler;return r!=null&&(this.id=this.recycleAsyncId(o,r,e)),this.pending=!0,this.delay=e,this.id=(n=this.id)!==null&&n!==void 0?n:this.requestAsyncId(o,this.id,e),this}requestAsyncId(i,e,n=0){return Vs.setInterval(i.flush.bind(i,this),n)}recycleAsyncId(i,e,n=0){if(n!=null&&this.delay===n&&this.pending===!1)return e;e!=null&&Vs.clearInterval(e)}execute(i,e){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;let n=this._execute(i,e);if(n)return n;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(i,e){let n=!1,r;try{this.work(i)}catch(o){n=!0,r=o||new Error("Scheduled action threw falsy error")}if(n)return this.unsubscribe(),r}unsubscribe(){if(!this.closed){let{id:i,scheduler:e}=this,{actions:n}=e;this.work=this.state=this.scheduler=null,this.pending=!1,ro(n,this),i!=null&&(this.id=this.recycleAsyncId(e,i,null)),this.delay=null,super.unsubscribe()}}};var aa=class t{constructor(i,e=t.now){this.schedulerActionCtor=i,this.now=e}schedule(i,e=0,n){return new this.schedulerActionCtor(this,i).schedule(n,e)}};aa.now=Ls.now;var rd=class extends aa{constructor(i,e=aa.now){super(i,e),this.actions=[],this._active=!1}flush(i){let{actions:e}=this;if(this._active){e.push(i);return}let n;this._active=!0;do if(n=i.execute(i.state,i.delay))break;while(i=e.shift());if(this._active=!1,n){for(;i=e.shift();)i.unsubscribe();throw n}}};var Bs=new rd(id),Xb=Bs;var Ze=new re(t=>t.complete());function od(t){return t&&de(t.schedule)}function Nh(t){return t[t.length-1]}function ad(t){return de(Nh(t))?t.pop():void 0}function ai(t){return od(Nh(t))?t.pop():void 0}function Jb(t,i){return typeof Nh(t)=="number"?t.pop():i}function ty(t,i,e,n){function r(o){return o instanceof e?o:new e(function(a){a(o)})}return new(e||(e=Promise))(function(o,a){function s(u){try{d(n.next(u))}catch(h){a(h)}}function l(u){try{d(n.throw(u))}catch(h){a(h)}}function d(u){u.done?o(u.value):r(u.value).then(s,l)}d((n=n.apply(t,i||[])).next())})}function ey(t){var i=typeof Symbol=="function"&&Symbol.iterator,e=i&&t[i],n=0;if(e)return e.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}};throw new TypeError(i?"Object is not iterable.":"Symbol.iterator is not defined.")}function so(t){return this instanceof so?(this.v=t,this):new so(t)}function ny(t,i,e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n=e.apply(t,i||[]),r,o=[];return r=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),s("next"),s("throw"),s("return",a),r[Symbol.asyncIterator]=function(){return this},r;function a(v){return function(w){return Promise.resolve(w).then(v,h)}}function s(v,w){n[v]&&(r[v]=function(O){return new Promise(function(B,Q){o.push([v,O,B,Q])>1||l(v,O)})},w&&(r[v]=w(r[v])))}function l(v,w){try{d(n[v](w))}catch(O){_(o[0][3],O)}}function d(v){v.value instanceof so?Promise.resolve(v.value.v).then(u,h):_(o[0][2],v)}function u(v){l("next",v)}function h(v){l("throw",v)}function _(v,w){v(w),o.shift(),o.length&&l(o[0][0],o[0][1])}}function iy(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=t[Symbol.asyncIterator],e;return i?i.call(t):(t=typeof ey=="function"?ey(t):t[Symbol.iterator](),e={},n("next"),n("throw"),n("return"),e[Symbol.asyncIterator]=function(){return this},e);function n(o){e[o]=t[o]&&function(a){return new Promise(function(s,l){a=t[o](a),r(s,l,a.done,a.value)})}}function r(o,a,s,l){Promise.resolve(l).then(function(d){o({value:d,done:s})},a)}}var sd=t=>t&&typeof t.length=="number"&&typeof t!="function";function ld(t){return de(t?.then)}function cd(t){return de(t[oa])}function dd(t){return Symbol.asyncIterator&&de(t?.[Symbol.asyncIterator])}function ud(t){return new TypeError(`You provided ${t!==null&&typeof t=="object"?"an invalid object":`'${t}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function nS(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var md=nS();function fd(t){return de(t?.[md])}function hd(t){return ny(this,arguments,function*(){let e=t.getReader();try{for(;;){let{value:n,done:r}=yield so(e.read());if(r)return yield so(void 0);yield yield so(n)}}finally{e.releaseLock()}})}function pd(t){return de(t?.getReader)}function je(t){if(t instanceof re)return t;if(t!=null){if(cd(t))return iS(t);if(sd(t))return rS(t);if(ld(t))return oS(t);if(dd(t))return ry(t);if(fd(t))return aS(t);if(pd(t))return sS(t)}throw ud(t)}function iS(t){return new re(i=>{let e=t[oa]();if(de(e.subscribe))return e.subscribe(i);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function rS(t){return new re(i=>{for(let e=0;e<t.length&&!i.closed;e++)i.next(t[e]);i.complete()})}function oS(t){return new re(i=>{t.then(e=>{i.closed||(i.next(e),i.complete())},e=>i.error(e)).then(null,Jc)})}function aS(t){return new re(i=>{for(let e of t)if(i.next(e),i.closed)return;i.complete()})}function ry(t){return new re(i=>{lS(t,i).catch(e=>i.error(e))})}function sS(t){return ry(hd(t))}function lS(t,i){var e,n,r,o;return ty(this,void 0,void 0,function*(){try{for(e=iy(t);n=yield e.next(),!n.done;){let a=n.value;if(i.next(a),i.closed)return}}catch(a){r={error:a}}finally{try{n&&!n.done&&(o=e.return)&&(yield o.call(e))}finally{if(r)throw r.error}}i.complete()})}function tn(t,i,e,n=0,r=!1){let o=i.schedule(function(){e(),r?t.add(this.schedule(null,n)):this.unsubscribe()},n);if(t.add(o),!r)return o}function gd(t,i=0){return fe((e,n)=>{e.subscribe(pe(n,r=>tn(n,t,()=>n.next(r),i),()=>tn(n,t,()=>n.complete(),i),r=>tn(n,t,()=>n.error(r),i)))})}function _d(t,i=0){return fe((e,n)=>{n.add(t.schedule(()=>e.subscribe(n),i))})}function oy(t,i){return je(t).pipe(_d(i),gd(i))}function ay(t,i){return je(t).pipe(_d(i),gd(i))}function sy(t,i){return new re(e=>{let n=0;return i.schedule(function(){n===t.length?e.complete():(e.next(t[n++]),e.closed||this.schedule())})})}function ly(t,i){return new re(e=>{let n;return tn(e,i,()=>{n=t[md](),tn(e,i,()=>{let r,o;try{({value:r,done:o}=n.next())}catch(a){e.error(a);return}o?e.complete():e.next(r)},0,!0)}),()=>de(n?.return)&&n.return()})}function vd(t,i){if(!t)throw new Error("Iterable cannot be null");return new re(e=>{tn(e,i,()=>{let n=t[Symbol.asyncIterator]();tn(e,i,()=>{n.next().then(r=>{r.done?e.complete():e.next(r.value)})},0,!0)})})}function cy(t,i){return vd(hd(t),i)}function dy(t,i){if(t!=null){if(cd(t))return oy(t,i);if(sd(t))return sy(t,i);if(ld(t))return ay(t,i);if(dd(t))return vd(t,i);if(fd(t))return ly(t,i);if(pd(t))return cy(t,i)}throw ud(t)}function He(t,i){return i?dy(t,i):je(t)}function q(...t){let i=ai(t);return He(t,i)}function lo(t,i){let e=de(t)?t:()=>t,n=r=>r.error(e());return new re(i?r=>i.schedule(n,0,r):n)}function js(t){return!!t&&(t instanceof re||de(t.lift)&&de(t.subscribe))}var co=na(t=>function(){t(this),this.name="EmptyError",this.message="no elements in sequence"});function uy(t){return t instanceof Date&&!isNaN(t)}function oe(t,i){return fe((e,n)=>{let r=0;e.subscribe(pe(n,o=>{n.next(t.call(i,o,r++))}))})}var{isArray:cS}=Array;function dS(t,i){return cS(i)?t(...i):t(i)}function bd(t){return oe(i=>dS(t,i))}var{isArray:uS}=Array,{getPrototypeOf:mS,prototype:fS,keys:hS}=Object;function yd(t){if(t.length===1){let i=t[0];if(uS(i))return{args:i,keys:null};if(pS(i)){let e=hS(i);return{args:e.map(n=>i[n]),keys:e}}}return{args:t,keys:null}}function pS(t){return t&&typeof t=="object"&&mS(t)===fS}function Cd(t,i){return t.reduce((e,n,r)=>(e[n]=i[r],e),{})}function sa(...t){let i=ai(t),e=ad(t),{args:n,keys:r}=yd(t);if(n.length===0)return He([],i);let o=new re(gS(n,i,r?a=>Cd(r,a):un));return e?o.pipe(bd(e)):o}function gS(t,i,e=un){return n=>{my(i,()=>{let{length:r}=t,o=new Array(r),a=r,s=r;for(let l=0;l<r;l++)my(i,()=>{let d=He(t[l],i),u=!1;d.subscribe(pe(n,h=>{o[l]=h,u||(u=!0,s--),s||n.next(e(o.slice()))},()=>{--a||n.complete()}))},n)},n)}}function my(t,i,e){t?tn(e,t,i):i()}function fy(t,i,e,n,r,o,a,s){let l=[],d=0,u=0,h=!1,_=()=>{h&&!l.length&&!d&&i.complete()},v=O=>d<n?w(O):l.push(O),w=O=>{o&&i.next(O),d++;let B=!1;je(e(O,u++)).subscribe(pe(i,Q=>{r?.(Q),o?v(Q):i.next(Q)},()=>{B=!0},void 0,()=>{if(B)try{for(d--;l.length&&d<n;){let Q=l.shift();a?tn(i,a,()=>w(Q)):w(Q)}_()}catch(Q){i.error(Q)}}))};return t.subscribe(pe(i,v,()=>{h=!0,_()})),()=>{s?.()}}function Ot(t,i,e=1/0){return de(i)?Ot((n,r)=>oe((o,a)=>i(n,o,r,a))(je(t(n,r))),e):(typeof i=="number"&&(e=i),fe((n,r)=>fy(n,r,t,e)))}function br(t=1/0){return Ot(un,t)}function hy(){return br(1)}function yr(...t){return hy()(He(t,ai(t)))}function Wn(t){return new re(i=>{je(t()).subscribe(i)})}function Hs(...t){let i=ad(t),{args:e,keys:n}=yd(t),r=new re(o=>{let{length:a}=e;if(!a){o.complete();return}let s=new Array(a),l=a,d=a;for(let u=0;u<a;u++){let h=!1;je(e[u]).subscribe(pe(o,_=>{h||(h=!0,d--),s[u]=_},()=>l--,void 0,()=>{(!l||!h)&&(d||o.next(n?Cd(n,s):s),o.complete())}))}});return i?r.pipe(bd(i)):r}function Us(t=0,i,e=Xb){let n=-1;return i!=null&&(od(i)?e=i:n=i),new re(r=>{let o=uy(t)?+t-e.now():t;o<0&&(o=0);let a=0;return e.schedule(function(){r.closed||(r.next(a++),0<=n?this.schedule(void 0,n):r.complete())},o)})}function St(...t){let i=ai(t),e=Jb(t,1/0),n=t;return n.length?n.length===1?je(n[0]):br(e)(He(n,i)):Ze}function ve(t,i){return fe((e,n)=>{let r=0;e.subscribe(pe(n,o=>t.call(i,o,r++)&&n.next(o)))})}function py(t){return fe((i,e)=>{let n=!1,r=null,o=null,a=!1,s=()=>{if(o?.unsubscribe(),o=null,n){n=!1;let d=r;r=null,e.next(d)}a&&e.complete()},l=()=>{o=null,a&&e.complete()};i.subscribe(pe(e,d=>{n=!0,r=d,o||je(t(d)).subscribe(o=pe(e,s,l))},()=>{a=!0,(!n||!o||o.closed)&&e.complete()}))})}function wd(t,i=Bs){return py(()=>Us(t,i))}function Cr(t){return fe((i,e)=>{let n=null,r=!1,o;n=i.subscribe(pe(e,void 0,void 0,a=>{o=je(t(a,Cr(t)(i))),n?(n.unsubscribe(),n=null,o.subscribe(e)):r=!0})),r&&(n.unsubscribe(),n=null,o.subscribe(e))})}function wr(t,i){return de(i)?Ot(t,i,1):Ot(t,1)}function Wi(t,i=Bs){return fe((e,n)=>{let r=null,o=null,a=null,s=()=>{if(r){r.unsubscribe(),r=null;let d=o;o=null,n.next(d)}};function l(){let d=a+t,u=i.now();if(u<d){r=this.schedule(void 0,d-u),n.add(r);return}s()}e.subscribe(pe(n,d=>{o=d,a=i.now(),r||(r=i.schedule(l,t),n.add(r))},()=>{s(),n.complete()},void 0,()=>{o=r=null}))})}function gy(t){return fe((i,e)=>{let n=!1;i.subscribe(pe(e,r=>{n=!0,e.next(r)},()=>{n||e.next(t),e.complete()}))})}function nt(t){return t<=0?()=>Ze:fe((i,e)=>{let n=0;i.subscribe(pe(e,r=>{++n<=t&&(e.next(r),t<=n&&e.complete())}))})}function Dd(t,i=un){return t=t??_S,fe((e,n)=>{let r,o=!0;e.subscribe(pe(n,a=>{let s=i(a);(o||!t(r,s))&&(o=!1,r=s,n.next(a))}))})}function _S(t,i){return t===i}function _y(t=vS){return fe((i,e)=>{let n=!1;i.subscribe(pe(e,r=>{n=!0,e.next(r)},()=>n?e.complete():e.error(t())))})}function vS(){return new co}function Dr(t){return fe((i,e)=>{try{i.subscribe(e)}finally{e.add(t)}})}function Gi(t,i){let e=arguments.length>=2;return n=>n.pipe(t?ve((r,o)=>t(r,o,n)):un,nt(1),e?gy(i):_y(()=>new co))}function xd(t){return t<=0?()=>Ze:fe((i,e)=>{let n=[];i.subscribe(pe(e,r=>{n.push(r),t<n.length&&n.shift()},()=>{for(let r of n)e.next(r);e.complete()},void 0,()=>{n=null}))})}function Ed(){return fe((t,i)=>{let e,n=!1;t.subscribe(pe(i,r=>{let o=e;e=r,n&&i.next([o,r]),n=!0}))})}function zs(t={}){let{connector:i=()=>new x,resetOnError:e=!0,resetOnComplete:n=!0,resetOnRefCountZero:r=!0}=t;return o=>{let a,s,l,d=0,u=!1,h=!1,_=()=>{s?.unsubscribe(),s=void 0},v=()=>{_(),a=l=void 0,u=h=!1},w=()=>{let O=a;v(),O?.unsubscribe()};return fe((O,B)=>{d++,!h&&!u&&_();let Q=l=l??i();B.add(()=>{d--,d===0&&!h&&!u&&(s=Fh(w,r))}),Q.subscribe(B),!a&&d>0&&(a=new $i({next:Ie=>Q.next(Ie),error:Ie=>{h=!0,_(),s=Fh(v,e,Ie),Q.error(Ie)},complete:()=>{u=!0,_(),s=Fh(v,n),Q.complete()}}),je(O).subscribe(a))})(o)}}function Fh(t,i,...e){if(i===!0){t();return}if(i===!1)return;let n=new $i({next:()=>{n.unsubscribe(),t()}});return je(i(...e)).subscribe(n)}function Md(t,i,e){let n,r=!1;return t&&typeof t=="object"?{bufferSize:n=1/0,windowTime:i=1/0,refCount:r=!1,scheduler:e}=t:n=t??1/0,zs({connector:()=>new mn(n,i,e),resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:r})}function uo(t){return ve((i,e)=>t<=e)}function Ke(...t){let i=ai(t);return fe((e,n)=>{(i?yr(t,e,i):yr(t,e)).subscribe(n)})}function ft(t,i){return fe((e,n)=>{let r=null,o=0,a=!1,s=()=>a&&!r&&n.complete();e.subscribe(pe(n,l=>{r?.unsubscribe();let d=0,u=o++;je(t(l,u)).subscribe(r=pe(n,h=>n.next(i?i(l,h,u,d++):h),()=>{r=null,s()}))},()=>{a=!0,s()}))})}function ye(t){return fe((i,e)=>{je(t).subscribe(pe(e,()=>e.complete(),Ps)),!e.closed&&i.subscribe(e)})}function Ph(t,i=!1){return fe((e,n)=>{let r=0;e.subscribe(pe(n,o=>{let a=t(o,r++);(a||i)&&n.next(o),!a&&n.complete()}))})}function at(t,i,e){let n=de(t)||i||e?{next:t,error:i,complete:e}:t;return n?fe((r,o)=>{var a;(a=n.subscribe)===null||a===void 0||a.call(n);let s=!0;r.subscribe(pe(o,l=>{var d;(d=n.next)===null||d===void 0||d.call(n,l),o.next(l)},()=>{var l;s=!1,(l=n.complete)===null||l===void 0||l.call(n),o.complete()},l=>{var d;s=!1,(d=n.error)===null||d===void 0||d.call(n,l),o.error(l)},()=>{var l,d;s&&((l=n.unsubscribe)===null||l===void 0||l.call(n)),(d=n.finalize)===null||d===void 0||d.call(n)}))}):un}var Lh;function $s(){return Lh}function si(t){let i=Lh;return Lh=t,i}function Vh(t,i){let e=$s();if(!e)throw new Error("Current injector is not set.");if(!t.\u0275prov)throw new Error("Token is not an injectable");return e.retrieve(t,i)}var vy=Symbol("NotFound");function la(t){return t===vy||t?.name==="\u0275NotFound"}function by(t){let i=K(null);try{return t()}finally{K(i)}}var Od="https://angular.dev/best-practices/security#preventing-cross-site-scripting-xss",N=class extends Error{code;constructor(i,e){super(Mn(i,e)),this.code=i}};function bS(t){return`NG0${Math.abs(t)}`}function Mn(t,i){return`${bS(t)}${i?": "+i:""}`}var da=globalThis;function Re(t){for(let i in t)if(t[i]===Re)return i;throw Error("")}function xy(t,i){for(let e in i)i.hasOwnProperty(e)&&!t.hasOwnProperty(e)&&(t[e]=i[e])}function Ks(t){if(typeof t=="string")return t;if(Array.isArray(t))return`[${t.map(Ks).join(", ")}]`;if(t==null)return""+t;let i=t.overriddenName||t.name;if(i)return`${i}`;let e=t.toString();if(e==null)return""+e;let n=e.indexOf(`
`);return n>=0?e.slice(0,n):e}function Nd(t,i){return t?i?`${t} ${i}`:t:i||""}var yS=Re({__forward_ref__:Re});function fn(t){return t.__forward_ref__=fn,t}function Nt(t){return Kh(t)?t():t}function Kh(t){return typeof t=="function"&&t.hasOwnProperty(yS)&&t.__forward_ref__===fn}function y(t){return{token:t.token,providedIn:t.providedIn||null,factory:t.factory,value:void 0}}function j(t){return{providers:t.providers||[],imports:t.imports||[]}}function Xs(t){return CS(t,Fd)}function Xh(t){return Xs(t)!==null}function CS(t,i){return t.hasOwnProperty(i)&&t[i]||null}function wS(t){let i=t?.[Fd]??null;return i||null}function jh(t){return t&&t.hasOwnProperty(Sd)?t[Sd]:null}var Fd=Re({\u0275prov:Re}),Sd=Re({\u0275inj:Re}),b=class{_desc;ngMetadataName="InjectionToken";\u0275prov;constructor(i,e){this._desc=i,this.\u0275prov=void 0,typeof e=="number"?this.__NG_ELEMENT_ID__=e:e!==void 0&&(this.\u0275prov=y({token:this,providedIn:e.providedIn||"root",factory:e.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};function Jh(t){return t&&!!t.\u0275providers}var ep=Re({\u0275cmp:Re}),tp=Re({\u0275dir:Re}),np=Re({\u0275pipe:Re}),ip=Re({\u0275mod:Re}),Gs=Re({\u0275fac:Re}),go=Re({__NG_ELEMENT_ID__:Re}),yy=Re({__NG_ENV_ID__:Re});function rp(t){return Pd(t,"@NgModule"),t[ip]||null}function ci(t){return Pd(t,"@Component"),t[ep]||null}function op(t){return Pd(t,"@Directive"),t[tp]||null}function Ey(t){return Pd(t,"@Pipe"),t[np]||null}function Pd(t,i){if(t==null)throw new N(-919,!1)}function ua(t){return typeof t=="string"?t:t==null?"":String(t)}var My=Re({ngErrorCode:Re}),DS=Re({ngErrorMessage:Re}),xS=Re({ngTokenPath:Re});function ap(t,i){return Iy("",-200,i)}function Ld(t,i){throw new N(-201,!1)}function Iy(t,i,e){let n=new N(i,t);return n[My]=i,n[DS]=t,e&&(n[xS]=e),n}function ES(t){return t[My]}var Hh;function Sy(){return Hh}function Qt(t){let i=Hh;return Hh=t,i}function sp(t,i,e){let n=Xs(t);if(n&&n.providedIn=="root")return n.value===void 0?n.value=n.factory():n.value;if(e&8)return null;if(i!==void 0)return i;Ld(t,"")}var MS={},mo=MS,IS="__NG_DI_FLAG__",Uh=class{injector;constructor(i){this.injector=i}retrieve(i,e){let n=fo(e)||0;try{return this.injector.get(i,n&8?null:mo,n)}catch(r){if(la(r))return r;throw r}}};function SS(t,i=0){let e=$s();if(e===void 0)throw new N(-203,!1);if(e===null)return sp(t,void 0,i);{let n=TS(i),r=e.retrieve(t,n);if(la(r)){if(n.optional)return null;throw r}return r}}function z(t,i=0){return(Sy()||SS)(Nt(t),i)}function c(t,i){return z(t,fo(i))}function fo(t){return typeof t>"u"||typeof t=="number"?t:0|(t.optional&&8)|(t.host&&1)|(t.self&&2)|(t.skipSelf&&4)}function TS(t){return{optional:!!(t&8),host:!!(t&1),self:!!(t&2),skipSelf:!!(t&4)}}function zh(t){let i=[];for(let e=0;e<t.length;e++){let n=Nt(t[e]);if(Array.isArray(n)){if(n.length===0)throw new N(900,!1);let r,o=0;for(let a=0;a<n.length;a++){let s=n[a],l=kS(s);typeof l=="number"?l===-1?r=s.token:o|=l:r=s}i.push(z(r,o))}else i.push(z(n))}return i}function kS(t){return t[IS]}function xr(t,i){let e=t.hasOwnProperty(Gs);return e?t[Gs]:null}function Ty(t,i,e){if(t.length!==i.length)return!1;for(let n=0;n<t.length;n++){let r=t[n],o=i[n];if(e&&(r=e(r),o=e(o)),o!==r)return!1}return!0}function ky(t){return t.flat(Number.POSITIVE_INFINITY)}function Vd(t,i){t.forEach(e=>Array.isArray(e)?Vd(e,i):i(e))}function lp(t,i,e){i>=t.length?t.push(e):t.splice(i,0,e)}function Js(t,i){return i>=t.length-1?t.pop():t.splice(i,1)[0]}function Ay(t,i){let e=[];for(let n=0;n<t;n++)e.push(i);return e}function Ry(t,i,e,n){let r=t.length;if(r==i)t.push(e,n);else if(r===1)t.push(n,t[0]),t[0]=e;else{for(r--,t.push(t[r-1],t[r]);r>i;){let o=r-2;t[r]=t[o],r--}t[i]=e,t[i+1]=n}}function el(t,i,e){let n=ma(t,i);return n>=0?t[n|1]=e:(n=~n,Ry(t,n,i,e)),n}function Bd(t,i){let e=ma(t,i);if(e>=0)return t[e|1]}function ma(t,i){return AS(t,i,1)}function AS(t,i,e){let n=0,r=t.length>>e;for(;r!==n;){let o=n+(r-n>>1),a=t[o<<e];if(i===a)return o<<e;a>i?r=o:n=o+1}return~(r<<e)}var Ir={},zt=[],Sr=new b(""),cp=new b("",-1),dp=new b(""),qs=class{get(i,e=mo){if(e===mo){let r=Iy("",-201);throw r.name="\u0275NotFound",r}return e}};function di(t){return{\u0275providers:t}}function Oy(t){return di([{provide:Sr,multi:!0,useValue:t}])}function Ny(...t){return{\u0275providers:up(!0,t),\u0275fromNgModule:!0}}function up(t,...i){let e=[],n=new Set,r,o=a=>{e.push(a)};return Vd(i,a=>{let s=a;Td(s,o,[],n)&&(r||=[],r.push(s))}),r!==void 0&&Fy(r,o),e}function Fy(t,i){for(let e=0;e<t.length;e++){let{ngModule:n,providers:r}=t[e];mp(r,o=>{i(o,n)})}}function Td(t,i,e,n){if(t=Nt(t),!t)return!1;let r=null,o=jh(t),a=!o&&ci(t);if(!o&&!a){let l=t.ngModule;if(o=jh(l),o)r=l;else return!1}else{if(a&&!a.standalone)return!1;r=t}let s=n.has(r);if(a){if(s)return!1;if(n.add(r),a.dependencies){let l=typeof a.dependencies=="function"?a.dependencies():a.dependencies;for(let d of l)Td(d,i,e,n)}}else if(o){if(o.imports!=null&&!s){n.add(r);let d;Vd(o.imports,u=>{Td(u,i,e,n)&&(d||=[],d.push(u))}),d!==void 0&&Fy(d,i)}if(!s){let d=xr(r)||(()=>new r);i({provide:r,useFactory:d,deps:zt},r),i({provide:dp,useValue:r,multi:!0},r),i({provide:Sr,useValue:()=>z(r),multi:!0},r)}let l=o.providers;if(l!=null&&!s){let d=t;mp(l,u=>{i(u,d)})}}else return!1;return r!==t&&t.providers!==void 0}function mp(t,i){for(let e of t)Jh(e)&&(e=e.\u0275providers),Array.isArray(e)?mp(e,i):i(e)}var RS=Re({provide:String,useValue:Re});function Py(t){return t!==null&&typeof t=="object"&&RS in t}function OS(t){return!!(t&&t.useExisting)}function NS(t){return!!(t&&t.useFactory)}function ho(t){return typeof t=="function"}function Ly(t){return!!t.useClass}var tl=new b(""),Id={},Cy={},Bh;function fa(){return Bh===void 0&&(Bh=new qs),Bh}var Oe=class{},po=class extends Oe{parent;source;scopes;records=new Map;_ngOnDestroyHooks=new Set;_onDestroyHooks=[];get destroyed(){return this._destroyed}_destroyed=!1;injectorDefTypes;constructor(i,e,n,r){super(),this.parent=e,this.source=n,this.scopes=r,Wh(i,a=>this.processProvider(a)),this.records.set(cp,ca(void 0,this)),r.has("environment")&&this.records.set(Oe,ca(void 0,this));let o=this.records.get(tl);o!=null&&typeof o.value=="string"&&this.scopes.add(o.value),this.injectorDefTypes=new Set(this.get(dp,zt,{self:!0}))}retrieve(i,e){let n=fo(e)||0;try{return this.get(i,mo,n)}catch(r){if(la(r))return r;throw r}}destroy(){Ws(this),this._destroyed=!0;let i=K(null);try{for(let n of this._ngOnDestroyHooks)n.ngOnDestroy();let e=this._onDestroyHooks;this._onDestroyHooks=[];for(let n of e)n()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),K(i)}}onDestroy(i){return Ws(this),this._onDestroyHooks.push(i),()=>this.removeOnDestroy(i)}runInContext(i){Ws(this);let e=si(this),n=Qt(void 0),r;try{return i()}finally{si(e),Qt(n)}}get(i,e=mo,n){if(Ws(this),i.hasOwnProperty(yy))return i[yy](this);let r=fo(n),o,a=si(this),s=Qt(void 0);try{if(!(r&4)){let d=this.records.get(i);if(d===void 0){let u=BS(i)&&Xs(i);u&&this.injectableDefInScope(u)?d=ca($h(i),Id):d=null,this.records.set(i,d)}if(d!=null)return this.hydrate(i,d,r)}let l=r&2?fa():this.parent;return e=r&8&&e===mo?null:e,l.get(i,e)}catch(l){let d=ES(l);throw d===-200||d===-201?new N(d,null):l}finally{Qt(s),si(a)}}resolveInjectorInitializers(){let i=K(null),e=si(this),n=Qt(void 0),r;try{let o=this.get(Sr,zt,{self:!0});for(let a of o)a()}finally{si(e),Qt(n),K(i)}}toString(){return"R3Injector[...]"}processProvider(i){i=Nt(i);let e=ho(i)?i:Nt(i&&i.provide),n=PS(i);if(!ho(i)&&i.multi===!0){let r=this.records.get(e);r||(r=ca(void 0,Id,!0),r.factory=()=>zh(r.multi),this.records.set(e,r)),e=i,r.multi.push(i)}this.records.set(e,n)}hydrate(i,e,n){let r=K(null);try{if(e.value===Cy)throw ap("");return e.value===Id&&(e.value=Cy,e.value=e.factory(void 0,n)),typeof e.value=="object"&&e.value&&VS(e.value)&&this._ngOnDestroyHooks.add(e.value),e.value}finally{K(r)}}injectableDefInScope(i){if(!i.providedIn)return!1;let e=Nt(i.providedIn);return typeof e=="string"?e==="any"||this.scopes.has(e):this.injectorDefTypes.has(e)}removeOnDestroy(i){let e=this._onDestroyHooks.indexOf(i);e!==-1&&this._onDestroyHooks.splice(e,1)}};function $h(t){let i=Xs(t),e=i!==null?i.factory:xr(t);if(e!==null)return e;if(t instanceof b)throw new N(-204,!1);if(t instanceof Function)return FS(t);throw new N(-204,!1)}function FS(t){if(t.length>0)throw new N(-204,!1);let e=wS(t);return e!==null?()=>e.factory(t):()=>new t}function PS(t){if(Py(t))return ca(void 0,t.useValue);{let i=fp(t);return ca(i,Id)}}function fp(t,i,e){let n;if(ho(t)){let r=Nt(t);return xr(r)||$h(r)}else if(Py(t))n=()=>Nt(t.useValue);else if(NS(t))n=()=>t.useFactory(...zh(t.deps||[]));else if(OS(t))n=(r,o)=>z(Nt(t.useExisting),o!==void 0&&o&8?8:void 0);else{let r=Nt(t&&(t.useClass||t.provide));if(LS(t))n=()=>new r(...zh(t.deps));else return xr(r)||$h(r)}return n}function Ws(t){if(t.destroyed)throw new N(-205,!1)}function ca(t,i,e=!1){return{factory:t,value:i,multi:e?[]:void 0}}function LS(t){return!!t.deps}function VS(t){return t!==null&&typeof t=="object"&&typeof t.ngOnDestroy=="function"}function BS(t){return typeof t=="function"||typeof t=="object"&&t.ngMetadataName==="InjectionToken"}function Wh(t,i){for(let e of t)Array.isArray(e)?Wh(e,i):e&&Jh(e)?Wh(e.\u0275providers,i):i(e)}function bt(t,i){let e;t instanceof po?(Ws(t),e=t):e=new Uh(t);let n,r=si(e),o=Qt(void 0);try{return i()}finally{si(r),Qt(o)}}function Vy(){return Sy()!==void 0||$s()!=null}var Gn=0,ne=1,ae=2,vt=3,In=4,Zt=5,_o=6,ha=7,st=8,Yi=9,ui=10,Be=11,pa=12,hp=13,vo=14,Kt=15,Tr=16,bo=17,mi=18,Qi=19,pp=20,qi=21,jd=22,Er=23,hn=24,yo=25,kr=26,Xe=27,By=1,gp=6,Ar=7,nl=8,Co=9,it=10;function Zi(t){return Array.isArray(t)&&typeof t[By]=="object"}function qn(t){return Array.isArray(t)&&t[By]===!0}function _p(t){return(t.flags&4)!==0}function fi(t){return t.componentOffset>-1}function il(t){return(t.flags&1)===1}function hi(t){return!!t.template}function ga(t){return(t[ae]&512)!==0}function wo(t){return(t[ae]&256)===256}var vp="svg",jy="math";function Sn(t){for(;Array.isArray(t);)t=t[Gn];return t}function bp(t,i){return Sn(i[t])}function Tn(t,i){return Sn(i[t.index])}function Hd(t,i){return t.data[i]}function yp(t,i){return t[i]}function Cp(t,i,e,n){e>=t.data.length&&(t.data[e]=null,t.blueprint[e]=null),i[e]=n}function kn(t,i){let e=i[t];return Zi(e)?e:e[Gn]}function Hy(t){return(t[ae]&4)===4}function Ud(t){return(t[ae]&128)===128}function Uy(t){return qn(t[vt])}function pn(t,i){return i==null?null:t[i]}function wp(t){t[bo]=0}function Dp(t){t[ae]&1024||(t[ae]|=1024,Ud(t)&&Do(t))}function zy(t,i){for(;t>0;)i=i[vo],t--;return i}function rl(t){return!!(t[ae]&9216||t[hn]?.dirty)}function zd(t){t[ui].changeDetectionScheduler?.notify(8),t[ae]&64&&(t[ae]|=1024),rl(t)&&Do(t)}function Do(t){t[ui].changeDetectionScheduler?.notify(0);let i=Mr(t);for(;i!==null&&!(i[ae]&8192||(i[ae]|=8192,!Ud(i)));)i=Mr(i)}function xp(t,i){if(wo(t))throw new N(911,!1);t[qi]===null&&(t[qi]=[]),t[qi].push(i)}function $y(t,i){if(t[qi]===null)return;let e=t[qi].indexOf(i);e!==-1&&t[qi].splice(e,1)}function Mr(t){let i=t[vt];return qn(i)?i[vt]:i}function Ep(t){return t[ha]??=[]}function Mp(t){return t.cleanup??=[]}function Wy(t,i,e,n){let r=Ep(i);r.push(e),t.firstCreatePass&&Mp(t).push(n,r.length-1)}var he={lFrame:i0(null),bindingsEnabled:!0,skipHydrationRootTNode:null};var Gh=!1;function Gy(){return he.lFrame.elementDepthCount}function qy(){he.lFrame.elementDepthCount++}function Ip(){he.lFrame.elementDepthCount--}function Sp(){return he.bindingsEnabled}function Tp(){return he.skipHydrationRootTNode!==null}function kp(t){return he.skipHydrationRootTNode===t}function Ap(){he.skipHydrationRootTNode=null}function J(){return he.lFrame.lView}function ze(){return he.lFrame.tView}function ue(t){return he.lFrame.contextLView=t,t[st]}function me(t){return he.lFrame.contextLView=null,t}function Tt(){let t=Rp();for(;t!==null&&t.type===64;)t=t.parent;return t}function Rp(){return he.lFrame.currentTNode}function Yy(){let t=he.lFrame,i=t.currentTNode;return t.isParent?i:i.parent}function _a(t,i){let e=he.lFrame;e.currentTNode=t,e.isParent=i}function Op(){return he.lFrame.isParent}function Np(){he.lFrame.isParent=!1}function Qy(){return he.lFrame.contextLView}function Fp(){return Gh}function Ys(t){let i=Gh;return Gh=t,i}function $d(){let t=he.lFrame,i=t.bindingRootIndex;return i===-1&&(i=t.bindingRootIndex=t.tView.bindingStartIndex),i}function Zy(){return he.lFrame.bindingIndex}function Ky(t){return he.lFrame.bindingIndex=t}function pi(){return he.lFrame.bindingIndex++}function Wd(t){let i=he.lFrame,e=i.bindingIndex;return i.bindingIndex=i.bindingIndex+t,e}function Xy(){return he.lFrame.inI18n}function Jy(t,i){let e=he.lFrame;e.bindingIndex=e.bindingRootIndex=t,Gd(i)}function e0(){return he.lFrame.currentDirectiveIndex}function Gd(t){he.lFrame.currentDirectiveIndex=t}function t0(t){let i=he.lFrame.currentDirectiveIndex;return i===-1?null:t[i]}function qd(){return he.lFrame.currentQueryIndex}function ol(t){he.lFrame.currentQueryIndex=t}function jS(t){let i=t[ne];return i.type===2?i.declTNode:i.type===1?t[Zt]:null}function Pp(t,i,e){if(e&4){let r=i,o=t;for(;r=r.parent,r===null&&!(e&1);)if(r=jS(o),r===null||(o=o[vo],r.type&10))break;if(r===null)return!1;i=r,t=o}let n=he.lFrame=n0();return n.currentTNode=i,n.lView=t,!0}function Yd(t){let i=n0(),e=t[ne];he.lFrame=i,i.currentTNode=e.firstChild,i.lView=t,i.tView=e,i.contextLView=t,i.bindingIndex=e.bindingStartIndex,i.inI18n=!1}function n0(){let t=he.lFrame,i=t===null?null:t.child;return i===null?i0(t):i}function i0(t){let i={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:t,child:null,inI18n:!1};return t!==null&&(t.child=i),i}function r0(){let t=he.lFrame;return he.lFrame=t.parent,t.currentTNode=null,t.lView=null,t}var Lp=r0;function Qd(){let t=r0();t.isParent=!0,t.tView=null,t.selectedIndex=-1,t.contextLView=null,t.elementDepthCount=0,t.currentDirectiveIndex=-1,t.currentNamespace=null,t.bindingRootIndex=-1,t.bindingIndex=-1,t.currentQueryIndex=0}function o0(t){return(he.lFrame.contextLView=zy(t,he.lFrame.contextLView))[st]}function gi(){return he.lFrame.selectedIndex}function Rr(t){he.lFrame.selectedIndex=t}function va(){let t=he.lFrame;return Hd(t.tView,t.selectedIndex)}function _i(){he.lFrame.currentNamespace=vp}function ba(){HS()}function HS(){he.lFrame.currentNamespace=null}function a0(){return he.lFrame.currentNamespace}var s0=!0;function Zd(){return s0}function Kd(t){s0=t}function qh(t,i=null,e=null,n){let r=Vp(t,i,e,n);return r.resolveInjectorInitializers(),r}function Vp(t,i=null,e=null,n,r=new Set){let o=[e||zt,Ny(t)],a;return new po(o,i||fa(),a||null,r)}var $=class t{static THROW_IF_NOT_FOUND=mo;static NULL=new qs;static create(i,e){if(Array.isArray(i))return qh({name:""},e,i,"");{let n=i.name??"";return qh({name:n},i.parent,i.providers,n)}}static \u0275prov=y({token:t,providedIn:"any",factory:()=>z(cp)});static __NG_ELEMENT_ID__=-1},Y=new b(""),Ft=(()=>{class t{static __NG_ELEMENT_ID__=US;static __NG_ENV_ID__=e=>e}return t})(),kd=class extends Ft{_lView;constructor(i){super(),this._lView=i}get destroyed(){return wo(this._lView)}onDestroy(i){let e=this._lView;return xp(e,i),()=>$y(e,i)}};function US(){return new kd(J())}var l0=!1,c0=new b(""),Ki=(()=>{class t{taskId=0;pendingTasks=new Set;destroyed=!1;pendingTask=new mt(!1);debugTaskTracker=c(c0,{optional:!0});get hasPendingTasks(){return this.destroyed?!1:this.pendingTask.value}get hasPendingTasksObservable(){return this.destroyed?new re(e=>{e.next(!1),e.complete()}):this.pendingTask}add(){!this.hasPendingTasks&&!this.destroyed&&this.pendingTask.next(!0);let e=this.taskId++;return this.pendingTasks.add(e),this.debugTaskTracker?.add(e),e}has(e){return this.pendingTasks.has(e)}remove(e){this.pendingTasks.delete(e),this.debugTaskTracker?.remove(e),this.pendingTasks.size===0&&this.hasPendingTasks&&this.pendingTask.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this.hasPendingTasks&&this.pendingTask.next(!1),this.destroyed=!0,this.pendingTask.unsubscribe()}static \u0275prov=y({token:t,providedIn:"root",factory:()=>new t})}return t})(),Yh=class extends x{__isAsync;destroyRef=void 0;pendingTasks=void 0;constructor(i=!1){super(),this.__isAsync=i,Vy()&&(this.destroyRef=c(Ft,{optional:!0})??void 0,this.pendingTasks=c(Ki,{optional:!0})??void 0)}emit(i){let e=K(null);try{super.next(i)}finally{K(e)}}subscribe(i,e,n){let r=i,o=e||(()=>null),a=n;if(i&&typeof i=="object"){let l=i;r=l.next?.bind(l),o=l.error?.bind(l),a=l.complete?.bind(l)}this.__isAsync&&(o=this.wrapInTimeout(o),r&&(r=this.wrapInTimeout(r)),a&&(a=this.wrapInTimeout(a)));let s=super.subscribe({next:r,error:o,complete:a});return i instanceof ie&&i.add(s),s}wrapInTimeout(i){return e=>{let n=this.pendingTasks?.add();setTimeout(()=>{try{i(e)}finally{n!==void 0&&this.pendingTasks?.remove(n)}})}}},M=Yh;function Ad(...t){}function Bp(t){let i,e;function n(){t=Ad;try{e!==void 0&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(e),i!==void 0&&clearTimeout(i)}catch{}}return i=setTimeout(()=>{t(),n()}),typeof requestAnimationFrame=="function"&&(e=requestAnimationFrame(()=>{t(),n()})),()=>n()}function d0(t){return queueMicrotask(()=>t()),()=>{t=Ad}}var jp="isAngularZone",Qs=jp+"_ID",zS=0,L=class t{hasPendingMacrotasks=!1;hasPendingMicrotasks=!1;isStable=!0;onUnstable=new M(!1);onMicrotaskEmpty=new M(!1);onStable=new M(!1);onError=new M(!1);constructor(i){let{enableLongStackTrace:e=!1,shouldCoalesceEventChangeDetection:n=!1,shouldCoalesceRunChangeDetection:r=!1,scheduleInRootZone:o=l0}=i;if(typeof Zone>"u")throw new N(908,!1);Zone.assertZonePatched();let a=this;a._nesting=0,a._outer=a._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(a._inner=a._inner.fork(new Zone.TaskTrackingZoneSpec)),e&&Zone.longStackTraceZoneSpec&&(a._inner=a._inner.fork(Zone.longStackTraceZoneSpec)),a.shouldCoalesceEventChangeDetection=!r&&n,a.shouldCoalesceRunChangeDetection=r,a.callbackScheduled=!1,a.scheduleInRootZone=o,GS(a)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get(jp)===!0}static assertInAngularZone(){if(!t.isInAngularZone())throw new N(909,!1)}static assertNotInAngularZone(){if(t.isInAngularZone())throw new N(909,!1)}run(i,e,n){return this._inner.run(i,e,n)}runTask(i,e,n,r){let o=this._inner,a=o.scheduleEventTask("NgZoneEvent: "+r,i,$S,Ad,Ad);try{return o.runTask(a,e,n)}finally{o.cancelTask(a)}}runGuarded(i,e,n){return this._inner.runGuarded(i,e,n)}runOutsideAngular(i){return this._outer.run(i)}},$S={};function Hp(t){if(t._nesting==0&&!t.hasPendingMicrotasks&&!t.isStable)try{t._nesting++,t.onMicrotaskEmpty.emit(null)}finally{if(t._nesting--,!t.hasPendingMicrotasks)try{t.runOutsideAngular(()=>t.onStable.emit(null))}finally{t.isStable=!0}}}function WS(t){if(t.isCheckStableRunning||t.callbackScheduled)return;t.callbackScheduled=!0;function i(){Bp(()=>{t.callbackScheduled=!1,Qh(t),t.isCheckStableRunning=!0,Hp(t),t.isCheckStableRunning=!1})}t.scheduleInRootZone?Zone.root.run(()=>{i()}):t._outer.run(()=>{i()}),Qh(t)}function GS(t){let i=()=>{WS(t)},e=zS++;t._inner=t._inner.fork({name:"angular",properties:{[jp]:!0,[Qs]:e,[Qs+e]:!0},onInvokeTask:(n,r,o,a,s,l)=>{if(qS(l))return n.invokeTask(o,a,s,l);try{return wy(t),n.invokeTask(o,a,s,l)}finally{(t.shouldCoalesceEventChangeDetection&&a.type==="eventTask"||t.shouldCoalesceRunChangeDetection)&&i(),Dy(t)}},onInvoke:(n,r,o,a,s,l,d)=>{try{return wy(t),n.invoke(o,a,s,l,d)}finally{t.shouldCoalesceRunChangeDetection&&!t.callbackScheduled&&!YS(l)&&i(),Dy(t)}},onHasTask:(n,r,o,a)=>{n.hasTask(o,a),r===o&&(a.change=="microTask"?(t._hasPendingMicrotasks=a.microTask,Qh(t),Hp(t)):a.change=="macroTask"&&(t.hasPendingMacrotasks=a.macroTask))},onHandleError:(n,r,o,a)=>(n.handleError(o,a),t.runOutsideAngular(()=>t.onError.emit(a)),!1)})}function Qh(t){t._hasPendingMicrotasks||(t.shouldCoalesceEventChangeDetection||t.shouldCoalesceRunChangeDetection)&&t.callbackScheduled===!0?t.hasPendingMicrotasks=!0:t.hasPendingMicrotasks=!1}function wy(t){t._nesting++,t.isStable&&(t.isStable=!1,t.onUnstable.emit(null))}function Dy(t){t._nesting--,Hp(t)}var Zs=class{hasPendingMicrotasks=!1;hasPendingMacrotasks=!1;isStable=!0;onUnstable=new M;onMicrotaskEmpty=new M;onStable=new M;onError=new M;run(i,e,n){return i.apply(e,n)}runGuarded(i,e,n){return i.apply(e,n)}runOutsideAngular(i){return i()}runTask(i,e,n,r){return i.apply(e,n)}};function qS(t){return u0(t,"__ignore_ng_zone__")}function YS(t){return u0(t,"__scheduler_tick__")}function u0(t,i){return!Array.isArray(t)||t.length!==1?!1:t[0]?.data?.[i]===!0}var $t=class{_console=console;handleError(i){this._console.error("ERROR",i)}},gn=new b("",{factory:()=>{let t=c(L),i=c(Oe),e;return n=>{t.runOutsideAngular(()=>{i.destroyed&&!e?setTimeout(()=>{throw n}):(e??=i.get($t),e.handleError(n))})}}}),m0={provide:Sr,useValue:()=>{let t=c($t,{optional:!0})},multi:!0},QS=new b("",{factory:()=>{let t=c(Y).defaultView;if(!t)return;let i=c(gn),e=o=>{i(o.reason),o.preventDefault()},n=o=>{o.error?i(o.error):i(new Error(o.message,{cause:o})),o.preventDefault()},r=()=>{t.addEventListener("unhandledrejection",e),t.addEventListener("error",n)};typeof Zone<"u"?Zone.root.run(r):r(),c(Ft).onDestroy(()=>{t.removeEventListener("error",n),t.removeEventListener("unhandledrejection",e)})}});function Up(){return di([Oy(()=>{c(QS)})])}function I(t,i){let[e,n,r]=wh(t,i?.equal),o=e,a=o[ut];return o.set=n,o.update=r,o.asReadonly=Xd.bind(o),o}function Xd(){let t=this[ut];if(t.readonlyFn===void 0){let i=()=>this();i[ut]=t,t.readonlyFn=i}return t.readonlyFn}var ya=(()=>{class t{view;node;constructor(e,n){this.view=e,this.node=n}static __NG_ELEMENT_ID__=ZS}return t})();function ZS(){return new ya(J(),Tt())}var li=class{},al=new b("",{factory:()=>!0});var zp=new b(""),Ca=(()=>{class t{internalPendingTasks=c(Ki);scheduler=c(li);errorHandler=c(gn);add(){let e=this.internalPendingTasks.add();return()=>{this.internalPendingTasks.has(e)&&(this.scheduler.notify(11),this.internalPendingTasks.remove(e))}}run(e){let n=this.add();e().catch(this.errorHandler).finally(n)}static \u0275prov=y({token:t,providedIn:"root",factory:()=>new t})}return t})(),Jd=(()=>{class t{static \u0275prov=y({token:t,providedIn:"root",factory:()=>new Zh})}return t})(),Zh=class{dirtyEffectCount=0;queues=new Map;add(i){this.enqueue(i),this.schedule(i)}schedule(i){i.dirty&&this.dirtyEffectCount++}remove(i){let e=i.zone,n=this.queues.get(e);n.has(i)&&(n.delete(i),i.dirty&&this.dirtyEffectCount--)}enqueue(i){let e=i.zone;this.queues.has(e)||this.queues.set(e,new Set);let n=this.queues.get(e);n.has(i)||n.add(i)}flush(){for(;this.dirtyEffectCount>0;){let i=!1;for(let[e,n]of this.queues)e===null?i||=this.flushQueue(n):i||=e.run(()=>this.flushQueue(n));i||(this.dirtyEffectCount=0)}}flushQueue(i){let e=!1;for(let n of i)n.dirty&&(this.dirtyEffectCount--,e=!0,n.run());return e}},Rd=class{[ut];constructor(i){this[ut]=i}destroy(){this[ut].destroy()}};function Xt(t,i){let e=i?.injector??c($),n=i?.manualCleanup!==!0?e.get(Ft):null,r,o=e.get(ya,null,{optional:!0}),a=e.get(li);return o!==null?(r=JS(o.view,a,t),n instanceof kd&&n._lView===o.view&&(n=null)):r=eT(t,e.get(Jd),a),r.injector=e,n!==null&&(r.onDestroyFns=[n.onDestroy(()=>r.destroy())]),new Rd(r)}var f0=X(C({},xh),{cleanupFns:void 0,zone:null,onDestroyFns:null,run(){let t=Ys(!1);try{Eh(this)}finally{Ys(t)}},cleanup(){if(!this.cleanupFns?.length)return;let t=K(null);try{for(;this.cleanupFns.length;)this.cleanupFns.pop()()}finally{this.cleanupFns=[],K(t)}}}),KS=X(C({},f0),{consumerMarkedDirty(){this.scheduler.schedule(this),this.notifier.notify(12)},destroy(){if(vr(this),this.onDestroyFns!==null)for(let t of this.onDestroyFns)t();this.cleanup(),this.scheduler.remove(this)}}),XS=X(C({},f0),{consumerMarkedDirty(){this.view[ae]|=8192,Do(this.view),this.notifier.notify(13)},destroy(){if(vr(this),this.onDestroyFns!==null)for(let t of this.onDestroyFns)t();this.cleanup(),this.view[Er]?.delete(this)}});function JS(t,i,e){let n=Object.create(XS);return n.view=t,n.zone=typeof Zone<"u"?Zone.current:null,n.notifier=i,n.fn=h0(n,e),t[Er]??=new Set,t[Er].add(n),n.consumerMarkedDirty(n),n}function eT(t,i,e){let n=Object.create(KS);return n.fn=h0(n,t),n.scheduler=i,n.notifier=e,n.zone=typeof Zone<"u"?Zone.current:null,n.scheduler.add(n),n.notifier.notify(12),n}function h0(t,i){return()=>{i(e=>(t.cleanupFns??=[]).push(e))}}function gl(t){return{toString:t}.toString()}function aT(t){return typeof t=="function"}function Y0(t,i,e,n){i!==null?i.applyValueToInputSignal(i,n):t[e]=n}var lu=class{previousValue;currentValue;firstChange;constructor(i,e,n){this.previousValue=i,this.currentValue=e,this.firstChange=n}isFirstChange(){return this.firstChange}},Fe=(()=>{let t=()=>Q0;return t.ngInherit=!0,t})();function Q0(t){return t.type.prototype.ngOnChanges&&(t.setInput=lT),sT}function sT(){let t=K0(this),i=t?.current;if(i){let e=t.previous;if(e===Ir)t.previous=i;else for(let n in i)e[n]=i[n];t.current=null,this.ngOnChanges(i)}}function lT(t,i,e,n,r){let o=this.declaredInputs[n],a=K0(t)||cT(t,{previous:Ir,current:null}),s=a.current||(a.current={}),l=a.previous,d=l[o];s[o]=new lu(d&&d.currentValue,e,l===Ir),Y0(t,i,r,e)}var Z0="__ngSimpleChanges__";function K0(t){return t[Z0]||null}function cT(t,i){return t[Z0]=i}var p0=[];var Ne=function(t,i=null,e){for(let n=0;n<p0.length;n++){let r=p0[n];r(t,i,e)}},De=(function(t){return t[t.TemplateCreateStart=0]="TemplateCreateStart",t[t.TemplateCreateEnd=1]="TemplateCreateEnd",t[t.TemplateUpdateStart=2]="TemplateUpdateStart",t[t.TemplateUpdateEnd=3]="TemplateUpdateEnd",t[t.LifecycleHookStart=4]="LifecycleHookStart",t[t.LifecycleHookEnd=5]="LifecycleHookEnd",t[t.OutputStart=6]="OutputStart",t[t.OutputEnd=7]="OutputEnd",t[t.BootstrapApplicationStart=8]="BootstrapApplicationStart",t[t.BootstrapApplicationEnd=9]="BootstrapApplicationEnd",t[t.BootstrapComponentStart=10]="BootstrapComponentStart",t[t.BootstrapComponentEnd=11]="BootstrapComponentEnd",t[t.ChangeDetectionStart=12]="ChangeDetectionStart",t[t.ChangeDetectionEnd=13]="ChangeDetectionEnd",t[t.ChangeDetectionSyncStart=14]="ChangeDetectionSyncStart",t[t.ChangeDetectionSyncEnd=15]="ChangeDetectionSyncEnd",t[t.AfterRenderHooksStart=16]="AfterRenderHooksStart",t[t.AfterRenderHooksEnd=17]="AfterRenderHooksEnd",t[t.ComponentStart=18]="ComponentStart",t[t.ComponentEnd=19]="ComponentEnd",t[t.DeferBlockStateStart=20]="DeferBlockStateStart",t[t.DeferBlockStateEnd=21]="DeferBlockStateEnd",t[t.DynamicComponentStart=22]="DynamicComponentStart",t[t.DynamicComponentEnd=23]="DynamicComponentEnd",t[t.HostBindingsUpdateStart=24]="HostBindingsUpdateStart",t[t.HostBindingsUpdateEnd=25]="HostBindingsUpdateEnd",t})(De||{});function dT(t,i,e){let{ngOnChanges:n,ngOnInit:r,ngDoCheck:o}=i.type.prototype;if(n){let a=Q0(i);(e.preOrderHooks??=[]).push(t,a),(e.preOrderCheckHooks??=[]).push(t,a)}r&&(e.preOrderHooks??=[]).push(0-t,r),o&&((e.preOrderHooks??=[]).push(t,o),(e.preOrderCheckHooks??=[]).push(t,o))}function X0(t,i){for(let e=i.directiveStart,n=i.directiveEnd;e<n;e++){let o=t.data[e].type.prototype,{ngAfterContentInit:a,ngAfterContentChecked:s,ngAfterViewInit:l,ngAfterViewChecked:d,ngOnDestroy:u}=o;a&&(t.contentHooks??=[]).push(-e,a),s&&((t.contentHooks??=[]).push(e,s),(t.contentCheckHooks??=[]).push(e,s)),l&&(t.viewHooks??=[]).push(-e,l),d&&((t.viewHooks??=[]).push(e,d),(t.viewCheckHooks??=[]).push(e,d)),u!=null&&(t.destroyHooks??=[]).push(e,u)}}function iu(t,i,e){J0(t,i,3,e)}function ru(t,i,e,n){(t[ae]&3)===e&&J0(t,i,e,n)}function $p(t,i){let e=t[ae];(e&3)===i&&(e&=16383,e+=1,t[ae]=e)}function J0(t,i,e,n){let r=n!==void 0?t[bo]&65535:0,o=n??-1,a=i.length-1,s=0;for(let l=r;l<a;l++)if(typeof i[l+1]=="number"){if(s=i[l],n!=null&&s>=n)break}else i[l]<0&&(t[bo]+=65536),(s<o||o==-1)&&(uT(t,e,i,l),t[bo]=(t[bo]&4294901760)+l+2),l++}function g0(t,i){Ne(De.LifecycleHookStart,t,i);let e=K(null);try{i.call(t)}finally{K(e),Ne(De.LifecycleHookEnd,t,i)}}function uT(t,i,e,n){let r=e[n]<0,o=e[n+1],a=r?-e[n]:e[n],s=t[a];r?t[ae]>>14<t[bo]>>16&&(t[ae]&3)===i&&(t[ae]+=16384,g0(s,o)):g0(s,o)}var Da=-1,Eo=class{factory;name;injectImpl;resolving=!1;canSeeViewProviders;multi;componentProviders;index;providerFactory;constructor(i,e,n,r){this.factory=i,this.name=r,this.canSeeViewProviders=e,this.injectImpl=n}};function mT(t){return(t.flags&8)!==0}function fT(t){return(t.flags&16)!==0}function hT(t,i,e){let n=0;for(;n<e.length;){let r=e[n];if(typeof r=="number"){if(r!==0)break;n++;let o=e[n++],a=e[n++],s=e[n++];t.setAttribute(i,a,s,o)}else{let o=r,a=e[++n];pT(o)?t.setProperty(i,o,a):t.setAttribute(i,o,a),n++}}return n}function eC(t){return t===3||t===4||t===6}function pT(t){return t.charCodeAt(0)===64}function xa(t,i){if(!(i===null||i.length===0))if(t===null||t.length===0)t=i.slice();else{let e=-1;for(let n=0;n<i.length;n++){let r=i[n];typeof r=="number"?e=r:e===0||(e===-1||e===2?_0(t,e,r,null,i[++n]):_0(t,e,r,null,null))}}return t}function _0(t,i,e,n,r){let o=0,a=t.length;if(i===-1)a=-1;else for(;o<t.length;){let s=t[o++];if(typeof s=="number"){if(s===i){a=-1;break}else if(s>i){a=o-1;break}}}for(;o<t.length;){let s=t[o];if(typeof s=="number")break;if(s===e){r!==null&&(t[o+1]=r);return}o++,r!==null&&o++}a!==-1&&(t.splice(a,0,i),o=a+1),t.splice(o++,0,e),r!==null&&t.splice(o++,0,r)}function tC(t){return t!==Da}function cu(t){return t&32767}function gT(t){return t>>16}function du(t,i){let e=gT(t),n=i;for(;e>0;)n=n[vo],e--;return n}var eg=!0;function uu(t){let i=eg;return eg=t,i}var _T=256,nC=_T-1,iC=5,vT=0,vi={};function bT(t,i,e){let n;typeof e=="string"?n=e.charCodeAt(0)||0:e.hasOwnProperty(go)&&(n=e[go]),n==null&&(n=e[go]=vT++);let r=n&nC,o=1<<r;i.data[t+(r>>iC)]|=o}function mu(t,i){let e=rC(t,i);if(e!==-1)return e;let n=i[ne];n.firstCreatePass&&(t.injectorIndex=i.length,Wp(n.data,t),Wp(i,null),Wp(n.blueprint,null));let r=Pg(t,i),o=t.injectorIndex;if(tC(r)){let a=cu(r),s=du(r,i),l=s[ne].data;for(let d=0;d<8;d++)i[o+d]=s[a+d]|l[a+d]}return i[o+8]=r,o}function Wp(t,i){t.push(0,0,0,0,0,0,0,0,i)}function rC(t,i){return t.injectorIndex===-1||t.parent&&t.parent.injectorIndex===t.injectorIndex||i[t.injectorIndex+8]===null?-1:t.injectorIndex}function Pg(t,i){if(t.parent&&t.parent.injectorIndex!==-1)return t.parent.injectorIndex;let e=0,n=null,r=i;for(;r!==null;){if(n=cC(r),n===null)return Da;if(e++,r=r[vo],n.injectorIndex!==-1)return n.injectorIndex|e<<16}return Da}function tg(t,i,e){bT(t,i,e)}function yT(t,i){if(i==="class")return t.classes;if(i==="style")return t.styles;let e=t.attrs;if(e){let n=e.length,r=0;for(;r<n;){let o=e[r];if(eC(o))break;if(o===0)r=r+2;else if(typeof o=="number")for(r++;r<n&&typeof e[r]=="string";)r++;else{if(o===i)return e[r+1];r=r+2}}}return null}function oC(t,i,e){if(e&8||t!==void 0)return t;Ld(i,"NodeInjector")}function aC(t,i,e,n){if(e&8&&n===void 0&&(n=null),(e&3)===0){let r=t[Yi],o=Qt(void 0);try{return r?r.get(i,n,e&8):sp(i,n,e&8)}finally{Qt(o)}}return oC(n,i,e)}function sC(t,i,e,n=0,r){if(t!==null){if(i[ae]&2048&&!(n&2)){let a=xT(t,i,e,n,vi);if(a!==vi)return a}let o=lC(t,i,e,n,vi);if(o!==vi)return o}return aC(i,e,n,r)}function lC(t,i,e,n,r){let o=wT(e);if(typeof o=="function"){if(!Pp(i,t,n))return n&1?oC(r,e,n):aC(i,e,n,r);try{let a;if(a=o(n),a==null&&!(n&8))Ld(e);else return a}finally{Lp()}}else if(typeof o=="number"){let a=null,s=rC(t,i),l=Da,d=n&1?i[Kt][Zt]:null;for((s===-1||n&4)&&(l=s===-1?Pg(t,i):i[s+8],l===Da||!b0(n,!1)?s=-1:(a=i[ne],s=cu(l),i=du(l,i)));s!==-1;){let u=i[ne];if(v0(o,s,u.data)){let h=CT(s,i,e,a,n,d);if(h!==vi)return h}l=i[s+8],l!==Da&&b0(n,i[ne].data[s+8]===d)&&v0(o,s,i)?(a=u,s=cu(l),i=du(l,i)):s=-1}}return r}function CT(t,i,e,n,r,o){let a=i[ne],s=a.data[t+8],l=n==null?fi(s)&&eg:n!=a&&(s.type&3)!==0,d=r&1&&o===s,u=ou(s,a,e,l,d);return u!==null?dl(i,a,u,s,r):vi}function ou(t,i,e,n,r){let o=t.providerIndexes,a=i.data,s=o&1048575,l=t.directiveStart,d=t.directiveEnd,u=o>>20,h=n?s:s+u,_=r?s+u:d;for(let v=h;v<_;v++){let w=a[v];if(v<l&&e===w||v>=l&&w.type===e)return v}if(r){let v=a[l];if(v&&hi(v)&&v.type===e)return l}return null}function dl(t,i,e,n,r){let o=t[e],a=i.data;if(o instanceof Eo){let s=o;if(s.resolving)throw ap("");let l=uu(s.canSeeViewProviders);s.resolving=!0;let d=a[e].type||a[e],u,h=s.injectImpl?Qt(s.injectImpl):null,_=Pp(t,n,0);try{o=t[e]=s.factory(void 0,r,a,t,n),i.firstCreatePass&&e>=n.directiveStart&&dT(e,a[e],i)}finally{h!==null&&Qt(h),uu(l),s.resolving=!1,Lp()}}return o}function wT(t){if(typeof t=="string")return t.charCodeAt(0)||0;let i=t.hasOwnProperty(go)?t[go]:void 0;return typeof i=="number"?i>=0?i&nC:DT:i}function v0(t,i,e){let n=1<<t;return!!(e[i+(t>>iC)]&n)}function b0(t,i){return!(t&2)&&!(t&1&&i)}var xo=class{_tNode;_lView;constructor(i,e){this._tNode=i,this._lView=e}get(i,e,n){return sC(this._tNode,this._lView,i,fo(n),e)}};function DT(){return new xo(Tt(),J())}function $e(t){return gl(()=>{let i=t.prototype.constructor,e=i[Gs]||ng(i),n=Object.prototype,r=Object.getPrototypeOf(t.prototype).constructor;for(;r&&r!==n;){let o=r[Gs]||ng(r);if(o&&o!==e)return o;r=Object.getPrototypeOf(r)}return o=>new o})}function ng(t){return Kh(t)?()=>{let i=ng(Nt(t));return i&&i()}:xr(t)}function xT(t,i,e,n,r){let o=t,a=i;for(;o!==null&&a!==null&&a[ae]&2048&&!ga(a);){let s=lC(o,a,e,n|2,vi);if(s!==vi)return s;let l=o.parent;if(!l){let d=a[pp];if(d){let u=d.get(e,vi,n&-5);if(u!==vi)return u}l=cC(a),a=a[vo]}o=l}return r}function cC(t){let i=t[ne],e=i.type;return e===2?i.declTNode:e===1?t[Zt]:null}function Eu(t){return yT(Tt(),t)}function ET(){return ka(Tt(),J())}function ka(t,i){return new V(Tn(t,i))}var V=(()=>{class t{nativeElement;constructor(e){this.nativeElement=e}static __NG_ELEMENT_ID__=ET}return t})();function dC(t){return t instanceof V?t.nativeElement:t}function MT(){return this._results[Symbol.iterator]()}var Xi=class{_emitDistinctChangesOnly;dirty=!0;_onDirty=void 0;_results=[];_changesDetected=!1;_changes=void 0;length=0;first=void 0;last=void 0;get changes(){return this._changes??=new x}constructor(i=!1){this._emitDistinctChangesOnly=i}get(i){return this._results[i]}map(i){return this._results.map(i)}filter(i){return this._results.filter(i)}find(i){return this._results.find(i)}reduce(i,e){return this._results.reduce(i,e)}forEach(i){this._results.forEach(i)}some(i){return this._results.some(i)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(i,e){this.dirty=!1;let n=ky(i);(this._changesDetected=!Ty(this._results,n,e))&&(this._results=n,this.length=n.length,this.last=n[this.length-1],this.first=n[0])}notifyOnChanges(){this._changes!==void 0&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.next(this)}onDirty(i){this._onDirty=i}setDirty(){this.dirty=!0,this._onDirty?.()}destroy(){this._changes!==void 0&&(this._changes.complete(),this._changes.unsubscribe())}[Symbol.iterator]=MT};function uC(t){return(t.flags&128)===128}var Lg=(function(t){return t[t.OnPush=0]="OnPush",t[t.Eager=1]="Eager",t[t.Default=1]="Default",t})(Lg||{}),mC=new Map,IT=0;function ST(){return IT++}function TT(t){mC.set(t[Qi],t)}function ig(t){mC.delete(t[Qi])}var y0="__ngContext__";function Ea(t,i){Zi(i)?(t[y0]=i[Qi],TT(i)):t[y0]=i}function fC(t){return pC(t[pa])}function hC(t){return pC(t[In])}function pC(t){for(;t!==null&&!qn(t);)t=t[In];return t}var kT;function Vg(t){kT=t}var Fr=new b("",{factory:()=>AT}),AT="ng";var Mu=new b(""),So=new b("",{providedIn:"platform",factory:()=>"unknown"}),_l=new b(""),Aa=new b("",{factory:()=>c(Y).body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});var gC="r";var _C="di";var vC=!1,bC=new b("",{factory:()=>vC});var Iu=new b("");var RT=(t,i,e,n)=>{};function OT(t,i,e,n){RT(t,i,e,n)}function Su(t){return(t.flags&32)===32}var NT=()=>null;function yC(t,i,e=!1){return NT(t,i,e)}function CC(t,i){let e=t.contentQueries;if(e!==null){let n=K(null);try{for(let r=0;r<e.length;r+=2){let o=e[r],a=e[r+1];if(a!==-1){let s=t.data[a];ol(o),s.contentQueries(2,i[a],a)}}}finally{K(n)}}}function rg(t,i,e){ol(0);let n=K(null);try{i(t,e)}finally{K(n)}}function wC(t,i,e){if(_p(i)){let n=K(null);try{let r=i.directiveStart,o=i.directiveEnd;for(let a=r;a<o;a++){let s=t.data[a];if(s.contentQueries){let l=e[a];s.contentQueries(1,l,a)}}}finally{K(n)}}}var Qn=(function(t){return t[t.Emulated=0]="Emulated",t[t.None=2]="None",t[t.ShadowDom=3]="ShadowDom",t[t.ExperimentalIsolatedShadowDom=4]="ExperimentalIsolatedShadowDom",t})(Qn||{});var eu;function FT(){if(eu===void 0&&(eu=null,da.trustedTypes))try{eu=da.trustedTypes.createPolicy("angular",{createHTML:t=>t,createScript:t=>t,createScriptURL:t=>t})}catch{}return eu}function Tu(t){return FT()?.createHTML(t)||t}var Ji=class{changingThisBreaksApplicationSecurity;constructor(i){this.changingThisBreaksApplicationSecurity=i}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${Od})`}},og=class extends Ji{getTypeName(){return"HTML"}},ag=class extends Ji{getTypeName(){return"Style"}},sg=class extends Ji{getTypeName(){return"Script"}},lg=class extends Ji{getTypeName(){return"URL"}},cg=class extends Ji{getTypeName(){return"ResourceURL"}};function Zn(t){return t instanceof Ji?t.changingThisBreaksApplicationSecurity:t}function To(t,i){let e=DC(t);if(e!=null&&e!==i){if(e==="ResourceURL"&&i==="URL")return!0;throw new Error(`Required a safe ${i}, got a ${e} (see ${Od})`)}return e===i}function DC(t){return t instanceof Ji&&t.getTypeName()||null}function Bg(t){return new og(t)}function jg(t){return new ag(t)}function Hg(t){return new sg(t)}function Ug(t){return new lg(t)}function zg(t){return new cg(t)}function PT(t){let i=new ug(t);return LT()?new dg(i):i}var dg=class{inertDocumentHelper;constructor(i){this.inertDocumentHelper=i}getInertBodyElement(i){i="<body><remove></remove>"+i;try{let e=new window.DOMParser().parseFromString(Tu(i),"text/html").body;return e===null?this.inertDocumentHelper.getInertBodyElement(i):(e.firstChild?.remove(),e)}catch{return null}}},ug=class{defaultDoc;inertDocument;constructor(i){this.defaultDoc=i,this.inertDocument=this.defaultDoc.implementation.createHTMLDocument("sanitization-inert")}getInertBodyElement(i){let e=this.inertDocument.createElement("template");return e.innerHTML=Tu(i),e}};function LT(){try{return!!new window.DOMParser().parseFromString(Tu(""),"text/html")}catch{return!1}}var VT=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;function ku(t){return t=String(t),t.match(VT)?t:"unsafe:"+t}function er(t){let i={};for(let e of t.split(","))i[e]=!0;return i}function vl(...t){let i={};for(let e of t)for(let n in e)e.hasOwnProperty(n)&&(i[n]=!0);return i}var xC=er("area,br,col,hr,img,wbr"),EC=er("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),MC=er("rp,rt"),BT=vl(MC,EC),jT=vl(EC,er("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")),HT=vl(MC,er("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")),C0=vl(xC,jT,HT,BT),IC=er("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),UT=er("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,srcset,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"),zT=er("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext"),$T=vl(IC,UT,zT),WT=er("script,style,template");var mg=class{sanitizedSomething=!1;buf=[];sanitizeChildren(i){let e=i.firstChild,n=!0,r=[];for(;e;){if(e.nodeType===Node.ELEMENT_NODE?n=this.startElement(e):e.nodeType===Node.TEXT_NODE?this.chars(e.nodeValue):this.sanitizedSomething=!0,n&&e.firstChild){r.push(e),e=YT(e);continue}for(;e;){e.nodeType===Node.ELEMENT_NODE&&this.endElement(e);let o=qT(e);if(o){e=o;break}e=r.pop()}}return this.buf.join("")}startElement(i){let e=w0(i).toLowerCase();if(!C0.hasOwnProperty(e))return this.sanitizedSomething=!0,!WT.hasOwnProperty(e);this.buf.push("<"),this.buf.push(e);let n=i.attributes;for(let r=0;r<n.length;r++){let o=n.item(r),a=o.name,s=a.toLowerCase();if(!$T.hasOwnProperty(s)){this.sanitizedSomething=!0;continue}let l=o.value;IC[s]&&(l=ku(l)),this.buf.push(" ",a,'="',D0(l),'"')}return this.buf.push(">"),!0}endElement(i){let e=w0(i).toLowerCase();C0.hasOwnProperty(e)&&!xC.hasOwnProperty(e)&&(this.buf.push("</"),this.buf.push(e),this.buf.push(">"))}chars(i){this.buf.push(D0(i))}};function GT(t,i){return(t.compareDocumentPosition(i)&Node.DOCUMENT_POSITION_CONTAINED_BY)!==Node.DOCUMENT_POSITION_CONTAINED_BY}function qT(t){let i=t.nextSibling;if(i&&t!==i.previousSibling)throw SC(i);return i}function YT(t){let i=t.firstChild;if(i&&GT(t,i))throw SC(i);return i}function w0(t){let i=t.nodeName;return typeof i=="string"?i:"FORM"}function SC(t){return new Error(`Failed to sanitize html because the element is clobbered: ${t.outerHTML}`)}var QT=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,ZT=/([^\#-~ |!])/g;function D0(t){return t.replace(/&/g,"&amp;").replace(QT,function(i){let e=i.charCodeAt(0),n=i.charCodeAt(1);return"&#"+((e-55296)*1024+(n-56320)+65536)+";"}).replace(ZT,function(i){return"&#"+i.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}var tu;function $g(t,i){let e=null;try{tu=tu||PT(t);let n=i?String(i):"";e=tu.getInertBodyElement(n);let r=5,o=n;do{if(r===0)throw new Error("Failed to sanitize html because the input is unstable");r--,n=o,o=e.innerHTML,e=tu.getInertBodyElement(n)}while(n!==o);let s=new mg().sanitizeChildren(x0(e)||e);return Tu(s)}finally{if(e){let n=x0(e)||e;for(;n.firstChild;)n.firstChild.remove()}}}function x0(t){return"content"in t&&KT(t)?t.content:null}function KT(t){return t.nodeType===Node.ELEMENT_NODE&&t.nodeName==="TEMPLATE"}function XT(t,i){return t.createText(i)}function JT(t,i,e){t.setValue(i,e)}function TC(t,i,e){return t.createElement(i,e)}function fu(t,i,e,n,r){t.insertBefore(i,e,n,r)}function kC(t,i,e){t.appendChild(i,e)}function E0(t,i,e,n,r){n!==null?fu(t,i,e,n,r):kC(t,i,e)}function AC(t,i,e,n){t.removeChild(null,i,e,n)}function ek(t,i,e){t.setAttribute(i,"style",e)}function tk(t,i,e){e===""?t.removeAttribute(i,"class"):t.setAttribute(i,"class",e)}function RC(t,i,e){let{mergedAttrs:n,classes:r,styles:o}=e;n!==null&&hT(t,i,n),r!==null&&tk(t,i,r),o!==null&&ek(t,i,o)}var Pt=(function(t){return t[t.NONE=0]="NONE",t[t.HTML=1]="HTML",t[t.STYLE=2]="STYLE",t[t.SCRIPT=3]="SCRIPT",t[t.URL=4]="URL",t[t.RESOURCE_URL=5]="RESOURCE_URL",t})(Pt||{});function OC(t){return t instanceof Function?t():t}function nk(t,i,e){let n=t.length;for(;;){let r=t.indexOf(i,e);if(r===-1)return r;if(r===0||t.charCodeAt(r-1)<=32){let o=i.length;if(r+o===n||t.charCodeAt(r+o)<=32)return r}e=r+1}}var NC="ng-template";function ik(t,i,e,n){let r=0;if(n){for(;r<i.length&&typeof i[r]=="string";r+=2)if(i[r]==="class"&&nk(i[r+1].toLowerCase(),e,0)!==-1)return!0}else if(Wg(t))return!1;if(r=i.indexOf(1,r),r>-1){let o;for(;++r<i.length&&typeof(o=i[r])=="string";)if(o.toLowerCase()===e)return!0}return!1}function Wg(t){return t.type===4&&t.value!==NC}function rk(t,i,e){let n=t.type===4&&!e?NC:t.value;return i===n}function ok(t,i,e){let n=4,r=t.attrs,o=r!==null?lk(r):0,a=!1;for(let s=0;s<i.length;s++){let l=i[s];if(typeof l=="number"){if(!a&&!Yn(n)&&!Yn(l))return!1;if(a&&Yn(l))continue;a=!1,n=l|n&1;continue}if(!a)if(n&4){if(n=2|n&1,l!==""&&!rk(t,l,e)||l===""&&i.length===1){if(Yn(n))return!1;a=!0}}else if(n&8){if(r===null||!ik(t,r,l,e)){if(Yn(n))return!1;a=!0}}else{let d=i[++s],u=ak(l,r,Wg(t),e);if(u===-1){if(Yn(n))return!1;a=!0;continue}if(d!==""){let h;if(u>o?h="":h=r[u+1].toLowerCase(),n&2&&d!==h){if(Yn(n))return!1;a=!0}}}}return Yn(n)||a}function Yn(t){return(t&1)===0}function ak(t,i,e,n){if(i===null)return-1;let r=0;if(n||!e){let o=!1;for(;r<i.length;){let a=i[r];if(a===t)return r;if(a===3||a===6)o=!0;else if(a===1||a===2){let s=i[++r];for(;typeof s=="string";)s=i[++r];continue}else{if(a===4)break;if(a===0){r+=4;continue}}r+=o?1:2}return-1}else return ck(i,t)}function FC(t,i,e=!1){for(let n=0;n<i.length;n++)if(ok(t,i[n],e))return!0;return!1}function sk(t){let i=t.attrs;if(i!=null){let e=i.indexOf(5);if((e&1)===0)return i[e+1]}return null}function lk(t){for(let i=0;i<t.length;i++){let e=t[i];if(eC(e))return i}return t.length}function ck(t,i){let e=t.indexOf(4);if(e>-1)for(e++;e<t.length;){let n=t[e];if(typeof n=="number")return-1;if(n===i)return e;e++}return-1}function dk(t,i){e:for(let e=0;e<i.length;e++){let n=i[e];if(t.length===n.length){for(let r=0;r<t.length;r++)if(t[r]!==n[r])continue e;return!0}}return!1}function M0(t,i){return t?":not("+i.trim()+")":i}function uk(t){let i=t[0],e=1,n=2,r="",o=!1;for(;e<t.length;){let a=t[e];if(typeof a=="string")if(n&2){let s=t[++e];r+="["+a+(s.length>0?'="'+s+'"':"")+"]"}else n&8?r+="."+a:n&4&&(r+=" "+a);else r!==""&&!Yn(a)&&(i+=M0(o,r),r=""),n=a,o=o||!Yn(n);e++}return r!==""&&(i+=M0(o,r)),i}function mk(t){return t.map(uk).join(",")}function fk(t){let i=[],e=[],n=1,r=2;for(;n<t.length;){let o=t[n];if(typeof o=="string")r===2?o!==""&&i.push(o,t[++n]):r===8&&e.push(o);else{if(!Yn(r))break;r=o}n++}return e.length&&i.push(1,...e),i}var Lt={};function Gg(t,i,e,n,r,o,a,s,l,d,u){let h=Xe+n,_=h+r,v=hk(h,_),w=typeof d=="function"?d():d;return v[ne]={type:t,blueprint:v,template:e,queries:null,viewQuery:s,declTNode:i,data:v.slice().fill(null,h),bindingStartIndex:h,expandoStartIndex:_,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof o=="function"?o():o,pipeRegistry:typeof a=="function"?a():a,firstChild:null,schemas:l,consts:w,incompleteFirstPass:!1,ssrId:u}}function hk(t,i){let e=[];for(let n=0;n<i;n++)e.push(n<t?null:Lt);return e}function pk(t){let i=t.tView;return i===null||i.incompleteFirstPass?t.tView=Gg(1,null,t.template,t.decls,t.vars,t.directiveDefs,t.pipeDefs,t.viewQuery,t.schemas,t.consts,t.id):i}function qg(t,i,e,n,r,o,a,s,l,d,u){let h=i.blueprint.slice();return h[Gn]=r,h[ae]=n|4|128|8|64|1024,(d!==null||t&&t[ae]&2048)&&(h[ae]|=2048),wp(h),h[vt]=h[vo]=t,h[st]=e,h[ui]=a||t&&t[ui],h[Be]=s||t&&t[Be],h[Yi]=l||t&&t[Yi]||null,h[Zt]=o,h[Qi]=ST(),h[_o]=u,h[pp]=d,h[Kt]=i.type==2?t[Kt]:h,h}function gk(t,i,e){let n=Tn(i,t),r=pk(e),o=t[ui].rendererFactory,a=Yg(t,qg(t,r,null,PC(e),n,i,null,o.createRenderer(n,e),null,null,null));return t[i.index]=a}function PC(t){let i=16;return t.signals?i=4096:t.onPush&&(i=64),i}function LC(t,i,e,n){if(e===0)return-1;let r=i.length;for(let o=0;o<e;o++)i.push(n),t.blueprint.push(n),t.data.push(null);return r}function Yg(t,i){return t[pa]?t[hp][In]=i:t[pa]=i,t[hp]=i,i}function p(t=1){VC(ze(),J(),gi()+t,!1)}function VC(t,i,e,n){if(!n)if((i[ae]&3)===3){let o=t.preOrderCheckHooks;o!==null&&iu(i,o,e)}else{let o=t.preOrderHooks;o!==null&&ru(i,o,0,e)}Rr(e)}var Au=(function(t){return t[t.None=0]="None",t[t.SignalBased=1]="SignalBased",t[t.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",t})(Au||{});function fg(t,i,e,n){let r=K(null);try{let[o,a,s]=t.inputs[e],l=null;(a&Au.SignalBased)!==0&&(l=i[o][ut]),l!==null&&l.transformFn!==void 0?n=l.transformFn(n):s!==null&&(n=s.call(i,n)),t.setInput!==null?t.setInput(i,l,n,e,o):Y0(i,l,o,n)}finally{K(r)}}var bi=(function(t){return t[t.Important=1]="Important",t[t.DashCase=2]="DashCase",t})(bi||{}),_k;function Qg(t,i){return _k(t,i)}var xW=typeof document<"u"&&typeof document?.documentElement?.getAnimations=="function";var hg=new WeakMap,sl=new WeakSet;function vk(t,i){let e=hg.get(t);if(!e||e.length===0)return;let n=i.parentNode,r=i.previousSibling;for(let o=e.length-1;o>=0;o--){let a=e[o],s=a.parentNode;a===i?(e.splice(o,1),sl.add(a),a.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}}))):(r&&a===r||s&&n&&s!==n)&&(e.splice(o,1),a.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}})),a.parentNode?.removeChild(a))}}function bk(t,i){let e=hg.get(t);e?e.includes(i)||e.push(i):hg.set(t,[i])}var Mo=new Set,Ru=(function(t){return t[t.CHANGE_DETECTION=0]="CHANGE_DETECTION",t[t.AFTER_NEXT_RENDER=1]="AFTER_NEXT_RENDER",t})(Ru||{}),Kn=new b(""),I0=new Set;function Ci(t){I0.has(t)||(I0.add(t),performance?.mark?.("mark_feature_usage",{detail:{feature:t}}))}var Ou=(()=>{class t{impl=null;execute(){this.impl?.execute()}static \u0275prov=y({token:t,providedIn:"root",factory:()=>new t})}return t})(),Zg=[0,1,2,3],Kg=(()=>{class t{ngZone=c(L);scheduler=c(li);errorHandler=c($t,{optional:!0});sequences=new Set;deferredRegistrations=new Set;executing=!1;constructor(){c(Kn,{optional:!0})}execute(){let e=this.sequences.size>0;e&&Ne(De.AfterRenderHooksStart),this.executing=!0;for(let n of Zg)for(let r of this.sequences)if(!(r.erroredOrDestroyed||!r.hooks[n]))try{r.pipelinedValue=this.ngZone.runOutsideAngular(()=>this.maybeTrace(()=>{let o=r.hooks[n];return o(r.pipelinedValue)},r.snapshot))}catch(o){r.erroredOrDestroyed=!0,this.errorHandler?.handleError(o)}this.executing=!1;for(let n of this.sequences)n.afterRun(),n.once&&(this.sequences.delete(n),n.destroy());for(let n of this.deferredRegistrations)this.sequences.add(n);this.deferredRegistrations.size>0&&this.scheduler.notify(7),this.deferredRegistrations.clear(),e&&Ne(De.AfterRenderHooksEnd)}register(e){let{view:n}=e;n!==void 0?((n[yo]??=[]).push(e),Do(n),n[ae]|=8192):this.executing?this.deferredRegistrations.add(e):this.addSequence(e)}addSequence(e){this.sequences.add(e),this.scheduler.notify(7)}unregister(e){this.executing&&this.sequences.has(e)?(e.erroredOrDestroyed=!0,e.pipelinedValue=void 0,e.once=!0):(this.sequences.delete(e),this.deferredRegistrations.delete(e))}maybeTrace(e,n){return n?n.run(Ru.AFTER_NEXT_RENDER,e):e()}static \u0275prov=y({token:t,providedIn:"root",factory:()=>new t})}return t})(),ul=class{impl;hooks;view;once;snapshot;erroredOrDestroyed=!1;pipelinedValue=void 0;unregisterOnDestroy;constructor(i,e,n,r,o,a=null){this.impl=i,this.hooks=e,this.view=n,this.once=r,this.snapshot=a,this.unregisterOnDestroy=o?.onDestroy(()=>this.destroy())}afterRun(){this.erroredOrDestroyed=!1,this.pipelinedValue=void 0,this.snapshot?.dispose(),this.snapshot=null}destroy(){this.impl.unregister(this),this.unregisterOnDestroy?.();let i=this.view?.[yo];i&&(this.view[yo]=i.filter(e=>e!==this))}};function We(t,i){let e=i?.injector??c($);return Ci("NgAfterNextRender"),Ck(t,e,i,!0)}function yk(t){return t instanceof Function?[void 0,void 0,t,void 0]:[t.earlyRead,t.write,t.mixedReadWrite,t.read]}function Ck(t,i,e,n){let r=i.get(Ou);r.impl??=i.get(Kg);let o=i.get(Kn,null,{optional:!0}),a=e?.manualCleanup!==!0?i.get(Ft):null,s=i.get(ya,null,{optional:!0}),l=new ul(r.impl,yk(t),s?.view,n,a,o?.snapshot(null));return r.impl.register(l),l}var BC=new b("",{factory:()=>({queue:new Set,isScheduled:!1,scheduler:null,injector:c(Oe)})});function jC(t,i,e){let n=t.get(BC);if(Array.isArray(i))for(let r of i)n.queue.add(r),e?.detachedLeaveAnimationFns?.push(r);else n.queue.add(i),e?.detachedLeaveAnimationFns?.push(i);n.scheduler&&n.scheduler(t)}function wk(t,i){let e=t.get(BC);if(i.detachedLeaveAnimationFns){for(let n of i.detachedLeaveAnimationFns)e.queue.delete(n);i.detachedLeaveAnimationFns=void 0}}function Dk(t,i){for(let[e,n]of i)jC(t,n.animateFns)}function S0(t,i,e,n){let r=t?.[kr]?.enter;i!==null&&r&&r.has(e.index)&&Dk(n,r)}function wa(t,i,e,n,r,o,a,s){if(r!=null){let l,d=!1;qn(r)?l=r:Zi(r)&&(d=!0,r=r[Gn]);let u=Sn(r);t===0&&n!==null?(S0(s,n,o,e),a==null?kC(i,n,u):fu(i,n,u,a||null,!0)):t===1&&n!==null?(S0(s,n,o,e),fu(i,n,u,a||null,!0),vk(o,u)):t===2?(s?.[kr]?.leave?.has(o.index)&&bk(o,u),sl.delete(u),T0(s,o,e,h=>{if(sl.has(u)){sl.delete(u);return}AC(i,u,d,h)})):t===3&&(sl.delete(u),T0(s,o,e,()=>{i.destroyNode(u)})),l!=null&&Nk(i,t,e,l,o,n,a)}}function xk(t,i){HC(t,i),i[Gn]=null,i[Zt]=null}function Ek(t,i,e,n,r,o){n[Gn]=r,n[Zt]=i,Fu(t,n,e,1,r,o)}function HC(t,i){i[ui].changeDetectionScheduler?.notify(9),Fu(t,i,i[Be],2,null,null)}function Mk(t){let i=t[pa];if(!i)return Gp(t[ne],t);for(;i;){let e=null;if(Zi(i))e=i[pa];else{let n=i[it];n&&(e=n)}if(!e){for(;i&&!i[In]&&i!==t;)Zi(i)&&Gp(i[ne],i),i=i[vt];i===null&&(i=t),Zi(i)&&Gp(i[ne],i),e=i&&i[In]}i=e}}function Xg(t,i){let e=t[Co],n=e.indexOf(i);e.splice(n,1)}function Nu(t,i){if(wo(i))return;let e=i[Be];e.destroyNode&&Fu(t,i,e,3,null,null),Mk(i)}function Gp(t,i){if(wo(i))return;let e=K(null);try{i[ae]&=-129,i[ae]|=256,i[hn]&&vr(i[hn]),Tk(t,i),Sk(t,i),i[ne].type===1&&i[Be].destroy();let n=i[Tr];if(n!==null&&qn(i[vt])){n!==i[vt]&&Xg(n,i);let r=i[mi];r!==null&&r.detachView(t)}ig(i)}finally{K(e)}}function T0(t,i,e,n){let r=t?.[kr];if(r==null||r.leave==null||!r.leave.has(i.index))return n(!1);t&&Mo.add(t[Qi]),jC(e,()=>{if(r.leave&&r.leave.has(i.index)){let a=r.leave.get(i.index),s=[];if(a){for(let l=0;l<a.animateFns.length;l++){let d=a.animateFns[l],{promise:u}=d();s.push(u)}r.detachedLeaveAnimationFns=void 0}r.running=Promise.allSettled(s),Ik(t,n)}else t&&Mo.delete(t[Qi]),n(!1)},r)}function Ik(t,i){let e=t[kr]?.running;if(e){e.then(()=>{t[kr].running=void 0,Mo.delete(t[Qi]),i(!0)});return}i(!1)}function Sk(t,i){let e=t.cleanup,n=i[ha];if(e!==null)for(let a=0;a<e.length-1;a+=2)if(typeof e[a]=="string"){let s=e[a+3];s>=0?n[s]():n[-s].unsubscribe(),a+=2}else{let s=n[e[a+1]];e[a].call(s)}n!==null&&(i[ha]=null);let r=i[qi];if(r!==null){i[qi]=null;for(let a=0;a<r.length;a++){let s=r[a];s()}}let o=i[Er];if(o!==null){i[Er]=null;for(let a of o)a.destroy()}}function Tk(t,i){let e;if(t!=null&&(e=t.destroyHooks)!=null)for(let n=0;n<e.length;n+=2){let r=i[e[n]];if(!(r instanceof Eo)){let o=e[n+1];if(Array.isArray(o))for(let a=0;a<o.length;a+=2){let s=r[o[a]],l=o[a+1];Ne(De.LifecycleHookStart,s,l);try{l.call(s)}finally{Ne(De.LifecycleHookEnd,s,l)}}else{Ne(De.LifecycleHookStart,r,o);try{o.call(r)}finally{Ne(De.LifecycleHookEnd,r,o)}}}}}function UC(t,i,e){return kk(t,i.parent,e)}function kk(t,i,e){let n=i;for(;n!==null&&n.type&168;)i=n,n=i.parent;if(n===null)return e[Gn];if(fi(n)){let{encapsulation:r}=t.data[n.directiveStart+n.componentOffset];if(r===Qn.None||r===Qn.Emulated)return null}return Tn(n,e)}function zC(t,i,e){return Rk(t,i,e)}function Ak(t,i,e){return t.type&40?Tn(t,e):null}var Rk=Ak,k0;function Jg(t,i,e,n){let r=UC(t,n,i),o=i[Be],a=n.parent||i[Zt],s=zC(a,n,i);if(r!=null)if(Array.isArray(e))for(let l=0;l<e.length;l++)E0(o,r,e[l],s,!1);else E0(o,r,e,s,!1);k0!==void 0&&k0(o,n,i,e,r)}function ll(t,i){if(i!==null){let e=i.type;if(e&3)return Tn(i,t);if(e&4)return pg(-1,t[i.index]);if(e&8){let n=i.child;if(n!==null)return ll(t,n);{let r=t[i.index];return qn(r)?pg(-1,r):Sn(r)}}else{if(e&128)return ll(t,i.next);if(e&32)return Qg(i,t)()||Sn(t[i.index]);{let n=$C(t,i);if(n!==null){if(Array.isArray(n))return n[0];let r=Mr(t[Kt]);return ll(r,n)}else return ll(t,i.next)}}}return null}function $C(t,i){if(i!==null){let n=t[Kt][Zt],r=i.projection;return n.projection[r]}return null}function pg(t,i){let e=it+t+1;if(e<i.length){let n=i[e],r=n[ne].firstChild;if(r!==null)return ll(n,r)}return i[Ar]}function e_(t,i,e,n,r,o,a){for(;e!=null;){let s=n[Yi];if(e.type===128){e=e.next;continue}let l=n[e.index],d=e.type;if(a&&i===0&&(l&&Ea(Sn(l),n),e.flags|=2),!Su(e))if(d&8)e_(t,i,e.child,n,r,o,!1),wa(i,t,s,r,l,e,o,n);else if(d&32){let u=Qg(e,n),h;for(;h=u();)wa(i,t,s,r,h,e,o,n);wa(i,t,s,r,l,e,o,n)}else d&16?WC(t,i,n,e,r,o):wa(i,t,s,r,l,e,o,n);e=a?e.projectionNext:e.next}}function Fu(t,i,e,n,r,o){e_(e,n,t.firstChild,i,r,o,!1)}function Ok(t,i,e){let n=i[Be],r=UC(t,e,i),o=e.parent||i[Zt],a=zC(o,e,i);WC(n,0,i,e,r,a)}function WC(t,i,e,n,r,o){let a=e[Kt],l=a[Zt].projection[n.projection];if(Array.isArray(l))for(let d=0;d<l.length;d++){let u=l[d];wa(i,t,e[Yi],r,u,n,o,e)}else{let d=l,u=a[vt];uC(n)&&(d.flags|=128),e_(t,i,d,u,r,o,!0)}}function Nk(t,i,e,n,r,o,a){let s=n[Ar],l=Sn(n);s!==l&&wa(i,t,e,o,s,r,a);for(let d=it;d<n.length;d++){let u=n[d];Fu(u[ne],u,t,i,o,s)}}function Fk(t,i,e,n,r){if(i)r?t.addClass(e,n):t.removeClass(e,n);else{let o=n.indexOf("-")===-1?void 0:bi.DashCase;r==null?t.removeStyle(e,n,o):(typeof r=="string"&&r.endsWith("!important")&&(r=r.slice(0,-10),o|=bi.Important),t.setStyle(e,n,r,o))}}function GC(t,i,e,n,r){let o=gi(),a=n&2;try{Rr(-1),a&&i.length>Xe&&VC(t,i,Xe,!1);let s=a?De.TemplateUpdateStart:De.TemplateCreateStart;Ne(s,r,e),e(n,r)}finally{Rr(o);let s=a?De.TemplateUpdateEnd:De.TemplateCreateEnd;Ne(s,r,e)}}function t_(t,i,e){jk(t,i,e),(e.flags&64)===64&&Hk(t,i,e)}function Pu(t,i,e=Tn){let n=i.localNames;if(n!==null){let r=i.index+1;for(let o=0;o<n.length;o+=2){let a=n[o+1],s=a===-1?e(i,t):t[a];t[r++]=s}}}function Pk(t,i,e,n){let o=n.get(bC,vC)||e===Qn.ShadowDom||e===Qn.ExperimentalIsolatedShadowDom,a=t.selectRootElement(i,o);return Lk(a),a}function Lk(t){Vk(t)}var Vk=()=>null;function Bk(t){return t==="class"?"className":t==="for"?"htmlFor":t==="formaction"?"formAction":t==="innerHtml"?"innerHTML":t==="readonly"?"readOnly":t==="tabindex"?"tabIndex":t}function qC(t,i,e,n,r,o){let a=i[ne];if(Lu(t,a,i,e,n)){fi(t)&&QC(i,t.index);return}t.type&3&&(e=Bk(e)),YC(t,i,e,n,r,o)}function YC(t,i,e,n,r,o){if(t.type&3){let a=Tn(t,i);n=o!=null?o(n,t.value||"",e):n,r.setProperty(a,e,n)}else t.type&12}function QC(t,i){let e=kn(i,t);e[ae]&16||(e[ae]|=64)}function jk(t,i,e){let n=e.directiveStart,r=e.directiveEnd;fi(e)&&gk(i,e,t.data[n+e.componentOffset]),t.firstCreatePass||mu(e,i);let o=e.initialInputs;for(let a=n;a<r;a++){let s=t.data[a],l=dl(i,t,a,e);if(Ea(l,i),o!==null&&$k(i,a-n,l,s,e,o),hi(s)){let d=kn(e.index,i);d[st]=dl(i,t,a,e)}}}function Hk(t,i,e){let n=e.directiveStart,r=e.directiveEnd,o=e.index,a=e0();try{Rr(o);for(let s=n;s<r;s++){let l=t.data[s],d=i[s];Gd(s),(l.hostBindings!==null||l.hostVars!==0||l.hostAttrs!==null)&&Uk(l,d)}}finally{Rr(-1),Gd(a)}}function Uk(t,i){t.hostBindings!==null&&t.hostBindings(1,i)}function ZC(t,i){let e=t.directiveRegistry,n=null;if(e)for(let r=0;r<e.length;r++){let o=e[r];FC(i,o.selectors,!1)&&(n??=[],hi(o)?n.unshift(o):n.push(o))}return n}function zk(t,i,e,n,r,o){let a=Tn(t,i);KC(i[Be],a,o,t.value,e,n,r)}function KC(t,i,e,n,r,o,a){if(o==null)t.removeAttribute(i,r,e);else{let s=a==null?ua(o):a(o,n||"",r);t.setAttribute(i,r,s,e)}}function $k(t,i,e,n,r,o){let a=o[i];if(a!==null)for(let s=0;s<a.length;s+=2){let l=a[s],d=a[s+1];fg(n,e,l,d)}}function XC(t,i,e,n,r){let o=Xe+e,a=i[ne],s=r(a,i,t,n,e);i[o]=s,_a(t,!0);let l=t.type===2;return l?(RC(i[Be],s,t),(Gy()===0||il(t))&&Ea(s,i),qy()):Ea(s,i),Zd()&&(!l||!Su(t))&&Jg(a,i,s,t),t}function JC(t){let i=t;return Op()?Np():(i=i.parent,_a(i,!1)),i}function Wk(t,i){let e=t[Yi];if(!e)return;let n;try{n=e.get(gn,null)}catch{n=null}n?.(i)}function Lu(t,i,e,n,r){let o=t.inputs?.[n],a=t.hostDirectiveInputs?.[n],s=!1;if(a)for(let l=0;l<a.length;l+=2){let d=a[l],u=a[l+1],h=i.data[d];fg(h,e[d],u,r),s=!0}if(o)for(let l of o){let d=e[l],u=i.data[l];fg(u,d,n,r),s=!0}return s}function Gk(t,i){let e=kn(i,t),n=e[ne];qk(n,e);let r=e[Gn];r!==null&&e[_o]===null&&(e[_o]=yC(r,e[Yi])),Ne(De.ComponentStart);try{n_(n,e,e[st])}finally{Ne(De.ComponentEnd,e[st])}}function qk(t,i){for(let e=i.length;e<t.blueprint.length;e++)i.push(t.blueprint[e])}function n_(t,i,e){Yd(i);try{let n=t.viewQuery;n!==null&&rg(1,n,e);let r=t.template;r!==null&&GC(t,i,r,1,e),t.firstCreatePass&&(t.firstCreatePass=!1),i[mi]?.finishViewCreation(t),t.staticContentQueries&&CC(t,i),t.staticViewQueries&&rg(2,t.viewQuery,e);let o=t.components;o!==null&&Yk(i,o)}catch(n){throw t.firstCreatePass&&(t.incompleteFirstPass=!0,t.firstCreatePass=!1),n}finally{i[ae]&=-5,Qd()}}function Yk(t,i){for(let e=0;e<i.length;e++)Gk(t,i[e])}function bl(t,i,e,n){let r=K(null);try{let o=i.tView,s=t[ae]&4096?4096:16,l=qg(t,o,e,s,null,i,null,null,n?.injector??null,n?.embeddedViewInjector??null,n?.dehydratedView??null),d=t[i.index];l[Tr]=d;let u=t[mi];return u!==null&&(l[mi]=u.createEmbeddedView(o)),n_(o,l,e),l}finally{K(r)}}function Ma(t,i){return!i||i.firstChild===null||uC(t)}function ml(t,i,e,n,r=!1){for(;e!==null;){if(e.type===128){e=r?e.projectionNext:e.next;continue}let o=i[e.index];o!==null&&n.push(Sn(o)),qn(o)&&ew(o,n);let a=e.type;if(a&8)ml(t,i,e.child,n);else if(a&32){let s=Qg(e,i),l;for(;l=s();)n.push(l)}else if(a&16){let s=$C(i,e);if(Array.isArray(s))n.push(...s);else{let l=Mr(i[Kt]);ml(l[ne],l,s,n,!0)}}e=r?e.projectionNext:e.next}return n}function ew(t,i){for(let e=it;e<t.length;e++){let n=t[e],r=n[ne].firstChild;r!==null&&ml(n[ne],n,r,i)}t[Ar]!==t[Gn]&&i.push(t[Ar])}function tw(t){if(t[yo]!==null){for(let i of t[yo])i.impl.addSequence(i);t[yo].length=0}}var nw=[];function Qk(t){return t[hn]??Zk(t)}function Zk(t){let i=nw.pop()??Object.create(Xk);return i.lView=t,i}function Kk(t){t.lView[hn]!==t&&(t.lView=null,nw.push(t))}var Xk=X(C({},to),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:t=>{Do(t.lView)},consumerOnSignalRead(){this.lView[hn]=this}});function Jk(t){let i=t[hn]??Object.create(eA);return i.lView=t,i}var eA=X(C({},to),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:t=>{let i=Mr(t.lView);for(;i&&!iw(i[ne]);)i=Mr(i);i&&Dp(i)},consumerOnSignalRead(){this.lView[hn]=this}});function iw(t){return t.type!==2}function rw(t){if(t[Er]===null)return;let i=!0;for(;i;){let e=!1;for(let n of t[Er])n.dirty&&(e=!0,n.zone===null||Zone.current===n.zone?n.run():n.zone.run(()=>n.run()));i=e&&!!(t[ae]&8192)}}var tA=100;function ow(t,i=0){let n=t[ui].rendererFactory,r=!1;r||n.begin?.();try{nA(t,i)}finally{r||n.end?.()}}function nA(t,i){let e=Fp();try{Ys(!0),gg(t,i);let n=0;for(;rl(t);){if(n===tA)throw new N(103,!1);n++,gg(t,1)}}finally{Ys(e)}}function iA(t,i,e,n){if(wo(i))return;let r=i[ae],o=!1,a=!1;Yd(i);let s=!0,l=null,d=null;o||(iw(t)?(d=Qk(i),l=_r(d)):qc()===null?(s=!1,d=Jk(i),l=_r(d)):i[hn]&&(vr(i[hn]),i[hn]=null));try{wp(i),Ky(t.bindingStartIndex),e!==null&&GC(t,i,e,2,n);let u=(r&3)===3;if(!o)if(u){let v=t.preOrderCheckHooks;v!==null&&iu(i,v,null)}else{let v=t.preOrderHooks;v!==null&&ru(i,v,0,null),$p(i,0)}if(a||rA(i),rw(i),aw(i,0),t.contentQueries!==null&&CC(t,i),!o)if(u){let v=t.contentCheckHooks;v!==null&&iu(i,v)}else{let v=t.contentHooks;v!==null&&ru(i,v,1),$p(i,1)}aA(t,i);let h=t.components;h!==null&&lw(i,h,0);let _=t.viewQuery;if(_!==null&&rg(2,_,n),!o)if(u){let v=t.viewCheckHooks;v!==null&&iu(i,v)}else{let v=t.viewHooks;v!==null&&ru(i,v,2),$p(i,2)}if(t.firstUpdatePass===!0&&(t.firstUpdatePass=!1),i[jd]){for(let v of i[jd])v();i[jd]=null}o||(tw(i),i[ae]&=-73)}catch(u){throw o||Do(i),u}finally{d!==null&&(no(d,l),s&&Kk(d)),Qd()}}function aw(t,i){for(let e=fC(t);e!==null;e=hC(e))for(let n=it;n<e.length;n++){let r=e[n];sw(r,i)}}function rA(t){for(let i=fC(t);i!==null;i=hC(i)){if(!(i[ae]&2))continue;let e=i[Co];for(let n=0;n<e.length;n++){let r=e[n];Dp(r)}}}function oA(t,i,e){Ne(De.ComponentStart);let n=kn(i,t);try{sw(n,e)}finally{Ne(De.ComponentEnd,n[st])}}function sw(t,i){Ud(t)&&gg(t,i)}function gg(t,i){let n=t[ne],r=t[ae],o=t[hn],a=!!(i===0&&r&16);if(a||=!!(r&64&&i===0),a||=!!(r&1024),a||=!!(o?.dirty&&ea(o)),a||=!1,o&&(o.dirty=!1),t[ae]&=-9217,a)iA(n,t,n.template,t[st]);else if(r&8192){let s=K(null);try{rw(t),aw(t,1);let l=n.components;l!==null&&lw(t,l,1),tw(t)}finally{K(s)}}}function lw(t,i,e){for(let n=0;n<i.length;n++)oA(t,i[n],e)}function aA(t,i){let e=t.hostBindingOpCodes;if(e!==null)try{for(let n=0;n<e.length;n++){let r=e[n];if(r<0)Rr(~r);else{let o=r,a=e[++n],s=e[++n];Jy(a,o);let l=i[o];Ne(De.HostBindingsUpdateStart,l);try{s(2,l)}finally{Ne(De.HostBindingsUpdateEnd,l)}}}}finally{Rr(-1)}}function i_(t,i){let e=Fp()?64:1088;for(t[ui].changeDetectionScheduler?.notify(i);t;){t[ae]|=e;let n=Mr(t);if(ga(t)&&!n)return t;t=n}return null}function cw(t,i,e,n){return[t,!0,0,i,null,n,null,e,null,null]}function dw(t,i){let e=it+i;if(e<t.length)return t[e]}function yl(t,i,e,n=!0){let r=i[ne];if(sA(r,i,t,e),n){let a=pg(e,t),s=i[Be],l=s.parentNode(t[Ar]);l!==null&&Ek(r,t[Zt],s,i,l,a)}let o=i[_o];o!==null&&o.firstChild!==null&&(o.firstChild=null)}function uw(t,i){let e=fl(t,i);return e!==void 0&&Nu(e[ne],e),e}function fl(t,i){if(t.length<=it)return;let e=it+i,n=t[e];if(n){let r=n[Tr];r!==null&&r!==t&&Xg(r,n),i>0&&(t[e-1][In]=n[In]);let o=Js(t,it+i);xk(n[ne],n);let a=o[mi];a!==null&&a.detachView(o[ne]),n[vt]=null,n[In]=null,n[ae]&=-129}return n}function sA(t,i,e,n){let r=it+n,o=e.length;n>0&&(e[r-1][In]=i),n<o-it?(i[In]=e[r],lp(e,it+n,i)):(e.push(i),i[In]=null),i[vt]=e;let a=i[Tr];a!==null&&e!==a&&mw(a,i);let s=i[mi];s!==null&&s.insertView(t),zd(i),i[ae]|=128}function mw(t,i){let e=t[Co],n=i[vt];if(Zi(n))t[ae]|=2;else{let r=n[vt][Kt];i[Kt]!==r&&(t[ae]|=2)}e===null?t[Co]=[i]:e.push(i)}var Or=class{_lView;_cdRefInjectingView;_appRef=null;_attachedToViewContainer=!1;exhaustive;get rootNodes(){let i=this._lView,e=i[ne];return ml(e,i,e.firstChild,[])}constructor(i,e){this._lView=i,this._cdRefInjectingView=e}get context(){return this._lView[st]}set context(i){this._lView[st]=i}get destroyed(){return wo(this._lView)}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let i=this._lView[vt];if(qn(i)){let e=i[nl],n=e?e.indexOf(this):-1;n>-1&&(fl(i,n),Js(e,n))}this._attachedToViewContainer=!1}Nu(this._lView[ne],this._lView)}onDestroy(i){xp(this._lView,i)}markForCheck(){i_(this._cdRefInjectingView||this._lView,4)}detach(){this._lView[ae]&=-129}reattach(){zd(this._lView),this._lView[ae]|=128}detectChanges(){this._lView[ae]|=1024,ow(this._lView)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new N(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null;let i=ga(this._lView),e=this._lView[Tr];e!==null&&!i&&Xg(e,this._lView),HC(this._lView[ne],this._lView)}attachToAppRef(i){if(this._attachedToViewContainer)throw new N(902,!1);this._appRef=i;let e=ga(this._lView),n=this._lView[Tr];n!==null&&!e&&mw(n,this._lView),zd(this._lView)}};var ht=(()=>{class t{_declarationLView;_declarationTContainer;elementRef;static __NG_ELEMENT_ID__=lA;constructor(e,n,r){this._declarationLView=e,this._declarationTContainer=n,this.elementRef=r}get ssrId(){return this._declarationTContainer.tView?.ssrId||null}createEmbeddedView(e,n){return this.createEmbeddedViewImpl(e,n)}createEmbeddedViewImpl(e,n,r){let o=bl(this._declarationLView,this._declarationTContainer,e,{embeddedViewInjector:n,dehydratedView:r});return new Or(o)}}return t})();function lA(){return Vu(Tt(),J())}function Vu(t,i){return t.type&4?new ht(i,t,ka(t,i)):null}function Ra(t,i,e,n,r){let o=t.data[i];if(o===null)o=cA(t,i,e,n,r),Xy()&&(o.flags|=32);else if(o.type&64){o.type=e,o.value=n,o.attrs=r;let a=Yy();o.injectorIndex=a===null?-1:a.injectorIndex}return _a(o,!0),o}function cA(t,i,e,n,r){let o=Rp(),a=Op(),s=a?o:o&&o.parent,l=t.data[i]=uA(t,s,e,i,n,r);return dA(t,l,o,a),l}function dA(t,i,e,n){t.firstChild===null&&(t.firstChild=i),e!==null&&(n?e.child==null&&i.parent!==null&&(e.child=i):e.next===null&&(e.next=i,i.prev=e))}function uA(t,i,e,n,r,o){let a=i?i.injectorIndex:-1,s=0;return Tp()&&(s|=128),{type:e,index:n,insertBeforeIndex:null,injectorIndex:a,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,controlDirectiveIndex:-1,customControlIndex:-1,propertyBindings:null,flags:s,providerIndexes:0,value:r,attrs:o,mergedAttrs:null,localNames:null,initialInputs:null,inputs:null,hostDirectiveInputs:null,outputs:null,hostDirectiveOutputs:null,directiveToIndex:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:i,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}function mA(t){let i=t[gp]??[],n=t[vt][Be],r=[];for(let o of i)o.data[_C]!==void 0?r.push(o):fA(o,n);t[gp]=r}function fA(t,i){let e=0,n=t.firstChild;if(n){let r=t.data[gC];for(;e<r;){let o=n.nextSibling;AC(i,n,!1),n=o,e++}}}var hA=()=>null,pA=()=>null;function hu(t,i){return hA(t,i)}function fw(t,i,e){return pA(t,i,e)}var hw=class{},Bu=class{},_g=class{resolveComponentFactory(i){throw new N(917,!1)}},Cl=class{static NULL=new _g},pt=class{},Se=(()=>{class t{destroyNode=null;static __NG_ELEMENT_ID__=()=>gA()}return t})();function gA(){let t=J(),i=Tt(),e=kn(i.index,t);return(Zi(e)?e:t)[Be]}var pw=(()=>{class t{static \u0275prov=y({token:t,providedIn:"root",factory:()=>null})}return t})();var au={},vg=class{injector;parentInjector;constructor(i,e){this.injector=i,this.parentInjector=e}get(i,e,n){let r=this.injector.get(i,au,n);return r!==au||e===au?r:this.parentInjector.get(i,e,n)}};function pu(t,i,e){let n=e?t.styles:null,r=e?t.classes:null,o=0;if(i!==null)for(let a=0;a<i.length;a++){let s=i[a];if(typeof s=="number")o=s;else if(o==1)r=Nd(r,s);else if(o==2){let l=s,d=i[++a];n=Nd(n,l+": "+d+";")}}e?t.styles=n:t.stylesWithoutHost=n,e?t.classes=r:t.classesWithoutHost=r}function Ce(t,i=0){let e=J();if(e===null)return z(t,i);let n=Tt();return sC(n,e,Nt(t),i)}function wl(){let t="invalid";throw new Error(t)}function gw(t,i,e,n,r){let o=n===null?null:{"":-1},a=r(t,e);if(a!==null){let s=a,l=null,d=null;for(let u of a)if(u.resolveHostDirectives!==null){[s,l,d]=u.resolveHostDirectives(a);break}bA(t,i,e,s,o,l,d)}o!==null&&n!==null&&_A(e,n,o)}function _A(t,i,e){let n=t.localNames=[];for(let r=0;r<i.length;r+=2){let o=e[i[r+1]];if(o==null)throw new N(-301,!1);n.push(i[r],o)}}function vA(t,i,e){i.componentOffset=e,(t.components??=[]).push(i.index)}function bA(t,i,e,n,r,o,a){let s=n.length,l=null;for(let _=0;_<s;_++){let v=n[_];l===null&&hi(v)&&(l=v,vA(t,e,_)),tg(mu(e,i),t,v.type)}EA(e,t.data.length,s),l?.viewProvidersResolver&&l.viewProvidersResolver(l);for(let _=0;_<s;_++){let v=n[_];v.providersResolver&&v.providersResolver(v)}let d=!1,u=!1,h=LC(t,i,s,null);s>0&&(e.directiveToIndex=new Map);for(let _=0;_<s;_++){let v=n[_];if(e.mergedAttrs=xa(e.mergedAttrs,v.hostAttrs),CA(t,e,i,h,v),xA(h,v,r),a!==null&&a.has(v)){let[O,B]=a.get(v);e.directiveToIndex.set(v.type,[h,O+e.directiveStart,B+e.directiveStart])}else(o===null||!o.has(v))&&e.directiveToIndex.set(v.type,h);v.contentQueries!==null&&(e.flags|=4),(v.hostBindings!==null||v.hostAttrs!==null||v.hostVars!==0)&&(e.flags|=64);let w=v.type.prototype;!d&&(w.ngOnChanges||w.ngOnInit||w.ngDoCheck)&&((t.preOrderHooks??=[]).push(e.index),d=!0),!u&&(w.ngOnChanges||w.ngDoCheck)&&((t.preOrderCheckHooks??=[]).push(e.index),u=!0),h++}yA(t,e,o)}function yA(t,i,e){for(let n=i.directiveStart;n<i.directiveEnd;n++){let r=t.data[n];if(e===null||!e.has(r))A0(0,i,r,n),A0(1,i,r,n),O0(i,n,!1);else{let o=e.get(r);R0(0,i,o,n),R0(1,i,o,n),O0(i,n,!0)}}}function A0(t,i,e,n){let r=t===0?e.inputs:e.outputs;for(let o in r)if(r.hasOwnProperty(o)){let a;t===0?a=i.inputs??={}:a=i.outputs??={},a[o]??=[],a[o].push(n),_w(i,o)}}function R0(t,i,e,n){let r=t===0?e.inputs:e.outputs;for(let o in r)if(r.hasOwnProperty(o)){let a=r[o],s;t===0?s=i.hostDirectiveInputs??={}:s=i.hostDirectiveOutputs??={},s[a]??=[],s[a].push(n,o),_w(i,a)}}function _w(t,i){i==="class"?t.flags|=8:i==="style"&&(t.flags|=16)}function O0(t,i,e){let{attrs:n,inputs:r,hostDirectiveInputs:o}=t;if(n===null||!e&&r===null||e&&o===null||Wg(t)){t.initialInputs??=[],t.initialInputs.push(null);return}let a=null,s=0;for(;s<n.length;){let l=n[s];if(l===0){s+=4;continue}else if(l===5){s+=2;continue}else if(typeof l=="number")break;if(!e&&r.hasOwnProperty(l)){let d=r[l];for(let u of d)if(u===i){a??=[],a.push(l,n[s+1]);break}}else if(e&&o.hasOwnProperty(l)){let d=o[l];for(let u=0;u<d.length;u+=2)if(d[u]===i){a??=[],a.push(d[u+1],n[s+1]);break}}s+=2}t.initialInputs??=[],t.initialInputs.push(a)}function CA(t,i,e,n,r){t.data[n]=r;let o=r.factory||(r.factory=xr(r.type,!0)),a=new Eo(o,hi(r),Ce,null);t.blueprint[n]=a,e[n]=a,wA(t,i,n,LC(t,e,r.hostVars,Lt),r)}function wA(t,i,e,n,r){let o=r.hostBindings;if(o){let a=t.hostBindingOpCodes;a===null&&(a=t.hostBindingOpCodes=[]);let s=~i.index;DA(a)!=s&&a.push(s),a.push(e,n,o)}}function DA(t){let i=t.length;for(;i>0;){let e=t[--i];if(typeof e=="number"&&e<0)return e}return 0}function xA(t,i,e){if(e){if(i.exportAs)for(let n=0;n<i.exportAs.length;n++)e[i.exportAs[n]]=t;hi(i)&&(e[""]=t)}}function EA(t,i,e){t.flags|=1,t.directiveStart=i,t.directiveEnd=i+e,t.providerIndexes=i}function vw(t,i,e,n,r,o,a,s){let l=i[ne],d=l.consts,u=pn(d,a),h=Ra(l,t,e,n,u);return o&&gw(l,i,h,pn(d,s),r),h.mergedAttrs=xa(h.mergedAttrs,h.attrs),h.attrs!==null&&pu(h,h.attrs,!1),h.mergedAttrs!==null&&pu(h,h.mergedAttrs,!0),l.queries!==null&&l.queries.elementStart(l,h),h}function bw(t,i){X0(t,i),_p(i)&&t.queries.elementEnd(i)}function MA(t,i,e,n,r,o){let a=i.consts,s=pn(a,r),l=Ra(i,t,e,n,s);if(l.mergedAttrs=xa(l.mergedAttrs,l.attrs),o!=null){let d=pn(a,o);l.localNames=[];for(let u=0;u<d.length;u+=2)l.localNames.push(d[u],-1)}return l.attrs!==null&&pu(l,l.attrs,!1),l.mergedAttrs!==null&&pu(l,l.mergedAttrs,!0),i.queries!==null&&i.queries.elementStart(i,l),l}function r_(t,i,e){return t[i]=e}function yw(t,i){return t[i]}function nn(t,i,e){if(e===Lt)return!1;let n=t[i];return Object.is(n,e)?!1:(t[i]=e,!0)}function IA(t,i,e,n){let r=nn(t,i,e);return nn(t,i+1,n)||r}function su(t,i,e){return function n(r){let o=fi(t)?kn(t.index,i):i;i_(o,5);let a=i[st],s=N0(i,a,e,r),l=n.__ngNextListenerFn__;for(;l;)s=N0(i,a,l,r)&&s,l=l.__ngNextListenerFn__;return s}}function N0(t,i,e,n){let r=K(null);try{return Ne(De.OutputStart,i,e),e(n)!==!1}catch(o){return Wk(t,o),!1}finally{Ne(De.OutputEnd,i,e),K(r)}}function Cw(t,i,e,n,r,o,a,s){let l=il(t),d=!1,u=null;if(!n&&l&&(u=TA(i,e,o,t.index)),u!==null){let h=u.__ngLastListenerFn__||u;h.__ngNextListenerFn__=a,u.__ngLastListenerFn__=a,d=!0}else{let h=Tn(t,e),_=n?n(h):h;OT(e,_,o,s);let v=r.listen(_,o,s);if(!SA(o)){let w=n?O=>n(Sn(O[t.index])):t.index;ww(w,i,e,o,s,v,!1)}}return d}function SA(t){return t.startsWith("animation")||t.startsWith("transition")}function TA(t,i,e,n){let r=t.cleanup;if(r!=null)for(let o=0;o<r.length-1;o+=2){let a=r[o];if(a===e&&r[o+1]===n){let s=i[ha],l=r[o+2];return s&&s.length>l?s[l]:null}typeof a=="string"&&(o+=2)}return null}function ww(t,i,e,n,r,o,a){let s=i.firstCreatePass?Mp(i):null,l=Ep(e),d=l.length;l.push(r,o),s&&s.push(n,t,d,(d+1)*(a?-1:1))}function F0(t,i,e,n,r,o){let a=i[e],s=i[ne],d=s.data[e].outputs[n],h=a[d].subscribe(o);ww(t.index,s,i,r,o,h,!0)}var bg=Symbol("BINDING");function Dw(t){return t.debugInfo?.className||t.type.name||null}var gu=class extends Cl{ngModule;constructor(i){super(),this.ngModule=i}resolveComponentFactory(i){let e=ci(i);return new Nr(e,this.ngModule)}};function kA(t){return Object.keys(t).map(i=>{let[e,n,r]=t[i],o={propName:e,templateName:i,isSignal:(n&Au.SignalBased)!==0};return r&&(o.transform=r),o})}function AA(t){return Object.keys(t).map(i=>({propName:t[i],templateName:i}))}function RA(t,i,e){let n=i instanceof Oe?i:i?.injector;return n&&t.getStandaloneInjector!==null&&(n=t.getStandaloneInjector(n)||n),n?new vg(e,n):e}function OA(t){let i=t.get(pt,null);if(i===null)throw new N(407,!1);let e=t.get(pw,null),n=t.get(li,null),r=t.get(Kn,null,{optional:!0});return{rendererFactory:i,sanitizer:e,changeDetectionScheduler:n,ngReflect:!1,tracingService:r}}function NA(t,i){let e=xw(t);return TC(i,e,e==="svg"?vp:e==="math"?jy:null)}function xw(t){return(t.selectors[0][0]||"div").toLowerCase()}var Nr=class extends Bu{componentDef;ngModule;selector;componentType;ngContentSelectors;isBoundToModule;cachedInputs=null;cachedOutputs=null;get inputs(){return this.cachedInputs??=kA(this.componentDef.inputs),this.cachedInputs}get outputs(){return this.cachedOutputs??=AA(this.componentDef.outputs),this.cachedOutputs}constructor(i,e){super(),this.componentDef=i,this.ngModule=e,this.componentType=i.type,this.selector=mk(i.selectors),this.ngContentSelectors=i.ngContentSelectors??[],this.isBoundToModule=!!e}create(i,e,n,r,o,a){Ne(De.DynamicComponentStart);let s=K(null);try{let l=this.componentDef,d=RA(l,r||this.ngModule,i),u=OA(d),h=u.tracingService;return h&&h.componentCreate?h.componentCreate(Dw(l),()=>this.createComponentRef(u,d,e,n,o,a)):this.createComponentRef(u,d,e,n,o,a)}finally{K(s)}}createComponentRef(i,e,n,r,o,a){let s=this.componentDef,l=FA(r,s,a,o),d=i.rendererFactory.createRenderer(null,s),u=r?Pk(d,r,s.encapsulation,e):NA(s,d),h=a?.some(P0)||o?.some(w=>typeof w!="function"&&w.bindings.some(P0)),_=qg(null,l,null,512|PC(s),null,null,i,d,e,null,yC(u,e,!0));_[Xe]=u,Yd(_);let v=null;try{let w=vw(Xe,_,2,"#host",()=>l.directiveRegistry,!0,0);RC(d,u,w),Ea(u,_),t_(l,_,w),wC(l,w,_),bw(l,w),n!==void 0&&LA(w,this.ngContentSelectors,n),v=kn(w.index,_),_[st]=v[st],n_(l,_,null)}catch(w){throw v!==null&&ig(v),ig(_),w}finally{Ne(De.DynamicComponentEnd),Qd()}return new _u(this.componentType,_,!!h)}};function FA(t,i,e,n){let r=t?["ng-version","21.2.7"]:fk(i.selectors[0]),o=null,a=null,s=0;if(e)for(let u of e)s+=u[bg].requiredVars,u.create&&(u.targetIdx=0,(o??=[]).push(u)),u.update&&(u.targetIdx=0,(a??=[]).push(u));if(n)for(let u=0;u<n.length;u++){let h=n[u];if(typeof h!="function")for(let _ of h.bindings){s+=_[bg].requiredVars;let v=u+1;_.create&&(_.targetIdx=v,(o??=[]).push(_)),_.update&&(_.targetIdx=v,(a??=[]).push(_))}}let l=[i];if(n)for(let u of n){let h=typeof u=="function"?u:u.type,_=op(h);l.push(_)}return Gg(0,null,PA(o,a),1,s,l,null,null,null,[r],null)}function PA(t,i){return!t&&!i?null:e=>{if(e&1&&t)for(let n of t)n.create();if(e&2&&i)for(let n of i)n.update()}}function P0(t){let i=t[bg].kind;return i==="input"||i==="twoWay"}var _u=class extends hw{_rootLView;_hasInputBindings;instance;hostView;changeDetectorRef;componentType;location;previousInputValues=null;_tNode;constructor(i,e,n){super(),this._rootLView=e,this._hasInputBindings=n,this._tNode=Hd(e[ne],Xe),this.location=ka(this._tNode,e),this.instance=kn(this._tNode.index,e)[st],this.hostView=this.changeDetectorRef=new Or(e,void 0),this.componentType=i}setInput(i,e){this._hasInputBindings;let n=this._tNode;if(this.previousInputValues??=new Map,this.previousInputValues.has(i)&&Object.is(this.previousInputValues.get(i),e))return;let r=this._rootLView,o=Lu(n,r[ne],r,i,e);this.previousInputValues.set(i,e);let a=kn(n.index,r);i_(a,1)}get injector(){return new xo(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(i){this.hostView.onDestroy(i)}};function LA(t,i,e){let n=t.projection=[];for(let r=0;r<i.length;r++){let o=e[r];n.push(o!=null&&o.length?Array.from(o):null)}}var Ct=(()=>{class t{static __NG_ELEMENT_ID__=VA}return t})();function VA(){let t=Tt();return Ew(t,J())}var yg=class t extends Ct{_lContainer;_hostTNode;_hostLView;constructor(i,e,n){super(),this._lContainer=i,this._hostTNode=e,this._hostLView=n}get element(){return ka(this._hostTNode,this._hostLView)}get injector(){return new xo(this._hostTNode,this._hostLView)}get parentInjector(){let i=Pg(this._hostTNode,this._hostLView);if(tC(i)){let e=du(i,this._hostLView),n=cu(i),r=e[ne].data[n+8];return new xo(r,e)}else return new xo(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(i){let e=L0(this._lContainer);return e!==null&&e[i]||null}get length(){return this._lContainer.length-it}createEmbeddedView(i,e,n){let r,o;typeof n=="number"?r=n:n!=null&&(r=n.index,o=n.injector);let a=hu(this._lContainer,i.ssrId),s=i.createEmbeddedViewImpl(e||{},o,a);return this.insertImpl(s,r,Ma(this._hostTNode,a)),s}createComponent(i,e,n,r,o,a,s){let l=i&&!aT(i),d;if(l)d=e;else{let B=e||{};d=B.index,n=B.injector,r=B.projectableNodes,o=B.environmentInjector||B.ngModuleRef,a=B.directives,s=B.bindings}let u=l?i:new Nr(ci(i)),h=n||this.parentInjector;if(!o&&u.ngModule==null){let Q=(l?h:this.parentInjector).get(Oe,null);Q&&(o=Q)}let _=ci(u.componentType??{}),v=hu(this._lContainer,_?.id??null),w=v?.firstChild??null,O=u.create(h,r,w,o,a,s);return this.insertImpl(O.hostView,d,Ma(this._hostTNode,v)),O}insert(i,e){return this.insertImpl(i,e,!0)}insertImpl(i,e,n){let r=i._lView;if(Uy(r)){let s=this.indexOf(i);if(s!==-1)this.detach(s);else{let l=r[vt],d=new t(l,l[Zt],l[vt]);d.detach(d.indexOf(i))}}let o=this._adjustIndex(e),a=this._lContainer;return yl(a,r,o,n),i.attachToViewContainerRef(),lp(qp(a),o,i),i}move(i,e){return this.insert(i,e)}indexOf(i){let e=L0(this._lContainer);return e!==null?e.indexOf(i):-1}remove(i){let e=this._adjustIndex(i,-1),n=fl(this._lContainer,e);n&&(Js(qp(this._lContainer),e),Nu(n[ne],n))}detach(i){let e=this._adjustIndex(i,-1),n=fl(this._lContainer,e);return n&&Js(qp(this._lContainer),e)!=null?new Or(n):null}_adjustIndex(i,e=0){return i??this.length+e}};function L0(t){return t[nl]}function qp(t){return t[nl]||(t[nl]=[])}function Ew(t,i){let e,n=i[t.index];return qn(n)?e=n:(e=cw(n,i,null,t),i[t.index]=e,Yg(i,e)),jA(e,i,t,n),new yg(e,t,i)}function BA(t,i){let e=t[Be],n=e.createComment(""),r=Tn(i,t),o=e.parentNode(r);return fu(e,o,n,e.nextSibling(r),!1),n}var jA=zA,HA=()=>!1;function UA(t,i,e){return HA(t,i,e)}function zA(t,i,e,n){if(t[Ar])return;let r;e.type&8?r=Sn(n):r=BA(i,e),t[Ar]=r}var Cg=class t{queryList;matches=null;constructor(i){this.queryList=i}clone(){return new t(this.queryList)}setDirty(){this.queryList.setDirty()}},wg=class t{queries;constructor(i=[]){this.queries=i}createEmbeddedView(i){let e=i.queries;if(e!==null){let n=i.contentQueries!==null?i.contentQueries[0]:e.length,r=[];for(let o=0;o<n;o++){let a=e.getByIndex(o),s=this.queries[a.indexInDeclarationView];r.push(s.clone())}return new t(r)}return null}insertView(i){this.dirtyQueriesWithMatches(i)}detachView(i){this.dirtyQueriesWithMatches(i)}finishViewCreation(i){this.dirtyQueriesWithMatches(i)}dirtyQueriesWithMatches(i){for(let e=0;e<this.queries.length;e++)a_(i,e).matches!==null&&this.queries[e].setDirty()}},vu=class{flags;read;predicate;constructor(i,e,n=null){this.flags=e,this.read=n,typeof i=="string"?this.predicate=YA(i):this.predicate=i}},Dg=class t{queries;constructor(i=[]){this.queries=i}elementStart(i,e){for(let n=0;n<this.queries.length;n++)this.queries[n].elementStart(i,e)}elementEnd(i){for(let e=0;e<this.queries.length;e++)this.queries[e].elementEnd(i)}embeddedTView(i){let e=null;for(let n=0;n<this.length;n++){let r=e!==null?e.length:0,o=this.getByIndex(n).embeddedTView(i,r);o&&(o.indexInDeclarationView=n,e!==null?e.push(o):e=[o])}return e!==null?new t(e):null}template(i,e){for(let n=0;n<this.queries.length;n++)this.queries[n].template(i,e)}getByIndex(i){return this.queries[i]}get length(){return this.queries.length}track(i){this.queries.push(i)}},xg=class t{metadata;matches=null;indexInDeclarationView=-1;crossesNgTemplate=!1;_declarationNodeIndex;_appliesToNextNode=!0;constructor(i,e=-1){this.metadata=i,this._declarationNodeIndex=e}elementStart(i,e){this.isApplyingToNode(e)&&this.matchTNode(i,e)}elementEnd(i){this._declarationNodeIndex===i.index&&(this._appliesToNextNode=!1)}template(i,e){this.elementStart(i,e)}embeddedTView(i,e){return this.isApplyingToNode(i)?(this.crossesNgTemplate=!0,this.addMatch(-i.index,e),new t(this.metadata)):null}isApplyingToNode(i){if(this._appliesToNextNode&&(this.metadata.flags&1)!==1){let e=this._declarationNodeIndex,n=i.parent;for(;n!==null&&n.type&8&&n.index!==e;)n=n.parent;return e===(n!==null?n.index:-1)}return this._appliesToNextNode}matchTNode(i,e){let n=this.metadata.predicate;if(Array.isArray(n))for(let r=0;r<n.length;r++){let o=n[r];this.matchTNodeWithReadOption(i,e,$A(e,o)),this.matchTNodeWithReadOption(i,e,ou(e,i,o,!1,!1))}else n===ht?e.type&4&&this.matchTNodeWithReadOption(i,e,-1):this.matchTNodeWithReadOption(i,e,ou(e,i,n,!1,!1))}matchTNodeWithReadOption(i,e,n){if(n!==null){let r=this.metadata.read;if(r!==null)if(r===V||r===Ct||r===ht&&e.type&4)this.addMatch(e.index,-2);else{let o=ou(e,i,r,!1,!1);o!==null&&this.addMatch(e.index,o)}else this.addMatch(e.index,n)}}addMatch(i,e){this.matches===null?this.matches=[i,e]:this.matches.push(i,e)}};function $A(t,i){let e=t.localNames;if(e!==null){for(let n=0;n<e.length;n+=2)if(e[n]===i)return e[n+1]}return null}function WA(t,i){return t.type&11?ka(t,i):t.type&4?Vu(t,i):null}function GA(t,i,e,n){return e===-1?WA(i,t):e===-2?qA(t,i,n):dl(t,t[ne],e,i)}function qA(t,i,e){if(e===V)return ka(i,t);if(e===ht)return Vu(i,t);if(e===Ct)return Ew(i,t)}function Mw(t,i,e,n){let r=i[mi].queries[n];if(r.matches===null){let o=t.data,a=e.matches,s=[];for(let l=0;a!==null&&l<a.length;l+=2){let d=a[l];if(d<0)s.push(null);else{let u=o[d];s.push(GA(i,u,a[l+1],e.metadata.read))}}r.matches=s}return r.matches}function Eg(t,i,e,n){let r=t.queries.getByIndex(e),o=r.matches;if(o!==null){let a=Mw(t,i,r,e);for(let s=0;s<o.length;s+=2){let l=o[s];if(l>0)n.push(a[s/2]);else{let d=o[s+1],u=i[-l];for(let h=it;h<u.length;h++){let _=u[h];_[Tr]===_[vt]&&Eg(_[ne],_,d,n)}if(u[Co]!==null){let h=u[Co];for(let _=0;_<h.length;_++){let v=h[_];Eg(v[ne],v,d,n)}}}}}return n}function o_(t,i){return t[mi].queries[i].queryList}function Iw(t,i,e){let n=new Xi((e&4)===4);return Wy(t,i,n,n.destroy),(i[mi]??=new wg).queries.push(new Cg(n))-1}function Sw(t,i,e){let n=ze();return n.firstCreatePass&&(kw(n,new vu(t,i,e),-1),(i&2)===2&&(n.staticViewQueries=!0)),Iw(n,J(),i)}function Tw(t,i,e,n){let r=ze();if(r.firstCreatePass){let o=Tt();kw(r,new vu(i,e,n),o.index),QA(r,t),(e&2)===2&&(r.staticContentQueries=!0)}return Iw(r,J(),e)}function YA(t){return t.split(",").map(i=>i.trim())}function kw(t,i,e){t.queries===null&&(t.queries=new Dg),t.queries.track(new xg(i,e))}function QA(t,i){let e=t.contentQueries||(t.contentQueries=[]),n=e.length?e[e.length-1]:-1;i!==n&&e.push(t.queries.length-1,i)}function a_(t,i){return t.queries.getByIndex(i)}function Aw(t,i){let e=t[ne],n=a_(e,i);return n.crossesNgTemplate?Eg(e,t,i,[]):Mw(e,t,n,i)}function Rw(t,i,e){let n,r=Ns(()=>{n._dirtyCounter();let o=ZA(n,t);if(i&&o===void 0)throw new N(-951,!1);return o});return n=r[ut],n._dirtyCounter=I(0),n._flatValue=void 0,r}function s_(t){return Rw(!0,!1,t)}function l_(t){return Rw(!0,!0,t)}function Ow(t,i){let e=t[ut];e._lView=J(),e._queryIndex=i,e._queryList=o_(e._lView,i),e._queryList.onDirty(()=>e._dirtyCounter.update(n=>n+1))}function ZA(t,i){let e=t._lView,n=t._queryIndex;if(e===void 0||n===void 0||e[ae]&4)return i?void 0:zt;let r=o_(e,n),o=Aw(e,n);return r.reset(o,dC),i?r.first:r._changesDetected||t._flatValue===void 0?t._flatValue=r.toArray():t._flatValue}var yi=class{},ju=class{};var bu=class extends yi{ngModuleType;_parent;_bootstrapComponents=[];_r3Injector;instance;destroyCbs=[];componentFactoryResolver=new gu(this);constructor(i,e,n,r=!0){super(),this.ngModuleType=i,this._parent=e;let o=rp(i);this._bootstrapComponents=OC(o.bootstrap),this._r3Injector=Vp(i,e,[{provide:yi,useValue:this},{provide:Cl,useValue:this.componentFactoryResolver},...n],Ks(i),new Set(["environment"])),r&&this.resolveInjectorInitializers()}resolveInjectorInitializers(){this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(this.ngModuleType)}get injector(){return this._r3Injector}destroy(){let i=this._r3Injector;!i.destroyed&&i.destroy(),this.destroyCbs.forEach(e=>e()),this.destroyCbs=null}onDestroy(i){this.destroyCbs.push(i)}},yu=class extends ju{moduleType;constructor(i){super(),this.moduleType=i}create(i){return new bu(this.moduleType,i,[])}};var hl=class extends yi{injector;componentFactoryResolver=new gu(this);instance=null;constructor(i){super();let e=new po([...i.providers,{provide:yi,useValue:this},{provide:Cl,useValue:this.componentFactoryResolver}],i.parent||fa(),i.debugName,new Set(["environment"]));this.injector=e,i.runEnvironmentInitializers&&e.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(i){this.injector.onDestroy(i)}};function Oa(t,i,e=null){return new hl({providers:t,parent:i,debugName:e,runEnvironmentInitializers:!0}).injector}var KA=(()=>{class t{_injector;cachedInjectors=new Map;constructor(e){this._injector=e}getOrCreateStandaloneInjector(e){if(!e.standalone)return null;if(!this.cachedInjectors.has(e)){let n=up(!1,e.type),r=n.length>0?Oa([n],this._injector,""):null;this.cachedInjectors.set(e,r)}return this.cachedInjectors.get(e)}ngOnDestroy(){try{for(let e of this.cachedInjectors.values())e!==null&&e.destroy()}finally{this.cachedInjectors.clear()}}static \u0275prov=y({token:t,providedIn:"environment",factory:()=>new t(z(Oe))})}return t})();function D(t){return gl(()=>{let i=Nw(t),e=X(C({},i),{decls:t.decls,vars:t.vars,template:t.template,consts:t.consts||null,ngContentSelectors:t.ngContentSelectors,onPush:t.changeDetection===Lg.OnPush,directiveDefs:null,pipeDefs:null,dependencies:i.standalone&&t.dependencies||null,getStandaloneInjector:i.standalone?r=>r.get(KA).getOrCreateStandaloneInjector(e):null,getExternalStyles:null,signals:t.signals??!1,data:t.data||{},encapsulation:t.encapsulation||Qn.Emulated,styles:t.styles||zt,_:null,schemas:t.schemas||null,tView:null,id:""});i.standalone&&Ci("NgStandalone"),Fw(e);let n=t.dependencies;return e.directiveDefs=V0(n,XA),e.pipeDefs=V0(n,Ey),e.id=tR(e),e})}function XA(t){return ci(t)||op(t)}function H(t){return gl(()=>({type:t.type,bootstrap:t.bootstrap||zt,declarations:t.declarations||zt,imports:t.imports||zt,exports:t.exports||zt,transitiveCompileScopes:null,schemas:t.schemas||null,id:t.id||null}))}function JA(t,i){if(t==null)return Ir;let e={};for(let n in t)if(t.hasOwnProperty(n)){let r=t[n],o,a,s,l;Array.isArray(r)?(s=r[0],o=r[1],a=r[2]??o,l=r[3]||null):(o=r,a=r,s=Au.None,l=null),e[o]=[n,s,l],i[o]=a}return e}function eR(t){if(t==null)return Ir;let i={};for(let e in t)t.hasOwnProperty(e)&&(i[t[e]]=e);return i}function A(t){return gl(()=>{let i=Nw(t);return Fw(i),i})}function c_(t){return{type:t.type,name:t.name,factory:null,pure:t.pure!==!1,standalone:t.standalone??!0,onDestroy:t.type.prototype.ngOnDestroy||null}}function Nw(t){let i={};return{type:t.type,providersResolver:null,viewProvidersResolver:null,factory:null,hostBindings:t.hostBindings||null,hostVars:t.hostVars||0,hostAttrs:t.hostAttrs||null,contentQueries:t.contentQueries||null,declaredInputs:i,inputConfig:t.inputs||Ir,exportAs:t.exportAs||null,standalone:t.standalone??!0,signals:t.signals===!0,selectors:t.selectors||zt,viewQuery:t.viewQuery||null,features:t.features||null,setInput:null,resolveHostDirectives:null,hostDirectives:null,controlDef:null,inputs:JA(t.inputs,i),outputs:eR(t.outputs),debugInfo:null}}function Fw(t){t.features?.forEach(i=>i(t))}function V0(t,i){return t?()=>{let e=typeof t=="function"?t():t,n=[];for(let r of e){let o=i(r);o!==null&&n.push(o)}return n}:null}function tR(t){let i=0,e=typeof t.consts=="function"?"":t.consts,n=[t.selectors,t.ngContentSelectors,t.hostVars,t.hostAttrs,e,t.vars,t.decls,t.encapsulation,t.standalone,t.signals,t.exportAs,JSON.stringify(t.inputs),JSON.stringify(t.outputs),Object.getOwnPropertyNames(t.type.prototype),!!t.contentQueries,!!t.viewQuery];for(let o of n.join("|"))i=Math.imul(31,i)+o.charCodeAt(0)<<0;return i+=2147483648,"c"+i}function nR(t){return Object.getPrototypeOf(t.prototype).constructor}function ge(t){let i=nR(t.type),e=!0,n=[t];for(;i;){let r;if(hi(t))r=i.\u0275cmp||i.\u0275dir;else{if(i.\u0275cmp)throw new N(903,!1);r=i.\u0275dir}if(r){if(e){n.push(r);let a=t;a.inputs=Yp(t.inputs),a.declaredInputs=Yp(t.declaredInputs),a.outputs=Yp(t.outputs);let s=r.hostBindings;s&&sR(t,s);let l=r.viewQuery,d=r.contentQueries;if(l&&oR(t,l),d&&aR(t,d),iR(t,r),xy(t.outputs,r.outputs),hi(r)&&r.data.animation){let u=t.data;u.animation=(u.animation||[]).concat(r.data.animation)}}let o=r.features;if(o)for(let a=0;a<o.length;a++){let s=o[a];s&&s.ngInherit&&s(t),s===ge&&(e=!1)}}i=Object.getPrototypeOf(i)}rR(n)}function iR(t,i){for(let e in i.inputs){if(!i.inputs.hasOwnProperty(e)||t.inputs.hasOwnProperty(e))continue;let n=i.inputs[e];n!==void 0&&(t.inputs[e]=n,t.declaredInputs[e]=i.declaredInputs[e])}}function rR(t){let i=0,e=null;for(let n=t.length-1;n>=0;n--){let r=t[n];r.hostVars=i+=r.hostVars,r.hostAttrs=xa(r.hostAttrs,e=xa(e,r.hostAttrs))}}function Yp(t){return t===Ir?{}:t===zt?[]:t}function oR(t,i){let e=t.viewQuery;e?t.viewQuery=(n,r)=>{i(n,r),e(n,r)}:t.viewQuery=i}function aR(t,i){let e=t.contentQueries;e?t.contentQueries=(n,r,o)=>{i(n,r,o),e(n,r,o)}:t.contentQueries=i}function sR(t,i){let e=t.hostBindings;e?t.hostBindings=(n,r)=>{i(n,r),e(n,r)}:t.hostBindings=i}function Pw(t,i,e,n,r,o,a,s){if(e.firstCreatePass){t.mergedAttrs=xa(t.mergedAttrs,t.attrs);let u=t.tView=Gg(2,t,r,o,a,e.directiveRegistry,e.pipeRegistry,null,e.schemas,e.consts,null);e.queries!==null&&(e.queries.template(e,t),u.queries=e.queries.embeddedTView(t))}s&&(t.flags|=s),_a(t,!1);let l=cR(e,i,t,n);Zd()&&Jg(e,i,l,t),Ea(l,i);let d=cw(l,i,l,t);i[n+Xe]=d,Yg(i,d),UA(d,t,i)}function lR(t,i,e,n,r,o,a,s,l,d,u){let h=e+Xe,_;return i.firstCreatePass?(_=Ra(i,h,4,a||null,s||null),Sp()&&gw(i,t,_,pn(i.consts,d),ZC),X0(i,_)):_=i.data[h],Pw(_,t,i,e,n,r,o,l),il(_)&&t_(i,t,_),d!=null&&Pu(t,_,u),_}function Ia(t,i,e,n,r,o,a,s,l,d,u){let h=e+Xe,_;if(i.firstCreatePass){if(_=Ra(i,h,4,a||null,s||null),d!=null){let v=pn(i.consts,d);_.localNames=[];for(let w=0;w<v.length;w+=2)_.localNames.push(v[w],-1)}}else _=i.data[h];return Pw(_,t,i,e,n,r,o,l),d!=null&&Pu(t,_,u),_}function lt(t,i,e,n,r,o,a,s){let l=J(),d=ze(),u=pn(d.consts,o);return lR(l,d,t,i,e,n,r,u,void 0,a,s),lt}function Dl(t,i,e,n,r,o,a,s){let l=J(),d=ze(),u=pn(d.consts,o);return Ia(l,d,t,i,e,n,r,u,void 0,a,s),Dl}var cR=dR;function dR(t,i,e,n){return Kd(!0),i[Be].createComment("")}var Hu=(()=>{class t{log(e){console.log(e)}warn(e){console.warn(e)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"platform"})}return t})();function wi(t){return typeof t=="function"&&t[ut]!==void 0}function d_(t){return wi(t)&&typeof t.set=="function"}var u_=new b("");function tr(t){return!!t&&typeof t.then=="function"}function Uu(t){return!!t&&typeof t.subscribe=="function"}var m_=new b("");function zu(t){return di([{provide:m_,multi:!0,useValue:t}])}var f_=(()=>{class t{resolve;reject;initialized=!1;done=!1;donePromise=new Promise((e,n)=>{this.resolve=e,this.reject=n});appInits=c(m_,{optional:!0})??[];injector=c($);constructor(){}runInitializers(){if(this.initialized)return;let e=[];for(let r of this.appInits){let o=bt(this.injector,r);if(tr(o))e.push(o);else if(Uu(o)){let a=new Promise((s,l)=>{o.subscribe({complete:s,error:l})});e.push(a)}}let n=()=>{this.done=!0,this.resolve()};Promise.all(e).then(()=>{n()}).catch(r=>{this.reject(r)}),e.length===0&&n(),this.initialized=!0}static \u0275fac=function(n){return new(n||t)};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),xl=new b("");function Lw(){Ch(()=>{let t="";throw new N(600,t)})}function Vw(t){return t.isBoundToModule}var uR=10;var _n=(()=>{class t{_runningTick=!1;_destroyed=!1;_destroyListeners=[];_views=[];internalErrorHandler=c(gn);afterRenderManager=c(Ou);zonelessEnabled=c(al);rootEffectScheduler=c(Jd);dirtyFlags=0;tracingSnapshot=null;allTestViews=new Set;autoDetectTestViews=new Set;includeAllTestViews=!1;afterTick=new x;get allViews(){return[...(this.includeAllTestViews?this.allTestViews:this.autoDetectTestViews).keys(),...this._views]}get destroyed(){return this._destroyed}componentTypes=[];components=[];internalPendingTask=c(Ki);get isStable(){return this.internalPendingTask.hasPendingTasksObservable.pipe(oe(e=>!e))}constructor(){c(Kn,{optional:!0})}whenStable(){let e;return new Promise(n=>{e=this.isStable.subscribe({next:r=>{r&&n()}})}).finally(()=>{e.unsubscribe()})}_injector=c(Oe);_rendererFactory=null;get injector(){return this._injector}bootstrap(e,n){return this.bootstrapImpl(e,n)}bootstrapImpl(e,n,r=$.NULL){return this._injector.get(L).run(()=>{Ne(De.BootstrapComponentStart);let a=e instanceof Bu;if(!this._injector.get(f_).done){let w="";throw new N(405,w)}let l;a?l=e:l=this._injector.get(Cl).resolveComponentFactory(e),this.componentTypes.push(l.componentType);let d=Vw(l)?void 0:this._injector.get(yi),u=n||l.selector,h=l.create(r,[],u,d),_=h.location.nativeElement,v=h.injector.get(u_,null);return v?.registerApplication(_),h.onDestroy(()=>{this.detachView(h.hostView),cl(this.components,h),v?.unregisterApplication(_)}),this._loadComponent(h),Ne(De.BootstrapComponentEnd,h),h})}tick(){this.zonelessEnabled||(this.dirtyFlags|=1),this._tick()}_tick(){Ne(De.ChangeDetectionStart),this.tracingSnapshot!==null?this.tracingSnapshot.run(Ru.CHANGE_DETECTION,this.tickImpl):this.tickImpl()}tickImpl=()=>{if(this._runningTick)throw Ne(De.ChangeDetectionEnd),new N(101,!1);let e=K(null);try{this._runningTick=!0,this.synchronize()}finally{this._runningTick=!1,this.tracingSnapshot?.dispose(),this.tracingSnapshot=null,K(e),this.afterTick.next(),Ne(De.ChangeDetectionEnd)}};synchronize(){this._rendererFactory===null&&!this._injector.destroyed&&(this._rendererFactory=this._injector.get(pt,null,{optional:!0}));let e=0;for(;this.dirtyFlags!==0&&e++<uR;){Ne(De.ChangeDetectionSyncStart);try{this.synchronizeOnce()}finally{Ne(De.ChangeDetectionSyncEnd)}}}synchronizeOnce(){this.dirtyFlags&16&&(this.dirtyFlags&=-17,this.rootEffectScheduler.flush());let e=!1;if(this.dirtyFlags&7){let n=!!(this.dirtyFlags&1);this.dirtyFlags&=-8,this.dirtyFlags|=8;for(let{_lView:r}of this.allViews){if(!n&&!rl(r))continue;let o=n&&!this.zonelessEnabled?0:1;ow(r,o),e=!0}if(this.dirtyFlags&=-5,this.syncDirtyFlagsWithViews(),this.dirtyFlags&23)return}e||(this._rendererFactory?.begin?.(),this._rendererFactory?.end?.()),this.dirtyFlags&8&&(this.dirtyFlags&=-9,this.afterRenderManager.execute()),this.syncDirtyFlagsWithViews()}syncDirtyFlagsWithViews(){if(this.allViews.some(({_lView:e})=>rl(e))){this.dirtyFlags|=2;return}else this.dirtyFlags&=-8}attachView(e){let n=e;this._views.push(n),n.attachToAppRef(this)}detachView(e){let n=e;cl(this._views,n),n.detachFromAppRef()}_loadComponent(e){this.attachView(e.hostView);try{this.tick()}catch(r){this.internalErrorHandler(r)}this.components.push(e),this._injector.get(xl,[]).forEach(r=>r(e))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(e=>e()),this._views.slice().forEach(e=>e.destroy())}finally{this._destroyed=!0,this._views=[],this._destroyListeners=[]}}onDestroy(e){return this._destroyListeners.push(e),()=>cl(this._destroyListeners,e)}destroy(){if(this._destroyed)throw new N(406,!1);let e=this._injector;e.destroy&&!e.destroyed&&e.destroy()}get viewCount(){return this._views.length}static \u0275fac=function(n){return new(n||t)};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function cl(t,i){let e=t.indexOf(i);e>-1&&t.splice(e,1)}function $u(t,i){let e=J(),n=pi();if(nn(e,n,i)){let r=ze(),o=va();if(Lu(o,r,e,t,i))fi(o)&&QC(e,o.index);else{let s=Tn(o,e);KC(e[Be],s,null,o.value,t,i,null)}}return $u}function Z(t,i,e,n){let r=J(),o=pi();if(nn(r,o,i)){let a=ze(),s=va();zk(s,r,t,i,e,n)}return Z}var Mg=class{destroy(i){}updateValue(i,e){}swap(i,e){let n=Math.min(i,e),r=Math.max(i,e),o=this.detach(r);if(r-n>1){let a=this.detach(n);this.attach(n,o),this.attach(r,a)}else this.attach(n,o)}move(i,e){this.attach(e,this.detach(i))}};function Qp(t,i,e,n,r){return t===e&&Object.is(i,n)?1:Object.is(r(t,i),r(e,n))?-1:0}function mR(t,i,e,n){let r,o,a=0,s=t.length-1,l=void 0;if(Array.isArray(i)){K(n);let d=i.length-1;for(K(null);a<=s&&a<=d;){let u=t.at(a),h=i[a],_=Qp(a,u,a,h,e);if(_!==0){_<0&&t.updateValue(a,h),a++;continue}let v=t.at(s),w=i[d],O=Qp(s,v,d,w,e);if(O!==0){O<0&&t.updateValue(s,w),s--,d--;continue}let B=e(a,u),Q=e(s,v),Ie=e(a,h);if(Object.is(Ie,Q)){let Mt=e(d,w);Object.is(Mt,B)?(t.swap(a,s),t.updateValue(s,w),d--,s--):t.move(s,a),t.updateValue(a,h),a++;continue}if(r??=new Cu,o??=j0(t,a,s,e),Ig(t,r,a,Ie))t.updateValue(a,h),a++,s++;else if(o.has(Ie))r.set(B,t.detach(a)),s--;else{let Mt=t.create(a,i[a]);t.attach(a,Mt),a++,s++}}for(;a<=d;)B0(t,r,e,a,i[a]),a++}else if(i!=null){K(n);let d=i[Symbol.iterator]();K(null);let u=d.next();for(;!u.done&&a<=s;){let h=t.at(a),_=u.value,v=Qp(a,h,a,_,e);if(v!==0)v<0&&t.updateValue(a,_),a++,u=d.next();else{r??=new Cu,o??=j0(t,a,s,e);let w=e(a,_);if(Ig(t,r,a,w))t.updateValue(a,_),a++,s++,u=d.next();else if(!o.has(w))t.attach(a,t.create(a,_)),a++,s++,u=d.next();else{let O=e(a,h);r.set(O,t.detach(a)),s--}}}for(;!u.done;)B0(t,r,e,t.length,u.value),u=d.next()}for(;a<=s;)t.destroy(t.detach(s--));r?.forEach(d=>{t.destroy(d)})}function Ig(t,i,e,n){return i!==void 0&&i.has(n)?(t.attach(e,i.get(n)),i.delete(n),!0):!1}function B0(t,i,e,n,r){if(Ig(t,i,n,e(n,r)))t.updateValue(n,r);else{let o=t.create(n,r);t.attach(n,o)}}function j0(t,i,e,n){let r=new Set;for(let o=i;o<=e;o++)r.add(n(o,t.at(o)));return r}var Cu=class{kvMap=new Map;_vMap=void 0;has(i){return this.kvMap.has(i)}delete(i){if(!this.has(i))return!1;let e=this.kvMap.get(i);return this._vMap!==void 0&&this._vMap.has(e)?(this.kvMap.set(i,this._vMap.get(e)),this._vMap.delete(e)):this.kvMap.delete(i),!0}get(i){return this.kvMap.get(i)}set(i,e){if(this.kvMap.has(i)){let n=this.kvMap.get(i);this._vMap===void 0&&(this._vMap=new Map);let r=this._vMap;for(;r.has(n);)n=r.get(n);r.set(n,e)}else this.kvMap.set(i,e)}forEach(i){for(let[e,n]of this.kvMap)if(i(n,e),this._vMap!==void 0){let r=this._vMap;for(;r.has(n);)n=r.get(n),i(n,e)}}};function W(t,i,e,n,r,o,a,s){Ci("NgControlFlow");let l=J(),d=ze(),u=pn(d.consts,o);return Ia(l,d,t,i,e,n,r,u,256,a,s),h_}function h_(t,i,e,n,r,o,a,s){Ci("NgControlFlow");let l=J(),d=ze(),u=pn(d.consts,o);return Ia(l,d,t,i,e,n,r,u,512,a,s),h_}function G(t,i){Ci("NgControlFlow");let e=J(),n=pi(),r=e[n]!==Lt?e[n]:-1,o=r!==-1?wu(e,Xe+r):void 0,a=0;if(nn(e,n,t)){let s=K(null);try{if(o!==void 0&&uw(o,a),t!==-1){let l=Xe+t,d=wu(e,l),u=Ag(e[ne],l),h=fw(d,u,e),_=bl(e,u,i,{dehydratedView:h});yl(d,_,a,Ma(u,h))}}finally{K(s)}}else if(o!==void 0){let s=dw(o,a);s!==void 0&&(s[st]=i)}}var Sg=class{lContainer;$implicit;$index;constructor(i,e,n){this.lContainer=i,this.$implicit=e,this.$index=n}get $count(){return this.lContainer.length-it}};function Wu(t,i){return i}var Tg=class{hasEmptyBlock;trackByFn;liveCollection;constructor(i,e,n){this.hasEmptyBlock=i,this.trackByFn=e,this.liveCollection=n}};function Ge(t,i,e,n,r,o,a,s,l,d,u,h,_){Ci("NgControlFlow");let v=J(),w=ze(),O=l!==void 0,B=J(),Q=s?a.bind(B[Kt][st]):a,Ie=new Tg(O,Q);B[Xe+t]=Ie,Ia(v,w,t+1,i,e,n,r,pn(w.consts,o),256),O&&Ia(v,w,t+2,l,d,u,h,pn(w.consts,_),512)}var kg=class extends Mg{lContainer;hostLView;templateTNode;operationsCounter=void 0;needsIndexUpdate=!1;constructor(i,e,n){super(),this.lContainer=i,this.hostLView=e,this.templateTNode=n}get length(){return this.lContainer.length-it}at(i){return this.getLView(i)[st].$implicit}attach(i,e){let n=e[_o];this.needsIndexUpdate||=i!==this.length,yl(this.lContainer,e,i,Ma(this.templateTNode,n)),fR(this.lContainer,i)}detach(i){return this.needsIndexUpdate||=i!==this.length-1,hR(this.lContainer,i),pR(this.lContainer,i)}create(i,e){let n=hu(this.lContainer,this.templateTNode.tView.ssrId);return bl(this.hostLView,this.templateTNode,new Sg(this.lContainer,e,i),{dehydratedView:n})}destroy(i){Nu(i[ne],i)}updateValue(i,e){this.getLView(i)[st].$implicit=e}reset(){this.needsIndexUpdate=!1}updateIndexes(){if(this.needsIndexUpdate)for(let i=0;i<this.length;i++)this.getLView(i)[st].$index=i}getLView(i){return gR(this.lContainer,i)}};function qe(t){let i=K(null),e=gi();try{let n=J(),r=n[ne],o=n[e],a=e+1,s=wu(n,a);if(o.liveCollection===void 0){let d=Ag(r,a);o.liveCollection=new kg(s,n,d)}else o.liveCollection.reset();let l=o.liveCollection;if(mR(l,t,o.trackByFn,i),l.updateIndexes(),o.hasEmptyBlock){let d=pi(),u=l.length===0;if(nn(n,d,u)){let h=e+2,_=wu(n,h);if(u){let v=Ag(r,h),w=fw(_,v,n),O=bl(n,v,void 0,{dehydratedView:w});yl(_,O,0,Ma(v,w))}else r.firstUpdatePass&&mA(_),uw(_,0)}}}finally{K(i)}}function wu(t,i){return t[i]}function fR(t,i){if(t.length<=it)return;let e=it+i,n=t[e],r=n?n[kr]:void 0;if(n&&r&&r.detachedLeaveAnimationFns&&r.detachedLeaveAnimationFns.length>0){let o=n[Yi];wk(o,r),Mo.delete(n[Qi]),r.detachedLeaveAnimationFns=void 0}}function hR(t,i){if(t.length<=it)return;let e=it+i,n=t[e],r=n?n[kr]:void 0;r&&r.leave&&r.leave.size>0&&(r.detachedLeaveAnimationFns=[])}function pR(t,i){return fl(t,i)}function gR(t,i){return dw(t,i)}function Ag(t,i){return Hd(t,i)}function R(t,i,e){let n=J(),r=pi();if(nn(n,r,i)){let o=ze(),a=va();qC(a,n,t,i,n[Be],e)}return R}function Rg(t,i,e,n,r){Lu(i,t,e,r?"class":"style",n)}function m(t,i,e,n){let r=J(),o=r[ne],a=t+Xe,s=o.firstCreatePass?vw(a,r,2,i,ZC,Sp(),e,n):o.data[a];if(fi(s)){let l=r[ui].tracingService;if(l&&l.componentCreate){let d=o.data[s.directiveStart+s.componentOffset];return l.componentCreate(Dw(d),()=>(H0(t,i,r,s,n),m))}}return H0(t,i,r,s,n),m}function H0(t,i,e,n,r){if(XC(n,e,t,i,Bw),il(n)){let o=e[ne];t_(o,e,n),wC(o,n,e)}r!=null&&Pu(e,n)}function f(){let t=ze(),i=Tt(),e=JC(i);return t.firstCreatePass&&bw(t,e),kp(e)&&Ap(),Ip(),e.classesWithoutHost!=null&&mT(e)&&Rg(t,e,J(),e.classesWithoutHost,!0),e.stylesWithoutHost!=null&&fT(e)&&Rg(t,e,J(),e.stylesWithoutHost,!1),f}function k(t,i,e,n){return m(t,i,e,n),f(),k}function Ee(t,i,e,n){let r=J(),o=r[ne],a=t+Xe,s=o.firstCreatePass?MA(a,o,2,i,e,n):o.data[a];return XC(s,r,t,i,Bw),n!=null&&Pu(r,s),Ee}function Te(){let t=Tt(),i=JC(t);return kp(i)&&Ap(),Ip(),Te}function rn(t,i,e,n){return Ee(t,i,e,n),Te(),rn}var Bw=(t,i,e,n,r)=>(Kd(!0),TC(i[Be],n,a0()));function Ue(){return J()}function Wt(t,i,e){let n=J(),r=pi();if(nn(n,r,i)){let o=ze(),a=va();YC(a,n,t,i,n[Be],e)}return Wt}var El="en-US";var _R=El;function jw(t){typeof t=="string"&&(_R=t.toLowerCase().replace(/_/g,"-"))}function E(t,i,e){let n=J(),r=ze(),o=Tt();return Hw(r,n,n[Be],o,t,i,e),E}function An(t,i,e){let n=J(),r=ze(),o=Tt();return(o.type&3||e)&&Cw(o,r,n,e,n[Be],t,i,su(o,n,i)),An}function Hw(t,i,e,n,r,o,a){let s=!0,l=null;if((n.type&3||a)&&(l??=su(n,i,o),Cw(n,t,i,a,e,r,o,l)&&(s=!1)),s){let d=n.outputs?.[r],u=n.hostDirectiveOutputs?.[r];if(u&&u.length)for(let h=0;h<u.length;h+=2){let _=u[h],v=u[h+1];l??=su(n,i,o),F0(n,i,_,v,r,l)}if(d&&d.length)for(let h of d)l??=su(n,i,o),F0(n,i,h,r,r,l)}}function S(t=1){return o0(t)}function vR(t,i){let e=null,n=sk(t);for(let r=0;r<i.length;r++){let o=i[r];if(o==="*"){e=r;continue}if(n===null?FC(t,o,!0):dk(n,o))return r}return e}function Me(t){let i=J()[Kt][Zt];if(!i.projection){let e=t?t.length:1,n=i.projection=Ay(e,null),r=n.slice(),o=i.child;for(;o!==null;){if(o.type!==128){let a=t?vR(o,t):0;a!==null&&(r[a]?r[a].projectionNext=o:n[a]=o,r[a]=o)}o=o.next}}}function ee(t,i=0,e,n,r,o){let a=J(),s=ze(),l=n?t+1:null;l!==null&&Ia(a,s,l,n,r,o,null,e);let d=Ra(s,Xe+t,16,null,e||null);d.projection===null&&(d.projection=i),Np();let h=!a[_o]||Tp();a[Kt][Zt].projection[d.projection]===null&&l!==null?bR(a,s,l):h&&!Su(d)&&Ok(s,a,d)}function bR(t,i,e){let n=Xe+e,r=i.data[n],o=t[n],a=hu(o,r.tView.ssrId),s=bl(t,r,void 0,{dehydratedView:a});yl(o,s,0,Ma(r,a))}function wt(t,i,e,n){return Tw(t,i,e,n),wt}function xe(t,i,e){return Sw(t,i,e),xe}function F(t){let i=J(),e=ze(),n=qd();ol(n+1);let r=a_(e,n);if(t.dirty&&Hy(i)===((r.metadata.flags&2)===2)){if(r.matches===null)t.reset([]);else{let o=Aw(i,n);t.reset(o,dC),t.notifyOnChanges()}return!0}return!1}function P(){return o_(J(),qd())}function Gu(t,i,e,n,r){return Ow(i,Tw(t,e,n,r)),Gu}function Di(t,i,e,n){return Ow(t,Sw(i,e,n)),Di}function xi(t=1){ol(qd()+t)}function on(t){let i=Qy();return yp(i,Xe+t)}function nu(t,i){return t<<17|i<<2}function Io(t){return t>>17&32767}function yR(t){return(t&2)==2}function CR(t,i){return t&131071|i<<17}function Og(t){return t|2}function Sa(t){return(t&131068)>>2}function Zp(t,i){return t&-131069|i<<2}function wR(t){return(t&1)===1}function Ng(t){return t|1}function DR(t,i,e,n,r,o){let a=o?i.classBindings:i.styleBindings,s=Io(a),l=Sa(a);t[n]=e;let d=!1,u;if(Array.isArray(e)){let h=e;u=h[1],(u===null||ma(h,u)>0)&&(d=!0)}else u=e;if(r)if(l!==0){let _=Io(t[s+1]);t[n+1]=nu(_,s),_!==0&&(t[_+1]=Zp(t[_+1],n)),t[s+1]=CR(t[s+1],n)}else t[n+1]=nu(s,0),s!==0&&(t[s+1]=Zp(t[s+1],n)),s=n;else t[n+1]=nu(l,0),s===0?s=n:t[l+1]=Zp(t[l+1],n),l=n;d&&(t[n+1]=Og(t[n+1])),U0(t,u,n,!0),U0(t,u,n,!1),xR(i,u,t,n,o),a=nu(s,l),o?i.classBindings=a:i.styleBindings=a}function xR(t,i,e,n,r){let o=r?t.residualClasses:t.residualStyles;o!=null&&typeof i=="string"&&ma(o,i)>=0&&(e[n+1]=Ng(e[n+1]))}function U0(t,i,e,n){let r=t[e+1],o=i===null,a=n?Io(r):Sa(r),s=!1;for(;a!==0&&(s===!1||o);){let l=t[a],d=t[a+1];ER(l,i)&&(s=!0,t[a+1]=n?Ng(d):Og(d)),a=n?Io(d):Sa(d)}s&&(t[e+1]=n?Og(r):Ng(r))}function ER(t,i){return t===null||i==null||(Array.isArray(t)?t[1]:t)===i?!0:Array.isArray(t)&&typeof i=="string"?ma(t,i)>=0:!1}var yt={textEnd:0,key:0,keyEnd:0,value:0,valueEnd:0};function Uw(t){return t.substring(yt.key,yt.keyEnd)}function MR(t){return t.substring(yt.value,yt.valueEnd)}function IR(t){return Ww(t),zw(t,Ta(t,0,yt.textEnd))}function zw(t,i){let e=yt.textEnd;return e===i?-1:(i=yt.keyEnd=TR(t,yt.key=i,e),Ta(t,i,e))}function SR(t){return Ww(t),$w(t,Ta(t,0,yt.textEnd))}function $w(t,i){let e=yt.textEnd,n=yt.key=Ta(t,i,e);return e===n?-1:(n=yt.keyEnd=kR(t,n,e),n=z0(t,n,e,58),n=yt.value=Ta(t,n,e),n=yt.valueEnd=AR(t,n,e),z0(t,n,e,59))}function Ww(t){yt.key=0,yt.keyEnd=0,yt.value=0,yt.valueEnd=0,yt.textEnd=t.length}function Ta(t,i,e){for(;i<e&&t.charCodeAt(i)<=32;)i++;return i}function TR(t,i,e){for(;i<e&&t.charCodeAt(i)>32;)i++;return i}function kR(t,i,e){let n;for(;i<e&&((n=t.charCodeAt(i))===45||n===95||(n&-33)>=65&&(n&-33)<=90||n>=48&&n<=57);)i++;return i}function z0(t,i,e,n){return i=Ta(t,i,e),i<e&&i++,i}function AR(t,i,e){let n=-1,r=-1,o=-1,a=i,s=a;for(;a<e;){let l=t.charCodeAt(a++);if(l===59)return s;l===34||l===39?s=a=$0(t,l,a,e):i===a-4&&o===85&&r===82&&n===76&&l===40?s=a=$0(t,41,a,e):l>32&&(s=a),o=r,r=n,n=l&-33}return s}function $0(t,i,e,n){let r=-1,o=e;for(;o<n;){let a=t.charCodeAt(o++);if(a==i&&r!==92)return o;a==92&&r===92?r=0:r=a}throw new Error}function Ei(t,i,e){return Gw(t,i,e,!1),Ei}function U(t,i){return Gw(t,i,null,!0),U}function p_(t){qw(Zw,RR,t,!1)}function RR(t,i){for(let e=SR(i);e>=0;e=$w(i,e))Zw(t,Uw(i),MR(i))}function Dt(t){qw(BR,OR,t,!0)}function OR(t,i){for(let e=IR(i);e>=0;e=zw(i,e))el(t,Uw(i),!0)}function Gw(t,i,e,n){let r=J(),o=ze(),a=Wd(2);if(o.firstUpdatePass&&Qw(o,t,a,n),i!==Lt&&nn(r,a,i)){let s=o.data[gi()];Kw(o,s,r,r[Be],t,r[a+1]=HR(i,e),n,a)}}function qw(t,i,e,n){let r=ze(),o=Wd(2);r.firstUpdatePass&&Qw(r,null,o,n);let a=J();if(e!==Lt&&nn(a,o,e)){let s=r.data[gi()];if(Xw(s,n)&&!Yw(r,o)){let l=n?s.classesWithoutHost:s.stylesWithoutHost;l!==null&&(e=Nd(l,e||"")),Rg(r,s,a,e,n)}else jR(r,s,a,a[Be],a[o+1],a[o+1]=VR(t,i,e),n,o)}}function Yw(t,i){return i>=t.expandoStartIndex}function Qw(t,i,e,n){let r=t.data;if(r[e+1]===null){let o=r[gi()],a=Yw(t,e);Xw(o,n)&&i===null&&!a&&(i=!1),i=NR(r,o,i,n),DR(r,o,i,e,a,n)}}function NR(t,i,e,n){let r=t0(t),o=n?i.residualClasses:i.residualStyles;if(r===null)(n?i.classBindings:i.styleBindings)===0&&(e=Kp(null,t,i,e,n),e=pl(e,i.attrs,n),o=null);else{let a=i.directiveStylingLast;if(a===-1||t[a]!==r)if(e=Kp(r,t,i,e,n),o===null){let l=FR(t,i,n);l!==void 0&&Array.isArray(l)&&(l=Kp(null,t,i,l[1],n),l=pl(l,i.attrs,n),PR(t,i,n,l))}else o=LR(t,i,n)}return o!==void 0&&(n?i.residualClasses=o:i.residualStyles=o),e}function FR(t,i,e){let n=e?i.classBindings:i.styleBindings;if(Sa(n)!==0)return t[Io(n)]}function PR(t,i,e,n){let r=e?i.classBindings:i.styleBindings;t[Io(r)]=n}function LR(t,i,e){let n,r=i.directiveEnd;for(let o=1+i.directiveStylingLast;o<r;o++){let a=t[o].hostAttrs;n=pl(n,a,e)}return pl(n,i.attrs,e)}function Kp(t,i,e,n,r){let o=null,a=e.directiveEnd,s=e.directiveStylingLast;for(s===-1?s=e.directiveStart:s++;s<a&&(o=i[s],n=pl(n,o.hostAttrs,r),o!==t);)s++;return t!==null&&(e.directiveStylingLast=s),n}function pl(t,i,e){let n=e?1:2,r=-1;if(i!==null)for(let o=0;o<i.length;o++){let a=i[o];typeof a=="number"?r=a:r===n&&(Array.isArray(t)||(t=t===void 0?[]:["",t]),el(t,a,e?!0:i[++o]))}return t===void 0?null:t}function VR(t,i,e){if(e==null||e==="")return zt;let n=[],r=Zn(e);if(Array.isArray(r))for(let o=0;o<r.length;o++)t(n,r[o],!0);else if(r instanceof Set)for(let o of r)t(n,o,!0);else if(typeof r=="object")for(let o in r)r.hasOwnProperty(o)&&t(n,o,r[o]);else typeof r=="string"&&i(n,r);return n}function Zw(t,i,e){el(t,i,Zn(e))}function BR(t,i,e){let n=String(i);n!==""&&!n.includes(" ")&&el(t,n,e)}function jR(t,i,e,n,r,o,a,s){r===Lt&&(r=zt);let l=0,d=0,u=0<r.length?r[0]:null,h=0<o.length?o[0]:null;for(;u!==null||h!==null;){let _=l<r.length?r[l+1]:void 0,v=d<o.length?o[d+1]:void 0,w=null,O;u===h?(l+=2,d+=2,_!==v&&(w=h,O=v)):h===null||u!==null&&u<h?(l+=2,w=u):(d+=2,w=h,O=v),w!==null&&Kw(t,i,e,n,w,O,a,s),u=l<r.length?r[l]:null,h=d<o.length?o[d]:null}}function Kw(t,i,e,n,r,o,a,s){if(!(i.type&3))return;let l=t.data,d=l[s+1],u=wR(d)?W0(l,i,e,r,Sa(d),a):void 0;if(!Du(u)){Du(o)||yR(d)&&(o=W0(l,null,e,r,s,a));let h=bp(gi(),e);Fk(n,a,h,r,o)}}function W0(t,i,e,n,r,o){let a=i===null,s;for(;r>0;){let l=t[r],d=Array.isArray(l),u=d?l[1]:l,h=u===null,_=e[r+1];_===Lt&&(_=h?zt:void 0);let v=h?Bd(_,n):u===n?_:void 0;if(d&&!Du(v)&&(v=Bd(l,n)),Du(v)&&(s=v,a))return s;let w=t[r+1];r=a?Io(w):Sa(w)}if(i!==null){let l=o?i.residualClasses:i.residualStyles;l!=null&&(s=Bd(l,n))}return s}function Du(t){return t!==void 0}function HR(t,i){return t==null||t===""||(typeof i=="string"?t=t+i:typeof t=="object"&&(t=Ks(Zn(t)))),t}function Xw(t,i){return(t.flags&(i?8:16))!==0}function g(t,i=""){let e=J(),n=ze(),r=t+Xe,o=n.firstCreatePass?Ra(n,r,1,i,null):n.data[r],a=UR(n,e,o,i);e[r]=a,Zd()&&Jg(n,e,a,o),_a(o,!1)}var UR=(t,i,e,n)=>(Kd(!0),XT(i[Be],n));function Jw(t,i,e,n=""){return nn(t,pi(),e)?i+ua(e)+n:Lt}function zR(t,i,e,n,r,o=""){let a=Zy(),s=IA(t,a,e,r);return Wd(2),s?i+ua(e)+n+ua(r)+o:Lt}function se(t){return be("",t),se}function be(t,i,e){let n=J(),r=Jw(n,t,i,e);return r!==Lt&&eD(n,gi(),r),be}function nr(t,i,e,n,r){let o=J(),a=zR(o,t,i,e,n,r);return a!==Lt&&eD(o,gi(),a),nr}function eD(t,i,e){let n=bp(i,t);JT(t[Be],n,e)}function Je(t,i,e){d_(i)&&(i=i());let n=J(),r=pi();if(nn(n,r,i)){let o=ze(),a=va();qC(a,n,t,i,n[Be],e)}return Je}function ke(t,i){let e=d_(t);return e&&t.set(i),e}function et(t,i){let e=J(),n=ze(),r=Tt();return Hw(n,e,e[Be],r,t,i),et}function Mi(t){return nn(J(),pi(),t)?ua(t):Lt}function g_(t,i,e=""){return Jw(J(),t,i,e)}function __(t,i,e){let n=$d()+t,r=J();return r[n]===Lt?r_(r,n,i(e,r)):yw(r,n)}function G0(t,i,e){let n=ze();n.firstCreatePass&&tD(i,n.data,n.blueprint,hi(t),e)}function tD(t,i,e,n,r){if(t=Nt(t),Array.isArray(t))for(let o=0;o<t.length;o++)tD(t[o],i,e,n,r);else{let o=ze(),a=J(),s=Tt(),l=ho(t)?t:Nt(t.provide),d=fp(t),u=s.providerIndexes&1048575,h=s.directiveStart,_=s.providerIndexes>>20;if(ho(t)||!t.multi){let v=new Eo(d,r,Ce,null),w=Jp(l,i,r?u:u+_,h);w===-1?(tg(mu(s,a),o,l),Xp(o,t,i.length),i.push(l),s.directiveStart++,s.directiveEnd++,r&&(s.providerIndexes+=1048576),e.push(v),a.push(v)):(e[w]=v,a[w]=v)}else{let v=Jp(l,i,u+_,h),w=Jp(l,i,u,u+_),O=v>=0&&e[v],B=w>=0&&e[w];if(r&&!B||!r&&!O){tg(mu(s,a),o,l);let Q=GR(r?WR:$R,e.length,r,n,d,t);!r&&B&&(e[w].providerFactory=Q),Xp(o,t,i.length,0),i.push(l),s.directiveStart++,s.directiveEnd++,r&&(s.providerIndexes+=1048576),e.push(Q),a.push(Q)}else{let Q=nD(e[r?w:v],d,!r&&n);Xp(o,t,v>-1?v:w,Q)}!r&&n&&B&&e[w].componentProviders++}}}function Xp(t,i,e,n){let r=ho(i),o=Ly(i);if(r||o){let l=(o?Nt(i.useClass):i).prototype.ngOnDestroy;if(l){let d=t.destroyHooks||(t.destroyHooks=[]);if(!r&&i.multi){let u=d.indexOf(e);u===-1?d.push(e,[n,l]):d[u+1].push(n,l)}else d.push(e,l)}}}function nD(t,i,e){return e&&t.componentProviders++,t.multi.push(i)-1}function Jp(t,i,e,n){for(let r=e;r<n;r++)if(i[r]===t)return r;return-1}function $R(t,i,e,n,r){return Fg(this.multi,[])}function WR(t,i,e,n,r){let o=this.multi,a;if(this.providerFactory){let s=this.providerFactory.componentProviders,l=dl(n,n[ne],this.providerFactory.index,r);a=l.slice(0,s),Fg(o,a);for(let d=s;d<l.length;d++)a.push(l[d])}else a=[],Fg(o,a);return a}function Fg(t,i){for(let e=0;e<t.length;e++){let n=t[e];i.push(n())}return i}function GR(t,i,e,n,r,o){let a=new Eo(t,e,Ce,null);return a.multi=[],a.index=i,a.componentProviders=0,nD(a,r,n&&!e),a}function Pe(t,i){return e=>{e.providersResolver=(n,r)=>G0(n,r?r(t):t,!1),i&&(e.viewProvidersResolver=(n,r)=>G0(n,r?r(i):i,!0))}}function v_(t,i){let e=$d()+t,n=J();return n[e]===Lt?r_(n,e,i()):yw(n,e)}function qR(t,i){let e=t[i];return e===Lt?void 0:e}function YR(t,i,e,n,r,o){let a=i+e;return nn(t,a,r)?r_(t,a+1,o?n.call(o,r):n(r)):qR(t,a+1)}function Ml(t,i){let e=ze(),n,r=t+Xe;e.firstCreatePass?(n=QR(i,e.pipeRegistry),e.data[r]=n,n.onDestroy&&(e.destroyHooks??=[]).push(r,n.onDestroy)):n=e.data[r];let o=n.factory||(n.factory=xr(n.type,!0)),a,s=Qt(Ce);try{let l=uu(!1),d=o();return uu(l),Cp(e,J(),r,d),d}finally{Qt(s)}}function QR(t,i){if(i)for(let e=i.length-1;e>=0;e--){let n=i[e];if(t===n.name)return n}}function Il(t,i,e){let n=t+Xe,r=J(),o=yp(r,n);return ZR(r,n)?YR(r,$d(),i,o.transform,e,o):o.transform(e)}function ZR(t,i){return t[ne].data[i].pure}function qu(t,i){return Vu(t,i)}var xu=class{ngModuleFactory;componentFactories;constructor(i,e){this.ngModuleFactory=i,this.componentFactories=e}},b_=(()=>{class t{compileModuleSync(e){return new yu(e)}compileModuleAsync(e){return Promise.resolve(this.compileModuleSync(e))}compileModuleAndAllComponentsSync(e){let n=this.compileModuleSync(e),r=rp(e),o=OC(r.declarations).reduce((a,s)=>{let l=ci(s);return l&&a.push(new Nr(l)),a},[]);return new xu(n,o)}compileModuleAndAllComponentsAsync(e){return Promise.resolve(this.compileModuleAndAllComponentsSync(e))}clearCache(){}clearCacheFor(e){}getModuleId(e){}static \u0275fac=function(n){return new(n||t)};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var iD=(()=>{class t{applicationErrorHandler=c(gn);appRef=c(_n);taskService=c(Ki);ngZone=c(L);zonelessEnabled=c(al);tracing=c(Kn,{optional:!0});zoneIsDefined=typeof Zone<"u"&&!!Zone.root.run;schedulerTickApplyArgs=[{data:{__scheduler_tick__:!0}}];subscriptions=new ie;angularZoneId=this.zoneIsDefined?this.ngZone._inner?.get(Qs):null;scheduleInRootZone=!this.zonelessEnabled&&this.zoneIsDefined&&(c(zp,{optional:!0})??!1);cancelScheduledCallback=null;useMicrotaskScheduler=!1;runningTick=!1;pendingRenderTaskId=null;constructor(){this.subscriptions.add(this.appRef.afterTick.subscribe(()=>{let e=this.taskService.add();if(!this.runningTick&&(this.cleanup(),!this.zonelessEnabled||this.appRef.includeAllTestViews)){this.taskService.remove(e);return}this.switchToMicrotaskScheduler(),this.taskService.remove(e)})),this.subscriptions.add(this.ngZone.onUnstable.subscribe(()=>{this.runningTick||this.cleanup()}))}switchToMicrotaskScheduler(){this.ngZone.runOutsideAngular(()=>{let e=this.taskService.add();this.useMicrotaskScheduler=!0,queueMicrotask(()=>{this.useMicrotaskScheduler=!1,this.taskService.remove(e)})})}notify(e){if(!this.zonelessEnabled&&e===5)return;switch(e){case 0:{this.appRef.dirtyFlags|=2;break}case 3:case 2:case 4:case 5:case 1:{this.appRef.dirtyFlags|=4;break}case 6:{this.appRef.dirtyFlags|=2;break}case 12:{this.appRef.dirtyFlags|=16;break}case 13:{this.appRef.dirtyFlags|=2;break}case 11:break;default:this.appRef.dirtyFlags|=8}if(this.appRef.tracingSnapshot=this.tracing?.snapshot(this.appRef.tracingSnapshot)??null,!this.shouldScheduleTick())return;let n=this.useMicrotaskScheduler?d0:Bp;this.pendingRenderTaskId=this.taskService.add(),this.scheduleInRootZone?this.cancelScheduledCallback=Zone.root.run(()=>n(()=>this.tick())):this.cancelScheduledCallback=this.ngZone.runOutsideAngular(()=>n(()=>this.tick()))}shouldScheduleTick(){return!(this.appRef.destroyed||this.pendingRenderTaskId!==null||this.runningTick||this.appRef._runningTick||!this.zonelessEnabled&&this.zoneIsDefined&&Zone.current.get(Qs+this.angularZoneId))}tick(){if(this.runningTick||this.appRef.destroyed)return;if(this.appRef.dirtyFlags===0){this.cleanup();return}!this.zonelessEnabled&&this.appRef.dirtyFlags&7&&(this.appRef.dirtyFlags|=1);let e=this.taskService.add();try{this.ngZone.run(()=>{this.runningTick=!0,this.appRef._tick()},void 0,this.schedulerTickApplyArgs)}catch(n){this.applicationErrorHandler(n)}finally{this.taskService.remove(e),this.cleanup()}}ngOnDestroy(){this.subscriptions.unsubscribe(),this.cleanup()}cleanup(){if(this.runningTick=!1,this.cancelScheduledCallback?.(),this.cancelScheduledCallback=null,this.pendingRenderTaskId!==null){let e=this.pendingRenderTaskId;this.pendingRenderTaskId=null,this.taskService.remove(e)}}static \u0275fac=function(n){return new(n||t)};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function rD(){return[{provide:li,useExisting:iD},{provide:L,useClass:Zs},{provide:al,useValue:!0}]}function KR(){return typeof $localize<"u"&&$localize.locale||El}var Na=new b("",{factory:()=>c(Na,{optional:!0,skipSelf:!0})||KR()});var Yu=class{destroyed=!1;listeners=null;errorHandler=c($t,{optional:!0});destroyRef=c(Ft);constructor(){this.destroyRef.onDestroy(()=>{this.destroyed=!0,this.listeners=null})}subscribe(i){if(this.destroyed)throw new N(953,!1);return(this.listeners??=[]).push(i),{unsubscribe:()=>{let e=this.listeners?.indexOf(i);e!==void 0&&e!==-1&&this.listeners?.splice(e,1)}}}emit(i){if(this.destroyed){console.warn(Mn(953,!1));return}if(this.listeners===null)return;let e=K(null);try{for(let n of this.listeners)try{n(i)}catch(r){this.errorHandler?.handleError(r)}}finally{K(e)}}};function rt(t){return by(t)}function gt(t,i){return Ns(t,i?.equal)}var Ku=Symbol("InputSignalNode#UNSET"),uD=X(C({},Fs),{transformFn:void 0,applyValueToInputSignal(t,i){io(t,i)}});function mD(t,i){let e=Object.create(uD);e.value=t,e.transformFn=i?.transform;function n(){if(gr(e),e.value===Ku){let r=null;throw new N(-950,r)}return e.value}return n[ut]=e,n}var Ii=class{attributeName;constructor(i){this.attributeName=i}__NG_ELEMENT_ID__=()=>Eu(this.attributeName);toString(){return`HostAttributeToken ${this.attributeName}`}};function oD(t,i){return mD(t,i)}function pO(t){return mD(Ku,t)}var ir=(oD.required=pO,oD);function aD(t,i){return s_(i)}function gO(t,i){return l_(i)}var Xn=(aD.required=gO,aD);function sD(t,i){return s_(i)}function _O(t,i){return l_(i)}var fD=(sD.required=_O,sD);function hD(t,i){let e=Object.create(uD),n=new Yu;e.value=t;function r(){return gr(e),lD(e.value),e.value}return r[ut]=e,r.asReadonly=Xd.bind(r),r.set=o=>{e.equal(e.value,o)||(io(e,o),n.emit(o))},r.update=o=>{lD(e.value),r.set(o(e.value))},r.subscribe=n.subscribe.bind(n),r.destroyRef=n.destroyRef,r}function lD(t){if(t===Ku)throw new N(952,!1)}function cD(t,i){return hD(t,i)}function vO(t){return hD(Ku,t)}var Le=(cD.required=vO,cD);var C_=new b(""),bO=new b("");function Sl(t){return!t.moduleRef}function yO(t){let i=Sl(t)?t.r3Injector:t.moduleRef.injector,e=i.get(L);return e.run(()=>{Sl(t)?t.r3Injector.resolveInjectorInitializers():t.moduleRef.resolveInjectorInitializers();let n=i.get(gn),r;if(e.runOutsideAngular(()=>{r=e.onError.subscribe({next:n})}),Sl(t)){let o=()=>i.destroy(),a=t.platformInjector.get(C_);a.add(o),i.onDestroy(()=>{r.unsubscribe(),a.delete(o)})}else{let o=()=>t.moduleRef.destroy(),a=t.platformInjector.get(C_);a.add(o),t.moduleRef.onDestroy(()=>{cl(t.allPlatformModules,t.moduleRef),r.unsubscribe(),a.delete(o)})}return wO(n,e,()=>{let o=i.get(Ki),a=o.add(),s=i.get(f_);return s.runInitializers(),s.donePromise.then(()=>{let l=i.get(Na,El);if(jw(l||El),!i.get(bO,!0))return Sl(t)?i.get(_n):(t.allPlatformModules.push(t.moduleRef),t.moduleRef);if(Sl(t)){let u=i.get(_n);return t.rootComponent!==void 0&&u.bootstrap(t.rootComponent),u}else return CO?.(t.moduleRef,t.allPlatformModules),t.moduleRef}).finally(()=>{o.remove(a)})})})}var CO;function wO(t,i,e){try{let n=e();return tr(n)?n.catch(r=>{throw i.runOutsideAngular(()=>t(r)),r}):n}catch(n){throw i.runOutsideAngular(()=>t(n)),n}}var Qu=null;function DO(t=[],i){return $.create({name:i,providers:[{provide:tl,useValue:"platform"},{provide:C_,useValue:new Set([()=>Qu=null])},...t]})}function xO(t=[]){if(Qu)return Qu;let i=DO(t);return Qu=i,Lw(),EO(i),i}function EO(t){let i=t.get(Mu,null);bt(t,()=>{i?.forEach(e=>e())})}var MO=1e4;var CY=MO-1e3;var we=(()=>{class t{static __NG_ELEMENT_ID__=IO}return t})();function IO(t){return SO(Tt(),J(),(t&16)===16)}function SO(t,i,e){if(fi(t)&&!e){let n=kn(t.index,i);return new Or(n,n)}else if(t.type&175){let n=i[Kt];return new Or(n,i)}return null}function pD(t){let{rootComponent:i,appProviders:e,platformProviders:n,platformRef:r}=t;Ne(De.BootstrapApplicationStart);try{let o=r?.injector??xO(n),a=[rD(),m0,...e||[]],s=new hl({providers:a,parent:o,debugName:"",runEnvironmentInitializers:!1});return yO({r3Injector:s.injector,platformInjector:o,rootComponent:i})}catch(o){return Promise.reject(o)}finally{Ne(De.BootstrapApplicationEnd)}}function te(t){return typeof t=="boolean"?t:t!=null&&t!=="false"}function Si(t,i=NaN){return!isNaN(parseFloat(t))&&!isNaN(Number(t))?Number(t):i}var y_=Symbol("NOT_SET"),gD=new Set,TO=X(C({},Fs),{kind:"afterRenderEffectPhase",consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!0,value:y_,cleanup:null,consumerMarkedDirty(){if(this.sequence.impl.executing){if(this.sequence.lastPhase===null||this.sequence.lastPhase<this.phase)return;this.sequence.erroredOrDestroyed=!0}this.sequence.scheduler.notify(7)},phaseFn(t){if(this.sequence.lastPhase=this.phase,!this.dirty)return this.signal;if(this.dirty=!1,this.value!==y_&&!ea(this))return this.signal;try{for(let r of this.cleanup??gD)r()}finally{this.cleanup?.clear()}let i=[];t!==void 0&&i.push(t),i.push(this.registerCleanupFn);let e=_r(this),n;try{n=this.userFn.apply(null,i)}finally{no(this,e)}return(this.value===y_||!this.equal(this.value,n))&&(this.value=n,this.version++),this.signal}}),w_=class extends ul{scheduler;lastPhase=null;nodes=[void 0,void 0,void 0,void 0];onDestroyFns=null;constructor(i,e,n,r,o,a=null){super(i,[void 0,void 0,void 0,void 0],n,!1,o.get(Ft),a),this.scheduler=r;for(let s of Zg){let l=e[s];if(l===void 0)continue;let d=Object.create(TO);d.sequence=this,d.phase=s,d.userFn=l,d.dirty=!0,d.signal=()=>(gr(d),d.value),d.signal[ut]=d,d.registerCleanupFn=u=>(d.cleanup??=new Set).add(u),this.nodes[s]=d,this.hooks[s]=u=>d.phaseFn(u)}}afterRun(){super.afterRun(),this.lastPhase=null}destroy(){if(this.onDestroyFns!==null)for(let i of this.onDestroyFns)i();super.destroy();for(let i of this.nodes)if(i)try{for(let e of i.cleanup??gD)e()}finally{vr(i)}}};function _D(t,i){let e=i?.injector??c($),n=e.get(li),r=e.get(Ou),o=e.get(Kn,null,{optional:!0});r.impl??=e.get(Kg);let a=t;typeof a=="function"&&(a={mixedReadWrite:t});let s=e.get(ya,null,{optional:!0}),l=new w_(r.impl,[a.earlyRead,a.write,a.mixedReadWrite,a.read],s?.view,n,e,o?.snapshot(null));return r.impl.register(l),l}function Xu(t,i){let e=ci(t),n=i.elementInjector||fa();return new Nr(e).create(n,i.projectableNodes,i.hostElement,i.environmentInjector,i.directives,i.bindings)}function vD(t){let i=ci(t);if(!i)return null;let e=new Nr(i);return{get selector(){return e.selector},get type(){return e.componentType},get inputs(){return e.inputs},get outputs(){return e.outputs},get ngContentSelectors(){return e.ngContentSelectors},get isStandalone(){return i.standalone},get isSignal(){return i.signals}}}var bD=null;function Rn(){return bD}function D_(t){bD??=t}var Tl=class{},rr=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(n){return new(n||t)};static \u0275prov=y({token:t,factory:()=>c(yD),providedIn:"platform"})}return t})(),x_=new b(""),yD=(()=>{class t extends rr{_location;_history;_doc=c(Y);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return Rn().getBaseHref(this._doc)}onPopState(e){let n=Rn().getGlobalEventTarget(this._doc,"window");return n.addEventListener("popstate",e,!1),()=>n.removeEventListener("popstate",e)}onHashChange(e){let n=Rn().getGlobalEventTarget(this._doc,"window");return n.addEventListener("hashchange",e,!1),()=>n.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,n,r){this._history.pushState(e,n,r)}replaceState(e,n,r){this._history.replaceState(e,n,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(n){return new(n||t)};static \u0275prov=y({token:t,factory:()=>new t,providedIn:"platform"})}return t})();function Ju(t,i){return t?i?t.endsWith("/")?i.startsWith("/")?t+i.slice(1):t+i:i.startsWith("/")?t+i:`${t}/${i}`:t:i}function CD(t){let i=t.search(/#|\?|$/);return t[i-1]==="/"?t.slice(0,i-1)+t.slice(i):t}function Jn(t){return t&&t[0]!=="?"?`?${t}`:t}var or=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(n){return new(n||t)};static \u0275prov=y({token:t,factory:()=>c(tm),providedIn:"root"})}return t})(),em=new b(""),tm=(()=>{class t extends or{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,n){super(),this._platformLocation=e,this._baseHref=n??this._platformLocation.getBaseHrefFromDOM()??c(Y).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return Ju(this._baseHref,e)}path(e=!1){let n=this._platformLocation.pathname+Jn(this._platformLocation.search),r=this._platformLocation.hash;return r&&e?`${n}${r}`:n}pushState(e,n,r,o){let a=this.prepareExternalUrl(r+Jn(o));this._platformLocation.pushState(e,n,a)}replaceState(e,n,r,o){let a=this.prepareExternalUrl(r+Jn(o));this._platformLocation.replaceState(e,n,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(n){return new(n||t)(z(rr),z(em,8))};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Ti=(()=>{class t{_subject=new x;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let n=this._locationStrategy.getBaseHref();this._basePath=RO(CD(wD(n))),this._locationStrategy.onPopState(r=>{this._subject.next({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,n=""){return this.path()==this.normalize(e+Jn(n))}normalize(e){return t.stripTrailingSlash(AO(this._basePath,wD(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,n="",r=null){this._locationStrategy.pushState(r,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+Jn(n)),r)}replaceState(e,n="",r=null){this._locationStrategy.replaceState(r,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+Jn(n)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(n=>{this._notifyUrlChangeListeners(n.url,n.state)}),()=>{let n=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(n,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",n){this._urlChangeListeners.forEach(r=>r(e,n))}subscribe(e,n,r){return this._subject.subscribe({next:e,error:n??void 0,complete:r??void 0})}static normalizeQueryParams=Jn;static joinWithSlash=Ju;static stripTrailingSlash=CD;static \u0275fac=function(n){return new(n||t)(z(or))};static \u0275prov=y({token:t,factory:()=>kO(),providedIn:"root"})}return t})();function kO(){return new Ti(z(or))}function AO(t,i){if(!t||!i.startsWith(t))return i;let e=i.substring(t.length);return e===""||["/",";","?","#"].includes(e[0])?e:i}function wD(t){return t.replace(/\/index.html$/,"")}function RO(t){if(new RegExp("^(https?:)?//").test(t)){let[,e]=t.split(/\/\/[^\/]+/);return e}return t}var I_=(()=>{class t extends or{_platformLocation;_baseHref="";_removeListenerFns=[];constructor(e,n){super(),this._platformLocation=e,n!=null&&(this._baseHref=n)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}path(e=!1){let n=this._platformLocation.hash??"#";return n.length>0?n.substring(1):n}prepareExternalUrl(e){let n=Ju(this._baseHref,e);return n.length>0?"#"+n:n}pushState(e,n,r,o){let a=this.prepareExternalUrl(r+Jn(o))||this._platformLocation.pathname;this._platformLocation.pushState(e,n,a)}replaceState(e,n,r,o){let a=this.prepareExternalUrl(r+Jn(o))||this._platformLocation.pathname;this._platformLocation.replaceState(e,n,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(n){return new(n||t)(z(rr),z(em,8))};static \u0275prov=y({token:t,factory:t.\u0275fac})}return t})();var S_=(()=>{class t{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;injector=c($);constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let n=this._viewContainerRef;if(this._viewRef&&n.remove(n.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let r=this._createContextForwardProxy();this._viewRef=n.createEmbeddedView(this.ngTemplateOutlet,r,{injector:this._getInjector()})}}_getInjector(){return this.ngTemplateOutletInjector==="outlet"?this.injector:this.ngTemplateOutletInjector??void 0}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,n,r)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,n,r):!1,get:(e,n,r)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,n,r)}})}static \u0275fac=function(n){return new(n||t)(Ce(Ct))};static \u0275dir=A({type:t,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[Fe]})}return t})();function NO(t,i){return new N(2100,!1)}var E_=class{createSubscription(i,e,n){return rt(()=>i.subscribe({next:e,error:n}))}dispose(i){rt(()=>i.unsubscribe())}},M_=class{createSubscription(i,e,n){return i.then(r=>e?.(r),r=>n?.(r)),{unsubscribe:()=>{e=null,n=null}}}dispose(i){i.unsubscribe()}},FO=new M_,PO=new E_,T_=(()=>{class t{_ref;_latestValue=null;markForCheckOnValueUpdate=!0;_subscription=null;_obj=null;_strategy=null;applicationErrorHandler=c(gn);constructor(e){this._ref=e}ngOnDestroy(){this._subscription&&this._dispose(),this._ref=null}transform(e){if(!this._obj){if(e)try{this.markForCheckOnValueUpdate=!1,this._subscribe(e)}finally{this.markForCheckOnValueUpdate=!0}return this._latestValue}return e!==this._obj?(this._dispose(),this.transform(e)):this._latestValue}_subscribe(e){this._obj=e,this._strategy=this._selectStrategy(e),this._subscription=this._strategy.createSubscription(e,n=>this._updateLatestValue(e,n),n=>this.applicationErrorHandler(n))}_selectStrategy(e){if(tr(e))return FO;if(Uu(e))return PO;throw NO(t,e)}_dispose(){this._strategy.dispose(this._subscription),this._latestValue=null,this._subscription=null,this._obj=null}_updateLatestValue(e,n){e===this._obj&&(this._latestValue=n,this.markForCheckOnValueUpdate&&this._ref?.markForCheck())}static \u0275fac=function(n){return new(n||t)(Ce(we,16))};static \u0275pipe=c_({name:"async",type:t,pure:!1})}return t})();var Pr=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=H({type:t});static \u0275inj=j({})}return t})();function kl(t,i){i=encodeURIComponent(i);for(let e of t.split(";")){let n=e.indexOf("="),[r,o]=n==-1?[e,""]:[e.slice(0,n),e.slice(n+1)];if(r.trim()===i)return decodeURIComponent(o)}return null}var ko=class{};var A_="browser";function DD(t){return t===A_}var R_=(()=>{class t{static \u0275prov=y({token:t,providedIn:"root",factory:()=>new k_(c(Y),window)})}return t})(),k_=class{document;window;offset=()=>[0,0];constructor(i,e){this.document=i,this.window=e}setOffset(i){Array.isArray(i)?this.offset=()=>i:this.offset=i}getScrollPosition(){return[this.window.scrollX,this.window.scrollY]}scrollToPosition(i,e){this.window.scrollTo(X(C({},e),{left:i[0],top:i[1]}))}scrollToAnchor(i,e){let n=VO(this.document,i);n&&(this.scrollToElement(n,e),n.focus())}setHistoryScrollRestoration(i){try{this.window.history.scrollRestoration=i}catch{console.warn(Mn(2400,!1))}}scrollToElement(i,e){let n=i.getBoundingClientRect(),r=n.left+this.window.pageXOffset,o=n.top+this.window.pageYOffset,a=this.offset();this.window.scrollTo(X(C({},e),{left:r-a[0],top:o-a[1]}))}};function VO(t,i){let e=t.getElementById(i)||t.getElementsByName(i)[0];if(e)return e;if(typeof t.createTreeWalker=="function"&&t.body&&typeof t.body.attachShadow=="function"){let n=t.createTreeWalker(t.body,NodeFilter.SHOW_ELEMENT),r=n.currentNode;for(;r;){let o=r.shadowRoot;if(o){let a=o.getElementById(i)||o.querySelector(`[name="${i}"]`);if(a)return a}r=n.nextNode()}}return null}var Al=class{_doc;constructor(i){this._doc=i}manager},nm=(()=>{class t extends Al{constructor(e){super(e)}supports(e){return!0}addEventListener(e,n,r,o){return e.addEventListener(n,r,o),()=>this.removeEventListener(e,n,r,o)}removeEventListener(e,n,r,o){return e.removeEventListener(n,r,o)}static \u0275fac=function(n){return new(n||t)(z(Y))};static \u0275prov=y({token:t,factory:t.\u0275fac})}return t})(),om=new b(""),P_=(()=>{class t{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,n){this._zone=n,e.forEach(a=>{a.manager=this});let r=e.filter(a=>!(a instanceof nm));this._plugins=r.slice().reverse();let o=e.find(a=>a instanceof nm);o&&this._plugins.push(o)}addEventListener(e,n,r,o){return this._findPluginFor(n).addEventListener(e,n,r,o)}getZone(){return this._zone}_findPluginFor(e){let n=this._eventNameToPlugin.get(e);if(n)return n;if(n=this._plugins.find(o=>o.supports(e)),!n)throw new N(5101,!1);return this._eventNameToPlugin.set(e,n),n}static \u0275fac=function(n){return new(n||t)(z(om),z(L))};static \u0275prov=y({token:t,factory:t.\u0275fac})}return t})(),O_="ng-app-id";function xD(t){for(let i of t)i.remove()}function ED(t,i){let e=i.createElement("style");return e.textContent=t,e}function BO(t,i,e,n){let r=t.head?.querySelectorAll(`style[${O_}="${i}"],link[${O_}="${i}"]`);if(r)for(let o of r)o.removeAttribute(O_),o instanceof HTMLLinkElement?n.set(o.href.slice(o.href.lastIndexOf("/")+1),{usage:0,elements:[o]}):o.textContent&&e.set(o.textContent,{usage:0,elements:[o]})}function F_(t,i){let e=i.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",t),e}var L_=(()=>{class t{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(e,n,r,o={}){this.doc=e,this.appId=n,this.nonce=r,BO(e,n,this.inline,this.external),this.hosts.add(e.head)}addStyles(e,n){for(let r of e)this.addUsage(r,this.inline,ED);n?.forEach(r=>this.addUsage(r,this.external,F_))}removeStyles(e,n){for(let r of e)this.removeUsage(r,this.inline);n?.forEach(r=>this.removeUsage(r,this.external))}addUsage(e,n,r){let o=n.get(e);o?o.usage++:n.set(e,{usage:1,elements:[...this.hosts].map(a=>this.addElement(a,r(e,this.doc)))})}removeUsage(e,n){let r=n.get(e);r&&(r.usage--,r.usage<=0&&(xD(r.elements),n.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])xD(e);this.hosts.clear()}addHost(e){this.hosts.add(e);for(let[n,{elements:r}]of this.inline)r.push(this.addElement(e,ED(n,this.doc)));for(let[n,{elements:r}]of this.external)r.push(this.addElement(e,F_(n,this.doc)))}removeHost(e){this.hosts.delete(e)}addElement(e,n){return this.nonce&&n.setAttribute("nonce",this.nonce),e.appendChild(n)}static \u0275fac=function(n){return new(n||t)(z(Y),z(Fr),z(Aa,8),z(So))};static \u0275prov=y({token:t,factory:t.\u0275fac})}return t})(),N_={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},V_=/%COMP%/g;var ID="%COMP%",jO=`_nghost-${ID}`,HO=`_ngcontent-${ID}`,UO=!0,zO=new b("",{factory:()=>UO});function $O(t){return HO.replace(V_,t)}function WO(t){return jO.replace(V_,t)}function SD(t,i){return i.map(e=>e.replace(V_,t))}var B_=(()=>{class t{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;constructor(e,n,r,o,a,s,l=null,d=null){this.eventManager=e,this.sharedStylesHost=n,this.appId=r,this.removeStylesOnCompDestroy=o,this.doc=a,this.ngZone=s,this.nonce=l,this.tracingService=d,this.defaultRenderer=new Rl(e,a,s,this.tracingService)}createRenderer(e,n){if(!e||!n)return this.defaultRenderer;let r=this.getOrCreateRenderer(e,n);return r instanceof rm?r.applyToHost(e):r instanceof Ol&&r.applyStyles(),r}getOrCreateRenderer(e,n){let r=this.rendererByCompId,o=r.get(n.id);if(!o){let a=this.doc,s=this.ngZone,l=this.eventManager,d=this.sharedStylesHost,u=this.removeStylesOnCompDestroy,h=this.tracingService;switch(n.encapsulation){case Qn.Emulated:o=new rm(l,d,n,this.appId,u,a,s,h);break;case Qn.ShadowDom:return new im(l,e,n,a,s,this.nonce,h,d);case Qn.ExperimentalIsolatedShadowDom:return new im(l,e,n,a,s,this.nonce,h);default:o=new Ol(l,d,n,u,a,s,h);break}r.set(n.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(n){return new(n||t)(z(P_),z(L_),z(Fr),z(zO),z(Y),z(L),z(Aa),z(Kn,8))};static \u0275prov=y({token:t,factory:t.\u0275fac})}return t})(),Rl=class{eventManager;doc;ngZone;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(i,e,n,r){this.eventManager=i,this.doc=e,this.ngZone=n,this.tracingService=r}destroy(){}destroyNode=null;createElement(i,e){return e?this.doc.createElementNS(N_[e]||e,i):this.doc.createElement(i)}createComment(i){return this.doc.createComment(i)}createText(i){return this.doc.createTextNode(i)}appendChild(i,e){(MD(i)?i.content:i).appendChild(e)}insertBefore(i,e,n){i&&(MD(i)?i.content:i).insertBefore(e,n)}removeChild(i,e){e.remove()}selectRootElement(i,e){let n=typeof i=="string"?this.doc.querySelector(i):i;if(!n)throw new N(-5104,!1);return e||(n.textContent=""),n}parentNode(i){return i.parentNode}nextSibling(i){return i.nextSibling}setAttribute(i,e,n,r){if(r){e=r+":"+e;let o=N_[r];o?i.setAttributeNS(o,e,n):i.setAttribute(e,n)}else i.setAttribute(e,n)}removeAttribute(i,e,n){if(n){let r=N_[n];r?i.removeAttributeNS(r,e):i.removeAttribute(`${n}:${e}`)}else i.removeAttribute(e)}addClass(i,e){i.classList.add(e)}removeClass(i,e){i.classList.remove(e)}setStyle(i,e,n,r){r&(bi.DashCase|bi.Important)?i.style.setProperty(e,n,r&bi.Important?"important":""):i.style[e]=n}removeStyle(i,e,n){n&bi.DashCase?i.style.removeProperty(e):i.style[e]=""}setProperty(i,e,n){i!=null&&(i[e]=n)}setValue(i,e){i.nodeValue=e}listen(i,e,n,r){if(typeof i=="string"&&(i=Rn().getGlobalEventTarget(this.doc,i),!i))throw new N(5102,!1);let o=this.decoratePreventDefault(n);return this.tracingService?.wrapEventListener&&(o=this.tracingService.wrapEventListener(i,e,o)),this.eventManager.addEventListener(i,e,o,r)}decoratePreventDefault(i){return e=>{if(e==="__ngUnwrap__")return i;i(e)===!1&&e.preventDefault()}}};function MD(t){return t.tagName==="TEMPLATE"&&t.content!==void 0}var im=class extends Rl{hostEl;sharedStylesHost;shadowRoot;constructor(i,e,n,r,o,a,s,l){super(i,r,o,s),this.hostEl=e,this.sharedStylesHost=l,this.shadowRoot=e.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let d=n.styles;d=SD(n.id,d);for(let h of d){let _=document.createElement("style");a&&_.setAttribute("nonce",a),_.textContent=h,this.shadowRoot.appendChild(_)}let u=n.getExternalStyles?.();if(u)for(let h of u){let _=F_(h,r);a&&_.setAttribute("nonce",a),this.shadowRoot.appendChild(_)}}nodeOrShadowRoot(i){return i===this.hostEl?this.shadowRoot:i}appendChild(i,e){return super.appendChild(this.nodeOrShadowRoot(i),e)}insertBefore(i,e,n){return super.insertBefore(this.nodeOrShadowRoot(i),e,n)}removeChild(i,e){return super.removeChild(null,e)}parentNode(i){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(i)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},Ol=class extends Rl{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(i,e,n,r,o,a,s,l){super(i,o,a,s),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=r;let d=n.styles;this.styles=l?SD(l,d):d,this.styleUrls=n.getExternalStyles?.(l)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&Mo.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},rm=class extends Ol{contentAttr;hostAttr;constructor(i,e,n,r,o,a,s,l){let d=r+"-"+n.id;super(i,e,n,o,a,s,l,d),this.contentAttr=$O(d),this.hostAttr=WO(d)}applyToHost(i){this.applyStyles(),this.setAttribute(i,this.hostAttr,"")}createElement(i,e){let n=super.createElement(i,e);return super.setAttribute(n,this.contentAttr,""),n}};var am=class t extends Tl{supportsDOMEvents=!0;static makeCurrent(){D_(new t)}onAndCancel(i,e,n,r){return i.addEventListener(e,n,r),()=>{i.removeEventListener(e,n,r)}}dispatchEvent(i,e){i.dispatchEvent(e)}remove(i){i.remove()}createElement(i,e){return e=e||this.getDefaultDocument(),e.createElement(i)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(i){return i.nodeType===Node.ELEMENT_NODE}isShadowRoot(i){return i instanceof DocumentFragment}getGlobalEventTarget(i,e){return e==="window"?window:e==="document"?i:e==="body"?i.body:null}getBaseHref(i){let e=GO();return e==null?null:qO(e)}resetBaseElement(){Nl=null}getUserAgent(){return window.navigator.userAgent}getCookie(i){return kl(document.cookie,i)}},Nl=null;function GO(){return Nl=Nl||document.head.querySelector("base"),Nl?Nl.getAttribute("href"):null}function qO(t){return new URL(t,document.baseURI).pathname}var YO=(()=>{class t{build(){return new XMLHttpRequest}static \u0275fac=function(n){return new(n||t)};static \u0275prov=y({token:t,factory:t.\u0275fac})}return t})(),TD=["alt","control","meta","shift"],QO={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},ZO={alt:t=>t.altKey,control:t=>t.ctrlKey,meta:t=>t.metaKey,shift:t=>t.shiftKey},kD=(()=>{class t extends Al{constructor(e){super(e)}supports(e){return t.parseEventName(e)!=null}addEventListener(e,n,r,o){let a=t.parseEventName(n),s=t.eventCallback(a.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Rn().onAndCancel(e,a.domEventName,s,o))}static parseEventName(e){let n=e.toLowerCase().split("."),r=n.shift();if(n.length===0||!(r==="keydown"||r==="keyup"))return null;let o=t._normalizeKey(n.pop()),a="",s=n.indexOf("code");if(s>-1&&(n.splice(s,1),a="code."),TD.forEach(d=>{let u=n.indexOf(d);u>-1&&(n.splice(u,1),a+=d+".")}),a+=o,n.length!=0||o.length===0)return null;let l={};return l.domEventName=r,l.fullKey=a,l}static matchEventFullKeyCode(e,n){let r=QO[e.key]||e.key,o="";return n.indexOf("code.")>-1&&(r=e.code,o="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),TD.forEach(a=>{if(a!==r){let s=ZO[a];s(e)&&(o+=a+".")}}),o+=r,o===n)}static eventCallback(e,n,r){return o=>{t.matchEventFullKeyCode(o,e)&&r.runGuarded(()=>n(o))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(n){return new(n||t)(z(Y))};static \u0275prov=y({token:t,factory:t.\u0275fac})}return t})();async function j_(t,i,e){let n=C({rootComponent:t},KO(i,e));return pD(n)}function KO(t,i){return{platformRef:i?.platformRef,appProviders:[...n1,...t?.providers??[]],platformProviders:t1}}function XO(){am.makeCurrent()}function JO(){return new $t}function e1(){return Vg(document),document}var t1=[{provide:So,useValue:A_},{provide:Mu,useValue:XO,multi:!0},{provide:Y,useFactory:e1}];var n1=[{provide:tl,useValue:"root"},{provide:$t,useFactory:JO},{provide:om,useClass:nm,multi:!0},{provide:om,useClass:kD,multi:!0},B_,L_,P_,{provide:pt,useExisting:B_},{provide:ko,useClass:YO},[]];var Lr=class t{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(i){i?typeof i=="string"?this.lazyInit=()=>{this.headers=new Map,i.split(`
`).forEach(e=>{let n=e.indexOf(":");if(n>0){let r=e.slice(0,n),o=e.slice(n+1).trim();this.addHeaderEntry(r,o)}})}:typeof Headers<"u"&&i instanceof Headers?(this.headers=new Map,i.forEach((e,n)=>{this.addHeaderEntry(n,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(i).forEach(([e,n])=>{this.setHeaderEntries(e,n)})}:this.headers=new Map}has(i){return this.init(),this.headers.has(i.toLowerCase())}get(i){this.init();let e=this.headers.get(i.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(i){return this.init(),this.headers.get(i.toLowerCase())||null}append(i,e){return this.clone({name:i,value:e,op:"a"})}set(i,e){return this.clone({name:i,value:e,op:"s"})}delete(i,e){return this.clone({name:i,value:e,op:"d"})}maybeSetNormalizedName(i,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,i)}init(){this.lazyInit&&(this.lazyInit instanceof t?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(i=>this.applyUpdate(i)),this.lazyUpdate=null))}copyFrom(i){i.init(),Array.from(i.headers.keys()).forEach(e=>{this.headers.set(e,i.headers.get(e)),this.normalizedNames.set(e,i.normalizedNames.get(e))})}clone(i){let e=new t;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof t?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([i]),e}applyUpdate(i){let e=i.name.toLowerCase();switch(i.op){case"a":case"s":let n=i.value;if(typeof n=="string"&&(n=[n]),n.length===0)return;this.maybeSetNormalizedName(i.name,e);let r=(i.op==="a"?this.headers.get(e):void 0)||[];r.push(...n),this.headers.set(e,r);break;case"d":let o=i.value;if(!o)this.headers.delete(e),this.normalizedNames.delete(e);else{let a=this.headers.get(e);if(!a)return;a=a.filter(s=>o.indexOf(s)===-1),a.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,a)}break}}addHeaderEntry(i,e){let n=i.toLowerCase();this.maybeSetNormalizedName(i,n),this.headers.has(n)?this.headers.get(n).push(e):this.headers.set(n,[e])}setHeaderEntries(i,e){let n=(Array.isArray(e)?e:[e]).map(o=>o.toString()),r=i.toLowerCase();this.headers.set(r,n),this.maybeSetNormalizedName(i,r)}forEach(i){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>i(this.normalizedNames.get(e),this.headers.get(e)))}};var lm=class{map=new Map;set(i,e){return this.map.set(i,e),this}get(i){return this.map.has(i)||this.map.set(i,i.defaultValue()),this.map.get(i)}delete(i){return this.map.delete(i),this}has(i){return this.map.has(i)}keys(){return this.map.keys()}},cm=class{encodeKey(i){return AD(i)}encodeValue(i){return AD(i)}decodeKey(i){return decodeURIComponent(i)}decodeValue(i){return decodeURIComponent(i)}};function i1(t,i){let e=new Map;return t.length>0&&t.replace(/^\?/,"").split("&").forEach(r=>{let o=r.indexOf("="),[a,s]=o==-1?[i.decodeKey(r),""]:[i.decodeKey(r.slice(0,o)),i.decodeValue(r.slice(o+1))],l=e.get(a)||[];l.push(s),e.set(a,l)}),e}var r1=/%(\d[a-f0-9])/gi,o1={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function AD(t){return encodeURIComponent(t).replace(r1,(i,e)=>o1[e]??i)}function sm(t){return`${t}`}var Gt=class t{map;encoder;updates=null;cloneFrom=null;constructor(i={}){if(this.encoder=i.encoder||new cm,i.fromString){if(i.fromObject)throw new N(2805,!1);this.map=i1(i.fromString,this.encoder)}else i.fromObject?(this.map=new Map,Object.keys(i.fromObject).forEach(e=>{let n=i.fromObject[e],r=Array.isArray(n)?n.map(sm):[sm(n)];this.map.set(e,r)})):this.map=null}has(i){return this.init(),this.map.has(i)}get(i){this.init();let e=this.map.get(i);return e?e[0]:null}getAll(i){return this.init(),this.map.get(i)||null}keys(){return this.init(),Array.from(this.map.keys())}append(i,e){return this.clone({param:i,value:e,op:"a"})}appendAll(i){let e=[];return Object.keys(i).forEach(n=>{let r=i[n];Array.isArray(r)?r.forEach(o=>{e.push({param:n,value:o,op:"a"})}):e.push({param:n,value:r,op:"a"})}),this.clone(e)}set(i,e){return this.clone({param:i,value:e,op:"s"})}delete(i,e){return this.clone({param:i,value:e,op:"d"})}toString(){return this.init(),this.keys().map(i=>{let e=this.encoder.encodeKey(i);return this.map.get(i).map(n=>e+"="+this.encoder.encodeValue(n)).join("&")}).filter(i=>i!=="").join("&")}clone(i){let e=new t({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(i),e}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(i=>this.map.set(i,this.cloneFrom.map.get(i))),this.updates.forEach(i=>{switch(i.op){case"a":case"s":let e=(i.op==="a"?this.map.get(i.param):void 0)||[];e.push(sm(i.value)),this.map.set(i.param,e);break;case"d":if(i.value!==void 0){let n=this.map.get(i.param)||[],r=n.indexOf(sm(i.value));r!==-1&&n.splice(r,1),n.length>0?this.map.set(i.param,n):this.map.delete(i.param)}else{this.map.delete(i.param);break}}}),this.cloneFrom=this.updates=null)}};function a1(t){switch(t){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function RD(t){return typeof ArrayBuffer<"u"&&t instanceof ArrayBuffer}function OD(t){return typeof Blob<"u"&&t instanceof Blob}function ND(t){return typeof FormData<"u"&&t instanceof FormData}function s1(t){return typeof URLSearchParams<"u"&&t instanceof URLSearchParams}var FD="Content-Type",PD="Accept",VD="text/plain",BD="application/json",l1=`${BD}, ${VD}, */*`,Fa=class t{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(i,e,n,r){this.url=e,this.method=i.toUpperCase();let o;if(a1(this.method)||r?(this.body=n!==void 0?n:null,o=r):o=n,o){if(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,this.keepalive=!!o.keepalive,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),o.priority&&(this.priority=o.priority),o.cache&&(this.cache=o.cache),o.credentials&&(this.credentials=o.credentials),typeof o.timeout=="number"){if(o.timeout<1||!Number.isInteger(o.timeout))throw new N(2822,"");this.timeout=o.timeout}o.mode&&(this.mode=o.mode),o.redirect&&(this.redirect=o.redirect),o.integrity&&(this.integrity=o.integrity),o.referrer&&(this.referrer=o.referrer),o.referrerPolicy&&(this.referrerPolicy=o.referrerPolicy),this.transferCache=o.transferCache}if(this.headers??=new Lr,this.context??=new lm,!this.params)this.params=new Gt,this.urlWithParams=e;else{let a=this.params.toString();if(a.length===0)this.urlWithParams=e;else{let s=e.indexOf("?"),l=s===-1?"?":s<e.length-1?"&":"";this.urlWithParams=e+l+a}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||RD(this.body)||OD(this.body)||ND(this.body)||s1(this.body)?this.body:this.body instanceof Gt?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||ND(this.body)?null:OD(this.body)?this.body.type||null:RD(this.body)?null:typeof this.body=="string"?VD:this.body instanceof Gt?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?BD:null}clone(i={}){let e=i.method||this.method,n=i.url||this.url,r=i.responseType||this.responseType,o=i.keepalive??this.keepalive,a=i.priority||this.priority,s=i.cache||this.cache,l=i.mode||this.mode,d=i.redirect||this.redirect,u=i.credentials||this.credentials,h=i.referrer||this.referrer,_=i.integrity||this.integrity,v=i.referrerPolicy||this.referrerPolicy,w=i.transferCache??this.transferCache,O=i.timeout??this.timeout,B=i.body!==void 0?i.body:this.body,Q=i.withCredentials??this.withCredentials,Ie=i.reportProgress??this.reportProgress,Mt=i.headers||this.headers,It=i.params||this.params,As=i.context??this.context;return i.setHeaders!==void 0&&(Mt=Object.keys(i.setHeaders).reduce((Rs,eo)=>Rs.set(eo,i.setHeaders[eo]),Mt)),i.setParams&&(It=Object.keys(i.setParams).reduce((Rs,eo)=>Rs.set(eo,i.setParams[eo]),It)),new t(e,n,B,{params:It,headers:Mt,context:As,reportProgress:Ie,responseType:r,withCredentials:Q,transferCache:w,keepalive:o,cache:s,priority:a,timeout:O,mode:l,redirect:d,credentials:u,referrer:h,integrity:_,referrerPolicy:v})}},Ao=(function(t){return t[t.Sent=0]="Sent",t[t.UploadProgress=1]="UploadProgress",t[t.ResponseHeader=2]="ResponseHeader",t[t.DownloadProgress=3]="DownloadProgress",t[t.Response=4]="Response",t[t.User=5]="User",t})(Ao||{}),La=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(i,e=200,n="OK"){this.headers=i.headers||new Lr,this.status=i.status!==void 0?i.status:e,this.statusText=i.statusText||n,this.url=i.url||null,this.redirected=i.redirected,this.responseType=i.responseType,this.ok=this.status>=200&&this.status<300}},dm=class t extends La{constructor(i={}){super(i)}type=Ao.ResponseHeader;clone(i={}){return new t({headers:i.headers||this.headers,status:i.status!==void 0?i.status:this.status,statusText:i.statusText||this.statusText,url:i.url||this.url||void 0})}},Fl=class t extends La{body;constructor(i={}){super(i),this.body=i.body!==void 0?i.body:null}type=Ao.Response;clone(i={}){return new t({body:i.body!==void 0?i.body:this.body,headers:i.headers||this.headers,status:i.status!==void 0?i.status:this.status,statusText:i.statusText||this.statusText,url:i.url||this.url||void 0,redirected:i.redirected??this.redirected,responseType:i.responseType??this.responseType})}},Pa=class extends La{name="HttpErrorResponse";message;error;ok=!1;constructor(i){super(i,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${i.url||"(unknown url)"}`:this.message=`Http failure response for ${i.url||"(unknown url)"}: ${i.status} ${i.statusText}`,this.error=i.error||null}},c1=200,d1=204;var u1=new b("");var m1=/^\)\]\}',?\n/;var U_=(()=>{class t{xhrFactory;tracingService=c(Kn,{optional:!0});constructor(e){this.xhrFactory=e}maybePropagateTrace(e){return this.tracingService?.propagate?this.tracingService.propagate(e):e}handle(e){if(e.method==="JSONP")throw new N(-2800,!1);let n=this.xhrFactory;return q(null).pipe(ft(()=>new re(o=>{let a=n.build();if(a.open(e.method,e.urlWithParams),e.withCredentials&&(a.withCredentials=!0),e.headers.forEach((B,Q)=>a.setRequestHeader(B,Q.join(","))),e.headers.has(PD)||a.setRequestHeader(PD,l1),!e.headers.has(FD)){let B=e.detectContentTypeHeader();B!==null&&a.setRequestHeader(FD,B)}if(e.timeout&&(a.timeout=e.timeout),e.responseType){let B=e.responseType.toLowerCase();a.responseType=B!=="json"?B:"text"}let s=e.serializeBody(),l=null,d=()=>{if(l!==null)return l;let B=a.statusText||"OK",Q=new Lr(a.getAllResponseHeaders()),Ie=a.responseURL||e.url;return l=new dm({headers:Q,status:a.status,statusText:B,url:Ie}),l},u=this.maybePropagateTrace(()=>{let{headers:B,status:Q,statusText:Ie,url:Mt}=d(),It=null;Q!==d1&&(It=typeof a.response>"u"?a.responseText:a.response),Q===0&&(Q=It?c1:0);let As=Q>=200&&Q<300;if(e.responseType==="json"&&typeof It=="string"){let Rs=It;It=It.replace(m1,"");try{It=It!==""?JSON.parse(It):null}catch(eo){It=Rs,As&&(As=!1,It={error:eo,text:It})}}As?(o.next(new Fl({body:It,headers:B,status:Q,statusText:Ie,url:Mt||void 0})),o.complete()):o.error(new Pa({error:It,headers:B,status:Q,statusText:Ie,url:Mt||void 0}))}),h=this.maybePropagateTrace(B=>{let{url:Q}=d(),Ie=new Pa({error:B,status:a.status||0,statusText:a.statusText||"Unknown Error",url:Q||void 0});o.error(Ie)}),_=h;e.timeout&&(_=this.maybePropagateTrace(B=>{let{url:Q}=d(),Ie=new Pa({error:new DOMException("Request timed out","TimeoutError"),status:a.status||0,statusText:a.statusText||"Request timeout",url:Q||void 0});o.error(Ie)}));let v=!1,w=this.maybePropagateTrace(B=>{v||(o.next(d()),v=!0);let Q={type:Ao.DownloadProgress,loaded:B.loaded};B.lengthComputable&&(Q.total=B.total),e.responseType==="text"&&a.responseText&&(Q.partialText=a.responseText),o.next(Q)}),O=this.maybePropagateTrace(B=>{let Q={type:Ao.UploadProgress,loaded:B.loaded};B.lengthComputable&&(Q.total=B.total),o.next(Q)});return a.addEventListener("load",u),a.addEventListener("error",h),a.addEventListener("timeout",_),a.addEventListener("abort",h),e.reportProgress&&(a.addEventListener("progress",w),s!==null&&a.upload&&a.upload.addEventListener("progress",O)),a.send(s),o.next({type:Ao.Sent}),()=>{a.removeEventListener("error",h),a.removeEventListener("abort",h),a.removeEventListener("load",u),a.removeEventListener("timeout",_),e.reportProgress&&(a.removeEventListener("progress",w),s!==null&&a.upload&&a.upload.removeEventListener("progress",O)),a.readyState!==a.DONE&&a.abort()}})))}static \u0275fac=function(n){return new(n||t)(z(ko))};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function jD(t,i){return i(t)}function f1(t,i){return(e,n)=>i.intercept(e,{handle:r=>t(r,n)})}function h1(t,i,e){return(n,r)=>bt(e,()=>i(n,o=>t(o,r)))}var mm=new b(""),z_=new b("",{factory:()=>[]}),HD=new b(""),$_=new b("",{factory:()=>!0});function p1(){let t=null;return(i,e)=>{t===null&&(t=(c(mm,{optional:!0})??[]).reduceRight(f1,jD));let n=c(Ca);if(c($_)){let o=n.add();return t(i,e).pipe(Dr(o))}else return t(i,e)}}var W_=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=y({token:t,factory:function(n){let r=null;return n?r=new(n||t):r=z(U_),r},providedIn:"root"})}return t})();var um=(()=>{class t{backend;injector;chain=null;pendingTasks=c(Ca);contributeToStability=c($_);constructor(e,n){this.backend=e,this.injector=n}handle(e){if(this.chain===null){let n=Array.from(new Set([...this.injector.get(z_),...this.injector.get(HD,[])]));this.chain=n.reduceRight((r,o)=>h1(r,o,this.injector),jD)}if(this.contributeToStability){let n=this.pendingTasks.add();return this.chain(e,r=>this.backend.handle(r)).pipe(Dr(n))}else return this.chain(e,n=>this.backend.handle(n))}static \u0275fac=function(n){return new(n||t)(z(W_),z(Oe))};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),G_=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=y({token:t,factory:function(n){let r=null;return n?r=new(n||t):r=z(um),r},providedIn:"root"})}return t})();function H_(t,i){return{body:i,headers:t.headers,context:t.context,observe:t.observe,params:t.params,reportProgress:t.reportProgress,responseType:t.responseType,withCredentials:t.withCredentials,credentials:t.credentials,transferCache:t.transferCache,timeout:t.timeout,keepalive:t.keepalive,priority:t.priority,cache:t.cache,mode:t.mode,redirect:t.redirect,integrity:t.integrity,referrer:t.referrer,referrerPolicy:t.referrerPolicy}}var kt=(()=>{class t{handler;constructor(e){this.handler=e}request(e,n,r={}){let o;if(e instanceof Fa)o=e;else{let l;r.headers instanceof Lr?l=r.headers:l=new Lr(r.headers);let d;r.params&&(r.params instanceof Gt?d=r.params:d=new Gt({fromObject:r.params})),o=new Fa(e,n,r.body!==void 0?r.body:null,{headers:l,context:r.context,params:d,reportProgress:r.reportProgress,responseType:r.responseType||"json",withCredentials:r.withCredentials,transferCache:r.transferCache,keepalive:r.keepalive,priority:r.priority,cache:r.cache,mode:r.mode,redirect:r.redirect,credentials:r.credentials,referrer:r.referrer,referrerPolicy:r.referrerPolicy,integrity:r.integrity,timeout:r.timeout})}let a=q(o).pipe(wr(l=>this.handler.handle(l)));if(e instanceof Fa||r.observe==="events")return a;let s=a.pipe(ve(l=>l instanceof Fl));switch(r.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return s.pipe(oe(l=>{if(l.body!==null&&!(l.body instanceof ArrayBuffer))throw new N(2806,!1);return l.body}));case"blob":return s.pipe(oe(l=>{if(l.body!==null&&!(l.body instanceof Blob))throw new N(2807,!1);return l.body}));case"text":return s.pipe(oe(l=>{if(l.body!==null&&typeof l.body!="string")throw new N(2808,!1);return l.body}));default:return s.pipe(oe(l=>l.body))}case"response":return s;default:throw new N(2809,!1)}}delete(e,n={}){return this.request("DELETE",e,n)}get(e,n={}){return this.request("GET",e,n)}head(e,n={}){return this.request("HEAD",e,n)}jsonp(e,n){return this.request("JSONP",e,{params:new Gt().append(n,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,n={}){return this.request("OPTIONS",e,n)}patch(e,n,r={}){return this.request("PATCH",e,H_(r,n))}post(e,n,r={}){return this.request("POST",e,H_(r,n))}put(e,n,r={}){return this.request("PUT",e,H_(r,n))}static \u0275fac=function(n){return new(n||t)(z(G_))};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var g1=new b("",{factory:()=>!0}),_1="XSRF-TOKEN",v1=new b("",{factory:()=>_1}),b1="X-XSRF-TOKEN",y1=new b("",{factory:()=>b1}),C1=(()=>{class t{cookieName=c(v1);doc=c(Y);lastCookieString="";lastToken=null;parseCount=0;getToken(){let e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=kl(e,this.cookieName),this.lastCookieString=e),this.lastToken}static \u0275fac=function(n){return new(n||t)};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),UD=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=y({token:t,factory:function(n){let r=null;return n?r=new(n||t):r=z(C1),r},providedIn:"root"})}return t})();function w1(t,i){if(!c(g1)||t.method==="GET"||t.method==="HEAD")return i(t);try{let r=c(rr).href,{origin:o}=new URL(r),{origin:a}=new URL(t.url,o);if(o!==a)return i(t)}catch{return i(t)}let e=c(UD).getToken(),n=c(y1);return e!=null&&!t.headers.has(n)&&(t=t.clone({headers:t.headers.set(n,e)})),i(t)}var q_=(function(t){return t[t.Interceptors=0]="Interceptors",t[t.LegacyInterceptors=1]="LegacyInterceptors",t[t.CustomXsrfConfiguration=2]="CustomXsrfConfiguration",t[t.NoXsrfProtection=3]="NoXsrfProtection",t[t.JsonpSupport=4]="JsonpSupport",t[t.RequestsMadeViaParent=5]="RequestsMadeViaParent",t[t.Fetch=6]="Fetch",t})(q_||{});function D1(t,i){return{\u0275kind:t,\u0275providers:i}}function Y_(...t){let i=[kt,um,{provide:G_,useExisting:um},{provide:W_,useFactory:()=>c(u1,{optional:!0})??c(U_)},{provide:z_,useValue:w1,multi:!0}];for(let e of t)i.push(...e.\u0275providers);return di(i)}var LD=new b("");function Q_(){return D1(q_.LegacyInterceptors,[{provide:LD,useFactory:p1},{provide:z_,useExisting:LD,multi:!0}])}var zD=(()=>{class t{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(n){return new(n||t)(z(Y))};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Pl=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=y({token:t,factory:function(n){let r=null;return n?r=new(n||t):r=z(E1),r},providedIn:"root"})}return t})(),E1=(()=>{class t extends Pl{_doc;constructor(e){super(),this._doc=e}sanitize(e,n){if(n==null)return null;switch(e){case Pt.NONE:return n;case Pt.HTML:return To(n,"HTML")?Zn(n):$g(this._doc,String(n)).toString();case Pt.STYLE:return To(n,"Style")?Zn(n):n;case Pt.SCRIPT:if(To(n,"Script"))return Zn(n);throw new N(5200,!1);case Pt.URL:return To(n,"URL")?Zn(n):ku(String(n));case Pt.RESOURCE_URL:if(To(n,"ResourceURL"))return Zn(n);throw new N(5201,!1);default:throw new N(5202,!1)}}bypassSecurityTrustHtml(e){return Bg(e)}bypassSecurityTrustStyle(e){return jg(e)}bypassSecurityTrustScript(e){return Hg(e)}bypassSecurityTrustUrl(e){return Ug(e)}bypassSecurityTrustResourceUrl(e){return zg(e)}static \u0275fac=function(n){return new(n||t)(z(Y))};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var le="primary",Yl=Symbol("RouteTitle"),ev=class{params;constructor(i){this.params=i||{}}has(i){return Object.prototype.hasOwnProperty.call(this.params,i)}get(i){if(this.has(i)){let e=this.params[i];return Array.isArray(e)?e[0]:e}return null}getAll(i){if(this.has(i)){let e=this.params[i];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function Oo(t){return new ev(t)}function Z_(t,i,e){for(let n=0;n<t.length;n++){let r=t[n],o=i[n];if(r[0]===":")e[r.substring(1)]=o;else if(r!==o.path)return!1}return!0}function XD(t,i,e){let n=e.path.split("/"),r=n.indexOf("**");if(r===-1){if(n.length>t.length||e.pathMatch==="full"&&(i.hasChildren()||n.length<t.length))return null;let l={},d=t.slice(0,n.length);return Z_(n,d,l)?{consumed:d,posParams:l}:null}if(r!==n.lastIndexOf("**"))return null;let o=n.slice(0,r),a=n.slice(r+1);if(o.length+a.length>t.length||e.pathMatch==="full"&&i.hasChildren()&&e.path!=="**")return null;let s={};return!Z_(o,t.slice(0,o.length),s)||!Z_(a,t.slice(t.length-a.length),s)?null:{consumed:t,posParams:s}}function vm(t){return new Promise((i,e)=>{t.pipe(Gi()).subscribe({next:n=>i(n),error:n=>e(n)})})}function M1(t,i){if(t.length!==i.length)return!1;for(let e=0;e<t.length;++e)if(!ki(t[e],i[e]))return!1;return!0}function ki(t,i){let e=t?tv(t):void 0,n=i?tv(i):void 0;if(!e||!n||e.length!=n.length)return!1;let r;for(let o=0;o<e.length;o++)if(r=e[o],!JD(t[r],i[r]))return!1;return!0}function tv(t){return[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function JD(t,i){if(Array.isArray(t)&&Array.isArray(i)){if(t.length!==i.length)return!1;let e=[...t].sort(),n=[...i].sort();return e.every((r,o)=>n[o]===r)}else return t===i}function I1(t){return t.length>0?t[t.length-1]:null}function Fo(t){return js(t)?t:tr(t)?He(Promise.resolve(t)):q(t)}function ex(t){return js(t)?vm(t):Promise.resolve(t)}var S1={exact:ix,subset:rx},tx={exact:T1,subset:k1,ignored:()=>!0},nx={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},nv={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};function WD(t,i,e){return S1[e.paths](t.root,i.root,e.matrixParams)&&tx[e.queryParams](t.queryParams,i.queryParams)&&!(e.fragment==="exact"&&t.fragment!==i.fragment)}function T1(t,i){return ki(t,i)}function ix(t,i,e){if(!Ro(t.segments,i.segments)||!pm(t.segments,i.segments,e)||t.numberOfChildren!==i.numberOfChildren)return!1;for(let n in i.children)if(!t.children[n]||!ix(t.children[n],i.children[n],e))return!1;return!0}function k1(t,i){return Object.keys(i).length<=Object.keys(t).length&&Object.keys(i).every(e=>JD(t[e],i[e]))}function rx(t,i,e){return ox(t,i,i.segments,e)}function ox(t,i,e,n){if(t.segments.length>e.length){let r=t.segments.slice(0,e.length);return!(!Ro(r,e)||i.hasChildren()||!pm(r,e,n))}else if(t.segments.length===e.length){if(!Ro(t.segments,e)||!pm(t.segments,e,n))return!1;for(let r in i.children)if(!t.children[r]||!rx(t.children[r],i.children[r],n))return!1;return!0}else{let r=e.slice(0,t.segments.length),o=e.slice(t.segments.length);return!Ro(t.segments,r)||!pm(t.segments,r,n)||!t.children[le]?!1:ox(t.children[le],i,o,n)}}function pm(t,i,e){return i.every((n,r)=>tx[e](t[r].parameters,n.parameters))}var Nn=class{root;queryParams;fragment;_queryParamMap;constructor(i=new Ae([],{}),e={},n=null){this.root=i,this.queryParams=e,this.fragment=n}get queryParamMap(){return this._queryParamMap??=Oo(this.queryParams),this._queryParamMap}toString(){return O1.serialize(this)}},Ae=class{segments;children;parent=null;constructor(i,e){this.segments=i,this.children=e,Object.values(e).forEach(n=>n.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return gm(this)}},Vr=class{path;parameters;_parameterMap;constructor(i,e){this.path=i,this.parameters=e}get parameterMap(){return this._parameterMap??=Oo(this.parameters),this._parameterMap}toString(){return sx(this)}};function A1(t,i){return Ro(t,i)&&t.every((e,n)=>ki(e.parameters,i[n].parameters))}function Ro(t,i){return t.length!==i.length?!1:t.every((e,n)=>e.path===i[n].path)}function R1(t,i){let e=[];return Object.entries(t.children).forEach(([n,r])=>{n===le&&(e=e.concat(i(r,n)))}),Object.entries(t.children).forEach(([n,r])=>{n!==le&&(e=e.concat(i(r,n)))}),e}var Po=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=y({token:t,factory:()=>new sr,providedIn:"root"})}return t})(),sr=class{parse(i){let e=new rv(i);return new Nn(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(i){let e=`/${Ll(i.root,!0)}`,n=P1(i.queryParams),r=typeof i.fragment=="string"?`#${N1(i.fragment)}`:"";return`${e}${n}${r}`}},O1=new sr;function gm(t){return t.segments.map(i=>sx(i)).join("/")}function Ll(t,i){if(!t.hasChildren())return gm(t);if(i){let e=t.children[le]?Ll(t.children[le],!1):"",n=[];return Object.entries(t.children).forEach(([r,o])=>{r!==le&&n.push(`${r}:${Ll(o,!1)}`)}),n.length>0?`${e}(${n.join("//")})`:e}else{let e=R1(t,(n,r)=>r===le?[Ll(t.children[le],!1)]:[`${r}:${Ll(n,!1)}`]);return Object.keys(t.children).length===1&&t.children[le]!=null?`${gm(t)}/${e[0]}`:`${gm(t)}/(${e.join("//")})`}}function ax(t){return encodeURIComponent(t).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function fm(t){return ax(t).replace(/%3B/gi,";")}function N1(t){return encodeURI(t)}function iv(t){return ax(t).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function _m(t){return decodeURIComponent(t)}function GD(t){return _m(t.replace(/\+/g,"%20"))}function sx(t){return`${iv(t.path)}${F1(t.parameters)}`}function F1(t){return Object.entries(t).map(([i,e])=>`;${iv(i)}=${iv(e)}`).join("")}function P1(t){let i=Object.entries(t).map(([e,n])=>Array.isArray(n)?n.map(r=>`${fm(e)}=${fm(r)}`).join("&"):`${fm(e)}=${fm(n)}`).filter(e=>e);return i.length?`?${i.join("&")}`:""}var L1=/^[^\/()?;#]+/;function K_(t){let i=t.match(L1);return i?i[0]:""}var V1=/^[^\/()?;=#]+/;function B1(t){let i=t.match(V1);return i?i[0]:""}var j1=/^[^=?&#]+/;function H1(t){let i=t.match(j1);return i?i[0]:""}var U1=/^[^&#]+/;function z1(t){let i=t.match(U1);return i?i[0]:""}var rv=class{url;remaining;constructor(i){this.url=i,this.remaining=i}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new Ae([],{}):new Ae([],this.parseChildren())}parseQueryParams(){let i={};if(this.consumeOptional("?"))do this.parseQueryParam(i);while(this.consumeOptional("&"));return i}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(i=0){if(i>50)throw new N(4010,!1);if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let n={};this.peekStartsWith("/(")&&(this.capture("/"),n=this.parseParens(!0,i));let r={};return this.peekStartsWith("(")&&(r=this.parseParens(!1,i)),(e.length>0||Object.keys(n).length>0)&&(r[le]=new Ae(e,n)),r}parseSegment(){let i=K_(this.remaining);if(i===""&&this.peekStartsWith(";"))throw new N(4009,!1);return this.capture(i),new Vr(_m(i),this.parseMatrixParams())}parseMatrixParams(){let i={};for(;this.consumeOptional(";");)this.parseParam(i);return i}parseParam(i){let e=B1(this.remaining);if(!e)return;this.capture(e);let n="";if(this.consumeOptional("=")){let r=K_(this.remaining);r&&(n=r,this.capture(n))}i[_m(e)]=_m(n)}parseQueryParam(i){let e=H1(this.remaining);if(!e)return;this.capture(e);let n="";if(this.consumeOptional("=")){let a=z1(this.remaining);a&&(n=a,this.capture(n))}let r=GD(e),o=GD(n);if(i.hasOwnProperty(r)){let a=i[r];Array.isArray(a)||(a=[a],i[r]=a),a.push(o)}else i[r]=o}parseParens(i,e){let n={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let r=K_(this.remaining),o=this.remaining[r.length];if(o!=="/"&&o!==")"&&o!==";")throw new N(4010,!1);let a;r.indexOf(":")>-1?(a=r.slice(0,r.indexOf(":")),this.capture(a),this.capture(":")):i&&(a=le);let s=this.parseChildren(e+1);n[a??le]=Object.keys(s).length===1&&s[le]?s[le]:new Ae([],s),this.consumeOptional("//")}return n}peekStartsWith(i){return this.remaining.startsWith(i)}consumeOptional(i){return this.peekStartsWith(i)?(this.remaining=this.remaining.substring(i.length),!0):!1}capture(i){if(!this.consumeOptional(i))throw new N(4011,!1)}};function lx(t){return t.segments.length>0?new Ae([],{[le]:t}):t}function cx(t){let i={};for(let[n,r]of Object.entries(t.children)){let o=cx(r);if(n===le&&o.segments.length===0&&o.hasChildren())for(let[a,s]of Object.entries(o.children))i[a]=s;else(o.segments.length>0||o.hasChildren())&&(i[n]=o)}let e=new Ae(t.segments,i);return $1(e)}function $1(t){if(t.numberOfChildren===1&&t.children[le]){let i=t.children[le];return new Ae(t.segments.concat(i.segments),i.children)}return t}function Ua(t){return t instanceof Nn}function dx(t,i,e=null,n=null,r=new sr){let o=ux(t);return mx(o,i,e,n,r)}function ux(t){let i;function e(o){let a={};for(let l of o.children){let d=e(l);a[l.outlet]=d}let s=new Ae(o.url,a);return o===t&&(i=s),s}let n=e(t.root),r=lx(n);return i??r}function mx(t,i,e,n,r){let o=t;for(;o.parent;)o=o.parent;if(i.length===0)return X_(o,o,o,e,n,r);let a=W1(i);if(a.toRoot())return X_(o,o,new Ae([],{}),e,n,r);let s=G1(a,o,t),l=s.processChildren?Bl(s.segmentGroup,s.index,a.commands):hx(s.segmentGroup,s.index,a.commands);return X_(o,s.segmentGroup,l,e,n,r)}function bm(t){return typeof t=="object"&&t!=null&&!t.outlets&&!t.segmentPath}function Hl(t){return typeof t=="object"&&t!=null&&t.outlets}function qD(t,i,e){t||="\u0275";let n=new Nn;return n.queryParams={[t]:i},e.parse(e.serialize(n)).queryParams[t]}function X_(t,i,e,n,r,o){let a={};for(let[d,u]of Object.entries(n??{}))a[d]=Array.isArray(u)?u.map(h=>qD(d,h,o)):qD(d,u,o);let s;t===i?s=e:s=fx(t,i,e);let l=lx(cx(s));return new Nn(l,a,r)}function fx(t,i,e){let n={};return Object.entries(t.children).forEach(([r,o])=>{o===i?n[r]=e:n[r]=fx(o,i,e)}),new Ae(t.segments,n)}var ym=class{isAbsolute;numberOfDoubleDots;commands;constructor(i,e,n){if(this.isAbsolute=i,this.numberOfDoubleDots=e,this.commands=n,i&&n.length>0&&bm(n[0]))throw new N(4003,!1);let r=n.find(Hl);if(r&&r!==I1(n))throw new N(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function W1(t){if(typeof t[0]=="string"&&t.length===1&&t[0]==="/")return new ym(!0,0,t);let i=0,e=!1,n=t.reduce((r,o,a)=>{if(typeof o=="object"&&o!=null){if(o.outlets){let s={};return Object.entries(o.outlets).forEach(([l,d])=>{s[l]=typeof d=="string"?d.split("/"):d}),[...r,{outlets:s}]}if(o.segmentPath)return[...r,o.segmentPath]}return typeof o!="string"?[...r,o]:a===0?(o.split("/").forEach((s,l)=>{l==0&&s==="."||(l==0&&s===""?e=!0:s===".."?i++:s!=""&&r.push(s))}),r):[...r,o]},[]);return new ym(e,i,n)}var Ba=class{segmentGroup;processChildren;index;constructor(i,e,n){this.segmentGroup=i,this.processChildren=e,this.index=n}};function G1(t,i,e){if(t.isAbsolute)return new Ba(i,!0,0);if(!e)return new Ba(i,!1,NaN);if(e.parent===null)return new Ba(e,!0,0);let n=bm(t.commands[0])?0:1,r=e.segments.length-1+n;return q1(e,r,t.numberOfDoubleDots)}function q1(t,i,e){let n=t,r=i,o=e;for(;o>r;){if(o-=r,n=n.parent,!n)throw new N(4005,!1);r=n.segments.length}return new Ba(n,!1,r-o)}function Y1(t){return Hl(t[0])?t[0].outlets:{[le]:t}}function hx(t,i,e){if(t??=new Ae([],{}),t.segments.length===0&&t.hasChildren())return Bl(t,i,e);let n=Q1(t,i,e),r=e.slice(n.commandIndex);if(n.match&&n.pathIndex<t.segments.length){let o=new Ae(t.segments.slice(0,n.pathIndex),{});return o.children[le]=new Ae(t.segments.slice(n.pathIndex),t.children),Bl(o,0,r)}else return n.match&&r.length===0?new Ae(t.segments,{}):n.match&&!t.hasChildren()?ov(t,i,e):n.match?Bl(t,0,r):ov(t,i,e)}function Bl(t,i,e){if(e.length===0)return new Ae(t.segments,{});{let n=Y1(e),r={};if(Object.keys(n).some(o=>o!==le)&&t.children[le]&&t.numberOfChildren===1&&t.children[le].segments.length===0){let o=Bl(t.children[le],i,e);return new Ae(t.segments,o.children)}return Object.entries(n).forEach(([o,a])=>{typeof a=="string"&&(a=[a]),a!==null&&(r[o]=hx(t.children[o],i,a))}),Object.entries(t.children).forEach(([o,a])=>{n[o]===void 0&&(r[o]=a)}),new Ae(t.segments,r)}}function Q1(t,i,e){let n=0,r=i,o={match:!1,pathIndex:0,commandIndex:0};for(;r<t.segments.length;){if(n>=e.length)return o;let a=t.segments[r],s=e[n];if(Hl(s))break;let l=`${s}`,d=n<e.length-1?e[n+1]:null;if(r>0&&l===void 0)break;if(l&&d&&typeof d=="object"&&d.outlets===void 0){if(!QD(l,d,a))return o;n+=2}else{if(!QD(l,{},a))return o;n++}r++}return{match:!0,pathIndex:r,commandIndex:n}}function ov(t,i,e){let n=t.segments.slice(0,i),r=0;for(;r<e.length;){let o=e[r];if(Hl(o)){let l=Z1(o.outlets);return new Ae(n,l)}if(r===0&&bm(e[0])){let l=t.segments[i];n.push(new Vr(l.path,YD(e[0]))),r++;continue}let a=Hl(o)?o.outlets[le]:`${o}`,s=r<e.length-1?e[r+1]:null;a&&s&&bm(s)?(n.push(new Vr(a,YD(s))),r+=2):(n.push(new Vr(a,{})),r++)}return new Ae(n,{})}function Z1(t){let i={};return Object.entries(t).forEach(([e,n])=>{typeof n=="string"&&(n=[n]),n!==null&&(i[e]=ov(new Ae([],{}),0,n))}),i}function YD(t){let i={};return Object.entries(t).forEach(([e,n])=>i[e]=`${n}`),i}function QD(t,i,e){return t==e.path&&ki(i,e.parameters)}var ja="imperative",xt=(function(t){return t[t.NavigationStart=0]="NavigationStart",t[t.NavigationEnd=1]="NavigationEnd",t[t.NavigationCancel=2]="NavigationCancel",t[t.NavigationError=3]="NavigationError",t[t.RoutesRecognized=4]="RoutesRecognized",t[t.ResolveStart=5]="ResolveStart",t[t.ResolveEnd=6]="ResolveEnd",t[t.GuardsCheckStart=7]="GuardsCheckStart",t[t.GuardsCheckEnd=8]="GuardsCheckEnd",t[t.RouteConfigLoadStart=9]="RouteConfigLoadStart",t[t.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",t[t.ChildActivationStart=11]="ChildActivationStart",t[t.ChildActivationEnd=12]="ChildActivationEnd",t[t.ActivationStart=13]="ActivationStart",t[t.ActivationEnd=14]="ActivationEnd",t[t.Scroll=15]="Scroll",t[t.NavigationSkipped=16]="NavigationSkipped",t})(xt||{}),bn=class{id;url;constructor(i,e){this.id=i,this.url=e}},Br=class extends bn{type=xt.NavigationStart;navigationTrigger;restoredState;constructor(i,e,n="imperative",r=null){super(i,e),this.navigationTrigger=n,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},ti=class extends bn{urlAfterRedirects;type=xt.NavigationEnd;constructor(i,e,n){super(i,e),this.urlAfterRedirects=n}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},qt=(function(t){return t[t.Redirect=0]="Redirect",t[t.SupersededByNewNavigation=1]="SupersededByNewNavigation",t[t.NoDataFromResolver=2]="NoDataFromResolver",t[t.GuardRejected=3]="GuardRejected",t[t.Aborted=4]="Aborted",t})(qt||{}),za=(function(t){return t[t.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",t[t.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",t})(za||{}),On=class extends bn{reason;code;type=xt.NavigationCancel;constructor(i,e,n,r){super(i,e),this.reason=n,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function px(t){return t instanceof On&&(t.code===qt.Redirect||t.code===qt.SupersededByNewNavigation)}var Ai=class extends bn{reason;code;type=xt.NavigationSkipped;constructor(i,e,n,r){super(i,e),this.reason=n,this.code=r}},No=class extends bn{error;target;type=xt.NavigationError;constructor(i,e,n,r){super(i,e),this.error=n,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},Ul=class extends bn{urlAfterRedirects;state;type=xt.RoutesRecognized;constructor(i,e,n,r){super(i,e),this.urlAfterRedirects=n,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Cm=class extends bn{urlAfterRedirects;state;type=xt.GuardsCheckStart;constructor(i,e,n,r){super(i,e),this.urlAfterRedirects=n,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},wm=class extends bn{urlAfterRedirects;state;shouldActivate;type=xt.GuardsCheckEnd;constructor(i,e,n,r,o){super(i,e),this.urlAfterRedirects=n,this.state=r,this.shouldActivate=o}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},Dm=class extends bn{urlAfterRedirects;state;type=xt.ResolveStart;constructor(i,e,n,r){super(i,e),this.urlAfterRedirects=n,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},xm=class extends bn{urlAfterRedirects;state;type=xt.ResolveEnd;constructor(i,e,n,r){super(i,e),this.urlAfterRedirects=n,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Em=class{route;type=xt.RouteConfigLoadStart;constructor(i){this.route=i}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},Mm=class{route;type=xt.RouteConfigLoadEnd;constructor(i){this.route=i}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},Im=class{snapshot;type=xt.ChildActivationStart;constructor(i){this.snapshot=i}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Sm=class{snapshot;type=xt.ChildActivationEnd;constructor(i){this.snapshot=i}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Tm=class{snapshot;type=xt.ActivationStart;constructor(i){this.snapshot=i}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},km=class{snapshot;type=xt.ActivationEnd;constructor(i){this.snapshot=i}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},$a=class{routerEvent;position;anchor;scrollBehavior;type=xt.Scroll;constructor(i,e,n,r){this.routerEvent=i,this.position=e,this.anchor=n,this.scrollBehavior=r}toString(){let i=this.position?`${this.position[0]}, ${this.position[1]}`:null;return`Scroll(anchor: '${this.anchor}', position: '${i}')`}},Wa=class{},zl=class{},Ga=class{url;navigationBehaviorOptions;constructor(i,e){this.url=i,this.navigationBehaviorOptions=e}};function K1(t){return!(t instanceof Wa)&&!(t instanceof Ga)&&!(t instanceof zl)}var Am=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(i){this.rootInjector=i,this.children=new Lo(this.rootInjector)}},Lo=(()=>{class t{rootInjector;contexts=new Map;constructor(e){this.rootInjector=e}onChildOutletCreated(e,n){let r=this.getOrCreateContext(e);r.outlet=n,this.contexts.set(e,r)}onChildOutletDestroyed(e){let n=this.getContext(e);n&&(n.outlet=null,n.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let n=this.getContext(e);return n||(n=new Am(this.rootInjector),this.contexts.set(e,n)),n}getContext(e){return this.contexts.get(e)||null}static \u0275fac=function(n){return new(n||t)(z(Oe))};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Rm=class{_root;constructor(i){this._root=i}get root(){return this._root.value}parent(i){let e=this.pathFromRoot(i);return e.length>1?e[e.length-2]:null}children(i){let e=av(i,this._root);return e?e.children.map(n=>n.value):[]}firstChild(i){let e=av(i,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(i){let e=sv(i,this._root);return e.length<2?[]:e[e.length-2].children.map(r=>r.value).filter(r=>r!==i)}pathFromRoot(i){return sv(i,this._root).map(e=>e.value)}};function av(t,i){if(t===i.value)return i;for(let e of i.children){let n=av(t,e);if(n)return n}return null}function sv(t,i){if(t===i.value)return[i];for(let e of i.children){let n=sv(t,e);if(n.length)return n.unshift(i),n}return[]}var vn=class{value;children;constructor(i,e){this.value=i,this.children=e}toString(){return`TreeNode(${this.value})`}};function Va(t){let i={};return t&&t.children.forEach(e=>i[e.value.outlet]=e),i}var $l=class extends Rm{snapshot;constructor(i,e){super(i),this.snapshot=e,gv(this,i)}toString(){return this.snapshot.toString()}};function gx(t,i){let e=X1(t,i),n=new mt([new Vr("",{})]),r=new mt({}),o=new mt({}),a=new mt({}),s=new mt(""),l=new lr(n,r,a,s,o,le,t,e.root);return l.snapshot=e.root,new $l(new vn(l,[]),e)}function X1(t,i){let e={},n={},r={},a=new qa([],e,r,"",n,le,t,null,{},i);return new Wl("",new vn(a,[]))}var lr=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(i,e,n,r,o,a,s,l){this.urlSubject=i,this.paramsSubject=e,this.queryParamsSubject=n,this.fragmentSubject=r,this.dataSubject=o,this.outlet=a,this.component=s,this._futureSnapshot=l,this.title=this.dataSubject?.pipe(oe(d=>d[Yl]))??q(void 0),this.url=i,this.params=e,this.queryParams=n,this.fragment=r,this.data=o}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(oe(i=>Oo(i))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(oe(i=>Oo(i))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function pv(t,i,e="emptyOnly"){let n,{routeConfig:r}=t;return i!==null&&(e==="always"||r?.path===""||!i.component&&!i.routeConfig?.loadComponent)?n={params:C(C({},i.params),t.params),data:C(C({},i.data),t.data),resolve:C(C(C(C({},t.data),i.data),r?.data),t._resolvedData)}:n={params:C({},t.params),data:C({},t.data),resolve:C(C({},t.data),t._resolvedData??{})},r&&vx(r)&&(n.resolve[Yl]=r.title),n}var qa=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;get title(){return this.data?.[Yl]}constructor(i,e,n,r,o,a,s,l,d,u){this.url=i,this.params=e,this.queryParams=n,this.fragment=r,this.data=o,this.outlet=a,this.component=s,this.routeConfig=l,this._resolve=d,this._environmentInjector=u}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=Oo(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=Oo(this.queryParams),this._queryParamMap}toString(){let i=this.url.map(n=>n.toString()).join("/"),e=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${i}', path:'${e}')`}},Wl=class extends Rm{url;constructor(i,e){super(e),this.url=i,gv(this,e)}toString(){return _x(this._root)}};function gv(t,i){i.value._routerState=t,i.children.forEach(e=>gv(t,e))}function _x(t){let i=t.children.length>0?` { ${t.children.map(_x).join(", ")} } `:"";return`${t.value}${i}`}function J_(t){if(t.snapshot){let i=t.snapshot,e=t._futureSnapshot;t.snapshot=e,ki(i.queryParams,e.queryParams)||t.queryParamsSubject.next(e.queryParams),i.fragment!==e.fragment&&t.fragmentSubject.next(e.fragment),ki(i.params,e.params)||t.paramsSubject.next(e.params),M1(i.url,e.url)||t.urlSubject.next(e.url),ki(i.data,e.data)||t.dataSubject.next(e.data)}else t.snapshot=t._futureSnapshot,t.dataSubject.next(t._futureSnapshot.data)}function lv(t,i){let e=ki(t.params,i.params)&&A1(t.url,i.url),n=!t.parent!=!i.parent;return e&&!n&&(!t.parent||lv(t.parent,i.parent))}function vx(t){return typeof t.title=="string"||t.title===null}var bx=new b(""),Ql=(()=>{class t{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=le;activateEvents=new M;deactivateEvents=new M;attachEvents=new M;detachEvents=new M;routerOutletData=ir();parentContexts=c(Lo);location=c(Ct);changeDetector=c(we);inputBinder=c(Zl,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(e){if(e.name){let{firstChange:n,previousValue:r}=e.name;if(n)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new N(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new N(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new N(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,n){this.activated=e,this._activatedRoute=n,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,n){if(this.isActivated)throw new N(4013,!1);this._activatedRoute=e;let r=this.location,a=e.snapshot.component,s=this.parentContexts.getOrCreateContext(this.name).children,l=new cv(e,s,r.injector,this.routerOutletData);this.activated=r.createComponent(a,{index:r.length,injector:l,environmentInjector:n}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(n){return new(n||t)};static \u0275dir=A({type:t,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[Fe]})}return t})(),cv=class{route;childContexts;parent;outletData;constructor(i,e,n,r){this.route=i,this.childContexts=e,this.parent=n,this.outletData=r}get(i,e){return i===lr?this.route:i===Lo?this.childContexts:i===bx?this.outletData:this.parent.get(i,e)}},Zl=new b(""),_v=(()=>{class t{outletDataSubscriptions=new Map;bindActivatedRouteToOutletComponent(e){this.unsubscribeFromRouteData(e),this.subscribeToRouteData(e)}unsubscribeFromRouteData(e){this.outletDataSubscriptions.get(e)?.unsubscribe(),this.outletDataSubscriptions.delete(e)}subscribeToRouteData(e){let{activatedRoute:n}=e,r=sa([n.queryParams,n.params,n.data]).pipe(ft(([o,a,s],l)=>(s=C(C(C({},o),a),s),l===0?q(s):Promise.resolve(s)))).subscribe(o=>{if(!e.isActivated||!e.activatedComponentRef||e.activatedRoute!==n||n.component===null){this.unsubscribeFromRouteData(e);return}let a=vD(n.component);if(!a){this.unsubscribeFromRouteData(e);return}for(let{templateName:s}of a.inputs)e.activatedComponentRef.setInput(s,o[s])});this.outletDataSubscriptions.set(e,r)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=y({token:t,factory:t.\u0275fac})}return t})(),vv=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=D({type:t,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(n,r){n&1&&k(0,"router-outlet")},dependencies:[Ql],encapsulation:2})}return t})();function bv(t){let i=t.children&&t.children.map(bv),e=i?X(C({},t),{children:i}):C({},t);return!e.component&&!e.loadComponent&&(i||e.loadChildren)&&e.outlet&&e.outlet!==le&&(e.component=vv),e}function J1(t,i,e){let n=Gl(t,i._root,e?e._root:void 0);return new $l(n,i)}function Gl(t,i,e){if(e&&t.shouldReuseRoute(i.value,e.value.snapshot)){let n=e.value;n._futureSnapshot=i.value;let r=eN(t,i,e);return new vn(n,r)}else{if(t.shouldAttach(i.value)){let o=t.retrieve(i.value);if(o!==null){let a=o.route;return a.value._futureSnapshot=i.value,a.children=i.children.map(s=>Gl(t,s)),a}}let n=tN(i.value),r=i.children.map(o=>Gl(t,o));return new vn(n,r)}}function eN(t,i,e){return i.children.map(n=>{for(let r of e.children)if(t.shouldReuseRoute(n.value,r.value.snapshot))return Gl(t,n,r);return Gl(t,n)})}function tN(t){return new lr(new mt(t.url),new mt(t.params),new mt(t.queryParams),new mt(t.fragment),new mt(t.data),t.outlet,t.component,t)}var Ya=class{redirectTo;navigationBehaviorOptions;constructor(i,e){this.redirectTo=i,this.navigationBehaviorOptions=e}},yx="ngNavigationCancelingError";function Om(t,i){let{redirectTo:e,navigationBehaviorOptions:n}=Ua(i)?{redirectTo:i,navigationBehaviorOptions:void 0}:i,r=Cx(!1,qt.Redirect);return r.url=e,r.navigationBehaviorOptions=n,r}function Cx(t,i){let e=new Error(`NavigationCancelingError: ${t||""}`);return e[yx]=!0,e.cancellationCode=i,e}function nN(t){return wx(t)&&Ua(t.url)}function wx(t){return!!t&&t[yx]}var dv=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(i,e,n,r,o){this.routeReuseStrategy=i,this.futureState=e,this.currState=n,this.forwardEvent=r,this.inputBindingEnabled=o}activate(i){let e=this.futureState._root,n=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,n,i),J_(this.futureState.root),this.activateChildRoutes(e,n,i)}deactivateChildRoutes(i,e,n){let r=Va(e);i.children.forEach(o=>{let a=o.value.outlet;this.deactivateRoutes(o,r[a],n),delete r[a]}),Object.values(r).forEach(o=>{this.deactivateRouteAndItsChildren(o,n)})}deactivateRoutes(i,e,n){let r=i.value,o=e?e.value:null;if(r===o)if(r.component){let a=n.getContext(r.outlet);a&&this.deactivateChildRoutes(i,e,a.children)}else this.deactivateChildRoutes(i,e,n);else o&&this.deactivateRouteAndItsChildren(e,n)}deactivateRouteAndItsChildren(i,e){i.value.component&&this.routeReuseStrategy.shouldDetach(i.value.snapshot)?this.detachAndStoreRouteSubtree(i,e):this.deactivateRouteAndOutlet(i,e)}detachAndStoreRouteSubtree(i,e){let n=e.getContext(i.value.outlet),r=n&&i.value.component?n.children:e,o=Va(i);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,r);if(n&&n.outlet){let a=n.outlet.detach(),s=n.children.onOutletDeactivated();this.routeReuseStrategy.store(i.value.snapshot,{componentRef:a,route:i,contexts:s})}}deactivateRouteAndOutlet(i,e){let n=e.getContext(i.value.outlet),r=n&&i.value.component?n.children:e,o=Va(i);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,r);n&&(n.outlet&&(n.outlet.deactivate(),n.children.onOutletDeactivated()),n.attachRef=null,n.route=null)}activateChildRoutes(i,e,n){let r=Va(e);i.children.forEach(o=>{this.activateRoutes(o,r[o.value.outlet],n),this.forwardEvent(new km(o.value.snapshot))}),i.children.length&&this.forwardEvent(new Sm(i.value.snapshot))}activateRoutes(i,e,n){let r=i.value,o=e?e.value:null;if(J_(r),r===o)if(r.component){let a=n.getOrCreateContext(r.outlet);this.activateChildRoutes(i,e,a.children)}else this.activateChildRoutes(i,e,n);else if(r.component){let a=n.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let s=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),a.children.onOutletReAttached(s.contexts),a.attachRef=s.componentRef,a.route=s.route.value,a.outlet&&a.outlet.attach(s.componentRef,s.route.value),J_(s.route.value),this.activateChildRoutes(i,null,a.children)}else a.attachRef=null,a.route=r,a.outlet&&a.outlet.activateWith(r,a.injector),this.activateChildRoutes(i,null,a.children)}else this.activateChildRoutes(i,null,n)}},Nm=class{path;route;constructor(i){this.path=i,this.route=this.path[this.path.length-1]}},Ha=class{component;route;constructor(i,e){this.component=i,this.route=e}};function iN(t,i,e){let n=t._root,r=i?i._root:null;return Vl(n,r,e,[n.value])}function rN(t){let i=t.routeConfig?t.routeConfig.canActivateChild:null;return!i||i.length===0?null:{node:t,guards:i}}function Za(t,i){let e=Symbol(),n=i.get(t,e);return n===e?typeof t=="function"&&!Xh(t)?t:i.get(t):n}function Vl(t,i,e,n,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=Va(i);return t.children.forEach(a=>{oN(a,o[a.value.outlet],e,n.concat([a.value]),r),delete o[a.value.outlet]}),Object.entries(o).forEach(([a,s])=>jl(s,e.getContext(a),r)),r}function oN(t,i,e,n,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=t.value,a=i?i.value:null,s=e?e.getContext(t.value.outlet):null;if(a&&o.routeConfig===a.routeConfig){let l=aN(a,o,o.routeConfig.runGuardsAndResolvers);l?r.canActivateChecks.push(new Nm(n)):(o.data=a.data,o._resolvedData=a._resolvedData),o.component?Vl(t,i,s?s.children:null,n,r):Vl(t,i,e,n,r),l&&s&&s.outlet&&s.outlet.isActivated&&r.canDeactivateChecks.push(new Ha(s.outlet.component,a))}else a&&jl(i,s,r),r.canActivateChecks.push(new Nm(n)),o.component?Vl(t,null,s?s.children:null,n,r):Vl(t,null,e,n,r);return r}function aN(t,i,e){if(typeof e=="function")return bt(i._environmentInjector,()=>e(t,i));switch(e){case"pathParamsChange":return!Ro(t.url,i.url);case"pathParamsOrQueryParamsChange":return!Ro(t.url,i.url)||!ki(t.queryParams,i.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!lv(t,i)||!ki(t.queryParams,i.queryParams);default:return!lv(t,i)}}function jl(t,i,e){let n=Va(t),r=t.value;Object.entries(n).forEach(([o,a])=>{r.component?i?jl(a,i.children.getContext(o),e):jl(a,null,e):jl(a,i,e)}),r.component?i&&i.outlet&&i.outlet.isActivated?e.canDeactivateChecks.push(new Ha(i.outlet.component,r)):e.canDeactivateChecks.push(new Ha(null,r)):e.canDeactivateChecks.push(new Ha(null,r))}function Kl(t){return typeof t=="function"}function sN(t){return typeof t=="boolean"}function lN(t){return t&&Kl(t.canLoad)}function cN(t){return t&&Kl(t.canActivate)}function dN(t){return t&&Kl(t.canActivateChild)}function uN(t){return t&&Kl(t.canDeactivate)}function mN(t){return t&&Kl(t.canMatch)}function Dx(t){return t instanceof co||t?.name==="EmptyError"}var hm=Symbol("INITIAL_VALUE");function Qa(){return ft(t=>sa(t.map(i=>i.pipe(nt(1),Ke(hm)))).pipe(oe(i=>{for(let e of i)if(e!==!0){if(e===hm)return hm;if(e===!1||fN(e))return e}return!0}),ve(i=>i!==hm),nt(1)))}function fN(t){return Ua(t)||t instanceof Ya}function xx(t){return t.aborted?q(void 0).pipe(nt(1)):new re(i=>{let e=()=>{i.next(),i.complete()};return t.addEventListener("abort",e),()=>t.removeEventListener("abort",e)})}function Ex(t){return ye(xx(t))}function hN(t){return Ot(i=>{let{targetSnapshot:e,currentSnapshot:n,guards:{canActivateChecks:r,canDeactivateChecks:o}}=i;return o.length===0&&r.length===0?q(X(C({},i),{guardsResult:!0})):pN(o,e,n).pipe(Ot(a=>a&&sN(a)?gN(e,r,t):q(a)),oe(a=>X(C({},i),{guardsResult:a})))})}function pN(t,i,e){return He(t).pipe(Ot(n=>CN(n.component,n.route,e,i)),Gi(n=>n!==!0,!0))}function gN(t,i,e){return He(i).pipe(wr(n=>yr(vN(n.route.parent,e),_N(n.route,e),yN(t,n.path),bN(t,n.route))),Gi(n=>n!==!0,!0))}function _N(t,i){return t!==null&&i&&i(new Tm(t)),q(!0)}function vN(t,i){return t!==null&&i&&i(new Im(t)),q(!0)}function bN(t,i){let e=i.routeConfig?i.routeConfig.canActivate:null;if(!e||e.length===0)return q(!0);let n=e.map(r=>Wn(()=>{let o=i._environmentInjector,a=Za(r,o),s=cN(a)?a.canActivate(i,t):bt(o,()=>a(i,t));return Fo(s).pipe(Gi())}));return q(n).pipe(Qa())}function yN(t,i){let e=i[i.length-1],r=i.slice(0,i.length-1).reverse().map(o=>rN(o)).filter(o=>o!==null).map(o=>Wn(()=>{let a=o.guards.map(s=>{let l=o.node._environmentInjector,d=Za(s,l),u=dN(d)?d.canActivateChild(e,t):bt(l,()=>d(e,t));return Fo(u).pipe(Gi())});return q(a).pipe(Qa())}));return q(r).pipe(Qa())}function CN(t,i,e,n){let r=i&&i.routeConfig?i.routeConfig.canDeactivate:null;if(!r||r.length===0)return q(!0);let o=r.map(a=>{let s=i._environmentInjector,l=Za(a,s),d=uN(l)?l.canDeactivate(t,i,e,n):bt(s,()=>l(t,i,e,n));return Fo(d).pipe(Gi())});return q(o).pipe(Qa())}function wN(t,i,e,n,r){let o=i.canLoad;if(o===void 0||o.length===0)return q(!0);let a=o.map(s=>{let l=Za(s,t),d=lN(l)?l.canLoad(i,e):bt(t,()=>l(i,e)),u=Fo(d);return r?u.pipe(Ex(r)):u});return q(a).pipe(Qa(),Mx(n))}function Mx(t){return Ah(at(i=>{if(typeof i!="boolean")throw Om(t,i)}),oe(i=>i===!0))}function DN(t,i,e,n,r,o){let a=i.canMatch;if(!a||a.length===0)return q(!0);let s=a.map(l=>{let d=Za(l,t),u=mN(d)?d.canMatch(i,e,r):bt(t,()=>d(i,e,r));return Fo(u).pipe(Ex(o))});return q(s).pipe(Qa(),Mx(n))}var ar=class t extends Error{segmentGroup;constructor(i){super(),this.segmentGroup=i||null,Object.setPrototypeOf(this,t.prototype)}},ql=class t extends Error{urlTree;constructor(i){super(),this.urlTree=i,Object.setPrototypeOf(this,t.prototype)}};function xN(t){throw new N(4e3,!1)}function EN(t){throw Cx(!1,qt.GuardRejected)}var uv=class{urlSerializer;urlTree;constructor(i,e){this.urlSerializer=i,this.urlTree=e}async lineralizeSegments(i,e){let n=[],r=e.root;for(;;){if(n=n.concat(r.segments),r.numberOfChildren===0)return n;if(r.numberOfChildren>1||!r.children[le])throw xN(`${i.redirectTo}`);r=r.children[le]}}async applyRedirectCommands(i,e,n,r,o){let a=await MN(e,r,o);if(a instanceof Nn)throw new ql(a);let s=this.applyRedirectCreateUrlTree(a,this.urlSerializer.parse(a),i,n);if(a[0]==="/")throw new ql(s);return s}applyRedirectCreateUrlTree(i,e,n,r){let o=this.createSegmentGroup(i,e.root,n,r);return new Nn(o,this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(i,e){let n={};return Object.entries(i).forEach(([r,o])=>{if(typeof o=="string"&&o[0]===":"){let s=o.substring(1);n[r]=e[s]}else n[r]=o}),n}createSegmentGroup(i,e,n,r){let o=this.createSegments(i,e.segments,n,r),a={};return Object.entries(e.children).forEach(([s,l])=>{a[s]=this.createSegmentGroup(i,l,n,r)}),new Ae(o,a)}createSegments(i,e,n,r){return e.map(o=>o.path[0]===":"?this.findPosParam(i,o,r):this.findOrReturn(o,n))}findPosParam(i,e,n){let r=n[e.path.substring(1)];if(!r)throw new N(4001,!1);return r}findOrReturn(i,e){let n=0;for(let r of e){if(r.path===i.path)return e.splice(n),r;n++}return i}};function MN(t,i,e){if(typeof t=="string")return Promise.resolve(t);let n=t;return vm(Fo(bt(e,()=>n(i))))}function IN(t,i){return t.providers&&!t._injector&&(t._injector=Oa(t.providers,i,`Route: ${t.path}`)),t._injector??i}function ei(t){return t.outlet||le}function SN(t,i){let e=t.filter(n=>ei(n)===i);return e.push(...t.filter(n=>ei(n)!==i)),e}var mv={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function Ix(t){return{routeConfig:t.routeConfig,url:t.url,params:t.params,queryParams:t.queryParams,fragment:t.fragment,data:t.data,outlet:t.outlet,title:t.title,paramMap:t.paramMap,queryParamMap:t.queryParamMap}}function TN(t,i,e,n,r,o,a){let s=Sx(t,i,e);if(!s.matched)return q(s);let l=Ix(o(s));return n=IN(i,n),DN(n,i,e,r,l,a).pipe(oe(d=>d===!0?s:C({},mv)))}function Sx(t,i,e){if(i.path==="")return i.pathMatch==="full"&&(t.hasChildren()||e.length>0)?C({},mv):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let r=(i.matcher||XD)(e,t,i);if(!r)return C({},mv);let o={};Object.entries(r.posParams??{}).forEach(([s,l])=>{o[s]=l.path});let a=r.consumed.length>0?C(C({},o),r.consumed[r.consumed.length-1].parameters):o;return{matched:!0,consumedSegments:r.consumed,remainingSegments:e.slice(r.consumed.length),parameters:a,positionalParamSegments:r.posParams??{}}}function ZD(t,i,e,n,r){return e.length>0&&RN(t,e,n,r)?{segmentGroup:new Ae(i,AN(n,new Ae(e,t.children))),slicedSegments:[]}:e.length===0&&ON(t,e,n)?{segmentGroup:new Ae(t.segments,kN(t,e,n,t.children)),slicedSegments:e}:{segmentGroup:new Ae(t.segments,t.children),slicedSegments:e}}function kN(t,i,e,n){let r={};for(let o of e)if(Pm(t,i,o)&&!n[ei(o)]){let a=new Ae([],{});r[ei(o)]=a}return C(C({},n),r)}function AN(t,i){let e={};e[le]=i;for(let n of t)if(n.path===""&&ei(n)!==le){let r=new Ae([],{});e[ei(n)]=r}return e}function RN(t,i,e,n){return e.some(r=>!Pm(t,i,r)||!(ei(r)!==le)?!1:!(n!==void 0&&ei(r)===n))}function ON(t,i,e){return e.some(n=>Pm(t,i,n))}function Pm(t,i,e){return(t.hasChildren()||i.length>0)&&e.pathMatch==="full"?!1:e.path===""}function NN(t,i,e){return i.length===0&&!t.children[e]}var fv=class{};async function FN(t,i,e,n,r,o,a="emptyOnly",s){return new hv(t,i,e,n,r,a,o,s).recognize()}var PN=31,hv=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(i,e,n,r,o,a,s,l){this.injector=i,this.configLoader=e,this.rootComponentType=n,this.config=r,this.urlTree=o,this.paramsInheritanceStrategy=a,this.urlSerializer=s,this.abortSignal=l,this.applyRedirects=new uv(this.urlSerializer,this.urlTree)}noMatchError(i){return new N(4002,`'${i.segmentGroup}'`)}async recognize(){let i=ZD(this.urlTree.root,[],[],this.config).segmentGroup,{children:e,rootSnapshot:n}=await this.match(i),r=new vn(n,e),o=new Wl("",r),a=dx(n,[],this.urlTree.queryParams,this.urlTree.fragment);return a.queryParams=this.urlTree.queryParams,o.url=this.urlSerializer.serialize(a),{state:o,tree:a}}async match(i){let e=new qa([],Object.freeze({}),Object.freeze(C({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),le,this.rootComponentType,null,{},this.injector);try{return{children:await this.processSegmentGroup(this.injector,this.config,i,le,e),rootSnapshot:e}}catch(n){if(n instanceof ql)return this.urlTree=n.urlTree,this.match(n.urlTree.root);throw n instanceof ar?this.noMatchError(n):n}}async processSegmentGroup(i,e,n,r,o){if(n.segments.length===0&&n.hasChildren())return this.processChildren(i,e,n,o);let a=await this.processSegment(i,e,n,n.segments,r,!0,o);return a instanceof vn?[a]:[]}async processChildren(i,e,n,r){let o=[];for(let l of Object.keys(n.children))l==="primary"?o.unshift(l):o.push(l);let a=[];for(let l of o){let d=n.children[l],u=SN(e,l),h=await this.processSegmentGroup(i,u,d,l,r);a.push(...h)}let s=Tx(a);return LN(s),s}async processSegment(i,e,n,r,o,a,s){for(let l of e)try{return await this.processSegmentAgainstRoute(l._injector??i,e,l,n,r,o,a,s)}catch(d){if(d instanceof ar||Dx(d))continue;throw d}if(NN(n,r,o))return new fv;throw new ar(n)}async processSegmentAgainstRoute(i,e,n,r,o,a,s,l){if(ei(n)!==a&&(a===le||!Pm(r,o,n)))throw new ar(r);if(n.redirectTo===void 0)return this.matchSegmentAgainstRoute(i,r,n,o,a,l);if(this.allowRedirects&&s)return this.expandSegmentAgainstRouteUsingRedirect(i,r,e,n,o,a,l);throw new ar(r)}async expandSegmentAgainstRouteUsingRedirect(i,e,n,r,o,a,s){let{matched:l,parameters:d,consumedSegments:u,positionalParamSegments:h,remainingSegments:_}=Sx(e,r,o);if(!l)throw new ar(e);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>PN&&(this.allowRedirects=!1));let v=this.createSnapshot(i,r,o,d,s);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let w=await this.applyRedirects.applyRedirectCommands(u,r.redirectTo,h,Ix(v),i),O=await this.applyRedirects.lineralizeSegments(r,w);return this.processSegment(i,n,e,O.concat(_),a,!1,s)}createSnapshot(i,e,n,r,o){let a=new qa(n,r,Object.freeze(C({},this.urlTree.queryParams)),this.urlTree.fragment,BN(e),ei(e),e.component??e._loadedComponent??null,e,jN(e),i),s=pv(a,o,this.paramsInheritanceStrategy);return a.params=Object.freeze(s.params),a.data=Object.freeze(s.data),a}async matchSegmentAgainstRoute(i,e,n,r,o,a){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let s=Mt=>this.createSnapshot(i,n,Mt.consumedSegments,Mt.parameters,a),l=await vm(TN(e,n,r,i,this.urlSerializer,s,this.abortSignal));if(n.path==="**"&&(e.children={}),!l?.matched)throw new ar(e);i=n._injector??i;let{routes:d}=await this.getChildConfig(i,n,r),u=n._loadedInjector??i,{parameters:h,consumedSegments:_,remainingSegments:v}=l,w=this.createSnapshot(i,n,_,h,a),{segmentGroup:O,slicedSegments:B}=ZD(e,_,v,d,o);if(B.length===0&&O.hasChildren()){let Mt=await this.processChildren(u,d,O,w);return new vn(w,Mt)}if(d.length===0&&B.length===0)return new vn(w,[]);let Q=ei(n)===o,Ie=await this.processSegment(u,d,O,B,Q?le:o,!0,w);return new vn(w,Ie instanceof vn?[Ie]:[])}async getChildConfig(i,e,n){if(e.children)return{routes:e.children,injector:i};if(e.loadChildren){if(e._loadedRoutes!==void 0){let o=e._loadedNgModuleFactory;return o&&!e._loadedInjector&&(e._loadedInjector=o.create(i).injector),{routes:e._loadedRoutes,injector:e._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(await vm(wN(i,e,n,this.urlSerializer,this.abortSignal))){let o=await this.configLoader.loadChildren(i,e);return e._loadedRoutes=o.routes,e._loadedInjector=o.injector,e._loadedNgModuleFactory=o.factory,o}throw EN(e)}return{routes:[],injector:i}}};function LN(t){t.sort((i,e)=>i.value.outlet===le?-1:e.value.outlet===le?1:i.value.outlet.localeCompare(e.value.outlet))}function VN(t){let i=t.value.routeConfig;return i&&i.path===""}function Tx(t){let i=[],e=new Set;for(let n of t){if(!VN(n)){i.push(n);continue}let r=i.find(o=>n.value.routeConfig===o.value.routeConfig);r!==void 0?(r.children.push(...n.children),e.add(r)):i.push(n)}for(let n of e){let r=Tx(n.children);i.push(new vn(n.value,r))}return i.filter(n=>!e.has(n))}function BN(t){return t.data||{}}function jN(t){return t.resolve||{}}function HN(t,i,e,n,r,o,a){return Ot(async s=>{let{state:l,tree:d}=await FN(t,i,e,n,s.extractedUrl,r,o,a);return X(C({},s),{targetSnapshot:l,urlAfterRedirects:d})})}function UN(t){return Ot(i=>{let{targetSnapshot:e,guards:{canActivateChecks:n}}=i;if(!n.length)return q(i);let r=new Set(n.map(s=>s.route)),o=new Set;for(let s of r)if(!o.has(s))for(let l of kx(s))o.add(l);let a=0;return He(o).pipe(wr(s=>r.has(s)?zN(s,e,t):(s.data=pv(s,s.parent,t).resolve,q(void 0))),at(()=>a++),xd(1),Ot(s=>a===o.size?q(i):Ze))})}function kx(t){let i=t.children.map(e=>kx(e)).flat();return[t,...i]}function zN(t,i,e){let n=t.routeConfig,r=t._resolve;return n?.title!==void 0&&!vx(n)&&(r[Yl]=n.title),Wn(()=>(t.data=pv(t,t.parent,e).resolve,$N(r,t,i).pipe(oe(o=>(t._resolvedData=o,t.data=C(C({},t.data),o),null)))))}function $N(t,i,e){let n=tv(t);if(n.length===0)return q({});let r={};return He(n).pipe(Ot(o=>WN(t[o],i,e).pipe(Gi(),at(a=>{if(a instanceof Ya)throw Om(new sr,a);r[o]=a}))),xd(1),oe(()=>r),Cr(o=>Dx(o)?Ze:lo(o)))}function WN(t,i,e){let n=i._environmentInjector,r=Za(t,n),o=r.resolve?r.resolve(i,e):bt(n,()=>r(i,e));return Fo(o)}function KD(t){return ft(i=>{let e=t(i);return e?He(e).pipe(oe(()=>i)):q(i)})}var yv=(()=>{class t{buildTitle(e){let n,r=e.root;for(;r!==void 0;)n=this.getResolvedTitleForRoute(r)??n,r=r.children.find(o=>o.outlet===le);return n}getResolvedTitleForRoute(e){return e.data[Yl]}static \u0275fac=function(n){return new(n||t)};static \u0275prov=y({token:t,factory:()=>c(Ax),providedIn:"root"})}return t})(),Ax=(()=>{class t extends yv{title;constructor(e){super(),this.title=e}updateTitle(e){let n=this.buildTitle(e);n!==void 0&&this.title.setTitle(n)}static \u0275fac=function(n){return new(n||t)(z(zD))};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Vo=new b("",{factory:()=>({})}),Bo=new b(""),Lm=(()=>{class t{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=c(b_);async loadComponent(e,n){if(this.componentLoaders.get(n))return this.componentLoaders.get(n);if(n._loadedComponent)return Promise.resolve(n._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(n);let r=(async()=>{try{let o=await ex(bt(e,()=>n.loadComponent())),a=await Nx(Ox(o));return this.onLoadEndListener&&this.onLoadEndListener(n),n._loadedComponent=a,a}finally{this.componentLoaders.delete(n)}})();return this.componentLoaders.set(n,r),r}loadChildren(e,n){if(this.childrenLoaders.get(n))return this.childrenLoaders.get(n);if(n._loadedRoutes)return Promise.resolve({routes:n._loadedRoutes,injector:n._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(n);let r=(async()=>{try{let o=await Rx(n,this.compiler,e,this.onLoadEndListener);return n._loadedRoutes=o.routes,n._loadedInjector=o.injector,n._loadedNgModuleFactory=o.factory,o}finally{this.childrenLoaders.delete(n)}})();return this.childrenLoaders.set(n,r),r}static \u0275fac=function(n){return new(n||t)};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();async function Rx(t,i,e,n){let r=await ex(bt(e,()=>t.loadChildren())),o=await Nx(Ox(r)),a;o instanceof ju||Array.isArray(o)?a=o:a=await i.compileModuleAsync(o),n&&n(t);let s,l,d=!1,u;return Array.isArray(a)?(l=a,d=!0):(s=a.create(e).injector,u=a,l=s.get(Bo,[],{optional:!0,self:!0}).flat()),{routes:l.map(bv),injector:s,factory:u}}function GN(t){return t&&typeof t=="object"&&"default"in t}function Ox(t){return GN(t)?t.default:t}async function Nx(t){return t}var Vm=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=y({token:t,factory:()=>c(qN),providedIn:"root"})}return t})(),qN=(()=>{class t{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,n){return e}static \u0275fac=function(n){return new(n||t)};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Cv=new b(""),wv=new b("");function Fx(t,i,e){let n=t.get(wv),r=t.get(Y);if(!r.startViewTransition||n.skipNextTransition)return n.skipNextTransition=!1,new Promise(d=>setTimeout(d));let o,a=new Promise(d=>{o=d}),s=r.startViewTransition(()=>(o(),YN(t)));s.updateCallbackDone.catch(d=>{}),s.ready.catch(d=>{}),s.finished.catch(d=>{});let{onViewTransitionCreated:l}=n;return l&&bt(t,()=>l({transition:s,from:i,to:e})),a}function YN(t){return new Promise(i=>{We({read:()=>setTimeout(i)},{injector:t})})}var QN=()=>{},Dv=new b(""),Bm=(()=>{class t{currentNavigation=I(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=I(null);events=new x;transitionAbortWithErrorSubject=new x;configLoader=c(Lm);environmentInjector=c(Oe);destroyRef=c(Ft);urlSerializer=c(Po);rootContexts=c(Lo);location=c(Ti);inputBindingEnabled=c(Zl,{optional:!0})!==null;titleStrategy=c(yv);options=c(Vo,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=c(Vm);createViewTransition=c(Cv,{optional:!0});navigationErrorHandler=c(Dv,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>q(void 0);rootComponentType=null;destroyed=!1;constructor(){let e=r=>this.events.next(new Em(r)),n=r=>this.events.next(new Mm(r));this.configLoader.onLoadEndListener=n,this.configLoader.onLoadStartListener=e,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(e){let n=++this.navigationId;rt(()=>{this.transitions?.next(X(C({},e),{extractedUrl:this.urlHandlingStrategy.extract(e.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:n,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(e){return this.transitions=new mt(null),this.transitions.pipe(ve(n=>n!==null),ft(n=>{let r=!1,o=new AbortController,a=()=>!r&&this.currentTransition?.id===n.id;return q(n).pipe(ft(s=>{if(this.navigationId>n.id)return this.cancelNavigationTransition(n,"",qt.SupersededByNewNavigation),Ze;this.currentTransition=n;let l=this.lastSuccessfulNavigation();this.currentNavigation.set({id:s.id,initialUrl:s.rawUrl,extractedUrl:s.extractedUrl,targetBrowserUrl:typeof s.extras.browserUrl=="string"?this.urlSerializer.parse(s.extras.browserUrl):s.extras.browserUrl,trigger:s.source,extras:s.extras,previousNavigation:l?X(C({},l),{previousNavigation:null}):null,abort:()=>o.abort(),routesRecognizeHandler:s.routesRecognizeHandler,beforeActivateHandler:s.beforeActivateHandler});let d=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),u=s.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!d&&u!=="reload")return this.events.next(new Ai(s.id,this.urlSerializer.serialize(s.rawUrl),"",za.IgnoredSameUrlNavigation)),s.resolve(!1),Ze;if(this.urlHandlingStrategy.shouldProcessUrl(s.rawUrl))return q(s).pipe(ft(h=>(this.events.next(new Br(h.id,this.urlSerializer.serialize(h.extractedUrl),h.source,h.restoredState)),h.id!==this.navigationId?Ze:Promise.resolve(h))),HN(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy,o.signal),at(h=>{n.targetSnapshot=h.targetSnapshot,n.urlAfterRedirects=h.urlAfterRedirects,this.currentNavigation.update(_=>(_.finalUrl=h.urlAfterRedirects,_)),this.events.next(new zl)}),ft(h=>He(n.routesRecognizeHandler.deferredHandle??q(void 0)).pipe(oe(()=>h))),at(()=>{let h=new Ul(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(h)}));if(d&&this.urlHandlingStrategy.shouldProcessUrl(s.currentRawUrl)){let{id:h,extractedUrl:_,source:v,restoredState:w,extras:O}=s,B=new Br(h,this.urlSerializer.serialize(_),v,w);this.events.next(B);let Q=gx(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=n=X(C({},s),{targetSnapshot:Q,urlAfterRedirects:_,extras:X(C({},O),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(Ie=>(Ie.finalUrl=_,Ie)),q(n)}else return this.events.next(new Ai(s.id,this.urlSerializer.serialize(s.extractedUrl),"",za.IgnoredByUrlHandlingStrategy)),s.resolve(!1),Ze}),oe(s=>{let l=new Cm(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);return this.events.next(l),this.currentTransition=n=X(C({},s),{guards:iN(s.targetSnapshot,s.currentSnapshot,this.rootContexts)}),n}),hN(s=>this.events.next(s)),ft(s=>{if(n.guardsResult=s.guardsResult,s.guardsResult&&typeof s.guardsResult!="boolean")throw Om(this.urlSerializer,s.guardsResult);let l=new wm(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot,!!s.guardsResult);if(this.events.next(l),!a())return Ze;if(!s.guardsResult)return this.cancelNavigationTransition(s,"",qt.GuardRejected),Ze;if(s.guards.canActivateChecks.length===0)return q(s);let d=new Dm(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);if(this.events.next(d),!a())return Ze;let u=!1;return q(s).pipe(UN(this.paramsInheritanceStrategy),at({next:()=>{u=!0;let h=new xm(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(h)},complete:()=>{u||this.cancelNavigationTransition(s,"",qt.NoDataFromResolver)}}))}),KD(s=>{let l=u=>{let h=[];if(u.routeConfig?._loadedComponent)u.component=u.routeConfig?._loadedComponent;else if(u.routeConfig?.loadComponent){let _=u._environmentInjector;h.push(this.configLoader.loadComponent(_,u.routeConfig).then(v=>{u.component=v}))}for(let _ of u.children)h.push(...l(_));return h},d=l(s.targetSnapshot.root);return d.length===0?q(s):He(Promise.all(d).then(()=>s))}),KD(()=>this.afterPreactivation()),ft(()=>{let{currentSnapshot:s,targetSnapshot:l}=n,d=this.createViewTransition?.(this.environmentInjector,s.root,l.root);return d?He(d).pipe(oe(()=>n)):q(n)}),nt(1),ft(s=>{let l=J1(e.routeReuseStrategy,s.targetSnapshot,s.currentRouterState);this.currentTransition=n=s=X(C({},s),{targetRouterState:l}),this.currentNavigation.update(u=>(u.targetRouterState=l,u)),this.events.next(new Wa);let d=n.beforeActivateHandler.deferredHandle;return d?He(d.then(()=>s)):q(s)}),at(s=>{new dv(e.routeReuseStrategy,n.targetRouterState,n.currentRouterState,l=>this.events.next(l),this.inputBindingEnabled).activate(this.rootContexts),a()&&(r=!0,this.currentNavigation.update(l=>(l.abort=QN,l)),this.lastSuccessfulNavigation.set(rt(this.currentNavigation)),this.events.next(new ti(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects))),this.titleStrategy?.updateTitle(s.targetRouterState.snapshot),s.resolve(!0))}),ye(xx(o.signal).pipe(ve(()=>!r&&!n.targetRouterState),at(()=>{this.cancelNavigationTransition(n,o.signal.reason+"",qt.Aborted)}))),at({complete:()=>{r=!0}}),ye(this.transitionAbortWithErrorSubject.pipe(at(s=>{throw s}))),Dr(()=>{o.abort(),r||this.cancelNavigationTransition(n,"",qt.SupersededByNewNavigation),this.currentTransition?.id===n.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),Cr(s=>{if(r=!0,this.destroyed)return n.resolve(!1),Ze;if(wx(s))this.events.next(new On(n.id,this.urlSerializer.serialize(n.extractedUrl),s.message,s.cancellationCode)),nN(s)?this.events.next(new Ga(s.url,s.navigationBehaviorOptions)):n.resolve(!1);else{let l=new No(n.id,this.urlSerializer.serialize(n.extractedUrl),s,n.targetSnapshot??void 0);try{let d=bt(this.environmentInjector,()=>this.navigationErrorHandler?.(l));if(d instanceof Ya){let{message:u,cancellationCode:h}=Om(this.urlSerializer,d);this.events.next(new On(n.id,this.urlSerializer.serialize(n.extractedUrl),u,h)),this.events.next(new Ga(d.redirectTo,d.navigationBehaviorOptions))}else throw this.events.next(l),s}catch(d){this.options.resolveNavigationPromiseOnError?n.resolve(!1):n.reject(d)}}return Ze}))}))}cancelNavigationTransition(e,n,r){let o=new On(e.id,this.urlSerializer.serialize(e.extractedUrl),n,r);this.events.next(o),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),n=rt(this.currentNavigation),r=n?.targetBrowserUrl??n?.extractedUrl;return e.toString()!==r?.toString()&&!n?.extras.skipLocationChange}static \u0275fac=function(n){return new(n||t)};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function ZN(t){return t!==ja}var Px=new b("");var Lx=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=y({token:t,factory:()=>c(KN),providedIn:"root"})}return t})(),Fm=class{shouldDetach(i){return!1}store(i,e){}shouldAttach(i){return!1}retrieve(i){return null}shouldReuseRoute(i,e){return i.routeConfig===e.routeConfig}shouldDestroyInjector(i){return!0}},KN=(()=>{class t extends Fm{static \u0275fac=(()=>{let e;return function(r){return(e||(e=$e(t)))(r||t)}})();static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),xv=(()=>{class t{urlSerializer=c(Po);options=c(Vo,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=c(Ti);urlHandlingStrategy=c(Vm);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new Nn;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:e,initialUrl:n,targetBrowserUrl:r}){let o=e!==void 0?this.urlHandlingStrategy.merge(e,n):n,a=r??o;return a instanceof Nn?this.urlSerializer.serialize(a):a}commitTransition({targetRouterState:e,finalUrl:n,initialUrl:r}){n&&e?(this.currentUrlTree=n,this.rawUrlTree=this.urlHandlingStrategy.merge(n,r),this.routerState=e):this.rawUrlTree=r}routerState=gx(null,c(Oe));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static \u0275fac=function(n){return new(n||t)};static \u0275prov=y({token:t,factory:()=>c(XN),providedIn:"root"})}return t})(),XN=(()=>{class t extends xv{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(n=>{n.type==="popstate"&&setTimeout(()=>{e(n.url,n.state,"popstate",{replaceUrl:!0})})})}handleRouterEvent(e,n){e instanceof Br?this.updateStateMemento():e instanceof Ai?this.commitTransition(n):e instanceof Ul?this.urlUpdateStrategy==="eager"&&(n.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(n),n)):e instanceof Wa?(this.commitTransition(n),this.urlUpdateStrategy==="deferred"&&!n.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(n),n)):e instanceof On&&!px(e)?this.restoreHistory(n):e instanceof No?this.restoreHistory(n,!0):e instanceof ti&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,{extras:n,id:r}){let{replaceUrl:o,state:a}=n;if(this.location.isCurrentPathEqualTo(e)||o){let s=this.browserPageId,l=C(C({},a),this.generateNgRouterState(r,s));this.location.replaceState(e,"",l)}else{let s=C(C({},a),this.generateNgRouterState(r,this.browserPageId+1));this.location.go(e,"",s)}}restoreHistory(e,n=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,o=this.currentPageId-r;o!==0?this.location.historyGo(o):this.getCurrentUrlTree()===e.finalUrl&&o===0&&(this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(n&&this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:e}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,n){return this.canceledNavigationResolution==="computed"?{navigationId:e,\u0275routerPageId:n}:{navigationId:e}}static \u0275fac=(()=>{let e;return function(r){return(e||(e=$e(t)))(r||t)}})();static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function jm(t,i){t.events.pipe(ve(e=>e instanceof ti||e instanceof On||e instanceof No||e instanceof Ai),oe(e=>e instanceof ti||e instanceof Ai?0:(e instanceof On?e.code===qt.Redirect||e.code===qt.SupersededByNewNavigation:!1)?2:1),ve(e=>e!==2),nt(1)).subscribe(()=>{i()})}var an=(()=>{class t{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=c(Hu);stateManager=c(xv);options=c(Vo,{optional:!0})||{};pendingTasks=c(Ki);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=c(Bm);urlSerializer=c(Po);location=c(Ti);urlHandlingStrategy=c(Vm);injector=c(Oe);_events=new x;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=c(Lx);injectorCleanup=c(Px,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=c(Bo,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!c(Zl,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:e=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new ie;subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(n=>{try{let r=this.navigationTransitions.currentTransition,o=rt(this.navigationTransitions.currentNavigation);if(r!==null&&o!==null){if(this.stateManager.handleRouterEvent(n,o),n instanceof On&&n.code!==qt.Redirect&&n.code!==qt.SupersededByNewNavigation)this.navigated=!0;else if(n instanceof ti)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(n instanceof Ga){let a=n.navigationBehaviorOptions,s=this.urlHandlingStrategy.merge(n.url,r.currentRawUrl),l=C({scroll:r.extras.scroll,browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||ZN(r.source)},a);this.scheduleNavigation(s,ja,null,l,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}K1(n)&&this._events.next(n)}catch(r){this.navigationTransitions.transitionAbortWithErrorSubject.next(r)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),ja,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,n,r,o)=>{this.navigateToSyncWithBrowser(e,r,n,o)})}navigateToSyncWithBrowser(e,n,r,o){let a=r?.navigationId?r:null;if(r){let l=C({},r);delete l.navigationId,delete l.\u0275routerPageId,Object.keys(l).length!==0&&(o.state=l)}let s=this.parseUrl(e);this.scheduleNavigation(s,n,a,o).catch(l=>{this.disposed||this.injector.get(gn)(l)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return rt(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map(bv),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,n={}){let{relativeTo:r,queryParams:o,fragment:a,queryParamsHandling:s,preserveFragment:l}=n,d=l?this.currentUrlTree.fragment:a,u=null;switch(s??this.options.defaultQueryParamsHandling){case"merge":u=C(C({},this.currentUrlTree.queryParams),o);break;case"preserve":u=this.currentUrlTree.queryParams;break;default:u=o||null}u!==null&&(u=this.removeEmptyProps(u));let h;try{let _=r?r.snapshot:this.routerState.snapshot.root;h=ux(_)}catch{(typeof e[0]!="string"||e[0][0]!=="/")&&(e=[]),h=this.currentUrlTree.root}return mx(h,e,u,d??null,this.urlSerializer)}navigateByUrl(e,n={skipLocationChange:!1}){let r=Ua(e)?e:this.parseUrl(e),o=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(o,ja,null,n)}navigate(e,n={skipLocationChange:!1}){return JN(e),this.navigateByUrl(this.createUrlTree(e,n),n)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch{return this.console.warn(Mn(4018,!1)),this.urlSerializer.parse("/")}}isActive(e,n){let r;if(n===!0?r=C({},nx):n===!1?r=C({},nv):r=C(C({},nv),n),Ua(e))return WD(this.currentUrlTree,e,r);let o=this.parseUrl(e);return WD(this.currentUrlTree,o,r)}removeEmptyProps(e){return Object.entries(e).reduce((n,[r,o])=>(o!=null&&(n[r]=o),n),{})}scheduleNavigation(e,n,r,o,a){if(this.disposed)return Promise.resolve(!1);let s,l,d;a?(s=a.resolve,l=a.reject,d=a.promise):d=new Promise((h,_)=>{s=h,l=_});let u=this.pendingTasks.add();return jm(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(u))}),this.navigationTransitions.handleNavigationRequest({source:n,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:o,resolve:s,reject:l,promise:d,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),d.catch(Promise.reject.bind(Promise))}static \u0275fac=function(n){return new(n||t)};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function JN(t){for(let i=0;i<t.length;i++)if(t[i]==null)throw new N(4008,!1)}var Xl=class{};var Vx=(()=>{class t{router;injector;preloadingStrategy;loader;subscription;constructor(e,n,r,o){this.router=e,this.injector=n,this.preloadingStrategy=r,this.loader=o}setUpPreloading(){this.subscription=this.router.events.pipe(ve(e=>e instanceof ti),wr(()=>this.preload())).subscribe(()=>{})}preload(){return this.processRoutes(this.injector,this.router.config)}ngOnDestroy(){this.subscription?.unsubscribe()}processRoutes(e,n){let r=[];for(let o of n){o.providers&&!o._injector&&(o._injector=Oa(o.providers,e,""));let a=o._injector??e;o._loadedNgModuleFactory&&!o._loadedInjector&&(o._loadedInjector=o._loadedNgModuleFactory.create(a).injector);let s=o._loadedInjector??a;(o.loadChildren&&!o._loadedRoutes&&o.canLoad===void 0||o.loadComponent&&!o._loadedComponent)&&r.push(this.preloadConfig(a,o)),(o.children||o._loadedRoutes)&&r.push(this.processRoutes(s,o.children??o._loadedRoutes))}return He(r).pipe(br())}preloadConfig(e,n){return this.preloadingStrategy.preload(n,()=>{if(e.destroyed)return q(null);let r;n.loadChildren&&n.canLoad===void 0?r=He(this.loader.loadChildren(e,n)):r=q(null);let o=r.pipe(Ot(a=>a===null?q(void 0):(n._loadedRoutes=a.routes,n._loadedInjector=a.injector,n._loadedNgModuleFactory=a.factory,this.processRoutes(a.injector??e,a.routes))));if(n.loadComponent&&!n._loadedComponent){let a=this.loader.loadComponent(e,n);return He([o,a]).pipe(br())}else return o})}static \u0275fac=function(n){return new(n||t)(z(an),z(Oe),z(Xl),z(Lm))};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Bx=new b(""),tF=(()=>{class t{options;routerEventsSubscription;scrollEventsSubscription;lastId=0;lastSource=ja;restoredId=0;store={};urlSerializer=c(Po);zone=c(L);viewportScroller=c(R_);transitions=c(Bm);constructor(e){this.options=e,this.options.scrollPositionRestoration||="disabled",this.options.anchorScrolling||="disabled"}init(){this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.setHistoryScrollRestoration("manual"),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.transitions.events.subscribe(e=>{e instanceof Br?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=e.navigationTrigger,this.restoredId=e.restoredState?e.restoredState.navigationId:0):e instanceof ti?(this.lastId=e.id,this.scheduleScrollEvent(e,this.urlSerializer.parse(e.urlAfterRedirects).fragment)):e instanceof Ai&&e.code===za.IgnoredSameUrlNavigation&&(this.lastSource=void 0,this.restoredId=0,this.scheduleScrollEvent(e,this.urlSerializer.parse(e.url).fragment))})}consumeScrollEvents(){return this.transitions.events.subscribe(e=>{if(!(e instanceof $a)||e.scrollBehavior==="manual")return;let n={behavior:"instant"};e.position?this.options.scrollPositionRestoration==="top"?this.viewportScroller.scrollToPosition([0,0],n):this.options.scrollPositionRestoration==="enabled"&&this.viewportScroller.scrollToPosition(e.position,n):e.anchor&&this.options.anchorScrolling==="enabled"?this.viewportScroller.scrollToAnchor(e.anchor):this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.scrollToPosition([0,0])})}scheduleScrollEvent(e,n){let r=rt(this.transitions.currentNavigation)?.extras.scroll;this.zone.runOutsideAngular(async()=>{await new Promise(o=>{setTimeout(o),typeof requestAnimationFrame<"u"&&requestAnimationFrame(o)}),this.zone.run(()=>{this.transitions.events.next(new $a(e,this.lastSource==="popstate"?this.store[this.restoredId]:null,n,r))})})}ngOnDestroy(){this.routerEventsSubscription?.unsubscribe(),this.scrollEventsSubscription?.unsubscribe()}static \u0275fac=function(n){wl()};static \u0275prov=y({token:t,factory:t.\u0275fac})}return t})();function Mv(t,...i){return di([{provide:Bo,multi:!0,useValue:t},[],{provide:lr,useFactory:jx},{provide:xl,multi:!0,useFactory:Hx},i.map(e=>e.\u0275providers)])}function jx(){return c(an).routerState.root}function Jl(t,i){return{\u0275kind:t,\u0275providers:i}}function Hx(){let t=c($);return i=>{let e=t.get(_n);if(i!==e.components[0])return;let n=t.get(an),r=t.get(Ux);t.get(Iv)===1&&n.initialNavigation(),t.get(Wx,null,{optional:!0})?.setUpPreloading(),t.get(Bx,null,{optional:!0})?.init(),n.resetRootComponentType(e.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var Ux=new b("",{factory:()=>new x}),Iv=new b("",{factory:()=>1});function zx(){let t=[{provide:Iu,useValue:!0},{provide:Iv,useValue:0},zu(()=>{let i=c($);return i.get(x_,Promise.resolve()).then(()=>new Promise(n=>{let r=i.get(an),o=i.get(Ux);jm(r,()=>{n(!0)}),i.get(Bm).afterPreactivation=()=>(n(!0),o.closed?q(void 0):o),r.initialNavigation()}))})];return Jl(2,t)}function $x(){let t=[zu(()=>{c(an).setUpLocationChangeListener()}),{provide:Iv,useValue:2}];return Jl(3,t)}var Wx=new b("");function Gx(t){return Jl(0,[{provide:Wx,useExisting:Vx},{provide:Xl,useExisting:t}])}function qx(){return Jl(8,[_v,{provide:Zl,useExisting:_v}])}function Yx(t){Ci("NgRouterViewTransitions");let i=[{provide:Cv,useValue:Fx},{provide:wv,useValue:C({skipNextTransition:!!t?.skipInitialTransition},t)}];return Jl(9,i)}var Qx=[Ti,{provide:Po,useClass:sr},an,Lo,{provide:lr,useFactory:jx},Lm,[]],Sv=(()=>{class t{constructor(){}static forRoot(e,n){return{ngModule:t,providers:[Qx,[],{provide:Bo,multi:!0,useValue:e},[],n?.errorHandler?{provide:Dv,useValue:n.errorHandler}:[],{provide:Vo,useValue:n||{}},n?.useHash?iF():rF(),nF(),n?.preloadingStrategy?Gx(n.preloadingStrategy).\u0275providers:[],n?.initialNavigation?oF(n):[],n?.bindToComponentInputs?qx().\u0275providers:[],n?.enableViewTransitions?Yx().\u0275providers:[],aF()]}}static forChild(e){return{ngModule:t,providers:[{provide:Bo,multi:!0,useValue:e}]}}static \u0275fac=function(n){return new(n||t)};static \u0275mod=H({type:t});static \u0275inj=j({})}return t})();function nF(){return{provide:Bx,useFactory:()=>{let t=c(R_),i=c(Vo);return i.scrollOffset&&t.setOffset(i.scrollOffset),new tF(i)}}}function iF(){return{provide:or,useClass:I_}}function rF(){return{provide:or,useClass:tm}}function oF(t){return[t.initialNavigation==="disabled"?$x().\u0275providers:[],t.initialNavigation==="enabledBlocking"?zx().\u0275providers:[]]}var Ev=new b("");function aF(){return[{provide:Ev,useFactory:Hx},{provide:xl,multi:!0,useExisting:Ev}]}var lF=new b("cdk-dir-doc",{providedIn:"root",factory:()=>c(Y)}),cF=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function Zx(t){let i=t?.toLowerCase()||"";return i==="auto"&&typeof navigator<"u"&&navigator?.language?cF.test(navigator.language)?"rtl":"ltr":i==="rtl"?"rtl":"ltr"}var tt=(()=>{class t{get value(){return this.valueSignal()}valueSignal=I("ltr");change=new M;constructor(){let e=c(lF,{optional:!0});if(e){let n=e.body?e.body.dir:null,r=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(Zx(n||r||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(n){return new(n||t)};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var _e=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=H({type:t});static \u0275inj=j({})}return t})();var dF=["*"];var uF=[[["","mat-card-avatar",""],["","matCardAvatar",""]],[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],"*"],mF=["[mat-card-avatar], [matCardAvatar]",`mat-card-title, mat-card-subtitle,
      [mat-card-title], [mat-card-subtitle],
      [matCardTitle], [matCardSubtitle]`,"*"],fF=new b("MAT_CARD_CONFIG"),At=(()=>{class t{appearance;constructor(){let e=c(fF,{optional:!0});this.appearance=e?.appearance||"raised"}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=D({type:t,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(n,r){n&2&&U("mat-mdc-card-outlined",r.appearance==="outlined")("mdc-card--outlined",r.appearance==="outlined")("mat-mdc-card-filled",r.appearance==="filled")("mdc-card--filled",r.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:dF,decls:1,vars:0,template:function(n,r){n&1&&(Me(),ee(0))},styles:[`.mat-mdc-card {
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
`],encapsulation:2,changeDetection:0})}return t})(),Hm=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=A({type:t,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-mdc-card-title"]})}return t})();var sn=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=A({type:t,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"]})}return t})(),Kx=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=A({type:t,selectors:[["mat-card-subtitle"],["","mat-card-subtitle",""],["","matCardSubtitle",""]],hostAttrs:[1,"mat-mdc-card-subtitle"]})}return t})();var Fn=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=D({type:t,selectors:[["mat-card-header"]],hostAttrs:[1,"mat-mdc-card-header"],ngContentSelectors:mF,decls:4,vars:0,consts:[[1,"mat-mdc-card-header-text"]],template:function(n,r){n&1&&(Me(uF),ee(0),Ee(1,"div",0),ee(2,1),Te(),ee(3,2))},encapsulation:2,changeDetection:0})}return t})();var Xx=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=A({type:t,selectors:[["","mat-card-avatar",""],["","matCardAvatar",""]],hostAttrs:[1,"mat-mdc-card-avatar"]})}return t})();var Ri=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=H({type:t});static \u0275inj=j({imports:[_e]})}return t})();function ec(t){return t.buttons===0||t.detail===0}function tc(t){let i=t.touches&&t.touches[0]||t.changedTouches&&t.changedTouches[0];return!!i&&i.identifier===-1&&(i.radiusX==null||i.radiusX===1)&&(i.radiusY==null||i.radiusY===1)}var Tv;function Jx(){if(Tv==null){let t=typeof document<"u"?document.head:null;Tv=!!(t&&(t.createShadowRoot||t.attachShadow))}return Tv}function kv(t){if(Jx()){let i=t.getRootNode?t.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&i instanceof ShadowRoot)return i}return null}function Oi(){let t=typeof document<"u"&&document?document.activeElement:null;for(;t&&t.shadowRoot;){let i=t.shadowRoot.activeElement;if(i===t)break;t=i}return t}function Vt(t){return t.composedPath?t.composedPath()[0]:t.target}var Av;try{Av=typeof Intl<"u"&&Intl.v8BreakIterator}catch{Av=!1}var ce=(()=>{class t{_platformId=c(So);isBrowser=this._platformId?DD(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||Av)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(n){return new(n||t)};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var nc;function eE(){if(nc==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>nc=!0}))}finally{nc=nc||!1}return nc}function Ka(t){return eE()?t:!!t.capture}function yn(t,i=0){return tE(t)?Number(t):arguments.length===2?i:0}function tE(t){return!isNaN(parseFloat(t))&&!isNaN(Number(t))}function Jt(t){return t instanceof V?t.nativeElement:t}var nE=new b("cdk-input-modality-detector-options"),iE={ignoreKeys:[18,17,224,91,16]},rE=650,Rv={passive:!0,capture:!0},oE=(()=>{class t{_platform=c(ce);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new mt(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(n=>n===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=Vt(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<rE||(this._modality.next(ec(e)?"keyboard":"mouse"),this._mostRecentTarget=Vt(e))};_onTouchstart=e=>{if(tc(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=Vt(e)};constructor(){let e=c(L),n=c(Y),r=c(nE,{optional:!0});if(this._options=C(C({},iE),r),this.modalityDetected=this._modality.pipe(uo(1)),this.modalityChanged=this.modalityDetected.pipe(Dd()),this._platform.isBrowser){let o=c(pt).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[o.listen(n,"keydown",this._onKeydown,Rv),o.listen(n,"mousedown",this._onMousedown,Rv),o.listen(n,"touchstart",this._onTouchstart,Rv)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static \u0275fac=function(n){return new(n||t)};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),ic=(function(t){return t[t.IMMEDIATE=0]="IMMEDIATE",t[t.EVENTUAL=1]="EVENTUAL",t})(ic||{}),aE=new b("cdk-focus-monitor-default-options"),zm=Ka({passive:!0,capture:!0}),cr=(()=>{class t{_ngZone=c(L);_platform=c(ce);_inputModalityDetector=c(oE);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=c(Y);_stopInputModalityDetector=new x;constructor(){let e=c(aE,{optional:!0});this._detectionMode=e?.detectionMode||ic.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let n=Vt(e);for(let r=n;r;r=r.parentElement)e.type==="focus"?this._onFocus(e,r):this._onBlur(e,r)};monitor(e,n=!1){let r=Jt(e);if(!this._platform.isBrowser||r.nodeType!==1)return q();let o=kv(r)||this._document,a=this._elementInfo.get(r);if(a)return n&&(a.checkChildren=!0),a.subject;let s={checkChildren:n,subject:new x,rootNode:o};return this._elementInfo.set(r,s),this._registerGlobalListeners(s),s.subject}stopMonitoring(e){let n=Jt(e),r=this._elementInfo.get(n);r&&(r.subject.complete(),this._setClasses(n),this._elementInfo.delete(n),this._removeGlobalListeners(r))}focusVia(e,n,r){let o=Jt(e),a=this._document.activeElement;o===a?this._getClosestElementsInfo(o).forEach(([s,l])=>this._originChanged(s,n,l)):(this._setOrigin(n),typeof o.focus=="function"&&o.focus(r))}ngOnDestroy(){this._elementInfo.forEach((e,n)=>this.stopMonitoring(n))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===ic.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,n){e.classList.toggle("cdk-focused",!!n),e.classList.toggle("cdk-touch-focused",n==="touch"),e.classList.toggle("cdk-keyboard-focused",n==="keyboard"),e.classList.toggle("cdk-mouse-focused",n==="mouse"),e.classList.toggle("cdk-program-focused",n==="program")}_setOrigin(e,n=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&n,this._detectionMode===ic.IMMEDIATE){clearTimeout(this._originTimeoutId);let r=this._originFromTouchInteraction?rE:1;this._originTimeoutId=setTimeout(()=>this._origin=null,r)}})}_onFocus(e,n){let r=this._elementInfo.get(n),o=Vt(e);!r||!r.checkChildren&&n!==o||this._originChanged(n,this._getFocusOrigin(o),r)}_onBlur(e,n){let r=this._elementInfo.get(n);!r||r.checkChildren&&e.relatedTarget instanceof Node&&n.contains(e.relatedTarget)||(this._setClasses(n),this._emitOrigin(r,null))}_emitOrigin(e,n){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(n))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let n=e.rootNode,r=this._rootNodeFocusListenerCount.get(n)||0;r||this._ngZone.runOutsideAngular(()=>{n.addEventListener("focus",this._rootNodeFocusAndBlurListener,zm),n.addEventListener("blur",this._rootNodeFocusAndBlurListener,zm)}),this._rootNodeFocusListenerCount.set(n,r+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(ye(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(e){let n=e.rootNode;if(this._rootNodeFocusListenerCount.has(n)){let r=this._rootNodeFocusListenerCount.get(n);r>1?this._rootNodeFocusListenerCount.set(n,r-1):(n.removeEventListener("focus",this._rootNodeFocusAndBlurListener,zm),n.removeEventListener("blur",this._rootNodeFocusAndBlurListener,zm),this._rootNodeFocusListenerCount.delete(n))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,n,r){this._setClasses(e,n),this._emitOrigin(r,n),this._lastFocusOrigin=n}_getClosestElementsInfo(e){let n=[];return this._elementInfo.forEach((r,o)=>{(o===e||r.checkChildren&&o.contains(e))&&n.push([o,r])}),n}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:n,mostRecentModality:r}=this._inputModalityDetector;if(r!=="mouse"||!n||n===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let o=e.labels;if(o){for(let a=0;a<o.length;a++)if(o[a].contains(n))return!0}return!1}static \u0275fac=function(n){return new(n||t)};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),rc=(()=>{class t{_elementRef=c(V);_focusMonitor=c(cr);_monitorSubscription;_focusOrigin=null;cdkFocusChange=new M;constructor(){}get focusOrigin(){return this._focusOrigin}ngAfterViewInit(){let e=this._elementRef.nativeElement;this._monitorSubscription=this._focusMonitor.monitor(e,e.nodeType===1&&e.hasAttribute("cdkMonitorSubtreeFocus")).subscribe(n=>{this._focusOrigin=n,this.cdkFocusChange.emit(n)})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._monitorSubscription?.unsubscribe()}static \u0275fac=function(n){return new(n||t)};static \u0275dir=A({type:t,selectors:[["","cdkMonitorElementFocus",""],["","cdkMonitorSubtreeFocus",""]],outputs:{cdkFocusChange:"cdkFocusChange"},exportAs:["cdkMonitorFocus"]})}return t})();var $m=new WeakMap,Ye=(()=>{class t{_appRef;_injector=c($);_environmentInjector=c(Oe);load(e){let n=this._appRef=this._appRef||this._injector.get(_n),r=$m.get(n);r||(r={loaders:new Set,refs:[]},$m.set(n,r),n.onDestroy(()=>{$m.get(n)?.refs.forEach(o=>o.destroy()),$m.delete(n)})),r.loaders.has(e)||(r.loaders.add(e),r.refs.push(Xu(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(n){return new(n||t)};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Ni=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=D({type:t,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(n,r){},styles:[`.cdk-visually-hidden {
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
`],encapsulation:2,changeDetection:0})}return t})(),Wm;function hF(){if(Wm===void 0&&(Wm=null,typeof window<"u")){let t=window;t.trustedTypes!==void 0&&(Wm=t.trustedTypes.createPolicy("angular#components",{createHTML:i=>i}))}return Wm}function jo(t){return hF()?.createHTML(t)||t}function sE(t,i,e){let n=e.sanitize(Pt.HTML,i);t.innerHTML=jo(n||"")}function Xa(t){return Array.isArray(t)?t:[t]}var lE=new Set,Ho,Ja=(()=>{class t{_platform=c(ce);_nonce=c(Aa,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):gF}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&pF(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function pF(t,i){if(!lE.has(t))try{Ho||(Ho=document.createElement("style"),i&&Ho.setAttribute("nonce",i),Ho.setAttribute("type","text/css"),document.head.appendChild(Ho)),Ho.sheet&&(Ho.sheet.insertRule(`@media ${t} {body{ }}`,0),lE.add(t))}catch(e){console.error(e)}}function gF(t){return{matches:t==="all"||t==="",media:t,addListener:()=>{},removeListener:()=>{}}}var oc=(()=>{class t{_mediaMatcher=c(Ja);_zone=c(L);_queries=new Map;_destroySubject=new x;constructor(){}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return cE(Xa(e)).some(r=>this._registerQuery(r).mql.matches)}observe(e){let r=cE(Xa(e)).map(a=>this._registerQuery(a).observable),o=sa(r);return o=yr(o.pipe(nt(1)),o.pipe(uo(1),Wi(0))),o.pipe(oe(a=>{let s={matches:!1,breakpoints:{}};return a.forEach(({matches:l,query:d})=>{s.matches=s.matches||l,s.breakpoints[d]=l}),s}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);let n=this._mediaMatcher.matchMedia(e),o={observable:new re(a=>{let s=l=>this._zone.run(()=>a.next(l));return n.addListener(s),()=>{n.removeListener(s)}}).pipe(Ke(n),oe(({matches:a})=>({query:e,matches:a})),ye(this._destroySubject)),mql:n};return this._queries.set(e,o),o}static \u0275fac=function(n){return new(n||t)};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function cE(t){return t.map(i=>i.split(",")).reduce((i,e)=>i.concat(e)).map(i=>i.trim())}function _F(t){if(t.type==="characterData"&&t.target instanceof Comment)return!0;if(t.type==="childList"){for(let i=0;i<t.addedNodes.length;i++)if(!(t.addedNodes[i]instanceof Comment))return!1;for(let i=0;i<t.removedNodes.length;i++)if(!(t.removedNodes[i]instanceof Comment))return!1;return!0}return!1}var dE=(()=>{class t{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),uE=(()=>{class t{_mutationObserverFactory=c(dE);_observedElements=new Map;_ngZone=c(L);constructor(){}ngOnDestroy(){this._observedElements.forEach((e,n)=>this._cleanupObserver(n))}observe(e){let n=Jt(e);return new re(r=>{let a=this._observeElement(n).pipe(oe(s=>s.filter(l=>!_F(l))),ve(s=>!!s.length)).subscribe(s=>{this._ngZone.run(()=>{r.next(s)})});return()=>{a.unsubscribe(),this._unobserveElement(n)}})}_observeElement(e){return this._ngZone.runOutsideAngular(()=>{if(this._observedElements.has(e))this._observedElements.get(e).count++;else{let n=new x,r=this._mutationObserverFactory.create(o=>n.next(o));r&&r.observe(e,{characterData:!0,childList:!0,subtree:!0}),this._observedElements.set(e,{observer:r,stream:n,count:1})}return this._observedElements.get(e).stream})}_unobserveElement(e){this._observedElements.has(e)&&(this._observedElements.get(e).count--,this._observedElements.get(e).count||this._cleanupObserver(e))}_cleanupObserver(e){if(this._observedElements.has(e)){let{observer:n,stream:r}=this._observedElements.get(e);n&&n.disconnect(),r.complete(),this._observedElements.delete(e)}}static \u0275fac=function(n){return new(n||t)};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Gm=(()=>{class t{_contentObserver=c(uE);_elementRef=c(V);event=new M;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._disabled?this._unsubscribe():this._subscribe()}_disabled=!1;get debounce(){return this._debounce}set debounce(e){this._debounce=yn(e),this._subscribe()}_debounce;_currentSubscription=null;constructor(){}ngAfterContentInit(){!this._currentSubscription&&!this.disabled&&this._subscribe()}ngOnDestroy(){this._unsubscribe()}_subscribe(){this._unsubscribe();let e=this._contentObserver.observe(this._elementRef);this._currentSubscription=(this.debounce?e.pipe(Wi(this.debounce)):e).subscribe(this.event)}_unsubscribe(){this._currentSubscription?.unsubscribe()}static \u0275fac=function(n){return new(n||t)};static \u0275dir=A({type:t,selectors:[["","cdkObserveContent",""]],inputs:{disabled:[2,"cdkObserveContentDisabled","disabled",te],debounce:"debounce"},outputs:{event:"cdkObserveContent"},exportAs:["cdkObserveContent"]})}return t})(),es=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=H({type:t});static \u0275inj=j({providers:[dE]})}return t})();var Fv=(()=>{class t{_platform=c(ce);constructor(){}isDisabled(e){return e.hasAttribute("disabled")}isVisible(e){return bF(e)&&getComputedStyle(e).visibility==="visible"}isTabbable(e){if(!this._platform.isBrowser)return!1;let n=vF(IF(e));if(n&&(mE(n)===-1||!this.isVisible(n)))return!1;let r=e.nodeName.toLowerCase(),o=mE(e);return e.hasAttribute("contenteditable")?o!==-1:r==="iframe"||r==="object"||this._platform.WEBKIT&&this._platform.IOS&&!EF(e)?!1:r==="audio"?e.hasAttribute("controls")?o!==-1:!1:r==="video"?o===-1?!1:o!==null?!0:this._platform.FIREFOX||e.hasAttribute("controls"):e.tabIndex>=0}isFocusable(e,n){return MF(e)&&!this.isDisabled(e)&&(n?.ignoreVisibility||this.isVisible(e))}static \u0275fac=function(n){return new(n||t)};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function vF(t){try{return t.frameElement}catch{return null}}function bF(t){return!!(t.offsetWidth||t.offsetHeight||typeof t.getClientRects=="function"&&t.getClientRects().length)}function yF(t){let i=t.nodeName.toLowerCase();return i==="input"||i==="select"||i==="button"||i==="textarea"}function CF(t){return DF(t)&&t.type=="hidden"}function wF(t){return xF(t)&&t.hasAttribute("href")}function DF(t){return t.nodeName.toLowerCase()=="input"}function xF(t){return t.nodeName.toLowerCase()=="a"}function pE(t){if(!t.hasAttribute("tabindex")||t.tabIndex===void 0)return!1;let i=t.getAttribute("tabindex");return!!(i&&!isNaN(parseInt(i,10)))}function mE(t){if(!pE(t))return null;let i=parseInt(t.getAttribute("tabindex")||"",10);return isNaN(i)?-1:i}function EF(t){let i=t.nodeName.toLowerCase(),e=i==="input"&&t.type;return e==="text"||e==="password"||i==="select"||i==="textarea"}function MF(t){return CF(t)?!1:yF(t)||wF(t)||t.hasAttribute("contenteditable")||pE(t)}function IF(t){return t.ownerDocument&&t.ownerDocument.defaultView||window}var Nv=class{_element;_checker;_ngZone;_document;_injector;_startAnchor=null;_endAnchor=null;_hasAttached=!1;startAnchorListener=()=>this.focusLastTabbableElement();endAnchorListener=()=>this.focusFirstTabbableElement();get enabled(){return this._enabled}set enabled(i){this._enabled=i,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(i,this._startAnchor),this._toggleAnchorTabIndex(i,this._endAnchor))}_enabled=!0;constructor(i,e,n,r,o=!1,a){this._element=i,this._checker=e,this._ngZone=n,this._document=r,this._injector=a,o||this.attachAnchors()}destroy(){let i=this._startAnchor,e=this._endAnchor;i&&(i.removeEventListener("focus",this.startAnchorListener),i.remove()),e&&(e.removeEventListener("focus",this.endAnchorListener),e.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener("focus",this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener("focus",this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(i){return new Promise(e=>{this._executeOnStable(()=>e(this.focusInitialElement(i)))})}focusFirstTabbableElementWhenReady(i){return new Promise(e=>{this._executeOnStable(()=>e(this.focusFirstTabbableElement(i)))})}focusLastTabbableElementWhenReady(i){return new Promise(e=>{this._executeOnStable(()=>e(this.focusLastTabbableElement(i)))})}_getRegionBoundary(i){let e=this._element.querySelectorAll(`[cdk-focus-region-${i}], [cdkFocusRegion${i}], [cdk-focus-${i}]`);return i=="start"?e.length?e[0]:this._getFirstTabbableElement(this._element):e.length?e[e.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(i){let e=this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");if(e){if(!this._checker.isFocusable(e)){let n=this._getFirstTabbableElement(e);return n?.focus(i),!!n}return e.focus(i),!0}return this.focusFirstTabbableElement(i)}focusFirstTabbableElement(i){let e=this._getRegionBoundary("start");return e&&e.focus(i),!!e}focusLastTabbableElement(i){let e=this._getRegionBoundary("end");return e&&e.focus(i),!!e}hasAttached(){return this._hasAttached}_getFirstTabbableElement(i){if(this._checker.isFocusable(i)&&this._checker.isTabbable(i))return i;let e=i.children;for(let n=0;n<e.length;n++){let r=e[n].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(e[n]):null;if(r)return r}return null}_getLastTabbableElement(i){if(this._checker.isFocusable(i)&&this._checker.isTabbable(i))return i;let e=i.children;for(let n=e.length-1;n>=0;n--){let r=e[n].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(e[n]):null;if(r)return r}return null}_createAnchor(){let i=this._document.createElement("div");return this._toggleAnchorTabIndex(this._enabled,i),i.classList.add("cdk-visually-hidden"),i.classList.add("cdk-focus-trap-anchor"),i.setAttribute("aria-hidden","true"),i}_toggleAnchorTabIndex(i,e){i?e.setAttribute("tabindex","0"):e.removeAttribute("tabindex")}toggleAnchors(i){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(i,this._startAnchor),this._toggleAnchorTabIndex(i,this._endAnchor))}_executeOnStable(i){this._injector?We(i,{injector:this._injector}):setTimeout(i)}},qm=(()=>{class t{_checker=c(Fv);_ngZone=c(L);_document=c(Y);_injector=c($);constructor(){c(Ye).load(Ni)}create(e,n=!1){return new Nv(e,this._checker,this._ngZone,this._document,n,this._injector)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Pv=(()=>{class t{_elementRef=c(V);_focusTrapFactory=c(qm);focusTrap=void 0;_previouslyFocusedElement=null;get enabled(){return this.focusTrap?.enabled||!1}set enabled(e){this.focusTrap&&(this.focusTrap.enabled=e)}autoCapture=!1;constructor(){c(ce).isBrowser&&(this.focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement,!0))}ngOnDestroy(){this.focusTrap?.destroy(),this._previouslyFocusedElement&&(this._previouslyFocusedElement.focus(),this._previouslyFocusedElement=null)}ngAfterContentInit(){this.focusTrap?.attachAnchors(),this.autoCapture&&this._captureFocus()}ngDoCheck(){this.focusTrap&&!this.focusTrap.hasAttached()&&this.focusTrap.attachAnchors()}ngOnChanges(e){let n=e.autoCapture;n&&!n.firstChange&&this.autoCapture&&this.focusTrap?.hasAttached()&&this._captureFocus()}_captureFocus(){this._previouslyFocusedElement=Oi(),this.focusTrap?.focusInitialElementWhenReady()}static \u0275fac=function(n){return new(n||t)};static \u0275dir=A({type:t,selectors:[["","cdkTrapFocus",""]],inputs:{enabled:[2,"cdkTrapFocus","enabled",te],autoCapture:[2,"cdkTrapFocusAutoCapture","autoCapture",te]},exportAs:["cdkTrapFocus"],features:[Fe]})}return t})(),gE=new b("liveAnnouncerElement",{providedIn:"root",factory:()=>null}),_E=new b("LIVE_ANNOUNCER_DEFAULT_OPTIONS"),SF=0,ac=(()=>{class t{_ngZone=c(L);_defaultOptions=c(_E,{optional:!0});_liveElement;_document=c(Y);_sanitizer=c(Pl);_previousTimeout;_currentPromise;_currentResolve;constructor(){let e=c(gE,{optional:!0});this._liveElement=e||this._createLiveElement()}announce(e,...n){let r=this._defaultOptions,o,a;return n.length===1&&typeof n[0]=="number"?a=n[0]:[o,a]=n,this.clear(),clearTimeout(this._previousTimeout),o||(o=r&&r.politeness?r.politeness:"polite"),a==null&&r&&(a=r.duration),this._liveElement.setAttribute("aria-live",o),this._liveElement.id&&this._exposeAnnouncerToModals(this._liveElement.id),this._ngZone.runOutsideAngular(()=>(this._currentPromise||(this._currentPromise=new Promise(s=>this._currentResolve=s)),clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{!e||typeof e=="string"?this._liveElement.textContent=e:sE(this._liveElement,e,this._sanitizer),typeof a=="number"&&(this._previousTimeout=setTimeout(()=>this.clear(),a)),this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0},100),this._currentPromise))}clear(){this._liveElement&&(this._liveElement.textContent="")}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement?.remove(),this._liveElement=null,this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0}_createLiveElement(){let e="cdk-live-announcer-element",n=this._document.getElementsByClassName(e),r=this._document.createElement("div");for(let o=0;o<n.length;o++)n[o].remove();return r.classList.add(e),r.classList.add("cdk-visually-hidden"),r.setAttribute("aria-atomic","true"),r.setAttribute("aria-live","polite"),r.id=`cdk-live-announcer-${SF++}`,this._document.body.appendChild(r),r}_exposeAnnouncerToModals(e){let n=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let r=0;r<n.length;r++){let o=n[r],a=o.getAttribute("aria-owns");a?a.indexOf(e)===-1&&o.setAttribute("aria-owns",a+" "+e):o.setAttribute("aria-owns",e)}}static \u0275fac=function(n){return new(n||t)};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var jr=(function(t){return t[t.NONE=0]="NONE",t[t.BLACK_ON_WHITE=1]="BLACK_ON_WHITE",t[t.WHITE_ON_BLACK=2]="WHITE_ON_BLACK",t})(jr||{}),fE="cdk-high-contrast-black-on-white",hE="cdk-high-contrast-white-on-black",Ov="cdk-high-contrast-active",vE=(()=>{class t{_platform=c(ce);_hasCheckedHighContrastMode=!1;_document=c(Y);_breakpointSubscription;constructor(){this._breakpointSubscription=c(oc).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return jr.NONE;let e=this._document.createElement("div");e.style.backgroundColor="rgb(1,2,3)",e.style.position="absolute",this._document.body.appendChild(e);let n=this._document.defaultView||window,r=n&&n.getComputedStyle?n.getComputedStyle(e):null,o=(r&&r.backgroundColor||"").replace(/ /g,"");switch(e.remove(),o){case"rgb(0,0,0)":case"rgb(45,50,54)":case"rgb(32,32,32)":return jr.WHITE_ON_BLACK;case"rgb(255,255,255)":case"rgb(255,250,239)":return jr.BLACK_ON_WHITE}return jr.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let e=this._document.body.classList;e.remove(Ov,fE,hE),this._hasCheckedHighContrastMode=!0;let n=this.getHighContrastMode();n===jr.BLACK_ON_WHITE?e.add(Ov,fE):n===jr.WHITE_ON_BLACK&&e.add(Ov,hE)}}static \u0275fac=function(n){return new(n||t)};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Uo=(()=>{class t{constructor(){c(vE)._applyBodyHighContrastModeCssClasses()}static \u0275fac=function(n){return new(n||t)};static \u0275mod=H({type:t});static \u0275inj=j({imports:[es]})}return t})();var TF=200,Ym=class{_letterKeyStream=new x;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new x;selectedItem=this._selectedItem;constructor(i,e){let n=typeof e?.debounceInterval=="number"?e.debounceInterval:TF;e?.skipPredicate&&(this._skipPredicateFn=e.skipPredicate),this.setItems(i),this._setupKeyHandler(n)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(i){this._selectedItemIndex=i}setItems(i){this._items=i}handleKey(i){let e=i.keyCode;i.key&&i.key.length===1?this._letterKeyStream.next(i.key.toLocaleUpperCase()):(e>=65&&e<=90||e>=48&&e<=57)&&this._letterKeyStream.next(String.fromCharCode(e))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(i){this._letterKeyStream.pipe(at(e=>this._pressedLetters.push(e)),Wi(i),ve(()=>this._pressedLetters.length>0),oe(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(e=>{for(let n=1;n<this._items.length+1;n++){let r=(this._selectedItemIndex+n)%this._items.length,o=this._items[r];if(!this._skipPredicateFn?.(o)&&o.getLabel?.().toLocaleUpperCase().trim().indexOf(e)===0){this._selectedItem.next(o);break}}this._pressedLetters=[]})}};function _t(t,...i){return i.length?i.some(e=>t[e]):t.altKey||t.shiftKey||t.ctrlKey||t.metaKey}var ts=class{_items;_activeItemIndex=I(-1);_activeItem=I(null);_wrap=!1;_typeaheadSubscription=ie.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=i=>i.disabled;constructor(i,e){this._items=i,i instanceof Xi?this._itemChangesSubscription=i.changes.subscribe(n=>this._itemsChanged(n.toArray())):wi(i)&&(this._effectRef=Xt(()=>this._itemsChanged(i()),{injector:e}))}tabOut=new x;change=new x;skipPredicate(i){return this._skipPredicateFn=i,this}withWrap(i=!0){return this._wrap=i,this}withVerticalOrientation(i=!0){return this._vertical=i,this}withHorizontalOrientation(i){return this._horizontal=i,this}withAllowedModifierKeys(i){return this._allowedModifierKeys=i,this}withTypeAhead(i=200){this._typeaheadSubscription.unsubscribe();let e=this._getItemsArray();return this._typeahead=new Ym(e,{debounceInterval:typeof i=="number"?i:void 0,skipPredicate:n=>this._skipPredicateFn(n)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(n=>{this.setActiveItem(n)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(i=!0){return this._homeAndEnd=i,this}withPageUpDown(i=!0,e=10){return this._pageUpAndDown={enabled:i,delta:e},this}setActiveItem(i){let e=this._activeItem();this.updateActiveItem(i),this._activeItem()!==e&&this.change.next(this._activeItemIndex())}onKeydown(i){let e=i.keyCode,r=["altKey","ctrlKey","metaKey","shiftKey"].every(o=>!i[o]||this._allowedModifierKeys.indexOf(o)>-1);switch(e){case 9:this.tabOut.next();return;case 40:if(this._vertical&&r){this.setNextItemActive();break}else return;case 38:if(this._vertical&&r){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&r){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&r){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&r){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&r){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(o>0?o:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()+this._pageUpAndDown.delta,a=this._getItemsArray().length;this._setActiveItemByIndex(o<a?o:a-1,-1);break}else return;default:(r||_t(i,"shiftKey"))&&this._typeahead?.handleKey(i);return}this._typeahead?.reset(),i.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(i){let e=this._getItemsArray(),n=typeof i=="number"?i:e.indexOf(i),r=e[n];this._activeItem.set(r??null),this._activeItemIndex.set(n),this._typeahead?.setCurrentSelectedItemIndex(n)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(i){this._wrap?this._setActiveInWrapMode(i):this._setActiveInDefaultMode(i)}_setActiveInWrapMode(i){let e=this._getItemsArray();for(let n=1;n<=e.length;n++){let r=(this._activeItemIndex()+i*n+e.length)%e.length,o=e[r];if(!this._skipPredicateFn(o)){this.setActiveItem(r);return}}}_setActiveInDefaultMode(i){this._setActiveItemByIndex(this._activeItemIndex()+i,i)}_setActiveItemByIndex(i,e){let n=this._getItemsArray();if(n[i]){for(;this._skipPredicateFn(n[i]);)if(i+=e,!n[i])return;this.setActiveItem(i)}}_getItemsArray(){return wi(this._items)?this._items():this._items instanceof Xi?this._items.toArray():this._items}_itemsChanged(i){this._typeahead?.setItems(i);let e=this._activeItem();if(e){let n=i.indexOf(e);n>-1&&n!==this._activeItemIndex()&&(this._activeItemIndex.set(n),this._typeahead?.setCurrentSelectedItemIndex(n))}}};var sc=class extends ts{setActiveItem(i){this.activeItem&&this.activeItem.setInactiveStyles(),super.setActiveItem(i),this.activeItem&&this.activeItem.setActiveStyles()}};var lc=class extends ts{_origin="program";setFocusOrigin(i){return this._origin=i,this}setActiveItem(i){super.setActiveItem(i),this.activeItem&&this.activeItem.focus(this._origin)}};var Lv={},Qe=class t{_appId=c(Fr);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(i,e=!1){return this._appId!=="ng"&&(i+=this._appId),Lv.hasOwnProperty(i)||(Lv[i]=0),`${i}${e?t._infix+"-":""}${Lv[i]++}`}static \u0275fac=function(e){return new(e||t)};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})};var CE=" ";function jv(t,i,e){let n=ef(t,i);e=e.trim(),!n.some(r=>r.trim()===e)&&(n.push(e),t.setAttribute(i,n.join(CE)))}function tf(t,i,e){let n=ef(t,i);e=e.trim();let r=n.filter(o=>o!==e);r.length?t.setAttribute(i,r.join(CE)):t.removeAttribute(i)}function ef(t,i){return t.getAttribute(i)?.match(/\S+/g)??[]}var wE="cdk-describedby-message",Jm="cdk-describedby-host",Bv=0,DE=(()=>{class t{_platform=c(ce);_document=c(Y);_messageRegistry=new Map;_messagesContainer=null;_id=`${Bv++}`;constructor(){c(Ye).load(Ni),this._id=c(Fr)+"-"+Bv++}describe(e,n,r){if(!this._canBeDescribed(e,n))return;let o=Vv(n,r);typeof n!="string"?(yE(n,this._id),this._messageRegistry.set(o,{messageElement:n,referenceCount:0})):this._messageRegistry.has(o)||this._createMessageElement(n,r),this._isElementDescribedByMessage(e,o)||this._addMessageReference(e,o)}removeDescription(e,n,r){if(!n||!this._isElementNode(e))return;let o=Vv(n,r);if(this._isElementDescribedByMessage(e,o)&&this._removeMessageReference(e,o),typeof n=="string"){let a=this._messageRegistry.get(o);a&&a.referenceCount===0&&this._deleteMessageElement(o)}this._messagesContainer?.childNodes.length===0&&(this._messagesContainer.remove(),this._messagesContainer=null)}ngOnDestroy(){let e=this._document.querySelectorAll(`[${Jm}="${this._id}"]`);for(let n=0;n<e.length;n++)this._removeCdkDescribedByReferenceIds(e[n]),e[n].removeAttribute(Jm);this._messagesContainer?.remove(),this._messagesContainer=null,this._messageRegistry.clear()}_createMessageElement(e,n){let r=this._document.createElement("div");yE(r,this._id),r.textContent=e,n&&r.setAttribute("role",n),this._createMessagesContainer(),this._messagesContainer.appendChild(r),this._messageRegistry.set(Vv(e,n),{messageElement:r,referenceCount:0})}_deleteMessageElement(e){this._messageRegistry.get(e)?.messageElement?.remove(),this._messageRegistry.delete(e)}_createMessagesContainer(){if(this._messagesContainer)return;let e="cdk-describedby-message-container",n=this._document.querySelectorAll(`.${e}[platform="server"]`);for(let o=0;o<n.length;o++)n[o].remove();let r=this._document.createElement("div");r.style.visibility="hidden",r.classList.add(e),r.classList.add("cdk-visually-hidden"),this._platform.isBrowser||r.setAttribute("platform","server"),this._document.body.appendChild(r),this._messagesContainer=r}_removeCdkDescribedByReferenceIds(e){let n=ef(e,"aria-describedby").filter(r=>r.indexOf(wE)!=0);e.setAttribute("aria-describedby",n.join(" "))}_addMessageReference(e,n){let r=this._messageRegistry.get(n);jv(e,"aria-describedby",r.messageElement.id),e.setAttribute(Jm,this._id),r.referenceCount++}_removeMessageReference(e,n){let r=this._messageRegistry.get(n);r.referenceCount--,tf(e,"aria-describedby",r.messageElement.id),e.removeAttribute(Jm)}_isElementDescribedByMessage(e,n){let r=ef(e,"aria-describedby"),o=this._messageRegistry.get(n),a=o&&o.messageElement.id;return!!a&&r.indexOf(a)!=-1}_canBeDescribed(e,n){if(!this._isElementNode(e))return!1;if(n&&typeof n=="object")return!0;let r=n==null?"":`${n}`.trim(),o=e.getAttribute("aria-label");return r?!o||o.trim()!==r:!1}_isElementNode(e){return e.nodeType===this._document.ELEMENT_NODE}static \u0275fac=function(n){return new(n||t)};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Vv(t,i){return typeof t=="string"?`${i||""}/${t}`:t}function yE(t,i){t.id||(t.id=`${wE}-${i}-${Bv++}`)}var ni=(function(t){return t[t.NORMAL=0]="NORMAL",t[t.NEGATED=1]="NEGATED",t[t.INVERTED=2]="INVERTED",t})(ni||{}),nf,Wo;function rf(){if(Wo==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return Wo=!1,Wo;if(document.documentElement?.style&&"scrollBehavior"in document.documentElement.style)Wo=!0;else{let t=Element.prototype.scrollTo;t?Wo=!/\{\s*\[native code\]\s*\}/.test(t.toString()):Wo=!1}}return Wo}function rs(){if(typeof document!="object"||!document)return ni.NORMAL;if(nf==null){let t=document.createElement("div"),i=t.style;t.dir="rtl",i.width="1px",i.overflow="auto",i.visibility="hidden",i.pointerEvents="none",i.position="absolute";let e=document.createElement("div"),n=e.style;n.width="2px",n.height="1px",t.appendChild(e),document.body.appendChild(t),nf=ni.NORMAL,t.scrollLeft===0&&(t.scrollLeft=1,nf=t.scrollLeft===0?ni.NEGATED:ni.INVERTED),t.remove()}return nf}function Hv(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}var os,xE=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function Uv(){if(os)return os;if(typeof document!="object"||!document)return os=new Set(xE),os;let t=document.createElement("input");return os=new Set(xE.filter(i=>(t.setAttribute("type",i),t.type===i))),os}var EE={XSmall:"(max-width: 599.98px)",Small:"(min-width: 600px) and (max-width: 959.98px)",Medium:"(min-width: 960px) and (max-width: 1279.98px)",Large:"(min-width: 1280px) and (max-width: 1919.98px)",XLarge:"(min-width: 1920px)",Handset:"(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)",Tablet:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",Web:"(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)",HandsetPortrait:"(max-width: 599.98px) and (orientation: portrait)",TabletPortrait:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)",WebPortrait:"(min-width: 840px) and (orientation: portrait)",HandsetLandscape:"(max-width: 959.98px) and (orientation: landscape)",TabletLandscape:"(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",WebLandscape:"(min-width: 1280px) and (orientation: landscape)"};var kF=new b("MATERIAL_ANIMATIONS"),ME=null;function AF(){return c(kF,{optional:!0})?.animationsDisabled||c(_l,{optional:!0})==="NoopAnimations"?"di-disabled":(ME??=c(Ja).matchMedia("(prefers-reduced-motion)").matches,ME?"reduced-motion":"enabled")}function Ve(){return AF()!=="enabled"}function ct(t){return t==null?"":typeof t=="string"?t:`${t}px`}function Rt(t){return t!=null&&`${t}`!="false"}var Pn=(function(t){return t[t.FADING_IN=0]="FADING_IN",t[t.VISIBLE=1]="VISIBLE",t[t.FADING_OUT=2]="FADING_OUT",t[t.HIDDEN=3]="HIDDEN",t})(Pn||{}),zv=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=Pn.HIDDEN;constructor(i,e,n,r=!1){this._renderer=i,this.element=e,this.config=n,this._animationForciblyDisabledThroughCss=r}fadeOut(){this._renderer.fadeOutRipple(this)}},IE=Ka({passive:!0,capture:!0}),$v=class{_events=new Map;addHandler(i,e,n,r){let o=this._events.get(e);if(o){let a=o.get(n);a?a.add(r):o.set(n,new Set([r]))}else this._events.set(e,new Map([[n,new Set([r])]])),i.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,IE)})}removeHandler(i,e,n){let r=this._events.get(i);if(!r)return;let o=r.get(e);o&&(o.delete(n),o.size===0&&r.delete(e),r.size===0&&(this._events.delete(i),document.removeEventListener(i,this._delegateEventHandler,IE)))}_delegateEventHandler=i=>{let e=Vt(i);e&&this._events.get(i.type)?.forEach((n,r)=>{(r===e||r.contains(e))&&n.forEach(o=>o.handleEvent(i))})}},cc={enterDuration:225,exitDuration:150},RF=800,SE=Ka({passive:!0,capture:!0}),TE=["mousedown","touchstart"],kE=["mouseup","mouseleave","touchend","touchcancel"],OF=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=D({type:t,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(n,r){},styles:[`.mat-ripple {
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
`],encapsulation:2,changeDetection:0})}return t})(),Go=class t{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new $v;constructor(i,e,n,r,o){this._target=i,this._ngZone=e,this._platform=r,r.isBrowser&&(this._containerElement=Jt(n)),o&&o.get(Ye).load(OF)}fadeInRipple(i,e,n={}){let r=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=C(C({},cc),n.animation);n.centered&&(i=r.left+r.width/2,e=r.top+r.height/2);let a=n.radius||NF(i,e,r),s=i-r.left,l=e-r.top,d=o.enterDuration,u=document.createElement("div");u.classList.add("mat-ripple-element"),u.style.left=`${s-a}px`,u.style.top=`${l-a}px`,u.style.height=`${a*2}px`,u.style.width=`${a*2}px`,n.color!=null&&(u.style.backgroundColor=n.color),u.style.transitionDuration=`${d}ms`,this._containerElement.appendChild(u);let h=window.getComputedStyle(u),_=h.transitionProperty,v=h.transitionDuration,w=_==="none"||v==="0s"||v==="0s, 0s"||r.width===0&&r.height===0,O=new zv(this,u,n,w);u.style.transform="scale3d(1, 1, 1)",O.state=Pn.FADING_IN,n.persistent||(this._mostRecentTransientRipple=O);let B=null;return!w&&(d||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let Q=()=>{B&&(B.fallbackTimer=null),clearTimeout(Mt),this._finishRippleTransition(O)},Ie=()=>this._destroyRipple(O),Mt=setTimeout(Ie,d+100);u.addEventListener("transitionend",Q),u.addEventListener("transitioncancel",Ie),B={onTransitionEnd:Q,onTransitionCancel:Ie,fallbackTimer:Mt}}),this._activeRipples.set(O,B),(w||!d)&&this._finishRippleTransition(O),O}fadeOutRipple(i){if(i.state===Pn.FADING_OUT||i.state===Pn.HIDDEN)return;let e=i.element,n=C(C({},cc),i.config.animation);e.style.transitionDuration=`${n.exitDuration}ms`,e.style.opacity="0",i.state=Pn.FADING_OUT,(i._animationForciblyDisabledThroughCss||!n.exitDuration)&&this._finishRippleTransition(i)}fadeOutAll(){this._getActiveRipples().forEach(i=>i.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(i=>{i.config.persistent||i.fadeOut()})}setupTriggerEvents(i){let e=Jt(i);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,TE.forEach(n=>{t._eventManager.addHandler(this._ngZone,n,e,this)}))}handleEvent(i){i.type==="mousedown"?this._onMousedown(i):i.type==="touchstart"?this._onTouchStart(i):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{kE.forEach(e=>{this._triggerElement.addEventListener(e,this,SE)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(i){i.state===Pn.FADING_IN?this._startFadeOutTransition(i):i.state===Pn.FADING_OUT&&this._destroyRipple(i)}_startFadeOutTransition(i){let e=i===this._mostRecentTransientRipple,{persistent:n}=i.config;i.state=Pn.VISIBLE,!n&&(!e||!this._isPointerDown)&&i.fadeOut()}_destroyRipple(i){let e=this._activeRipples.get(i)??null;this._activeRipples.delete(i),this._activeRipples.size||(this._containerRect=null),i===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),i.state=Pn.HIDDEN,e!==null&&(i.element.removeEventListener("transitionend",e.onTransitionEnd),i.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),i.element.remove()}_onMousedown(i){let e=ec(i),n=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+RF;!this._target.rippleDisabled&&!e&&!n&&(this._isPointerDown=!0,this.fadeInRipple(i.clientX,i.clientY,this._target.rippleConfig))}_onTouchStart(i){if(!this._target.rippleDisabled&&!tc(i)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=i.changedTouches;if(e)for(let n=0;n<e.length;n++)this.fadeInRipple(e[n].clientX,e[n].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(i=>{let e=i.state===Pn.VISIBLE||i.config.terminateOnPointerUp&&i.state===Pn.FADING_IN;!i.config.persistent&&e&&i.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let i=this._triggerElement;i&&(TE.forEach(e=>t._eventManager.removeHandler(e,i,this)),this._pointerUpEventsRegistered&&(kE.forEach(e=>i.removeEventListener(e,this,SE)),this._pointerUpEventsRegistered=!1))}};function NF(t,i,e){let n=Math.max(Math.abs(t-e.left),Math.abs(t-e.right)),r=Math.max(Math.abs(i-e.top),Math.abs(i-e.bottom));return Math.sqrt(n*n+r*r)}var as=new b("mat-ripple-global-options"),dc=(()=>{class t{_elementRef=c(V);_animationsDisabled=Ve();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=c(L),n=c(ce),r=c(as,{optional:!0}),o=c($);this._globalOptions=r||{},this._rippleRenderer=new Go(this,e,this._elementRef,n,o)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:C(C(C({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,n=0,r){return typeof e=="number"?this._rippleRenderer.fadeInRipple(e,n,C(C({},this.rippleConfig),r)):this._rippleRenderer.fadeInRipple(0,0,C(C({},this.rippleConfig),e))}static \u0275fac=function(n){return new(n||t)};static \u0275dir=A({type:t,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(n,r){n&2&&U("mat-ripple-unbounded",r.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return t})();var FF={capture:!0},PF=["focus","mousedown","mouseenter","touchstart"],Wv="mat-ripple-loader-uninitialized",Gv="mat-ripple-loader-class-name",AE="mat-ripple-loader-centered",of="mat-ripple-loader-disabled",RE=(()=>{class t{_document=c(Y);_animationsDisabled=Ve();_globalRippleOptions=c(as,{optional:!0});_platform=c(ce);_ngZone=c(L);_injector=c($);_eventCleanups;_hosts=new Map;constructor(){let e=c(pt).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>PF.map(n=>e.listen(this._document,n,this._onInteraction,FF)))}ngOnDestroy(){let e=this._hosts.keys();for(let n of e)this.destroyRipple(n);this._eventCleanups.forEach(n=>n())}configureRipple(e,n){e.setAttribute(Wv,this._globalRippleOptions?.namespace??""),(n.className||!e.hasAttribute(Gv))&&e.setAttribute(Gv,n.className||""),n.centered&&e.setAttribute(AE,""),n.disabled&&e.setAttribute(of,"")}setDisabled(e,n){let r=this._hosts.get(e);r?(r.target.rippleDisabled=n,!n&&!r.hasSetUpEvents&&(r.hasSetUpEvents=!0,r.renderer.setupTriggerEvents(e))):n?e.setAttribute(of,""):e.removeAttribute(of)}_onInteraction=e=>{let n=Vt(e);if(n instanceof HTMLElement){let r=n.closest(`[${Wv}="${this._globalRippleOptions?.namespace??""}"]`);r&&this._createRipple(r)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let n=this._document.createElement("span");n.classList.add("mat-ripple",e.getAttribute(Gv)),e.append(n);let r=this._globalRippleOptions,o=this._animationsDisabled?0:r?.animation?.enterDuration??cc.enterDuration,a=this._animationsDisabled?0:r?.animation?.exitDuration??cc.exitDuration,s={rippleDisabled:this._animationsDisabled||r?.disabled||e.hasAttribute(of),rippleConfig:{centered:e.hasAttribute(AE),terminateOnPointerUp:r?.terminateOnPointerUp,animation:{enterDuration:o,exitDuration:a}}},l=new Go(s,this._ngZone,n,this._platform,this._injector),d=!s.rippleDisabled;d&&l.setupTriggerEvents(e),this._hosts.set(e,{target:s,renderer:l,hasSetUpEvents:d}),e.removeAttribute(Wv)}destroyRipple(e){let n=this._hosts.get(e);n&&(n.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(n){return new(n||t)};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Fi=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=D({type:t,selectors:[["structural-styles"]],decls:0,vars:0,template:function(n,r){},styles:[`.mat-focus-indicator {
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
`],encapsulation:2,changeDetection:0})}return t})();var LF=["mat-icon-button",""],VF=["*"],BF=new b("MAT_BUTTON_CONFIG");function OE(t){return t==null?void 0:Si(t)}var qv=(()=>{class t{_elementRef=c(V);_ngZone=c(L);_animationsDisabled=Ve();_config=c(BF,{optional:!0});_focusMonitor=c(cr);_cleanupClick;_renderer=c(Se);_rippleLoader=c(RE);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}constructor(){c(Ye).load(Fi);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e="program",n){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,n):this._elementRef.nativeElement.focus(n)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static \u0275fac=function(n){return new(n||t)};static \u0275dir=A({type:t,hostAttrs:[1,"mat-mdc-button-base"],hostVars:13,hostBindings:function(n,r){n&2&&(Z("disabled",r._getDisabledAttribute())("aria-disabled",r._getAriaDisabled())("tabindex",r._getTabIndex()),Dt(r.color?"mat-"+r.color:""),U("mat-mdc-button-disabled",r.disabled)("mat-mdc-button-disabled-interactive",r.disabledInteractive)("mat-unthemed",!r.color)("_mat-animation-noopable",r._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",te],disabled:[2,"disabled","disabled",te],ariaDisabled:[2,"aria-disabled","ariaDisabled",te],disabledInteractive:[2,"disabledInteractive","disabledInteractive",te],tabIndex:[2,"tabIndex","tabIndex",OE],_tabindex:[2,"tabindex","_tabindex",OE]}})}return t})(),Hr=(()=>{class t extends qv{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=D({type:t,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[ge],attrs:LF,ngContentSelectors:VF,decls:4,vars:0,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(n,r){n&1&&(Me(),rn(0,"span",0),ee(1),rn(2,"span",1)(3,"span",2))},styles:[`.mat-mdc-icon-button {
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
`],encapsulation:2,changeDetection:0})}return t})();var ss=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=H({type:t});static \u0275inj=j({imports:[_e]})}return t})();var jF=["matButton",""],HF=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]]],UF=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"];var NE=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),Bt=(()=>{class t extends qv{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let e=zF(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let n=this._elementRef.nativeElement.classList,r=this._appearance?NE.get(this._appearance):null,o=NE.get(e);r&&n.remove(...r),n.add(...o),this._appearance=e}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=D({type:t,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[ge],attrs:jF,ngContentSelectors:UF,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(n,r){n&1&&(Me(HF),rn(0,"span",0),ee(1),Ee(2,"span",1),ee(3,1),Te(),ee(4,2),rn(5,"span",2)(6,"span",3)),n&2&&U("mdc-button__ripple",!r._isFab)("mdc-fab__ripple",r._isFab)},styles:[`.mat-mdc-button-base {
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
`],encapsulation:2,changeDetection:0})}return t})();function zF(t){return t.hasAttribute("mat-raised-button")?"elevated":t.hasAttribute("mat-stroked-button")?"outlined":t.hasAttribute("mat-flat-button")?"filled":t.hasAttribute("mat-button")?"text":null}var dt=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=H({type:t});static \u0275inj=j({imports:[ss,_e]})}return t})();var Yv=class{_box;_destroyed=new x;_resizeSubject=new x;_resizeObserver;_elementObservables=new Map;constructor(i){this._box=i,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(i){return this._elementObservables.has(i)||this._elementObservables.set(i,new re(e=>{let n=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(i,{box:this._box}),()=>{this._resizeObserver?.unobserve(i),n.unsubscribe(),this._elementObservables.delete(i)}}).pipe(ve(e=>e.some(n=>n.target===i)),Md({bufferSize:1,refCount:!0}),ye(this._destroyed))),this._elementObservables.get(i)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},af=(()=>{class t{_cleanupErrorListener;_observers=new Map;_ngZone=c(L);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,n){let r=n?.box||"content-box";return this._observers.has(r)||this._observers.set(r,new Yv(r)),this._observers.get(r).observe(e)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var $F=["notch"],WF=["matFormFieldNotchedOutline",""],GF=["*"],FE=["iconPrefixContainer"],PE=["textPrefixContainer"],LE=["iconSuffixContainer"],VE=["textSuffixContainer"],qF=["textField"],YF=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],QF=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function ZF(t,i){t&1&&k(0,"span",21)}function KF(t,i){if(t&1&&(m(0,"label",20),ee(1,1),W(2,ZF,1,0,"span",21),f()),t&2){let e=S(2);R("floating",e._shouldLabelFloat())("monitorResize",e._hasOutline())("id",e._labelId),Z("for",e._control.disableAutomaticLabeling?null:e._control.id),p(2),G(!e.hideRequiredMarker&&e._control.required?2:-1)}}function XF(t,i){if(t&1&&W(0,KF,3,5,"label",20),t&2){let e=S();G(e._hasFloatingLabel()?0:-1)}}function JF(t,i){t&1&&k(0,"div",7)}function eP(t,i){}function tP(t,i){if(t&1&&lt(0,eP,0,0,"ng-template",13),t&2){S(2);let e=on(1);R("ngTemplateOutlet",e)}}function nP(t,i){if(t&1&&(m(0,"div",9),W(1,tP,1,1,null,13),f()),t&2){let e=S();R("matFormFieldNotchedOutlineOpen",e._shouldLabelFloat()),p(),G(e._forceDisplayInfixLabel()?-1:1)}}function iP(t,i){t&1&&(m(0,"div",10,2),ee(2,2),f())}function rP(t,i){t&1&&(m(0,"div",11,3),ee(2,3),f())}function oP(t,i){}function aP(t,i){if(t&1&&lt(0,oP,0,0,"ng-template",13),t&2){S();let e=on(1);R("ngTemplateOutlet",e)}}function sP(t,i){t&1&&(m(0,"div",14,4),ee(2,4),f())}function lP(t,i){t&1&&(m(0,"div",15,5),ee(2,5),f())}function cP(t,i){t&1&&k(0,"div",16)}function dP(t,i){t&1&&(m(0,"div",18),ee(1,6),f())}function uP(t,i){if(t&1&&(m(0,"mat-hint",22),g(1),f()),t&2){let e=S(2);R("id",e._hintLabelId),p(),se(e.hintLabel)}}function mP(t,i){if(t&1&&(m(0,"div",19),W(1,uP,2,2,"mat-hint",22),ee(2,7),k(3,"div",23),ee(4,8),f()),t&2){let e=S();p(),G(e.hintLabel?1:-1)}}var Ln=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=A({type:t,selectors:[["mat-label"]]})}return t})(),fP=new b("MatError");var lf=(()=>{class t{align="start";id=c(Qe).getId("mat-mdc-hint-");static \u0275fac=function(n){return new(n||t)};static \u0275dir=A({type:t,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(n,r){n&2&&(Wt("id",r.id),Z("align",null),U("mat-mdc-form-field-hint-end",r.align==="end"))},inputs:{align:"align",id:"id"}})}return t})(),WE=new b("MatPrefix"),cf=(()=>{class t{set _isTextSelector(e){this._isText=!0}_isText=!1;static \u0275fac=function(n){return new(n||t)};static \u0275dir=A({type:t,selectors:[["","matPrefix",""],["","matIconPrefix",""],["","matTextPrefix",""]],inputs:{_isTextSelector:[0,"matTextPrefix","_isTextSelector"]},features:[Pe([{provide:WE,useExisting:t}])]})}return t})(),GE=new b("MatSuffix"),df=(()=>{class t{set _isTextSelector(e){this._isText=!0}_isText=!1;static \u0275fac=function(n){return new(n||t)};static \u0275dir=A({type:t,selectors:[["","matSuffix",""],["","matIconSuffix",""],["","matTextSuffix",""]],inputs:{_isTextSelector:[0,"matTextSuffix","_isTextSelector"]},features:[Pe([{provide:GE,useExisting:t}])]})}return t})(),qE=new b("FloatingLabelParent"),BE=(()=>{class t{_elementRef=c(V);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=c(af);_ngZone=c(L);_parent=c(qE);_resizeSubscription=new ie;constructor(){}ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return hP(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(n){return new(n||t)};static \u0275dir=A({type:t,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(n,r){n&2&&U("mdc-floating-label--float-above",r.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return t})();function hP(t){let i=t;if(i.offsetParent!==null)return i.scrollWidth;let e=i.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let n=e.scrollWidth;return e.remove(),n}var jE="mdc-line-ripple--active",sf="mdc-line-ripple--deactivating",HE=(()=>{class t{_elementRef=c(V);_cleanupTransitionEnd;constructor(){let e=c(L),n=c(Se);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=n.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(sf),e.add(jE)}deactivate(){this._elementRef.nativeElement.classList.add(sf)}_handleTransitionEnd=e=>{let n=this._elementRef.nativeElement.classList,r=n.contains(sf);e.propertyName==="opacity"&&r&&n.remove(jE,sf)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(n){return new(n||t)};static \u0275dir=A({type:t,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return t})(),UE=(()=>{class t{_elementRef=c(V);_ngZone=c(L);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,n=e.querySelector(".mdc-floating-label");n?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(n.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>n.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){let n=this._notch.nativeElement;!this.open||!e?n.style.width="":n.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=D({type:t,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(n,r){if(n&1&&xe($F,5),n&2){let o;F(o=P())&&(r._notch=o.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(n,r){n&2&&U("mdc-notched-outline--notched",r.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},attrs:WF,ngContentSelectors:GF,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(n,r){n&1&&(Me(),rn(0,"div",1),Ee(1,"div",2,0),ee(3),Te(),rn(4,"div",3))},encapsulation:2,changeDetection:0})}return t})(),uc=(()=>{class t{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(n){return new(n||t)};static \u0275dir=A({type:t})}return t})();var mc=new b("MatFormField"),pP=new b("MAT_FORM_FIELD_DEFAULT_OPTIONS"),zE="fill",gP="auto",$E="fixed",_P="translateY(-50%)",jt=(()=>{class t{_elementRef=c(V);_changeDetectorRef=c(we);_platform=c(ce);_idGenerator=c(Qe);_ngZone=c(L);_defaults=c(pP,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=Xn("iconPrefixContainer");_textPrefixContainerSignal=Xn("textPrefixContainer");_iconSuffixContainerSignal=Xn("iconSuffixContainer");_textSuffixContainerSignal=Xn("textSuffixContainer");_prefixSuffixContainers=gt(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=fD(Ln);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=Rt(e)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||gP}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let n=e||this._defaults?.appearance||zE;this._appearanceSignal.set(n)}_appearanceSignal=I(zE);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||$E}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||$E}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new x;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=Ve();constructor(){let e=this._defaults,n=c(tt);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),Xt(()=>this._currentDirection=n.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=gt(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){let n=this._control,r="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(r+e.controlType),n.controlType&&this._elementRef.nativeElement.classList.add(r+n.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=n.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=n.stateChanges.pipe(Ke([void 0,void 0]),oe(()=>[n.errorState,n.userAriaDescribedBy]),Ed(),ve(([[o,a],[s,l]])=>o!==s||a!==l)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),n.ngControl&&n.ngControl.valueChanges&&(this._valueChanges=n.ngControl.valueChanges.pipe(ye(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),St(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){_D({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=gt(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let n=this._control?this._control.ngControl:null;return n&&n[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let o=this._hintChildren?this._hintChildren.find(s=>s.align==="start"):null,a=this._hintChildren?this._hintChildren.find(s=>s.align==="end"):null;o?e.push(o.id):this._hintLabel&&e.push(this._hintLabelId),a&&e.push(a.id)}else this._errorChildren&&e.push(...this._errorChildren.map(o=>o.id));let n=this._control.describedByIds,r;if(n){let o=this._describedByIds||e;r=e.concat(n.filter(a=>a&&!o.includes(a)))}else r=e;this._control.setDescribedByIds(r),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,n=this._textPrefixContainer?.nativeElement,r=this._iconSuffixContainer?.nativeElement,o=this._textSuffixContainer?.nativeElement,a=e?.getBoundingClientRect().width??0,s=n?.getBoundingClientRect().width??0,l=r?.getBoundingClientRect().width??0,d=o?.getBoundingClientRect().width??0,u=this._currentDirection==="rtl"?"-1":"1",h=`${a+s}px`,v=`calc(${u} * (${h} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,w=`var(--mat-mdc-form-field-label-transform, ${_P} translateX(${v}))`,O=a+s+l+d;return[w,O]}_writeOutlinedLabelStyles(e){if(e!==null){let[n,r]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=n),r!==null&&this._notchedOutline?._setMaxWidth(r)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let n=e.getRootNode();return n&&n!==e}return document.documentElement.contains(e)}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=D({type:t,selectors:[["mat-form-field"]],contentQueries:function(n,r,o){if(n&1&&(Gu(o,r._labelChild,Ln,5),wt(o,uc,5)(o,WE,5)(o,GE,5)(o,fP,5)(o,lf,5)),n&2){xi();let a;F(a=P())&&(r._formFieldControl=a.first),F(a=P())&&(r._prefixChildren=a),F(a=P())&&(r._suffixChildren=a),F(a=P())&&(r._errorChildren=a),F(a=P())&&(r._hintChildren=a)}},viewQuery:function(n,r){if(n&1&&(Di(r._iconPrefixContainerSignal,FE,5)(r._textPrefixContainerSignal,PE,5)(r._iconSuffixContainerSignal,LE,5)(r._textSuffixContainerSignal,VE,5),xe(qF,5)(FE,5)(PE,5)(LE,5)(VE,5)(BE,5)(UE,5)(HE,5)),n&2){xi(4);let o;F(o=P())&&(r._textField=o.first),F(o=P())&&(r._iconPrefixContainer=o.first),F(o=P())&&(r._textPrefixContainer=o.first),F(o=P())&&(r._iconSuffixContainer=o.first),F(o=P())&&(r._textSuffixContainer=o.first),F(o=P())&&(r._floatingLabel=o.first),F(o=P())&&(r._notchedOutline=o.first),F(o=P())&&(r._lineRipple=o.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(n,r){n&2&&U("mat-mdc-form-field-label-always-float",r._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",r._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",r._hasIconSuffix)("mat-form-field-invalid",r._control.errorState)("mat-form-field-disabled",r._control.disabled)("mat-form-field-autofilled",r._control.autofilled)("mat-form-field-appearance-fill",r.appearance=="fill")("mat-form-field-appearance-outline",r.appearance=="outline")("mat-form-field-hide-placeholder",r._hasFloatingLabel()&&!r._shouldLabelFloat())("mat-primary",r.color!=="accent"&&r.color!=="warn")("mat-accent",r.color==="accent")("mat-warn",r.color==="warn")("ng-untouched",r._shouldForward("untouched"))("ng-touched",r._shouldForward("touched"))("ng-pristine",r._shouldForward("pristine"))("ng-dirty",r._shouldForward("dirty"))("ng-valid",r._shouldForward("valid"))("ng-invalid",r._shouldForward("invalid"))("ng-pending",r._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[Pe([{provide:mc,useExisting:t},{provide:qE,useExisting:t}])],ngContentSelectors:QF,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(n,r){if(n&1&&(Me(YF),lt(0,XF,1,1,"ng-template",null,0,qu),m(2,"div",6,1),E("click",function(a){return r._control.onContainerClick(a)}),W(4,JF,1,0,"div",7),m(5,"div",8),W(6,nP,2,2,"div",9),W(7,iP,3,0,"div",10),W(8,rP,3,0,"div",11),m(9,"div",12),W(10,aP,1,1,null,13),ee(11),f(),W(12,sP,3,0,"div",14),W(13,lP,3,0,"div",15),f(),W(14,cP,1,0,"div",16),f(),m(15,"div",17),W(16,dP,2,0,"div",18)(17,mP,5,1,"div",19),f()),n&2){let o;p(2),U("mdc-text-field--filled",!r._hasOutline())("mdc-text-field--outlined",r._hasOutline())("mdc-text-field--no-label",!r._hasFloatingLabel())("mdc-text-field--disabled",r._control.disabled)("mdc-text-field--invalid",r._control.errorState),p(2),G(!r._hasOutline()&&!r._control.disabled?4:-1),p(2),G(r._hasOutline()?6:-1),p(),G(r._hasIconPrefix?7:-1),p(),G(r._hasTextPrefix?8:-1),p(2),G(!r._hasOutline()||r._forceDisplayInfixLabel()?10:-1),p(2),G(r._hasTextSuffix?12:-1),p(),G(r._hasIconSuffix?13:-1),p(),G(r._hasOutline()?-1:14),p(),U("mat-mdc-form-field-subscript-dynamic-size",r.subscriptSizing==="dynamic");let a=r._getSubscriptMessageType();p(),G((o=a)==="error"?16:o==="hint"?17:-1)}},dependencies:[BE,UE,S_,HE,lf],styles:[`.mdc-text-field {
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
`],encapsulation:2,changeDetection:0})}return t})();var Ht=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=H({type:t});static \u0275inj=j({imports:[es,jt,_e]})}return t})();function YE(t){return Error(`Unable to find icon with the name "${t}"`)}function bP(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function QE(t){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${t}".`)}function ZE(t){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${t}".`)}var dr=class{url;svgText;options;svgElement=null;constructor(i,e,n){this.url=i,this.svgText=e,this.options=n}},XE=(()=>{class t{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(e,n,r,o){this._httpClient=e,this._sanitizer=n,this._errorHandler=o,this._document=r}addSvgIcon(e,n,r){return this.addSvgIconInNamespace("",e,n,r)}addSvgIconLiteral(e,n,r){return this.addSvgIconLiteralInNamespace("",e,n,r)}addSvgIconInNamespace(e,n,r,o){return this._addSvgIconConfig(e,n,new dr(r,null,o))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,n,r,o){let a=this._sanitizer.sanitize(Pt.HTML,r);if(!a)throw ZE(r);let s=jo(a);return this._addSvgIconConfig(e,n,new dr("",s,o))}addSvgIconSet(e,n){return this.addSvgIconSetInNamespace("",e,n)}addSvgIconSetLiteral(e,n){return this.addSvgIconSetLiteralInNamespace("",e,n)}addSvgIconSetInNamespace(e,n,r){return this._addSvgIconSetConfig(e,new dr(n,null,r))}addSvgIconSetLiteralInNamespace(e,n,r){let o=this._sanitizer.sanitize(Pt.HTML,n);if(!o)throw ZE(n);let a=jo(o);return this._addSvgIconSetConfig(e,new dr("",a,r))}registerFontClassAlias(e,n=e){return this._fontCssClassesByAlias.set(e,n),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(e){let n=this._sanitizer.sanitize(Pt.RESOURCE_URL,e);if(!n)throw QE(e);let r=this._cachedIconsByUrl.get(n);return r?q(uf(r)):this._loadSvgIconFromConfig(new dr(e,null)).pipe(at(o=>this._cachedIconsByUrl.set(n,o)),oe(o=>uf(o)))}getNamedSvgIcon(e,n=""){let r=KE(n,e),o=this._svgIconConfigs.get(r);if(o)return this._getSvgFromConfig(o);if(o=this._getIconConfigFromResolvers(n,e),o)return this._svgIconConfigs.set(r,o),this._getSvgFromConfig(o);let a=this._iconSetConfigs.get(n);return a?this._getSvgFromIconSetConfigs(e,a):lo(YE(r))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?q(uf(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe(oe(n=>uf(n)))}_getSvgFromIconSetConfigs(e,n){let r=this._extractIconWithNameFromAnySet(e,n);if(r)return q(r);let o=n.filter(a=>!a.svgText).map(a=>this._loadSvgIconSetFromConfig(a).pipe(Cr(s=>{let d=`Loading icon set URL: ${this._sanitizer.sanitize(Pt.RESOURCE_URL,a.url)} failed: ${s.message}`;return this._errorHandler.handleError(new Error(d)),q(null)})));return Hs(o).pipe(oe(()=>{let a=this._extractIconWithNameFromAnySet(e,n);if(!a)throw YE(e);return a}))}_extractIconWithNameFromAnySet(e,n){for(let r=n.length-1;r>=0;r--){let o=n[r];if(o.svgText&&o.svgText.toString().indexOf(e)>-1){let a=this._svgElementFromConfig(o),s=this._extractSvgIconFromSet(a,e,o.options);if(s)return s}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe(at(n=>e.svgText=n),oe(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?q(null):this._fetchIcon(e).pipe(at(n=>e.svgText=n))}_extractSvgIconFromSet(e,n,r){let o=e.querySelector(`[id="${n}"]`);if(!o)return null;let a=o.cloneNode(!0);if(a.removeAttribute("id"),a.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(a,r);if(a.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(a),r);let s=this._svgElementFromString(jo("<svg></svg>"));return s.appendChild(a),this._setSvgAttributes(s,r)}_svgElementFromString(e){let n=this._document.createElement("DIV");n.innerHTML=e;let r=n.querySelector("svg");if(!r)throw Error("<svg> tag not found");return r}_toSvgElement(e){let n=this._svgElementFromString(jo("<svg></svg>")),r=e.attributes;for(let o=0;o<r.length;o++){let{name:a,value:s}=r[o];a!=="id"&&n.setAttribute(a,s)}for(let o=0;o<e.childNodes.length;o++)e.childNodes[o].nodeType===this._document.ELEMENT_NODE&&n.appendChild(e.childNodes[o].cloneNode(!0));return n}_setSvgAttributes(e,n){return e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),n&&n.viewBox&&e.setAttribute("viewBox",n.viewBox),e}_fetchIcon(e){let{url:n,options:r}=e,o=r?.withCredentials??!1;if(!this._httpClient)throw bP();if(n==null)throw Error(`Cannot fetch icon from URL "${n}".`);let a=this._sanitizer.sanitize(Pt.RESOURCE_URL,n);if(!a)throw QE(n);let s=this._inProgressUrlFetches.get(a);if(s)return s;let l=this._httpClient.get(a,{responseType:"text",withCredentials:o}).pipe(oe(d=>jo(d)),Dr(()=>this._inProgressUrlFetches.delete(a)),zs());return this._inProgressUrlFetches.set(a,l),l}_addSvgIconConfig(e,n,r){return this._svgIconConfigs.set(KE(e,n),r),this}_addSvgIconSetConfig(e,n){let r=this._iconSetConfigs.get(e);return r?r.push(n):this._iconSetConfigs.set(e,[n]),this}_svgElementFromConfig(e){if(!e.svgElement){let n=this._svgElementFromString(e.svgText);this._setSvgAttributes(n,e.options),e.svgElement=n}return e.svgElement}_getIconConfigFromResolvers(e,n){for(let r=0;r<this._resolvers.length;r++){let o=this._resolvers[r](n,e);if(o)return yP(o)?new dr(o.url,null,o.options):new dr(o,null)}}static \u0275fac=function(n){return new(n||t)(z(kt,8),z(Pl),z(Y,8),z($t))};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function uf(t){return t.cloneNode(!0)}function KE(t,i){return t+":"+i}function yP(t){return!!(t.url&&t.options)}var CP=["*"],wP=new b("MAT_ICON_DEFAULT_OPTIONS"),DP=new b("mat-icon-location",{providedIn:"root",factory:()=>{let t=c(Y),i=t?t.location:null;return{getPathname:()=>i?i.pathname+i.search:""}}}),JE=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],xP=JE.map(t=>`[${t}]`).join(", "),EP=/^url\(['"]?#(.*?)['"]?\)$/,Yt=(()=>{class t{_elementRef=c(V);_iconRegistry=c(XE);_location=c(DP);_errorHandler=c($t);_defaultColor;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(e){let n=this._cleanupFontValue(e);n!==this._fontSet&&(this._fontSet=n,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(e){let n=this._cleanupFontValue(e);n!==this._fontIcon&&(this._fontIcon=n,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=ie.EMPTY;constructor(){let e=c(new Ii("aria-hidden"),{optional:!0}),n=c(wP,{optional:!0});n&&(n.color&&(this.color=this._defaultColor=n.color),n.fontSet&&(this.fontSet=n.fontSet)),e||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(e){if(!e)return["",""];let n=e.split(":");switch(n.length){case 1:return["",n[0]];case 2:return n;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let n=this._location.getPathname();n!==this._previousPath&&(this._previousPath=n,this._prependPathToReferences(n))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();let n=this._location.getPathname();this._previousPath=n,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(n),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){let e=this._elementRef.nativeElement,n=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();n--;){let r=e.childNodes[n];(r.nodeType!==1||r.nodeName.toLowerCase()==="svg")&&r.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,n=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(r=>r.length>0);this._previousFontSetClass.forEach(r=>e.classList.remove(r)),n.forEach(r=>e.classList.add(r)),this._previousFontSetClass=n,this.fontIcon!==this._previousFontIconClass&&!n.includes("mat-ligature-font")&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return typeof e=="string"?e.trim().split(" ")[0]:e}_prependPathToReferences(e){let n=this._elementsWithExternalReferences;n&&n.forEach((r,o)=>{r.forEach(a=>{o.setAttribute(a.name,`url('${e}#${a.value}')`)})})}_cacheChildrenWithExternalReferences(e){let n=e.querySelectorAll(xP),r=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let o=0;o<n.length;o++)JE.forEach(a=>{let s=n[o],l=s.getAttribute(a),d=l?l.match(EP):null;if(d){let u=r.get(s);u||(u=[],r.set(s,u)),u.push({name:a,value:d[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[n,r]=this._splitIconName(e);n&&(this._svgNamespace=n),r&&(this._svgName=r),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(r,n).pipe(nt(1)).subscribe(o=>this._setSvgElement(o),o=>{let a=`Error retrieving icon ${n}:${r}! ${o.message}`;this._errorHandler.handleError(new Error(a))})}}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=D({type:t,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(n,r){n&2&&(Z("data-mat-icon-type",r._usingFontIcon()?"font":"svg")("data-mat-icon-name",r._svgName||r.fontIcon)("data-mat-icon-namespace",r._svgNamespace||r.fontSet)("fontIcon",r._usingFontIcon()?r.fontIcon:null),Dt(r.color?"mat-"+r.color:""),U("mat-icon-inline",r.inline)("mat-icon-no-color",r.color!=="primary"&&r.color!=="accent"&&r.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",te],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:CP,decls:1,vars:0,template:function(n,r){n&1&&(Me(),ee(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
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
`],encapsulation:2,changeDetection:0})}return t})(),Vn=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=H({type:t});static \u0275inj=j({imports:[_e]})}return t})();var MP=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=D({type:t,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(n,r){},styles:[`textarea.cdk-textarea-autosize {
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
`],encapsulation:2,changeDetection:0})}return t})(),IP={passive:!0},eM=(()=>{class t{_platform=c(ce);_ngZone=c(L);_renderer=c(pt).createRenderer(null,null);_styleLoader=c(Ye);_monitoredElements=new Map;constructor(){}monitor(e){if(!this._platform.isBrowser)return Ze;this._styleLoader.load(MP);let n=Jt(e),r=this._monitoredElements.get(n);if(r)return r.subject;let o=new x,a="cdk-text-field-autofilled",s=d=>{d.animationName==="cdk-text-field-autofill-start"&&!n.classList.contains(a)?(n.classList.add(a),this._ngZone.run(()=>o.next({target:d.target,isAutofilled:!0}))):d.animationName==="cdk-text-field-autofill-end"&&n.classList.contains(a)&&(n.classList.remove(a),this._ngZone.run(()=>o.next({target:d.target,isAutofilled:!1})))},l=this._ngZone.runOutsideAngular(()=>(n.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(n,"animationstart",s,IP)));return this._monitoredElements.set(n,{subject:o,unlisten:l}),o}stopMonitoring(e){let n=Jt(e),r=this._monitoredElements.get(n);r&&(r.unlisten(),r.subject.complete(),n.classList.remove("cdk-text-field-autofill-monitored"),n.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(n))}ngOnDestroy(){this._monitoredElements.forEach((e,n)=>this.stopMonitoring(n))}static \u0275fac=function(n){return new(n||t)};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var tM=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=H({type:t});static \u0275inj=j({})}return t})();var dM=(()=>{class t{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,n){this._renderer=e,this._elementRef=n}setProperty(e,n){this._renderer.setProperty(this._elementRef.nativeElement,e,n)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(n){return new(n||t)(Ce(Se),Ce(V))};static \u0275dir=A({type:t})}return t})(),SP=(()=>{class t extends dM{static \u0275fac=(()=>{let e;return function(r){return(e||(e=$e(t)))(r||t)}})();static \u0275dir=A({type:t,features:[ge]})}return t})(),Xv=new b("");var TP={provide:Xv,useExisting:fn(()=>Bn),multi:!0};function kP(){let t=Rn()?Rn().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var AP=new b(""),Bn=(()=>{class t extends dM{_compositionMode;_composing=!1;constructor(e,n,r){super(e,n),this._compositionMode=r,this._compositionMode==null&&(this._compositionMode=!kP())}writeValue(e){let n=e??"";this.setProperty("value",n)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(n){return new(n||t)(Ce(Se),Ce(V),Ce(AP,8))};static \u0275dir=A({type:t,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(n,r){n&1&&E("input",function(a){return r._handleInput(a.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(a){return r._compositionEnd(a.target.value)})},standalone:!1,features:[Pe([TP]),ge]})}return t})();function Jv(t){return t==null||eb(t)===0}function eb(t){return t==null?null:Array.isArray(t)||typeof t=="string"?t.length:t instanceof Set?t.size:null}var Cf=new b(""),wf=new b(""),RP=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,ii=class{static min(i){return OP(i)}static max(i){return NP(i)}static required(i){return FP(i)}static requiredTrue(i){return PP(i)}static email(i){return LP(i)}static minLength(i){return VP(i)}static maxLength(i){return BP(i)}static pattern(i){return jP(i)}static nullValidator(i){return uM()}static compose(i){return _M(i)}static composeAsync(i){return vM(i)}};function OP(t){return i=>{if(i.value==null||t==null)return null;let e=parseFloat(i.value);return!isNaN(e)&&e<t?{min:{min:t,actual:i.value}}:null}}function NP(t){return i=>{if(i.value==null||t==null)return null;let e=parseFloat(i.value);return!isNaN(e)&&e>t?{max:{max:t,actual:i.value}}:null}}function FP(t){return Jv(t.value)?{required:!0}:null}function PP(t){return t.value===!0?null:{required:!0}}function LP(t){return Jv(t.value)||RP.test(t.value)?null:{email:!0}}function VP(t){return i=>{let e=i.value?.length??eb(i.value);return e===null||e===0?null:e<t?{minlength:{requiredLength:t,actualLength:e}}:null}}function BP(t){return i=>{let e=i.value?.length??eb(i.value);return e!==null&&e>t?{maxlength:{requiredLength:t,actualLength:e}}:null}}function jP(t){if(!t)return uM;let i,e;return typeof t=="string"?(e="",t.charAt(0)!=="^"&&(e+="^"),e+=t,t.charAt(t.length-1)!=="$"&&(e+="$"),i=new RegExp(e)):(e=t.toString(),i=t),n=>{if(Jv(n.value))return null;let r=n.value;return i.test(r)?null:{pattern:{requiredPattern:e,actualValue:r}}}}function uM(t){return null}function mM(t){return t!=null}function fM(t){return tr(t)?He(t):t}function hM(t){let i={};return t.forEach(e=>{i=e!=null?C(C({},i),e):i}),Object.keys(i).length===0?null:i}function pM(t,i){return i.map(e=>e(t))}function HP(t){return!t.validate}function gM(t){return t.map(i=>HP(i)?i:e=>i.validate(e))}function _M(t){if(!t)return null;let i=t.filter(mM);return i.length==0?null:function(e){return hM(pM(e,i))}}function tb(t){return t!=null?_M(gM(t)):null}function vM(t){if(!t)return null;let i=t.filter(mM);return i.length==0?null:function(e){let n=pM(e,i).map(fM);return Hs(n).pipe(oe(hM))}}function nb(t){return t!=null?vM(gM(t)):null}function nM(t,i){return t===null?[i]:Array.isArray(t)?[...t,i]:[t,i]}function bM(t){return t._rawValidators}function yM(t){return t._rawAsyncValidators}function Qv(t){return t?Array.isArray(t)?t:[t]:[]}function ff(t,i){return Array.isArray(t)?t.includes(i):t===i}function iM(t,i){let e=Qv(i);return Qv(t).forEach(r=>{ff(e,r)||e.push(r)}),e}function rM(t,i){return Qv(i).filter(e=>!ff(t,e))}var hf=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(i){this._rawValidators=i||[],this._composedValidatorFn=tb(this._rawValidators)}_setAsyncValidators(i){this._rawAsyncValidators=i||[],this._composedAsyncValidatorFn=nb(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(i){this._onDestroyCallbacks.push(i)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(i=>i()),this._onDestroyCallbacks=[]}reset(i=void 0){this.control?.reset(i)}hasError(i,e){return this.control?this.control.hasError(i,e):!1}getError(i,e){return this.control?this.control.getError(i,e):null}},ur=class extends hf{name;get formDirective(){return null}get path(){return null}},ri=class extends hf{_parent=null;name=null;valueAccessor=null},pf=class{_cd;constructor(i){this._cd=i}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var Pi=(()=>{class t extends pf{constructor(e){super(e)}static \u0275fac=function(n){return new(n||t)(Ce(ri,2))};static \u0275dir=A({type:t,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(n,r){n&2&&U("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},standalone:!1,features:[ge]})}return t})(),Df=(()=>{class t extends pf{constructor(e){super(e)}static \u0275fac=function(n){return new(n||t)(Ce(ur,10))};static \u0275dir=A({type:t,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["","formArray",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(n,r){n&2&&U("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},standalone:!1,features:[ge]})}return t})();var hc="VALID",mf="INVALID",cs="PENDING",pc="DISABLED",Ur=class{},gf=class extends Ur{value;source;constructor(i,e){super(),this.value=i,this.source=e}},_c=class extends Ur{pristine;source;constructor(i,e){super(),this.pristine=i,this.source=e}},vc=class extends Ur{touched;source;constructor(i,e){super(),this.touched=i,this.source=e}},ds=class extends Ur{status;source;constructor(i,e){super(),this.status=i,this.source=e}},_f=class extends Ur{source;constructor(i){super(),this.source=i}},yc=class extends Ur{source;constructor(i){super(),this.source=i}};function ib(t){return(xf(t)?t.validators:t)||null}function UP(t){return Array.isArray(t)?tb(t):t||null}function rb(t,i){return(xf(i)?i.asyncValidators:t)||null}function zP(t){return Array.isArray(t)?nb(t):t||null}function xf(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function CM(t,i,e){let n=t.controls;if(!(i?Object.keys(n):n).length)throw new N(1e3,"");if(!n[e])throw new N(1001,"")}function wM(t,i,e){t._forEachChild((n,r)=>{if(e[r]===void 0)throw new N(1002,"")})}var us=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(i,e){this._assignValidators(i),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(i){this._rawValidators=this._composedValidatorFn=i}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(i){this._rawAsyncValidators=this._composedAsyncValidatorFn=i}get parent(){return this._parent}get status(){return rt(this.statusReactive)}set status(i){rt(()=>this.statusReactive.set(i))}_status=gt(()=>this.statusReactive());statusReactive=I(void 0);get valid(){return this.status===hc}get invalid(){return this.status===mf}get pending(){return this.status===cs}get disabled(){return this.status===pc}get enabled(){return this.status!==pc}errors;get pristine(){return rt(this.pristineReactive)}set pristine(i){rt(()=>this.pristineReactive.set(i))}_pristine=gt(()=>this.pristineReactive());pristineReactive=I(!0);get dirty(){return!this.pristine}get touched(){return rt(this.touchedReactive)}set touched(i){rt(()=>this.touchedReactive.set(i))}_touched=gt(()=>this.touchedReactive());touchedReactive=I(!1);get untouched(){return!this.touched}_events=new x;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(i){this._assignValidators(i)}setAsyncValidators(i){this._assignAsyncValidators(i)}addValidators(i){this.setValidators(iM(i,this._rawValidators))}addAsyncValidators(i){this.setAsyncValidators(iM(i,this._rawAsyncValidators))}removeValidators(i){this.setValidators(rM(i,this._rawValidators))}removeAsyncValidators(i){this.setAsyncValidators(rM(i,this._rawAsyncValidators))}hasValidator(i){return ff(this._rawValidators,i)}hasAsyncValidator(i){return ff(this._rawAsyncValidators,i)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(i={}){let e=this.touched===!1;this.touched=!0;let n=i.sourceControl??this;i.onlySelf||this._parent?.markAsTouched(X(C({},i),{sourceControl:n})),e&&i.emitEvent!==!1&&this._events.next(new vc(!0,n))}markAllAsDirty(i={}){this.markAsDirty({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(i))}markAllAsTouched(i={}){this.markAsTouched({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(i))}markAsUntouched(i={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let n=i.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:n})}),i.onlySelf||this._parent?._updateTouched(i,n),e&&i.emitEvent!==!1&&this._events.next(new vc(!1,n))}markAsDirty(i={}){let e=this.pristine===!0;this.pristine=!1;let n=i.sourceControl??this;i.onlySelf||this._parent?.markAsDirty(X(C({},i),{sourceControl:n})),e&&i.emitEvent!==!1&&this._events.next(new _c(!1,n))}markAsPristine(i={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let n=i.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:i.emitEvent})}),i.onlySelf||this._parent?._updatePristine(i,n),e&&i.emitEvent!==!1&&this._events.next(new _c(!0,n))}markAsPending(i={}){this.status=cs;let e=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new ds(this.status,e)),this.statusChanges.emit(this.status)),i.onlySelf||this._parent?.markAsPending(X(C({},i),{sourceControl:e}))}disable(i={}){let e=this._parentMarkedDirty(i.onlySelf);this.status=pc,this.errors=null,this._forEachChild(r=>{r.disable(X(C({},i),{onlySelf:!0}))}),this._updateValue();let n=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new gf(this.value,n)),this._events.next(new ds(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(X(C({},i),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(i={}){let e=this._parentMarkedDirty(i.onlySelf);this.status=hc,this._forEachChild(n=>{n.enable(X(C({},i),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:i.emitEvent}),this._updateAncestors(X(C({},i),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(i,e){i.onlySelf||(this._parent?.updateValueAndValidity(i),i.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(i){this._parent=i}getRawValue(){return this.value}updateValueAndValidity(i={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let n=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===hc||this.status===cs)&&this._runAsyncValidator(n,i.emitEvent)}let e=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new gf(this.value,e)),this._events.next(new ds(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),i.onlySelf||this._parent?.updateValueAndValidity(X(C({},i),{sourceControl:e}))}_updateTreeValidity(i={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(i)),this.updateValueAndValidity({onlySelf:!0,emitEvent:i.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?pc:hc}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(i,e){if(this.asyncValidator){this.status=cs,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:i!==!1};let n=fM(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:e,shouldHaveEmitted:i})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let i=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,i}return!1}setErrors(i,e={}){this.errors=i,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(i){let e=i;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((n,r)=>n&&n._find(r),this)}getError(i,e){let n=e?this.get(e):this;return n?.errors?n.errors[i]:null}hasError(i,e){return!!this.getError(i,e)}get root(){let i=this;for(;i._parent;)i=i._parent;return i}_updateControlsErrors(i,e,n){this.status=this._calculateStatus(),i&&this.statusChanges.emit(this.status),(i||n)&&this._events.next(new ds(this.status,e)),this._parent&&this._parent._updateControlsErrors(i,e,n)}_initObservables(){this.valueChanges=new M,this.statusChanges=new M}_calculateStatus(){return this._allControlsDisabled()?pc:this.errors?mf:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(cs)?cs:this._anyControlsHaveStatus(mf)?mf:hc}_anyControlsHaveStatus(i){return this._anyControls(e=>e.status===i)}_anyControlsDirty(){return this._anyControls(i=>i.dirty)}_anyControlsTouched(){return this._anyControls(i=>i.touched)}_updatePristine(i,e){let n=!this._anyControlsDirty(),r=this.pristine!==n;this.pristine=n,i.onlySelf||this._parent?._updatePristine(i,e),r&&this._events.next(new _c(this.pristine,e))}_updateTouched(i={},e){this.touched=this._anyControlsTouched(),this._events.next(new vc(this.touched,e)),i.onlySelf||this._parent?._updateTouched(i,e)}_onDisabledChange=[];_registerOnCollectionChange(i){this._onCollectionChange=i}_setUpdateStrategy(i){xf(i)&&i.updateOn!=null&&(this._updateOn=i.updateOn)}_parentMarkedDirty(i){return!i&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(i){return null}_assignValidators(i){this._rawValidators=Array.isArray(i)?i.slice():i,this._composedValidatorFn=UP(this._rawValidators)}_assignAsyncValidators(i){this._rawAsyncValidators=Array.isArray(i)?i.slice():i,this._composedAsyncValidatorFn=zP(this._rawAsyncValidators)}},ms=class extends us{constructor(i,e,n){super(ib(e),rb(n,e)),this.controls=i,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(i,e){return this.controls[i]?this.controls[i]:(this.controls[i]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(i,e,n={}){this.registerControl(i,e),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}removeControl(i,e={}){this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),delete this.controls[i],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(i,e,n={}){this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),delete this.controls[i],e&&this.registerControl(i,e),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}contains(i){return this.controls.hasOwnProperty(i)&&this.controls[i].enabled}setValue(i,e={}){wM(this,!0,i),Object.keys(i).forEach(n=>{CM(this,!0,n),this.controls[n].setValue(i[n],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(i,e={}){i!=null&&(Object.keys(i).forEach(n=>{let r=this.controls[n];r&&r.patchValue(i[n],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(i={},e={}){this._forEachChild((n,r)=>{n.reset(i?i[r]:null,X(C({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new yc(this))}getRawValue(){return this._reduceChildren({},(i,e,n)=>(i[n]=e.getRawValue(),i))}_syncPendingControls(){let i=this._reduceChildren(!1,(e,n)=>n._syncPendingControls()?!0:e);return i&&this.updateValueAndValidity({onlySelf:!0}),i}_forEachChild(i){Object.keys(this.controls).forEach(e=>{let n=this.controls[e];n&&i(n,e)})}_setUpControls(){this._forEachChild(i=>{i.setParent(this),i._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(i){for(let[e,n]of Object.entries(this.controls))if(this.contains(e)&&i(n))return!0;return!1}_reduceValue(){let i={};return this._reduceChildren(i,(e,n,r)=>((n.enabled||this.disabled)&&(e[r]=n.value),e))}_reduceChildren(i,e){let n=i;return this._forEachChild((r,o)=>{n=e(n,r,o)}),n}_allControlsDisabled(){for(let i of Object.keys(this.controls))if(this.controls[i].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(i){return this.controls.hasOwnProperty(i)?this.controls[i]:null}};var Zv=class extends ms{};var Cc=new b("",{factory:()=>Ef}),Ef="always";function DM(t,i){return[...i.path,t]}function vf(t,i,e=Ef){ob(t,i),i.valueAccessor.writeValue(t.value),(t.disabled||e==="always")&&i.valueAccessor.setDisabledState?.(t.disabled),WP(t,i),qP(t,i),GP(t,i),$P(t,i)}function oM(t,i,e=!0){let n=()=>{};i?.valueAccessor?.registerOnChange(n),i?.valueAccessor?.registerOnTouched(n),yf(t,i),t&&(i._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function bf(t,i){t.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(i)})}function $P(t,i){if(i.valueAccessor.setDisabledState){let e=n=>{i.valueAccessor.setDisabledState(n)};t.registerOnDisabledChange(e),i._registerOnDestroy(()=>{t._unregisterOnDisabledChange(e)})}}function ob(t,i){let e=bM(t);i.validator!==null?t.setValidators(nM(e,i.validator)):typeof e=="function"&&t.setValidators([e]);let n=yM(t);i.asyncValidator!==null?t.setAsyncValidators(nM(n,i.asyncValidator)):typeof n=="function"&&t.setAsyncValidators([n]);let r=()=>t.updateValueAndValidity();bf(i._rawValidators,r),bf(i._rawAsyncValidators,r)}function yf(t,i){let e=!1;if(t!==null){if(i.validator!==null){let r=bM(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==i.validator);o.length!==r.length&&(e=!0,t.setValidators(o))}}if(i.asyncValidator!==null){let r=yM(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==i.asyncValidator);o.length!==r.length&&(e=!0,t.setAsyncValidators(o))}}}let n=()=>{};return bf(i._rawValidators,n),bf(i._rawAsyncValidators,n),e}function WP(t,i){i.valueAccessor.registerOnChange(e=>{t._pendingValue=e,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&xM(t,i)})}function GP(t,i){i.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&xM(t,i),t.updateOn!=="submit"&&t.markAsTouched()})}function xM(t,i){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),i.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function qP(t,i){let e=(n,r)=>{i.valueAccessor.writeValue(n),r&&i.viewToModelUpdate(n)};t.registerOnChange(e),i._registerOnDestroy(()=>{t._unregisterOnChange(e)})}function EM(t,i){t==null,ob(t,i)}function YP(t,i){return yf(t,i)}function MM(t,i){if(!t.hasOwnProperty("model"))return!1;let e=t.model;return e.isFirstChange()?!0:!Object.is(i,e.currentValue)}function QP(t){return Object.getPrototypeOf(t.constructor)===SP}function IM(t,i){t._syncPendingControls(),i.forEach(e=>{let n=e.control;n.updateOn==="submit"&&n._pendingChange&&(e.viewToModelUpdate(n._pendingValue),n._pendingChange=!1)})}function SM(t,i){if(!i)return null;Array.isArray(i);let e,n,r;return i.forEach(o=>{o.constructor===Bn?e=o:QP(o)?n=o:r=o}),r||n||e||null}function ZP(t,i){let e=t.indexOf(i);e>-1&&t.splice(e,1)}var KP={provide:ur,useExisting:fn(()=>wc)},gc=Promise.resolve(),wc=(()=>{class t extends ur{callSetDisabledState;get submitted(){return rt(this.submittedReactive)}_submitted=gt(()=>this.submittedReactive());submittedReactive=I(!1);_directives=new Set;form;ngSubmit=new M;options;constructor(e,n,r){super(),this.callSetDisabledState=r,this.form=new ms({},tb(e),nb(n))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){gc.then(()=>{let n=this._findContainer(e.path);e.control=n.registerControl(e.name,e.control),vf(e.control,e,this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){gc.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){gc.then(()=>{let n=this._findContainer(e.path),r=new ms({});EM(r,e),n.registerControl(e.name,r),r.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){gc.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,n){gc.then(()=>{this.form.get(e.path).setValue(n)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),IM(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new _f(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static \u0275fac=function(n){return new(n||t)(Ce(Cf,10),Ce(wf,10),Ce(Cc,8))};static \u0275dir=A({type:t,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(n,r){n&1&&E("submit",function(a){return r.onSubmit(a)})("reset",function(){return r.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[Pe([KP]),ge]})}return t})();function aM(t,i){let e=t.indexOf(i);e>-1&&t.splice(e,1)}function sM(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var bc=class extends us{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(i=null,e,n){super(ib(e),rb(n,e)),this._applyFormState(i),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),xf(e)&&(e.nonNullable||e.initialValueIsDefault)&&(sM(i)?this.defaultValue=i.value:this.defaultValue=i)}setValue(i,e={}){this.value=this._pendingValue=i,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(i,e={}){this.setValue(i,e)}reset(i=this.defaultValue,e={}){this._applyFormState(i),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new yc(this))}_updateValue(){}_anyControls(i){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(i){this._onChange.push(i)}_unregisterOnChange(i){aM(this._onChange,i)}registerOnDisabledChange(i){this._onDisabledChange.push(i)}_unregisterOnDisabledChange(i){aM(this._onDisabledChange,i)}_forEachChild(i){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(i){sM(i)?(this.value=this._pendingValue=i.value,i.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=i}};var XP=t=>t instanceof bc;var JP={provide:ri,useExisting:fn(()=>Yo)},lM=Promise.resolve(),Yo=(()=>{class t extends ri{_changeDetectorRef;callSetDisabledState;control=new bc;static ngAcceptInputType_isDisabled;_registered=!1;viewModel;name="";isDisabled;model;options;update=new M;constructor(e,n,r,o,a,s){super(),this._changeDetectorRef=a,this.callSetDisabledState=s,this._parent=e,this._setValidators(n),this._setAsyncValidators(r),this.valueAccessor=SM(this,o)}ngOnChanges(e){if(this._checkForErrors(),!this._registered||"name"in e){if(this._registered&&(this._checkName(),this.formDirective)){let n=e.name.previousValue;this.formDirective.removeControl({name:n,path:this._getPath(n)})}this._setUpControl()}"isDisabled"in e&&this._updateDisabled(e),MM(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective?.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){vf(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._checkName()}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(e){lM.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(e){let n=e.isDisabled.currentValue,r=n!==0&&te(n);lM.then(()=>{r&&!this.control.disabled?this.control.disable():!r&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(e){return this._parent?DM(e,this._parent):[e]}static \u0275fac=function(n){return new(n||t)(Ce(ur,9),Ce(Cf,10),Ce(wf,10),Ce(Xv,10),Ce(we,8),Ce(Cc,8))};static \u0275dir=A({type:t,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[Pe([JP]),ge,Fe]})}return t})();var Mf=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=A({type:t,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return t})();var Kv=class extends us{constructor(i,e,n){super(ib(e),rb(n,e)),this.controls=i,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;at(i){return this.controls[this._adjustIndex(i)]}push(i,e={}){Array.isArray(i)?i.forEach(n=>{this.controls.push(n),this._registerControl(n)}):(this.controls.push(i),this._registerControl(i)),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}insert(i,e,n={}){this.controls.splice(i,0,e),this._registerControl(e),this.updateValueAndValidity({emitEvent:n.emitEvent})}removeAt(i,e={}){let n=this._adjustIndex(i);n<0&&(n=0),this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),this.controls.splice(n,1),this.updateValueAndValidity({emitEvent:e.emitEvent})}setControl(i,e,n={}){let r=this._adjustIndex(i);r<0&&(r=0),this.controls[r]&&this.controls[r]._registerOnCollectionChange(()=>{}),this.controls.splice(r,1),e&&(this.controls.splice(r,0,e),this._registerControl(e)),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(i,e={}){wM(this,!1,i),i.forEach((n,r)=>{CM(this,!1,r),this.at(r).setValue(n,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(i,e={}){i!=null&&(i.forEach((n,r)=>{this.at(r)&&this.at(r).patchValue(n,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(i=[],e={}){this._forEachChild((n,r)=>{n.reset(i[r],X(C({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new yc(this))}getRawValue(){return this.controls.map(i=>i.getRawValue())}clear(i={}){this.controls.length<1||(this._forEachChild(e=>e._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:i.emitEvent}))}_adjustIndex(i){return i<0?i+this.length:i}_syncPendingControls(){let i=this.controls.reduce((e,n)=>n._syncPendingControls()?!0:e,!1);return i&&this.updateValueAndValidity({onlySelf:!0}),i}_forEachChild(i){this.controls.forEach((e,n)=>{i(e,n)})}_updateValue(){this.value=this.controls.filter(i=>i.enabled||this.disabled).map(i=>i.value)}_anyControls(i){return this.controls.some(e=>e.enabled&&i(e))}_setUpControls(){this._forEachChild(i=>this._registerControl(i))}_allControlsDisabled(){for(let i of this.controls)if(i.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(i){i.setParent(this),i._registerOnCollectionChange(this._onCollectionChange)}_find(i){return this.at(i)??null}};var eL=(()=>{class t extends ur{callSetDisabledState;get submitted(){return rt(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=gt(()=>this._submittedReactive());_submittedReactive=I(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,n,r){super(),this.callSetDisabledState=r,this._setValidators(e),this._setAsyncValidators(n)}ngOnChanges(e){this.onChanges(e)}ngOnDestroy(){this.onDestroy()}onChanges(e){this._checkFormPresent(),e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(yf(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(e){let n=this.form.get(e.path);return vf(n,e,this.callSetDisabledState),n.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),n}getControl(e){return this.form.get(e.path)}removeControl(e){oM(e.control||null,e,!1),ZP(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}updateModel(e,n){this.form.get(e.path).setValue(n)}onReset(){this.resetForm()}resetForm(e=void 0,n={}){this.form.reset(e,n),this._submittedReactive.set(!1)}onSubmit(e){return this.submitted=!0,IM(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new _f(this.control)),e?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(e=>{let n=e.control,r=this.form.get(e.path);n!==r&&(oM(n||null,e),XP(r)&&(vf(r,e,this.callSetDisabledState),e.control=r))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let n=this.form.get(e.path);EM(n,e),n.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){let n=this.form?.get(e.path);n&&YP(n,e)&&n.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){ob(this.form,this),this._oldForm&&yf(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(n){return new(n||t)(Ce(Cf,10),Ce(wf,10),Ce(Cc,8))};static \u0275dir=A({type:t,features:[ge,Fe]})}return t})();var TM=new b("");var tL={provide:ri,useExisting:fn(()=>Dc)},Dc=(()=>{class t extends ri{_ngModelWarningConfig;_added=!1;viewModel;control;name=null;set isDisabled(e){}model;update=new M;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(e,n,r,o,a){super(),this._ngModelWarningConfig=a,this._parent=e,this._setValidators(n),this._setAsyncValidators(r),this.valueAccessor=SM(this,o)}ngOnChanges(e){this._added||this._setUpControl(),MM(e,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective?.removeControl(this)}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}get path(){return DM(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_setUpControl(){this.control=this.formDirective.addControl(this),this._added=!0}static \u0275fac=function(n){return new(n||t)(Ce(ur,13),Ce(Cf,10),Ce(wf,10),Ce(Xv,10),Ce(TM,8))};static \u0275dir=A({type:t,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},standalone:!1,features:[Pe([tL]),ge,Fe]})}return t})();var nL={provide:ur,useExisting:fn(()=>mr)},mr=(()=>{class t extends eL{form=null;ngSubmit=new M;get control(){return this.form}static \u0275fac=(()=>{let e;return function(r){return(e||(e=$e(t)))(r||t)}})();static \u0275dir=A({type:t,selectors:[["","formGroup",""]],hostBindings:function(n,r){n&1&&E("submit",function(a){return r.onSubmit(a)})("reset",function(){return r.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[Pe([nL]),ge]})}return t})();var kM=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=H({type:t});static \u0275inj=j({})}return t})();function cM(t){return!!t&&(t.asyncValidators!==void 0||t.validators!==void 0||t.updateOn!==void 0)}var If=(()=>{class t{useNonNullable=!1;get nonNullable(){let e=new t;return e.useNonNullable=!0,e}group(e,n=null){let r=this._reduceControls(e),o={};return cM(n)?o=n:n!==null&&(o.validators=n.validator,o.asyncValidators=n.asyncValidator),new ms(r,o)}record(e,n=null){let r=this._reduceControls(e);return new Zv(r,n)}control(e,n,r){let o={};return this.useNonNullable?(cM(n)?o=n:(o.validators=n,o.asyncValidators=r),new bc(e,X(C({},o),{nonNullable:!0}))):new bc(e,n,r)}array(e,n,r){let o=e.map(a=>this._createControl(a));return new Kv(o,n,r)}_reduceControls(e){let n={};return Object.keys(e).forEach(r=>{n[r]=this._createControl(e[r])}),n}_createControl(e){if(e instanceof bc)return e;if(e instanceof us)return e;if(Array.isArray(e)){let n=e[0],r=e.length>1?e[1]:null,o=e.length>2?e[2]:null;return this.control(n,r,o)}else return this.control(e)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var fs=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:Cc,useValue:e.callSetDisabledState??Ef}]}}static \u0275fac=function(n){return new(n||t)};static \u0275mod=H({type:t});static \u0275inj=j({imports:[kM]})}return t})(),Sf=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:TM,useValue:e.warnOnNgModelWithFormControl??"always"},{provide:Cc,useValue:e.callSetDisabledState??Ef}]}}static \u0275fac=function(n){return new(n||t)};static \u0275mod=H({type:t});static \u0275inj=j({imports:[kM]})}return t})();var AM=new b("MAT_INPUT_VALUE_ACCESSOR");var Tf=(()=>{class t{isErrorState(e,n){return!!(e&&e.invalid&&(e.touched||n&&n.submitted))}static \u0275fac=function(n){return new(n||t)};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var hs=class{_defaultMatcher;ngControl;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;constructor(i,e,n,r,o){this._defaultMatcher=i,this.ngControl=e,this._parentFormGroup=n,this._parentForm=r,this._stateChanges=o}updateErrorState(){let i=this.errorState,e=this._parentFormGroup||this._parentForm,n=this.matcher||this._defaultMatcher,r=this.ngControl?this.ngControl.control:null,o=n?.isErrorState(r,e)??!1;o!==i&&(this.errorState=o,this._stateChanges.next())}};var iL=["button","checkbox","file","hidden","image","radio","range","reset","submit"],rL=new b("MAT_INPUT_CONFIG"),ln=(()=>{class t{_elementRef=c(V);_platform=c(ce);ngControl=c(ri,{optional:!0,self:!0});_autofillMonitor=c(eM);_ngZone=c(L);_formField=c(mc,{optional:!0});_renderer=c(Se);_uid=c(Qe).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=c(rL,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new x;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=Rt(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(ii.required)??!1}set required(e){this._required=Rt(e)}_required;get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&Uv().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=Rt(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(e=>Uv().has(e));constructor(){let e=c(wc,{optional:!0}),n=c(mr,{optional:!0}),r=c(Tf),o=c(AM,{optional:!0,self:!0}),a=this._elementRef.nativeElement,s=a.nodeName.toLowerCase();o?wi(o.value)?this._signalBasedValueAccessor=o:this._inputValueAccessor=o:this._inputValueAccessor=a,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(a,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new hs(r,this.ngControl,n,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=s==="select",this._isTextarea=s==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=a.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&Xt(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let n=this._elementRef.nativeElement;n.type==="number"?(n.type="text",n.setSelectionRange(0,0),n.type="number"):n.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let n=this._elementRef.nativeElement;this._previousPlaceholder=e,e?n.setAttribute("placeholder",e):n.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){iL.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,n=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&n&&n.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let n=this._elementRef.nativeElement;e.length?n.setAttribute("aria-describedby",e.join(" ")):n.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let n=e.target;!n.value&&n.selectionStart===0&&n.selectionEnd===0&&(n.setSelectionRange(1,1),n.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(n){return new(n||t)};static \u0275dir=A({type:t,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(n,r){n&1&&E("focus",function(){return r._focusChanged(!0)})("blur",function(){return r._focusChanged(!1)})("input",function(){return r._onInput()}),n&2&&(Wt("id",r.id)("disabled",r.disabled&&!r.disabledInteractive)("required",r.required),Z("name",r.name||null)("readonly",r._getReadonlyAttribute())("aria-disabled",r.disabled&&r.disabledInteractive?"true":null)("aria-invalid",r.empty&&r.required?null:r.errorState)("aria-required",r.required)("id",r.id),U("mat-input-server",r._isServer)("mat-mdc-form-field-textarea-control",r._isInFormField&&r._isTextarea)("mat-mdc-form-field-input-control",r._isInFormField)("mat-mdc-input-disabled-interactive",r.disabledInteractive)("mdc-text-field__input",r._isInFormField)("mat-mdc-native-select-inline",r._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",te]},exportAs:["matInput"],features:[Pe([{provide:uc,useExisting:t}]),Fe]})}return t})(),Li=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=H({type:t});static \u0275inj=j({imports:[Ht,Ht,tM,_e]})}return t})();var Mc=class{_attachedHost=null;attach(i){return this._attachedHost=i,i.attach(this)}detach(){let i=this._attachedHost;i!=null&&(this._attachedHost=null,i.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(i){this._attachedHost=i}},Cn=class extends Mc{component;viewContainerRef;injector;projectableNodes;bindings;constructor(i,e,n,r,o){super(),this.component=i,this.viewContainerRef=e,this.injector=n,this.projectableNodes=r,this.bindings=o||null}},wn=class extends Mc{templateRef;viewContainerRef;context;injector;constructor(i,e,n,r){super(),this.templateRef=i,this.viewContainerRef=e,this.context=n,this.injector=r}get origin(){return this.templateRef.elementRef}attach(i,e=this.context){return this.context=e,super.attach(i)}detach(){return this.context=void 0,super.detach()}},ab=class extends Mc{element;constructor(i){super(),this.element=i instanceof V?i.nativeElement:i}},zr=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(i){if(i instanceof Cn)return this._attachedPortal=i,this.attachComponentPortal(i);if(i instanceof wn)return this._attachedPortal=i,this.attachTemplatePortal(i);if(this.attachDomPortal&&i instanceof ab)return this._attachedPortal=i,this.attachDomPortal(i)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(i){this._disposeFn=i}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}},kf=class extends zr{outletElement;_appRef;_defaultInjector;constructor(i,e,n){super(),this.outletElement=i,this._appRef=e,this._defaultInjector=n}attachComponentPortal(i){let e;if(i.viewContainerRef){let n=i.injector||i.viewContainerRef.injector,r=n.get(yi,null,{optional:!0})||void 0;e=i.viewContainerRef.createComponent(i.component,{index:i.viewContainerRef.length,injector:n,ngModuleRef:r,projectableNodes:i.projectableNodes||void 0,bindings:i.bindings||void 0}),this.setDisposeFn(()=>e.destroy())}else{let n=this._appRef,r=i.injector||this._defaultInjector||$.NULL,o=r.get(Oe,n.injector);e=Xu(i.component,{elementInjector:r,environmentInjector:o,projectableNodes:i.projectableNodes||void 0,bindings:i.bindings||void 0}),n.attachView(e.hostView),this.setDisposeFn(()=>{n.viewCount>0&&n.detachView(e.hostView),e.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=i,e}attachTemplatePortal(i){let e=i.viewContainerRef,n=e.createEmbeddedView(i.templateRef,i.context,{injector:i.injector});return n.rootNodes.forEach(r=>this.outletElement.appendChild(r)),n.detectChanges(),this.setDisposeFn(()=>{let r=e.indexOf(n);r!==-1&&e.remove(r)}),this._attachedPortal=i,n}attachDomPortal=i=>{let e=i.element;e.parentNode;let n=this.outletElement.ownerDocument.createComment("dom-portal");e.parentNode.insertBefore(n,e),this.outletElement.appendChild(e),this._attachedPortal=i,super.setDisposeFn(()=>{n.parentNode&&n.parentNode.replaceChild(e,n)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(i){return i.hostView.rootNodes[0]}},RM=(()=>{class t extends wn{constructor(){let e=c(ht),n=c(Ct);super(e,n)}static \u0275fac=function(n){return new(n||t)};static \u0275dir=A({type:t,selectors:[["","cdkPortal",""]],exportAs:["cdkPortal"],features:[ge]})}return t})(),cn=(()=>{class t extends zr{_moduleRef=c(yi,{optional:!0});_document=c(Y);_viewContainerRef=c(Ct);_isInitialized=!1;_attachedRef=null;constructor(){super()}get portal(){return this._attachedPortal}set portal(e){this.hasAttached()&&!e&&!this._isInitialized||(this.hasAttached()&&super.detach(),e&&super.attach(e),this._attachedPortal=e||null)}attached=new M;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(e){e.setAttachedHost(this);let n=e.viewContainerRef!=null?e.viewContainerRef:this._viewContainerRef,r=n.createComponent(e.component,{index:n.length,injector:e.injector||n.injector,projectableNodes:e.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:e.bindings||void 0});return n!==this._viewContainerRef&&this._getRootNode().appendChild(r.hostView.rootNodes[0]),super.setDisposeFn(()=>r.destroy()),this._attachedPortal=e,this._attachedRef=r,this.attached.emit(r),r}attachTemplatePortal(e){e.setAttachedHost(this);let n=this._viewContainerRef.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=e,this._attachedRef=n,this.attached.emit(n),n}attachDomPortal=e=>{let n=e.element;n.parentNode;let r=this._document.createComment("dom-portal");e.setAttachedHost(this),n.parentNode.insertBefore(r,n),this._getRootNode().appendChild(n),this._attachedPortal=e,super.setDisposeFn(()=>{r.parentNode&&r.parentNode.replaceChild(n,r)})};_getRootNode(){let e=this._viewContainerRef.element.nativeElement;return e.nodeType===e.ELEMENT_NODE?e:e.parentNode}static \u0275fac=function(n){return new(n||t)};static \u0275dir=A({type:t,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:[0,"cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[ge]})}return t})(),Vi=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=H({type:t});static \u0275inj=j({})}return t})();var oL=20,$r=(()=>{class t{_ngZone=c(L);_platform=c(ce);_renderer=c(pt).createRenderer(null,null);_cleanupGlobalListener;constructor(){}_scrolled=new x;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let n=this.scrollContainers.get(e);n&&(n.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=oL){return this._platform.isBrowser?new re(n=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let r=e>0?this._scrolled.pipe(wd(e)).subscribe(n):this._scrolled.subscribe(n);return this._scrolledCount++,()=>{r.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):q()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,n)=>this.deregister(n)),this._scrolled.complete()}ancestorScrolled(e,n){let r=this.getAncestorScrollContainers(e);return this.scrolled(n).pipe(ve(o=>!o||r.indexOf(o)>-1))}getAncestorScrollContainers(e){let n=[];return this.scrollContainers.forEach((r,o)=>{this._scrollableContainsElement(o,e)&&n.push(o)}),n}_scrollableContainsElement(e,n){let r=Jt(n),o=e.getElementRef().nativeElement;do if(r==o)return!0;while(r=r.parentElement);return!1}static \u0275fac=function(n){return new(n||t)};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Af=(()=>{class t{elementRef=c(V);scrollDispatcher=c($r);ngZone=c(L);dir=c(tt,{optional:!0});_scrollElement=this.elementRef.nativeElement;_destroyed=new x;_renderer=c(Se);_cleanupScroll;_elementScrolled=new x;constructor(){}ngOnInit(){this._cleanupScroll=this.ngZone.runOutsideAngular(()=>this._renderer.listen(this._scrollElement,"scroll",e=>this._elementScrolled.next(e))),this.scrollDispatcher.register(this)}ngOnDestroy(){this._cleanupScroll?.(),this._elementScrolled.complete(),this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(e){let n=this.elementRef.nativeElement,r=this.dir&&this.dir.value=="rtl";e.left==null&&(e.left=r?e.end:e.start),e.right==null&&(e.right=r?e.start:e.end),e.bottom!=null&&(e.top=n.scrollHeight-n.clientHeight-e.bottom),r&&rs()!=ni.NORMAL?(e.left!=null&&(e.right=n.scrollWidth-n.clientWidth-e.left),rs()==ni.INVERTED?e.left=e.right:rs()==ni.NEGATED&&(e.left=e.right?-e.right:e.right)):e.right!=null&&(e.left=n.scrollWidth-n.clientWidth-e.right),this._applyScrollToOptions(e)}_applyScrollToOptions(e){let n=this.elementRef.nativeElement;rf()?n.scrollTo(e):(e.top!=null&&(n.scrollTop=e.top),e.left!=null&&(n.scrollLeft=e.left))}measureScrollOffset(e){let n="left",r="right",o=this.elementRef.nativeElement;if(e=="top")return o.scrollTop;if(e=="bottom")return o.scrollHeight-o.clientHeight-o.scrollTop;let a=this.dir&&this.dir.value=="rtl";return e=="start"?e=a?r:n:e=="end"&&(e=a?n:r),a&&rs()==ni.INVERTED?e==n?o.scrollWidth-o.clientWidth-o.scrollLeft:o.scrollLeft:a&&rs()==ni.NEGATED?e==n?o.scrollLeft+o.scrollWidth-o.clientWidth:-o.scrollLeft:e==n?o.scrollLeft:o.scrollWidth-o.clientWidth-o.scrollLeft}static \u0275fac=function(n){return new(n||t)};static \u0275dir=A({type:t,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]]})}return t})(),aL=20,oi=(()=>{class t{_platform=c(ce);_listeners;_viewportSize=null;_change=new x;_document=c(Y);constructor(){let e=c(L),n=c(pt).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let r=o=>this._change.next(o);this._listeners=[n.listen("window","resize",r),n.listen("window","orientationchange",r)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:n,height:r}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+r,right:e.left+n,height:r,width:n}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,n=this._getWindow(),r=e.documentElement,o=r.getBoundingClientRect(),a=-o.top||e.body?.scrollTop||n.scrollY||r.scrollTop||0,s=-o.left||e.body?.scrollLeft||n.scrollX||r.scrollLeft||0;return{top:a,left:s}}change(e=aL){return e>0?this._change.pipe(wd(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static \u0275fac=function(n){return new(n||t)};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var jn=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=H({type:t});static \u0275inj=j({})}return t})(),sb=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=H({type:t});static \u0275inj=j({imports:[_e,jn,_e,jn]})}return t})();var mb=["*"];function sL(t,i){t&1&&ee(0)}var lL=["tabListContainer"],cL=["tabList"],dL=["tabListInner"],uL=["nextPaginator"],mL=["previousPaginator"],fL=["content"];function hL(t,i){}var pL=["tabBodyWrapper"],gL=["tabHeader"];function _L(t,i){}function vL(t,i){if(t&1&&lt(0,_L,0,0,"ng-template",12),t&2){let e=S().$implicit;R("cdkPortalOutlet",e.templateLabel)}}function bL(t,i){if(t&1&&g(0),t&2){let e=S().$implicit;se(e.textLabel)}}function yL(t,i){if(t&1){let e=Ue();m(0,"div",7,2),E("click",function(){let r=ue(e),o=r.$implicit,a=r.$index,s=S(),l=on(1);return me(s._handleClick(o,l,a))})("cdkFocusChange",function(r){let o=ue(e).$index,a=S();return me(a._tabFocusChanged(r,o))}),k(2,"span",8)(3,"div",9),m(4,"span",10)(5,"span",11),W(6,vL,1,1,null,12)(7,bL,1,1),f()()()}if(t&2){let e=i.$implicit,n=i.$index,r=on(1),o=S();Dt(e.labelClass),U("mdc-tab--active",o.selectedIndex===n),R("id",o._getTabLabelId(e,n))("disabled",e.disabled)("fitInkBarToContent",o.fitInkBarToContent),Z("tabIndex",o._getTabIndex(n))("aria-posinset",n+1)("aria-setsize",o._tabs.length)("aria-controls",o._getTabContentId(n))("aria-selected",o.selectedIndex===n)("aria-label",e.ariaLabel||null)("aria-labelledby",!e.ariaLabel&&e.ariaLabelledby?e.ariaLabelledby:null),p(3),R("matRippleTrigger",r)("matRippleDisabled",e.disabled||o.disableRipple),p(3),G(e.templateLabel?6:7)}}function CL(t,i){t&1&&ee(0)}function wL(t,i){if(t&1){let e=Ue();m(0,"mat-tab-body",13),E("_onCentered",function(){ue(e);let r=S();return me(r._removeTabBodyWrapperHeight())})("_onCentering",function(r){ue(e);let o=S();return me(o._setTabBodyWrapperHeight(r))})("_beforeCentering",function(r){ue(e);let o=S();return me(o._bodyCentered(r))}),f()}if(t&2){let e=i.$implicit,n=i.$index,r=S();Dt(e.bodyClass),R("id",r._getTabContentId(n))("content",e.content)("position",e.position)("animationDuration",r.animationDuration)("preserveContent",r.preserveContent),Z("tabindex",r.contentTabIndex!=null&&r.selectedIndex===n?r.contentTabIndex:null)("aria-labelledby",r._getTabLabelId(e,n))("aria-hidden",r.selectedIndex!==n)}}var DL=new b("MatTabContent"),xL=(()=>{class t{template=c(ht);constructor(){}static \u0275fac=function(n){return new(n||t)};static \u0275dir=A({type:t,selectors:[["","matTabContent",""]],features:[Pe([{provide:DL,useExisting:t}])]})}return t})(),EL=new b("MatTabLabel"),PM=new b("MAT_TAB"),ML=(()=>{class t extends RM{_closestTab=c(PM,{optional:!0});static \u0275fac=(()=>{let e;return function(r){return(e||(e=$e(t)))(r||t)}})();static \u0275dir=A({type:t,selectors:[["","mat-tab-label",""],["","matTabLabel",""]],features:[Pe([{provide:EL,useExisting:t}]),ge]})}return t})(),LM=new b("MAT_TAB_GROUP"),Ic=(()=>{class t{_viewContainerRef=c(Ct);_closestTabGroup=c(LM,{optional:!0});disabled=!1;get templateLabel(){return this._templateLabel}set templateLabel(e){this._setTemplateLabelInput(e)}_templateLabel;_explicitContent=void 0;_implicitContent;textLabel="";ariaLabel;ariaLabelledby;labelClass;bodyClass;id=null;_contentPortal=null;get content(){return this._contentPortal}_stateChanges=new x;position=null;origin=null;isActive=!1;constructor(){c(Ye).load(Fi)}ngOnChanges(e){(e.hasOwnProperty("textLabel")||e.hasOwnProperty("disabled"))&&this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}ngOnInit(){this._contentPortal=new wn(this._explicitContent||this._implicitContent,this._viewContainerRef)}_setTemplateLabelInput(e){e&&e._closestTab===this&&(this._templateLabel=e)}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=D({type:t,selectors:[["mat-tab"]],contentQueries:function(n,r,o){if(n&1&&wt(o,ML,5)(o,xL,7,ht),n&2){let a;F(a=P())&&(r.templateLabel=a.first),F(a=P())&&(r._explicitContent=a.first)}},viewQuery:function(n,r){if(n&1&&xe(ht,7),n&2){let o;F(o=P())&&(r._implicitContent=o.first)}},hostAttrs:["hidden",""],hostVars:1,hostBindings:function(n,r){n&2&&Z("id",null)},inputs:{disabled:[2,"disabled","disabled",te],textLabel:[0,"label","textLabel"],ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],labelClass:"labelClass",bodyClass:"bodyClass",id:"id"},exportAs:["matTab"],features:[Pe([{provide:PM,useExisting:t}]),Fe],ngContentSelectors:mb,decls:1,vars:0,template:function(n,r){n&1&&(Me(),Dl(0,sL,1,0,"ng-template"))},encapsulation:2})}return t})(),lb="mdc-tab-indicator--active",OM="mdc-tab-indicator--no-transition",cb=class{_items;_currentItem;constructor(i){this._items=i}hide(){this._items.forEach(i=>i.deactivateInkBar()),this._currentItem=void 0}alignToElement(i){let e=this._items.find(r=>r.elementRef.nativeElement===i),n=this._currentItem;if(e!==n&&(n?.deactivateInkBar(),e)){let r=n?.elementRef.nativeElement.getBoundingClientRect?.();e.activateInkBar(r),this._currentItem=e}}},IL=(()=>{class t{_elementRef=c(V);_inkBarElement=null;_inkBarContentElement=null;_fitToContent=!1;get fitInkBarToContent(){return this._fitToContent}set fitInkBarToContent(e){this._fitToContent!==e&&(this._fitToContent=e,this._inkBarElement&&this._appendInkBarElement())}activateInkBar(e){let n=this._elementRef.nativeElement;if(!e||!n.getBoundingClientRect||!this._inkBarContentElement){n.classList.add(lb);return}let r=n.getBoundingClientRect(),o=e.width/r.width,a=e.left-r.left;n.classList.add(OM),this._inkBarContentElement.style.setProperty("transform",`translateX(${a}px) scaleX(${o})`),n.getBoundingClientRect(),n.classList.remove(OM),n.classList.add(lb),this._inkBarContentElement.style.setProperty("transform","")}deactivateInkBar(){this._elementRef.nativeElement.classList.remove(lb)}ngOnInit(){this._createInkBarElement()}ngOnDestroy(){this._inkBarElement?.remove(),this._inkBarElement=this._inkBarContentElement=null}_createInkBarElement(){let e=this._elementRef.nativeElement.ownerDocument||document,n=this._inkBarElement=e.createElement("span"),r=this._inkBarContentElement=e.createElement("span");n.className="mdc-tab-indicator",r.className="mdc-tab-indicator__content mdc-tab-indicator__content--underline",n.appendChild(this._inkBarContentElement),this._appendInkBarElement()}_appendInkBarElement(){this._inkBarElement;let e=this._fitToContent?this._elementRef.nativeElement.querySelector(".mdc-tab__content"):this._elementRef.nativeElement;e.appendChild(this._inkBarElement)}static \u0275fac=function(n){return new(n||t)};static \u0275dir=A({type:t,inputs:{fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",te]}})}return t})();var VM=(()=>{class t extends IL{elementRef=c(V);disabled=!1;focus(){this.elementRef.nativeElement.focus()}getOffsetLeft(){return this.elementRef.nativeElement.offsetLeft}getOffsetWidth(){return this.elementRef.nativeElement.offsetWidth}static \u0275fac=(()=>{let e;return function(r){return(e||(e=$e(t)))(r||t)}})();static \u0275dir=A({type:t,selectors:[["","matTabLabelWrapper",""]],hostVars:3,hostBindings:function(n,r){n&2&&(Z("aria-disabled",!!r.disabled),U("mat-mdc-tab-disabled",r.disabled))},inputs:{disabled:[2,"disabled","disabled",te]},features:[ge]})}return t})(),NM={passive:!0},SL=650,TL=100,kL=(()=>{class t{_elementRef=c(V);_changeDetectorRef=c(we);_viewportRuler=c(oi);_dir=c(tt,{optional:!0});_ngZone=c(L);_platform=c(ce);_sharedResizeObserver=c(af);_injector=c($);_renderer=c(Se);_animationsDisabled=Ve();_eventCleanups;_scrollDistance=0;_selectedIndexChanged=!1;_destroyed=new x;_showPaginationControls=!1;_disableScrollAfter=!0;_disableScrollBefore=!0;_tabLabelCount;_scrollDistanceChanged=!1;_keyManager;_currentTextContent;_stopScrolling=new x;disablePagination=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){let n=isNaN(e)?0:e;this._selectedIndex!=n&&(this._selectedIndexChanged=!0,this._selectedIndex=n,this._keyManager&&this._keyManager.updateActiveItem(n))}_selectedIndex=0;selectFocusedIndex=new M;indexFocused=new M;constructor(){this._eventCleanups=this._ngZone.runOutsideAngular(()=>[this._renderer.listen(this._elementRef.nativeElement,"mouseleave",()=>this._stopInterval())])}ngAfterViewInit(){this._eventCleanups.push(this._renderer.listen(this._previousPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("before"),NM),this._renderer.listen(this._nextPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("after"),NM))}ngAfterContentInit(){let e=this._dir?this._dir.change:q("ltr"),n=this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe(Wi(32),ye(this._destroyed)),r=this._viewportRuler.change(150).pipe(ye(this._destroyed)),o=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new lc(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(()=>!1),this._keyManager.updateActiveItem(Math.max(this._selectedIndex,0)),We(o,{injector:this._injector}),St(e,r,n,this._items.changes,this._itemsResized()).pipe(ye(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>{Promise.resolve().then(()=>{this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),this._scrollDistance)),o()})}),this._keyManager?.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.subscribe(a=>{this.indexFocused.emit(a),this._setTabFocus(a)})}_itemsResized(){return typeof ResizeObserver!="function"?Ze:this._items.changes.pipe(Ke(this._items),ft(e=>new re(n=>this._ngZone.runOutsideAngular(()=>{let r=new ResizeObserver(o=>n.next(o));return e.forEach(o=>r.observe(o.elementRef.nativeElement)),()=>{r.disconnect()}}))),uo(1),ve(e=>e.some(n=>n.contentRect.width>0&&n.contentRect.height>0)))}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._keyManager?.destroy(),this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(e){if(!_t(e))switch(e.keyCode){case 13:case 32:if(this.focusIndex!==this.selectedIndex){let n=this._items.get(this.focusIndex);n&&!n.disabled&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(e))}break;default:this._keyManager?.onKeydown(e)}}_onContentChanges(){let e=this._elementRef.nativeElement.textContent;e!==this._currentTextContent&&(this._currentTextContent=e||"",this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(e){!this._isValidIndex(e)||this.focusIndex===e||!this._keyManager||this._keyManager.setActiveItem(e)}_isValidIndex(e){return this._items?!!this._items.toArray()[e]:!0}_setTabFocus(e){if(this._showPaginationControls&&this._scrollToLabel(e),this._items&&this._items.length){this._items.toArray()[e].focus();let n=this._tabListContainer.nativeElement;this._getLayoutDirection()=="ltr"?n.scrollLeft=0:n.scrollLeft=n.scrollWidth-n.offsetWidth}}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_updateTabScrollPosition(){if(this.disablePagination)return;let e=this.scrollDistance,n=this._getLayoutDirection()==="ltr"?-e:e;this._tabList.nativeElement.style.transform=`translateX(${Math.round(n)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(e){this._scrollTo(e)}_scrollHeader(e){let n=this._tabListContainer.nativeElement.offsetWidth,r=(e=="before"?-1:1)*n/3;return this._scrollTo(this._scrollDistance+r)}_handlePaginatorClick(e){this._stopInterval(),this._scrollHeader(e)}_scrollToLabel(e){if(this.disablePagination)return;let n=this._items?this._items.toArray()[e]:null;if(!n)return;let r=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:o,offsetWidth:a}=n.elementRef.nativeElement,s,l;this._getLayoutDirection()=="ltr"?(s=o,l=s+a):(l=this._tabListInner.nativeElement.offsetWidth-o,s=l-a);let d=this.scrollDistance,u=this.scrollDistance+r;s<d?this.scrollDistance-=d-s:l>u&&(this.scrollDistance+=Math.min(l-u,s-d))}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{let e=this._tabListInner.nativeElement.scrollWidth,n=this._elementRef.nativeElement.offsetWidth,r=e-n>=5;r||(this.scrollDistance=0),r!==this._showPaginationControls&&(this._showPaginationControls=r,this._changeDetectorRef.markForCheck())}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=this.scrollDistance==0,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){let e=this._tabListInner.nativeElement.scrollWidth,n=this._tabListContainer.nativeElement.offsetWidth;return e-n||0}_alignInkBarToSelectedTab(){let e=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,n=e?e.elementRef.nativeElement:null;n?this._inkBar.alignToElement(n):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(e,n){n&&n.button!=null&&n.button!==0||(this._stopInterval(),Us(SL,TL).pipe(ye(St(this._stopScrolling,this._destroyed))).subscribe(()=>{let{maxScrollDistance:r,distance:o}=this._scrollHeader(e);(o===0||o>=r)&&this._stopInterval()}))}_scrollTo(e){if(this.disablePagination)return{maxScrollDistance:0,distance:0};let n=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(n,e)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:n,distance:this._scrollDistance}}static \u0275fac=function(n){return new(n||t)};static \u0275dir=A({type:t,inputs:{disablePagination:[2,"disablePagination","disablePagination",te],selectedIndex:[2,"selectedIndex","selectedIndex",Si]},outputs:{selectFocusedIndex:"selectFocusedIndex",indexFocused:"indexFocused"}})}return t})(),AL=(()=>{class t extends kL{_items;_tabListContainer;_tabList;_tabListInner;_nextPaginator;_previousPaginator;_inkBar;ariaLabel;ariaLabelledby;disableRipple=!1;ngAfterContentInit(){this._inkBar=new cb(this._items),super.ngAfterContentInit()}_itemSelected(e){e.preventDefault()}static \u0275fac=(()=>{let e;return function(r){return(e||(e=$e(t)))(r||t)}})();static \u0275cmp=D({type:t,selectors:[["mat-tab-header"]],contentQueries:function(n,r,o){if(n&1&&wt(o,VM,4),n&2){let a;F(a=P())&&(r._items=a)}},viewQuery:function(n,r){if(n&1&&xe(lL,7)(cL,7)(dL,7)(uL,5)(mL,5),n&2){let o;F(o=P())&&(r._tabListContainer=o.first),F(o=P())&&(r._tabList=o.first),F(o=P())&&(r._tabListInner=o.first),F(o=P())&&(r._nextPaginator=o.first),F(o=P())&&(r._previousPaginator=o.first)}},hostAttrs:[1,"mat-mdc-tab-header"],hostVars:4,hostBindings:function(n,r){n&2&&U("mat-mdc-tab-header-pagination-controls-enabled",r._showPaginationControls)("mat-mdc-tab-header-rtl",r._getLayoutDirection()=="rtl")},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],disableRipple:[2,"disableRipple","disableRipple",te]},features:[ge],ngContentSelectors:mb,decls:13,vars:10,consts:[["previousPaginator",""],["tabListContainer",""],["tabList",""],["tabListInner",""],["nextPaginator",""],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-before",3,"click","mousedown","touchend","matRippleDisabled"],[1,"mat-mdc-tab-header-pagination-chevron"],[1,"mat-mdc-tab-label-container",3,"keydown"],["role","tablist",1,"mat-mdc-tab-list",3,"cdkObserveContent"],[1,"mat-mdc-tab-labels"],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-after",3,"mousedown","click","touchend","matRippleDisabled"]],template:function(n,r){n&1&&(Me(),m(0,"div",5,0),E("click",function(){return r._handlePaginatorClick("before")})("mousedown",function(a){return r._handlePaginatorPress("before",a)})("touchend",function(){return r._stopInterval()}),k(2,"div",6),f(),m(3,"div",7,1),E("keydown",function(a){return r._handleKeydown(a)}),m(5,"div",8,2),E("cdkObserveContent",function(){return r._onContentChanges()}),m(7,"div",9,3),ee(9),f()()(),m(10,"div",10,4),E("mousedown",function(a){return r._handlePaginatorPress("after",a)})("click",function(){return r._handlePaginatorClick("after")})("touchend",function(){return r._stopInterval()}),k(12,"div",6),f()),n&2&&(U("mat-mdc-tab-header-pagination-disabled",r._disableScrollBefore),R("matRippleDisabled",r._disableScrollBefore||r.disableRipple),p(3),U("_mat-animation-noopable",r._animationsDisabled),p(2),Z("aria-label",r.ariaLabel||null)("aria-labelledby",r.ariaLabelledby||null),p(5),U("mat-mdc-tab-header-pagination-disabled",r._disableScrollAfter),R("matRippleDisabled",r._disableScrollAfter||r.disableRipple))},dependencies:[dc,Gm],styles:[`.mat-mdc-tab-header {
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
`],encapsulation:2})}return t})(),RL=new b("MAT_TABS_CONFIG"),FM=(()=>{class t extends cn{_host=c(db);_ngZone=c(L);_centeringSub=ie.EMPTY;_leavingSub=ie.EMPTY;constructor(){super()}ngOnInit(){super.ngOnInit(),this._centeringSub=this._host._beforeCentering.pipe(Ke(this._host._isCenterPosition())).subscribe(e=>{this._host._content&&e&&!this.hasAttached()&&this._ngZone.run(()=>{Promise.resolve().then(),this.attach(this._host._content)})}),this._leavingSub=this._host._afterLeavingCenter.subscribe(()=>{this._host.preserveContent||this._ngZone.run(()=>this.detach())})}ngOnDestroy(){super.ngOnDestroy(),this._centeringSub.unsubscribe(),this._leavingSub.unsubscribe()}static \u0275fac=function(n){return new(n||t)};static \u0275dir=A({type:t,selectors:[["","matTabBodyHost",""]],features:[ge]})}return t})(),db=(()=>{class t{_elementRef=c(V);_dir=c(tt,{optional:!0});_ngZone=c(L);_injector=c($);_renderer=c(Se);_diAnimationsDisabled=Ve();_eventCleanups;_initialized=!1;_fallbackTimer;_positionIndex;_dirChangeSubscription=ie.EMPTY;_position;_previousPosition;_onCentering=new M;_beforeCentering=new M;_afterLeavingCenter=new M;_onCentered=new M(!0);_portalHost;_contentElement;_content;animationDuration="500ms";preserveContent=!1;set position(e){this._positionIndex=e,this._computePositionAnimationState()}constructor(){if(this._dir){let e=c(we);this._dirChangeSubscription=this._dir.change.subscribe(n=>{this._computePositionAnimationState(n),e.markForCheck()})}}ngOnInit(){this._bindTransitionEvents(),this._position==="center"&&(this._setActiveClass(!0),We(()=>this._onCentering.emit(this._elementRef.nativeElement.clientHeight),{injector:this._injector})),this._initialized=!0}ngOnDestroy(){clearTimeout(this._fallbackTimer),this._eventCleanups?.forEach(e=>e()),this._dirChangeSubscription.unsubscribe()}_bindTransitionEvents(){this._ngZone.runOutsideAngular(()=>{let e=this._elementRef.nativeElement,n=r=>{r.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.remove("mat-tab-body-animating"),r.type==="transitionend"&&this._transitionDone())};this._eventCleanups=[this._renderer.listen(e,"transitionstart",r=>{r.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.add("mat-tab-body-animating"),this._transitionStarted())}),this._renderer.listen(e,"transitionend",n),this._renderer.listen(e,"transitioncancel",n)]})}_transitionStarted(){clearTimeout(this._fallbackTimer);let e=this._position==="center";this._beforeCentering.emit(e),e&&this._onCentering.emit(this._elementRef.nativeElement.clientHeight)}_transitionDone(){this._position==="center"?this._onCentered.emit():this._previousPosition==="center"&&this._afterLeavingCenter.emit()}_setActiveClass(e){this._elementRef.nativeElement.classList.toggle("mat-mdc-tab-body-active",e)}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_isCenterPosition(){return this._positionIndex===0}_computePositionAnimationState(e=this._getLayoutDirection()){this._previousPosition=this._position,this._positionIndex<0?this._position=e=="ltr"?"left":"right":this._positionIndex>0?this._position=e=="ltr"?"right":"left":this._position="center",this._animationsDisabled()?this._simulateTransitionEvents():this._initialized&&(this._position==="center"||this._previousPosition==="center")&&(clearTimeout(this._fallbackTimer),this._fallbackTimer=this._ngZone.runOutsideAngular(()=>setTimeout(()=>this._simulateTransitionEvents(),100)))}_simulateTransitionEvents(){this._transitionStarted(),We(()=>this._transitionDone(),{injector:this._injector})}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0ms"||this.animationDuration==="0s"}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=D({type:t,selectors:[["mat-tab-body"]],viewQuery:function(n,r){if(n&1&&xe(FM,5)(fL,5),n&2){let o;F(o=P())&&(r._portalHost=o.first),F(o=P())&&(r._contentElement=o.first)}},hostAttrs:[1,"mat-mdc-tab-body"],hostVars:1,hostBindings:function(n,r){n&2&&Z("inert",r._position==="center"?null:"")},inputs:{_content:[0,"content","_content"],animationDuration:"animationDuration",preserveContent:"preserveContent",position:"position"},outputs:{_onCentering:"_onCentering",_beforeCentering:"_beforeCentering",_onCentered:"_onCentered"},decls:3,vars:6,consts:[["content",""],["cdkScrollable","",1,"mat-mdc-tab-body-content"],["matTabBodyHost",""]],template:function(n,r){n&1&&(m(0,"div",1,0),lt(2,hL,0,0,"ng-template",2),f()),n&2&&U("mat-tab-body-content-left",r._position==="left")("mat-tab-body-content-right",r._position==="right")("mat-tab-body-content-can-animate",r._position==="center"||r._previousPosition==="center")},dependencies:[FM,Af],styles:[`.mat-mdc-tab-body {
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
`],encapsulation:2})}return t})(),Rf=(()=>{class t{_elementRef=c(V);_changeDetectorRef=c(we);_ngZone=c(L);_tabsSubscription=ie.EMPTY;_tabLabelSubscription=ie.EMPTY;_tabBodySubscription=ie.EMPTY;_diAnimationsDisabled=Ve();_allTabs;_tabBodies;_tabBodyWrapper;_tabHeader;_tabs=new Xi;_indexToSelect=0;_lastFocusedTabIndex=null;_tabBodyWrapperHeight=0;color;get fitInkBarToContent(){return this._fitInkBarToContent}set fitInkBarToContent(e){this._fitInkBarToContent=e,this._changeDetectorRef.markForCheck()}_fitInkBarToContent=!1;stretchTabs=!0;alignTabs=null;dynamicHeight=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){this._indexToSelect=isNaN(e)?null:e}_selectedIndex=null;headerPosition="above";get animationDuration(){return this._animationDuration}set animationDuration(e){let n=e+"";this._animationDuration=/^\d+$/.test(n)?e+"ms":n}_animationDuration;get contentTabIndex(){return this._contentTabIndex}set contentTabIndex(e){this._contentTabIndex=isNaN(e)?null:e}_contentTabIndex=null;disablePagination=!1;disableRipple=!1;preserveContent=!1;get backgroundColor(){return this._backgroundColor}set backgroundColor(e){let n=this._elementRef.nativeElement.classList;n.remove("mat-tabs-with-background",`mat-background-${this.backgroundColor}`),e&&n.add("mat-tabs-with-background",`mat-background-${e}`),this._backgroundColor=e}_backgroundColor;ariaLabel;ariaLabelledby;selectedIndexChange=new M;focusChange=new M;animationDone=new M;selectedTabChange=new M(!0);_groupId;_isServer=!c(ce).isBrowser;constructor(){let e=c(RL,{optional:!0});this._groupId=c(Qe).getId("mat-tab-group-"),this.animationDuration=e&&e.animationDuration?e.animationDuration:"500ms",this.disablePagination=e&&e.disablePagination!=null?e.disablePagination:!1,this.dynamicHeight=e&&e.dynamicHeight!=null?e.dynamicHeight:!1,e?.contentTabIndex!=null&&(this.contentTabIndex=e.contentTabIndex),this.preserveContent=!!e?.preserveContent,this.fitInkBarToContent=e&&e.fitInkBarToContent!=null?e.fitInkBarToContent:!1,this.stretchTabs=e&&e.stretchTabs!=null?e.stretchTabs:!0,this.alignTabs=e&&e.alignTabs!=null?e.alignTabs:null}ngAfterContentChecked(){let e=this._indexToSelect=this._clampTabIndex(this._indexToSelect);if(this._selectedIndex!=e){let n=this._selectedIndex==null;if(!n){this.selectedTabChange.emit(this._createChangeEvent(e));let r=this._tabBodyWrapper.nativeElement;r.style.minHeight=r.clientHeight+"px"}Promise.resolve().then(()=>{this._tabs.forEach((r,o)=>r.isActive=o===e),n||(this.selectedIndexChange.emit(e),this._tabBodyWrapper.nativeElement.style.minHeight="")})}this._tabs.forEach((n,r)=>{n.position=r-e,this._selectedIndex!=null&&n.position==0&&!n.origin&&(n.origin=e-this._selectedIndex)}),this._selectedIndex!==e&&(this._selectedIndex=e,this._lastFocusedTabIndex=null,this._changeDetectorRef.markForCheck())}ngAfterContentInit(){this._subscribeToAllTabChanges(),this._subscribeToTabLabels(),this._tabsSubscription=this._tabs.changes.subscribe(()=>{let e=this._clampTabIndex(this._indexToSelect);if(e===this._selectedIndex){let n=this._tabs.toArray(),r;for(let o=0;o<n.length;o++)if(n[o].isActive){this._indexToSelect=this._selectedIndex=o,this._lastFocusedTabIndex=null,r=n[o];break}!r&&n[e]&&Promise.resolve().then(()=>{n[e].isActive=!0,this.selectedTabChange.emit(this._createChangeEvent(e))})}this._changeDetectorRef.markForCheck()})}ngAfterViewInit(){this._tabBodySubscription=this._tabBodies.changes.subscribe(()=>this._bodyCentered(!0))}_subscribeToAllTabChanges(){this._allTabs.changes.pipe(Ke(this._allTabs)).subscribe(e=>{this._tabs.reset(e.filter(n=>n._closestTabGroup===this||!n._closestTabGroup)),this._tabs.notifyOnChanges()})}ngOnDestroy(){this._tabs.destroy(),this._tabsSubscription.unsubscribe(),this._tabLabelSubscription.unsubscribe(),this._tabBodySubscription.unsubscribe()}realignInkBar(){this._tabHeader&&this._tabHeader._alignInkBarToSelectedTab()}updatePagination(){this._tabHeader&&this._tabHeader.updatePagination()}focusTab(e){let n=this._tabHeader;n&&(n.focusIndex=e)}_focusChanged(e){this._lastFocusedTabIndex=e,this.focusChange.emit(this._createChangeEvent(e))}_createChangeEvent(e){let n=new ub;return n.index=e,this._tabs&&this._tabs.length&&(n.tab=this._tabs.toArray()[e]),n}_subscribeToTabLabels(){this._tabLabelSubscription&&this._tabLabelSubscription.unsubscribe(),this._tabLabelSubscription=St(...this._tabs.map(e=>e._stateChanges)).subscribe(()=>this._changeDetectorRef.markForCheck())}_clampTabIndex(e){return Math.min(this._tabs.length-1,Math.max(e||0,0))}_getTabLabelId(e,n){return e.id||`${this._groupId}-label-${n}`}_getTabContentId(e){return`${this._groupId}-content-${e}`}_setTabBodyWrapperHeight(e){if(!this.dynamicHeight||!this._tabBodyWrapperHeight){this._tabBodyWrapperHeight=e;return}let n=this._tabBodyWrapper.nativeElement;n.style.height=this._tabBodyWrapperHeight+"px",this._tabBodyWrapper.nativeElement.offsetHeight&&(n.style.height=e+"px")}_removeTabBodyWrapperHeight(){let e=this._tabBodyWrapper.nativeElement;this._tabBodyWrapperHeight=e.clientHeight,e.style.height="",this._ngZone.run(()=>this.animationDone.emit())}_handleClick(e,n,r){n.focusIndex=r,e.disabled||(this.selectedIndex=r)}_getTabIndex(e){let n=this._lastFocusedTabIndex??this.selectedIndex;return e===n?0:-1}_tabFocusChanged(e,n){e&&e!=="mouse"&&e!=="touch"&&(this._tabHeader.focusIndex=n)}_bodyCentered(e){e&&this._tabBodies?.forEach((n,r)=>n._setActiveClass(r===this._selectedIndex))}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0"||this.animationDuration==="0ms"}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=D({type:t,selectors:[["mat-tab-group"]],contentQueries:function(n,r,o){if(n&1&&wt(o,Ic,5),n&2){let a;F(a=P())&&(r._allTabs=a)}},viewQuery:function(n,r){if(n&1&&xe(pL,5)(gL,5)(db,5),n&2){let o;F(o=P())&&(r._tabBodyWrapper=o.first),F(o=P())&&(r._tabHeader=o.first),F(o=P())&&(r._tabBodies=o)}},hostAttrs:[1,"mat-mdc-tab-group"],hostVars:11,hostBindings:function(n,r){n&2&&(Z("mat-align-tabs",r.alignTabs),Dt("mat-"+(r.color||"primary")),Ei("--mat-tab-animation-duration",r.animationDuration),U("mat-mdc-tab-group-dynamic-height",r.dynamicHeight)("mat-mdc-tab-group-inverted-header",r.headerPosition==="below")("mat-mdc-tab-group-stretch-tabs",r.stretchTabs))},inputs:{color:"color",fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",te],stretchTabs:[2,"mat-stretch-tabs","stretchTabs",te],alignTabs:[0,"mat-align-tabs","alignTabs"],dynamicHeight:[2,"dynamicHeight","dynamicHeight",te],selectedIndex:[2,"selectedIndex","selectedIndex",Si],headerPosition:"headerPosition",animationDuration:"animationDuration",contentTabIndex:[2,"contentTabIndex","contentTabIndex",Si],disablePagination:[2,"disablePagination","disablePagination",te],disableRipple:[2,"disableRipple","disableRipple",te],preserveContent:[2,"preserveContent","preserveContent",te],backgroundColor:"backgroundColor",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"]},outputs:{selectedIndexChange:"selectedIndexChange",focusChange:"focusChange",animationDone:"animationDone",selectedTabChange:"selectedTabChange"},exportAs:["matTabGroup"],features:[Pe([{provide:LM,useExisting:t}])],ngContentSelectors:mb,decls:9,vars:8,consts:[["tabHeader",""],["tabBodyWrapper",""],["tabNode",""],[3,"indexFocused","selectFocusedIndex","selectedIndex","disableRipple","disablePagination","aria-label","aria-labelledby"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"id","mdc-tab--active","class","disabled","fitInkBarToContent"],[1,"mat-mdc-tab-body-wrapper"],["role","tabpanel",3,"id","class","content","position","animationDuration","preserveContent"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"click","cdkFocusChange","id","disabled","fitInkBarToContent"],[1,"mdc-tab__ripple"],["mat-ripple","",1,"mat-mdc-tab-ripple",3,"matRippleTrigger","matRippleDisabled"],[1,"mdc-tab__content"],[1,"mdc-tab__text-label"],[3,"cdkPortalOutlet"],["role","tabpanel",3,"_onCentered","_onCentering","_beforeCentering","id","content","position","animationDuration","preserveContent"]],template:function(n,r){n&1&&(Me(),m(0,"mat-tab-header",3,0),E("indexFocused",function(a){return r._focusChanged(a)})("selectFocusedIndex",function(a){return r.selectedIndex=a}),Ge(2,yL,8,17,"div",4,Wu),f(),W(4,CL,1,0),m(5,"div",5,1),Ge(7,wL,1,10,"mat-tab-body",6,Wu),f()),n&2&&(R("selectedIndex",r.selectedIndex||0)("disableRipple",r.disableRipple)("disablePagination",r.disablePagination),$u("aria-label",r.ariaLabel)("aria-labelledby",r.ariaLabelledby),p(2),qe(r._tabs),p(2),G(r._isServer?4:-1),p(),U("_mat-animation-noopable",r._animationsDisabled()),p(2),qe(r._tabs))},dependencies:[AL,VM,rc,dc,cn,db],styles:[`.mdc-tab {
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
`],encapsulation:2})}return t})(),ub=class{index;tab};var BM=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=H({type:t});static \u0275inj=j({imports:[_e]})}return t})();function OL(t,i){if(t&1&&(m(0,"div",15)(1,"mat-icon"),g(2,"error_outline"),f(),m(3,"span"),g(4),f()()),t&2){let e=S();p(4),se(e.errorMessage())}}function NL(t,i){if(t&1&&(m(0,"div",15)(1,"mat-icon"),g(2,"error_outline"),f(),m(3,"span"),g(4),f()()),t&2){let e=S();p(4),se(e.errorMessage())}}function FL(t,i){if(t&1&&(m(0,"div",24)(1,"mat-icon"),g(2,"check_circle_outline"),f(),m(3,"span"),g(4),f()()),t&2){let e=S();p(4),se(e.successMessage())}}var Of=class t{email=Le.required();password=Le.required();name=Le.required();lastName=Le.required();errorMessage=Le.required();successMessage=Le.required();hide=I(!0);clickEvent(i){this.hide.set(!this.hide()),i.stopPropagation()}clearError(){this.errorMessage.set(""),this.successMessage.set("")}loginSubmitEvent=new M;submitLogin(){this.loginSubmitEvent.emit()}registerSubmitEvent=new M;submitRegister(){this.registerSubmitEvent.emit()}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=D({type:t,selectors:[["login-container"]],inputs:{email:[1,"email"],password:[1,"password"],name:[1,"name"],lastName:[1,"lastName"],errorMessage:[1,"errorMessage"],successMessage:[1,"successMessage"]},outputs:{email:"emailChange",password:"passwordChange",name:"nameChange",lastName:"lastNameChange",errorMessage:"errorMessageChange",successMessage:"successMessageChange",loginSubmitEvent:"loginSubmitEvent",registerSubmitEvent:"registerSubmitEvent"},decls:78,vars:17,consts:[["appearance","outlined",1,"login-card"],["mat-stretch-tabs","false","mat-align-tabs","center","dynamicHeight","","animationDuration","200ms",3,"selectedIndexChange"],["label","Logga in"],[1,"tab-content"],[1,"tab-header"],[1,"tab-icon-wrap"],[1,"tab-icon"],[1,"tab-title"],[1,"tab-subtitle"],[1,"form-fields"],["appearance","outline",1,"full-width"],["matPrefix","",1,"field-prefix-icon"],["matInput","","type","email","autocomplete","email",3,"ngModelChange","keydown.enter","ngModel"],["matInput","","autocomplete","current-password",3,"ngModelChange","keydown.enter","ngModel","type"],["matIconButton","","matSuffix","",3,"click"],["role","alert",1,"form-message","form-message--error"],["mat-flat-button","",1,"submit-button",3,"click"],["iconPositionEnd",""],["label","Registrera"],[1,"name-row"],["appearance","outline"],["matInput","","autocomplete","given-name",3,"ngModelChange","keydown.enter","ngModel"],["matInput","","autocomplete","family-name",3,"ngModelChange","keydown.enter","ngModel"],["matInput","","autocomplete","new-password",3,"ngModelChange","keydown.enter","ngModel","type"],["role","status",1,"form-message","form-message--success"]],template:function(e,n){e&1&&(m(0,"mat-card",0)(1,"mat-tab-group",1),E("selectedIndexChange",function(){return n.clearError()}),m(2,"mat-tab",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"mat-icon",6),g(7,"login"),f()(),m(8,"h2",7),g(9,"V\xE4lkommen tillbaka"),f(),m(10,"p",8),g(11,"Logga in p\xE5 "),m(12,"strong"),g(13,"K\xEEndGuard"),f()()(),m(14,"div",9)(15,"mat-form-field",10)(16,"mat-label"),g(17,"E-postadress"),f(),m(18,"mat-icon",11),g(19,"mail_outline"),f(),m(20,"input",12),et("ngModelChange",function(o){return ke(n.email,o)||(n.email=o),o}),E("keydown.enter",function(){return n.submitLogin()}),f()(),m(21,"mat-form-field",10)(22,"mat-label"),g(23,"L\xF6senord"),f(),m(24,"mat-icon",11),g(25,"lock_outline"),f(),m(26,"input",13),et("ngModelChange",function(o){return ke(n.password,o)||(n.password=o),o}),E("keydown.enter",function(){return n.submitLogin()}),f(),m(27,"button",14),E("click",function(o){return n.clickEvent(o)}),m(28,"mat-icon"),g(29),f()()()(),W(30,OL,5,1,"div",15),m(31,"button",16),E("click",function(){return n.submitLogin()}),g(32," Logga in "),m(33,"mat-icon",17),g(34,"arrow_forward"),f()()()(),m(35,"mat-tab",18)(36,"div",3)(37,"div",4)(38,"div",5)(39,"mat-icon",6),g(40,"person_add"),f()(),m(41,"h2",7),g(42,"Skapa konto"),f(),m(43,"p",8),g(44,"Kom ig\xE5ng med "),m(45,"strong"),g(46,"K\xEEndGuard"),f()()(),m(47,"div",9)(48,"div",19)(49,"mat-form-field",20)(50,"mat-label"),g(51,"F\xF6rnamn"),f(),m(52,"input",21),et("ngModelChange",function(o){return ke(n.name,o)||(n.name=o),o}),E("keydown.enter",function(){return n.submitRegister()}),f()(),m(53,"mat-form-field",20)(54,"mat-label"),g(55,"Efternamn"),f(),m(56,"input",22),et("ngModelChange",function(o){return ke(n.lastName,o)||(n.lastName=o),o}),E("keydown.enter",function(){return n.submitRegister()}),f()()(),m(57,"mat-form-field",10)(58,"mat-label"),g(59,"E-postadress"),f(),m(60,"mat-icon",11),g(61,"mail_outline"),f(),m(62,"input",12),et("ngModelChange",function(o){return ke(n.email,o)||(n.email=o),o}),E("keydown.enter",function(){return n.submitRegister()}),f()(),m(63,"mat-form-field",10)(64,"mat-label"),g(65,"L\xF6senord"),f(),m(66,"mat-icon",11),g(67,"lock_outline"),f(),m(68,"input",23),et("ngModelChange",function(o){return ke(n.password,o)||(n.password=o),o}),E("keydown.enter",function(){return n.submitRegister()}),f(),m(69,"button",14),E("click",function(o){return n.clickEvent(o)}),m(70,"mat-icon"),g(71),f()()()(),W(72,NL,5,1,"div",15),W(73,FL,5,1,"div",24),m(74,"button",16),E("click",function(){return n.submitRegister()}),g(75," Registrera konto "),m(76,"mat-icon",17),g(77,"arrow_forward"),f()()()()()()),e&2&&(p(20),Je("ngModel",n.email),p(6),Je("ngModel",n.password),R("type",n.hide()?"password":"text"),p(),Z("aria-label","Visa/d\xF6lj l\xF6senord")("aria-pressed",n.hide()),p(2),se(n.hide()?"visibility_off":"visibility"),p(),G(n.errorMessage()!==""?30:-1),p(22),Je("ngModel",n.name),p(4),Je("ngModel",n.lastName),p(6),Je("ngModel",n.email),p(6),Je("ngModel",n.password),R("type",n.hide()?"password":"text"),p(),Z("aria-label","Visa/d\xF6lj l\xF6senord")("aria-pressed",n.hide()),p(2),se(n.hide()?"visibility_off":"visibility"),p(),G(n.errorMessage()!==""?72:-1),p(),G(n.successMessage()!==""?73:-1))},dependencies:[fs,Bn,Pi,Yo,Ht,jt,Ln,cf,df,Li,ln,dt,Bt,Hr,Vn,Yt,At,Rf,Ic],styles:["[_nghost-%COMP%]{width:100%;max-width:460px}.login-card[_ngcontent-%COMP%]{width:100%;border-radius:20px;box-shadow:var(--mat-sys-level2);overflow:hidden}.tab-content[_ngcontent-%COMP%]{padding:2rem 2rem 2.5rem;display:flex;flex-direction:column;gap:1.5rem}.tab-header[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;text-align:center;gap:.4rem;padding-top:.25rem}.tab-icon-wrap[_ngcontent-%COMP%]{width:56px;height:56px;border-radius:50%;background:var(--mat-sys-primary-container);display:flex;align-items:center;justify-content:center;margin-bottom:.5rem}.tab-icon[_ngcontent-%COMP%]{color:var(--mat-sys-on-primary-container);font-size:1.75rem;width:1.75rem;height:1.75rem}.tab-title[_ngcontent-%COMP%]{font:var(--mat-sys-headline-small);margin:0}.tab-subtitle[_ngcontent-%COMP%]{margin:0}.tab-subtitle[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:var(--mat-sys-primary);font-weight:700}.form-fields[_ngcontent-%COMP%]{display:flex;flex-direction:column}.full-width[_ngcontent-%COMP%]{width:100%}.name-row[_ngcontent-%COMP%]{display:flex;gap:.75rem}.field-prefix-icon[_ngcontent-%COMP%]{color:var(--mat-sys-on-surface-variant);font-size:1.1rem;width:1.1rem;height:1.1rem}.form-message[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.6rem;padding:.75rem 1rem;border-radius:10px;font:var(--mat-sys-body-small)}.form-message[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:1.15rem;width:1.15rem;height:1.15rem;flex-shrink:0}.form-message--error[_ngcontent-%COMP%]{background:var(--mat-sys-error-container);color:var(--mat-sys-on-error-container)}.form-message--success[_ngcontent-%COMP%]{background:var(--mat-sys-tertiary-container);color:var(--mat-sys-on-tertiary-container)}.submit-button[_ngcontent-%COMP%]{width:100%;height:48px;border-radius:12px}"]})};var Et={apiUrl:"https://salad-dramatize-customary.ngrok-free.dev",wsUrl:"wss://salad-dramatize-customary.ngrok-free.dev"};var ps=class t{baseUrl=`${Et.apiUrl}/api/auth`;http=c(kt);login(i,e){let n={email:i,password:e};return this.http.post(`${this.baseUrl}/login`,n).pipe(at(r=>{sessionStorage.setItem("token",r.token),sessionStorage.setItem("UserId",r.id.toString()),sessionStorage.setItem("role",r.role)}))}register(i,e,n){let r={name:i,email:e,password:n};return this.http.post(`${this.baseUrl}/register`,r)}getRole(){return sessionStorage.getItem("role")}static \u0275fac=function(e){return new(e||t)};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})};var Nf=class t{email=I("");password=I("");name=I("");lastName=I("");errorMessage=I("");successMessage=I("");router=c(an);authService=c(ps);onLoginSubmit(){this.authService.login(this.email(),this.password()).subscribe({error:i=>{this.errorMessage.set(i.error.error)},next:i=>{switch(i.role){case"ADMIN":this.router.navigate(["/admin"]);break;case"TEACHER":this.router.navigate(["/app"]);break;default:this.router.navigate(["/"])}}})}onRegisterSubmit(){let i=this.name()+" "+this.lastName(),e=this.email().trim(),n=this.password();this.authService.register(i,e,n).subscribe({error:r=>{this.successMessage.set(""),this.errorMessage.set(r.error.error)},next:r=>{this.errorMessage.set(""),this.successMessage.set(r.message)}})}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=D({type:t,selectors:[["login-page"]],decls:32,vars:6,consts:[[1,"login-page-wrapper"],[1,"login-page-left-panel"],[1,"blob","blob--1"],[1,"blob","blob--2"],[1,"content"],["width","auto","height","120px","alt","KindGuard logo","src","Kindguardlogo.png"],[1,"headline"],[1,"body"],[1,"badge-divider"],[1,"badges"],[1,"badge"],[1,"login-page-form"],["id","login-page-banner"],["id","banner-logo","alt","KindGuard logo","src","Kindguardlogo.png"],[1,"blob","blob--3"],[1,"blob","blob--4"],[1,"login-page-container",3,"emailChange","passwordChange","nameChange","lastNameChange","errorMessageChange","successMessageChange","loginSubmitEvent","registerSubmitEvent","email","password","name","lastName","errorMessage","successMessage"]],template:function(e,n){e&1&&(m(0,"div",0)(1,"div",1),k(2,"div",2)(3,"div",3),m(4,"div",4),k(5,"img",5),m(6,"h1",6),g(7,"Skapa tillsammans,"),k(8,"br"),g(9,"helt utan gr\xE4nser."),f(),m(10,"p",7),g(11,"Gl\xF6m l\xE5sta filer och versionskaos. Se \xE4ndringar direkt n\xE4r de sker, s\xE5 att fokus hamnar p\xE5 l\xE4randet i st\xE4llet f\xF6r tekniken."),f(),k(12,"div",8),m(13,"div",9)(14,"span",10)(15,"mat-icon"),g(16,"groups"),f(),g(17," Kollaborativ journalskrivning "),f(),m(18,"span",10)(19,"mat-icon"),g(20,"history"),f(),g(21," Optimistisk versionshantering "),f(),m(22,"span",10)(23,"mat-icon"),g(24,"psychology_alt"),f(),g(25," Flexibelt l\xE4rande "),f()()()(),m(26,"div",11)(27,"div",12),k(28,"img",13)(29,"div",14)(30,"div",15),f(),m(31,"login-container",16),et("emailChange",function(o){return ke(n.email,o)||(n.email=o),o})("passwordChange",function(o){return ke(n.password,o)||(n.password=o),o})("nameChange",function(o){return ke(n.name,o)||(n.name=o),o})("lastNameChange",function(o){return ke(n.lastName,o)||(n.lastName=o),o})("errorMessageChange",function(o){return ke(n.errorMessage,o)||(n.errorMessage=o),o})("successMessageChange",function(o){return ke(n.successMessage,o)||(n.successMessage=o),o}),E("loginSubmitEvent",function(){return n.onLoginSubmit()})("registerSubmitEvent",function(){return n.onRegisterSubmit()}),f()()()),e&2&&(p(31),Je("email",n.email)("password",n.password)("name",n.name)("lastName",n.lastName)("errorMessage",n.errorMessage)("successMessage",n.successMessage))},dependencies:[Of,Yt],styles:["[_nghost-%COMP%]{display:block;width:100%;height:100%}.login-page-wrapper[_ngcontent-%COMP%]{display:flex;width:100%;min-height:100vh}.login-page-left-panel[_ngcontent-%COMP%]{flex:1.1;background:var(--mat-sys-primary);display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden;padding:3rem}#login-page-banner[_ngcontent-%COMP%]{background:var(--mat-sys-primary);box-sizing:border-box;align-items:center;justify-content:center;position:fixed;padding:4.5rem;display:none;width:100%;top:0;left:0;height:7em;min-height:fit-content}#login-page-banner[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{filter:brightness(0) invert(1);opacity:.95;width:auto;min-height:5rem;max-height:8rem}@media(max-width:1050px){.login-page-left-panel[_ngcontent-%COMP%]{display:none}#login-page-banner[_ngcontent-%COMP%]{display:flex}}.blob[_ngcontent-%COMP%]{position:absolute;border-radius:50%;background:var(--mat-sys-on-primary);opacity:.06}.blob--1[_ngcontent-%COMP%]{width:480px;height:480px;bottom:-140px;right:-100px}.blob--2[_ngcontent-%COMP%]{width:260px;height:260px;top:-60px;left:-60px}.blob--3[_ngcontent-%COMP%]{width:260px;height:260px;right:0;bottom:0}.blob--4[_ngcontent-%COMP%]{width:130px;height:130px;left:0;top:0}.content[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start;gap:1.5rem}.content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{filter:brightness(0) invert(1);opacity:.95;margin-left:-11px}.headline[_ngcontent-%COMP%]{font:var(--mat-sys-display-small);color:var(--mat-sys-on-primary);margin:0;line-height:1.15}.body[_ngcontent-%COMP%]{font:var(--mat-sys-body-large);color:var(--mat-sys-on-primary);opacity:.82;margin:0;max-width:320px;line-height:1.6}.badge-divider[_ngcontent-%COMP%]{width:40px;height:3px;background:var(--mat-sys-on-primary);opacity:.35}.badges[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.6rem}.badge[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem;font:var(--mat-sys-label-large);color:var(--mat-sys-on-primary);opacity:.75}.badge[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:1.1rem;width:1.1rem;height:1.1rem}.login-page-form[_ngcontent-%COMP%]{flex:1;display:flex;justify-content:center;align-items:center;background:var(--mat-sys-surface);padding:2rem}"]})};var en=(()=>{class t{get vertical(){return this._vertical}set vertical(e){this._vertical=Rt(e)}_vertical=!1;get inset(){return this._inset}set inset(e){this._inset=Rt(e)}_inset=!1;static \u0275fac=function(n){return new(n||t)};static \u0275cmp=D({type:t,selectors:[["mat-divider"]],hostAttrs:["role","separator",1,"mat-divider"],hostVars:7,hostBindings:function(n,r){n&2&&(Z("aria-orientation",r.vertical?"vertical":"horizontal"),U("mat-divider-vertical",r.vertical)("mat-divider-horizontal",!r.vertical)("mat-divider-inset",r.inset))},inputs:{vertical:"vertical",inset:"inset"},decls:0,vars:0,template:function(n,r){},styles:[`.mat-divider {
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
`],encapsulation:2,changeDetection:0})}return t})(),Bi=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=H({type:t});static \u0275inj=j({imports:[_e]})}return t})();var Wr=class t{url=`${Et.apiUrl}/api/attendance`;attendanceSignals=new Map;attendanceChanges=new mn;http=c(kt);getAttendanceChanges=this.attendanceChanges.asObservable();getSignal(i,e){let n=`${i}_${e}`;return this.attendanceSignals.has(n)||this.attendanceSignals.set(n,I(null)),this.attendanceSignals.get(n)}setAttendance(i,e,n){let r={childId:i,date:e,status:n};return this.attendanceChanges.next(r),this.http.put(this.url,r)}static \u0275fac=function(e){return new(e||t)};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})};function ji(){let t=new Date;return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`}var Sc=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new x;constructor(i=!1,e,n=!0,r){this._multiple=i,this._emitChanges=n,this.compareWith=r,e&&e.length&&(i?e.forEach(o=>this._markSelected(o)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...i){this._verifyValueAssignment(i),i.forEach(n=>this._markSelected(n));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}deselect(...i){this._verifyValueAssignment(i),i.forEach(n=>this._unmarkSelected(n));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}setSelection(...i){this._verifyValueAssignment(i);let e=this.selected,n=new Set(i.map(o=>this._getConcreteValue(o)));i.forEach(o=>this._markSelected(o)),e.filter(o=>!n.has(this._getConcreteValue(o,n))).forEach(o=>this._unmarkSelected(o));let r=this._hasQueuedChanges();return this._emitChangeEvent(),r}toggle(i){return this.isSelected(i)?this.deselect(i):this.select(i)}clear(i=!0){this._unmarkAll();let e=this._hasQueuedChanges();return i&&this._emitChangeEvent(),e}isSelected(i){return this._selection.has(this._getConcreteValue(i))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(i){this._multiple&&this.selected&&this._selected.sort(i)}isMultipleSelection(){return this._multiple}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(i){i=this._getConcreteValue(i),this.isSelected(i)||(this._multiple||this._unmarkAll(),this.isSelected(i)||this._selection.add(i),this._emitChanges&&this._selectedToEmit.push(i))}_unmarkSelected(i){i=this._getConcreteValue(i),this.isSelected(i)&&(this._selection.delete(i),this._emitChanges&&this._deselectedToEmit.push(i))}_unmarkAll(){this.isEmpty()||this._selection.forEach(i=>this._unmarkSelected(i))}_verifyValueAssignment(i){i.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(i,e){if(this.compareWith){e=e??this._selection;for(let n of e)if(this.compareWith(i,n))return n;return i}else return i}};var jM=rf();function Zo(t){return new Ff(t.get(oi),t.get(Y))}var Ff=class{_viewportRuler;_previousHTMLStyles={top:"",left:""};_previousScrollPosition;_isEnabled=!1;_document;constructor(i,e){this._viewportRuler=i,this._document=e}attach(){}enable(){if(this._canBeEnabled()){let i=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=i.style.left||"",this._previousHTMLStyles.top=i.style.top||"",i.style.left=ct(-this._previousScrollPosition.left),i.style.top=ct(-this._previousScrollPosition.top),i.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){let i=this._document.documentElement,e=this._document.body,n=i.style,r=e.style,o=n.scrollBehavior||"",a=r.scrollBehavior||"";this._isEnabled=!1,n.left=this._previousHTMLStyles.left,n.top=this._previousHTMLStyles.top,i.classList.remove("cdk-global-scrollblock"),jM&&(n.scrollBehavior=r.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),jM&&(n.scrollBehavior=o,r.scrollBehavior=a)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;let e=this._document.documentElement,n=this._viewportRuler.getViewportSize();return e.scrollHeight>n.height||e.scrollWidth>n.width}};function qM(t,i){return new Pf(t.get($r),t.get(L),t.get(oi),i)}var Pf=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(i,e,n,r){this._scrollDispatcher=i,this._ngZone=e,this._viewportRuler=n,this._config=r}attach(i){this._overlayRef,this._overlayRef=i}enable(){if(this._scrollSubscription)return;let i=this._scrollDispatcher.scrolled(0).pipe(ve(e=>!e||!this._overlayRef.overlayElement.contains(e.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=i.subscribe(()=>{let e=this._viewportRuler.getViewportScrollPosition().top;Math.abs(e-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=i.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var Tc=class{enable(){}disable(){}attach(){}};function fb(t,i){return i.some(e=>{let n=t.bottom<e.top,r=t.top>e.bottom,o=t.right<e.left,a=t.left>e.right;return n||r||o||a})}function HM(t,i){return i.some(e=>{let n=t.top<e.top,r=t.bottom>e.bottom,o=t.left<e.left,a=t.right>e.right;return n||r||o||a})}function Gr(t,i){return new Lf(t.get($r),t.get(oi),t.get(L),i)}var Lf=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(i,e,n,r){this._scrollDispatcher=i,this._viewportRuler=e,this._ngZone=n,this._config=r}attach(i){this._overlayRef,this._overlayRef=i}enable(){if(!this._scrollSubscription){let i=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(i).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:n,height:r}=this._viewportRuler.getViewportSize();fb(e,[{width:n,height:r,bottom:r,right:n,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},YM=(()=>{class t{_injector=c($);constructor(){}noop=()=>new Tc;close=e=>qM(this._injector,e);block=()=>Zo(this._injector);reposition=e=>Gr(this._injector,e);static \u0275fac=function(n){return new(n||t)};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Hi=class{positionStrategy;scrollStrategy=new Tc;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(i){if(i){let e=Object.keys(i);for(let n of e)i[n]!==void 0&&(this[n]=i[n])}}};var Vf=class{connectionPair;scrollableViewProperties;constructor(i,e){this.connectionPair=i,this.scrollableViewProperties=e}};var QM=(()=>{class t{_attachedOverlays=[];_document=c(Y);_isAttached=!1;constructor(){}ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let n=this._attachedOverlays.indexOf(e);n>-1&&this._attachedOverlays.splice(n,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(e,n,r){return r.observers.length<1?!1:e.eventPredicate?e.eventPredicate(n):!0}static \u0275fac=function(n){return new(n||t)};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),ZM=(()=>{class t extends QM{_ngZone=c(L);_renderer=c(pt).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=e=>{let n=this._attachedOverlays;for(let r=n.length-1;r>-1;r--){let o=n[r];if(this.canReceiveEvent(o,e,o._keydownEvents)){this._ngZone.run(()=>o._keydownEvents.next(e));break}}};static \u0275fac=(()=>{let e;return function(r){return(e||(e=$e(t)))(r||t)}})();static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),KM=(()=>{class t extends QM{_platform=c(ce);_ngZone=c(L);_renderer=c(pt).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let n=this._document.body,r={capture:!0},o=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[o.listen(n,"pointerdown",this._pointerDownListener,r),o.listen(n,"click",this._clickListener,r),o.listen(n,"auxclick",this._clickListener,r),o.listen(n,"contextmenu",this._clickListener,r)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=n.style.cursor,n.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=e=>{this._pointerDownEventTarget=Vt(e)};_clickListener=e=>{let n=Vt(e),r=e.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:n;this._pointerDownEventTarget=null;let o=this._attachedOverlays.slice();for(let a=o.length-1;a>-1;a--){let s=o[a],l=s._outsidePointerEvents;if(!(!s.hasAttached()||!this.canReceiveEvent(s,e,l))){if(UM(s.overlayElement,n)||UM(s.overlayElement,r))break;this._ngZone?this._ngZone.run(()=>l.next(e)):l.next(e)}}};static \u0275fac=(()=>{let e;return function(r){return(e||(e=$e(t)))(r||t)}})();static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function UM(t,i){let e=typeof ShadowRoot<"u"&&ShadowRoot,n=i;for(;n;){if(n===t)return!0;n=e&&n instanceof ShadowRoot?n.host:n.parentNode}return!1}var XM=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=D({type:t,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(n,r){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
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
`],encapsulation:2,changeDetection:0})}return t})(),jf=(()=>{class t{_platform=c(ce);_containerElement;_document=c(Y);_styleLoader=c(Ye);constructor(){}ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e="cdk-overlay-container";if(this._platform.isBrowser||Hv()){let r=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let o=0;o<r.length;o++)r[o].remove()}let n=this._document.createElement("div");n.classList.add(e),Hv()?n.setAttribute("platform","test"):this._platform.isBrowser||n.setAttribute("platform","server"),this._document.body.appendChild(n),this._containerElement=n}_loadStyles(){this._styleLoader.load(XM)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),hb=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(i,e,n,r){this._renderer=e,this._ngZone=n,this.element=i.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=e.listen(this.element,"click",r)}detach(){this._ngZone.runOutsideAngular(()=>{let i=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(i,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),i.style.pointerEvents="none",i.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function pb(t){return t&&t.nodeType===1}var gs=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new x;_attachments=new x;_detachments=new x;_positionStrategy;_scrollStrategy;_locationChanges=ie.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new x;_outsidePointerEvents=new x;_afterNextRenderRef;constructor(i,e,n,r,o,a,s,l,d,u=!1,h,_){this._portalOutlet=i,this._host=e,this._pane=n,this._config=r,this._ngZone=o,this._keyboardDispatcher=a,this._document=s,this._location=l,this._outsideClickDispatcher=d,this._animationsDisabled=u,this._injector=h,this._renderer=_,r.scrollStrategy&&(this._scrollStrategy=r.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=r.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(i){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(i);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=We(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof e?.onDestroy=="function"&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let i=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),i}dispose(){if(this._disposed)return;let i=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,i&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(i){i!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=i,this.hasAttached()&&(i.attach(this),this.updatePosition()))}updateSize(i){this._config=C(C({},this._config),i),this._updateElementSize()}setDirection(i){this._config=X(C({},this._config),{direction:i}),this._updateElementDirection()}addPanelClass(i){this._pane&&this._toggleClasses(this._pane,i,!0)}removePanelClass(i){this._pane&&this._toggleClasses(this._pane,i,!1)}getDirection(){let i=this._config.direction;return i?typeof i=="string"?i:i.value:"ltr"}updateScrollStrategy(i){i!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=i,this.hasAttached()&&(i.attach(this),i.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let i=this._pane.style;i.width=ct(this._config.width),i.height=ct(this._config.height),i.minWidth=ct(this._config.minWidth),i.minHeight=ct(this._config.minHeight),i.maxWidth=ct(this._config.maxWidth),i.maxHeight=ct(this._config.maxHeight)}_togglePointerEvents(i){this._pane.style.pointerEvents=i?"":"none"}_attachHost(){if(!this._host.parentElement){let i=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;pb(i)?i.after(this._host):i?.type==="parent"?i.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let i="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new hb(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(i))}):this._backdropRef.element.classList.add(i)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(i,e,n){let r=Xa(e||[]).filter(o=>!!o);r.length&&(n?i.classList.add(...r):i.classList.remove(...r))}_detachContentWhenEmpty(){let i=!1;try{this._detachContentAfterRenderRef=We(()=>{i=!0,this._detachContent()},{injector:this._injector})}catch(e){if(i)throw e;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let i=this._scrollStrategy;i?.disable(),i?.detach?.()}},zM="cdk-overlay-connected-position-bounding-box",PL=/([A-Za-z%]+)$/;function vs(t,i){return new kc(i,t.get(oi),t.get(Y),t.get(ce),t.get(jf))}var kc=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new x;_resizeSubscription=ie.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(i,e,n,r,o){this._viewportRuler=e,this._document=n,this._platform=r,this._overlayContainer=o,this.setOrigin(i)}attach(i){this._overlayRef&&this._overlayRef,this._validatePositions(),i.hostElement.classList.add(zM),this._overlayRef=i,this._boundingBox=i.hostElement,this._pane=i.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let i=this._originRect,e=this._overlayRect,n=this._viewportRect,r=this._containerRect,o=[],a;for(let s of this._preferredPositions){let l=this._getOriginPoint(i,r,s),d=this._getOverlayPoint(l,e,s),u=this._getOverlayFit(d,e,n,s);if(u.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(s,l);return}if(this._canFitWithFlexibleDimensions(u,d,n)){o.push({position:s,origin:l,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(l,s)});continue}(!a||a.overlayFit.visibleArea<u.visibleArea)&&(a={overlayFit:u,overlayPoint:d,originPoint:l,position:s,overlayRect:e})}if(o.length){let s=null,l=-1;for(let d of o){let u=d.boundingBoxRect.width*d.boundingBoxRect.height*(d.position.weight||1);u>l&&(l=u,s=d)}this._isPushed=!1,this._applyPosition(s.position,s.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(a.position,a.originPoint);return}this._applyPosition(a.position,a.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&Qo(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(zM),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let i=this._lastPosition;i?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(i,this._getOriginPoint(this._originRect,this._containerRect,i))):this.apply()}withScrollableContainers(i){return this._scrollables=i,this}withPositions(i){return this._preferredPositions=i,i.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(i){return this._viewportMargin=i,this}withFlexibleDimensions(i=!0){return this._hasFlexibleDimensions=i,this}withGrowAfterOpen(i=!0){return this._growAfterOpen=i,this}withPush(i=!0){return this._canPush=i,this}withLockedPosition(i=!0){return this._positionLocked=i,this}setOrigin(i){return this._origin=i,this}withDefaultOffsetX(i){return this._offsetX=i,this}withDefaultOffsetY(i){return this._offsetY=i,this}withTransformOriginOn(i){return this._transformOriginSelector=i,this}withPopoverLocation(i){return this._popoverLocation=i,this}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof V?this._origin.nativeElement:pb(this._origin)?this._origin:null}_getOriginPoint(i,e,n){let r;if(n.originX=="center")r=i.left+i.width/2;else{let a=this._isRtl()?i.right:i.left,s=this._isRtl()?i.left:i.right;r=n.originX=="start"?a:s}e.left<0&&(r-=e.left);let o;return n.originY=="center"?o=i.top+i.height/2:o=n.originY=="top"?i.top:i.bottom,e.top<0&&(o-=e.top),{x:r,y:o}}_getOverlayPoint(i,e,n){let r;n.overlayX=="center"?r=-e.width/2:n.overlayX==="start"?r=this._isRtl()?-e.width:0:r=this._isRtl()?0:-e.width;let o;return n.overlayY=="center"?o=-e.height/2:o=n.overlayY=="top"?0:-e.height,{x:i.x+r,y:i.y+o}}_getOverlayFit(i,e,n,r){let o=WM(e),{x:a,y:s}=i,l=this._getOffset(r,"x"),d=this._getOffset(r,"y");l&&(a+=l),d&&(s+=d);let u=0-a,h=a+o.width-n.width,_=0-s,v=s+o.height-n.height,w=this._subtractOverflows(o.width,u,h),O=this._subtractOverflows(o.height,_,v),B=w*O;return{visibleArea:B,isCompletelyWithinViewport:o.width*o.height===B,fitsInViewportVertically:O===o.height,fitsInViewportHorizontally:w==o.width}}_canFitWithFlexibleDimensions(i,e,n){if(this._hasFlexibleDimensions){let r=n.bottom-e.y,o=n.right-e.x,a=$M(this._overlayRef.getConfig().minHeight),s=$M(this._overlayRef.getConfig().minWidth),l=i.fitsInViewportVertically||a!=null&&a<=r,d=i.fitsInViewportHorizontally||s!=null&&s<=o;return l&&d}return!1}_pushOverlayOnScreen(i,e,n){if(this._previousPushAmount&&this._positionLocked)return{x:i.x+this._previousPushAmount.x,y:i.y+this._previousPushAmount.y};let r=WM(e),o=this._viewportRect,a=Math.max(i.x+r.width-o.width,0),s=Math.max(i.y+r.height-o.height,0),l=Math.max(o.top-n.top-i.y,0),d=Math.max(o.left-n.left-i.x,0),u=0,h=0;return r.width<=o.width?u=d||-a:u=i.x<this._getViewportMarginStart()?o.left-n.left-i.x:0,r.height<=o.height?h=l||-s:h=i.y<this._getViewportMarginTop()?o.top-n.top-i.y:0,this._previousPushAmount={x:u,y:h},{x:i.x+u,y:i.y+h}}_applyPosition(i,e){if(this._setTransformOrigin(i),this._setOverlayElementStyles(e,i),this._setBoundingBoxStyles(e,i),i.panelClass&&this._addPanelClasses(i.panelClass),this._positionChanges.observers.length){let n=this._getScrollVisibility();if(i!==this._lastPosition||!this._lastScrollVisibility||!LL(this._lastScrollVisibility,n)){let r=new Vf(i,n);this._positionChanges.next(r)}this._lastScrollVisibility=n}this._lastPosition=i,this._isInitialRender=!1}_setTransformOrigin(i){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),n,r=i.overlayY;i.overlayX==="center"?n="center":this._isRtl()?n=i.overlayX==="start"?"right":"left":n=i.overlayX==="start"?"left":"right";for(let o=0;o<e.length;o++)e[o].style.transformOrigin=`${n} ${r}`}_calculateBoundingBoxRect(i,e){let n=this._viewportRect,r=this._isRtl(),o,a,s;if(e.overlayY==="top")a=i.y,o=n.height-a+this._getViewportMarginBottom();else if(e.overlayY==="bottom")s=n.height-i.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),o=n.height-s+this._getViewportMarginTop();else{let v=Math.min(n.bottom-i.y+n.top,i.y),w=this._lastBoundingBoxSize.height;o=v*2,a=i.y-v,o>w&&!this._isInitialRender&&!this._growAfterOpen&&(a=i.y-w/2)}let l=e.overlayX==="start"&&!r||e.overlayX==="end"&&r,d=e.overlayX==="end"&&!r||e.overlayX==="start"&&r,u,h,_;if(d)_=n.width-i.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),u=i.x-this._getViewportMarginStart();else if(l)h=i.x,u=n.right-i.x-this._getViewportMarginEnd();else{let v=Math.min(n.right-i.x+n.left,i.x),w=this._lastBoundingBoxSize.width;u=v*2,h=i.x-v,u>w&&!this._isInitialRender&&!this._growAfterOpen&&(h=i.x-w/2)}return{top:a,left:h,bottom:s,right:_,width:u,height:o}}_setBoundingBoxStyles(i,e){let n=this._calculateBoundingBoxRect(i,e);!this._isInitialRender&&!this._growAfterOpen&&(n.height=Math.min(n.height,this._lastBoundingBoxSize.height),n.width=Math.min(n.width,this._lastBoundingBoxSize.width));let r={};if(this._hasExactPosition())r.top=r.left="0",r.bottom=r.right="auto",r.maxHeight=r.maxWidth="",r.width=r.height="100%";else{let o=this._overlayRef.getConfig().maxHeight,a=this._overlayRef.getConfig().maxWidth;r.width=ct(n.width),r.height=ct(n.height),r.top=ct(n.top)||"auto",r.bottom=ct(n.bottom)||"auto",r.left=ct(n.left)||"auto",r.right=ct(n.right)||"auto",e.overlayX==="center"?r.alignItems="center":r.alignItems=e.overlayX==="end"?"flex-end":"flex-start",e.overlayY==="center"?r.justifyContent="center":r.justifyContent=e.overlayY==="bottom"?"flex-end":"flex-start",o&&(r.maxHeight=ct(o)),a&&(r.maxWidth=ct(a))}this._lastBoundingBoxSize=n,Qo(this._boundingBox.style,r)}_resetBoundingBoxStyles(){Qo(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){Qo(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(i,e){let n={},r=this._hasExactPosition(),o=this._hasFlexibleDimensions,a=this._overlayRef.getConfig();if(r){let u=this._viewportRuler.getViewportScrollPosition();Qo(n,this._getExactOverlayY(e,i,u)),Qo(n,this._getExactOverlayX(e,i,u))}else n.position="static";let s="",l=this._getOffset(e,"x"),d=this._getOffset(e,"y");l&&(s+=`translateX(${l}px) `),d&&(s+=`translateY(${d}px)`),n.transform=s.trim(),a.maxHeight&&(r?n.maxHeight=ct(a.maxHeight):o&&(n.maxHeight="")),a.maxWidth&&(r?n.maxWidth=ct(a.maxWidth):o&&(n.maxWidth="")),Qo(this._pane.style,n)}_getExactOverlayY(i,e,n){let r={top:"",bottom:""},o=this._getOverlayPoint(e,this._overlayRect,i);if(this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,n)),i.overlayY==="bottom"){let a=this._document.documentElement.clientHeight;r.bottom=`${a-(o.y+this._overlayRect.height)}px`}else r.top=ct(o.y);return r}_getExactOverlayX(i,e,n){let r={left:"",right:""},o=this._getOverlayPoint(e,this._overlayRect,i);this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,n));let a;if(this._isRtl()?a=i.overlayX==="end"?"left":"right":a=i.overlayX==="end"?"right":"left",a==="right"){let s=this._document.documentElement.clientWidth;r.right=`${s-(o.x+this._overlayRect.width)}px`}else r.left=ct(o.x);return r}_getScrollVisibility(){let i=this._getOriginRect(),e=this._pane.getBoundingClientRect(),n=this._scrollables.map(r=>r.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:HM(i,n),isOriginOutsideView:fb(i,n),isOverlayClipped:HM(e,n),isOverlayOutsideView:fb(e,n)}}_subtractOverflows(i,...e){return e.reduce((n,r)=>n-Math.max(r,0),i)}_getNarrowedViewportRect(){let i=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,n=this._viewportRuler.getViewportScrollPosition();return{top:n.top+this._getViewportMarginTop(),left:n.left+this._getViewportMarginStart(),right:n.left+i-this._getViewportMarginEnd(),bottom:n.top+e-this._getViewportMarginBottom(),width:i-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:e-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(i,e){return e==="x"?i.offsetX==null?this._offsetX:i.offsetX:i.offsetY==null?this._offsetY:i.offsetY}_validatePositions(){}_addPanelClasses(i){this._pane&&Xa(i).forEach(e=>{e!==""&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(i=>{this._pane.classList.remove(i)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let i=this._origin;if(i instanceof V)return i.nativeElement.getBoundingClientRect();if(i instanceof Element)return i.getBoundingClientRect();let e=i.width||0,n=i.height||0;return{top:i.y,bottom:i.y+n,left:i.x,right:i.x+e,height:n,width:e}}_getContainerRect(){let i=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",e=this._overlayContainer.getContainerElement();i&&(e.style.display="block");let n=e.getBoundingClientRect();return i&&(e.style.display=""),n}};function Qo(t,i){for(let e in i)i.hasOwnProperty(e)&&(t[e]=i[e]);return t}function $M(t){if(typeof t!="number"&&t!=null){let[i,e]=t.split(PL);return!e||e==="px"?parseFloat(i):null}return t||null}function WM(t){return{top:Math.floor(t.top),right:Math.floor(t.right),bottom:Math.floor(t.bottom),left:Math.floor(t.left),width:Math.floor(t.width),height:Math.floor(t.height)}}function LL(t,i){return t===i?!0:t.isOriginClipped===i.isOriginClipped&&t.isOriginOutsideView===i.isOriginOutsideView&&t.isOverlayClipped===i.isOverlayClipped&&t.isOverlayOutsideView===i.isOverlayOutsideView}var GM="cdk-global-overlay-wrapper";function hr(t){return new Bf}var Bf=class{_overlayRef;_cssPosition="static";_topOffset="";_bottomOffset="";_alignItems="";_xPosition="";_xOffset="";_width="";_height="";_isDisposed=!1;attach(i){let e=i.getConfig();this._overlayRef=i,this._width&&!e.width&&i.updateSize({width:this._width}),this._height&&!e.height&&i.updateSize({height:this._height}),i.hostElement.classList.add(GM),this._isDisposed=!1}top(i=""){return this._bottomOffset="",this._topOffset=i,this._alignItems="flex-start",this}left(i=""){return this._xOffset=i,this._xPosition="left",this}bottom(i=""){return this._topOffset="",this._bottomOffset=i,this._alignItems="flex-end",this}right(i=""){return this._xOffset=i,this._xPosition="right",this}start(i=""){return this._xOffset=i,this._xPosition="start",this}end(i=""){return this._xOffset=i,this._xPosition="end",this}width(i=""){return this._overlayRef?this._overlayRef.updateSize({width:i}):this._width=i,this}height(i=""){return this._overlayRef?this._overlayRef.updateSize({height:i}):this._height=i,this}centerHorizontally(i=""){return this.left(i),this._xPosition="center",this}centerVertically(i=""){return this.top(i),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let i=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,n=this._overlayRef.getConfig(),{width:r,height:o,maxWidth:a,maxHeight:s}=n,l=(r==="100%"||r==="100vw")&&(!a||a==="100%"||a==="100vw"),d=(o==="100%"||o==="100vh")&&(!s||s==="100%"||s==="100vh"),u=this._xPosition,h=this._xOffset,_=this._overlayRef.getConfig().direction==="rtl",v="",w="",O="";l?O="flex-start":u==="center"?(O="center",_?w=h:v=h):_?u==="left"||u==="end"?(O="flex-end",v=h):(u==="right"||u==="start")&&(O="flex-start",w=h):u==="left"||u==="start"?(O="flex-start",v=h):(u==="right"||u==="end")&&(O="flex-end",w=h),i.position=this._cssPosition,i.marginLeft=l?"0":v,i.marginTop=d?"0":this._topOffset,i.marginBottom=this._bottomOffset,i.marginRight=l?"0":w,e.justifyContent=O,e.alignItems=d?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let i=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,n=e.style;e.classList.remove(GM),n.justifyContent=n.alignItems=i.marginTop=i.marginBottom=i.marginLeft=i.marginRight=i.position="",this._overlayRef=null,this._isDisposed=!0}},JM=(()=>{class t{_injector=c($);constructor(){}global(){return hr()}flexibleConnectedTo(e){return vs(this._injector,e)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Ac=new b("OVERLAY_DEFAULT_CONFIG");function Ui(t,i){t.get(Ye).load(XM);let e=t.get(jf),n=t.get(Y),r=t.get(Qe),o=t.get(_n),a=t.get(tt),s=t.get(Se,null,{optional:!0})||t.get(pt).createRenderer(null,null),l=new Hi(i),d=t.get(Ac,null,{optional:!0})?.usePopover??!0;l.direction=l.direction||a.value,"showPopover"in n.body?l.usePopover=i?.usePopover??d:l.usePopover=!1;let u=n.createElement("div"),h=n.createElement("div");u.id=r.getId("cdk-overlay-"),u.classList.add("cdk-overlay-pane"),h.appendChild(u),l.usePopover&&(h.setAttribute("popover","manual"),h.classList.add("cdk-overlay-popover"));let _=l.usePopover?l.positionStrategy?.getPopoverInsertionPoint?.():null;return pb(_)?_.after(h):_?.type==="parent"?_.element.appendChild(h):e.getContainerElement().appendChild(h),new gs(new kf(u,o,t),h,u,l,t.get(L),t.get(ZM),n,t.get(Ti),t.get(KM),i?.disableAnimations??t.get(_l,null,{optional:!0})==="NoopAnimations",t.get(Oe),s)}var eI=(()=>{class t{scrollStrategies=c(YM);_positionBuilder=c(JM);_injector=c($);constructor(){}create(e){return Ui(this._injector,e)}position(){return this._positionBuilder}static \u0275fac=function(n){return new(n||t)};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),VL=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],BL=new b("cdk-connected-overlay-scroll-strategy",{providedIn:"root",factory:()=>{let t=c($);return()=>Gr(t)}}),_s=(()=>{class t{elementRef=c(V);constructor(){}static \u0275fac=function(n){return new(n||t)};static \u0275dir=A({type:t,selectors:[["","cdk-overlay-origin",""],["","overlay-origin",""],["","cdkOverlayOrigin",""]],exportAs:["cdkOverlayOrigin"]})}return t})(),tI=new b("cdk-connected-overlay-default-config"),Hf=(()=>{class t{_dir=c(tt,{optional:!0});_injector=c($);_overlayRef;_templatePortal;_backdropSubscription=ie.EMPTY;_attachSubscription=ie.EMPTY;_detachSubscription=ie.EMPTY;_positionSubscription=ie.EMPTY;_offsetX;_offsetY;_position;_scrollStrategyFactory=c(BL);_ngZone=c(L);origin;positions;positionStrategy;get offsetX(){return this._offsetX}set offsetX(e){this._offsetX=e,this._position&&this._updatePositionStrategy(this._position)}get offsetY(){return this._offsetY}set offsetY(e){this._offsetY=e,this._position&&this._updatePositionStrategy(this._position)}width;height;minWidth;minHeight;backdropClass;panelClass;viewportMargin=0;scrollStrategy;open=!1;disableClose=!1;transformOriginSelector;hasBackdrop=!1;lockPosition=!1;flexibleDimensions=!1;growAfterOpen=!1;push=!1;disposeOnNavigation=!1;usePopover;matchWidth=!1;set _config(e){typeof e!="string"&&this._assignConfig(e)}backdropClick=new M;positionChange=new M;attach=new M;detach=new M;overlayKeydown=new M;overlayOutsideClick=new M;constructor(){let e=c(ht),n=c(Ct),r=c(tI,{optional:!0}),o=c(Ac,{optional:!0});this.usePopover=o?.usePopover===!1?null:"global",this._templatePortal=new wn(e,n),this.scrollStrategy=this._scrollStrategyFactory(),r&&this._assignConfig(r)}get overlayRef(){return this._overlayRef}get dir(){return this._dir?this._dir.value:"ltr"}ngOnDestroy(){this._attachSubscription.unsubscribe(),this._detachSubscription.unsubscribe(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this._overlayRef?.dispose()}ngOnChanges(e){this._position&&(this._updatePositionStrategy(this._position),this._overlayRef?.updateSize({width:this._getWidth(),minWidth:this.minWidth,height:this.height,minHeight:this.minHeight}),e.origin&&this.open&&this._position.apply()),e.open&&(this.open?this.attachOverlay():this.detachOverlay())}_createOverlay(){(!this.positions||!this.positions.length)&&(this.positions=VL);let e=this._overlayRef=Ui(this._injector,this._buildConfig());this._attachSubscription=e.attachments().subscribe(()=>this.attach.emit()),this._detachSubscription=e.detachments().subscribe(()=>this.detach.emit()),e.keydownEvents().subscribe(n=>{this.overlayKeydown.next(n),n.keyCode===27&&!this.disableClose&&!_t(n)&&(n.preventDefault(),this.detachOverlay())}),this._overlayRef.outsidePointerEvents().subscribe(n=>{let r=this._getOriginElement(),o=Vt(n);(!r||r!==o&&!r.contains(o))&&this.overlayOutsideClick.next(n)})}_buildConfig(){let e=this._position=this.positionStrategy||this._createPositionStrategy(),n=new Hi({direction:this._dir||"ltr",positionStrategy:e,scrollStrategy:this.scrollStrategy,hasBackdrop:this.hasBackdrop,disposeOnNavigation:this.disposeOnNavigation,usePopover:!!this.usePopover});return(this.height||this.height===0)&&(n.height=this.height),(this.minWidth||this.minWidth===0)&&(n.minWidth=this.minWidth),(this.minHeight||this.minHeight===0)&&(n.minHeight=this.minHeight),this.backdropClass&&(n.backdropClass=this.backdropClass),this.panelClass&&(n.panelClass=this.panelClass),n}_updatePositionStrategy(e){let n=this.positions.map(r=>({originX:r.originX,originY:r.originY,overlayX:r.overlayX,overlayY:r.overlayY,offsetX:r.offsetX||this.offsetX,offsetY:r.offsetY||this.offsetY,panelClass:r.panelClass||void 0}));return e.setOrigin(this._getOrigin()).withPositions(n).withFlexibleDimensions(this.flexibleDimensions).withPush(this.push).withGrowAfterOpen(this.growAfterOpen).withViewportMargin(this.viewportMargin).withLockedPosition(this.lockPosition).withTransformOriginOn(this.transformOriginSelector).withPopoverLocation(this.usePopover===null?"global":this.usePopover)}_createPositionStrategy(){let e=vs(this._injector,this._getOrigin());return this._updatePositionStrategy(e),e}_getOrigin(){return this.origin instanceof _s?this.origin.elementRef:this.origin}_getOriginElement(){return this.origin instanceof _s?this.origin.elementRef.nativeElement:this.origin instanceof V?this.origin.nativeElement:typeof Element<"u"&&this.origin instanceof Element?this.origin:null}_getWidth(){return this.width?this.width:this.matchWidth?this._getOriginElement()?.getBoundingClientRect?.().width:void 0}attachOverlay(){this._overlayRef||this._createOverlay();let e=this._overlayRef;e.getConfig().hasBackdrop=this.hasBackdrop,e.updateSize({width:this._getWidth()}),e.hasAttached()||e.attach(this._templatePortal),this.hasBackdrop?this._backdropSubscription=e.backdropClick().subscribe(n=>this.backdropClick.emit(n)):this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.positionChange.observers.length>0&&(this._positionSubscription=this._position.positionChanges.pipe(Ph(()=>this.positionChange.observers.length>0)).subscribe(n=>{this._ngZone.run(()=>this.positionChange.emit(n)),this.positionChange.observers.length===0&&this._positionSubscription.unsubscribe()})),this.open=!0}detachOverlay(){this._overlayRef?.detach(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.open=!1}_assignConfig(e){this.origin=e.origin??this.origin,this.positions=e.positions??this.positions,this.positionStrategy=e.positionStrategy??this.positionStrategy,this.offsetX=e.offsetX??this.offsetX,this.offsetY=e.offsetY??this.offsetY,this.width=e.width??this.width,this.height=e.height??this.height,this.minWidth=e.minWidth??this.minWidth,this.minHeight=e.minHeight??this.minHeight,this.backdropClass=e.backdropClass??this.backdropClass,this.panelClass=e.panelClass??this.panelClass,this.viewportMargin=e.viewportMargin??this.viewportMargin,this.scrollStrategy=e.scrollStrategy??this.scrollStrategy,this.disableClose=e.disableClose??this.disableClose,this.transformOriginSelector=e.transformOriginSelector??this.transformOriginSelector,this.hasBackdrop=e.hasBackdrop??this.hasBackdrop,this.lockPosition=e.lockPosition??this.lockPosition,this.flexibleDimensions=e.flexibleDimensions??this.flexibleDimensions,this.growAfterOpen=e.growAfterOpen??this.growAfterOpen,this.push=e.push??this.push,this.disposeOnNavigation=e.disposeOnNavigation??this.disposeOnNavigation,this.usePopover=e.usePopover??this.usePopover,this.matchWidth=e.matchWidth??this.matchWidth}static \u0275fac=function(n){return new(n||t)};static \u0275dir=A({type:t,selectors:[["","cdk-connected-overlay",""],["","connected-overlay",""],["","cdkConnectedOverlay",""]],inputs:{origin:[0,"cdkConnectedOverlayOrigin","origin"],positions:[0,"cdkConnectedOverlayPositions","positions"],positionStrategy:[0,"cdkConnectedOverlayPositionStrategy","positionStrategy"],offsetX:[0,"cdkConnectedOverlayOffsetX","offsetX"],offsetY:[0,"cdkConnectedOverlayOffsetY","offsetY"],width:[0,"cdkConnectedOverlayWidth","width"],height:[0,"cdkConnectedOverlayHeight","height"],minWidth:[0,"cdkConnectedOverlayMinWidth","minWidth"],minHeight:[0,"cdkConnectedOverlayMinHeight","minHeight"],backdropClass:[0,"cdkConnectedOverlayBackdropClass","backdropClass"],panelClass:[0,"cdkConnectedOverlayPanelClass","panelClass"],viewportMargin:[0,"cdkConnectedOverlayViewportMargin","viewportMargin"],scrollStrategy:[0,"cdkConnectedOverlayScrollStrategy","scrollStrategy"],open:[0,"cdkConnectedOverlayOpen","open"],disableClose:[0,"cdkConnectedOverlayDisableClose","disableClose"],transformOriginSelector:[0,"cdkConnectedOverlayTransformOriginOn","transformOriginSelector"],hasBackdrop:[2,"cdkConnectedOverlayHasBackdrop","hasBackdrop",te],lockPosition:[2,"cdkConnectedOverlayLockPosition","lockPosition",te],flexibleDimensions:[2,"cdkConnectedOverlayFlexibleDimensions","flexibleDimensions",te],growAfterOpen:[2,"cdkConnectedOverlayGrowAfterOpen","growAfterOpen",te],push:[2,"cdkConnectedOverlayPush","push",te],disposeOnNavigation:[2,"cdkConnectedOverlayDisposeOnNavigation","disposeOnNavigation",te],usePopover:[0,"cdkConnectedOverlayUsePopover","usePopover"],matchWidth:[2,"cdkConnectedOverlayMatchWidth","matchWidth",te],_config:[0,"cdkConnectedOverlay","_config"]},outputs:{backdropClick:"backdropClick",positionChange:"positionChange",attach:"attach",detach:"detach",overlayKeydown:"overlayKeydown",overlayOutsideClick:"overlayOutsideClick"},exportAs:["cdkConnectedOverlay"],features:[Fe]})}return t})(),Hn=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=H({type:t});static \u0275inj=j({providers:[eI],imports:[_e,Vi,sb,sb]})}return t})();var nI=(()=>{class t{_animationsDisabled=Ve();state="unchecked";disabled=!1;appearance="full";constructor(){}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=D({type:t,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(n,r){n&2&&U("mat-pseudo-checkbox-indeterminate",r.state==="indeterminate")("mat-pseudo-checkbox-checked",r.state==="checked")("mat-pseudo-checkbox-disabled",r.disabled)("mat-pseudo-checkbox-minimal",r.appearance==="minimal")("mat-pseudo-checkbox-full",r.appearance==="full")("_mat-animation-noopable",r._animationsDisabled)},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},decls:0,vars:0,template:function(n,r){},styles:[`.mat-pseudo-checkbox {
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
`],encapsulation:2,changeDetection:0})}return t})();var jL=["text"],HL=[[["mat-icon"]],"*"],UL=["mat-icon","*"];function zL(t,i){if(t&1&&k(0,"mat-pseudo-checkbox",1),t&2){let e=S();R("disabled",e.disabled)("state",e.selected?"checked":"unchecked")}}function $L(t,i){if(t&1&&k(0,"mat-pseudo-checkbox",3),t&2){let e=S();R("disabled",e.disabled)}}function WL(t,i){if(t&1&&(m(0,"span",4),g(1),f()),t&2){let e=S();p(),be("(",e.group.label,")")}}var _b=new b("MAT_OPTION_PARENT_COMPONENT"),vb=new b("MatOptgroup");var gb=class{source;isUserInput;constructor(i,e=!1){this.source=i,this.isUserInput=e}},Un=(()=>{class t{_element=c(V);_changeDetectorRef=c(we);_parent=c(_b,{optional:!0});group=c(vb,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue="";get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=c(Qe).getId("mat-option-");get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=I(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new M;_text;_stateChanges=new x;constructor(){let e=c(Ye);e.load(Fi),e.load(Ni),this._signalDisableRipple=!!this._parent&&wi(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||"").trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,n){let r=this._getHostElement();typeof r.focus=="function"&&r.focus(n)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!_t(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new gb(this,e))}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=D({type:t,selectors:[["mat-option"]],viewQuery:function(n,r){if(n&1&&xe(jL,7),n&2){let o;F(o=P())&&(r._text=o.first)}},hostAttrs:["role","option",1,"mat-mdc-option","mdc-list-item"],hostVars:11,hostBindings:function(n,r){n&1&&E("click",function(){return r._selectViaInteraction()})("keydown",function(a){return r._handleKeydown(a)}),n&2&&(Wt("id",r.id),Z("aria-selected",r.selected)("aria-disabled",r.disabled.toString()),U("mdc-list-item--selected",r.selected)("mat-mdc-option-multiple",r.multiple)("mat-mdc-option-active",r.active)("mdc-list-item--disabled",r.disabled))},inputs:{value:"value",id:"id",disabled:[2,"disabled","disabled",te]},outputs:{onSelectionChange:"onSelectionChange"},exportAs:["matOption"],ngContentSelectors:UL,decls:8,vars:5,consts:[["text",""],["aria-hidden","true",1,"mat-mdc-option-pseudo-checkbox",3,"disabled","state"],[1,"mdc-list-item__primary-text"],["state","checked","aria-hidden","true","appearance","minimal",1,"mat-mdc-option-pseudo-checkbox",3,"disabled"],[1,"cdk-visually-hidden"],["aria-hidden","true","mat-ripple","",1,"mat-mdc-option-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"]],template:function(n,r){n&1&&(Me(HL),W(0,zL,1,2,"mat-pseudo-checkbox",1),ee(1),m(2,"span",2,0),ee(4,1),f(),W(5,$L,1,1,"mat-pseudo-checkbox",3),W(6,WL,2,1,"span",4),k(7,"div",5)),n&2&&(G(r.multiple?0:-1),p(5),G(!r.multiple&&r.selected&&!r.hideSingleSelectionIndicator?5:-1),p(),G(r.group&&r.group._inert?6:-1),p(),R("matRippleTrigger",r._getHostElement())("matRippleDisabled",r.disabled||r.disableRipple))},dependencies:[nI,dc],styles:[`.mat-mdc-option {
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
`],encapsulation:2,changeDetection:0})}return t})();function iI(t,i,e){if(e.length){let n=i.toArray(),r=e.toArray(),o=0;for(let a=0;a<t+1;a++)n[a].group&&n[a].group===r[o]&&o++;return o}return 0}function rI(t,i,e,n){return t<e?t:t+i>e+n?Math.max(0,t-n+i):e}var Uf=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=H({type:t});static \u0275inj=j({imports:[_e]})}return t})();var bs=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=H({type:t});static \u0275inj=j({imports:[ss,Uf,Un,_e]})}return t})();var GL=["trigger"],qL=["panel"],YL=[[["mat-select-trigger"]],"*"],QL=["mat-select-trigger","*"];function ZL(t,i){if(t&1&&(m(0,"span",4),g(1),f()),t&2){let e=S();p(),se(e.placeholder)}}function KL(t,i){t&1&&ee(0)}function XL(t,i){if(t&1&&(m(0,"span",11),g(1),f()),t&2){let e=S(2);p(),se(e.triggerValue)}}function JL(t,i){if(t&1&&(m(0,"span",5),W(1,KL,1,0)(2,XL,2,1,"span",11),f()),t&2){let e=S();p(),G(e.customTrigger?1:2)}}function eV(t,i){if(t&1){let e=Ue();m(0,"div",12,1),E("keydown",function(r){ue(e);let o=S();return me(o._handleKeydown(r))}),ee(2,1),f()}if(t&2){let e=S();Dt(e.panelClass),U("mat-select-panel-animations-enabled",!e._animationsDisabled)("mat-primary",(e._parentFormField==null?null:e._parentFormField.color)==="primary")("mat-accent",(e._parentFormField==null?null:e._parentFormField.color)==="accent")("mat-warn",(e._parentFormField==null?null:e._parentFormField.color)==="warn")("mat-undefined",!(e._parentFormField!=null&&e._parentFormField.color)),Z("id",e.id+"-panel")("aria-multiselectable",e.multiple)("aria-label",e.ariaLabel||null)("aria-labelledby",e._getPanelAriaLabelledby())}}var tV=new b("mat-select-scroll-strategy",{providedIn:"root",factory:()=>{let t=c($);return()=>Gr(t)}}),nV=new b("MAT_SELECT_CONFIG"),iV=new b("MatSelectTrigger"),bb=class{source;value;constructor(i,e){this.source=i,this.value=e}},qr=(()=>{class t{_viewportRuler=c(oi);_changeDetectorRef=c(we);_elementRef=c(V);_dir=c(tt,{optional:!0});_idGenerator=c(Qe);_renderer=c(Se);_parentFormField=c(mc,{optional:!0});ngControl=c(ri,{self:!0,optional:!0});_liveAnnouncer=c(ac);_defaultOptions=c(nV,{optional:!0});_animationsDisabled=Ve();_popoverLocation;_initialized=new x;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"}];_scrollOptionIntoView(e){let n=this.options.toArray()[e];if(n){let r=this.panel.nativeElement,o=iI(e,this.options,this.optionGroups),a=n._getHostElement();e===0&&o===1?r.scrollTop=0:r.scrollTop=rI(a.offsetTop,a.offsetHeight,r.scrollTop,r.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new bb(this,e)}_scrollStrategyFactory=c(tV);_panelOpen=!1;_compareWith=(e,n)=>e===n;_uid=this._idGenerator.getId("mat-select-");_triggerAriaLabelledBy=null;_previousControl;_destroy=new x;_errorStateTracker;stateChanges=new x;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId("mat-select-value-");_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||"";get focused(){return this._focused||this._panelOpen}_focused=!1;controlType="mat-select";trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=I(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(ii.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}_value;ariaLabel="";ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<"u"?this._defaultOptions.panelWidth:"auto";canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=Wn(()=>{let e=this.options;return e?e.changes.pipe(Ke(e),ft(()=>St(...e.map(n=>n.onSelectionChange)))):this._initialized.pipe(ft(()=>this.optionSelectionChanges))});openedChange=new M;_openedStream=this.openedChange.pipe(ve(e=>e),oe(()=>{}));_closedStream=this.openedChange.pipe(ve(e=>!e),oe(()=>{}));selectionChange=new M;valueChange=new M;constructor(){let e=c(Tf),n=c(wc,{optional:!0}),r=c(mr,{optional:!0}),o=c(new Ii("tabindex"),{optional:!0}),a=c(Ac,{optional:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new hs(e,this.ngControl,r,n,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=o==null?0:parseInt(o)||0,this._popoverLocation=a?.usePopover===!1?null:"inline",this.id=this.id}ngOnInit(){this._selectionModel=new Sc(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(ye(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(ye(this._destroy)).subscribe(e=>{e.added.forEach(n=>n.select()),e.removed.forEach(n=>n.deselect())}),this.options.changes.pipe(Ke(null),ye(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),n=this.ngControl;if(e!==this._triggerAriaLabelledBy){let r=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?r.setAttribute("aria-labelledby",e):r.removeAttribute("aria-labelledby")}n&&(this._previousControl!==n.control&&(this._previousControl!==void 0&&n.disabled!==null&&n.disabled!==this.disabled&&(this.disabled=n.disabled),this._previousControl=n.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete(),this._clearFromModal()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._applyModalPanelOwnership(),this._panelOpen=!0,this._overlayDir.positionChange.pipe(nt(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}_trackedModal=null;_applyModalPanelOwnership(){let e=this._elementRef.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');if(!e)return;let n=`${this.id}-panel`;this._trackedModal&&tf(this._trackedModal,"aria-owns",n),jv(e,"aria-owns",n),this._trackedModal=e}_clearFromModal(){if(!this._trackedModal)return;let e=`${this.id}-panel`;tf(this._trackedModal,"aria-owns",e),this._trackedModal=null}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?"rtl":"ltr"),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{n(),clearTimeout(r),this._cleanupDetach=void 0};let e=this.panel.nativeElement,n=this._renderer.listen(e,"animationend",o=>{o.animationName==="_mat-select-exit"&&(this._cleanupDetach?.(),this._detachOverlay())}),r=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);e.classList.add("mat-select-panel-exit")}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return"";if(this._multiple){let e=this._selectionModel.selected.map(n=>n.viewValue);return this._isRtl()&&e.reverse(),e.join(", ")}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value==="rtl":!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let n=e.keyCode,r=n===40||n===38||n===37||n===39,o=n===13||n===32,a=this._keyManager;if(!a.isTyping()&&o&&!_t(e)||(this.multiple||e.altKey)&&r)e.preventDefault(),this.open();else if(!this.multiple){let s=this.selected;a.onKeydown(e);let l=this.selected;l&&s!==l&&this._liveAnnouncer.announce(l.viewValue,1e4)}}_handleOpenKeydown(e){let n=this._keyManager,r=e.keyCode,o=r===40||r===38,a=n.isTyping();if(o&&e.altKey)e.preventDefault(),this.close();else if(!a&&(r===13||r===32)&&n.activeItem&&!_t(e))e.preventDefault(),n.activeItem._selectViaInteraction();else if(!a&&this._multiple&&r===65&&e.ctrlKey){e.preventDefault();let s=this.options.some(l=>!l.disabled&&!l.selected);this.options.forEach(l=>{l.disabled||(s?l.select():l.deselect())})}else{let s=n.activeItemIndex;n.onKeydown(e),this._multiple&&o&&e.shiftKey&&n.activeItem&&n.activeItemIndex!==s&&n.activeItem._selectViaInteraction()}}_handleOverlayKeydown(e){e.keyCode===27&&!_t(e)&&(e.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(n=>n.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)Array.isArray(e),e.forEach(n=>this._selectOptionByValue(n)),this._sortValues();else{let n=this._selectOptionByValue(e);n?this._keyManager.updateActiveItem(n):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let n=this.options.find(r=>{if(this._selectionModel.isSelected(r))return!1;try{return(r.value!=null||this.canSelectNullableOptions)&&this._compareWith(r.value,e)}catch{return!1}});return n&&this._selectionModel.select(n),n}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_skipPredicate=e=>this.panelOpen?!1:e.disabled;_getOverlayWidth(e){return this.panelWidth==="auto"?(e instanceof _s?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?"":this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new sc(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?"rtl":"ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=St(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(ye(e)).subscribe(n=>{this._onSelect(n.source,n.isUserInput),n.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),St(...this.options.map(n=>n._stateChanges)).pipe(ye(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,n){let r=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(r!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),n&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),n&&this.focus())),r!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((n,r)=>this.sortComparator?this.sortComparator(n,r,e):e.indexOf(n)-e.indexOf(r)),this.stateChanges.next()}}_propagateChanges(e){let n;this.multiple?n=this.selected.map(r=>r.value):n=this.selected?this.selected.value:e,this._value=n,this.valueChange.emit(n),this._onChange(n),this.selectionChange.emit(this._getChangeEvent(n)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let n=0;n<this.options.length;n++)if(!this.options.get(n).disabled){e=n;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,n=e?e+" ":"";return this.ariaLabelledby?n+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||"";return this.ariaLabelledby&&(e+=" "+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let n=this._elementRef.nativeElement;e.length?n.setAttribute("aria-describedby",e.join(" ")):n.removeAttribute("aria-describedby")}onContainerClick(e){let n=Vt(e);n&&(n.tagName==="MAT-OPTION"||n.classList.contains("cdk-overlay-backdrop")||n.closest(".mat-mdc-select-panel"))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=D({type:t,selectors:[["mat-select"]],contentQueries:function(n,r,o){if(n&1&&wt(o,iV,5)(o,Un,5)(o,vb,5),n&2){let a;F(a=P())&&(r.customTrigger=a.first),F(a=P())&&(r.options=a),F(a=P())&&(r.optionGroups=a)}},viewQuery:function(n,r){if(n&1&&xe(GL,5)(qL,5)(Hf,5),n&2){let o;F(o=P())&&(r.trigger=o.first),F(o=P())&&(r.panel=o.first),F(o=P())&&(r._overlayDir=o.first)}},hostAttrs:["role","combobox","aria-haspopup","listbox",1,"mat-mdc-select"],hostVars:21,hostBindings:function(n,r){n&1&&E("keydown",function(a){return r._handleKeydown(a)})("focus",function(){return r._onFocus()})("blur",function(){return r._onBlur()}),n&2&&(Z("id",r.id)("tabindex",r.disabled?-1:r.tabIndex)("aria-controls",r.panelOpen?r.id+"-panel":null)("aria-expanded",r.panelOpen)("aria-label",r.ariaLabel||null)("aria-required",r.required.toString())("aria-disabled",r.disabled.toString())("aria-invalid",r.errorState)("aria-activedescendant",r._getAriaActiveDescendant()),U("mat-mdc-select-disabled",r.disabled)("mat-mdc-select-invalid",r.errorState)("mat-mdc-select-required",r.required)("mat-mdc-select-empty",r.empty)("mat-mdc-select-multiple",r.multiple)("mat-select-open",r.panelOpen))},inputs:{userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],panelClass:"panelClass",disabled:[2,"disabled","disabled",te],disableRipple:[2,"disableRipple","disableRipple",te],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:Si(e)],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",te],placeholder:"placeholder",required:[2,"required","required",te],multiple:[2,"multiple","multiple",te],disableOptionCentering:[2,"disableOptionCentering","disableOptionCentering",te],compareWith:"compareWith",value:"value",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],errorStateMatcher:"errorStateMatcher",typeaheadDebounceInterval:[2,"typeaheadDebounceInterval","typeaheadDebounceInterval",Si],sortComparator:"sortComparator",id:"id",panelWidth:"panelWidth",canSelectNullableOptions:[2,"canSelectNullableOptions","canSelectNullableOptions",te]},outputs:{openedChange:"openedChange",_openedStream:"opened",_closedStream:"closed",selectionChange:"selectionChange",valueChange:"valueChange"},exportAs:["matSelect"],features:[Pe([{provide:uc,useExisting:t},{provide:_b,useExisting:t}]),Fe],ngContentSelectors:QL,decls:11,vars:10,consts:[["fallbackOverlayOrigin","cdkOverlayOrigin","trigger",""],["panel",""],["cdk-overlay-origin","",1,"mat-mdc-select-trigger",3,"click"],[1,"mat-mdc-select-value"],[1,"mat-mdc-select-placeholder","mat-mdc-select-min-line"],[1,"mat-mdc-select-value-text"],[1,"mat-mdc-select-arrow-wrapper"],[1,"mat-mdc-select-arrow"],["viewBox","0 0 24 24","width","24px","height","24px","focusable","false","aria-hidden","true"],["d","M7 10l5 5 5-5z"],["cdk-connected-overlay","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"detach","backdropClick","overlayKeydown","cdkConnectedOverlayDisableClose","cdkConnectedOverlayPanelClass","cdkConnectedOverlayScrollStrategy","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayWidth","cdkConnectedOverlayFlexibleDimensions","cdkConnectedOverlayUsePopover"],[1,"mat-mdc-select-min-line"],["role","listbox","tabindex","-1",1,"mat-mdc-select-panel","mdc-menu-surface","mdc-menu-surface--open",3,"keydown"]],template:function(n,r){if(n&1&&(Me(YL),m(0,"div",2,0),E("click",function(){return r.open()}),m(3,"div",3),W(4,ZL,2,1,"span",4)(5,JL,3,1,"span",5),f(),m(6,"div",6)(7,"div",7),_i(),m(8,"svg",8),k(9,"path",9),f()()()(),lt(10,eV,3,16,"ng-template",10),E("detach",function(){return r.close()})("backdropClick",function(){return r.close()})("overlayKeydown",function(a){return r._handleOverlayKeydown(a)})),n&2){let o=on(1);p(3),Z("id",r._valueId),p(),G(r.empty?4:5),p(6),R("cdkConnectedOverlayDisableClose",!0)("cdkConnectedOverlayPanelClass",r._overlayPanelClass)("cdkConnectedOverlayScrollStrategy",r._scrollStrategy)("cdkConnectedOverlayOrigin",r._preferredOverlayOrigin||o)("cdkConnectedOverlayPositions",r._positions)("cdkConnectedOverlayWidth",r._overlayWidth)("cdkConnectedOverlayFlexibleDimensions",!0)("cdkConnectedOverlayUsePopover",r._popoverLocation)}},dependencies:[_s,Hf],styles:[`@keyframes _mat-select-enter {
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
`],encapsulation:2,changeDetection:0})}return t})();var Yr=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=H({type:t});static \u0275inj=j({imports:[Hn,bs,_e,jn,Ht,bs]})}return t})();function rV(t,i){}var Qr=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;positionStrategy;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;scrollStrategy;closeOnNavigation=!0;closeOnDestroy=!0;closeOnOverlayDetachments=!0;disableAnimations=!1;providers;container;templateContext};var Cb=(()=>{class t extends zr{_elementRef=c(V);_focusTrapFactory=c(qm);_config;_interactivityChecker=c(Fv);_ngZone=c(L);_focusMonitor=c(cr);_renderer=c(Se);_changeDetectorRef=c(we);_injector=c($);_platform=c(ce);_document=c(Y);_portalOutlet;_focusTrapped=new x;_focusTrap=null;_elementFocusedBeforeDialogWasOpened=null;_closeInteractionType=null;_ariaLabelledByQueue=[];_isDestroyed=!1;constructor(){super(),this._config=c(Qr,{optional:!0})||new Qr,this._config.ariaLabelledBy&&this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)}_addAriaLabelledBy(e){this._ariaLabelledByQueue.push(e),this._changeDetectorRef.markForCheck()}_removeAriaLabelledBy(e){let n=this._ariaLabelledByQueue.indexOf(e);n>-1&&(this._ariaLabelledByQueue.splice(n,1),this._changeDetectorRef.markForCheck())}_contentAttached(){this._initializeFocusTrap(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._focusTrapped.complete(),this._isDestroyed=!0,this._restoreFocus()}attachComponentPortal(e){this._portalOutlet.hasAttached();let n=this._portalOutlet.attachComponentPortal(e);return this._contentAttached(),n}attachTemplatePortal(e){this._portalOutlet.hasAttached();let n=this._portalOutlet.attachTemplatePortal(e);return this._contentAttached(),n}attachDomPortal=e=>{this._portalOutlet.hasAttached();let n=this._portalOutlet.attachDomPortal(e);return this._contentAttached(),n};_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(e,n){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let r=()=>{o(),a(),e.removeAttribute("tabindex")},o=this._renderer.listen(e,"blur",r),a=this._renderer.listen(e,"mousedown",r)})),e.focus(n)}_focusByCssSelector(e,n){let r=this._elementRef.nativeElement.querySelector(e);r&&this._forceFocus(r,n)}_trapFocus(e){this._isDestroyed||We(()=>{let n=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case"dialog":this._containsFocus()||n.focus(e);break;case!0:case"first-tabbable":this._focusTrap?.focusInitialElement(e)||this._focusDialogContainer(e);break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]',e);break;default:this._focusByCssSelector(this._config.autoFocus,e);break}this._focusTrapped.next()},{injector:this._injector})}_restoreFocus(){let e=this._config.restoreFocus,n=null;if(typeof e=="string"?n=this._document.querySelector(e):typeof e=="boolean"?n=e?this._elementFocusedBeforeDialogWasOpened:null:e&&(n=e),this._config.restoreFocus&&n&&typeof n.focus=="function"){let r=Oi(),o=this._elementRef.nativeElement;(!r||r===this._document.body||r===o||o.contains(r))&&(this._focusMonitor?(this._focusMonitor.focusVia(n,this._closeInteractionType),this._closeInteractionType=null):n.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(e){this._elementRef.nativeElement.focus?.(e)}_containsFocus(){let e=this._elementRef.nativeElement,n=Oi();return e===n||e.contains(n)}_initializeFocusTrap(){this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=Oi()))}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=D({type:t,selectors:[["cdk-dialog-container"]],viewQuery:function(n,r){if(n&1&&xe(cn,7),n&2){let o;F(o=P())&&(r._portalOutlet=o.first)}},hostAttrs:["tabindex","-1",1,"cdk-dialog-container"],hostVars:6,hostBindings:function(n,r){n&2&&Z("id",r._config.id||null)("role",r._config.role)("aria-modal",r._config.ariaModal)("aria-labelledby",r._config.ariaLabel?null:r._ariaLabelledByQueue[0])("aria-label",r._config.ariaLabel)("aria-describedby",r._config.ariaDescribedBy||null)},features:[ge],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(n,r){n&1&&lt(0,rV,0,0,"ng-template",0)},dependencies:[cn],styles:[`.cdk-dialog-container {
  display: block;
  width: 100%;
  height: 100%;
  min-height: inherit;
  max-height: inherit;
}
`],encapsulation:2})}return t})(),Rc=class{overlayRef;config;componentInstance=null;componentRef=null;containerInstance;disableClose;closed=new x;backdropClick;keydownEvents;outsidePointerEvents;id;_detachSubscription;constructor(i,e){this.overlayRef=i,this.config=e,this.disableClose=e.disableClose,this.backdropClick=i.backdropClick(),this.keydownEvents=i.keydownEvents(),this.outsidePointerEvents=i.outsidePointerEvents(),this.id=e.id,this.keydownEvents.subscribe(n=>{n.keyCode===27&&!this.disableClose&&!_t(n)&&(n.preventDefault(),this.close(void 0,{focusOrigin:"keyboard"}))}),this.backdropClick.subscribe(()=>{!this.disableClose&&this._canClose()?this.close(void 0,{focusOrigin:"mouse"}):this.containerInstance._recaptureFocus?.()}),this._detachSubscription=i.detachments().subscribe(()=>{e.closeOnOverlayDetachments!==!1&&this.close()})}close(i,e){if(this._canClose(i)){let n=this.closed;this.containerInstance._closeInteractionType=e?.focusOrigin||"program",this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),n.next(i),n.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(i="",e=""){return this.overlayRef.updateSize({width:i,height:e}),this}addPanelClass(i){return this.overlayRef.addPanelClass(i),this}removePanelClass(i){return this.overlayRef.removePanelClass(i),this}_canClose(i){let e=this.config;return!!this.containerInstance&&(!e.closePredicate||e.closePredicate(i,e,this.componentInstance))}},oV=new b("DialogScrollStrategy",{providedIn:"root",factory:()=>{let t=c($);return()=>Zo(t)}}),aV=new b("DialogData"),sV=new b("DefaultDialogConfig");function lV(t){let i=I(t),e=new M;return{valueSignal:i,get value(){return i()},change:e,ngOnDestroy(){e.complete()}}}var wb=(()=>{class t{_injector=c($);_defaultOptions=c(sV,{optional:!0});_parentDialog=c(t,{optional:!0,skipSelf:!0});_overlayContainer=c(jf);_idGenerator=c(Qe);_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new x;_afterOpenedAtThisLevel=new x;_ariaHiddenElements=new Map;_scrollStrategy=c(oV);get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}afterAllClosed=Wn(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(Ke(void 0)));constructor(){}open(e,n){let r=this._defaultOptions||new Qr;n=C(C({},r),n),n.id=n.id||this._idGenerator.getId("cdk-dialog-"),n.id&&this.getDialogById(n.id);let o=this._getOverlayConfig(n),a=Ui(this._injector,o),s=new Rc(a,n),l=this._attachContainer(a,s,n);if(s.containerInstance=l,!this.openDialogs.length){let d=this._overlayContainer.getContainerElement();l._focusTrapped?l._focusTrapped.pipe(nt(1)).subscribe(()=>{this._hideNonDialogContentFromAssistiveTechnology(d)}):this._hideNonDialogContentFromAssistiveTechnology(d)}return this._attachDialogContent(e,s,l,n),this.openDialogs.push(s),s.closed.subscribe(()=>this._removeOpenDialog(s,!0)),this.afterOpened.next(s),s}closeAll(){yb(this.openDialogs,e=>e.close())}getDialogById(e){return this.openDialogs.find(n=>n.id===e)}ngOnDestroy(){yb(this._openDialogsAtThisLevel,e=>{e.config.closeOnDestroy===!1&&this._removeOpenDialog(e,!1)}),yb(this._openDialogsAtThisLevel,e=>e.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(e){let n=new Hi({positionStrategy:e.positionStrategy||hr().centerHorizontally().centerVertically(),scrollStrategy:e.scrollStrategy||this._scrollStrategy(),panelClass:e.panelClass,hasBackdrop:e.hasBackdrop,direction:e.direction,minWidth:e.minWidth,minHeight:e.minHeight,maxWidth:e.maxWidth,maxHeight:e.maxHeight,width:e.width,height:e.height,disposeOnNavigation:e.closeOnNavigation,disableAnimations:e.disableAnimations});return e.backdropClass&&(n.backdropClass=e.backdropClass),n}_attachContainer(e,n,r){let o=r.injector||r.viewContainerRef?.injector,a=[{provide:Qr,useValue:r},{provide:Rc,useValue:n},{provide:gs,useValue:e}],s;r.container?typeof r.container=="function"?s=r.container:(s=r.container.type,a.push(...r.container.providers(r))):s=Cb;let l=new Cn(s,r.viewContainerRef,$.create({parent:o||this._injector,providers:a}));return e.attach(l).instance}_attachDialogContent(e,n,r,o){if(e instanceof ht){let a=this._createInjector(o,n,r,void 0),s={$implicit:o.data,dialogRef:n};o.templateContext&&(s=C(C({},s),typeof o.templateContext=="function"?o.templateContext():o.templateContext)),r.attachTemplatePortal(new wn(e,null,s,a))}else{let a=this._createInjector(o,n,r,this._injector),s=r.attachComponentPortal(new Cn(e,o.viewContainerRef,a));n.componentRef=s,n.componentInstance=s.instance}}_createInjector(e,n,r,o){let a=e.injector||e.viewContainerRef?.injector,s=[{provide:aV,useValue:e.data},{provide:Rc,useValue:n}];return e.providers&&(typeof e.providers=="function"?s.push(...e.providers(n,e,r)):s.push(...e.providers)),e.direction&&(!a||!a.get(tt,null,{optional:!0}))&&s.push({provide:tt,useValue:lV(e.direction)}),$.create({parent:a||o,providers:s})}_removeOpenDialog(e,n){let r=this.openDialogs.indexOf(e);r>-1&&(this.openDialogs.splice(r,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((o,a)=>{o?a.setAttribute("aria-hidden",o):a.removeAttribute("aria-hidden")}),this._ariaHiddenElements.clear(),n&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(e){if(e.parentElement){let n=e.parentElement.children;for(let r=n.length-1;r>-1;r--){let o=n[r];o!==e&&o.nodeName!=="SCRIPT"&&o.nodeName!=="STYLE"&&!o.hasAttribute("aria-live")&&!o.hasAttribute("popover")&&(this._ariaHiddenElements.set(o,o.getAttribute("aria-hidden")),o.setAttribute("aria-hidden","true"))}}}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}static \u0275fac=function(n){return new(n||t)};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function yb(t,i){let e=t.length;for(;e--;)i(t[e])}var oI=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=H({type:t});static \u0275inj=j({providers:[wb],imports:[Hn,Vi,Uo,Vi]})}return t})();function cV(t,i){}var Wf=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;position;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;delayFocusTrap=!0;scrollStrategy;closeOnNavigation=!0;enterAnimationDuration;exitAnimationDuration},Db="mdc-dialog--open",aI="mdc-dialog--opening",sI="mdc-dialog--closing",dV=150,uV=75,mV=(()=>{class t extends Cb{_animationStateChanged=new M;_animationsEnabled=!Ve();_actionSectionCount=0;_hostElement=this._elementRef.nativeElement;_enterAnimationDuration=this._animationsEnabled?cI(this._config.enterAnimationDuration)??dV:0;_exitAnimationDuration=this._animationsEnabled?cI(this._config.exitAnimationDuration)??uV:0;_animationTimer=null;_contentAttached(){super._contentAttached(),this._startOpenAnimation()}_startOpenAnimation(){this._animationStateChanged.emit({state:"opening",totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(lI,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(aI,Db)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(Db),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:"closing",totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(Db),this._animationsEnabled?(this._hostElement.style.setProperty(lI,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(sI)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_updateActionSectionCount(e){this._actionSectionCount+=e,this._changeDetectorRef.markForCheck()}_finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration)};_finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:"closed",totalTime:this._exitAnimationDuration})};_clearAnimationClasses(){this._hostElement.classList.remove(aI,sI)}_waitForAnimationToComplete(e,n){this._animationTimer!==null&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(n,e)}_requestAnimationFrame(e){this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame=="function"?requestAnimationFrame(e):e()})}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(e){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:"opened",totalTime:e})}ngOnDestroy(){super.ngOnDestroy(),this._animationTimer!==null&&clearTimeout(this._animationTimer)}attachComponentPortal(e){let n=super.attachComponentPortal(e);return n.location.nativeElement.classList.add("mat-mdc-dialog-component-host"),n}static \u0275fac=(()=>{let e;return function(r){return(e||(e=$e(t)))(r||t)}})();static \u0275cmp=D({type:t,selectors:[["mat-dialog-container"]],hostAttrs:["tabindex","-1",1,"mat-mdc-dialog-container","mdc-dialog"],hostVars:10,hostBindings:function(n,r){n&2&&(Wt("id",r._config.id),Z("aria-modal",r._config.ariaModal)("role",r._config.role)("aria-labelledby",r._config.ariaLabel?null:r._ariaLabelledByQueue[0])("aria-label",r._config.ariaLabel)("aria-describedby",r._config.ariaDescribedBy||null),U("_mat-animation-noopable",!r._animationsEnabled)("mat-mdc-dialog-container-with-actions",r._actionSectionCount>0))},features:[ge],decls:3,vars:0,consts:[[1,"mat-mdc-dialog-inner-container","mdc-dialog__container"],[1,"mat-mdc-dialog-surface","mdc-dialog__surface"],["cdkPortalOutlet",""]],template:function(n,r){n&1&&(m(0,"div",0)(1,"div",1),lt(2,cV,0,0,"ng-template",2),f()())},dependencies:[cn],styles:[`.mat-mdc-dialog-container {
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
`],encapsulation:2})}return t})(),lI="--mat-dialog-transition-duration";function cI(t){return t==null?null:typeof t=="number"?t:t.endsWith("ms")?yn(t.substring(0,t.length-2)):t.endsWith("s")?yn(t.substring(0,t.length-1))*1e3:t==="0"?0:null}var $f=(function(t){return t[t.OPEN=0]="OPEN",t[t.CLOSING=1]="CLOSING",t[t.CLOSED=2]="CLOSED",t})($f||{}),Ko=class{_ref;_config;_containerInstance;componentInstance;componentRef=null;disableClose;id;_afterOpened=new mn(1);_beforeClosed=new mn(1);_result;_closeFallbackTimeout;_state=$f.OPEN;_closeInteractionType;constructor(i,e,n){this._ref=i,this._config=e,this._containerInstance=n,this.disableClose=e.disableClose,this.id=i.id,i.addPanelClass("mat-mdc-dialog-panel"),n._animationStateChanged.pipe(ve(r=>r.state==="opened"),nt(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),n._animationStateChanged.pipe(ve(r=>r.state==="closed"),nt(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),i.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),St(this.backdropClick(),this.keydownEvents().pipe(ve(r=>r.keyCode===27&&!this.disableClose&&!_t(r)))).subscribe(r=>{this.disableClose||(r.preventDefault(),fV(this,r.type==="keydown"?"keyboard":"mouse"))})}close(i){let e=this._config.closePredicate;e&&!e(i,this._config,this.componentInstance)||(this._result=i,this._containerInstance._animationStateChanged.pipe(ve(n=>n.state==="closing"),nt(1)).subscribe(n=>{this._beforeClosed.next(i),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),n.totalTime+100)}),this._state=$f.CLOSING,this._containerInstance._startExitAnimation())}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(i){let e=this._ref.config.positionStrategy;return i&&(i.left||i.right)?i.left?e.left(i.left):e.right(i.right):e.centerHorizontally(),i&&(i.top||i.bottom)?i.top?e.top(i.top):e.bottom(i.bottom):e.centerVertically(),this._ref.updatePosition(),this}updateSize(i="",e=""){return this._ref.updateSize(i,e),this}addPanelClass(i){return this._ref.addPanelClass(i),this}removePanelClass(i){return this._ref.removePanelClass(i),this}getState(){return this._state}_finishDialogClose(){this._state=$f.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}};function fV(t,i,e){return t._closeInteractionType=i,t.close(e)}var hV=new b("MatMdcDialogData"),pV=new b("mat-mdc-dialog-default-options"),gV=new b("mat-mdc-dialog-scroll-strategy",{providedIn:"root",factory:()=>{let t=c($);return()=>Zo(t)}}),Oc=(()=>{class t{_defaultOptions=c(pV,{optional:!0});_scrollStrategy=c(gV);_parentDialog=c(t,{optional:!0,skipSelf:!0});_idGenerator=c(Qe);_injector=c($);_dialog=c(wb);_animationsDisabled=Ve();_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new x;_afterOpenedAtThisLevel=new x;dialogConfigClass=Wf;_dialogRefConstructor;_dialogContainerType;_dialogDataToken;get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}afterAllClosed=Wn(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(Ke(void 0)));constructor(){this._dialogRefConstructor=Ko,this._dialogContainerType=mV,this._dialogDataToken=hV}open(e,n){let r;n=C(C({},this._defaultOptions||new Wf),n),n.id=n.id||this._idGenerator.getId("mat-mdc-dialog-"),n.scrollStrategy=n.scrollStrategy||this._scrollStrategy();let o=this._dialog.open(e,X(C({},n),{positionStrategy:hr(this._injector).centerHorizontally().centerVertically(),disableClose:!0,closePredicate:void 0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,disableAnimations:this._animationsDisabled||n.enterAnimationDuration?.toLocaleString()==="0"||n.exitAnimationDuration?.toString()==="0",container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:n},{provide:Qr,useValue:n}]},templateContext:()=>({dialogRef:r}),providers:(a,s,l)=>(r=new this._dialogRefConstructor(a,n,l),r.updatePosition(n?.position),[{provide:this._dialogContainerType,useValue:l},{provide:this._dialogDataToken,useValue:s.data},{provide:this._dialogRefConstructor,useValue:r}])}));return r.componentRef=o.componentRef,r.componentInstance=o.componentInstance,this.openDialogs.push(r),this.afterOpened.next(r),r.afterClosed().subscribe(()=>{let a=this.openDialogs.indexOf(r);a>-1&&(this.openDialogs.splice(a,1),this.openDialogs.length||this._getAfterAllClosed().next())}),r}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(e){return this.openDialogs.find(n=>n.id===e)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(e){let n=e.length;for(;n--;)e[n].close()}static \u0275fac=function(n){return new(n||t)};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Gf=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=H({type:t});static \u0275inj=j({providers:[Oc],imports:[oI,Hn,Vi,_e]})}return t})();var qf=class t{dialogRef=c(Ko);onConfirm(){this.dialogRef.close(!0)}onDeny(){this.dialogRef.close(!1)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=D({type:t,selectors:[["confirmation-dialog"]],decls:8,vars:0,consts:[[1,"flex-with-style"],[1,"top-text"],[1,"button-group"],[1,"button",3,"click"]],template:function(e,n){e&1&&(Ee(0,"div",0)(1,"p",1),g(2," \xC4r du s\xE4ker att du vill avregistrera n\xE4rvaro? "),Te(),Ee(3,"li",2)(4,"button",3),An("click",function(){return n.onConfirm()}),g(5," Ja "),Te(),Ee(6,"button",3),An("click",function(){return n.onDeny()}),g(7," Nej "),Te()()())},dependencies:[Gf,dt],styles:["[_nghost-%COMP%]{display:block;text-align:center;padding:8px}.top-text[_ngcontent-%COMP%]{font:var(--mat-sys-title-medium)}.button-group[_ngcontent-%COMP%]{display:flex;justify-content:center;gap:32px}.button[_ngcontent-%COMP%]{padding:8px 32px;font:var(--mat-sys-label-small);font-weight:700;cursor:pointer;border-radius:4px;transition:all .2s ease-in-out;background-color:var(--mat-sys-primary);color:var(--mat-sys-on-primary);border:1px solid}button[_ngcontent-%COMP%]:hover{background-color:var(--mat-sys-primary-fixed-dim)}"]})};var dI=(t,i)=>i.value,_V=(t,i)=>e=>e.value!="CHECKED_OUT";function vV(t,i){if(t&1&&(m(0,"span"),g(1),f()),t&2){let e=S();p(),se(e.statusLabels[e.currentStatus])}}function bV(t,i){if(t&1&&(m(0,"mat-option",3),g(1),f()),t&2){let e=i.$implicit;R("value",e.value),p(),se(e.label)}}function yV(t,i){if(t&1&&Ge(0,bV,2,2,"mat-option",3,dI),t&2){let e=S(2);qe(e.statusOptions)}}function CV(t,i){if(t&1&&(m(0,"mat-option",3),g(1),f()),t&2){let e=i.$implicit;R("value",e.value),p(),se(e.label)}}function wV(t,i){if(t&1&&Ge(0,CV,2,2,"mat-option",3,dI),t&2){let e=S(2);qe(e.statusOptions.filter(__(0,_V,i)))}}function DV(t,i){if(t&1){let e=Ue();m(0,"mat-form-field",0)(1,"mat-select",2),E("selectionChange",function(r){ue(e);let o=S();return me(o.onStatusChange(r.value))}),W(2,yV,2,0)(3,wV,2,1),f()()}if(t&2){let e=S();p(),R("value",e.currentStatus),p(),G(e.currentStatus==="CHECKED_IN"?2:3)}}function xV(t,i){if(t&1&&(m(0,"p",1),g(1),f()),t&2){let e=S();p(),se(e.errorMessage)}}var ys=class t{childSignal=Le.required();disabled=ir();errorMessage="";showConfirmation=!1;dialog=c(Oc);statusOptions=[{value:"NOT_SET",label:"\u2014"},{value:"CHECKED_IN",label:"Incheckad"},{value:"CHECKED_OUT",label:"Utcheckad"},{value:"LEAVE",label:"Ledig"},{value:"ABSENT",label:"Fr\xE5nvarande"}];statusLabels=Object.fromEntries(this.statusOptions.map(i=>[i.value,i.label]));attendanceService=c(Wr);get currentStatus(){return this.attendanceService.getSignal(this.childSignal().id,ji())()??"NOT_SET"}constructor(){Xt(()=>{let i=this.childSignal();if(!i)return;let e=this.attendanceService.getSignal(i.id,ji());e()===null&&e.set(i.status??"NOT_SET")})}onStatusChange(i){let e=this.attendanceService.getSignal(this.childSignal().id,ji()),n=e();e.set(i),n==="CHECKED_IN"&&i==="CHECKED_OUT"&&this.dialog.open(qf).afterClosed().subscribe(o=>{if(!o){e.set(n);return}}),this.attendanceService.setAttendance(this.childSignal().id,ji(),i).subscribe({next:r=>e.set(r.status),error:r=>{console.error("Kunde inte spara",r),e.set(n),this.errorMessage="Misslyckades att spara till databasen.",setTimeout(()=>this.errorMessage="",2e3)}}),this.wsUpdateAttendance(i)}attendanceChangeEvent=new M;wsUpdateAttendance(i){let e={childId:this.childSignal().id,status:i};this.attendanceChangeEvent.emit(e)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=D({type:t,selectors:[["attendance-box"]],inputs:{childSignal:[1,"childSignal"],disabled:[1,"disabled"]},outputs:{childSignal:"childSignalChange",attendanceChangeEvent:"attendanceChangeEvent"},decls:4,vars:2,consts:[["appearance","outline","subscriptSizing","dynamic"],[1,"error-text"],[3,"selectionChange","value"],[3,"value"]],template:function(e,n){e&1&&(m(0,"div"),W(1,vV,2,1,"span")(2,DV,4,2,"mat-form-field",0),W(3,xV,2,1,"p",1),f()),e&2&&(p(),G(n.disabled()?1:2),p(2),G(n.errorMessage?3:-1))},dependencies:[Yr,jt,qr,Un,Ht],styles:[".error-text[_ngcontent-%COMP%]{color:red;font-size:16px;position:absolute}mat-form-field[_ngcontent-%COMP%]{--mat-form-field-container-height: 32px;--mat-form-field-container-vertical-padding: 6px;background-color:var(--mat-sys-surface-variant)}"]})};var Yf=class t{childSignal=Le.required();dateSignal=Le.required();attendanceChangeEvent=new M;wsUpdateAttendance(i){this.attendanceChangeEvent.emit(i)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=D({type:t,selectors:[["child-display"]],inputs:{childSignal:[1,"childSignal"],dateSignal:[1,"dateSignal"]},outputs:{childSignal:"childSignalChange",dateSignal:"dateSignalChange",attendanceChangeEvent:"attendanceChangeEvent"},decls:6,vars:2,consts:[[1,"rowise"],[1,"attendance-box",3,"attendanceChangeEvent","childSignal"]],template:function(e,n){e&1&&(m(0,"p"),g(1),f(),m(2,"div",0)(3,"p"),g(4,"N\xE4rvaro:"),f(),m(5,"attendance-box",1),E("attendanceChangeEvent",function(o){return n.wsUpdateAttendance(o)}),f()()),e&2&&(p(),se(n.dateSignal()),p(4),R("childSignal",n.childSignal()))},dependencies:[ys],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;width:fit-content;height:100%;max-width:fit-content}.rowise[_ngcontent-%COMP%]{display:flex;flex:1;gap:1em;margin:1em;align-items:baseline}p[_ngcontent-%COMP%]{font:var(--mat-sys-body-large);margin-bottom:0;margin-left:1em}"]})};var uI=["*"],EV=`.mdc-list {
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
`,MV=["unscopedContent"],IV=["text"],SV=[[["","matListItemAvatar",""],["","matListItemIcon",""]],[["","matListItemTitle",""]],[["","matListItemLine",""]],"*",[["","matListItemMeta",""]],[["mat-divider"]]],TV=["[matListItemAvatar],[matListItemIcon]","[matListItemTitle]","[matListItemLine]","*","[matListItemMeta]","mat-divider"];var kV=new b("ListOption"),pr=(()=>{class t{_elementRef=c(V);constructor(){}static \u0275fac=function(n){return new(n||t)};static \u0275dir=A({type:t,selectors:[["","matListItemTitle",""]],hostAttrs:[1,"mat-mdc-list-item-title","mdc-list-item__primary-text"]})}return t})(),AV=(()=>{class t{_elementRef=c(V);constructor(){}static \u0275fac=function(n){return new(n||t)};static \u0275dir=A({type:t,selectors:[["","matListItemLine",""]],hostAttrs:[1,"mat-mdc-list-item-line","mdc-list-item__secondary-text"]})}return t})(),Xo=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=A({type:t,selectors:[["","matListItemMeta",""]],hostAttrs:[1,"mat-mdc-list-item-meta","mdc-list-item__end"]})}return t})(),mI=(()=>{class t{_listOption=c(kV,{optional:!0});constructor(){}_isAlignedAtStart(){return!this._listOption||this._listOption?._getTogglePosition()==="after"}static \u0275fac=function(n){return new(n||t)};static \u0275dir=A({type:t,hostVars:4,hostBindings:function(n,r){n&2&&U("mdc-list-item__start",r._isAlignedAtStart())("mdc-list-item__end",!r._isAlignedAtStart())}})}return t})(),RV=(()=>{class t extends mI{static \u0275fac=(()=>{let e;return function(r){return(e||(e=$e(t)))(r||t)}})();static \u0275dir=A({type:t,selectors:[["","matListItemAvatar",""]],hostAttrs:[1,"mat-mdc-list-item-avatar"],features:[ge]})}return t})(),OV=(()=>{class t extends mI{static \u0275fac=(()=>{let e;return function(r){return(e||(e=$e(t)))(r||t)}})();static \u0275dir=A({type:t,selectors:[["","matListItemIcon",""]],hostAttrs:[1,"mat-mdc-list-item-icon"],features:[ge]})}return t})(),NV=new b("MAT_LIST_CONFIG"),Nc=(()=>{class t{_isNonInteractive=!0;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=Rt(e)}_disableRipple=!1;get disabled(){return this._disabled()}set disabled(e){this._disabled.set(Rt(e))}_disabled=I(!1);_defaultOptions=c(NV,{optional:!0});static \u0275fac=function(n){return new(n||t)};static \u0275dir=A({type:t,hostVars:1,hostBindings:function(n,r){n&2&&Z("aria-disabled",r.disabled)},inputs:{disableRipple:"disableRipple",disabled:"disabled"}})}return t})(),FV=(()=>{class t{_elementRef=c(V);_ngZone=c(L);_listBase=c(Nc,{optional:!0});_platform=c(ce);_hostElement;_isButtonElement;_noopAnimations=Ve();_avatars;_icons;set lines(e){this._explicitLines=yn(e,null),this._updateItemLines(!1)}_explicitLines=null;get disableRipple(){return this.disabled||this._disableRipple||this._noopAnimations||!!this._listBase?.disableRipple}set disableRipple(e){this._disableRipple=Rt(e)}_disableRipple=!1;get disabled(){return this._disabled()||!!this._listBase?.disabled}set disabled(e){this._disabled.set(Rt(e))}_disabled=I(!1);_subscriptions=new ie;_rippleRenderer=null;_hasUnscopedTextContent=!1;rippleConfig;get rippleDisabled(){return this.disableRipple||!!this.rippleConfig.disabled}constructor(){c(Ye).load(Fi);let e=c(as,{optional:!0});this.rippleConfig=e||{},this._hostElement=this._elementRef.nativeElement,this._isButtonElement=this._hostElement.nodeName.toLowerCase()==="button",this._listBase&&!this._listBase._isNonInteractive&&this._initInteractiveListItem(),this._isButtonElement&&!this._hostElement.hasAttribute("type")&&this._hostElement.setAttribute("type","button")}ngAfterViewInit(){this._monitorProjectedLinesAndTitle(),this._updateItemLines(!0)}ngOnDestroy(){this._subscriptions.unsubscribe(),this._rippleRenderer!==null&&this._rippleRenderer._removeTriggerEvents()}_hasIconOrAvatar(){return!!(this._avatars.length||this._icons.length)}_initInteractiveListItem(){this._hostElement.classList.add("mat-mdc-list-item-interactive"),this._rippleRenderer=new Go(this,this._ngZone,this._hostElement,this._platform,c($)),this._rippleRenderer.setupTriggerEvents(this._hostElement)}_monitorProjectedLinesAndTitle(){this._ngZone.runOutsideAngular(()=>{this._subscriptions.add(St(this._lines.changes,this._titles.changes).subscribe(()=>this._updateItemLines(!1)))})}_updateItemLines(e){if(!this._lines||!this._titles||!this._unscopedContent)return;e&&this._checkDomForUnscopedTextContent();let n=this._explicitLines??this._inferLinesFromContent(),r=this._unscopedContent.nativeElement;if(this._hostElement.classList.toggle("mat-mdc-list-item-single-line",n<=1),this._hostElement.classList.toggle("mdc-list-item--with-one-line",n<=1),this._hostElement.classList.toggle("mdc-list-item--with-two-lines",n===2),this._hostElement.classList.toggle("mdc-list-item--with-three-lines",n===3),this._hasUnscopedTextContent){let o=this._titles.length===0&&n===1;r.classList.toggle("mdc-list-item__primary-text",o),r.classList.toggle("mdc-list-item__secondary-text",!o)}else r.classList.remove("mdc-list-item__primary-text"),r.classList.remove("mdc-list-item__secondary-text")}_inferLinesFromContent(){let e=this._titles.length+this._lines.length;return this._hasUnscopedTextContent&&(e+=1),e}_checkDomForUnscopedTextContent(){this._hasUnscopedTextContent=Array.from(this._unscopedContent.nativeElement.childNodes).filter(e=>e.nodeType!==e.COMMENT_NODE).some(e=>!!(e.textContent&&e.textContent.trim()))}static \u0275fac=function(n){return new(n||t)};static \u0275dir=A({type:t,contentQueries:function(n,r,o){if(n&1&&wt(o,RV,4)(o,OV,4),n&2){let a;F(a=P())&&(r._avatars=a),F(a=P())&&(r._icons=a)}},hostVars:4,hostBindings:function(n,r){n&2&&(Z("aria-disabled",r.disabled)("disabled",r._isButtonElement&&r.disabled||null),U("mdc-list-item--disabled",r.disabled))},inputs:{lines:"lines",disableRipple:"disableRipple",disabled:"disabled"}})}return t})();var fI=(()=>{class t extends Nc{_isNonInteractive=!1;static \u0275fac=(()=>{let e;return function(r){return(e||(e=$e(t)))(r||t)}})();static \u0275cmp=D({type:t,selectors:[["mat-action-list"]],hostAttrs:["role","group",1,"mat-mdc-action-list","mat-mdc-list-base","mdc-list"],exportAs:["matActionList"],features:[Pe([{provide:Nc,useExisting:t}]),ge],ngContentSelectors:uI,decls:1,vars:0,template:function(n,r){n&1&&(Me(),ee(0))},styles:[`.mdc-list {
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
`],encapsulation:2,changeDetection:0})}return t})();var Cs=(()=>{class t extends Nc{static \u0275fac=(()=>{let e;return function(r){return(e||(e=$e(t)))(r||t)}})();static \u0275cmp=D({type:t,selectors:[["mat-list"]],hostAttrs:[1,"mat-mdc-list","mat-mdc-list-base","mdc-list"],exportAs:["matList"],features:[Pe([{provide:Nc,useExisting:t}]),ge],ngContentSelectors:uI,decls:1,vars:0,template:function(n,r){n&1&&(Me(),ee(0))},styles:[EV],encapsulation:2,changeDetection:0})}return t})(),Zr=(()=>{class t extends FV{_lines;_titles;_meta;_unscopedContent;_itemText;get activated(){return this._activated}set activated(e){this._activated=Rt(e)}_activated=!1;_getAriaCurrent(){return this._hostElement.nodeName==="A"&&this._activated?"page":null}_hasBothLeadingAndTrailing(){return this._meta.length!==0&&(this._avatars.length!==0||this._icons.length!==0)}static \u0275fac=(()=>{let e;return function(r){return(e||(e=$e(t)))(r||t)}})();static \u0275cmp=D({type:t,selectors:[["mat-list-item"],["a","mat-list-item",""],["button","mat-list-item",""]],contentQueries:function(n,r,o){if(n&1&&wt(o,AV,5)(o,pr,5)(o,Xo,5),n&2){let a;F(a=P())&&(r._lines=a),F(a=P())&&(r._titles=a),F(a=P())&&(r._meta=a)}},viewQuery:function(n,r){if(n&1&&xe(MV,5)(IV,5),n&2){let o;F(o=P())&&(r._unscopedContent=o.first),F(o=P())&&(r._itemText=o.first)}},hostAttrs:[1,"mat-mdc-list-item","mdc-list-item"],hostVars:13,hostBindings:function(n,r){n&2&&(Z("aria-current",r._getAriaCurrent()),U("mdc-list-item--activated",r.activated)("mdc-list-item--with-leading-avatar",r._avatars.length!==0)("mdc-list-item--with-leading-icon",r._icons.length!==0)("mdc-list-item--with-trailing-meta",r._meta.length!==0)("mat-mdc-list-item-both-leading-and-trailing",r._hasBothLeadingAndTrailing())("_mat-animation-noopable",r._noopAnimations))},inputs:{activated:"activated"},exportAs:["matListItem"],features:[ge],ngContentSelectors:TV,decls:10,vars:0,consts:[["unscopedContent",""],[1,"mdc-list-item__content"],[1,"mat-mdc-list-item-unscoped-content",3,"cdkObserveContent"],[1,"mat-focus-indicator"]],template:function(n,r){n&1&&(Me(SV),ee(0),m(1,"span",1),ee(2,1),ee(3,2),m(4,"span",2,0),E("cdkObserveContent",function(){return r._updateItemLines(!0)}),ee(6,3),f()(),ee(7,4),ee(8,5),k(9,"div",3))},dependencies:[Gm],encapsulation:2,changeDetection:0})}return t})();var Kr=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=H({type:t});static \u0275inj=j({imports:[es,ss,Uf,_e,Bi]})}return t})();var Zf=class t{url=`${Et.apiUrl}/api/children/attendance`;urlPerGroup=`${Et.apiUrl}/api/children/attendance/group`;http=c(kt);getChildren(){return this.http.get(this.url)}getChildrenByGroup(i,e){let n=new Gt().set("groupId",i);return e&&(n=n.set("date",e)),this.http.get(this.urlPerGroup,{params:n})}static \u0275fac=function(e){return new(e||t)};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})};var PV=["tooltip"],LV=20;var VV=new b("mat-tooltip-scroll-strategy",{providedIn:"root",factory:()=>{let t=c($);return()=>Gr(t,{scrollThrottle:LV})}}),BV=new b("mat-tooltip-default-options",{providedIn:"root",factory:()=>({showDelay:0,hideDelay:0,touchendHideDelay:1500})});var hI="tooltip-panel",jV={passive:!0},HV=8,UV=8,zV=24,$V=200,Fc=(()=>{class t{_elementRef=c(V);_ngZone=c(L);_platform=c(ce);_ariaDescriber=c(DE);_focusMonitor=c(cr);_dir=c(tt);_injector=c($);_viewContainerRef=c(Ct);_mediaMatcher=c(Ja);_document=c(Y);_renderer=c(Se);_animationsDisabled=Ve();_defaultOptions=c(BV,{optional:!0});_overlayRef=null;_tooltipInstance=null;_overlayPanelClass;_portal;_position="below";_positionAtOrigin=!1;_disabled=!1;_tooltipClass;_viewInitialized=!1;_pointerExitEventsInitialized=!1;_tooltipComponent=pI;_viewportMargin=8;_currentPosition;_cssClassPrefix="mat-mdc";_ariaDescriptionPending=!1;_dirSubscribed=!1;get position(){return this._position}set position(e){e!==this._position&&(this._position=e,this._overlayRef&&(this._updatePosition(this._overlayRef),this._tooltipInstance?.show(0),this._overlayRef.updatePosition()))}get positionAtOrigin(){return this._positionAtOrigin}set positionAtOrigin(e){this._positionAtOrigin=Rt(e),this._detach(),this._overlayRef=null}get disabled(){return this._disabled}set disabled(e){let n=Rt(e);this._disabled!==n&&(this._disabled=n,n?this.hide(0):this._setupPointerEnterEventsIfNeeded(),this._syncAriaDescription(this.message))}get showDelay(){return this._showDelay}set showDelay(e){this._showDelay=yn(e)}_showDelay;get hideDelay(){return this._hideDelay}set hideDelay(e){this._hideDelay=yn(e),this._tooltipInstance&&(this._tooltipInstance._mouseLeaveHideDelay=this._hideDelay)}_hideDelay;touchGestures="auto";get message(){return this._message}set message(e){let n=this._message;this._message=e!=null?String(e).trim():"",!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage()),this._syncAriaDescription(n)}_message="";get tooltipClass(){return this._tooltipClass}set tooltipClass(e){this._tooltipClass=e,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass)}_eventCleanups=[];_touchstartTimeout=null;_destroyed=new x;_isDestroyed=!1;constructor(){let e=this._defaultOptions;e&&(this._showDelay=e.showDelay,this._hideDelay=e.hideDelay,e.position&&(this.position=e.position),e.positionAtOrigin&&(this.positionAtOrigin=e.positionAtOrigin),e.touchGestures&&(this.touchGestures=e.touchGestures),e.tooltipClass&&(this.tooltipClass=e.tooltipClass)),this._viewportMargin=HV}ngAfterViewInit(){this._viewInitialized=!0,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe(ye(this._destroyed)).subscribe(e=>{e?e==="keyboard"&&this._ngZone.run(()=>this.show()):this._ngZone.run(()=>this.hide(0))})}ngOnDestroy(){let e=this._elementRef.nativeElement;this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),this._eventCleanups.forEach(n=>n()),this._eventCleanups.length=0,this._destroyed.next(),this._destroyed.complete(),this._isDestroyed=!0,this._ariaDescriber.removeDescription(e,this.message,"tooltip"),this._focusMonitor.stopMonitoring(e)}show(e=this.showDelay,n){if(this.disabled||!this.message||this._isTooltipVisible()){this._tooltipInstance?._cancelPendingAnimations();return}let r=this._createOverlay(n);this._detach(),this._portal=this._portal||new Cn(this._tooltipComponent,this._viewContainerRef);let o=this._tooltipInstance=r.attach(this._portal).instance;o._triggerElement=this._elementRef.nativeElement,o._mouseLeaveHideDelay=this._hideDelay,o.afterHidden().pipe(ye(this._destroyed)).subscribe(()=>this._detach()),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),o.show(e)}hide(e=this.hideDelay){let n=this._tooltipInstance;n&&(n.isVisible()?n.hide(e):(n._cancelPendingAnimations(),this._detach()))}toggle(e){this._isTooltipVisible()?this.hide():this.show(void 0,e)}_isTooltipVisible(){return!!this._tooltipInstance&&this._tooltipInstance.isVisible()}_createOverlay(e){if(this._overlayRef){let a=this._overlayRef.getConfig().positionStrategy;if((!this.positionAtOrigin||!e)&&a._origin instanceof V)return this._overlayRef;this._detach()}let n=this._injector.get($r).getAncestorScrollContainers(this._elementRef),r=`${this._cssClassPrefix}-${hI}`,o=vs(this._injector,this.positionAtOrigin?e||this._elementRef:this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(!1).withViewportMargin(this._viewportMargin).withScrollableContainers(n).withPopoverLocation("global");return o.positionChanges.pipe(ye(this._destroyed)).subscribe(a=>{this._updateCurrentPositionClass(a.connectionPair),this._tooltipInstance&&a.scrollableViewProperties.isOverlayClipped&&this._tooltipInstance.isVisible()&&this._ngZone.run(()=>this.hide(0))}),this._overlayRef=Ui(this._injector,{direction:this._dir,positionStrategy:o,panelClass:this._overlayPanelClass?[...this._overlayPanelClass,r]:r,scrollStrategy:this._injector.get(VV)(),disableAnimations:this._animationsDisabled,eventPredicate:this._overlayEventPredicate}),this._updatePosition(this._overlayRef),this._overlayRef.detachments().pipe(ye(this._destroyed)).subscribe(()=>this._detach()),this._overlayRef.outsidePointerEvents().pipe(ye(this._destroyed)).subscribe(()=>this._tooltipInstance?._handleBodyInteraction()),this._overlayRef.keydownEvents().pipe(ye(this._destroyed)).subscribe(a=>{a.preventDefault(),a.stopPropagation(),this._ngZone.run(()=>this.hide(0))}),this._defaultOptions?.disableTooltipInteractivity&&this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`),this._dirSubscribed||(this._dirSubscribed=!0,this._dir.change.pipe(ye(this._destroyed)).subscribe(()=>{this._overlayRef&&this._updatePosition(this._overlayRef)})),this._overlayRef}_detach(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null}_updatePosition(e){let n=e.getConfig().positionStrategy,r=this._getOrigin(),o=this._getOverlayPosition();n.withPositions([this._addOffset(C(C({},r.main),o.main)),this._addOffset(C(C({},r.fallback),o.fallback))])}_addOffset(e){let n=UV,r=!this._dir||this._dir.value=="ltr";return e.originY==="top"?e.offsetY=-n:e.originY==="bottom"?e.offsetY=n:e.originX==="start"?e.offsetX=r?-n:n:e.originX==="end"&&(e.offsetX=r?n:-n),e}_getOrigin(){let e=!this._dir||this._dir.value=="ltr",n=this.position,r;n=="above"||n=="below"?r={originX:"center",originY:n=="above"?"top":"bottom"}:n=="before"||n=="left"&&e||n=="right"&&!e?r={originX:"start",originY:"center"}:(n=="after"||n=="right"&&e||n=="left"&&!e)&&(r={originX:"end",originY:"center"});let{x:o,y:a}=this._invertPosition(r.originX,r.originY);return{main:r,fallback:{originX:o,originY:a}}}_getOverlayPosition(){let e=!this._dir||this._dir.value=="ltr",n=this.position,r;n=="above"?r={overlayX:"center",overlayY:"bottom"}:n=="below"?r={overlayX:"center",overlayY:"top"}:n=="before"||n=="left"&&e||n=="right"&&!e?r={overlayX:"end",overlayY:"center"}:(n=="after"||n=="right"&&e||n=="left"&&!e)&&(r={overlayX:"start",overlayY:"center"});let{x:o,y:a}=this._invertPosition(r.overlayX,r.overlayY);return{main:r,fallback:{overlayX:o,overlayY:a}}}_updateTooltipMessage(){this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),We(()=>{this._tooltipInstance&&this._overlayRef.updatePosition()},{injector:this._injector}))}_setTooltipClass(e){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=e instanceof Set?Array.from(e):e,this._tooltipInstance._markForCheck())}_invertPosition(e,n){return this.position==="above"||this.position==="below"?n==="top"?n="bottom":n==="bottom"&&(n="top"):e==="end"?e="start":e==="start"&&(e="end"),{x:e,y:n}}_updateCurrentPositionClass(e){let{overlayY:n,originX:r,originY:o}=e,a;if(n==="center"?this._dir&&this._dir.value==="rtl"?a=r==="end"?"left":"right":a=r==="start"?"left":"right":a=n==="bottom"&&o==="top"?"above":"below",a!==this._currentPosition){let s=this._overlayRef;if(s){let l=`${this._cssClassPrefix}-${hI}-`;s.removePanelClass(l+this._currentPosition),s.addPanelClass(l+a)}this._currentPosition=a}}_setupPointerEnterEventsIfNeeded(){this._disabled||!this.message||!this._viewInitialized||this._eventCleanups.length||(this._isTouchPlatform()?this.touchGestures!=="off"&&(this._disableNativeGesturesIfNecessary(),this._addListener("touchstart",e=>{let n=e.targetTouches?.[0],r=n?{x:n.clientX,y:n.clientY}:void 0;this._setupPointerExitEventsIfNeeded(),this._touchstartTimeout&&clearTimeout(this._touchstartTimeout);let o=500;this._touchstartTimeout=setTimeout(()=>{this._touchstartTimeout=null,this.show(void 0,r)},this._defaultOptions?.touchLongPressShowDelay??o)})):this._addListener("mouseenter",e=>{this._setupPointerExitEventsIfNeeded();let n;e.x!==void 0&&e.y!==void 0&&(n=e),this.show(void 0,n)}))}_setupPointerExitEventsIfNeeded(){if(!this._pointerExitEventsInitialized){if(this._pointerExitEventsInitialized=!0,!this._isTouchPlatform())this._addListener("mouseleave",e=>{let n=e.relatedTarget;(!n||!this._overlayRef?.overlayElement.contains(n))&&this.hide()}),this._addListener("wheel",e=>{if(this._isTooltipVisible()){let n=this._document.elementFromPoint(e.clientX,e.clientY),r=this._elementRef.nativeElement;n!==r&&!r.contains(n)&&this.hide()}});else if(this.touchGestures!=="off"){this._disableNativeGesturesIfNecessary();let e=()=>{this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this.hide(this._defaultOptions?.touchendHideDelay)};this._addListener("touchend",e),this._addListener("touchcancel",e)}}}_addListener(e,n){this._eventCleanups.push(this._renderer.listen(this._elementRef.nativeElement,e,n,jV))}_isTouchPlatform(){let e=this._defaultOptions?.detectHoverCapability;return typeof e=="function"?!e():this._platform.IOS||this._platform.ANDROID?!0:this._platform.isBrowser?!!e&&this._mediaMatcher.matchMedia("(any-hover: none)").matches:!1}_disableNativeGesturesIfNecessary(){let e=this.touchGestures;if(e!=="off"){let n=this._elementRef.nativeElement,r=n.style;(e==="on"||n.nodeName!=="INPUT"&&n.nodeName!=="TEXTAREA")&&(r.userSelect=r.msUserSelect=r.webkitUserSelect=r.MozUserSelect="none"),(e==="on"||!n.draggable)&&(r.webkitUserDrag="none"),r.touchAction="none",r.webkitTapHighlightColor="transparent"}}_syncAriaDescription(e){this._ariaDescriptionPending||(this._ariaDescriptionPending=!0,this._ariaDescriber.removeDescription(this._elementRef.nativeElement,e,"tooltip"),this._isDestroyed||We({write:()=>{this._ariaDescriptionPending=!1,this.message&&!this.disabled&&this._ariaDescriber.describe(this._elementRef.nativeElement,this.message,"tooltip")}},{injector:this._injector}))}_overlayEventPredicate=e=>e.type==="keydown"?this._isTooltipVisible()&&e.keyCode===27&&!_t(e):!0;static \u0275fac=function(n){return new(n||t)};static \u0275dir=A({type:t,selectors:[["","matTooltip",""]],hostAttrs:[1,"mat-mdc-tooltip-trigger"],hostVars:2,hostBindings:function(n,r){n&2&&U("mat-mdc-tooltip-disabled",r.disabled)},inputs:{position:[0,"matTooltipPosition","position"],positionAtOrigin:[0,"matTooltipPositionAtOrigin","positionAtOrigin"],disabled:[0,"matTooltipDisabled","disabled"],showDelay:[0,"matTooltipShowDelay","showDelay"],hideDelay:[0,"matTooltipHideDelay","hideDelay"],touchGestures:[0,"matTooltipTouchGestures","touchGestures"],message:[0,"matTooltip","message"],tooltipClass:[0,"matTooltipClass","tooltipClass"]},exportAs:["matTooltip"]})}return t})(),pI=(()=>{class t{_changeDetectorRef=c(we);_elementRef=c(V);_isMultiline=!1;message;tooltipClass;_showTimeoutId;_hideTimeoutId;_triggerElement;_mouseLeaveHideDelay;_animationsDisabled=Ve();_tooltip;_closeOnInteraction=!1;_isVisible=!1;_onHide=new x;_showAnimation="mat-mdc-tooltip-show";_hideAnimation="mat-mdc-tooltip-hide";constructor(){}show(e){this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=setTimeout(()=>{this._toggleVisibility(!0),this._showTimeoutId=void 0},e)}hide(e){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId=setTimeout(()=>{this._toggleVisibility(!1),this._hideTimeoutId=void 0},e)}afterHidden(){return this._onHide}isVisible(){return this._isVisible}ngOnDestroy(){this._cancelPendingAnimations(),this._onHide.complete(),this._triggerElement=null}_handleBodyInteraction(){this._closeOnInteraction&&this.hide(0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_handleMouseLeave({relatedTarget:e}){(!e||!this._triggerElement.contains(e))&&(this.isVisible()?this.hide(this._mouseLeaveHideDelay):this._finalizeAnimation(!1))}_onShow(){this._isMultiline=this._isTooltipMultiline(),this._markForCheck()}_isTooltipMultiline(){let e=this._elementRef.nativeElement.getBoundingClientRect();return e.height>zV&&e.width>=$V}_handleAnimationEnd({animationName:e}){(e===this._showAnimation||e===this._hideAnimation)&&this._finalizeAnimation(e===this._showAnimation)}_cancelPendingAnimations(){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=this._hideTimeoutId=void 0}_finalizeAnimation(e){e?this._closeOnInteraction=!0:this.isVisible()||this._onHide.next()}_toggleVisibility(e){let n=this._tooltip.nativeElement,r=this._showAnimation,o=this._hideAnimation;if(n.classList.remove(e?o:r),n.classList.add(e?r:o),this._isVisible!==e&&(this._isVisible=e,this._changeDetectorRef.markForCheck()),e&&!this._animationsDisabled&&typeof getComputedStyle=="function"){let a=getComputedStyle(n);(a.getPropertyValue("animation-duration")==="0s"||a.getPropertyValue("animation-name")==="none")&&(this._animationsDisabled=!0)}e&&this._onShow(),this._animationsDisabled&&(n.classList.add("_mat-animation-noopable"),this._finalizeAnimation(e))}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=D({type:t,selectors:[["mat-tooltip-component"]],viewQuery:function(n,r){if(n&1&&xe(PV,7),n&2){let o;F(o=P())&&(r._tooltip=o.first)}},hostAttrs:["aria-hidden","true"],hostBindings:function(n,r){n&1&&E("mouseleave",function(a){return r._handleMouseLeave(a)})},decls:4,vars:5,consts:[["tooltip",""],[1,"mdc-tooltip","mat-mdc-tooltip",3,"animationend"],[1,"mat-mdc-tooltip-surface","mdc-tooltip__surface"]],template:function(n,r){n&1&&(Ee(0,"div",1,0),An("animationend",function(a){return r._handleAnimationEnd(a)}),Ee(2,"div",2),g(3),Te()()),n&2&&(Dt(r.tooltipClass),U("mdc-tooltip--multiline",r._isMultiline),p(3),se(r.message))},styles:[`.mat-mdc-tooltip {
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
`],encapsulation:2,changeDetection:0})}return t})();var gI=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=H({type:t});static \u0275inj=j({imports:[Uo,Hn,_e,jn]})}return t})();var Kf=class t{teacher=ir.required();static \u0275fac=function(e){return new(e||t)};static \u0275cmp=D({type:t,selectors:[["main-presence-indicator"]],inputs:{teacher:[1,"teacher"]},decls:3,vars:5,consts:[["tooltip","matTooltip"],[3,"matTooltip"]],template:function(e,n){e&1&&(m(0,"p",1,0),g(2,"\u2B24"),f()),e&2&&(p_(g_("color: ",n.teacher().color)),R("matTooltip",Mi(n.teacher().name)))},dependencies:[gI,Fc],styles:["p[_ngcontent-%COMP%]{display:flex;margin:0;padding:0;cursor:pointer;text-align:center;-webkit-user-select:none;user-select:none}"]})};var ws=!0;var Xr=class t{observedSocket=new mn(1);connectedSocket=null;mailboxes={attendanceMessages:new x,presenceMessages:new x,journalMessages:new x};rooms={attendance:"",journal:"",chat:""};deliverMessage(i){switch(i.type){case"ATTENDANCE":this.mailboxes.attendanceMessages.next(i);break;case"DOC_OPERATION":this.mailboxes.journalMessages.next(i);break;case"PRESENCE_JOIN":case"PRESENCE_LEAVE":case"PRESENCE_STATE":this.mailboxes.presenceMessages.next(i)}}connect(i){this.observedSocket=new mn(1);let e=sessionStorage.getItem("token"),n=new WebSocket(`${i}?token=${e}`);n.onmessage=r=>{let o=JSON.parse(r.data);ws&&console.log("[Websocket] - Received:",o),this.deliverMessage(o)},n.onclose=r=>{ws&&console.log("[Websocket] - Disconnected",r.code,r.reason)},n.onopen=()=>{ws&&console.log("[Websocket] - Connected"),this.observedSocket.next(n),this.connectedSocket=n}}disconnect(){if(this.connectedSocket==null){console.error("[Websocket] - Tried disconnecting an unconnected websocket.");return}for(let i of Object.values(this.rooms))i!==""&&this.connectedSocket.send(JSON.stringify({type:"unsubscribe",room:i}));this.connectedSocket.close(),this.observedSocket.complete()}async ensureConnected(){return new Promise(i=>{this.observedSocket.subscribe(()=>{i()})})}setRoom(i,e){if(this.connectedSocket==null){console.error("[Websocket] - Attempted to set room of an unconnected socket");return}this.rooms[i]!==""&&this.leaveRoom(i),this.rooms[i]=e,this.connectedSocket.readyState==this.connectedSocket.OPEN&&(ws&&console.log("[Websocket] - Subscribing:",JSON.stringify({type:"subscribe",room:e})),this.connectedSocket.send(JSON.stringify({type:"subscribe",room:e})))}setAttendanceRoom(i){this.setRoom("attendance",i)}setJournalRoom(i){this.setRoom("journal",i)}leaveRoom(i){if(this.connectedSocket==null){console.error("[Websocket] - Tried to leave room on unconnected socket.");return}this.rooms[i]!=""&&(ws&&console.log("[Websocket] - Unsubscribing:",JSON.stringify({type:"unsubscribe",room:this.rooms[i]})),this.connectedSocket.send(JSON.stringify({type:"unsubscribe",room:this.rooms[i]})),this.rooms[i]="")}leaveAttendanceRoom(){this.leaveRoom("attendance")}leaveJournalRoom(){this.leaveRoom("journal")}sendMessage(i,e){if(this.connectedSocket==null){console.error("[Websocket] - Tried to send message on unconnected socket.");return}e.room=this.rooms[i=="ATTENDANCE"?"attendance":i=="CHAT"?"chat":"journal"],e.type=i;let n=JSON.stringify(C({},e));ws&&console.log("[Websocket] - Sending off: ",n),this.connectedSocket.send(n)}sendAttendanceUpdate(i){this.sendMessage("ATTENDANCE",i)}sendJournalUpdate(i){this.sendMessage("DOC_OPERATION",i)}getMessages(i){return this.mailboxes[i].asObservable()}static \u0275fac=function(e){return new(e||t)};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})};var Jr=class t{socketService=Vh(Xr);connectedTeachers=I([]);_teacherUpdates=new x;teacherUpdates=this._teacherUpdates.asObservable();async init(){await this.socketService.ensureConnected(),this.socketService.getMessages("presenceMessages").subscribe(i=>{this.handleMessage(i)})}spoofTeacherUpdate(){console.log("Spoofing teacher"),this._teacherUpdates.next({name:"Spoof",userId:-1,room:"Spoof",color:"#ffffff"})}handleMessage(i){switch(i.type){case"PRESENCE_STATE":this.handleStateMessage(i);break;case"PRESENCE_JOIN":this.handleJoinMessage(i);break;case"PRESENCE_LEAVE":this.handleLeaveMessage(i);break;default:console.error("WsPresenceChangeMessage with incorrect type in presence service")}}handleLeaveMessage(i){i.room||console.error("Incorrectly formatted leave message in presence service: ",i);let e={userId:i.userId,name:i.name,room:i.room,color:i.color},n=this.connectedTeachers().filter(r=>r.userId!=i.userId);this.connectedTeachers.set(n),console.log("Someone left, new status: ",this.connectedTeachers()),this._teacherUpdates.next(e)}handleJoinMessage(i){i.room||console.error("Incorrectly formatted join message in presence service: ",i);let e=this.connectedTeachers().findIndex(r=>r.userId==i.userId),n={userId:i.userId,name:i.name,room:i.room,color:i.color};if(e==-1){let r=this.connectedTeachers();r.push(n),this.connectedTeachers.set(r)}else{let r=this.connectedTeachers();r[e].room=i.room,this.connectedTeachers.set(r)}console.log("Someone joined, new status: ",this.connectedTeachers()),this._teacherUpdates.next(n)}handleStateMessage(i){if(i.users){let e=i.users.map(n=>C({},n));this.connectedTeachers.set(e)}else console.error("[Presence] - State message received without user array")}static \u0275fac=function(e){return new(e||t)};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})};var GV=(t,i)=>i.id;function qV(t,i){if(t&1&&k(0,"main-presence-indicator",1),t&2){let e=i.$implicit;R("teacher",e)}}var Ds=class t{presence=c(Jr);filter=ir.required();isGroup=ir("");teachers=I([]);ngOnInit(){this.presence.teacherUpdates.subscribe(()=>{this.teachers.set(this.presence.connectedTeachers().filter(i=>{let e=i.room.split(":"),n=e[1],r=e[2];return(this.isGroup()!==""&&n==="group"||this.isGroup()===""&&n==="child")&&r===this.filter()}))}),this.teachers.set(this.presence.connectedTeachers().filter(i=>{let e=this.isGroup()==""?"child:"+this.filter():"group:"+this.filter();return i.room.includes(e)}))}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=D({type:t,selectors:[["main-presence-container"]],inputs:{filter:[1,"filter"],isGroup:[1,"isGroup"]},decls:3,vars:0,consts:[[1,"container"],[3,"teacher"]],template:function(e,n){e&1&&(m(0,"mat-card",0),Ge(1,qV,1,1,"main-presence-indicator",1,GV),f()),e&2&&(p(),qe(n.teachers()))},dependencies:[Kf,At],styles:["[_nghost-%COMP%]{height:fit-content;width:fit-content}.container[_ngcontent-%COMP%]{display:flex;flex-direction:row;padding-left:1em;padding-right:1em}.container[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{margin-left:.1em;margin-right:.1em}"]})};var YV=()=>({name:"alla",id:0}),vI=(t,i)=>i.id;function QV(t,i){if(t&1){let e=Ue();m(0,"mat-option",8),E("click",function(){let r=ue(e).$implicit,o=S();return me(o.handleSelection(r))}),g(1),f()}if(t&2){let e=i.$implicit;R("value",e),p(),be(" ",e.name," ")}}function ZV(t,i){t&1&&k(0,"mat-divider")}function KV(t,i){if(t&1){let e=Ue();m(0,"button",13),E("click",function(){let r=ue(e).$implicit,o=S();return me(o.onSelectChild(r))}),m(1,"div",14),k(2,"main-presence-container",15),f(),m(3,"span",16),g(4),f(),m(5,"div",14),k(6,"attendance-box",17),f()(),W(7,ZV,1,0,"mat-divider")}if(t&2){let e=i.$implicit,n=i.$index,r=i.$count;p(2),R("filter",Mi(e.id)),p(2),be("",e.name," "),p(2),R("disabled",!0)("childSignal",e),p(),G(n!==r-1?7:-1)}}var xs=class t{children=I([]);childSignal=Le.required();searchQuery=I("");groupSignal=Le.required();contentSignal=Le.required();allGroups=Le.required();stupidFix=I(0);searchedChildren=gt(()=>{this.stupidFix();let i=this.searchQuery();return this.children().filter(e=>e.name.toLowerCase().includes(i)).sort()});groupAttendance=gt(()=>this.searchedChildren().filter(i=>i.status==="CHECKED_IN").length);groupAbsent=gt(()=>this.searchedChildren().length-this.groupAttendance());attendanceService=c(Wr);childService=c(Zf);constructor(){this.attendanceService.getAttendanceChanges.subscribe(i=>{let e=this.children().find(n=>n.id===i.childId);e!=null&&(e.status=i.status,this.stupidFix.update(n=>n+1))}),Xt(()=>{this.groupSignal().id!==0&&this.loadChildren()})}onSearchUpdated(i){this.searchQuery.set(i)}onSelectChild(i){this.childSignal.set(i),this.contentSignal.set("childView")}loadChildren(){this.childService.getChildrenByGroup(this.groupSignal().id).subscribe({next:i=>{this.children.set(i)}})}showAllChildren(){this.childService.getChildren().subscribe({next:i=>{this.children.set(i)}})}handleSelection(i){if(i.name==="alla"){this.contentSignal.set("homeView"),this.groupSignal.set({name:"",id:0}),this.showAllChildren();return}this.groupSignal.set(i),this.contentSignal.set("groupView")}handleWebsocketMessage(i){let e=this.children().find(r=>r.id===i.childId);if(!e){console.error("Attendance message received from other group. Child not found.");return}this.attendanceService.getSignal(e.id,ji()).set(i.status),e.status=i.status,this.stupidFix.update(r=>r+1)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=D({type:t,selectors:[["main-child-list"]],inputs:{childSignal:[1,"childSignal"],groupSignal:[1,"groupSignal"],contentSignal:[1,"contentSignal"],allGroups:[1,"allGroups"]},outputs:{childSignal:"childSignalChange",groupSignal:"groupSignalChange",contentSignal:"contentSignalChange",allGroups:"allGroupsChange"},decls:31,vars:5,consts:[["searchQuery",""],[1,"child-list-container"],[1,"list-topper"],["subscriptSizing","dynamic",1,"search"],[1,"badge"],["matInput","","type","search",3,"input"],["subscriptSizing","dynamic",1,"pick-class"],[3,"value"],[3,"click","value"],[1,"list-class"],[1,"stats-card"],[1,"stats"],[1,"stats-text"],["mat-list-item","",3,"click"],["matListItemMeta","",1,"meta-container"],[3,"filter"],["matListItemTitle",""],[3,"disabled","childSignal"]],template:function(e,n){if(e&1){let r=Ue();m(0,"div",1)(1,"mat-card",2)(2,"mat-form-field",3)(3,"mat-label",4)(4,"mat-icon"),g(5,"search"),f(),g(6,"S\xF6k"),f(),m(7,"input",5,0),E("input",function(){ue(r);let a=on(8);return me(n.onSearchUpdated(a.value.toLowerCase()))}),f()(),m(9,"mat-form-field",6)(10,"mat-label",4)(11,"mat-icon"),g(12,"groups"),f(),g(13," V\xE4lj klass"),f(),m(14,"mat-select"),Ge(15,QV,2,2,"mat-option",7,vI),m(17,"mat-option",8),E("click",function(){return n.handleSelection({name:"alla",id:0})}),g(18,"Alla elever"),f()()()(),m(19,"mat-action-list",9),Ge(20,KV,8,6,null,null,vI),f(),k(22,"mat-divider"),m(23,"mat-card",10)(24,"mat-card-content",11)(25,"p",12),g(26),f(),m(27,"p",12),g(28),f(),m(29,"p",12),g(30),f()()()()}e&2&&(p(15),qe(n.allGroups()),p(2),R("value",v_(4,YV)),p(3),qe(n.searchedChildren()),p(6),be("N\xE4rvarande: ",n.groupAttendance()),p(2),be("Icke n\xE4rvarande: ",n.groupAbsent()),p(2),be("Antal elever: ",n.children().length))},dependencies:[Kr,fI,Zr,en,pr,Xo,Sv,Bi,ys,Ht,jt,Ln,Li,ln,Vn,Yt,Ri,At,sn,Yr,qr,Un,Ds],styles:['[_nghost-%COMP%]{background-color:var(--mat-sys-primary-container);width:100%;border:1px solid var(--mat-sys-outline-variant);color:var(--mat-sys-on-primary-container);box-sizing:border-box;border-radius:5px;flex:1;display:flex;flex-direction:column;min-height:0;height:100%;overflow:hidden}.mat-mdc-action-list[_ngcontent-%COMP%]{padding:0;border-radius:5px;height:100%}.mdc-list-item[_ngcontent-%COMP%]{color:var(--mat-sys-on-primary-container);background-color:var(--mat-sys-surface-variant);box-shadow:var(--mat-sys-level1)}.child-list-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%}.list-class[_ngcontent-%COMP%]{background-color:var(--mat-sys-surface-dim);flex:1;overflow-y:auto}.badge[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem;font:var(--mat-sys-label-large);opacity:.75}.badge[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:1.1rem;width:1.1rem;height:1.1rem}[_nghost-%COMP%]     .child-list-container .pick-class .mdc-notched-outline__leading, [_nghost-%COMP%]     .child-list-container .pick-class .mdc-notched-outline__notch, [_nghost-%COMP%]     .child-list-container .pick-class .mdc-notched-outline__trailing{border-color:var(--mat-sys-inverse-primary)!important}[_nghost-%COMP%]     .child-list-container .pick-class .mat-mdc-text-field-wrapper{background-color:var(--mat-sys-inverse-primary)!important}[_nghost-%COMP%]     .child-list-container mat-form-field:not(.pick-class) .mdc-notched-outline__leading, [_nghost-%COMP%]     .child-list-container mat-form-field:not(.pick-class) .mdc-notched-outline__notch, [_nghost-%COMP%]     .child-list-container mat-form-field:not(.pick-class) .mdc-notched-outline__trailing{border-color:var(--mat-sys-inverse-primary)!important}[_nghost-%COMP%]     .child-list-container mat-form-field:not(.pick-class) .mat-mdc-text-field-wrapper{background-color:var(--mat-sys-inverse-primary)!important}.list-topper[_ngcontent-%COMP%]{display:flex;flex-direction:row;border-bottom-left-radius:0!important;border-bottom-right-radius:0!important}.stats[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;gap:1em;background:var(--mat-sys-inverse-primary);flex:1;padding:.5em}.stats[_ngcontent-%COMP%]:after{content:""}.stats[_ngcontent-%COMP%]:before{content:""}.stats[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-weight:500;padding:0;margin:.1em}.pick-class[_ngcontent-%COMP%]{flex:.5}.search[_ngcontent-%COMP%]{flex:1}.stats-text[_ngcontent-%COMP%]{margin:1em;font:var(--mat-sys-title-small);color:var(--mat-sys-on-secondary-container)}.cornerize[_ngcontent-%COMP%]{border-top-right-radius:0%!important;border-top-left-radius:0%!important}  mat-card>mat-form-field>div:nth-child(1){border-top-right-radius:0;border-top-left-radius:0}']})};var Xf=class{getDiff(i,e,n){let r=i.length-e.length,o=this.surroundingMatch(i,e,n,r)?r>0?"DELETE":"INSERT":"REPLACEMENT",a={operation:o,idx:n,value:"",length:0};switch(o){case"DELETE":a.length=r;break;case"INSERT":a.idx=n+r,a.value=e.substring(n+r,n);break;case"REPLACEMENT":{let s=this.findFirstDiff(i,e),l=this.findLastDiff(i,e);switch(l){case"prevOutOfBounds":a.idx=0,a.value=e.substring(0,0-r),a.operation="INSERT";break;case"newOutOfBounds":a.idx=0,a.length=r,a.operation="DELETE";break;default:a.value=e.substring(s,l),a.length=r+a.value.length,a.idx=s;break}}}return a}surroundingMatch(i,e,n,r){switch(r<0){case!0:return i.substring(0,n+r)===e.substring(0,n+r)&&i.substring(n+r)===e.substring(n);case!1:return i.substring(0,n)===e.substring(0,n)&&i.substring(n+r)===e.substring(n)}}findFirstDiff(i,e){let n=0;for(;;)if(i.charAt(n)===e.charAt(n))n++;else return n}findLastDiff(i,e){let n=1;for(;;){if(n>i.length)return"prevOutOfBounds";if(n>e.length)return"newOutOfBounds";if(i.charAt(i.length-n)===e.charAt(e.length-n))n++;else return e.length-n+1}}};var Jf=class{transformClient(i,e){switch(i.type){case"INSERT":return this.transformInsert(i,e);case"DELETE":return this.transformDelete(i,e)}}transformInsert(i,e){let n=i;switch(e.type){case"INSERT":e.position<=i.position&&(n.position+=e.text.length);break;case"DELETE":e.position<i.position&&(n.position=Math.max(e.position,n.position-=e.length));break}return n}transformDelete(i,e){let n=i;switch(e.type){case"INSERT":e.position<=n.position?n.position+=e.text.length:e.position<n.position+n.length&&(n.length+=e.text.length);break;case"DELETE":let r=e.position+e.length;if(r<=n.position)n.position-=e.length;else if(!(e.position>=n.position+n.length)){let o=Math.max(n.position,e.position),a=Math.min(n.position+n.length,r);n.length=Math.max(0,n.length-(a-o)),n.position=Math.min(n.position,e.position)}break}return n}};var Es=class t{baseUrl=`${Et.apiUrl}/api/journal`;http=c(kt);getJournal(i,e,n){let r=new Gt;if(n==="childView")r=r.set("childId",i);else if(n==="groupView")r=r.set("groupId",e);else return console.error(`Attempted to fetch journal with unknown view: ${n}`),lo(()=>new Error("Invalid view type provided to JournalService"));return this.http.get(this.baseUrl,{params:r})}getJournalByDate(i,e){let n=new Gt;return n=n.set("childId",i),n=n.set("date",e),this.http.get(this.baseUrl,{params:n})}static \u0275fac=function(e){return new(e||t)};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})};var XV=["journalContent"],eh=class t{journalSocket=c(Xr);differ=new Xf;operationalTransformer=new Jf;journalService=c(Es);textArea=Xn.required("journalContent");childSignal=Le.required();contentSignal=Le.required();groupSignal=Le.required();async ngOnInit(){await this.journalSocket.ensureConnected(),this.journalSocket.getMessages("journalMessages").subscribe(i=>{let e=i,n=e.operation;if(this.isMyOwnAck(e))this.inFlight.shift();else{for(let r of this.inFlight)n=this.operationalTransformer.transformClient(n,r);this.applyToLocalContent(n)}this.serverRevision=e.serverRevision}),this.loadJournal()}ngOnChanges(){let i=this.getRoom();this.journalSocket.setJournalRoom(i),this.loadJournal()}text=I("");prevText="";serverRevision=0;sequence=0;inFlight=[];getRoom(){return this.contentSignal()==="childView"?"journal:child:"+this.childSignal().id+":"+ji():"journal:group:"+this.groupSignal().id+":"+ji()}isMyOwnAck(i){return i.userId.toString()===sessionStorage.getItem("UserId")&&this.inFlight.length>0}loadJournal(){this.journalService.getJournal(this.childSignal().id,this.groupSignal().id,this.contentSignal()).subscribe({next:i=>{this.text.set(i.content),this.serverRevision=i.serverRevision,this.sequence=0,this.inFlight=[]}})}applyToLocalContent(i){let e=i.position;switch(i.type){case"INSERT":this.textArea().nativeElement.setRangeText(i.text,e,e,"preserve");break;case"DELETE":this.textArea().nativeElement.setRangeText("",e,e+i.length,"preserve");break}this.text.set(this.textArea().nativeElement.value),this.prevText=this.text()}ngOnDestroy(){this.journalSocket.leaveJournalRoom()}onInput(i){this.sequence++;let e=i.target,n=e.value;this.prevText=this.text();let r=e.selectionStart,o=this.differ.getDiff(this.prevText,n,r);this.text.set(n);let a;switch(o.operation){case"DELETE":a={type:"DELETE",position:o.idx,length:o.length};break;case"INSERT":a={type:"INSERT",position:o.idx,text:o.value};break;case"REPLACEMENT":a={type:"DELETE",position:o.idx,length:o.length},this.sendOperation(a),this.sequence++,a={type:"INSERT",position:o.idx,text:o.value};break}this.sendOperation(a)}sendOperation(i){let e={clientRevision:this.serverRevision,operation:i,sequence:this.sequence};this.inFlight.push(i),this.journalSocket.sendJournalUpdate(e)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=D({type:t,selectors:[["main-live-journal"]],viewQuery:function(e,n){e&1&&Di(n.textArea,XV,5),e&2&&xi()},inputs:{childSignal:[1,"childSignal"],contentSignal:[1,"contentSignal"],groupSignal:[1,"groupSignal"]},outputs:{childSignal:"childSignalChange",contentSignal:"contentSignalChange",groupSignal:"groupSignalChange"},features:[Fe],decls:3,vars:1,consts:[["journalContent",""],["matInput","",3,"input","ngModel"]],template:function(e,n){e&1&&(m(0,"mat-form-field")(1,"textarea",1,0),E("input",function(o){return n.onInput(o)}),f()()),e&2&&(p(),R("ngModel",n.text()))},dependencies:[jt,ln,fs,Bn,Pi,Yo],styles:["mat-tab-group[_ngcontent-%COMP%]{height:100%}mat-tab-group[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{height:100%}mat-mdc-tab-body-wrapper[_ngcontent-%COMP%]{height:100%}  .mat-mdc-form-field-flex{height:100%}  .mat-mdc-form-field-infix{height:100%}mat-form-field[_ngcontent-%COMP%]{width:100%;box-sizing:border-box;height:100%}textarea[_ngcontent-%COMP%]{width:100%;height:100%!important;min-height:20vh;margin-bottom:1em;padding:0;box-sizing:content-box;resize:none;overflow-y:scroll}"]})};var th=class t{url=`${Et.apiUrl}/api/group`;http=c(kt);getGroups(){return this.http.get(this.url)}static \u0275fac=function(e){return new(e||t)};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})};var nh=class t{url=`${Et.apiUrl}/api/user/teacher`;colorUrl=`${Et.apiUrl}/api/user/color`;http=c(kt);getUser(i){let e=new Gt().set("teacherId",i);return this.http.get(this.url,{params:e})}updateColor(i){return this.http.patch(this.colorUrl,{color:i})}static \u0275fac=function(e){return new(e||t)};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})};function JV(t,i){if(t&1){let e=Ue();m(0,"div",1)(1,"button",2),E("click",function(){ue(e);let r=S();return me(r.action())}),g(2),f()()}if(t&2){let e=S();p(2),be(" ",e.data.action," ")}}var e2=["label"];function t2(t,i){}var n2=Math.pow(2,31)-1,Pc=class{_overlayRef;instance;containerInstance;_afterDismissed=new x;_afterOpened=new x;_onAction=new x;_durationTimeoutId;_dismissedByAction=!1;constructor(i,e){this._overlayRef=e,this.containerInstance=i,i._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(i){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(i,n2))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}},bI=new b("MatSnackBarData"),Ms=class{politeness="polite";announcementMessage="";viewContainerRef;duration=0;panelClass;direction;data=null;horizontalPosition="center";verticalPosition="bottom"},i2=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=A({type:t,selectors:[["","matSnackBarLabel",""]],hostAttrs:[1,"mat-mdc-snack-bar-label","mdc-snackbar__label"]})}return t})(),r2=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=A({type:t,selectors:[["","matSnackBarActions",""]],hostAttrs:[1,"mat-mdc-snack-bar-actions","mdc-snackbar__actions"]})}return t})(),o2=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=A({type:t,selectors:[["","matSnackBarAction",""]],hostAttrs:[1,"mat-mdc-snack-bar-action","mdc-snackbar__action"]})}return t})(),a2=(()=>{class t{snackBarRef=c(Pc);data=c(bI);constructor(){}action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=D({type:t,selectors:[["simple-snack-bar"]],hostAttrs:[1,"mat-mdc-simple-snack-bar"],exportAs:["matSnackBar"],decls:3,vars:2,consts:[["matSnackBarLabel",""],["matSnackBarActions",""],["matButton","","matSnackBarAction","",3,"click"]],template:function(n,r){n&1&&(m(0,"div",0),g(1),f(),W(2,JV,3,1,"div",1)),n&2&&(p(),be(" ",r.data.message,`
`),p(),G(r.hasAction?2:-1))},dependencies:[Bt,i2,r2,o2],styles:[`.mat-mdc-simple-snack-bar {
  display: flex;
}
.mat-mdc-simple-snack-bar .mat-mdc-snack-bar-label {
  max-height: 50vh;
  overflow: auto;
}
`],encapsulation:2,changeDetection:0})}return t})(),xb="_mat-snack-bar-enter",Eb="_mat-snack-bar-exit",s2=(()=>{class t extends zr{_ngZone=c(L);_elementRef=c(V);_changeDetectorRef=c(we);_platform=c(ce);_animationsDisabled=Ve();snackBarConfig=c(Ms);_document=c(Y);_trackedModals=new Set;_enterFallback;_exitFallback;_injector=c($);_announceDelay=150;_announceTimeoutId;_destroyed=!1;_portalOutlet;_onAnnounce=new x;_onExit=new x;_onEnter=new x;_animationState="void";_live;_label;_role;_liveElementId=c(Qe).getId("mat-snack-bar-container-live-");constructor(){super();let e=this.snackBarConfig;e.politeness==="assertive"&&!e.announcementMessage?this._live="assertive":e.politeness==="off"?this._live="off":this._live="polite",this._platform.FIREFOX&&(this._live==="polite"&&(this._role="status"),this._live==="assertive"&&(this._role="alert"))}attachComponentPortal(e){this._assertNotAttached();let n=this._portalOutlet.attachComponentPortal(e);return this._afterPortalAttached(),n}attachTemplatePortal(e){this._assertNotAttached();let n=this._portalOutlet.attachTemplatePortal(e);return this._afterPortalAttached(),n}attachDomPortal=e=>{this._assertNotAttached();let n=this._portalOutlet.attachDomPortal(e);return this._afterPortalAttached(),n};onAnimationEnd(e){e===Eb?this._completeExit():e===xb&&(clearTimeout(this._enterFallback),this._ngZone.run(()=>{this._onEnter.next(),this._onEnter.complete()}))}enter(){this._destroyed||(this._animationState="visible",this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce(),this._animationsDisabled?We(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(xb)))},{injector:this._injector}):(clearTimeout(this._enterFallback),this._enterFallback=setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-snack-bar-fallback-visible"),this.onAnimationEnd(xb)},200)))}exit(){return this._destroyed?q(void 0):(this._ngZone.run(()=>{this._animationState="hidden",this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.setAttribute("mat-exit",""),clearTimeout(this._announceTimeoutId),this._animationsDisabled?We(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(Eb)))},{injector:this._injector}):(clearTimeout(this._exitFallback),this._exitFallback=setTimeout(()=>this.onAnimationEnd(Eb),200))}),this._onExit)}ngOnDestroy(){this._destroyed=!0,this._clearFromModals(),this._completeExit()}_completeExit(){clearTimeout(this._exitFallback),queueMicrotask(()=>{this._onExit.next(),this._onExit.complete()})}_afterPortalAttached(){let e=this._elementRef.nativeElement,n=this.snackBarConfig.panelClass;n&&(Array.isArray(n)?n.forEach(a=>e.classList.add(a)):e.classList.add(n)),this._exposeToModals();let r=this._label.nativeElement,o="mdc-snackbar__label";r.classList.toggle(o,!r.querySelector(`.${o}`))}_exposeToModals(){let e=this._liveElementId,n=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let r=0;r<n.length;r++){let o=n[r],a=o.getAttribute("aria-owns");this._trackedModals.add(o),a?a.indexOf(e)===-1&&o.setAttribute("aria-owns",a+" "+e):o.setAttribute("aria-owns",e)}}_clearFromModals(){this._trackedModals.forEach(e=>{let n=e.getAttribute("aria-owns");if(n){let r=n.replace(this._liveElementId,"").trim();r.length>0?e.setAttribute("aria-owns",r):e.removeAttribute("aria-owns")}}),this._trackedModals.clear()}_assertNotAttached(){this._portalOutlet.hasAttached()}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{if(this._destroyed)return;let e=this._elementRef.nativeElement,n=e.querySelector("[aria-hidden]"),r=e.querySelector("[aria-live]");if(n&&r){let o=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&n.contains(document.activeElement)&&(o=document.activeElement),n.removeAttribute("aria-hidden"),r.appendChild(n),o?.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=D({type:t,selectors:[["mat-snack-bar-container"]],viewQuery:function(n,r){if(n&1&&xe(cn,7)(e2,7),n&2){let o;F(o=P())&&(r._portalOutlet=o.first),F(o=P())&&(r._label=o.first)}},hostAttrs:[1,"mdc-snackbar","mat-mdc-snack-bar-container"],hostVars:6,hostBindings:function(n,r){n&1&&E("animationend",function(a){return r.onAnimationEnd(a.animationName)})("animationcancel",function(a){return r.onAnimationEnd(a.animationName)}),n&2&&U("mat-snack-bar-container-enter",r._animationState==="visible")("mat-snack-bar-container-exit",r._animationState==="hidden")("mat-snack-bar-container-animations-enabled",!r._animationsDisabled)},features:[ge],decls:6,vars:3,consts:[["label",""],[1,"mdc-snackbar__surface","mat-mdc-snackbar-surface"],[1,"mat-mdc-snack-bar-label"],["aria-hidden","true"],["cdkPortalOutlet",""]],template:function(n,r){n&1&&(m(0,"div",1)(1,"div",2,0)(3,"div",3),lt(4,t2,0,0,"ng-template",4),f(),k(5,"div"),f()()),n&2&&(p(5),Z("aria-live",r._live)("role",r._role)("id",r._liveElementId))},dependencies:[cn],styles:[`@keyframes _mat-snack-bar-enter {
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
`],encapsulation:2})}return t})(),l2=new b("mat-snack-bar-default-options",{providedIn:"root",factory:()=>new Ms}),yI=(()=>{class t{_live=c(ac);_injector=c($);_breakpointObserver=c(oc);_parentSnackBar=c(t,{optional:!0,skipSelf:!0});_defaultConfig=c(l2);_animationsDisabled=Ve();_snackBarRefAtThisLevel=null;simpleSnackBarComponent=a2;snackBarContainerComponent=s2;handsetCssClass="mat-mdc-snack-bar-handset";get _openedSnackBarRef(){let e=this._parentSnackBar;return e?e._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(e){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=e:this._snackBarRefAtThisLevel=e}constructor(){}openFromComponent(e,n){return this._attach(e,n)}openFromTemplate(e,n){return this._attach(e,n)}open(e,n="",r){let o=C(C({},this._defaultConfig),r);return o.data={message:e,action:n},o.announcementMessage===e&&(o.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,o)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(e,n){let r=n&&n.viewContainerRef&&n.viewContainerRef.injector,o=$.create({parent:r||this._injector,providers:[{provide:Ms,useValue:n}]}),a=new Cn(this.snackBarContainerComponent,n.viewContainerRef,o),s=e.attach(a);return s.instance.snackBarConfig=n,s.instance}_attach(e,n){let r=C(C(C({},new Ms),this._defaultConfig),n),o=this._createOverlay(r),a=this._attachSnackBarContainer(o,r),s=new Pc(a,o);if(e instanceof ht){let l=new wn(e,null,{$implicit:r.data,snackBarRef:s});s.instance=a.attachTemplatePortal(l)}else{let l=this._createInjector(r,s),d=new Cn(e,void 0,l),u=a.attachComponentPortal(d);s.instance=u.instance}return this._breakpointObserver.observe(EE.HandsetPortrait).pipe(ye(o.detachments())).subscribe(l=>{o.overlayElement.classList.toggle(this.handsetCssClass,l.matches)}),r.announcementMessage&&a._onAnnounce.subscribe(()=>{this._live.announce(r.announcementMessage,r.politeness)}),this._animateSnackBar(s,r),this._openedSnackBarRef=s,this._openedSnackBarRef}_animateSnackBar(e,n){e.afterDismissed().subscribe(()=>{this._openedSnackBarRef==e&&(this._openedSnackBarRef=null),n.announcementMessage&&this._live.clear()}),n.duration&&n.duration>0&&e.afterOpened().subscribe(()=>e._dismissAfter(n.duration)),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{e.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):e.containerInstance.enter()}_createOverlay(e){let n=new Hi;n.direction=e.direction;let r=hr(this._injector),o=e.direction==="rtl",a=e.horizontalPosition==="left"||e.horizontalPosition==="start"&&!o||e.horizontalPosition==="end"&&o,s=!a&&e.horizontalPosition!=="center";return a?r.left("0"):s?r.right("0"):r.centerHorizontally(),e.verticalPosition==="top"?r.top("0"):r.bottom("0"),n.positionStrategy=r,n.disableAnimations=this._animationsDisabled,Ui(this._injector,n)}_createInjector(e,n){let r=e&&e.viewContainerRef&&e.viewContainerRef.injector;return $.create({parent:r||this._injector,providers:[{provide:Pc,useValue:n},{provide:bI,useValue:e.data}]})}static \u0275fac=function(n){return new(n||t)};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var ih=class t{_snackBar=c(yI);userService=c(nh);teacherColor=Le("#ffffff");userDataObservable=this.userService.getUser(Number(sessionStorage.getItem("UserId")));currentUser=this.userDataObservable.pipe();ngOnInit(){this.userDataObservable.subscribe(i=>{this.teacherColor.set(i.color)})}updateColor(){console.log("From updatecolor",this.teacherColor()),this.userService.updateColor(this.teacherColor()).subscribe(()=>{this._snackBar.open("Din f\xE4rg uppdateras n\xE4sta g\xE5ng du loggar in.","St\xE4ng",{duration:2500,verticalPosition:"top"})})}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=D({type:t,selectors:[["account-page"]],inputs:{teacherColor:[1,"teacherColor"]},outputs:{teacherColor:"teacherColorChange"},decls:33,vars:10,consts:[["appearance","outlined"],[1,"card-header-segment","card-header-left"],["mat-card-avatar","",1,"icon-display"],[1,"hamburger"],[1,"card-header-segment","card-header-right"],["type","color","matInput","","matNativeControl","","name","name",3,"input","ngModelChange","ngModel"]],template:function(e,n){if(e&1&&(m(0,"mat-card",0)(1,"mat-card-header")(2,"div",1)(3,"div",2)(4,"mat-icon"),g(5,"person"),f()(),m(6,"div",3)(7,"mat-card-title"),g(8),Ml(9,"async"),f(),m(10,"mat-card-subtitle"),g(11),Ml(12,"async"),f()()(),m(13,"div",4)(14,"h2"),g(15,"Din f\xE4rg"),f(),m(16,"input",5),E("input",function(){return n.updateColor()}),et("ngModelChange",function(o){return ke(n.teacherColor,o)||(n.teacherColor=o),o}),f()()(),m(17,"mat-card-content")(18,"p"),g(19),Ml(20,"async"),f(),m(21,"p"),g(22,"Exempeltext"),f(),m(23,"p"),g(24,"Exempeltext"),f(),m(25,"p"),g(26,"Exempeltext"),f(),m(27,"p"),g(28,"Exempeltext"),f(),m(29,"p"),g(30,"Exempeltext"),f(),m(31,"p"),g(32,"Exempeltext"),f()()()),e&2){let r,o,a;p(8),se((r=Il(9,4,n.currentUser))==null?null:r.name),p(3),se((o=Il(12,6,n.currentUser))==null?null:o.role),p(5),Je("ngModel",n.teacherColor),p(3),be("Mejladress: ",(a=Il(20,8,n.currentUser))==null?null:a.email)}},dependencies:[Ri,At,Xx,sn,Fn,Kx,Hm,Vn,Yt,Ht,Li,ln,fs,Bn,Pi,Yo,T_],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;overflow:hidden;box-sizing:border-box}.icon-display[_ngcontent-%COMP%]{transform:scale(2);display:flex;align-items:center;justify-content:center;overflow:hidden}p[_ngcontent-%COMP%]{font:var(--mat-sys-body-large)}mat-card[_ngcontent-%COMP%]{margin-top:7em;box-sizing:border-box;flex:1;box-shadow:var(--mat-sys-level2);background:var(--mat-sys-surface-variant)}mat-card-header[_ngcontent-%COMP%]{width:100%;display:flex}.card-header-left[_ngcontent-%COMP%]{flex:2;display:flex;flex-direction:row;justify-content:flex-start;align-items:center;gap:2em}.hamburger[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:flex-start}.card-header-right[_ngcontent-%COMP%]{flex:1;display:flex;align-items:center;justify-content:center;flex-direction:column;font-family:var(--mat-sys-label-large)}"]})};var rh=class t{childSignal=Le.required();static \u0275fac=function(e){return new(e||t)};static \u0275cmp=D({type:t,selectors:[["information"]],inputs:{childSignal:[1,"childSignal"]},outputs:{childSignal:"childSignalChange"},decls:34,vars:1,consts:[["journalContent",""],[1,"subrow"],["id","left-card"],[1,"header-text"],["matInput",""],[1,"color"],["cdkScrollable","",1,"subcard"],[1,"gap"],[1,"kontakt"]],template:function(e,n){e&1&&(m(0,"div",1)(1,"mat-card",2)(2,"mat-card-header",3),g(3),f(),m(4,"mat-form-field"),k(5,"textarea",4,0),f()(),m(7,"mat-card",5)(8,"mat-card-header",3),g(9," Kontaktinformation "),f(),m(10,"mat-card",6)(11,"mat-card-content",7)(12,"p",8),g(13,"Kontakt 1"),f(),m(14,"p"),g(15,"Namn: V\xE5rdnadshavare Exempelsson"),f(),k(16,"mat-divider"),m(17,"p"),g(18,"Telefonnummer: 072-555-83-34"),f(),k(19,"mat-divider"),m(20,"p"),g(21,"Mejl: V\xE5rdnadshavare.Exempelsson@outlook.se"),f(),k(22,"mat-divider"),m(23,"p",8),g(24,"Kontakt 2"),f(),m(25,"p"),g(26,"Namn: V\xE5rdnadnadshavare Exempelsson"),f(),k(27,"mat-divider"),m(28,"p"),g(29,"Telefonnummer: 072-365-555-34"),f(),k(30,"mat-divider"),m(31,"p"),g(32,"Mejl: V\xE5rdnadshavare.Exempelsson@outlook.se"),f(),k(33,"mat-divider"),f()()()()),e&2&&(p(3),be(" Specialbehov ",n.childSignal().name," "))},dependencies:[BM,At,ln,jt,Fn,sn,en],styles:["[_nghost-%COMP%]{display:flex;height:100%}.subrow[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex:1;justify-content:center;height:100%;gap:1em}.subrow[_ngcontent-%COMP%] > mat-card[_ngcontent-%COMP%]{margin-bottom:.5em;max-height:100%}.subrow[_ngcontent-%COMP%] > mat-card[_ngcontent-%COMP%] > mat-card[_ngcontent-%COMP%]{overflow-y:scroll}mat-card-header[_ngcontent-%COMP%]{display:flex;justify-content:center;border:2px;font:var(--mat-sys-headline-small)}mat-form-field[_ngcontent-%COMP%]{flex:1;margin:1em;box-shadow:var(--mat-sys-level2)}textarea[_ngcontent-%COMP%]{min-height:20vh;resize:none;overflow-y:auto}mat-card[_ngcontent-%COMP%]{box-shadow:var(--mat-sys-level2);flex:1;gap:.5em}.color[_ngcontent-%COMP%]{background:var(--mat-sys-inverse-primary)}.subcard[_ngcontent-%COMP%]{box-shadow:var(--mat-sys-level2);background-color:var(--mat-sys-surface-variant);flex:1;margin:1em;border-radius:0%}.info-subcard[_ngcontent-%COMP%]{box-shadow:var(--mat-sys-level2);background-color:var(--mat-sys-surface-variant);flex:1;margin:1em;flex-direction:row;justify-content:center}.flex-div[_ngcontent-%COMP%]{flex:1}.kontakt[_ngcontent-%COMP%]{font:var(--mat-sys-label-large);justify-self:center}.header-text[_ngcontent-%COMP%]{font-weight:400}#left-card[_ngcontent-%COMP%]{background:var(--mat-sys-inverse-primary);border-top-left-radius:0%}"]})};var oh=class t{fakeNews="Finally, one I can answer! I literally have never been able to answer any askreddit question in my entire life,and have never posted anything on reddit until this exact moment that is happening right now. Writing this on mobile,sorry for bad formatting, also english is my 6th language so there might be one wrong word, TLDR at the bottom. ";fakeNewsLong="Finally, one I can answer! I literally have never been able to answer any askreddit question in my entire life,and have never posted anything on reddit until this exact moment that is happening right now. Writing this on mobile,sorry for bad formatting, also english is my 6th language so there might be one wrong word, TLDR at the bottom. Finally, one I can answer! I literally have never been able to answer any askreddit question in my entire life,and have never posted anything on reddit until this exact moment that is happening right now. Writing this on mobile,sorry for bad formatting, also english is my 6th language so there might be one wrong word, TLDR at the bottom. ";static \u0275fac=function(e){return new(e||t)};static \u0275cmp=D({type:t,selectors:[["homepage"]],decls:87,vars:5,consts:[[1,"main-card"],[1,"school-title"],[1,"main-body"],[1,"news"],[1,"news-header"],[1,"news-content"],[1,"mock-news-boxes"],[1,"news-text"],[1,"news-title"],[1,"staff"],[1,"mock-teachers"],[1,"namn"]],template:function(e,n){e&1&&(m(0,"mat-card",0)(1,"mat-card-header",1)(2,"p"),g(3,"K\xE4ndpersonsnamn F\xF6rskola"),f()(),k(4,"mat-divider"),m(5,"mat-card-content",2)(6,"mat-card",3)(7,"mat-card-header",4)(8,"p")(9,"mat-icon"),g(10,"newspaper"),f(),g(11," Nyheter "),f()(),k(12,"mat-divider"),m(13,"mat-card-content",5)(14,"mat-card",6)(15,"p",7)(16,"span",8),g(17,"CLICKBAIT TITEL"),f(),g(18),f()(),m(19,"mat-card",6)(20,"p",7)(21,"span",8),g(22,"CLICKBAIT TITEL"),f(),g(23),f()(),m(24,"mat-card",6)(25,"p",7)(26,"span",8),g(27,"CLICKBAIT TITEL"),f(),g(28),f()(),m(29,"mat-card",6)(30,"p",7)(31,"span",8),g(32,"CLICKBAIT TITEL"),f(),g(33),f()(),m(34,"mat-card",6)(35,"p",7)(36,"span",8),g(37,"CLICKBAIT TITEL"),f(),g(38),f()()()(),m(39,"mat-card",9)(40,"mat-card-header",4)(41,"p")(42,"mat-icon"),g(43,"diversity_3"),f(),g(44," Personal "),f()(),k(45,"mat-divider"),m(46,"mat-card-content",5)(47,"mat-card",10)(48,"mat-icon"),g(49,"face"),f(),m(50,"p",11),g(51,"L\xE4rare L\xE4rarsson"),f()(),m(52,"mat-card",10)(53,"mat-icon"),g(54,"face"),f(),m(55,"p",11),g(56,"L\xE4rare L\xE4rarsson"),f()(),m(57,"mat-card",10)(58,"mat-icon"),g(59,"face"),f(),m(60,"p",11),g(61,"L\xE4rare L\xE4rarsson"),f()(),m(62,"mat-card",10)(63,"mat-icon"),g(64,"face"),f(),m(65,"p",11),g(66,"L\xE4rare L\xE4rarsson"),f()(),m(67,"mat-card",10)(68,"mat-icon"),g(69,"face"),f(),m(70,"p",11),g(71,"L\xE4rare L\xE4rarsson"),f()(),m(72,"mat-card",10)(73,"mat-icon"),g(74,"face"),f(),m(75,"p",11),g(76,"L\xE4rare L\xE4rarsson"),f()(),m(77,"mat-card",10)(78,"mat-icon"),g(79,"face"),f(),m(80,"p",11),g(81,"L\xE4rare L\xE4rarsson"),f()(),m(82,"mat-card",10)(83,"mat-icon"),g(84,"face"),f(),m(85,"p",11),g(86,"L\xE4rare L\xE4rarsson"),f()()()()()()),e&2&&(p(18),be(" ",n.fakeNews," "),p(5),be(" ",n.fakeNewsLong," "),p(5),be(" ",n.fakeNews," "),p(5),be(" ",n.fakeNews," "),p(5),be(" ",n.fakeNewsLong," "))},dependencies:[At,Fn,sn,en,Yt],styles:["[_nghost-%COMP%]{display:flex;flex:1;height:100%;min-height:0;width:100%}.main-card[_ngcontent-%COMP%]{box-shadow:var(--mat-sys-level1);display:flex;flex-direction:column;flex:1;min-height:0;width:100%;overflow:hidden}.school-title[_ngcontent-%COMP%]{background:var(--mat-sys-inverse-primary);font:var(--mat-sys-title-large);font-weight:400;font-size:xx-large;display:flex;justify-content:center}.main-body[_ngcontent-%COMP%]{display:flex;flex-direction:row;background-color:var(--mat-sys-surface-dim);gap:1em;flex:1;min-height:0}mat-card[_ngcontent-%COMP%]{box-shadow:var(--mat-sys-level2)}.news[_ngcontent-%COMP%]{display:flex;margin-top:1em;flex:1;flex-direction:column;min-height:0;overflow:hidden}.staff[_ngcontent-%COMP%]{display:flex;margin-top:1em;flex:.5;flex-direction:column;min-height:0;overflow:hidden}.news-header[_ngcontent-%COMP%]{flex-shrink:0;justify-content:center;align-items:center;display:flex;background:var(--mat-sys-surface-variant);font-weight:400!important;font-size:x-large}.mock-news-boxes[_ngcontent-%COMP%]{margin:.8em;background-color:var(--mat-sys-surface-variant)}.news-text[_ngcontent-%COMP%]{margin:.3em}.news-title[_ngcontent-%COMP%]{font-size:medium;font-weight:700}.news-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex:1;min-height:0;overflow-y:auto;margin:0 0 1em;padding:0 .5em}mat-icon[_ngcontent-%COMP%]{margin-left:.5em}.mock-teachers[_ngcontent-%COMP%]{margin:.8em;display:flex;flex-direction:row;gap:.3em;align-items:center;justify-content:flex-start;background-color:var(--mat-sys-surface-variant)}.namn[_ngcontent-%COMP%]{font:var(--mat-sys-body-large)}"]})};var Mb=new b("MAT_DATE_LOCALE",{providedIn:"root",factory:()=>c(Na)}),Is="Method not implemented",dn=class{locale;_localeChanges=new x;localeChanges=this._localeChanges;setTime(i,e,n,r){throw new Error(Is)}getHours(i){throw new Error(Is)}getMinutes(i){throw new Error(Is)}getSeconds(i){throw new Error(Is)}parseTime(i,e){throw new Error(Is)}addSeconds(i,e){throw new Error(Is)}getValidDateOrNull(i){return this.isDateInstance(i)&&this.isValid(i)?i:null}deserialize(i){return i==null||this.isDateInstance(i)&&this.isValid(i)?i:this.invalid()}setLocale(i){this.locale=i,this._localeChanges.next()}compareDate(i,e){return this.getYear(i)-this.getYear(e)||this.getMonth(i)-this.getMonth(e)||this.getDate(i)-this.getDate(e)}compareTime(i,e){return this.getHours(i)-this.getHours(e)||this.getMinutes(i)-this.getMinutes(e)||this.getSeconds(i)-this.getSeconds(e)}sameDate(i,e){if(i&&e){let n=this.isValid(i),r=this.isValid(e);return n&&r?!this.compareDate(i,e):n==r}return i==e}sameTime(i,e){if(i&&e){let n=this.isValid(i),r=this.isValid(e);return n&&r?!this.compareTime(i,e):n==r}return i==e}clampDate(i,e,n){return e&&this.compareDate(i,e)<0?e:n&&this.compareDate(i,n)>0?n:i}},Jo=new b("mat-date-formats");var c2=["mat-calendar-body",""];function d2(t,i){return this._trackRow(i)}var MI=(t,i)=>i.id;function u2(t,i){if(t&1&&(Ee(0,"tr",0)(1,"td",3),g(2),Te()()),t&2){let e=S();p(),Ei("padding-top",e._cellPadding)("padding-bottom",e._cellPadding),Z("colspan",e.numCols),p(),be(" ",e.label," ")}}function m2(t,i){if(t&1&&(Ee(0,"td",3),g(1),Te()),t&2){let e=S(2);Ei("padding-top",e._cellPadding)("padding-bottom",e._cellPadding),Z("colspan",e._firstRowOffset),p(),be(" ",e._firstRowOffset>=e.labelMinRequiredCells?e.label:""," ")}}function f2(t,i){if(t&1){let e=Ue();Ee(0,"td",6)(1,"button",7),An("click",function(r){let o=ue(e).$implicit,a=S(2);return me(a._cellClicked(o,r))})("focus",function(r){let o=ue(e).$implicit,a=S(2);return me(a._emitActiveDateChange(o,r))}),Ee(2,"span",8),g(3),Te(),rn(4,"span",9),Te()()}if(t&2){let e=i.$implicit,n=i.$index,r=S().$index,o=S();Ei("width",o._cellWidth)("padding-top",o._cellPadding)("padding-bottom",o._cellPadding),Z("data-mat-row",r)("data-mat-col",n),p(),Dt(e.cssClasses),U("mat-calendar-body-disabled",!e.enabled)("mat-calendar-body-active",o._isActiveCell(r,n))("mat-calendar-body-range-start",o._isRangeStart(e.compareValue))("mat-calendar-body-range-end",o._isRangeEnd(e.compareValue))("mat-calendar-body-in-range",o._isInRange(e.compareValue))("mat-calendar-body-comparison-bridge-start",o._isComparisonBridgeStart(e.compareValue,r,n))("mat-calendar-body-comparison-bridge-end",o._isComparisonBridgeEnd(e.compareValue,r,n))("mat-calendar-body-comparison-start",o._isComparisonStart(e.compareValue))("mat-calendar-body-comparison-end",o._isComparisonEnd(e.compareValue))("mat-calendar-body-in-comparison-range",o._isInComparisonRange(e.compareValue))("mat-calendar-body-preview-start",o._isPreviewStart(e.compareValue))("mat-calendar-body-preview-end",o._isPreviewEnd(e.compareValue))("mat-calendar-body-in-preview",o._isInPreview(e.compareValue)),Wt("tabIndex",o._isActiveCell(r,n)?0:-1),Z("aria-label",e.ariaLabel)("aria-disabled",!e.enabled||null)("aria-pressed",o._isSelected(e.compareValue))("aria-current",o.todayValue===e.compareValue?"date":null)("aria-describedby",o._getDescribedby(e.compareValue)),p(),U("mat-calendar-body-selected",o._isSelected(e.compareValue))("mat-calendar-body-comparison-identical",o._isComparisonIdentical(e.compareValue))("mat-calendar-body-today",o.todayValue===e.compareValue),p(),be(" ",e.displayValue," ")}}function h2(t,i){if(t&1&&(Ee(0,"tr",1),W(1,m2,2,6,"td",4),Ge(2,f2,5,49,"td",5,MI),Te()),t&2){let e=i.$implicit,n=i.$index,r=S();p(),G(n===0&&r._firstRowOffset?1:-1),p(),qe(e)}}function p2(t,i){if(t&1&&(m(0,"th",2)(1,"span",6),g(2),f(),m(3,"span",3),g(4),f()()),t&2){let e=i.$implicit;p(2),se(e.long),p(2),se(e.narrow)}}var g2=["*"];function _2(t,i){}function v2(t,i){if(t&1){let e=Ue();m(0,"mat-month-view",4),et("activeDateChange",function(r){ue(e);let o=S();return ke(o.activeDate,r)||(o.activeDate=r),me(r)}),E("_userSelection",function(r){ue(e);let o=S();return me(o._dateSelected(r))})("dragStarted",function(r){ue(e);let o=S();return me(o._dragStarted(r))})("dragEnded",function(r){ue(e);let o=S();return me(o._dragEnded(r))}),f()}if(t&2){let e=S();Je("activeDate",e.activeDate),R("selected",e.selected)("dateFilter",e.dateFilter)("maxDate",e.maxDate)("minDate",e.minDate)("dateClass",e.dateClass)("comparisonStart",e.comparisonStart)("comparisonEnd",e.comparisonEnd)("startDateAccessibleName",e.startDateAccessibleName)("endDateAccessibleName",e.endDateAccessibleName)("activeDrag",e._activeDrag)}}function b2(t,i){if(t&1){let e=Ue();m(0,"mat-year-view",5),et("activeDateChange",function(r){ue(e);let o=S();return ke(o.activeDate,r)||(o.activeDate=r),me(r)}),E("monthSelected",function(r){ue(e);let o=S();return me(o._monthSelectedInYearView(r))})("selectedChange",function(r){ue(e);let o=S();return me(o._goToDateInView(r,"month"))}),f()}if(t&2){let e=S();Je("activeDate",e.activeDate),R("selected",e.selected)("dateFilter",e.dateFilter)("maxDate",e.maxDate)("minDate",e.minDate)("dateClass",e.dateClass)}}function y2(t,i){if(t&1){let e=Ue();m(0,"mat-multi-year-view",6),et("activeDateChange",function(r){ue(e);let o=S();return ke(o.activeDate,r)||(o.activeDate=r),me(r)}),E("yearSelected",function(r){ue(e);let o=S();return me(o._yearSelectedInMultiYearView(r))})("selectedChange",function(r){ue(e);let o=S();return me(o._goToDateInView(r,"year"))}),f()}if(t&2){let e=S();Je("activeDate",e.activeDate),R("selected",e.selected)("dateFilter",e.dateFilter)("maxDate",e.maxDate)("minDate",e.minDate)("dateClass",e.dateClass)}}function C2(t,i){}var w2=["button"],D2=[[["","matDatepickerToggleIcon",""]]],x2=["[matDatepickerToggleIcon]"];function E2(t,i){t&1&&(_i(),m(0,"svg",2),k(1,"path",3),f())}var Ts=(()=>{class t{changes=new x;calendarLabel="Calendar";openCalendarLabel="Open calendar";closeCalendarLabel="Close calendar";prevMonthLabel="Previous month";nextMonthLabel="Next month";prevYearLabel="Previous year";nextYearLabel="Next year";prevMultiYearLabel="Previous 24 years";nextMultiYearLabel="Next 24 years";switchToMonthViewLabel="Choose date";switchToMultiYearViewLabel="Choose month and year";startDateLabel="Start date";endDateLabel="End date";comparisonDateLabel="Comparison range";formatYearRange(e,n){return`${e} \u2013 ${n}`}formatYearRangeLabel(e,n){return`${e} to ${n}`}static \u0275fac=function(n){return new(n||t)};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),M2=0,Vc=class{value;displayValue;ariaLabel;enabled;compareValue;rawValue;id=M2++;cssClasses;constructor(i,e,n,r,o,a=i,s){this.value=i,this.displayValue=e,this.ariaLabel=n,this.enabled=r,this.compareValue=a,this.rawValue=s,this.cssClasses=o instanceof Set?Array.from(o):o}},I2={passive:!1,capture:!0},ah={passive:!0,capture:!0},CI={passive:!0},Ss=(()=>{class t{_elementRef=c(V);_ngZone=c(L);_platform=c(ce);_intl=c(Ts);_eventCleanups;_skipNextFocus=!1;_focusActiveCellAfterViewChecked=!1;label;rows;todayValue;startValue;endValue;labelMinRequiredCells;numCols=7;activeCell=0;ngAfterViewChecked(){this._focusActiveCellAfterViewChecked&&(this._focusActiveCell(),this._focusActiveCellAfterViewChecked=!1)}isRange=!1;cellAspectRatio=1;comparisonStart=null;comparisonEnd=null;previewStart=null;previewEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;selectedValueChange=new M;previewChange=new M;activeDateChange=new M;dragStarted=new M;dragEnded=new M;_firstRowOffset;_cellPadding;_cellWidth;_startDateLabelId;_endDateLabelId;_comparisonStartDateLabelId;_comparisonEndDateLabelId;_didDragSinceMouseDown=!1;_injector=c($);comparisonDateAccessibleName=this._intl.comparisonDateLabel;_trackRow=e=>e;constructor(){let e=c(Se),n=c(Qe);this._startDateLabelId=n.getId("mat-calendar-body-start-"),this._endDateLabelId=n.getId("mat-calendar-body-end-"),this._comparisonStartDateLabelId=n.getId("mat-calendar-body-comparison-start-"),this._comparisonEndDateLabelId=n.getId("mat-calendar-body-comparison-end-"),c(Ye).load(Fi),this._ngZone.runOutsideAngular(()=>{let r=this._elementRef.nativeElement,o=[e.listen(r,"touchmove",this._touchmoveHandler,I2),e.listen(r,"mouseenter",this._enterHandler,ah),e.listen(r,"focus",this._enterHandler,ah),e.listen(r,"mouseleave",this._leaveHandler,ah),e.listen(r,"blur",this._leaveHandler,ah),e.listen(r,"mousedown",this._mousedownHandler,CI),e.listen(r,"touchstart",this._mousedownHandler,CI)];this._platform.isBrowser&&o.push(e.listen("window","mouseup",this._mouseupHandler),e.listen("window","touchend",this._touchendHandler)),this._eventCleanups=o})}_cellClicked(e,n){this._didDragSinceMouseDown||e.enabled&&this.selectedValueChange.emit({value:e.value,event:n})}_emitActiveDateChange(e,n){e.enabled&&this.activeDateChange.emit({value:e.value,event:n})}_isSelected(e){return this.startValue===e||this.endValue===e}ngOnChanges(e){let n=e.numCols,{rows:r,numCols:o}=this;(e.rows||n)&&(this._firstRowOffset=r&&r.length&&r[0].length?o-r[0].length:0),(e.cellAspectRatio||n||!this._cellPadding)&&(this._cellPadding=`${50*this.cellAspectRatio/o}%`),(n||!this._cellWidth)&&(this._cellWidth=`${100/o}%`)}ngOnDestroy(){this._eventCleanups.forEach(e=>e())}_isActiveCell(e,n){let r=e*this.numCols+n;return e&&(r-=this._firstRowOffset),r==this.activeCell}_focusActiveCell(e=!0){We(()=>{setTimeout(()=>{let n=this._elementRef.nativeElement.querySelector(".mat-calendar-body-active");n&&(e||(this._skipNextFocus=!0),n.focus())})},{injector:this._injector})}_scheduleFocusActiveCellAfterViewChecked(){this._focusActiveCellAfterViewChecked=!0}_isRangeStart(e){return Tb(e,this.startValue,this.endValue)}_isRangeEnd(e){return kb(e,this.startValue,this.endValue)}_isInRange(e){return Ab(e,this.startValue,this.endValue,this.isRange)}_isComparisonStart(e){return Tb(e,this.comparisonStart,this.comparisonEnd)}_isComparisonBridgeStart(e,n,r){if(!this._isComparisonStart(e)||this._isRangeStart(e)||!this._isInRange(e))return!1;let o=this.rows[n][r-1];if(!o){let a=this.rows[n-1];o=a&&a[a.length-1]}return o&&!this._isRangeEnd(o.compareValue)}_isComparisonBridgeEnd(e,n,r){if(!this._isComparisonEnd(e)||this._isRangeEnd(e)||!this._isInRange(e))return!1;let o=this.rows[n][r+1];if(!o){let a=this.rows[n+1];o=a&&a[0]}return o&&!this._isRangeStart(o.compareValue)}_isComparisonEnd(e){return kb(e,this.comparisonStart,this.comparisonEnd)}_isInComparisonRange(e){return Ab(e,this.comparisonStart,this.comparisonEnd,this.isRange)}_isComparisonIdentical(e){return this.comparisonStart===this.comparisonEnd&&e===this.comparisonStart}_isPreviewStart(e){return Tb(e,this.previewStart,this.previewEnd)}_isPreviewEnd(e){return kb(e,this.previewStart,this.previewEnd)}_isInPreview(e){return Ab(e,this.previewStart,this.previewEnd,this.isRange)}_getDescribedby(e){if(!this.isRange)return null;if(this.startValue===e&&this.endValue===e)return`${this._startDateLabelId} ${this._endDateLabelId}`;if(this.startValue===e)return this._startDateLabelId;if(this.endValue===e)return this._endDateLabelId;if(this.comparisonStart!==null&&this.comparisonEnd!==null){if(e===this.comparisonStart&&e===this.comparisonEnd)return`${this._comparisonStartDateLabelId} ${this._comparisonEndDateLabelId}`;if(e===this.comparisonStart)return this._comparisonStartDateLabelId;if(e===this.comparisonEnd)return this._comparisonEndDateLabelId}return null}_enterHandler=e=>{if(this._skipNextFocus&&e.type==="focus"){this._skipNextFocus=!1;return}if(e.target&&this.isRange){let n=this._getCellFromElement(e.target);n&&this._ngZone.run(()=>this.previewChange.emit({value:n.enabled?n:null,event:e}))}};_touchmoveHandler=e=>{if(!this.isRange)return;let n=wI(e),r=n?this._getCellFromElement(n):null;n!==e.target&&(this._didDragSinceMouseDown=!0),Sb(e.target)&&e.preventDefault(),this._ngZone.run(()=>this.previewChange.emit({value:r?.enabled?r:null,event:e}))};_leaveHandler=e=>{this.previewEnd!==null&&this.isRange&&(e.type!=="blur"&&(this._didDragSinceMouseDown=!0),e.target&&this._getCellFromElement(e.target)&&!(e.relatedTarget&&this._getCellFromElement(e.relatedTarget))&&this._ngZone.run(()=>this.previewChange.emit({value:null,event:e})))};_mousedownHandler=e=>{if(!this.isRange)return;this._didDragSinceMouseDown=!1;let n=e.target&&this._getCellFromElement(e.target);!n||!this._isInRange(n.compareValue)||this._ngZone.run(()=>{this.dragStarted.emit({value:n.rawValue,event:e})})};_mouseupHandler=e=>{if(!this.isRange)return;let n=Sb(e.target);if(!n){this._ngZone.run(()=>{this.dragEnded.emit({value:null,event:e})});return}n.closest(".mat-calendar-body")===this._elementRef.nativeElement&&this._ngZone.run(()=>{let r=this._getCellFromElement(n);this.dragEnded.emit({value:r?.rawValue??null,event:e})})};_touchendHandler=e=>{let n=wI(e);n&&this._mouseupHandler({target:n})};_getCellFromElement(e){let n=Sb(e);if(n){let r=n.getAttribute("data-mat-row"),o=n.getAttribute("data-mat-col");if(r&&o)return this.rows[parseInt(r)]?.[parseInt(o)]||null}return null}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=D({type:t,selectors:[["","mat-calendar-body",""]],hostAttrs:[1,"mat-calendar-body"],inputs:{label:"label",rows:"rows",todayValue:"todayValue",startValue:"startValue",endValue:"endValue",labelMinRequiredCells:"labelMinRequiredCells",numCols:"numCols",activeCell:"activeCell",isRange:"isRange",cellAspectRatio:"cellAspectRatio",comparisonStart:"comparisonStart",comparisonEnd:"comparisonEnd",previewStart:"previewStart",previewEnd:"previewEnd",startDateAccessibleName:"startDateAccessibleName",endDateAccessibleName:"endDateAccessibleName"},outputs:{selectedValueChange:"selectedValueChange",previewChange:"previewChange",activeDateChange:"activeDateChange",dragStarted:"dragStarted",dragEnded:"dragEnded"},exportAs:["matCalendarBody"],features:[Fe],attrs:c2,decls:11,vars:11,consts:[["aria-hidden","true"],["role","row"],[1,"mat-calendar-body-hidden-label",3,"id"],[1,"mat-calendar-body-label"],[1,"mat-calendar-body-label",3,"paddingTop","paddingBottom"],["role","gridcell",1,"mat-calendar-body-cell-container",3,"width","paddingTop","paddingBottom"],["role","gridcell",1,"mat-calendar-body-cell-container"],["type","button",1,"mat-calendar-body-cell",3,"click","focus","tabindex"],[1,"mat-calendar-body-cell-content","mat-focus-indicator"],["aria-hidden","true",1,"mat-calendar-body-cell-preview"]],template:function(n,r){n&1&&(W(0,u2,3,6,"tr",0),Ge(1,h2,4,1,"tr",1,d2,!0),Ee(3,"span",2),g(4),Te(),Ee(5,"span",2),g(6),Te(),Ee(7,"span",2),g(8),Te(),Ee(9,"span",2),g(10),Te()),n&2&&(G(r._firstRowOffset<r.labelMinRequiredCells?0:-1),p(),qe(r.rows),p(2),Wt("id",r._startDateLabelId),p(),be(" ",r.startDateAccessibleName,`
`),p(),Wt("id",r._endDateLabelId),p(),be(" ",r.endDateAccessibleName,`
`),p(),Wt("id",r._comparisonStartDateLabelId),p(),nr(" ",r.comparisonDateAccessibleName," ",r.startDateAccessibleName,`
`),p(),Wt("id",r._comparisonEndDateLabelId),p(),nr(" ",r.comparisonDateAccessibleName," ",r.endDateAccessibleName,`
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
`],encapsulation:2,changeDetection:0})}return t})();function Ib(t){return t?.nodeName==="TD"}function Sb(t){let i;return Ib(t)?i=t:Ib(t.parentNode)?i=t.parentNode:Ib(t.parentNode?.parentNode)&&(i=t.parentNode.parentNode),i?.getAttribute("data-mat-row")!=null?i:null}function Tb(t,i,e){return e!==null&&i!==e&&t<e&&t===i}function kb(t,i,e){return i!==null&&i!==e&&t>=i&&t===e}function Ab(t,i,e,n){return n&&i!==null&&e!==null&&i!==e&&t>=i&&t<=e}function wI(t){let i=t.changedTouches[0];return document.elementFromPoint(i.clientX,i.clientY)}var zn=class{start;end;_disableStructuralEquivalency;constructor(i,e){this.start=i,this.end=e}},sh=(()=>{class t{selection;_adapter;_selectionChanged=new x;selectionChanged=this._selectionChanged;constructor(e,n){this.selection=e,this._adapter=n,this.selection=e}updateSelection(e,n){let r=this.selection;this.selection=e,this._selectionChanged.next({selection:e,source:n,oldValue:r})}ngOnDestroy(){this._selectionChanged.complete()}_isValidDateInstance(e){return this._adapter.isDateInstance(e)&&this._adapter.isValid(e)}static \u0275fac=function(n){wl()};static \u0275prov=y({token:t,factory:t.\u0275fac})}return t})(),S2=(()=>{class t extends sh{constructor(e){super(null,e)}add(e){super.updateSelection(e,this)}isValid(){return this.selection!=null&&this._isValidDateInstance(this.selection)}isComplete(){return this.selection!=null}clone(){let e=new t(this._adapter);return e.updateSelection(this.selection,this),e}static \u0275fac=function(n){return new(n||t)(z(dn))};static \u0275prov=y({token:t,factory:t.\u0275fac})}return t})();var T2={provide:sh,useFactory:()=>c(sh,{optional:!0,skipSelf:!0})||new S2(c(dn))};var II=new b("MAT_DATE_RANGE_SELECTION_STRATEGY");var Rb=7,k2=0,DI=(()=>{class t{_changeDetectorRef=c(we);_dateFormats=c(Jo,{optional:!0});_dateAdapter=c(dn,{optional:!0});_dir=c(tt,{optional:!0});_rangeStrategy=c(II,{optional:!0});_rerenderSubscription=ie.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(e){let n=this._activeDate,r=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(r,this.minDate,this.maxDate),this._hasSameMonthAndYear(n,this._activeDate)||this._init()}_activeDate;get selected(){return this._selected}set selected(e){e instanceof zn?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setRanges(this._selected)}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;activeDrag=null;selectedChange=new M;_userSelection=new M;dragStarted=new M;dragEnded=new M;activeDateChange=new M;_matCalendarBody;_monthLabel=I("");_weeks=I([]);_firstWeekOffset=I(0);_rangeStart=I(null);_rangeEnd=I(null);_comparisonRangeStart=I(null);_comparisonRangeEnd=I(null);_previewStart=I(null);_previewEnd=I(null);_isRange=I(!1);_todayDate=I(null);_weekdays=I([]);constructor(){c(Ye).load(Ni),this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(Ke(null)).subscribe(()=>this._init())}ngOnChanges(e){let n=e.comparisonStart||e.comparisonEnd;n&&!n.firstChange&&this._setRanges(this.selected),e.activeDrag&&!this.activeDrag&&this._clearPreview()}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_dateSelected(e){let n=e.value,r=this._getDateFromDayOfMonth(n),o,a;this._selected instanceof zn?(o=this._getDateInCurrentMonth(this._selected.start),a=this._getDateInCurrentMonth(this._selected.end)):o=a=this._getDateInCurrentMonth(this._selected),(o!==n||a!==n)&&this.selectedChange.emit(r),this._userSelection.emit({value:r,event:e.event}),this._clearPreview(),this._changeDetectorRef.markForCheck()}_updateActiveDate(e){let n=e.value,r=this._activeDate;this.activeDate=this._getDateFromDayOfMonth(n),this._dateAdapter.compareDate(r,this.activeDate)&&this.activeDateChange.emit(this._activeDate)}_handleCalendarBodyKeydown(e){let n=this._activeDate,r=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,r?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,r?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,-7);break;case 40:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,7);break;case 36:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,1-this._dateAdapter.getDate(this._activeDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,this._dateAdapter.getNumDaysInMonth(this._activeDate)-this._dateAdapter.getDate(this._activeDate));break;case 33:this.activeDate=e.altKey?this._dateAdapter.addCalendarYears(this._activeDate,-1):this._dateAdapter.addCalendarMonths(this._activeDate,-1);break;case 34:this.activeDate=e.altKey?this._dateAdapter.addCalendarYears(this._activeDate,1):this._dateAdapter.addCalendarMonths(this._activeDate,1);break;case 13:case 32:this._selectionKeyPressed=!0,this._canSelect(this._activeDate)&&e.preventDefault();return;case 27:this._previewEnd()!=null&&!_t(e)&&(this._clearPreview(),this.activeDrag?this.dragEnded.emit({value:null,event:e}):(this.selectedChange.emit(null),this._userSelection.emit({value:null,event:e})),e.preventDefault(),e.stopPropagation());return;default:return}this._dateAdapter.compareDate(n,this.activeDate)&&(this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked()),e.preventDefault()}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._canSelect(this._activeDate)&&this._dateSelected({value:this._dateAdapter.getDate(this._activeDate),event:e}),this._selectionKeyPressed=!1)}_init(){this._setRanges(this.selected),this._todayDate.set(this._getCellCompareValue(this._dateAdapter.today())),this._monthLabel.set(this._dateFormats.display.monthLabel?this._dateAdapter.format(this.activeDate,this._dateFormats.display.monthLabel):this._dateAdapter.getMonthNames("short")[this._dateAdapter.getMonth(this.activeDate)].toLocaleUpperCase());let e=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),1);this._firstWeekOffset.set((Rb+this._dateAdapter.getDayOfWeek(e)-this._dateAdapter.getFirstDayOfWeek())%Rb),this._initWeekdays(),this._createWeekCells(),this._changeDetectorRef.markForCheck()}_focusActiveCell(e){this._matCalendarBody._focusActiveCell(e)}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_previewChanged({event:e,value:n}){if(this._rangeStrategy){let r=n?n.rawValue:null,o=this._rangeStrategy.createPreview(r,this.selected,e);if(this._previewStart.set(this._getCellCompareValue(o.start)),this._previewEnd.set(this._getCellCompareValue(o.end)),this.activeDrag&&r){let a=this._rangeStrategy.createDrag?.(this.activeDrag.value,this.selected,r,e);a&&(this._previewStart.set(this._getCellCompareValue(a.start)),this._previewEnd.set(this._getCellCompareValue(a.end)))}}}_dragEnded(e){if(this.activeDrag)if(e.value){let n=this._rangeStrategy?.createDrag?.(this.activeDrag.value,this.selected,e.value,e.event);this.dragEnded.emit({value:n??null,event:e.event})}else this.dragEnded.emit({value:null,event:e.event})}_getDateFromDayOfMonth(e){return this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),e)}_initWeekdays(){let e=this._dateAdapter.getFirstDayOfWeek(),n=this._dateAdapter.getDayOfWeekNames("narrow"),o=this._dateAdapter.getDayOfWeekNames("long").map((a,s)=>({long:a,narrow:n[s],id:k2++}));this._weekdays.set(o.slice(e).concat(o.slice(0,e)))}_createWeekCells(){let e=this._dateAdapter.getNumDaysInMonth(this.activeDate),n=this._dateAdapter.getDateNames(),r=[[]];for(let o=0,a=this._firstWeekOffset();o<e;o++,a++){a==Rb&&(r.push([]),a=0);let s=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),o+1),l=this._shouldEnableDate(s),d=this._dateAdapter.format(s,this._dateFormats.display.dateA11yLabel),u=this.dateClass?this.dateClass(s,"month"):void 0;r[r.length-1].push(new Vc(o+1,n[o],d,l,u,this._getCellCompareValue(s),s))}this._weeks.set(r)}_shouldEnableDate(e){return!!e&&(!this.minDate||this._dateAdapter.compareDate(e,this.minDate)>=0)&&(!this.maxDate||this._dateAdapter.compareDate(e,this.maxDate)<=0)&&(!this.dateFilter||this.dateFilter(e))}_getDateInCurrentMonth(e){return e&&this._hasSameMonthAndYear(e,this.activeDate)?this._dateAdapter.getDate(e):null}_hasSameMonthAndYear(e,n){return!!(e&&n&&this._dateAdapter.getMonth(e)==this._dateAdapter.getMonth(n)&&this._dateAdapter.getYear(e)==this._dateAdapter.getYear(n))}_getCellCompareValue(e){if(e){let n=this._dateAdapter.getYear(e),r=this._dateAdapter.getMonth(e),o=this._dateAdapter.getDate(e);return new Date(n,r,o).getTime()}return null}_isRtl(){return this._dir&&this._dir.value==="rtl"}_setRanges(e){e instanceof zn?(this._rangeStart.set(this._getCellCompareValue(e.start)),this._rangeEnd.set(this._getCellCompareValue(e.end)),this._isRange.set(!0)):(this._rangeStart.set(this._getCellCompareValue(e)),this._rangeEnd.set(this._rangeStart()),this._isRange.set(!1)),this._comparisonRangeStart.set(this._getCellCompareValue(this.comparisonStart)),this._comparisonRangeEnd.set(this._getCellCompareValue(this.comparisonEnd))}_canSelect(e){return!this.dateFilter||this.dateFilter(e)}_clearPreview(){this._previewStart.set(null),this._previewEnd.set(null)}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=D({type:t,selectors:[["mat-month-view"]],viewQuery:function(n,r){if(n&1&&xe(Ss,5),n&2){let o;F(o=P())&&(r._matCalendarBody=o.first)}},inputs:{activeDate:"activeDate",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass",comparisonStart:"comparisonStart",comparisonEnd:"comparisonEnd",startDateAccessibleName:"startDateAccessibleName",endDateAccessibleName:"endDateAccessibleName",activeDrag:"activeDrag"},outputs:{selectedChange:"selectedChange",_userSelection:"_userSelection",dragStarted:"dragStarted",dragEnded:"dragEnded",activeDateChange:"activeDateChange"},exportAs:["matMonthView"],features:[Fe],decls:8,vars:14,consts:[["role","grid",1,"mat-calendar-table"],[1,"mat-calendar-table-header"],["scope","col"],["aria-hidden","true"],["colspan","7",1,"mat-calendar-table-header-divider"],["mat-calendar-body","",3,"selectedValueChange","activeDateChange","previewChange","dragStarted","dragEnded","keyup","keydown","label","rows","todayValue","startValue","endValue","comparisonStart","comparisonEnd","previewStart","previewEnd","isRange","labelMinRequiredCells","activeCell","startDateAccessibleName","endDateAccessibleName"],[1,"cdk-visually-hidden"]],template:function(n,r){n&1&&(m(0,"table",0)(1,"thead",1)(2,"tr"),Ge(3,p2,5,2,"th",2,MI),f(),m(5,"tr",3),k(6,"th",4),f()(),m(7,"tbody",5),E("selectedValueChange",function(a){return r._dateSelected(a)})("activeDateChange",function(a){return r._updateActiveDate(a)})("previewChange",function(a){return r._previewChanged(a)})("dragStarted",function(a){return r.dragStarted.emit(a)})("dragEnded",function(a){return r._dragEnded(a)})("keyup",function(a){return r._handleCalendarBodyKeyup(a)})("keydown",function(a){return r._handleCalendarBodyKeydown(a)}),f()()),n&2&&(p(3),qe(r._weekdays()),p(4),R("label",r._monthLabel())("rows",r._weeks())("todayValue",r._todayDate())("startValue",r._rangeStart())("endValue",r._rangeEnd())("comparisonStart",r._comparisonRangeStart())("comparisonEnd",r._comparisonRangeEnd())("previewStart",r._previewStart())("previewEnd",r._previewEnd())("isRange",r._isRange())("labelMinRequiredCells",3)("activeCell",r._dateAdapter.getDate(r.activeDate)-1)("startDateAccessibleName",r.startDateAccessibleName)("endDateAccessibleName",r.endDateAccessibleName))},dependencies:[Ss],encapsulation:2,changeDetection:0})}return t})(),En=24,Ob=4,xI=(()=>{class t{_changeDetectorRef=c(we);_dateAdapter=c(dn,{optional:!0});_dir=c(tt,{optional:!0});_rerenderSubscription=ie.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(e){let n=this._activeDate,r=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(r,this.minDate,this.maxDate),SI(this._dateAdapter,n,this._activeDate,this.minDate,this.maxDate)||this._init()}_activeDate;get selected(){return this._selected}set selected(e){e instanceof zn?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setSelectedYear(e)}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;selectedChange=new M;yearSelected=new M;activeDateChange=new M;_matCalendarBody;_years=I([]);_todayYear=I(0);_selectedYear=I(null);constructor(){this._dateAdapter,this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(Ke(null)).subscribe(()=>this._init())}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_init(){this._todayYear.set(this._dateAdapter.getYear(this._dateAdapter.today()));let n=this._dateAdapter.getYear(this._activeDate)-Lc(this._dateAdapter,this.activeDate,this.minDate,this.maxDate),r=[];for(let o=0,a=[];o<En;o++)a.push(n+o),a.length==Ob&&(r.push(a.map(s=>this._createCellForYear(s))),a=[]);this._years.set(r),this._changeDetectorRef.markForCheck()}_yearSelected(e){let n=e.value,r=this._dateAdapter.createDate(n,0,1),o=this._getDateFromYear(n);this.yearSelected.emit(r),this.selectedChange.emit(o)}_updateActiveDate(e){let n=e.value,r=this._activeDate;this.activeDate=this._getDateFromYear(n),this._dateAdapter.compareDate(r,this.activeDate)&&this.activeDateChange.emit(this.activeDate)}_handleCalendarBodyKeydown(e){let n=this._activeDate,r=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,r?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,r?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,-Ob);break;case 40:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,Ob);break;case 36:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,-Lc(this._dateAdapter,this.activeDate,this.minDate,this.maxDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,En-Lc(this._dateAdapter,this.activeDate,this.minDate,this.maxDate)-1);break;case 33:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?-En*10:-En);break;case 34:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?En*10:En);break;case 13:case 32:this._selectionKeyPressed=!0;break;default:return}this._dateAdapter.compareDate(n,this.activeDate)&&this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked(),e.preventDefault()}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._yearSelected({value:this._dateAdapter.getYear(this._activeDate),event:e}),this._selectionKeyPressed=!1)}_getActiveCell(){return Lc(this._dateAdapter,this.activeDate,this.minDate,this.maxDate)}_focusActiveCell(){this._matCalendarBody._focusActiveCell()}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_getDateFromYear(e){let n=this._dateAdapter.getMonth(this.activeDate),r=this._dateAdapter.getNumDaysInMonth(this._dateAdapter.createDate(e,n,1));return this._dateAdapter.createDate(e,n,Math.min(this._dateAdapter.getDate(this.activeDate),r))}_createCellForYear(e){let n=this._dateAdapter.createDate(e,0,1),r=this._dateAdapter.getYearName(n),o=this.dateClass?this.dateClass(n,"multi-year"):void 0;return new Vc(e,r,r,this._shouldEnableYear(e),o)}_shouldEnableYear(e){if(e==null||this.maxDate&&e>this._dateAdapter.getYear(this.maxDate)||this.minDate&&e<this._dateAdapter.getYear(this.minDate))return!1;if(!this.dateFilter)return!0;let n=this._dateAdapter.createDate(e,0,1);for(let r=n;this._dateAdapter.getYear(r)==e;r=this._dateAdapter.addCalendarDays(r,1))if(this.dateFilter(r))return!0;return!1}_isRtl(){return this._dir&&this._dir.value==="rtl"}_setSelectedYear(e){if(this._selectedYear.set(null),e instanceof zn){let n=e.start||e.end;n&&this._selectedYear.set(this._dateAdapter.getYear(n))}else e&&this._selectedYear.set(this._dateAdapter.getYear(e))}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=D({type:t,selectors:[["mat-multi-year-view"]],viewQuery:function(n,r){if(n&1&&xe(Ss,5),n&2){let o;F(o=P())&&(r._matCalendarBody=o.first)}},inputs:{activeDate:"activeDate",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass"},outputs:{selectedChange:"selectedChange",yearSelected:"yearSelected",activeDateChange:"activeDateChange"},exportAs:["matMultiYearView"],decls:5,vars:7,consts:[["role","grid",1,"mat-calendar-table"],["aria-hidden","true",1,"mat-calendar-table-header"],["colspan","4",1,"mat-calendar-table-header-divider"],["mat-calendar-body","",3,"selectedValueChange","activeDateChange","keyup","keydown","rows","todayValue","startValue","endValue","numCols","cellAspectRatio","activeCell"]],template:function(n,r){n&1&&(m(0,"table",0)(1,"thead",1)(2,"tr"),k(3,"th",2),f()(),m(4,"tbody",3),E("selectedValueChange",function(a){return r._yearSelected(a)})("activeDateChange",function(a){return r._updateActiveDate(a)})("keyup",function(a){return r._handleCalendarBodyKeyup(a)})("keydown",function(a){return r._handleCalendarBodyKeydown(a)}),f()()),n&2&&(p(4),R("rows",r._years())("todayValue",r._todayYear())("startValue",r._selectedYear())("endValue",r._selectedYear())("numCols",4)("cellAspectRatio",4/7)("activeCell",r._getActiveCell()))},dependencies:[Ss],encapsulation:2,changeDetection:0})}return t})();function SI(t,i,e,n,r){let o=t.getYear(i),a=t.getYear(e),s=TI(t,n,r);return Math.floor((o-s)/En)===Math.floor((a-s)/En)}function Lc(t,i,e,n){let r=t.getYear(i);return A2(r-TI(t,e,n),En)}function TI(t,i,e){let n=0;return e?n=t.getYear(e)-En+1:i&&(n=t.getYear(i)),n}function A2(t,i){return(t%i+i)%i}var EI=(()=>{class t{_changeDetectorRef=c(we);_dateFormats=c(Jo,{optional:!0});_dateAdapter=c(dn,{optional:!0});_dir=c(tt,{optional:!0});_rerenderSubscription=ie.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(e){let n=this._activeDate,r=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(r,this.minDate,this.maxDate),this._dateAdapter.getYear(n)!==this._dateAdapter.getYear(this._activeDate)&&this._init()}_activeDate;get selected(){return this._selected}set selected(e){e instanceof zn?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setSelectedMonth(e)}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;selectedChange=new M;monthSelected=new M;activeDateChange=new M;_matCalendarBody;_months=I([]);_yearLabel=I("");_todayMonth=I(null);_selectedMonth=I(null);constructor(){this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(Ke(null)).subscribe(()=>this._init())}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_monthSelected(e){let n=e.value,r=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),n,1);this.monthSelected.emit(r);let o=this._getDateFromMonth(n);this.selectedChange.emit(o)}_updateActiveDate(e){let n=e.value,r=this._activeDate;this.activeDate=this._getDateFromMonth(n),this._dateAdapter.compareDate(r,this.activeDate)&&this.activeDateChange.emit(this.activeDate)}_handleCalendarBodyKeydown(e){let n=this._activeDate,r=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,r?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,r?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,-4);break;case 40:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,4);break;case 36:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,-this._dateAdapter.getMonth(this._activeDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,11-this._dateAdapter.getMonth(this._activeDate));break;case 33:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?-10:-1);break;case 34:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?10:1);break;case 13:case 32:this._selectionKeyPressed=!0;break;default:return}this._dateAdapter.compareDate(n,this.activeDate)&&(this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked()),e.preventDefault()}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._monthSelected({value:this._dateAdapter.getMonth(this._activeDate),event:e}),this._selectionKeyPressed=!1)}_init(){this._setSelectedMonth(this.selected),this._todayMonth.set(this._getMonthInCurrentYear(this._dateAdapter.today())),this._yearLabel.set(this._dateAdapter.getYearName(this.activeDate));let e=this._dateAdapter.getMonthNames("short");this._months.set([[0,1,2,3],[4,5,6,7],[8,9,10,11]].map(n=>n.map(r=>this._createCellForMonth(r,e[r])))),this._changeDetectorRef.markForCheck()}_focusActiveCell(){this._matCalendarBody._focusActiveCell()}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_getMonthInCurrentYear(e){return e&&this._dateAdapter.getYear(e)==this._dateAdapter.getYear(this.activeDate)?this._dateAdapter.getMonth(e):null}_getDateFromMonth(e){let n=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,1),r=this._dateAdapter.getNumDaysInMonth(n);return this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,Math.min(this._dateAdapter.getDate(this.activeDate),r))}_createCellForMonth(e,n){let r=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,1),o=this._dateAdapter.format(r,this._dateFormats.display.monthYearA11yLabel),a=this.dateClass?this.dateClass(r,"year"):void 0;return new Vc(e,n.toLocaleUpperCase(),o,this._shouldEnableMonth(e),a)}_shouldEnableMonth(e){let n=this._dateAdapter.getYear(this.activeDate);if(e==null||this._isYearAndMonthAfterMaxDate(n,e)||this._isYearAndMonthBeforeMinDate(n,e))return!1;if(!this.dateFilter)return!0;let r=this._dateAdapter.createDate(n,e,1);for(let o=r;this._dateAdapter.getMonth(o)==e;o=this._dateAdapter.addCalendarDays(o,1))if(this.dateFilter(o))return!0;return!1}_isYearAndMonthAfterMaxDate(e,n){if(this.maxDate){let r=this._dateAdapter.getYear(this.maxDate),o=this._dateAdapter.getMonth(this.maxDate);return e>r||e===r&&n>o}return!1}_isYearAndMonthBeforeMinDate(e,n){if(this.minDate){let r=this._dateAdapter.getYear(this.minDate),o=this._dateAdapter.getMonth(this.minDate);return e<r||e===r&&n<o}return!1}_isRtl(){return this._dir&&this._dir.value==="rtl"}_setSelectedMonth(e){e instanceof zn?this._selectedMonth.set(this._getMonthInCurrentYear(e.start)||this._getMonthInCurrentYear(e.end)):this._selectedMonth.set(this._getMonthInCurrentYear(e))}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=D({type:t,selectors:[["mat-year-view"]],viewQuery:function(n,r){if(n&1&&xe(Ss,5),n&2){let o;F(o=P())&&(r._matCalendarBody=o.first)}},inputs:{activeDate:"activeDate",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass"},outputs:{selectedChange:"selectedChange",monthSelected:"monthSelected",activeDateChange:"activeDateChange"},exportAs:["matYearView"],decls:5,vars:9,consts:[["role","grid",1,"mat-calendar-table"],["aria-hidden","true",1,"mat-calendar-table-header"],["colspan","4",1,"mat-calendar-table-header-divider"],["mat-calendar-body","",3,"selectedValueChange","activeDateChange","keyup","keydown","label","rows","todayValue","startValue","endValue","labelMinRequiredCells","numCols","cellAspectRatio","activeCell"]],template:function(n,r){n&1&&(m(0,"table",0)(1,"thead",1)(2,"tr"),k(3,"th",2),f()(),m(4,"tbody",3),E("selectedValueChange",function(a){return r._monthSelected(a)})("activeDateChange",function(a){return r._updateActiveDate(a)})("keyup",function(a){return r._handleCalendarBodyKeyup(a)})("keydown",function(a){return r._handleCalendarBodyKeydown(a)}),f()()),n&2&&(p(4),R("label",r._yearLabel())("rows",r._months())("todayValue",r._todayMonth())("startValue",r._selectedMonth())("endValue",r._selectedMonth())("labelMinRequiredCells",2)("numCols",4)("cellAspectRatio",4/7)("activeCell",r._dateAdapter.getMonth(r.activeDate)))},dependencies:[Ss],encapsulation:2,changeDetection:0})}return t})(),kI=(()=>{class t{_intl=c(Ts);calendar=c(Bc);_dateAdapter=c(dn,{optional:!0});_dateFormats=c(Jo,{optional:!0});_periodButtonText;_periodButtonDescription;_periodButtonLabel;_prevButtonLabel;_nextButtonLabel;constructor(){c(Ye).load(Ni);let e=c(we);this._updateLabels(),this.calendar.stateChanges.subscribe(()=>{this._updateLabels(),e.markForCheck()})}get periodButtonText(){return this._periodButtonText}get periodButtonDescription(){return this._periodButtonDescription}get periodButtonLabel(){return this._periodButtonLabel}get prevButtonLabel(){return this._prevButtonLabel}get nextButtonLabel(){return this._nextButtonLabel}currentPeriodClicked(){this.calendar.currentView=this.calendar.currentView=="month"?"multi-year":"month"}previousClicked(){this.previousEnabled()&&(this.calendar.activeDate=this.calendar.currentView=="month"?this._dateAdapter.addCalendarMonths(this.calendar.activeDate,-1):this._dateAdapter.addCalendarYears(this.calendar.activeDate,this.calendar.currentView=="year"?-1:-En))}nextClicked(){this.nextEnabled()&&(this.calendar.activeDate=this.calendar.currentView=="month"?this._dateAdapter.addCalendarMonths(this.calendar.activeDate,1):this._dateAdapter.addCalendarYears(this.calendar.activeDate,this.calendar.currentView=="year"?1:En))}previousEnabled(){return this.calendar.minDate?!this.calendar.minDate||!this._isSameView(this.calendar.activeDate,this.calendar.minDate):!0}nextEnabled(){return!this.calendar.maxDate||!this._isSameView(this.calendar.activeDate,this.calendar.maxDate)}_updateLabels(){let e=this.calendar,n=this._intl,r=this._dateAdapter;e.currentView==="month"?(this._periodButtonText=r.format(e.activeDate,this._dateFormats.display.monthYearLabel).toLocaleUpperCase(),this._periodButtonDescription=r.format(e.activeDate,this._dateFormats.display.monthYearLabel).toLocaleUpperCase(),this._periodButtonLabel=n.switchToMultiYearViewLabel,this._prevButtonLabel=n.prevMonthLabel,this._nextButtonLabel=n.nextMonthLabel):e.currentView==="year"?(this._periodButtonText=r.getYearName(e.activeDate),this._periodButtonDescription=r.getYearName(e.activeDate),this._periodButtonLabel=n.switchToMonthViewLabel,this._prevButtonLabel=n.prevYearLabel,this._nextButtonLabel=n.nextYearLabel):(this._periodButtonText=n.formatYearRange(...this._formatMinAndMaxYearLabels()),this._periodButtonDescription=n.formatYearRangeLabel(...this._formatMinAndMaxYearLabels()),this._periodButtonLabel=n.switchToMonthViewLabel,this._prevButtonLabel=n.prevMultiYearLabel,this._nextButtonLabel=n.nextMultiYearLabel)}_isSameView(e,n){return this.calendar.currentView=="month"?this._dateAdapter.getYear(e)==this._dateAdapter.getYear(n)&&this._dateAdapter.getMonth(e)==this._dateAdapter.getMonth(n):this.calendar.currentView=="year"?this._dateAdapter.getYear(e)==this._dateAdapter.getYear(n):SI(this._dateAdapter,e,n,this.calendar.minDate,this.calendar.maxDate)}_formatMinAndMaxYearLabels(){let n=this._dateAdapter.getYear(this.calendar.activeDate)-Lc(this._dateAdapter,this.calendar.activeDate,this.calendar.minDate,this.calendar.maxDate),r=n+En-1,o=this._dateAdapter.getYearName(this._dateAdapter.createDate(n,0,1)),a=this._dateAdapter.getYearName(this._dateAdapter.createDate(r,0,1));return[o,a]}_periodButtonLabelId=c(Qe).getId("mat-calendar-period-label-");static \u0275fac=function(n){return new(n||t)};static \u0275cmp=D({type:t,selectors:[["mat-calendar-header"]],exportAs:["matCalendarHeader"],ngContentSelectors:g2,decls:17,vars:13,consts:[[1,"mat-calendar-header"],[1,"mat-calendar-controls"],["aria-live","polite",1,"cdk-visually-hidden",3,"id"],["matButton","","type","button",1,"mat-calendar-period-button",3,"click"],["aria-hidden","true"],["viewBox","0 0 10 5","focusable","false","aria-hidden","true",1,"mat-calendar-arrow"],["points","0,0 5,5 10,0"],[1,"mat-calendar-spacer"],["matIconButton","","type","button","disabledInteractive","",1,"mat-calendar-previous-button",3,"click","disabled","matTooltip"],["viewBox","0 0 24 24","focusable","false","aria-hidden","true"],["d","M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"],["matIconButton","","type","button","disabledInteractive","",1,"mat-calendar-next-button",3,"click","disabled","matTooltip"],["d","M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"]],template:function(n,r){n&1&&(Me(),m(0,"div",0)(1,"div",1)(2,"span",2),g(3),f(),m(4,"button",3),E("click",function(){return r.currentPeriodClicked()}),m(5,"span",4),g(6),f(),_i(),m(7,"svg",5),k(8,"polygon",6),f()(),ba(),k(9,"div",7),ee(10),m(11,"button",8),E("click",function(){return r.previousClicked()}),_i(),m(12,"svg",9),k(13,"path",10),f()(),ba(),m(14,"button",11),E("click",function(){return r.nextClicked()}),_i(),m(15,"svg",9),k(16,"path",12),f()()()()),n&2&&(p(2),R("id",r._periodButtonLabelId),p(),se(r.periodButtonDescription),p(),Z("aria-label",r.periodButtonLabel)("aria-describedby",r._periodButtonLabelId),p(2),se(r.periodButtonText),p(),U("mat-calendar-invert",r.calendar.currentView!=="month"),p(4),R("disabled",!r.previousEnabled())("matTooltip",r.prevButtonLabel),Z("aria-label",r.prevButtonLabel),p(3),R("disabled",!r.nextEnabled())("matTooltip",r.nextButtonLabel),Z("aria-label",r.nextButtonLabel))},dependencies:[Bt,Hr,Fc],encapsulation:2,changeDetection:0})}return t})(),Bc=(()=>{class t{_dateAdapter=c(dn,{optional:!0});_dateFormats=c(Jo,{optional:!0});_changeDetectorRef=c(we);_elementRef=c(V);headerComponent;_calendarHeaderPortal;_intlChanges;_moveFocusOnNextTick=!1;get startAt(){return this._startAt}set startAt(e){this._startAt=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_startAt=null;startView="month";get selected(){return this._selected}set selected(e){e instanceof zn?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;selectedChange=new M;yearSelected=new M;monthSelected=new M;viewChanged=new M(!0);_userSelection=new M;_userDragDrop=new M;monthView;yearView;multiYearView;get activeDate(){return this._clampedActiveDate}set activeDate(e){this._clampedActiveDate=this._dateAdapter.clampDate(e,this.minDate,this.maxDate),this.stateChanges.next(),this._changeDetectorRef.markForCheck()}_clampedActiveDate;get currentView(){return this._currentView}set currentView(e){let n=this._currentView!==e?e:null;this._currentView=e,this._moveFocusOnNextTick=!0,this._changeDetectorRef.markForCheck(),n&&(this.stateChanges.next(),this.viewChanged.emit(n))}_currentView;_activeDrag=null;stateChanges=new x;constructor(){this._intlChanges=c(Ts).changes.subscribe(()=>{this._changeDetectorRef.markForCheck(),this.stateChanges.next()})}ngAfterContentInit(){this._calendarHeaderPortal=new Cn(this.headerComponent||kI),this.activeDate=this.startAt||this._dateAdapter.today(),this._currentView=this.startView}ngAfterViewChecked(){this._moveFocusOnNextTick&&(this._moveFocusOnNextTick=!1,this.focusActiveCell())}ngOnDestroy(){this._intlChanges.unsubscribe(),this.stateChanges.complete()}ngOnChanges(e){let n=e.minDate&&!this._dateAdapter.sameDate(e.minDate.previousValue,e.minDate.currentValue)?e.minDate:void 0,r=e.maxDate&&!this._dateAdapter.sameDate(e.maxDate.previousValue,e.maxDate.currentValue)?e.maxDate:void 0,o=n||r||e.dateFilter;if(o&&!o.firstChange){let a=this._getCurrentViewComponent();a&&(this._elementRef.nativeElement.contains(Oi())&&(this._moveFocusOnNextTick=!0),this._changeDetectorRef.detectChanges(),a._init())}this.stateChanges.next()}focusActiveCell(){this._getCurrentViewComponent()?._focusActiveCell(!1)}updateTodaysDate(){this._getCurrentViewComponent()?._init()}_dateSelected(e){let n=e.value;(this.selected instanceof zn||n&&!this._dateAdapter.sameDate(n,this.selected))&&this.selectedChange.emit(n),this._userSelection.emit(e)}_yearSelectedInMultiYearView(e){this.yearSelected.emit(e)}_monthSelectedInYearView(e){this.monthSelected.emit(e)}_goToDateInView(e,n){this.activeDate=e,this.currentView=n}_dragStarted(e){this._activeDrag=e}_dragEnded(e){this._activeDrag&&(e.value&&this._userDragDrop.emit(e),this._activeDrag=null)}_getCurrentViewComponent(){return this.monthView||this.yearView||this.multiYearView}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=D({type:t,selectors:[["mat-calendar"]],viewQuery:function(n,r){if(n&1&&xe(DI,5)(EI,5)(xI,5),n&2){let o;F(o=P())&&(r.monthView=o.first),F(o=P())&&(r.yearView=o.first),F(o=P())&&(r.multiYearView=o.first)}},hostAttrs:[1,"mat-calendar"],inputs:{headerComponent:"headerComponent",startAt:"startAt",startView:"startView",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass",comparisonStart:"comparisonStart",comparisonEnd:"comparisonEnd",startDateAccessibleName:"startDateAccessibleName",endDateAccessibleName:"endDateAccessibleName"},outputs:{selectedChange:"selectedChange",yearSelected:"yearSelected",monthSelected:"monthSelected",viewChanged:"viewChanged",_userSelection:"_userSelection",_userDragDrop:"_userDragDrop"},exportAs:["matCalendar"],features:[Pe([T2]),Fe],decls:5,vars:2,consts:[[3,"cdkPortalOutlet"],["cdkMonitorSubtreeFocus","","tabindex","-1",1,"mat-calendar-content"],[3,"activeDate","selected","dateFilter","maxDate","minDate","dateClass","comparisonStart","comparisonEnd","startDateAccessibleName","endDateAccessibleName","activeDrag"],[3,"activeDate","selected","dateFilter","maxDate","minDate","dateClass"],[3,"activeDateChange","_userSelection","dragStarted","dragEnded","activeDate","selected","dateFilter","maxDate","minDate","dateClass","comparisonStart","comparisonEnd","startDateAccessibleName","endDateAccessibleName","activeDrag"],[3,"activeDateChange","monthSelected","selectedChange","activeDate","selected","dateFilter","maxDate","minDate","dateClass"],[3,"activeDateChange","yearSelected","selectedChange","activeDate","selected","dateFilter","maxDate","minDate","dateClass"]],template:function(n,r){if(n&1&&(lt(0,_2,0,0,"ng-template",0),m(1,"div",1),W(2,v2,1,11,"mat-month-view",2)(3,b2,1,6,"mat-year-view",3)(4,y2,1,6,"mat-multi-year-view",3),f()),n&2){let o;R("cdkPortalOutlet",r._calendarHeaderPortal),p(2),G((o=r.currentView)==="month"?2:o==="year"?3:o==="multi-year"?4:-1)}},dependencies:[cn,rc,DI,EI,xI],styles:[`.mat-calendar {
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
`],encapsulation:2,changeDetection:0})}return t})();var R2=(()=>{class t{_elementRef=c(V);_animationsDisabled=Ve();_changeDetectorRef=c(we);_globalModel=c(sh);_dateAdapter=c(dn);_ngZone=c(L);_rangeSelectionStrategy=c(II,{optional:!0});_stateChanges;_model;_eventCleanups;_animationFallback;_calendar;color;datepicker;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;_isAbove=!1;_animationDone=new x;_isAnimating=!1;_closeButtonText;_closeButtonFocused=!1;_actionsPortal=null;_dialogLabelId=null;constructor(){if(c(Ye).load(Ni),this._closeButtonText=c(Ts).closeCalendarLabel,!this._animationsDisabled){let e=this._elementRef.nativeElement,n=c(Se);this._eventCleanups=this._ngZone.runOutsideAngular(()=>[n.listen(e,"animationstart",this._handleAnimationEvent),n.listen(e,"animationend",this._handleAnimationEvent),n.listen(e,"animationcancel",this._handleAnimationEvent)])}}ngAfterViewInit(){this._stateChanges=this.datepicker.stateChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()}),this._calendar.focusActiveCell()}ngOnDestroy(){clearTimeout(this._animationFallback),this._eventCleanups?.forEach(e=>e()),this._stateChanges?.unsubscribe(),this._animationDone.complete()}_handleUserSelection(e){let n=this._model.selection,r=e.value,o=n instanceof zn;if(o&&this._rangeSelectionStrategy){let a=this._rangeSelectionStrategy.selectionFinished(r,n,e.event);this._model.updateSelection(a,this)}else r&&(o||!this._dateAdapter.sameDate(r,n))&&this._model.add(r);(!this._model||this._model.isComplete())&&!this._actionsPortal&&this.datepicker.close()}_handleUserDragDrop(e){this._model.updateSelection(e.value,this)}_startExitAnimation(){this._elementRef.nativeElement.classList.add("mat-datepicker-content-exit"),this._animationsDisabled?this._animationDone.next():(clearTimeout(this._animationFallback),this._animationFallback=setTimeout(()=>{this._isAnimating||this._animationDone.next()},200))}_handleAnimationEvent=e=>{let n=this._elementRef.nativeElement;e.target!==n||!e.animationName.startsWith("_mat-datepicker-content")||(clearTimeout(this._animationFallback),this._isAnimating=e.type==="animationstart",n.classList.toggle("mat-datepicker-content-animating",this._isAnimating),this._isAnimating||this._animationDone.next())};_getSelected(){return this._model.selection}_applyPendingSelection(){this._model!==this._globalModel&&this._globalModel.updateSelection(this._model.selection,this)}_assignActions(e,n){this._model=e?this._globalModel.clone():this._globalModel,this._actionsPortal=e,n&&this._changeDetectorRef.detectChanges()}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=D({type:t,selectors:[["mat-datepicker-content"]],viewQuery:function(n,r){if(n&1&&xe(Bc,5),n&2){let o;F(o=P())&&(r._calendar=o.first)}},hostAttrs:[1,"mat-datepicker-content"],hostVars:6,hostBindings:function(n,r){n&2&&(Dt(r.color?"mat-"+r.color:""),U("mat-datepicker-content-touch",r.datepicker.touchUi)("mat-datepicker-content-animations-enabled",!r._animationsDisabled))},inputs:{color:"color"},exportAs:["matDatepickerContent"],decls:5,vars:26,consts:[["cdkTrapFocus","","role","dialog",1,"mat-datepicker-content-container"],[3,"yearSelected","monthSelected","viewChanged","_userSelection","_userDragDrop","id","startAt","startView","minDate","maxDate","dateFilter","headerComponent","selected","dateClass","comparisonStart","comparisonEnd","startDateAccessibleName","endDateAccessibleName"],[3,"cdkPortalOutlet"],["type","button","matButton","elevated",1,"mat-datepicker-close-button",3,"focus","blur","click","color"]],template:function(n,r){n&1&&(m(0,"div",0)(1,"mat-calendar",1),E("yearSelected",function(a){return r.datepicker._selectYear(a)})("monthSelected",function(a){return r.datepicker._selectMonth(a)})("viewChanged",function(a){return r.datepicker._viewChanged(a)})("_userSelection",function(a){return r._handleUserSelection(a)})("_userDragDrop",function(a){return r._handleUserDragDrop(a)}),f(),lt(2,C2,0,0,"ng-template",2),m(3,"button",3),E("focus",function(){return r._closeButtonFocused=!0})("blur",function(){return r._closeButtonFocused=!1})("click",function(){return r.datepicker.close()}),g(4),f()()),n&2&&(U("mat-datepicker-content-container-with-custom-header",r.datepicker.calendarHeaderComponent)("mat-datepicker-content-container-with-actions",r._actionsPortal),Z("aria-modal",!0)("aria-labelledby",r._dialogLabelId??void 0),p(),Dt(r.datepicker.panelClass),R("id",r.datepicker.id)("startAt",r.datepicker.startAt)("startView",r.datepicker.startView)("minDate",r.datepicker._getMinDate())("maxDate",r.datepicker._getMaxDate())("dateFilter",r.datepicker._getDateFilter())("headerComponent",r.datepicker.calendarHeaderComponent)("selected",r._getSelected())("dateClass",r.datepicker.dateClass)("comparisonStart",r.comparisonStart)("comparisonEnd",r.comparisonEnd)("startDateAccessibleName",r.startDateAccessibleName)("endDateAccessibleName",r.endDateAccessibleName),p(),R("cdkPortalOutlet",r._actionsPortal),p(),U("cdk-visually-hidden",!r._closeButtonFocused),R("color",r.color||"primary"),p(),se(r._closeButtonText))},dependencies:[Pv,Bc,cn,Bt],styles:[`@keyframes _mat-datepicker-content-dropdown-enter {
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
`],encapsulation:2,changeDetection:0})}return t})();var O2=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=A({type:t,selectors:[["","matDatepickerToggleIcon",""]]})}return t})(),N2=(()=>{class t{_intl=c(Ts);_changeDetectorRef=c(we);_stateChanges=ie.EMPTY;datepicker;tabIndex=null;ariaLabel;get disabled(){return this._disabled===void 0&&this.datepicker?this.datepicker.disabled:!!this._disabled}set disabled(e){this._disabled=e}_disabled;disableRipple=!1;_customIcon;_button;constructor(){let e=c(new Ii("tabindex"),{optional:!0}),n=Number(e);this.tabIndex=n||n===0?n:null}ngOnChanges(e){e.datepicker&&this._watchStateChanges()}ngOnDestroy(){this._stateChanges.unsubscribe()}ngAfterContentInit(){this._watchStateChanges()}_open(e){this.datepicker&&!this.disabled&&(this.datepicker.open(),e.stopPropagation())}_watchStateChanges(){let e=this.datepicker?this.datepicker.stateChanges:q(),n=this.datepicker&&this.datepicker.datepickerInput?this.datepicker.datepickerInput.stateChanges:q(),r=this.datepicker?St(this.datepicker.openedStream,this.datepicker.closedStream):q();this._stateChanges.unsubscribe(),this._stateChanges=St(this._intl.changes,e,n,r).subscribe(()=>this._changeDetectorRef.markForCheck())}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=D({type:t,selectors:[["mat-datepicker-toggle"]],contentQueries:function(n,r,o){if(n&1&&wt(o,O2,5),n&2){let a;F(a=P())&&(r._customIcon=a.first)}},viewQuery:function(n,r){if(n&1&&xe(w2,5),n&2){let o;F(o=P())&&(r._button=o.first)}},hostAttrs:[1,"mat-datepicker-toggle"],hostVars:8,hostBindings:function(n,r){n&1&&E("click",function(a){return r._open(a)}),n&2&&(Z("tabindex",null)("data-mat-calendar",r.datepicker?r.datepicker.id:null),U("mat-datepicker-toggle-active",r.datepicker&&r.datepicker.opened)("mat-accent",r.datepicker&&r.datepicker.color==="accent")("mat-warn",r.datepicker&&r.datepicker.color==="warn"))},inputs:{datepicker:[0,"for","datepicker"],tabIndex:"tabIndex",ariaLabel:[0,"aria-label","ariaLabel"],disabled:[2,"disabled","disabled",te],disableRipple:"disableRipple"},exportAs:["matDatepickerToggle"],features:[Fe],ngContentSelectors:x2,decls:4,vars:7,consts:[["button",""],["matIconButton","","type","button",3,"tabIndex","disabled","disableRipple"],["viewBox","0 0 24 24","width","24px","height","24px","fill","currentColor","focusable","false","aria-hidden","true",1,"mat-datepicker-toggle-default-icon"],["d","M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"]],template:function(n,r){n&1&&(Me(D2),m(0,"button",1,0),W(2,E2,2,0,":svg:svg",2),ee(3),f()),n&2&&(R("tabIndex",r.disabled?-1:r.tabIndex)("disabled",r.disabled)("disableRipple",r.disableRipple),Z("aria-haspopup",r.datepicker?"dialog":null)("aria-label",r.ariaLabel||r._intl.openCalendarLabel)("aria-expanded",r.datepicker?r.datepicker.opened:null),p(2),G(r._customIcon?-1:2))},dependencies:[Hr],styles:[`.mat-datepicker-toggle {
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
`],encapsulation:2,changeDetection:0})}return t})();var AI=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=H({type:t});static \u0275inj=j({providers:[Ts],imports:[dt,Hn,Uo,Vi,R2,N2,kI,_e,jn]})}return t})();var P2=/^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|(?:(?:\+|-)\d{2}:\d{2}))?)?$/,L2=/^(\d?\d)[:.](\d?\d)(?:[:.](\d?\d))?\s*(AM|PM)?$/i;function Nb(t,i){let e=Array(t);for(let n=0;n<t;n++)e[n]=i(n);return e}var V2=(()=>{class t extends dn{_matDateLocale=c(Mb,{optional:!0});constructor(){super();let e=c(Mb,{optional:!0});e!==void 0&&(this._matDateLocale=e),super.setLocale(this._matDateLocale)}getYear(e){return e.getFullYear()}getMonth(e){return e.getMonth()}getDate(e){return e.getDate()}getDayOfWeek(e){return e.getDay()}getMonthNames(e){let n=new Intl.DateTimeFormat(this.locale,{month:e,timeZone:"utc"});return Nb(12,r=>this._format(n,new Date(2017,r,1)))}getDateNames(){let e=new Intl.DateTimeFormat(this.locale,{day:"numeric",timeZone:"utc"});return Nb(31,n=>this._format(e,new Date(2017,0,n+1)))}getDayOfWeekNames(e){let n=new Intl.DateTimeFormat(this.locale,{weekday:e,timeZone:"utc"});return Nb(7,r=>this._format(n,new Date(2017,0,r+1)))}getYearName(e){let n=new Intl.DateTimeFormat(this.locale,{year:"numeric",timeZone:"utc"});return this._format(n,e)}getFirstDayOfWeek(){if(typeof Intl<"u"&&Intl.Locale){let e=new Intl.Locale(this.locale),n=(e.getWeekInfo?.()||e.weekInfo)?.firstDay??0;return n===7?0:n}return 0}getNumDaysInMonth(e){return this.getDate(this._createDateWithOverflow(this.getYear(e),this.getMonth(e)+1,0))}clone(e){return new Date(e.getTime())}createDate(e,n,r){let o=this._createDateWithOverflow(e,n,r);return o.getMonth()!=n,o}today(){return new Date}parse(e,n){return typeof e=="number"?new Date(e):e?new Date(Date.parse(e)):null}format(e,n){if(!this.isValid(e))throw Error("NativeDateAdapter: Cannot format invalid date.");let r=new Intl.DateTimeFormat(this.locale,X(C({},n),{timeZone:"utc"}));return this._format(r,e)}addCalendarYears(e,n){return this.addCalendarMonths(e,n*12)}addCalendarMonths(e,n){let r=this._createDateWithOverflow(this.getYear(e),this.getMonth(e)+n,this.getDate(e));return this.getMonth(r)!=((this.getMonth(e)+n)%12+12)%12&&(r=this._createDateWithOverflow(this.getYear(r),this.getMonth(r),0)),r}addCalendarDays(e,n){return this._createDateWithOverflow(this.getYear(e),this.getMonth(e),this.getDate(e)+n)}toIso8601(e){return[e.getUTCFullYear(),this._2digit(e.getUTCMonth()+1),this._2digit(e.getUTCDate())].join("-")}deserialize(e){if(typeof e=="string"){if(!e)return null;if(P2.test(e)){let n=new Date(e);if(this.isValid(n))return n}}return super.deserialize(e)}isDateInstance(e){return e instanceof Date}isValid(e){return!isNaN(e.getTime())}invalid(){return new Date(NaN)}setTime(e,n,r,o){let a=this.clone(e);return a.setHours(n,r,o,0),a}getHours(e){return e.getHours()}getMinutes(e){return e.getMinutes()}getSeconds(e){return e.getSeconds()}parseTime(e,n){if(typeof e!="string")return e instanceof Date?new Date(e.getTime()):null;let r=e.trim();if(r.length===0)return null;let o=this._parseTimeString(r);if(o===null){let a=r.replace(/[^0-9:(AM|PM)]/gi,"").trim();a.length>0&&(o=this._parseTimeString(a))}return o||this.invalid()}addSeconds(e,n){return new Date(e.getTime()+n*1e3)}_createDateWithOverflow(e,n,r){let o=new Date;return o.setFullYear(e,n,r),o.setHours(0,0,0,0),o}_2digit(e){return("00"+e).slice(-2)}_format(e,n){let r=new Date;return r.setUTCFullYear(n.getFullYear(),n.getMonth(),n.getDate()),r.setUTCHours(n.getHours(),n.getMinutes(),n.getSeconds(),n.getMilliseconds()),e.format(r)}_parseTimeString(e){let n=e.toUpperCase().match(L2);if(n){let r=parseInt(n[1]),o=parseInt(n[2]),a=n[3]==null?void 0:parseInt(n[3]),s=n[4];if(r===12?r=s==="AM"?0:r:s==="PM"&&(r+=12),Fb(r,0,23)&&Fb(o,0,59)&&(a==null||Fb(a,0,59)))return this.setTime(this.today(),r,o,a||0)}return null}static \u0275fac=function(n){return new(n||t)};static \u0275prov=y({token:t,factory:t.\u0275fac})}return t})();function Fb(t,i,e){return!isNaN(t)&&t>=i&&t<=e}var B2={parse:{dateInput:null,timeInput:null},display:{dateInput:{year:"numeric",month:"numeric",day:"numeric"},timeInput:{hour:"numeric",minute:"numeric"},monthYearLabel:{year:"numeric",month:"short"},dateA11yLabel:{year:"numeric",month:"long",day:"numeric"},monthYearA11yLabel:{year:"numeric",month:"long"},timeOptionLabel:{hour:"numeric",minute:"numeric"}}};var RI=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=H({type:t});static \u0275inj=j({providers:[j2()]})}return t})();function j2(t=B2){return[{provide:dn,useClass:V2},{provide:Jo,useValue:t}]}function H2(t,i){if(t&1&&(m(0,"p",3),g(1),f(),m(2,"p",9),g(3),f()),t&2){let e=S();p(),be(" Dagsrapport f\xF6r ",e.childSignal().name," "),p(2),be(" ",e.dateLabel," ")}}function U2(t,i){t&1&&(m(0,"p",3),g(1," V\xE4lj datum f\xF6r att se n\xE4rvaro och journal "),f())}function z2(t,i){t&1&&g(0," V\xE4lj datum f\xF6r att se n\xE4rvaro och journal ")}function $2(t,i){if(t&1&&g(0),t&2){let e=S();be(" N\xE4rvaro ",e.dateLabel," ")}}var lh=class t{childSignal=Le.required();journalService=c(Es);attendanceService=c(Wr);selected=I(null);currentJournal=I(null);currentChildAttendance="";dateLabel="";yesterday=new Date;statusOptions=[{value:"NOT_SET",label:"\u2014"},{value:"CHECKED_IN",label:"Incheckad"},{value:"CHECKED_OUT",label:"Utcheckad"},{value:"LEAVE",label:"Ledig"},{value:"ABSENT",label:"Fr\xE5nvarande"}];months=["Januari","Februari","Mars","April","Maj","Juni","Juli","Augusti","September","Oktober","November","December"];days=["S\xF6ndag","M\xE5ndag","Tisdag","Onsdag","Torsdag","Fredag","L\xF6rdag"];constructor(){this.yesterday.setDate(this.yesterday.getDate()-1),Xt(i=>{let e=this.selected(),n=this.childSignal().id;if(!e){this.currentJournal.set(null);return}this.dateLabel=`${this.days[e.getDay()]} ${e.getDate()} ${this.months[e.getMonth()]} ${e.getFullYear()}`;let r=e.getFullYear(),o=String(e.getMonth()+1).padStart(2,"0"),a=String(e.getDate()).padStart(2,"0"),s=`${r}-${o}-${a}`,l=this.attendanceService.getSignal(this.childSignal().id,s)()??"NOT_SET";this.currentChildAttendance=this.statusOptions.find(({value:u})=>u===l)?.label;let d=this.journalService.getJournalByDate(n,s).subscribe({next:u=>{this.currentJournal.set(u)}});i(()=>{d.unsubscribe()})})}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=D({type:t,selectors:[["history"]],inputs:{childSignal:[1,"childSignal"]},outputs:{childSignal:"childSignalChange"},decls:17,vars:8,consts:[[1,"outer-container"],[1,"journal-display"],[1,"journal-header"],[1,"journal-title"],[1,"text-area"],[1,"journal-text"],[1,"calendar-container"],[1,"calendar",3,"selectedChange","selected","maxDate"],[1,"attendance-info"],[1,"bold-label"]],template:function(e,n){if(e&1&&(m(0,"div",0)(1,"mat-card",1)(2,"mat-card-header",2),W(3,H2,4,2),W(4,U2,2,0,"p",3),f(),k(5,"mat-divider"),m(6,"mat-card-content",4)(7,"p",5),g(8),f()()(),m(9,"div",6)(10,"mat-card")(11,"mat-calendar",7),E("selectedChange",function(o){return n.selected.set(o)}),f()(),m(12,"p",8),W(13,z2,1,0),W(14,$2,1,1),m(15,"span",9),g(16),f()()()()),e&2){let r;p(3),G(n.selected()!==null?3:-1),p(),G(n.selected()===null?4:-1),p(4),se((r=n.currentJournal())==null?null:r.content),p(3),R("selected",n.selected())("maxDate",n.yesterday),p(2),G(n.selected()===null?13:-1),p(),G(n.dateLabel!==""?14:-1),p(2),se(n.currentChildAttendance)}},dependencies:[Ri,At,sn,Fn,AI,Bc,RI,en],styles:["[_nghost-%COMP%]{display:flex;min-height:0;width:100%;height:100%}.outer-container[_ngcontent-%COMP%]{background:var(--mat-sys-inverse-primary);display:flex;flex-direction:row;justify-content:center;min-height:0;overflow:hidden;flex:1;box-shadow:var(--mat-sys-level2);box-sizing:border-box;padding:1em;gap:1em}.journal-display[_ngcontent-%COMP%]{flex:1;min-height:0;box-shadow:var(--mat-sys-level2);display:flex;flex-direction:column;overflow:hidden}.text-area[_ngcontent-%COMP%]{background-color:var(--mat-sys-surface-variant);min-height:0;overflow-y:auto;border-radius:0% 0% 2% 2%;flex:1}.journal-header[_ngcontent-%COMP%]{display:flex;font-weight:400!important;font-size:large;min-height:11%;background:var(--mat-sys-surface-dim);flex-direction:row;justify-content:center;gap:1em}.calendar-container[_ngcontent-%COMP%]{width:33%;justify-content:center;height:fit-content;box-shadow:var(--mat-sys-level2);border-radius:3%;background:var(--mat-sys-surface-dim)}.attendance-info[_ngcontent-%COMP%]{display:flex;justify-content:center;font-weight:400;gap:1em}.bold-label[_ngcontent-%COMP%]{font-weight:500}.journal-text[_ngcontent-%COMP%]{font:var(--mat-sys-body-large);margin:.5em}"]})};function W2(t,i){if(t&1&&(m(0,"p",8),g(1),f()),t&2){let e=S(2);p(),se(e.groupSignal().name)}}function G2(t,i){if(t&1){let e=Ue();m(0,"div",6)(1,"mat-card-header",7)(2,"span"),g(3),f(),W(4,W2,2,1,"p",8),k(5,"main-presence-container",9),f(),m(6,"div",10)(7,"child-display",11),E("attendanceChangeEvent",function(r){ue(e);let o=S();return me(o.wsUpdateAttendance(r))}),et("childSignalChange",function(r){ue(e);let o=S();return ke(o.childSignal,r)||(o.childSignal=r),me(r)})("dateSignalChange",function(r){ue(e);let o=S();return ke(o.dateSignal,r)||(o.dateSignal=r),me(r)}),f()()(),m(8,"mat-tab-group",12)(9,"mat-tab",13),k(10,"information",14),f(),m(11,"mat-tab",15),k(12,"main-live-journal",16),f(),m(13,"mat-tab",17)(14,"history",18),et("childSignalChange",function(r){ue(e);let o=S();return ke(o.childSignal,r)||(o.childSignal=r),me(r)}),f()()()}if(t&2){let e=S();p(3),se(e.childSignal().name),p(),G(e.groupSignal().name!=="alla"?4:-1),p(),R("filter",Mi(e.childSignal().id)),p(2),Je("childSignal",e.childSignal)("dateSignal",e.dateSignal),p(3),R("childSignal",e.childSignal()),p(),R("label",Mi(e.reportTitle())),p(),R("childSignal",e.childSignal())("groupSignal",e.groupSignal())("contentSignal",e.contentSignal()),p(2),Je("childSignal",e.childSignal)}}function q2(t,i){if(t&1&&(m(0,"mat-card-header",7)(1,"span"),g(2),f(),m(3,"p",8),g(4),f(),k(5,"main-presence-container",19),f(),m(6,"mat-tab-group",12)(7,"mat-tab",15),k(8,"main-live-journal",16),f()()),t&2){let e=S();p(2),se(e.groupSignal().name),p(2),se(e.dateSignal()),p(),R("filter",Mi(e.groupSignal().id)),p(2),R("label",Mi(e.reportTitle())),p(),R("childSignal",e.childSignal())("groupSignal",e.groupSignal())("contentSignal",e.contentSignal())}}function Y2(t,i){t&1&&k(0,"account-page",2)}function Q2(t,i){t&1&&k(0,"homepage",3)}var ks=class t{presence=c(Jr);childSignal=I({name:"",id:0,date:"",status:"NOT_SET",present:null});contentSignal=Le.required();groupSignal=I({name:"",id:0});allGroups=I([]);groupService=c(th);childList=Xn.required(xs);teachers=[{}];dateSignal=I("");months=["Januari","Februari","Mars","April","Maj","Juni","Juli","Augusti","September","Oktober","November","December"];days=["S\xF6ndag","M\xE5ndag","Tisdag","Onsdag","Torsdag","Fredag","L\xF6rdag"];ngOnInit(){this.dateSignal.set(this.getDate()),this.loadGroups()}reportTitle=gt(()=>{switch(this.contentSignal()){case"childView":return this.childSignal().name+"s dagsrapport";case"groupView":return this.groupSignal().name+"s dagsrapport";default:return"ERROR"}});getDate(){let i=new Date;return`${this.days[i.getDay()]} ${i.getDate()} ${this.months[i.getMonth()]} ${i.getFullYear()}`}loadGroups(){this.groupService.getGroups().subscribe({next:i=>{this.allGroups.set(i)}})}handleWebsocketMessage(i){this.childList().handleWebsocketMessage(i)}attendanceChangeEvent=new M;wsUpdateAttendance(i){this.attendanceChangeEvent.emit(i)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=D({type:t,selectors:[["main-panel"]],viewQuery:function(e,n){e&1&&Di(n.childList,xs,5),e&2&&xi()},inputs:{contentSignal:[1,"contentSignal"]},outputs:{contentSignal:"contentSignalChange",attendanceChangeEvent:"attendanceChangeEvent"},decls:10,vars:8,consts:[[1,"main-card-content"],[1,"main-card-left"],[1,"account-page"],[1,"home-card"],[1,"main-card-right"],[3,"groupSignalChange","childSignalChange","contentSignalChange","allGroupsChange","groupSignal","childSignal","contentSignal","allGroups"],[1,"sub-row"],[1,"title"],[1,"mini-spacer"],[3,"filter"],[1,"childDisplay"],[3,"attendanceChangeEvent","childSignalChange","dateSignalChange","childSignal","dateSignal"],["mat-stretch-tabs","false","mat-align-tabs","start"],["label","Information"],[3,"childSignal"],[3,"label"],[3,"childSignal","groupSignal","contentSignal"],["label","Historik"],[3,"childSignalChange","childSignal"],["isGroup","yes",3,"filter"]],template:function(e,n){e&1&&(m(0,"mat-card")(1,"mat-card-content",0)(2,"div",1),W(3,G2,15,13),W(4,q2,9,9),W(5,Y2,1,0,"account-page",2),W(6,Q2,1,0,"homepage",3),f(),m(7,"mat-card",4)(8,"div",4)(9,"main-child-list",5),et("groupSignalChange",function(o){return ke(n.groupSignal,o)||(n.groupSignal=o),o})("childSignalChange",function(o){return ke(n.childSignal,o)||(n.childSignal=o),o})("contentSignalChange",function(o){return ke(n.contentSignal,o)||(n.contentSignal=o),o})("allGroupsChange",function(o){return ke(n.allGroups,o)||(n.allGroups=o),o}),f()()()()()),e&2&&(p(3),G(n.contentSignal()==="childView"?3:-1),p(),G(n.contentSignal()==="groupView"?4:-1),p(),G(n.contentSignal()==="teacherView"?5:-1),p(),G(n.contentSignal()==="homeView"?6:-1),p(3),Je("groupSignal",n.groupSignal)("childSignal",n.childSignal)("contentSignal",n.contentSignal)("allGroups",n.allGroups))},dependencies:[xs,Bi,Yf,At,Fn,sn,eh,ih,Ds,Ic,Rf,rh,oh,lh],styles:["[_nghost-%COMP%]{display:block;margin:0 auto;border-radius:12px;box-sizing:border-box;width:100%;height:100%}mat-card-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font:var(--mat-sys-headline-medium)}h2[_ngcontent-%COMP%]{margin-bottom:16px}mat-card[_ngcontent-%COMP%]{width:100%;height:100%}.main-card-content[_ngcontent-%COMP%]{display:flex;flex-direction:row;box-sizing:border-box;height:100%}.main-card-left[_ngcontent-%COMP%]{width:100%;height:100%;padding-right:2%;overflow:hidden;display:flex;flex-direction:column;flex:1.5}.main-card-right[_ngcontent-%COMP%]{width:100%;height:100%;overflow-y:hidden;min-width:fit-content;overflow-x:auto;display:flex;flex:1;min-width:30%}mat-card-header[_ngcontent-%COMP%]{flex:.15}.childDisplay[_ngcontent-%COMP%]{box-shadow:var(--mat-sys-level1);display:flex;flex-direction:row;justify-content:center;align-items:center;background:var(--mat-sys-inverse-primary);border-radius:12px;max-width:fit-content}mat-tab-group[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:column;min-height:0}  .mat-mdc-tab-body-wrapper{flex:1;min-height:0}  .mat-mdc-tab-body-content{height:100%;overflow:hidden}  .mat-mdc-form-field-flex{height:100%}  .mat-mdc-form-field-infix{height:100%}main-live-journal[_ngcontent-%COMP%]{flex:4}.spacer[_ngcontent-%COMP%]{flex:1 1 auto}  .mat-mdc-form-field-subscript-wrapper{display:none}.title[_ngcontent-%COMP%]{text-wrap:nowrap;margin-bottom:1em}main-presence-container[_ngcontent-%COMP%]{margin-left:1em}.mini-spacer[_ngcontent-%COMP%]{margin:1em}.sub-row[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;align-items:center}.home-card[_ngcontent-%COMP%]{display:flex;flex:1}.account-page[_ngcontent-%COMP%]{flex:1}"]})};var Z2=["*",[["mat-toolbar-row"]]],K2=["*","mat-toolbar-row"],X2=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=A({type:t,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return t})(),ch=(()=>{class t{_elementRef=c(V);_platform=c(ce);_document=c(Y);color;_toolbarRows;constructor(){}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=D({type:t,selectors:[["mat-toolbar"]],contentQueries:function(n,r,o){if(n&1&&wt(o,X2,5),n&2){let a;F(a=P())&&(r._toolbarRows=a)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(n,r){n&2&&(Dt(r.color?"mat-"+r.color:""),U("mat-toolbar-multiple-rows",r._toolbarRows.length>0)("mat-toolbar-single-row",r._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:K2,decls:2,vars:0,template:function(n,r){n&1&&(Me(Z2),ee(0),ee(1,1))},styles:[`.mat-toolbar {
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
`],encapsulation:2,changeDetection:0})}return t})();var OI=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=H({type:t});static \u0275inj=j({imports:[_e]})}return t})();var NI=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=H({type:t});static \u0275inj=j({imports:[jn,_e,jn]})}return t})();var dh=class t{groupSignal=I({name:"",id:0});allGroups=I([]);contentSignal=I("");presence=c(Jr);socketService=c(Xr);mainPanel=Xn.required(ks);async ngOnInit(){this.contentSignal.set("homeView"),this.socketService.connect(`${Et.wsUrl}/ws`),await this.socketService.ensureConnected(),this.presence.init(),this.socketService.setAttendanceRoom("ALL"),this.socketService.getMessages("attendanceMessages").subscribe(i=>{if(!("childId"in i)){console.error("Attendance message with incorrect body!");return}console.log(i),this.handleWebsocketMessage(i)})}ngOnDestroy(){this.socketService.leaveJournalRoom()}handleWebsocketMessage(i){this.mainPanel().handleWebsocketMessage(i)}wsUpdateAttendance(i){this.socketService.sendAttendanceUpdate(i)}onTabChange(i){let e=i.index,n=this.allGroups()[e];this.contentSignal.set("groupView"),this.groupSignal.set(n),this.presence.spoofTeacherUpdate()}logout(){document.cookie='jwtToken=""',sessionStorage.removeItem("token"),sessionStorage.removeItem("UserId"),sessionStorage.removeItem("role"),this.socketService.disconnect(),window.location.reload()}minaSidor(){this.contentSignal.set("teacherView")}hem(){this.contentSignal.set("homeView")}hover(i){console.log(i)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=D({type:t,selectors:[["main-page"]],viewQuery:function(e,n){e&1&&Di(n.mainPanel,ks,5),e&2&&xi()},decls:15,vars:1,consts:[[1,"main-nav"],["color","mat-sys-primary"],["role","button",1,"button-19"],["matButton","tonal",1,"mina-sidor-button",3,"click"],["matButton","tonal",3,"click"],[1,"example-spacer"],["matButton","tonal",1,"logout-button",3,"click"],[1,"main-body"],[1,"main-panel-container"],[3,"attendanceChangeEvent","contentSignalChange","contentSignal"]],template:function(e,n){e&1&&(m(0,"div",0)(1,"mat-toolbar",1)(2,"span"),g(3,"K\xEEndGuard"),f(),m(4,"div",2)(5,"button",3),E("click",function(){return n.minaSidor()}),g(6,"Mina sidor"),f()(),m(7,"button",4),E("click",function(){return n.hem()}),g(8,"Hem"),f(),k(9,"span",5),m(10,"button",6),E("click",function(){return n.logout()}),g(11,"Logout"),f()()(),m(12,"div",7)(13,"div",8)(14,"main-panel",9),E("attendanceChangeEvent",function(o){return n.wsUpdateAttendance(o)}),et("contentSignalChange",function(o){return ke(n.contentSignal,o)||(n.contentSignal=o),o}),f()()()),e&2&&(p(14),Je("contentSignal",n.contentSignal))},dependencies:[OI,ch,ks,NI,dt,Bt],styles:["[_nghost-%COMP%]{background-color:var(--mat-sys-surface);width:100%;height:100%;display:flex}mat-toolbar[_ngcontent-%COMP%]{background:linear-gradient(90deg,var(--mat-sys-inverse-primary) 30%,var(--mat-sys-tertiary) 100%);color:var(--mat-sys-primary-on-surface);display:flex;align-items:center;position:fixed}mat-tab-group[_ngcontent-%COMP%]{height:100%}mat-tab[_ngcontent-%COMP%]{height:100%}.example-spacer[_ngcontent-%COMP%]{flex:1 1 auto}  .mat-mdc-tab{background-color:var(--mat-sys-surface-container);border-radius:5px;box-shadow:var(--mat-sys-level1)}  .mdc-tab--active{background-color:var(--mat-sys-surface-container);border-radius:5px;box-shadow:var(--mat-sys-level3)}  .mat-mdc-tab-body-wrapper{height:100%}.main-body[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:100%;width:100%}.main-panel-container[_ngcontent-%COMP%]{width:85%;height:80%}.mina-sidor-button[_ngcontent-%COMP%]{margin:2em}"]})};var uh=t=>{let i=t.url.join(""),e=c(an),r=c(ps).getRole();switch(i){case"":return r?r==="ADMIN"?e.parseUrl("/admin"):e.parseUrl("/app"):!0;case"app":return r?r==="ADMIN"?e.parseUrl("/admin"):!0:e.parseUrl("/");case"admin":return r?r!=="ADMIN"?e.parseUrl("/app"):!0:e.parseUrl("/");default:return!1}};var zi=class t{adminUrl=`${Et.apiUrl}/api/admin`;userUrl=`${Et.apiUrl}/api/user`;http=c(kt);getChildren(){return this.http.get(`${this.adminUrl}/children`)}getGroups(){return this.http.get(`${this.adminUrl}/groups`)}createChild(i){return this.http.post(`${this.adminUrl}/child`,{name:i})}createGroup(i){return this.http.post(`${this.adminUrl}/group`,{name:i})}deleteChild(i){return this.http.delete(`${this.adminUrl}/child/${i}`)}assignChildToGroup(i,e){return this.http.put(`${this.adminUrl}/group/${i}/child/${e}`,{})}activateUser(i){return this.http.put(`${this.adminUrl}/user/${i}`,{})}inactivateUser(i){return this.http.put(`${this.adminUrl}/user/${i}/inactive`,{})}getInactiveUsers(){return this.http.get(`${this.adminUrl}/users/inactive`)}getAllTeachers(){return this.http.get(`${this.userUrl}/teachers`)}static \u0275fac=function(e){return new(e||t)};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})};var eB=(t,i)=>i.id;function tB(t,i){if(t&1&&(m(0,"mat-option",4),g(1),f()),t&2){let e=i.$implicit;R("value",e.id),p(),se(e.name)}}var jc=class t{fb=c(If);adminService=c(zi);groups=I([]);children=I([]);form=this.fb.group({firstName:["",ii.required],lastName:["",ii.required],groupId:[null]});childAdded=new M;ngOnInit(){this.loadGroups()}loadGroups(){this.adminService.getGroups().subscribe({next:i=>this.groups.set(i),error:i=>console.error(i)})}onSubmit(){if(this.form.valid){let i=`${this.form.value.firstName} ${this.form.value.lastName}`;this.adminService.createChild(i).subscribe({next:e=>{this.form.value.groupId?this.adminService.assignChildToGroup(this.form.value.groupId,e.id).subscribe({next:()=>{this.childAdded.emit(),this.form.reset()}}):(this.childAdded.emit(),this.form.reset())},error:e=>console.error(e)})}}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=D({type:t,selectors:[["add-child-form"]],outputs:{childAdded:"childAdded"},decls:17,vars:2,consts:[[1,"form-container",3,"ngSubmit","formGroup"],["matInput","","formControlName","firstName"],["matInput","","formControlName","lastName"],["formControlName","groupId"],[3,"value"],["mat-raised-button","","color","mat-sys-primary","type","submit",3,"disabled"]],template:function(e,n){e&1&&(m(0,"form",0),E("ngSubmit",function(){return n.onSubmit()}),m(1,"mat-form-field")(2,"mat-label"),g(3,"Namn"),f(),k(4,"input",1),f(),m(5,"mat-form-field")(6,"mat-label"),g(7,"Efternamn"),f(),k(8,"input",2),f(),m(9,"mat-form-field")(10,"mat-label"),g(11,"Grupp"),f(),m(12,"mat-select",3),Ge(13,tB,2,2,"mat-option",4,eB),f()(),m(15,"button",5),g(16," L\xE4gg till barn "),f()()),e&2&&(R("formGroup",n.form),p(13),qe(n.groups()),p(2),R("disabled",n.form.invalid))},dependencies:[Sf,Mf,Bn,Pi,Df,mr,Dc,Ht,jt,Ln,Li,ln,dt,Bt,bs,Un,Yr,qr],styles:[".form-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;gap:8px}"]})};var mh=class t{dialogRef=c(Ko);onConfirm(){this.dialogRef.close(!0)}onDeny(){this.dialogRef.close(!1)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=D({type:t,selectors:[["delete-confirmation-dialog"]],decls:8,vars:0,consts:[[1,"flex-with-style"],[1,"top-text"],[1,"button-group"],[1,"button",3,"click"]],template:function(e,n){e&1&&(Ee(0,"div",0)(1,"p",1),g(2," \xC4r du s\xE4ker p\xE5 att du vill ta bort barnet? "),Te(),Ee(3,"li",2)(4,"button",3),An("click",function(){return n.onConfirm()}),g(5," Ja "),Te(),Ee(6,"button",3),An("click",function(){return n.onDeny()}),g(7," Nej "),Te()()())},dependencies:[Gf,dt],styles:["[_nghost-%COMP%]{display:block;text-align:center;padding:8px}.top-text[_ngcontent-%COMP%]{font:var(--mat-sys-title-medium)}.button-group[_ngcontent-%COMP%]{display:flex;justify-content:center;gap:32px}.button[_ngcontent-%COMP%]{padding:8px 32px;font:var(--mat-sys-label-small);font-weight:700;cursor:pointer;border-radius:4px;transition:all .2s ease-in-out;background-color:var(--mat-sys-primary);color:var(--mat-sys-on-primary);border:1px solid}button[_ngcontent-%COMP%]:hover{background-color:var(--mat-sys-primary-fixed-dim)}"]})};var FI=(t,i)=>i.id;function nB(t,i){if(t&1&&(m(0,"mat-option",6),g(1),f()),t&2){let e=i.$implicit;R("value",e.id),p(),se(e.name)}}function iB(t,i){t&1&&k(0,"mat-divider")}function rB(t,i){if(t&1){let e=Ue();m(0,"mat-list-item")(1,"span",3),g(2),f(),m(3,"div",4)(4,"mat-select",5,0),E("selectionChange",function(r){let o=ue(e).$implicit,a=on(5),s=S();return me(s.onMove(o,r.value,a))}),Ge(6,nB,2,2,"mat-option",6,FI),f(),m(8,"button",7),E("click",function(){let r=ue(e).$implicit,o=S();return me(o.onDelete(r))}),m(9,"mat-icon"),g(10,"cancel"),f()()()(),W(11,iB,1,0,"mat-divider")}if(t&2){let e=i.$implicit,n=i.$index,r=i.$count,o=S();p(2),nr(" ",e.name," - ",(e.group==null?null:e.group.name)??"Ingen grupp"," "),p(4),qe(o.groups()),p(5),G(n!==r-1?11:-1)}}var Hc=class t{adminService=c(zi);dialog=c(Oc);groups=I([]);children=I([]);childGroupChanged=new M;childDeleted=new M;ngOnInit(){this.loadChildren(),this.loadGroups()}loadGroups(){this.adminService.getGroups().subscribe({next:i=>this.groups.set(i),error:i=>console.error(i)})}loadChildren(){this.adminService.getChildren().subscribe({next:i=>this.children.set([...i].sort((e,n)=>e.name.localeCompare(n.name))),error:i=>console.log("Error",i)})}onDelete(i){this.dialog.open(mh).afterClosed().subscribe(n=>{n&&this.adminService.deleteChild(i.id).subscribe({next:()=>{this.children.set(this.children().filter(r=>r.id!==i.id)),this.loadChildren(),this.childDeleted.emit()},error:r=>console.error(r)})})}onMove(i,e,n){n.value=null,this.adminService.assignChildToGroup(e,i.id).subscribe({next:()=>{this.loadChildren(),n.value=null,this.childGroupChanged.emit()},error:r=>console.error(r)})}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=D({type:t,selectors:[["child-admin-list"]],outputs:{childGroupChanged:"childGroupChanged",childDeleted:"childDeleted"},decls:6,vars:1,consts:[["groupSelect","matSelect"],[1,"antal-barn"],[1,"child-admin-list-container"],["matListItemTitle",""],["matListItemMeta","",1,"move-container"],[1,"move-symbol",3,"selectionChange"],[3,"value"],["matListItemMeta","","mat-icon-button","","color","warn",3,"click"]],template:function(e,n){e&1&&(m(0,"span",1),g(1),f(),m(2,"div",2)(3,"mat-list"),Ge(4,rB,12,3,null,null,FI),f()()),e&2&&(p(),be("Antal barn: ",n.children().length),p(3),qe(n.children()))},dependencies:[Pr,dt,Hr,Kr,Cs,Zr,en,pr,Xo,Vn,Yt,Yr,qr,Un],styles:[".child-admin-list-container[_ngcontent-%COMP%]{display:block;max-height:200px;overflow-y:auto;background:#f5f5f5;border-radius:12px}mat-list-item[_ngcontent-%COMP%]{height:auto!important}.example-spacer[_ngcontent-%COMP%]{flex:1 1 auto}.move-container[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px}.move-symbol[_ngcontent-%COMP%]{width:200px}.antal-barn[_ngcontent-%COMP%]{font-weight:500;font-size:20px}"]})};var oB=(t,i)=>i.id;function aB(t,i){t&1&&k(0,"mat-divider")}function sB(t,i){if(t&1&&(m(0,"mat-list-item")(1,"span",4),g(2),f()(),W(3,aB,1,0,"mat-divider")),t&2){let e=i.$implicit,n=i.$index,r=i.$count,o=S();p(2),nr(" ",e.name," (",o.childCount(e.id)," barn)"),p(),G(n!==r-1?3:-1)}}var Uc=class t{adminService=c(zi);fb=c(If);form=this.fb.group({groupName:["",ii.required]});groups=I([]);children=I([]);groupCreated=new M;ngOnInit(){this.loadGroups(),this.loadChildren()}loadGroups(){this.adminService.getGroups().subscribe({next:i=>this.groups.set(i),error:i=>console.error(i)})}loadChildren(){this.adminService.getChildren().subscribe({next:i=>this.children.set(i),error:i=>console.log("Error",i)})}childCount(i){return this.children().filter(e=>e.group?.id==i).length}onCreateGroup(){this.form.valid&&this.adminService.createGroup(this.form.value.groupName).subscribe({next:()=>{this.loadGroups(),this.groupCreated.emit(),this.form.reset()},error:i=>console.error(i)})}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=D({type:t,selectors:[["group"]],outputs:{groupCreated:"groupCreated"},decls:11,vars:2,consts:[[1,"group-container"],[3,"ngSubmit","formGroup"],["matInput","","formControlName","groupName"],["mat-raised-button","","color","mat-sys-primary","type","submit",3,"disabled"],["matListItemTitle",""]],template:function(e,n){e&1&&(m(0,"div",0)(1,"mat-list"),Ge(2,sB,4,3,null,null,oB),f()(),m(4,"form",1),E("ngSubmit",function(){return n.onCreateGroup()}),m(5,"mat-form-field")(6,"mat-label"),g(7,"Ny grupp"),f(),k(8,"input",2),f(),m(9,"button",3),g(10," Skapa ny grupp "),f()()),e&2&&(p(2),qe(n.groups()),p(2),R("formGroup",n.form),p(5),R("disabled",n.form.invalid))},dependencies:[Kr,Cs,Zr,en,pr,Ht,jt,Ln,Li,ln,dt,Bt,Sf,Mf,Bn,Pi,Df,mr,Dc,Bi],styles:[".group-container[_ngcontent-%COMP%]{display:block;max-height:200px;overflow-y:auto;background:#f5f5f5;border-radius:12px}"]})};var lB=(t,i)=>i.id;function cB(t,i){if(t&1){let e=Ue();m(0,"button",3),E("click",function(){ue(e);let r=S().$implicit,o=S();return me(o.inactivateUser(r.id))}),m(1,"mat-icon"),g(2,"cancel"),f(),g(3," Inaktivera "),f()}}function dB(t,i){if(t&1){let e=Ue();m(0,"button",3),E("click",function(){ue(e);let r=S().$implicit,o=S();return me(o.activateUser(r.id))}),m(1,"mat-icon"),g(2,"check"),f(),g(3," Aktivera "),f()}}function uB(t,i){t&1&&k(0,"mat-divider")}function mB(t,i){if(t&1&&(m(0,"mat-list-item")(1,"span",1),g(2),f(),W(3,cB,4,0,"button",2),W(4,dB,4,0,"button",2),f(),W(5,uB,1,0,"mat-divider")),t&2){let e=i.$implicit,n=i.$index,r=i.$count;p(2),be(" ",e.name," "),p(),G(e.active?3:-1),p(),G(e.active?-1:4),p(),G(n!==r-1?5:-1)}}var fh=class t{allUsers=I([]);adminService=c(zi);ngOnInit(){this.loadAllTeachers()}loadAllTeachers(){this.adminService.getAllTeachers().subscribe({next:i=>this.allUsers.set(i),error:i=>console.error(i)})}activateUser(i){this.adminService.activateUser(i).subscribe({next:()=>this.loadAllTeachers()})}inactivateUser(i){this.adminService.inactivateUser(i).subscribe({next:()=>this.loadAllTeachers()})}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=D({type:t,selectors:[["all-users"]],decls:4,vars:0,consts:[[1,"inactive-users-container"],["matListItemTitle",""],["matListItemMeta","","mat-raised-button","","color","mat-sys-primary"],["matListItemMeta","","mat-raised-button","","color","mat-sys-primary",3,"click"]],template:function(e,n){e&1&&(m(0,"div",0)(1,"mat-list"),Ge(2,mB,6,4,null,null,lB),f()()),e&2&&(p(2),qe(n.allUsers()))},dependencies:[dt,Bt,Kr,Cs,Zr,en,pr,Xo,Ri,Pr,Bi,Vn,Yt],styles:[".inactive-users-container[_ngcontent-%COMP%]{display:block;max-height:200px;overflow-y:auto;background:#f5f5f5;border-radius:12px}"]})};var hh=class t{childForm;childList;group;onChildAdded(){this.childList.loadChildren(),this.group.loadChildren()}onChildDeleted(){this.group.loadChildren()}onChildGroupChanged(){this.group.loadChildren()}onGroupCreated(){this.childForm.loadGroups(),this.childList.loadGroups()}router=c(an);logout(){document.cookie='jwtToken=""',sessionStorage.removeItem("token"),sessionStorage.removeItem("UserId"),sessionStorage.removeItem("role"),window.location.reload()}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=D({type:t,selectors:[["admin-page"]],viewQuery:function(e,n){if(e&1&&xe(jc,5)(Hc,5)(Uc,5),e&2){let r;F(r=P())&&(n.childForm=r.first),F(r=P())&&(n.childList=r.first),F(r=P())&&(n.group=r.first)}},decls:31,vars:0,consts:[[1,"admin-top"],[1,"mat-sys-primary"],[1,"example-spacer"],["mat-raised-button","",3,"click"],[1,"admin-container"],[1,"admin-header"],[3,"childAdded"],[3,"childGroupChanged","childDeleted"],[3,"groupCreated"]],template:function(e,n){e&1&&(m(0,"div",0)(1,"mat-toolbar",1)(2,"span"),g(3,"K\xEEndGuard"),f(),k(4,"span",2),m(5,"button",3),E("click",function(){return n.logout()}),g(6,"Logout"),f()()(),m(7,"div",4)(8,"h1",5)(9,"mat-icon"),g(10,"admin_panel_settings"),f(),g(11," Adminstration "),f(),m(12,"mat-card")(13,"mat-card-content")(14,"h2"),g(15,"Alla anv\xE4ndare"),f(),k(16,"all-users"),f()(),m(17,"h2"),g(18,"L\xE4gg till barn"),f(),m(19,"add-child-form",6),E("childAdded",function(){return n.onChildAdded()}),f(),m(20,"mat-card")(21,"mat-card-header"),k(22,"mat-card-title"),f(),m(23,"mat-card-content")(24,"child-admin-list",7),E("childGroupChanged",function(){return n.onChildGroupChanged()})("childDeleted",function(){return n.onChildDeleted()}),f()()(),m(25,"mat-card")(26,"mat-card-header")(27,"h2"),g(28,"Grupper"),f()(),m(29,"mat-card-content")(30,"group",8),E("groupCreated",function(){return n.onGroupCreated()}),f()()()())},dependencies:[At,jc,Hc,Uc,fh,Fn,sn,Ri,Hm,Pr,ch,dt,Bt,Vn,Yt],styles:["[_nghost-%COMP%]{display:block;justify-content:center;align-items:center;width:100vw;height:100vh;overflow-y:scroll}.admin-top[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:100;height:100}.admin-container[_ngcontent-%COMP%]{flex:1;padding:24px;display:flex;flex-direction:column;max-width:1200px;gap:10px;overflow:auto;margin:0 auto}h1[_ngcontent-%COMP%]{margin:0 0 16px}.example-spacer[_ngcontent-%COMP%]{flex:1 1 auto}mat-toolbar[_ngcontent-%COMP%]{background:linear-gradient(90deg,var(--mat-sys-inverse-primary) 30%,var(--mat-sys-tertiary) 100%);display:flex;align-items:center;position:sticky;top:0;max-width:100%}mat-card-title[_ngcontent-%COMP%]{font-size:1.2rem;font-weight:400;line-height:1}mat-card[_ngcontent-%COMP%]{background-color:#fafafa}.admin-header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;color:#d32f2f;border-bottom:2px solid #d32f2f}"]})};var PI=[{canActivate:[uh],path:"",component:Nf},{canActivate:[uh],path:"app",component:dh},{canActivate:[uh],path:"admin",component:hh}];var ph=class t{intercept(i,e){let n=sessionStorage.getItem("token");if(!n)return e.handle(i);let r=i.clone({setHeaders:X(C({},n?{Authorization:`Bearer ${n}`}:{}),{"ngrok-skip-browser-warning":"true"})});return e.handle(r)}static \u0275fac=function(e){return new(e||t)};static \u0275prov=y({token:t,factory:t.\u0275fac})};var LI={providers:[Up(),Mv(PI),Y_(Q_()),{provide:mm,useClass:ph,multi:!0}]};var gh=class t{title=I("frontend");static \u0275fac=function(e){return new(e||t)};static \u0275cmp=D({type:t,selectors:[["app-root"]],decls:1,vars:0,template:function(e,n){e&1&&k(0,"router-outlet")},dependencies:[Ql],encapsulation:2})};j_(gh,LI).catch(t=>console.error(t));
