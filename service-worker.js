if(!self.define){let e,a={};const r=(r,c)=>(r=new URL(r+".js",c).href,a[r]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=a,document.head.appendChild(e)}else e=r,importScripts(r),a()})).then((()=>{let e=a[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(c,i)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(a[d])return;let o={};const s=e=>r(e,d),b={module:{uri:d},exports:o,require:s};a[d]=Promise.all(c.map((e=>b[e]||s(e)))).then((e=>(i(...e),o)))}}define(["./workbox-b5e2a5cf"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"cbc390cacd81785a295b6bb379436d42"},{url:"ads/",revision:"a32466c2183a80e5a3c593582dd3115d"},{url:"announcement/",revision:"105cb76a93dfe5bee2e4bc24810c4d0a"},{url:"archives/2022/01/",revision:"645e69ff2be32a644838d1c3ea5896c4"},{url:"archives/2022/02/",revision:"918c67c00756c256f42b0c7116240ec2"},{url:"archives/2022/02/page/2/",revision:"54c88de7243fb6e1a4c62d0be392d249"},{url:"archives/2022/02/page/3/",revision:"6cd632b3af5c45cc7e90f6590c1cd2be"},{url:"archives/2022/03/",revision:"e8dadbabbab3d4b0d409a789b65c1acf"},{url:"archives/2022/04/",revision:"110635a48e47f4c8be58989456b5829b"},{url:"archives/2022/05/",revision:"9d628b6df5a2fd2372e8dac2153c3107"},{url:"archives/2022/08/",revision:"0f5867e4d6480dbd6558458fce53b0b5"},{url:"archives/2022/",revision:"a68b092d051a2f2c35a9a851f17d06de"},{url:"archives/2022/page/2/",revision:"7ac28d613c82e7d869fc4d7c9ab3d68f"},{url:"archives/2022/page/3/",revision:"b98baa0750d9b32a9c5385f714cc7c88"},{url:"archives/2022/page/4/",revision:"b81e7d7be781e12bbf3eb2918def2943"},{url:"archives/2022/page/5/",revision:"f0890e6d471195857dc152b1dac43385"},{url:"archives/",revision:"ec4344444e7874618ae4d1f2485197ef"},{url:"archives/page/2/",revision:"67516187437f540cc8faad62775cf3fa"},{url:"archives/page/3/",revision:"6b543a0d54f79a251554e067e0926c5f"},{url:"archives/page/4/",revision:"05b1d5788fddfd7b47f3ab12c6bc93ad"},{url:"archives/page/5/",revision:"3852a405573a09c42c4cbeafe3cb1486"},{url:"backstage/",revision:"747d247720343d4fbc90b0f9c9054990"},{url:"bangumis/",revision:"7a12669b1761c3b0d6ba1150418a8ab1"},{url:"categories/HEXO/",revision:"e4cec64298a30374920c306b5a8559ac"},{url:"categories/",revision:"d201ed8f266b2306f2823d2b334677b5"},{url:"categories/LeetCode/",revision:"6fd8a9f855ab1c162447fd9d1409df24"},{url:"categories/ZeroJudge/",revision:"06a1ed42b8cc57ced6f5bbbdea019f62"},{url:"categories/ZeroJudge/page/2/",revision:"deea32bea93e216a885f2f3157435163"},{url:"categories/ZeroJudge/page/3/",revision:"b69774f0f86628cec106b294e4a21897"},{url:"categories/ZeroJudge/page/4/",revision:"4bb9c12fa84277b57370adda62c93b13"},{url:"categories/宿舍活動/",revision:"39552cc4719d27342202a569fa7e93c6"},{url:"categories/工具/",revision:"a603e9cdcee9ac209eec5036cf8b0c40"},{url:"categories/練習題/",revision:"950157ca40274af8bbd5bda7d0f50ef2"},{url:"categories/鍵盤/",revision:"7b88b52d56e5446fb7ed194efed5a1fd"},{url:"comments/",revision:"076c58c9fc26b34fe51987cebcde8793"},{url:"css/hbe.style.css",revision:"a8bc819e01e001d3bc6ae03a2afad957"},{url:"css/index.css",revision:"69b24446dc3470d30b223bbb2027b870"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"fcircle/",revision:"ea2c424d7eb25d121c28145eaf07edc8"},{url:"fonts/SAOUI.ttf",revision:"c4b0afc9f7f1ef7cf5824818a060d580"},{url:"fonts/筑紫A丸by 宁静之雨.woff2",revision:"62c1387e64c98603f856f9d3fa5757c2"},{url:"hpptalk/",revision:"0dee4356862a233f249977ba5b07d904"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/app.png",revision:"d1dc0e63bd067e263e8c6c617c13ea93"},{url:"img/avatar.jpg",revision:"4170c577689aa9aa475d35d7cd167024"},{url:"img/cat.png",revision:"e65d9339708c2c11103f4b9ab214179e"},{url:"img/cover.jpg",revision:"2bec8e6a3cb69988f34a2cc453555b59"},{url:"img/favicon.png",revision:"7d837bda9d8d5dd936aa946159e94c7a"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/hexo.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/index.webp",revision:"ae32e7ed43ede769133ae6b4d1c5a279"},{url:"img/mail.png",revision:"14fa675dfc9c09ba6544cee7c2cd899b"},{url:"/",revision:"28ac611ba6f090981fed7ee710e1f16a"},{url:"js/custom/calendar.js",revision:"48bec913bdd35266de9e1e4e3805c754"},{url:"js/custom/languages.js",revision:"538b160f8ccb8f13c5b1dd467dfd847c"},{url:"js/custom/rightMenu.js",revision:"735ff35496f8e108ed453ab967c53e79"},{url:"js/custom/SAO-Notify.js",revision:"bc191d6cc0277b03742a99b737777964"},{url:"js/custom/sao.js",revision:"c476dd0f9cf35fe239ccc5e59223233e"},{url:"js/main.js",revision:"c2d6628801fd2dc0ea1739901cf5d99b"},{url:"js/search/algolia.js",revision:"af567f93a5504310fe16fe368a4ee89e"},{url:"js/search/local-search.js",revision:"349c6a8302ef6883e81b291f220fb8d3"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"lib/hbe.js",revision:"4a7e94ac7224adfce4b0572ca5c57fef"},{url:"link/",revision:"44ceaa292e2891a13941fc20911046fa"},{url:"page/2/",revision:"d89910c3af2e87b2dccf1805d2e3ff9c"},{url:"page/3/",revision:"c89d5aa44cd45fc883c8ba5ab4e745f5"},{url:"page/4/",revision:"5ea4d619ef7bb8df4f854827b22ae86f"},{url:"page/5/",revision:"fbd8b76238dd22bc1d5571498e7d2350"},{url:"post/cover/",revision:"892b071cc943e4a626dd3c0457194b5a"},{url:"post/keyboard/keychron-k4v2-keyboard/",revision:"12fdc8f4dbf75e94d368444bc32607fd"},{url:"post/oj/leetcode/1. Two Sum/",revision:"af22f56fd73410eb26d003e6c4a78757"},{url:"post/oj/zerojudge/a001/",revision:"4ba20a5bb8632cc3a7e39838ad6e584c"},{url:"post/oj/zerojudge/a002/",revision:"eff214f90b1b80a9988768e0f502c74a"},{url:"post/oj/zerojudge/a003/",revision:"9b18fec7282055514fc61fbbeccd171d"},{url:"post/oj/zerojudge/a004/",revision:"00342f6a49d1c982a2bac23573df24ee"},{url:"post/oj/zerojudge/a005/",revision:"ddb07bb25ce3f6ae1492d60b1dea7c11"},{url:"post/oj/zerojudge/a006/",revision:"e03a62762ef5e17e00c257ba4a43af75"},{url:"post/oj/zerojudge/a009/",revision:"8c5829a75643e52179b3df929f6e5462"},{url:"post/oj/zerojudge/a010/",revision:"74383c32bffa1d4ee192308b59ceed41"},{url:"post/oj/zerojudge/a015/",revision:"21b22d5bec5e0ba4d97a37012218c37d"},{url:"post/oj/zerojudge/a017/",revision:"24099707e4369f93a6de77eb2b11af61"},{url:"post/oj/zerojudge/a020/",revision:"af72a5beb8901e4184700de5676f3885"},{url:"post/oj/zerojudge/a021/",revision:"f2bed377bdf15d3a7c31e2f361dc5e11"},{url:"post/oj/zerojudge/a022/",revision:"820dcdbe48532a4e001833e6c4c0242a"},{url:"post/oj/zerojudge/a024/",revision:"f81befd077a5044213fa8c53385bf4a7"},{url:"post/oj/zerojudge/a034/",revision:"d60519678123e356cba0facec5c9074e"},{url:"post/oj/zerojudge/a038/",revision:"d2ed47e0fe464059d3fc7b25a85829b9"},{url:"post/oj/zerojudge/a053/",revision:"bf36699a9f225c33e25eee7ad015345d"},{url:"post/oj/zerojudge/a058/",revision:"692c6a02553cea4ce6335066c0546f38"},{url:"post/oj/zerojudge/a059/",revision:"31674150cf23386db9b6ba529043f21b"},{url:"post/oj/zerojudge/a065/",revision:"bd220d7d629a28bc5e5a5cde337aea4c"},{url:"post/oj/zerojudge/a104/",revision:"753fbb6b7924d489d95b09d250e6d4db"},{url:"post/oj/zerojudge/a147/",revision:"fd71b4ccf098fb4690a2a8338ef1c4cf"},{url:"post/oj/zerojudge/a148/",revision:"7f8c5f0e618ee5f799d86ac1767b6308"},{url:"post/oj/zerojudge/a149/",revision:"cda69480ce515346e277a1b14446e2d9"},{url:"post/oj/zerojudge/a215/",revision:"836be4718cba459f019a4864a8d93bfc"},{url:"post/oj/zerojudge/a244/",revision:"293a026172e73affe6e7075d03d35641"},{url:"post/oj/zerojudge/a263/",revision:"7feca6adbadb3f240b40780c211fe710"},{url:"post/oj/zerojudge/a528/",revision:"91429c9a751bf8ca827a0e6120f89ec7"},{url:"post/oj/zerojudge/a738/",revision:"5a9957803eb544af9af6185ebb400b75"},{url:"post/oj/zerojudge/a799/",revision:"d29fa1c2a408f174f068cd1af4264cb3"},{url:"post/oj/zerojudge/a915/",revision:"79a3ba12613ec1e47a733f0a06fa7f4c"},{url:"post/oj/zerojudge/b294/",revision:"217045db86d976e202bb1029d2cf5f41"},{url:"post/oj/zerojudge/b558/",revision:"9179b6663cefdaa104b507a2c175a9d8"},{url:"post/oj/zerojudge/b572/",revision:"2dc6e9e89cbb44f0e31e46e15e6913d1"},{url:"post/oj/zerojudge/b758/",revision:"817d8aa442c07de2269187517fe4acb2"},{url:"post/oj/zerojudge/b759/",revision:"5cdd0d827d5a5b3920b62fd3b31ab740"},{url:"post/oj/zerojudge/d086/",revision:"daf16f7ec35d232fbeffd476623d9c1c"},{url:"post/oj/zerojudge/d098/",revision:"c3a3bbcbf555be13d4846f931fd74666"},{url:"post/pixiv/",revision:"df3eb091f756c69da71da9b5494586c7"},{url:"post/practice/week-01/",revision:"961597705af18c8b4319f4720611285b"},{url:"post/takming-dormitory-about/",revision:"dc03399a8d6e5357142cdce0db353fd4"},{url:"post/tool/word-mdeditor/",revision:"5c7028176a0fbbb18606ad99b8868a9c"},{url:"Privacy-Policy/",revision:"c5283215a71bc124390963085becbe1b"},{url:"pwa/16.png",revision:"871e1cb9bb3ca9be3d554ad19c44fec6"},{url:"pwa/32.png",revision:"37aa498ff72bb6ba3b4fa657de9d61b8"},{url:"pwa/apple-touch-icon.png",revision:"6805dc57323a7b898b3ca98aa54f79c7"},{url:"pwa/icon-128x128.png",revision:"6eca034a3b3c9fc8cc1731aaab45651f"},{url:"pwa/icon-192x192.png",revision:"037d5841b9e3850c825165df5e0c399c"},{url:"pwa/icon-256x256.png",revision:"645e8eabb7d108c36ee7fbf7ea000436"},{url:"pwa/icon-384x384.png",revision:"e9e8d842f2cb36d6772933441b80a7c1"},{url:"pwa/icon-512x512.png",revision:"640c46c7202ba98bbef28ca07b272b68"},{url:"pwa/safari-pinned-tab.svg",revision:"0ccb1543abe1e690d1eee0dfda591566"},{url:"random/",revision:"fe57fb411204259d01b081f924022888"},{url:"tags/🦋-Butterfly/",revision:"79195ed43fbf8551c7a7f1e22ac012db"},{url:"tags/C/",revision:"890bdd0143e1d131429ce6fe146b3e59"},{url:"tags/HEXO/",revision:"983a8cfe3649503850680771649812df"},{url:"tags/",revision:"6bcd150ca4592592c400a9744c78caa2"},{url:"tags/LeetCode/",revision:"abfe5f30de124e7b1aa9fbd029959420"},{url:"tags/Python/",revision:"a4c17c98ffb24b0cb0f12a7698a34aa9"},{url:"tags/Python/page/2/",revision:"f8fbc9e2f3f8345cfcc7b8f082b06f41"},{url:"tags/Python/page/3/",revision:"a512dda455a8c4c1c6c81016ecdf184a"},{url:"tags/Python/page/4/",revision:"b76190752641a771f3e5a9da059953f6"},{url:"tags/ZeroJudge/",revision:"c73d435e60240959ec4197a1159f9d84"},{url:"tags/ZeroJudge/page/2/",revision:"0ddcee84a85e9d85b839ef850e69fbeb"},{url:"tags/ZeroJudge/page/3/",revision:"e0dabf1defcc7f4ee84fbb06e995a44b"},{url:"tags/ZeroJudge/page/4/",revision:"0fb2eae828dfa4b0d2ba5d94786a667e"},{url:"tags/機械式鍵盤/",revision:"f5ce496140c97912bbbd65a205501cb6"},{url:"tags/解題答案/",revision:"7661f781a52aabe768387a20ce3c2bc6"},{url:"tags/解題答案/page/2/",revision:"a1acce9140b870d8457c7fcd97e0593c"},{url:"tags/解題答案/page/3/",revision:"e91855d48728d772f993f2a4e6cd1ca5"},{url:"tags/解題答案/page/4/",revision:"f35046726c6bf4172de316017680f2cd"},{url:"timeline/",revision:"b361c34cba93f516341ba4df20787ded"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));