import"./assets/styles-f3039817.js";import{i as m}from"./assets/vendor-651d7991.js";document.addEventListener("DOMContentLoaded",function(){const s=document.querySelector("[data-show-snackbar]"),i=document.querySelector("form");s&&s.addEventListener("click",function(){}),i&&i.addEventListener("submit",function(n){n.preventDefault();const e=parseInt(this.elements.delay.value,10),o=this.elements.state.value;new Promise((t,c)=>{setTimeout(()=>{o==="fulfilled"?t(e):c(e)},e)}).then(t=>r("Success",`✅ Fulfilled promise in ${t}ms`,"#59A10D"),t=>r("Error",`❌ Rejected promise in ${t}ms`,"#EF4040"))});function r(n,e,o){const a={title:n,message:e,backgroundColor:o};m.show(a)}});
//# sourceMappingURL=commonHelpers2.js.map
