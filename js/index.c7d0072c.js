(()=>{"use strict";var e={332:(e,t,n)=>{e.exports=n.p+"imgs/icons/cancel-close-svgrepo-com.709ffec8.svg"},413:(e,t,n)=>{e.exports=n.p+"imgs/weather-icons/clear-day.41dfabd0.svg"},137:(e,t,n)=>{e.exports=n.p+"imgs/weather-icons/clear-night.915669c6.svg"},777:(e,t,n)=>{e.exports=n.p+"imgs/weather-icons/cloudy.9f582731.svg"},183:(e,t,n)=>{e.exports=n.p+"imgs/weather-icons/fog.cdb34500.svg"},95:(e,t,n)=>{e.exports=n.p+"imgs/weather-icons/hail.16d1d890.svg"},361:(e,t,n)=>{e.exports=n.p+"imgs/weather-icons/partly-cloudy-day.2f25a961.svg"},381:(e,t,n)=>{e.exports=n.p+"imgs/weather-icons/partly-cloudy-night.173fae26.svg"},730:(e,t,n)=>{e.exports=n.p+"imgs/weather-icons/rain-snow-showers-day.b9734e20.svg"},294:(e,t,n)=>{e.exports=n.p+"imgs/weather-icons/rain-snow-showers-night.1b863439.svg"},101:(e,t,n)=>{e.exports=n.p+"imgs/weather-icons/rain-snow.c87aeec7.svg"},443:(e,t,n)=>{e.exports=n.p+"imgs/weather-icons/rain.1f3928ec.svg"},707:(e,t,n)=>{e.exports=n.p+"imgs/weather-icons/showers-day.1875d48e.svg"},564:(e,t,n)=>{e.exports=n.p+"imgs/weather-icons/showers-night.9a211502.svg"},646:(e,t,n)=>{e.exports=n.p+"imgs/weather-icons/sleet.0d240fe3.svg"},279:(e,t,n)=>{e.exports=n.p+"imgs/weather-icons/snow-showers-day.d219b72d.svg"},347:(e,t,n)=>{e.exports=n.p+"imgs/weather-icons/snow-showers-night.732a5700.svg"},480:(e,t,n)=>{e.exports=n.p+"imgs/weather-icons/snow.addc1e83.svg"},272:(e,t,n)=>{e.exports=n.p+"imgs/weather-icons/thunder-rain.2e9ae693.svg"},502:(e,t,n)=>{e.exports=n.p+"imgs/weather-icons/thunder-showers-day.e5fb3f4b.svg"},810:(e,t,n)=>{e.exports=n.p+"imgs/weather-icons/thunder-showers-night.519367db.svg"},977:(e,t,n)=>{e.exports=n.p+"imgs/weather-icons/thunder.1f9fd4d2.svg"},287:(e,t,n)=>{e.exports=n.p+"imgs/weather-icons/wind.5195e076.svg"}},t={};function n(o){var s=t[o];if(void 0!==s)return s.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,n),a.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&"SCRIPT"===t.currentScript.tagName.toUpperCase()&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");if(o.length)for(var s=o.length-1;s>-1&&(!e||!/^http(s?):/.test(e));)e=o[s--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e+"../"})();const o=document.querySelector(".today-btn"),s=document.querySelector(".dates-div"),a=document.querySelector("[data-name='today']"),i=document.querySelector("[data-name='hourly']"),r=document.querySelector("[data-name='fifteen']"),c=document.querySelector("[data-name='historic']"),l=document.querySelector(".loader-div"),d=document.querySelector(".err-box-div"),u=document.querySelector(".clear-err"),p="FYZ4WWVAF3DKLSGYMBZA734P4",m=(new Date).toISOString().substring(0,10),h=(new Date).toString().slice(0,15),g=new Date;g.setDate((new Date).getDate()+14);const y=g.toISOString().substring(0,10),f=new Date;f.setDate((new Date).getDate()-9);const v=f.toISOString().substring(0,10),C=new Date;C.setDate((new Date).getDate()-1);const w=C.toISOString().substring(0,10),L=document.getElementById("saved-locations"),S=JSON.parse(localStorage.locationValues||"[]");localStorage.setItem("locationValues",JSON.stringify(S));const b=document.getElementById("forecast-form"),x=document.querySelector(".location"),E=document.querySelector(".input-error"),A=document.getElementsByName("units"),D=document.querySelector(".start"),q=document.querySelector(".end");let O={userLocation:"",get enteredLocation(){return this.userLocation},set enteredLocation(e){this.userLocation=e}},V={userUnitValue:"",get enteredUnitValue(){return this.userUnitValue},set enteredUnitValue(e){this.userUnitValue=e}},k={userDate1:"",get enteredDate1(){return this.userDate1},set enteredDate1(e){this.userDate1=e}},N={userDate2:"",get enteredDate2(){return this.userDate2},set enteredDate2(e){this.userDate2=e}},I={latitude:"",get userLatitude(){return this.latitude},set userLatitude(e){this.latitude=e}},J={longitude:"",get userLongitude(){return this.longitude},set userLongitude(e){this.longitude=e}},W={returnedLocation:"",get responseLocation(){return this.returnedLocation},set responseLocation(e){this.returnedLocation=e}};function T(e){const t=e.target,n=t.parentNode,o=n.parentNode;console.log(e.target),n.querySelectorAll(':scope > [aria-selected="true"]').forEach((e=>{e.setAttribute("aria-selected",!1),e.classList.remove("tab-btn--active")})),t.setAttribute("aria-selected",!0),t.classList.add("tab-btn--active"),"historic"===t.dataset.tab?(D.value=v,D.setAttribute("max",w),q.value=m,q.setAttribute("max",m),s.style.display="initial"):s.style.display="none",o.querySelectorAll(':scope > [role="tabpanel"]').forEach((e=>{e.classList.remove("forecast-info--active")})),o.querySelector(`#${t.getAttribute("aria-controls")}`).classList.add("forecast-info--active")}function U(){!function(){for(;L.firstChild;)L.removeChild(L.firstChild)}(),function(){const e=document.createElement("option");e.value="",e.setAttribute("disabled",!0),e.textContent="--Please choose a location--",L.appendChild(e);const t=JSON.parse(localStorage.getItem("locationValues"));for(let e=0;e<t.length;e++){const n=document.createElement("option");n.value=t[e],n.textContent=t[e],L.appendChild(n),n.value===t[t.length-1]&&n.setAttribute("selected",!0)}}()}async function M(){const e={method:"GET"};try{const t=await fetch("https://api.geoapify.com/v1/geocode/reverse?lat="+I.latitude+"&lon="+J.longitude+"&apiKey=cd840e39cf3b4160a25abcf0554fdc0c",{requestOptions:e,mode:"cors",credentials:"omit"}),n=await t.json();if(console.log(n),console.log("Copyright Attribution: OpenStreetMap, openstreetmap.org/copyright"),W.responseLocation=n.features[0].properties.city+", "+n.features[0].properties.state_code+", "+n.features[0].properties.country,S.includes(W.returnedLocation)){const e=JSON.parse(localStorage.getItem("locationValues"));e.splice(e.indexOf(W.returnedLocation),1),e.push(W.returnedLocation),localStorage.setItem("locationValues",JSON.stringify(e)),U()}else{const e=JSON.parse(localStorage.getItem("locationValues"));e.push(W.returnedLocation),localStorage.setItem("locationValues",JSON.stringify(e)),console.log(JSON.parse(localStorage.getItem("locationValues"))),U()}}catch(e){console.error(`Critical failure: ${e.message}`)}}const $={"clear-day":n(413),"clear-night":n(137),cloudy:n(777),fog:n(183),hail:n(95),"partly-cloudy-day":n(361),"partly-cloudy-night":n(381),"rain-snow-shower-day":n(730),"rain-snow-shower-night":n(294),"rain-snow":n(101),rain:n(443),"showers-day":n(707),"showers-night":n(564),sleet:n(646),"snow-showers-day":n(279),"snow-showers-night":n(347),snow:n(480),"thunder-rain":n(272),"thunder-showers-day":n(502),"thunder-showers-night":n(810),thunder:n(977),wind:n(287)};async function B(){try{l.style.display="initial";const e=await fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/"+O.userLocation+"/"+m+"/"+y+"?unitGroup="+V.userUnitValue+"&key="+p,{mode:"cors",credentials:"omit"}),t=await e.json();console.log(t),I.userLatitude=t.latitude,J.userLongitude=t.longitude,l.style.display="none",function(e){document.querySelector(".today-forecast-card");const t=document.querySelector(".today-date"),n=document.querySelector(".today-description"),o=document.querySelector(".today-icon-div"),s=document.querySelector(".today-temp"),a=document.querySelector(".today-feels"),i=document.querySelector(".today-min"),r=document.querySelector(".today-max");m===e.days[0].datetime&&(t.textContent=h,t.style.fontWeight="bold"),n.textContent=e.days[0].description,o.hasChildNodes()&&o.firstChild.remove();const c=e.days[0].icon,l=$[c];if(l){const e=document.createElement("img");e.src=l,e.classList.add("weather-icon"),e.setAttribute("alt",c+" icon"),o.appendChild(e)}s.textContent=e.days[0].temp+"°",a.textContent=e.days[0].feelslike+"°",i.textContent=e.days[0].tempmin+"°",r.textContent=e.days[0].tempmax+"°"}(t),function(e){!function(){for(;i.firstChild;)i.removeChild(i.firstChild)}();const t=(new Date).getHours().toString().padStart(2,"0")+":00:00",n=[...e.days[0].hours,...e.days[1].hours];console.log(n);const o=n.find((({datetime:e})=>e===t)),s=n.indexOf(o);for(let e=s;e<s+12;e++){console.log(n[e]);const t=document.createElement("div");t.classList="forecast-card";const o=document.createElement("div");o.classList="data-line hour-line";const s=document.createElement("p");s.classList="hour",s.style.fontWeight="bold",s.textContent=n[e].datetime;const a=document.createElement("div");a.classList="data-line hourly-icon-div";const r=n[e].icon,c=$[r];if(c){const e=document.createElement("img");e.src=c,e.classList.add("weather-icon"),e.setAttribute("alt",r+" icon"),a.appendChild(e)}const l=document.createElement("div");l.classList="hourly-temp-feel-div";const d=document.createElement("div");d.classList="data-line temp-line";const u=document.createElement("p");u.classList="data-heading",u.textContent="Temperature:";const p=document.createElement("p");p.classList="today-temp",p.textContent=n[e].temp+"°";const m=document.createElement("p");m.classList="data-heading hour-feels-heading",m.textContent="Feels Like:";const h=document.createElement("p");h.classList="today-feels",h.textContent=n[e].feelslike+"°",i.appendChild(t),t.appendChild(o),o.appendChild(s),t.appendChild(a),t.appendChild(l),l.appendChild(d),d.appendChild(u),d.appendChild(p),l.appendChild(d),d.appendChild(m),d.appendChild(h)}}(t),function(e){!function(){for(;r.firstChild;)r.removeChild(r.firstChild)}(),e.days.forEach((e=>{const t=document.createElement("div");t.classList="forecast-card";const n=document.createElement("div");n.classList="data-line date-line";const o=document.createElement("p");o.classList="date",o.style.fontWeight="bold";const s=document.createElement("div");s.classList="data-line icon-div";const a=document.createElement("div");a.classList="min-max-div";const i=document.createElement("div");i.classList="data-line min-line";const c=document.createElement("p");c.classList="data-heading min-heading",c.textContent="Min-Temp:";const l=document.createElement("p");l.classList="min";const d=document.createElement("div");d.classList="data-line max-line";const u=document.createElement("p");u.classList="data-heading max-heading",u.textContent="Max-Temp:";const p=document.createElement("p");p.classList="max";const m=new Date(e.datetime).toString().slice(0,15);o.textContent=m;const h=e.icon,g=$[h];if(g){const e=document.createElement("img");e.src=g,e.classList.add("weather-icon"),e.setAttribute("alt",h+" icon"),s.appendChild(e)}l.textContent=e.tempmin+"°",p.textContent=e.tempmax+"°",r.appendChild(t),t.appendChild(n),n.appendChild(o),t.appendChild(s),t.appendChild(a),a.appendChild(i),i.appendChild(c),i.appendChild(l),a.appendChild(d),d.appendChild(u),d.appendChild(p)}))}(t)}catch(e){console.error(`Critical failure: ${e.message}`),l.style.display="none",d.style.display="initial",u.focus()}finally{M()}}function j(){a.classList.contains("forecast-info--active")||i.classList.contains("forecast-info--active")||r.classList.contains("forecast-info--active")?(console.log("Loading Today..."),F(),B(),G()):c.classList.contains("forecast-info--active")&&(console.log("Loading Historic..."),F(),async function(){l.style.display="initial",console.log(k.userDate1),console.log(N.userDate2);try{const e=await fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/"+O.userLocation+"/"+k.userDate1+"/"+N.userDate2+"?unitGroup="+V.userUnitValue+"&key="+p+"&include=days",{mode:"cors",credentials:"omit"}),t=await e.json();console.log(t),l.style.display="none",I.userLatitude=t.latitude,J.userLongitude=t.longitude,function(e){!function(){for(;c.firstChild;)c.removeChild(c.firstChild)}(),e.days.forEach((e=>{const t=document.createElement("div");t.classList="forecast-card";const n=document.createElement("div");n.classList="data-line date-line";const o=document.createElement("p");o.classList="date",o.style.fontWeight="bold";const s=document.createElement("div");s.classList="data-line icon-div";const a=document.createElement("div");a.classList="min-max-div";const i=document.createElement("div");i.classList="data-line min-line";const r=document.createElement("p");r.classList="data-heading min-heading",r.textContent="Min-Temp:";const l=document.createElement("p");l.classList="min";const d=document.createElement("div");d.classList="data-line max-line";const u=document.createElement("p");u.classList="data-heading max-heading",u.textContent="Max-Temp:";const p=document.createElement("p");p.classList="max";const m=new Date(e.datetime).toString().slice(0,15);console.log(m),o.textContent=m;const h=e.icon,g=$[h];if(g){const e=document.createElement("img");e.src=g,e.classList.add("weather-icon"),e.setAttribute("alt",h+" icon"),s.appendChild(e)}l.textContent=e.tempmin+"°",p.textContent=e.tempmax+"°",c.appendChild(t),t.appendChild(n),n.appendChild(o),t.appendChild(s),t.appendChild(a),a.appendChild(i),i.appendChild(r),i.appendChild(l),a.appendChild(d),d.appendChild(u),d.appendChild(p)}))}(t)}catch(e){console.error(`Critical failure: ${e.message}`),l.style.display="none",d.style.display="initial",u.focus()}finally{M()}}(),G())}function F(){!x.value&&L.value?O.enteredLocation=L.value:(x.value&&!L.value||x.value&&L.value)&&(O.enteredLocation=x.value,console.log(O.userLocation)),k.enteredDate1=D.value,N.enteredDate2=q.value;for(let e of A)e.checked&&(V.enteredUnitValue=JSON.parse(localStorage.getItem("unitValue")))}function G(){x.value=""}console.log("Weather App"),document.addEventListener("DOMContentLoaded",(()=>{U(),L.addEventListener("change",(()=>{const e=Array.from(L);for(let t of e)t.removeAttribute("selected",!0),t.selected&&t.setAttribute("selected",!0)})),function(){JSON.parse(localStorage.getItem("unitValue"))?A.value=JSON.parse(localStorage.getItem("unitValue")):(localStorage.setItem("unitValue",JSON.stringify("us")),console.log(JSON.parse(localStorage.getItem("unitValue"))));for(let e of A)JSON.parse(localStorage.getItem("unitValue"))===e.value?e.setAttribute("checked",!0):e.removeAttribute("checked",!1),e.addEventListener("change",(()=>{e.checked?(localStorage.setItem("unitValue",JSON.stringify(e.value)),e.setAttribute("checked",!0)):e.checked||e.removeAttribute("checked",!0)}));console.log(JSON.parse(localStorage.getItem("unitValue")))}(),function(){const e=document.querySelector('[role="tablist"]'),t=e.querySelectorAll(':scope > [role="tab"]');o.classList.add("tab-btn--active"),a.classList.add("forecast-info--active"),t.forEach((e=>{e.addEventListener("pointerdown",T)})),t.forEach((e=>{e.addEventListener("keydown",(e=>{"Enter"!==e.key&&" "!==e.key||T(e)}))}));let n=0;e.addEventListener("keydown",(e=>{"ArrowDown"!==e.key&&"ArrowUp"!==e.key||(t[n].setAttribute("tabindex",-1),"ArrowDown"===e.key?(n++,n>=t.length&&(n=0)):"ArrowUp"===e.key&&(n--,n<0&&(n=t.length-1)),t[n].setAttribute("tabindex",0),t[n].focus())}))}(),b.addEventListener("submit",(e=>{e.preventDefault(),x.value||L.value?(E.style.display="none",console.log("Click!"),j()):(E.style.display="initial",console.log("No location input"))})),function(){const e=document.querySelector(".edit-btn"),t=document.querySelector(".edit-btn-img"),o=document.querySelector(".loc-edit-box");e.addEventListener("pointerdown",(s=>{if(s.preventDefault(),(s.target===e||s.target===t)&&L.length<=1){o.style.display="initial";const e=document.createElement("div");e.setAttribute("class","no-locs-div");const t=document.createElement("p");t.setAttribute("class","no-locs"),t.textContent="You do not have any saved locations.",t.style.fontWeight="bold";const n=document.createElement("button");for(n.type="button",n.textContent="OK",n.setAttribute("class","confirm-btn");o.firstChild;)o.removeChild(o.firstChild);o.appendChild(e),e.appendChild(t),e.appendChild(n),n&&n.focus(),n.addEventListener("pointerdown",(()=>{o.style.display="none",x.focus()})),n.addEventListener("keydown",(e=>{"Enter"!==e.key&&" "!==e.key||(o.style.display="none",x.focus())}))}if((s.target===e||s.target===t)&&L.length>1){o.style.display="initial";const e=document.querySelector(".edit-form"),t=document.createElement("div");t.setAttribute("class","cancel-div");const s=document.createElement("button");s.setAttribute("class","cancel-btn");const a=document.createElement("img");a.setAttribute("class","cancel-btn-img"),a.src=n(332),a.alt="Close Window Button";const i=document.createElement("p");i.setAttribute("class","instruct"),i.textContent="Select location to remove:",i.style.fontWeight="bold";const r=JSON.parse(localStorage.getItem("locationValues")),c=document.createElement("button");c.type="button",c.textContent="Remove Location",c.setAttribute("class","rmv-btn");const l=document.createElement("select");for(l.setAttribute("size",r.length+1),l.setAttribute("name","edit-menu"),l.setAttribute("class","edit-menu");e.firstChild;)e.removeChild(e.firstChild);for(let n=0;n<r.length;n++){const o=document.createElement("option");o.value=r[n],o.textContent=r[n],o.setAttribute("class","options"),e.appendChild(t),t.appendChild(s),s.appendChild(a),e.appendChild(i),e.appendChild(l),l.appendChild(o),e.appendChild(c)}let d="";l.addEventListener("pointerdown",(e=>{d=e.target.value})),o.addEventListener("pointerdown",(e=>{if(e.target===a&&(o.style.display="none"),e.target===c){const e=JSON.parse(localStorage.getItem("locationValues"));e.splice(r.indexOf(d),1),localStorage.setItem("locationValues",JSON.stringify(e)),console.log(JSON.parse(localStorage.getItem("locationValues"))),U(),o.style.display="none"}}))}}))}(),u.addEventListener("pointerdown",(()=>{d.style.display="none"})),u.addEventListener("keydown",(e=>{"Enter"!==e.key&&" "!==e.key||(d.style.display="none")}))})),window.addEventListener("load",(()=>{(x.value||L.value)&&j()}))})();
//# sourceMappingURL=index.c7d0072c.js.map