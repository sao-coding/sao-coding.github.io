if(!self.define){let e,a={};const r=(r,c)=>(r=new URL(r+".js",c).href,a[r]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=a,document.head.appendChild(e)}else e=r,importScripts(r),a()})).then((()=>{let e=a[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(c,d)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(a[i])return;let o={};const s=e=>r(e,i),b={module:{uri:i},exports:o,require:s};a[i]=Promise.all(c.map((e=>b[e]||s(e)))).then((e=>(d(...e),o)))}}define(["./workbox-b5e2a5cf"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"71c177ddae9ef0c1c1ec3e61c06cec37"},{url:"announcement/",revision:"e11b4f85f96ceb12f4594425b6e26fab"},{url:"archives/2022/01/",revision:"5aafe4d4a171d6250e32b13986abad82"},{url:"archives/2022/02/",revision:"3b2862f41376421773f42500bbe43b48"},{url:"archives/2022/02/page/2/",revision:"de46c25895cca63162961dd4fa9f845b"},{url:"archives/2022/02/page/3/",revision:"62c1cc849b592626595cef792660d87d"},{url:"archives/2022/03/",revision:"38596c4fefd37033c5b224eeab087db1"},{url:"archives/2022/04/",revision:"83af533ab19a4023fda6bff7d8b77c2b"},{url:"archives/2022/05/",revision:"54e223193106ad876f4d6d62462fd677"},{url:"archives/2022/07/",revision:"d146e6a895f137f379c54068ce6be1d8"},{url:"archives/2022/08/",revision:"88acb5df4fd8d1d1433ee2bd2339f14c"},{url:"archives/2022/",revision:"6e808377e4b0fe7bb03e9fbe0ee012a1"},{url:"archives/2022/page/2/",revision:"50c490b7f6179cd9c79dcb8b06cb4ffb"},{url:"archives/2022/page/3/",revision:"9972d883a5aafc18c3a97478840d2379"},{url:"archives/2022/page/4/",revision:"11203959873d0df96219c81871ae673e"},{url:"archives/2022/page/5/",revision:"8c7f9408523b6ae368d38f90eb31b8ff"},{url:"archives/",revision:"7ef6bf319e2b8dfec945083de54cca01"},{url:"archives/page/2/",revision:"15f7d682c34d168983855b80b6682752"},{url:"archives/page/3/",revision:"4fabab3cb9f52d98d0e5efe66b290e55"},{url:"archives/page/4/",revision:"010586c087560e1f3428d16a1b68ac5b"},{url:"archives/page/5/",revision:"6331b310939cb92ba957980943e234ce"},{url:"backstage/",revision:"f71ba85b332098e09d245eba43e9ff39"},{url:"bangumis/",revision:"23f44a00d2463e56f794188c2cfcde92"},{url:"categories/HEXO/",revision:"23270db07f1b44309db932ce965ca8a4"},{url:"categories/",revision:"5a0278a952dd31b82bc74a2aba649965"},{url:"categories/LeetCode/",revision:"17c47a1b6946ff9050496f66c1525ad2"},{url:"categories/ZeroJudge/",revision:"f1b6b46bc57e02856d5ecea7e89082dc"},{url:"categories/ZeroJudge/page/2/",revision:"8f147515d6535e206fbd0e317cbb7eb4"},{url:"categories/ZeroJudge/page/3/",revision:"c25b8277314042551f6b0c0d2e3ff1ad"},{url:"categories/ZeroJudge/page/4/",revision:"40466ce4dc69ba8afed55ee218afcd5f"},{url:"categories/宿舍活動/",revision:"6d0f5dcc1ac3889dc4e2edd78604f6bd"},{url:"categories/工具/",revision:"08630ae226d91d2b34f6f9d324c2e06f"},{url:"categories/練習題/",revision:"dc4388897219d24e84a396e4ce8f9bde"},{url:"categories/遊戲/",revision:"29e8d3d508ab428bcb05041dc0002a18"},{url:"categories/鍵盤/",revision:"5c38d48359a90f9771814cf01111b5ce"},{url:"comments/",revision:"09977030ced41cbde0411608198e2869"},{url:"css/hbe.style.css",revision:"a8bc819e01e001d3bc6ae03a2afad957"},{url:"css/index.css",revision:"7a95d01c4103f1f8bb39c85afb92f999"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"fcircle/",revision:"c8ad619ac8ead9897ed7fc4b52dfcc98"},{url:"fonts/SAOUI.ttf",revision:"c4b0afc9f7f1ef7cf5824818a060d580"},{url:"fonts/筑紫A丸by 宁静之雨.woff2",revision:"62c1387e64c98603f856f9d3fa5757c2"},{url:"hpptalk/",revision:"3e7b1520302d931007254ac39d187473"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/app.png",revision:"d1dc0e63bd067e263e8c6c617c13ea93"},{url:"img/avatar.jpg",revision:"4170c577689aa9aa475d35d7cd167024"},{url:"img/cat.png",revision:"e65d9339708c2c11103f4b9ab214179e"},{url:"img/cover.jpg",revision:"2bec8e6a3cb69988f34a2cc453555b59"},{url:"img/favicon.png",revision:"7d837bda9d8d5dd936aa946159e94c7a"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/hexo.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/index.webp",revision:"ae32e7ed43ede769133ae6b4d1c5a279"},{url:"img/mail.png",revision:"14fa675dfc9c09ba6544cee7c2cd899b"},{url:"/",revision:"dd339a1043d374958eb9ae385d345541"},{url:"js/custom/calendar.js",revision:"48bec913bdd35266de9e1e4e3805c754"},{url:"js/custom/hpptalk.js",revision:"b37d68ce076616a9181d224b7e3d1da5"},{url:"js/custom/languages.js",revision:"538b160f8ccb8f13c5b1dd467dfd847c"},{url:"js/custom/rightMenu.js",revision:"470e7fe9b13dc17142e74d55e9cf1a7e"},{url:"js/custom/SAO-Notify.js",revision:"bc191d6cc0277b03742a99b737777964"},{url:"js/custom/sao.js",revision:"c476dd0f9cf35fe239ccc5e59223233e"},{url:"js/main.js",revision:"73e1a92da3a39646678bffb9e7817148"},{url:"js/search/algolia.js",revision:"e6e012ab336d9c1051cf6b37ce9dd4e2"},{url:"js/search/local-search.js",revision:"75362011f03733ec767357b59f19ced1"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"lib/hbe.js",revision:"4a7e94ac7224adfce4b0572ca5c57fef"},{url:"link/",revision:"d3dea5f0714dedb1775e15ab080c6f84"},{url:"page/2/",revision:"f9654acb86a13a4d3209944a5e1e0d30"},{url:"page/3/",revision:"6c45188593476f13378e97b6ce02a594"},{url:"page/4/",revision:"d5b14ef1db8fcef031ba4fc3a00a99f8"},{url:"page/5/",revision:"c02d86c36c4f493b3fbd43052761cc89"},{url:"post/cover/",revision:"8a06d134fd90fff0ce42db246ec441be"},{url:"post/keyboard/keychron-k4v2-keyboard/",revision:"578422ef4b52b28fdeff1ddc17090290"},{url:"post/minecraft-java/",revision:"1a89947306614f8e805e1aa8865b3507"},{url:"post/oj/leetcode/1. Two Sum/",revision:"6f13cac4d6817e47e33cefd2a016ccf1"},{url:"post/oj/zerojudge/a001/",revision:"4a928e59a6bd9ef2217ef1dd5b9235de"},{url:"post/oj/zerojudge/a002/",revision:"edffb2c8d2a72d9251a7dc1d8660a511"},{url:"post/oj/zerojudge/a003/",revision:"593c3614bdd88628cd11e80ad5d3fdd2"},{url:"post/oj/zerojudge/a004/",revision:"34ad0bc71490c0cc781a723252f87c8b"},{url:"post/oj/zerojudge/a005/",revision:"a7f1f6998fbe3e618be8bec096513d07"},{url:"post/oj/zerojudge/a006/",revision:"c5cafa7492dc5d8c510ec9d30bc7dcfe"},{url:"post/oj/zerojudge/a009/",revision:"e704901e875d0e82fe3a60d6cd872f28"},{url:"post/oj/zerojudge/a010/",revision:"f4ea9043bd0cc178e710fb659d807f64"},{url:"post/oj/zerojudge/a015/",revision:"d12183fb7574de69ce3db95dc600a1b8"},{url:"post/oj/zerojudge/a017/",revision:"7be74c685c50f2d2123c2019590eb76e"},{url:"post/oj/zerojudge/a020/",revision:"3be34c248202aacc335b0c258b203460"},{url:"post/oj/zerojudge/a021/",revision:"35e153a64c3f992112870ca62cb81a7f"},{url:"post/oj/zerojudge/a022/",revision:"cbc6be99a3fd6ead1a13ea82e6d2018a"},{url:"post/oj/zerojudge/a024/",revision:"93e59ae26b1211f794d5efaa1955e5c3"},{url:"post/oj/zerojudge/a034/",revision:"6c85f73f75448df9af617413acc6ac59"},{url:"post/oj/zerojudge/a038/",revision:"e38720572d242b279b4eb103ab5ed0c6"},{url:"post/oj/zerojudge/a053/",revision:"1c2591bd3f61c3f735d78b4402535697"},{url:"post/oj/zerojudge/a058/",revision:"27d92ed103482be03a7367c7bde2132c"},{url:"post/oj/zerojudge/a059/",revision:"a37d19af4b7375bd883b67b0dd7fc145"},{url:"post/oj/zerojudge/a065/",revision:"99f868074c1ed45f9dc7848ebd93a385"},{url:"post/oj/zerojudge/a104/",revision:"04f69b590a6fa42faac04d18d3577f31"},{url:"post/oj/zerojudge/a147/",revision:"2500f3cd433badebbb71c281ebf5ad38"},{url:"post/oj/zerojudge/a148/",revision:"ee7123eba5ec331012f6bd1ee2c64b11"},{url:"post/oj/zerojudge/a149/",revision:"97e2fcf158946b867a8dad1bb9592c4f"},{url:"post/oj/zerojudge/a215/",revision:"2563cc2d82e8fa52c924a1e0891a535c"},{url:"post/oj/zerojudge/a244/",revision:"7e960bdb3a31a34b339d06ff333285a2"},{url:"post/oj/zerojudge/a263/",revision:"1dc7a4a0740429341ce0fb35f53bb8d5"},{url:"post/oj/zerojudge/a528/",revision:"93ec175c5423653a0230abc97983ee7c"},{url:"post/oj/zerojudge/a738/",revision:"860ad414ad28e8d3ff7c59d852d067ee"},{url:"post/oj/zerojudge/a799/",revision:"29d87e8c537f8a95c4077bf07d1d58b6"},{url:"post/oj/zerojudge/a915/",revision:"edf0d2185d6ce22797fbcd7799bd20d3"},{url:"post/oj/zerojudge/b294/",revision:"b3a1b7011ca2892d72b83f44c2bc3dc2"},{url:"post/oj/zerojudge/b558/",revision:"2f987eb3960adbf818544bdf3b0dee83"},{url:"post/oj/zerojudge/b572/",revision:"041cfbffe4729ffc0af5a8af63a9f119"},{url:"post/oj/zerojudge/b758/",revision:"333011e0f6204b7531f2981d0b0aa923"},{url:"post/oj/zerojudge/b759/",revision:"5c5d89ee8dbcb75184851cefdb07f92a"},{url:"post/oj/zerojudge/d086/",revision:"4bfc24818e1333c869f707762d658bc0"},{url:"post/oj/zerojudge/d098/",revision:"76d28a2dfa974e7a0d8e9dfe9aea7f91"},{url:"post/pixiv/",revision:"f37cb05f5e18c322687fbf62468206f7"},{url:"post/practice/week-01/",revision:"3bc0f5c3b39565a24ed3d28c0db35120"},{url:"post/takming-dormitory-about/",revision:"ac89f4a4e1551397e40cb602a6aad747"},{url:"post/tool/word-mdeditor/",revision:"06013b062cb10d66f88db19494c4158b"},{url:"Privacy-Policy/",revision:"3dd66053784427a786510d23d7c767a8"},{url:"pwa/16.png",revision:"871e1cb9bb3ca9be3d554ad19c44fec6"},{url:"pwa/32.png",revision:"37aa498ff72bb6ba3b4fa657de9d61b8"},{url:"pwa/apple-touch-icon.png",revision:"6805dc57323a7b898b3ca98aa54f79c7"},{url:"pwa/icon-128x128.png",revision:"6eca034a3b3c9fc8cc1731aaab45651f"},{url:"pwa/icon-192x192.png",revision:"037d5841b9e3850c825165df5e0c399c"},{url:"pwa/icon-256x256.png",revision:"645e8eabb7d108c36ee7fbf7ea000436"},{url:"pwa/icon-384x384.png",revision:"e9e8d842f2cb36d6772933441b80a7c1"},{url:"pwa/icon-512x512.png",revision:"640c46c7202ba98bbef28ca07b272b68"},{url:"pwa/safari-pinned-tab.svg",revision:"0ccb1543abe1e690d1eee0dfda591566"},{url:"random/",revision:"c89def5000205e0e98d3c222c72d5ff3"},{url:"tags/🦋-Butterfly/",revision:"a1d231a1124198be22ba3f4fd9a759c6"},{url:"tags/C/",revision:"5466fcb9bdeeb24c19bd79de5030138e"},{url:"tags/HEXO/",revision:"ada8bf6c603389d554e3c7d4d891b4e7"},{url:"tags/",revision:"e5b9602a115d6556a289e50a9af90d69"},{url:"tags/JAVA版/",revision:"a2e0f45f08b9024bdc1cb4210aeb8fe2"},{url:"tags/LeetCode/",revision:"6bcae56df4127dfec37b2e60b565aae4"},{url:"tags/Minecraft/",revision:"7929fe5e5a114284ba23dd1a4d33adcf"},{url:"tags/Python/",revision:"68da33c066769a2da42563b3eb85e6d0"},{url:"tags/Python/page/2/",revision:"ace6b21dec01b93b8abea1c9b49bbfa8"},{url:"tags/Python/page/3/",revision:"cc8783177c8aaa2f04b426319ed98e97"},{url:"tags/Python/page/4/",revision:"d79dbe4e6bb97d3c74b889b82c035445"},{url:"tags/ZeroJudge/",revision:"5d21ca5001703b02ec5cc834cecf1414"},{url:"tags/ZeroJudge/page/2/",revision:"9b52302c31c6ebbbfb9528042e86fdb1"},{url:"tags/ZeroJudge/page/3/",revision:"ac1ce1e6fe75ccc124f2a9db866d74ad"},{url:"tags/ZeroJudge/page/4/",revision:"e7e221b361104fbac0d8d2abe5c947b1"},{url:"tags/機械式鍵盤/",revision:"10db34db58684d55caf04b3ddae43ff3"},{url:"tags/解題答案/",revision:"e76ed0ed40e81ddeceb41bcd67cec039"},{url:"tags/解題答案/page/2/",revision:"1013322536d420161f03fbe105ebe77d"},{url:"tags/解題答案/page/3/",revision:"ea3711a58049c0efeef3c6c83ce76004"},{url:"tags/解題答案/page/4/",revision:"4685454b473c6a37633bbec3f3a86524"},{url:"timeline/",revision:"f3a5d5ee4e710770c28f8cd93bb349a1"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));