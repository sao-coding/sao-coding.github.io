if(!self.define){let e,a={};const r=(r,c)=>(r=new URL(r+".js",c).href,a[r]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=a,document.head.appendChild(e)}else e=r,importScripts(r),a()})).then((()=>{let e=a[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(c,i)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(a[d])return;let o={};const b=e=>r(e,d),f={module:{uri:d},exports:o,require:b};a[d]=Promise.all(c.map((e=>f[e]||b(e)))).then((e=>(i(...e),o)))}}define(["./workbox-b5e2a5cf"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"c8c472670fa577bfb0af3929ba559f7d"},{url:"announcement/",revision:"f312c4b8d8ef5590ec01411a0c415d13"},{url:"archives/2022/01/",revision:"1214dec26335979efc4b4b54923cd2c8"},{url:"archives/2022/02/",revision:"1c8c7219d13470f9f335ee76c49cc244"},{url:"archives/2022/02/page/2/",revision:"9d0dff2c82d38f3326969230d4ec2c16"},{url:"archives/2022/02/page/3/",revision:"d225555960a15ae2a189c3462379e1ed"},{url:"archives/2022/03/",revision:"08a75580d1b6bea58d1661fdbdbf656e"},{url:"archives/2022/04/",revision:"a1040301d0b475d08dd05972b8bb78c3"},{url:"archives/2022/05/",revision:"4dc49c54485bb3c09dea19be70133e3f"},{url:"archives/2022/07/",revision:"b52c8bf769f76782d8d2ceaaffd80f5b"},{url:"archives/2022/08/",revision:"06b27e2cdf2fe23fe3f0b4f020798798"},{url:"archives/2022/",revision:"03fa9059ff24ce03422e4ee253b71f62"},{url:"archives/2022/page/2/",revision:"dcc8c2c5f6bbc8e7734abbd91b5141b1"},{url:"archives/2022/page/3/",revision:"71314b7b8dd27cab68d5c07cea493335"},{url:"archives/2022/page/4/",revision:"7b74c9b95497b6b2ec586920ddf65790"},{url:"archives/2022/page/5/",revision:"9e1f09ae1a8c02a44a860724582a50d2"},{url:"archives/",revision:"6bb323546aef7fe174f7be10256acf3f"},{url:"archives/page/2/",revision:"afa438cfbd856b3ce56f9e065b91bbe3"},{url:"archives/page/3/",revision:"61f7efd4ffe74030312af3346b79ddff"},{url:"archives/page/4/",revision:"d90e942265423fd8ad7ae8f29f216641"},{url:"archives/page/5/",revision:"22c6c1ce2eec47bb643d9db7603be78e"},{url:"backstage/",revision:"92216cd4f3fdfde28760e931506eb814"},{url:"bangumis/",revision:"42e76f8d1d959eba2612d65fcd3b0625"},{url:"categories/HEXO/",revision:"3cec7d389aa452784aaa86608b5cbd72"},{url:"categories/",revision:"b1c6f268d43bfb1c127e3d1abb0aab0c"},{url:"categories/LeetCode/",revision:"2d21498f02b73ab2b2c2a5aa1b742e9c"},{url:"categories/ZeroJudge/",revision:"248a0f09738b38fb9e6cc538593f5975"},{url:"categories/ZeroJudge/page/2/",revision:"a5c4e7422fe395e02c1817bd97948cbd"},{url:"categories/ZeroJudge/page/3/",revision:"2e4d8abdd0b4b3a55a0acd1cdf93a027"},{url:"categories/ZeroJudge/page/4/",revision:"09355f70596cd83ad5ad0b9b3d473203"},{url:"categories/宿舍活動/",revision:"7a8f7d0122ee16b961df5f224a21bf7f"},{url:"categories/工具/",revision:"a4d63b96832e04cbfa4b10bc8fef2fc3"},{url:"categories/練習題/",revision:"1f03e3029ee657fc75a2908d215d3d70"},{url:"categories/遊戲/",revision:"bba69067bfb23b37325cdd4fde721858"},{url:"categories/鍵盤/",revision:"3b1b63435496262614800bdf5e0c654e"},{url:"comments/",revision:"29d9ec157b4faf4764a74ceeca0b9d7a"},{url:"css/hbe.style.css",revision:"a8bc819e01e001d3bc6ae03a2afad957"},{url:"css/index.css",revision:"dc8c81b4610b2f4da19f12d4f787ba47"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"fcircle/",revision:"13fc277fdf3d28380ffabfc0c32b5756"},{url:"fonts/SAOUI.ttf",revision:"c4b0afc9f7f1ef7cf5824818a060d580"},{url:"fonts/筑紫A丸by 宁静之雨.woff2",revision:"62c1387e64c98603f856f9d3fa5757c2"},{url:"hpptalk/",revision:"51d6762324cb2455d10830601fc04fbc"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/app.png",revision:"d1dc0e63bd067e263e8c6c617c13ea93"},{url:"img/avatar.jpg",revision:"4170c577689aa9aa475d35d7cd167024"},{url:"img/cat.png",revision:"e65d9339708c2c11103f4b9ab214179e"},{url:"img/cover.jpg",revision:"2bec8e6a3cb69988f34a2cc453555b59"},{url:"img/favicon.png",revision:"7d837bda9d8d5dd936aa946159e94c7a"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/hexo.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/index.webp",revision:"ae32e7ed43ede769133ae6b4d1c5a279"},{url:"img/mail.png",revision:"14fa675dfc9c09ba6544cee7c2cd899b"},{url:"/",revision:"d7684af334115a2cca02d10af88a9955"},{url:"js/custom/calendar.js",revision:"48bec913bdd35266de9e1e4e3805c754"},{url:"js/custom/languages.js",revision:"538b160f8ccb8f13c5b1dd467dfd847c"},{url:"js/custom/rightMenu.js",revision:"470e7fe9b13dc17142e74d55e9cf1a7e"},{url:"js/custom/SAO-Notify.js",revision:"bc191d6cc0277b03742a99b737777964"},{url:"js/custom/sao.js",revision:"c476dd0f9cf35fe239ccc5e59223233e"},{url:"js/main.js",revision:"c2d6628801fd2dc0ea1739901cf5d99b"},{url:"js/search/algolia.js",revision:"c2877d1f5b4e89769f2542cc1a3d9133"},{url:"js/search/local-search.js",revision:"75362011f03733ec767357b59f19ced1"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"lib/hbe.js",revision:"4a7e94ac7224adfce4b0572ca5c57fef"},{url:"link/",revision:"aa09ef68dbf0fb8a24393e2852314843"},{url:"page/2/",revision:"8b1df5f8630d427fa224a6871701f2f8"},{url:"page/3/",revision:"065e51c0cd86c7cfb7c7fe1547dbac43"},{url:"page/4/",revision:"226f69c1b0f1f058c8fa0c02cc2a0147"},{url:"page/5/",revision:"a59a8fe9ad19a2f415a08a308880f3a6"},{url:"post/cover/",revision:"1a111a313a27a5d041355ee670bdc00e"},{url:"post/keyboard/keychron-k4v2-keyboard/",revision:"bedc07ce26af8f3fc7b5bfc047d897d9"},{url:"post/minecraft-java/",revision:"26d8bc0d42fadb873f6b181bf407adff"},{url:"post/oj/leetcode/1. Two Sum/",revision:"1e584320a66ac7d3c83ddf84a96a43c1"},{url:"post/oj/zerojudge/a001/",revision:"cf464c76357cb296a42b08e1aa4ac32f"},{url:"post/oj/zerojudge/a002/",revision:"cb5707c5864a914ce98cbb282f64be01"},{url:"post/oj/zerojudge/a003/",revision:"fa17cfa8940d190051b0dd6a85965370"},{url:"post/oj/zerojudge/a004/",revision:"8021972de1065c7355e2f8bf800767c9"},{url:"post/oj/zerojudge/a005/",revision:"40f31f3d1393a0a59093ef8b21e4850e"},{url:"post/oj/zerojudge/a006/",revision:"cc8c91b3e69a56c7c86c09ec2308dafb"},{url:"post/oj/zerojudge/a009/",revision:"a55e7694e9616cb5b3eab66d666bf541"},{url:"post/oj/zerojudge/a010/",revision:"0e3566deada31c5255bd1807b039c6ab"},{url:"post/oj/zerojudge/a015/",revision:"b89d6361c1c63695b38b31dfd5d60f07"},{url:"post/oj/zerojudge/a017/",revision:"fdad47e0274799c9844b18fa59b133bb"},{url:"post/oj/zerojudge/a020/",revision:"3b9cdb6b6d36eb733caffe99714f9089"},{url:"post/oj/zerojudge/a021/",revision:"9f55de7b6fab91495186046e988b1205"},{url:"post/oj/zerojudge/a022/",revision:"707b53b1d71dc4779be0fc96ddd2a8d0"},{url:"post/oj/zerojudge/a024/",revision:"c9c7a37203ab3a68788985bf83aea022"},{url:"post/oj/zerojudge/a034/",revision:"51e93e219c7edfe7c89b3d20a9189be5"},{url:"post/oj/zerojudge/a038/",revision:"ea8266deaafa41278fd93c3a5b772a8b"},{url:"post/oj/zerojudge/a053/",revision:"3cfa3771cba3959d91f748ead4d0c244"},{url:"post/oj/zerojudge/a058/",revision:"5c603a7af065e3d701207b888436e66f"},{url:"post/oj/zerojudge/a059/",revision:"e11645b12b790259145047f1457b597e"},{url:"post/oj/zerojudge/a065/",revision:"172c63db22e73251e44cc72bfaafc772"},{url:"post/oj/zerojudge/a104/",revision:"0efbc6756dbeb3d5b17252640d0b0f05"},{url:"post/oj/zerojudge/a147/",revision:"b02d58589cf8e39e24289911ace0c6fa"},{url:"post/oj/zerojudge/a148/",revision:"acf50fb2e00df700f50db136355838a5"},{url:"post/oj/zerojudge/a149/",revision:"275a0859cd4d09ef72823333f99f05f4"},{url:"post/oj/zerojudge/a215/",revision:"fbe65a012899f4c415a2939baaa1bae1"},{url:"post/oj/zerojudge/a244/",revision:"d37dadfe84395c00780c21abceceb8fe"},{url:"post/oj/zerojudge/a263/",revision:"3dc4b2af1bb05e2274cfbbd679d0d4dd"},{url:"post/oj/zerojudge/a528/",revision:"e770e94c1f2e2acf81c2191619457ed4"},{url:"post/oj/zerojudge/a738/",revision:"159f7cdda6b808989bffbb7a3392d604"},{url:"post/oj/zerojudge/a799/",revision:"9e3158a28c6512fdb774f95db9099c7f"},{url:"post/oj/zerojudge/a915/",revision:"e25510a7c62fbb6253375e0aed6767ea"},{url:"post/oj/zerojudge/b294/",revision:"3719445d6c748e0c9510dc45ecea265d"},{url:"post/oj/zerojudge/b558/",revision:"515388e1f51d12ce840ba21999a4c910"},{url:"post/oj/zerojudge/b572/",revision:"2ce29a213e2583c61dcf04ac56629c71"},{url:"post/oj/zerojudge/b758/",revision:"ae525c9cb8956a07e95fea7143fe4a7b"},{url:"post/oj/zerojudge/b759/",revision:"18de143601d99f775e5d7a1530e81ed2"},{url:"post/oj/zerojudge/d086/",revision:"15759ceb7d50ab818688fa10d2edb211"},{url:"post/oj/zerojudge/d098/",revision:"228aad0bc49815e59668649a52792735"},{url:"post/pixiv/",revision:"011e2f0544c79ee4fbf363b25b7e8928"},{url:"post/practice/week-01/",revision:"07201ee6bb9c20e28ff0cc220463d7c1"},{url:"post/takming-dormitory-about/",revision:"a34b83b233e03b548119509ef12d5f5d"},{url:"post/tool/word-mdeditor/",revision:"6022dbd39e021fdd910d7e579dcc4e09"},{url:"Privacy-Policy/",revision:"60edacb62ffe8fd7042207c5f6d29c02"},{url:"pwa/16.png",revision:"871e1cb9bb3ca9be3d554ad19c44fec6"},{url:"pwa/32.png",revision:"37aa498ff72bb6ba3b4fa657de9d61b8"},{url:"pwa/apple-touch-icon.png",revision:"6805dc57323a7b898b3ca98aa54f79c7"},{url:"pwa/icon-128x128.png",revision:"6eca034a3b3c9fc8cc1731aaab45651f"},{url:"pwa/icon-192x192.png",revision:"037d5841b9e3850c825165df5e0c399c"},{url:"pwa/icon-256x256.png",revision:"645e8eabb7d108c36ee7fbf7ea000436"},{url:"pwa/icon-384x384.png",revision:"e9e8d842f2cb36d6772933441b80a7c1"},{url:"pwa/icon-512x512.png",revision:"640c46c7202ba98bbef28ca07b272b68"},{url:"pwa/safari-pinned-tab.svg",revision:"0ccb1543abe1e690d1eee0dfda591566"},{url:"random/",revision:"3b5ce5c985ad77adcd4b6c49a3234f69"},{url:"tags/🦋-Butterfly/",revision:"f798d8e41e4106692e744255fc04f284"},{url:"tags/C/",revision:"a6601b3bd5e472223fe62bad656385a9"},{url:"tags/HEXO/",revision:"7ed842d824d0a1f9670ea41a324c32a7"},{url:"tags/",revision:"35aee7a302cccfd5af0c94d54bab0fda"},{url:"tags/JAVA版/",revision:"6cdf4aac1826217a1d982e66b6067013"},{url:"tags/LeetCode/",revision:"7f7fc982965f4979c71a3f844944efb2"},{url:"tags/Minecraft/",revision:"a8e4cb5fc6354e53af43abbc6b99d7c9"},{url:"tags/Python/",revision:"51459248b212db3e654c72a44700a634"},{url:"tags/Python/page/2/",revision:"c0697d334b60b1339fc9cba74ddef6e2"},{url:"tags/Python/page/3/",revision:"bd39b79f778c3216f2884e03c50c9990"},{url:"tags/Python/page/4/",revision:"6157200925ba30fa3dd0ddb6e8f067e1"},{url:"tags/ZeroJudge/",revision:"5c3314dbd4efe763a9ce3103cfa078ab"},{url:"tags/ZeroJudge/page/2/",revision:"0de476555ec874e7f4ad9f6cf5b8704a"},{url:"tags/ZeroJudge/page/3/",revision:"2f029a0c9f61fcc09f26ef90bc27e84e"},{url:"tags/ZeroJudge/page/4/",revision:"3b772e3b648d19dcc7c224938067cdb4"},{url:"tags/機械式鍵盤/",revision:"b4785d4924c87570e00bf1185be063d2"},{url:"tags/解題答案/",revision:"1eb642e8a4243641bb80c03a1993fc32"},{url:"tags/解題答案/page/2/",revision:"1bf3732aa9c8e41851d65218c4d7832a"},{url:"tags/解題答案/page/3/",revision:"2e1496c7ef6bce2536d91df45bf8c312"},{url:"tags/解題答案/page/4/",revision:"88c0341db5bd79d62b8d4faa11d4a671"},{url:"timeline/",revision:"7f60ef996864510d35fe50c8fba87d11"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));