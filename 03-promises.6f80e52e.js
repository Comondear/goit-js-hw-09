function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},r=o.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var r={id:e,exports:{}};return n[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,o){t[e]=o},o.parcelRequired7c6=r);var i=r("eWCmQ");const l={form:document.querySelector(".form"),delay:document.querySelector('[name="delay"]'),step:document.querySelector('[name="step"]'),amount:document.querySelector('[name="amount"]')};l.form.addEventListener("submit",(function(e){e.preventDefault();let o=Number(l.delay.value);const n=Number(l.amount.value),t=Number(l.step.value);for(let e=0;e<n;e++)u=e+1,0===e||(o+=t),s(u,o).then(d).catch(a)}));let u=0;function s(e,o){return new Promise(((n,t)=>{const r=Math.random()>.3;setTimeout((()=>{r?n({position:e,delay:o}):t({position:e,delay:o})}),o)}))}function d({position:o,delay:n}){console.log(`✅ Fulfilled promise ${o} in ${n}ms`),e(i).Notify.success(`✅ Fulfilled promise ${o} in ${n}ms`)}function a({position:o,delay:n}){console.log(`❌ Rejected promise ${o} in ${n}ms`),e(i).Notify.failure(`❌ Rejected promise ${o} in ${n}ms`)}
//# sourceMappingURL=03-promises.6f80e52e.js.map
