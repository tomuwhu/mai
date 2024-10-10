var de=Object.defineProperty;var ae=(e,t,n)=>t in e?de(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var z=(e,t,n)=>ae(e,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))l(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function C(){}function te(e){return e()}function W(){return Object.create(null)}function I(e){e.forEach(te)}function ne(e){return typeof e=="function"}function le(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function he(e){return Object.keys(e).length===0}function m(e,t){e.appendChild(t)}function v(e,t,n){e.insertBefore(t,n||null)}function g(e){e.parentNode&&e.parentNode.removeChild(e)}function re(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function y(e){return document.createElement(e)}function E(e){return document.createTextNode(e)}function N(){return E(" ")}function T(e,t,n,l){return e.addEventListener(t,n,l),()=>e.removeEventListener(t,n,l)}function _(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function H(e){return e===""?null:+e}function pe(e){return Array.from(e.childNodes)}function M(e,t){t=""+t,e.data!==t&&(e.data=t)}function K(e,t){e.value=t??""}function B(e,t,n,l){n==null?e.style.removeProperty(t):e.style.setProperty(t,n,"")}let J;function S(e){J=e}const x=[],U=[];let A=[];const V=[],_e=Promise.resolve();let D=!1;function me(){D||(D=!0,_e.then(ie))}function G(e){A.push(e)}function ge(e){V.push(e)}const R=new Set;let j=0;function ie(){if(j!==0)return;const e=J;do{try{for(;j<x.length;){const t=x[j];j++,S(t),$e(t.$$)}}catch(t){throw x.length=0,j=0,t}for(S(null),x.length=0,j=0;U.length;)U.pop()();for(let t=0;t<A.length;t+=1){const n=A[t];R.has(n)||(R.add(n),n())}A.length=0}while(x.length);for(;V.length;)V.pop()();D=!1,R.clear(),S(e)}function $e(e){if(e.fragment!==null){e.update(),I(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(G)}}function ve(e){const t=[],n=[];A.forEach(l=>e.indexOf(l)===-1?t.push(l):n.push(l)),n.forEach(l=>l()),A=t}const F=new Set;let be;function se(e,t){e&&e.i&&(F.delete(e),e.i(t))}function ye(e,t,n,l){if(e&&e.o){if(F.has(e))return;F.add(e),be.c.push(()=>{F.delete(e)}),e.o(t)}}function q(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function ke(e,t,n){const l=e.$$.props[t];l!==void 0&&(e.$$.bound[l]=n,n(e.$$.ctx[l]))}function we(e){e&&e.c()}function ue(e,t,n){const{fragment:l,after_update:i}=e.$$;l&&l.m(t,n),G(()=>{const r=e.$$.on_mount.map(te).filter(ne);e.$$.on_destroy?e.$$.on_destroy.push(...r):I(r),e.$$.on_mount=[]}),i.forEach(G)}function fe(e,t){const n=e.$$;n.fragment!==null&&(ve(n.after_update),I(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Ee(e,t){e.$$.dirty[0]===-1&&(x.push(e),me(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function oe(e,t,n,l,i,r,o=null,d=[-1]){const s=J;S(e);const f=e.$$={fragment:null,ctx:[],props:r,update:C,not_equal:i,bound:W(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(s?s.$$.context:[])),callbacks:W(),dirty:d,skip_bound:!1,root:t.target||s.$$.root};o&&o(f.root);let u=!1;if(f.ctx=n?n(e,t.props||{},(c,p,...O)=>{const k=O.length?O[0]:p;return f.ctx&&i(f.ctx[c],f.ctx[c]=k)&&(!f.skip_bound&&f.bound[c]&&f.bound[c](k),u&&Ee(e,c)),p}):[],f.update(),u=!0,I(f.before_update),f.fragment=l?l(f.ctx):!1,t.target){if(t.hydrate){const c=pe(t.target);f.fragment&&f.fragment.l(c),c.forEach(g)}else f.fragment&&f.fragment.c();t.intro&&se(e.$$.fragment),ue(e,t.target,t.anchor),ie()}S(s)}class ce{constructor(){z(this,"$$");z(this,"$$set")}$destroy(){fe(this,1),this.$destroy=C}$on(t,n){if(!ne(n))return C;const l=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return l.push(n),()=>{const i=l.indexOf(n);i!==-1&&l.splice(i,1)}}$set(t){this.$$set&&!he(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Oe="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Oe);function X(e,t,n){const l=e.slice();return l[2]=t[n],l[3]=t,l[4]=n,l}function Y(e){let t,n=e[2].nev+"",l,i,r,o=e[2].ar+"",d,s,f,u,c,p,O,k;function h(){e[1].call(u,e[3],e[4])}return{c(){t=y("b"),l=E(n),i=N(),r=y("i"),d=E(o),s=E("Ft"),f=E(" - "),u=y("input"),c=E(` db
  `),p=y("br"),_(t,"class","svelte-1u4ycxv"),_(r,"class","svelte-1u4ycxv"),_(u,"type","number"),_(u,"max","99"),_(u,"min","1"),_(u,"class","svelte-1u4ycxv")},m(b,$){v(b,t,$),m(t,l),v(b,i,$),v(b,r,$),m(r,d),m(r,s),v(b,f,$),v(b,u,$),K(u,e[2].db),v(b,c,$),v(b,p,$),O||(k=T(u,"input",h),O=!0)},p(b,$){e=b,$&1&&n!==(n=e[2].nev+"")&&M(l,n),$&1&&o!==(o=e[2].ar+"")&&M(d,o),$&1&&H(u.value)!==e[2].db&&K(u,e[2].db)},d(b){b&&(g(t),g(i),g(r),g(f),g(u),g(c),g(p)),O=!1,k()}}}function Pe(e){let t,n,l,i,r,o=q(e[0]),d=[];for(let s=0;s<o.length;s+=1)d[s]=Y(X(e,o,s));return{c(){t=y("h1"),t.textContent="Kosár",n=N(),l=y("hr"),i=N(),r=y("div");for(let s=0;s<d.length;s+=1)d[s].c();_(r,"class","svelte-1u4ycxv")},m(s,f){v(s,t,f),v(s,n,f),v(s,l,f),v(s,i,f),v(s,r,f);for(let u=0;u<d.length;u+=1)d[u]&&d[u].m(r,null)},p(s,[f]){if(f&1){o=q(s[0]);let u;for(u=0;u<o.length;u+=1){const c=X(s,o,u);d[u]?d[u].p(c,f):(d[u]=Y(c),d[u].c(),d[u].m(r,null))}for(;u<d.length;u+=1)d[u].d(1);d.length=o.length}},i:C,o:C,d(s){s&&(g(t),g(n),g(l),g(i),g(r)),re(d,s)}}}function Le(e,t,n){let{termekek:l}=t;function i(r,o){r[o].db=H(this.value),n(0,l)}return e.$$set=r=>{"termekek"in r&&n(0,l=r.termekek)},[l,i]}class Ne extends ce{constructor(t){super(),oe(this,t,Le,Pe,le,{termekek:0})}}function Z(e,t,n){const l=e.slice();return l[4]=t[n],l}function ee(e){let t,n=e[4].nev+"",l,i,r=e[4].ar+"",o,d,s=e[4].db+"",f,u;return{c(){t=y("div"),l=E(n),i=N(),o=E(r),d=E("Ft - "),f=E(s),u=E(" db"),_(t,"class","elem svelte-dbuk76")},m(c,p){v(c,t,p),m(t,l),m(t,i),m(t,o),m(t,d),m(t,f),m(t,u)},p(c,p){p&1&&n!==(n=c[4].nev+"")&&M(l,n),p&1&&r!==(r=c[4].ar+"")&&M(o,r),p&1&&s!==(s=c[4].db+"")&&M(f,s)},d(c){c&&g(t)}}}function je(e){let t,n,l,i,r,o,d,s,f,u,c,p,O,k=q(e[0]),h=[];for(let a=0;a<k.length;a+=1)h[a]=ee(Z(e,k,a));function b(a){e[2](a)}let $={};return e[0]!==void 0&&($.termekek=e[0]),r=new Ne({props:$}),U.push(()=>ke(r,"termekek",b)),{c(){t=y("main"),n=y("div");for(let a=0;a<h.length;a+=1)h[a].c();l=N(),i=y("div"),we(r.$$.fragment),d=N(),s=y("input"),f=N(),u=y("div"),_(n,"class","cc svelte-dbuk76"),_(i,"class","card"),_(s,"type","range"),_(s,"min","0"),_(s,"max",12*Math.PI),_(s,"step","0.01"),_(s,"class","svelte-dbuk76"),_(u,"class","c svelte-dbuk76"),B(u,"top",300+260*Math.sin(e[1])+"px"),B(u,"left",620+550*Math.cos(e[1])+"px")},m(a,P){v(a,t,P),m(t,n);for(let L=0;L<h.length;L+=1)h[L]&&h[L].m(n,null);m(t,l),m(t,i),ue(r,i,null),m(t,d),m(t,s),K(s,e[1]),m(t,f),m(t,u),c=!0,p||(O=[T(s,"change",e[3]),T(s,"input",e[3])],p=!0)},p(a,[P]){if(P&1){k=q(a[0]);let w;for(w=0;w<k.length;w+=1){const Q=Z(a,k,w);h[w]?h[w].p(Q,P):(h[w]=ee(Q),h[w].c(),h[w].m(n,null))}for(;w<h.length;w+=1)h[w].d(1);h.length=k.length}const L={};!o&&P&1&&(o=!0,L.termekek=a[0],ge(()=>o=!1)),r.$set(L),P&2&&K(s,a[1]),(!c||P&2)&&B(u,"top",300+260*Math.sin(a[1])+"px"),(!c||P&2)&&B(u,"left",620+550*Math.cos(a[1])+"px")},i(a){c||(se(r.$$.fragment,a),c=!0)},o(a){ye(r.$$.fragment,a),c=!1},d(a){a&&g(t),re(h,a),fe(r),p=!1,I(O)}}}function xe(e,t,n){var l=[{nev:"sajt ömlesztett 100g",ar:2e3,db:1},{nev:"tejföl 200g tesco",ar:1800,db:1}],i=0;function r(d){l=d,n(0,l)}function o(){i=H(this.value),n(1,i)}return[l,i,r,o]}class Ae extends ce{constructor(t){super(),oe(this,t,xe,je,le,{})}}new Ae({target:document.getElementById("app")});
