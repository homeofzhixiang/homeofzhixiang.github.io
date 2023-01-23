var now = new Date; function createtime() {
     now.setTime(now.getTime() + 1e3); 
     var e = new Date("01/23/2022 00:00:00"), 
     t = Math.trunc(234e8 + (now - e) / 1e3 * 17), 
     a = (t / 1496e5).toFixed(6), o = new Date("01/23/2023 00:00:00"), 
     n = (now - o) / 1e3 / 60 / 60 / 24, r = Math.floor(n), 
     i = (now - o) / 1e3 / 60 / 60 - 24 * r, s = Math.floor(i); 
     1 == String(s).length && (s = "0" + s); 
     var d = (now - o) / 1e3 / 60 - 1440 * r - 60 * s, l = Math.floor(d); 
     1 == String(l).length && (l = "0" + l); 
     var g = (now - o) / 1e3 - 86400 * r - 3600 * s - 60 * l, b = Math.round(g); 
     1 == String(b).length && (b = "0" + b); let c = ""; 
     c = s < 18 && s >= 9 ? `<img class='boardsign' src='https://img.shields.io/badge/ZX%E3%81%AE%E5%B0%8F%E5%B1%8B-%E5%BC%80%E5%A7%8B%E5%AD%A6%E4%B9%A0!ing-blue?style=social&logo=Bilibili' title='什么时候能够实现财富自由呀~'><br> 
     <div style="font-size:13px;font-weight:bold">本站居然运行了 ${r} 天 ${s} 小时 ${l} 分 ${b} 秒 <i id="heartbeat" class='fas fa-heartbeat'></i> <br> 旅行者 1 号当前距离地球 ${t} 千米，约为 ${a} 个天文单位 🚀</div>` : `<img class='boardsign' src='https://img.shields.io/badge/ZX%E3%81%AE%E5%B0%8F%E5%B1%8B-%E7%BB%A7%E7%BB%AD%E5%AD%A6%E4%B9%A0!ing-blue?style=social&logo=Bilibili' title='下班了就该开开心心地玩耍~'><br> 
     <div style="font-size:13px;font-weight:bold">本站居然运行了 ${r} 天 ${s} 小时 ${l} 分 ${b} 秒 <i id="heartbeat" class='fas fa-heartbeat'></i> <br> 旅行者 1 号当前距离地球 ${t} 千米，约为 ${a} 个天文单位 🚀</div>`, document.getElementById("workboard") && (document.getElementById("workboard").innerHTML = c) 
    } 
setInterval((() => { createtime() }), 1e3);



// var now=new Date;function createtime(){
//     now.setTime(now.getTime()+1e3);
//     var e=new Date("11/11/2022 00:00:00"),
//     t=Math.trunc(234e8+(now-e)/1e3*17),
//     a=(t/1496e5).toFixed(6),
//     o=new Date("11/11/2022 00:00:00"),
//     i=(now-o)/1e3/60/60/24,
//     n=Math.floor(i),
//     r=(now-o)/1e3/60/60-24*n,
//     l=Math.floor(r);
//     1==String(l).length&&(l="0"+l);
//     var s=(now-o)/1e3/60-1440*n-60*l,
//     g=Math.floor(s);1==String(g).length&&(g="0"+g);
//     var d=(now-o)/1e3-86400*n-3600*l-60*g,h=Math.round(d);
//     1==String(h).length&&(h="0"+h);let b="";
//     b=l<18&&l>=9?`<img class='boardsign' src='https://img.shields.io/badge/Meow%E5%B0%8F%E5%B1%8B-%E9%92%93%E9%B1%BC%E4%B8%ADing-blue?style=social&logo=cakephp' title='什么时候能够实现财富自由呀~'><br> 
//     <div style="font-size:13px;font-weight:bold">本站居然运行了 ${n} 天 ${l} 小时 ${g} 分 ${h} 秒 <i id="heartbeat" class='fas fa-heartbeat'></i> <br> 旅行者 1 号当前距离地球 ${t} 千米，约为 ${a} 个天文单位 🚀</div>`:`<img class='boardsign' src='https://img.shields.io/badge/Meow%E5%B0%8F%E5%B1%8B-%E9%92%93%E5%AE%8C%E9%B1%BC%E5%95%A6!ing-blue?style=social&logo=cakephp' title='钓完鱼就该开开心心地玩耍~'><br> 
//     <div style="font-size:13px;font-weight:bold">本站居然运行了 ${n} 天 ${l} 小时 ${g} 分 ${h} 秒 <i id="heartbeat" class='fas fa-heartbeat'></i> <br> 旅行者 1 号当前距离地球 ${t} 千米，约为 ${a} 个天文单位 🚀</div>`,document.getElementById("workboard")&&(document.getElementById("workboard").innerHTML=b)}
//     setInterval((()=>{createtime()}),1e3);