window.addEventListener("load",(()=>{const e=()=>{const e=document.body.style;e.width="100%",e.overflow="hidden",btf.animateIn(document.getElementById("search-mask"),"to_show 0.5s"),btf.animateIn(document.querySelector("#algolia-search .search-dialog"),"titleScale 0.5s"),setTimeout((()=>{document.querySelector("#algolia-search .ais-SearchBox-input").focus()}),100),document.addEventListener("keydown",(function e(a){"Escape"===a.code&&(t(),document.removeEventListener("keydown",e))}))},t=()=>{const e=document.body.style;e.width="",e.overflow="",btf.animateOut(document.querySelector("#algolia-search .search-dialog"),"search_close .5s"),btf.animateOut(document.getElementById("search-mask"),"to_hide 0.5s")},a=()=>{document.querySelector("#search-button > .search").addEventListener("click",e)},i=GLOBAL_CONFIG.algolia;if(!(i.appId&&i.apiKey&&i.indexName))return console.error("Algolia setting is invalid!");const n=instantsearch({indexName:i.indexName,searchClient:algoliasearch(i.appId,i.apiKey),searchFunction(e){e.state.query&&e.search()}}),s=instantsearch.widgets.configure({hitsPerPage:5}),l=instantsearch.widgets.searchBox({container:"#algolia-search-input",showReset:!1,showSubmit:!1,placeholder:GLOBAL_CONFIG.algolia.languages.input_placeholder,showLoadingIndicator:!0}),o=instantsearch.widgets.hits({container:"#algolia-hits",templates:{item:e=>`\n          <a href="${e.permalink?e.permalink:GLOBAL_CONFIG.root+e.path}" class="algolia-hit-item-link">\n          ${e._highlightResult.title.value||"no-title"}\n          </a>\n          <p class="algolia-hit-item-content">${(e=>{if(""===e)return"";const t=e.indexOf("<mark>");let a=t-30,i=t+120,n="",s="";return a<=0?(a=0,i=140):n="...",i>e.length?i=e.length:s="...",n+e.substring(a,i)+s})(e._highlightResult.contentStripTruncate.value)}</p>`,empty:function(e){return'<div id="algolia-hits-empty">'+GLOBAL_CONFIG.algolia.languages.hits_empty.replace(/\$\{query}/,e.query)+"</div>"}}}),r=instantsearch.widgets.stats({container:"#algolia-info > .algolia-stats",templates:{text:function(e){return`<hr>${GLOBAL_CONFIG.algolia.languages.hits_stats.replace(/\$\{hits}/,e.nbHits).replace(/\$\{time}/,e.processingTimeMS)}`}}}),c=instantsearch.widgets.poweredBy({container:"#algolia-info > .algolia-poweredBy"}),d=instantsearch.widgets.pagination({container:"#algolia-pagination",totalPages:5,templates:{first:'<i class="fas fa-angle-double-left"></i>',last:'<i class="fas fa-angle-double-right"></i>',previous:'<i class="fas fa-angle-left"></i>',next:'<i class="fas fa-angle-right"></i>'}});n.addWidgets([s,l,o,r,c,d]),n.start(),document.getElementById("menu-search").addEventListener("click",(function(){e(),setTimeout((()=>{let e=document.querySelector("#algolia-search .ais-SearchBox-input"),t=document.createEvent("HTMLEvents");t.initEvent("input",!1,!1),e.value=rightMenuContext.text,e.dispatchEvent(t)}),100)})),a(),document.getElementById("search-mask").addEventListener("click",t),document.querySelector("#algolia-search .search-close-button").addEventListener("click",t),window.addEventListener("pjax:complete",(()=>{"block"===getComputedStyle(document.querySelector("#algolia-search .search-dialog")).display&&t(),a()})),window.pjax&&n.on("render",(()=>{window.pjax.refresh(document.getElementById("algolia-hits"))}))}));