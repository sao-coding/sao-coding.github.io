if(!self.define){let e,a={};const r=(r,c)=>(r=new URL(r+".js",c).href,a[r]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=a,document.head.appendChild(e)}else e=r,importScripts(r),a()})).then((()=>{let e=a[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(c,i)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(a[o])return;let d={};const f=e=>r(e,o),s={module:{uri:o},exports:d,require:f};a[o]=Promise.all(c.map((e=>s[e]||f(e)))).then((e=>(i(...e),d)))}}define(["./workbox-b5e2a5cf"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"2c876bf33fa0a8f19480a2d71d73c5c7"},{url:"ads/",revision:"9b75fc0cff8b8836543646f9f1c4e1b9"},{url:"announcement/",revision:"c513bbf22b56149b2f4c3987701eff69"},{url:"archives/2022/01/",revision:"034a397c1849eafd7edb930b22e519cd"},{url:"archives/2022/02/",revision:"dcc512e232464eb7a51fa2122da91892"},{url:"archives/2022/02/page/2/",revision:"16ac1663ea3c2c0094bb7871474b72b7"},{url:"archives/2022/02/page/3/",revision:"12ffcd6c2ee23371da61e6d7e1036bcb"},{url:"archives/2022/03/",revision:"cb07eb36c0872180eff266e778f4feed"},{url:"archives/2022/04/",revision:"e555eda1afeb8131652fd989f71d4549"},{url:"archives/2022/05/",revision:"4d1fc12e79cf3f2567aea2103bcdd12b"},{url:"archives/2022/08/",revision:"0cb7e95dea0aad9608936bbf3c2e2be4"},{url:"archives/2022/",revision:"ba17295051d4aaf9c4f36eefb42aa0fe"},{url:"archives/2022/page/2/",revision:"704d4c0cbcbf3fc65d2192177d711c5c"},{url:"archives/2022/page/3/",revision:"0f48b68d8427fdb4333ed46995d15360"},{url:"archives/2022/page/4/",revision:"b0460d7d1f72bc007e4f05cf83844825"},{url:"archives/2022/page/5/",revision:"789859b16ffdef1e9786f72bc3d73243"},{url:"archives/",revision:"c59da8aa7c0dc31742f6d9920e5fc371"},{url:"archives/page/2/",revision:"f0abba5cfa91d13031476a81b0adf3cc"},{url:"archives/page/3/",revision:"8d5b99b7b9cde16c5abb070e87ac3082"},{url:"archives/page/4/",revision:"b7106a0853de05677720dee305303010"},{url:"archives/page/5/",revision:"66d5d36c7f0f29d4949cbbe725a624c8"},{url:"backstage/",revision:"c95696d42a079dee3d220df69be1f042"},{url:"bangumis/",revision:"1f96ad19ad58941063f4c2b08ef9e801"},{url:"categories/HEXO/",revision:"fe628bc387eec3be041ebcdc5f1c2746"},{url:"categories/",revision:"941beeed9b129e98e61dfffae1ab243c"},{url:"categories/LeetCode/",revision:"f5473ff681b2542b019f7d0576a82009"},{url:"categories/ZeroJudge/",revision:"6102b7fe3843abecf125b154b24e9555"},{url:"categories/ZeroJudge/page/2/",revision:"442522af27df3ca8a1bb4bdb98e309cf"},{url:"categories/ZeroJudge/page/3/",revision:"caca590019bfdc4cdf8c1c6893daa41a"},{url:"categories/ZeroJudge/page/4/",revision:"35e6df8cf2163ff997338529ee280591"},{url:"categories/宿舍活動/",revision:"680697dccd0e9adfd4d52284597d30a0"},{url:"categories/工具/",revision:"a2aa172cec227c4bff0655be5244e95f"},{url:"categories/練習題/",revision:"1ff79f3a45fa00aacbfc5ce07aaec4d8"},{url:"categories/鍵盤/",revision:"c116bd460641523b85259198bb14143c"},{url:"comments/",revision:"e8947a19080c3d1734fd36c9f1b3cfcf"},{url:"css/hbe.style.css",revision:"a8bc819e01e001d3bc6ae03a2afad957"},{url:"css/index.css",revision:"127230185236b6cb408ed45ba36f3a88"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"fcircle/",revision:"0496d386a20a8ff167b0cba6276b1246"},{url:"fonts/SAOUI.ttf",revision:"c4b0afc9f7f1ef7cf5824818a060d580"},{url:"fonts/筑紫A丸by 宁静之雨.woff2",revision:"62c1387e64c98603f856f9d3fa5757c2"},{url:"hpptalk/",revision:"8e31456d47728465faa5d7c35595fb41"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/app.png",revision:"d1dc0e63bd067e263e8c6c617c13ea93"},{url:"img/avatar.jpg",revision:"4170c577689aa9aa475d35d7cd167024"},{url:"img/cat.png",revision:"e65d9339708c2c11103f4b9ab214179e"},{url:"img/cover.jpg",revision:"2bec8e6a3cb69988f34a2cc453555b59"},{url:"img/favicon.png",revision:"7d837bda9d8d5dd936aa946159e94c7a"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/hexo.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/index.webp",revision:"ae32e7ed43ede769133ae6b4d1c5a279"},{url:"img/mail.png",revision:"14fa675dfc9c09ba6544cee7c2cd899b"},{url:"/",revision:"a6118deb1c8691a57fb64ae9b2d98cb6"},{url:"js/custom/calendar.js",revision:"48bec913bdd35266de9e1e4e3805c754"},{url:"js/custom/languages.js",revision:"538b160f8ccb8f13c5b1dd467dfd847c"},{url:"js/custom/rightMenu.js",revision:"735ff35496f8e108ed453ab967c53e79"},{url:"js/custom/SAO-Notify.js",revision:"bc191d6cc0277b03742a99b737777964"},{url:"js/custom/sao.js",revision:"c476dd0f9cf35fe239ccc5e59223233e"},{url:"js/main.js",revision:"c2d6628801fd2dc0ea1739901cf5d99b"},{url:"js/search/algolia.js",revision:"af567f93a5504310fe16fe368a4ee89e"},{url:"js/search/local-search.js",revision:"349c6a8302ef6883e81b291f220fb8d3"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"lib/hbe.js",revision:"4a7e94ac7224adfce4b0572ca5c57fef"},{url:"link/",revision:"25ed19473283ca31648f33ebf96fd599"},{url:"page/2/",revision:"2a5dafca46161e860b0391f86528b3cf"},{url:"page/3/",revision:"89a2bb3b0c65d49e31545eedbaaf3ccc"},{url:"page/4/",revision:"d89fffa5a6b53be90756dfc219cf627d"},{url:"page/5/",revision:"a3eef6671b03b87deaa17d84f5273c09"},{url:"post/cover/",revision:"56073004f5f48e5586ea1c7cca027740"},{url:"post/keyboard/keychron-k4v2-keyboard/",revision:"7c7ee1ef05640ae8888a8bf04289ceaa"},{url:"post/oj/leetcode/1. Two Sum/",revision:"12785a6652cc2093b35983fc23ff1ab0"},{url:"post/oj/zerojudge/a001/",revision:"dc35621961aaf0739e60ed77c408f64a"},{url:"post/oj/zerojudge/a002/",revision:"81c4a99e7aba76394a6abac2d143a8ad"},{url:"post/oj/zerojudge/a003/",revision:"af96cb8ea679d0e7020c50fd6c2772d5"},{url:"post/oj/zerojudge/a004/",revision:"1ebcf25250b488a5388b15c078ffa44a"},{url:"post/oj/zerojudge/a005/",revision:"03880602208659e8bb998bfb309b97d6"},{url:"post/oj/zerojudge/a006/",revision:"6ceea0329b95012aca88308e80ffb28d"},{url:"post/oj/zerojudge/a009/",revision:"8d426137fdbdfe53aa50994681eb8ca2"},{url:"post/oj/zerojudge/a010/",revision:"43ffc2b14f27cc36f85ef0124d05c7b6"},{url:"post/oj/zerojudge/a015/",revision:"2cd11487caac0448a95d8f31762eb277"},{url:"post/oj/zerojudge/a017/",revision:"b871f27ee8c2d2af66864ab772e159e9"},{url:"post/oj/zerojudge/a020/",revision:"9547a417b4573c63f5e56de624332ea8"},{url:"post/oj/zerojudge/a021/",revision:"91936e94d927b490b9748cfcf3a8fca6"},{url:"post/oj/zerojudge/a022/",revision:"a6b4863cd5880bd191b6efbed9c1c039"},{url:"post/oj/zerojudge/a024/",revision:"972e05fb95aeaff1612240737a6b283c"},{url:"post/oj/zerojudge/a034/",revision:"38a134279c57a3847f3a621c1350854e"},{url:"post/oj/zerojudge/a038/",revision:"e6e8c55e062d99c4e8415370abb5bd2d"},{url:"post/oj/zerojudge/a053/",revision:"9ce0fc578f96e27b91f937cea1810de5"},{url:"post/oj/zerojudge/a058/",revision:"98f2efe0d9ff7ec582862a2f4d8e0e04"},{url:"post/oj/zerojudge/a059/",revision:"da7156e63e5fd3ddde5606949efedac6"},{url:"post/oj/zerojudge/a065/",revision:"f0c133f017c5e3b79f37430796709caf"},{url:"post/oj/zerojudge/a104/",revision:"e1b30a3c791926de83fc0950155c25dc"},{url:"post/oj/zerojudge/a147/",revision:"50ac7473be12b181bc5e147180d26943"},{url:"post/oj/zerojudge/a148/",revision:"f918e86c70792f67e75e058ddf4a6743"},{url:"post/oj/zerojudge/a149/",revision:"84ba75039793a519b8010188fd4f931d"},{url:"post/oj/zerojudge/a215/",revision:"b9f4587b1fbe2f5812bc086422a8647d"},{url:"post/oj/zerojudge/a244/",revision:"a6b93e0ab2e9c2a76f64c766b736174d"},{url:"post/oj/zerojudge/a263/",revision:"76c0b48270b6862283a26846c135be1b"},{url:"post/oj/zerojudge/a528/",revision:"66dfad47ae7bd9483206511cf0bec986"},{url:"post/oj/zerojudge/a738/",revision:"fa968a844232c2613303ede971b4f032"},{url:"post/oj/zerojudge/a799/",revision:"e6dabfc8c004d24e0a63ce86faf85521"},{url:"post/oj/zerojudge/a915/",revision:"aa9fde81ac11217f3b2c2e4a99ff576c"},{url:"post/oj/zerojudge/b294/",revision:"3495ae93f65b19bd8a4c26ca678a2493"},{url:"post/oj/zerojudge/b558/",revision:"ab0aa77d35d62d75a14b3783b8384b07"},{url:"post/oj/zerojudge/b572/",revision:"5a13db03d46a32f500c86043995e5811"},{url:"post/oj/zerojudge/b758/",revision:"ed4410e3884e0a4209ed8ab9feffa4f0"},{url:"post/oj/zerojudge/b759/",revision:"3a91db897c660f4b18dc858ad316f9a5"},{url:"post/oj/zerojudge/d086/",revision:"3e51a72259b1607fd44a8661a09688c7"},{url:"post/oj/zerojudge/d098/",revision:"7ee71faf26418f8433aae53a9ef84069"},{url:"post/pixiv/",revision:"5603c775c6f2873da157c8ad397f103b"},{url:"post/practice/week-01/",revision:"84b3144acbd6717d72d01bca3cd6ace4"},{url:"post/takming-dormitory-about/",revision:"6f68eaefacf77b08e3a4cdd009cbb7de"},{url:"post/tool/word-mdeditor/",revision:"477c531dc6efe8d3852dbb55259d916e"},{url:"Privacy-Policy/",revision:"594f2fa7f119c9de8a595268acc9f20b"},{url:"pwa/16.png",revision:"871e1cb9bb3ca9be3d554ad19c44fec6"},{url:"pwa/32.png",revision:"37aa498ff72bb6ba3b4fa657de9d61b8"},{url:"pwa/apple-touch-icon.png",revision:"6805dc57323a7b898b3ca98aa54f79c7"},{url:"pwa/icon-128x128.png",revision:"6eca034a3b3c9fc8cc1731aaab45651f"},{url:"pwa/icon-192x192.png",revision:"037d5841b9e3850c825165df5e0c399c"},{url:"pwa/icon-256x256.png",revision:"645e8eabb7d108c36ee7fbf7ea000436"},{url:"pwa/icon-384x384.png",revision:"e9e8d842f2cb36d6772933441b80a7c1"},{url:"pwa/icon-512x512.png",revision:"640c46c7202ba98bbef28ca07b272b68"},{url:"pwa/safari-pinned-tab.svg",revision:"0ccb1543abe1e690d1eee0dfda591566"},{url:"random/",revision:"fe57fb411204259d01b081f924022888"},{url:"tags/🦋-Butterfly/",revision:"6c20066894dc1ee74868c2207559d229"},{url:"tags/C/",revision:"181090a8aff68e834f393b97f0c669d3"},{url:"tags/HEXO/",revision:"70adc0137d1ff714fc6b9ac9e34f78b0"},{url:"tags/",revision:"69eb4c41d58ddb87e71d8030e9a4e222"},{url:"tags/LeetCode/",revision:"8fa240fd6c18326d76910a8bfa32f38e"},{url:"tags/Python/",revision:"b44a27cc4b1fe8b111df7f33c0ee6157"},{url:"tags/Python/page/2/",revision:"f14aa405b9618c38515b7c33e05c8020"},{url:"tags/Python/page/3/",revision:"067cd3973fd0b03541c3ce274ff06a51"},{url:"tags/Python/page/4/",revision:"4e89c148496dccc3b069b4897ab52673"},{url:"tags/ZeroJudge/",revision:"9adb42795e94df205b07d625357334f3"},{url:"tags/ZeroJudge/page/2/",revision:"358514e7458697cd1fe04bfe725fa826"},{url:"tags/ZeroJudge/page/3/",revision:"87d81ac09f9221323563f32a96f63a74"},{url:"tags/ZeroJudge/page/4/",revision:"dd45b51a100fc456faa68fa23d7d0cb2"},{url:"tags/機械式鍵盤/",revision:"07b99580d1bda62a31ebdc4ff4a2754f"},{url:"tags/解題答案/",revision:"7adb954faa827f8811020b33e56e36e9"},{url:"tags/解題答案/page/2/",revision:"5a99b53be28271af95c3d6cacc73e0ba"},{url:"tags/解題答案/page/3/",revision:"4cb872a29739a46ff222f0093057cde8"},{url:"tags/解題答案/page/4/",revision:"e5c01ebfec08b8febc8cd877aeaf693b"},{url:"timeline/",revision:"52f31fe59290b0b1f411897d8ba8c64b"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));