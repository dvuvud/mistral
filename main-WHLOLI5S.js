var mI=Object.defineProperty,fI=Object.defineProperties;var hI=Object.getOwnPropertyDescriptors;var Xb=Object.getOwnPropertySymbols;var pI=Object.prototype.hasOwnProperty,gI=Object.prototype.propertyIsEnumerable;var Jb=(t,i,e)=>i in t?mI(t,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[i]=e,C=(t,i)=>{for(var e in i||={})pI.call(i,e)&&Jb(t,e,i[e]);if(Xb)for(var e of Xb(i))gI.call(i,e)&&Jb(t,e,i[e]);return t},ne=(t,i)=>fI(t,hI(i));var Wt=null,nd=!1,Nh=1,_I=null,ht=Symbol("SIGNAL");function ee(t){let i=Wt;return Wt=t,i}function ad(){return Wt}var co={version:0,lastCleanEpoch:0,dirty:!1,producers:void 0,producersTail:void 0,consumers:void 0,consumersTail:void 0,recomputing:!1,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,kind:"unknown",producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function Dr(t){if(nd)throw new Error("");if(Wt===null)return;Wt.consumerOnSignalRead(t);let i=Wt.producersTail;if(i!==void 0&&i.producer===t)return;let e,n=Wt.recomputing;if(n&&(e=i!==void 0?i.nextProducer:Wt.producers,e!==void 0&&e.producer===t)){Wt.producersTail=e,e.lastReadVersion=t.version;return}let r=t.consumersTail;if(r!==void 0&&r.consumer===Wt&&(!n||bI(r,Wt)))return;let o=ma(Wt),a={producer:t,consumer:Wt,nextProducer:e,prevConsumer:r,lastReadVersion:t.version,nextConsumer:void 0};Wt.producersTail=a,i!==void 0?i.nextProducer=a:Wt.producers=a,o&&iy(t,a)}function ey(){Nh++}function sd(t){if(!(ma(t)&&!t.dirty)&&!(!t.dirty&&t.lastCleanEpoch===Nh)){if(!t.producerMustRecompute(t)&&!ua(t)){od(t);return}t.producerRecomputeValue(t),od(t)}}function Fh(t){if(t.consumers===void 0)return;let i=nd;nd=!0;try{for(let e=t.consumers;e!==void 0;e=e.nextConsumer){let n=e.consumer;n.dirty||vI(n)}}finally{nd=i}}function Ph(){return Wt?.consumerAllowSignalWrites!==!1}function vI(t){t.dirty=!0,Fh(t),t.consumerMarkedDirty?.(t)}function od(t){t.dirty=!1,t.lastCleanEpoch=Nh}function xr(t){return t&&ty(t),ee(t)}function ty(t){t.producersTail=void 0,t.recomputing=!0}function uo(t,i){ee(i),t&&ny(t)}function ny(t){t.recomputing=!1;let i=t.producersTail,e=i!==void 0?i.nextProducer:t.producers;if(e!==void 0){if(ma(t))do e=Lh(e);while(e!==void 0);i!==void 0?i.nextProducer=void 0:t.producers=void 0}}function ua(t){for(let i=t.producers;i!==void 0;i=i.nextProducer){let e=i.producer,n=i.lastReadVersion;if(n!==e.version||(sd(e),n!==e.version))return!0}return!1}function Er(t){if(ma(t)){let i=t.producers;for(;i!==void 0;)i=Lh(i)}t.producers=void 0,t.producersTail=void 0,t.consumers=void 0,t.consumersTail=void 0}function iy(t,i){let e=t.consumersTail,n=ma(t);if(e!==void 0?(i.nextConsumer=e.nextConsumer,e.nextConsumer=i):(i.nextConsumer=void 0,t.consumers=i),i.prevConsumer=e,t.consumersTail=i,!n)for(let r=t.producers;r!==void 0;r=r.nextProducer)iy(r.producer,r)}function Lh(t){let i=t.producer,e=t.nextProducer,n=t.nextConsumer,r=t.prevConsumer;if(t.nextConsumer=void 0,t.prevConsumer=void 0,n!==void 0?n.prevConsumer=r:i.consumersTail=r,r!==void 0)r.nextConsumer=n;else if(i.consumers=n,!ma(i)){let o=i.producers;for(;o!==void 0;)o=Lh(o)}return e}function ma(t){return t.consumerIsAlwaysLive||t.consumers!==void 0}function ld(t){_I?.(t)}function bI(t,i){let e=i.producersTail;if(e!==void 0){let n=i.producers;do{if(n===t)return!0;if(n===e)break;n=n.nextProducer}while(n!==void 0)}return!1}function cd(t,i){return Object.is(t,i)}function qs(t,i){let e=Object.create(yI);e.computation=t,i!==void 0&&(e.equal=i);let n=()=>{if(sd(e),Dr(e),e.value===Gs)throw e.error;return e.value};return n[ht]=e,ld(e),n}var id=Symbol("UNSET"),rd=Symbol("COMPUTING"),Gs=Symbol("ERRORED"),yI=ne(C({},co),{value:id,dirty:!0,error:null,equal:cd,kind:"computed",producerMustRecompute(t){return t.value===id||t.value===rd},producerRecomputeValue(t){if(t.value===rd)throw new Error("");let i=t.value;t.value=rd;let e=xr(t),n,r=!1;try{n=t.computation(),ee(null),r=i!==id&&i!==Gs&&n!==Gs&&t.equal(i,n)}catch(o){n=Gs,t.error=o}finally{uo(t,e)}if(r){t.value=i;return}t.value=n,t.version++}});function CI(){throw new Error}var ry=CI;function oy(t){ry(t)}function Vh(t){ry=t}var wI=null;function Bh(t,i){let e=Object.create(Ys);e.value=t,i!==void 0&&(e.equal=i);let n=()=>ay(e);return n[ht]=e,ld(e),[n,a=>mo(e,a),a=>jh(e,a)]}function ay(t){return Dr(t),t.value}function mo(t,i){Ph()||oy(t),t.equal(t.value,i)||(t.value=i,DI(t))}function jh(t,i){Ph()||oy(t),mo(t,i(t.value))}var Ys=ne(C({},co),{equal:cd,value:void 0,kind:"signal"});function DI(t){t.version++,ey(),Fh(t),wI?.(t)}var Hh=ne(C({},co),{consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!0,dirty:!0,kind:"effect"});function Uh(t){if(t.dirty=!1,t.version>0&&!ua(t))return;t.version++;let i=xr(t);try{t.cleanup(),t.fn()}finally{uo(t,i)}}function me(t){return typeof t=="function"}function fa(t){let e=t(n=>{Error.call(n),n.stack=new Error().stack});return e.prototype=Object.create(Error.prototype),e.prototype.constructor=e,e}var dd=fa(t=>function(e){t(this),this.message=e?`${e.length} errors occurred during unsubscription:
${e.map((n,r)=>`${r+1}) ${n.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=e});function fo(t,i){if(t){let e=t.indexOf(i);0<=e&&t.splice(e,1)}}var ae=class t{constructor(i){this.initialTeardown=i,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let i;if(!this.closed){this.closed=!0;let{_parentage:e}=this;if(e)if(this._parentage=null,Array.isArray(e))for(let o of e)o.remove(this);else e.remove(this);let{initialTeardown:n}=this;if(me(n))try{n()}catch(o){i=o instanceof dd?o.errors:[o]}let{_finalizers:r}=this;if(r){this._finalizers=null;for(let o of r)try{sy(o)}catch(a){i=i??[],a instanceof dd?i=[...i,...a.errors]:i.push(a)}}if(i)throw new dd(i)}}add(i){var e;if(i&&i!==this)if(this.closed)sy(i);else{if(i instanceof t){if(i.closed||i._hasParent(this))return;i._addParent(this)}(this._finalizers=(e=this._finalizers)!==null&&e!==void 0?e:[]).push(i)}}_hasParent(i){let{_parentage:e}=this;return e===i||Array.isArray(e)&&e.includes(i)}_addParent(i){let{_parentage:e}=this;this._parentage=Array.isArray(e)?(e.push(i),e):e?[e,i]:i}_removeParent(i){let{_parentage:e}=this;e===i?this._parentage=null:Array.isArray(e)&&fo(e,i)}remove(i){let{_finalizers:e}=this;e&&fo(e,i),i instanceof t&&i._removeParent(this)}};ae.EMPTY=(()=>{let t=new ae;return t.closed=!0,t})();var zh=ae.EMPTY;function ud(t){return t instanceof ae||t&&"closed"in t&&me(t.remove)&&me(t.add)&&me(t.unsubscribe)}function sy(t){me(t)?t():t.unsubscribe()}var Qn={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var ha={setTimeout(t,i,...e){let{delegate:n}=ha;return n?.setTimeout?n.setTimeout(t,i,...e):setTimeout(t,i,...e)},clearTimeout(t){let{delegate:i}=ha;return(i?.clearTimeout||clearTimeout)(t)},delegate:void 0};function md(t){ha.setTimeout(()=>{let{onUnhandledError:i}=Qn;if(i)i(t);else throw t})}function Qs(){}var ly=$h("C",void 0,void 0);function cy(t){return $h("E",void 0,t)}function dy(t){return $h("N",t,void 0)}function $h(t,i,e){return{kind:t,value:i,error:e}}var ho=null;function pa(t){if(Qn.useDeprecatedSynchronousErrorHandling){let i=!ho;if(i&&(ho={errorThrown:!1,error:null}),t(),i){let{errorThrown:e,error:n}=ho;if(ho=null,e)throw n}}else t()}function uy(t){Qn.useDeprecatedSynchronousErrorHandling&&ho&&(ho.errorThrown=!0,ho.error=t)}var po=class extends ae{constructor(i){super(),this.isStopped=!1,i?(this.destination=i,ud(i)&&i.add(this)):this.destination=MI}static create(i,e,n){return new qi(i,e,n)}next(i){this.isStopped?Gh(dy(i),this):this._next(i)}error(i){this.isStopped?Gh(cy(i),this):(this.isStopped=!0,this._error(i))}complete(){this.isStopped?Gh(ly,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(i){this.destination.next(i)}_error(i){try{this.destination.error(i)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},xI=Function.prototype.bind;function Wh(t,i){return xI.call(t,i)}var qh=class{constructor(i){this.partialObserver=i}next(i){let{partialObserver:e}=this;if(e.next)try{e.next(i)}catch(n){fd(n)}}error(i){let{partialObserver:e}=this;if(e.error)try{e.error(i)}catch(n){fd(n)}else fd(i)}complete(){let{partialObserver:i}=this;if(i.complete)try{i.complete()}catch(e){fd(e)}}},qi=class extends po{constructor(i,e,n){super();let r;if(me(i)||!i)r={next:i??void 0,error:e??void 0,complete:n??void 0};else{let o;this&&Qn.useDeprecatedNextContext?(o=Object.create(i),o.unsubscribe=()=>this.unsubscribe(),r={next:i.next&&Wh(i.next,o),error:i.error&&Wh(i.error,o),complete:i.complete&&Wh(i.complete,o)}):r=i}this.destination=new qh(r)}};function fd(t){Qn.useDeprecatedSynchronousErrorHandling?uy(t):md(t)}function EI(t){throw t}function Gh(t,i){let{onStoppedNotification:e}=Qn;e&&ha.setTimeout(()=>e(t,i))}var MI={closed:!0,next:Qs,error:EI,complete:Qs};var ga=typeof Symbol=="function"&&Symbol.observable||"@@observable";function gn(t){return t}function Yh(...t){return Qh(t)}function Qh(t){return t.length===0?gn:t.length===1?t[0]:function(e){return t.reduce((n,r)=>r(n),e)}}var se=(()=>{class t{constructor(e){e&&(this._subscribe=e)}lift(e){let n=new t;return n.source=this,n.operator=e,n}subscribe(e,n,r){let o=II(e)?e:new qi(e,n,r);return pa(()=>{let{operator:a,source:s}=this;o.add(a?a.call(o,s):s?this._subscribe(o):this._trySubscribe(o))}),o}_trySubscribe(e){try{return this._subscribe(e)}catch(n){e.error(n)}}forEach(e,n){return n=my(n),new n((r,o)=>{let a=new qi({next:s=>{try{e(s)}catch(l){o(l),a.unsubscribe()}},error:o,complete:r});this.subscribe(a)})}_subscribe(e){var n;return(n=this.source)===null||n===void 0?void 0:n.subscribe(e)}[ga](){return this}pipe(...e){return Qh(e)(this)}toPromise(e){return e=my(e),new e((n,r)=>{let o;this.subscribe(a=>o=a,a=>r(a),()=>n(o))})}}return t.create=i=>new t(i),t})();function my(t){var i;return(i=t??Qn.Promise)!==null&&i!==void 0?i:Promise}function SI(t){return t&&me(t.next)&&me(t.error)&&me(t.complete)}function II(t){return t&&t instanceof po||SI(t)&&ud(t)}function TI(t){return me(t?.lift)}function fe(t){return i=>{if(TI(i))return i.lift(function(e){try{return t(e,this)}catch(n){this.error(n)}});throw new TypeError("Unable to lift unknown Observable type")}}function pe(t,i,e,n,r){return new Zh(t,i,e,n,r)}var Zh=class extends po{constructor(i,e,n,r,o,a){super(i),this.onFinalize=o,this.shouldUnsubscribe=a,this._next=e?function(s){try{e(s)}catch(l){i.error(l)}}:super._next,this._error=r?function(s){try{r(s)}catch(l){i.error(l)}finally{this.unsubscribe()}}:super._error,this._complete=n?function(){try{n()}catch(s){i.error(s)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var i;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:e}=this;super.unsubscribe(),!e&&((i=this.onFinalize)===null||i===void 0||i.call(this))}}};var fy=fa(t=>function(){t(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var S=(()=>{class t extends se{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(e){let n=new hd(this,this);return n.operator=e,n}_throwIfClosed(){if(this.closed)throw new fy}next(e){pa(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let n of this.currentObservers)n.next(e)}})}error(e){pa(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=e;let{observers:n}=this;for(;n.length;)n.shift().error(e)}})}complete(){pa(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:e}=this;for(;e.length;)e.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var e;return((e=this.observers)===null||e===void 0?void 0:e.length)>0}_trySubscribe(e){return this._throwIfClosed(),super._trySubscribe(e)}_subscribe(e){return this._throwIfClosed(),this._checkFinalizedStatuses(e),this._innerSubscribe(e)}_innerSubscribe(e){let{hasError:n,isStopped:r,observers:o}=this;return n||r?zh:(this.currentObservers=null,o.push(e),new ae(()=>{this.currentObservers=null,fo(o,e)}))}_checkFinalizedStatuses(e){let{hasError:n,thrownError:r,isStopped:o}=this;n?e.error(r):o&&e.complete()}asObservable(){let e=new se;return e.source=this,e}}return t.create=(i,e)=>new hd(i,e),t})(),hd=class extends S{constructor(i,e){super(),this.destination=i,this.source=e}next(i){var e,n;(n=(e=this.destination)===null||e===void 0?void 0:e.next)===null||n===void 0||n.call(e,i)}error(i){var e,n;(n=(e=this.destination)===null||e===void 0?void 0:e.error)===null||n===void 0||n.call(e,i)}complete(){var i,e;(e=(i=this.destination)===null||i===void 0?void 0:i.complete)===null||e===void 0||e.call(i)}_subscribe(i){var e,n;return(n=(e=this.source)===null||e===void 0?void 0:e.subscribe(i))!==null&&n!==void 0?n:zh}};var st=class extends S{constructor(i){super(),this._value=i}get value(){return this.getValue()}_subscribe(i){let e=super._subscribe(i);return!e.closed&&i.next(this._value),e}getValue(){let{hasError:i,thrownError:e,_value:n}=this;if(i)throw e;return this._throwIfClosed(),n}next(i){super.next(this._value=i)}};var Zs={now(){return(Zs.delegate||Date).now()},delegate:void 0};var _n=class extends S{constructor(i=1/0,e=1/0,n=Zs){super(),this._bufferSize=i,this._windowTime=e,this._timestampProvider=n,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=e===1/0,this._bufferSize=Math.max(1,i),this._windowTime=Math.max(1,e)}next(i){let{isStopped:e,_buffer:n,_infiniteTimeWindow:r,_timestampProvider:o,_windowTime:a}=this;e||(n.push(i),!r&&n.push(o.now()+a)),this._trimBuffer(),super.next(i)}_subscribe(i){this._throwIfClosed(),this._trimBuffer();let e=this._innerSubscribe(i),{_infiniteTimeWindow:n,_buffer:r}=this,o=r.slice();for(let a=0;a<o.length&&!i.closed;a+=n?1:2)i.next(o[a]);return this._checkFinalizedStatuses(i),e}_trimBuffer(){let{_bufferSize:i,_timestampProvider:e,_buffer:n,_infiniteTimeWindow:r}=this,o=(r?1:2)*i;if(i<1/0&&o<n.length&&n.splice(0,n.length-o),!r){let a=e.now(),s=0;for(let l=1;l<n.length&&n[l]<=a;l+=2)s=l;s&&n.splice(0,s+1)}}};var pd=class extends ae{constructor(i,e){super()}schedule(i,e=0){return this}};var Ks={setInterval(t,i,...e){let{delegate:n}=Ks;return n?.setInterval?n.setInterval(t,i,...e):setInterval(t,i,...e)},clearInterval(t){let{delegate:i}=Ks;return(i?.clearInterval||clearInterval)(t)},delegate:void 0};var gd=class extends pd{constructor(i,e){super(i,e),this.scheduler=i,this.work=e,this.pending=!1}schedule(i,e=0){var n;if(this.closed)return this;this.state=i;let r=this.id,o=this.scheduler;return r!=null&&(this.id=this.recycleAsyncId(o,r,e)),this.pending=!0,this.delay=e,this.id=(n=this.id)!==null&&n!==void 0?n:this.requestAsyncId(o,this.id,e),this}requestAsyncId(i,e,n=0){return Ks.setInterval(i.flush.bind(i,this),n)}recycleAsyncId(i,e,n=0){if(n!=null&&this.delay===n&&this.pending===!1)return e;e!=null&&Ks.clearInterval(e)}execute(i,e){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;let n=this._execute(i,e);if(n)return n;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(i,e){let n=!1,r;try{this.work(i)}catch(o){n=!0,r=o||new Error("Scheduled action threw falsy error")}if(n)return this.unsubscribe(),r}unsubscribe(){if(!this.closed){let{id:i,scheduler:e}=this,{actions:n}=e;this.work=this.state=this.scheduler=null,this.pending=!1,fo(n,this),i!=null&&(this.id=this.recycleAsyncId(e,i,null)),this.delay=null,super.unsubscribe()}}};var _a=class t{constructor(i,e=t.now){this.schedulerActionCtor=i,this.now=e}schedule(i,e=0,n){return new this.schedulerActionCtor(this,i).schedule(n,e)}};_a.now=Zs.now;var _d=class extends _a{constructor(i,e=_a.now){super(i,e),this.actions=[],this._active=!1}flush(i){let{actions:e}=this;if(this._active){e.push(i);return}let n;this._active=!0;do if(n=i.execute(i.state,i.delay))break;while(i=e.shift());if(this._active=!1,n){for(;i=e.shift();)i.unsubscribe();throw n}}};var Xs=new _d(gd),hy=Xs;var Je=new se(t=>t.complete());function vd(t){return t&&me(t.schedule)}function Kh(t){return t[t.length-1]}function bd(t){return me(Kh(t))?t.pop():void 0}function gi(t){return vd(Kh(t))?t.pop():void 0}function py(t,i){return typeof Kh(t)=="number"?t.pop():i}function _y(t,i,e,n){function r(o){return o instanceof e?o:new e(function(a){a(o)})}return new(e||(e=Promise))(function(o,a){function s(u){try{d(n.next(u))}catch(f){a(f)}}function l(u){try{d(n.throw(u))}catch(f){a(f)}}function d(u){u.done?o(u.value):r(u.value).then(s,l)}d((n=n.apply(t,i||[])).next())})}function gy(t){var i=typeof Symbol=="function"&&Symbol.iterator,e=i&&t[i],n=0;if(e)return e.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}};throw new TypeError(i?"Object is not iterable.":"Symbol.iterator is not defined.")}function go(t){return this instanceof go?(this.v=t,this):new go(t)}function vy(t,i,e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n=e.apply(t,i||[]),r,o=[];return r=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),s("next"),s("throw"),s("return",a),r[Symbol.asyncIterator]=function(){return this},r;function a(v){return function(w){return Promise.resolve(w).then(v,f)}}function s(v,w){n[v]&&(r[v]=function(P){return new Promise(function(U,Q){o.push([v,P,U,Q])>1||l(v,P)})},w&&(r[v]=w(r[v])))}function l(v,w){try{d(n[v](w))}catch(P){_(o[0][3],P)}}function d(v){v.value instanceof go?Promise.resolve(v.value.v).then(u,f):_(o[0][2],v)}function u(v){l("next",v)}function f(v){l("throw",v)}function _(v,w){v(w),o.shift(),o.length&&l(o[0][0],o[0][1])}}function by(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=t[Symbol.asyncIterator],e;return i?i.call(t):(t=typeof gy=="function"?gy(t):t[Symbol.iterator](),e={},n("next"),n("throw"),n("return"),e[Symbol.asyncIterator]=function(){return this},e);function n(o){e[o]=t[o]&&function(a){return new Promise(function(s,l){a=t[o](a),r(s,l,a.done,a.value)})}}function r(o,a,s,l){Promise.resolve(l).then(function(d){o({value:d,done:s})},a)}}var yd=t=>t&&typeof t.length=="number"&&typeof t!="function";function Cd(t){return me(t?.then)}function wd(t){return me(t[ga])}function Dd(t){return Symbol.asyncIterator&&me(t?.[Symbol.asyncIterator])}function xd(t){return new TypeError(`You provided ${t!==null&&typeof t=="object"?"an invalid object":`'${t}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function kI(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var Ed=kI();function Md(t){return me(t?.[Ed])}function Sd(t){return vy(this,arguments,function*(){let e=t.getReader();try{for(;;){let{value:n,done:r}=yield go(e.read());if(r)return yield go(void 0);yield yield go(n)}}finally{e.releaseLock()}})}function Id(t){return me(t?.getReader)}function ze(t){if(t instanceof se)return t;if(t!=null){if(wd(t))return AI(t);if(yd(t))return RI(t);if(Cd(t))return OI(t);if(Dd(t))return yy(t);if(Md(t))return NI(t);if(Id(t))return FI(t)}throw xd(t)}function AI(t){return new se(i=>{let e=t[ga]();if(me(e.subscribe))return e.subscribe(i);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function RI(t){return new se(i=>{for(let e=0;e<t.length&&!i.closed;e++)i.next(t[e]);i.complete()})}function OI(t){return new se(i=>{t.then(e=>{i.closed||(i.next(e),i.complete())},e=>i.error(e)).then(null,md)})}function NI(t){return new se(i=>{for(let e of t)if(i.next(e),i.closed)return;i.complete()})}function yy(t){return new se(i=>{PI(t,i).catch(e=>i.error(e))})}function FI(t){return yy(Sd(t))}function PI(t,i){var e,n,r,o;return _y(this,void 0,void 0,function*(){try{for(e=by(t);n=yield e.next(),!n.done;){let a=n.value;if(i.next(a),i.closed)return}}catch(a){r={error:a}}finally{try{n&&!n.done&&(o=e.return)&&(yield o.call(e))}finally{if(r)throw r.error}}i.complete()})}function on(t,i,e,n=0,r=!1){let o=i.schedule(function(){e(),r?t.add(this.schedule(null,n)):this.unsubscribe()},n);if(t.add(o),!r)return o}function Td(t,i=0){return fe((e,n)=>{e.subscribe(pe(n,r=>on(n,t,()=>n.next(r),i),()=>on(n,t,()=>n.complete(),i),r=>on(n,t,()=>n.error(r),i)))})}function kd(t,i=0){return fe((e,n)=>{n.add(t.schedule(()=>e.subscribe(n),i))})}function Cy(t,i){return ze(t).pipe(kd(i),Td(i))}function wy(t,i){return ze(t).pipe(kd(i),Td(i))}function Dy(t,i){return new se(e=>{let n=0;return i.schedule(function(){n===t.length?e.complete():(e.next(t[n++]),e.closed||this.schedule())})})}function xy(t,i){return new se(e=>{let n;return on(e,i,()=>{n=t[Ed](),on(e,i,()=>{let r,o;try{({value:r,done:o}=n.next())}catch(a){e.error(a);return}o?e.complete():e.next(r)},0,!0)}),()=>me(n?.return)&&n.return()})}function Ad(t,i){if(!t)throw new Error("Iterable cannot be null");return new se(e=>{on(e,i,()=>{let n=t[Symbol.asyncIterator]();on(e,i,()=>{n.next().then(r=>{r.done?e.complete():e.next(r.value)})},0,!0)})})}function Ey(t,i){return Ad(Sd(t),i)}function My(t,i){if(t!=null){if(wd(t))return Cy(t,i);if(yd(t))return Dy(t,i);if(Cd(t))return wy(t,i);if(Dd(t))return Ad(t,i);if(Md(t))return xy(t,i);if(Id(t))return Ey(t,i)}throw xd(t)}function $e(t,i){return i?My(t,i):ze(t)}function q(...t){let i=gi(t);return $e(t,i)}function _o(t,i){let e=me(t)?t:()=>t,n=r=>r.error(e());return new se(i?r=>i.schedule(n,0,r):n)}function Js(t){return!!t&&(t instanceof se||me(t.lift)&&me(t.subscribe))}var vo=fa(t=>function(){t(this),this.name="EmptyError",this.message="no elements in sequence"});function Sy(t){return t instanceof Date&&!isNaN(t)}function le(t,i){return fe((e,n)=>{let r=0;e.subscribe(pe(n,o=>{n.next(t.call(i,o,r++))}))})}var{isArray:LI}=Array;function VI(t,i){return LI(i)?t(...i):t(i)}function Rd(t){return le(i=>VI(t,i))}var{isArray:BI}=Array,{getPrototypeOf:jI,prototype:HI,keys:UI}=Object;function Od(t){if(t.length===1){let i=t[0];if(BI(i))return{args:i,keys:null};if(zI(i)){let e=UI(i);return{args:e.map(n=>i[n]),keys:e}}}return{args:t,keys:null}}function zI(t){return t&&typeof t=="object"&&jI(t)===HI}function Nd(t,i){return t.reduce((e,n,r)=>(e[n]=i[r],e),{})}function va(...t){let i=gi(t),e=bd(t),{args:n,keys:r}=Od(t);if(n.length===0)return $e([],i);let o=new se($I(n,i,r?a=>Nd(r,a):gn));return e?o.pipe(Rd(e)):o}function $I(t,i,e=gn){return n=>{Iy(i,()=>{let{length:r}=t,o=new Array(r),a=r,s=r;for(let l=0;l<r;l++)Iy(i,()=>{let d=$e(t[l],i),u=!1;d.subscribe(pe(n,f=>{o[l]=f,u||(u=!0,s--),s||n.next(e(o.slice()))},()=>{--a||n.complete()}))},n)},n)}}function Iy(t,i,e){t?on(e,t,i):i()}function Ty(t,i,e,n,r,o,a,s){let l=[],d=0,u=0,f=!1,_=()=>{f&&!l.length&&!d&&i.complete()},v=P=>d<n?w(P):l.push(P),w=P=>{o&&i.next(P),d++;let U=!1;ze(e(P,u++)).subscribe(pe(i,Q=>{r?.(Q),o?v(Q):i.next(Q)},()=>{U=!0},void 0,()=>{if(U)try{for(d--;l.length&&d<n;){let Q=l.shift();a?on(i,a,()=>w(Q)):w(Q)}_()}catch(Q){i.error(Q)}}))};return t.subscribe(pe(i,v,()=>{f=!0,_()})),()=>{s?.()}}function Vt(t,i,e=1/0){return me(i)?Vt((n,r)=>le((o,a)=>i(n,o,r,a))(ze(t(n,r))),e):(typeof i=="number"&&(e=i),fe((n,r)=>Ty(n,r,t,e)))}function Mr(t=1/0){return Vt(gn,t)}function ky(){return Mr(1)}function Sr(...t){return ky()($e(t,gi(t)))}function Zn(t){return new se(i=>{ze(t()).subscribe(i)})}function el(...t){let i=bd(t),{args:e,keys:n}=Od(t),r=new se(o=>{let{length:a}=e;if(!a){o.complete();return}let s=new Array(a),l=a,d=a;for(let u=0;u<a;u++){let f=!1;ze(e[u]).subscribe(pe(o,_=>{f||(f=!0,d--),s[u]=_},()=>l--,void 0,()=>{(!l||!f)&&(d||o.next(n?Nd(n,s):s),o.complete())}))}});return i?r.pipe(Rd(i)):r}function tl(t=0,i,e=hy){let n=-1;return i!=null&&(vd(i)?e=i:n=i),new se(r=>{let o=Sy(t)?+t-e.now():t;o<0&&(o=0);let a=0;return e.schedule(function(){r.closed||(r.next(a++),0<=n?this.schedule(void 0,n):r.complete())},o)})}function Nt(...t){let i=gi(t),e=py(t,1/0),n=t;return n.length?n.length===1?ze(n[0]):Mr(e)($e(n,i)):Je}function be(t,i){return fe((e,n)=>{let r=0;e.subscribe(pe(n,o=>t.call(i,o,r++)&&n.next(o)))})}function Ay(t){return fe((i,e)=>{let n=!1,r=null,o=null,a=!1,s=()=>{if(o?.unsubscribe(),o=null,n){n=!1;let d=r;r=null,e.next(d)}a&&e.complete()},l=()=>{o=null,a&&e.complete()};i.subscribe(pe(e,d=>{n=!0,r=d,o||ze(t(d)).subscribe(o=pe(e,s,l))},()=>{a=!0,(!n||!o||o.closed)&&e.complete()}))})}function Fd(t,i=Xs){return Ay(()=>tl(t,i))}function Ir(t){return fe((i,e)=>{let n=null,r=!1,o;n=i.subscribe(pe(e,void 0,void 0,a=>{o=ze(t(a,Ir(t)(i))),n?(n.unsubscribe(),n=null,o.subscribe(e)):r=!0})),r&&(n.unsubscribe(),n=null,o.subscribe(e))})}function Tr(t,i){return me(i)?Vt(t,i,1):Vt(t,1)}function Yi(t,i=Xs){return fe((e,n)=>{let r=null,o=null,a=null,s=()=>{if(r){r.unsubscribe(),r=null;let d=o;o=null,n.next(d)}};function l(){let d=a+t,u=i.now();if(u<d){r=this.schedule(void 0,d-u),n.add(r);return}s()}e.subscribe(pe(n,d=>{o=d,a=i.now(),r||(r=i.schedule(l,t),n.add(r))},()=>{s(),n.complete()},void 0,()=>{o=r=null}))})}function Ry(t){return fe((i,e)=>{let n=!1;i.subscribe(pe(e,r=>{n=!0,e.next(r)},()=>{n||e.next(t),e.complete()}))})}function it(t){return t<=0?()=>Je:fe((i,e)=>{let n=0;i.subscribe(pe(e,r=>{++n<=t&&(e.next(r),t<=n&&e.complete())}))})}function Pd(t,i=gn){return t=t??WI,fe((e,n)=>{let r,o=!0;e.subscribe(pe(n,a=>{let s=i(a);(o||!t(r,s))&&(o=!1,r=s,n.next(a))}))})}function WI(t,i){return t===i}function Oy(t=GI){return fe((i,e)=>{let n=!1;i.subscribe(pe(e,r=>{n=!0,e.next(r)},()=>n?e.complete():e.error(t())))})}function GI(){return new vo}function kr(t){return fe((i,e)=>{try{i.subscribe(e)}finally{e.add(t)}})}function Qi(t,i){let e=arguments.length>=2;return n=>n.pipe(t?be((r,o)=>t(r,o,n)):gn,it(1),e?Ry(i):Oy(()=>new vo))}function Ld(t){return t<=0?()=>Je:fe((i,e)=>{let n=[];i.subscribe(pe(e,r=>{n.push(r),t<n.length&&n.shift()},()=>{for(let r of n)e.next(r);e.complete()},void 0,()=>{n=null}))})}function Vd(){return fe((t,i)=>{let e,n=!1;t.subscribe(pe(i,r=>{let o=e;e=r,n&&i.next([o,r]),n=!0}))})}function nl(t={}){let{connector:i=()=>new S,resetOnError:e=!0,resetOnComplete:n=!0,resetOnRefCountZero:r=!0}=t;return o=>{let a,s,l,d=0,u=!1,f=!1,_=()=>{s?.unsubscribe(),s=void 0},v=()=>{_(),a=l=void 0,u=f=!1},w=()=>{let P=a;v(),P?.unsubscribe()};return fe((P,U)=>{d++,!f&&!u&&_();let Q=l=l??i();U.add(()=>{d--,d===0&&!f&&!u&&(s=Xh(w,r))}),Q.subscribe(U),!a&&d>0&&(a=new qi({next:Ae=>Q.next(Ae),error:Ae=>{f=!0,_(),s=Xh(v,e,Ae),Q.error(Ae)},complete:()=>{u=!0,_(),s=Xh(v,n),Q.complete()}}),ze(P).subscribe(a))})(o)}}function Xh(t,i,...e){if(i===!0){t();return}if(i===!1)return;let n=new qi({next:()=>{n.unsubscribe(),t()}});return ze(i(...e)).subscribe(n)}function Bd(t,i,e){let n,r=!1;return t&&typeof t=="object"?{bufferSize:n=1/0,windowTime:i=1/0,refCount:r=!1,scheduler:e}=t:n=t??1/0,nl({connector:()=>new _n(n,i,e),resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:r})}function bo(t){return be((i,e)=>t<=e)}function Qe(...t){let i=gi(t);return fe((e,n)=>{(i?Sr(t,e,i):Sr(t,e)).subscribe(n)})}function pt(t,i){return fe((e,n)=>{let r=null,o=0,a=!1,s=()=>a&&!r&&n.complete();e.subscribe(pe(n,l=>{r?.unsubscribe();let d=0,u=o++;ze(t(l,u)).subscribe(r=pe(n,f=>n.next(i?i(l,f,u,d++):f),()=>{r=null,s()}))},()=>{a=!0,s()}))})}function ye(t){return fe((i,e)=>{ze(t).subscribe(pe(e,()=>e.complete(),Qs)),!e.closed&&i.subscribe(e)})}function Jh(t,i=!1){return fe((e,n)=>{let r=0;e.subscribe(pe(n,o=>{let a=t(o,r++);(a||i)&&n.next(o),!a&&n.complete()}))})}function lt(t,i,e){let n=me(t)||i||e?{next:t,error:i,complete:e}:t;return n?fe((r,o)=>{var a;(a=n.subscribe)===null||a===void 0||a.call(n);let s=!0;r.subscribe(pe(o,l=>{var d;(d=n.next)===null||d===void 0||d.call(n,l),o.next(l)},()=>{var l;s=!1,(l=n.complete)===null||l===void 0||l.call(n),o.complete()},l=>{var d;s=!1,(d=n.error)===null||d===void 0||d.call(n,l),o.error(l)},()=>{var l,d;s&&((l=n.unsubscribe)===null||l===void 0||l.call(n)),(d=n.finalize)===null||d===void 0||d.call(n)}))}):gn}var ep;function il(){return ep}function _i(t){let i=ep;return ep=t,i}function tp(t,i){let e=il();if(!e)throw new Error("Current injector is not set.");if(!t.\u0275prov)throw new Error("Token is not an injectable");return e.retrieve(t,i)}var Ny=Symbol("NotFound");function ba(t){return t===Ny||t?.name==="\u0275NotFound"}function Fy(t){let i=ee(null);try{return t()}finally{ee(i)}}var Gd="https://angular.dev/best-practices/security#preventing-cross-site-scripting-xss",L=class extends Error{code;constructor(i,e){super(An(i,e)),this.code=i}};function qI(t){return`NG0${Math.abs(t)}`}function An(t,i){return`${qI(t)}${i?": "+i:""}`}var Ca=globalThis;function Pe(t){for(let i in t)if(t[i]===Pe)return i;throw Error("")}function jy(t,i){for(let e in i)i.hasOwnProperty(e)&&!t.hasOwnProperty(e)&&(t[e]=i[e])}function dl(t){if(typeof t=="string")return t;if(Array.isArray(t))return`[${t.map(dl).join(", ")}]`;if(t==null)return""+t;let i=t.overriddenName||t.name;if(i)return`${i}`;let e=t.toString();if(e==null)return""+e;let n=e.indexOf(`
`);return n>=0?e.slice(0,n):e}function qd(t,i){return t?i?`${t} ${i}`:t:i||""}var YI=Pe({__forward_ref__:Pe});function vn(t){return t.__forward_ref__=vn,t}function Bt(t){return hp(t)?t():t}function hp(t){return typeof t=="function"&&t.hasOwnProperty(YI)&&t.__forward_ref__===vn}function b(t){return{token:t.token,providedIn:t.providedIn||null,factory:t.factory,value:void 0}}function z(t){return{providers:t.providers||[],imports:t.imports||[]}}function ul(t){return QI(t,Yd)}function pp(t){return ul(t)!==null}function QI(t,i){return t.hasOwnProperty(i)&&t[i]||null}function ZI(t){let i=t?.[Yd]??null;return i||null}function ip(t){return t&&t.hasOwnProperty(Hd)?t[Hd]:null}var Yd=Pe({\u0275prov:Pe}),Hd=Pe({\u0275inj:Pe}),y=class{_desc;ngMetadataName="InjectionToken";\u0275prov;constructor(i,e){this._desc=i,this.\u0275prov=void 0,typeof e=="number"?this.__NG_ELEMENT_ID__=e:e!==void 0&&(this.\u0275prov=b({token:this,providedIn:e.providedIn||"root",factory:e.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};function gp(t){return t&&!!t.\u0275providers}var _p=Pe({\u0275cmp:Pe}),vp=Pe({\u0275dir:Pe}),bp=Pe({\u0275pipe:Pe}),yp=Pe({\u0275mod:Pe}),ol=Pe({\u0275fac:Pe}),xo=Pe({__NG_ELEMENT_ID__:Pe}),Py=Pe({__NG_ENV_ID__:Pe});function Cp(t){return Qd(t,"@NgModule"),t[yp]||null}function bi(t){return Qd(t,"@Component"),t[_p]||null}function wp(t){return Qd(t,"@Directive"),t[vp]||null}function Hy(t){return Qd(t,"@Pipe"),t[bp]||null}function Qd(t,i){if(t==null)throw new L(-919,!1)}function wa(t){return typeof t=="string"?t:t==null?"":String(t)}var Uy=Pe({ngErrorCode:Pe}),KI=Pe({ngErrorMessage:Pe}),XI=Pe({ngTokenPath:Pe});function Dp(t,i){return zy("",-200,i)}function Zd(t,i){throw new L(-201,!1)}function zy(t,i,e){let n=new L(i,t);return n[Uy]=i,n[KI]=t,e&&(n[XI]=e),n}function JI(t){return t[Uy]}var rp;function $y(){return rp}function Xt(t){let i=rp;return rp=t,i}function xp(t,i,e){let n=ul(t);if(n&&n.providedIn=="root")return n.value===void 0?n.value=n.factory():n.value;if(e&8)return null;if(i!==void 0)return i;Zd(t,"")}var eT={},yo=eT,tT="__NG_DI_FLAG__",op=class{injector;constructor(i){this.injector=i}retrieve(i,e){let n=Co(e)||0;try{return this.injector.get(i,n&8?null:yo,n)}catch(r){if(ba(r))return r;throw r}}};function nT(t,i=0){let e=il();if(e===void 0)throw new L(-203,!1);if(e===null)return xp(t,void 0,i);{let n=iT(i),r=e.retrieve(t,n);if(ba(r)){if(n.optional)return null;throw r}return r}}function W(t,i=0){return($y()||nT)(Bt(t),i)}function c(t,i){return W(t,Co(i))}function Co(t){return typeof t>"u"||typeof t=="number"?t:0|(t.optional&&8)|(t.host&&1)|(t.self&&2)|(t.skipSelf&&4)}function iT(t){return{optional:!!(t&8),host:!!(t&1),self:!!(t&2),skipSelf:!!(t&4)}}function ap(t){let i=[];for(let e=0;e<t.length;e++){let n=Bt(t[e]);if(Array.isArray(n)){if(n.length===0)throw new L(900,!1);let r,o=0;for(let a=0;a<n.length;a++){let s=n[a],l=rT(s);typeof l=="number"?l===-1?r=s.token:o|=l:r=s}i.push(W(r,o))}else i.push(W(n))}return i}function rT(t){return t[tT]}function Ar(t,i){let e=t.hasOwnProperty(ol);return e?t[ol]:null}function Wy(t,i,e){if(t.length!==i.length)return!1;for(let n=0;n<t.length;n++){let r=t[n],o=i[n];if(e&&(r=e(r),o=e(o)),o!==r)return!1}return!0}function Gy(t){return t.flat(Number.POSITIVE_INFINITY)}function Kd(t,i){t.forEach(e=>Array.isArray(e)?Kd(e,i):i(e))}function Ep(t,i,e){i>=t.length?t.push(e):t.splice(i,0,e)}function ml(t,i){return i>=t.length-1?t.pop():t.splice(i,1)[0]}function qy(t,i){let e=[];for(let n=0;n<t;n++)e.push(i);return e}function Yy(t,i,e,n){let r=t.length;if(r==i)t.push(e,n);else if(r===1)t.push(n,t[0]),t[0]=e;else{for(r--,t.push(t[r-1],t[r]);r>i;){let o=r-2;t[r]=t[o],r--}t[i]=e,t[i+1]=n}}function fl(t,i,e){let n=Da(t,i);return n>=0?t[n|1]=e:(n=~n,Yy(t,n,i,e)),n}function Xd(t,i){let e=Da(t,i);if(e>=0)return t[e|1]}function Da(t,i){return oT(t,i,1)}function oT(t,i,e){let n=0,r=t.length>>e;for(;r!==n;){let o=n+(r-n>>1),a=t[o<<e];if(i===a)return o<<e;a>i?r=o:n=o+1}return~(r<<e)}var Nr={},Gt=[],Fr=new y(""),Mp=new y("",-1),Sp=new y(""),al=class{get(i,e=yo){if(e===yo){let r=zy("",-201);throw r.name="\u0275NotFound",r}return e}};function yi(t){return{\u0275providers:t}}function Qy(t){return yi([{provide:Fr,multi:!0,useValue:t}])}function Zy(...t){return{\u0275providers:Ip(!0,t),\u0275fromNgModule:!0}}function Ip(t,...i){let e=[],n=new Set,r,o=a=>{e.push(a)};return Kd(i,a=>{let s=a;Ud(s,o,[],n)&&(r||=[],r.push(s))}),r!==void 0&&Ky(r,o),e}function Ky(t,i){for(let e=0;e<t.length;e++){let{ngModule:n,providers:r}=t[e];Tp(r,o=>{i(o,n)})}}function Ud(t,i,e,n){if(t=Bt(t),!t)return!1;let r=null,o=ip(t),a=!o&&bi(t);if(!o&&!a){let l=t.ngModule;if(o=ip(l),o)r=l;else return!1}else{if(a&&!a.standalone)return!1;r=t}let s=n.has(r);if(a){if(s)return!1;if(n.add(r),a.dependencies){let l=typeof a.dependencies=="function"?a.dependencies():a.dependencies;for(let d of l)Ud(d,i,e,n)}}else if(o){if(o.imports!=null&&!s){n.add(r);let d;Kd(o.imports,u=>{Ud(u,i,e,n)&&(d||=[],d.push(u))}),d!==void 0&&Ky(d,i)}if(!s){let d=Ar(r)||(()=>new r);i({provide:r,useFactory:d,deps:Gt},r),i({provide:Sp,useValue:r,multi:!0},r),i({provide:Fr,useValue:()=>W(r),multi:!0},r)}let l=o.providers;if(l!=null&&!s){let d=t;Tp(l,u=>{i(u,d)})}}else return!1;return r!==t&&t.providers!==void 0}function Tp(t,i){for(let e of t)gp(e)&&(e=e.\u0275providers),Array.isArray(e)?Tp(e,i):i(e)}var aT=Pe({provide:String,useValue:Pe});function Xy(t){return t!==null&&typeof t=="object"&&aT in t}function sT(t){return!!(t&&t.useExisting)}function lT(t){return!!(t&&t.useFactory)}function wo(t){return typeof t=="function"}function Jy(t){return!!t.useClass}var hl=new y(""),jd={},Ly={},np;function xa(){return np===void 0&&(np=new al),np}var Le=class{},Do=class extends Le{parent;source;scopes;records=new Map;_ngOnDestroyHooks=new Set;_onDestroyHooks=[];get destroyed(){return this._destroyed}_destroyed=!1;injectorDefTypes;constructor(i,e,n,r){super(),this.parent=e,this.source=n,this.scopes=r,lp(i,a=>this.processProvider(a)),this.records.set(Mp,ya(void 0,this)),r.has("environment")&&this.records.set(Le,ya(void 0,this));let o=this.records.get(hl);o!=null&&typeof o.value=="string"&&this.scopes.add(o.value),this.injectorDefTypes=new Set(this.get(Sp,Gt,{self:!0}))}retrieve(i,e){let n=Co(e)||0;try{return this.get(i,yo,n)}catch(r){if(ba(r))return r;throw r}}destroy(){rl(this),this._destroyed=!0;let i=ee(null);try{for(let n of this._ngOnDestroyHooks)n.ngOnDestroy();let e=this._onDestroyHooks;this._onDestroyHooks=[];for(let n of e)n()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),ee(i)}}onDestroy(i){return rl(this),this._onDestroyHooks.push(i),()=>this.removeOnDestroy(i)}runInContext(i){rl(this);let e=_i(this),n=Xt(void 0),r;try{return i()}finally{_i(e),Xt(n)}}get(i,e=yo,n){if(rl(this),i.hasOwnProperty(Py))return i[Py](this);let r=Co(n),o,a=_i(this),s=Xt(void 0);try{if(!(r&4)){let d=this.records.get(i);if(d===void 0){let u=fT(i)&&ul(i);u&&this.injectableDefInScope(u)?d=ya(sp(i),jd):d=null,this.records.set(i,d)}if(d!=null)return this.hydrate(i,d,r)}let l=r&2?xa():this.parent;return e=r&8&&e===yo?null:e,l.get(i,e)}catch(l){let d=JI(l);throw d===-200||d===-201?new L(d,null):l}finally{Xt(s),_i(a)}}resolveInjectorInitializers(){let i=ee(null),e=_i(this),n=Xt(void 0),r;try{let o=this.get(Fr,Gt,{self:!0});for(let a of o)a()}finally{_i(e),Xt(n),ee(i)}}toString(){return"R3Injector[...]"}processProvider(i){i=Bt(i);let e=wo(i)?i:Bt(i&&i.provide),n=dT(i);if(!wo(i)&&i.multi===!0){let r=this.records.get(e);r||(r=ya(void 0,jd,!0),r.factory=()=>ap(r.multi),this.records.set(e,r)),e=i,r.multi.push(i)}this.records.set(e,n)}hydrate(i,e,n){let r=ee(null);try{if(e.value===Ly)throw Dp("");return e.value===jd&&(e.value=Ly,e.value=e.factory(void 0,n)),typeof e.value=="object"&&e.value&&mT(e.value)&&this._ngOnDestroyHooks.add(e.value),e.value}finally{ee(r)}}injectableDefInScope(i){if(!i.providedIn)return!1;let e=Bt(i.providedIn);return typeof e=="string"?e==="any"||this.scopes.has(e):this.injectorDefTypes.has(e)}removeOnDestroy(i){let e=this._onDestroyHooks.indexOf(i);e!==-1&&this._onDestroyHooks.splice(e,1)}};function sp(t){let i=ul(t),e=i!==null?i.factory:Ar(t);if(e!==null)return e;if(t instanceof y)throw new L(-204,!1);if(t instanceof Function)return cT(t);throw new L(-204,!1)}function cT(t){if(t.length>0)throw new L(-204,!1);let e=ZI(t);return e!==null?()=>e.factory(t):()=>new t}function dT(t){if(Xy(t))return ya(void 0,t.useValue);{let i=kp(t);return ya(i,jd)}}function kp(t,i,e){let n;if(wo(t)){let r=Bt(t);return Ar(r)||sp(r)}else if(Xy(t))n=()=>Bt(t.useValue);else if(lT(t))n=()=>t.useFactory(...ap(t.deps||[]));else if(sT(t))n=(r,o)=>W(Bt(t.useExisting),o!==void 0&&o&8?8:void 0);else{let r=Bt(t&&(t.useClass||t.provide));if(uT(t))n=()=>new r(...ap(t.deps));else return Ar(r)||sp(r)}return n}function rl(t){if(t.destroyed)throw new L(-205,!1)}function ya(t,i,e=!1){return{factory:t,value:i,multi:e?[]:void 0}}function uT(t){return!!t.deps}function mT(t){return t!==null&&typeof t=="object"&&typeof t.ngOnDestroy=="function"}function fT(t){return typeof t=="function"||typeof t=="object"&&t.ngMetadataName==="InjectionToken"}function lp(t,i){for(let e of t)Array.isArray(e)?lp(e,i):e&&gp(e)?lp(e.\u0275providers,i):i(e)}function xt(t,i){let e;t instanceof Do?(rl(t),e=t):e=new op(t);let n,r=_i(e),o=Xt(void 0);try{return i()}finally{_i(r),Xt(o)}}function e0(){return $y()!==void 0||il()!=null}var Kn=0,re=1,ce=2,Dt=3,Rn=4,Jt=5,Eo=6,Ea=7,ct=8,bn=9,Ci=10,He=11,Ma=12,Ap=13,Mo=14,en=15,Pr=16,So=17,wi=18,Ki=19,Rp=20,Zi=21,Jd=22,Rr=23,yn=24,Io=25,Xi=26,et=27,t0=1,Op=6,Lr=7,pl=8,To=9,rt=10;function Ji(t){return Array.isArray(t)&&typeof t[t0]=="object"}function Xn(t){return Array.isArray(t)&&t[t0]===!0}function Np(t){return(t.flags&4)!==0}function Di(t){return t.componentOffset>-1}function gl(t){return(t.flags&1)===1}function xi(t){return!!t.template}function Sa(t){return(t[ce]&512)!==0}function ko(t){return(t[ce]&256)===256}var Fp="svg",n0="math";function On(t){for(;Array.isArray(t);)t=t[Kn];return t}function Pp(t,i){return On(i[t])}function Cn(t,i){return On(i[t.index])}function eu(t,i){return t.data[i]}function Lp(t,i){return t[i]}function Vp(t,i,e,n){e>=t.data.length&&(t.data[e]=null,t.blueprint[e]=null),i[e]=n}function Nn(t,i){let e=i[t];return Ji(e)?e:e[Kn]}function i0(t){return(t[ce]&4)===4}function tu(t){return(t[ce]&128)===128}function r0(t){return Xn(t[Dt])}function wn(t,i){return i==null?null:t[i]}function Bp(t){t[So]=0}function jp(t){t[ce]&1024||(t[ce]|=1024,tu(t)&&Ao(t))}function o0(t,i){for(;t>0;)i=i[Mo],t--;return i}function _l(t){return!!(t[ce]&9216||t[yn]?.dirty)}function nu(t){t[Ci].changeDetectionScheduler?.notify(8),t[ce]&64&&(t[ce]|=1024),_l(t)&&Ao(t)}function Ao(t){t[Ci].changeDetectionScheduler?.notify(0);let i=Or(t);for(;i!==null&&!(i[ce]&8192||(i[ce]|=8192,!tu(i)));)i=Or(i)}function Hp(t,i){if(ko(t))throw new L(911,!1);t[Zi]===null&&(t[Zi]=[]),t[Zi].push(i)}function a0(t,i){if(t[Zi]===null)return;let e=t[Zi].indexOf(i);e!==-1&&t[Zi].splice(e,1)}function Or(t){let i=t[Dt];return Xn(i)?i[Dt]:i}function Up(t){return t[Ea]??=[]}function zp(t){return t.cleanup??=[]}function s0(t,i,e,n){let r=Up(i);r.push(e),t.firstCreatePass&&zp(t).push(n,r.length-1)}var he={lFrame:b0(null),bindingsEnabled:!0,skipHydrationRootTNode:null};var cp=!1;function l0(){return he.lFrame.elementDepthCount}function c0(){he.lFrame.elementDepthCount++}function $p(){he.lFrame.elementDepthCount--}function Wp(){return he.bindingsEnabled}function Gp(){return he.skipHydrationRootTNode!==null}function qp(t){return he.skipHydrationRootTNode===t}function Yp(){he.skipHydrationRootTNode=null}function ie(){return he.lFrame.lView}function We(){return he.lFrame.tView}function X(t){return he.lFrame.contextLView=t,t[ct]}function J(t){return he.lFrame.contextLView=null,t}function Et(){let t=Qp();for(;t!==null&&t.type===64;)t=t.parent;return t}function Qp(){return he.lFrame.currentTNode}function d0(){let t=he.lFrame,i=t.currentTNode;return t.isParent?i:i.parent}function Ia(t,i){let e=he.lFrame;e.currentTNode=t,e.isParent=i}function Zp(){return he.lFrame.isParent}function Kp(){he.lFrame.isParent=!1}function u0(){return he.lFrame.contextLView}function Xp(){return cp}function sl(t){let i=cp;return cp=t,i}function iu(){let t=he.lFrame,i=t.bindingRootIndex;return i===-1&&(i=t.bindingRootIndex=t.tView.bindingStartIndex),i}function m0(){return he.lFrame.bindingIndex}function f0(t){return he.lFrame.bindingIndex=t}function Ei(){return he.lFrame.bindingIndex++}function ru(t){let i=he.lFrame,e=i.bindingIndex;return i.bindingIndex=i.bindingIndex+t,e}function h0(){return he.lFrame.inI18n}function p0(t,i){let e=he.lFrame;e.bindingIndex=e.bindingRootIndex=t,ou(i)}function g0(){return he.lFrame.currentDirectiveIndex}function ou(t){he.lFrame.currentDirectiveIndex=t}function _0(t){let i=he.lFrame.currentDirectiveIndex;return i===-1?null:t[i]}function au(){return he.lFrame.currentQueryIndex}function vl(t){he.lFrame.currentQueryIndex=t}function hT(t){let i=t[re];return i.type===2?i.declTNode:i.type===1?t[Jt]:null}function Jp(t,i,e){if(e&4){let r=i,o=t;for(;r=r.parent,r===null&&!(e&1);)if(r=hT(o),r===null||(o=o[Mo],r.type&10))break;if(r===null)return!1;i=r,t=o}let n=he.lFrame=v0();return n.currentTNode=i,n.lView=t,!0}function su(t){let i=v0(),e=t[re];he.lFrame=i,i.currentTNode=e.firstChild,i.lView=t,i.tView=e,i.contextLView=t,i.bindingIndex=e.bindingStartIndex,i.inI18n=!1}function v0(){let t=he.lFrame,i=t===null?null:t.child;return i===null?b0(t):i}function b0(t){let i={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:t,child:null,inI18n:!1};return t!==null&&(t.child=i),i}function y0(){let t=he.lFrame;return he.lFrame=t.parent,t.currentTNode=null,t.lView=null,t}var eg=y0;function lu(){let t=y0();t.isParent=!0,t.tView=null,t.selectedIndex=-1,t.contextLView=null,t.elementDepthCount=0,t.currentDirectiveIndex=-1,t.currentNamespace=null,t.bindingRootIndex=-1,t.bindingIndex=-1,t.currentQueryIndex=0}function C0(t){return(he.lFrame.contextLView=o0(t,he.lFrame.contextLView))[ct]}function Mi(){return he.lFrame.selectedIndex}function Vr(t){he.lFrame.selectedIndex=t}function Ta(){let t=he.lFrame;return eu(t.tView,t.selectedIndex)}function Si(){he.lFrame.currentNamespace=Fp}function ka(){pT()}function pT(){he.lFrame.currentNamespace=null}function w0(){return he.lFrame.currentNamespace}var D0=!0;function cu(){return D0}function du(t){D0=t}function dp(t,i=null,e=null,n){let r=tg(t,i,e,n);return r.resolveInjectorInitializers(),r}function tg(t,i=null,e=null,n,r=new Set){let o=[e||Gt,Zy(t)],a;return new Do(o,i||xa(),a||null,r)}var G=class t{static THROW_IF_NOT_FOUND=yo;static NULL=new al;static create(i,e){if(Array.isArray(i))return dp({name:""},e,i,"");{let n=i.name??"";return dp({name:n},i.parent,i.providers,n)}}static \u0275prov=b({token:t,providedIn:"any",factory:()=>W(Mp)});static __NG_ELEMENT_ID__=-1},Y=new y(""),jt=(()=>{class t{static __NG_ELEMENT_ID__=gT;static __NG_ENV_ID__=e=>e}return t})(),zd=class extends jt{_lView;constructor(i){super(),this._lView=i}get destroyed(){return ko(this._lView)}onDestroy(i){let e=this._lView;return Hp(e,i),()=>a0(e,i)}};function gT(){return new zd(ie())}var x0=!1,E0=new y(""),er=(()=>{class t{taskId=0;pendingTasks=new Set;destroyed=!1;pendingTask=new st(!1);debugTaskTracker=c(E0,{optional:!0});get hasPendingTasks(){return this.destroyed?!1:this.pendingTask.value}get hasPendingTasksObservable(){return this.destroyed?new se(e=>{e.next(!1),e.complete()}):this.pendingTask}add(){!this.hasPendingTasks&&!this.destroyed&&this.pendingTask.next(!0);let e=this.taskId++;return this.pendingTasks.add(e),this.debugTaskTracker?.add(e),e}has(e){return this.pendingTasks.has(e)}remove(e){this.pendingTasks.delete(e),this.debugTaskTracker?.remove(e),this.pendingTasks.size===0&&this.hasPendingTasks&&this.pendingTask.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this.hasPendingTasks&&this.pendingTask.next(!1),this.destroyed=!0,this.pendingTask.unsubscribe()}static \u0275prov=b({token:t,providedIn:"root",factory:()=>new t})}return t})(),up=class extends S{__isAsync;destroyRef=void 0;pendingTasks=void 0;constructor(i=!1){super(),this.__isAsync=i,e0()&&(this.destroyRef=c(jt,{optional:!0})??void 0,this.pendingTasks=c(er,{optional:!0})??void 0)}emit(i){let e=ee(null);try{super.next(i)}finally{ee(e)}}subscribe(i,e,n){let r=i,o=e||(()=>null),a=n;if(i&&typeof i=="object"){let l=i;r=l.next?.bind(l),o=l.error?.bind(l),a=l.complete?.bind(l)}this.__isAsync&&(o=this.wrapInTimeout(o),r&&(r=this.wrapInTimeout(r)),a&&(a=this.wrapInTimeout(a)));let s=super.subscribe({next:r,error:o,complete:a});return i instanceof ae&&i.add(s),s}wrapInTimeout(i){return e=>{let n=this.pendingTasks?.add();setTimeout(()=>{try{i(e)}finally{n!==void 0&&this.pendingTasks?.remove(n)}})}}},I=up;function $d(...t){}function ng(t){let i,e;function n(){t=$d;try{e!==void 0&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(e),i!==void 0&&clearTimeout(i)}catch{}}return i=setTimeout(()=>{t(),n()}),typeof requestAnimationFrame=="function"&&(e=requestAnimationFrame(()=>{t(),n()})),()=>n()}function M0(t){return queueMicrotask(()=>t()),()=>{t=$d}}var ig="isAngularZone",ll=ig+"_ID",_T=0,V=class t{hasPendingMacrotasks=!1;hasPendingMicrotasks=!1;isStable=!0;onUnstable=new I(!1);onMicrotaskEmpty=new I(!1);onStable=new I(!1);onError=new I(!1);constructor(i){let{enableLongStackTrace:e=!1,shouldCoalesceEventChangeDetection:n=!1,shouldCoalesceRunChangeDetection:r=!1,scheduleInRootZone:o=x0}=i;if(typeof Zone>"u")throw new L(908,!1);Zone.assertZonePatched();let a=this;a._nesting=0,a._outer=a._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(a._inner=a._inner.fork(new Zone.TaskTrackingZoneSpec)),e&&Zone.longStackTraceZoneSpec&&(a._inner=a._inner.fork(Zone.longStackTraceZoneSpec)),a.shouldCoalesceEventChangeDetection=!r&&n,a.shouldCoalesceRunChangeDetection=r,a.callbackScheduled=!1,a.scheduleInRootZone=o,yT(a)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get(ig)===!0}static assertInAngularZone(){if(!t.isInAngularZone())throw new L(909,!1)}static assertNotInAngularZone(){if(t.isInAngularZone())throw new L(909,!1)}run(i,e,n){return this._inner.run(i,e,n)}runTask(i,e,n,r){let o=this._inner,a=o.scheduleEventTask("NgZoneEvent: "+r,i,vT,$d,$d);try{return o.runTask(a,e,n)}finally{o.cancelTask(a)}}runGuarded(i,e,n){return this._inner.runGuarded(i,e,n)}runOutsideAngular(i){return this._outer.run(i)}},vT={};function rg(t){if(t._nesting==0&&!t.hasPendingMicrotasks&&!t.isStable)try{t._nesting++,t.onMicrotaskEmpty.emit(null)}finally{if(t._nesting--,!t.hasPendingMicrotasks)try{t.runOutsideAngular(()=>t.onStable.emit(null))}finally{t.isStable=!0}}}function bT(t){if(t.isCheckStableRunning||t.callbackScheduled)return;t.callbackScheduled=!0;function i(){ng(()=>{t.callbackScheduled=!1,mp(t),t.isCheckStableRunning=!0,rg(t),t.isCheckStableRunning=!1})}t.scheduleInRootZone?Zone.root.run(()=>{i()}):t._outer.run(()=>{i()}),mp(t)}function yT(t){let i=()=>{bT(t)},e=_T++;t._inner=t._inner.fork({name:"angular",properties:{[ig]:!0,[ll]:e,[ll+e]:!0},onInvokeTask:(n,r,o,a,s,l)=>{if(CT(l))return n.invokeTask(o,a,s,l);try{return Vy(t),n.invokeTask(o,a,s,l)}finally{(t.shouldCoalesceEventChangeDetection&&a.type==="eventTask"||t.shouldCoalesceRunChangeDetection)&&i(),By(t)}},onInvoke:(n,r,o,a,s,l,d)=>{try{return Vy(t),n.invoke(o,a,s,l,d)}finally{t.shouldCoalesceRunChangeDetection&&!t.callbackScheduled&&!wT(l)&&i(),By(t)}},onHasTask:(n,r,o,a)=>{n.hasTask(o,a),r===o&&(a.change=="microTask"?(t._hasPendingMicrotasks=a.microTask,mp(t),rg(t)):a.change=="macroTask"&&(t.hasPendingMacrotasks=a.macroTask))},onHandleError:(n,r,o,a)=>(n.handleError(o,a),t.runOutsideAngular(()=>t.onError.emit(a)),!1)})}function mp(t){t._hasPendingMicrotasks||(t.shouldCoalesceEventChangeDetection||t.shouldCoalesceRunChangeDetection)&&t.callbackScheduled===!0?t.hasPendingMicrotasks=!0:t.hasPendingMicrotasks=!1}function Vy(t){t._nesting++,t.isStable&&(t.isStable=!1,t.onUnstable.emit(null))}function By(t){t._nesting--,rg(t)}var cl=class{hasPendingMicrotasks=!1;hasPendingMacrotasks=!1;isStable=!0;onUnstable=new I;onMicrotaskEmpty=new I;onStable=new I;onError=new I;run(i,e,n){return i.apply(e,n)}runGuarded(i,e,n){return i.apply(e,n)}runOutsideAngular(i){return i()}runTask(i,e,n,r){return i.apply(e,n)}};function CT(t){return S0(t,"__ignore_ng_zone__")}function wT(t){return S0(t,"__scheduler_tick__")}function S0(t,i){return!Array.isArray(t)||t.length!==1?!1:t[0]?.data?.[i]===!0}var qt=class{_console=console;handleError(i){this._console.error("ERROR",i)}},Dn=new y("",{factory:()=>{let t=c(V),i=c(Le),e;return n=>{t.runOutsideAngular(()=>{i.destroyed&&!e?setTimeout(()=>{throw n}):(e??=i.get(qt),e.handleError(n))})}}}),I0={provide:Fr,useValue:()=>{let t=c(qt,{optional:!0})},multi:!0},DT=new y("",{factory:()=>{let t=c(Y).defaultView;if(!t)return;let i=c(Dn),e=o=>{i(o.reason),o.preventDefault()},n=o=>{o.error?i(o.error):i(new Error(o.message,{cause:o})),o.preventDefault()},r=()=>{t.addEventListener("unhandledrejection",e),t.addEventListener("error",n)};typeof Zone<"u"?Zone.root.run(r):r(),c(jt).onDestroy(()=>{t.removeEventListener("error",n),t.removeEventListener("unhandledrejection",e)})}});function og(){return yi([Qy(()=>{c(DT)})])}function x(t,i){let[e,n,r]=Bh(t,i?.equal),o=e,a=o[ht];return o.set=n,o.update=r,o.asReadonly=uu.bind(o),o}function uu(){let t=this[ht];if(t.readonlyFn===void 0){let i=()=>this();i[ht]=t,t.readonlyFn=i}return t.readonlyFn}var Aa=(()=>{class t{view;node;constructor(e,n){this.view=e,this.node=n}static __NG_ELEMENT_ID__=xT}return t})();function xT(){return new Aa(ie(),Et())}var vi=class{},bl=new y("",{factory:()=>!0});var ag=new y(""),Ra=(()=>{class t{internalPendingTasks=c(er);scheduler=c(vi);errorHandler=c(Dn);add(){let e=this.internalPendingTasks.add();return()=>{this.internalPendingTasks.has(e)&&(this.scheduler.notify(11),this.internalPendingTasks.remove(e))}}run(e){let n=this.add();e().catch(this.errorHandler).finally(n)}static \u0275prov=b({token:t,providedIn:"root",factory:()=>new t})}return t})(),mu=(()=>{class t{static \u0275prov=b({token:t,providedIn:"root",factory:()=>new fp})}return t})(),fp=class{dirtyEffectCount=0;queues=new Map;add(i){this.enqueue(i),this.schedule(i)}schedule(i){i.dirty&&this.dirtyEffectCount++}remove(i){let e=i.zone,n=this.queues.get(e);n.has(i)&&(n.delete(i),i.dirty&&this.dirtyEffectCount--)}enqueue(i){let e=i.zone;this.queues.has(e)||this.queues.set(e,new Set);let n=this.queues.get(e);n.has(i)||n.add(i)}flush(){for(;this.dirtyEffectCount>0;){let i=!1;for(let[e,n]of this.queues)e===null?i||=this.flushQueue(n):i||=e.run(()=>this.flushQueue(n));i||(this.dirtyEffectCount=0)}}flushQueue(i){let e=!1;for(let n of i)n.dirty&&(this.dirtyEffectCount--,e=!0,n.run());return e}},Wd=class{[ht];constructor(i){this[ht]=i}destroy(){this[ht].destroy()}};function Ft(t,i){let e=i?.injector??c(G),n=i?.manualCleanup!==!0?e.get(jt):null,r,o=e.get(Aa,null,{optional:!0}),a=e.get(vi);return o!==null?(r=ST(o.view,a,t),n instanceof zd&&n._lView===o.view&&(n=null)):r=IT(t,e.get(mu),a),r.injector=e,n!==null&&(r.onDestroyFns=[n.onDestroy(()=>r.destroy())]),new Wd(r)}var T0=ne(C({},Hh),{cleanupFns:void 0,zone:null,onDestroyFns:null,run(){let t=sl(!1);try{Uh(this)}finally{sl(t)}},cleanup(){if(!this.cleanupFns?.length)return;let t=ee(null);try{for(;this.cleanupFns.length;)this.cleanupFns.pop()()}finally{this.cleanupFns=[],ee(t)}}}),ET=ne(C({},T0),{consumerMarkedDirty(){this.scheduler.schedule(this),this.notifier.notify(12)},destroy(){if(Er(this),this.onDestroyFns!==null)for(let t of this.onDestroyFns)t();this.cleanup(),this.scheduler.remove(this)}}),MT=ne(C({},T0),{consumerMarkedDirty(){this.view[ce]|=8192,Ao(this.view),this.notifier.notify(13)},destroy(){if(Er(this),this.onDestroyFns!==null)for(let t of this.onDestroyFns)t();this.cleanup(),this.view[Rr]?.delete(this)}});function ST(t,i,e){let n=Object.create(MT);return n.view=t,n.zone=typeof Zone<"u"?Zone.current:null,n.notifier=i,n.fn=k0(n,e),t[Rr]??=new Set,t[Rr].add(n),n.consumerMarkedDirty(n),n}function IT(t,i,e){let n=Object.create(ET);return n.fn=k0(n,t),n.scheduler=i,n.notifier=e,n.zone=typeof Zone<"u"?Zone.current:null,n.scheduler.add(n),n.notifier.notify(12),n}function k0(t,i){return()=>{i(e=>(t.cleanupFns??=[]).push(e))}}function kl(t){return{toString:t}.toString()}function NT(t){return typeof t=="function"}function uC(t,i,e,n){i!==null?i.applyValueToInputSignal(i,n):t[e]=n}var Cu=class{previousValue;currentValue;firstChange;constructor(i,e,n){this.previousValue=i,this.currentValue=e,this.firstChange=n}isFirstChange(){return this.firstChange}},Be=(()=>{let t=()=>mC;return t.ngInherit=!0,t})();function mC(t){return t.type.prototype.ngOnChanges&&(t.setInput=PT),FT}function FT(){let t=hC(this),i=t?.current;if(i){let e=t.previous;if(e===Nr)t.previous=i;else for(let n in i)e[n]=i[n];t.current=null,this.ngOnChanges(i)}}function PT(t,i,e,n,r){let o=this.declaredInputs[n],a=hC(t)||LT(t,{previous:Nr,current:null}),s=a.current||(a.current={}),l=a.previous,d=l[o];s[o]=new Cu(d&&d.currentValue,e,l===Nr),uC(t,i,r,e)}var fC="__ngSimpleChanges__";function hC(t){return t[fC]||null}function LT(t,i){return t[fC]=i}var A0=[];var Ve=function(t,i=null,e){for(let n=0;n<A0.length;n++){let r=A0[n];r(t,i,e)}},Ee=(function(t){return t[t.TemplateCreateStart=0]="TemplateCreateStart",t[t.TemplateCreateEnd=1]="TemplateCreateEnd",t[t.TemplateUpdateStart=2]="TemplateUpdateStart",t[t.TemplateUpdateEnd=3]="TemplateUpdateEnd",t[t.LifecycleHookStart=4]="LifecycleHookStart",t[t.LifecycleHookEnd=5]="LifecycleHookEnd",t[t.OutputStart=6]="OutputStart",t[t.OutputEnd=7]="OutputEnd",t[t.BootstrapApplicationStart=8]="BootstrapApplicationStart",t[t.BootstrapApplicationEnd=9]="BootstrapApplicationEnd",t[t.BootstrapComponentStart=10]="BootstrapComponentStart",t[t.BootstrapComponentEnd=11]="BootstrapComponentEnd",t[t.ChangeDetectionStart=12]="ChangeDetectionStart",t[t.ChangeDetectionEnd=13]="ChangeDetectionEnd",t[t.ChangeDetectionSyncStart=14]="ChangeDetectionSyncStart",t[t.ChangeDetectionSyncEnd=15]="ChangeDetectionSyncEnd",t[t.AfterRenderHooksStart=16]="AfterRenderHooksStart",t[t.AfterRenderHooksEnd=17]="AfterRenderHooksEnd",t[t.ComponentStart=18]="ComponentStart",t[t.ComponentEnd=19]="ComponentEnd",t[t.DeferBlockStateStart=20]="DeferBlockStateStart",t[t.DeferBlockStateEnd=21]="DeferBlockStateEnd",t[t.DynamicComponentStart=22]="DynamicComponentStart",t[t.DynamicComponentEnd=23]="DynamicComponentEnd",t[t.HostBindingsUpdateStart=24]="HostBindingsUpdateStart",t[t.HostBindingsUpdateEnd=25]="HostBindingsUpdateEnd",t})(Ee||{});function VT(t,i,e){let{ngOnChanges:n,ngOnInit:r,ngDoCheck:o}=i.type.prototype;if(n){let a=mC(i);(e.preOrderHooks??=[]).push(t,a),(e.preOrderCheckHooks??=[]).push(t,a)}r&&(e.preOrderHooks??=[]).push(0-t,r),o&&((e.preOrderHooks??=[]).push(t,o),(e.preOrderCheckHooks??=[]).push(t,o))}function pC(t,i){for(let e=i.directiveStart,n=i.directiveEnd;e<n;e++){let o=t.data[e].type.prototype,{ngAfterContentInit:a,ngAfterContentChecked:s,ngAfterViewInit:l,ngAfterViewChecked:d,ngOnDestroy:u}=o;a&&(t.contentHooks??=[]).push(-e,a),s&&((t.contentHooks??=[]).push(e,s),(t.contentCheckHooks??=[]).push(e,s)),l&&(t.viewHooks??=[]).push(-e,l),d&&((t.viewHooks??=[]).push(e,d),(t.viewCheckHooks??=[]).push(e,d)),u!=null&&(t.destroyHooks??=[]).push(e,u)}}function gu(t,i,e){gC(t,i,3,e)}function _u(t,i,e,n){(t[ce]&3)===e&&gC(t,i,e,n)}function sg(t,i){let e=t[ce];(e&3)===i&&(e&=16383,e+=1,t[ce]=e)}function gC(t,i,e,n){let r=n!==void 0?t[So]&65535:0,o=n??-1,a=i.length-1,s=0;for(let l=r;l<a;l++)if(typeof i[l+1]=="number"){if(s=i[l],n!=null&&s>=n)break}else i[l]<0&&(t[So]+=65536),(s<o||o==-1)&&(BT(t,e,i,l),t[So]=(t[So]&4294901760)+l+2),l++}function R0(t,i){Ve(Ee.LifecycleHookStart,t,i);let e=ee(null);try{i.call(t)}finally{ee(e),Ve(Ee.LifecycleHookEnd,t,i)}}function BT(t,i,e,n){let r=e[n]<0,o=e[n+1],a=r?-e[n]:e[n],s=t[a];r?t[ce]>>14<t[So]>>16&&(t[ce]&3)===i&&(t[ce]+=16384,R0(s,o)):R0(s,o)}var Na=-1,No=class{factory;name;injectImpl;resolving=!1;canSeeViewProviders;multi;componentProviders;index;providerFactory;constructor(i,e,n,r){this.factory=i,this.name=r,this.canSeeViewProviders=e,this.injectImpl=n}};function jT(t){return(t.flags&8)!==0}function HT(t){return(t.flags&16)!==0}function UT(t,i,e){let n=0;for(;n<e.length;){let r=e[n];if(typeof r=="number"){if(r!==0)break;n++;let o=e[n++],a=e[n++],s=e[n++];t.setAttribute(i,a,s,o)}else{let o=r,a=e[++n];zT(o)?t.setProperty(i,o,a):t.setAttribute(i,o,a),n++}}return n}function _C(t){return t===3||t===4||t===6}function zT(t){return t.charCodeAt(0)===64}function Pa(t,i){if(!(i===null||i.length===0))if(t===null||t.length===0)t=i.slice();else{let e=-1;for(let n=0;n<i.length;n++){let r=i[n];typeof r=="number"?e=r:e===0||(e===-1||e===2?O0(t,e,r,null,i[++n]):O0(t,e,r,null,null))}}return t}function O0(t,i,e,n,r){let o=0,a=t.length;if(i===-1)a=-1;else for(;o<t.length;){let s=t[o++];if(typeof s=="number"){if(s===i){a=-1;break}else if(s>i){a=o-1;break}}}for(;o<t.length;){let s=t[o];if(typeof s=="number")break;if(s===e){r!==null&&(t[o+1]=r);return}o++,r!==null&&o++}a!==-1&&(t.splice(a,0,i),o=a+1),t.splice(o++,0,e),r!==null&&t.splice(o++,0,r)}function vC(t){return t!==Na}function wu(t){return t&32767}function $T(t){return t>>16}function Du(t,i){let e=$T(t),n=i;for(;e>0;)n=n[Mo],e--;return n}var _g=!0;function xu(t){let i=_g;return _g=t,i}var WT=256,bC=WT-1,yC=5,GT=0,Ii={};function qT(t,i,e){let n;typeof e=="string"?n=e.charCodeAt(0)||0:e.hasOwnProperty(xo)&&(n=e[xo]),n==null&&(n=e[xo]=GT++);let r=n&bC,o=1<<r;i.data[t+(r>>yC)]|=o}function Eu(t,i){let e=CC(t,i);if(e!==-1)return e;let n=i[re];n.firstCreatePass&&(t.injectorIndex=i.length,lg(n.data,t),lg(i,null),lg(n.blueprint,null));let r=Jg(t,i),o=t.injectorIndex;if(vC(r)){let a=wu(r),s=Du(r,i),l=s[re].data;for(let d=0;d<8;d++)i[o+d]=s[a+d]|l[a+d]}return i[o+8]=r,o}function lg(t,i){t.push(0,0,0,0,0,0,0,0,i)}function CC(t,i){return t.injectorIndex===-1||t.parent&&t.parent.injectorIndex===t.injectorIndex||i[t.injectorIndex+8]===null?-1:t.injectorIndex}function Jg(t,i){if(t.parent&&t.parent.injectorIndex!==-1)return t.parent.injectorIndex;let e=0,n=null,r=i;for(;r!==null;){if(n=MC(r),n===null)return Na;if(e++,r=r[Mo],n.injectorIndex!==-1)return n.injectorIndex|e<<16}return Na}function vg(t,i,e){qT(t,i,e)}function YT(t,i){if(i==="class")return t.classes;if(i==="style")return t.styles;let e=t.attrs;if(e){let n=e.length,r=0;for(;r<n;){let o=e[r];if(_C(o))break;if(o===0)r=r+2;else if(typeof o=="number")for(r++;r<n&&typeof e[r]=="string";)r++;else{if(o===i)return e[r+1];r=r+2}}}return null}function wC(t,i,e){if(e&8||t!==void 0)return t;Zd(i,"NodeInjector")}function DC(t,i,e,n){if(e&8&&n===void 0&&(n=null),(e&3)===0){let r=t[bn],o=Xt(void 0);try{return r?r.get(i,n,e&8):xp(i,n,e&8)}finally{Xt(o)}}return wC(n,i,e)}function xC(t,i,e,n=0,r){if(t!==null){if(i[ce]&2048&&!(n&2)){let a=XT(t,i,e,n,Ii);if(a!==Ii)return a}let o=EC(t,i,e,n,Ii);if(o!==Ii)return o}return DC(i,e,n,r)}function EC(t,i,e,n,r){let o=ZT(e);if(typeof o=="function"){if(!Jp(i,t,n))return n&1?wC(r,e,n):DC(i,e,n,r);try{let a;if(a=o(n),a==null&&!(n&8))Zd(e);else return a}finally{eg()}}else if(typeof o=="number"){let a=null,s=CC(t,i),l=Na,d=n&1?i[en][Jt]:null;for((s===-1||n&4)&&(l=s===-1?Jg(t,i):i[s+8],l===Na||!F0(n,!1)?s=-1:(a=i[re],s=wu(l),i=Du(l,i)));s!==-1;){let u=i[re];if(N0(o,s,u.data)){let f=QT(s,i,e,a,n,d);if(f!==Ii)return f}l=i[s+8],l!==Na&&F0(n,i[re].data[s+8]===d)&&N0(o,s,i)?(a=u,s=wu(l),i=Du(l,i)):s=-1}}return r}function QT(t,i,e,n,r,o){let a=i[re],s=a.data[t+8],l=n==null?Di(s)&&_g:n!=a&&(s.type&3)!==0,d=r&1&&o===s,u=vu(s,a,e,l,d);return u!==null?Dl(i,a,u,s,r):Ii}function vu(t,i,e,n,r){let o=t.providerIndexes,a=i.data,s=o&1048575,l=t.directiveStart,d=t.directiveEnd,u=o>>20,f=n?s:s+u,_=r?s+u:d;for(let v=f;v<_;v++){let w=a[v];if(v<l&&e===w||v>=l&&w.type===e)return v}if(r){let v=a[l];if(v&&xi(v)&&v.type===e)return l}return null}function Dl(t,i,e,n,r){let o=t[e],a=i.data;if(o instanceof No){let s=o;if(s.resolving)throw Dp("");let l=xu(s.canSeeViewProviders);s.resolving=!0;let d=a[e].type||a[e],u,f=s.injectImpl?Xt(s.injectImpl):null,_=Jp(t,n,0);try{o=t[e]=s.factory(void 0,r,a,t,n),i.firstCreatePass&&e>=n.directiveStart&&VT(e,a[e],i)}finally{f!==null&&Xt(f),xu(l),s.resolving=!1,eg()}}return o}function ZT(t){if(typeof t=="string")return t.charCodeAt(0)||0;let i=t.hasOwnProperty(xo)?t[xo]:void 0;return typeof i=="number"?i>=0?i&bC:KT:i}function N0(t,i,e){let n=1<<t;return!!(e[i+(t>>yC)]&n)}function F0(t,i){return!(t&2)&&!(t&1&&i)}var Oo=class{_tNode;_lView;constructor(i,e){this._tNode=i,this._lView=e}get(i,e,n){return xC(this._tNode,this._lView,i,Co(n),e)}};function KT(){return new Oo(Et(),ie())}function Ze(t){return kl(()=>{let i=t.prototype.constructor,e=i[ol]||bg(i),n=Object.prototype,r=Object.getPrototypeOf(t.prototype).constructor;for(;r&&r!==n;){let o=r[ol]||bg(r);if(o&&o!==e)return o;r=Object.getPrototypeOf(r)}return o=>new o})}function bg(t){return hp(t)?()=>{let i=bg(Bt(t));return i&&i()}:Ar(t)}function XT(t,i,e,n,r){let o=t,a=i;for(;o!==null&&a!==null&&a[ce]&2048&&!Sa(a);){let s=EC(o,a,e,n|2,Ii);if(s!==Ii)return s;let l=o.parent;if(!l){let d=a[Rp];if(d){let u=d.get(e,Ii,n&-5);if(u!==Ii)return u}l=MC(a),a=a[Mo]}o=l}return r}function MC(t){let i=t[re],e=i.type;return e===2?i.declTNode:e===1?t[Jt]:null}function Hu(t){return YT(Et(),t)}function JT(){return Ua(Et(),ie())}function Ua(t,i){return new B(Cn(t,i))}var B=(()=>{class t{nativeElement;constructor(e){this.nativeElement=e}static __NG_ELEMENT_ID__=JT}return t})();function SC(t){return t instanceof B?t.nativeElement:t}function ek(){return this._results[Symbol.iterator]()}var tr=class{_emitDistinctChangesOnly;dirty=!0;_onDirty=void 0;_results=[];_changesDetected=!1;_changes=void 0;length=0;first=void 0;last=void 0;get changes(){return this._changes??=new S}constructor(i=!1){this._emitDistinctChangesOnly=i}get(i){return this._results[i]}map(i){return this._results.map(i)}filter(i){return this._results.filter(i)}find(i){return this._results.find(i)}reduce(i,e){return this._results.reduce(i,e)}forEach(i){this._results.forEach(i)}some(i){return this._results.some(i)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(i,e){this.dirty=!1;let n=Gy(i);(this._changesDetected=!Wy(this._results,n,e))&&(this._results=n,this.length=n.length,this.last=n[this.length-1],this.first=n[0])}notifyOnChanges(){this._changes!==void 0&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.next(this)}onDirty(i){this._onDirty=i}setDirty(){this.dirty=!0,this._onDirty?.()}destroy(){this._changes!==void 0&&(this._changes.complete(),this._changes.unsubscribe())}[Symbol.iterator]=ek};function IC(t){return(t.flags&128)===128}var e_=(function(t){return t[t.OnPush=0]="OnPush",t[t.Eager=1]="Eager",t[t.Default=1]="Default",t})(e_||{}),TC=new Map,tk=0;function nk(){return tk++}function ik(t){TC.set(t[Ki],t)}function yg(t){TC.delete(t[Ki])}var P0="__ngContext__";function La(t,i){Ji(i)?(t[P0]=i[Ki],ik(i)):t[P0]=i}function kC(t){return RC(t[Ma])}function AC(t){return RC(t[Rn])}function RC(t){for(;t!==null&&!Xn(t);)t=t[Rn];return t}var rk;function t_(t){rk=t}var Hr=new y("",{factory:()=>ok}),ok="ng";var Uu=new y(""),Lo=new y("",{providedIn:"platform",factory:()=>"unknown"}),Al=new y(""),za=new y("",{factory:()=>c(Y).body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});var OC="r";var NC="di";var FC=!1,PC=new y("",{factory:()=>FC});var zu=new y("");var ak=(t,i,e,n)=>{};function sk(t,i,e,n){ak(t,i,e,n)}function $u(t){return(t.flags&32)===32}var lk=()=>null;function LC(t,i,e=!1){return lk(t,i,e)}function VC(t,i){let e=t.contentQueries;if(e!==null){let n=ee(null);try{for(let r=0;r<e.length;r+=2){let o=e[r],a=e[r+1];if(a!==-1){let s=t.data[a];vl(o),s.contentQueries(2,i[a],a)}}}finally{ee(n)}}}function Cg(t,i,e){vl(0);let n=ee(null);try{i(t,e)}finally{ee(n)}}function BC(t,i,e){if(Np(i)){let n=ee(null);try{let r=i.directiveStart,o=i.directiveEnd;for(let a=r;a<o;a++){let s=t.data[a];if(s.contentQueries){let l=e[a];s.contentQueries(1,l,a)}}}finally{ee(n)}}}var ei=(function(t){return t[t.Emulated=0]="Emulated",t[t.None=2]="None",t[t.ShadowDom=3]="ShadowDom",t[t.ExperimentalIsolatedShadowDom=4]="ExperimentalIsolatedShadowDom",t})(ei||{});var fu;function ck(){if(fu===void 0&&(fu=null,Ca.trustedTypes))try{fu=Ca.trustedTypes.createPolicy("angular",{createHTML:t=>t,createScript:t=>t,createScriptURL:t=>t})}catch{}return fu}function Wu(t){return ck()?.createHTML(t)||t}var nr=class{changingThisBreaksApplicationSecurity;constructor(i){this.changingThisBreaksApplicationSecurity=i}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${Gd})`}},wg=class extends nr{getTypeName(){return"HTML"}},Dg=class extends nr{getTypeName(){return"Style"}},xg=class extends nr{getTypeName(){return"Script"}},Eg=class extends nr{getTypeName(){return"URL"}},Mg=class extends nr{getTypeName(){return"ResourceURL"}};function ti(t){return t instanceof nr?t.changingThisBreaksApplicationSecurity:t}function Vo(t,i){let e=jC(t);if(e!=null&&e!==i){if(e==="ResourceURL"&&i==="URL")return!0;throw new Error(`Required a safe ${i}, got a ${e} (see ${Gd})`)}return e===i}function jC(t){return t instanceof nr&&t.getTypeName()||null}function n_(t){return new wg(t)}function i_(t){return new Dg(t)}function r_(t){return new xg(t)}function o_(t){return new Eg(t)}function a_(t){return new Mg(t)}function dk(t){let i=new Ig(t);return uk()?new Sg(i):i}var Sg=class{inertDocumentHelper;constructor(i){this.inertDocumentHelper=i}getInertBodyElement(i){i="<body><remove></remove>"+i;try{let e=new window.DOMParser().parseFromString(Wu(i),"text/html").body;return e===null?this.inertDocumentHelper.getInertBodyElement(i):(e.firstChild?.remove(),e)}catch{return null}}},Ig=class{defaultDoc;inertDocument;constructor(i){this.defaultDoc=i,this.inertDocument=this.defaultDoc.implementation.createHTMLDocument("sanitization-inert")}getInertBodyElement(i){let e=this.inertDocument.createElement("template");return e.innerHTML=Wu(i),e}};function uk(){try{return!!new window.DOMParser().parseFromString(Wu(""),"text/html")}catch{return!1}}var mk=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;function Gu(t){return t=String(t),t.match(mk)?t:"unsafe:"+t}function ir(t){let i={};for(let e of t.split(","))i[e]=!0;return i}function Rl(...t){let i={};for(let e of t)for(let n in e)e.hasOwnProperty(n)&&(i[n]=!0);return i}var HC=ir("area,br,col,hr,img,wbr"),UC=ir("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),zC=ir("rp,rt"),fk=Rl(zC,UC),hk=Rl(UC,ir("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")),pk=Rl(zC,ir("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")),L0=Rl(HC,hk,pk,fk),$C=ir("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),gk=ir("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,srcset,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"),_k=ir("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext"),vk=Rl($C,gk,_k),bk=ir("script,style,template");var Tg=class{sanitizedSomething=!1;buf=[];sanitizeChildren(i){let e=i.firstChild,n=!0,r=[];for(;e;){if(e.nodeType===Node.ELEMENT_NODE?n=this.startElement(e):e.nodeType===Node.TEXT_NODE?this.chars(e.nodeValue):this.sanitizedSomething=!0,n&&e.firstChild){r.push(e),e=wk(e);continue}for(;e;){e.nodeType===Node.ELEMENT_NODE&&this.endElement(e);let o=Ck(e);if(o){e=o;break}e=r.pop()}}return this.buf.join("")}startElement(i){let e=V0(i).toLowerCase();if(!L0.hasOwnProperty(e))return this.sanitizedSomething=!0,!bk.hasOwnProperty(e);this.buf.push("<"),this.buf.push(e);let n=i.attributes;for(let r=0;r<n.length;r++){let o=n.item(r),a=o.name,s=a.toLowerCase();if(!vk.hasOwnProperty(s)){this.sanitizedSomething=!0;continue}let l=o.value;$C[s]&&(l=Gu(l)),this.buf.push(" ",a,'="',B0(l),'"')}return this.buf.push(">"),!0}endElement(i){let e=V0(i).toLowerCase();L0.hasOwnProperty(e)&&!HC.hasOwnProperty(e)&&(this.buf.push("</"),this.buf.push(e),this.buf.push(">"))}chars(i){this.buf.push(B0(i))}};function yk(t,i){return(t.compareDocumentPosition(i)&Node.DOCUMENT_POSITION_CONTAINED_BY)!==Node.DOCUMENT_POSITION_CONTAINED_BY}function Ck(t){let i=t.nextSibling;if(i&&t!==i.previousSibling)throw WC(i);return i}function wk(t){let i=t.firstChild;if(i&&yk(t,i))throw WC(i);return i}function V0(t){let i=t.nodeName;return typeof i=="string"?i:"FORM"}function WC(t){return new Error(`Failed to sanitize html because the element is clobbered: ${t.outerHTML}`)}var Dk=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,xk=/([^\#-~ |!])/g;function B0(t){return t.replace(/&/g,"&amp;").replace(Dk,function(i){let e=i.charCodeAt(0),n=i.charCodeAt(1);return"&#"+((e-55296)*1024+(n-56320)+65536)+";"}).replace(xk,function(i){return"&#"+i.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}var hu;function s_(t,i){let e=null;try{hu=hu||dk(t);let n=i?String(i):"";e=hu.getInertBodyElement(n);let r=5,o=n;do{if(r===0)throw new Error("Failed to sanitize html because the input is unstable");r--,n=o,o=e.innerHTML,e=hu.getInertBodyElement(n)}while(n!==o);let s=new Tg().sanitizeChildren(j0(e)||e);return Wu(s)}finally{if(e){let n=j0(e)||e;for(;n.firstChild;)n.firstChild.remove()}}}function j0(t){return"content"in t&&Ek(t)?t.content:null}function Ek(t){return t.nodeType===Node.ELEMENT_NODE&&t.nodeName==="TEMPLATE"}function Mk(t,i){return t.createText(i)}function Sk(t,i,e){t.setValue(i,e)}function GC(t,i,e){return t.createElement(i,e)}function Mu(t,i,e,n,r){t.insertBefore(i,e,n,r)}function qC(t,i,e){t.appendChild(i,e)}function H0(t,i,e,n,r){n!==null?Mu(t,i,e,n,r):qC(t,i,e)}function YC(t,i,e,n){t.removeChild(null,i,e,n)}function Ik(t,i,e){t.setAttribute(i,"style",e)}function Tk(t,i,e){e===""?t.removeAttribute(i,"class"):t.setAttribute(i,"class",e)}function QC(t,i,e){let{mergedAttrs:n,classes:r,styles:o}=e;n!==null&&UT(t,i,n),r!==null&&Tk(t,i,r),o!==null&&Ik(t,i,o)}var Ht=(function(t){return t[t.NONE=0]="NONE",t[t.HTML=1]="HTML",t[t.STYLE=2]="STYLE",t[t.SCRIPT=3]="SCRIPT",t[t.URL=4]="URL",t[t.RESOURCE_URL=5]="RESOURCE_URL",t})(Ht||{});function ZC(t){return t instanceof Function?t():t}function kk(t,i,e){let n=t.length;for(;;){let r=t.indexOf(i,e);if(r===-1)return r;if(r===0||t.charCodeAt(r-1)<=32){let o=i.length;if(r+o===n||t.charCodeAt(r+o)<=32)return r}e=r+1}}var KC="ng-template";function Ak(t,i,e,n){let r=0;if(n){for(;r<i.length&&typeof i[r]=="string";r+=2)if(i[r]==="class"&&kk(i[r+1].toLowerCase(),e,0)!==-1)return!0}else if(l_(t))return!1;if(r=i.indexOf(1,r),r>-1){let o;for(;++r<i.length&&typeof(o=i[r])=="string";)if(o.toLowerCase()===e)return!0}return!1}function l_(t){return t.type===4&&t.value!==KC}function Rk(t,i,e){let n=t.type===4&&!e?KC:t.value;return i===n}function Ok(t,i,e){let n=4,r=t.attrs,o=r!==null?Pk(r):0,a=!1;for(let s=0;s<i.length;s++){let l=i[s];if(typeof l=="number"){if(!a&&!Jn(n)&&!Jn(l))return!1;if(a&&Jn(l))continue;a=!1,n=l|n&1;continue}if(!a)if(n&4){if(n=2|n&1,l!==""&&!Rk(t,l,e)||l===""&&i.length===1){if(Jn(n))return!1;a=!0}}else if(n&8){if(r===null||!Ak(t,r,l,e)){if(Jn(n))return!1;a=!0}}else{let d=i[++s],u=Nk(l,r,l_(t),e);if(u===-1){if(Jn(n))return!1;a=!0;continue}if(d!==""){let f;if(u>o?f="":f=r[u+1].toLowerCase(),n&2&&d!==f){if(Jn(n))return!1;a=!0}}}}return Jn(n)||a}function Jn(t){return(t&1)===0}function Nk(t,i,e,n){if(i===null)return-1;let r=0;if(n||!e){let o=!1;for(;r<i.length;){let a=i[r];if(a===t)return r;if(a===3||a===6)o=!0;else if(a===1||a===2){let s=i[++r];for(;typeof s=="string";)s=i[++r];continue}else{if(a===4)break;if(a===0){r+=4;continue}}r+=o?1:2}return-1}else return Lk(i,t)}function XC(t,i,e=!1){for(let n=0;n<i.length;n++)if(Ok(t,i[n],e))return!0;return!1}function Fk(t){let i=t.attrs;if(i!=null){let e=i.indexOf(5);if((e&1)===0)return i[e+1]}return null}function Pk(t){for(let i=0;i<t.length;i++){let e=t[i];if(_C(e))return i}return t.length}function Lk(t,i){let e=t.indexOf(4);if(e>-1)for(e++;e<t.length;){let n=t[e];if(typeof n=="number")return-1;if(n===i)return e;e++}return-1}function Vk(t,i){e:for(let e=0;e<i.length;e++){let n=i[e];if(t.length===n.length){for(let r=0;r<t.length;r++)if(t[r]!==n[r])continue e;return!0}}return!1}function U0(t,i){return t?":not("+i.trim()+")":i}function Bk(t){let i=t[0],e=1,n=2,r="",o=!1;for(;e<t.length;){let a=t[e];if(typeof a=="string")if(n&2){let s=t[++e];r+="["+a+(s.length>0?'="'+s+'"':"")+"]"}else n&8?r+="."+a:n&4&&(r+=" "+a);else r!==""&&!Jn(a)&&(i+=U0(o,r),r=""),n=a,o=o||!Jn(n);e++}return r!==""&&(i+=U0(o,r)),i}function jk(t){return t.map(Bk).join(",")}function Hk(t){let i=[],e=[],n=1,r=2;for(;n<t.length;){let o=t[n];if(typeof o=="string")r===2?o!==""&&i.push(o,t[++n]):r===8&&e.push(o);else{if(!Jn(r))break;r=o}n++}return e.length&&i.push(1,...e),i}var Ut={};function c_(t,i,e,n,r,o,a,s,l,d,u){let f=et+n,_=f+r,v=Uk(f,_),w=typeof d=="function"?d():d;return v[re]={type:t,blueprint:v,template:e,queries:null,viewQuery:s,declTNode:i,data:v.slice().fill(null,f),bindingStartIndex:f,expandoStartIndex:_,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof o=="function"?o():o,pipeRegistry:typeof a=="function"?a():a,firstChild:null,schemas:l,consts:w,incompleteFirstPass:!1,ssrId:u}}function Uk(t,i){let e=[];for(let n=0;n<i;n++)e.push(n<t?null:Ut);return e}function zk(t){let i=t.tView;return i===null||i.incompleteFirstPass?t.tView=c_(1,null,t.template,t.decls,t.vars,t.directiveDefs,t.pipeDefs,t.viewQuery,t.schemas,t.consts,t.id):i}function d_(t,i,e,n,r,o,a,s,l,d,u){let f=i.blueprint.slice();return f[Kn]=r,f[ce]=n|4|128|8|64|1024,(d!==null||t&&t[ce]&2048)&&(f[ce]|=2048),Bp(f),f[Dt]=f[Mo]=t,f[ct]=e,f[Ci]=a||t&&t[Ci],f[He]=s||t&&t[He],f[bn]=l||t&&t[bn]||null,f[Jt]=o,f[Ki]=nk(),f[Eo]=u,f[Rp]=d,f[en]=i.type==2?t[en]:f,f}function $k(t,i,e){let n=Cn(i,t),r=zk(e),o=t[Ci].rendererFactory,a=u_(t,d_(t,r,null,JC(e),n,i,null,o.createRenderer(n,e),null,null,null));return t[i.index]=a}function JC(t){let i=16;return t.signals?i=4096:t.onPush&&(i=64),i}function ew(t,i,e,n){if(e===0)return-1;let r=i.length;for(let o=0;o<e;o++)i.push(n),t.blueprint.push(n),t.data.push(null);return r}function u_(t,i){return t[Ma]?t[Ap][Rn]=i:t[Ma]=i,t[Ap]=i,i}function p(t=1){tw(We(),ie(),Mi()+t,!1)}function tw(t,i,e,n){if(!n)if((i[ce]&3)===3){let o=t.preOrderCheckHooks;o!==null&&gu(i,o,e)}else{let o=t.preOrderHooks;o!==null&&_u(i,o,0,e)}Vr(e)}var qu=(function(t){return t[t.None=0]="None",t[t.SignalBased=1]="SignalBased",t[t.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",t})(qu||{});function kg(t,i,e,n){let r=ee(null);try{let[o,a,s]=t.inputs[e],l=null;(a&qu.SignalBased)!==0&&(l=i[o][ht]),l!==null&&l.transformFn!==void 0?n=l.transformFn(n):s!==null&&(n=s.call(i,n)),t.setInput!==null?t.setInput(i,l,n,e,o):uC(i,l,o,n)}finally{ee(r)}}var Ti=(function(t){return t[t.Important=1]="Important",t[t.DashCase=2]="DashCase",t})(Ti||{}),Wk;function m_(t,i){return Wk(t,i)}var nw=new y("",{factory:()=>!1});var Gk=!1,iw=typeof document<"u"&&typeof document?.documentElement?.getAnimations=="function";function qk(t){return t[bn].get(nw,Gk)}function Yk(t,i,e){let n=xl.get(t);if(n){for(let r of i)n.classList.push(r);for(let r of e)n.cleanupFns.push(r)}else xl.set(t,{classList:i,cleanupFns:e})}function rw(t){let i=xl.get(t);if(i){for(let e of i.cleanupFns)e();xl.delete(t)}Su.delete(t)}var xl=new WeakMap,Su=new WeakMap,Ag=new WeakMap,yl=new WeakSet;function Qk(t,i){let e=Ag.get(t);if(!e||e.length===0)return;let n=i.parentNode,r=i.previousSibling;for(let o=e.length-1;o>=0;o--){let a=e[o],s=a.parentNode;a===i?(e.splice(o,1),yl.add(a),a.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}}))):(r&&a===r||s&&n&&s!==n)&&(e.splice(o,1),a.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}})),a.parentNode?.removeChild(a))}}function Zk(t,i){let e=Ag.get(t);e?e.includes(i)||e.push(i):Ag.set(t,[i])}function z0(t){let i=t[Xi]??={};return i.enter??=new Map}function Kk(t){let i=typeof t=="function"?t():t,e=Array.isArray(i)?i:null;return typeof i=="string"&&(e=i.trim().split(/\s+/).filter(n=>n)),e}function Iu(t){return t.composedPath?t.composedPath()[0]:t.target}function ow(t,i){let e=Su.get(i);return e===void 0?!0:i===Iu(t)&&(e.animationName!==void 0&&t.animationName===e.animationName||e.propertyName!==void 0&&(e.propertyName==="all"||t.propertyName===e.propertyName))}function Xk(t,i,e){let n=t.get(i.index)??{animateFns:[]};n.animateFns.push(e),t.set(i.index,n)}function Tu(t){if(!t)return 0;let i=t.toLowerCase().indexOf("ms")>-1?1:1e3;return parseFloat(t)*i}function Ro(t,i){return t.getPropertyValue(i).split(",").map(n=>n.trim())}function Jk(t){let i=Ro(t,"transition-property"),e=Ro(t,"transition-duration"),n=Ro(t,"transition-delay"),r={propertyName:"",duration:0,animationName:void 0};for(let o=0;o<i.length;o++){let a=Tu(n[o])+Tu(e[o]);a>r.duration&&(r.propertyName=i[o],r.duration=a)}return r}function eA(t){let i=Ro(t,"animation-name"),e=Ro(t,"animation-delay"),n=Ro(t,"animation-duration"),r=Ro(t,"animation-iteration-count"),o={animationName:"",propertyName:void 0,duration:0};for(let a=0;a<i.length;a++){let s=Tu(e[a])+Tu(n[a]),l=r[a];s>o.duration&&l!=="infinite"&&(o.animationName=i[a],o.duration=s)}return o}function aw(t,i){return t!==void 0&&t.duration>i.duration}function sw(t){return(t.animationName!=null||t.propertyName!=null)&&t.duration>0}function tA(t,i){let e=getComputedStyle(t),n=eA(e),r=Jk(e),o=n.duration>r.duration?n:r;aw(i.get(t),o)||sw(o)&&i.set(t,o)}function nA(t,i,e){if(!e)return;let n=t.getAnimations();return n.length===0?tA(t,i):iA(t,i,n)}function iA(t,i,e){let n={animationName:void 0,propertyName:void 0,duration:0};for(let r of e){let o=r.effect?.getTiming();if(o?.iterations===1/0)continue;let a=typeof o?.duration=="number"?o.duration:0,s=(o?.delay??0)+a,l=r.playbackRate;l!==void 0&&l!==0&&l!==1&&(s/=Math.abs(l));let d,u;r.animationName?u=r.animationName:d=r.transitionProperty,s>=n.duration&&(n={animationName:u,propertyName:d,duration:s})}aw(i.get(t),n)||sw(n)&&i.set(t,n)}var Fo=new Set,Yu=(function(t){return t[t.CHANGE_DETECTION=0]="CHANGE_DETECTION",t[t.AFTER_NEXT_RENDER=1]="AFTER_NEXT_RENDER",t})(Yu||{}),ni=new y(""),$0=new Set;function ii(t){$0.has(t)||($0.add(t),performance?.mark?.("mark_feature_usage",{detail:{feature:t}}))}var Qu=(()=>{class t{impl=null;execute(){this.impl?.execute()}static \u0275prov=b({token:t,providedIn:"root",factory:()=>new t})}return t})(),f_=[0,1,2,3],h_=(()=>{class t{ngZone=c(V);scheduler=c(vi);errorHandler=c(qt,{optional:!0});sequences=new Set;deferredRegistrations=new Set;executing=!1;constructor(){c(ni,{optional:!0})}execute(){let e=this.sequences.size>0;e&&Ve(Ee.AfterRenderHooksStart),this.executing=!0;for(let n of f_)for(let r of this.sequences)if(!(r.erroredOrDestroyed||!r.hooks[n]))try{r.pipelinedValue=this.ngZone.runOutsideAngular(()=>this.maybeTrace(()=>{let o=r.hooks[n];return o(r.pipelinedValue)},r.snapshot))}catch(o){r.erroredOrDestroyed=!0,this.errorHandler?.handleError(o)}this.executing=!1;for(let n of this.sequences)n.afterRun(),n.once&&(this.sequences.delete(n),n.destroy());for(let n of this.deferredRegistrations)this.sequences.add(n);this.deferredRegistrations.size>0&&this.scheduler.notify(7),this.deferredRegistrations.clear(),e&&Ve(Ee.AfterRenderHooksEnd)}register(e){let{view:n}=e;n!==void 0?((n[Io]??=[]).push(e),Ao(n),n[ce]|=8192):this.executing?this.deferredRegistrations.add(e):this.addSequence(e)}addSequence(e){this.sequences.add(e),this.scheduler.notify(7)}unregister(e){this.executing&&this.sequences.has(e)?(e.erroredOrDestroyed=!0,e.pipelinedValue=void 0,e.once=!0):(this.sequences.delete(e),this.deferredRegistrations.delete(e))}maybeTrace(e,n){return n?n.run(Yu.AFTER_NEXT_RENDER,e):e()}static \u0275prov=b({token:t,providedIn:"root",factory:()=>new t})}return t})(),El=class{impl;hooks;view;once;snapshot;erroredOrDestroyed=!1;pipelinedValue=void 0;unregisterOnDestroy;constructor(i,e,n,r,o,a=null){this.impl=i,this.hooks=e,this.view=n,this.once=r,this.snapshot=a,this.unregisterOnDestroy=o?.onDestroy(()=>this.destroy())}afterRun(){this.erroredOrDestroyed=!1,this.pipelinedValue=void 0,this.snapshot?.dispose(),this.snapshot=null}destroy(){this.impl.unregister(this),this.unregisterOnDestroy?.();let i=this.view?.[Io];i&&(this.view[Io]=i.filter(e=>e!==this))}};function Ge(t,i){let e=i?.injector??c(G);return ii("NgAfterNextRender"),oA(t,e,i,!0)}function rA(t){return t instanceof Function?[void 0,void 0,t,void 0]:[t.earlyRead,t.write,t.mixedReadWrite,t.read]}function oA(t,i,e,n){let r=i.get(Qu);r.impl??=i.get(h_);let o=i.get(ni,null,{optional:!0}),a=e?.manualCleanup!==!0?i.get(jt):null,s=i.get(Aa,null,{optional:!0}),l=new El(r.impl,rA(t),s?.view,n,a,o?.snapshot(null));return r.impl.register(l),l}var Zu=new y("",{factory:()=>({queue:new Set,isScheduled:!1,scheduler:null,injector:c(Le)})});function lw(t,i,e){let n=t.get(Zu);if(Array.isArray(i))for(let r of i)n.queue.add(r),e?.detachedLeaveAnimationFns?.push(r);else n.queue.add(i),e?.detachedLeaveAnimationFns?.push(i);n.scheduler&&n.scheduler(t)}function aA(t,i){let e=t.get(Zu);if(i.detachedLeaveAnimationFns){for(let n of i.detachedLeaveAnimationFns)e.queue.delete(n);i.detachedLeaveAnimationFns=void 0}}function sA(t){let i=t.get(Zu);i.isScheduled||(Ge(()=>{i.isScheduled=!1;for(let e of i.queue)e();i.queue.clear()},{injector:i.injector}),i.isScheduled=!0)}function lA(t){let i=t.get(Zu);i.scheduler=sA,i.scheduler(t)}function cw(t,i){for(let[e,n]of i)lw(t,n.animateFns)}function W0(t,i,e,n){let r=t?.[Xi]?.enter;i!==null&&r&&r.has(e.index)&&cw(n,r)}function Oa(t,i,e,n,r,o,a,s){if(r!=null){let l,d=!1;Xn(r)?l=r:Ji(r)&&(d=!0,r=r[Kn]);let u=On(r);t===0&&n!==null?(W0(s,n,o,e),a==null?qC(i,n,u):Mu(i,n,u,a||null,!0)):t===1&&n!==null?(W0(s,n,o,e),Mu(i,n,u,a||null,!0),Qk(o,u)):t===2?(s?.[Xi]?.leave?.has(o.index)&&Zk(o,u),yl.delete(u),G0(s,o,e,f=>{if(yl.has(u)){yl.delete(u);return}YC(i,u,d,f)})):t===3&&(yl.delete(u),G0(s,o,e,()=>{i.destroyNode(u)})),l!=null&&bA(i,t,e,l,o,n,a)}}function cA(t,i){dw(t,i),i[Kn]=null,i[Jt]=null}function dA(t,i,e,n,r,o){n[Kn]=r,n[Jt]=i,Xu(t,n,e,1,r,o)}function dw(t,i){i[Ci].changeDetectionScheduler?.notify(9),Xu(t,i,i[He],2,null,null)}function uA(t){let i=t[Ma];if(!i)return cg(t[re],t);for(;i;){let e=null;if(Ji(i))e=i[Ma];else{let n=i[rt];n&&(e=n)}if(!e){for(;i&&!i[Rn]&&i!==t;)Ji(i)&&cg(i[re],i),i=i[Dt];i===null&&(i=t),Ji(i)&&cg(i[re],i),e=i&&i[Rn]}i=e}}function p_(t,i){let e=t[To],n=e.indexOf(i);e.splice(n,1)}function Ku(t,i){if(ko(i))return;let e=i[He];e.destroyNode&&Xu(t,i,e,3,null,null),uA(i)}function cg(t,i){if(ko(i))return;let e=ee(null);try{i[ce]&=-129,i[ce]|=256,i[yn]&&Er(i[yn]),hA(t,i),fA(t,i),i[re].type===1&&i[He].destroy();let n=i[Pr];if(n!==null&&Xn(i[Dt])){n!==i[Dt]&&p_(n,i);let r=i[wi];r!==null&&r.detachView(t)}yg(i)}finally{ee(e)}}function G0(t,i,e,n){let r=t?.[Xi];if(r==null||r.leave==null||!r.leave.has(i.index))return n(!1);t&&Fo.add(t[Ki]),lw(e,()=>{if(r.leave&&r.leave.has(i.index)){let a=r.leave.get(i.index),s=[];if(a){for(let l=0;l<a.animateFns.length;l++){let d=a.animateFns[l],{promise:u}=d();s.push(u)}r.detachedLeaveAnimationFns=void 0}r.running=Promise.allSettled(s),mA(t,n)}else t&&Fo.delete(t[Ki]),n(!1)},r)}function mA(t,i){let e=t[Xi]?.running;if(e){e.then(()=>{t[Xi].running=void 0,Fo.delete(t[Ki]),i(!0)});return}i(!1)}function fA(t,i){let e=t.cleanup,n=i[Ea];if(e!==null)for(let a=0;a<e.length-1;a+=2)if(typeof e[a]=="string"){let s=e[a+3];s>=0?n[s]():n[-s].unsubscribe(),a+=2}else{let s=n[e[a+1]];e[a].call(s)}n!==null&&(i[Ea]=null);let r=i[Zi];if(r!==null){i[Zi]=null;for(let a=0;a<r.length;a++){let s=r[a];s()}}let o=i[Rr];if(o!==null){i[Rr]=null;for(let a of o)a.destroy()}}function hA(t,i){let e;if(t!=null&&(e=t.destroyHooks)!=null)for(let n=0;n<e.length;n+=2){let r=i[e[n]];if(!(r instanceof No)){let o=e[n+1];if(Array.isArray(o))for(let a=0;a<o.length;a+=2){let s=r[o[a]],l=o[a+1];Ve(Ee.LifecycleHookStart,s,l);try{l.call(s)}finally{Ve(Ee.LifecycleHookEnd,s,l)}}else{Ve(Ee.LifecycleHookStart,r,o);try{o.call(r)}finally{Ve(Ee.LifecycleHookEnd,r,o)}}}}}function uw(t,i,e){return pA(t,i.parent,e)}function pA(t,i,e){let n=i;for(;n!==null&&n.type&168;)i=n,n=i.parent;if(n===null)return e[Kn];if(Di(n)){let{encapsulation:r}=t.data[n.directiveStart+n.componentOffset];if(r===ei.None||r===ei.Emulated)return null}return Cn(n,e)}function mw(t,i,e){return _A(t,i,e)}function gA(t,i,e){return t.type&40?Cn(t,e):null}var _A=gA,q0;function g_(t,i,e,n){let r=uw(t,n,i),o=i[He],a=n.parent||i[Jt],s=mw(a,n,i);if(r!=null)if(Array.isArray(e))for(let l=0;l<e.length;l++)H0(o,r,e[l],s,!1);else H0(o,r,e,s,!1);q0!==void 0&&q0(o,n,i,e,r)}function Cl(t,i){if(i!==null){let e=i.type;if(e&3)return Cn(i,t);if(e&4)return Rg(-1,t[i.index]);if(e&8){let n=i.child;if(n!==null)return Cl(t,n);{let r=t[i.index];return Xn(r)?Rg(-1,r):On(r)}}else{if(e&128)return Cl(t,i.next);if(e&32)return m_(i,t)()||On(t[i.index]);{let n=fw(t,i);if(n!==null){if(Array.isArray(n))return n[0];let r=Or(t[en]);return Cl(r,n)}else return Cl(t,i.next)}}}return null}function fw(t,i){if(i!==null){let n=t[en][Jt],r=i.projection;return n.projection[r]}return null}function Rg(t,i){let e=rt+t+1;if(e<i.length){let n=i[e],r=n[re].firstChild;if(r!==null)return Cl(n,r)}return i[Lr]}function __(t,i,e,n,r,o,a){for(;e!=null;){let s=n[bn];if(e.type===128){e=e.next;continue}let l=n[e.index],d=e.type;if(a&&i===0&&(l&&La(On(l),n),e.flags|=2),!$u(e))if(d&8)__(t,i,e.child,n,r,o,!1),Oa(i,t,s,r,l,e,o,n);else if(d&32){let u=m_(e,n),f;for(;f=u();)Oa(i,t,s,r,f,e,o,n);Oa(i,t,s,r,l,e,o,n)}else d&16?hw(t,i,n,e,r,o):Oa(i,t,s,r,l,e,o,n);e=a?e.projectionNext:e.next}}function Xu(t,i,e,n,r,o){__(e,n,t.firstChild,i,r,o,!1)}function vA(t,i,e){let n=i[He],r=uw(t,e,i),o=e.parent||i[Jt],a=mw(o,e,i);hw(n,0,i,e,r,a)}function hw(t,i,e,n,r,o){let a=e[en],l=a[Jt].projection[n.projection];if(Array.isArray(l))for(let d=0;d<l.length;d++){let u=l[d];Oa(i,t,e[bn],r,u,n,o,e)}else{let d=l,u=a[Dt];IC(n)&&(d.flags|=128),__(t,i,d,u,r,o,!0)}}function bA(t,i,e,n,r,o,a){let s=n[Lr],l=On(n);s!==l&&Oa(i,t,e,o,s,r,a);for(let d=rt;d<n.length;d++){let u=n[d];Xu(u[re],u,t,i,o,s)}}function yA(t,i,e,n,r){if(i)r?t.addClass(e,n):t.removeClass(e,n);else{let o=n.indexOf("-")===-1?void 0:Ti.DashCase;r==null?t.removeStyle(e,n,o):(typeof r=="string"&&r.endsWith("!important")&&(r=r.slice(0,-10),o|=Ti.Important),t.setStyle(e,n,r,o))}}function pw(t,i,e,n,r){let o=Mi(),a=n&2;try{Vr(-1),a&&i.length>et&&tw(t,i,et,!1);let s=a?Ee.TemplateUpdateStart:Ee.TemplateCreateStart;Ve(s,r,e),e(n,r)}finally{Vr(o);let s=a?Ee.TemplateUpdateEnd:Ee.TemplateCreateEnd;Ve(s,r,e)}}function v_(t,i,e){EA(t,i,e),(e.flags&64)===64&&MA(t,i,e)}function Ju(t,i,e=Cn){let n=i.localNames;if(n!==null){let r=i.index+1;for(let o=0;o<n.length;o+=2){let a=n[o+1],s=a===-1?e(i,t):t[a];t[r++]=s}}}function CA(t,i,e,n){let o=n.get(PC,FC)||e===ei.ShadowDom||e===ei.ExperimentalIsolatedShadowDom,a=t.selectRootElement(i,o);return wA(a),a}function wA(t){DA(t)}var DA=()=>null;function xA(t){return t==="class"?"className":t==="for"?"htmlFor":t==="formaction"?"formAction":t==="innerHtml"?"innerHTML":t==="readonly"?"readOnly":t==="tabindex"?"tabIndex":t}function gw(t,i,e,n,r,o){let a=i[re];if(em(t,a,i,e,n)){Di(t)&&vw(i,t.index);return}t.type&3&&(e=xA(e)),_w(t,i,e,n,r,o)}function _w(t,i,e,n,r,o){if(t.type&3){let a=Cn(t,i);n=o!=null?o(n,t.value||"",e):n,r.setProperty(a,e,n)}else t.type&12}function vw(t,i){let e=Nn(i,t);e[ce]&16||(e[ce]|=64)}function EA(t,i,e){let n=e.directiveStart,r=e.directiveEnd;Di(e)&&$k(i,e,t.data[n+e.componentOffset]),t.firstCreatePass||Eu(e,i);let o=e.initialInputs;for(let a=n;a<r;a++){let s=t.data[a],l=Dl(i,t,a,e);if(La(l,i),o!==null&&TA(i,a-n,l,s,e,o),xi(s)){let d=Nn(e.index,i);d[ct]=Dl(i,t,a,e)}}}function MA(t,i,e){let n=e.directiveStart,r=e.directiveEnd,o=e.index,a=g0();try{Vr(o);for(let s=n;s<r;s++){let l=t.data[s],d=i[s];ou(s),(l.hostBindings!==null||l.hostVars!==0||l.hostAttrs!==null)&&SA(l,d)}}finally{Vr(-1),ou(a)}}function SA(t,i){t.hostBindings!==null&&t.hostBindings(1,i)}function bw(t,i){let e=t.directiveRegistry,n=null;if(e)for(let r=0;r<e.length;r++){let o=e[r];XC(i,o.selectors,!1)&&(n??=[],xi(o)?n.unshift(o):n.push(o))}return n}function IA(t,i,e,n,r,o){let a=Cn(t,i);yw(i[He],a,o,t.value,e,n,r)}function yw(t,i,e,n,r,o,a){if(o==null)t.removeAttribute(i,r,e);else{let s=a==null?wa(o):a(o,n||"",r);t.setAttribute(i,r,s,e)}}function TA(t,i,e,n,r,o){let a=o[i];if(a!==null)for(let s=0;s<a.length;s+=2){let l=a[s],d=a[s+1];kg(n,e,l,d)}}function Cw(t,i,e,n,r){let o=et+e,a=i[re],s=r(a,i,t,n,e);i[o]=s,Ia(t,!0);let l=t.type===2;return l?(QC(i[He],s,t),(l0()===0||gl(t))&&La(s,i),c0()):La(s,i),cu()&&(!l||!$u(t))&&g_(a,i,s,t),t}function ww(t){let i=t;return Zp()?Kp():(i=i.parent,Ia(i,!1)),i}function kA(t,i){let e=t[bn];if(!e)return;let n;try{n=e.get(Dn,null)}catch{n=null}n?.(i)}function em(t,i,e,n,r){let o=t.inputs?.[n],a=t.hostDirectiveInputs?.[n],s=!1;if(a)for(let l=0;l<a.length;l+=2){let d=a[l],u=a[l+1],f=i.data[d];kg(f,e[d],u,r),s=!0}if(o)for(let l of o){let d=e[l],u=i.data[l];kg(u,d,n,r),s=!0}return s}function AA(t,i){let e=Nn(i,t),n=e[re];RA(n,e);let r=e[Kn];r!==null&&e[Eo]===null&&(e[Eo]=LC(r,e[bn])),Ve(Ee.ComponentStart);try{b_(n,e,e[ct])}finally{Ve(Ee.ComponentEnd,e[ct])}}function RA(t,i){for(let e=i.length;e<t.blueprint.length;e++)i.push(t.blueprint[e])}function b_(t,i,e){su(i);try{let n=t.viewQuery;n!==null&&Cg(1,n,e);let r=t.template;r!==null&&pw(t,i,r,1,e),t.firstCreatePass&&(t.firstCreatePass=!1),i[wi]?.finishViewCreation(t),t.staticContentQueries&&VC(t,i),t.staticViewQueries&&Cg(2,t.viewQuery,e);let o=t.components;o!==null&&OA(i,o)}catch(n){throw t.firstCreatePass&&(t.incompleteFirstPass=!0,t.firstCreatePass=!1),n}finally{i[ce]&=-5,lu()}}function OA(t,i){for(let e=0;e<i.length;e++)AA(t,i[e])}function Ol(t,i,e,n){let r=ee(null);try{let o=i.tView,s=t[ce]&4096?4096:16,l=d_(t,o,e,s,null,i,null,null,n?.injector??null,n?.embeddedViewInjector??null,n?.dehydratedView??null),d=t[i.index];l[Pr]=d;let u=t[wi];return u!==null&&(l[wi]=u.createEmbeddedView(o)),b_(o,l,e),l}finally{ee(r)}}function Va(t,i){return!i||i.firstChild===null||IC(t)}function Ml(t,i,e,n,r=!1){for(;e!==null;){if(e.type===128){e=r?e.projectionNext:e.next;continue}let o=i[e.index];o!==null&&n.push(On(o)),Xn(o)&&Dw(o,n);let a=e.type;if(a&8)Ml(t,i,e.child,n);else if(a&32){let s=m_(e,i),l;for(;l=s();)n.push(l)}else if(a&16){let s=fw(i,e);if(Array.isArray(s))n.push(...s);else{let l=Or(i[en]);Ml(l[re],l,s,n,!0)}}e=r?e.projectionNext:e.next}return n}function Dw(t,i){for(let e=rt;e<t.length;e++){let n=t[e],r=n[re].firstChild;r!==null&&Ml(n[re],n,r,i)}t[Lr]!==t[Kn]&&i.push(t[Lr])}function xw(t){if(t[Io]!==null){for(let i of t[Io])i.impl.addSequence(i);t[Io].length=0}}var Ew=[];function NA(t){return t[yn]??FA(t)}function FA(t){let i=Ew.pop()??Object.create(LA);return i.lView=t,i}function PA(t){t.lView[yn]!==t&&(t.lView=null,Ew.push(t))}var LA=ne(C({},co),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:t=>{Ao(t.lView)},consumerOnSignalRead(){this.lView[yn]=this}});function VA(t){let i=t[yn]??Object.create(BA);return i.lView=t,i}var BA=ne(C({},co),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:t=>{let i=Or(t.lView);for(;i&&!Mw(i[re]);)i=Or(i);i&&jp(i)},consumerOnSignalRead(){this.lView[yn]=this}});function Mw(t){return t.type!==2}function Sw(t){if(t[Rr]===null)return;let i=!0;for(;i;){let e=!1;for(let n of t[Rr])n.dirty&&(e=!0,n.zone===null||Zone.current===n.zone?n.run():n.zone.run(()=>n.run()));i=e&&!!(t[ce]&8192)}}var jA=100;function Iw(t,i=0){let n=t[Ci].rendererFactory,r=!1;r||n.begin?.();try{HA(t,i)}finally{r||n.end?.()}}function HA(t,i){let e=Xp();try{sl(!0),Og(t,i);let n=0;for(;_l(t);){if(n===jA)throw new L(103,!1);n++,Og(t,1)}}finally{sl(e)}}function UA(t,i,e,n){if(ko(i))return;let r=i[ce],o=!1,a=!1;su(i);let s=!0,l=null,d=null;o||(Mw(t)?(d=NA(i),l=xr(d)):ad()===null?(s=!1,d=VA(i),l=xr(d)):i[yn]&&(Er(i[yn]),i[yn]=null));try{Bp(i),f0(t.bindingStartIndex),e!==null&&pw(t,i,e,2,n);let u=(r&3)===3;if(!o)if(u){let v=t.preOrderCheckHooks;v!==null&&gu(i,v,null)}else{let v=t.preOrderHooks;v!==null&&_u(i,v,0,null),sg(i,0)}if(a||zA(i),Sw(i),Tw(i,0),t.contentQueries!==null&&VC(t,i),!o)if(u){let v=t.contentCheckHooks;v!==null&&gu(i,v)}else{let v=t.contentHooks;v!==null&&_u(i,v,1),sg(i,1)}WA(t,i);let f=t.components;f!==null&&Aw(i,f,0);let _=t.viewQuery;if(_!==null&&Cg(2,_,n),!o)if(u){let v=t.viewCheckHooks;v!==null&&gu(i,v)}else{let v=t.viewHooks;v!==null&&_u(i,v,2),sg(i,2)}if(t.firstUpdatePass===!0&&(t.firstUpdatePass=!1),i[Jd]){for(let v of i[Jd])v();i[Jd]=null}o||(xw(i),i[ce]&=-73)}catch(u){throw o||Ao(i),u}finally{d!==null&&(uo(d,l),s&&PA(d)),lu()}}function Tw(t,i){for(let e=kC(t);e!==null;e=AC(e))for(let n=rt;n<e.length;n++){let r=e[n];kw(r,i)}}function zA(t){for(let i=kC(t);i!==null;i=AC(i)){if(!(i[ce]&2))continue;let e=i[To];for(let n=0;n<e.length;n++){let r=e[n];jp(r)}}}function $A(t,i,e){Ve(Ee.ComponentStart);let n=Nn(i,t);try{kw(n,e)}finally{Ve(Ee.ComponentEnd,n[ct])}}function kw(t,i){tu(t)&&Og(t,i)}function Og(t,i){let n=t[re],r=t[ce],o=t[yn],a=!!(i===0&&r&16);if(a||=!!(r&64&&i===0),a||=!!(r&1024),a||=!!(o?.dirty&&ua(o)),a||=!1,o&&(o.dirty=!1),t[ce]&=-9217,a)UA(n,t,n.template,t[ct]);else if(r&8192){let s=ee(null);try{Sw(t),Tw(t,1);let l=n.components;l!==null&&Aw(t,l,1),xw(t)}finally{ee(s)}}}function Aw(t,i,e){for(let n=0;n<i.length;n++)$A(t,i[n],e)}function WA(t,i){let e=t.hostBindingOpCodes;if(e!==null)try{for(let n=0;n<e.length;n++){let r=e[n];if(r<0)Vr(~r);else{let o=r,a=e[++n],s=e[++n];p0(a,o);let l=i[o];Ve(Ee.HostBindingsUpdateStart,l);try{s(2,l)}finally{Ve(Ee.HostBindingsUpdateEnd,l)}}}}finally{Vr(-1)}}function y_(t,i){let e=Xp()?64:1088;for(t[Ci].changeDetectionScheduler?.notify(i);t;){t[ce]|=e;let n=Or(t);if(Sa(t)&&!n)return t;t=n}return null}function Rw(t,i,e,n){return[t,!0,0,i,null,n,null,e,null,null]}function Ow(t,i){let e=rt+i;if(e<t.length)return t[e]}function Nl(t,i,e,n=!0){let r=i[re];if(GA(r,i,t,e),n){let a=Rg(e,t),s=i[He],l=s.parentNode(t[Lr]);l!==null&&dA(r,t[Jt],s,i,l,a)}let o=i[Eo];o!==null&&o.firstChild!==null&&(o.firstChild=null)}function Nw(t,i){let e=Sl(t,i);return e!==void 0&&Ku(e[re],e),e}function Sl(t,i){if(t.length<=rt)return;let e=rt+i,n=t[e];if(n){let r=n[Pr];r!==null&&r!==t&&p_(r,n),i>0&&(t[e-1][Rn]=n[Rn]);let o=ml(t,rt+i);cA(n[re],n);let a=o[wi];a!==null&&a.detachView(o[re]),n[Dt]=null,n[Rn]=null,n[ce]&=-129}return n}function GA(t,i,e,n){let r=rt+n,o=e.length;n>0&&(e[r-1][Rn]=i),n<o-rt?(i[Rn]=e[r],Ep(e,rt+n,i)):(e.push(i),i[Rn]=null),i[Dt]=e;let a=i[Pr];a!==null&&e!==a&&Fw(a,i);let s=i[wi];s!==null&&s.insertView(t),nu(i),i[ce]|=128}function Fw(t,i){let e=t[To],n=i[Dt];if(Ji(n))t[ce]|=2;else{let r=n[Dt][en];i[en]!==r&&(t[ce]|=2)}e===null?t[To]=[i]:e.push(i)}var Br=class{_lView;_cdRefInjectingView;_appRef=null;_attachedToViewContainer=!1;exhaustive;get rootNodes(){let i=this._lView,e=i[re];return Ml(e,i,e.firstChild,[])}constructor(i,e){this._lView=i,this._cdRefInjectingView=e}get context(){return this._lView[ct]}set context(i){this._lView[ct]=i}get destroyed(){return ko(this._lView)}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let i=this._lView[Dt];if(Xn(i)){let e=i[pl],n=e?e.indexOf(this):-1;n>-1&&(Sl(i,n),ml(e,n))}this._attachedToViewContainer=!1}Ku(this._lView[re],this._lView)}onDestroy(i){Hp(this._lView,i)}markForCheck(){y_(this._cdRefInjectingView||this._lView,4)}detach(){this._lView[ce]&=-129}reattach(){nu(this._lView),this._lView[ce]|=128}detectChanges(){this._lView[ce]|=1024,Iw(this._lView)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new L(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null;let i=Sa(this._lView),e=this._lView[Pr];e!==null&&!i&&p_(e,this._lView),dw(this._lView[re],this._lView)}attachToAppRef(i){if(this._attachedToViewContainer)throw new L(902,!1);this._appRef=i;let e=Sa(this._lView),n=this._lView[Pr];n!==null&&!e&&Fw(n,this._lView),nu(this._lView)}};var gt=(()=>{class t{_declarationLView;_declarationTContainer;elementRef;static __NG_ELEMENT_ID__=qA;constructor(e,n,r){this._declarationLView=e,this._declarationTContainer=n,this.elementRef=r}get ssrId(){return this._declarationTContainer.tView?.ssrId||null}createEmbeddedView(e,n){return this.createEmbeddedViewImpl(e,n)}createEmbeddedViewImpl(e,n,r){let o=Ol(this._declarationLView,this._declarationTContainer,e,{embeddedViewInjector:n,dehydratedView:r});return new Br(o)}}return t})();function qA(){return tm(Et(),ie())}function tm(t,i){return t.type&4?new gt(i,t,Ua(t,i)):null}function $a(t,i,e,n,r){let o=t.data[i];if(o===null)o=YA(t,i,e,n,r),h0()&&(o.flags|=32);else if(o.type&64){o.type=e,o.value=n,o.attrs=r;let a=d0();o.injectorIndex=a===null?-1:a.injectorIndex}return Ia(o,!0),o}function YA(t,i,e,n,r){let o=Qp(),a=Zp(),s=a?o:o&&o.parent,l=t.data[i]=ZA(t,s,e,i,n,r);return QA(t,l,o,a),l}function QA(t,i,e,n){t.firstChild===null&&(t.firstChild=i),e!==null&&(n?e.child==null&&i.parent!==null&&(e.child=i):e.next===null&&(e.next=i,i.prev=e))}function ZA(t,i,e,n,r,o){let a=i?i.injectorIndex:-1,s=0;return Gp()&&(s|=128),{type:e,index:n,insertBeforeIndex:null,injectorIndex:a,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,controlDirectiveIndex:-1,customControlIndex:-1,propertyBindings:null,flags:s,providerIndexes:0,value:r,attrs:o,mergedAttrs:null,localNames:null,initialInputs:null,inputs:null,hostDirectiveInputs:null,outputs:null,hostDirectiveOutputs:null,directiveToIndex:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:i,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}function KA(t){let i=t[Op]??[],n=t[Dt][He],r=[];for(let o of i)o.data[NC]!==void 0?r.push(o):XA(o,n);t[Op]=r}function XA(t,i){let e=0,n=t.firstChild;if(n){let r=t.data[OC];for(;e<r;){let o=n.nextSibling;YC(i,n,!1),n=o,e++}}}var JA=()=>null,eR=()=>null;function ku(t,i){return JA(t,i)}function Pw(t,i,e){return eR(t,i,e)}var Lw=class{},nm=class{},Ng=class{resolveComponentFactory(i){throw new L(917,!1)}},Fl=class{static NULL=new Ng},_t=class{},Re=(()=>{class t{destroyNode=null;static __NG_ELEMENT_ID__=()=>tR()}return t})();function tR(){let t=ie(),i=Et(),e=Nn(i.index,t);return(Ji(e)?e:t)[He]}var Vw=(()=>{class t{static \u0275prov=b({token:t,providedIn:"root",factory:()=>null})}return t})();var bu={},Fg=class{injector;parentInjector;constructor(i,e){this.injector=i,this.parentInjector=e}get(i,e,n){let r=this.injector.get(i,bu,n);return r!==bu||e===bu?r:this.parentInjector.get(i,e,n)}};function Au(t,i,e){let n=e?t.styles:null,r=e?t.classes:null,o=0;if(i!==null)for(let a=0;a<i.length;a++){let s=i[a];if(typeof s=="number")o=s;else if(o==1)r=qd(r,s);else if(o==2){let l=s,d=i[++a];n=qd(n,l+": "+d+";")}}e?t.styles=n:t.stylesWithoutHost=n,e?t.classes=r:t.classesWithoutHost=r}function we(t,i=0){let e=ie();if(e===null)return W(t,i);let n=Et();return xC(n,e,Bt(t),i)}function Pl(){let t="invalid";throw new Error(t)}function Bw(t,i,e,n,r){let o=n===null?null:{"":-1},a=r(t,e);if(a!==null){let s=a,l=null,d=null;for(let u of a)if(u.resolveHostDirectives!==null){[s,l,d]=u.resolveHostDirectives(a);break}rR(t,i,e,s,o,l,d)}o!==null&&n!==null&&nR(e,n,o)}function nR(t,i,e){let n=t.localNames=[];for(let r=0;r<i.length;r+=2){let o=e[i[r+1]];if(o==null)throw new L(-301,!1);n.push(i[r],o)}}function iR(t,i,e){i.componentOffset=e,(t.components??=[]).push(i.index)}function rR(t,i,e,n,r,o,a){let s=n.length,l=null;for(let _=0;_<s;_++){let v=n[_];l===null&&xi(v)&&(l=v,iR(t,e,_)),vg(Eu(e,i),t,v.type)}dR(e,t.data.length,s),l?.viewProvidersResolver&&l.viewProvidersResolver(l);for(let _=0;_<s;_++){let v=n[_];v.providersResolver&&v.providersResolver(v)}let d=!1,u=!1,f=ew(t,i,s,null);s>0&&(e.directiveToIndex=new Map);for(let _=0;_<s;_++){let v=n[_];if(e.mergedAttrs=Pa(e.mergedAttrs,v.hostAttrs),aR(t,e,i,f,v),cR(f,v,r),a!==null&&a.has(v)){let[P,U]=a.get(v);e.directiveToIndex.set(v.type,[f,P+e.directiveStart,U+e.directiveStart])}else(o===null||!o.has(v))&&e.directiveToIndex.set(v.type,f);v.contentQueries!==null&&(e.flags|=4),(v.hostBindings!==null||v.hostAttrs!==null||v.hostVars!==0)&&(e.flags|=64);let w=v.type.prototype;!d&&(w.ngOnChanges||w.ngOnInit||w.ngDoCheck)&&((t.preOrderHooks??=[]).push(e.index),d=!0),!u&&(w.ngOnChanges||w.ngDoCheck)&&((t.preOrderCheckHooks??=[]).push(e.index),u=!0),f++}oR(t,e,o)}function oR(t,i,e){for(let n=i.directiveStart;n<i.directiveEnd;n++){let r=t.data[n];if(e===null||!e.has(r))Y0(0,i,r,n),Y0(1,i,r,n),Z0(i,n,!1);else{let o=e.get(r);Q0(0,i,o,n),Q0(1,i,o,n),Z0(i,n,!0)}}}function Y0(t,i,e,n){let r=t===0?e.inputs:e.outputs;for(let o in r)if(r.hasOwnProperty(o)){let a;t===0?a=i.inputs??={}:a=i.outputs??={},a[o]??=[],a[o].push(n),jw(i,o)}}function Q0(t,i,e,n){let r=t===0?e.inputs:e.outputs;for(let o in r)if(r.hasOwnProperty(o)){let a=r[o],s;t===0?s=i.hostDirectiveInputs??={}:s=i.hostDirectiveOutputs??={},s[a]??=[],s[a].push(n,o),jw(i,a)}}function jw(t,i){i==="class"?t.flags|=8:i==="style"&&(t.flags|=16)}function Z0(t,i,e){let{attrs:n,inputs:r,hostDirectiveInputs:o}=t;if(n===null||!e&&r===null||e&&o===null||l_(t)){t.initialInputs??=[],t.initialInputs.push(null);return}let a=null,s=0;for(;s<n.length;){let l=n[s];if(l===0){s+=4;continue}else if(l===5){s+=2;continue}else if(typeof l=="number")break;if(!e&&r.hasOwnProperty(l)){let d=r[l];for(let u of d)if(u===i){a??=[],a.push(l,n[s+1]);break}}else if(e&&o.hasOwnProperty(l)){let d=o[l];for(let u=0;u<d.length;u+=2)if(d[u]===i){a??=[],a.push(d[u+1],n[s+1]);break}}s+=2}t.initialInputs??=[],t.initialInputs.push(a)}function aR(t,i,e,n,r){t.data[n]=r;let o=r.factory||(r.factory=Ar(r.type,!0)),a=new No(o,xi(r),we,null);t.blueprint[n]=a,e[n]=a,sR(t,i,n,ew(t,e,r.hostVars,Ut),r)}function sR(t,i,e,n,r){let o=r.hostBindings;if(o){let a=t.hostBindingOpCodes;a===null&&(a=t.hostBindingOpCodes=[]);let s=~i.index;lR(a)!=s&&a.push(s),a.push(e,n,o)}}function lR(t){let i=t.length;for(;i>0;){let e=t[--i];if(typeof e=="number"&&e<0)return e}return 0}function cR(t,i,e){if(e){if(i.exportAs)for(let n=0;n<i.exportAs.length;n++)e[i.exportAs[n]]=t;xi(i)&&(e[""]=t)}}function dR(t,i,e){t.flags|=1,t.directiveStart=i,t.directiveEnd=i+e,t.providerIndexes=i}function Hw(t,i,e,n,r,o,a,s){let l=i[re],d=l.consts,u=wn(d,a),f=$a(l,t,e,n,u);return o&&Bw(l,i,f,wn(d,s),r),f.mergedAttrs=Pa(f.mergedAttrs,f.attrs),f.attrs!==null&&Au(f,f.attrs,!1),f.mergedAttrs!==null&&Au(f,f.mergedAttrs,!0),l.queries!==null&&l.queries.elementStart(l,f),f}function Uw(t,i){pC(t,i),Np(i)&&t.queries.elementEnd(i)}function uR(t,i,e,n,r,o){let a=i.consts,s=wn(a,r),l=$a(i,t,e,n,s);if(l.mergedAttrs=Pa(l.mergedAttrs,l.attrs),o!=null){let d=wn(a,o);l.localNames=[];for(let u=0;u<d.length;u+=2)l.localNames.push(d[u],-1)}return l.attrs!==null&&Au(l,l.attrs,!1),l.mergedAttrs!==null&&Au(l,l.mergedAttrs,!0),i.queries!==null&&i.queries.elementStart(i,l),l}function C_(t,i,e){return t[i]=e}function zw(t,i){return t[i]}function an(t,i,e){if(e===Ut)return!1;let n=t[i];return Object.is(n,e)?!1:(t[i]=e,!0)}function mR(t,i,e,n){let r=an(t,i,e);return an(t,i+1,n)||r}function yu(t,i,e){return function n(r){let o=Di(t)?Nn(t.index,i):i;y_(o,5);let a=i[ct],s=K0(i,a,e,r),l=n.__ngNextListenerFn__;for(;l;)s=K0(i,a,l,r)&&s,l=l.__ngNextListenerFn__;return s}}function K0(t,i,e,n){let r=ee(null);try{return Ve(Ee.OutputStart,i,e),e(n)!==!1}catch(o){return kA(t,o),!1}finally{Ve(Ee.OutputEnd,i,e),ee(r)}}function $w(t,i,e,n,r,o,a,s){let l=gl(t),d=!1,u=null;if(!n&&l&&(u=hR(i,e,o,t.index)),u!==null){let f=u.__ngLastListenerFn__||u;f.__ngNextListenerFn__=a,u.__ngLastListenerFn__=a,d=!0}else{let f=Cn(t,e),_=n?n(f):f;sk(e,_,o,s);let v=r.listen(_,o,s);if(!fR(o)){let w=n?P=>n(On(P[t.index])):t.index;Ww(w,i,e,o,s,v,!1)}}return d}function fR(t){return t.startsWith("animation")||t.startsWith("transition")}function hR(t,i,e,n){let r=t.cleanup;if(r!=null)for(let o=0;o<r.length-1;o+=2){let a=r[o];if(a===e&&r[o+1]===n){let s=i[Ea],l=r[o+2];return s&&s.length>l?s[l]:null}typeof a=="string"&&(o+=2)}return null}function Ww(t,i,e,n,r,o,a){let s=i.firstCreatePass?zp(i):null,l=Up(e),d=l.length;l.push(r,o),s&&s.push(n,t,d,(d+1)*(a?-1:1))}function X0(t,i,e,n,r,o){let a=i[e],s=i[re],d=s.data[e].outputs[n],f=a[d].subscribe(o);Ww(t.index,s,i,r,o,f,!0)}var Pg=Symbol("BINDING");function Gw(t){return t.debugInfo?.className||t.type.name||null}var Ru=class extends Fl{ngModule;constructor(i){super(),this.ngModule=i}resolveComponentFactory(i){let e=bi(i);return new jr(e,this.ngModule)}};function pR(t){return Object.keys(t).map(i=>{let[e,n,r]=t[i],o={propName:e,templateName:i,isSignal:(n&qu.SignalBased)!==0};return r&&(o.transform=r),o})}function gR(t){return Object.keys(t).map(i=>({propName:t[i],templateName:i}))}function _R(t,i,e){let n=i instanceof Le?i:i?.injector;return n&&t.getStandaloneInjector!==null&&(n=t.getStandaloneInjector(n)||n),n?new Fg(e,n):e}function vR(t){let i=t.get(_t,null);if(i===null)throw new L(407,!1);let e=t.get(Vw,null),n=t.get(vi,null),r=t.get(ni,null,{optional:!0});return{rendererFactory:i,sanitizer:e,changeDetectionScheduler:n,ngReflect:!1,tracingService:r}}function bR(t,i){let e=qw(t);return GC(i,e,e==="svg"?Fp:e==="math"?n0:null)}function qw(t){return(t.selectors[0][0]||"div").toLowerCase()}var jr=class extends nm{componentDef;ngModule;selector;componentType;ngContentSelectors;isBoundToModule;cachedInputs=null;cachedOutputs=null;get inputs(){return this.cachedInputs??=pR(this.componentDef.inputs),this.cachedInputs}get outputs(){return this.cachedOutputs??=gR(this.componentDef.outputs),this.cachedOutputs}constructor(i,e){super(),this.componentDef=i,this.ngModule=e,this.componentType=i.type,this.selector=jk(i.selectors),this.ngContentSelectors=i.ngContentSelectors??[],this.isBoundToModule=!!e}create(i,e,n,r,o,a){Ve(Ee.DynamicComponentStart);let s=ee(null);try{let l=this.componentDef,d=_R(l,r||this.ngModule,i),u=vR(d),f=u.tracingService;return f&&f.componentCreate?f.componentCreate(Gw(l),()=>this.createComponentRef(u,d,e,n,o,a)):this.createComponentRef(u,d,e,n,o,a)}finally{ee(s)}}createComponentRef(i,e,n,r,o,a){let s=this.componentDef,l=yR(r,s,a,o),d=i.rendererFactory.createRenderer(null,s),u=r?CA(d,r,s.encapsulation,e):bR(s,d),f=a?.some(J0)||o?.some(w=>typeof w!="function"&&w.bindings.some(J0)),_=d_(null,l,null,512|JC(s),null,null,i,d,e,null,LC(u,e,!0));_[et]=u,su(_);let v=null;try{let w=Hw(et,_,2,"#host",()=>l.directiveRegistry,!0,0);QC(d,u,w),La(u,_),v_(l,_,w),BC(l,w,_),Uw(l,w),n!==void 0&&wR(w,this.ngContentSelectors,n),v=Nn(w.index,_),_[ct]=v[ct],b_(l,_,null)}catch(w){throw v!==null&&yg(v),yg(_),w}finally{Ve(Ee.DynamicComponentEnd),lu()}return new Ou(this.componentType,_,!!f)}};function yR(t,i,e,n){let r=t?["ng-version","21.2.7"]:Hk(i.selectors[0]),o=null,a=null,s=0;if(e)for(let u of e)s+=u[Pg].requiredVars,u.create&&(u.targetIdx=0,(o??=[]).push(u)),u.update&&(u.targetIdx=0,(a??=[]).push(u));if(n)for(let u=0;u<n.length;u++){let f=n[u];if(typeof f!="function")for(let _ of f.bindings){s+=_[Pg].requiredVars;let v=u+1;_.create&&(_.targetIdx=v,(o??=[]).push(_)),_.update&&(_.targetIdx=v,(a??=[]).push(_))}}let l=[i];if(n)for(let u of n){let f=typeof u=="function"?u:u.type,_=wp(f);l.push(_)}return c_(0,null,CR(o,a),1,s,l,null,null,null,[r],null)}function CR(t,i){return!t&&!i?null:e=>{if(e&1&&t)for(let n of t)n.create();if(e&2&&i)for(let n of i)n.update()}}function J0(t){let i=t[Pg].kind;return i==="input"||i==="twoWay"}var Ou=class extends Lw{_rootLView;_hasInputBindings;instance;hostView;changeDetectorRef;componentType;location;previousInputValues=null;_tNode;constructor(i,e,n){super(),this._rootLView=e,this._hasInputBindings=n,this._tNode=eu(e[re],et),this.location=Ua(this._tNode,e),this.instance=Nn(this._tNode.index,e)[ct],this.hostView=this.changeDetectorRef=new Br(e,void 0),this.componentType=i}setInput(i,e){this._hasInputBindings;let n=this._tNode;if(this.previousInputValues??=new Map,this.previousInputValues.has(i)&&Object.is(this.previousInputValues.get(i),e))return;let r=this._rootLView,o=em(n,r[re],r,i,e);this.previousInputValues.set(i,e);let a=Nn(n.index,r);y_(a,1)}get injector(){return new Oo(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(i){this.hostView.onDestroy(i)}};function wR(t,i,e){let n=t.projection=[];for(let r=0;r<i.length;r++){let o=e[r];n.push(o!=null&&o.length?Array.from(o):null)}}var St=(()=>{class t{static __NG_ELEMENT_ID__=DR}return t})();function DR(){let t=Et();return Yw(t,ie())}var Lg=class t extends St{_lContainer;_hostTNode;_hostLView;constructor(i,e,n){super(),this._lContainer=i,this._hostTNode=e,this._hostLView=n}get element(){return Ua(this._hostTNode,this._hostLView)}get injector(){return new Oo(this._hostTNode,this._hostLView)}get parentInjector(){let i=Jg(this._hostTNode,this._hostLView);if(vC(i)){let e=Du(i,this._hostLView),n=wu(i),r=e[re].data[n+8];return new Oo(r,e)}else return new Oo(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(i){let e=eC(this._lContainer);return e!==null&&e[i]||null}get length(){return this._lContainer.length-rt}createEmbeddedView(i,e,n){let r,o;typeof n=="number"?r=n:n!=null&&(r=n.index,o=n.injector);let a=ku(this._lContainer,i.ssrId),s=i.createEmbeddedViewImpl(e||{},o,a);return this.insertImpl(s,r,Va(this._hostTNode,a)),s}createComponent(i,e,n,r,o,a,s){let l=i&&!NT(i),d;if(l)d=e;else{let U=e||{};d=U.index,n=U.injector,r=U.projectableNodes,o=U.environmentInjector||U.ngModuleRef,a=U.directives,s=U.bindings}let u=l?i:new jr(bi(i)),f=n||this.parentInjector;if(!o&&u.ngModule==null){let Q=(l?f:this.parentInjector).get(Le,null);Q&&(o=Q)}let _=bi(u.componentType??{}),v=ku(this._lContainer,_?.id??null),w=v?.firstChild??null,P=u.create(f,r,w,o,a,s);return this.insertImpl(P.hostView,d,Va(this._hostTNode,v)),P}insert(i,e){return this.insertImpl(i,e,!0)}insertImpl(i,e,n){let r=i._lView;if(r0(r)){let s=this.indexOf(i);if(s!==-1)this.detach(s);else{let l=r[Dt],d=new t(l,l[Jt],l[Dt]);d.detach(d.indexOf(i))}}let o=this._adjustIndex(e),a=this._lContainer;return Nl(a,r,o,n),i.attachToViewContainerRef(),Ep(dg(a),o,i),i}move(i,e){return this.insert(i,e)}indexOf(i){let e=eC(this._lContainer);return e!==null?e.indexOf(i):-1}remove(i){let e=this._adjustIndex(i,-1),n=Sl(this._lContainer,e);n&&(ml(dg(this._lContainer),e),Ku(n[re],n))}detach(i){let e=this._adjustIndex(i,-1),n=Sl(this._lContainer,e);return n&&ml(dg(this._lContainer),e)!=null?new Br(n):null}_adjustIndex(i,e=0){return i??this.length+e}};function eC(t){return t[pl]}function dg(t){return t[pl]||(t[pl]=[])}function Yw(t,i){let e,n=i[t.index];return Xn(n)?e=n:(e=Rw(n,i,null,t),i[t.index]=e,u_(i,e)),ER(e,i,t,n),new Lg(e,t,i)}function xR(t,i){let e=t[He],n=e.createComment(""),r=Cn(i,t),o=e.parentNode(r);return Mu(e,o,n,e.nextSibling(r),!1),n}var ER=IR,MR=()=>!1;function SR(t,i,e){return MR(t,i,e)}function IR(t,i,e,n){if(t[Lr])return;let r;e.type&8?r=On(n):r=xR(i,e),t[Lr]=r}var Vg=class t{queryList;matches=null;constructor(i){this.queryList=i}clone(){return new t(this.queryList)}setDirty(){this.queryList.setDirty()}},Bg=class t{queries;constructor(i=[]){this.queries=i}createEmbeddedView(i){let e=i.queries;if(e!==null){let n=i.contentQueries!==null?i.contentQueries[0]:e.length,r=[];for(let o=0;o<n;o++){let a=e.getByIndex(o),s=this.queries[a.indexInDeclarationView];r.push(s.clone())}return new t(r)}return null}insertView(i){this.dirtyQueriesWithMatches(i)}detachView(i){this.dirtyQueriesWithMatches(i)}finishViewCreation(i){this.dirtyQueriesWithMatches(i)}dirtyQueriesWithMatches(i){for(let e=0;e<this.queries.length;e++)D_(i,e).matches!==null&&this.queries[e].setDirty()}},Nu=class{flags;read;predicate;constructor(i,e,n=null){this.flags=e,this.read=n,typeof i=="string"?this.predicate=OR(i):this.predicate=i}},jg=class t{queries;constructor(i=[]){this.queries=i}elementStart(i,e){for(let n=0;n<this.queries.length;n++)this.queries[n].elementStart(i,e)}elementEnd(i){for(let e=0;e<this.queries.length;e++)this.queries[e].elementEnd(i)}embeddedTView(i){let e=null;for(let n=0;n<this.length;n++){let r=e!==null?e.length:0,o=this.getByIndex(n).embeddedTView(i,r);o&&(o.indexInDeclarationView=n,e!==null?e.push(o):e=[o])}return e!==null?new t(e):null}template(i,e){for(let n=0;n<this.queries.length;n++)this.queries[n].template(i,e)}getByIndex(i){return this.queries[i]}get length(){return this.queries.length}track(i){this.queries.push(i)}},Hg=class t{metadata;matches=null;indexInDeclarationView=-1;crossesNgTemplate=!1;_declarationNodeIndex;_appliesToNextNode=!0;constructor(i,e=-1){this.metadata=i,this._declarationNodeIndex=e}elementStart(i,e){this.isApplyingToNode(e)&&this.matchTNode(i,e)}elementEnd(i){this._declarationNodeIndex===i.index&&(this._appliesToNextNode=!1)}template(i,e){this.elementStart(i,e)}embeddedTView(i,e){return this.isApplyingToNode(i)?(this.crossesNgTemplate=!0,this.addMatch(-i.index,e),new t(this.metadata)):null}isApplyingToNode(i){if(this._appliesToNextNode&&(this.metadata.flags&1)!==1){let e=this._declarationNodeIndex,n=i.parent;for(;n!==null&&n.type&8&&n.index!==e;)n=n.parent;return e===(n!==null?n.index:-1)}return this._appliesToNextNode}matchTNode(i,e){let n=this.metadata.predicate;if(Array.isArray(n))for(let r=0;r<n.length;r++){let o=n[r];this.matchTNodeWithReadOption(i,e,TR(e,o)),this.matchTNodeWithReadOption(i,e,vu(e,i,o,!1,!1))}else n===gt?e.type&4&&this.matchTNodeWithReadOption(i,e,-1):this.matchTNodeWithReadOption(i,e,vu(e,i,n,!1,!1))}matchTNodeWithReadOption(i,e,n){if(n!==null){let r=this.metadata.read;if(r!==null)if(r===B||r===St||r===gt&&e.type&4)this.addMatch(e.index,-2);else{let o=vu(e,i,r,!1,!1);o!==null&&this.addMatch(e.index,o)}else this.addMatch(e.index,n)}}addMatch(i,e){this.matches===null?this.matches=[i,e]:this.matches.push(i,e)}};function TR(t,i){let e=t.localNames;if(e!==null){for(let n=0;n<e.length;n+=2)if(e[n]===i)return e[n+1]}return null}function kR(t,i){return t.type&11?Ua(t,i):t.type&4?tm(t,i):null}function AR(t,i,e,n){return e===-1?kR(i,t):e===-2?RR(t,i,n):Dl(t,t[re],e,i)}function RR(t,i,e){if(e===B)return Ua(i,t);if(e===gt)return tm(i,t);if(e===St)return Yw(i,t)}function Qw(t,i,e,n){let r=i[wi].queries[n];if(r.matches===null){let o=t.data,a=e.matches,s=[];for(let l=0;a!==null&&l<a.length;l+=2){let d=a[l];if(d<0)s.push(null);else{let u=o[d];s.push(AR(i,u,a[l+1],e.metadata.read))}}r.matches=s}return r.matches}function Ug(t,i,e,n){let r=t.queries.getByIndex(e),o=r.matches;if(o!==null){let a=Qw(t,i,r,e);for(let s=0;s<o.length;s+=2){let l=o[s];if(l>0)n.push(a[s/2]);else{let d=o[s+1],u=i[-l];for(let f=rt;f<u.length;f++){let _=u[f];_[Pr]===_[Dt]&&Ug(_[re],_,d,n)}if(u[To]!==null){let f=u[To];for(let _=0;_<f.length;_++){let v=f[_];Ug(v[re],v,d,n)}}}}}return n}function w_(t,i){return t[wi].queries[i].queryList}function Zw(t,i,e){let n=new tr((e&4)===4);return s0(t,i,n,n.destroy),(i[wi]??=new Bg).queries.push(new Vg(n))-1}function Kw(t,i,e){let n=We();return n.firstCreatePass&&(Jw(n,new Nu(t,i,e),-1),(i&2)===2&&(n.staticViewQueries=!0)),Zw(n,ie(),i)}function Xw(t,i,e,n){let r=We();if(r.firstCreatePass){let o=Et();Jw(r,new Nu(i,e,n),o.index),NR(r,t),(e&2)===2&&(r.staticContentQueries=!0)}return Zw(r,ie(),e)}function OR(t){return t.split(",").map(i=>i.trim())}function Jw(t,i,e){t.queries===null&&(t.queries=new jg),t.queries.track(new Hg(i,e))}function NR(t,i){let e=t.contentQueries||(t.contentQueries=[]),n=e.length?e[e.length-1]:-1;i!==n&&e.push(t.queries.length-1,i)}function D_(t,i){return t.queries.getByIndex(i)}function eD(t,i){let e=t[re],n=D_(e,i);return n.crossesNgTemplate?Ug(e,t,i,[]):Qw(e,t,n,i)}function tD(t,i,e){let n,r=qs(()=>{n._dirtyCounter();let o=FR(n,t);if(i&&o===void 0)throw new L(-951,!1);return o});return n=r[ht],n._dirtyCounter=x(0),n._flatValue=void 0,r}function x_(t){return tD(!0,!1,t)}function E_(t){return tD(!0,!0,t)}function nD(t,i){let e=t[ht];e._lView=ie(),e._queryIndex=i,e._queryList=w_(e._lView,i),e._queryList.onDirty(()=>e._dirtyCounter.update(n=>n+1))}function FR(t,i){let e=t._lView,n=t._queryIndex;if(e===void 0||n===void 0||e[ce]&4)return i?void 0:Gt;let r=w_(e,n),o=eD(e,n);return r.reset(o,SC),i?r.first:r._changesDetected||t._flatValue===void 0?t._flatValue=r.toArray():t._flatValue}var ki=class{},im=class{};var Fu=class extends ki{ngModuleType;_parent;_bootstrapComponents=[];_r3Injector;instance;destroyCbs=[];componentFactoryResolver=new Ru(this);constructor(i,e,n,r=!0){super(),this.ngModuleType=i,this._parent=e;let o=Cp(i);this._bootstrapComponents=ZC(o.bootstrap),this._r3Injector=tg(i,e,[{provide:ki,useValue:this},{provide:Fl,useValue:this.componentFactoryResolver},...n],dl(i),new Set(["environment"])),r&&this.resolveInjectorInitializers()}resolveInjectorInitializers(){this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(this.ngModuleType)}get injector(){return this._r3Injector}destroy(){let i=this._r3Injector;!i.destroyed&&i.destroy(),this.destroyCbs.forEach(e=>e()),this.destroyCbs=null}onDestroy(i){this.destroyCbs.push(i)}},Pu=class extends im{moduleType;constructor(i){super(),this.moduleType=i}create(i){return new Fu(this.moduleType,i,[])}};var Il=class extends ki{injector;componentFactoryResolver=new Ru(this);instance=null;constructor(i){super();let e=new Do([...i.providers,{provide:ki,useValue:this},{provide:Fl,useValue:this.componentFactoryResolver}],i.parent||xa(),i.debugName,new Set(["environment"]));this.injector=e,i.runEnvironmentInitializers&&e.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(i){this.injector.onDestroy(i)}};function Wa(t,i,e=null){return new Il({providers:t,parent:i,debugName:e,runEnvironmentInitializers:!0}).injector}var PR=(()=>{class t{_injector;cachedInjectors=new Map;constructor(e){this._injector=e}getOrCreateStandaloneInjector(e){if(!e.standalone)return null;if(!this.cachedInjectors.has(e)){let n=Ip(!1,e.type),r=n.length>0?Wa([n],this._injector,""):null;this.cachedInjectors.set(e,r)}return this.cachedInjectors.get(e)}ngOnDestroy(){try{for(let e of this.cachedInjectors.values())e!==null&&e.destroy()}finally{this.cachedInjectors.clear()}}static \u0275prov=b({token:t,providedIn:"environment",factory:()=>new t(W(Le))})}return t})();function M(t){return kl(()=>{let i=iD(t),e=ne(C({},i),{decls:t.decls,vars:t.vars,template:t.template,consts:t.consts||null,ngContentSelectors:t.ngContentSelectors,onPush:t.changeDetection===e_.OnPush,directiveDefs:null,pipeDefs:null,dependencies:i.standalone&&t.dependencies||null,getStandaloneInjector:i.standalone?r=>r.get(PR).getOrCreateStandaloneInjector(e):null,getExternalStyles:null,signals:t.signals??!1,data:t.data||{},encapsulation:t.encapsulation||ei.Emulated,styles:t.styles||Gt,_:null,schemas:t.schemas||null,tView:null,id:""});i.standalone&&ii("NgStandalone"),rD(e);let n=t.dependencies;return e.directiveDefs=tC(n,LR),e.pipeDefs=tC(n,Hy),e.id=jR(e),e})}function LR(t){return bi(t)||wp(t)}function $(t){return kl(()=>({type:t.type,bootstrap:t.bootstrap||Gt,declarations:t.declarations||Gt,imports:t.imports||Gt,exports:t.exports||Gt,transitiveCompileScopes:null,schemas:t.schemas||null,id:t.id||null}))}function VR(t,i){if(t==null)return Nr;let e={};for(let n in t)if(t.hasOwnProperty(n)){let r=t[n],o,a,s,l;Array.isArray(r)?(s=r[0],o=r[1],a=r[2]??o,l=r[3]||null):(o=r,a=r,s=qu.None,l=null),e[o]=[n,s,l],i[o]=a}return e}function BR(t){if(t==null)return Nr;let i={};for(let e in t)t.hasOwnProperty(e)&&(i[t[e]]=e);return i}function N(t){return kl(()=>{let i=iD(t);return rD(i),i})}function M_(t){return{type:t.type,name:t.name,factory:null,pure:t.pure!==!1,standalone:t.standalone??!0,onDestroy:t.type.prototype.ngOnDestroy||null}}function iD(t){let i={};return{type:t.type,providersResolver:null,viewProvidersResolver:null,factory:null,hostBindings:t.hostBindings||null,hostVars:t.hostVars||0,hostAttrs:t.hostAttrs||null,contentQueries:t.contentQueries||null,declaredInputs:i,inputConfig:t.inputs||Nr,exportAs:t.exportAs||null,standalone:t.standalone??!0,signals:t.signals===!0,selectors:t.selectors||Gt,viewQuery:t.viewQuery||null,features:t.features||null,setInput:null,resolveHostDirectives:null,hostDirectives:null,controlDef:null,inputs:VR(t.inputs,i),outputs:BR(t.outputs),debugInfo:null}}function rD(t){t.features?.forEach(i=>i(t))}function tC(t,i){return t?()=>{let e=typeof t=="function"?t():t,n=[];for(let r of e){let o=i(r);o!==null&&n.push(o)}return n}:null}function jR(t){let i=0,e=typeof t.consts=="function"?"":t.consts,n=[t.selectors,t.ngContentSelectors,t.hostVars,t.hostAttrs,e,t.vars,t.decls,t.encapsulation,t.standalone,t.signals,t.exportAs,JSON.stringify(t.inputs),JSON.stringify(t.outputs),Object.getOwnPropertyNames(t.type.prototype),!!t.contentQueries,!!t.viewQuery];for(let o of n.join("|"))i=Math.imul(31,i)+o.charCodeAt(0)<<0;return i+=2147483648,"c"+i}function HR(t){return Object.getPrototypeOf(t.prototype).constructor}function ge(t){let i=HR(t.type),e=!0,n=[t];for(;i;){let r;if(xi(t))r=i.\u0275cmp||i.\u0275dir;else{if(i.\u0275cmp)throw new L(903,!1);r=i.\u0275dir}if(r){if(e){n.push(r);let a=t;a.inputs=ug(t.inputs),a.declaredInputs=ug(t.declaredInputs),a.outputs=ug(t.outputs);let s=r.hostBindings;s&&GR(t,s);let l=r.viewQuery,d=r.contentQueries;if(l&&$R(t,l),d&&WR(t,d),UR(t,r),jy(t.outputs,r.outputs),xi(r)&&r.data.animation){let u=t.data;u.animation=(u.animation||[]).concat(r.data.animation)}}let o=r.features;if(o)for(let a=0;a<o.length;a++){let s=o[a];s&&s.ngInherit&&s(t),s===ge&&(e=!1)}}i=Object.getPrototypeOf(i)}zR(n)}function UR(t,i){for(let e in i.inputs){if(!i.inputs.hasOwnProperty(e)||t.inputs.hasOwnProperty(e))continue;let n=i.inputs[e];n!==void 0&&(t.inputs[e]=n,t.declaredInputs[e]=i.declaredInputs[e])}}function zR(t){let i=0,e=null;for(let n=t.length-1;n>=0;n--){let r=t[n];r.hostVars=i+=r.hostVars,r.hostAttrs=Pa(r.hostAttrs,e=Pa(e,r.hostAttrs))}}function ug(t){return t===Nr?{}:t===Gt?[]:t}function $R(t,i){let e=t.viewQuery;e?t.viewQuery=(n,r)=>{i(n,r),e(n,r)}:t.viewQuery=i}function WR(t,i){let e=t.contentQueries;e?t.contentQueries=(n,r,o)=>{i(n,r,o),e(n,r,o)}:t.contentQueries=i}function GR(t,i){let e=t.hostBindings;e?t.hostBindings=(n,r)=>{i(n,r),e(n,r)}:t.hostBindings=i}function oD(t,i,e,n,r,o,a,s){if(e.firstCreatePass){t.mergedAttrs=Pa(t.mergedAttrs,t.attrs);let u=t.tView=c_(2,t,r,o,a,e.directiveRegistry,e.pipeRegistry,null,e.schemas,e.consts,null);e.queries!==null&&(e.queries.template(e,t),u.queries=e.queries.embeddedTView(t))}s&&(t.flags|=s),Ia(t,!1);let l=YR(e,i,t,n);cu()&&g_(e,i,l,t),La(l,i);let d=Rw(l,i,l,t);i[n+et]=d,u_(i,d),SR(d,t,i)}function qR(t,i,e,n,r,o,a,s,l,d,u){let f=e+et,_;return i.firstCreatePass?(_=$a(i,f,4,a||null,s||null),Wp()&&Bw(i,t,_,wn(i.consts,d),bw),pC(i,_)):_=i.data[f],oD(_,t,i,e,n,r,o,l),gl(_)&&v_(i,t,_),d!=null&&Ju(t,_,u),_}function Ba(t,i,e,n,r,o,a,s,l,d,u){let f=e+et,_;if(i.firstCreatePass){if(_=$a(i,f,4,a||null,s||null),d!=null){let v=wn(i.consts,d);_.localNames=[];for(let w=0;w<v.length;w+=2)_.localNames.push(v[w],-1)}}else _=i.data[f];return oD(_,t,i,e,n,r,o,l),d!=null&&Ju(t,_,u),_}function dt(t,i,e,n,r,o,a,s){let l=ie(),d=We(),u=wn(d.consts,o);return qR(l,d,t,i,e,n,r,u,void 0,a,s),dt}function Ll(t,i,e,n,r,o,a,s){let l=ie(),d=We(),u=wn(d.consts,o);return Ba(l,d,t,i,e,n,r,u,void 0,a,s),Ll}var YR=QR;function QR(t,i,e,n){return du(!0),i[He].createComment("")}var rm=(()=>{class t{log(e){console.log(e)}warn(e){console.warn(e)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"platform"})}return t})();function Ai(t){return typeof t=="function"&&t[ht]!==void 0}function S_(t){return Ai(t)&&typeof t.set=="function"}var I_=new y("");function rr(t){return!!t&&typeof t.then=="function"}function om(t){return!!t&&typeof t.subscribe=="function"}var T_=new y("");function am(t){return yi([{provide:T_,multi:!0,useValue:t}])}var k_=(()=>{class t{resolve;reject;initialized=!1;done=!1;donePromise=new Promise((e,n)=>{this.resolve=e,this.reject=n});appInits=c(T_,{optional:!0})??[];injector=c(G);constructor(){}runInitializers(){if(this.initialized)return;let e=[];for(let r of this.appInits){let o=xt(this.injector,r);if(rr(o))e.push(o);else if(om(o)){let a=new Promise((s,l)=>{o.subscribe({complete:s,error:l})});e.push(a)}}let n=()=>{this.done=!0,this.resolve()};Promise.all(e).then(()=>{n()}).catch(r=>{this.reject(r)}),e.length===0&&n(),this.initialized=!0}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Vl=new y("");function aD(){Vh(()=>{let t="";throw new L(600,t)})}function sD(t){return t.isBoundToModule}var ZR=10;var xn=(()=>{class t{_runningTick=!1;_destroyed=!1;_destroyListeners=[];_views=[];internalErrorHandler=c(Dn);afterRenderManager=c(Qu);zonelessEnabled=c(bl);rootEffectScheduler=c(mu);dirtyFlags=0;tracingSnapshot=null;allTestViews=new Set;autoDetectTestViews=new Set;includeAllTestViews=!1;afterTick=new S;get allViews(){return[...(this.includeAllTestViews?this.allTestViews:this.autoDetectTestViews).keys(),...this._views]}get destroyed(){return this._destroyed}componentTypes=[];components=[];internalPendingTask=c(er);get isStable(){return this.internalPendingTask.hasPendingTasksObservable.pipe(le(e=>!e))}constructor(){c(ni,{optional:!0})}whenStable(){let e;return new Promise(n=>{e=this.isStable.subscribe({next:r=>{r&&n()}})}).finally(()=>{e.unsubscribe()})}_injector=c(Le);_rendererFactory=null;get injector(){return this._injector}bootstrap(e,n){return this.bootstrapImpl(e,n)}bootstrapImpl(e,n,r=G.NULL){return this._injector.get(V).run(()=>{Ve(Ee.BootstrapComponentStart);let a=e instanceof nm;if(!this._injector.get(k_).done){let w="";throw new L(405,w)}let l;a?l=e:l=this._injector.get(Fl).resolveComponentFactory(e),this.componentTypes.push(l.componentType);let d=sD(l)?void 0:this._injector.get(ki),u=n||l.selector,f=l.create(r,[],u,d),_=f.location.nativeElement,v=f.injector.get(I_,null);return v?.registerApplication(_),f.onDestroy(()=>{this.detachView(f.hostView),wl(this.components,f),v?.unregisterApplication(_)}),this._loadComponent(f),Ve(Ee.BootstrapComponentEnd,f),f})}tick(){this.zonelessEnabled||(this.dirtyFlags|=1),this._tick()}_tick(){Ve(Ee.ChangeDetectionStart),this.tracingSnapshot!==null?this.tracingSnapshot.run(Yu.CHANGE_DETECTION,this.tickImpl):this.tickImpl()}tickImpl=()=>{if(this._runningTick)throw Ve(Ee.ChangeDetectionEnd),new L(101,!1);let e=ee(null);try{this._runningTick=!0,this.synchronize()}finally{this._runningTick=!1,this.tracingSnapshot?.dispose(),this.tracingSnapshot=null,ee(e),this.afterTick.next(),Ve(Ee.ChangeDetectionEnd)}};synchronize(){this._rendererFactory===null&&!this._injector.destroyed&&(this._rendererFactory=this._injector.get(_t,null,{optional:!0}));let e=0;for(;this.dirtyFlags!==0&&e++<ZR;){Ve(Ee.ChangeDetectionSyncStart);try{this.synchronizeOnce()}finally{Ve(Ee.ChangeDetectionSyncEnd)}}}synchronizeOnce(){this.dirtyFlags&16&&(this.dirtyFlags&=-17,this.rootEffectScheduler.flush());let e=!1;if(this.dirtyFlags&7){let n=!!(this.dirtyFlags&1);this.dirtyFlags&=-8,this.dirtyFlags|=8;for(let{_lView:r}of this.allViews){if(!n&&!_l(r))continue;let o=n&&!this.zonelessEnabled?0:1;Iw(r,o),e=!0}if(this.dirtyFlags&=-5,this.syncDirtyFlagsWithViews(),this.dirtyFlags&23)return}e||(this._rendererFactory?.begin?.(),this._rendererFactory?.end?.()),this.dirtyFlags&8&&(this.dirtyFlags&=-9,this.afterRenderManager.execute()),this.syncDirtyFlagsWithViews()}syncDirtyFlagsWithViews(){if(this.allViews.some(({_lView:e})=>_l(e))){this.dirtyFlags|=2;return}else this.dirtyFlags&=-8}attachView(e){let n=e;this._views.push(n),n.attachToAppRef(this)}detachView(e){let n=e;wl(this._views,n),n.detachFromAppRef()}_loadComponent(e){this.attachView(e.hostView);try{this.tick()}catch(r){this.internalErrorHandler(r)}this.components.push(e),this._injector.get(Vl,[]).forEach(r=>r(e))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(e=>e()),this._views.slice().forEach(e=>e.destroy())}finally{this._destroyed=!0,this._views=[],this._destroyListeners=[]}}onDestroy(e){return this._destroyListeners.push(e),()=>wl(this._destroyListeners,e)}destroy(){if(this._destroyed)throw new L(406,!1);let e=this._injector;e.destroy&&!e.destroyed&&e.destroy()}get viewCount(){return this._views.length}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function wl(t,i){let e=t.indexOf(i);e>-1&&t.splice(e,1)}function sm(t,i){let e=ie(),n=Ei();if(an(e,n,i)){let r=We(),o=Ta();if(em(o,r,e,t,i))Di(o)&&vw(e,o.index);else{let s=Cn(o,e);yw(e[He],s,null,o.value,t,i,null)}}return sm}function K(t,i,e,n){let r=ie(),o=Ei();if(an(r,o,i)){let a=We(),s=Ta();IA(s,r,t,i,e,n)}return K}function Fa(t){if(ii("NgAnimateEnter"),!iw)return Fa;let i=ie();if(qk(i))return Fa;let e=Et(),n=i[bn].get(V);return Xk(z0(i),e,()=>KR(i,e,t,n)),lA(i[bn]),cw(i[bn],z0(i)),Fa}function KR(t,i,e,n){let r=Cn(i,t),o=t[He],a=Kk(e),s=[],l=!1,d=f=>{if(Iu(f)!==r)return;let _=f instanceof AnimationEvent?"animationend":"transitionend";n.runOutsideAngular(()=>{o.listen(r,_,u)})},u=f=>{Iu(f)===r&&(ow(f,r)&&(l=!0),XR(f,r,o))};if(a&&a.length>0){n.runOutsideAngular(()=>{s.push(o.listen(r,"animationstart",d)),s.push(o.listen(r,"transitionstart",d))}),Yk(r,a,s);for(let f of a)o.addClass(r,f);n.runOutsideAngular(()=>{requestAnimationFrame(()=>{if(!l&&(nA(r,Su,iw),!Su.has(r))){for(let f of a)o.removeClass(r,f);rw(r)}})})}}function XR(t,i,e){let n=xl.get(i);if(!(Iu(t)!==i||!n)&&ow(t,i)){t.stopPropagation();for(let r of n.classList)e.removeClass(i,r);rw(i)}}var zg=class{destroy(i){}updateValue(i,e){}swap(i,e){let n=Math.min(i,e),r=Math.max(i,e),o=this.detach(r);if(r-n>1){let a=this.detach(n);this.attach(n,o),this.attach(r,a)}else this.attach(n,o)}move(i,e){this.attach(e,this.detach(i))}};function mg(t,i,e,n,r){return t===e&&Object.is(i,n)?1:Object.is(r(t,i),r(e,n))?-1:0}function JR(t,i,e,n){let r,o,a=0,s=t.length-1,l=void 0;if(Array.isArray(i)){ee(n);let d=i.length-1;for(ee(null);a<=s&&a<=d;){let u=t.at(a),f=i[a],_=mg(a,u,a,f,e);if(_!==0){_<0&&t.updateValue(a,f),a++;continue}let v=t.at(s),w=i[d],P=mg(s,v,d,w,e);if(P!==0){P<0&&t.updateValue(s,w),s--,d--;continue}let U=e(a,u),Q=e(s,v),Ae=e(a,f);if(Object.is(Ae,Q)){let Rt=e(d,w);Object.is(Rt,U)?(t.swap(a,s),t.updateValue(s,w),d--,s--):t.move(s,a),t.updateValue(a,f),a++;continue}if(r??=new Lu,o??=iC(t,a,s,e),$g(t,r,a,Ae))t.updateValue(a,f),a++,s++;else if(o.has(Ae))r.set(U,t.detach(a)),s--;else{let Rt=t.create(a,i[a]);t.attach(a,Rt),a++,s++}}for(;a<=d;)nC(t,r,e,a,i[a]),a++}else if(i!=null){ee(n);let d=i[Symbol.iterator]();ee(null);let u=d.next();for(;!u.done&&a<=s;){let f=t.at(a),_=u.value,v=mg(a,f,a,_,e);if(v!==0)v<0&&t.updateValue(a,_),a++,u=d.next();else{r??=new Lu,o??=iC(t,a,s,e);let w=e(a,_);if($g(t,r,a,w))t.updateValue(a,_),a++,s++,u=d.next();else if(!o.has(w))t.attach(a,t.create(a,_)),a++,s++,u=d.next();else{let P=e(a,f);r.set(P,t.detach(a)),s--}}}for(;!u.done;)nC(t,r,e,t.length,u.value),u=d.next()}for(;a<=s;)t.destroy(t.detach(s--));r?.forEach(d=>{t.destroy(d)})}function $g(t,i,e,n){return i!==void 0&&i.has(n)?(t.attach(e,i.get(n)),i.delete(n),!0):!1}function nC(t,i,e,n,r){if($g(t,i,n,e(n,r)))t.updateValue(n,r);else{let o=t.create(n,r);t.attach(n,o)}}function iC(t,i,e,n){let r=new Set;for(let o=i;o<=e;o++)r.add(n(o,t.at(o)));return r}var Lu=class{kvMap=new Map;_vMap=void 0;has(i){return this.kvMap.has(i)}delete(i){if(!this.has(i))return!1;let e=this.kvMap.get(i);return this._vMap!==void 0&&this._vMap.has(e)?(this.kvMap.set(i,this._vMap.get(e)),this._vMap.delete(e)):this.kvMap.delete(i),!0}get(i){return this.kvMap.get(i)}set(i,e){if(this.kvMap.has(i)){let n=this.kvMap.get(i);this._vMap===void 0&&(this._vMap=new Map);let r=this._vMap;for(;r.has(n);)n=r.get(n);r.set(n,e)}else this.kvMap.set(i,e)}forEach(i){for(let[e,n]of this.kvMap)if(i(n,e),this._vMap!==void 0){let r=this._vMap;for(;r.has(n);)n=r.get(n),i(n,e)}}};function j(t,i,e,n,r,o,a,s){ii("NgControlFlow");let l=ie(),d=We(),u=wn(d.consts,o);return Ba(l,d,t,i,e,n,r,u,256,a,s),A_}function A_(t,i,e,n,r,o,a,s){ii("NgControlFlow");let l=ie(),d=We(),u=wn(d.consts,o);return Ba(l,d,t,i,e,n,r,u,512,a,s),A_}function H(t,i){ii("NgControlFlow");let e=ie(),n=Ei(),r=e[n]!==Ut?e[n]:-1,o=r!==-1?Vu(e,et+r):void 0,a=0;if(an(e,n,t)){let s=ee(null);try{if(o!==void 0&&Nw(o,a),t!==-1){let l=et+t,d=Vu(e,l),u=Yg(e[re],l),f=Pw(d,u,e),_=Ol(e,u,i,{dehydratedView:f});Nl(d,_,a,Va(u,f))}}finally{ee(s)}}else if(o!==void 0){let s=Ow(o,a);s!==void 0&&(s[ct]=i)}}var Wg=class{lContainer;$implicit;$index;constructor(i,e,n){this.lContainer=i,this.$implicit=e,this.$index=n}get $count(){return this.lContainer.length-rt}};function Ur(t,i){return i}var Gg=class{hasEmptyBlock;trackByFn;liveCollection;constructor(i,e,n){this.hasEmptyBlock=i,this.trackByFn=e,this.liveCollection=n}};function Me(t,i,e,n,r,o,a,s,l,d,u,f,_){ii("NgControlFlow");let v=ie(),w=We(),P=l!==void 0,U=ie(),Q=s?a.bind(U[en][ct]):a,Ae=new Gg(P,Q);U[et+t]=Ae,Ba(v,w,t+1,i,e,n,r,wn(w.consts,o),256),P&&Ba(v,w,t+2,l,d,u,f,wn(w.consts,_),512)}var qg=class extends zg{lContainer;hostLView;templateTNode;operationsCounter=void 0;needsIndexUpdate=!1;constructor(i,e,n){super(),this.lContainer=i,this.hostLView=e,this.templateTNode=n}get length(){return this.lContainer.length-rt}at(i){return this.getLView(i)[ct].$implicit}attach(i,e){let n=e[Eo];this.needsIndexUpdate||=i!==this.length,Nl(this.lContainer,e,i,Va(this.templateTNode,n)),eO(this.lContainer,i)}detach(i){return this.needsIndexUpdate||=i!==this.length-1,tO(this.lContainer,i),nO(this.lContainer,i)}create(i,e){let n=ku(this.lContainer,this.templateTNode.tView.ssrId);return Ol(this.hostLView,this.templateTNode,new Wg(this.lContainer,e,i),{dehydratedView:n})}destroy(i){Ku(i[re],i)}updateValue(i,e){this.getLView(i)[ct].$implicit=e}reset(){this.needsIndexUpdate=!1}updateIndexes(){if(this.needsIndexUpdate)for(let i=0;i<this.length;i++)this.getLView(i)[ct].$index=i}getLView(i){return iO(this.lContainer,i)}};function Se(t){let i=ee(null),e=Mi();try{let n=ie(),r=n[re],o=n[e],a=e+1,s=Vu(n,a);if(o.liveCollection===void 0){let d=Yg(r,a);o.liveCollection=new qg(s,n,d)}else o.liveCollection.reset();let l=o.liveCollection;if(JR(l,t,o.trackByFn,i),l.updateIndexes(),o.hasEmptyBlock){let d=Ei(),u=l.length===0;if(an(n,d,u)){let f=e+2,_=Vu(n,f);if(u){let v=Yg(r,f),w=Pw(_,v,n),P=Ol(n,v,void 0,{dehydratedView:w});Nl(_,P,0,Va(v,w))}else r.firstUpdatePass&&KA(_),Nw(_,0)}}}finally{ee(i)}}function Vu(t,i){return t[i]}function eO(t,i){if(t.length<=rt)return;let e=rt+i,n=t[e],r=n?n[Xi]:void 0;if(n&&r&&r.detachedLeaveAnimationFns&&r.detachedLeaveAnimationFns.length>0){let o=n[bn];aA(o,r),Fo.delete(n[Ki]),r.detachedLeaveAnimationFns=void 0}}function tO(t,i){if(t.length<=rt)return;let e=rt+i,n=t[e],r=n?n[Xi]:void 0;r&&r.leave&&r.leave.size>0&&(r.detachedLeaveAnimationFns=[])}function nO(t,i){return Sl(t,i)}function iO(t,i){return Ow(t,i)}function Yg(t,i){return eu(t,i)}function A(t,i,e){let n=ie(),r=Ei();if(an(n,r,i)){let o=We(),a=Ta();gw(a,n,t,i,n[He],e)}return A}function Qg(t,i,e,n,r){em(i,t,e,r?"class":"style",n)}function m(t,i,e,n){let r=ie(),o=r[re],a=t+et,s=o.firstCreatePass?Hw(a,r,2,i,bw,Wp(),e,n):o.data[a];if(Di(s)){let l=r[Ci].tracingService;if(l&&l.componentCreate){let d=o.data[s.directiveStart+s.componentOffset];return l.componentCreate(Gw(d),()=>(rC(t,i,r,s,n),m))}}return rC(t,i,r,s,n),m}function rC(t,i,e,n,r){if(Cw(n,e,t,i,lD),gl(n)){let o=e[re];v_(o,e,n),BC(o,n,e)}r!=null&&Ju(e,n)}function h(){let t=We(),i=Et(),e=ww(i);return t.firstCreatePass&&Uw(t,e),qp(e)&&Yp(),$p(),e.classesWithoutHost!=null&&jT(e)&&Qg(t,e,ie(),e.classesWithoutHost,!0),e.stylesWithoutHost!=null&&HT(e)&&Qg(t,e,ie(),e.stylesWithoutHost,!1),h}function T(t,i,e,n){return m(t,i,e,n),h(),T}function Te(t,i,e,n){let r=ie(),o=r[re],a=t+et,s=o.firstCreatePass?uR(a,o,2,i,e,n):o.data[a];return Cw(s,r,t,i,lD),n!=null&&Ju(r,s),Te}function Oe(){let t=Et(),i=ww(t);return qp(i)&&Yp(),$p(),Oe}function sn(t,i,e,n){return Te(t,i,e,n),Oe(),sn}var lD=(t,i,e,n,r)=>(du(!0),GC(i[He],n,w0()));function ke(){return ie()}function Yt(t,i,e){let n=ie(),r=Ei();if(an(n,r,i)){let o=We(),a=Ta();_w(a,n,t,i,n[He],e)}return Yt}var Bl="en-US";var rO=Bl;function cD(t){typeof t=="string"&&(rO=t.toLowerCase().replace(/_/g,"-"))}function E(t,i,e){let n=ie(),r=We(),o=Et();return dD(r,n,n[He],o,t,i,e),E}function Fn(t,i,e){let n=ie(),r=We(),o=Et();return(o.type&3||e)&&$w(o,r,n,e,n[He],t,i,yu(o,n,i)),Fn}function dD(t,i,e,n,r,o,a){let s=!0,l=null;if((n.type&3||a)&&(l??=yu(n,i,o),$w(n,t,i,a,e,r,o,l)&&(s=!1)),s){let d=n.outputs?.[r],u=n.hostDirectiveOutputs?.[r];if(u&&u.length)for(let f=0;f<u.length;f+=2){let _=u[f],v=u[f+1];l??=yu(n,i,o),X0(n,i,_,v,r,l)}if(d&&d.length)for(let f of d)l??=yu(n,i,o),X0(n,i,f,r,r,l)}}function D(t=1){return C0(t)}function oO(t,i){let e=null,n=Fk(t);for(let r=0;r<i.length;r++){let o=i[r];if(o==="*"){e=r;continue}if(n===null?XC(t,o,!0):Vk(n,o))return r}return e}function De(t){let i=ie()[en][Jt];if(!i.projection){let e=t?t.length:1,n=i.projection=qy(e,null),r=n.slice(),o=i.child;for(;o!==null;){if(o.type!==128){let a=t?oO(o,t):0;a!==null&&(r[a]?r[a].projectionNext=o:n[a]=o,r[a]=o)}o=o.next}}}function te(t,i=0,e,n,r,o){let a=ie(),s=We(),l=n?t+1:null;l!==null&&Ba(a,s,l,n,r,o,null,e);let d=$a(s,et+t,16,null,e||null);d.projection===null&&(d.projection=i),Kp();let f=!a[Eo]||Gp();a[en][Jt].projection[d.projection]===null&&l!==null?aO(a,s,l):f&&!$u(d)&&vA(s,a,d)}function aO(t,i,e){let n=et+e,r=i.data[n],o=t[n],a=ku(o,r.tView.ssrId),s=Ol(t,r,void 0,{dehydratedView:a});Nl(o,s,0,Va(r,a))}function vt(t,i,e,n){return Xw(t,i,e,n),vt}function Ce(t,i,e){return Kw(t,i,e),Ce}function R(t){let i=ie(),e=We(),n=au();vl(n+1);let r=D_(e,n);if(t.dirty&&i0(i)===((r.metadata.flags&2)===2)){if(r.matches===null)t.reset([]);else{let o=eD(i,n);t.reset(o,SC),t.notifyOnChanges()}return!0}return!1}function O(){return w_(ie(),au())}function lm(t,i,e,n,r){return nD(i,Xw(t,e,n,r)),lm}function Ri(t,i,e,n){return nD(t,Kw(i,e,n)),Ri}function Oi(t=1){vl(au()+t)}function ln(t){let i=u0();return Lp(i,et+t)}function pu(t,i){return t<<17|i<<2}function Po(t){return t>>17&32767}function sO(t){return(t&2)==2}function lO(t,i){return t&131071|i<<17}function Zg(t){return t|2}function ja(t){return(t&131068)>>2}function fg(t,i){return t&-131069|i<<2}function cO(t){return(t&1)===1}function Kg(t){return t|1}function dO(t,i,e,n,r,o){let a=o?i.classBindings:i.styleBindings,s=Po(a),l=ja(a);t[n]=e;let d=!1,u;if(Array.isArray(e)){let f=e;u=f[1],(u===null||Da(f,u)>0)&&(d=!0)}else u=e;if(r)if(l!==0){let _=Po(t[s+1]);t[n+1]=pu(_,s),_!==0&&(t[_+1]=fg(t[_+1],n)),t[s+1]=lO(t[s+1],n)}else t[n+1]=pu(s,0),s!==0&&(t[s+1]=fg(t[s+1],n)),s=n;else t[n+1]=pu(l,0),s===0?s=n:t[l+1]=fg(t[l+1],n),l=n;d&&(t[n+1]=Zg(t[n+1])),oC(t,u,n,!0),oC(t,u,n,!1),uO(i,u,t,n,o),a=pu(s,l),o?i.classBindings=a:i.styleBindings=a}function uO(t,i,e,n,r){let o=r?t.residualClasses:t.residualStyles;o!=null&&typeof i=="string"&&Da(o,i)>=0&&(e[n+1]=Kg(e[n+1]))}function oC(t,i,e,n){let r=t[e+1],o=i===null,a=n?Po(r):ja(r),s=!1;for(;a!==0&&(s===!1||o);){let l=t[a],d=t[a+1];mO(l,i)&&(s=!0,t[a+1]=n?Kg(d):Zg(d)),a=n?Po(d):ja(d)}s&&(t[e+1]=n?Zg(r):Kg(r))}function mO(t,i){return t===null||i==null||(Array.isArray(t)?t[1]:t)===i?!0:Array.isArray(t)&&typeof i=="string"?Da(t,i)>=0:!1}var Mt={textEnd:0,key:0,keyEnd:0,value:0,valueEnd:0};function uD(t){return t.substring(Mt.key,Mt.keyEnd)}function fO(t){return t.substring(Mt.value,Mt.valueEnd)}function hO(t){return hD(t),mD(t,Ha(t,0,Mt.textEnd))}function mD(t,i){let e=Mt.textEnd;return e===i?-1:(i=Mt.keyEnd=gO(t,Mt.key=i,e),Ha(t,i,e))}function pO(t){return hD(t),fD(t,Ha(t,0,Mt.textEnd))}function fD(t,i){let e=Mt.textEnd,n=Mt.key=Ha(t,i,e);return e===n?-1:(n=Mt.keyEnd=_O(t,n,e),n=aC(t,n,e,58),n=Mt.value=Ha(t,n,e),n=Mt.valueEnd=vO(t,n,e),aC(t,n,e,59))}function hD(t){Mt.key=0,Mt.keyEnd=0,Mt.value=0,Mt.valueEnd=0,Mt.textEnd=t.length}function Ha(t,i,e){for(;i<e&&t.charCodeAt(i)<=32;)i++;return i}function gO(t,i,e){for(;i<e&&t.charCodeAt(i)>32;)i++;return i}function _O(t,i,e){let n;for(;i<e&&((n=t.charCodeAt(i))===45||n===95||(n&-33)>=65&&(n&-33)<=90||n>=48&&n<=57);)i++;return i}function aC(t,i,e,n){return i=Ha(t,i,e),i<e&&i++,i}function vO(t,i,e){let n=-1,r=-1,o=-1,a=i,s=a;for(;a<e;){let l=t.charCodeAt(a++);if(l===59)return s;l===34||l===39?s=a=sC(t,l,a,e):i===a-4&&o===85&&r===82&&n===76&&l===40?s=a=sC(t,41,a,e):l>32&&(s=a),o=r,r=n,n=l&-33}return s}function sC(t,i,e,n){let r=-1,o=e;for(;o<n;){let a=t.charCodeAt(o++);if(a==i&&r!==92)return o;a==92&&r===92?r=0:r=a}throw new Error}function ri(t,i,e){return pD(t,i,e,!1),ri}function F(t,i){return pD(t,i,null,!0),F}function or(t){gD(bD,bO,t,!1)}function bO(t,i){for(let e=pO(i);e>=0;e=fD(i,e))bD(t,uD(i),fO(i))}function It(t){gD(MO,yO,t,!0)}function yO(t,i){for(let e=hO(i);e>=0;e=mD(i,e))fl(t,uD(i),!0)}function pD(t,i,e,n){let r=ie(),o=We(),a=ru(2);if(o.firstUpdatePass&&vD(o,t,a,n),i!==Ut&&an(r,a,i)){let s=o.data[Mi()];yD(o,s,r,r[He],t,r[a+1]=IO(i,e),n,a)}}function gD(t,i,e,n){let r=We(),o=ru(2);r.firstUpdatePass&&vD(r,null,o,n);let a=ie();if(e!==Ut&&an(a,o,e)){let s=r.data[Mi()];if(CD(s,n)&&!_D(r,o)){let l=n?s.classesWithoutHost:s.stylesWithoutHost;l!==null&&(e=qd(l,e||"")),Qg(r,s,a,e,n)}else SO(r,s,a,a[He],a[o+1],a[o+1]=EO(t,i,e),n,o)}}function _D(t,i){return i>=t.expandoStartIndex}function vD(t,i,e,n){let r=t.data;if(r[e+1]===null){let o=r[Mi()],a=_D(t,e);CD(o,n)&&i===null&&!a&&(i=!1),i=CO(r,o,i,n),dO(r,o,i,e,a,n)}}function CO(t,i,e,n){let r=_0(t),o=n?i.residualClasses:i.residualStyles;if(r===null)(n?i.classBindings:i.styleBindings)===0&&(e=hg(null,t,i,e,n),e=Tl(e,i.attrs,n),o=null);else{let a=i.directiveStylingLast;if(a===-1||t[a]!==r)if(e=hg(r,t,i,e,n),o===null){let l=wO(t,i,n);l!==void 0&&Array.isArray(l)&&(l=hg(null,t,i,l[1],n),l=Tl(l,i.attrs,n),DO(t,i,n,l))}else o=xO(t,i,n)}return o!==void 0&&(n?i.residualClasses=o:i.residualStyles=o),e}function wO(t,i,e){let n=e?i.classBindings:i.styleBindings;if(ja(n)!==0)return t[Po(n)]}function DO(t,i,e,n){let r=e?i.classBindings:i.styleBindings;t[Po(r)]=n}function xO(t,i,e){let n,r=i.directiveEnd;for(let o=1+i.directiveStylingLast;o<r;o++){let a=t[o].hostAttrs;n=Tl(n,a,e)}return Tl(n,i.attrs,e)}function hg(t,i,e,n,r){let o=null,a=e.directiveEnd,s=e.directiveStylingLast;for(s===-1?s=e.directiveStart:s++;s<a&&(o=i[s],n=Tl(n,o.hostAttrs,r),o!==t);)s++;return t!==null&&(e.directiveStylingLast=s),n}function Tl(t,i,e){let n=e?1:2,r=-1;if(i!==null)for(let o=0;o<i.length;o++){let a=i[o];typeof a=="number"?r=a:r===n&&(Array.isArray(t)||(t=t===void 0?[]:["",t]),fl(t,a,e?!0:i[++o]))}return t===void 0?null:t}function EO(t,i,e){if(e==null||e==="")return Gt;let n=[],r=ti(e);if(Array.isArray(r))for(let o=0;o<r.length;o++)t(n,r[o],!0);else if(r instanceof Set)for(let o of r)t(n,o,!0);else if(typeof r=="object")for(let o in r)r.hasOwnProperty(o)&&t(n,o,r[o]);else typeof r=="string"&&i(n,r);return n}function bD(t,i,e){fl(t,i,ti(e))}function MO(t,i,e){let n=String(i);n!==""&&!n.includes(" ")&&fl(t,n,e)}function SO(t,i,e,n,r,o,a,s){r===Ut&&(r=Gt);let l=0,d=0,u=0<r.length?r[0]:null,f=0<o.length?o[0]:null;for(;u!==null||f!==null;){let _=l<r.length?r[l+1]:void 0,v=d<o.length?o[d+1]:void 0,w=null,P;u===f?(l+=2,d+=2,_!==v&&(w=f,P=v)):f===null||u!==null&&u<f?(l+=2,w=u):(d+=2,w=f,P=v),w!==null&&yD(t,i,e,n,w,P,a,s),u=l<r.length?r[l]:null,f=d<o.length?o[d]:null}}function yD(t,i,e,n,r,o,a,s){if(!(i.type&3))return;let l=t.data,d=l[s+1],u=cO(d)?lC(l,i,e,r,ja(d),a):void 0;if(!Bu(u)){Bu(o)||sO(d)&&(o=lC(l,null,e,r,s,a));let f=Pp(Mi(),e);yA(n,a,f,r,o)}}function lC(t,i,e,n,r,o){let a=i===null,s;for(;r>0;){let l=t[r],d=Array.isArray(l),u=d?l[1]:l,f=u===null,_=e[r+1];_===Ut&&(_=f?Gt:void 0);let v=f?Xd(_,n):u===n?_:void 0;if(d&&!Bu(v)&&(v=Xd(l,n)),Bu(v)&&(s=v,a))return s;let w=t[r+1];r=a?Po(w):ja(w)}if(i!==null){let l=o?i.residualClasses:i.residualStyles;l!=null&&(s=Xd(l,n))}return s}function Bu(t){return t!==void 0}function IO(t,i){return t==null||t===""||(typeof i=="string"?t=t+i:typeof t=="object"&&(t=dl(ti(t)))),t}function CD(t,i){return(t.flags&(i?8:16))!==0}function g(t,i=""){let e=ie(),n=We(),r=t+et,o=n.firstCreatePass?$a(n,r,1,i,null):n.data[r],a=TO(n,e,o,i);e[r]=a,cu()&&g_(n,e,a,o),Ia(o,!1)}var TO=(t,i,e,n)=>(du(!0),Mk(i[He],n));function wD(t,i,e,n=""){return an(t,Ei(),e)?i+wa(e)+n:Ut}function kO(t,i,e,n,r,o=""){let a=m0(),s=mR(t,a,e,r);return ru(2),s?i+wa(e)+n+wa(r)+o:Ut}function oe(t){return _e("",t),oe}function _e(t,i,e){let n=ie(),r=wD(n,t,i,e);return r!==Ut&&DD(n,Mi(),r),_e}function ar(t,i,e,n,r){let o=ie(),a=kO(o,t,i,e,n,r);return a!==Ut&&DD(o,Mi(),a),ar}function DD(t,i,e){let n=Pp(i,t);Sk(t[He],n,e)}function Ke(t,i,e){S_(i)&&(i=i());let n=ie(),r=Ei();if(an(n,r,i)){let o=We(),a=Ta();gw(a,n,t,i,n[He],e)}return Ke}function Ie(t,i){let e=S_(t);return e&&t.set(i),e}function Xe(t,i){let e=ie(),n=We(),r=Et();return dD(n,e,e[He],r,t,i),Xe}function sr(t){return an(ie(),Ei(),t)?wa(t):Ut}function lr(t,i,e=""){return wD(ie(),t,i,e)}function R_(t,i,e){let n=iu()+t,r=ie();return r[n]===Ut?C_(r,n,i(e,r)):zw(r,n)}function cC(t,i,e){let n=We();n.firstCreatePass&&xD(i,n.data,n.blueprint,xi(t),e)}function xD(t,i,e,n,r){if(t=Bt(t),Array.isArray(t))for(let o=0;o<t.length;o++)xD(t[o],i,e,n,r);else{let o=We(),a=ie(),s=Et(),l=wo(t)?t:Bt(t.provide),d=kp(t),u=s.providerIndexes&1048575,f=s.directiveStart,_=s.providerIndexes>>20;if(wo(t)||!t.multi){let v=new No(d,r,we,null),w=gg(l,i,r?u:u+_,f);w===-1?(vg(Eu(s,a),o,l),pg(o,t,i.length),i.push(l),s.directiveStart++,s.directiveEnd++,r&&(s.providerIndexes+=1048576),e.push(v),a.push(v)):(e[w]=v,a[w]=v)}else{let v=gg(l,i,u+_,f),w=gg(l,i,u,u+_),P=v>=0&&e[v],U=w>=0&&e[w];if(r&&!U||!r&&!P){vg(Eu(s,a),o,l);let Q=OO(r?RO:AO,e.length,r,n,d,t);!r&&U&&(e[w].providerFactory=Q),pg(o,t,i.length,0),i.push(l),s.directiveStart++,s.directiveEnd++,r&&(s.providerIndexes+=1048576),e.push(Q),a.push(Q)}else{let Q=ED(e[r?w:v],d,!r&&n);pg(o,t,v>-1?v:w,Q)}!r&&n&&U&&e[w].componentProviders++}}}function pg(t,i,e,n){let r=wo(i),o=Jy(i);if(r||o){let l=(o?Bt(i.useClass):i).prototype.ngOnDestroy;if(l){let d=t.destroyHooks||(t.destroyHooks=[]);if(!r&&i.multi){let u=d.indexOf(e);u===-1?d.push(e,[n,l]):d[u+1].push(n,l)}else d.push(e,l)}}}function ED(t,i,e){return e&&t.componentProviders++,t.multi.push(i)-1}function gg(t,i,e,n){for(let r=e;r<n;r++)if(i[r]===t)return r;return-1}function AO(t,i,e,n,r){return Xg(this.multi,[])}function RO(t,i,e,n,r){let o=this.multi,a;if(this.providerFactory){let s=this.providerFactory.componentProviders,l=Dl(n,n[re],this.providerFactory.index,r);a=l.slice(0,s),Xg(o,a);for(let d=s;d<l.length;d++)a.push(l[d])}else a=[],Xg(o,a);return a}function Xg(t,i){for(let e=0;e<t.length;e++){let n=t[e];i.push(n())}return i}function OO(t,i,e,n,r,o){let a=new No(t,e,we,null);return a.multi=[],a.index=i,a.componentProviders=0,ED(a,r,n&&!e),a}function Ue(t,i){return e=>{e.providersResolver=(n,r)=>cC(n,r?r(t):t,!1),i&&(e.viewProvidersResolver=(n,r)=>cC(n,r?r(i):i,!0))}}function jl(t,i){let e=iu()+t,n=ie();return n[e]===Ut?C_(n,e,i()):zw(n,e)}function NO(t,i){let e=t[i];return e===Ut?void 0:e}function FO(t,i,e,n,r,o){let a=i+e;return an(t,a,r)?C_(t,a+1,o?n.call(o,r):n(r)):NO(t,a+1)}function Hl(t,i){let e=We(),n,r=t+et;e.firstCreatePass?(n=PO(i,e.pipeRegistry),e.data[r]=n,n.onDestroy&&(e.destroyHooks??=[]).push(r,n.onDestroy)):n=e.data[r];let o=n.factory||(n.factory=Ar(n.type,!0)),a,s=Xt(we);try{let l=xu(!1),d=o();return xu(l),Vp(e,ie(),r,d),d}finally{Xt(s)}}function PO(t,i){if(i)for(let e=i.length-1;e>=0;e--){let n=i[e];if(t===n.name)return n}}function Ul(t,i,e){let n=t+et,r=ie(),o=Lp(r,n);return LO(r,n)?FO(r,iu(),i,o.transform,e,o):o.transform(e)}function LO(t,i){return t[re].data[i].pure}function cm(t,i){return tm(t,i)}var ju=class{ngModuleFactory;componentFactories;constructor(i,e){this.ngModuleFactory=i,this.componentFactories=e}},O_=(()=>{class t{compileModuleSync(e){return new Pu(e)}compileModuleAsync(e){return Promise.resolve(this.compileModuleSync(e))}compileModuleAndAllComponentsSync(e){let n=this.compileModuleSync(e),r=Cp(e),o=ZC(r.declarations).reduce((a,s)=>{let l=bi(s);return l&&a.push(new jr(l)),a},[]);return new ju(n,o)}compileModuleAndAllComponentsAsync(e){return Promise.resolve(this.compileModuleAndAllComponentsSync(e))}clearCache(){}clearCacheFor(e){}getModuleId(e){}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var MD=(()=>{class t{applicationErrorHandler=c(Dn);appRef=c(xn);taskService=c(er);ngZone=c(V);zonelessEnabled=c(bl);tracing=c(ni,{optional:!0});zoneIsDefined=typeof Zone<"u"&&!!Zone.root.run;schedulerTickApplyArgs=[{data:{__scheduler_tick__:!0}}];subscriptions=new ae;angularZoneId=this.zoneIsDefined?this.ngZone._inner?.get(ll):null;scheduleInRootZone=!this.zonelessEnabled&&this.zoneIsDefined&&(c(ag,{optional:!0})??!1);cancelScheduledCallback=null;useMicrotaskScheduler=!1;runningTick=!1;pendingRenderTaskId=null;constructor(){this.subscriptions.add(this.appRef.afterTick.subscribe(()=>{let e=this.taskService.add();if(!this.runningTick&&(this.cleanup(),!this.zonelessEnabled||this.appRef.includeAllTestViews)){this.taskService.remove(e);return}this.switchToMicrotaskScheduler(),this.taskService.remove(e)})),this.subscriptions.add(this.ngZone.onUnstable.subscribe(()=>{this.runningTick||this.cleanup()}))}switchToMicrotaskScheduler(){this.ngZone.runOutsideAngular(()=>{let e=this.taskService.add();this.useMicrotaskScheduler=!0,queueMicrotask(()=>{this.useMicrotaskScheduler=!1,this.taskService.remove(e)})})}notify(e){if(!this.zonelessEnabled&&e===5)return;switch(e){case 0:{this.appRef.dirtyFlags|=2;break}case 3:case 2:case 4:case 5:case 1:{this.appRef.dirtyFlags|=4;break}case 6:{this.appRef.dirtyFlags|=2;break}case 12:{this.appRef.dirtyFlags|=16;break}case 13:{this.appRef.dirtyFlags|=2;break}case 11:break;default:this.appRef.dirtyFlags|=8}if(this.appRef.tracingSnapshot=this.tracing?.snapshot(this.appRef.tracingSnapshot)??null,!this.shouldScheduleTick())return;let n=this.useMicrotaskScheduler?M0:ng;this.pendingRenderTaskId=this.taskService.add(),this.scheduleInRootZone?this.cancelScheduledCallback=Zone.root.run(()=>n(()=>this.tick())):this.cancelScheduledCallback=this.ngZone.runOutsideAngular(()=>n(()=>this.tick()))}shouldScheduleTick(){return!(this.appRef.destroyed||this.pendingRenderTaskId!==null||this.runningTick||this.appRef._runningTick||!this.zonelessEnabled&&this.zoneIsDefined&&Zone.current.get(ll+this.angularZoneId))}tick(){if(this.runningTick||this.appRef.destroyed)return;if(this.appRef.dirtyFlags===0){this.cleanup();return}!this.zonelessEnabled&&this.appRef.dirtyFlags&7&&(this.appRef.dirtyFlags|=1);let e=this.taskService.add();try{this.ngZone.run(()=>{this.runningTick=!0,this.appRef._tick()},void 0,this.schedulerTickApplyArgs)}catch(n){this.applicationErrorHandler(n)}finally{this.taskService.remove(e),this.cleanup()}}ngOnDestroy(){this.subscriptions.unsubscribe(),this.cleanup()}cleanup(){if(this.runningTick=!1,this.cancelScheduledCallback?.(),this.cancelScheduledCallback=null,this.pendingRenderTaskId!==null){let e=this.pendingRenderTaskId;this.pendingRenderTaskId=null,this.taskService.remove(e)}}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function SD(){return[{provide:vi,useExisting:MD},{provide:V,useClass:cl},{provide:bl,useValue:!0}]}function VO(){return typeof $localize<"u"&&$localize.locale||Bl}var Ga=new y("",{factory:()=>c(Ga,{optional:!0,skipSelf:!0})||VO()});var dm=class{destroyed=!1;listeners=null;errorHandler=c(qt,{optional:!0});destroyRef=c(jt);constructor(){this.destroyRef.onDestroy(()=>{this.destroyed=!0,this.listeners=null})}subscribe(i){if(this.destroyed)throw new L(953,!1);return(this.listeners??=[]).push(i),{unsubscribe:()=>{let e=this.listeners?.indexOf(i);e!==void 0&&e!==-1&&this.listeners?.splice(e,1)}}}emit(i){if(this.destroyed){console.warn(An(953,!1));return}if(this.listeners===null)return;let e=ee(null);try{for(let n of this.listeners)try{n(i)}catch(r){this.errorHandler?.handleError(r)}}finally{ee(e)}}};function ot(t){return Fy(t)}function ut(t,i){return qs(t,i?.equal)}var fm=Symbol("InputSignalNode#UNSET"),ND=ne(C({},Ys),{transformFn:void 0,applyValueToInputSignal(t,i){mo(t,i)}});function FD(t,i){let e=Object.create(ND);e.value=t,e.transformFn=i?.transform;function n(){if(Dr(e),e.value===fm){let r=null;throw new L(-950,r)}return e.value}return n[ht]=e,n}var oi=class{attributeName;constructor(i){this.attributeName=i}__NG_ELEMENT_ID__=()=>Hu(this.attributeName);toString(){return`HostAttributeToken ${this.attributeName}`}};function ID(t,i){return FD(t,i)}function n1(t){return FD(fm,t)}var cr=(ID.required=n1,ID);function TD(t,i){return x_(i)}function i1(t,i){return E_(i)}var ai=(TD.required=i1,TD);function kD(t,i){return x_(i)}function r1(t,i){return E_(i)}var PD=(kD.required=r1,kD);function LD(t,i){let e=Object.create(ND),n=new dm;e.value=t;function r(){return Dr(e),AD(e.value),e.value}return r[ht]=e,r.asReadonly=uu.bind(r),r.set=o=>{e.equal(e.value,o)||(mo(e,o),n.emit(o))},r.update=o=>{AD(e.value),r.set(o(e.value))},r.subscribe=n.subscribe.bind(n),r.destroyRef=n.destroyRef,r}function AD(t){if(t===fm)throw new L(952,!1)}function RD(t,i){return LD(t,i)}function o1(t){return LD(fm,t)}var Ne=(RD.required=o1,RD);var F_=new y(""),a1=new y("");function zl(t){return!t.moduleRef}function s1(t){let i=zl(t)?t.r3Injector:t.moduleRef.injector,e=i.get(V);return e.run(()=>{zl(t)?t.r3Injector.resolveInjectorInitializers():t.moduleRef.resolveInjectorInitializers();let n=i.get(Dn),r;if(e.runOutsideAngular(()=>{r=e.onError.subscribe({next:n})}),zl(t)){let o=()=>i.destroy(),a=t.platformInjector.get(F_);a.add(o),i.onDestroy(()=>{r.unsubscribe(),a.delete(o)})}else{let o=()=>t.moduleRef.destroy(),a=t.platformInjector.get(F_);a.add(o),t.moduleRef.onDestroy(()=>{wl(t.allPlatformModules,t.moduleRef),r.unsubscribe(),a.delete(o)})}return c1(n,e,()=>{let o=i.get(er),a=o.add(),s=i.get(k_);return s.runInitializers(),s.donePromise.then(()=>{let l=i.get(Ga,Bl);if(cD(l||Bl),!i.get(a1,!0))return zl(t)?i.get(xn):(t.allPlatformModules.push(t.moduleRef),t.moduleRef);if(zl(t)){let u=i.get(xn);return t.rootComponent!==void 0&&u.bootstrap(t.rootComponent),u}else return l1?.(t.moduleRef,t.allPlatformModules),t.moduleRef}).finally(()=>{o.remove(a)})})})}var l1;function c1(t,i,e){try{let n=e();return rr(n)?n.catch(r=>{throw i.runOutsideAngular(()=>t(r)),r}):n}catch(n){throw i.runOutsideAngular(()=>t(n)),n}}var um=null;function d1(t=[],i){return G.create({name:i,providers:[{provide:hl,useValue:"platform"},{provide:F_,useValue:new Set([()=>um=null])},...t]})}function u1(t=[]){if(um)return um;let i=d1(t);return um=i,aD(),m1(i),i}function m1(t){let i=t.get(Uu,null);xt(t,()=>{i?.forEach(e=>e())})}var f1=1e4;var y9=f1-1e3;var xe=(()=>{class t{static __NG_ELEMENT_ID__=h1}return t})();function h1(t){return p1(Et(),ie(),(t&16)===16)}function p1(t,i,e){if(Di(t)&&!e){let n=Nn(t.index,i);return new Br(n,n)}else if(t.type&175){let n=i[en];return new Br(n,i)}return null}function VD(t){let{rootComponent:i,appProviders:e,platformProviders:n,platformRef:r}=t;Ve(Ee.BootstrapApplicationStart);try{let o=r?.injector??u1(n),a=[SD(),I0,...e||[]],s=new Il({providers:a,parent:o,debugName:"",runEnvironmentInitializers:!1});return s1({r3Injector:s.injector,platformInjector:o,rootComponent:i})}catch(o){return Promise.reject(o)}finally{Ve(Ee.BootstrapApplicationEnd)}}function Z(t){return typeof t=="boolean"?t:t!=null&&t!=="false"}function si(t,i=NaN){return!isNaN(parseFloat(t))&&!isNaN(Number(t))?Number(t):i}var N_=Symbol("NOT_SET"),BD=new Set,g1=ne(C({},Ys),{kind:"afterRenderEffectPhase",consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!0,value:N_,cleanup:null,consumerMarkedDirty(){if(this.sequence.impl.executing){if(this.sequence.lastPhase===null||this.sequence.lastPhase<this.phase)return;this.sequence.erroredOrDestroyed=!0}this.sequence.scheduler.notify(7)},phaseFn(t){if(this.sequence.lastPhase=this.phase,!this.dirty)return this.signal;if(this.dirty=!1,this.value!==N_&&!ua(this))return this.signal;try{for(let r of this.cleanup??BD)r()}finally{this.cleanup?.clear()}let i=[];t!==void 0&&i.push(t),i.push(this.registerCleanupFn);let e=xr(this),n;try{n=this.userFn.apply(null,i)}finally{uo(this,e)}return(this.value===N_||!this.equal(this.value,n))&&(this.value=n,this.version++),this.signal}}),P_=class extends El{scheduler;lastPhase=null;nodes=[void 0,void 0,void 0,void 0];onDestroyFns=null;constructor(i,e,n,r,o,a=null){super(i,[void 0,void 0,void 0,void 0],n,!1,o.get(jt),a),this.scheduler=r;for(let s of f_){let l=e[s];if(l===void 0)continue;let d=Object.create(g1);d.sequence=this,d.phase=s,d.userFn=l,d.dirty=!0,d.signal=()=>(Dr(d),d.value),d.signal[ht]=d,d.registerCleanupFn=u=>(d.cleanup??=new Set).add(u),this.nodes[s]=d,this.hooks[s]=u=>d.phaseFn(u)}}afterRun(){super.afterRun(),this.lastPhase=null}destroy(){if(this.onDestroyFns!==null)for(let i of this.onDestroyFns)i();super.destroy();for(let i of this.nodes)if(i)try{for(let e of i.cleanup??BD)e()}finally{Er(i)}}};function jD(t,i){let e=i?.injector??c(G),n=e.get(vi),r=e.get(Qu),o=e.get(ni,null,{optional:!0});r.impl??=e.get(h_);let a=t;typeof a=="function"&&(a={mixedReadWrite:t});let s=e.get(Aa,null,{optional:!0}),l=new P_(r.impl,[a.earlyRead,a.write,a.mixedReadWrite,a.read],s?.view,n,e,o?.snapshot(null));return r.impl.register(l),l}function hm(t,i){let e=bi(t),n=i.elementInjector||xa();return new jr(e).create(n,i.projectableNodes,i.hostElement,i.environmentInjector,i.directives,i.bindings)}function HD(t){let i=bi(t);if(!i)return null;let e=new jr(i);return{get selector(){return e.selector},get type(){return e.componentType},get inputs(){return e.inputs},get outputs(){return e.outputs},get ngContentSelectors(){return e.ngContentSelectors},get isStandalone(){return i.standalone},get isSignal(){return i.signals}}}var UD=null;function Pn(){return UD}function L_(t){UD??=t}var $l=class{},dr=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:()=>c(zD),providedIn:"platform"})}return t})(),V_=new y(""),zD=(()=>{class t extends dr{_location;_history;_doc=c(Y);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return Pn().getBaseHref(this._doc)}onPopState(e){let n=Pn().getGlobalEventTarget(this._doc,"window");return n.addEventListener("popstate",e,!1),()=>n.removeEventListener("popstate",e)}onHashChange(e){let n=Pn().getGlobalEventTarget(this._doc,"window");return n.addEventListener("hashchange",e,!1),()=>n.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,n,r){this._history.pushState(e,n,r)}replaceState(e,n,r){this._history.replaceState(e,n,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:()=>new t,providedIn:"platform"})}return t})();function pm(t,i){return t?i?t.endsWith("/")?i.startsWith("/")?t+i.slice(1):t+i:i.startsWith("/")?t+i:`${t}/${i}`:t:i}function $D(t){let i=t.search(/#|\?|$/);return t[i-1]==="/"?t.slice(0,i-1)+t.slice(i):t}function li(t){return t&&t[0]!=="?"?`?${t}`:t}var ur=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:()=>c(_m),providedIn:"root"})}return t})(),gm=new y(""),_m=(()=>{class t extends ur{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,n){super(),this._platformLocation=e,this._baseHref=n??this._platformLocation.getBaseHrefFromDOM()??c(Y).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return pm(this._baseHref,e)}path(e=!1){let n=this._platformLocation.pathname+li(this._platformLocation.search),r=this._platformLocation.hash;return r&&e?`${n}${r}`:n}pushState(e,n,r,o){let a=this.prepareExternalUrl(r+li(o));this._platformLocation.pushState(e,n,a)}replaceState(e,n,r,o){let a=this.prepareExternalUrl(r+li(o));this._platformLocation.replaceState(e,n,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(n){return new(n||t)(W(dr),W(gm,8))};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Ni=(()=>{class t{_subject=new S;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let n=this._locationStrategy.getBaseHref();this._basePath=b1($D(WD(n))),this._locationStrategy.onPopState(r=>{this._subject.next({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,n=""){return this.path()==this.normalize(e+li(n))}normalize(e){return t.stripTrailingSlash(v1(this._basePath,WD(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,n="",r=null){this._locationStrategy.pushState(r,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+li(n)),r)}replaceState(e,n="",r=null){this._locationStrategy.replaceState(r,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+li(n)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(n=>{this._notifyUrlChangeListeners(n.url,n.state)}),()=>{let n=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(n,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",n){this._urlChangeListeners.forEach(r=>r(e,n))}subscribe(e,n,r){return this._subject.subscribe({next:e,error:n??void 0,complete:r??void 0})}static normalizeQueryParams=li;static joinWithSlash=pm;static stripTrailingSlash=$D;static \u0275fac=function(n){return new(n||t)(W(ur))};static \u0275prov=b({token:t,factory:()=>_1(),providedIn:"root"})}return t})();function _1(){return new Ni(W(ur))}function v1(t,i){if(!t||!i.startsWith(t))return i;let e=i.substring(t.length);return e===""||["/",";","?","#"].includes(e[0])?e:i}function WD(t){return t.replace(/\/index.html$/,"")}function b1(t){if(new RegExp("^(https?:)?//").test(t)){let[,e]=t.split(/\/\/[^\/]+/);return e}return t}var H_=(()=>{class t extends ur{_platformLocation;_baseHref="";_removeListenerFns=[];constructor(e,n){super(),this._platformLocation=e,n!=null&&(this._baseHref=n)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}path(e=!1){let n=this._platformLocation.hash??"#";return n.length>0?n.substring(1):n}prepareExternalUrl(e){let n=pm(this._baseHref,e);return n.length>0?"#"+n:n}pushState(e,n,r,o){let a=this.prepareExternalUrl(r+li(o))||this._platformLocation.pathname;this._platformLocation.pushState(e,n,a)}replaceState(e,n,r,o){let a=this.prepareExternalUrl(r+li(o))||this._platformLocation.pathname;this._platformLocation.replaceState(e,n,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(n){return new(n||t)(W(dr),W(gm,8))};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})();var U_=(()=>{class t{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;injector=c(G);constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let n=this._viewContainerRef;if(this._viewRef&&n.remove(n.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let r=this._createContextForwardProxy();this._viewRef=n.createEmbeddedView(this.ngTemplateOutlet,r,{injector:this._getInjector()})}}_getInjector(){return this.ngTemplateOutletInjector==="outlet"?this.injector:this.ngTemplateOutletInjector??void 0}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,n,r)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,n,r):!1,get:(e,n,r)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,n,r)}})}static \u0275fac=function(n){return new(n||t)(we(St))};static \u0275dir=N({type:t,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[Be]})}return t})();function C1(t,i){return new L(2100,!1)}var B_=class{createSubscription(i,e,n){return ot(()=>i.subscribe({next:e,error:n}))}dispose(i){ot(()=>i.unsubscribe())}},j_=class{createSubscription(i,e,n){return i.then(r=>e?.(r),r=>n?.(r)),{unsubscribe:()=>{e=null,n=null}}}dispose(i){i.unsubscribe()}},w1=new j_,D1=new B_,z_=(()=>{class t{_ref;_latestValue=null;markForCheckOnValueUpdate=!0;_subscription=null;_obj=null;_strategy=null;applicationErrorHandler=c(Dn);constructor(e){this._ref=e}ngOnDestroy(){this._subscription&&this._dispose(),this._ref=null}transform(e){if(!this._obj){if(e)try{this.markForCheckOnValueUpdate=!1,this._subscribe(e)}finally{this.markForCheckOnValueUpdate=!0}return this._latestValue}return e!==this._obj?(this._dispose(),this.transform(e)):this._latestValue}_subscribe(e){this._obj=e,this._strategy=this._selectStrategy(e),this._subscription=this._strategy.createSubscription(e,n=>this._updateLatestValue(e,n),n=>this.applicationErrorHandler(n))}_selectStrategy(e){if(rr(e))return w1;if(om(e))return D1;throw C1(t,e)}_dispose(){this._strategy.dispose(this._subscription),this._latestValue=null,this._subscription=null,this._obj=null}_updateLatestValue(e,n){e===this._obj&&(this._latestValue=n,this.markForCheckOnValueUpdate&&this._ref?.markForCheck())}static \u0275fac=function(n){return new(n||t)(we(xe,16))};static \u0275pipe=M_({name:"async",type:t,pure:!1})}return t})();var zr=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=$({type:t});static \u0275inj=z({})}return t})();function Wl(t,i){i=encodeURIComponent(i);for(let e of t.split(";")){let n=e.indexOf("="),[r,o]=n==-1?[e,""]:[e.slice(0,n),e.slice(n+1)];if(r.trim()===i)return decodeURIComponent(o)}return null}var Bo=class{};var W_="browser";function GD(t){return t===W_}var G_=(()=>{class t{static \u0275prov=b({token:t,providedIn:"root",factory:()=>new $_(c(Y),window)})}return t})(),$_=class{document;window;offset=()=>[0,0];constructor(i,e){this.document=i,this.window=e}setOffset(i){Array.isArray(i)?this.offset=()=>i:this.offset=i}getScrollPosition(){return[this.window.scrollX,this.window.scrollY]}scrollToPosition(i,e){this.window.scrollTo(ne(C({},e),{left:i[0],top:i[1]}))}scrollToAnchor(i,e){let n=E1(this.document,i);n&&(this.scrollToElement(n,e),n.focus())}setHistoryScrollRestoration(i){try{this.window.history.scrollRestoration=i}catch{console.warn(An(2400,!1))}}scrollToElement(i,e){let n=i.getBoundingClientRect(),r=n.left+this.window.pageXOffset,o=n.top+this.window.pageYOffset,a=this.offset();this.window.scrollTo(ne(C({},e),{left:r-a[0],top:o-a[1]}))}};function E1(t,i){let e=t.getElementById(i)||t.getElementsByName(i)[0];if(e)return e;if(typeof t.createTreeWalker=="function"&&t.body&&typeof t.body.attachShadow=="function"){let n=t.createTreeWalker(t.body,NodeFilter.SHOW_ELEMENT),r=n.currentNode;for(;r;){let o=r.shadowRoot;if(o){let a=o.getElementById(i)||o.querySelector(`[name="${i}"]`);if(a)return a}r=n.nextNode()}}return null}var Gl=class{_doc;constructor(i){this._doc=i}manager},vm=(()=>{class t extends Gl{constructor(e){super(e)}supports(e){return!0}addEventListener(e,n,r,o){return e.addEventListener(n,r,o),()=>this.removeEventListener(e,n,r,o)}removeEventListener(e,n,r,o){return e.removeEventListener(n,r,o)}static \u0275fac=function(n){return new(n||t)(W(Y))};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})(),Cm=new y(""),Z_=(()=>{class t{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,n){this._zone=n,e.forEach(a=>{a.manager=this});let r=e.filter(a=>!(a instanceof vm));this._plugins=r.slice().reverse();let o=e.find(a=>a instanceof vm);o&&this._plugins.push(o)}addEventListener(e,n,r,o){return this._findPluginFor(n).addEventListener(e,n,r,o)}getZone(){return this._zone}_findPluginFor(e){let n=this._eventNameToPlugin.get(e);if(n)return n;if(n=this._plugins.find(o=>o.supports(e)),!n)throw new L(5101,!1);return this._eventNameToPlugin.set(e,n),n}static \u0275fac=function(n){return new(n||t)(W(Cm),W(V))};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})(),q_="ng-app-id";function qD(t){for(let i of t)i.remove()}function YD(t,i){let e=i.createElement("style");return e.textContent=t,e}function M1(t,i,e,n){let r=t.head?.querySelectorAll(`style[${q_}="${i}"],link[${q_}="${i}"]`);if(r)for(let o of r)o.removeAttribute(q_),o instanceof HTMLLinkElement?n.set(o.href.slice(o.href.lastIndexOf("/")+1),{usage:0,elements:[o]}):o.textContent&&e.set(o.textContent,{usage:0,elements:[o]})}function Q_(t,i){let e=i.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",t),e}var K_=(()=>{class t{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(e,n,r,o={}){this.doc=e,this.appId=n,this.nonce=r,M1(e,n,this.inline,this.external),this.hosts.add(e.head)}addStyles(e,n){for(let r of e)this.addUsage(r,this.inline,YD);n?.forEach(r=>this.addUsage(r,this.external,Q_))}removeStyles(e,n){for(let r of e)this.removeUsage(r,this.inline);n?.forEach(r=>this.removeUsage(r,this.external))}addUsage(e,n,r){let o=n.get(e);o?o.usage++:n.set(e,{usage:1,elements:[...this.hosts].map(a=>this.addElement(a,r(e,this.doc)))})}removeUsage(e,n){let r=n.get(e);r&&(r.usage--,r.usage<=0&&(qD(r.elements),n.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])qD(e);this.hosts.clear()}addHost(e){this.hosts.add(e);for(let[n,{elements:r}]of this.inline)r.push(this.addElement(e,YD(n,this.doc)));for(let[n,{elements:r}]of this.external)r.push(this.addElement(e,Q_(n,this.doc)))}removeHost(e){this.hosts.delete(e)}addElement(e,n){return this.nonce&&n.setAttribute("nonce",this.nonce),e.appendChild(n)}static \u0275fac=function(n){return new(n||t)(W(Y),W(Hr),W(za,8),W(Lo))};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})(),Y_={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},X_=/%COMP%/g;var ZD="%COMP%",S1=`_nghost-${ZD}`,I1=`_ngcontent-${ZD}`,T1=!0,k1=new y("",{factory:()=>T1});function A1(t){return I1.replace(X_,t)}function R1(t){return S1.replace(X_,t)}function KD(t,i){return i.map(e=>e.replace(X_,t))}var J_=(()=>{class t{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;constructor(e,n,r,o,a,s,l=null,d=null){this.eventManager=e,this.sharedStylesHost=n,this.appId=r,this.removeStylesOnCompDestroy=o,this.doc=a,this.ngZone=s,this.nonce=l,this.tracingService=d,this.defaultRenderer=new ql(e,a,s,this.tracingService)}createRenderer(e,n){if(!e||!n)return this.defaultRenderer;let r=this.getOrCreateRenderer(e,n);return r instanceof ym?r.applyToHost(e):r instanceof Yl&&r.applyStyles(),r}getOrCreateRenderer(e,n){let r=this.rendererByCompId,o=r.get(n.id);if(!o){let a=this.doc,s=this.ngZone,l=this.eventManager,d=this.sharedStylesHost,u=this.removeStylesOnCompDestroy,f=this.tracingService;switch(n.encapsulation){case ei.Emulated:o=new ym(l,d,n,this.appId,u,a,s,f);break;case ei.ShadowDom:return new bm(l,e,n,a,s,this.nonce,f,d);case ei.ExperimentalIsolatedShadowDom:return new bm(l,e,n,a,s,this.nonce,f);default:o=new Yl(l,d,n,u,a,s,f);break}r.set(n.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(n){return new(n||t)(W(Z_),W(K_),W(Hr),W(k1),W(Y),W(V),W(za),W(ni,8))};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})(),ql=class{eventManager;doc;ngZone;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(i,e,n,r){this.eventManager=i,this.doc=e,this.ngZone=n,this.tracingService=r}destroy(){}destroyNode=null;createElement(i,e){return e?this.doc.createElementNS(Y_[e]||e,i):this.doc.createElement(i)}createComment(i){return this.doc.createComment(i)}createText(i){return this.doc.createTextNode(i)}appendChild(i,e){(QD(i)?i.content:i).appendChild(e)}insertBefore(i,e,n){i&&(QD(i)?i.content:i).insertBefore(e,n)}removeChild(i,e){e.remove()}selectRootElement(i,e){let n=typeof i=="string"?this.doc.querySelector(i):i;if(!n)throw new L(-5104,!1);return e||(n.textContent=""),n}parentNode(i){return i.parentNode}nextSibling(i){return i.nextSibling}setAttribute(i,e,n,r){if(r){e=r+":"+e;let o=Y_[r];o?i.setAttributeNS(o,e,n):i.setAttribute(e,n)}else i.setAttribute(e,n)}removeAttribute(i,e,n){if(n){let r=Y_[n];r?i.removeAttributeNS(r,e):i.removeAttribute(`${n}:${e}`)}else i.removeAttribute(e)}addClass(i,e){i.classList.add(e)}removeClass(i,e){i.classList.remove(e)}setStyle(i,e,n,r){r&(Ti.DashCase|Ti.Important)?i.style.setProperty(e,n,r&Ti.Important?"important":""):i.style[e]=n}removeStyle(i,e,n){n&Ti.DashCase?i.style.removeProperty(e):i.style[e]=""}setProperty(i,e,n){i!=null&&(i[e]=n)}setValue(i,e){i.nodeValue=e}listen(i,e,n,r){if(typeof i=="string"&&(i=Pn().getGlobalEventTarget(this.doc,i),!i))throw new L(5102,!1);let o=this.decoratePreventDefault(n);return this.tracingService?.wrapEventListener&&(o=this.tracingService.wrapEventListener(i,e,o)),this.eventManager.addEventListener(i,e,o,r)}decoratePreventDefault(i){return e=>{if(e==="__ngUnwrap__")return i;i(e)===!1&&e.preventDefault()}}};function QD(t){return t.tagName==="TEMPLATE"&&t.content!==void 0}var bm=class extends ql{hostEl;sharedStylesHost;shadowRoot;constructor(i,e,n,r,o,a,s,l){super(i,r,o,s),this.hostEl=e,this.sharedStylesHost=l,this.shadowRoot=e.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let d=n.styles;d=KD(n.id,d);for(let f of d){let _=document.createElement("style");a&&_.setAttribute("nonce",a),_.textContent=f,this.shadowRoot.appendChild(_)}let u=n.getExternalStyles?.();if(u)for(let f of u){let _=Q_(f,r);a&&_.setAttribute("nonce",a),this.shadowRoot.appendChild(_)}}nodeOrShadowRoot(i){return i===this.hostEl?this.shadowRoot:i}appendChild(i,e){return super.appendChild(this.nodeOrShadowRoot(i),e)}insertBefore(i,e,n){return super.insertBefore(this.nodeOrShadowRoot(i),e,n)}removeChild(i,e){return super.removeChild(null,e)}parentNode(i){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(i)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},Yl=class extends ql{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(i,e,n,r,o,a,s,l){super(i,o,a,s),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=r;let d=n.styles;this.styles=l?KD(l,d):d,this.styleUrls=n.getExternalStyles?.(l)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&Fo.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},ym=class extends Yl{contentAttr;hostAttr;constructor(i,e,n,r,o,a,s,l){let d=r+"-"+n.id;super(i,e,n,o,a,s,l,d),this.contentAttr=A1(d),this.hostAttr=R1(d)}applyToHost(i){this.applyStyles(),this.setAttribute(i,this.hostAttr,"")}createElement(i,e){let n=super.createElement(i,e);return super.setAttribute(n,this.contentAttr,""),n}};var wm=class t extends $l{supportsDOMEvents=!0;static makeCurrent(){L_(new t)}onAndCancel(i,e,n,r){return i.addEventListener(e,n,r),()=>{i.removeEventListener(e,n,r)}}dispatchEvent(i,e){i.dispatchEvent(e)}remove(i){i.remove()}createElement(i,e){return e=e||this.getDefaultDocument(),e.createElement(i)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(i){return i.nodeType===Node.ELEMENT_NODE}isShadowRoot(i){return i instanceof DocumentFragment}getGlobalEventTarget(i,e){return e==="window"?window:e==="document"?i:e==="body"?i.body:null}getBaseHref(i){let e=O1();return e==null?null:N1(e)}resetBaseElement(){Ql=null}getUserAgent(){return window.navigator.userAgent}getCookie(i){return Wl(document.cookie,i)}},Ql=null;function O1(){return Ql=Ql||document.head.querySelector("base"),Ql?Ql.getAttribute("href"):null}function N1(t){return new URL(t,document.baseURI).pathname}var F1=(()=>{class t{build(){return new XMLHttpRequest}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})(),XD=["alt","control","meta","shift"],P1={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},L1={alt:t=>t.altKey,control:t=>t.ctrlKey,meta:t=>t.metaKey,shift:t=>t.shiftKey},JD=(()=>{class t extends Gl{constructor(e){super(e)}supports(e){return t.parseEventName(e)!=null}addEventListener(e,n,r,o){let a=t.parseEventName(n),s=t.eventCallback(a.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Pn().onAndCancel(e,a.domEventName,s,o))}static parseEventName(e){let n=e.toLowerCase().split("."),r=n.shift();if(n.length===0||!(r==="keydown"||r==="keyup"))return null;let o=t._normalizeKey(n.pop()),a="",s=n.indexOf("code");if(s>-1&&(n.splice(s,1),a="code."),XD.forEach(d=>{let u=n.indexOf(d);u>-1&&(n.splice(u,1),a+=d+".")}),a+=o,n.length!=0||o.length===0)return null;let l={};return l.domEventName=r,l.fullKey=a,l}static matchEventFullKeyCode(e,n){let r=P1[e.key]||e.key,o="";return n.indexOf("code.")>-1&&(r=e.code,o="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),XD.forEach(a=>{if(a!==r){let s=L1[a];s(e)&&(o+=a+".")}}),o+=r,o===n)}static eventCallback(e,n,r){return o=>{t.matchEventFullKeyCode(o,e)&&r.runGuarded(()=>n(o))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(n){return new(n||t)(W(Y))};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})();async function ev(t,i,e){let n=C({rootComponent:t},V1(i,e));return VD(n)}function V1(t,i){return{platformRef:i?.platformRef,appProviders:[...z1,...t?.providers??[]],platformProviders:U1}}function B1(){wm.makeCurrent()}function j1(){return new qt}function H1(){return t_(document),document}var U1=[{provide:Lo,useValue:W_},{provide:Uu,useValue:B1,multi:!0},{provide:Y,useFactory:H1}];var z1=[{provide:hl,useValue:"root"},{provide:qt,useFactory:j1},{provide:Cm,useClass:vm,multi:!0},{provide:Cm,useClass:JD,multi:!0},J_,K_,Z_,{provide:_t,useExisting:J_},{provide:Bo,useClass:F1},[]];var $r=class t{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(i){i?typeof i=="string"?this.lazyInit=()=>{this.headers=new Map,i.split(`
`).forEach(e=>{let n=e.indexOf(":");if(n>0){let r=e.slice(0,n),o=e.slice(n+1).trim();this.addHeaderEntry(r,o)}})}:typeof Headers<"u"&&i instanceof Headers?(this.headers=new Map,i.forEach((e,n)=>{this.addHeaderEntry(n,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(i).forEach(([e,n])=>{this.setHeaderEntries(e,n)})}:this.headers=new Map}has(i){return this.init(),this.headers.has(i.toLowerCase())}get(i){this.init();let e=this.headers.get(i.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(i){return this.init(),this.headers.get(i.toLowerCase())||null}append(i,e){return this.clone({name:i,value:e,op:"a"})}set(i,e){return this.clone({name:i,value:e,op:"s"})}delete(i,e){return this.clone({name:i,value:e,op:"d"})}maybeSetNormalizedName(i,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,i)}init(){this.lazyInit&&(this.lazyInit instanceof t?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(i=>this.applyUpdate(i)),this.lazyUpdate=null))}copyFrom(i){i.init(),Array.from(i.headers.keys()).forEach(e=>{this.headers.set(e,i.headers.get(e)),this.normalizedNames.set(e,i.normalizedNames.get(e))})}clone(i){let e=new t;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof t?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([i]),e}applyUpdate(i){let e=i.name.toLowerCase();switch(i.op){case"a":case"s":let n=i.value;if(typeof n=="string"&&(n=[n]),n.length===0)return;this.maybeSetNormalizedName(i.name,e);let r=(i.op==="a"?this.headers.get(e):void 0)||[];r.push(...n),this.headers.set(e,r);break;case"d":let o=i.value;if(!o)this.headers.delete(e),this.normalizedNames.delete(e);else{let a=this.headers.get(e);if(!a)return;a=a.filter(s=>o.indexOf(s)===-1),a.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,a)}break}}addHeaderEntry(i,e){let n=i.toLowerCase();this.maybeSetNormalizedName(i,n),this.headers.has(n)?this.headers.get(n).push(e):this.headers.set(n,[e])}setHeaderEntries(i,e){let n=(Array.isArray(e)?e:[e]).map(o=>o.toString()),r=i.toLowerCase();this.headers.set(r,n),this.maybeSetNormalizedName(i,r)}forEach(i){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>i(this.normalizedNames.get(e),this.headers.get(e)))}};var xm=class{map=new Map;set(i,e){return this.map.set(i,e),this}get(i){return this.map.has(i)||this.map.set(i,i.defaultValue()),this.map.get(i)}delete(i){return this.map.delete(i),this}has(i){return this.map.has(i)}keys(){return this.map.keys()}},Em=class{encodeKey(i){return ex(i)}encodeValue(i){return ex(i)}decodeKey(i){return decodeURIComponent(i)}decodeValue(i){return decodeURIComponent(i)}};function $1(t,i){let e=new Map;return t.length>0&&t.replace(/^\?/,"").split("&").forEach(r=>{let o=r.indexOf("="),[a,s]=o==-1?[i.decodeKey(r),""]:[i.decodeKey(r.slice(0,o)),i.decodeValue(r.slice(o+1))],l=e.get(a)||[];l.push(s),e.set(a,l)}),e}var W1=/%(\d[a-f0-9])/gi,G1={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function ex(t){return encodeURIComponent(t).replace(W1,(i,e)=>G1[e]??i)}function Dm(t){return`${t}`}var Pt=class t{map;encoder;updates=null;cloneFrom=null;constructor(i={}){if(this.encoder=i.encoder||new Em,i.fromString){if(i.fromObject)throw new L(2805,!1);this.map=$1(i.fromString,this.encoder)}else i.fromObject?(this.map=new Map,Object.keys(i.fromObject).forEach(e=>{let n=i.fromObject[e],r=Array.isArray(n)?n.map(Dm):[Dm(n)];this.map.set(e,r)})):this.map=null}has(i){return this.init(),this.map.has(i)}get(i){this.init();let e=this.map.get(i);return e?e[0]:null}getAll(i){return this.init(),this.map.get(i)||null}keys(){return this.init(),Array.from(this.map.keys())}append(i,e){return this.clone({param:i,value:e,op:"a"})}appendAll(i){let e=[];return Object.keys(i).forEach(n=>{let r=i[n];Array.isArray(r)?r.forEach(o=>{e.push({param:n,value:o,op:"a"})}):e.push({param:n,value:r,op:"a"})}),this.clone(e)}set(i,e){return this.clone({param:i,value:e,op:"s"})}delete(i,e){return this.clone({param:i,value:e,op:"d"})}toString(){return this.init(),this.keys().map(i=>{let e=this.encoder.encodeKey(i);return this.map.get(i).map(n=>e+"="+this.encoder.encodeValue(n)).join("&")}).filter(i=>i!=="").join("&")}clone(i){let e=new t({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(i),e}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(i=>this.map.set(i,this.cloneFrom.map.get(i))),this.updates.forEach(i=>{switch(i.op){case"a":case"s":let e=(i.op==="a"?this.map.get(i.param):void 0)||[];e.push(Dm(i.value)),this.map.set(i.param,e);break;case"d":if(i.value!==void 0){let n=this.map.get(i.param)||[],r=n.indexOf(Dm(i.value));r!==-1&&n.splice(r,1),n.length>0?this.map.set(i.param,n):this.map.delete(i.param)}else{this.map.delete(i.param);break}}}),this.cloneFrom=this.updates=null)}};function q1(t){switch(t){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function tx(t){return typeof ArrayBuffer<"u"&&t instanceof ArrayBuffer}function nx(t){return typeof Blob<"u"&&t instanceof Blob}function ix(t){return typeof FormData<"u"&&t instanceof FormData}function Y1(t){return typeof URLSearchParams<"u"&&t instanceof URLSearchParams}var rx="Content-Type",ox="Accept",sx="text/plain",lx="application/json",Q1=`${lx}, ${sx}, */*`,qa=class t{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(i,e,n,r){this.url=e,this.method=i.toUpperCase();let o;if(q1(this.method)||r?(this.body=n!==void 0?n:null,o=r):o=n,o){if(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,this.keepalive=!!o.keepalive,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),o.priority&&(this.priority=o.priority),o.cache&&(this.cache=o.cache),o.credentials&&(this.credentials=o.credentials),typeof o.timeout=="number"){if(o.timeout<1||!Number.isInteger(o.timeout))throw new L(2822,"");this.timeout=o.timeout}o.mode&&(this.mode=o.mode),o.redirect&&(this.redirect=o.redirect),o.integrity&&(this.integrity=o.integrity),o.referrer&&(this.referrer=o.referrer),o.referrerPolicy&&(this.referrerPolicy=o.referrerPolicy),this.transferCache=o.transferCache}if(this.headers??=new $r,this.context??=new xm,!this.params)this.params=new Pt,this.urlWithParams=e;else{let a=this.params.toString();if(a.length===0)this.urlWithParams=e;else{let s=e.indexOf("?"),l=s===-1?"?":s<e.length-1?"&":"";this.urlWithParams=e+l+a}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||tx(this.body)||nx(this.body)||ix(this.body)||Y1(this.body)?this.body:this.body instanceof Pt?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||ix(this.body)?null:nx(this.body)?this.body.type||null:tx(this.body)?null:typeof this.body=="string"?sx:this.body instanceof Pt?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?lx:null}clone(i={}){let e=i.method||this.method,n=i.url||this.url,r=i.responseType||this.responseType,o=i.keepalive??this.keepalive,a=i.priority||this.priority,s=i.cache||this.cache,l=i.mode||this.mode,d=i.redirect||this.redirect,u=i.credentials||this.credentials,f=i.referrer||this.referrer,_=i.integrity||this.integrity,v=i.referrerPolicy||this.referrerPolicy,w=i.transferCache??this.transferCache,P=i.timeout??this.timeout,U=i.body!==void 0?i.body:this.body,Q=i.withCredentials??this.withCredentials,Ae=i.reportProgress??this.reportProgress,Rt=i.headers||this.headers,Ot=i.params||this.params,$s=i.context??this.context;return i.setHeaders!==void 0&&(Rt=Object.keys(i.setHeaders).reduce((Ws,lo)=>Ws.set(lo,i.setHeaders[lo]),Rt)),i.setParams&&(Ot=Object.keys(i.setParams).reduce((Ws,lo)=>Ws.set(lo,i.setParams[lo]),Ot)),new t(e,n,U,{params:Ot,headers:Rt,context:$s,reportProgress:Ae,responseType:r,withCredentials:Q,transferCache:w,keepalive:o,cache:s,priority:a,timeout:P,mode:l,redirect:d,credentials:u,referrer:f,integrity:_,referrerPolicy:v})}},jo=(function(t){return t[t.Sent=0]="Sent",t[t.UploadProgress=1]="UploadProgress",t[t.ResponseHeader=2]="ResponseHeader",t[t.DownloadProgress=3]="DownloadProgress",t[t.Response=4]="Response",t[t.User=5]="User",t})(jo||{}),Qa=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(i,e=200,n="OK"){this.headers=i.headers||new $r,this.status=i.status!==void 0?i.status:e,this.statusText=i.statusText||n,this.url=i.url||null,this.redirected=i.redirected,this.responseType=i.responseType,this.ok=this.status>=200&&this.status<300}},Mm=class t extends Qa{constructor(i={}){super(i)}type=jo.ResponseHeader;clone(i={}){return new t({headers:i.headers||this.headers,status:i.status!==void 0?i.status:this.status,statusText:i.statusText||this.statusText,url:i.url||this.url||void 0})}},Zl=class t extends Qa{body;constructor(i={}){super(i),this.body=i.body!==void 0?i.body:null}type=jo.Response;clone(i={}){return new t({body:i.body!==void 0?i.body:this.body,headers:i.headers||this.headers,status:i.status!==void 0?i.status:this.status,statusText:i.statusText||this.statusText,url:i.url||this.url||void 0,redirected:i.redirected??this.redirected,responseType:i.responseType??this.responseType})}},Ya=class extends Qa{name="HttpErrorResponse";message;error;ok=!1;constructor(i){super(i,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${i.url||"(unknown url)"}`:this.message=`Http failure response for ${i.url||"(unknown url)"}: ${i.status} ${i.statusText}`,this.error=i.error||null}},Z1=200,K1=204;var X1=new y("");var J1=/^\)\]\}',?\n/;var nv=(()=>{class t{xhrFactory;tracingService=c(ni,{optional:!0});constructor(e){this.xhrFactory=e}maybePropagateTrace(e){return this.tracingService?.propagate?this.tracingService.propagate(e):e}handle(e){if(e.method==="JSONP")throw new L(-2800,!1);let n=this.xhrFactory;return q(null).pipe(pt(()=>new se(o=>{let a=n.build();if(a.open(e.method,e.urlWithParams),e.withCredentials&&(a.withCredentials=!0),e.headers.forEach((U,Q)=>a.setRequestHeader(U,Q.join(","))),e.headers.has(ox)||a.setRequestHeader(ox,Q1),!e.headers.has(rx)){let U=e.detectContentTypeHeader();U!==null&&a.setRequestHeader(rx,U)}if(e.timeout&&(a.timeout=e.timeout),e.responseType){let U=e.responseType.toLowerCase();a.responseType=U!=="json"?U:"text"}let s=e.serializeBody(),l=null,d=()=>{if(l!==null)return l;let U=a.statusText||"OK",Q=new $r(a.getAllResponseHeaders()),Ae=a.responseURL||e.url;return l=new Mm({headers:Q,status:a.status,statusText:U,url:Ae}),l},u=this.maybePropagateTrace(()=>{let{headers:U,status:Q,statusText:Ae,url:Rt}=d(),Ot=null;Q!==K1&&(Ot=typeof a.response>"u"?a.responseText:a.response),Q===0&&(Q=Ot?Z1:0);let $s=Q>=200&&Q<300;if(e.responseType==="json"&&typeof Ot=="string"){let Ws=Ot;Ot=Ot.replace(J1,"");try{Ot=Ot!==""?JSON.parse(Ot):null}catch(lo){Ot=Ws,$s&&($s=!1,Ot={error:lo,text:Ot})}}$s?(o.next(new Zl({body:Ot,headers:U,status:Q,statusText:Ae,url:Rt||void 0})),o.complete()):o.error(new Ya({error:Ot,headers:U,status:Q,statusText:Ae,url:Rt||void 0}))}),f=this.maybePropagateTrace(U=>{let{url:Q}=d(),Ae=new Ya({error:U,status:a.status||0,statusText:a.statusText||"Unknown Error",url:Q||void 0});o.error(Ae)}),_=f;e.timeout&&(_=this.maybePropagateTrace(U=>{let{url:Q}=d(),Ae=new Ya({error:new DOMException("Request timed out","TimeoutError"),status:a.status||0,statusText:a.statusText||"Request timeout",url:Q||void 0});o.error(Ae)}));let v=!1,w=this.maybePropagateTrace(U=>{v||(o.next(d()),v=!0);let Q={type:jo.DownloadProgress,loaded:U.loaded};U.lengthComputable&&(Q.total=U.total),e.responseType==="text"&&a.responseText&&(Q.partialText=a.responseText),o.next(Q)}),P=this.maybePropagateTrace(U=>{let Q={type:jo.UploadProgress,loaded:U.loaded};U.lengthComputable&&(Q.total=U.total),o.next(Q)});return a.addEventListener("load",u),a.addEventListener("error",f),a.addEventListener("timeout",_),a.addEventListener("abort",f),e.reportProgress&&(a.addEventListener("progress",w),s!==null&&a.upload&&a.upload.addEventListener("progress",P)),a.send(s),o.next({type:jo.Sent}),()=>{a.removeEventListener("error",f),a.removeEventListener("abort",f),a.removeEventListener("load",u),a.removeEventListener("timeout",_),e.reportProgress&&(a.removeEventListener("progress",w),s!==null&&a.upload&&a.upload.removeEventListener("progress",P)),a.readyState!==a.DONE&&a.abort()}})))}static \u0275fac=function(n){return new(n||t)(W(Bo))};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function cx(t,i){return i(t)}function eN(t,i){return(e,n)=>i.intercept(e,{handle:r=>t(r,n)})}function tN(t,i,e){return(n,r)=>xt(e,()=>i(n,o=>t(o,r)))}var Im=new y(""),iv=new y("",{factory:()=>[]}),dx=new y(""),rv=new y("",{factory:()=>!0});function nN(){let t=null;return(i,e)=>{t===null&&(t=(c(Im,{optional:!0})??[]).reduceRight(eN,cx));let n=c(Ra);if(c(rv)){let o=n.add();return t(i,e).pipe(kr(o))}else return t(i,e)}}var ov=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:function(n){let r=null;return n?r=new(n||t):r=W(nv),r},providedIn:"root"})}return t})();var Sm=(()=>{class t{backend;injector;chain=null;pendingTasks=c(Ra);contributeToStability=c(rv);constructor(e,n){this.backend=e,this.injector=n}handle(e){if(this.chain===null){let n=Array.from(new Set([...this.injector.get(iv),...this.injector.get(dx,[])]));this.chain=n.reduceRight((r,o)=>tN(r,o,this.injector),cx)}if(this.contributeToStability){let n=this.pendingTasks.add();return this.chain(e,r=>this.backend.handle(r)).pipe(kr(n))}else return this.chain(e,n=>this.backend.handle(n))}static \u0275fac=function(n){return new(n||t)(W(ov),W(Le))};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),av=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:function(n){let r=null;return n?r=new(n||t):r=W(Sm),r},providedIn:"root"})}return t})();function tv(t,i){return{body:i,headers:t.headers,context:t.context,observe:t.observe,params:t.params,reportProgress:t.reportProgress,responseType:t.responseType,withCredentials:t.withCredentials,credentials:t.credentials,transferCache:t.transferCache,timeout:t.timeout,keepalive:t.keepalive,priority:t.priority,cache:t.cache,mode:t.mode,redirect:t.redirect,integrity:t.integrity,referrer:t.referrer,referrerPolicy:t.referrerPolicy}}var bt=(()=>{class t{handler;constructor(e){this.handler=e}request(e,n,r={}){let o;if(e instanceof qa)o=e;else{let l;r.headers instanceof $r?l=r.headers:l=new $r(r.headers);let d;r.params&&(r.params instanceof Pt?d=r.params:d=new Pt({fromObject:r.params})),o=new qa(e,n,r.body!==void 0?r.body:null,{headers:l,context:r.context,params:d,reportProgress:r.reportProgress,responseType:r.responseType||"json",withCredentials:r.withCredentials,transferCache:r.transferCache,keepalive:r.keepalive,priority:r.priority,cache:r.cache,mode:r.mode,redirect:r.redirect,credentials:r.credentials,referrer:r.referrer,referrerPolicy:r.referrerPolicy,integrity:r.integrity,timeout:r.timeout})}let a=q(o).pipe(Tr(l=>this.handler.handle(l)));if(e instanceof qa||r.observe==="events")return a;let s=a.pipe(be(l=>l instanceof Zl));switch(r.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return s.pipe(le(l=>{if(l.body!==null&&!(l.body instanceof ArrayBuffer))throw new L(2806,!1);return l.body}));case"blob":return s.pipe(le(l=>{if(l.body!==null&&!(l.body instanceof Blob))throw new L(2807,!1);return l.body}));case"text":return s.pipe(le(l=>{if(l.body!==null&&typeof l.body!="string")throw new L(2808,!1);return l.body}));default:return s.pipe(le(l=>l.body))}case"response":return s;default:throw new L(2809,!1)}}delete(e,n={}){return this.request("DELETE",e,n)}get(e,n={}){return this.request("GET",e,n)}head(e,n={}){return this.request("HEAD",e,n)}jsonp(e,n){return this.request("JSONP",e,{params:new Pt().append(n,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,n={}){return this.request("OPTIONS",e,n)}patch(e,n,r={}){return this.request("PATCH",e,tv(r,n))}post(e,n,r={}){return this.request("POST",e,tv(r,n))}put(e,n,r={}){return this.request("PUT",e,tv(r,n))}static \u0275fac=function(n){return new(n||t)(W(av))};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var iN=new y("",{factory:()=>!0}),rN="XSRF-TOKEN",oN=new y("",{factory:()=>rN}),aN="X-XSRF-TOKEN",sN=new y("",{factory:()=>aN}),lN=(()=>{class t{cookieName=c(oN);doc=c(Y);lastCookieString="";lastToken=null;parseCount=0;getToken(){let e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=Wl(e,this.cookieName),this.lastCookieString=e),this.lastToken}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),ux=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:function(n){let r=null;return n?r=new(n||t):r=W(lN),r},providedIn:"root"})}return t})();function cN(t,i){if(!c(iN)||t.method==="GET"||t.method==="HEAD")return i(t);try{let r=c(dr).href,{origin:o}=new URL(r),{origin:a}=new URL(t.url,o);if(o!==a)return i(t)}catch{return i(t)}let e=c(ux).getToken(),n=c(sN);return e!=null&&!t.headers.has(n)&&(t=t.clone({headers:t.headers.set(n,e)})),i(t)}var sv=(function(t){return t[t.Interceptors=0]="Interceptors",t[t.LegacyInterceptors=1]="LegacyInterceptors",t[t.CustomXsrfConfiguration=2]="CustomXsrfConfiguration",t[t.NoXsrfProtection=3]="NoXsrfProtection",t[t.JsonpSupport=4]="JsonpSupport",t[t.RequestsMadeViaParent=5]="RequestsMadeViaParent",t[t.Fetch=6]="Fetch",t})(sv||{});function dN(t,i){return{\u0275kind:t,\u0275providers:i}}function lv(...t){let i=[bt,Sm,{provide:av,useExisting:Sm},{provide:ov,useFactory:()=>c(X1,{optional:!0})??c(nv)},{provide:iv,useValue:cN,multi:!0}];for(let e of t)i.push(...e.\u0275providers);return yi(i)}var ax=new y("");function cv(){return dN(sv.LegacyInterceptors,[{provide:ax,useFactory:nN},{provide:iv,useExisting:ax,multi:!0}])}var mx=(()=>{class t{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(n){return new(n||t)(W(Y))};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Kl=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:function(n){let r=null;return n?r=new(n||t):r=W(mN),r},providedIn:"root"})}return t})(),mN=(()=>{class t extends Kl{_doc;constructor(e){super(),this._doc=e}sanitize(e,n){if(n==null)return null;switch(e){case Ht.NONE:return n;case Ht.HTML:return Vo(n,"HTML")?ti(n):s_(this._doc,String(n)).toString();case Ht.STYLE:return Vo(n,"Style")?ti(n):n;case Ht.SCRIPT:if(Vo(n,"Script"))return ti(n);throw new L(5200,!1);case Ht.URL:return Vo(n,"URL")?ti(n):Gu(String(n));case Ht.RESOURCE_URL:if(Vo(n,"ResourceURL"))return ti(n);throw new L(5201,!1);default:throw new L(5202,!1)}}bypassSecurityTrustHtml(e){return n_(e)}bypassSecurityTrustStyle(e){return i_(e)}bypassSecurityTrustScript(e){return r_(e)}bypassSecurityTrustUrl(e){return o_(e)}bypassSecurityTrustResourceUrl(e){return a_(e)}static \u0275fac=function(n){return new(n||t)(W(Y))};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var de="primary",cc=Symbol("RouteTitle"),hv=class{params;constructor(i){this.params=i||{}}has(i){return Object.prototype.hasOwnProperty.call(this.params,i)}get(i){if(this.has(i)){let e=this.params[i];return Array.isArray(e)?e[0]:e}return null}getAll(i){if(this.has(i)){let e=this.params[i];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function Uo(t){return new hv(t)}function dv(t,i,e){for(let n=0;n<t.length;n++){let r=t[n],o=i[n];if(r[0]===":")e[r.substring(1)]=o;else if(r!==o.path)return!1}return!0}function Cx(t,i,e){let n=e.path.split("/"),r=n.indexOf("**");if(r===-1){if(n.length>t.length||e.pathMatch==="full"&&(i.hasChildren()||n.length<t.length))return null;let l={},d=t.slice(0,n.length);return dv(n,d,l)?{consumed:d,posParams:l}:null}if(r!==n.lastIndexOf("**"))return null;let o=n.slice(0,r),a=n.slice(r+1);if(o.length+a.length>t.length||e.pathMatch==="full"&&i.hasChildren()&&e.path!=="**")return null;let s={};return!dv(o,t.slice(0,o.length),s)||!dv(a,t.slice(t.length-a.length),s)?null:{consumed:t,posParams:s}}function Nm(t){return new Promise((i,e)=>{t.pipe(Qi()).subscribe({next:n=>i(n),error:n=>e(n)})})}function fN(t,i){if(t.length!==i.length)return!1;for(let e=0;e<t.length;++e)if(!Fi(t[e],i[e]))return!1;return!0}function Fi(t,i){let e=t?pv(t):void 0,n=i?pv(i):void 0;if(!e||!n||e.length!=n.length)return!1;let r;for(let o=0;o<e.length;o++)if(r=e[o],!wx(t[r],i[r]))return!1;return!0}function pv(t){return[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function wx(t,i){if(Array.isArray(t)&&Array.isArray(i)){if(t.length!==i.length)return!1;let e=[...t].sort(),n=[...i].sort();return e.every((r,o)=>n[o]===r)}else return t===i}function hN(t){return t.length>0?t[t.length-1]:null}function $o(t){return Js(t)?t:rr(t)?$e(Promise.resolve(t)):q(t)}function Dx(t){return Js(t)?Nm(t):Promise.resolve(t)}var pN={exact:Mx,subset:Sx},xx={exact:gN,subset:_N,ignored:()=>!0},Ex={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},gv={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};function hx(t,i,e){return pN[e.paths](t.root,i.root,e.matrixParams)&&xx[e.queryParams](t.queryParams,i.queryParams)&&!(e.fragment==="exact"&&t.fragment!==i.fragment)}function gN(t,i){return Fi(t,i)}function Mx(t,i,e){if(!Ho(t.segments,i.segments)||!Am(t.segments,i.segments,e)||t.numberOfChildren!==i.numberOfChildren)return!1;for(let n in i.children)if(!t.children[n]||!Mx(t.children[n],i.children[n],e))return!1;return!0}function _N(t,i){return Object.keys(i).length<=Object.keys(t).length&&Object.keys(i).every(e=>wx(t[e],i[e]))}function Sx(t,i,e){return Ix(t,i,i.segments,e)}function Ix(t,i,e,n){if(t.segments.length>e.length){let r=t.segments.slice(0,e.length);return!(!Ho(r,e)||i.hasChildren()||!Am(r,e,n))}else if(t.segments.length===e.length){if(!Ho(t.segments,e)||!Am(t.segments,e,n))return!1;for(let r in i.children)if(!t.children[r]||!Sx(t.children[r],i.children[r],n))return!1;return!0}else{let r=e.slice(0,t.segments.length),o=e.slice(t.segments.length);return!Ho(t.segments,r)||!Am(t.segments,r,n)||!t.children[de]?!1:Ix(t.children[de],i,o,n)}}function Am(t,i,e){return i.every((n,r)=>xx[e](t[r].parameters,n.parameters))}var Vn=class{root;queryParams;fragment;_queryParamMap;constructor(i=new Fe([],{}),e={},n=null){this.root=i,this.queryParams=e,this.fragment=n}get queryParamMap(){return this._queryParamMap??=Uo(this.queryParams),this._queryParamMap}toString(){return yN.serialize(this)}},Fe=class{segments;children;parent=null;constructor(i,e){this.segments=i,this.children=e,Object.values(e).forEach(n=>n.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return Rm(this)}},Wr=class{path;parameters;_parameterMap;constructor(i,e){this.path=i,this.parameters=e}get parameterMap(){return this._parameterMap??=Uo(this.parameters),this._parameterMap}toString(){return kx(this)}};function vN(t,i){return Ho(t,i)&&t.every((e,n)=>Fi(e.parameters,i[n].parameters))}function Ho(t,i){return t.length!==i.length?!1:t.every((e,n)=>e.path===i[n].path)}function bN(t,i){let e=[];return Object.entries(t.children).forEach(([n,r])=>{n===de&&(e=e.concat(i(r,n)))}),Object.entries(t.children).forEach(([n,r])=>{n!==de&&(e=e.concat(i(r,n)))}),e}var Wo=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:()=>new fr,providedIn:"root"})}return t})(),fr=class{parse(i){let e=new vv(i);return new Vn(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(i){let e=`/${Xl(i.root,!0)}`,n=DN(i.queryParams),r=typeof i.fragment=="string"?`#${CN(i.fragment)}`:"";return`${e}${n}${r}`}},yN=new fr;function Rm(t){return t.segments.map(i=>kx(i)).join("/")}function Xl(t,i){if(!t.hasChildren())return Rm(t);if(i){let e=t.children[de]?Xl(t.children[de],!1):"",n=[];return Object.entries(t.children).forEach(([r,o])=>{r!==de&&n.push(`${r}:${Xl(o,!1)}`)}),n.length>0?`${e}(${n.join("//")})`:e}else{let e=bN(t,(n,r)=>r===de?[Xl(t.children[de],!1)]:[`${r}:${Xl(n,!1)}`]);return Object.keys(t.children).length===1&&t.children[de]!=null?`${Rm(t)}/${e[0]}`:`${Rm(t)}/(${e.join("//")})`}}function Tx(t){return encodeURIComponent(t).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function Tm(t){return Tx(t).replace(/%3B/gi,";")}function CN(t){return encodeURI(t)}function _v(t){return Tx(t).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function Om(t){return decodeURIComponent(t)}function px(t){return Om(t.replace(/\+/g,"%20"))}function kx(t){return`${_v(t.path)}${wN(t.parameters)}`}function wN(t){return Object.entries(t).map(([i,e])=>`;${_v(i)}=${_v(e)}`).join("")}function DN(t){let i=Object.entries(t).map(([e,n])=>Array.isArray(n)?n.map(r=>`${Tm(e)}=${Tm(r)}`).join("&"):`${Tm(e)}=${Tm(n)}`).filter(e=>e);return i.length?`?${i.join("&")}`:""}var xN=/^[^\/()?;#]+/;function uv(t){let i=t.match(xN);return i?i[0]:""}var EN=/^[^\/()?;=#]+/;function MN(t){let i=t.match(EN);return i?i[0]:""}var SN=/^[^=?&#]+/;function IN(t){let i=t.match(SN);return i?i[0]:""}var TN=/^[^&#]+/;function kN(t){let i=t.match(TN);return i?i[0]:""}var vv=class{url;remaining;constructor(i){this.url=i,this.remaining=i}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new Fe([],{}):new Fe([],this.parseChildren())}parseQueryParams(){let i={};if(this.consumeOptional("?"))do this.parseQueryParam(i);while(this.consumeOptional("&"));return i}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(i=0){if(i>50)throw new L(4010,!1);if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let n={};this.peekStartsWith("/(")&&(this.capture("/"),n=this.parseParens(!0,i));let r={};return this.peekStartsWith("(")&&(r=this.parseParens(!1,i)),(e.length>0||Object.keys(n).length>0)&&(r[de]=new Fe(e,n)),r}parseSegment(){let i=uv(this.remaining);if(i===""&&this.peekStartsWith(";"))throw new L(4009,!1);return this.capture(i),new Wr(Om(i),this.parseMatrixParams())}parseMatrixParams(){let i={};for(;this.consumeOptional(";");)this.parseParam(i);return i}parseParam(i){let e=MN(this.remaining);if(!e)return;this.capture(e);let n="";if(this.consumeOptional("=")){let r=uv(this.remaining);r&&(n=r,this.capture(n))}i[Om(e)]=Om(n)}parseQueryParam(i){let e=IN(this.remaining);if(!e)return;this.capture(e);let n="";if(this.consumeOptional("=")){let a=kN(this.remaining);a&&(n=a,this.capture(n))}let r=px(e),o=px(n);if(i.hasOwnProperty(r)){let a=i[r];Array.isArray(a)||(a=[a],i[r]=a),a.push(o)}else i[r]=o}parseParens(i,e){let n={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let r=uv(this.remaining),o=this.remaining[r.length];if(o!=="/"&&o!==")"&&o!==";")throw new L(4010,!1);let a;r.indexOf(":")>-1?(a=r.slice(0,r.indexOf(":")),this.capture(a),this.capture(":")):i&&(a=de);let s=this.parseChildren(e+1);n[a??de]=Object.keys(s).length===1&&s[de]?s[de]:new Fe([],s),this.consumeOptional("//")}return n}peekStartsWith(i){return this.remaining.startsWith(i)}consumeOptional(i){return this.peekStartsWith(i)?(this.remaining=this.remaining.substring(i.length),!0):!1}capture(i){if(!this.consumeOptional(i))throw new L(4011,!1)}};function Ax(t){return t.segments.length>0?new Fe([],{[de]:t}):t}function Rx(t){let i={};for(let[n,r]of Object.entries(t.children)){let o=Rx(r);if(n===de&&o.segments.length===0&&o.hasChildren())for(let[a,s]of Object.entries(o.children))i[a]=s;else(o.segments.length>0||o.hasChildren())&&(i[n]=o)}let e=new Fe(t.segments,i);return AN(e)}function AN(t){if(t.numberOfChildren===1&&t.children[de]){let i=t.children[de];return new Fe(t.segments.concat(i.segments),i.children)}return t}function es(t){return t instanceof Vn}function Ox(t,i,e=null,n=null,r=new fr){let o=Nx(t);return Fx(o,i,e,n,r)}function Nx(t){let i;function e(o){let a={};for(let l of o.children){let d=e(l);a[l.outlet]=d}let s=new Fe(o.url,a);return o===t&&(i=s),s}let n=e(t.root),r=Ax(n);return i??r}function Fx(t,i,e,n,r){let o=t;for(;o.parent;)o=o.parent;if(i.length===0)return mv(o,o,o,e,n,r);let a=RN(i);if(a.toRoot())return mv(o,o,new Fe([],{}),e,n,r);let s=ON(a,o,t),l=s.processChildren?ec(s.segmentGroup,s.index,a.commands):Lx(s.segmentGroup,s.index,a.commands);return mv(o,s.segmentGroup,l,e,n,r)}function Fm(t){return typeof t=="object"&&t!=null&&!t.outlets&&!t.segmentPath}function nc(t){return typeof t=="object"&&t!=null&&t.outlets}function gx(t,i,e){t||="\u0275";let n=new Vn;return n.queryParams={[t]:i},e.parse(e.serialize(n)).queryParams[t]}function mv(t,i,e,n,r,o){let a={};for(let[d,u]of Object.entries(n??{}))a[d]=Array.isArray(u)?u.map(f=>gx(d,f,o)):gx(d,u,o);let s;t===i?s=e:s=Px(t,i,e);let l=Ax(Rx(s));return new Vn(l,a,r)}function Px(t,i,e){let n={};return Object.entries(t.children).forEach(([r,o])=>{o===i?n[r]=e:n[r]=Px(o,i,e)}),new Fe(t.segments,n)}var Pm=class{isAbsolute;numberOfDoubleDots;commands;constructor(i,e,n){if(this.isAbsolute=i,this.numberOfDoubleDots=e,this.commands=n,i&&n.length>0&&Fm(n[0]))throw new L(4003,!1);let r=n.find(nc);if(r&&r!==hN(n))throw new L(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function RN(t){if(typeof t[0]=="string"&&t.length===1&&t[0]==="/")return new Pm(!0,0,t);let i=0,e=!1,n=t.reduce((r,o,a)=>{if(typeof o=="object"&&o!=null){if(o.outlets){let s={};return Object.entries(o.outlets).forEach(([l,d])=>{s[l]=typeof d=="string"?d.split("/"):d}),[...r,{outlets:s}]}if(o.segmentPath)return[...r,o.segmentPath]}return typeof o!="string"?[...r,o]:a===0?(o.split("/").forEach((s,l)=>{l==0&&s==="."||(l==0&&s===""?e=!0:s===".."?i++:s!=""&&r.push(s))}),r):[...r,o]},[]);return new Pm(e,i,n)}var Ka=class{segmentGroup;processChildren;index;constructor(i,e,n){this.segmentGroup=i,this.processChildren=e,this.index=n}};function ON(t,i,e){if(t.isAbsolute)return new Ka(i,!0,0);if(!e)return new Ka(i,!1,NaN);if(e.parent===null)return new Ka(e,!0,0);let n=Fm(t.commands[0])?0:1,r=e.segments.length-1+n;return NN(e,r,t.numberOfDoubleDots)}function NN(t,i,e){let n=t,r=i,o=e;for(;o>r;){if(o-=r,n=n.parent,!n)throw new L(4005,!1);r=n.segments.length}return new Ka(n,!1,r-o)}function FN(t){return nc(t[0])?t[0].outlets:{[de]:t}}function Lx(t,i,e){if(t??=new Fe([],{}),t.segments.length===0&&t.hasChildren())return ec(t,i,e);let n=PN(t,i,e),r=e.slice(n.commandIndex);if(n.match&&n.pathIndex<t.segments.length){let o=new Fe(t.segments.slice(0,n.pathIndex),{});return o.children[de]=new Fe(t.segments.slice(n.pathIndex),t.children),ec(o,0,r)}else return n.match&&r.length===0?new Fe(t.segments,{}):n.match&&!t.hasChildren()?bv(t,i,e):n.match?ec(t,0,r):bv(t,i,e)}function ec(t,i,e){if(e.length===0)return new Fe(t.segments,{});{let n=FN(e),r={};if(Object.keys(n).some(o=>o!==de)&&t.children[de]&&t.numberOfChildren===1&&t.children[de].segments.length===0){let o=ec(t.children[de],i,e);return new Fe(t.segments,o.children)}return Object.entries(n).forEach(([o,a])=>{typeof a=="string"&&(a=[a]),a!==null&&(r[o]=Lx(t.children[o],i,a))}),Object.entries(t.children).forEach(([o,a])=>{n[o]===void 0&&(r[o]=a)}),new Fe(t.segments,r)}}function PN(t,i,e){let n=0,r=i,o={match:!1,pathIndex:0,commandIndex:0};for(;r<t.segments.length;){if(n>=e.length)return o;let a=t.segments[r],s=e[n];if(nc(s))break;let l=`${s}`,d=n<e.length-1?e[n+1]:null;if(r>0&&l===void 0)break;if(l&&d&&typeof d=="object"&&d.outlets===void 0){if(!vx(l,d,a))return o;n+=2}else{if(!vx(l,{},a))return o;n++}r++}return{match:!0,pathIndex:r,commandIndex:n}}function bv(t,i,e){let n=t.segments.slice(0,i),r=0;for(;r<e.length;){let o=e[r];if(nc(o)){let l=LN(o.outlets);return new Fe(n,l)}if(r===0&&Fm(e[0])){let l=t.segments[i];n.push(new Wr(l.path,_x(e[0]))),r++;continue}let a=nc(o)?o.outlets[de]:`${o}`,s=r<e.length-1?e[r+1]:null;a&&s&&Fm(s)?(n.push(new Wr(a,_x(s))),r+=2):(n.push(new Wr(a,{})),r++)}return new Fe(n,{})}function LN(t){let i={};return Object.entries(t).forEach(([e,n])=>{typeof n=="string"&&(n=[n]),n!==null&&(i[e]=bv(new Fe([],{}),0,n))}),i}function _x(t){let i={};return Object.entries(t).forEach(([e,n])=>i[e]=`${n}`),i}function vx(t,i,e){return t==e.path&&Fi(i,e.parameters)}var Xa="imperative",Tt=(function(t){return t[t.NavigationStart=0]="NavigationStart",t[t.NavigationEnd=1]="NavigationEnd",t[t.NavigationCancel=2]="NavigationCancel",t[t.NavigationError=3]="NavigationError",t[t.RoutesRecognized=4]="RoutesRecognized",t[t.ResolveStart=5]="ResolveStart",t[t.ResolveEnd=6]="ResolveEnd",t[t.GuardsCheckStart=7]="GuardsCheckStart",t[t.GuardsCheckEnd=8]="GuardsCheckEnd",t[t.RouteConfigLoadStart=9]="RouteConfigLoadStart",t[t.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",t[t.ChildActivationStart=11]="ChildActivationStart",t[t.ChildActivationEnd=12]="ChildActivationEnd",t[t.ActivationStart=13]="ActivationStart",t[t.ActivationEnd=14]="ActivationEnd",t[t.Scroll=15]="Scroll",t[t.NavigationSkipped=16]="NavigationSkipped",t})(Tt||{}),Mn=class{id;url;constructor(i,e){this.id=i,this.url=e}},Gr=class extends Mn{type=Tt.NavigationStart;navigationTrigger;restoredState;constructor(i,e,n="imperative",r=null){super(i,e),this.navigationTrigger=n,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},di=class extends Mn{urlAfterRedirects;type=Tt.NavigationEnd;constructor(i,e,n){super(i,e),this.urlAfterRedirects=n}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},Qt=(function(t){return t[t.Redirect=0]="Redirect",t[t.SupersededByNewNavigation=1]="SupersededByNewNavigation",t[t.NoDataFromResolver=2]="NoDataFromResolver",t[t.GuardRejected=3]="GuardRejected",t[t.Aborted=4]="Aborted",t})(Qt||{}),ts=(function(t){return t[t.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",t[t.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",t})(ts||{}),Ln=class extends Mn{reason;code;type=Tt.NavigationCancel;constructor(i,e,n,r){super(i,e),this.reason=n,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function Vx(t){return t instanceof Ln&&(t.code===Qt.Redirect||t.code===Qt.SupersededByNewNavigation)}var Pi=class extends Mn{reason;code;type=Tt.NavigationSkipped;constructor(i,e,n,r){super(i,e),this.reason=n,this.code=r}},zo=class extends Mn{error;target;type=Tt.NavigationError;constructor(i,e,n,r){super(i,e),this.error=n,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},ic=class extends Mn{urlAfterRedirects;state;type=Tt.RoutesRecognized;constructor(i,e,n,r){super(i,e),this.urlAfterRedirects=n,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Lm=class extends Mn{urlAfterRedirects;state;type=Tt.GuardsCheckStart;constructor(i,e,n,r){super(i,e),this.urlAfterRedirects=n,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Vm=class extends Mn{urlAfterRedirects;state;shouldActivate;type=Tt.GuardsCheckEnd;constructor(i,e,n,r,o){super(i,e),this.urlAfterRedirects=n,this.state=r,this.shouldActivate=o}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},Bm=class extends Mn{urlAfterRedirects;state;type=Tt.ResolveStart;constructor(i,e,n,r){super(i,e),this.urlAfterRedirects=n,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},jm=class extends Mn{urlAfterRedirects;state;type=Tt.ResolveEnd;constructor(i,e,n,r){super(i,e),this.urlAfterRedirects=n,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Hm=class{route;type=Tt.RouteConfigLoadStart;constructor(i){this.route=i}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},Um=class{route;type=Tt.RouteConfigLoadEnd;constructor(i){this.route=i}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},zm=class{snapshot;type=Tt.ChildActivationStart;constructor(i){this.snapshot=i}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},$m=class{snapshot;type=Tt.ChildActivationEnd;constructor(i){this.snapshot=i}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Wm=class{snapshot;type=Tt.ActivationStart;constructor(i){this.snapshot=i}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Gm=class{snapshot;type=Tt.ActivationEnd;constructor(i){this.snapshot=i}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},ns=class{routerEvent;position;anchor;scrollBehavior;type=Tt.Scroll;constructor(i,e,n,r){this.routerEvent=i,this.position=e,this.anchor=n,this.scrollBehavior=r}toString(){let i=this.position?`${this.position[0]}, ${this.position[1]}`:null;return`Scroll(anchor: '${this.anchor}', position: '${i}')`}},is=class{},rc=class{},rs=class{url;navigationBehaviorOptions;constructor(i,e){this.url=i,this.navigationBehaviorOptions=e}};function VN(t){return!(t instanceof is)&&!(t instanceof rs)&&!(t instanceof rc)}var qm=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(i){this.rootInjector=i,this.children=new Go(this.rootInjector)}},Go=(()=>{class t{rootInjector;contexts=new Map;constructor(e){this.rootInjector=e}onChildOutletCreated(e,n){let r=this.getOrCreateContext(e);r.outlet=n,this.contexts.set(e,r)}onChildOutletDestroyed(e){let n=this.getContext(e);n&&(n.outlet=null,n.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let n=this.getContext(e);return n||(n=new qm(this.rootInjector),this.contexts.set(e,n)),n}getContext(e){return this.contexts.get(e)||null}static \u0275fac=function(n){return new(n||t)(W(Le))};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Ym=class{_root;constructor(i){this._root=i}get root(){return this._root.value}parent(i){let e=this.pathFromRoot(i);return e.length>1?e[e.length-2]:null}children(i){let e=yv(i,this._root);return e?e.children.map(n=>n.value):[]}firstChild(i){let e=yv(i,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(i){let e=Cv(i,this._root);return e.length<2?[]:e[e.length-2].children.map(r=>r.value).filter(r=>r!==i)}pathFromRoot(i){return Cv(i,this._root).map(e=>e.value)}};function yv(t,i){if(t===i.value)return i;for(let e of i.children){let n=yv(t,e);if(n)return n}return null}function Cv(t,i){if(t===i.value)return[i];for(let e of i.children){let n=Cv(t,e);if(n.length)return n.unshift(i),n}return[]}var En=class{value;children;constructor(i,e){this.value=i,this.children=e}toString(){return`TreeNode(${this.value})`}};function Za(t){let i={};return t&&t.children.forEach(e=>i[e.value.outlet]=e),i}var oc=class extends Ym{snapshot;constructor(i,e){super(i),this.snapshot=e,kv(this,i)}toString(){return this.snapshot.toString()}};function Bx(t,i){let e=BN(t,i),n=new st([new Wr("",{})]),r=new st({}),o=new st({}),a=new st({}),s=new st(""),l=new hr(n,r,a,s,o,de,t,e.root);return l.snapshot=e.root,new oc(new En(l,[]),e)}function BN(t,i){let e={},n={},r={},a=new os([],e,r,"",n,de,t,null,{},i);return new ac("",new En(a,[]))}var hr=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(i,e,n,r,o,a,s,l){this.urlSubject=i,this.paramsSubject=e,this.queryParamsSubject=n,this.fragmentSubject=r,this.dataSubject=o,this.outlet=a,this.component=s,this._futureSnapshot=l,this.title=this.dataSubject?.pipe(le(d=>d[cc]))??q(void 0),this.url=i,this.params=e,this.queryParams=n,this.fragment=r,this.data=o}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(le(i=>Uo(i))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(le(i=>Uo(i))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function Tv(t,i,e="emptyOnly"){let n,{routeConfig:r}=t;return i!==null&&(e==="always"||r?.path===""||!i.component&&!i.routeConfig?.loadComponent)?n={params:C(C({},i.params),t.params),data:C(C({},i.data),t.data),resolve:C(C(C(C({},t.data),i.data),r?.data),t._resolvedData)}:n={params:C({},t.params),data:C({},t.data),resolve:C(C({},t.data),t._resolvedData??{})},r&&Hx(r)&&(n.resolve[cc]=r.title),n}var os=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;get title(){return this.data?.[cc]}constructor(i,e,n,r,o,a,s,l,d,u){this.url=i,this.params=e,this.queryParams=n,this.fragment=r,this.data=o,this.outlet=a,this.component=s,this.routeConfig=l,this._resolve=d,this._environmentInjector=u}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=Uo(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=Uo(this.queryParams),this._queryParamMap}toString(){let i=this.url.map(n=>n.toString()).join("/"),e=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${i}', path:'${e}')`}},ac=class extends Ym{url;constructor(i,e){super(e),this.url=i,kv(this,e)}toString(){return jx(this._root)}};function kv(t,i){i.value._routerState=t,i.children.forEach(e=>kv(t,e))}function jx(t){let i=t.children.length>0?` { ${t.children.map(jx).join(", ")} } `:"";return`${t.value}${i}`}function fv(t){if(t.snapshot){let i=t.snapshot,e=t._futureSnapshot;t.snapshot=e,Fi(i.queryParams,e.queryParams)||t.queryParamsSubject.next(e.queryParams),i.fragment!==e.fragment&&t.fragmentSubject.next(e.fragment),Fi(i.params,e.params)||t.paramsSubject.next(e.params),fN(i.url,e.url)||t.urlSubject.next(e.url),Fi(i.data,e.data)||t.dataSubject.next(e.data)}else t.snapshot=t._futureSnapshot,t.dataSubject.next(t._futureSnapshot.data)}function wv(t,i){let e=Fi(t.params,i.params)&&vN(t.url,i.url),n=!t.parent!=!i.parent;return e&&!n&&(!t.parent||wv(t.parent,i.parent))}function Hx(t){return typeof t.title=="string"||t.title===null}var Ux=new y(""),dc=(()=>{class t{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=de;activateEvents=new I;deactivateEvents=new I;attachEvents=new I;detachEvents=new I;routerOutletData=cr();parentContexts=c(Go);location=c(St);changeDetector=c(xe);inputBinder=c(uc,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(e){if(e.name){let{firstChange:n,previousValue:r}=e.name;if(n)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new L(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new L(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new L(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,n){this.activated=e,this._activatedRoute=n,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,n){if(this.isActivated)throw new L(4013,!1);this._activatedRoute=e;let r=this.location,a=e.snapshot.component,s=this.parentContexts.getOrCreateContext(this.name).children,l=new Dv(e,s,r.injector,this.routerOutletData);this.activated=r.createComponent(a,{index:r.length,injector:l,environmentInjector:n}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(n){return new(n||t)};static \u0275dir=N({type:t,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[Be]})}return t})(),Dv=class{route;childContexts;parent;outletData;constructor(i,e,n,r){this.route=i,this.childContexts=e,this.parent=n,this.outletData=r}get(i,e){return i===hr?this.route:i===Go?this.childContexts:i===Ux?this.outletData:this.parent.get(i,e)}},uc=new y(""),Av=(()=>{class t{outletDataSubscriptions=new Map;bindActivatedRouteToOutletComponent(e){this.unsubscribeFromRouteData(e),this.subscribeToRouteData(e)}unsubscribeFromRouteData(e){this.outletDataSubscriptions.get(e)?.unsubscribe(),this.outletDataSubscriptions.delete(e)}subscribeToRouteData(e){let{activatedRoute:n}=e,r=va([n.queryParams,n.params,n.data]).pipe(pt(([o,a,s],l)=>(s=C(C(C({},o),a),s),l===0?q(s):Promise.resolve(s)))).subscribe(o=>{if(!e.isActivated||!e.activatedComponentRef||e.activatedRoute!==n||n.component===null){this.unsubscribeFromRouteData(e);return}let a=HD(n.component);if(!a){this.unsubscribeFromRouteData(e);return}for(let{templateName:s}of a.inputs)e.activatedComponentRef.setInput(s,o[s])});this.outletDataSubscriptions.set(e,r)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})(),Rv=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=M({type:t,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(n,r){n&1&&T(0,"router-outlet")},dependencies:[dc],encapsulation:2})}return t})();function Ov(t){let i=t.children&&t.children.map(Ov),e=i?ne(C({},t),{children:i}):C({},t);return!e.component&&!e.loadComponent&&(i||e.loadChildren)&&e.outlet&&e.outlet!==de&&(e.component=Rv),e}function jN(t,i,e){let n=sc(t,i._root,e?e._root:void 0);return new oc(n,i)}function sc(t,i,e){if(e&&t.shouldReuseRoute(i.value,e.value.snapshot)){let n=e.value;n._futureSnapshot=i.value;let r=HN(t,i,e);return new En(n,r)}else{if(t.shouldAttach(i.value)){let o=t.retrieve(i.value);if(o!==null){let a=o.route;return a.value._futureSnapshot=i.value,a.children=i.children.map(s=>sc(t,s)),a}}let n=UN(i.value),r=i.children.map(o=>sc(t,o));return new En(n,r)}}function HN(t,i,e){return i.children.map(n=>{for(let r of e.children)if(t.shouldReuseRoute(n.value,r.value.snapshot))return sc(t,n,r);return sc(t,n)})}function UN(t){return new hr(new st(t.url),new st(t.params),new st(t.queryParams),new st(t.fragment),new st(t.data),t.outlet,t.component,t)}var as=class{redirectTo;navigationBehaviorOptions;constructor(i,e){this.redirectTo=i,this.navigationBehaviorOptions=e}},zx="ngNavigationCancelingError";function Qm(t,i){let{redirectTo:e,navigationBehaviorOptions:n}=es(i)?{redirectTo:i,navigationBehaviorOptions:void 0}:i,r=$x(!1,Qt.Redirect);return r.url=e,r.navigationBehaviorOptions=n,r}function $x(t,i){let e=new Error(`NavigationCancelingError: ${t||""}`);return e[zx]=!0,e.cancellationCode=i,e}function zN(t){return Wx(t)&&es(t.url)}function Wx(t){return!!t&&t[zx]}var xv=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(i,e,n,r,o){this.routeReuseStrategy=i,this.futureState=e,this.currState=n,this.forwardEvent=r,this.inputBindingEnabled=o}activate(i){let e=this.futureState._root,n=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,n,i),fv(this.futureState.root),this.activateChildRoutes(e,n,i)}deactivateChildRoutes(i,e,n){let r=Za(e);i.children.forEach(o=>{let a=o.value.outlet;this.deactivateRoutes(o,r[a],n),delete r[a]}),Object.values(r).forEach(o=>{this.deactivateRouteAndItsChildren(o,n)})}deactivateRoutes(i,e,n){let r=i.value,o=e?e.value:null;if(r===o)if(r.component){let a=n.getContext(r.outlet);a&&this.deactivateChildRoutes(i,e,a.children)}else this.deactivateChildRoutes(i,e,n);else o&&this.deactivateRouteAndItsChildren(e,n)}deactivateRouteAndItsChildren(i,e){i.value.component&&this.routeReuseStrategy.shouldDetach(i.value.snapshot)?this.detachAndStoreRouteSubtree(i,e):this.deactivateRouteAndOutlet(i,e)}detachAndStoreRouteSubtree(i,e){let n=e.getContext(i.value.outlet),r=n&&i.value.component?n.children:e,o=Za(i);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,r);if(n&&n.outlet){let a=n.outlet.detach(),s=n.children.onOutletDeactivated();this.routeReuseStrategy.store(i.value.snapshot,{componentRef:a,route:i,contexts:s})}}deactivateRouteAndOutlet(i,e){let n=e.getContext(i.value.outlet),r=n&&i.value.component?n.children:e,o=Za(i);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,r);n&&(n.outlet&&(n.outlet.deactivate(),n.children.onOutletDeactivated()),n.attachRef=null,n.route=null)}activateChildRoutes(i,e,n){let r=Za(e);i.children.forEach(o=>{this.activateRoutes(o,r[o.value.outlet],n),this.forwardEvent(new Gm(o.value.snapshot))}),i.children.length&&this.forwardEvent(new $m(i.value.snapshot))}activateRoutes(i,e,n){let r=i.value,o=e?e.value:null;if(fv(r),r===o)if(r.component){let a=n.getOrCreateContext(r.outlet);this.activateChildRoutes(i,e,a.children)}else this.activateChildRoutes(i,e,n);else if(r.component){let a=n.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let s=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),a.children.onOutletReAttached(s.contexts),a.attachRef=s.componentRef,a.route=s.route.value,a.outlet&&a.outlet.attach(s.componentRef,s.route.value),fv(s.route.value),this.activateChildRoutes(i,null,a.children)}else a.attachRef=null,a.route=r,a.outlet&&a.outlet.activateWith(r,a.injector),this.activateChildRoutes(i,null,a.children)}else this.activateChildRoutes(i,null,n)}},Zm=class{path;route;constructor(i){this.path=i,this.route=this.path[this.path.length-1]}},Ja=class{component;route;constructor(i,e){this.component=i,this.route=e}};function $N(t,i,e){let n=t._root,r=i?i._root:null;return Jl(n,r,e,[n.value])}function WN(t){let i=t.routeConfig?t.routeConfig.canActivateChild:null;return!i||i.length===0?null:{node:t,guards:i}}function ls(t,i){let e=Symbol(),n=i.get(t,e);return n===e?typeof t=="function"&&!pp(t)?t:i.get(t):n}function Jl(t,i,e,n,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=Za(i);return t.children.forEach(a=>{GN(a,o[a.value.outlet],e,n.concat([a.value]),r),delete o[a.value.outlet]}),Object.entries(o).forEach(([a,s])=>tc(s,e.getContext(a),r)),r}function GN(t,i,e,n,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=t.value,a=i?i.value:null,s=e?e.getContext(t.value.outlet):null;if(a&&o.routeConfig===a.routeConfig){let l=qN(a,o,o.routeConfig.runGuardsAndResolvers);l?r.canActivateChecks.push(new Zm(n)):(o.data=a.data,o._resolvedData=a._resolvedData),o.component?Jl(t,i,s?s.children:null,n,r):Jl(t,i,e,n,r),l&&s&&s.outlet&&s.outlet.isActivated&&r.canDeactivateChecks.push(new Ja(s.outlet.component,a))}else a&&tc(i,s,r),r.canActivateChecks.push(new Zm(n)),o.component?Jl(t,null,s?s.children:null,n,r):Jl(t,null,e,n,r);return r}function qN(t,i,e){if(typeof e=="function")return xt(i._environmentInjector,()=>e(t,i));switch(e){case"pathParamsChange":return!Ho(t.url,i.url);case"pathParamsOrQueryParamsChange":return!Ho(t.url,i.url)||!Fi(t.queryParams,i.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!wv(t,i)||!Fi(t.queryParams,i.queryParams);default:return!wv(t,i)}}function tc(t,i,e){let n=Za(t),r=t.value;Object.entries(n).forEach(([o,a])=>{r.component?i?tc(a,i.children.getContext(o),e):tc(a,null,e):tc(a,i,e)}),r.component?i&&i.outlet&&i.outlet.isActivated?e.canDeactivateChecks.push(new Ja(i.outlet.component,r)):e.canDeactivateChecks.push(new Ja(null,r)):e.canDeactivateChecks.push(new Ja(null,r))}function mc(t){return typeof t=="function"}function YN(t){return typeof t=="boolean"}function QN(t){return t&&mc(t.canLoad)}function ZN(t){return t&&mc(t.canActivate)}function KN(t){return t&&mc(t.canActivateChild)}function XN(t){return t&&mc(t.canDeactivate)}function JN(t){return t&&mc(t.canMatch)}function Gx(t){return t instanceof vo||t?.name==="EmptyError"}var km=Symbol("INITIAL_VALUE");function ss(){return pt(t=>va(t.map(i=>i.pipe(it(1),Qe(km)))).pipe(le(i=>{for(let e of i)if(e!==!0){if(e===km)return km;if(e===!1||eF(e))return e}return!0}),be(i=>i!==km),it(1)))}function eF(t){return es(t)||t instanceof as}function qx(t){return t.aborted?q(void 0).pipe(it(1)):new se(i=>{let e=()=>{i.next(),i.complete()};return t.addEventListener("abort",e),()=>t.removeEventListener("abort",e)})}function Yx(t){return ye(qx(t))}function tF(t){return Vt(i=>{let{targetSnapshot:e,currentSnapshot:n,guards:{canActivateChecks:r,canDeactivateChecks:o}}=i;return o.length===0&&r.length===0?q(ne(C({},i),{guardsResult:!0})):nF(o,e,n).pipe(Vt(a=>a&&YN(a)?iF(e,r,t):q(a)),le(a=>ne(C({},i),{guardsResult:a})))})}function nF(t,i,e){return $e(t).pipe(Vt(n=>lF(n.component,n.route,e,i)),Qi(n=>n!==!0,!0))}function iF(t,i,e){return $e(i).pipe(Tr(n=>Sr(oF(n.route.parent,e),rF(n.route,e),sF(t,n.path),aF(t,n.route))),Qi(n=>n!==!0,!0))}function rF(t,i){return t!==null&&i&&i(new Wm(t)),q(!0)}function oF(t,i){return t!==null&&i&&i(new zm(t)),q(!0)}function aF(t,i){let e=i.routeConfig?i.routeConfig.canActivate:null;if(!e||e.length===0)return q(!0);let n=e.map(r=>Zn(()=>{let o=i._environmentInjector,a=ls(r,o),s=ZN(a)?a.canActivate(i,t):xt(o,()=>a(i,t));return $o(s).pipe(Qi())}));return q(n).pipe(ss())}function sF(t,i){let e=i[i.length-1],r=i.slice(0,i.length-1).reverse().map(o=>WN(o)).filter(o=>o!==null).map(o=>Zn(()=>{let a=o.guards.map(s=>{let l=o.node._environmentInjector,d=ls(s,l),u=KN(d)?d.canActivateChild(e,t):xt(l,()=>d(e,t));return $o(u).pipe(Qi())});return q(a).pipe(ss())}));return q(r).pipe(ss())}function lF(t,i,e,n){let r=i&&i.routeConfig?i.routeConfig.canDeactivate:null;if(!r||r.length===0)return q(!0);let o=r.map(a=>{let s=i._environmentInjector,l=ls(a,s),d=XN(l)?l.canDeactivate(t,i,e,n):xt(s,()=>l(t,i,e,n));return $o(d).pipe(Qi())});return q(o).pipe(ss())}function cF(t,i,e,n,r){let o=i.canLoad;if(o===void 0||o.length===0)return q(!0);let a=o.map(s=>{let l=ls(s,t),d=QN(l)?l.canLoad(i,e):xt(t,()=>l(i,e)),u=$o(d);return r?u.pipe(Yx(r)):u});return q(a).pipe(ss(),Qx(n))}function Qx(t){return Yh(lt(i=>{if(typeof i!="boolean")throw Qm(t,i)}),le(i=>i===!0))}function dF(t,i,e,n,r,o){let a=i.canMatch;if(!a||a.length===0)return q(!0);let s=a.map(l=>{let d=ls(l,t),u=JN(d)?d.canMatch(i,e,r):xt(t,()=>d(i,e,r));return $o(u).pipe(Yx(o))});return q(s).pipe(ss(),Qx(n))}var mr=class t extends Error{segmentGroup;constructor(i){super(),this.segmentGroup=i||null,Object.setPrototypeOf(this,t.prototype)}},lc=class t extends Error{urlTree;constructor(i){super(),this.urlTree=i,Object.setPrototypeOf(this,t.prototype)}};function uF(t){throw new L(4e3,!1)}function mF(t){throw $x(!1,Qt.GuardRejected)}var Ev=class{urlSerializer;urlTree;constructor(i,e){this.urlSerializer=i,this.urlTree=e}async lineralizeSegments(i,e){let n=[],r=e.root;for(;;){if(n=n.concat(r.segments),r.numberOfChildren===0)return n;if(r.numberOfChildren>1||!r.children[de])throw uF(`${i.redirectTo}`);r=r.children[de]}}async applyRedirectCommands(i,e,n,r,o){let a=await fF(e,r,o);if(a instanceof Vn)throw new lc(a);let s=this.applyRedirectCreateUrlTree(a,this.urlSerializer.parse(a),i,n);if(a[0]==="/")throw new lc(s);return s}applyRedirectCreateUrlTree(i,e,n,r){let o=this.createSegmentGroup(i,e.root,n,r);return new Vn(o,this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(i,e){let n={};return Object.entries(i).forEach(([r,o])=>{if(typeof o=="string"&&o[0]===":"){let s=o.substring(1);n[r]=e[s]}else n[r]=o}),n}createSegmentGroup(i,e,n,r){let o=this.createSegments(i,e.segments,n,r),a={};return Object.entries(e.children).forEach(([s,l])=>{a[s]=this.createSegmentGroup(i,l,n,r)}),new Fe(o,a)}createSegments(i,e,n,r){return e.map(o=>o.path[0]===":"?this.findPosParam(i,o,r):this.findOrReturn(o,n))}findPosParam(i,e,n){let r=n[e.path.substring(1)];if(!r)throw new L(4001,!1);return r}findOrReturn(i,e){let n=0;for(let r of e){if(r.path===i.path)return e.splice(n),r;n++}return i}};function fF(t,i,e){if(typeof t=="string")return Promise.resolve(t);let n=t;return Nm($o(xt(e,()=>n(i))))}function hF(t,i){return t.providers&&!t._injector&&(t._injector=Wa(t.providers,i,`Route: ${t.path}`)),t._injector??i}function ci(t){return t.outlet||de}function pF(t,i){let e=t.filter(n=>ci(n)===i);return e.push(...t.filter(n=>ci(n)!==i)),e}var Mv={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function Zx(t){return{routeConfig:t.routeConfig,url:t.url,params:t.params,queryParams:t.queryParams,fragment:t.fragment,data:t.data,outlet:t.outlet,title:t.title,paramMap:t.paramMap,queryParamMap:t.queryParamMap}}function gF(t,i,e,n,r,o,a){let s=Kx(t,i,e);if(!s.matched)return q(s);let l=Zx(o(s));return n=hF(i,n),dF(n,i,e,r,l,a).pipe(le(d=>d===!0?s:C({},Mv)))}function Kx(t,i,e){if(i.path==="")return i.pathMatch==="full"&&(t.hasChildren()||e.length>0)?C({},Mv):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let r=(i.matcher||Cx)(e,t,i);if(!r)return C({},Mv);let o={};Object.entries(r.posParams??{}).forEach(([s,l])=>{o[s]=l.path});let a=r.consumed.length>0?C(C({},o),r.consumed[r.consumed.length-1].parameters):o;return{matched:!0,consumedSegments:r.consumed,remainingSegments:e.slice(r.consumed.length),parameters:a,positionalParamSegments:r.posParams??{}}}function bx(t,i,e,n,r){return e.length>0&&bF(t,e,n,r)?{segmentGroup:new Fe(i,vF(n,new Fe(e,t.children))),slicedSegments:[]}:e.length===0&&yF(t,e,n)?{segmentGroup:new Fe(t.segments,_F(t,e,n,t.children)),slicedSegments:e}:{segmentGroup:new Fe(t.segments,t.children),slicedSegments:e}}function _F(t,i,e,n){let r={};for(let o of e)if(Xm(t,i,o)&&!n[ci(o)]){let a=new Fe([],{});r[ci(o)]=a}return C(C({},n),r)}function vF(t,i){let e={};e[de]=i;for(let n of t)if(n.path===""&&ci(n)!==de){let r=new Fe([],{});e[ci(n)]=r}return e}function bF(t,i,e,n){return e.some(r=>!Xm(t,i,r)||!(ci(r)!==de)?!1:!(n!==void 0&&ci(r)===n))}function yF(t,i,e){return e.some(n=>Xm(t,i,n))}function Xm(t,i,e){return(t.hasChildren()||i.length>0)&&e.pathMatch==="full"?!1:e.path===""}function CF(t,i,e){return i.length===0&&!t.children[e]}var Sv=class{};async function wF(t,i,e,n,r,o,a="emptyOnly",s){return new Iv(t,i,e,n,r,a,o,s).recognize()}var DF=31,Iv=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(i,e,n,r,o,a,s,l){this.injector=i,this.configLoader=e,this.rootComponentType=n,this.config=r,this.urlTree=o,this.paramsInheritanceStrategy=a,this.urlSerializer=s,this.abortSignal=l,this.applyRedirects=new Ev(this.urlSerializer,this.urlTree)}noMatchError(i){return new L(4002,`'${i.segmentGroup}'`)}async recognize(){let i=bx(this.urlTree.root,[],[],this.config).segmentGroup,{children:e,rootSnapshot:n}=await this.match(i),r=new En(n,e),o=new ac("",r),a=Ox(n,[],this.urlTree.queryParams,this.urlTree.fragment);return a.queryParams=this.urlTree.queryParams,o.url=this.urlSerializer.serialize(a),{state:o,tree:a}}async match(i){let e=new os([],Object.freeze({}),Object.freeze(C({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),de,this.rootComponentType,null,{},this.injector);try{return{children:await this.processSegmentGroup(this.injector,this.config,i,de,e),rootSnapshot:e}}catch(n){if(n instanceof lc)return this.urlTree=n.urlTree,this.match(n.urlTree.root);throw n instanceof mr?this.noMatchError(n):n}}async processSegmentGroup(i,e,n,r,o){if(n.segments.length===0&&n.hasChildren())return this.processChildren(i,e,n,o);let a=await this.processSegment(i,e,n,n.segments,r,!0,o);return a instanceof En?[a]:[]}async processChildren(i,e,n,r){let o=[];for(let l of Object.keys(n.children))l==="primary"?o.unshift(l):o.push(l);let a=[];for(let l of o){let d=n.children[l],u=pF(e,l),f=await this.processSegmentGroup(i,u,d,l,r);a.push(...f)}let s=Xx(a);return xF(s),s}async processSegment(i,e,n,r,o,a,s){for(let l of e)try{return await this.processSegmentAgainstRoute(l._injector??i,e,l,n,r,o,a,s)}catch(d){if(d instanceof mr||Gx(d))continue;throw d}if(CF(n,r,o))return new Sv;throw new mr(n)}async processSegmentAgainstRoute(i,e,n,r,o,a,s,l){if(ci(n)!==a&&(a===de||!Xm(r,o,n)))throw new mr(r);if(n.redirectTo===void 0)return this.matchSegmentAgainstRoute(i,r,n,o,a,l);if(this.allowRedirects&&s)return this.expandSegmentAgainstRouteUsingRedirect(i,r,e,n,o,a,l);throw new mr(r)}async expandSegmentAgainstRouteUsingRedirect(i,e,n,r,o,a,s){let{matched:l,parameters:d,consumedSegments:u,positionalParamSegments:f,remainingSegments:_}=Kx(e,r,o);if(!l)throw new mr(e);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>DF&&(this.allowRedirects=!1));let v=this.createSnapshot(i,r,o,d,s);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let w=await this.applyRedirects.applyRedirectCommands(u,r.redirectTo,f,Zx(v),i),P=await this.applyRedirects.lineralizeSegments(r,w);return this.processSegment(i,n,e,P.concat(_),a,!1,s)}createSnapshot(i,e,n,r,o){let a=new os(n,r,Object.freeze(C({},this.urlTree.queryParams)),this.urlTree.fragment,MF(e),ci(e),e.component??e._loadedComponent??null,e,SF(e),i),s=Tv(a,o,this.paramsInheritanceStrategy);return a.params=Object.freeze(s.params),a.data=Object.freeze(s.data),a}async matchSegmentAgainstRoute(i,e,n,r,o,a){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let s=Rt=>this.createSnapshot(i,n,Rt.consumedSegments,Rt.parameters,a),l=await Nm(gF(e,n,r,i,this.urlSerializer,s,this.abortSignal));if(n.path==="**"&&(e.children={}),!l?.matched)throw new mr(e);i=n._injector??i;let{routes:d}=await this.getChildConfig(i,n,r),u=n._loadedInjector??i,{parameters:f,consumedSegments:_,remainingSegments:v}=l,w=this.createSnapshot(i,n,_,f,a),{segmentGroup:P,slicedSegments:U}=bx(e,_,v,d,o);if(U.length===0&&P.hasChildren()){let Rt=await this.processChildren(u,d,P,w);return new En(w,Rt)}if(d.length===0&&U.length===0)return new En(w,[]);let Q=ci(n)===o,Ae=await this.processSegment(u,d,P,U,Q?de:o,!0,w);return new En(w,Ae instanceof En?[Ae]:[])}async getChildConfig(i,e,n){if(e.children)return{routes:e.children,injector:i};if(e.loadChildren){if(e._loadedRoutes!==void 0){let o=e._loadedNgModuleFactory;return o&&!e._loadedInjector&&(e._loadedInjector=o.create(i).injector),{routes:e._loadedRoutes,injector:e._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(await Nm(cF(i,e,n,this.urlSerializer,this.abortSignal))){let o=await this.configLoader.loadChildren(i,e);return e._loadedRoutes=o.routes,e._loadedInjector=o.injector,e._loadedNgModuleFactory=o.factory,o}throw mF(e)}return{routes:[],injector:i}}};function xF(t){t.sort((i,e)=>i.value.outlet===de?-1:e.value.outlet===de?1:i.value.outlet.localeCompare(e.value.outlet))}function EF(t){let i=t.value.routeConfig;return i&&i.path===""}function Xx(t){let i=[],e=new Set;for(let n of t){if(!EF(n)){i.push(n);continue}let r=i.find(o=>n.value.routeConfig===o.value.routeConfig);r!==void 0?(r.children.push(...n.children),e.add(r)):i.push(n)}for(let n of e){let r=Xx(n.children);i.push(new En(n.value,r))}return i.filter(n=>!e.has(n))}function MF(t){return t.data||{}}function SF(t){return t.resolve||{}}function IF(t,i,e,n,r,o,a){return Vt(async s=>{let{state:l,tree:d}=await wF(t,i,e,n,s.extractedUrl,r,o,a);return ne(C({},s),{targetSnapshot:l,urlAfterRedirects:d})})}function TF(t){return Vt(i=>{let{targetSnapshot:e,guards:{canActivateChecks:n}}=i;if(!n.length)return q(i);let r=new Set(n.map(s=>s.route)),o=new Set;for(let s of r)if(!o.has(s))for(let l of Jx(s))o.add(l);let a=0;return $e(o).pipe(Tr(s=>r.has(s)?kF(s,e,t):(s.data=Tv(s,s.parent,t).resolve,q(void 0))),lt(()=>a++),Ld(1),Vt(s=>a===o.size?q(i):Je))})}function Jx(t){let i=t.children.map(e=>Jx(e)).flat();return[t,...i]}function kF(t,i,e){let n=t.routeConfig,r=t._resolve;return n?.title!==void 0&&!Hx(n)&&(r[cc]=n.title),Zn(()=>(t.data=Tv(t,t.parent,e).resolve,AF(r,t,i).pipe(le(o=>(t._resolvedData=o,t.data=C(C({},t.data),o),null)))))}function AF(t,i,e){let n=pv(t);if(n.length===0)return q({});let r={};return $e(n).pipe(Vt(o=>RF(t[o],i,e).pipe(Qi(),lt(a=>{if(a instanceof as)throw Qm(new fr,a);r[o]=a}))),Ld(1),le(()=>r),Ir(o=>Gx(o)?Je:_o(o)))}function RF(t,i,e){let n=i._environmentInjector,r=ls(t,n),o=r.resolve?r.resolve(i,e):xt(n,()=>r(i,e));return $o(o)}function yx(t){return pt(i=>{let e=t(i);return e?$e(e).pipe(le(()=>i)):q(i)})}var Nv=(()=>{class t{buildTitle(e){let n,r=e.root;for(;r!==void 0;)n=this.getResolvedTitleForRoute(r)??n,r=r.children.find(o=>o.outlet===de);return n}getResolvedTitleForRoute(e){return e.data[cc]}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:()=>c(eE),providedIn:"root"})}return t})(),eE=(()=>{class t extends Nv{title;constructor(e){super(),this.title=e}updateTitle(e){let n=this.buildTitle(e);n!==void 0&&this.title.setTitle(n)}static \u0275fac=function(n){return new(n||t)(W(mx))};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),qo=new y("",{factory:()=>({})}),Yo=new y(""),Jm=(()=>{class t{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=c(O_);async loadComponent(e,n){if(this.componentLoaders.get(n))return this.componentLoaders.get(n);if(n._loadedComponent)return Promise.resolve(n._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(n);let r=(async()=>{try{let o=await Dx(xt(e,()=>n.loadComponent())),a=await iE(nE(o));return this.onLoadEndListener&&this.onLoadEndListener(n),n._loadedComponent=a,a}finally{this.componentLoaders.delete(n)}})();return this.componentLoaders.set(n,r),r}loadChildren(e,n){if(this.childrenLoaders.get(n))return this.childrenLoaders.get(n);if(n._loadedRoutes)return Promise.resolve({routes:n._loadedRoutes,injector:n._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(n);let r=(async()=>{try{let o=await tE(n,this.compiler,e,this.onLoadEndListener);return n._loadedRoutes=o.routes,n._loadedInjector=o.injector,n._loadedNgModuleFactory=o.factory,o}finally{this.childrenLoaders.delete(n)}})();return this.childrenLoaders.set(n,r),r}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();async function tE(t,i,e,n){let r=await Dx(xt(e,()=>t.loadChildren())),o=await iE(nE(r)),a;o instanceof im||Array.isArray(o)?a=o:a=await i.compileModuleAsync(o),n&&n(t);let s,l,d=!1,u;return Array.isArray(a)?(l=a,d=!0):(s=a.create(e).injector,u=a,l=s.get(Yo,[],{optional:!0,self:!0}).flat()),{routes:l.map(Ov),injector:s,factory:u}}function OF(t){return t&&typeof t=="object"&&"default"in t}function nE(t){return OF(t)?t.default:t}async function iE(t){return t}var ef=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:()=>c(NF),providedIn:"root"})}return t})(),NF=(()=>{class t{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,n){return e}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Fv=new y(""),Pv=new y("");function rE(t,i,e){let n=t.get(Pv),r=t.get(Y);if(!r.startViewTransition||n.skipNextTransition)return n.skipNextTransition=!1,new Promise(d=>setTimeout(d));let o,a=new Promise(d=>{o=d}),s=r.startViewTransition(()=>(o(),FF(t)));s.updateCallbackDone.catch(d=>{}),s.ready.catch(d=>{}),s.finished.catch(d=>{});let{onViewTransitionCreated:l}=n;return l&&xt(t,()=>l({transition:s,from:i,to:e})),a}function FF(t){return new Promise(i=>{Ge({read:()=>setTimeout(i)},{injector:t})})}var PF=()=>{},Lv=new y(""),tf=(()=>{class t{currentNavigation=x(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=x(null);events=new S;transitionAbortWithErrorSubject=new S;configLoader=c(Jm);environmentInjector=c(Le);destroyRef=c(jt);urlSerializer=c(Wo);rootContexts=c(Go);location=c(Ni);inputBindingEnabled=c(uc,{optional:!0})!==null;titleStrategy=c(Nv);options=c(qo,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=c(ef);createViewTransition=c(Fv,{optional:!0});navigationErrorHandler=c(Lv,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>q(void 0);rootComponentType=null;destroyed=!1;constructor(){let e=r=>this.events.next(new Hm(r)),n=r=>this.events.next(new Um(r));this.configLoader.onLoadEndListener=n,this.configLoader.onLoadStartListener=e,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(e){let n=++this.navigationId;ot(()=>{this.transitions?.next(ne(C({},e),{extractedUrl:this.urlHandlingStrategy.extract(e.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:n,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(e){return this.transitions=new st(null),this.transitions.pipe(be(n=>n!==null),pt(n=>{let r=!1,o=new AbortController,a=()=>!r&&this.currentTransition?.id===n.id;return q(n).pipe(pt(s=>{if(this.navigationId>n.id)return this.cancelNavigationTransition(n,"",Qt.SupersededByNewNavigation),Je;this.currentTransition=n;let l=this.lastSuccessfulNavigation();this.currentNavigation.set({id:s.id,initialUrl:s.rawUrl,extractedUrl:s.extractedUrl,targetBrowserUrl:typeof s.extras.browserUrl=="string"?this.urlSerializer.parse(s.extras.browserUrl):s.extras.browserUrl,trigger:s.source,extras:s.extras,previousNavigation:l?ne(C({},l),{previousNavigation:null}):null,abort:()=>o.abort(),routesRecognizeHandler:s.routesRecognizeHandler,beforeActivateHandler:s.beforeActivateHandler});let d=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),u=s.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!d&&u!=="reload")return this.events.next(new Pi(s.id,this.urlSerializer.serialize(s.rawUrl),"",ts.IgnoredSameUrlNavigation)),s.resolve(!1),Je;if(this.urlHandlingStrategy.shouldProcessUrl(s.rawUrl))return q(s).pipe(pt(f=>(this.events.next(new Gr(f.id,this.urlSerializer.serialize(f.extractedUrl),f.source,f.restoredState)),f.id!==this.navigationId?Je:Promise.resolve(f))),IF(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy,o.signal),lt(f=>{n.targetSnapshot=f.targetSnapshot,n.urlAfterRedirects=f.urlAfterRedirects,this.currentNavigation.update(_=>(_.finalUrl=f.urlAfterRedirects,_)),this.events.next(new rc)}),pt(f=>$e(n.routesRecognizeHandler.deferredHandle??q(void 0)).pipe(le(()=>f))),lt(()=>{let f=new ic(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(f)}));if(d&&this.urlHandlingStrategy.shouldProcessUrl(s.currentRawUrl)){let{id:f,extractedUrl:_,source:v,restoredState:w,extras:P}=s,U=new Gr(f,this.urlSerializer.serialize(_),v,w);this.events.next(U);let Q=Bx(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=n=ne(C({},s),{targetSnapshot:Q,urlAfterRedirects:_,extras:ne(C({},P),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(Ae=>(Ae.finalUrl=_,Ae)),q(n)}else return this.events.next(new Pi(s.id,this.urlSerializer.serialize(s.extractedUrl),"",ts.IgnoredByUrlHandlingStrategy)),s.resolve(!1),Je}),le(s=>{let l=new Lm(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);return this.events.next(l),this.currentTransition=n=ne(C({},s),{guards:$N(s.targetSnapshot,s.currentSnapshot,this.rootContexts)}),n}),tF(s=>this.events.next(s)),pt(s=>{if(n.guardsResult=s.guardsResult,s.guardsResult&&typeof s.guardsResult!="boolean")throw Qm(this.urlSerializer,s.guardsResult);let l=new Vm(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot,!!s.guardsResult);if(this.events.next(l),!a())return Je;if(!s.guardsResult)return this.cancelNavigationTransition(s,"",Qt.GuardRejected),Je;if(s.guards.canActivateChecks.length===0)return q(s);let d=new Bm(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);if(this.events.next(d),!a())return Je;let u=!1;return q(s).pipe(TF(this.paramsInheritanceStrategy),lt({next:()=>{u=!0;let f=new jm(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(f)},complete:()=>{u||this.cancelNavigationTransition(s,"",Qt.NoDataFromResolver)}}))}),yx(s=>{let l=u=>{let f=[];if(u.routeConfig?._loadedComponent)u.component=u.routeConfig?._loadedComponent;else if(u.routeConfig?.loadComponent){let _=u._environmentInjector;f.push(this.configLoader.loadComponent(_,u.routeConfig).then(v=>{u.component=v}))}for(let _ of u.children)f.push(...l(_));return f},d=l(s.targetSnapshot.root);return d.length===0?q(s):$e(Promise.all(d).then(()=>s))}),yx(()=>this.afterPreactivation()),pt(()=>{let{currentSnapshot:s,targetSnapshot:l}=n,d=this.createViewTransition?.(this.environmentInjector,s.root,l.root);return d?$e(d).pipe(le(()=>n)):q(n)}),it(1),pt(s=>{let l=jN(e.routeReuseStrategy,s.targetSnapshot,s.currentRouterState);this.currentTransition=n=s=ne(C({},s),{targetRouterState:l}),this.currentNavigation.update(u=>(u.targetRouterState=l,u)),this.events.next(new is);let d=n.beforeActivateHandler.deferredHandle;return d?$e(d.then(()=>s)):q(s)}),lt(s=>{new xv(e.routeReuseStrategy,n.targetRouterState,n.currentRouterState,l=>this.events.next(l),this.inputBindingEnabled).activate(this.rootContexts),a()&&(r=!0,this.currentNavigation.update(l=>(l.abort=PF,l)),this.lastSuccessfulNavigation.set(ot(this.currentNavigation)),this.events.next(new di(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects))),this.titleStrategy?.updateTitle(s.targetRouterState.snapshot),s.resolve(!0))}),ye(qx(o.signal).pipe(be(()=>!r&&!n.targetRouterState),lt(()=>{this.cancelNavigationTransition(n,o.signal.reason+"",Qt.Aborted)}))),lt({complete:()=>{r=!0}}),ye(this.transitionAbortWithErrorSubject.pipe(lt(s=>{throw s}))),kr(()=>{o.abort(),r||this.cancelNavigationTransition(n,"",Qt.SupersededByNewNavigation),this.currentTransition?.id===n.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),Ir(s=>{if(r=!0,this.destroyed)return n.resolve(!1),Je;if(Wx(s))this.events.next(new Ln(n.id,this.urlSerializer.serialize(n.extractedUrl),s.message,s.cancellationCode)),zN(s)?this.events.next(new rs(s.url,s.navigationBehaviorOptions)):n.resolve(!1);else{let l=new zo(n.id,this.urlSerializer.serialize(n.extractedUrl),s,n.targetSnapshot??void 0);try{let d=xt(this.environmentInjector,()=>this.navigationErrorHandler?.(l));if(d instanceof as){let{message:u,cancellationCode:f}=Qm(this.urlSerializer,d);this.events.next(new Ln(n.id,this.urlSerializer.serialize(n.extractedUrl),u,f)),this.events.next(new rs(d.redirectTo,d.navigationBehaviorOptions))}else throw this.events.next(l),s}catch(d){this.options.resolveNavigationPromiseOnError?n.resolve(!1):n.reject(d)}}return Je}))}))}cancelNavigationTransition(e,n,r){let o=new Ln(e.id,this.urlSerializer.serialize(e.extractedUrl),n,r);this.events.next(o),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),n=ot(this.currentNavigation),r=n?.targetBrowserUrl??n?.extractedUrl;return e.toString()!==r?.toString()&&!n?.extras.skipLocationChange}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function LF(t){return t!==Xa}var oE=new y("");var aE=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:()=>c(VF),providedIn:"root"})}return t})(),Km=class{shouldDetach(i){return!1}store(i,e){}shouldAttach(i){return!1}retrieve(i){return null}shouldReuseRoute(i,e){return i.routeConfig===e.routeConfig}shouldDestroyInjector(i){return!0}},VF=(()=>{class t extends Km{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ze(t)))(r||t)}})();static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Vv=(()=>{class t{urlSerializer=c(Wo);options=c(qo,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=c(Ni);urlHandlingStrategy=c(ef);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new Vn;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:e,initialUrl:n,targetBrowserUrl:r}){let o=e!==void 0?this.urlHandlingStrategy.merge(e,n):n,a=r??o;return a instanceof Vn?this.urlSerializer.serialize(a):a}commitTransition({targetRouterState:e,finalUrl:n,initialUrl:r}){n&&e?(this.currentUrlTree=n,this.rawUrlTree=this.urlHandlingStrategy.merge(n,r),this.routerState=e):this.rawUrlTree=r}routerState=Bx(null,c(Le));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:()=>c(BF),providedIn:"root"})}return t})(),BF=(()=>{class t extends Vv{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(n=>{n.type==="popstate"&&setTimeout(()=>{e(n.url,n.state,"popstate",{replaceUrl:!0})})})}handleRouterEvent(e,n){e instanceof Gr?this.updateStateMemento():e instanceof Pi?this.commitTransition(n):e instanceof ic?this.urlUpdateStrategy==="eager"&&(n.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(n),n)):e instanceof is?(this.commitTransition(n),this.urlUpdateStrategy==="deferred"&&!n.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(n),n)):e instanceof Ln&&!Vx(e)?this.restoreHistory(n):e instanceof zo?this.restoreHistory(n,!0):e instanceof di&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,{extras:n,id:r}){let{replaceUrl:o,state:a}=n;if(this.location.isCurrentPathEqualTo(e)||o){let s=this.browserPageId,l=C(C({},a),this.generateNgRouterState(r,s));this.location.replaceState(e,"",l)}else{let s=C(C({},a),this.generateNgRouterState(r,this.browserPageId+1));this.location.go(e,"",s)}}restoreHistory(e,n=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,o=this.currentPageId-r;o!==0?this.location.historyGo(o):this.getCurrentUrlTree()===e.finalUrl&&o===0&&(this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(n&&this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:e}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,n){return this.canceledNavigationResolution==="computed"?{navigationId:e,\u0275routerPageId:n}:{navigationId:e}}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ze(t)))(r||t)}})();static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function nf(t,i){t.events.pipe(be(e=>e instanceof di||e instanceof Ln||e instanceof zo||e instanceof Pi),le(e=>e instanceof di||e instanceof Pi?0:(e instanceof Ln?e.code===Qt.Redirect||e.code===Qt.SupersededByNewNavigation:!1)?2:1),be(e=>e!==2),it(1)).subscribe(()=>{i()})}var cn=(()=>{class t{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=c(rm);stateManager=c(Vv);options=c(qo,{optional:!0})||{};pendingTasks=c(er);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=c(tf);urlSerializer=c(Wo);location=c(Ni);urlHandlingStrategy=c(ef);injector=c(Le);_events=new S;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=c(aE);injectorCleanup=c(oE,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=c(Yo,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!c(uc,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:e=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new ae;subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(n=>{try{let r=this.navigationTransitions.currentTransition,o=ot(this.navigationTransitions.currentNavigation);if(r!==null&&o!==null){if(this.stateManager.handleRouterEvent(n,o),n instanceof Ln&&n.code!==Qt.Redirect&&n.code!==Qt.SupersededByNewNavigation)this.navigated=!0;else if(n instanceof di)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(n instanceof rs){let a=n.navigationBehaviorOptions,s=this.urlHandlingStrategy.merge(n.url,r.currentRawUrl),l=C({scroll:r.extras.scroll,browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||LF(r.source)},a);this.scheduleNavigation(s,Xa,null,l,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}VN(n)&&this._events.next(n)}catch(r){this.navigationTransitions.transitionAbortWithErrorSubject.next(r)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),Xa,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,n,r,o)=>{this.navigateToSyncWithBrowser(e,r,n,o)})}navigateToSyncWithBrowser(e,n,r,o){let a=r?.navigationId?r:null;if(r){let l=C({},r);delete l.navigationId,delete l.\u0275routerPageId,Object.keys(l).length!==0&&(o.state=l)}let s=this.parseUrl(e);this.scheduleNavigation(s,n,a,o).catch(l=>{this.disposed||this.injector.get(Dn)(l)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return ot(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map(Ov),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,n={}){let{relativeTo:r,queryParams:o,fragment:a,queryParamsHandling:s,preserveFragment:l}=n,d=l?this.currentUrlTree.fragment:a,u=null;switch(s??this.options.defaultQueryParamsHandling){case"merge":u=C(C({},this.currentUrlTree.queryParams),o);break;case"preserve":u=this.currentUrlTree.queryParams;break;default:u=o||null}u!==null&&(u=this.removeEmptyProps(u));let f;try{let _=r?r.snapshot:this.routerState.snapshot.root;f=Nx(_)}catch{(typeof e[0]!="string"||e[0][0]!=="/")&&(e=[]),f=this.currentUrlTree.root}return Fx(f,e,u,d??null,this.urlSerializer)}navigateByUrl(e,n={skipLocationChange:!1}){let r=es(e)?e:this.parseUrl(e),o=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(o,Xa,null,n)}navigate(e,n={skipLocationChange:!1}){return jF(e),this.navigateByUrl(this.createUrlTree(e,n),n)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch{return this.console.warn(An(4018,!1)),this.urlSerializer.parse("/")}}isActive(e,n){let r;if(n===!0?r=C({},Ex):n===!1?r=C({},gv):r=C(C({},gv),n),es(e))return hx(this.currentUrlTree,e,r);let o=this.parseUrl(e);return hx(this.currentUrlTree,o,r)}removeEmptyProps(e){return Object.entries(e).reduce((n,[r,o])=>(o!=null&&(n[r]=o),n),{})}scheduleNavigation(e,n,r,o,a){if(this.disposed)return Promise.resolve(!1);let s,l,d;a?(s=a.resolve,l=a.reject,d=a.promise):d=new Promise((f,_)=>{s=f,l=_});let u=this.pendingTasks.add();return nf(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(u))}),this.navigationTransitions.handleNavigationRequest({source:n,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:o,resolve:s,reject:l,promise:d,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),d.catch(Promise.reject.bind(Promise))}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function jF(t){for(let i=0;i<t.length;i++)if(t[i]==null)throw new L(4008,!1)}var fc=class{};var sE=(()=>{class t{router;injector;preloadingStrategy;loader;subscription;constructor(e,n,r,o){this.router=e,this.injector=n,this.preloadingStrategy=r,this.loader=o}setUpPreloading(){this.subscription=this.router.events.pipe(be(e=>e instanceof di),Tr(()=>this.preload())).subscribe(()=>{})}preload(){return this.processRoutes(this.injector,this.router.config)}ngOnDestroy(){this.subscription?.unsubscribe()}processRoutes(e,n){let r=[];for(let o of n){o.providers&&!o._injector&&(o._injector=Wa(o.providers,e,""));let a=o._injector??e;o._loadedNgModuleFactory&&!o._loadedInjector&&(o._loadedInjector=o._loadedNgModuleFactory.create(a).injector);let s=o._loadedInjector??a;(o.loadChildren&&!o._loadedRoutes&&o.canLoad===void 0||o.loadComponent&&!o._loadedComponent)&&r.push(this.preloadConfig(a,o)),(o.children||o._loadedRoutes)&&r.push(this.processRoutes(s,o.children??o._loadedRoutes))}return $e(r).pipe(Mr())}preloadConfig(e,n){return this.preloadingStrategy.preload(n,()=>{if(e.destroyed)return q(null);let r;n.loadChildren&&n.canLoad===void 0?r=$e(this.loader.loadChildren(e,n)):r=q(null);let o=r.pipe(Vt(a=>a===null?q(void 0):(n._loadedRoutes=a.routes,n._loadedInjector=a.injector,n._loadedNgModuleFactory=a.factory,this.processRoutes(a.injector??e,a.routes))));if(n.loadComponent&&!n._loadedComponent){let a=this.loader.loadComponent(e,n);return $e([o,a]).pipe(Mr())}else return o})}static \u0275fac=function(n){return new(n||t)(W(cn),W(Le),W(fc),W(Jm))};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),lE=new y(""),UF=(()=>{class t{options;routerEventsSubscription;scrollEventsSubscription;lastId=0;lastSource=Xa;restoredId=0;store={};urlSerializer=c(Wo);zone=c(V);viewportScroller=c(G_);transitions=c(tf);constructor(e){this.options=e,this.options.scrollPositionRestoration||="disabled",this.options.anchorScrolling||="disabled"}init(){this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.setHistoryScrollRestoration("manual"),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.transitions.events.subscribe(e=>{e instanceof Gr?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=e.navigationTrigger,this.restoredId=e.restoredState?e.restoredState.navigationId:0):e instanceof di?(this.lastId=e.id,this.scheduleScrollEvent(e,this.urlSerializer.parse(e.urlAfterRedirects).fragment)):e instanceof Pi&&e.code===ts.IgnoredSameUrlNavigation&&(this.lastSource=void 0,this.restoredId=0,this.scheduleScrollEvent(e,this.urlSerializer.parse(e.url).fragment))})}consumeScrollEvents(){return this.transitions.events.subscribe(e=>{if(!(e instanceof ns)||e.scrollBehavior==="manual")return;let n={behavior:"instant"};e.position?this.options.scrollPositionRestoration==="top"?this.viewportScroller.scrollToPosition([0,0],n):this.options.scrollPositionRestoration==="enabled"&&this.viewportScroller.scrollToPosition(e.position,n):e.anchor&&this.options.anchorScrolling==="enabled"?this.viewportScroller.scrollToAnchor(e.anchor):this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.scrollToPosition([0,0])})}scheduleScrollEvent(e,n){let r=ot(this.transitions.currentNavigation)?.extras.scroll;this.zone.runOutsideAngular(async()=>{await new Promise(o=>{setTimeout(o),typeof requestAnimationFrame<"u"&&requestAnimationFrame(o)}),this.zone.run(()=>{this.transitions.events.next(new ns(e,this.lastSource==="popstate"?this.store[this.restoredId]:null,n,r))})})}ngOnDestroy(){this.routerEventsSubscription?.unsubscribe(),this.scrollEventsSubscription?.unsubscribe()}static \u0275fac=function(n){Pl()};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})();function jv(t,...i){return yi([{provide:Yo,multi:!0,useValue:t},[],{provide:hr,useFactory:cE},{provide:Vl,multi:!0,useFactory:dE},i.map(e=>e.\u0275providers)])}function cE(){return c(cn).routerState.root}function hc(t,i){return{\u0275kind:t,\u0275providers:i}}function dE(){let t=c(G);return i=>{let e=t.get(xn);if(i!==e.components[0])return;let n=t.get(cn),r=t.get(uE);t.get(Hv)===1&&n.initialNavigation(),t.get(hE,null,{optional:!0})?.setUpPreloading(),t.get(lE,null,{optional:!0})?.init(),n.resetRootComponentType(e.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var uE=new y("",{factory:()=>new S}),Hv=new y("",{factory:()=>1});function mE(){let t=[{provide:zu,useValue:!0},{provide:Hv,useValue:0},am(()=>{let i=c(G);return i.get(V_,Promise.resolve()).then(()=>new Promise(n=>{let r=i.get(cn),o=i.get(uE);nf(r,()=>{n(!0)}),i.get(tf).afterPreactivation=()=>(n(!0),o.closed?q(void 0):o),r.initialNavigation()}))})];return hc(2,t)}function fE(){let t=[am(()=>{c(cn).setUpLocationChangeListener()}),{provide:Hv,useValue:2}];return hc(3,t)}var hE=new y("");function pE(t){return hc(0,[{provide:hE,useExisting:sE},{provide:fc,useExisting:t}])}function gE(){return hc(8,[Av,{provide:uc,useExisting:Av}])}function _E(t){ii("NgRouterViewTransitions");let i=[{provide:Fv,useValue:rE},{provide:Pv,useValue:C({skipNextTransition:!!t?.skipInitialTransition},t)}];return hc(9,i)}var vE=[Ni,{provide:Wo,useClass:fr},cn,Go,{provide:hr,useFactory:cE},Jm,[]],Uv=(()=>{class t{constructor(){}static forRoot(e,n){return{ngModule:t,providers:[vE,[],{provide:Yo,multi:!0,useValue:e},[],n?.errorHandler?{provide:Lv,useValue:n.errorHandler}:[],{provide:qo,useValue:n||{}},n?.useHash?$F():WF(),zF(),n?.preloadingStrategy?pE(n.preloadingStrategy).\u0275providers:[],n?.initialNavigation?GF(n):[],n?.bindToComponentInputs?gE().\u0275providers:[],n?.enableViewTransitions?_E().\u0275providers:[],qF()]}}static forChild(e){return{ngModule:t,providers:[{provide:Yo,multi:!0,useValue:e}]}}static \u0275fac=function(n){return new(n||t)};static \u0275mod=$({type:t});static \u0275inj=z({})}return t})();function zF(){return{provide:lE,useFactory:()=>{let t=c(G_),i=c(qo);return i.scrollOffset&&t.setOffset(i.scrollOffset),new UF(i)}}}function $F(){return{provide:ur,useClass:H_}}function WF(){return{provide:ur,useClass:_m}}function GF(t){return[t.initialNavigation==="disabled"?fE().\u0275providers:[],t.initialNavigation==="enabledBlocking"?mE().\u0275providers:[]]}var Bv=new y("");function qF(){return[{provide:Bv,useFactory:dE},{provide:Vl,multi:!0,useExisting:Bv}]}var QF=new y("cdk-dir-doc",{providedIn:"root",factory:()=>c(Y)}),ZF=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function bE(t){let i=t?.toLowerCase()||"";return i==="auto"&&typeof navigator<"u"&&navigator?.language?ZF.test(navigator.language)?"rtl":"ltr":i==="rtl"?"rtl":"ltr"}var nt=(()=>{class t{get value(){return this.valueSignal()}valueSignal=x("ltr");change=new I;constructor(){let e=c(QF,{optional:!0});if(e){let n=e.body?e.body.dir:null,r=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(bE(n||r||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var ve=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=$({type:t});static \u0275inj=z({})}return t})();var KF=["*"];var XF=[[["","mat-card-avatar",""],["","matCardAvatar",""]],[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],"*"],JF=["[mat-card-avatar], [matCardAvatar]",`mat-card-title, mat-card-subtitle,
      [mat-card-title], [mat-card-subtitle],
      [matCardTitle], [matCardSubtitle]`,"*"],eP=new y("MAT_CARD_CONFIG"),yt=(()=>{class t{appearance;constructor(){let e=c(eP,{optional:!0});this.appearance=e?.appearance||"raised"}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=M({type:t,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(n,r){n&2&&F("mat-mdc-card-outlined",r.appearance==="outlined")("mdc-card--outlined",r.appearance==="outlined")("mat-mdc-card-filled",r.appearance==="filled")("mdc-card--filled",r.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:KF,decls:1,vars:0,template:function(n,r){n&1&&(De(),te(0))},styles:[`.mat-mdc-card {
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
`],encapsulation:2,changeDetection:0})}return t})(),cs=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=N({type:t,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-mdc-card-title"]})}return t})();var dn=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=N({type:t,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"]})}return t})(),yE=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=N({type:t,selectors:[["mat-card-subtitle"],["","mat-card-subtitle",""],["","matCardSubtitle",""]],hostAttrs:[1,"mat-mdc-card-subtitle"]})}return t})();var un=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=M({type:t,selectors:[["mat-card-header"]],hostAttrs:[1,"mat-mdc-card-header"],ngContentSelectors:JF,decls:4,vars:0,consts:[[1,"mat-mdc-card-header-text"]],template:function(n,r){n&1&&(De(XF),te(0),Te(1,"div",0),te(2,1),Oe(),te(3,2))},encapsulation:2,changeDetection:0})}return t})();var CE=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=N({type:t,selectors:[["","mat-card-avatar",""],["","matCardAvatar",""]],hostAttrs:[1,"mat-mdc-card-avatar"]})}return t})();var Bn=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=$({type:t});static \u0275inj=z({imports:[ve]})}return t})();function gc(t){return t.buttons===0||t.detail===0}function _c(t){let i=t.touches&&t.touches[0]||t.changedTouches&&t.changedTouches[0];return!!i&&i.identifier===-1&&(i.radiusX==null||i.radiusX===1)&&(i.radiusY==null||i.radiusY===1)}var zv;function wE(){if(zv==null){let t=typeof document<"u"?document.head:null;zv=!!(t&&(t.createShadowRoot||t.attachShadow))}return zv}function $v(t){if(wE()){let i=t.getRootNode?t.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&i instanceof ShadowRoot)return i}return null}function Li(){let t=typeof document<"u"&&document?document.activeElement:null;for(;t&&t.shadowRoot;){let i=t.shadowRoot.activeElement;if(i===t)break;t=i}return t}function zt(t){return t.composedPath?t.composedPath()[0]:t.target}var Wv;try{Wv=typeof Intl<"u"&&Intl.v8BreakIterator}catch{Wv=!1}var ue=(()=>{class t{_platformId=c(Lo);isBrowser=this._platformId?GD(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||Wv)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var vc;function DE(){if(vc==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>vc=!0}))}finally{vc=vc||!1}return vc}function ds(t){return DE()?t:!!t.capture}function Sn(t,i=0){return xE(t)?Number(t):arguments.length===2?i:0}function xE(t){return!isNaN(parseFloat(t))&&!isNaN(Number(t))}function tn(t){return t instanceof B?t.nativeElement:t}var EE=new y("cdk-input-modality-detector-options"),ME={ignoreKeys:[18,17,224,91,16]},SE=650,Gv={passive:!0,capture:!0},IE=(()=>{class t{_platform=c(ue);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new st(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(n=>n===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=zt(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<SE||(this._modality.next(gc(e)?"keyboard":"mouse"),this._mostRecentTarget=zt(e))};_onTouchstart=e=>{if(_c(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=zt(e)};constructor(){let e=c(V),n=c(Y),r=c(EE,{optional:!0});if(this._options=C(C({},ME),r),this.modalityDetected=this._modality.pipe(bo(1)),this.modalityChanged=this.modalityDetected.pipe(Pd()),this._platform.isBrowser){let o=c(_t).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[o.listen(n,"keydown",this._onKeydown,Gv),o.listen(n,"mousedown",this._onMousedown,Gv),o.listen(n,"touchstart",this._onTouchstart,Gv)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),bc=(function(t){return t[t.IMMEDIATE=0]="IMMEDIATE",t[t.EVENTUAL=1]="EVENTUAL",t})(bc||{}),TE=new y("cdk-focus-monitor-default-options"),rf=ds({passive:!0,capture:!0}),Vi=(()=>{class t{_ngZone=c(V);_platform=c(ue);_inputModalityDetector=c(IE);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=c(Y);_stopInputModalityDetector=new S;constructor(){let e=c(TE,{optional:!0});this._detectionMode=e?.detectionMode||bc.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let n=zt(e);for(let r=n;r;r=r.parentElement)e.type==="focus"?this._onFocus(e,r):this._onBlur(e,r)};monitor(e,n=!1){let r=tn(e);if(!this._platform.isBrowser||r.nodeType!==1)return q();let o=$v(r)||this._document,a=this._elementInfo.get(r);if(a)return n&&(a.checkChildren=!0),a.subject;let s={checkChildren:n,subject:new S,rootNode:o};return this._elementInfo.set(r,s),this._registerGlobalListeners(s),s.subject}stopMonitoring(e){let n=tn(e),r=this._elementInfo.get(n);r&&(r.subject.complete(),this._setClasses(n),this._elementInfo.delete(n),this._removeGlobalListeners(r))}focusVia(e,n,r){let o=tn(e),a=this._document.activeElement;o===a?this._getClosestElementsInfo(o).forEach(([s,l])=>this._originChanged(s,n,l)):(this._setOrigin(n),typeof o.focus=="function"&&o.focus(r))}ngOnDestroy(){this._elementInfo.forEach((e,n)=>this.stopMonitoring(n))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===bc.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,n){e.classList.toggle("cdk-focused",!!n),e.classList.toggle("cdk-touch-focused",n==="touch"),e.classList.toggle("cdk-keyboard-focused",n==="keyboard"),e.classList.toggle("cdk-mouse-focused",n==="mouse"),e.classList.toggle("cdk-program-focused",n==="program")}_setOrigin(e,n=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&n,this._detectionMode===bc.IMMEDIATE){clearTimeout(this._originTimeoutId);let r=this._originFromTouchInteraction?SE:1;this._originTimeoutId=setTimeout(()=>this._origin=null,r)}})}_onFocus(e,n){let r=this._elementInfo.get(n),o=zt(e);!r||!r.checkChildren&&n!==o||this._originChanged(n,this._getFocusOrigin(o),r)}_onBlur(e,n){let r=this._elementInfo.get(n);!r||r.checkChildren&&e.relatedTarget instanceof Node&&n.contains(e.relatedTarget)||(this._setClasses(n),this._emitOrigin(r,null))}_emitOrigin(e,n){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(n))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let n=e.rootNode,r=this._rootNodeFocusListenerCount.get(n)||0;r||this._ngZone.runOutsideAngular(()=>{n.addEventListener("focus",this._rootNodeFocusAndBlurListener,rf),n.addEventListener("blur",this._rootNodeFocusAndBlurListener,rf)}),this._rootNodeFocusListenerCount.set(n,r+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(ye(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(e){let n=e.rootNode;if(this._rootNodeFocusListenerCount.has(n)){let r=this._rootNodeFocusListenerCount.get(n);r>1?this._rootNodeFocusListenerCount.set(n,r-1):(n.removeEventListener("focus",this._rootNodeFocusAndBlurListener,rf),n.removeEventListener("blur",this._rootNodeFocusAndBlurListener,rf),this._rootNodeFocusListenerCount.delete(n))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,n,r){this._setClasses(e,n),this._emitOrigin(r,n),this._lastFocusOrigin=n}_getClosestElementsInfo(e){let n=[];return this._elementInfo.forEach((r,o)=>{(o===e||r.checkChildren&&o.contains(e))&&n.push([o,r])}),n}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:n,mostRecentModality:r}=this._inputModalityDetector;if(r!=="mouse"||!n||n===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let o=e.labels;if(o){for(let a=0;a<o.length;a++)if(o[a].contains(n))return!0}return!1}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),yc=(()=>{class t{_elementRef=c(B);_focusMonitor=c(Vi);_monitorSubscription;_focusOrigin=null;cdkFocusChange=new I;constructor(){}get focusOrigin(){return this._focusOrigin}ngAfterViewInit(){let e=this._elementRef.nativeElement;this._monitorSubscription=this._focusMonitor.monitor(e,e.nodeType===1&&e.hasAttribute("cdkMonitorSubtreeFocus")).subscribe(n=>{this._focusOrigin=n,this.cdkFocusChange.emit(n)})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._monitorSubscription?.unsubscribe()}static \u0275fac=function(n){return new(n||t)};static \u0275dir=N({type:t,selectors:[["","cdkMonitorElementFocus",""],["","cdkMonitorSubtreeFocus",""]],outputs:{cdkFocusChange:"cdkFocusChange"},exportAs:["cdkMonitorFocus"]})}return t})();var of=new WeakMap,qe=(()=>{class t{_appRef;_injector=c(G);_environmentInjector=c(Le);load(e){let n=this._appRef=this._appRef||this._injector.get(xn),r=of.get(n);r||(r={loaders:new Set,refs:[]},of.set(n,r),n.onDestroy(()=>{of.get(n)?.refs.forEach(o=>o.destroy()),of.delete(n)})),r.loaders.has(e)||(r.loaders.add(e),r.refs.push(hm(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Bi=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=M({type:t,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(n,r){},styles:[`.cdk-visually-hidden {
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
`],encapsulation:2,changeDetection:0})}return t})(),af;function tP(){if(af===void 0&&(af=null,typeof window<"u")){let t=window;t.trustedTypes!==void 0&&(af=t.trustedTypes.createPolicy("angular#components",{createHTML:i=>i}))}return af}function Qo(t){return tP()?.createHTML(t)||t}function kE(t,i,e){let n=e.sanitize(Ht.HTML,i);t.innerHTML=Qo(n||"")}function us(t){return Array.isArray(t)?t:[t]}var AE=new Set,Zo,ms=(()=>{class t{_platform=c(ue);_nonce=c(za,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):iP}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&nP(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function nP(t,i){if(!AE.has(t))try{Zo||(Zo=document.createElement("style"),i&&Zo.setAttribute("nonce",i),Zo.setAttribute("type","text/css"),document.head.appendChild(Zo)),Zo.sheet&&(Zo.sheet.insertRule(`@media ${t} {body{ }}`,0),AE.add(t))}catch(e){console.error(e)}}function iP(t){return{matches:t==="all"||t==="",media:t,addListener:()=>{},removeListener:()=>{}}}var Cc=(()=>{class t{_mediaMatcher=c(ms);_zone=c(V);_queries=new Map;_destroySubject=new S;constructor(){}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return RE(us(e)).some(r=>this._registerQuery(r).mql.matches)}observe(e){let r=RE(us(e)).map(a=>this._registerQuery(a).observable),o=va(r);return o=Sr(o.pipe(it(1)),o.pipe(bo(1),Yi(0))),o.pipe(le(a=>{let s={matches:!1,breakpoints:{}};return a.forEach(({matches:l,query:d})=>{s.matches=s.matches||l,s.breakpoints[d]=l}),s}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);let n=this._mediaMatcher.matchMedia(e),o={observable:new se(a=>{let s=l=>this._zone.run(()=>a.next(l));return n.addListener(s),()=>{n.removeListener(s)}}).pipe(Qe(n),le(({matches:a})=>({query:e,matches:a})),ye(this._destroySubject)),mql:n};return this._queries.set(e,o),o}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function RE(t){return t.map(i=>i.split(",")).reduce((i,e)=>i.concat(e)).map(i=>i.trim())}function rP(t){if(t.type==="characterData"&&t.target instanceof Comment)return!0;if(t.type==="childList"){for(let i=0;i<t.addedNodes.length;i++)if(!(t.addedNodes[i]instanceof Comment))return!1;for(let i=0;i<t.removedNodes.length;i++)if(!(t.removedNodes[i]instanceof Comment))return!1;return!0}return!1}var OE=(()=>{class t{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),NE=(()=>{class t{_mutationObserverFactory=c(OE);_observedElements=new Map;_ngZone=c(V);constructor(){}ngOnDestroy(){this._observedElements.forEach((e,n)=>this._cleanupObserver(n))}observe(e){let n=tn(e);return new se(r=>{let a=this._observeElement(n).pipe(le(s=>s.filter(l=>!rP(l))),be(s=>!!s.length)).subscribe(s=>{this._ngZone.run(()=>{r.next(s)})});return()=>{a.unsubscribe(),this._unobserveElement(n)}})}_observeElement(e){return this._ngZone.runOutsideAngular(()=>{if(this._observedElements.has(e))this._observedElements.get(e).count++;else{let n=new S,r=this._mutationObserverFactory.create(o=>n.next(o));r&&r.observe(e,{characterData:!0,childList:!0,subtree:!0}),this._observedElements.set(e,{observer:r,stream:n,count:1})}return this._observedElements.get(e).stream})}_unobserveElement(e){this._observedElements.has(e)&&(this._observedElements.get(e).count--,this._observedElements.get(e).count||this._cleanupObserver(e))}_cleanupObserver(e){if(this._observedElements.has(e)){let{observer:n,stream:r}=this._observedElements.get(e);n&&n.disconnect(),r.complete(),this._observedElements.delete(e)}}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),wc=(()=>{class t{_contentObserver=c(NE);_elementRef=c(B);event=new I;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._disabled?this._unsubscribe():this._subscribe()}_disabled=!1;get debounce(){return this._debounce}set debounce(e){this._debounce=Sn(e),this._subscribe()}_debounce;_currentSubscription=null;constructor(){}ngAfterContentInit(){!this._currentSubscription&&!this.disabled&&this._subscribe()}ngOnDestroy(){this._unsubscribe()}_subscribe(){this._unsubscribe();let e=this._contentObserver.observe(this._elementRef);this._currentSubscription=(this.debounce?e.pipe(Yi(this.debounce)):e).subscribe(this.event)}_unsubscribe(){this._currentSubscription?.unsubscribe()}static \u0275fac=function(n){return new(n||t)};static \u0275dir=N({type:t,selectors:[["","cdkObserveContent",""]],inputs:{disabled:[2,"cdkObserveContentDisabled","disabled",Z],debounce:"debounce"},outputs:{event:"cdkObserveContent"},exportAs:["cdkObserveContent"]})}return t})(),fs=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=$({type:t});static \u0275inj=z({providers:[OE]})}return t})();var Qv=(()=>{class t{_platform=c(ue);constructor(){}isDisabled(e){return e.hasAttribute("disabled")}isVisible(e){return aP(e)&&getComputedStyle(e).visibility==="visible"}isTabbable(e){if(!this._platform.isBrowser)return!1;let n=oP(hP(e));if(n&&(FE(n)===-1||!this.isVisible(n)))return!1;let r=e.nodeName.toLowerCase(),o=FE(e);return e.hasAttribute("contenteditable")?o!==-1:r==="iframe"||r==="object"||this._platform.WEBKIT&&this._platform.IOS&&!mP(e)?!1:r==="audio"?e.hasAttribute("controls")?o!==-1:!1:r==="video"?o===-1?!1:o!==null?!0:this._platform.FIREFOX||e.hasAttribute("controls"):e.tabIndex>=0}isFocusable(e,n){return fP(e)&&!this.isDisabled(e)&&(n?.ignoreVisibility||this.isVisible(e))}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function oP(t){try{return t.frameElement}catch{return null}}function aP(t){return!!(t.offsetWidth||t.offsetHeight||typeof t.getClientRects=="function"&&t.getClientRects().length)}function sP(t){let i=t.nodeName.toLowerCase();return i==="input"||i==="select"||i==="button"||i==="textarea"}function lP(t){return dP(t)&&t.type=="hidden"}function cP(t){return uP(t)&&t.hasAttribute("href")}function dP(t){return t.nodeName.toLowerCase()=="input"}function uP(t){return t.nodeName.toLowerCase()=="a"}function VE(t){if(!t.hasAttribute("tabindex")||t.tabIndex===void 0)return!1;let i=t.getAttribute("tabindex");return!!(i&&!isNaN(parseInt(i,10)))}function FE(t){if(!VE(t))return null;let i=parseInt(t.getAttribute("tabindex")||"",10);return isNaN(i)?-1:i}function mP(t){let i=t.nodeName.toLowerCase(),e=i==="input"&&t.type;return e==="text"||e==="password"||i==="select"||i==="textarea"}function fP(t){return lP(t)?!1:sP(t)||cP(t)||t.hasAttribute("contenteditable")||VE(t)}function hP(t){return t.ownerDocument&&t.ownerDocument.defaultView||window}var Yv=class{_element;_checker;_ngZone;_document;_injector;_startAnchor=null;_endAnchor=null;_hasAttached=!1;startAnchorListener=()=>this.focusLastTabbableElement();endAnchorListener=()=>this.focusFirstTabbableElement();get enabled(){return this._enabled}set enabled(i){this._enabled=i,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(i,this._startAnchor),this._toggleAnchorTabIndex(i,this._endAnchor))}_enabled=!0;constructor(i,e,n,r,o=!1,a){this._element=i,this._checker=e,this._ngZone=n,this._document=r,this._injector=a,o||this.attachAnchors()}destroy(){let i=this._startAnchor,e=this._endAnchor;i&&(i.removeEventListener("focus",this.startAnchorListener),i.remove()),e&&(e.removeEventListener("focus",this.endAnchorListener),e.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener("focus",this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener("focus",this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(i){return new Promise(e=>{this._executeOnStable(()=>e(this.focusInitialElement(i)))})}focusFirstTabbableElementWhenReady(i){return new Promise(e=>{this._executeOnStable(()=>e(this.focusFirstTabbableElement(i)))})}focusLastTabbableElementWhenReady(i){return new Promise(e=>{this._executeOnStable(()=>e(this.focusLastTabbableElement(i)))})}_getRegionBoundary(i){let e=this._element.querySelectorAll(`[cdk-focus-region-${i}], [cdkFocusRegion${i}], [cdk-focus-${i}]`);return i=="start"?e.length?e[0]:this._getFirstTabbableElement(this._element):e.length?e[e.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(i){let e=this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");if(e){if(!this._checker.isFocusable(e)){let n=this._getFirstTabbableElement(e);return n?.focus(i),!!n}return e.focus(i),!0}return this.focusFirstTabbableElement(i)}focusFirstTabbableElement(i){let e=this._getRegionBoundary("start");return e&&e.focus(i),!!e}focusLastTabbableElement(i){let e=this._getRegionBoundary("end");return e&&e.focus(i),!!e}hasAttached(){return this._hasAttached}_getFirstTabbableElement(i){if(this._checker.isFocusable(i)&&this._checker.isTabbable(i))return i;let e=i.children;for(let n=0;n<e.length;n++){let r=e[n].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(e[n]):null;if(r)return r}return null}_getLastTabbableElement(i){if(this._checker.isFocusable(i)&&this._checker.isTabbable(i))return i;let e=i.children;for(let n=e.length-1;n>=0;n--){let r=e[n].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(e[n]):null;if(r)return r}return null}_createAnchor(){let i=this._document.createElement("div");return this._toggleAnchorTabIndex(this._enabled,i),i.classList.add("cdk-visually-hidden"),i.classList.add("cdk-focus-trap-anchor"),i.setAttribute("aria-hidden","true"),i}_toggleAnchorTabIndex(i,e){i?e.setAttribute("tabindex","0"):e.removeAttribute("tabindex")}toggleAnchors(i){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(i,this._startAnchor),this._toggleAnchorTabIndex(i,this._endAnchor))}_executeOnStable(i){this._injector?Ge(i,{injector:this._injector}):setTimeout(i)}},sf=(()=>{class t{_checker=c(Qv);_ngZone=c(V);_document=c(Y);_injector=c(G);constructor(){c(qe).load(Bi)}create(e,n=!1){return new Yv(e,this._checker,this._ngZone,this._document,n,this._injector)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Zv=(()=>{class t{_elementRef=c(B);_focusTrapFactory=c(sf);focusTrap=void 0;_previouslyFocusedElement=null;get enabled(){return this.focusTrap?.enabled||!1}set enabled(e){this.focusTrap&&(this.focusTrap.enabled=e)}autoCapture=!1;constructor(){c(ue).isBrowser&&(this.focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement,!0))}ngOnDestroy(){this.focusTrap?.destroy(),this._previouslyFocusedElement&&(this._previouslyFocusedElement.focus(),this._previouslyFocusedElement=null)}ngAfterContentInit(){this.focusTrap?.attachAnchors(),this.autoCapture&&this._captureFocus()}ngDoCheck(){this.focusTrap&&!this.focusTrap.hasAttached()&&this.focusTrap.attachAnchors()}ngOnChanges(e){let n=e.autoCapture;n&&!n.firstChange&&this.autoCapture&&this.focusTrap?.hasAttached()&&this._captureFocus()}_captureFocus(){this._previouslyFocusedElement=Li(),this.focusTrap?.focusInitialElementWhenReady()}static \u0275fac=function(n){return new(n||t)};static \u0275dir=N({type:t,selectors:[["","cdkTrapFocus",""]],inputs:{enabled:[2,"cdkTrapFocus","enabled",Z],autoCapture:[2,"cdkTrapFocusAutoCapture","autoCapture",Z]},exportAs:["cdkTrapFocus"],features:[Be]})}return t})(),BE=new y("liveAnnouncerElement",{providedIn:"root",factory:()=>null}),jE=new y("LIVE_ANNOUNCER_DEFAULT_OPTIONS"),pP=0,Dc=(()=>{class t{_ngZone=c(V);_defaultOptions=c(jE,{optional:!0});_liveElement;_document=c(Y);_sanitizer=c(Kl);_previousTimeout;_currentPromise;_currentResolve;constructor(){let e=c(BE,{optional:!0});this._liveElement=e||this._createLiveElement()}announce(e,...n){let r=this._defaultOptions,o,a;return n.length===1&&typeof n[0]=="number"?a=n[0]:[o,a]=n,this.clear(),clearTimeout(this._previousTimeout),o||(o=r&&r.politeness?r.politeness:"polite"),a==null&&r&&(a=r.duration),this._liveElement.setAttribute("aria-live",o),this._liveElement.id&&this._exposeAnnouncerToModals(this._liveElement.id),this._ngZone.runOutsideAngular(()=>(this._currentPromise||(this._currentPromise=new Promise(s=>this._currentResolve=s)),clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{!e||typeof e=="string"?this._liveElement.textContent=e:kE(this._liveElement,e,this._sanitizer),typeof a=="number"&&(this._previousTimeout=setTimeout(()=>this.clear(),a)),this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0},100),this._currentPromise))}clear(){this._liveElement&&(this._liveElement.textContent="")}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement?.remove(),this._liveElement=null,this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0}_createLiveElement(){let e="cdk-live-announcer-element",n=this._document.getElementsByClassName(e),r=this._document.createElement("div");for(let o=0;o<n.length;o++)n[o].remove();return r.classList.add(e),r.classList.add("cdk-visually-hidden"),r.setAttribute("aria-atomic","true"),r.setAttribute("aria-live","polite"),r.id=`cdk-live-announcer-${pP++}`,this._document.body.appendChild(r),r}_exposeAnnouncerToModals(e){let n=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let r=0;r<n.length;r++){let o=n[r],a=o.getAttribute("aria-owns");a?a.indexOf(e)===-1&&o.setAttribute("aria-owns",a+" "+e):o.setAttribute("aria-owns",e)}}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var qr=(function(t){return t[t.NONE=0]="NONE",t[t.BLACK_ON_WHITE=1]="BLACK_ON_WHITE",t[t.WHITE_ON_BLACK=2]="WHITE_ON_BLACK",t})(qr||{}),PE="cdk-high-contrast-black-on-white",LE="cdk-high-contrast-white-on-black",qv="cdk-high-contrast-active",HE=(()=>{class t{_platform=c(ue);_hasCheckedHighContrastMode=!1;_document=c(Y);_breakpointSubscription;constructor(){this._breakpointSubscription=c(Cc).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return qr.NONE;let e=this._document.createElement("div");e.style.backgroundColor="rgb(1,2,3)",e.style.position="absolute",this._document.body.appendChild(e);let n=this._document.defaultView||window,r=n&&n.getComputedStyle?n.getComputedStyle(e):null,o=(r&&r.backgroundColor||"").replace(/ /g,"");switch(e.remove(),o){case"rgb(0,0,0)":case"rgb(45,50,54)":case"rgb(32,32,32)":return qr.WHITE_ON_BLACK;case"rgb(255,255,255)":case"rgb(255,250,239)":return qr.BLACK_ON_WHITE}return qr.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let e=this._document.body.classList;e.remove(qv,PE,LE),this._hasCheckedHighContrastMode=!0;let n=this.getHighContrastMode();n===qr.BLACK_ON_WHITE?e.add(qv,PE):n===qr.WHITE_ON_BLACK&&e.add(qv,LE)}}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Ko=(()=>{class t{constructor(){c(HE)._applyBodyHighContrastModeCssClasses()}static \u0275fac=function(n){return new(n||t)};static \u0275mod=$({type:t});static \u0275inj=z({imports:[fs]})}return t})();var gP=200,lf=class{_letterKeyStream=new S;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new S;selectedItem=this._selectedItem;constructor(i,e){let n=typeof e?.debounceInterval=="number"?e.debounceInterval:gP;e?.skipPredicate&&(this._skipPredicateFn=e.skipPredicate),this.setItems(i),this._setupKeyHandler(n)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(i){this._selectedItemIndex=i}setItems(i){this._items=i}handleKey(i){let e=i.keyCode;i.key&&i.key.length===1?this._letterKeyStream.next(i.key.toLocaleUpperCase()):(e>=65&&e<=90||e>=48&&e<=57)&&this._letterKeyStream.next(String.fromCharCode(e))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(i){this._letterKeyStream.pipe(lt(e=>this._pressedLetters.push(e)),Yi(i),be(()=>this._pressedLetters.length>0),le(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(e=>{for(let n=1;n<this._items.length+1;n++){let r=(this._selectedItemIndex+n)%this._items.length,o=this._items[r];if(!this._skipPredicateFn?.(o)&&o.getLabel?.().toLocaleUpperCase().trim().indexOf(e)===0){this._selectedItem.next(o);break}}this._pressedLetters=[]})}};function Ct(t,...i){return i.length?i.some(e=>t[e]):t.altKey||t.shiftKey||t.ctrlKey||t.metaKey}var hs=class{_items;_activeItemIndex=x(-1);_activeItem=x(null);_wrap=!1;_typeaheadSubscription=ae.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=i=>i.disabled;constructor(i,e){this._items=i,i instanceof tr?this._itemChangesSubscription=i.changes.subscribe(n=>this._itemsChanged(n.toArray())):Ai(i)&&(this._effectRef=Ft(()=>this._itemsChanged(i()),{injector:e}))}tabOut=new S;change=new S;skipPredicate(i){return this._skipPredicateFn=i,this}withWrap(i=!0){return this._wrap=i,this}withVerticalOrientation(i=!0){return this._vertical=i,this}withHorizontalOrientation(i){return this._horizontal=i,this}withAllowedModifierKeys(i){return this._allowedModifierKeys=i,this}withTypeAhead(i=200){this._typeaheadSubscription.unsubscribe();let e=this._getItemsArray();return this._typeahead=new lf(e,{debounceInterval:typeof i=="number"?i:void 0,skipPredicate:n=>this._skipPredicateFn(n)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(n=>{this.setActiveItem(n)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(i=!0){return this._homeAndEnd=i,this}withPageUpDown(i=!0,e=10){return this._pageUpAndDown={enabled:i,delta:e},this}setActiveItem(i){let e=this._activeItem();this.updateActiveItem(i),this._activeItem()!==e&&this.change.next(this._activeItemIndex())}onKeydown(i){let e=i.keyCode,r=["altKey","ctrlKey","metaKey","shiftKey"].every(o=>!i[o]||this._allowedModifierKeys.indexOf(o)>-1);switch(e){case 9:this.tabOut.next();return;case 40:if(this._vertical&&r){this.setNextItemActive();break}else return;case 38:if(this._vertical&&r){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&r){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&r){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&r){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&r){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(o>0?o:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()+this._pageUpAndDown.delta,a=this._getItemsArray().length;this._setActiveItemByIndex(o<a?o:a-1,-1);break}else return;default:(r||Ct(i,"shiftKey"))&&this._typeahead?.handleKey(i);return}this._typeahead?.reset(),i.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(i){let e=this._getItemsArray(),n=typeof i=="number"?i:e.indexOf(i),r=e[n];this._activeItem.set(r??null),this._activeItemIndex.set(n),this._typeahead?.setCurrentSelectedItemIndex(n)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(i){this._wrap?this._setActiveInWrapMode(i):this._setActiveInDefaultMode(i)}_setActiveInWrapMode(i){let e=this._getItemsArray();for(let n=1;n<=e.length;n++){let r=(this._activeItemIndex()+i*n+e.length)%e.length,o=e[r];if(!this._skipPredicateFn(o)){this.setActiveItem(r);return}}}_setActiveInDefaultMode(i){this._setActiveItemByIndex(this._activeItemIndex()+i,i)}_setActiveItemByIndex(i,e){let n=this._getItemsArray();if(n[i]){for(;this._skipPredicateFn(n[i]);)if(i+=e,!n[i])return;this.setActiveItem(i)}}_getItemsArray(){return Ai(this._items)?this._items():this._items instanceof tr?this._items.toArray():this._items}_itemsChanged(i){this._typeahead?.setItems(i);let e=this._activeItem();if(e){let n=i.indexOf(e);n>-1&&n!==this._activeItemIndex()&&(this._activeItemIndex.set(n),this._typeahead?.setCurrentSelectedItemIndex(n))}}};var xc=class extends hs{setActiveItem(i){this.activeItem&&this.activeItem.setInactiveStyles(),super.setActiveItem(i),this.activeItem&&this.activeItem.setActiveStyles()}};var Ec=class extends hs{_origin="program";setFocusOrigin(i){return this._origin=i,this}setActiveItem(i){super.setActiveItem(i),this.activeItem&&this.activeItem.focus(this._origin)}};var Kv={},Ye=class t{_appId=c(Hr);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(i,e=!1){return this._appId!=="ng"&&(i+=this._appId),Kv.hasOwnProperty(i)||(Kv[i]=0),`${i}${e?t._infix+"-":""}${Kv[i]++}`}static \u0275fac=function(e){return new(e||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})};var $E=" ";function eb(t,i,e){let n=hf(t,i);e=e.trim(),!n.some(r=>r.trim()===e)&&(n.push(e),t.setAttribute(i,n.join($E)))}function pf(t,i,e){let n=hf(t,i);e=e.trim();let r=n.filter(o=>o!==e);r.length?t.setAttribute(i,r.join($E)):t.removeAttribute(i)}function hf(t,i){return t.getAttribute(i)?.match(/\S+/g)??[]}var WE="cdk-describedby-message",ff="cdk-describedby-host",Jv=0,GE=(()=>{class t{_platform=c(ue);_document=c(Y);_messageRegistry=new Map;_messagesContainer=null;_id=`${Jv++}`;constructor(){c(qe).load(Bi),this._id=c(Hr)+"-"+Jv++}describe(e,n,r){if(!this._canBeDescribed(e,n))return;let o=Xv(n,r);typeof n!="string"?(zE(n,this._id),this._messageRegistry.set(o,{messageElement:n,referenceCount:0})):this._messageRegistry.has(o)||this._createMessageElement(n,r),this._isElementDescribedByMessage(e,o)||this._addMessageReference(e,o)}removeDescription(e,n,r){if(!n||!this._isElementNode(e))return;let o=Xv(n,r);if(this._isElementDescribedByMessage(e,o)&&this._removeMessageReference(e,o),typeof n=="string"){let a=this._messageRegistry.get(o);a&&a.referenceCount===0&&this._deleteMessageElement(o)}this._messagesContainer?.childNodes.length===0&&(this._messagesContainer.remove(),this._messagesContainer=null)}ngOnDestroy(){let e=this._document.querySelectorAll(`[${ff}="${this._id}"]`);for(let n=0;n<e.length;n++)this._removeCdkDescribedByReferenceIds(e[n]),e[n].removeAttribute(ff);this._messagesContainer?.remove(),this._messagesContainer=null,this._messageRegistry.clear()}_createMessageElement(e,n){let r=this._document.createElement("div");zE(r,this._id),r.textContent=e,n&&r.setAttribute("role",n),this._createMessagesContainer(),this._messagesContainer.appendChild(r),this._messageRegistry.set(Xv(e,n),{messageElement:r,referenceCount:0})}_deleteMessageElement(e){this._messageRegistry.get(e)?.messageElement?.remove(),this._messageRegistry.delete(e)}_createMessagesContainer(){if(this._messagesContainer)return;let e="cdk-describedby-message-container",n=this._document.querySelectorAll(`.${e}[platform="server"]`);for(let o=0;o<n.length;o++)n[o].remove();let r=this._document.createElement("div");r.style.visibility="hidden",r.classList.add(e),r.classList.add("cdk-visually-hidden"),this._platform.isBrowser||r.setAttribute("platform","server"),this._document.body.appendChild(r),this._messagesContainer=r}_removeCdkDescribedByReferenceIds(e){let n=hf(e,"aria-describedby").filter(r=>r.indexOf(WE)!=0);e.setAttribute("aria-describedby",n.join(" "))}_addMessageReference(e,n){let r=this._messageRegistry.get(n);eb(e,"aria-describedby",r.messageElement.id),e.setAttribute(ff,this._id),r.referenceCount++}_removeMessageReference(e,n){let r=this._messageRegistry.get(n);r.referenceCount--,pf(e,"aria-describedby",r.messageElement.id),e.removeAttribute(ff)}_isElementDescribedByMessage(e,n){let r=hf(e,"aria-describedby"),o=this._messageRegistry.get(n),a=o&&o.messageElement.id;return!!a&&r.indexOf(a)!=-1}_canBeDescribed(e,n){if(!this._isElementNode(e))return!1;if(n&&typeof n=="object")return!0;let r=n==null?"":`${n}`.trim(),o=e.getAttribute("aria-label");return r?!o||o.trim()!==r:!1}_isElementNode(e){return e.nodeType===this._document.ELEMENT_NODE}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Xv(t,i){return typeof t=="string"?`${i||""}/${t}`:t}function zE(t,i){t.id||(t.id=`${WE}-${i}-${Jv++}`)}var ui=(function(t){return t[t.NORMAL=0]="NORMAL",t[t.NEGATED=1]="NEGATED",t[t.INVERTED=2]="INVERTED",t})(ui||{}),gf,ea;function _f(){if(ea==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return ea=!1,ea;if(document.documentElement?.style&&"scrollBehavior"in document.documentElement.style)ea=!0;else{let t=Element.prototype.scrollTo;t?ea=!/\{\s*\[native code\]\s*\}/.test(t.toString()):ea=!1}}return ea}function _s(){if(typeof document!="object"||!document)return ui.NORMAL;if(gf==null){let t=document.createElement("div"),i=t.style;t.dir="rtl",i.width="1px",i.overflow="auto",i.visibility="hidden",i.pointerEvents="none",i.position="absolute";let e=document.createElement("div"),n=e.style;n.width="2px",n.height="1px",t.appendChild(e),document.body.appendChild(t),gf=ui.NORMAL,t.scrollLeft===0&&(t.scrollLeft=1,gf=t.scrollLeft===0?ui.NEGATED:ui.INVERTED),t.remove()}return gf}function tb(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}var vs,qE=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function nb(){if(vs)return vs;if(typeof document!="object"||!document)return vs=new Set(qE),vs;let t=document.createElement("input");return vs=new Set(qE.filter(i=>(t.setAttribute("type",i),t.type===i))),vs}var YE={XSmall:"(max-width: 599.98px)",Small:"(min-width: 600px) and (max-width: 959.98px)",Medium:"(min-width: 960px) and (max-width: 1279.98px)",Large:"(min-width: 1280px) and (max-width: 1919.98px)",XLarge:"(min-width: 1920px)",Handset:"(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)",Tablet:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",Web:"(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)",HandsetPortrait:"(max-width: 599.98px) and (orientation: portrait)",TabletPortrait:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)",WebPortrait:"(min-width: 840px) and (orientation: portrait)",HandsetLandscape:"(max-width: 959.98px) and (orientation: landscape)",TabletLandscape:"(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",WebLandscape:"(min-width: 1280px) and (orientation: landscape)"};var _P=new y("MATERIAL_ANIMATIONS"),QE=null;function vP(){return c(_P,{optional:!0})?.animationsDisabled||c(Al,{optional:!0})==="NoopAnimations"?"di-disabled":(QE??=c(ms).matchMedia("(prefers-reduced-motion)").matches,QE?"reduced-motion":"enabled")}function je(){return vP()!=="enabled"}function mt(t){return t==null?"":typeof t=="string"?t:`${t}px`}function Lt(t){return t!=null&&`${t}`!="false"}var jn=(function(t){return t[t.FADING_IN=0]="FADING_IN",t[t.VISIBLE=1]="VISIBLE",t[t.FADING_OUT=2]="FADING_OUT",t[t.HIDDEN=3]="HIDDEN",t})(jn||{}),ib=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=jn.HIDDEN;constructor(i,e,n,r=!1){this._renderer=i,this.element=e,this.config=n,this._animationForciblyDisabledThroughCss=r}fadeOut(){this._renderer.fadeOutRipple(this)}},ZE=ds({passive:!0,capture:!0}),rb=class{_events=new Map;addHandler(i,e,n,r){let o=this._events.get(e);if(o){let a=o.get(n);a?a.add(r):o.set(n,new Set([r]))}else this._events.set(e,new Map([[n,new Set([r])]])),i.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,ZE)})}removeHandler(i,e,n){let r=this._events.get(i);if(!r)return;let o=r.get(e);o&&(o.delete(n),o.size===0&&r.delete(e),r.size===0&&(this._events.delete(i),document.removeEventListener(i,this._delegateEventHandler,ZE)))}_delegateEventHandler=i=>{let e=zt(i);e&&this._events.get(i.type)?.forEach((n,r)=>{(r===e||r.contains(e))&&n.forEach(o=>o.handleEvent(i))})}},Mc={enterDuration:225,exitDuration:150},bP=800,KE=ds({passive:!0,capture:!0}),XE=["mousedown","touchstart"],JE=["mouseup","mouseleave","touchend","touchcancel"],yP=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=M({type:t,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(n,r){},styles:[`.mat-ripple {
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
`],encapsulation:2,changeDetection:0})}return t})(),ta=class t{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new rb;constructor(i,e,n,r,o){this._target=i,this._ngZone=e,this._platform=r,r.isBrowser&&(this._containerElement=tn(n)),o&&o.get(qe).load(yP)}fadeInRipple(i,e,n={}){let r=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=C(C({},Mc),n.animation);n.centered&&(i=r.left+r.width/2,e=r.top+r.height/2);let a=n.radius||CP(i,e,r),s=i-r.left,l=e-r.top,d=o.enterDuration,u=document.createElement("div");u.classList.add("mat-ripple-element"),u.style.left=`${s-a}px`,u.style.top=`${l-a}px`,u.style.height=`${a*2}px`,u.style.width=`${a*2}px`,n.color!=null&&(u.style.backgroundColor=n.color),u.style.transitionDuration=`${d}ms`,this._containerElement.appendChild(u);let f=window.getComputedStyle(u),_=f.transitionProperty,v=f.transitionDuration,w=_==="none"||v==="0s"||v==="0s, 0s"||r.width===0&&r.height===0,P=new ib(this,u,n,w);u.style.transform="scale3d(1, 1, 1)",P.state=jn.FADING_IN,n.persistent||(this._mostRecentTransientRipple=P);let U=null;return!w&&(d||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let Q=()=>{U&&(U.fallbackTimer=null),clearTimeout(Rt),this._finishRippleTransition(P)},Ae=()=>this._destroyRipple(P),Rt=setTimeout(Ae,d+100);u.addEventListener("transitionend",Q),u.addEventListener("transitioncancel",Ae),U={onTransitionEnd:Q,onTransitionCancel:Ae,fallbackTimer:Rt}}),this._activeRipples.set(P,U),(w||!d)&&this._finishRippleTransition(P),P}fadeOutRipple(i){if(i.state===jn.FADING_OUT||i.state===jn.HIDDEN)return;let e=i.element,n=C(C({},Mc),i.config.animation);e.style.transitionDuration=`${n.exitDuration}ms`,e.style.opacity="0",i.state=jn.FADING_OUT,(i._animationForciblyDisabledThroughCss||!n.exitDuration)&&this._finishRippleTransition(i)}fadeOutAll(){this._getActiveRipples().forEach(i=>i.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(i=>{i.config.persistent||i.fadeOut()})}setupTriggerEvents(i){let e=tn(i);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,XE.forEach(n=>{t._eventManager.addHandler(this._ngZone,n,e,this)}))}handleEvent(i){i.type==="mousedown"?this._onMousedown(i):i.type==="touchstart"?this._onTouchStart(i):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{JE.forEach(e=>{this._triggerElement.addEventListener(e,this,KE)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(i){i.state===jn.FADING_IN?this._startFadeOutTransition(i):i.state===jn.FADING_OUT&&this._destroyRipple(i)}_startFadeOutTransition(i){let e=i===this._mostRecentTransientRipple,{persistent:n}=i.config;i.state=jn.VISIBLE,!n&&(!e||!this._isPointerDown)&&i.fadeOut()}_destroyRipple(i){let e=this._activeRipples.get(i)??null;this._activeRipples.delete(i),this._activeRipples.size||(this._containerRect=null),i===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),i.state=jn.HIDDEN,e!==null&&(i.element.removeEventListener("transitionend",e.onTransitionEnd),i.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),i.element.remove()}_onMousedown(i){let e=gc(i),n=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+bP;!this._target.rippleDisabled&&!e&&!n&&(this._isPointerDown=!0,this.fadeInRipple(i.clientX,i.clientY,this._target.rippleConfig))}_onTouchStart(i){if(!this._target.rippleDisabled&&!_c(i)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=i.changedTouches;if(e)for(let n=0;n<e.length;n++)this.fadeInRipple(e[n].clientX,e[n].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(i=>{let e=i.state===jn.VISIBLE||i.config.terminateOnPointerUp&&i.state===jn.FADING_IN;!i.config.persistent&&e&&i.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let i=this._triggerElement;i&&(XE.forEach(e=>t._eventManager.removeHandler(e,i,this)),this._pointerUpEventsRegistered&&(JE.forEach(e=>i.removeEventListener(e,this,KE)),this._pointerUpEventsRegistered=!1))}};function CP(t,i,e){let n=Math.max(Math.abs(t-e.left),Math.abs(t-e.right)),r=Math.max(Math.abs(i-e.top),Math.abs(i-e.bottom));return Math.sqrt(n*n+r*r)}var na=new y("mat-ripple-global-options"),ia=(()=>{class t{_elementRef=c(B);_animationsDisabled=je();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=c(V),n=c(ue),r=c(na,{optional:!0}),o=c(G);this._globalOptions=r||{},this._rippleRenderer=new ta(this,e,this._elementRef,n,o)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:C(C(C({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,n=0,r){return typeof e=="number"?this._rippleRenderer.fadeInRipple(e,n,C(C({},this.rippleConfig),r)):this._rippleRenderer.fadeInRipple(0,0,C(C({},this.rippleConfig),e))}static \u0275fac=function(n){return new(n||t)};static \u0275dir=N({type:t,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(n,r){n&2&&F("mat-ripple-unbounded",r.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return t})();var wP={capture:!0},DP=["focus","mousedown","mouseenter","touchstart"],ob="mat-ripple-loader-uninitialized",ab="mat-ripple-loader-class-name",eM="mat-ripple-loader-centered",vf="mat-ripple-loader-disabled",tM=(()=>{class t{_document=c(Y);_animationsDisabled=je();_globalRippleOptions=c(na,{optional:!0});_platform=c(ue);_ngZone=c(V);_injector=c(G);_eventCleanups;_hosts=new Map;constructor(){let e=c(_t).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>DP.map(n=>e.listen(this._document,n,this._onInteraction,wP)))}ngOnDestroy(){let e=this._hosts.keys();for(let n of e)this.destroyRipple(n);this._eventCleanups.forEach(n=>n())}configureRipple(e,n){e.setAttribute(ob,this._globalRippleOptions?.namespace??""),(n.className||!e.hasAttribute(ab))&&e.setAttribute(ab,n.className||""),n.centered&&e.setAttribute(eM,""),n.disabled&&e.setAttribute(vf,"")}setDisabled(e,n){let r=this._hosts.get(e);r?(r.target.rippleDisabled=n,!n&&!r.hasSetUpEvents&&(r.hasSetUpEvents=!0,r.renderer.setupTriggerEvents(e))):n?e.setAttribute(vf,""):e.removeAttribute(vf)}_onInteraction=e=>{let n=zt(e);if(n instanceof HTMLElement){let r=n.closest(`[${ob}="${this._globalRippleOptions?.namespace??""}"]`);r&&this._createRipple(r)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let n=this._document.createElement("span");n.classList.add("mat-ripple",e.getAttribute(ab)),e.append(n);let r=this._globalRippleOptions,o=this._animationsDisabled?0:r?.animation?.enterDuration??Mc.enterDuration,a=this._animationsDisabled?0:r?.animation?.exitDuration??Mc.exitDuration,s={rippleDisabled:this._animationsDisabled||r?.disabled||e.hasAttribute(vf),rippleConfig:{centered:e.hasAttribute(eM),terminateOnPointerUp:r?.terminateOnPointerUp,animation:{enterDuration:o,exitDuration:a}}},l=new ta(s,this._ngZone,n,this._platform,this._injector),d=!s.rippleDisabled;d&&l.setupTriggerEvents(e),this._hosts.set(e,{target:s,renderer:l,hasSetUpEvents:d}),e.removeAttribute(ob)}destroyRipple(e){let n=this._hosts.get(e);n&&(n.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var mi=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=M({type:t,selectors:[["structural-styles"]],decls:0,vars:0,template:function(n,r){},styles:[`.mat-focus-indicator {
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
`],encapsulation:2,changeDetection:0})}return t})();var xP=["mat-icon-button",""],EP=["*"],MP=new y("MAT_BUTTON_CONFIG");function nM(t){return t==null?void 0:si(t)}var sb=(()=>{class t{_elementRef=c(B);_ngZone=c(V);_animationsDisabled=je();_config=c(MP,{optional:!0});_focusMonitor=c(Vi);_cleanupClick;_renderer=c(Re);_rippleLoader=c(tM);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}constructor(){c(qe).load(mi);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e="program",n){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,n):this._elementRef.nativeElement.focus(n)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static \u0275fac=function(n){return new(n||t)};static \u0275dir=N({type:t,hostAttrs:[1,"mat-mdc-button-base"],hostVars:13,hostBindings:function(n,r){n&2&&(K("disabled",r._getDisabledAttribute())("aria-disabled",r._getAriaDisabled())("tabindex",r._getTabIndex()),It(r.color?"mat-"+r.color:""),F("mat-mdc-button-disabled",r.disabled)("mat-mdc-button-disabled-interactive",r.disabledInteractive)("mat-unthemed",!r.color)("_mat-animation-noopable",r._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",Z],disabled:[2,"disabled","disabled",Z],ariaDisabled:[2,"aria-disabled","ariaDisabled",Z],disabledInteractive:[2,"disabledInteractive","disabledInteractive",Z],tabIndex:[2,"tabIndex","tabIndex",nM],_tabindex:[2,"tabindex","_tabindex",nM]}})}return t})(),ji=(()=>{class t extends sb{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=M({type:t,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[ge],attrs:xP,ngContentSelectors:EP,decls:4,vars:0,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(n,r){n&1&&(De(),sn(0,"span",0),te(1),sn(2,"span",1)(3,"span",2))},styles:[`.mat-mdc-icon-button {
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
`],encapsulation:2,changeDetection:0})}return t})();var bs=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=$({type:t});static \u0275inj=z({imports:[ve]})}return t})();var SP=["matButton",""],IP=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]]],TP=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"];var iM=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),$t=(()=>{class t extends sb{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let e=kP(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let n=this._elementRef.nativeElement.classList,r=this._appearance?iM.get(this._appearance):null,o=iM.get(e);r&&n.remove(...r),n.add(...o),this._appearance=e}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=M({type:t,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[ge],attrs:SP,ngContentSelectors:TP,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(n,r){n&1&&(De(IP),sn(0,"span",0),te(1),Te(2,"span",1),te(3,1),Oe(),te(4,2),sn(5,"span",2)(6,"span",3)),n&2&&F("mdc-button__ripple",!r._isFab)("mdc-fab__ripple",r._isFab)},styles:[`.mat-mdc-button-base {
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
`],encapsulation:2,changeDetection:0})}return t})();function kP(t){return t.hasAttribute("mat-raised-button")?"elevated":t.hasAttribute("mat-stroked-button")?"outlined":t.hasAttribute("mat-flat-button")?"filled":t.hasAttribute("mat-button")?"text":null}var ft=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=$({type:t});static \u0275inj=z({imports:[bs,ve]})}return t})();var lb=class{_box;_destroyed=new S;_resizeSubject=new S;_resizeObserver;_elementObservables=new Map;constructor(i){this._box=i,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(i){return this._elementObservables.has(i)||this._elementObservables.set(i,new se(e=>{let n=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(i,{box:this._box}),()=>{this._resizeObserver?.unobserve(i),n.unsubscribe(),this._elementObservables.delete(i)}}).pipe(be(e=>e.some(n=>n.target===i)),Bd({bufferSize:1,refCount:!0}),ye(this._destroyed))),this._elementObservables.get(i)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},bf=(()=>{class t{_cleanupErrorListener;_observers=new Map;_ngZone=c(V);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,n){let r=n?.box||"content-box";return this._observers.has(r)||this._observers.set(r,new lb(r)),this._observers.get(r).observe(e)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var AP=["notch"],RP=["matFormFieldNotchedOutline",""],OP=["*"],rM=["iconPrefixContainer"],oM=["textPrefixContainer"],aM=["iconSuffixContainer"],sM=["textSuffixContainer"],NP=["textField"],FP=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],PP=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function LP(t,i){t&1&&T(0,"span",21)}function VP(t,i){if(t&1&&(m(0,"label",20),te(1,1),j(2,LP,1,0,"span",21),h()),t&2){let e=D(2);A("floating",e._shouldLabelFloat())("monitorResize",e._hasOutline())("id",e._labelId),K("for",e._control.disableAutomaticLabeling?null:e._control.id),p(2),H(!e.hideRequiredMarker&&e._control.required?2:-1)}}function BP(t,i){if(t&1&&j(0,VP,3,5,"label",20),t&2){let e=D();H(e._hasFloatingLabel()?0:-1)}}function jP(t,i){t&1&&T(0,"div",7)}function HP(t,i){}function UP(t,i){if(t&1&&dt(0,HP,0,0,"ng-template",13),t&2){D(2);let e=ln(1);A("ngTemplateOutlet",e)}}function zP(t,i){if(t&1&&(m(0,"div",9),j(1,UP,1,1,null,13),h()),t&2){let e=D();A("matFormFieldNotchedOutlineOpen",e._shouldLabelFloat()),p(),H(e._forceDisplayInfixLabel()?-1:1)}}function $P(t,i){t&1&&(m(0,"div",10,2),te(2,2),h())}function WP(t,i){t&1&&(m(0,"div",11,3),te(2,3),h())}function GP(t,i){}function qP(t,i){if(t&1&&dt(0,GP,0,0,"ng-template",13),t&2){D();let e=ln(1);A("ngTemplateOutlet",e)}}function YP(t,i){t&1&&(m(0,"div",14,4),te(2,4),h())}function QP(t,i){t&1&&(m(0,"div",15,5),te(2,5),h())}function ZP(t,i){t&1&&T(0,"div",16)}function KP(t,i){t&1&&(m(0,"div",18),te(1,6),h())}function XP(t,i){if(t&1&&(m(0,"mat-hint",22),g(1),h()),t&2){let e=D(2);A("id",e._hintLabelId),p(),oe(e.hintLabel)}}function JP(t,i){if(t&1&&(m(0,"div",19),j(1,XP,2,2,"mat-hint",22),te(2,7),T(3,"div",23),te(4,8),h()),t&2){let e=D();p(),H(e.hintLabel?1:-1)}}var Hn=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=N({type:t,selectors:[["mat-label"]]})}return t})(),eL=new y("MatError");var Cf=(()=>{class t{align="start";id=c(Ye).getId("mat-mdc-hint-");static \u0275fac=function(n){return new(n||t)};static \u0275dir=N({type:t,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(n,r){n&2&&(Yt("id",r.id),K("align",null),F("mat-mdc-form-field-hint-end",r.align==="end"))},inputs:{align:"align",id:"id"}})}return t})(),hM=new y("MatPrefix"),wf=(()=>{class t{set _isTextSelector(e){this._isText=!0}_isText=!1;static \u0275fac=function(n){return new(n||t)};static \u0275dir=N({type:t,selectors:[["","matPrefix",""],["","matIconPrefix",""],["","matTextPrefix",""]],inputs:{_isTextSelector:[0,"matTextPrefix","_isTextSelector"]},features:[Ue([{provide:hM,useExisting:t}])]})}return t})(),pM=new y("MatSuffix"),Df=(()=>{class t{set _isTextSelector(e){this._isText=!0}_isText=!1;static \u0275fac=function(n){return new(n||t)};static \u0275dir=N({type:t,selectors:[["","matSuffix",""],["","matIconSuffix",""],["","matTextSuffix",""]],inputs:{_isTextSelector:[0,"matTextSuffix","_isTextSelector"]},features:[Ue([{provide:pM,useExisting:t}])]})}return t})(),gM=new y("FloatingLabelParent"),lM=(()=>{class t{_elementRef=c(B);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=c(bf);_ngZone=c(V);_parent=c(gM);_resizeSubscription=new ae;constructor(){}ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return tL(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(n){return new(n||t)};static \u0275dir=N({type:t,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(n,r){n&2&&F("mdc-floating-label--float-above",r.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return t})();function tL(t){let i=t;if(i.offsetParent!==null)return i.scrollWidth;let e=i.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let n=e.scrollWidth;return e.remove(),n}var cM="mdc-line-ripple--active",yf="mdc-line-ripple--deactivating",dM=(()=>{class t{_elementRef=c(B);_cleanupTransitionEnd;constructor(){let e=c(V),n=c(Re);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=n.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(yf),e.add(cM)}deactivate(){this._elementRef.nativeElement.classList.add(yf)}_handleTransitionEnd=e=>{let n=this._elementRef.nativeElement.classList,r=n.contains(yf);e.propertyName==="opacity"&&r&&n.remove(cM,yf)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(n){return new(n||t)};static \u0275dir=N({type:t,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return t})(),uM=(()=>{class t{_elementRef=c(B);_ngZone=c(V);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,n=e.querySelector(".mdc-floating-label");n?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(n.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>n.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){let n=this._notch.nativeElement;!this.open||!e?n.style.width="":n.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=M({type:t,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(n,r){if(n&1&&Ce(AP,5),n&2){let o;R(o=O())&&(r._notch=o.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(n,r){n&2&&F("mdc-notched-outline--notched",r.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},attrs:RP,ngContentSelectors:OP,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(n,r){n&1&&(De(),sn(0,"div",1),Te(1,"div",2,0),te(3),Oe(),sn(4,"div",3))},encapsulation:2,changeDetection:0})}return t})(),Sc=(()=>{class t{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(n){return new(n||t)};static \u0275dir=N({type:t})}return t})();var Ic=new y("MatFormField"),nL=new y("MAT_FORM_FIELD_DEFAULT_OPTIONS"),mM="fill",iL="auto",fM="fixed",rL="translateY(-50%)",kt=(()=>{class t{_elementRef=c(B);_changeDetectorRef=c(xe);_platform=c(ue);_idGenerator=c(Ye);_ngZone=c(V);_defaults=c(nL,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=ai("iconPrefixContainer");_textPrefixContainerSignal=ai("textPrefixContainer");_iconSuffixContainerSignal=ai("iconSuffixContainer");_textSuffixContainerSignal=ai("textSuffixContainer");_prefixSuffixContainers=ut(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=PD(Hn);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=Lt(e)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||iL}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let n=e||this._defaults?.appearance||mM;this._appearanceSignal.set(n)}_appearanceSignal=x(mM);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||fM}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||fM}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new S;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=je();constructor(){let e=this._defaults,n=c(nt);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),Ft(()=>this._currentDirection=n.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=ut(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){let n=this._control,r="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(r+e.controlType),n.controlType&&this._elementRef.nativeElement.classList.add(r+n.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=n.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=n.stateChanges.pipe(Qe([void 0,void 0]),le(()=>[n.errorState,n.userAriaDescribedBy]),Vd(),be(([[o,a],[s,l]])=>o!==s||a!==l)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),n.ngControl&&n.ngControl.valueChanges&&(this._valueChanges=n.ngControl.valueChanges.pipe(ye(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),Nt(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){jD({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=ut(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let n=this._control?this._control.ngControl:null;return n&&n[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let o=this._hintChildren?this._hintChildren.find(s=>s.align==="start"):null,a=this._hintChildren?this._hintChildren.find(s=>s.align==="end"):null;o?e.push(o.id):this._hintLabel&&e.push(this._hintLabelId),a&&e.push(a.id)}else this._errorChildren&&e.push(...this._errorChildren.map(o=>o.id));let n=this._control.describedByIds,r;if(n){let o=this._describedByIds||e;r=e.concat(n.filter(a=>a&&!o.includes(a)))}else r=e;this._control.setDescribedByIds(r),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,n=this._textPrefixContainer?.nativeElement,r=this._iconSuffixContainer?.nativeElement,o=this._textSuffixContainer?.nativeElement,a=e?.getBoundingClientRect().width??0,s=n?.getBoundingClientRect().width??0,l=r?.getBoundingClientRect().width??0,d=o?.getBoundingClientRect().width??0,u=this._currentDirection==="rtl"?"-1":"1",f=`${a+s}px`,v=`calc(${u} * (${f} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,w=`var(--mat-mdc-form-field-label-transform, ${rL} translateX(${v}))`,P=a+s+l+d;return[w,P]}_writeOutlinedLabelStyles(e){if(e!==null){let[n,r]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=n),r!==null&&this._notchedOutline?._setMaxWidth(r)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let n=e.getRootNode();return n&&n!==e}return document.documentElement.contains(e)}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=M({type:t,selectors:[["mat-form-field"]],contentQueries:function(n,r,o){if(n&1&&(lm(o,r._labelChild,Hn,5),vt(o,Sc,5)(o,hM,5)(o,pM,5)(o,eL,5)(o,Cf,5)),n&2){Oi();let a;R(a=O())&&(r._formFieldControl=a.first),R(a=O())&&(r._prefixChildren=a),R(a=O())&&(r._suffixChildren=a),R(a=O())&&(r._errorChildren=a),R(a=O())&&(r._hintChildren=a)}},viewQuery:function(n,r){if(n&1&&(Ri(r._iconPrefixContainerSignal,rM,5)(r._textPrefixContainerSignal,oM,5)(r._iconSuffixContainerSignal,aM,5)(r._textSuffixContainerSignal,sM,5),Ce(NP,5)(rM,5)(oM,5)(aM,5)(sM,5)(lM,5)(uM,5)(dM,5)),n&2){Oi(4);let o;R(o=O())&&(r._textField=o.first),R(o=O())&&(r._iconPrefixContainer=o.first),R(o=O())&&(r._textPrefixContainer=o.first),R(o=O())&&(r._iconSuffixContainer=o.first),R(o=O())&&(r._textSuffixContainer=o.first),R(o=O())&&(r._floatingLabel=o.first),R(o=O())&&(r._notchedOutline=o.first),R(o=O())&&(r._lineRipple=o.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(n,r){n&2&&F("mat-mdc-form-field-label-always-float",r._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",r._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",r._hasIconSuffix)("mat-form-field-invalid",r._control.errorState)("mat-form-field-disabled",r._control.disabled)("mat-form-field-autofilled",r._control.autofilled)("mat-form-field-appearance-fill",r.appearance=="fill")("mat-form-field-appearance-outline",r.appearance=="outline")("mat-form-field-hide-placeholder",r._hasFloatingLabel()&&!r._shouldLabelFloat())("mat-primary",r.color!=="accent"&&r.color!=="warn")("mat-accent",r.color==="accent")("mat-warn",r.color==="warn")("ng-untouched",r._shouldForward("untouched"))("ng-touched",r._shouldForward("touched"))("ng-pristine",r._shouldForward("pristine"))("ng-dirty",r._shouldForward("dirty"))("ng-valid",r._shouldForward("valid"))("ng-invalid",r._shouldForward("invalid"))("ng-pending",r._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[Ue([{provide:Ic,useExisting:t},{provide:gM,useExisting:t}])],ngContentSelectors:PP,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(n,r){if(n&1&&(De(FP),dt(0,BP,1,1,"ng-template",null,0,cm),m(2,"div",6,1),E("click",function(a){return r._control.onContainerClick(a)}),j(4,jP,1,0,"div",7),m(5,"div",8),j(6,zP,2,2,"div",9),j(7,$P,3,0,"div",10),j(8,WP,3,0,"div",11),m(9,"div",12),j(10,qP,1,1,null,13),te(11),h(),j(12,YP,3,0,"div",14),j(13,QP,3,0,"div",15),h(),j(14,ZP,1,0,"div",16),h(),m(15,"div",17),j(16,KP,2,0,"div",18)(17,JP,5,1,"div",19),h()),n&2){let o;p(2),F("mdc-text-field--filled",!r._hasOutline())("mdc-text-field--outlined",r._hasOutline())("mdc-text-field--no-label",!r._hasFloatingLabel())("mdc-text-field--disabled",r._control.disabled)("mdc-text-field--invalid",r._control.errorState),p(2),H(!r._hasOutline()&&!r._control.disabled?4:-1),p(2),H(r._hasOutline()?6:-1),p(),H(r._hasIconPrefix?7:-1),p(),H(r._hasTextPrefix?8:-1),p(2),H(!r._hasOutline()||r._forceDisplayInfixLabel()?10:-1),p(2),H(r._hasTextSuffix?12:-1),p(),H(r._hasIconSuffix?13:-1),p(),H(r._hasOutline()?-1:14),p(),F("mat-mdc-form-field-subscript-dynamic-size",r.subscriptSizing==="dynamic");let a=r._getSubscriptMessageType();p(),H((o=a)==="error"?16:o==="hint"?17:-1)}},dependencies:[lM,uM,U_,dM,Cf],styles:[`.mdc-text-field {
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
`],encapsulation:2,changeDetection:0})}return t})();var At=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=$({type:t});static \u0275inj=z({imports:[fs,kt,ve]})}return t})();function _M(t){return Error(`Unable to find icon with the name "${t}"`)}function aL(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function vM(t){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${t}".`)}function bM(t){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${t}".`)}var pr=class{url;svgText;options;svgElement=null;constructor(i,e,n){this.url=i,this.svgText=e,this.options=n}},CM=(()=>{class t{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(e,n,r,o){this._httpClient=e,this._sanitizer=n,this._errorHandler=o,this._document=r}addSvgIcon(e,n,r){return this.addSvgIconInNamespace("",e,n,r)}addSvgIconLiteral(e,n,r){return this.addSvgIconLiteralInNamespace("",e,n,r)}addSvgIconInNamespace(e,n,r,o){return this._addSvgIconConfig(e,n,new pr(r,null,o))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,n,r,o){let a=this._sanitizer.sanitize(Ht.HTML,r);if(!a)throw bM(r);let s=Qo(a);return this._addSvgIconConfig(e,n,new pr("",s,o))}addSvgIconSet(e,n){return this.addSvgIconSetInNamespace("",e,n)}addSvgIconSetLiteral(e,n){return this.addSvgIconSetLiteralInNamespace("",e,n)}addSvgIconSetInNamespace(e,n,r){return this._addSvgIconSetConfig(e,new pr(n,null,r))}addSvgIconSetLiteralInNamespace(e,n,r){let o=this._sanitizer.sanitize(Ht.HTML,n);if(!o)throw bM(n);let a=Qo(o);return this._addSvgIconSetConfig(e,new pr("",a,r))}registerFontClassAlias(e,n=e){return this._fontCssClassesByAlias.set(e,n),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(e){let n=this._sanitizer.sanitize(Ht.RESOURCE_URL,e);if(!n)throw vM(e);let r=this._cachedIconsByUrl.get(n);return r?q(xf(r)):this._loadSvgIconFromConfig(new pr(e,null)).pipe(lt(o=>this._cachedIconsByUrl.set(n,o)),le(o=>xf(o)))}getNamedSvgIcon(e,n=""){let r=yM(n,e),o=this._svgIconConfigs.get(r);if(o)return this._getSvgFromConfig(o);if(o=this._getIconConfigFromResolvers(n,e),o)return this._svgIconConfigs.set(r,o),this._getSvgFromConfig(o);let a=this._iconSetConfigs.get(n);return a?this._getSvgFromIconSetConfigs(e,a):_o(_M(r))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?q(xf(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe(le(n=>xf(n)))}_getSvgFromIconSetConfigs(e,n){let r=this._extractIconWithNameFromAnySet(e,n);if(r)return q(r);let o=n.filter(a=>!a.svgText).map(a=>this._loadSvgIconSetFromConfig(a).pipe(Ir(s=>{let d=`Loading icon set URL: ${this._sanitizer.sanitize(Ht.RESOURCE_URL,a.url)} failed: ${s.message}`;return this._errorHandler.handleError(new Error(d)),q(null)})));return el(o).pipe(le(()=>{let a=this._extractIconWithNameFromAnySet(e,n);if(!a)throw _M(e);return a}))}_extractIconWithNameFromAnySet(e,n){for(let r=n.length-1;r>=0;r--){let o=n[r];if(o.svgText&&o.svgText.toString().indexOf(e)>-1){let a=this._svgElementFromConfig(o),s=this._extractSvgIconFromSet(a,e,o.options);if(s)return s}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe(lt(n=>e.svgText=n),le(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?q(null):this._fetchIcon(e).pipe(lt(n=>e.svgText=n))}_extractSvgIconFromSet(e,n,r){let o=e.querySelector(`[id="${n}"]`);if(!o)return null;let a=o.cloneNode(!0);if(a.removeAttribute("id"),a.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(a,r);if(a.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(a),r);let s=this._svgElementFromString(Qo("<svg></svg>"));return s.appendChild(a),this._setSvgAttributes(s,r)}_svgElementFromString(e){let n=this._document.createElement("DIV");n.innerHTML=e;let r=n.querySelector("svg");if(!r)throw Error("<svg> tag not found");return r}_toSvgElement(e){let n=this._svgElementFromString(Qo("<svg></svg>")),r=e.attributes;for(let o=0;o<r.length;o++){let{name:a,value:s}=r[o];a!=="id"&&n.setAttribute(a,s)}for(let o=0;o<e.childNodes.length;o++)e.childNodes[o].nodeType===this._document.ELEMENT_NODE&&n.appendChild(e.childNodes[o].cloneNode(!0));return n}_setSvgAttributes(e,n){return e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),n&&n.viewBox&&e.setAttribute("viewBox",n.viewBox),e}_fetchIcon(e){let{url:n,options:r}=e,o=r?.withCredentials??!1;if(!this._httpClient)throw aL();if(n==null)throw Error(`Cannot fetch icon from URL "${n}".`);let a=this._sanitizer.sanitize(Ht.RESOURCE_URL,n);if(!a)throw vM(n);let s=this._inProgressUrlFetches.get(a);if(s)return s;let l=this._httpClient.get(a,{responseType:"text",withCredentials:o}).pipe(le(d=>Qo(d)),kr(()=>this._inProgressUrlFetches.delete(a)),nl());return this._inProgressUrlFetches.set(a,l),l}_addSvgIconConfig(e,n,r){return this._svgIconConfigs.set(yM(e,n),r),this}_addSvgIconSetConfig(e,n){let r=this._iconSetConfigs.get(e);return r?r.push(n):this._iconSetConfigs.set(e,[n]),this}_svgElementFromConfig(e){if(!e.svgElement){let n=this._svgElementFromString(e.svgText);this._setSvgAttributes(n,e.options),e.svgElement=n}return e.svgElement}_getIconConfigFromResolvers(e,n){for(let r=0;r<this._resolvers.length;r++){let o=this._resolvers[r](n,e);if(o)return sL(o)?new pr(o.url,null,o.options):new pr(o,null)}}static \u0275fac=function(n){return new(n||t)(W(bt,8),W(Kl),W(Y,8),W(qt))};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function xf(t){return t.cloneNode(!0)}function yM(t,i){return t+":"+i}function sL(t){return!!(t.url&&t.options)}var lL=["*"],cL=new y("MAT_ICON_DEFAULT_OPTIONS"),dL=new y("mat-icon-location",{providedIn:"root",factory:()=>{let t=c(Y),i=t?t.location:null;return{getPathname:()=>i?i.pathname+i.search:""}}}),wM=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],uL=wM.map(t=>`[${t}]`).join(", "),mL=/^url\(['"]?#(.*?)['"]?\)$/,wt=(()=>{class t{_elementRef=c(B);_iconRegistry=c(CM);_location=c(dL);_errorHandler=c(qt);_defaultColor;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(e){let n=this._cleanupFontValue(e);n!==this._fontSet&&(this._fontSet=n,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(e){let n=this._cleanupFontValue(e);n!==this._fontIcon&&(this._fontIcon=n,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=ae.EMPTY;constructor(){let e=c(new oi("aria-hidden"),{optional:!0}),n=c(cL,{optional:!0});n&&(n.color&&(this.color=this._defaultColor=n.color),n.fontSet&&(this.fontSet=n.fontSet)),e||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(e){if(!e)return["",""];let n=e.split(":");switch(n.length){case 1:return["",n[0]];case 2:return n;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let n=this._location.getPathname();n!==this._previousPath&&(this._previousPath=n,this._prependPathToReferences(n))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();let n=this._location.getPathname();this._previousPath=n,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(n),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){let e=this._elementRef.nativeElement,n=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();n--;){let r=e.childNodes[n];(r.nodeType!==1||r.nodeName.toLowerCase()==="svg")&&r.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,n=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(r=>r.length>0);this._previousFontSetClass.forEach(r=>e.classList.remove(r)),n.forEach(r=>e.classList.add(r)),this._previousFontSetClass=n,this.fontIcon!==this._previousFontIconClass&&!n.includes("mat-ligature-font")&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return typeof e=="string"?e.trim().split(" ")[0]:e}_prependPathToReferences(e){let n=this._elementsWithExternalReferences;n&&n.forEach((r,o)=>{r.forEach(a=>{o.setAttribute(a.name,`url('${e}#${a.value}')`)})})}_cacheChildrenWithExternalReferences(e){let n=e.querySelectorAll(uL),r=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let o=0;o<n.length;o++)wM.forEach(a=>{let s=n[o],l=s.getAttribute(a),d=l?l.match(mL):null;if(d){let u=r.get(s);u||(u=[],r.set(s,u)),u.push({name:a,value:d[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[n,r]=this._splitIconName(e);n&&(this._svgNamespace=n),r&&(this._svgName=r),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(r,n).pipe(it(1)).subscribe(o=>this._setSvgElement(o),o=>{let a=`Error retrieving icon ${n}:${r}! ${o.message}`;this._errorHandler.handleError(new Error(a))})}}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=M({type:t,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(n,r){n&2&&(K("data-mat-icon-type",r._usingFontIcon()?"font":"svg")("data-mat-icon-name",r._svgName||r.fontIcon)("data-mat-icon-namespace",r._svgNamespace||r.fontSet)("fontIcon",r._usingFontIcon()?r.fontIcon:null),It(r.color?"mat-"+r.color:""),F("mat-icon-inline",r.inline)("mat-icon-no-color",r.color!=="primary"&&r.color!=="accent"&&r.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",Z],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:lL,decls:1,vars:0,template:function(n,r){n&1&&(De(),te(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
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
`],encapsulation:2,changeDetection:0})}return t})(),Zt=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=$({type:t});static \u0275inj=z({imports:[ve]})}return t})();var fL=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=M({type:t,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(n,r){},styles:[`textarea.cdk-textarea-autosize {
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
`],encapsulation:2,changeDetection:0})}return t})(),hL={passive:!0},DM=(()=>{class t{_platform=c(ue);_ngZone=c(V);_renderer=c(_t).createRenderer(null,null);_styleLoader=c(qe);_monitoredElements=new Map;constructor(){}monitor(e){if(!this._platform.isBrowser)return Je;this._styleLoader.load(fL);let n=tn(e),r=this._monitoredElements.get(n);if(r)return r.subject;let o=new S,a="cdk-text-field-autofilled",s=d=>{d.animationName==="cdk-text-field-autofill-start"&&!n.classList.contains(a)?(n.classList.add(a),this._ngZone.run(()=>o.next({target:d.target,isAutofilled:!0}))):d.animationName==="cdk-text-field-autofill-end"&&n.classList.contains(a)&&(n.classList.remove(a),this._ngZone.run(()=>o.next({target:d.target,isAutofilled:!1})))},l=this._ngZone.runOutsideAngular(()=>(n.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(n,"animationstart",s,hL)));return this._monitoredElements.set(n,{subject:o,unlisten:l}),o}stopMonitoring(e){let n=tn(e),r=this._monitoredElements.get(n);r&&(r.unlisten(),r.subject.complete(),n.classList.remove("cdk-text-field-autofill-monitored"),n.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(n))}ngOnDestroy(){this._monitoredElements.forEach((e,n)=>this.stopMonitoring(n))}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var xM=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=$({type:t});static \u0275inj=z({})}return t})();var OM=(()=>{class t{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,n){this._renderer=e,this._elementRef=n}setProperty(e,n){this._renderer.setProperty(this._elementRef.nativeElement,e,n)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(n){return new(n||t)(we(Re),we(B))};static \u0275dir=N({type:t})}return t})(),pL=(()=>{class t extends OM{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ze(t)))(r||t)}})();static \u0275dir=N({type:t,features:[ge]})}return t})(),mb=new y("");var gL={provide:mb,useExisting:vn(()=>mn),multi:!0};function _L(){let t=Pn()?Pn().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var vL=new y(""),mn=(()=>{class t extends OM{_compositionMode;_composing=!1;constructor(e,n,r){super(e,n),this._compositionMode=r,this._compositionMode==null&&(this._compositionMode=!_L())}writeValue(e){let n=e??"";this.setProperty("value",n)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(n){return new(n||t)(we(Re),we(B),we(vL,8))};static \u0275dir=N({type:t,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(n,r){n&1&&E("input",function(a){return r._handleInput(a.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(a){return r._compositionEnd(a.target.value)})},standalone:!1,features:[Ue([gL]),ge]})}return t})();function fb(t){return t==null||hb(t)===0}function hb(t){return t==null?null:Array.isArray(t)||typeof t=="string"?t.length:t instanceof Set?t.size:null}var Nf=new y(""),Ff=new y(""),bL=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,fi=class{static min(i){return yL(i)}static max(i){return CL(i)}static required(i){return wL(i)}static requiredTrue(i){return DL(i)}static email(i){return xL(i)}static minLength(i){return EL(i)}static maxLength(i){return ML(i)}static pattern(i){return SL(i)}static nullValidator(i){return NM()}static compose(i){return jM(i)}static composeAsync(i){return HM(i)}};function yL(t){return i=>{if(i.value==null||t==null)return null;let e=parseFloat(i.value);return!isNaN(e)&&e<t?{min:{min:t,actual:i.value}}:null}}function CL(t){return i=>{if(i.value==null||t==null)return null;let e=parseFloat(i.value);return!isNaN(e)&&e>t?{max:{max:t,actual:i.value}}:null}}function wL(t){return fb(t.value)?{required:!0}:null}function DL(t){return t.value===!0?null:{required:!0}}function xL(t){return fb(t.value)||bL.test(t.value)?null:{email:!0}}function EL(t){return i=>{let e=i.value?.length??hb(i.value);return e===null||e===0?null:e<t?{minlength:{requiredLength:t,actualLength:e}}:null}}function ML(t){return i=>{let e=i.value?.length??hb(i.value);return e!==null&&e>t?{maxlength:{requiredLength:t,actualLength:e}}:null}}function SL(t){if(!t)return NM;let i,e;return typeof t=="string"?(e="",t.charAt(0)!=="^"&&(e+="^"),e+=t,t.charAt(t.length-1)!=="$"&&(e+="$"),i=new RegExp(e)):(e=t.toString(),i=t),n=>{if(fb(n.value))return null;let r=n.value;return i.test(r)?null:{pattern:{requiredPattern:e,actualValue:r}}}}function NM(t){return null}function FM(t){return t!=null}function PM(t){return rr(t)?$e(t):t}function LM(t){let i={};return t.forEach(e=>{i=e!=null?C(C({},i),e):i}),Object.keys(i).length===0?null:i}function VM(t,i){return i.map(e=>e(t))}function IL(t){return!t.validate}function BM(t){return t.map(i=>IL(i)?i:e=>i.validate(e))}function jM(t){if(!t)return null;let i=t.filter(FM);return i.length==0?null:function(e){return LM(VM(e,i))}}function pb(t){return t!=null?jM(BM(t)):null}function HM(t){if(!t)return null;let i=t.filter(FM);return i.length==0?null:function(e){let n=VM(e,i).map(PM);return el(n).pipe(le(LM))}}function gb(t){return t!=null?HM(BM(t)):null}function EM(t,i){return t===null?[i]:Array.isArray(t)?[...t,i]:[t,i]}function UM(t){return t._rawValidators}function zM(t){return t._rawAsyncValidators}function cb(t){return t?Array.isArray(t)?t:[t]:[]}function Mf(t,i){return Array.isArray(t)?t.includes(i):t===i}function MM(t,i){let e=cb(i);return cb(t).forEach(r=>{Mf(e,r)||e.push(r)}),e}function SM(t,i){return cb(i).filter(e=>!Mf(t,e))}var Sf=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(i){this._rawValidators=i||[],this._composedValidatorFn=pb(this._rawValidators)}_setAsyncValidators(i){this._rawAsyncValidators=i||[],this._composedAsyncValidatorFn=gb(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(i){this._onDestroyCallbacks.push(i)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(i=>i()),this._onDestroyCallbacks=[]}reset(i=void 0){this.control?.reset(i)}hasError(i,e){return this.control?this.control.hasError(i,e):!1}getError(i,e){return this.control?this.control.getError(i,e):null}},gr=class extends Sf{name;get formDirective(){return null}get path(){return null}},hi=class extends Sf{_parent=null;name=null;valueAccessor=null},If=class{_cd;constructor(i){this._cd=i}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var Un=(()=>{class t extends If{constructor(e){super(e)}static \u0275fac=function(n){return new(n||t)(we(hi,2))};static \u0275dir=N({type:t,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(n,r){n&2&&F("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},standalone:!1,features:[ge]})}return t})(),Pf=(()=>{class t extends If{constructor(e){super(e)}static \u0275fac=function(n){return new(n||t)(we(gr,10))};static \u0275dir=N({type:t,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["","formArray",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(n,r){n&2&&F("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},standalone:!1,features:[ge]})}return t})();var Tc="VALID",Ef="INVALID",Cs="PENDING",kc="DISABLED",Qr=class{},Tf=class extends Qr{value;source;constructor(i,e){super(),this.value=i,this.source=e}},Rc=class extends Qr{pristine;source;constructor(i,e){super(),this.pristine=i,this.source=e}},Oc=class extends Qr{touched;source;constructor(i,e){super(),this.touched=i,this.source=e}},ws=class extends Qr{status;source;constructor(i,e){super(),this.status=i,this.source=e}},kf=class extends Qr{source;constructor(i){super(),this.source=i}},Fc=class extends Qr{source;constructor(i){super(),this.source=i}};function _b(t){return(Lf(t)?t.validators:t)||null}function TL(t){return Array.isArray(t)?pb(t):t||null}function vb(t,i){return(Lf(i)?i.asyncValidators:t)||null}function kL(t){return Array.isArray(t)?gb(t):t||null}function Lf(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function $M(t,i,e){let n=t.controls;if(!(i?Object.keys(n):n).length)throw new L(1e3,"");if(!n[e])throw new L(1001,"")}function WM(t,i,e){t._forEachChild((n,r)=>{if(e[r]===void 0)throw new L(1002,"")})}var Ds=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(i,e){this._assignValidators(i),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(i){this._rawValidators=this._composedValidatorFn=i}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(i){this._rawAsyncValidators=this._composedAsyncValidatorFn=i}get parent(){return this._parent}get status(){return ot(this.statusReactive)}set status(i){ot(()=>this.statusReactive.set(i))}_status=ut(()=>this.statusReactive());statusReactive=x(void 0);get valid(){return this.status===Tc}get invalid(){return this.status===Ef}get pending(){return this.status===Cs}get disabled(){return this.status===kc}get enabled(){return this.status!==kc}errors;get pristine(){return ot(this.pristineReactive)}set pristine(i){ot(()=>this.pristineReactive.set(i))}_pristine=ut(()=>this.pristineReactive());pristineReactive=x(!0);get dirty(){return!this.pristine}get touched(){return ot(this.touchedReactive)}set touched(i){ot(()=>this.touchedReactive.set(i))}_touched=ut(()=>this.touchedReactive());touchedReactive=x(!1);get untouched(){return!this.touched}_events=new S;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(i){this._assignValidators(i)}setAsyncValidators(i){this._assignAsyncValidators(i)}addValidators(i){this.setValidators(MM(i,this._rawValidators))}addAsyncValidators(i){this.setAsyncValidators(MM(i,this._rawAsyncValidators))}removeValidators(i){this.setValidators(SM(i,this._rawValidators))}removeAsyncValidators(i){this.setAsyncValidators(SM(i,this._rawAsyncValidators))}hasValidator(i){return Mf(this._rawValidators,i)}hasAsyncValidator(i){return Mf(this._rawAsyncValidators,i)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(i={}){let e=this.touched===!1;this.touched=!0;let n=i.sourceControl??this;i.onlySelf||this._parent?.markAsTouched(ne(C({},i),{sourceControl:n})),e&&i.emitEvent!==!1&&this._events.next(new Oc(!0,n))}markAllAsDirty(i={}){this.markAsDirty({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(i))}markAllAsTouched(i={}){this.markAsTouched({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(i))}markAsUntouched(i={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let n=i.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:n})}),i.onlySelf||this._parent?._updateTouched(i,n),e&&i.emitEvent!==!1&&this._events.next(new Oc(!1,n))}markAsDirty(i={}){let e=this.pristine===!0;this.pristine=!1;let n=i.sourceControl??this;i.onlySelf||this._parent?.markAsDirty(ne(C({},i),{sourceControl:n})),e&&i.emitEvent!==!1&&this._events.next(new Rc(!1,n))}markAsPristine(i={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let n=i.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:i.emitEvent})}),i.onlySelf||this._parent?._updatePristine(i,n),e&&i.emitEvent!==!1&&this._events.next(new Rc(!0,n))}markAsPending(i={}){this.status=Cs;let e=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new ws(this.status,e)),this.statusChanges.emit(this.status)),i.onlySelf||this._parent?.markAsPending(ne(C({},i),{sourceControl:e}))}disable(i={}){let e=this._parentMarkedDirty(i.onlySelf);this.status=kc,this.errors=null,this._forEachChild(r=>{r.disable(ne(C({},i),{onlySelf:!0}))}),this._updateValue();let n=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new Tf(this.value,n)),this._events.next(new ws(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(ne(C({},i),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(i={}){let e=this._parentMarkedDirty(i.onlySelf);this.status=Tc,this._forEachChild(n=>{n.enable(ne(C({},i),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:i.emitEvent}),this._updateAncestors(ne(C({},i),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(i,e){i.onlySelf||(this._parent?.updateValueAndValidity(i),i.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(i){this._parent=i}getRawValue(){return this.value}updateValueAndValidity(i={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let n=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Tc||this.status===Cs)&&this._runAsyncValidator(n,i.emitEvent)}let e=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new Tf(this.value,e)),this._events.next(new ws(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),i.onlySelf||this._parent?.updateValueAndValidity(ne(C({},i),{sourceControl:e}))}_updateTreeValidity(i={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(i)),this.updateValueAndValidity({onlySelf:!0,emitEvent:i.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?kc:Tc}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(i,e){if(this.asyncValidator){this.status=Cs,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:i!==!1};let n=PM(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:e,shouldHaveEmitted:i})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let i=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,i}return!1}setErrors(i,e={}){this.errors=i,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(i){let e=i;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((n,r)=>n&&n._find(r),this)}getError(i,e){let n=e?this.get(e):this;return n?.errors?n.errors[i]:null}hasError(i,e){return!!this.getError(i,e)}get root(){let i=this;for(;i._parent;)i=i._parent;return i}_updateControlsErrors(i,e,n){this.status=this._calculateStatus(),i&&this.statusChanges.emit(this.status),(i||n)&&this._events.next(new ws(this.status,e)),this._parent&&this._parent._updateControlsErrors(i,e,n)}_initObservables(){this.valueChanges=new I,this.statusChanges=new I}_calculateStatus(){return this._allControlsDisabled()?kc:this.errors?Ef:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(Cs)?Cs:this._anyControlsHaveStatus(Ef)?Ef:Tc}_anyControlsHaveStatus(i){return this._anyControls(e=>e.status===i)}_anyControlsDirty(){return this._anyControls(i=>i.dirty)}_anyControlsTouched(){return this._anyControls(i=>i.touched)}_updatePristine(i,e){let n=!this._anyControlsDirty(),r=this.pristine!==n;this.pristine=n,i.onlySelf||this._parent?._updatePristine(i,e),r&&this._events.next(new Rc(this.pristine,e))}_updateTouched(i={},e){this.touched=this._anyControlsTouched(),this._events.next(new Oc(this.touched,e)),i.onlySelf||this._parent?._updateTouched(i,e)}_onDisabledChange=[];_registerOnCollectionChange(i){this._onCollectionChange=i}_setUpdateStrategy(i){Lf(i)&&i.updateOn!=null&&(this._updateOn=i.updateOn)}_parentMarkedDirty(i){return!i&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(i){return null}_assignValidators(i){this._rawValidators=Array.isArray(i)?i.slice():i,this._composedValidatorFn=TL(this._rawValidators)}_assignAsyncValidators(i){this._rawAsyncValidators=Array.isArray(i)?i.slice():i,this._composedAsyncValidatorFn=kL(this._rawAsyncValidators)}},xs=class extends Ds{constructor(i,e,n){super(_b(e),vb(n,e)),this.controls=i,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(i,e){return this.controls[i]?this.controls[i]:(this.controls[i]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(i,e,n={}){this.registerControl(i,e),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}removeControl(i,e={}){this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),delete this.controls[i],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(i,e,n={}){this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),delete this.controls[i],e&&this.registerControl(i,e),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}contains(i){return this.controls.hasOwnProperty(i)&&this.controls[i].enabled}setValue(i,e={}){WM(this,!0,i),Object.keys(i).forEach(n=>{$M(this,!0,n),this.controls[n].setValue(i[n],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(i,e={}){i!=null&&(Object.keys(i).forEach(n=>{let r=this.controls[n];r&&r.patchValue(i[n],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(i={},e={}){this._forEachChild((n,r)=>{n.reset(i?i[r]:null,ne(C({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new Fc(this))}getRawValue(){return this._reduceChildren({},(i,e,n)=>(i[n]=e.getRawValue(),i))}_syncPendingControls(){let i=this._reduceChildren(!1,(e,n)=>n._syncPendingControls()?!0:e);return i&&this.updateValueAndValidity({onlySelf:!0}),i}_forEachChild(i){Object.keys(this.controls).forEach(e=>{let n=this.controls[e];n&&i(n,e)})}_setUpControls(){this._forEachChild(i=>{i.setParent(this),i._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(i){for(let[e,n]of Object.entries(this.controls))if(this.contains(e)&&i(n))return!0;return!1}_reduceValue(){let i={};return this._reduceChildren(i,(e,n,r)=>((n.enabled||this.disabled)&&(e[r]=n.value),e))}_reduceChildren(i,e){let n=i;return this._forEachChild((r,o)=>{n=e(n,r,o)}),n}_allControlsDisabled(){for(let i of Object.keys(this.controls))if(this.controls[i].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(i){return this.controls.hasOwnProperty(i)?this.controls[i]:null}};var db=class extends xs{};var Pc=new y("",{factory:()=>Vf}),Vf="always";function GM(t,i){return[...i.path,t]}function Af(t,i,e=Vf){bb(t,i),i.valueAccessor.writeValue(t.value),(t.disabled||e==="always")&&i.valueAccessor.setDisabledState?.(t.disabled),RL(t,i),NL(t,i),OL(t,i),AL(t,i)}function IM(t,i,e=!0){let n=()=>{};i?.valueAccessor?.registerOnChange(n),i?.valueAccessor?.registerOnTouched(n),Of(t,i),t&&(i._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function Rf(t,i){t.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(i)})}function AL(t,i){if(i.valueAccessor.setDisabledState){let e=n=>{i.valueAccessor.setDisabledState(n)};t.registerOnDisabledChange(e),i._registerOnDestroy(()=>{t._unregisterOnDisabledChange(e)})}}function bb(t,i){let e=UM(t);i.validator!==null?t.setValidators(EM(e,i.validator)):typeof e=="function"&&t.setValidators([e]);let n=zM(t);i.asyncValidator!==null?t.setAsyncValidators(EM(n,i.asyncValidator)):typeof n=="function"&&t.setAsyncValidators([n]);let r=()=>t.updateValueAndValidity();Rf(i._rawValidators,r),Rf(i._rawAsyncValidators,r)}function Of(t,i){let e=!1;if(t!==null){if(i.validator!==null){let r=UM(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==i.validator);o.length!==r.length&&(e=!0,t.setValidators(o))}}if(i.asyncValidator!==null){let r=zM(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==i.asyncValidator);o.length!==r.length&&(e=!0,t.setAsyncValidators(o))}}}let n=()=>{};return Rf(i._rawValidators,n),Rf(i._rawAsyncValidators,n),e}function RL(t,i){i.valueAccessor.registerOnChange(e=>{t._pendingValue=e,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&qM(t,i)})}function OL(t,i){i.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&qM(t,i),t.updateOn!=="submit"&&t.markAsTouched()})}function qM(t,i){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),i.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function NL(t,i){let e=(n,r)=>{i.valueAccessor.writeValue(n),r&&i.viewToModelUpdate(n)};t.registerOnChange(e),i._registerOnDestroy(()=>{t._unregisterOnChange(e)})}function YM(t,i){t==null,bb(t,i)}function FL(t,i){return Of(t,i)}function QM(t,i){if(!t.hasOwnProperty("model"))return!1;let e=t.model;return e.isFirstChange()?!0:!Object.is(i,e.currentValue)}function PL(t){return Object.getPrototypeOf(t.constructor)===pL}function ZM(t,i){t._syncPendingControls(),i.forEach(e=>{let n=e.control;n.updateOn==="submit"&&n._pendingChange&&(e.viewToModelUpdate(n._pendingValue),n._pendingChange=!1)})}function KM(t,i){if(!i)return null;Array.isArray(i);let e,n,r;return i.forEach(o=>{o.constructor===mn?e=o:PL(o)?n=o:r=o}),r||n||e||null}function LL(t,i){let e=t.indexOf(i);e>-1&&t.splice(e,1)}var VL={provide:gr,useExisting:vn(()=>Lc)},Ac=Promise.resolve(),Lc=(()=>{class t extends gr{callSetDisabledState;get submitted(){return ot(this.submittedReactive)}_submitted=ut(()=>this.submittedReactive());submittedReactive=x(!1);_directives=new Set;form;ngSubmit=new I;options;constructor(e,n,r){super(),this.callSetDisabledState=r,this.form=new xs({},pb(e),gb(n))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){Ac.then(()=>{let n=this._findContainer(e.path);e.control=n.registerControl(e.name,e.control),Af(e.control,e,this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){Ac.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){Ac.then(()=>{let n=this._findContainer(e.path),r=new xs({});YM(r,e),n.registerControl(e.name,r),r.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){Ac.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,n){Ac.then(()=>{this.form.get(e.path).setValue(n)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),ZM(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new kf(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static \u0275fac=function(n){return new(n||t)(we(Nf,10),we(Ff,10),we(Pc,8))};static \u0275dir=N({type:t,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(n,r){n&1&&E("submit",function(a){return r.onSubmit(a)})("reset",function(){return r.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[Ue([VL]),ge]})}return t})();function TM(t,i){let e=t.indexOf(i);e>-1&&t.splice(e,1)}function kM(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var Nc=class extends Ds{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(i=null,e,n){super(_b(e),vb(n,e)),this._applyFormState(i),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Lf(e)&&(e.nonNullable||e.initialValueIsDefault)&&(kM(i)?this.defaultValue=i.value:this.defaultValue=i)}setValue(i,e={}){this.value=this._pendingValue=i,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(i,e={}){this.setValue(i,e)}reset(i=this.defaultValue,e={}){this._applyFormState(i),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new Fc(this))}_updateValue(){}_anyControls(i){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(i){this._onChange.push(i)}_unregisterOnChange(i){TM(this._onChange,i)}registerOnDisabledChange(i){this._onDisabledChange.push(i)}_unregisterOnDisabledChange(i){TM(this._onDisabledChange,i)}_forEachChild(i){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(i){kM(i)?(this.value=this._pendingValue=i.value,i.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=i}};var BL=t=>t instanceof Nc;var jL={provide:hi,useExisting:vn(()=>_r)},AM=Promise.resolve(),_r=(()=>{class t extends hi{_changeDetectorRef;callSetDisabledState;control=new Nc;static ngAcceptInputType_isDisabled;_registered=!1;viewModel;name="";isDisabled;model;options;update=new I;constructor(e,n,r,o,a,s){super(),this._changeDetectorRef=a,this.callSetDisabledState=s,this._parent=e,this._setValidators(n),this._setAsyncValidators(r),this.valueAccessor=KM(this,o)}ngOnChanges(e){if(this._checkForErrors(),!this._registered||"name"in e){if(this._registered&&(this._checkName(),this.formDirective)){let n=e.name.previousValue;this.formDirective.removeControl({name:n,path:this._getPath(n)})}this._setUpControl()}"isDisabled"in e&&this._updateDisabled(e),QM(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective?.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){Af(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._checkName()}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(e){AM.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(e){let n=e.isDisabled.currentValue,r=n!==0&&Z(n);AM.then(()=>{r&&!this.control.disabled?this.control.disable():!r&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(e){return this._parent?GM(e,this._parent):[e]}static \u0275fac=function(n){return new(n||t)(we(gr,9),we(Nf,10),we(Ff,10),we(mb,10),we(xe,8),we(Pc,8))};static \u0275dir=N({type:t,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[Ue([jL]),ge,Be]})}return t})();var Bf=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=N({type:t,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return t})();var ub=class extends Ds{constructor(i,e,n){super(_b(e),vb(n,e)),this.controls=i,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;at(i){return this.controls[this._adjustIndex(i)]}push(i,e={}){Array.isArray(i)?i.forEach(n=>{this.controls.push(n),this._registerControl(n)}):(this.controls.push(i),this._registerControl(i)),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}insert(i,e,n={}){this.controls.splice(i,0,e),this._registerControl(e),this.updateValueAndValidity({emitEvent:n.emitEvent})}removeAt(i,e={}){let n=this._adjustIndex(i);n<0&&(n=0),this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),this.controls.splice(n,1),this.updateValueAndValidity({emitEvent:e.emitEvent})}setControl(i,e,n={}){let r=this._adjustIndex(i);r<0&&(r=0),this.controls[r]&&this.controls[r]._registerOnCollectionChange(()=>{}),this.controls.splice(r,1),e&&(this.controls.splice(r,0,e),this._registerControl(e)),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(i,e={}){WM(this,!1,i),i.forEach((n,r)=>{$M(this,!1,r),this.at(r).setValue(n,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(i,e={}){i!=null&&(i.forEach((n,r)=>{this.at(r)&&this.at(r).patchValue(n,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(i=[],e={}){this._forEachChild((n,r)=>{n.reset(i[r],ne(C({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new Fc(this))}getRawValue(){return this.controls.map(i=>i.getRawValue())}clear(i={}){this.controls.length<1||(this._forEachChild(e=>e._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:i.emitEvent}))}_adjustIndex(i){return i<0?i+this.length:i}_syncPendingControls(){let i=this.controls.reduce((e,n)=>n._syncPendingControls()?!0:e,!1);return i&&this.updateValueAndValidity({onlySelf:!0}),i}_forEachChild(i){this.controls.forEach((e,n)=>{i(e,n)})}_updateValue(){this.value=this.controls.filter(i=>i.enabled||this.disabled).map(i=>i.value)}_anyControls(i){return this.controls.some(e=>e.enabled&&i(e))}_setUpControls(){this._forEachChild(i=>this._registerControl(i))}_allControlsDisabled(){for(let i of this.controls)if(i.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(i){i.setParent(this),i._registerOnCollectionChange(this._onCollectionChange)}_find(i){return this.at(i)??null}};var HL=(()=>{class t extends gr{callSetDisabledState;get submitted(){return ot(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=ut(()=>this._submittedReactive());_submittedReactive=x(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,n,r){super(),this.callSetDisabledState=r,this._setValidators(e),this._setAsyncValidators(n)}ngOnChanges(e){this.onChanges(e)}ngOnDestroy(){this.onDestroy()}onChanges(e){this._checkFormPresent(),e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(Of(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(e){let n=this.form.get(e.path);return Af(n,e,this.callSetDisabledState),n.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),n}getControl(e){return this.form.get(e.path)}removeControl(e){IM(e.control||null,e,!1),LL(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}updateModel(e,n){this.form.get(e.path).setValue(n)}onReset(){this.resetForm()}resetForm(e=void 0,n={}){this.form.reset(e,n),this._submittedReactive.set(!1)}onSubmit(e){return this.submitted=!0,ZM(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new kf(this.control)),e?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(e=>{let n=e.control,r=this.form.get(e.path);n!==r&&(IM(n||null,e),BL(r)&&(Af(r,e,this.callSetDisabledState),e.control=r))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let n=this.form.get(e.path);YM(n,e),n.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){let n=this.form?.get(e.path);n&&FL(n,e)&&n.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){bb(this.form,this),this._oldForm&&Of(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(n){return new(n||t)(we(Nf,10),we(Ff,10),we(Pc,8))};static \u0275dir=N({type:t,features:[ge,Be]})}return t})();var XM=new y("");var UL={provide:hi,useExisting:vn(()=>Vc)},Vc=(()=>{class t extends hi{_ngModelWarningConfig;_added=!1;viewModel;control;name=null;set isDisabled(e){}model;update=new I;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(e,n,r,o,a){super(),this._ngModelWarningConfig=a,this._parent=e,this._setValidators(n),this._setAsyncValidators(r),this.valueAccessor=KM(this,o)}ngOnChanges(e){this._added||this._setUpControl(),QM(e,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective?.removeControl(this)}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}get path(){return GM(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_setUpControl(){this.control=this.formDirective.addControl(this),this._added=!0}static \u0275fac=function(n){return new(n||t)(we(gr,13),we(Nf,10),we(Ff,10),we(mb,10),we(XM,8))};static \u0275dir=N({type:t,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},standalone:!1,features:[Ue([UL]),ge,Be]})}return t})();var zL={provide:gr,useExisting:vn(()=>vr)},vr=(()=>{class t extends HL{form=null;ngSubmit=new I;get control(){return this.form}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ze(t)))(r||t)}})();static \u0275dir=N({type:t,selectors:[["","formGroup",""]],hostBindings:function(n,r){n&1&&E("submit",function(a){return r.onSubmit(a)})("reset",function(){return r.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[Ue([zL]),ge]})}return t})();var JM=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=$({type:t});static \u0275inj=z({})}return t})();function RM(t){return!!t&&(t.asyncValidators!==void 0||t.validators!==void 0||t.updateOn!==void 0)}var jf=(()=>{class t{useNonNullable=!1;get nonNullable(){let e=new t;return e.useNonNullable=!0,e}group(e,n=null){let r=this._reduceControls(e),o={};return RM(n)?o=n:n!==null&&(o.validators=n.validator,o.asyncValidators=n.asyncValidator),new xs(r,o)}record(e,n=null){let r=this._reduceControls(e);return new db(r,n)}control(e,n,r){let o={};return this.useNonNullable?(RM(n)?o=n:(o.validators=n,o.asyncValidators=r),new Nc(e,ne(C({},o),{nonNullable:!0}))):new Nc(e,n,r)}array(e,n,r){let o=e.map(a=>this._createControl(a));return new ub(o,n,r)}_reduceControls(e){let n={};return Object.keys(e).forEach(r=>{n[r]=this._createControl(e[r])}),n}_createControl(e){if(e instanceof Nc)return e;if(e instanceof Ds)return e;if(Array.isArray(e)){let n=e[0],r=e.length>1?e[1]:null,o=e.length>2?e[2]:null;return this.control(n,r,o)}else return this.control(e)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Zr=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:Pc,useValue:e.callSetDisabledState??Vf}]}}static \u0275fac=function(n){return new(n||t)};static \u0275mod=$({type:t});static \u0275inj=z({imports:[JM]})}return t})(),Hf=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:XM,useValue:e.warnOnNgModelWithFormControl??"always"},{provide:Pc,useValue:e.callSetDisabledState??Vf}]}}static \u0275fac=function(n){return new(n||t)};static \u0275mod=$({type:t});static \u0275inj=z({imports:[JM]})}return t})();var eS=new y("MAT_INPUT_VALUE_ACCESSOR");var Uf=(()=>{class t{isErrorState(e,n){return!!(e&&e.invalid&&(e.touched||n&&n.submitted))}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Ms=class{_defaultMatcher;ngControl;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;constructor(i,e,n,r,o){this._defaultMatcher=i,this.ngControl=e,this._parentFormGroup=n,this._parentForm=r,this._stateChanges=o}updateErrorState(){let i=this.errorState,e=this._parentFormGroup||this._parentForm,n=this.matcher||this._defaultMatcher,r=this.ngControl?this.ngControl.control:null,o=n?.isErrorState(r,e)??!1;o!==i&&(this.errorState=o,this._stateChanges.next())}};var $L=["button","checkbox","file","hidden","image","radio","range","reset","submit"],WL=new y("MAT_INPUT_CONFIG"),Kt=(()=>{class t{_elementRef=c(B);_platform=c(ue);ngControl=c(hi,{optional:!0,self:!0});_autofillMonitor=c(DM);_ngZone=c(V);_formField=c(Ic,{optional:!0});_renderer=c(Re);_uid=c(Ye).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=c(WL,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new S;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=Lt(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(fi.required)??!1}set required(e){this._required=Lt(e)}_required;get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&nb().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=Lt(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(e=>nb().has(e));constructor(){let e=c(Lc,{optional:!0}),n=c(vr,{optional:!0}),r=c(Uf),o=c(eS,{optional:!0,self:!0}),a=this._elementRef.nativeElement,s=a.nodeName.toLowerCase();o?Ai(o.value)?this._signalBasedValueAccessor=o:this._inputValueAccessor=o:this._inputValueAccessor=a,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(a,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new Ms(r,this.ngControl,n,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=s==="select",this._isTextarea=s==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=a.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&Ft(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let n=this._elementRef.nativeElement;n.type==="number"?(n.type="text",n.setSelectionRange(0,0),n.type="number"):n.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let n=this._elementRef.nativeElement;this._previousPlaceholder=e,e?n.setAttribute("placeholder",e):n.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){$L.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,n=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&n&&n.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let n=this._elementRef.nativeElement;e.length?n.setAttribute("aria-describedby",e.join(" ")):n.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let n=e.target;!n.value&&n.selectionStart===0&&n.selectionEnd===0&&(n.setSelectionRange(1,1),n.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(n){return new(n||t)};static \u0275dir=N({type:t,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(n,r){n&1&&E("focus",function(){return r._focusChanged(!0)})("blur",function(){return r._focusChanged(!1)})("input",function(){return r._onInput()}),n&2&&(Yt("id",r.id)("disabled",r.disabled&&!r.disabledInteractive)("required",r.required),K("name",r.name||null)("readonly",r._getReadonlyAttribute())("aria-disabled",r.disabled&&r.disabledInteractive?"true":null)("aria-invalid",r.empty&&r.required?null:r.errorState)("aria-required",r.required)("id",r.id),F("mat-input-server",r._isServer)("mat-mdc-form-field-textarea-control",r._isInFormField&&r._isTextarea)("mat-mdc-form-field-input-control",r._isInFormField)("mat-mdc-input-disabled-interactive",r.disabledInteractive)("mdc-text-field__input",r._isInFormField)("mat-mdc-native-select-inline",r._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",Z]},exportAs:["matInput"],features:[Ue([{provide:Sc,useExisting:t}]),Be]})}return t})(),zn=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=$({type:t});static \u0275inj=z({imports:[At,At,xM,ve]})}return t})();var Bc=class{_attachedHost=null;attach(i){return this._attachedHost=i,i.attach(this)}detach(){let i=this._attachedHost;i!=null&&(this._attachedHost=null,i.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(i){this._attachedHost=i}},In=class extends Bc{component;viewContainerRef;injector;projectableNodes;bindings;constructor(i,e,n,r,o){super(),this.component=i,this.viewContainerRef=e,this.injector=n,this.projectableNodes=r,this.bindings=o||null}},Tn=class extends Bc{templateRef;viewContainerRef;context;injector;constructor(i,e,n,r){super(),this.templateRef=i,this.viewContainerRef=e,this.context=n,this.injector=r}get origin(){return this.templateRef.elementRef}attach(i,e=this.context){return this.context=e,super.attach(i)}detach(){return this.context=void 0,super.detach()}},yb=class extends Bc{element;constructor(i){super(),this.element=i instanceof B?i.nativeElement:i}},Kr=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(i){if(i instanceof In)return this._attachedPortal=i,this.attachComponentPortal(i);if(i instanceof Tn)return this._attachedPortal=i,this.attachTemplatePortal(i);if(this.attachDomPortal&&i instanceof yb)return this._attachedPortal=i,this.attachDomPortal(i)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(i){this._disposeFn=i}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}},zf=class extends Kr{outletElement;_appRef;_defaultInjector;constructor(i,e,n){super(),this.outletElement=i,this._appRef=e,this._defaultInjector=n}attachComponentPortal(i){let e;if(i.viewContainerRef){let n=i.injector||i.viewContainerRef.injector,r=n.get(ki,null,{optional:!0})||void 0;e=i.viewContainerRef.createComponent(i.component,{index:i.viewContainerRef.length,injector:n,ngModuleRef:r,projectableNodes:i.projectableNodes||void 0,bindings:i.bindings||void 0}),this.setDisposeFn(()=>e.destroy())}else{let n=this._appRef,r=i.injector||this._defaultInjector||G.NULL,o=r.get(Le,n.injector);e=hm(i.component,{elementInjector:r,environmentInjector:o,projectableNodes:i.projectableNodes||void 0,bindings:i.bindings||void 0}),n.attachView(e.hostView),this.setDisposeFn(()=>{n.viewCount>0&&n.detachView(e.hostView),e.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=i,e}attachTemplatePortal(i){let e=i.viewContainerRef,n=e.createEmbeddedView(i.templateRef,i.context,{injector:i.injector});return n.rootNodes.forEach(r=>this.outletElement.appendChild(r)),n.detectChanges(),this.setDisposeFn(()=>{let r=e.indexOf(n);r!==-1&&e.remove(r)}),this._attachedPortal=i,n}attachDomPortal=i=>{let e=i.element;e.parentNode;let n=this.outletElement.ownerDocument.createComment("dom-portal");e.parentNode.insertBefore(n,e),this.outletElement.appendChild(e),this._attachedPortal=i,super.setDisposeFn(()=>{n.parentNode&&n.parentNode.replaceChild(e,n)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(i){return i.hostView.rootNodes[0]}},tS=(()=>{class t extends Tn{constructor(){let e=c(gt),n=c(St);super(e,n)}static \u0275fac=function(n){return new(n||t)};static \u0275dir=N({type:t,selectors:[["","cdkPortal",""]],exportAs:["cdkPortal"],features:[ge]})}return t})(),fn=(()=>{class t extends Kr{_moduleRef=c(ki,{optional:!0});_document=c(Y);_viewContainerRef=c(St);_isInitialized=!1;_attachedRef=null;constructor(){super()}get portal(){return this._attachedPortal}set portal(e){this.hasAttached()&&!e&&!this._isInitialized||(this.hasAttached()&&super.detach(),e&&super.attach(e),this._attachedPortal=e||null)}attached=new I;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(e){e.setAttachedHost(this);let n=e.viewContainerRef!=null?e.viewContainerRef:this._viewContainerRef,r=n.createComponent(e.component,{index:n.length,injector:e.injector||n.injector,projectableNodes:e.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:e.bindings||void 0});return n!==this._viewContainerRef&&this._getRootNode().appendChild(r.hostView.rootNodes[0]),super.setDisposeFn(()=>r.destroy()),this._attachedPortal=e,this._attachedRef=r,this.attached.emit(r),r}attachTemplatePortal(e){e.setAttachedHost(this);let n=this._viewContainerRef.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=e,this._attachedRef=n,this.attached.emit(n),n}attachDomPortal=e=>{let n=e.element;n.parentNode;let r=this._document.createComment("dom-portal");e.setAttachedHost(this),n.parentNode.insertBefore(r,n),this._getRootNode().appendChild(n),this._attachedPortal=e,super.setDisposeFn(()=>{r.parentNode&&r.parentNode.replaceChild(n,r)})};_getRootNode(){let e=this._viewContainerRef.element.nativeElement;return e.nodeType===e.ELEMENT_NODE?e:e.parentNode}static \u0275fac=function(n){return new(n||t)};static \u0275dir=N({type:t,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:[0,"cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[ge]})}return t})(),Hi=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=$({type:t});static \u0275inj=z({})}return t})();var GL=20,Xr=(()=>{class t{_ngZone=c(V);_platform=c(ue);_renderer=c(_t).createRenderer(null,null);_cleanupGlobalListener;constructor(){}_scrolled=new S;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let n=this.scrollContainers.get(e);n&&(n.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=GL){return this._platform.isBrowser?new se(n=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let r=e>0?this._scrolled.pipe(Fd(e)).subscribe(n):this._scrolled.subscribe(n);return this._scrolledCount++,()=>{r.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):q()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,n)=>this.deregister(n)),this._scrolled.complete()}ancestorScrolled(e,n){let r=this.getAncestorScrollContainers(e);return this.scrolled(n).pipe(be(o=>!o||r.indexOf(o)>-1))}getAncestorScrollContainers(e){let n=[];return this.scrollContainers.forEach((r,o)=>{this._scrollableContainsElement(o,e)&&n.push(o)}),n}_scrollableContainsElement(e,n){let r=tn(n),o=e.getElementRef().nativeElement;do if(r==o)return!0;while(r=r.parentElement);return!1}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),$f=(()=>{class t{elementRef=c(B);scrollDispatcher=c(Xr);ngZone=c(V);dir=c(nt,{optional:!0});_scrollElement=this.elementRef.nativeElement;_destroyed=new S;_renderer=c(Re);_cleanupScroll;_elementScrolled=new S;constructor(){}ngOnInit(){this._cleanupScroll=this.ngZone.runOutsideAngular(()=>this._renderer.listen(this._scrollElement,"scroll",e=>this._elementScrolled.next(e))),this.scrollDispatcher.register(this)}ngOnDestroy(){this._cleanupScroll?.(),this._elementScrolled.complete(),this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(e){let n=this.elementRef.nativeElement,r=this.dir&&this.dir.value=="rtl";e.left==null&&(e.left=r?e.end:e.start),e.right==null&&(e.right=r?e.start:e.end),e.bottom!=null&&(e.top=n.scrollHeight-n.clientHeight-e.bottom),r&&_s()!=ui.NORMAL?(e.left!=null&&(e.right=n.scrollWidth-n.clientWidth-e.left),_s()==ui.INVERTED?e.left=e.right:_s()==ui.NEGATED&&(e.left=e.right?-e.right:e.right)):e.right!=null&&(e.left=n.scrollWidth-n.clientWidth-e.right),this._applyScrollToOptions(e)}_applyScrollToOptions(e){let n=this.elementRef.nativeElement;_f()?n.scrollTo(e):(e.top!=null&&(n.scrollTop=e.top),e.left!=null&&(n.scrollLeft=e.left))}measureScrollOffset(e){let n="left",r="right",o=this.elementRef.nativeElement;if(e=="top")return o.scrollTop;if(e=="bottom")return o.scrollHeight-o.clientHeight-o.scrollTop;let a=this.dir&&this.dir.value=="rtl";return e=="start"?e=a?r:n:e=="end"&&(e=a?n:r),a&&_s()==ui.INVERTED?e==n?o.scrollWidth-o.clientWidth-o.scrollLeft:o.scrollLeft:a&&_s()==ui.NEGATED?e==n?o.scrollLeft+o.scrollWidth-o.clientWidth:-o.scrollLeft:e==n?o.scrollLeft:o.scrollWidth-o.clientWidth-o.scrollLeft}static \u0275fac=function(n){return new(n||t)};static \u0275dir=N({type:t,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]]})}return t})(),qL=20,pi=(()=>{class t{_platform=c(ue);_listeners;_viewportSize=null;_change=new S;_document=c(Y);constructor(){let e=c(V),n=c(_t).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let r=o=>this._change.next(o);this._listeners=[n.listen("window","resize",r),n.listen("window","orientationchange",r)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:n,height:r}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+r,right:e.left+n,height:r,width:n}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,n=this._getWindow(),r=e.documentElement,o=r.getBoundingClientRect(),a=-o.top||e.body?.scrollTop||n.scrollY||r.scrollTop||0,s=-o.left||e.body?.scrollLeft||n.scrollX||r.scrollLeft||0;return{top:a,left:s}}change(e=qL){return e>0?this._change.pipe(Fd(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var $n=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=$({type:t});static \u0275inj=z({})}return t})(),Cb=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=$({type:t});static \u0275inj=z({imports:[ve,$n,ve,$n]})}return t})();var jc=["*"];function YL(t,i){t&1&&te(0)}var oS=["tabListContainer"],aS=["tabList"],sS=["tabListInner"],lS=["nextPaginator"],cS=["previousPaginator"],QL=["content"];function ZL(t,i){}var KL=["tabBodyWrapper"],XL=["tabHeader"];function JL(t,i){}function eV(t,i){if(t&1&&dt(0,JL,0,0,"ng-template",12),t&2){let e=D().$implicit;A("cdkPortalOutlet",e.templateLabel)}}function tV(t,i){if(t&1&&g(0),t&2){let e=D().$implicit;oe(e.textLabel)}}function nV(t,i){if(t&1){let e=ke();m(0,"div",7,2),E("click",function(){let r=X(e),o=r.$implicit,a=r.$index,s=D(),l=ln(1);return J(s._handleClick(o,l,a))})("cdkFocusChange",function(r){let o=X(e).$index,a=D();return J(a._tabFocusChanged(r,o))}),T(2,"span",8)(3,"div",9),m(4,"span",10)(5,"span",11),j(6,eV,1,1,null,12)(7,tV,1,1),h()()()}if(t&2){let e=i.$implicit,n=i.$index,r=ln(1),o=D();It(e.labelClass),F("mdc-tab--active",o.selectedIndex===n),A("id",o._getTabLabelId(e,n))("disabled",e.disabled)("fitInkBarToContent",o.fitInkBarToContent),K("tabIndex",o._getTabIndex(n))("aria-posinset",n+1)("aria-setsize",o._tabs.length)("aria-controls",o._getTabContentId(n))("aria-selected",o.selectedIndex===n)("aria-label",e.ariaLabel||null)("aria-labelledby",!e.ariaLabel&&e.ariaLabelledby?e.ariaLabelledby:null),p(3),A("matRippleTrigger",r)("matRippleDisabled",e.disabled||o.disableRipple),p(3),H(e.templateLabel?6:7)}}function iV(t,i){t&1&&te(0)}function rV(t,i){if(t&1){let e=ke();m(0,"mat-tab-body",13),E("_onCentered",function(){X(e);let r=D();return J(r._removeTabBodyWrapperHeight())})("_onCentering",function(r){X(e);let o=D();return J(o._setTabBodyWrapperHeight(r))})("_beforeCentering",function(r){X(e);let o=D();return J(o._bodyCentered(r))}),h()}if(t&2){let e=i.$implicit,n=i.$index,r=D();It(e.bodyClass),A("id",r._getTabContentId(n))("content",e.content)("position",e.position)("animationDuration",r.animationDuration)("preserveContent",r.preserveContent),K("tabindex",r.contentTabIndex!=null&&r.selectedIndex===n?r.contentTabIndex:null)("aria-labelledby",r._getTabLabelId(e,n))("aria-hidden",r.selectedIndex!==n)}}var oV=["mat-tab-nav-bar",""],aV=["mat-tab-link",""],sV=new y("MatTabContent"),lV=(()=>{class t{template=c(gt);constructor(){}static \u0275fac=function(n){return new(n||t)};static \u0275dir=N({type:t,selectors:[["","matTabContent",""]],features:[Ue([{provide:sV,useExisting:t}])]})}return t})(),cV=new y("MatTabLabel"),dS=new y("MAT_TAB"),dV=(()=>{class t extends tS{_closestTab=c(dS,{optional:!0});static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ze(t)))(r||t)}})();static \u0275dir=N({type:t,selectors:[["","mat-tab-label",""],["","matTabLabel",""]],features:[Ue([{provide:cV,useExisting:t}]),ge]})}return t})(),uS=new y("MAT_TAB_GROUP"),Hc=(()=>{class t{_viewContainerRef=c(St);_closestTabGroup=c(uS,{optional:!0});disabled=!1;get templateLabel(){return this._templateLabel}set templateLabel(e){this._setTemplateLabelInput(e)}_templateLabel;_explicitContent=void 0;_implicitContent;textLabel="";ariaLabel;ariaLabelledby;labelClass;bodyClass;id=null;_contentPortal=null;get content(){return this._contentPortal}_stateChanges=new S;position=null;origin=null;isActive=!1;constructor(){c(qe).load(mi)}ngOnChanges(e){(e.hasOwnProperty("textLabel")||e.hasOwnProperty("disabled"))&&this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}ngOnInit(){this._contentPortal=new Tn(this._explicitContent||this._implicitContent,this._viewContainerRef)}_setTemplateLabelInput(e){e&&e._closestTab===this&&(this._templateLabel=e)}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=M({type:t,selectors:[["mat-tab"]],contentQueries:function(n,r,o){if(n&1&&vt(o,dV,5)(o,lV,7,gt),n&2){let a;R(a=O())&&(r.templateLabel=a.first),R(a=O())&&(r._explicitContent=a.first)}},viewQuery:function(n,r){if(n&1&&Ce(gt,7),n&2){let o;R(o=O())&&(r._implicitContent=o.first)}},hostAttrs:["hidden",""],hostVars:1,hostBindings:function(n,r){n&2&&K("id",null)},inputs:{disabled:[2,"disabled","disabled",Z],textLabel:[0,"label","textLabel"],ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],labelClass:"labelClass",bodyClass:"bodyClass",id:"id"},exportAs:["matTab"],features:[Ue([{provide:dS,useExisting:t}]),Be],ngContentSelectors:jc,decls:1,vars:0,template:function(n,r){n&1&&(De(),Ll(0,YL,1,0,"ng-template"))},encapsulation:2})}return t})(),wb="mdc-tab-indicator--active",nS="mdc-tab-indicator--no-transition",Wf=class{_items;_currentItem;constructor(i){this._items=i}hide(){this._items.forEach(i=>i.deactivateInkBar()),this._currentItem=void 0}alignToElement(i){let e=this._items.find(r=>r.elementRef.nativeElement===i),n=this._currentItem;if(e!==n&&(n?.deactivateInkBar(),e)){let r=n?.elementRef.nativeElement.getBoundingClientRect?.();e.activateInkBar(r),this._currentItem=e}}},mS=(()=>{class t{_elementRef=c(B);_inkBarElement=null;_inkBarContentElement=null;_fitToContent=!1;get fitInkBarToContent(){return this._fitToContent}set fitInkBarToContent(e){this._fitToContent!==e&&(this._fitToContent=e,this._inkBarElement&&this._appendInkBarElement())}activateInkBar(e){let n=this._elementRef.nativeElement;if(!e||!n.getBoundingClientRect||!this._inkBarContentElement){n.classList.add(wb);return}let r=n.getBoundingClientRect(),o=e.width/r.width,a=e.left-r.left;n.classList.add(nS),this._inkBarContentElement.style.setProperty("transform",`translateX(${a}px) scaleX(${o})`),n.getBoundingClientRect(),n.classList.remove(nS),n.classList.add(wb),this._inkBarContentElement.style.setProperty("transform","")}deactivateInkBar(){this._elementRef.nativeElement.classList.remove(wb)}ngOnInit(){this._createInkBarElement()}ngOnDestroy(){this._inkBarElement?.remove(),this._inkBarElement=this._inkBarContentElement=null}_createInkBarElement(){let e=this._elementRef.nativeElement.ownerDocument||document,n=this._inkBarElement=e.createElement("span"),r=this._inkBarContentElement=e.createElement("span");n.className="mdc-tab-indicator",r.className="mdc-tab-indicator__content mdc-tab-indicator__content--underline",n.appendChild(this._inkBarContentElement),this._appendInkBarElement()}_appendInkBarElement(){this._inkBarElement;let e=this._fitToContent?this._elementRef.nativeElement.querySelector(".mdc-tab__content"):this._elementRef.nativeElement;e.appendChild(this._inkBarElement)}static \u0275fac=function(n){return new(n||t)};static \u0275dir=N({type:t,inputs:{fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",Z]}})}return t})();var fS=(()=>{class t extends mS{elementRef=c(B);disabled=!1;focus(){this.elementRef.nativeElement.focus()}getOffsetLeft(){return this.elementRef.nativeElement.offsetLeft}getOffsetWidth(){return this.elementRef.nativeElement.offsetWidth}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ze(t)))(r||t)}})();static \u0275dir=N({type:t,selectors:[["","matTabLabelWrapper",""]],hostVars:3,hostBindings:function(n,r){n&2&&(K("aria-disabled",!!r.disabled),F("mat-mdc-tab-disabled",r.disabled))},inputs:{disabled:[2,"disabled","disabled",Z]},features:[ge]})}return t})(),iS={passive:!0},uV=650,mV=100,hS=(()=>{class t{_elementRef=c(B);_changeDetectorRef=c(xe);_viewportRuler=c(pi);_dir=c(nt,{optional:!0});_ngZone=c(V);_platform=c(ue);_sharedResizeObserver=c(bf);_injector=c(G);_renderer=c(Re);_animationsDisabled=je();_eventCleanups;_scrollDistance=0;_selectedIndexChanged=!1;_destroyed=new S;_showPaginationControls=!1;_disableScrollAfter=!0;_disableScrollBefore=!0;_tabLabelCount;_scrollDistanceChanged=!1;_keyManager;_currentTextContent;_stopScrolling=new S;disablePagination=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){let n=isNaN(e)?0:e;this._selectedIndex!=n&&(this._selectedIndexChanged=!0,this._selectedIndex=n,this._keyManager&&this._keyManager.updateActiveItem(n))}_selectedIndex=0;selectFocusedIndex=new I;indexFocused=new I;constructor(){this._eventCleanups=this._ngZone.runOutsideAngular(()=>[this._renderer.listen(this._elementRef.nativeElement,"mouseleave",()=>this._stopInterval())])}ngAfterViewInit(){this._eventCleanups.push(this._renderer.listen(this._previousPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("before"),iS),this._renderer.listen(this._nextPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("after"),iS))}ngAfterContentInit(){let e=this._dir?this._dir.change:q("ltr"),n=this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe(Yi(32),ye(this._destroyed)),r=this._viewportRuler.change(150).pipe(ye(this._destroyed)),o=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new Ec(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(()=>!1),this._keyManager.updateActiveItem(Math.max(this._selectedIndex,0)),Ge(o,{injector:this._injector}),Nt(e,r,n,this._items.changes,this._itemsResized()).pipe(ye(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>{Promise.resolve().then(()=>{this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),this._scrollDistance)),o()})}),this._keyManager?.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.subscribe(a=>{this.indexFocused.emit(a),this._setTabFocus(a)})}_itemsResized(){return typeof ResizeObserver!="function"?Je:this._items.changes.pipe(Qe(this._items),pt(e=>new se(n=>this._ngZone.runOutsideAngular(()=>{let r=new ResizeObserver(o=>n.next(o));return e.forEach(o=>r.observe(o.elementRef.nativeElement)),()=>{r.disconnect()}}))),bo(1),be(e=>e.some(n=>n.contentRect.width>0&&n.contentRect.height>0)))}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._keyManager?.destroy(),this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(e){if(!Ct(e))switch(e.keyCode){case 13:case 32:if(this.focusIndex!==this.selectedIndex){let n=this._items.get(this.focusIndex);n&&!n.disabled&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(e))}break;default:this._keyManager?.onKeydown(e)}}_onContentChanges(){let e=this._elementRef.nativeElement.textContent;e!==this._currentTextContent&&(this._currentTextContent=e||"",this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(e){!this._isValidIndex(e)||this.focusIndex===e||!this._keyManager||this._keyManager.setActiveItem(e)}_isValidIndex(e){return this._items?!!this._items.toArray()[e]:!0}_setTabFocus(e){if(this._showPaginationControls&&this._scrollToLabel(e),this._items&&this._items.length){this._items.toArray()[e].focus();let n=this._tabListContainer.nativeElement;this._getLayoutDirection()=="ltr"?n.scrollLeft=0:n.scrollLeft=n.scrollWidth-n.offsetWidth}}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_updateTabScrollPosition(){if(this.disablePagination)return;let e=this.scrollDistance,n=this._getLayoutDirection()==="ltr"?-e:e;this._tabList.nativeElement.style.transform=`translateX(${Math.round(n)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(e){this._scrollTo(e)}_scrollHeader(e){let n=this._tabListContainer.nativeElement.offsetWidth,r=(e=="before"?-1:1)*n/3;return this._scrollTo(this._scrollDistance+r)}_handlePaginatorClick(e){this._stopInterval(),this._scrollHeader(e)}_scrollToLabel(e){if(this.disablePagination)return;let n=this._items?this._items.toArray()[e]:null;if(!n)return;let r=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:o,offsetWidth:a}=n.elementRef.nativeElement,s,l;this._getLayoutDirection()=="ltr"?(s=o,l=s+a):(l=this._tabListInner.nativeElement.offsetWidth-o,s=l-a);let d=this.scrollDistance,u=this.scrollDistance+r;s<d?this.scrollDistance-=d-s:l>u&&(this.scrollDistance+=Math.min(l-u,s-d))}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{let e=this._tabListInner.nativeElement.scrollWidth,n=this._elementRef.nativeElement.offsetWidth,r=e-n>=5;r||(this.scrollDistance=0),r!==this._showPaginationControls&&(this._showPaginationControls=r,this._changeDetectorRef.markForCheck())}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=this.scrollDistance==0,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){let e=this._tabListInner.nativeElement.scrollWidth,n=this._tabListContainer.nativeElement.offsetWidth;return e-n||0}_alignInkBarToSelectedTab(){let e=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,n=e?e.elementRef.nativeElement:null;n?this._inkBar.alignToElement(n):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(e,n){n&&n.button!=null&&n.button!==0||(this._stopInterval(),tl(uV,mV).pipe(ye(Nt(this._stopScrolling,this._destroyed))).subscribe(()=>{let{maxScrollDistance:r,distance:o}=this._scrollHeader(e);(o===0||o>=r)&&this._stopInterval()}))}_scrollTo(e){if(this.disablePagination)return{maxScrollDistance:0,distance:0};let n=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(n,e)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:n,distance:this._scrollDistance}}static \u0275fac=function(n){return new(n||t)};static \u0275dir=N({type:t,inputs:{disablePagination:[2,"disablePagination","disablePagination",Z],selectedIndex:[2,"selectedIndex","selectedIndex",si]},outputs:{selectFocusedIndex:"selectFocusedIndex",indexFocused:"indexFocused"}})}return t})(),fV=(()=>{class t extends hS{_items;_tabListContainer;_tabList;_tabListInner;_nextPaginator;_previousPaginator;_inkBar;ariaLabel;ariaLabelledby;disableRipple=!1;ngAfterContentInit(){this._inkBar=new Wf(this._items),super.ngAfterContentInit()}_itemSelected(e){e.preventDefault()}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ze(t)))(r||t)}})();static \u0275cmp=M({type:t,selectors:[["mat-tab-header"]],contentQueries:function(n,r,o){if(n&1&&vt(o,fS,4),n&2){let a;R(a=O())&&(r._items=a)}},viewQuery:function(n,r){if(n&1&&Ce(oS,7)(aS,7)(sS,7)(lS,5)(cS,5),n&2){let o;R(o=O())&&(r._tabListContainer=o.first),R(o=O())&&(r._tabList=o.first),R(o=O())&&(r._tabListInner=o.first),R(o=O())&&(r._nextPaginator=o.first),R(o=O())&&(r._previousPaginator=o.first)}},hostAttrs:[1,"mat-mdc-tab-header"],hostVars:4,hostBindings:function(n,r){n&2&&F("mat-mdc-tab-header-pagination-controls-enabled",r._showPaginationControls)("mat-mdc-tab-header-rtl",r._getLayoutDirection()=="rtl")},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],disableRipple:[2,"disableRipple","disableRipple",Z]},features:[ge],ngContentSelectors:jc,decls:13,vars:10,consts:[["previousPaginator",""],["tabListContainer",""],["tabList",""],["tabListInner",""],["nextPaginator",""],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-before",3,"click","mousedown","touchend","matRippleDisabled"],[1,"mat-mdc-tab-header-pagination-chevron"],[1,"mat-mdc-tab-label-container",3,"keydown"],["role","tablist",1,"mat-mdc-tab-list",3,"cdkObserveContent"],[1,"mat-mdc-tab-labels"],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-after",3,"mousedown","click","touchend","matRippleDisabled"]],template:function(n,r){n&1&&(De(),m(0,"div",5,0),E("click",function(){return r._handlePaginatorClick("before")})("mousedown",function(a){return r._handlePaginatorPress("before",a)})("touchend",function(){return r._stopInterval()}),T(2,"div",6),h(),m(3,"div",7,1),E("keydown",function(a){return r._handleKeydown(a)}),m(5,"div",8,2),E("cdkObserveContent",function(){return r._onContentChanges()}),m(7,"div",9,3),te(9),h()()(),m(10,"div",10,4),E("mousedown",function(a){return r._handlePaginatorPress("after",a)})("click",function(){return r._handlePaginatorClick("after")})("touchend",function(){return r._stopInterval()}),T(12,"div",6),h()),n&2&&(F("mat-mdc-tab-header-pagination-disabled",r._disableScrollBefore),A("matRippleDisabled",r._disableScrollBefore||r.disableRipple),p(3),F("_mat-animation-noopable",r._animationsDisabled),p(2),K("aria-label",r.ariaLabel||null)("aria-labelledby",r.ariaLabelledby||null),p(5),F("mat-mdc-tab-header-pagination-disabled",r._disableScrollAfter),A("matRippleDisabled",r._disableScrollAfter||r.disableRipple))},dependencies:[ia,wc],styles:[`.mat-mdc-tab-header {
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
`],encapsulation:2})}return t})(),pS=new y("MAT_TABS_CONFIG"),rS=(()=>{class t extends fn{_host=c(Db);_ngZone=c(V);_centeringSub=ae.EMPTY;_leavingSub=ae.EMPTY;constructor(){super()}ngOnInit(){super.ngOnInit(),this._centeringSub=this._host._beforeCentering.pipe(Qe(this._host._isCenterPosition())).subscribe(e=>{this._host._content&&e&&!this.hasAttached()&&this._ngZone.run(()=>{Promise.resolve().then(),this.attach(this._host._content)})}),this._leavingSub=this._host._afterLeavingCenter.subscribe(()=>{this._host.preserveContent||this._ngZone.run(()=>this.detach())})}ngOnDestroy(){super.ngOnDestroy(),this._centeringSub.unsubscribe(),this._leavingSub.unsubscribe()}static \u0275fac=function(n){return new(n||t)};static \u0275dir=N({type:t,selectors:[["","matTabBodyHost",""]],features:[ge]})}return t})(),Db=(()=>{class t{_elementRef=c(B);_dir=c(nt,{optional:!0});_ngZone=c(V);_injector=c(G);_renderer=c(Re);_diAnimationsDisabled=je();_eventCleanups;_initialized=!1;_fallbackTimer;_positionIndex;_dirChangeSubscription=ae.EMPTY;_position;_previousPosition;_onCentering=new I;_beforeCentering=new I;_afterLeavingCenter=new I;_onCentered=new I(!0);_portalHost;_contentElement;_content;animationDuration="500ms";preserveContent=!1;set position(e){this._positionIndex=e,this._computePositionAnimationState()}constructor(){if(this._dir){let e=c(xe);this._dirChangeSubscription=this._dir.change.subscribe(n=>{this._computePositionAnimationState(n),e.markForCheck()})}}ngOnInit(){this._bindTransitionEvents(),this._position==="center"&&(this._setActiveClass(!0),Ge(()=>this._onCentering.emit(this._elementRef.nativeElement.clientHeight),{injector:this._injector})),this._initialized=!0}ngOnDestroy(){clearTimeout(this._fallbackTimer),this._eventCleanups?.forEach(e=>e()),this._dirChangeSubscription.unsubscribe()}_bindTransitionEvents(){this._ngZone.runOutsideAngular(()=>{let e=this._elementRef.nativeElement,n=r=>{r.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.remove("mat-tab-body-animating"),r.type==="transitionend"&&this._transitionDone())};this._eventCleanups=[this._renderer.listen(e,"transitionstart",r=>{r.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.add("mat-tab-body-animating"),this._transitionStarted())}),this._renderer.listen(e,"transitionend",n),this._renderer.listen(e,"transitioncancel",n)]})}_transitionStarted(){clearTimeout(this._fallbackTimer);let e=this._position==="center";this._beforeCentering.emit(e),e&&this._onCentering.emit(this._elementRef.nativeElement.clientHeight)}_transitionDone(){this._position==="center"?this._onCentered.emit():this._previousPosition==="center"&&this._afterLeavingCenter.emit()}_setActiveClass(e){this._elementRef.nativeElement.classList.toggle("mat-mdc-tab-body-active",e)}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_isCenterPosition(){return this._positionIndex===0}_computePositionAnimationState(e=this._getLayoutDirection()){this._previousPosition=this._position,this._positionIndex<0?this._position=e=="ltr"?"left":"right":this._positionIndex>0?this._position=e=="ltr"?"right":"left":this._position="center",this._animationsDisabled()?this._simulateTransitionEvents():this._initialized&&(this._position==="center"||this._previousPosition==="center")&&(clearTimeout(this._fallbackTimer),this._fallbackTimer=this._ngZone.runOutsideAngular(()=>setTimeout(()=>this._simulateTransitionEvents(),100)))}_simulateTransitionEvents(){this._transitionStarted(),Ge(()=>this._transitionDone(),{injector:this._injector})}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0ms"||this.animationDuration==="0s"}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=M({type:t,selectors:[["mat-tab-body"]],viewQuery:function(n,r){if(n&1&&Ce(rS,5)(QL,5),n&2){let o;R(o=O())&&(r._portalHost=o.first),R(o=O())&&(r._contentElement=o.first)}},hostAttrs:[1,"mat-mdc-tab-body"],hostVars:1,hostBindings:function(n,r){n&2&&K("inert",r._position==="center"?null:"")},inputs:{_content:[0,"content","_content"],animationDuration:"animationDuration",preserveContent:"preserveContent",position:"position"},outputs:{_onCentering:"_onCentering",_beforeCentering:"_beforeCentering",_onCentered:"_onCentered"},decls:3,vars:6,consts:[["content",""],["cdkScrollable","",1,"mat-mdc-tab-body-content"],["matTabBodyHost",""]],template:function(n,r){n&1&&(m(0,"div",1,0),dt(2,ZL,0,0,"ng-template",2),h()),n&2&&F("mat-tab-body-content-left",r._position==="left")("mat-tab-body-content-right",r._position==="right")("mat-tab-body-content-can-animate",r._position==="center"||r._previousPosition==="center")},dependencies:[rS,$f],styles:[`.mat-mdc-tab-body {
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
`],encapsulation:2})}return t})(),Gf=(()=>{class t{_elementRef=c(B);_changeDetectorRef=c(xe);_ngZone=c(V);_tabsSubscription=ae.EMPTY;_tabLabelSubscription=ae.EMPTY;_tabBodySubscription=ae.EMPTY;_diAnimationsDisabled=je();_allTabs;_tabBodies;_tabBodyWrapper;_tabHeader;_tabs=new tr;_indexToSelect=0;_lastFocusedTabIndex=null;_tabBodyWrapperHeight=0;color;get fitInkBarToContent(){return this._fitInkBarToContent}set fitInkBarToContent(e){this._fitInkBarToContent=e,this._changeDetectorRef.markForCheck()}_fitInkBarToContent=!1;stretchTabs=!0;alignTabs=null;dynamicHeight=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){this._indexToSelect=isNaN(e)?null:e}_selectedIndex=null;headerPosition="above";get animationDuration(){return this._animationDuration}set animationDuration(e){let n=e+"";this._animationDuration=/^\d+$/.test(n)?e+"ms":n}_animationDuration;get contentTabIndex(){return this._contentTabIndex}set contentTabIndex(e){this._contentTabIndex=isNaN(e)?null:e}_contentTabIndex=null;disablePagination=!1;disableRipple=!1;preserveContent=!1;get backgroundColor(){return this._backgroundColor}set backgroundColor(e){let n=this._elementRef.nativeElement.classList;n.remove("mat-tabs-with-background",`mat-background-${this.backgroundColor}`),e&&n.add("mat-tabs-with-background",`mat-background-${e}`),this._backgroundColor=e}_backgroundColor;ariaLabel;ariaLabelledby;selectedIndexChange=new I;focusChange=new I;animationDone=new I;selectedTabChange=new I(!0);_groupId;_isServer=!c(ue).isBrowser;constructor(){let e=c(pS,{optional:!0});this._groupId=c(Ye).getId("mat-tab-group-"),this.animationDuration=e&&e.animationDuration?e.animationDuration:"500ms",this.disablePagination=e&&e.disablePagination!=null?e.disablePagination:!1,this.dynamicHeight=e&&e.dynamicHeight!=null?e.dynamicHeight:!1,e?.contentTabIndex!=null&&(this.contentTabIndex=e.contentTabIndex),this.preserveContent=!!e?.preserveContent,this.fitInkBarToContent=e&&e.fitInkBarToContent!=null?e.fitInkBarToContent:!1,this.stretchTabs=e&&e.stretchTabs!=null?e.stretchTabs:!0,this.alignTabs=e&&e.alignTabs!=null?e.alignTabs:null}ngAfterContentChecked(){let e=this._indexToSelect=this._clampTabIndex(this._indexToSelect);if(this._selectedIndex!=e){let n=this._selectedIndex==null;if(!n){this.selectedTabChange.emit(this._createChangeEvent(e));let r=this._tabBodyWrapper.nativeElement;r.style.minHeight=r.clientHeight+"px"}Promise.resolve().then(()=>{this._tabs.forEach((r,o)=>r.isActive=o===e),n||(this.selectedIndexChange.emit(e),this._tabBodyWrapper.nativeElement.style.minHeight="")})}this._tabs.forEach((n,r)=>{n.position=r-e,this._selectedIndex!=null&&n.position==0&&!n.origin&&(n.origin=e-this._selectedIndex)}),this._selectedIndex!==e&&(this._selectedIndex=e,this._lastFocusedTabIndex=null,this._changeDetectorRef.markForCheck())}ngAfterContentInit(){this._subscribeToAllTabChanges(),this._subscribeToTabLabels(),this._tabsSubscription=this._tabs.changes.subscribe(()=>{let e=this._clampTabIndex(this._indexToSelect);if(e===this._selectedIndex){let n=this._tabs.toArray(),r;for(let o=0;o<n.length;o++)if(n[o].isActive){this._indexToSelect=this._selectedIndex=o,this._lastFocusedTabIndex=null,r=n[o];break}!r&&n[e]&&Promise.resolve().then(()=>{n[e].isActive=!0,this.selectedTabChange.emit(this._createChangeEvent(e))})}this._changeDetectorRef.markForCheck()})}ngAfterViewInit(){this._tabBodySubscription=this._tabBodies.changes.subscribe(()=>this._bodyCentered(!0))}_subscribeToAllTabChanges(){this._allTabs.changes.pipe(Qe(this._allTabs)).subscribe(e=>{this._tabs.reset(e.filter(n=>n._closestTabGroup===this||!n._closestTabGroup)),this._tabs.notifyOnChanges()})}ngOnDestroy(){this._tabs.destroy(),this._tabsSubscription.unsubscribe(),this._tabLabelSubscription.unsubscribe(),this._tabBodySubscription.unsubscribe()}realignInkBar(){this._tabHeader&&this._tabHeader._alignInkBarToSelectedTab()}updatePagination(){this._tabHeader&&this._tabHeader.updatePagination()}focusTab(e){let n=this._tabHeader;n&&(n.focusIndex=e)}_focusChanged(e){this._lastFocusedTabIndex=e,this.focusChange.emit(this._createChangeEvent(e))}_createChangeEvent(e){let n=new xb;return n.index=e,this._tabs&&this._tabs.length&&(n.tab=this._tabs.toArray()[e]),n}_subscribeToTabLabels(){this._tabLabelSubscription&&this._tabLabelSubscription.unsubscribe(),this._tabLabelSubscription=Nt(...this._tabs.map(e=>e._stateChanges)).subscribe(()=>this._changeDetectorRef.markForCheck())}_clampTabIndex(e){return Math.min(this._tabs.length-1,Math.max(e||0,0))}_getTabLabelId(e,n){return e.id||`${this._groupId}-label-${n}`}_getTabContentId(e){return`${this._groupId}-content-${e}`}_setTabBodyWrapperHeight(e){if(!this.dynamicHeight||!this._tabBodyWrapperHeight){this._tabBodyWrapperHeight=e;return}let n=this._tabBodyWrapper.nativeElement;n.style.height=this._tabBodyWrapperHeight+"px",this._tabBodyWrapper.nativeElement.offsetHeight&&(n.style.height=e+"px")}_removeTabBodyWrapperHeight(){let e=this._tabBodyWrapper.nativeElement;this._tabBodyWrapperHeight=e.clientHeight,e.style.height="",this._ngZone.run(()=>this.animationDone.emit())}_handleClick(e,n,r){n.focusIndex=r,e.disabled||(this.selectedIndex=r)}_getTabIndex(e){let n=this._lastFocusedTabIndex??this.selectedIndex;return e===n?0:-1}_tabFocusChanged(e,n){e&&e!=="mouse"&&e!=="touch"&&(this._tabHeader.focusIndex=n)}_bodyCentered(e){e&&this._tabBodies?.forEach((n,r)=>n._setActiveClass(r===this._selectedIndex))}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0"||this.animationDuration==="0ms"}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=M({type:t,selectors:[["mat-tab-group"]],contentQueries:function(n,r,o){if(n&1&&vt(o,Hc,5),n&2){let a;R(a=O())&&(r._allTabs=a)}},viewQuery:function(n,r){if(n&1&&Ce(KL,5)(XL,5)(Db,5),n&2){let o;R(o=O())&&(r._tabBodyWrapper=o.first),R(o=O())&&(r._tabHeader=o.first),R(o=O())&&(r._tabBodies=o)}},hostAttrs:[1,"mat-mdc-tab-group"],hostVars:11,hostBindings:function(n,r){n&2&&(K("mat-align-tabs",r.alignTabs),It("mat-"+(r.color||"primary")),ri("--mat-tab-animation-duration",r.animationDuration),F("mat-mdc-tab-group-dynamic-height",r.dynamicHeight)("mat-mdc-tab-group-inverted-header",r.headerPosition==="below")("mat-mdc-tab-group-stretch-tabs",r.stretchTabs))},inputs:{color:"color",fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",Z],stretchTabs:[2,"mat-stretch-tabs","stretchTabs",Z],alignTabs:[0,"mat-align-tabs","alignTabs"],dynamicHeight:[2,"dynamicHeight","dynamicHeight",Z],selectedIndex:[2,"selectedIndex","selectedIndex",si],headerPosition:"headerPosition",animationDuration:"animationDuration",contentTabIndex:[2,"contentTabIndex","contentTabIndex",si],disablePagination:[2,"disablePagination","disablePagination",Z],disableRipple:[2,"disableRipple","disableRipple",Z],preserveContent:[2,"preserveContent","preserveContent",Z],backgroundColor:"backgroundColor",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"]},outputs:{selectedIndexChange:"selectedIndexChange",focusChange:"focusChange",animationDone:"animationDone",selectedTabChange:"selectedTabChange"},exportAs:["matTabGroup"],features:[Ue([{provide:uS,useExisting:t}])],ngContentSelectors:jc,decls:9,vars:8,consts:[["tabHeader",""],["tabBodyWrapper",""],["tabNode",""],[3,"indexFocused","selectFocusedIndex","selectedIndex","disableRipple","disablePagination","aria-label","aria-labelledby"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"id","mdc-tab--active","class","disabled","fitInkBarToContent"],[1,"mat-mdc-tab-body-wrapper"],["role","tabpanel",3,"id","class","content","position","animationDuration","preserveContent"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"click","cdkFocusChange","id","disabled","fitInkBarToContent"],[1,"mdc-tab__ripple"],["mat-ripple","",1,"mat-mdc-tab-ripple",3,"matRippleTrigger","matRippleDisabled"],[1,"mdc-tab__content"],[1,"mdc-tab__text-label"],[3,"cdkPortalOutlet"],["role","tabpanel",3,"_onCentered","_onCentering","_beforeCentering","id","content","position","animationDuration","preserveContent"]],template:function(n,r){n&1&&(De(),m(0,"mat-tab-header",3,0),E("indexFocused",function(a){return r._focusChanged(a)})("selectFocusedIndex",function(a){return r.selectedIndex=a}),Me(2,nV,8,17,"div",4,Ur),h(),j(4,iV,1,0),m(5,"div",5,1),Me(7,rV,1,10,"mat-tab-body",6,Ur),h()),n&2&&(A("selectedIndex",r.selectedIndex||0)("disableRipple",r.disableRipple)("disablePagination",r.disablePagination),sm("aria-label",r.ariaLabel)("aria-labelledby",r.ariaLabelledby),p(2),Se(r._tabs),p(2),H(r._isServer?4:-1),p(),F("_mat-animation-noopable",r._animationsDisabled()),p(2),Se(r._tabs))},dependencies:[fV,fS,yc,ia,fn,Db],styles:[`.mdc-tab {
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
`],encapsulation:2})}return t})(),xb=class{index;tab},Eb=(()=>{class t extends hS{_focusedItem=x(null);get fitInkBarToContent(){return this._fitInkBarToContent.value}set fitInkBarToContent(e){this._fitInkBarToContent.next(e),this._changeDetectorRef.markForCheck()}_fitInkBarToContent=new st(!1);stretchTabs=!0;get animationDuration(){return this._animationDuration}set animationDuration(e){let n=e+"";this._animationDuration=/^\d+$/.test(n)?e+"ms":n}_animationDuration;_items;get backgroundColor(){return this._backgroundColor}set backgroundColor(e){let n=this._elementRef.nativeElement.classList;n.remove("mat-tabs-with-background",`mat-background-${this.backgroundColor}`),e&&n.add("mat-tabs-with-background",`mat-background-${e}`),this._backgroundColor=e}_backgroundColor;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=x(!1);color="primary";tabPanel;_tabListContainer;_tabList;_tabListInner;_nextPaginator;_previousPaginator;_inkBar;constructor(){let e=c(pS,{optional:!0});super(),this.disablePagination=e&&e.disablePagination!=null?e.disablePagination:!1,this.fitInkBarToContent=e&&e.fitInkBarToContent!=null?e.fitInkBarToContent:!1,this.stretchTabs=e&&e.stretchTabs!=null?e.stretchTabs:!0}_itemSelected(){}ngAfterContentInit(){this._inkBar=new Wf(this._items),this._items.changes.pipe(Qe(null),ye(this._destroyed)).subscribe(()=>this.updateActiveLink()),super.ngAfterContentInit(),this._keyManager.change.pipe(Qe(null),ye(this._destroyed)).subscribe(()=>this._focusedItem.set(this._keyManager?.activeItem||null))}ngAfterViewInit(){this.tabPanel,super.ngAfterViewInit()}updateActiveLink(){if(!this._items)return;let e=this._items.toArray();for(let n=0;n<e.length;n++)if(e[n].active){this.selectedIndex=n,this.tabPanel&&(this.tabPanel._activeTabId=e[n].id),this._focusedItem.set(e[n]),this._changeDetectorRef.markForCheck();return}this.selectedIndex=-1}_getRole(){return this.tabPanel?"tablist":this._elementRef.nativeElement.getAttribute("role")}_hasFocus(e){return this._keyManager?.activeItem===e}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=M({type:t,selectors:[["","mat-tab-nav-bar",""]],contentQueries:function(n,r,o){if(n&1&&vt(o,Mb,5),n&2){let a;R(a=O())&&(r._items=a)}},viewQuery:function(n,r){if(n&1&&Ce(oS,7)(aS,7)(sS,7)(lS,5)(cS,5),n&2){let o;R(o=O())&&(r._tabListContainer=o.first),R(o=O())&&(r._tabList=o.first),R(o=O())&&(r._tabListInner=o.first),R(o=O())&&(r._nextPaginator=o.first),R(o=O())&&(r._previousPaginator=o.first)}},hostAttrs:[1,"mat-mdc-tab-nav-bar","mat-mdc-tab-header"],hostVars:17,hostBindings:function(n,r){n&2&&(K("role",r._getRole()),ri("--mat-tab-animation-duration",r.animationDuration),F("mat-mdc-tab-header-pagination-controls-enabled",r._showPaginationControls)("mat-mdc-tab-header-rtl",r._getLayoutDirection()=="rtl")("mat-mdc-tab-nav-bar-stretch-tabs",r.stretchTabs)("mat-primary",r.color!=="warn"&&r.color!=="accent")("mat-accent",r.color==="accent")("mat-warn",r.color==="warn")("_mat-animation-noopable",r._animationsDisabled))},inputs:{fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",Z],stretchTabs:[2,"mat-stretch-tabs","stretchTabs",Z],animationDuration:"animationDuration",backgroundColor:"backgroundColor",disableRipple:[2,"disableRipple","disableRipple",Z],color:"color",tabPanel:"tabPanel"},exportAs:["matTabNavBar","matTabNav"],features:[ge],attrs:oV,ngContentSelectors:jc,decls:13,vars:6,consts:[["previousPaginator",""],["tabListContainer",""],["tabList",""],["tabListInner",""],["nextPaginator",""],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-before",3,"click","mousedown","touchend","matRippleDisabled"],[1,"mat-mdc-tab-header-pagination-chevron"],[1,"mat-mdc-tab-link-container",3,"keydown"],[1,"mat-mdc-tab-list",3,"cdkObserveContent"],[1,"mat-mdc-tab-links"],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-after",3,"mousedown","click","touchend","matRippleDisabled"]],template:function(n,r){n&1&&(De(),m(0,"div",5,0),E("click",function(){return r._handlePaginatorClick("before")})("mousedown",function(a){return r._handlePaginatorPress("before",a)})("touchend",function(){return r._stopInterval()}),T(2,"div",6),h(),m(3,"div",7,1),E("keydown",function(a){return r._handleKeydown(a)}),m(5,"div",8,2),E("cdkObserveContent",function(){return r._onContentChanges()}),m(7,"div",9,3),te(9),h()()(),m(10,"div",10,4),E("mousedown",function(a){return r._handlePaginatorPress("after",a)})("click",function(){return r._handlePaginatorClick("after")})("touchend",function(){return r._stopInterval()}),T(12,"div",6),h()),n&2&&(F("mat-mdc-tab-header-pagination-disabled",r._disableScrollBefore),A("matRippleDisabled",r._disableScrollBefore||r.disableRipple),p(10),F("mat-mdc-tab-header-pagination-disabled",r._disableScrollAfter),A("matRippleDisabled",r._disableScrollAfter||r.disableRipple))},dependencies:[ia,wc],styles:[`.mdc-tab {
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
`],encapsulation:2})}return t})(),Mb=(()=>{class t extends mS{_tabNavBar=c(Eb);elementRef=c(B);_focusMonitor=c(Vi);_destroyed=new S;_isActive=!1;_tabIndex=ut(()=>this._tabNavBar._focusedItem()===this?this.tabIndex:-1);get active(){return this._isActive}set active(e){e!==this._isActive&&(this._isActive=e,this._tabNavBar.updateActiveLink())}disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=x(!1);tabIndex=0;rippleConfig;get rippleDisabled(){return this.disabled||this.disableRipple||this._tabNavBar.disableRipple||!!this.rippleConfig.disabled}id=c(Ye).getId("mat-tab-link-");constructor(){super(),c(qe).load(mi);let e=c(na,{optional:!0}),n=c(new oi("tabindex"),{optional:!0});this.rippleConfig=e||{},this.tabIndex=n==null?0:parseInt(n)||0,je()&&(this.rippleConfig.animation={enterDuration:0,exitDuration:0}),this._tabNavBar._fitInkBarToContent.pipe(ye(this._destroyed)).subscribe(r=>{this.fitInkBarToContent=r})}focus(){this.elementRef.nativeElement.focus()}ngAfterViewInit(){this._focusMonitor.monitor(this.elementRef)}ngOnDestroy(){this._destroyed.next(),this._destroyed.complete(),super.ngOnDestroy(),this._focusMonitor.stopMonitoring(this.elementRef)}_handleFocus(){this._tabNavBar.focusIndex=this._tabNavBar._items.toArray().indexOf(this)}_handleKeydown(e){(e.keyCode===32||e.keyCode===13)&&(this.disabled?e.preventDefault():this._tabNavBar.tabPanel&&(e.keyCode===32&&e.preventDefault(),this.elementRef.nativeElement.click()))}_getAriaControls(){return this._tabNavBar.tabPanel?this._tabNavBar.tabPanel?.id:this.elementRef.nativeElement.getAttribute("aria-controls")}_getAriaSelected(){return this._tabNavBar.tabPanel?this.active?"true":"false":this.elementRef.nativeElement.getAttribute("aria-selected")}_getAriaCurrent(){return this.active&&!this._tabNavBar.tabPanel?"page":null}_getRole(){return this._tabNavBar.tabPanel?"tab":this.elementRef.nativeElement.getAttribute("role")}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=M({type:t,selectors:[["","mat-tab-link",""],["","matTabLink",""]],hostAttrs:[1,"mdc-tab","mat-mdc-tab-link","mat-focus-indicator"],hostVars:11,hostBindings:function(n,r){n&1&&E("focus",function(){return r._handleFocus()})("keydown",function(a){return r._handleKeydown(a)}),n&2&&(K("aria-controls",r._getAriaControls())("aria-current",r._getAriaCurrent())("aria-disabled",r.disabled)("aria-selected",r._getAriaSelected())("id",r.id)("tabIndex",r._tabIndex())("role",r._getRole()),F("mat-mdc-tab-disabled",r.disabled)("mdc-tab--active",r.active))},inputs:{active:[2,"active","active",Z],disabled:[2,"disabled","disabled",Z],disableRipple:[2,"disableRipple","disableRipple",Z],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:si(e)],id:"id"},exportAs:["matTabLink"],features:[ge],attrs:aV,ngContentSelectors:jc,decls:5,vars:2,consts:[[1,"mdc-tab__ripple"],["mat-ripple","",1,"mat-mdc-tab-ripple",3,"matRippleTrigger","matRippleDisabled"],[1,"mdc-tab__content"],[1,"mdc-tab__text-label"]],template:function(n,r){n&1&&(De(),T(0,"span",0)(1,"div",1),m(2,"span",2)(3,"span",3),te(4),h()()),n&2&&(p(),A("matRippleTrigger",r.elementRef.nativeElement)("matRippleDisabled",r.rippleDisabled))},dependencies:[ia],styles:[`.mat-mdc-tab-link {
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
`],encapsulation:2,changeDetection:0})}return t})();var qf=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=$({type:t});static \u0275inj=z({imports:[ve]})}return t})();function pV(t,i){if(t&1&&(m(0,"div",15)(1,"mat-icon"),g(2,"error_outline"),h(),m(3,"span"),g(4),h()()),t&2){let e=D();p(4),oe(e.errorMessage())}}function gV(t,i){if(t&1&&(m(0,"div",15)(1,"mat-icon"),g(2,"error_outline"),h(),m(3,"span"),g(4),h()()),t&2){let e=D();p(4),oe(e.errorMessage())}}function _V(t,i){if(t&1&&(m(0,"div",24)(1,"mat-icon"),g(2,"check_circle_outline"),h(),m(3,"span"),g(4),h()()),t&2){let e=D();p(4),oe(e.successMessage())}}var Yf=class t{email=Ne.required();password=Ne.required();name=Ne.required();lastName=Ne.required();errorMessage=Ne.required();successMessage=Ne.required();hide=x(!0);clickEvent(i){this.hide.set(!this.hide()),i.stopPropagation()}clearError(){this.errorMessage.set(""),this.successMessage.set("")}loginSubmitEvent=new I;submitLogin(){this.loginSubmitEvent.emit()}registerSubmitEvent=new I;submitRegister(){this.registerSubmitEvent.emit()}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=M({type:t,selectors:[["login-container"]],inputs:{email:[1,"email"],password:[1,"password"],name:[1,"name"],lastName:[1,"lastName"],errorMessage:[1,"errorMessage"],successMessage:[1,"successMessage"]},outputs:{email:"emailChange",password:"passwordChange",name:"nameChange",lastName:"lastNameChange",errorMessage:"errorMessageChange",successMessage:"successMessageChange",loginSubmitEvent:"loginSubmitEvent",registerSubmitEvent:"registerSubmitEvent"},decls:78,vars:17,consts:[["appearance","outlined",1,"login-card"],["mat-stretch-tabs","false","mat-align-tabs","center","dynamicHeight","","animationDuration","200ms",3,"selectedIndexChange"],["label","Logga in"],[1,"tab-content"],[1,"tab-header"],[1,"tab-icon-wrap"],[1,"tab-icon"],[1,"tab-title"],[1,"tab-subtitle"],[1,"form-fields"],["appearance","outline",1,"full-width"],["matPrefix","",1,"field-prefix-icon"],["matInput","","type","email","autocomplete","email",3,"ngModelChange","keydown.enter","ngModel"],["matInput","","autocomplete","current-password",3,"ngModelChange","keydown.enter","ngModel","type"],["matIconButton","","matSuffix","",3,"click"],["role","alert",1,"form-message","form-message--error"],["mat-flat-button","",1,"submit-button",3,"click"],["iconPositionEnd",""],["label","Registrera"],[1,"name-row"],["appearance","outline"],["matInput","","autocomplete","given-name",3,"ngModelChange","keydown.enter","ngModel"],["matInput","","autocomplete","family-name",3,"ngModelChange","keydown.enter","ngModel"],["matInput","","autocomplete","new-password",3,"ngModelChange","keydown.enter","ngModel","type"],["role","status",1,"form-message","form-message--success"]],template:function(e,n){e&1&&(m(0,"mat-card",0)(1,"mat-tab-group",1),E("selectedIndexChange",function(){return n.clearError()}),m(2,"mat-tab",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"mat-icon",6),g(7,"login"),h()(),m(8,"h2",7),g(9,"V\xE4lkommen tillbaka"),h(),m(10,"p",8),g(11,"Logga in p\xE5 "),m(12,"strong"),g(13,"K\xEEndGuard"),h()()(),m(14,"div",9)(15,"mat-form-field",10)(16,"mat-label"),g(17,"E-postadress"),h(),m(18,"mat-icon",11),g(19,"mail_outline"),h(),m(20,"input",12),Xe("ngModelChange",function(o){return Ie(n.email,o)||(n.email=o),o}),E("keydown.enter",function(){return n.submitLogin()}),h()(),m(21,"mat-form-field",10)(22,"mat-label"),g(23,"L\xF6senord"),h(),m(24,"mat-icon",11),g(25,"lock_outline"),h(),m(26,"input",13),Xe("ngModelChange",function(o){return Ie(n.password,o)||(n.password=o),o}),E("keydown.enter",function(){return n.submitLogin()}),h(),m(27,"button",14),E("click",function(o){return n.clickEvent(o)}),m(28,"mat-icon"),g(29),h()()()(),j(30,pV,5,1,"div",15),m(31,"button",16),E("click",function(){return n.submitLogin()}),g(32," Logga in "),m(33,"mat-icon",17),g(34,"arrow_forward"),h()()()(),m(35,"mat-tab",18)(36,"div",3)(37,"div",4)(38,"div",5)(39,"mat-icon",6),g(40,"person_add"),h()(),m(41,"h2",7),g(42,"Skapa konto"),h(),m(43,"p",8),g(44,"Kom ig\xE5ng med "),m(45,"strong"),g(46,"K\xEEndGuard"),h()()(),m(47,"div",9)(48,"div",19)(49,"mat-form-field",20)(50,"mat-label"),g(51,"F\xF6rnamn"),h(),m(52,"input",21),Xe("ngModelChange",function(o){return Ie(n.name,o)||(n.name=o),o}),E("keydown.enter",function(){return n.submitRegister()}),h()(),m(53,"mat-form-field",20)(54,"mat-label"),g(55,"Efternamn"),h(),m(56,"input",22),Xe("ngModelChange",function(o){return Ie(n.lastName,o)||(n.lastName=o),o}),E("keydown.enter",function(){return n.submitRegister()}),h()()(),m(57,"mat-form-field",10)(58,"mat-label"),g(59,"E-postadress"),h(),m(60,"mat-icon",11),g(61,"mail_outline"),h(),m(62,"input",12),Xe("ngModelChange",function(o){return Ie(n.email,o)||(n.email=o),o}),E("keydown.enter",function(){return n.submitRegister()}),h()(),m(63,"mat-form-field",10)(64,"mat-label"),g(65,"L\xF6senord"),h(),m(66,"mat-icon",11),g(67,"lock_outline"),h(),m(68,"input",23),Xe("ngModelChange",function(o){return Ie(n.password,o)||(n.password=o),o}),E("keydown.enter",function(){return n.submitRegister()}),h(),m(69,"button",14),E("click",function(o){return n.clickEvent(o)}),m(70,"mat-icon"),g(71),h()()()(),j(72,gV,5,1,"div",15),j(73,_V,5,1,"div",24),m(74,"button",16),E("click",function(){return n.submitRegister()}),g(75," Registrera konto "),m(76,"mat-icon",17),g(77,"arrow_forward"),h()()()()()()),e&2&&(p(20),Ke("ngModel",n.email),p(6),Ke("ngModel",n.password),A("type",n.hide()?"password":"text"),p(),K("aria-label","Visa/d\xF6lj l\xF6senord")("aria-pressed",n.hide()),p(2),oe(n.hide()?"visibility_off":"visibility"),p(),H(n.errorMessage()!==""?30:-1),p(22),Ke("ngModel",n.name),p(4),Ke("ngModel",n.lastName),p(6),Ke("ngModel",n.email),p(6),Ke("ngModel",n.password),A("type",n.hide()?"password":"text"),p(),K("aria-label","Visa/d\xF6lj l\xF6senord")("aria-pressed",n.hide()),p(2),oe(n.hide()?"visibility_off":"visibility"),p(),H(n.errorMessage()!==""?72:-1),p(),H(n.successMessage()!==""?73:-1))},dependencies:[Zr,mn,Un,_r,At,kt,Hn,wf,Df,zn,Kt,ft,$t,ji,Zt,wt,yt,Gf,Hc],styles:["[_nghost-%COMP%]{width:100%;max-width:460px}.login-card[_ngcontent-%COMP%]{width:100%;border-radius:20px;box-shadow:var(--mat-sys-level2);overflow:hidden}.tab-content[_ngcontent-%COMP%]{padding:2rem 2rem 2.5rem;display:flex;flex-direction:column;gap:1.5rem}.tab-header[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;text-align:center;gap:.4rem;padding-top:.25rem}.tab-icon-wrap[_ngcontent-%COMP%]{width:56px;height:56px;border-radius:50%;background:var(--mat-sys-primary-container);display:flex;align-items:center;justify-content:center;margin-bottom:.5rem}.tab-icon[_ngcontent-%COMP%]{color:var(--mat-sys-on-primary-container);font-size:1.75rem;width:1.75rem;height:1.75rem}.tab-title[_ngcontent-%COMP%]{font:var(--mat-sys-headline-small);margin:0}.tab-subtitle[_ngcontent-%COMP%]{margin:0}.tab-subtitle[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:var(--mat-sys-primary);font-weight:700}.form-fields[_ngcontent-%COMP%]{display:flex;flex-direction:column}.full-width[_ngcontent-%COMP%]{width:100%}.name-row[_ngcontent-%COMP%]{display:flex;gap:.75rem}.field-prefix-icon[_ngcontent-%COMP%]{color:var(--mat-sys-on-surface-variant);font-size:1.1rem;width:1.1rem;height:1.1rem}.form-message[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.6rem;padding:.75rem 1rem;border-radius:10px;font:var(--mat-sys-body-small)}.form-message[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:1.15rem;width:1.15rem;height:1.15rem;flex-shrink:0}.form-message--error[_ngcontent-%COMP%]{background:var(--mat-sys-error-container);color:var(--mat-sys-on-error-container)}.form-message--success[_ngcontent-%COMP%]{background:var(--mat-sys-tertiary-container);color:var(--mat-sys-on-tertiary-container)}.submit-button[_ngcontent-%COMP%]{width:100%;height:48px;border-radius:12px}"]})};var at={apiUrl:"https://salad-dramatize-customary.ngrok-free.dev",wsUrl:"wss://salad-dramatize-customary.ngrok-free.dev"};var Is=class t{baseUrl=`${at.apiUrl}/api/auth`;http=c(bt);login(i,e){let n={email:i,password:e};return this.http.post(`${this.baseUrl}/login`,n).pipe(lt(r=>{sessionStorage.setItem("token",r.token),sessionStorage.setItem("UserId",r.id.toString()),sessionStorage.setItem("role",r.role)}))}register(i,e,n){let r={name:i,email:e,password:n};return this.http.post(`${this.baseUrl}/register`,r)}getRole(){return sessionStorage.getItem("role")}static \u0275fac=function(e){return new(e||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})};var Qf=class t{email=x("");password=x("");name=x("");lastName=x("");errorMessage=x("");successMessage=x("");router=c(cn);authService=c(Is);onLoginSubmit(){this.authService.login(this.email(),this.password()).subscribe({error:i=>{this.errorMessage.set(i.error.error)},next:i=>{switch(i.role){case"ADMIN":this.router.navigate(["/admin"]);break;case"TEACHER":this.router.navigate(["/app"]);break;default:this.router.navigate(["/"])}}})}onRegisterSubmit(){let i=this.name()+" "+this.lastName(),e=this.email().trim(),n=this.password();this.authService.register(i,e,n).subscribe({error:r=>{this.successMessage.set(""),this.errorMessage.set(r.error.error)},next:r=>{this.errorMessage.set(""),this.successMessage.set(r.message)}})}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=M({type:t,selectors:[["login-page"]],decls:32,vars:6,consts:[[1,"login-page-wrapper"],[1,"login-page-left-panel"],[1,"blob","blob--1"],[1,"blob","blob--2"],[1,"content"],["width","auto","height","120px","alt","KindGuard logo","src","Kindguardlogo.png"],[1,"headline"],[1,"body"],[1,"badge-divider"],[1,"badges"],[1,"badge"],[1,"login-page-form"],["id","login-page-banner"],["id","banner-logo","alt","KindGuard logo","src","Kindguardlogo.png"],[1,"blob","blob--3"],[1,"blob","blob--4"],[1,"login-page-container",3,"emailChange","passwordChange","nameChange","lastNameChange","errorMessageChange","successMessageChange","loginSubmitEvent","registerSubmitEvent","email","password","name","lastName","errorMessage","successMessage"]],template:function(e,n){e&1&&(m(0,"div",0)(1,"div",1),T(2,"div",2)(3,"div",3),m(4,"div",4),T(5,"img",5),m(6,"h1",6),g(7,"Skapa tillsammans,"),T(8,"br"),g(9,"helt utan gr\xE4nser."),h(),m(10,"p",7),g(11,"Gl\xF6m l\xE5sta filer och versionskaos. Se \xE4ndringar direkt n\xE4r de sker, s\xE5 att fokus hamnar p\xE5 l\xE4randet i st\xE4llet f\xF6r tekniken."),h(),T(12,"div",8),m(13,"div",9)(14,"span",10)(15,"mat-icon"),g(16,"groups"),h(),g(17," Kollaborativ journalskrivning "),h(),m(18,"span",10)(19,"mat-icon"),g(20,"history"),h(),g(21," Optimistisk versionshantering "),h(),m(22,"span",10)(23,"mat-icon"),g(24,"psychology_alt"),h(),g(25," Flexibelt l\xE4rande "),h()()()(),m(26,"div",11)(27,"div",12),T(28,"img",13)(29,"div",14)(30,"div",15),h(),m(31,"login-container",16),Xe("emailChange",function(o){return Ie(n.email,o)||(n.email=o),o})("passwordChange",function(o){return Ie(n.password,o)||(n.password=o),o})("nameChange",function(o){return Ie(n.name,o)||(n.name=o),o})("lastNameChange",function(o){return Ie(n.lastName,o)||(n.lastName=o),o})("errorMessageChange",function(o){return Ie(n.errorMessage,o)||(n.errorMessage=o),o})("successMessageChange",function(o){return Ie(n.successMessage,o)||(n.successMessage=o),o}),E("loginSubmitEvent",function(){return n.onLoginSubmit()})("registerSubmitEvent",function(){return n.onRegisterSubmit()}),h()()()),e&2&&(p(31),Ke("email",n.email)("password",n.password)("name",n.name)("lastName",n.lastName)("errorMessage",n.errorMessage)("successMessage",n.successMessage))},dependencies:[Yf,wt],styles:["[_nghost-%COMP%]{display:block;width:100%;height:100%}.login-page-wrapper[_ngcontent-%COMP%]{display:flex;width:100%;min-height:100vh}.login-page-left-panel[_ngcontent-%COMP%]{flex:1.1;background:var(--mat-sys-primary);display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden;padding:3rem}#login-page-banner[_ngcontent-%COMP%]{background:var(--mat-sys-primary);box-sizing:border-box;justify-content:center;position:absolute;display:none;width:100%;top:0;left:0;height:7em;min-height:fit-content}#login-page-banner[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{filter:brightness(0) invert(1);opacity:.95;width:auto;min-height:5rem;max-height:8rem;max-width:100%}@media(max-width:1050px){.login-page-left-panel[_ngcontent-%COMP%]{display:none}#login-page-banner[_ngcontent-%COMP%]{display:flex}}.blob[_ngcontent-%COMP%]{position:absolute;border-radius:50%;background:var(--mat-sys-on-primary);opacity:.06}.blob--1[_ngcontent-%COMP%]{width:480px;height:480px;bottom:-140px;right:-100px}.blob--2[_ngcontent-%COMP%]{width:260px;height:260px;top:-60px;left:-60px}.blob--3[_ngcontent-%COMP%]{width:260px;height:260px;right:0;bottom:0}.blob--4[_ngcontent-%COMP%]{width:130px;height:130px;left:0;top:0}.content[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start;gap:1.5rem}.content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{filter:brightness(0) invert(1);opacity:.95;margin-left:-11px}.headline[_ngcontent-%COMP%]{font:var(--mat-sys-display-small);color:var(--mat-sys-on-primary);margin:0;line-height:1.15}.body[_ngcontent-%COMP%]{font:var(--mat-sys-body-large);color:var(--mat-sys-on-primary);opacity:.82;margin:0;max-width:320px;line-height:1.6}.badge-divider[_ngcontent-%COMP%]{width:40px;height:3px;background:var(--mat-sys-on-primary);opacity:.35}.badges[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.6rem}.badge[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem;font:var(--mat-sys-label-large);color:var(--mat-sys-on-primary);opacity:.75}.badge[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:1.1rem;width:1.1rem;height:1.1rem}.login-page-form[_ngcontent-%COMP%]{flex:1;display:flex;justify-content:center;align-items:center;background:var(--mat-sys-surface);padding:2rem}"]})};var rn=(()=>{class t{get vertical(){return this._vertical}set vertical(e){this._vertical=Lt(e)}_vertical=!1;get inset(){return this._inset}set inset(e){this._inset=Lt(e)}_inset=!1;static \u0275fac=function(n){return new(n||t)};static \u0275cmp=M({type:t,selectors:[["mat-divider"]],hostAttrs:["role","separator",1,"mat-divider"],hostVars:7,hostBindings:function(n,r){n&2&&(K("aria-orientation",r.vertical?"vertical":"horizontal"),F("mat-divider-vertical",r.vertical)("mat-divider-horizontal",!r.vertical)("mat-divider-inset",r.inset))},inputs:{vertical:"vertical",inset:"inset"},decls:0,vars:0,template:function(n,r){},styles:[`.mat-divider {
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
`],encapsulation:2,changeDetection:0})}return t})(),Ui=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=$({type:t});static \u0275inj=z({imports:[ve]})}return t})();var Jr=class t{url=`${at.apiUrl}/api/attendance`;attendanceSignals=new Map;attendanceChanges=new _n;http=c(bt);getAttendanceChanges=this.attendanceChanges.asObservable();getSignal(i,e){let n=`${i}_${e}`;return this.attendanceSignals.has(n)||this.attendanceSignals.set(n,x(null)),this.attendanceSignals.get(n)}setAttendance(i,e,n){let r={childId:i,date:e,status:n};return this.attendanceChanges.next(r),this.http.put(this.url,r)}static \u0275fac=function(e){return new(e||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})};function zi(){let t=new Date;return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`}var Uc=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new S;constructor(i=!1,e,n=!0,r){this._multiple=i,this._emitChanges=n,this.compareWith=r,e&&e.length&&(i?e.forEach(o=>this._markSelected(o)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...i){this._verifyValueAssignment(i),i.forEach(n=>this._markSelected(n));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}deselect(...i){this._verifyValueAssignment(i),i.forEach(n=>this._unmarkSelected(n));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}setSelection(...i){this._verifyValueAssignment(i);let e=this.selected,n=new Set(i.map(o=>this._getConcreteValue(o)));i.forEach(o=>this._markSelected(o)),e.filter(o=>!n.has(this._getConcreteValue(o,n))).forEach(o=>this._unmarkSelected(o));let r=this._hasQueuedChanges();return this._emitChangeEvent(),r}toggle(i){return this.isSelected(i)?this.deselect(i):this.select(i)}clear(i=!0){this._unmarkAll();let e=this._hasQueuedChanges();return i&&this._emitChangeEvent(),e}isSelected(i){return this._selection.has(this._getConcreteValue(i))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(i){this._multiple&&this.selected&&this._selected.sort(i)}isMultipleSelection(){return this._multiple}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(i){i=this._getConcreteValue(i),this.isSelected(i)||(this._multiple||this._unmarkAll(),this.isSelected(i)||this._selection.add(i),this._emitChanges&&this._selectedToEmit.push(i))}_unmarkSelected(i){i=this._getConcreteValue(i),this.isSelected(i)&&(this._selection.delete(i),this._emitChanges&&this._deselectedToEmit.push(i))}_unmarkAll(){this.isEmpty()||this._selection.forEach(i=>this._unmarkSelected(i))}_verifyValueAssignment(i){i.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(i,e){if(this.compareWith){e=e??this._selection;for(let n of e)if(this.compareWith(i,n))return n;return i}else return i}};var gS=_f();function aa(t){return new Zf(t.get(pi),t.get(Y))}var Zf=class{_viewportRuler;_previousHTMLStyles={top:"",left:""};_previousScrollPosition;_isEnabled=!1;_document;constructor(i,e){this._viewportRuler=i,this._document=e}attach(){}enable(){if(this._canBeEnabled()){let i=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=i.style.left||"",this._previousHTMLStyles.top=i.style.top||"",i.style.left=mt(-this._previousScrollPosition.left),i.style.top=mt(-this._previousScrollPosition.top),i.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){let i=this._document.documentElement,e=this._document.body,n=i.style,r=e.style,o=n.scrollBehavior||"",a=r.scrollBehavior||"";this._isEnabled=!1,n.left=this._previousHTMLStyles.left,n.top=this._previousHTMLStyles.top,i.classList.remove("cdk-global-scrollblock"),gS&&(n.scrollBehavior=r.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),gS&&(n.scrollBehavior=o,r.scrollBehavior=a)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;let e=this._document.documentElement,n=this._viewportRuler.getViewportSize();return e.scrollHeight>n.height||e.scrollWidth>n.width}};function DS(t,i){return new Kf(t.get(Xr),t.get(V),t.get(pi),i)}var Kf=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(i,e,n,r){this._scrollDispatcher=i,this._ngZone=e,this._viewportRuler=n,this._config=r}attach(i){this._overlayRef,this._overlayRef=i}enable(){if(this._scrollSubscription)return;let i=this._scrollDispatcher.scrolled(0).pipe(be(e=>!e||!this._overlayRef.overlayElement.contains(e.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=i.subscribe(()=>{let e=this._viewportRuler.getViewportScrollPosition().top;Math.abs(e-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=i.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var zc=class{enable(){}disable(){}attach(){}};function Sb(t,i){return i.some(e=>{let n=t.bottom<e.top,r=t.top>e.bottom,o=t.right<e.left,a=t.left>e.right;return n||r||o||a})}function _S(t,i){return i.some(e=>{let n=t.top<e.top,r=t.bottom>e.bottom,o=t.left<e.left,a=t.right>e.right;return n||r||o||a})}function eo(t,i){return new Xf(t.get(Xr),t.get(pi),t.get(V),i)}var Xf=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(i,e,n,r){this._scrollDispatcher=i,this._viewportRuler=e,this._ngZone=n,this._config=r}attach(i){this._overlayRef,this._overlayRef=i}enable(){if(!this._scrollSubscription){let i=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(i).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:n,height:r}=this._viewportRuler.getViewportSize();Sb(e,[{width:n,height:r,bottom:r,right:n,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},xS=(()=>{class t{_injector=c(G);constructor(){}noop=()=>new zc;close=e=>DS(this._injector,e);block=()=>aa(this._injector);reposition=e=>eo(this._injector,e);static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),$i=class{positionStrategy;scrollStrategy=new zc;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(i){if(i){let e=Object.keys(i);for(let n of e)i[n]!==void 0&&(this[n]=i[n])}}};var Jf=class{connectionPair;scrollableViewProperties;constructor(i,e){this.connectionPair=i,this.scrollableViewProperties=e}};var ES=(()=>{class t{_attachedOverlays=[];_document=c(Y);_isAttached=!1;constructor(){}ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let n=this._attachedOverlays.indexOf(e);n>-1&&this._attachedOverlays.splice(n,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(e,n,r){return r.observers.length<1?!1:e.eventPredicate?e.eventPredicate(n):!0}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),MS=(()=>{class t extends ES{_ngZone=c(V);_renderer=c(_t).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=e=>{let n=this._attachedOverlays;for(let r=n.length-1;r>-1;r--){let o=n[r];if(this.canReceiveEvent(o,e,o._keydownEvents)){this._ngZone.run(()=>o._keydownEvents.next(e));break}}};static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ze(t)))(r||t)}})();static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),SS=(()=>{class t extends ES{_platform=c(ue);_ngZone=c(V);_renderer=c(_t).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let n=this._document.body,r={capture:!0},o=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[o.listen(n,"pointerdown",this._pointerDownListener,r),o.listen(n,"click",this._clickListener,r),o.listen(n,"auxclick",this._clickListener,r),o.listen(n,"contextmenu",this._clickListener,r)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=n.style.cursor,n.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=e=>{this._pointerDownEventTarget=zt(e)};_clickListener=e=>{let n=zt(e),r=e.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:n;this._pointerDownEventTarget=null;let o=this._attachedOverlays.slice();for(let a=o.length-1;a>-1;a--){let s=o[a],l=s._outsidePointerEvents;if(!(!s.hasAttached()||!this.canReceiveEvent(s,e,l))){if(vS(s.overlayElement,n)||vS(s.overlayElement,r))break;this._ngZone?this._ngZone.run(()=>l.next(e)):l.next(e)}}};static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ze(t)))(r||t)}})();static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function vS(t,i){let e=typeof ShadowRoot<"u"&&ShadowRoot,n=i;for(;n;){if(n===t)return!0;n=e&&n instanceof ShadowRoot?n.host:n.parentNode}return!1}var IS=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=M({type:t,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(n,r){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
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
`],encapsulation:2,changeDetection:0})}return t})(),th=(()=>{class t{_platform=c(ue);_containerElement;_document=c(Y);_styleLoader=c(qe);constructor(){}ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e="cdk-overlay-container";if(this._platform.isBrowser||tb()){let r=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let o=0;o<r.length;o++)r[o].remove()}let n=this._document.createElement("div");n.classList.add(e),tb()?n.setAttribute("platform","test"):this._platform.isBrowser||n.setAttribute("platform","server"),this._document.body.appendChild(n),this._containerElement=n}_loadStyles(){this._styleLoader.load(IS)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Ib=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(i,e,n,r){this._renderer=e,this._ngZone=n,this.element=i.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=e.listen(this.element,"click",r)}detach(){this._ngZone.runOutsideAngular(()=>{let i=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(i,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),i.style.pointerEvents="none",i.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function Tb(t){return t&&t.nodeType===1}var Ts=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new S;_attachments=new S;_detachments=new S;_positionStrategy;_scrollStrategy;_locationChanges=ae.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new S;_outsidePointerEvents=new S;_afterNextRenderRef;constructor(i,e,n,r,o,a,s,l,d,u=!1,f,_){this._portalOutlet=i,this._host=e,this._pane=n,this._config=r,this._ngZone=o,this._keyboardDispatcher=a,this._document=s,this._location=l,this._outsideClickDispatcher=d,this._animationsDisabled=u,this._injector=f,this._renderer=_,r.scrollStrategy&&(this._scrollStrategy=r.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=r.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(i){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(i);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=Ge(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof e?.onDestroy=="function"&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let i=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),i}dispose(){if(this._disposed)return;let i=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,i&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(i){i!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=i,this.hasAttached()&&(i.attach(this),this.updatePosition()))}updateSize(i){this._config=C(C({},this._config),i),this._updateElementSize()}setDirection(i){this._config=ne(C({},this._config),{direction:i}),this._updateElementDirection()}addPanelClass(i){this._pane&&this._toggleClasses(this._pane,i,!0)}removePanelClass(i){this._pane&&this._toggleClasses(this._pane,i,!1)}getDirection(){let i=this._config.direction;return i?typeof i=="string"?i:i.value:"ltr"}updateScrollStrategy(i){i!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=i,this.hasAttached()&&(i.attach(this),i.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let i=this._pane.style;i.width=mt(this._config.width),i.height=mt(this._config.height),i.minWidth=mt(this._config.minWidth),i.minHeight=mt(this._config.minHeight),i.maxWidth=mt(this._config.maxWidth),i.maxHeight=mt(this._config.maxHeight)}_togglePointerEvents(i){this._pane.style.pointerEvents=i?"":"none"}_attachHost(){if(!this._host.parentElement){let i=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;Tb(i)?i.after(this._host):i?.type==="parent"?i.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let i="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new Ib(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(i))}):this._backdropRef.element.classList.add(i)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(i,e,n){let r=us(e||[]).filter(o=>!!o);r.length&&(n?i.classList.add(...r):i.classList.remove(...r))}_detachContentWhenEmpty(){let i=!1;try{this._detachContentAfterRenderRef=Ge(()=>{i=!0,this._detachContent()},{injector:this._injector})}catch(e){if(i)throw e;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let i=this._scrollStrategy;i?.disable(),i?.detach?.()}},bS="cdk-overlay-connected-position-bounding-box",vV=/([A-Za-z%]+)$/;function As(t,i){return new $c(i,t.get(pi),t.get(Y),t.get(ue),t.get(th))}var $c=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new S;_resizeSubscription=ae.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(i,e,n,r,o){this._viewportRuler=e,this._document=n,this._platform=r,this._overlayContainer=o,this.setOrigin(i)}attach(i){this._overlayRef&&this._overlayRef,this._validatePositions(),i.hostElement.classList.add(bS),this._overlayRef=i,this._boundingBox=i.hostElement,this._pane=i.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let i=this._originRect,e=this._overlayRect,n=this._viewportRect,r=this._containerRect,o=[],a;for(let s of this._preferredPositions){let l=this._getOriginPoint(i,r,s),d=this._getOverlayPoint(l,e,s),u=this._getOverlayFit(d,e,n,s);if(u.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(s,l);return}if(this._canFitWithFlexibleDimensions(u,d,n)){o.push({position:s,origin:l,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(l,s)});continue}(!a||a.overlayFit.visibleArea<u.visibleArea)&&(a={overlayFit:u,overlayPoint:d,originPoint:l,position:s,overlayRect:e})}if(o.length){let s=null,l=-1;for(let d of o){let u=d.boundingBoxRect.width*d.boundingBoxRect.height*(d.position.weight||1);u>l&&(l=u,s=d)}this._isPushed=!1,this._applyPosition(s.position,s.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(a.position,a.originPoint);return}this._applyPosition(a.position,a.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&oa(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(bS),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let i=this._lastPosition;i?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(i,this._getOriginPoint(this._originRect,this._containerRect,i))):this.apply()}withScrollableContainers(i){return this._scrollables=i,this}withPositions(i){return this._preferredPositions=i,i.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(i){return this._viewportMargin=i,this}withFlexibleDimensions(i=!0){return this._hasFlexibleDimensions=i,this}withGrowAfterOpen(i=!0){return this._growAfterOpen=i,this}withPush(i=!0){return this._canPush=i,this}withLockedPosition(i=!0){return this._positionLocked=i,this}setOrigin(i){return this._origin=i,this}withDefaultOffsetX(i){return this._offsetX=i,this}withDefaultOffsetY(i){return this._offsetY=i,this}withTransformOriginOn(i){return this._transformOriginSelector=i,this}withPopoverLocation(i){return this._popoverLocation=i,this}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof B?this._origin.nativeElement:Tb(this._origin)?this._origin:null}_getOriginPoint(i,e,n){let r;if(n.originX=="center")r=i.left+i.width/2;else{let a=this._isRtl()?i.right:i.left,s=this._isRtl()?i.left:i.right;r=n.originX=="start"?a:s}e.left<0&&(r-=e.left);let o;return n.originY=="center"?o=i.top+i.height/2:o=n.originY=="top"?i.top:i.bottom,e.top<0&&(o-=e.top),{x:r,y:o}}_getOverlayPoint(i,e,n){let r;n.overlayX=="center"?r=-e.width/2:n.overlayX==="start"?r=this._isRtl()?-e.width:0:r=this._isRtl()?0:-e.width;let o;return n.overlayY=="center"?o=-e.height/2:o=n.overlayY=="top"?0:-e.height,{x:i.x+r,y:i.y+o}}_getOverlayFit(i,e,n,r){let o=CS(e),{x:a,y:s}=i,l=this._getOffset(r,"x"),d=this._getOffset(r,"y");l&&(a+=l),d&&(s+=d);let u=0-a,f=a+o.width-n.width,_=0-s,v=s+o.height-n.height,w=this._subtractOverflows(o.width,u,f),P=this._subtractOverflows(o.height,_,v),U=w*P;return{visibleArea:U,isCompletelyWithinViewport:o.width*o.height===U,fitsInViewportVertically:P===o.height,fitsInViewportHorizontally:w==o.width}}_canFitWithFlexibleDimensions(i,e,n){if(this._hasFlexibleDimensions){let r=n.bottom-e.y,o=n.right-e.x,a=yS(this._overlayRef.getConfig().minHeight),s=yS(this._overlayRef.getConfig().minWidth),l=i.fitsInViewportVertically||a!=null&&a<=r,d=i.fitsInViewportHorizontally||s!=null&&s<=o;return l&&d}return!1}_pushOverlayOnScreen(i,e,n){if(this._previousPushAmount&&this._positionLocked)return{x:i.x+this._previousPushAmount.x,y:i.y+this._previousPushAmount.y};let r=CS(e),o=this._viewportRect,a=Math.max(i.x+r.width-o.width,0),s=Math.max(i.y+r.height-o.height,0),l=Math.max(o.top-n.top-i.y,0),d=Math.max(o.left-n.left-i.x,0),u=0,f=0;return r.width<=o.width?u=d||-a:u=i.x<this._getViewportMarginStart()?o.left-n.left-i.x:0,r.height<=o.height?f=l||-s:f=i.y<this._getViewportMarginTop()?o.top-n.top-i.y:0,this._previousPushAmount={x:u,y:f},{x:i.x+u,y:i.y+f}}_applyPosition(i,e){if(this._setTransformOrigin(i),this._setOverlayElementStyles(e,i),this._setBoundingBoxStyles(e,i),i.panelClass&&this._addPanelClasses(i.panelClass),this._positionChanges.observers.length){let n=this._getScrollVisibility();if(i!==this._lastPosition||!this._lastScrollVisibility||!bV(this._lastScrollVisibility,n)){let r=new Jf(i,n);this._positionChanges.next(r)}this._lastScrollVisibility=n}this._lastPosition=i,this._isInitialRender=!1}_setTransformOrigin(i){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),n,r=i.overlayY;i.overlayX==="center"?n="center":this._isRtl()?n=i.overlayX==="start"?"right":"left":n=i.overlayX==="start"?"left":"right";for(let o=0;o<e.length;o++)e[o].style.transformOrigin=`${n} ${r}`}_calculateBoundingBoxRect(i,e){let n=this._viewportRect,r=this._isRtl(),o,a,s;if(e.overlayY==="top")a=i.y,o=n.height-a+this._getViewportMarginBottom();else if(e.overlayY==="bottom")s=n.height-i.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),o=n.height-s+this._getViewportMarginTop();else{let v=Math.min(n.bottom-i.y+n.top,i.y),w=this._lastBoundingBoxSize.height;o=v*2,a=i.y-v,o>w&&!this._isInitialRender&&!this._growAfterOpen&&(a=i.y-w/2)}let l=e.overlayX==="start"&&!r||e.overlayX==="end"&&r,d=e.overlayX==="end"&&!r||e.overlayX==="start"&&r,u,f,_;if(d)_=n.width-i.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),u=i.x-this._getViewportMarginStart();else if(l)f=i.x,u=n.right-i.x-this._getViewportMarginEnd();else{let v=Math.min(n.right-i.x+n.left,i.x),w=this._lastBoundingBoxSize.width;u=v*2,f=i.x-v,u>w&&!this._isInitialRender&&!this._growAfterOpen&&(f=i.x-w/2)}return{top:a,left:f,bottom:s,right:_,width:u,height:o}}_setBoundingBoxStyles(i,e){let n=this._calculateBoundingBoxRect(i,e);!this._isInitialRender&&!this._growAfterOpen&&(n.height=Math.min(n.height,this._lastBoundingBoxSize.height),n.width=Math.min(n.width,this._lastBoundingBoxSize.width));let r={};if(this._hasExactPosition())r.top=r.left="0",r.bottom=r.right="auto",r.maxHeight=r.maxWidth="",r.width=r.height="100%";else{let o=this._overlayRef.getConfig().maxHeight,a=this._overlayRef.getConfig().maxWidth;r.width=mt(n.width),r.height=mt(n.height),r.top=mt(n.top)||"auto",r.bottom=mt(n.bottom)||"auto",r.left=mt(n.left)||"auto",r.right=mt(n.right)||"auto",e.overlayX==="center"?r.alignItems="center":r.alignItems=e.overlayX==="end"?"flex-end":"flex-start",e.overlayY==="center"?r.justifyContent="center":r.justifyContent=e.overlayY==="bottom"?"flex-end":"flex-start",o&&(r.maxHeight=mt(o)),a&&(r.maxWidth=mt(a))}this._lastBoundingBoxSize=n,oa(this._boundingBox.style,r)}_resetBoundingBoxStyles(){oa(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){oa(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(i,e){let n={},r=this._hasExactPosition(),o=this._hasFlexibleDimensions,a=this._overlayRef.getConfig();if(r){let u=this._viewportRuler.getViewportScrollPosition();oa(n,this._getExactOverlayY(e,i,u)),oa(n,this._getExactOverlayX(e,i,u))}else n.position="static";let s="",l=this._getOffset(e,"x"),d=this._getOffset(e,"y");l&&(s+=`translateX(${l}px) `),d&&(s+=`translateY(${d}px)`),n.transform=s.trim(),a.maxHeight&&(r?n.maxHeight=mt(a.maxHeight):o&&(n.maxHeight="")),a.maxWidth&&(r?n.maxWidth=mt(a.maxWidth):o&&(n.maxWidth="")),oa(this._pane.style,n)}_getExactOverlayY(i,e,n){let r={top:"",bottom:""},o=this._getOverlayPoint(e,this._overlayRect,i);if(this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,n)),i.overlayY==="bottom"){let a=this._document.documentElement.clientHeight;r.bottom=`${a-(o.y+this._overlayRect.height)}px`}else r.top=mt(o.y);return r}_getExactOverlayX(i,e,n){let r={left:"",right:""},o=this._getOverlayPoint(e,this._overlayRect,i);this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,n));let a;if(this._isRtl()?a=i.overlayX==="end"?"left":"right":a=i.overlayX==="end"?"right":"left",a==="right"){let s=this._document.documentElement.clientWidth;r.right=`${s-(o.x+this._overlayRect.width)}px`}else r.left=mt(o.x);return r}_getScrollVisibility(){let i=this._getOriginRect(),e=this._pane.getBoundingClientRect(),n=this._scrollables.map(r=>r.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:_S(i,n),isOriginOutsideView:Sb(i,n),isOverlayClipped:_S(e,n),isOverlayOutsideView:Sb(e,n)}}_subtractOverflows(i,...e){return e.reduce((n,r)=>n-Math.max(r,0),i)}_getNarrowedViewportRect(){let i=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,n=this._viewportRuler.getViewportScrollPosition();return{top:n.top+this._getViewportMarginTop(),left:n.left+this._getViewportMarginStart(),right:n.left+i-this._getViewportMarginEnd(),bottom:n.top+e-this._getViewportMarginBottom(),width:i-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:e-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(i,e){return e==="x"?i.offsetX==null?this._offsetX:i.offsetX:i.offsetY==null?this._offsetY:i.offsetY}_validatePositions(){}_addPanelClasses(i){this._pane&&us(i).forEach(e=>{e!==""&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(i=>{this._pane.classList.remove(i)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let i=this._origin;if(i instanceof B)return i.nativeElement.getBoundingClientRect();if(i instanceof Element)return i.getBoundingClientRect();let e=i.width||0,n=i.height||0;return{top:i.y,bottom:i.y+n,left:i.x,right:i.x+e,height:n,width:e}}_getContainerRect(){let i=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",e=this._overlayContainer.getContainerElement();i&&(e.style.display="block");let n=e.getBoundingClientRect();return i&&(e.style.display=""),n}};function oa(t,i){for(let e in i)i.hasOwnProperty(e)&&(t[e]=i[e]);return t}function yS(t){if(typeof t!="number"&&t!=null){let[i,e]=t.split(vV);return!e||e==="px"?parseFloat(i):null}return t||null}function CS(t){return{top:Math.floor(t.top),right:Math.floor(t.right),bottom:Math.floor(t.bottom),left:Math.floor(t.left),width:Math.floor(t.width),height:Math.floor(t.height)}}function bV(t,i){return t===i?!0:t.isOriginClipped===i.isOriginClipped&&t.isOriginOutsideView===i.isOriginOutsideView&&t.isOverlayClipped===i.isOverlayClipped&&t.isOverlayOutsideView===i.isOverlayOutsideView}var wS="cdk-global-overlay-wrapper";function yr(t){return new eh}var eh=class{_overlayRef;_cssPosition="static";_topOffset="";_bottomOffset="";_alignItems="";_xPosition="";_xOffset="";_width="";_height="";_isDisposed=!1;attach(i){let e=i.getConfig();this._overlayRef=i,this._width&&!e.width&&i.updateSize({width:this._width}),this._height&&!e.height&&i.updateSize({height:this._height}),i.hostElement.classList.add(wS),this._isDisposed=!1}top(i=""){return this._bottomOffset="",this._topOffset=i,this._alignItems="flex-start",this}left(i=""){return this._xOffset=i,this._xPosition="left",this}bottom(i=""){return this._topOffset="",this._bottomOffset=i,this._alignItems="flex-end",this}right(i=""){return this._xOffset=i,this._xPosition="right",this}start(i=""){return this._xOffset=i,this._xPosition="start",this}end(i=""){return this._xOffset=i,this._xPosition="end",this}width(i=""){return this._overlayRef?this._overlayRef.updateSize({width:i}):this._width=i,this}height(i=""){return this._overlayRef?this._overlayRef.updateSize({height:i}):this._height=i,this}centerHorizontally(i=""){return this.left(i),this._xPosition="center",this}centerVertically(i=""){return this.top(i),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let i=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,n=this._overlayRef.getConfig(),{width:r,height:o,maxWidth:a,maxHeight:s}=n,l=(r==="100%"||r==="100vw")&&(!a||a==="100%"||a==="100vw"),d=(o==="100%"||o==="100vh")&&(!s||s==="100%"||s==="100vh"),u=this._xPosition,f=this._xOffset,_=this._overlayRef.getConfig().direction==="rtl",v="",w="",P="";l?P="flex-start":u==="center"?(P="center",_?w=f:v=f):_?u==="left"||u==="end"?(P="flex-end",v=f):(u==="right"||u==="start")&&(P="flex-start",w=f):u==="left"||u==="start"?(P="flex-start",v=f):(u==="right"||u==="end")&&(P="flex-end",w=f),i.position=this._cssPosition,i.marginLeft=l?"0":v,i.marginTop=d?"0":this._topOffset,i.marginBottom=this._bottomOffset,i.marginRight=l?"0":w,e.justifyContent=P,e.alignItems=d?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let i=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,n=e.style;e.classList.remove(wS),n.justifyContent=n.alignItems=i.marginTop=i.marginBottom=i.marginLeft=i.marginRight=i.position="",this._overlayRef=null,this._isDisposed=!0}},TS=(()=>{class t{_injector=c(G);constructor(){}global(){return yr()}flexibleConnectedTo(e){return As(this._injector,e)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Wc=new y("OVERLAY_DEFAULT_CONFIG");function Wi(t,i){t.get(qe).load(IS);let e=t.get(th),n=t.get(Y),r=t.get(Ye),o=t.get(xn),a=t.get(nt),s=t.get(Re,null,{optional:!0})||t.get(_t).createRenderer(null,null),l=new $i(i),d=t.get(Wc,null,{optional:!0})?.usePopover??!0;l.direction=l.direction||a.value,"showPopover"in n.body?l.usePopover=i?.usePopover??d:l.usePopover=!1;let u=n.createElement("div"),f=n.createElement("div");u.id=r.getId("cdk-overlay-"),u.classList.add("cdk-overlay-pane"),f.appendChild(u),l.usePopover&&(f.setAttribute("popover","manual"),f.classList.add("cdk-overlay-popover"));let _=l.usePopover?l.positionStrategy?.getPopoverInsertionPoint?.():null;return Tb(_)?_.after(f):_?.type==="parent"?_.element.appendChild(f):e.getContainerElement().appendChild(f),new Ts(new zf(u,o,t),f,u,l,t.get(V),t.get(MS),n,t.get(Ni),t.get(SS),i?.disableAnimations??t.get(Al,null,{optional:!0})==="NoopAnimations",t.get(Le),s)}var kS=(()=>{class t{scrollStrategies=c(xS);_positionBuilder=c(TS);_injector=c(G);constructor(){}create(e){return Wi(this._injector,e)}position(){return this._positionBuilder}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),yV=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],CV=new y("cdk-connected-overlay-scroll-strategy",{providedIn:"root",factory:()=>{let t=c(G);return()=>eo(t)}}),ks=(()=>{class t{elementRef=c(B);constructor(){}static \u0275fac=function(n){return new(n||t)};static \u0275dir=N({type:t,selectors:[["","cdk-overlay-origin",""],["","overlay-origin",""],["","cdkOverlayOrigin",""]],exportAs:["cdkOverlayOrigin"]})}return t})(),AS=new y("cdk-connected-overlay-default-config"),nh=(()=>{class t{_dir=c(nt,{optional:!0});_injector=c(G);_overlayRef;_templatePortal;_backdropSubscription=ae.EMPTY;_attachSubscription=ae.EMPTY;_detachSubscription=ae.EMPTY;_positionSubscription=ae.EMPTY;_offsetX;_offsetY;_position;_scrollStrategyFactory=c(CV);_ngZone=c(V);origin;positions;positionStrategy;get offsetX(){return this._offsetX}set offsetX(e){this._offsetX=e,this._position&&this._updatePositionStrategy(this._position)}get offsetY(){return this._offsetY}set offsetY(e){this._offsetY=e,this._position&&this._updatePositionStrategy(this._position)}width;height;minWidth;minHeight;backdropClass;panelClass;viewportMargin=0;scrollStrategy;open=!1;disableClose=!1;transformOriginSelector;hasBackdrop=!1;lockPosition=!1;flexibleDimensions=!1;growAfterOpen=!1;push=!1;disposeOnNavigation=!1;usePopover;matchWidth=!1;set _config(e){typeof e!="string"&&this._assignConfig(e)}backdropClick=new I;positionChange=new I;attach=new I;detach=new I;overlayKeydown=new I;overlayOutsideClick=new I;constructor(){let e=c(gt),n=c(St),r=c(AS,{optional:!0}),o=c(Wc,{optional:!0});this.usePopover=o?.usePopover===!1?null:"global",this._templatePortal=new Tn(e,n),this.scrollStrategy=this._scrollStrategyFactory(),r&&this._assignConfig(r)}get overlayRef(){return this._overlayRef}get dir(){return this._dir?this._dir.value:"ltr"}ngOnDestroy(){this._attachSubscription.unsubscribe(),this._detachSubscription.unsubscribe(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this._overlayRef?.dispose()}ngOnChanges(e){this._position&&(this._updatePositionStrategy(this._position),this._overlayRef?.updateSize({width:this._getWidth(),minWidth:this.minWidth,height:this.height,minHeight:this.minHeight}),e.origin&&this.open&&this._position.apply()),e.open&&(this.open?this.attachOverlay():this.detachOverlay())}_createOverlay(){(!this.positions||!this.positions.length)&&(this.positions=yV);let e=this._overlayRef=Wi(this._injector,this._buildConfig());this._attachSubscription=e.attachments().subscribe(()=>this.attach.emit()),this._detachSubscription=e.detachments().subscribe(()=>this.detach.emit()),e.keydownEvents().subscribe(n=>{this.overlayKeydown.next(n),n.keyCode===27&&!this.disableClose&&!Ct(n)&&(n.preventDefault(),this.detachOverlay())}),this._overlayRef.outsidePointerEvents().subscribe(n=>{let r=this._getOriginElement(),o=zt(n);(!r||r!==o&&!r.contains(o))&&this.overlayOutsideClick.next(n)})}_buildConfig(){let e=this._position=this.positionStrategy||this._createPositionStrategy(),n=new $i({direction:this._dir||"ltr",positionStrategy:e,scrollStrategy:this.scrollStrategy,hasBackdrop:this.hasBackdrop,disposeOnNavigation:this.disposeOnNavigation,usePopover:!!this.usePopover});return(this.height||this.height===0)&&(n.height=this.height),(this.minWidth||this.minWidth===0)&&(n.minWidth=this.minWidth),(this.minHeight||this.minHeight===0)&&(n.minHeight=this.minHeight),this.backdropClass&&(n.backdropClass=this.backdropClass),this.panelClass&&(n.panelClass=this.panelClass),n}_updatePositionStrategy(e){let n=this.positions.map(r=>({originX:r.originX,originY:r.originY,overlayX:r.overlayX,overlayY:r.overlayY,offsetX:r.offsetX||this.offsetX,offsetY:r.offsetY||this.offsetY,panelClass:r.panelClass||void 0}));return e.setOrigin(this._getOrigin()).withPositions(n).withFlexibleDimensions(this.flexibleDimensions).withPush(this.push).withGrowAfterOpen(this.growAfterOpen).withViewportMargin(this.viewportMargin).withLockedPosition(this.lockPosition).withTransformOriginOn(this.transformOriginSelector).withPopoverLocation(this.usePopover===null?"global":this.usePopover)}_createPositionStrategy(){let e=As(this._injector,this._getOrigin());return this._updatePositionStrategy(e),e}_getOrigin(){return this.origin instanceof ks?this.origin.elementRef:this.origin}_getOriginElement(){return this.origin instanceof ks?this.origin.elementRef.nativeElement:this.origin instanceof B?this.origin.nativeElement:typeof Element<"u"&&this.origin instanceof Element?this.origin:null}_getWidth(){return this.width?this.width:this.matchWidth?this._getOriginElement()?.getBoundingClientRect?.().width:void 0}attachOverlay(){this._overlayRef||this._createOverlay();let e=this._overlayRef;e.getConfig().hasBackdrop=this.hasBackdrop,e.updateSize({width:this._getWidth()}),e.hasAttached()||e.attach(this._templatePortal),this.hasBackdrop?this._backdropSubscription=e.backdropClick().subscribe(n=>this.backdropClick.emit(n)):this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.positionChange.observers.length>0&&(this._positionSubscription=this._position.positionChanges.pipe(Jh(()=>this.positionChange.observers.length>0)).subscribe(n=>{this._ngZone.run(()=>this.positionChange.emit(n)),this.positionChange.observers.length===0&&this._positionSubscription.unsubscribe()})),this.open=!0}detachOverlay(){this._overlayRef?.detach(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.open=!1}_assignConfig(e){this.origin=e.origin??this.origin,this.positions=e.positions??this.positions,this.positionStrategy=e.positionStrategy??this.positionStrategy,this.offsetX=e.offsetX??this.offsetX,this.offsetY=e.offsetY??this.offsetY,this.width=e.width??this.width,this.height=e.height??this.height,this.minWidth=e.minWidth??this.minWidth,this.minHeight=e.minHeight??this.minHeight,this.backdropClass=e.backdropClass??this.backdropClass,this.panelClass=e.panelClass??this.panelClass,this.viewportMargin=e.viewportMargin??this.viewportMargin,this.scrollStrategy=e.scrollStrategy??this.scrollStrategy,this.disableClose=e.disableClose??this.disableClose,this.transformOriginSelector=e.transformOriginSelector??this.transformOriginSelector,this.hasBackdrop=e.hasBackdrop??this.hasBackdrop,this.lockPosition=e.lockPosition??this.lockPosition,this.flexibleDimensions=e.flexibleDimensions??this.flexibleDimensions,this.growAfterOpen=e.growAfterOpen??this.growAfterOpen,this.push=e.push??this.push,this.disposeOnNavigation=e.disposeOnNavigation??this.disposeOnNavigation,this.usePopover=e.usePopover??this.usePopover,this.matchWidth=e.matchWidth??this.matchWidth}static \u0275fac=function(n){return new(n||t)};static \u0275dir=N({type:t,selectors:[["","cdk-connected-overlay",""],["","connected-overlay",""],["","cdkConnectedOverlay",""]],inputs:{origin:[0,"cdkConnectedOverlayOrigin","origin"],positions:[0,"cdkConnectedOverlayPositions","positions"],positionStrategy:[0,"cdkConnectedOverlayPositionStrategy","positionStrategy"],offsetX:[0,"cdkConnectedOverlayOffsetX","offsetX"],offsetY:[0,"cdkConnectedOverlayOffsetY","offsetY"],width:[0,"cdkConnectedOverlayWidth","width"],height:[0,"cdkConnectedOverlayHeight","height"],minWidth:[0,"cdkConnectedOverlayMinWidth","minWidth"],minHeight:[0,"cdkConnectedOverlayMinHeight","minHeight"],backdropClass:[0,"cdkConnectedOverlayBackdropClass","backdropClass"],panelClass:[0,"cdkConnectedOverlayPanelClass","panelClass"],viewportMargin:[0,"cdkConnectedOverlayViewportMargin","viewportMargin"],scrollStrategy:[0,"cdkConnectedOverlayScrollStrategy","scrollStrategy"],open:[0,"cdkConnectedOverlayOpen","open"],disableClose:[0,"cdkConnectedOverlayDisableClose","disableClose"],transformOriginSelector:[0,"cdkConnectedOverlayTransformOriginOn","transformOriginSelector"],hasBackdrop:[2,"cdkConnectedOverlayHasBackdrop","hasBackdrop",Z],lockPosition:[2,"cdkConnectedOverlayLockPosition","lockPosition",Z],flexibleDimensions:[2,"cdkConnectedOverlayFlexibleDimensions","flexibleDimensions",Z],growAfterOpen:[2,"cdkConnectedOverlayGrowAfterOpen","growAfterOpen",Z],push:[2,"cdkConnectedOverlayPush","push",Z],disposeOnNavigation:[2,"cdkConnectedOverlayDisposeOnNavigation","disposeOnNavigation",Z],usePopover:[0,"cdkConnectedOverlayUsePopover","usePopover"],matchWidth:[2,"cdkConnectedOverlayMatchWidth","matchWidth",Z],_config:[0,"cdkConnectedOverlay","_config"]},outputs:{backdropClick:"backdropClick",positionChange:"positionChange",attach:"attach",detach:"detach",overlayKeydown:"overlayKeydown",overlayOutsideClick:"overlayOutsideClick"},exportAs:["cdkConnectedOverlay"],features:[Be]})}return t})(),Wn=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=$({type:t});static \u0275inj=z({providers:[kS],imports:[ve,Hi,Cb,Cb]})}return t})();var RS=(()=>{class t{_animationsDisabled=je();state="unchecked";disabled=!1;appearance="full";constructor(){}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=M({type:t,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(n,r){n&2&&F("mat-pseudo-checkbox-indeterminate",r.state==="indeterminate")("mat-pseudo-checkbox-checked",r.state==="checked")("mat-pseudo-checkbox-disabled",r.disabled)("mat-pseudo-checkbox-minimal",r.appearance==="minimal")("mat-pseudo-checkbox-full",r.appearance==="full")("_mat-animation-noopable",r._animationsDisabled)},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},decls:0,vars:0,template:function(n,r){},styles:[`.mat-pseudo-checkbox {
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
`],encapsulation:2,changeDetection:0})}return t})();var wV=["text"],DV=[[["mat-icon"]],"*"],xV=["mat-icon","*"];function EV(t,i){if(t&1&&T(0,"mat-pseudo-checkbox",1),t&2){let e=D();A("disabled",e.disabled)("state",e.selected?"checked":"unchecked")}}function MV(t,i){if(t&1&&T(0,"mat-pseudo-checkbox",3),t&2){let e=D();A("disabled",e.disabled)}}function SV(t,i){if(t&1&&(m(0,"span",4),g(1),h()),t&2){let e=D();p(),_e("(",e.group.label,")")}}var Ab=new y("MAT_OPTION_PARENT_COMPONENT"),Rb=new y("MatOptgroup");var kb=class{source;isUserInput;constructor(i,e=!1){this.source=i,this.isUserInput=e}},Gn=(()=>{class t{_element=c(B);_changeDetectorRef=c(xe);_parent=c(Ab,{optional:!0});group=c(Rb,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue="";get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=c(Ye).getId("mat-option-");get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=x(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new I;_text;_stateChanges=new S;constructor(){let e=c(qe);e.load(mi),e.load(Bi),this._signalDisableRipple=!!this._parent&&Ai(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||"").trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,n){let r=this._getHostElement();typeof r.focus=="function"&&r.focus(n)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!Ct(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new kb(this,e))}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=M({type:t,selectors:[["mat-option"]],viewQuery:function(n,r){if(n&1&&Ce(wV,7),n&2){let o;R(o=O())&&(r._text=o.first)}},hostAttrs:["role","option",1,"mat-mdc-option","mdc-list-item"],hostVars:11,hostBindings:function(n,r){n&1&&E("click",function(){return r._selectViaInteraction()})("keydown",function(a){return r._handleKeydown(a)}),n&2&&(Yt("id",r.id),K("aria-selected",r.selected)("aria-disabled",r.disabled.toString()),F("mdc-list-item--selected",r.selected)("mat-mdc-option-multiple",r.multiple)("mat-mdc-option-active",r.active)("mdc-list-item--disabled",r.disabled))},inputs:{value:"value",id:"id",disabled:[2,"disabled","disabled",Z]},outputs:{onSelectionChange:"onSelectionChange"},exportAs:["matOption"],ngContentSelectors:xV,decls:8,vars:5,consts:[["text",""],["aria-hidden","true",1,"mat-mdc-option-pseudo-checkbox",3,"disabled","state"],[1,"mdc-list-item__primary-text"],["state","checked","aria-hidden","true","appearance","minimal",1,"mat-mdc-option-pseudo-checkbox",3,"disabled"],[1,"cdk-visually-hidden"],["aria-hidden","true","mat-ripple","",1,"mat-mdc-option-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"]],template:function(n,r){n&1&&(De(DV),j(0,EV,1,2,"mat-pseudo-checkbox",1),te(1),m(2,"span",2,0),te(4,1),h(),j(5,MV,1,1,"mat-pseudo-checkbox",3),j(6,SV,2,1,"span",4),T(7,"div",5)),n&2&&(H(r.multiple?0:-1),p(5),H(!r.multiple&&r.selected&&!r.hideSingleSelectionIndicator?5:-1),p(),H(r.group&&r.group._inert?6:-1),p(),A("matRippleTrigger",r._getHostElement())("matRippleDisabled",r.disabled||r.disableRipple))},dependencies:[RS,ia],styles:[`.mat-mdc-option {
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
`],encapsulation:2,changeDetection:0})}return t})();function OS(t,i,e){if(e.length){let n=i.toArray(),r=e.toArray(),o=0;for(let a=0;a<t+1;a++)n[a].group&&n[a].group===r[o]&&o++;return o}return 0}function NS(t,i,e,n){return t<e?t:t+i>e+n?Math.max(0,t-n+i):e}var ih=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=$({type:t});static \u0275inj=z({imports:[ve]})}return t})();var Rs=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=$({type:t});static \u0275inj=z({imports:[bs,ih,Gn,ve]})}return t})();var IV=["trigger"],TV=["panel"],kV=[[["mat-select-trigger"]],"*"],AV=["mat-select-trigger","*"];function RV(t,i){if(t&1&&(m(0,"span",4),g(1),h()),t&2){let e=D();p(),oe(e.placeholder)}}function OV(t,i){t&1&&te(0)}function NV(t,i){if(t&1&&(m(0,"span",11),g(1),h()),t&2){let e=D(2);p(),oe(e.triggerValue)}}function FV(t,i){if(t&1&&(m(0,"span",5),j(1,OV,1,0)(2,NV,2,1,"span",11),h()),t&2){let e=D();p(),H(e.customTrigger?1:2)}}function PV(t,i){if(t&1){let e=ke();m(0,"div",12,1),E("keydown",function(r){X(e);let o=D();return J(o._handleKeydown(r))}),te(2,1),h()}if(t&2){let e=D();It(e.panelClass),F("mat-select-panel-animations-enabled",!e._animationsDisabled)("mat-primary",(e._parentFormField==null?null:e._parentFormField.color)==="primary")("mat-accent",(e._parentFormField==null?null:e._parentFormField.color)==="accent")("mat-warn",(e._parentFormField==null?null:e._parentFormField.color)==="warn")("mat-undefined",!(e._parentFormField!=null&&e._parentFormField.color)),K("id",e.id+"-panel")("aria-multiselectable",e.multiple)("aria-label",e.ariaLabel||null)("aria-labelledby",e._getPanelAriaLabelledby())}}var LV=new y("mat-select-scroll-strategy",{providedIn:"root",factory:()=>{let t=c(G);return()=>eo(t)}}),VV=new y("MAT_SELECT_CONFIG"),BV=new y("MatSelectTrigger"),Ob=class{source;value;constructor(i,e){this.source=i,this.value=e}},to=(()=>{class t{_viewportRuler=c(pi);_changeDetectorRef=c(xe);_elementRef=c(B);_dir=c(nt,{optional:!0});_idGenerator=c(Ye);_renderer=c(Re);_parentFormField=c(Ic,{optional:!0});ngControl=c(hi,{self:!0,optional:!0});_liveAnnouncer=c(Dc);_defaultOptions=c(VV,{optional:!0});_animationsDisabled=je();_popoverLocation;_initialized=new S;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"}];_scrollOptionIntoView(e){let n=this.options.toArray()[e];if(n){let r=this.panel.nativeElement,o=OS(e,this.options,this.optionGroups),a=n._getHostElement();e===0&&o===1?r.scrollTop=0:r.scrollTop=NS(a.offsetTop,a.offsetHeight,r.scrollTop,r.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new Ob(this,e)}_scrollStrategyFactory=c(LV);_panelOpen=!1;_compareWith=(e,n)=>e===n;_uid=this._idGenerator.getId("mat-select-");_triggerAriaLabelledBy=null;_previousControl;_destroy=new S;_errorStateTracker;stateChanges=new S;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId("mat-select-value-");_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||"";get focused(){return this._focused||this._panelOpen}_focused=!1;controlType="mat-select";trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=x(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(fi.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}_value;ariaLabel="";ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<"u"?this._defaultOptions.panelWidth:"auto";canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=Zn(()=>{let e=this.options;return e?e.changes.pipe(Qe(e),pt(()=>Nt(...e.map(n=>n.onSelectionChange)))):this._initialized.pipe(pt(()=>this.optionSelectionChanges))});openedChange=new I;_openedStream=this.openedChange.pipe(be(e=>e),le(()=>{}));_closedStream=this.openedChange.pipe(be(e=>!e),le(()=>{}));selectionChange=new I;valueChange=new I;constructor(){let e=c(Uf),n=c(Lc,{optional:!0}),r=c(vr,{optional:!0}),o=c(new oi("tabindex"),{optional:!0}),a=c(Wc,{optional:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new Ms(e,this.ngControl,r,n,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=o==null?0:parseInt(o)||0,this._popoverLocation=a?.usePopover===!1?null:"inline",this.id=this.id}ngOnInit(){this._selectionModel=new Uc(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(ye(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(ye(this._destroy)).subscribe(e=>{e.added.forEach(n=>n.select()),e.removed.forEach(n=>n.deselect())}),this.options.changes.pipe(Qe(null),ye(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),n=this.ngControl;if(e!==this._triggerAriaLabelledBy){let r=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?r.setAttribute("aria-labelledby",e):r.removeAttribute("aria-labelledby")}n&&(this._previousControl!==n.control&&(this._previousControl!==void 0&&n.disabled!==null&&n.disabled!==this.disabled&&(this.disabled=n.disabled),this._previousControl=n.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete(),this._clearFromModal()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._applyModalPanelOwnership(),this._panelOpen=!0,this._overlayDir.positionChange.pipe(it(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}_trackedModal=null;_applyModalPanelOwnership(){let e=this._elementRef.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');if(!e)return;let n=`${this.id}-panel`;this._trackedModal&&pf(this._trackedModal,"aria-owns",n),eb(e,"aria-owns",n),this._trackedModal=e}_clearFromModal(){if(!this._trackedModal)return;let e=`${this.id}-panel`;pf(this._trackedModal,"aria-owns",e),this._trackedModal=null}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?"rtl":"ltr"),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{n(),clearTimeout(r),this._cleanupDetach=void 0};let e=this.panel.nativeElement,n=this._renderer.listen(e,"animationend",o=>{o.animationName==="_mat-select-exit"&&(this._cleanupDetach?.(),this._detachOverlay())}),r=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);e.classList.add("mat-select-panel-exit")}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return"";if(this._multiple){let e=this._selectionModel.selected.map(n=>n.viewValue);return this._isRtl()&&e.reverse(),e.join(", ")}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value==="rtl":!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let n=e.keyCode,r=n===40||n===38||n===37||n===39,o=n===13||n===32,a=this._keyManager;if(!a.isTyping()&&o&&!Ct(e)||(this.multiple||e.altKey)&&r)e.preventDefault(),this.open();else if(!this.multiple){let s=this.selected;a.onKeydown(e);let l=this.selected;l&&s!==l&&this._liveAnnouncer.announce(l.viewValue,1e4)}}_handleOpenKeydown(e){let n=this._keyManager,r=e.keyCode,o=r===40||r===38,a=n.isTyping();if(o&&e.altKey)e.preventDefault(),this.close();else if(!a&&(r===13||r===32)&&n.activeItem&&!Ct(e))e.preventDefault(),n.activeItem._selectViaInteraction();else if(!a&&this._multiple&&r===65&&e.ctrlKey){e.preventDefault();let s=this.options.some(l=>!l.disabled&&!l.selected);this.options.forEach(l=>{l.disabled||(s?l.select():l.deselect())})}else{let s=n.activeItemIndex;n.onKeydown(e),this._multiple&&o&&e.shiftKey&&n.activeItem&&n.activeItemIndex!==s&&n.activeItem._selectViaInteraction()}}_handleOverlayKeydown(e){e.keyCode===27&&!Ct(e)&&(e.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(n=>n.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)Array.isArray(e),e.forEach(n=>this._selectOptionByValue(n)),this._sortValues();else{let n=this._selectOptionByValue(e);n?this._keyManager.updateActiveItem(n):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let n=this.options.find(r=>{if(this._selectionModel.isSelected(r))return!1;try{return(r.value!=null||this.canSelectNullableOptions)&&this._compareWith(r.value,e)}catch{return!1}});return n&&this._selectionModel.select(n),n}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_skipPredicate=e=>this.panelOpen?!1:e.disabled;_getOverlayWidth(e){return this.panelWidth==="auto"?(e instanceof ks?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?"":this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new xc(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?"rtl":"ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=Nt(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(ye(e)).subscribe(n=>{this._onSelect(n.source,n.isUserInput),n.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),Nt(...this.options.map(n=>n._stateChanges)).pipe(ye(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,n){let r=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(r!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),n&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),n&&this.focus())),r!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((n,r)=>this.sortComparator?this.sortComparator(n,r,e):e.indexOf(n)-e.indexOf(r)),this.stateChanges.next()}}_propagateChanges(e){let n;this.multiple?n=this.selected.map(r=>r.value):n=this.selected?this.selected.value:e,this._value=n,this.valueChange.emit(n),this._onChange(n),this.selectionChange.emit(this._getChangeEvent(n)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let n=0;n<this.options.length;n++)if(!this.options.get(n).disabled){e=n;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,n=e?e+" ":"";return this.ariaLabelledby?n+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||"";return this.ariaLabelledby&&(e+=" "+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let n=this._elementRef.nativeElement;e.length?n.setAttribute("aria-describedby",e.join(" ")):n.removeAttribute("aria-describedby")}onContainerClick(e){let n=zt(e);n&&(n.tagName==="MAT-OPTION"||n.classList.contains("cdk-overlay-backdrop")||n.closest(".mat-mdc-select-panel"))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=M({type:t,selectors:[["mat-select"]],contentQueries:function(n,r,o){if(n&1&&vt(o,BV,5)(o,Gn,5)(o,Rb,5),n&2){let a;R(a=O())&&(r.customTrigger=a.first),R(a=O())&&(r.options=a),R(a=O())&&(r.optionGroups=a)}},viewQuery:function(n,r){if(n&1&&Ce(IV,5)(TV,5)(nh,5),n&2){let o;R(o=O())&&(r.trigger=o.first),R(o=O())&&(r.panel=o.first),R(o=O())&&(r._overlayDir=o.first)}},hostAttrs:["role","combobox","aria-haspopup","listbox",1,"mat-mdc-select"],hostVars:21,hostBindings:function(n,r){n&1&&E("keydown",function(a){return r._handleKeydown(a)})("focus",function(){return r._onFocus()})("blur",function(){return r._onBlur()}),n&2&&(K("id",r.id)("tabindex",r.disabled?-1:r.tabIndex)("aria-controls",r.panelOpen?r.id+"-panel":null)("aria-expanded",r.panelOpen)("aria-label",r.ariaLabel||null)("aria-required",r.required.toString())("aria-disabled",r.disabled.toString())("aria-invalid",r.errorState)("aria-activedescendant",r._getAriaActiveDescendant()),F("mat-mdc-select-disabled",r.disabled)("mat-mdc-select-invalid",r.errorState)("mat-mdc-select-required",r.required)("mat-mdc-select-empty",r.empty)("mat-mdc-select-multiple",r.multiple)("mat-select-open",r.panelOpen))},inputs:{userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],panelClass:"panelClass",disabled:[2,"disabled","disabled",Z],disableRipple:[2,"disableRipple","disableRipple",Z],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:si(e)],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",Z],placeholder:"placeholder",required:[2,"required","required",Z],multiple:[2,"multiple","multiple",Z],disableOptionCentering:[2,"disableOptionCentering","disableOptionCentering",Z],compareWith:"compareWith",value:"value",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],errorStateMatcher:"errorStateMatcher",typeaheadDebounceInterval:[2,"typeaheadDebounceInterval","typeaheadDebounceInterval",si],sortComparator:"sortComparator",id:"id",panelWidth:"panelWidth",canSelectNullableOptions:[2,"canSelectNullableOptions","canSelectNullableOptions",Z]},outputs:{openedChange:"openedChange",_openedStream:"opened",_closedStream:"closed",selectionChange:"selectionChange",valueChange:"valueChange"},exportAs:["matSelect"],features:[Ue([{provide:Sc,useExisting:t},{provide:Ab,useExisting:t}]),Be],ngContentSelectors:AV,decls:11,vars:10,consts:[["fallbackOverlayOrigin","cdkOverlayOrigin","trigger",""],["panel",""],["cdk-overlay-origin","",1,"mat-mdc-select-trigger",3,"click"],[1,"mat-mdc-select-value"],[1,"mat-mdc-select-placeholder","mat-mdc-select-min-line"],[1,"mat-mdc-select-value-text"],[1,"mat-mdc-select-arrow-wrapper"],[1,"mat-mdc-select-arrow"],["viewBox","0 0 24 24","width","24px","height","24px","focusable","false","aria-hidden","true"],["d","M7 10l5 5 5-5z"],["cdk-connected-overlay","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"detach","backdropClick","overlayKeydown","cdkConnectedOverlayDisableClose","cdkConnectedOverlayPanelClass","cdkConnectedOverlayScrollStrategy","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayWidth","cdkConnectedOverlayFlexibleDimensions","cdkConnectedOverlayUsePopover"],[1,"mat-mdc-select-min-line"],["role","listbox","tabindex","-1",1,"mat-mdc-select-panel","mdc-menu-surface","mdc-menu-surface--open",3,"keydown"]],template:function(n,r){if(n&1&&(De(kV),m(0,"div",2,0),E("click",function(){return r.open()}),m(3,"div",3),j(4,RV,2,1,"span",4)(5,FV,3,1,"span",5),h(),m(6,"div",6)(7,"div",7),Si(),m(8,"svg",8),T(9,"path",9),h()()()(),dt(10,PV,3,16,"ng-template",10),E("detach",function(){return r.close()})("backdropClick",function(){return r.close()})("overlayKeydown",function(a){return r._handleOverlayKeydown(a)})),n&2){let o=ln(1);p(3),K("id",r._valueId),p(),H(r.empty?4:5),p(6),A("cdkConnectedOverlayDisableClose",!0)("cdkConnectedOverlayPanelClass",r._overlayPanelClass)("cdkConnectedOverlayScrollStrategy",r._scrollStrategy)("cdkConnectedOverlayOrigin",r._preferredOverlayOrigin||o)("cdkConnectedOverlayPositions",r._positions)("cdkConnectedOverlayWidth",r._overlayWidth)("cdkConnectedOverlayFlexibleDimensions",!0)("cdkConnectedOverlayUsePopover",r._popoverLocation)}},dependencies:[ks,nh],styles:[`@keyframes _mat-select-enter {
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
`],encapsulation:2,changeDetection:0})}return t})();var no=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=$({type:t});static \u0275inj=z({imports:[Wn,Rs,ve,$n,At,Rs]})}return t})();function jV(t,i){}var io=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;positionStrategy;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;scrollStrategy;closeOnNavigation=!0;closeOnDestroy=!0;closeOnOverlayDetachments=!0;disableAnimations=!1;providers;container;templateContext};var Fb=(()=>{class t extends Kr{_elementRef=c(B);_focusTrapFactory=c(sf);_config;_interactivityChecker=c(Qv);_ngZone=c(V);_focusMonitor=c(Vi);_renderer=c(Re);_changeDetectorRef=c(xe);_injector=c(G);_platform=c(ue);_document=c(Y);_portalOutlet;_focusTrapped=new S;_focusTrap=null;_elementFocusedBeforeDialogWasOpened=null;_closeInteractionType=null;_ariaLabelledByQueue=[];_isDestroyed=!1;constructor(){super(),this._config=c(io,{optional:!0})||new io,this._config.ariaLabelledBy&&this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)}_addAriaLabelledBy(e){this._ariaLabelledByQueue.push(e),this._changeDetectorRef.markForCheck()}_removeAriaLabelledBy(e){let n=this._ariaLabelledByQueue.indexOf(e);n>-1&&(this._ariaLabelledByQueue.splice(n,1),this._changeDetectorRef.markForCheck())}_contentAttached(){this._initializeFocusTrap(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._focusTrapped.complete(),this._isDestroyed=!0,this._restoreFocus()}attachComponentPortal(e){this._portalOutlet.hasAttached();let n=this._portalOutlet.attachComponentPortal(e);return this._contentAttached(),n}attachTemplatePortal(e){this._portalOutlet.hasAttached();let n=this._portalOutlet.attachTemplatePortal(e);return this._contentAttached(),n}attachDomPortal=e=>{this._portalOutlet.hasAttached();let n=this._portalOutlet.attachDomPortal(e);return this._contentAttached(),n};_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(e,n){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let r=()=>{o(),a(),e.removeAttribute("tabindex")},o=this._renderer.listen(e,"blur",r),a=this._renderer.listen(e,"mousedown",r)})),e.focus(n)}_focusByCssSelector(e,n){let r=this._elementRef.nativeElement.querySelector(e);r&&this._forceFocus(r,n)}_trapFocus(e){this._isDestroyed||Ge(()=>{let n=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case"dialog":this._containsFocus()||n.focus(e);break;case!0:case"first-tabbable":this._focusTrap?.focusInitialElement(e)||this._focusDialogContainer(e);break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]',e);break;default:this._focusByCssSelector(this._config.autoFocus,e);break}this._focusTrapped.next()},{injector:this._injector})}_restoreFocus(){let e=this._config.restoreFocus,n=null;if(typeof e=="string"?n=this._document.querySelector(e):typeof e=="boolean"?n=e?this._elementFocusedBeforeDialogWasOpened:null:e&&(n=e),this._config.restoreFocus&&n&&typeof n.focus=="function"){let r=Li(),o=this._elementRef.nativeElement;(!r||r===this._document.body||r===o||o.contains(r))&&(this._focusMonitor?(this._focusMonitor.focusVia(n,this._closeInteractionType),this._closeInteractionType=null):n.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(e){this._elementRef.nativeElement.focus?.(e)}_containsFocus(){let e=this._elementRef.nativeElement,n=Li();return e===n||e.contains(n)}_initializeFocusTrap(){this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=Li()))}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=M({type:t,selectors:[["cdk-dialog-container"]],viewQuery:function(n,r){if(n&1&&Ce(fn,7),n&2){let o;R(o=O())&&(r._portalOutlet=o.first)}},hostAttrs:["tabindex","-1",1,"cdk-dialog-container"],hostVars:6,hostBindings:function(n,r){n&2&&K("id",r._config.id||null)("role",r._config.role)("aria-modal",r._config.ariaModal)("aria-labelledby",r._config.ariaLabel?null:r._ariaLabelledByQueue[0])("aria-label",r._config.ariaLabel)("aria-describedby",r._config.ariaDescribedBy||null)},features:[ge],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(n,r){n&1&&dt(0,jV,0,0,"ng-template",0)},dependencies:[fn],styles:[`.cdk-dialog-container {
  display: block;
  width: 100%;
  height: 100%;
  min-height: inherit;
  max-height: inherit;
}
`],encapsulation:2})}return t})(),Gc=class{overlayRef;config;componentInstance=null;componentRef=null;containerInstance;disableClose;closed=new S;backdropClick;keydownEvents;outsidePointerEvents;id;_detachSubscription;constructor(i,e){this.overlayRef=i,this.config=e,this.disableClose=e.disableClose,this.backdropClick=i.backdropClick(),this.keydownEvents=i.keydownEvents(),this.outsidePointerEvents=i.outsidePointerEvents(),this.id=e.id,this.keydownEvents.subscribe(n=>{n.keyCode===27&&!this.disableClose&&!Ct(n)&&(n.preventDefault(),this.close(void 0,{focusOrigin:"keyboard"}))}),this.backdropClick.subscribe(()=>{!this.disableClose&&this._canClose()?this.close(void 0,{focusOrigin:"mouse"}):this.containerInstance._recaptureFocus?.()}),this._detachSubscription=i.detachments().subscribe(()=>{e.closeOnOverlayDetachments!==!1&&this.close()})}close(i,e){if(this._canClose(i)){let n=this.closed;this.containerInstance._closeInteractionType=e?.focusOrigin||"program",this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),n.next(i),n.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(i="",e=""){return this.overlayRef.updateSize({width:i,height:e}),this}addPanelClass(i){return this.overlayRef.addPanelClass(i),this}removePanelClass(i){return this.overlayRef.removePanelClass(i),this}_canClose(i){let e=this.config;return!!this.containerInstance&&(!e.closePredicate||e.closePredicate(i,e,this.componentInstance))}},HV=new y("DialogScrollStrategy",{providedIn:"root",factory:()=>{let t=c(G);return()=>aa(t)}}),UV=new y("DialogData"),zV=new y("DefaultDialogConfig");function $V(t){let i=x(t),e=new I;return{valueSignal:i,get value(){return i()},change:e,ngOnDestroy(){e.complete()}}}var Pb=(()=>{class t{_injector=c(G);_defaultOptions=c(zV,{optional:!0});_parentDialog=c(t,{optional:!0,skipSelf:!0});_overlayContainer=c(th);_idGenerator=c(Ye);_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new S;_afterOpenedAtThisLevel=new S;_ariaHiddenElements=new Map;_scrollStrategy=c(HV);get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}afterAllClosed=Zn(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(Qe(void 0)));constructor(){}open(e,n){let r=this._defaultOptions||new io;n=C(C({},r),n),n.id=n.id||this._idGenerator.getId("cdk-dialog-"),n.id&&this.getDialogById(n.id);let o=this._getOverlayConfig(n),a=Wi(this._injector,o),s=new Gc(a,n),l=this._attachContainer(a,s,n);if(s.containerInstance=l,!this.openDialogs.length){let d=this._overlayContainer.getContainerElement();l._focusTrapped?l._focusTrapped.pipe(it(1)).subscribe(()=>{this._hideNonDialogContentFromAssistiveTechnology(d)}):this._hideNonDialogContentFromAssistiveTechnology(d)}return this._attachDialogContent(e,s,l,n),this.openDialogs.push(s),s.closed.subscribe(()=>this._removeOpenDialog(s,!0)),this.afterOpened.next(s),s}closeAll(){Nb(this.openDialogs,e=>e.close())}getDialogById(e){return this.openDialogs.find(n=>n.id===e)}ngOnDestroy(){Nb(this._openDialogsAtThisLevel,e=>{e.config.closeOnDestroy===!1&&this._removeOpenDialog(e,!1)}),Nb(this._openDialogsAtThisLevel,e=>e.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(e){let n=new $i({positionStrategy:e.positionStrategy||yr().centerHorizontally().centerVertically(),scrollStrategy:e.scrollStrategy||this._scrollStrategy(),panelClass:e.panelClass,hasBackdrop:e.hasBackdrop,direction:e.direction,minWidth:e.minWidth,minHeight:e.minHeight,maxWidth:e.maxWidth,maxHeight:e.maxHeight,width:e.width,height:e.height,disposeOnNavigation:e.closeOnNavigation,disableAnimations:e.disableAnimations});return e.backdropClass&&(n.backdropClass=e.backdropClass),n}_attachContainer(e,n,r){let o=r.injector||r.viewContainerRef?.injector,a=[{provide:io,useValue:r},{provide:Gc,useValue:n},{provide:Ts,useValue:e}],s;r.container?typeof r.container=="function"?s=r.container:(s=r.container.type,a.push(...r.container.providers(r))):s=Fb;let l=new In(s,r.viewContainerRef,G.create({parent:o||this._injector,providers:a}));return e.attach(l).instance}_attachDialogContent(e,n,r,o){if(e instanceof gt){let a=this._createInjector(o,n,r,void 0),s={$implicit:o.data,dialogRef:n};o.templateContext&&(s=C(C({},s),typeof o.templateContext=="function"?o.templateContext():o.templateContext)),r.attachTemplatePortal(new Tn(e,null,s,a))}else{let a=this._createInjector(o,n,r,this._injector),s=r.attachComponentPortal(new In(e,o.viewContainerRef,a));n.componentRef=s,n.componentInstance=s.instance}}_createInjector(e,n,r,o){let a=e.injector||e.viewContainerRef?.injector,s=[{provide:UV,useValue:e.data},{provide:Gc,useValue:n}];return e.providers&&(typeof e.providers=="function"?s.push(...e.providers(n,e,r)):s.push(...e.providers)),e.direction&&(!a||!a.get(nt,null,{optional:!0}))&&s.push({provide:nt,useValue:$V(e.direction)}),G.create({parent:a||o,providers:s})}_removeOpenDialog(e,n){let r=this.openDialogs.indexOf(e);r>-1&&(this.openDialogs.splice(r,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((o,a)=>{o?a.setAttribute("aria-hidden",o):a.removeAttribute("aria-hidden")}),this._ariaHiddenElements.clear(),n&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(e){if(e.parentElement){let n=e.parentElement.children;for(let r=n.length-1;r>-1;r--){let o=n[r];o!==e&&o.nodeName!=="SCRIPT"&&o.nodeName!=="STYLE"&&!o.hasAttribute("aria-live")&&!o.hasAttribute("popover")&&(this._ariaHiddenElements.set(o,o.getAttribute("aria-hidden")),o.setAttribute("aria-hidden","true"))}}}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Nb(t,i){let e=t.length;for(;e--;)i(t[e])}var FS=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=$({type:t});static \u0275inj=z({providers:[Pb],imports:[Wn,Hi,Ko,Hi]})}return t})();function WV(t,i){}var ah=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;position;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;delayFocusTrap=!0;scrollStrategy;closeOnNavigation=!0;enterAnimationDuration;exitAnimationDuration},Lb="mdc-dialog--open",PS="mdc-dialog--opening",LS="mdc-dialog--closing",GV=150,qV=75,YV=(()=>{class t extends Fb{_animationStateChanged=new I;_animationsEnabled=!je();_actionSectionCount=0;_hostElement=this._elementRef.nativeElement;_enterAnimationDuration=this._animationsEnabled?BS(this._config.enterAnimationDuration)??GV:0;_exitAnimationDuration=this._animationsEnabled?BS(this._config.exitAnimationDuration)??qV:0;_animationTimer=null;_contentAttached(){super._contentAttached(),this._startOpenAnimation()}_startOpenAnimation(){this._animationStateChanged.emit({state:"opening",totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(VS,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(PS,Lb)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(Lb),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:"closing",totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(Lb),this._animationsEnabled?(this._hostElement.style.setProperty(VS,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(LS)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_updateActionSectionCount(e){this._actionSectionCount+=e,this._changeDetectorRef.markForCheck()}_finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration)};_finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:"closed",totalTime:this._exitAnimationDuration})};_clearAnimationClasses(){this._hostElement.classList.remove(PS,LS)}_waitForAnimationToComplete(e,n){this._animationTimer!==null&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(n,e)}_requestAnimationFrame(e){this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame=="function"?requestAnimationFrame(e):e()})}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(e){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:"opened",totalTime:e})}ngOnDestroy(){super.ngOnDestroy(),this._animationTimer!==null&&clearTimeout(this._animationTimer)}attachComponentPortal(e){let n=super.attachComponentPortal(e);return n.location.nativeElement.classList.add("mat-mdc-dialog-component-host"),n}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ze(t)))(r||t)}})();static \u0275cmp=M({type:t,selectors:[["mat-dialog-container"]],hostAttrs:["tabindex","-1",1,"mat-mdc-dialog-container","mdc-dialog"],hostVars:10,hostBindings:function(n,r){n&2&&(Yt("id",r._config.id),K("aria-modal",r._config.ariaModal)("role",r._config.role)("aria-labelledby",r._config.ariaLabel?null:r._ariaLabelledByQueue[0])("aria-label",r._config.ariaLabel)("aria-describedby",r._config.ariaDescribedBy||null),F("_mat-animation-noopable",!r._animationsEnabled)("mat-mdc-dialog-container-with-actions",r._actionSectionCount>0))},features:[ge],decls:3,vars:0,consts:[[1,"mat-mdc-dialog-inner-container","mdc-dialog__container"],[1,"mat-mdc-dialog-surface","mdc-dialog__surface"],["cdkPortalOutlet",""]],template:function(n,r){n&1&&(m(0,"div",0)(1,"div",1),dt(2,WV,0,0,"ng-template",2),h()())},dependencies:[fn],styles:[`.mat-mdc-dialog-container {
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
`],encapsulation:2})}return t})(),VS="--mat-dialog-transition-duration";function BS(t){return t==null?null:typeof t=="number"?t:t.endsWith("ms")?Sn(t.substring(0,t.length-2)):t.endsWith("s")?Sn(t.substring(0,t.length-1))*1e3:t==="0"?0:null}var oh=(function(t){return t[t.OPEN=0]="OPEN",t[t.CLOSING=1]="CLOSING",t[t.CLOSED=2]="CLOSED",t})(oh||{}),sa=class{_ref;_config;_containerInstance;componentInstance;componentRef=null;disableClose;id;_afterOpened=new _n(1);_beforeClosed=new _n(1);_result;_closeFallbackTimeout;_state=oh.OPEN;_closeInteractionType;constructor(i,e,n){this._ref=i,this._config=e,this._containerInstance=n,this.disableClose=e.disableClose,this.id=i.id,i.addPanelClass("mat-mdc-dialog-panel"),n._animationStateChanged.pipe(be(r=>r.state==="opened"),it(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),n._animationStateChanged.pipe(be(r=>r.state==="closed"),it(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),i.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),Nt(this.backdropClick(),this.keydownEvents().pipe(be(r=>r.keyCode===27&&!this.disableClose&&!Ct(r)))).subscribe(r=>{this.disableClose||(r.preventDefault(),QV(this,r.type==="keydown"?"keyboard":"mouse"))})}close(i){let e=this._config.closePredicate;e&&!e(i,this._config,this.componentInstance)||(this._result=i,this._containerInstance._animationStateChanged.pipe(be(n=>n.state==="closing"),it(1)).subscribe(n=>{this._beforeClosed.next(i),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),n.totalTime+100)}),this._state=oh.CLOSING,this._containerInstance._startExitAnimation())}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(i){let e=this._ref.config.positionStrategy;return i&&(i.left||i.right)?i.left?e.left(i.left):e.right(i.right):e.centerHorizontally(),i&&(i.top||i.bottom)?i.top?e.top(i.top):e.bottom(i.bottom):e.centerVertically(),this._ref.updatePosition(),this}updateSize(i="",e=""){return this._ref.updateSize(i,e),this}addPanelClass(i){return this._ref.addPanelClass(i),this}removePanelClass(i){return this._ref.removePanelClass(i),this}getState(){return this._state}_finishDialogClose(){this._state=oh.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}};function QV(t,i,e){return t._closeInteractionType=i,t.close(e)}var ZV=new y("MatMdcDialogData"),KV=new y("mat-mdc-dialog-default-options"),XV=new y("mat-mdc-dialog-scroll-strategy",{providedIn:"root",factory:()=>{let t=c(G);return()=>aa(t)}}),qc=(()=>{class t{_defaultOptions=c(KV,{optional:!0});_scrollStrategy=c(XV);_parentDialog=c(t,{optional:!0,skipSelf:!0});_idGenerator=c(Ye);_injector=c(G);_dialog=c(Pb);_animationsDisabled=je();_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new S;_afterOpenedAtThisLevel=new S;dialogConfigClass=ah;_dialogRefConstructor;_dialogContainerType;_dialogDataToken;get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}afterAllClosed=Zn(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(Qe(void 0)));constructor(){this._dialogRefConstructor=sa,this._dialogContainerType=YV,this._dialogDataToken=ZV}open(e,n){let r;n=C(C({},this._defaultOptions||new ah),n),n.id=n.id||this._idGenerator.getId("mat-mdc-dialog-"),n.scrollStrategy=n.scrollStrategy||this._scrollStrategy();let o=this._dialog.open(e,ne(C({},n),{positionStrategy:yr(this._injector).centerHorizontally().centerVertically(),disableClose:!0,closePredicate:void 0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,disableAnimations:this._animationsDisabled||n.enterAnimationDuration?.toLocaleString()==="0"||n.exitAnimationDuration?.toString()==="0",container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:n},{provide:io,useValue:n}]},templateContext:()=>({dialogRef:r}),providers:(a,s,l)=>(r=new this._dialogRefConstructor(a,n,l),r.updatePosition(n?.position),[{provide:this._dialogContainerType,useValue:l},{provide:this._dialogDataToken,useValue:s.data},{provide:this._dialogRefConstructor,useValue:r}])}));return r.componentRef=o.componentRef,r.componentInstance=o.componentInstance,this.openDialogs.push(r),this.afterOpened.next(r),r.afterClosed().subscribe(()=>{let a=this.openDialogs.indexOf(r);a>-1&&(this.openDialogs.splice(a,1),this.openDialogs.length||this._getAfterAllClosed().next())}),r}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(e){return this.openDialogs.find(n=>n.id===e)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(e){let n=e.length;for(;n--;)e[n].close()}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var sh=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=$({type:t});static \u0275inj=z({providers:[qc],imports:[FS,Wn,Hi,ve]})}return t})();var lh=class t{dialogRef=c(sa);onConfirm(){this.dialogRef.close(!0)}onDeny(){this.dialogRef.close(!1)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=M({type:t,selectors:[["confirmation-dialog"]],decls:8,vars:0,consts:[[1,"flex-with-style"],[1,"top-text"],[1,"button-group"],[1,"button",3,"click"]],template:function(e,n){e&1&&(Te(0,"div",0)(1,"p",1),g(2," \xC4r du s\xE4ker att du vill avregistrera n\xE4rvaro? "),Oe(),Te(3,"li",2)(4,"button",3),Fn("click",function(){return n.onConfirm()}),g(5," Ja "),Oe(),Te(6,"button",3),Fn("click",function(){return n.onDeny()}),g(7," Nej "),Oe()()())},dependencies:[sh,ft],styles:["[_nghost-%COMP%]{display:block;text-align:center;padding:8px}.top-text[_ngcontent-%COMP%]{font:var(--mat-sys-title-medium)}.button-group[_ngcontent-%COMP%]{display:flex;justify-content:center;gap:32px}.button[_ngcontent-%COMP%]{padding:8px 32px;font:var(--mat-sys-label-small);font-weight:700;cursor:pointer;border-radius:4px;transition:all .2s ease-in-out;background-color:var(--mat-sys-primary);color:var(--mat-sys-on-primary);border:1px solid}button[_ngcontent-%COMP%]:hover{background-color:var(--mat-sys-primary-fixed-dim)}"]})};var jS=(t,i)=>i.value,JV=(t,i)=>e=>e.value!="CHECKED_OUT";function e2(t,i){if(t&1&&(m(0,"span"),g(1),h()),t&2){let e=D();p(),oe(e.statusLabels[e.currentStatus])}}function t2(t,i){if(t&1&&(m(0,"mat-option",3),g(1),h()),t&2){let e=i.$implicit;A("value",e.value),p(),oe(e.label)}}function n2(t,i){if(t&1&&Me(0,t2,2,2,"mat-option",3,jS),t&2){let e=D(2);Se(e.statusOptions)}}function i2(t,i){if(t&1&&(m(0,"mat-option",3),g(1),h()),t&2){let e=i.$implicit;A("value",e.value),p(),oe(e.label)}}function r2(t,i){if(t&1&&Me(0,i2,2,2,"mat-option",3,jS),t&2){let e=D(2);Se(e.statusOptions.filter(R_(0,JV,i)))}}function o2(t,i){if(t&1){let e=ke();m(0,"mat-form-field",0)(1,"mat-select",2),E("selectionChange",function(r){X(e);let o=D();return J(o.onStatusChange(r.value))}),j(2,n2,2,0)(3,r2,2,1),h()()}if(t&2){let e=D();p(),A("value",e.currentStatus),p(),H(e.currentStatus==="CHECKED_IN"?2:3)}}function a2(t,i){if(t&1&&(m(0,"p",1),g(1),h()),t&2){let e=D();p(),oe(e.errorMessage)}}var Os=class t{childSignal=Ne.required();disabled=cr();errorMessage="";showConfirmation=!1;dialog=c(qc);statusOptions=[{value:"NOT_SET",label:"\u2014"},{value:"CHECKED_IN",label:"Incheckad"},{value:"CHECKED_OUT",label:"Utcheckad"},{value:"LEAVE",label:"Ledig"},{value:"ABSENT",label:"Fr\xE5nvarande"}];statusLabels=Object.fromEntries(this.statusOptions.map(i=>[i.value,i.label]));attendanceService=c(Jr);get currentStatus(){return this.attendanceService.getSignal(this.childSignal().id,zi())()??"NOT_SET"}constructor(){Ft(()=>{let i=this.childSignal();if(!i)return;let e=this.attendanceService.getSignal(i.id,zi());e()===null&&e.set(i.status??"NOT_SET")})}onStatusChange(i){let e=this.attendanceService.getSignal(this.childSignal().id,zi()),n=e();e.set(i),n==="CHECKED_IN"&&i==="CHECKED_OUT"&&this.dialog.open(lh).afterClosed().subscribe(o=>{if(!o){e.set(n);return}}),this.attendanceService.setAttendance(this.childSignal().id,zi(),i).subscribe({next:r=>e.set(r.status),error:r=>{console.error("Kunde inte spara",r),e.set(n),this.errorMessage="Misslyckades att spara till databasen.",setTimeout(()=>this.errorMessage="",2e3)}}),this.wsUpdateAttendance(i)}attendanceChangeEvent=new I;wsUpdateAttendance(i){let e={childId:this.childSignal().id,status:i};this.attendanceChangeEvent.emit(e)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=M({type:t,selectors:[["attendance-box"]],inputs:{childSignal:[1,"childSignal"],disabled:[1,"disabled"]},outputs:{childSignal:"childSignalChange",attendanceChangeEvent:"attendanceChangeEvent"},decls:4,vars:2,consts:[["appearance","outline","subscriptSizing","dynamic"],[1,"error-text"],[3,"selectionChange","value"],[3,"value"]],template:function(e,n){e&1&&(m(0,"div"),j(1,e2,2,1,"span")(2,o2,4,2,"mat-form-field",0),j(3,a2,2,1,"p",1),h()),e&2&&(p(),H(n.disabled()?1:2),p(2),H(n.errorMessage?3:-1))},dependencies:[no,kt,to,Gn,At],styles:[".error-text[_ngcontent-%COMP%]{color:red;font-size:16px;position:absolute}mat-form-field[_ngcontent-%COMP%]{--mat-form-field-container-height: 32px;--mat-form-field-container-vertical-padding: 6px;background-color:var(--mat-sys-surface-variant)}"]})};var ch=class t{childSignal=Ne.required();dateSignal=Ne.required();attendanceChangeEvent=new I;wsUpdateAttendance(i){this.attendanceChangeEvent.emit(i)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=M({type:t,selectors:[["child-display"]],inputs:{childSignal:[1,"childSignal"],dateSignal:[1,"dateSignal"]},outputs:{childSignal:"childSignalChange",dateSignal:"dateSignalChange",attendanceChangeEvent:"attendanceChangeEvent"},decls:6,vars:2,consts:[[1,"rowise"],[1,"attendance-box",3,"attendanceChangeEvent","childSignal"]],template:function(e,n){e&1&&(m(0,"p"),g(1),h(),m(2,"div",0)(3,"p"),g(4,"N\xE4rvaro:"),h(),m(5,"attendance-box",1),E("attendanceChangeEvent",function(o){return n.wsUpdateAttendance(o)}),h()()),e&2&&(p(),oe(n.dateSignal()),p(4),A("childSignal",n.childSignal()))},dependencies:[Os],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;width:fit-content;height:100%;max-width:fit-content}.rowise[_ngcontent-%COMP%]{display:flex;flex:1;gap:1em;margin:1em;align-items:baseline}p[_ngcontent-%COMP%]{font:var(--mat-sys-body-large);margin-bottom:0;margin-left:1em}"]})};var HS=["*"],s2=`.mdc-list {
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
`,l2=["unscopedContent"],c2=["text"],d2=[[["","matListItemAvatar",""],["","matListItemIcon",""]],[["","matListItemTitle",""]],[["","matListItemLine",""]],"*",[["","matListItemMeta",""]],[["mat-divider"]]],u2=["[matListItemAvatar],[matListItemIcon]","[matListItemTitle]","[matListItemLine]","*","[matListItemMeta]","mat-divider"];var m2=new y("ListOption"),Cr=(()=>{class t{_elementRef=c(B);constructor(){}static \u0275fac=function(n){return new(n||t)};static \u0275dir=N({type:t,selectors:[["","matListItemTitle",""]],hostAttrs:[1,"mat-mdc-list-item-title","mdc-list-item__primary-text"]})}return t})(),f2=(()=>{class t{_elementRef=c(B);constructor(){}static \u0275fac=function(n){return new(n||t)};static \u0275dir=N({type:t,selectors:[["","matListItemLine",""]],hostAttrs:[1,"mat-mdc-list-item-line","mdc-list-item__secondary-text"]})}return t})(),la=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=N({type:t,selectors:[["","matListItemMeta",""]],hostAttrs:[1,"mat-mdc-list-item-meta","mdc-list-item__end"]})}return t})(),US=(()=>{class t{_listOption=c(m2,{optional:!0});constructor(){}_isAlignedAtStart(){return!this._listOption||this._listOption?._getTogglePosition()==="after"}static \u0275fac=function(n){return new(n||t)};static \u0275dir=N({type:t,hostVars:4,hostBindings:function(n,r){n&2&&F("mdc-list-item__start",r._isAlignedAtStart())("mdc-list-item__end",!r._isAlignedAtStart())}})}return t})(),h2=(()=>{class t extends US{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ze(t)))(r||t)}})();static \u0275dir=N({type:t,selectors:[["","matListItemAvatar",""]],hostAttrs:[1,"mat-mdc-list-item-avatar"],features:[ge]})}return t})(),p2=(()=>{class t extends US{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ze(t)))(r||t)}})();static \u0275dir=N({type:t,selectors:[["","matListItemIcon",""]],hostAttrs:[1,"mat-mdc-list-item-icon"],features:[ge]})}return t})(),g2=new y("MAT_LIST_CONFIG"),Yc=(()=>{class t{_isNonInteractive=!0;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=Lt(e)}_disableRipple=!1;get disabled(){return this._disabled()}set disabled(e){this._disabled.set(Lt(e))}_disabled=x(!1);_defaultOptions=c(g2,{optional:!0});static \u0275fac=function(n){return new(n||t)};static \u0275dir=N({type:t,hostVars:1,hostBindings:function(n,r){n&2&&K("aria-disabled",r.disabled)},inputs:{disableRipple:"disableRipple",disabled:"disabled"}})}return t})(),_2=(()=>{class t{_elementRef=c(B);_ngZone=c(V);_listBase=c(Yc,{optional:!0});_platform=c(ue);_hostElement;_isButtonElement;_noopAnimations=je();_avatars;_icons;set lines(e){this._explicitLines=Sn(e,null),this._updateItemLines(!1)}_explicitLines=null;get disableRipple(){return this.disabled||this._disableRipple||this._noopAnimations||!!this._listBase?.disableRipple}set disableRipple(e){this._disableRipple=Lt(e)}_disableRipple=!1;get disabled(){return this._disabled()||!!this._listBase?.disabled}set disabled(e){this._disabled.set(Lt(e))}_disabled=x(!1);_subscriptions=new ae;_rippleRenderer=null;_hasUnscopedTextContent=!1;rippleConfig;get rippleDisabled(){return this.disableRipple||!!this.rippleConfig.disabled}constructor(){c(qe).load(mi);let e=c(na,{optional:!0});this.rippleConfig=e||{},this._hostElement=this._elementRef.nativeElement,this._isButtonElement=this._hostElement.nodeName.toLowerCase()==="button",this._listBase&&!this._listBase._isNonInteractive&&this._initInteractiveListItem(),this._isButtonElement&&!this._hostElement.hasAttribute("type")&&this._hostElement.setAttribute("type","button")}ngAfterViewInit(){this._monitorProjectedLinesAndTitle(),this._updateItemLines(!0)}ngOnDestroy(){this._subscriptions.unsubscribe(),this._rippleRenderer!==null&&this._rippleRenderer._removeTriggerEvents()}_hasIconOrAvatar(){return!!(this._avatars.length||this._icons.length)}_initInteractiveListItem(){this._hostElement.classList.add("mat-mdc-list-item-interactive"),this._rippleRenderer=new ta(this,this._ngZone,this._hostElement,this._platform,c(G)),this._rippleRenderer.setupTriggerEvents(this._hostElement)}_monitorProjectedLinesAndTitle(){this._ngZone.runOutsideAngular(()=>{this._subscriptions.add(Nt(this._lines.changes,this._titles.changes).subscribe(()=>this._updateItemLines(!1)))})}_updateItemLines(e){if(!this._lines||!this._titles||!this._unscopedContent)return;e&&this._checkDomForUnscopedTextContent();let n=this._explicitLines??this._inferLinesFromContent(),r=this._unscopedContent.nativeElement;if(this._hostElement.classList.toggle("mat-mdc-list-item-single-line",n<=1),this._hostElement.classList.toggle("mdc-list-item--with-one-line",n<=1),this._hostElement.classList.toggle("mdc-list-item--with-two-lines",n===2),this._hostElement.classList.toggle("mdc-list-item--with-three-lines",n===3),this._hasUnscopedTextContent){let o=this._titles.length===0&&n===1;r.classList.toggle("mdc-list-item__primary-text",o),r.classList.toggle("mdc-list-item__secondary-text",!o)}else r.classList.remove("mdc-list-item__primary-text"),r.classList.remove("mdc-list-item__secondary-text")}_inferLinesFromContent(){let e=this._titles.length+this._lines.length;return this._hasUnscopedTextContent&&(e+=1),e}_checkDomForUnscopedTextContent(){this._hasUnscopedTextContent=Array.from(this._unscopedContent.nativeElement.childNodes).filter(e=>e.nodeType!==e.COMMENT_NODE).some(e=>!!(e.textContent&&e.textContent.trim()))}static \u0275fac=function(n){return new(n||t)};static \u0275dir=N({type:t,contentQueries:function(n,r,o){if(n&1&&vt(o,h2,4)(o,p2,4),n&2){let a;R(a=O())&&(r._avatars=a),R(a=O())&&(r._icons=a)}},hostVars:4,hostBindings:function(n,r){n&2&&(K("aria-disabled",r.disabled)("disabled",r._isButtonElement&&r.disabled||null),F("mdc-list-item--disabled",r.disabled))},inputs:{lines:"lines",disableRipple:"disableRipple",disabled:"disabled"}})}return t})();var dh=(()=>{class t extends Yc{_isNonInteractive=!1;static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ze(t)))(r||t)}})();static \u0275cmp=M({type:t,selectors:[["mat-action-list"]],hostAttrs:["role","group",1,"mat-mdc-action-list","mat-mdc-list-base","mdc-list"],exportAs:["matActionList"],features:[Ue([{provide:Yc,useExisting:t}]),ge],ngContentSelectors:HS,decls:1,vars:0,template:function(n,r){n&1&&(De(),te(0))},styles:[`.mdc-list {
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
`],encapsulation:2,changeDetection:0})}return t})();var Ns=(()=>{class t extends Yc{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ze(t)))(r||t)}})();static \u0275cmp=M({type:t,selectors:[["mat-list"]],hostAttrs:[1,"mat-mdc-list","mat-mdc-list-base","mdc-list"],exportAs:["matList"],features:[Ue([{provide:Yc,useExisting:t}]),ge],ngContentSelectors:HS,decls:1,vars:0,template:function(n,r){n&1&&(De(),te(0))},styles:[s2],encapsulation:2,changeDetection:0})}return t})(),ro=(()=>{class t extends _2{_lines;_titles;_meta;_unscopedContent;_itemText;get activated(){return this._activated}set activated(e){this._activated=Lt(e)}_activated=!1;_getAriaCurrent(){return this._hostElement.nodeName==="A"&&this._activated?"page":null}_hasBothLeadingAndTrailing(){return this._meta.length!==0&&(this._avatars.length!==0||this._icons.length!==0)}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ze(t)))(r||t)}})();static \u0275cmp=M({type:t,selectors:[["mat-list-item"],["a","mat-list-item",""],["button","mat-list-item",""]],contentQueries:function(n,r,o){if(n&1&&vt(o,f2,5)(o,Cr,5)(o,la,5),n&2){let a;R(a=O())&&(r._lines=a),R(a=O())&&(r._titles=a),R(a=O())&&(r._meta=a)}},viewQuery:function(n,r){if(n&1&&Ce(l2,5)(c2,5),n&2){let o;R(o=O())&&(r._unscopedContent=o.first),R(o=O())&&(r._itemText=o.first)}},hostAttrs:[1,"mat-mdc-list-item","mdc-list-item"],hostVars:13,hostBindings:function(n,r){n&2&&(K("aria-current",r._getAriaCurrent()),F("mdc-list-item--activated",r.activated)("mdc-list-item--with-leading-avatar",r._avatars.length!==0)("mdc-list-item--with-leading-icon",r._icons.length!==0)("mdc-list-item--with-trailing-meta",r._meta.length!==0)("mat-mdc-list-item-both-leading-and-trailing",r._hasBothLeadingAndTrailing())("_mat-animation-noopable",r._noopAnimations))},inputs:{activated:"activated"},exportAs:["matListItem"],features:[ge],ngContentSelectors:u2,decls:10,vars:0,consts:[["unscopedContent",""],[1,"mdc-list-item__content"],[1,"mat-mdc-list-item-unscoped-content",3,"cdkObserveContent"],[1,"mat-focus-indicator"]],template:function(n,r){n&1&&(De(d2),te(0),m(1,"span",1),te(2,1),te(3,2),m(4,"span",2,0),E("cdkObserveContent",function(){return r._updateItemLines(!0)}),te(6,3),h()(),te(7,4),te(8,5),T(9,"div",3))},dependencies:[wc],encapsulation:2,changeDetection:0})}return t})();var oo=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=$({type:t});static \u0275inj=z({imports:[fs,bs,ih,ve,Ui]})}return t})();var mh=class t{url=`${at.apiUrl}/api/children/attendance`;urlPerGroup=`${at.apiUrl}/api/children/attendance/group`;http=c(bt);getChildren(){return this.http.get(this.url)}getChildrenByGroup(i,e){let n=new Pt().set("groupId",i);return e&&(n=n.set("date",e)),this.http.get(this.urlPerGroup,{params:n})}static \u0275fac=function(e){return new(e||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})};var v2=["tooltip"],b2=20;var y2=new y("mat-tooltip-scroll-strategy",{providedIn:"root",factory:()=>{let t=c(G);return()=>eo(t,{scrollThrottle:b2})}}),C2=new y("mat-tooltip-default-options",{providedIn:"root",factory:()=>({showDelay:0,hideDelay:0,touchendHideDelay:1500})});var zS="tooltip-panel",w2={passive:!0},D2=8,x2=8,E2=24,M2=200,wr=(()=>{class t{_elementRef=c(B);_ngZone=c(V);_platform=c(ue);_ariaDescriber=c(GE);_focusMonitor=c(Vi);_dir=c(nt);_injector=c(G);_viewContainerRef=c(St);_mediaMatcher=c(ms);_document=c(Y);_renderer=c(Re);_animationsDisabled=je();_defaultOptions=c(C2,{optional:!0});_overlayRef=null;_tooltipInstance=null;_overlayPanelClass;_portal;_position="below";_positionAtOrigin=!1;_disabled=!1;_tooltipClass;_viewInitialized=!1;_pointerExitEventsInitialized=!1;_tooltipComponent=$S;_viewportMargin=8;_currentPosition;_cssClassPrefix="mat-mdc";_ariaDescriptionPending=!1;_dirSubscribed=!1;get position(){return this._position}set position(e){e!==this._position&&(this._position=e,this._overlayRef&&(this._updatePosition(this._overlayRef),this._tooltipInstance?.show(0),this._overlayRef.updatePosition()))}get positionAtOrigin(){return this._positionAtOrigin}set positionAtOrigin(e){this._positionAtOrigin=Lt(e),this._detach(),this._overlayRef=null}get disabled(){return this._disabled}set disabled(e){let n=Lt(e);this._disabled!==n&&(this._disabled=n,n?this.hide(0):this._setupPointerEnterEventsIfNeeded(),this._syncAriaDescription(this.message))}get showDelay(){return this._showDelay}set showDelay(e){this._showDelay=Sn(e)}_showDelay;get hideDelay(){return this._hideDelay}set hideDelay(e){this._hideDelay=Sn(e),this._tooltipInstance&&(this._tooltipInstance._mouseLeaveHideDelay=this._hideDelay)}_hideDelay;touchGestures="auto";get message(){return this._message}set message(e){let n=this._message;this._message=e!=null?String(e).trim():"",!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage()),this._syncAriaDescription(n)}_message="";get tooltipClass(){return this._tooltipClass}set tooltipClass(e){this._tooltipClass=e,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass)}_eventCleanups=[];_touchstartTimeout=null;_destroyed=new S;_isDestroyed=!1;constructor(){let e=this._defaultOptions;e&&(this._showDelay=e.showDelay,this._hideDelay=e.hideDelay,e.position&&(this.position=e.position),e.positionAtOrigin&&(this.positionAtOrigin=e.positionAtOrigin),e.touchGestures&&(this.touchGestures=e.touchGestures),e.tooltipClass&&(this.tooltipClass=e.tooltipClass)),this._viewportMargin=D2}ngAfterViewInit(){this._viewInitialized=!0,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe(ye(this._destroyed)).subscribe(e=>{e?e==="keyboard"&&this._ngZone.run(()=>this.show()):this._ngZone.run(()=>this.hide(0))})}ngOnDestroy(){let e=this._elementRef.nativeElement;this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),this._eventCleanups.forEach(n=>n()),this._eventCleanups.length=0,this._destroyed.next(),this._destroyed.complete(),this._isDestroyed=!0,this._ariaDescriber.removeDescription(e,this.message,"tooltip"),this._focusMonitor.stopMonitoring(e)}show(e=this.showDelay,n){if(this.disabled||!this.message||this._isTooltipVisible()){this._tooltipInstance?._cancelPendingAnimations();return}let r=this._createOverlay(n);this._detach(),this._portal=this._portal||new In(this._tooltipComponent,this._viewContainerRef);let o=this._tooltipInstance=r.attach(this._portal).instance;o._triggerElement=this._elementRef.nativeElement,o._mouseLeaveHideDelay=this._hideDelay,o.afterHidden().pipe(ye(this._destroyed)).subscribe(()=>this._detach()),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),o.show(e)}hide(e=this.hideDelay){let n=this._tooltipInstance;n&&(n.isVisible()?n.hide(e):(n._cancelPendingAnimations(),this._detach()))}toggle(e){this._isTooltipVisible()?this.hide():this.show(void 0,e)}_isTooltipVisible(){return!!this._tooltipInstance&&this._tooltipInstance.isVisible()}_createOverlay(e){if(this._overlayRef){let a=this._overlayRef.getConfig().positionStrategy;if((!this.positionAtOrigin||!e)&&a._origin instanceof B)return this._overlayRef;this._detach()}let n=this._injector.get(Xr).getAncestorScrollContainers(this._elementRef),r=`${this._cssClassPrefix}-${zS}`,o=As(this._injector,this.positionAtOrigin?e||this._elementRef:this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(!1).withViewportMargin(this._viewportMargin).withScrollableContainers(n).withPopoverLocation("global");return o.positionChanges.pipe(ye(this._destroyed)).subscribe(a=>{this._updateCurrentPositionClass(a.connectionPair),this._tooltipInstance&&a.scrollableViewProperties.isOverlayClipped&&this._tooltipInstance.isVisible()&&this._ngZone.run(()=>this.hide(0))}),this._overlayRef=Wi(this._injector,{direction:this._dir,positionStrategy:o,panelClass:this._overlayPanelClass?[...this._overlayPanelClass,r]:r,scrollStrategy:this._injector.get(y2)(),disableAnimations:this._animationsDisabled,eventPredicate:this._overlayEventPredicate}),this._updatePosition(this._overlayRef),this._overlayRef.detachments().pipe(ye(this._destroyed)).subscribe(()=>this._detach()),this._overlayRef.outsidePointerEvents().pipe(ye(this._destroyed)).subscribe(()=>this._tooltipInstance?._handleBodyInteraction()),this._overlayRef.keydownEvents().pipe(ye(this._destroyed)).subscribe(a=>{a.preventDefault(),a.stopPropagation(),this._ngZone.run(()=>this.hide(0))}),this._defaultOptions?.disableTooltipInteractivity&&this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`),this._dirSubscribed||(this._dirSubscribed=!0,this._dir.change.pipe(ye(this._destroyed)).subscribe(()=>{this._overlayRef&&this._updatePosition(this._overlayRef)})),this._overlayRef}_detach(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null}_updatePosition(e){let n=e.getConfig().positionStrategy,r=this._getOrigin(),o=this._getOverlayPosition();n.withPositions([this._addOffset(C(C({},r.main),o.main)),this._addOffset(C(C({},r.fallback),o.fallback))])}_addOffset(e){let n=x2,r=!this._dir||this._dir.value=="ltr";return e.originY==="top"?e.offsetY=-n:e.originY==="bottom"?e.offsetY=n:e.originX==="start"?e.offsetX=r?-n:n:e.originX==="end"&&(e.offsetX=r?n:-n),e}_getOrigin(){let e=!this._dir||this._dir.value=="ltr",n=this.position,r;n=="above"||n=="below"?r={originX:"center",originY:n=="above"?"top":"bottom"}:n=="before"||n=="left"&&e||n=="right"&&!e?r={originX:"start",originY:"center"}:(n=="after"||n=="right"&&e||n=="left"&&!e)&&(r={originX:"end",originY:"center"});let{x:o,y:a}=this._invertPosition(r.originX,r.originY);return{main:r,fallback:{originX:o,originY:a}}}_getOverlayPosition(){let e=!this._dir||this._dir.value=="ltr",n=this.position,r;n=="above"?r={overlayX:"center",overlayY:"bottom"}:n=="below"?r={overlayX:"center",overlayY:"top"}:n=="before"||n=="left"&&e||n=="right"&&!e?r={overlayX:"end",overlayY:"center"}:(n=="after"||n=="right"&&e||n=="left"&&!e)&&(r={overlayX:"start",overlayY:"center"});let{x:o,y:a}=this._invertPosition(r.overlayX,r.overlayY);return{main:r,fallback:{overlayX:o,overlayY:a}}}_updateTooltipMessage(){this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),Ge(()=>{this._tooltipInstance&&this._overlayRef.updatePosition()},{injector:this._injector}))}_setTooltipClass(e){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=e instanceof Set?Array.from(e):e,this._tooltipInstance._markForCheck())}_invertPosition(e,n){return this.position==="above"||this.position==="below"?n==="top"?n="bottom":n==="bottom"&&(n="top"):e==="end"?e="start":e==="start"&&(e="end"),{x:e,y:n}}_updateCurrentPositionClass(e){let{overlayY:n,originX:r,originY:o}=e,a;if(n==="center"?this._dir&&this._dir.value==="rtl"?a=r==="end"?"left":"right":a=r==="start"?"left":"right":a=n==="bottom"&&o==="top"?"above":"below",a!==this._currentPosition){let s=this._overlayRef;if(s){let l=`${this._cssClassPrefix}-${zS}-`;s.removePanelClass(l+this._currentPosition),s.addPanelClass(l+a)}this._currentPosition=a}}_setupPointerEnterEventsIfNeeded(){this._disabled||!this.message||!this._viewInitialized||this._eventCleanups.length||(this._isTouchPlatform()?this.touchGestures!=="off"&&(this._disableNativeGesturesIfNecessary(),this._addListener("touchstart",e=>{let n=e.targetTouches?.[0],r=n?{x:n.clientX,y:n.clientY}:void 0;this._setupPointerExitEventsIfNeeded(),this._touchstartTimeout&&clearTimeout(this._touchstartTimeout);let o=500;this._touchstartTimeout=setTimeout(()=>{this._touchstartTimeout=null,this.show(void 0,r)},this._defaultOptions?.touchLongPressShowDelay??o)})):this._addListener("mouseenter",e=>{this._setupPointerExitEventsIfNeeded();let n;e.x!==void 0&&e.y!==void 0&&(n=e),this.show(void 0,n)}))}_setupPointerExitEventsIfNeeded(){if(!this._pointerExitEventsInitialized){if(this._pointerExitEventsInitialized=!0,!this._isTouchPlatform())this._addListener("mouseleave",e=>{let n=e.relatedTarget;(!n||!this._overlayRef?.overlayElement.contains(n))&&this.hide()}),this._addListener("wheel",e=>{if(this._isTooltipVisible()){let n=this._document.elementFromPoint(e.clientX,e.clientY),r=this._elementRef.nativeElement;n!==r&&!r.contains(n)&&this.hide()}});else if(this.touchGestures!=="off"){this._disableNativeGesturesIfNecessary();let e=()=>{this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this.hide(this._defaultOptions?.touchendHideDelay)};this._addListener("touchend",e),this._addListener("touchcancel",e)}}}_addListener(e,n){this._eventCleanups.push(this._renderer.listen(this._elementRef.nativeElement,e,n,w2))}_isTouchPlatform(){let e=this._defaultOptions?.detectHoverCapability;return typeof e=="function"?!e():this._platform.IOS||this._platform.ANDROID?!0:this._platform.isBrowser?!!e&&this._mediaMatcher.matchMedia("(any-hover: none)").matches:!1}_disableNativeGesturesIfNecessary(){let e=this.touchGestures;if(e!=="off"){let n=this._elementRef.nativeElement,r=n.style;(e==="on"||n.nodeName!=="INPUT"&&n.nodeName!=="TEXTAREA")&&(r.userSelect=r.msUserSelect=r.webkitUserSelect=r.MozUserSelect="none"),(e==="on"||!n.draggable)&&(r.webkitUserDrag="none"),r.touchAction="none",r.webkitTapHighlightColor="transparent"}}_syncAriaDescription(e){this._ariaDescriptionPending||(this._ariaDescriptionPending=!0,this._ariaDescriber.removeDescription(this._elementRef.nativeElement,e,"tooltip"),this._isDestroyed||Ge({write:()=>{this._ariaDescriptionPending=!1,this.message&&!this.disabled&&this._ariaDescriber.describe(this._elementRef.nativeElement,this.message,"tooltip")}},{injector:this._injector}))}_overlayEventPredicate=e=>e.type==="keydown"?this._isTooltipVisible()&&e.keyCode===27&&!Ct(e):!0;static \u0275fac=function(n){return new(n||t)};static \u0275dir=N({type:t,selectors:[["","matTooltip",""]],hostAttrs:[1,"mat-mdc-tooltip-trigger"],hostVars:2,hostBindings:function(n,r){n&2&&F("mat-mdc-tooltip-disabled",r.disabled)},inputs:{position:[0,"matTooltipPosition","position"],positionAtOrigin:[0,"matTooltipPositionAtOrigin","positionAtOrigin"],disabled:[0,"matTooltipDisabled","disabled"],showDelay:[0,"matTooltipShowDelay","showDelay"],hideDelay:[0,"matTooltipHideDelay","hideDelay"],touchGestures:[0,"matTooltipTouchGestures","touchGestures"],message:[0,"matTooltip","message"],tooltipClass:[0,"matTooltipClass","tooltipClass"]},exportAs:["matTooltip"]})}return t})(),$S=(()=>{class t{_changeDetectorRef=c(xe);_elementRef=c(B);_isMultiline=!1;message;tooltipClass;_showTimeoutId;_hideTimeoutId;_triggerElement;_mouseLeaveHideDelay;_animationsDisabled=je();_tooltip;_closeOnInteraction=!1;_isVisible=!1;_onHide=new S;_showAnimation="mat-mdc-tooltip-show";_hideAnimation="mat-mdc-tooltip-hide";constructor(){}show(e){this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=setTimeout(()=>{this._toggleVisibility(!0),this._showTimeoutId=void 0},e)}hide(e){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId=setTimeout(()=>{this._toggleVisibility(!1),this._hideTimeoutId=void 0},e)}afterHidden(){return this._onHide}isVisible(){return this._isVisible}ngOnDestroy(){this._cancelPendingAnimations(),this._onHide.complete(),this._triggerElement=null}_handleBodyInteraction(){this._closeOnInteraction&&this.hide(0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_handleMouseLeave({relatedTarget:e}){(!e||!this._triggerElement.contains(e))&&(this.isVisible()?this.hide(this._mouseLeaveHideDelay):this._finalizeAnimation(!1))}_onShow(){this._isMultiline=this._isTooltipMultiline(),this._markForCheck()}_isTooltipMultiline(){let e=this._elementRef.nativeElement.getBoundingClientRect();return e.height>E2&&e.width>=M2}_handleAnimationEnd({animationName:e}){(e===this._showAnimation||e===this._hideAnimation)&&this._finalizeAnimation(e===this._showAnimation)}_cancelPendingAnimations(){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=this._hideTimeoutId=void 0}_finalizeAnimation(e){e?this._closeOnInteraction=!0:this.isVisible()||this._onHide.next()}_toggleVisibility(e){let n=this._tooltip.nativeElement,r=this._showAnimation,o=this._hideAnimation;if(n.classList.remove(e?o:r),n.classList.add(e?r:o),this._isVisible!==e&&(this._isVisible=e,this._changeDetectorRef.markForCheck()),e&&!this._animationsDisabled&&typeof getComputedStyle=="function"){let a=getComputedStyle(n);(a.getPropertyValue("animation-duration")==="0s"||a.getPropertyValue("animation-name")==="none")&&(this._animationsDisabled=!0)}e&&this._onShow(),this._animationsDisabled&&(n.classList.add("_mat-animation-noopable"),this._finalizeAnimation(e))}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=M({type:t,selectors:[["mat-tooltip-component"]],viewQuery:function(n,r){if(n&1&&Ce(v2,7),n&2){let o;R(o=O())&&(r._tooltip=o.first)}},hostAttrs:["aria-hidden","true"],hostBindings:function(n,r){n&1&&E("mouseleave",function(a){return r._handleMouseLeave(a)})},decls:4,vars:5,consts:[["tooltip",""],[1,"mdc-tooltip","mat-mdc-tooltip",3,"animationend"],[1,"mat-mdc-tooltip-surface","mdc-tooltip__surface"]],template:function(n,r){n&1&&(Te(0,"div",1,0),Fn("animationend",function(a){return r._handleAnimationEnd(a)}),Te(2,"div",2),g(3),Oe()()),n&2&&(It(r.tooltipClass),F("mdc-tooltip--multiline",r._isMultiline),p(3),oe(r.message))},styles:[`.mat-mdc-tooltip {
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
`],encapsulation:2,changeDetection:0})}return t})();var Fs=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=$({type:t});static \u0275inj=z({imports:[Ko,Wn,ve,$n]})}return t})();var fh=class t{teacher=cr.required();static \u0275fac=function(e){return new(e||t)};static \u0275cmp=M({type:t,selectors:[["main-presence-indicator"]],inputs:{teacher:[1,"teacher"]},decls:3,vars:5,consts:[["tooltip","matTooltip"],[3,"matTooltip"]],template:function(e,n){e&1&&(m(0,"p",1,0),g(2,"\u2B24"),h()),e&2&&(or(lr("color: ",n.teacher().color)),A("matTooltip",sr(n.teacher().name)))},dependencies:[Fs,wr],styles:["p[_ngcontent-%COMP%]{display:flex;margin:0;padding:0;cursor:pointer;text-align:center;-webkit-user-select:none;user-select:none}"]})};var ca=!0;var qn=class t{observedSocket=new _n(1);connectedSocket=null;mailboxes={attendanceMessages:new S,presenceMessages:new S,journalMessages:new S,chatMessages:new S,notifications:new S};rooms={attendance:"",journal:"",chat:""};toChatMessage(i){if(typeof i!="object"||i===null)return null;let e=i;return typeof e.senderId!="number"||typeof e.recipientId!="number"||typeof e.chatMessage!="string"||typeof e.timestamp!="string"?null:{senderId:e.senderId,recipientId:e.recipientId,chatMessage:e.chatMessage,timestamp:e.timestamp}}deliverMessage(i){let e=this.toChatMessage(i);if(e){this.mailboxes.chatMessages.next(e);return}switch(i.type){case"ATTENDANCE":this.mailboxes.attendanceMessages.next(i);break;case"DOC_OPERATION":this.mailboxes.journalMessages.next(i);break;case"PRESENCE_JOIN":case"PRESENCE_LEAVE":case"PRESENCE_STATE":this.mailboxes.presenceMessages.next(i);break;case"CHAT_MESSAGE":let n=this.toChatMessage(i.message);n&&this.mailboxes.chatMessages.next(n);break;case"NOTIFICATION":this.mailboxes.notifications.next(i);break}}connect(i){this.observedSocket=new _n(1);let e=sessionStorage.getItem("token"),n=new WebSocket(`${i}?token=${e}`);n.onmessage=r=>{let o=JSON.parse(r.data);ca&&console.log("[Websocket] - Received:",o),this.deliverMessage(o)},n.onclose=r=>{ca&&console.log("[Websocket] - Disconnected",r.code,r.reason)},n.onopen=()=>{ca&&console.log("[Websocket] - Connected"),this.observedSocket.next(n),this.connectedSocket=n}}disconnect(){if(this.connectedSocket==null){console.error("[Websocket] - Tried disconnecting an unconnected websocket.");return}for(let i of Object.values(this.rooms))i!==""&&this.connectedSocket.send(JSON.stringify({type:"unsubscribe",room:i}));this.connectedSocket.close(),this.observedSocket.complete()}async ensureConnected(){return new Promise(i=>{this.observedSocket.subscribe(()=>{i()})})}setRoom(i,e){if(this.connectedSocket==null){console.error("[Websocket] - Attempted to set room of an unconnected socket");return}this.rooms[i]!==""&&this.leaveRoom(i),this.rooms[i]=e,this.connectedSocket.readyState==this.connectedSocket.OPEN&&(ca&&console.log("[Websocket] - Subscribing:",JSON.stringify({type:"subscribe",room:e})),this.connectedSocket.send(JSON.stringify({type:"subscribe",room:e})))}setAttendanceRoom(i){this.setRoom("attendance",i)}setJournalRoom(i){this.setRoom("journal",i)}setChatRoom(i){this.setRoom("chat",i)}leaveRoom(i){if(this.connectedSocket==null){console.error("[Websocket] - Tried to leave room on unconnected socket.");return}this.rooms[i]!=""&&(ca&&console.log("[Websocket] - Unsubscribing:",JSON.stringify({type:"unsubscribe",room:this.rooms[i]})),this.connectedSocket.send(JSON.stringify({type:"unsubscribe",room:this.rooms[i]})),this.rooms[i]="")}leaveAttendanceRoom(){this.leaveRoom("attendance")}leaveJournalRoom(){this.leaveRoom("journal")}sendMessage(i,e){if(this.connectedSocket==null){console.error("[Websocket] - Tried to send message on unconnected socket.");return}e.room=this.rooms[i=="ATTENDANCE"?"attendance":i=="CHAT_MESSAGE"?"chat":"journal"],e.type=i;let n=JSON.stringify(C({},e));ca&&console.log("[Websocket] - Sending off: ",n),this.connectedSocket.send(n)}sendAttendanceUpdate(i){this.sendMessage("ATTENDANCE",i)}sendJournalUpdate(i){this.sendMessage("DOC_OPERATION",i)}sendChatMessage(i){let e=JSON.stringify({type:"CHAT_MESSAGE",room:this.rooms.chat,message:i});ca&&console.log("[Websocket] - Sending off: ",e),this.connectedSocket?.send(e)}getMessages(i){return this.mailboxes[i].asObservable()}static \u0275fac=function(e){return new(e||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})};var ao=class t{socketService=tp(qn);connectedTeachers=x([]);_teacherUpdates=new S;teacherUpdates=this._teacherUpdates.asObservable();async init(){await this.socketService.ensureConnected(),this.socketService.getMessages("presenceMessages").subscribe(i=>{this.handleMessage(i)})}spoofTeacherUpdate(){console.log("Spoofing teacher"),this._teacherUpdates.next({name:"Spoof",userId:-1,room:"Spoof",color:"#ffffff"})}handleMessage(i){switch(i.type){case"PRESENCE_STATE":this.handleStateMessage(i);break;case"PRESENCE_JOIN":this.handleJoinMessage(i);break;case"PRESENCE_LEAVE":this.handleLeaveMessage(i);break;default:console.error("WsPresenceChangeMessage with incorrect type in presence service")}}handleLeaveMessage(i){i.room||console.error("Incorrectly formatted leave message in presence service: ",i);let e={userId:i.userId,name:i.name,room:i.room,color:i.color},n=this.connectedTeachers().filter(r=>r.userId!=i.userId);this.connectedTeachers.set(n),console.log("Someone left, new status: ",this.connectedTeachers()),this._teacherUpdates.next(e)}handleJoinMessage(i){i.room||console.error("Incorrectly formatted join message in presence service: ",i);let e=this.connectedTeachers().findIndex(r=>r.userId==i.userId),n={userId:i.userId,name:i.name,room:i.room,color:i.color};if(e==-1){let r=this.connectedTeachers();r.push(n),this.connectedTeachers.set(r)}else{let r=this.connectedTeachers();r[e].room=i.room,this.connectedTeachers.set(r)}console.log("Someone joined, new status: ",this.connectedTeachers()),this._teacherUpdates.next(n)}handleStateMessage(i){if(i.users){let e=i.users.map(n=>C({},n));this.connectedTeachers.set(e)}else console.error("[Presence] - State message received without user array")}static \u0275fac=function(e){return new(e||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})};var S2=(t,i)=>i.id;function I2(t,i){if(t&1&&T(0,"main-presence-indicator",1),t&2){let e=i.$implicit;A("teacher",e)}}var Ps=class t{presence=c(ao);filter=cr.required();isGroup=cr("");teachers=x([]);ngOnInit(){this.presence.teacherUpdates.subscribe(()=>{this.teachers.set(this.presence.connectedTeachers().filter(i=>{let e=i.room.split(":"),n=e[1],r=e[2];return(this.isGroup()!==""&&n==="group"||this.isGroup()===""&&n==="child")&&r===this.filter()}))}),this.teachers.set(this.presence.connectedTeachers().filter(i=>{let e=this.isGroup()==""?"child:"+this.filter():"group:"+this.filter();return i.room.includes(e)}))}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=M({type:t,selectors:[["main-presence-container"]],inputs:{filter:[1,"filter"],isGroup:[1,"isGroup"]},decls:3,vars:0,consts:[[1,"container"],[3,"teacher"]],template:function(e,n){e&1&&(m(0,"mat-card",0),Me(1,I2,1,1,"main-presence-indicator",1,S2),h()),e&2&&(p(),Se(n.teachers()))},dependencies:[fh,yt],styles:["[_nghost-%COMP%]{height:fit-content;width:fit-content}.container[_ngcontent-%COMP%]{display:flex;flex-direction:row;padding-left:1em;padding-right:1em}.container[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{margin-left:.1em;margin-right:.1em}"]})};var T2=()=>({name:"alla",id:0}),WS=(t,i)=>i.id;function k2(t,i){if(t&1){let e=ke();m(0,"mat-option",8),E("click",function(){let r=X(e).$implicit,o=D();return J(o.handleSelection(r))}),g(1),h()}if(t&2){let e=i.$implicit;A("value",e),p(),_e(" ",e.name," ")}}function A2(t,i){t&1&&T(0,"mat-divider")}function R2(t,i){if(t&1){let e=ke();m(0,"button",13),E("click",function(){let r=X(e).$implicit,o=D();return J(o.onSelectChild(r))}),m(1,"div",14),T(2,"main-presence-container",15),h(),m(3,"span",16),g(4),h(),m(5,"div",14),T(6,"attendance-box",17),h()(),j(7,A2,1,0,"mat-divider")}if(t&2){let e=i.$implicit,n=i.$index,r=i.$count;p(2),A("filter",sr(e.id)),p(2),_e("",e.name," "),p(2),A("disabled",!0)("childSignal",e),p(),H(n!==r-1?7:-1)}}var Ls=class t{children=x([]);childSignal=Ne.required();searchQuery=x("");groupSignal=Ne.required();contentSignal=Ne.required();allGroups=Ne.required();stupidFix=x(0);searchedChildren=ut(()=>{this.stupidFix();let i=this.searchQuery();return this.children().filter(e=>e.name.toLowerCase().includes(i)).sort()});groupAttendance=ut(()=>this.searchedChildren().filter(i=>i.status==="CHECKED_IN").length);groupAbsent=ut(()=>this.searchedChildren().length-this.groupAttendance());attendanceService=c(Jr);childService=c(mh);constructor(){this.attendanceService.getAttendanceChanges.subscribe(i=>{let e=this.children().find(n=>n.id===i.childId);e!=null&&(e.status=i.status,this.stupidFix.update(n=>n+1))}),Ft(()=>{this.groupSignal().id!==0&&this.loadChildren()})}onSearchUpdated(i){this.searchQuery.set(i)}onSelectChild(i){this.childSignal.set(i),this.contentSignal.set("childView")}loadChildren(){this.childService.getChildrenByGroup(this.groupSignal().id).subscribe({next:i=>{this.children.set(i)}})}showAllChildren(){this.childService.getChildren().subscribe({next:i=>{this.children.set(i)}})}handleSelection(i){if(i.name==="alla"){this.contentSignal.set("homeView"),this.groupSignal.set({name:"",id:0}),this.showAllChildren();return}this.groupSignal.set(i),this.contentSignal.set("groupView")}handleWebsocketMessage(i){let e=this.children().find(r=>r.id===i.childId);if(!e){console.error("Attendance message received from other group. Child not found.");return}this.attendanceService.getSignal(e.id,zi()).set(i.status),e.status=i.status,this.stupidFix.update(r=>r+1)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=M({type:t,selectors:[["main-child-list"]],inputs:{childSignal:[1,"childSignal"],groupSignal:[1,"groupSignal"],contentSignal:[1,"contentSignal"],allGroups:[1,"allGroups"]},outputs:{childSignal:"childSignalChange",groupSignal:"groupSignalChange",contentSignal:"contentSignalChange",allGroups:"allGroupsChange"},decls:31,vars:5,consts:[["searchQuery",""],[1,"child-list-container"],[1,"list-topper"],["subscriptSizing","dynamic",1,"search"],[1,"badge"],["matInput","","type","search",3,"input"],["subscriptSizing","dynamic",1,"pick-class"],[3,"value"],[3,"click","value"],[1,"list-class"],[1,"stats-card"],[1,"stats"],[1,"stats-text"],["mat-list-item","",3,"click"],["matListItemMeta","",1,"meta-container"],[3,"filter"],["matListItemTitle",""],[3,"disabled","childSignal"]],template:function(e,n){if(e&1){let r=ke();m(0,"div",1)(1,"mat-card",2)(2,"mat-form-field",3)(3,"mat-label",4)(4,"mat-icon"),g(5,"search"),h(),g(6,"S\xF6k"),h(),m(7,"input",5,0),E("input",function(){X(r);let a=ln(8);return J(n.onSearchUpdated(a.value.toLowerCase()))}),h()(),m(9,"mat-form-field",6)(10,"mat-label",4)(11,"mat-icon"),g(12,"groups"),h(),g(13," V\xE4lj klass"),h(),m(14,"mat-select"),Me(15,k2,2,2,"mat-option",7,WS),m(17,"mat-option",8),E("click",function(){return n.handleSelection({name:"alla",id:0})}),g(18,"Alla elever"),h()()()(),m(19,"mat-action-list",9),Me(20,R2,8,6,null,null,WS),h(),T(22,"mat-divider"),m(23,"mat-card",10)(24,"mat-card-content",11)(25,"p",12),g(26),h(),m(27,"p",12),g(28),h(),m(29,"p",12),g(30),h()()()()}e&2&&(p(15),Se(n.allGroups()),p(2),A("value",jl(4,T2)),p(3),Se(n.searchedChildren()),p(6),_e("N\xE4rvarande: ",n.groupAttendance()),p(2),_e("Icke n\xE4rvarande: ",n.groupAbsent()),p(2),_e("Antal elever: ",n.children().length))},dependencies:[oo,dh,ro,rn,Cr,la,Uv,Ui,Os,At,kt,Hn,zn,Kt,Zt,wt,Bn,yt,dn,no,to,Gn,Ps],styles:['[_nghost-%COMP%]{background-color:var(--mat-sys-primary-container);width:100%;border:1px solid var(--mat-sys-outline-variant);color:var(--mat-sys-on-primary-container);box-sizing:border-box;border-radius:5px;flex:1;display:flex;flex-direction:column;min-height:0;height:100%;overflow:hidden}.mat-mdc-action-list[_ngcontent-%COMP%]{padding:0;border-radius:5px;height:100%}.mdc-list-item[_ngcontent-%COMP%]{color:var(--mat-sys-on-primary-container);background-color:var(--mat-sys-surface-variant);box-shadow:var(--mat-sys-level1)}.child-list-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%}.list-class[_ngcontent-%COMP%]{background-color:var(--mat-sys-surface-dim);flex:1;overflow-y:auto}.badge[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem;font:var(--mat-sys-label-large);opacity:.75}.badge[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:1.1rem;width:1.1rem;height:1.1rem}[_nghost-%COMP%]     .child-list-container .pick-class .mdc-notched-outline__leading, [_nghost-%COMP%]     .child-list-container .pick-class .mdc-notched-outline__notch, [_nghost-%COMP%]     .child-list-container .pick-class .mdc-notched-outline__trailing{border-color:var(--mat-sys-inverse-primary)!important}[_nghost-%COMP%]     .child-list-container .pick-class .mat-mdc-text-field-wrapper{background-color:var(--mat-sys-inverse-primary)!important}[_nghost-%COMP%]     .child-list-container mat-form-field:not(.pick-class) .mdc-notched-outline__leading, [_nghost-%COMP%]     .child-list-container mat-form-field:not(.pick-class) .mdc-notched-outline__notch, [_nghost-%COMP%]     .child-list-container mat-form-field:not(.pick-class) .mdc-notched-outline__trailing{border-color:var(--mat-sys-inverse-primary)!important}[_nghost-%COMP%]     .child-list-container mat-form-field:not(.pick-class) .mat-mdc-text-field-wrapper{background-color:var(--mat-sys-inverse-primary)!important}.list-topper[_ngcontent-%COMP%]{display:flex;flex-direction:row;border-bottom-left-radius:0!important;border-bottom-right-radius:0!important}.stats[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;gap:1em;background:var(--mat-sys-inverse-primary);flex:1;padding:.5em}.stats[_ngcontent-%COMP%]:after{content:""}.stats[_ngcontent-%COMP%]:before{content:""}.stats[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-weight:500;padding:0;margin:.1em}.pick-class[_ngcontent-%COMP%]{flex:.5}.search[_ngcontent-%COMP%]{flex:1}.stats-text[_ngcontent-%COMP%]{margin:1em;font:var(--mat-sys-title-small);color:var(--mat-sys-on-secondary-container)}.cornerize[_ngcontent-%COMP%]{border-top-right-radius:0%!important;border-top-left-radius:0%!important}  mat-card>mat-form-field>div:nth-child(1){border-top-right-radius:0;border-top-left-radius:0}']})};var hh=class{getDiff(i,e,n){let r=i.length-e.length,o=this.surroundingMatch(i,e,n,r)?r>0?"DELETE":"INSERT":"REPLACEMENT",a={operation:o,idx:n,value:"",length:0};switch(o){case"DELETE":a.length=r;break;case"INSERT":a.idx=n+r,a.value=e.substring(n+r,n);break;case"REPLACEMENT":{let s=this.findFirstDiff(i,e),l=this.findLastDiff(i,e);switch(l){case"prevOutOfBounds":a.idx=0,a.value=e.substring(0,0-r),a.operation="INSERT";break;case"newOutOfBounds":a.idx=0,a.length=r,a.operation="DELETE";break;default:a.value=e.substring(s,l),a.length=r+a.value.length,a.idx=s;break}}}return a}surroundingMatch(i,e,n,r){switch(r<0){case!0:return i.substring(0,n+r)===e.substring(0,n+r)&&i.substring(n+r)===e.substring(n);case!1:return i.substring(0,n)===e.substring(0,n)&&i.substring(n+r)===e.substring(n)}}findFirstDiff(i,e){let n=0;for(;;)if(i.charAt(n)===e.charAt(n))n++;else return n}findLastDiff(i,e){let n=1;for(;;){if(n>i.length)return"prevOutOfBounds";if(n>e.length)return"newOutOfBounds";if(i.charAt(i.length-n)===e.charAt(e.length-n))n++;else return e.length-n+1}}};var ph=class{transformClient(i,e){switch(i.type){case"INSERT":return this.transformInsert(i,e);case"DELETE":return this.transformDelete(i,e)}}transformInsert(i,e){let n=i;switch(e.type){case"INSERT":e.position<=i.position&&(n.position+=e.text.length);break;case"DELETE":e.position<i.position&&(n.position=Math.max(e.position,n.position-=e.length));break}return n}transformDelete(i,e){let n=i;switch(e.type){case"INSERT":e.position<=n.position?n.position+=e.text.length:e.position<n.position+n.length&&(n.length+=e.text.length);break;case"DELETE":let r=e.position+e.length;if(r<=n.position)n.position-=e.length;else if(!(e.position>=n.position+n.length)){let o=Math.max(n.position,e.position),a=Math.min(n.position+n.length,r);n.length=Math.max(0,n.length-(a-o)),n.position=Math.min(n.position,e.position)}break}return n}};var Vs=class t{baseUrl=`${at.apiUrl}/api/journal`;http=c(bt);getJournal(i,e,n){let r=new Pt;if(n==="childView")r=r.set("childId",i);else if(n==="groupView")r=r.set("groupId",e);else return console.error(`Attempted to fetch journal with unknown view: ${n}`),_o(()=>new Error("Invalid view type provided to JournalService"));return this.http.get(this.baseUrl,{params:r})}getJournalByDate(i,e){let n=new Pt;return n=n.set("childId",i),n=n.set("date",e),this.http.get(this.baseUrl,{params:n})}static \u0275fac=function(e){return new(e||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})};var O2=["journalContent"],gh=class t{journalSocket=c(qn);differ=new hh;operationalTransformer=new ph;journalService=c(Vs);textArea=ai.required("journalContent");childSignal=Ne.required();contentSignal=Ne.required();groupSignal=Ne.required();async ngOnInit(){await this.journalSocket.ensureConnected(),this.journalSocket.getMessages("journalMessages").subscribe(i=>{let e=i,n=e.operation;if(this.isMyOwnAck(e))this.inFlight.shift();else{for(let r of this.inFlight)n=this.operationalTransformer.transformClient(n,r);this.applyToLocalContent(n)}this.serverRevision=e.serverRevision}),this.loadJournal()}ngOnChanges(){let i=this.getRoom();this.journalSocket.setJournalRoom(i),this.loadJournal()}text=x("");prevText="";serverRevision=0;sequence=0;inFlight=[];getRoom(){return this.contentSignal()==="childView"?"journal:child:"+this.childSignal().id+":"+zi():"journal:group:"+this.groupSignal().id+":"+zi()}isMyOwnAck(i){return i.userId.toString()===sessionStorage.getItem("UserId")&&this.inFlight.length>0}loadJournal(){this.journalService.getJournal(this.childSignal().id,this.groupSignal().id,this.contentSignal()).subscribe({next:i=>{this.text.set(i.content),this.serverRevision=i.serverRevision,this.sequence=0,this.inFlight=[]}})}applyToLocalContent(i){let e=i.position;switch(i.type){case"INSERT":this.textArea().nativeElement.setRangeText(i.text,e,e,"preserve");break;case"DELETE":this.textArea().nativeElement.setRangeText("",e,e+i.length,"preserve");break}this.text.set(this.textArea().nativeElement.value),this.prevText=this.text()}ngOnDestroy(){this.journalSocket.leaveJournalRoom()}onInput(i){this.sequence++;let e=i.target,n=e.value;this.prevText=this.text();let r=e.selectionStart,o=this.differ.getDiff(this.prevText,n,r);this.text.set(n);let a;switch(o.operation){case"DELETE":a={type:"DELETE",position:o.idx,length:o.length};break;case"INSERT":a={type:"INSERT",position:o.idx,text:o.value};break;case"REPLACEMENT":a={type:"DELETE",position:o.idx,length:o.length},this.sendOperation(a),this.sequence++,a={type:"INSERT",position:o.idx,text:o.value};break}this.sendOperation(a)}sendOperation(i){let e={clientRevision:this.serverRevision,operation:i,sequence:this.sequence};this.inFlight.push(i),this.journalSocket.sendJournalUpdate(e)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=M({type:t,selectors:[["main-live-journal"]],viewQuery:function(e,n){e&1&&Ri(n.textArea,O2,5),e&2&&Oi()},inputs:{childSignal:[1,"childSignal"],contentSignal:[1,"contentSignal"],groupSignal:[1,"groupSignal"]},outputs:{childSignal:"childSignalChange",contentSignal:"contentSignalChange",groupSignal:"groupSignalChange"},features:[Be],decls:3,vars:1,consts:[["journalContent",""],["matInput","",3,"input","ngModel"]],template:function(e,n){e&1&&(m(0,"mat-form-field")(1,"textarea",1,0),E("input",function(o){return n.onInput(o)}),h()()),e&2&&(p(),A("ngModel",n.text()))},dependencies:[kt,Kt,Zr,mn,Un,_r],styles:["mat-tab-group[_ngcontent-%COMP%]{height:100%}mat-tab-group[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{height:100%}mat-mdc-tab-body-wrapper[_ngcontent-%COMP%]{height:100%}  .mat-mdc-form-field-flex{height:100%}  .mat-mdc-form-field-infix{height:100%}mat-form-field[_ngcontent-%COMP%]{width:100%;box-sizing:border-box;height:100%}textarea[_ngcontent-%COMP%]{width:100%;height:100%!important;min-height:20vh;margin-bottom:1em;padding:0;box-sizing:content-box;resize:none;overflow-y:scroll}"]})};var _h=class t{url=`${at.apiUrl}/api/group`;http=c(bt);getGroups(){return this.http.get(this.url)}static \u0275fac=function(e){return new(e||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})};var so=class t{url=`${at.apiUrl}/api/user/teacher`;teachersUrl=`${at.apiUrl}/api/user/teachers`;colorUrl=`${at.apiUrl}/api/user/color`;http=c(bt);getUser(i){let e=new Pt().set("teacherId",i);return this.http.get(this.url,{params:e})}getUsers(){return this.http.get(this.teachersUrl)}updateColor(i){return this.http.patch(this.colorUrl,{color:i})}static \u0275fac=function(e){return new(e||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})};function N2(t,i){if(t&1){let e=ke();m(0,"div",1)(1,"button",2),E("click",function(){X(e);let r=D();return J(r.action())}),g(2),h()()}if(t&2){let e=D();p(2),_e(" ",e.data.action," ")}}var F2=["label"];function P2(t,i){}var L2=Math.pow(2,31)-1,Qc=class{_overlayRef;instance;containerInstance;_afterDismissed=new S;_afterOpened=new S;_onAction=new S;_durationTimeoutId;_dismissedByAction=!1;constructor(i,e){this._overlayRef=e,this.containerInstance=i,i._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(i){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(i,L2))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}},GS=new y("MatSnackBarData"),Bs=class{politeness="polite";announcementMessage="";viewContainerRef;duration=0;panelClass;direction;data=null;horizontalPosition="center";verticalPosition="bottom"},V2=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=N({type:t,selectors:[["","matSnackBarLabel",""]],hostAttrs:[1,"mat-mdc-snack-bar-label","mdc-snackbar__label"]})}return t})(),B2=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=N({type:t,selectors:[["","matSnackBarActions",""]],hostAttrs:[1,"mat-mdc-snack-bar-actions","mdc-snackbar__actions"]})}return t})(),j2=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=N({type:t,selectors:[["","matSnackBarAction",""]],hostAttrs:[1,"mat-mdc-snack-bar-action","mdc-snackbar__action"]})}return t})(),H2=(()=>{class t{snackBarRef=c(Qc);data=c(GS);constructor(){}action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=M({type:t,selectors:[["simple-snack-bar"]],hostAttrs:[1,"mat-mdc-simple-snack-bar"],exportAs:["matSnackBar"],decls:3,vars:2,consts:[["matSnackBarLabel",""],["matSnackBarActions",""],["matButton","","matSnackBarAction","",3,"click"]],template:function(n,r){n&1&&(m(0,"div",0),g(1),h(),j(2,N2,3,1,"div",1)),n&2&&(p(),_e(" ",r.data.message,`
`),p(),H(r.hasAction?2:-1))},dependencies:[$t,V2,B2,j2],styles:[`.mat-mdc-simple-snack-bar {
  display: flex;
}
.mat-mdc-simple-snack-bar .mat-mdc-snack-bar-label {
  max-height: 50vh;
  overflow: auto;
}
`],encapsulation:2,changeDetection:0})}return t})(),jb="_mat-snack-bar-enter",Hb="_mat-snack-bar-exit",U2=(()=>{class t extends Kr{_ngZone=c(V);_elementRef=c(B);_changeDetectorRef=c(xe);_platform=c(ue);_animationsDisabled=je();snackBarConfig=c(Bs);_document=c(Y);_trackedModals=new Set;_enterFallback;_exitFallback;_injector=c(G);_announceDelay=150;_announceTimeoutId;_destroyed=!1;_portalOutlet;_onAnnounce=new S;_onExit=new S;_onEnter=new S;_animationState="void";_live;_label;_role;_liveElementId=c(Ye).getId("mat-snack-bar-container-live-");constructor(){super();let e=this.snackBarConfig;e.politeness==="assertive"&&!e.announcementMessage?this._live="assertive":e.politeness==="off"?this._live="off":this._live="polite",this._platform.FIREFOX&&(this._live==="polite"&&(this._role="status"),this._live==="assertive"&&(this._role="alert"))}attachComponentPortal(e){this._assertNotAttached();let n=this._portalOutlet.attachComponentPortal(e);return this._afterPortalAttached(),n}attachTemplatePortal(e){this._assertNotAttached();let n=this._portalOutlet.attachTemplatePortal(e);return this._afterPortalAttached(),n}attachDomPortal=e=>{this._assertNotAttached();let n=this._portalOutlet.attachDomPortal(e);return this._afterPortalAttached(),n};onAnimationEnd(e){e===Hb?this._completeExit():e===jb&&(clearTimeout(this._enterFallback),this._ngZone.run(()=>{this._onEnter.next(),this._onEnter.complete()}))}enter(){this._destroyed||(this._animationState="visible",this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce(),this._animationsDisabled?Ge(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(jb)))},{injector:this._injector}):(clearTimeout(this._enterFallback),this._enterFallback=setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-snack-bar-fallback-visible"),this.onAnimationEnd(jb)},200)))}exit(){return this._destroyed?q(void 0):(this._ngZone.run(()=>{this._animationState="hidden",this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.setAttribute("mat-exit",""),clearTimeout(this._announceTimeoutId),this._animationsDisabled?Ge(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(Hb)))},{injector:this._injector}):(clearTimeout(this._exitFallback),this._exitFallback=setTimeout(()=>this.onAnimationEnd(Hb),200))}),this._onExit)}ngOnDestroy(){this._destroyed=!0,this._clearFromModals(),this._completeExit()}_completeExit(){clearTimeout(this._exitFallback),queueMicrotask(()=>{this._onExit.next(),this._onExit.complete()})}_afterPortalAttached(){let e=this._elementRef.nativeElement,n=this.snackBarConfig.panelClass;n&&(Array.isArray(n)?n.forEach(a=>e.classList.add(a)):e.classList.add(n)),this._exposeToModals();let r=this._label.nativeElement,o="mdc-snackbar__label";r.classList.toggle(o,!r.querySelector(`.${o}`))}_exposeToModals(){let e=this._liveElementId,n=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let r=0;r<n.length;r++){let o=n[r],a=o.getAttribute("aria-owns");this._trackedModals.add(o),a?a.indexOf(e)===-1&&o.setAttribute("aria-owns",a+" "+e):o.setAttribute("aria-owns",e)}}_clearFromModals(){this._trackedModals.forEach(e=>{let n=e.getAttribute("aria-owns");if(n){let r=n.replace(this._liveElementId,"").trim();r.length>0?e.setAttribute("aria-owns",r):e.removeAttribute("aria-owns")}}),this._trackedModals.clear()}_assertNotAttached(){this._portalOutlet.hasAttached()}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{if(this._destroyed)return;let e=this._elementRef.nativeElement,n=e.querySelector("[aria-hidden]"),r=e.querySelector("[aria-live]");if(n&&r){let o=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&n.contains(document.activeElement)&&(o=document.activeElement),n.removeAttribute("aria-hidden"),r.appendChild(n),o?.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=M({type:t,selectors:[["mat-snack-bar-container"]],viewQuery:function(n,r){if(n&1&&Ce(fn,7)(F2,7),n&2){let o;R(o=O())&&(r._portalOutlet=o.first),R(o=O())&&(r._label=o.first)}},hostAttrs:[1,"mdc-snackbar","mat-mdc-snack-bar-container"],hostVars:6,hostBindings:function(n,r){n&1&&E("animationend",function(a){return r.onAnimationEnd(a.animationName)})("animationcancel",function(a){return r.onAnimationEnd(a.animationName)}),n&2&&F("mat-snack-bar-container-enter",r._animationState==="visible")("mat-snack-bar-container-exit",r._animationState==="hidden")("mat-snack-bar-container-animations-enabled",!r._animationsDisabled)},features:[ge],decls:6,vars:3,consts:[["label",""],[1,"mdc-snackbar__surface","mat-mdc-snackbar-surface"],[1,"mat-mdc-snack-bar-label"],["aria-hidden","true"],["cdkPortalOutlet",""]],template:function(n,r){n&1&&(m(0,"div",1)(1,"div",2,0)(3,"div",3),dt(4,P2,0,0,"ng-template",4),h(),T(5,"div"),h()()),n&2&&(p(5),K("aria-live",r._live)("role",r._role)("id",r._liveElementId))},dependencies:[fn],styles:[`@keyframes _mat-snack-bar-enter {
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
`],encapsulation:2})}return t})(),z2=new y("mat-snack-bar-default-options",{providedIn:"root",factory:()=>new Bs}),qS=(()=>{class t{_live=c(Dc);_injector=c(G);_breakpointObserver=c(Cc);_parentSnackBar=c(t,{optional:!0,skipSelf:!0});_defaultConfig=c(z2);_animationsDisabled=je();_snackBarRefAtThisLevel=null;simpleSnackBarComponent=H2;snackBarContainerComponent=U2;handsetCssClass="mat-mdc-snack-bar-handset";get _openedSnackBarRef(){let e=this._parentSnackBar;return e?e._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(e){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=e:this._snackBarRefAtThisLevel=e}constructor(){}openFromComponent(e,n){return this._attach(e,n)}openFromTemplate(e,n){return this._attach(e,n)}open(e,n="",r){let o=C(C({},this._defaultConfig),r);return o.data={message:e,action:n},o.announcementMessage===e&&(o.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,o)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(e,n){let r=n&&n.viewContainerRef&&n.viewContainerRef.injector,o=G.create({parent:r||this._injector,providers:[{provide:Bs,useValue:n}]}),a=new In(this.snackBarContainerComponent,n.viewContainerRef,o),s=e.attach(a);return s.instance.snackBarConfig=n,s.instance}_attach(e,n){let r=C(C(C({},new Bs),this._defaultConfig),n),o=this._createOverlay(r),a=this._attachSnackBarContainer(o,r),s=new Qc(a,o);if(e instanceof gt){let l=new Tn(e,null,{$implicit:r.data,snackBarRef:s});s.instance=a.attachTemplatePortal(l)}else{let l=this._createInjector(r,s),d=new In(e,void 0,l),u=a.attachComponentPortal(d);s.instance=u.instance}return this._breakpointObserver.observe(YE.HandsetPortrait).pipe(ye(o.detachments())).subscribe(l=>{o.overlayElement.classList.toggle(this.handsetCssClass,l.matches)}),r.announcementMessage&&a._onAnnounce.subscribe(()=>{this._live.announce(r.announcementMessage,r.politeness)}),this._animateSnackBar(s,r),this._openedSnackBarRef=s,this._openedSnackBarRef}_animateSnackBar(e,n){e.afterDismissed().subscribe(()=>{this._openedSnackBarRef==e&&(this._openedSnackBarRef=null),n.announcementMessage&&this._live.clear()}),n.duration&&n.duration>0&&e.afterOpened().subscribe(()=>e._dismissAfter(n.duration)),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{e.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):e.containerInstance.enter()}_createOverlay(e){let n=new $i;n.direction=e.direction;let r=yr(this._injector),o=e.direction==="rtl",a=e.horizontalPosition==="left"||e.horizontalPosition==="start"&&!o||e.horizontalPosition==="end"&&o,s=!a&&e.horizontalPosition!=="center";return a?r.left("0"):s?r.right("0"):r.centerHorizontally(),e.verticalPosition==="top"?r.top("0"):r.bottom("0"),n.positionStrategy=r,n.disableAnimations=this._animationsDisabled,Wi(this._injector,n)}_createInjector(e,n){let r=e&&e.viewContainerRef&&e.viewContainerRef.injector;return G.create({parent:r||this._injector,providers:[{provide:Qc,useValue:n},{provide:GS,useValue:e.data}]})}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var vh=class t{_snackBar=c(qS);userService=c(so);teacherColor=Ne("#ffffff");userDataObservable=this.userService.getUser(Number(sessionStorage.getItem("UserId")));currentUser=this.userDataObservable.pipe();ngOnInit(){this.userDataObservable.subscribe(i=>{this.teacherColor.set(i.color)})}updateColor(){console.log("From updatecolor",this.teacherColor()),this.userService.updateColor(this.teacherColor()).subscribe(()=>{this._snackBar.open("Din f\xE4rg uppdateras n\xE4sta g\xE5ng du loggar in.","St\xE4ng",{duration:2500,verticalPosition:"top"})})}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=M({type:t,selectors:[["account-page"]],inputs:{teacherColor:[1,"teacherColor"]},outputs:{teacherColor:"teacherColorChange"},decls:33,vars:10,consts:[["appearance","outlined"],[1,"card-header-segment","card-header-left"],["mat-card-avatar","",1,"icon-display"],[1,"hamburger"],[1,"card-header-segment","card-header-right"],["type","color","matInput","","matNativeControl","","name","name",3,"input","ngModelChange","ngModel"]],template:function(e,n){if(e&1&&(m(0,"mat-card",0)(1,"mat-card-header")(2,"div",1)(3,"div",2)(4,"mat-icon"),g(5,"person"),h()(),m(6,"div",3)(7,"mat-card-title"),g(8),Hl(9,"async"),h(),m(10,"mat-card-subtitle"),g(11),Hl(12,"async"),h()()(),m(13,"div",4)(14,"h2"),g(15,"Din f\xE4rg"),h(),m(16,"input",5),E("input",function(){return n.updateColor()}),Xe("ngModelChange",function(o){return Ie(n.teacherColor,o)||(n.teacherColor=o),o}),h()()(),m(17,"mat-card-content")(18,"p"),g(19),Hl(20,"async"),h(),m(21,"p"),g(22,"Exempeltext"),h(),m(23,"p"),g(24,"Exempeltext"),h(),m(25,"p"),g(26,"Exempeltext"),h(),m(27,"p"),g(28,"Exempeltext"),h(),m(29,"p"),g(30,"Exempeltext"),h(),m(31,"p"),g(32,"Exempeltext"),h()()()),e&2){let r,o,a;p(8),oe((r=Ul(9,4,n.currentUser))==null?null:r.name),p(3),oe((o=Ul(12,6,n.currentUser))==null?null:o.role),p(5),Ke("ngModel",n.teacherColor),p(3),_e("Mejladress: ",(a=Ul(20,8,n.currentUser))==null?null:a.email)}},dependencies:[Bn,yt,CE,dn,un,yE,cs,Zt,wt,At,zn,Kt,Zr,mn,Un,_r,z_],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;overflow:hidden;box-sizing:border-box}.icon-display[_ngcontent-%COMP%]{transform:scale(2);display:flex;align-items:center;justify-content:center;overflow:hidden}p[_ngcontent-%COMP%]{font:var(--mat-sys-body-large)}mat-card[_ngcontent-%COMP%]{margin-top:7em;box-sizing:border-box;flex:1;box-shadow:var(--mat-sys-level2);background:var(--mat-sys-surface-variant)}mat-card-header[_ngcontent-%COMP%]{width:100%;display:flex}.card-header-left[_ngcontent-%COMP%]{flex:2;display:flex;flex-direction:row;justify-content:flex-start;align-items:center;gap:2em}.hamburger[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:flex-start}.card-header-right[_ngcontent-%COMP%]{flex:1;display:flex;align-items:center;justify-content:center;flex-direction:column;font-family:var(--mat-sys-label-large)}"]})};var Ub=new y("MAT_DATE_LOCALE",{providedIn:"root",factory:()=>c(Ga)}),js="Method not implemented",pn=class{locale;_localeChanges=new S;localeChanges=this._localeChanges;setTime(i,e,n,r){throw new Error(js)}getHours(i){throw new Error(js)}getMinutes(i){throw new Error(js)}getSeconds(i){throw new Error(js)}parseTime(i,e){throw new Error(js)}addSeconds(i,e){throw new Error(js)}getValidDateOrNull(i){return this.isDateInstance(i)&&this.isValid(i)?i:null}deserialize(i){return i==null||this.isDateInstance(i)&&this.isValid(i)?i:this.invalid()}setLocale(i){this.locale=i,this._localeChanges.next()}compareDate(i,e){return this.getYear(i)-this.getYear(e)||this.getMonth(i)-this.getMonth(e)||this.getDate(i)-this.getDate(e)}compareTime(i,e){return this.getHours(i)-this.getHours(e)||this.getMinutes(i)-this.getMinutes(e)||this.getSeconds(i)-this.getSeconds(e)}sameDate(i,e){if(i&&e){let n=this.isValid(i),r=this.isValid(e);return n&&r?!this.compareDate(i,e):n==r}return i==e}sameTime(i,e){if(i&&e){let n=this.isValid(i),r=this.isValid(e);return n&&r?!this.compareTime(i,e):n==r}return i==e}clampDate(i,e,n){return e&&this.compareDate(i,e)<0?e:n&&this.compareDate(i,n)>0?n:i}},da=new y("mat-date-formats");var $2=["mat-calendar-body",""];function W2(t,i){return this._trackRow(i)}var JS=(t,i)=>i.id;function G2(t,i){if(t&1&&(Te(0,"tr",0)(1,"td",3),g(2),Oe()()),t&2){let e=D();p(),ri("padding-top",e._cellPadding)("padding-bottom",e._cellPadding),K("colspan",e.numCols),p(),_e(" ",e.label," ")}}function q2(t,i){if(t&1&&(Te(0,"td",3),g(1),Oe()),t&2){let e=D(2);ri("padding-top",e._cellPadding)("padding-bottom",e._cellPadding),K("colspan",e._firstRowOffset),p(),_e(" ",e._firstRowOffset>=e.labelMinRequiredCells?e.label:""," ")}}function Y2(t,i){if(t&1){let e=ke();Te(0,"td",6)(1,"button",7),Fn("click",function(r){let o=X(e).$implicit,a=D(2);return J(a._cellClicked(o,r))})("focus",function(r){let o=X(e).$implicit,a=D(2);return J(a._emitActiveDateChange(o,r))}),Te(2,"span",8),g(3),Oe(),sn(4,"span",9),Oe()()}if(t&2){let e=i.$implicit,n=i.$index,r=D().$index,o=D();ri("width",o._cellWidth)("padding-top",o._cellPadding)("padding-bottom",o._cellPadding),K("data-mat-row",r)("data-mat-col",n),p(),It(e.cssClasses),F("mat-calendar-body-disabled",!e.enabled)("mat-calendar-body-active",o._isActiveCell(r,n))("mat-calendar-body-range-start",o._isRangeStart(e.compareValue))("mat-calendar-body-range-end",o._isRangeEnd(e.compareValue))("mat-calendar-body-in-range",o._isInRange(e.compareValue))("mat-calendar-body-comparison-bridge-start",o._isComparisonBridgeStart(e.compareValue,r,n))("mat-calendar-body-comparison-bridge-end",o._isComparisonBridgeEnd(e.compareValue,r,n))("mat-calendar-body-comparison-start",o._isComparisonStart(e.compareValue))("mat-calendar-body-comparison-end",o._isComparisonEnd(e.compareValue))("mat-calendar-body-in-comparison-range",o._isInComparisonRange(e.compareValue))("mat-calendar-body-preview-start",o._isPreviewStart(e.compareValue))("mat-calendar-body-preview-end",o._isPreviewEnd(e.compareValue))("mat-calendar-body-in-preview",o._isInPreview(e.compareValue)),Yt("tabIndex",o._isActiveCell(r,n)?0:-1),K("aria-label",e.ariaLabel)("aria-disabled",!e.enabled||null)("aria-pressed",o._isSelected(e.compareValue))("aria-current",o.todayValue===e.compareValue?"date":null)("aria-describedby",o._getDescribedby(e.compareValue)),p(),F("mat-calendar-body-selected",o._isSelected(e.compareValue))("mat-calendar-body-comparison-identical",o._isComparisonIdentical(e.compareValue))("mat-calendar-body-today",o.todayValue===e.compareValue),p(),_e(" ",e.displayValue," ")}}function Q2(t,i){if(t&1&&(Te(0,"tr",1),j(1,q2,2,6,"td",4),Me(2,Y2,5,49,"td",5,JS),Oe()),t&2){let e=i.$implicit,n=i.$index,r=D();p(),H(n===0&&r._firstRowOffset?1:-1),p(),Se(e)}}function Z2(t,i){if(t&1&&(m(0,"th",2)(1,"span",6),g(2),h(),m(3,"span",3),g(4),h()()),t&2){let e=i.$implicit;p(2),oe(e.long),p(2),oe(e.narrow)}}var K2=["*"];function X2(t,i){}function J2(t,i){if(t&1){let e=ke();m(0,"mat-month-view",4),Xe("activeDateChange",function(r){X(e);let o=D();return Ie(o.activeDate,r)||(o.activeDate=r),J(r)}),E("_userSelection",function(r){X(e);let o=D();return J(o._dateSelected(r))})("dragStarted",function(r){X(e);let o=D();return J(o._dragStarted(r))})("dragEnded",function(r){X(e);let o=D();return J(o._dragEnded(r))}),h()}if(t&2){let e=D();Ke("activeDate",e.activeDate),A("selected",e.selected)("dateFilter",e.dateFilter)("maxDate",e.maxDate)("minDate",e.minDate)("dateClass",e.dateClass)("comparisonStart",e.comparisonStart)("comparisonEnd",e.comparisonEnd)("startDateAccessibleName",e.startDateAccessibleName)("endDateAccessibleName",e.endDateAccessibleName)("activeDrag",e._activeDrag)}}function eB(t,i){if(t&1){let e=ke();m(0,"mat-year-view",5),Xe("activeDateChange",function(r){X(e);let o=D();return Ie(o.activeDate,r)||(o.activeDate=r),J(r)}),E("monthSelected",function(r){X(e);let o=D();return J(o._monthSelectedInYearView(r))})("selectedChange",function(r){X(e);let o=D();return J(o._goToDateInView(r,"month"))}),h()}if(t&2){let e=D();Ke("activeDate",e.activeDate),A("selected",e.selected)("dateFilter",e.dateFilter)("maxDate",e.maxDate)("minDate",e.minDate)("dateClass",e.dateClass)}}function tB(t,i){if(t&1){let e=ke();m(0,"mat-multi-year-view",6),Xe("activeDateChange",function(r){X(e);let o=D();return Ie(o.activeDate,r)||(o.activeDate=r),J(r)}),E("yearSelected",function(r){X(e);let o=D();return J(o._yearSelectedInMultiYearView(r))})("selectedChange",function(r){X(e);let o=D();return J(o._goToDateInView(r,"year"))}),h()}if(t&2){let e=D();Ke("activeDate",e.activeDate),A("selected",e.selected)("dateFilter",e.dateFilter)("maxDate",e.maxDate)("minDate",e.minDate)("dateClass",e.dateClass)}}function nB(t,i){}var iB=["button"],rB=[[["","matDatepickerToggleIcon",""]]],oB=["[matDatepickerToggleIcon]"];function aB(t,i){t&1&&(Si(),m(0,"svg",2),T(1,"path",3),h())}var Us=(()=>{class t{changes=new S;calendarLabel="Calendar";openCalendarLabel="Open calendar";closeCalendarLabel="Close calendar";prevMonthLabel="Previous month";nextMonthLabel="Next month";prevYearLabel="Previous year";nextYearLabel="Next year";prevMultiYearLabel="Previous 24 years";nextMultiYearLabel="Next 24 years";switchToMonthViewLabel="Choose date";switchToMultiYearViewLabel="Choose month and year";startDateLabel="Start date";endDateLabel="End date";comparisonDateLabel="Comparison range";formatYearRange(e,n){return`${e} \u2013 ${n}`}formatYearRangeLabel(e,n){return`${e} to ${n}`}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),sB=0,Kc=class{value;displayValue;ariaLabel;enabled;compareValue;rawValue;id=sB++;cssClasses;constructor(i,e,n,r,o,a=i,s){this.value=i,this.displayValue=e,this.ariaLabel=n,this.enabled=r,this.compareValue=a,this.rawValue=s,this.cssClasses=o instanceof Set?Array.from(o):o}},lB={passive:!1,capture:!0},bh={passive:!0,capture:!0},YS={passive:!0},Hs=(()=>{class t{_elementRef=c(B);_ngZone=c(V);_platform=c(ue);_intl=c(Us);_eventCleanups;_skipNextFocus=!1;_focusActiveCellAfterViewChecked=!1;label;rows;todayValue;startValue;endValue;labelMinRequiredCells;numCols=7;activeCell=0;ngAfterViewChecked(){this._focusActiveCellAfterViewChecked&&(this._focusActiveCell(),this._focusActiveCellAfterViewChecked=!1)}isRange=!1;cellAspectRatio=1;comparisonStart=null;comparisonEnd=null;previewStart=null;previewEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;selectedValueChange=new I;previewChange=new I;activeDateChange=new I;dragStarted=new I;dragEnded=new I;_firstRowOffset;_cellPadding;_cellWidth;_startDateLabelId;_endDateLabelId;_comparisonStartDateLabelId;_comparisonEndDateLabelId;_didDragSinceMouseDown=!1;_injector=c(G);comparisonDateAccessibleName=this._intl.comparisonDateLabel;_trackRow=e=>e;constructor(){let e=c(Re),n=c(Ye);this._startDateLabelId=n.getId("mat-calendar-body-start-"),this._endDateLabelId=n.getId("mat-calendar-body-end-"),this._comparisonStartDateLabelId=n.getId("mat-calendar-body-comparison-start-"),this._comparisonEndDateLabelId=n.getId("mat-calendar-body-comparison-end-"),c(qe).load(mi),this._ngZone.runOutsideAngular(()=>{let r=this._elementRef.nativeElement,o=[e.listen(r,"touchmove",this._touchmoveHandler,lB),e.listen(r,"mouseenter",this._enterHandler,bh),e.listen(r,"focus",this._enterHandler,bh),e.listen(r,"mouseleave",this._leaveHandler,bh),e.listen(r,"blur",this._leaveHandler,bh),e.listen(r,"mousedown",this._mousedownHandler,YS),e.listen(r,"touchstart",this._mousedownHandler,YS)];this._platform.isBrowser&&o.push(e.listen("window","mouseup",this._mouseupHandler),e.listen("window","touchend",this._touchendHandler)),this._eventCleanups=o})}_cellClicked(e,n){this._didDragSinceMouseDown||e.enabled&&this.selectedValueChange.emit({value:e.value,event:n})}_emitActiveDateChange(e,n){e.enabled&&this.activeDateChange.emit({value:e.value,event:n})}_isSelected(e){return this.startValue===e||this.endValue===e}ngOnChanges(e){let n=e.numCols,{rows:r,numCols:o}=this;(e.rows||n)&&(this._firstRowOffset=r&&r.length&&r[0].length?o-r[0].length:0),(e.cellAspectRatio||n||!this._cellPadding)&&(this._cellPadding=`${50*this.cellAspectRatio/o}%`),(n||!this._cellWidth)&&(this._cellWidth=`${100/o}%`)}ngOnDestroy(){this._eventCleanups.forEach(e=>e())}_isActiveCell(e,n){let r=e*this.numCols+n;return e&&(r-=this._firstRowOffset),r==this.activeCell}_focusActiveCell(e=!0){Ge(()=>{setTimeout(()=>{let n=this._elementRef.nativeElement.querySelector(".mat-calendar-body-active");n&&(e||(this._skipNextFocus=!0),n.focus())})},{injector:this._injector})}_scheduleFocusActiveCellAfterViewChecked(){this._focusActiveCellAfterViewChecked=!0}_isRangeStart(e){return Wb(e,this.startValue,this.endValue)}_isRangeEnd(e){return Gb(e,this.startValue,this.endValue)}_isInRange(e){return qb(e,this.startValue,this.endValue,this.isRange)}_isComparisonStart(e){return Wb(e,this.comparisonStart,this.comparisonEnd)}_isComparisonBridgeStart(e,n,r){if(!this._isComparisonStart(e)||this._isRangeStart(e)||!this._isInRange(e))return!1;let o=this.rows[n][r-1];if(!o){let a=this.rows[n-1];o=a&&a[a.length-1]}return o&&!this._isRangeEnd(o.compareValue)}_isComparisonBridgeEnd(e,n,r){if(!this._isComparisonEnd(e)||this._isRangeEnd(e)||!this._isInRange(e))return!1;let o=this.rows[n][r+1];if(!o){let a=this.rows[n+1];o=a&&a[0]}return o&&!this._isRangeStart(o.compareValue)}_isComparisonEnd(e){return Gb(e,this.comparisonStart,this.comparisonEnd)}_isInComparisonRange(e){return qb(e,this.comparisonStart,this.comparisonEnd,this.isRange)}_isComparisonIdentical(e){return this.comparisonStart===this.comparisonEnd&&e===this.comparisonStart}_isPreviewStart(e){return Wb(e,this.previewStart,this.previewEnd)}_isPreviewEnd(e){return Gb(e,this.previewStart,this.previewEnd)}_isInPreview(e){return qb(e,this.previewStart,this.previewEnd,this.isRange)}_getDescribedby(e){if(!this.isRange)return null;if(this.startValue===e&&this.endValue===e)return`${this._startDateLabelId} ${this._endDateLabelId}`;if(this.startValue===e)return this._startDateLabelId;if(this.endValue===e)return this._endDateLabelId;if(this.comparisonStart!==null&&this.comparisonEnd!==null){if(e===this.comparisonStart&&e===this.comparisonEnd)return`${this._comparisonStartDateLabelId} ${this._comparisonEndDateLabelId}`;if(e===this.comparisonStart)return this._comparisonStartDateLabelId;if(e===this.comparisonEnd)return this._comparisonEndDateLabelId}return null}_enterHandler=e=>{if(this._skipNextFocus&&e.type==="focus"){this._skipNextFocus=!1;return}if(e.target&&this.isRange){let n=this._getCellFromElement(e.target);n&&this._ngZone.run(()=>this.previewChange.emit({value:n.enabled?n:null,event:e}))}};_touchmoveHandler=e=>{if(!this.isRange)return;let n=QS(e),r=n?this._getCellFromElement(n):null;n!==e.target&&(this._didDragSinceMouseDown=!0),$b(e.target)&&e.preventDefault(),this._ngZone.run(()=>this.previewChange.emit({value:r?.enabled?r:null,event:e}))};_leaveHandler=e=>{this.previewEnd!==null&&this.isRange&&(e.type!=="blur"&&(this._didDragSinceMouseDown=!0),e.target&&this._getCellFromElement(e.target)&&!(e.relatedTarget&&this._getCellFromElement(e.relatedTarget))&&this._ngZone.run(()=>this.previewChange.emit({value:null,event:e})))};_mousedownHandler=e=>{if(!this.isRange)return;this._didDragSinceMouseDown=!1;let n=e.target&&this._getCellFromElement(e.target);!n||!this._isInRange(n.compareValue)||this._ngZone.run(()=>{this.dragStarted.emit({value:n.rawValue,event:e})})};_mouseupHandler=e=>{if(!this.isRange)return;let n=$b(e.target);if(!n){this._ngZone.run(()=>{this.dragEnded.emit({value:null,event:e})});return}n.closest(".mat-calendar-body")===this._elementRef.nativeElement&&this._ngZone.run(()=>{let r=this._getCellFromElement(n);this.dragEnded.emit({value:r?.rawValue??null,event:e})})};_touchendHandler=e=>{let n=QS(e);n&&this._mouseupHandler({target:n})};_getCellFromElement(e){let n=$b(e);if(n){let r=n.getAttribute("data-mat-row"),o=n.getAttribute("data-mat-col");if(r&&o)return this.rows[parseInt(r)]?.[parseInt(o)]||null}return null}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=M({type:t,selectors:[["","mat-calendar-body",""]],hostAttrs:[1,"mat-calendar-body"],inputs:{label:"label",rows:"rows",todayValue:"todayValue",startValue:"startValue",endValue:"endValue",labelMinRequiredCells:"labelMinRequiredCells",numCols:"numCols",activeCell:"activeCell",isRange:"isRange",cellAspectRatio:"cellAspectRatio",comparisonStart:"comparisonStart",comparisonEnd:"comparisonEnd",previewStart:"previewStart",previewEnd:"previewEnd",startDateAccessibleName:"startDateAccessibleName",endDateAccessibleName:"endDateAccessibleName"},outputs:{selectedValueChange:"selectedValueChange",previewChange:"previewChange",activeDateChange:"activeDateChange",dragStarted:"dragStarted",dragEnded:"dragEnded"},exportAs:["matCalendarBody"],features:[Be],attrs:$2,decls:11,vars:11,consts:[["aria-hidden","true"],["role","row"],[1,"mat-calendar-body-hidden-label",3,"id"],[1,"mat-calendar-body-label"],[1,"mat-calendar-body-label",3,"paddingTop","paddingBottom"],["role","gridcell",1,"mat-calendar-body-cell-container",3,"width","paddingTop","paddingBottom"],["role","gridcell",1,"mat-calendar-body-cell-container"],["type","button",1,"mat-calendar-body-cell",3,"click","focus","tabindex"],[1,"mat-calendar-body-cell-content","mat-focus-indicator"],["aria-hidden","true",1,"mat-calendar-body-cell-preview"]],template:function(n,r){n&1&&(j(0,G2,3,6,"tr",0),Me(1,Q2,4,1,"tr",1,W2,!0),Te(3,"span",2),g(4),Oe(),Te(5,"span",2),g(6),Oe(),Te(7,"span",2),g(8),Oe(),Te(9,"span",2),g(10),Oe()),n&2&&(H(r._firstRowOffset<r.labelMinRequiredCells?0:-1),p(),Se(r.rows),p(2),Yt("id",r._startDateLabelId),p(),_e(" ",r.startDateAccessibleName,`
`),p(),Yt("id",r._endDateLabelId),p(),_e(" ",r.endDateAccessibleName,`
`),p(),Yt("id",r._comparisonStartDateLabelId),p(),ar(" ",r.comparisonDateAccessibleName," ",r.startDateAccessibleName,`
`),p(),Yt("id",r._comparisonEndDateLabelId),p(),ar(" ",r.comparisonDateAccessibleName," ",r.endDateAccessibleName,`
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
`],encapsulation:2,changeDetection:0})}return t})();function zb(t){return t?.nodeName==="TD"}function $b(t){let i;return zb(t)?i=t:zb(t.parentNode)?i=t.parentNode:zb(t.parentNode?.parentNode)&&(i=t.parentNode.parentNode),i?.getAttribute("data-mat-row")!=null?i:null}function Wb(t,i,e){return e!==null&&i!==e&&t<e&&t===i}function Gb(t,i,e){return i!==null&&i!==e&&t>=i&&t===e}function qb(t,i,e,n){return n&&i!==null&&e!==null&&i!==e&&t>=i&&t<=e}function QS(t){let i=t.changedTouches[0];return document.elementFromPoint(i.clientX,i.clientY)}var Yn=class{start;end;_disableStructuralEquivalency;constructor(i,e){this.start=i,this.end=e}},yh=(()=>{class t{selection;_adapter;_selectionChanged=new S;selectionChanged=this._selectionChanged;constructor(e,n){this.selection=e,this._adapter=n,this.selection=e}updateSelection(e,n){let r=this.selection;this.selection=e,this._selectionChanged.next({selection:e,source:n,oldValue:r})}ngOnDestroy(){this._selectionChanged.complete()}_isValidDateInstance(e){return this._adapter.isDateInstance(e)&&this._adapter.isValid(e)}static \u0275fac=function(n){Pl()};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})(),cB=(()=>{class t extends yh{constructor(e){super(null,e)}add(e){super.updateSelection(e,this)}isValid(){return this.selection!=null&&this._isValidDateInstance(this.selection)}isComplete(){return this.selection!=null}clone(){let e=new t(this._adapter);return e.updateSelection(this.selection,this),e}static \u0275fac=function(n){return new(n||t)(W(pn))};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})();var dB={provide:yh,useFactory:()=>c(yh,{optional:!0,skipSelf:!0})||new cB(c(pn))};var eI=new y("MAT_DATE_RANGE_SELECTION_STRATEGY");var Yb=7,uB=0,ZS=(()=>{class t{_changeDetectorRef=c(xe);_dateFormats=c(da,{optional:!0});_dateAdapter=c(pn,{optional:!0});_dir=c(nt,{optional:!0});_rangeStrategy=c(eI,{optional:!0});_rerenderSubscription=ae.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(e){let n=this._activeDate,r=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(r,this.minDate,this.maxDate),this._hasSameMonthAndYear(n,this._activeDate)||this._init()}_activeDate;get selected(){return this._selected}set selected(e){e instanceof Yn?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setRanges(this._selected)}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;activeDrag=null;selectedChange=new I;_userSelection=new I;dragStarted=new I;dragEnded=new I;activeDateChange=new I;_matCalendarBody;_monthLabel=x("");_weeks=x([]);_firstWeekOffset=x(0);_rangeStart=x(null);_rangeEnd=x(null);_comparisonRangeStart=x(null);_comparisonRangeEnd=x(null);_previewStart=x(null);_previewEnd=x(null);_isRange=x(!1);_todayDate=x(null);_weekdays=x([]);constructor(){c(qe).load(Bi),this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(Qe(null)).subscribe(()=>this._init())}ngOnChanges(e){let n=e.comparisonStart||e.comparisonEnd;n&&!n.firstChange&&this._setRanges(this.selected),e.activeDrag&&!this.activeDrag&&this._clearPreview()}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_dateSelected(e){let n=e.value,r=this._getDateFromDayOfMonth(n),o,a;this._selected instanceof Yn?(o=this._getDateInCurrentMonth(this._selected.start),a=this._getDateInCurrentMonth(this._selected.end)):o=a=this._getDateInCurrentMonth(this._selected),(o!==n||a!==n)&&this.selectedChange.emit(r),this._userSelection.emit({value:r,event:e.event}),this._clearPreview(),this._changeDetectorRef.markForCheck()}_updateActiveDate(e){let n=e.value,r=this._activeDate;this.activeDate=this._getDateFromDayOfMonth(n),this._dateAdapter.compareDate(r,this.activeDate)&&this.activeDateChange.emit(this._activeDate)}_handleCalendarBodyKeydown(e){let n=this._activeDate,r=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,r?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,r?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,-7);break;case 40:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,7);break;case 36:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,1-this._dateAdapter.getDate(this._activeDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,this._dateAdapter.getNumDaysInMonth(this._activeDate)-this._dateAdapter.getDate(this._activeDate));break;case 33:this.activeDate=e.altKey?this._dateAdapter.addCalendarYears(this._activeDate,-1):this._dateAdapter.addCalendarMonths(this._activeDate,-1);break;case 34:this.activeDate=e.altKey?this._dateAdapter.addCalendarYears(this._activeDate,1):this._dateAdapter.addCalendarMonths(this._activeDate,1);break;case 13:case 32:this._selectionKeyPressed=!0,this._canSelect(this._activeDate)&&e.preventDefault();return;case 27:this._previewEnd()!=null&&!Ct(e)&&(this._clearPreview(),this.activeDrag?this.dragEnded.emit({value:null,event:e}):(this.selectedChange.emit(null),this._userSelection.emit({value:null,event:e})),e.preventDefault(),e.stopPropagation());return;default:return}this._dateAdapter.compareDate(n,this.activeDate)&&(this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked()),e.preventDefault()}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._canSelect(this._activeDate)&&this._dateSelected({value:this._dateAdapter.getDate(this._activeDate),event:e}),this._selectionKeyPressed=!1)}_init(){this._setRanges(this.selected),this._todayDate.set(this._getCellCompareValue(this._dateAdapter.today())),this._monthLabel.set(this._dateFormats.display.monthLabel?this._dateAdapter.format(this.activeDate,this._dateFormats.display.monthLabel):this._dateAdapter.getMonthNames("short")[this._dateAdapter.getMonth(this.activeDate)].toLocaleUpperCase());let e=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),1);this._firstWeekOffset.set((Yb+this._dateAdapter.getDayOfWeek(e)-this._dateAdapter.getFirstDayOfWeek())%Yb),this._initWeekdays(),this._createWeekCells(),this._changeDetectorRef.markForCheck()}_focusActiveCell(e){this._matCalendarBody._focusActiveCell(e)}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_previewChanged({event:e,value:n}){if(this._rangeStrategy){let r=n?n.rawValue:null,o=this._rangeStrategy.createPreview(r,this.selected,e);if(this._previewStart.set(this._getCellCompareValue(o.start)),this._previewEnd.set(this._getCellCompareValue(o.end)),this.activeDrag&&r){let a=this._rangeStrategy.createDrag?.(this.activeDrag.value,this.selected,r,e);a&&(this._previewStart.set(this._getCellCompareValue(a.start)),this._previewEnd.set(this._getCellCompareValue(a.end)))}}}_dragEnded(e){if(this.activeDrag)if(e.value){let n=this._rangeStrategy?.createDrag?.(this.activeDrag.value,this.selected,e.value,e.event);this.dragEnded.emit({value:n??null,event:e.event})}else this.dragEnded.emit({value:null,event:e.event})}_getDateFromDayOfMonth(e){return this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),e)}_initWeekdays(){let e=this._dateAdapter.getFirstDayOfWeek(),n=this._dateAdapter.getDayOfWeekNames("narrow"),o=this._dateAdapter.getDayOfWeekNames("long").map((a,s)=>({long:a,narrow:n[s],id:uB++}));this._weekdays.set(o.slice(e).concat(o.slice(0,e)))}_createWeekCells(){let e=this._dateAdapter.getNumDaysInMonth(this.activeDate),n=this._dateAdapter.getDateNames(),r=[[]];for(let o=0,a=this._firstWeekOffset();o<e;o++,a++){a==Yb&&(r.push([]),a=0);let s=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),o+1),l=this._shouldEnableDate(s),d=this._dateAdapter.format(s,this._dateFormats.display.dateA11yLabel),u=this.dateClass?this.dateClass(s,"month"):void 0;r[r.length-1].push(new Kc(o+1,n[o],d,l,u,this._getCellCompareValue(s),s))}this._weeks.set(r)}_shouldEnableDate(e){return!!e&&(!this.minDate||this._dateAdapter.compareDate(e,this.minDate)>=0)&&(!this.maxDate||this._dateAdapter.compareDate(e,this.maxDate)<=0)&&(!this.dateFilter||this.dateFilter(e))}_getDateInCurrentMonth(e){return e&&this._hasSameMonthAndYear(e,this.activeDate)?this._dateAdapter.getDate(e):null}_hasSameMonthAndYear(e,n){return!!(e&&n&&this._dateAdapter.getMonth(e)==this._dateAdapter.getMonth(n)&&this._dateAdapter.getYear(e)==this._dateAdapter.getYear(n))}_getCellCompareValue(e){if(e){let n=this._dateAdapter.getYear(e),r=this._dateAdapter.getMonth(e),o=this._dateAdapter.getDate(e);return new Date(n,r,o).getTime()}return null}_isRtl(){return this._dir&&this._dir.value==="rtl"}_setRanges(e){e instanceof Yn?(this._rangeStart.set(this._getCellCompareValue(e.start)),this._rangeEnd.set(this._getCellCompareValue(e.end)),this._isRange.set(!0)):(this._rangeStart.set(this._getCellCompareValue(e)),this._rangeEnd.set(this._rangeStart()),this._isRange.set(!1)),this._comparisonRangeStart.set(this._getCellCompareValue(this.comparisonStart)),this._comparisonRangeEnd.set(this._getCellCompareValue(this.comparisonEnd))}_canSelect(e){return!this.dateFilter||this.dateFilter(e)}_clearPreview(){this._previewStart.set(null),this._previewEnd.set(null)}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=M({type:t,selectors:[["mat-month-view"]],viewQuery:function(n,r){if(n&1&&Ce(Hs,5),n&2){let o;R(o=O())&&(r._matCalendarBody=o.first)}},inputs:{activeDate:"activeDate",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass",comparisonStart:"comparisonStart",comparisonEnd:"comparisonEnd",startDateAccessibleName:"startDateAccessibleName",endDateAccessibleName:"endDateAccessibleName",activeDrag:"activeDrag"},outputs:{selectedChange:"selectedChange",_userSelection:"_userSelection",dragStarted:"dragStarted",dragEnded:"dragEnded",activeDateChange:"activeDateChange"},exportAs:["matMonthView"],features:[Be],decls:8,vars:14,consts:[["role","grid",1,"mat-calendar-table"],[1,"mat-calendar-table-header"],["scope","col"],["aria-hidden","true"],["colspan","7",1,"mat-calendar-table-header-divider"],["mat-calendar-body","",3,"selectedValueChange","activeDateChange","previewChange","dragStarted","dragEnded","keyup","keydown","label","rows","todayValue","startValue","endValue","comparisonStart","comparisonEnd","previewStart","previewEnd","isRange","labelMinRequiredCells","activeCell","startDateAccessibleName","endDateAccessibleName"],[1,"cdk-visually-hidden"]],template:function(n,r){n&1&&(m(0,"table",0)(1,"thead",1)(2,"tr"),Me(3,Z2,5,2,"th",2,JS),h(),m(5,"tr",3),T(6,"th",4),h()(),m(7,"tbody",5),E("selectedValueChange",function(a){return r._dateSelected(a)})("activeDateChange",function(a){return r._updateActiveDate(a)})("previewChange",function(a){return r._previewChanged(a)})("dragStarted",function(a){return r.dragStarted.emit(a)})("dragEnded",function(a){return r._dragEnded(a)})("keyup",function(a){return r._handleCalendarBodyKeyup(a)})("keydown",function(a){return r._handleCalendarBodyKeydown(a)}),h()()),n&2&&(p(3),Se(r._weekdays()),p(4),A("label",r._monthLabel())("rows",r._weeks())("todayValue",r._todayDate())("startValue",r._rangeStart())("endValue",r._rangeEnd())("comparisonStart",r._comparisonRangeStart())("comparisonEnd",r._comparisonRangeEnd())("previewStart",r._previewStart())("previewEnd",r._previewEnd())("isRange",r._isRange())("labelMinRequiredCells",3)("activeCell",r._dateAdapter.getDate(r.activeDate)-1)("startDateAccessibleName",r.startDateAccessibleName)("endDateAccessibleName",r.endDateAccessibleName))},dependencies:[Hs],encapsulation:2,changeDetection:0})}return t})(),kn=24,Qb=4,KS=(()=>{class t{_changeDetectorRef=c(xe);_dateAdapter=c(pn,{optional:!0});_dir=c(nt,{optional:!0});_rerenderSubscription=ae.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(e){let n=this._activeDate,r=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(r,this.minDate,this.maxDate),tI(this._dateAdapter,n,this._activeDate,this.minDate,this.maxDate)||this._init()}_activeDate;get selected(){return this._selected}set selected(e){e instanceof Yn?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setSelectedYear(e)}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;selectedChange=new I;yearSelected=new I;activeDateChange=new I;_matCalendarBody;_years=x([]);_todayYear=x(0);_selectedYear=x(null);constructor(){this._dateAdapter,this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(Qe(null)).subscribe(()=>this._init())}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_init(){this._todayYear.set(this._dateAdapter.getYear(this._dateAdapter.today()));let n=this._dateAdapter.getYear(this._activeDate)-Zc(this._dateAdapter,this.activeDate,this.minDate,this.maxDate),r=[];for(let o=0,a=[];o<kn;o++)a.push(n+o),a.length==Qb&&(r.push(a.map(s=>this._createCellForYear(s))),a=[]);this._years.set(r),this._changeDetectorRef.markForCheck()}_yearSelected(e){let n=e.value,r=this._dateAdapter.createDate(n,0,1),o=this._getDateFromYear(n);this.yearSelected.emit(r),this.selectedChange.emit(o)}_updateActiveDate(e){let n=e.value,r=this._activeDate;this.activeDate=this._getDateFromYear(n),this._dateAdapter.compareDate(r,this.activeDate)&&this.activeDateChange.emit(this.activeDate)}_handleCalendarBodyKeydown(e){let n=this._activeDate,r=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,r?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,r?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,-Qb);break;case 40:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,Qb);break;case 36:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,-Zc(this._dateAdapter,this.activeDate,this.minDate,this.maxDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,kn-Zc(this._dateAdapter,this.activeDate,this.minDate,this.maxDate)-1);break;case 33:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?-kn*10:-kn);break;case 34:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?kn*10:kn);break;case 13:case 32:this._selectionKeyPressed=!0;break;default:return}this._dateAdapter.compareDate(n,this.activeDate)&&this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked(),e.preventDefault()}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._yearSelected({value:this._dateAdapter.getYear(this._activeDate),event:e}),this._selectionKeyPressed=!1)}_getActiveCell(){return Zc(this._dateAdapter,this.activeDate,this.minDate,this.maxDate)}_focusActiveCell(){this._matCalendarBody._focusActiveCell()}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_getDateFromYear(e){let n=this._dateAdapter.getMonth(this.activeDate),r=this._dateAdapter.getNumDaysInMonth(this._dateAdapter.createDate(e,n,1));return this._dateAdapter.createDate(e,n,Math.min(this._dateAdapter.getDate(this.activeDate),r))}_createCellForYear(e){let n=this._dateAdapter.createDate(e,0,1),r=this._dateAdapter.getYearName(n),o=this.dateClass?this.dateClass(n,"multi-year"):void 0;return new Kc(e,r,r,this._shouldEnableYear(e),o)}_shouldEnableYear(e){if(e==null||this.maxDate&&e>this._dateAdapter.getYear(this.maxDate)||this.minDate&&e<this._dateAdapter.getYear(this.minDate))return!1;if(!this.dateFilter)return!0;let n=this._dateAdapter.createDate(e,0,1);for(let r=n;this._dateAdapter.getYear(r)==e;r=this._dateAdapter.addCalendarDays(r,1))if(this.dateFilter(r))return!0;return!1}_isRtl(){return this._dir&&this._dir.value==="rtl"}_setSelectedYear(e){if(this._selectedYear.set(null),e instanceof Yn){let n=e.start||e.end;n&&this._selectedYear.set(this._dateAdapter.getYear(n))}else e&&this._selectedYear.set(this._dateAdapter.getYear(e))}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=M({type:t,selectors:[["mat-multi-year-view"]],viewQuery:function(n,r){if(n&1&&Ce(Hs,5),n&2){let o;R(o=O())&&(r._matCalendarBody=o.first)}},inputs:{activeDate:"activeDate",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass"},outputs:{selectedChange:"selectedChange",yearSelected:"yearSelected",activeDateChange:"activeDateChange"},exportAs:["matMultiYearView"],decls:5,vars:7,consts:[["role","grid",1,"mat-calendar-table"],["aria-hidden","true",1,"mat-calendar-table-header"],["colspan","4",1,"mat-calendar-table-header-divider"],["mat-calendar-body","",3,"selectedValueChange","activeDateChange","keyup","keydown","rows","todayValue","startValue","endValue","numCols","cellAspectRatio","activeCell"]],template:function(n,r){n&1&&(m(0,"table",0)(1,"thead",1)(2,"tr"),T(3,"th",2),h()(),m(4,"tbody",3),E("selectedValueChange",function(a){return r._yearSelected(a)})("activeDateChange",function(a){return r._updateActiveDate(a)})("keyup",function(a){return r._handleCalendarBodyKeyup(a)})("keydown",function(a){return r._handleCalendarBodyKeydown(a)}),h()()),n&2&&(p(4),A("rows",r._years())("todayValue",r._todayYear())("startValue",r._selectedYear())("endValue",r._selectedYear())("numCols",4)("cellAspectRatio",4/7)("activeCell",r._getActiveCell()))},dependencies:[Hs],encapsulation:2,changeDetection:0})}return t})();function tI(t,i,e,n,r){let o=t.getYear(i),a=t.getYear(e),s=nI(t,n,r);return Math.floor((o-s)/kn)===Math.floor((a-s)/kn)}function Zc(t,i,e,n){let r=t.getYear(i);return mB(r-nI(t,e,n),kn)}function nI(t,i,e){let n=0;return e?n=t.getYear(e)-kn+1:i&&(n=t.getYear(i)),n}function mB(t,i){return(t%i+i)%i}var XS=(()=>{class t{_changeDetectorRef=c(xe);_dateFormats=c(da,{optional:!0});_dateAdapter=c(pn,{optional:!0});_dir=c(nt,{optional:!0});_rerenderSubscription=ae.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(e){let n=this._activeDate,r=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(r,this.minDate,this.maxDate),this._dateAdapter.getYear(n)!==this._dateAdapter.getYear(this._activeDate)&&this._init()}_activeDate;get selected(){return this._selected}set selected(e){e instanceof Yn?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setSelectedMonth(e)}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;selectedChange=new I;monthSelected=new I;activeDateChange=new I;_matCalendarBody;_months=x([]);_yearLabel=x("");_todayMonth=x(null);_selectedMonth=x(null);constructor(){this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(Qe(null)).subscribe(()=>this._init())}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_monthSelected(e){let n=e.value,r=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),n,1);this.monthSelected.emit(r);let o=this._getDateFromMonth(n);this.selectedChange.emit(o)}_updateActiveDate(e){let n=e.value,r=this._activeDate;this.activeDate=this._getDateFromMonth(n),this._dateAdapter.compareDate(r,this.activeDate)&&this.activeDateChange.emit(this.activeDate)}_handleCalendarBodyKeydown(e){let n=this._activeDate,r=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,r?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,r?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,-4);break;case 40:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,4);break;case 36:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,-this._dateAdapter.getMonth(this._activeDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,11-this._dateAdapter.getMonth(this._activeDate));break;case 33:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?-10:-1);break;case 34:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?10:1);break;case 13:case 32:this._selectionKeyPressed=!0;break;default:return}this._dateAdapter.compareDate(n,this.activeDate)&&(this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked()),e.preventDefault()}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._monthSelected({value:this._dateAdapter.getMonth(this._activeDate),event:e}),this._selectionKeyPressed=!1)}_init(){this._setSelectedMonth(this.selected),this._todayMonth.set(this._getMonthInCurrentYear(this._dateAdapter.today())),this._yearLabel.set(this._dateAdapter.getYearName(this.activeDate));let e=this._dateAdapter.getMonthNames("short");this._months.set([[0,1,2,3],[4,5,6,7],[8,9,10,11]].map(n=>n.map(r=>this._createCellForMonth(r,e[r])))),this._changeDetectorRef.markForCheck()}_focusActiveCell(){this._matCalendarBody._focusActiveCell()}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_getMonthInCurrentYear(e){return e&&this._dateAdapter.getYear(e)==this._dateAdapter.getYear(this.activeDate)?this._dateAdapter.getMonth(e):null}_getDateFromMonth(e){let n=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,1),r=this._dateAdapter.getNumDaysInMonth(n);return this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,Math.min(this._dateAdapter.getDate(this.activeDate),r))}_createCellForMonth(e,n){let r=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,1),o=this._dateAdapter.format(r,this._dateFormats.display.monthYearA11yLabel),a=this.dateClass?this.dateClass(r,"year"):void 0;return new Kc(e,n.toLocaleUpperCase(),o,this._shouldEnableMonth(e),a)}_shouldEnableMonth(e){let n=this._dateAdapter.getYear(this.activeDate);if(e==null||this._isYearAndMonthAfterMaxDate(n,e)||this._isYearAndMonthBeforeMinDate(n,e))return!1;if(!this.dateFilter)return!0;let r=this._dateAdapter.createDate(n,e,1);for(let o=r;this._dateAdapter.getMonth(o)==e;o=this._dateAdapter.addCalendarDays(o,1))if(this.dateFilter(o))return!0;return!1}_isYearAndMonthAfterMaxDate(e,n){if(this.maxDate){let r=this._dateAdapter.getYear(this.maxDate),o=this._dateAdapter.getMonth(this.maxDate);return e>r||e===r&&n>o}return!1}_isYearAndMonthBeforeMinDate(e,n){if(this.minDate){let r=this._dateAdapter.getYear(this.minDate),o=this._dateAdapter.getMonth(this.minDate);return e<r||e===r&&n<o}return!1}_isRtl(){return this._dir&&this._dir.value==="rtl"}_setSelectedMonth(e){e instanceof Yn?this._selectedMonth.set(this._getMonthInCurrentYear(e.start)||this._getMonthInCurrentYear(e.end)):this._selectedMonth.set(this._getMonthInCurrentYear(e))}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=M({type:t,selectors:[["mat-year-view"]],viewQuery:function(n,r){if(n&1&&Ce(Hs,5),n&2){let o;R(o=O())&&(r._matCalendarBody=o.first)}},inputs:{activeDate:"activeDate",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass"},outputs:{selectedChange:"selectedChange",monthSelected:"monthSelected",activeDateChange:"activeDateChange"},exportAs:["matYearView"],decls:5,vars:9,consts:[["role","grid",1,"mat-calendar-table"],["aria-hidden","true",1,"mat-calendar-table-header"],["colspan","4",1,"mat-calendar-table-header-divider"],["mat-calendar-body","",3,"selectedValueChange","activeDateChange","keyup","keydown","label","rows","todayValue","startValue","endValue","labelMinRequiredCells","numCols","cellAspectRatio","activeCell"]],template:function(n,r){n&1&&(m(0,"table",0)(1,"thead",1)(2,"tr"),T(3,"th",2),h()(),m(4,"tbody",3),E("selectedValueChange",function(a){return r._monthSelected(a)})("activeDateChange",function(a){return r._updateActiveDate(a)})("keyup",function(a){return r._handleCalendarBodyKeyup(a)})("keydown",function(a){return r._handleCalendarBodyKeydown(a)}),h()()),n&2&&(p(4),A("label",r._yearLabel())("rows",r._months())("todayValue",r._todayMonth())("startValue",r._selectedMonth())("endValue",r._selectedMonth())("labelMinRequiredCells",2)("numCols",4)("cellAspectRatio",4/7)("activeCell",r._dateAdapter.getMonth(r.activeDate)))},dependencies:[Hs],encapsulation:2,changeDetection:0})}return t})(),iI=(()=>{class t{_intl=c(Us);calendar=c(Xc);_dateAdapter=c(pn,{optional:!0});_dateFormats=c(da,{optional:!0});_periodButtonText;_periodButtonDescription;_periodButtonLabel;_prevButtonLabel;_nextButtonLabel;constructor(){c(qe).load(Bi);let e=c(xe);this._updateLabels(),this.calendar.stateChanges.subscribe(()=>{this._updateLabels(),e.markForCheck()})}get periodButtonText(){return this._periodButtonText}get periodButtonDescription(){return this._periodButtonDescription}get periodButtonLabel(){return this._periodButtonLabel}get prevButtonLabel(){return this._prevButtonLabel}get nextButtonLabel(){return this._nextButtonLabel}currentPeriodClicked(){this.calendar.currentView=this.calendar.currentView=="month"?"multi-year":"month"}previousClicked(){this.previousEnabled()&&(this.calendar.activeDate=this.calendar.currentView=="month"?this._dateAdapter.addCalendarMonths(this.calendar.activeDate,-1):this._dateAdapter.addCalendarYears(this.calendar.activeDate,this.calendar.currentView=="year"?-1:-kn))}nextClicked(){this.nextEnabled()&&(this.calendar.activeDate=this.calendar.currentView=="month"?this._dateAdapter.addCalendarMonths(this.calendar.activeDate,1):this._dateAdapter.addCalendarYears(this.calendar.activeDate,this.calendar.currentView=="year"?1:kn))}previousEnabled(){return this.calendar.minDate?!this.calendar.minDate||!this._isSameView(this.calendar.activeDate,this.calendar.minDate):!0}nextEnabled(){return!this.calendar.maxDate||!this._isSameView(this.calendar.activeDate,this.calendar.maxDate)}_updateLabels(){let e=this.calendar,n=this._intl,r=this._dateAdapter;e.currentView==="month"?(this._periodButtonText=r.format(e.activeDate,this._dateFormats.display.monthYearLabel).toLocaleUpperCase(),this._periodButtonDescription=r.format(e.activeDate,this._dateFormats.display.monthYearLabel).toLocaleUpperCase(),this._periodButtonLabel=n.switchToMultiYearViewLabel,this._prevButtonLabel=n.prevMonthLabel,this._nextButtonLabel=n.nextMonthLabel):e.currentView==="year"?(this._periodButtonText=r.getYearName(e.activeDate),this._periodButtonDescription=r.getYearName(e.activeDate),this._periodButtonLabel=n.switchToMonthViewLabel,this._prevButtonLabel=n.prevYearLabel,this._nextButtonLabel=n.nextYearLabel):(this._periodButtonText=n.formatYearRange(...this._formatMinAndMaxYearLabels()),this._periodButtonDescription=n.formatYearRangeLabel(...this._formatMinAndMaxYearLabels()),this._periodButtonLabel=n.switchToMonthViewLabel,this._prevButtonLabel=n.prevMultiYearLabel,this._nextButtonLabel=n.nextMultiYearLabel)}_isSameView(e,n){return this.calendar.currentView=="month"?this._dateAdapter.getYear(e)==this._dateAdapter.getYear(n)&&this._dateAdapter.getMonth(e)==this._dateAdapter.getMonth(n):this.calendar.currentView=="year"?this._dateAdapter.getYear(e)==this._dateAdapter.getYear(n):tI(this._dateAdapter,e,n,this.calendar.minDate,this.calendar.maxDate)}_formatMinAndMaxYearLabels(){let n=this._dateAdapter.getYear(this.calendar.activeDate)-Zc(this._dateAdapter,this.calendar.activeDate,this.calendar.minDate,this.calendar.maxDate),r=n+kn-1,o=this._dateAdapter.getYearName(this._dateAdapter.createDate(n,0,1)),a=this._dateAdapter.getYearName(this._dateAdapter.createDate(r,0,1));return[o,a]}_periodButtonLabelId=c(Ye).getId("mat-calendar-period-label-");static \u0275fac=function(n){return new(n||t)};static \u0275cmp=M({type:t,selectors:[["mat-calendar-header"]],exportAs:["matCalendarHeader"],ngContentSelectors:K2,decls:17,vars:13,consts:[[1,"mat-calendar-header"],[1,"mat-calendar-controls"],["aria-live","polite",1,"cdk-visually-hidden",3,"id"],["matButton","","type","button",1,"mat-calendar-period-button",3,"click"],["aria-hidden","true"],["viewBox","0 0 10 5","focusable","false","aria-hidden","true",1,"mat-calendar-arrow"],["points","0,0 5,5 10,0"],[1,"mat-calendar-spacer"],["matIconButton","","type","button","disabledInteractive","",1,"mat-calendar-previous-button",3,"click","disabled","matTooltip"],["viewBox","0 0 24 24","focusable","false","aria-hidden","true"],["d","M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"],["matIconButton","","type","button","disabledInteractive","",1,"mat-calendar-next-button",3,"click","disabled","matTooltip"],["d","M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"]],template:function(n,r){n&1&&(De(),m(0,"div",0)(1,"div",1)(2,"span",2),g(3),h(),m(4,"button",3),E("click",function(){return r.currentPeriodClicked()}),m(5,"span",4),g(6),h(),Si(),m(7,"svg",5),T(8,"polygon",6),h()(),ka(),T(9,"div",7),te(10),m(11,"button",8),E("click",function(){return r.previousClicked()}),Si(),m(12,"svg",9),T(13,"path",10),h()(),ka(),m(14,"button",11),E("click",function(){return r.nextClicked()}),Si(),m(15,"svg",9),T(16,"path",12),h()()()()),n&2&&(p(2),A("id",r._periodButtonLabelId),p(),oe(r.periodButtonDescription),p(),K("aria-label",r.periodButtonLabel)("aria-describedby",r._periodButtonLabelId),p(2),oe(r.periodButtonText),p(),F("mat-calendar-invert",r.calendar.currentView!=="month"),p(4),A("disabled",!r.previousEnabled())("matTooltip",r.prevButtonLabel),K("aria-label",r.prevButtonLabel),p(3),A("disabled",!r.nextEnabled())("matTooltip",r.nextButtonLabel),K("aria-label",r.nextButtonLabel))},dependencies:[$t,ji,wr],encapsulation:2,changeDetection:0})}return t})(),Xc=(()=>{class t{_dateAdapter=c(pn,{optional:!0});_dateFormats=c(da,{optional:!0});_changeDetectorRef=c(xe);_elementRef=c(B);headerComponent;_calendarHeaderPortal;_intlChanges;_moveFocusOnNextTick=!1;get startAt(){return this._startAt}set startAt(e){this._startAt=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_startAt=null;startView="month";get selected(){return this._selected}set selected(e){e instanceof Yn?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;selectedChange=new I;yearSelected=new I;monthSelected=new I;viewChanged=new I(!0);_userSelection=new I;_userDragDrop=new I;monthView;yearView;multiYearView;get activeDate(){return this._clampedActiveDate}set activeDate(e){this._clampedActiveDate=this._dateAdapter.clampDate(e,this.minDate,this.maxDate),this.stateChanges.next(),this._changeDetectorRef.markForCheck()}_clampedActiveDate;get currentView(){return this._currentView}set currentView(e){let n=this._currentView!==e?e:null;this._currentView=e,this._moveFocusOnNextTick=!0,this._changeDetectorRef.markForCheck(),n&&(this.stateChanges.next(),this.viewChanged.emit(n))}_currentView;_activeDrag=null;stateChanges=new S;constructor(){this._intlChanges=c(Us).changes.subscribe(()=>{this._changeDetectorRef.markForCheck(),this.stateChanges.next()})}ngAfterContentInit(){this._calendarHeaderPortal=new In(this.headerComponent||iI),this.activeDate=this.startAt||this._dateAdapter.today(),this._currentView=this.startView}ngAfterViewChecked(){this._moveFocusOnNextTick&&(this._moveFocusOnNextTick=!1,this.focusActiveCell())}ngOnDestroy(){this._intlChanges.unsubscribe(),this.stateChanges.complete()}ngOnChanges(e){let n=e.minDate&&!this._dateAdapter.sameDate(e.minDate.previousValue,e.minDate.currentValue)?e.minDate:void 0,r=e.maxDate&&!this._dateAdapter.sameDate(e.maxDate.previousValue,e.maxDate.currentValue)?e.maxDate:void 0,o=n||r||e.dateFilter;if(o&&!o.firstChange){let a=this._getCurrentViewComponent();a&&(this._elementRef.nativeElement.contains(Li())&&(this._moveFocusOnNextTick=!0),this._changeDetectorRef.detectChanges(),a._init())}this.stateChanges.next()}focusActiveCell(){this._getCurrentViewComponent()?._focusActiveCell(!1)}updateTodaysDate(){this._getCurrentViewComponent()?._init()}_dateSelected(e){let n=e.value;(this.selected instanceof Yn||n&&!this._dateAdapter.sameDate(n,this.selected))&&this.selectedChange.emit(n),this._userSelection.emit(e)}_yearSelectedInMultiYearView(e){this.yearSelected.emit(e)}_monthSelectedInYearView(e){this.monthSelected.emit(e)}_goToDateInView(e,n){this.activeDate=e,this.currentView=n}_dragStarted(e){this._activeDrag=e}_dragEnded(e){this._activeDrag&&(e.value&&this._userDragDrop.emit(e),this._activeDrag=null)}_getCurrentViewComponent(){return this.monthView||this.yearView||this.multiYearView}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=M({type:t,selectors:[["mat-calendar"]],viewQuery:function(n,r){if(n&1&&Ce(ZS,5)(XS,5)(KS,5),n&2){let o;R(o=O())&&(r.monthView=o.first),R(o=O())&&(r.yearView=o.first),R(o=O())&&(r.multiYearView=o.first)}},hostAttrs:[1,"mat-calendar"],inputs:{headerComponent:"headerComponent",startAt:"startAt",startView:"startView",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass",comparisonStart:"comparisonStart",comparisonEnd:"comparisonEnd",startDateAccessibleName:"startDateAccessibleName",endDateAccessibleName:"endDateAccessibleName"},outputs:{selectedChange:"selectedChange",yearSelected:"yearSelected",monthSelected:"monthSelected",viewChanged:"viewChanged",_userSelection:"_userSelection",_userDragDrop:"_userDragDrop"},exportAs:["matCalendar"],features:[Ue([dB]),Be],decls:5,vars:2,consts:[[3,"cdkPortalOutlet"],["cdkMonitorSubtreeFocus","","tabindex","-1",1,"mat-calendar-content"],[3,"activeDate","selected","dateFilter","maxDate","minDate","dateClass","comparisonStart","comparisonEnd","startDateAccessibleName","endDateAccessibleName","activeDrag"],[3,"activeDate","selected","dateFilter","maxDate","minDate","dateClass"],[3,"activeDateChange","_userSelection","dragStarted","dragEnded","activeDate","selected","dateFilter","maxDate","minDate","dateClass","comparisonStart","comparisonEnd","startDateAccessibleName","endDateAccessibleName","activeDrag"],[3,"activeDateChange","monthSelected","selectedChange","activeDate","selected","dateFilter","maxDate","minDate","dateClass"],[3,"activeDateChange","yearSelected","selectedChange","activeDate","selected","dateFilter","maxDate","minDate","dateClass"]],template:function(n,r){if(n&1&&(dt(0,X2,0,0,"ng-template",0),m(1,"div",1),j(2,J2,1,11,"mat-month-view",2)(3,eB,1,6,"mat-year-view",3)(4,tB,1,6,"mat-multi-year-view",3),h()),n&2){let o;A("cdkPortalOutlet",r._calendarHeaderPortal),p(2),H((o=r.currentView)==="month"?2:o==="year"?3:o==="multi-year"?4:-1)}},dependencies:[fn,yc,ZS,XS,KS],styles:[`.mat-calendar {
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
`],encapsulation:2,changeDetection:0})}return t})();var fB=(()=>{class t{_elementRef=c(B);_animationsDisabled=je();_changeDetectorRef=c(xe);_globalModel=c(yh);_dateAdapter=c(pn);_ngZone=c(V);_rangeSelectionStrategy=c(eI,{optional:!0});_stateChanges;_model;_eventCleanups;_animationFallback;_calendar;color;datepicker;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;_isAbove=!1;_animationDone=new S;_isAnimating=!1;_closeButtonText;_closeButtonFocused=!1;_actionsPortal=null;_dialogLabelId=null;constructor(){if(c(qe).load(Bi),this._closeButtonText=c(Us).closeCalendarLabel,!this._animationsDisabled){let e=this._elementRef.nativeElement,n=c(Re);this._eventCleanups=this._ngZone.runOutsideAngular(()=>[n.listen(e,"animationstart",this._handleAnimationEvent),n.listen(e,"animationend",this._handleAnimationEvent),n.listen(e,"animationcancel",this._handleAnimationEvent)])}}ngAfterViewInit(){this._stateChanges=this.datepicker.stateChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()}),this._calendar.focusActiveCell()}ngOnDestroy(){clearTimeout(this._animationFallback),this._eventCleanups?.forEach(e=>e()),this._stateChanges?.unsubscribe(),this._animationDone.complete()}_handleUserSelection(e){let n=this._model.selection,r=e.value,o=n instanceof Yn;if(o&&this._rangeSelectionStrategy){let a=this._rangeSelectionStrategy.selectionFinished(r,n,e.event);this._model.updateSelection(a,this)}else r&&(o||!this._dateAdapter.sameDate(r,n))&&this._model.add(r);(!this._model||this._model.isComplete())&&!this._actionsPortal&&this.datepicker.close()}_handleUserDragDrop(e){this._model.updateSelection(e.value,this)}_startExitAnimation(){this._elementRef.nativeElement.classList.add("mat-datepicker-content-exit"),this._animationsDisabled?this._animationDone.next():(clearTimeout(this._animationFallback),this._animationFallback=setTimeout(()=>{this._isAnimating||this._animationDone.next()},200))}_handleAnimationEvent=e=>{let n=this._elementRef.nativeElement;e.target!==n||!e.animationName.startsWith("_mat-datepicker-content")||(clearTimeout(this._animationFallback),this._isAnimating=e.type==="animationstart",n.classList.toggle("mat-datepicker-content-animating",this._isAnimating),this._isAnimating||this._animationDone.next())};_getSelected(){return this._model.selection}_applyPendingSelection(){this._model!==this._globalModel&&this._globalModel.updateSelection(this._model.selection,this)}_assignActions(e,n){this._model=e?this._globalModel.clone():this._globalModel,this._actionsPortal=e,n&&this._changeDetectorRef.detectChanges()}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=M({type:t,selectors:[["mat-datepicker-content"]],viewQuery:function(n,r){if(n&1&&Ce(Xc,5),n&2){let o;R(o=O())&&(r._calendar=o.first)}},hostAttrs:[1,"mat-datepicker-content"],hostVars:6,hostBindings:function(n,r){n&2&&(It(r.color?"mat-"+r.color:""),F("mat-datepicker-content-touch",r.datepicker.touchUi)("mat-datepicker-content-animations-enabled",!r._animationsDisabled))},inputs:{color:"color"},exportAs:["matDatepickerContent"],decls:5,vars:26,consts:[["cdkTrapFocus","","role","dialog",1,"mat-datepicker-content-container"],[3,"yearSelected","monthSelected","viewChanged","_userSelection","_userDragDrop","id","startAt","startView","minDate","maxDate","dateFilter","headerComponent","selected","dateClass","comparisonStart","comparisonEnd","startDateAccessibleName","endDateAccessibleName"],[3,"cdkPortalOutlet"],["type","button","matButton","elevated",1,"mat-datepicker-close-button",3,"focus","blur","click","color"]],template:function(n,r){n&1&&(m(0,"div",0)(1,"mat-calendar",1),E("yearSelected",function(a){return r.datepicker._selectYear(a)})("monthSelected",function(a){return r.datepicker._selectMonth(a)})("viewChanged",function(a){return r.datepicker._viewChanged(a)})("_userSelection",function(a){return r._handleUserSelection(a)})("_userDragDrop",function(a){return r._handleUserDragDrop(a)}),h(),dt(2,nB,0,0,"ng-template",2),m(3,"button",3),E("focus",function(){return r._closeButtonFocused=!0})("blur",function(){return r._closeButtonFocused=!1})("click",function(){return r.datepicker.close()}),g(4),h()()),n&2&&(F("mat-datepicker-content-container-with-custom-header",r.datepicker.calendarHeaderComponent)("mat-datepicker-content-container-with-actions",r._actionsPortal),K("aria-modal",!0)("aria-labelledby",r._dialogLabelId??void 0),p(),It(r.datepicker.panelClass),A("id",r.datepicker.id)("startAt",r.datepicker.startAt)("startView",r.datepicker.startView)("minDate",r.datepicker._getMinDate())("maxDate",r.datepicker._getMaxDate())("dateFilter",r.datepicker._getDateFilter())("headerComponent",r.datepicker.calendarHeaderComponent)("selected",r._getSelected())("dateClass",r.datepicker.dateClass)("comparisonStart",r.comparisonStart)("comparisonEnd",r.comparisonEnd)("startDateAccessibleName",r.startDateAccessibleName)("endDateAccessibleName",r.endDateAccessibleName),p(),A("cdkPortalOutlet",r._actionsPortal),p(),F("cdk-visually-hidden",!r._closeButtonFocused),A("color",r.color||"primary"),p(),oe(r._closeButtonText))},dependencies:[Zv,Xc,fn,$t],styles:[`@keyframes _mat-datepicker-content-dropdown-enter {
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
`],encapsulation:2,changeDetection:0})}return t})();var hB=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=N({type:t,selectors:[["","matDatepickerToggleIcon",""]]})}return t})(),pB=(()=>{class t{_intl=c(Us);_changeDetectorRef=c(xe);_stateChanges=ae.EMPTY;datepicker;tabIndex=null;ariaLabel;get disabled(){return this._disabled===void 0&&this.datepicker?this.datepicker.disabled:!!this._disabled}set disabled(e){this._disabled=e}_disabled;disableRipple=!1;_customIcon;_button;constructor(){let e=c(new oi("tabindex"),{optional:!0}),n=Number(e);this.tabIndex=n||n===0?n:null}ngOnChanges(e){e.datepicker&&this._watchStateChanges()}ngOnDestroy(){this._stateChanges.unsubscribe()}ngAfterContentInit(){this._watchStateChanges()}_open(e){this.datepicker&&!this.disabled&&(this.datepicker.open(),e.stopPropagation())}_watchStateChanges(){let e=this.datepicker?this.datepicker.stateChanges:q(),n=this.datepicker&&this.datepicker.datepickerInput?this.datepicker.datepickerInput.stateChanges:q(),r=this.datepicker?Nt(this.datepicker.openedStream,this.datepicker.closedStream):q();this._stateChanges.unsubscribe(),this._stateChanges=Nt(this._intl.changes,e,n,r).subscribe(()=>this._changeDetectorRef.markForCheck())}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=M({type:t,selectors:[["mat-datepicker-toggle"]],contentQueries:function(n,r,o){if(n&1&&vt(o,hB,5),n&2){let a;R(a=O())&&(r._customIcon=a.first)}},viewQuery:function(n,r){if(n&1&&Ce(iB,5),n&2){let o;R(o=O())&&(r._button=o.first)}},hostAttrs:[1,"mat-datepicker-toggle"],hostVars:8,hostBindings:function(n,r){n&1&&E("click",function(a){return r._open(a)}),n&2&&(K("tabindex",null)("data-mat-calendar",r.datepicker?r.datepicker.id:null),F("mat-datepicker-toggle-active",r.datepicker&&r.datepicker.opened)("mat-accent",r.datepicker&&r.datepicker.color==="accent")("mat-warn",r.datepicker&&r.datepicker.color==="warn"))},inputs:{datepicker:[0,"for","datepicker"],tabIndex:"tabIndex",ariaLabel:[0,"aria-label","ariaLabel"],disabled:[2,"disabled","disabled",Z],disableRipple:"disableRipple"},exportAs:["matDatepickerToggle"],features:[Be],ngContentSelectors:oB,decls:4,vars:7,consts:[["button",""],["matIconButton","","type","button",3,"tabIndex","disabled","disableRipple"],["viewBox","0 0 24 24","width","24px","height","24px","fill","currentColor","focusable","false","aria-hidden","true",1,"mat-datepicker-toggle-default-icon"],["d","M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"]],template:function(n,r){n&1&&(De(rB),m(0,"button",1,0),j(2,aB,2,0,":svg:svg",2),te(3),h()),n&2&&(A("tabIndex",r.disabled?-1:r.tabIndex)("disabled",r.disabled)("disableRipple",r.disableRipple),K("aria-haspopup",r.datepicker?"dialog":null)("aria-label",r.ariaLabel||r._intl.openCalendarLabel)("aria-expanded",r.datepicker?r.datepicker.opened:null),p(2),H(r._customIcon?-1:2))},dependencies:[ji],styles:[`.mat-datepicker-toggle {
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
`],encapsulation:2,changeDetection:0})}return t})();var rI=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=$({type:t});static \u0275inj=z({providers:[Us],imports:[ft,Wn,Ko,Hi,fB,pB,iI,ve,$n]})}return t})();var _B=/^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|(?:(?:\+|-)\d{2}:\d{2}))?)?$/,vB=/^(\d?\d)[:.](\d?\d)(?:[:.](\d?\d))?\s*(AM|PM)?$/i;function Zb(t,i){let e=Array(t);for(let n=0;n<t;n++)e[n]=i(n);return e}var bB=(()=>{class t extends pn{_matDateLocale=c(Ub,{optional:!0});constructor(){super();let e=c(Ub,{optional:!0});e!==void 0&&(this._matDateLocale=e),super.setLocale(this._matDateLocale)}getYear(e){return e.getFullYear()}getMonth(e){return e.getMonth()}getDate(e){return e.getDate()}getDayOfWeek(e){return e.getDay()}getMonthNames(e){let n=new Intl.DateTimeFormat(this.locale,{month:e,timeZone:"utc"});return Zb(12,r=>this._format(n,new Date(2017,r,1)))}getDateNames(){let e=new Intl.DateTimeFormat(this.locale,{day:"numeric",timeZone:"utc"});return Zb(31,n=>this._format(e,new Date(2017,0,n+1)))}getDayOfWeekNames(e){let n=new Intl.DateTimeFormat(this.locale,{weekday:e,timeZone:"utc"});return Zb(7,r=>this._format(n,new Date(2017,0,r+1)))}getYearName(e){let n=new Intl.DateTimeFormat(this.locale,{year:"numeric",timeZone:"utc"});return this._format(n,e)}getFirstDayOfWeek(){if(typeof Intl<"u"&&Intl.Locale){let e=new Intl.Locale(this.locale),n=(e.getWeekInfo?.()||e.weekInfo)?.firstDay??0;return n===7?0:n}return 0}getNumDaysInMonth(e){return this.getDate(this._createDateWithOverflow(this.getYear(e),this.getMonth(e)+1,0))}clone(e){return new Date(e.getTime())}createDate(e,n,r){let o=this._createDateWithOverflow(e,n,r);return o.getMonth()!=n,o}today(){return new Date}parse(e,n){return typeof e=="number"?new Date(e):e?new Date(Date.parse(e)):null}format(e,n){if(!this.isValid(e))throw Error("NativeDateAdapter: Cannot format invalid date.");let r=new Intl.DateTimeFormat(this.locale,ne(C({},n),{timeZone:"utc"}));return this._format(r,e)}addCalendarYears(e,n){return this.addCalendarMonths(e,n*12)}addCalendarMonths(e,n){let r=this._createDateWithOverflow(this.getYear(e),this.getMonth(e)+n,this.getDate(e));return this.getMonth(r)!=((this.getMonth(e)+n)%12+12)%12&&(r=this._createDateWithOverflow(this.getYear(r),this.getMonth(r),0)),r}addCalendarDays(e,n){return this._createDateWithOverflow(this.getYear(e),this.getMonth(e),this.getDate(e)+n)}toIso8601(e){return[e.getUTCFullYear(),this._2digit(e.getUTCMonth()+1),this._2digit(e.getUTCDate())].join("-")}deserialize(e){if(typeof e=="string"){if(!e)return null;if(_B.test(e)){let n=new Date(e);if(this.isValid(n))return n}}return super.deserialize(e)}isDateInstance(e){return e instanceof Date}isValid(e){return!isNaN(e.getTime())}invalid(){return new Date(NaN)}setTime(e,n,r,o){let a=this.clone(e);return a.setHours(n,r,o,0),a}getHours(e){return e.getHours()}getMinutes(e){return e.getMinutes()}getSeconds(e){return e.getSeconds()}parseTime(e,n){if(typeof e!="string")return e instanceof Date?new Date(e.getTime()):null;let r=e.trim();if(r.length===0)return null;let o=this._parseTimeString(r);if(o===null){let a=r.replace(/[^0-9:(AM|PM)]/gi,"").trim();a.length>0&&(o=this._parseTimeString(a))}return o||this.invalid()}addSeconds(e,n){return new Date(e.getTime()+n*1e3)}_createDateWithOverflow(e,n,r){let o=new Date;return o.setFullYear(e,n,r),o.setHours(0,0,0,0),o}_2digit(e){return("00"+e).slice(-2)}_format(e,n){let r=new Date;return r.setUTCFullYear(n.getFullYear(),n.getMonth(),n.getDate()),r.setUTCHours(n.getHours(),n.getMinutes(),n.getSeconds(),n.getMilliseconds()),e.format(r)}_parseTimeString(e){let n=e.toUpperCase().match(vB);if(n){let r=parseInt(n[1]),o=parseInt(n[2]),a=n[3]==null?void 0:parseInt(n[3]),s=n[4];if(r===12?r=s==="AM"?0:r:s==="PM"&&(r+=12),Kb(r,0,23)&&Kb(o,0,59)&&(a==null||Kb(a,0,59)))return this.setTime(this.today(),r,o,a||0)}return null}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})();function Kb(t,i,e){return!isNaN(t)&&t>=i&&t<=e}var yB={parse:{dateInput:null,timeInput:null},display:{dateInput:{year:"numeric",month:"numeric",day:"numeric"},timeInput:{hour:"numeric",minute:"numeric"},monthYearLabel:{year:"numeric",month:"short"},dateA11yLabel:{year:"numeric",month:"long",day:"numeric"},monthYearA11yLabel:{year:"numeric",month:"long"},timeOptionLabel:{hour:"numeric",minute:"numeric"}}};var oI=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=$({type:t});static \u0275inj=z({providers:[CB()]})}return t})();function CB(t=yB){return[{provide:pn,useClass:bB},{provide:da,useValue:t}]}function wB(t,i){if(t&1&&(m(0,"p",3),g(1),h(),m(2,"p",9),g(3),h()),t&2){let e=D();p(),_e(" Dagsrapport f\xF6r ",e.childSignal().name," "),p(2),_e(" ",e.dateLabel," ")}}function DB(t,i){t&1&&(m(0,"p",3),g(1," V\xE4lj datum f\xF6r att se n\xE4rvaro och journal "),h())}function xB(t,i){t&1&&g(0," V\xE4lj datum f\xF6r att se n\xE4rvaro och journal ")}function EB(t,i){if(t&1&&g(0),t&2){let e=D();_e(" N\xE4rvaro ",e.dateLabel," ")}}var Ch=class t{childSignal=Ne.required();journalService=c(Vs);attendanceService=c(Jr);selected=x(null);currentJournal=x(null);currentChildAttendance="";dateLabel="";yesterday=new Date;statusOptions=[{value:"NOT_SET",label:"\u2014"},{value:"CHECKED_IN",label:"Incheckad"},{value:"CHECKED_OUT",label:"Utcheckad"},{value:"LEAVE",label:"Ledig"},{value:"ABSENT",label:"Fr\xE5nvarande"}];months=["Januari","Februari","Mars","April","Maj","Juni","Juli","Augusti","September","Oktober","November","December"];days=["S\xF6ndag","M\xE5ndag","Tisdag","Onsdag","Torsdag","Fredag","L\xF6rdag"];constructor(){this.yesterday.setDate(this.yesterday.getDate()-1),Ft(i=>{let e=this.selected(),n=this.childSignal().id;if(!e){this.currentJournal.set(null);return}this.dateLabel=`${this.days[e.getDay()]} ${e.getDate()} ${this.months[e.getMonth()]} ${e.getFullYear()}`;let r=e.getFullYear(),o=String(e.getMonth()+1).padStart(2,"0"),a=String(e.getDate()).padStart(2,"0"),s=`${r}-${o}-${a}`,l=this.attendanceService.getSignal(this.childSignal().id,s)()??"NOT_SET";this.currentChildAttendance=this.statusOptions.find(({value:u})=>u===l)?.label;let d=this.journalService.getJournalByDate(n,s).subscribe({next:u=>{this.currentJournal.set(u)}});i(()=>{d.unsubscribe()})})}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=M({type:t,selectors:[["history"]],inputs:{childSignal:[1,"childSignal"]},outputs:{childSignal:"childSignalChange"},decls:17,vars:8,consts:[[1,"outer-container"],[1,"journal-display"],[1,"journal-header"],[1,"journal-title"],[1,"text-area"],[1,"journal-text"],[1,"calendar-container"],[1,"calendar",3,"selectedChange","selected","maxDate"],[1,"attendance-info"],[1,"bold-label"]],template:function(e,n){if(e&1&&(m(0,"div",0)(1,"mat-card",1)(2,"mat-card-header",2),j(3,wB,4,2),j(4,DB,2,0,"p",3),h(),T(5,"mat-divider"),m(6,"mat-card-content",4)(7,"p",5),g(8),h()()(),m(9,"div",6)(10,"mat-card")(11,"mat-calendar",7),E("selectedChange",function(o){return n.selected.set(o)}),h()(),m(12,"p",8),j(13,xB,1,0),j(14,EB,1,1),m(15,"span",9),g(16),h()()()()),e&2){let r;p(3),H(n.selected()!==null?3:-1),p(),H(n.selected()===null?4:-1),p(4),oe((r=n.currentJournal())==null?null:r.content),p(3),A("selected",n.selected())("maxDate",n.yesterday),p(2),H(n.selected()===null?13:-1),p(),H(n.dateLabel!==""?14:-1),p(2),oe(n.currentChildAttendance)}},dependencies:[Bn,yt,dn,un,rI,Xc,oI,rn],styles:["[_nghost-%COMP%]{display:flex;min-height:0;width:100%;height:100%}.outer-container[_ngcontent-%COMP%]{background:var(--mat-sys-inverse-primary);display:flex;flex-direction:row;justify-content:center;min-height:0;overflow:hidden;flex:1;box-shadow:var(--mat-sys-level2);box-sizing:border-box;padding:1em;gap:1em}.journal-display[_ngcontent-%COMP%]{flex:1;min-height:0;box-shadow:var(--mat-sys-level2);display:flex;flex-direction:column;overflow:hidden}.text-area[_ngcontent-%COMP%]{background-color:var(--mat-sys-surface-variant);min-height:0;overflow-y:auto;border-radius:0% 0% 2% 2%;flex:1}.journal-header[_ngcontent-%COMP%]{display:flex;font-weight:400!important;font-size:large;min-height:11%;background:var(--mat-sys-surface-dim);flex-direction:row;justify-content:center;gap:1em}.calendar-container[_ngcontent-%COMP%]{width:33%;justify-content:center;height:fit-content;box-shadow:var(--mat-sys-level2);border-radius:3%;background:var(--mat-sys-surface-dim)}.attendance-info[_ngcontent-%COMP%]{display:flex;justify-content:center;font-weight:400;gap:1em}.bold-label[_ngcontent-%COMP%]{font-weight:500}.journal-text[_ngcontent-%COMP%]{font:var(--mat-sys-body-large);margin:.5em}.outer-container[_ngcontent-%COMP%]{display:flex}"]})};var wh=class t{childSignal=Ne.required();static \u0275fac=function(e){return new(e||t)};static \u0275cmp=M({type:t,selectors:[["information"]],inputs:{childSignal:[1,"childSignal"]},outputs:{childSignal:"childSignalChange"},decls:34,vars:1,consts:[["journalContent",""],[1,"subrow"],["id","left-card"],[1,"header-text"],["matInput",""],[1,"color"],["cdkScrollable","",1,"subcard"],[1,"gap"],[1,"kontakt"]],template:function(e,n){e&1&&(m(0,"div",1)(1,"mat-card",2)(2,"mat-card-header",3),g(3),h(),m(4,"mat-form-field"),T(5,"textarea",4,0),h()(),m(7,"mat-card",5)(8,"mat-card-header",3),g(9," Kontaktinformation "),h(),m(10,"mat-card",6)(11,"mat-card-content",7)(12,"p",8),g(13,"Kontakt 1"),h(),m(14,"p"),g(15,"Namn: V\xE5rdnadshavare Exempelsson"),h(),T(16,"mat-divider"),m(17,"p"),g(18,"Telefonnummer: 072-555-83-34"),h(),T(19,"mat-divider"),m(20,"p"),g(21,"Mejl: V\xE5rdnadshavare.Exempelsson@outlook.se"),h(),T(22,"mat-divider"),m(23,"p",8),g(24,"Kontakt 2"),h(),m(25,"p"),g(26,"Namn: V\xE5rdnadnadshavare Exempelsson"),h(),T(27,"mat-divider"),m(28,"p"),g(29,"Telefonnummer: 072-365-555-34"),h(),T(30,"mat-divider"),m(31,"p"),g(32,"Mejl: V\xE5rdnadshavare.Exempelsson@outlook.se"),h(),T(33,"mat-divider"),h()()()()),e&2&&(p(3),_e(" Specialbehov ",n.childSignal().name," "))},dependencies:[qf,yt,Kt,kt,un,dn,rn],styles:["[_nghost-%COMP%]{display:flex;width:100%;height:100%}.subrow[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex:1;justify-content:center;height:100%;gap:1em}.subrow[_ngcontent-%COMP%] > mat-card[_ngcontent-%COMP%]{margin-bottom:.5em;max-height:100%}.subrow[_ngcontent-%COMP%] > mat-card[_ngcontent-%COMP%] > mat-card[_ngcontent-%COMP%]{overflow-y:scroll;flex:1}.subrow[_ngcontent-%COMP%] > mat-card[_ngcontent-%COMP%] > mat-card[_ngcontent-%COMP%]{overflow-y:scroll}mat-card-header[_ngcontent-%COMP%]{display:flex;justify-content:center;border:2px;font:var(--mat-sys-headline-small)}mat-form-field[_ngcontent-%COMP%]{flex:1;margin:1em;box-shadow:var(--mat-sys-level2)}textarea[_ngcontent-%COMP%]{min-height:20vh;resize:none;overflow-y:auto}mat-card[_ngcontent-%COMP%]{box-shadow:var(--mat-sys-level2);flex:1;gap:.5em}.color[_ngcontent-%COMP%]{background:var(--mat-sys-inverse-primary)}.subcard[_ngcontent-%COMP%]{box-shadow:var(--mat-sys-level2);background-color:var(--mat-sys-surface-variant);flex:1;margin:1em;border-radius:0%;overflow-y:scroll}.gap[_ngcontent-%COMP%]{position:absolute}.gap[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{display:flex}.kontakt[_ngcontent-%COMP%]{font:var(--mat-sys-label-large);justify-self:center}.header-text[_ngcontent-%COMP%]{font-weight:400}#left-card[_ngcontent-%COMP%]{background:var(--mat-sys-inverse-primary);border-top-left-radius:0%}"]})};var MB=()=>[1,2,3,4,5],SB=(t,i)=>i.id;function IB(t,i){if(t&1&&(m(0,"mat-card",6)(1,"p",9)(2,"span",10),g(3,"CLICKBAIT TITEL"),h(),g(4),h()()),t&2){let e=i.$implicit,n=D();p(4),_e(" ",e===1||e===4?n.fakeNewsLong:n.fakeNews," ")}}function TB(t,i){if(t&1&&(m(0,"mat-card",8)(1,"mat-icon"),g(2,"face"),h(),m(3,"p",11),g(4),h()()),t&2){let e=i.$implicit;p(4),oe(e.name)}}var Dh=class t{fakeNews="Finally, one I can answer! I literally have never been able to answer any askreddit question in my entire life,and have never posted anything on reddit until this exact moment that is happening right now. Writing this on mobile,sorry for bad formatting, also english is my 6th language so there might be one wrong word, TLDR at the bottom. ";fakeNewsLong="Finally, one I can answer! I literally have never been able to answer any askreddit question in my entire life,and have never posted anything on reddit until this exact moment that is happening right now. Writing this on mobile,sorry for bad formatting, also english is my 6th language so there might be one wrong word, TLDR at the bottom. Finally, one I can answer! I literally have never been able to answer any askreddit question in my entire life,and have never posted anything on reddit until this exact moment that is happening right now. Writing this on mobile,sorry for bad formatting, also english is my 6th language so there might be one wrong word, TLDR at the bottom. ";users=x([]);userService=c(so);async ngOnInit(){await new Promise(i=>{this.userService.getUsers().subscribe(e=>{this.users.set(e),i()})})}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=M({type:t,selectors:[["homepage"]],decls:26,vars:1,consts:[[1,"main-card"],[1,"school-title"],[1,"main-body"],[1,"news"],[1,"news-header"],[1,"news-content"],[1,"mock-news-boxes"],[1,"staff"],[1,"mock-teachers"],[1,"news-text"],[1,"news-title"],[1,"namn"]],template:function(e,n){e&1&&(m(0,"mat-card",0)(1,"mat-card-header",1)(2,"p"),g(3,"K\xE4ndpersonsnamn F\xF6rskola"),h()(),T(4,"mat-divider"),m(5,"mat-card-content",2)(6,"mat-card",3)(7,"mat-card-header",4)(8,"p")(9,"mat-icon"),g(10,"newspaper"),h(),g(11," Nyheter "),h()(),T(12,"mat-divider"),m(13,"mat-card-content",5),Me(14,IB,5,1,"mat-card",6,Ur),h()(),m(16,"mat-card",7)(17,"mat-card-header",4)(18,"p")(19,"mat-icon"),g(20,"diversity_3"),h(),g(21," Personal "),h()(),T(22,"mat-divider"),m(23,"mat-card-content",5),Me(24,TB,5,1,"mat-card",8,SB),h()()()()),e&2&&(p(14),Se(jl(0,MB)),p(10),Se(n.users()))},dependencies:[yt,un,dn,rn,wt],styles:["[_nghost-%COMP%]{display:flex;flex:1;height:100%;min-height:0;width:100%}.main-card[_ngcontent-%COMP%]{box-shadow:var(--mat-sys-level1);display:flex;flex-direction:column;flex:1;min-height:0;width:100%;overflow:hidden}.school-title[_ngcontent-%COMP%]{background:var(--mat-sys-inverse-primary);font:var(--mat-sys-title-large);font-weight:400;font-size:xx-large;display:flex;justify-content:center}.main-body[_ngcontent-%COMP%]{display:flex;flex-direction:row;background-color:var(--mat-sys-surface-dim);gap:1em;flex:1;min-height:0}mat-card[_ngcontent-%COMP%]{box-shadow:var(--mat-sys-level2)}.news[_ngcontent-%COMP%]{display:flex;margin-top:1em;flex:1;flex-direction:column;min-height:0;overflow:hidden}.staff[_ngcontent-%COMP%]{display:flex;margin-top:1em;flex:.5;flex-direction:column;min-height:0;overflow:hidden}@media(max-width:740px){.staff[_ngcontent-%COMP%]{flex:1}}.staff[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]:last-child{margin-bottom:1em}.news-header[_ngcontent-%COMP%]{flex-shrink:0;justify-content:center;align-items:center;display:flex;background:var(--mat-sys-surface-variant);font-weight:400!important;font-size:x-large}.mock-news-boxes[_ngcontent-%COMP%]{margin:.8em;background-color:var(--mat-sys-surface-variant)}.news-text[_ngcontent-%COMP%]{margin:.3em}.news-title[_ngcontent-%COMP%]{font-size:medium;font-weight:700}.news-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex:1;min-height:0;overflow-y:auto;margin:0 0 1em;padding:0 .5em}.news-content[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]:last-child{margin-bottom:1em}mat-icon[_ngcontent-%COMP%]{margin-left:.5em}.mock-teachers[_ngcontent-%COMP%]{margin:.8em;display:flex;flex-direction:row;gap:.3em;align-items:center;justify-content:flex-start;background-color:var(--mat-sys-surface-variant)}.namn[_ngcontent-%COMP%]{font:var(--mat-sys-body-large)}"]})};function kB(t,i){if(t&1&&(m(0,"p",10),g(1),h()),t&2){let e=D(2);p(),oe(e.groupSignal().name)}}function AB(t,i){if(t&1){let e=ke();m(0,"a",20),E("click",function(){let r=X(e).$implicit,o=D(2);return J(o.activeLink.set(r))})("keypress.enter",function(){let r=X(e).$implicit,o=D(2);return J(o.activeLink.set(r))}),g(1),h()}if(t&2){let e=i.$implicit,n=D(2);A("active",n.activeLink()===e),p(),_e(" ",e," ")}}function RB(t,i){if(t&1){let e=ke();m(0,"div",8)(1,"mat-card-header",9)(2,"span"),g(3),h(),j(4,kB,2,1,"p",10),T(5,"main-presence-container",11),h(),m(6,"div",12)(7,"child-display",13),E("attendanceChangeEvent",function(r){X(e);let o=D();return J(o.wsUpdateAttendance(r))}),Xe("childSignalChange",function(r){X(e);let o=D();return Ie(o.childSignal,r)||(o.childSignal=r),J(r)})("dateSignalChange",function(r){X(e);let o=D();return Ie(o.dateSignal,r)||(o.dateSignal=r),J(r)}),h()()(),m(8,"nav",14),Me(9,AB,2,2,"a",15,Ur),h(),m(11,"div",16),T(12,"information",17)(13,"main-live-journal",18),m(14,"history",19),Xe("childSignalChange",function(r){X(e);let o=D();return Ie(o.childSignal,r)||(o.childSignal=r),J(r)}),h()()}if(t&2){let e=D();p(3),oe(e.childSignal().name),p(),H(e.groupSignal().name!=="alla"?4:-1),p(),A("filter",sr(e.childSignal().id)),p(2),Ke("childSignal",e.childSignal)("dateSignal",e.dateSignal),p(2),Se(e.links()),p(3),or(lr("display:",e.activeLink()===e.links()[0]?"flex":"none")),A("childSignal",e.childSignal()),p(),or(lr("display:",e.activeLink()===e.links()[1]?"flex":"none")),A("childSignal",e.childSignal())("groupSignal",e.groupSignal())("contentSignal",e.contentSignal()),p(),or(lr("display:",e.activeLink()===e.links()[2]?"flex":"none")),Ke("childSignal",e.childSignal)}}function OB(t,i){if(t&1&&(m(0,"mat-card-header",9)(1,"span"),g(2),h(),m(3,"p",10),g(4),h(),T(5,"main-presence-container",21),h(),m(6,"mat-tab-group",22)(7,"mat-tab",23),T(8,"main-live-journal",18),h()()),t&2){let e=D();p(2),oe(e.groupSignal().name),p(2),oe(e.dateSignal()),p(),A("filter",sr(e.groupSignal().id)),p(2),A("label",sr(e.reportTitle())),p(),A("childSignal",e.childSignal())("groupSignal",e.groupSignal())("contentSignal",e.contentSignal())}}function NB(t,i){t&1&&T(0,"account-page",3)}function FB(t,i){t&1&&T(0,"homepage",4)}function PB(t,i){t&1&&(m(0,"mat-icon"),g(1,"arrow_forward_ios"),h())}function LB(t,i){t&1&&(m(0,"mat-icon"),g(1,"format_list_bulleted"),h())}var zs=class t{presence=c(ao);childSignal=x({name:"",id:0,date:"",status:"NOT_SET",present:null});contentSignal=Ne.required();groupSignal=x({name:"",id:0});allGroups=x([]);groupService=c(_h);childList=ai.required(Ls);teachers=[{}];dateSignal=x("");activeLink=x("Information");links=x(["Information",this.childSignal().name+(this.childSignal().name.endsWith("s")?"":"s")+"dagsrapport","Historik"]);detachedListVisible=x(!1);viewportWidth=x(window.innerWidth);months=["Januari","Februari","Mars","April","Maj","Juni","Juli","Augusti","September","Oktober","November","December"];days=["S\xF6ndag","M\xE5ndag","Tisdag","Onsdag","Torsdag","Fredag","L\xF6rdag"];ngOnInit(){this.dateSignal.set(this.getDate()),this.loadGroups()}constructor(){Ft(()=>{this.links.set(["Information",this.childSignal().name+(this.childSignal().name.endsWith("s")?"":"s")+" dagsrapport","Historik"])}),Ft(()=>{this.contentSignal(),this.childSignal(),this.groupSignal(),this.activeLink.set("Information")})}reportTitle=ut(()=>{switch(this.contentSignal()){case"childView":return this.childSignal().name+"s dagsrapport";case"groupView":return this.groupSignal().name+"s dagsrapport";default:return"ERROR"}});getDate(){let i=new Date;return`${this.days[i.getDay()]} ${i.getDate()} ${this.months[i.getMonth()]} ${i.getFullYear()}`}loadGroups(){this.groupService.getGroups().subscribe({next:i=>{this.allGroups.set(i)}})}handleWebsocketMessage(i){this.childList().handleWebsocketMessage(i)}attendanceChangeEvent=new I;wsUpdateAttendance(i){this.attendanceChangeEvent.emit(i)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=M({type:t,selectors:[["main-panel"]],viewQuery:function(e,n){e&1&&Ri(n.childList,Ls,5),e&2&&Oi()},inputs:{contentSignal:[1,"contentSignal"]},outputs:{contentSignal:"contentSignalChange",attendanceChangeEvent:"attendanceChangeEvent"},decls:13,vars:12,consts:[["tooltip","matTooltip"],[1,"main-card-content"],[1,"main-card-left"],[1,"account-page"],[1,"home-card"],[1,"main-card-right"],["tabindex","0",1,"main-card-right-hide-button",3,"click","keypress.enter","matTooltip"],[3,"groupSignalChange","childSignalChange","contentSignalChange","allGroupsChange","groupSignal","childSignal","contentSignal","allGroups"],[1,"sub-row"],[1,"title"],[1,"mini-spacer"],[3,"filter"],[1,"childDisplay"],[3,"attendanceChangeEvent","childSignalChange","dateSignalChange","childSignal","dateSignal"],["mat-tab-nav-bar","","mat-stretch-tabs","false","mat-align-tabs","start"],["mat-tab-link","","tabindex","0",3,"active"],["id","child-tab-content"],[3,"childSignal"],[3,"childSignal","groupSignal","contentSignal"],[3,"childSignalChange","childSignal"],["mat-tab-link","","tabindex","0",3,"click","keypress.enter","active"],["isGroup","yes",3,"filter"],["mat-stretch-tabs","false","mat-align-tabs","start"],[3,"label"]],template:function(e,n){if(e&1){let r=ke();m(0,"mat-card")(1,"mat-card-content",1)(2,"div",2),j(3,RB,15,20),j(4,OB,9,9),j(5,NB,1,0,"account-page",3),j(6,FB,1,0,"homepage",4),h(),m(7,"mat-card",5)(8,"div",6,0),E("click",function(){return n.detachedListVisible.set(!n.detachedListVisible())})("keypress.enter",function(){return n.detachedListVisible.set(!n.detachedListVisible())}),j(10,PB,2,0,"mat-icon")(11,LB,2,0,"mat-icon"),h(),m(12,"main-child-list",7),Xe("groupSignalChange",function(a){return X(r),Ie(n.groupSignal,a)||(n.groupSignal=a),J(a)})("childSignalChange",function(a){return X(r),Ie(n.childSignal,a)||(n.childSignal=a),J(a)})("contentSignalChange",function(a){return X(r),Ie(n.contentSignal,a)||(n.contentSignal=a),J(a)})("allGroupsChange",function(a){return X(r),Ie(n.allGroups,a)||(n.allGroups=a),J(a)}),h()()()()}e&2&&(p(3),H(n.contentSignal()==="childView"?3:-1),p(),H(n.contentSignal()==="groupView"?4:-1),p(),H(n.contentSignal()==="teacherView"?5:-1),p(),H(n.contentSignal()==="homeView"?6:-1),p(),F("right-card-visible",n.detachedListVisible()),p(),A("matTooltip",n.detachedListVisible()?"G\xF6m n\xE4rvarolista":"Visa n\xE4rvarolista"),p(2),H(n.detachedListVisible()?10:11),p(2),Ke("groupSignal",n.groupSignal)("childSignal",n.childSignal)("contentSignal",n.contentSignal)("allGroups",n.allGroups))},dependencies:[Ls,Ui,ch,yt,un,dn,gh,vh,Ps,Hc,Gf,wh,Dh,Ch,qf,Eb,Mb,Zt,wt,Fs,wr],styles:["[_nghost-%COMP%]{display:block;margin:0 auto;border-radius:12px;box-sizing:border-box;width:100%;height:100%}mat-card-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font:var(--mat-sys-headline-medium)}h2[_ngcontent-%COMP%]{margin-bottom:16px}mat-card[_ngcontent-%COMP%]{width:100%;height:100%}.main-card-content[_ngcontent-%COMP%]{display:flex;flex-direction:row;box-sizing:border-box;height:100%}.main-card-left[_ngcontent-%COMP%]{width:100%;height:100%;padding-right:2%;display:flex;flex-direction:column;flex:1.5}.main-card-right[_ngcontent-%COMP%]{width:100%;height:100%;min-width:fit-content;overflow-x:auto;display:flex;flex:1;min-width:30%;transition:.5s;overflow-x:visible}.main-card-right-hide-button[_ngcontent-%COMP%]{position:absolute;z-index:1001;width:3rem;height:3rem;left:-4rem;top:3rem;background-color:var(--mat-sys-primary-fixed-dim);color:var(--mat-sys-on-primary);border-radius:50%;display:flex;justify-content:center;align-items:center;display:none;cursor:pointer;box-shadow:var(--mat-sys-level3);border:0px solid var(--mat-sys-primary-fixed);box-sizing:border-box;transition:.1s}.main-card-right-hide-button[_ngcontent-%COMP%]:hover{border:2px solid var(--mat-sys-primary-fixed)}.main-card-right-hide-button[_ngcontent-%COMP%] > mat-icon[_ngcontent-%COMP%]{font-size:2rem;width:fit-content;height:fit-content}@media(max-width:1250px){.main-card-right[_ngcontent-%COMP%]{height:90%;top:5%;position:fixed;right:-30rem;width:30rem;box-sizing:border-box;z-index:1000;box-shadow:var(--mat-sys-level3);border-radius:1em}.right-card-visible[_ngcontent-%COMP%]{right:0}.main-card-right-hide-button[_ngcontent-%COMP%]{display:flex}.main-card-left[_ngcontent-%COMP%]{padding-right:0}}mat-card-header[_ngcontent-%COMP%]{flex:.15}.childDisplay[_ngcontent-%COMP%]{box-shadow:var(--mat-sys-level1);display:flex;flex-direction:row;justify-content:center;align-items:center;background:var(--mat-sys-inverse-primary);border-radius:12px;max-width:fit-content}mat-tab-group[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:column;min-height:0}  .mat-mdc-tab-body-wrapper{flex:1;min-height:0}  .mat-mdc-tab-body-content{height:100%;overflow:hidden}  .mat-mdc-form-field-flex{height:100%}  .mat-mdc-form-field-infix{height:100%}main-live-journal[_ngcontent-%COMP%]{flex:4}.spacer[_ngcontent-%COMP%]{flex:1 1 auto}  .mat-mdc-form-field-subscript-wrapper{display:none}.title[_ngcontent-%COMP%]{text-wrap:nowrap;margin-bottom:1em}main-presence-container[_ngcontent-%COMP%]{margin-left:1em}.mini-spacer[_ngcontent-%COMP%]{margin:1em}.sub-row[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;align-items:center}@media(max-width:1250px){.sub-row[_ngcontent-%COMP%]{flex-direction:column;align-items:start}}.home-card[_ngcontent-%COMP%]{display:flex;flex:1}.account-page[_ngcontent-%COMP%]{flex:1}#child-tab-content[_ngcontent-%COMP%]{width:100%;height:100%;display:flex}.main-card-left[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{box-shadow:var(--mat-sys-level1)}"]})};var VB=["*",[["mat-toolbar-row"]]],BB=["*","mat-toolbar-row"],jB=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=N({type:t,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return t})(),xh=(()=>{class t{_elementRef=c(B);_platform=c(ue);_document=c(Y);color;_toolbarRows;constructor(){}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=M({type:t,selectors:[["mat-toolbar"]],contentQueries:function(n,r,o){if(n&1&&vt(o,jB,5),n&2){let a;R(a=O())&&(r._toolbarRows=a)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(n,r){n&2&&(It(r.color?"mat-"+r.color:""),F("mat-toolbar-multiple-rows",r._toolbarRows.length>0)("mat-toolbar-single-row",r._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:BB,decls:2,vars:0,template:function(n,r){n&1&&(De(VB),te(0),te(1,1))},styles:[`.mat-toolbar {
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
`],encapsulation:2,changeDetection:0})}return t})();var aI=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=$({type:t});static \u0275inj=z({imports:[ve]})}return t})();var sI=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=$({type:t});static \u0275inj=z({imports:[$n,ve,$n]})}return t})();var Eh=class t{baseUrl=`${at.apiUrl}/api/chat`;historyUrl=`${this.baseUrl}/history`;http=c(bt);socketService=c(qn);getHistory(i,e){let n=new Pt().set("senderId",i).set("recipientId",e);return this.http.get(this.historyUrl,{params:n})}createChatRoomId(i,e){let n=Math.min(i,e),r=Math.max(i,e);return`chat:${n}:${r}`}createLocalDateTime(){return new Date().toISOString().replace("Z","")}static \u0275fac=function(e){return new(e||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})};var UB=["chatViewDisplay"],zB=(t,i)=>i.name,$B=(t,i)=>i.timestamp;function WB(t,i){t&1&&(m(0,"mat-icon"),g(1,"arrow_forward_ios"),h())}function GB(t,i){t&1&&(m(0,"mat-icon"),g(1,"chat"),h())}function qB(t,i){if(t&1&&(m(0,"span",11)(1,"b"),g(2),h()()),t&2){let e=D(2).$implicit;p(2),oe(e.name)}}function YB(t,i){if(t&1&&(m(0,"span",11),g(1),h()),t&2){let e=D(2).$implicit;p(),_e(" ",e.name," ")}}function QB(t,i){if(t&1){let e=ke();m(0,"button",9),E("click",function(){X(e);let r=D().$implicit,o=D(2);return J(o.onSelectTeacher(r))}),m(1,"div",10),g(2),h(),j(3,qB,3,1,"span",11)(4,YB,2,1,"span",11),h()}if(t&2){let e=D().$implicit,n=D(2);p(),or(lr("background-color: ",e.color)),p(),_e(" ",e.name.substring(0,1)," "),p(),H(n.inUnread(e.id)?3:4)}}function ZB(t,i){if(t&1&&j(0,QB,5,5,"button",8),t&2){let e=i.$implicit,n=D(2);H(e.id!==n.userId?0:-1)}}function KB(t,i){if(t&1&&(m(0,"mat-action-list",6),Me(1,ZB,1,1,null,null,zB),h()),t&2){let e=D();p(),Se(e.users())}}function XB(t,i){if(t&1&&(m(0,"span",27),g(1),h()),t&2){let e,n=D().$implicit,r=D(2);F("msgSelf",n.senderId===r.userId),p(),oe(n.senderId===r.userId?"Du":(e=r.selectedTeacher())==null?null:e.name)}}function JB(t,i){if(t&1&&(m(0,"span",28),g(1),h()),t&2){let e=D().$implicit,n=D(2);F("msgSelf",e.senderId===n.userId),p(),oe(n.convertDate(e.timestamp))}}function ej(t,i){if(t&1&&(m(0,"div",23),j(1,XB,2,3,"span",24),j(2,JB,2,3,"span",25),m(3,"div",26),g(4),h()()),t&2){let e=i.$implicit,n=i.$index,r=D(2);F("msgSelf",e.senderId===r.userId),p(),H(n===0||n>0&&r.messages()[n-1].senderId!==e.senderId?1:-1),p(),H(n===0||n>0&&r.messages()[n-1].senderId!==e.senderId||n>0&&r.deltaTimeMinutes(e.timestamp,r.messages()[n-1].timestamp)>r.minutesBeforeNewDate?2:-1),p(),F("msgSelf",e.senderId===r.userId),p(),_e(" ",e.chatMessage," ")}}function tj(t,i){if(t&1){let e=ke();m(0,"mat-card",7),Fa(function(){X(e);let r=D();return J(r.enterClass())}),m(1,"mat-card-header",12)(2,"mat-card-title")(3,"div",13)(4,"button",14),E("click",function(){X(e);let r=D();return J(r.returnToOverview())}),m(5,"mat-icon"),g(6,"keyboard_return"),h()()(),m(7,"div",15),g(8),h(),T(9,"div",16),h()(),m(10,"div",17,1),Me(12,ej,5,7,"div",18,$B),T(14,"div",19),h(),m(15,"mat-card",20)(16,"mat-form-field")(17,"input",21),Xe("ngModelChange",function(r){X(e);let o=D();return Ie(o.newMessage,r)||(o.newMessage=r),J(r)}),E("keyup.enter",function(){X(e);let r=D();return J(r.submitMessage())}),h()(),m(18,"button",22),E("click",function(){X(e);let r=D();return J(r.submitMessage())}),m(19,"mat-icon"),g(20,"send"),h()()()()}if(t&2){let e,n=D();p(4),A("matTooltip","Kontaktlista"),p(4),_e(" ",(e=n.selectedTeacher())==null?null:e.name," "),p(4),Se(n.messages()),p(5),Ke("ngModel",n.newMessage),p(),A("matTooltip","Skicka meddelande")}}var lI=!1,Mh=class t{chatService=c(Eh);websocketService=c(qn);userService=c(so);subs=new ae;userId=Number(sessionStorage.getItem("UserId"));users=x([]);selectedTeacher=x(null);messages=x([]);newMessage=Ne("");minutesBeforeNewDate=3;viewState=x("overview");unread=[];chatView=null;set content(i){console.log(i),this.chatView=i,this.chatView&&(this.chatView.nativeElement.scrollTop=this.chatView.nativeElement.scrollHeight)}messageNotificationSound=new Audio("message.ogg");enterClass=x("enter-animation");chatVisible=x(!1);doShakeAnimation=x(!1);async ngOnInit(){this.messageNotificationSound.load(),await this.websocketService.ensureConnected(),this.subs.add(this.userService.getUsers().subscribe(i=>{this.users.set(i)})),this.subs.add(this.websocketService.getMessages("chatMessages").subscribe(i=>{this.handleMessage(i)})),this.subs.add(this.websocketService.getMessages("notifications").subscribe(i=>{this.handleNotification(i)}))}ngOnDestroy(){this.subs.unsubscribe()}onSelectTeacher(i){this.selectedTeacher.set(i),this.viewState.set("chat");let e=i.id??i.userId;this.messages.set([]),this.subs.add(this.chatService.getHistory(this.userId,e).subscribe({next:n=>this.messages.set(n),error:()=>this.messages.set([])})),this.websocketService.setChatRoom(this.chatService.createChatRoomId(this.userId,e)),this.newMessage.set(this.selectedTeacher()?.storedMessage??""),this.unread=this.unread.filter(n=>n.senderId!==e),this.chatView!=null&&(this.chatView.nativeElement.scrollTop=this.chatView.nativeElement.scrollHeight),lI&&console.log(i)}onSelectAll(){this.viewState.set("chat")}returnToOverview(){this.viewState.set("overview"),this.selectedTeacher()!=null&&this.selectedTeacher.update(i=>(i.storedMessage=this.newMessage(),i)),this.selectedTeacher.set(null)}submitMessage(){let i=this.selectedTeacher();if(i==null||i==null||this.newMessage()=="")return;let e={senderId:this.userId,recipientId:i.id??i.userId,chatMessage:this.newMessage(),timestamp:this.chatService.createLocalDateTime()};this.websocketService.sendChatMessage(e),this.messages.update(n=>[...n,e]),this.newMessage.set("")}handleMessage(i){this.messages.update(e=>[...e,i]),lI&&console.log(i)}handleNotification(i){console.log(i.senderId,this.selectedTeacher()?.id),i.senderId!==this.selectedTeacher()?.id?(this.unread.push(i),this.doShakeAnimation.set(!0),console.log("SHOULD ANIMATE"),this.messageNotificationSound.play()):this.messageNotificationSound.play()}convertDate(i){let e=new Date(i);return new Date(e.getTime()-new Date().getTimezoneOffset()*6e4).toLocaleString("sv-SE",{timeZone:Intl.DateTimeFormat().resolvedOptions().timeZone,hour:"2-digit",minute:"2-digit",day:"2-digit",month:"2-digit",year:"numeric"})}deltaTimeMinutes(i,e){let n=new Date(i),r=new Date(e);return Math.abs((r.getTime()-n.getTime())/6e4)}inUnread(i){return console.log("InUnread",i,this.unread),console.log(this.unread.find(e=>e.senderId==i)!=null),this.unread.find(e=>e.senderId==i)!=null}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=M({type:t,selectors:[["main-chat-hub"]],viewQuery:function(e,n){if(e&1&&Ce(UB,5),e&2){let r;R(r=O())&&(n.content=r.first)}},hostVars:2,hostBindings:function(e,n){e&2&&F("chat-visible",n.chatVisible())},inputs:{newMessage:[1,"newMessage"]},outputs:{newMessage:"newMessageChange"},decls:13,vars:5,consts:[["tooltip","matTooltip"],["chatViewDisplay",""],["tabindex","0",1,"chat-hide-button",3,"animationend","click","keydown.space","keydown.enter","matTooltip"],["appearance","outlined"],["id","chatHubHeader",1,"cardHeader"],[2,"width","0.5em"],[1,"list-class"],["id","chatView"],["mat-list-item","",1,"teacherSelector"],["mat-list-item","",1,"teacherSelector",3,"click"],[1,"chatAvatar"],["matListItemTitle",""],["id","chatViewHeader",1,"cardHeader"],["id","chatViewTitleLeft"],["matIconButton","button",3,"click","matTooltip"],["id","chatViewTitleRight"],["id","chatViewTitleSpacer"],["id","chatViewDisplay"],[1,"chatMessageContainer",3,"msgSelf"],["id","scrollAnchor"],["id","chatViewFooter"],["matInput","","type","text",3,"ngModelChange","keyup.enter","ngModel"],["matInput","","type","button","matIconButton","button",3,"click","matTooltip"],[1,"chatMessageContainer"],[1,"chatMessageHeader",3,"msgSelf"],[1,"chatMessageDate",2,"font-size","0.8em","font-weight","normal",3,"msgSelf"],[1,"chatMessage"],[1,"chatMessageHeader"],[1,"chatMessageDate",2,"font-size","0.8em","font-weight","normal"]],template:function(e,n){e&1&&(m(0,"div",2,0),E("animationend",function(){return n.doShakeAnimation.set(!1)})("click",function(){return n.chatVisible.set(!n.chatVisible())})("keydown.space",function(){return n.chatVisible.set(!n.chatVisible())})("keydown.enter",function(){return n.chatVisible.set(!n.chatVisible())}),j(2,WB,2,0,"mat-icon")(3,GB,2,0,"mat-icon"),h(),m(4,"mat-card",3)(5,"mat-card-header",4)(6,"mat-card-title")(7,"mat-icon"),g(8,"chat"),h(),T(9,"span",5),g(10,"Chatt"),h()(),j(11,KB,3,0,"mat-action-list",6)(12,tj,21,4,"mat-card",7),h()),e&2&&(F("animShake",n.doShakeAnimation()),A("matTooltip",n.chatVisible()?"D\xF6lj chatt":"Visa chatt"),p(2),H(n.chatVisible()?2:3),p(9),H(n.viewState()==="overview"?11:n.viewState()==="chat"?12:-1))},dependencies:[dh,ji,zn,Kt,kt,Zr,mn,Un,_r,At,Bn,yt,un,cs,Zt,wt,Fs,wr],styles:["[_nghost-%COMP%]{position:fixed;display:flex;flex-direction:column;background-color:#0000;width:30vw;max-height:60vh;min-height:30vh;right:-30vw;bottom:2vh;z-index:1000;transition:right .4s,width .4s}@media(max-width:850px){[_nghost-%COMP%]{width:50vw;right:-50vw}}.chat-visible[_nghost-%COMP%]{right:1vw}mat-card[_ngcontent-%COMP%]{width:100%;height:100%;display:inherit;min-height:0;bottom:0;flex:3;transition:height 1s}mat-action-list[_ngcontent-%COMP%]{width:100%;height:100%;min-height:30vh;max-height:50vh;overflow-y:scroll;transition:height 1s;background-color:var(--mat-sys-surface);box-shadow:0;padding:0;border-radius:var(--mat-sys-corner-medium)}mat-action-list[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]{width:100%;padding:.5em;color:var(--mat-sys-on-surface);border-bottom:2px solid var(--mat-sys-surface-container-highest);cursor:pointer;box-sizing:border-box}mat-action-list[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]:last-child{border-bottom:0}input[_ngcontent-%COMP%]{height:1em}.chatAvatar[_ngcontent-%COMP%]{padding:.5em;width:1em;height:1em;text-align:center;vertical-align:top;border-radius:var(--mat-sys-corner-full);color:var(--mat-sys-on-primary);margin-right:1em;display:flex;align-items:center;justify-content:center}.teacherSelector[_ngcontent-%COMP%]{display:flex;flex-direction:row;vertical-align:middle;align-items:center}button[_ngcontent-%COMP%]:hover{font-weight:700}#chatView[_ngcontent-%COMP%]{display:flex;width:100%;flex-direction:column}#chatView[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]{margin:0}#chatViewTitleLeft[_ngcontent-%COMP%], #chatViewTitleSpacer[_ngcontent-%COMP%]{flex:1;height:100%;width:100%;font-size:.5rem;display:flex;padding:.2em}#chatViewTitleRight[_ngcontent-%COMP%]{flex:5;height:100%;width:100%;display:flex;justify-content:center;font-size:1rem;text-wrap:nowrap}.cardHeader[_ngcontent-%COMP%]{padding-bottom:16px}.cardHeader[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center}#chatHubHeader[_ngcontent-%COMP%]{background-color:var(--mat-sys-tertiary);color:var(--mat-sys-on-tertiary)}#chatViewHeader[_ngcontent-%COMP%]{flex:1;flex-direction:row;justify-content:center;padding:0;background-color:var(--mat-sys-surface-container-highest);margin:.1em}  #chatViewHeader>.mat-mdc-card-header-text{width:100%}#chatViewHeader[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%]{flex:1;flex-direction:row;justify-content:start;width:100%}#chatViewDisplay[_ngcontent-%COMP%]{flex:5;min-height:30vh;max-height:30vh;overflow-y:scroll}#chatViewFooter[_ngcontent-%COMP%]{display:flex;flex:2;flex-direction:row;overflow:clip;align-items:center}#chatViewFooter[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{border-radius:var(--mat-sys-corner-medium);flex:5;margin:.25em}#chatViewFooter[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border-radius:var(--mat-sys-corner-medium);width:100%;height:100%}#chatViewFooter[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{flex:1;height:100%;transition:.1s;display:flex;align-items:center;justify-content:center;border:1px solid var(--mat-sys-outline-variant)}#chatViewFooter[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:var(--mat-sys-tertiary-container)}  .mat-mdc-text-field-wrapper.mdc-text-field.mdc-text-field--filled.mdc-text-field--no-label{border-radius:var(--mat-sys-corner-small)}.chatMessageContainer[_ngcontent-%COMP%]{display:flex;flex-direction:column}.chatMessageContainer.msgSelf[_ngcontent-%COMP%]{align-items:end}.chatMessageHeader[_ngcontent-%COMP%]{font-family:var(--mat-sys-body-small);font-weight:500;margin-left:.75em;margin-top:.5em}.chatMessageHeader.msgSelf[_ngcontent-%COMP%]{font-weight:400;margin-left:0;margin-right:.75em;text-align:right}.chatMessageDate[_ngcontent-%COMP%]{font-family:var(--mat-sys-body-small);font-weight:300;margin-left:.75em;margin-top:0}.chatMessageDate.msgSelf[_ngcontent-%COMP%]{margin-left:0;margin-right:.75em;text-align:right}.chatMessage[_ngcontent-%COMP%]{background-color:var(--mat-sys-primary-container);margin-left:.5em;margin-right:2.5em;border-radius:var(--mat-sys-corner-medium);padding:.5em;box-sizing:border-box;margin-bottom:.5em;width:fit-content;max-width:80%;height:fit-content;text-wrap:wrap;word-wrap:break-word}.chatMessage.msgSelf[_ngcontent-%COMP%]{flex-direction:row-reverse;text-align:right;background-color:var(--mat-sys-tertiary-container);margin-right:.5em;margin-left:2.5em}#chatViewDisplay[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{overflow-anchor:none}#chatViewDisplay[_ngcontent-%COMP%]   #scrollAnchor[_ngcontent-%COMP%]{overflow-anchor:auto;height:1em}.chat-hide-button[_ngcontent-%COMP%]{position:absolute;z-index:1001;width:3rem;height:3rem;left:-4rem;top:3rem;background-color:var(--mat-sys-tertiary);color:var(--mat-sys-on-tertiary);border-radius:50%;display:flex;justify-content:center;align-items:center;cursor:pointer;box-shadow:var(--mat-sys-level3);border:0px solid var(--mat-sys-primary-fixed);box-sizing:border-box;transition:.1s}.chat-hide-button[_ngcontent-%COMP%]:hover{border:2px solid var(--mat-sys-primary-fixed)}.chat-hide-button[_ngcontent-%COMP%] > mat-icon[_ngcontent-%COMP%]{font-size:2rem;width:fit-content;height:fit-content}.enter-animation[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_slide-fade .2s}@keyframes _ngcontent-%COMP%_slide-fade{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}.animShake[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_shake .5s}@keyframes _ngcontent-%COMP%_shake{0%{transform:rotate(0) scale(1)}20%{transform:rotate(-20deg) scale(1.1)}40%{transform:rotate(20deg) scale(1.2)}60%{transform:rotate(-45deg) scale(1.1)}80%{transform:rotate(45deg) scale(1)}to{transform:rotate(0) scale(1)}}"]})};var Sh=class t{groupSignal=x({name:"",id:0});allGroups=x([]);contentSignal=x("");presence=c(ao);socketService=c(qn);mainPanel=ai.required(zs);async ngOnInit(){this.contentSignal.set("homeView"),this.socketService.connect(`${at.wsUrl}/ws`),await this.socketService.ensureConnected(),this.presence.init(),this.socketService.setAttendanceRoom("ALL"),this.socketService.getMessages("attendanceMessages").subscribe(i=>{if(!("childId"in i)){console.error("Attendance message with incorrect body!");return}console.log(i),this.handleWebsocketMessage(i)})}ngOnDestroy(){this.socketService.leaveJournalRoom()}handleWebsocketMessage(i){this.mainPanel().handleWebsocketMessage(i)}wsUpdateAttendance(i){this.socketService.sendAttendanceUpdate(i)}onTabChange(i){let e=i.index,n=this.allGroups()[e];this.contentSignal.set("groupView"),this.groupSignal.set(n),this.presence.spoofTeacherUpdate()}logout(){document.cookie='jwtToken=""',sessionStorage.removeItem("token"),sessionStorage.removeItem("UserId"),sessionStorage.removeItem("role"),this.socketService.disconnect(),window.location.reload()}minaSidor(){this.contentSignal.set("teacherView")}hem(){this.contentSignal.set("homeView")}hover(i){console.log(i)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=M({type:t,selectors:[["main-page"]],viewQuery:function(e,n){e&1&&Ri(n.mainPanel,zs,5),e&2&&Oi()},decls:15,vars:1,consts:[[1,"main-nav"],["color","mat-sys-primary"],["id","navLogo","src","Kindguardlogo.png","alt","Logo"],["role","button",1,"button-19"],["matButton","tonal",1,"mina-sidor-button",3,"click"],["matButton","tonal",3,"click"],[1,"example-spacer"],["matButton","tonal",1,"logout-button",3,"click"],[1,"main-body"],[1,"main-panel-container"],[3,"attendanceChangeEvent","contentSignalChange","contentSignal"]],template:function(e,n){e&1&&(m(0,"div",0)(1,"mat-toolbar",1),T(2,"img",2),m(3,"div",3)(4,"button",4),E("click",function(){return n.minaSidor()}),g(5,"Mina sidor"),h()(),m(6,"button",5),E("click",function(){return n.hem()}),g(7,"Hem"),h(),T(8,"span",6),m(9,"button",7),E("click",function(){return n.logout()}),g(10,"Logout"),h()()(),m(11,"div",8),T(12,"main-chat-hub"),m(13,"div",9)(14,"main-panel",10),E("attendanceChangeEvent",function(o){return n.wsUpdateAttendance(o)}),Xe("contentSignalChange",function(o){return Ie(n.contentSignal,o)||(n.contentSignal=o),o}),h()()()),e&2&&(p(14),Ke("contentSignal",n.contentSignal))},dependencies:[aI,xh,zs,sI,ft,$t,Mh],styles:["[_nghost-%COMP%]{background-color:var(--mat-sys-surface);width:100%;height:100%;display:flex}mat-toolbar[_ngcontent-%COMP%]{background:linear-gradient(90deg,var(--mat-sys-inverse-primary) 30%,var(--mat-sys-tertiary) 100%);color:var(--mat-sys-primary-on-surface);display:flex;align-items:center;position:fixed}mat-tab-group[_ngcontent-%COMP%]{height:100%}mat-tab[_ngcontent-%COMP%]{height:100%}.example-spacer[_ngcontent-%COMP%]{flex:1 1 auto}  .mat-mdc-tab{background-color:var(--mat-sys-surface-container);border-radius:5px;box-shadow:var(--mat-sys-level1)}  .mdc-tab--active{background-color:var(--mat-sys-surface-container);border-radius:5px;box-shadow:var(--mat-sys-level3)}  .mat-mdc-tab-body-wrapper{height:100%}.main-body[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:100%;width:100%}.main-panel-container[_ngcontent-%COMP%]{width:85%;height:80%}.mina-sidor-button[_ngcontent-%COMP%]{margin:2em}#navLogo[_ngcontent-%COMP%]{width:8em;height:auto}"]})};var Ih=t=>{let i=t.url.join(""),e=c(cn),r=c(Is).getRole();switch(i){case"":return r?r==="ADMIN"?e.parseUrl("/admin"):e.parseUrl("/app"):!0;case"app":return r?r==="ADMIN"?e.parseUrl("/admin"):!0:e.parseUrl("/");case"admin":return r?r!=="ADMIN"?e.parseUrl("/app"):!0:e.parseUrl("/");default:return!1}};var Gi=class t{adminUrl=`${at.apiUrl}/api/admin`;userUrl=`${at.apiUrl}/api/user`;http=c(bt);getChildren(){return this.http.get(`${this.adminUrl}/children`)}getGroups(){return this.http.get(`${this.adminUrl}/groups`)}createChild(i){return this.http.post(`${this.adminUrl}/child`,{name:i})}createGroup(i){return this.http.post(`${this.adminUrl}/group`,{name:i})}deleteChild(i){return this.http.delete(`${this.adminUrl}/child/${i}`)}assignChildToGroup(i,e){return this.http.put(`${this.adminUrl}/group/${i}/child/${e}`,{})}activateUser(i){return this.http.put(`${this.adminUrl}/user/${i}`,{})}inactivateUser(i){return this.http.put(`${this.adminUrl}/user/${i}/inactive`,{})}getInactiveUsers(){return this.http.get(`${this.adminUrl}/users/inactive`)}getAllTeachers(){return this.http.get(`${this.userUrl}/teachers`)}static \u0275fac=function(e){return new(e||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})};var nj=(t,i)=>i.id;function ij(t,i){if(t&1&&(m(0,"mat-option",4),g(1),h()),t&2){let e=i.$implicit;A("value",e.id),p(),oe(e.name)}}var Jc=class t{fb=c(jf);adminService=c(Gi);groups=x([]);children=x([]);form=this.fb.group({firstName:["",fi.required],lastName:["",fi.required],groupId:[null]});childAdded=new I;ngOnInit(){this.loadGroups()}loadGroups(){this.adminService.getGroups().subscribe({next:i=>this.groups.set(i),error:i=>console.error(i)})}onSubmit(){if(this.form.valid){let i=`${this.form.value.firstName} ${this.form.value.lastName}`;this.adminService.createChild(i).subscribe({next:e=>{this.form.value.groupId?this.adminService.assignChildToGroup(this.form.value.groupId,e.id).subscribe({next:()=>{this.childAdded.emit(),this.form.reset()}}):(this.childAdded.emit(),this.form.reset())},error:e=>console.error(e)})}}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=M({type:t,selectors:[["add-child-form"]],outputs:{childAdded:"childAdded"},decls:17,vars:2,consts:[[1,"form-container",3,"ngSubmit","formGroup"],["matInput","","formControlName","firstName"],["matInput","","formControlName","lastName"],["formControlName","groupId"],[3,"value"],["mat-raised-button","","color","mat-sys-primary","type","submit",3,"disabled"]],template:function(e,n){e&1&&(m(0,"form",0),E("ngSubmit",function(){return n.onSubmit()}),m(1,"mat-form-field")(2,"mat-label"),g(3,"Namn"),h(),T(4,"input",1),h(),m(5,"mat-form-field")(6,"mat-label"),g(7,"Efternamn"),h(),T(8,"input",2),h(),m(9,"mat-form-field")(10,"mat-label"),g(11,"Grupp"),h(),m(12,"mat-select",3),Me(13,ij,2,2,"mat-option",4,nj),h()(),m(15,"button",5),g(16," L\xE4gg till barn "),h()()),e&2&&(A("formGroup",n.form),p(13),Se(n.groups()),p(2),A("disabled",n.form.invalid))},dependencies:[Hf,Bf,mn,Un,Pf,vr,Vc,At,kt,Hn,zn,Kt,ft,$t,Rs,Gn,no,to],styles:[".form-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;gap:8px}"]})};var Th=class t{dialogRef=c(sa);onConfirm(){this.dialogRef.close(!0)}onDeny(){this.dialogRef.close(!1)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=M({type:t,selectors:[["delete-confirmation-dialog"]],decls:8,vars:0,consts:[[1,"flex-with-style"],[1,"top-text"],[1,"button-group"],[1,"button",3,"click"]],template:function(e,n){e&1&&(Te(0,"div",0)(1,"p",1),g(2," \xC4r du s\xE4ker p\xE5 att du vill ta bort barnet? "),Oe(),Te(3,"li",2)(4,"button",3),Fn("click",function(){return n.onConfirm()}),g(5," Ja "),Oe(),Te(6,"button",3),Fn("click",function(){return n.onDeny()}),g(7," Nej "),Oe()()())},dependencies:[sh,ft],styles:["[_nghost-%COMP%]{display:block;text-align:center;padding:8px}.top-text[_ngcontent-%COMP%]{font:var(--mat-sys-title-medium)}.button-group[_ngcontent-%COMP%]{display:flex;justify-content:center;gap:32px}.button[_ngcontent-%COMP%]{padding:8px 32px;font:var(--mat-sys-label-small);font-weight:700;cursor:pointer;border-radius:4px;transition:all .2s ease-in-out;background-color:var(--mat-sys-primary);color:var(--mat-sys-on-primary);border:1px solid}button[_ngcontent-%COMP%]:hover{background-color:var(--mat-sys-primary-fixed-dim)}"]})};var cI=(t,i)=>i.id;function rj(t,i){if(t&1&&(m(0,"mat-option",6),g(1),h()),t&2){let e=i.$implicit;A("value",e.id),p(),oe(e.name)}}function oj(t,i){t&1&&T(0,"mat-divider")}function aj(t,i){if(t&1){let e=ke();m(0,"mat-list-item")(1,"span",3),g(2),h(),m(3,"div",4)(4,"mat-select",5,0),E("selectionChange",function(r){let o=X(e).$implicit,a=ln(5),s=D();return J(s.onMove(o,r.value,a))}),Me(6,rj,2,2,"mat-option",6,cI),h(),m(8,"button",7),E("click",function(){let r=X(e).$implicit,o=D();return J(o.onDelete(r))}),m(9,"mat-icon"),g(10,"cancel"),h()()()(),j(11,oj,1,0,"mat-divider")}if(t&2){let e=i.$implicit,n=i.$index,r=i.$count,o=D();p(2),ar(" ",e.name," - ",(e.group==null?null:e.group.name)??"Ingen grupp"," "),p(4),Se(o.groups()),p(5),H(n!==r-1?11:-1)}}var ed=class t{adminService=c(Gi);dialog=c(qc);groups=x([]);children=x([]);childGroupChanged=new I;childDeleted=new I;ngOnInit(){this.loadChildren(),this.loadGroups()}loadGroups(){this.adminService.getGroups().subscribe({next:i=>this.groups.set(i),error:i=>console.error(i)})}loadChildren(){this.adminService.getChildren().subscribe({next:i=>this.children.set([...i].sort((e,n)=>e.name.localeCompare(n.name))),error:i=>console.log("Error",i)})}onDelete(i){this.dialog.open(Th).afterClosed().subscribe(n=>{n&&this.adminService.deleteChild(i.id).subscribe({next:()=>{this.children.set(this.children().filter(r=>r.id!==i.id)),this.loadChildren(),this.childDeleted.emit()},error:r=>console.error(r)})})}onMove(i,e,n){n.value=null,this.adminService.assignChildToGroup(e,i.id).subscribe({next:()=>{this.loadChildren(),n.value=null,this.childGroupChanged.emit()},error:r=>console.error(r)})}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=M({type:t,selectors:[["child-admin-list"]],outputs:{childGroupChanged:"childGroupChanged",childDeleted:"childDeleted"},decls:6,vars:1,consts:[["groupSelect","matSelect"],[1,"antal-barn"],[1,"child-admin-list-container"],["matListItemTitle",""],["matListItemMeta","",1,"move-container"],[1,"move-symbol",3,"selectionChange"],[3,"value"],["matListItemMeta","","mat-icon-button","","color","warn",3,"click"]],template:function(e,n){e&1&&(m(0,"span",1),g(1),h(),m(2,"div",2)(3,"mat-list"),Me(4,aj,12,3,null,null,cI),h()()),e&2&&(p(),_e("Antal barn: ",n.children().length),p(3),Se(n.children()))},dependencies:[zr,ft,ji,oo,Ns,ro,rn,Cr,la,Zt,wt,no,to,Gn],styles:[".child-admin-list-container[_ngcontent-%COMP%]{display:block;max-height:200px;overflow-y:auto;background:#f5f5f5;border-radius:12px}mat-list-item[_ngcontent-%COMP%]{height:auto!important}.example-spacer[_ngcontent-%COMP%]{flex:1 1 auto}.move-container[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px}.move-symbol[_ngcontent-%COMP%]{width:200px}.antal-barn[_ngcontent-%COMP%]{font-weight:500;font-size:20px}"]})};var sj=(t,i)=>i.id;function lj(t,i){t&1&&T(0,"mat-divider")}function cj(t,i){if(t&1&&(m(0,"mat-list-item")(1,"span",4),g(2),h()(),j(3,lj,1,0,"mat-divider")),t&2){let e=i.$implicit,n=i.$index,r=i.$count,o=D();p(2),ar(" ",e.name," (",o.childCount(e.id)," barn)"),p(),H(n!==r-1?3:-1)}}var td=class t{adminService=c(Gi);fb=c(jf);form=this.fb.group({groupName:["",fi.required]});groups=x([]);children=x([]);groupCreated=new I;ngOnInit(){this.loadGroups(),this.loadChildren()}loadGroups(){this.adminService.getGroups().subscribe({next:i=>this.groups.set(i),error:i=>console.error(i)})}loadChildren(){this.adminService.getChildren().subscribe({next:i=>this.children.set(i),error:i=>console.log("Error",i)})}childCount(i){return this.children().filter(e=>e.group?.id==i).length}onCreateGroup(){this.form.valid&&this.adminService.createGroup(this.form.value.groupName).subscribe({next:()=>{this.loadGroups(),this.groupCreated.emit(),this.form.reset()},error:i=>console.error(i)})}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=M({type:t,selectors:[["group"]],outputs:{groupCreated:"groupCreated"},decls:11,vars:2,consts:[[1,"group-container"],[3,"ngSubmit","formGroup"],["matInput","","formControlName","groupName"],["mat-raised-button","","color","mat-sys-primary","type","submit",3,"disabled"],["matListItemTitle",""]],template:function(e,n){e&1&&(m(0,"div",0)(1,"mat-list"),Me(2,cj,4,3,null,null,sj),h()(),m(4,"form",1),E("ngSubmit",function(){return n.onCreateGroup()}),m(5,"mat-form-field")(6,"mat-label"),g(7,"Ny grupp"),h(),T(8,"input",2),h(),m(9,"button",3),g(10," Skapa ny grupp "),h()()),e&2&&(p(2),Se(n.groups()),p(2),A("formGroup",n.form),p(5),A("disabled",n.form.invalid))},dependencies:[oo,Ns,ro,rn,Cr,At,kt,Hn,zn,Kt,ft,$t,Hf,Bf,mn,Un,Pf,vr,Vc,Ui],styles:[".group-container[_ngcontent-%COMP%]{display:block;max-height:200px;overflow-y:auto;background:#f5f5f5;border-radius:12px}"]})};var dj=(t,i)=>i.id;function uj(t,i){if(t&1){let e=ke();m(0,"button",3),E("click",function(){X(e);let r=D().$implicit,o=D();return J(o.inactivateUser(r.id))}),m(1,"mat-icon"),g(2,"cancel"),h(),g(3," Inaktivera "),h()}}function mj(t,i){if(t&1){let e=ke();m(0,"button",3),E("click",function(){X(e);let r=D().$implicit,o=D();return J(o.activateUser(r.id))}),m(1,"mat-icon"),g(2,"check"),h(),g(3," Aktivera "),h()}}function fj(t,i){t&1&&T(0,"mat-divider")}function hj(t,i){if(t&1&&(m(0,"mat-list-item")(1,"span",1),g(2),h(),j(3,uj,4,0,"button",2),j(4,mj,4,0,"button",2),h(),j(5,fj,1,0,"mat-divider")),t&2){let e=i.$implicit,n=i.$index,r=i.$count;p(2),_e(" ",e.name," "),p(),H(e.active?3:-1),p(),H(e.active?-1:4),p(),H(n!==r-1?5:-1)}}var kh=class t{allUsers=x([]);adminService=c(Gi);ngOnInit(){this.loadAllTeachers()}loadAllTeachers(){this.adminService.getAllTeachers().subscribe({next:i=>this.allUsers.set(i),error:i=>console.error(i)})}activateUser(i){this.adminService.activateUser(i).subscribe({next:()=>this.loadAllTeachers()})}inactivateUser(i){this.adminService.inactivateUser(i).subscribe({next:()=>this.loadAllTeachers()})}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=M({type:t,selectors:[["all-users"]],decls:4,vars:0,consts:[[1,"inactive-users-container"],["matListItemTitle",""],["matListItemMeta","","mat-raised-button","","color","mat-sys-primary"],["matListItemMeta","","mat-raised-button","","color","mat-sys-primary",3,"click"]],template:function(e,n){e&1&&(m(0,"div",0)(1,"mat-list"),Me(2,hj,6,4,null,null,dj),h()()),e&2&&(p(2),Se(n.allUsers()))},dependencies:[ft,$t,oo,Ns,ro,rn,Cr,la,Bn,zr,Ui,Zt,wt],styles:[".inactive-users-container[_ngcontent-%COMP%]{display:block;max-height:200px;overflow-y:auto;background:#f5f5f5;border-radius:12px}"]})};var Ah=class t{childForm;childList;group;onChildAdded(){this.childList.loadChildren(),this.group.loadChildren()}onChildDeleted(){this.group.loadChildren()}onChildGroupChanged(){this.group.loadChildren()}onGroupCreated(){this.childForm.loadGroups(),this.childList.loadGroups()}router=c(cn);logout(){document.cookie='jwtToken=""',sessionStorage.removeItem("token"),sessionStorage.removeItem("UserId"),sessionStorage.removeItem("role"),window.location.reload()}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=M({type:t,selectors:[["admin-page"]],viewQuery:function(e,n){if(e&1&&Ce(Jc,5)(ed,5)(td,5),e&2){let r;R(r=O())&&(n.childForm=r.first),R(r=O())&&(n.childList=r.first),R(r=O())&&(n.group=r.first)}},decls:31,vars:0,consts:[[1,"admin-top"],[1,"mat-sys-primary"],[1,"example-spacer"],["mat-raised-button","",3,"click"],[1,"admin-container"],[1,"admin-header"],[3,"childAdded"],[3,"childGroupChanged","childDeleted"],[3,"groupCreated"]],template:function(e,n){e&1&&(m(0,"div",0)(1,"mat-toolbar",1)(2,"span"),g(3,"K\xEEndGuard"),h(),T(4,"span",2),m(5,"button",3),E("click",function(){return n.logout()}),g(6,"Logout"),h()()(),m(7,"div",4)(8,"h1",5)(9,"mat-icon"),g(10,"admin_panel_settings"),h(),g(11," Adminstration "),h(),m(12,"mat-card")(13,"mat-card-content")(14,"h2"),g(15,"Alla anv\xE4ndare"),h(),T(16,"all-users"),h()(),m(17,"h2"),g(18,"L\xE4gg till barn"),h(),m(19,"add-child-form",6),E("childAdded",function(){return n.onChildAdded()}),h(),m(20,"mat-card")(21,"mat-card-header"),T(22,"mat-card-title"),h(),m(23,"mat-card-content")(24,"child-admin-list",7),E("childGroupChanged",function(){return n.onChildGroupChanged()})("childDeleted",function(){return n.onChildDeleted()}),h()()(),m(25,"mat-card")(26,"mat-card-header")(27,"h2"),g(28,"Grupper"),h()(),m(29,"mat-card-content")(30,"group",8),E("groupCreated",function(){return n.onGroupCreated()}),h()()()())},dependencies:[yt,Jc,ed,td,kh,un,dn,Bn,cs,zr,xh,ft,$t,Zt,wt],styles:["[_nghost-%COMP%]{display:block;justify-content:center;align-items:center;width:100vw;height:100vh;overflow-y:scroll}.admin-top[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:100;height:100}.admin-container[_ngcontent-%COMP%]{flex:1;padding:24px;display:flex;flex-direction:column;max-width:1200px;gap:10px;overflow:auto;margin:0 auto}h1[_ngcontent-%COMP%]{margin:0 0 16px}.example-spacer[_ngcontent-%COMP%]{flex:1 1 auto}mat-toolbar[_ngcontent-%COMP%]{background:linear-gradient(90deg,var(--mat-sys-inverse-primary) 30%,var(--mat-sys-tertiary) 100%);display:flex;align-items:center;position:sticky;top:0;max-width:100%}mat-card-title[_ngcontent-%COMP%]{font-size:1.2rem;font-weight:400;line-height:1}mat-card[_ngcontent-%COMP%]{background-color:#fafafa}.admin-header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;color:#d32f2f;border-bottom:2px solid #d32f2f}"]})};var dI=[{canActivate:[Ih],path:"",component:Qf},{canActivate:[Ih],path:"app",component:Sh},{canActivate:[Ih],path:"admin",component:Ah}];var Rh=class t{intercept(i,e){let n=sessionStorage.getItem("token");if(!n)return e.handle(i);let r=i.clone({setHeaders:ne(C({},n?{Authorization:`Bearer ${n}`}:{}),{"ngrok-skip-browser-warning":"true"})});return e.handle(r)}static \u0275fac=function(e){return new(e||t)};static \u0275prov=b({token:t,factory:t.\u0275fac})};var uI={providers:[og(),jv(dI),lv(cv()),{provide:Im,useClass:Rh,multi:!0}]};var Oh=class t{title=x("frontend");static \u0275fac=function(e){return new(e||t)};static \u0275cmp=M({type:t,selectors:[["app-root"]],decls:1,vars:0,template:function(e,n){e&1&&T(0,"router-outlet")},dependencies:[dc],encapsulation:2})};ev(Oh,uI).catch(t=>console.error(t));
