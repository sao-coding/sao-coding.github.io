function switchNightMode(){document.querySelector("body").insertAdjacentHTML("beforeend",'<div class="Cuteen_DarkSky"><div class="Cuteen_DarkPlanet"></div></div>'),setTimeout((function(){document.querySelector("body").classList.contains("DarkMode")?(document.querySelector("body").classList.remove("DarkMode"),localStorage.setItem("isDark","0"),document.getElementById("modeicon").setAttribute("xlink:href","#icon-moon")):(document.querySelector("body").classList.add("DarkMode"),localStorage.setItem("isDark","1"),document.getElementById("modeicon").setAttribute("xlink:href","#icon-sun")),setTimeout((function(){document.getElementsByClassName("Cuteen_DarkSky")[0].style.transition="opacity 3s",document.getElementsByClassName("Cuteen_DarkSky")[0].style.opacity="0",setTimeout((function(){document.getElementsByClassName("Cuteen_DarkSky")[0].remove()}),1e3)}),2e3)}));"light"===("dark"===document.documentElement.getAttribute("data-theme")?"dark":"light")?(activateDarkMode(),saveToLocal.set("theme","dark",2),void 0!==GLOBAL_CONFIG.Snackbar&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night),document.getElementById("modeicon").setAttribute("xlink:href","#icon-sun"),document.querySelector("#artalk-wrap").classList.add("atk-dark-mode")):(activateLightMode(),saveToLocal.set("theme","light",2),void 0!==GLOBAL_CONFIG.Snackbar&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day),document.querySelector("body").classList.add("DarkMode"),document.getElementById("modeicon").setAttribute("xlink:href","#icon-moon"),document.querySelector("#artalk-wrap").classList.remove("atk-dark-mode")),"function"==typeof utterancesTheme&&utterancesTheme(),"function"==typeof changeGiscusTheme&&changeGiscusTheme(),"object"==typeof FB&&window.loadFBComment&&window.loadFBComment(),"function"==typeof runMermaid&&window.runMermaid(),window.DISQUS&&document.getElementById("disqus_thread").children.length&&setTimeout((()=>window.disqusReset()),200)}