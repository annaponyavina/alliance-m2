!function(e){var t={};function o(n){if(t[n])return t[n].exports;var l=t[n]={i:n,l:!1,exports:{}};return e[n].call(l.exports,l,l.exports,o),l.l=!0,l.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)o.d(n,l,function(t){return e[t]}.bind(null,l));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){"use strict";o.r(t);var n=()=>{const e=document.querySelector(".nav"),t=document.querySelector(".button-order"),o=document.querySelector(".button-calc"),n=document.getElementById("calc"),l=document.getElementById("request"),r=e=>{e.scrollIntoView({behavior:"smooth",block:"start"})};e&&(e.addEventListener("click",e=>{e.preventDefault();let t=e.target;if(t.classList.contains("nav-item")){const e=t.getAttribute("href").slice(1),o=document.getElementById(e);r(o)}}),t.addEventListener("click",e=>{e.preventDefault(),r(l)}),o.addEventListener("click",e=>{e.preventDefault(),r(n)}))};var l=()=>{const e=document.querySelector(".portfolio-dots"),t=document.querySelectorAll(".portfolio-item");if(null!==t){for(let o=0;o<t.length;o++){let t=document.createElement("li");t.classList.add("dot"),0===o&&t.classList.add("dot-active"),e.append(t)}const o=document.querySelectorAll(".dot"),n=document.querySelector(".portfolio-img");let l,r=0;const c=(e,t,o)=>{e[t]&&e[t].classList.remove(o)},a=(e,t,o)=>{e[t]&&e[t].classList.add(o)},s=()=>{c(t,r,"portfolio-item-active"),c(o,r,"dot-active"),r++,r>=t.length&&(r=0),a(t,r,"portfolio-item-active"),a(o,r,"dot-active")},u=(e=3e3)=>{l=setInterval(s,e)},i=()=>{clearInterval(l)};n&&(n.addEventListener("click",e=>{e.preventDefault();let n=e.target;n.matches(".portfolio-btn, .dot")&&(c(t,r,"portfolio-item-active"),c(o,r,"dot-active"),n.matches("#arrow-right")?r++:n.matches("#arrow-left")?r--:n.matches(".dot")&&o.forEach((e,t)=>{e===n&&(r=t)}),r>=t.length&&(r=0),r<0&&(r=t.length-1),a(t,r,"portfolio-item-active"),a(o,r,"dot-active"))}),n.addEventListener("mouseover",e=>{(e.target.matches(".portfolio-btn")||e.target.matches(".dot"))&&i()}),n.addEventListener("mouseout",e=>{(e.target.matches(".portfolio-btn")||e.target.matches(".dot"))&&u()})),u(1500)}};var r=()=>{const e=document.getElementById("burger"),t=document.querySelector(".nav"),o=document.querySelectorAll(".complect_button");e&&e.addEventListener("click",()=>{t.style.display="flex"}),o&&o.forEach((e,t)=>{e.addEventListener("click",()=>{document.getElementById("popup-complect"+(t+1)).style.display="flex"})}),document.addEventListener("click",e=>{let o=e.target;window.innerWidth<1402&&(o.classList.contains("nav-item")||o.classList.contains("menu-cross"))&&(t.style.display="none"),o.classList.contains("form-close-icon")&&(o.closest(".popup-form")&&(o.closest(".popup-form").style.display="none"),o.closest(".popup-complect")&&(o.closest(".popup-complect").style.display="none"))})};var c=()=>{const e=document.querySelector(".calc-block");if(e){const t=document.getElementById("calc-type"),o=document.getElementById("calc-kind"),n=e.querySelector(".calc-square"),l=e.querySelector(".calc-day"),r=document.getElementById("total"),c=e.querySelector(".calc-button");e.addEventListener("input",e=>{let t=e.target;!t.matches("select")&&t.matches("input")&&(t.value=t.value.replace(/[^\d]/g,""))});const a=()=>{let e=0,c=1;const a=t.options[t.selectedIndex].value,s=o.options[o.selectedIndex].value,u=+n.value;l.value&&l.value<5?c*=2:l.value&&l.value<10&&(c*=1.5),a&&s&&u&&(e=a*s*u*c),t.style.borderColor=a?"rgba(255, 255, 355, 0.5":"red",o.style.borderColor=s?"rgba(255, 255, 355, 0.5":"red",n.style.borderColor=u?"rgba(255, 255, 355, 0.5":"red",r.textContent=e};c.addEventListener("click",()=>{a()})}};var a=()=>{const e=document.getElementById("send-ok"),t=document.getElementById("send-error"),o=document.querySelectorAll("input");document.addEventListener("input",e=>{let t=e.target;"user-phone"===t.getAttribute("name")&&(t.value=t.value.replace(/[^\d+]/g,""),"+"===t.value[0]&&(t.value=t.value.slice(0,12)),"+"!==t.value[0]&&(t.value=t.value.slice(0,11))),"user-name"===t.getAttribute("name")&&(t.value=t.value.replace(/[^а-я ]/gi,"")),"user-email"===t.getAttribute("name")&&(t.value=t.value.replace(/[а-я ]/gi,""))}),document.addEventListener("submit",l=>{let r=l.target;l.preventDefault();const c=new FormData(r);let a={};c.forEach((e,t)=>{a[t]=e}),n(a).then(t=>{if(200!==t.status)throw new Error("status network not 200");e.style.display="flex",setTimeout(()=>{e.style.display="none"},5e3)}).catch(e=>{t.style.display="flex",setTimeout(()=>{t.style.display="none"},5e3),console.error(e)});for(let e=0;e<o.length;e++)o[e].value=""});const n=e=>fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e),credentials:"include"})};n(),l(),r(),c(),a()}]);