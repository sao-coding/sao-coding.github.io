if(!self.define){let e,a={};const r=(r,c)=>(r=new URL(r+".js",c).href,a[r]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=a,document.head.appendChild(e)}else e=r,importScripts(r),a()})).then((()=>{let e=a[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(c,i)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(a[d])return;let o={};const b=e=>r(e,d),s={module:{uri:d},exports:o,require:b};a[d]=Promise.all(c.map((e=>s[e]||b(e)))).then((e=>(i(...e),o)))}}define(["./workbox-b5e2a5cf"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"0874333d92d673e63d486bccac2d0f4f"},{url:"ads/",revision:"6735378a6717023db435687e1441f805"},{url:"announcement/",revision:"f3ccab6c74a0db78527c0e66f6ef77ea"},{url:"archives/2022/01/",revision:"96b00a633794c49854724243c5abd918"},{url:"archives/2022/02/",revision:"c30dfc8c3dfd10008b2179b09471003e"},{url:"archives/2022/02/page/2/",revision:"8affb6378668755534856c210453688a"},{url:"archives/2022/02/page/3/",revision:"b8c2e3d532494b73f145e80b35e88d7b"},{url:"archives/2022/03/",revision:"08c09cb966cab733a9c3946e2c3d45b5"},{url:"archives/2022/04/",revision:"517325e350fee8073abe8740bbbbda09"},{url:"archives/2022/05/",revision:"408932aececedf0f2034b3a7c08c645c"},{url:"archives/2022/08/",revision:"6e7893e8cf5b2bc36d77b7e1897f9752"},{url:"archives/2022/",revision:"793342a5ddda5b25a6d33bd89ab6b7c6"},{url:"archives/2022/page/2/",revision:"76a488994e161beb7801847634810185"},{url:"archives/2022/page/3/",revision:"b0bdfa2441f67efd2fc4ac61ca81bd49"},{url:"archives/2022/page/4/",revision:"5a37844851b35883aadd28632f9dcc9e"},{url:"archives/2022/page/5/",revision:"2d096e50c2e64daec96e4ff4a9a103c6"},{url:"archives/",revision:"a41114a662fb68ba285fccb2284ca15c"},{url:"archives/page/2/",revision:"16897af293882e8d899a8355ded1e95f"},{url:"archives/page/3/",revision:"b5889ae99033fa11a973b387dce8ab05"},{url:"archives/page/4/",revision:"0dfed15793ee55696c30908e6cff120b"},{url:"archives/page/5/",revision:"b7b379abb2e81aaeb0c0ce51e0cd4cc3"},{url:"backstage/",revision:"583c4460c9cc6d8ead10d33c207533f4"},{url:"bangumis/",revision:"57a326eef0bd53317cd64174f6aced99"},{url:"categories/HEXO/",revision:"87511b59add342d4bd9d0c7132e1155d"},{url:"categories/",revision:"ade834e10cff35aaf3c6bfe85dd16e88"},{url:"categories/LeetCode/",revision:"c96b022294a4f6522907d8c0eef2c500"},{url:"categories/ZeroJudge/",revision:"020a83e4947ab09cd09a9379f68020c2"},{url:"categories/ZeroJudge/page/2/",revision:"2483c702a063a03e8b7bd2efc9c6f167"},{url:"categories/ZeroJudge/page/3/",revision:"fa590c7ceddfb31034ad04306b3a60cf"},{url:"categories/ZeroJudge/page/4/",revision:"bb8c80ae4b47abaa0e092d335313eb36"},{url:"categories/宿舍活動/",revision:"0939d63c8bba026896feb9c5b843591f"},{url:"categories/工具/",revision:"c5d8b1e914cb033879495a281bd7cfb7"},{url:"categories/練習題/",revision:"ba0bfc97f4e8a3aeb907bd1594a88ca9"},{url:"categories/鍵盤/",revision:"4c4859c578368dd11fac33aaf408e28e"},{url:"comments/",revision:"0d2190365881a68f47d43a1fb91c8579"},{url:"css/hbe.style.css",revision:"a8bc819e01e001d3bc6ae03a2afad957"},{url:"css/index.css",revision:"69b24446dc3470d30b223bbb2027b870"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"fcircle/",revision:"26fcfb582bad35d5d1a0ebe0e56310a2"},{url:"fonts/SAOUI.ttf",revision:"c4b0afc9f7f1ef7cf5824818a060d580"},{url:"fonts/筑紫A丸by 宁静之雨.woff2",revision:"62c1387e64c98603f856f9d3fa5757c2"},{url:"hpptalk/",revision:"fa2480bb58243de19a7a83398a300d41"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/app.png",revision:"d1dc0e63bd067e263e8c6c617c13ea93"},{url:"img/avatar.jpg",revision:"4170c577689aa9aa475d35d7cd167024"},{url:"img/cat.png",revision:"e65d9339708c2c11103f4b9ab214179e"},{url:"img/cover.jpg",revision:"2bec8e6a3cb69988f34a2cc453555b59"},{url:"img/favicon.png",revision:"7d837bda9d8d5dd936aa946159e94c7a"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/hexo.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/index.webp",revision:"ae32e7ed43ede769133ae6b4d1c5a279"},{url:"img/mail.png",revision:"14fa675dfc9c09ba6544cee7c2cd899b"},{url:"/",revision:"2f8bc67ecfeadf7df16774b5c7873365"},{url:"js/custom/calendar.js",revision:"48bec913bdd35266de9e1e4e3805c754"},{url:"js/custom/languages.js",revision:"538b160f8ccb8f13c5b1dd467dfd847c"},{url:"js/custom/rightMenu.js",revision:"735ff35496f8e108ed453ab967c53e79"},{url:"js/custom/SAO-Notify.js",revision:"bc191d6cc0277b03742a99b737777964"},{url:"js/custom/sao.js",revision:"c476dd0f9cf35fe239ccc5e59223233e"},{url:"js/main.js",revision:"c2d6628801fd2dc0ea1739901cf5d99b"},{url:"js/search/algolia.js",revision:"af567f93a5504310fe16fe368a4ee89e"},{url:"js/search/local-search.js",revision:"349c6a8302ef6883e81b291f220fb8d3"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"lib/hbe.js",revision:"4a7e94ac7224adfce4b0572ca5c57fef"},{url:"link/",revision:"ff894c25ab50aefce727ab2ee4a9d1fb"},{url:"page/2/",revision:"dedb617841423de9f2b342403a434b3c"},{url:"page/3/",revision:"aa86bbc81014afa8b0ff48bccbadc213"},{url:"page/4/",revision:"dd3c31e540ad475c52b055d9563733da"},{url:"page/5/",revision:"e91ef805251373f5440598f67953c283"},{url:"post/cover/",revision:"a43821a335961215569853663ccf150d"},{url:"post/keyboard/keychron-k4v2-keyboard/",revision:"9bb0ce241bc68c842e02d864bd9c2f45"},{url:"post/oj/leetcode/1. Two Sum/",revision:"b3bbf4a06f69e602a68dad30e456f3d9"},{url:"post/oj/zerojudge/a001/",revision:"bf7850eda19dc9ed7ae68fc4e81aa050"},{url:"post/oj/zerojudge/a002/",revision:"bbdc7a6e421fe4bb95dad22c54472e33"},{url:"post/oj/zerojudge/a003/",revision:"860a875895bb2c600bfeec344369b46c"},{url:"post/oj/zerojudge/a004/",revision:"e59db29133ed7fc4a4a92b930270735a"},{url:"post/oj/zerojudge/a005/",revision:"009e87ee44d630036fd4d1ff6410dd88"},{url:"post/oj/zerojudge/a006/",revision:"94e7daa950f1db4e81161bfc23398cc6"},{url:"post/oj/zerojudge/a009/",revision:"140f66312eac8eec8ac449cb2b14e3af"},{url:"post/oj/zerojudge/a010/",revision:"4e8350a1b59bf434525a99d17482c6a6"},{url:"post/oj/zerojudge/a015/",revision:"efddfacdd22adc0942ff2c0405abca9a"},{url:"post/oj/zerojudge/a017/",revision:"860dc5324849759bcb558e666da11f64"},{url:"post/oj/zerojudge/a020/",revision:"36382c9ad4942198ca94d1a06642a9c6"},{url:"post/oj/zerojudge/a021/",revision:"a4cc78a9f971c98528b10b55cd16a469"},{url:"post/oj/zerojudge/a022/",revision:"8983220a2df1db14b233a55d2ca0c6f7"},{url:"post/oj/zerojudge/a024/",revision:"3a85157b76b0a2c51b1295607aef07d4"},{url:"post/oj/zerojudge/a034/",revision:"2b683ab667efca1a3b658e35fa3bba97"},{url:"post/oj/zerojudge/a038/",revision:"9b6fb689e2ebe5b02ea2c77380ae227d"},{url:"post/oj/zerojudge/a053/",revision:"5a991c43350223f8c727d6cf70b257c6"},{url:"post/oj/zerojudge/a058/",revision:"abacb77cd9f6a61ebf85a07ae7c135bd"},{url:"post/oj/zerojudge/a059/",revision:"b673a69553e9c27b6e2a72756ffb6eaa"},{url:"post/oj/zerojudge/a065/",revision:"58a9f5df4e6abdffebcf329997689088"},{url:"post/oj/zerojudge/a104/",revision:"cff9eacd472707d2a6b35ce1f926701d"},{url:"post/oj/zerojudge/a147/",revision:"eaa874cdaa8d0fbebf946e84fa5bb39c"},{url:"post/oj/zerojudge/a148/",revision:"71cbe58add86b1641056d07c8953037d"},{url:"post/oj/zerojudge/a149/",revision:"21367f80340603b25cee56868bfd0beb"},{url:"post/oj/zerojudge/a215/",revision:"61de44fd0cdfa9f2d640bb561d8af3f9"},{url:"post/oj/zerojudge/a244/",revision:"234ed8df10116f39dd253fe3601c4757"},{url:"post/oj/zerojudge/a263/",revision:"c7ed75b093a59ec17c6e20bd66df1b28"},{url:"post/oj/zerojudge/a528/",revision:"8af892e5770e14d8ba70da8025d1d976"},{url:"post/oj/zerojudge/a738/",revision:"d2b39b9e517f740a6e7dcdbae2c128c0"},{url:"post/oj/zerojudge/a799/",revision:"eb5e6a2f27d6cbbec36dfb899b4544c0"},{url:"post/oj/zerojudge/a915/",revision:"a0fa540cf63c453c5cf0df7f3fc5a2b4"},{url:"post/oj/zerojudge/b294/",revision:"eee6306d3711f6dd299817eda9e74693"},{url:"post/oj/zerojudge/b558/",revision:"85f8cd7df56735718490473d893dfb8f"},{url:"post/oj/zerojudge/b572/",revision:"f776617befbe275df3b9f80df5657404"},{url:"post/oj/zerojudge/b758/",revision:"863e7de1111b2e6002d02abc3ecf224a"},{url:"post/oj/zerojudge/b759/",revision:"60cdd33c7b3fa514e5b9bb75a941d606"},{url:"post/oj/zerojudge/d086/",revision:"46f9dba2e9361bf05e2b6247501a6e5d"},{url:"post/oj/zerojudge/d098/",revision:"cd7ae13ce6b84568e5dbebca40492e2a"},{url:"post/pixiv/",revision:"81429c18f31e2cc8b37cf0e88db40150"},{url:"post/practice/week-01/",revision:"ea5267a6ad976ba494acd6a3d41e52b2"},{url:"post/takming-dormitory-about/",revision:"304b6532cf18bbaa2a87c337ea4e888d"},{url:"post/tool/word-mdeditor/",revision:"b5daafa45b5654111b27395ff0547735"},{url:"Privacy-Policy/",revision:"7d79c703c680f3c7d8249d68980c2b98"},{url:"pwa/16.png",revision:"871e1cb9bb3ca9be3d554ad19c44fec6"},{url:"pwa/32.png",revision:"37aa498ff72bb6ba3b4fa657de9d61b8"},{url:"pwa/apple-touch-icon.png",revision:"6805dc57323a7b898b3ca98aa54f79c7"},{url:"pwa/icon-128x128.png",revision:"6eca034a3b3c9fc8cc1731aaab45651f"},{url:"pwa/icon-192x192.png",revision:"037d5841b9e3850c825165df5e0c399c"},{url:"pwa/icon-256x256.png",revision:"645e8eabb7d108c36ee7fbf7ea000436"},{url:"pwa/icon-384x384.png",revision:"e9e8d842f2cb36d6772933441b80a7c1"},{url:"pwa/icon-512x512.png",revision:"640c46c7202ba98bbef28ca07b272b68"},{url:"pwa/safari-pinned-tab.svg",revision:"0ccb1543abe1e690d1eee0dfda591566"},{url:"random/",revision:"fe57fb411204259d01b081f924022888"},{url:"tags/🦋-Butterfly/",revision:"701d2e5edd2fa4cede9930bb93dce1e2"},{url:"tags/C/",revision:"d67ddbd380cea42a07d5e41c17154b07"},{url:"tags/HEXO/",revision:"06cb34578a19d00a7c70f12e3bb1bdb5"},{url:"tags/",revision:"fa54a2a7c29b6567a60c83f8df245434"},{url:"tags/LeetCode/",revision:"a4032c42bfcf08637eb16ba0faaedf25"},{url:"tags/Python/",revision:"c21c408d0c252fbcbf379c75a56ed6e0"},{url:"tags/Python/page/2/",revision:"798cea7f6d96c4c42cda00f2b98360bf"},{url:"tags/Python/page/3/",revision:"b943d2e75290b72d4ac4a724250bfa0b"},{url:"tags/Python/page/4/",revision:"f5135ec3620055d6cf151b5a48a7e218"},{url:"tags/ZeroJudge/",revision:"b6c2f33f4eede52b3632d7055b07fd4b"},{url:"tags/ZeroJudge/page/2/",revision:"e1009e4afc2bf666dd78e19e5a5d9dc2"},{url:"tags/ZeroJudge/page/3/",revision:"5cd82cd43fee46d33e09debb0d4ed4df"},{url:"tags/ZeroJudge/page/4/",revision:"cc2a2391294c8cd52efb79d8d04b8133"},{url:"tags/機械式鍵盤/",revision:"ef210bcace5fbe843c0fc76d4da73176"},{url:"tags/解題答案/",revision:"641c0901fa68b74d8eab58ebb6f19297"},{url:"tags/解題答案/page/2/",revision:"94045b5437663de5b92066a89cd3939f"},{url:"tags/解題答案/page/3/",revision:"4eb6e61a59ed62df5d01d6adf702f9a1"},{url:"tags/解題答案/page/4/",revision:"73a25747a98f635a2ac251be6518e604"},{url:"timeline/",revision:"f2ff153c3d9611556a136e31e955f728"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));