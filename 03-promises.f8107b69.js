function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},i=o.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var i={id:e,exports:{}};return n[e]=i,o.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,o){t[e]=o},o.parcelRequired7c6=i);var r=i("eWCmQ");const l={form:document.querySelector(".form"),delay:document.querySelector('[name="delay"]'),step:document.querySelector('[name="step"]'),amount:document.querySelector('[name="amount"]')};function u(e,o){return new Promise(((n,t)=>{const i=Math.random()>.3;setTimeout((()=>{i?n({position:e,delay:o}):t({position:e,delay:o})}),o)}))}function s({position:o,delay:n}){console.log(`✅ Fulfilled promise ${o} in ${n}ms`),e(r).Notify.success(`✅ Fulfilled promise ${o} in ${n}ms`)}function d({position:o,delay:n}){console.log(`❌ Rejected promise ${o} in ${n}ms`),e(r).Notify.failure(`❌ Rejected promise ${o} in ${n}ms`)}l.form.addEventListener("submit",(function(e){e.preventDefault();let o=Number(l.delay.value);const n=Number(l.amount.value),t=Number(l.step.value);for(let e=0;e<n;e++)position=e+1,0===e||(o+=t),u(position,o).then(s).catch(d)}));
//# sourceMappingURL=03-promises.f8107b69.js.map
