if(!self.define){let e,a={};const r=(r,c)=>(r=new URL(r+".js",c).href,a[r]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=a,document.head.appendChild(e)}else e=r,importScripts(r),a()})).then((()=>{let e=a[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(c,i)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(a[o])return;let d={};const s=e=>r(e,o),b={module:{uri:o},exports:d,require:s};a[o]=Promise.all(c.map((e=>b[e]||s(e)))).then((e=>(i(...e),d)))}}define(["./workbox-b5e2a5cf"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"95c989055ef6e45b8a661b6d308a0228"},{url:"announcement/",revision:"b5b0492ff264bfa424f347dfb7464a25"},{url:"archives/2022/01/",revision:"b6acac25fdb6d96ca3c2d878b4ce4621"},{url:"archives/2022/02/",revision:"45f130a1ccb21355e7268deb24026f9a"},{url:"archives/2022/02/page/2/",revision:"1c71c70b79ac171a379475591d81520a"},{url:"archives/2022/02/page/3/",revision:"f382fc80dedfc55175c6975e4706e079"},{url:"archives/2022/03/",revision:"ee68b0bbf2f6199d3ddb422760fe181b"},{url:"archives/2022/04/",revision:"1a06b96138fb4e91cfdf987ef611688d"},{url:"archives/2022/05/",revision:"58b6ec9a4308e0179754c5904e948c06"},{url:"archives/2022/07/",revision:"11c2af0c9f09ef5393d453e95e636311"},{url:"archives/2022/08/",revision:"4549e2b1ad013428a7f74c148523c015"},{url:"archives/2022/",revision:"72a972c9149d93db49b76024cbbf137e"},{url:"archives/2022/page/2/",revision:"5d65eaed7d7d4903c4167f93d4dd8ea5"},{url:"archives/2022/page/3/",revision:"76c3a33e374f184ede030af75b77903e"},{url:"archives/2022/page/4/",revision:"1f9844b5a2a1b828fb2d7f7b4d591785"},{url:"archives/2022/page/5/",revision:"457ba1c2e6718f339ea36b4713230ec1"},{url:"archives/",revision:"23b081fee0860d99f06222875ef156eb"},{url:"archives/page/2/",revision:"f0015c34c954ea0f11174d04fce6bcbf"},{url:"archives/page/3/",revision:"cabe2f9168aa9afff1595e9a51a50b90"},{url:"archives/page/4/",revision:"4b8b9a0be2ca1e304c7e5b6c6c564fba"},{url:"archives/page/5/",revision:"6d17e3873d069d8b75a2958505ed2c93"},{url:"backstage/",revision:"c84ad5cb649a3410fcc19f1ee01d8e04"},{url:"bangumis/",revision:"d483053b6068fcc5655d170d258ee9db"},{url:"categories/HEXO/",revision:"5708d3f8361987c2e05c25051e001850"},{url:"categories/",revision:"a560dbf092d913960b3c04dd3830a993"},{url:"categories/LeetCode/",revision:"3982c762210d97486ab1881f9d2300f2"},{url:"categories/ZeroJudge/",revision:"48ce948270e81ad8900dda749756ada8"},{url:"categories/ZeroJudge/page/2/",revision:"757d9c1e6414366dc80afe00f872b70f"},{url:"categories/ZeroJudge/page/3/",revision:"89e557e88d648621d6cfb4f6f089c1ce"},{url:"categories/ZeroJudge/page/4/",revision:"26493dcf7f8c9b021c74db398049453c"},{url:"categories/宿舍活動/",revision:"eabe2c59aedf515d613aaeb98db97a60"},{url:"categories/工具/",revision:"d13fb62928ec915cd3bc34fc45535192"},{url:"categories/練習題/",revision:"b1910fb0d261740dabb3b9cbd39e2d63"},{url:"categories/遊戲/",revision:"34053047c840b85ffd1476563efab8f9"},{url:"categories/鍵盤/",revision:"1479f99856ae5e46d46e8c3c8417d7e9"},{url:"comments/",revision:"9a7be6171ccd476622d1c4b5399a6542"},{url:"css/hbe.style.css",revision:"a8bc819e01e001d3bc6ae03a2afad957"},{url:"css/index.css",revision:"40f74ced6816fd0b34261e29eb78949b"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"fcircle/",revision:"cc43f79a7c760191422dbdfb8854f133"},{url:"fonts/SAOUI.ttf",revision:"c4b0afc9f7f1ef7cf5824818a060d580"},{url:"fonts/筑紫A丸by 宁静之雨.woff2",revision:"62c1387e64c98603f856f9d3fa5757c2"},{url:"hpptalk/",revision:"0b8b888ae364be8c28d2440e16ea4492"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/app.png",revision:"d1dc0e63bd067e263e8c6c617c13ea93"},{url:"img/avatar.jpg",revision:"4170c577689aa9aa475d35d7cd167024"},{url:"img/cat.png",revision:"e65d9339708c2c11103f4b9ab214179e"},{url:"img/cover.jpg",revision:"2bec8e6a3cb69988f34a2cc453555b59"},{url:"img/favicon.png",revision:"7d837bda9d8d5dd936aa946159e94c7a"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/hexo.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/index.webp",revision:"ae32e7ed43ede769133ae6b4d1c5a279"},{url:"img/mail.png",revision:"14fa675dfc9c09ba6544cee7c2cd899b"},{url:"/",revision:"ca8569526cbf2eca04e47d09fa618e4d"},{url:"js/custom/calendar.js",revision:"48bec913bdd35266de9e1e4e3805c754"},{url:"js/custom/hpptalk.js",revision:"b37d68ce076616a9181d224b7e3d1da5"},{url:"js/custom/languages.js",revision:"538b160f8ccb8f13c5b1dd467dfd847c"},{url:"js/custom/rightMenu.js",revision:"470e7fe9b13dc17142e74d55e9cf1a7e"},{url:"js/custom/SAO-Notify.js",revision:"bc191d6cc0277b03742a99b737777964"},{url:"js/custom/sao.js",revision:"c476dd0f9cf35fe239ccc5e59223233e"},{url:"js/custom/sun_moon.js",revision:"a4e43ec9df5df0f5db20e910b5a3ab1e"},{url:"js/custom/universe.js",revision:"df3e74f701dfc1379342871273c8c014"},{url:"js/custom/wow_init.js",revision:"63bfe63fafe66b52f51b7add85f86447"},{url:"js/main.js",revision:"73e1a92da3a39646678bffb9e7817148"},{url:"js/search/algolia.js",revision:"e6e012ab336d9c1051cf6b37ce9dd4e2"},{url:"js/search/local-search.js",revision:"75362011f03733ec767357b59f19ced1"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"lib/hbe.js",revision:"4a7e94ac7224adfce4b0572ca5c57fef"},{url:"link/",revision:"a63b803b5c2e86e64a16e8a7fc39c912"},{url:"page/2/",revision:"e6d0ad18db2f84d3366e475fd41306c6"},{url:"page/3/",revision:"5c80f6db1e5ca2fe440381e62a43e454"},{url:"page/4/",revision:"e14777b55b6bb540bc71d44c38ced3b8"},{url:"page/5/",revision:"52a948ff3a3e386a04707dccfde95d44"},{url:"post/cover/",revision:"03dd23793d20459771adc11d1ba944c0"},{url:"post/keyboard/keychron-k4v2-keyboard/",revision:"295536186e8bfed0561aa11cb19ccdd5"},{url:"post/minecraft-java/",revision:"4a51bc1ea293c19b353ba198c89b1562"},{url:"post/oj/leetcode/1. Two Sum/",revision:"a49bd81d2a8c8b5a6e1844187d31b1d6"},{url:"post/oj/zerojudge/a001/",revision:"ecaf6b62270a1d0938530fd3ee7c8f0d"},{url:"post/oj/zerojudge/a002/",revision:"cf4dc86fce43a3e9e9001dda95d50cd2"},{url:"post/oj/zerojudge/a003/",revision:"68bcf79d2adddc958b826ff4928a8714"},{url:"post/oj/zerojudge/a004/",revision:"ab9d1c87ef4ba0673f78d7f0eb4b3ad9"},{url:"post/oj/zerojudge/a005/",revision:"effd1c38a608faa777756e4088fc49f9"},{url:"post/oj/zerojudge/a006/",revision:"be9488e51e9bbf61a320b43e6c782410"},{url:"post/oj/zerojudge/a009/",revision:"1ee450c9ffb93c5579893d882ad2b2b4"},{url:"post/oj/zerojudge/a010/",revision:"8a53e5f385dbe28035f8decd61fff00a"},{url:"post/oj/zerojudge/a015/",revision:"54861b2eb5620e8ccaa171499e8c4248"},{url:"post/oj/zerojudge/a017/",revision:"0d724bb27d3dbf244257295307e9c5a3"},{url:"post/oj/zerojudge/a020/",revision:"c89390007070b62fc3e4f45a2356305a"},{url:"post/oj/zerojudge/a021/",revision:"c45f38bad49391f803eb90738c1d2544"},{url:"post/oj/zerojudge/a022/",revision:"cd7e5fdbfcfad1e765d43e9c10f596de"},{url:"post/oj/zerojudge/a024/",revision:"4acec77e5e3fe37f49bb350ac7ab8c15"},{url:"post/oj/zerojudge/a034/",revision:"8d6131142e5e448cc4751bb797051210"},{url:"post/oj/zerojudge/a038/",revision:"da646d5079d7b1c5988b1de972b01474"},{url:"post/oj/zerojudge/a053/",revision:"4e79247e35b3665f07074aba75375f7c"},{url:"post/oj/zerojudge/a058/",revision:"58901b5e49a1da1823246174db70afad"},{url:"post/oj/zerojudge/a059/",revision:"b2d1030aa0bc8c6830b102486edafd71"},{url:"post/oj/zerojudge/a065/",revision:"895a771b96ce79f57ba3be29e7e23150"},{url:"post/oj/zerojudge/a104/",revision:"ee543754d2a877db180a6f7e32828e9a"},{url:"post/oj/zerojudge/a147/",revision:"beff3977a20f23023ef4dd0cfb33ab9d"},{url:"post/oj/zerojudge/a148/",revision:"2381eb4ae293ef30fac0ca3fe07640ce"},{url:"post/oj/zerojudge/a149/",revision:"f385a4d03d88b3f3b60557d3937e8911"},{url:"post/oj/zerojudge/a215/",revision:"b62f4ac5da7ba0a19b0ed330514e04ec"},{url:"post/oj/zerojudge/a244/",revision:"e757a1c47e3d199869bce29f0b06c212"},{url:"post/oj/zerojudge/a263/",revision:"25330cdf8bd811f257bafe844540a1e8"},{url:"post/oj/zerojudge/a528/",revision:"c4656d5a6400bc6d007b93bc96c703ed"},{url:"post/oj/zerojudge/a738/",revision:"f54e8f2f3360426d4ea3fadf39c98f7f"},{url:"post/oj/zerojudge/a799/",revision:"016178629d834df42ef552e6f49303fe"},{url:"post/oj/zerojudge/a915/",revision:"98da2bae3fc6052e1e2f0e0cf2667840"},{url:"post/oj/zerojudge/b294/",revision:"9c7a2e4aee0e1096193f1a28d128ca26"},{url:"post/oj/zerojudge/b558/",revision:"34256c987e91d9f373ce9f55ee718cd2"},{url:"post/oj/zerojudge/b572/",revision:"b4b4b8a23ea09453ec6631ac1f1a9e2c"},{url:"post/oj/zerojudge/b758/",revision:"238cae1782ee9cdcd1524af996528110"},{url:"post/oj/zerojudge/b759/",revision:"a5a91aa9afc9350484403b14800356e0"},{url:"post/oj/zerojudge/d086/",revision:"41c0a7e0e8bc28f98432dfa8f27d4092"},{url:"post/oj/zerojudge/d098/",revision:"848d02e28595d94a7cc161b648737651"},{url:"post/pixiv/",revision:"230a7e6dff5886ddb84eb7068fba8659"},{url:"post/practice/week-01/",revision:"2b8b8dbee91e7703277e2fdc676a2a89"},{url:"post/takming-dormitory-about/",revision:"ebd09e246ea01cf2821dd338c559c017"},{url:"post/tool/word-mdeditor/",revision:"580cca394e7a7adb302b3aac5206581e"},{url:"Privacy-Policy/",revision:"cb6feb9674e57eab7049c2e905cf77d7"},{url:"pwa/16.png",revision:"871e1cb9bb3ca9be3d554ad19c44fec6"},{url:"pwa/32.png",revision:"37aa498ff72bb6ba3b4fa657de9d61b8"},{url:"pwa/apple-touch-icon.png",revision:"6805dc57323a7b898b3ca98aa54f79c7"},{url:"pwa/icon-128x128.png",revision:"6eca034a3b3c9fc8cc1731aaab45651f"},{url:"pwa/icon-192x192.png",revision:"037d5841b9e3850c825165df5e0c399c"},{url:"pwa/icon-256x256.png",revision:"645e8eabb7d108c36ee7fbf7ea000436"},{url:"pwa/icon-384x384.png",revision:"e9e8d842f2cb36d6772933441b80a7c1"},{url:"pwa/icon-512x512.png",revision:"640c46c7202ba98bbef28ca07b272b68"},{url:"pwa/safari-pinned-tab.svg",revision:"0ccb1543abe1e690d1eee0dfda591566"},{url:"random/",revision:"c89def5000205e0e98d3c222c72d5ff3"},{url:"tags/🦋-Butterfly/",revision:"22cc1db1c80769cc79effe3bc0351947"},{url:"tags/C/",revision:"15a701d7d2b9e6359895030434502a3f"},{url:"tags/HEXO/",revision:"b47ea24d24a2020b54358fc58e21ad73"},{url:"tags/",revision:"c0449e5a7b71731fc72bfcfd804e00cf"},{url:"tags/JAVA版/",revision:"b91a8311078f63321ff9159c2ebdb619"},{url:"tags/LeetCode/",revision:"5a08ffaaee537036b9ecb0632ed5a070"},{url:"tags/Minecraft/",revision:"880aa83bb62a3cc936fd43f9b6d1c147"},{url:"tags/Python/",revision:"1a1bfb82b6d4fb02a770f039e253a456"},{url:"tags/Python/page/2/",revision:"dc8af81e141200a5aa75e91307372cfa"},{url:"tags/Python/page/3/",revision:"efb61ffbf398ab7c343c9ff25f2110f4"},{url:"tags/Python/page/4/",revision:"c85db7b0f38c5a419e842750024fade0"},{url:"tags/ZeroJudge/",revision:"4eb3b0ba6f0af25ecc72685e942726a3"},{url:"tags/ZeroJudge/page/2/",revision:"1e61f249abbfda31819145528cf264ff"},{url:"tags/ZeroJudge/page/3/",revision:"48d4bff71fa5b68465026430a7d1fe2c"},{url:"tags/ZeroJudge/page/4/",revision:"1cbbd235621e647e69bb0abeed6ce390"},{url:"tags/機械式鍵盤/",revision:"b10f24daa00f9f2231366b364878b33b"},{url:"tags/解題答案/",revision:"77b1bc8f1e1ca335d429c18e8b95ac64"},{url:"tags/解題答案/page/2/",revision:"4dbb3bc74e8c0db631bc74218459ff17"},{url:"tags/解題答案/page/3/",revision:"976ce9ff3f766b1eaea7267f3660fe6f"},{url:"tags/解題答案/page/4/",revision:"8cbf817768ef3f59bceb2863a676908a"},{url:"timeline/",revision:"83c583c56eab927a92ec2b29a56e4bd5"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));