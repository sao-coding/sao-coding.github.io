if(!self.define){let e,a={};const r=(r,c)=>(r=new URL(r+".js",c).href,a[r]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=a,document.head.appendChild(e)}else e=r,importScripts(r),a()})).then((()=>{let e=a[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(c,i)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(a[d])return;let o={};const s=e=>r(e,d),f={module:{uri:d},exports:o,require:s};a[d]=Promise.all(c.map((e=>f[e]||s(e)))).then((e=>(i(...e),o)))}}define(["./workbox-b5e2a5cf"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"20737d48cd275b42e8bacb8d5372f71f"},{url:"announcement/",revision:"a2d0f4e66fb1d178d7bcf90aa34a328d"},{url:"archives/2022/01/",revision:"6b155101c0dff1ab54a4861abb20c4aa"},{url:"archives/2022/02/",revision:"08f1f1794afcd83d070ea93e04efbaf5"},{url:"archives/2022/02/page/2/",revision:"b7a6f119976fcf9079fda02f46eee15e"},{url:"archives/2022/02/page/3/",revision:"45a6444f57d0ffc6340d21be8ce3d3b0"},{url:"archives/2022/03/",revision:"cc231d4fe78c28f5de63fae4c09c7237"},{url:"archives/2022/04/",revision:"53617a179e729ee545348479dde97ec8"},{url:"archives/2022/05/",revision:"159e81ca2287895e2322a6198bf5ebcb"},{url:"archives/2022/07/",revision:"8e520622b958152e81a46bc5cb598130"},{url:"archives/2022/08/",revision:"93af0ef797216c2b82a5243665dde952"},{url:"archives/2022/",revision:"0527e2555528236bc97b5bf016413005"},{url:"archives/2022/page/2/",revision:"9401688fb827df3d397f78492b43b93d"},{url:"archives/2022/page/3/",revision:"a6274ca97fa076751851e721314ab336"},{url:"archives/2022/page/4/",revision:"ef07245aa3a147044ca5f300223f6e9c"},{url:"archives/2022/page/5/",revision:"2c87098a37d330a7964770f0d519256a"},{url:"archives/",revision:"4061b6475105f5fce6c83aacfbd97899"},{url:"archives/page/2/",revision:"2fdd823a9ee2b734f24a139562876763"},{url:"archives/page/3/",revision:"66cab782174077b0d52dbfef6660aa16"},{url:"archives/page/4/",revision:"04ae38614b44c688d0a95d6d3e5b5dd3"},{url:"archives/page/5/",revision:"013bd7061bb411e897862f1cd0539572"},{url:"backstage/",revision:"ae2d09ff2a7bd0db353d199f51d7999a"},{url:"bangumis/",revision:"ad641f18f6d08d74f7148feb78fecb85"},{url:"categories/HEXO/",revision:"4e101102881b293ea948c68eedf88f84"},{url:"categories/",revision:"01c96b08c7b19ba5d49b28d7cd2a89b5"},{url:"categories/LeetCode/",revision:"1fc4d17766c67cc6c9499a5eee62717b"},{url:"categories/ZeroJudge/",revision:"d0b6cd18dbd3bcfbd414c5b01bf41db9"},{url:"categories/ZeroJudge/page/2/",revision:"8f7b00d53e2c00bb4ab9d121ec0da080"},{url:"categories/ZeroJudge/page/3/",revision:"85107c19a2048816f3703f6c7539b957"},{url:"categories/ZeroJudge/page/4/",revision:"92fb5f5068636994aaa04d1b750ead9b"},{url:"categories/宿舍活動/",revision:"e6d62b0f09ee18c038d24ee6dbeb24c8"},{url:"categories/工具/",revision:"89bddcace6adbfde5edba8b124f5ba9e"},{url:"categories/練習題/",revision:"dd911554d7824fa2dbdafe2d7ca2d832"},{url:"categories/遊戲/",revision:"266810660cbe4e29b02196fc386fcf17"},{url:"categories/鍵盤/",revision:"a2d19178060e44c98c85db7cece97825"},{url:"comments/",revision:"6dd14ed6416a0987d8026fbfba7b54e9"},{url:"css/hbe.style.css",revision:"a8bc819e01e001d3bc6ae03a2afad957"},{url:"css/index.css",revision:"dc8c81b4610b2f4da19f12d4f787ba47"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"fcircle/",revision:"54e049bab0862df970fb651cd91e0692"},{url:"fonts/SAOUI.ttf",revision:"c4b0afc9f7f1ef7cf5824818a060d580"},{url:"fonts/筑紫A丸by 宁静之雨.woff2",revision:"62c1387e64c98603f856f9d3fa5757c2"},{url:"hpptalk/",revision:"0db2fd882cf64193a4273ab6d26d2ae2"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/app.png",revision:"d1dc0e63bd067e263e8c6c617c13ea93"},{url:"img/avatar.jpg",revision:"4170c577689aa9aa475d35d7cd167024"},{url:"img/cat.png",revision:"e65d9339708c2c11103f4b9ab214179e"},{url:"img/cover.jpg",revision:"2bec8e6a3cb69988f34a2cc453555b59"},{url:"img/favicon.png",revision:"7d837bda9d8d5dd936aa946159e94c7a"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/hexo.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/index.webp",revision:"ae32e7ed43ede769133ae6b4d1c5a279"},{url:"img/mail.png",revision:"14fa675dfc9c09ba6544cee7c2cd899b"},{url:"/",revision:"c1e8f739a73063892a432ba29d93a717"},{url:"js/custom/calendar.js",revision:"48bec913bdd35266de9e1e4e3805c754"},{url:"js/custom/languages.js",revision:"538b160f8ccb8f13c5b1dd467dfd847c"},{url:"js/custom/rightMenu.js",revision:"470e7fe9b13dc17142e74d55e9cf1a7e"},{url:"js/custom/SAO-Notify.js",revision:"bc191d6cc0277b03742a99b737777964"},{url:"js/custom/sao.js",revision:"c476dd0f9cf35fe239ccc5e59223233e"},{url:"js/main.js",revision:"c2d6628801fd2dc0ea1739901cf5d99b"},{url:"js/search/algolia.js",revision:"c2877d1f5b4e89769f2542cc1a3d9133"},{url:"js/search/local-search.js",revision:"75362011f03733ec767357b59f19ced1"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"lib/hbe.js",revision:"4a7e94ac7224adfce4b0572ca5c57fef"},{url:"link/",revision:"6c26f91e0d677131d0e30f3d90f5a38d"},{url:"page/2/",revision:"0270a342f63be9e6fe43a519ff4e4d21"},{url:"page/3/",revision:"6f5c5ff4f491433629daaa68bc0ce72a"},{url:"page/4/",revision:"bfe8c5bdce2bd362c69b7279787630a5"},{url:"page/5/",revision:"8465d4c560b1a06e78cd320f9d51e214"},{url:"post/cover/",revision:"95d2c6274fc0a46c199c0db7fe56fa68"},{url:"post/keyboard/keychron-k4v2-keyboard/",revision:"8c25e86286a5b21d039e4055ae38bccb"},{url:"post/minecraft-java/",revision:"a4a307c08d86d95a790df65d3161d5e0"},{url:"post/oj/leetcode/1. Two Sum/",revision:"ebca4182140ee90fde72a9b85b28b212"},{url:"post/oj/zerojudge/a001/",revision:"e7034bd771fa07debcd8de4e308d781b"},{url:"post/oj/zerojudge/a002/",revision:"f3c4750ba846629424d1e3ab66c28d66"},{url:"post/oj/zerojudge/a003/",revision:"254ca24a9c7ecc7a8791e2e08d099eda"},{url:"post/oj/zerojudge/a004/",revision:"76398dcac33323caf1399f6be2af4d0d"},{url:"post/oj/zerojudge/a005/",revision:"0ff2cc67b80eff4cc9a385492fa457a2"},{url:"post/oj/zerojudge/a006/",revision:"f88d69cbbbf4506d0e4c6a6843fafcf9"},{url:"post/oj/zerojudge/a009/",revision:"1abd501931af93b23148f6f1a502ba73"},{url:"post/oj/zerojudge/a010/",revision:"5dca8da97c28cb62123ceaaab0c84f42"},{url:"post/oj/zerojudge/a015/",revision:"2197ccdd74444b5b4ecd8517bd0d2841"},{url:"post/oj/zerojudge/a017/",revision:"b222eaa94e50fffe0087c2b0c23e2c4d"},{url:"post/oj/zerojudge/a020/",revision:"6b41e44b72d65b99984458495f58921e"},{url:"post/oj/zerojudge/a021/",revision:"6c3fc803b42978e58b158e94a8537f37"},{url:"post/oj/zerojudge/a022/",revision:"649978d3e93d4ac12e9157ef3a726457"},{url:"post/oj/zerojudge/a024/",revision:"db8c4441ff3de924ca6ecf7c8da9c49c"},{url:"post/oj/zerojudge/a034/",revision:"bb62db9dbd5c3866cc2ebca5c77f83c6"},{url:"post/oj/zerojudge/a038/",revision:"72011a3be283053bd07bd19d47327875"},{url:"post/oj/zerojudge/a053/",revision:"db5ee88f7ae16a77ae2e9d4a3e3a3b85"},{url:"post/oj/zerojudge/a058/",revision:"0ceb16c662f58dac10d8053cc41e8cda"},{url:"post/oj/zerojudge/a059/",revision:"6a7ab8660c37e49adcbaf61a02c7d81b"},{url:"post/oj/zerojudge/a065/",revision:"6a9fe951a78fb9490970a2ccddb9c555"},{url:"post/oj/zerojudge/a104/",revision:"34ad786b8e0a0bbdd86f2c116f490223"},{url:"post/oj/zerojudge/a147/",revision:"e6132e14f48b2000c58cf71a1f251938"},{url:"post/oj/zerojudge/a148/",revision:"e4447df674fcc1299cd4eb4d0a947074"},{url:"post/oj/zerojudge/a149/",revision:"9a639b9634b2d05ee0042740f54fe58e"},{url:"post/oj/zerojudge/a215/",revision:"75ad029fc4dc312a8ff0ebc1308f3056"},{url:"post/oj/zerojudge/a244/",revision:"091248a5b311efc7a57c5f91d45e7af1"},{url:"post/oj/zerojudge/a263/",revision:"96e3dd0b51e9f0e8baa517e571c22149"},{url:"post/oj/zerojudge/a528/",revision:"465e67188604c6884f44f606c26902f9"},{url:"post/oj/zerojudge/a738/",revision:"6a8af119e435c7cf31c4ffe6a94a936c"},{url:"post/oj/zerojudge/a799/",revision:"343ef7f848045812e1ab967d3082d4a1"},{url:"post/oj/zerojudge/a915/",revision:"b0b71d40ae822b960cf900bf7599b688"},{url:"post/oj/zerojudge/b294/",revision:"effa4c893fa4e9c4324f99e73037c528"},{url:"post/oj/zerojudge/b558/",revision:"10e1c7551475778ca9b5c9ff70e2b38f"},{url:"post/oj/zerojudge/b572/",revision:"85adbebd7a690077eb2ae335d0dd74c5"},{url:"post/oj/zerojudge/b758/",revision:"445499abe36a5d0af64035e3e462cbf7"},{url:"post/oj/zerojudge/b759/",revision:"fc71b79987d360a98d6f18e41e09d95e"},{url:"post/oj/zerojudge/d086/",revision:"4654da0a04979b16953ac98aa02c28de"},{url:"post/oj/zerojudge/d098/",revision:"dd9967be36c7a2555a221c4001f275f3"},{url:"post/pixiv/",revision:"d0d376e12e6721d2422198eadc8e4970"},{url:"post/practice/week-01/",revision:"30c52e65177048f329f57d2893ee099a"},{url:"post/takming-dormitory-about/",revision:"234479d1f33661ef81468d4bb368654a"},{url:"post/tool/word-mdeditor/",revision:"05609e14bacd51b7692bdb202bc19886"},{url:"Privacy-Policy/",revision:"58628857c385b842abdeb1b84106cc28"},{url:"pwa/16.png",revision:"871e1cb9bb3ca9be3d554ad19c44fec6"},{url:"pwa/32.png",revision:"37aa498ff72bb6ba3b4fa657de9d61b8"},{url:"pwa/apple-touch-icon.png",revision:"6805dc57323a7b898b3ca98aa54f79c7"},{url:"pwa/icon-128x128.png",revision:"6eca034a3b3c9fc8cc1731aaab45651f"},{url:"pwa/icon-192x192.png",revision:"037d5841b9e3850c825165df5e0c399c"},{url:"pwa/icon-256x256.png",revision:"645e8eabb7d108c36ee7fbf7ea000436"},{url:"pwa/icon-384x384.png",revision:"e9e8d842f2cb36d6772933441b80a7c1"},{url:"pwa/icon-512x512.png",revision:"640c46c7202ba98bbef28ca07b272b68"},{url:"pwa/safari-pinned-tab.svg",revision:"0ccb1543abe1e690d1eee0dfda591566"},{url:"random/",revision:"af9ee5f7e4ea2791cee5c197aca85a6a"},{url:"tags/🦋-Butterfly/",revision:"2129ea8125f831ead046ff261856cf24"},{url:"tags/C/",revision:"d922e3dbc68b73cdd0dece3cbc517833"},{url:"tags/HEXO/",revision:"59fed4652a93a11fc4c4396eee43b8e2"},{url:"tags/",revision:"f3b068a748c727ee928b03538d808f82"},{url:"tags/JAVA版/",revision:"919db9ba964e0d1f8eda52fc0fd9fdb2"},{url:"tags/LeetCode/",revision:"50f0ee79f822418703cc2eb4df2fc433"},{url:"tags/Minecraft/",revision:"379619e41c2f43faa838c368e16ce113"},{url:"tags/Python/",revision:"18fbe3813acccaea7bdda669240ecf47"},{url:"tags/Python/page/2/",revision:"529df1b41c7c24b30e5889f486374155"},{url:"tags/Python/page/3/",revision:"3b857545b83a844ff3368fc99e3c5c88"},{url:"tags/Python/page/4/",revision:"66281fbc03de438c3499cfaf62940a29"},{url:"tags/ZeroJudge/",revision:"67e43c93d037a6af30ba95d0cabd2436"},{url:"tags/ZeroJudge/page/2/",revision:"25160ac73fe5935793aa87e21509e2cc"},{url:"tags/ZeroJudge/page/3/",revision:"f792dc9495064f3225d2196e532d513f"},{url:"tags/ZeroJudge/page/4/",revision:"36df704050dfda7fe6fc4eedf44553e5"},{url:"tags/機械式鍵盤/",revision:"ccd5e0b6501b5a4cbb7df66867c0a55a"},{url:"tags/解題答案/",revision:"d1f0dded8d365b488b91730b8ba47424"},{url:"tags/解題答案/page/2/",revision:"e6dad65c566ff7c232514a4de7139597"},{url:"tags/解題答案/page/3/",revision:"d233753d7fcdb3e86de8483cb48fe08b"},{url:"tags/解題答案/page/4/",revision:"bf4e5506638698b781f1db0cebcc4c25"},{url:"timeline/",revision:"22c3546ddba8d429935ec7b51531fb98"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));