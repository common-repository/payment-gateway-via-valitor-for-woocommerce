(()=>{"use strict";var e,t={232:()=>{const e=window.React,t=window.wc.wcBlocksRegistry,r=window.wp.i18n,n=window.wc.wcSettings,o=window.wp.htmlEntities;var a;const i=(0,n.getPaymentMethodData)("valitor",{}),l=(0,r.__)("Valitor","valitor_woocommerce"),c=(0,o.decodeEntities)(i?.title||"")||l,s=i.cardsIcon,p=()=>(0,o.decodeEntities)(i.description||""),v={name:"valitor",label:(0,e.createElement)((t=>{const{PaymentMethodLabel:r}=t.components;return[(0,e.createElement)(r,{text:c}),(0,e.createElement)("span",{class:"valitor-cards-icon"},(0,e.createElement)("img",{src:s,alt:c}))]}),null),content:(0,e.createElement)(p,null),edit:(0,e.createElement)(p,null),canMakePayment:()=>!0,ariaLabel:c,supports:{features:null!==(a=i?.supports)&&void 0!==a?a:[]}};(0,t.registerPaymentMethod)(v)}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var a=r[e]={exports:{}};return t[e](a,a.exports,n),a.exports}n.m=t,e=[],n.O=(t,r,o,a)=>{if(!r){var i=1/0;for(p=0;p<e.length;p++){for(var[r,o,a]=e[p],l=!0,c=0;c<r.length;c++)(!1&a||i>=a)&&Object.keys(n.O).every((e=>n.O[e](r[c])))?r.splice(c--,1):(l=!1,a<i&&(i=a));if(l){e.splice(p--,1);var s=o();void 0!==s&&(t=s)}}return t}a=a||0;for(var p=e.length;p>0&&e[p-1][2]>a;p--)e[p]=e[p-1];e[p]=[r,o,a]},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={692:0,826:0,431:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var o,a,[i,l,c]=r,s=0;if(i.some((t=>0!==e[t]))){for(o in l)n.o(l,o)&&(n.m[o]=l[o]);if(c)var p=c(n)}for(t&&t(r);s<i.length;s++)a=i[s],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(p)},r=globalThis.webpackChunkwc_checkout_payment_valitor=globalThis.webpackChunkwc_checkout_payment_valitor||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var o=n.O(void 0,[431],(()=>n(232)));o=n.O(o)})();