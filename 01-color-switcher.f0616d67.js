const t=document.getElementById("startButton"),e=document.getElementById("stopButton"),d=document.body;let n;t.addEventListener("click",(()=>{n||(n=setInterval((()=>{d.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,"0")}`}),1e3),t.disabled=!0,e.disabled=!1)})),e.addEventListener("click",(()=>{n&&(clearInterval(n),n=null,t.disabled=!1,e.disabled=!0)}));
//# sourceMappingURL=01-color-switcher.f0616d67.js.map
